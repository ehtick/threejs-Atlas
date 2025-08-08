/**
 * Planet Effects Library - Sistema modular de efectos 3D reutilizables
 * 
 * Cada efecto es independiente y puede componerse dinámicamente
 * basándose en los datos procedurales de Python sin hardcodeo.
 */

import * as THREE from 'three';

// ============================================================================
// TIPOS Y INTERFACES
// ============================================================================

export interface EffectParameters {
  intensity?: number;
  color?: number[] | THREE.Color;
  opacity?: number;
  speed?: number;
  frequency?: number;
  amplitude?: number;
  scale?: number;
  roughness?: number;
  metalness?: number;
  [key: string]: any;
}

export interface PlanetEffect {
  type: string;
  params: EffectParameters;
  priority?: number; // Orden de renderizado
}

// ============================================================================
// SHADERS REUTILIZABLES
// ============================================================================

/**
 * Shader PBR Metálico Procedural
 * Simula superficies metálicas con variaciones procedurales
 */
export const MetallicPBRShader = {
  vertexShader: `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vViewPosition;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  
  fragmentShader: `
    uniform float time;
    uniform vec3 baseColor;
    uniform float roughness;
    uniform float metalness;
    uniform float fragmentationIntensity;
    uniform float noiseScale;
    uniform float noiseIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vViewPosition;
    
    // Ruido procedural para variaciones de superficie
    float hash(vec3 p) {
      p = fract(p * vec3(443.8975, 397.2973, 491.1871));
      p += dot(p, p.yxz + 19.19);
      return fract((p.x + p.y) * p.z);
    }
    
    float noise3D(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float n = mix(
        mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
      
      return n;
    }
    
    // Fractales para fragmentación
    float fractal(vec3 p, int octaves) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for(int i = 0; i < octaves; i++) {
        value += amplitude * noise3D(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    // Función para crear grietas angulares
    float angularCracks(vec2 uv, float scale, float sharpness) {
      vec2 id = floor(uv * scale);
      vec2 f = fract(uv * scale);
      
      float d = 1.0;
      for(float x = -1.0; x <= 1.0; x++) {
        for(float y = -1.0; y <= 1.0; y++) {
          vec2 neighbor = vec2(x, y);
          vec2 point = hash(vec3(id + neighbor, 0.0)) * vec2(1.0) + neighbor;
          float dist = length(f - point);
          d = min(d, dist);
        }
      }
      
      return pow(1.0 - d, sharpness);
    }
    
    // PBR básico
    vec3 calculatePBR(vec3 albedo, float metallic, float rough, vec3 normal, vec3 viewDir) {
      vec3 lightDir = normalize(vec3(1.0, 1.0, 0.5));
      vec3 halfwayDir = normalize(lightDir + viewDir);
      
      // Difuso
      float NdotL = max(dot(normal, lightDir), 0.0);
      vec3 diffuse = albedo * (1.0 - metallic) * NdotL;
      
      // Especular simplificado
      float NdotH = max(dot(normal, halfwayDir), 0.0);
      float specularStrength = pow(NdotH, mix(4.0, 128.0, 1.0 - rough));
      vec3 specular = mix(vec3(0.04), albedo, metallic) * specularStrength;
      
      // Fresnel para bordes metálicos
      float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
      vec3 fresnelColor = mix(vec3(0.04), albedo, metallic) * fresnel;
      
      return diffuse + specular + fresnelColor * 0.5;
    }
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // Base metálica con variaciones
      vec3 color = baseColor;
      
      // Añadir ruido para variaciones sutiles
      float surfaceNoise = noise3D(vPosition * noiseScale);
      color = mix(color, color * 0.7, surfaceNoise * noiseIntensity);
      
      // Fragmentación angular en los bordes
      float edgeFactor = 1.0 - abs(dot(normal, viewDir));
      float fragmentation = angularCracks(vUv, 5.0 + fragmentationIntensity * 10.0, 2.0);
      
      // Aplicar fragmentación más fuerte en los bordes
      if(edgeFactor > 0.7) {
        color = mix(color, color * 0.3, fragmentation * edgeFactor);
        
        // Añadir grietas más pronunciadas
        float cracks = angularCracks(vUv * 2.0, 8.0, 4.0);
        color = mix(color, color * 0.2, cracks * edgeFactor * 0.5);
      }
      
      // Ondas circulares sutiles en el interior
      float radialWaves = sin(length(vUv - 0.5) * 20.0 + time * 0.5) * 0.5 + 0.5;
      color = mix(color, color * 1.1, radialWaves * 0.1 * (1.0 - edgeFactor));
      
      // Calcular iluminación PBR
      vec3 finalColor = calculatePBR(color, metalness, roughness, normal, viewDir);
      
      // Añadir un toque de color oscuro para profundidad
      finalColor = mix(finalColor, finalColor * 0.5, pow(surfaceNoise, 2.0) * 0.3);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
};

/**
 * Shader de Halo Atmosférico
 * Crea un halo luminoso alrededor del planeta
 */
export const AtmosphericHaloShader = {
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  
  fragmentShader: `
    uniform vec3 glowColor;
    uniform float glowIntensity;
    uniform float glowFalloff;
    uniform float time;
    
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // Efecto Fresnel para el halo
      float fresnel = pow(1.0 - abs(dot(normal, viewDir)), glowFalloff);
      
      // Pulsación sutil
      float pulse = sin(time * 2.0) * 0.1 + 1.0;
      
      // Color del halo con gradiente
      vec3 color = glowColor * glowIntensity * fresnel * pulse;
      
      // Añadir variación de color en los bordes
      color += glowColor * 0.5 * pow(fresnel, 3.0);
      
      gl_FragColor = vec4(color, fresnel * 0.8);
    }
  `
};

/**
 * Shader de Estelas Atmosféricas
 * Simula partículas y estelas en movimiento
 */
export const AtmosphericStreaksShader = {
  vertexShader: `
    attribute float size;
    attribute vec3 customColor;
    attribute float speed;
    
    varying vec3 vColor;
    varying float vAlpha;
    
    uniform float time;
    
    void main() {
      vColor = customColor;
      
      // Movimiento de las partículas
      vec3 pos = position;
      float angle = time * speed;
      pos.x += sin(angle) * 0.1;
      pos.y += cos(angle * 0.7) * 0.05;
      
      // Fade basado en la posición
      vAlpha = 1.0 - length(pos.xy) / 2.0;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  
  fragmentShader: `
    varying vec3 vColor;
    varying float vAlpha;
    
    void main() {
      // Crear forma de estela
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      // Estela alargada
      float streak = 1.0 - smoothstep(0.0, 0.5, dist);
      streak *= 1.0 - smoothstep(0.0, 0.2, abs(uv.x));
      
      gl_FragColor = vec4(vColor, streak * vAlpha * 0.6);
    }
  `
};

// ============================================================================
// CLASES DE EFECTOS
// ============================================================================

/**
 * Efecto de Superficie Metálica PBR
 */
export class MetallicSurfaceEffect {
  private material: THREE.ShaderMaterial;
  private metallicLayerMesh?: THREE.Mesh;
  
  constructor(params: EffectParameters) {
    this.material = new THREE.ShaderMaterial({
      vertexShader: MetallicPBRShader.vertexShader,
      fragmentShader: MetallicPBRShader.fragmentShader,
      uniforms: {
        time: { value: 0 },
        baseColor: { value: new THREE.Color(params.color || [0.5, 0.5, 0.5]) },
        roughness: { value: params.roughness || 0.7 },
        metalness: { value: params.metalness || 0.9 },
        fragmentationIntensity: { value: params.fragmentationIntensity || 0.5 },
        noiseScale: { value: params.noiseScale || 8.0 },
        noiseIntensity: { value: params.noiseIntensity || 0.3 }
      }
    });
  }
  
  apply(mesh: THREE.Mesh): void {
    // 🚀 NO reemplazar el material base - crear capa metálica
    
    this.createMetallicLayer(mesh);
  }

  /**
   * Crea una capa metálica separada del planeta base
   */
  private createMetallicLayer(baseMesh: THREE.Mesh): void {
    const geometry = baseMesh.geometry.clone();
    
    // Escalar ligeramente para evitar z-fighting
    geometry.scale(1.001, 1.001, 1.001);
    
    const metallicMesh = new THREE.Mesh(geometry, this.material);
    
    // Copiar posición y rotación del mesh base
    metallicMesh.position.copy(baseMesh.position);
    metallicMesh.rotation.copy(baseMesh.rotation);
    
    this.metallicLayerMesh = metallicMesh;
    
  }
  
  update(deltaTime: number, planetRotation?: number): void {
    this.material.uniforms.time.value += deltaTime;
    
    // Sincronizar rotación con el planeta base
    if (this.metallicLayerMesh && planetRotation !== undefined) {
      this.metallicLayerMesh.rotation.y = planetRotation;
    }
  }

  /**
   * Añade la capa metálica a la escena
   */
  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (this.metallicLayerMesh) {
      if (planetPosition) {
        this.metallicLayerMesh.position.copy(planetPosition);
      }
      scene.add(this.metallicLayerMesh);
      
    } else {
      console.warn('🪨 MetallicSurface: No hay capa metálica - call apply() first');
    }
  }
  
  updateParams(params: EffectParameters): void {
    if (params.roughness !== undefined) {
      this.material.uniforms.roughness.value = params.roughness;
    }
    if (params.metalness !== undefined) {
      this.material.uniforms.metalness.value = params.metalness;
    }
    if (params.fragmentationIntensity !== undefined) {
      this.material.uniforms.fragmentationIntensity.value = params.fragmentationIntensity;
    }
  }

  /**
   * Limpia recursos
   */
  dispose(): void {
    this.material.dispose();
    if (this.metallicLayerMesh) {
      if (this.metallicLayerMesh.geometry) {
        this.metallicLayerMesh.geometry.dispose();
      }
      this.metallicLayerMesh = undefined;
    }
  }
}

/**
 * Efecto de Halo Atmosférico
 */
export class AtmosphericHaloEffect {
  private mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  
  constructor(planetRadius: number, params: EffectParameters) {
    const geometry = new THREE.SphereGeometry(
      planetRadius * (params.scale || 1.15),
      64,
      64
    );
    
    this.material = new THREE.ShaderMaterial({
      vertexShader: AtmosphericHaloShader.vertexShader,
      fragmentShader: AtmosphericHaloShader.fragmentShader,
      uniforms: {
        glowColor: { value: new THREE.Color(params.color || [0.5, 0.0, 1.0]) },
        glowIntensity: { value: params.intensity || 1.0 },
        glowFalloff: { value: params.falloff || 2.0 },
        time: { value: 0 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false
    });
    
    this.mesh = new THREE.Mesh(geometry, this.material);
  }
  
  addToScene(scene: THREE.Scene, planetPosition: THREE.Vector3): void {
    this.mesh.position.copy(planetPosition);
    scene.add(this.mesh);
  }
  
  update(deltaTime: number): void {
    this.material.uniforms.time.value += deltaTime;
  }
  
  updateParams(params: EffectParameters): void {
    if (params.color) {
      this.material.uniforms.glowColor.value = new THREE.Color(params.color);
    }
    if (params.intensity !== undefined) {
      this.material.uniforms.glowIntensity.value = params.intensity;
    }
  }
}

/**
 * Efecto de Estelas Atmosféricas
 */
export class AtmosphericStreaksEffect {
  private particleSystem: THREE.Points;
  private material: THREE.ShaderMaterial;
  private particleCount: number;
  
  constructor(planetRadius: number, params: EffectParameters) {
    this.particleCount = params.particleCount || 100;
    
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);
    const sizes = new Float32Array(this.particleCount);
    const speeds = new Float32Array(this.particleCount);
    
    const color = new THREE.Color(params.color || [1, 1, 1]);
    
    for (let i = 0; i < this.particleCount; i++) {
      // Posición aleatoria en la superficie
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = planetRadius * (1.0 + Math.random() * 0.1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      sizes[i] = Math.random() * 3 + 1;
      speeds[i] = Math.random() * 2 + 0.5;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
    
    this.material = new THREE.ShaderMaterial({
      vertexShader: AtmosphericStreaksShader.vertexShader,
      fragmentShader: AtmosphericStreaksShader.fragmentShader,
      uniforms: {
        time: { value: 0 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    this.particleSystem = new THREE.Points(geometry, this.material);
  }
  
  addToScene(scene: THREE.Scene, planetPosition: THREE.Vector3): void {
    this.particleSystem.position.copy(planetPosition);
    scene.add(this.particleSystem);
  }
  
  update(deltaTime: number): void {
    this.material.uniforms.time.value += deltaTime;
    this.particleSystem.rotation.y += deltaTime * 0.1;
  }
}

/**
 * Efecto de Fragmentación 3D
 * Crea geometría fragmentada en los bordes
 */
export class FragmentationEffect {
  private fragments: THREE.Group;
  private fragmentMeshes: THREE.Mesh[] = [];
  
  constructor(planetRadius: number, params: EffectParameters) {
    this.fragments = new THREE.Group();
    
    const fragmentCount = params.fragmentCount || 20;
    const material = new THREE.MeshStandardMaterial({
      color: params.color || 0x444444,
      metalness: 0.9,
      roughness: 0.6
    });
    
    for (let i = 0; i < fragmentCount; i++) {
      // Crear fragmentos triangulares/pentagonales
      const vertices = this.generateFragmentVertices();
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geometry.computeVertexNormals();
      
      const fragment = new THREE.Mesh(geometry, material);
      
      // Posicionar en los bordes
      const angle = (i / fragmentCount) * Math.PI * 2;
      const edgeOffset = planetRadius * 0.95;
      fragment.position.set(
        Math.cos(angle) * edgeOffset,
        (Math.random() - 0.5) * planetRadius * 0.5,
        Math.sin(angle) * edgeOffset
      );
      
      // Rotación aleatoria
      fragment.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      // Escala variable
      const scale = Math.random() * 0.1 + 0.05;
      fragment.scale.set(scale, scale, scale);
      
      this.fragmentMeshes.push(fragment);
      this.fragments.add(fragment);
    }
  }
  
  private generateFragmentVertices(): Float32Array {
    const sides = Math.floor(Math.random() * 3) + 3; // 3-5 lados
    const vertices = [];
    
    // Centro
    vertices.push(0, 0, 0);
    
    // Vértices del polígono
    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2;
      const radius = Math.random() * 0.5 + 0.5;
      vertices.push(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        Math.random() * 0.2 - 0.1
      );
    }
    
    // Crear caras
    const faces = [];
    for (let i = 0; i < sides; i++) {
      faces.push(0, i + 1, ((i + 1) % sides) + 1);
    }
    
    return new Float32Array(faces.flatMap(i => vertices.slice(i * 3, i * 3 + 3)));
  }
  
  addToScene(scene: THREE.Scene, planetPosition: THREE.Vector3): void {
    this.fragments.position.copy(planetPosition);
    scene.add(this.fragments);
  }
  
  update(deltaTime: number): void {
    // Rotación lenta de fragmentos
    this.fragmentMeshes.forEach((fragment, i) => {
      fragment.rotation.x += deltaTime * 0.1 * (i % 2 === 0 ? 1 : -1);
      fragment.rotation.y += deltaTime * 0.05;
    });
  }
}

// ============================================================================
// GESTOR DE EFECTOS
// ============================================================================

/**
 * PlanetEffectsManager - Gestiona todos los efectos de un planeta
 */
export class PlanetEffectsManager {
  private effects: Map<string, any> = new Map();
  private scene: THREE.Scene;
  private planetMesh: THREE.Mesh;
  private planetRadius: number;
  
  constructor(scene: THREE.Scene, planetMesh: THREE.Mesh, planetRadius: number) {
    this.scene = scene;
    this.planetMesh = planetMesh;
    this.planetRadius = planetRadius;
  }
  
  /**
   * Aplica efectos basándose en datos JSON de Python
   */
  applyEffectsFromData(effectsData: PlanetEffect[]): void {
    // Ordenar por prioridad
    const sortedEffects = effectsData.sort((a, b) => (a.priority || 0) - (b.priority || 0));
    
    for (const effectData of sortedEffects) {
      this.addEffect(effectData.type, effectData.params);
    }
  }
  
  /**
   * Añade un efecto individual
   */
  addEffect(type: string, params: EffectParameters): void {
    let effect;
    
    switch (type) {
      case 'metallic_surface':
        effect = new MetallicSurfaceEffect(params);
        effect.apply(this.planetMesh);
        break;
        
      case 'atmospheric_halo':
        effect = new AtmosphericHaloEffect(this.planetRadius, params);
        effect.addToScene(this.scene, this.planetMesh.position);
        break;
        
      case 'atmospheric_streaks':
        effect = new AtmosphericStreaksEffect(this.planetRadius, params);
        effect.addToScene(this.scene, this.planetMesh.position);
        break;
        
      case 'fragmentation':
        effect = new FragmentationEffect(this.planetRadius, params);
        effect.addToScene(this.scene, this.planetMesh.position);
        break;
        
      // Más efectos pueden añadirse aquí sin modificar el resto del código
      case 'lava_flows':
        // effect = new LavaFlowsEffect(this.planetRadius, params);
        break;
        
      case 'crystal_formations':
        // effect = new CrystalFormationsEffect(this.planetRadius, params);
        break;
        
      case 'ocean_waves':
        // effect = new OceanWavesEffect(this.planetRadius, params);
        break;
        
      case 'cloud_layers':
        // effect = new CloudLayersEffect(this.planetRadius, params);
        break;
    }
    
    if (effect) {
      this.effects.set(type, effect);
    }
  }
  
  /**
   * Actualiza todos los efectos activos
   */
  update(deltaTime: number): void {
    this.effects.forEach(effect => {
      if (effect.update) {
        effect.update(deltaTime);
      }
    });
  }
  
  /**
   * Actualiza parámetros de un efecto específico
   */
  updateEffectParams(type: string, params: EffectParameters): void {
    const effect = this.effects.get(type);
    if (effect && effect.updateParams) {
      effect.updateParams(params);
    }
  }
  
  /**
   * Elimina un efecto
   */
  removeEffect(type: string): void {
    const effect = this.effects.get(type);
    if (effect) {
      if (effect.dispose) {
        effect.dispose();
      }
      this.effects.delete(type);
    }
  }
  
  /**
   * Limpia todos los efectos
   */
  dispose(): void {
    this.effects.forEach(effect => {
      if (effect.dispose) {
        effect.dispose();
      }
    });
    this.effects.clear();
  }
}

// ============================================================================
// UTILIDADES
// ============================================================================

/**
 * Convierte datos de Python a efectos Three.js
 */
export function translatePythonEffectsToThreeJS(pythonData: any): PlanetEffect[] {
  const effects: PlanetEffect[] = [];
  
  // Superficie metálica
  if (pythonData.surface?.type === 'metallic') {
    effects.push({
      type: 'metallic_surface',
      params: {
        color: pythonData.surface.base_color || [0.4, 0.4, 0.45],
        roughness: pythonData.surface.roughness || 0.7,
        metalness: pythonData.surface.metalness || 0.9,
        fragmentationIntensity: pythonData.surface.fragmentation || 0.5,
        noiseScale: pythonData.surface.noise_scale || 8.0,
        noiseIntensity: pythonData.surface.noise_intensity || 0.3
      },
      priority: 0
    });
  }
  
  // Halo atmosférico
  if (pythonData.atmosphere?.halo) {
    effects.push({
      type: 'atmospheric_halo',
      params: {
        color: pythonData.atmosphere.halo.color || [0.5, 0.0, 1.0],
        intensity: pythonData.atmosphere.halo.intensity || 1.0,
        falloff: pythonData.atmosphere.halo.falloff || 2.0,
        scale: pythonData.atmosphere.halo.scale || 1.15
      },
      priority: 10
    });
  }
  
  // Estelas atmosféricas
  if (pythonData.atmosphere?.streaks) {
    effects.push({
      type: 'atmospheric_streaks',
      params: {
        color: pythonData.atmosphere.streaks.color || [1, 1, 1],
        particleCount: pythonData.atmosphere.streaks.count || 100,
        speed: pythonData.atmosphere.streaks.speed || 1.0
      },
      priority: 20
    });
  }
  
  // Fragmentación
  if (pythonData.surface?.fragmentation_zones) {
    effects.push({
      type: 'fragmentation',
      params: {
        color: pythonData.surface.fragment_color || [0.3, 0.3, 0.3],
        fragmentCount: pythonData.surface.fragment_count || 20
      },
      priority: 5
    });
  }
  
  return effects;
}