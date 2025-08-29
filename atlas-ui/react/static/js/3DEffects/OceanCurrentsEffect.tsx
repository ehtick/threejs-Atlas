/**
 * OceanCurrentsEffect.tsx
 * 
 * Efecto de corrientes oceánicas para planetas acuáticos.
 * Crea patrones sutiles de albedo que simulan corrientes marinas vistas desde el espacio.
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';
import { SeededRandom } from '../Utils/SeededRandom.tsx';

export interface OceanCurrentsParams {
  // Configuración de corrientes principales
  currentIntensity?: number;
  currentScale?: number;
  currentSpeed?: number;
  
  // Configuración de corrientes secundarias
  secondaryCurrentIntensity?: number;
  secondaryCurrentScale?: number;
  secondaryCurrentSpeed?: number;
  
  // Colores de corrientes
  currentColor?: THREE.Color | number[];
  deepCurrentColor?: THREE.Color | number[];
  
  // Efectos visuales
  opacity?: number;
  transparency?: number;
  
  // Configuración procedural
  seed?: number;
  startTime?: number; // Tiempo inicial fijo para determinismo
  timeSpeed?: number; // Velocidad del tiempo para movimiento (0.05 - 0.2)
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  CURRENT_INTENSITY: { min: 0.3, max: 0.8 },
  CURRENT_SCALE: { min: 1.0, max: 3.0 },
  CURRENT_SPEED: { min: 0.1, max: 0.4 },
  OPACITY: { min: 0.15, max: 0.35 },
  TIME_SPEED: { min: 0.05, max: 0.2 }, // Muy lento para corrientes realistas
};

export class OceanCurrentsEffect {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: OceanCurrentsParams;
  private layerSystem: PlanetLayerSystem;
  private startTime: number;

  constructor(layerSystem: PlanetLayerSystem, params: OceanCurrentsParams = {}) {
    this.layerSystem = layerSystem;

    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    // Tiempo inicial determinista basado en el seed
    this.startTime = params.startTime || (seed % 10000) / 1000;

    const currentColor = params.currentColor instanceof THREE.Color ? params.currentColor : params.currentColor ? new THREE.Color(params.currentColor as any) : new THREE.Color(0x4A9B8E); // Verde-azul claro
    const deepCurrentColor = params.deepCurrentColor instanceof THREE.Color ? params.deepCurrentColor : params.deepCurrentColor ? new THREE.Color(params.deepCurrentColor as any) : new THREE.Color(0x2D5D52); // Verde-azul más oscuro

    this.params = {
      currentColor,
      deepCurrentColor,
      currentIntensity: params.currentIntensity || rng.uniform(PROCEDURAL_RANGES.CURRENT_INTENSITY.min, PROCEDURAL_RANGES.CURRENT_INTENSITY.max),
      currentScale: params.currentScale || rng.uniform(PROCEDURAL_RANGES.CURRENT_SCALE.min, PROCEDURAL_RANGES.CURRENT_SCALE.max),
      currentSpeed: params.currentSpeed || rng.uniform(PROCEDURAL_RANGES.CURRENT_SPEED.min, PROCEDURAL_RANGES.CURRENT_SPEED.max),
      secondaryCurrentIntensity: params.secondaryCurrentIntensity || rng.uniform(PROCEDURAL_RANGES.CURRENT_INTENSITY.min * 0.6, PROCEDURAL_RANGES.CURRENT_INTENSITY.max * 0.6),
      secondaryCurrentScale: params.secondaryCurrentScale || rng.uniform(PROCEDURAL_RANGES.CURRENT_SCALE.min * 1.5, PROCEDURAL_RANGES.CURRENT_SCALE.max * 1.5),
      secondaryCurrentSpeed: params.secondaryCurrentSpeed || rng.uniform(PROCEDURAL_RANGES.CURRENT_SPEED.min * 0.7, PROCEDURAL_RANGES.CURRENT_SPEED.max * 0.7),
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      transparency: params.transparency || 0.8,
      seed,
      startTime: this.startTime,
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max)
    };

    // Crear material usando el sistema de capas
    this.material = this.layerSystem.createOceanCurrentsLayerMaterial(this.params);

    // Añadir capa al sistema
    this.layerMesh = this.layerSystem.addEffectLayer(
      "oceanCurrents",
      this.material,
      this.layerSystem.getNextScaleFactor(),
      this
    );
  }

  update(deltaTime: number): void {
    // Calcular tiempo absoluto determinista desde el inicio con ciclo y velocidad procedural
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 2000; // Ciclo más largo para corrientes lentas
    
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
export function createOceanCurrentsFromPythonData(layerSystem: PlanetLayerSystem, pythonData: any, globalSeed?: number): OceanCurrentsEffect {
  const planetInfo = pythonData.planet_info || {};
  const surface = pythonData.surface_elements || {};
  
  // Usar el seed del planeta para variaciones únicas pero deterministas
  const seed = globalSeed || 12345;
  const rng = new SeededRandom(seed + 6000); // +6000 para OceanCurrentsEffect

  // Colores basados en el planeta pero con tinte verdoso para corrientes
  let currentColor = new THREE.Color(0x4A9B8E); // Verde-azul claro por defecto
  let deepCurrentColor = new THREE.Color(0x2D5D52); // Verde-azul más oscuro

  if (surface.ocean_currents && surface.ocean_currents.current_color) {
    currentColor = new THREE.Color().fromArray(surface.ocean_currents.current_color);
  }
  
  if (surface.ocean_currents && surface.ocean_currents.deep_current_color) {
    deepCurrentColor = new THREE.Color().fromArray(surface.ocean_currents.deep_current_color);
  }

  const params: OceanCurrentsParams = {
    currentColor,
    deepCurrentColor,
    currentIntensity: surface.ocean_currents?.intensity || rng.uniform(PROCEDURAL_RANGES.CURRENT_INTENSITY.min, PROCEDURAL_RANGES.CURRENT_INTENSITY.max),
    currentScale: surface.ocean_currents?.scale || rng.uniform(PROCEDURAL_RANGES.CURRENT_SCALE.min, PROCEDURAL_RANGES.CURRENT_SCALE.max),
    currentSpeed: surface.ocean_currents?.speed || rng.uniform(PROCEDURAL_RANGES.CURRENT_SPEED.min, PROCEDURAL_RANGES.CURRENT_SPEED.max),
    opacity: surface.ocean_currents?.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    transparency: 0.8,
    seed
  };
  
  return new OceanCurrentsEffect(layerSystem, params);
}