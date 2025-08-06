/**
 * Visual Debug 3D Effect - Replica VISUAL_DEBUG = True de Pillow en ThreeJS
 * 
 * Muestra información de debug visual como:
 * - Línea amarilla desde el centro del planeta hacia la posición del sol
 * - Información de iluminación y rotación
 * - Overlays con datos de debug
 */

import * as THREE from 'three';

export interface VisualDebug3DParams {
  sunAngle?: number;
  planetRotation?: number;
  currentTime?: number;
  cosmicOriginTime?: number;
  rotationPeriod?: number;
  initialAngleRotation?: number;
  planetRadius?: number;
  showSunLine?: boolean;
  showRotationLine?: boolean;
  showRotationInfo?: boolean;
  showTimeInfo?: boolean;
}

export class VisualDebug3DEffect {
  private sunLine: THREE.Mesh | null = null;
  private rotationLine: THREE.Mesh | null = null;
  private debugGroup: THREE.Group;
  private params: VisualDebug3DParams;
  private planetRadius: number;

  constructor(planetRadius: number, params: VisualDebug3DParams = {}) {
    console.log('🐛 VisualDebug3D Constructor - planetRadius:', planetRadius);
    
    this.planetRadius = planetRadius;
    this.params = {
      showSunLine: true,
      showRotationLine: true,
      showRotationInfo: true,
      showTimeInfo: true,
      planetRadius: planetRadius,
      ...params
    };
    
    this.debugGroup = new THREE.Group();
    this.createDebugElements();
    
    console.log('✅ VisualDebug3D created with', this.debugGroup.children.length, 'debug elements');
  }

  /**
   * Crea los elementos de debug visual
   */
  private createDebugElements(): void {
    // Crear línea hacia el sol (como en Pillow VISUAL_DEBUG)
    if (this.params.showSunLine) {
      this.createSunLine();
    }
    
    // Crear línea de rotación (como en Pillow VISUAL_DEBUG)
    if (this.params.showRotationLine) {
      this.createRotationLine();
    }
  }

