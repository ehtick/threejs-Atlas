// atlas-ui/react/static/js/3DComponents/UniversalPlanetRenderer.tsx

import * as THREE from "three";
import { effectRegistry } from "../3DEffects/EffectRegistry";

interface PlanetRenderingData {
  planet_info: {
    name: string;
    type: string;
    base_color: string;
    radius: number;
  };
  surface_elements?: unknown;
  atmosphere?: unknown;
  rings?: unknown;
  timing?: unknown;
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
      const response = await fetch(`/api/planet/${encodeURIComponent(planetName)}/rendering-data`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to fetch planet data");
      }

      const data: PlanetRenderingData = result.rendering_data;

      const baseColor = new THREE.Color(data.planet_info.base_color);
      if (this.planetMesh.material instanceof THREE.MeshStandardMaterial) {
        this.planetMesh.material.color = baseColor;
      } else {
        const newMaterial = new THREE.MeshStandardMaterial({
          color: baseColor,
          metalness: 0.1,
          roughness: 0.8,
        });
        this.planetMesh.material = newMaterial;
      }

      const effects = effectRegistry.createEffectsFromPythonPlanetData(data, 1, this.planetMesh, this.scene);

      if (data.atmosphere) {
      }

      if (data.rings && typeof data.rings === "object" && data.rings !== null && "has_rings" in data.rings) {
      }
    } catch (error) {
      this.applyDefaultRendering();
    }
  }

  private applyDefaultRendering(): void {
    const defaultEffects = effectRegistry.createEffectsFromList([], 1, this.planetMesh);
  }

  dispose(): void {
    effectRegistry.clearAllEffects();
  }
}
