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

// Python-compatible RNG that matches Python's random module exactly
class PythonCompatibleRNG {
  private mt: number[] = new Array(624);
  private mti: number = 625;

  constructor(seedInput: number | string | bigint) {
    let seed: number;
    if (typeof seedInput === 'string') {
      const bigIntSeed = BigInt('0x' + seedInput);
      seed = Number(bigIntSeed % BigInt(4294967296)); // 2^32
    } else if (typeof seedInput === 'bigint') {
      seed = Number(seedInput % BigInt(4294967296));
    } else {
      seed = seedInput >>> 0;
    }
    
    this.initGenrand(seed);
  }

  private initGenrand(s: number): void {
    this.mt[0] = s >>> 0;
    for (this.mti = 1; this.mti < 624; this.mti++) {
      this.mt[this.mti] = (1812433253 * (this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30)) + this.mti) >>> 0;
    }
  }

  private genrandInt32(): number {
    let y: number;
    const mag01 = [0x0, 0x9908b0df];

    if (this.mti >= 624) {
      let kk: number;

      if (this.mti === 625) {
        this.initGenrand(5489);
      }

      for (kk = 0; kk < 227; kk++) {
        y = (this.mt[kk] & 0x80000000) | (this.mt[kk + 1] & 0x7fffffff);
        this.mt[kk] = this.mt[kk + 397] ^ (y >>> 1) ^ mag01[y & 0x1];
      }
      for (; kk < 623; kk++) {
        y = (this.mt[kk] & 0x80000000) | (this.mt[kk + 1] & 0x7fffffff);
        this.mt[kk] = this.mt[kk - 227] ^ (y >>> 1) ^ mag01[y & 0x1];
      }
      y = (this.mt[623] & 0x80000000) | (this.mt[0] & 0x7fffffff);
      this.mt[623] = this.mt[396] ^ (y >>> 1) ^ mag01[y & 0x1];

      this.mti = 0;
    }

    y = this.mt[this.mti++];
    y ^= y >>> 11;
    y ^= (y << 7) & 0x9d2c5680;
    y ^= (y << 15) & 0xefc60000;
    y ^= y >>> 18;

    return y >>> 0;
  }

  private random(): number {
    const a = this.genrandInt32() >>> 5;
    const b = this.genrandInt32() >>> 6;
    return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
  }

  uniform(min: number, max: number): number {
    return min + (max - min) * this.random();
  }

  randint(min: number, max: number): number {
    return Math.floor(this.uniform(min, max + 1));
  }

  choices<T>(items: T[], weights: number[]): T {
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let randomValue = this.uniform(0, totalWeight);
    
    for (let i = 0; i < items.length; i++) {
      randomValue -= weights[i];
      if (randomValue <= 0) {
        return items[i];
      }
    }
    return items[items.length - 1];
  }
}

// SHA256 hash function to match Python's implementation
async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Implement seedmaster function to match Python
function seedmaster(configSeedBigInt: bigint, iterations: number): string {
  if (iterations === 0) {
    return configSeedBigInt.toString();
  }
  
  let result = configSeedBigInt.toString();
  for (let i = 0; i < iterations; i++) {
    // Convert to base64 like Python
    result = btoa(result);
  }
  return result;
}


// Create ring system
function createRingSystem(scene: THREE.Scene, planetMesh: THREE.Mesh, planetRadius: number, planetData: any, rng: PythonCompatibleRNG) {
  // Ring parameters - exactly as in Pillow
  const ringInnerRadius = planetRadius + rng.randint(120, 160);
  const ringOuterRadius = ringInnerRadius + rng.randint(20, 40);
  
  // Create geometry for ring particles - exactly as in Pillow
  const numParticles = rng.randint(500, 1500);
  
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(numParticles * 3);
  const colors = new Float32Array(numParticles * 3);
  const sizes = new Float32Array(numParticles);
  
  for (let i = 0; i < numParticles; i++) {
    // Complete ring: angle = rng.uniform(0, 2 * math.pi)
    const angle = rng.uniform(0, Math.PI * 2);
    const distance = rng.uniform(ringInnerRadius, ringOuterRadius);
    const tiltFactor = 0.3; // Exact value from Pillow
    
    // Position with tilt as in Pillow
    const x = distance * Math.cos(angle);
    const z = distance * Math.sin(angle);
    const y = distance * tiltFactor * Math.sin(angle);
    
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    
    // Color variation for each particle - exactly as in Pillow
    const grayValue = rng.randint(20, 50) / 255; // Exact range from Pillow
    colors[i * 3] = grayValue;
    colors[i * 3 + 1] = grayValue;
    colors[i * 3 + 2] = grayValue;
    
    // Exact sizes from Pillow
    const sizeOptions = [0.5, 1.0, 1.5, 2.0];
    const sizeWeights = [0.4, 0.3, 0.2, 0.1];
    sizes[i] = rng.choices(sizeOptions, sizeWeights);
  }
  
  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  
  // Particle material
  const particleMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 }
    },
    vertexShader: `
      attribute float size;
      varying vec3 vColor;
      
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (200.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      
      void main() {
        float distance = length(gl_PointCoord - vec2(0.5));
        if (distance > 0.5) discard;
        
        float alpha = (1.0 - distance) * 1.0; // Full opacity as in Pillow
        gl_FragColor = vec4(vColor, alpha);
      }
    `,
    transparent: true,
    vertexColors: true,
    depthWrite: false, // Para evitar problemas de profundidad
    blending: THREE.NormalBlending
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
    particleMaterial.uniforms.time.value += 0.01;
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
      const { universe, galaxy, system, planet, seeds } = locationData;
      
      // Use the authoritative ring decision from Python
      if (!planet.has_rings) {
        return;
      }
      
      // Create ring system using Python-generated seed
      const spacedPlanetName = planet.name.replace(/_/g, ' ');
      const shapeSeedString = `${seeds.config_seed}-${spacedPlanetName}-rings-${planet.diameter}-${planet.density}-${planet.gravity}-_safe_shaper`;
      const shapeSeedHex = await sha256(shapeSeedString);
      const rng = new PythonCompatibleRNG(shapeSeedHex);
      
      // Use planet data from API
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
      
      createRingSystem(scene, planetMesh, planetRadius, apiPlanetData, rng);
      
    } catch (error) {
      // Fallback: don't show rings if API fails
    }
  }
};

export default PlanetRings3D;