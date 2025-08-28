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
  toxicColor?: THREE.Color;
  debrisColor?: THREE.Color;
  seed?: number;
  timeSpeed?: number; // Velocidad del tiempo para sincronización (0.1 - 3.0)
  cosmicOriginTime?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  SPOT_COUNT: { min: 6, max: 12 }, // Cantidad de manchas tóxicas
  SPOT_SIZE: { min: 0.8, max: 2.5 }, // Tamaño de cada mancha
  MOVE_SPEED: { min: 0.1, max: 0.3 }, // Velocidad de movimiento orbital
  PULSE_AMPLITUDE: { min: 0.1, max: 0.3 }, // Intensidad de pulsación
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

  constructor(planetRadius: number, size: number, toxicColor: THREE.Color, seed: number, moveSpeed: number) {

    // Crear un parche esférico que se curve con el planeta
    // Usamos una pequeña sección de esfera que se ajusta a la superficie
    const angularSize = size / planetRadius; // Convertir tamaño lineal a angular
    
    // Crear geometría esférica parcial centrada en el ecuador (será reposicionada)
    const geometry = new THREE.SphereGeometry(
      planetRadius * 1.005, // Radio ligeramente mayor que el planeta
      16, // Segmentos phi (horizontal)
      16, // Segmentos theta (vertical)
      -angularSize/2, // phiStart
      angularSize, // phiLength - solo una pequeña sección
      Math.PI/2 - angularSize/2, // thetaStart 
      angularSize // thetaLength - solo una pequeña sección
    );
    
    this.material = createToxicSpotMaterial(toxicColor, size, seed);
    this.mesh = new THREE.Mesh(geometry, this.material);

    // Posición inicial aleatoria en la superficie (determinista basada en seed)
    const rng = new SeededRandom(seed);
    this.initialAngle = rng.uniform(0, Math.PI * 2);
    this.initialPhi = rng.uniform(0.2, Math.PI - 0.2); // Evitar los polos

    // Velocidades de movimiento aleatorias (deterministas basadas en seed)
    this.angleSpeed = rng.uniform(-0.5, 0.5) * moveSpeed;
    this.phiSpeed = rng.uniform(-0.2, 0.2) * moveSpeed;
  }

  private updatePosition(time: number): void {
    // Calcular rotación basada en tiempo absoluto (determinista)
    const currentAngle = this.initialAngle + (this.angleSpeed * time);
    let currentPhi = this.initialPhi + (this.phiSpeed * time);
    
    // Mantener phi en rango válido con rebote
    const phiRange = Math.PI - 0.4; // 0.2 to PI-0.2
    currentPhi = currentPhi % (phiRange * 2);
    if (currentPhi > phiRange) {
      currentPhi = phiRange * 2 - currentPhi;
    }
    currentPhi = Math.max(0.2, Math.min(Math.PI - 0.2, currentPhi + 0.2));

    // Rotar la geometría esférica completa para posicionar la mancha
    // Primero resetear la rotación
    this.mesh.rotation.set(0, 0, 0);
    
    // Aplicar rotación para mover la mancha a la posición deseada
    this.mesh.rotation.y = currentAngle; // Rotación horizontal (longitude)
    this.mesh.rotation.x = currentPhi - Math.PI/2; // Rotación vertical (latitude)
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
    spotCount: number;
    spotSize: number;
    moveSpeed: number;
    pulseAmplitude: number;
    timeSpeed: number;
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

    // Generar parámetros procedurales
    this.proceduralParams = {
      spotCount: Math.floor(this.rng.uniform(PROCEDURAL_RANGES.SPOT_COUNT.min, PROCEDURAL_RANGES.SPOT_COUNT.max)),
      spotSize: this.rng.uniform(PROCEDURAL_RANGES.SPOT_SIZE.min, PROCEDURAL_RANGES.SPOT_SIZE.max),
      moveSpeed: this.rng.uniform(PROCEDURAL_RANGES.MOVE_SPEED.min, PROCEDURAL_RANGES.MOVE_SPEED.max),
      pulseAmplitude: this.rng.uniform(PROCEDURAL_RANGES.PULSE_AMPLITUDE.min, PROCEDURAL_RANGES.PULSE_AMPLITUDE.max),
      timeSpeed: params.timeSpeed || this.rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
    };

    // Color tóxico procedural
    const toxicHue = this.rng.uniform(0.7, 0.95); // Púrpura a magenta
    const toxicSaturation = this.rng.uniform(0.8, 1.0);
    const toxicBrightness = this.rng.uniform(0.5, 0.9);
    this.toxicColor = params.toxicColor || new THREE.Color().setHSL(toxicHue, toxicSaturation, toxicBrightness);

    this.createSpots();
  }

  private createSpots(): void {
    for (let i = 0; i < this.proceduralParams.spotCount; i++) {
      const spotSeed = this.rng.random() * 1000000;
      const spotSize = this.proceduralParams.spotSize * this.rng.uniform(0.7, 1.3);

      const spot = new ToxicSpot(this.planetRadius, spotSize, this.toxicColor, spotSeed, this.proceduralParams.moveSpeed);

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
export function createToxicWasteFromPythonData(planetRadius: number, surfaceData: any, globalSeed?: number): ToxicWasteRenderEffect | null {
  // Solo aplicar a planetas tóxicos
  if (!surfaceData || !surfaceData.type || surfaceData.type.toLowerCase() !== "toxic") {
    return null;
  }

  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 30000);

  // Parámetros basados en intensidad tóxica
  const toxicIntensity = surfaceData.toxic_intensity || rng.uniform(0.3, 1.0);
  const contamination = surfaceData.contamination_level || rng.uniform(0.2, 0.9);

  // Modificadores basados en datos del planeta
  const intensityMultiplier = 0.6 + toxicIntensity * 0.8;
  const contaminationMultiplier = 0.5 + contamination * 1.0;

  const spotCount = Math.floor(rng.uniform(PROCEDURAL_RANGES.SPOT_COUNT.min * contaminationMultiplier, PROCEDURAL_RANGES.SPOT_COUNT.max * contaminationMultiplier));

  const spotSize = rng.uniform(PROCEDURAL_RANGES.SPOT_SIZE.min, PROCEDURAL_RANGES.SPOT_SIZE.max * intensityMultiplier) * (planetRadius / 20); // Escalar según el tamaño del planeta

  const moveSpeed = rng.uniform(PROCEDURAL_RANGES.MOVE_SPEED.min, PROCEDURAL_RANGES.MOVE_SPEED.max * intensityMultiplier);

  return new ToxicWasteRenderEffect(planetRadius, {
    spotCount,
    spotSize,
    moveSpeed,
    seed: seed + 30000,
  });
}
