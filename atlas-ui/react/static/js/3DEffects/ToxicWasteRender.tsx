/**
 * Toxic Waste Surface Render Effect
 *
 * Renderiza manchas poligonales tóxicas individuales que se mueven sobre la superficie del planeta.
 * Cada mancha es un objeto 3D separado que se anima independientemente.
 */

import * as THREE from "three";
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime";
import { SeededRandom } from "../Utils/SeededRandom";

export interface ToxicWasteRenderParams {
  spotCount?: number;
  spotSize?: number;
  moveSpeed?: number;
  innerRotationSpeed?: number;
  toxicColor?: THREE.Color;
  debrisColor?: THREE.Color;
  seed?: number;
  timeSpeed?: number; // Velocidad del tiempo para sincronización (0.1 - 3.0)
  cosmicOriginTime?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  OBJECT_COUNT: { min: 31, max: 33 }, // Cantidad de objetos/figuras tóxicas
  SPOT_SIZE: { min: 0.4, max: 1.2 }, // Tamaño de cada figura individual
  MOVE_SPEED: { min: 0.1, max: 0.3 }, // Velocidad de movimiento orbital
  INNER_ROTATION_SPEED: { min: -150.0, max: 150.0 }, // Velocidad de rotación sobre sí misma
  PULSE_AMPLITUDE: { min: 0.1, max: 1.3 }, // Intensidad de pulsación
  TIME_SPEED: { min: 0.1, max: 3.0 } // Rango de velocidades del tiempo para sincronización
};

/**
 * Material para una mancha poligonal individual
 */
