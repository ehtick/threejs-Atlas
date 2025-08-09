/**
 * Atmosphere Clouds Effect - Sistema de nubes atmosféricas procedurales
 *
 * Crea nubes volumétricas que flotan alrededor del planeta, basado en los
 * datos de Python del sistema generate_clouds. Genera formaciones de nubes
 * realistas con movimiento y variación de densidad.
 *
 * Responsabilidades:
 * - AtmosphereClouds.tsx -> Nubes volumétricas atmosféricas (ESTE ARCHIVO)
 * - CloudBands.tsx -> Bandas horizontales de gas giants
 * - AtmosphereGlow.tsx -> Partículas luminosas orbitantes
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface AtmosphereCloudsParams {
  color?: THREE.Color | number;
  cloudCount?: number;
  speed?: number;
  size?: number;
  opacity?: number;
  density?: number;
  seed?: number;
  rotationSpeed?: number; // Velocidad de rotación del sistema
  movementAmplitude?: number; // Amplitud del movimiento individual
  puffiness?: number; // Factor de esponjosidad de las nubes
  cloudsFromPython?: any[]; // Datos de nubes desde Python API
}

// Rangos para generación procedural basados en generate_clouds de Python
// Ajustados para proporciones realistas del planeta y atmósfera
const PROCEDURAL_RANGES = {
  CLOUD_COUNT: { min: 5, max: 250 }, // Basado en num_points de Python
  SPEED: { min: 0.02, max: 0.2 },
  SIZE: { min: 0.8, max: 2.0 }, // Tamaño proporcional al radio del planeta
  OPACITY: { min: 0.85, max: 1.0 }, // Alta opacidad para mayor visibilidad
  DENSITY: { min: 0.9, max: 1.0 }, // Máxima densidad para mayor contraste
  ROTATION_SPEED: { min: 0.005, max: 0.02 },
  MOVEMENT_AMPLITUDE: { min: 0.01, max: 0.08 },
  PUFFINESS: { min: 1.0, max: 2.0 } // Controladas para no exceder atmósfera
};

/**
 * Efecto de Nubes Atmosféricas
 *
 * Crea nubes volumétricas basadas en los datos de Python generate_clouds
 */
export class AtmosphereCloudsEffect {
  private particleSystem: THREE.Points;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private params: AtmosphereCloudsParams;
  private cloudCount: number;

  private static readonly vertexShader = `
    attribute float size;
    attribute vec3 customColor;
    attribute float speed;
    attribute float phase;
    attribute float density;
    attribute float puffiness;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vDensity;
    varying float vPuffiness;
    
    uniform float time;
    uniform float opacity;
    uniform float movementAmplitude;
    
    void main() {
      vColor = customColor;
      vSize = size;
      vDensity = density;
      vPuffiness = puffiness;
      
      // Movimiento de las nubes más lento y ondulante
      vec3 pos = position;
      float timeWithPhase = time * speed + phase;
      
      // Movimiento más suave para nubes
      pos.x += sin(timeWithPhase * 0.5) * movementAmplitude;
      pos.y += cos(timeWithPhase * 0.3) * (movementAmplitude * 0.7);
      pos.z += sin(timeWithPhase * 0.4) * (movementAmplitude * 0.6);
      
      // Alpha mejorado para mayor visibilidad
      float timeVariation = 0.8 + 0.2 * sin(timeWithPhase * 0.8); // Base más alta
      vAlpha = density * timeVariation * opacity;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * puffiness * (150.0 / -mvPosition.z); // Tamaño más pequeño, contenido
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  private static readonly fragmentShader = `
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vDensity;
    varying float vPuffiness;
    
