/**
 * Anomaly Phase Matter Effect - Materia en transición de fase
 *
 * Simula materia que existe en múltiples estados cuánticos simultáneamente,
 * creando efectos de materialización y desmaterialización constantes.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime";

export interface AnomalyPhaseMatterParams {
  particleCount?: number;
  phaseIntensity?: number;
  transitionSpeed?: number;
  coherenceLevel?: number;
  seed?: number;
  timeSpeed?: number;
  phaseStates?: number;
  startTime?: number; // Tiempo inicial fijo para determinismo
  cosmicOriginTime?: number;
}

const PROCEDURAL_RANGES = {
  PARTICLE_COUNT: { min: 60, max: 150 },
  PHASE_INTENSITY: { min: 0.4, max: 0.9 },
  TRANSITION_SPEED: { min: 1.0, max: 4.0 },
  COHERENCE_LEVEL: { min: 0.2, max: 0.7 },
  TIME_SPEED: { min: 0.6, max: 2.2 },
  PHASE_STATES: { min: 3, max: 6 }
};

export class AnomalyPhaseMatterEffect {
  private phaseSystem: THREE.Points;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private params: AnomalyPhaseMatterParams;
  private particleCount: number;
  private startTime: number;

  private static readonly vertexShader = `
    attribute float size;
    attribute vec3 phaseVector;
    attribute float coherenceFactor;
    attribute float phaseState;
    attribute float transitionPhase;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vPhaseState;
    varying float vCoherence;
    
    uniform float time;
    uniform float phaseIntensity;
    uniform float transitionSpeed;
    uniform float coherenceLevel;
    uniform float phaseStates;
    
    // Función de transición de fase cuántica
    float phaseTransition(float state, float t) {
      float cycle = sin(t * transitionSpeed + state * 6.28 / phaseStates);
      return 0.5 + 0.5 * cycle;
    }
    
    // Obtener posición basada en estado de fase
    vec3 getPhasePosition(vec3 basePos, float state, float t) {
      float transition = phaseTransition(state, t);
      
      // Estado sólido (compacto)
      if (state < 1.0) {
        return basePos * (0.8 + 0.2 * transition);
      }
      // Estado líquido (fluido)
      else if (state < 2.0) {
        vec3 flow = vec3(sin(t + basePos.x), cos(t + basePos.y), sin(t * 0.5 + basePos.z)) * 0.1;
        return basePos + flow * transition;
      }
      // Estado gaseoso (expansivo)
      else if (state < 3.0) {
        return basePos * (1.0 + 0.5 * transition);
      }
      // Estado plasmático (energético)
      else if (state < 4.0) {
        vec3 energy = normalize(phaseVector) * sin(t * 3.0) * 0.3;
        return basePos + energy * transition;
      }
      // Estado cuántico (incierto)
      else if (state < 5.0) {
        vec3 uncertainty = phaseVector * sin(t * 5.0 + state) * 0.4;
        return basePos + uncertainty * transition;
      }
      // Estado de antimateria (invertido)
      else {
        return -basePos * (0.5 + 0.5 * transition);
      }
    }
    
    void main() {
      vSize = size;
      vPhaseState = phaseState;
      vCoherence = coherenceFactor;
      
      // Calcular posición basada en estado de fase actual
      vec3 pos = getPhasePosition(position, phaseState, time + transitionPhase);
      
      // Coherencia cuántica - qué tan "real" es la partícula
      float coherence = coherenceFactor * coherenceLevel;
      float phaseTransitionValue = phaseTransition(phaseState, time + transitionPhase);
      
      // Color basado en estado de fase
      if (phaseState < 1.0) {
        vColor = vec3(0.8, 0.8, 1.0); // Azul sólido
      } else if (phaseState < 2.0) {
        vColor = vec3(0.3, 0.7, 1.0); // Azul líquido
      } else if (phaseState < 3.0) {
        vColor = vec3(0.9, 0.9, 0.6); // Amarillo gaseoso
      } else if (phaseState < 4.0) {
        vColor = vec3(1.0, 0.5, 0.2); // Naranja plasmático
      } else if (phaseState < 5.0) {
        vColor = vec3(0.7, 0.3, 1.0); // Púrpura cuántico
      } else {
        vColor = vec3(1.0, 0.2, 0.8); // Magenta antimateria
      }
      
      // Modular color con transición de fase
      vColor *= (0.7 + 0.3 * phaseTransitionValue);
      
      // Alpha basado en coherencia y fase
      vAlpha = coherence * phaseIntensity * phaseTransitionValue;
      
      // Efecto de materialización/desmaterialización
      float materialization = abs(sin(time * 2.0 + phaseState)) * 0.5 + 0.5;
      vAlpha *= materialization;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z) * (0.5 + coherence);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  private static readonly fragmentShader = `
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vPhaseState;
    varying float vCoherence;
    
    uniform float time;
    
    // Función de patrón de interferencia cuántica
    float quantumInterference(vec2 uv, float phase) {
      float dist = length(uv);
      float wave = sin(dist * 15.0 + phase * 10.0 + time * 3.0);
      return 0.5 + 0.5 * wave;
    }
    
    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      // Forma base de la partícula
      float particle = 1.0 - smoothstep(0.0, 0.5, dist);
      
      // Patrones específicos por estado de fase
      if (vPhaseState < 1.0) {
        // Sólido - forma definida
        particle = 1.0 - smoothstep(0.0, 0.3, dist);
      } else if (vPhaseState < 2.0) {
        // Líquido - bordes suaves
        particle = 1.0 - smoothstep(0.0, 0.4, dist);
        particle *= (0.8 + 0.2 * sin(time * 2.0 + dist * 10.0));
      } else if (vPhaseState < 3.0) {
        // Gaseoso - muy difuso
        particle = 1.0 - smoothstep(0.0, 0.5, dist);
        particle *= 0.6;
      } else if (vPhaseState < 4.0) {
        // Plasmático - energético
        float energy = quantumInterference(uv, vPhaseState);
        particle *= energy;
      } else if (vPhaseState < 5.0) {
        // Cuántico - interferencia
        float interference = quantumInterference(uv, vPhaseState);
        particle *= interference;
        
        // Probabilidad cuántica
        float probability = abs(sin(time + vPhaseState));
        if (probability < 0.3) {
          particle *= 0.2; // Baja probabilidad de existencia
        }
      } else {
        // Antimateria - patrón invertido
        particle = smoothstep(0.2, 0.5, dist) - smoothstep(0.5, 0.8, dist);
      }
      
      // Efecto de coherencia cuántica
      float coherenceEffect = vCoherence;
      if (coherenceEffect < 0.3) {
        // Baja coherencia - partícula "fantasma"
        particle *= 0.4;
        
        // Efecto de parpadeo cuántico
        float flicker = step(0.8, fract(sin(time * 10.0 + vPhaseState) * 43758.5453));
        particle *= (0.3 + 0.7 * flicker);
      }
      
      // Modulación temporal para transiciones
      float temporal = sin(time * 4.0 + vPhaseState) * 0.2 + 0.8;
      particle *= temporal;
      
      // Color final con efectos de fase
      vec3 finalColor = vColor;
      
      // Destello durante transiciones de fase críticas
      if (abs(sin(time * 2.0 + vPhaseState)) > 0.9) {
        finalColor += vec3(0.5, 0.5, 0.5); // Destello blanco
      }
      
      float finalAlpha = particle * vAlpha;
      gl_FragColor = vec4(finalColor, finalAlpha);
    }
  `;

  constructor(planetRadius: number, params: AnomalyPhaseMatterParams = {}) {
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    // Tiempo inicial determinista basado en el seed - igual que AtmosphereClouds
    this.startTime = params.startTime || (seed % 10000) / 1000;
    
    this.params = {
      particleCount: params.particleCount || Math.floor(rng.uniform(PROCEDURAL_RANGES.PARTICLE_COUNT.min, PROCEDURAL_RANGES.PARTICLE_COUNT.max)),
      phaseIntensity: params.phaseIntensity || rng.uniform(PROCEDURAL_RANGES.PHASE_INTENSITY.min, PROCEDURAL_RANGES.PHASE_INTENSITY.max),
      transitionSpeed: params.transitionSpeed || rng.uniform(PROCEDURAL_RANGES.TRANSITION_SPEED.min, PROCEDURAL_RANGES.TRANSITION_SPEED.max),
      coherenceLevel: params.coherenceLevel || rng.uniform(PROCEDURAL_RANGES.COHERENCE_LEVEL.min, PROCEDURAL_RANGES.COHERENCE_LEVEL.max),
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
      phaseStates: params.phaseStates || Math.floor(rng.uniform(PROCEDURAL_RANGES.PHASE_STATES.min, PROCEDURAL_RANGES.PHASE_STATES.max)),
      seed: seed,
      startTime: this.startTime,
    };

    this.particleCount = this.params.particleCount!;
    this.geometry = new THREE.BufferGeometry();
    this.material = this.createMaterial();

    this.generatePhaseParticles(planetRadius);
    this.phaseSystem = new THREE.Points(this.geometry, this.material);
  }

  private generatePhaseParticles(planetRadius: number): void {
    const positions = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);
    const phaseVectors = new Float32Array(this.particleCount * 3);
    const coherenceFactors = new Float32Array(this.particleCount);
    const phaseStates = new Float32Array(this.particleCount);
    const transitionPhases = new Float32Array(this.particleCount);

    const seed = this.params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);

    for (let i = 0; i < this.particleCount; i++) {
      // Distribución alrededor del planeta
      const distance = planetRadius * rng.uniform(1.1, 1.9);
      const pos = rng.spherePosition(distance);
      
      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;

      // Tamaño variable
      sizes[i] = rng.uniform(0.8, 2.0);

      // Vector de fase para direccionalidad cuántica
      const phaseVec = rng.spherePosition(1.0);
      phaseVectors[i * 3] = phaseVec.x;
      phaseVectors[i * 3 + 1] = phaseVec.y;
      phaseVectors[i * 3 + 2] = phaseVec.z;

      // Factor de coherencia cuántica
      coherenceFactors[i] = rng.uniform(0.1, 1.0);

      // Estado de fase (sólido=0, líquido=1, gas=2, plasma=3, cuántico=4, antimateria=5)
      phaseStates[i] = rng.uniform(0, this.params.phaseStates!);

      // Fase de transición inicial
      transitionPhases[i] = rng.uniform(0, Math.PI * 2);
    }

    this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute("phaseVector", new THREE.BufferAttribute(phaseVectors, 3));
    this.geometry.setAttribute("coherenceFactor", new THREE.BufferAttribute(coherenceFactors, 1));
    this.geometry.setAttribute("phaseState", new THREE.BufferAttribute(phaseStates, 1));
    this.geometry.setAttribute("transitionPhase", new THREE.BufferAttribute(transitionPhases, 1));
  }

  private createMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: AnomalyPhaseMatterEffect.vertexShader,
      fragmentShader: AnomalyPhaseMatterEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        phaseIntensity: { value: this.params.phaseIntensity },
        transitionSpeed: { value: this.params.transitionSpeed },
        coherenceLevel: { value: this.params.coherenceLevel },
        phaseStates: { value: this.params.phaseStates },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.phaseSystem.position.copy(planetPosition);
    }
    scene.add(this.phaseSystem);
  }

  update(): void {
    // Calcular tiempo absoluto determinista desde el inicio con ciclo y velocidad procedural
    const cosmicOriginTime = DEFAULT_COSMIC_ORIGIN_TIME; // No params.cosmicOriginTime available here
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.params.timeSpeed!, this.startTime);
    
    this.material.uniforms.time.value = currentTime;
    
    // Rotación procedural determinista basada en tiempo absoluto (factores reducidos para velocidad similar)
    this.phaseSystem.rotation.x = currentTime * 0.012 * Math.cos(currentTime * 0.3);
    this.phaseSystem.rotation.y = currentTime * 0.008 * Math.sin(currentTime * 0.5);
    this.phaseSystem.rotation.z = currentTime * 0.006 * Math.cos(currentTime * 0.7);
  }

  getObject3D(): THREE.Points {
    return this.phaseSystem;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}

export function createAnomalyPhaseMatterFromPythonData(planetRadius: number, anomalyData: any, globalSeed?: number): AnomalyPhaseMatterEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 9000);
  
  const params: AnomalyPhaseMatterParams = {
    particleCount: Math.floor(rng.uniform(PROCEDURAL_RANGES.PARTICLE_COUNT.min, PROCEDURAL_RANGES.PARTICLE_COUNT.max)),
    phaseIntensity: rng.uniform(PROCEDURAL_RANGES.PHASE_INTENSITY.min, PROCEDURAL_RANGES.PHASE_INTENSITY.max),
    transitionSpeed: rng.uniform(PROCEDURAL_RANGES.TRANSITION_SPEED.min, PROCEDURAL_RANGES.TRANSITION_SPEED.max),
    coherenceLevel: rng.uniform(PROCEDURAL_RANGES.COHERENCE_LEVEL.min, PROCEDURAL_RANGES.COHERENCE_LEVEL.max),
    timeSpeed: rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
    phaseStates: Math.floor(rng.uniform(PROCEDURAL_RANGES.PHASE_STATES.min, PROCEDURAL_RANGES.PHASE_STATES.max)),
    seed,
    startTime: (seed % 10000) / 1000, // Tiempo inicial determinista
  };

  return new AnomalyPhaseMatterEffect(planetRadius, params);
}