/**
 * Star Field Effect - Sistema de estrellas de fondo procedurales
 *
 * Genera un campo de estrellas de fondo basado en la planet seed para crear
 * escenas únicas y consistentes para cada planeta. Las estrellas se distribuyen
 * esféricamente alrededor del planeta a gran distancia.
 *
 * Responsabilidades:
 * - StarField.tsx -> Campo de estrellas de fondo (ESTE ARCHIVO)
 * - Generar estrellas consistentes usando planet seed
 * - Crear variaciones de brillo y tamaño
 * - Mantener distancia adecuada para efecto de fondo
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface StarFieldParams {
  color?: THREE.Color | number;
  starCount?: number;
  minBrightness?: number;
  maxBrightness?: number;
  minSize?: number;
  maxSize?: number;
  distance?: number; // Distancia del planeta
  seed?: number;
  twinkleSpeed?: number; // Velocidad del parpadeo
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  STAR_COUNT: { min: 150, max: 450 }, // Cantidad perfecta
  MIN_BRIGHTNESS: { min: 0.4, max: 0.7 }, // Brillo bueno
  MAX_BRIGHTNESS: { min: 0.8, max: 1.0 }, // Máximo brillo
  MIN_SIZE: { min: 1.2, max: 1.8 }, // Tamaño más grande
  MAX_SIZE: { min: 3.5, max: 5.0 }, // Tamaño más grande
  DISTANCE: { min: 300, max: 600 }, // Distancia buena
  TWINKLE_SPEED: { min: 0.002, max: 0.008 }, // Parpadeo visible
};

/**
 * Efecto de Campo de Estrellas
 *
 * Crea un fondo estrellado único y consistente para cada planeta
 */
export class StarFieldEffect {
  private starSystem: THREE.Points;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private params: StarFieldParams;
  private starCount: number;

  private static readonly vertexShader = `
    attribute float size;
    attribute float brightness;
    attribute float twinklePhase;
    
    uniform float time;
    uniform float twinkleSpeed;
    
    varying float vBrightness;
    varying float vTwinkle;
    
    void main() {
      vBrightness = brightness;
      
      // Parpadeo sutil de las estrellas
      vTwinkle = 0.8 + 0.2 * sin(time * twinkleSpeed + twinklePhase);
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Tamaño basado en atributo y distancia - PUNTO MEDIO
      gl_PointSize = size * (300.0 / -mvPosition.z);
    }
  `;

