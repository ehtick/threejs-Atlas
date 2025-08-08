/**
 * Atmosphere Glow Effect - Sistema de partículas luminosas atmosféricas
 * 
 * Crea partículas brillantes que orbitan el planeta, generando un efecto
 * de resplandor atmosférico dinámico. Anteriormente llamado CloudGyros.
 * 
 * Responsabilidades:
 * - AtmosphereGlow.tsx -> Partículas luminosas orbitantes (ESTE ARCHIVO)
 * - CloudBands.tsx -> Bandas horizontales de gas giants
 * - CloudGyros.tsx -> Espirales giratorias específicas
 */

import * as THREE from 'three';

export interface AtmosphereGlowParams {
  color?: THREE.Color | number;
  particleCount?: number;
  speed?: number;
  size?: number;
  opacity?: number;
  turbulence?: number;
}

/**
 * Efecto de Resplandor Atmosférico (anteriormente CloudGyrosEffect)
 * 
 * Crea partículas luminosas que orbitan alrededor del planeta
 */
export class AtmosphereGlowEffect {
  private particleSystem: THREE.Points;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private params: AtmosphereGlowParams;
  private particleCount: number;

  private static readonly vertexShader = `
    attribute float size;
    attribute vec3 customColor;
    attribute float speed;
    attribute float phase;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    
    uniform float time;
    uniform float turbulence;
    
    void main() {
      vColor = customColor;
      vSize = size;
      
      // Movimiento de las partículas con turbulencia
      vec3 pos = position;
      float timeWithPhase = time * speed + phase;
      
      pos.x += sin(timeWithPhase) * 0.1 * turbulence;
      pos.y += cos(timeWithPhase * 0.7) * 0.05 * turbulence;
      pos.z += sin(timeWithPhase * 0.5) * 0.08 * turbulence;
      
      // Fade basado en la posición y tiempo
      float distanceFromCenter = length(pos.xy) / 2.0;
      vAlpha = (1.0 - distanceFromCenter) * (0.5 + 0.5 * sin(timeWithPhase * 2.0));
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  private static readonly fragmentShader = `
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    
    void main() {
      // Crear forma de estela alargada
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      // Estela con forma más dinámica
      float streak = 1.0 - smoothstep(0.0, 0.5, dist);
      float elongation = 1.0 - smoothstep(0.0, 0.3, abs(uv.x));
      streak *= elongation;
      
      // Añadir variación basada en el tamaño
      float sizeVariation = vSize > 1.5 ? 1.2 : 0.8;
      streak *= sizeVariation;
      
      gl_FragColor = vec4(vColor, streak * vAlpha);
    }
  `;

  constructor(planetRadius: number, params: AtmosphereGlowParams = {}) {
    this.params = {
      color: params.color || new THREE.Color(0xffffff),
      particleCount: params.particleCount || 100,
      speed: params.speed || 1.0,
      size: params.size || 2.0,
      opacity: params.opacity || 0.6,
      turbulence: params.turbulence || 1.0
    };

    this.particleCount = this.params.particleCount!;
    this.geometry = new THREE.BufferGeometry();
    this.material = this.createMaterial();
    
    this.generateParticles(planetRadius);
    this.particleSystem = new THREE.Points(this.geometry, this.material);
  }

  private generateParticles(planetRadius: number): void {
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);
    const speeds = new Float32Array(this.particleCount);
    const phases = new Float32Array(this.particleCount);

    const color = this.params.color instanceof THREE.Color ? 
      this.params.color : new THREE.Color(this.params.color as any);

    for (let i = 0; i < this.particleCount; i++) {
      // Posición aleatoria en la superficie
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = planetRadius * (1.0 + Math.random() * 0.1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Color con ligera variación
      colors[i * 3] = color.r * (0.8 + Math.random() * 0.4);
      colors[i * 3 + 1] = color.g * (0.8 + Math.random() * 0.4);
      colors[i * 3 + 2] = color.b * (0.8 + Math.random() * 0.4);

      sizes[i] = this.params.size! * (Math.random() * 0.5 + 0.75);
      speeds[i] = this.params.speed! * (Math.random() * 0.8 + 0.6);
      phases[i] = Math.random() * Math.PI * 2;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
    this.geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
  }

  private createMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: AtmosphereGlowEffect.vertexShader,
      fragmentShader: AtmosphereGlowEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        turbulence: { value: this.params.turbulence }
      },
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
    this.material.uniforms.time.value += deltaTime;
    
    // Rotación lenta del sistema de partículas
    this.particleSystem.rotation.y += deltaTime * 0.1;
  }

  updateParams(newParams: Partial<AtmosphereGlowParams>): void {
    this.params = { ...this.params, ...newParams };

    if (newParams.turbulence !== undefined) {
      this.material.uniforms.turbulence.value = newParams.turbulence;
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
export function createAtmosphereGlowFromPythonData(
  planetRadius: number, 
  atmosphereData: any
): AtmosphereGlowEffect {
  console.log('✨ ATMOSPHERE GLOW CREATING - PARTICLE GLOW EFFECT!', { speed: 0.4, count: 500 });
  const streaksData = atmosphereData.streaks || {};
  
  const params: AtmosphereGlowParams = {
    color: streaksData.color ? new THREE.Color().setRGB(
      streaksData.color[0], streaksData.color[1], streaksData.color[2]
    ) : new THREE.Color(0xffffff),
    particleCount: streaksData.count || 500, // ⚠️ MUCHAS MÁS PARTÍCULAS PARA VER
    speed: streaksData.speed || 0.4,
    size: 1.0,
    opacity: 0, // ✅ RESTAURAR CLOUD GYROS
    turbulence: 1.0
  };

  return new AtmosphereGlowEffect(planetRadius, params);
}