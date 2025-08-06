/**
 * Atmospheric Effects - Efectos atmosféricos modulares
 * 
 * Incluye halos, resplandores, estelas y otros efectos atmosféricos
 * que pueden aplicarse a cualquier tipo de planeta.
 */

import * as THREE from 'three';

export interface AtmosphericHaloParams {
  color?: THREE.Color | number[];
  intensity?: number;
  falloff?: number;
  scale?: number;
  pulsation?: boolean;
  pulsationSpeed?: number;
  fresnelPower?: number;
}

export interface AtmosphericStreaksParams {
  color?: THREE.Color | number[];
  particleCount?: number;
  speed?: number;
  size?: number;
  opacity?: number;
  turbulence?: number;
}

export interface AtmosphereParams {
  type?: string;
  color?: number[];
  width?: number;
  opacity?: number;
  density?: number;
}

/**
 * Efecto de Halo Atmosférico
 */
export class AtmosphericHaloEffect {
  private mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.SphereGeometry;
  private params: AtmosphericHaloParams;

  private static readonly vertexShader = `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  private static readonly fragmentShader = `
    uniform vec3 glowColor;
    uniform float glowIntensity;
    uniform float glowFalloff;
    uniform float fresnelPower;
    uniform float time;
    uniform bool pulsation;
    uniform float pulsationSpeed;
    
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // Efecto Fresnel para el halo
      float fresnel = pow(1.0 - abs(dot(normal, viewDir)), fresnelPower);
      
      // Pulsación opcional
      float pulse = pulsation ? 
        (0.8 + 0.2 * sin(time * pulsationSpeed)) : 1.0;
      
      // Color del halo con gradiente
      vec3 color = glowColor * glowIntensity * fresnel * pulse;
      
      // Añadir variación de color en los bordes
      color += glowColor * 0.5 * pow(fresnel, 3.0);
      
      // Gradiente radial adicional
      float radialGradient = 1.0 - length(vWorldPosition.xz) * 0.1;
      color *= max(0.5, radialGradient);
      
