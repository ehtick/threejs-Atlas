/**
 * Anomaly Geometric Morph Effect - Teseracto dimensional anómalo
 *
 * Crea un teseracto (hipercubo 4D) que emerge del núcleo del planeta.
 * El teseracto muestra múltiples cubos sólidos semi-transparentes
 * representando la proyección 3D de un objeto 4D.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime";

export interface AnomalyGeometricMorphParams {
  growthSpeed?: number;
  intensity?: number;
  seed?: number;
  timeSpeed?: number;
  planetColor?: THREE.Color;
  cycleDuration?: number;
  cosmicOriginTime?: number;
}

const PROCEDURAL_RANGES = {
  GROWTH_SPEED: { min: 0.5, max: 1.5 },
  INTENSITY: { min: 0.8, max: 1.0 },
  TIME_SPEED: { min: 0.5, max: 1.5 },
  CYCLE_DURATION: { min: 10.0, max: 20.0 }
};

export class AnomalyGeometricMorphEffect {
  private tesseractGroup: THREE.Group;
  private outerCube: THREE.Mesh;
  private innerCube: THREE.Mesh;
  private middleCubes: THREE.Mesh[] = [];
  private params: AnomalyGeometricMorphParams;
  private startTime: number;
  private materials: THREE.MeshPhysicalMaterial[] = [];

  constructor(planetRadius: number, params: AnomalyGeometricMorphParams = {}) {
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    this.startTime = (seed % 10000) / 1000;
    
    this.params = {
      growthSpeed: params.growthSpeed || rng.uniform(PROCEDURAL_RANGES.GROWTH_SPEED.min, PROCEDURAL_RANGES.GROWTH_SPEED.max),
      intensity: params.intensity || rng.uniform(PROCEDURAL_RANGES.INTENSITY.min, PROCEDURAL_RANGES.INTENSITY.max),
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
      cycleDuration: params.cycleDuration || rng.uniform(PROCEDURAL_RANGES.CYCLE_DURATION.min, PROCEDURAL_RANGES.CYCLE_DURATION.max),
      planetColor: params.planetColor || new THREE.Color(1, 1, 1),
      seed: seed,
    };

    // Crear grupo para el teseracto
    this.tesseractGroup = new THREE.Group();

    // Crear el teseracto con múltiples cubos
    this.createTesseractCubes(planetRadius);
  }

  private createTesseractCubes(radius: number): void {
    // Material base con el color del planeta
    const createMaterial = (opacity: number, emissiveIntensity: number = 0) => {
      const mat = new THREE.MeshPhysicalMaterial({
        color: this.params.planetColor,
        transparent: true,
        opacity: opacity,
        emissive: this.params.planetColor,
        emissiveIntensity: emissiveIntensity,
        roughness: 0.3,
        metalness: 0.7,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.NormalBlending
      });
      this.materials.push(mat);
      return mat;
    };

    // Cubo exterior principal (1.25 veces el tamaño del planeta)
    const scaleFactor = 1.25;
    const outerGeometry = new THREE.BoxGeometry(radius * 2 * scaleFactor, radius * 2 * scaleFactor, radius * 2 * scaleFactor);
    this.outerCube = new THREE.Mesh(outerGeometry, createMaterial(0.2, 0.1));
    this.tesseractGroup.add(this.outerCube);

    // Cubo interior central (representa el núcleo 4D)
    const innerGeometry = new THREE.BoxGeometry(radius * 0.75, radius * 0.75, radius * 0.75);
    this.innerCube = new THREE.Mesh(innerGeometry, createMaterial(0.5, 0.3));
    this.tesseractGroup.add(this.innerCube);

    // Cubos intermedios para crear el efecto de teseracto
    // Estos representan las proyecciones intermedias del hipercubo
    const middleSizes = [1.875, 1.5, 1.125]; // Diferentes escalas (ajustadas para el nuevo tamaño)
    
    for (let i = 0; i < middleSizes.length; i++) {
      const size = radius * middleSizes[i];
      const middleGeometry = new THREE.BoxGeometry(size, size, size);
      const opacity = 0.15 + (i * 0.1);
      const middleCube = new THREE.Mesh(middleGeometry, createMaterial(opacity, 0.15));
      this.middleCubes.push(middleCube);
      this.tesseractGroup.add(middleCube);
    }

    // Crear cubos en las esquinas (8 pequeños cubos en los vértices del cubo grande)
    const cornerSize = radius * 0.25;
    const cornerGeometry = new THREE.BoxGeometry(cornerSize, cornerSize, cornerSize);
    const cornerMaterial = createMaterial(0.3, 0.2);
    
    const cornerPositions = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
    ];
    
    cornerPositions.forEach(pos => {
      const cornerCube = new THREE.Mesh(cornerGeometry, cornerMaterial);
      cornerCube.position.set(pos[0] * radius * scaleFactor, pos[1] * radius * scaleFactor, pos[2] * radius * scaleFactor);
      this.tesseractGroup.add(cornerCube);
    });

    // Agregar wireframe opcional para mejor visualización de la estructura
    const wireframeGeometry = new THREE.BoxGeometry(radius * 2 * scaleFactor, radius * 2 * scaleFactor, radius * 2 * scaleFactor);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: this.params.planetColor,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const wireframeCube = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    this.tesseractGroup.add(wireframeCube);
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.tesseractGroup.position.copy(planetPosition);
    }
    scene.add(this.tesseractGroup);
  }

  update(deltaTime: number): void {
    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.params.timeSpeed!, this.startTime);
    
    // Ciclo de aparición y desaparición
    const cycleTime = currentTime % this.params.cycleDuration!;
    const appearDuration = this.params.cycleDuration! * 0.2;
    const holdDuration = this.params.cycleDuration! * 0.3;
    const disappearDuration = this.params.cycleDuration! * 0.2;
    
    let scale = 0;
    
    if (cycleTime < appearDuration) {
      // Fase de aparición
      scale = cycleTime / appearDuration;
      scale = 1 - Math.pow(1 - scale, 3);
    } else if (cycleTime < appearDuration + holdDuration) {
      // Fase visible
      scale = 1.0;
    } else if (cycleTime < appearDuration + holdDuration + disappearDuration) {
      // Fase de desaparición
      const disappearProgress = (cycleTime - appearDuration - holdDuration) / disappearDuration;
      scale = 1.0 - disappearProgress;
      scale = Math.pow(scale, 3);
    } else {
      // Invisible
      scale = 0;
    }
    
    // Aplicar escala al grupo completo
    this.tesseractGroup.scale.set(scale, scale, scale);
    
    // Actualizar opacidad de todos los materiales
    this.materials.forEach((mat, index) => {
      const baseOpacity = index === 0 ? 0.2 : (index === 1 ? 0.5 : 0.15 + (index * 0.05));
      mat.opacity = baseOpacity * scale;
    });
    
    // Rotación 4D del teseracto
    if (scale > 0.1) {
      // Rotación principal del grupo
      this.tesseractGroup.rotation.y += deltaTime * 0.15 * scale;
      this.tesseractGroup.rotation.x += deltaTime * 0.08 * scale;
      
      // Rotación del cubo interior en dirección opuesta (efecto 4D)
      this.innerCube.rotation.y -= deltaTime * 0.25 * scale;
      this.innerCube.rotation.z += deltaTime * 0.15 * scale;
      
      // Rotación de los cubos intermedios a diferentes velocidades
      this.middleCubes.forEach((cube, index) => {
        const speed = 0.1 + (index * 0.05);
        cube.rotation.x += deltaTime * speed * scale;
        cube.rotation.y -= deltaTime * speed * 0.7 * scale;
      });
      
      // Pulsación sutil del cubo interior
      const pulse = 1 + Math.sin(currentTime * 3) * 0.05;
      this.innerCube.scale.set(pulse, pulse, pulse);
    }
  }

  // Método para actualizar el color del planeta dinámicamente
  updatePlanetColor(color: THREE.Color): void {
    this.params.planetColor = color;
    this.materials.forEach(mat => {
      mat.color = color;
      mat.emissive = color;
    });
  }

  getObject3D(): THREE.Group {
    return this.tesseractGroup;
  }

  dispose(): void {
    this.tesseractGroup.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        if (object.material instanceof THREE.Material) {
          object.material.dispose();
        }
      }
    });
    this.materials = [];
  }
}

export function createAnomalyGeometricMorphFromPythonData(planetRadius: number, anomalyData: any, globalSeed?: number): AnomalyGeometricMorphEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 10000);
  
  // Obtener el color real del planeta de los datos
  let planetColor = new THREE.Color(1, 1, 1); // Blanco por defecto
  
  // Intentar obtener el color del planeta de los datos
  if (anomalyData) {
    if (anomalyData.color) {
      // Si el color viene como array RGB [r, g, b]
      if (Array.isArray(anomalyData.color)) {
        planetColor = new THREE.Color(anomalyData.color[0], anomalyData.color[1], anomalyData.color[2]);
      } 
      // Si el color viene como objeto {r, g, b}
      else if (typeof anomalyData.color === 'object') {
        planetColor = new THREE.Color(anomalyData.color.r, anomalyData.color.g, anomalyData.color.b);
      }
      // Si el color viene como string hex
      else if (typeof anomalyData.color === 'string') {
        planetColor = new THREE.Color(anomalyData.color);
      }
    } else if (anomalyData.planetColor) {
      // Alternativamente, buscar planetColor
      planetColor = new THREE.Color(anomalyData.planetColor);
    } else if (anomalyData.baseColor) {
      // O baseColor
      planetColor = new THREE.Color(anomalyData.baseColor);
    }
  }
  
  const params: AnomalyGeometricMorphParams = {
    growthSpeed: rng.uniform(PROCEDURAL_RANGES.GROWTH_SPEED.min, PROCEDURAL_RANGES.GROWTH_SPEED.max),
    intensity: rng.uniform(PROCEDURAL_RANGES.INTENSITY.min, PROCEDURAL_RANGES.INTENSITY.max),
    timeSpeed: rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
    cycleDuration: rng.uniform(PROCEDURAL_RANGES.CYCLE_DURATION.min, PROCEDURAL_RANGES.CYCLE_DURATION.max),
    planetColor: planetColor,
    seed,
  };

  return new AnomalyGeometricMorphEffect(planetRadius, params);
}