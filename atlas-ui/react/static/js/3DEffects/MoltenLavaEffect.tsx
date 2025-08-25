/**
 * MoltenLavaEffect.tsx
 * 
 * Adaptación del AquiferWaterEffect para planetas Molten Core
 * Simula lava líquida con movimiento más lento y colores incandescentes
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';
import { SeededRandom } from '../Utils/SeededRandom';
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime";

export interface MoltenLavaParams {
  // Configuración de olas de lava (más lentas que agua)
  lavaWaveHeight?: number;
  lavaWaveFrequency?: number;
  lavaWaveSpeed?: number; // Mucho más lento que agua
  
  // Configuración de olas secundarias
  secondaryLavaWaveHeight?: number;
  secondaryLavaWaveFrequency?: number;
  secondaryLavaWaveSpeed?: number;
  
  // Configuración de distorsión de lava
  lavaDistortionScale?: number;
  lavaDistortionSpeed?: number;
  
  // Colores incandescentes del Molten Core
  moltenColor?: THREE.Color | number[];
  coreColor?: THREE.Color | number[];
  coolingColor?: THREE.Color | number[];
  
  // Efectos visuales específicos de lava
  emissiveIntensity?: number;
  glowIntensity?: number;
  viscosity?: number; // Factor de viscosidad de la lava
  temperature?: number; // Factor de temperatura
  
  // Configuración de normales y brillo
  lavaRoughness?: number;
  lavaMetalness?: number;
  lavaNormalScale?: number;
  lavaNormalSpeed?: number;
  
  seed?: number;
  startTime?: number;
  timeSpeed?: number; // Velocidad reducida para lava viscosa (0.05 - 0.5)
  cosmicOriginTime?: number;
}

// Rangos para generación procedural - adaptados para lava viscosa
const LAVA_PROCEDURAL_RANGES = {
  LAVA_WAVE_HEIGHT: { min: 0.02, max: 0.06 }, // Olas más pequeñas (lava densa)
  LAVA_WAVE_FREQUENCY: { min: 1.0, max: 2.5 }, // Frecuencia más baja
  LAVA_WAVE_SPEED: { min: 0.02, max: 0.1 }, // MUCHO más lento que agua
  EMISSIVE_INTENSITY: { min: 3.0, max: 6.0 }, // Muy emisiva
  GLOW_INTENSITY: { min: 2.0, max: 4.0 }, // Resplandor intenso
  TEMPERATURE: { min: 0.8, max: 1.0 }, // Muy caliente
  TIME_SPEED: { min: 0.05, max: 0.5 }, // Velocidades muy lentas
};

export class MoltenLavaEffect {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: MoltenLavaParams;
  private layerSystem: PlanetLayerSystem;
  private startTime: number;

  constructor(layerSystem: PlanetLayerSystem, params: MoltenLavaParams = {}) {
    this.layerSystem = layerSystem;

    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    // Tiempo inicial determinista basado en el seed
    this.startTime = params.startTime || (seed % 10000) / 1000;

    // Colores incandescentes basados en Molten Core (#FF8C00)
    const moltenCoreColor = new THREE.Color(0xFF8C00);
    const hsl = { h: 0, s: 0, l: 0 };
    moltenCoreColor.getHSL(hsl);

    const moltenColor = params.moltenColor instanceof THREE.Color ? params.moltenColor : 
      new THREE.Color().setHSL(hsl.h, 1.0, 0.5); // Naranja brillante
    const coreColor = params.coreColor instanceof THREE.Color ? params.coreColor : 
      new THREE.Color().setHSL(hsl.h + 0.05, 0.9, 0.6); // Núcleo súper caliente
    const coolingColor = params.coolingColor instanceof THREE.Color ? params.coolingColor : 
      new THREE.Color().setHSL(hsl.h - 0.05, 0.8, 0.3); // Lava enfriándose

    this.params = {
      moltenColor,
      coreColor,
      coolingColor,
      lavaWaveHeight: params.lavaWaveHeight || rng.uniform(LAVA_PROCEDURAL_RANGES.LAVA_WAVE_HEIGHT.min, LAVA_PROCEDURAL_RANGES.LAVA_WAVE_HEIGHT.max),
      lavaWaveFrequency: params.lavaWaveFrequency || rng.uniform(LAVA_PROCEDURAL_RANGES.LAVA_WAVE_FREQUENCY.min, LAVA_PROCEDURAL_RANGES.LAVA_WAVE_FREQUENCY.max),
      lavaWaveSpeed: params.lavaWaveSpeed || rng.uniform(LAVA_PROCEDURAL_RANGES.LAVA_WAVE_SPEED.min, LAVA_PROCEDURAL_RANGES.LAVA_WAVE_SPEED.max),
      secondaryLavaWaveHeight: params.secondaryLavaWaveHeight || rng.uniform(LAVA_PROCEDURAL_RANGES.LAVA_WAVE_HEIGHT.min * 0.7, LAVA_PROCEDURAL_RANGES.LAVA_WAVE_HEIGHT.max * 0.7),
      secondaryLavaWaveFrequency: params.secondaryLavaWaveFrequency || rng.uniform(LAVA_PROCEDURAL_RANGES.LAVA_WAVE_FREQUENCY.min * 1.3, LAVA_PROCEDURAL_RANGES.LAVA_WAVE_FREQUENCY.max * 1.3),
      secondaryLavaWaveSpeed: params.secondaryLavaWaveSpeed || rng.uniform(LAVA_PROCEDURAL_RANGES.LAVA_WAVE_SPEED.min * 1.2, LAVA_PROCEDURAL_RANGES.LAVA_WAVE_SPEED.max * 1.2),
      lavaDistortionScale: params.lavaDistortionScale || 2.0,
      lavaDistortionSpeed: params.lavaDistortionSpeed || 0.2, // Muy lento
      emissiveIntensity: params.emissiveIntensity || rng.uniform(LAVA_PROCEDURAL_RANGES.EMISSIVE_INTENSITY.min, LAVA_PROCEDURAL_RANGES.EMISSIVE_INTENSITY.max),
      glowIntensity: params.glowIntensity || rng.uniform(LAVA_PROCEDURAL_RANGES.GLOW_INTENSITY.min, LAVA_PROCEDURAL_RANGES.GLOW_INTENSITY.max),
      viscosity: params.viscosity || 0.8, // Alta viscosidad
      temperature: params.temperature || rng.uniform(LAVA_PROCEDURAL_RANGES.TEMPERATURE.min, LAVA_PROCEDURAL_RANGES.TEMPERATURE.max),
      lavaRoughness: params.lavaRoughness || 0.9, // Rugosa como lava real
      lavaMetalness: params.lavaMetalness || 0.1, // Baja metalicidad
      lavaNormalScale: params.lavaNormalScale || 0.08, // Escala de normales más alta
      lavaNormalSpeed: params.lavaNormalSpeed || 0.1, // Movimiento lento de normales
      seed,
      startTime: this.startTime,
      timeSpeed: params.timeSpeed || rng.uniform(LAVA_PROCEDURAL_RANGES.TIME_SPEED.min, LAVA_PROCEDURAL_RANGES.TIME_SPEED.max)
    };

    // Crear material usando el sistema de capas adaptado para lava
    this.material = this.layerSystem.createMoltenLavaLayerMaterial(this.params);

    // Añadir capa al sistema
    this.layerMesh = this.layerSystem.addEffectLayer(
      "moltenLava",
      this.material,
      this.layerSystem.getNextScaleFactor(),
      this
    );
  }

  update(deltaTime: number): void {
    // Calcular tiempo absoluto determinista MUY LENTO para lava viscosa
    const cosmicOriginTime = DEFAULT_COSMIC_ORIGIN_TIME; // No params.cosmicOriginTime available here
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.params.timeSpeed!, this.startTime);
    
    // Actualizar tiempo en el material
    if (this.material.uniforms.time) {
      this.material.uniforms.time.value = currentTime;
    }
  }

  dispose(): void {
    // La limpieza se maneja en PlanetLayerSystem
  }
}

// Función para crear desde datos de Python
export function createMoltenLavaFromPythonData(layerSystem: PlanetLayerSystem, pythonData: any, globalSeed?: number): MoltenLavaEffect {
  // Usar el seed del planeta para variaciones consistentes
  const seed = globalSeed || 12345;
  const rng = new SeededRandom(seed + 8000); // +8000 para MoltenLavaEffect

  const params: MoltenLavaParams = {
    emissiveIntensity: rng.uniform(LAVA_PROCEDURAL_RANGES.EMISSIVE_INTENSITY.min, LAVA_PROCEDURAL_RANGES.EMISSIVE_INTENSITY.max),
    glowIntensity: rng.uniform(LAVA_PROCEDURAL_RANGES.GLOW_INTENSITY.min, LAVA_PROCEDURAL_RANGES.GLOW_INTENSITY.max),
    temperature: rng.uniform(LAVA_PROCEDURAL_RANGES.TEMPERATURE.min, LAVA_PROCEDURAL_RANGES.TEMPERATURE.max),
    viscosity: 0.9, // Lava muy viscosa
    lavaRoughness: 0.8,
    lavaMetalness: 0.1,
    lavaNormalScale: 0.06,
    lavaNormalSpeed: 0.08, // Muy lento
    seed
  };
  
  return new MoltenLavaEffect(layerSystem, params);
}