/**
 * Radiation Pulse Effect - Efecto de Pulsos de Radiación
 * 
 * Crea pulsos de energía radioactiva verde que emanan desde el planeta
 * hacia el exterior, evocando contaminación nuclear y radioactividad.
 * 
 * Características:
 * - Pulsos concéntricos verdes que se expanden desde la superficie
 * - Partículas radiactivas flotantes con brillo tóxico
 * - Ondas de energía que simulan radiación electromagnética
 * - Efecto visual que grita "¡RADIOACTIVO!" al verlo
 */

import * as THREE from 'three';
import { SeededRandom } from '../Utils/SeededRandom';

export interface RadiationPulseParams {
  color?: number[] | THREE.Color;
  pulseSpeed?: number;
  pulseIntensity?: number;
  particleCount?: number;
  radiationRadius?: number;
  pulseInterval?: number;
  glowIntensity?: number;
  seed?: number;
}

/**
 * Efecto de Pulsos de Radiación
 * 
 * Crea un efecto espectacular de radioactividad con pulsos de energía verde
 * que se expanden desde el planeta y partículas flotantes tóxicas
 */
export class RadiationPulseEffect {
  private group: THREE.Group;
  private pulseMaterial: THREE.ShaderMaterial;
  private particleSystem: THREE.Points;
  private pulseRings: THREE.Mesh[] = [];
  private params: RadiationPulseParams;
  private time: number = 0;
  private rng: SeededRandom;
  private planetRadius: number;

  constructor(planetRadius: number, params: RadiationPulseParams = {}) {
    this.planetRadius = planetRadius;
    
    // Usar seed para generación determinística
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);
    
    this.params = {
      color: params.color || [0.3, 1.0, 0.2],  // Verde radioactivo brillante
      pulseSpeed: params.pulseSpeed || 2.0,    // Velocidad de pulsos
      pulseIntensity: params.pulseIntensity || 0.8,  // Intensidad de los pulsos
      particleCount: params.particleCount || 200,    // Partículas radioactivas
      radiationRadius: params.radiationRadius || planetRadius * 2.5,  // Radio de radiación
      pulseInterval: params.pulseInterval || 1.5,    // Intervalo entre pulsos
      glowIntensity: params.glowIntensity || 1.2,    // Intensidad del brillo
      seed
    };

