/**
 * Radiation Pulse Effect - Professional Radioactive Waves
 *
 * Creates realistic radioactive waves expanding outward from the planet:
 * - Clean, expanding radiation waves that emanate from the planet surface
 * - Professional glow effects with realistic falloff
 * - Smooth, modern animation without visual overload
 * - Subtle pulsing that suggests radioactive decay
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime";

export interface RadiationPulseParams {
  color?: number[] | THREE.Color;
  pulseSpeed?: number;
  pulseIntensity?: number;
  particleCount?: number;
  radiationRadius?: number;
  pulseInterval?: number;
  glowIntensity?: number;
  waveThickness?: number;
  rotationSpeed?: number;
  seed?: number;
  cosmicOriginTime?: number;
}

// Procedural ranges for radiation wave generation
const PROCEDURAL_RANGES = {
  PULSE_SPEED: { min: 0.8, max: 1.5 }, // Slower, more natural pulsing
  PULSE_INTENSITY: { min: 0.4, max: 0.8 }, // Moderate intensity for realism
  WAVE_COUNT: { min: 3, max: 5 }, // Number of expanding waves
  RADIATION_RADIUS: { min: 1.8, max: 3.2 }, // Wave expansion range
  WAVE_FREQUENCY: { min: 2.0, max: 4.0 }, // Wave expansion frequency
  GLOW_INTENSITY: { min: 0.3, max: 0.6 }, // Subtle glow strength
  WAVE_THICKNESS: { min: 0.08, max: 0.15 }, // Thin, clean wave lines
  BASE_ROTATION: { min: 0.005, max: 0.02 }, // Minimal rotation for subtlety
  FALLOFF_RATE: { min: 2.0, max: 4.0 }, // Wave fade distance
};

/**
 * Professional Radiation Wave Effect
 *
 * Creates clean, expanding radiation waves that emanate outward from
 * the planet surface, suggesting radioactive emission in a modern,
 * non-overwhelming visual style
 */
export class RadiationPulseEffect {
  private group: THREE.Group;
  private baseGlow: THREE.Mesh;
  private radiationWaves: THREE.Mesh[];
  private params: RadiationPulseParams;
  private cosmicTime: number = 0;
  private rng: SeededRandom;
  private planetRadius: number;
  private startTime: number = 0;

  constructor(planetRadius: number, params: RadiationPulseParams = {}) {
    this.planetRadius = planetRadius;

    // Use seed for deterministic generation
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);

    // Always use procedural generation based on PROCEDURAL_RANGES
    this.params = {
      color: params.color || [0.2, 1.0, 0.4], // Clean radioactive green
      pulseSpeed: this.rng.uniform(PROCEDURAL_RANGES.PULSE_SPEED.min, PROCEDURAL_RANGES.PULSE_SPEED.max),
      pulseIntensity: this.rng.uniform(PROCEDURAL_RANGES.PULSE_INTENSITY.min, PROCEDURAL_RANGES.PULSE_INTENSITY.max),
      particleCount: Math.floor(this.rng.uniform(PROCEDURAL_RANGES.WAVE_COUNT.min, PROCEDURAL_RANGES.WAVE_COUNT.max)),
      radiationRadius: planetRadius * this.rng.uniform(PROCEDURAL_RANGES.RADIATION_RADIUS.min, PROCEDURAL_RANGES.RADIATION_RADIUS.max),
      pulseInterval: this.rng.uniform(PROCEDURAL_RANGES.WAVE_FREQUENCY.min, PROCEDURAL_RANGES.WAVE_FREQUENCY.max),
      glowIntensity: this.rng.uniform(PROCEDURAL_RANGES.GLOW_INTENSITY.min, PROCEDURAL_RANGES.GLOW_INTENSITY.max),
      waveThickness: this.rng.uniform(PROCEDURAL_RANGES.WAVE_THICKNESS.min, PROCEDURAL_RANGES.WAVE_THICKNESS.max),
      rotationSpeed: this.rng.uniform(PROCEDURAL_RANGES.BASE_ROTATION.min, PROCEDURAL_RANGES.BASE_ROTATION.max),
      cosmicOriginTime: params.cosmicOriginTime,
      seed,
    };

    this.startTime = this.rng.uniform(0, 1000); // Random start offset for variation

