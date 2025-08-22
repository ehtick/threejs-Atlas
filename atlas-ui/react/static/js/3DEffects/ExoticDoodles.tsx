/**
 * Exotic Doodles Effect
 * Large animated doodles/scribbles/squiggles for exotic planets
 */

import * as THREE from 'three';
import { SeededRandom } from '../Utils/SeededRandom';

export interface ExoticDoodlesParams {
  doodles?: Array<{
    position_3d: [number, number, number];
    type: 'arc' | 'fractals' | 'squiggle';
    size: number;
    color: [string, number];  // [hexColor, opacity]
    complexity: number;
    movement_speed: number;
    movement_pattern: 'wave' | 'pulse' | 'spiral';
  }>;
  planetRadius?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  DOODLE_COUNT: { min: 30, max: 48 },
  DOODLE_SIZE: { min: 0.08, max: 0.20 },
  COMPLEXITY: { min: 15, max: 35 },
  MOVEMENT_SPEED: { min: 0.03, max: 0.09 },
  COLOR_HUE: { min: 0.0, max: 1.0 },
  COLOR_SATURATION: { min: 0.6, max: 1.0 },
  COLOR_LIGHTNESS: { min: 0.4, max: 0.9 },
  OPACITY: { min: 0.3, max: 1.0 },
  TIME_SPEED: { min: 0.1, max: 3.0 }, // Rango de velocidades del tiempo para sincronización
  
  // Cosmic Ring Event Timing (unique per planet)
  RING_CYCLE_DURATION: { min: 25, max: 45 }, // Total cycle time (normal + event)
  RING_EVENT_DURATION: { min: 3, max: 8 }, // How long the ring event lasts
  SEPARATION_DURATION: { min: 0.8, max: 2.5 }, // Time to separate from surface
  RETURNING_DURATION: { min: 0.8, max: 2.5 }, // Time to return to surface
};

// Estados del evento cósmico de anillos
type CosmicRingState = 'normal' | 'separating' | 'ring_mode' | 'returning';

export class ExoticDoodlesEffect {
  private group: THREE.Group;
  private doodles: THREE.Object3D[] = [];
  private doodleData: ExoticDoodlesParams['doodles'] = [];
  private planetRadius: number;
  private startTime: number; // Tiempo inicial determinista
  private timeSpeed: number; // Velocidad del tiempo para sincronización
  private rng: SeededRandom;
  private lightDirection: THREE.Vector3 = new THREE.Vector3(1, 1, 1).normalize();
  
  // Sistema de anillos cósmicos
  private cosmicRingState: CosmicRingState = 'normal';
  private ringCycleDuration: number; // Total cycle duration (procedural)
  private ringEventDuration: number; // Ring event duration (procedural)
  private separationDuration: number; // Separation duration (procedural)
  private returningDuration: number; // Return duration (procedural)
  private doodleBasePositions: THREE.Vector3[] = []; // Posiciones originales de cada doodle

