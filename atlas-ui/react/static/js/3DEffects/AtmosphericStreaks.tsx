/**
 * Atmospheric Streaks Effect - Estelas atmosféricas específicas
 * 
 * Crea estelas blancas brillantes que aparecen en planetas metálicos 
 * y otros tipos específicos. Diferente de CloudGyros (partículas giratorias).
 * 
 * Responsabilidades:
 * - AtmosphericStreaks.tsx -> Estelas estáticas brillantes (ESTE ARCHIVO)
 * - CloudGyros.tsx -> Partículas dinámicas giratorias  
 * - Atmosphere.tsx -> Atmósfera base con efecto Fresnel
 */

import * as THREE from 'three';
import { SeededRandom } from '../Utils/SeededRandom';

export interface AtmosphericStreaksParams {
  color?: number[] | THREE.Color;
  particleCount?: number;
  speed?: number;
  size?: number;
  opacity?: number;
  brightness?: number;
  seed?: number;
}

/**
 * Efecto de Estelas Atmosféricas
 * 
 * Crea estelas estáticas brillantes, principalmente para planetas metálicos
 */
export class AtmosphericStreaksEffect {
  private particleSystem: THREE.Points;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private params: AtmosphericStreaksParams;
  private particleCount: number;
  private time: number = 0;
  private rng: SeededRandom;

  constructor(planetRadius: number, params: AtmosphericStreaksParams = {}) {
    // Usar seed para generación determinística
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);
    
    this.params = {
      color: params.color || [0.95, 0.95, 1.0],
      particleCount: params.particleCount || 100,
      speed: params.speed || 1.0,
      size: params.size || 2.0,
      opacity: params.opacity || 0.8,
      brightness: params.brightness || 1.5,
      seed
    };

    this.particleCount = this.params.particleCount!;
    this.geometry = new THREE.BufferGeometry();
    this.createParticles(planetRadius);
    this.createMaterial();
    this.particleSystem = new THREE.Points(this.geometry, this.material);
  }

  private createParticles(planetRadius: number): void {
    const positions = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);
    const speeds = new Float32Array(this.particleCount);
    const phases = new Float32Array(this.particleCount);

    // Radio de la atmósfera (ligeramente más grande que el planeta)
    const atmosphereRadius = planetRadius * 1.3;
    
    for (let i = 0; i < this.particleCount; i++) {
      // Posiciones aleatorias determinísticas en una esfera alrededor del planeta
      const phi = this.rng.random() * Math.PI * 2;
      const costheta = this.rng.random() * 2 - 1;
      const u = this.rng.random();
      
      const theta = Math.acos(costheta);
      const r = atmosphereRadius * Math.cbrt(u);
      
      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(theta);

      // Tamaños y propiedades variadas determinísticas
      sizes[i] = this.params.size! * (0.5 + this.rng.random() * 0.5);
      speeds[i] = this.params.speed! * (0.8 + this.rng.random() * 0.4);
      phases[i] = this.rng.random() * Math.PI * 2;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
    this.geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
  }

  private createMaterial(): void {
    const color = this.params.color instanceof THREE.Color ? 
      this.params.color : 
      new THREE.Color().setRGB(
        this.params.color![0], 
        this.params.color![1], 
        this.params.color![2]
      );

    // Shader personalizado para partículas suaves tipo estela
    const vertexShader = `
      attribute float size;
      attribute float speed;
      attribute float phase;
      
      varying float vOpacity;
      varying float vPhase;
      
      uniform float time;
      
      void main() {
        vPhase = phase;
        
        // Animación sutil de las estelas
        vec3 animatedPosition = position;
        float animOffset = time * speed * 0.1 + phase;
        animatedPosition.y += sin(animOffset) * 0.5;
        animatedPosition.x += cos(animOffset * 0.7) * 0.3;
        
        // Calcular opacidad basada en la distancia al centro
        float distanceToCenter = length(position);
        vOpacity = 1.0 - smoothstep(0.0, 30.0, distanceToCenter);
        
        vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      uniform vec3 color;
      uniform float opacity;
      uniform float brightness;
      
      varying float vOpacity;
      varying float vPhase;
      
      void main() {
        // Crear una partícula circular suave
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        
        // Gradiente suave desde el centro
        float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
        
        // Añadir un brillo extra en el centro
        float glow = exp(-dist * 4.0);
        
        // Combinar alpha con opacidad variable
        alpha *= vOpacity * opacity;
        
        // Color con brillo
        vec3 finalColor = color * brightness * (1.0 + glow * 2.0);
        
        // Añadir ligera variación de color
        finalColor += vec3(0.1, 0.1, 0.2) * glow;
        
        gl_FragColor = vec4(finalColor, alpha * (0.6 + 0.4 * glow));
      }
    `;

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: color },
        opacity: { value: this.params.opacity },
        brightness: { value: this.params.brightness }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.particleSystem.position.copy(planetPosition);
    }
    scene.add(this.particleSystem);
  }

  update(deltaTime: number): void {
    // Actualizar tiempo para animación
    this.time += deltaTime;
    this.material.uniforms.time.value = this.time;
    
    // Pulsación sutil para más vida
    const pulsation = 0.9 + 0.1 * Math.sin(this.time * 2);
    this.material.uniforms.opacity.value = this.params.opacity! * pulsation;
  }

  updateParams(newParams: Partial<AtmosphericStreaksParams>): void {
    this.params = { ...this.params, ...newParams };

    if (newParams.color) {
      const color = newParams.color instanceof THREE.Color ? 
        newParams.color : 
        new THREE.Color().setRGB(
          newParams.color[0], 
          newParams.color[1], 
          newParams.color[2]
        );
      this.material.uniforms.color.value = color;
    }
    
    if (newParams.opacity !== undefined) {
      this.material.uniforms.opacity.value = newParams.opacity;
    }
    
    if (newParams.brightness !== undefined) {
      this.material.uniforms.brightness.value = newParams.brightness;
    }
  }

  getObject3D(): THREE.Points {
    return this.particleSystem;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createAtmosphericStreaksFromPythonData(
  planetRadius: number, 
  atmosphereData: any,
  seed?: number
): AtmosphericStreaksEffect {
  // Extraer datos de estelas desde Python (referencia: planet_type_translators.py líneas 391-403)
  const streaksData = atmosphereData.streaks || atmosphereData;
  
  const params: AtmosphericStreaksParams = {
    color: streaksData.color || [0.95, 0.95, 1.0], // Blanco brillante por defecto
    particleCount: streaksData.particleCount || 100,
    speed: streaksData.speed || 1.0,
    size: 2.0,
    opacity: 0.8,
    brightness: 1.5,
    seed: seed || Math.floor(Math.random() * 1000000)
  };

  return new AtmosphericStreaksEffect(planetRadius, params);
}