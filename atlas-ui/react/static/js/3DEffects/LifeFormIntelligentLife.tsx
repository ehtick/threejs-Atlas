// atlas-ui/react/static/js/3DEffects/LifeFormIntelligentLife.tsx
import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";
import { DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime.tsx";

const PROCEDURAL_RANGES = {
  SATELLITE_COUNT: { min: 1, max: 10 },
  SATELLITE_DISTANCE: { min: 2, max: 4 },
  ORBITAL_SPEED: { min: 2.2, max: 4.8 },
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
      const angle = (i / satelliteCount) * Math.PI * 2 + this.rng.random() * 0.5;
      const distance = baseDistance + this.rng.random() * 10 - 5;
      const height = (this.rng.random() - 0.5) * this.planetRadius * 0.2;

      const x = Math.cos(angle) * distance;
      const z = Math.sin(angle) * distance;

      // Create satellite geometry - larger, more visible octahedron
      const geometry = new THREE.OctahedronGeometry(this.planetRadius * 0.025, 0);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]),
        transparent: false,
        opacity: 1.0,
      });

      const satellite = new THREE.Mesh(geometry, material);
      satellite.position.set(x, height, z);
      satellite.userData = {
        originalAngle: angle,
        distance: distance,
        height: height,
        orbitalSpeed: this.rng.random() * 0.5 + 0.5,
      };

      this.satellites.push(satellite);
      this.group.add(satellite);
    }
  }



  public update(_deltaTime?: number): void {
    const currentTimeSeconds = Date.now() / 1000;
    const timeSinceCosmicOrigin = currentTimeSeconds - (this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME);
    const animTime = (timeSinceCosmicOrigin + this.cosmicOffset) * (this.params.orbitalSpeed || 1.0);

    // Update satellites orbital motion
    this.satellites.forEach((satellite) => {
      const userData = satellite.userData;
      const newAngle = userData.originalAngle + animTime * userData.orbitalSpeed * 0.1;
      
      const x = Math.cos(newAngle) * userData.distance;
      const z = Math.sin(newAngle) * userData.distance;
      
      satellite.position.set(x, userData.height, z);
      satellite.rotation.y = newAngle;
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