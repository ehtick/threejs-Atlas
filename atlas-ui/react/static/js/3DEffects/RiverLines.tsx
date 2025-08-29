/**
 * ULTRA SIMPLE River Lines Effect - Just basic dried river channels
 *
 * Creates the simplest possible curved lines that look like dried creek beds.
 * No complex algorithms, just clean brown lines that curve naturally.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";

export interface RiverLinesParams {
  riverCount?: number; // Number of river lines (2-4)
  color?: number[] | THREE.Color; // Dried riverbed color (brown/tan)
  opacity?: number; // Line transparency
  elevation?: number; // Height above planet surface
  seed?: number; // Random seed
}

// Rangos para generación procedural de ríos secos
const PROCEDURAL_RANGES = {
  RIVER_COUNT: { min: 20, max: 30 }, // 2-4 ríos por planeta
  OPACITY: { min: 0.01, max: 0.04 }, // Opacidad moderada para ríos secos
  ELEVATION: { min: -0.015, max: -0.010 }, // Mucho más abajo, canales profundos
  THICKNESS: { min: 4, max: 12 }, // Factor de grosor para radio del tubo
  SEGMENTS: { min: 40, max: 80 }, // Más segmentos para ríos más largos
  CURVE_AMOUNT: { min: 0.05, max: 0.25 }, // Cantidad de curvatura natural
  STEP_SIZE: { min: 0.02, max: 0.08 } // Pasos más pequeños = ríos más largos
};

/**
 * Ultra Simple Dried River Lines - Back to absolute basics
 */
export class RiverLinesEffect {
  private riverGroup: THREE.Group;
  private riverLines: THREE.Group[] = [];
  private params: RiverLinesParams;
  private rng: SeededRandom;

  constructor(planetRadius: number, params: RiverLinesParams = {}) {
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);

    this.params = {
      riverCount: params.riverCount || this.rng.randint(PROCEDURAL_RANGES.RIVER_COUNT.min, PROCEDURAL_RANGES.RIVER_COUNT.max),
      color: params.color || null, // Usar color del planeta por defecto
      opacity: params.opacity || this.rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      elevation: params.elevation || this.rng.uniform(PROCEDURAL_RANGES.ELEVATION.min, PROCEDURAL_RANGES.ELEVATION.max),
      seed
    };

