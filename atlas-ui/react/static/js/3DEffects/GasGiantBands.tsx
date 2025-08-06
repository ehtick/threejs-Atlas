/**
 * Gas Giant Bands Effect - Sistema de bandas de nubes para planetas gaseosos
 * 
 * Extraído de GasGiant3D.tsx para ser completamente modular y reutilizable
 * con cualquier planeta que necesite efectos de bandas atmosféricas.
 */

import * as THREE from 'three';

export interface GasGiantBandsParams {
  numBands?: number;
  bandPositions?: number[];
  bandWidths?: number[];
  rotationAngle?: number;
  baseColor?: THREE.Color | number[];
  bandColor?: THREE.Color | number[];
  stormColor?: THREE.Color | number[];
  animationSpeed?: number;
  turbulence?: number;
  stormIntensity?: number;
  noiseScale?: number;
}

// RNG seeded para consistencia
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed % 2147483647;
    if (this.seed <= 0) this.seed += 2147483646;
  }

  random(): number {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }

  uniform(min: number, max: number): number {
    return this.random() * (max - min) + min;
  }

  randint(min: number, max: number): number {
    return Math.floor(this.random() * (max - min + 1)) + min;
  }
}

export class GasGiantBandsEffect {
  private material: THREE.ShaderMaterial;
  private params: GasGiantBandsParams;
  private mesh: THREE.Mesh;
  
