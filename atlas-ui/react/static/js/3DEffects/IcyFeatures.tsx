/**
 * Icy Features Effect - Renderiza elementos específicos de planetas helados
 * 
 * Genera cristales de hielo, grietas y casquetes polares basándose en los
 * datos de Python para planetas tipo "icy".
 * 
 * Elementos:
 * - Crystals: Formaciones cristalinas de hielo (20-30 unidades)
 * - Cracks: Grietas profundas en la superficie helada
 * - Ice Caps: Casquetes polares grandes
 */

import * as THREE from 'three';
import { SeededRandom } from '../Utils/SeededRandom.tsx';

export interface IcyFeaturesParams {
  crystals?: any[];      // Datos de cristales desde Python
  cracks?: any[];        // Datos de grietas desde Python
  iceCaps?: any[];       // Datos de casquetes desde Python
  seed?: number;
}

/**
 * Efecto de Características Heladas
 * 
 * Renderiza cristales, grietas y casquetes de hielo en 3D
 */
export class IcyFeaturesEffect {
  private featuresGroup: THREE.Group;
  private crystals: THREE.Mesh[] = [];
  private cracks: THREE.Mesh[] = [];
  private iceCaps: THREE.Mesh[] = [];
  private planetRadius: number;

  constructor(planetRadius: number, params: IcyFeaturesParams = {}) {
    this.featuresGroup = new THREE.Group();
    this.planetRadius = planetRadius;
    
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    // Generar cristales si hay datos
    if (params.crystals && params.crystals.length > 0) {
      this.generateCrystals(params.crystals, rng);
    }
    
    // Generar grietas si hay datos
    if (params.cracks && params.cracks.length > 0) {
      this.generateCracks(params.cracks);
    }
    
    // Generar casquetes de hielo si hay datos
    if (params.iceCaps && params.iceCaps.length > 0) {
      this.generateIceCaps(params.iceCaps, rng);
    }
  }

