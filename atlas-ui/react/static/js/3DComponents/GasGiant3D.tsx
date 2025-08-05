import * as THREE from "three";

interface GasGiant3DProps {
  scene: THREE.Scene;
  planetMesh: THREE.Mesh;
  planetRadius: number;
  planetData: {
    diameter: number;
    density: number;
    gravity: number;
    mass: number;
    orbital_radius_m: number;
    rotation_period_seconds: number;
    surface_temperature: number;
    axial_tilt: number;
    seed: number;
    cosmicOriginTime?: number;
    initialAngleRotation?: number;
  };
  planetName: string;
}


class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed % 2147483647;
    if (this.seed <= 0) this.seed += 2147483646;
  }

  random(): number {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }

  randint(min: number, max: number): number {
    return Math.floor(this.random() * (max - min + 1)) + min;
  }

  uniform(min: number, max: number): number {
    return this.random() * (max - min) + min;
  }
}

function consistentHash(inputString: string): number {
  let hash = 0;
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}




// Vertex shader for Gas Giant
const gasGiantVertexShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  
  void main() {
    vPosition = position;
    vNormal = normal;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment shader that recreates Pillow patterns in 3D
const gasGiantFragmentShader = `
  uniform float time;
  uniform float seed;
  uniform vec3 planetColor;
  uniform float numBands;
  uniform float rotationAngle;
  uniform float bandPositions[20]; // Máximo 20 bandas como en Pillow
  uniform float bandWidths[20];
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  
  // Hash function to generate pseudo-random numbers
  float hash(float n) {
    return fract(sin(n + seed) * 43758.5453123);
  }
  
  // Simple noise function
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
  
  // Recreate generate_cloud_bands EXACTLY as in Pillow
  float createCloudBands(vec3 pos) {
    float bands = 0.0;
    
    // Bands are HORIZONTAL (constant latitude) from north pole to south pole
    // pos.y is already normalized from -1 (south pole) to +1 (north pole)
    float currentY = pos.y;
    float currentX = pos.x; // For rotation
    
    // Apply rotation EXACTLY as in Pillow
    float cosAngle = cos(rotationAngle);
    float sinAngle = sin(rotationAngle);
    
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
        bands += bandIntensity * 0.6; // A bit more intense
      }
    }
    
    return bands;
  }
  
  // Function to create concentric rings like draw_planet_rings
  float createRings(vec3 pos) {
    float distance = length(pos);
    float rings = 0.0;
    
    // Create multiple concentric rings
    for(int i = 0; i < 30; i++) {
      float ringRadius = 0.5 + float(i) * 0.015;
      float ringWidth = 0.01;
      float opacity = pow((30.0 - float(i)) / 30.0, 4.0) * 0.3;
      
      float ringDist = abs(distance - ringRadius);
      if(ringDist < ringWidth) {
        rings += opacity * (1.0 - ringDist / ringWidth);
      }
    }
    
    return rings;
  }
  
  // Function to create cloud formations
  float createClouds(vec3 pos) {
    float clouds = 0.0;
    
    // Use noise to create irregular cloud patterns
    clouds += 0.5 * noise(pos * 8.0);
    clouds += 0.25 * noise(pos * 16.0);
    clouds += 0.125 * noise(pos * 32.0);
    
    // Add subtle temporal variation
    clouds += 0.1 * sin(time * 0.1 + length(pos) * 10.0);
    
    return smoothstep(0.3, 0.7, clouds);
  }
  
  void main() {
    vec3 pos = normalize(vPosition);
    
    // Base color of gas giant (orange)
    vec3 baseColor = vec3(1.0, 0.647, 0.0); // #FFA500 orange
    
    // Create cloud bands EXACTLY as in Pillow
    float bands = createCloudBands(pos);
    
    // Create surface rings
    float rings = createRings(pos);
    
    // Create cloud formations
    float clouds = createClouds(pos);
    
    // Combine all elements
    vec3 finalColor = baseColor;
    
    // Apply orange bands EXACTLY as in Pillow (255, 165, 0, 1)
    vec3 bandColor = vec3(1.0, 0.647, 0.0); // #FFA500 original orange
    finalColor = mix(finalColor, bandColor * 1.2, bands * 0.8); // More opacity for better visibility
    
    // Apply rings (darken)
    finalColor *= (1.0 - rings * 0.5);
    
    // Apply clouds (lighter tone)
    finalColor += clouds * vec3(0.3, 0.2, 0.1);
    
    // Add storm variation (red) in certain zones
    float stormZone = smoothstep(0.7, 1.0, noise(pos * 4.0 + vec3(seed * 0.1)));
    finalColor = mix(finalColor, vec3(0.545, 0.0, 0.0), stormZone * 0.6); // dark red
    
    // Apply basic lighting
    float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
    finalColor *= lighting;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const GasGiant3D = {
  async create(props: GasGiant3DProps) {
    const { planetMesh, planetName, planetData } = props;
    
    // Generate EXACTLY the same seed that Pillow uses
    const spacedPlanetName = planetName.replace(/_/g, ' ');
    
    // Reproduce exactly the logic from __atlas_config.py
    const seedStr = "1.618033988749895"; // Value from atlas.ini
    const seedHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(seedStr));
    const seedHashHex = Array.from(new Uint8Array(seedHash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    // config.seed is the complete SHA256 hash integer
    // In Python: int(hash, 16) - we use BigInt to handle large numbers
    const configSeed = BigInt('0x' + seedHashHex);
    
    const diameter = planetData.diameter || 1000;
    const density = planetData.density || 5.5;
    const gravity = planetData.gravity || 9.8;
    
    // This is the EXACT formula used in __drawer_class_planet.py line 87-89
    const seedString = `${configSeed.toString()}-${spacedPlanetName}-Gas Giant-${diameter}-${density}-${gravity}-_safe_shaper`;
    const realSeed = consistentHash(seedString);
    const rng = new SeededRandom(realSeed);
    
    // EXACTLY as in generate_cloud_bands from Pillow
    const numBands = rng.randint(3, 20); // min_num_bands=3, max_num_bands=20
    const rotationAngle = rng.uniform(-15, 15) * Math.PI / 180; // Exact as Pillow
    
    // Generate band positions and widths EXACTLY as in Pillow
    const bandPositions: number[] = [];
    const bandWidths: number[] = [];
    const planetRadius = 100; // Reference radius as in Pillow
    const centerY = 200; // Center Y in Pillow system (400x400 image)
    
    for (let i = 0; i < numBands; i++) {
      const bandWidth = rng.randint(2, 4);
      // EXACTLY as in Pillow: center_y - planet_radius to center_y + planet_radius
      const bandPositionY = rng.randint(centerY - planetRadius, centerY + planetRadius);
      
      // Convert Pillow coordinates to sphere
      // In Pillow with center=200, radius=100: Y goes from 100 (top) to 300 (bottom)
      // In sphere: Y goes from +1 (north pole) to -1 (south pole)
      // Map 100->+1, 200->0, 300->-1
      const normalizedY = 1.0 - 2.0 * (bandPositionY - 100) / 200;
      
      bandPositions.push(normalizedY);
      bandWidths.push(bandWidth / planetRadius); // Normalize width
    }
    
    // Fill arrays up to 20 elements (fixed shader size)
    while (bandPositions.length < 20) {
      bandPositions.push(0);
      bandWidths.push(0);
    }
    
    // Create custom shader material
    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: gasGiantVertexShader,
      fragmentShader: gasGiantFragmentShader,
      uniforms: {
        time: { value: 0.0 },
        seed: { value: realSeed * 0.001 },
        planetColor: { value: new THREE.Color(1.0, 0.647, 0.0) },
        numBands: { value: numBands },
        rotationAngle: { value: rotationAngle },
        bandPositions: { value: bandPositions },
        bandWidths: { value: bandWidths }
      }
    });
    
    // Replace planet material
    planetMesh.material = shaderMaterial;
    
    // Animate shader for subtle atmospheric effects + physical planet rotation
    // Implement exact real time as Pillow
    const rotationPeriod = planetData.rotation_period_seconds || 86400;
    const cosmicOriginTime = planetData.cosmicOriginTime || Date.now() / 1000; // Convert to Unix seconds
    const initialAngleRotation = planetData.initialAngleRotation || 0;
    
    // Calculate exact rotation as in Pillow:
    // angle_rotation = (planet.initial_angle_rotation + time_elapsed_seconds * angle_velocity_rotation) % (2 * math.pi)
    const calculateCurrentRotation = () => {
      const currentTime = Date.now() / 1000; // Current time in Unix seconds
      const timeElapsedSeconds = currentTime - cosmicOriginTime;
      const angleVelocityRotation = (2 * Math.PI) / rotationPeriod;
      const angleRotation = (initialAngleRotation + timeElapsedSeconds * angleVelocityRotation) % (2 * Math.PI);
      return angleRotation;
    };
    
    
    const animate = () => {
      // Animate atmospheric effects
      shaderMaterial.uniforms.time.value += 0.01;
      
      // Calculate and apply current rotation based on absolute real time
      planetMesh.rotation.y = calculateCurrentRotation();
      
      requestAnimationFrame(animate);
    };
    animate();
    
  }
};

export default GasGiant3D;