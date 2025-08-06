/**
 * Icy Terrain Effect - Sistema de terrenos helados con cristales, grietas y casquetes polares
 * 
 * Extraído de UniversalPlanet3D.tsx para ser completamente modular
 * y reutilizable en cualquier planeta helado.
 */

import * as THREE from 'three';

export interface IcyTerrainParams {
  // Cristales
  crystals?: Array<{
    position: [number, number];
    length: number;
    width: number;
    angle: number;
  }>;
  
  // Grietas
  cracks?: Array<{
    angle: number;
    length: number;
  }>;
  
  // Casquetes polares
  iceCaps?: Array<{
    position: [number, number];
    radius: number;
  }>;

  // Configuración visual
  crystalColor?: THREE.Color | number[];
  crackColor?: THREE.Color | number[];
  iceCapColor?: THREE.Color | number[];
  baseTextureIntensity?: number;
}

export class IcyTerrainEffect {
  private material: THREE.ShaderMaterial;
  private params: IcyTerrainParams;

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

  // Fragment shader con efectos helados
  private static readonly fragmentShader = `
    uniform float time;
    uniform vec3 baseColor;
    
    // Configuración de cristales
    uniform int crystalCount;
    uniform vec3 crystalPositions[50];   // [x, y, angle]
    uniform vec3 crystalSizes[50];       // [length, width, 0]
    uniform vec3 crystalColor;
    
    // Configuración de grietas
    uniform int crackCount;
    uniform vec2 crackAngles[12];        // [angle, length]
    uniform vec3 crackColor;
    
    // Configuración de casquetes polares
    uniform int iceCapCount;
    uniform vec3 iceCapPositions[4];     // [x, y, radius]
    uniform vec3 iceCapColor;
    
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
      
      // Textura base de terreno helado
      // Áreas azul-gris más sutiles
      float landBase = noise(pos * 2.0) * baseTextureIntensity;
      color = mix(color, vec3(0.494, 0.663, 0.839), landBase * 0.2);
      
      // Variaciones de superficie más claras y sutiles
      float landHighlight = noise(pos * 4.0) * baseTextureIntensity;
      color = mix(color, vec3(0.318, 0.416, 0.569), landHighlight * 0.02);
      
      // Renderizar cristales
      for(int i = 0; i < 50; i++) {
        if(i >= crystalCount) break;
        
        vec3 crystalPos = crystalPositions[i]; // [x, y, angle]
        vec3 crystalSize = crystalSizes[i];    // [length, width, 0]
        
        // Calcular distancia al centro del cristal
        float distToCrystal = distance(pos.xy, crystalPos.xy);
        
        // Crear forma de cristal usando longitud y ancho
        float crystalRadius = max(crystalSize.x, crystalSize.y);
        
        if(distToCrystal < crystalRadius) {
          // Crear forma rectangular de cristal con rotación
          float angle = crystalPos.z; // ángulo de rotación
          vec2 rotatedPos = pos.xy - crystalPos.xy;
          
          // Rotar la posición para alinear con la orientación del cristal
          float cosA = cos(angle);
          float sinA = sin(angle);
          vec2 aligned = vec2(
            rotatedPos.x * cosA + rotatedPos.y * sinA,
            -rotatedPos.x * sinA + rotatedPos.y * cosA
          );
          
          // Verificar si está dentro del rectángulo del cristal
          if(abs(aligned.x) < crystalSize.x && abs(aligned.y) < crystalSize.y) {
            float crystalIntensity = 1.0 - max(abs(aligned.x)/crystalSize.x, abs(aligned.y)/crystalSize.y);
            color = mix(color, crystalColor, crystalIntensity * 0.8);
          }
        }
      }
      
      // Renderizar grietas
      for(int i = 0; i < 12; i++) {
        if(i >= crackCount) break;
        
        vec2 crackData = crackAngles[i]; // [angle, length]
        
        float crackAngle = crackData.x;
        float crackLength = crackData.y;
        
        // Crear línea de grieta desde el centro hacia afuera
        vec2 crackDir = vec2(cos(crackAngle), sin(crackAngle));
        
        // Distancia desde la línea de grieta
        float distAlongCrack = dot(pos.xy, crackDir);
        float distFromCrack = abs(dot(pos.xy, vec2(-crackDir.y, crackDir.x)));
        
        // Verificar si estamos en la línea de grieta
        if(distFromCrack < 0.015 && abs(distAlongCrack) < crackLength * 0.5) {
          float crackIntensity = 1.0 - (distFromCrack / 0.015);
          color = mix(color, crackColor, crackIntensity * 0.6);
        }
      }
      
      // Renderizar casquetes polares
      for(int i = 0; i < 4; i++) {
        if(i >= iceCapCount) break;
        
        vec3 iceCapPos = iceCapPositions[i]; // [x, y, radius]
        
        float distToIceCap = distance(pos.xy, iceCapPos.xy);
        
        if(distToIceCap < iceCapPos.z) {
          float iceCapIntensity = 1.0 - (distToIceCap / iceCapPos.z);
          // Degradado suave
          iceCapIntensity = smoothstep(0.0, 1.0, iceCapIntensity);
          
          color = mix(color, iceCapColor, iceCapIntensity * 0.9);
        }
      }
      
      // Brillo helado sutil
      float iceShimmer = sin(time * 2.0 + pos.x * 20.0) * sin(time * 1.5 + pos.y * 15.0);
      color += vec3(0.1, 0.15, 0.2) * iceShimmer * 0.1;
      
      // Iluminación básica
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      color *= lighting;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  constructor(params: IcyTerrainParams = {}) {
    this.params = {
      crystals: params.crystals || [],
      cracks: params.cracks || [],
      iceCaps: params.iceCaps || [],
      crystalColor: params.crystalColor || new THREE.Color(0.675, 0.843, 0.902),
      crackColor: params.crackColor || new THREE.Color(0.2, 0.2, 0.2),
      iceCapColor: params.iceCapColor || new THREE.Color(0.678, 0.847, 1.0),
      baseTextureIntensity: params.baseTextureIntensity || 0.3,
      ...params
    };

    this.material = this.createMaterial();
  }

  /**
   * Crea el material shader
   */
  private createMaterial(): THREE.ShaderMaterial {
    const crystalColor = this.params.crystalColor instanceof THREE.Color ? 
      this.params.crystalColor : new THREE.Color(this.params.crystalColor as any);
    const crackColor = this.params.crackColor instanceof THREE.Color ? 
      this.params.crackColor : new THREE.Color(this.params.crackColor as any);
    const iceCapColor = this.params.iceCapColor instanceof THREE.Color ? 
      this.params.iceCapColor : new THREE.Color(this.params.iceCapColor as any);

    // Preparar arrays de datos para el shader
    const crystalPositions = new Array(50).fill(new THREE.Vector3());
    const crystalSizes = new Array(50).fill(new THREE.Vector3());
    const crackAngles = new Array(12).fill(new THREE.Vector2());
    const iceCapPositions = new Array(4).fill(new THREE.Vector3());

    // Llenar arrays con datos de cristales
    if (this.params.crystals) {
      this.params.crystals.forEach((crystal, i) => {
        if (i < 50) {
          crystalPositions[i] = new THREE.Vector3(crystal.position[0], crystal.position[1], crystal.angle);
          crystalSizes[i] = new THREE.Vector3(crystal.length, crystal.width, 0);
        }
      });
    }

    // Llenar arrays con datos de grietas
    if (this.params.cracks) {
      this.params.cracks.forEach((crack, i) => {
        if (i < 12) {
          crackAngles[i] = new THREE.Vector2(crack.angle, crack.length);
        }
      });
    }

    // Llenar arrays con datos de casquetes polares
    if (this.params.iceCaps) {
      this.params.iceCaps.forEach((iceCap, i) => {
        if (i < 4) {
          iceCapPositions[i] = new THREE.Vector3(iceCap.position[0], iceCap.position[1], iceCap.radius);
        }
      });
    }

    return new THREE.ShaderMaterial({
      vertexShader: IcyTerrainEffect.vertexShader,
      fragmentShader: IcyTerrainEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        baseColor: { value: new THREE.Color(0.6, 0.8, 1.0) }, // Color base helado
        
        // Uniformes de cristales
        crystalCount: { value: this.params.crystals?.length || 0 },
        crystalPositions: { value: crystalPositions },
        crystalSizes: { value: crystalSizes },
        crystalColor: { value: crystalColor },
        
        // Uniformes de grietas
        crackCount: { value: this.params.cracks?.length || 0 },
        crackAngles: { value: crackAngles },
        crackColor: { value: crackColor },
        
        // Uniformes de casquetes polares
        iceCapCount: { value: this.params.iceCaps?.length || 0 },
        iceCapPositions: { value: iceCapPositions },
        iceCapColor: { value: iceCapColor },
        
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
  updateParams(newParams: Partial<IcyTerrainParams>): void {
    this.params = { ...this.params, ...newParams };
    
    // Recrear material si es necesario
    if (newParams.crystals || newParams.cracks || newParams.iceCaps) {
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
export function createIcyTerrainFromPythonData(pythonData: any): IcyTerrainEffect {
  // Extraer datos de superficie o usar pythonData directamente
  const surfaceData = pythonData.surface_elements || pythonData.surface || pythonData;
  
  // Usar el base_color de Python si está disponible
  let baseColor = [0.9, 0.95, 1.0]; // Default icy
  const pythonBaseColor = pythonData.planet_info?.base_color || pythonData.base_color;
  
  if (pythonBaseColor && typeof pythonBaseColor === 'string') {
    const hex = pythonBaseColor.replace('#', '');
    baseColor = [
      parseInt(hex.substr(0, 2), 16) / 255,
      parseInt(hex.substr(2, 2), 16) / 255,
      parseInt(hex.substr(4, 2), 16) / 255
    ];
    // Para planetas helados, añadir un tinte azulado frío
    baseColor = [
      Math.min(baseColor[0] + 0.1, 1.0),
      Math.min(baseColor[1] + 0.15, 1.0),
      Math.min(baseColor[2] + 0.2, 1.0)
    ];
  } else if (Array.isArray(pythonBaseColor)) {
    baseColor = pythonBaseColor;
  }
  
  console.log('❄️ Creating icy terrain effect with color from Python:', {
    base_color: pythonData.planet_info?.base_color,
    final_color: baseColor
  });
  
  // GENERAR ELEMENTOS PROCEDIMENTALMENTE usando seeds de Python
  let crystals: Array<{ position: [number, number]; length: number; width: number; angle: number }> = [];
  let cracks: Array<{ angle: number; length: number }> = [];
  let iceCaps: Array<{ position: [number, number]; radius: number }> = [];
  
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
    
    // Generar cristales usando planet_seed
    const crystalRandom = rng(pythonData.seeds.planet_seed);
    const crystalCount = 4 + Math.floor(crystalRandom() * 6); // 4-9 cristales
    
    for (let i = 0; i < crystalCount; i++) {
      crystals.push({
        position: spherePosition(crystalRandom),
        length: 0.1 + crystalRandom() * 0.2, // 0.1 - 0.3
        width: 0.05 + crystalRandom() * 0.1, // 0.05 - 0.15
        angle: crystalRandom() * Math.PI * 2
      });
    }
    
    // Generar grietas usando shape_seed
    const crackRandom = rng(pythonData.seeds.shape_seed);
    const crackCount = 3 + Math.floor(crackRandom() * 5); // 3-7 grietas
    
    for (let i = 0; i < crackCount; i++) {
      cracks.push({
        angle: crackRandom() * Math.PI * 2,
        length: 0.2 + crackRandom() * 0.6 // 0.2 - 0.8
      });
    }
    
    // Generar casquetes polares usando shape_seed + offset
    const iceCapRandom = rng(pythonData.seeds.shape_seed + 500);
    const iceCapCount = 2 + Math.floor(iceCapRandom() * 3); // 2-4 casquetes
    
    for (let i = 0; i < iceCapCount; i++) {
      iceCaps.push({
        position: spherePosition(iceCapRandom),
        radius: 0.15 + iceCapRandom() * 0.25 // 0.15 - 0.4
      });
    }
    
    console.log('❄️ Generated procedural icy terrain:', {
      seeds: pythonData.seeds,
      crystalCount: crystals.length,
      crackCount: cracks.length,
      iceCapCount: iceCaps.length
    });
  }
  
  const params: IcyTerrainParams = {
    crystals: surfaceData.crystals?.length > 0 ? surfaceData.crystals : crystals,
    cracks: surfaceData.cracks?.length > 0 ? surfaceData.cracks : cracks,
    iceCaps: surfaceData.ice_caps?.length > 0 ? surfaceData.ice_caps : iceCaps,
    baseTextureIntensity: 0.3,
    // Usar colores basados en el color de Python
    crystalColor: new THREE.Color(baseColor[0] * 0.8, baseColor[1] * 0.9, baseColor[2] * 1.0),
    crackColor: new THREE.Color(baseColor[0] * 0.3, baseColor[1] * 0.3, baseColor[2] * 0.4),
    iceCapColor: new THREE.Color(baseColor[0] * 1.1, baseColor[1] * 1.1, baseColor[2] * 1.0)
  };

  return new IcyTerrainEffect(params);
}