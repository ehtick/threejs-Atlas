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

export interface AtmosphericStreaksParams {
  color?: number[] | THREE.Color;
  particleCount?: number;
  speed?: number;
  size?: number;
  opacity?: number;
  brightness?: number;
}

/**
 * Efecto de Estelas Atmosféricas
 * 
 * Crea estelas estáticas brillantes, principalmente para planetas metálicos
 */
export class AtmosphericStreaksEffect {
  private particleSystem: THREE.Points;
  private material: THREE.PointsMaterial;
  private geometry: THREE.BufferGeometry;
  private params: AtmosphericStreaksParams;
  private particleCount: number;

  constructor(planetRadius: number, params: AtmosphericStreaksParams = {}) {
    this.params = {
      color: params.color || [0.95, 0.95, 1.0],
      particleCount: params.particleCount || 100,
      speed: params.speed || 1.0,
      size: params.size || 2.0,
      opacity: params.opacity || 0.8,
      brightness: params.brightness || 1.5
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
      // Posiciones aleatorias en una esfera alrededor del planeta
      const phi = Math.random() * Math.PI * 2;
      const costheta = Math.random() * 2 - 1;
      const u = Math.random();
      
      const theta = Math.acos(costheta);
      const r = atmosphereRadius * Math.cbrt(u);
      
      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(theta);

      // Tamaños y propiedades variadas
      sizes[i] = this.params.size! * (0.5 + Math.random() * 0.5);
      speeds[i] = this.params.speed! * (0.8 + Math.random() * 0.4);
      phases[i] = Math.random() * Math.PI * 2;
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

    this.material = new THREE.PointsMaterial({
      color: color,
      size: this.params.size!,
      opacity: this.params.opacity!,
      transparent: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      vertexColors: false
    });

    // Hacer las partículas más brillantes
    this.material.color.multiplyScalar(this.params.brightness!);
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.particleSystem.position.copy(planetPosition);
    }
    scene.add(this.particleSystem);
  }

  update(deltaTime: number): void {
    // Las estelas son más estáticas que los gyros
    // Solo un ligero parpadeo/pulsación
    const time = Date.now() * 0.001;
    const pulsation = 0.9 + 0.1 * Math.sin(time * 2);
    this.material.opacity = this.params.opacity! * pulsation;
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
      this.material.color = color;
      this.material.color.multiplyScalar(this.params.brightness!);
    }
    
    if (newParams.opacity !== undefined) {
      this.material.opacity = newParams.opacity;
    }
    
    if (newParams.size !== undefined) {
      this.material.size = newParams.size;
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
  atmosphereData: any
): AtmosphericStreaksEffect {
  
  console.log('✨ AtmosphericStreaks received data:', atmosphereData);
  
  // Extraer datos de estelas desde Python (referencia: planet_type_translators.py líneas 391-403)
  const streaksData = atmosphereData.streaks || {};
  
  const params: AtmosphericStreaksParams = {
    color: streaksData.color || [0.95, 0.95, 1.0], // Blanco brillante por defecto
    particleCount: streaksData.particleCount || 100,
    speed: streaksData.speed || 1.0,
    size: 2.0,
    opacity: 0.8,
    brightness: 1.5
  };

  console.log('✨ Final AtmosphericStreaks params:', params);

  return new AtmosphericStreaksEffect(planetRadius, params);
}