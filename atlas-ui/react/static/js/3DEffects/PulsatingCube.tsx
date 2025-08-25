/**
 * Pulsating Cube Effect - Cubo pulsante con esquinas redondeadas para planetas anómalos
 *
 * Crea un cubo semi-transparente con esquinas redondeadas que aparece desde el centro
 * del planeta y se desvanece periódicamente cada 10-20 segundos.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime";

export interface PulsatingCubeParams {
  color?: THREE.Color | number;
  opacity?: number;
  size?: number;
  seed?: number;
  pulseInterval?: [number, number]; // [min, max] seconds for appearance interval
  fadeInDuration?: number; // Duration to fade in (seconds)
  fadeOutDuration?: number; // Duration to fade out (seconds)
  visibleDuration?: number; // How long it stays visible (seconds)
  cornerRadius?: number; // Roundness of corners (0-1)
  emissiveIntensity?: number;
  startTime?: number; // Tiempo inicial fijo para determinismo
  timeSpeed?: number; // Velocidad del tiempo para sincronización (0.1 - 3.0)
  // Orbital visibility data (similar to PolarHexagon)
  orbitalData?: {
    enabled: boolean;
    cycle_duration_years: number;
    visible_duration_years: number;
  };
  currentTime?: number; // Tiempo actual en años para calcular ciclos orbitales
  cosmicOriginTime?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  OPACITY: { min: 0.5, max: 0.95 }, // Mayor opacidad para cristal sólido pero transparente
  SIZE: { min: 1.0, max: 1.0 }, // Tamaño fijo (se multiplica por 1.3 más adelante)
  PULSE_INTERVAL: { min: 3, max: 6 }, // Reducido de 10-20 a 3-6 segundos para mejor visibilidad
  FADE_IN_DURATION: { min: 1.5, max: 3.0 },
  FADE_OUT_DURATION: { min: 2.0, max: 4.0 },
  VISIBLE_DURATION: { min: 3.0, max: 6.0 },
  CORNER_RADIUS: { min: 0.3, max: 1.5 }, // Esquinas redondeadas como cristal pulido
  EMISSIVE_INTENSITY: { min: 0.08, max: 0.15 }, // Brillo interno cristalino más pronunciado
  TIME_SPEED: { min: 0.1, max: 3.0 } // Rango de velocidades del tiempo para sincronización
};

/**
 * Efecto de Cubo Pulsante - Cubo con esquinas redondeadas
 */
export class PulsatingCubeEffect {
  private cubeGroup: THREE.Group;
  private cube: THREE.Mesh;
  private material: THREE.MeshPhysicalMaterial;
  private geometry: THREE.BufferGeometry;
  private params: PulsatingCubeParams;
  private planetRadius: number;
  private startTime: number;
  private nextPulseTime: number;
  private currentState: 'hidden' | 'fading_in' | 'visible' | 'fading_out';
  private stateStartTime: number;
  private rng: SeededRandom;
  private orbitalVisibilityFactor: number; // Factor de visibilidad basado en periodo orbital (0-1)
  
  // Particle system properties
  private particleSystem: THREE.Points;
  private particleGeometry: THREE.BufferGeometry;
  private particleMaterial: THREE.PointsMaterial;
  private particleCount: number = 800;
  private particlePositions: Float32Array;
  private particleVelocities: Float32Array;
  private particleTargets: Float32Array;
  private particleOrigins: Float32Array;
  private particleProgress: Float32Array;
  private particleSurfacePoints: Float32Array; // Store surface exit points
  private planetPosition: THREE.Vector3 = new THREE.Vector3();

  constructor(planetRadius: number, params: PulsatingCubeParams = {}) {
    this.planetRadius = planetRadius;
    
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);
    
    // Tiempo inicial determinista basado en el seed (igual que AtmosphereClouds)
    this.startTime = params.startTime || (seed % 10000) / 1000;

