/**
 * Magma Eruptions Effect - Sistema de erupciones y llamaradas de magma
 * 
 * Simula proyectiles de magma que saltan sobre la superficie del planeta,
 * similar a las llamaradas solares pero para planetas magmáticos.
 * 
 * Responsabilidades:
 * - Generar erupciones periódicas desde lagos de magma
 * - Animar arcos parabólicos de proyectiles de lava
 * - Efectos de salpicadura y explosión al impactar
 * - Iluminación dinámica de las erupciones
 * - Sincronización con cosmic_origin_time
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface MagmaEruptionParams {
  magmaLakes?: any[]; // Posiciones de lagos de magma desde Python
  seed?: number;
  eruptionIntensity?: number; // Qué tan fuertes son las erupciones (0.1 - 2.0)
  eruptionFrequency?: number; // Con qué frecuencia ocurren (erupciones por minuto)
  projectileCount?: number; // Número de proyectiles por erupción
  projectileSize?: number; // Tamaño de los proyectiles
  arcHeight?: number; // Altura máxima del arco (relativo al radio del planeta)
  cosmicOriginTime?: number;
  timeSpeed?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  ERUPTION_INTENSITY: { min: 0.5, max: 1.5 },
  ERUPTION_FREQUENCY: { min: 3, max: 8 }, // Erupciones por minuto
  PROJECTILE_COUNT: { min: 3, max: 8 }, // Menos proyectiles pero más realistas
  PROJECTILE_SIZE: { min: 0.001, max: 0.004 }, // Proyectiles más pequeños
  ARC_HEIGHT: { min: 0.01, max: 0.04 }, // Mucho más bajo: 1-4% del radio del planeta
  FLARE_LENGTH: { min: 0.08, max: 0.25 }, // Longitud de las llamaradas
  TIME_SPEED: { min: 0.8, max: 1.2 }
};

interface Projectile {
  mesh: THREE.Mesh;
  origin: THREE.Vector3;
  target: THREE.Vector3;
  currentPosition: THREE.Vector3;
  velocity: THREE.Vector3;
  progress: number; // 0 a 1
  totalTime: number; // Duración total del vuelo
  size: number;
  temperature: number; // Para variación de color
  trail: THREE.Mesh[]; // Estela del proyectil
}

interface EruptionPattern {
  id: number;
  position: THREE.Vector3;
  intervalSeconds: number; // Intervalo entre erupciones para este punto
  phaseOffset: number; // Offset de fase para sincronización
  intensity: number; // Intensidad de las erupciones (afecta número de proyectiles)
}

/**
 * Efecto de Erupciones de Magma
 */
export class MagmaEruptionsEffect {
  private eruptionsGroup: THREE.Group;
  private projectilesGroup: THREE.Group;
  private trailsGroup: THREE.Group;
  private splashGroup: THREE.Group;
  private eruptionPatterns: EruptionPattern[] = [];
  private params: MagmaEruptionParams;
  private planetRadius: number;
  private cosmicOriginTime: number;
  private cosmicOffset: number;
  private rng: SeededRandom;
  
  // Pool de objetos para optimización
  private projectilePool: THREE.Mesh[] = [];
  private trailPool: THREE.Mesh[] = [];
  private splashPool: THREE.Mesh[] = [];

  // Shader para proyectiles incandescentes
  private static readonly projectileVertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float temperature;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      
      // Pequeña deformación para simular fluido
      vec3 pos = position;
      float deform = sin(time * 10.0 + position.x * 5.0) * 0.02;
      pos += normal * deform;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  private static readonly projectileFragmentShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float temperature;
    uniform vec3 baseColor;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float glowIntensity;
    
