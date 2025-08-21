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
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);

    const crackColor = params.crackColor instanceof THREE.Color ? 
      params.crackColor : 
      params.crackColor ? 
        new THREE.Color(params.crackColor as any) : 
        new THREE.Color(0x333333);

    this.params = {
      crackDensity: params.crackDensity !== undefined ? params.crackDensity : rng.uniform(PROCEDURAL_RANGES.CRACK_DENSITY.min, PROCEDURAL_RANGES.CRACK_DENSITY.max),
      crackDepth: params.crackDepth !== undefined ? params.crackDepth : rng.uniform(PROCEDURAL_RANGES.CRACK_DEPTH.min, PROCEDURAL_RANGES.CRACK_DEPTH.max),
      crackComplexity: params.crackComplexity !== undefined ? params.crackComplexity : Math.floor(rng.uniform(PROCEDURAL_RANGES.CRACK_COMPLEXITY.min, PROCEDURAL_RANGES.CRACK_COMPLEXITY.max)),
      crackScale: params.crackScale !== undefined ? params.crackScale : rng.uniform(PROCEDURAL_RANGES.CRACK_SCALE.min, PROCEDURAL_RANGES.CRACK_SCALE.max),
      crackSharpness: params.crackSharpness !== undefined ? params.crackSharpness : rng.uniform(PROCEDURAL_RANGES.CRACK_SHARPNESS.min, PROCEDURAL_RANGES.CRACK_SHARPNESS.max),
      crackColor,
      crackOpacity: params.crackOpacity !== undefined ? params.crackOpacity : rng.uniform(PROCEDURAL_RANGES.CRACK_OPACITY.min, PROCEDURAL_RANGES.CRACK_OPACITY.max),
      internalReflections: params.internalReflections !== undefined ? params.internalReflections : rng.uniform(PROCEDURAL_RANGES.INTERNAL_REFLECTIONS.min, PROCEDURAL_RANGES.INTERNAL_REFLECTIONS.max),
      animationSpeed: params.animationSpeed !== undefined ? params.animationSpeed : rng.uniform(PROCEDURAL_RANGES.ANIMATION_SPEED.min, PROCEDURAL_RANGES.ANIMATION_SPEED.max),
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
        
        // Voronoi para grietas - devuelve distancia al borde más cercano
        float voronoiCracks(vec2 st) {
          vec2 i_st = floor(st);
          vec2 f_st = fract(st);
          
          float min_dist = 10.0;
          vec2 min_point;
          
          // Encontrar la celda más cercana
          for(int y = -1; y <= 1; y++) {
            for(int x = -1; x <= 1; x++) {
              vec2 neighbor = vec2(float(x), float(y));
              vec2 point = random2(i_st + neighbor);
              // Sin animación para que no se muevan
              point = 0.5 + 0.5 * point;
              vec2 diff = neighbor + point - f_st;
              float dist = length(diff);
              
              if(dist < min_dist) {
                min_dist = dist;
                min_point = point + neighbor;
              }
            }
          }
          
          // Ahora encontrar la segunda celda más cercana para crear el borde
          float min_dist2 = 10.0;
          for(int y = -1; y <= 1; y++) {
            for(int x = -1; x <= 1; x++) {
              vec2 neighbor = vec2(float(x), float(y));
              vec2 point = random2(i_st + neighbor);
              point = 0.5 + 0.5 * point;
              vec2 diff = neighbor + point - f_st;
              float dist = length(diff);
              
              if(dist > min_dist && dist < min_dist2) {
                min_dist2 = dist;
              }
            }
          }
          
          // El borde está donde las dos distancias son similares
          return min_dist2 - min_dist;
        }
        
        void main() {
          vec2 st = vUv * 10.0; // Escala del patrón
          
          // Crear múltiples capas de grietas para más complejidad
          float edge1 = voronoiCracks(st);
          float edge2 = voronoiCracks(st * 1.7 + vec2(13.0, 7.0));
          float edge3 = voronoiCracks(st * 2.3 + vec2(5.0, 23.0));
          
          // Combinar las capas
          float lineWidth = 0.02;
          float crack1 = 1.0 - smoothstep(0.0, lineWidth, edge1);
          float crack2 = 1.0 - smoothstep(0.0, lineWidth * 0.7, edge2);
          float crack3 = 1.0 - smoothstep(0.0, lineWidth * 0.5, edge3);
          
          // Combinar todas las grietas
          float crack = max(crack1, max(crack2 * 0.7, crack3 * 0.5));
          
          // Descartar todo excepto las líneas
          if(crack < 0.1) {
            discard;
          }
          
          // Añadir variación basada en la normal para simular profundidad
          float depthVariation = abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
          crack *= 0.6 + 0.4 * depthVariation;
          
          // Añadir pulsación sutil
          float pulse = 1.0 + 0.1 * sin(time * 2.0 + st.x * 5.0);
          crack *= pulse;
          
          // Color con efecto de brillo
          vec3 baseColor = crackColor * crackIntensity;
          vec3 glowColor = baseColor * (1.0 + crackGlow * crack);
          
          // Aplicar transparencia y efecto additive
          float alpha = crack * 0.3; // Muy transparente
          
          gl_FragColor = vec4(glowColor, alpha);
        }
      `,
      uniforms: {
        time: { value: 0.0 },
        crackColor: { value: new THREE.Color(0.8, 0.8, 1.0) }, // Color azulado claro
        crackIntensity: { value: 1.5 }, // Intensidad del color
        crackGlow: { value: 2.0 } // Cantidad de brillo
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
      this.material.uniforms.time.value += deltaTime * 0.5;
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
  globalSeed?: number
): DiamondCracksEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  
  return new DiamondCracksEffect({
    crackDensity: 0.6,
    crackDepth: 0.8,
    crackComplexity: 4,
    crackScale: 5.0,
    crackSharpness: 0.9,
    crackColor: new THREE.Color(0.8, 0.8, 1.0), // Color azulado claro para efecto aditivo
    crackOpacity: 0.8,
    internalReflections: 0.7,
    animationSpeed: 0.02,
    seed, // SEED variable de nuevo
    radius,
  });
}