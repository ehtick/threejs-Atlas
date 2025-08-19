/**
 * Anomaly Gravity Well Effect - Pozo gravitacional anómalo
 *
 * Simula un mini agujero negro con partículas que orbitan y son atraídas,
 * creando espirales gravitacionales sutiles pero hipnotizantes.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface AnomalyGravityWellParams {
  particleCount?: number;
  gravityStrength?: number;
  orbitRadius?: number;
  wellSize?: number;
  seed?: number;
  timeSpeed?: number;
  particleSpeed?: number;
}

const PROCEDURAL_RANGES = {
  PARTICLE_COUNT: { min: 100, max: 300 },
  GRAVITY_STRENGTH: { min: 0.3, max: 0.8 },
  ORBIT_RADIUS: { min: 0.8, max: 1.5 },
  WELL_SIZE: { min: 0.1, max: 0.3 },
  TIME_SPEED: { min: 0.5, max: 1.5 },
  PARTICLE_SPEED: { min: 0.5, max: 2.0 }
};

export class AnomalyGravityWellEffect {
  private gravitySystem: THREE.Group;
  private particles: THREE.Points;
  private blackHole: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private blackHoleMaterial: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private params: AnomalyGravityWellParams;
  private particlePositions: Float32Array;
  private particleVelocities: Float32Array;
  private particleAges: Float32Array;
  private startTime: number;
  private particleCount: number;
  private ejectionTimer: number = 0;
  private ejectionInterval: number;
  private absorbedParticles: number[] = [];

  private static readonly particleVertexShader = `
    attribute float age;
    attribute float size;
    
    varying float vAge;
    varying vec3 vPosition;
    
    uniform float time;
    
    void main() {
      vAge = age;
      vPosition = position;
      
      // Brillo basado en la edad y proximidad al centro
      float distFromCenter = length(position);
      float brightness = (1.0 - distFromCenter * 0.5) * (1.0 - age);
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * brightness * (300.0 / max(-mvPosition.z, 1.0));
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  private static readonly particleFragmentShader = `
    varying float vAge;
    varying vec3 vPosition;
    
    uniform float time;
    
    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      if (dist > 0.5) discard;
      
      // Color que cambia según la proximidad al centro
      float distFromCenter = length(vPosition);
      
      // Colores: azul en el exterior, blanco en el centro, naranja cerca del agujero negro
      vec3 color;
      if (distFromCenter > 1.5) {
        color = vec3(0.2, 0.4, 1.0); // Azul exterior
      } else if (distFromCenter > 0.8) {
        color = mix(vec3(1.0, 1.0, 1.0), vec3(0.2, 0.4, 1.0), (distFromCenter - 0.8) / 0.7);
      } else if (distFromCenter > 0.3) {
        color = mix(vec3(1.0, 0.6, 0.2), vec3(1.0, 1.0, 1.0), (distFromCenter - 0.3) / 0.5);
      } else {
        color = vec3(1.0, 0.3, 0.1); // Rojo/naranja cerca del agujero negro
      }
      
      // Efecto de partícula suave
      float particle = 1.0 - smoothstep(0.0, 0.5, dist);
      
      // Alpha basado en la edad y distancia
      float alpha = particle * (1.0 - vAge) * 0.8;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  private static readonly blackHoleVertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    uniform float time;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  private static readonly blackHoleFragmentShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    uniform float time;
    
    void main() {
      // Centro completamente negro
      float distFromCenter = length(vUv - 0.5) * 2.0;
      
      if (distFromCenter < 0.3) {
        // Centro del agujero negro - completamente negro
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      } else if (distFromCenter < 0.8) {
        // Borde del horizonte de eventos - transición
        float transition = (distFromCenter - 0.3) / 0.5;
        float glow = sin(time * 2.0) * 0.1 + 0.2;
        vec3 edgeColor = vec3(0.1, 0.05, 0.2) * glow;
        gl_FragColor = vec4(edgeColor, 1.0 - transition * 0.5);
      } else {
        // Fuera del horizonte - transparente
        discard;
      }
    }
  `;

  constructor(planetRadius: number, params: AnomalyGravityWellParams = {}) {
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    this.startTime = (seed % 10000) / 1000;
    
    this.params = {
      particleCount: params.particleCount || Math.floor(rng.uniform(PROCEDURAL_RANGES.PARTICLE_COUNT.min, PROCEDURAL_RANGES.PARTICLE_COUNT.max)),
      gravityStrength: params.gravityStrength || rng.uniform(PROCEDURAL_RANGES.GRAVITY_STRENGTH.min, PROCEDURAL_RANGES.GRAVITY_STRENGTH.max),
      orbitRadius: params.orbitRadius || rng.uniform(PROCEDURAL_RANGES.ORBIT_RADIUS.min, PROCEDURAL_RANGES.ORBIT_RADIUS.max),
      wellSize: params.wellSize || rng.uniform(PROCEDURAL_RANGES.WELL_SIZE.min, PROCEDURAL_RANGES.WELL_SIZE.max),
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
      particleSpeed: params.particleSpeed || rng.uniform(PROCEDURAL_RANGES.PARTICLE_SPEED.min, PROCEDURAL_RANGES.PARTICLE_SPEED.max),
      seed: seed,
    };

    this.ejectionInterval = rng.uniform(3.0, 8.0); // Ejectar cada 3-8 segundos

    this.particleCount = this.params.particleCount!;
    this.gravitySystem = new THREE.Group();
    
    this.initializeParticles(planetRadius, rng);
    this.createBlackHole(planetRadius);
    
    // Posicionar el sistema cerca del planeta
    this.gravitySystem.position.set(
      planetRadius * rng.uniform(1.5, 2.5) * (rng.random() > 0.5 ? 1 : -1),
      planetRadius * rng.uniform(-0.5, 0.5),
      planetRadius * rng.uniform(1.5, 2.5) * (rng.random() > 0.5 ? 1 : -1)
    );
  }

  private initializeParticles(planetRadius: number, rng: SeededRandom): void {
    this.geometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(this.particleCount * 3);
    const velocities = new Float32Array(this.particleCount * 3);
    const ages = new Float32Array(this.particleCount);
    const sizes = new Float32Array(this.particleCount);
    
    // Inicializar partículas en órbitas aleatorias
    for (let i = 0; i < this.particleCount; i++) {
      // Posición inicial en disco de acreción
      const radius = rng.uniform(0.8, 2.5) * this.params.orbitRadius!;
      const angle = rng.uniform(0, Math.PI * 2);
      const height = rng.uniform(-0.2, 0.2);
      
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      
      // Velocidad orbital inicial
      const orbitalSpeed = Math.sqrt(this.params.gravityStrength! / radius) * this.params.particleSpeed!;
      velocities[i * 3] = -Math.sin(angle) * orbitalSpeed;
      velocities[i * 3 + 1] = rng.uniform(-0.1, 0.1);
      velocities[i * 3 + 2] = Math.cos(angle) * orbitalSpeed;
      
      ages[i] = rng.uniform(0, 1);
      sizes[i] = rng.uniform(1.0, 3.0);
    }
    
    this.particlePositions = positions;
    this.particleVelocities = velocities;
    this.particleAges = ages;
    
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('age', new THREE.BufferAttribute(ages, 1));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    this.material = new THREE.ShaderMaterial({
      vertexShader: AnomalyGravityWellEffect.particleVertexShader,
      fragmentShader: AnomalyGravityWellEffect.particleFragmentShader,
      uniforms: {
        time: { value: 0 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    this.particles = new THREE.Points(this.geometry, this.material);
    this.gravitySystem.add(this.particles);
  }

  private createBlackHole(planetRadius: number): void {
    const blackHoleGeometry = new THREE.SphereGeometry(this.params.wellSize! * planetRadius, 32, 32);
    
    this.blackHoleMaterial = new THREE.ShaderMaterial({
      vertexShader: AnomalyGravityWellEffect.blackHoleVertexShader,
      fragmentShader: AnomalyGravityWellEffect.blackHoleFragmentShader,
      uniforms: {
        time: { value: 0 }
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });
    
    this.blackHole = new THREE.Mesh(blackHoleGeometry, this.blackHoleMaterial);
    this.gravitySystem.add(this.blackHole);
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    scene.add(this.gravitySystem);
  }

  update(deltaTime: number): void {
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000;
    
    this.material.uniforms.time.value = currentTime;
    this.blackHoleMaterial.uniforms.time.value = currentTime;
    
    // Actualizar física de partículas
    const dt = deltaTime * this.params.timeSpeed! * 0.5; // Ralentizar para mayor realismo
    
    for (let i = 0; i < this.particleCount; i++) {
      const px = this.particlePositions[i * 3];
      const py = this.particlePositions[i * 3 + 1];
      const pz = this.particlePositions[i * 3 + 2];
      
      const vx = this.particleVelocities[i * 3];
      const vy = this.particleVelocities[i * 3 + 1];
      const vz = this.particleVelocities[i * 3 + 2];
      
      // Calcular fuerza gravitacional hacia el centro
      const distance = Math.sqrt(px * px + py * py + pz * pz);
      
      if (distance > 0.05) { // Evitar división por cero
        const gravityForce = this.params.gravityStrength! / (distance * distance);
        const fx = -px / distance * gravityForce;
        const fy = -py / distance * gravityForce;
        const fz = -pz / distance * gravityForce;
        
        // Actualizar velocidad
        this.particleVelocities[i * 3] += fx * dt;
        this.particleVelocities[i * 3 + 1] += fy * dt * 0.1; // Menos fuerza en Y
        this.particleVelocities[i * 3 + 2] += fz * dt;
        
        // Actualizar posición
        this.particlePositions[i * 3] += this.particleVelocities[i * 3] * dt;
        this.particlePositions[i * 3 + 1] += this.particleVelocities[i * 3 + 1] * dt;
        this.particlePositions[i * 3 + 2] += this.particleVelocities[i * 3 + 2] * dt;
        
        // Absorber partícula si está muy cerca del centro
        if (distance < 0.15) {
          this.absorbParticle(i);
        }
        // Envejecer partícula si está cerca del centro
        else if (distance < 0.3) {
          this.particleAges[i] += dt * 2.0;
        }
        
        // Resetear partícula si es muy vieja
        if (this.particleAges[i] > 1.0) {
          this.resetParticle(i);
        }
      } else {
        this.resetParticle(i);
      }
    }
    
    // Actualizar atributos de geometría
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.age.needsUpdate = true;
    
    // Sistema de eyección periódica
    this.ejectionTimer += deltaTime;
    if (this.ejectionTimer >= this.ejectionInterval && this.absorbedParticles.length > 0) {
      this.ejectParticles();
      this.ejectionTimer = 0;
    }
    
    // Rotación lenta del sistema completo
    this.gravitySystem.rotation.y += deltaTime * 0.1;
  }

  private resetParticle(index: number): void {
    // Generar nueva partícula en el borde exterior
    const rng = new SeededRandom(Date.now() + index);
    const radius = rng.uniform(2.0, 3.0) * this.params.orbitRadius!;
    const angle = rng.uniform(0, Math.PI * 2);
    const height = rng.uniform(-0.3, 0.3);
    
    this.particlePositions[index * 3] = Math.cos(angle) * radius;
    this.particlePositions[index * 3 + 1] = height;
    this.particlePositions[index * 3 + 2] = Math.sin(angle) * radius;
    
    // Velocidad orbital
    const orbitalSpeed = Math.sqrt(this.params.gravityStrength! / radius) * this.params.particleSpeed!;
    this.particleVelocities[index * 3] = -Math.sin(angle) * orbitalSpeed;
    this.particleVelocities[index * 3 + 1] = rng.uniform(-0.05, 0.05);
    this.particleVelocities[index * 3 + 2] = Math.cos(angle) * orbitalSpeed;
    
    this.particleAges[index] = 0;
  }

  private absorbParticle(index: number): void {
    // Marcar partícula como absorbida
    this.absorbedParticles.push(index);
    
    // Mover partícula al centro (planeta)
    this.particlePositions[index * 3] = 0;
    this.particlePositions[index * 3 + 1] = 0;
    this.particlePositions[index * 3 + 2] = 0;
    
    // Detener movimiento
    this.particleVelocities[index * 3] = 0;
    this.particleVelocities[index * 3 + 1] = 0;
    this.particleVelocities[index * 3 + 2] = 0;
    
    // Envejecer rápidamente para hacer invisible
    this.particleAges[index] = 1.5;
  }

  private ejectParticles(): void {
    console.log("💥 Ejecting absorbed particles from gravity well!");
    
    // Eyectar todas las partículas absorbidas
    for (const index of this.absorbedParticles) {
      const rng = new SeededRandom(Date.now() + index);
      
      // Eyectar en dirección aleatoria con alta velocidad
      const angle = rng.uniform(0, Math.PI * 2);
      const elevation = rng.uniform(-Math.PI / 4, Math.PI / 4);
      const ejectSpeed = rng.uniform(2.0, 4.0);
      
      // Posición inicial cerca del planeta
      const startRadius = 0.2;
      this.particlePositions[index * 3] = Math.cos(angle) * startRadius;
      this.particlePositions[index * 3 + 1] = Math.sin(elevation) * startRadius;
      this.particlePositions[index * 3 + 2] = Math.sin(angle) * startRadius;
      
      // Velocidad de eyección
      this.particleVelocities[index * 3] = Math.cos(angle) * Math.cos(elevation) * ejectSpeed;
      this.particleVelocities[index * 3 + 1] = Math.sin(elevation) * ejectSpeed;
      this.particleVelocities[index * 3 + 2] = Math.sin(angle) * Math.cos(elevation) * ejectSpeed;
      
      // Resetear edad para hacer visible
      this.particleAges[index] = 0;
    }
    
    // Limpiar lista de partículas absorbidas
    this.absorbedParticles = [];
  }

  getObject3D(): THREE.Group {
    return this.gravitySystem;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
    this.blackHoleMaterial.dispose();
    this.blackHole.geometry.dispose();
  }
}

export function createAnomalyGravityWellFromPythonData(planetRadius: number, anomalyData: any, globalSeed?: number): AnomalyGravityWellEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 11000);
  
  const params: AnomalyGravityWellParams = {
    particleCount: Math.floor(rng.uniform(PROCEDURAL_RANGES.PARTICLE_COUNT.min, PROCEDURAL_RANGES.PARTICLE_COUNT.max)),
    gravityStrength: rng.uniform(PROCEDURAL_RANGES.GRAVITY_STRENGTH.min, PROCEDURAL_RANGES.GRAVITY_STRENGTH.max),
    orbitRadius: rng.uniform(PROCEDURAL_RANGES.ORBIT_RADIUS.min, PROCEDURAL_RANGES.ORBIT_RADIUS.max),
    wellSize: rng.uniform(PROCEDURAL_RANGES.WELL_SIZE.min, PROCEDURAL_RANGES.WELL_SIZE.max),
    timeSpeed: rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
    particleSpeed: rng.uniform(PROCEDURAL_RANGES.PARTICLE_SPEED.min, PROCEDURAL_RANGES.PARTICLE_SPEED.max),
    seed,
  };

  return new AnomalyGravityWellEffect(planetRadius, params);
}