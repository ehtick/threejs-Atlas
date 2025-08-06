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
  private sunLine: THREE.Line | null = null;
  private rotationLine: THREE.Line | null = null;
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
    
    // LÍNEA AMARILLA: Desde el centro hacia el lado OPUESTO al sol (dirección de la sombra)
    const sceneRadius = this.planetRadius * 20; // Extender hasta el borde de la escena
    const shadowAngle = sunAngle + Math.PI; // Lado opuesto al sol
    
    // Crear geometría de línea real (no cilindro)
    const lineGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array([
      0, 0, 0,  // Centro del planeta (núcleo)
      sceneRadius * Math.cos(shadowAngle), // Hacia el borde de la escena
      0, // Mantener en plano ecuatorial
      sceneRadius * Math.sin(shadowAngle)  // Dirección opuesta al sol
    ]);
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Material amarillo brillante para línea
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xFFFF00, // Amarillo brillante
      linewidth: 3,
      transparent: false
    });
    
    this.sunLine = new THREE.Line(lineGeometry, lineMaterial);
    this.debugGroup.add(this.sunLine);
    
    console.log('🟡 Shadow direction line created - pointing away from sun at angle:', (shadowAngle * 180 / Math.PI).toFixed(1) + '°');
  }

  /**
   * Crear línea gris para mostrar la dirección de rotación del planeta
   * Replica: draw_main.line((line_x1, line_y1, line_x2, line_y2), fill=(138, 138, 138), width=2)
   */
  private createRotationLine(): void {
    const currentRotation = this.calculateCurrentRotation();
    
    // LÍNEA GRIS: Eje de rotación completo atravesando el planeta de borde a borde de la escena
    const sceneRadius = this.planetRadius * 25; // Aún más largo que la línea del sol
    
    // Crear geometría de línea real que atraviesa completamente
    const lineGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array([
      -sceneRadius * Math.cos(currentRotation), // Un extremo de la escena
      0, // En el plano ecuatorial
      -sceneRadius * Math.sin(currentRotation),
      sceneRadius * Math.cos(currentRotation),  // Extremo opuesto de la escena
      0, // En el plano ecuatorial  
      sceneRadius * Math.sin(currentRotation)
    ]);
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Material gris como en Pillow (138, 138, 138)
    const rotationMaterial = new THREE.LineBasicMaterial({
      color: 0x8A8A8A, // RGB(138, 138, 138) = #8A8A8A
      linewidth: 2,
      transparent: false
    });
    
    this.rotationLine = new THREE.Line(lineGeometry, rotationMaterial);
    this.debugGroup.add(this.rotationLine);
    
    console.log('🔘 Rotation axis line created - crosses entire scene at angle:', (currentRotation * 180 / Math.PI).toFixed(1) + '°');
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
   * Actualizar posición de la línea del sol (dirección de sombra)
   */
  private updateSunLine(): void {
    if (!this.sunLine) return;
    
    const sunAngle = this.calculateSunAngle();
    const shadowAngle = sunAngle + Math.PI; // Lado opuesto al sol
    const sceneRadius = this.planetRadius * 20;
    
    const geometry = this.sunLine.geometry as THREE.BufferGeometry;
    const positions = geometry.attributes.position.array as Float32Array;
    
    // Actualizar línea hacia la dirección de la sombra
    positions[3] = sceneRadius * Math.cos(shadowAngle);
    positions[4] = 0; // Plano ecuatorial
    positions[5] = sceneRadius * Math.sin(shadowAngle);
    
    geometry.attributes.position.needsUpdate = true;
  }

  /**
   * Actualizar eje de rotación completo
   */
  private updateRotationLine(): void {
    if (!this.rotationLine) return;
    
    const currentRotation = this.calculateCurrentRotation();
    const sceneRadius = this.planetRadius * 25;
    
    const geometry = this.rotationLine.geometry as THREE.BufferGeometry;
    const positions = geometry.attributes.position.array as Float32Array;
    
    // Actualizar ambos extremos del eje de rotación
    positions[0] = -sceneRadius * Math.cos(currentRotation); // Extremo 1 - X
    positions[1] = 0; // Extremo 1 - Y (plano ecuatorial)
    positions[2] = -sceneRadius * Math.sin(currentRotation); // Extremo 1 - Z
    positions[3] = sceneRadius * Math.cos(currentRotation);  // Extremo 2 - X
    positions[4] = 0; // Extremo 2 - Y (plano ecuatorial)
    positions[5] = sceneRadius * Math.sin(currentRotation);  // Extremo 2 - Z
    
    geometry.attributes.position.needsUpdate = true;
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
      (this.sunLine.material as THREE.LineBasicMaterial).dispose();
    }
    
    if (this.rotationLine) {
      this.rotationLine.geometry.dispose();
      (this.rotationLine.material as THREE.LineBasicMaterial).dispose();
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