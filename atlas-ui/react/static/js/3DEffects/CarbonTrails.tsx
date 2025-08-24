/**
 * Carbon Trails Effect - Estelas y nubes grisáceas para planetas Carbon
 *
 * Crea estelas de partículas grisáceas que emergen de la superficie y se desvanecen
 * conforme salen de la atmósfera, simulando gases y vapores característicos
 * de planetas con altas concentraciones de carbono
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface CarbonTrailsParams {
  // Configuración de estelas
  trailCount?: number; // Número de puntos de emisión de estelas
  emissionFrequency?: number; // Frecuencia de emisión de partículas
  trailHeight?: number; // Altura máxima de las estelas
  trailSpread?: number; // Dispersión angular de las partículas
  
  // Configuración de partículas
  particlesPerTrail?: number; // Número de partículas por estela
  particleSize?: number; // Tamaño base de las partículas
  particleLifetime?: number; // Vida de cada partícula en segundos
  particleSpeed?: number; // Velocidad inicial de las partículas
  particleDrag?: number; // Resistencia atmosférica
  
  // Colores y visual
  baseColor?: THREE.Color | number[]; // Color base grisáceo
  atmosphereColor?: THREE.Color | number[]; // Color al desvanecerse
  opacity?: number; // Opacidad general
  
  // Desvanecimiento atmosférico
  atmosphereHeight?: number; // Altura relativa donde empiezan a desvanecerse
  fadeDistance?: number; // Distancia de desvanecimiento
  
  // Efectos visuales
  turbulenceStrength?: number;
  windStrength?: number; // Fuerza del viento atmosférico
  
  seed?: number;
  startTime?: number;
  timeSpeed?: number;
  
  // Orbital activation data
  orbitalData?: {
    enabled: boolean;
    cycle_duration_years: number;
    visible_duration_years: number;
  };
  currentTime?: number;
  planetTemperature?: number;
}

// Rangos para generación procedural - AJUSTADOS PARA MAYOR VISIBILIDAD
const PROCEDURAL_RANGES = {
  TRAIL_COUNT: { min: 30, max: 45 }, // Menos puntos pero más visibles
  EMISSION_FREQUENCY: { min: 2.0, max: 3.0 }, // Emisión más frecuente
  TRAIL_HEIGHT: { min: 0.5, max: 1.2 }, // Altura mayor para visibilidad
  TRAIL_SPREAD: { min: 0.6, max: 1.0 }, // Dispersión moderada
  PARTICLES_PER_TRAIL: { min: 80, max: 120 }, // MÁS partículas por estela
  PARTICLE_SIZE: { min: 0.15, max: 0.35 }, // Tamaños visibles pero no gigantes
  PARTICLE_LIFETIME: { min: 8.0, max: 15.0 }, // Vida realista para gases
  PARTICLE_SPEED: { min: 0.18, max: 0.35 }, // Velocidad mayor
  PARTICLE_DRAG: { min: 0.92, max: 0.96 }, // Menos drag = más movimiento
  ATMOSPHERE_HEIGHT: { min: 4.0, max: 6.0 }, // Altura atmosférica mayor
  OPACITY: { min: 0.2, max: 0.2 }, // MAYOR opacidad
  TURBULENCE: { min: 0.4, max: 0.9 }, // Menos turbulencia para estelas más definidas
  WIND_STRENGTH: { min: 0.11, max: 0.14 }, // Menos viento
};

// Clase para manejar una estela individual
class CarbonTrail {
  public position: THREE.Vector3;
  public direction: THREE.Vector3;
  public lastEmissionTime: number = 0;
  public isActive: boolean = false;
  private rng: SeededRandom;
  
  // Pre-calculadas para determinismo
  public particleDirections: THREE.Vector3[] = [];
  public particleSpeeds: number[] = [];
  public particleSizes: number[] = [];
  public particleLifetimes: number[] = [];
  public particleBirthTimes: number[] = [];
  public particleActive: boolean[] = [];
  
  constructor(position: THREE.Vector3, seed: number, particlesPerTrail: number, spreadAngle: number, particleSpeed: number, particleSize: number, particleLifetime: number, planetRadius: number) {
    this.position = position;
    this.direction = position.clone().normalize();
    this.rng = new SeededRandom(seed);
    
    // Pre-calcular todas las propiedades de partículas
    for (let i = 0; i < particlesPerTrail; i++) {
      // Dirección aleatoria dentro del cono de dispersión, más vertical que FireEruption
      this.particleDirections.push(this.getRandomDirection(spreadAngle));
      
      // Velocidades más lentas para estelas suaves
      this.particleSpeeds.push(particleSpeed * (0.6 + this.rng.random() * 0.8));
      
      // Tamaños variados
      this.particleSizes.push(particleSize * planetRadius * (0.7 + this.rng.random() * 0.6));
      
      // Vida larga para permitir desvanecimiento atmosférico
      this.particleLifetimes.push(particleLifetime * (0.8 + this.rng.random() * 0.4));
      
      // Inicializar estado de partículas
      this.particleBirthTimes.push(-1);
      this.particleActive.push(false);
    }
  }
  
  initializeStateFromAbsoluteTime(currentTime: number, frequency: number, trailIndex: number): void {
    const emissionInterval = 1.0 / frequency;
    
    // Offset determinístico basado en el índice (como AtmosphereClouds)
    const phaseOffset = (trailIndex * 0.618) % 1.0; // Golden ratio
    
    // Esta estela empezó a emitir con este offset
    this.lastEmissionTime = currentTime - (phaseOffset * emissionInterval);
    
    // Activar algunas partículas iniciales de forma determinística
    const particlesToActivate = Math.min(10, this.particleLifetimes.length);
    for (let i = 0; i < particlesToActivate; i++) {
      const emissionTime = this.lastEmissionTime - (i * emissionInterval);
      const age = currentTime - emissionTime;
      
      if (age >= 0 && age < this.particleLifetimes[i]) {
        this.particleActive[i] = true;
        this.particleBirthTimes[i] = emissionTime;
      }
    }
    
    this.isActive = true;
  }
  
  shouldEmit(currentTime: number, frequency: number): boolean {
    const timeSinceLastEmission = currentTime - this.lastEmissionTime;
    return timeSinceLastEmission >= (1.0 / frequency);
  }
  
  startEmission(currentTime: number): void {
    this.lastEmissionTime = currentTime;
    this.isActive = true;
  }
  
  getRandomDirection(spread: number): THREE.Vector3 {
    // Más enfoque hacia arriba para estelas que se eleven
    const theta = this.rng.uniform(0, Math.PI * 2);
    const phi = this.rng.uniform(0, spread * 0.7); // Menor dispersión que erupciones
    
    // Sesgo hacia arriba para estelas atmosféricas
    const upwardBias = 0.3;
    const adjustedPhi = phi * (1 - upwardBias);
    
    const localDir = new THREE.Vector3(
      Math.sin(adjustedPhi) * Math.cos(theta),
      Math.sin(adjustedPhi) * Math.sin(theta),
      Math.cos(adjustedPhi) + upwardBias
    ).normalize();
    
    // Rotar para alinear con la normal de la superficie
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), this.direction);
    localDir.applyQuaternion(quaternion);
    
    return localDir;
  }
}

export class CarbonTrailsEffect {
  private trailGroup: THREE.Group;
  private trails: CarbonTrail[] = [];
  private particleSystem: THREE.Points;
  private particleGeometry: THREE.BufferGeometry;
  private particleMaterial: THREE.ShaderMaterial;
  private params: CarbonTrailsParams;
  private startTime: number;
  private planetRadius: number;
  private maxParticles: number = 5000; // Aumentar límite de partículas
  private orbitalVisibilityFactor: number;
  private temperatureActivationFactor: number;
  
  private static readonly vertexShader = `
    attribute float size;
    attribute float opacity;
    attribute float atmosphereFade;
    
    varying float vOpacity;
    varying float vAtmosphereFade;
    
    void main() {
      vOpacity = opacity;
      vAtmosphereFade = atmosphereFade;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;
  
  private static readonly fragmentShader = `
    uniform vec3 baseColor;
    uniform vec3 atmosphereColor;
    uniform float globalOpacity;
    
    varying float vOpacity;
    varying float vAtmosphereFade;
    
    void main() {
      // Forma circular de la partícula con bordes suaves
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      
      // Forma circular suave
      float alpha = 1.0 - smoothstep(0.1, 0.5, dist);
      alpha *= vOpacity * globalOpacity;
      
      // Descartar píxeles transparentes
      if (alpha < 0.02) discard;
      
      // Mezcla de colores base y atmosférico según fade
      vec3 color = mix(baseColor, atmosphereColor, vAtmosphereFade);
      
      gl_FragColor = vec4(color, alpha);
    }
  `;
  
  constructor(planetRadius: number, params: CarbonTrailsParams = {}) {
    this.planetRadius = planetRadius;
    
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    this.startTime = params.startTime || (seed % 10000) / 1000;
    
    // Colores grises más oscuros y naturales
    const baseColor = params.baseColor instanceof THREE.Color ? params.baseColor :
      new THREE.Color(0.25, 0.25, 0.28); // Gris oscuro más natural
    const atmosphereColor = params.atmosphereColor instanceof THREE.Color ? params.atmosphereColor :
      new THREE.Color(0.35, 0.35, 0.38); // Gris medio al desvanecerse
    
    this.params = {
      trailCount: params.trailCount || Math.floor(rng.uniform(PROCEDURAL_RANGES.TRAIL_COUNT.min, PROCEDURAL_RANGES.TRAIL_COUNT.max)),
      emissionFrequency: params.emissionFrequency || rng.uniform(PROCEDURAL_RANGES.EMISSION_FREQUENCY.min, PROCEDURAL_RANGES.EMISSION_FREQUENCY.max),
      trailHeight: params.trailHeight || rng.uniform(PROCEDURAL_RANGES.TRAIL_HEIGHT.min, PROCEDURAL_RANGES.TRAIL_HEIGHT.max),
      trailSpread: params.trailSpread || rng.uniform(PROCEDURAL_RANGES.TRAIL_SPREAD.min, PROCEDURAL_RANGES.TRAIL_SPREAD.max),
      particlesPerTrail: params.particlesPerTrail || Math.floor(rng.uniform(PROCEDURAL_RANGES.PARTICLES_PER_TRAIL.min, PROCEDURAL_RANGES.PARTICLES_PER_TRAIL.max)),
      particleSize: params.particleSize || rng.uniform(PROCEDURAL_RANGES.PARTICLE_SIZE.min, PROCEDURAL_RANGES.PARTICLE_SIZE.max),
      particleLifetime: params.particleLifetime || rng.uniform(PROCEDURAL_RANGES.PARTICLE_LIFETIME.min, PROCEDURAL_RANGES.PARTICLE_LIFETIME.max),
      particleSpeed: params.particleSpeed || rng.uniform(PROCEDURAL_RANGES.PARTICLE_SPEED.min, PROCEDURAL_RANGES.PARTICLE_SPEED.max),
      particleDrag: params.particleDrag || rng.uniform(PROCEDURAL_RANGES.PARTICLE_DRAG.min, PROCEDURAL_RANGES.PARTICLE_DRAG.max),
      baseColor,
      atmosphereColor,
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      atmosphereHeight: params.atmosphereHeight || rng.uniform(PROCEDURAL_RANGES.ATMOSPHERE_HEIGHT.min, PROCEDURAL_RANGES.ATMOSPHERE_HEIGHT.max),
      fadeDistance: params.fadeDistance || rng.uniform(0.3, 0.8),
      turbulenceStrength: params.turbulenceStrength || rng.uniform(PROCEDURAL_RANGES.TURBULENCE.min, PROCEDURAL_RANGES.TURBULENCE.max),
      windStrength: params.windStrength || rng.uniform(PROCEDURAL_RANGES.WIND_STRENGTH.min, PROCEDURAL_RANGES.WIND_STRENGTH.max),
      seed,
      startTime: this.startTime,
      timeSpeed: params.timeSpeed || rng.uniform(0.3, 1.5),
      orbitalData: params.orbitalData,
      currentTime: params.currentTime || 0,
      planetTemperature: params.planetTemperature || 0
    };
    
    // Calcular factores de activación
    this.temperatureActivationFactor = this.calculateTemperatureActivation();
    this.orbitalVisibilityFactor = this.calculateOrbitalVisibility();
    
    this.trailGroup = new THREE.Group();
    
    // Crear puntos de emisión de estelas
    this.createTrailPoints(rng);
    
    // Inicializar estado desde tiempo absoluto
    this.initializeStateFromAbsoluteTime();
    
    // Crear sistema de partículas
    this.createParticleSystem();
    
    // Pre-poblar partículas activas
    this.initializeActiveTrails();
    
    // Primera actualización de geometría
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000;
    this.updateParticleGeometry(currentTime);
  }
  
  private initializeStateFromAbsoluteTime(): void {
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000;
    
    for (let i = 0; i < this.trails.length; i++) {
      this.trails[i].initializeStateFromAbsoluteTime(
        currentTime,
        this.params.emissionFrequency!,
        i
      );
    }
  }
  
  private createTrailPoints(rng: SeededRandom): void {
    const count = this.params.trailCount!;
    for (let i = 0; i < count; i++) {
      // Posición aleatoria en la superficie
      const phi = rng.uniform(0, Math.PI * 2);
      const theta = Math.acos(rng.uniform(-1, 1));
      
      const position = new THREE.Vector3(
        Math.sin(theta) * Math.cos(phi) * this.planetRadius,
        Math.sin(theta) * Math.sin(phi) * this.planetRadius,
        Math.cos(theta) * this.planetRadius
      );
      
      const trail = new CarbonTrail(
        position,
        Math.floor(rng.random() * 1000000),
        this.params.particlesPerTrail!,
        this.params.trailSpread!,
        this.params.particleSpeed!,
        this.params.particleSize!,
        this.params.particleLifetime!,
        this.planetRadius
      );
      
      // Forzar que la estela esté activa desde el inicio
      trail.isActive = true;
      trail.lastEmissionTime = -10; // Asegurar emisión inmediata
      
      this.trails.push(trail);
    }
  }
  
  private createParticleSystem(): void {
    this.particleGeometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(this.maxParticles * 3);
    const sizes = new Float32Array(this.maxParticles);
    const opacities = new Float32Array(this.maxParticles);
    const atmosphereFades = new Float32Array(this.maxParticles);
    
    this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    this.particleGeometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
    this.particleGeometry.setAttribute('atmosphereFade', new THREE.BufferAttribute(atmosphereFades, 1));
    
    this.particleMaterial = new THREE.ShaderMaterial({
      vertexShader: CarbonTrailsEffect.vertexShader,
      fragmentShader: CarbonTrailsEffect.fragmentShader,
      uniforms: {
        baseColor: { value: this.params.baseColor },
        atmosphereColor: { value: this.params.atmosphereColor },
        globalOpacity: { value: this.params.opacity }
      },
      transparent: true,
      blending: THREE.NormalBlending, // Blending normal para evitar blanqueo extremo
      depthWrite: false,
      vertexColors: false
    });
    
    this.particleSystem = new THREE.Points(this.particleGeometry, this.particleMaterial);
    this.particleSystem.renderOrder = 10; // Render order alto pero no excesivo
    this.trailGroup.add(this.particleSystem);
  }
  
  private initializeActiveTrails(): void {
    // Ya no es necesario - se hace en initializeStateFromAbsoluteTime
  }
  
  private calculateTemperatureActivation(): number {
    const temperature = this.params.planetTemperature || 0;
    
    // Solo desactivar en temperaturas extremas
    if (temperature > 1200) {
      return 0;
    }
    
    if (temperature < -200) {
      return 0.2; // Mínima actividad en planetas muy fríos
    }
    
    if (temperature >= -100 && temperature <= 600) {
      return 1; // Activación máxima en rango ampliado
    }
    
    // Activación gradual fuera del rango óptimo
    if (temperature < -100) {
      return 0.2 + (temperature + 200) / 100 * 0.8;
    } else {
      return 1.0 - (temperature - 600) / 600 * 1.0;
    }
  }
  
  private calculateOrbitalVisibility(): number {
    if (!this.params.orbitalData || !this.params.orbitalData.enabled) {
      return 1;
    }
    
    const currentTime = (this.params.currentTime || 0) + ((Date.now() / 1000) - this.startTime) / (365.25 * 24 * 3600);
    const cycleProgress = (currentTime % this.params.orbitalData.cycle_duration_years) / 
                         this.params.orbitalData.cycle_duration_years;
    const visibleFraction = this.params.orbitalData.visible_duration_years / 
                           this.params.orbitalData.cycle_duration_years;
    
    if (cycleProgress <= visibleFraction) {
      const visibleProgress = cycleProgress / visibleFraction;
      
      if (visibleProgress < 0.15) {
        return visibleProgress / 0.15;
      } else if (visibleProgress > 0.85) {
        return (1.0 - visibleProgress) / 0.15;
      } else {
        return 1.0;
      }
    }
    
    return 0;
  }
  
  private updateParticleGeometry(currentTime: number): void {
    const positions = this.particleGeometry.attributes.position as THREE.BufferAttribute;
    const sizes = this.particleGeometry.attributes.size as THREE.BufferAttribute;
    const opacities = this.particleGeometry.attributes.opacity as THREE.BufferAttribute;
    const atmosphereFades = this.particleGeometry.attributes.atmosphereFade as THREE.BufferAttribute;
    
    let particleIndex = 0;
    
    for (let trailIndex = 0; trailIndex < this.trails.length; trailIndex++) {
      const trail = this.trails[trailIndex];
      
      // ELIMINADO: No más emisión dinámica
      
      // Calcular todas las partículas basadas en tiempo absoluto (como PulsatingCube)
      for (let i = 0; i < this.params.particlesPerTrail! && particleIndex < this.maxParticles; i++) {
        
        // Calcular el tiempo de emisión de esta partícula (determinístico)
        const emissionInterval = 1.0 / this.params.emissionFrequency!;
        const phaseOffset = ((trailIndex * 0.618) + (i * 0.1)) % 1.0;
        const particleEmissionTime = currentTime - (phaseOffset * trail.particleLifetimes[i]);
        
        // Edad de la partícula basada en tiempo absoluto
        const particleAge = ((currentTime - particleEmissionTime) % (trail.particleLifetimes[i] + emissionInterval));
        
        // Solo mostrar si está en su tiempo de vida
        if (particleAge >= 0 && particleAge < trail.particleLifetimes[i]) {
          
          // Física mejorada: trayectorias curvas que pueden volver al planeta
          const direction = trail.particleDirections[i].clone();
          let speed = trail.particleSpeeds[i];
          
          // Aplicar drag atmosférico (desaceleración gradual)
          const dragFactor = Math.pow(this.params.particleDrag!, particleAge);
          speed *= dragFactor;
          
          // Agregar componente gravitacional que curva la trayectoria
          const gravityStrength = 0.3;
          const gravityDirection = trail.position.clone().normalize().multiplyScalar(-1);
          const gravityEffect = gravityDirection.multiplyScalar(gravityStrength * particleAge * particleAge * 0.1);
          
          // Posición con trayectoria curvada
          const distance = speed * particleAge;
          let position = trail.position.clone().add(direction.clone().multiplyScalar(distance));
          position.add(gravityEffect);
          
          // Calcular distancia del centro para efectos
          const distanceFromCenter = position.length();
          
          // Turbulencia y viento atmosférico muy sutil
          const turbulenceScale = Math.min(1, distanceFromCenter / this.planetRadius - 1);
          const turbulence = new THREE.Vector3(
            Math.sin(currentTime * 0.2 + i * 0.1) * this.params.turbulenceStrength! * turbulenceScale,
            Math.cos(currentTime * 0.15 + i * 0.1) * this.params.turbulenceStrength! * 0.7 * turbulenceScale,
            Math.sin(currentTime * 0.25 + i * 0.1) * this.params.turbulenceStrength! * 0.5 * turbulenceScale
          );
          
          const wind = new THREE.Vector3(
            Math.sin(currentTime * 0.1) * this.params.windStrength!,
            0,
            Math.cos(currentTime * 0.08) * this.params.windStrength!
          );
          
          // Solo aplicar efectos si la partícula está fuera de la superficie
          const surfaceDistance = distanceFromCenter - this.planetRadius;
          if (surfaceDistance > 0.1) {
            position.add(turbulence).add(wind.multiplyScalar(Math.min(particleAge, 2.0)));
          }
          
          // Calcular desvanecimiento atmosférico y límites de distancia
          const maxDistance = this.planetRadius * this.params.atmosphereHeight!;
          const fadeStartDistance = this.planetRadius * 1.2;
          
          // Desactivar partículas que se alejen demasiado
          if (distanceFromCenter > maxDistance) {
            trail.particleActive[i] = false;
            continue;
          }
          
          let atmosphereFade = 0;
          let opacity = 1;
          
          if (distanceFromCenter > fadeStartDistance) {
            const fadeProgress = Math.min(1, (distanceFromCenter - fadeStartDistance) / (maxDistance - fadeStartDistance));
            atmosphereFade = fadeProgress;
            opacity = 1 - Math.pow(fadeProgress, 2);
          }
          
          // Fade basado en edad de partícula y desvanecimiento atmosférico
          const ageProgress = particleAge / trail.particleLifetimes[i];
          const ageFadeIn = this.smoothstep(0, 0.15, ageProgress);
          const ageFadeOut = this.smoothstep(1.0, 0.7, ageProgress);
          opacity *= ageFadeIn * ageFadeOut;
          
          const size = trail.particleSizes[i] * (1 - ageProgress * 0.2);
          
          // Solo renderizar si tiene opacidad visible
          if (opacity > 0.01) {
            positions.setXYZ(particleIndex, position.x, position.y, position.z);
            sizes.setX(particleIndex, size);
            opacities.setX(particleIndex, opacity);
            atmosphereFades.setX(particleIndex, atmosphereFade);
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
      atmosphereFades.setX(i, 0);
    }
    
    positions.needsUpdate = true;
    sizes.needsUpdate = true;
    opacities.needsUpdate = true;
    atmosphereFades.needsUpdate = true;
    
    // Debug opcional
    if (particleIndex > 0) {
      console.log(`CarbonTrails: ${particleIndex} partículas activas`);
    }
    
    this.particleGeometry.setDrawRange(0, particleIndex);
  }
  
  private smoothstep(edge0: number, edge1: number, x: number): number {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }
  
  update(_deltaTime: number): void {
    // Tiempo absoluto determinístico (igual que AtmosphereClouds)
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000;
    
    // Actualizar factores de activación
    this.orbitalVisibilityFactor = this.calculateOrbitalVisibility();
    const totalActivationFactor = this.temperatureActivationFactor * this.orbitalVisibilityFactor;
    
    if (totalActivationFactor > 0) {
      this.updateParticleGeometry(currentTime);
      
      // Aplicar factor de activación a la opacidad global
      if (this.particleMaterial && this.particleMaterial.uniforms) {
        const baseOpacity = this.params.opacity || 1.0;
        this.particleMaterial.uniforms.globalOpacity.value = baseOpacity * totalActivationFactor;
      }
    } else {
      this.hideAllParticles();
    }
  }
  
  private hideAllParticles(): void {
    const positions = this.particleGeometry.attributes.position as THREE.BufferAttribute;
    const sizes = this.particleGeometry.attributes.size as THREE.BufferAttribute;
    const opacities = this.particleGeometry.attributes.opacity as THREE.BufferAttribute;
    const atmosphereFades = this.particleGeometry.attributes.atmosphereFade as THREE.BufferAttribute;
    
    for (let i = 0; i < this.maxParticles; i++) {
      positions.setXYZ(i, 0, 0, 0);
      sizes.setX(i, 0);
      opacities.setX(i, 0);
      atmosphereFades.setX(i, 0);
    }
    
    positions.needsUpdate = true;
    sizes.needsUpdate = true;
    opacities.needsUpdate = true;
    atmosphereFades.needsUpdate = true;
    
    this.particleGeometry.setDrawRange(0, 0);
  }
  
  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.trailGroup.position.copy(planetPosition);
    }
    scene.add(this.trailGroup);
  }
  
  getObject3D(): THREE.Group {
    return this.trailGroup;
  }
  
  dispose(): void {
    this.particleGeometry.dispose();
    this.particleMaterial.dispose();
    this.trailGroup.clear();
    this.trails = [];
  }
}

/**
 * Función para crear desde datos de Python
 */
