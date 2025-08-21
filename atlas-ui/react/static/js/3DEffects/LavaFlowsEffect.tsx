/**
 * Lava Flows Effect - Efectos de lava incandescente para planetas Molten Core
 *
 * Crea flujos de lava y látigos de fuego con movimiento dinámico
 * usando colores anaranjados/rojizos similares al color base del planeta Molten Core
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface LavaFlowsParams {
  // Configuración de flujos principales
  flowCount?: number;
  flowLength?: number;
  flowWidth?: number;
  flowIntensity?: number;
  
  // Configuración de movimiento
  flowSpeed?: number;
  pulseSpeed?: number;
  turbulence?: number;
  
  // Colores del Molten Core (basados en #FF8C00)
  coreColor?: THREE.Color | number[];
  hotColor?: THREE.Color | number[];
  coolColor?: THREE.Color | number[];
  
  // Efectos visuales
  emissiveIntensity?: number;
  glowRadius?: number;
  sparkleIntensity?: number;
  
  seed?: number;
  startTime?: number;
  timeSpeed?: number; // Velocidad del tiempo para animación (0.1 - 2.0)
}

// Rangos para generación procedural basados en color Molten Core
const PROCEDURAL_RANGES = {
  FLOW_COUNT: { min: 8, max: 16 }, // Múltiples flujos de lava
  FLOW_LENGTH: { min: 0.3, max: 0.8 }, // Longitud de los flujos
  FLOW_WIDTH: { min: 0.02, max: 0.06 }, // Anchura variable
  FLOW_INTENSITY: { min: 1.2, max: 2.5 }, // Intensidad del brillo
  FLOW_SPEED: { min: 0.1, max: 0.4 }, // Velocidad más lenta que agua (lava densa)
  PULSE_SPEED: { min: 0.8, max: 1.8 }, // Pulsación del brillo
  TURBULENCE: { min: 0.5, max: 1.5 }, // Turbulencia de la lava
  EMISSIVE_INTENSITY: { min: 2.0, max: 4.0 }, // Intensidad emisiva alta
  GLOW_RADIUS: { min: 1.1, max: 1.3 }, // Radio del resplandor
  TIME_SPEED: { min: 0.1, max: 2.0 }, // Rango de velocidades del tiempo
};

export class LavaFlowsEffect {
  private lavaGroup: THREE.Group;
  private lavaFlows: THREE.Mesh[] = [];
  private material: THREE.ShaderMaterial;
  private params: LavaFlowsParams;
  private startTime: number;

  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float flowSpeed;
    uniform float turbulence;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      // Posición del mundo para efectos de ruido
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Movimiento de lava con turbulencia
      vec3 pos = position;
      
      // Flujo principal a lo largo de la superficie
      float flowNoise = sin(time * flowSpeed + worldPosition.x * 2.0) * 0.1;
      flowNoise += cos(time * flowSpeed * 1.3 + worldPosition.z * 1.5) * 0.05;
      
      // Turbulencia adicional para movimiento orgánico
      float turbulentMotion = sin(time * turbulence + worldPosition.y * 3.0) * 0.02;
      turbulentMotion += cos(time * turbulence * 0.7 + length(worldPosition.xz) * 4.0) * 0.015;
      
      pos += normal * (flowNoise + turbulentMotion);
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  private static readonly fragmentShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float flowIntensity;
    uniform float pulseSpeed;
    uniform vec3 coreColor;
    uniform vec3 hotColor;
    uniform vec3 coolColor;
    uniform float emissiveIntensity;
    uniform float glowRadius;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    
    // Función de ruido para textura de lava
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
      
      for (int i = 0; i < 6; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      // UV animado para flujo de lava
      vec2 flowUv = vUv;
      flowUv.x += time * 0.1; // Flujo horizontal lento
      flowUv.y += time * 0.05; // Flujo vertical muy lento
      
      // Múltiples escalas de ruido para textura realista de lava
      float lavaTexture1 = fbm(flowUv * 8.0);
      float lavaTexture2 = fbm(flowUv * 16.0 + vec2(time * 0.1));
      float lavaTexture3 = fbm(flowUv * 32.0 + vec2(time * 0.2));
      
      // Combinar texturas para efecto de lava burbujeante
      float combinedTexture = lavaTexture1 * 0.5 + lavaTexture2 * 0.3 + lavaTexture3 * 0.2;
      
      // Pulsación de temperatura
      float temperaturePulse = sin(time * pulseSpeed) * 0.5 + 0.5;
      float heatIntensity = combinedTexture + temperaturePulse * 0.3;
      
      // Mapeo de color basado en temperatura
      vec3 finalColor;
      if (heatIntensity > 0.7) {
        // Núcleo súper caliente - color core (#FF8C00 - naranja intenso)
        finalColor = mix(hotColor, coreColor, (heatIntensity - 0.7) / 0.3);
      } else if (heatIntensity > 0.4) {
        // Lava caliente - transición de hot a core
        finalColor = mix(coolColor, hotColor, (heatIntensity - 0.4) / 0.3);
      } else {
        // Lava enfriándose - color más oscuro
        finalColor = coolColor * (0.5 + heatIntensity * 0.5);
      }
      
      // Efecto emisivo intenso para brillar en la oscuridad
      vec3 emissive = finalColor * emissiveIntensity * (0.8 + temperaturePulse * 0.4);
      
      // Iluminación básica
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      float lambertian = max(dot(vNormal, lightDir), 0.0);
      vec3 diffuse = finalColor * (0.3 + lambertian * 0.7);
      
      // Combinar difuso y emisivo
      vec3 result = diffuse + emissive;
      
      // Alpha basado en intensidad de calor y distancia del centro
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      float alpha = heatIntensity * flowIntensity * (1.0 - distFromCenter * 0.3);
      
      gl_FragColor = vec4(result, alpha);
    }
  `;

  constructor(planetRadius: number, params: LavaFlowsParams = {}) {
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    // Tiempo inicial determinista basado en el seed
    this.startTime = params.startTime || (seed % 10000) / 1000;

    // Colores basados en Molten Core (#FF8C00 - naranja intenso)
    const moltenCoreColor = new THREE.Color(0xFF8C00); // Color base del planeta
    const hsl = { h: 0, s: 0, l: 0 };
    moltenCoreColor.getHSL(hsl);

    this.params = {
      flowCount: params.flowCount || Math.floor(rng.uniform(PROCEDURAL_RANGES.FLOW_COUNT.min, PROCEDURAL_RANGES.FLOW_COUNT.max)),
      flowLength: params.flowLength || rng.uniform(PROCEDURAL_RANGES.FLOW_LENGTH.min, PROCEDURAL_RANGES.FLOW_LENGTH.max),
      flowWidth: params.flowWidth || rng.uniform(PROCEDURAL_RANGES.FLOW_WIDTH.min, PROCEDURAL_RANGES.FLOW_WIDTH.max),
      flowIntensity: params.flowIntensity || rng.uniform(PROCEDURAL_RANGES.FLOW_INTENSITY.min, PROCEDURAL_RANGES.FLOW_INTENSITY.max),
      flowSpeed: params.flowSpeed || rng.uniform(PROCEDURAL_RANGES.FLOW_SPEED.min, PROCEDURAL_RANGES.FLOW_SPEED.max),
      pulseSpeed: params.pulseSpeed || rng.uniform(PROCEDURAL_RANGES.PULSE_SPEED.min, PROCEDURAL_RANGES.PULSE_SPEED.max),
      turbulence: params.turbulence || rng.uniform(PROCEDURAL_RANGES.TURBULENCE.min, PROCEDURAL_RANGES.TURBULENCE.max),
      
      // Paleta de colores incandescentes basada en Molten Core
      coreColor: params.coreColor instanceof THREE.Color ? params.coreColor : 
        new THREE.Color().setHSL(hsl.h, 1.0, 0.6), // Naranja súper brillante
      hotColor: params.hotColor instanceof THREE.Color ? params.hotColor :
        new THREE.Color().setHSL(hsl.h + 0.05, 0.9, 0.5), // Naranja-rojo caliente
      coolColor: params.coolColor instanceof THREE.Color ? params.coolColor :
        new THREE.Color().setHSL(hsl.h - 0.05, 0.8, 0.3), // Naranja más oscuro
      
      emissiveIntensity: params.emissiveIntensity || rng.uniform(PROCEDURAL_RANGES.EMISSIVE_INTENSITY.min, PROCEDURAL_RANGES.EMISSIVE_INTENSITY.max),
      glowRadius: params.glowRadius || rng.uniform(PROCEDURAL_RANGES.GLOW_RADIUS.min, PROCEDURAL_RANGES.GLOW_RADIUS.max),
      sparkleIntensity: params.sparkleIntensity || 1.0,
      
      seed,
      startTime: this.startTime,
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max)
    };

    this.lavaGroup = new THREE.Group();
    this.material = this.createMaterial();

    this.generateLavaFlows(planetRadius, rng);
  }

  private generateLavaFlows(planetRadius: number, rng: SeededRandom): void {
    const flowCount = this.params.flowCount!;

    for (let i = 0; i < flowCount; i++) {
      // Posición aleatoria en la superficie del planeta
      const phi = rng.uniform(0, 2 * Math.PI);
      const cosTheta = rng.uniform(-1, 1);
      const theta = Math.acos(cosTheta);
      
      const startPosition = new THREE.Vector3(
        Math.sin(theta) * Math.cos(phi),
        Math.sin(theta) * Math.sin(phi),
        Math.cos(theta)
      );

      // Crear flujo de lava como banda irregular
      const flowLength = this.params.flowLength! * rng.uniform(0.7, 1.3);
      const flowWidth = this.params.flowWidth! * rng.uniform(0.8, 1.2);
      
      // Crear geometría del flujo usando PlaneGeometry curvada
      const segments = Math.max(16, Math.floor(flowLength * 32));
      const geometry = new THREE.PlaneGeometry(
        flowLength * planetRadius * 2,
        flowWidth * planetRadius * 2,
        segments, 8
      );

      // Sistema de coordenadas tangente para orientar el flujo
      const normal = startPosition.clone().normalize();
      const tangent1 = new THREE.Vector3();
      const tangent2 = new THREE.Vector3();
      
      if (Math.abs(normal.y) < 0.99) {
        tangent1.crossVectors(normal, new THREE.Vector3(0, 1, 0)).normalize();
      } else {
        tangent1.crossVectors(normal, new THREE.Vector3(1, 0, 0)).normalize();
      }
      tangent2.crossVectors(normal, tangent1).normalize();

      // Crear matriz de rotación
      const rotationMatrix = new THREE.Matrix4();
      rotationMatrix.makeBasis(tangent1, tangent2, normal);

      // Curvar la geometría para seguir la superficie del planeta
      geometry.applyMatrix4(rotationMatrix);
      
      const positions = geometry.attributes.position;
      const vertex = new THREE.Vector3();
      const surfacePosition = startPosition.clone().multiplyScalar(planetRadius);
      
      for (let j = 0; j < positions.count; j++) {
        vertex.fromBufferAttribute(positions, j);
        const worldVertex = vertex.clone().add(surfacePosition);
        
        // Proyectar sobre la superficie esférica con ligera elevación
        const direction = worldVertex.clone().normalize();
        const elevation = planetRadius * 0.005; // Lava ligeramente elevada
        const projectedVertex = direction.multiplyScalar(planetRadius + elevation);
        
        const localVertex = projectedVertex.sub(surfacePosition);
        positions.setXYZ(j, localVertex.x, localVertex.y, localVertex.z);
      }
      
      positions.needsUpdate = true;
      geometry.computeVertexNormals();
      geometry.translate(surfacePosition.x, surfacePosition.y, surfacePosition.z);

      // Material individual para cada flujo
      const flowMaterial = this.material.clone();
      
      // Crear mesh del flujo
      const flowMesh = new THREE.Mesh(geometry, flowMaterial);
      flowMesh.renderOrder = 3; // Encima de landmasses y nubes
      
      this.lavaFlows.push(flowMesh);
      this.lavaGroup.add(flowMesh);
    }
  }

  private createMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: LavaFlowsEffect.vertexShader,
      fragmentShader: LavaFlowsEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        flowSpeed: { value: this.params.flowSpeed },
        pulseSpeed: { value: this.params.pulseSpeed },
        turbulence: { value: this.params.turbulence },
        flowIntensity: { value: this.params.flowIntensity },
        coreColor: { value: this.params.coreColor },
        hotColor: { value: this.params.hotColor },
        coolColor: { value: this.params.coolColor },
        emissiveIntensity: { value: this.params.emissiveIntensity },
        glowRadius: { value: this.params.glowRadius },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) },
      },
      transparent: true,
      blending: THREE.AdditiveBlending, // Blending aditivo para efectos de lava brillante
      depthWrite: false,
      side: THREE.FrontSide,
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.lavaGroup.position.copy(planetPosition);
    }
    scene.add(this.lavaGroup);
  }

  update(deltaTime: number): void {
    // Calcular tiempo absoluto determinista
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000;
    
    // Actualizar tiempo en todos los materiales de flujos
    this.lavaFlows.forEach(flow => {
      const material = flow.material as THREE.ShaderMaterial;
      material.uniforms.time.value = currentTime;
    });
  }

  // Métodos para integración con sistema de luz
  updateLightPosition(position: THREE.Vector3): void {
    this.lavaFlows.forEach(flow => {
      const material = flow.material as THREE.ShaderMaterial;
      if (material.uniforms.lightPosition) {
        material.uniforms.lightPosition.value.copy(position);
      }
    });
  }

  updateLightDirection(direction: THREE.Vector3): void {
    this.lavaFlows.forEach(flow => {
      const material = flow.material as THREE.ShaderMaterial;
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
    return this.lavaGroup;
  }

  dispose(): void {
    this.lavaFlows.forEach(flow => {
      flow.geometry.dispose();
      if (flow.material instanceof THREE.Material) {
        flow.material.dispose();
      }
    });
    this.lavaFlows = [];
    this.lavaGroup.clear();
  }
}

/**
 * Función para crear desde datos de Python
 */
export function createLavaFlowsFromPythonData(
  planetRadius: number,
  surfaceData: any,
  globalSeed?: number
): LavaFlowsEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  
  // Para planetas Molten Core, crear flujos procedurales intensos
  const params: LavaFlowsParams = {
    flowCount: 12, // Muchos flujos para cobertura completa
    flowIntensity: 2.0, // Alta intensidad
    emissiveIntensity: 3.0, // Muy brillante
    seed: seed + 7000
  };

  return new LavaFlowsEffect(planetRadius, params);
}