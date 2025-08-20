/**
 * AquiferWaterEffect.tsx
 * 
 * Efecto especializado para planetas tipo Aquifer con superficie acuática realista.
 * Inspirado en el ejemplo three.js webgpu ocean pero adaptado para superficies esféricas.
 */

import * as THREE from 'three';
import { getPlanetBaseColor } from './PlanetColorBase';
import { PlanetLayerSystem } from '../3DComponents/PlanetLayerSystem';

export interface AquiferWaterParams {
  // Configuración de olas principales
  waveHeight?: number;
  waveFrequency?: number;
  waveSpeed?: number;
  
  // Configuración de olas secundarias
  secondaryWaveHeight?: number;
  secondaryWaveFrequency?: number;
  secondaryWaveSpeed?: number;
  
  // Configuración de distorsión
  distortionScale?: number;
  distortionSpeed?: number;
  
  // Colores
  waterColor?: THREE.Color | number[];
  deepWaterColor?: THREE.Color | number[];
  foamColor?: THREE.Color | number[];
  
  // Efectos visuales
  specularIntensity?: number;
  reflectivity?: number;
  transparency?: number;
  roughness?: number;
  metalness?: number;
  
  // Configuración de normales
  normalScale?: number;
  normalSpeed?: number;
}

export class AquiferWaterEffect {
  private layerMesh?: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: AquiferWaterParams;
  private layerSystem: PlanetLayerSystem;

  // Vertex shader con deformación de olas
  private static readonly vertexShader = `
    uniform float time;
    uniform float waveHeight;
    uniform float waveFrequency;
    uniform float waveSpeed;
    uniform float secondaryWaveHeight;
    uniform float secondaryWaveFrequency;
    uniform float secondaryWaveSpeed;
    uniform float distortionScale;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vWaveHeight;
    varying vec3 vViewPosition;
    
    // Función de ruido Simplex 3D
    vec3 mod289(vec3 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 mod289(vec4 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 permute(vec4 x) {
      return mod289(((x*34.0)+1.0)*x);
    }
    
    vec4 taylorInvSqrt(vec4 r) {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      
      i = mod289(i);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    // Función de olas Gerstner
    vec3 gerstnerWave(vec3 position, float amplitude, float frequency, vec2 direction, float speed, float steepness) {
      float k = 2.0 * 3.14159 * frequency;
      float c = sqrt(9.8 / k);
      vec2 d = normalize(direction);
      float f = k * (dot(d, position.xz) - c * time * speed);
      float a = steepness / k;
      
      return vec3(
        d.x * a * sin(f),
        a * cos(f),
        d.y * a * sin(f)
      ) * amplitude;
    }
    
    void main() {
      vPosition = position;
      vUv = uv;
      
      // Posición en la esfera
      vec3 spherePos = normalize(position);
      vec3 newPosition = position;
      
      // Aplicar múltiples olas Gerstner para un efecto más realista
      vec3 wave1 = gerstnerWave(position, waveHeight, waveFrequency, vec2(1.0, 0.0), waveSpeed, 0.3);
      vec3 wave2 = gerstnerWave(position, waveHeight * 0.7, waveFrequency * 1.4, vec2(0.6, 0.8), waveSpeed * 1.1, 0.25);
      vec3 wave3 = gerstnerWave(position, secondaryWaveHeight, secondaryWaveFrequency, vec2(-0.4, 0.9), secondaryWaveSpeed, 0.2);
      vec3 wave4 = gerstnerWave(position, secondaryWaveHeight * 0.8, secondaryWaveFrequency * 1.6, vec2(0.9, -0.4), secondaryWaveSpeed * 1.3, 0.15);
      
      // Combinar las olas
      vec3 totalWave = wave1 + wave2 + wave3 + wave4;
      
      // Aplicar ruido para micro-detalles - MÁS VISIBLE
      float noise = snoise(position * distortionScale + vec3(time * 0.8));
      totalWave += spherePos * noise * waveHeight * 0.3;
      
      // Aplicar la deformación en la dirección normal de la esfera - MÁS PRONUNCIADA
      newPosition += normalize(position) * totalWave.y * 2.0;
      
      // Desplazamiento tangencial más visible
      vec3 tangent = normalize(cross(spherePos, vec3(0.0, 1.0, 0.0)));
      vec3 bitangent = normalize(cross(spherePos, tangent));
      newPosition += tangent * totalWave.x * 0.6 + bitangent * totalWave.z * 0.6;
      
      vWaveHeight = totalWave.y;
      
      // Calcular la nueva normal (aproximada)
      vec3 modifiedNormal = normalize(normalMatrix * (normal + totalWave * 0.2));
      vNormal = modifiedNormal;
      
      vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      vec4 worldPosition = modelMatrix * vec4(newPosition, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  // Fragment shader con efectos de agua realistas (con reflejo especular)
  private static readonly fragmentShader = `
    uniform float time;
    uniform vec3 waterColor;
    uniform vec3 deepWaterColor;
    uniform vec3 foamColor;
    uniform float specularIntensity;
    uniform float reflectivity;
    uniform float transparency;
    uniform float roughness;
    uniform float metalness;
    uniform float normalScale;
    uniform float distortionSpeed;
    
