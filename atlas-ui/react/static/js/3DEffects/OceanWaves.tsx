/**
 * Ocean Waves Effect - Sistema de océanos con ondas animadas, masas continentales y efectos marinos
 * 
 * Extraído de UniversalPlanet3D.tsx para ser completamente modular
 * y reutilizable en cualquier planeta oceánico.
 */

import * as THREE from 'three';

export interface OceanWavesParams {
  // Configuración de ondas
  waveIntensity?: number;
  waveSpeed?: number;
  waveScale?: number;
  
  // Configuración de masas terrestres
  landmassThreshold?: number;
  landmassColor?: THREE.Color | number[];
  
  // Configuración de océano
  deepOceanThreshold?: number;
  deepOceanMultiplier?: number;
  
  // Configuración de espuma
  foamThreshold?: number;
  foamColor?: THREE.Color | number[];
  foamIntensity?: number;
  
  // Color base del océano
  oceanColor?: THREE.Color | number[];
}

export class OceanWavesEffect {
  private material: THREE.ShaderMaterial;
  private params: OceanWavesParams;

  // Vertex shader
  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Fragment shader con efectos oceánicos
  private static readonly fragmentShader = `
    uniform float time;
    uniform vec3 baseColor;
    
    // Configuración de ondas
    uniform float waveIntensity;
    uniform float waveSpeed;
    uniform float waveScale;
    
    // Configuración de masas terrestres
    uniform float landmassThreshold;
    uniform vec3 landmassColor;
    
    // Configuración de océano profundo
    uniform float deepOceanThreshold;
    uniform float deepOceanMultiplier;
    
    // Configuración de espuma
    uniform float foamThreshold;
    uniform vec3 foamColor;
    uniform float foamIntensity;
    
    // Color base del océano
    uniform vec3 oceanColor;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    // Función de ruido 3D
    float hash(float n) {
      return fract(sin(n) * 43758.5453123);
    }
    
    float noise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float n = i.x + i.y * 57.0 + 113.0 * i.z;
      return mix(
        mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
            mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
        mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
            mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
    }
    
    // Fractales de ruido para mayor complejidad
    float fractalNoise(vec3 p, int octaves) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for(int i = 0; i < 6; i++) {
        if(i >= octaves) break;
        value += amplitude * noise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = oceanColor;
      
      // Ondas animadas del agua - múltiples capas
      float waves1 = sin(pos.x * waveScale + time * waveSpeed) * sin(pos.z * waveScale + time * waveSpeed * 1.5);
      float waves2 = sin(pos.x * waveScale * 1.5 - time * waveSpeed * 1.8) * sin(pos.z * waveScale * 1.2 + time * waveSpeed * 2.2);
      float waves3 = sin(pos.x * waveScale * 2.0 + time * waveSpeed * 0.7) * sin(pos.z * waveScale * 2.5 - time * waveSpeed * 1.3);
      
      // Combinar ondas con diferentes intensidades
      float totalWaves = (waves1 + waves2 * 0.5 + waves3 * 0.3) * waveIntensity;
      
      // Aplicar efecto de ondas al color
      vec3 waveColor = vec3(0.0, 0.2, 0.4);
      color += waveColor * totalWaves;
      
      // Masas continentales (áreas más altas = más claras)
      float landmass = fractalNoise(pos * 3.0, 4);
      if(landmass > landmassThreshold) {
        float landIntensity = smoothstep(landmassThreshold, 0.7, landmass);
        color = mix(color, landmassColor, landIntensity);
      }
      
      // Fosas oceánicas profundas (más oscuras)
      float depth = fractalNoise(pos * 6.0 + vec3(time * 0.1), 3);
      if(depth < deepOceanThreshold) {
        color *= deepOceanMultiplier;
      }
      
      // Espuma/crestas de olas
      float foam = fractalNoise(pos * 20.0 + vec3(time * 3.0), 2);
      if(foam > foamThreshold) {
        float foamMix = smoothstep(foamThreshold, 1.0, foam) * foamIntensity;
        color = mix(color, foamColor, foamMix);
      }
      
      // Efectos de cáusticas submarinas
      float caustics = sin(pos.x * 30.0 + time * 4.0) * sin(pos.z * 25.0 + time * 3.5);
      caustics = pow(max(caustics, 0.0), 3.0);
      color += vec3(0.1, 0.3, 0.5) * caustics * 0.2;
      
      // Reflejos de superficie
      float fresnel = pow(1.0 - abs(dot(vNormal, normalize(vWorldPosition))), 2.0);
      vec3 reflectionColor = vec3(0.8, 0.9, 1.0);
      color = mix(color, reflectionColor, fresnel * 0.3);
      
      // Iluminación básica con efecto submarino
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      
      // Atenuación de luz en agua
      float waterAttenuation = 0.7 + 0.3 * lighting;
      color *= waterAttenuation;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  constructor(params: OceanWavesParams = {}) {
    this.params = {
      waveIntensity: params.waveIntensity || 0.3,
      waveSpeed: params.waveSpeed || 2.0,
      waveScale: params.waveScale || 8.0,
      landmassThreshold: params.landmassThreshold || 0.3,
      landmassColor: params.landmassColor || new THREE.Color(0.4, 0.6, 0.2),
      deepOceanThreshold: params.deepOceanThreshold || 0.2,
      deepOceanMultiplier: params.deepOceanMultiplier || 0.5,
      foamThreshold: params.foamThreshold || 0.8,
      foamColor: params.foamColor || new THREE.Color(0.9, 0.9, 1.0),
      foamIntensity: params.foamIntensity || 0.4,
      oceanColor: params.oceanColor || new THREE.Color(0.1, 0.3, 0.6),
      ...params
    };

    this.material = this.createMaterial();
  }

  /**
   * Crea el material shader
   */
  private createMaterial(): THREE.ShaderMaterial {
    const landmassColor = this.params.landmassColor instanceof THREE.Color ? 
      this.params.landmassColor : new THREE.Color(this.params.landmassColor as any);
    const foamColor = this.params.foamColor instanceof THREE.Color ? 
      this.params.foamColor : new THREE.Color(this.params.foamColor as any);
    const oceanColor = this.params.oceanColor instanceof THREE.Color ? 
      this.params.oceanColor : new THREE.Color(this.params.oceanColor as any);

    return new THREE.ShaderMaterial({
      vertexShader: OceanWavesEffect.vertexShader,
      fragmentShader: OceanWavesEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        baseColor: { value: oceanColor },
        
        // Uniformes de ondas
        waveIntensity: { value: this.params.waveIntensity },
        waveSpeed: { value: this.params.waveSpeed },
        waveScale: { value: this.params.waveScale },
        
        // Uniformes de masas terrestres
        landmassThreshold: { value: this.params.landmassThreshold },
        landmassColor: { value: landmassColor },
        
        // Uniformes de océano profundo
        deepOceanThreshold: { value: this.params.deepOceanThreshold },
        deepOceanMultiplier: { value: this.params.deepOceanMultiplier },
        
        // Uniformes de espuma
        foamThreshold: { value: this.params.foamThreshold },
        foamColor: { value: foamColor },
        foamIntensity: { value: this.params.foamIntensity },
        
        // Color del océano
        oceanColor: { value: oceanColor }
      }
    });
  }

  /**
   * Aplica el efecto a un mesh
   */
  apply(mesh: THREE.Mesh): void {
    mesh.material = this.material;
  }

  /**
   * Actualiza la animación
   */
  update(deltaTime: number): void {
    this.material.uniforms.time.value += deltaTime;
  }

  /**
   * Actualiza parámetros dinámicamente
   */
  updateParams(newParams: Partial<OceanWavesParams>): void {
    this.params = { ...this.params, ...newParams };
    
    // Actualizar uniformes correspondientes
    Object.keys(newParams).forEach(key => {
      const value = newParams[key as keyof OceanWavesParams];
      if (value !== undefined && this.material.uniforms[key]) {
        if (value instanceof THREE.Color || Array.isArray(value)) {
          const color = value instanceof THREE.Color ? value : new THREE.Color(value as any);
          this.material.uniforms[key].value = color;
        } else {
          this.material.uniforms[key].value = value;
        }
      }
    });
  }

  /**
   * Obtiene el material para manipulación directa
   */
  getMaterial(): THREE.ShaderMaterial {
    return this.material;
  }

  /**
   * Limpia recursos
   */
  dispose(): void {
    this.material.dispose();
  }
}

// Función de utilidad para crear desde datos de Python
export function createOceanWavesFromPythonData(pythonData: any): OceanWavesEffect {
  // Usar el base_color de Python si está disponible, sino usar color oceánico por defecto
  let oceanColor = [0.1, 0.3, 0.6]; // Default oceanic
  
  if (pythonData.ocean_color) {
    // Si hay un ocean_color específico, usarlo
    if (typeof pythonData.ocean_color === 'string') {
      // Si es un string hex como "#0000FF", convertirlo
      const hex = pythonData.ocean_color.replace('#', '');
      oceanColor = [
        parseInt(hex.substr(0, 2), 16) / 255,
        parseInt(hex.substr(2, 2), 16) / 255,
        parseInt(hex.substr(4, 2), 16) / 255
      ];
    } else if (Array.isArray(pythonData.ocean_color)) {
      oceanColor = pythonData.ocean_color;
    }
  } else if (pythonData.base_color) {
    // Si no hay ocean_color pero sí base_color, usarlo
    if (typeof pythonData.base_color === 'string') {
      const hex = pythonData.base_color.replace('#', '');
      oceanColor = [
        parseInt(hex.substr(0, 2), 16) / 255,
        parseInt(hex.substr(2, 2), 16) / 255,
        parseInt(hex.substr(4, 2), 16) / 255
      ];
    }
  }
  
  console.log('🌊 Creating ocean effect with color from Python:', {
    base_color: pythonData.base_color,
    ocean_color: pythonData.ocean_color,
    final_color: oceanColor,
    seeds: pythonData.seeds
  });
  
  // GENERAR PARÁMETROS PROCEDIMENTALMENTE usando seeds de Python
  let waveIntensity = 0.3;
  let waveSpeed = 2.0;
  let waveScale = 8.0;
  let landmassThreshold = 0.3;
  let deepOceanThreshold = 0.2;
  
  if (pythonData.seeds) {
    // Usar shape_seed para generar parámetros únicos pero consistentes
    const seed = pythonData.seeds.shape_seed;
    const rng = (seed: number) => {
      let s = seed;
      return () => {
        s = (s * 1664525 + 1013904223) % 4294967296;
        return s / 4294967296;
      };
    };
    
    const random = rng(seed);
    waveIntensity = 0.2 + random() * 0.3; // 0.2 - 0.5
    waveSpeed = 1.5 + random() * 1.5; // 1.5 - 3.0
    waveScale = 6.0 + random() * 6.0; // 6.0 - 12.0
    landmassThreshold = 0.25 + random() * 0.15; // 0.25 - 0.4
    deepOceanThreshold = 0.15 + random() * 0.1; // 0.15 - 0.25
    
    console.log('🌊 Procedural ocean params:', {
      seed,
      waveIntensity,
      waveSpeed,
      waveScale,
      landmassThreshold,
      deepOceanThreshold
    });
  }
  
  const params: OceanWavesParams = {
    waveIntensity,
    waveSpeed,
    waveScale,
    landmassThreshold,
    deepOceanThreshold,
    deepOceanMultiplier: 0.5,
    foamThreshold: 0.8,
    foamColor: new THREE.Color(0.9, 0.9, 1.0),
    foamIntensity: 0.4,
    oceanColor: oceanColor
  };

  return new OceanWavesEffect(params);
}