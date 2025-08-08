/**
 * Cloud Bands Effect - Bandas horizontales de nubes para gas giants
 * 
 * Crea las bandas horizontales características de planetas gaseosos como
 * Júpiter y Saturno. Extraído de GasGiantBands para separar responsabilidades.
 * 
 * Responsabilidades:
 * - CloudBands.tsx -> Bandas horizontales solamente (ESTE ARCHIVO)
 * - CloudGyros.tsx -> Espirales giratorias específicas  
 * - AtmosphereGlow.tsx -> Partículas luminosas orbitantes
 */

import * as THREE from 'three';

export interface CloudBandsParams {
  numBands?: number;
  bandPositions?: number[];
  bandWidths?: number[];
  rotationAngle?: number;
  baseColor?: THREE.Color | number[];
  bandColor?: THREE.Color | number[];
  animationSpeed?: number;
  turbulence?: number;
  noiseScale?: number;
}

// Generador de números aleatorios con semilla
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  random(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  uniform(min: number, max: number): number {
    return min + this.random() * (max - min);
  }

  randint(min: number, max: number): number {
    return Math.floor(this.random() * (max - min + 1)) + min;
  }
}

export class CloudBandsEffect {
  private material: THREE.ShaderMaterial;
  private params: CloudBandsParams;
  private mesh: THREE.Mesh;
  
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
    uniform float numBands;
    uniform float rotationAngle;
    uniform float bandPositions[20];
    uniform float bandWidths[20];
    uniform float animationSpeed;
    uniform float turbulence;
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
    
    // Crear bandas de nubes horizontales
    float createCloudBands(vec3 pos) {
      float bands = 0.0;
      
      // Las bandas son HORIZONTALES (latitud constante)
      float currentY = pos.y;
      float currentX = pos.x;
      
      // Aplicar rotación
      float cosAngle = cos(rotationAngle);
      float sinAngle = sin(rotationAngle);
      float rotatedY = sinAngle * currentX + cosAngle * currentY;
      
      // Verificar si estamos dentro de alguna banda horizontal
      for(int i = 0; i < 20; i++) {
        if(float(i) >= numBands) break;
        
        float bandPosY = bandPositions[i];
        float bandWidth = bandWidths[i];
        
        float distToBand = abs(rotatedY - bandPosY);
        if(distToBand < bandWidth / 2.0) {
          // Suavizar bordes de las bandas
          float bandIntensity = 1.0 - (distToBand / (bandWidth / 2.0));
          
          // Añadir turbulencia a las bandas
          float turbulenceNoise = fbm(pos * noiseScale + vec3(time * animationSpeed * 0.1));
          bandIntensity *= (0.8 + 0.4 * turbulenceNoise * turbulence);
          
          bands += bandIntensity * 0.8; // Más intensidad para que se vean mejor
        }
      }
      
      return clamp(bands, 0.0, 1.0);
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = planetColor;
      
      // Aplicar bandas horizontales
      float bands = createCloudBands(pos);
      color = mix(color, bandColor, bands);
      
      // Iluminación básica
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      color *= lighting;
      
      // Añadir efecto de terminador (día/noche) - CRÍTICO
      float terminator = smoothstep(-0.1, 0.1, dot(vNormal, lightDirection));
      color *= (0.3 + 0.7 * terminator);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  constructor(mesh: THREE.Mesh, params: CloudBandsParams = {}) {
    this.params = {
      numBands: params.numBands || 8,
      bandPositions: params.bandPositions || this.generateDefaultBandPositions(params.numBands || 8),
      bandWidths: params.bandWidths || this.generateDefaultBandWidths(params.numBands || 8),
      rotationAngle: params.rotationAngle || 0,
      baseColor: params.baseColor || new THREE.Color(0xFFA500), // Naranja base
      bandColor: params.bandColor || new THREE.Color(0xFF8C00), // Naranja más oscuro para contraste
      animationSpeed: params.animationSpeed || 1.0,
      turbulence: params.turbulence || 0.5,
      noiseScale: params.noiseScale || 3.0
    };

    this.mesh = mesh;
    this.material = this.createMaterial();
    this.mesh.material = this.material;
  }

  private generateDefaultBandPositions(numBands: number): number[] {
    const positions = new Array(20).fill(0);
    const rng = new SeededRandom(12345);
    
    for (let i = 0; i < numBands && i < 20; i++) {
      positions[i] = rng.uniform(-0.8, 0.8);
    }
    
    return positions;
  }

  private generateDefaultBandWidths(numBands: number): number[] {
    const widths = new Array(20).fill(0);
    const rng = new SeededRandom(67890);
    
    for (let i = 0; i < numBands && i < 20; i++) {
      widths[i] = rng.uniform(0.08, 0.15);
    }
    
    return widths;
  }

  private createMaterial(): THREE.ShaderMaterial {
    const baseColor = this.params.baseColor instanceof THREE.Color ? 
      this.params.baseColor : new THREE.Color(this.params.baseColor as any);
    const bandColor = this.params.bandColor instanceof THREE.Color ? 
      this.params.bandColor : new THREE.Color(this.params.bandColor as any);

    return new THREE.ShaderMaterial({
      vertexShader: CloudBandsEffect.vertexShader,
      fragmentShader: CloudBandsEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        seed: { value: Math.random() * 1000 },
        planetColor: { value: baseColor },
        bandColor: { value: bandColor },
        numBands: { value: this.params.numBands },
        rotationAngle: { value: this.params.rotationAngle },
        bandPositions: { value: this.params.bandPositions },
        bandWidths: { value: this.params.bandWidths },
        animationSpeed: { value: this.params.animationSpeed },
        turbulence: { value: this.params.turbulence },
        noiseScale: { value: this.params.noiseScale }
      },
      transparent: false,
      side: THREE.FrontSide
    });
  }

  update(deltaTime: number, planetRotation?: number): void {
    this.material.uniforms.time.value += deltaTime;
    
    if (planetRotation !== undefined) {
      this.material.uniforms.rotationAngle.value = planetRotation;
    }
  }

  updateParams(newParams: Partial<CloudBandsParams>): void {
    this.params = { ...this.params, ...newParams };
    
    // Actualizar uniforms
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
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    // Este efecto modifica el material del mesh del planeta directamente
    // No necesita ser añadido a la escena por separado
  }

  apply(mesh: THREE.Mesh): void {
    // Aplicar el material al mesh
    mesh.material = this.material;
  }

  dispose(): void {
    this.material.dispose();
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createCloudBandsFromPythonData(
  mesh: THREE.Mesh,
  gasGiantData: any
): CloudBandsEffect {
  const cloudBands = gasGiantData.cloud_bands || {};
  
  const params: CloudBandsParams = {
    numBands: cloudBands.num_bands || 8,
    bandPositions: cloudBands.positions || undefined,
    bandWidths: cloudBands.widths || undefined,
    rotationAngle: cloudBands.rotation || 0,
    baseColor: gasGiantData.base_color ? 
      new THREE.Color(gasGiantData.base_color) : new THREE.Color(0xFFA500),
    bandColor: new THREE.Color(0xFF8C00), // Naranja más oscuro para contraste
    animationSpeed: 1.0,
    turbulence: gasGiantData.turbulence || 0.5,
    noiseScale: 3.0
  };

  return new CloudBandsEffect(mesh, params);
}