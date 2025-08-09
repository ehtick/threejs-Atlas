/**
 * Atmosphere Clouds Effect - Sistema de nubes atmosféricas procedurales
 *
 * Crea nubes volumétricas que flotan alrededor del planeta, basado en los
 * datos de Python del sistema generate_clouds. Genera formaciones de nubes
 * realistas con movimiento y variación de densidad.
 *
 * Responsabilidades:
 * - AtmosphereClouds.tsx -> Nubes volumétricas atmosféricas (ESTE ARCHIVO)
 * - CloudBands.tsx -> Bandas horizontales de gas giants
 * - AtmosphereGlow.tsx -> Partículas luminosas orbitantes
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface AtmosphereCloudsParams {
  color?: THREE.Color | number;
  cloudCount?: number;
  size?: number;
  opacity?: number;
  density?: number;
  seed?: number;
  rotationSpeed?: number; // Velocidad de rotación del sistema
  movementAmplitude?: number; // Amplitud del movimiento individual
  puffiness?: number; // Factor de esponjosidad de las nubes
  cloudsFromPython?: any[]; // Datos de nubes desde Python API
}

// Rangos para generación procedural basados en generate_clouds de Python
// Ajustados para proporciones realistas del planeta y atmósfera
const PROCEDURAL_RANGES = {
  CLOUD_COUNT: { min: 5, max: 250 }, // Basado en num_points de Python
  SIZE: { min: 0.5, max: 0.8 }, // Tamaño visible desde el espacio
  OPACITY: { min: 0.6, max: 0.8 }, // Opacidad visible pero natural
  DENSITY: { min: 0.9, max: 1.0 }, // Máxima densidad para mayor contraste
  ROTATION_SPEED: { min: 0.005, max: 0.02 },
  MOVEMENT_AMPLITUDE: { min: 0.01, max: 0.08 },
  PUFFINESS: { min: 1.0, max: 2.0 } // Controladas para no exceder atmósfera
};

/**
 * Efecto de Nubes Atmosféricas
 *
 * Crea nubes volumétricas realistas basadas en los datos de Python generate_clouds
 */
export class AtmosphereCloudsEffect {
  private cloudSystem: THREE.Group;
  private material: THREE.ShaderMaterial;
  private params: AtmosphereCloudsParams;
  private cloudCount: number;
  private clouds: THREE.Mesh[] = [];

  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float movementAmplitude;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      // Posición del mundo para efectos de ruido
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Movimiento sutil de las nubes
      vec3 pos = position;
      pos += sin(time * 0.1 + worldPosition.x * 0.01) * movementAmplitude * 0.1;
      pos += cos(time * 0.08 + worldPosition.z * 0.01) * movementAmplitude * 0.1;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  private static readonly fragmentShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float opacity;
    uniform vec3 cloudColor;
    uniform float density;
    uniform vec2 noiseOffset;
    uniform float shapeVariation;
    
    // Función de ruido Perlin simplificada para nubes
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 0.0;
      
