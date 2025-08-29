/**
 * Secondary Cloud Effect - Nubes secundarias para planetas gaseosos
 *
 * Crea nubes secundarias volumétricas que complementan las nubes primarias,
 * específicas para planetas gaseosos. Estas nubes son del mismo color que el
 * planeta base pero más oscuras, con efectos más típicos de gigantes gaseosos.
 *
 * Diferencias con AtmosphereClouds:
 * - Color basado en el planeta base (más oscuro)
 * - Movimiento más dinámico típico de atmósferas gaseosas
 * - Patrones de ruido más complejos para simular turbulencias
 * - Mayor variedad de tamaños y densidades
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";

export interface SecondaryCloudsParams {
  baseColor: THREE.Color; // Color base del planeta
  cloudCount?: number;
  size?: number;
  opacity?: number;
  density?: number;
  seed?: number;
  rotationSpeed?: number;
  movementAmplitude?: number;
  turbulence?: number; // Factor de turbulencia gaseosa
  cloudsFromPython?: any[]; // Datos de nubes desde Python API
  cosmicOriginTime?: number;
  timeSpeed?: number;
}

// Rangos específicos para nubes secundarias de gigantes gaseosos - más visibles
const SECONDARY_CLOUD_RANGES = {
  CLOUD_COUNT: { min: 15, max: 25 }, // Menos nubes pero más visibles
  SIZE: { min: 3.8, max: 5.5 }, // Tamaños similares a atmosphere clouds
  OPACITY: { min: 0.4, max: 0.8 }, // Más opacidad para ser visibles
  DENSITY: { min: 0.5, max: 1.5 }, // Mayor densidad
  ROTATION_SPEED: { min: 0.002, max: 0.008 }, // Similar a atmosphere clouds
  MOVEMENT_AMPLITUDE: { min: 0.003, max: 0.02 }, // Similar a atmosphere clouds
  TURBULENCE: { min: 1.0, max: 2.0 }, // Turbulencia moderada
  TIME_SPEED: { min: 0.1, max: 3.0 }
};

export class SecondaryCloudEffect {
  private cloudSystem: THREE.Group;
  private material: THREE.ShaderMaterial;
  private params: SecondaryCloudsParams;
  private cloudCount: number;
  private clouds: THREE.Mesh[] = [];
  private cosmicOriginTime: number;
  private cosmicOffset: number;

  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float movementAmplitude;
    uniform float turbulence;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Movimiento más dinámico para planetas gaseosos con turbulencia
      vec3 pos = position;
      float slowTime = time * 0.015; // Más rápido que atmosphere clouds
      
      // Múltiples capas de turbulencia para simular atmósferas gaseosas complejas
      pos += sin(slowTime + worldPosition.x * 0.02) * movementAmplitude * turbulence * 0.2;
      pos += cos(slowTime * 1.3 + worldPosition.z * 0.015) * movementAmplitude * turbulence * 0.15;
      pos += sin(slowTime * 0.7 + worldPosition.y * 0.018) * movementAmplitude * turbulence * 0.1;
      
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
    uniform float turbulence;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    
    // Función de ruido más complejo para atmósferas gaseosas
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
    
    // FBM más complejo para turbulencias gaseosas
    float fbm(vec2 st, int octaves) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for (int i = 0; i < 6; i++) {
        if (i >= octaves) break;
        value += amplitude * noise(st);
        st *= 2.0 + turbulence * 0.1; // Frecuencia variable según turbulencia
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      
      // Máscara circular más suave para nubes secundarias
      float circularMask = 1.0 - smoothstep(0.05, 0.6, distFromCenter);
      
      // Múltiples capas de ruido para simular turbulencias complejas
      float animSpeed1 = time * 0.003;
      float animSpeed2 = time * 0.0015;
      float animSpeed3 = time * 0.001;
      float animSpeed4 = time * 0.0008;
      
      // Capas de ruido con diferentes escalas y velocidades
      vec2 noiseUv1 = vUv * 3.0 + noiseOffset + vec2(animSpeed1, animSpeed1 * 0.8);
      float noise1 = fbm(noiseUv1, 4) * 0.8;
      
      vec2 noiseUv2 = vUv * 6.0 + noiseOffset * 1.5 + vec2(animSpeed2, animSpeed2 * 1.2);
      float noise2 = fbm(noiseUv2, 5) * 0.6;
      
      vec2 noiseUv3 = vUv * 12.0 + noiseOffset * 2.5 + vec2(animSpeed3, animSpeed3 * 0.9);
      float noise3 = fbm(noiseUv3, 3) * 0.4;
      
      // Capa adicional de micro-turbulencia
      vec2 noiseUv4 = vUv * 24.0 + noiseOffset * 3.5 + vec2(animSpeed4, animSpeed4 * 1.5);
      float noise4 = fbm(noiseUv4, 2) * 0.3;
      
      // Combinar ruidos con pesos variables según turbulencia
      float cloudNoise = noise1 + noise2 * turbulence * 0.5 + noise3 * turbulence * 0.3 + noise4 * turbulence * 0.2;
      cloudNoise = smoothstep(0.15, 1.2, cloudNoise);
      
      // Aplicar máscara y densidad
      float baseCloud = cloudNoise * circularMask * density;
      
      // Falloff más pronunciado para nubes secundarias
      float densityFalloff = pow(circularMask, 2.0);
      float finalCloud = baseCloud * densityFalloff;
      
      // Gamma correction adaptada para nubes gaseosas
      finalCloud = pow(finalCloud, 0.9);
      
      // Color ligeramente más oscuro que el planeta base
      vec3 finalColor = cloudColor * 0.85; // 15% más oscuro para mejor visibilidad
      
      // Variación de color más dramática para atmósferas gaseosas
      float colorVariation = 1.0 - distFromCenter * 0.5;
      finalColor *= colorVariation;
      
      // Sombreado más contrastado para definir estructuras gaseosas
      float lightIntensity = dot(vNormal, normalize(vec3(0.7, 1.0, 0.5))) * 0.25 + 0.75;
      finalColor *= lightIntensity;
      
      // Transparencia con mayor falloff en los bordes
      float alpha = finalCloud * opacity;
      alpha *= (1.0 - pow(distFromCenter, 1.5) * 0.7);
      
      // Sistema de iluminación igual que atmosphere clouds
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      vec3 planetNormal = normalize(vWorldPosition);
      float dotNL = dot(planetNormal, lightDir);
      
      // Transición más dramática para nubes secundarias
      float lightFactor = smoothstep(-0.3, 0.3, dotNL);
      alpha *= mix(0.2, 1.0, lightFactor); // Mayor contraste día/noche
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  constructor(planetRadius: number, params: SecondaryCloudsParams) {
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed + 5000); // Offset diferente para variación
    
    this.cosmicOriginTime = params.cosmicOriginTime || 514080000;
    this.cosmicOffset = (seed % 3600) * 15; // Offset diferente para secondary clouds
    
    this.params = {
      baseColor: params.baseColor,
      cloudCount: params.cloudCount || Math.floor(rng.uniform(SECONDARY_CLOUD_RANGES.CLOUD_COUNT.min, SECONDARY_CLOUD_RANGES.CLOUD_COUNT.max)),
      size: params.size || rng.uniform(SECONDARY_CLOUD_RANGES.SIZE.min, SECONDARY_CLOUD_RANGES.SIZE.max),
      opacity: params.opacity || rng.uniform(SECONDARY_CLOUD_RANGES.OPACITY.min, SECONDARY_CLOUD_RANGES.OPACITY.max),
      density: params.density || rng.uniform(SECONDARY_CLOUD_RANGES.DENSITY.min, SECONDARY_CLOUD_RANGES.DENSITY.max),
      rotationSpeed: params.rotationSpeed || rng.uniform(SECONDARY_CLOUD_RANGES.ROTATION_SPEED.min, SECONDARY_CLOUD_RANGES.ROTATION_SPEED.max),
      movementAmplitude: params.movementAmplitude || rng.uniform(SECONDARY_CLOUD_RANGES.MOVEMENT_AMPLITUDE.min, SECONDARY_CLOUD_RANGES.MOVEMENT_AMPLITUDE.max),
      turbulence: params.turbulence || rng.uniform(SECONDARY_CLOUD_RANGES.TURBULENCE.min, SECONDARY_CLOUD_RANGES.TURBULENCE.max),
      timeSpeed: params.timeSpeed || rng.uniform(SECONDARY_CLOUD_RANGES.TIME_SPEED.min, SECONDARY_CLOUD_RANGES.TIME_SPEED.max),
      seed: seed,
      cosmicOriginTime: this.cosmicOriginTime,
      cloudsFromPython: params.cloudsFromPython,
    };

    this.cloudCount = this.params.cloudCount!;
    this.cloudSystem = new THREE.Group();
    this.material = this.createMaterial();

    this.generateClouds(planetRadius);
  }

  private generateClouds(planetRadius: number): void {
    const seed = this.params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed + 5000);
    
    const cosmicOffsetBase = this.cosmicOriginTime + this.cosmicOffset;
    const cloudsFromPython = this.params.cloudsFromPython;

    for (let i = 0; i < this.cloudCount; i++) {
      let x, y, z;
      let cloudColor = this.params.baseColor.clone().multiplyScalar(0.85); // 15% más oscuro
      let cloudSize = this.params.size! * rng.uniform(0.8, 1.2); // Mismo rango que AtmosphereClouds

      if (cloudsFromPython && i < cloudsFromPython.length) {
        const cloudData = cloudsFromPython[i];
        
        // Validar datos de Python
        if (!cloudData.position || cloudData.position.length !== 3) {
          console.warn("Invalid cloud data:", cloudData);
          continue;
        }
        
        // Misma altura que primary clouds
        x = cloudData.position[0] * planetRadius * 1.05;
        y = cloudData.position[1] * planetRadius * 1.05;
        z = cloudData.position[2] * planetRadius * 1.05;
        
        // Validar resultados
        if (!isFinite(x) || !isFinite(y) || !isFinite(z)) {
          console.warn("Invalid position calculated:", {x, y, z}, "from data:", cloudData.position);
          continue;
        }
        
        // Usar color base del planeta, no el color de Python
        // Para secondary clouds queremos que sean coherentes con el planeta
        cloudSize = cloudData.radius * planetRadius * 0.8; // Tamaño igual que AtmosphereClouds
        
      } else {
        // Generación procedural similar pero con diferentes parámetros
        const phi = rng.uniform(0, 2 * Math.PI);
        const cosTheta = rng.uniform(-1, 1);
        const theta = Math.acos(cosTheta);
        const surfaceRadius = planetRadius * 1.05; // Misma altura que primary clouds
        
        x = surfaceRadius * Math.sin(theta) * Math.cos(phi);
        y = surfaceRadius * Math.sin(theta) * Math.sin(phi);
        z = surfaceRadius * Math.cos(theta);
        
        // Validar generación procedural
        if (!isFinite(x) || !isFinite(y) || !isFinite(z)) {
          console.warn("Invalid procedural position:", {x, y, z});
          continue;
        }
      }

      // Validar cloudSize antes de usar
      if (!isFinite(cloudSize) || cloudSize <= 0) {
        console.warn("Invalid cloudSize:", cloudSize, "using fallback");
        cloudSize = 1.0; // Fallback
      }

      // TÉCNICA BILLBOARD ORIENTADA AL PLANETA (igual que AtmosphereClouds)
      const baseRadius = cloudSize * rng.uniform(0.3, 0.8);
      
      // Validar baseRadius
      if (!isFinite(baseRadius) || baseRadius <= 0) {
        console.warn("Invalid baseRadius:", baseRadius);
        continue;
      }
      
      // Usar PlaneGeometry con suficientes segmentos para curvar (igual que AtmosphereClouds)
      const segments = Math.max(8, Math.floor(baseRadius * 15)); // Más segmentos para nubes grandes
      const cloudGeometry = new THREE.PlaneGeometry(
        baseRadius * 24,
        baseRadius * 24,
        segments, segments
      );
      
      // ORIENTACIÓN TANGENTE A LA SUPERFICIE DEL PLANETA (igual que AtmosphereClouds)
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
      
      // Material individual
      const cloudMaterial = this.material.clone();
      cloudMaterial.uniforms.cloudColor.value = cloudColor;
      cloudMaterial.uniforms.density.value = this.params.density! * rng.uniform(0.8, 1.2);
      cloudMaterial.uniforms.turbulence.value = this.params.turbulence! * rng.uniform(0.8, 1.2);
      // Offset determinista basado en tiempo cósmico + variación aleatoria (igual que AtmosphereClouds)
      cloudMaterial.uniforms.noiseOffset.value = new THREE.Vector2(
        (cosmicOffsetBase + rng.uniform(0, 100)) % 100,
        (cosmicOffsetBase + rng.uniform(0, 100)) % 100
      );
      
      cloudMaterial.uniforms.lightDirection.value = this.material.uniforms.lightDirection.value.clone();
      cloudMaterial.uniforms.lightPosition.value = this.material.uniforms.lightPosition.value.clone();
      
      const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
      cloudMesh.renderOrder = 3; // Después de primary clouds (que tienen 2)
      cloudMesh.userData.isSecondaryCloud = true;
      cloudMesh.userData.planetNormal = normalFromPlanet.clone();
      
      this.clouds.push(cloudMesh);
      this.cloudSystem.add(cloudMesh);
    }
  }

  private createMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: SecondaryCloudEffect.vertexShader,
      fragmentShader: SecondaryCloudEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        opacity: { value: this.params.opacity },
        movementAmplitude: { value: this.params.movementAmplitude },
        turbulence: { value: this.params.turbulence },
        cloudColor: { value: this.params.baseColor.clone().multiplyScalar(0.85) },
        density: { value: this.params.density },
        noiseOffset: { value: new THREE.Vector2(0, 0) },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      side: THREE.FrontSide,
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.cloudSystem.position.copy(planetPosition);
    }
    scene.add(this.cloudSystem);
  }

  update(deltaTime: number, camera?: THREE.Camera): void {
    const currentTimeSeconds = Date.now() / 1000;
    const timeSinceCosmicOrigin = currentTimeSeconds - this.cosmicOriginTime;
    const animTime = (timeSinceCosmicOrigin + this.cosmicOffset) * this.params.timeSpeed!;
    const windowedTime = animTime % 10000;

    this.clouds.forEach(cloud => {
      const material = cloud.material as THREE.ShaderMaterial;
      material.uniforms.time.value = windowedTime;
    });

    // Rotación más rápida para simular turbulencia atmosférica
    this.cloudSystem.rotation.y = animTime * this.params.rotationSpeed!;
    this.cloudSystem.rotation.x = animTime * this.params.rotationSpeed! * 0.3; // Rotación adicional en X
  }

  updateParams(newParams: Partial<SecondaryCloudsParams>): void {
    this.params = { ...this.params, ...newParams };

    this.clouds.forEach(cloud => {
      const material = cloud.material as THREE.ShaderMaterial;
      
      if (newParams.opacity !== undefined) {
        material.uniforms.opacity.value = newParams.opacity;
      }
      if (newParams.movementAmplitude !== undefined) {
        material.uniforms.movementAmplitude.value = newParams.movementAmplitude;
      }
      if (newParams.turbulence !== undefined) {
        material.uniforms.turbulence.value = newParams.turbulence;
      }
    });
  }

  // Métodos de integración con sistema de luz
  updateLightPosition(position: THREE.Vector3): void {
    this.clouds.forEach(cloud => {
      const material = cloud.material as THREE.ShaderMaterial;
      if (material.uniforms.lightPosition) {
        material.uniforms.lightPosition.value.copy(position);
      }
    });
  }

  updateLightDirection(direction: THREE.Vector3): void {
    this.clouds.forEach(cloud => {
      const material = cloud.material as THREE.ShaderMaterial;
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

  getObject3D(): THREE.Group {
    return this.cloudSystem;
  }

  dispose(): void {
    this.clouds.forEach(cloud => {
      cloud.geometry.dispose();
      (cloud.material as THREE.ShaderMaterial).dispose();
    });
    this.clouds = [];
    this.cloudSystem.clear();
  }
}

/**
 * Función de utilidad para crear secondary clouds desde datos de Python
 */
