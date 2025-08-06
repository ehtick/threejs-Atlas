/**
 * Ring System Effect - Sistema modular de anillos planetarios
 * 
 * Extraído de PlanetRings3D.tsx para ser completamente reutilizable
 * con cualquier tipo de planeta.
 */

import * as THREE from 'three';

export interface RingSystemParams {
  innerRadius?: number;
  outerRadius?: number;
  tiltFactor?: number;
  particleCount?: number;
  particleData?: any[]; // Datos de partículas de Python
  grayVariation?: 'dark' | 'medium' | 'light' | 'mixed';
  ringThickness?: number;
  sparkleIntensity?: number;
  brightness?: number;
  rotationSync?: boolean;
}

export interface RingParticle {
  x: number;
  y: number;
  z: number;
  distance: number;
  angle: number;
  size: number;
  color: number[];
}

// RNG visual para efectos 3D consistentes
class VisualRNG {
  private seed: number;

  constructor(baseSeed: number) {
    this.seed = baseSeed;
  }

  private next(): number {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }

  uniform(min: number, max: number): number {
    return min + (max - min) * this.next();
  }

  choice<T>(items: T[]): T {
    return items[Math.floor(this.next() * items.length)];
  }
}

export class RingSystemEffect {
  private ringSystem: THREE.Points;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private animationId?: number;
  private params: RingSystemParams;
  private planetRadius: number;
  
  // Variaciones de gris para diferentes estilos de anillos
  private static readonly GRAY_VARIATIONS = {
    dark: { baseGray: 0.18, variation: 0.04 },
    medium: { baseGray: 0.25, variation: 0.06 },
    light: { baseGray: 0.32, variation: 0.06 },
    mixed: { baseGray: 0.25, variation: 0.08 }
  };

  constructor(planetRadius: number, params: RingSystemParams) {
    this.planetRadius = planetRadius;
    this.params = {
      innerRadius: params.innerRadius || planetRadius * 1.3,
      outerRadius: params.outerRadius || planetRadius * 1.8,
      tiltFactor: params.tiltFactor || 0.2,
      particleCount: params.particleCount || 1000,
      grayVariation: params.grayVariation || 'medium',
      ringThickness: params.ringThickness || 0.1,
      sparkleIntensity: params.sparkleIntensity || 0.03,
      brightness: params.brightness || 2.2,
      rotationSync: params.rotationSync !== false,
      ...params
    };

    this.geometry = new THREE.BufferGeometry();
    this.material = this.createRingMaterial();
    this.ringSystem = new THREE.Points(this.geometry, this.material);
    
    this.generateRingGeometry();
  }

  /**
   * Crea el material shader para los anillos
   */
  private createRingMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      uniforms: {
        brightness: { value: this.params.brightness },
        time: { value: 0 }
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        varying float vDistance;
        varying float vSize;
        
        void main() {
          vColor = color;
          vSize = size;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDistance = -mvPosition.z;
          
          // Tamaño dinámico basado en distancia para mejor percepción de profundidad
          gl_PointSize = size * (300.0 / vDistance);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float brightness;
        uniform float time;
        varying vec3 vColor;
        varying float vDistance;
        varying float vSize;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float distance = length(center);
          
          if (distance > 0.5) discard;
          
          // Crear partícula circular suave con degradado
          float alpha = (1.0 - distance * 2.0);
          alpha = smoothstep(0.0, 1.0, alpha);
          
          // Efecto de resplandor sutil
          float glow = 1.0 - distance;
          glow = pow(glow, 1.5);
          
          // Color final con brillo y resplandor
          vec3 finalColor = vColor * brightness * glow;
          
          // Alpha basado en distancia para profundidad
          float depthAlpha = clamp(200.0 / vDistance, 0.3, 1.0);
          
          // Efecto de parpadeo sutil para algunas partículas
          float sparkle = vSize > 1.5 ? (0.8 + 0.2 * sin(time * 2.0 + vDistance * 0.1)) : 1.0;
          
          gl_FragColor = vec4(finalColor * sparkle, alpha * depthAlpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });
  }

  /**
   * Genera la geometría de anillos desde datos de Python o proceduralmente
   */
  private generateRingGeometry(): void {
    let particles: RingParticle[];

    if (this.params.particleData && this.params.particleData.length > 0) {
      // Usar datos de Python si están disponibles
      particles = this.processParticleData(this.params.particleData);
    } else {
      // Generar partículas proceduralmente
      particles = this.generateProceduralRings();
    }

    this.createGeometryFromParticles(particles);
  }

  /**
   * Procesa datos de partículas de Python
   */
  private processParticleData(pythonData: any[]): RingParticle[] {
    const particles: RingParticle[] = [];
    const visualRNG = new VisualRNG(Date.now()); // Usar semilla visual

    for (const particle of pythonData) {
      // Convertir coordenadas de Pillow 2D a Three.js 3D
      const scale = this.planetRadius / (this.params.innerRadius || 200);
      const distance = particle.distance * scale;
      const angle = particle.angle;

      // Aplicar inclinación del anillo
      const tiltAngle = Math.asin(this.params.tiltFactor || 0.2);
      
      const baseX = distance * Math.cos(angle);
      const baseZ = distance * Math.sin(angle);
      const tiltedY = baseZ * Math.sin(tiltAngle);
      const tiltedZ = baseZ * Math.cos(tiltAngle);

      // Añadir variación volumétrica
      const ringThickness = (this.params.outerRadius! - this.params.innerRadius!) * (this.params.ringThickness || 0.4);
      const ySpread = visualRNG.uniform(-ringThickness * 0.8, ringThickness * 0.8);
      const radialSpread = visualRNG.uniform(-ringThickness * 0.3, ringThickness * 0.3);

      particles.push({
        x: baseX + radialSpread,
        y: tiltedY + ySpread,
        z: tiltedZ + visualRNG.uniform(-ringThickness * 0.4, ringThickness * 0.4),
        distance,
        angle,
        size: particle.size || 1.0,
        color: particle.color || [0.25, 0.25, 0.25, 1.0]
      });
    }

    return particles;
  }

