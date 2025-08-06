/**
 * Metallic Surface Effect - Efecto de superficie metálica PBR
 * 
 * Extraído de PlanetEffectsLibrary.tsx y mejorado para ser completamente modular.
 * Crea superficies metálicas realistas con fragmentación procedural.
 */

import * as THREE from 'three';

export interface MetallicSurfaceParams {
  color?: THREE.Color | number[];
  roughness?: number;
  metalness?: number;
  fragmentationIntensity?: number;
  noiseScale?: number;
  noiseIntensity?: number;
  edgeFragmentation?: number;
  circularWaves?: number;
  fogPatches?: number;
}

export class MetallicSurfaceEffect {
  private material: THREE.ShaderMaterial;
  private params: MetallicSurfaceParams;

  // Shader PBR Metálico Procedural mejorado
  private static readonly vertexShader = `
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
  `;

  private static readonly fragmentShader = `
    uniform float time;
    uniform vec3 baseColor;
    uniform float roughness;
    uniform float metalness;
    uniform float fragmentationIntensity;
    uniform float noiseScale;
    uniform float noiseIntensity;
    uniform float edgeFragmentation;
    uniform float circularWaves;
    uniform float fogPatches;
    
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
          vec2 point = vec2(hash(vec3(id + neighbor, 0.0)), hash(vec3(id + neighbor, 1.0)));
          float dist = length(f - point);
          d = min(d, dist);
        }
      }
      
      return pow(1.0 - d, sharpness);
    }
    
    // PBR mejorado con más realismo
    vec3 calculatePBR(vec3 albedo, float metallic, float rough, vec3 normal, vec3 viewDir) {
      vec3 lightDir = normalize(vec3(1.0, 1.0, 0.5));
      vec3 halfwayDir = normalize(lightDir + viewDir);
      
      float NdotL = max(dot(normal, lightDir), 0.0);
      float NdotV = max(dot(normal, viewDir), 0.0);
      float NdotH = max(dot(normal, halfwayDir), 0.0);
      float VdotH = max(dot(viewDir, halfwayDir), 0.0);
      
      // Difuso Lambert
      vec3 diffuse = albedo * (1.0 - metallic) * NdotL / 3.14159;
      
      // Especular Cook-Torrance simplificado
      float alpha = rough * rough;
      float alpha2 = alpha * alpha;
      
      // Distribution (GGX)
      float denom = NdotH * NdotH * (alpha2 - 1.0) + 1.0;
      float D = alpha2 / (3.14159 * denom * denom);
      
      // Geometry (Schlick-GGX simplificado)
      float k = (rough + 1.0) * (rough + 1.0) / 8.0;
      float G1L = NdotL / (NdotL * (1.0 - k) + k);
      float G1V = NdotV / (NdotV * (1.0 - k) + k);
      float G = G1L * G1V;
      
      // Fresnel (Schlick)
      vec3 F0 = mix(vec3(0.04), albedo, metallic);
      vec3 F = F0 + (1.0 - F0) * pow(1.0 - VdotH, 5.0);
      
      // Especular final
      vec3 specular = (D * G * F) / max(4.0 * NdotL * NdotV, 0.001);
      
      // Fresnel para bordes metálicos
      float fresnel = pow(1.0 - NdotV, 2.0);
      vec3 fresnelColor = F0 * fresnel * metallic;
      
      return diffuse + specular + fresnelColor * 0.5;
    }
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // Base metálica con variaciones
      vec3 color = baseColor;
      
      // Añadir ruido para variaciones sutiles de superficie
      float surfaceNoise = noise3D(vPosition * noiseScale);
      color = mix(color, color * 0.7, surfaceNoise * noiseIntensity);
      
      // Factor de borde para efectos en los bordes
      float edgeFactor = 1.0 - abs(dot(normal, viewDir));
      
      // Fragmentación angular en los bordes
      if(edgeFactor > 0.6) {
        float fragmentation = angularCracks(vUv, 5.0 + fragmentationIntensity * 10.0, 2.0);
        color = mix(color, color * 0.3, fragmentation * edgeFactor * edgeFragmentation);
        
        // Añadir grietas más pronunciadas
        float cracks = angularCracks(vUv * 2.0, 8.0, 4.0);
        color = mix(color, color * 0.2, cracks * edgeFactor * 0.5 * edgeFragmentation);
      }
      
      // Ondas circulares sutiles en el interior
      if(circularWaves > 0.0) {
        float radialWaves = sin(length(vUv - 0.5) * 20.0 + time * 0.5) * 0.5 + 0.5;
        color = mix(color, color * 1.1, radialWaves * 0.1 * (1.0 - edgeFactor) * circularWaves);
      }
      
      // Manchas de neblina grisácea
      if(fogPatches > 0.0) {
        float fogNoise = fractal(vPosition * 3.0 + vec3(time * 0.1), 3);
        float fogMask = smoothstep(0.4, 0.6, fogNoise);
        color = mix(color, color * 1.2, fogMask * 0.2 * fogPatches);
      }
      
      // Calcular iluminación PBR
      vec3 finalColor = calculatePBR(color, metalness, roughness, normal, viewDir);
      
      // Añadir un toque de color oscuro para profundidad
      finalColor = mix(finalColor, finalColor * 0.5, pow(surfaceNoise, 2.0) * 0.3);
      
      // Efecto de terminador (transición día/noche)
      vec3 lightDir = normalize(vec3(1.0, 1.0, 0.5));
      float terminator = smoothstep(-0.2, 0.2, dot(normal, lightDir));
      finalColor *= (0.2 + 0.8 * terminator);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  constructor(params: MetallicSurfaceParams = {}) {
    this.params = {
      color: params.color || new THREE.Color(0x707070),
      roughness: params.roughness || 0.7,
      metalness: params.metalness || 0.9,
      fragmentationIntensity: params.fragmentationIntensity || 0.5,
      noiseScale: params.noiseScale || 8.0,
      noiseIntensity: params.noiseIntensity || 0.3,
      edgeFragmentation: params.edgeFragmentation || 1.0,
      circularWaves: params.circularWaves || 1.0,
      fogPatches: params.fogPatches || 1.0
    };

    this.material = this.createMaterial();
  }

  /**
   * Crea el material shader
   */
  private createMaterial(): THREE.ShaderMaterial {
    const color = this.params.color instanceof THREE.Color ? 
      this.params.color : new THREE.Color(this.params.color as any);

    return new THREE.ShaderMaterial({
      vertexShader: MetallicSurfaceEffect.vertexShader,
      fragmentShader: MetallicSurfaceEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        baseColor: { value: color },
        roughness: { value: this.params.roughness },
        metalness: { value: this.params.metalness },
        fragmentationIntensity: { value: this.params.fragmentationIntensity },
        noiseScale: { value: this.params.noiseScale },
        noiseIntensity: { value: this.params.noiseIntensity },
        edgeFragmentation: { value: this.params.edgeFragmentation },
        circularWaves: { value: this.params.circularWaves },
        fogPatches: { value: this.params.fogPatches }
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
  updateParams(newParams: Partial<MetallicSurfaceParams>): void {
    this.params = { ...this.params, ...newParams };

    // Actualizar uniforms correspondientes
    if (newParams.color) {
      const color = newParams.color instanceof THREE.Color ? 
        newParams.color : new THREE.Color(newParams.color as any);
      this.material.uniforms.baseColor.value = color;
    }
    if (newParams.roughness !== undefined) {
      this.material.uniforms.roughness.value = newParams.roughness;
    }
    if (newParams.metalness !== undefined) {
      this.material.uniforms.metalness.value = newParams.metalness;
    }
    if (newParams.fragmentationIntensity !== undefined) {
      this.material.uniforms.fragmentationIntensity.value = newParams.fragmentationIntensity;
    }
    if (newParams.noiseScale !== undefined) {
      this.material.uniforms.noiseScale.value = newParams.noiseScale;
    }
    if (newParams.noiseIntensity !== undefined) {
      this.material.uniforms.noiseIntensity.value = newParams.noiseIntensity;
    }
    if (newParams.edgeFragmentation !== undefined) {
      this.material.uniforms.edgeFragmentation.value = newParams.edgeFragmentation;
    }
    if (newParams.circularWaves !== undefined) {
      this.material.uniforms.circularWaves.value = newParams.circularWaves;
    }
    if (newParams.fogPatches !== undefined) {
      this.material.uniforms.fogPatches.value = newParams.fogPatches;
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