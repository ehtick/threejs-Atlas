import * as THREE from "three";
import { effectRegistry } from '../3DEffects/EffectRegistry';

/**
 * Universal Planet Renderer - Sistema completamente basado en 3DEffects
 * 
 * Este renderizador NO tiene shaders hardcodeados. Todo pasa por 3DEffects.
 */

interface PlanetRenderingData {
  planet_info: {
    name: string;
    type: string;
    base_color: string;
    radius: number;
  };
  surface_elements?: any;
  atmosphere?: any;
  rings?: any;
  timing?: any;
}

export class UniversalPlanetRenderer {
  private scene: THREE.Scene;
  private planetMesh: THREE.Mesh;
  
  constructor(scene: THREE.Scene, planetMesh: THREE.Mesh) {
    this.scene = scene;
    this.planetMesh = planetMesh;
  }
  
  async loadPlanetData(planetName: string): Promise<void> {
    try {
      // Obtener datos del planeta desde la API
      const response = await fetch(`/api/planet/${encodeURIComponent(planetName)}/rendering-data`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch planet data');
      }
      
      const data: PlanetRenderingData = result.rendering_data;
      
      // Aplicar color base usando material estándar
      const baseColor = new THREE.Color(data.planet_info.base_color);
      if (this.planetMesh.material instanceof THREE.MeshStandardMaterial) {
        this.planetMesh.material.color = baseColor;
      } else {
        // Reemplazar con material estándar
        const newMaterial = new THREE.MeshStandardMaterial({
          color: baseColor,
          metalness: 0.1,
          roughness: 0.8
        });
        this.planetMesh.material = newMaterial;
      }
      
      // TODO: Usar efectRegistry.createEffectsFromPythonPlanetData para todos los efectos
      // En lugar de shaders hardcodeados, usar el sistema modular de efectos
      const effects = effectRegistry.createEffectsFromPythonPlanetData(
        data,
        1, // planetRadius
        this.planetMesh,
        this.scene
      );
      
      
      // Procesar atmósfera si existe (usando 3DEffects)
      if (data.atmosphere) {
        // TODO: Crear efecto de atmósfera en 3DEffects en lugar de aquí
      }
      
      // Procesar anillos si existen (usando 3DEffects)
      if (data.rings && data.rings.has_rings) {
        // TODO: Crear efecto de anillos en 3DEffects en lugar de aquí
      }
      
    } catch (error) {
      console.error('Error loading planet data:', error);
      // Aplicar efectos por defecto usando 3DEffects
      this.applyDefaultRendering();
    }
  }
  
  private applyDefaultRendering(): void {
    // Usar efectos por defecto del registry en lugar de shaders hardcodeados
    const defaultEffects = effectRegistry.createEffectsFromList(
      [], // Lista vacía = efectos por defecto
      1, // planetRadius
      this.planetMesh
    );
    
  }
  
  // Método para limpiar recursos
  dispose(): void {
    // Limpiar efectos a través del registry
    effectRegistry.clearAllEffects();
  }
}