    void main() {
      // Color basado en temperatura
      vec3 coolColor = vec3(0.4, 0.08, 0.0); // Rojo oscuro
      vec3 warmColor = vec3(0.9, 0.3, 0.05); // Naranja
      vec3 hotColor = vec3(1.0, 0.8, 0.3); // Amarillo
      vec3 veryHotColor = vec3(1.2, 1.0, 0.8); // Blanco caliente
      
      vec3 color;
      if (temperature > 0.75) {
        color = mix(hotColor, veryHotColor, (temperature - 0.75) * 4.0);
      } else if (temperature > 0.5) {
        color = mix(warmColor, hotColor, (temperature - 0.5) * 4.0);
      } else if (temperature > 0.25) {
        color = mix(coolColor, warmColor, (temperature - 0.25) * 4.0);
      } else {
        color = coolColor;
      }
      
      // Iluminación básica
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      vec3 normal = normalize(vWorldNormal);
      float dotNL = dot(normal, lightDir);
      float lighting = smoothstep(-0.3, 0.1, dotNL) * 0.3 + 0.7;
      
      // Auto-iluminación intensa
      float emission = glowIntensity * (0.8 + temperature * 0.4);
      color *= lighting;
      color += color * emission;
      
      // Efecto de calor en los bordes
      float fresnel = pow(1.0 - abs(dot(normalize(vPosition), vNormal)), 2.0);
      color += veryHotColor * fresnel * 0.3 * temperature;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  // Shader para estelas/trails
  private static readonly trailVertexShader = `
    varying vec2 vUv;
    varying float vAlpha;
    attribute float alpha;
    
    void main() {
      vUv = uv;
      vAlpha = alpha;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  private static readonly trailFragmentShader = `
    varying vec2 vUv;
    varying float vAlpha;
    
    uniform vec3 color;
    uniform float time;
    
    void main() {
      // Gradiente de opacidad
      float fade = 1.0 - vUv.y;
      float alpha = fade * vAlpha * 0.6;
      
      // Color que se desvanece
      vec3 finalColor = color * (0.5 + fade * 0.5);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  constructor(planetRadius: number, params: MagmaEruptionParams = {}) {
    this.planetRadius = planetRadius;
    
    // Sistema de tiempo determinista
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.cosmicOriginTime = params.cosmicOriginTime || 514080000;
    this.cosmicOffset = (seed % 3600) * 10;
    this.rng = new SeededRandom(seed);
    
    this.params = {
      eruptionIntensity: params.eruptionIntensity || this.rng.uniform(
        PROCEDURAL_RANGES.ERUPTION_INTENSITY.min, 
        PROCEDURAL_RANGES.ERUPTION_INTENSITY.max
      ),
      eruptionFrequency: params.eruptionFrequency || this.rng.uniform(
        PROCEDURAL_RANGES.ERUPTION_FREQUENCY.min,
        PROCEDURAL_RANGES.ERUPTION_FREQUENCY.max
      ),
      projectileCount: params.projectileCount || Math.floor(this.rng.uniform(
        PROCEDURAL_RANGES.PROJECTILE_COUNT.min,
        PROCEDURAL_RANGES.PROJECTILE_COUNT.max
      )),
      projectileSize: params.projectileSize || this.rng.uniform(
        PROCEDURAL_RANGES.PROJECTILE_SIZE.min,
        PROCEDURAL_RANGES.PROJECTILE_SIZE.max
      ),
      arcHeight: params.arcHeight || this.rng.uniform(
        PROCEDURAL_RANGES.ARC_HEIGHT.min,
        PROCEDURAL_RANGES.ARC_HEIGHT.max
      ),
      timeSpeed: params.timeSpeed || this.rng.uniform(
        PROCEDURAL_RANGES.TIME_SPEED.min,
        PROCEDURAL_RANGES.TIME_SPEED.max
      ),
      seed,
      cosmicOriginTime: this.cosmicOriginTime,
      magmaLakes: params.magmaLakes || []
    };
    
    // Crear grupos para organización
    this.eruptionsGroup = new THREE.Group();
    this.projectilesGroup = new THREE.Group();
    this.trailsGroup = new THREE.Group();
    this.splashGroup = new THREE.Group();
    
    this.eruptionsGroup.add(this.projectilesGroup);
    this.eruptionsGroup.add(this.trailsGroup);
    this.eruptionsGroup.add(this.splashGroup);
    
    // Generar patrones de erupción deterministas
    this.generateEruptionPatterns();
    
    // Pre-crear pool de objetos
    this.initializeObjectPools();
  }

  private generateEruptionPatterns(): void {
    // Determinar número de puntos de erupción basado en los lagos de magma
    let eruptionPoints: THREE.Vector3[] = [];
    
    if (this.params.magmaLakes && this.params.magmaLakes.length > 0) {
      // Usar posiciones de lagos de magma existentes
      eruptionPoints = this.params.magmaLakes.map(lake => {
        const pos = lake.position_3d || [0, 0, 1];
        return new THREE.Vector3(pos[0], pos[1], pos[2])
          .normalize()
          .multiplyScalar(this.planetRadius * 1.002);
      });
    } else {
      // Generar puntos aleatorios deterministas
      const numPoints = Math.floor(this.rng.uniform(3, 8));
      for (let i = 0; i < numPoints; i++) {
        const phi = this.rng.uniform(0, 2 * Math.PI);
        const cosTheta = this.rng.uniform(-1, 1);
        const theta = Math.acos(cosTheta);
        
        eruptionPoints.push(new THREE.Vector3(
          Math.sin(theta) * Math.cos(phi),
          Math.sin(theta) * Math.sin(phi),
          Math.cos(theta)
        ).multiplyScalar(this.planetRadius * 1.002));
      }
    }
    
    // Crear patrones de erupción para cada punto
    this.eruptionPatterns = eruptionPoints.map((position, index) => ({
      id: index,
      position: position.clone(),
      intervalSeconds: this.rng.uniform(12, 35), // 12-35 segundos entre erupciones por punto
      phaseOffset: this.rng.uniform(0, Math.PI * 2), // Offset de fase único
      intensity: this.rng.uniform(0.7, 1.3) // Intensidad más moderada
    }));
    
  }

  private initializeObjectPools(): void {
    // Pool de proyectiles
    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.SphereGeometry(
        this.params.projectileSize! * this.planetRadius,
        8, 6
      );
      
      const material = new THREE.ShaderMaterial({
        vertexShader: MagmaEruptionsEffect.projectileVertexShader,
        fragmentShader: MagmaEruptionsEffect.projectileFragmentShader,
        uniforms: {
          time: { value: 0 },
          temperature: { value: 1.0 },
          baseColor: { value: new THREE.Color(1.0, 0.5, 0.1) },
          lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
          lightPosition: { value: new THREE.Vector3(0, 0, 0) },
          glowIntensity: { value: 1.0 }
        }
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.visible = false;
      this.projectilePool.push(mesh);
      this.projectilesGroup.add(mesh);
    }
  }



  private createTrailSegment(position: THREE.Vector3, temperature: number): void {
    // Por ahora, simplemente marcar la posición
    // En una implementación completa, esto crearía partículas de estela
  }

  private createSplash(position: THREE.Vector3, size: number): void {
    // Crear efecto de salpicadura al impactar
    // Por ahora, simplemente marcar el impacto
    // En una implementación completa, esto crearía partículas de salpicadura
  }

  update(deltaTime?: number, planetRotation?: number): void {
    // Calcular tiempo cósmico actual (igual que MagmaFlowsEffect)
    const currentTimeSeconds = Date.now() / 1000;
    const timeSinceCosmicOrigin = currentTimeSeconds - this.cosmicOriginTime;
    const animTime = (timeSinceCosmicOrigin + this.cosmicOffset) * this.params.timeSpeed!;
    const windowedTime = animTime % 10000;
    
    // MÉTODO DETERMINISTA: Calcular qué proyectiles deberían existir AHORA
    this.calculateCurrentProjectiles(animTime);
    
    // Actualizar uniforms de tiempo en todos los materiales
    this.projectilePool.forEach(mesh => {
      const material = mesh.material as THREE.ShaderMaterial;
      material.uniforms.time.value = windowedTime;
    });
  }

  private calculateCurrentProjectiles(animTime: number): void {
    // Limpiar todos los proyectiles visibles
    this.projectilePool.forEach(mesh => {
      mesh.visible = false;
    });
    
    let projectileIndex = 0;
    
    // Para cada patrón de erupción, calcular qué proyectiles deberían estar activos
    for (const pattern of this.eruptionPatterns) {
      // Calcular todas las erupciones que han ocurrido desde el inicio del tiempo
      const eruptionInterval = pattern.intervalSeconds;
      const phaseOffset = pattern.phaseOffset / (Math.PI * 2) * eruptionInterval; // Convertir fase a segundos
      
      // Tiempo efectivo para este patrón
      const effectiveTime = animTime - phaseOffset;
      
      if (effectiveTime < 0) continue; // Esta erupción aún no ha empezado
      
      // Calcular número de erupciones completas
      const eruptionNumber = Math.floor(effectiveTime / eruptionInterval);
      
      // Para las últimas N erupciones, verificar si tienen proyectiles activos
      const lookbackEruptions = 3; // Mirar las últimas 3 erupciones
      
      for (let i = Math.max(0, eruptionNumber - lookbackEruptions); i <= eruptionNumber; i++) {
        const eruptionStartTime = i * eruptionInterval + phaseOffset;
        
        // Crear RNG único para esta erupción específica
        const eruptionSeed = this.params.seed! + pattern.id * 1000 + i * 13;
        const eruptionRng = new SeededRandom(eruptionSeed);
        
        // Calcular número de proyectiles para esta erupción
        const projectileCount = Math.floor(
          (this.params.projectileCount! * pattern.intensity) * eruptionRng.uniform(0.8, 1.2)
        );
        
        // Para cada proyectil, verificar si debería estar activo
        for (let j = 0; j < projectileCount; j++) {
          const projectileStartTime = eruptionStartTime + eruptionRng.uniform(0, 1.0); // Offset más largo
          const flightTime = eruptionRng.uniform(4, 8) * pattern.intensity; // Llamaradas más largas
          const projectileEndTime = projectileStartTime + flightTime;
          
          // Verificar si este proyectil debería estar volando ahora
          if (animTime >= projectileStartTime && animTime <= projectileEndTime) {
            
            // Obtener mesh del pool
            if (projectileIndex < this.projectilePool.length) {
              const mesh = this.projectilePool[projectileIndex];
              projectileIndex++;
              
              // Calcular la trayectoria de este proyectil específico
              this.renderProjectileAtTime(mesh, pattern, eruptionRng, animTime, projectileStartTime, flightTime, j);
            }
          }
        }
      }
    }
  }

  private renderProjectileAtTime(
    mesh: THREE.Mesh, 
    pattern: EruptionPattern, 
    rng: SeededRandom, 
    currentTime: number, 
    startTime: number, 
    flightTime: number,
    projectileIndex: number
  ): void {
    // Calcular dirección de la llamarada (más tangencial que radial)
    const flareAngle = rng.uniform(0, Math.PI * 2);
    const flareLength = rng.uniform(PROCEDURAL_RANGES.FLARE_LENGTH.min, PROCEDURAL_RANGES.FLARE_LENGTH.max);
    
    const up = pattern.position.clone().normalize();
    const right = new THREE.Vector3();
    const forward = new THREE.Vector3();
    
    if (Math.abs(up.z) < 0.9) {
      right.crossVectors(up, new THREE.Vector3(0, 0, 1)).normalize();
    } else {
      right.crossVectors(up, new THREE.Vector3(1, 0, 0)).normalize();
    }
    forward.crossVectors(right, up).normalize();
    
    // Calcular progreso del proyectil
    const t = (currentTime - startTime) / flightTime;
    const clampedT = Math.max(0, Math.min(1, t));
    
    // NUEVA TRAYECTORIA TIPO LLAMARADA SOLAR:
    // 1. Moverse tangencialmente a la superficie
    const tangentDirection = new THREE.Vector3()
      .addScaledVector(right, Math.cos(flareAngle))
      .addScaledVector(forward, Math.sin(flareAngle));
    
    // 2. Seguir la curvatura del planeta
    const distanceAlongSurface = flareLength * this.planetRadius * clampedT;
    const surfaceMovement = tangentDirection.clone().multiplyScalar(distanceAlongSurface);
    
    // 3. Mantener en la superficie esférica
    const currentSurfacePos = pattern.position.clone().add(surfaceMovement).normalize().multiplyScalar(this.planetRadius);
    
    // 4. Añadir altura muy baja (como llamaradas reales)
    const maxHeight = this.params.arcHeight! * this.planetRadius * pattern.intensity * rng.uniform(0.8, 1.2);
    
    // Usar función más realista para la altura - pico más temprano y caída gradual
    let heightFactor;
    if (clampedT < 0.3) {
      // Ascenso rápido inicial
      heightFactor = Math.sin(clampedT * Math.PI / 0.3) * (clampedT / 0.3);
    } else {
      // Caída gradual más larga
      heightFactor = Math.exp(-(clampedT - 0.3) * 3) * Math.sin(clampedT * Math.PI);
    }
    
    // 5. Añadir movimiento serpenteante
    const serpentineFreq = 2 + rng.uniform(0, 3); // Frecuencia de serpenteo
    const serpentineAmp = maxHeight * 0.3; // Amplitud del serpenteo
    const serpentineOffset = rng.uniform(0, Math.PI * 2); // Offset de fase único
    
    const serpentineX = Math.sin(clampedT * serpentineFreq * Math.PI + serpentineOffset) * serpentineAmp * clampedT;
    const serpentineY = Math.cos(clampedT * serpentineFreq * Math.PI * 1.3 + serpentineOffset) * serpentineAmp * 0.5 * clampedT;
    
    const surfaceUp = currentSurfacePos.clone().normalize();
    const serpentineRight = right.clone().multiplyScalar(serpentineX);
    const serpentineForward = forward.clone().multiplyScalar(serpentineY);
    
    // 6. Posición final
    const heightOffset = surfaceUp.clone().multiplyScalar(maxHeight * heightFactor);
    const finalPosition = currentSurfacePos.clone()
      .add(heightOffset)
      .add(serpentineRight)
      .add(serpentineForward);
    
    // Posicionar mesh
    mesh.position.copy(finalPosition);
    mesh.visible = true;
    
    // Actualizar propiedades del material
    const size = this.params.projectileSize! * rng.uniform(0.7, 1.3) * Math.sqrt(pattern.intensity);
    mesh.scale.setScalar(size / this.params.projectileSize!);
    
    const initialTemp = rng.uniform(0.8, 1.0) * pattern.intensity;
    const currentTemp = Math.max(0.4, initialTemp - ((currentTime - startTime) * 0.05)); // Enfriamiento más lento
    
    const material = mesh.material as THREE.ShaderMaterial;
    material.uniforms.temperature.value = currentTemp;
    
    // Orientar el proyectil hacia la dirección de movimiento para efecto de estela
    if (clampedT > 0.01) {
      const prevT = Math.max(0, clampedT - 0.01);
      const prevPos = this.calculateFlarePosition(pattern, rng, prevT, flightTime, projectileIndex);
      const direction = finalPosition.clone().sub(prevPos).normalize();
      mesh.lookAt(finalPosition.clone().add(direction));
    }
  }

  private calculateFlarePosition(
    pattern: EruptionPattern,
    rng: SeededRandom,
    t: number,
    flightTime: number,
    projectileIndex: number
  ): THREE.Vector3 {
    // Método auxiliar para calcular posición en cualquier momento t (para orientación)
    const flareAngle = rng.uniform(0, Math.PI * 2);
    const flareLength = rng.uniform(PROCEDURAL_RANGES.FLARE_LENGTH.min, PROCEDURAL_RANGES.FLARE_LENGTH.max);
    
    const up = pattern.position.clone().normalize();
    const right = new THREE.Vector3();
    const forward = new THREE.Vector3();
    
    if (Math.abs(up.z) < 0.9) {
      right.crossVectors(up, new THREE.Vector3(0, 0, 1)).normalize();
    } else {
      right.crossVectors(up, new THREE.Vector3(1, 0, 0)).normalize();
    }
    forward.crossVectors(right, up).normalize();
    
    const tangentDirection = new THREE.Vector3()
      .addScaledVector(right, Math.cos(flareAngle))
      .addScaledVector(forward, Math.sin(flareAngle));
    
    const distanceAlongSurface = flareLength * this.planetRadius * t;
    const surfaceMovement = tangentDirection.clone().multiplyScalar(distanceAlongSurface);
    const currentSurfacePos = pattern.position.clone().add(surfaceMovement).normalize().multiplyScalar(this.planetRadius);
    
    const maxHeight = this.params.arcHeight! * this.planetRadius * pattern.intensity * rng.uniform(0.8, 1.2);
    
    let heightFactor;
    if (t < 0.3) {
      heightFactor = Math.sin(t * Math.PI / 0.3) * (t / 0.3);
    } else {
      heightFactor = Math.exp(-(t - 0.3) * 3) * Math.sin(t * Math.PI);
    }
    
    const surfaceUp = currentSurfacePos.clone().normalize();
    const heightOffset = surfaceUp.clone().multiplyScalar(maxHeight * heightFactor);
    
    return currentSurfacePos.clone().add(heightOffset);
  }



  // Métodos de integración con sistema de luz
  updateLightPosition(position: THREE.Vector3): void {
    this.projectilePool.forEach(mesh => {
      const material = mesh.material as THREE.ShaderMaterial;
      if (material.uniforms.lightPosition) {
        material.uniforms.lightPosition.value.copy(position);
      }
    });
  }

  updateLightDirection(direction: THREE.Vector3): void {
    this.projectilePool.forEach(mesh => {
      const material = mesh.material as THREE.ShaderMaterial;
      if (material.uniforms.lightDirection) {
        material.uniforms.lightDirection.value.copy(direction);
      }
    });
  }

  updateFromThreeLight(light: THREE.DirectionalLight): void {
    this.updateLightPosition(light.position);
    const direction = light.target.position.clone().sub(light.position).normalize();
    this.updateLightDirection(direction);
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.eruptionsGroup.position.copy(planetPosition);
    }
    scene.add(this.eruptionsGroup);
  }

  getObject3D(): THREE.Group {
    return this.eruptionsGroup;
  }

  dispose(): void {
    // Limpiar geometrías y materiales
    this.projectilePool.forEach(mesh => {
      mesh.geometry.dispose();
      (mesh.material as THREE.ShaderMaterial).dispose();
    });
    
    this.projectilePool = [];
    this.eruptionsGroup.clear();
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createMagmaEruptionsFromPythonData(
  planetRadius: number,
  surfaceData: any,
  globalSeed?: number,
  cosmicOriginTime?: number
): MagmaEruptionsEffect | null {
  
  // Buscar datos de magma en surface_data
  const magmaLakes = surfaceData.magma_lakes;
  
  if (!magmaLakes || magmaLakes.length === 0) {
    return null; // No crear efecto si no hay datos de magma
  }
  
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 10000); // +10000 para erupciones
  
  const params: MagmaEruptionParams = {
    eruptionIntensity: rng.uniform(PROCEDURAL_RANGES.ERUPTION_INTENSITY.min, PROCEDURAL_RANGES.ERUPTION_INTENSITY.max),
    eruptionFrequency: rng.uniform(PROCEDURAL_RANGES.ERUPTION_FREQUENCY.min, PROCEDURAL_RANGES.ERUPTION_FREQUENCY.max),
    projectileCount: Math.floor(rng.uniform(PROCEDURAL_RANGES.PROJECTILE_COUNT.min, PROCEDURAL_RANGES.PROJECTILE_COUNT.max)),
    projectileSize: rng.uniform(PROCEDURAL_RANGES.PROJECTILE_SIZE.min, PROCEDURAL_RANGES.PROJECTILE_SIZE.max),
    arcHeight: rng.uniform(PROCEDURAL_RANGES.ARC_HEIGHT.min, PROCEDURAL_RANGES.ARC_HEIGHT.max),
    timeSpeed: rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
    seed: seed + 10000,
    cosmicOriginTime: cosmicOriginTime,
    magmaLakes: magmaLakes
  };
  
  return new MagmaEruptionsEffect(planetRadius, params);
}