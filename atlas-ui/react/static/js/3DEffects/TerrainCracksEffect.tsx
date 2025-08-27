/**
 * Terrain Cracks Effect - Efecto de grietas del terreno
 *
 * Crea grietas procedurales que simulan fracturas y defectos en la superficie.
 * Se puede aplicar a diferentes tipos de planetas (Diamond, Lava, etc.).
 * Se aplica como una capa transparente sobre la superficie del planeta.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface TerrainCracksParams {
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
  lineDrawPercentage?: number; // Porcentaje de líneas a dibujar (0.0 - 1.0)
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

export class TerrainCracksEffect {
  private crackMesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: TerrainCracksParams;

  constructor(params: TerrainCracksParams = {}) {
    // Usar seed proporcionada o una seed fija por defecto para determinismo
    const seed = params.seed !== undefined ? params.seed : 123456;

    // Usar una seed fija para parámetros visuales (colores, opacidades, etc.)
    const visualRng = new SeededRandom(123456);

    // Color determinista pero consistente
    const hue = visualRng.uniform(0, 360);
    const saturation = visualRng.uniform(0.3, 0.8);
    const lightness = visualRng.uniform(0.7, 1.0);
    const crackColor = new THREE.Color().setHSL(hue / 360, saturation, lightness);

    this.params = {
      crackDensity: visualRng.uniform(PROCEDURAL_RANGES.CRACK_DENSITY.min, PROCEDURAL_RANGES.CRACK_DENSITY.max),
      crackDepth: visualRng.uniform(PROCEDURAL_RANGES.CRACK_DEPTH.min, PROCEDURAL_RANGES.CRACK_DEPTH.max),
      crackComplexity: Math.floor(visualRng.uniform(PROCEDURAL_RANGES.CRACK_COMPLEXITY.min, PROCEDURAL_RANGES.CRACK_COMPLEXITY.max)),
      crackScale: visualRng.uniform(PROCEDURAL_RANGES.CRACK_SCALE.min, PROCEDURAL_RANGES.CRACK_SCALE.max),
      crackSharpness: visualRng.uniform(PROCEDURAL_RANGES.CRACK_SHARPNESS.min, PROCEDURAL_RANGES.CRACK_SHARPNESS.max),
      crackColor,
      crackOpacity: visualRng.uniform(PROCEDURAL_RANGES.CRACK_OPACITY.min, PROCEDURAL_RANGES.CRACK_OPACITY.max),
      internalReflections: visualRng.uniform(PROCEDURAL_RANGES.INTERNAL_REFLECTIONS.min, PROCEDURAL_RANGES.INTERNAL_REFLECTIONS.max),
      animationSpeed: visualRng.uniform(PROCEDURAL_RANGES.ANIMATION_SPEED.min, PROCEDURAL_RANGES.ANIMATION_SPEED.max),
      seed, // Esta es la seed única del planeta para el patrón de líneas
      radius: params.radius || 2.5,
      lineDrawPercentage: params.lineDrawPercentage !== undefined ? params.lineDrawPercentage : 0.66,
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
        uniform float planetSeed;
        uniform float lineDrawPercentage;
        
        // Random mejorado con seed única por planeta
        vec2 random2(vec2 st, float seed) {
          st = vec2(dot(st, vec2(127.1 + seed, 311.7 + seed * 0.5)),
                    dot(st, vec2(269.5 + seed * 0.3, 183.3 + seed * 0.7)));
          return -1.0 + 2.0 * fract(sin(st) * (43758.5453123 + seed));
        }
        
        // Función determinista para determinar si una línea debe dibujarse
        float shouldDrawLine(vec2 position, float planetSeed, float percentage) {
          // Usar posición de celda con la seed del planeta para determinismo
          vec2 cellPos = floor(position * 2.0);
          
          // Hash determinista que combina posición y seed del planeta
          float cellHash = dot(cellPos, vec2(127.1, 311.7));
          cellHash = fract(sin(cellHash + planetSeed * 0.001) * 43758.5453);
          
          // Añadir más variación usando la seed
          cellHash = fract(cellHash + planetSeed * 0.0001);
          
          return step(cellHash, percentage);
        }
        
        // Voronoi único por planeta usando seed
        float voronoiCracks(vec2 st, float planetSeed) {
          vec2 i_st = floor(st);
          vec2 f_st = fract(st);
          
          float min_dist = 10.0;
          float min_dist2 = 10.0;
          
          // Búsqueda extendida con seed única
          for(int y = -2; y <= 2; y++) {
            for(int x = -2; x <= 2; x++) {
              vec2 neighbor = vec2(float(x), float(y));
              vec2 point = random2(i_st + neighbor, planetSeed);
              point = 0.5 + 0.35 * point;
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
          
          float edge = min_dist2 - min_dist;
          return smoothstep(0.0, 0.1, edge);
        }
        
        void main() {
          // Escala variable basada en la seed del planeta
          vec2 st = vUv * (6.0 + mod(planetSeed, 4.0));
          
          // Verificar si esta posición debe tener líneas (determinista por planeta)
          float drawChance1 = shouldDrawLine(st, planetSeed, lineDrawPercentage);
          float drawChance2 = shouldDrawLine(st * 1.5, planetSeed + 1000.0, lineDrawPercentage);
          
          // Si ninguna capa debe dibujarse, descartar
          if(drawChance1 < 0.5 && drawChance2 < 0.5) {
            discard;
          }
          
          // Offsets únicos por planeta
          vec2 offset1 = vec2(mod(planetSeed, 17.0), mod(planetSeed * 1.3, 19.0));
          vec2 offset2 = vec2(mod(planetSeed * 2.1, 23.0), mod(planetSeed * 0.7, 29.0));
          
          // Solo 2 capas con patrones completamente diferentes
          float edge1 = voronoiCracks(st, planetSeed);
          float edge2 = voronoiCracks(st * (1.3 + mod(planetSeed * 0.1, 0.4)) + offset2, planetSeed + 1000.0);
          
          // Ancho de línea variable
          float lineWidth = 0.02 + mod(planetSeed * 0.001, 0.01);
          float crack1 = (1.0 - smoothstep(0.0, lineWidth, edge1)) * drawChance1;
          float crack2 = (1.0 - smoothstep(0.0, lineWidth * 0.8, edge2)) * drawChance2;
          
          // Combinar con pesos variables
          float weight = 0.5 + mod(planetSeed * 0.01, 0.3);
          float crack = max(crack1, crack2 * weight);
          
          if(crack < 0.1) {
            discard;
          }
          
          float depthVariation = abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
          crack *= 0.7 + 0.3 * depthVariation;
          
          // Pulsación única por planeta
          float pulseSpeed = 1.0 + mod(planetSeed * 0.001, 1.0);
          float pulse = 1.0 + 0.05 * sin(time * pulseSpeed + st.x * 3.0 + planetSeed);
          crack *= pulse;
          
          vec3 baseColor = crackColor * crackIntensity;
          vec3 glowColor = baseColor * (1.0 + crackGlow * crack * 0.5);
          
          float alpha = crack * 0.11;
          
          gl_FragColor = vec4(glowColor, alpha);
        }
      `,
      uniforms: {
        time: { value: 0.0 },
        crackColor: { value: this.params.crackColor || new THREE.Color(0x00ffff) },
        crackIntensity: { value: (this.params.crackOpacity || 0.7) * 2.0 },
        crackGlow: { value: (this.params.internalReflections || 0.7) * 3.0 },
        planetSeed: { value: this.params.seed || 123456 },
        lineDrawPercentage: { value: this.params.lineDrawPercentage || 0.66 },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, // Modo de mezcla aditivo tipo Photoshop
    });

    this.crackMesh = new THREE.Mesh(geometry, this.material);
  }

  addToScene(scene: THREE.Scene, planetPosition: THREE.Vector3): void {
    this.crackMesh.position.copy(planetPosition);
    this.crackMesh.visible = true;
    scene.add(this.crackMesh);
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
export function createTerrainCracksFromPythonData(_data: any, radius: number, globalSeed?: number): TerrainCracksEffect {
  // Usar seedOffset como otros efectos para evitar números enormes
  const seedOffset = 5000; // Offset único para TerrainCracks
  const seed = globalSeed ? (globalSeed + seedOffset) % 1000000 : Math.floor(Math.random() * 1000000);

  return new TerrainCracksEffect({
    radius,
    seed,
    lineDrawPercentage: 0.66,
  });
}
