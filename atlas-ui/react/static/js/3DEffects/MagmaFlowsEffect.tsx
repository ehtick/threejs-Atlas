/**
 * Magma Flows Effect - Sistema de flujos de magma para planetas magmáticos
 *
 * Diferente de LavaFlows - este efecto se especializa en magma fluido y lagos de magma
 * que burbujean y fluyen de manera más viscosa y densa que la lava regular.
 *
 * Responsabilidades:
 * - Renderiza lagos de magma burbujeante
 * - Simula flujos de magma viscoso
 * - Efectos de distorsión por calor
 * - Se integra con el sistema de iluminación planetaria
 * - Emisión de luz propia del magma incandescente
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface MagmaFlowsParams {
  magmaLakes?: any[]; // Datos de lagos de magma desde Python API
  seed?: number;
  heatIntensity?: number; // Intensidad del calor (0.1 - 2.0)
  flowSpeed?: number; // Velocidad de flujo del magma
  bubbleActivity?: number; // Actividad de burbujeo
  glowIntensity?: number; // Intensidad del brillo
  cosmicOriginTime?: number;
  timeSpeed?: number;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  LAKE_COUNT: { min: 8, max: 12 }, // Varios lagos de magma
  LAKE_SIZE: { min: 0.25, max: 0.45 }, // Lagos MUCHO más grandes
  HEAT_INTENSITY: { min: 0.8, max: 1.5 }, // Calor intenso
  FLOW_SPEED: { min: 0.002, max: 0.008 }, // Flujo lento y viscoso
  BUBBLE_ACTIVITY: { min: 0.6, max: 1.0 }, // Actividad alta de burbujas
  GLOW_INTENSITY: { min: 0.8, max: 1.0 }, // Brillo intenso
  TIME_SPEED: { min: 0.1, max: 0.3 } // Animación moderada
};

/**
 * Efecto de Flujos de Magma
 *
 * Crea lagos de magma y flujos viscosos usando:
 * - Geometría fluida orgánica
 * - Shader con efectos de emisión y distorsión por calor
 * - Animación de burbujeo y flujo
 * - Integración completa con iluminación planetaria
 */
export class MagmaFlowsEffect {
  private magmaGroup: THREE.Group;
  private magmaLakes: THREE.Mesh[] = [];
  private magmaFlows: THREE.Mesh[] = [];
  private params: MagmaFlowsParams;
  private cosmicOriginTime: number;
  private cosmicOffset: number;

  // Shader para magma con efectos de emisión y distorsión
  private static readonly magmaVertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float timeSpeed;
    uniform float flowSpeed;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      // Posición del mundo para efectos de flujo y calor
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      
      // Movimiento de flujo del magma (más lento y viscoso que lava)
      vec3 pos = position;
      float slowTime = time * timeSpeed;
      
      // Flujo viscoso del magma
      float flowWave1 = sin(slowTime * 0.8 + worldPosition.x * 0.02) * flowSpeed * 0.5;
      float flowWave2 = cos(slowTime * 0.6 + worldPosition.z * 0.015) * flowSpeed * 0.3;
      
      // Aplicar deformación de flujo principalmente horizontal
      pos.x += flowWave1;
      pos.z += flowWave2;
      
      // Ligero movimiento vertical para simular burbujeo
      pos.y += sin(slowTime * 1.5 + worldPosition.x * 0.1 + worldPosition.z * 0.1) * flowSpeed * 0.1;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  private static readonly magmaFragmentShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float heatIntensity;
    uniform float bubbleActivity;
    uniform float glowIntensity;
    uniform vec3 magmaColor;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float flowSpeed;
    
