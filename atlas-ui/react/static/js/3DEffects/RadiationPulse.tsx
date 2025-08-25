/**
 * Radiation Pulse Effect - Professional Radioactive Hazard Visualization
 * 
 * Creates a dangerous, professional radiation field around the planet:
 * - Hazmat-style radioactive energy distortion fields
 * - Ionizing radiation shimmer effects
 * - Gamma burst flashes and Geiger counter-like pulses
 * - Toxic contamination field with nuclear warning intensity
 * - Realistic radiation danger visualization
 */

import * as THREE from 'three';
import { SeededRandom } from '../Utils/SeededRandom';
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from '../Utils/UniverseTime';

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

// Procedural ranges for radiation field generation
const PROCEDURAL_RANGES = {
  PULSE_SPEED: { min: 2.0, max: 4.5 },          // Faster, more urgent pulsing
  PULSE_INTENSITY: { min: 0.8, max: 1.8 },      // Higher intensity for danger
  CONTAMINATION_LAYERS: { min: 4, max: 8 },     // Multiple contamination layers
  RADIATION_RADIUS: { min: 2.0, max: 4.0 },     // Larger dangerous area
  IONIZATION_FREQUENCY: { min: 8.0, max: 15.0 }, // Ionization shimmer frequency
  GAMMA_BURST_RATE: { min: 0.8, max: 2.2 },     // Gamma radiation bursts
  CONTAMINATION_THICKNESS: { min: 0.15, max: 0.35 }, // Thick contamination fields
  HAZARD_ROTATION: { min: 0.01, max: 0.08 },    // Hazardous field rotation
  TOXIC_SPREAD: { min: 1.2, max: 2.8 }          // Toxic contamination spread
};

/**
 * Professional Radiation Hazard Effect
 * 
 * Creates an intensive, dangerous-looking radiation contamination field
 * that screams "CAUTION: RADIOACTIVE HAZARD" at first sight
 */
