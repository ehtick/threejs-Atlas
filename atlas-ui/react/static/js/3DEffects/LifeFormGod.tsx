// atlas-ui/react/static/js/3DEffects/LifeFormGod.tsx
import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";
import { DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime.tsx";

const PROCEDURAL_RANGES = {
  DIVINE_RAY_COUNT: { min: 20, max: 40 },
  SACRED_SYMBOL_COUNT: { min: 12, max: 24 },
  ORBITAL_CROSS_COUNT: { min: 8, max: 16 },
  SACRED_CIRCLE_COUNT: { min: 6, max: 12 },
  GOLDEN_PARTICLE_COUNT: { min: 800, max: 1500 },
  DIVINE_PULSE_INTENSITY: { min: 3.0, max: 8.0 },
  ORBITAL_SPEED: { min: 0.2, max: 1.0 },
  CROSS_SPIRAL_COUNT: { min: 3, max: 6 },
  HOLOGRAM_RING_COUNT: { min: 4, max: 8 },
};

export interface LifeFormGodParams {
  color?: number[] | THREE.Color;
  divineRayCount?: number;
  sacredSymbolCount?: number;
  orbitalCrossCount?: number;
  sacredCircleCount?: number;
  goldenParticleCount?: number;
  divinePulseIntensity?: number;
  orbitalSpeed?: number;
  crossSpiralCount?: number;
  hologramRingCount?: number;
  mousePosition?: THREE.Vector2;
  planetPosition?: THREE.Vector3;
  seed?: number;
  cosmicOriginTime?: number;
}

export class LifeFormGodEffect {
  private group: THREE.Group;
  private roboticFace: THREE.Group;
  private faceHead: THREE.Mesh;
  private leftEye: THREE.Mesh;
  private rightEye: THREE.Mesh;
  private mouth: THREE.Mesh;
  private faceDetails: THREE.Mesh[] = [];
  private divineRays: THREE.Mesh[] = [];
  private sacredSymbols: THREE.Mesh[] = [];
  private orbitalCrosses: THREE.Mesh[] = [];
  private crossSpirals: THREE.Mesh[] = [];
  private hologramRings: THREE.Mesh[] = [];
  private sacredCircles: THREE.Mesh[] = [];
  private goldenParticles: THREE.Points;
  private divineParticles: THREE.Points;
  private energyWaves: THREE.Mesh[] = [];
  private particleOrbitData: Array<{
    distance: number;
    inclination: number;
    longitudeOfAscendingNode: number;
    initialAngle: number;
    orbitalSpeed: number;
    fallSpeed: number;
  }> = [];
  private divineParticleOrbitData: Array<{
    distance: number;
    inclination: number;
    longitudeOfAscendingNode: number;
    initialAngle: number;
    orbitalSpeed: number;
    phase: number;
  }> = [];
  private spaceDistortion: THREE.Mesh;
  private divineLight: THREE.PointLight;
  private holyLights: THREE.PointLight[] = [];
  private params: LifeFormGodParams;
  private rng: SeededRandom;
  private planetRadius: number;
  private cosmicOffset: number;

  constructor(planetRadius: number, params: LifeFormGodParams = {}) {
    this.planetRadius = planetRadius;

    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);

    this.params = {
      color: params.color || [1.0, 0.84, 0.0], // Divine gold
      divineRayCount: params.divineRayCount || Math.floor(this.rng.random() * (PROCEDURAL_RANGES.DIVINE_RAY_COUNT.max - PROCEDURAL_RANGES.DIVINE_RAY_COUNT.min) + PROCEDURAL_RANGES.DIVINE_RAY_COUNT.min),
      sacredSymbolCount: params.sacredSymbolCount || Math.floor(this.rng.random() * (PROCEDURAL_RANGES.SACRED_SYMBOL_COUNT.max - PROCEDURAL_RANGES.SACRED_SYMBOL_COUNT.min) + PROCEDURAL_RANGES.SACRED_SYMBOL_COUNT.min),
      orbitalCrossCount: params.orbitalCrossCount || Math.floor(this.rng.random() * (PROCEDURAL_RANGES.ORBITAL_CROSS_COUNT.max - PROCEDURAL_RANGES.ORBITAL_CROSS_COUNT.min) + PROCEDURAL_RANGES.ORBITAL_CROSS_COUNT.min),
      sacredCircleCount: params.sacredCircleCount || Math.floor(this.rng.random() * (PROCEDURAL_RANGES.SACRED_CIRCLE_COUNT.max - PROCEDURAL_RANGES.SACRED_CIRCLE_COUNT.min) + PROCEDURAL_RANGES.SACRED_CIRCLE_COUNT.min),
      goldenParticleCount: params.goldenParticleCount || Math.floor(this.rng.random() * (PROCEDURAL_RANGES.GOLDEN_PARTICLE_COUNT.max - PROCEDURAL_RANGES.GOLDEN_PARTICLE_COUNT.min) + PROCEDURAL_RANGES.GOLDEN_PARTICLE_COUNT.min),
      divinePulseIntensity: params.divinePulseIntensity || this.rng.random() * (PROCEDURAL_RANGES.DIVINE_PULSE_INTENSITY.max - PROCEDURAL_RANGES.DIVINE_PULSE_INTENSITY.min) + PROCEDURAL_RANGES.DIVINE_PULSE_INTENSITY.min,
      orbitalSpeed: params.orbitalSpeed || this.rng.random() * (PROCEDURAL_RANGES.ORBITAL_SPEED.max - PROCEDURAL_RANGES.ORBITAL_SPEED.min) + PROCEDURAL_RANGES.ORBITAL_SPEED.min,
      crossSpiralCount: params.crossSpiralCount || Math.floor(this.rng.random() * (PROCEDURAL_RANGES.CROSS_SPIRAL_COUNT.max - PROCEDURAL_RANGES.CROSS_SPIRAL_COUNT.min) + PROCEDURAL_RANGES.CROSS_SPIRAL_COUNT.min),
      hologramRingCount: params.hologramRingCount || Math.floor(this.rng.random() * (PROCEDURAL_RANGES.HOLOGRAM_RING_COUNT.max - PROCEDURAL_RANGES.HOLOGRAM_RING_COUNT.min) + PROCEDURAL_RANGES.HOLOGRAM_RING_COUNT.min),
      cosmicOriginTime: params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME,
      seed,
    };

    this.cosmicOffset = (seed % 100) * 0.1;

    this.group = new THREE.Group();
    this.createRoboticFace();
    this.createDivineRays();
    this.createSacredSymbols();
    this.createOrbitalCrosses();
    this.createCrossSpirals();
    this.createHologramRings();
    this.createSacredCircles();
    this.createGoldenParticles();
    this.createDivineParticles();
    this.createEnergyWaves();
    this.createSpaceDistortion();
    this.createDivineLight();
    this.createHolyLights();
  }

  private createRoboticFace(): void {
    this.roboticFace = new THREE.Group();
    
    // Create divine sphere that encompasses the planet perfectly - 1.33x larger than planet
    const faceSize = this.planetRadius * 1.33;
    
    // Create main divine head (giant sphere with golden divine shader)
    const headGeometry = new THREE.SphereGeometry(faceSize, 64, 64);
    const headMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(1.0, 0.84, 0.2) }, // Divine golden color
        mousePos: { value: new THREE.Vector2(0, 0) },
        pulseIntensity: { value: this.params.divinePulseIntensity! },
        planetRadius: { value: this.planetRadius },
      },
      vertexShader: `
        uniform float time;
        uniform float pulseIntensity;
        uniform float planetRadius;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        varying float vPulse;
        varying float vDistanceFromCenter;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vUv = uv;
          vDistanceFromCenter = length(position);
          
          float pulse = sin(time * 1.0) * 0.05 + 1.0;
          vPulse = pulse * pulseIntensity;
          
          vec3 pos = position * pulse;
          // Divine energy waves
          pos += normal * sin(time * 2.0 + length(position) * 0.2) * 0.03;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        uniform vec2 mousePos;
        uniform float planetRadius;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        varying float vPulse;
        varying float vDistanceFromCenter;
        
        void main() {
          // Divine golden base
          vec3 divineGold = color;
          
          // Fresnel effect for godly glow
          float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 3.0);
          
          // Sacred geometric patterns
          float phi = 1.618033988749; // Golden ratio
          float pattern = sin(vUv.x * 40.0 * phi + time) * sin(vUv.y * 30.0 / phi + time * 0.8);
          pattern = step(0.6, pattern) * 0.4;
          
          // Divine energy circuits
          float circuitX = abs(sin(vUv.x * 25.0 + time * 2.0));
          float circuitY = abs(sin(vUv.y * 20.0 + time * 1.7));
          float circuits = smoothstep(0.85, 0.95, circuitX) + smoothstep(0.85, 0.95, circuitY);
          circuits *= 0.6;
          
          // Cosmic energy waves
          float waves = sin(vDistanceFromCenter * 0.5 + time * 3.0) * 0.3 + 0.7;
          
          // Final divine composition
          vec3 finalColor = divineGold * waves;
          finalColor += vec3(1.0, 1.0, 0.7) * pattern; // Golden highlights
          finalColor += vec3(1.0, 0.8, 0.4) * circuits; // Divine circuits
          finalColor += vec3(1.0, 0.9, 0.6) * fresnel * 0.8; // Divine aura
          
          // Divine transparency - adjust for new 1.33x size
          float distanceFade = smoothstep(planetRadius * 1.4, planetRadius * 1.1, vDistanceFromCenter);
          float alpha = (0.2 + fresnel * 0.3 + pattern * 0.15 + circuits * 0.2) * distanceFade;
          
          gl_FragColor = vec4(finalColor * vPulse, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    this.faceHead = new THREE.Mesh(headGeometry, headMaterial);
    this.roboticFace.add(this.faceHead);

    // Create divine left eye (much larger for god-like presence)
    const eyeGeometry = new THREE.SphereGeometry(faceSize * 0.08, 32, 32);
    const eyeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(1.0, 0.9, 0.3) }, // Golden divine color
        mousePos: { value: new THREE.Vector2(0, 0) },
        eyePosition: { value: new THREE.Vector3(-1, 0, 0) }, // Left eye
      },
      vertexShader: `
        uniform float time;
        uniform vec2 mousePos;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vUv = uv;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        uniform vec2 mousePos;
        uniform vec3 eyePosition;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        
        void main() {
          // Divine iris pattern
          vec2 center = vec2(0.5, 0.5);
          float distFromCenter = length(vUv - center);
          
          // Mouse tracking - make pupil follow mouse
          vec2 mouseInfluence = mousePos * 0.1;
          vec2 pupilCenter = center + mouseInfluence;
          float pupilDist = length(vUv - pupilCenter);
          
          // Pupil (dark center)
          float pupil = 1.0 - smoothstep(0.1, 0.15, pupilDist);
          
          // Iris (divine golden patterns)
          float iris = smoothstep(0.15, 0.4, distFromCenter) * (1.0 - smoothstep(0.4, 0.5, distFromCenter));
          float irisPattern = sin(distFromCenter * 30.0 + time * 3.0) * sin(atan(vUv.y - center.y, vUv.x - center.x) * 12.0) * 0.5 + 0.5;
          iris *= irisPattern;
          
          // Divine glow
          float glow = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
          
          // Scanning divine light
          float scan = sin(time * 6.0 + vUv.y * 20.0) * 0.3 + 0.7;
          
          vec3 finalColor = color * (iris * 0.8 + glow);
          finalColor += vec3(1.0, 1.0, 0.8) * scan * 0.4;
          finalColor *= (1.0 - pupil * 0.9); // Darken pupil
          
          float alpha = (iris * 0.9 + glow * 0.6 + pupil * 0.3) * scan;
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    this.leftEye.position.set(-faceSize * 0.25, faceSize * 0.15, -faceSize * 0.92);
    this.roboticFace.add(this.leftEye);

    // Create divine right eye
    const rightEyeMaterial = eyeMaterial.clone();
    rightEyeMaterial.uniforms.eyePosition.value = new THREE.Vector3(1, 0, 0); // Right eye
    this.rightEye = new THREE.Mesh(eyeGeometry.clone(), rightEyeMaterial);
    this.rightEye.position.set(faceSize * 0.25, faceSize * 0.15, -faceSize * 0.92);
    this.roboticFace.add(this.rightEye);

    // Create divine mouth (sacred geometric pattern)
    const mouthGeometry = new THREE.PlaneGeometry(faceSize * 0.25, faceSize * 0.08);
    const mouthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(1.0, 0.8, 0.3) }, // Divine golden
      },
      vertexShader: `
        uniform float time;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          vPosition = position;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          // Divine mouth pattern
          float mouth = smoothstep(0.3, 0.4, vUv.y) * (1.0 - smoothstep(0.6, 0.7, vUv.y));
          
          // Sacred symmetry
          float symmetry = sin(vUv.x * 3.14159) * 0.5 + 0.5;
          mouth *= symmetry;
          
          // Divine energy pulse
          float pulse = sin(time * 4.0 + vUv.x * 6.0) * 0.3 + 0.7;
          
          // Sacred geometric lines
          float lines = abs(sin(vUv.x * 20.0 + time * 3.0)) * 0.5;
          lines = smoothstep(0.45, 0.5, lines);
          
          vec3 finalColor = color * (mouth * pulse + lines * 0.3);
          float alpha = mouth * pulse * 0.8 + lines * 0.4;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
    this.mouth.position.set(0, -faceSize * 0.3, -faceSize * 0.92);
    this.roboticFace.add(this.mouth);

    // Position the divine face exactly at planet position
    const planetPos = this.params.planetPosition || new THREE.Vector3(0, 0, 0);
    this.roboticFace.position.copy(planetPos);
    
    // Add slow rotation for divine presence
    this.roboticFace.userData = {
      rotationSpeed: 0.001, // Very slow divine rotation
      planetPosition: planetPos.clone(),
    };
    
    this.group.add(this.roboticFace);
  }

  private createDivineRays(): void {
    const rayCount = this.params.divineRayCount!;
    
    for (let i = 0; i < rayCount; i++) {
      const rayLength = this.planetRadius * (3.0 + this.rng.random() * 2.0);
      const rayWidth = this.planetRadius * 0.05;
      
      const rayGeometry = new THREE.PlaneGeometry(rayWidth, rayLength);
      
      const rayMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(this.params.color![0], this.params.color![1] * 0.9, this.params.color![2] * 0.7) },
          rayIndex: { value: i },
        },
        vertexShader: `
          uniform float time;
          uniform float rayIndex;
          varying vec2 vUv;
          varying float vIntensity;
          
          void main() {
            vUv = uv;
            
            float divine = sin(time * 3.0 + rayIndex * 0.5) * 0.5 + 0.5;
            vIntensity = divine;
            
            vec3 pos = position;
            pos.y *= (1.0 + divine * 0.2);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float time;
          varying vec2 vUv;
          varying float vIntensity;
          
          void main() {
            float ray = 1.0 - abs(vUv.x - 0.5) * 2.0;
            float fade = 1.0 - vUv.y;
            
            float divine = sin(time * 5.0 + vUv.y * 20.0) * 0.3 + 0.7;
            float intensity = ray * fade * divine * vIntensity;
            
            gl_FragColor = vec4(color, intensity);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const ray = new THREE.Mesh(rayGeometry, rayMaterial);
      
      // Position rays - they will follow robotic face in update()
      const angle = (i / rayCount) * Math.PI * 2;
      
      ray.rotation.z = angle;
      ray.rotation.x = Math.PI / 2;
      
      ray.userData = {
        rayIndex: i,
        baseAngle: angle,
        rotationSpeed: (this.rng.random() - 0.5) * 0.01,
      };

      this.divineRays.push(ray);
      this.group.add(ray);
    }
  }


  private createSacredSymbols(): void {
    const symbolCount = this.params.sacredSymbolCount!;
    
    for (let i = 0; i < symbolCount; i++) {
      const distance = this.planetRadius + 2.0 + this.rng.random() * 1.5;
      const inclination = this.rng.random() * Math.PI;
      const longitudeOfAscendingNode = this.rng.random() * Math.PI * 2;
      const initialAngle = this.rng.random() * Math.PI * 2;

      const position = this.calculateOrbitalPosition(distance, inclination, longitudeOfAscendingNode, initialAngle);

      // Create different sacred symbols - simplified to avoid geometry merge issues
      const symbolType = Math.floor(this.rng.random() * 2);
      let symbolGeometry: THREE.BufferGeometry;
      
      if (symbolType === 0) {
        // Star
        symbolGeometry = this.createStarGeometry();
      } else {
        // Eye of Providence (Triangle)
        symbolGeometry = new THREE.ConeGeometry(this.planetRadius * 0.08, this.planetRadius * 0.12, 3);
      }

      const symbolMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(this.params.color![0] * 0.9, this.params.color![1] * 1.1, this.params.color![2] * 0.9) },
          symbolIndex: { value: i },
          symbolType: { value: symbolType },
        },
        vertexShader: `
          uniform float time;
          uniform float symbolIndex;
          varying vec3 vPosition;
          varying float vSacred;
          
          void main() {
            vPosition = position;
            
            float sacred = sin(time * 4.0 + symbolIndex * 2.0) * 0.3 + 0.7;
            vSacred = sacred;
            
            vec3 pos = position * (1.0 + sacred * 0.2);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float time;
          uniform float symbolType;
          varying vec3 vPosition;
          varying float vSacred;
          
          void main() {
            float divine = sin(time * 6.0 + vPosition.x * 5.0) * 0.2 + 0.8;
            float sacred = sin(time * 3.0 + symbolType * 3.14) * 0.1 + 0.9;
            
            vec3 holyColor = color * divine * sacred;
            float alpha = vSacred * 0.9;
            
            gl_FragColor = vec4(holyColor, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const symbol = new THREE.Mesh(symbolGeometry, symbolMaterial);
      symbol.position.set(position.x, position.y, position.z);
      symbol.lookAt(0, 0, 0);
      
      symbol.userData = {
        distance: distance,
        inclination: inclination,
        longitudeOfAscendingNode: longitudeOfAscendingNode,
        initialAngle: initialAngle,
        orbitalSpeed: this.rng.random() * 0.3 + 0.1,
        symbolIndex: i,
        symbolType: symbolType,
      };

      this.sacredSymbols.push(symbol);
      this.group.add(symbol);
    }
  }

  private createCrossGeometry(): THREE.BufferGeometry {
    const size = this.planetRadius * 0.1;
    const thickness = size * 0.2;
    
    // Vertical bar
    const verticalGeometry = new THREE.BoxGeometry(thickness, size, thickness);
    // Horizontal bar - create a copy and translate it
    const horizontalGeometry = new THREE.BoxGeometry(size * 0.6, thickness, thickness);
    const horizontalGeometry2 = horizontalGeometry.clone();
    horizontalGeometry2.translate(0, size * 0.2, 0);
    
    // Merge geometries manually
    const positions1 = verticalGeometry.attributes.position.array;
    const positions2 = horizontalGeometry2.attributes.position.array;
    
    const totalVertices = positions1.length + positions2.length;
    const mergedPositions = new Float32Array(totalVertices);
    mergedPositions.set(positions1, 0);
    mergedPositions.set(positions2, positions1.length);
    
    const mergedGeometry = new THREE.BufferGeometry();
    mergedGeometry.setAttribute('position', new THREE.BufferAttribute(mergedPositions, 3));
    mergedGeometry.computeVertexNormals();
    
    return mergedGeometry;
  }

  private createEnhancedCrossGeometry(): THREE.BufferGeometry {
    const size = this.planetRadius * 0.15;
    const thickness = size * 0.15;
    
    // Create a more detailed cross with beveled edges
    const verticalGeometry = new THREE.BoxGeometry(thickness, size, thickness);
    const horizontalGeometry = new THREE.BoxGeometry(size * 0.7, thickness, thickness);
    const horizontalGeometry2 = horizontalGeometry.clone();
    horizontalGeometry2.translate(0, size * 0.15, 0);
    
    // Add decorative spheres at the ends
    const sphereGeometry = new THREE.SphereGeometry(thickness * 0.8, 8, 8);
    const topSphere = sphereGeometry.clone();
    const bottomSphere = sphereGeometry.clone();
    const leftSphere = sphereGeometry.clone();
    const rightSphere = sphereGeometry.clone();
    
    topSphere.translate(0, size * 0.4, 0);
    bottomSphere.translate(0, -size * 0.4, 0);
    leftSphere.translate(-size * 0.25, size * 0.15, 0);
    rightSphere.translate(size * 0.25, size * 0.15, 0);
    
    // Merge all geometries
    const geometries = [
      verticalGeometry, horizontalGeometry2, 
      topSphere, bottomSphere, leftSphere, rightSphere
    ];
    
    let totalVertices = 0;
    geometries.forEach(geo => totalVertices += geo.attributes.position.count * 3);
    
    const mergedPositions = new Float32Array(totalVertices);
    let offset = 0;
    
    geometries.forEach(geo => {
      const positions = geo.attributes.position.array;
      mergedPositions.set(positions, offset);
      offset += positions.length;
    });
    
    const mergedGeometry = new THREE.BufferGeometry();
    mergedGeometry.setAttribute('position', new THREE.BufferAttribute(mergedPositions, 3));
    mergedGeometry.computeVertexNormals();
    
    return mergedGeometry;
  }

  private createStarGeometry(): THREE.BufferGeometry {
    const outerRadius = this.planetRadius * 0.08;
    const innerRadius = outerRadius * 0.4;
    const points = 5;
    
    const vertices = [];
    
    for (let i = 0; i < points * 2; i++) {
      const angle = (i / (points * 2)) * Math.PI * 2;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      vertices.push(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    
    const indices = [];
    for (let i = 0; i < points * 2 - 2; i++) {
      indices.push(0, i + 1, i + 2);
    }
    indices.push(0, points * 2 - 1, 1);
    
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    
    return geometry;
  }

  private createOrbitalCrosses(): void {
    const crossCount = this.params.orbitalCrossCount!;
    
    for (let i = 0; i < crossCount; i++) {
      // Procedural positioning with golden ratio and Fibonacci spirals
      const goldenAngle = Math.PI * (3.0 - Math.sqrt(5.0));
      const distance = this.planetRadius + 1.5 + (i * i * 0.3) + this.rng.random() * 0.5;
      const inclination = Math.acos(1 - 2 * (i + this.rng.random()) / crossCount);
      const longitudeOfAscendingNode = i * goldenAngle + this.rng.random() * 0.5;
      const initialAngle = this.rng.random() * Math.PI * 2;

      const crossGeometry = this.createEnhancedCrossGeometry();
      
      const crossMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(this.params.color![0], this.params.color![1] * 0.8, this.params.color![2] * 1.2) },
          crossIndex: { value: i },
          divinePulse: { value: this.params.divinePulseIntensity! },
        },
        vertexShader: `
          uniform float time;
          uniform float crossIndex;
          uniform float divinePulse;
          varying float vBlessing;
          varying vec3 vPosition;
          varying vec3 vNormal;
          
          void main() {
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            
            float blessing = sin(time * 5.0 + crossIndex * 1.5) * 0.4 + 0.6;
            float divineScale = sin(time * 3.0 + crossIndex) * 0.3 + 1.0;
            vBlessing = blessing * divinePulse;
            
            vec3 pos = position * divineScale;
            pos += normal * sin(time * 4.0 + position.x * 10.0) * 0.02;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float time;
          uniform float crossIndex;
          varying float vBlessing;
          varying vec3 vPosition;
          varying vec3 vNormal;
          
          void main() {
            float divine = sin(time * 8.0 + vPosition.x * 5.0) * sin(time * 6.0 + vPosition.y * 3.0) * 0.3 + 0.7;
            float sacred = sin(time * 10.0 + crossIndex * 2.0) * 0.2 + 0.8;
            
            // Add holographic shimmer effect
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
            float shimmer = sin(time * 15.0 + vPosition.x * 20.0 + vPosition.y * 15.0) * 0.5 + 0.5;
            
            vec3 finalColor = color * divine * sacred;
            finalColor += vec3(1.0, 1.0, 0.8) * fresnel * shimmer * 0.3;
            
            gl_FragColor = vec4(finalColor, vBlessing * (1.0 + fresnel * 0.5));
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const cross = new THREE.Mesh(crossGeometry, crossMaterial);
      
      // Procedural rotation based on golden ratio
      const rotationPhaseX = i * goldenAngle;
      const rotationPhaseY = i * goldenAngle * 1.618;
      const rotationPhaseZ = i * goldenAngle * 0.618;
      
      cross.userData = {
        distance: distance,
        inclination: inclination,
        longitudeOfAscendingNode: longitudeOfAscendingNode,
        initialAngle: initialAngle,
        orbitalSpeed: (0.2 + (i % 3) * 0.1) * this.params.orbitalSpeed!,
        crossIndex: i,
        rotationPhaseX: rotationPhaseX,
        rotationPhaseY: rotationPhaseY,
        rotationPhaseZ: rotationPhaseZ,
        rotationSpeedX: (this.rng.random() - 0.5) * 0.02,
        rotationSpeedY: (this.rng.random() - 0.5) * 0.03,
        rotationSpeedZ: (this.rng.random() - 0.5) * 0.025,
      };

      this.orbitalCrosses.push(cross);
      this.group.add(cross);
    }
  }

  private createCrossSpirals(): void {
    const spiralCount = this.params.crossSpiralCount!;
    
    for (let s = 0; s < spiralCount; s++) {
      const crossesInSpiral = 12 + s * 6;
      const spiralRadius = this.planetRadius + 2.0 + s * 1.5;
      const spiralHeight = this.planetRadius * 2.0;
      
      for (let i = 0; i < crossesInSpiral; i++) {
        const t = i / crossesInSpiral;
        const angle = t * Math.PI * 6; // Multiple rotations
        const height = (t - 0.5) * spiralHeight;
        const currentRadius = spiralRadius * (1.0 + Math.sin(t * Math.PI * 3) * 0.2);
        
        const x = Math.cos(angle) * currentRadius;
        const z = Math.sin(angle) * currentRadius;
        const y = height;
        
        const crossGeometry = this.createEnhancedCrossGeometry();
        const crossMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            color: { value: new THREE.Color(1.0, 0.9, 0.3) },
            spiralIndex: { value: s },
            crossIndex: { value: i },
          },
          vertexShader: `
            uniform float time;
            uniform float spiralIndex;
            uniform float crossIndex;
            varying float vHoliness;
            varying vec3 vPosition;
            varying vec3 vNormal;
            
            void main() {
              vPosition = position;
              vNormal = normalize(normalMatrix * normal);
              
              float holiness = sin(time * 7.0 + spiralIndex + crossIndex * 0.5) * 0.5 + 0.5;
              vHoliness = holiness;
              
              vec3 pos = position;
              pos *= (1.0 + holiness * 0.3);
              
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 color;
            uniform float time;
            varying float vHoliness;
            varying vec3 vPosition;
            varying vec3 vNormal;
            
            void main() {
              float divine = sin(time * 12.0 + vPosition.x * 8.0 + vPosition.y * 6.0) * 0.4 + 0.6;
              float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
              
              vec3 finalColor = color * divine;
              finalColor += vec3(1.0, 1.0, 1.0) * fresnel * 0.5;
              
              gl_FragColor = vec4(finalColor, vHoliness * (0.8 + fresnel * 0.4));
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
        
        const cross = new THREE.Mesh(crossGeometry, crossMaterial);
        cross.position.set(x, y, z);
        cross.lookAt(0, 0, 0);
        
        cross.userData = {
          spiralIndex: s,
          crossIndex: i,
          angle: angle,
          spiralRadius: spiralRadius,
          height: height,
          rotationSpeed: (this.rng.random() - 0.5) * 0.03,
        };
        
        this.crossSpirals.push(cross);
        this.group.add(cross);
      }
    }
  }

  private createHologramRings(): void {
    const ringCount = this.params.hologramRingCount!;
    
    for (let i = 0; i < ringCount; i++) {
      const ringRadius = this.planetRadius + 1.0 + i * 0.8;
      const ringGeometry = new THREE.RingGeometry(ringRadius, ringRadius + 0.02, 128, 1);
      
      const ringMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(0.3 + i * 0.1, 0.8, 1.0) },
          ringIndex: { value: i },
        },
        vertexShader: `
          uniform float time;
          uniform float ringIndex;
          varying vec2 vUv;
          varying float vHologram;
          
          void main() {
            vUv = uv;
            
            float hologram = sin(time * 8.0 + ringIndex * 2.0) * 0.3 + 0.7;
            vHologram = hologram;
            
            vec3 pos = position;
            pos.z += sin(time * 5.0 + atan(pos.y, pos.x) * 20.0) * 0.1;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float time;
          uniform float ringIndex;
          varying vec2 vUv;
          varying float vHologram;
          
          void main() {
            float dist = length(vUv - 0.5);
            float ring = 1.0 - smoothstep(0.48, 0.5, dist);
            ring *= smoothstep(0.45, 0.47, dist);
            
            float scanlines = sin(dist * 200.0 + time * 10.0) * 0.5 + 0.5;
            float hologram = sin(time * 15.0 + dist * 50.0) * 0.3 + 0.7;
            
            float intensity = ring * scanlines * hologram * vHologram;
            
            gl_FragColor = vec4(color, intensity);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2 + (i * 0.2);
      ring.rotation.y = i * 0.3;
      
      ring.userData = {
        ringIndex: i,
        baseRotationX: ring.rotation.x,
        baseRotationY: ring.rotation.y,
        rotationSpeed: (this.rng.random() - 0.5) * 0.01,
      };
      
      this.hologramRings.push(ring);
      this.group.add(ring);
    }
  }

  private createSacredCircles(): void {
    const circleCount = this.params.sacredCircleCount!;
    
    for (let i = 0; i < circleCount; i++) {
      const circleRadius = this.planetRadius + 0.5 + i * 1.2;
      
      const circleGeometry = new THREE.RingGeometry(circleRadius, circleRadius + 0.1, 64, 1);
      
      const circleMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(this.params.color![0] * 1.1, this.params.color![1] * 0.9, this.params.color![2] * 1.1) },
          circleIndex: { value: i },
        },
        vertexShader: `
          uniform float time;
          uniform float circleIndex;
          varying vec2 vUv;
          varying float vExpansion;
          
          void main() {
            vUv = uv;
            
            float expansion = sin(time * 2.0 + circleIndex * 1.0) * 0.1 + 1.0;
            vExpansion = expansion;
            
            vec3 pos = position * expansion;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float time;
          varying vec2 vUv;
          varying float vExpansion;
          
          void main() {
            float dist = length(vUv - 0.5);
            float circle = smoothstep(0.45, 0.48, dist) * (1.0 - smoothstep(0.49, 0.5, dist));
            
            float divine = sin(time * 4.0 + dist * 20.0) * 0.3 + 0.7;
            
            gl_FragColor = vec4(color, circle * divine * vExpansion);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const circle = new THREE.Mesh(circleGeometry, circleMaterial);
      circle.userData = {
        circleIndex: i,
        rotationSpeed: (this.rng.random() - 0.5) * 0.005,
      };

      this.sacredCircles.push(circle);
      this.group.add(circle);
    }
  }

  private createGoldenParticles(): void {
    const particleCount = this.params.goldenParticleCount!;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const distance = this.planetRadius + this.rng.random() * 4.0;
      const inclination = this.rng.random() * Math.PI;
      const longitudeOfAscendingNode = this.rng.random() * Math.PI * 2;
      const initialAngle = this.rng.random() * Math.PI * 2;
      const orbitalSpeed = this.rng.random() * 0.5 + 0.2;
      const fallSpeed = this.rng.random() * 0.02 + 0.01;

      this.particleOrbitData.push({
        distance,
        inclination,
        longitudeOfAscendingNode,
        initialAngle,
        orbitalSpeed,
        fallSpeed,
      });

      const position = this.calculateOrbitalPosition(distance, inclination, longitudeOfAscendingNode, initialAngle);
      
      positions[i * 3] = position.x;
      positions[i * 3 + 1] = position.y + this.rng.random() * 2.0;
      positions[i * 3 + 2] = position.z;

      // Golden particles
      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = 0.84 + this.rng.random() * 0.16;
      colors[i * 3 + 2] = 0.0 + this.rng.random() * 0.3;

      sizes[i] = this.planetRadius * (0.01 + this.rng.random() * 0.02);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        particleTexture: { value: this.createDivineParticleTexture() },
      },
      vertexShader: `
        attribute float size;
        uniform float time;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vColor = color;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float distanceFade = 1.0 / (1.0 + length(mvPosition.xyz) * 0.05);
          
          vAlpha = sin(time * 3.0 + position.x * 0.1) * 0.4 + 0.6;
          vAlpha *= distanceFade;
          
          gl_PointSize = size * (400.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D particleTexture;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vec4 texColor = texture2D(particleTexture, gl_PointCoord);
          gl_FragColor = vec4(vColor * texColor.rgb, texColor.a * vAlpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    this.goldenParticles = new THREE.Points(particleGeometry, particleMaterial);
    this.group.add(this.goldenParticles);
  }

  private createDivineParticles(): void {
    const particleCount = Math.floor(this.params.goldenParticleCount! * 0.3);
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const distance = this.planetRadius + this.rng.random() * 6.0;
      const inclination = this.rng.random() * Math.PI;
      const longitudeOfAscendingNode = this.rng.random() * Math.PI * 2;
      const initialAngle = this.rng.random() * Math.PI * 2;
      const orbitalSpeed = this.rng.random() * 0.8 + 0.3;
      const phase = this.rng.random() * Math.PI * 2;

      this.divineParticleOrbitData.push({
        distance,
        inclination,
        longitudeOfAscendingNode,
        initialAngle,
        orbitalSpeed,
        phase,
      });

      const position = this.calculateOrbitalPosition(distance, inclination, longitudeOfAscendingNode, initialAngle);
      
      positions[i * 3] = position.x;
      positions[i * 3 + 1] = position.y;
      positions[i * 3 + 2] = position.z;

      // Divine white-gold particles
      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = 1.0;
      colors[i * 3 + 2] = 0.8 + this.rng.random() * 0.2;

      sizes[i] = this.planetRadius * (0.02 + this.rng.random() * 0.03);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        particleTexture: { value: this.createDivineStarTexture() },
      },
      vertexShader: `
        attribute float size;
        uniform float time;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vColor = color;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float distanceFade = 1.0 / (1.0 + length(mvPosition.xyz) * 0.03);
          
          float pulse = sin(time * 4.0 + position.x * 0.2 + position.y * 0.15) * 0.5 + 0.5;
          vAlpha = pulse * distanceFade;
          
          gl_PointSize = size * (500.0 / -mvPosition.z) * (1.0 + pulse * 0.5);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D particleTexture;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vec4 texColor = texture2D(particleTexture, gl_PointCoord);
          vec3 finalColor = vColor * texColor.rgb;
          finalColor += vec3(0.3, 0.3, 0.8) * texColor.a * 0.5;
          gl_FragColor = vec4(finalColor, texColor.a * vAlpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    this.divineParticles = new THREE.Points(particleGeometry, particleMaterial);
    this.group.add(this.divineParticles);
  }

  private createEnergyWaves(): void {
    const waveCount = 6;
    
    for (let i = 0; i < waveCount; i++) {
      const waveRadius = this.planetRadius + 3.0 + i * 1.0;
      const waveGeometry = new THREE.SphereGeometry(waveRadius, 64, 32);
      
      const waveMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(0.2, 0.6, 1.0) },
          waveIndex: { value: i },
        },
        vertexShader: `
          uniform float time;
          uniform float waveIndex;
          varying vec3 vNormal;
          varying vec3 vPosition;
          varying float vWave;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            
            float wave = sin(time * 3.0 + waveIndex * 0.5) * 0.5 + 0.5;
            vWave = wave;
            
            vec3 pos = position * (1.0 + wave * 0.1);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float time;
          varying vec3 vNormal;
          varying vec3 vPosition;
          varying float vWave;
          
          void main() {
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
            float energy = sin(vPosition.x * 2.0 + time * 2.0) * sin(vPosition.y * 2.0 + time * 1.5) * sin(vPosition.z * 2.0 + time * 3.0);
            energy = energy * 0.3 + 0.7;
            
            float alpha = fresnel * energy * vWave * 0.1;
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
      });
      
      const wave = new THREE.Mesh(waveGeometry, waveMaterial);
      wave.userData = {
        waveIndex: i,
        rotationSpeed: (this.rng.random() - 0.5) * 0.005,
      };
      
      this.energyWaves.push(wave);
      this.group.add(wave);
    }
  }

  private createHolyLights(): void {
    const lightCount = 8;
    
    for (let i = 0; i < lightCount; i++) {
      const angle = (i / lightCount) * Math.PI * 2;
      const distance = this.planetRadius + 2.0;
      const height = (this.rng.random() - 0.5) * this.planetRadius;
      
      const x = Math.cos(angle) * distance;
      const z = Math.sin(angle) * distance;
      const y = height;
      
      const light = new THREE.PointLight(
        new THREE.Color(1.0, 0.9, 0.7),
        1.5,
        this.planetRadius * 8.0
      );
      
      light.position.set(x, y, z);
      light.userData = {
        lightIndex: i,
        baseX: x,
        baseY: y,
        baseZ: z,
        angle: angle,
        distance: distance,
        orbitalSpeed: 0.1 + this.rng.random() * 0.2,
      };
      
      this.holyLights.push(light);
      this.group.add(light);
    }
  }

  private createDivineParticleTexture(): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d')!;
    
    // Create divine star texture
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 215, 0, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 255, 100, 0.8)');
    gradient.addColorStop(0.7, 'rgba(255, 200, 50, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
    
    // Add cross pattern
    context.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(32, 16);
    context.lineTo(32, 48);
    context.moveTo(16, 32);
    context.lineTo(48, 32);
    context.stroke();
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  private createDivineStarTexture(): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d')!;
    
    // Create divine star with multiple layers
    const centerX = 64, centerY = 64, radius = 60;
    
    // Outer glow
    const outerGradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    outerGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    outerGradient.addColorStop(0.2, 'rgba(255, 255, 200, 0.9)');
    outerGradient.addColorStop(0.5, 'rgba(200, 200, 255, 0.6)');
    outerGradient.addColorStop(0.8, 'rgba(100, 150, 255, 0.3)');
    outerGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    context.fillStyle = outerGradient;
    context.fillRect(0, 0, 128, 128);
    
    // Star rays
    context.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    context.lineWidth = 3;
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const startR = 10;
      const endR = 55;
      
      context.beginPath();
      context.moveTo(centerX + Math.cos(angle) * startR, centerY + Math.sin(angle) * startR);
      context.lineTo(centerX + Math.cos(angle) * endR, centerY + Math.sin(angle) * endR);
      context.stroke();
    }
    
    // Inner core
    const innerGradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 20);
    innerGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    innerGradient.addColorStop(0.5, 'rgba(255, 255, 200, 0.8)');
    innerGradient.addColorStop(1, 'rgba(255, 200, 100, 0.4)');
    
    context.fillStyle = innerGradient;
    context.beginPath();
    context.arc(centerX, centerY, 20, 0, Math.PI * 2);
    context.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  private createSpaceDistortion(): void {
    const distortionGeometry = new THREE.SphereGeometry(
      this.planetRadius + 5.0,
      64,
      32
    );

    const distortionMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(this.params.color![0] * 0.3, this.params.color![1] * 0.3, this.params.color![2] * 0.1) },
      },
      vertexShader: `
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          
          vec3 pos = position;
          float distortion = sin(pos.x * 1.5 + time * 0.5) * sin(pos.y * 1.5 + time * 0.7) * sin(pos.z * 1.5 + time * 0.3);
          pos += normal * distortion * 0.2;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
          float divine = sin(vPosition.x * 3.0 + time) * sin(vPosition.y * 3.0 + time * 1.3) * sin(vPosition.z * 3.0 + time * 0.7) * 0.5 + 0.5;
          
          float alpha = fresnel * divine * 0.1;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    });

    this.spaceDistortion = new THREE.Mesh(distortionGeometry, distortionMaterial);
    this.group.add(this.spaceDistortion);
  }

  private createDivineLight(): void {
    this.divineLight = new THREE.PointLight(
      new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]),
      2.0,
      this.planetRadius * 10.0
    );
    this.divineLight.position.set(0, this.planetRadius * 1.5, 0);
    this.group.add(this.divineLight);
  }

  private calculateOrbitalPosition(distance: number, inclination: number, longitudeOfAscendingNode: number, angle: number): THREE.Vector3 {
    const x_orbital = distance * Math.cos(angle);
    const y_orbital = distance * Math.sin(angle);
    const z_orbital = 0;

    const x_inclined = x_orbital;
    const y_inclined = y_orbital * Math.cos(inclination) - z_orbital * Math.sin(inclination);
    const z_inclined = y_orbital * Math.sin(inclination) + z_orbital * Math.cos(inclination);

    const x_final = x_inclined * Math.cos(longitudeOfAscendingNode) - y_inclined * Math.sin(longitudeOfAscendingNode);
    const y_final = x_inclined * Math.sin(longitudeOfAscendingNode) + y_inclined * Math.cos(longitudeOfAscendingNode);
    const z_final = z_inclined;

    return new THREE.Vector3(x_final, y_final, z_final);
  }

  public update(_deltaTime?: number): void {
    const currentTimeSeconds = Date.now() / 1000;
    const timeSinceCosmicOrigin = currentTimeSeconds - (this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME);
    const animTime = timeSinceCosmicOrigin + this.cosmicOffset;

    // Update Divine Robotic God Face
    if (this.roboticFace) {
      const userData = this.roboticFace.userData;
      
      // Keep divine face position synced with planet position if updated
      if (this.params.planetPosition && userData.planetPosition) {
        if (!this.params.planetPosition.equals(userData.planetPosition)) {
          this.roboticFace.position.copy(this.params.planetPosition);
          userData.planetPosition.copy(this.params.planetPosition);
        }
      }
      
      // Divine rotation - very slow and majestic
      this.roboticFace.rotation.y += userData.rotationSpeed;
      
      // Update shader uniforms for divine head
      const headMaterial = this.faceHead.material as THREE.ShaderMaterial;
      headMaterial.uniforms.time.value = animTime;
      if (this.params.mousePosition) {
        headMaterial.uniforms.mousePos.value = this.params.mousePosition;
      }
      
      // Update divine eyes with mouse tracking
      const leftEyeMaterial = this.leftEye.material as THREE.ShaderMaterial;
      leftEyeMaterial.uniforms.time.value = animTime;
      if (this.params.mousePosition) {
        leftEyeMaterial.uniforms.mousePos.value = this.params.mousePosition;
      }
      
      const rightEyeMaterial = this.rightEye.material as THREE.ShaderMaterial;
      rightEyeMaterial.uniforms.time.value = animTime;
      if (this.params.mousePosition) {
        rightEyeMaterial.uniforms.mousePos.value = this.params.mousePosition;
      }
      
      // Update divine mouth
      const mouthMaterial = this.mouth.material as THREE.ShaderMaterial;
      mouthMaterial.uniforms.time.value = animTime;
      
      // Subtle divine breathing effect for the entire god sphere
      const divineBreath = Math.sin(animTime * 0.8) * 0.02 + 1.0;
      this.roboticFace.scale.setScalar(divineBreath);
    }

    // Update Divine Rays emanating from the divine god sphere
    this.divineRays.forEach((ray) => {
      const userData = ray.userData;
      
      // Position rays emanating from the divine face position with proper radius
      const angle = userData.baseAngle;
      const offsetDistance = this.planetRadius * 1.5; // Rays emanate from edge of divine sphere
      
      // Get current divine face position
      const facePos = this.roboticFace ? this.roboticFace.position : new THREE.Vector3(0, 0, 0);
      
      const rayOffset = new THREE.Vector3(
        Math.cos(angle) * offsetDistance,
        0,
        Math.sin(angle) * offsetDistance
      );
      
      ray.position.copy(facePos).add(rayOffset);
      
      ray.rotation.z = userData.baseAngle + animTime * userData.rotationSpeed;
      
      const material = ray.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
    });


    // Update Sacred Symbols
    this.sacredSymbols.forEach((symbol) => {
      const userData = symbol.userData;
      const currentAngle = userData.initialAngle + animTime * userData.orbitalSpeed * 0.05;

      const position = this.calculateOrbitalPosition(userData.distance, userData.inclination, userData.longitudeOfAscendingNode, currentAngle);
      symbol.position.set(position.x, position.y, position.z);
      symbol.lookAt(0, 0, 0);

      symbol.rotation.z += 0.02;

      const material = symbol.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
    });

    // Update Orbital Crosses with enhanced procedural rotation
    this.orbitalCrosses.forEach((cross) => {
      const userData = cross.userData;
      const currentAngle = userData.initialAngle + animTime * userData.orbitalSpeed * 0.08;

      const position = this.calculateOrbitalPosition(userData.distance, userData.inclination, userData.longitudeOfAscendingNode, currentAngle);
      cross.position.set(position.x, position.y, position.z);

      // Procedural rotation based on golden ratio and time
      cross.rotation.x = userData.rotationPhaseX + animTime * userData.rotationSpeedX;
      cross.rotation.y = userData.rotationPhaseY + animTime * userData.rotationSpeedY;
      cross.rotation.z = userData.rotationPhaseZ + animTime * userData.rotationSpeedZ;

      // Add divine oscillation
      const divineOscillation = Math.sin(animTime * 3.0 + userData.crossIndex) * 0.3;
      cross.rotation.x += divineOscillation;
      cross.rotation.y += divineOscillation * 1.618;
      cross.rotation.z += divineOscillation * 0.618;

      const material = cross.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
    });

    // Update Cross Spirals
    this.crossSpirals.forEach((cross) => {
      const userData = cross.userData;
      
      // Spiral rotation and movement
      const spiralTime = animTime * 0.5;
      const newAngle = userData.angle + spiralTime;
      const oscillation = Math.sin(spiralTime * 2.0 + userData.crossIndex * 0.1) * 0.3;
      
      const x = Math.cos(newAngle) * userData.spiralRadius * (1.0 + oscillation);
      const z = Math.sin(newAngle) * userData.spiralRadius * (1.0 + oscillation);
      const y = userData.height + Math.sin(spiralTime * 3.0 + userData.crossIndex) * 0.5;
      
      cross.position.set(x, y, z);
      cross.lookAt(0, 0, 0);
      cross.rotation.z += userData.rotationSpeed;
      
      const material = cross.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
    });

    // Update Hologram Rings
    this.hologramRings.forEach((ring) => {
      const userData = ring.userData;
      
      ring.rotation.x = userData.baseRotationX + animTime * userData.rotationSpeed;
      ring.rotation.y = userData.baseRotationY + animTime * userData.rotationSpeed * 0.7;
      ring.rotation.z += userData.rotationSpeed * 0.5;
      
      const material = ring.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
    });

    // Update Sacred Circles
    this.sacredCircles.forEach((circle) => {
      const userData = circle.userData;
      circle.rotation.z += userData.rotationSpeed;

      const material = circle.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
    });

    // Update Golden Particles
    if (this.goldenParticles) {
      const particleMaterial = this.goldenParticles.material as THREE.ShaderMaterial;
      particleMaterial.uniforms.time.value = animTime;

      const positions = this.goldenParticles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length / 3; i++) {
        const orbitData = this.particleOrbitData[i];
        const currentAngle = orbitData.initialAngle + animTime * orbitData.orbitalSpeed * 0.03;
        
        const position = this.calculateOrbitalPosition(
          orbitData.distance,
          orbitData.inclination,
          orbitData.longitudeOfAscendingNode,
          currentAngle
        );

        // Divine falling effect
        const fallOffset = Math.sin(animTime * orbitData.fallSpeed + i * 0.1) * 0.5;
        
        positions[i * 3] = position.x;
        positions[i * 3 + 1] = position.y + fallOffset;
        positions[i * 3 + 2] = position.z;
      }
      this.goldenParticles.geometry.attributes.position.needsUpdate = true;
    }

    // Update Divine Particles
    if (this.divineParticles) {
      const particleMaterial = this.divineParticles.material as THREE.ShaderMaterial;
      particleMaterial.uniforms.time.value = animTime;

      const positions = this.divineParticles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length / 3; i++) {
        const orbitData = this.divineParticleOrbitData[i];
        const currentAngle = orbitData.initialAngle + animTime * orbitData.orbitalSpeed * 0.05;
        
        const position = this.calculateOrbitalPosition(
          orbitData.distance,
          orbitData.inclination,
          orbitData.longitudeOfAscendingNode,
          currentAngle
        );

        // Divine floating effect with phase
        const floatOffset = Math.sin(animTime * 2.0 + orbitData.phase) * 1.0;
        const spiralOffset = Math.sin(animTime * 1.0 + i * 0.1) * 0.3;
        
        positions[i * 3] = position.x + spiralOffset;
        positions[i * 3 + 1] = position.y + floatOffset;
        positions[i * 3 + 2] = position.z + spiralOffset;
      }
      this.divineParticles.geometry.attributes.position.needsUpdate = true;
    }

    // Update Energy Waves
    this.energyWaves.forEach((wave) => {
      const userData = wave.userData;
      
      wave.rotation.x += userData.rotationSpeed;
      wave.rotation.y += userData.rotationSpeed * 1.3;
      wave.rotation.z += userData.rotationSpeed * 0.7;
      
      const material = wave.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
      
      // Pulsating effect
      const pulse = Math.sin(animTime * 2.0 + userData.waveIndex * 0.5) * 0.1 + 1.0;
      wave.scale.setScalar(pulse);
    });

    // Update Holy Lights
    this.holyLights.forEach((light) => {
      const userData = light.userData;
      
      // Orbital movement
      const currentAngle = userData.angle + animTime * userData.orbitalSpeed * 0.1;
      const heightOscillation = Math.sin(animTime * 1.5 + userData.lightIndex) * userData.distance * 0.5;
      
      const x = Math.cos(currentAngle) * userData.distance;
      const z = Math.sin(currentAngle) * userData.distance;
      const y = userData.baseY + heightOscillation;
      
      light.position.set(x, y, z);
      
      // Intensity pulsing
      const intensity = Math.sin(animTime * 4.0 + userData.lightIndex * 0.8) * 0.8 + 1.2;
      light.intensity = intensity;
    });

    // Update Space Distortion
    if (this.spaceDistortion) {
      const distortionMaterial = this.spaceDistortion.material as THREE.ShaderMaterial;
      distortionMaterial.uniforms.time.value = animTime;
      
      this.spaceDistortion.rotation.x += 0.001;
      this.spaceDistortion.rotation.y += 0.0015;
    }

    // Update Divine Light
    if (this.divineLight) {
      const divineIntensity = Math.sin(animTime * 2.0) * 0.5 + 1.5;
      this.divineLight.intensity = divineIntensity;
    }
  }

  public getObject3D(): THREE.Object3D {
    return this.group;
  }

  public addToScene(scene: THREE.Scene, position?: THREE.Vector3): void {
    if (position) {
      this.group.position.copy(position);
    }
    scene.add(this.group);
  }

  public removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.group);
  }

  public dispose(): void {
    if (this.roboticFace) {
      // Dispose robotic face components
      if (this.faceHead) {
        this.faceHead.geometry.dispose();
        (this.faceHead.material as THREE.Material).dispose();
      }
      if (this.leftEye) {
        this.leftEye.geometry.dispose();
        (this.leftEye.material as THREE.Material).dispose();
      }
      if (this.rightEye) {
        this.rightEye.geometry.dispose();
        (this.rightEye.material as THREE.Material).dispose();
      }
      if (this.mouth) {
        this.mouth.geometry.dispose();
        (this.mouth.material as THREE.Material).dispose();
      }
      this.faceDetails.forEach((detail) => {
        detail.geometry.dispose();
        (detail.material as THREE.Material).dispose();
      });
    }

    this.divineRays.forEach((ray) => {
      ray.geometry.dispose();
      (ray.material as THREE.Material).dispose();
    });

    this.sacredSymbols.forEach((symbol) => {
      symbol.geometry.dispose();
      (symbol.material as THREE.Material).dispose();
    });

    this.orbitalCrosses.forEach((cross) => {
      cross.geometry.dispose();
      (cross.material as THREE.Material).dispose();
    });

    this.crossSpirals.forEach((cross) => {
      cross.geometry.dispose();
      (cross.material as THREE.Material).dispose();
    });

    this.hologramRings.forEach((ring) => {
      ring.geometry.dispose();
      (ring.material as THREE.Material).dispose();
    });

    this.sacredCircles.forEach((circle) => {
      circle.geometry.dispose();
      (circle.material as THREE.Material).dispose();
    });

    if (this.goldenParticles) {
      this.goldenParticles.geometry.dispose();
      (this.goldenParticles.material as THREE.Material).dispose();
    }

    if (this.divineParticles) {
      this.divineParticles.geometry.dispose();
      (this.divineParticles.material as THREE.Material).dispose();
    }

    this.energyWaves.forEach((wave) => {
      wave.geometry.dispose();
      (wave.material as THREE.Material).dispose();
    });

    this.holyLights.forEach(() => {
      // Point lights don't need geometry disposal
    });

    if (this.spaceDistortion) {
      this.spaceDistortion.geometry.dispose();
      (this.spaceDistortion.material as THREE.Material).dispose();
    }

    this.group.clear();
  }

  public setEnabled(enabled: boolean): void {
    this.group.visible = enabled;
  }

  public updateParams(newParams: Partial<LifeFormGodParams>): void {
    Object.assign(this.params, newParams);

    if (newParams.color) {
      const color = new THREE.Color(newParams.color[0], newParams.color[1], newParams.color[2]);

      if (this.faceHead) {
        const material = this.faceHead.material as THREE.ShaderMaterial;
        material.uniforms.color.value = color;
      }

      this.divineRays.forEach((ray) => {
        const material = ray.material as THREE.ShaderMaterial;
        material.uniforms.color.value = new THREE.Color(color.r, color.g * 0.9, color.b * 0.7);
      });

      if (this.divineLight) {
        this.divineLight.color = color;
      }
    }

    // Update mouse position if provided
    if (newParams.mousePosition !== undefined) {
      if (this.faceHead) {
        const headMaterial = this.faceHead.material as THREE.ShaderMaterial;
        headMaterial.uniforms.mousePos.value = newParams.mousePosition;
      }
      if (this.leftEye) {
        const leftEyeMaterial = this.leftEye.material as THREE.ShaderMaterial;
        leftEyeMaterial.uniforms.mousePos.value = newParams.mousePosition;
      }
      if (this.rightEye) {
        const rightEyeMaterial = this.rightEye.material as THREE.ShaderMaterial;
        rightEyeMaterial.uniforms.mousePos.value = newParams.mousePosition;
      }
    }
  }

  public updateMousePosition(mousePosition: THREE.Vector2): void {
    this.params.mousePosition = mousePosition;
    
    // Immediately update all materials with mouse position
    if (this.faceHead) {
      const headMaterial = this.faceHead.material as THREE.ShaderMaterial;
      headMaterial.uniforms.mousePos.value = mousePosition;
    }
    if (this.leftEye) {
      const leftEyeMaterial = this.leftEye.material as THREE.ShaderMaterial;
      leftEyeMaterial.uniforms.mousePos.value = mousePosition;
    }
    if (this.rightEye) {
      const rightEyeMaterial = this.rightEye.material as THREE.ShaderMaterial;
      rightEyeMaterial.uniforms.mousePos.value = mousePosition;
    }
  }

  public updatePlanetPosition(planetPosition: THREE.Vector3): void {
    this.params.planetPosition = planetPosition;
    
    // Immediately update divine face position to match planet
    if (this.roboticFace) {
      this.roboticFace.position.copy(planetPosition);
      if (this.roboticFace.userData.planetPosition) {
        this.roboticFace.userData.planetPosition.copy(planetPosition);
      }
    }
  }
}

export function createLifeFormGodFromPythonData(planetRadius: number, pythonData: any, globalSeed?: number): LifeFormGodEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);

  const params: LifeFormGodParams = {
    seed: seed + 90005,
    color: pythonData.color || [1.0, 0.84, 0.0],
    cosmicOriginTime: pythonData?.timing?.cosmic_origin_time || pythonData?.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME,
  };

  return new LifeFormGodEffect(planetRadius, params);
}