    this.cosmicTime = 0;
    this.group = new THREE.Group();
    this.radiationWaves = [];
    this.createBaseGlow();
    this.createRadiationWaves();
  }

  private createBaseGlow(): void {
    // Create a subtle base glow around the planet
    const geometry = new THREE.SphereGeometry(this.planetRadius * 1.05, 32, 32);

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,

      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]) },
        intensity: { value: this.params.glowIntensity },
        planetRadius: { value: this.planetRadius },
      },

      vertexShader: `
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        
        void main() {
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          vNormal = normalize(normalMatrix * normal);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,

      fragmentShader: `
        uniform vec3 color;
        uniform float intensity;
        
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        
        void main() {
          // Soft rim glow
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          float rimEffect = 1.0 - max(0.0, dot(vNormal, viewDir));
          rimEffect = pow(rimEffect, 3.0);
          
          float finalIntensity = rimEffect * intensity;
          vec3 finalColor = color * finalIntensity;
          float alpha = finalIntensity * 0.4;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
    });

    this.baseGlow = new THREE.Mesh(geometry, material);
    this.group.add(this.baseGlow);
  }

  private createRadiationWaves(): void {
    // Create expanding radiation waves emanating from the planet
    const numWaves = this.params.particleCount! || 4;

    for (let i = 0; i < numWaves; i++) {
      const waveRadius = this.planetRadius * (1.1 + i * 0.3);
      const geometry = new THREE.SphereGeometry(waveRadius, 32, 32);

      const material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,

        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]) },
          waveIndex: { value: i },
          pulseSpeed: { value: this.params.pulseInterval },
          intensity: { value: this.params.pulseIntensity },
          planetRadius: { value: this.planetRadius },
          maxRadius: { value: this.params.radiationRadius },
          waveThickness: { value: this.params.waveThickness },
          totalWaves: { value: numWaves },
        },

        vertexShader: `
          varying vec3 vWorldPosition;
          varying vec3 vNormal;
          varying float vDistanceFromCenter;
          
          void main() {
            vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
            vNormal = normalize(normalMatrix * normal);
            vDistanceFromCenter = length(position);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,

        fragmentShader: `
          uniform float time;
          uniform vec3 color;
          uniform float waveIndex;
          uniform float pulseSpeed;
          uniform float intensity;
          uniform float planetRadius;
          uniform float maxRadius;
          uniform float waveThickness;
          uniform float totalWaves;
          
          varying vec3 vWorldPosition;
          varying vec3 vNormal;
          varying float vDistanceFromCenter;
          
          void main() {
            // Wave expansion animation
            float waveOffset = waveIndex * 0.5;
            float expandingWave = mod(time * pulseSpeed + waveOffset, 6.28);
            float wavePosition = planetRadius + (maxRadius - planetRadius) * (expandingWave / 6.28);
            
            // Distance from current wave position
            float distanceFromWave = abs(vDistanceFromCenter - wavePosition);
            
            // Create sharp wave edge with smooth falloff
            float waveIntensity = 1.0 - smoothstep(0.0, waveThickness * maxRadius, distanceFromWave);
            waveIntensity *= smoothstep(0.0, 0.1, expandingWave) * smoothstep(6.28, 5.5, expandingWave);
            
            // Distance falloff for realism
            float falloff = 1.0 - smoothstep(planetRadius * 1.1, maxRadius, vDistanceFromCenter);
            
            // Fresnel effect for atmospheric appearance
            vec3 viewDir = normalize(cameraPosition - vWorldPosition);
            float fresnel = 1.0 - max(0.0, dot(vNormal, viewDir));
            fresnel = pow(fresnel, 1.5);
            
            float finalIntensity = waveIntensity * falloff * fresnel * intensity;
            vec3 finalColor = color * finalIntensity;
            float alpha = finalIntensity * 0.8;
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
      });

      const waveMesh = new THREE.Mesh(geometry, material);
      this.radiationWaves.push(waveMesh);
      this.group.add(waveMesh);
    }
  }

  public update(deltaTime: number): void {
    // Calculate cosmic time synchronized globally
    if (this.params.cosmicOriginTime) {
      this.cosmicTime = getAnimatedUniverseTime(this.params.cosmicOriginTime, 1.0, this.startTime);
    } else {
      this.cosmicTime += deltaTime;
    }

    // Update base glow
    if (this.baseGlow.material instanceof THREE.ShaderMaterial) {
      this.baseGlow.material.uniforms.time.value = this.cosmicTime;
    }

    // Update radiation waves
    this.radiationWaves.forEach((wave: THREE.Mesh) => {
      if (wave.material instanceof THREE.ShaderMaterial) {
        wave.material.uniforms.time.value = this.cosmicTime;
      }
    });

    // Gentle base glow pulsing
    const glowPulse = this.params.rotationSpeed! * 0.5;
    this.baseGlow.rotation.y = this.cosmicTime * glowPulse;
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
    // Clean up base glow
    this.baseGlow.geometry.dispose();
    (this.baseGlow.material as THREE.Material).dispose();

    // Clean up radiation waves
    this.radiationWaves.forEach((wave: THREE.Mesh) => {
      wave.geometry.dispose();
      (wave.material as THREE.Material).dispose();
    });

    this.group.clear();
  }

  public setEnabled(enabled: boolean): void {
    this.group.visible = enabled;
  }

  public updateParams(newParams: Partial<RadiationPulseParams>): void {
    Object.assign(this.params, newParams);

    if (newParams.color) {
      const color = new THREE.Color(newParams.color[0], newParams.color[1], newParams.color[2]);

      if (this.baseGlow.material instanceof THREE.ShaderMaterial) {
        this.baseGlow.material.uniforms.color.value = color;
      }

      // Update radiation wave colors
      this.radiationWaves.forEach((wave: THREE.Mesh) => {
        if (wave.material instanceof THREE.ShaderMaterial) {
          wave.material.uniforms.color.value = color;
        }
      });
    }
  }
}

/**
 * Creates a professional radiation wave effect from Python data
 */
export function createRadiationPulseFromPythonData(pythonData: any, planetRadius: number): RadiationPulseEffect {
  const params: RadiationPulseParams = {
    seed: pythonData.seed || Math.floor(Math.random() * 1000000),
    color: pythonData.color || [0.2, 1.0, 0.4], // Clean radioactive green
    // Do NOT specify other parameters to use PROCEDURAL_RANGES
    cosmicOriginTime: pythonData.cosmic_origin_time, // Cosmic time
  };

  return new RadiationPulseEffect(planetRadius, params);
}
