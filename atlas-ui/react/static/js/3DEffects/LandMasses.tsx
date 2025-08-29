/**
 * Land Masses Effect - Sistema de masas de tierra para planetas oceánicos
 *
 * Renderiza las islas y continentes (green_patches) de planetas oceánicos
 * como formas sólidas sobre la superficie del planeta.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";

export interface LandMassesParams {
  greenPatches?: any[]; // Datos de green_patches desde Python
  seed?: number;
  transparentMode?: boolean; // Modo transparente para planetas Icy
  tundraMode?: boolean; // Modo tundra con baja opacidad
}

/**
 * Efecto de Masas de Tierra
 * Renderiza green_patches como islas/continentes sólidos
 */
export class LandMassesEffect {
  private landGroup: THREE.Group;
  private lands: THREE.Mesh[] = [];

  constructor(planetRadius: number, params: LandMassesParams = {}) {
    this.landGroup = new THREE.Group();
    
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    // Si tenemos green_patches de Python, usarlos
    if (params.greenPatches && params.greenPatches.length > 0) {
      this.generateLandsFromPython(planetRadius, params.greenPatches, rng, params);
    } else {
      // Generación procedural de respaldo
      this.generateProceduralLands(planetRadius, rng, params);
    }
  }

  private generateLandsFromPython(planetRadius: number, greenPatches: any[], rng: SeededRandom, params: LandMassesParams): void {
    greenPatches.forEach((patch, index) => {
      // Extraer datos del patch
      // Usar position_3d si está disponible (nueva versión), si no, usar position (retrocompatibilidad)
      let position = patch.position_3d || patch.position || [0, 0, 1];
      
      // Si solo tenemos posición 2D (array de 2 elementos), convertir a 3D
      if (position.length === 2) {
        // Convertir coordenadas 2D normalizadas a posición 3D en la esfera
        const theta = rng.uniform(0, Math.PI * 2);
        const phi = Math.acos(rng.uniform(-1, 1));
        position = [
          Math.sin(phi) * Math.cos(theta),
          Math.sin(phi) * Math.sin(theta),
          Math.cos(phi)
        ];
      }
      
      const size = (patch.size || 0.1) * planetRadius * 1.8; // Tamaño de la isla
      const sides = Math.max(8, Math.min(patch.sides || 20, 12)); // Limitar lados
      
      // Color del patch - convertir de [0-1] a color THREE.js
      let patchColor = new THREE.Color(0x4a7c59); // Verde tierra por defecto
      let patchOpacity = 1.0; // Opacidad por defecto
      
      if (patch.color && Array.isArray(patch.color)) {
        // Los colores vienen normalizados [0-1] desde Python
        patchColor = new THREE.Color(
          patch.color[0],
          patch.color[1], 
          patch.color[2]
        );
        
        // Si hay un cuarto valor, es la opacidad (alpha)
        if (patch.color.length > 3) {
          patchOpacity = patch.color[3];
        }
      }
      
      // NUEVO ENFOQUE: PlaneGeometry con ruido 2D para formas orgánicas
      
      // RESOLUCIÓN ADAPTATIVA: más vértices para islas grandes
      const resolution = Math.max(24, Math.min(64, Math.floor(size * 32))); // Más agresivo: 24-64
      const planeSize = size * 2;
      
      // Posición en la superficie del planeta
      const sphericalPos = new THREE.Vector3(
        position[0],
        position[1],
        position[2]
      ).normalize();
      
      // Crear sistema de coordenadas tangente
      const tangent1 = new THREE.Vector3();
      const tangent2 = new THREE.Vector3();
      
      if (Math.abs(sphericalPos.y) < 0.99) {
        tangent1.crossVectors(sphericalPos, new THREE.Vector3(0, 1, 0)).normalize();
      } else {
        tangent1.crossVectors(sphericalPos, new THREE.Vector3(1, 0, 0)).normalize();
      }
      tangent2.crossVectors(sphericalPos, tangent1).normalize();
      
      // Función de ruido 2D mejorada (FBM - Fractal Brownian Motion)
      // RUIDO ADAPTATIVO: frecuencia inversa al tamaño para mantener detalle consistente
      const baseFrequency = 2.0 / Math.max(size * 0.05, 1.0); // Frecuencia base adaptativa
      
      const fbmNoise = (x: number, y: number) => {
        let value = 0;
        let amplitude = 1;
        let frequency = baseFrequency;
        let maxValue = 0;
        
        // Más octavas para islas grandes (más detalle)
        const octaves = Math.min(5, Math.max(3, Math.floor(size / 40) + 2));
        
        for (let i = 0; i < octaves; i++) {
          const sx = x * frequency;
          const sy = y * frequency;
          
          // Hash function para ruido coherente
          const hash = (px: number, py: number) => {
            const dot = px * 12.9898 + py * 78.233;
            return Math.sin(dot + rng.uniform(0, 1000)) * 43758.5453 % 1;
          };
          
          // Interpolación bicúbica para suavidad
          const ix = Math.floor(sx);
          const iy = Math.floor(sy);
          const fx = sx - ix;
          const fy = sy - iy;
          
          // Función de suavizado
          const smooth = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
          
          const sx_smooth = smooth(fx);
          const sy_smooth = smooth(fy);
          
          // Valores en las esquinas
          const n00 = hash(ix, iy);
          const n10 = hash(ix + 1, iy);
          const n01 = hash(ix, iy + 1);
          const n11 = hash(ix + 1, iy + 1);
          
          // Interpolación
          const nx0 = n00 * (1 - sx_smooth) + n10 * sx_smooth;
          const nx1 = n01 * (1 - sx_smooth) + n11 * sx_smooth;
          const nxy = nx0 * (1 - sy_smooth) + nx1 * sy_smooth;
          
          value += nxy * amplitude;
          maxValue += amplitude;
          
          amplitude *= 0.5;
          frequency *= 2.2; // Frecuencia ligeramente irregular para más naturalidad
        }
        
        return value / maxValue;
      };
      
      // Generar vértices y caras
      const vertices: number[] = [];
      const indices: number[] = [];
      const uvs: number[] = [];
      
      // Umbral para determinar tierra vs agua
      const landThreshold = 0.35; // Bajado para crear más tierra
      
      // Crear grilla de puntos
      const vertexMap = new Map<string, number>();
      const heightMap = new Map<string, number>(); // Guardar altura para cada vértice
      let vertexIndex = 0;
      
      for (let i = 0; i <= resolution; i++) {
        for (let j = 0; j <= resolution; j++) {
          // Coordenadas en el plano tangente (-1 a 1)
          const u = (i / resolution - 0.5) * 2;
          const v = (j / resolution - 0.5) * 2;
          
          // Distancia desde el centro para forma base
          const distFromCenter = Math.sqrt(u * u + v * v);
          
          // Evaluar ruido 2D
          const noiseValue = fbmNoise(u * 2, v * 2);
          
          // Combinar distancia y ruido para crear forma orgánica
          const shapeFactor = (1.0 - distFromCenter * 0.5) + noiseValue * 0.6;
          
          // Solo crear vértice si está sobre el umbral (es tierra)
          if (shapeFactor > landThreshold && distFromCenter < 1.2) {
            // Convertir coordenadas UV a posición 3D en el plano tangente
            const localX = u * size;
            const localY = v * size;
            const localZ = 0;
            
            // Proyectar al espacio 3D usando la base tangente
            const worldPos = new THREE.Vector3()
              .addScaledVector(tangent1, localX)
              .addScaledVector(tangent2, localY)
              .addScaledVector(sphericalPos, localZ);
            
            vertices.push(worldPos.x, worldPos.y, worldPos.z);
            uvs.push((u + 1) * 0.5, (v + 1) * 0.5);
            
            // Guardar índice y altura para triangulación
            vertexMap.set(`${i},${j}`, vertexIndex);
            // Guardar el valor de ruido normalizado para usar como altura
            heightMap.set(`${i},${j}`, noiseValue);
            vertexIndex++;
          }
        }
      }
      
      // Crear triangulación conectando vértices adyacentes
      for (let i = 0; i < resolution; i++) {
        for (let j = 0; j < resolution; j++) {
          const v00 = vertexMap.get(`${i},${j}`);
          const v10 = vertexMap.get(`${i+1},${j}`);
          const v01 = vertexMap.get(`${i},${j+1}`);
          const v11 = vertexMap.get(`${i+1},${j+1}`);
          
          // Solo crear triángulos si todos los vértices existen
          if (v00 !== undefined && v10 !== undefined && v01 !== undefined) {
            indices.push(v00, v10, v01);
          }
          if (v10 !== undefined && v11 !== undefined && v01 !== undefined) {
            indices.push(v10, v11, v01);
          }
        }
      }
      
      // Crear geometría
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();
      
      // La geometría ya está orientada correctamente desde su creación
      
      // CURVAR LA GEOMETRÍA PARA SEGUIR LA SUPERFICIE ESFÉRICA CON RELIEVE
      const positions = geometry.attributes.position;
      const landPosition = sphericalPos.clone().multiplyScalar(planetRadius);
      const vertex = new THREE.Vector3();
      
      // Proyectar cada vértice sobre la superficie esférica con elevación basada en ruido
      for (let i = 0; i < positions.count; i++) {
        vertex.fromBufferAttribute(positions, i);
        
        // Convertir a coordenadas del mundo
        const worldVertex = vertex.clone().add(landPosition);
        
        // Proyectar sobre la superficie esférica
        const direction = worldVertex.clone().normalize();
        
        // Obtener UV para calcular elevación combinada
        const uv = geometry.attributes.uv;
        if (uv) {
          const u = uv.getX(i) * 2 - 1; // Convertir de [0,1] a [-1,1]
          const v = uv.getY(i) * 2 - 1;
          const distFromCenter = Math.sqrt(u * u + v * v);
          
          // Recalcular el ruido para este vértice para obtener su altura
          const noiseValue = fbmNoise(u * 2, v * 2);
          
          // Combinar perfil radial (centro alto, bordes bajos) con ruido
          // Factor de borde más suave para transición natural
          const edgeFactor = Math.max(0, 1.0 - Math.pow(distFromCenter, 0.7));
          
          // Más peso al ruido para mayor variación topográfica
          const combinedHeight = edgeFactor * 0.5 + noiseValue * 0.5;
          
          // Aplicar función smoothstep para suavizar transiciones
          const smoothstep = (x: number) => x * x * (3.0 - 2.0 * x);
          const smoothHeight = smoothstep(combinedHeight);
          
          // RELIEVE ESCALADO AL TAMAÑO DE LA ISLA (CON LÍMITE ATMOSFÉRICO)
          // Las islas grandes tendrán montañas más altas proporcionalmente
          // pero nunca sobrepasarán la capa de nubes
          
          // Límite máximo absoluto: las nubes suelen estar a ~1.01-1.02 del radio
          const cloudLayerRadius = planetRadius * 1.01; // Altura típica de las nubes
          const maxAbsoluteRelief = cloudLayerRadius - planetRadius; // No sobrepasar las nubes
          
          // RELIEVE MÁS AGRESIVO: 15-20% del tamaño de la isla
          const proportionalRelief = size * 0.15; // 15% del tamaño para relieve notable
          const maxRelief = Math.min(proportionalRelief, maxAbsoluteRelief * 0.9); // Hasta 90% de la altura de nubes
          const minRelief = planetRadius * 0.008; // Elevación base MUCHO mayor para evitar z-fighting
          
          // Combinar relieve proporcional con base del planeta
          const baseRadius = planetRadius + minRelief;
          const peakRadius = planetRadius + minRelief + maxRelief;
          
          // Interpolar entre base y peak usando la altura combinada
          const finalRadius = THREE.MathUtils.lerp(baseRadius, peakRadius, smoothHeight);
          
          const projectedVertex = direction.multiplyScalar(finalRadius);
          
          // Volver a coordenadas locales de la isla
          const localVertex = projectedVertex.sub(landPosition);
          
          positions.setXYZ(i, localVertex.x, localVertex.y, localVertex.z);
        }
      }
      
      positions.needsUpdate = true;
      geometry.computeVertexNormals();
      
      // Posicionar la isla (trasladar al final)
      geometry.translate(landPosition.x, landPosition.y, landPosition.z);
      
      // Material con textura de ruido procedural
      // IMPORTANTE: Usar la opacidad del patch desde Python
      const material = new THREE.MeshPhongMaterial({
        color: params.transparentMode ? new THREE.Color(0xE6F3FF) : patchColor, // Azul hielo muy claro si es transparente
        opacity: params.transparentMode ? 0.3 : patchOpacity, // Usar opacidad del patch desde Python
        transparent: params.transparentMode || patchOpacity < 1.0, // Transparente si tiene opacidad menor a 1
        emissive: params.transparentMode ? new THREE.Color(0xCCE6FF).multiplyScalar(0.1) : patchColor.clone().multiplyScalar(0.05),
        emissiveIntensity: params.transparentMode ? 0.05 : 0.0000001,
        shininess: params.transparentMode ? 30 : 8, // Más brillante como hielo
        flatShading: false,
        // Añadir rugosidad para simular textura de tierra/hielo
        bumpScale: 0.002,
        // Configurar depth sorting para evitar Z-fighting - configuración mejorada
        depthWrite: true,
        depthTest: true,
        // Añadir offset para separar más de la superficie del planeta
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
      });
      
      // Crear textura de ruido simple para darle textura
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 64;
      const ctx = canvas.getContext('2d')!;
      const imageData = ctx.createImageData(64, 64);
      
      for (let i = 0; i < imageData.data.length; i += 4) {
        const noise = rng.uniform(0.8, 1.2);
        const gray = Math.floor(128 * noise);
        imageData.data[i] = gray;     // R
        imageData.data[i + 1] = gray; // G
        imageData.data[i + 2] = gray; // B
        imageData.data[i + 3] = 255;  // A
      }
      
      ctx.putImageData(imageData, 0, 0);
      const noiseTexture = new THREE.CanvasTexture(canvas);
      noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
      noiseTexture.repeat.set(2, 2);
      
      material.bumpMap = noiseTexture;
      
      const landMesh = new THREE.Mesh(geometry, material);
      landMesh.castShadow = true;
      landMesh.receiveShadow = true;
      // RenderOrder: 1 para que se renderice antes que las nubes (que tendrán 2)
      landMesh.renderOrder = 1;
      
      this.lands.push(landMesh);
      this.landGroup.add(landMesh);
    });
  }

