/**
 * Rocky Terrain Effect - Sistema de terrenos rocosos con montañas, cráteres y nubes
 * 
 * Extraído de UniversalPlanet3D.tsx para ser completamente modular
 * y reutilizable en cualquier planeta rocoso.
 */

import * as THREE from 'three';

export interface RockyTerrainParams {
  // Montañas
  mountains?: Array<{
    position: [number, number];
    width: number;
    height: number;
    angle: number;
  }>;
  
  // Nubes
  clouds?: Array<{
    position: [number, number];
    radius: number;
  }>;
  
  // Cráter
  crater?: {
    position: [number, number];
    radius: number;
  };

  // Configuración visual
  mountainColor?: THREE.Color | number[];
  cloudColor?: THREE.Color | number[];
  craterColor?: THREE.Color | number[];
  baseTextureIntensity?: number;
}

export class RockyTerrainEffect {
  private material: THREE.ShaderMaterial;
  private params: RockyTerrainParams;

  // Vertex shader
  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Fragment shader con efectos rocosos
  private static readonly fragmentShader = `
    uniform float time;
    uniform vec3 baseColor;
    
    // Configuración de montañas
    uniform int mountainCount;
    uniform vec3 mountainPositions[30];  // [x, y, angle]
    uniform vec3 mountainSizes[30];      // [width, height, 0]
    uniform vec3 mountainColor;
    
    // Configuración de nubes
    uniform int cloudCount;
    uniform vec3 cloudPositions[10];     // [x, y, radius]
    uniform vec3 cloudColor;
    
    // Configuración de cráter
    uniform bool hasCrater;
    uniform vec3 craterPosition;         // [x, y, radius]
    uniform vec3 craterColor;
    
    // Configuración general
    uniform float baseTextureIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    // Función de ruido 3D
    float hash(float n) {
      return fract(sin(n) * 43758.5453123);
    }
    
    float noise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float n = i.x + i.y * 57.0 + 113.0 * i.z;
      return mix(
        mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
            mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
        mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
            mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = baseColor;
      
      // Textura base de terreno rocoso
      float landBase = noise(pos * 3.0) * baseTextureIntensity;
      color = mix(color, vec3(0.149, 0.149, 0.149), landBase * 0.3);
      
      // Variaciones de superficie más claras
      float landHighlight = noise(pos * 5.0) * baseTextureIntensity;
      color = mix(color, vec3(0.314, 0.314, 0.314), landHighlight * 0.1);
      
      // Renderizar montañas
      for(int i = 0; i < 30; i++) {
        if(i >= mountainCount) break;
        
        vec3 mountainPos = mountainPositions[i]; // [x, y, angle]
        vec3 mountainSize = mountainSizes[i];    // [width, height, 0]
        
        // Distancia al centro de la montaña
        float distToMountain = distance(pos.xy, mountainPos.xy);
        
        // Crear pico triangular de montaña
        if(distToMountain < mountainSize.x) {
          // Calcular altura basada en distancia - forma triangular
          float normalizedDist = distToMountain / mountainSize.x;
          float mountainHeight = (1.0 - normalizedDist) * mountainSize.y;
          
          if(mountainHeight > 0.0) {
            float mountainIntensity = mountainHeight * 2.0;
            color = mix(color, mountainColor, mountainIntensity * 0.9);
          }
        }
      }
      
      // Renderizar nubes
      for(int i = 0; i < 10; i++) {
        if(i >= cloudCount) break;
        
        vec3 cloudPos = cloudPositions[i]; // [x, y, radius]
        
        float distToCloud = distance(pos.xy, cloudPos.xy);
        
        if(distToCloud < cloudPos.z) {
          float cloudIntensity = 1.0 - (distToCloud / cloudPos.z);
          cloudIntensity = smoothstep(0.0, 1.0, cloudIntensity);
          
          color = mix(color, cloudColor, cloudIntensity * 0.8);
        }
      }
      
      // Renderizar cráter
      if(hasCrater) {
        float distToCrater = distance(pos.xy, craterPosition.xy);
        
        if(distToCrater < craterPosition.z) {
          float craterIntensity = 1.0 - (distToCrater / craterPosition.z);
          craterIntensity = smoothstep(0.0, 1.0, craterIntensity);
          
          // Efecto de borde para el cráter
          float rimEffect = 1.0 - abs(craterIntensity - 0.8) / 0.2;
          if(craterIntensity > 0.6 && craterIntensity < 1.0) {
            rimEffect = max(rimEffect, 0.0);
          } else {
            rimEffect = 0.0;
          }
          
          vec3 rimColor = vec3(0.4, 0.4, 0.4); // Color del borde más claro
          
          color = mix(color, craterColor, craterIntensity * 0.9);
          color = mix(color, rimColor, rimEffect * 0.5);
        }
      }
      
      // Iluminación básica
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      color *= lighting;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  constructor(params: RockyTerrainParams = {}) {
    this.params = {
      mountains: params.mountains || [],
      clouds: params.clouds || [],
      crater: params.crater,
      mountainColor: params.mountainColor || new THREE.Color(0.8, 0.8, 0.8),
      cloudColor: params.cloudColor || new THREE.Color(0.7, 0.7, 0.7),
      craterColor: params.craterColor || new THREE.Color(0.1, 0.1, 0.1),
      baseTextureIntensity: params.baseTextureIntensity || 0.4,
      ...params
    };

    this.material = this.createMaterial();
  }

  /**
   * Crea el material shader
   */
  private createMaterial(): THREE.ShaderMaterial {
    const mountainColor = this.params.mountainColor instanceof THREE.Color ? 
      this.params.mountainColor : new THREE.Color(this.params.mountainColor as any);
    const cloudColor = this.params.cloudColor instanceof THREE.Color ? 
      this.params.cloudColor : new THREE.Color(this.params.cloudColor as any);
    const craterColor = this.params.craterColor instanceof THREE.Color ? 
      this.params.craterColor : new THREE.Color(this.params.craterColor as any);

    // Preparar arrays de datos para el shader
    const mountainPositions = new Array(30).fill(new THREE.Vector3());
    const mountainSizes = new Array(30).fill(new THREE.Vector3());
    const cloudPositions = new Array(10).fill(new THREE.Vector3());

    // Llenar arrays con datos de montañas
    if (this.params.mountains) {
      this.params.mountains.forEach((mountain, i) => {
        if (i < 30) {
          mountainPositions[i] = new THREE.Vector3(mountain.position[0], mountain.position[1], mountain.angle);
          mountainSizes[i] = new THREE.Vector3(mountain.width, mountain.height, 0);
        }
      });
    }

    // Llenar arrays con datos de nubes
    if (this.params.clouds) {
      this.params.clouds.forEach((cloud, i) => {
        if (i < 10) {
          cloudPositions[i] = new THREE.Vector3(cloud.position[0], cloud.position[1], cloud.radius);
        }
      });
    }

    return new THREE.ShaderMaterial({
      vertexShader: RockyTerrainEffect.vertexShader,
      fragmentShader: RockyTerrainEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        baseColor: { value: new THREE.Color(0.5, 0.4, 0.3) }, // Color base rocoso
        
        // Uniformes de montañas
        mountainCount: { value: this.params.mountains?.length || 0 },
        mountainPositions: { value: mountainPositions },
        mountainSizes: { value: mountainSizes },
        mountainColor: { value: mountainColor },
        
        // Uniformes de nubes
        cloudCount: { value: this.params.clouds?.length || 0 },
        cloudPositions: { value: cloudPositions },
        cloudColor: { value: cloudColor },
        
        // Uniformes de cráter
        hasCrater: { value: !!this.params.crater },
        craterPosition: { 
          value: this.params.crater ? 
            new THREE.Vector3(this.params.crater.position[0], this.params.crater.position[1], this.params.crater.radius) :
            new THREE.Vector3()
        },
        craterColor: { value: craterColor },
        
        // Configuración general
        baseTextureIntensity: { value: this.params.baseTextureIntensity }
      }
    });
  }

  /**
   * Aplica el efecto a un mesh
   */
  apply(mesh: THREE.Mesh): void {
    mesh.material = this.material;
  }

  /**
   * Actualiza la animación
   */
  update(deltaTime: number): void {
    this.material.uniforms.time.value += deltaTime;
  }

  /**
   * Actualiza parámetros dinámicamente
   */
  updateParams(newParams: Partial<RockyTerrainParams>): void {
    this.params = { ...this.params, ...newParams };
    
    // Recrear material si es necesario
    if (newParams.mountains || newParams.clouds || newParams.crater) {
      const oldMaterial = this.material;
      this.material = this.createMaterial();
      oldMaterial.dispose();
    }
  }

  /**
   * Obtiene el material para manipulación directa
   */
  getMaterial(): THREE.ShaderMaterial {
    return this.material;
  }

  /**
   * Limpia recursos
   */
  dispose(): void {
    this.material.dispose();
  }
}

// Función de utilidad para crear desde datos de Python
export function createRockyTerrainFromPythonData(pythonData: any): RockyTerrainEffect {
  // Extraer datos de superficie o usar pythonData directamente
  const surfaceData = pythonData.surface_elements || pythonData.surface || pythonData;
  
  // Usar el base_color de Python si está disponible
  let baseColor = [0.8, 0.8, 0.8]; // Default rocky
  const pythonBaseColor = pythonData.planet_info?.base_color || pythonData.base_color;
  
  if (pythonBaseColor && typeof pythonBaseColor === 'string') {
    const hex = pythonBaseColor.replace('#', '');
    baseColor = [
      parseInt(hex.substr(0, 2), 16) / 255,
      parseInt(hex.substr(2, 2), 16) / 255,
      parseInt(hex.substr(4, 2), 16) / 255
    ];
  } else if (Array.isArray(pythonBaseColor)) {
    baseColor = pythonBaseColor;
  }
  
  
  // GENERAR ELEMENTOS PROCEDIMENTALMENTE usando seeds de Python
  let mountains: Array<{ position: [number, number]; width: number; height: number; angle: number }> = [];
  let clouds: Array<{ position: [number, number]; radius: number }> = [];
  let crater: { position: [number, number]; radius: number } | undefined;
  
  if (pythonData.seeds) {
    // Crear función de random seeded
    const rng = (seed: number) => {
      let s = seed;
      return () => {
        s = (s * 1664525 + 1013904223) % 4294967296;
        return s / 4294967296;
      };
    };
    
    // Generar posición en esfera normalizada
    const spherePosition = (random: () => number): [number, number] => {
      const theta = random() * Math.PI * 2; // 0 a 2π
      const phi = Math.acos(random() * 2 - 1); // 0 a π, distribución uniforme
      
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      
      return [x, y];
    };
    
    // Generar montañas usando planet_seed
    const mountainRandom = rng(pythonData.seeds.planet_seed);
    const mountainCount = 6 + Math.floor(mountainRandom() * 4); // 6-9 montañas
    
    for (let i = 0; i < mountainCount; i++) {
      mountains.push({
        position: spherePosition(mountainRandom),
        width: 0.1 + mountainRandom() * 0.3, // 0.1 - 0.4
        height: 0.2 + mountainRandom() * 0.6, // 0.2 - 0.8
        angle: mountainRandom() * Math.PI * 2
      });
    }
    
    // Generar nubes usando shape_seed + offset
    const cloudRandom = rng(pythonData.seeds.shape_seed + 1000);
    const cloudCount = 3 + Math.floor(cloudRandom() * 4); // 3-6 nubes
    
    for (let i = 0; i < cloudCount; i++) {
      clouds.push({
        position: spherePosition(cloudRandom),
        radius: 0.08 + cloudRandom() * 0.17 // 0.08 - 0.25
      });
    }
    
    // Generar cráter (70% probabilidad) usando shape_seed + otro offset
    const craterRandom = rng(pythonData.seeds.shape_seed + 2000);
    if (craterRandom() < 0.7) {
      crater = {
        position: spherePosition(craterRandom),
        radius: 0.1 + craterRandom() * 0.2 // 0.1 - 0.3
      };
    }
    
  }
  
  const params: RockyTerrainParams = {
    mountains: surfaceData.mountains?.length > 0 ? surfaceData.mountains : mountains,
    clouds: surfaceData.clouds?.length > 0 ? surfaceData.clouds : clouds,
    crater: surfaceData.crater || crater,
    baseTextureIntensity: 0.4,
    // Usar el color de Python para las montañas (un poco más claro)
    mountainColor: new THREE.Color(baseColor[0] * 1.1, baseColor[1] * 1.1, baseColor[2] * 1.1),
    // Nubes un poco más claras
    cloudColor: new THREE.Color(baseColor[0] * 0.9, baseColor[1] * 0.9, baseColor[2] * 0.9),
    // Cráteres más oscuros
    craterColor: new THREE.Color(baseColor[0] * 0.3, baseColor[1] * 0.3, baseColor[2] * 0.3)
  };

  return new RockyTerrainEffect(params);
}