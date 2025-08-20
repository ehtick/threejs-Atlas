/**
 * AquiferWaterEffect.tsx
 * 
 * Efecto de agua para planetas tipo Aquifer.
 * Funciona EXACTAMENTE como MetallicSurfaceLayer.tsx usando PlanetLayerSystem.
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';
import { SeededRandom } from '../Utils/SeededRandom';

export interface AquiferWaterParams {
  // Configuración de olas principales
  waveHeight?: number;
  waveFrequency?: number;
  waveSpeed?: number;
  
  // Configuración de olas secundarias
  secondaryWaveHeight?: number;
  secondaryWaveFrequency?: number;
  secondaryWaveSpeed?: number;
  
  // Configuración de distorsión
  distortionScale?: number;
  distortionSpeed?: number;
  
  // Colores
  waterColor?: THREE.Color | number[];
  deepWaterColor?: THREE.Color | number[];
  foamColor?: THREE.Color | number[];
  
  // Efectos visuales
  specularIntensity?: number;
  reflectivity?: number;
  transparency?: number;
  roughness?: number;
  metalness?: number;
  
  // Configuración de normales
  normalScale?: number;
  normalSpeed?: number;
  seed?: number;
  startTime?: number; // Tiempo inicial fijo para determinismo
  timeSpeed?: number; // Velocidad del tiempo para movimiento de olas (0.1 - 1.0)
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  WAVE_HEIGHT: { min: 0.05, max: 0.12 },
  WAVE_FREQUENCY: { min: 2.0, max: 5.0 },
  WAVE_SPEED: { min: 0.2, max: 0.8 },  // Reducido de 1.5-3.5 a 0.2-0.8
  SPECULAR_INTENSITY: { min: 2.0, max: 6.0 },
  TRANSPARENCY: { min: 0.2, max: 0.5 },
  TIME_SPEED: { min: 0.1, max: 1.0 }, // Rango de velocidades del tiempo
};

export class AquiferWaterEffect {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: AquiferWaterParams;
  private layerSystem: PlanetLayerSystem;
  private startTime: number;

  // Shaders eliminados - ahora se usan desde PlanetLayerSystem.createAquiferWaterLayerMaterial

  constructor(layerSystem: PlanetLayerSystem, params: AquiferWaterParams = {}) {
    this.layerSystem = layerSystem;

    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    // Tiempo inicial determinista basado en el seed
    this.startTime = params.startTime || (seed % 10000) / 1000; // Convertir seed a tiempo inicial

    const waterColor = params.waterColor instanceof THREE.Color ? params.waterColor : params.waterColor ? new THREE.Color(params.waterColor as any) : new THREE.Color(0x2E8B8B);
    const deepWaterColor = params.deepWaterColor instanceof THREE.Color ? params.deepWaterColor : params.deepWaterColor ? new THREE.Color(params.deepWaterColor as any) : new THREE.Color(0x003366);
    const foamColor = params.foamColor instanceof THREE.Color ? params.foamColor : params.foamColor ? new THREE.Color(params.foamColor as any) : new THREE.Color(0xffffff);

    this.params = {
      waterColor,
      deepWaterColor,
      foamColor,
      waveHeight: params.waveHeight || rng.uniform(PROCEDURAL_RANGES.WAVE_HEIGHT.min, PROCEDURAL_RANGES.WAVE_HEIGHT.max),
      waveFrequency: params.waveFrequency || rng.uniform(PROCEDURAL_RANGES.WAVE_FREQUENCY.min, PROCEDURAL_RANGES.WAVE_FREQUENCY.max),
      waveSpeed: params.waveSpeed || rng.uniform(PROCEDURAL_RANGES.WAVE_SPEED.min, PROCEDURAL_RANGES.WAVE_SPEED.max),
      secondaryWaveHeight: params.secondaryWaveHeight || rng.uniform(PROCEDURAL_RANGES.WAVE_HEIGHT.min * 0.6, PROCEDURAL_RANGES.WAVE_HEIGHT.max * 0.6),
      secondaryWaveFrequency: params.secondaryWaveFrequency || rng.uniform(PROCEDURAL_RANGES.WAVE_FREQUENCY.min * 1.2, PROCEDURAL_RANGES.WAVE_FREQUENCY.max * 1.2),
      secondaryWaveSpeed: params.secondaryWaveSpeed || rng.uniform(PROCEDURAL_RANGES.WAVE_SPEED.min * 1.1, PROCEDURAL_RANGES.WAVE_SPEED.max * 1.1),
      distortionScale: params.distortionScale || 3.0,
      distortionSpeed: params.distortionSpeed || 0.5,
      specularIntensity: params.specularIntensity || rng.uniform(PROCEDURAL_RANGES.SPECULAR_INTENSITY.min, PROCEDURAL_RANGES.SPECULAR_INTENSITY.max),
      reflectivity: params.reflectivity || 0.3,
      transparency: params.transparency || rng.uniform(PROCEDURAL_RANGES.TRANSPARENCY.min, PROCEDURAL_RANGES.TRANSPARENCY.max),
      roughness: params.roughness || 0.1,
      metalness: params.metalness || 0.2,
      normalScale: params.normalScale || 0.05,
      normalSpeed: params.normalSpeed || 0.5,
      seed,
      startTime: this.startTime,
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max)
    };

    // Crear material usando el sistema de capas (como MetallicSurfaceLayer)
    this.material = this.layerSystem.createAquiferWaterLayerMaterial(this.params);

    // Añadir capa al sistema, pasando referencia a este objeto
    this.layerMesh = this.layerSystem.addEffectLayer(
      "aquiferWater",
      this.material,
      this.layerSystem.getNextScaleFactor(),
      this // Pasar referencia como MetallicSurfaceLayer
    );
  }

  update(deltaTime: number): void {
    // Calcular tiempo absoluto determinista desde el inicio con ciclo y velocidad procedural
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000; // Mantener el tiempo en un ciclo de 1000 segundos
    
    // Actualizar tiempo en el material con el tiempo determinista
    if (this.material.uniforms.time) {
      this.material.uniforms.time.value = currentTime;
    }
  }

  dispose(): void {
    // La limpieza se maneja en PlanetLayerSystem
  }
}

// Función para crear desde datos de Python
export function createAquiferWaterFromPythonData(layerSystem: PlanetLayerSystem, pythonData: any, globalSeed?: number): AquiferWaterEffect {
  const planetInfo = pythonData.planet_info || {};
  const baseColor = planetInfo.base_color ? 
    (typeof planetInfo.base_color === 'string' ? 
      new THREE.Color(planetInfo.base_color) : 
      new THREE.Color().fromArray(planetInfo.base_color)) :
    new THREE.Color(0x4A90E2); // Color azul por defecto para agua
  
  // Generar colores de agua basados en el color base
  const hsl = { h: 0, s: 0, l: 0 };
  baseColor.getHSL(hsl);
  
  // Ajustar para aspecto acuático
  const waterColor = new THREE.Color().setHSL(
    hsl.h,
    Math.min(1, hsl.s * 1.2), // Más saturado
    Math.min(1, hsl.l * 0.8)  // Ligeramente más oscuro
  );
  
  const deepWaterColor = new THREE.Color().setHSL(
    hsl.h,
    Math.min(1, hsl.s * 1.3),
    Math.max(0, hsl.l * 0.4) // Mucho más oscuro para profundidad
  );

  // Usar el seed del planeta para variaciones sutiles
  const seed = globalSeed || 12345; // Seed determinista por defecto
  const rng = new SeededRandom(seed + 5000); // +5000 para AquiferWaterEffect

  const params: AquiferWaterParams = {
    waterColor,
    deepWaterColor,
    foamColor: new THREE.Color(0.9, 0.95, 1.0),
    specularIntensity: rng.uniform(PROCEDURAL_RANGES.SPECULAR_INTENSITY.min, PROCEDURAL_RANGES.SPECULAR_INTENSITY.max),
    reflectivity: 0.3,
    transparency: rng.uniform(PROCEDURAL_RANGES.TRANSPARENCY.min, PROCEDURAL_RANGES.TRANSPARENCY.max),
    roughness: 0.05,
    metalness: 0.1,
    normalScale: 0.02,
    normalSpeed: 0.6,
    seed
  };
  
  return new AquiferWaterEffect(layerSystem, params);
}