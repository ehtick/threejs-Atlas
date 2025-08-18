/**
 * Tundra Snowflakes Effect - Copos de nieve flotando sobre planetas tundra
 */

import * as THREE from 'three';
import { SeededRandom } from '../Utils/SeededRandom';

export interface TundraSnowflakesParams {
  particleCount?: number;
  windSpeed?: number;
  size?: number;
  opacity?: number;
  colors?: THREE.Color[];
  seed?: number;
}

/**
 * Efecto de copos de nieve para planetas tundra
 * Simula copos de nieve flotando alrededor del planeta con movimiento simple
 */
export class TundraSnowflakesEffect {
  private snowflakeGroup: THREE.Group;
  private planetRadius: number;
  private materials: THREE.PointsMaterial[] = [];
  private particleSystems: THREE.Points[] = [];
  private originalPositions: Float32Array[] = [];
  private windSpeed: number;
  private globalWindDirection: number;
  private rng: SeededRandom;
  private startTime: number;
  private timeSpeed: number;
  // Sin estelas

  constructor(planetRadius: number, params: TundraSnowflakesParams = {}) {
    this.snowflakeGroup = new THREE.Group();
    this.planetRadius = planetRadius;
    
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);
    
    // Configuración - VALORES EXACTOS QUE FUNCIONARON
    const particleCount = params.particleCount || 50; // POCAS para ver bien
    this.windSpeed = params.windSpeed || 3.0; 
    const baseSize = (params.size || 1.0) * (planetRadius * 0.2); // GIGANTE como funcionó
    const opacity = params.opacity || 1.0;
    
    // Dirección global del viento - todas las partículas van en esta dirección
    this.globalWindDirection = this.rng.uniform(0, Math.PI * 2);
    
    // Parámetros de tiempo procedural - VELOCIDAD ALTA para estelas
    this.startTime = this.rng.uniform(0, 1000); // Tiempo inicial aleatorio
    this.timeSpeed = this.rng.uniform(2.0, 4.0); // Velocidad procedural MÁS ALTA
    
    // COLORES EXACTOS QUE FUNCIONARON
    const colors = params.colors || [
      new THREE.Color(1.0, 0.0, 0.0),  // ROJO PURO
      new THREE.Color(0.0, 1.0, 0.0),  // VERDE PURO
      new THREE.Color(0.0, 0.0, 1.0),  // AZUL PURO
      new THREE.Color(1.0, 1.0, 0.0),  // AMARILLO PURO
      new THREE.Color(1.0, 0.0, 1.0)   // MAGENTA PURO
    ];

