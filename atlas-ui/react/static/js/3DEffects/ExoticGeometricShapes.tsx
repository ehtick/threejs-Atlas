/**
 * Exotic Geometric Shapes Effect
 * Small rotating geometric shapes for exotic planets
 */

import * as THREE from 'three';
import { SeededRandom } from '../Utils/SeededRandom';

export interface ExoticGeometricShapesParams {
  shapes?: Array<{
    position_3d: [number, number, number];
    sides: number;
    size: number;
    rotation_speed: number;
    color: [number, number, number, number];
    angle: number;
  }>;
  planetRadius?: number;
}

export class ExoticGeometricShapesEffect {
  private group: THREE.Group;
  private shapes: THREE.Mesh[] = [];
  private rotationSpeeds: number[] = [];
  private planetRadius: number;

  constructor(planetRadius: number, params: ExoticGeometricShapesParams = {}) {
    this.group = new THREE.Group();
    this.planetRadius = planetRadius;

    if (params.shapes && params.shapes.length > 0) {
      this.createShapes(params.shapes);
    }
  }

  private createShapes(shapesData: ExoticGeometricShapesParams['shapes']) {
    if (!shapesData) return;

    shapesData.forEach((shapeData) => {
      // Create geometry based on number of sides
      let geometry: THREE.BufferGeometry;
      
      if (shapeData.sides === 3) {
        // Triangle
        geometry = new THREE.ConeGeometry(shapeData.size * this.planetRadius, shapeData.size * this.planetRadius * 0.8, 3);
      } else if (shapeData.sides === 4) {
        // Square/Diamond
        geometry = new THREE.BoxGeometry(
          shapeData.size * this.planetRadius,
          shapeData.size * this.planetRadius,
          shapeData.size * this.planetRadius * 0.3
        );
      } else if (shapeData.sides === 6) {
        // Hexagon
        geometry = new THREE.CylinderGeometry(
          shapeData.size * this.planetRadius,
          shapeData.size * this.planetRadius,
          shapeData.size * this.planetRadius * 0.3,
          6
        );
      } else {
        // Other polygons (5, 7, 8 sides)
        geometry = new THREE.CylinderGeometry(
          shapeData.size * this.planetRadius,
          shapeData.size * this.planetRadius,
          shapeData.size * this.planetRadius * 0.3,
          shapeData.sides
        );
      }

      // Create material with color
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(shapeData.color[0], shapeData.color[1], shapeData.color[2]),
        transparent: true,
        opacity: shapeData.color[3],
        emissive: new THREE.Color(shapeData.color[0] * 0.3, shapeData.color[1] * 0.3, shapeData.color[2] * 0.3),
        emissiveIntensity: 0.5,
        shininess: 100,
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(geometry, material);

      // Position on sphere surface
      const distance = this.planetRadius * 1.02; // Slightly above surface
      mesh.position.set(
        shapeData.position_3d[0] * distance,
        shapeData.position_3d[1] * distance,
        shapeData.position_3d[2] * distance
      );

      // Make shape face outward from planet center
      mesh.lookAt(
        mesh.position.x * 2,
        mesh.position.y * 2,
        mesh.position.z * 2
      );

      // Apply initial rotation
      mesh.rotateZ(shapeData.angle);

      this.shapes.push(mesh);
      this.rotationSpeeds.push(shapeData.rotation_speed);
      this.group.add(mesh);
    });
  }

  update(deltaTime: number): void {
    // Rotate each shape at its own speed
    this.shapes.forEach((shape, index) => {
      shape.rotateZ(this.rotationSpeeds[index] * deltaTime);
    });
  }

  addToScene(scene: THREE.Scene, planetPosition: THREE.Vector3): void {
    this.group.position.copy(planetPosition);
    scene.add(this.group);
  }

  removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.group);
  }

  getObject3D(): THREE.Object3D {
    return this.group;
  }

  dispose(): void {
    this.shapes.forEach(shape => {
      shape.geometry.dispose();
      if (shape.material instanceof THREE.Material) {
        shape.material.dispose();
      }
    });
    this.shapes = [];
  }
}

export function createExoticGeometricShapesFromPythonData(
  planetRadius: number,
  surfaceElements: any,
  seed?: number
): ExoticGeometricShapesEffect | null {
  
  // Check if we have small_geometric_shapes data
  if (!surfaceElements.small_geometric_shapes || surfaceElements.small_geometric_shapes.length === 0) {
    return null;
  }

  return new ExoticGeometricShapesEffect(planetRadius, {
    shapes: surfaceElements.small_geometric_shapes,
    planetRadius: planetRadius
  });
}