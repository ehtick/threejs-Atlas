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
  crystalScale?: number;        // Escala de microcristales
  crystalDensity?: number;      // Densidad de cristales
  crystalSharpness?: number;    // Nitidez de los destellos
  frostPattern?: number;        // Patrón de escarcha
  seed?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  ICE_REFLECTIVITY: { min: 0.7, max: 0.95 },
  FROST_DENSITY: { min: 0.3, max: 0.8 },
  CRACK_INTENSITY: { min: 0.2, max: 0.7 },
  OPACITY: { min: 0.6, max: 0.9 },
  CRYSTAL_SCALE: { min: 15.0, max: 35.0 },      // Escala de cristales
  CRYSTAL_DENSITY: { min: 0.4, max: 0.8 },      // Densidad cristalina
  CRYSTAL_SHARPNESS: { min: 100.0, max: 250.0 }, // Nitidez reflejos
  FROST_PATTERN: { min: 8.0, max: 16.0 }        // Variación escarcha
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
      crystalScale: params.crystalScale || rng.uniform(PROCEDURAL_RANGES.CRYSTAL_SCALE.min, PROCEDURAL_RANGES.CRYSTAL_SCALE.max),
      crystalDensity: params.crystalDensity || rng.uniform(PROCEDURAL_RANGES.CRYSTAL_DENSITY.min, PROCEDURAL_RANGES.CRYSTAL_DENSITY.max),
      crystalSharpness: params.crystalSharpness || rng.uniform(PROCEDURAL_RANGES.CRYSTAL_SHARPNESS.min, PROCEDURAL_RANGES.CRYSTAL_SHARPNESS.max),
      frostPattern: params.frostPattern || rng.uniform(PROCEDURAL_RANGES.FROST_PATTERN.min, PROCEDURAL_RANGES.FROST_PATTERN.max),
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
    crystalScale: surface.crystal_scale || rng.uniform(PROCEDURAL_RANGES.CRYSTAL_SCALE.min, PROCEDURAL_RANGES.CRYSTAL_SCALE.max),
    crystalDensity: surface.crystal_density || rng.uniform(PROCEDURAL_RANGES.CRYSTAL_DENSITY.min, PROCEDURAL_RANGES.CRYSTAL_DENSITY.max),
    crystalSharpness: surface.crystal_sharpness || rng.uniform(PROCEDURAL_RANGES.CRYSTAL_SHARPNESS.min, PROCEDURAL_RANGES.CRYSTAL_SHARPNESS.max),
    frostPattern: surface.frost_pattern || rng.uniform(PROCEDURAL_RANGES.FROST_PATTERN.min, PROCEDURAL_RANGES.FROST_PATTERN.max),
    seed
  });
}