    this.riverGroup = new THREE.Group();
    this.generateBasicRivers(planetRadius);
  }

  private generateBasicRivers(planetRadius: number): void {
    const elevatedRadius = planetRadius + (planetRadius * this.params.elevation!);
    
    for (let i = 0; i < this.params.riverCount!; i++) {
      const riverLine = this.createSingleRiver(elevatedRadius, i);
      if (riverLine) {
        this.riverLines.push(riverLine);
        this.riverGroup.add(riverLine);
      }
    }
  }

  private createSingleRiver(radius: number, riverIndex: number): THREE.Group | null {
    // Start from random position, avoiding poles
    const startLat = this.rng.uniform(-0.6, 0.6);
    const startLon = this.rng.uniform(0, Math.PI * 2);
    
    // Create starting point
    let currentPos = new THREE.Vector3(
      Math.cos(startLon) * Math.cos(startLat) * radius,
      Math.sin(startLat) * radius,
      Math.sin(startLon) * Math.cos(startLat) * radius
    );
    
    const points: THREE.Vector3[] = [currentPos.clone()];
    
    // Simple direction - just pick a random tangent direction
    let direction = this.getRandomTangentDirection(currentPos, radius);
    
    // Create longer, denser river with more segments for thickness
    const segments = this.rng.randint(PROCEDURAL_RANGES.SEGMENTS.min, PROCEDURAL_RANGES.SEGMENTS.max);
    
    for (let i = 1; i < segments; i++) {
      const progress = i / segments;
      
      // Add varied curves - múltiples tipos de curvatura
      const curveStrength = this.rng.uniform(PROCEDURAL_RANGES.CURVE_AMOUNT.min, PROCEDURAL_RANGES.CURVE_AMOUNT.max);
      
      // Diferentes tipos de curvatura
      const curveType = this.rng.uniform(0, 1);
      let curveAmount = 0;
      
      if (curveType < 0.3) {
        // Curvatura serpenteante (múltiples ondas)
        curveAmount = Math.sin(progress * Math.PI * 4) * curveStrength * 0.7;
      } else if (curveType < 0.6) {
        // Curvatura gradual (una gran curva)
        curveAmount = Math.sin(progress * Math.PI) * curveStrength;
      } else if (curveType < 0.8) {
        // Curvatura irregular (ruido)
        curveAmount = (this.rng.uniform(-1, 1) + Math.sin(progress * Math.PI * 3) * 0.5) * curveStrength;
      } else {
        // Curvatura en zigzag
        curveAmount = ((progress * 8) % 2 > 1 ? 1 : -1) * curveStrength * (1 - Math.abs(0.5 - progress) * 2);
      }
      
      const randomCurve = this.rng.uniform(-0.05, 0.05);
      const totalCurve = (curveAmount + randomCurve) * 0.3;
      
      // Rotate direction slightly for curve
      const normal = currentPos.clone().normalize();
      const rotation = new THREE.Quaternion().setFromAxisAngle(normal, totalCurve);
      direction.applyQuaternion(rotation).normalize();
      
      // Move forward - variable step size for different river lengths
      const stepSize = radius * this.rng.uniform(PROCEDURAL_RANGES.STEP_SIZE.min, PROCEDURAL_RANGES.STEP_SIZE.max);
      currentPos = currentPos.clone().add(direction.clone().multiplyScalar(stepSize));
      
      // Project back to sphere
      currentPos.normalize().multiplyScalar(radius);
      
      // Keep direction tangent to sphere
      direction = this.keepDirectionTangent(direction, currentPos, radius);
      
      points.push(currentPos.clone());
    }
    
    return this.createLineFromPoints(points, riverIndex);
  }

  private getRandomTangentDirection(position: THREE.Vector3, radius: number): THREE.Vector3 {
    const normal = position.clone().normalize();
    
    // Simple tangent vector
    const up = Math.abs(normal.y) < 0.9 ? 
      new THREE.Vector3(0, 1, 0) : 
      new THREE.Vector3(1, 0, 0);
    
    const tangent = new THREE.Vector3().crossVectors(normal, up).normalize();
    
    // Rotate to random angle
    const angle = this.rng.uniform(0, Math.PI * 2);
    const rotation = new THREE.Quaternion().setFromAxisAngle(normal, angle);
    
    return tangent.applyQuaternion(rotation);
  }

  private keepDirectionTangent(direction: THREE.Vector3, position: THREE.Vector3, radius: number): THREE.Vector3 {
    const normal = position.clone().normalize();
    const dot = direction.dot(normal);
    return direction.clone().sub(normal.clone().multiplyScalar(dot)).normalize();
  }

  private createLineFromPoints(points: THREE.Vector3[], riverIndex: number): THREE.Group | null {
    if (points.length < 2) return null;
    
    // Crear un grupo para la línea del río
    const riverGroup = new THREE.Group();
    
    // Usar color del planeta si no se especifica uno
    let baseColor: THREE.Color;
    if (this.params.color) {
      baseColor = this.params.color instanceof THREE.Color ? 
        this.params.color.clone() : 
        new THREE.Color().setRGB(
          this.params.color[0], 
          this.params.color[1], 
          this.params.color[2]
        );
    } else {
      // Color por defecto: marrón seco para ríos
      baseColor = new THREE.Color(0.3, 0.25, 0.2);
    }
    
    // Very subtle color variation per river
    const variation = riverIndex * 0.05;
    baseColor.multiplyScalar(1 - variation * 0.2);
    
    // Grosor real usando TubeGeometry
    const thickness = this.rng.uniform(PROCEDURAL_RANGES.THICKNESS.min, PROCEDURAL_RANGES.THICKNESS.max);
    const tubeRadius = thickness * 0.005; // Radio más grande para visibilidad
    
    // Crear curva desde los puntos
    const curve = new THREE.CatmullRomCurve3(points);
    
    // Crear geometría de tubo con grosor real
    const tubeGeometry = new THREE.TubeGeometry(
      curve,
      points.length - 1, // segments
      tubeRadius,        // radius
      8,                 // radial segments
      false              // closed
    );
    
    // Material para el tubo - volver a Basic para evitar problemas de iluminación
    const material = new THREE.MeshBasicMaterial({
      color: baseColor,
      opacity: this.params.opacity!,
      transparent: true, // Siempre transparente
      depthWrite: false,
      depthTest: true,
      side: THREE.DoubleSide // Renderizar ambos lados
    });
    
    // Crear mesh del río
    const riverMesh = new THREE.Mesh(tubeGeometry, material);
    riverMesh.renderOrder = 1000; // Mismo nivel que las land masses
    riverGroup.add(riverMesh);
    
    return riverGroup;
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.riverGroup.position.copy(planetPosition);
    }
    scene.add(this.riverGroup);
  }

  update(deltaTime: number): void {
    // Static dried rivers - no animation
  }

  updateParams(newParams: Partial<RiverLinesParams>): void {
    this.params = { ...this.params, ...newParams };
    
    // Update materials if needed
    if (newParams.color || newParams.opacity) {
      this.riverLines.forEach(riverGroup => {
        riverGroup.children.forEach(child => {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
            if (newParams.color) {
              const color = newParams.color instanceof THREE.Color ? 
                newParams.color : 
                new THREE.Color().setRGB(
                  newParams.color[0], 
                  newParams.color[1], 
                  newParams.color[2]
                );
              child.material.color = color;
            }
            
            if (newParams.opacity !== undefined) {
              child.material.opacity = newParams.opacity;
              child.material.transparent = newParams.opacity < 1.0;
            }
          }
        });
      });
    }
  }

  getObject3D(): THREE.Group {
    return this.riverGroup;
  }

  dispose(): void {
    this.riverLines.forEach(riverGroup => {
      riverGroup.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (child.material instanceof THREE.Material) {
            child.material.dispose();
          }
        }
      });
    });
    
    this.riverLines = [];
    this.riverGroup.clear();
  }
}