  private generateProceduralLands(planetRadius: number, rng: SeededRandom, params: LandMassesParams): void {
    // Generación procedural simple si no hay datos de Python
    const numLands = Math.floor(rng.uniform(5, 15));
    
    for (let i = 0; i < numLands; i++) {
      // Posición aleatoria en la esfera
      const theta = rng.uniform(0, Math.PI * 2);
      const phi = Math.acos(rng.uniform(-1, 1));
      
      const position = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      );
      
      // Tamaño aleatorio
      const size = planetRadius * rng.uniform(0.02, 0.08);
      
      // Crear geometría simple de círculo
      const geometry = new THREE.CircleGeometry(size, 16);
      
      // Posicionar y orientar - más separación para evitar Z-fighting con nubes
      const worldPos = position.clone().multiplyScalar(planetRadius * 1.002);
      geometry.lookAt(position);
      geometry.translate(worldPos.x, worldPos.y, worldPos.z);
      
      // Material verde/marrón o transparente
      const greenAmount = rng.uniform(0.3, 0.7);
      const baseColor = new THREE.Color(
        0.36 * (1 - greenAmount) + 0.22 * greenAmount,
        0.23 * (1 - greenAmount) + 0.36 * greenAmount,
        0
      );
      
      // Para planetas tundra, usar colores blanquecinos con baja opacidad
      const isTundra = params.tundraMode || false;
      const proceduralOpacity = isTundra ? 0.25 : 1.0;
      
      const material = new THREE.MeshPhongMaterial({
        color: params.transparentMode ? new THREE.Color(0xE6F3FF) : baseColor,
        opacity: params.transparentMode ? 0.3 : proceduralOpacity,
        transparent: params.transparentMode || proceduralOpacity < 1.0,
        emissive: params.transparentMode ? new THREE.Color(0xCCE6FF).multiplyScalar(0.1) : 0x0a0a00,
        shininess: params.transparentMode ? 30 : 5,
        // Configurar depth sorting para evitar Z-fighting
        depthWrite: true,
        depthTest: true,
      });
      
      const landMesh = new THREE.Mesh(geometry, material);
      // RenderOrder: 1 para que se renderice antes que las nubes (que tendrán 2)
      landMesh.renderOrder = 1;
      this.lands.push(landMesh);
      this.landGroup.add(landMesh);
    }
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.landGroup.position.copy(planetPosition);
    }
    scene.add(this.landGroup);
  }

  update(deltaTime: number): void {
    // Las masas de tierra son estáticas, no necesitan actualización
  }

  getObject3D(): THREE.Group {
    return this.landGroup;
  }

  dispose(): void {
    this.lands.forEach(land => {
      land.geometry.dispose();
      if (land.material instanceof THREE.Material) {
        land.material.dispose();
      }
    });
    this.lands = [];
    this.landGroup.clear();
  }
}