      // Alpha con suavizado
      float alpha = fresnel * glowFalloff * pulse;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  constructor(planetRadius: number, params: AtmosphericHaloParams = {}) {
    this.params = {
      color: params.color || new THREE.Color(0x4466ff),
      intensity: params.intensity || 1.0,
      falloff: params.falloff || 0.8,
      scale: params.scale || 1.2,
      pulsation: params.pulsation || false,
      pulsationSpeed: params.pulsationSpeed || 2.0,
      fresnelPower: params.fresnelPower || 2.0
    };

    this.geometry = new THREE.SphereGeometry(
      planetRadius * this.params.scale!,
      64,
      64
    );

    this.material = this.createMaterial();
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  private createMaterial(): THREE.ShaderMaterial {
    const color = this.params.color instanceof THREE.Color ? 
      this.params.color : new THREE.Color(this.params.color as any);

    return new THREE.ShaderMaterial({
      vertexShader: AtmosphericHaloEffect.vertexShader,
      fragmentShader: AtmosphericHaloEffect.fragmentShader,
      uniforms: {
        glowColor: { value: color },
        glowIntensity: { value: this.params.intensity },
        glowFalloff: { value: this.params.falloff },
        fresnelPower: { value: this.params.fresnelPower },
        time: { value: 0 },
        pulsation: { value: this.params.pulsation },
        pulsationSpeed: { value: this.params.pulsationSpeed }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.mesh.position.copy(planetPosition);
    }
    scene.add(this.mesh);
  }

  update(deltaTime: number): void {
    this.material.uniforms.time.value += deltaTime;
  }

  updateParams(newParams: Partial<AtmosphericHaloParams>): void {
    this.params = { ...this.params, ...newParams };

    if (newParams.color) {
      const color = newParams.color instanceof THREE.Color ? 
        newParams.color : new THREE.Color(newParams.color as any);
      this.material.uniforms.glowColor.value = color;
    }
    if (newParams.intensity !== undefined) {
      this.material.uniforms.glowIntensity.value = newParams.intensity;
    }
    if (newParams.falloff !== undefined) {
      this.material.uniforms.glowFalloff.value = newParams.falloff;
    }
    if (newParams.pulsation !== undefined) {
      this.material.uniforms.pulsation.value = newParams.pulsation;
    }
    if (newParams.pulsationSpeed !== undefined) {
      this.material.uniforms.pulsationSpeed.value = newParams.pulsationSpeed;
    }
  }

  getObject3D(): THREE.Mesh {
    return this.mesh;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}

/**
 * Efecto de Estelas Atmosféricas
 */
export class AtmosphericStreaksEffect {
  private particleSystem: THREE.Points;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private params: AtmosphericStreaksParams;
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

  constructor(planetRadius: number, params: AtmosphericStreaksParams = {}) {
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
      vertexShader: AtmosphericStreaksEffect.vertexShader,
      fragmentShader: AtmosphericStreaksEffect.fragmentShader,
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

  updateParams(newParams: Partial<AtmosphericStreaksParams>): void {
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
 * Efecto de Atmósfera Densa - Con gradiente fresnel como la atmósfera de fallback
 */
export class DenseAtmosphereEffect {
  private mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.SphereGeometry;
  private params: AtmosphereParams;

  private static readonly vertexShader = `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  private static readonly fragmentShader = `
    uniform vec3 atmosphereColor;
    uniform float atmosphereOpacity;
    uniform float fresnelPower;
    
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // Efecto Fresnel - opaco en bordes, transparente en el centro
      float fresnel = pow(1.0 - abs(dot(normal, viewDir)), fresnelPower);
      
      // Color de la atmósfera
      vec3 color = atmosphereColor;
      
      // Alpha con efecto fresnel
      float alpha = fresnel * atmosphereOpacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  constructor(planetRadius: number, params: AtmosphereParams = {}) {
    this.params = {
      type: params.type || 'Thin',
      color: params.color || [0.5, 0.5, 0.8, 0.3],
      width: params.width || 15,
      opacity: params.opacity || 0.3,
      density: params.density || 1.0
    };

    console.log('DenseAtmosphereEffect params:', this.params); // Debug

    // Usar el width de la atmósfera para determinar el grosor
    // width viene como porcentaje adicional del radio del planeta
    const atmosphereRadius = planetRadius * (1 + (this.params.width! / 100));
    
    // Usar la misma resolución que las estrellas
    this.geometry = new THREE.SphereGeometry(atmosphereRadius, 16, 16);
    
    // Crear el color THREE.js
    const atmosphereColor = new THREE.Color(
      this.params.color![0],
      this.params.color![1],
      this.params.color![2]
    );
    
    console.log('THREE.Color created:', atmosphereColor, 'from RGB:', [this.params.color![0], this.params.color![1], this.params.color![2]]); // Debug
    
    // Usar ShaderMaterial con efecto fresnel como la atmósfera de fallback
    this.material = new THREE.ShaderMaterial({
      vertexShader: DenseAtmosphereEffect.vertexShader,
      fragmentShader: DenseAtmosphereEffect.fragmentShader,
      uniforms: {
        atmosphereColor: { value: atmosphereColor },
        atmosphereOpacity: { value: this.params.opacity! },
        fresnelPower: { value: 2.0 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false
    });

    console.log('Material created with shader and color:', atmosphereColor, 'opacity:', this.params.opacity); // Debug

    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.mesh.position.copy(planetPosition);
    }
    scene.add(this.mesh);
  }

  update(deltaTime: number): void {
    // No rotación para mantener consistencia con las estrellas
  }

  updateParams(newParams: Partial<AtmosphereParams>): void {
    this.params = { ...this.params, ...newParams };

    if (newParams.color) {
      console.log('Updating color to:', newParams.color); // Debug
      const atmosphereColor = new THREE.Color(
        newParams.color[0],
        newParams.color[1],
        newParams.color[2]
      );
      this.material.uniforms.atmosphereColor.value = atmosphereColor;
    }
    if (newParams.opacity !== undefined) {
      this.material.uniforms.atmosphereOpacity.value = newParams.opacity;
    }
    if (newParams.density !== undefined) {
      this.material.uniforms.atmosphereOpacity.value = (this.params.opacity || 0.3) * newParams.density;
    }
  }

  getObject3D(): THREE.Mesh {
    return this.mesh;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}

// Funciones de utilidad para crear efectos desde datos de Python
export function createAtmosphericHaloFromPythonData(
  planetRadius: number, 
  atmosphereData: any
): AtmosphericHaloEffect {
  const haloData = atmosphereData.halo || {};
  
  const params: AtmosphericHaloParams = {
    color: haloData.color ? new THREE.Color().setRGB(
      haloData.color[0], haloData.color[1], haloData.color[2]
    ) : new THREE.Color(0x4466ff),
    intensity: haloData.intensity || 1.0,
    falloff: haloData.falloff || 0.8,
    scale: haloData.scale || 1.2,
    pulsation: haloData.pulsation || false,
    pulsationSpeed: haloData.pulsation_speed || 2.0
  };

  return new AtmosphericHaloEffect(planetRadius, params);
}

export function createAtmosphericStreaksFromPythonData(
  planetRadius: number, 
  atmosphereData: any
): AtmosphericStreaksEffect {
  const streaksData = atmosphereData.streaks || {};
  
  const params: AtmosphericStreaksParams = {
    color: streaksData.color ? new THREE.Color().setRGB(
      streaksData.color[0], streaksData.color[1], streaksData.color[2]
    ) : new THREE.Color(0xffffff),
    particleCount: streaksData.count || 100,
    speed: streaksData.speed || 1.0,
    size: 2.0,
    opacity: 0.6,
    turbulence: 1.0
  };

  return new AtmosphericStreaksEffect(planetRadius, params);
}

export function createDenseAtmosphereFromPythonData(
  planetRadius: number, 
  atmosphereData: any
): DenseAtmosphereEffect {
  console.log('Atmosphere data received:', atmosphereData); // Debug
  
  // Los colores ya vienen normalizados (0-1) desde la API Python
  let atmosphereColor = [0.5, 0.5, 0.8, 0.15]; // Default azul con baja opacidad
  let atmosphereWidth = 15; // Default width
  
  if (atmosphereData) {
    if (atmosphereData.color && Array.isArray(atmosphereData.color)) {
      console.log('Color from API (already normalized):', atmosphereData.color); // Debug
      // Los colores ya están en formato 0-1, no convertir de nuevo
      atmosphereColor = [
        atmosphereData.color[0],  // R
        atmosphereData.color[1],  // G  
        atmosphereData.color[2],  // B
        atmosphereData.color[3] * 0.5  // A - Reducir opacidad para no oscurecer tanto
      ];
    }
    
    if (atmosphereData.width) {
      atmosphereWidth = atmosphereData.width;
    }
    
    console.log('Processed color:', atmosphereColor); // Debug
    console.log('Width:', atmosphereWidth); // Debug
  }
  
  const params: AtmosphereParams = {
    type: atmosphereData?.type || 'Thin',
    color: atmosphereColor,
    width: atmosphereWidth,
    opacity: atmosphereColor[3], // Usar la opacidad del color
    density: 1.0
  };

  console.log('Final params:', params); // Debug
  return new DenseAtmosphereEffect(planetRadius, params);
}