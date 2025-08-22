/**
 * Exotic Doodles Effect
 * Large animated doodles/scribbles/squiggles for exotic planets
 */

import * as THREE from 'three';
import { SeededRandom } from '../Utils/SeededRandom';

export interface ExoticDoodlesParams {
  doodles?: Array<{
    position_3d: [number, number, number];
    type: 'arc' | 'fractals' | 'squiggle';
    size: number;
    color: [number, number, number, number];
    complexity: number;
    movement_speed: number;
    movement_pattern: 'wave' | 'pulse' | 'spiral';
  }>;
  planetRadius?: number;
}

export class ExoticDoodlesEffect {
  private group: THREE.Group;
  private doodles: THREE.Object3D[] = [];
  private doodleData: ExoticDoodlesParams['doodles'] = [];
  private planetRadius: number;
  private time: number = 0;

  constructor(planetRadius: number, params: ExoticDoodlesParams = {}) {
    this.group = new THREE.Group();
    this.planetRadius = planetRadius;
    this.doodleData = params.doodles || [];

    if (this.doodleData.length > 0) {
      this.createDoodles();
    }
  }

  private createDoodles(): void {
    this.doodleData.forEach((doodle) => {
      let doodleObject: THREE.Object3D;

      switch (doodle.type) {
        case 'arc':
          doodleObject = this.createArcDoodle(doodle);
          break;
        case 'fractals':
          doodleObject = this.createFractalDoodle(doodle);
          break;
        case 'squiggle':
          doodleObject = this.createSquiggleDoodle(doodle);
          break;
        default:
          doodleObject = this.createSquiggleDoodle(doodle);
      }

      // Position on sphere surface
      const distance = this.planetRadius * 1.015; // Slightly above surface
      doodleObject.position.set(
        doodle.position_3d[0] * distance,
        doodle.position_3d[1] * distance,
        doodle.position_3d[2] * distance
      );

      // Make doodle face outward from planet center
      doodleObject.lookAt(
        doodleObject.position.x * 2,
        doodleObject.position.y * 2,
        doodleObject.position.z * 2
      );

      this.doodles.push(doodleObject);
      this.group.add(doodleObject);
    });
  }

  private createArcDoodle(doodle: NonNullable<ExoticDoodlesParams['doodles']>[0]): THREE.Object3D {
    const group = new THREE.Group();
    
    // Create arc using curve
    const curve = new THREE.EllipseCurve(
      0, 0,                              // Center
      doodle.size * this.planetRadius,   // xRadius
      doodle.size * this.planetRadius * 0.7, // yRadius
      0, Math.PI * 1.5,                  // Start and end angle
      false,                              // clockwise
      0                                   // Rotation
    );

    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(doodle.color[0], doodle.color[1], doodle.color[2]),
      transparent: true,
      opacity: doodle.color[3],
      linewidth: 3
    });

    const arc = new THREE.Line(geometry, material);
    group.add(arc);

    return group;
  }

  private createFractalDoodle(doodle: NonNullable<ExoticDoodlesParams['doodles']>[0]): THREE.Object3D {
    const group = new THREE.Group();
    
    // Create multiple small circles in a fractal pattern
    for (let i = 0; i < doodle.complexity; i++) {
      const angle = (i / doodle.complexity) * Math.PI * 2;
      const radius = doodle.size * this.planetRadius * (0.2 + Math.sin(i * 0.5) * 0.3);
      
      const geometry = new THREE.RingGeometry(
        radius * 0.8,
        radius,
        16
      );
      
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(
          doodle.color[0] * (0.7 + Math.sin(i) * 0.3),
          doodle.color[1] * (0.7 + Math.cos(i) * 0.3),
          doodle.color[2]
        ),
        transparent: true,
        opacity: doodle.color[3] * (0.5 + Math.sin(i * 2) * 0.5),
        side: THREE.DoubleSide
      });

      const ring = new THREE.Mesh(geometry, material);
      ring.position.set(
        Math.cos(angle) * doodle.size * this.planetRadius * 0.5,
        Math.sin(angle) * doodle.size * this.planetRadius * 0.5,
        Math.sin(i * 0.3) * doodle.size * this.planetRadius * 0.1
      );
      ring.rotation.z = angle;
      
      group.add(ring);
    }

    return group;
  }

  private createSquiggleDoodle(doodle: NonNullable<ExoticDoodlesParams['doodles']>[0]): THREE.Object3D {
    const group = new THREE.Group();
    
    // Create a wavy line
    const points: THREE.Vector3[] = [];
    const segments = doodle.complexity * 2;
    
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = (t - 0.5) * doodle.size * this.planetRadius * 2;
      const y = Math.sin(t * Math.PI * 4) * doodle.size * this.planetRadius * 0.3;
      const z = Math.cos(t * Math.PI * 3) * doodle.size * this.planetRadius * 0.1;
      
      points.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeometry = new THREE.TubeGeometry(
      curve,
      segments * 2,
      doodle.size * this.planetRadius * 0.02,
      8,
      false
    );
    
    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color(doodle.color[0], doodle.color[1], doodle.color[2]),
      transparent: true,
      opacity: doodle.color[3],
      emissive: new THREE.Color(doodle.color[0] * 0.2, doodle.color[1] * 0.2, doodle.color[2] * 0.2),
      emissiveIntensity: 0.3
    });

    const tube = new THREE.Mesh(tubeGeometry, material);
    group.add(tube);

    return group;
  }

  update(deltaTime: number): void {
    this.time += deltaTime;

    // Animate doodles based on their movement patterns
    this.doodles.forEach((doodle, index) => {
      const data = this.doodleData[index];
      if (!data) return;

      const speed = data.movement_speed;
      
      switch (data.movement_pattern) {
        case 'wave':
          // Gentle wave motion
          doodle.rotation.z = Math.sin(this.time * speed) * 0.2;
          doodle.rotation.x = Math.cos(this.time * speed * 0.7) * 0.1;
          break;
          
        case 'pulse':
          // Pulsing scale
          const pulseScale = 1 + Math.sin(this.time * speed * 2) * 0.1;
          doodle.scale.setScalar(pulseScale);
          break;
          
        case 'spiral':
          // Continuous rotation
          doodle.rotation.z += speed * deltaTime;
          break;
      }
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
    this.doodles.forEach(doodle => {
      doodle.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (child.material instanceof THREE.Material) {
            child.material.dispose();
          }
        } else if (child instanceof THREE.Line) {
          child.geometry.dispose();
          if (child.material instanceof THREE.Material) {
            child.material.dispose();
          }
        }
      });
    });
    this.doodles = [];
  }
}

export function createExoticDoodlesFromPythonData(
  planetRadius: number,
  surfaceElements: any,
  seed?: number
): ExoticDoodlesEffect | null {
  
  // Check if we have exotic_doodles data
  if (!surfaceElements.exotic_doodles || surfaceElements.exotic_doodles.length === 0) {
    return null;
  }

  return new ExoticDoodlesEffect(planetRadius, {
    doodles: surfaceElements.exotic_doodles,
    planetRadius: planetRadius
  });
}