/**
 * Función de utilidad para crear el efecto desde datos de Python
 */
export function createLandMassesFromPythonData(
  planetRadius: number, 
  surfaceData: any, 
  globalSeed?: number
): LandMassesEffect | null {
  
  // Verificar si hay green_patches
  const greenPatches = surfaceData.green_patches;
  
  if (!greenPatches || greenPatches.length === 0) {
    return null; // No crear el efecto si no hay datos
  }
  
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  
  return new LandMassesEffect(planetRadius, {
    greenPatches: greenPatches,
    seed: seed + 6000
  });
}

/**
 * Función de utilidad para crear el efecto LandMasses en planetas Icy (modo transparente)
 */
export function createTransparentLandMassesForIcyPlanet(
  planetRadius: number, 
  surfaceData: any, 
  globalSeed?: number
): LandMassesEffect | null {
  
  // Crear datos sintéticos de green_patches para planetas Icy
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 7000); // +7000 para LandMasses en Icy
  
  // Generar entre 3-8 "masas de hielo" con formas orgánicas
  const numPatches = Math.floor(rng.uniform(3, 8));
  const syntheticPatches = [];
  
  for (let i = 0; i < numPatches; i++) {
    // Posición aleatoria en la esfera
    const theta = rng.uniform(0, Math.PI * 2);
    const phi = Math.acos(rng.uniform(-1, 1));
    
    syntheticPatches.push({
      position_3d: [
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      ],
      size: rng.uniform(0.05, 0.15), // Tamaños variados para masas de hielo
      sides: Math.floor(rng.uniform(8, 16)), // Formas orgánicas
      color: [0, 0, 0] // Negro (será transparente)
    });
  }
  
  
  return new LandMassesEffect(planetRadius, {
    greenPatches: syntheticPatches,
    seed: seed + 7000,
    transparentMode: true // Activar modo transparente
  });
}