    this.params = {
      color: params.color || new THREE.Color(0xff6b35), // Color naranja anómalo por defecto
      opacity: params.opacity || this.rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      size: params.size || this.rng.uniform(PROCEDURAL_RANGES.SIZE.min, PROCEDURAL_RANGES.SIZE.max),
      seed: seed,
      pulseInterval: params.pulseInterval || [
        this.rng.uniform(PROCEDURAL_RANGES.PULSE_INTERVAL.min, PROCEDURAL_RANGES.PULSE_INTERVAL.max),
        this.rng.uniform(PROCEDURAL_RANGES.PULSE_INTERVAL.min, PROCEDURAL_RANGES.PULSE_INTERVAL.max)
      ],
      fadeInDuration: params.fadeInDuration || this.rng.uniform(PROCEDURAL_RANGES.FADE_IN_DURATION.min, PROCEDURAL_RANGES.FADE_IN_DURATION.max),
      fadeOutDuration: params.fadeOutDuration || this.rng.uniform(PROCEDURAL_RANGES.FADE_OUT_DURATION.min, PROCEDURAL_RANGES.FADE_OUT_DURATION.max),
      visibleDuration: params.visibleDuration || this.rng.uniform(PROCEDURAL_RANGES.VISIBLE_DURATION.min, PROCEDURAL_RANGES.VISIBLE_DURATION.max),
      cornerRadius: params.cornerRadius || this.rng.uniform(PROCEDURAL_RANGES.CORNER_RADIUS.min, PROCEDURAL_RANGES.CORNER_RADIUS.max),
      emissiveIntensity: params.emissiveIntensity || this.rng.uniform(PROCEDURAL_RANGES.EMISSIVE_INTENSITY.min, PROCEDURAL_RANGES.EMISSIVE_INTENSITY.max),
      startTime: this.startTime,
      timeSpeed: params.timeSpeed || this.rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
      // Orbital data (opcional, desde Python)
      orbitalData: params.orbitalData,
      currentTime: params.currentTime || 0
    };

    // Calcular estado inicial correcto basado en tiempo absoluto
    this.initializeStateFromAbsoluteTime();
    
    // Calcular factor de visibilidad orbital inicial
    this.orbitalVisibilityFactor = this.calculateOrbitalVisibility();

    // Crear grupo para el cubo
    this.cubeGroup = new THREE.Group();
    
    // Initialize particle system
    this.initParticleSystem();

    // Crear el cubo cristalino tipo liquid glass de Apple
    // Para que el cubo envuelva completamente una esfera, necesitamos que la diagonal del cubo
    // sea mayor que el diámetro de la esfera. Factor √2 ≈ 1.414 para cubrir completamente
    const cubeSize = planetRadius * 2.35; // 2.35x el radio para envolver completamente y ver bien el cubo
    
    // Usar RoundedBoxGeometry para esquinas redondeadas (más liquid glass)
    const cornerRadiusAbsolute = cubeSize * this.params.cornerRadius! * 0.2;
    this.geometry = new RoundedBoxGeometry(cubeSize, cubeSize, cubeSize, 8, cornerRadiusAbsolute);
    
    // Asegurar normales correctas para iluminación
    this.geometry.computeVertexNormals();
    this.geometry.normalizeNormals();
    
