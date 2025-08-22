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
  private materials: THREE.LineBasicMaterial[] = [];
  private particleSystems: THREE.Line[] = [];
  private trailPositions: Float32Array[] = [];
  private trailColors: Float32Array[] = [];
  private globalWindDirection: number;
  private rng: SeededRandom;
  private startTime: number;
  private timeSpeed: number;
  // Trail configuration
  private trailLength: number = 15; // Number of points in each trail
  private particleCount: number;
  // Procedural parameters based on seed
  private rotationSpeed: number;
  private particleOpacity: number;
  private windSpeedMultiplier: number;
  private verticalOscillation: number;
  // Wind gust system
  private gustCycles: number[];
  private gustPhases: number[];
  private gustZones: { start: number; end: number }[];
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
    this.particleCount = params.particleCount || 10; // POCAS para ver bien
    const windSpeed = params.windSpeed || 3.0; 
    const baseSize = (params.size || 1.0) * (planetRadius * 0.2); // GIGANTE como funcionó
    const opacity = params.opacity || 1.0;
    
    // Dirección global del viento - todas las partículas van en esta dirección
    this.globalWindDirection = this.rng.uniform(0, Math.PI * 2);
    
    // Parámetros de tiempo procedural - VELOCIDAD ALTA para estelas
    this.startTime = this.rng.uniform(0, 1000); // Tiempo inicial aleatorio
    this.timeSpeed = this.rng.uniform(2.0, 4.0); // Velocidad procedural MÁS ALTA
    
    // Procedural parameters unique to each planet based on seed
    this.rotationSpeed = this.rng.uniform(0.2, 0.8); // Rotation speed multiplier
    this.particleOpacity = this.rng.uniform(0.05, 0.25); // Opacity between 5-25%
    this.windSpeedMultiplier = this.rng.uniform(1.1, 2.5); // Wind speed variation
    this.verticalOscillation = this.rng.uniform(0.10, 0.40); // Vertical movement amplitude
    
    // Initialize wind gust system - each particle has its own cycle
    this.gustCycles = [];
    this.gustPhases = [];
    this.gustZones = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.gustCycles.push(this.rng.uniform(15, 30)); // Cycle duration 15-30 seconds
      this.gustPhases.push(this.rng.uniform(0, 1)); // Random phase offset
      // Define specific longitude zones where wind appears (not full planet)
      const zoneStart = this.rng.uniform(0, Math.PI * 2);
      const zoneWidth = this.rng.uniform(Math.PI * 0.3, Math.PI * 0.6); // 30-60% of planet circumference
      this.gustZones.push({ 
        start: zoneStart, 
        end: (zoneStart + zoneWidth) % (Math.PI * 2) 
      });
    }
    
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

    this.createSnowflakeSystem(this.particleCount, baseSize, opacity, colors);
  }

  private createSnowflakeSystem(
    particleCount: number, 
    baseSize: number, 
    opacity: number, 
    colors: THREE.Color[]
  ): void {
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
    
    // Generate color gradients for trails (bright to fade)
    const trailColors: number[] = [];
    const baseColor = new THREE.Color();
    
    for (let i = 0; i < this.trailLength; i++) {
      const intensity = Math.pow(1 - i / (this.trailLength - 1), 1.5); // Slower fade for more visibility
      baseColor.setRGB(intensity, intensity, intensity); // Pure white with fade
      trailColors.push(baseColor.r, baseColor.g, baseColor.b);
    }

    // Create individual trail lines for each particle
    for (let particleIndex = 0; particleIndex < particleCount; particleIndex++) {
      // Use the position we already calculated
      const baseIndex = particleIndex * 3;
      const startX = vertices[baseIndex];
      const startY = vertices[baseIndex + 1];
      const startZ = vertices[baseIndex + 2];

      // Create trail positions (spread out initially for immediate visibility)
      const positions = new Float32Array(this.trailLength * 3);
      for (let i = 0; i < this.trailLength; i++) {
        const offsetScale = i * 0.1;
        positions[i * 3] = startX + (this.rng.uniform(-1, 1) * offsetScale * this.planetRadius * 0.01);
        positions[i * 3 + 1] = startY + (this.rng.uniform(-1, 1) * offsetScale * this.planetRadius * 0.01);
        positions[i * 3 + 2] = startZ + (this.rng.uniform(-1, 1) * offsetScale * this.planetRadius * 0.01);
      }

      // Create geometry for this trail
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(trailColors), 3));

      // Create material with visible settings
      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: this.particleOpacity, // Use procedural opacity based on seed
        blending: THREE.NormalBlending, // Normal blending for better visibility
        depthTest: true,
        linewidth: 3 // Thicker lines for visibility (may not work on all systems)
      });

      // Create line object
      const line = new THREE.Line(geometry, material);
      
      // Store references
      this.materials.push(material);
      this.particleSystems.push(line);
      this.trailPositions.push(positions);
      this.trailColors.push(new Float32Array(trailColors));
      
      // Add random offset for varied movement
      (line as any).rnd = this.rng.uniform(0, 1);
      (line as any).particleIndex = particleIndex;
      
      this.snowflakeGroup.add(line);
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

    // this.snowflakeGroup.rotation.y = currentTime * this.rotationSpeed; // Disabled for zone-based wind
    
    this.particleSystems.forEach((line, index) => {
      const positionAttribute = line.geometry.getAttribute('position') as THREE.BufferAttribute;
      const positions = positionAttribute.array as Float32Array;
      const rnd = (line as any).rnd;
      const particleIndex = (line as any).particleIndex;
      
      // Calculate new head position using the trail path function
      const newPos = this.calculateTrailPath(currentTime, particleIndex, rnd);
      
      // Shift trail positions: move each point to the next position
      for (let i = this.trailLength - 1; i > 0; i--) {
        const currentIndex = i * 3;
        const previousIndex = (i - 1) * 3;
        
        positions[currentIndex] = positions[previousIndex];
        positions[currentIndex + 1] = positions[previousIndex + 1];
        positions[currentIndex + 2] = positions[previousIndex + 2];
      }
      
      // Set new head position
      positions[0] = newPos.x;
      positions[1] = newPos.y;
      positions[2] = newPos.z;
      
      positionAttribute.needsUpdate = true;
      
      // Calculate gust intensity for this particle (fade in/out effect)
      const realTime = Date.now() / 1000;
      const gustCycle = this.gustCycles[index];
      const gustPhase = this.gustPhases[index];
      const gustProgress = ((realTime / gustCycle) + gustPhase) % 1;
      
      // Create smooth fade in/out curve
      let gustIntensity = 0;
      if (gustProgress < 0.3) {
        // Fade in (30% of cycle)
        gustIntensity = gustProgress / 0.3;
      } else if (gustProgress < 0.7) {
        // Full intensity (40% of cycle)
        gustIntensity = 1;
      } else {
        // Fade out (30% of cycle)
        gustIntensity = (1 - gustProgress) / 0.3;
      }
      
      // Check if particle is in its active zone
      const headPos = new THREE.Vector3(positions[0], positions[1], positions[2]);
      const theta = Math.atan2(headPos.z, headPos.x);
      const normalizedTheta = theta < 0 ? theta + Math.PI * 2 : theta;
      const zone = this.gustZones[index];
      
      let inZone = false;
      if (zone.start < zone.end) {
        inZone = normalizedTheta >= zone.start && normalizedTheta <= zone.end;
      } else {
        // Zone wraps around 0
        inZone = normalizedTheta >= zone.start || normalizedTheta <= zone.end;
      }
      
      // Set opacity based on gust intensity and zone
      this.materials[index].opacity = inZone ? this.particleOpacity * gustIntensity : 0;
    });
  }

  private calculateTrailPath(t: number, particleIndex: number, rnd: number): { x: number; y: number; z: number } {
    // Adjust time with randomness for varied movement
    t += 10 * rnd + particleIndex * 0.1;
    
    // Get initial position on planet surface (spherical coordinates)
    const initialTheta = this.burstZone.lon + (rnd - 0.5) * this.burstZone.radius;
    const initialPhi = this.burstZone.lat + Math.PI/2 + (rnd - 0.5) * 0.2;
    
    // Movement along the surface horizontally (only theta changes, phi stays mostly constant)
    const windSpeed = this.windSpeedMultiplier; // Use procedural wind speed based on seed
    const surfaceMovement = t * windSpeed;
    
    // Horizontal movement: only change longitude (theta), keep latitude (phi) stable
    const newTheta = initialTheta + Math.cos(this.globalWindDirection) * surfaceMovement;
    const newPhi = initialPhi + this.verticalOscillation * Math.sin(t * 0.5 + rnd); // Procedural vertical oscillation
    
    // Small height oscillation for natural movement but stay very close to surface
    const heightOscillation = 0.015 * Math.sin(t * 2 + rnd * 10);
    
    // Stay close to planet surface
    const surfaceDistance = this.planetRadius * (1.005 + heightOscillation);
    
    const x = surfaceDistance * Math.sin(newPhi) * Math.cos(newTheta);
    const y = surfaceDistance * Math.cos(newPhi);
    const z = surfaceDistance * Math.sin(newPhi) * Math.sin(newTheta);
    
    return { x, y, z };
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
    this.particleSystems.forEach(line => line.geometry.dispose());
    this.materials = [];
    this.particleSystems = [];
    this.trailPositions = [];
    this.trailColors = [];
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
  
  const particleCount = Math.floor(snowIntensity * 200 + 50); // Menos partículas pero más visibles
  const windSpeed = windStrength * 5.0; // Velocidad MUY alta para estelas muy visibles
  
  return new TundraSnowflakesEffect(planetRadius, {
    particleCount,
    windSpeed,
    size: 1.2,
    opacity: 0.9,
    seed: seed + 15000
  });
}