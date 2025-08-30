/**
 * Toxic Swamp Bubbles Effect - Procedural methane gas bubbles with marching cubes-style patterns
 *
 * Creates dynamic bubbles that:
 * - Use mathematical functions for organic placement (similar to marching cubes metaballs)
 * - Emerge gradually from inside the planet surface
 * - Follow time-based procedural patterns for natural movement
 * - Pop with visual explosion when reaching maximum size
 * - Have slow, organic timing similar to marching cubes animations
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";

export interface ToxicSwampBubblesParams {
  bubbleCount?: number;
  bubbleSize?: number;
  riseSpeed?: number;
  expansionRate?: number;
  popDistance?: number;
  bubbleColor?: THREE.Color;
  opacity?: number;
  emissionRate?: number;
  seed?: number;
  planetType?: "SWAMP" | "DEFAULT";
  cosmicOriginTime?: number; // Tiempo de origen cósmico para determinismo
  timeSpeed?: number; // Velocidad del tiempo para animación (0.1 - 3.0)
}

// Ranges for procedural generation
const PROCEDURAL_RANGES = {
  DEFAULT: {
    BUBBLE_COUNT: { min: 8, max: 15 },
    BUBBLE_SIZE: { min: 0.004, max: 0.008 },
    RISE_SPEED: { min: 0.008, max: 0.015 },
    EXPANSION_RATE: { min: 0.006, max: 0.012 },
    POP_DISTANCE: { min: 0.15, max: 0.25 },
    OPACITY: { min: 0.15, max: 0.35 },
    EMISSION_RATE: { min: 0.8, max: 1.5 },
  },
  SWAMP: {
    BUBBLE_COUNT: { min: 450, max: 900 }, // More reasonable amount for performance
    BUBBLE_SIZE: { min: 0.01, max: 0.05 }, // Small but visible swamp bubbles
    RISE_SPEED: { min: 0.003, max: 0.008 }, // Velocidad moderada orgánica
    EXPANSION_RATE: { min: 0.002, max: 0.004 }, // Expansión moderada
    POP_DISTANCE: { min: 0.2, max: 0.35 }, // Pop at reasonable distance
    OPACITY: { min: 0.2, max: 0.9 }, // More visible
    EMISSION_RATE: { min: 8.0, max: 12.0 }, // Emisión moderada
  },
};

interface Bubble {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  size: number;
  maxSize: number;
  life: number; // Tiempo cósmico total (para cálculos determinísticos)
  animationTime: number; // Tiempo de animación suave (ventanado)
  maxLife: number;
  originalSurfacePoint: THREE.Vector3;
  wobbleOffset: THREE.Vector3; // For organic wobbling motion
  wobbleSpeed: number; // Individual wobble frequency
  wobbleAmplitude: number; // How much the bubble wobbles
  startOpacity: number; // Starting opacity for fade in
  hasPopped: boolean; // Track if bubble has exploded
  emergencePhase: number; // 0-1: how far the bubble has emerged from surface
  emergenceSpeed: number; // How fast the bubble emerges
  isFullyEmerged: boolean; // Whether bubble has fully emerged from surface
  fadeInPhase: number; // 0-1: how much the bubble has faded in
  fadeInSpeed: number; // How fast the bubble fades in
  bubbleIndex: number; // Unique index for procedural patterns
  birthTime: number; // When the bubble was created
  popPhase: number; // 0-1: explosion animation phase
  popStartTime: number; // When popping started (tiempo de animación)
}

export class ToxicSwampBubblesEffect {
  private bubbles: Bubble[] = [];
  private bubbleMeshes: THREE.Mesh[] = [];
  private bubbleGroup: THREE.Group;
  private material: THREE.MeshBasicMaterial;
  private geometry: THREE.SphereGeometry;
  private rng: SeededRandom;
  private params: Required<ToxicSwampBubblesParams>;
  private planetRadius: number;
  private lastBubbleTime: number = 0;
  private planetCenter: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  private cosmicOriginTime: number; // Tiempo de origen cósmico para determinismo
  private cosmicOffset: number; // Offset único por planeta
  private globalTime: number = 0; // Track global time for procedural patterns
  private nextBubbleIndex: number = 0; // Unique index for each bubble
  private lastUpdateTime: number = 0; // Tiempo del último update para deltaTime calculado
  private isInitialized: boolean = false; // Si ya se inicializó el estado desde tiempo cósmico

  constructor(planetRadius: number, params: ToxicSwampBubblesParams = {}) {
    this.planetRadius = planetRadius;
    this.rng = new SeededRandom(params.seed || Math.random() * 1000000);
    
    // Sistema de tiempo híbrido igual que AtmosphereClouds:
    // 1. Usar cosmic_origin_time como base determinística
    this.cosmicOriginTime = params.cosmicOriginTime || 514080000;
    // 2. Offset único por planeta para variación
    this.cosmicOffset = (params.seed || 0) % 3600 * 10;
    
    // Select ranges based on planet type
    const planetType = params.planetType || "SWAMP";
    const ranges = PROCEDURAL_RANGES[planetType];
    
    // Set default parameters using procedural ranges
    const actualBubbleCount = params.bubbleCount || this.rng.randint(ranges.BUBBLE_COUNT.min, ranges.BUBBLE_COUNT.max);
    const actualBubbleSize = params.bubbleSize || planetRadius * this.rng.uniform(ranges.BUBBLE_SIZE.min, ranges.BUBBLE_SIZE.max);
    
    console.log("DEBUG: ToxicSwampBubbles params calculation:", {
      planetType,
      ranges: ranges,
      providedBubbleCount: params.bubbleCount,
      calculatedBubbleCount: actualBubbleCount,
      providedBubbleSize: params.bubbleSize,
      calculatedBubbleSize: actualBubbleSize
    });
    
    this.params = {
      bubbleCount: actualBubbleCount,
      bubbleSize: actualBubbleSize,
      riseSpeed: params.riseSpeed || this.rng.uniform(ranges.RISE_SPEED.min, ranges.RISE_SPEED.max),
      expansionRate: params.expansionRate || this.rng.uniform(ranges.EXPANSION_RATE.min, ranges.EXPANSION_RATE.max),
      popDistance: params.popDistance || planetRadius * this.rng.uniform(ranges.POP_DISTANCE.min, ranges.POP_DISTANCE.max),
      bubbleColor: params.bubbleColor || new THREE.Color(0x4d7c0f), // Dark swampy green with transparency
      opacity: params.opacity || this.rng.uniform(ranges.OPACITY.min, ranges.OPACITY.max),
      emissionRate: params.emissionRate || this.rng.uniform(ranges.EMISSION_RATE.min, ranges.EMISSION_RATE.max),
      seed: params.seed || Math.random() * 1000000,
      planetType,
      cosmicOriginTime: this.cosmicOriginTime,
      timeSpeed: params.timeSpeed || this.rng.uniform(0.5, 2.0), // Velocidad del tiempo
    };

    this.bubbleGroup = new THREE.Group();
    this.setupMaterials();
    this.setupGeometry();
    
    console.log("ToxicSwampBubbles initialized:", {
      planetRadius: this.planetRadius,
      params: this.params,
      materialColor: this.material.color.getHex(),
      materialOpacity: this.material.opacity
    });
    
    // Create initial bubbles for immediate effect
    this.createInitialBubbles();
  }

  private setupMaterials(): void {
    this.material = new THREE.MeshBasicMaterial({
      color: this.params.bubbleColor,
      transparent: true,
      opacity: this.params.opacity,
      side: THREE.DoubleSide,
      depthWrite: false,
      depthTest: true,
      blending: THREE.NormalBlending, // Normal blending for better visibility
    });
  }

  private setupGeometry(): void {
    this.geometry = new THREE.SphereGeometry(0.3, 12, 8); // Balanced size for visible but small swamp bubbles
  }
  
  private createInitialBubbles(): void {
    // NO CREAR BURBUJAS INICIALES - Todo se calculará dinámicamente en rebuildBubblesFromAbsoluteTime
    console.log('Sistema de burbujas procedural inicializado - estado se calculará dinámicamente');
  }
  
  private getProceduralSurfacePoint(bubbleIndex: number): THREE.Vector3 {
    // Use marching cubes-style mathematical patterns for organic bubble placement
    // Similar to: ballx = Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5
    
    const i = bubbleIndex;
    const time = 0; // No usar tiempo global - posición debe ser fija por bubbleIndex
    
    // Generate procedural coordinates using complex sin/cos patterns
    // These create organic, non-repeating patterns across the sphere surface
    const theta = Math.sin(i * 0.618 + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * Math.PI * 2;
    const phi = Math.abs(Math.cos(i * 0.382 + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * Math.PI;
    
    // Add some noise for variation
    const noiseTheta = Math.sin(i * 1.32 + time * 0.1 * Math.sin((0.92 + 0.53 * i))) * 0.3;
    const noisePhi = Math.cos(i * 2.43 + time * 0.15 * Math.cos((1.37 + 0.29 * i))) * 0.2;
    
    const finalTheta = theta + noiseTheta;
    const finalPhi = phi + noisePhi;
    
    // Start bubbles just slightly inside the planet surface - shallow emergence
    // Small depth variation for natural look but keep them close to surface
    const depthVariation = 0.95 + 0.05 * Math.sin(i * 0.73 + time * 0.2);
    const startDepth = this.planetRadius * depthVariation; // Start 95-100% of radius (just under surface)
    
    const x = startDepth * Math.sin(finalPhi) * Math.cos(finalTheta);
    const y = startDepth * Math.sin(finalPhi) * Math.sin(finalTheta);
    const z = startDepth * Math.cos(finalPhi);
    
    return new THREE.Vector3(x, y, z).add(this.planetCenter);
  }

  private createBubbleAtTime(currentTime: number, bubbleIndex: number): void {
    // Generar burbuja determinística basada en tiempo y índice
    const rng = new SeededRandom(this.params.seed + bubbleIndex); // RNG determinista per burbuja
    
    const surfacePoint = this.getProceduralSurfacePoint(bubbleIndex);
    const directionFromCenter = surfacePoint.clone().sub(this.planetCenter).normalize();
    
    // Calculate actual surface position for this bubble
    const actualSurfacePoint = directionFromCenter.clone().multiplyScalar(this.planetRadius).add(this.planetCenter);
    
    // Tiempo de creación determinístico para esta burbuja
    const bubbleBirthTime = currentTime - rng.uniform(0, 5); // Nació hace 0-5 segundos
    
    const bubble: Bubble = {
      position: surfacePoint.clone(), // Start inside the planet
      velocity: directionFromCenter.multiplyScalar(this.params.riseSpeed * 0.3), // Much slower individual bubble rise
      size: this.params.bubbleSize * 0.2, // Start very small
      maxSize: this.params.bubbleSize * rng.uniform(1.2, 1.8), // Much smaller max size for swamp bubbles
      life: currentTime - bubbleBirthTime, // Vida basada en cuánto tiempo ha existido (tiempo cósmico)
      animationTime: 0, // Iniciar tiempo de animación en 0
      maxLife: rng.uniform(20, 35), // Vida moderada - 20-35 segundos por burbuja
      originalSurfacePoint: actualSurfacePoint.clone(),
      wobbleOffset: new THREE.Vector3(
        rng.uniform(-1, 1),
        rng.uniform(-1, 1), 
        rng.uniform(-1, 1)
      ).normalize(),
      wobbleSpeed: rng.uniform(0.5, 1.2), // Wobble orgánico moderado
      wobbleAmplitude: rng.uniform(0.002, 0.008), // Subtle wobble
      startOpacity: 0, // Start invisible
      hasPopped: false,
      emergencePhase: 0, // Inicializar en 0 - será calculado por animationTime
      emergenceSpeed: rng.uniform(0.3, 0.6), // Emergencia en 2-3 segundos
      isFullyEmerged: false, // Será calculado por animationTime
      fadeInPhase: 0, // Inicializar en 0 - será calculado por animationTime
      fadeInSpeed: rng.uniform(0.8, 1.5), // Fade in en 1-2 segundos
      bubbleIndex: bubbleIndex,
      birthTime: bubbleBirthTime,
      popPhase: 0,
      popStartTime: 0,
    };

    // Add procedural variation to velocity based on index
    const velocityVariation = Math.sin(bubbleIndex * 0.47) * 0.3 + 1.0;
    bubble.velocity.multiplyScalar(velocityVariation);
    
    // Calcular posición actual basada en tiempo transcurrido
    const timeAlive = currentTime - bubbleBirthTime;
    const emergenceFactor = THREE.MathUtils.smoothstep(bubble.emergencePhase, 0, 1);
    const displacement = bubble.velocity.clone().multiplyScalar(timeAlive * emergenceFactor);
    bubble.position.add(displacement);
    
    // Calcular tamaño actual
    const lifeFactor = Math.min(bubble.life / bubble.maxLife, 1);
    const sizeEmergenceFactor = THREE.MathUtils.smoothstep(bubble.emergencePhase, 0, 1);
    const baseSize = bubble.maxSize * 0.1;
    bubble.size = THREE.MathUtils.lerp(
      baseSize,
      bubble.maxSize,
      sizeEmergenceFactor * Math.min(lifeFactor * 2, 1)
    );

    this.bubbles.push(bubble);

    // Create visual mesh for the bubble with its own material instance
    const bubbleMaterial = this.material.clone();
    bubbleMaterial.opacity = bubble.fadeInPhase * this.params.opacity; // Opacidad basada en fade in
    const bubbleMesh = new THREE.Mesh(this.geometry, bubbleMaterial);
    bubbleMesh.position.copy(bubble.position);
    bubbleMesh.scale.setScalar(bubble.size);
    
    this.bubbleMeshes.push(bubbleMesh);
    this.bubbleGroup.add(bubbleMesh);
  }

  private updateBubbles(deltaTime: number): void {
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const bubble = this.bubbles[i];
      const bubbleMesh = this.bubbleMeshes[i];
      
      // Update bubble animation time (suave, ventanado)
      bubble.animationTime += deltaTime;
      
      // Update bubble life (tiempo cósmico, puede saltar)
      bubble.life += deltaTime;
      
      // Calculate distance from planet center
      const distanceFromCenter = bubble.position.distanceTo(this.planetCenter);
      const distanceFromSurface = distanceFromCenter - this.planetRadius;
      
      // Update emergence phase (bubble coming out from inside planet)
      // Usar animationTime para sincronizar todo
      bubble.emergencePhase = Math.min(1, bubble.animationTime * bubble.emergenceSpeed);
      bubble.isFullyEmerged = bubble.emergencePhase >= 1;
      
      // Update fade in phase
      bubble.fadeInPhase = Math.min(1, bubble.animationTime * bubble.fadeInSpeed);
      
      // Organic procedural wobble using marching cubes-style patterns
      // Usar tiempo de animación ventanado para animaciones suaves
      const wobbleTime = bubble.animationTime * bubble.wobbleSpeed;
      
      // Complex wobble pattern similar to marching cubes
      const wobbleX = Math.sin(wobbleTime + bubble.bubbleIndex * 0.31) * bubble.wobbleAmplitude;
      const wobbleY = Math.cos(wobbleTime * 1.3 + bubble.bubbleIndex * 0.47) * bubble.wobbleAmplitude;
      const wobbleZ = Math.sin(wobbleTime * 0.7 + bubble.bubbleIndex * 0.13) * bubble.wobbleAmplitude;
      
      const wobbleVector = new THREE.Vector3(wobbleX, wobbleY, wobbleZ);
      wobbleVector.multiply(bubble.wobbleOffset);
      
      // Slow organic movement with emergence factor
      const emergenceFactor = THREE.MathUtils.smoothstep(bubble.emergencePhase, 0, 1);
      const frameVelocity = bubble.velocity.clone().add(wobbleVector);
      bubble.position.add(frameVelocity.multiplyScalar(deltaTime * emergenceFactor));
      
      // Size growth based on emergence and animation time
      const animationLifeFactor = Math.min(bubble.animationTime / bubble.maxLife, 1);
      const sizeEmergenceFactor = THREE.MathUtils.smoothstep(bubble.emergencePhase, 0, 1);
      
      // Bubble grows as it emerges and over its animation time
      const baseSize = bubble.maxSize * 0.1; // Start small
      const targetSize = bubble.maxSize;
      
      if (!bubble.hasPopped) {
        bubble.size = THREE.MathUtils.lerp(
          baseSize,
          targetSize,
          sizeEmergenceFactor * Math.min(animationLifeFactor * 2, 1) // Grow to full size by half lifetime
        );
      } else {
        // Explosion animation - rapid expansion
        const popProgress = bubble.popPhase;
        const explosionScale = 1 + popProgress * 1.5; // Expand up to 2.5x size
        bubble.size = bubble.maxSize * explosionScale;
      }
      
      // Check if bubble should pop - only after fully emerging from surface
      const shouldPop = bubble.isFullyEmerged && (
        distanceFromSurface >= this.params.popDistance ||
        bubble.animationTime >= bubble.maxLife * 0.8 ||
        bubble.size >= bubble.maxSize * 0.9
      );
      
      if (shouldPop && !bubble.hasPopped) {
        bubble.hasPopped = true;
        bubble.popStartTime = bubble.animationTime; // Usar tiempo de animación suave
      }
      
      // Update pop animation
      if (bubble.hasPopped) {
        const timeSincePop = bubble.animationTime - bubble.popStartTime;
        bubble.popPhase = Math.min(1, timeSincePop * 2); // Explosión rápida de 0.5 segundos
      }
      
      // Calculate opacity with emergence, fade-in, and pop effects
      let opacity = 0;
      
      if (!bubble.hasPopped) {
        // Gradual fade in as bubble emerges
        const emergenceOpacity = THREE.MathUtils.smoothstep(bubble.emergencePhase, 0.3, 1);
        const fadeInOpacity = bubble.fadeInPhase;
        const distanceFade = Math.max(0, 1 - distanceFromSurface / (this.params.popDistance * 2));
        
        opacity = this.params.opacity * emergenceOpacity * fadeInOpacity * distanceFade;
        
        // Removed debug logs for cleaner output
      } else {
        // Rapid fade out during pop
        const popFade = 1 - bubble.popPhase;
        opacity = this.params.opacity * popFade * 0.5; // Dimmer during explosion
      }
      
      // Update mesh
      bubbleMesh.position.copy(bubble.position);
      bubbleMesh.scale.setScalar(bubble.size);
      (bubbleMesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, opacity);
      
      // Remove when done (don't remove based on opacity for emerging bubbles)
      const shouldRemove = (
        bubble.animationTime >= bubble.maxLife ||
        (bubble.hasPopped && bubble.popPhase >= 1) ||
        (opacity <= 0.01 && bubble.isFullyEmerged) // Only remove by opacity if fully emerged
      );
      
      if (shouldRemove) {
        // Removed debug logs for cleaner output
        
        this.bubbles.splice(i, 1);
        this.bubbleGroup.remove(bubbleMesh);
        this.bubbleMeshes.splice(i, 1);
        
        // Dispose
        if (bubbleMesh.material !== this.material) {
          (bubbleMesh.material as THREE.Material).dispose();
        }
        if (bubbleMesh.geometry !== this.geometry) {
          bubbleMesh.geometry.dispose();
        }
      }
    }
  }

  public update(deltaTime: number): void {
    // Calcular tiempo c\u00f3smico absoluto
    const currentTimeSeconds = Date.now() / 1000;
    const timeSinceCosmicOrigin = currentTimeSeconds - this.cosmicOriginTime;
    const animTime = (timeSinceCosmicOrigin + this.cosmicOffset) * (this.params.timeSpeed || 1.0);
    
    // INICIALIZAR ESTADO LA PRIMERA VEZ
    if (!this.isInitialized) {
      this.rebuildBubblesFromAbsoluteTime(animTime);
      this.lastUpdateTime = animTime;
      this.isInitialized = true;
      this.globalTime = animTime;
      return;
    }
    
    // ACTUALIZAR NORMALMENTE CON ANIMACI\u00d3N CONTINUA
    let realDeltaTime = animTime - this.lastUpdateTime;
    this.lastUpdateTime = animTime;
    this.globalTime = animTime;
    
    // Limitar deltaTime para animaciones suaves (máximo 1/30 segundo)
    // Esto evita saltos gigantes cuando se cambia de tab o hay pausas
    realDeltaTime = Math.min(realDeltaTime, 1/30);
    
    // Crear nuevas burbujas según el patrón cíclico
    this.createNewBubblesIfNeeded(animTime);
    
    // Actualizar burbujas existentes con animación suave
    this.updateBubbles(realDeltaTime);
  }
  
  private rebuildBubblesFromAbsoluteTime(currentTime: number): void {
    // Limpiar todas las burbujas existentes
    this.clearAllBubbles();
    
    // Calcular exactamente qué burbujas deben existir en este momento
    const baseInterval = 1.0 / this.params.emissionRate;
    const avgLifetime = 27; // Promedio de vida de las burbujas (27 segundos)
    
    // Número máximo de burbujas que pueden coexistir
    const maxConcurrentBubbles = Math.min(this.params.bubbleCount, Math.ceil(avgLifetime / baseInterval));
    
    console.log('DEBUG: rebuildBubblesFromAbsoluteTime', {
      currentTime,
      baseInterval,
      avgLifetime,
      maxConcurrentBubbles,
      emissionRate: this.params.emissionRate
    });
    
    let bubblesCreated = 0;
    
    // ENFOQUE CÍCLICO: calcular qué burbujas deben existir ahora
    // Usar ciclo de vida total para determinar patrones de nacimiento
    const totalCycleTime = avgLifetime; // Ciclo completo de burbujas
    const cycleTime = currentTime % totalCycleTime; // Dónde estamos en el ciclo
    
    // Para cada slot de burbuja, calcular si debe existir
    for (let bubbleIndex = 0; bubbleIndex < this.params.bubbleCount; bubbleIndex++) {
      const rng = new SeededRandom(this.params.seed + bubbleIndex);
      
      // Tiempo de nacimiento dentro del ciclo (0 a totalCycleTime)
      const cycleBirthTime = (bubbleIndex * baseInterval) % totalCycleTime;
      const maxLife = rng.uniform(20, 35); // Vida moderada consistente
      const cycleDeathTime = (cycleBirthTime + maxLife) % totalCycleTime;
      
      // Verificar si la burbuja debe existir en este momento del ciclo
      let shouldExist = false;
      if (cycleDeathTime > cycleBirthTime) {
        // Caso normal: nace y muere dentro del mismo ciclo
        shouldExist = (cycleTime >= cycleBirthTime && cycleTime <= cycleDeathTime);
      } else {
        // Caso especial: la burbuja cruza el límite del ciclo
        shouldExist = (cycleTime >= cycleBirthTime || cycleTime <= cycleDeathTime);
      }
      
      if (shouldExist) {
        // Calcular el tiempo de nacimiento absoluto más reciente
        let absoluteBirthTime;
        if (cycleTime >= cycleBirthTime) {
          // Nació en este ciclo
          absoluteBirthTime = currentTime - (cycleTime - cycleBirthTime);
        } else {
          // Nació en el ciclo anterior
          absoluteBirthTime = currentTime - (cycleTime + totalCycleTime - cycleBirthTime);
        }
        
        this.createBubbleAtExactState(currentTime, bubbleIndex, absoluteBirthTime, maxLife);
        bubblesCreated++;
        
        if (bubblesCreated <= 3) {
          console.log(`DEBUG: Created bubble ${bubbleIndex}`, {
            cycleBirthTime,
            absoluteBirthTime,
            age: currentTime - absoluteBirthTime,
            maxLife,
            cycleTime
          });
        }
      }
    }
    
    console.log(`DEBUG: Created ${bubblesCreated} bubbles for time ${currentTime}`);
  }
  
  private createNewBubblesIfNeeded(currentTime: number): void {
    // Verificar si necesitamos crear nuevas burbujas según el patrón cíclico
    const baseInterval = 1.0 / this.params.emissionRate;
    const avgLifetime = 27;
    const totalCycleTime = avgLifetime;
    const cycleTime = currentTime % totalCycleTime;
    
    // Contar cuántas burbujas deberían existir vs cuántas tenemos
    let shouldExistCount = 0;
    
    for (let bubbleIndex = 0; bubbleIndex < this.params.bubbleCount; bubbleIndex++) {
      const rng = new SeededRandom(this.params.seed + bubbleIndex);
      const cycleBirthTime = (bubbleIndex * baseInterval) % totalCycleTime;
      const maxLife = rng.uniform(20, 35); // Vida moderada consistente
      const cycleDeathTime = (cycleBirthTime + maxLife) % totalCycleTime;
      
      let shouldExist = false;
      if (cycleDeathTime > cycleBirthTime) {
        shouldExist = (cycleTime >= cycleBirthTime && cycleTime <= cycleDeathTime);
      } else {
        shouldExist = (cycleTime >= cycleBirthTime || cycleTime <= cycleDeathTime);
      }
      
      if (shouldExist) {
        shouldExistCount++;
        
        // Verificar si esta burbuja ya existe
        const existingBubble = this.bubbles.find(b => b.bubbleIndex === bubbleIndex);
        if (!existingBubble) {
          // Crear la burbuja que falta
          let absoluteBirthTime: number;
          if (cycleTime >= cycleBirthTime) {
            absoluteBirthTime = currentTime - (cycleTime - cycleBirthTime);
          } else {
            absoluteBirthTime = currentTime - (cycleTime + totalCycleTime - cycleBirthTime);
          }
          
          this.createBubbleAtExactState(currentTime, bubbleIndex, absoluteBirthTime, maxLife);
        }
      }
    }
  }
  
  private clearAllBubbles(): void {
    // Limpiar todas las burbujas y meshes
    this.bubbleMeshes.forEach(mesh => {
      this.bubbleGroup.remove(mesh);
      if (mesh.material !== this.material && Array.isArray(mesh.material)) {
        mesh.material.forEach(mat => mat.dispose());
      } else if (mesh.material !== this.material) {
        (mesh.material as THREE.Material).dispose();
      }
    });
    
    this.bubbles.length = 0;
    this.bubbleMeshes.length = 0;
  }
  
  private createBubbleAtExactState(currentTime: number, bubbleIndex: number, birthTime: number, maxLife: number): void {
    const rng = new SeededRandom(this.params.seed + bubbleIndex);
    
    // Calcular estado exacto basado en tiempo transcurrido
    const age = currentTime - birthTime;
    const lifeProgress = age / maxLife;
    
    const surfacePoint = this.getProceduralSurfacePoint(bubbleIndex);
    const directionFromCenter = surfacePoint.clone().sub(this.planetCenter).normalize();
    const actualSurfacePoint = directionFromCenter.clone().multiplyScalar(this.planetRadius).add(this.planetCenter);
    
    // Parámetros de la burbuja (constantes para este índice)
    const riseSpeed = this.params.riseSpeed * 0.3 * rng.uniform(0.7, 1.3); // Velocidad moderada
    const maxSize = this.params.bubbleSize * rng.uniform(1.2, 1.8);
    const emergenceSpeed = rng.uniform(0.3, 0.6); // Emergencia en 2-3 segundos
    const fadeInSpeed = rng.uniform(0.8, 1.5); // Fade in en 1-2 segundos
    
    // Calcular estado actual
    const emergencePhase = Math.min(1.0, age * emergenceSpeed);
    const isFullyEmerged = emergencePhase >= 1.0;
    const fadeInPhase = Math.min(1.0, age * fadeInSpeed);
    
    // Posición actual
    const position = surfacePoint.clone();
    const emergenceFactor = THREE.MathUtils.smoothstep(emergencePhase, 0, 1);
    const displacement = directionFromCenter.clone().multiplyScalar(age * riseSpeed * emergenceFactor);
    position.add(displacement);
    
    // Tamaño actual
    const sizeEmergenceFactor = THREE.MathUtils.smoothstep(emergencePhase, 0, 1);
    const baseSize = maxSize * 0.1;
    const size = THREE.MathUtils.lerp(
      baseSize,
      maxSize,
      sizeEmergenceFactor * Math.min(lifeProgress * 2, 1)
    );
    
    // Crear la burbuja con estado calculado
    const bubble: Bubble = {
      position: position,
      velocity: directionFromCenter.multiplyScalar(riseSpeed),
      size: size,
      maxSize: maxSize,
      life: age, // Tiempo cósmico total desde nacimiento
      animationTime: 0, // Iniciar tiempo de animación en 0 (será actualizado por deltaTime)
      maxLife: maxLife,
      originalSurfacePoint: actualSurfacePoint,
      wobbleOffset: new THREE.Vector3(rng.uniform(-1, 1), rng.uniform(-1, 1), rng.uniform(-1, 1)).normalize(),
      wobbleSpeed: rng.uniform(0.8, 1.5),
      wobbleAmplitude: rng.uniform(0.002, 0.008),
      startOpacity: 0,
      hasPopped: false,
      emergencePhase: emergencePhase,
      emergenceSpeed: emergenceSpeed,
      isFullyEmerged: isFullyEmerged,
      fadeInPhase: fadeInPhase,
      fadeInSpeed: fadeInSpeed,
      bubbleIndex: bubbleIndex,
      birthTime: birthTime,
      popPhase: 0,
      popStartTime: 0,
    };
    
    this.bubbles.push(bubble);
    
    // Crear mesh con estado visual correcto
    const bubbleMaterial = this.material.clone();
    bubbleMaterial.opacity = fadeInPhase * this.params.opacity;
    const bubbleMesh = new THREE.Mesh(this.geometry, bubbleMaterial);
    bubbleMesh.position.copy(bubble.position);
    bubbleMesh.scale.setScalar(bubble.size);
    
    this.bubbleMeshes.push(bubbleMesh);
    this.bubbleGroup.add(bubbleMesh);
  }

  public addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.planetCenter.copy(planetPosition);
      this.bubbleGroup.position.copy(planetPosition);
    }
    scene.add(this.bubbleGroup);
    
    console.log("ToxicSwampBubbles: Added to scene:", {
      planetPosition: planetPosition?.toArray(),
      planetCenter: this.planetCenter.toArray(),
      bubbleGroupPosition: this.bubbleGroup.position.toArray(),
      sceneChildren: scene.children.length,
      bubbleGroupVisible: this.bubbleGroup.visible
    });
  }

  public removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.bubbleGroup);
  }

  public dispose(): void {
    // Clean up geometry and materials
    this.geometry.dispose();
    this.material.dispose();
    
    // Clean up all bubble meshes
    this.bubbleMeshes.forEach(mesh => {
      this.bubbleGroup.remove(mesh);
      
      // Dispose individual materials
      if (mesh.material !== this.material) {
        (mesh.material as THREE.Material).dispose();
      }
      
      if (mesh.geometry !== this.geometry) {
        mesh.geometry.dispose();
      }
    });
    
    // Clear arrays
    this.bubbles.length = 0;
    this.bubbleMeshes.length = 0;
  }

  public setEnabled(enabled: boolean): void {
    this.bubbleGroup.visible = enabled;
  }

  public isEnabled(): boolean {
    return this.bubbleGroup.visible;
  }

  // Get current bubble count for debugging
  public getBubbleCount(): number {
    return this.bubbles.length;
  }
}

// Factory function for creating from Python data
export function createToxicSwampBubblesFromPythonData(
  planetRadius: number,
  surface: any,
  seed: number,
  cosmicOriginTime?: number
): ToxicSwampBubblesEffect | null {
  console.log("createToxicSwampBubblesFromPythonData called:", {
    planetRadius,
    surface: surface,
    hasToxicBubbles: !!surface.toxic_bubbles,
    seed
  });
  
  if (!surface.toxic_bubbles) {
    console.log("No toxic_bubbles data found in surface:", surface);
    return null; // No bubble data from Python
  }

  const bubbleData = surface.toxic_bubbles;
  console.log("Creating ToxicSwampBubblesEffect with data:", bubbleData);

  return new ToxicSwampBubblesEffect(planetRadius, {
    // Don't pass bubbleCount, bubbleSize, riseSpeed, etc. - let PROCEDURAL_RANGES handle it
    bubbleColor: bubbleData.color ? new THREE.Color(
      bubbleData.color[0],
      bubbleData.color[1],
      bubbleData.color[2]
    ) : undefined, // Let constructor use default
    seed: seed,
    planetType: "SWAMP", // This will use SWAMP PROCEDURAL_RANGES
    cosmicOriginTime: cosmicOriginTime, // Tiempo determin\u00edstico desde sistema
    timeSpeed: 1.0, // Velocidad normal del tiempo
  });
}