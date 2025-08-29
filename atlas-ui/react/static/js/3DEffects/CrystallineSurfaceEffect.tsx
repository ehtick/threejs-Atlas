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

// Rangos para generación procedural de cristales con reflexiones optimizadas
const PROCEDURAL_RANGES = {
  CRYSTAL_COUNT: { min: 1115, max: 1130 }, // Número de formaciones cristalinas
  DENSITY: { min: 0.8, max: 1.8 }, // Densidad de cristales
  SIZE: { min: 0.1, max: 0.4 }, // Tamaños de cristales variados
  TRANSMISSION: { min: 0.0, max: 0.0 }, // Sin transmisión para mantener reflexiones
  IOR: { min: 1.4, max: 2.1 }, // Rango de índices de refracción (vidrio a diamante)
  ROUGHNESS: { min: 0.0, max: 0.01 }, // Rugosidad mínima para reflexiones perfectas
  GLOW_INTENSITY: { min: 0.1, max: 0.3 }, // Brillo interno reducido para no interferir con reflexiones
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
  private starFieldReflections: THREE.Points | null = null;
  private starFieldMaterial: THREE.ShaderMaterial | null = null;

  constructor(
    private planetRadius: number,
    private params: CrystallineSurfaceParams = {},
    private seededRng?: SeededRandom,
    private starField?: any // StarField effect for reflections
  ) {
    this.crystallineGroup = new THREE.Group();
    this.crystallineGroup.name = "CrystallineSurface";
    
    this.animationSpeed = params.timeSpeed || 0.05;
    this.startTime = Date.now();

    // Crear cubemap estrellado para reflexiones
    this.createStarfieldCubemap();
    
    // Crear reflexiones de partículas del star field
    if (this.starField) {
      this.createStarFieldReflections();
    }
    
    this.generateCrystallineFormations();
  }

  /**
   * Crear cubemap sutil con starfield realista para reflexiones cristalinas
   */
  private createStarfieldCubemap(): void {
    try {
      const size = 512;
      const images: HTMLCanvasElement[] = [];
    
      for (let i = 0; i < 6; i++) {
        const faceCanvas = document.createElement('canvas');
        faceCanvas.width = size;
        faceCanvas.height = size;
        const faceContext = faceCanvas.getContext('2d');
        
        if (!faceContext) continue;

        // Fondo espacial sutil con gradiente suave
        const gradient = faceContext.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
        gradient.addColorStop(0, '#1a1a2e');  // Centro azul muy oscuro
        gradient.addColorStop(0.5, '#16213e'); // Medio azul espacial
        gradient.addColorStop(1, '#0f0f23');   // Borde casi negro
        faceContext.fillStyle = gradient;
        faceContext.fillRect(0, 0, size, size);
        
        // Estrellas sutiles pero visibles en reflexiones
        const starCount = 200 + Math.random() * 100;
        for (let j = 0; j < starCount; j++) {
          const x = Math.random() * size;
          const y = Math.random() * size;
          const brightness = 0.3 + Math.random() * 0.4;
          const starSize = Math.random() * 2 + 0.5;
          
          // Estrellas con tonos sutiles pero visibles
          const colorVariant = Math.random();
          if (colorVariant < 0.4) {
            // Estrellas azuladas suaves
            faceContext.fillStyle = `rgba(${120 + 60 * brightness}, ${140 + 80 * brightness}, 255, ${brightness})`;
          } else if (colorVariant < 0.7) {
            // Estrellas blancas suaves
            faceContext.fillStyle = `rgba(${200 + 55 * brightness}, ${200 + 55 * brightness}, ${200 + 55 * brightness}, ${brightness})`;
          } else {
            // Estrellas cálidas suaves
            faceContext.fillStyle = `rgba(255, ${180 + 60 * brightness}, ${120 + 60 * brightness}, ${brightness})`;
          }
          
          faceContext.beginPath();
          faceContext.arc(x, y, starSize, 0, Math.PI * 2);
          faceContext.fill();
          
          // Halo sutil solo para estrellas brillantes
          if (brightness > 0.6 && Math.random() < 0.1) {
            faceContext.fillStyle = `rgba(255, 255, 255, ${brightness * 0.2})`;
            faceContext.beginPath();
            faceContext.arc(x, y, starSize * 2, 0, Math.PI * 2);
            faceContext.fill();
          }
        }
        
        images.push(faceCanvas);
      }
    
      // Crear textura cubemap
      if (images.length === 6) {
        this.envMap = new THREE.CubeTexture(images);
        this.envMap.needsUpdate = true;
        this.envMap.mapping = THREE.CubeReflectionMapping;
        this.envMap.format = THREE.RGBAFormat;
        this.envMap.generateMipmaps = false;
        this.envMap.minFilter = THREE.LinearFilter;
        this.envMap.magFilter = THREE.LinearFilter;
        console.log('CrystallineSurfaceEffect: Simple test environment map created');
      } else {
        console.warn('CrystallineSurfaceEffect: Failed to create environment map');
      }
    } catch (error) {
      console.error('CrystallineSurfaceEffect: Error creating cubemap:', error);
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
    
    // CREAR GEOMETRÍA CRISTALINA REALISTA que se curve siguiendo la superficie
    
    const baseRadius = crystalData.size * this.planetRadius * 0.5;
    const crystalHeight = crystalData.height * this.planetRadius; // Usar altura real de PROCEDURAL_RANGES
    
    // Crear geometría cristalina usando CylinderGeometry con pocos lados (forma cristalina)
    const radialSegments = crystalData.sides; // Usar lados del cristal (6-12)
    const heightSegments = 4; // Suficientes segmentos para curvar
    
    const geometry = new THREE.CylinderGeometry(
      baseRadius * 0.8,    // Radio superior ligeramente menor
      baseRadius,          // Radio base
      crystalHeight,       // Altura del cristal
      radialSegments,      // Lados cristalinos
      heightSegments       // Segmentos verticales para curvatura
    );
    
    // Material cristalino respetando el sistema de iluminación (README guidelines)
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(crystalData.color[0], crystalData.color[1], crystalData.color[2]),
      roughness: crystalData.roughness,
      metalness: 0.1, // Reducido para mejor iluminación
      transmission: 0.2, // Transmisión para refracción
      ior: crystalData.ior,
      thickness: 0.1,
      envMap: this.envMap,
      envMapIntensity: 0.8, // Reducido para no interferir con lighting
      transparent: true,
      opacity: 0.9
    });
    
    // TÉCNICA DE AtmosphereClouds: Orientación tangente a la superficie
    const crystalPosition = surfaceNormal.clone().multiplyScalar(this.planetRadius);
    const normalFromPlanet = crystalPosition.clone().normalize();
    
    // Crear vectores tangentes a la superficie esférica (EXACTO de AtmosphereClouds)
    const tangent1 = new THREE.Vector3();
    const tangent2 = new THREE.Vector3();
    
    // Calcular primer vector tangente
    if (Math.abs(normalFromPlanet.y) < 0.99) {
      tangent1.crossVectors(normalFromPlanet, new THREE.Vector3(0, 1, 0)).normalize();
    } else {
      tangent1.crossVectors(normalFromPlanet, new THREE.Vector3(1, 0, 0)).normalize();
    }
    
    // Calcular segundo vector tangente (perpendicular al primero y al normal)
    tangent2.crossVectors(normalFromPlanet, tangent1).normalize();
    
    // Rotación aleatoria para variedad
    const randomAngle = (index * 137.5) % 360 * (Math.PI / 180);
    const rotatedTangent1 = tangent1.clone().multiplyScalar(Math.cos(randomAngle))
      .add(tangent2.clone().multiplyScalar(Math.sin(randomAngle)));
    const rotatedTangent2 = new THREE.Vector3().crossVectors(normalFromPlanet, rotatedTangent1).normalize();
    
    // CRÍTICO: Rotar el cilindro 90 grados primero para que esté ACOSTADO
    // El CylinderGeometry por defecto tiene altura en Y (vertical), necesitamos que esté horizontal
    const flattenMatrix = new THREE.Matrix4();
    flattenMatrix.makeRotationX(Math.PI / 2); // Rotar 90 grados para acostar el cilindro
    geometry.applyMatrix4(flattenMatrix);
    
    // Crear matriz de rotación para que el cristal siga la superficie (EXACTO de AtmosphereClouds)
    const rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeBasis(rotatedTangent1, rotatedTangent2, normalFromPlanet);
    
    // ORIENTAR Y CURVAR LA GEOMETRÍA CRISTALINA PARA SEGUIR LA SUPERFICIE ESFÉRICA
    const positions = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    
    // Aplicar la orientación para que el cristal siga la superficie
    geometry.applyMatrix4(rotationMatrix);
    
    // CURVAR cada vértice del cristal para seguir la superficie esférica
    for (let i = 0; i < positions.count; i++) {
      vertex.fromBufferAttribute(positions, i);
      
      // Convertir a coordenadas del mundo
      const worldVertex = vertex.clone().add(crystalPosition);
      
      // Calcular la distancia desde el centro del planeta
      const distanceFromCenter = worldVertex.length();
      
      // Proyectar sobre una superficie esférica que mantenga el grosor del cristal
      const direction = worldVertex.clone().normalize();
      const surfaceRadius = this.planetRadius + (distanceFromCenter - this.planetRadius) * 0.5; // Mantener algo de altura
      const projectedVertex = direction.multiplyScalar(surfaceRadius);
      
      // Volver a coordenadas locales del cristal
      const localVertex = projectedVertex.sub(crystalPosition);
      
      positions.setXYZ(i, localVertex.x, localVertex.y, localVertex.z);
    }
    
    positions.needsUpdate = true;
    geometry.computeVertexNormals();
    
    // Añadir ruido procedural DESPUÉS de la curvatura
    this.applyProceduralNoise(geometry, crystalData.size * 0.3);
    
    // Posicionar el cristal exactamente en la superficie (EXACTO de AtmosphereClouds)
    geometry.translate(crystalPosition.x, crystalPosition.y, crystalPosition.z);
    
    const crystalMesh = new THREE.Mesh(geometry, material);
    
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
   * Crear reflexiones de partículas del StarField en los cristales
   */
  private createStarFieldReflections(): void {
    if (!this.starField || !this.starField.getObject3D) return;

    const starFieldObject = this.starField.getObject3D();
    if (!starFieldObject.geometry) return;

    // Obtener datos de las partículas del star field
    const starPositions = starFieldObject.geometry.attributes.position;
    const starSizes = starFieldObject.geometry.attributes.size;
    const starBrightnesses = starFieldObject.geometry.attributes.brightness;
    
    if (!starPositions || !starSizes || !starBrightnesses) return;

    // Crear geometría para las reflexiones filtradas (solo estrellas brillantes)
    const reflectionCount = Math.floor(starPositions.count * 0.3); // 30% de las estrellas
    const reflectionPositions = new Float32Array(reflectionCount * 3);
    const reflectionSizes = new Float32Array(reflectionCount);
    const reflectionBrightnesses = new Float32Array(reflectionCount);
    
    const rng = this.seededRng || new SeededRandom(42);
    let reflectionIndex = 0;
    
    // Filtrar solo las estrellas más brillantes para reflejar
    for (let i = 0; i < starPositions.count && reflectionIndex < reflectionCount; i++) {
      const brightness = starBrightnesses.array[i];
      
      // Solo reflejar estrellas brillantes
      if (brightness > 0.7 && rng.random() < 0.5) {
        // Proyectar la estrella sobre la superficie del planeta (reflexión especular)
        const starX = starPositions.array[i * 3];
        const starY = starPositions.array[i * 3 + 1];
        const starZ = starPositions.array[i * 3 + 2];
        
        // Normalizar y proyectar sobre la superficie planetaria
        const starDir = new THREE.Vector3(starX, starY, starZ).normalize();
        const reflectionPos = starDir.multiplyScalar(this.planetRadius * 1.002); // Ligeramente sobre la superficie
        
        reflectionPositions[reflectionIndex * 3] = reflectionPos.x;
        reflectionPositions[reflectionIndex * 3 + 1] = reflectionPos.y;
        reflectionPositions[reflectionIndex * 3 + 2] = reflectionPos.z;
        
        reflectionSizes[reflectionIndex] = starSizes.array[i] * 0.3; // Más pequeñas que las originales
        reflectionBrightnesses[reflectionIndex] = brightness * 0.4; // Menos brillantes (reflexión)
        
        reflectionIndex++;
      }
    }

    // Crear geometría y material para las reflexiones
    const reflectionGeometry = new THREE.BufferGeometry();
    reflectionGeometry.setAttribute('position', new THREE.BufferAttribute(reflectionPositions.slice(0, reflectionIndex * 3), 3));
    reflectionGeometry.setAttribute('size', new THREE.BufferAttribute(reflectionSizes.slice(0, reflectionIndex), 1));
    reflectionGeometry.setAttribute('brightness', new THREE.BufferAttribute(reflectionBrightnesses.slice(0, reflectionIndex), 1));

    this.starFieldMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        planetRadius: { value: this.planetRadius },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() }
      },
      vertexShader: `
        attribute float size;
        attribute float brightness;
        
        uniform float time;
        uniform float planetRadius;
        uniform vec3 lightDirection;
        
        varying float vBrightness;
        varying float vLightInfluence;
        
        void main() {
          vBrightness = brightness;
          
          // Calcular influencia de la iluminación
          vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          vec3 normal = normalize(worldPos); // Normal de la superficie esférica
          float lightDot = dot(normal, lightDirection);
          vLightInfluence = max(0.0, lightDot); // Solo lado iluminado
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = size * (300.0 / -mvPosition.z) * vLightInfluence; // Tamaño afectado por iluminación
        }
      `,
      fragmentShader: `
        uniform float time;
        
        varying float vBrightness;
        varying float vLightInfluence;
        
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          if (dist > 0.5) discard;
          
          // Solo mostrar reflexiones en el lado iluminado
          if (vLightInfluence < 0.1) discard;
          
          float alpha = (1.0 - dist * 2.0) * vBrightness * vLightInfluence;
          alpha *= 0.6; // Reflexiones sutiles
          
          // Color cristalino azul-cyan para las reflexiones
          vec3 reflectionColor = vec3(0.3, 0.7, 1.0);
          
          gl_FragColor = vec4(reflectionColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.starFieldReflections = new THREE.Points(reflectionGeometry, this.starFieldMaterial);
    this.crystallineGroup.add(this.starFieldReflections);
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
   * Actualizar animaciones de brillo y reflexiones
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
    
    // Actualizar reflexiones del star field
    if (this.starFieldMaterial) {
      this.starFieldMaterial.uniforms.time.value = elapsed;
    }
  }

  /**
   * Actualizar dirección de luz para seguir el sistema de iluminación
   */
  public updateLightDirection(lightDirection: THREE.Vector3): void {
    if (this.starFieldMaterial) {
      this.starFieldMaterial.uniforms.lightDirection.value.copy(lightDirection);
    }
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
    
    if (this.starFieldReflections) {
      if (this.starFieldReflections.geometry) this.starFieldReflections.geometry.dispose();
      if (this.starFieldMaterial) this.starFieldMaterial.dispose();
    }
    
    if (this.envMap) this.envMap.dispose();
    
    this.crystallineFormations = [];
    this.glowMeshes = [];
    this.starFieldReflections = null;
    this.starFieldMaterial = null;
  }

  /**
   * Obtener grupo principal
   */
  public getGroup(): THREE.Group {
    return this.crystallineGroup;
  }

  /**
   * Obtener objeto 3D para el sistema de efectos (compatibilidad con EffectRegistry)
   */
  public getObject3D(): THREE.Group {
    return this.crystallineGroup;
  }
}

/**
 * Función helper para crear efecto desde datos de Python
 * Los cristales tienen distribución independiente de las land_masses
 */
export function createCrystallineSurfaceFromPythonData(
  planetRadius: number,
  surfaceData: any,
  seed: number,
  cosmicOriginTime?: number,
  starField?: any
): CrystallineSurfaceEffect | null {
  // Los cristales se generan de forma independiente usando generación procedural
  // No dependen de green_patches ni land_masses
  return new CrystallineSurfaceEffect(planetRadius, {
    // No pasar crystallinePatches para usar generación procedural independiente
    seed,
    cosmicOriginTime,
    baseColor: new THREE.Color(0.0, 0.8, 1.0), // Cyan base
    transmission: 0.2, // Permitir transmisión para refracción
    ior: 1.6,
    roughness: 0.01,
    glowIntensity: 0.3,
    timeSpeed: 0.05
  }, new SeededRandom(seed), starField);
}