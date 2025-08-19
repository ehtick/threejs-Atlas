/**
 * Anomaly Organic Morph Effect - Transformaciones orgánicas anómalas
 *
 * Crea una esfera que se transforma en patrones orgánicos viscosos y vivientes:
 * ramas polares, venas meridianas, zarcillos espirales, racimos y redes neuronales.
 * Simula crecimiento orgánico alien que pulsa y se extiende de forma perturbadora.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface AnomalyGeometricMorphParams {
  morphSpeed?: number;
  intensity?: number;
  scale?: number;
  seed?: number;
  timeSpeed?: number;
  shapeSequence?: number[]; // Secuencia personalizada de formas
}

const PROCEDURAL_RANGES = {
  MORPH_SPEED: { min: 0.3, max: 1.5 },
  INTENSITY: { min: 0.3, max: 0.8 },
  SCALE: { min: 0.8, max: 1.5 },
  TIME_SPEED: { min: 0.5, max: 2.0 }
};

// Definir patrones orgánicos viscosos
const ORGANIC_PATTERNS = {
  SPHERE: 0,           // Esfera base
  POLAR_BRANCHES: 1,   // Ramas desde los polos
  MERIDIAN_VEINS: 2,   // Venas meridianas
  SPIRAL_TENDRILS: 3,  // Zarcillos espirales
  BLOB_CLUSTERS: 4,    // Racimos de protuberancias
  NEURAL_NETWORK: 5    // Red neuronal orgánica
};

export class AnomalyGeometricMorphEffect {
  private morphSystem: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.SphereGeometry;
  private params: AnomalyGeometricMorphParams;
  private startTime: number;
  private shapeSequence: number[];
  private currentShapeIndex: number = 0;

  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float morphProgress;
    uniform float currentShape;
    uniform float nextShape;
    uniform float intensity;
    uniform float morphSpeed;
    
    // Función para calcular posiciones orgánicas viscosas
    vec3 getOrganicPattern(vec3 spherePos, float patternType) {
      vec3 pos = normalize(spherePos);
      float radius = length(spherePos);
      
      if (patternType < 0.5) {
        // Esfera base
        return spherePos;
      }
      else if (patternType < 1.5) {
        // Ramas polares - crecimiento desde norte y sur
        float latitude = asin(pos.y); // -π/2 a π/2
        float longitude = atan(pos.z, pos.x); // -π a π
        
        // Crear 6 ramas desde cada polo
        float numBranches = 6.0;
        float branchAngle = 2.0 * 3.14159 / numBranches;
        
        // Distancia al polo más cercano
        float distanceToNorthPole = abs(latitude - 1.5708); // π/2
        float distanceToSouthPole = abs(latitude + 1.5708); // -π/2
        float distanceToNearestPole = min(distanceToNorthPole, distanceToSouthPole);
        
        // Encontrar la rama más cercana
        float nearestBranch = floor(longitude / branchAngle + 0.5) * branchAngle;
        float distanceToBranch = abs(longitude - nearestBranch);
        
        // Factor de crecimiento: más fuerte cerca de los polos y las ramas
        float poleFactor = 1.0 - smoothstep(0.0, 1.0, distanceToNearestPole);
        float branchFactor = 1.0 - smoothstep(0.0, 0.3, distanceToBranch);
        float growthFactor = poleFactor * branchFactor;
        
        // Extensión orgánica hacia afuera
        float extension = growthFactor * 0.4 * (1.0 + sin(time * 2.0 + longitude * 3.0) * 0.1);
        
        return pos * radius * (1.0 + extension);
      }
      else if (patternType < 2.5) {
        // Venas meridianas - líneas de ecuador a polo
        float latitude = asin(pos.y);
        float longitude = atan(pos.z, pos.x);
        
        // Crear venas meridianas principales
        float numVeins = 8.0;
        float veinAngle = 2.0 * 3.14159 / numVeins;
        float nearestVein = floor(longitude / veinAngle + 0.5) * veinAngle;
        float distanceToVein = abs(longitude - nearestVein);
        
        // Factor de vena basado en la proximidad
        float veinFactor = 1.0 - smoothstep(0.0, 0.2, distanceToVein);
        
        // Pulsación orgánica
        float pulse = sin(time * 3.0 + latitude * 4.0) * 0.1 + 0.9;
        float extension = veinFactor * 0.3 * pulse;
        
        return pos * radius * (1.0 + extension);
      }
      else if (patternType < 3.5) {
        // Zarcillos espirales - crecimiento en espiral
        float latitude = asin(pos.y);
        float longitude = atan(pos.z, pos.x);
        
        // Crear espiral
        float spiralAngle = longitude + latitude * 3.0;
        float spiralFactor = sin(spiralAngle * 4.0) * 0.5 + 0.5;
        
        // Factor de altura para que sea más fuerte en el ecuador
        float heightFactor = 1.0 - abs(pos.y);
        
        // Ondulación temporal
        float wave = sin(time * 2.5 + spiralAngle) * 0.1 + 0.9;
        float extension = spiralFactor * heightFactor * 0.4 * wave;
        
        return pos * radius * (1.0 + extension);
      }
      else if (patternType < 4.5) {
        // Racimos de protuberancias - bultos orgánicos aleatorios
        float latitude = asin(pos.y);
        float longitude = atan(pos.z, pos.x);
        
        // Crear múltiples centros de crecimiento
        vec3 cluster1 = vec3(sin(longitude * 5.0), cos(latitude * 3.0), sin(longitude * 3.0 + latitude * 2.0));
        vec3 cluster2 = vec3(cos(longitude * 4.0 + 1.0), sin(latitude * 4.0), cos(longitude * 2.0));
        vec3 cluster3 = vec3(sin(longitude * 6.0 + 2.0), cos(latitude * 5.0 + 1.0), sin(longitude * 4.0 + latitude));
        
        float noise1 = length(cluster1) * 0.3;
        float noise2 = length(cluster2) * 0.25;
        float noise3 = length(cluster3) * 0.2;
        
        float totalNoise = (noise1 + noise2 + noise3) / 3.0;
        
        // Pulsación temporal
        float pulse = sin(time * 1.8 + totalNoise * 10.0) * 0.1 + 0.9;
        float extension = totalNoise * pulse * 0.5;
        
        return pos * radius * (1.0 + extension);
      }
      else {
        // Red neuronal orgánica - conexiones que se extienden y contraen
        float latitude = asin(pos.y);
        float longitude = atan(pos.z, pos.x);
        
        // Crear nodos de red
        float nodePattern = sin(longitude * 4.0) * sin(latitude * 6.0) + 
                           cos(longitude * 6.0 + 1.0) * cos(latitude * 4.0 + 1.0) +
                           sin(longitude * 8.0 + 2.0) * sin(latitude * 8.0 + 2.0);
        
        float nodeStrength = nodePattern * 0.5 + 0.5;
        
        // Conexiones que pulsan
        float connectionWave = sin(time * 2.0 + nodePattern * 5.0) * 0.15 + 0.85;
        float extension = nodeStrength * connectionWave * 0.4;
        
        return pos * radius * (1.0 + extension);
      }
    }
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      
      // Obtener patrones orgánicos para forma actual y siguiente
      vec3 currentPos = getOrganicPattern(position, currentShape);
      vec3 nextPos = getOrganicPattern(position, nextShape);
      
      // Interpolar entre formas usando morphProgress
      vec3 morphedPos = mix(currentPos, nextPos, morphProgress);
      
      // Añadir ondulación sutil durante la transformación
      float ripple = sin(time * 3.0 + length(position) * 5.0) * 0.02 * morphProgress * intensity;
      morphedPos += normal * ripple;
      
      vec4 worldPosition = modelMatrix * vec4(morphedPos, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(morphedPos, 1.0);
    }
  `;

  private static readonly fragmentShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float morphProgress;
    uniform float currentShape;
    uniform float nextShape;
    uniform float intensity;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    
    // Función para obtener color según el patrón orgánico
    vec3 getOrganicColor(float patternType, vec3 basePos) {
      if (patternType < 0.5) {
        // Esfera base - Azul etéreo
        return vec3(0.3, 0.6, 1.0);
      }
      else if (patternType < 1.5) {
        // Ramas polares - Verde bioluminiscente
        return vec3(0.2, 0.9, 0.4);
      }
      else if (patternType < 2.5) {
        // Venas meridianas - Rojo sangre orgánico
        return vec3(0.9, 0.2, 0.3);
      }
      else if (patternType < 3.5) {
        // Zarcillos espirales - Púrpura místico
        return vec3(0.7, 0.3, 0.9);
      }
      else if (patternType < 4.5) {
        // Racimos de protuberancias - Naranja coral
        return vec3(1.0, 0.5, 0.2);
      }
      else {
        // Red neuronal - Cian eléctrico
        return vec3(0.2, 0.8, 0.9);
      }
    }
    
    void main() {
      // Colores de patrones orgánicos actual y siguiente
      vec3 currentColor = getOrganicColor(currentShape, vPosition);
      vec3 nextColor = getOrganicColor(nextShape, vPosition);
      
      // Interpolar colores
      vec3 morphedColor = mix(currentColor, nextColor, morphProgress);
      
      // Iluminación básica
      vec3 lightDir = normalize(lightDirection);
      float NdotL = max(dot(vNormal, lightDir), 0.0);
      float lighting = 0.4 + 0.6 * NdotL;
      
      // Efecto de borde durante transformación
      float edgeGlow = 1.0 - abs(dot(vNormal, normalize(vWorldPosition - cameraPosition)));
      edgeGlow = pow(edgeGlow, 2.0) * morphProgress * 0.3;
      
      // Pulso de energía durante transformación
      float energyPulse = sin(time * 8.0) * 0.1 + 0.9;
      morphedColor *= energyPulse;
      
      // Añadir brillo en los bordes
      morphedColor += vec3(edgeGlow);
      
      // Color final con iluminación
      vec3 finalColor = morphedColor * lighting;
      
      // Transparencia variable - más opaco durante transformación
      float alpha = 0.6 + morphProgress * 0.3;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  constructor(planetRadius: number, params: AnomalyGeometricMorphParams = {}) {
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    this.startTime = (seed % 10000) / 1000;
    
    this.params = {
      morphSpeed: params.morphSpeed || rng.uniform(PROCEDURAL_RANGES.MORPH_SPEED.min, PROCEDURAL_RANGES.MORPH_SPEED.max),
      intensity: params.intensity || rng.uniform(PROCEDURAL_RANGES.INTENSITY.min, PROCEDURAL_RANGES.INTENSITY.max),
      scale: params.scale || rng.uniform(PROCEDURAL_RANGES.SCALE.min, PROCEDURAL_RANGES.SCALE.max),
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
      seed: seed,
    };

    // Crear secuencia de formas aleatorias pero determinista
    this.shapeSequence = params.shapeSequence || this.generateShapeSequence(rng);
    
    // Geometría base (esfera con suficientes segmentos para morphing suave)
    this.geometry = new THREE.SphereGeometry(planetRadius * this.params.scale!, 64, 64);
    this.material = this.createMaterial();
    this.morphSystem = new THREE.Mesh(this.geometry, this.material);
    
    // Hacer semitransparente para el efecto
    this.morphSystem.renderOrder = 1000;
  }

  private generateShapeSequence(rng: SeededRandom): number[] {
    const patterns = Object.values(ORGANIC_PATTERNS);
    const sequence: number[] = [];
    
    // Crear una secuencia de 6 patrones orgánicos sin repetir consecutivos
    let lastPattern = -1;
    for (let i = 0; i < 6; i++) {
      let nextPattern;
      do {
        nextPattern = patterns[Math.floor(rng.random() * patterns.length)];
      } while (nextPattern === lastPattern && patterns.length > 1);
      
      sequence.push(nextPattern);
      lastPattern = nextPattern;
    }
    
    return sequence;
  }

  private createMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: AnomalyGeometricMorphEffect.vertexShader,
      fragmentShader: AnomalyGeometricMorphEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        morphProgress: { value: 0 },
        currentShape: { value: this.shapeSequence[0] },
        nextShape: { value: this.shapeSequence[1] },
        intensity: { value: this.params.intensity },
        morphSpeed: { value: this.params.morphSpeed },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.morphSystem.position.copy(planetPosition);
    }
    scene.add(this.morphSystem);
  }

  update(deltaTime: number): void {
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000;
    
    this.material.uniforms.time.value = currentTime;
    
    // Calcular progreso de morphing (ciclo cada 4-8 segundos)
    const cycleDuration = 6.0 / this.params.morphSpeed!; // Duración de cada ciclo
    const cycleTime = currentTime % cycleDuration;
    const morphDuration = cycleDuration * 0.3; // 30% del tiempo morphing, 70% estático
    
    let morphProgress = 0;
    let isTransitioning = false;
    
    if (cycleTime < morphDuration) {
      // En transición
      morphProgress = cycleTime / morphDuration;
      isTransitioning = true;
    } else {
      // Forma estática
      morphProgress = 0;
      isTransitioning = false;
    }
    
    // Actualizar índice de forma cuando termine la transición
    if (!isTransitioning && morphProgress === 0) {
      const newShapeIndex = Math.floor(currentTime / cycleDuration) % this.shapeSequence.length;
      if (newShapeIndex !== this.currentShapeIndex) {
        this.currentShapeIndex = newShapeIndex;
        const nextShapeIndex = (this.currentShapeIndex + 1) % this.shapeSequence.length;
        
        this.material.uniforms.currentShape.value = this.shapeSequence[this.currentShapeIndex];
        this.material.uniforms.nextShape.value = this.shapeSequence[nextShapeIndex];
      }
    }
    
    // Suavizar la curva de transición
    const smoothProgress = morphProgress < 0.5 
      ? 2 * morphProgress * morphProgress 
      : 1 - 2 * (1 - morphProgress) * (1 - morphProgress);
    
    this.material.uniforms.morphProgress.value = smoothProgress;
    
    // Rotación lenta durante las formas estáticas
    if (!isTransitioning) {
      this.morphSystem.rotation.y += deltaTime * 0.1;
      this.morphSystem.rotation.x += deltaTime * 0.05;
    }
  }

  // Métodos para integración con sistema de luz
  updateLightPosition(position: THREE.Vector3): void {
    this.material.uniforms.lightPosition.value.copy(position);
  }

  updateLightDirection(direction: THREE.Vector3): void {
    this.material.uniforms.lightDirection.value.copy(direction);
  }

  updateFromThreeLight(light: THREE.DirectionalLight): void {
    this.updateLightPosition(light.position);
    const direction = light.target.position.clone().sub(light.position).normalize();
    this.updateLightDirection(direction);
  }

  getObject3D(): THREE.Mesh {
    return this.morphSystem;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}

export function createAnomalyGeometricMorphFromPythonData(planetRadius: number, anomalyData: any, globalSeed?: number): AnomalyGeometricMorphEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 10000);
  
  const params: AnomalyGeometricMorphParams = {
    morphSpeed: rng.uniform(PROCEDURAL_RANGES.MORPH_SPEED.min, PROCEDURAL_RANGES.MORPH_SPEED.max),
    intensity: rng.uniform(PROCEDURAL_RANGES.INTENSITY.min, PROCEDURAL_RANGES.INTENSITY.max),
    scale: rng.uniform(PROCEDURAL_RANGES.SCALE.min, PROCEDURAL_RANGES.SCALE.max),
    timeSpeed: rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
    seed,
  };

  return new AnomalyGeometricMorphEffect(planetRadius, params);
}