// atlas-ui/react/static/js/3DEffects/LifeFormIntelligentLife.tsx
import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";
import { DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime.tsx";

const PROCEDURAL_RANGES = {
  SATELLITE_COUNT: { min: 1, max: 10 },
  SATELLITE_DISTANCE: { min: 1, max: 1 },
  ORBITAL_SPEED: { min: 0.2, max: 1.2 },
};

export interface LifeFormIntelligentLifeParams {
  color?: number[] | THREE.Color;
  satelliteCount?: number;
  satelliteDistance?: number;
  orbitalSpeed?: number;
  seed?: number;
  cosmicOriginTime?: number;
}

export class LifeFormIntelligentLifeEffect {
  private group: THREE.Group;
  private satellites: THREE.Mesh[] = [];
  private params: LifeFormIntelligentLifeParams;
  private rng: SeededRandom;
  private planetRadius: number;
  private cosmicOffset: number;

  constructor(planetRadius: number, params: LifeFormIntelligentLifeParams = {}) {
    this.planetRadius = planetRadius;

    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);

    this.params = {
      color: params.color || [1.0, 1.0, 0.8],
      satelliteCount: params.satelliteCount || Math.floor(this.rng.random() * (PROCEDURAL_RANGES.SATELLITE_COUNT.max - PROCEDURAL_RANGES.SATELLITE_COUNT.min) + PROCEDURAL_RANGES.SATELLITE_COUNT.min),
      satelliteDistance: params.satelliteDistance || this.rng.random() * (PROCEDURAL_RANGES.SATELLITE_DISTANCE.max - PROCEDURAL_RANGES.SATELLITE_DISTANCE.min) + PROCEDURAL_RANGES.SATELLITE_DISTANCE.min,
      orbitalSpeed: params.orbitalSpeed || this.rng.random() * (PROCEDURAL_RANGES.ORBITAL_SPEED.max - PROCEDURAL_RANGES.ORBITAL_SPEED.min) + PROCEDURAL_RANGES.ORBITAL_SPEED.min,
      cosmicOriginTime: params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME,
      seed,
    };

    this.cosmicOffset = (seed % 100) * 0.1;

    this.group = new THREE.Group();
    this.createSatellites();
  }

  private createSatellites(): void {
    const satelliteCount = this.params.satelliteCount!;
    const baseDistance = this.planetRadius + this.params.satelliteDistance!;

    for (let i = 0; i < satelliteCount; i++) {
      const distance = baseDistance;
      
      // Generate random orbital plane (inclination and orientation)
      const inclination = this.rng.random() * Math.PI; // 0 to 180 degrees
      const longitudeOfAscendingNode = this.rng.random() * Math.PI * 2; // 0 to 360 degrees
      const initialAngle = this.rng.random() * Math.PI * 2; // Starting position in orbit
      
      // Calculate initial position
      const position = this.calculateOrbitalPosition(distance, inclination, longitudeOfAscendingNode, initialAngle);

      // Create satellite geometry - larger, more visible octahedron
      const geometry = new THREE.OctahedronGeometry(this.planetRadius * 0.025, 0);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]),
        transparent: false,
        opacity: 1.0,
      });

      const satellite = new THREE.Mesh(geometry, material);
      satellite.position.set(position.x, position.y, position.z);
      satellite.userData = {
        distance: distance,
        inclination: inclination,
        longitudeOfAscendingNode: longitudeOfAscendingNode,
        initialAngle: initialAngle,
        orbitalSpeed: this.rng.random() * 0.5 + 0.5,
      };

      this.satellites.push(satellite);
      this.group.add(satellite);
    }
  }

  private calculateOrbitalPosition(distance: number, inclination: number, longitudeOfAscendingNode: number, angle: number): THREE.Vector3 {
    // Calculate position in the orbital plane
    const x_orbital = distance * Math.cos(angle);
    const y_orbital = distance * Math.sin(angle);
    const z_orbital = 0;

    // Apply inclination rotation (rotation around X axis)
    const x_inclined = x_orbital;
    const y_inclined = y_orbital * Math.cos(inclination) - z_orbital * Math.sin(inclination);
    const z_inclined = y_orbital * Math.sin(inclination) + z_orbital * Math.cos(inclination);

    // Apply longitude of ascending node rotation (rotation around Z axis)
    const x_final = x_inclined * Math.cos(longitudeOfAscendingNode) - y_inclined * Math.sin(longitudeOfAscendingNode);
    const y_final = x_inclined * Math.sin(longitudeOfAscendingNode) + y_inclined * Math.cos(longitudeOfAscendingNode);
    const z_final = z_inclined;

    return new THREE.Vector3(x_final, y_final, z_final);
  }



  public update(_deltaTime?: number): void {
    const currentTimeSeconds = Date.now() / 1000;
    const timeSinceCosmicOrigin = currentTimeSeconds - (this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME);
    const animTime = (timeSinceCosmicOrigin + this.cosmicOffset) * (this.params.orbitalSpeed || 1.0);

    // Update satellites orbital motion
    this.satellites.forEach((satellite) => {
      const userData = satellite.userData;
      const currentAngle = userData.initialAngle + animTime * userData.orbitalSpeed * 0.1;
      
      // Calculate new position using orbital mechanics
      const position = this.calculateOrbitalPosition(
        userData.distance,
        userData.inclination,
        userData.longitudeOfAscendingNode,
        currentAngle
      );
      
      satellite.position.set(position.x, position.y, position.z);
      satellite.rotation.y = currentAngle;
    });
  }

  public getObject3D(): THREE.Object3D {
    return this.group;
  }

  public addToScene(scene: THREE.Scene, position?: THREE.Vector3): void {
    if (position) {
      this.group.position.copy(position);
    }
    scene.add(this.group);
  }

  public removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.group);
  }

  public dispose(): void {
    this.satellites.forEach((satellite) => {
      satellite.geometry.dispose();
      (satellite.material as THREE.Material).dispose();
    });

    this.group.clear();
  }

  public setEnabled(enabled: boolean): void {
    this.group.visible = enabled;
  }

  public updateParams(newParams: Partial<LifeFormIntelligentLifeParams>): void {
    Object.assign(this.params, newParams);

    if (newParams.color) {
      const color = new THREE.Color(newParams.color[0], newParams.color[1], newParams.color[2]);
      
      this.satellites.forEach((satellite) => {
        (satellite.material as THREE.MeshBasicMaterial).color = color;
      });
    }
  }
}

export function createLifeFormIntelligentLifeFromPythonData(planetRadius: number, pythonData: any, globalSeed?: number): LifeFormIntelligentLifeEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);

  const params: LifeFormIntelligentLifeParams = {
    seed: seed + 90001,
    color: pythonData.color || [1.0, 1.0, 0.8],
    cosmicOriginTime: pythonData?.timing?.cosmic_origin_time || pythonData?.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME,
  };

  return new LifeFormIntelligentLifeEffect(planetRadius, params);
}