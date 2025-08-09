/**
 * Metallic Surface Layer - Versión que funciona como capa
 * 
 * Crea superficie metálica como capa transparente
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';
import { SeededRandom } from '../Utils/SeededRandom';

export interface MetallicSurfaceLayerParams {
  color?: THREE.Color | number[];
  metalness?: number;
  roughness?: number;
  fragmentationIntensity?: number;
  opacity?: number;
  seed?: number;
  noiseScale?: number;
  noiseIntensity?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  METALNESS: { min: 0.7, max: 0.95 },
  ROUGHNESS: { min: 0.1, max: 0.6 },
  FRAGMENTATION_INTENSITY: { min: 0.3, max: 0.8 },
  OPACITY: { min: 0.6, max: 0.9 }
};

export class MetallicSurfaceLayer {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: MetallicSurfaceLayerParams;
  private layerSystem: PlanetLayerSystem;

  // Shaders eliminados - ahora se usan desde PlanetLayerSystem.createMetallicSurfaceLayerMaterial

  constructor(layerSystem: PlanetLayerSystem, params: MetallicSurfaceLayerParams = {}) {
    this.layerSystem = layerSystem;
    
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    const baseColor = params.color instanceof THREE.Color ? 
      params.color : (params.color ? new THREE.Color(params.color as any) : new THREE.Color(0x808080));
    
    this.params = {
      color: baseColor,
      metalness: params.metalness || rng.uniform(PROCEDURAL_RANGES.METALNESS.min, PROCEDURAL_RANGES.METALNESS.max),
      roughness: params.roughness || rng.uniform(PROCEDURAL_RANGES.ROUGHNESS.min, PROCEDURAL_RANGES.ROUGHNESS.max),
      fragmentationIntensity: params.fragmentationIntensity || rng.uniform(PROCEDURAL_RANGES.FRAGMENTATION_INTENSITY.min, PROCEDURAL_RANGES.FRAGMENTATION_INTENSITY.max),
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      seed,
      noiseScale: params.noiseScale || 8.0,
      noiseIntensity: params.noiseIntensity || 0.3
    };

    // Crear material usando el sistema de capas (como CloudBands)
    this.material = this.layerSystem.createMetallicSurfaceLayerMaterial(this.params);
    
    // Añadir capa al sistema, pasando referencia a este objeto
    this.layerMesh = this.layerSystem.addEffectLayer(
      'metallicSurface', 
      this.material, 
      this.layerSystem.getNextScaleFactor(),
      this // Pasar referencia como CloudBands
    );
  }

  update(deltaTime: number): void {
    if (this.material.uniforms.time) {
      this.material.uniforms.time.value += deltaTime;
    }
  }

  dispose(): void {
    // La limpieza se maneja en PlanetLayerSystem
  }
}

export function createMetallicSurfaceLayerFromPythonData(
  layerSystem: PlanetLayerSystem,
  data: any,
  globalSeed?: number
): MetallicSurfaceLayer {
  const surface = data.surface || {};
  const baseColor = data.planet_info?.base_color || surface.base_color;
  
  // Generar valores proceduralmente basados en seed
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 7000); // +7000 para MetallicSurfaceLayer
  
  return new MetallicSurfaceLayer(layerSystem, {
    color: baseColor ? new THREE.Color(baseColor) : new THREE.Color(0x808080),
    metalness: surface.metalness || rng.uniform(PROCEDURAL_RANGES.METALNESS.min, PROCEDURAL_RANGES.METALNESS.max),
    roughness: surface.roughness || rng.uniform(PROCEDURAL_RANGES.ROUGHNESS.min, PROCEDURAL_RANGES.ROUGHNESS.max),
    fragmentationIntensity: surface.fragmentation || rng.uniform(PROCEDURAL_RANGES.FRAGMENTATION_INTENSITY.min, PROCEDURAL_RANGES.FRAGMENTATION_INTENSITY.max),
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    seed,
    noiseScale: 4.0,
    noiseIntensity: 0.3
  });
}