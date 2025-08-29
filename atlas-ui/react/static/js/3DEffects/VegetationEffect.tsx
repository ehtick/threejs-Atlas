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
import { SeededRandom } from "../Utils/SeededRandom.tsx";

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
  SIZE: { min: 0.08, max: 0.25 }, // Variedad de tamaños de parches (más grandes para mayor visibilidad)
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
      // Distancia radial desde el centro para crear transiciones orgánicas
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      
      // Base de vegetación con múltiples capas de ruido para textura orgánica
      vec2 noiseUv1 = vUv * 12.0 + time * 0.008;
      float vegetationNoise1 = fbm(noiseUv1);
      
      vec2 noiseUv2 = vUv * 6.0 + time * 0.005;
      float vegetationNoise2 = fbm(noiseUv2);
      
      vec2 noiseUv3 = vUv * 20.0 + time * 0.012;
      float vegetationNoise3 = fbm(noiseUv3) * 0.5;
      
      // Combinar capas de ruido para textura compleja
      float combinedNoise = vegetationNoise1 * 0.6 + vegetationNoise2 * 0.3 + vegetationNoise3 * 0.1;
      
      // Crear variaciones de color para simular follaje denso
      vec3 baseColor = vegetationColor;
      
      // Variaciones de color más complejas para simular hojas, ramas, sombras
      float colorVariation = 0.7 + combinedNoise * 0.6;
      
      // Crear zonas más oscuras (sombras entre hojas) y más claras (hojas al sol)
      float leafPattern = sin(vUv.x * 15.0) * sin(vUv.y * 12.0) * 0.15;
      colorVariation += leafPattern;
      
      vec3 finalColor = baseColor * colorVariation;
      
      // Añadir variaciones de color naturales (diferentes tonos de verde y marrón)
      vec3 darkGreen = vec3(0.15, 0.35, 0.12);  // Verde oscuro para sombras
      vec3 lightGreen = vec3(0.25, 0.50, 0.18); // Verde claro para hojas iluminadas
      vec3 brownTone = vec3(0.35, 0.25, 0.15);  // Marrón para ramas/troncos
      
      // Mezclar colores basado en el ruido para crear variedad natural
      if (combinedNoise < 0.3) {
        finalColor = mix(finalColor, darkGreen, 0.4);
      } else if (combinedNoise > 0.7) {
        finalColor = mix(finalColor, lightGreen, 0.3);
      }
      
      // Añadir algunos elementos marrones para simular ramas
      if (vegetationNoise3 > 0.8) {
        finalColor = mix(finalColor, brownTone, 0.2);
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
      
      // Iluminación más compleja para vegetación densa
      float lighting = smoothstep(-0.3, 0.8, dotNL);
      lighting = mix(0.3, 1.0, lighting); // Luz ambiental para simular luz filtrada
      
      // Añadir scattering subsuperficial más pronunciado para hojas
      float subsurface = pow(max(0.0, dot(vWorldNormal, lightDir)), 0.8) * 0.4;
      lighting += subsurface;
      
      // Simular oclusión ambiental en áreas densas
      float ambientOcclusion = 1.0 - (combinedNoise * 0.2);
      lighting *= ambientOcclusion;
      
      finalColor *= lighting;
      
      // Alpha con patrón orgánico para bordes naturales
      float alpha = opacity * density;
      
      // Crear máscara orgánica basada en ruido para bordes irregulares
      float organicMask = smoothstep(0.2, 1.0, combinedNoise);
      
      // Transición suave desde el centro hacia los bordes
      float radialFade = 1.0 - smoothstep(0.3, 0.9, distFromCenter);
      
      // Combinar máscaras para efecto natural
      alpha *= organicMask * radialFade;
      
      // Añadir variación adicional para evitar uniformidad
      alpha *= (0.8 + sin(vUv.x * 25.0) * sin(vUv.y * 30.0) * 0.15);
      
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
    
    // Crear múltiples capas de vegetación para densidad
    this.createVegetationBase(planetRadius, sphericalPos, size, vegetationColor, rng);
    this.createTreeLayer(planetRadius, sphericalPos, size, vegetationColor, rng);
  }

  private createVegetationBase(planetRadius: number, normal: THREE.Vector3, size: number, color: THREE.Color, rng: SeededRandom): void {
    // Base de vegetación usando geometría procedural orgánica que se extiende sobre la superficie
    // Crear geometría base como "parche orgánico" en lugar de plano rígido
    const geometry = this.createOrganicVegetationGeometry(planetRadius, normal, size, rng);
    
    // Material con shader personalizado para vegetación orgánica
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

  private createTreeLayer(planetRadius: number, normal: THREE.Vector3, size: number, color: THREE.Color, rng: SeededRandom): void {
    // Crear múltiples elementos de árboles distribuidos de forma orgánica sobre el parche base
    const numTrees = Math.floor(rng.uniform(8, 20)); // Varios árboles por parche
    
    for (let i = 0; i < numTrees; i++) {
      // Posición aleatoria dentro del área del parche
      const angle = rng.uniform(0, Math.PI * 2);
      const radius = rng.uniform(0, size * 0.8); // Dentro del 80% del radio del parche
      
      // Calcular posición local en el plano tangente
      const localX = Math.cos(angle) * radius;
      const localY = Math.sin(angle) * radius;
      
      // Crear sistema de coordenadas tangente en la superficie
      const tangent1 = new THREE.Vector3();
      const tangent2 = new THREE.Vector3();
      
      if (Math.abs(normal.y) < 0.99) {
        tangent1.crossVectors(normal, new THREE.Vector3(0, 1, 0)).normalize();
      } else {
        tangent1.crossVectors(normal, new THREE.Vector3(1, 0, 0)).normalize();
      }
      tangent2.crossVectors(normal, tangent1).normalize();
      
      // Posición del árbol en el mundo
      const treePosition = normal.clone().multiplyScalar(planetRadius * 1.002); // Ligeramente elevado sobre la superficie
      treePosition.addScaledVector(tangent1, localX);
      treePosition.addScaledVector(tangent2, localY);
      
      // Crear geometría de árbol individual (small billboard que se orienta hacia arriba desde la superficie)
      const treeSize = rng.uniform(0.008, 0.020) * planetRadius; // Tamaño individual de árbol
      const treeGeometry = this.createSingleTreeGeometry(treeSize, rng);
      
      // Orientar el árbol para que "crezca" desde la superficie hacia afuera
      const treeNormal = treePosition.clone().normalize();
      const rotationMatrix = new THREE.Matrix4();
      
      // Crear base tangente para orientar el árbol
      const treeTangent1 = new THREE.Vector3();
      const treeTangent2 = new THREE.Vector3();
      
      if (Math.abs(treeNormal.y) < 0.99) {
        treeTangent1.crossVectors(treeNormal, new THREE.Vector3(0, 1, 0)).normalize();
      } else {
        treeTangent1.crossVectors(treeNormal, new THREE.Vector3(1, 0, 0)).normalize();
      }
      treeTangent2.crossVectors(treeNormal, treeTangent1).normalize();
      
      // El árbol "crece" en dirección normal (hacia afuera del planeta)
      rotationMatrix.makeBasis(treeTangent1, treeTangent2, treeNormal);
      treeGeometry.applyMatrix4(rotationMatrix);
      treeGeometry.translate(treePosition.x, treePosition.y, treePosition.z);
      
      // Material para árbol individual con variación
      const treeColor = color.clone().multiplyScalar(rng.uniform(0.6, 0.9)); // Variación de color
      const treeMaterial = new THREE.ShaderMaterial({
        vertexShader: VegetationEffect.vegetationVertexShader,
        fragmentShader: VegetationEffect.vegetationFragmentShader,
        uniforms: {
          time: { value: 0 },
          timeSpeed: { value: this.params.timeSpeed },
          opacity: { value: this.params.opacity! * rng.uniform(0.7, 0.9) },
          vegetationColor: { value: treeColor },
          density: { value: this.params.density! * rng.uniform(0.8, 1.2) },
          treeHeight: { value: this.params.treeHeight },
          lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
          lightPosition: { value: new THREE.Vector3(0, 0, 0) },
        },
        transparent: true,
        blending: THREE.NormalBlending,
        depthWrite: false,
        side: THREE.DoubleSide
      });
      
      const treeMesh = new THREE.Mesh(treeGeometry, treeMaterial);
      treeMesh.renderOrder = 4; // Encima de la vegetación base
      
      this.treeLayers.push(treeMesh);
      this.vegetationGroup.add(treeMesh);
    }
  }

  private createOrganicVegetationGeometry(planetRadius: number, normal: THREE.Vector3, size: number, rng: SeededRandom): THREE.BufferGeometry {
    // Crear geometría orgánica que se extiende sobre la superficie como vegetación real
    const vertices: number[] = [];
    const indices: number[] = [];
    const uvs: number[] = [];
    
    // Crear sistema de coordenadas tangente
    const tangent1 = new THREE.Vector3();
    const tangent2 = new THREE.Vector3();
    
    if (Math.abs(normal.y) < 0.99) {
      tangent1.crossVectors(normal, new THREE.Vector3(0, 1, 0)).normalize();
    } else {
      tangent1.crossVectors(normal, new THREE.Vector3(1, 0, 0)).normalize();
    }
    tangent2.crossVectors(normal, tangent1).normalize();
    
    // Posición base en la superficie del planeta
    const centerPosition = normal.clone().multiplyScalar(planetRadius * 1.0005); // Muy ligeramente elevado
    
    // Crear parche orgánico irregular usando ruido
    let vertexIndex = 0;
    
    // Generar forma orgánica irregular (no cuadrada)
    const numPoints = Math.floor(rng.uniform(20, 40)); // Forma poligonal irregular
    const outerPoints: { x: number, y: number, u: number, v: number }[] = [];
    
    // Crear borde exterior orgánico
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      
      // Usar ruido para hacer el borde irregular
      const noiseAngle = angle * 3; // Frecuencia del ruido para variación
      const noiseValue = Math.sin(noiseAngle + rng.uniform(0, Math.PI * 2)) * 0.3 + 1.0; // Variación 0.7 - 1.3
      const radiusVariation = rng.uniform(0.6, 1.0) * noiseValue;
      
      const localRadius = size * radiusVariation;
      const localX = Math.cos(angle) * localRadius;
      const localY = Math.sin(angle) * localRadius;
      
      outerPoints.push({
        x: localX,
        y: localY,
        u: (localX / size + 1) * 0.5, // Normalizar UV
        v: (localY / size + 1) * 0.5
      });
    }
    
    // Añadir punto central
    vertices.push(centerPosition.x, centerPosition.y, centerPosition.z);
    uvs.push(0.5, 0.5);
    const centerIndex = vertexIndex++;
    
    // Añadir puntos del borde
    for (const point of outerPoints) {
      // Convertir coordenadas locales a posición 3D
      const worldPos = centerPosition.clone()
        .addScaledVector(tangent1, point.x)
        .addScaledVector(tangent2, point.y);
      
      // Proyectar sobre la superficie esférica con elevación muy sutil
      const direction = worldPos.clone().normalize();
      const elevationNoise = this.noise2D(point.x * 5, point.y * 5, rng) * 0.0002; // Variación mínima de altura
      const finalPos = direction.multiplyScalar(planetRadius * (1.0005 + elevationNoise));
      
      vertices.push(finalPos.x, finalPos.y, finalPos.z);
      uvs.push(point.u, point.v);
      vertexIndex++;
    }
    
    // Crear triangulación en abanico desde el centro
    for (let i = 0; i < outerPoints.length; i++) {
      const nextI = (i + 1) % outerPoints.length;
      const outerIndex1 = i + 1; // +1 porque el centro es índice 0
      const outerIndex2 = nextI + 1;
      
      // Triángulo desde centro hacia borde
      indices.push(centerIndex, outerIndex1, outerIndex2);
    }
    
    // Crear la geometría
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    
    return geometry;
  }

  private createSingleTreeGeometry(treeSize: number, rng: SeededRandom): THREE.BufferGeometry {
    // Crear geometría simple de árbol individual (billboard vertical orientado radialmente)
    const height = treeSize * rng.uniform(0.8, 1.5); // Altura variable
    const width = treeSize * rng.uniform(0.4, 0.8);   // Ancho variable
    
    // Crear billboard vertical simple (rectangular)
    const vertices = [
      // Triángulo inferior
      -width/2, 0, 0,        // Esquina inferior izquierda
       width/2, 0, 0,        // Esquina inferior derecha
      -width/2, height, 0,   // Esquina superior izquierda
      
      // Triángulo superior  
       width/2, 0, 0,        // Esquina inferior derecha
       width/2, height, 0,   // Esquina superior derecha
      -width/2, height, 0,   // Esquina superior izquierda
    ];
    
    const uvs = [
      // Triángulo inferior
      0, 0,    // UV inferior izquierda
      1, 0,    // UV inferior derecha
      0, 1,    // UV superior izquierda
      
      // Triángulo superior
      1, 0,    // UV inferior derecha
      1, 1,    // UV superior derecha
      0, 1,    // UV superior izquierda
    ];
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.computeVertexNormals();
    
    return geometry;
  }

  private noise2D(x: number, y: number, rng: SeededRandom): number {
    // Función de ruido simple para variación de elevación en vegetación
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

  update(): void {
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