  // Shaders específicos para bandas de gas giant
  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  private static readonly fragmentShader = `
    uniform float time;
    uniform float seed;
    uniform vec3 planetColor;
    uniform vec3 bandColor;
    uniform vec3 stormColor;
    uniform float numBands;
    uniform float rotationAngle;
    uniform float bandPositions[20]; // Máximo 20 bandas como en Pillow
    uniform float bandWidths[20];
    uniform float animationSpeed;
    uniform float turbulence;
    uniform float stormIntensity;
    uniform float noiseScale;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    // Hash function para generar números pseudo-aleatorios
    float hash(float n) {
      return fract(sin(n + seed) * 43758.5453123);
    }
    
    // Función de ruido simple
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
    
    // Ruido fractal para más detalle
    float fbm(vec3 p) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for(int i = 0; i < 4; i++) {
        value += amplitude * noise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    // Crear bandas de nubes EXACTAMENTE como en Pillow
    float createCloudBands(vec3 pos) {
      float bands = 0.0;
      
      // Las bandas son HORIZONTALES (latitud constante) de polo norte a sur
      // pos.y ya está normalizado de -1 (polo sur) a +1 (polo norte)
      float currentY = pos.y;
      float currentX = pos.x; // Para rotación
      
      // Aplicar rotación EXACTAMENTE como en Pillow
      float cosAngle = cos(rotationAngle);
      float sinAngle = sin(rotationAngle);
      
      // Rotación en coordenadas normalizadas
      float rotatedY = sinAngle * currentX + cosAngle * currentY;
      
      // Verificar si estamos dentro de alguna banda horizontal
      for(int i = 0; i < 20; i++) {
        if(float(i) >= numBands) break;
        
        float bandPosY = bandPositions[i]; // Ya normalizado entre -1 y 1
        float bandWidth = bandWidths[i];   // Ya normalizado
        
        // Verificar si rotatedY está dentro de esta banda
        float distToBand = abs(rotatedY - bandPosY);
        if(distToBand < bandWidth / 2.0) {
          // Suavizar bordes de las bandas
          float bandIntensity = 1.0 - (distToBand / (bandWidth / 2.0));
          
          // Añadir turbulencia a las bandas
          float turbulenceNoise = fbm(pos * noiseScale + vec3(time * animationSpeed * 0.1));
          bandIntensity *= (0.8 + 0.4 * turbulenceNoise * turbulence);
          
          bands += bandIntensity * 0.6;
        }
      }
      
      return clamp(bands, 0.0, 1.0);
    }
    
    // Crear sistemas de tormentas
    float createStorms(vec3 pos) {
      float storms = 0.0;
      
      // Tormentas rotatorias en zonas específicas
      vec2 stormCenters[3];
      stormCenters[0] = vec2(0.3, -0.2);
      stormCenters[1] = vec2(-0.4, 0.6);
      stormCenters[2] = vec2(0.1, 0.8);
      
      for(int i = 0; i < 3; i++) {
        vec2 stormCenter = stormCenters[i];
        float distToStorm = distance(pos.xy, stormCenter);
        
        if(distToStorm < 0.3) {
          // Crear vórtice rotatorio
          float angle = atan(pos.y - stormCenter.y, pos.x - stormCenter.x);
          float spiral = sin(angle * 8.0 + distToStorm * 20.0 - time * animationSpeed * 2.0);
          
          float stormIntensityValue = (1.0 - distToStorm / 0.3) * 0.8;
          stormIntensityValue *= (0.5 + 0.5 * spiral);
          stormIntensityValue *= stormIntensity;
          
          storms += stormIntensityValue;
        }
      }
      
      return clamp(storms, 0.0, 1.0);
    }
    
    // Crear variaciones de turbulencia atmosférica
    float createAtmosphericTurbulence(vec3 pos) {
      // Múltiples capas de ruido para crear turbulencia compleja
      float noise1 = fbm(pos * 3.0 + vec3(time * animationSpeed * 0.05));
      float noise2 = fbm(pos * 6.0 + vec3(time * animationSpeed * 0.1, time * animationSpeed * 0.05, 0.0));
      float noise3 = fbm(pos * 12.0 + vec3(0.0, time * animationSpeed * 0.2, time * animationSpeed * 0.1));
      
      return (noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2) * turbulence;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = planetColor;
      
      // Usar EXACTAS bandas de nubes de Pillow
      float bands = createCloudBands(pos);
      
      // Aplicar bandas naranjas EXACTAMENTE como en Pillow (255, 165, 0, 1)
      vec3 finalBandColor = bandColor * 1.2;
      color = mix(color, finalBandColor, bands * 0.8);
      
      // Añadir variación de tormentas (rojas) en ciertas zonas - como Pillow
      float storms = createStorms(pos);
      color = mix(color, stormColor, storms * 0.6);
      
      // Añadir turbulencia atmosférica general
      float atmosphericTurbulence = createAtmosphericTurbulence(pos);
      color = mix(color, color * 1.2, atmosphericTurbulence * 0.3);
      
      // Iluminación básica
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      color *= lighting;
      
      // Añadir efecto de terminador (día/noche)
      float terminator = smoothstep(-0.1, 0.1, dot(vNormal, lightDirection));
      color *= (0.3 + 0.7 * terminator);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  constructor(mesh: THREE.Mesh, params: GasGiantBandsParams = {}) {
    this.params = {
      numBands: params.numBands || 8,
      bandPositions: params.bandPositions || this.generateDefaultBandPositions(params.numBands || 8),
      bandWidths: params.bandWidths || this.generateDefaultBandWidths(params.numBands || 8),
      rotationAngle: params.rotationAngle || 0,
      baseColor: params.baseColor || new THREE.Color(0xFFA500), // Naranja por defecto
      bandColor: params.bandColor || new THREE.Color(0xFFA500), // Naranja bandas
      stormColor: params.stormColor || new THREE.Color(0x8B0000), // Rojo oscuro tormentas
      animationSpeed: params.animationSpeed || 1.0,
      turbulence: params.turbulence || 0.5,
      stormIntensity: params.stormIntensity || 0.7,
      noiseScale: params.noiseScale || 4.0
    };

    this.mesh = mesh;
    this.material = this.createMaterial();
    this.mesh.material = this.material;
  }

  /**
   * Genera posiciones de bandas por defecto
   */
  private generateDefaultBandPositions(numBands: number): number[] {
    const positions = new Array(20).fill(0);
    const rng = new SeededRandom(12345);
    
    for (let i = 0; i < numBands && i < 20; i++) {
      // Distribuir bandas de -1 (polo sur) a +1 (polo norte)
      positions[i] = rng.uniform(-0.8, 0.8);
    }
    
    return positions;
  }

  /**
   * Genera anchos de bandas por defecto
   */
  private generateDefaultBandWidths(numBands: number): number[] {
    const widths = new Array(20).fill(0);
    const rng = new SeededRandom(67890);
    
    for (let i = 0; i < numBands && i < 20; i++) {
      widths[i] = rng.uniform(0.08, 0.15); // Ancho normalizado
    }
    
    return widths;
  }

  /**
   * Crea el material shader
   */
  private createMaterial(): THREE.ShaderMaterial {
    // Convertir colores a Vector3 si son necesarios
    const baseColor = this.params.baseColor instanceof THREE.Color ? 
      this.params.baseColor : new THREE.Color(this.params.baseColor as any);
    const bandColor = this.params.bandColor instanceof THREE.Color ? 
      this.params.bandColor : new THREE.Color(this.params.bandColor as any);
    const stormColor = this.params.stormColor instanceof THREE.Color ? 
      this.params.stormColor : new THREE.Color(this.params.stormColor as any);

    return new THREE.ShaderMaterial({
      vertexShader: GasGiantBandsEffect.vertexShader,
      fragmentShader: GasGiantBandsEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        seed: { value: Math.random() * 1000 },
        planetColor: { value: baseColor },
        bandColor: { value: bandColor },
        stormColor: { value: stormColor },
        numBands: { value: this.params.numBands },
        rotationAngle: { value: this.params.rotationAngle },
        bandPositions: { value: this.params.bandPositions },
        bandWidths: { value: this.params.bandWidths },
        animationSpeed: { value: this.params.animationSpeed },
        turbulence: { value: this.params.turbulence },
        stormIntensity: { value: this.params.stormIntensity },
        noiseScale: { value: this.params.noiseScale }
      }
    });
  }

  /**
   * Actualiza la animación
   */
  update(deltaTime: number, planetRotation?: number): void {
    this.material.uniforms.time.value += deltaTime;
    
    // Actualizar rotación del planeta si se proporciona
    if (planetRotation !== undefined) {
      this.material.uniforms.rotationAngle.value = planetRotation;
    }
  }

  /**
   * Actualiza parámetros dinámicamente
   */
  updateParams(newParams: Partial<GasGiantBandsParams>): void {
    this.params = { ...this.params, ...newParams };

    // Actualizar uniforms correspondientes
    if (newParams.numBands !== undefined) {
      this.material.uniforms.numBands.value = newParams.numBands;
    }
    if (newParams.bandPositions) {
      this.material.uniforms.bandPositions.value = newParams.bandPositions;
    }
    if (newParams.bandWidths) {
      this.material.uniforms.bandWidths.value = newParams.bandWidths;
    }
    if (newParams.animationSpeed !== undefined) {
      this.material.uniforms.animationSpeed.value = newParams.animationSpeed;
    }
    if (newParams.turbulence !== undefined) {
      this.material.uniforms.turbulence.value = newParams.turbulence;
    }
    if (newParams.stormIntensity !== undefined) {
      this.material.uniforms.stormIntensity.value = newParams.stormIntensity;
    }
    if (newParams.baseColor) {
      const color = newParams.baseColor instanceof THREE.Color ? 
        newParams.baseColor : new THREE.Color(newParams.baseColor as any);
      this.material.uniforms.planetColor.value = color;
    }
    if (newParams.bandColor) {
      const color = newParams.bandColor instanceof THREE.Color ? 
        newParams.bandColor : new THREE.Color(newParams.bandColor as any);
      this.material.uniforms.bandColor.value = color;
    }
    if (newParams.stormColor) {
      const color = newParams.stormColor instanceof THREE.Color ? 
        newParams.stormColor : new THREE.Color(newParams.stormColor as any);
      this.material.uniforms.stormColor.value = color;
    }
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

// Función de utilidad para crear efecto desde datos de Python
export function createGasGiantBandsFromPythonData(mesh: THREE.Mesh, gasGiantData: any): GasGiantBandsEffect {
  const cloudBands = gasGiantData.cloud_bands || {};
  
  const params: GasGiantBandsParams = {
    numBands: cloudBands.num_bands || 8,
    bandPositions: cloudBands.positions || undefined,
    bandWidths: cloudBands.widths || undefined,
    rotationAngle: cloudBands.rotation || 0,
    baseColor: gasGiantData.base_color ? 
      new THREE.Color(gasGiantData.base_color) : new THREE.Color(0xFFA500),
    animationSpeed: 1.0,
    turbulence: gasGiantData.turbulence || 0.5,
    stormIntensity: gasGiantData.storm_intensity || 0.7
  };

  return new GasGiantBandsEffect(mesh, params);
}