  private static readonly fragmentShader = `
    uniform vec3 starColor;
    
    varying float vBrightness;
    varying float vTwinkle;
    
    void main() {
      // Crear forma circular de estrella
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      // Gradiente circular para efecto de estrella - EQUILIBRADO
      float alpha = (1.0 - dist * 2.0) * vBrightness * vTwinkle;
      alpha = pow(alpha, 1.5); // Balance entre concentración y visibilidad
      alpha *= 1.3; // Intensidad moderada
      
      // Color de estrella con brillo variable - EQUILIBRADO
      vec3 finalColor = starColor * (0.9 + 0.2 * vTwinkle);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  constructor(planetRadius: number, params: StarFieldParams = {}) {
    // Generar valores procedurales usando seed
    const seed = params.seed !== undefined ? params.seed : Math.floor(Math.random() * 1000000);
    console.log("🌟 StarFieldEffect - Using seed:", seed, "from params:", params.seed);
    const rng = new SeededRandom(seed + 10000); // Offset para evitar colisiones

    this.params = {
      color: params.color || new THREE.Color(0xffffff),
      starCount: params.starCount !== undefined ? params.starCount : Math.floor(rng.uniform(PROCEDURAL_RANGES.STAR_COUNT.min, PROCEDURAL_RANGES.STAR_COUNT.max)),
      minBrightness: params.minBrightness !== undefined ? params.minBrightness : rng.uniform(PROCEDURAL_RANGES.MIN_BRIGHTNESS.min, PROCEDURAL_RANGES.MIN_BRIGHTNESS.max),
      maxBrightness: params.maxBrightness !== undefined ? params.maxBrightness : rng.uniform(PROCEDURAL_RANGES.MAX_BRIGHTNESS.min, PROCEDURAL_RANGES.MAX_BRIGHTNESS.max),
      minSize: params.minSize !== undefined ? params.minSize : rng.uniform(PROCEDURAL_RANGES.MIN_SIZE.min, PROCEDURAL_RANGES.MIN_SIZE.max),
      maxSize: params.maxSize !== undefined ? params.maxSize : rng.uniform(PROCEDURAL_RANGES.MAX_SIZE.min, PROCEDURAL_RANGES.MAX_SIZE.max),
      distance: params.distance !== undefined ? params.distance : rng.uniform(PROCEDURAL_RANGES.DISTANCE.min, PROCEDURAL_RANGES.DISTANCE.max),
      seed: seed,
      twinkleSpeed: params.twinkleSpeed !== undefined ? params.twinkleSpeed : rng.uniform(PROCEDURAL_RANGES.TWINKLE_SPEED.min, PROCEDURAL_RANGES.TWINKLE_SPEED.max),
    };

    this.starCount = this.params.starCount!;
    this.geometry = new THREE.BufferGeometry();
    this.material = this.createMaterial();

    this.generateStars(planetRadius);
    this.starSystem = new THREE.Points(this.geometry, this.material);
  }

  private generateStars(planetRadius: number): void {
    const positions = new Float32Array(this.starCount * 3);
    const sizes = new Float32Array(this.starCount);
    const brightnesses = new Float32Array(this.starCount);
    const twinklePhases = new Float32Array(this.starCount);

    const seed = this.params.seed!;
    const rng = new SeededRandom(seed + 10000);

    for (let i = 0; i < this.starCount; i++) {
      // Distribución esférica uniforme para las estrellas
      const phi = rng.uniform(0, 2 * Math.PI);
      const cosTheta = rng.uniform(-1, 1);
      const theta = Math.acos(cosTheta);

      // Distancia variable para profundidad
      const distance = this.params.distance! * rng.uniform(0.8, 1.2);

      // Posición esférica
      const x = distance * Math.sin(theta) * Math.cos(phi);
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Atributos únicos para cada estrella
      sizes[i] = rng.uniform(this.params.minSize!, this.params.maxSize!);
      brightnesses[i] = rng.uniform(this.params.minBrightness!, this.params.maxBrightness!);
      twinklePhases[i] = rng.uniform(0, Math.PI * 2); // Fase de parpadeo única
    }

    // Configurar geometría
    this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute("brightness", new THREE.BufferAttribute(brightnesses, 1));
    this.geometry.setAttribute("twinklePhase", new THREE.BufferAttribute(twinklePhases, 1));
  }

  private createMaterial(): THREE.ShaderMaterial {
    const starColor = this.params.color instanceof THREE.Color ? this.params.color : new THREE.Color(this.params.color as any);

    return new THREE.ShaderMaterial({
      vertexShader: StarFieldEffect.vertexShader,
      fragmentShader: StarFieldEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        starColor: { value: starColor },
        twinkleSpeed: { value: this.params.twinkleSpeed },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: false,
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.starSystem.position.copy(planetPosition);
    }
    scene.add(this.starSystem);
  }

  update(deltaTime: number): void {
    // Actualizar tiempo para el parpadeo
    this.material.uniforms.time.value += deltaTime;
  }

  updateParams(newParams: Partial<StarFieldParams>): void {
    this.params = { ...this.params, ...newParams };

    // Actualizar uniforms del material
    if (newParams.color !== undefined) {
      const newColor = newParams.color instanceof THREE.Color ? newParams.color : new THREE.Color(newParams.color);
      this.material.uniforms.starColor.value = newColor;
    }

    if (newParams.twinkleSpeed !== undefined) {
      this.material.uniforms.twinkleSpeed.value = newParams.twinkleSpeed;
    }
  }

  getObject3D(): THREE.Points {
    return this.starSystem;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}

/**
 * Función de utilidad para crear campo de estrellas desde datos de Python
 */
export function createStarFieldFromPythonData(planetRadius: number, planetSeed?: number): StarFieldEffect {
  // Usar planet seed para generar campo de estrellas consistente
  const seed = planetSeed !== undefined ? planetSeed : Math.floor(Math.random() * 1000000);
  console.log("🌟 createStarFieldFromPythonData - planetSeed:", planetSeed, "final seed:", seed);
  const rng = new SeededRandom(seed + 10000);

  const params: StarFieldParams = {
    color: new THREE.Color(0xffffff), // Estrellas blancas por defecto
    starCount: Math.floor(rng.uniform(PROCEDURAL_RANGES.STAR_COUNT.min, PROCEDURAL_RANGES.STAR_COUNT.max)),
    minBrightness: rng.uniform(PROCEDURAL_RANGES.MIN_BRIGHTNESS.min, PROCEDURAL_RANGES.MIN_BRIGHTNESS.max),
    maxBrightness: rng.uniform(PROCEDURAL_RANGES.MAX_BRIGHTNESS.min, PROCEDURAL_RANGES.MAX_BRIGHTNESS.max),
    minSize: rng.uniform(PROCEDURAL_RANGES.MIN_SIZE.min, PROCEDURAL_RANGES.MIN_SIZE.max),
    maxSize: rng.uniform(PROCEDURAL_RANGES.MAX_SIZE.min, PROCEDURAL_RANGES.MAX_SIZE.max),
    distance: rng.uniform(PROCEDURAL_RANGES.DISTANCE.min, PROCEDURAL_RANGES.DISTANCE.max),
    seed,
    twinkleSpeed: rng.uniform(PROCEDURAL_RANGES.TWINKLE_SPEED.min, PROCEDURAL_RANGES.TWINKLE_SPEED.max),
  };

  return new StarFieldEffect(planetRadius, params);
}
