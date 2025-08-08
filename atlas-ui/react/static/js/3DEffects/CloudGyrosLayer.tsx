/**
 * Cloud Gyros Layer - Versión mejorada que funciona como capa
 * 
 * Esta versión está diseñada para trabajar con PlanetLayerSystem
 * y no sobrescribe el material base del planeta.
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';

export interface CloudGyrosLayerParams {
  stormCenters?: Array<{x: number, y: number}>;
  stormColor?: THREE.Color | number[];
  stormIntensity?: number;
  spiralSpeed?: number;
  animationSpeed?: number;
  opacity?: number;
  seed?: number;
}

export class CloudGyrosLayer {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: CloudGyrosLayerParams;
  private layerSystem: PlanetLayerSystem;

  constructor(layerSystem: PlanetLayerSystem, params: CloudGyrosLayerParams = {}) {
    this.layerSystem = layerSystem;
    this.params = {
      stormCenters: params.stormCenters || [
        {x: 0.3, y: -0.2},
        {x: -0.4, y: 0.6}, 
        {x: 0.1, y: 0.8}
      ],
      stormColor: params.stormColor || new THREE.Color(0x8B0000),
      stormIntensity: params.stormIntensity || 0.8,
      spiralSpeed: params.spiralSpeed || 2.0,
      animationSpeed: params.animationSpeed || 1.0,
      opacity: params.opacity || 0.6
    };

    // Crear material usando el sistema de capas
    this.material = this.layerSystem.createCloudGyrosLayerMaterial(this.params);
    
    // Añadir capa al sistema (ligeramente más grande que CloudBands), pasando referencia a este objeto
    this.layerMesh = this.layerSystem.addEffectLayer('cloudGyros', this.material, 1.002, this);
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
  
  const params: CloudGyrosLayerParams = {
    stormCenters: storms.centers || [
      {x: 0.3, y: -0.2},
      {x: -0.4, y: 0.6},
      {x: 0.1, y: 0.8}
    ],
    stormColor: new THREE.Color(0x8B0000),
    stormIntensity: storms.intensity || 0.8,
    spiralSpeed: storms.spiral_speed || 2.0,
    animationSpeed: 0.2,
    opacity: 0.6,
    seed: globalSeed // Usar seed desde Python
  };

  return new CloudGyrosLayer(layerSystem, params);
}