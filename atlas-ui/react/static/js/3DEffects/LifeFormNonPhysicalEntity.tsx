// atlas-ui/react/static/js/3DEffects/LifeFormNonPhysicalEntity.tsx
import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";
import { DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime.tsx";

const PROCEDURAL_RANGES = {
  RING_COUNT: { min: 3, max: 8 },
  RING_DISTANCE: { min: 1.5, max: 3.5 },
  WAVE_COUNT: { min: 5, max: 15 },
  WAVE_AMPLITUDE: { min: 0.3, max: 0.8 },
  ORBITAL_SPEED: { min: 0.2, max: 0.8 },
};

export interface LifeFormNonPhysicalEntityParams {
  color?: number[] | THREE.Color;
  ringCount?: number;
  ringDistance?: number;
  waveCount?: number;
  waveAmplitude?: number;
  orbitalSpeed?: number;
  seed?: number;
  cosmicOriginTime?: number;
}

export class LifeFormNonPhysicalEntityEffect {
  private group: THREE.Group;
  private plasmaRings: THREE.Mesh[] = [];
  private energyWaves: THREE.Mesh[] = [];
  private params: LifeFormNonPhysicalEntityParams;
  private rng: SeededRandom;
  private planetRadius: number;
  private cosmicOffset: number;

  constructor(planetRadius: number, params: LifeFormNonPhysicalEntityParams = {}) {
    this.planetRadius = planetRadius;

    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);

    this.params = {
      color: params.color || [0.2, 0.6, 1.0],
      ringCount: params.ringCount || Math.floor(this.rng.random() * (PROCEDURAL_RANGES.RING_COUNT.max - PROCEDURAL_RANGES.RING_COUNT.min) + PROCEDURAL_RANGES.RING_COUNT.min),
      ringDistance: params.ringDistance || this.rng.random() * (PROCEDURAL_RANGES.RING_DISTANCE.max - PROCEDURAL_RANGES.RING_DISTANCE.min) + PROCEDURAL_RANGES.RING_DISTANCE.min,
      waveCount: params.waveCount || Math.floor(this.rng.random() * (PROCEDURAL_RANGES.WAVE_COUNT.max - PROCEDURAL_RANGES.WAVE_COUNT.min) + PROCEDURAL_RANGES.WAVE_COUNT.min),
      waveAmplitude: params.waveAmplitude || this.rng.random() * (PROCEDURAL_RANGES.WAVE_AMPLITUDE.max - PROCEDURAL_RANGES.WAVE_AMPLITUDE.min) + PROCEDURAL_RANGES.WAVE_AMPLITUDE.min,
      orbitalSpeed: params.orbitalSpeed || this.rng.random() * (PROCEDURAL_RANGES.ORBITAL_SPEED.max - PROCEDURAL_RANGES.ORBITAL_SPEED.min) + PROCEDURAL_RANGES.ORBITAL_SPEED.min,
      cosmicOriginTime: params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME,
      seed,
    };

    this.cosmicOffset = (seed % 100) * 0.1;

    this.group = new THREE.Group();
    this.createPlasmaRings();
    this.createEnergyWaves();
  }

  private createPlasmaRings(): void {
    const ringCount = this.params.ringCount!;
    const baseDistance = this.planetRadius + this.params.ringDistance!;

    for (let i = 0; i < ringCount; i++) {
      const distance = baseDistance + i * 0.8;
      
      const inclination = this.rng.random() * Math.PI * 0.5;
      const longitudeOfAscendingNode = this.rng.random() * Math.PI * 2;
      const tiltAngle = (this.rng.random() - 0.5) * Math.PI * 0.3;

      const ringGeometry = new THREE.RingGeometry(
        this.planetRadius * 0.15 + i * 0.05,
        this.planetRadius * 0.25 + i * 0.05,
        32,
        1
      );

      const ringMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]) },
          opacity: { value: 0.6 - i * 0.08 },
          ringIndex: { value: i },
          pulseSpeed: { value: 2.0 + this.rng.random() * 2.0 },
        },
        vertexShader: `
          uniform float time;
          uniform float ringIndex;
          uniform float pulseSpeed;
          varying vec2 vUv;
          varying float vIntensity;
          
          void main() {
            vUv = uv;
            float pulse = sin(time * pulseSpeed + ringIndex * 1.5) * 0.3 + 0.7;
            vIntensity = pulse;
            
            vec3 pos = position;
            pos.z += sin(time * 1.5 + ringIndex) * 0.1;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float opacity;
          uniform float time;
          varying vec2 vUv;
          varying float vIntensity;
          
          void main() {
            float dist = length(vUv - 0.5);
            float ring = smoothstep(0.3, 0.35, dist) * (1.0 - smoothstep(0.45, 0.5, dist));
            
            float plasma = sin(dist * 20.0 + time * 3.0) * 0.5 + 0.5;
            float finalIntensity = ring * plasma * vIntensity;
            
            gl_FragColor = vec4(color, finalIntensity * opacity);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      
      ring.rotation.set(inclination, 0, tiltAngle);
      ring.userData = {
        distance: distance,
        inclination: inclination,
        longitudeOfAscendingNode: longitudeOfAscendingNode,
        tiltAngle: tiltAngle,
        orbitalSpeed: this.rng.random() * 0.5 + 0.3,
        ringIndex: i,
      };

      this.plasmaRings.push(ring);
      this.group.add(ring);
    }
  }

  private createEnergyWaves(): void {
    const waveCount = this.params.waveCount!;
    const waveDistance = this.planetRadius + this.params.ringDistance! + 1.0;

    for (let i = 0; i < waveCount; i++) {
      const distance = waveDistance + this.rng.random() * 2.0;
      
      const inclination = this.rng.random() * Math.PI;
      const longitudeOfAscendingNode = this.rng.random() * Math.PI * 2;
      const initialAngle = this.rng.random() * Math.PI * 2;

      const position = this.calculateOrbitalPosition(distance, inclination, longitudeOfAscendingNode, initialAngle);

      const waveGeometry = new THREE.SphereGeometry(
        this.planetRadius * 0.08 + this.rng.random() * 0.04,
        16,
        8
      );

      const waveMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(this.params.color![0] * 0.8, this.params.color![1] * 0.9, this.params.color![2]) },
          amplitude: { value: this.params.waveAmplitude! },
          frequency: { value: 3.0 + this.rng.random() * 4.0 },
          waveIndex: { value: i },
        },
        vertexShader: `
          uniform float time;
          uniform float amplitude;
          uniform float frequency;
          uniform float waveIndex;
          varying vec3 vNormal;
          varying float vWaveIntensity;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            
            float wave = sin(time * frequency + waveIndex * 2.0) * amplitude;
            vec3 pos = position + normal * wave;
            
            vWaveIntensity = (sin(time * 2.0 + waveIndex) + 1.0) * 0.5;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float time;
          varying vec3 vNormal;
          varying float vWaveIntensity;
          
          void main() {
            float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            float ethereal = sin(time * 4.0 + fresnel * 10.0) * 0.3 + 0.7;
            
            float finalIntensity = fresnel * ethereal * vWaveIntensity * 0.8;
            gl_FragColor = vec4(color, finalIntensity);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const wave = new THREE.Mesh(waveGeometry, waveMaterial);
      wave.position.set(position.x, position.y, position.z);
      
      wave.userData = {
        distance: distance,
        inclination: inclination,
        longitudeOfAscendingNode: longitudeOfAscendingNode,
        initialAngle: initialAngle,
        orbitalSpeed: this.rng.random() * 0.4 + 0.2,
        waveIndex: i,
      };

      this.energyWaves.push(wave);
      this.group.add(wave);
    }
  }

  private calculateOrbitalPosition(distance: number, inclination: number, longitudeOfAscendingNode: number, angle: number): THREE.Vector3 {
    const x_orbital = distance * Math.cos(angle);
    const y_orbital = distance * Math.sin(angle);
    const z_orbital = 0;

    const x_inclined = x_orbital;
    const y_inclined = y_orbital * Math.cos(inclination) - z_orbital * Math.sin(inclination);
    const z_inclined = y_orbital * Math.sin(inclination) + z_orbital * Math.cos(inclination);

    const x_final = x_inclined * Math.cos(longitudeOfAscendingNode) - y_inclined * Math.sin(longitudeOfAscendingNode);
    const y_final = x_inclined * Math.sin(longitudeOfAscendingNode) + y_inclined * Math.cos(longitudeOfAscendingNode);
    const z_final = z_inclined;

    return new THREE.Vector3(x_final, y_final, z_final);
  }

  public update(_deltaTime?: number): void {
    const currentTimeSeconds = Date.now() / 1000;
    const timeSinceCosmicOrigin = currentTimeSeconds - (this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME);
    const animTime = (timeSinceCosmicOrigin + this.cosmicOffset) * (this.params.orbitalSpeed || 1.0);

    this.plasmaRings.forEach((ring) => {
      const userData = ring.userData;
      const currentAngle = userData.longitudeOfAscendingNode + animTime * userData.orbitalSpeed * 0.05;
      
      ring.rotation.y = currentAngle;
      ring.rotation.z = userData.tiltAngle + Math.sin(animTime * 0.5 + userData.ringIndex) * 0.2;
      
      const material = ring.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
    });

    this.energyWaves.forEach((wave) => {
      const userData = wave.userData;
      const currentAngle = userData.initialAngle + animTime * userData.orbitalSpeed * 0.1;

      const position = this.calculateOrbitalPosition(userData.distance, userData.inclination, userData.longitudeOfAscendingNode, currentAngle);
      wave.position.set(position.x, position.y, position.z);

      wave.rotation.x += 0.01 + userData.waveIndex * 0.002;
      wave.rotation.y += 0.008 + userData.waveIndex * 0.003;
      wave.rotation.z += 0.012 + userData.waveIndex * 0.001;

      const material = wave.material as THREE.ShaderMaterial;
      material.uniforms.time.value = animTime;
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
    this.plasmaRings.forEach((ring) => {
      ring.geometry.dispose();
      (ring.material as THREE.Material).dispose();
    });

    this.energyWaves.forEach((wave) => {
      wave.geometry.dispose();
      (wave.material as THREE.Material).dispose();
    });

    this.group.clear();
  }

  public setEnabled(enabled: boolean): void {
    this.group.visible = enabled;
  }

  public updateParams(newParams: Partial<LifeFormNonPhysicalEntityParams>): void {
    Object.assign(this.params, newParams);

    if (newParams.color) {
      const color = new THREE.Color(newParams.color[0], newParams.color[1], newParams.color[2]);

      this.plasmaRings.forEach((ring) => {
        const material = ring.material as THREE.ShaderMaterial;
        material.uniforms.color.value = color;
      });

      this.energyWaves.forEach((wave) => {
        const material = wave.material as THREE.ShaderMaterial;
        material.uniforms.color.value = new THREE.Color(color.r * 0.8, color.g * 0.9, color.b);
      });
    }
  }
}

export function createLifeFormNonPhysicalEntityFromPythonData(planetRadius: number, pythonData: any, globalSeed?: number): LifeFormNonPhysicalEntityEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);

  const params: LifeFormNonPhysicalEntityParams = {
    seed: seed + 70003,
    color: pythonData.color || [0.2, 0.6, 1.0],
    cosmicOriginTime: pythonData?.timing?.cosmic_origin_time || pythonData?.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME,
  };

  return new LifeFormNonPhysicalEntityEffect(planetRadius, params);
}