    this.group = new THREE.Group();
    this.createRadiationEffect();
  }

  private createRadiationEffect(): void {
    this.createPulseRings();
    this.createRadioactiveParticles();
  }

  private createPulseRings(): void {
    // Crear múltiples anillos de pulso que se expanden
    const ringCount = 3;
    
    for (let i = 0; i < ringCount; i++) {
      const geometry = new THREE.RingGeometry(
        this.planetRadius * 1.1, 
        this.planetRadius * 1.3, 
        64, 
        1
      );
      
      const material = new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]) },
          pulsePhase: { value: i * (Math.PI * 2 / ringCount) },
          intensity: { value: this.params.pulseIntensity },
          glowIntensity: { value: this.params.glowIntensity }
        },
        
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPosition;
          
          void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        
        fragmentShader: `
          uniform float time;
          uniform vec3 color;
          uniform float pulsePhase;
          uniform float intensity;
          uniform float glowIntensity;
          
          varying vec2 vUv;
          varying vec3 vPosition;
          
          void main() {
            float radius = length(vPosition.xy);
            float normalizedRadius = (radius - ${this.planetRadius * 1.1}) / ${this.planetRadius * 0.2};
            
            // Pulso principal que se expande
            float pulse = sin(time * ${this.params.pulseSpeed} + pulsePhase) * 0.5 + 0.5;
            pulse = pow(pulse, 2.0);
            
            // Ondas concéntricas de radiación
            float waves = sin(normalizedRadius * 20.0 - time * 4.0) * 0.5 + 0.5;
            waves *= sin(normalizedRadius * 8.0 - time * 2.5) * 0.3 + 0.7;
            
            // Efecto de brillo en los bordes
            float edgeGlow = 1.0 - smoothstep(0.0, 0.3, normalizedRadius);
            edgeGlow += 1.0 - smoothstep(0.7, 1.0, normalizedRadius);
            
            // Combinar todos los efectos
            float alpha = pulse * waves * edgeGlow * intensity;
            alpha *= (1.0 - normalizedRadius * 0.5); // Fade hacia afuera
            
            // Intensificar el brillo
            vec3 finalColor = color * glowIntensity;
            
            gl_FragColor = vec4(finalColor, alpha * 0.6);
          }
        `
      });
      
      const ring = new THREE.Mesh(geometry, material);
      
      // Posicionar los anillos ligeramente diferentes para crear profundidad
      ring.rotation.x = Math.PI / 2;
      ring.position.y = this.rng.random() * 0.1 - 0.05;
      ring.scale.set(1 + i * 0.1, 1 + i * 0.1, 1);
      
      this.pulseRings.push(ring);
      this.group.add(ring);
    }
  }

  private createRadioactiveParticles(): void {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.params.particleCount! * 3);
    const sizes = new Float32Array(this.params.particleCount!);
    const phases = new Float32Array(this.params.particleCount!);
    const speeds = new Float32Array(this.params.particleCount!);

    // Crear partículas radioactivas flotantes
    for (let i = 0; i < this.params.particleCount!; i++) {
      // Posiciones aleatorias alrededor del planeta
      const phi = this.rng.random() * Math.PI * 2;
      const costheta = this.rng.random() * 2 - 1;
      const u = this.rng.random();
      
      const theta = Math.acos(costheta);
      const r = this.planetRadius * (1.2 + this.rng.random() * 1.5);
      
      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(theta);

      sizes[i] = 0.5 + this.rng.random() * 1.5;
      phases[i] = this.rng.random() * Math.PI * 2;
      speeds[i] = 0.5 + this.rng.random() * 1.0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]) },
        glowIntensity: { value: this.params.glowIntensity }
      },
      
      vertexShader: `
        attribute float size;
        attribute float phase;
        attribute float speed;
        
        uniform float time;
        
        varying float vPhase;
        varying float vSpeed;
        
        void main() {
          vPhase = phase;
          vSpeed = speed;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // Animación de flotación
          float floatOffset = sin(time * speed + phase) * 2.0;
          mvPosition.y += floatOffset;
          
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        uniform float glowIntensity;
        
        varying float vPhase;
        varying float vSpeed;
        
        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);
          
          if (dist > 0.5) discard;
          
          // Pulso de partícula individual
          float pulse = sin(time * 3.0 + vPhase) * 0.3 + 0.7;
          
          // Núcleo brillante
          float core = 1.0 - smoothstep(0.0, 0.2, dist);
          // Halo exterior
          float halo = 1.0 - smoothstep(0.1, 0.5, dist);
          
          float intensity = (core * 2.0 + halo * 0.5) * pulse;
          vec3 finalColor = color * glowIntensity * intensity;
          
          gl_FragColor = vec4(finalColor, intensity * 0.8);
        }
      `
    });

    this.particleSystem = new THREE.Points(geometry, particleMaterial);
    this.group.add(this.particleSystem);
  }

  public update(deltaTime: number): void {
    this.time += deltaTime;
    
    // Actualizar anillos de pulso
    this.pulseRings.forEach((ring, index) => {
      const material = ring.material as THREE.ShaderMaterial;
      material.uniforms.time.value = this.time;
      
      // Rotar ligeramente cada anillo
      ring.rotation.z += deltaTime * 0.1 * (index + 1);
    });
    
    // Actualizar partículas
    if (this.particleSystem.material instanceof THREE.ShaderMaterial) {
      this.particleSystem.material.uniforms.time.value = this.time;
    }
    
    // Rotar todo el grupo lentamente
    this.group.rotation.y += deltaTime * 0.2;
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
    // Limpiar geometrías
    this.pulseRings.forEach(ring => {
      ring.geometry.dispose();
      (ring.material as THREE.Material).dispose();
    });
    
    if (this.particleSystem) {
      this.particleSystem.geometry.dispose();
      (this.particleSystem.material as THREE.Material).dispose();
    }
    
    // Remover del grupo
    this.group.clear();
  }

  public setEnabled(enabled: boolean): void {
    this.group.visible = enabled;
  }

  public updateParams(newParams: Partial<RadiationPulseParams>): void {
    Object.assign(this.params, newParams);
    
    // Actualizar uniformes si es necesario
    if (newParams.color) {
      const color = new THREE.Color(newParams.color[0], newParams.color[1], newParams.color[2]);
      this.pulseRings.forEach(ring => {
        const material = ring.material as THREE.ShaderMaterial;
        material.uniforms.color.value = color;
      });
      
      if (this.particleSystem.material instanceof THREE.ShaderMaterial) {
        this.particleSystem.material.uniforms.color.value = color;
      }
    }
  }
}

/**
 * Crea un efecto de radiación desde datos de Python
 */
export function createRadiationPulseFromPythonData(
  pythonData: any,
  planetRadius: number
): RadiationPulseEffect {
  const params: RadiationPulseParams = {
    seed: pythonData.seed || Math.floor(Math.random() * 1000000),
    color: pythonData.color || [0.3, 1.0, 0.2],
    pulseSpeed: pythonData.pulse_speed || 2.0,
    pulseIntensity: pythonData.pulse_intensity || 0.8,
    particleCount: pythonData.particle_count || 200,
    radiationRadius: pythonData.radiation_radius || planetRadius * 2.5,
    pulseInterval: pythonData.pulse_interval || 1.5,
    glowIntensity: pythonData.glow_intensity || 1.2
  };

  return new RadiationPulseEffect(planetRadius, params);
}