export function createSecondaryCloudsFromPythonData(
  planetRadius: number, 
  surfaceData: any, 
  baseColor: THREE.Color,
  globalSeed?: number, 
  cosmicOriginTime?: number
): SecondaryCloudEffect {
  const secondaryCloudsArray = surfaceData.secondary_clouds || [];
  
  if (secondaryCloudsArray.length === 0) {
    // Generar proceduralmente si no hay datos específicos
    const seed = globalSeed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed + 5000);
    
    const params: SecondaryCloudsParams = {
      baseColor: baseColor,
      cloudCount: 20,
      size: 0.6, // Más grande para ser visible
      opacity: 0.6, // Más opaco
      density: 0.8, // Mayor densidad
      seed,
      rotationSpeed: 0.005,
      movementAmplitude: 0.02,
      turbulence: 1.2,
      timeSpeed: rng.uniform(SECONDARY_CLOUD_RANGES.TIME_SPEED.min, SECONDARY_CLOUD_RANGES.TIME_SPEED.max),
      cosmicOriginTime: cosmicOriginTime,
    };

    return new SecondaryCloudEffect(planetRadius, params);
  }

  // Usar datos de Python si están disponibles
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 5000);
  
  const params: SecondaryCloudsParams = {
    baseColor: baseColor,
    cloudCount: secondaryCloudsArray.length,
    size: rng.uniform(SECONDARY_CLOUD_RANGES.SIZE.min, SECONDARY_CLOUD_RANGES.SIZE.max),
    opacity: rng.uniform(SECONDARY_CLOUD_RANGES.OPACITY.min, SECONDARY_CLOUD_RANGES.OPACITY.max),
    density: rng.uniform(SECONDARY_CLOUD_RANGES.DENSITY.min, SECONDARY_CLOUD_RANGES.DENSITY.max),
    seed,
    rotationSpeed: rng.uniform(SECONDARY_CLOUD_RANGES.ROTATION_SPEED.min, SECONDARY_CLOUD_RANGES.ROTATION_SPEED.max),
    movementAmplitude: rng.uniform(SECONDARY_CLOUD_RANGES.MOVEMENT_AMPLITUDE.min, SECONDARY_CLOUD_RANGES.MOVEMENT_AMPLITUDE.max),
    turbulence: rng.uniform(SECONDARY_CLOUD_RANGES.TURBULENCE.min, SECONDARY_CLOUD_RANGES.TURBULENCE.max),
    timeSpeed: rng.uniform(SECONDARY_CLOUD_RANGES.TIME_SPEED.min, SECONDARY_CLOUD_RANGES.TIME_SPEED.max),
    cosmicOriginTime: cosmicOriginTime,
    cloudsFromPython: secondaryCloudsArray,
  };

  return new SecondaryCloudEffect(planetRadius, params);
}