  /**
   * Genera anillos proceduralmente cuando no hay datos de Python
   */
  private generateProceduralRings(): RingParticle[] {
    const particles: RingParticle[] = [];
    const visualRNG = new VisualRNG(12345); // Semilla fija para consistencia

    const particleCount = this.params.particleCount || 1000;

    for (let i = 0; i < particleCount; i++) {
      // Distribución radial basada en densidad realista
      const normalizedRadius = Math.pow(visualRNG.uniform(0, 1), 0.7); // Más denso hacia el interior
      const distance = this.params.innerRadius! + (this.params.outerRadius! - this.params.innerRadius!) * normalizedRadius;
      
      const angle = visualRNG.uniform(0, Math.PI * 2);
      
      // Calcular posición base
      const baseX = distance * Math.cos(angle);
      const baseZ = distance * Math.sin(angle);
      
      // Aplicar inclinación
      const tiltAngle = Math.asin(this.params.tiltFactor || 0.2);
      const tiltedY = baseZ * Math.sin(tiltAngle);
      const tiltedZ = baseZ * Math.cos(tiltAngle);

      // Variación volumétrica
      const ringThickness = (this.params.outerRadius! - this.params.innerRadius!) * (this.params.ringThickness || 0.1);
      const ySpread = visualRNG.uniform(-ringThickness, ringThickness);
      
      // Color gris realista con variación
      const grayVariation = RingSystemEffect.GRAY_VARIATIONS[this.params.grayVariation || 'medium'];
      const grayValue = Math.max(0.1, Math.min(0.6, 
        grayVariation.baseGray + visualRNG.uniform(-grayVariation.variation, grayVariation.variation)
      ));
      
      // Tamaño de partícula con variación
      const baseSize = visualRNG.uniform(0.8, 1.5);
      const sparkleChance = visualRNG.uniform(0, 1);
      const size = sparkleChance < (this.params.sparkleIntensity || 0.03) ? 
        baseSize * visualRNG.uniform(1.2, 2.0) : baseSize;

      particles.push({
        x: baseX,
        y: tiltedY + ySpread,
        z: tiltedZ,
        distance,
        angle,
        size,
        color: [grayValue, grayValue, grayValue, 1.0]
      });
    }

    return particles;
  }

  /**
   * Crea la geometría Three.js desde las partículas procesadas
   */
  private createGeometryFromParticles(particles: RingParticle[]): void {
    const positions = new Float32Array(particles.length * 3);
    const colors = new Float32Array(particles.length * 3);
    const sizes = new Float32Array(particles.length);

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      
      positions[i * 3] = particle.x;
      positions[i * 3 + 1] = particle.y;
      positions[i * 3 + 2] = particle.z;

      colors[i * 3] = particle.color[0];
      colors[i * 3 + 1] = particle.color[1];
      colors[i * 3 + 2] = particle.color[2];

      sizes[i] = particle.size;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
  }

  /**
   * Añade el sistema de anillos a la escena
   */
  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.ringSystem.position.copy(planetPosition);
    }
    
    this.ringSystem.renderOrder = 1; // Renderizar por encima del planeta
    scene.add(this.ringSystem);
  }

  /**
   * Actualiza la animación del sistema de anillos
   */
  update(deltaTime: number, planetRotation?: number): void {
    this.material.uniforms.time.value += deltaTime;

    // Sincronizar rotación con el planeta si está habilitado
    if (this.params.rotationSync && planetRotation !== undefined) {
      this.ringSystem.rotation.y = planetRotation;
    }
  }

  /**
   * Actualiza parámetros dinámicamente
   */
  updateParams(newParams: Partial<RingSystemParams>): void {
    this.params = { ...this.params, ...newParams };
    
    // Actualizar material si es necesario
    if (newParams.brightness !== undefined) {
      this.material.uniforms.brightness.value = newParams.brightness;
    }

    // Regenerar geometría si cambiaronparámetros estructurales
    if (newParams.innerRadius || newParams.outerRadius || newParams.particleCount) {
      this.generateRingGeometry();
    }
  }

  /**
   * Obtiene el objeto Three.js para manipulación directa
   */
  getObject3D(): THREE.Points {
    return this.ringSystem;
  }

  /**
   * Limpia recursos
   */
  dispose(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    this.geometry.dispose();
    this.material.dispose();
  }
}

// Función de utilidad para crear anillos desde datos de Python
export function createRingSystemFromPythonData(ringsData: any, planetRadius: number): RingSystemEffect {
  const params: RingSystemParams = {
    innerRadius: ringsData.inner_radius || planetRadius * 1.3,
    outerRadius: ringsData.outer_radius || planetRadius * 1.8,
    tiltFactor: ringsData.tilt_factor || 0.2,
    particleData: [
      ...(ringsData.full_ring?.particles || []),
      ...(ringsData.ontop_ring?.particles || [])
    ],
    rotationSync: true,
    brightness: 2.2
  };

  return new RingSystemEffect(planetRadius, params);
}