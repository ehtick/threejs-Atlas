/**
 * Carbon Trails Effect - Estelas y nubes grisáceas para planetas Carbon
 *
 * Crea estelas de partículas grisáceas que emergen de la superficie y se desvanecen
 * conforme salen de la atmósfera, simulando gases y vapores característicos
 * de planetas con altas concentraciones de carbono
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime.tsx";

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
  cosmicOriginTime?: number;

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
  TRAIL_COUNT: { min: 8, max: 15 }, // Mayor variabilidad entre planetas
  EMISSION_FREQUENCY: { min: 0.3, max: 1.2 }, // Amplio rango para diferentes ritmos
  TRAIL_HEIGHT: { min: 0.3, max: 0.8 },
  TRAIL_SPREAD: { min: 0.4, max: 1.4 }, // Mayor variación en dispersión
  PARTICLES_PER_TRAIL: { min: 20, max: 40 }, // Rango eficiente pero variable
  PARTICLE_SIZE: { min: 0.08, max: 0.22 }, // Mayor rango de tamaños
  PARTICLE_LIFETIME: { min: 1.5, max: 5.0 }, // Amplio rango para diferentes efectos
  PARTICLE_SPEED: { min: 0.08, max: 0.35 }, // Desde lentas hasta rápidas
  PARTICLE_DRAG: { min: 0.85, max: 0.98 }, // Variedad en comportamiento de curvas
  ATMOSPHERE_HEIGHT: { min: 4.0, max: 10.0 }, // Diferentes alturas atmosféricas
  OPACITY: { min: 0.15, max: 0.45 }, // Desde sutiles hasta prominentes
  TURBULENCE: { min: 0.3, max: 1.8 }, // Desde suaves hasta muy turbulentas
  WIND_STRENGTH: { min: 0.05, max: 0.25 }, // Variedad en efectos de viento
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
    this.lastEmissionTime = currentTime - phaseOffset * emissionInterval;

    // Activar algunas partículas iniciales de forma determinística
    const particlesToActivate = Math.min(10, this.particleLifetimes.length);
    for (let i = 0; i < particlesToActivate; i++) {
      const emissionTime = this.lastEmissionTime - i * emissionInterval;
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
    return timeSinceLastEmission >= 1.0 / frequency;
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

    const localDir = new THREE.Vector3(Math.sin(adjustedPhi) * Math.cos(theta), Math.sin(adjustedPhi) * Math.sin(theta), Math.cos(adjustedPhi) + upwardBias).normalize();

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
  private maxParticles: number = 1200; // Límite razonable para rendimiento
  private orbitalVisibilityFactor: number;

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
    const baseColor = params.baseColor instanceof THREE.Color ? params.baseColor : new THREE.Color(0.25, 0.25, 0.28); // Gris oscuro más natural
    const atmosphereColor = params.atmosphereColor instanceof THREE.Color ? params.atmosphereColor : new THREE.Color(0.35, 0.35, 0.38); // Gris medio al desvanecerse

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
      planetTemperature: params.planetTemperature || 0,
    };

    // Calcular factores de activación
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
    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.params.timeSpeed!, this.startTime);
    this.updateParticleGeometry(currentTime);
  }

  private initializeStateFromAbsoluteTime(): void {
    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.params.timeSpeed!, this.startTime);

    for (let i = 0; i < this.trails.length; i++) {
      this.trails[i].initializeStateFromAbsoluteTime(currentTime, this.params.emissionFrequency!, i);
    }
  }

  private createTrailPoints(rng: SeededRandom): void {
    const count = this.params.trailCount!;
    for (let i = 0; i < count; i++) {
      // Posición aleatoria en la superficie
      const phi = rng.uniform(0, Math.PI * 2);
      const theta = Math.acos(rng.uniform(-1, 1));

      const position = new THREE.Vector3(Math.sin(theta) * Math.cos(phi) * this.planetRadius, Math.sin(theta) * Math.sin(phi) * this.planetRadius, Math.cos(theta) * this.planetRadius);

      const trail = new CarbonTrail(position, Math.floor(rng.random() * 1000000), this.params.particlesPerTrail!, this.params.trailSpread!, this.params.particleSpeed!, this.params.particleSize!, this.params.particleLifetime!, this.planetRadius);

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

    this.particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    this.particleGeometry.setAttribute("opacity", new THREE.BufferAttribute(opacities, 1));
    this.particleGeometry.setAttribute("atmosphereFade", new THREE.BufferAttribute(atmosphereFades, 1));

    this.particleMaterial = new THREE.ShaderMaterial({
      vertexShader: CarbonTrailsEffect.vertexShader,
      fragmentShader: CarbonTrailsEffect.fragmentShader,
      uniforms: {
        baseColor: { value: this.params.baseColor },
        atmosphereColor: { value: this.params.atmosphereColor },
        globalOpacity: { value: this.params.opacity },
      },
      transparent: true,
      blending: THREE.NormalBlending, // Blending normal para evitar blanqueo extremo
      depthWrite: false,
      vertexColors: false,
    });

    this.particleSystem = new THREE.Points(this.particleGeometry, this.particleMaterial);
    this.particleSystem.renderOrder = 10; // Render order alto pero no excesivo
    this.trailGroup.add(this.particleSystem);
  }

  private initializeActiveTrails(): void {
    // Ya no es necesario - se hace en initializeStateFromAbsoluteTime
  }


  private calculateOrbitalVisibility(): number {
    if (!this.params.orbitalData || !this.params.orbitalData.enabled) {
      return 1;
    }

    // Calculate time from cosmic origin, same as Python
    const cosmicOriginTime = this.params.cosmicOriginTime || 514080000;
    const currentTimeSeconds = Date.now() / 1000 - cosmicOriginTime;
    const currentTime = currentTimeSeconds / (365.25 * 24 * 3600); // Convert to years

    const cycleProgress = (currentTime % this.params.orbitalData.cycle_duration_years) / this.params.orbitalData.cycle_duration_years;
    const visibleFraction = this.params.orbitalData.visible_duration_years / this.params.orbitalData.cycle_duration_years;

    const isInVisiblePeriod = cycleProgress <= visibleFraction;
    let visibility = 0;

    if (isInVisiblePeriod) {
      const visibleProgress = cycleProgress / visibleFraction;

      if (visibleProgress < 0.15) {
        visibility = visibleProgress / 0.15;
      } else if (visibleProgress > 0.85) {
        visibility = (1.0 - visibleProgress) / 0.15;
      } else {
        visibility = 1.0;
      }
    }


    return visibility;
  }

  private updateParticleGeometry(currentTime: number): void {
    const positions = this.particleGeometry.attributes.position as THREE.BufferAttribute;
    const sizes = this.particleGeometry.attributes.size as THREE.BufferAttribute;
    const opacities = this.particleGeometry.attributes.opacity as THREE.BufferAttribute;
    const atmosphereFades = this.particleGeometry.attributes.atmosphereFade as THREE.BufferAttribute;

    let particleIndex = 0;

    // Optimizaciones: precalcular valores que no cambian en el loop
    const maxDistance = this.planetRadius * this.params.atmosphereHeight!;

    for (let trailIndex = 0; trailIndex < this.trails.length; trailIndex++) {
      const trail = this.trails[trailIndex];

      // ELIMINADO: No más emisión dinámica

      // Calcular todas las partículas basadas en tiempo absoluto (como PulsatingCube)
      for (let i = 0; i < this.params.particlesPerTrail! && particleIndex < this.maxParticles; i++) {
        // Cálculo de tiempo directo y simple
        const particleDelay = (i / this.params.particlesPerTrail!) * 0.8;
        const trailPhase = (trailIndex * 0.5) % 2.0;
        const particleAge = currentTime + trailPhase - particleDelay;

        // Ciclo simple para animación continua
        const cycleTime = Math.abs(particleAge % trail.particleLifetimes[i]);

        if (cycleTime >= 0 && cycleTime < trail.particleLifetimes[i]) {
          // Física para trazas de carbono (humo que se eleva y dispersa)
          const direction = trail.particleDirections[i].clone();
          let speed = trail.particleSpeeds[i];

          // Aplicar drag para desaceleración gradual
          speed *= Math.pow(this.params.particleDrag!, cycleTime);
          const distance = speed * cycleTime;
          let position = trail.position.clone().add(direction.multiplyScalar(distance));

          // Flotabilidad FUERTE para movimiento visible
          const buoyancy = 0.1 * cycleTime; // 5x más fuerte
          position.y += buoyancy;

          // Dispersión radial MUY visible
          const expansionFactor = cycleTime * 0.08; // 5x más fuerte
          const radialDir = new THREE.Vector3(direction.x, 0, direction.z).normalize();
          position.add(radialDir.multiplyScalar(expansionFactor));

          // Turbulencia MUY ACTIVA para movimiento dinámico
          const turbulenceStrength = this.params.turbulenceStrength! * 0.08; // 6x más fuerte
          const timePhase = currentTime * 2.0 + i * 0.3; // Mucho más rápido
          position.x += Math.sin(timePhase) * turbulenceStrength;
          position.y += Math.cos(timePhase * 0.7) * turbulenceStrength * 0.8;
          position.z += Math.sin(timePhase * 1.4) * turbulenceStrength;

          const distanceFromCenter = position.length();

          // Verificar límite rápido
          if (distanceFromCenter > maxDistance) {
            continue;
          }

          // Opacidad simple como FireEruption
          const ageProgress = cycleTime / trail.particleLifetimes[i];
          const fadeIn = this.smoothstep(0, 0.1, ageProgress);
          const fadeOut = this.smoothstep(1.0, 0.7, ageProgress);
          const opacity = fadeIn * fadeOut;
          let atmosphereFade = 0;

          const size = trail.particleSizes[i] * (1 - ageProgress * 0.2);

          // Renderizar si es visible
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

    this.particleGeometry.setDrawRange(0, particleIndex);
  }

  private smoothstep(edge0: number, edge1: number, x: number): number {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  update(_deltaTime: number): void {
    // Tiempo absoluto determinístico (igual que AtmosphereClouds)
    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.params.timeSpeed!, this.startTime);

    // Actualizar factores de activación
    this.orbitalVisibilityFactor = this.calculateOrbitalVisibility();

    if (this.orbitalVisibilityFactor > 0) {
      this.updateParticleGeometry(currentTime);

      // Aplicar factor de activación a la opacidad global
      if (this.particleMaterial && this.particleMaterial.uniforms) {
        const baseOpacity = this.params.opacity || 1.0;
        this.particleMaterial.uniforms.globalOpacity.value = baseOpacity * this.orbitalVisibilityFactor;
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
export function createCarbonTrailsFromPythonData(pythonData: any, planetRadius: number, _layerSystem?: any): CarbonTrailsEffect | null {
  // Use carbon_trails_data from Python backend (similar to PulsatingCube pattern)
  const carbonData = pythonData?.surface_elements?.carbon_trails_data;

  // If no carbon_trails_data from Python, the effect is disabled (33% probability handled in Python)
  if (!carbonData?.enabled) {
    return null;
  }

  const seed = pythonData?.seeds?.planet_seed || Math.floor(Math.random() * 1000000);
  const planetTemperature = pythonData?.original_planet_data?.surface_temperature || 0;
  const currentTimeYears = pythonData?.timing?.elapsed_time ? pythonData.timing.elapsed_time / (365.25 * 24 * 3600) : 0;

  const orbitalData = {
    enabled: true,
    cycle_duration_years: carbonData.cycle_duration_years,
    visible_duration_years: carbonData.visible_duration_years,
  };

  const params: CarbonTrailsParams = {
    seed: seed + 11000,
    planetTemperature: planetTemperature,
    orbitalData: orbitalData,
    currentTime: currentTimeYears,
    cosmicOriginTime: pythonData?.timing?.cosmic_origin_time,
  };

  return new CarbonTrailsEffect(planetRadius, params);
}