export class RadiationPulseEffect {
  private group: THREE.Group;
  private contaminationCore: THREE.Mesh;
  private radiationLayers: THREE.Mesh[];
  private ionizationField: THREE.Mesh;
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
      color: params.color || [0.0, 1.0, 0.2],  // Toxic nuclear green
      pulseSpeed: this.rng.uniform(PROCEDURAL_RANGES.PULSE_SPEED.min, PROCEDURAL_RANGES.PULSE_SPEED.max),
      pulseIntensity: this.rng.uniform(PROCEDURAL_RANGES.PULSE_INTENSITY.min, PROCEDURAL_RANGES.PULSE_INTENSITY.max),
      particleCount: Math.floor(this.rng.uniform(PROCEDURAL_RANGES.CONTAMINATION_LAYERS.min, PROCEDURAL_RANGES.CONTAMINATION_LAYERS.max)),
      radiationRadius: planetRadius * this.rng.uniform(PROCEDURAL_RANGES.RADIATION_RADIUS.min, PROCEDURAL_RANGES.RADIATION_RADIUS.max),
      pulseInterval: this.rng.uniform(PROCEDURAL_RANGES.IONIZATION_FREQUENCY.min, PROCEDURAL_RANGES.IONIZATION_FREQUENCY.max),
      glowIntensity: this.rng.uniform(PROCEDURAL_RANGES.GAMMA_BURST_RATE.min, PROCEDURAL_RANGES.GAMMA_BURST_RATE.max),
      waveThickness: this.rng.uniform(PROCEDURAL_RANGES.CONTAMINATION_THICKNESS.min, PROCEDURAL_RANGES.CONTAMINATION_THICKNESS.max),
      rotationSpeed: this.rng.uniform(PROCEDURAL_RANGES.HAZARD_ROTATION.min, PROCEDURAL_RANGES.HAZARD_ROTATION.max),
      cosmicOriginTime: params.cosmicOriginTime,
      seed
    };
    
    this.startTime = this.rng.uniform(0, 1000); // Random start offset for variation

    this.cosmicTime = 0;
    this.group = new THREE.Group();
    this.radiationLayers = [];
    this.createContaminationCore();
    this.createRadiationLayers();
    this.createIonizationField();
  }

  private createContaminationCore(): void {
    // Create a dangerous contamination core around the planet
    const geometry = new THREE.SphereGeometry(this.params.radiationRadius! * 0.7, 32, 32);
    
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]) },
        pulseSpeed: { value: this.params.pulseSpeed },
        intensity: { value: this.params.pulseIntensity },
        gammaRate: { value: this.params.glowIntensity },
        planetRadius: { value: this.planetRadius },
        radiationRadius: { value: this.params.radiationRadius },
        seed: { value: this.params.seed || 0 }
      },
      
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        varying float vDistanceFromCore;
        
        uniform float planetRadius;
        
        void main() {
          vPosition = position;
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          vNormal = normalize(normalMatrix * normal);
          vDistanceFromCore = length(position) - planetRadius;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        uniform float pulseSpeed;
        uniform float intensity;
        uniform float gammaRate;
        uniform float planetRadius;
        uniform float radiationRadius;
        uniform float seed;
        
        varying vec3 vPosition;
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        varying float vDistanceFromCore;
        
        
        void main() {
          // Distance from planet surface
          float distanceFromSurface = vDistanceFromCore;
          float normalizedDistance = distanceFromSurface / (radiationRadius - planetRadius);
          
          // DANGEROUS PULSING - rapid, urgent, hazardous
          float urgentPulse = sin(time * pulseSpeed * 2.0) * 0.5 + 0.5;
          urgentPulse = pow(urgentPulse, 0.3); // Sharp, urgent pulses
          
          float secondaryPulse = sin(time * pulseSpeed * 3.7 + seed) * 0.3 + 0.7;
          float tertiaryPulse = sin(time * pulseSpeed * 1.3 + seed * 2.0) * 0.2 + 0.8;
          
          // GAMMA RADIATION BURSTS
          float gammaBurst = sin(time * pulseSpeed * 15.0 + length(vWorldPosition)) * 0.5 + 0.5;
          gammaBurst = pow(gammaBurst, 3.0);
          
          // IONIZATION DISTORTION FIELD
          float ionizationField = sin(length(vWorldPosition) * 0.8 + time * pulseSpeed * 0.3) * 0.5 + 0.5;
          ionizationField = pow(ionizationField, 0.7) * 1.2;
          
          // TOXIC CONTAMINATION WAVES
          float contaminationWave = sin(length(vWorldPosition) * 0.8 - time * pulseSpeed * 1.5);
          contaminationWave = pow(max(0.0, contaminationWave), 2.0);
          
          // RADIATION SHIMMER - like heat distortion but more aggressive
          float shimmer = sin(time * pulseSpeed * 8.0 + length(vWorldPosition)) * 0.3 + 0.7;
          
          // HAZMAT WARNING EFFECT - rim lighting
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          float rimEffect = 1.0 - max(0.0, dot(vNormal, viewDir));
          rimEffect = pow(rimEffect, 1.2) * 2.0;
          
          // Distance falloff - keep it dangerous even at distance
          float falloff = 1.0 - smoothstep(0.0, 1.0, normalizedDistance * 0.8);
          falloff = max(falloff, 0.3); // Always maintain minimum danger level
          
          // Combine all radiation effects
          float radiationIntensity = urgentPulse * secondaryPulse * tertiaryPulse * 
                                    ionizationField * contaminationWave * shimmer * 
                                    rimEffect * falloff * intensity;
          
          // Add gamma bursts
          radiationIntensity += gammaBurst * gammaRate * 2.0;
          
          // GEIGER COUNTER SIMULATION - random crackling
          float geigerCrackle = step(0.96, hash(vWorldPosition * 10.0 + time * pulseSpeed * 5.0));
          radiationIntensity += geigerCrackle * 1.8;
          
          // TOXIC COLOR MIXING - nuclear warning colors
          vec3 nuclearGreen = color;
          vec3 hazmatYellow = vec3(1.0, 0.8, 0.0);
          vec3 radioactiveOrange = vec3(1.0, 0.4, 0.0);
          
          // Mix colors based on radiation intensity
          vec3 warningColor = mix(nuclearGreen, hazmatYellow, ionizationField * 0.4);
          warningColor = mix(warningColor, radioactiveOrange, gammaBurst * 0.6);
          
          vec3 finalColor = warningColor * radiationIntensity;
          
          // High visibility alpha for clear danger indication
          float alpha = clamp(radiationIntensity * 0.9, 0.2, 1.0);
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `
    });
    
    this.contaminationCore = new THREE.Mesh(geometry, material);
    this.group.add(this.contaminationCore);
  }

  private createRadiationLayers(): void {
    // Create multiple contamination layers for a dangerous layered effect
    const numLayers = this.params.particleCount! || 6;
    
    for (let i = 0; i < numLayers; i++) {
      const layerRadius = this.params.radiationRadius! * (0.8 + i * 0.15);
      const geometry = new THREE.SphereGeometry(layerRadius, 24, 24);
      
      const material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]) },
          layerIndex: { value: i },
          pulseSpeed: { value: this.params.pulseSpeed },
          intensity: { value: this.params.pulseIntensity * 0.6 },
          planetRadius: { value: this.planetRadius },
          layerRadius: { value: layerRadius },
          totalLayers: { value: numLayers },
          seed: { value: this.params.seed || 0 }
        },
        
        vertexShader: `
          varying vec3 vPosition;
          varying vec3 vWorldPosition;
          varying vec3 vNormal;
          varying float vDistanceFromCenter;
          
          void main() {
            vPosition = position;
            vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
            vNormal = normalize(normalMatrix * normal);
            vDistanceFromCenter = length(position);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        
        fragmentShader: `
          uniform float time;
          uniform vec3 color;
          uniform float layerIndex;
          uniform float pulseSpeed;
          uniform float intensity;
          uniform float planetRadius;
          uniform float layerRadius;
          uniform float totalLayers;
          uniform float seed;
          
          varying vec3 vPosition;
          varying vec3 vWorldPosition;
          varying vec3 vNormal;
          varying float vDistanceFromCenter;
          
          float hash(vec3 p) {
            p = fract(p * vec3(443.897, 441.423, 437.195));
            p += dot(p, p.yxz + 19.19);
            return fract((p.x + p.y) * p.z);
          }
          
          void main() {
            // Layer-specific contamination effect
            float layerPhase = layerIndex * 2.4 + seed;
            float contaminationPulse = sin(time * pulseSpeed + layerPhase) * 0.5 + 0.5;
            contaminationPulse = pow(contaminationPulse, 0.4);
            
            // Toxic spreading pattern
            float spreadPattern = sin(vWorldPosition.x * 0.8 + time * pulseSpeed * 0.6 + layerPhase);
            spreadPattern *= sin(vWorldPosition.y * 0.9 + time * pulseSpeed * 0.4 + layerPhase * 1.3);
            spreadPattern *= sin(vWorldPosition.z * 0.7 + time * pulseSpeed * 0.8 + layerPhase * 0.7);
            spreadPattern = spreadPattern * 0.4 + 0.6;
            
            // Random contamination hotspots
            float hotspot = hash(floor(vWorldPosition * 3.0) + layerIndex * 100.0);
            hotspot = step(0.85, hotspot) * (sin(time * pulseSpeed * 4.0 + layerIndex) * 0.5 + 0.5);
            
            // Distance-based intensity (outer layers dimmer)
            float layerIntensity = 1.0 - (layerIndex / totalLayers) * 0.7;
            
            // Fresnel effect for rim lighting
            vec3 viewDir = normalize(cameraPosition - vWorldPosition);
            float fresnel = 1.0 - max(0.0, dot(vNormal, viewDir));
            fresnel = pow(fresnel, 2.0);
            
            // Combine all effects
            float finalIntensity = contaminationPulse * spreadPattern * layerIntensity * 
                                 fresnel * intensity;
            
            // Add hotspots
            finalIntensity += hotspot * 0.8;
            
            // Color variation per layer
            vec3 layerColor = mix(color, vec3(1.0, 0.6, 0.0), layerIndex / totalLayers * 0.5);
            
            vec3 finalColor = layerColor * finalIntensity;
            float alpha = finalIntensity * 0.4;
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `
      });
      
      const layerMesh = new THREE.Mesh(geometry, material);
      
      // Random orientation for each contamination layer
      layerMesh.rotation.x = this.rng.random() * Math.PI * 2;
      layerMesh.rotation.y = this.rng.random() * Math.PI * 2;
      layerMesh.rotation.z = this.rng.random() * Math.PI * 2;
      
      this.radiationLayers.push(layerMesh);
      this.group.add(layerMesh);
    }
  }
  
  private createIonizationField(): void {
    // Create the outermost ionization distortion field
    const geometry = new THREE.SphereGeometry(this.params.radiationRadius! * 1.2, 32, 32);
    
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]) },
        pulseSpeed: { value: this.params.pulseSpeed },
        intensity: { value: this.params.pulseIntensity * 0.3 },
        ionizationRate: { value: this.params.pulseInterval },
        seed: { value: this.params.seed || 0 }
      },
      
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        
        void main() {
          vPosition = position;
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          vNormal = normalize(normalMatrix * normal);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        uniform float pulseSpeed;
        uniform float intensity;
        uniform float ionizationRate;
        uniform float seed;
        
        varying vec3 vPosition;
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        
        float hash(vec3 p) {
          p = fract(p * vec3(443.897, 441.423, 437.195));
          p += dot(p, p.yxz + 19.19);
          return fract((p.x + p.y) * p.z);
        }
        
        void main() {
          // Ionization shimmer effect
          float ionizationShimmer = sin(time * ionizationRate + length(vWorldPosition) * 0.5);
          ionizationShimmer *= sin(time * ionizationRate * 1.3 + vWorldPosition.x * 0.8);
          ionizationShimmer *= sin(time * ionizationRate * 0.7 + vWorldPosition.y * 0.9);
          ionizationShimmer = ionizationShimmer * 0.5 + 0.5;
          
          // Random electrical discharge pattern
          float discharge = hash(floor(vWorldPosition * 4.0) + floor(time * pulseSpeed * 2.0));
          discharge = step(0.95, discharge) * (sin(time * pulseSpeed * 10.0) * 0.5 + 0.5);
          
          // Fresnel for atmospheric effect
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          float fresnel = 1.0 - max(0.0, dot(vNormal, viewDir));
          fresnel = pow(fresnel, 3.0);
          
          float finalIntensity = ionizationShimmer * fresnel * intensity;
          finalIntensity += discharge * 0.6;
          
          vec3 finalColor = mix(color, vec3(0.8, 0.9, 1.0), 0.3) * finalIntensity;
          float alpha = finalIntensity * 0.3;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `
    });
    
    this.ionizationField = new THREE.Mesh(geometry, material);
    this.group.add(this.ionizationField);
  }

  public update(deltaTime: number): void {
    // Calculate cosmic time synchronized globally
    if (this.params.cosmicOriginTime) {
      this.cosmicTime = getAnimatedUniverseTime(
        this.params.cosmicOriginTime, 
        1.0, 
        this.startTime
      );
    } else {
      this.cosmicTime += deltaTime;
    }
    
    // Update contamination core
    if (this.contaminationCore.material instanceof THREE.ShaderMaterial) {
      this.contaminationCore.material.uniforms.time.value = this.cosmicTime;
    }
    
    // Update radiation layers
    this.radiationLayers.forEach((layer, index) => {
      if (layer.material instanceof THREE.ShaderMaterial) {
        layer.material.uniforms.time.value = this.cosmicTime;
      }
      
      // Individual rotation for each layer based on procedural hazard rotation
      const hazardRotation = this.params.rotationSpeed! * (index * 0.3 + 1);
      layer.rotation.x += hazardRotation * 0.7;
      layer.rotation.y += hazardRotation;
      layer.rotation.z += hazardRotation * 0.4;
    });
    
    // Update ionization field
    if (this.ionizationField && this.ionizationField.material instanceof THREE.ShaderMaterial) {
      this.ionizationField.material.uniforms.time.value = this.cosmicTime;
    }
    
    // Contamination core rotation
    const coreRotation = this.params.rotationSpeed! * 0.8;
    this.contaminationCore.rotation.y = this.cosmicTime * coreRotation;
    this.contaminationCore.rotation.x = Math.sin(this.cosmicTime * coreRotation * 0.3) * 0.2;
    
    // Ionization field gentle rotation
    if (this.ionizationField) {
      this.ionizationField.rotation.y = this.cosmicTime * this.params.rotationSpeed! * 0.2;
    }
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
    // Clean up contamination core
    this.contaminationCore.geometry.dispose();
    (this.contaminationCore.material as THREE.Material).dispose();
    
    // Clean up radiation layers
    this.radiationLayers.forEach(layer => {
      layer.geometry.dispose();
      (layer.material as THREE.Material).dispose();
    });
    
    // Clean up ionization field
    if (this.ionizationField) {
      this.ionizationField.geometry.dispose();
      (this.ionizationField.material as THREE.Material).dispose();
    }
    
    this.group.clear();
  }

  public setEnabled(enabled: boolean): void {
    this.group.visible = enabled;
  }

  public updateParams(newParams: Partial<RadiationPulseParams>): void {
    Object.assign(this.params, newParams);
    
    if (newParams.color) {
      const color = new THREE.Color(newParams.color[0], newParams.color[1], newParams.color[2]);
      
      if (this.contaminationCore.material instanceof THREE.ShaderMaterial) {
        this.contaminationCore.material.uniforms.color.value = color;
      }
      
      // Update radiation layer colors
      this.radiationLayers.forEach(layer => {
        if (layer.material instanceof THREE.ShaderMaterial) {
          layer.material.uniforms.color.value = color;
        }
      });
      
      // Update ionization field color
      if (this.ionizationField && this.ionizationField.material instanceof THREE.ShaderMaterial) {
        this.ionizationField.material.uniforms.color.value = color;
      }
    }
  }
}

/**
 * Creates a professional radiation hazard effect from Python data
 */
export function createRadiationPulseFromPythonData(
  pythonData: any,
  planetRadius: number
): RadiationPulseEffect {
  const params: RadiationPulseParams = {
    seed: pythonData.seed || Math.floor(Math.random() * 1000000),
    color: pythonData.color || [0.0, 1.0, 0.2],        // Nuclear hazard green
    // Do NOT specify other parameters to use PROCEDURAL_RANGES
    cosmicOriginTime: pythonData.cosmic_origin_time     // Cosmic time
  };

  return new RadiationPulseEffect(planetRadius, params);
}