    // Crear material de cristal transparente con sutil toque blanco
    const color = this.params.color instanceof THREE.Color ? this.params.color : new THREE.Color(this.params.color as any);
    this.material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0.99, 0.99, 0.99), // Casi transparente con ligero tinte
      transparent: true,
      opacity: 0, // Inicialmente invisible - se controlará dinámicamente
      
      // Propiedades de cristal para efecto de refracción
      metalness: 0.0,           // Sin metalicidad
      roughness: 0.0,           // Superficie lisa
      transmission: 0.99,       // Máxima transmisión para efecto cristal
      ior: 1.33,                // Índice de refracción como cristal/agua
      thickness: 1.5,           // Grosor para distorsión visible
      
      // Efectos de superficie
      clearcoat: 0.5,           // Capa brillante moderada
      clearcoatRoughness: 0.0,  // Lisa
      
      // Muy sutil emisión para visibilidad en oscuridad
      emissive: new THREE.Color(0.02, 0.02, 0.02),
      emissiveIntensity: 1.0,
      
      // Configuración crítica para no bloquear otros elementos
      side: THREE.DoubleSide,
      depthWrite: false,        // Crítico: no escribir en depth buffer
      depthTest: true,          
      blending: THREE.NormalBlending,
      
      // Sin alpha test para transiciones suaves
      alphaTest: 0,
      
      // Opciones adicionales
      flatShading: false,
      vertexColors: false,
      fog: false                // No afectado por niebla
    });
    
    this.cube = new THREE.Mesh(this.geometry, this.material);
    // Renderizar el cubo después de otros elementos transparentes para evitar conflictos
    this.cube.renderOrder = 999;
    this.cubeGroup.add(this.cube);
    
    // Inicialmente visible (controlado por opacidad)
    this.cubeGroup.visible = true;
  }

  private initializeStateFromAbsoluteTime(): void {
    // Calcular tiempo actual absoluto
    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.params.timeSpeed!, this.startTime);
    
    // Calcular la duración total de un ciclo completo
    const avgPulseInterval = (this.params.pulseInterval![0] + this.params.pulseInterval![1]) / 2;
    const totalCycleDuration = this.params.fadeInDuration! + this.params.visibleDuration! + this.params.fadeOutDuration! + avgPulseInterval;
    
    // Determinar en qué punto del ciclo estamos
    const cycleTime = currentTime % totalCycleDuration;
    
    // Definir los puntos de transición del ciclo
    const fadeInEnd = this.params.fadeInDuration!;
    const visibleEnd = fadeInEnd + this.params.visibleDuration!;
    const fadeOutEnd = visibleEnd + this.params.fadeOutDuration!;
    
    if (cycleTime < fadeInEnd) {
      // Estamos en fade-in
      this.currentState = 'fading_in';
      this.stateStartTime = currentTime - cycleTime;
      this.nextPulseTime = currentTime - cycleTime; // Ya empezó el pulso
    } else if (cycleTime < visibleEnd) {
      // Estamos en visible
      this.currentState = 'visible';
      this.stateStartTime = currentTime - (cycleTime - fadeInEnd);
      this.nextPulseTime = currentTime - cycleTime; // Ya empezó el pulso
    } else if (cycleTime < fadeOutEnd) {
      // Estamos en fade-out
      this.currentState = 'fading_out';
      this.stateStartTime = currentTime - (cycleTime - visibleEnd);
      this.nextPulseTime = currentTime - cycleTime; // Ya empezó el pulso
    } else {
      // Estamos en hidden (esperando próximo pulso)
      this.currentState = 'hidden';
      this.stateStartTime = currentTime - (cycleTime - fadeOutEnd);
      this.nextPulseTime = currentTime + (totalCycleDuration - cycleTime);
    }
  }

  /**
   * Calcular factor de visibilidad basado en datos orbitales (como PolarHexagon)
   */
  private calculateOrbitalVisibility(): number {
    // Si no hay datos orbitales, usar visibilidad completa (comportamiento por defecto)
    if (!this.params.orbitalData || !this.params.orbitalData.enabled) {
      return 1.0;
    }

    const currentTime = this.params.currentTime || 0;
    const cycleProgress = (currentTime % this.params.orbitalData.cycle_duration_years) / 
                         this.params.orbitalData.cycle_duration_years;
    const visibleFraction = this.params.orbitalData.visible_duration_years / 
                           this.params.orbitalData.cycle_duration_years;
    
    // El efecto es visible solo durante la primera parte del ciclo orbital
    if (cycleProgress < visibleFraction) {
      // Transiciones suaves al principio y final del periodo visible
      const localProgress = cycleProgress / visibleFraction;
      if (localProgress < 0.1) {
        return localProgress / 0.1; // Fade in
      } else if (localProgress > 0.9) {
        return (1 - localProgress) / 0.1; // Fade out
      } else {
        return 1.0; // Completamente visible
      }
    } else {
      return 0.0; // No visible fuera del periodo
    }
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.cubeGroup.position.copy(planetPosition);
      this.planetPosition.copy(planetPosition);
    }
    scene.add(this.cubeGroup);
  }

  update(_deltaTime: number): void {
    // Sistema de tiempo determinista sincronizado con AtmosphereClouds
    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.params.timeSpeed!, this.startTime);
    const timeSinceStart = currentTime - this.stateStartTime;

    // Actualizar factor de visibilidad orbital (recalcular en tiempo real)
    this.orbitalVisibilityFactor = this.calculateOrbitalVisibility();
    
    // Si no estamos en el periodo orbital visible, forzar el estado a hidden
    if (this.orbitalVisibilityFactor <= 0.001) {
      this.currentState = 'hidden';
      this.material.opacity = 0;
      this.cubeGroup.visible = false;
      return;
    }

    // Rotación determinista del cubo basada en tiempo absoluto
    this.cube.rotation.x = currentTime * 0.1;
    this.cube.rotation.y = currentTime * 0.15;
    this.cube.rotation.z = currentTime * 0.05;
    
    // Update particle system
    this.updateParticles(currentTime);


    // Máquina de estados para la animación
    switch (this.currentState) {
      case 'hidden':
        this.material.opacity = 0;
        if (currentTime >= this.nextPulseTime) {
          this.currentState = 'fading_in';
          this.stateStartTime = currentTime;
        }
        break;

      case 'fading_in':
        const fadeInProgress = Math.min(timeSinceStart / this.params.fadeInDuration!, 1.0);
        // Delay cube appearance slightly after particles start moving
        const delayedProgress = Math.max(0, (fadeInProgress - 0.3) / 0.7);
        const fadeInOpacity = this.smoothstep(0, 1, delayedProgress) * this.params.opacity! * this.orbitalVisibilityFactor;
        this.material.opacity = fadeInOpacity;
        
        if (fadeInProgress >= 1.0) {
          this.currentState = 'visible';
          this.stateStartTime = currentTime;
        }
        break;

      case 'visible':
        // Apple liquid glass estable - sin animaciones que distorsionen
        // Aplicar el factor de visibilidad orbital a la opacidad máxima
        this.material.opacity = this.params.opacity! * this.orbitalVisibilityFactor;
        
        // Solo el efecto de rotación suave del cubo, manteniendo propiedades de vidrio constantes
        // El liquid glass de Apple es elegante y estable, no cambia constantemente
        
        if (timeSinceStart >= this.params.visibleDuration!) {
          this.currentState = 'fading_out';
          this.stateStartTime = currentTime;
        }
        break;

      case 'fading_out':
        const fadeOutProgress = Math.min(timeSinceStart / this.params.fadeOutDuration!, 1.0);
        // Start fading cube before particles return
        const acceleratedProgress = Math.min(1, fadeOutProgress * 1.3);
        const fadeOutOpacity = (1.0 - this.smoothstep(0, 1, acceleratedProgress)) * this.params.opacity! * this.orbitalVisibilityFactor;
        this.material.opacity = fadeOutOpacity;
        
        if (fadeOutProgress >= 1.0) {
          this.currentState = 'hidden';
          this.stateStartTime = currentTime;
          
          // Programar el próximo pulso
          const nextInterval = this.rng.uniform(this.params.pulseInterval![0], this.params.pulseInterval![1]);
          this.nextPulseTime = currentTime + nextInterval;
        }
        break;
    }

    // Solo ocultar completamente cuando la opacidad es prácticamente cero
    // El AdditiveBlending + depthWrite:false permite que las estrellas se vean a través
    this.cubeGroup.visible = this.material.opacity > 0.001;
  }

  private smoothstep(edge0: number, edge1: number, x: number): number {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  updateParams(newParams: Partial<PulsatingCubeParams>): void {
    this.params = { ...this.params, ...newParams };

    if (newParams.color !== undefined) {
      const color = newParams.color instanceof THREE.Color ? newParams.color : new THREE.Color(newParams.color as any);
      this.material.color = color;
    }
    if (newParams.opacity !== undefined) {
      this.material.opacity = newParams.opacity;
    }
  }

  getObject3D(): THREE.Group {
    return this.cubeGroup;
  }

  private initParticleSystem(): void {
    // Initialize arrays for particle data
    this.particlePositions = new Float32Array(this.particleCount * 3);
    this.particleVelocities = new Float32Array(this.particleCount * 3);
    this.particleTargets = new Float32Array(this.particleCount * 3);
    this.particleOrigins = new Float32Array(this.particleCount * 3);
    this.particleProgress = new Float32Array(this.particleCount);
    this.particleSurfacePoints = new Float32Array(this.particleCount * 3);
    
    const cubeSize = this.planetRadius * 2.35;
    const halfSize = cubeSize / 2;
    
    // Initialize particles starting from planet core
    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;
      
      // All particles start at the planet core (0, 0, 0)
      this.particleOrigins[i3] = 0;
      this.particleOrigins[i3 + 1] = 0;
      this.particleOrigins[i3 + 2] = 0;
      
      // Initial position at planet core
      this.particlePositions[i3] = 0;
      this.particlePositions[i3 + 1] = 0;
      this.particlePositions[i3 + 2] = 0;
      
      // Define surface exit point for each particle
      const theta = this.rng.uniform(0, Math.PI * 2);
      const phi = Math.acos(this.rng.uniform(-1, 1));
      
      this.particleSurfacePoints[i3] = this.planetRadius * Math.sin(phi) * Math.cos(theta);
      this.particleSurfacePoints[i3 + 1] = this.planetRadius * Math.sin(phi) * Math.sin(theta);
      this.particleSurfacePoints[i3 + 2] = this.planetRadius * Math.cos(phi);
      
      // Create target positions on cube edges and vertices for better definition
      const targetType = this.rng.uniform(0, 1);
      let tx: number, ty: number, tz: number;
      
      if (targetType < 0.7) {
        // 70% on faces
        const face = Math.floor(this.rng.uniform(0, 6));
        const u = this.rng.uniform(-0.9, 0.9);
        const v = this.rng.uniform(-0.9, 0.9);
        
        switch(face) {
          case 0: tx = halfSize; ty = u * halfSize; tz = v * halfSize; break;
          case 1: tx = -halfSize; ty = u * halfSize; tz = v * halfSize; break;
          case 2: tx = u * halfSize; ty = halfSize; tz = v * halfSize; break;
          case 3: tx = u * halfSize; ty = -halfSize; tz = v * halfSize; break;
          case 4: tx = u * halfSize; ty = v * halfSize; tz = halfSize; break;
          case 5: tx = u * halfSize; ty = v * halfSize; tz = -halfSize; break;
          default: tx = 0; ty = 0; tz = 0;
        }
      } else {
        // 30% on edges for better cube definition
        const edge = Math.floor(this.rng.uniform(0, 12));
        const t = this.rng.uniform(-0.95, 0.95);
        
        switch(edge) {
          // X-aligned edges
          case 0: tx = t * halfSize; ty = halfSize; tz = halfSize; break;
          case 1: tx = t * halfSize; ty = -halfSize; tz = halfSize; break;
          case 2: tx = t * halfSize; ty = halfSize; tz = -halfSize; break;
          case 3: tx = t * halfSize; ty = -halfSize; tz = -halfSize; break;
          // Y-aligned edges
          case 4: tx = halfSize; ty = t * halfSize; tz = halfSize; break;
          case 5: tx = -halfSize; ty = t * halfSize; tz = halfSize; break;
          case 6: tx = halfSize; ty = t * halfSize; tz = -halfSize; break;
          case 7: tx = -halfSize; ty = t * halfSize; tz = -halfSize; break;
          // Z-aligned edges
          case 8: tx = halfSize; ty = halfSize; tz = t * halfSize; break;
          case 9: tx = -halfSize; ty = halfSize; tz = t * halfSize; break;
          case 10: tx = halfSize; ty = -halfSize; tz = t * halfSize; break;
          case 11: tx = -halfSize; ty = -halfSize; tz = t * halfSize; break;
          default: tx = 0; ty = 0; tz = 0;
        }
      }
      
      this.particleTargets[i3] = tx;
      this.particleTargets[i3 + 1] = ty;
      this.particleTargets[i3 + 2] = tz;
      
      // Random velocities for organic movement
      this.particleVelocities[i3] = this.rng.uniform(-0.3, 0.3);
      this.particleVelocities[i3 + 1] = this.rng.uniform(-0.3, 0.3);
      this.particleVelocities[i3 + 2] = this.rng.uniform(-0.3, 0.3);
      
      // Initial progress
      this.particleProgress[i] = 0;
    }
    
    // Create particle geometry
    this.particleGeometry = new THREE.BufferGeometry();
    this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(this.particlePositions, 3));
    
    // Create particle material with glow effect
    this.particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(1, 1, 1), // White particles that will glow
      size: this.planetRadius * 0.015,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
      vertexColors: false
    });
    
    // Create particle system
    this.particleSystem = new THREE.Points(this.particleGeometry, this.particleMaterial);
    this.particleSystem.renderOrder = 998; // Render before cube
    this.cubeGroup.add(this.particleSystem);
  }
  
  private updateParticles(currentTime: number): void {
    
    const positions = this.particleGeometry.attributes.position.array as Float32Array;
    let particleOpacity = 0;
    let particleProgress = 0;
    
    switch (this.currentState) {
      case 'hidden':
        particleOpacity = 0;
        particleProgress = -0.1; // Particles stay in core
        break;
        
      case 'fading_in':
        const fadeInTime = currentTime - this.stateStartTime;
        particleProgress = Math.min(fadeInTime / this.params.fadeInDuration!, 1.0);
        // Gradual fade in as particles emerge and travel
        particleOpacity = this.smoothstep(0, 1, particleProgress);
        break;
        
      case 'visible':
        particleOpacity = 1.0; // Keep particles fully visible when cube is formed
        particleProgress = 1;
        break;
        
      case 'fading_out':
        const fadeOutTime = currentTime - this.stateStartTime;
        const fadeOutProg = Math.min(fadeOutTime / this.params.fadeOutDuration!, 1.0);
        particleProgress = 1.0 - fadeOutProg;
        // Particles fade as they return to core
        particleOpacity = this.smoothstep(0, 1, particleProgress);
        break;
    }
    
    // Usar tiempo absoluto para movimiento de partículas determinista
    const time = currentTime;
    
    // Get cube's current rotation matrix
    const cubeMatrix = this.cube.matrixWorld;
    const rotationMatrix = new THREE.Matrix4().extractRotation(cubeMatrix);
    
    // Update particle positions
    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;
      
      // Different timing for different particles creates stream effect
      const particleDelay = (i / this.particleCount) * 0.4;
      const delayedProgress = Math.max(-0.1, Math.min(1, particleProgress * 1.3 - particleDelay));
      
      // Clamp to ensure particles stay at core when progress is negative
      const clampedProgress = Math.max(0, delayedProgress);
      
      // Three-stage movement: core -> surface -> cube
      let finalX: number, finalY: number, finalZ: number;
      
      if (clampedProgress < 0.3) {
        // Stage 1: Core to planet surface (0 to 0.3)
        const surfaceProgress = clampedProgress / 0.3;
        const easedSurfaceProgress = this.smoothstep(0, 1, surfaceProgress);
        
        // Use pre-calculated surface point for this particle
        const surfaceX = this.particleSurfacePoints[i3];
        const surfaceY = this.particleSurfacePoints[i3 + 1];
        const surfaceZ = this.particleSurfacePoints[i3 + 2];
        
        finalX = surfaceX * easedSurfaceProgress;
        finalY = surfaceY * easedSurfaceProgress;
        finalZ = surfaceZ * easedSurfaceProgress;
        
      } else {
        // Stage 2: Surface to cube (0.3 to 1.0)
        const cubeProgress = (clampedProgress - 0.3) / 0.7;
        const easedCubeProgress = this.smoothstep(0, 1, cubeProgress);
        
        // Apply rotation to target position
        const targetVector = new THREE.Vector3(
          this.particleTargets[i3],
          this.particleTargets[i3 + 1],
          this.particleTargets[i3 + 2]
        );
        targetVector.applyMatrix4(rotationMatrix);
        
        // Interpolate from surface to cube
        const surfaceX = this.particleSurfacePoints[i3];
        const surfaceY = this.particleSurfacePoints[i3 + 1];
        const surfaceZ = this.particleSurfacePoints[i3 + 2];
        
        finalX = surfaceX + (targetVector.x - surfaceX) * easedCubeProgress;
        finalY = surfaceY + (targetVector.y - surfaceY) * easedCubeProgress;
        finalZ = surfaceZ + (targetVector.z - surfaceZ) * easedCubeProgress;
        
        // Add energy burst effect when leaving surface
        if (cubeProgress < 0.5) {
          const burst = Math.sin(cubeProgress * Math.PI * 2) * this.planetRadius * 0.1;
          finalX *= (1 + burst * 0.1);
          finalY *= (1 + burst * 0.1);
          finalZ *= (1 + burst * 0.1);
        }
      }
      
      // Add subtle wave motion
      const waveOffset = Math.sin(time * 2 + i * 0.1) * 0.01 * this.planetRadius;
      
      positions[i3] = finalX + this.particleVelocities[i3] * waveOffset;
      positions[i3 + 1] = finalY + this.particleVelocities[i3 + 1] * waveOffset;
      positions[i3 + 2] = finalZ + this.particleVelocities[i3 + 2] * waveOffset;
    }
    
    // Update particle material opacity and size based on state
    // Aplicar también el factor de visibilidad orbital a las partículas
    this.particleMaterial.opacity = particleOpacity * this.orbitalVisibilityFactor;
    // Particles grow as they emerge
    this.particleMaterial.size = this.planetRadius * 0.012 * (0.5 + particleOpacity) * this.orbitalVisibilityFactor;
    
    // Mark positions for update
    this.particleGeometry.attributes.position.needsUpdate = true;
  }
  
  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
    this.particleGeometry.dispose();
    this.particleMaterial.dispose();
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python (similar a PolarHexagon)
 */
