/**
 * Diamond Cracks Effect - Efecto de grietas internas del diamante
 *
 * Crea grietas internas procedurales que simulan inclusiones, fracturas y defectos
 * característicos de diamantes reales con patrones cristalinos.
 * Se aplica como una capa transparente sobre la superficie del diamante.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface DiamondCracksParams {
  crackDensity?: number;
  crackDepth?: number;
  crackComplexity?: number;
  crackScale?: number;
  crackSharpness?: number;
  crackColor?: THREE.Color | number;
  crackOpacity?: number;
  internalReflections?: number;
  animationSpeed?: number;
  seed?: number;
  radius?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  CRACK_DENSITY: { min: 0.3, max: 0.6 }, // Densidad moderada
  CRACK_DEPTH: { min: 0.5, max: 0.9 }, // Profundidad visible
  CRACK_COMPLEXITY: { min: 3, max: 5 }, // Complejidad media-alta
  CRACK_SCALE: { min: 3.0, max: 8.0 }, // Escala visible
  CRACK_SHARPNESS: { min: 0.7, max: 1.0 }, // Bordes definidos
  CRACK_OPACITY: { min: 0.6, max: 0.9 }, // Alta opacidad
  INTERNAL_REFLECTIONS: { min: 0.5, max: 0.9 }, // Reflexiones visibles
  ANIMATION_SPEED: { min: 0.05, max: 0.15 }, // Animación sutil
};

export class DiamondCracksEffect {
  private crackMesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: DiamondCracksParams;

  constructor(params: DiamondCracksParams = {}) {
    // Generar valores completamente procedurales con seed aleatorio
    const seed = Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);

    // Color aleatorio para las grietas
    const hue = rng.uniform(0, 360);
    const saturation = rng.uniform(0.3, 0.8);
    const lightness = rng.uniform(0.7, 1.0);
    const crackColor = new THREE.Color().setHSL(hue / 360, saturation, lightness);

    this.params = {
      crackDensity: rng.uniform(PROCEDURAL_RANGES.CRACK_DENSITY.min, PROCEDURAL_RANGES.CRACK_DENSITY.max),
      crackDepth: rng.uniform(PROCEDURAL_RANGES.CRACK_DEPTH.min, PROCEDURAL_RANGES.CRACK_DEPTH.max),
      crackComplexity: Math.floor(rng.uniform(PROCEDURAL_RANGES.CRACK_COMPLEXITY.min, PROCEDURAL_RANGES.CRACK_COMPLEXITY.max)),
      crackScale: rng.uniform(PROCEDURAL_RANGES.CRACK_SCALE.min, PROCEDURAL_RANGES.CRACK_SCALE.max),
      crackSharpness: rng.uniform(PROCEDURAL_RANGES.CRACK_SHARPNESS.min, PROCEDURAL_RANGES.CRACK_SHARPNESS.max),
      crackColor,
      crackOpacity: rng.uniform(PROCEDURAL_RANGES.CRACK_OPACITY.min, PROCEDURAL_RANGES.CRACK_OPACITY.max),
      internalReflections: rng.uniform(PROCEDURAL_RANGES.INTERNAL_REFLECTIONS.min, PROCEDURAL_RANGES.INTERNAL_REFLECTIONS.max),
      animationSpeed: rng.uniform(PROCEDURAL_RANGES.ANIMATION_SPEED.min, PROCEDURAL_RANGES.ANIMATION_SPEED.max),
      seed,
      radius: params.radius || 2.5,
    };

    // Esfera que envuelve el diamante
    const geometry = new THREE.SphereGeometry(this.params.radius! * 1.02, 32, 32);
    
    // Shader SIMPLE con Voronoi 2D que SÍ SE VE
    this.material = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vUv = uv;
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        uniform float time;
        uniform vec3 crackColor;
        uniform float crackIntensity;
        uniform float crackGlow;
        
        // Random simple
        vec2 random2(vec2 st) {
          st = vec2(dot(st, vec2(127.1, 311.7)),
                    dot(st, vec2(269.5, 183.3)));
          return -1.0 + 2.0 * fract(sin(st) * 43758.5453123);
        }
        
        // Voronoi mejorado para evitar bordes de corte
        float voronoiCracks(vec2 st) {
          vec2 i_st = floor(st);
          vec2 f_st = fract(st);
          
          float min_dist = 10.0;
          float min_dist2 = 10.0;
          
          // Búsqueda extendida para evitar artefactos en bordes
          for(int y = -2; y <= 2; y++) {
            for(int x = -2; x <= 2; x++) {
              vec2 neighbor = vec2(float(x), float(y));
              vec2 point = random2(i_st + neighbor);
              point = 0.5 + 0.35 * point; // Reducir variación para más uniformidad
              vec2 diff = neighbor + point - f_st;
              float dist = length(diff);
              
              if(dist < min_dist) {
                min_dist2 = min_dist;
                min_dist = dist;
              } else if(dist < min_dist2) {
                min_dist2 = dist;
              }
            }
          }
          
          // Suavizado para evitar cortes abruptos
          float edge = min_dist2 - min_dist;
          return smoothstep(0.0, 0.1, edge);
        }
        
        void main() {
          vec2 st = vUv * 8.0; // Escala optimizada
          
          // Solo 2 capas para mejor rendimiento
          float edge1 = voronoiCracks(st);
          float edge2 = voronoiCracks(st * 1.5 + vec2(13.0, 7.0));
          
          // Combinar solo las 2 capas
          float lineWidth = 0.025;
          float crack1 = 1.0 - smoothstep(0.0, lineWidth, edge1);
          float crack2 = 1.0 - smoothstep(0.0, lineWidth * 0.8, edge2);
          
          // Combinar grietas con pesos balanceados
          float crack = max(crack1, crack2 * 0.6);
          
          // Descartar fragmentos débiles
          if(crack < 0.1) {
            discard;
          }
          
          // Variación de profundidad mejorada
          float depthVariation = abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
          crack *= 0.7 + 0.3 * depthVariation;
          
          // Pulsación más sutil
          float pulse = 1.0 + 0.05 * sin(time * 1.5 + st.x * 3.0);
          crack *= pulse;
          
          // Color con brillo optimizado
          vec3 baseColor = crackColor * crackIntensity;
          vec3 glowColor = baseColor * (1.0 + crackGlow * crack * 0.5);
          
          // Transparencia ajustada
          float alpha = crack * 0.4;
          
          gl_FragColor = vec4(glowColor, alpha);
        }
      `,
      uniforms: {
        time: { value: 0.0 },
        crackColor: { value: this.params.crackColor },
        crackIntensity: { value: this.params.crackOpacity! * 2.0 },
        crackGlow: { value: this.params.internalReflections! * 3.0 }
      },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending // Modo de mezcla aditivo tipo Photoshop
    });
    
    this.crackMesh = new THREE.Mesh(geometry, this.material);
  }

  addToScene(scene: THREE.Scene, planetPosition: THREE.Vector3): void {
    this.crackMesh.position.copy(planetPosition);
    this.crackMesh.visible = true;
    scene.add(this.crackMesh);
    console.log('DiamondCracks: Added simple sphere mesh to scene');
  }

  removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.crackMesh);
  }

  update(deltaTime: number): void {
    if (this.material.uniforms.time) {
      this.material.uniforms.time.value += deltaTime * this.params.animationSpeed!;
    }
  }

  updateFromThreeLight(_light: THREE.DirectionalLight): void {
    // No necesario para este efecto simple
  }

  getObject3D(): THREE.Mesh {
    return this.crackMesh;
  }

  dispose(): void {
    if (this.crackMesh) {
      this.crackMesh.geometry.dispose();
      this.material.dispose();
    }
  }
}

/**
 * Función para crear grietas desde datos de Python
 */
export function createDiamondCracksFromPythonData(
  _data: any, 
  radius: number,
  _globalSeed?: number
): DiamondCracksEffect {
  return new DiamondCracksEffect({
    radius,
  });
}