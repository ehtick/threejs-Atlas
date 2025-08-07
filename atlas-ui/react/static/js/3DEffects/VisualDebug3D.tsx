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
  orbitalAngle?: number;
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
   * Crear línea amarilla desde el centro hacia la SOMBRA (dirección opuesta al sol)
   * La línea apunta hacia donde está la sombra, mientras la esfera está donde está el sol
   */
  private createSunLine(): void {
    // Calcular posición basándose en los datos disponibles
    const sunAngle = this.calculateSunAngle();
    
    // LÍNEA AMARILLA: Desde el centro hacia la SOMBRA (dirección opuesta al sol)
    const lineDistance = this.planetRadius * 3; // Más corta para que se vea la esfera
    const shadowAngle = sunAngle; // Apunta hacia la sombra (sin inversión)
    
    // Calcular componente Y basándose en posición orbital
    const shadowX = lineDistance * Math.cos(shadowAngle);
    const shadowZ = lineDistance * Math.sin(shadowAngle);
    const shadowY = shadowZ * 0.8; // Y proporcional a Z para variación vertical
    
    // Crear geometría de línea real (no cilindro)
    const lineGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array([
      0, 0, 0,  // Centro del planeta (núcleo)
      shadowX, shadowY, shadowZ // Hacia donde está la SOMBRA
    ]);
    
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Material amarillo brillante para línea
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xFFFF00, // Amarillo brillante
      linewidth: 5, // Más gruesa
      transparent: false
    });
    
    this.sunLine = new THREE.Line(lineGeometry, lineMaterial);
    this.debugGroup.add(this.sunLine);
    
    // AÑADIR ESFERA DEL SOL usando la misma lógica que ModularPlanetRenderer
    // La esfera debe estar en actualSunAngle = sunAngle + Math.PI
    const actualSunAngle = sunAngle + Math.PI; // Misma lógica que ModularPlanetRenderer
    const sunSphereDistance = lineDistance * 0.7; // Posición intermedia
    
    const sunSphereX = sunSphereDistance * Math.cos(actualSunAngle);
    const sunSphereY = 0; // Mantener en el plano horizontal para alineación visual
    const sunSphereZ = sunSphereDistance * Math.sin(actualSunAngle);
    
    const sunSphereGeometry = new THREE.SphereGeometry(this.planetRadius * 0.15, 16, 16);
    const sunSphereMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xFFFF00, 
      transparent: false, 
      opacity: 1.0 
    });
    const sunSphere = new THREE.Mesh(sunSphereGeometry, sunSphereMaterial);
    sunSphere.position.set(sunSphereX, sunSphereY, sunSphereZ);
    this.debugGroup.add(sunSphere);
    
    // ESFERAS DE TEST para verificar visibilidad
    this.createTestSpheres();
    
  }
  
  /**
   * Ya no es necesario - las esferas de test han sido eliminadas
   * La esfera del sol ya se crea correctamente en createSunLine()
   */
  private createTestSpheres(): void {
    // Todas las esferas de test removidas según solicitud del usuario
    // Solo mantenemos la esfera amarilla del sol que se crea en createSunLine()
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
    
  }

  /**
   * Calcular el ángulo hacia la SOMBRA basándose en la posición ORBITAL (no rotación)
   * Este ángulo apunta hacia donde está la sombra del planeta
   */
  private calculateSunAngle(): number {
    if (this.params.sunAngle !== undefined) {
      return this.params.sunAngle;
    }
    
    // El orbital_angle apunta hacia la sombra
    // La línea amarilla sigue esta dirección, mientras la esfera del sol está en la opuesta
    const orbitalAngle = this.params.orbitalAngle || 0;
    
    return orbitalAngle; // Apunta hacia la sombra
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
   * Actualizar posición de la línea hacia la SOMBRA (dirección opuesta al sol)
   */
  private updateSunLine(): void {
    if (!this.sunLine) return;
    
    const sunAngle = this.calculateSunAngle();
    const shadowAngle = sunAngle; // Apunta hacia la sombra (sin inversión)
    const sceneRadius = this.planetRadius * 20;
    
    const geometry = this.sunLine.geometry as THREE.BufferGeometry;
    const positions = geometry.attributes.position.array as Float32Array;
    
    // Actualizar línea hacia donde está la SOMBRA
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
  
  const params: VisualDebug3DParams = {
    currentTime: Date.now() / 1000,
    cosmicOriginTime: planetData.debug?.cosmic_origin_time || planetData.timing?.cosmic_origin_time || planetData.cosmicOriginTime,
    rotationPeriod: planetData.planet_info?.rotation_period || planetData.rotation_period_seconds || 86400,
    initialAngleRotation: planetData.debug?.initial_angle_rotation || planetData.timing?.initial_angle_rotation || planetData.initialAngleRotation || 0,
    planetRadius: planetRadius,
    
    // Datos ORBITALES para posición del sol
    orbitalAngle: planetData.timing?.orbital_angle || 0,
    sunAngle: planetData.sun_angle || planetData.lighting?.sun_angle,
    
    showSunLine: true,
    showRotationLine: true,
    showRotationInfo: true,
    showTimeInfo: true
  };

  return new VisualDebug3DEffect(planetRadius, params);
}