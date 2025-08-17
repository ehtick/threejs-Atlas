/**
 * Land Masses Effect - Sistema de masas de tierra para planetas oceánicos
 *
 * Renderiza las islas y continentes (green_patches) de planetas oceánicos
 * como formas sólidas sobre la superficie del planeta.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface LandMassesParams {
  greenPatches?: any[]; // Datos de green_patches desde Python
  seed?: number;
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
      this.generateLandsFromPython(planetRadius, params.greenPatches, rng);
    } else {
      // Generación procedural de respaldo
      this.generateProceduralLands(planetRadius, rng);
    }
  }

  private generateLandsFromPython(planetRadius: number, greenPatches: any[], rng: SeededRandom): void {
    greenPatches.forEach((patch, index) => {
      // Extraer datos del patch
      const position = patch.position || [0, 0, 1];
      const size = (patch.size || 0.1) * planetRadius * 1.8; // Tamaño de la isla
      const sides = Math.max(8, Math.min(patch.sides || 20, 12)); // Limitar lados
      
      // Color del patch - convertir de [0-1] a color THREE.js
      let patchColor = new THREE.Color(0x4a7c59); // Verde tierra por defecto
      if (patch.color && Array.isArray(patch.color)) {
        // Los colores vienen normalizados [0-1] desde Python
        patchColor = new THREE.Color(
          patch.color[0],
          patch.color[1], 
          patch.color[2]
        );
      }
      
      // ENFOQUE ESFÉRICO: SphereGeometry con más segmentos para suavizar
      const geometry = new THREE.SphereGeometry(size * 0.6, Math.max(16, sides * 2), Math.max(8, sides));
      
      // Posición en la superficie del planeta
      const sphericalPos = new THREE.Vector3(
        position[0],
        position[1],
        position[2]
      ).normalize();
      
      // AÑADIR VARIACIÓN ORGÁNICA a los vértices para crear formas de tierra irregulares
      const positionAttribute = geometry.attributes.position;
      const vertex = new THREE.Vector3();
      
      for (let i = 0; i < positionAttribute.count; i++) {
        vertex.fromBufferAttribute(positionAttribute, i);
        
        // Solo modificar los vértices del borde (no el centro)
        const distFromCenter = Math.sqrt(vertex.x * vertex.x + vertex.y * vertex.y);
        
        if (distFromCenter > 0.1) { // Evitar el centro
          // Aplicar ruido radial para crear bordes irregulares
          const angle = Math.atan2(vertex.y, vertex.x);
          
          // Variación de ruido que cambia con el ángulo
          const noiseFreq = 3.0; // Frecuencia del ruido
          const noiseAmp = 0.3;   // Amplitud del ruido (30% de variación)
          
          const noise1 = Math.sin(angle * noiseFreq + rng.uniform(0, Math.PI * 2)) * noiseAmp;
          const noise2 = Math.sin(angle * noiseFreq * 2.3 + rng.uniform(0, Math.PI * 2)) * noiseAmp * 0.5;
          const totalNoise = 1.0 + noise1 + noise2;
          
          // Aplicar ruido radial
          vertex.x *= totalNoise;
          vertex.y *= totalNoise;
          
          // Añadir algo de ruido individual por vértice
          const randomVariation = rng.uniform(0.9, 1.1);
          vertex.x *= randomVariation;
          vertex.y *= randomVariation;
        }
        
        positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }
      
      positionAttribute.needsUpdate = true;
      
      // ORIENTACIÓN TANGENTE A LA SUPERFICIE (como en AtmosphereClouds)
      // Crear vectores tangentes a la superficie esférica
      const tangent1 = new THREE.Vector3();
      const tangent2 = new THREE.Vector3();
      
      // Calcular primer vector tangente
      if (Math.abs(sphericalPos.y) < 0.99) {
        tangent1.crossVectors(sphericalPos, new THREE.Vector3(0, 1, 0)).normalize();
      } else {
        tangent1.crossVectors(sphericalPos, new THREE.Vector3(1, 0, 0)).normalize();
      }
      
      // Calcular segundo vector tangente (perpendicular al primero y al normal)
      tangent2.crossVectors(sphericalPos, tangent1).normalize();
      
      // Crear matriz de rotación para que la isla siga la superficie
      const rotationMatrix = new THREE.Matrix4();
      rotationMatrix.makeBasis(tangent1, tangent2, sphericalPos);
      
      // Aplicar primero la orientación
      geometry.applyMatrix4(rotationMatrix);
      
      // CURVAR LA GEOMETRÍA PARA SEGUIR LA SUPERFICIE ESFÉRICA (como las nubes)
      const positions = geometry.attributes.position;
      const landPosition = sphericalPos.clone().multiplyScalar(planetRadius);
      const landRadius = planetRadius * 1.009; // Radio con más elevación para que emerjan del océano
      
      // Ahora curvar cada vértice para seguir la superficie esférica
      // IMPORTANTE: Proyectar TODOS los vértices, no solo los bordes
      for (let i = 0; i < positions.count; i++) {
        vertex.fromBufferAttribute(positions, i);
        
        // Convertir a coordenadas del mundo
        const worldVertex = vertex.clone().add(landPosition);
        
        // Proyectar sobre la superficie esférica a la altura correcta
        const direction = worldVertex.clone().normalize();
        
        // GRADIENTE DE ALTURA: El centro más alto, los bordes más bajos
        // Calcular distancia desde el centro de la isla (en coordenadas locales originales)
        const localDist = Math.sqrt(vertex.x * vertex.x + vertex.y * vertex.y);
        const maxRadius = size * 1.2 * 0.5; // Radio máximo de la isla
        const heightFactor = Math.max(0, 1.0 - (localDist / maxRadius)); // 1.0 en centro, 0.0 en bordes
        
        // Elevación variable: más alta en el centro, baja en los bordes
        const baseRadius = planetRadius * 1.003; // Elevación base mínima
        const peakRadius = planetRadius * 1.009; // Elevación máxima en el centro
        const finalRadius = baseRadius + (peakRadius - baseRadius) * heightFactor * heightFactor;
        
        const projectedVertex = direction.multiplyScalar(finalRadius);
        
        // Volver a coordenadas locales de la isla
        const localVertex = projectedVertex.sub(landPosition);
        
        positions.setXYZ(i, localVertex.x, localVertex.y, localVertex.z);
      }
      
      positions.needsUpdate = true;
      geometry.computeVertexNormals();
      
      // Posicionar la isla (trasladar al final)
      geometry.translate(landPosition.x, landPosition.y, landPosition.z);
      
      // Material con textura de ruido procedural
      const material = new THREE.MeshPhongMaterial({
        color: patchColor,
        emissive: patchColor.clone().multiplyScalar(0.05),
        emissiveIntensity: 0.0000001,
        shininess: 8,
        flatShading: false,
        // Añadir rugosidad para simular textura de tierra
        bumpScale: 0.002,
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
      
      this.lands.push(landMesh);
      this.landGroup.add(landMesh);
    });
  }

  private generateProceduralLands(planetRadius: number, rng: SeededRandom): void {
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
      
      // Posicionar y orientar
      const worldPos = position.clone().multiplyScalar(planetRadius * 1.000);
      geometry.lookAt(position);
      geometry.translate(worldPos.x, worldPos.y, worldPos.z);
      
      // Material verde/marrón
      const greenAmount = rng.uniform(0.3, 0.7);
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(
          0.36 * (1 - greenAmount) + 0.22 * greenAmount,
          0.23 * (1 - greenAmount) + 0.36 * greenAmount,
          0
        ),
        emissive: 0x0a0a00,
        shininess: 5,
      });
      
      const landMesh = new THREE.Mesh(geometry, material);
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