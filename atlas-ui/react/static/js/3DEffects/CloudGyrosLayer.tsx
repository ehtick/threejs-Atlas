/**
 * Cloud Gyros Layer - Versión mejorada que funciona como capa
 * 
 * Esta versión está diseñada para trabajar con PlanetLayerSystem
 * y no sobrescribe el material base del planeta.
 */

import * as THREE from 'three';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';
import { SeededRandom } from '../Utils/SeededRandom';

export interface StormData {
  x: number;
  y: number;
  z: number;
  size: number;
  intensity: number;
  spiralSpeed: number;
  animationSpeed: number;
}

export interface CloudGyrosLayerParams {
  stormCenters?: Array<StormData>;
  stormColor?: THREE.Color | number[];
  stormIntensity?: number;
  spiralSpeed?: number;
  animationSpeed?: number;
  opacity?: number;
  seed?: number;
}

// Rangos para generación procedural - Más tormentas pequeñas distribuidas
const PROCEDURAL_RANGES = {
  STORM_COUNT: { min: 1, max: 4 }, // Más tormentas para mejor cobertura
  STORM_CENTERS: { min: -1.2, max: 1.2 }, // Mayor rango para cobertura completa
  STORM_SIZE: { min: 0.15, max: 0.3 }, // Tormentas más pequeñas
  STORM_INTENSITY: { min: 0.6, max: 1.2 },
  SPIRAL_SPEED: { min: 0.5, max: 1.5 },
  ANIMATION_SPEED: { min: 0.1, max: 0.5 },
  OPACITY: { min: 0.1, max: 0.3 } // Opacidad suave para efecto de nubes
};

export class CloudGyrosLayer {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: CloudGyrosLayerParams;
  private layerSystem: PlanetLayerSystem;

  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    varying vec2 vUv;
    