      for (int i = 0; i < 4; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      // Crear textura de nube volumétrica usando ruido con offset único
      vec2 cloudUv = vUv * 8.0 + noiseOffset + time * 0.02;
      float cloudNoise = fbm(cloudUv);
      
      // Añadir variaciones de escala con offset diferente
      float detailNoise = fbm(vUv * 16.0 + noiseOffset * 2.0 + time * 0.01) * 0.3;
      cloudNoise += detailNoise;
      
      // Crear forma de nube orgánica con múltiples lóbulos
      float cloudShape = smoothstep(0.2, 0.8, cloudNoise);
      
      // Crear forma orgánica usando múltiples frecuencias de ruido con variación
      float freq1 = 3.0 + shapeVariation * 2.0;
      float freq2 = 6.0 + shapeVariation * 4.0;
      
      vec2 cloudUv2 = vUv * freq1 + noiseOffset * 0.3;
      float organicShape1 = fbm(cloudUv2) * (0.6 + shapeVariation * 0.3);
      
      vec2 cloudUv3 = vUv * freq2 + noiseOffset * 0.7;
      float organicShape2 = fbm(cloudUv3) * (0.4 + shapeVariation * 0.2);
      
      // Combinar diferentes escalas de ruido para crear lóbulos únicos
      float organicMask = organicShape1 + organicShape2;
      float threshold1 = 0.3 + shapeVariation * 0.3;
      float threshold2 = 0.9 - shapeVariation * 0.2;
      organicMask = smoothstep(threshold1, threshold2, organicMask);
      
      // Eliminar dependencia circular - usar forma completamente basada en ruido
      // En lugar de distanceFromCenter, usar máscara de ruido directamente
      vec2 edgeMaskUv = vUv * 2.5 + noiseOffset * 0.8;
      float edgeMask = fbm(edgeMaskUv);
      
      // Añadir segunda capa de máscara para mayor irregularidad
      vec2 edgeMaskUv2 = vUv * 4.0 + noiseOffset * 1.2 + time * 0.003;
      float edgeMask2 = fbm(edgeMaskUv2) * 0.7;
      
      // Combinar máscaras para forma completamente orgánica
      float organicFade = smoothstep(0.2, 0.8, edgeMask + edgeMask2);
      
      // Combinar todas las capas para formar nube orgánica base
      float baseCloud = cloudShape * organicMask * organicFade * density;
      
      // Simplificar - blur muy visible y directo
      float blurRadius = 0.05; // Radius mucho más grande
      float finalCloud = baseCloud * 0.2; // Base muy reducido
      
      // Solo 4 muestras pero con radio grande
      vec2 blurOffsets[4] = vec2[4](
        vec2(blurRadius, 0.0),
        vec2(-blurRadius, 0.0),
        vec2(0.0, blurRadius), 
        vec2(0.0, -blurRadius)
      );
      
      // Aplicar blur simple pero muy visible
      for(int i = 0; i < 4; i++) {
        vec2 sampleUv = vUv + blurOffsets[i];
        
        // Calcular nube base en la muestra
        vec2 sampleCloudUv = sampleUv * 8.0 + noiseOffset + time * 0.02;
        float sampleNoise = fbm(sampleCloudUv) + fbm(sampleUv * 16.0 + noiseOffset * 2.0) * 0.3;
        float sampleShape = smoothstep(0.2, 0.8, sampleNoise);
        
        // Solo máscara orgánica simple para la muestra
        vec2 sampleEdgeUv = sampleUv * 2.5 + noiseOffset * 0.8;
        float sampleEdgeMask = fbm(sampleEdgeUv);
        float sampleFade = smoothstep(0.2, 0.8, sampleEdgeMask);
        
        finalCloud += (sampleShape * sampleFade) * 0.2; // 20% cada muestra
      }
      
      finalCloud *= density;
      
      // Color de nube realista (blanco con tinte cálido)
      vec3 finalColor = cloudColor;
      
      // Añadir sombreado sutil basado en la normal
      float lightIntensity = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.2 + 0.8;
      finalColor *= lightIntensity;
      
      // Transparencia realista de nube atmosférica
      float alpha = finalCloud * opacity;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  constructor(planetRadius: number, params: AtmosphereCloudsParams = {}) {
    
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    this.params = {
      color: params.color || new THREE.Color(0xffffff),
      cloudCount: params.cloudCount || Math.floor(rng.uniform(PROCEDURAL_RANGES.CLOUD_COUNT.min, PROCEDURAL_RANGES.CLOUD_COUNT.max)),
      size: params.size || rng.uniform(PROCEDURAL_RANGES.SIZE.min, PROCEDURAL_RANGES.SIZE.max),
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      density: params.density || rng.uniform(PROCEDURAL_RANGES.DENSITY.min, PROCEDURAL_RANGES.DENSITY.max),
      rotationSpeed: params.rotationSpeed || rng.uniform(PROCEDURAL_RANGES.ROTATION_SPEED.min, PROCEDURAL_RANGES.ROTATION_SPEED.max),
      movementAmplitude: params.movementAmplitude || rng.uniform(PROCEDURAL_RANGES.MOVEMENT_AMPLITUDE.min, PROCEDURAL_RANGES.MOVEMENT_AMPLITUDE.max),
      puffiness: params.puffiness || rng.uniform(PROCEDURAL_RANGES.PUFFINESS.min, PROCEDURAL_RANGES.PUFFINESS.max),
      seed: seed,
    };

    this.cloudCount = this.params.cloudCount!;
    this.cloudSystem = new THREE.Group();
    this.material = this.createMaterial();

    this.generateClouds(planetRadius);
  }

  private generateClouds(planetRadius: number): void {
    const baseColor = this.params.color instanceof THREE.Color ? this.params.color : new THREE.Color(this.params.color as any);
    const seed = this.params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);

    // Verificar si tenemos datos de Python
    const cloudsFromPython = this.params.cloudsFromPython;

    for (let i = 0; i < this.cloudCount; i++) {
      let x, y, z;
      let cloudColor = baseColor;
      let cloudSize = this.params.size! * rng.uniform(0.8, 1.2);

      if (cloudsFromPython && i < cloudsFromPython.length) {
        // Usar datos reales de Python
        const cloudData = cloudsFromPython[i];
        
        // Posición desde Python - a mitad de camino entre planeta y atmósfera
        x = cloudData.position[0] * planetRadius * 1.04; // Altura media atmosférica
        y = cloudData.position[1] * planetRadius * 1.04;
        z = cloudData.position[2] * planetRadius * 1.04;
        
        // Color desde Python
        if (cloudData.color) {
          cloudColor = new THREE.Color().setRGB(cloudData.color[0], cloudData.color[1], cloudData.color[2]);
        }
        
        // Tamaño desde Python - más grande para visibilidad
        cloudSize = cloudData.radius * planetRadius * 0.8;
        
      } else {
        // Generación procedural - distribuidas sobre la superficie
        const phi = rng.uniform(0, 2 * Math.PI);
        const theta = rng.uniform(0, Math.PI);
        const surfaceRadius = planetRadius * 1.04; // Altura media atmosférica
        
        x = surfaceRadius * Math.sin(theta) * Math.cos(phi);
        y = surfaceRadius * Math.sin(theta) * Math.sin(phi);
        z = surfaceRadius * Math.cos(theta);
      }

      // Crear geometría de resolución razonable
      const segments = 12; // Suficiente resolución sin ser excesivo
      const baseRadius = cloudSize * rng.uniform(1.0, 1.8);
      
      const cloudGeometry = new THREE.PlaneGeometry(
        baseRadius * 2,
        baseRadius * 2,
        segments,
        segments
      );
      
      // Modificar vertices para crear forma orgánica irregular
      const position = cloudGeometry.attributes.position;
      const uv = cloudGeometry.attributes.uv;
      
      for (let j = 0; j < position.count; j++) {
        const x = position.getX(j);
        const y = position.getY(j);
        const uvX = uv.getX(j);
        const uvY = uv.getY(j);
        
        // Calcular distancia del centro y ángulo
        const centerDist = Math.sqrt(x * x + y * y);
        const angle = Math.atan2(y, x);
        
        // Crear forma irregular usando ruido basado en ángulo
        const noiseInput = angle * 3 + rng.random() * 10;
        const irregularFactor = 0.7 + 0.6 * (Math.sin(noiseInput) + Math.sin(noiseInput * 2.3) * 0.5 + Math.sin(noiseInput * 4.7) * 0.3);
        
        // Aplicar deformación irregular
        if (centerDist > 0.1) { // No deformar el centro
          const newRadius = centerDist * irregularFactor;
          position.setX(j, Math.cos(angle) * newRadius);
          position.setY(j, Math.sin(angle) * newRadius);
        }
      }
      
      position.needsUpdate = true;
      
      // Curvar la geometría para que siga la superficie esférica del planeta
      const positions = cloudGeometry.attributes.position;
      const vertex = new THREE.Vector3();
      const normal = new THREE.Vector3(x, y, z).normalize();
      const radius = Math.sqrt(x * x + y * y + z * z);
      
      // Crear base ortogonal para el plano de la nube
      const tangent = new THREE.Vector3();
      const bitangent = new THREE.Vector3();
      
      // Calcular vectores tangentes
      if (Math.abs(normal.y) < 0.999) {
        tangent.crossVectors(new THREE.Vector3(0, 1, 0), normal).normalize();
      } else {
        tangent.crossVectors(new THREE.Vector3(1, 0, 0), normal).normalize();
      }
      bitangent.crossVectors(normal, tangent);
      
      for (let i = 0; i < positions.count; i++) {
        vertex.fromBufferAttribute(positions, i);
        
        // Convertir coordenadas del plano a coordenadas del mundo
        const worldPoint = new THREE.Vector3()
          .addScaledVector(tangent, vertex.x)
          .addScaledVector(bitangent, vertex.y)
          .addScaledVector(normal, radius);
        
        // Proyectar sobre la esfera para mantener curvatura
        worldPoint.normalize().multiplyScalar(radius);
        
        positions.setXYZ(i, worldPoint.x, worldPoint.y, worldPoint.z);
      }
      
      cloudGeometry.computeVertexNormals();
      cloudGeometry.attributes.position.needsUpdate = true;
      
      // Crear material individual para cada nube con patrón único
      const cloudMaterial = this.material.clone();
      cloudMaterial.uniforms.cloudColor.value = cloudColor;
      cloudMaterial.uniforms.density.value = this.params.density! * rng.uniform(0.8, 1.2);
      // Offset aleatorio para que cada nube tenga un patrón de ruido único
      cloudMaterial.uniforms.noiseOffset.value = new THREE.Vector2(
        rng.uniform(0, 100),
        rng.uniform(0, 100)
      );
      // Variación de forma única para cada nube
      cloudMaterial.uniforms.shapeVariation.value = rng.uniform(-1.0, 1.0);
      
      // Crear mesh de nube
      const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
      
      // No necesitamos posicionar porque la geometría ya está en posición mundial
      // cloudMesh.position.set(0, 0, 0);
      
      // Añadir pequeña rotación aleatoria para variedad visual
      const rotationAxis = new THREE.Vector3(x, y, z).normalize();
      cloudMesh.rotateOnWorldAxis(rotationAxis, rng.uniform(0, Math.PI * 2));
      
      this.clouds.push(cloudMesh);
      this.cloudSystem.add(cloudMesh);
    }
  }

