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
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime";

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
  parallaxStrength?: number; // Intensidad del efecto parallax
  variableChance?: number; // Probabilidad de que una estrella sea variable (0-1)
  cosmicOriginTime?: number; // Tiempo origen cósmico para sincronización
  timeSpeed?: number; // Velocidad de animación temporal
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  STAR_COUNT: { min: 650, max: 1500 }, // Denso pero manejable
  MIN_BRIGHTNESS: { min: 0.6, max: 0.8 }, // Más brillantes
  MAX_BRIGHTNESS: { min: 0.9, max: 1.0 }, // Máximo brillo
  MIN_SIZE: { min: 1, max: 1.2 }, // Tamaño original
  MAX_SIZE: { min: 2.5, max: 4.0 }, // Tamaño original
  DISTANCE: { min: 250, max: 450 }, // Más cerca
  TWINKLE_SPEED: { min: 1.0, max: 2.0 }, // Velocidad base para animaciones
  PARALLAX_STRENGTH: { min: 1.0, max: 3.0 }, // Parallax visible pero suave
  VARIABLE_CHANCE: { min: 0.002, max: 0.005 }, // 0.2-0.5% variables (astronómicamente realista)
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
  private cameraPosition: THREE.Vector3 = new THREE.Vector3();
  private lastCameraPosition: THREE.Vector3 = new THREE.Vector3();
  private startTime: number;

  private static readonly vertexShader = `
    attribute float size;
    attribute float brightness;
    attribute float twinklePhase;
    attribute float starType; // 0=normal, 1=pulsar
    attribute float distanceLayer; // Para parallax
    attribute vec3 originalPosition; // Posición original para parallax
    
    uniform float time;
    uniform float twinkleSpeed;
    uniform vec3 cameraOffset; // Offset de cámara para parallax
    uniform float parallaxStrength;
    
    varying float vBrightness;
    varying float vTwinkle;
    varying float vStarType;
    
    void main() {
      vBrightness = brightness;
      vStarType = starType;
      
      // Sistema de parpadeo mejorado basado en tipo de estrella
      float baseTwinkle;
      if (starType > 0.5) {
        // Variables: pulso MUY visible y evidente
        float pulse = sin(time * twinkleSpeed * 1.0 + twinklePhase); // Velocidad normal
        baseTwinkle = 0.2 + 0.8 * (pulse * 0.5 + 0.5); // Variación dramática (20%-100%)
      } else {
        // Estrellas normales: MUY estables, apenas parpadean
        float intensity = 0.05 + 0.05 * brightness; // Parpadeo mínimo
        baseTwinkle = (1.0 - intensity) + intensity * sin(time * twinkleSpeed + twinklePhase);
      }
      vTwinkle = baseTwinkle;
      
      // Efecto parallax suave pero visible
      vec3 parallaxOffset = cameraOffset * parallaxStrength * (0.5 / distanceLayer);
      vec3 adjustedPosition = originalPosition + parallaxOffset;
      
      vec4 mvPosition = modelViewMatrix * vec4(adjustedPosition, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Tamaño con variación por tipo
      float sizeMultiplier = starType > 0.5 ? 1.2 : 1.0; // Pulsares ligeramente más grandes
      gl_PointSize = size * sizeMultiplier * (300.0 / -mvPosition.z);
    }
  `;

  private static readonly fragmentShader = `
    uniform vec3 starColor;
    
    varying float vBrightness;
    varying float vTwinkle;
    varying float vStarType;
    
    void main() {
      // Crear forma circular de estrella
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      // Gradiente circular con variación por tipo de estrella
      float alpha = (1.0 - dist * 2.0) * vBrightness * vTwinkle;
      
      // Ajustar intensidad según tipo
      if (vStarType > 0.5) {
        // Variables: cambio notable de brillo para que se vean
        alpha = pow(alpha, 1.0);
        alpha *= 1.5 + 1.5 * vTwinkle; // Va de 1.5x a 3.0x brillo (visible)
      } else {
        // Estrellas normales
        alpha = pow(alpha, 1.5);
        alpha *= 1.5;
      }
      
      // Color realista por tipo de estrella
      vec3 finalColor;
      if (vStarType > 0.5) {
        // Variables: tinte rojizo como gigantes rojas variables (Betelgeuse, Mira)
        vec3 variableTint = vec3(1.0, 0.6, 0.4);
        finalColor = starColor * variableTint * (0.8 + 0.4 * vTwinkle); // Color rojizo estable
      } else {
        // Estrellas normales: amarillentas estables
        vec3 normalTint = vec3(1.0, 0.9, 0.7);
        finalColor = starColor * normalTint * (0.8 + 0.4 * vTwinkle);
      }
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  constructor(planetRadius: number, params: StarFieldParams = {}) {
    // Generar valores procedurales usando seed
    const seed = params.seed !== undefined ? params.seed : Math.floor(Math.random() * 1000000);
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
      parallaxStrength: params.parallaxStrength !== undefined ? params.parallaxStrength : rng.uniform(PROCEDURAL_RANGES.PARALLAX_STRENGTH.min, PROCEDURAL_RANGES.PARALLAX_STRENGTH.max),
      variableChance: params.variableChance !== undefined ? params.variableChance : rng.uniform(PROCEDURAL_RANGES.VARIABLE_CHANCE.min, PROCEDURAL_RANGES.VARIABLE_CHANCE.max),
      cosmicOriginTime: params.cosmicOriginTime,
      timeSpeed: params.timeSpeed !== undefined ? params.timeSpeed : 1.0,
    };

    // Inicializar tiempo de inicio para sincronización cósmica
    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    this.startTime = Date.now() / 1000 - cosmicOriginTime;

    this.starCount = this.params.starCount!;
    this.geometry = new THREE.BufferGeometry();
    this.material = this.createMaterial();

    this.generateStars(planetRadius);
    this.starSystem = new THREE.Points(this.geometry, this.material);
  }

  private generateStars(_planetRadius: number): void {
    const positions = new Float32Array(this.starCount * 3);
    const originalPositions = new Float32Array(this.starCount * 3);
    const sizes = new Float32Array(this.starCount);
    const brightnesses = new Float32Array(this.starCount);
    const twinklePhases = new Float32Array(this.starCount);
    const starTypes = new Float32Array(this.starCount);
    const distanceLayers = new Float32Array(this.starCount);

    const seed = this.params.seed!;
    const rng = new SeededRandom(seed + 10000);

    for (let i = 0; i < this.starCount; i++) {
      // Distribución esférica uniforme para las estrellas
      const phi = rng.uniform(0, 2 * Math.PI);
      const cosTheta = rng.uniform(-1, 1);
      const theta = Math.acos(cosTheta);

      // Distancia variable para profundidad y capas de parallax
      const baseDistance = this.params.distance!;
      const distanceVariation = rng.uniform(0.7, 1.3);
      const distance = baseDistance * distanceVariation;

      // Posición esférica
      const x = distance * Math.sin(theta) * Math.cos(phi);
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Posición original para parallax
      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Determinar tipo de estrella (normal o variable)
      const isVariable = rng.uniform(0, 1) < this.params.variableChance!;
      starTypes[i] = isVariable ? 1.0 : 0.0;

      // Capas de distancia para parallax (estrellas más lejanas se mueven menos)
      distanceLayers[i] = distanceVariation;

      // Atributos únicos para cada estrella
      sizes[i] = rng.uniform(this.params.minSize!, this.params.maxSize!);
      brightnesses[i] = rng.uniform(this.params.minBrightness!, this.params.maxBrightness!);
      twinklePhases[i] = rng.uniform(0, Math.PI * 2);

      // Variables: ligeramente más brillantes (gigantes)
      if (isVariable) {
        brightnesses[i] = Math.min(1.0, brightnesses[i] + 0.2); // Más brillantes
        twinklePhases[i] = rng.uniform(0, Math.PI * 2); // Fases normales
      }
    }

    // Configurar geometría
    this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute("originalPosition", new THREE.BufferAttribute(originalPositions, 3));
    this.geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute("brightness", new THREE.BufferAttribute(brightnesses, 1));
    this.geometry.setAttribute("twinklePhase", new THREE.BufferAttribute(twinklePhases, 1));
    this.geometry.setAttribute("starType", new THREE.BufferAttribute(starTypes, 1));
    this.geometry.setAttribute("distanceLayer", new THREE.BufferAttribute(distanceLayers, 1));
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
        cameraOffset: { value: new THREE.Vector3(0, 0, 0) },
        parallaxStrength: { value: this.params.parallaxStrength },
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

  update(_deltaTime: number, _planetRotation?: number, camera?: THREE.Camera): void {
    // Calcular tiempo absoluto determinista usando el sistema cósmico
    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.params.timeSpeed!, this.startTime);
    
    // Actualizar tiempo absoluto para el parpadeo (reemplaza el deltaTime acumulativo)
    this.material.uniforms.time.value = currentTime;

    // Sistema de parallax basado en movimiento de cámara
    if (camera) {
      this.cameraPosition.copy(camera.position);
      
      // Calcular offset de cámara para parallax - suave pero visible
      const cameraOffset = new THREE.Vector3()
        .subVectors(this.cameraPosition, this.lastCameraPosition)
        .multiplyScalar(0.3); // Movimiento suave
      
      // Suavizar el parallax acumulativo
      this.material.uniforms.cameraOffset.value.lerp(cameraOffset, 0.1);
      this.lastCameraPosition.copy(this.cameraPosition);
    }
  }

  // Método adicional para actualizar con cámara explícitamente
  updateWithCamera(deltaTime: number, camera: THREE.Camera): void {
    this.update(deltaTime, undefined, camera);
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

    if (newParams.parallaxStrength !== undefined) {
      this.material.uniforms.parallaxStrength.value = newParams.parallaxStrength;
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
export function createStarFieldFromPythonData(planetRadius: number, planetSeed?: number, cosmicOriginTime?: number, timeSpeed?: number): StarFieldEffect {
  // Usar planet seed para generar campo de estrellas consistente
  const seed = planetSeed !== undefined ? planetSeed : Math.floor(Math.random() * 1000000);
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
    parallaxStrength: rng.uniform(PROCEDURAL_RANGES.PARALLAX_STRENGTH.min, PROCEDURAL_RANGES.PARALLAX_STRENGTH.max),
    variableChance: rng.uniform(PROCEDURAL_RANGES.VARIABLE_CHANCE.min, PROCEDURAL_RANGES.VARIABLE_CHANCE.max),
    cosmicOriginTime,
    timeSpeed: timeSpeed !== undefined ? timeSpeed : 1.0,
  };

  return new StarFieldEffect(planetRadius, params);
}
