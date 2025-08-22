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
  DOODLE_COUNT: { min: 24, max: 32 },
  DOODLE_SIZE: { min: 0.08, max: 0.20 },
  COMPLEXITY: { min: 15, max: 35 },
  MOVEMENT_SPEED: { min: 0.03, max: 0.09 },
  COLOR_HUE: { min: 0.0, max: 1.0 },
  COLOR_SATURATION: { min: 0.6, max: 1.0 },
  COLOR_LIGHTNESS: { min: 0.4, max: 0.9 },
  OPACITY: { min: 0.3, max: 1.0 }
};

export class ExoticDoodlesEffect {
  private group: THREE.Group;
  private doodles: THREE.Object3D[] = [];
  private doodleData: ExoticDoodlesParams['doodles'] = [];
  private planetRadius: number;
  private time: number = 0;
  private rng: SeededRandom;
  private lightDirection: THREE.Vector3 = new THREE.Vector3(1, 1, 1).normalize();

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
    this.rng = new SeededRandom(seed || 12345);
    
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
    this.doodleData.forEach((doodle) => {
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

  update(deltaTime: number): void {
    this.time += deltaTime;

    // Animate doodles based on their movement patterns
    this.doodles.forEach((doodle, index) => {
      const data = this.doodleData[index];
      if (!data) return;

      const speed = data.movement_speed;
      
      switch (data.movement_pattern) {
        case 'wave':
          // Gentle wave motion - only rotate around surface normal (Z axis)
          doodle.rotation.z = Math.sin(this.time * speed) * 0.2;
          break;
          
        case 'pulse':
          // Gentle rotation instead of scale to avoid projecting outside surface
          doodle.rotation.z = Math.sin(this.time * speed * 2) * 0.15;
          break;
          
        case 'spiral':
          // Continuous rotation
          doodle.rotation.z += speed * deltaTime;
          break;
      }
    });
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