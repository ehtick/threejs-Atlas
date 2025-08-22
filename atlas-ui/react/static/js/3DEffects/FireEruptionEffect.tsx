/**
 * Fire Eruption Effect - Llamaradas y erupciones de fuego para planetas Molten Core
 *
 * Crea erupciones de fuego que salen de la superficie del planeta en diferentes
 * direcciones y momentos, con partículas y efectos de llamas dinámicas
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface FireEruptionParams {
  // Configuración de erupciones
  eruptionCount?: number; // Número de puntos de erupción activos
  eruptionFrequency?: number; // Frecuencia de erupciones (erupciones por segundo)
  eruptionDuration?: number; // Duración de cada erupción en segundos
  eruptionHeight?: number; // Altura máxima de la erupción
  eruptionSpread?: number; // Dispersión angular de las partículas
  
  // Configuración de partículas
  particlesPerEruption?: number; // Número de partículas por erupción
  particleSize?: number; // Tamaño base de las partículas
  particleLifetime?: number; // Vida de cada partícula en segundos
  particleSpeed?: number; // Velocidad inicial de las partículas
  particleGravity?: number; // Gravedad que afecta a las partículas
  
  // Colores del fuego (gradiente de temperatura)
  fireColorHot?: THREE.Color | number[]; // Color más caliente (blanco-amarillo)
  fireColorMid?: THREE.Color | number[]; // Color medio (naranja)
  fireColorCool?: THREE.Color | number[]; // Color más frío (rojo oscuro)
  smokeColor?: THREE.Color | number[]; // Color del humo
  
  // Efectos visuales
  emissiveIntensity?: number;
  glowIntensity?: number;
  turbulenceStrength?: number;
  windStrength?: number; // Fuerza del viento que afecta las partículas
  
  seed?: number;
  startTime?: number;
  timeSpeed?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  ERUPTION_COUNT: { min: 15, max: 35 }, // Múltiples puntos de erupción
  ERUPTION_FREQUENCY: { min: 0.2, max: 0.8 }, // Frecuencia variable
  ERUPTION_DURATION: { min: 2.0, max: 5.0 }, // Duración de cada erupción
  ERUPTION_HEIGHT: { min: 0.05, max: 0.15 }, // Altura relativa al radio del planeta
  ERUPTION_SPREAD: { min: 0.6, max: 1.9 }, // Cono de dispersión
  PARTICLES_PER_ERUPTION: { min: 50, max: 150 }, // Muchas partículas para efecto denso
  PARTICLE_SIZE: { min: 0.07, max: 0.09 }, // Tamaños variados
  PARTICLE_LIFETIME: { min: 1.5, max: 3.5 }, // Vida de las partículas
  PARTICLE_SPEED: { min: 0.1, max: 0.4 }, // Velocidad de salida
  EMISSIVE_INTENSITY: { min: 2.0, max: 4.0 }, // Muy brillante
  TURBULENCE: { min: 0.5, max: 1.5 }, // Turbulencia del fuego
};

// Clase para manejar una erupción individual
class FireEruption {
  public position: THREE.Vector3;
  public direction: THREE.Vector3;
  public lastEruptionTime: number = 0;
  public isActive: boolean = false;
  public eruptionStartTime: number = 0;
  private rng: SeededRandom;
  
  // Pre-calculadas como en PulsatingCube
  public particleDirections: THREE.Vector3[] = [];
  public particleSpeeds: number[] = [];
  public particleSizes: number[] = [];
  public particleLifetimes: number[] = [];
  
  // Nuevos arrays para rastrear partículas activas individualmente
  public particleBirthTimes: number[] = []; // Cuándo nació cada partícula
  public particleActive: boolean[] = []; // Si cada partícula está activa
  
  constructor(position: THREE.Vector3, seed: number, frequency: number, duration: number, particlesPerEruption: number, spreadAngle: number, particleSpeed: number, particleSize: number, particleLifetime: number, planetRadius: number) {
    this.position = position;
    this.direction = position.clone().normalize();
    this.rng = new SeededRandom(seed);
    
    // Pre-calcular todas las propiedades de partículas determinísticamente (como PulsatingCube)
    for (let i = 0; i < particlesPerEruption; i++) {
      // Dirección aleatoria dentro del cono de dispersión (determinista)
      this.particleDirections.push(this.getRandomDirection(spreadAngle));
      
      // Velocidad con variación determinista
      this.particleSpeeds.push(particleSpeed * (0.7 + this.rng.random() * 0.6));
      
      // Tamaño con variación determinista  
      this.particleSizes.push(particleSize * planetRadius * (0.5 + this.rng.random()));
      
      // Vida con variación determinista
      this.particleLifetimes.push(particleLifetime * (0.8 + this.rng.random() * 0.4));
      
      // Inicializar estado de partículas
      this.particleBirthTimes.push(-1); // -1 significa que aún no ha nacido
      this.particleActive.push(false);
    }
    
    // Estado inicial - se configurará desde initializeStateFromAbsoluteTime
    this.isActive = false;
    this.eruptionStartTime = 0;
    this.lastEruptionTime = 0;
  }
  
  initializeStateFromAbsoluteTime(currentTime: number, frequency: number, duration: number, eruptionIndex: number): void {
    // Calcular la duración total de un ciclo completo (igual que PulsatingCube)
    const waitTime = 1.0 / frequency; // Tiempo de espera entre erupciones
    const totalCycleDuration = duration + waitTime; // Duración total del ciclo
    
    // Offset determinista basado en el índice de la erupción (NO aleatorio)
    // Cada erupción tiene un desfase fijo determinista para crear variación
    const seedOffset = (eruptionIndex * totalCycleDuration * 0.37) % totalCycleDuration; // 0.37 para distribución
    
    // Determinar en qué punto del ciclo estamos (como PulsatingCube - puramente determinista)
    const cycleTime = (currentTime + seedOffset) % totalCycleDuration;
    
    if (cycleTime < duration) {
      // Estamos en erupción activa - ajustar eruptionStartTime hacia atrás (como PulsatingCube)
      this.isActive = true;
      this.eruptionStartTime = currentTime - cycleTime; // CLAVE: inicio ajustado al pasado
      this.lastEruptionTime = this.eruptionStartTime - waitTime;
      
      // Inicializar partículas que ya deberían estar activas
      const eruptionAge = currentTime - this.eruptionStartTime;
      const eruptionProgress = Math.min(eruptionAge / duration, 1.0);
      
      for (let i = 0; i < this.particleDirections.length; i++) {
        const particleDelay = (i / this.particleDirections.length) * 0.7;
        
        if (eruptionProgress > particleDelay) {
          // Esta partícula ya debería estar activa
          this.particleActive[i] = true;
          this.particleBirthTimes[i] = this.eruptionStartTime + particleDelay * duration;
          
          // Verificar si la partícula ya ha superado su tiempo de vida
          const particleAge = currentTime - this.particleBirthTimes[i];
          if (particleAge > this.particleLifetimes[i]) {
            this.particleActive[i] = false;
          }
        }
      }
    } else {
      // Estamos en periodo de espera
      this.isActive = false;
      this.lastEruptionTime = currentTime - cycleTime + duration - waitTime;
      this.eruptionStartTime = 0;
      
      // Verificar si hay partículas de una erupción anterior que aún deberían estar activas
      const lastEruptionStart = currentTime - cycleTime; // Cuando comenzó la última erupción
      const lastEruptionEnd = lastEruptionStart + duration; // Cuando terminó la última erupción
      
      for (let i = 0; i < this.particleDirections.length; i++) {
        const particleDelay = (i / this.particleDirections.length) * 0.7;
        const particleBirthTime = lastEruptionStart + particleDelay * duration;
        
        if (particleBirthTime < lastEruptionEnd) {
          const particleAge = currentTime - particleBirthTime;
          
          // Si la partícula aún está dentro de su tiempo de vida, mantenerla activa
          if (particleAge > 0 && particleAge <= this.particleLifetimes[i]) {
            this.particleActive[i] = true;
            this.particleBirthTimes[i] = particleBirthTime;
          }
        }
      }
    }
  }
  
  shouldErupt(currentTime: number, frequency: number, duration: number): boolean {
    const cycleDuration = (1.0 / frequency) + duration;
    const timeSinceLastCycle = (currentTime - this.lastEruptionTime) % cycleDuration;
    const shouldBeActive = timeSinceLastCycle < duration;
    
    // Si debería estar activa pero no lo está, iniciar erupción
    if (shouldBeActive && !this.isActive) {
      return true;
    }
    
    // Si está activa pero no debería, detener erupción  
    if (!shouldBeActive && this.isActive) {
      this.stopEruption();
    }
    
    return false;
  }
  
  startEruption(currentTime: number): void {
    this.isActive = true;
    this.eruptionStartTime = currentTime;
    this.lastEruptionTime = currentTime;
  }
  
  stopEruption(): void {
    this.isActive = false;
  }
  
  getRandomDirection(spread: number): THREE.Vector3 {
    // Crear dirección aleatoria dentro del cono de dispersión
    const theta = this.rng.uniform(0, Math.PI * 2);
    const phi = this.rng.uniform(0, spread);
    
    // Crear vector en espacio local
    const localDir = new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta),
      Math.sin(phi) * Math.sin(theta),
      Math.cos(phi)
    );
    
    // Rotar para alinear con la normal de la superficie
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), this.direction);
    localDir.applyQuaternion(quaternion);
    
    return localDir;
  }
}

// Las partículas ahora se calculan dinámicamente como en PulsatingCube

export class FireEruptionEffect {
  private fireGroup: THREE.Group;
  private eruptions: FireEruption[] = [];
  private particleSystem: THREE.Points;
  private particleGeometry: THREE.BufferGeometry;
  private particleMaterial: THREE.ShaderMaterial;
  private params: FireEruptionParams;
  private startTime: number;
  private planetRadius: number;
  private maxParticles: number = 5000; // Límite máximo de partículas para rendimiento
  
  private static readonly vertexShader = `
    attribute float size;
    attribute float temperature;
    attribute float opacity;
    
    varying float vTemperature;
    varying float vOpacity;
    
    void main() {
      vTemperature = temperature;
      vOpacity = opacity;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;
  
  private static readonly fragmentShader = `
    uniform vec3 fireColorHot;
    uniform vec3 fireColorMid;
    uniform vec3 fireColorCool;
    uniform vec3 smokeColor;
    uniform float emissiveIntensity;
    
    varying float vTemperature;
    varying float vOpacity;
    
    void main() {
      // Forma circular de la partícula
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      
      // Suavizar los bordes con fadeout más gradual
      float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
      alpha *= vOpacity;
      
      // Fadeout adicional basado en opacidad para transición más suave
      alpha *= smoothstep(0.0, 0.3, vOpacity);
      
      // Descartar píxeles transparentes
      if (alpha < 0.01) discard;
      
      // Color basado en temperatura
      vec3 color;
      if (vTemperature > 0.7) {
        // Muy caliente: entre blanco-amarillo y naranja
        color = mix(fireColorMid, fireColorHot, (vTemperature - 0.7) / 0.3);
      } else if (vTemperature > 0.3) {
        // Caliente: entre naranja y rojo
        color = mix(fireColorCool, fireColorMid, (vTemperature - 0.3) / 0.4);
      } else {
        // Enfriándose: entre rojo oscuro y humo
        color = mix(smokeColor, fireColorCool, vTemperature / 0.3);
      }
      
      // Añadir emisividad para brillar
      color *= emissiveIntensity * (0.5 + vTemperature * 0.5);
      
      // Efecto de brillo en el centro
      float glow = 1.0 - dist * 2.0;
      color += vec3(1.0, 0.8, 0.3) * glow * vTemperature * 0.5;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;
  
  constructor(planetRadius: number, params: FireEruptionParams = {}) {
    this.planetRadius = planetRadius;
    
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    // Tiempo inicial determinista
    this.startTime = params.startTime || (seed % 10000) / 1000;
    
    // Colores del fuego
    const fireColorHot = params.fireColorHot instanceof THREE.Color ? params.fireColorHot :
      new THREE.Color(1.0, 0.95, 0.8); // Blanco-amarillo
    const fireColorMid = params.fireColorMid instanceof THREE.Color ? params.fireColorMid :
      new THREE.Color(1.0, 0.5, 0.1); // Naranja intenso
    const fireColorCool = params.fireColorCool instanceof THREE.Color ? params.fireColorCool :
      new THREE.Color(0.8, 0.2, 0.0); // Rojo oscuro
    const smokeColor = params.smokeColor instanceof THREE.Color ? params.smokeColor :
      new THREE.Color(0.2, 0.1, 0.05); // Humo oscuro
    
    this.params = {
      eruptionCount: params.eruptionCount || Math.floor(rng.uniform(PROCEDURAL_RANGES.ERUPTION_COUNT.min, PROCEDURAL_RANGES.ERUPTION_COUNT.max)),
      eruptionFrequency: params.eruptionFrequency || rng.uniform(PROCEDURAL_RANGES.ERUPTION_FREQUENCY.min, PROCEDURAL_RANGES.ERUPTION_FREQUENCY.max),
      eruptionDuration: params.eruptionDuration || rng.uniform(PROCEDURAL_RANGES.ERUPTION_DURATION.min, PROCEDURAL_RANGES.ERUPTION_DURATION.max),
      eruptionHeight: params.eruptionHeight || rng.uniform(PROCEDURAL_RANGES.ERUPTION_HEIGHT.min, PROCEDURAL_RANGES.ERUPTION_HEIGHT.max),
      eruptionSpread: params.eruptionSpread || rng.uniform(PROCEDURAL_RANGES.ERUPTION_SPREAD.min, PROCEDURAL_RANGES.ERUPTION_SPREAD.max),
      particlesPerEruption: params.particlesPerEruption || Math.floor(rng.uniform(PROCEDURAL_RANGES.PARTICLES_PER_ERUPTION.min, PROCEDURAL_RANGES.PARTICLES_PER_ERUPTION.max)),
      particleSize: params.particleSize || rng.uniform(PROCEDURAL_RANGES.PARTICLE_SIZE.min, PROCEDURAL_RANGES.PARTICLE_SIZE.max),
      particleLifetime: params.particleLifetime || rng.uniform(PROCEDURAL_RANGES.PARTICLE_LIFETIME.min, PROCEDURAL_RANGES.PARTICLE_LIFETIME.max),
      particleSpeed: params.particleSpeed || rng.uniform(PROCEDURAL_RANGES.PARTICLE_SPEED.min, PROCEDURAL_RANGES.PARTICLE_SPEED.max),
      particleGravity: params.particleGravity || 0.05,
      fireColorHot,
      fireColorMid,
      fireColorCool,
      smokeColor,
      emissiveIntensity: params.emissiveIntensity || rng.uniform(PROCEDURAL_RANGES.EMISSIVE_INTENSITY.min, PROCEDURAL_RANGES.EMISSIVE_INTENSITY.max),
      glowIntensity: params.glowIntensity || 2.0,
      turbulenceStrength: params.turbulenceStrength || rng.uniform(PROCEDURAL_RANGES.TURBULENCE.min, PROCEDURAL_RANGES.TURBULENCE.max),
      windStrength: params.windStrength || 0.1,
      seed,
      startTime: this.startTime,
      timeSpeed: params.timeSpeed || rng.uniform(0.1, 2.0) // Determinista como PulsatingCube
    };
    
    this.fireGroup = new THREE.Group();
    
    // Crear puntos de erupción
    this.createEruptionPoints(rng);
    
    // Calcular estado inicial correcto basado en tiempo absoluto (como PulsatingCube)
    this.initializeStateFromAbsoluteTime();
    
    // Crear sistema de partículas
    this.createParticleSystem();
    
    // Pre-poblar partículas para erupciones que ya están activas
    this.initializeActiveEruptions();
    
    // Realizar la primera actualización de geometría para mostrar las partículas inmediatamente
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000;
    this.updateParticleGeometry(currentTime);
  }
  
  private initializeStateFromAbsoluteTime(): void {
    // Calcular tiempo actual absoluto (igual que PulsatingCube)
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000;
    
    // Inicializar cada erupción en el estado correcto
    for (let i = 0; i < this.eruptions.length; i++) {
      this.eruptions[i].initializeStateFromAbsoluteTime(
        currentTime,
        this.params.eruptionFrequency!,
        this.params.eruptionDuration!,
        i // Pasar el índice para offset determinista
      );
    }
  }
  
  private createEruptionPoints(rng: SeededRandom): void {
    const count = this.params.eruptionCount!;
    
    for (let i = 0; i < count; i++) {
      // Posición aleatoria en la superficie
      const phi = rng.uniform(0, Math.PI * 2);
      const theta = Math.acos(rng.uniform(-1, 1));
      
      const position = new THREE.Vector3(
        Math.sin(theta) * Math.cos(phi) * this.planetRadius,
        Math.sin(theta) * Math.sin(phi) * this.planetRadius,
        Math.cos(theta) * this.planetRadius
      );
      
      const eruption = new FireEruption(
        position, 
        Math.floor(rng.random() * 1000000),
        this.params.eruptionFrequency!,
        this.params.eruptionDuration!,
        150, // particlesPerEruption fijo
        this.params.eruptionSpread!,
        this.params.particleSpeed!,
        this.params.particleSize!,
        this.params.particleLifetime!,
        this.planetRadius
      );
      
      this.eruptions.push(eruption);
    }
  }
  
  private createParticleSystem(): void {
    // Crear geometría con buffer para el máximo de partículas
    this.particleGeometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(this.maxParticles * 3);
    const sizes = new Float32Array(this.maxParticles);
    const temperatures = new Float32Array(this.maxParticles);
    const opacities = new Float32Array(this.maxParticles);
    
    this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    this.particleGeometry.setAttribute('temperature', new THREE.BufferAttribute(temperatures, 1));
    this.particleGeometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
    
    // Crear material
    this.particleMaterial = new THREE.ShaderMaterial({
      vertexShader: FireEruptionEffect.vertexShader,
      fragmentShader: FireEruptionEffect.fragmentShader,
      uniforms: {
        fireColorHot: { value: this.params.fireColorHot },
        fireColorMid: { value: this.params.fireColorMid },
        fireColorCool: { value: this.params.fireColorCool },
        smokeColor: { value: this.params.smokeColor },
        emissiveIntensity: { value: this.params.emissiveIntensity }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: false
    });
    
    // Crear sistema de puntos
    this.particleSystem = new THREE.Points(this.particleGeometry, this.particleMaterial);
    this.particleSystem.renderOrder = 4; // Renderizar encima de otros efectos
    this.fireGroup.add(this.particleSystem);
  }
  
  private initializeActiveEruptions(): void {
    // Inicializar partículas que representan el estado actual de erupciones activas
    // Similar a como PulsatingCube inicializa partículas en la posición correcta
    
    // Calcular tiempo actual absoluto (igual que en updateParticleGeometry)
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000;
    
    // Para cada erupción, verificar TODAS las erupciones pasadas que podrían tener partículas aún vivas
    for (let eruptionIndex = 0; eruptionIndex < this.eruptions.length; eruptionIndex++) {
      const eruption = this.eruptions[eruptionIndex];
      
      // Calcular parámetros del ciclo
      const waitTime = 1.0 / this.params.eruptionFrequency!;
      const totalCycleDuration = this.params.eruptionDuration! + waitTime;
      const seedOffset = (eruptionIndex * totalCycleDuration * 0.37) % totalCycleDuration;
      
      // Encontrar el tiempo de vida máximo de las partículas de esta erupción
      const maxParticleLifetime = Math.max(...eruption.particleLifetimes);
      
      // Calcular cuántos ciclos hacia atrás necesitamos revisar para cubrir todas las partículas posibles
      const cyclesToCheck = Math.ceil(maxParticleLifetime / totalCycleDuration) + 1;
      
      // Revisar cada ciclo hacia atrás
      for (let cycleBack = 0; cycleBack < cyclesToCheck; cycleBack++) {
        const pastTime = currentTime - (cycleBack * totalCycleDuration);
        const cycleTime = (pastTime + seedOffset) % totalCycleDuration;
        
        // Si este ciclo pasado tuvo una erupción
        if (cycleTime < this.params.eruptionDuration!) {
          const eruptionStartTime = pastTime - cycleTime;
          
          // Revisar cada partícula de esta erupción pasada
          for (let i = 0; i < 150; i++) { // particlesPerEruption
            const particleDelay = (i / 150) * 0.7;
            const particleBirthTime = eruptionStartTime + particleDelay * this.params.eruptionDuration!;
            const particleAge = currentTime - particleBirthTime;
            
            // Si la partícula nació y aún está dentro de su tiempo de vida
            if (particleAge > 0 && particleAge <= eruption.particleLifetimes[i]) {
              // Solo activar si no está ya activa (evitar sobrescribir)
              if (!eruption.particleActive[i]) {
                eruption.particleActive[i] = true;
                eruption.particleBirthTimes[i] = particleBirthTime;
              }
            }
          }
        }
      }
    }
  }
  
  
  private updateParticleGeometry(currentTime: number): void {
    const positions = this.particleGeometry.attributes.position as THREE.BufferAttribute;
    const sizes = this.particleGeometry.attributes.size as THREE.BufferAttribute;
    const temperatures = this.particleGeometry.attributes.temperature as THREE.BufferAttribute;
    const opacities = this.particleGeometry.attributes.opacity as THREE.BufferAttribute;
    
    let particleIndex = 0;
    const particlesPerEruption = 150; // Número fijo de partículas por erupción
    
    // Para cada erupción, manejar partículas individuales
    for (let eruptionIndex = 0; eruptionIndex < this.eruptions.length; eruptionIndex++) {
      const eruption = this.eruptions[eruptionIndex];
      
      // Recalcular el estado actual basado en el tiempo absoluto
      const waitTime = 1.0 / this.params.eruptionFrequency!;
      const totalCycleDuration = this.params.eruptionDuration! + waitTime;
      const seedOffset = (eruptionIndex * totalCycleDuration * 0.37) % totalCycleDuration;
      const cycleTime = (currentTime + seedOffset) % totalCycleDuration;
      
      const isCurrentlyActive = cycleTime < this.params.eruptionDuration!;
      
      // Actualizar el estado de la erupción
      if (isCurrentlyActive && !eruption.isActive) {
        eruption.isActive = true;
        eruption.eruptionStartTime = currentTime - cycleTime;
      } else if (!isCurrentlyActive && eruption.isActive) {
        eruption.isActive = false;
      }
      
      // Si la erupción está activa, crear nuevas partículas
      if (isCurrentlyActive) {
        const eruptionAge = currentTime - eruption.eruptionStartTime;
        const eruptionProgress = Math.min(eruptionAge / this.params.eruptionDuration!, 1.0);
        
        // Activar partículas escalonadamente durante la erupción
        for (let i = 0; i < particlesPerEruption; i++) {
          const particleDelay = (i / particlesPerEruption) * 0.7;
          const shouldBeActive = eruptionProgress > particleDelay;
          
          // Si la partícula debería estar activa pero no lo está, activarla ahora
          if (shouldBeActive && !eruption.particleActive[i]) {
            eruption.particleActive[i] = true;
            eruption.particleBirthTimes[i] = currentTime - (eruptionProgress - particleDelay) * this.params.eruptionDuration!;
          }
        }
      }
      
      // Renderizar todas las partículas activas (independientemente del estado de la erupción)
      for (let i = 0; i < particlesPerEruption && particleIndex < this.maxParticles; i++) {
        if (eruption.particleActive[i]) {
          const particleAge = currentTime - eruption.particleBirthTimes[i];
          const particleLifetime = eruption.particleLifetimes[i];
          
          // Si la partícula ha superado su tiempo de vida, desactivarla
          if (particleAge > particleLifetime) {
            eruption.particleActive[i] = false;
            continue;
          }
          
          // Usar direcciones pre-calculadas (deterministas)
          const direction = eruption.particleDirections[i].clone();
          const speed = eruption.particleSpeeds[i];
          
          // Calcular posición basada en física simple
          const distance = speed * particleAge;
          const position = eruption.position.clone().add(direction.multiplyScalar(distance));
          
          // Aplicar gravedad
          const gravityEffect = this.params.particleGravity! * particleAge * particleAge * 0.5;
          position.y -= gravityEffect;
          
          // Turbulencia determinista muy sutil
          const turbulence = new THREE.Vector3(
            Math.sin(currentTime * 0.5 + i * 0.1) * 0.01,
            Math.cos(currentTime * 0.3 + i * 0.1) * 0.005,
            Math.sin(currentTime * 0.7 + i * 0.1) * 0.01
          );
          position.add(turbulence);
          
          // Calcular temperatura y opacidad basado en la edad real de la partícula
          const particleProgress = particleAge / particleLifetime;
          const temperature = Math.max(0, 1.0 - particleProgress * 0.9);
          
          // Fadeout muy suave basado en el tiempo de vida de la partícula
          const fadeIn = this.smoothstep(0, 0.1, particleProgress);
          const fadeOut = this.smoothstep(1.0, 0.7, particleProgress); // Comienza el fadeout al 70%
          const opacity = fadeIn * fadeOut;
          
          const size = eruption.particleSizes[i];
          
          // Solo asignar si la partícula es visible
          if (opacity > 0.01) {
            positions.setXYZ(particleIndex, position.x, position.y, position.z);
            sizes.setX(particleIndex, size);
            temperatures.setX(particleIndex, temperature);
            opacities.setX(particleIndex, opacity);
            
            particleIndex++;
          }
        }
      }
    }
    
    // Ocultar partículas no usadas
    for (let i = particleIndex; i < this.maxParticles; i++) {
      positions.setXYZ(i, 0, 0, 0);
      sizes.setX(i, 0);
      opacities.setX(i, 0);
      temperatures.setX(i, 0);
    }
    
    positions.needsUpdate = true;
    sizes.needsUpdate = true;
    temperatures.needsUpdate = true;
    opacities.needsUpdate = true;
    
    // Actualizar el rango de dibujo
    this.particleGeometry.setDrawRange(0, particleIndex);
  }
  
  private smoothstep(edge0: number, edge1: number, x: number): number {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }
  
  update(_deltaTime: number): void {
    // Calcular tiempo determinista usando el patrón estándar del codebase
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000; // Evitar overflow después de mucho tiempo
    
    // NO llamar shouldErupt() - el estado ya se configuró correctamente en initializeStateFromAbsoluteTime
    // Las erupciones manejan sus propios ciclos basados en el tiempo absoluto
    
    // Actualizar geometría de partículas basado en progreso de erupciones (como PulsatingCube)
    this.updateParticleGeometry(currentTime);
  }
  
  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.fireGroup.position.copy(planetPosition);
    }
    scene.add(this.fireGroup);
  }
  
  getObject3D(): THREE.Group {
    return this.fireGroup;
  }
  
  dispose(): void {
    this.particleGeometry.dispose();
    this.particleMaterial.dispose();
    this.fireGroup.clear();
    this.eruptions = [];
  }
}

/**
 * Función para crear desde datos de Python
 */
export function createFireEruptionFromPythonData(
  planetRadius: number,
  _surfaceData: any,
  globalSeed?: number
): FireEruptionEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  
  // Usar los PROCEDURAL_RANGES para generar valores dinámicos
  const params: FireEruptionParams = {
    seed: seed + 9000 // Seed único para FireEruption
    // NO especificar otros parámetros para que use PROCEDURAL_RANGES
  };
  
  return new FireEruptionEffect(planetRadius, params);
}