    this.createSnowflakeSystem(particleCount, baseSize, opacity, colors);
  }

  private createSnowflakeSystem(
    particleCount: number, 
    baseSize: number, 
    opacity: number, 
    colors: THREE.Color[]
  ): void {
    // Crear geometría
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];

    // Distribuir partículas en la superficie del planeta
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(this.rng.uniform(-1, 1));
      const theta = this.rng.uniform(0, Math.PI * 2);
      
      // PEGADAS a la superficie del planeta
      const surfaceHeight = this.planetRadius * this.rng.uniform(1.001, 1.005); // Muy cerca de la superficie
      
      const x = surfaceHeight * Math.sin(phi) * Math.cos(theta);
      const y = surfaceHeight * Math.cos(phi);
      const z = surfaceHeight * Math.sin(phi) * Math.sin(theta);
      
      vertices.push(x, y, z);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Crear sistemas de partículas para cada tono de gris - TAMAÑOS MÁS GRANDES
    const sizes = [baseSize * 2.0, baseSize * 1.8, baseSize * 1.6, baseSize * 1.4, baseSize * 2.2]; // Todos más grandes
    
    for (let i = 0; i < colors.length; i++) {
      const material = new THREE.PointsMaterial({
        size: sizes[i],
        color: colors[i],
        transparent: true,
        opacity: opacity,
        blending: THREE.NormalBlending, // Normal blending para mejor visibilidad
        depthTest: true, // CON depthTest para respetar la profundidad del planeta
        sizeAttenuation: false // Sin atenuación para tamaño constante
      });
      
      this.materials.push(material);
      
      const particleGeometry = geometry.clone();
      const particles = new THREE.Points(particleGeometry, material);
      
      // Guardar posiciones originales
      this.originalPositions[i] = new Float32Array(vertices);
      
      this.particleSystems.push(particles);
      this.snowflakeGroup.add(particles);
    }
  }

  update(deltaTime: number = 0.016): void {
    // TIEMPO PROCEDURAL DETERMINISTA como AtmosphereClouds
    const rawTime = this.startTime + (Date.now() / 1000) * this.timeSpeed;
    const currentTime = rawTime % 1000; // Ciclo de 1000 segundos
    
    // ROTACIÓN PROCEDURAL DEL SISTEMA COMPLETO - VELOCIDAD ALTA para estelas
    // Todas las partículas rotan juntas en la dirección del viento
    this.snowflakeGroup.rotation.y = currentTime * 0.5; // Velocidad de rotación 5x MÁS RÁPIDA
    
    this.particleSystems.forEach((particles, index) => {
      const positionAttribute = particles.geometry.getAttribute('position') as THREE.BufferAttribute;
      const positions = positionAttribute.array as Float32Array;
      const originalPos = this.originalPositions[index];
      
      const particleCount = positions.length / 3;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Posición original
        const originalX = originalPos[i3];
        const originalY = originalPos[i3 + 1];
        const originalZ = originalPos[i3 + 2];
        
        // MOVIMIENTO PROCEDURAL INDIVIDUAL MÁS RÁPIDO para estelas visibles
        // Cada partícula se mueve en la dirección del viento con variación
        const individualMovement = Math.sin(currentTime * 2.0 + i * 0.1) * this.planetRadius * 0.005; // 5x más rápido
        const moveX = Math.cos(this.globalWindDirection) * individualMovement;
        const moveZ = Math.sin(this.globalWindDirection) * individualMovement;
        
        // Movimiento vertical más rápido para dinamismo
        const moveY = Math.sin(currentTime * 1.5 + i * 0.05) * this.planetRadius * 0.008; // 4x más rápido
        
        positions[i3] = originalX + moveX;
        positions[i3 + 1] = originalY + moveY;
        positions[i3 + 2] = originalZ + moveZ;
      }
      
      positionAttribute.needsUpdate = true;
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.snowflakeGroup.position.copy(planetPosition);
    }
    scene.add(this.snowflakeGroup);
  }

  getObject3D(): THREE.Group {
    return this.snowflakeGroup;
  }

  dispose(): void {
    this.materials.forEach(material => material.dispose());
    this.particleSystems.forEach(particles => particles.geometry.dispose());
    this.materials = [];
    this.particleSystems = [];
    this.originalPositions = [];
    this.snowflakeGroup.clear();
  }
}

/**
 * Función de utilidad para crear el efecto desde datos de Python
 */
export function createTundraSnowflakesFromPythonData(
  planetRadius: number,
  surfaceData: any,
  globalSeed?: number
): TundraSnowflakesEffect | null {
  
  if (surfaceData.type !== 'tundra') {
    return null;
  }
  
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const snowIntensity = surfaceData.snow_intensity || 0.7;
  const windStrength = surfaceData.wind_strength || 1.0;
  
  const particleCount = Math.floor(snowIntensity * 800 + 200); // Menos partículas pero más visibles
  const windSpeed = windStrength * 5.0; // Velocidad MUY alta para estelas muy visibles
  
  return new TundraSnowflakesEffect(planetRadius, {
    particleCount,
    windSpeed,
    size: 1.2,
    opacity: 0.9,
    seed: seed + 15000
  });
}