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
  CLOUD_COUNT: { min: 15, max: 30 }, // Más nubes para cobertura atmosférica realista
  SIZE: { min: 3.8, max: 5.5 }, // Variedad de tamaños con curvatura adaptativa
  OPACITY: { min: 0.4, max: 0.8 }, // Opacidad moderada para realismo
  DENSITY: { min: 0.4, max: 1.3 }, // Densidad suave para billboards
  ROTATION_SPEED: { min: 0.002, max: 0.008 },
  MOVEMENT_AMPLITUDE: { min: 0.003, max: 0.02 },
  PUFFINESS: { min: 1.0, max: 1.4 } // Moderada esponjosidad
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
      // TÉCNICA BILLBOARD VOLUMÉTRICA CON SOFT PARTICLES
      
      // Distancia radial del centro para forma circular suave
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      
      // Máscara circular con bordes súper suaves (soft particles)
      float circularMask = 1.0 - smoothstep(0.1, 0.5, distFromCenter);
      
      // Ruido volumétrico para textura de nube realista
      vec2 noiseUv1 = vUv * 4.0 + noiseOffset + time * 0.008;
      float noise1 = fbm(noiseUv1) * 0.7;
      
      vec2 noiseUv2 = vUv * 8.0 + noiseOffset * 1.3 + time * 0.005;
      float noise2 = fbm(noiseUv2) * 0.5;
      
      vec2 noiseUv3 = vUv * 16.0 + noiseOffset * 2.1 + time * 0.003;
      float noise3 = fbm(noiseUv3) * 0.3;
      
      // Combinar múltiples octavas de ruido
      float cloudNoise = noise1 + noise2 + noise3;
      cloudNoise = smoothstep(0.2, 1.0, cloudNoise);
      
      // Aplicar máscara circular para bordes suaves
      float baseCloud = cloudNoise * circularMask * density;
      
      // Función de densidad que baja en los bordes (soft particles)
      float densityFalloff = pow(circularMask, 1.5);
      
      // Aplicar técnica de soft particles para bordes suaves
      float finalCloud = baseCloud * densityFalloff;
      
      // Gamma correction para mayor suavidad
      finalCloud = pow(finalCloud, 0.8);
      
      // Color de nube realista con variaciones naturales
      vec3 finalColor = cloudColor;
      
      // Variación de color como nubes reales (centro más blanco, bordes más grises)
      float colorVariation = 1.0 - distFromCenter * 0.3;
      finalColor *= colorVariation;
      
      // Sombreado súper sutil y realista
      float lightIntensity = dot(vNormal, normalize(vec3(0.8, 1.0, 0.6))) * 0.15 + 0.85;
      finalColor *= lightIntensity;
      
      // Transparencia con falloff natural como nubes reales
      float alpha = finalCloud * opacity;
      alpha *= (1.0 - distFromCenter * 0.5); // Más transparente en los bordes
      
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
        // Generación procedural - DISTRIBUCIÓN ESFÉRICA UNIFORME
        const phi = rng.uniform(0, 2 * Math.PI);
        const cosTheta = rng.uniform(-1, 1); // Distribución uniforme en coseno
        const theta = Math.acos(cosTheta);
        const surfaceRadius = planetRadius * rng.uniform(1.02, 1.06); // Altura variable
        
        x = surfaceRadius * Math.sin(theta) * Math.cos(phi);
        y = surfaceRadius * Math.sin(theta) * Math.sin(phi);
        z = surfaceRadius * Math.cos(theta);
      }

      // TÉCNICA BILLBOARD ORIENTADA AL PLANETA
      const baseRadius = cloudSize * rng.uniform(0.3, 0.8);
      
      // Usar PlaneGeometry con suficientes segmentos para curvar
      const segments = Math.max(8, Math.floor(baseRadius * 15)); // Más segmentos para nubes grandes
      const cloudGeometry = new THREE.PlaneGeometry(
        baseRadius * 2,
        baseRadius * 2,
        segments, segments
      );
      
      // ORIENTACIÓN TANGENTE A LA SUPERFICIE DEL PLANETA
      const cloudPosition = new THREE.Vector3(x, y, z);
      const planetCenter = new THREE.Vector3(0, 0, 0);
      const normalFromPlanet = cloudPosition.clone().normalize();
      
      // Crear vectores tangentes a la superficie esférica
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
      
      // Crear matriz de rotación para que la nube siga la superficie
      const rotationMatrix = new THREE.Matrix4();
      rotationMatrix.makeBasis(tangent1, tangent2, normalFromPlanet);
      
      // CURVAR LA GEOMETRÍA PARA SEGUIR LA SUPERFICIE ESFÉRICA
      const positions = cloudGeometry.attributes.position;
      const vertex = new THREE.Vector3();
      const cloudRadius = Math.sqrt(x * x + y * y + z * z); // Radio atmosférico de esta nube
      
      // Aplicar primero la orientación
      cloudGeometry.applyMatrix4(rotationMatrix);
      
      // Ahora curvar cada vértice para seguir la superficie esférica
      for (let i = 0; i < positions.count; i++) {
        vertex.fromBufferAttribute(positions, i);
        
        // Convertir a coordenadas del mundo
        const worldVertex = vertex.clone().add(cloudPosition);
        
        // Proyectar sobre la superficie esférica a la altura correcta
        const direction = worldVertex.clone().normalize();
        const projectedVertex = direction.multiplyScalar(cloudRadius);
        
        // Volver a coordenadas locales de la nube
        const localVertex = projectedVertex.sub(cloudPosition);
        
        positions.setXYZ(i, localVertex.x, localVertex.y, localVertex.z);
      }
      
      positions.needsUpdate = true;
      cloudGeometry.computeVertexNormals();
      
      // Posicionar la nube
      cloudGeometry.translate(x, y, z);
      
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
      
      // Crear mesh de nube SIGUIENDO LA SUPERFICIE
      const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
      
      // Guardar datos para nubes atmosféricas
      cloudMesh.userData.isAtmosphericCloud = true;
      cloudMesh.userData.planetNormal = normalFromPlanet.clone();
      
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
      blending: THREE.NormalBlending, // Blending normal para billboards
      depthWrite: false,
      side: THREE.FrontSide, // FrontSide para geometría curvada
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.cloudSystem.position.copy(planetPosition);
    }
    scene.add(this.cloudSystem);
  }

  update(deltaTime: number, camera?: THREE.Camera): void {
    // Actualizar tiempo en todos los materiales de las nubes
    this.clouds.forEach(cloud => {
      const material = cloud.material as THREE.ShaderMaterial;
      material.uniforms.time.value += deltaTime;
      
      // ORIENTACIÓN ATMOSFÉRICA: Las nubes ya están orientadas al planeta
      // No necesitan lookAt dinámico porque están pre-orientadas
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