    // Función de ruido para textura de magma
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
      
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for (int i = 0; i < 4; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      // Coordenadas de textura animadas para flujo de magma
      vec2 magmaUv1 = vUv * 3.0 + time * flowSpeed * vec2(0.5, 0.2);
      vec2 magmaUv2 = vUv * 5.0 + time * flowSpeed * vec2(-0.3, 0.4);
      vec2 magmaUv3 = vUv * 8.0 + time * flowSpeed * vec2(0.2, -0.6);
      
      // Múltiples capas de ruido para textura de magma compleja
      float magmaNoise1 = fbm(magmaUv1);
      float magmaNoise2 = fbm(magmaUv2);
      float magmaNoise3 = fbm(magmaUv3) * 0.5;
      
      // Combinar ruidos para textura de magma viscoso
      float combinedNoise = magmaNoise1 * 0.5 + magmaNoise2 * 0.3 + magmaNoise3 * 0.2;
      
      // Color base del magma con variaciones de temperatura
      vec3 baseColor = magmaColor;
      
      // Crear zonas más calientes (amarillo-blanco) y más frías (rojo oscuro)
      float heatVariation = combinedNoise * heatIntensity;
      
      // Colores de temperatura del magma
      vec3 hotMagma = vec3(1.2, 0.8, 0.3);  // Amarillo-blanco caliente
      vec3 warmMagma = vec3(1.0, 0.4, 0.1); // Naranja cálido  
      vec3 coolMagma = vec3(0.8, 0.2, 0.0); // Rojo más frío
      
      vec3 finalColor = baseColor;
      
      // Aplicar gradiente de temperatura
      if (heatVariation > 0.7) {
        finalColor = mix(finalColor, hotMagma, (heatVariation - 0.7) * 3.0);
      } else if (heatVariation > 0.4) {
        finalColor = mix(finalColor, warmMagma, (heatVariation - 0.4) * 2.0);
      } else if (heatVariation < 0.2) {
        finalColor = mix(finalColor, coolMagma, (0.2 - heatVariation) * 2.0);
      }
      
      // Efectos de burbujeo
      float bubblePattern = sin(vUv.x * 20.0 + time * 3.0) * sin(vUv.y * 15.0 + time * 2.5);
      float bubbleNoise = noise(vUv * 25.0 + time * 0.8) * bubbleActivity;
      
      if (bubblePattern * bubbleNoise > 0.3) {
        // Burbujas más calientes
        finalColor = mix(finalColor, hotMagma, 0.4);
      }
      
      // Iluminación planetaria siguiendo el patrón del README.md
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      // Usar normal mundial correcta como en PlanetLayerSystem
      vec3 normal = normalize(vWorldNormal);
      float dotNL = dot(normal, lightDir);
      
      // Smooth day/night transition como en el README
      float dayNight = smoothstep(-0.3, 0.1, dotNL);
      
      // Rim lighting para visibilidad mejorada
      float rimLight = 1.0 - abs(dotNL);
      rimLight = pow(rimLight, 3.0) * 0.1;
      
      // El magma es auto-iluminado pero sigue la iluminación planetaria
      float ambientStrength = 0.6; // Alta iluminación ambiente por emisión propia
      float lightIntensity = 0.4;   // Menos dependiente de luz externa
      
      // Cálculo final de iluminación siguiendo el patrón del README
      float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
      
      // Emisión intensa del magma caliente (auto-iluminación)
      float emission = glowIntensity * (0.8 + heatVariation * 0.4);
      
      // Aplicar iluminación planetaria + emisión propia
      finalColor *= totalLight;
      finalColor += finalColor * emission * 0.3; // Emisión adicional para brillo
      
      // Alpha con variación para flujos naturales
      float alpha = 0.95; // Magma muy opaco
      
      // Reducir alpha en los bordes para transición suave
      float distance = length(vUv - vec2(0.5));
      alpha *= smoothstep(0.5, 0.3, distance);
      
      // Añadir variación de alpha basada en temperatura
      alpha *= 0.9 + heatVariation * 0.1;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  constructor(planetRadius: number, params: MagmaFlowsParams = {}) {
    // Sistema de tiempo híbrido para determinismo
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.cosmicOriginTime = params.cosmicOriginTime || 514080000;
    this.cosmicOffset = (seed % 3600) * 10;
    
    const rng = new SeededRandom(seed);
    
    this.params = {
      heatIntensity: params.heatIntensity || rng.uniform(PROCEDURAL_RANGES.HEAT_INTENSITY.min, PROCEDURAL_RANGES.HEAT_INTENSITY.max),
      flowSpeed: params.flowSpeed || rng.uniform(PROCEDURAL_RANGES.FLOW_SPEED.min, PROCEDURAL_RANGES.FLOW_SPEED.max),
      bubbleActivity: params.bubbleActivity || rng.uniform(PROCEDURAL_RANGES.BUBBLE_ACTIVITY.min, PROCEDURAL_RANGES.BUBBLE_ACTIVITY.max),
      glowIntensity: params.glowIntensity || rng.uniform(PROCEDURAL_RANGES.GLOW_INTENSITY.min, PROCEDURAL_RANGES.GLOW_INTENSITY.max),
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
      seed,
      cosmicOriginTime: this.cosmicOriginTime,
      magmaLakes: params.magmaLakes || []
    };
    
    this.magmaGroup = new THREE.Group();
    this.generateMagmaFlows(planetRadius);
  }

  private generateMagmaFlows(planetRadius: number): void {
    const seed = this.params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    // Verificar si tenemos datos de Python
    const magmaLakes = this.params.magmaLakes;
    
    if (magmaLakes && magmaLakes.length > 0) {
      this.generateMagmaFromPython(planetRadius, magmaLakes, rng);
    } else {
      // Generación procedural
      const lakeCount = Math.floor(rng.uniform(PROCEDURAL_RANGES.LAKE_COUNT.min, PROCEDURAL_RANGES.LAKE_COUNT.max));
      this.generateProceduralMagma(planetRadius, lakeCount, rng);
    }
  }

  private generateMagmaFromPython(planetRadius: number, lakes: any[], rng: SeededRandom): void {
    lakes.forEach((lake) => {
      this.createMagmaLake(planetRadius, lake, rng);
    });
  }

  private generateProceduralMagma(planetRadius: number, lakeCount: number, rng: SeededRandom): void {
    for (let i = 0; i < lakeCount; i++) {
      // Crear lago sintético
      const phi = rng.uniform(0, 2 * Math.PI);
      const cosTheta = rng.uniform(-1, 1);
      const theta = Math.acos(cosTheta);
      
      const lake = {
        position_3d: [
          Math.sin(theta) * Math.cos(phi),
          Math.sin(theta) * Math.sin(phi),
          Math.cos(theta)
        ],
        radius: rng.uniform(PROCEDURAL_RANGES.LAKE_SIZE.min, PROCEDURAL_RANGES.LAKE_SIZE.max),
        color: [0.85, 0.27, 0.0, 1.0], // OrangeRed
        temperature: rng.uniform(1500, 2000),
        bubble_activity: rng.uniform(0.6, 1.0),
        glow_intensity: rng.uniform(0.8, 1.0)
      };
      
      this.createMagmaLake(planetRadius, lake, rng);
    }
  }

  private createMagmaLake(planetRadius: number, lake: any, rng: SeededRandom): void {
    const position = lake.position_3d || [0, 0, 1];
    const baseRadius = lake.radius || rng.uniform(PROCEDURAL_RANGES.LAKE_SIZE.min, PROCEDURAL_RANGES.LAKE_SIZE.max);
    const radius = baseRadius * planetRadius;
    
    // Posición en la superficie del planeta
    const sphericalPos = new THREE.Vector3(position[0], position[1], position[2]).normalize();
    const surfacePosition = sphericalPos.clone().multiplyScalar(planetRadius * 1.002); // Ligeramente elevado para prevenir z-fighting
    
    // Crear geometría orgánica del lago de magma
    const geometry = this.createMagmaLakeGeometry(radius, rng);
    
    // Color del magma
    let magmaColor = new THREE.Color(0.85, 0.27, 0.0); // OrangeRed por defecto
    if (lake.color && Array.isArray(lake.color)) {
      magmaColor = new THREE.Color(lake.color[0], lake.color[1], lake.color[2]);
    }
    
    // Material con shader de magma siguiendo mejores prácticas del README
    const material = new THREE.ShaderMaterial({
      vertexShader: MagmaFlowsEffect.magmaVertexShader,
      fragmentShader: MagmaFlowsEffect.magmaFragmentShader,
      uniforms: {
        time: { value: 0 },
        timeSpeed: { value: this.params.timeSpeed },
        heatIntensity: { value: this.params.heatIntensity },
        bubbleActivity: { value: lake.bubble_activity || this.params.bubbleActivity },
        glowIntensity: { value: lake.glow_intensity || this.params.glowIntensity },
        magmaColor: { value: magmaColor },
        flowSpeed: { value: this.params.flowSpeed },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) },
      },
      transparent: true,
      blending: THREE.AdditiveBlending, // Blending aditivo para efecto de emisión
      depthWrite: false,
      side: THREE.DoubleSide
    });
    
