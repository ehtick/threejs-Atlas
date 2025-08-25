/**
 * Vegetation Effect - Sistema de vegetación para planetas forestales
 *
 * Crea efectos de vegetación densa con árboles, plantas y manchas verdes
 * que cubren la superficie del planeta para simular ecosistemas forestales.
 *
 * Responsabilidades:
 * - Renderiza parches de vegetación densa
 * - Simula árboles y vegetación variada
 * - Se integra con el sistema de iluminación planetaria
 * - Sigue la curvatura de la superficie del planeta
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface VegetationParams {
  vegetationPatches?: any[]; // Datos de vegetación desde Python API
  seed?: number;
  density?: number; // Densidad de la vegetación (0.1 - 2.0)
  color?: THREE.Color | number; // Color base de la vegetación
  opacity?: number; // Opacidad general
  size?: number; // Tamaño de los parches de vegetación
  treeHeight?: number; // Altura de los "árboles" (relieve)
  cosmicOriginTime?: number; // Tiempo de origen cósmico para determinismo
  timeSpeed?: number; // Velocidad del tiempo para animación sutil
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  PATCH_COUNT: { min: 20, max: 40 }, // Muchos parches para cobertura densa
  DENSITY: { min: 0.8, max: 1.5 }, // Densidad alta para bosques
  SIZE: { min: 0.03, max: 0.12 }, // Variedad de tamaños de parches
  OPACITY: { min: 0.7, max: 0.95 }, // Opacidad alta para vegetación densa
  TREE_HEIGHT: { min: 0.015, max: 0.035 }, // Altura de árboles en proporción al planeta
  TIME_SPEED: { min: 0.05, max: 0.2 } // Animación muy sutil para simular viento
};

/**
 * Efecto de Vegetación
 *
 * Crea vegetación densa en la superficie del planeta usando múltiples técnicas:
 * - Parches base de vegetación
 * - Elementos verticales simulando árboles
 * - Variación de color y densidad
 * - Integración con sistema de iluminación planetaria
 */
export class VegetationEffect {
  private vegetationGroup: THREE.Group;
  private vegetationPatches: THREE.Mesh[] = [];
  private treeLayers: THREE.Mesh[] = [];
  private params: VegetationParams;
  private cosmicOriginTime: number;
  private cosmicOffset: number;

  // Shader para vegetación con movimiento sutil simulando viento
  private static readonly vegetationVertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float timeSpeed;
    uniform float treeHeight;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      // Posición del mundo para efectos de ruido y iluminación
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      
      // Movimiento sutil simulando viento en la vegetación
      vec3 pos = position;
      float slowTime = time * timeSpeed;
      
      // Movimiento más pronunciado en las partes altas (árboles)
      float heightFactor = smoothstep(0.0, 1.0, vUv.y);
      
      // Oscilar suavemente simulando viento
      pos.x += sin(slowTime + worldPosition.z * 0.1) * treeHeight * 0.1 * heightFactor;
      pos.z += cos(slowTime * 0.7 + worldPosition.x * 0.1) * treeHeight * 0.08 * heightFactor;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  private static readonly vegetationFragmentShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float opacity;
    uniform vec3 vegetationColor;
    uniform float density;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float treeHeight;
    
    // Función de ruido para textura de vegetación
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
      
