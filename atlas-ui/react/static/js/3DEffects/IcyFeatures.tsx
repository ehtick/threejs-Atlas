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
import { SeededRandom } from '../Utils/SeededRandom';

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
      this.generateCracks(params.cracks, rng);
    }
    
    // Generar casquetes de hielo si hay datos
    if (params.iceCaps && params.iceCaps.length > 0) {
      this.generateIceCaps(params.iceCaps, rng);
    }
  }

  /**
   * Genera cristales de hielo 3D
   */
  private generateCrystals(crystalsData: any[], rng: SeededRandom): void {
    crystalsData.forEach((crystal) => {
      // Extraer datos del cristal
      const position = crystal.position || [0, 0];
      const length = (crystal.length || 0.1) * this.planetRadius * 2;
      const width = (crystal.width || 0.05) * this.planetRadius;
      const angle = crystal.angle || 0;
      const crystalColor = crystal.color || [172/255, 215/255, 230/255, 1.0];
      
      // Crear geometría hexagonal para el cristal (más realista que un cubo)
      const shape = new THREE.Shape();
      const sides = 6; // Hexágono
      for (let i = 0; i <= sides; i++) {
        const theta = (i / sides) * Math.PI * 2;
        const x = Math.cos(theta) * width;
        const y = Math.sin(theta) * width;
        if (i === 0) {
          shape.moveTo(x, y);
        } else {
          shape.lineTo(x, y);
        }
      }
      
      // Extruir para crear el cristal 3D
      const extrudeSettings = {
        steps: 2,
        depth: length,
        bevelEnabled: true,
        bevelThickness: width * 0.1,
        bevelSize: width * 0.1,
        bevelSegments: 3
      };
      
      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      
      // Material de cristal con transparencia y refracción
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(crystalColor[0], crystalColor[1], crystalColor[2]),
        transparent: true,
        opacity: 0.7,
        metalness: 0.1,
        roughness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        transmission: 0.6, // Transmisión de luz para efecto cristalino
        ior: 1.45, // Índice de refracción del hielo
        thickness: 0.5,
        emissive: new THREE.Color(crystalColor[0], crystalColor[1], crystalColor[2]),
        emissiveIntensity: 0.05
      });
      
      const crystalMesh = new THREE.Mesh(geometry, material);
      
      // Posicionar el cristal en la superficie esférica
      const phi = Math.acos(position[1]); // Y normalizada a ángulo polar
      const theta = Math.atan2(position[0], 0.001) + angle; // X a ángulo azimutal + rotación
      
      const x = this.planetRadius * 1.002 * Math.sin(phi) * Math.cos(theta);
      const y = this.planetRadius * 1.002 * position[1];
      const z = this.planetRadius * 1.002 * Math.sin(phi) * Math.sin(theta);
      
      crystalMesh.position.set(x, y, z);
      
      // Orientar el cristal perpendicular a la superficie
      crystalMesh.lookAt(0, 0, 0);
      crystalMesh.rotateX(Math.PI / 2);
      crystalMesh.rotateZ(angle);
      
      // Escala original
      const scale = rng.uniform(0.8, 1.2);
      crystalMesh.scale.set(scale, scale, scale);
      
      this.crystals.push(crystalMesh);
      this.featuresGroup.add(crystalMesh);
    });
  }

  /**
   * Genera grietas en el hielo
   */
  private generateCracks(cracksData: any[], rng: SeededRandom): void {
    cracksData.forEach((crack, index) => {
      const angle = crack.angle || 0;
      const length = (crack.length || 1.0) * this.planetRadius * 2;
      const crackColor = crack.color || [80/255, 80/255, 80/255, 0.4];
      const width = (crack.width || 1) * 0.001 * this.planetRadius; // Más delgadas
      
      // Crear una línea curvada para la grieta usando CatmullRomCurve3
      const points: THREE.Vector3[] = [];
      const numSegments = 20;
      
      for (let i = 0; i <= numSegments; i++) {
        const t = i / numSegments;
        const variance = Math.sin(t * Math.PI) * 0.1; // Curvatura de la grieta
        
        // Posición a lo largo de la grieta con curvatura
        const phi = Math.PI / 2 + angle; // Ecuador + ángulo
        const theta = (t - 0.5) * length / this.planetRadius + variance;
        
        const x = this.planetRadius * 1.002 * Math.sin(phi) * Math.cos(theta);
        const y = this.planetRadius * 1.002 * Math.cos(phi);
        const z = this.planetRadius * 1.002 * Math.sin(phi) * Math.sin(theta);
        
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
   * Genera casquetes de hielo polares
   */
  private generateIceCaps(iceCapsData: any[], rng: SeededRandom): void {
    iceCapsData.forEach((cap, index) => {
      const position = cap.position || [0, 0];
      const radius = (cap.radius || 0.3) * this.planetRadius;
      const capColor = cap.color || [0.678, 0.847, 1.0, 0.8];
      
      // Crear geometría semi-esférica para el casquete
      const geometry = new THREE.SphereGeometry(
        radius,
        32,
        16,
        0,
        Math.PI * 2,
        0,
        Math.PI / 2 // Solo hemisferio
      );
      
      // Material brillante para el hielo
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(capColor[0], capColor[1], capColor[2]),
        transparent: true,
        opacity: capColor[3] || 0.8,
        emissive: new THREE.Color(capColor[0] * 0.5, capColor[1] * 0.5, capColor[2] * 0.5),
        emissiveIntensity: 0.2,
        shininess: 60,
        specular: new THREE.Color(1, 1, 1)
      });
      
      const capMesh = new THREE.Mesh(geometry, material);
      
      // Posicionar el casquete en la superficie
      // Convertir coordenadas normalizadas a posición 3D
      const theta = Math.atan2(position[1], position[0]);
      const phi = Math.acos(Math.min(1, Math.max(-1, Math.sqrt(position[0]**2 + position[1]**2))));
      
      const x = this.planetRadius * 1.002 * Math.sin(phi) * Math.cos(theta);
      const y = this.planetRadius * 1.002 * Math.cos(phi);
      const z = this.planetRadius * 1.002 * Math.sin(phi) * Math.sin(theta);
      
      capMesh.position.set(x, y, z);
      
      // Orientar el casquete hacia el centro del planeta
      capMesh.lookAt(0, 0, 0);
      
      // Añadir algo de variación en la escala
      const scaleVariation = rng.uniform(0.9, 1.1);
      capMesh.scale.set(scaleVariation, scaleVariation, scaleVariation);
      
      this.iceCaps.push(capMesh);
      this.featuresGroup.add(capMesh);
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.featuresGroup.position.copy(planetPosition);
    }
    scene.add(this.featuresGroup);
  }

  update(deltaTime: number): void {
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