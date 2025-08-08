/**
 * Cloud Gyros Layer - Versión mejorada que funciona como capa
 * 
 * Esta versión está diseñada para trabajar con PlanetLayerSystem
 * y no sobrescribe el material base del planeta.
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';
import { SeededRandom } from '../Utils/SeededRandom';

export interface CloudGyrosLayerParams {
  stormCenters?: Array<{x: number, y: number}>;
  stormColor?: THREE.Color | number[];
  stormIntensity?: number;
  spiralSpeed?: number;
  animationSpeed?: number;
  opacity?: number;
  seed?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  STORM_COUNT: { min: 2, max: 5 },
  STORM_CENTERS: { min: -0.8, max: 0.8 },
  STORM_INTENSITY: { min: 0.5, max: 1.0 },
  SPIRAL_SPEED: { min: 1.0, max: 3.0 },
  ANIMATION_SPEED: { min: 0.1, max: 0.5 },
  OPACITY: { min: 0.4, max: 0.8 }
};

export class CloudGyrosLayer {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: CloudGyrosLayerParams;
  private layerSystem: PlanetLayerSystem;

  constructor(layerSystem: PlanetLayerSystem, params: CloudGyrosLayerParams = {}) {
    this.layerSystem = layerSystem;
    
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    this.params = {
      stormCenters: params.stormCenters || this.generateStormCenters(seed),
      stormColor: params.stormColor || new THREE.Color(0x8B0000),
      stormIntensity: params.stormIntensity || rng.uniform(PROCEDURAL_RANGES.STORM_INTENSITY.min, PROCEDURAL_RANGES.STORM_INTENSITY.max),
      spiralSpeed: params.spiralSpeed || rng.uniform(PROCEDURAL_RANGES.SPIRAL_SPEED.min, PROCEDURAL_RANGES.SPIRAL_SPEED.max),
      animationSpeed: params.animationSpeed || rng.uniform(PROCEDURAL_RANGES.ANIMATION_SPEED.min, PROCEDURAL_RANGES.ANIMATION_SPEED.max),
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      seed
    };

    // Crear material usando el sistema de capas
    this.material = this.layerSystem.createCloudGyrosLayerMaterial(this.params);
    
    // Añadir capa al sistema (ligeramente más grande que CloudBands), pasando referencia a este objeto
    this.layerMesh = this.layerSystem.addEffectLayer('cloudGyros', this.material, 1.002, this);
  }

  private generateStormCenters(seed: number): Array<{x: number, y: number}> {
    const rng = new SeededRandom(seed + 5000);
    const stormCount = Math.floor(rng.uniform(PROCEDURAL_RANGES.STORM_COUNT.min, PROCEDURAL_RANGES.STORM_COUNT.max));
    const centers: Array<{x: number, y: number}> = [];
    
    for (let i = 0; i < stormCount; i++) {
      centers.push({
        x: rng.uniform(PROCEDURAL_RANGES.STORM_CENTERS.min, PROCEDURAL_RANGES.STORM_CENTERS.max),
        y: rng.uniform(PROCEDURAL_RANGES.STORM_CENTERS.min, PROCEDURAL_RANGES.STORM_CENTERS.max)
      });
    }
    
    return centers;
  }

  update(deltaTime: number): void {
    if (this.material.uniforms.time) {
      this.material.uniforms.time.value += deltaTime;
    }
  }

  updateParams(newParams: Partial<CloudGyrosLayerParams>): void {
    this.params = { ...this.params, ...newParams };
    
    if (newParams.stormIntensity !== undefined) {
      this.material.uniforms.stormIntensity.value = newParams.stormIntensity;
    }
    if (newParams.spiralSpeed !== undefined) {
      this.material.uniforms.spiralSpeed.value = newParams.spiralSpeed;
    }
    if (newParams.animationSpeed !== undefined) {
      this.material.uniforms.animationSpeed.value = newParams.animationSpeed;
    }
  }

  dispose(): void {
    // La limpieza se maneja en PlanetLayerSystem
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createCloudGyrosLayerFromPythonData(
  layerSystem: PlanetLayerSystem,
  gasGiantData: any,
  globalSeed?: number
): CloudGyrosLayer {
  const storms = gasGiantData.storms || {};
  
  // Generar valores proceduralmente basados en seed
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 5000); // +5000 para CloudGyrosLayer
  
  const params: CloudGyrosLayerParams = {
    stormCenters: storms.centers || undefined, // Se generará proceduralmente
    stormColor: new THREE.Color(0x8B0000),
    stormIntensity: storms.intensity || gasGiantData.storm_intensity || rng.uniform(PROCEDURAL_RANGES.STORM_INTENSITY.min, PROCEDURAL_RANGES.STORM_INTENSITY.max),
    spiralSpeed: storms.spiral_speed || rng.uniform(PROCEDURAL_RANGES.SPIRAL_SPEED.min, PROCEDURAL_RANGES.SPIRAL_SPEED.max),
    animationSpeed: rng.uniform(PROCEDURAL_RANGES.ANIMATION_SPEED.min, PROCEDURAL_RANGES.ANIMATION_SPEED.max),
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    seed
  };

  return new CloudGyrosLayer(layerSystem, params);
}