      for (int i = 0; i < 3; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      // Gradiente vertical para simular diferentes tipos de vegetación
      float heightGradient = vUv.y;
      
      // Base de vegetación con variación de ruido
      vec2 noiseUv = vUv * 8.0 + time * 0.01;
      float vegetationNoise = fbm(noiseUv);
      
      // Crear variaciones de color para simular diferentes plantas
      vec3 baseColor = vegetationColor;
      
      // Vegetación más oscura en la base (arbustos), más clara en el tope (hojas)
      float colorVariation = mix(0.6, 1.2, heightGradient);
      colorVariation *= (0.8 + vegetationNoise * 0.4);
      
      // Añadir variaciones de color (marrones para troncos, verdes para hojas)
      vec3 finalColor = baseColor * colorVariation;
      
      // En las partes bajas, añadir tonos marrones para simular troncos/tierra
      if (heightGradient < 0.3) {
        vec3 brownTone = vec3(0.4, 0.3, 0.2);
        finalColor = mix(finalColor, brownTone, (0.3 - heightGradient) * 0.6);
      }
      
      // Iluminación planetaria real
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      // Usar la normal planetaria para determinar iluminación
      vec3 planetNormal = normalize(vWorldPosition);
      float dotNL = dot(planetNormal, lightDir);
      
      // Iluminación suave para vegetación (plantas reciben luz difusa)
      float lighting = smoothstep(-0.4, 0.6, dotNL);
      lighting = mix(0.4, 1.0, lighting); // Siempre algo de luz ambiental
      
      // Añadir iluminación interna sutil (subsurface scattering simulado)
      float subsurface = pow(max(0.0, dot(vWorldNormal, lightDir)), 0.5) * 0.3;
      lighting += subsurface;
      
      finalColor *= lighting;
      
      // Alpha con variación para crear densidad irregular
      float alpha = opacity * density;
      alpha *= (0.7 + vegetationNoise * 0.3); // Variación en la opacidad
      
      // Más transparente en los bordes para transiciones suaves
      float edgeFade = 1.0 - pow(abs(vUv.x - 0.5) * 2.0, 2.0);
      alpha *= edgeFade;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  constructor(planetRadius: number, params: VegetationParams = {}) {
    // Sistema de tiempo híbrido para determinismo
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.cosmicOriginTime = params.cosmicOriginTime || 514080000;
    this.cosmicOffset = (seed % 3600) * 10;
    
    const rng = new SeededRandom(seed);
    
    this.params = {
      density: params.density || rng.uniform(PROCEDURAL_RANGES.DENSITY.min, PROCEDURAL_RANGES.DENSITY.max),
      color: params.color || new THREE.Color(0x2d5a3d), // Verde bosque
      opacity: params.opacity || rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      size: params.size || rng.uniform(PROCEDURAL_RANGES.SIZE.min, PROCEDURAL_RANGES.SIZE.max),
      treeHeight: params.treeHeight || rng.uniform(PROCEDURAL_RANGES.TREE_HEIGHT.min, PROCEDURAL_RANGES.TREE_HEIGHT.max),
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
      seed,
      cosmicOriginTime: this.cosmicOriginTime,
      vegetationPatches: params.vegetationPatches || []
    };
    
    this.vegetationGroup = new THREE.Group();
    this.generateVegetation(planetRadius);
  }

  private generateVegetation(planetRadius: number): void {
    const seed = this.params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    // Verificar si tenemos datos de Python
    const vegetationPatches = this.params.vegetationPatches;
    
    let patchCount = 0;
    if (vegetationPatches && vegetationPatches.length > 0) {
      patchCount = vegetationPatches.length;
      this.generateVegetationFromPython(planetRadius, vegetationPatches, rng);
    } else {
      // Generación procedural
      patchCount = Math.floor(rng.uniform(PROCEDURAL_RANGES.PATCH_COUNT.min, PROCEDURAL_RANGES.PATCH_COUNT.max));
      this.generateProceduralVegetation(planetRadius, patchCount, rng);
    }
  }

  private generateVegetationFromPython(planetRadius: number, patches: any[], rng: SeededRandom): void {
    patches.forEach((patch, index) => {
      this.createVegetationPatch(planetRadius, patch, rng, index);
    });
  }

  private generateProceduralVegetation(planetRadius: number, patchCount: number, rng: SeededRandom): void {
    for (let i = 0; i < patchCount; i++) {
      // Crear patch sintético
      const phi = rng.uniform(0, 2 * Math.PI);
      const cosTheta = rng.uniform(-1, 1);
      const theta = Math.acos(cosTheta);
      
      const patch = {
        position_3d: [
          Math.sin(theta) * Math.cos(phi),
          Math.sin(theta) * Math.sin(phi),
          Math.cos(theta)
        ],
        size: rng.uniform(PROCEDURAL_RANGES.SIZE.min, PROCEDURAL_RANGES.SIZE.max),
        color: [
          rng.uniform(0.1, 0.4),  // R - poco rojo
          rng.uniform(0.4, 0.8),  // G - mucho verde
          rng.uniform(0.1, 0.3)   // B - poco azul
        ]
      };
      
      this.createVegetationPatch(planetRadius, patch, rng, i);
    }
  }

  private createVegetationPatch(planetRadius: number, patch: any, rng: SeededRandom, index: number): void {
    const position = patch.position_3d || patch.position || [0, 0, 1];
    const size = (patch.size || this.params.size!) * planetRadius;
    
    // Color de la vegetación
    let vegetationColor = this.params.color instanceof THREE.Color ? 
      this.params.color : new THREE.Color(this.params.color as number);
    
    if (patch.color && Array.isArray(patch.color)) {
      vegetationColor = new THREE.Color(patch.color[0], patch.color[1], patch.color[2]);
    }
    
    // Posición en la superficie del planeta
    const sphericalPos = new THREE.Vector3(position[0], position[1], position[2]).normalize();
    const surfacePosition = sphericalPos.clone().multiplyScalar(planetRadius * 1.001); // Ligeramente elevado
    
    // Crear múltiples capas de vegetación para densidad
    this.createVegetationBase(planetRadius, sphericalPos, size, vegetationColor, rng, index);
    this.createTreeLayer(planetRadius, sphericalPos, size, vegetationColor, rng, index);
  }

  private createVegetationBase(planetRadius: number, normal: THREE.Vector3, size: number, color: THREE.Color, rng: SeededRandom, index: number): void {
    // Base de vegetación usando PlaneGeometry curvada
    const segments = Math.max(16, Math.floor(size * planetRadius * 200));
    const geometry = new THREE.PlaneGeometry(size * 2, size * 2, segments, segments);
    
    // Curvar la geometría para seguir la superficie esférica
    this.curvePlaneToSphere(geometry, normal, planetRadius * 1.001);
    
    // Material con shader personalizado
    const material = new THREE.ShaderMaterial({
      vertexShader: VegetationEffect.vegetationVertexShader,
      fragmentShader: VegetationEffect.vegetationFragmentShader,
      uniforms: {
        time: { value: 0 },
        timeSpeed: { value: this.params.timeSpeed },
        opacity: { value: this.params.opacity },
        vegetationColor: { value: color },
        density: { value: this.params.density },
        treeHeight: { value: this.params.treeHeight },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    
    const vegetationMesh = new THREE.Mesh(geometry, material);
    vegetationMesh.renderOrder = 3; // Después de nubes (2) y land masses (1)
    
    this.vegetationPatches.push(vegetationMesh);
    this.vegetationGroup.add(vegetationMesh);
  }

  private createTreeLayer(planetRadius: number, normal: THREE.Vector3, size: number, color: THREE.Color, rng: SeededRandom, index: number): void {
    // Capa de árboles más alta con geometría extruida
    const segments = Math.max(12, Math.floor(size * planetRadius * 150));
    const geometry = new THREE.PlaneGeometry(size * 1.5, size * 1.5, segments, segments);
    
    // Aplicar relieve vertical para simular árboles
    const positions = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    
    for (let i = 0; i < positions.count; i++) {
      vertex.fromBufferAttribute(positions, i);
      
      // Ruido para crear altura irregular (árboles)
      const noiseValue = this.noise2D(vertex.x * 10, vertex.y * 10, rng);
      const treeHeight = noiseValue * this.params.treeHeight! * planetRadius;
      
      // Aplicar altura solo en dirección normal
      vertex.z += treeHeight;
      positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    
    positions.needsUpdate = true;
    geometry.computeVertexNormals();
    
    // Curvar la geometría
    this.curvePlaneToSphere(geometry, normal, planetRadius * 1.003);
    
    // Material más oscuro para árboles
    const treeColor = color.clone().multiplyScalar(0.7);
    const material = new THREE.ShaderMaterial({
      vertexShader: VegetationEffect.vegetationVertexShader,
      fragmentShader: VegetationEffect.vegetationFragmentShader,
      uniforms: {
        time: { value: 0 },
        timeSpeed: { value: this.params.timeSpeed },
        opacity: { value: this.params.opacity! * 0.8 },
        vegetationColor: { value: treeColor },
        density: { value: this.params.density! * 1.2 },
        treeHeight: { value: this.params.treeHeight },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    
    const treeMesh = new THREE.Mesh(geometry, material);
    treeMesh.renderOrder = 4; // Encima de la vegetación base
    
    this.treeLayers.push(treeMesh);
    this.vegetationGroup.add(treeMesh);
  }

  private curvePlaneToSphere(geometry: THREE.PlaneGeometry, normal: THREE.Vector3, radius: number): void {
    // Orientar el plano tangente a la esfera
    const tangent1 = new THREE.Vector3();
    const tangent2 = new THREE.Vector3();
    
    if (Math.abs(normal.y) < 0.99) {
      tangent1.crossVectors(normal, new THREE.Vector3(0, 1, 0)).normalize();
    } else {
      tangent1.crossVectors(normal, new THREE.Vector3(1, 0, 0)).normalize();
    }
    tangent2.crossVectors(normal, tangent1).normalize();
    
    const rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeBasis(tangent1, tangent2, normal);
    
    geometry.applyMatrix4(rotationMatrix);
    
    // Curvar cada vértice hacia la superficie esférica
    const positions = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    const surfacePosition = normal.clone().multiplyScalar(radius);
    
    for (let i = 0; i < positions.count; i++) {
      vertex.fromBufferAttribute(positions, i);
      
      const worldVertex = vertex.clone().add(surfacePosition);
      const direction = worldVertex.clone().normalize();
      const projectedVertex = direction.multiplyScalar(radius + vertex.z); // Mantener altura Z
      
      const localVertex = projectedVertex.sub(surfacePosition);
      positions.setXYZ(i, localVertex.x, localVertex.y, localVertex.z);
    }
    
    positions.needsUpdate = true;
    geometry.computeVertexNormals();
    
    // Trasladar a la posición final
    geometry.translate(surfacePosition.x, surfacePosition.y, surfacePosition.z);
  }

  private noise2D(x: number, y: number, rng: SeededRandom): number {
    // Función de ruido simple para variación de altura
    const seed = this.params.seed || 0;
    const hash = (px: number, py: number) => {
      const dot = px * 12.9898 + py * 78.233 + seed;
      return Math.sin(dot) * 43758.5453 % 1;
    };
    
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const fx = x - ix;
    const fy = y - iy;
    
    const n00 = Math.abs(hash(ix, iy));
    const n10 = Math.abs(hash(ix + 1, iy));
    const n01 = Math.abs(hash(ix, iy + 1));
    const n11 = Math.abs(hash(ix + 1, iy + 1));
    
    const nx0 = n00 * (1 - fx) + n10 * fx;
    const nx1 = n01 * (1 - fx) + n11 * fx;
    
    return nx0 * (1 - fy) + nx1 * fy;
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.vegetationGroup.position.copy(planetPosition);
    }
    scene.add(this.vegetationGroup);
  }

  update(deltaTime: number): void {
    // Calcular tiempo para animación sutil
    const currentTimeSeconds = Date.now() / 1000;
    const timeSinceCosmicOrigin = currentTimeSeconds - this.cosmicOriginTime;
    const animTime = (timeSinceCosmicOrigin + this.cosmicOffset) * this.params.timeSpeed!;
    const windowedTime = animTime % 10000;

    // Actualizar tiempo en todos los materiales
    [...this.vegetationPatches, ...this.treeLayers].forEach(mesh => {
      const material = mesh.material as THREE.ShaderMaterial;
      material.uniforms.time.value = windowedTime;
    });
  }

  // Métodos para integración con sistema de luz
  updateLightPosition(position: THREE.Vector3): void {
    [...this.vegetationPatches, ...this.treeLayers].forEach(mesh => {
      const material = mesh.material as THREE.ShaderMaterial;
      if (material.uniforms.lightPosition) {
        material.uniforms.lightPosition.value.copy(position);
      }
    });
  }

  updateLightDirection(direction: THREE.Vector3): void {
    [...this.vegetationPatches, ...this.treeLayers].forEach(mesh => {
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

  updateParams(newParams: Partial<VegetationParams>): void {
    this.params = { ...this.params, ...newParams };
    
    // Actualizar parámetros en todos los materiales
    [...this.vegetationPatches, ...this.treeLayers].forEach(mesh => {
      const material = mesh.material as THREE.ShaderMaterial;
      
      if (newParams.opacity !== undefined) {
        material.uniforms.opacity.value = newParams.opacity;
      }
      if (newParams.density !== undefined) {
        material.uniforms.density.value = newParams.density;
      }
      if (newParams.timeSpeed !== undefined) {
        material.uniforms.timeSpeed.value = newParams.timeSpeed;
      }
    });
  }

  getObject3D(): THREE.Group {
    return this.vegetationGroup;
  }

  dispose(): void {
    [...this.vegetationPatches, ...this.treeLayers].forEach(mesh => {
      mesh.geometry.dispose();
      (mesh.material as THREE.ShaderMaterial).dispose();
    });
    
    this.vegetationPatches = [];
    this.treeLayers = [];
    this.vegetationGroup.clear();
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createVegetationFromPythonData(
  planetRadius: number, 
  surfaceData: any, 
  globalSeed?: number, 
  cosmicOriginTime?: number
): VegetationEffect | null {
  
  // Buscar datos de vegetación en surface_data
  const vegetationPatches = surfaceData.vegetation;
  
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 8000); // +8000 para vegetation
  
  const params: VegetationParams = {
    color: new THREE.Color(0x2d5a3d), // Verde bosque
    density: rng.uniform(PROCEDURAL_RANGES.DENSITY.min, PROCEDURAL_RANGES.DENSITY.max),
    opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
    size: rng.uniform(PROCEDURAL_RANGES.SIZE.min, PROCEDURAL_RANGES.SIZE.max),
    treeHeight: rng.uniform(PROCEDURAL_RANGES.TREE_HEIGHT.min, PROCEDURAL_RANGES.TREE_HEIGHT.max),
    timeSpeed: rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
    seed: seed + 8000,
    cosmicOriginTime: cosmicOriginTime,
    vegetationPatches: vegetationPatches
  };

  return new VegetationEffect(planetRadius, params);
}