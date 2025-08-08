/**
 * Icy Terrain Layer - Versión que funciona como capa
 * 
 * Crea terreno helado con reflejos como capa transparente
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';
import { SeededRandom } from '../Utils/SeededRandom';

export interface IcyTerrainLayerParams {
  color?: THREE.Color | number[];
  iceReflectivity?: number;
  frostDensity?: number;
  crackIntensity?: number;
  opacity?: number;
  seed?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  ICE_REFLECTIVITY: { min: 0.7, max: 0.95 },
  FROST_DENSITY: { min: 0.3, max: 0.8 },
  CRACK_INTENSITY: { min: 0.2, max: 0.7 },
  OPACITY: { min: 0.6, max: 0.9 }
};

export class IcyTerrainLayer {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: IcyTerrainLayerParams;
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
    uniform vec3 iceColor;
    uniform float iceReflectivity;
    uniform float frostDensity;
    uniform float crackIntensity;
    uniform float opacity;
    uniform vec3 lightDirection;
    uniform float time;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vViewPosition;
    
    // Función de ruido para las grietas de hielo
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    // Patrón de grietas Voronoi
    float voronoi(vec2 p) {
      vec2 n = floor(p);
      vec2 f = fract(p);
      
      float minDist = 1.0;
      
      for(int i = -1; i <= 1; i++) {
        for(int j = -1; j <= 1; j++) {
          vec2 neighbor = vec2(float(i), float(j));
          vec2 point = neighbor + noise(n + neighbor) - f;
          float dist = length(point);
          minDist = min(minDist, dist);
        }
      }
      
      return minDist;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(lightDirection);
      vec3 viewDir = normalize(vViewPosition);
      
      // Calcular iluminación
      float dotNL = dot(normal, lightDir);
      float visibility = smoothstep(-0.2, 0.2, dotNL);
      
      // Textura de hielo con grietas
      float cracks = voronoi(vUv * crackIntensity * 10.0);
      cracks = pow(cracks, 2.0);
      
      // Escarcha
      float frost = noise(vUv * frostDensity * 50.0);
      frost = smoothstep(0.3, 0.7, frost);
      
      // Reflejo especular para simular hielo brillante
      vec3 reflectDir = reflect(-lightDir, normal);
      float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0) * iceReflectivity;
      
      // Color final
      vec3 color = iceColor;
      color = mix(color, vec3(1.0), frost * 0.3); // Añadir escarcha blanca
      color = mix(color * 0.7, color, cracks); // Oscurecer las grietas
      color += vec3(spec); // Añadir brillo especular
      
      // Solo mostrar en la parte iluminada
      float alpha = (0.5 + 0.5 * cracks) * visibility * opacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  constructor(layerSystem: PlanetLayerSystem, params: IcyTerrainLayerParams = {}) {
    this.layerSystem = layerSystem;
    
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    const baseColor = params.color instanceof THREE.Color ? 
      params.color : (params.color ? new THREE.Color(params.color as any) : new THREE.Color(0xB0E0E6));
    
    this.params = {
      color: baseColor,
      iceReflectivity: params.iceReflectivity || rng.uniform(PROCEDURAL_RANGES.ICE_REFLECTIVITY.min, PROCEDURAL_RANGES.ICE_REFLECTIVITY.max),
      frostDensity: params.frostDensity || rng.uniform(PROCEDURAL_RANGES.FROST_DENSITY.min, PROCEDURAL_RANGES.FROST_DENSITY.max),
      crackIntensity: params.crackIntensity || rng.uniform(PROCEDURAL_RANGES.CRACK_INTENSITY.min, PROCEDURAL_RANGES.CRACK_INTENSITY.max),
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      seed
    };

    // Crear material
    this.material = new THREE.ShaderMaterial({
      vertexShader: IcyTerrainLayer.vertexShader,
      fragmentShader: IcyTerrainLayer.fragmentShader,
      uniforms: {
        time: { value: 0 },
        iceColor: { value: baseColor },
        iceReflectivity: { value: this.params.iceReflectivity },
        frostDensity: { value: this.params.frostDensity },
        crackIntensity: { value: this.params.crackIntensity },
        opacity: { value: this.params.opacity },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() }
      },
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false
    });
    
    // Añadir capa al sistema
    this.layerMesh = this.layerSystem.addEffectLayer(
      'icyTerrain', 
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

export function createIcyTerrainLayerFromPythonData(
  layerSystem: PlanetLayerSystem,
  data: any,
  globalSeed?: number
): IcyTerrainLayer {
  const surface = data.surface || {};
  const baseColor = data.planet_info?.base_color || surface.base_color;
  
  // Generar valores proceduralmente basados en seed
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 6000); // +6000 para IcyTerrainLayer
  
  return new IcyTerrainLayer(layerSystem, {
    color: baseColor ? new THREE.Color(baseColor) : new THREE.Color(0xB0E0E6),
    iceReflectivity: surface.ice_reflectivity || rng.uniform(PROCEDURAL_RANGES.ICE_REFLECTIVITY.min, PROCEDURAL_RANGES.ICE_REFLECTIVITY.max),
    frostDensity: surface.frost_density || rng.uniform(PROCEDURAL_RANGES.FROST_DENSITY.min, PROCEDURAL_RANGES.FROST_DENSITY.max),
    crackIntensity: surface.crack_intensity || rng.uniform(PROCEDURAL_RANGES.CRACK_INTENSITY.min, PROCEDURAL_RANGES.CRACK_INTENSITY.max),
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    seed
  });
}