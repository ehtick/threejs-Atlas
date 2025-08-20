/**
 * Planet Rays Effect - Rayos de energía emanando del planeta
 *
 * Simula rayos de energía intermitentes que emanan desde el planeta hacia el espacio,
 * creando un efecto dramático de descargas eléctricas o energéticas.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface PlanetRaysParams {
  rayCount?: number;
  rayIntensity?: number;
  pulseSpeed?: number;
  rayLength?: number;
  rayThickness?: number;
  seed?: number;
  timeSpeed?: number;
  startTime?: number;
  colorVariation?: number;
}

const PROCEDURAL_RANGES = {
  RAY_COUNT: { min: 8, max: 33 },
  RAY_INTENSITY: { min: 0.5, max: 2 },
  PULSE_SPEED: { min: 1.0, max: 6.0 },
  RAY_LENGTH: { min: 0.5, max: 2.5 },
  RAY_THICKNESS: { min: 0.02, max: 0.15 },
  TIME_SPEED: { min: 0.8, max: 1.5 },
  COLOR_VARIATION: { min: 0.2, max: 0.6 },
};

export class PlanetRaysEffect {
  private rays: THREE.Line[];
  private group: THREE.Group;
  private params: PlanetRaysParams;
  private startTime: number;
  private rayMaterials: THREE.LineBasicMaterial[];
  private rayData: Array<{
    startPos: THREE.Vector3;
    endPos: THREE.Vector3;
    phase: number;
    frequency: number;
    color: THREE.Color;
    activationOffset: number; // Para que no todos empiecen al mismo tiempo
  }>;
  
  // Parámetros de tormenta específicos del planeta
  private stormFreq1: number;
  private stormFreq2: number;
  private stormThreshold: number;

  constructor(planetRadius: number, params: PlanetRaysParams = {}) {
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);

    // Tiempo inicial determinista basado en el seed (EXACTAMENTE como PolarHexagon)
    this.startTime = params.startTime || (seed % 10000) / 1000;

    this.params = {
      rayCount: params.rayCount || Math.floor(rng.uniform(PROCEDURAL_RANGES.RAY_COUNT.min, PROCEDURAL_RANGES.RAY_COUNT.max)),
      rayIntensity: params.rayIntensity || rng.uniform(PROCEDURAL_RANGES.RAY_INTENSITY.min, PROCEDURAL_RANGES.RAY_INTENSITY.max),
      pulseSpeed: params.pulseSpeed || rng.uniform(PROCEDURAL_RANGES.PULSE_SPEED.min, PROCEDURAL_RANGES.PULSE_SPEED.max),
      rayLength: params.rayLength || rng.uniform(PROCEDURAL_RANGES.RAY_LENGTH.min, PROCEDURAL_RANGES.RAY_LENGTH.max),
      rayThickness: params.rayThickness || rng.uniform(PROCEDURAL_RANGES.RAY_THICKNESS.min, PROCEDURAL_RANGES.RAY_THICKNESS.max),
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
      colorVariation: params.colorVariation || rng.uniform(PROCEDURAL_RANGES.COLOR_VARIATION.min, PROCEDURAL_RANGES.COLOR_VARIATION.max),
      seed: seed,
      startTime: this.startTime,
    };

    // Inicializar parámetros de tormenta específicos del planeta usando seedOffset
    const seedOffset = (seed % 1000) / 1000; // Normalizar seed a 0-1
    this.stormFreq1 = 0.01 + seedOffset * 0.005; // Frecuencia base + variación por seed
    this.stormFreq2 = 0.003 + seedOffset * 0.002; // Frecuencia secundaria + variación por seed
    this.stormThreshold = 0.75 + seedOffset * 0.15; // Umbral variable por planeta

    this.group = new THREE.Group();
    this.rays = [];
    this.rayMaterials = [];
    this.rayData = [];

    this.generateRays(planetRadius, rng);
  }

  private generateRays(planetRadius: number, rng: SeededRandom): void {
    const rayCount = this.params.rayCount!;

    for (let i = 0; i < rayCount; i++) {
      // Crear puntos para el rayo con zigzag
      const points: THREE.Vector3[] = [];

      // Punto de inicio en la superficie del planeta
      const startPosData = rng.spherePosition(planetRadius * 1.05);
      const startPos = new THREE.Vector3(startPosData.x, startPosData.y, startPosData.z);

      // Punto final alejado del planeta
      const endDistance = planetRadius * (2.0 + this.params.rayLength! * rng.uniform(0.8, 1.2));
      const endDirection = startPos.clone().normalize();
      const endPos = endDirection.multiplyScalar(endDistance);

      // Crear el rayo con segmentos para zigzag
      const segments = 8 + Math.floor(rng.uniform(0, 5));

      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const pos = new THREE.Vector3().lerpVectors(startPos, endPos, t);

        // Añadir desviación aleatoria excepto en los extremos
        if (j > 0 && j < segments) {
          const offsetData = rng.spherePosition(planetRadius * 0.05 * (1.0 - t)); // Menos desviación hacia el final
          const offset = new THREE.Vector3(offsetData.x, offsetData.y, offsetData.z);
          pos.add(offset);
        }

        points.push(pos);
      }

      // Crear geometría del rayo
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      // Color del rayo con variación
      const baseHue = 200 + rng.uniform(-30, 30); // Azul-cyan base
      const saturation = 0.8 + rng.uniform(-0.2, 0.2);
      const lightness = 0.6 + rng.uniform(-0.1, 0.1);

      const color = new THREE.Color();
      color.setHSL(baseHue / 360, saturation, lightness);

      // Añadir variación de color
      const colorShift = this.params.colorVariation!;
      color.r = Math.min(1.0, color.r + rng.uniform(-colorShift, colorShift));
      color.g = Math.min(1.0, color.g + rng.uniform(-colorShift, colorShift));
      color.b = Math.min(1.0, color.b + rng.uniform(-colorShift, colorShift));

      // Material del rayo
      const material = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0,
        linewidth: this.params.rayThickness! * 100, // LineBasicMaterial linewidth está limitado en WebGL
        blending: THREE.AdditiveBlending,
      });

      // Crear el rayo
      const ray = new THREE.Line(geometry, material);

      // Guardar datos del rayo para animación determinista
      this.rayData.push({
        startPos: startPos,
        endPos: endPos,
        phase: rng.uniform(0, Math.PI * 2),
        frequency: this.params.pulseSpeed! * rng.uniform(0.8, 1.2),
        color: color,
        activationOffset: rng.uniform(0, 100), // Offset para que cada rayo tenga su propio patrón
      });

      this.rays.push(ray);
      this.rayMaterials.push(material);
      this.group.add(ray);
    }

    // Añadir rayos adicionales más delgados para detalles
    const detailRayCount = Math.floor(rayCount * 0.5);

    for (let i = 0; i < detailRayCount; i++) {
      const points: THREE.Vector3[] = [];

      // Punto de inicio
      const startPosData = rng.spherePosition(planetRadius * 1.02);
      const startPos = new THREE.Vector3(startPosData.x, startPosData.y, startPosData.z);

      // Punto final más corto
      const endDistance = planetRadius * (1.5 + this.params.rayLength! * 0.5 * rng.uniform(0.6, 1.0));
      const endDirection = startPos.clone().normalize();
      // Añadir algo de desviación angular
      const deviationData = rng.spherePosition(0.2);
      const deviation = new THREE.Vector3(deviationData.x, deviationData.y, deviationData.z);
      endDirection.add(deviation).normalize();
      const endPos = endDirection.multiplyScalar(endDistance);

      // Menos segmentos para rayos de detalle
      const segments = 4 + Math.floor(rng.uniform(0, 3));

      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const pos = new THREE.Vector3().lerpVectors(startPos, endPos, t);

        if (j > 0 && j < segments) {
          const offsetData = rng.spherePosition(planetRadius * 0.02 * (1.0 - t));
          const offset = new THREE.Vector3(offsetData.x, offsetData.y, offsetData.z);
          pos.add(offset);
        }

        points.push(pos);
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      // Color para rayos de detalle con variación procedural
      const baseHue = 200 + rng.uniform(-30, 30); // Azul-cyan base
      const saturation = 0.6 + rng.uniform(-0.2, 0.2); // Más tenue que los principales
      const lightness = 0.4 + rng.uniform(-0.1, 0.1); // Más oscuro que los principales
      
      const color = new THREE.Color();
      color.setHSL(baseHue / 360, saturation, lightness);
      
      // Añadir variación de color usando COLOR_VARIATION
      const colorShift = this.params.colorVariation! * 0.7; // Menos variación que los principales
      color.r = Math.min(1.0, color.r + rng.uniform(-colorShift, colorShift));
      color.g = Math.min(1.0, color.g + rng.uniform(-colorShift, colorShift));
      color.b = Math.min(1.0, color.b + rng.uniform(-colorShift, colorShift));

      const material = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0,
        linewidth: this.params.rayThickness! * 50,
        blending: THREE.AdditiveBlending,
      });

      const ray = new THREE.Line(geometry, material);

      this.rayData.push({
        startPos: startPos,
        endPos: endPos,
        phase: rng.uniform(0, Math.PI * 2),
        frequency: this.params.pulseSpeed! * rng.uniform(1.5, 2.5), // Más rápido para detalles
        color: color,
        activationOffset: rng.uniform(0, 150), // Offset diferente para rayos de detalle
      });

      this.rays.push(ray);
      this.rayMaterials.push(material);
      this.group.add(ray);
    }
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.group.position.copy(planetPosition);
    }
    scene.add(this.group);
  }

  update(): void {
    // Calcular tiempo absoluto determinista EXACTAMENTE como PolarHexagon
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000; // Mantener en ciclo de 1000 segundos como PolarHexagon

    // Animar cada rayo usando solo el tiempo determinista (sin sistema complejo de estados)
    this.rayMaterials.forEach((material, index) => {
      const data = this.rayData[index];

      // Calcular intensidad basada únicamente en el tiempo y frecuencia del rayo
      const phase = currentTime * data.frequency + data.phase;
      const rayTime = (currentTime + data.activationOffset) * 0.1; // Factor para controlar velocidad general

      // Crear patrón de activación esporádica usando funciones seno
      const activationPattern = Math.sin(rayTime) * Math.sin(rayTime * 0.3) * Math.sin(rayTime * 0.7);
      const isActive = activationPattern > 0.2; // Solo activo cuando el patrón es alto

      if (isActive) {
        // Intensidad principal basada en el patrón
        const baseIntensity = Math.max(0, (activationPattern - 0.2) / 0.8);

        // Efectos adicionales
        const mainPulse = Math.sin(phase) * 0.3 + 0.7;
        const flicker = Math.sin(phase * 12.0) > 0.9 ? 1.5 : 1.0;

        // Verificar si estamos en modo tormenta específico del planeta
        const stormPattern = Math.sin(currentTime * this.stormFreq1) * Math.sin(currentTime * this.stormFreq2);
        const isStormTime = stormPattern > this.stormThreshold;
        const stormBoost = isStormTime ? 1.5 : 1.0;

        // Combinar todos los efectos
        let intensity = baseIntensity * mainPulse * flicker * stormBoost * this.params.rayIntensity!;
        intensity = Math.min(1.0, intensity);

        material.opacity = intensity;

        // Color más brillante durante picos
        if (flicker > 1.2 || stormBoost > 1.2) {
          material.color.setRGB(Math.min(1.0, data.color.r + 0.3), Math.min(1.0, data.color.g + 0.3), Math.min(1.0, data.color.b + 0.3));
        } else {
          material.color.copy(data.color);
        }
      } else {
        // Rayo inactivo
        material.opacity = 0;
      }
    });

    // Rotación determinista del grupo
    this.group.rotation.y = currentTime * 0.005;
    this.group.rotation.x = Math.sin(currentTime * 0.002) * 0.1;
  }

  getObject3D(): THREE.Group {
    return this.group;
  }

  dispose(): void {
    this.rays.forEach((ray) => {
      (ray.geometry as THREE.BufferGeometry).dispose();
      (ray.material as THREE.Material).dispose();
    });
  }
}

export function createPlanetRaysFromPythonData(planetRadius: number, _rayData: any, globalSeed?: number): PlanetRaysEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 7777);

  // CRÍTICO: Generar timeSpeed PRIMERO para que coincida con PulsatingCube
  const timeSpeed = rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max);

  // Tiempo inicial determinista basado en el seed (EXACTAMENTE igual que PulsatingCube)
  const startTime = (seed % 10000) / 1000;

  const params: PlanetRaysParams = {
    rayCount: Math.floor(rng.uniform(PROCEDURAL_RANGES.RAY_COUNT.min, PROCEDURAL_RANGES.RAY_COUNT.max)),
    rayIntensity: rng.uniform(PROCEDURAL_RANGES.RAY_INTENSITY.min, PROCEDURAL_RANGES.RAY_INTENSITY.max),
    pulseSpeed: rng.uniform(PROCEDURAL_RANGES.PULSE_SPEED.min, PROCEDURAL_RANGES.PULSE_SPEED.max),
    rayLength: rng.uniform(PROCEDURAL_RANGES.RAY_LENGTH.min, PROCEDURAL_RANGES.RAY_LENGTH.max),
    rayThickness: rng.uniform(PROCEDURAL_RANGES.RAY_THICKNESS.min, PROCEDURAL_RANGES.RAY_THICKNESS.max),
    timeSpeed: timeSpeed,
    colorVariation: rng.uniform(PROCEDURAL_RANGES.COLOR_VARIATION.min, PROCEDURAL_RANGES.COLOR_VARIATION.max),
    seed,
    startTime: startTime,
  };

  return new PlanetRaysEffect(planetRadius, params);
}