export function createCarbonTrailsFromPythonData(
  pythonData: any,
  planetRadius: number,
  _layerSystem?: any
): CarbonTrailsEffect {
  const seed = pythonData?.seeds?.planet_seed || Math.floor(Math.random() * 1000000);
  
  const planetTemperature = pythonData?.original_planet_data?.surface_temperature || 0;
  
  const currentTimeYears = pythonData?.timing?.elapsed_time ? pythonData.timing.elapsed_time / (365.25 * 24 * 3600) : 0;
  
  const orbitalPeriodYears = pythonData?.original_planet_data?.orbital_period_seconds ? 
    pythonData.original_planet_data.orbital_period_seconds / (365.25 * 24 * 3600) : 1.0;
  
  const carbonData = pythonData?.carbon_trails_data || {};
  const rng = new SeededRandom(seed + 11001);
  
  const cycleDuration = carbonData.cycle_duration_years || 
    rng.uniform(orbitalPeriodYears * 0.2, orbitalPeriodYears * 0.9);
  
  const orbitalData = {
    enabled: carbonData.enabled !== undefined ? carbonData.enabled : true,
    cycle_duration_years: cycleDuration,
    visible_duration_years: carbonData.visible_duration_years || 
      rng.uniform(cycleDuration * 0.5, cycleDuration * 0.75)
  };
  
  const params: CarbonTrailsParams = {
    seed: seed + 11000,
    planetTemperature: planetTemperature,
    orbitalData: orbitalData,
    currentTime: currentTimeYears
  };
  
  return new CarbonTrailsEffect(planetRadius, params);
}