  /**
   * Crear línea amarilla desde el centro hacia la posición del sol
   * Replica exactamente lo que hace Pillow: draw_debug.line((center_x, center_y, sun_x, sun_y), fill="yellow", width=3)
   */
  private createSunLine(): void {
    // Calcular posición del sol basándose en los datos disponibles
    const sunAngle = this.calculateSunAngle();
    // Línea amarilla hacia el sol
    
    // Usar un CILINDRO amarillo en lugar de línea para mejor visibilidad
    const lineLength = this.planetRadius * 1.5; // Extender más allá del planeta
    const cylinderGeometry = new THREE.CylinderGeometry(
      this.planetRadius * 0.02, // Radio del cilindro (2% del radio del planeta)
      this.planetRadius * 0.02, 
      lineLength,
      8 // Segmentos
    );
    
    // Material amarillo brillante
    const lineMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFFF00, // Yellow brillante
      transparent: false
    });
    
    // Crear el cilindro como línea
    const sunLineMesh = new THREE.Mesh(cylinderGeometry, lineMaterial);
    
    // Posicionar y orientar el cilindro desde el centro hacia el sol
    const sunX = (lineLength / 2) * Math.cos(sunAngle);
    const sunZ = (lineLength / 2) * Math.sin(sunAngle);
    
    sunLineMesh.position.set(sunX, 0, sunZ);
    
    // Rotar el cilindro para que apunte hacia el sol
    sunLineMesh.rotation.z = -sunAngle;
    
    this.debugGroup.add(sunLineMesh);
    this.sunLine = sunLineMesh as any; // Para compatibilidad
    
    console.log('🟡 Sun line created - angle:', (sunAngle * 180 / Math.PI).toFixed(1) + '°');
  }

  /**
   * Crear línea gris para mostrar la dirección de rotación del planeta
   * Replica: draw_main.line((line_x1, line_y1, line_x2, line_y2), fill=(138, 138, 138), width=2)
   */
  private createRotationLine(): void {
    const currentRotation = this.calculateCurrentRotation();
    // Línea gris de rotación
    
    // Crear cilindro gris para la línea de rotación
    const lineLength = this.planetRadius * 2.2; // Un poco más largo que la línea del sol
    const cylinderGeometry = new THREE.CylinderGeometry(
      this.planetRadius * 0.015, // Un poco más delgado que la línea del sol
      this.planetRadius * 0.015,
      lineLength,
      8
    );
    
    // Material gris como en Pillow (138, 138, 138)
    const rotationMaterial = new THREE.MeshBasicMaterial({
      color: 0x8A8A8A, // RGB(138, 138, 138) = #8A8A8A
      transparent: false
    });
    
    // Crear el cilindro
    const rotationLineMesh = new THREE.Mesh(cylinderGeometry, rotationMaterial);
    
    // En Pillow la línea va desde un extremo al otro, cruzando el planeta
    // line_x1 = center_x + planet_radius * math.cos(angle_rotation) / 64  (punto cerca del centro)
    // line_x2 = center_x - planet_radius * math.cos(angle_rotation)       (punto en el borde opuesto)
    
    // Posicionar el cilindro en el medio de esa línea
    const rotationX = 0; // El centro está en el planeta
    const rotationZ = 0;
    
    rotationLineMesh.position.set(rotationX, 0, rotationZ);
    
    // Rotar el cilindro para que apunte en la dirección de rotación
    rotationLineMesh.rotation.z = -currentRotation;
    
    this.debugGroup.add(rotationLineMesh);
    this.rotationLine = rotationLineMesh;
    
    console.log('🔘 Rotation line created - angle:', (currentRotation * 180 / Math.PI).toFixed(1) + '°');
  }

  /**
   * Calcular el ángulo del sol basándose en los datos disponibles
   * Si no hay sun_angle explícito, calcularlo basándose en la rotación planetaria
   */
  private calculateSunAngle(): number {
    if (this.params.sunAngle !== undefined) {
      return this.params.sunAngle;
    }
    
    // Calcular basándose en la rotación actual del planeta
    // Esto es una aproximación - el sol debería estar en dirección opuesta a la rotación
    const currentRotation = this.calculateCurrentRotation();
    
    // El sol está en la dirección "opuesta" para crear el efecto de iluminación
    // Añadir π/4 para un efecto de iluminación lateral más dramático
    return currentRotation + Math.PI + (Math.PI / 4);
  }

  /**
   * Calcular rotación actual exacta como en Pillow
   */
  private calculateCurrentRotation(): number {
    const currentTime = this.params.currentTime || Date.now() / 1000;
    const cosmicOriginTime = this.params.cosmicOriginTime || currentTime - 3600; // 1 hora atrás como fallback
    const rotationPeriod = this.params.rotationPeriod || 86400; // 24 horas por defecto
    const initialAngleRotation = this.params.initialAngleRotation || 0;
    
    const timeElapsedSeconds = currentTime - cosmicOriginTime;
    const angleVelocityRotation = (2 * Math.PI) / rotationPeriod;
    const angleRotation = (initialAngleRotation + timeElapsedSeconds * angleVelocityRotation) % (2 * Math.PI);
    
    // Solo loggear ocasionalmente para no saturar la consola
    if (Math.random() < 0.001) { // Solo 0.1% de las veces
      console.log('🐛 Rotation calculation:', {
        currentTime,
        cosmicOriginTime,
        timeElapsedSeconds,
        angleRotation: angleRotation * 180 / Math.PI + '°'
      });
    }
    
    return angleRotation;
  }

  /**
   * Actualizar el efecto de debug
   */
  update(deltaTime: number, newParams?: Partial<VisualDebug3DParams>): void {
    if (newParams) {
      this.params = { ...this.params, ...newParams };
    }
    
    // Actualizar línea del sol si es necesario
    if (this.sunLine && this.params.showSunLine) {
      this.updateSunLine();
    }
    
    // Actualizar línea de rotación si es necesario
    if (this.rotationLine && this.params.showRotationLine) {
      this.updateRotationLine();
    }
  }

  /**
   * Actualizar posición de la línea del sol
   */
  private updateSunLine(): void {
    if (!this.sunLine) return;
    
    const sunAngle = this.calculateSunAngle();
    const geometry = this.sunLine.geometry as THREE.BufferGeometry;
    const positions = geometry.attributes.position.array as Float32Array;
    
    // Actualizar posición final de la línea (mantener centro en 0,0,0)
    positions[3] = this.planetRadius * Math.cos(sunAngle); // sun_x
    positions[4] = 0; // sun_y (plano ecuatorial)
    positions[5] = this.planetRadius * Math.sin(sunAngle); // sun_z
    
    geometry.attributes.position.needsUpdate = true;
  }

  /**
   * Actualizar rotación de la línea de rotación
   */
  private updateRotationLine(): void {
    if (!this.rotationLine) return;
    
    const currentRotation = this.calculateCurrentRotation();
    this.rotationLine.rotation.z = -currentRotation;
  }

  /**
   * Añadir a la escena
   */
  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.debugGroup.position.copy(planetPosition);
    }
    
    scene.add(this.debugGroup);
  }

  /**
   * Obtener información de debug como texto
   */
  getDebugInfo(): { [key: string]: any } {
    const currentRotation = this.calculateCurrentRotation();
    const sunAngle = this.calculateSunAngle();
    
    return {
      'Current Time': new Date().toISOString(),
      'Planet Rotation': `${(currentRotation * 180 / Math.PI).toFixed(2)}°`,
      'Sun Angle': `${(sunAngle * 180 / Math.PI).toFixed(2)}°`,
      'Rotation Period': `${this.params.rotationPeriod}s`,
      'Cosmic Origin': new Date((this.params.cosmicOriginTime || 0) * 1000).toISOString()
    };
  }

  /**
   * Alternar visibilidad de elementos de debug
   */
  toggleSunLine(visible: boolean): void {
    if (this.sunLine) {
      this.sunLine.visible = visible;
    }
  }

  toggleRotationLine(visible: boolean): void {
    if (this.rotationLine) {
      this.rotationLine.visible = visible;
    }
  }

  /**
   * Obtener el grupo 3D para manipulación
   */
  getObject3D(): THREE.Group {
    return this.debugGroup;
  }

  /**
   * Limpiar recursos
   */
  dispose(): void {
    this.debugGroup.clear();
    
    if (this.sunLine) {
      this.sunLine.geometry.dispose();
      (this.sunLine.material as THREE.Material).dispose();
    }
    
    if (this.rotationLine) {
      this.rotationLine.geometry.dispose();
      (this.rotationLine.material as THREE.Material).dispose();
    }
  }
}

// Función de utilidad para crear el efecto desde datos de Python
export function createVisualDebug3DFromPythonData(planetData: any, planetRadius: number): VisualDebug3DEffect {
  console.log('🐛 createVisualDebug3DFromPythonData called with planetData:', planetData);
  
  const params: VisualDebug3DParams = {
    currentTime: Date.now() / 1000,
    cosmicOriginTime: planetData.debug?.cosmic_origin_time || planetData.timing?.cosmic_origin_time || planetData.cosmicOriginTime,
    rotationPeriod: planetData.planet_info?.rotation_period || planetData.rotation_period_seconds || 86400,
    initialAngleRotation: planetData.debug?.initial_angle_rotation || planetData.timing?.initial_angle_rotation || planetData.initialAngleRotation || 0,
    planetRadius: planetRadius,
    
    // Si Python envía sun_angle explícitamente, usarlo
    sunAngle: planetData.sun_angle || planetData.lighting?.sun_angle,
    
    showSunLine: true,
    showRotationLine: true,
    showRotationInfo: true,
    showTimeInfo: true
  };

  console.log('🐛 Processed params for VisualDebug3D:', params);
  return new VisualDebug3DEffect(planetRadius, params);
}