    // Crear mesh de efecto como capa separada (siguiendo patrón del README)
    const magmaMesh = new THREE.Mesh(geometry, material);
    magmaMesh.position.copy(surfacePosition);
    
    // Orientar hacia la superficie del planeta usando lookAt
    magmaMesh.lookAt(sphericalPos.clone().multiplyScalar(planetRadius * 2));
    
    magmaMesh.renderOrder = 8; // Alto para renderizar sobre otros efectos
    
    this.magmaLakes.push(magmaMesh);
    this.magmaGroup.add(magmaMesh);
  }

  private createMagmaLakeGeometry(radius: number, rng: SeededRandom): THREE.BufferGeometry {
    // Crear geometría circular orgánica para lago de magma
    const segments = Math.max(16, Math.floor(radius * 50));
    const geometry = new THREE.CircleGeometry(radius, segments);
    
    // Añadir irregularidad al borde del lago
    const positions = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    
    for (let i = 0; i < positions.count; i++) {
      vertex.fromBufferAttribute(positions, i);
      
      if (vertex.length() > 0.1) { // Solo afectar vértices del borde
        const angle = Math.atan2(vertex.y, vertex.x);
        const noise = Math.sin(angle * 8) * 0.1 + Math.sin(angle * 5) * 0.05;
        const irregularity = 1.0 + noise * rng.uniform(0.8, 1.2);
        
        vertex.multiplyScalar(irregularity);
        positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }
    }
    
    positions.needsUpdate = true;
    geometry.computeVertexNormals();
    
    return geometry;
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.magmaGroup.position.copy(planetPosition);
    }
    scene.add(this.magmaGroup);
  }

  update(): void {
    // Calcular tiempo para animación de magma
    const currentTimeSeconds = Date.now() / 1000;
    const timeSinceCosmicOrigin = currentTimeSeconds - this.cosmicOriginTime;
    const animTime = (timeSinceCosmicOrigin + this.cosmicOffset) * this.params.timeSpeed!;
    const windowedTime = animTime % 10000;

    // Actualizar tiempo en todos los materiales
    [...this.magmaLakes, ...this.magmaFlows].forEach(mesh => {
      const material = mesh.material as THREE.ShaderMaterial;
      material.uniforms.time.value = windowedTime;
    });
  }

  // Métodos para integración con sistema de luz
  updateLightPosition(position: THREE.Vector3): void {
    [...this.magmaLakes, ...this.magmaFlows].forEach(mesh => {
      const material = mesh.material as THREE.ShaderMaterial;
      if (material.uniforms.lightPosition) {
        material.uniforms.lightPosition.value.copy(position);
      }
    });
  }

  updateLightDirection(direction: THREE.Vector3): void {
    [...this.magmaLakes, ...this.magmaFlows].forEach(mesh => {
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

  getObject3D(): THREE.Group {
    return this.magmaGroup;
  }

  dispose(): void {
    [...this.magmaLakes, ...this.magmaFlows].forEach(mesh => {
      mesh.geometry.dispose();
      (mesh.material as THREE.ShaderMaterial).dispose();
    });
    
    this.magmaLakes = [];
    this.magmaFlows = [];
    this.magmaGroup.clear();
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createMagmaFlowsFromPythonData(
  planetRadius: number, 
  surfaceData: any, 
  globalSeed?: number, 
  cosmicOriginTime?: number
): MagmaFlowsEffect | null {
  
  // Buscar datos de magma en surface_data
  const magmaLakes = surfaceData.magma_lakes;
  
  if (!magmaLakes || magmaLakes.length === 0) {
    return null; // No crear efecto si no hay datos de magma
  }
  
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 9000); // +9000 para magma flows
  
  const params: MagmaFlowsParams = {
    heatIntensity: rng.uniform(PROCEDURAL_RANGES.HEAT_INTENSITY.min, PROCEDURAL_RANGES.HEAT_INTENSITY.max),
    flowSpeed: rng.uniform(PROCEDURAL_RANGES.FLOW_SPEED.min, PROCEDURAL_RANGES.FLOW_SPEED.max),
    bubbleActivity: rng.uniform(PROCEDURAL_RANGES.BUBBLE_ACTIVITY.min, PROCEDURAL_RANGES.BUBBLE_ACTIVITY.max),
    glowIntensity: rng.uniform(PROCEDURAL_RANGES.GLOW_INTENSITY.min, PROCEDURAL_RANGES.GLOW_INTENSITY.max),
    timeSpeed: rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
    seed: seed + 9000,
    cosmicOriginTime: cosmicOriginTime,
    magmaLakes: magmaLakes
  };

  return new MagmaFlowsEffect(planetRadius, params);
}