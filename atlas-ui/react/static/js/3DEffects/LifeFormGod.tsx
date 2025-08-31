// atlas-ui/react/static/js/3DEffects/LifeFormGod.tsx
import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";
import { DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime.tsx";

const PROCEDURAL_RANGES = {
  DIVINE_RAY_COUNT: { min: 12, max: 24 },
  SACRED_SYMBOL_COUNT: { min: 8, max: 16 },
  ORBITAL_CROSS_COUNT: { min: 4, max: 8 },
  SACRED_CIRCLE_COUNT: { min: 3, max: 6 },
  GOLDEN_PARTICLE_COUNT: { min: 200, max: 500 },
  DIVINE_PULSE_INTENSITY: { min: 2.0, max: 5.0 },
  ORBITAL_SPEED: { min: 0.1, max: 0.5 },
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
  seed?: number;
  cosmicOriginTime?: number;
}

export class LifeFormGodEffect {
  private group: THREE.Group;
  private goldenTriangle: THREE.Mesh;
  private divineRays: THREE.Mesh[] = [];
  private sacredHalo: THREE.Mesh;
  private sacredSymbols: THREE.Mesh[] = [];
  private orbitalCrosses: THREE.Mesh[] = [];
  private sacredCircles: THREE.Mesh[] = [];
  private goldenParticles: THREE.Points;
  private particleOrbitData: Array<{
    distance: number;
    inclination: number;
    longitudeOfAscendingNode: number;
    initialAngle: number;
    orbitalSpeed: number;
    fallSpeed: number;
  }> = [];
  private spaceDistortion: THREE.Mesh;
  private divineLight: THREE.PointLight;
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
      cosmicOriginTime: params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME,
      seed,
    };

    this.cosmicOffset = (seed % 100) * 0.1;

    this.group = new THREE.Group();
    this.createGoldenTriangle();
    this.createDivineRays();
    this.createSacredHalo();
    this.createSacredSymbols();
    this.createOrbitalCrosses();
    this.createSacredCircles();
    this.createGoldenParticles();
    this.createSpaceDistortion();
    this.createDivineLight();
  }

  private createGoldenTriangle(): void {
    const triangleSize = this.planetRadius * 0.8;
    
    // Create triangle geometry
    const triangleGeometry = new THREE.ConeGeometry(triangleSize, triangleSize * 1.5, 3);
    
    const triangleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]) },
        pulseIntensity: { value: this.params.divinePulseIntensity! },
      },
      vertexShader: `
        uniform float time;
        uniform float pulseIntensity;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying float vPulse;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          
          float pulse = sin(time * 2.0) * 0.3 + 1.0;
          vPulse = pulse;
          
          vec3 pos = position * pulse;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying float vPulse;
        
        void main() {
          float divine = sin(time * 4.0 + vPosition.y * 0.5) * 0.3 + 0.7;
          float sacred = sin(vPosition.x * 10.0 + time * 3.0) * sin(vPosition.z * 8.0 + time * 2.0) * 0.2 + 0.8;
          
          vec3 divineGold = color * divine * sacred * vPulse;
          float alpha = 0.9;
          
          gl_FragColor = vec4(divineGold, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    this.goldenTriangle = new THREE.Mesh(triangleGeometry, triangleMaterial);
    
    // Add orbital parameters for procedural movement
    const triangleDistance = this.planetRadius + 1.8;
    const triangleInclination = this.rng.random() * Math.PI * 0.3 + Math.PI * 0.35; // Keep it more upright
    const triangleLongitude = this.rng.random() * Math.PI * 2;
    const triangleInitialAngle = this.rng.random() * Math.PI * 2;
    
    // Calculate initial position
    const initialPosition = this.calculateOrbitalPosition(triangleDistance, triangleInclination, triangleLongitude, triangleInitialAngle);
    this.goldenTriangle.position.copy(initialPosition);
    this.goldenTriangle.lookAt(0, 0, 0);
    this.goldenTriangle.rotation.x += Math.PI;
    
    // Store orbital data
    this.goldenTriangle.userData = {
      distance: triangleDistance,
      inclination: triangleInclination,
      longitudeOfAscendingNode: triangleLongitude,
      initialAngle: triangleInitialAngle,
      orbitalSpeed: 0.15 + this.rng.random() * 0.1,
      rotationSpeed: 0.005,
    };
    
    this.group.add(this.goldenTriangle);
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
      
      // Position rays - they will follow triangle in update()
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

  private createSacredHalo(): void {
    const haloRadius = this.planetRadius * 1.2;
    const haloGeometry = new THREE.RingGeometry(haloRadius * 0.8, haloRadius, 64, 1);
    
    const haloMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(this.params.color![0] * 1.2, this.params.color![1], this.params.color![2] * 0.8) },
      },
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vHoliness;
        
        void main() {
          vUv = uv;
          
          float holiness = sin(time * 2.0) * 0.2 + 1.0;
          vHoliness = holiness;
          
          vec3 pos = position;
          pos.z += sin(time * 3.0 + atan(pos.y, pos.x) * 8.0) * 0.05;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying vec2 vUv;
        varying float vHoliness;
        
        void main() {
          float dist = length(vUv - 0.5);
          float halo = smoothstep(0.35, 0.4, dist) * (1.0 - smoothstep(0.45, 0.5, dist));
          
          float sacred = sin(dist * 30.0 + time * 4.0) * 0.3 + 0.7;
          float divine = sin(time * 6.0) * 0.2 + 0.8;
          
          float intensity = halo * sacred * divine * vHoliness;
          
          gl_FragColor = vec4(color, intensity);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    this.sacredHalo = new THREE.Mesh(haloGeometry, haloMaterial);
    this.sacredHalo.rotation.x = Math.PI / 2;
    this.group.add(this.sacredHalo);
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
      const distance = this.planetRadius + 1.5 + i * 0.8;
      const inclination = this.rng.random() * Math.PI;
      const longitudeOfAscendingNode = this.rng.random() * Math.PI * 2;
      const initialAngle = this.rng.random() * Math.PI * 2;

      const crossGeometry = this.createCrossGeometry();
      
      const crossMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(this.params.color![0], this.params.color![1] * 0.8, this.params.color![2] * 1.2) },
          crossIndex: { value: i },
        },
        vertexShader: `
          uniform float time;
          uniform float crossIndex;
          varying float vBlessing;
          
          void main() {
            float blessing = sin(time * 5.0 + crossIndex * 1.5) * 0.4 + 0.6;
            vBlessing = blessing;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float time;
          varying float vBlessing;
          
          void main() {
            float divine = sin(time * 8.0) * 0.2 + 0.8;
            
            gl_FragColor = vec4(color * divine, vBlessing);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const cross = new THREE.Mesh(crossGeometry, crossMaterial);
      
      cross.userData = {
        distance: distance,
        inclination: inclination,
        longitudeOfAscendingNode: longitudeOfAscendingNode,
        initialAngle: initialAngle,
        orbitalSpeed: this.rng.random() * 0.4 + 0.2,
        crossIndex: i,
      };

      this.orbitalCrosses.push(cross);
      this.group.add(cross);
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

    // Update Golden Triangle
    if (this.goldenTriangle) {
      const userData = this.goldenTriangle.userData;
      const currentAngle = userData.initialAngle + animTime * userData.orbitalSpeed * 0.03;

      // Update orbital position
      const position = this.calculateOrbitalPosition(
        userData.distance,
        userData.inclination,
        userData.longitudeOfAscendingNode,
        currentAngle
      );
      this.goldenTriangle.position.copy(position);
      this.goldenTriangle.lookAt(0, 0, 0);
      this.goldenTriangle.rotation.x += Math.PI;

      // Divine rotation
      this.goldenTriangle.rotation.y += userData.rotationSpeed;
      
      const material = this.goldenTriangle.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
      
      // Divine breathing effect
      const divineBreath = Math.sin(animTime * 1.5) * 0.1 + 1.0;
      this.goldenTriangle.scale.setScalar(divineBreath);
    }

    // Update Divine Rays
    this.divineRays.forEach((ray) => {
      const userData = ray.userData;
      
      // Position rays emanating from triangle's current position
      if (this.goldenTriangle) {
        const trianglePos = this.goldenTriangle.position;
        const angle = userData.baseAngle;
        const offsetDistance = this.planetRadius * 0.3;
        
        const rayOffset = new THREE.Vector3(
          Math.cos(angle) * offsetDistance,
          0,
          Math.sin(angle) * offsetDistance
        );
        
        ray.position.copy(trianglePos).add(rayOffset);
      }
      
      ray.rotation.z = userData.baseAngle + animTime * userData.rotationSpeed;
      
      const material = ray.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
    });

    // Update Sacred Halo
    if (this.sacredHalo && this.goldenTriangle) {
      // Follow triangle position
      this.sacredHalo.position.copy(this.goldenTriangle.position);
      this.sacredHalo.rotation.z += 0.01;
      const material = this.sacredHalo.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
    }

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

    // Update Orbital Crosses
    this.orbitalCrosses.forEach((cross) => {
      const userData = cross.userData;
      const currentAngle = userData.initialAngle + animTime * userData.orbitalSpeed * 0.08;

      const position = this.calculateOrbitalPosition(userData.distance, userData.inclination, userData.longitudeOfAscendingNode, currentAngle);
      cross.position.set(position.x, position.y, position.z);

      cross.rotation.x += 0.01;
      cross.rotation.y += 0.015;
      cross.rotation.z += 0.008;

      const material = cross.material as THREE.ShaderMaterial;
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
    if (this.goldenTriangle) {
      this.goldenTriangle.geometry.dispose();
      (this.goldenTriangle.material as THREE.Material).dispose();
    }

    this.divineRays.forEach((ray) => {
      ray.geometry.dispose();
      (ray.material as THREE.Material).dispose();
    });

    if (this.sacredHalo) {
      this.sacredHalo.geometry.dispose();
      (this.sacredHalo.material as THREE.Material).dispose();
    }

    this.sacredSymbols.forEach((symbol) => {
      symbol.geometry.dispose();
      (symbol.material as THREE.Material).dispose();
    });

    this.orbitalCrosses.forEach((cross) => {
      cross.geometry.dispose();
      (cross.material as THREE.Material).dispose();
    });

    this.sacredCircles.forEach((circle) => {
      circle.geometry.dispose();
      (circle.material as THREE.Material).dispose();
    });

    if (this.goldenParticles) {
      this.goldenParticles.geometry.dispose();
      (this.goldenParticles.material as THREE.Material).dispose();
    }

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

      if (this.goldenTriangle) {
        const material = this.goldenTriangle.material as THREE.ShaderMaterial;
        material.uniforms.color.value = color;
      }

      this.divineRays.forEach((ray) => {
        const material = ray.material as THREE.ShaderMaterial;
        material.uniforms.color.value = new THREE.Color(color.r, color.g * 0.9, color.b * 0.7);
      });

      if (this.sacredHalo) {
        const material = this.sacredHalo.material as THREE.ShaderMaterial;
        material.uniforms.color.value = new THREE.Color(color.r * 1.2, color.g, color.b * 0.8);
      }

      if (this.divineLight) {
        this.divineLight.color = color;
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