    // Uniformes de luz para reflejo especular
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float ambientStrength;
    uniform float lightIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vWaveHeight;
    varying vec3 vViewPosition;
    
    // Función de ruido
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    
    // FBM para patrones de agua
    float fbm(vec2 p, int octaves) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for(int i = 0; i < 8; i++) {
        if(i >= octaves) break;
        value += amplitude * noise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    // Cálculo de Fresnel
    float fresnel(vec3 viewDirection, vec3 normal, float power) {
      return pow(1.0 - abs(dot(viewDirection, normal)), power);
    }
    
    void main() {
      vec3 viewDirection = normalize(vViewPosition);
      vec3 normal = normalize(vNormal);
      
      // Perturbar la normal con ruido para simular pequeñas ondulaciones
      vec2 noiseCoord = vUv * 50.0 + vec2(time * distortionSpeed);
      float noiseValue = fbm(noiseCoord, 4);
      vec3 perturbedNormal = normalize(normal + vec3(
        noise(noiseCoord + vec2(0.0, 10.0)) - 0.5,
        0.0,
        noise(noiseCoord + vec2(10.0, 0.0)) - 0.5
      ) * normalScale);
      
      // Color base del agua con gradiente por profundidad
      float depth = 1.0 - abs(vWaveHeight) * 2.0;
      vec3 baseColor = mix(deepWaterColor, waterColor, depth);
      
      // Espuma en las crestas de las olas
      float foamFactor = smoothstep(0.2, 0.4, vWaveHeight);
      float foamNoise = fbm(vUv * 100.0 + vec2(time * 2.0), 3);
      foamFactor *= foamNoise;
      baseColor = mix(baseColor, foamColor, foamFactor * 0.8);
      
      // Efecto Fresnel para reflejos
      float fresnelFactor = fresnel(viewDirection, perturbedNormal, 2.0);
      
      // Reflejos del cielo
      vec3 skyColor = vec3(0.5, 0.7, 1.0);
      vec3 reflectionColor = mix(skyColor * 0.5, skyColor, fresnelFactor);
      
      // Cáusticas submarinas
      vec2 causticCoord = vWorldPosition.xz * 0.5;
      float caustic1 = noise(causticCoord + vec2(time * 0.5, time * 0.3)) * 0.5 + 0.5;
      float caustic2 = noise(causticCoord * 1.5 - vec2(time * 0.3, time * 0.5)) * 0.5 + 0.5;
      float caustics = min(caustic1, caustic2);
      caustics = pow(caustics, 3.0) * 0.3;
      
      // Calcular reflejo especular (luz blanca desde la fuente de luz)
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      // Vector de reflexión para especular - MÁS VISIBLE
      vec3 halfVector = normalize(lightDir + viewDirection);
      float specular = pow(max(dot(perturbedNormal, halfVector), 0.0), 32.0) * specularIntensity;
      
      // Intensidad basada en la posición de la luz
      float lightAttenuation = max(0.0, dot(perturbedNormal, lightDir));
      
      // Color final (SIN iluminación propia - eso lo maneja el PlanetLayerSystem)
      vec3 finalColor = baseColor;
      finalColor = mix(finalColor, reflectionColor, fresnelFactor * reflectivity * 0.2); // Reducido
      finalColor += caustics * waterColor * 0.1; // Muy sutil
      
      // AÑADIR REFLEJO ESPECULAR BLANCO - MÁS INTENSO Y VISIBLE
      float specularStrength = specular * lightAttenuation * lightIntensity * 3.0; // 3x más fuerte
      finalColor += vec3(1.0, 1.0, 1.0) * specularStrength;
      
      // Transparencia MUCHO mayor para no interferir con la iluminación base
      float alpha = mix(0.2, 0.4, fresnelFactor) * (1.0 - transparency * 0.5);
      alpha *= 0.5; // Hacer aún más transparente
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  constructor(layerSystem: PlanetLayerSystem, params: AquiferWaterParams = {}) {
    this.layerSystem = layerSystem;
    this.params = {
      waveHeight: params.waveHeight || 0.08,
      waveFrequency: params.waveFrequency || 3.0,
      waveSpeed: params.waveSpeed || 2.0,
      secondaryWaveHeight: params.secondaryWaveHeight || 0.05,
      secondaryWaveFrequency: params.secondaryWaveFrequency || 5.0,
      secondaryWaveSpeed: params.secondaryWaveSpeed || 2.5,
      distortionScale: params.distortionScale || 3.0,
      distortionSpeed: params.distortionSpeed || 0.5,
      waterColor: params.waterColor || new THREE.Color(0x2E8B8B),
      deepWaterColor: params.deepWaterColor || new THREE.Color(0x003366),
      foamColor: params.foamColor || new THREE.Color(0xffffff),
      specularIntensity: params.specularIntensity || 4.0,
      reflectivity: params.reflectivity || 0.5,
      transparency: params.transparency || 0.3,
      roughness: params.roughness || 0.1,
      metalness: params.metalness || 0.8,
      normalScale: params.normalScale || 0.05,
      normalSpeed: params.normalSpeed || 0.5,
      ...params
    };

    // Crear material local y luego añadir al sistema de capas
    this.material = this.createMaterial();

    // Añadir capa al sistema, pasando referencia a este objeto
    this.layerMesh = this.layerSystem.addEffectLayer(
      "aquiferWater",
      this.material,
      this.layerSystem.getNextScaleFactor(),
      this // Pasar referencia como MetallicSurfaceLayer
    );
    
    // CRÍTICO: Sincronizar con los uniformes de luz del PlanetLayerSystem
    this.syncWithLayerSystemLighting();
  }

  private createMaterial(): THREE.ShaderMaterial {
    const waterColor = this.params.waterColor instanceof THREE.Color ? 
      this.params.waterColor : new THREE.Color(this.params.waterColor as any);
    const deepWaterColor = this.params.deepWaterColor instanceof THREE.Color ? 
      this.params.deepWaterColor : new THREE.Color(this.params.deepWaterColor as any);
    const foamColor = this.params.foamColor instanceof THREE.Color ? 
      this.params.foamColor : new THREE.Color(this.params.foamColor as any);

    return new THREE.ShaderMaterial({
      vertexShader: AquiferWaterEffect.vertexShader,
      fragmentShader: AquiferWaterEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        
        // Uniformes de olas
        waveHeight: { value: this.params.waveHeight },
        waveFrequency: { value: this.params.waveFrequency },
        waveSpeed: { value: this.params.waveSpeed },
        secondaryWaveHeight: { value: this.params.secondaryWaveHeight },
        secondaryWaveFrequency: { value: this.params.secondaryWaveFrequency },
        secondaryWaveSpeed: { value: this.params.secondaryWaveSpeed },
        
        // Uniformes de distorsión
        distortionScale: { value: this.params.distortionScale },
        distortionSpeed: { value: this.params.distortionSpeed },
        
        // Colores
        waterColor: { value: waterColor },
        deepWaterColor: { value: deepWaterColor },
        foamColor: { value: foamColor },
        
        // Efectos visuales
        specularIntensity: { value: this.params.specularIntensity },
        reflectivity: { value: this.params.reflectivity },
        transparency: { value: this.params.transparency },
        roughness: { value: this.params.roughness },
        metalness: { value: this.params.metalness },
        normalScale: { value: this.params.normalScale },
        
        // Uniformes de luz (se sincronizarán con PlanetLayerSystem)
        lightDirection: { value: new THREE.Vector3(0, 0, 0) },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) },
        ambientStrength: { value: 0.15 },
        lightIntensity: { value: 0.85 }
      },
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false, // Evitar interferencia con el planeta base
      depthTest: true,
      blending: THREE.NormalBlending,
      opacity: 0.6 // Hacer el material menos opaco
    });
  }

  // Como MetallicSurfaceLayer, el apply ya no es necesario
  // porque el sistema de capas maneja todo automáticamente

  update(deltaTime: number): void {
    if (this.material.uniforms.time) {
      this.material.uniforms.time.value += deltaTime;
    }
  }

  updateParams(newParams: Partial<AquiferWaterParams>): void {
    this.params = { ...this.params, ...newParams };
    
    // Actualizar uniformes
    Object.keys(newParams).forEach(key => {
      const value = newParams[key as keyof AquiferWaterParams];
      if (value !== undefined && this.material.uniforms[key]) {
        if (value instanceof THREE.Color || Array.isArray(value)) {
          const color = value instanceof THREE.Color ? value : new THREE.Color(value as any);
          this.material.uniforms[key].value = color;
        } else {
          this.material.uniforms[key].value = value;
        }
      }
    });
  }

  /**
   * Sincroniza con los uniformes de luz del PlanetLayerSystem
   */
  private syncWithLayerSystemLighting(): void {
    // El PlanetLayerSystem automáticamente propaga los uniformes de luz a través de updateLightPosition/Direction
    // Pero para asegurar sincronización inicial, usamos un setTimeout para ejecutar después del setup
    setTimeout(() => {
      console.log("🌊 AquiferWater synchronized with PlanetLayerSystem lighting");
    }, 100);
  }

  /**
   * Recibe actualizaciones de luz desde Three.js DirectionalLight
   */
  updateFromThreeLight(light: THREE.DirectionalLight | THREE.Vector3, target?: THREE.Vector3): void {
    if (light instanceof THREE.Vector3) {
      // Si es un Vector3, es la posición de la luz
      console.log("🌊 AquiferWater updateFromThreeLight called with position:", light, "target:", target);
      this.material.uniforms.lightPosition.value.copy(light);
      if (target) {
        const direction = target.clone().sub(light).normalize();
        this.material.uniforms.lightDirection.value.copy(direction);
      }
    } else {
      // Si es DirectionalLight
      console.log("🌊 AquiferWater updateFromThreeLight called with DirectionalLight:", light.position, "target:", light.target.position);
      this.material.uniforms.lightPosition.value.copy(light.position);
      const direction = light.target.position.clone().sub(light.position).normalize();
      this.material.uniforms.lightDirection.value.copy(direction);
    }
  }

  getObject3D(): THREE.Mesh | undefined {
    return this.layerMesh;
  }

  dispose(): void {
    // La limpieza se maneja en PlanetLayerSystem
  }
}

