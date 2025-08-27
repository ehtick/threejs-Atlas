/**
 * LavaFluidEffect.tsx
 * 
 * Efecto de fluido de lava para planetas tipo lava.
 * Basado en AquiferWaterEffect pero con movimientos más lentos y viscosos.
 * Funciona con PlanetLayerSystem como capa integrada.
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';
import { SeededRandom } from '../Utils/SeededRandom';

export interface LavaFluidParams {
  // Configuración de ondas principales (más lentas que agua)
  waveHeight?: number;
  waveFrequency?: number;
  waveSpeed?: number;
  
  // Configuración de ondas secundarias
  secondaryWaveHeight?: number;
  secondaryWaveFrequency?: number;
  secondaryWaveSpeed?: number;
  
  // Configuración de distorsión (mayor que agua para viscosidad)
  distortionScale?: number;
  distortionSpeed?: number;
  
  // Colores de lava
  lavaColor?: THREE.Color | number[];
  hotLavaColor?: THREE.Color | number[];
  coolingLavaColor?: THREE.Color | number[];
  
  // Efectos visuales (más emisivos que agua)
  emissiveIntensity?: number;
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
  timeSpeed?: number; // Velocidad del tiempo para movimiento de lava (más lento que agua)
}

// Rangos para generación procedural - más lentos que agua
const PROCEDURAL_RANGES = {
  WAVE_HEIGHT: { min: 0.03, max: 0.08 }, // Más sutil que agua
  WAVE_FREQUENCY: { min: 1.0, max: 3.0 }, // Menos frecuente
  WAVE_SPEED: { min: 0.05, max: 0.2 }, // Mucho más lento que agua (era 0.2-0.8)
  EMISSIVE_INTENSITY: { min: 0.3, max: 0.8 },
  SPECULAR_INTENSITY: { min: 1.0, max: 3.0 },
  TRANSPARENCY: { min: 0.0, max: 0.1 }, // Menos transparente que agua
  TIME_SPEED: { min: 0.05, max: 0.3 }, // Mucho más lento (era 0.1-1.0)
};

export class LavaFluidEffect {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: LavaFluidParams;
  private layerSystem: PlanetLayerSystem;
  private startTime: number;

  constructor(layerSystem: PlanetLayerSystem, params: LavaFluidParams = {}) {
    this.layerSystem = layerSystem;

    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    // Tiempo inicial determinista basado en el seed
    this.startTime = params.startTime || (seed % 10000) / 1000;

    // Colores de lava por defecto
    const lavaColor = params.lavaColor instanceof THREE.Color ? params.lavaColor : 
      params.lavaColor ? new THREE.Color(params.lavaColor as any) : 
      new THREE.Color(0xFF4500); // OrangeRed
    
    const hotLavaColor = params.hotLavaColor instanceof THREE.Color ? params.hotLavaColor : 
      params.hotLavaColor ? new THREE.Color(params.hotLavaColor as any) : 
      new THREE.Color(0xFF6600); // Bright orange
    
    const coolingLavaColor = params.coolingLavaColor instanceof THREE.Color ? params.coolingLavaColor : 
      params.coolingLavaColor ? new THREE.Color(params.coolingLavaColor as any) : 
      new THREE.Color(0x8B0000); // Dark red

    this.params = {
      lavaColor,
      hotLavaColor,
      coolingLavaColor,
      waveHeight: params.waveHeight || rng.uniform(PROCEDURAL_RANGES.WAVE_HEIGHT.min, PROCEDURAL_RANGES.WAVE_HEIGHT.max),
      waveFrequency: params.waveFrequency || rng.uniform(PROCEDURAL_RANGES.WAVE_FREQUENCY.min, PROCEDURAL_RANGES.WAVE_FREQUENCY.max),
      waveSpeed: params.waveSpeed || rng.uniform(PROCEDURAL_RANGES.WAVE_SPEED.min, PROCEDURAL_RANGES.WAVE_SPEED.max),
      secondaryWaveHeight: params.secondaryWaveHeight || rng.uniform(PROCEDURAL_RANGES.WAVE_HEIGHT.min * 0.7, PROCEDURAL_RANGES.WAVE_HEIGHT.max * 0.7),
      secondaryWaveFrequency: params.secondaryWaveFrequency || rng.uniform(PROCEDURAL_RANGES.WAVE_FREQUENCY.min * 1.3, PROCEDURAL_RANGES.WAVE_FREQUENCY.max * 1.3),
      secondaryWaveSpeed: params.secondaryWaveSpeed || rng.uniform(PROCEDURAL_RANGES.WAVE_SPEED.min * 1.2, PROCEDURAL_RANGES.WAVE_SPEED.max * 1.2),
      distortionScale: params.distortionScale || 4.0, // Mayor que agua para viscosidad
      distortionSpeed: params.distortionSpeed || 0.3, // Más lento
      emissiveIntensity: params.emissiveIntensity || rng.uniform(PROCEDURAL_RANGES.EMISSIVE_INTENSITY.min, PROCEDURAL_RANGES.EMISSIVE_INTENSITY.max),
      specularIntensity: params.specularIntensity || rng.uniform(PROCEDURAL_RANGES.SPECULAR_INTENSITY.min, PROCEDURAL_RANGES.SPECULAR_INTENSITY.max),
      reflectivity: params.reflectivity || 0.1, // Menor que agua
      transparency: params.transparency || rng.uniform(PROCEDURAL_RANGES.TRANSPARENCY.min, PROCEDURAL_RANGES.TRANSPARENCY.max),
      roughness: params.roughness || 0.7, // Más rugoso que agua
      metalness: params.metalness || 0.4, // Algo metálico
      normalScale: params.normalScale || 0.08, // Mayor que agua
      normalSpeed: params.normalSpeed || 0.2, // Más lento
      seed,
      startTime: this.startTime,
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max)
    };

    // Crear material usando el sistema de capas
    this.material = this.layerSystem.createLavaFluidLayerMaterial(this.params);

    // Añadir capa al sistema
    this.layerMesh = this.layerSystem.addEffectLayer(
      "lavaFluid",
      this.material,
      this.layerSystem.getNextScaleFactor(),
      this
    );
  }

  update(deltaTime: number): void {
    // Calcular tiempo absoluto determinista con velocidad procedural muy lenta
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000; // Mantener el tiempo en un ciclo de 1000 segundos
    
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
export function createLavaFluidFromPythonData(layerSystem: PlanetLayerSystem, pythonData: any, globalSeed?: number): LavaFluidEffect {
  const planetInfo = pythonData.planet_info || {};
  const baseColor = planetInfo.base_color ? 
    (typeof planetInfo.base_color === 'string' ? 
      new THREE.Color(planetInfo.base_color) : 
      new THREE.Color().fromArray(planetInfo.base_color)) :
    new THREE.Color(0xFF4500); // Color naranja-rojo por defecto para lava
  
  // Generar colores de lava basados en el color base
  const hsl = { h: 0, s: 0, l: 0 };
  baseColor.getHSL(hsl);
  
  // Ajustar para aspecto de lava (rojos, naranjas, amarillos)
  const lavaHue = Math.max(0, Math.min(0.16, hsl.h)); // Limitar a rango rojo-naranja-amarillo
  
  const lavaColor = new THREE.Color().setHSL(
    lavaHue,
    Math.min(1, hsl.s * 1.5), // Muy saturado
    Math.min(1, hsl.l * 1.2)  // Luminoso
  );
  
  const hotLavaColor = new THREE.Color().setHSL(
    Math.min(0.16, lavaHue + 0.05), // Más hacia amarillo
    Math.min(1, hsl.s * 1.3),
    Math.min(1, hsl.l * 1.4) // Más brillante
  );
  
  const coolingLavaColor = new THREE.Color().setHSL(
    Math.max(0, lavaHue - 0.05), // Más hacia rojo
    Math.min(1, hsl.s * 1.2),
    Math.max(0.1, hsl.l * 0.6) // Más oscuro
  );

  // Usar el seed del planeta para variaciones sutiles
  const seed = globalSeed || 12345;
  const rng = new SeededRandom(seed + 6000); // +6000 para LavaFluidEffect

  const params: LavaFluidParams = {
    lavaColor,
    hotLavaColor,
    coolingLavaColor,
    emissiveIntensity: rng.uniform(PROCEDURAL_RANGES.EMISSIVE_INTENSITY.min, PROCEDURAL_RANGES.EMISSIVE_INTENSITY.max),
    specularIntensity: rng.uniform(PROCEDURAL_RANGES.SPECULAR_INTENSITY.min, PROCEDURAL_RANGES.SPECULAR_INTENSITY.max),
    reflectivity: 0.1,
    transparency: rng.uniform(PROCEDURAL_RANGES.TRANSPARENCY.min, PROCEDURAL_RANGES.TRANSPARENCY.max),
    roughness: 0.7,
    metalness: 0.4,
    normalScale: 0.08,
    normalSpeed: 0.15,
    seed
  };
  
  return new LavaFluidEffect(layerSystem, params);
}