    void main() {
      vPosition = position;
      vNormal = normalMatrix * normal; // Transformar normal al espacio de vista
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz); // Normal en espacio mundo
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  private static readonly fragmentShader = `
    uniform float time;
    uniform vec3 stormColor;
    uniform vec3 stormCenters3D[30]; // Centros en 3D para evitar distorsión - aumentado a 30
    uniform float stormSizes[30]; // Tamaños variables por tormenta - aumentado a 30
    uniform float stormIntensities[30]; // Intensidad individual por tormenta - aumentado a 30
    uniform float spiralSpeeds[30]; // Velocidad espiral individual por tormenta - aumentado a 30
    uniform float animationSpeeds[30]; // Velocidad animación individual por tormenta - aumentado a 30
    uniform int numStorms;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float ambientStrength;
    uniform float lightIntensity;
    uniform float opacity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    varying vec2 vUv;
    
    float createGyroSpirals(vec3 pos) {
      float storms = 0.0;
      
      for(int i = 0; i < 30; i++) {
        if(i >= numStorms) break;
        
        vec3 stormCenter3D = normalize(stormCenters3D[i]); // Centro normalizado en esfera
        float stormSize = stormSizes[i];
        float stormIntensity = stormIntensities[i]; // Intensidad individual
        float spiralSpeed = spiralSpeeds[i]; // Velocidad espiral individual
        float animationSpeed = animationSpeeds[i]; // Velocidad animación individual
        
        // Calcular distancia angular en 3D (sin distorsión)
        float dotProduct = dot(pos, stormCenter3D);
        float angularDist = acos(clamp(dotProduct, -1.0, 1.0)); // Distancia angular real
        
        if(angularDist < stormSize) {
          // Calcular vector tangente para el ángulo de espiral
          vec3 tangent = normalize(cross(stormCenter3D, vec3(0.0, 0.0, 1.0)));
          if(length(cross(stormCenter3D, vec3(0.0, 0.0, 1.0))) < 0.1) {
            tangent = normalize(cross(stormCenter3D, vec3(1.0, 0.0, 0.0)));
          }
          
          vec3 toPoint = pos - stormCenter3D * dot(pos, stormCenter3D);
          float angle = atan(dot(toPoint, cross(stormCenter3D, tangent)), dot(toPoint, tangent));
          
          // Espirales SUAVES para efecto de nubes - MENOS step functions más smoothstep
          float spiralFreq = 2.0 + spiralSpeed * 8.0; // Frecuencias más bajas para nubes suaves
          float radialFreq = 5.0 + spiralSpeed * 15.0; // Menor frecuencia radial para suavidad
          float spiral = sin(angle * spiralFreq + angularDist * radialFreq - time * animationSpeed * 2.0);
          
          // BLUR: Usar smoothstep en lugar de step para efecto de nubes difuso
          spiral = smoothstep(-0.4, 1.2, spiral + 0.5); // Transición AÚN MÁS suave
          
          // Añadir ruido suave para textura de nube
          float cloudNoise = sin(angularDist * 25.0 + time * animationSpeed) * 0.3;
          spiral = spiral * (0.7 + cloudNoise * 0.3);
          
          // Intensidad suave para efecto de nube
          spiral = spiral * (0.3 + stormIntensity * 0.7);
          
          // Bordes SUAVES para efecto de nube - falloff más gradual
          float falloffStart = stormSize * 0.3; // Inicio AÚN más temprano para transición MÁS larga
          float falloffRange = stormSize - falloffStart;
          float falloff = 1.0;
          
          if(angularDist > falloffStart) {
            falloff = 1.0 - ((angularDist - falloffStart) / falloffRange);
            // Potencia suave para bordes de nube difusos
            falloff = smoothstep(0.0, 1.0, falloff); // Muy suave
            falloff = smoothstep(0.0, 1.0, falloff); // Doble smoothstep para MÁS blur
            falloff = pow(falloff, 0.7); // Aún menos agresivo
          }
          
          // Usar intensidad individual con factor de nube suave
          float stormIntensityValue = falloff * spiral * stormIntensity * 0.3; // Aumentar un poco para compensar menor opacidad
          storms += stormIntensityValue;
        }
      }
      
      // No clamp para permitir que se vean múltiples tormentas
      return storms;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      
      // Enhanced lighting with rim lighting and proper transformations (EXACTAMENTE como en README)
      vec3 normal = normalize(vWorldNormal);
      vec3 lightDir = normalize(lightPosition - vWorldPosition);
      float dotNL = dot(normal, lightDir);
      
      // Smooth day/night transition (EXACTAMENTE como en README)
      float dayNight = smoothstep(-0.3, 0.1, dotNL);
      
      // Rim lighting for enhanced visibility (EXACTAMENTE como en README)
      float rimLight = 1.0 - abs(dotNL);
      rimLight = pow(rimLight, 3.0) * 0.1;
      
      // Final lighting calculation (EXACTAMENTE como en README)
      float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
      
      // Calcular tormentas directamente en 3D sin proyección distorsionante
      float storms = createGyroSpirals(pos);
      
      // Color de las tormentas con iluminación aplicada EXACTAMENTE como README
      vec3 color = stormColor * totalLight;
      float alpha = clamp(storms * opacity * 3.0, 0.0, 0.8); // Compensar menor opacidad, max 0.8 para efecto nube
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  constructor(layerSystem: PlanetLayerSystem, params: CloudGyrosLayerParams = {}) {
    this.layerSystem = layerSystem;
    
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    this.params = {
      stormCenters: params.stormCenters || this.generateStormCenters(seed),
      stormColor: params.stormColor || new THREE.Color(0xFF3030), // Color más brillante para mayor visibilidad
      stormIntensity: params.stormIntensity || rng.uniform(PROCEDURAL_RANGES.STORM_INTENSITY.min, PROCEDURAL_RANGES.STORM_INTENSITY.max),
      spiralSpeed: params.spiralSpeed || rng.uniform(PROCEDURAL_RANGES.SPIRAL_SPEED.min, PROCEDURAL_RANGES.SPIRAL_SPEED.max),
      animationSpeed: params.animationSpeed || rng.uniform(PROCEDURAL_RANGES.ANIMATION_SPEED.min, PROCEDURAL_RANGES.ANIMATION_SPEED.max),
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      seed
    };

    // Crear material directamente en esta clase
    this.material = this.createShaderMaterial();
    
    // Añadir capa al sistema (ligeramente más grande que CloudBands), pasando referencia a este objeto
    this.layerMesh = this.layerSystem.addEffectLayer('cloudGyros', this.material, 1.002, this);
  }

  private createShaderMaterial(): THREE.ShaderMaterial {
    // Convertir storm centers a array 3D (30 tormentas máximo, 3 coordenadas cada una)
    const centers3DArray = new Array(90).fill(0); // 30 * 3 = 90
    const sizesArray = new Array(30).fill(0.25); // Tamaños por defecto
    const intensitiesArray = new Array(30).fill(1.0); // Intensidades individuales
    const spiralSpeedsArray = new Array(30).fill(1.0); // Velocidades espiral individuales
    const animationSpeedsArray = new Array(30).fill(1.0); // Velocidades animación individuales
    
    if (this.params.stormCenters) {
      console.log(`🔧 Processing ${this.params.stormCenters.length} storms for shader`);
      this.params.stormCenters.forEach((storm: StormData, i: number) => {
        if (i < 30) {
          // Las coordenadas 3D YA están completamente generadas y normalizadas
          centers3DArray[i * 3] = storm.x;     // x ya normalizado
          centers3DArray[i * 3 + 1] = storm.y; // y ya normalizado
          centers3DArray[i * 3 + 2] = storm.z; // z ya normalizado
          
          // USAR LOS PARÁMETROS ÚNICOS YA GENERADOS EN generateStormCenters()
          sizesArray[i] = storm.size;
          intensitiesArray[i] = storm.intensity;
          spiralSpeedsArray[i] = storm.spiralSpeed;
          animationSpeedsArray[i] = storm.animationSpeed;
          
          if (i < 5) { // Solo log primeras 5 para no saturar
            console.log(`  Storm ${i}: center=(${storm.x.toFixed(2)}, ${storm.y.toFixed(2)}, ${storm.z.toFixed(2)}), size=${storm.size.toFixed(3)}`);
          }
        }
      });
    }

    return new THREE.ShaderMaterial({
      vertexShader: CloudGyrosLayer.vertexShader,
      fragmentShader: CloudGyrosLayer.fragmentShader,
      uniforms: {
        time: { value: 0 },
        stormColor: { value: this.params.stormColor || new THREE.Color(0xFF3030) },
        opacity: { value: this.params.opacity || PROCEDURAL_RANGES.OPACITY.max },
        stormCenters3D: { value: centers3DArray },
        stormSizes: { value: sizesArray },
        stormIntensities: { value: intensitiesArray },
        spiralSpeeds: { value: spiralSpeedsArray },
        animationSpeeds: { value: animationSpeedsArray },
        numStorms: { value: this.params.stormCenters ? Math.min(this.params.stormCenters.length, 30) : 30 },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(1, 1, 1) },
        ambientStrength: { value: 0.2 },
        lightIntensity: { value: 1.0 },
      },
      transparent: true,
      blending: THREE.NormalBlending, // Normal blending para mejor control de transparencia
      side: THREE.DoubleSide, // Doble cara para visibilidad completa
      depthWrite: false,
    });
  }

  private generateStormCenters(seed: number): Array<StormData> {
    // Normalizar seed para evitar overflow
    const normalizedSeed = Math.abs(seed % 1000000);
    console.log(`🌪️ Generating storms with normalized seed ${normalizedSeed}`);
    
    const storms: Array<StormData> = [];
    // Usar PROCEDURAL_RANGES para determinar cantidad de tormentas
    const stormRng = new SeededRandom(normalizedSeed);
    const stormCount = Math.floor(stormRng.uniform(PROCEDURAL_RANGES.STORM_COUNT.min, PROCEDURAL_RANGES.STORM_COUNT.max + 1));
    
    // Generar distribución en TODA LA SUPERFICIE ESFÉRICA
    for (let i = 0; i < stormCount; i++) {
      // CADA TORMENTA tiene su propio RNG con seed único
      const stormSeed = normalizedSeed + i * 7919; // Usar número primo para mejor distribución
      const stormRng = new SeededRandom(stormSeed);
      
      // Distribución esférica CORRECTA para cubrir toda la superficie
      const phi = stormRng.uniform(0, Math.PI * 2); // Ángulo azimutal completo
      const theta = Math.acos(stormRng.uniform(-1, 1)); // Ángulo polar COMPLETO (-1 a 1 para toda la esfera)
      
      // Coordenadas cartesianas NORMALIZADAS para esfera completa
      const x = Math.sin(theta) * Math.cos(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(theta); // Incluir Z para verificar cobertura completa
      
      const size = stormRng.uniform(PROCEDURAL_RANGES.STORM_SIZE.min, PROCEDURAL_RANGES.STORM_SIZE.max);
      const intensity = stormRng.uniform(PROCEDURAL_RANGES.STORM_INTENSITY.min, PROCEDURAL_RANGES.STORM_INTENSITY.max);
      const spiralSpeed = stormRng.uniform(PROCEDURAL_RANGES.SPIRAL_SPEED.min, PROCEDURAL_RANGES.SPIRAL_SPEED.max);
      const animationSpeed = stormRng.uniform(PROCEDURAL_RANGES.ANIMATION_SPEED.min, PROCEDURAL_RANGES.ANIMATION_SPEED.max);
      
      if (i < 5) { // Solo log primeras 5 para no saturar
        console.log(`Storm ${i}: seed=${stormSeed}, pos=(${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)}), size=${size.toFixed(3)}, intensity=${intensity.toFixed(3)}`);
      }
      
      storms.push({
        x, // Coordenada X normalizada de la esfera
        y, // Coordenada Y normalizada de la esfera
        z, // Coordenada Z normalizada de la esfera
        size,
        intensity,
        spiralSpeed,
        animationSpeed
      });
    }
    
    console.log(`✅ Generated ${storms.length} storms total`);
    return storms;
  }

  update(deltaTime: number): void {
    if (this.material.uniforms.time) {
      this.material.uniforms.time.value += deltaTime;
    }
  }

  updateParams(newParams: Partial<CloudGyrosLayerParams>): void {
    this.params = { ...this.params, ...newParams };
    
    // Para compatibilidad, aplicar parámetros globales a todas las tormentas
    if (newParams.stormIntensity !== undefined) {
      const intensities = this.material.uniforms.stormIntensities.value;
      for (let i = 0; i < intensities.length; i++) {
        intensities[i] = newParams.stormIntensity;
      }
    }
    if (newParams.spiralSpeed !== undefined) {
      const spiralSpeeds = this.material.uniforms.spiralSpeeds.value;
      for (let i = 0; i < spiralSpeeds.length; i++) {
        spiralSpeeds[i] = newParams.spiralSpeed;
      }
    }
    if (newParams.animationSpeed !== undefined) {
      const animationSpeeds = this.material.uniforms.animationSpeeds.value;
      for (let i = 0; i < animationSpeeds.length; i++) {
        animationSpeeds[i] = newParams.animationSpeed;
      }
    }
    if (newParams.opacity !== undefined) {
      this.material.uniforms.opacity.value = newParams.opacity;
    }
  }

  dispose(): void {
    // La limpieza se maneja en PlanetLayerSystem
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createCloudGyrosLayerFromPythonData(
  layerSystem: PlanetLayerSystem,
  gasGiantData: any,
  globalSeed?: number
): CloudGyrosLayer {
  const storms = gasGiantData.storms || {};
  
  // Generar valores proceduralmente basados en seed
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 5000); // +5000 para CloudGyrosLayer
  
  const params: CloudGyrosLayerParams = {
    stormCenters: storms.centers || undefined, // Se generará proceduralmente
    stormColor: new THREE.Color(0xFF3030), // Color más brillante para mayor visibilidad
    stormIntensity: storms.intensity || gasGiantData.storm_intensity || rng.uniform(PROCEDURAL_RANGES.STORM_INTENSITY.min, PROCEDURAL_RANGES.STORM_INTENSITY.max),
    spiralSpeed: storms.spiral_speed || rng.uniform(PROCEDURAL_RANGES.SPIRAL_SPEED.min, PROCEDURAL_RANGES.SPIRAL_SPEED.max),
    animationSpeed: rng.uniform(PROCEDURAL_RANGES.ANIMATION_SPEED.min, PROCEDURAL_RANGES.ANIMATION_SPEED.max),
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    seed
  };

  return new CloudGyrosLayer(layerSystem, params);
}