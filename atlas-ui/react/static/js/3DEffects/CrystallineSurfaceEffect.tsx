/**
 * Crystalline Surface Effect - Sistema avanzado de cristales para planetas crystalline
 *
 * Implementa efectos visuales sofisticados para planetas cristalinos incluyendo:
 * - Materiales con refracción y transmisión de luz
 * - Texturas procedurales con patrones fractales
 * - Efectos de brillo interno y reflexión
 * - Mapas ambientales para reflexión espacial
 *
 * Responsabilidades:
 * - Crea formaciones cristalinas con física de luz realista
 * - Genera patrones fractales para vetas y fracturas
 * - Implementa brillo interno y efectos luminosos
 * - Se integra con el sistema de iluminación planetaria
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";

export interface CrystallineSurfaceParams {
  crystallinePatches?: any[]; // Datos de cristales desde Python API
  seed?: number;
  density?: number; // Densidad de cristales (0.1 - 2.0)
  baseColor?: THREE.Color | number; // Color base del cristal (cyan por defecto)
  transmission?: number; // Transmisión de luz (0.0 - 1.0)
  ior?: number; // Índice de refracción (1.0 - 2.4)
  roughness?: number; // Rugosidad (0.0 - 1.0)
  metalness?: number; // Metalicidad (0.0 - 1.0)
  glowIntensity?: number; // Intensidad del brillo interno
  refractionStrength?: number; // Fuerza de refracción
  fractureIntensity?: number; // Intensidad de las fracturas
  cosmicOriginTime?: number; // Tiempo de origen cósmico
  timeSpeed?: number; // Velocidad de animación de brillo
}

// Rangos para generación procedural de cristales
const PROCEDURAL_RANGES = {
  CRYSTAL_COUNT: { min: 15, max: 30 }, // Número de formaciones cristalinas
  DENSITY: { min: 0.8, max: 1.8 }, // Densidad de cristales
  SIZE: { min: 0.1, max: 0.4 }, // Tamaños de cristales variados
  TRANSMISSION: { min: 0.6, max: 0.95 }, // Alta transmisión para efecto vidrio
  IOR: { min: 1.4, max: 2.1 }, // Rango de índices de refracción (vidrio a diamante)
  ROUGHNESS: { min: 0.0, max: 0.15 }, // Muy bajo para superficie cristalina
  GLOW_INTENSITY: { min: 0.3, max: 0.8 }, // Intensidad de brillo interno
  HEIGHT: { min: 0.04, max: 0.12 }, // Altura de protuberancias cristalinas
  TIME_SPEED: { min: 0.02, max: 0.08 } // Animación sutil de brillo
};

/**
 * Efecto de Superficie Cristalina
 *
 * Crea efectos avanzados de cristales con:
 * - MeshPhysicalMaterial para refracción realista
 * - Noise procedural para fracturas y vetas
 * - Cubemap starfield para reflexiones espaciales
 * - ShaderMaterial para efectos de brillo interno
 */
export class CrystallineSurfaceEffect {
  private crystallineGroup: THREE.Group;
  private crystallineFormations: THREE.Mesh[] = [];
  private glowMeshes: THREE.Mesh[] = [];
  private animationSpeed: number;
  private startTime: number;
  private envMap: THREE.CubeTexture | null = null;

  constructor(
    private planetRadius: number,
    private params: CrystallineSurfaceParams = {},
    private seededRng?: SeededRandom
  ) {
    this.crystallineGroup = new THREE.Group();
    this.crystallineGroup.name = "CrystallineSurface";
    
    this.animationSpeed = params.timeSpeed || 0.05;
    this.startTime = Date.now();

    // Crear cubemap estrellado para reflexiones
    this.createStarfieldCubemap();
    
    this.generateCrystallineFormations();
  }

