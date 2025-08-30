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
    BUBBLE_COUNT: { min: 15, max: 25 }, // Target amount of bubbles
    BUBBLE_SIZE: { min: 0.0003, max: 0.0008 }, // Extremely tiny bubbles like methane gas
    RISE_SPEED: { min: 0.005, max: 0.012 }, // Much slower organic movement
    EXPANSION_RATE: { min: 0.002, max: 0.004 }, // Much slower expansion
    POP_DISTANCE: { min: 0.2, max: 0.35 }, // Pop at reasonable distance
    OPACITY: { min: 0.3, max: 0.5 }, // More transparent
    EMISSION_RATE: { min: 3.0, max: 5.0 }, // Higher rate for truly continuous flow
  },
};

interface Bubble {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  size: number;
  maxSize: number;
  life: number;
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
  popStartTime: number; // When popping started
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
  private globalTime: number = 0; // Track global time for procedural patterns
  private nextBubbleIndex: number = 0; // Unique index for each bubble
  private bubbleSpawnTimer: number = 0;
  private debugLogTimer: number = 0; // Timer for controlled spawning

  constructor(planetRadius: number, params: ToxicSwampBubblesParams = {}) {
    this.planetRadius = planetRadius;
    this.rng = new SeededRandom(params.seed || Math.random() * 1000000);
    
    // Select ranges based on planet type
    const planetType = params.planetType || "SWAMP";
    const ranges = PROCEDURAL_RANGES[planetType];
    
    // Set default parameters using procedural ranges
    this.params = {
      bubbleCount: params.bubbleCount || this.rng.randint(ranges.BUBBLE_COUNT.min, ranges.BUBBLE_COUNT.max),
      bubbleSize: params.bubbleSize || planetRadius * this.rng.uniform(ranges.BUBBLE_SIZE.min, ranges.BUBBLE_SIZE.max),
      riseSpeed: params.riseSpeed || this.rng.uniform(ranges.RISE_SPEED.min, ranges.RISE_SPEED.max),
      expansionRate: params.expansionRate || this.rng.uniform(ranges.EXPANSION_RATE.min, ranges.EXPANSION_RATE.max),
      popDistance: params.popDistance || planetRadius * this.rng.uniform(ranges.POP_DISTANCE.min, ranges.POP_DISTANCE.max),
      bubbleColor: params.bubbleColor || new THREE.Color(0x4d7c0f), // Dark swampy green with transparency
      opacity: params.opacity || this.rng.uniform(ranges.OPACITY.min, ranges.OPACITY.max),
      emissionRate: params.emissionRate || this.rng.uniform(ranges.EMISSION_RATE.min, ranges.EMISSION_RATE.max),
      seed: params.seed || Math.random() * 1000000,
      planetType,
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
    this.geometry = new THREE.SphereGeometry(1, 12, 8); // Slightly higher poly for smoother appearance
  }
  
  private createInitialBubbles(): void {
    // Fill the scene with bubbles at different life stages
    const initialBubbleCount = Math.floor(this.params.bubbleCount * 0.8);
    
    for (let i = 0; i < initialBubbleCount; i++) {
      this.createBubble();
      
      // Distribute bubbles across their entire lifecycle
      const bubble = this.bubbles[this.bubbles.length - 1];
      const lifeProgress = (i / initialBubbleCount);
      
      // Set different life stages
      bubble.life = bubble.maxLife * lifeProgress * 0.8; // Up to 80% of max life
      bubble.emergencePhase = Math.min(1.0, lifeProgress * 2);
      bubble.isFullyEmerged = bubble.emergencePhase >= 1.0;
      bubble.fadeInPhase = bubble.emergencePhase;
      
      // Update size based on life
      const growthFactor = bubble.life / bubble.maxLife;
      bubble.size = THREE.MathUtils.lerp(
        this.params.bubbleSize * 0.5,
        bubble.maxSize,
        growthFactor * growthFactor
      );
      
      // Move them to their current position
      const directionFromCenter = bubble.position.clone().sub(this.planetCenter).normalize();
      const distance = bubble.emergencePhase * this.planetRadius * 0.4;
      bubble.position.add(directionFromCenter.multiplyScalar(distance));
    }
    
    console.log(`Created ${initialBubbleCount} initial bubbles for immediate effect`);
  }
  
  private getProceduralSurfacePoint(bubbleIndex: number): THREE.Vector3 {
    // Use marching cubes-style mathematical patterns for organic bubble placement
    // Similar to: ballx = Math.sin(i + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * 0.27 + 0.5
    
    const i = bubbleIndex;
    const time = this.globalTime * 0.5; // Slow time factor for organic movement
    
    // Generate procedural coordinates using complex sin/cos patterns
    // These create organic, non-repeating patterns across the sphere surface
    const theta = Math.sin(i * 0.618 + 1.26 * time * (1.03 + 0.5 * Math.cos(0.21 * i))) * Math.PI * 2;
    const phi = Math.abs(Math.cos(i * 0.382 + 1.12 * time * Math.cos(1.22 + 0.1424 * i))) * Math.PI;
    
    // Add some noise for variation
    const noiseTheta = Math.sin(i * 1.32 + time * 0.1 * Math.sin((0.92 + 0.53 * i))) * 0.3;
    const noisePhi = Math.cos(i * 2.43 + time * 0.15 * Math.cos((1.37 + 0.29 * i))) * 0.2;
    
    const finalTheta = theta + noiseTheta;
    const finalPhi = phi + noisePhi;
    
    // Start bubbles INSIDE the planet surface - they'll emerge outward
    // Depth varies procedurally too for more organic emergence
    const depthVariation = 0.5 + 0.3 * Math.sin(i * 0.73 + time * 0.2);
    const startDepth = this.planetRadius * depthVariation; // Start 20-80% inside planet
    
    const x = startDepth * Math.sin(finalPhi) * Math.cos(finalTheta);
    const y = startDepth * Math.sin(finalPhi) * Math.sin(finalTheta);
    const z = startDepth * Math.cos(finalPhi);
    
    return new THREE.Vector3(x, y, z).add(this.planetCenter);
  }

  private createBubble(): void {
    // No limit - bubbles will be created continuously as old ones disappear

    const bubbleIndex = this.nextBubbleIndex++;
    const surfacePoint = this.getProceduralSurfacePoint(bubbleIndex);
    const directionFromCenter = surfacePoint.clone().sub(this.planetCenter).normalize();
    
    // Calculate actual surface position for this bubble
    const actualSurfacePoint = directionFromCenter.clone().multiplyScalar(this.planetRadius).add(this.planetCenter);
    
    const bubble: Bubble = {
      position: surfacePoint.clone(), // Start inside the planet
      velocity: directionFromCenter.multiplyScalar(this.params.riseSpeed * 0.3), // Much slower individual bubble rise
      size: this.params.bubbleSize * 0.2, // Start very small
      maxSize: this.params.bubbleSize * this.rng.uniform(1.2, 1.8), // Much smaller max size for swamp bubbles
      life: 0,
      maxLife: this.rng.uniform(8, 12), // Longer lifetime for slower swamp bubbles
      originalSurfacePoint: actualSurfacePoint.clone(),
      wobbleOffset: new THREE.Vector3(
        this.rng.uniform(-1, 1),
        this.rng.uniform(-1, 1), 
        this.rng.uniform(-1, 1)
      ).normalize(),
      wobbleSpeed: this.rng.uniform(0.8, 1.5), // Very slow organic wobble
      wobbleAmplitude: this.rng.uniform(0.002, 0.008), // Subtle wobble
      startOpacity: 0, // Start invisible
      hasPopped: false,
      emergencePhase: 0.1, // Start slightly emerged for immediate visibility
      emergenceSpeed: this.rng.uniform(0.4, 0.8), // Much slower emergence
      isFullyEmerged: false,
      fadeInPhase: 0.3, // Start partially faded in
      fadeInSpeed: this.rng.uniform(1.0, 1.8), // Slower fade in
      bubbleIndex: bubbleIndex,
      birthTime: this.globalTime,
      popPhase: 0,
      popStartTime: 0,
    };

    // Add procedural variation to velocity based on index
    const velocityVariation = Math.sin(bubbleIndex * 0.47) * 0.3 + 1.0;
    bubble.velocity.multiplyScalar(velocityVariation);

    this.bubbles.push(bubble);

    // Create visual mesh for the bubble with its own material instance
    const bubbleMaterial = this.material.clone();
    bubbleMaterial.opacity = 0; // Start invisible
    const bubbleMesh = new THREE.Mesh(this.geometry, bubbleMaterial);
    bubbleMesh.position.copy(bubble.position);
    bubbleMesh.scale.setScalar(bubble.size);
    
    this.bubbleMeshes.push(bubbleMesh);
    this.bubbleGroup.add(bubbleMesh);
    
    // Removed debug logs for cleaner output
  }

  private updateBubbles(deltaTime: number): void {
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const bubble = this.bubbles[i];
      const bubbleMesh = this.bubbleMeshes[i];
      
      // Update bubble life
      bubble.life += deltaTime;
      
      // Calculate distance from planet center
      const distanceFromCenter = bubble.position.distanceTo(this.planetCenter);
      const distanceFromSurface = distanceFromCenter - this.planetRadius;
      
      // Update emergence phase (bubble coming out from inside planet)
      if (!bubble.isFullyEmerged) {
        bubble.emergencePhase = Math.min(1, bubble.emergencePhase + deltaTime * bubble.emergenceSpeed);
        if (bubble.emergencePhase >= 1) {
          bubble.isFullyEmerged = true;
        }
      }
      
      // Update fade in phase
      if (bubble.fadeInPhase < 1) {
        bubble.fadeInPhase = Math.min(1, bubble.fadeInPhase + deltaTime * bubble.fadeInSpeed);
      }
      
      // Organic procedural wobble using marching cubes-style patterns
      const timeSinceBirth = this.globalTime - bubble.birthTime;
      const wobbleTime = timeSinceBirth * bubble.wobbleSpeed;
      
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
      
      // Size growth based on emergence and life
      const lifeFactor = Math.min(bubble.life / bubble.maxLife, 1);
      const sizeEmergenceFactor = THREE.MathUtils.smoothstep(bubble.emergencePhase, 0, 1);
      
      // Bubble grows as it emerges and over its lifetime
      const baseSize = bubble.maxSize * 0.1; // Start small
      const targetSize = bubble.maxSize;
      
      if (!bubble.hasPopped) {
        bubble.size = THREE.MathUtils.lerp(
          baseSize,
          targetSize,
          sizeEmergenceFactor * Math.min(lifeFactor * 2, 1) // Grow to full size by half lifetime
        );
      } else {
        // Explosion animation - rapid expansion
        const popProgress = bubble.popPhase;
        const explosionScale = 1 + popProgress * 1.5; // Expand up to 2.5x size
        bubble.size = bubble.maxSize * explosionScale;
      }
      
      // Check if bubble should pop
      const shouldPop = (
        distanceFromSurface >= this.params.popDistance ||
        bubble.life >= bubble.maxLife * 0.8 ||
        (bubble.isFullyEmerged && bubble.size >= bubble.maxSize * 0.9)
      );
      
      if (shouldPop && !bubble.hasPopped) {
        bubble.hasPopped = true;
        bubble.popStartTime = this.globalTime;
      }
      
      // Update pop animation
      if (bubble.hasPopped) {
        const timeSincePop = this.globalTime - bubble.popStartTime;
        bubble.popPhase = Math.min(1, timeSincePop * 3); // Quick 0.33 second pop
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
        bubble.life >= bubble.maxLife ||
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
    // Ensure deltaTime is valid
    if (!deltaTime || deltaTime <= 0) {
      deltaTime = 0.016; // Default to 60fps if invalid
    }
    
    // Update global time for procedural patterns (in seconds)
    this.globalTime += deltaTime;
    
    // Update spawn timer
    this.bubbleSpawnTimer += deltaTime;
    
    // Calculate spawn interval for continuous creation
    const baseInterval = 1.0 / this.params.emissionRate;
    
    // Add variation for organic feel
    const timeVariation = Math.sin(this.globalTime * 2.3) * 0.3 + 1.0;
    const adjustedInterval = baseInterval * timeVariation;
    
    // Always spawn bubbles at regular intervals
    if (this.bubbleSpawnTimer >= adjustedInterval) {
      // Always try to maintain target count
      const targetCount = this.params.bubbleCount;
      const currentCount = this.bubbles.length;
      
      // Create bubbles if below target (no upper limit)
      if (currentCount < targetCount) {
        const bubblesNeeded = targetCount - currentCount;
        const bubblesToCreate = Math.min(3, Math.max(1, Math.ceil(bubblesNeeded / 5)));
        
        for (let i = 0; i < bubblesToCreate; i++) {
          this.createBubble();
        }
      } else {
        // Even if at target, create one bubble occasionally for continuous flow
        this.createBubble();
      }
      
      this.bubbleSpawnTimer = 0;
      
      // Add slight randomness
      this.bubbleSpawnTimer -= this.rng.uniform(0, adjustedInterval * 0.05);
    }
    
    // Update existing bubbles
    this.updateBubbles(deltaTime);
    
    // Debug logging every 2 seconds
    this.debugLogTimer += deltaTime;
    if (this.debugLogTimer >= 2.0) {
      console.log('ToxicSwampBubbles status:', {
        bubbleCount: this.bubbles.length,
        targetCount: this.params.bubbleCount,
        spawnTimer: this.bubbleSpawnTimer,
        nextSpawnIn: adjustedInterval - this.bubbleSpawnTimer,
        emissionRate: this.params.emissionRate,
        globalTime: this.globalTime
      });
      this.debugLogTimer = 0;
    }
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
  seed: number
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
    bubbleCount: bubbleData.bubble_count,
    bubbleSize: bubbleData.bubble_size,
    riseSpeed: bubbleData.rise_speed,
    expansionRate: bubbleData.expansion_rate,
    popDistance: bubbleData.pop_distance,
    bubbleColor: bubbleData.color ? new THREE.Color(
      bubbleData.color[0],
      bubbleData.color[1],
      bubbleData.color[2]
    ) : undefined, // Let constructor use default
    opacity: bubbleData.opacity,
    emissionRate: bubbleData.emission_rate,
    seed: seed,
    planetType: "SWAMP",
  });
}