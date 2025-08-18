/**
 * Icy Terrain Layer - Versión que funciona como capa
 * 
 * Crea terreno helado con reflejos como capa transparente
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';
import { SeededRandom } from '../Utils/SeededRandom';

export interface IcyTerrainLayerParams {
  color?: THREE.Color | number[];
  iceReflectivity?: number;
  frostDensity?: number;
  crackIntensity?: number;
  opacity?: number;
  seed?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  ICE_REFLECTIVITY: { min: 0.7, max: 0.95 },
  FROST_DENSITY: { min: 0.3, max: 0.8 },
  CRACK_INTENSITY: { min: 0.2, max: 0.7 },
  OPACITY: { min: 0.6, max: 0.9 }
};

export class IcyTerrainLayer {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: IcyTerrainLayerParams;
  private layerSystem: PlanetLayerSystem;

  // Shaders eliminados - ahora se usan desde PlanetLayerSystem.createIcyTerrainLayerMaterial

  constructor(layerSystem: PlanetLayerSystem, params: IcyTerrainLayerParams = {}) {
    this.layerSystem = layerSystem;
    
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    const baseColor = params.color instanceof THREE.Color ? 
      params.color : (params.color ? new THREE.Color(params.color as any) : new THREE.Color(0xB0E0E6));
    
    this.params = {
      color: baseColor,
      iceReflectivity: params.iceReflectivity || rng.uniform(PROCEDURAL_RANGES.ICE_REFLECTIVITY.min, PROCEDURAL_RANGES.ICE_REFLECTIVITY.max),
      frostDensity: params.frostDensity || rng.uniform(PROCEDURAL_RANGES.FROST_DENSITY.min, PROCEDURAL_RANGES.FROST_DENSITY.max),
      crackIntensity: params.crackIntensity || rng.uniform(PROCEDURAL_RANGES.CRACK_INTENSITY.min, PROCEDURAL_RANGES.CRACK_INTENSITY.max),
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      seed
    };

    // Crear material usando el sistema de capas (como MetallicSurfaceLayer)
    this.material = this.layerSystem.createIcyTerrainLayerMaterial(this.params);
    
    // Añadir capa al sistema, pasando referencia a este objeto
    this.layerMesh = this.layerSystem.addEffectLayer(
      'icyTerrain', 
      this.material, 
      this.layerSystem.getNextScaleFactor(),
      this // Pasar referencia como MetallicSurfaceLayer
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

export function createIcyTerrainLayerFromPythonData(
  layerSystem: PlanetLayerSystem,
  data: any,
  globalSeed?: number
): IcyTerrainLayer {
  const surface = data.surface || {};
  const baseColor = data.planet_info?.base_color || surface.base_color;
  
  // Generar valores proceduralmente basados en seed
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 6000); // +6000 para IcyTerrainLayer
  
  return new IcyTerrainLayer(layerSystem, {
    color: baseColor ? new THREE.Color(baseColor) : new THREE.Color(0xB0E0E6),
    iceReflectivity: surface.ice_reflectivity || rng.uniform(PROCEDURAL_RANGES.ICE_REFLECTIVITY.min, PROCEDURAL_RANGES.ICE_REFLECTIVITY.max),
    frostDensity: surface.frost_density || rng.uniform(PROCEDURAL_RANGES.FROST_DENSITY.min, PROCEDURAL_RANGES.FROST_DENSITY.max),
    crackIntensity: surface.crack_intensity || rng.uniform(PROCEDURAL_RANGES.CRACK_INTENSITY.min, PROCEDURAL_RANGES.CRACK_INTENSITY.max),
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    seed
  });
}