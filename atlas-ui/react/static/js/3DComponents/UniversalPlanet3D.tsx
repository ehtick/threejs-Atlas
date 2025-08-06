import * as THREE from "three";

// Type definitions for the planet rendering data
interface PlanetRenderingData {
  planet_info: {
    name: string;
    type: string;
    base_color: string;
    radius: number;
    diameter: number;
    density: number;
    gravity: number;
    axial_tilt: number;
    rotation_period: number;
    orbital_period: number;
  };
  seeds: {
    shape_seed: number;
    config_seed: string;
    planet_seed: number;
  };
  timing: {
    current_rotation_angle: number;
    orbital_angle: number;
    tilt_factor: number;
    cosmic_origin_time: number;
    time_elapsed_seconds: number;
  };
  surface_elements: any;
  atmosphere?: {
    type: string;
    color: number[];
    width: number;
    blur_radius: number;
  };
  rings?: {
    has_rings: boolean;
    inner_radius: number;
    outer_radius: number;
    tilt_factor: number;
    rotation_angle: number;
    full_ring: {
      num_particles: number;
      particles: Array<{
        x: number;
        y: number;
        z: number;
        size: number;
        color: number[];
        angle: number;
        distance: number;
      }>;
    };
    ontop_ring: {
      num_particles: number;
      particles: Array<{
        x: number;
        y: number;
        z: number;
        size: number;
        color: number[];
        angle: number;
        distance: number;
      }>;
    };
  };
  life_forms?: {
    type: string;
    effects: Array<{
      type: string;
      position?: number[];
      intensity?: number;
      color?: number[];
      size?: number;
      animation_speed?: number;
    }>;
  };
  shader_uniforms: {
    [key: string]: {
      value: any;
      type: string;
    };
  };
}

interface UniversalPlanet3DProps {
  scene: THREE.Scene;
  planetMesh: THREE.Mesh;
  planetRadius: number;
  planetName: string;
  onDataLoaded?: (data: PlanetRenderingData) => void;
}

// SeededRandom utility class (removed as it's not used in this component)
// The seeding is handled server-side in Python

