/**
 * Cloud Bands Layer - Versión mejorada que funciona como capa
 * 
 * Esta versión está diseñada para trabajar con PlanetLayerSystem
 * y no sobrescribe el material base del planeta.
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';

export interface CloudBandsLayerParams {
  numBands?: number;
  bandPositions?: number[];
  bandWidths?: number[];
  rotationAngle?: number;
  bandColor?: THREE.Color | number[];
  animationSpeed?: number;
  turbulence?: number;
  noiseScale?: number;
  opacity?: number;
  seed?: number;
}

// Generador de números aleatorios con semilla
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  random(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  uniform(min: number, max: number): number {
    return min + this.random() * (max - min);
  }
}

export class CloudBandsLayer {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: CloudBandsLayerParams;
  private layerSystem: PlanetLayerSystem;

  constructor(layerSystem: PlanetLayerSystem, params: CloudBandsLayerParams = {}) {
    this.layerSystem = layerSystem;
    const seed = params.seed || Math.floor(Math.random() * 1000000); // Fallback
    
    this.params = {
      numBands: params.numBands || 8,
      bandPositions: params.bandPositions || this.generateDefaultBandPositions(params.numBands || 8, seed),
      bandWidths: params.bandWidths || this.generateDefaultBandWidths(params.numBands || 8, seed),
      rotationAngle: params.rotationAngle || 0,
      bandColor: params.bandColor || new THREE.Color(0xFF8C00),
      animationSpeed: params.animationSpeed || 1.0,
      turbulence: params.turbulence || 0.5,
      noiseScale: params.noiseScale || 3.0,
      opacity: params.opacity || 0.7,
      seed
    };

    // Crear material usando el sistema de capas
    this.material = this.layerSystem.createCloudBandsLayerMaterial(this.params);
    
    // Añadir capa al sistema, pasando referencia a este objeto
    this.layerMesh = this.layerSystem.addEffectLayer('cloudBands', this.material, 1.001, this);
  }

  private generateDefaultBandPositions(numBands: number, seed: number): number[] {
    const positions = new Array(20).fill(0);
    const rng = new SeededRandom(seed + 12345); // Usar seed única
    
    for (let i = 0; i < numBands && i < 20; i++) {
      positions[i] = rng.uniform(-0.8, 0.8);
    }
    
    return positions;
  }

  private generateDefaultBandWidths(numBands: number, seed: number): number[] {
    const widths = new Array(20).fill(0);
    const rng = new SeededRandom(seed + 67890); // Usar seed única
    
    for (let i = 0; i < numBands && i < 20; i++) {
      widths[i] = rng.uniform(0.08, 0.15);
    }
    
    return widths;
  }

  update(deltaTime: number, planetRotation?: number): void {
    if (this.material.uniforms.time) {
      this.material.uniforms.time.value += deltaTime;
    }
    
    if (planetRotation !== undefined && this.material.uniforms.rotationAngle) {
      this.material.uniforms.rotationAngle.value = planetRotation;
    }
  }

  updateParams(newParams: Partial<CloudBandsLayerParams>): void {
    this.params = { ...this.params, ...newParams };
    
    if (newParams.numBands !== undefined) {
      this.material.uniforms.numBands.value = newParams.numBands;
    }
    if (newParams.bandPositions) {
      this.material.uniforms.bandPositions.value = newParams.bandPositions;
    }
    if (newParams.bandWidths) {
      this.material.uniforms.bandWidths.value = newParams.bandWidths;
    }
    if (newParams.animationSpeed !== undefined) {
      this.material.uniforms.animationSpeed.value = newParams.animationSpeed;
    }
    if (newParams.turbulence !== undefined) {
      this.material.uniforms.turbulence.value = newParams.turbulence;
    }
  }

  dispose(): void {
    // La limpieza se maneja en PlanetLayerSystem
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createCloudBandsLayerFromPythonData(
  layerSystem: PlanetLayerSystem,
  gasGiantData: any,
  globalSeed?: number
): CloudBandsLayer {
  const cloudBands = gasGiantData.cloud_bands || {};
  
  const params: CloudBandsLayerParams = {
    numBands: cloudBands.num_bands || 8,
    bandPositions: cloudBands.positions || undefined,
    bandWidths: cloudBands.widths || undefined,
    rotationAngle: cloudBands.rotation || 0,
    bandColor: new THREE.Color(0xFF8C00),
    animationSpeed: 1.0,
    turbulence: gasGiantData.turbulence || 0.5,
    noiseScale: 3.0,
    opacity: 0.7,
    seed: globalSeed // Usar seed desde Python
  };

  return new CloudBandsLayer(layerSystem, params);
}