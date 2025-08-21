/**
 * Diamond Surface Layer - Capa de superficie de diamante
 *
 * Crea superficie cristalina de diamante con alta refracción, dispersión cromática
 * y facetas perfectamente geométricas
 */

import * as THREE from "three";
import { PlanetLayerSystem } from "../3DComponents/PlanetLayerSystem";
import { SeededRandom } from "../Utils/SeededRandom";

export interface DiamondSurfaceLayerParams {
  color?: THREE.Color | number[];
  refractionIndex?: number; // Índice de refracción (2.42 para diamante real)
  dispersion?: number; // Dispersión cromática (separación de colores)
  clarity?: number; // Claridad/transparencia del diamante
  facetSize?: number; // Tamaño de las facetas
  brilliance?: number; // Intensidad del brillo
  opacity?: number;
  seed?: number;
  prismaticIntensity?: number; // Intensidad del efecto prismático
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  REFRACTION_INDEX: { min: 2.0, max: 2.8 }, // Más alto que el diamante real para efecto dramático
  DISPERSION: { min: 0.3, max: 0.8 },
  CLARITY: { min: 0.6, max: 0.95 },
  FACET_SIZE: { min: 8.0, max: 25.0 },
  BRILLIANCE: { min: 1.5, max: 3.0 },
  OPACITY: { min: 0.4, max: 0.85 },
  PRISMATIC_INTENSITY: { min: 0.4, max: 0.9 },
};

export class DiamondSurfaceLayer {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: DiamondSurfaceLayerParams;
  private layerSystem: PlanetLayerSystem;

  constructor(layerSystem: PlanetLayerSystem, params: DiamondSurfaceLayerParams = {}) {
    this.layerSystem = layerSystem;

    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);

    const baseColor = params.color instanceof THREE.Color 
      ? params.color 
      : params.color 
        ? new THREE.Color(params.color as any) 
        : new THREE.Color(0xffffff); // Blanco para diamante puro

    this.params = {
      color: baseColor,
      refractionIndex: params.refractionIndex || rng.uniform(PROCEDURAL_RANGES.REFRACTION_INDEX.min, PROCEDURAL_RANGES.REFRACTION_INDEX.max),
      dispersion: params.dispersion || rng.uniform(PROCEDURAL_RANGES.DISPERSION.min, PROCEDURAL_RANGES.DISPERSION.max),
      clarity: params.clarity || rng.uniform(PROCEDURAL_RANGES.CLARITY.min, PROCEDURAL_RANGES.CLARITY.max),
      facetSize: params.facetSize || rng.uniform(PROCEDURAL_RANGES.FACET_SIZE.min, PROCEDURAL_RANGES.FACET_SIZE.max),
      brilliance: params.brilliance || rng.uniform(PROCEDURAL_RANGES.BRILLIANCE.min, PROCEDURAL_RANGES.BRILLIANCE.max),
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      seed,
      prismaticIntensity: params.prismaticIntensity || rng.uniform(PROCEDURAL_RANGES.PRISMATIC_INTENSITY.min, PROCEDURAL_RANGES.PRISMATIC_INTENSITY.max),
    };

    // Crear material usando el sistema de capas
    this.material = this.layerSystem.createDiamondSurfaceLayerMaterial(this.params);

    // Añadir capa al sistema
    this.layerMesh = this.layerSystem.addEffectLayer(
      "diamondSurface",
      this.material,
      this.layerSystem.getNextScaleFactor(),
      this
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

export function createDiamondSurfaceLayerFromPythonData(layerSystem: PlanetLayerSystem, data: any, globalSeed?: number): DiamondSurfaceLayer {
  const surface = data.surface || {};
  const surfaceElements = data.surface_elements || {};
  const baseColor = data.base_color || data.planet_info?.base_color || surface.base_color;

  // Generar valores proceduralmente basados en seed del planeta
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 8000); // +8000 para DiamondSurfaceLayer

  // Usar el seed del planeta para variaciones sutiles
  const subtleVariation = rng.uniform(0.9, 1.1);

  // Usar datos específicos de Python si están disponibles
  const surfaceProps = surfaceElements.surface || surface;

  return new DiamondSurfaceLayer(layerSystem, {
    color: baseColor ? new THREE.Color().fromArray(baseColor) : new THREE.Color(0xffffff),
    refractionIndex: surfaceProps.refraction || rng.uniform(PROCEDURAL_RANGES.REFRACTION_INDEX.min, PROCEDURAL_RANGES.REFRACTION_INDEX.max),
    dispersion: surfaceProps.dispersion || rng.uniform(PROCEDURAL_RANGES.DISPERSION.min, PROCEDURAL_RANGES.DISPERSION.max),
    clarity: surfaceProps.clarity || rng.uniform(PROCEDURAL_RANGES.CLARITY.min, PROCEDURAL_RANGES.CLARITY.max),
    facetSize: (surfaceProps.facet_size || rng.uniform(PROCEDURAL_RANGES.FACET_SIZE.min, PROCEDURAL_RANGES.FACET_SIZE.max)) * subtleVariation,
    brilliance: surfaceProps.brilliance || rng.uniform(PROCEDURAL_RANGES.BRILLIANCE.min, PROCEDURAL_RANGES.BRILLIANCE.max),
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    seed,
    prismaticIntensity: surfaceProps.prismatic || rng.uniform(PROCEDURAL_RANGES.PRISMATIC_INTENSITY.min, PROCEDURAL_RANGES.PRISMATIC_INTENSITY.max),
  });
}