function createToxicSpotMaterial(toxicColor: THREE.Color, size: number, seed: number): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0.0 },
      uToxicColor: { value: toxicColor },
      uSize: { value: size },
      uSeed: { value: seed },
      uPulseAmplitude: { value: 0.2 },
    },

    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,

    fragmentShader: `
      uniform float uTime;
      uniform vec3 uToxicColor;
      uniform float uSize;
      uniform float uSeed;
      uniform float uPulseAmplitude;
      varying vec2 vUv;

      // Hash function
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7)) + uSeed) * 43758.5453);
      }

      // Crear forma poligonal irregular
      float polygonShape(vec2 p, int vertices) {
        vec2 center = vec2(0.5);
        vec2 dir = p - center;
        float angle = atan(dir.y, dir.x);
        float radius = length(dir);
        
        float angleStep = 6.28318 / float(vertices);
        float minDist = uSize;
        
        for (int i = 0; i < 8; i++) {
          if (i >= vertices) break;
          float vertexAngle = float(i) * angleStep;
          
          // Variación procedural en cada vértice
          float vertexHash = hash(vec2(float(i) * 17.3, uSeed));
          float vertexRadius = uSize * 0.3 * (0.7 + 0.6 * vertexHash);
          
          vec2 vertex = center + vec2(cos(vertexAngle), sin(vertexAngle)) * vertexRadius;
          float distToVertex = length(p - vertex);
          minDist = min(minDist, distToVertex);
        }
        
        return 1.0 - smoothstep(0.0, uSize * 0.1, minDist);
      }

      void main() {
        // Crear polígono irregular con 5-7 vértices
        int vertices = 5 + int(hash(vec2(uSeed + 10.0, 0.0)) * 2.0);
        float polygon = polygonShape(vUv, vertices);
        
        if (polygon < 0.1) {
          discard;
        }
        
        // Efecto de pulsación
        float pulse = sin(uTime * 2.0 + uSeed) * uPulseAmplitude + (1.0 - uPulseAmplitude * 0.5);
        
        // Color final con pulsación
        vec3 finalColor = uToxicColor * pulse;
        float alpha = polygon * 0.8;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,

    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
}

/**
 * Clase para una mancha tóxica individual
 */
class ToxicSpot {
  private mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private initialAngle: number;
  private initialPhi: number;
  private angleSpeed: number;
  private phiSpeed: number;
  private rotationSpeed: number;
  private size: number;
  private pulseAmplitude: number;
  private planetRadius: number;

  constructor(planetRadius: number, toxicColor: THREE.Color, seed: number, globalMoveSpeed?: number, globalInnerRotationSpeed?: number) {
    this.planetRadius = planetRadius;
    
    // Cada spot tiene sus propios parámetros procedurales
    const rng = new SeededRandom(seed);
    
    // Generar tamaño individual para este spot
    this.size = rng.uniform(PROCEDURAL_RANGES.SPOT_SIZE.min, PROCEDURAL_RANGES.SPOT_SIZE.max);
    this.pulseAmplitude = rng.uniform(PROCEDURAL_RANGES.PULSE_AMPLITUDE.min, PROCEDURAL_RANGES.PULSE_AMPLITUDE.max);
    
    // Generar velocidades individuales respetando parámetros globales
    const baseMoveSpeed = globalMoveSpeed !== undefined ? globalMoveSpeed : rng.uniform(PROCEDURAL_RANGES.MOVE_SPEED.min, PROCEDURAL_RANGES.MOVE_SPEED.max);
    const baseInnerRotationSpeed = globalInnerRotationSpeed !== undefined ? globalInnerRotationSpeed : rng.uniform(PROCEDURAL_RANGES.INNER_ROTATION_SPEED.min, PROCEDURAL_RANGES.INNER_ROTATION_SPEED.max);
    
    // Aplicar variaciones individuales respetando los rangos base
    this.angleSpeed = rng.uniform(0.5, 1.5) * baseMoveSpeed;
    this.phiSpeed = rng.uniform(-0.3, 0.3) * baseMoveSpeed;
    this.rotationSpeed = baseInnerRotationSpeed * rng.uniform(0.8, 1.2); // Pequeña variación individual

    // Crear geometría plana centrada en el origen local del objeto
    // Esto permite que la rotación sea sobre el centro del objeto individual
    const geometry = new THREE.PlaneGeometry(this.size * 2, this.size * 2, 1, 1);
    
    this.material = createToxicSpotMaterial(toxicColor, this.size, seed);
    this.material.uniforms.uPulseAmplitude.value = this.pulseAmplitude;
    this.mesh = new THREE.Mesh(geometry, this.material);

    // Posición inicial aleatoria en la superficie (determinista basada en seed)
    this.initialAngle = rng.uniform(0, Math.PI * 2);
    this.initialPhi = rng.uniform(0.2, Math.PI - 0.2); // Evitar los polos
  }

  private updatePosition(time: number): void {
    // Calcular posición orbital basada en tiempo absoluto (move_speed)
    const currentAngle = this.initialAngle + (this.angleSpeed * time);
    let currentPhi = this.initialPhi + (this.phiSpeed * time);
    
    // Mantener phi en rango válido permitiendo movimiento por toda la superficie
    currentPhi = Math.abs(currentPhi % (Math.PI * 2));
    if (currentPhi > Math.PI) {
      currentPhi = Math.PI * 2 - currentPhi;
    }

    // Convertir coordenadas esféricas a cartesianas para posición real en la superficie
    const radius = this.planetRadius * 1.005; // Radio del planeta con pequeño offset
    const x = radius * Math.sin(currentPhi) * Math.cos(currentAngle);
    const y = radius * Math.cos(currentPhi);
    const z = radius * Math.sin(currentPhi) * Math.sin(currentAngle);
    
    // Posicionar directamente el mesh en la superficie del planeta
    this.mesh.position.set(x, y, z);
    
    // Orientar el mesh para que mire hacia afuera desde la superficie
    this.mesh.lookAt(x * 2, y * 2, z * 2);
    
    // Rotación sobre sí mismo controlado por inner_rotation_speed
    const selfRotationAngle = time * this.rotationSpeed;
    this.mesh.rotateZ(selfRotationAngle * 0.01); // Aplicar incrementalmente para evitar acumulación
  }

  update(_deltaTime: number, time: number): void {
    // Actualizar posición basada en tiempo absoluto
    this.updatePosition(time);

    // Actualizar material
    this.material.uniforms.uTime.value = time;
  }

  getMesh(): THREE.Mesh {
    return this.mesh;
  }

  dispose(): void {
    this.material.dispose();
    this.mesh.geometry.dispose();
  }
}

/**
 * Efecto de manchas tóxicas individuales móviles
 */
export class ToxicWasteRenderEffect {
  private spots: ToxicSpot[] = [];
  private planetRadius: number;
  private rng: SeededRandom;
  private startTime: number;
  private proceduralParams: {
    objectCount: number;
    timeSpeed: number;
    moveSpeed?: number;
    innerRotationSpeed?: number;
  };
  private toxicColor: THREE.Color;
  private cosmicOriginTime: number;

  constructor(planetRadius: number, params: ToxicWasteRenderParams = {}) {
    this.planetRadius = planetRadius;

    // Generar valores procedurales usando seed (igual que PulsatingCube)
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);
    
    // Tiempo inicial determinista basado en el seed (igual que PulsatingCube)
    this.startTime = (seed % 10000) / 1000;
    this.cosmicOriginTime = params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;

    // Generar parámetros procedurales globales
    this.proceduralParams = {
      objectCount: Math.floor(this.rng.uniform(PROCEDURAL_RANGES.OBJECT_COUNT.min, PROCEDURAL_RANGES.OBJECT_COUNT.max)),
      timeSpeed: params.timeSpeed || this.rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
      moveSpeed: params.moveSpeed,
      innerRotationSpeed: params.innerRotationSpeed,
    };

    // Color tóxico procedural
    const toxicHue = this.rng.uniform(0.7, 0.95); // Púrpura a magenta
    const toxicSaturation = this.rng.uniform(0.8, 1.0);
    const toxicBrightness = this.rng.uniform(0.5, 0.9);
    this.toxicColor = params.toxicColor || new THREE.Color().setHSL(toxicHue, toxicSaturation, toxicBrightness);

    this.createSpots();
  }

  private createSpots(): void {
    for (let i = 0; i < this.proceduralParams.objectCount; i++) {
      const spotSeed = this.rng.random() * 1000000;
      
      // Color con ligera variación para cada spot
      const hueVariation = this.rng.uniform(-0.05, 0.05);
      const spotColor = this.toxicColor.clone();
      const hsl = {} as any;
      spotColor.getHSL(hsl);
      spotColor.setHSL((hsl.h + hueVariation) % 1.0, hsl.s, hsl.l);

      const spot = new ToxicSpot(this.planetRadius, spotColor, spotSeed, this.proceduralParams.moveSpeed, this.proceduralParams.innerRotationSpeed);
      this.spots.push(spot);
    }
  }

  update(_deltaTime: number = 0.016): void {
    // Usar tiempo animado con timeSpeed (igual que PulsatingCube)
    const currentTime = getAnimatedUniverseTime(this.cosmicOriginTime, this.proceduralParams.timeSpeed, this.startTime);

    this.spots.forEach((spot) => {
      spot.update(_deltaTime, currentTime);
    });
  }

  addToScene(scene: THREE.Scene, position: THREE.Vector3): void {
    this.spots.forEach((spot) => {
      spot.getMesh().position.add(position);
      scene.add(spot.getMesh());
    });
  }

  dispose(): void {
    this.spots.forEach((spot) => spot.dispose());
    this.spots = [];
  }
}

/**
 * Función de utilidad para crear el efecto desde datos de Python
 */
export function createToxicWasteFromPythonData(planetRadius: number, surfaceData: any, globalSeed?: number, params?: Partial<ToxicWasteRenderParams>): ToxicWasteRenderEffect | null {
  // Solo aplicar a planetas tóxicos
  if (!surfaceData || !surfaceData.type || surfaceData.type.toLowerCase() !== "toxic") {
    return null;
  }

  const seed = globalSeed || Math.floor(Math.random() * 1000000);

  // Ahora sí pasamos parámetros específicos para controlar velocidades globalmente
  // Si no se proporcionan, cada spot generará sus propios parámetros basados en PROCEDURAL_RANGES
  return new ToxicWasteRenderEffect(planetRadius, {
    seed: seed + 30000,
    moveSpeed: params?.moveSpeed,
    innerRotationSpeed: params?.innerRotationSpeed,
    timeSpeed: params?.timeSpeed,
    toxicColor: params?.toxicColor,
    ...params
  });
}
