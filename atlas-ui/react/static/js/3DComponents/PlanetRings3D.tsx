import * as THREE from "three";

interface PlanetRings3DProps {
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
    index?: number; // Planet index within the system
    cosmicOriginTime?: number;
    initialAngleRotation?: number;
  };
  planetName: string;
  system?: {
    index: number;
    name: string;
  };
  galaxy?: {
    coordinates: number[];
    name: string;
  };
}

// Simple RNG for visual enhancements (not affecting core Python synchronization)
class VisualRNG {
  private seed: number;

  constructor(baseSeed: number) {
    this.seed = baseSeed;
  }

  private next(): number {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }

  uniform(min: number, max: number): number {
    return min + (max - min) * this.next();
  }

  choice<T>(items: T[]): T {
    return items[Math.floor(this.next() * items.length)];
  }
}


// Create ring system using exact data from Python API
function createRingSystemFromAPI(scene: THREE.Scene, planetMesh: THREE.Mesh, planetRadius: number, planetData: any, ringsData: any) {
  // Use exact ring data from Python API instead of generating
  const { full_ring, ontop_ring, ring_inner_radius, ring_outer_radius, tilt_factor } = ringsData;
  
  // Combine full ring (bottom half) and ontop ring (top half) particles
  const allParticles = [...full_ring.particles, ...ontop_ring.particles];
  const totalParticles = allParticles.length;
  
  // Create visual RNG for 3D enhancements using Python's shape_seed
  const visualRNG = new VisualRNG(ringsData.shape_seed);
  
  // Create geometry using exact particle data from Python + 3D enhancements
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(totalParticles * 3);
  const colors = new Float32Array(totalParticles * 3);
  const sizes = new Float32Array(totalParticles);
  
  // Define darker, more realistic gray variations
  const grayVariations = [
    { baseGray: 0.18, variation: 0.04, name: 'dark' },     // Darker rings
    { baseGray: 0.25, variation: 0.06, name: 'medium' },   // Medium dark rings  
    { baseGray: 0.32, variation: 0.06, name: 'light' },    // Light but still subdued
    { baseGray: 0.25, variation: 0.08, name: 'mixed' }     // Controlled variation
  ];
  
  const chosenGrayVariation = visualRNG.choice(grayVariations);
  
  for (let i = 0; i < totalParticles; i++) {
    const particle = allParticles[i];
    
    // Convert from Pillow 2D coordinates to ThreeJS 3D coordinates
    // In Pillow: x,y are relative to center (200,200) with planet_radius ~200
    // In ThreeJS: we need to scale to our planetRadius
    const scale = planetRadius / ringsData.planet_radius;
    
    // Generate proper 3D ring coordinates centered on planet axis
    // Ignore Pillow's 2D x,y coordinates and generate true 3D ring positions
    
    // Generate per-particle variations using deterministic seed for consistency
    const particleSeed = ringsData.shape_seed + i;
    const particleRNG = new VisualRNG(particleSeed);
    
    // Use only the distance and angle from Python data, but recalculate positions properly
    const distance = particle.distance * scale;
    const angle = particle.angle;
    
    // Create proper ring geometry centered on planet (0,0,0)
    const baseX = distance * Math.cos(angle);
    const baseZ = distance * Math.sin(angle);
    const baseY = 0; // Start with flat ring, apply tilt later
    
    // Apply tilt factor to create the tilted ring plane
    // Tilt around X-axis to match planet's axial tilt effect
    const tiltAngle = Math.asin(tilt_factor); // Convert tilt_factor back to angle
    const tiltedY = baseZ * Math.sin(tiltAngle);
    const tiltedZ = baseZ * Math.cos(tiltAngle);
    
    // Add volumetric depth - rings should have significant thickness for 3D effect
    const ringThickness = (ring_outer_radius - ring_inner_radius) * scale * 0.4; // Increased thickness
    
    // Random spread for strong volumetric effect (more altitude variation)
    const ySpread = particleRNG.uniform(-ringThickness * 0.8, ringThickness * 0.8); // Much more vertical spread
    const radialSpread = particleRNG.uniform(-ringThickness * 0.3, ringThickness * 0.3);
    const angularSpread = particleRNG.uniform(-0.08, 0.08); // Slightly more angular spread
    
    // Final position with spreads applied
    const finalDistance = distance + radialSpread;
    const finalAngle = angle + angularSpread;
    
    positions[i * 3] = finalDistance * Math.cos(finalAngle);                    // x
    positions[i * 3 + 1] = tiltedY + ySpread;                                  // y with tilt and significant spread
    positions[i * 3 + 2] = tiltedZ + particleRNG.uniform(-ringThickness * 0.4, ringThickness * 0.4); // z with tilt and more spread for depth
    
    // Natural gray-based coloring system for realistic rings
    const pythonGrayValue = particle.color[0] / 255; // Original Python gray (0.08-0.2)
    
    // Create distance-based gradient for depth perception
    const distanceFromCenter = particle.distance;
    const normalizedDistance = (distanceFromCenter - ring_inner_radius) / (ring_outer_radius - ring_inner_radius);
    
    // Generate natural gray variations
    const baseGray = chosenGrayVariation.baseGray;
    const variation = chosenGrayVariation.variation;
    
    // Per-particle gray variation (darker, more realistic range)
    const grayVariation = particleRNG.uniform(-variation, variation);
    const finalGray = Math.max(0.12, Math.min(0.45, baseGray + grayVariation));
    
    // Distance-based gradient (inner vs outer rings)
    const distanceGradient = 0.8 + normalizedDistance * 0.4; // 0.8 to 1.2
    
    // Controlled brightness variation (tighter range)
    const brightnessVariation = particleRNG.uniform(0.85, 1.15);
    
    // Add very subtle sparkle effect to few particles (even more controlled)
    const sparkleChance = particleRNG.uniform(0, 1);
    const sparkleMultiplier = sparkleChance < 0.03 ? particleRNG.uniform(1.1, 1.3) : 1.0; // Only 3% sparkle, more subtle
    
    // Final gray value
    const finalGrayValue = finalGray * distanceGradient * brightnessVariation * sparkleMultiplier;
    
    // Apply same gray to RGB for natural, darker look
    const clampedGrayValue = Math.max(0.10, Math.min(0.55, finalGrayValue));
    colors[i * 3] = clampedGrayValue;     // r
    colors[i * 3 + 1] = clampedGrayValue; // g  
    colors[i * 3 + 2] = clampedGrayValue; // b
    
    // Enhanced sizes for better 3D visibility
    const baseSizeMultiplier = particleRNG.uniform(1.0, 1.8); // Slightly larger particles
    const sparkleSize = sparkleChance < 0.1 ? particleRNG.uniform(1.2, 2.0) : 1.0;
    sizes[i] = particle.size * baseSizeMultiplier * sparkleSize;
  }
  
  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  
  // Enhanced particle material for darker, realistic rings
  const particleMaterial = new THREE.ShaderMaterial({
    uniforms: {
      brightness: { value: 2.2 } // Compensate for darker base colors
    },
    vertexShader: `
      attribute float size;
      varying vec3 vColor;
      varying float vDistance;
      
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDistance = -mvPosition.z;
        
        // Dynamic size based on distance for better depth perception
        gl_PointSize = size * (300.0 / vDistance);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform float brightness;
      varying vec3 vColor;
      varying float vDistance;
      
      void main() {
        vec2 center = gl_PointCoord - vec2(0.5);
        float distance = length(center);
        
        if (distance > 0.5) discard;
        
        // Create soft circular particle with gentle falloff
        float alpha = (1.0 - distance * 2.0);
        alpha = smoothstep(0.0, 1.0, alpha);
        
        // Add subtle glow effect
        float glow = 1.0 - distance;
        glow = pow(glow, 1.5);
        
        // No sparkle animation - colors should be static
        // Final color with brightness and glow (no time-based changes)
        vec3 finalColor = vColor * brightness * glow;
        
        // Distance-based alpha fade for depth
        float depthAlpha = clamp(200.0 / vDistance, 0.3, 1.0);
        
        gl_FragColor = vec4(finalColor, alpha * depthAlpha);
      }
    `,
    transparent: true,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.NormalBlending // Normal blending for natural gray particles
  });
  
  // Create the point system
  const ringSystem = new THREE.Points(particles, particleMaterial);
  
  // Position rings correctly
  ringSystem.position.set(0, 0, 0);
  
  // Ensure it renders above the planet
  ringSystem.renderOrder = 1;
  
  scene.add(ringSystem);
  
  // Ring rotation animation - exact real time as Pillow
  const rotationPeriod = planetData.rotation_period_seconds || 86400;
  const cosmicOriginTime = planetData.cosmicOriginTime || Date.now() / 1000; // Convert to Unix seconds
  const initialAngleRotation = planetData.initialAngleRotation || 0;
  
  // Calculate exact rotation as in Pillow (same as planet)
  const calculateCurrentRotation = () => {
    const currentTime = Date.now() / 1000; // Current time in Unix seconds
    const timeElapsedSeconds = currentTime - cosmicOriginTime;
    const angleVelocityRotation = (2 * Math.PI) / rotationPeriod;
    const angleRotation = (initialAngleRotation + timeElapsedSeconds * angleVelocityRotation) % (2 * Math.PI);
    return angleRotation;
  };
  
  // Apply the same initial rotation as the planet
  ringSystem.rotation.y = calculateCurrentRotation();
  
  const animate = () => {
    // Calculate and apply current rotation based on absolute real time (same as planet)
    ringSystem.rotation.y = calculateCurrentRotation();
    // No more time uniform updates - colors are now static
    requestAnimationFrame(animate);
  };
  animate();
}