  private createMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: AtmosphereCloudsEffect.vertexShader,
      fragmentShader: AtmosphereCloudsEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        opacity: { value: this.params.opacity },
        movementAmplitude: { value: this.params.movementAmplitude },
        cloudColor: { value: new THREE.Color(0xffffff) },
        density: { value: this.params.density },
        noiseOffset: { value: new THREE.Vector2(0, 0) },
        shapeVariation: { value: 0.0 },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      side: THREE.DoubleSide, // Para que sean visibles desde cualquier ángulo
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.cloudSystem.position.copy(planetPosition);
    }
    scene.add(this.cloudSystem);
  }

  update(deltaTime: number): void {
    // Actualizar tiempo en todos los materiales de las nubes
    this.clouds.forEach(cloud => {
      const material = cloud.material as THREE.ShaderMaterial;
      material.uniforms.time.value += deltaTime;
    });

    // Rotación procedural del sistema de nubes
    this.cloudSystem.rotation.y += deltaTime * this.params.rotationSpeed!;
  }

  updateParams(newParams: Partial<AtmosphereCloudsParams>): void {
    this.params = { ...this.params, ...newParams };

    // Actualizar parámetros en todos los materiales de las nubes
    this.clouds.forEach(cloud => {
      const material = cloud.material as THREE.ShaderMaterial;
      
      if (newParams.opacity !== undefined) {
        material.uniforms.opacity.value = newParams.opacity;
      }

      if (newParams.movementAmplitude !== undefined) {
        material.uniforms.movementAmplitude.value = newParams.movementAmplitude;
      }
    });
  }

  getObject3D(): THREE.Group {
    return this.cloudSystem;
  }

  dispose(): void {
    // Limpiar todas las nubes
    this.clouds.forEach(cloud => {
      cloud.geometry.dispose();
      (cloud.material as THREE.ShaderMaterial).dispose();
    });
    this.clouds = [];
    
    // Limpiar el sistema de nubes
    this.cloudSystem.clear();
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createAtmosphereCloudsFromPythonData(planetRadius: number, surfaceData: any, globalSeed?: number): AtmosphereCloudsEffect {
  // Los datos de nubes vienen en surface_elements.clouds (no atmosphere)
  const cloudsArray = surfaceData.clouds || [];
  
  
  if (cloudsArray.length === 0) {
    // Si no hay datos de nubes de Python, generar proceduralmente
    const seed = globalSeed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed + 4000);
    
    const params: AtmosphereCloudsParams = {
      color: new THREE.Color(1, 1, 1.0), // Blanco puro como nubes reales
      cloudCount: 15, // Más nubes para cobertura realista
      size: 0.6, // Tamaño más grande para nubes visibles
      opacity: 0.7, // Mayor opacidad para visibilidad desde el espacio
      density: 0.8, // Densidad moderada para transparencia natural
      seed,
      rotationSpeed: 0.005, // Rotación más lenta y realista
      movementAmplitude: 0.02, // Movimiento sutil
      puffiness: 1.5,
    };

    return new AtmosphereCloudsEffect(planetRadius, params);
  }

  // Usar datos reales de Python
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 4000);
  
  const params: AtmosphereCloudsParams = {
    color: new THREE.Color(0xffffff), // Color base, se aplicará por nube individual
    cloudCount: cloudsArray.length,
    size: rng.uniform(PROCEDURAL_RANGES.SIZE.min, PROCEDURAL_RANGES.SIZE.max),
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    density: rng.uniform(PROCEDURAL_RANGES.DENSITY.min, PROCEDURAL_RANGES.DENSITY.max),
    seed,
    rotationSpeed: rng.uniform(PROCEDURAL_RANGES.ROTATION_SPEED.min, PROCEDURAL_RANGES.ROTATION_SPEED.max),
    movementAmplitude: rng.uniform(PROCEDURAL_RANGES.MOVEMENT_AMPLITUDE.min, PROCEDURAL_RANGES.MOVEMENT_AMPLITUDE.max),
    puffiness: rng.uniform(PROCEDURAL_RANGES.PUFFINESS.min, PROCEDURAL_RANGES.PUFFINESS.max),
    cloudsFromPython: cloudsArray, // Pasar los datos de Python
  };

  return new AtmosphereCloudsEffect(planetRadius, params);
}