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
  private globalWindDirection: number;
  private rng: SeededRandom;
  private startTime: number;
  private timeSpeed: number;
  // Sistema de ráfagas procedurales
  private burstZone: { lat: number; lon: number; radius: number }; // Zona de ráfaga
  private burstCycleDuration: number; // Duración del ciclo completo
  private burstDuration: number; // Duración de cada ráfaga
  private burstStartOffset: number; // Offset inicial para determinismo

  constructor(planetRadius: number, params: TundraSnowflakesParams = {}) {
    this.snowflakeGroup = new THREE.Group();
    this.planetRadius = planetRadius;
    
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);
    
    // Configuración - VALORES EXACTOS QUE FUNCIONARON
    const particleCount = params.particleCount || 50; // POCAS para ver bien
    const windSpeed = params.windSpeed || 3.0; 
    const baseSize = (params.size || 1.0) * (planetRadius * 0.2); // GIGANTE como funcionó
    const opacity = params.opacity || 1.0;
    
    // Dirección global del viento - todas las partículas van en esta dirección
    this.globalWindDirection = this.rng.uniform(0, Math.PI * 2);
    
    // Parámetros de tiempo procedural - VELOCIDAD ALTA para estelas
    this.startTime = this.rng.uniform(0, 1000); // Tiempo inicial aleatorio
    this.timeSpeed = this.rng.uniform(2.0, 4.0); // Velocidad procedural MÁS ALTA
    
    // CONFIGURACIÓN DE ZONA ESTIRADA
    // Zona específica donde aparecen los copos (latitud/longitud en radianes)
    this.burstZone = {
      lat: this.rng.uniform(-Math.PI / 3, Math.PI / 3), // Latitud más limitada para franja
      lon: this.rng.uniform(0, Math.PI * 2), // Longitud aleatoria como centro
      radius: this.rng.uniform(1.2, 2.0) // Radio MÁS GRANDE para zona estirada
    };
    
    // Configuración temporal de ráfagas
    this.burstCycleDuration = this.rng.uniform(45, 75); // Ciclo completo: 45-75 segundos
    this.burstDuration = this.rng.uniform(8, 15); // Ráfaga activa: 8-15 segundos
    this.burstStartOffset = this.rng.uniform(0, this.burstCycleDuration); // Offset inicial
    
    // TONOS DE GRIS PARA COPOS DE NIEVE REALISTAS
    const colors = params.colors || [
      new THREE.Color(1.0, 1.0, 1.0),  // Blanco puro
      new THREE.Color(0.9, 0.9, 0.9),  // Gris muy claro
      new THREE.Color(0.7, 0.7, 0.7),  // Gris medio claro  
      new THREE.Color(0.5, 0.5, 0.5),  // Gris medio
      new THREE.Color(0.3, 0.3, 0.3)   // Gris oscuro
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

    // Distribuir partículas SOLO EN LA ZONA DE RÁFAGA
    for (let i = 0; i < particleCount; i++) {
      // Generar posición dentro de la zona de ráfaga usando distribución normal aproximada
      let phi: number, theta: number, distanceFromCenter: number;
      let attempts = 0;
      
      do {
        // DISTRIBUCIÓN ESTIRADA: concentrada en latitud, extendida en longitud
        const latOffset = (this.rng.uniform(-1, 1) + this.rng.uniform(-1, 1)) * 0.2; // MUY concentrada en latitud
        const lonOffset = this.rng.uniform(-1, 1) * this.burstZone.radius; // MUY extendida en longitud
        
        phi = Math.max(0, Math.min(Math.PI, this.burstZone.lat + Math.PI/2 + latOffset));
        theta = (this.burstZone.lon + lonOffset) % (Math.PI * 2);
        
        // Criterio de aceptación más permisivo para zona estirada
        const latDistance = Math.abs(phi - (this.burstZone.lat + Math.PI/2));
        const lonDistance = Math.min(
          Math.abs(theta - this.burstZone.lon),
          Math.PI * 2 - Math.abs(theta - this.burstZone.lon)
        );
        
        // Zona válida si está dentro de los límites estirados
        distanceFromCenter = Math.max(latDistance / 0.3, lonDistance / this.burstZone.radius);
        
        attempts++;
      } while (distanceFromCenter > 1.0 && attempts < 10);
      
      // Si no se encontró posición válida, usar posición aleatoria en la franja
      if (distanceFromCenter > 1.0) {
        phi = this.burstZone.lat + Math.PI/2 + this.rng.uniform(-0.1, 0.1);
        theta = this.burstZone.lon + this.rng.uniform(-this.burstZone.radius, this.burstZone.radius);
      }
      
      // PEGADAS a la superficie del planeta
      const surfaceHeight = this.planetRadius * this.rng.uniform(1.001, 1.005);
      
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

  update(_deltaTime: number = 0.016): void {
    // TIEMPO PROCEDURAL DETERMINISTA como AtmosphereClouds
    const rawTime = this.startTime + (Date.now() / 1000) * this.timeSpeed;
    const currentTime = rawTime % 1000; // Ciclo de 1000 segundos
    
    // CALCULAR INTENSIDAD DE RÁFAGA PROCEDURAL
    const realTime = Date.now() / 1000; // Tiempo real para ráfagas
    const burstTime = (realTime + this.burstStartOffset) % this.burstCycleDuration;
    let burstIntensity = 0;
    
    if (burstTime < this.burstDuration) {
      // Durante la ráfaga: fade-in y fade-out suave
      const burstProgress = burstTime / this.burstDuration;
      if (burstProgress < 0.2) {
        // Fade-in: primeros 20% de la ráfaga
        burstIntensity = burstProgress / 0.2;
      } else if (burstProgress > 0.8) {
        // Fade-out: últimos 20% de la ráfaga  
        burstIntensity = (1 - burstProgress) / 0.2;
      } else {
        // Intensidad completa: 60% del medio
        burstIntensity = 1;
      }
    }
    
    // DEBUG: Temporalmente siempre visible para verificar funcionamiento
    this.snowflakeGroup.visible = true; // TEMPORAL - siempre visible
    
    // DEBUG: Log de intensidad cada 5 segundos
    if (Math.floor(burstTime) % 5 === 0 && burstTime % 1 < 0.1) {
      console.log("❄️ Burst Debug:", { 
        burstTime: Math.round(burstTime), 
        burstIntensity: Math.round(burstIntensity * 100) / 100,
        cycleDuration: Math.round(this.burstCycleDuration),
        burstDuration: Math.round(this.burstDuration)
      });
    }
    
    // ROTACIÓN PROCEDURAL DEL SISTEMA COMPLETO - VELOCIDAD ALTA
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
        
        // MOVIMIENTO PROCEDURAL INDIVIDUAL MÁS RÁPIDO
        // Cada partícula se mueve en la dirección del viento con variación
        const individualMovement = Math.sin(currentTime * 2.0 + i * 0.1) * this.planetRadius * 0.005;
        const moveX = Math.cos(this.globalWindDirection) * individualMovement;
        const moveZ = Math.sin(this.globalWindDirection) * individualMovement;
        
        // Movimiento vertical más rápido para dinamismo
        const moveY = Math.sin(currentTime * 1.5 + i * 0.05) * this.planetRadius * 0.008;
        
        positions[i3] = originalX + moveX;
        positions[i3 + 1] = originalY + moveY;
        positions[i3 + 2] = originalZ + moveZ;
      }
      
      positionAttribute.needsUpdate = true;
      
      // DEBUG: Opacidad temporal fija para verificar funcionamiento
      this.materials[index].opacity = 1.0; // TEMPORAL - siempre visible
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