export function createPulsatingCubeFromPythonData(planetRadius: number, _anomalyData: any, globalSeed?: number, planetColor?: THREE.Color, pythonData?: any): PulsatingCubeEffect | null {
  // Buscar datos de cubo pulsante en pythonData (similar a como PolarHexagon busca surface_elements)
  const cubeData = pythonData?.surface_elements?.pulsating_cube;
  
  // Si no está habilitado, retornar null (como PolarHexagon)
  if (!cubeData?.enabled) {
    return null;
  }

  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 4000); // +4000 para PulsatingCube, MISMO OFFSET que AtmosphereClouds
  
  // CRÍTICO: Generar timeSpeed PRIMERO para que coincida con AtmosphereClouds
  const timeSpeed = rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max);
  
  // Tiempo inicial determinista basado en el seed (igual que AtmosphereClouds)
  const startTime = (seed % 10000) / 1000;
  
  // Obtener tiempo actual desde pythonData si está disponible
  const currentTimeYears = pythonData?.timing?.elapsed_time ? pythonData.timing.elapsed_time / (365.25 * 24 * 3600) : 0;
  
  const params: PulsatingCubeParams = {
    color: planetColor || new THREE.Color(0xff6b35), // Usar el color del planeta, fallback a naranja
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    size: rng.uniform(PROCEDURAL_RANGES.SIZE.min, PROCEDURAL_RANGES.SIZE.max),
    seed,
    pulseInterval: [
      rng.uniform(PROCEDURAL_RANGES.PULSE_INTERVAL.min, PROCEDURAL_RANGES.PULSE_INTERVAL.max),
      rng.uniform(PROCEDURAL_RANGES.PULSE_INTERVAL.min, PROCEDURAL_RANGES.PULSE_INTERVAL.max)
    ],
    fadeInDuration: rng.uniform(PROCEDURAL_RANGES.FADE_IN_DURATION.min, PROCEDURAL_RANGES.FADE_IN_DURATION.max),
    fadeOutDuration: rng.uniform(PROCEDURAL_RANGES.FADE_OUT_DURATION.min, PROCEDURAL_RANGES.FADE_OUT_DURATION.max),
    visibleDuration: rng.uniform(PROCEDURAL_RANGES.VISIBLE_DURATION.min, PROCEDURAL_RANGES.VISIBLE_DURATION.max),
    cornerRadius: rng.uniform(PROCEDURAL_RANGES.CORNER_RADIUS.min, PROCEDURAL_RANGES.CORNER_RADIUS.max),
    emissiveIntensity: rng.uniform(PROCEDURAL_RANGES.EMISSIVE_INTENSITY.min, PROCEDURAL_RANGES.EMISSIVE_INTENSITY.max),
    startTime: startTime,
    timeSpeed: timeSpeed,
    // Datos orbitales desde Python (como PolarHexagon)
    orbitalData: cubeData,
    currentTime: currentTimeYears
  };

  return new PulsatingCubeEffect(planetRadius, params);
}