  /**
   * Genera cristales de hielo 3D realistas
   */
  private generateCrystals(crystalsData: any[], rng: SeededRandom): void {
    crystalsData.forEach((crystal) => {
      // Extraer datos del cristal con proporciones visibles pero achatadas radialmente
      const position = crystal.position || [0, 0];
      const baseSize = (crystal.width || 0.05) * this.planetRadius * 0.8; // Base visible 
      const height = (crystal.length || 0.1) * this.planetRadius * 0.08; // Altura achatada - profundidad radial mínima
      const angle = crystal.angle || 0;
      const crystalColor = crystal.color || [172/255, 215/255, 230/255, 1.0];
      
      // Crear PLACA CRISTALINA usando BoxGeometry - claramente horizontal
      const minThickness = this.planetRadius * 0.015; // Grosor mínimo de la placa
      const actualThickness = Math.max(height, minThickness);
      
      const geometry = new THREE.BoxGeometry(
        baseSize * 2,        // Ancho (dimensión más grande)
        actualThickness,     // Grosor (dimensión pequeña - será la "altura" cuando esté acostada)
        baseSize * 1.5,      // Profundidad
        4,                   // Segmentos en X
        2,                   // Segmentos en Y (grosor)
        4                    // Segmentos en Z
      );
      
      // Modificar geometría para crear forma cristalina irregular
      const positions = geometry.attributes.position;
      const vertex = new THREE.Vector3();
      
      // Crear forma hexagonal irregular en lugar de rectangular
      for (let i = 0; i < positions.count; i++) {
        vertex.fromBufferAttribute(positions, i);
        
        // Solo modificar vértices en los planos X-Z (las caras grandes de la placa)
        if (Math.abs(vertex.y) > actualThickness * 0.3) {
          // Crear forma más hexagonal/cristalina
          const angle = Math.atan2(vertex.z, vertex.x);
          const distance = Math.sqrt(vertex.x * vertex.x + vertex.z * vertex.z);
          
          // Aplicar forma hexagonal con variación
          const hexAngle = Math.round(angle / (Math.PI / 3)) * (Math.PI / 3);
          const variation = rng.uniform(0.8, 1.2);
          const newDistance = distance * variation;
          
          vertex.x = Math.cos(hexAngle) * newDistance;
          vertex.z = Math.sin(hexAngle) * newDistance;
          
          // Añadir rugosidad sutil a las caras
          vertex.y += rng.uniform(-actualThickness * 0.1, actualThickness * 0.1);
        }
        
        positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }
      
      positions.needsUpdate = true;
      geometry.computeVertexNormals();
      
      // Material cristalino realista
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(crystalColor[0], crystalColor[1], crystalColor[2]),
        transparent: true,
        opacity: 0.8,
        metalness: 0.0,        // Sin metalness para hielo puro
        roughness: 0.02,       // Muy pulido
        clearcoat: 1.0,        // Máximo brillo
        clearcoatRoughness: 0.0,
        transmission: 0.7,     // Alta transmisión de luz
        ior: 1.31,            // Índice de refracción real del hielo
        thickness: 0.5,
        emissive: new THREE.Color(crystalColor[0], crystalColor[1], crystalColor[2]),
        emissiveIntensity: 0.02,
        flatShading: false,    // Suavizado para cristales individuales
        side: THREE.FrontSide
      });
      
      const crystalMesh = new THREE.Mesh(geometry, material);
      
      // Calcular posición en la superficie esférica - MODIFICADO para favorecer los polos
      // Convertir coordenadas a coordenadas polares y aplicar sesgo polar
      let normalizedY = Math.min(1, Math.max(-1, position[1]));
      
      // Aplicar función de sesgo polar: valores más altos de |Y| son más probables
      const polarBias = Math.pow(Math.abs(normalizedY), 0.3); // Exponente < 1 favorece valores altos
      const biasedY = Math.sign(normalizedY) * polarBias;
      
      // Añadir ruido aleatorio pero mantener sesgo polar
      const polarNoise = rng.uniform(-0.3, 0.3) * (1 - Math.abs(biasedY)); // Menos ruido cerca de los polos
      const finalY = Math.min(1, Math.max(-1, biasedY + polarNoise));
      
      const phi = Math.acos(Math.abs(finalY)); 
      const theta = Math.atan2(position[0], 0.001) + angle;
      
      const surfaceRadius = this.planetRadius * rng.uniform(1.0005, 1.001); // MUY pegados a la superficie
      const x = surfaceRadius * Math.sin(phi) * Math.cos(theta);
      const y = surfaceRadius * finalY;
      const z = surfaceRadius * Math.sin(phi) * Math.sin(theta);
      
      crystalMesh.position.set(x, y, z);
      
      // Orientar para que la placa BoxGeometry quede acostada sobre la superficie
      const surfaceNormal = crystalMesh.position.clone().normalize();
      
      // Crear base ortonormal con la normal como eje Y (hacia afuera del planeta)  
      const tangent1 = new THREE.Vector3();
      const tangent2 = new THREE.Vector3();
      
      // Primer vector tangente
      if (Math.abs(surfaceNormal.x) < 0.9) {
        tangent1.set(1, 0, 0);
      } else {
        tangent1.set(0, 1, 0);
      }
      tangent1.crossVectors(tangent1, surfaceNormal).normalize();
      
      // Segundo vector tangente
      tangent2.crossVectors(surfaceNormal, tangent1).normalize();
      
      // Crear matriz de rotación donde Y apunta hacia afuera (normal), X y Z son tangentes
      const rotationMatrix = new THREE.Matrix4();
      rotationMatrix.makeBasis(tangent1, surfaceNormal, tangent2);
      
      // Aplicar rotación
      crystalMesh.rotation.setFromRotationMatrix(rotationMatrix);
      
      // Rotación aleatoria solo en el plano de la superficie (alrededor de Y)
      crystalMesh.rotateY(rng.uniform(0, Math.PI * 2));
      
      // Escala con variación natural - visibles pero achatados
      const scaleVariation = rng.uniform(0.8, 1.2); // Escala visible
      crystalMesh.scale.set(scaleVariation, scaleVariation, scaleVariation);
      
      this.crystals.push(crystalMesh);
      this.featuresGroup.add(crystalMesh);
    });
  }

  /**
   * Genera grietas en el hielo - MODIFICADO para favorecer regiones polares
   */
  private generateCracks(cracksData: any[]): void {
    const rng = new SeededRandom(42); // Seed fijo para grietas consistentes
    
    cracksData.forEach((crack) => {
      const angle = crack.angle || 0;
      const length = (crack.length || 1.0) * this.planetRadius * 2;
      const crackColor = crack.color || [80/255, 80/255, 80/255, 0.4];
      const width = (crack.width || 1) * 0.0005 * this.planetRadius; // MÁS delgadas - reducido a la mitad
      
      // NUEVA LÓGICA: Favorecer ubicaciones polares para las grietas
      // Generar latitud con sesgo polar (más probable cerca de los polos)
      const polarBiasedLat = rng.uniform(0.6, 1.0); // Entre 60° y 90° de latitud
      const hemisphere = rng.uniform(0, 1) > 0.5 ? 1 : -1; // Polo norte o sur aleatorio
      const phi = Math.acos(polarBiasedLat * hemisphere); // Convertir a phi (ángulo polar)
      
      // Crear una línea curvada para la grieta usando CatmullRomCurve3
      const points: THREE.Vector3[] = [];
      const numSegments = 20;
      
      for (let i = 0; i <= numSegments; i++) {
        const t = i / numSegments;
        const variance = Math.sin(t * Math.PI) * 0.1; // Curvatura de la grieta
        
        // Posición a lo largo de la grieta con curvatura - AHORA EN REGIONES POLARES
        const baseTheta = angle; // Ángulo base de la grieta
        const theta = baseTheta + (t - 0.5) * length / (this.planetRadius * Math.sin(Math.abs(phi))) + variance;
        
        const x = this.planetRadius * 1.002 * Math.sin(Math.abs(phi)) * Math.cos(theta);
        const y = this.planetRadius * 1.002 * Math.cos(Math.abs(phi)) * hemisphere;
        const z = this.planetRadius * 1.002 * Math.sin(Math.abs(phi)) * Math.sin(theta);
        
        points.push(new THREE.Vector3(x, y, z));
      }
      
      const curve = new THREE.CatmullRomCurve3(points);
      
      // Crear geometría de tubo para la grieta
      const tubeGeometry = new THREE.TubeGeometry(
        curve,
        numSegments * 2,
        width,
        8,
        false
      );
      
      // Material oscuro semi-transparente para las grietas
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(crackColor[0], crackColor[1], crackColor[2]),
        transparent: true,
        opacity: crackColor[3] || 0.4,
        emissive: new THREE.Color(0, 0, 0),
        shininess: 5
      });
      
      const crackMesh = new THREE.Mesh(tubeGeometry, material);
      
      this.cracks.push(crackMesh);
      this.featuresGroup.add(crackMesh);
    });
  }

  /**
   * Genera casquetes de hielo como campos de cristales agrupados
   */
  private generateIceCaps(iceCapsData: any[], rng: SeededRandom): void {
    iceCapsData.forEach((cap) => {
      const position = cap.position || [0, 0];
      const radius = (cap.radius || 0.3) * this.planetRadius;
      const capColor = cap.color || [0.678, 0.847, 1.0, 0.8];
      
      // Calcular posición central del ice cap
      const theta = Math.atan2(position[1], position[0]);
      const phi = Math.acos(Math.min(1, Math.max(-1, Math.sqrt(position[0]**2 + position[1]**2))));
      
      const centerX = this.planetRadius * 1.002 * Math.sin(phi) * Math.cos(theta);
      const centerY = this.planetRadius * 1.002 * Math.cos(phi);
      const centerZ = this.planetRadius * 1.002 * Math.sin(phi) * Math.sin(theta);
      
      const centerPosition = new THREE.Vector3(centerX, centerY, centerZ);
      const normalFromPlanet = centerPosition.clone().normalize();
      
      // Crear grupo para este ice cap
      const iceCapGroup = new THREE.Group();
      
      // Generar múltiples cristales pequeños en el área del ice cap
      const numCrystals = Math.floor(rng.uniform(8, 20)); // Entre 8-20 cristales por ice cap
      
      for (let i = 0; i < numCrystals; i++) {
        // Distribución aleatoria dentro del radio del ice cap
        const angle = rng.uniform(0, Math.PI * 2);
        const distance = rng.uniform(0, radius * 0.8); // Dentro del 80% del radio
        
        // Calcular posición offset desde el centro
        const offsetX = Math.cos(angle) * distance;
        const offsetZ = Math.sin(angle) * distance;
        
        // Crear vectores tangentes para el plano del ice cap
        const tangent1 = new THREE.Vector3();
        const tangent2 = new THREE.Vector3();
        
        if (Math.abs(normalFromPlanet.y) < 0.99) {
          tangent1.crossVectors(normalFromPlanet, new THREE.Vector3(0, 1, 0)).normalize();
        } else {
          tangent1.crossVectors(normalFromPlanet, new THREE.Vector3(1, 0, 0)).normalize();
        }
        tangent2.crossVectors(normalFromPlanet, tangent1).normalize();
        
        // Aplicar offset en el plano tangente
        const crystalPosition = centerPosition.clone()
          .addScaledVector(tangent1, offsetX)
          .addScaledVector(tangent2, offsetZ);
        
        // Proyectar de vuelta a la superficie esférica
        const direction = crystalPosition.normalize();
        const finalPosition = direction.multiplyScalar(this.planetRadius * rng.uniform(1.002, 1.008));
        
        // Crear cristal pequeño para el ice cap
        const crystalSize = rng.uniform(radius * 0.05, radius * 0.15); // Cristales pequeños
        const crystalHeight = rng.uniform(crystalSize * 0.4, crystalSize * 4.0); // Altura reducida - más achatados
        
        // Crear geometría de cristal con líneas afiladas usando ConeGeometry con base hexagonal
        // Usar ConeGeometry para obtener picos afilados naturales
        const crystalGeometry = new THREE.ConeGeometry(
          crystalSize,        // Radio de la base
          crystalHeight,      // Altura del cono
          6,                  // Segmentos radiales (hexagonal)
          1,                  // Segmentos de altura (líneas rectas y afiladas)
          false               // Base cerrada para solidez
        );
        
        // Modificar la geometría para crear facetas más definidas y afiladas
        const positions = crystalGeometry.attributes.position;
        const vertex = new THREE.Vector3();
        
        // Afilar las aristas creando facetas más pronunciadas
        for (let k = 0; k < positions.count; k++) {
          vertex.fromBufferAttribute(positions, k);
          
          // Si es un vértice del lateral (no del centro de la base ni del pico)
          if (vertex.y > 0.1 && vertex.y < crystalHeight * 0.9) {
            // Hacer las facetas más pronunciadas expandiendo los vértices laterales
            const angle = Math.atan2(vertex.z, vertex.x);
            const radius = Math.sqrt(vertex.x * vertex.x + vertex.z * vertex.z);
            
            // Crear facetas hexagonales más marcadas
            const facetAngle = Math.round(angle / (Math.PI / 3)) * (Math.PI / 3);
            const facetRadius = radius * 1.1; // Expandir ligeramente para facetas más definidas
            
            vertex.x = Math.cos(facetAngle) * facetRadius;
            vertex.z = Math.sin(facetAngle) * facetRadius;
            
            positions.setXYZ(k, vertex.x, vertex.y, vertex.z);
          }
        }
        
        positions.needsUpdate = true;
        
        // Recalcular normales para obtener facetas bien definidas
        crystalGeometry.computeVertexNormals();
        
        
        // Material cristalino con facetas afiladas para ice cap
        const crystalMaterial = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(capColor[0], capColor[1], capColor[2]),
          transparent: true,
          opacity: 0.85,
          metalness: 0.0,        // Sin metalness para cristales de hielo puros
          roughness: 0.05,       // Muy bajo para superficies cristalinas
          clearcoat: 1.0,        // Máximo clearcoat para brillo cristalino
          clearcoatRoughness: 0.0, // Sin roughness en clearcoat para reflejos nítidos
          transmission: 0.6,     // Mayor transmisión para efecto cristal
          ior: 1.31,            // Índice de refracción del hielo real
          thickness: 0.8,
          emissive: new THREE.Color(capColor[0], capColor[1], capColor[2]),
          emissiveIntensity: 0.03,
          flatShading: true,     // CRÍTICO: flatShading para líneas afiladas y facetas definidas
          side: THREE.FrontSide  // Solo cara frontal para mayor definición
        });
        
        const crystalMesh = new THREE.Mesh(crystalGeometry, crystalMaterial);
        
        // Posicionar el cristal
        crystalMesh.position.copy(finalPosition);
        
        // Orientar perpendicular a la superficie
        crystalMesh.lookAt(0, 0, 0);
        crystalMesh.rotateX(Math.PI / 2);
        crystalMesh.rotateZ(rng.uniform(0, Math.PI * 2)); // Rotación aleatoria
        
        // Escala con variación
        const scale = rng.uniform(0.7, 1.3);
        crystalMesh.scale.set(scale, scale, scale);
        
        iceCapGroup.add(crystalMesh);
        this.iceCaps.push(crystalMesh);
      }
      
      this.featuresGroup.add(iceCapGroup);
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.featuresGroup.position.copy(planetPosition);
    }
    scene.add(this.featuresGroup);
  }

  update(): void {
    // Sin animación - los planetas helados están congelados
    // Los cristales, grietas y casquetes son estáticos
  }

  getObject3D(): THREE.Group {
    return this.featuresGroup;
  }

  dispose(): void {
    this.crystals.forEach(crystal => {
      crystal.geometry.dispose();
      if (crystal.material instanceof THREE.Material) {
        crystal.material.dispose();
      }
    });
    
    this.cracks.forEach(crack => {
      crack.geometry.dispose();
      if (crack.material instanceof THREE.Material) {
        crack.material.dispose();
      }
    });
    
    this.iceCaps.forEach(cap => {
      cap.geometry.dispose();
      if (cap.material instanceof THREE.Material) {
        cap.material.dispose();
      }
    });
    
    this.crystals = [];
    this.cracks = [];
    this.iceCaps = [];
    this.featuresGroup.clear();
  }
}

/**
 * Función de utilidad para crear el efecto desde datos de Python
 */
export function createIcyFeaturesFromPythonData(
  planetRadius: number, 
  surfaceData: any, 
  globalSeed?: number
): IcyFeaturesEffect | null {
  
  // Verificar si hay datos de elementos helados
  const crystals = surfaceData.crystals;
  const cracks = surfaceData.cracks;
  const iceCaps = surfaceData.ice_caps;
  
  // Solo crear el efecto si hay al menos uno de los elementos
  if (!crystals && !cracks && !iceCaps) {
    return null;
  }
  
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  
  return new IcyFeaturesEffect(planetRadius, {
    crystals: crystals || [],
    cracks: cracks || [],
    iceCaps: iceCaps || [],
    seed: seed + 9000 // +9000 para IcyFeatures
  });
}