    void main() {
      // Crear forma de nube densa y volumétrica como se ve desde el espacio
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      // Forma de nube con mejor definición
      float cloud = 1.0 - smoothstep(0.0, 0.5, dist); // Más definida
      
      // Añadir textura de nube más contrastada
      float noise1 = sin(uv.x * 12.0) * cos(uv.y * 12.0);
      float noise2 = sin(uv.x * 8.0 + 1.0) * cos(uv.y * 8.0 + 1.0);
      float combinedNoise = 0.7 + 0.25 * noise1 + 0.05 * noise2; // Más contraste base
      
      // Variación basada en densidad y esponjosidad con mayor contraste
      float densityFactor = 0.1 + 0.9 * vDensity; // Máximo contraste
      float puffFactor = 0.6 + 0.4 * (vPuffiness / 2.0);
      
      cloud *= combinedNoise * densityFactor * puffFactor;
      
      // Gradiente radial más definido para bordes nítidos
      float radialGrad = 1.0 - smoothstep(0.0, 0.6, dist);
      cloud *= radialGrad;
      
      // Opacidad alta para máxima visibilidad
      float finalAlpha = cloud * vAlpha * 1.8; // Boost alto para visibilidad
      
      gl_FragColor = vec4(vColor, finalAlpha);
    }
  `;

  constructor(planetRadius: number, params: AtmosphereCloudsParams = {}) {
    
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    this.params = {
      color: params.color || new THREE.Color(0xffffff),
      cloudCount: params.cloudCount || Math.floor(rng.uniform(PROCEDURAL_RANGES.CLOUD_COUNT.min, PROCEDURAL_RANGES.CLOUD_COUNT.max)),
      speed: params.speed || rng.uniform(PROCEDURAL_RANGES.SPEED.min, PROCEDURAL_RANGES.SPEED.max),
      size: params.size || rng.uniform(PROCEDURAL_RANGES.SIZE.min, PROCEDURAL_RANGES.SIZE.max),
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      density: params.density || rng.uniform(PROCEDURAL_RANGES.DENSITY.min, PROCEDURAL_RANGES.DENSITY.max),
      rotationSpeed: params.rotationSpeed || rng.uniform(PROCEDURAL_RANGES.ROTATION_SPEED.min, PROCEDURAL_RANGES.ROTATION_SPEED.max),
      movementAmplitude: params.movementAmplitude || rng.uniform(PROCEDURAL_RANGES.MOVEMENT_AMPLITUDE.min, PROCEDURAL_RANGES.MOVEMENT_AMPLITUDE.max),
      puffiness: params.puffiness || rng.uniform(PROCEDURAL_RANGES.PUFFINESS.min, PROCEDURAL_RANGES.PUFFINESS.max),
      seed: seed,
    };

    this.cloudCount = this.params.cloudCount!;
    this.geometry = new THREE.BufferGeometry();
    this.material = this.createMaterial();

    this.generateClouds(planetRadius);
    this.particleSystem = new THREE.Points(this.geometry, this.material);
  }

  private generateClouds(planetRadius: number): void {
    const positions = new Float32Array(this.cloudCount * 3);
    const colors = new Float32Array(this.cloudCount * 3);
    const sizes = new Float32Array(this.cloudCount);
    const speeds = new Float32Array(this.cloudCount);
    const phases = new Float32Array(this.cloudCount);
    const densities = new Float32Array(this.cloudCount);
    const puffinesses = new Float32Array(this.cloudCount);

    const baseColor = this.params.color instanceof THREE.Color ? this.params.color : new THREE.Color(this.params.color as any);
    const seed = this.params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);

    // Verificar si tenemos datos de Python
    const cloudsFromPython = this.params.cloudsFromPython;

    for (let i = 0; i < this.cloudCount; i++) {
      let x, y, z;
      let cloudColor = baseColor;
      let cloudSize = this.params.size! * rng.uniform(0.5, 1.5);

      if (cloudsFromPython && i < cloudsFromPython.length) {
        // Usar datos reales de Python
        const cloudData = cloudsFromPython[i];
        
        // Posición desde Python (ya normalizada) - MUY dentro del planeta
        x = cloudData.position[0] * planetRadius * 0.85; // Muy dentro del planeta
        y = cloudData.position[1] * planetRadius * 0.85;
        z = rng.uniform(-planetRadius * 0.05, planetRadius * 0.05); // Dispersión interna
        
        // Color desde Python
        if (cloudData.color) {
          cloudColor = new THREE.Color().setRGB(cloudData.color[0], cloudData.color[1], cloudData.color[2]);
        }
        
        // Tamaño desde Python (radio normalizado) - Pequeño y contenido
        cloudSize = cloudData.radius * planetRadius * rng.uniform(0.5, 1.0);
        
      } else {
        // Generación procedural original - MUY dentro del planeta
        const angle = rng.uniform(0, 2 * Math.PI);
        const distance = rng.uniform(0.80 * planetRadius, 0.90 * planetRadius); // Muy dentro del planeta
        
        x = distance * Math.cos(angle);
        y = distance * Math.sin(angle);
        z = rng.uniform(-planetRadius * 0.05, planetRadius * 0.05); // Dispersión interna
      }

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color con ligera variación
      const colorVar = rng.colorVariation({ r: cloudColor.r, g: cloudColor.g, b: cloudColor.b });
      colors[i * 3] = colorVar.r;
      colors[i * 3 + 1] = colorVar.g;
      colors[i * 3 + 2] = colorVar.b;

      sizes[i] = cloudSize;
      speeds[i] = this.params.speed! * rng.uniform(0.3, 1.7);
      phases[i] = rng.random() * Math.PI * 2;
      densities[i] = this.params.density! * rng.uniform(0.6, 1.4);
      puffinesses[i] = this.params.puffiness! * rng.uniform(0.7, 1.3);
    }

    this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute("customColor", new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute("speed", new THREE.BufferAttribute(speeds, 1));
    this.geometry.setAttribute("phase", new THREE.BufferAttribute(phases, 1));
    this.geometry.setAttribute("density", new THREE.BufferAttribute(densities, 1));
    this.geometry.setAttribute("puffiness", new THREE.BufferAttribute(puffinesses, 1));
  }

  private createMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: AtmosphereCloudsEffect.vertexShader,
      fragmentShader: AtmosphereCloudsEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        opacity: { value: this.params.opacity },
        movementAmplitude: { value: this.params.movementAmplitude },
      },
      transparent: true,
      blending: THREE.AdditiveBlending, // Additive para mayor visibilidad y brillo
      depthWrite: false,
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.particleSystem.position.copy(planetPosition);
    }
    scene.add(this.particleSystem);
  }

  update(deltaTime: number): void {
    const oldTime = this.material.uniforms.time.value;
    this.material.uniforms.time.value += deltaTime;

    // Rotación procedural del sistema de nubes
    this.particleSystem.rotation.y += deltaTime * this.params.rotationSpeed!;
  }

  updateParams(newParams: Partial<AtmosphereCloudsParams>): void {
    this.params = { ...this.params, ...newParams };

    if (newParams.opacity !== undefined) {
      this.material.uniforms.opacity.value = newParams.opacity;
    }

    if (newParams.movementAmplitude !== undefined) {
      this.material.uniforms.movementAmplitude.value = newParams.movementAmplitude;
    }
  }

  getObject3D(): THREE.Points {
    return this.particleSystem;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createAtmosphereCloudsFromPythonData(planetRadius: number, surfaceData: any, globalSeed?: number): AtmosphereCloudsEffect {
  // Los datos de nubes vienen en surface_elements.clouds (no atmosphere)
  const cloudsArray = surfaceData.clouds || [];
  
  
  if (cloudsArray.length === 0) {
    // Si no hay datos de nubes de Python, generar proceduralmente
    const seed = globalSeed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed + 4000);
    
    const params: AtmosphereCloudsParams = {
      color: new THREE.Color(1, 1, 1), // Blanco puro para test
      cloudCount: 8, // Número equilibrado de nubes
      speed: 0.1,
      size: 1.5, // Tamaño más pequeño y contenido
      opacity: 1.0, // Opacidad máxima para test
      density: 1.0, // Densidad máxima para test
      seed,
      rotationSpeed: 0.01,
      movementAmplitude: 0.05,
      puffiness: 2.0, // Puffiness visible para test
    };

    return new AtmosphereCloudsEffect(planetRadius, params);
  }

  // Usar datos reales de Python
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 4000);
  
  const params: AtmosphereCloudsParams = {
    color: new THREE.Color(0xffffff), // Color base, se aplicará por nube individual
    cloudCount: cloudsArray.length,
    speed: rng.uniform(PROCEDURAL_RANGES.SPEED.min, PROCEDURAL_RANGES.SPEED.max),
    size: rng.uniform(PROCEDURAL_RANGES.SIZE.min, PROCEDURAL_RANGES.SIZE.max),
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    density: rng.uniform(PROCEDURAL_RANGES.DENSITY.min, PROCEDURAL_RANGES.DENSITY.max),
    seed,
    rotationSpeed: rng.uniform(PROCEDURAL_RANGES.ROTATION_SPEED.min, PROCEDURAL_RANGES.ROTATION_SPEED.max),
    movementAmplitude: rng.uniform(PROCEDURAL_RANGES.MOVEMENT_AMPLITUDE.min, PROCEDURAL_RANGES.MOVEMENT_AMPLITUDE.max),
    puffiness: rng.uniform(PROCEDURAL_RANGES.PUFFINESS.min, PROCEDURAL_RANGES.PUFFINESS.max),
    cloudsFromPython: cloudsArray, // Pasar los datos de Python
  };

  return new AtmosphereCloudsEffect(planetRadius, params);
}