/**
 * Create river lines from Python data - SIMPLIFIED
 */
export function createRiverLinesFromPythonData(
  planetRadius: number,
  surfaceData: any,
  globalSeed?: number
): RiverLinesEffect | null {
  
  
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const riverSeed = seed + 8000;
  
  // Keep it simple - just basic parameters
  const riverData = surfaceData.river_data || surfaceData.dried_rivers || {};
  
  const rng = new SeededRandom(riverSeed);
  
  // Obtener color del planeta y oscurecerlo para ríos secos
  let riverColor: THREE.Color | null = null;
  if (riverData.color) {
    riverColor = riverData.color instanceof THREE.Color ? 
      riverData.color : 
      new THREE.Color().fromArray(riverData.color);
  } else {
    // Negro simple para ríos secos
    riverColor = new THREE.Color(0.0, 0.0, 0.0);
  }
  
  const params: RiverLinesParams = {
    riverCount: riverData.count || rng.randint(PROCEDURAL_RANGES.RIVER_COUNT.min, PROCEDURAL_RANGES.RIVER_COUNT.max),
    color: riverColor,
    opacity: riverData.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    elevation: riverData.elevation || rng.uniform(PROCEDURAL_RANGES.ELEVATION.min, PROCEDURAL_RANGES.ELEVATION.max),
    seed: riverSeed
  };
  
  
  return new RiverLinesEffect(planetRadius, params);
}

/**
 * Ultra simple presets - just the essentials
 */
export const RIVER_PRESETS = {
  desert: {
    riverCount: 3,
    color: [0.35, 0.25, 0.15] as number[],
    opacity: 0.9
  },
  
  arid_rocky: {
    riverCount: 4,
    color: [0.30, 0.20, 0.12] as number[],
    opacity: 0.85
  },
  
  badlands: {
    riverCount: 2,
    color: [0.28, 0.18, 0.10] as number[],
    opacity: 0.9
  },
  
  martian: {
    riverCount: 2,
    color: [0.25, 0.15, 0.08] as number[],
    opacity: 0.8
  }
};

/**
 * Create river lines with a simple preset
 */
export function createRiverLinesWithPreset(
  planetRadius: number,
  presetName: keyof typeof RIVER_PRESETS,
  customParams?: Partial<RiverLinesParams>
): RiverLinesEffect {
  const preset = RIVER_PRESETS[presetName];
  const params = { ...preset, ...customParams };
  
  
  return new RiverLinesEffect(planetRadius, params);
}