  /**
   * Crear cubemap procedural con estrellas para reflexiones
   */
  private createStarfieldCubemap(): void {
    try {
      const size = 512;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext('2d');
      
      if (!context) {
        console.warn('CrystallineSurfaceEffect: Could not get 2D canvas context');
        return;
      }

      const images: HTMLCanvasElement[] = [];
    
    // Crear 6 caras del cubemap con estrellas
    for (let i = 0; i < 6; i++) {
      const faceCanvas = document.createElement('canvas');
      faceCanvas.width = size;
      faceCanvas.height = size;
      const faceContext = faceCanvas.getContext('2d');
      
      if (!faceContext) continue;

      // Fondo azul oscuro espacial
      faceContext.fillStyle = '#001122';
      faceContext.fillRect(0, 0, size, size);
      
      // Añadir estrellas aleatorias
      const starCount = 200 + Math.random() * 300;
      for (let j = 0; j < starCount; j++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const brightness = Math.random();
        const starSize = Math.random() * 2 + 1;
        
        faceContext.fillStyle = `rgba(${255 * brightness}, ${255 * brightness}, 255, ${brightness})`;
        faceContext.beginPath();
        faceContext.arc(x, y, starSize, 0, Math.PI * 2);
        faceContext.fill();
      }
      
      images.push(faceCanvas);
    }
    
      // Crear textura cubemap
      if (images.length === 6) {
        this.envMap = new THREE.CubeTexture(images);
        this.envMap.needsUpdate = true;
      }
    } catch (error) {
      console.error('CrystallineSurfaceEffect: Error creating starfield cubemap:', error);
    }
  }

  /**
   * Generar formaciones cristalinas con materiales avanzados
   */
  private generateCrystallineFormations(): void {
    const crystallineData = this.params.crystallinePatches || this.generateProceduralCrystals();
    
    crystallineData.forEach((crystalData: any, index: number) => {
      this.createCrystalFormation(crystalData, index);
    });
  }

  /**
   * Generar datos procedurales de cristales
   */
  private generateProceduralCrystals(): any[] {
    const rng = this.seededRng || new SeededRandom(this.params.seed || 42);
    const crystalCount = rng.randint(PROCEDURAL_RANGES.CRYSTAL_COUNT.min, PROCEDURAL_RANGES.CRYSTAL_COUNT.max);
    const crystals = [];
    
    for (let i = 0; i < crystalCount; i++) {
      // Distribución uniforme en esfera
      const theta = rng.random() * Math.PI * 2;
      const phi = Math.acos(rng.random() * 2 - 1);
      
      const position_3d = [
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      ];
      
      crystals.push({
        position_3d,
        size: rng.uniform(PROCEDURAL_RANGES.SIZE.min, PROCEDURAL_RANGES.SIZE.max),
        color: [0.0, 0.8 + rng.random() * 0.2, 1.0, 0.9], // Variaciones de cyan
        height: rng.uniform(PROCEDURAL_RANGES.HEIGHT.min, PROCEDURAL_RANGES.HEIGHT.max),
        sides: 6 + Math.floor(rng.random() * 6), // 6-12 lados para formas cristalinas
        transmission: rng.uniform(PROCEDURAL_RANGES.TRANSMISSION.min, PROCEDURAL_RANGES.TRANSMISSION.max),
        ior: rng.uniform(PROCEDURAL_RANGES.IOR.min, PROCEDURAL_RANGES.IOR.max),
        roughness: rng.uniform(PROCEDURAL_RANGES.ROUGHNESS.min, PROCEDURAL_RANGES.ROUGHNESS.max),
        glowIntensity: rng.uniform(PROCEDURAL_RANGES.GLOW_INTENSITY.min, PROCEDURAL_RANGES.GLOW_INTENSITY.max)
      });
    }
    
    return crystals;
  }

