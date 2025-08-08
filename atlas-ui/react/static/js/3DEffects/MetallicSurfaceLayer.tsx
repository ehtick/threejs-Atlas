/**
 * Metallic Surface Layer - Versión que funciona como capa
 * 
 * Crea superficie metálica como capa transparente
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';
import { SeededRandom } from '../Utils/SeededRandom';

export interface MetallicSurfaceLayerParams {
  color?: THREE.Color | number[];
  metalness?: number;
  roughness?: number;
  fragmentationIntensity?: number;
  opacity?: number;
  seed?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  METALNESS: { min: 0.7, max: 0.95 },
  ROUGHNESS: { min: 0.1, max: 0.6 },
  FRAGMENTATION_INTENSITY: { min: 0.3, max: 0.8 },
  OPACITY: { min: 0.6, max: 0.9 }
};

export class MetallicSurfaceLayer {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: MetallicSurfaceLayerParams;
  private layerSystem: PlanetLayerSystem;

  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vViewPosition;
    
    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  private static readonly fragmentShader = `
    uniform vec3 metalColor;
    uniform float metalness;
    uniform float roughness;
    uniform float fragmentationIntensity;
    uniform float opacity;
    uniform vec3 lightDirection;
    uniform float time;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vViewPosition;
    
    // Función de ruido para los detalles metálicos
    float noise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float n = i.x + i.y * 57.0 + 113.0 * i.z;
      return mix(
        mix(mix(fract(sin(n) * 43758.5453), fract(sin(n + 1.0) * 43758.5453), f.x),
            mix(fract(sin(n + 57.0) * 43758.5453), fract(sin(n + 58.0) * 43758.5453), f.x), f.y),
        mix(mix(fract(sin(n + 113.0) * 43758.5453), fract(sin(n + 114.0) * 43758.5453), f.x),
            mix(fract(sin(n + 170.0) * 43758.5453), fract(sin(n + 171.0) * 43758.5453), f.x), f.y), f.z);
    }
    
    // Patrón de fragmentación metálica
    float fragmentation(vec3 p) {
      float scale = fragmentationIntensity * 10.0;
      vec3 cell = floor(p * scale);
      float random = fract(sin(dot(cell, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
      return random;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(lightDirection);
      vec3 viewDir = normalize(vViewPosition);
      
      // Calcular iluminación
      float dotNL = dot(normal, lightDir);
      float visibility = smoothstep(-0.2, 0.2, dotNL);
      
      // Textura metálica con fragmentación
      float frag = fragmentation(pos);
      float metalPattern = noise(pos * 20.0 + vec3(time * 0.01));
      metalPattern = mix(metalPattern, frag, fragmentationIntensity);
      
      // Reflexión metálica (aproximación)
      vec3 reflectDir = reflect(-lightDir, normal);
      float spec = pow(max(dot(viewDir, reflectDir), 0.0), 16.0 / roughness) * metalness;
      
      // Efecto Fresnel para bordes brillantes
      float fresnel = pow(1.0 - dot(viewDir, normal), 2.0) * metalness;
      
      // Color final con aspecto metálico
      vec3 color = metalColor;
      color *= (0.5 + 0.5 * metalPattern); // Variación de superficie
      color += vec3(spec * 0.5); // Añadir especular
      color += vec3(fresnel * 0.3); // Añadir fresnel
      
      // Solo mostrar en la parte iluminada
      float alpha = (0.6 + 0.4 * metalPattern) * visibility * opacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  constructor(layerSystem: PlanetLayerSystem, params: MetallicSurfaceLayerParams = {}) {
    this.layerSystem = layerSystem;
    
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    const baseColor = params.color instanceof THREE.Color ? 
      params.color : (params.color ? new THREE.Color(params.color as any) : new THREE.Color(0x808080));
    
    this.params = {
      color: baseColor,
      metalness: params.metalness || rng.uniform(PROCEDURAL_RANGES.METALNESS.min, PROCEDURAL_RANGES.METALNESS.max),
      roughness: params.roughness || rng.uniform(PROCEDURAL_RANGES.ROUGHNESS.min, PROCEDURAL_RANGES.ROUGHNESS.max),
      fragmentationIntensity: params.fragmentationIntensity || rng.uniform(PROCEDURAL_RANGES.FRAGMENTATION_INTENSITY.min, PROCEDURAL_RANGES.FRAGMENTATION_INTENSITY.max),
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      seed
    };

    // Crear material
    this.material = new THREE.ShaderMaterial({
      vertexShader: MetallicSurfaceLayer.vertexShader,
      fragmentShader: MetallicSurfaceLayer.fragmentShader,
      uniforms: {
        time: { value: 0 },
        metalColor: { value: baseColor },
        metalness: { value: this.params.metalness },
        roughness: { value: this.params.roughness },
        fragmentationIntensity: { value: this.params.fragmentationIntensity },
        opacity: { value: this.params.opacity },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() }
      },
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false
    });
    
    // Añadir capa al sistema
    this.layerMesh = this.layerSystem.addEffectLayer(
      'metallicSurface', 
      this.material, 
      this.layerSystem.getNextScaleFactor()
    );
  }

  update(deltaTime: number): void {
    if (this.material.uniforms.time) {
      this.material.uniforms.time.value += deltaTime;
    }
  }

  dispose(): void {
    // La limpieza se maneja en PlanetLayerSystem
  }
}

export function createMetallicSurfaceLayerFromPythonData(
  layerSystem: PlanetLayerSystem,
  data: any,
  globalSeed?: number
): MetallicSurfaceLayer {
  const surface = data.surface || {};
  const baseColor = data.planet_info?.base_color || surface.base_color;
  
  // Generar valores proceduralmente basados en seed
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 7000); // +7000 para MetallicSurfaceLayer
  
  return new MetallicSurfaceLayer(layerSystem, {
    color: baseColor ? new THREE.Color(baseColor) : new THREE.Color(0x808080),
    metalness: surface.metalness || rng.uniform(PROCEDURAL_RANGES.METALNESS.min, PROCEDURAL_RANGES.METALNESS.max),
    roughness: surface.roughness || rng.uniform(PROCEDURAL_RANGES.ROUGHNESS.min, PROCEDURAL_RANGES.ROUGHNESS.max),
    fragmentationIntensity: surface.fragmentation || rng.uniform(PROCEDURAL_RANGES.FRAGMENTATION_INTENSITY.min, PROCEDURAL_RANGES.FRAGMENTATION_INTENSITY.max),
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    seed
  });
}