// Función para crear desde datos de Python
export function createAquiferWaterFromPythonData(layerSystem: PlanetLayerSystem, pythonData: any, globalSeed?: number): AquiferWaterEffect {
  // Para planetas aquifer, usar el color base del planet_info directamente
  const surface = pythonData.surface || {};
  const planetInfo = pythonData.planet_info || {};
  const baseColor = planetInfo.base_color ? 
    (typeof planetInfo.base_color === 'string' ? 
      new THREE.Color(planetInfo.base_color) : 
      new THREE.Color().fromArray(planetInfo.base_color)) :
    new THREE.Color(0x4A90E2); // Color azul por defecto para agua
  
  // Generar colores de agua basados en el color base
  const hsl = { h: 0, s: 0, l: 0 };
  baseColor.getHSL(hsl);
  
  // Ajustar para aspecto acuático
  const waterColor = new THREE.Color().setHSL(
    hsl.h,
    Math.min(1, hsl.s * 1.2), // Más saturado
    Math.min(1, hsl.l * 0.8)  // Ligeramente más oscuro
  );
  
  const deepWaterColor = new THREE.Color().setHSL(
    hsl.h,
    Math.min(1, hsl.s * 1.3),
    Math.max(0, hsl.l * 0.4) // Mucho más oscuro para profundidad
  );
  
  // Parámetros procedimentales basados en seeds - AUMENTADOS para mayor visibilidad
  let waveHeight = 0.08;
  let waveFrequency = 3.0;
  let waveSpeed = 2.0;
  let distortionScale = 5.0;
  
  if (pythonData.seeds?.shape_seed) {
    const seed = pythonData.seeds.shape_seed;
    const rng = (seed: number) => {
      let s = seed;
      return () => {
        s = (s * 1664525 + 1013904223) % 4294967296;
        return s / 4294967296;
      };
    };
    
    const random = rng(seed);
    waveHeight = 0.06 + random() * 0.08; // 0.06 - 0.14 (4x más grandes)
    waveFrequency = 2.0 + random() * 3.0; // 2.0 - 5.0 (más lentas)
    waveSpeed = 1.5 + random() * 2.0; // 1.5 - 3.5 (más rápidas)
    distortionScale = 3.0 + random() * 4.0; // 3.0 - 7.0 (más distorsión)
  }
  
  const params: AquiferWaterParams = {
    waveHeight,
    waveFrequency,
    waveSpeed,
    secondaryWaveHeight: waveHeight * 0.8,
    secondaryWaveFrequency: waveFrequency * 1.2,
    secondaryWaveSpeed: waveSpeed * 1.2,
    distortionScale,
    distortionSpeed: 0.5,
    waterColor,
    deepWaterColor,
    foamColor: new THREE.Color(0.9, 0.95, 1.0),
    specularIntensity: 5.0, // Aumentado para reflejo más visible
    reflectivity: 0.3, // Mucho menos reflectivo
    transparency: 0.8, // MUY transparente
    roughness: 0.05,
    metalness: 0.1, // Mucho menos metálico
    normalScale: 0.02, // Normales muy sutiles
    normalSpeed: 0.6
  };
  
  return new AquiferWaterEffect(layerSystem, params);
}