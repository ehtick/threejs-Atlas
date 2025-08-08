/**
 * Rocky Terrain Layer - Versión que funciona como capa
 * 
 * Crea terreno rocoso como capa transparente que respeta la iluminación base
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';
import { SeededRandom } from '../Utils/SeededRandom';

export interface RockyTerrainLayerParams {
  color?: THREE.Color | number[];
  roughness?: number;
  rockDensity?: number;
  craterCount?: number;
  opacity?: number;
  seed?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  ROUGHNESS: { min: 0.6, max: 0.9 },
  ROCK_DENSITY: { min: 0.4, max: 0.8 },
  CRATER_COUNT: { min: 0.2, max: 0.6 },
  OPACITY: { min: 0.7, max: 0.95 }
};

export class RockyTerrainLayer {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: RockyTerrainLayerParams;
  private layerSystem: PlanetLayerSystem;

  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    uniform float time;
    
    // Función de ruido para deformar la superficie
    float noise(vec3 p) {
      return sin(p.x * 4.0) * sin(p.y * 4.0) * sin(p.z * 4.0);
    }
    
    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;
      
      // Deformación sutil de la superficie para crear relieve rocoso
      vec3 deformed = position;
      float noiseValue = noise(position * 3.0 + time * 0.01);
      deformed += normal * noiseValue * 0.02;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
    }
  `;

  private static readonly fragmentShader = `
    uniform vec3 rockColor;
    uniform float roughness;
    uniform float rockDensity;
    uniform float opacity;
    uniform vec3 lightDirection;
    uniform float time;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    // Función de ruido
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
    
    // FBM para más detalle
    float fbm(vec3 p) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for(int i = 0; i < 4; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(lightDirection);
      
      // Textura rocosa
      float rockTexture = fbm(pos * rockDensity);
      rockTexture = pow(rockTexture, roughness);
      
      // Calcular iluminación
      float dotNL = dot(normal, lightDir);
      float visibility = smoothstep(-0.2, 0.2, dotNL);
      
      // Color final con variación rocosa
      vec3 color = rockColor * (0.7 + 0.3 * rockTexture);
      
      // Solo mostrar en la parte iluminada
      float alpha = rockTexture * visibility * opacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  constructor(layerSystem: PlanetLayerSystem, params: RockyTerrainLayerParams = {}) {
    this.layerSystem = layerSystem;
    
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    const baseColor = params.color instanceof THREE.Color ? 
      params.color : (params.color ? new THREE.Color(params.color as any) : new THREE.Color(0x8B4513));
    
    this.params = {
      color: baseColor,
      roughness: params.roughness || rng.uniform(PROCEDURAL_RANGES.ROUGHNESS.min, PROCEDURAL_RANGES.ROUGHNESS.max),
      rockDensity: params.rockDensity || rng.uniform(PROCEDURAL_RANGES.ROCK_DENSITY.min, PROCEDURAL_RANGES.ROCK_DENSITY.max) * 10, // Escalar para uso en shader
      craterCount: params.craterCount || rng.uniform(PROCEDURAL_RANGES.CRATER_COUNT.min, PROCEDURAL_RANGES.CRATER_COUNT.max),
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      seed
    };

    // Crear material
    this.material = new THREE.ShaderMaterial({
      vertexShader: RockyTerrainLayer.vertexShader,
      fragmentShader: RockyTerrainLayer.fragmentShader,
      uniforms: {
        time: { value: 0 },
        rockColor: { value: baseColor },
        roughness: { value: this.params.roughness },
        rockDensity: { value: this.params.rockDensity },
        opacity: { value: this.params.opacity },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() }
      },
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false
    });
    
    // Añadir capa al sistema
    this.layerMesh = this.layerSystem.addEffectLayer(
      'rockyTerrain', 
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

export function createRockyTerrainLayerFromPythonData(
  layerSystem: PlanetLayerSystem,
  data: any,
  globalSeed?: number
): RockyTerrainLayer {
  const surface = data.surface || {};
  const baseColor = data.planet_info?.base_color || surface.base_color;
  
  // Generar valores proceduralmente basados en seed
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 8000); // +8000 para RockyTerrainLayer
  
  return new RockyTerrainLayer(layerSystem, {
    color: baseColor ? new THREE.Color(baseColor) : new THREE.Color(0x8B4513),
    roughness: surface.roughness || rng.uniform(PROCEDURAL_RANGES.ROUGHNESS.min, PROCEDURAL_RANGES.ROUGHNESS.max),
    rockDensity: surface.rock_density || rng.uniform(PROCEDURAL_RANGES.ROCK_DENSITY.min, PROCEDURAL_RANGES.ROCK_DENSITY.max) * 10,
    craterCount: surface.crater_count || rng.uniform(PROCEDURAL_RANGES.CRATER_COUNT.min, PROCEDURAL_RANGES.CRATER_COUNT.max),
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    seed
  });
}