const PlanetRings3D = {
  async create(props: PlanetRings3DProps) {
    const { scene, planetMesh, planetRadius, planetData, planetName } = props;
    
    try {
      // Fetch complete location data from API
      const response = await fetch(`/api/planet/${planetName}/location-data`);
      
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      
      const locationData = await response.json();
      
      if (!locationData.success) {
        throw new Error(`API error: ${locationData.error}`);
      }
      
      // Extract all needed data from API
      const { universe, galaxy, system, planet, rings } = locationData;
      
      // Use the authoritative ring decision from Python
      if (!planet.has_rings || !rings) {
        return;
      }
      
      // Use planet data from API for rotation calculations
      const apiPlanetData = {
        diameter: planet.diameter,
        density: planet.density,
        gravity: planet.gravity,
        mass: planet.mass,
        orbital_radius_m: planet.orbital_radius_m,
        rotation_period_seconds: planet.rotation_period_seconds,
        surface_temperature: planet.surface_temperature,
        axial_tilt: planet.axial_tilt,
        cosmicOriginTime: universe.cosmic_origin_time,
        initialAngleRotation: planet.initial_angle_rotation
      };
      
      // Create ring system using exact data from Python API
      createRingSystemFromAPI(scene, planetMesh, planetRadius, apiPlanetData, rings);
      
    } catch (error) {
      // Fallback: don't show rings if API fails
    }
  }
};

export default PlanetRings3D;