// Universal shader system that adapts to different planet types
const universalVertexShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  
  void main() {
    vPosition = position;
    vNormal = normal;
    vUv = uv;
    
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const universalFragmentShader = `
  uniform float time;
  uniform float seed;
  uniform vec3 baseColor;
  uniform float rotationAngle;
  uniform int planetTypeCode; // Encoded planet type
  
  // Gas Giant uniforms (EXACTLY like GasGiant3D.tsx)
  uniform float numBands;
  uniform float bandPositions[20];
  uniform float bandWidths[20];
  uniform float bandRotation;
  
  // Rocky planet uniforms (EXACT Pillow data)
  uniform float mountainCount;
  uniform vec3 mountainPositions[30];  // [x, y, angle]
  uniform vec3 mountainSizes[30];      // [width, height, 0]
  uniform float cloudCount;
  uniform vec3 cloudPositions[10];     // [x, y, radius]
  uniform bool hasCrater;
  uniform vec3 craterPosition;         // [x, y, radius]
  
  // Icy planet uniforms (EXACT Pillow data)
  uniform float crystalCount;
  uniform vec3 crystalPositions[50];   // [x, y, angle]
  uniform vec3 crystalSizes[50];       // [length, width, 0]
  uniform float crackCount;
  uniform vec2 crackAngles[12];        // [angle, length]
  uniform float iceCapCount;
  uniform vec3 iceCapPositions[4];     // [x, y, radius]
  
  // Universal attributes
  uniform float atmosphereWidth;
  uniform vec4 atmosphereColor;
  uniform bool hasRings;
  
  // Metallic planet uniforms
  uniform float reflectionCount;
  uniform vec3 reflectionPositions[50];
  uniform vec3 reflectionProperties[50];
  uniform float darkLandCount;
  uniform vec4 darkLandSegments[10];
  uniform float blackLandCount;
  uniform vec4 blackLandSegments[10];
  uniform float silverCloudCount;
  uniform vec3 silverCloudPositions[10];
  uniform float scratchCount;
  uniform vec4 scratchStarts[50];
  uniform vec4 scratchEnds[50];
  
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  
  // Utility functions
  float hash(float n) {
    return fract(sin(n + seed) * 43758.5453123);
  }
  
  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float n = i.x + i.y * 57.0 + 113.0 * i.z;
    return mix(
      mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
          mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
      mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
          mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
  }
  
  // EXACT recreation of Gas Giant bands from Pillow data
  float createCloudBands(vec3 pos) {
    float bands = 0.0;
    
    // Bands are HORIZONTAL (constant latitude) from north pole to south pole
    // pos.y is already normalized from -1 (south pole) to +1 (north pole)
    float currentY = pos.y;
    float currentX = pos.x; // For rotation
    
    // Apply rotation EXACTLY as in Pillow
    float cosAngle = cos(bandRotation);
    float sinAngle = sin(bandRotation);
    
    // Rotation in normalized coordinates
    float rotatedY = sinAngle * currentX + cosAngle * currentY;
    
    // Check if we are inside any horizontal band
    for(int i = 0; i < 20; i++) {
      if(float(i) >= numBands) break;
      
      float bandPosY = bandPositions[i]; // Already normalized between -1 and 1
      float bandWidth = bandWidths[i];   // Already normalized
      
      // Check if rotatedY is inside this band
      float distToBand = abs(rotatedY - bandPosY);
      if(distToBand < bandWidth / 2.0) {
        // Smooth band edges
        float bandIntensity = 1.0 - (distToBand / (bandWidth / 2.0));
        bands += bandIntensity * 0.6;
      }
    }
    
    return bands;
  }

  vec3 renderGasGiant(vec3 pos) {
    vec3 color = baseColor;
    
    // Use EXACT Pillow cloud bands
    float bands = createCloudBands(pos);
    
    // Apply orange bands EXACTLY as in Pillow (255, 165, 0, 1)
    vec3 bandColor = vec3(1.0, 0.647, 0.0); // #FFA500 original orange
    color = mix(color, bandColor * 1.2, bands * 0.8);
    
    // Add storm variation (red) in certain zones - like Pillow
    float stormZone = smoothstep(0.7, 1.0, noise(pos * 4.0 + vec3(time * 0.1)));
    color = mix(color, vec3(0.545, 0.0, 0.0), stormZone * 0.6); // dark red
    
    return color;
  }
  
  vec3 renderRocky(vec3 pos) {
    vec3 color = baseColor;
    
    // EXACT abstract land masses (use subtle noise as base texture)
    // Layer 0: darker gray areas (38, 38, 38, 165)
    float landBase = noise(pos * 3.0) * 0.4;
    color = mix(color, vec3(0.149, 0.149, 0.149), landBase * 0.3);
    
    // Layer 1: lighter gray areas (80, 80, 80, 40) - more subtle
    float landHighlight = noise(pos * 5.0) * 0.2;
    color = mix(color, vec3(0.314, 0.314, 0.314), landHighlight * 0.1);
    
    // EXACT mountains using API data - MUCH MORE VISIBLE
    for(int i = 0; i < 30; i++) {
      if(float(i) >= mountainCount) break;
      
      vec3 mountainPos = mountainPositions[i]; // [x, y, angle]
      vec3 mountainSize = mountainSizes[i];    // [width, height, 0]
      
      // Distance to mountain center
      float distToMountain = distance(pos.xy, mountainPos.xy);
      
      // Create triangular mountain peak (like Pillow line drawing)
      if(distToMountain < mountainSize.x) {
        // Calculate height based on distance - triangular shape
        float normalizedDist = distToMountain / mountainSize.x;
        float mountainHeight = (1.0 - normalizedDist) * mountainSize.y;
        
        if(mountainHeight > 0.0) {
          float mountainIntensity = mountainHeight * 2.0; // Make more visible
          
          // Mountain color (130, 130, 130, 1) from Pillow - VERY VISIBLE
          vec3 mountainColor = vec3(0.8, 0.8, 0.8); // Lighter for visibility
          color = mix(color, mountainColor, mountainIntensity * 0.9);
        }
      }
    }
    
    // EXACT clouds using API data - MORE VISIBLE
    for(int i = 0; i < 10; i++) {
      if(float(i) >= cloudCount) break;
      
      vec3 cloudPos = cloudPositions[i]; // [x, y, radius]
      
      float distToCloud = distance(pos.xy, cloudPos.xy);
      
      if(distToCloud < cloudPos.z) {
        float cloudIntensity = 1.0 - (distToCloud / cloudPos.z);
        cloudIntensity = smoothstep(0.0, 1.0, cloudIntensity);
        
        // Gray cloud color (0.5, 0.5, 0.5, 0.7) from Pillow - MORE VISIBLE
        vec3 cloudColor = vec3(0.7, 0.7, 0.7); // Lighter for visibility
        color = mix(color, cloudColor, cloudIntensity * 0.8);
      }
    }
    
    // EXACT crater using API data - VERY VISIBLE
    if(hasCrater) {
      float distToCrater = distance(pos.xy, craterPosition.xy);
      
      if(distToCrater < craterPosition.z) {
        float craterIntensity = 1.0 - (distToCrater / craterPosition.z);
        craterIntensity = smoothstep(0.0, 1.0, craterIntensity);
        
        // Create rim effect for crater
        float rimEffect = 1.0 - abs(craterIntensity - 0.8) / 0.2;
        if(craterIntensity > 0.6 && craterIntensity < 1.0) {
          rimEffect = max(rimEffect, 0.0);
        } else {
          rimEffect = 0.0;
        }
        
        // Darkgray crater color (0.3, 0.3, 0.3, 1.0) from Pillow
        vec3 craterColor = vec3(0.1, 0.1, 0.1); // Much darker for visibility
        vec3 rimColor = vec3(0.4, 0.4, 0.4); // Lighter rim
        
        color = mix(color, craterColor, craterIntensity * 0.9);
        color = mix(color, rimColor, rimEffect * 0.5);
      }
    }
    
    return color;
  }
  
  vec3 renderIcy(vec3 pos) {
    vec3 color = baseColor;
    
    // EXACT abstract land masses (use subtle noise as base texture)
    // Layer 0: Subtle darker blue areas (126, 169, 214, 150)
    float landBase = noise(pos * 2.0) * 0.3; // Much more subtle
    color = mix(color, vec3(0.494, 0.663, 0.839), landBase * 0.2);
    
    // Layer 1: Very subtle lighter areas (81, 106, 145, 1) - almost invisible
    float landHighlight = noise(pos * 4.0) * 0.1;
    color = mix(color, vec3(0.318, 0.416, 0.569), landHighlight * 0.02);
    
    // EXACT crystals using API data - MUCH MORE VISIBLE
    for(int i = 0; i < 50; i++) {
      if(float(i) >= crystalCount) break;
      
      vec3 crystalPos = crystalPositions[i]; // [x, y, angle]
      vec3 crystalSize = crystalSizes[i];    // [length, width, 0]
      
      // Calculate distance to crystal center
      float distToCrystal = distance(pos.xy, crystalPos.xy);
      
      // Create crystal shape using both length and width
      float crystalRadius = max(crystalSize.x, crystalSize.y); // Use larger dimension
      
      if(distToCrystal < crystalRadius) {
        // Create rectangular crystal shape with rotation
        float angle = crystalPos.z; // rotation angle
        vec2 rotatedPos = pos.xy - crystalPos.xy;
        
        // Rotate the position to align with crystal orientation
        float cosA = cos(angle);
        float sinA = sin(angle);
        vec2 aligned = vec2(
          rotatedPos.x * cosA + rotatedPos.y * sinA,
          -rotatedPos.x * sinA + rotatedPos.y * cosA
        );
        
        // Check if inside crystal rectangle
        if(abs(aligned.x) < crystalSize.x && abs(aligned.y) < crystalSize.y) {
          float crystalIntensity = 1.0 - max(abs(aligned.x)/crystalSize.x, abs(aligned.y)/crystalSize.y);
          
          // Crystal color (172, 215, 230, 255) from Pillow - VERY VISIBLE
          vec3 crystalColor = vec3(0.675, 0.843, 0.902);
          color = mix(color, crystalColor, crystalIntensity * 0.8); // Much more visible
        }
      }
    }
    
    // EXACT cracks using API data - MORE VISIBLE
    for(int i = 0; i < 12; i++) {
      if(float(i) >= crackCount) break;
      
      vec2 crackData = crackAngles[i]; // [angle, length]
      
      float crackAngle = crackData.x;
      float crackLength = crackData.y;
      
      // Create crack line from center outward
      vec2 crackDir = vec2(cos(crackAngle), sin(crackAngle));
      
      // Distance from the crack line
      float distAlongCrack = dot(pos.xy, crackDir);
      float distFromCrack = abs(dot(pos.xy, vec2(-crackDir.y, crackDir.x)));
      
      // Check if we're on the crack line
      if(distFromCrack < 0.015 && abs(distAlongCrack) < crackLength * 0.5) {
        float crackIntensity = 1.0 - (distFromCrack / 0.015);
        
        // Crack color (80, 80, 80, 40) from Pillow - MORE VISIBLE
        vec3 crackColor = vec3(0.2, 0.2, 0.2); // Darker for visibility
        color = mix(color, crackColor, crackIntensity * 0.6);
      }
    }
    
    // EXACT ice caps using API data - VERY VISIBLE
    for(int i = 0; i < 4; i++) {
      if(float(i) >= iceCapCount) break;
      
      vec3 iceCapPos = iceCapPositions[i]; // [x, y, radius]
      
      float distToIceCap = distance(pos.xy, iceCapPos.xy);
      
      if(distToIceCap < iceCapPos.z) {
        float iceCapIntensity = 1.0 - (distToIceCap / iceCapPos.z);
        // Smooth falloff
        iceCapIntensity = smoothstep(0.0, 1.0, iceCapIntensity);
        
        // Lightblue ice cap color (0.678, 0.847, 1.0, 0.8) from Pillow
        vec3 iceCapColor = vec3(0.678, 0.847, 1.0);
        color = mix(color, iceCapColor, iceCapIntensity * 0.9); // Very visible
      }
    }
    
    return color;
  }
  
  vec3 renderOceanic(vec3 pos) {
    vec3 color = baseColor;
    
    // Animated water waves
    float waves1 = sin(pos.x * 8.0 + time * 2.0) * sin(pos.z * 8.0 + time * 1.5);
    float waves2 = sin(pos.x * 15.0 - time * 1.8) * sin(pos.z * 12.0 + time * 2.2);
    float waves = (waves1 + waves2 * 0.5) * 0.3;
    
    color += vec3(0.0, 0.2, 0.4) * waves;
    
    // Add continental masses (higher areas = lighter)
    float landmass = noise(pos * 3.0);
    if(landmass > 0.3) {
      color = mix(color, vec3(0.4, 0.6, 0.2), smoothstep(0.3, 0.7, landmass));
    }
    
    // Deep ocean trenches (darker)
    float depth = noise(pos * 6.0);
    if(depth < 0.2) {
      color *= 0.5;
    }
    
    // Add foam/whitecaps
    float foam = noise(pos * 20.0 + vec3(time * 3.0));
    if(foam > 0.8) {
      color = mix(color, vec3(0.9, 0.9, 1.0), 0.4);
    }
    
    return color;
  }
  
  vec3 renderDesert(vec3 pos) {
    vec3 color = baseColor;
    
    // Sand dune patterns with wind direction
    float dunes1 = noise(vec3(pos.x * 4.0, pos.y * 2.0, pos.z * 8.0 + time * 0.1));
    float dunes2 = noise(vec3(pos.x * 8.0, pos.y * 4.0, pos.z * 6.0));
    
    color += vec3(0.3, 0.2, 0.1) * dunes1 * 0.6;
    color += vec3(0.2, 0.15, 0.05) * dunes2 * 0.4;
    
    // Heat shimmer effect
    float shimmer = sin(time * 4.0 + pos.y * 10.0) * sin(time * 3.0 + pos.x * 8.0);
    color += vec3(0.1, 0.05, 0.0) * shimmer * 0.3;
    
    // Add rocky outcrops
    float rocks = noise(pos * 12.0);
    if(rocks > 0.7) {
      color = mix(color, vec3(0.6, 0.4, 0.3), 0.5);
    }
    
    // Oasis spots (very rare)
    float oasis = noise(pos * 2.0);
    if(oasis > 0.85) {
      color = mix(color, vec3(0.2, 0.8, 0.3), 0.6);
    }
    
    return color;
  }
  
  vec3 renderDefault(vec3 pos) {
    vec3 color = baseColor;
    
    // Generic surface texture with more detail
    float surfaceDetail = noise(pos * 8.0) + noise(pos * 16.0) * 0.5 + noise(pos * 32.0) * 0.25;
    color += vec3(0.2, 0.15, 0.1) * surfaceDetail;
    
    // Add some variation based on position
    float variation = sin(pos.x * 5.0) * sin(pos.y * 7.0) * sin(pos.z * 6.0);
    color += vec3(0.1) * variation;
    
    return color;
  }
  
  // UNIVERSAL ACTION FUNCTIONS
  
  vec3 drawPointedCrystal(vec3 pos, vec2 position, float radius, float layers, vec4 color, float angle) {
    vec3 result = vec3(0.0);
    
    float distToCenter = distance(pos.xy, position);
    
    if(distToCenter < radius) {
      // Create star/pointed crystal shape
      float angleToPoint = atan(pos.y - position.y, pos.x - position.x);
      angleToPoint += angle; // Apply rotation
      
      // Create pointed star shape with multiple spikes
      float numSpikes = max(layers, 4.0);
      float spikeAngle = 2.0 * 3.14159 / numSpikes;
      
      float intensity = 0.0;
      for(float spike = 0.0; spike < numSpikes; spike += 1.0) {
        float currentSpikeAngle = spike * spikeAngle;
        float angleDiff = abs(mod(angleToPoint - currentSpikeAngle + 3.14159, 2.0 * 3.14159) - 3.14159);
        
        // Create sharp spike
        if(angleDiff < spikeAngle * 0.5) {
          float spikeIntensity = 1.0 - (angleDiff / (spikeAngle * 0.5));
          float distanceIntensity = 1.0 - (distToCenter / radius);
          
          // Make spikes pointed and sharp
          spikeIntensity = pow(spikeIntensity, 3.0);
          distanceIntensity = pow(distanceIntensity, 2.0);
          
          intensity = max(intensity, spikeIntensity * distanceIntensity);
        }
      }
      
      result = color.rgb * intensity * color.a;
    }
    
    return result;
  }
  
  vec3 drawPolygonArea(vec3 pos, vec2 center, float radius, vec4 color) {
    vec3 result = vec3(0.0);
    
    float distToCenter = distance(pos.xy, center);
    if(distToCenter < radius) {
      float intensity = 1.0 - (distToCenter / radius);
      intensity = smoothstep(0.0, 1.0, intensity);
      result = color.rgb * intensity * color.a;
    }
    
    return result;
  }
  
  vec3 drawBlurredCircle(vec3 pos, vec2 position, float radius, vec4 color) {
    vec3 result = vec3(0.0);
    
    float distToCenter = distance(pos.xy, position);
    if(distToCenter < radius) {
      float intensity = 1.0 - (distToCenter / radius);
      // Simulate gaussian blur with quadratic falloff
      intensity = intensity * intensity;
      result = color.rgb * intensity * color.a;
    }
    
    return result;
  }
  
  vec3 drawLine(vec3 pos, vec2 start, vec2 end, vec4 color, float width) {
    vec3 result = vec3(0.0);
    
    vec2 lineVec = end - start;
    vec2 pointVec = pos.xy - start;
    float lineLength = length(lineVec);
    
    if(lineLength > 0.0) {
      float t = clamp(dot(pointVec, lineVec) / (lineLength * lineLength), 0.0, 1.0);
      vec2 projection = start + t * lineVec;
      float distToLine = distance(pos.xy, projection);
      
      if(distToLine < width) {
        float intensity = 1.0 - (distToLine / width);
        result = color.rgb * intensity * color.a;
      }
    }
    
    return result;
  }
  
  vec3 executeUniversalActions(vec3 pos) {
    vec3 color = baseColor;
    
    // DEBUG: Add red tint to confirm this function is called
    color += vec3(0.2, 0.0, 0.0);
    
    return color;
  }
  
  // Add more planet types
  vec3 renderLava(vec3 pos) {
    vec3 color = baseColor;
    
    // Lava flows
    float lavaFlow = noise(pos * 6.0 + vec3(0.0, time * 0.5, 0.0));
    if(lavaFlow > 0.4) {
      color = mix(color, vec3(1.0, 0.3, 0.0), smoothstep(0.4, 0.8, lavaFlow));
    }
    
    // Hot spots
    float hotSpots = noise(pos * 15.0 + vec3(time * 2.0));
    if(hotSpots > 0.7) {
      color += vec3(1.0, 0.8, 0.0) * 0.8;
    }
    
    // Cracks with glow
    float cracks = abs(sin(pos.x * 25.0) * sin(pos.z * 25.0));
    if(cracks > 0.9) {
      color = mix(color, vec3(1.0, 0.5, 0.0), 0.9);
    }
    
    return color;
  }
  
  vec3 renderToxic(vec3 pos) {
    vec3 color = baseColor;
    
    // Toxic pools
    float toxicPools = noise(pos * 8.0);
    if(toxicPools > 0.5) {
      color = mix(color, vec3(0.5, 0.0, 0.8), smoothstep(0.5, 0.8, toxicPools));
    }
    
    // Poisonous gas clouds
    float gasCloud = noise(pos * 4.0 + vec3(time * 0.3));
    color += vec3(0.3, 0.0, 0.4) * gasCloud * 0.4;
    
    // Acid rain effect
    float acid = sin(pos.y * 20.0 + time * 5.0) * 0.2;
    color += vec3(0.1, 0.3, 0.0) * acid;
    
    return color;
  }
  
  vec3 renderCrystalline(vec3 pos) {
    vec3 color = baseColor;
    
    // Crystal formations
    float crystals = abs(sin(pos.x * 12.0) * sin(pos.y * 12.0) * sin(pos.z * 12.0));
    if(crystals > 0.8) {
      color = mix(color, vec3(0.8, 1.0, 1.0), 0.7);
    }
    
    // Refractive patterns
    float refraction = noise(pos * 20.0 + vec3(time));
    color += vec3(0.3, 0.5, 0.8) * refraction * 0.3;
    
    // Sparkling effect
    float sparkle = noise(pos * 50.0 + vec3(time * 4.0));
    if(sparkle > 0.9) {
      color += vec3(1.0) * 0.6;
    }
    
    return color;
  }
  
  void main() {
    vec3 pos = normalize(vPosition);
    vec3 finalColor = baseColor;
    
    // Route to appropriate rendering function based on planet type
    if (planetTypeCode == 0) { // Gas Giant
      finalColor = renderGasGiant(pos);
    } else if (planetTypeCode == 1) { // Rocky
      finalColor = renderRocky(pos);
    } else if (planetTypeCode == 2) { // Icy
      finalColor = renderIcy(pos);
    } else if (planetTypeCode == 3) { // Oceanic
      finalColor = renderOceanic(pos);
    } else if (planetTypeCode == 4) { // Desert
      finalColor = renderDesert(pos);
    } else if (planetTypeCode == 5) { // Lava
      finalColor = renderLava(pos);
    } else if (planetTypeCode == 14) { // Toxic
      finalColor = renderToxic(pos);
    } else if (planetTypeCode == 12) { // Crystalline
      finalColor = renderCrystalline(pos);
    } else if (planetTypeCode == 13) { // Metallic - Use Universal System
      finalColor = executeUniversalActions(pos);
    } else {
      // DEBUG: Show planet type code as color intensity
      float debugIntensity = float(planetTypeCode) / 26.0;
      finalColor = renderDefault(pos);
      finalColor += vec3(0.0, 0.0, debugIntensity * 0.3); // Blue tint showing planet type
    }
    
    // Apply basic lighting
    vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
    float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
    finalColor *= lighting;
    
    // Apply atmosphere glow if present
    if (atmosphereWidth > 0.0) {
      float fresnel = 1.0 - abs(dot(vNormal, normalize(vWorldPosition)));
      fresnel = pow(fresnel, 2.0);
      finalColor = mix(finalColor, atmosphereColor.rgb, fresnel * atmosphereColor.a * 0.3);
    }
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const UniversalPlanet3D = {
  async create(props: UniversalPlanet3DProps) {
    const { planetMesh, planetName, scene, onDataLoaded } = props;
    
    try {
      // Fetch planet rendering data from the API
      const response = await fetch(`/api/planet/${encodeURIComponent(planetName)}/rendering-data`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch planet data');
      }
      
      const renderingData: PlanetRenderingData = result.rendering_data;
      
      // Convert planet type to code for shader
      const planetTypeMap: { [key: string]: number } = {
        "Gas Giant": 0,
        "Rocky": 1,
        "Icy": 2,
        "Oceanic": 3,
        "Desert": 4,
        "Lava": 5,
        "Arid": 6,
        "Swamp": 7,
        "Tundra": 8,
        "Forest": 9,
        "Savannah": 10,
        "Cave": 11,
        "Crystalline": 12,
        "Metallic": 13,
        "Toxic": 14,
        "Radioactive": 15,
        "Magma": 16,
        "Molten Core": 17,
        "Carbon": 18,
        "Diamond": 19,
        "Super Earth": 20,
        "Sub Earth": 21,
        "Frozen Gas Giant": 22,
        "Nebulous": 23,
        "Aquifer": 24,
        "Exotic": 25,
        "Anomaly": 26
      };
      
      const planetTypeCode = planetTypeMap[renderingData.planet_info.type] || 99;
      
      console.log('🔧 METALLIC DEBUG - Planet type:', renderingData.planet_info.type);
      console.log('🔧 METALLIC DEBUG - Planet type code:', planetTypeCode);
      console.log('🔧 METALLIC DEBUG - Expected code for Metallic:', planetTypeMap['Metallic']);
      
      if (renderingData.planet_info.type === 'Metallic') {
        console.log('🔧 METALLIC PLANET DETECTED! Should render with metallic shader');
        console.log('🔧 METALLIC DEBUG - Surface elements:', renderingData.surface_elements);
      }
      
      // Convert hex color to RGB
      const hexToRgb = (hex: string): THREE.Color => {
        const color = new THREE.Color(hex);
        return color;
      };
      
      const baseColor = hexToRgb(renderingData.planet_info.base_color);
      
      // Call callback if provided
      if (onDataLoaded) {
        onDataLoaded(renderingData);
      }
      
      // Debug logging
      console.log('🌍 Planet rendering data loaded:', {
        planetName: renderingData.planet_info.name,
        planetType: renderingData.planet_info.type,
        planetTypeCode: planetTypeCode,
        baseColor: baseColor,
        surfaceElements: renderingData.surface_elements,
        hasRings: renderingData.rings?.has_rings,
        hasAtmosphere: !!renderingData.atmosphere
      });
      
      // Prepare shader uniforms
      const uniforms: { [key: string]: any } = {
        time: { value: 0.0 },
        seed: { value: renderingData.seeds.shape_seed * 0.001 },
        baseColor: { value: baseColor },
        rotationAngle: { value: renderingData.timing.current_rotation_angle },
        planetTypeCode: { value: planetTypeCode },
        
        // Default values for all planet types
        numBands: { value: 0 },
        bandPositions: { value: new Array(20).fill(0) },
        bandWidths: { value: new Array(20).fill(0) },
        bandRotation: { value: 0 },
        
        mountainCount: { value: 0 },
        mountainPositions: { value: new Array(30).fill(new THREE.Vector3()) },
        mountainSizes: { value: new Array(30).fill(new THREE.Vector3()) },
        
        cloudCount: { value: 0 },
        cloudPositions: { value: new Array(10).fill(new THREE.Vector3()) },
        hasCrater: { value: false },
        craterPosition: { value: new THREE.Vector3() },
        
        crystalCount: { value: 0 },
        crystalPositions: { value: new Array(50).fill(new THREE.Vector3()) },
        crystalSizes: { value: new Array(50).fill(new THREE.Vector3()) },
        
        crackCount: { value: 0 },
        crackAngles: { value: new Array(12).fill(new THREE.Vector2()) },
        iceCapCount: { value: 0 },
        iceCapPositions: { value: new Array(4).fill(new THREE.Vector3()) },
        
        atmosphereWidth: { value: 0 },
        atmosphereColor: { value: new THREE.Vector4(0, 0, 0, 0) },
        
        // Metallic planet uniforms
        reflectionCount: { value: 0 },
        reflectionPositions: { value: new Array(50).fill(new THREE.Vector3()) },
        reflectionProperties: { value: new Array(50).fill(new THREE.Vector3()) },
        darkLandCount: { value: 0 },
        darkLandSegments: { value: new Array(10).fill(new THREE.Vector4()) },
        blackLandCount: { value: 0 },
        blackLandSegments: { value: new Array(10).fill(new THREE.Vector4()) },
        silverCloudCount: { value: 0 },
        silverCloudPositions: { value: new Array(10).fill(new THREE.Vector3()) },
        scratchCount: { value: 0 },
        scratchStarts: { value: new Array(50).fill(new THREE.Vector4()) },
        scratchEnds: { value: new Array(50).fill(new THREE.Vector4()) },
        hasRings: { value: false }
      };
      
      // Apply planet-specific uniforms using EXACT data from API
      if (renderingData.surface_elements) {
        const surface = renderingData.surface_elements;
        
        if (surface.type === "gas_giant" && surface.cloud_bands) {
          console.log('🌀 Applying Gas Giant bands:', surface.cloud_bands);
          uniforms.numBands.value = surface.cloud_bands.num_bands;
          uniforms.bandPositions.value = surface.cloud_bands.positions;
          uniforms.bandWidths.value = surface.cloud_bands.widths;
          uniforms.bandRotation.value = surface.cloud_bands.rotation;
        }
        
        if (surface.type === "rocky") {
          console.log('🏔️ Applying Rocky planet data:', surface);
          
          // Mountains
          if (surface.mountains) {
            uniforms.mountainCount.value = surface.mountains.length;
            const mountainPositions = new Array(30).fill(new THREE.Vector3());
            const mountainSizes = new Array(30).fill(new THREE.Vector3());
            
            surface.mountains.forEach((mountain: any, i: number) => {
              if (i < 30) {
                mountainPositions[i] = new THREE.Vector3(mountain.position[0], mountain.position[1], mountain.angle);
                mountainSizes[i] = new THREE.Vector3(mountain.width, mountain.height, 0);
              }
            });
            
            uniforms.mountainPositions.value = mountainPositions;
            uniforms.mountainSizes.value = mountainSizes;
          }
          
          // Clouds
          if (surface.clouds) {
            uniforms.cloudCount.value = surface.clouds.length;
            const cloudPositions = new Array(10).fill(new THREE.Vector3());
            
            surface.clouds.forEach((cloud: any, i: number) => {
              if (i < 10) {
                cloudPositions[i] = new THREE.Vector3(cloud.position[0], cloud.position[1], cloud.radius);
              }
            });
            
            uniforms.cloudPositions.value = cloudPositions;
          }
          
          // Crater
          if (surface.crater) {
            uniforms.hasCrater.value = true;
            uniforms.craterPosition.value = new THREE.Vector3(
              surface.crater.position[0], 
              surface.crater.position[1], 
              surface.crater.radius
            );
          }
        }
        
        if (surface.type === "universal_actions") {
          console.log('🎮 UNIVERSAL ACTIONS SYSTEM - Processing actions:', surface.actions?.length || 0);
          
          // Build dynamic shader code for each action
          let shaderActionCode = `vec3 color = baseColor;\n`;
          
          if (surface.actions) {
            surface.actions.forEach((action: any, index: number) => {
              console.log(`🎯 Action ${index}: ${action.type}`, action);
              
              switch (action.type) {
                case 'draw_pointed_crystal':
                  shaderActionCode += `
                    // Crystal ${index}
                    color += drawPointedCrystal(pos, 
                      vec2(${action.position[0]}, ${action.position[1]}), 
                      ${action.radius}, 
                      ${action.layers}, 
                      vec4(${action.color[0]}, ${action.color[1]}, ${action.color[2]}, ${action.color[3]}),
                      ${action.angle}
                    );
                  `;
                  break;
                  
                case 'draw_polygon_area':
                  // Calculate center from points
                  const centerX = action.points.reduce((sum: number, p: number[]) => sum + p[0], 0) / action.points.length;
                  const centerY = action.points.reduce((sum: number, p: number[]) => sum + p[1], 0) / action.points.length;
                  const maxDist = Math.max(...action.points.map((p: number[]) => Math.sqrt((p[0] - centerX)**2 + (p[1] - centerY)**2)));
                  
                  shaderActionCode += `
                    // Polygon ${index}  
                    color += drawPolygonArea(pos,
                      vec2(${centerX}, ${centerY}),
                      ${maxDist},
                      vec4(${action.color[0]}, ${action.color[1]}, ${action.color[2]}, ${action.color[3]})
                    );
                  `;
                  break;
                  
                case 'draw_blurred_circle':
                  shaderActionCode += `
                    // Cloud ${index}
                    color += drawBlurredCircle(pos,
                      vec2(${action.position[0]}, ${action.position[1]}),
                      ${action.radius},
                      vec4(${action.color[0]}, ${action.color[1]}, ${action.color[2]}, ${action.color[3]})
                    );
                  `;
                  break;
                  
                case 'draw_line':
                  shaderActionCode += `
                    // Line ${index}
                    color += drawLine(pos,
                      vec2(${action.start[0]}, ${action.start[1]}),
                      vec2(${action.end[0]}, ${action.end[1]}),
                      vec4(${action.color[0]}, ${action.color[1]}, ${action.color[2]}, ${action.color[3]}),
                      ${action.width}
                    );
                  `;
                  break;
              }
            });
          }
          
          shaderActionCode += `return color;`;
          
          console.log('🔧 Generated shader code:', shaderActionCode);
          
          // Replace the executeUniversalActions function in the shader
          const updatedFragmentShader = universalFragmentShader.replace(
            /vec3 executeUniversalActions\(vec3 pos\) {[\s\S]*?return color;\s*}/,
            `vec3 executeUniversalActions(vec3 pos) {\n    ${shaderActionCode}\n  }`
          );
          
          console.log('🎮 Updated fragment shader with universal actions');
          
          // Store the updated shader for material creation
          console.log('🔧 Using updated shader with universal actions');
          finalFragmentShader = updatedFragmentShader;
          
        } else if (surface.type === "metallic") {
          console.log('🔧 METALLIC PLANET DEBUG - Applying data:', surface);
          console.log('🔧 METALLIC REFLECTIONS:', surface.reflections?.length || 0);
          console.log('🔧 METALLIC DARK LANDS:', surface.dark_lands?.length || 0);
          console.log('🔧 METALLIC SILVER CLOUDS:', surface.silver_clouds?.length || 0);
          console.log('🔧 METALLIC SCRATCHES:', surface.scratches?.length || 0);
          
          // Metallic reflections (crystal-like structures)
          if (surface.reflections) {
            uniforms.reflectionCount.value = surface.reflections.length;
            const reflectionPositions = new Array(50).fill(new THREE.Vector3());
            const reflectionProperties = new Array(50).fill(new THREE.Vector3());
            
            surface.reflections.forEach((reflection: any, i: number) => {
              if (i < 50) {
                reflectionPositions[i] = new THREE.Vector3(
                  reflection.position[0], 
                  reflection.position[1], 
                  reflection.radius
                );
                reflectionProperties[i] = new THREE.Vector3(
                  reflection.layers,
                  reflection.points_per_layer,
                  reflection.color[3] // alpha
                );
              }
            });
            
            uniforms.reflectionPositions.value = reflectionPositions;
            uniforms.reflectionProperties.value = reflectionProperties;
          }
          
          // Dark metallic lands
          if (surface.dark_lands) {
            uniforms.darkLandCount.value = Math.min(surface.dark_lands.length, 10);
            const darkLandSegments = new Array(10).fill(new THREE.Vector4());
            
            surface.dark_lands.forEach((land: any, i: number) => {
              if (i < 10 && land.points && land.points.length > 0) {
                // Use first point as center and estimate radius
                const centerX = land.points.reduce((sum: number, p: number[]) => sum + p[0], 0) / land.points.length;
                const centerY = land.points.reduce((sum: number, p: number[]) => sum + p[1], 0) / land.points.length;
                const maxDist = Math.max(...land.points.map((p: number[]) => Math.sqrt((p[0] - centerX)**2 + (p[1] - centerY)**2)));
                
                darkLandSegments[i] = new THREE.Vector4(centerX, centerY, maxDist, land.color[3]);
              }
            });
            
            uniforms.darkLandSegments.value = darkLandSegments;
          }
          
          // Black metallic lands  
          if (surface.black_lands) {
            uniforms.blackLandCount.value = Math.min(surface.black_lands.length, 10);
            const blackLandSegments = new Array(10).fill(new THREE.Vector4());
            
            surface.black_lands.forEach((land: any, i: number) => {
              if (i < 10 && land.points && land.points.length > 0) {
                // Use first point as center and estimate radius
                const centerX = land.points.reduce((sum: number, p: number[]) => sum + p[0], 0) / land.points.length;
                const centerY = land.points.reduce((sum: number, p: number[]) => sum + p[1], 0) / land.points.length;
                const maxDist = Math.max(...land.points.map((p: number[]) => Math.sqrt((p[0] - centerX)**2 + (p[1] - centerY)**2)));
                
                blackLandSegments[i] = new THREE.Vector4(centerX, centerY, maxDist, land.color[3]);
              }
            });
            
            uniforms.blackLandSegments.value = blackLandSegments;
          }
          
          // Silver clouds
          if (surface.silver_clouds) {
            uniforms.silverCloudCount.value = Math.min(surface.silver_clouds.length, 10);
            const silverCloudPositions = new Array(10).fill(new THREE.Vector3());
            
            surface.silver_clouds.forEach((cloud: any, i: number) => {
              if (i < 10) {
                silverCloudPositions[i] = new THREE.Vector3(
                  cloud.position[0],
                  cloud.position[1],
                  cloud.radius
                );
              }
            });
            
            uniforms.silverCloudPositions.value = silverCloudPositions;
          }
          
          // Surface scratches
          if (surface.scratches) {
            uniforms.scratchCount.value = Math.min(surface.scratches.length, 50);
            const scratchStarts = new Array(50).fill(new THREE.Vector4());
            const scratchEnds = new Array(50).fill(new THREE.Vector4());
            
            surface.scratches.forEach((scratch: any, i: number) => {
              if (i < 50) {
                scratchStarts[i] = new THREE.Vector4(
                  scratch.start[0],
                  scratch.start[1], 
                  scratch.color[3], // alpha
                  scratch.width
                );
                scratchEnds[i] = new THREE.Vector4(scratch.end[0], scratch.end[1], 0, 0);
              }
            });
            
            uniforms.scratchStarts.value = scratchStarts;
            uniforms.scratchEnds.value = scratchEnds;
          }
        }
        
        if (surface.type === "icy") {
          console.log('❄️ Applying Icy planet data:', surface);
          
          // Crystals
          if (surface.crystals) {
            uniforms.crystalCount.value = surface.crystals.length;
            const crystalPositions = new Array(50).fill(new THREE.Vector3());
            const crystalSizes = new Array(50).fill(new THREE.Vector3());
            
            surface.crystals.forEach((crystal: any, i: number) => {
              if (i < 50) {
                crystalPositions[i] = new THREE.Vector3(crystal.position[0], crystal.position[1], crystal.angle);
                crystalSizes[i] = new THREE.Vector3(crystal.length, crystal.width, 0);
              }
            });
            
            uniforms.crystalPositions.value = crystalPositions;
            uniforms.crystalSizes.value = crystalSizes;
          }
          
          // Cracks
          if (surface.cracks) {
            uniforms.crackCount.value = surface.cracks.length;
            const crackAngles = new Array(12).fill(new THREE.Vector2());
            
            surface.cracks.forEach((crack: any, i: number) => {
              if (i < 12) {
                crackAngles[i] = new THREE.Vector2(crack.angle, crack.length);
              }
            });
            
            uniforms.crackAngles.value = crackAngles;
          }
          
          // Ice caps
          if (surface.ice_caps) {
            uniforms.iceCapCount.value = surface.ice_caps.length;
            const iceCapPositions = new Array(4).fill(new THREE.Vector3());
            
            surface.ice_caps.forEach((iceCap: any, i: number) => {
              if (i < 4) {
                iceCapPositions[i] = new THREE.Vector3(iceCap.position[0], iceCap.position[1], iceCap.radius);
              }
            });
            
            uniforms.iceCapPositions.value = iceCapPositions;
          }
        }
      }
      
      // Apply atmosphere uniforms
      if (renderingData.atmosphere) {
        uniforms.atmosphereWidth.value = renderingData.atmosphere.width;
        uniforms.atmosphereColor.value = new THREE.Vector4(
          renderingData.atmosphere.color[0],
          renderingData.atmosphere.color[1],
          renderingData.atmosphere.color[2],
          renderingData.atmosphere.color[3]
        );
      }
      
      // Apply rings flag
      if (renderingData.rings) {
        uniforms.hasRings.value = renderingData.rings.has_rings;
      }
      
      // Will create shader material after processing surface elements
      let finalFragmentShader = universalFragmentShader;
      
      // Create rings if present
      if (renderingData.rings && renderingData.rings.has_rings) {
        this.createRings(scene, renderingData.rings, planetMesh.position);
      }
      
      // Create atmosphere if present
      if (renderingData.atmosphere) {
        this.createAtmosphere(scene, renderingData.atmosphere, renderingData.planet_info.radius, planetMesh.position);
      }
      
      // Create life form effects if present
      if (renderingData.life_forms && renderingData.life_forms.effects) {
        this.createLifeEffects(scene, renderingData.life_forms.effects, renderingData.planet_info.radius, planetMesh.position);
      }
      
      // Create the final shader material with the updated fragment shader
      const shaderMaterial = new THREE.ShaderMaterial({
        vertexShader: universalVertexShader,
        fragmentShader: finalFragmentShader,
        uniforms: uniforms
      });
      
      // Replace planet material
      planetMesh.material = shaderMaterial;
      
      console.log('🎮 Final shader material created and applied');
      
      // Start animation loop
      this.startAnimation(shaderMaterial, renderingData);
      
    } catch (error) {
      console.error('Error creating universal planet:', error);
      
      // Fallback to basic material
      const fallbackMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x888888 
      });
      planetMesh.material = fallbackMaterial;
    }
  },
  
  createRings(scene: THREE.Scene, ringsData: any, planetPosition: THREE.Vector3) {
    // Create ring particles as points (using individual particles instead of ring geometry)
    const particlePositions: number[] = [];
    const particleColors: number[] = [];
    
    // Add full ring particles
    ringsData.full_ring.particles.forEach((particle: any) => {
      particlePositions.push(
        particle.x / 200,
        particle.y / 200,
        particle.z / 200
      );
      particleColors.push(
        particle.color[0],
        particle.color[1],
        particle.color[2]
      );
    });
    
    // Add ontop ring particles
    ringsData.ontop_ring.particles.forEach((particle: any) => {
      particlePositions.push(
        particle.x / 200,
        particle.y / 200,
        particle.z / 200
      );
      particleColors.push(
        particle.color[0],
        particle.color[1],
        particle.color[2]
      );
    });
    
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.Float32BufferAttribute(particleColors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.002,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    const ringParticles = new THREE.Points(particleGeometry, particleMaterial);
    ringParticles.position.copy(planetPosition);
    scene.add(ringParticles);
  },
  
  createAtmosphere(scene: THREE.Scene, atmosphereData: any, planetRadius: number, planetPosition: THREE.Vector3) {
    const atmosphereGeometry = new THREE.SphereGeometry(
      (planetRadius + atmosphereData.width) / 200,
      32,
      32
    );
    
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(
        atmosphereData.color[0],
        atmosphereData.color[1],
        atmosphereData.color[2]
      ),
      transparent: true,
      opacity: atmosphereData.color[3],
      side: THREE.DoubleSide
    });
    
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphereMesh.position.copy(planetPosition);
    scene.add(atmosphereMesh);
  },
  
  createLifeEffects(scene: THREE.Scene, lifeEffects: any[], planetRadius: number, planetPosition: THREE.Vector3) {
    lifeEffects.forEach(effect => {
      if (effect.type === "city_lights") {
        const lightGeometry = new THREE.SphereGeometry(0.001, 8, 8);
        const lightMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color(effect.color[0], effect.color[1], effect.color[2]),
          transparent: true,
          opacity: effect.color[3]
        });
        
        const light = new THREE.Mesh(lightGeometry, lightMaterial);
        light.position.set(
          planetPosition.x + effect.position[0] * planetRadius / 200,
          planetPosition.y + effect.position[1] * planetRadius / 200,
          planetPosition.z
        );
        scene.add(light);
      }
    });
  },
  
  startAnimation(material: THREE.ShaderMaterial, renderingData: PlanetRenderingData) {
    const animate = () => {
      // Update time uniform
      material.uniforms.time.value += 0.01;
      
      // Update rotation based on real time
      const currentTime = Date.now() / 1000;
      const timeElapsed = currentTime - renderingData.timing.cosmic_origin_time;
      const angleVelocity = (2 * Math.PI) / renderingData.planet_info.rotation_period;
      const currentRotation = (renderingData.timing.current_rotation_angle + timeElapsed * angleVelocity) % (2 * Math.PI);
      
      material.uniforms.rotationAngle.value = currentRotation;
      
      requestAnimationFrame(animate);
    };
    animate();
  }
};

export default UniversalPlanet3D;