  /**
   * Crear formación cristalina individual con efectos avanzados
   */
  private createCrystalFormation(crystalData: any, index: number): void {
    // Posición normalizada en la superficie de la esfera
    const surfaceNormal = new THREE.Vector3(
      crystalData.position_3d[0],
      crystalData.position_3d[1], 
      crystalData.position_3d[2]
    ).normalize();
    
    // Geometría cristalina con múltiples caras
    const geometry = new THREE.ConeGeometry(
      crystalData.size * this.planetRadius * 0.5, // Hacer cristales más pequeños
      crystalData.height * this.planetRadius,
      crystalData.sides
    );
    
    // Añadir ruido procedural a la geometría
    this.applyProceduralNoise(geometry, crystalData.size);
    
    // Material físico avanzado para cristales
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(crystalData.color[0], crystalData.color[1], crystalData.color[2]),
      transmission: crystalData.transmission || 0.8,
      opacity: crystalData.color[3] || 0.9,
      transparent: true,
      ior: crystalData.ior || 1.6,
      roughness: crystalData.roughness || 0.05,
      metalness: 0.1,
      envMap: this.envMap,
      envMapIntensity: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.03,
      reflectivity: 0.9
    });
    
    const crystalMesh = new THREE.Mesh(geometry, material);
    
    // Posicionar el cristal exactamente en la superficie del planeta
    const planetSurfacePosition = surfaceNormal.clone().multiplyScalar(this.planetRadius);
    crystalMesh.position.copy(planetSurfacePosition);
    
    // ORIENTACIÓN CORRECTA: El cristal debe estar ACOSTADO sobre la superficie
    // Crear dos vectores tangentes a la superficie (perpendiculares al normal)
    
    // Vector tangente 1: perpendicular al normal de la superficie
    let tangent1 = new THREE.Vector3();
    if (Math.abs(surfaceNormal.y) < 0.9) {
      tangent1.crossVectors(surfaceNormal, new THREE.Vector3(0, 1, 0)).normalize();
    } else {
      tangent1.crossVectors(surfaceNormal, new THREE.Vector3(1, 0, 0)).normalize();
    }
    
    // Vector tangente 2: perpendicular tanto al normal como al tangente 1
    const tangent2 = new THREE.Vector3().crossVectors(surfaceNormal, tangent1).normalize();
    
    // Rotación aleatoria para variedad, pero manteniéndolo en el plano de la superficie
    const randomAngle = (index * 137.5) % 360 * (Math.PI / 180); // Golden angle
    const finalTangent1 = tangent1.clone().multiplyScalar(Math.cos(randomAngle))
      .add(tangent2.clone().multiplyScalar(Math.sin(randomAngle)));
    const finalTangent2 = new THREE.Vector3().crossVectors(surfaceNormal, finalTangent1).normalize();
    
    // CRUCIAL: Crear matriz donde el UP del cristal sea el TANGENTE, no el normal
    // Esto hace que el cristal esté acostado SOBRE la superficie
    const rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeBasis(
      finalTangent2,    // Right vector (lado del cristal)
      finalTangent1,    // Up vector del cristal (tangente a la superficie, no normal!)
      surfaceNormal     // Forward vector (apunta hacia afuera, pero cristal está acostado)
    );
    
    // Aplicar la rotación que hace que el cristal esté acostado
    crystalMesh.setRotationFromMatrix(rotationMatrix);
    
    // Levantar ligeramente el cristal para que no esté enterrado
    const liftOffset = crystalData.size * this.planetRadius * 0.05; // Lift muy pequeño
    const liftVector = surfaceNormal.clone().multiplyScalar(liftOffset);
    crystalMesh.position.add(liftVector);
    
    // Crear efecto de brillo interno
    this.createInnerGlow(crystalMesh, crystalData, index);
    
    this.crystallineFormations.push(crystalMesh);
    this.crystallineGroup.add(crystalMesh);
  }

  /**
   * Aplicar ruido procedural para fracturas y vetas
   */
  private applyProceduralNoise(geometry: THREE.BufferGeometry, intensity: number): void {
    const positions = geometry.getAttribute('position');
    const vertex = new THREE.Vector3();
    
    for (let i = 0; i < positions.count; i++) {
      vertex.fromBufferAttribute(positions, i);
      
      // Aplicar ruido Simplex/Perlin simulado
      const noise = this.simpleNoise(vertex.x * 10, vertex.y * 10, vertex.z * 10);
      const displacement = noise * intensity * 0.02;
      
      vertex.multiplyScalar(1 + displacement);
      positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    
    geometry.setAttribute('position', positions);
    geometry.computeVertexNormals();
  }

  /**
   * Función de ruido simple para patrones fractales
   */
  private simpleNoise(x: number, y: number, z: number): number {
    return (
      Math.sin(x * 0.1) * Math.cos(y * 0.1) * Math.sin(z * 0.1) +
      Math.sin(x * 0.05) * Math.cos(y * 0.05) * 0.5 +
      Math.sin(x * 0.2) * Math.sin(z * 0.15) * 0.3
    ) * 0.5;
  }

  /**
   * Crear efecto de brillo interno con ShaderMaterial
   */
  private createInnerGlow(parentMesh: THREE.Mesh, crystalData: any, _index: number): void {
    const glowGeometry = parentMesh.geometry.clone();
    
    // Shader material para brillo interno
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        glowColor: { value: new THREE.Color(crystalData.color[0], crystalData.color[1], crystalData.color[2]) },
        glowIntensity: { value: crystalData.glowIntensity || 0.5 }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPositionNormal;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 glowColor;
        uniform float glowIntensity;
        
        varying vec3 vNormal;
        varying vec3 vPositionNormal;
        
        void main() {
          float intensity = pow(0.4 - dot(vNormal, vPositionNormal), 2.0);
          intensity *= (0.8 + 0.2 * sin(time * 2.0)); // Pulsación sutil
          
          vec3 glow = glowColor * intensity * glowIntensity;
          gl_FragColor = vec4(glow, intensity * 0.6);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    glowMesh.position.copy(parentMesh.position);
    glowMesh.rotation.copy(parentMesh.rotation);
    glowMesh.scale.multiplyScalar(1.05); // Ligeramente más grande para efecto halo, pero no tanto
    
    this.glowMeshes.push(glowMesh);
    this.crystallineGroup.add(glowMesh);
  }

  /**
   * Actualizar animaciones de brillo
   */
  public update(): void {
    const currentTime = Date.now();
    const elapsed = (currentTime - this.startTime) * 0.001 * this.animationSpeed;
    
    // Actualizar shaders de brillo
    this.glowMeshes.forEach(mesh => {
      if (mesh.material instanceof THREE.ShaderMaterial) {
        mesh.material.uniforms.time.value = elapsed;
      }
    });
  }

  /**
   * Añadir efecto a la escena
   */
  public addToScene(scene: THREE.Scene, position: THREE.Vector3): void {
    this.crystallineGroup.position.copy(position);
    scene.add(this.crystallineGroup);
  }

  /**
   * Remover efecto de la escena
   */
  public removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.crystallineGroup);
  }

  /**
   * Cleanup de recursos
   */
  public dispose(): void {
    this.crystallineFormations.forEach(mesh => {
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material instanceof THREE.Material) mesh.material.dispose();
    });
    
    this.glowMeshes.forEach(mesh => {
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material instanceof THREE.Material) mesh.material.dispose();
    });
    
    if (this.envMap) this.envMap.dispose();
    
    this.crystallineFormations = [];
    this.glowMeshes = [];
  }

  /**
   * Obtener grupo principal
   */
  public getGroup(): THREE.Group {
    return this.crystallineGroup;
  }
}

/**
 * Función helper para crear efecto desde datos de Python
 */
export function createCrystallineSurfaceFromPythonData(
  planetRadius: number,
  surfaceData: any,
  seed: number,
  cosmicOriginTime?: number
): CrystallineSurfaceEffect | null {
  if (!surfaceData.green_patches || surfaceData.green_patches.length === 0) {
    return null;
  }

  return new CrystallineSurfaceEffect(planetRadius, {
    crystallinePatches: surfaceData.green_patches,
    seed,
    cosmicOriginTime,
    baseColor: new THREE.Color(0.0, 0.8, 1.0), // Cyan base
    transmission: 0.8,
    ior: 1.6,
    roughness: 0.05,
    glowIntensity: 0.6,
    timeSpeed: 0.05
  }, new SeededRandom(seed));
}