  // Create lit material for doodles that respects planet lighting
  private createLitMaterial(color: string, opacity: number): THREE.ShaderMaterial {
    const vertexShader = `
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 color;
      uniform float opacity;
      uniform vec3 lightDirection;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        vec3 lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
        
        // Lambertian lighting with smooth day/night transition
        float dotNL = dot(normal, lightDir);
        float lightingFactor = max(0.0, dotNL); // Simple Lambertian
        
        // Rim lighting for enhanced visibility
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Final lighting calculation with preserved color intensity
        float totalLight = ambientStrength + (lightIntensity * lightingFactor) + rimLight;
        totalLight = clamp(totalLight, 0.6, 1.2); // Higher minimum, allow slight overbrightening
        
        // Preserve color vibrancy by mixing original color with lit color
        vec3 finalColor = mix(color * 0.8, color * totalLight, 0.7);
        
        gl_FragColor = vec4(finalColor, opacity);
      }
    `;

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        color: { value: new THREE.Color(color) },
        opacity: { value: opacity },
        lightDirection: { value: this.lightDirection.clone() },
        ambientStrength: { value: 0.5 },
        lightIntensity: { value: 0.8 }
      },
      transparent: true,
      side: THREE.DoubleSide
    });
  }

  // Helper function to project points onto sphere surface
  private projectPointOnSphere(localX: number, localY: number, radius: number, baseDirection: THREE.Vector3): THREE.Vector3 {
    // baseDirection is the unit vector from planet center towards doodle position
    const normal = baseDirection.clone().normalize();
    const tangent = new THREE.Vector3(0, 1, 0).cross(normal).normalize();
    
    // If normal is parallel to Y axis, use X axis instead
    if (tangent.lengthSq() < 0.001) {
      tangent.set(1, 0, 0).cross(normal).normalize();
    }
    
    const bitangent = normal.clone().cross(tangent).normalize();

    // Create local position on tangent plane
    const localPosition = tangent.clone().multiplyScalar(localX)
      .add(bitangent.clone().multiplyScalar(localY));
    
    // Project onto sphere surface by normalizing and scaling to radius
    const surfacePosition = normal.clone().add(localPosition).normalize().multiplyScalar(radius);
    
    return surfacePosition;
  }

  constructor(planetRadius: number, params: ExoticDoodlesParams = {}, seed?: number) {
    this.group = new THREE.Group();
    this.planetRadius = planetRadius;
    
    const actualSeed = seed || 12345;
    this.rng = new SeededRandom(actualSeed);
    
    // Tiempo inicial determinista basado en el seed (igual que PulsatingCube)
    this.startTime = (actualSeed % 10000) / 1000;
    
    // Velocidad del tiempo para sincronización
    this.timeSpeed = this.rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max);
    
    // Generate unique cosmic ring event timing for this planet
    this.ringEventDuration = this.rng.uniform(PROCEDURAL_RANGES.RING_EVENT_DURATION.min, PROCEDURAL_RANGES.RING_EVENT_DURATION.max);
    this.separationDuration = this.rng.uniform(PROCEDURAL_RANGES.SEPARATION_DURATION.min, PROCEDURAL_RANGES.SEPARATION_DURATION.max);
    this.returningDuration = this.rng.uniform(PROCEDURAL_RANGES.RETURNING_DURATION.min, PROCEDURAL_RANGES.RETURNING_DURATION.max);
    
    // Total cycle duration = normal time + event time
    const normalTime = this.rng.uniform(PROCEDURAL_RANGES.RING_CYCLE_DURATION.min, PROCEDURAL_RANGES.RING_CYCLE_DURATION.max);
    this.ringCycleDuration = normalTime + this.ringEventDuration;
    
    // Always generate procedurally using PROCEDURAL_RANGES
    // This ensures PROCEDURAL_RANGES changes affect the visual output
    this.doodleData = this.generateProceduralDoodles();

    if (this.doodleData.length > 0) {
      this.createDoodles();
    }
  }

  private generateProceduralDoodles(): ExoticDoodlesParams['doodles'] {
    const doodles: NonNullable<ExoticDoodlesParams['doodles']> = [];
    const doodleCount = this.rng.randint(
      PROCEDURAL_RANGES.DOODLE_COUNT.min, 
      PROCEDURAL_RANGES.DOODLE_COUNT.max
    );
    
    const doodleTypes: Array<'arc' | 'fractals' | 'squiggle'> = ['arc', 'fractals', 'squiggle'];
    const movementPatterns: Array<'wave' | 'pulse' | 'spiral'> = ['wave', 'pulse', 'spiral'];
    
    for (let i = 0; i < doodleCount; i++) {
      // Generate uniform position on sphere
      const theta = this.rng.random() * 2 * Math.PI;
      const phi = Math.acos(this.rng.random() * 2 - 1);
      
      const position_3d: [number, number, number] = [
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      ];
      
      // Generate vibrant colors EXACTLY like Python code (line 2120)
      // Python: f"#{rng.randint(200, 255):02x}{rng.randint(0, 100):02x}{rng.randint(150, 255):02x}"
      const r = this.rng.randint(200, 255);  // R: 200-255 (bright reds/magentas)
      const g = this.rng.randint(0, 100);    // G: 0-100 (low green)  
      const b = this.rng.randint(150, 255);  // B: 150-255 (bright blues)
      const opacity = this.rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max);
      
      // Convert to hex string like Python, then to Three.js color
      const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      console.log(`ExoticDoodle ${i}: ${hexColor} (RGB: ${r}, ${g}, ${b})`);
      
      doodles.push({
        position_3d,
        type: doodleTypes[this.rng.randint(0, doodleTypes.length - 1)],
        size: this.rng.uniform(PROCEDURAL_RANGES.DOODLE_SIZE.min, PROCEDURAL_RANGES.DOODLE_SIZE.max),
        color: [hexColor, opacity],  // Pass hex string instead of RGB array
        complexity: this.rng.randint(PROCEDURAL_RANGES.COMPLEXITY.min, PROCEDURAL_RANGES.COMPLEXITY.max),
        movement_speed: this.rng.uniform(PROCEDURAL_RANGES.MOVEMENT_SPEED.min, PROCEDURAL_RANGES.MOVEMENT_SPEED.max),
        movement_pattern: movementPatterns[this.rng.randint(0, movementPatterns.length - 1)]
      });
    }
    
    return doodles;
  }


  private createDoodles(): void {
    this.doodleData.forEach((doodle, index) => {
      let doodleObject: THREE.Object3D;

      switch (doodle.type) {
        case 'arc':
          doodleObject = this.createArcDoodle(doodle);
          break;
        case 'fractals':
          doodleObject = this.createFractalDoodle(doodle);
          break;
        case 'squiggle':
          doodleObject = this.createSquiggleDoodle(doodle);
          break;
        default:
          doodleObject = this.createSquiggleDoodle(doodle);
      }

      // Store base position for cosmic ring events (center of doodle area)
      const baseDirection = new THREE.Vector3(...doodle.position_3d).normalize();
      this.doodleBasePositions[index] = baseDirection.multiplyScalar(this.planetRadius);

      // No need to position or orient - geometry is already projected onto sphere surface
      this.doodles.push(doodleObject);
      this.group.add(doodleObject);
    });
  }

  private createArcDoodle(doodle: NonNullable<ExoticDoodlesParams['doodles']>[0]): THREE.Object3D {
    const group = new THREE.Group();
    
    // Create arc using curve
    const curve = new THREE.EllipseCurve(
      0, 0,                              // Center
      doodle.size * this.planetRadius,   // xRadius
      doodle.size * this.planetRadius * 0.7, // yRadius
      0, Math.PI * 1.5,                  // Start and end angle
      false,                              // clockwise
      0                                   // Rotation
    );

    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    const material = this.createLitMaterial(doodle.color[0], doodle.color[1]);

    const arc = new THREE.Line(geometry, material);
    group.add(arc);

    return group;
  }

  private createFractalDoodle(doodle: NonNullable<ExoticDoodlesParams['doodles']>[0]): THREE.Object3D {
    const group = new THREE.Group();
    
    // Create chaotic scribbled circles and loops that follow sphere curvature
    const numElements = Math.floor(doodle.complexity * 0.6) + 2; // 2-15 elements
    const baseDirection = new THREE.Vector3(...doodle.position_3d);
    const radius = this.planetRadius;
    
    for (let i = 0; i < numElements; i++) {
      // Random position for each scribbled element
      const centerX = (this.rng.random() - 0.5) * doodle.size * this.planetRadius;
      const centerY = (this.rng.random() - 0.5) * doodle.size * this.planetRadius;
      
      // Create irregular, hand-drawn looking circles/loops
      const points: THREE.Vector3[] = [];
      const numPoints = Math.floor(this.rng.random() * 20) + 8; // 8-28 points
      const baseCircleRadius = this.rng.random() * doodle.size * this.planetRadius * 0.3 + 0.1;
      
      for (let j = 0; j <= numPoints; j++) {
        const angle = (j / numPoints) * Math.PI * 2;
        
        // Add irregularity to make it look hand-drawn
        const radiusVariation = baseCircleRadius * (0.7 + this.rng.random() * 0.6);
        const angleJitter = angle + (this.rng.random() - 0.5) * 0.5;
        
        const localX = centerX + Math.cos(angleJitter) * radiusVariation;
        const localY = centerY + Math.sin(angleJitter) * radiusVariation;
        
        // Project point onto sphere surface
        const pointOnSphere = this.projectPointOnSphere(localX, localY, radius, baseDirection);
        points.push(pointOnSphere);
      }
      
      // Close the loop
      points.push(points[0]);
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = this.createLitMaterial(doodle.color[0], doodle.color[1]);

      const line = new THREE.Line(geometry, material);
      group.add(line);
    }

    return group;
  }

  private createSquiggleDoodle(doodle: NonNullable<ExoticDoodlesParams['doodles']>[0]): THREE.Object3D {
    const group = new THREE.Group();
    
    // Create random scribble-like lines that follow sphere curvature
    const numStrokes = Math.floor(doodle.complexity * 0.8) + 3; // 3-20 random strokes
    const baseDirection = new THREE.Vector3(...doodle.position_3d);
    const radius = this.planetRadius;
    
    for (let stroke = 0; stroke < numStrokes; stroke++) {
      const points: THREE.Vector3[] = [];
      const strokeLength = this.rng.random() * 15 + 5; // 5-20 points per stroke
      
      // Start each stroke at a random position
      let currentX = (this.rng.random() - 0.5) * doodle.size * this.planetRadius;
      let currentY = (this.rng.random() - 0.5) * doodle.size * this.planetRadius;
      
      for (let i = 0; i <= strokeLength; i++) {
        // Project current position onto sphere surface
        const pointOnSphere = this.projectPointOnSphere(currentX, currentY, radius, baseDirection);
        points.push(pointOnSphere);
        
        // Add random movement (chaotic like real scribbles)
        currentX += (this.rng.random() - 0.5) * doodle.size * this.planetRadius * 0.2;
        currentY += (this.rng.random() - 0.5) * doodle.size * this.planetRadius * 0.2;
        
        // Keep within bounds
        const maxSize = doodle.size * this.planetRadius * 0.8;
        currentX = Math.max(-maxSize, Math.min(maxSize, currentX));
        currentY = Math.max(-maxSize, Math.min(maxSize, currentY));
      }

      // Create the scribble line
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = this.createLitMaterial(doodle.color[0], doodle.color[1]);

      const line = new THREE.Line(geometry, material);
      group.add(line);
    }

    return group;
  }

  update(_deltaTime: number): void {
    // Sistema de tiempo determinista sincronizado con PulsatingCube
    const rawTime = this.startTime + (Date.now() / 1000) * this.timeSpeed;
    const currentTime = rawTime % 1000; // Mantener el tiempo en un ciclo de 1000 segundos

    // Determinar estado del evento cósmico
    const cycleTime = currentTime % this.ringCycleDuration;
    this.updateCosmicRingState(cycleTime);

    // Animate doodles based on their movement patterns and cosmic state
    this.doodles.forEach((doodle, index) => {
      const data = this.doodleData[index];
      if (!data) return;

      // Calculate cosmic ring effect
      const ringEffect = this.calculateCosmicRingEffect(cycleTime, index);
      
      // ALWAYS calculate both positions for continuity
      const surfacePosition = new THREE.Vector3(0, 0, 0); // Surface position (geometry handles projection)
      
      // Calculate target ring position - but use consistent timing
      const basePos = this.doodleBasePositions[index];
      const ringLayer = index % 3;
      const targetSeparationDistance = this.planetRadius * 2.5; // Fixed target distance
      const layerOffset = ringLayer * 0.3 * this.planetRadius;
      const targetRingPos = basePos.clone().normalize().multiplyScalar(targetSeparationDistance + layerOffset);
      
      // ALWAYS use current time for ring calculation to ensure continuity
      // The key is that ring position is ALWAYS calculated the same way
      const ringCalculationTime = currentTime;
      
      const baseAngle = ringCalculationTime * 12; // Use ring-mode speed
      const layerSpeedMultiplier = 1 + ringLayer * 0.4;
      const targetAngle = baseAngle * layerSpeedMultiplier + index * (Math.PI * 2 / this.doodles.length);
      const ringRadius = targetSeparationDistance * 0.08;
      
      const tangent = new THREE.Vector3().crossVectors(targetRingPos, new THREE.Vector3(0, 1, 0)).normalize();
      if (tangent.lengthSq() < 0.001) {
        tangent.set(1, 0, 0).cross(targetRingPos.clone().normalize()).normalize();
      }
      const bitangent = new THREE.Vector3().crossVectors(targetRingPos.clone().normalize(), tangent).normalize();
      
      const targetRingPosition = targetRingPos.clone()
        .add(tangent.multiplyScalar(Math.cos(targetAngle) * ringRadius))
        .add(bitangent.multiplyScalar(Math.sin(targetAngle) * ringRadius));
      
      // NOW apply smooth interpolation between surface and ring based on separation factor
      let finalPosition: THREE.Vector3;
      
      if (ringEffect.separationFactor <= 0.001) {
        // On surface
        finalPosition = surfacePosition.clone();
      } else {
        // Interpolate between surface and ring position
        let lerpFactor = ringEffect.separationFactor;
        
        // Apply different easing based on current state for smoother transitions
        if (this.cosmicRingState === 'separating') {
          lerpFactor = this.easeOutQuart(lerpFactor);
        } else if (this.cosmicRingState === 'returning') {
          lerpFactor = this.easeInOutCubic(lerpFactor);
        }
        // ring_mode uses linear interpolation (no additional easing needed)
        
        finalPosition = surfacePosition.clone().lerp(targetRingPosition, lerpFactor);
      }
      
      doodle.position.copy(finalPosition);

      // Speed multiplier based on cosmic state
      const speed = data.movement_speed * ringEffect.speedMultiplier;
      
      switch (data.movement_pattern) {
        case 'wave':
          // Gentle wave motion - only rotate around surface normal (Z axis)
          doodle.rotation.z = Math.sin(currentTime * speed) * 0.2;
          break;
          
        case 'pulse':
          // Gentle rotation instead of scale to avoid projecting outside surface
          doodle.rotation.z = Math.sin(currentTime * speed * 2) * 0.15;
          break;
          
        case 'spiral':
          // Continuous rotation using absolute time
          doodle.rotation.z = currentTime * speed;
          break;
      }
    });
  }

  // Update cosmic ring state based on cycle time
  private updateCosmicRingState(cycleTime: number): void {
    const normalDuration = this.ringCycleDuration - this.ringEventDuration;
    
    if (cycleTime < normalDuration) {
      this.cosmicRingState = 'normal';
    } else if (cycleTime < normalDuration + this.separationDuration) {
      this.cosmicRingState = 'separating';
    } else if (cycleTime < normalDuration + this.separationDuration + (this.ringEventDuration - this.separationDuration - this.returningDuration)) {
      this.cosmicRingState = 'ring_mode';
    } else {
      this.cosmicRingState = 'returning';
    }
  }

  // Calculate cosmic ring effect parameters
  private calculateCosmicRingEffect(cycleTime: number, doodleIndex: number): {
    separationFactor: number;
    orbitalSpeed: number;
    speedMultiplier: number;
  } {
    const normalDuration = this.ringCycleDuration - this.ringEventDuration;
    let separationFactor = 0;
    let orbitalSpeed = 0;
    let speedMultiplier = 1;

    switch (this.cosmicRingState) {
      case 'normal':
        separationFactor = 0;
        orbitalSpeed = 0;
        speedMultiplier = 1;
        break;

      case 'separating':
        const separatingProgress = (cycleTime - normalDuration) / this.separationDuration;
        // Ultra-smooth acceleration outward
        separationFactor = this.easeOutQuart(separatingProgress);
        orbitalSpeed = 12; // ALWAYS use full orbital speed - let interpolation handle it
        speedMultiplier = 1 + separationFactor * 7; // Smooth speed increase to ring level
        break;

      case 'ring_mode':
        separationFactor = 1; // Full separation
        orbitalSpeed = 12; // MUCH faster orbital motion - this is the spectacular part!
        speedMultiplier = 8; // Much faster individual rotation
        break;

      case 'returning':
        const returningStart = normalDuration + this.separationDuration + (this.ringEventDuration - this.separationDuration - this.returningDuration);
        const returningProgress = (cycleTime - returningStart) / this.returningDuration;
        // Ultra-smooth return
        const smoothReturn = this.easeInQuart(returningProgress);
        separationFactor = 1 - smoothReturn;
        orbitalSpeed = 12; // ALWAYS use full orbital speed - let interpolation handle it
        speedMultiplier = 1 + separationFactor * 7; // Smooth speed decrease from ring level
        break;
    }

    // Add slight delay/variation per doodle for more organic effect
    const doodleDelayFactor = (doodleIndex / this.doodles.length) * 0.3; // 30% of transition time
    
    // Apply delay only during transitions with ultra-smooth curves
    if (this.cosmicRingState === 'separating') {
      const adjustedProgress = Math.max(0, (cycleTime - normalDuration - doodleDelayFactor * this.separationDuration) / this.separationDuration);
      separationFactor = this.easeOutQuart(adjustedProgress);
    } else if (this.cosmicRingState === 'returning') {
      const returningStart = normalDuration + this.separationDuration + (this.ringEventDuration - this.separationDuration - this.returningDuration);
      const adjustedProgress = Math.max(0, (cycleTime - returningStart - doodleDelayFactor * this.returningDuration) / this.returningDuration);
      separationFactor = 1 - this.easeInQuart(adjustedProgress);
    }

    return {
      separationFactor,
      orbitalSpeed,
      speedMultiplier
    };
  }

  // Smooth step function for transitions
  private smoothstep(edge0: number, edge1: number, x: number): number {
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  // Ease-in-out function for ultra-smooth animations (cubic bezier-like)
  private easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // Ease-out function for smooth deceleration
  private easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4);
  }

  // Ease-in function for smooth acceleration
  private easeInQuart(t: number): number {
    return t * t * t * t;
  }

  // Update light direction for all doodle materials
  updateLightDirection(direction: THREE.Vector3): void {
    this.lightDirection.copy(direction).normalize();
    
    // Update all doodle materials
    this.doodles.forEach(doodle => {
      doodle.traverse((child) => {
        if (child instanceof THREE.Line && child.material instanceof THREE.ShaderMaterial) {
          if (child.material.uniforms.lightDirection) {
            child.material.uniforms.lightDirection.value.copy(this.lightDirection);
          }
        }
      });
    });
  }

  // Update from Three.js DirectionalLight - interface expected by EffectRegistry
  updateFromThreeLight(light: THREE.DirectionalLight): void {
    const direction = light.position.clone().normalize();
    this.updateLightDirection(direction);
  }

  addToScene(scene: THREE.Scene, planetPosition: THREE.Vector3): void {
    this.group.position.copy(planetPosition);
    scene.add(this.group);
  }

  removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.group);
  }

  getObject3D(): THREE.Object3D {
    return this.group;
  }

  dispose(): void {
    this.doodles.forEach(doodle => {
      doodle.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (child.material instanceof THREE.Material) {
            child.material.dispose();
          }
        } else if (child instanceof THREE.Line) {
          child.geometry.dispose();
          if (child.material instanceof THREE.Material) {
            child.material.dispose();
          }
        }
      });
    });
    this.doodles = [];
  }
}

export function createExoticDoodlesFromPythonData(
  planetRadius: number,
  _surfaceElements?: any,  // Optional and unused
  seed?: number
): ExoticDoodlesEffect | null {
  
  // Always create doodles procedurally using PROCEDURAL_RANGES
  // No need to check for data from Python since we generate everything
  return new ExoticDoodlesEffect(planetRadius, {
    planetRadius: planetRadius
  }, seed);
}