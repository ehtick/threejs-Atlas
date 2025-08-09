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
  noiseScale?: number;
  noiseIntensity?: number;
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
    uniform float noiseScale;
    uniform float noiseIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vViewPosition;
    
    // Ruido procedural para variaciones de superficie (del MetallicSurfaceEffect)
    float hash(vec3 p) {
      p = fract(p * vec3(443.8975, 397.2973, 491.1871));
      p += dot(p, p.yxz + 19.19);
      return fract((p.x + p.y) * p.z);
    }
    
    float noise3D(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float n = mix(
        mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
      
      return n;
    }
    
    // Función para crear grietas angulares (del MetallicSurfaceEffect)
    float angularCracks(vec2 uv, float scale, float sharpness) {
      vec2 id = floor(uv * scale);
      vec2 f = fract(uv * scale);
      
      float d = 1.0;
      for(float x = -1.0; x <= 1.0; x++) {
        for(float y = -1.0; y <= 1.0; y++) {
          vec2 neighbor = vec2(x, y);
          vec2 point = hash(vec3(id + neighbor, 0.0)) * vec2(1.0) + neighbor;
          float dist = length(f - point);
          d = min(d, dist);
        }
      }
      
      return pow(1.0 - d, sharpness);
    }
    
    // PBR básico (del MetallicSurfaceEffect)
    vec3 calculatePBR(vec3 albedo, float metallic, float rough, vec3 normal, vec3 viewDir) {
      vec3 lightDir = normalize(lightDirection);
      vec3 halfwayDir = normalize(lightDir + viewDir);
      
      // Difuso
      float NdotL = max(dot(normal, lightDir), 0.0);
      vec3 diffuse = albedo * (1.0 - metallic) * NdotL;
      
      // Especular simplificado
      float NdotH = max(dot(normal, halfwayDir), 0.0);
      float specularStrength = pow(NdotH, mix(4.0, 128.0, 1.0 - rough));
      vec3 specular = mix(vec3(0.04), albedo, metallic) * specularStrength;
      
      // Fresnel para bordes metálicos
      float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
      vec3 fresnelColor = mix(vec3(0.04), albedo, metallic) * fresnel;
      
      return diffuse + specular + fresnelColor * 0.5;
    }
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      vec3 lightDir = normalize(lightDirection);
      
      // Calcular iluminación base para visibilidad
      float dotNL = dot(normal, lightDir);
      float visibility = smoothstep(-0.2, 0.2, dotNL);
      
      // Base metálica con variaciones (del MetallicSurfaceEffect)
      vec3 color = metalColor;
      
      // Añadir ruido para variaciones sutiles
      float surfaceNoise = noise3D(vPosition * noiseScale);
      color = mix(color, color * 0.7, surfaceNoise * noiseIntensity);
      
      // Fragmentación angular en los bordes
      float edgeFactor = 1.0 - abs(dot(normal, viewDir));
      float fragmentation = angularCracks(vUv, 5.0 + fragmentationIntensity * 10.0, 2.0);
      
      // Aplicar fragmentación más fuerte en los bordes
      if(edgeFactor > 0.7) {
        color = mix(color, color * 0.3, fragmentation * edgeFactor);
        
        // Añadir grietas más pronunciadas
        float cracks = angularCracks(vUv * 2.0, 8.0, 4.0);
        color = mix(color, color * 0.2, cracks * edgeFactor * 0.5);
      }
      
      // Ondas circulares sutiles en el interior
      float radialWaves = sin(length(vUv - 0.5) * 20.0 + time * 0.5) * 0.5 + 0.5;
      color = mix(color, color * 1.1, radialWaves * 0.1 * (1.0 - edgeFactor));
      
      // Calcular iluminación PBR completa
      vec3 finalColor = calculatePBR(color, metalness, roughness, normal, viewDir);
      
      // Añadir un toque de color oscuro para profundidad
      finalColor = mix(finalColor, finalColor * 0.5, pow(surfaceNoise, 2.0) * 0.3);
      
      // Solo mostrar en la parte iluminada con transición suave
      float alpha = visibility * opacity;
      
      gl_FragColor = vec4(finalColor, alpha);
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
      seed,
      noiseScale: params.noiseScale || 8.0,
      noiseIntensity: params.noiseIntensity || 0.3
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
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        noiseScale: { value: this.params.noiseScale },
        noiseIntensity: { value: this.params.noiseIntensity }
      },
      transparent: true,
      side: THREE.FrontSide,
      blending: THREE.NormalBlending, // Usar blending normal para respetar sombras
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
    seed,
    noiseScale: 8.0,
    noiseIntensity: 0.3
  });
}