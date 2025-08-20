/**
 * Planet Layer System - Sistema de capas para efectos de planetas
 *
 * Este sistema permite aplicar múltiples efectos visuales a un planeta
 * sin que se sobrescriban entre sí, manteniendo la iluminación correcta
 * y la parte trasera oscura del planeta.
 *
 * Arquitectura:
 * - Capa Base: Material con iluminación día/noche
 * - Capas de Efectos: Meshes adicionales con transparencia que se superponen
 */

import * as THREE from "three";

export interface LayerEffect {
  name: string;
  mesh?: THREE.Mesh;
  material: THREE.ShaderMaterial;
  layerObject?: any; // Referencia al objeto de capa (CloudBandsLayer, etc.)
  update?: (deltaTime: number, planetRotation?: number) => void;
  dispose?: () => void;
}

export class PlanetLayerSystem {
  private baseMesh: THREE.Mesh;
  private baseMaterial: THREE.ShaderMaterial;
  private effectLayers: LayerEffect[] = [];
  private scene?: THREE.Scene;
  private planetRadius: number;

  // Shader base con iluminación correcta mejorado
  private static readonly baseVertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    varying vec2 vUv;
    
    void main() {
      vPosition = position;
      vNormal = normalMatrix * normal; // Transformar normal al espacio de vista
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz); // Normal en espacio mundo
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  private static readonly baseFragmentShader = `
    uniform vec3 baseColor;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float ambientStrength;
    uniform float lightIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    varying vec2 vUv;
    
    void main() {
      vec3 normal = normalize(vWorldNormal);
      
      // Usar posición de luz si está disponible, sino usar dirección
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
      }
      
      // Cálculo de iluminación Lambertiana mejorado
      float dotNL = dot(normal, lightDir);
      
      // Suavizar la transición entre día y noche con mejor gradiente
      float dayNight = smoothstep(-0.3, 0.1, dotNL);
      
      // Añadir un poco de retroiluminación (rim lighting) para evitar oscuridad total
      float rimLight = 1.0 - abs(dotNL);
      rimLight = pow(rimLight, 3.0) * 0.1;
      
      // Color base con iluminación mejorada
      vec3 finalColor = baseColor;
      
      // Aplicar iluminación con intensidad variable
      float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
      finalColor *= totalLight;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  constructor(baseMesh: THREE.Mesh, baseColor: THREE.Color | number[] = new THREE.Color(0xffa500)) {
    this.baseMesh = baseMesh;

    // Obtener el radio del planeta desde la geometría
    const geometry = baseMesh.geometry as THREE.SphereGeometry;
    this.planetRadius = geometry.parameters.radius || 1;

    // Crear material base con iluminación correcta
    const color = baseColor instanceof THREE.Color ? baseColor : new THREE.Color(baseColor as any);

    this.baseMaterial = new THREE.ShaderMaterial({
      vertexShader: PlanetLayerSystem.baseVertexShader,
      fragmentShader: PlanetLayerSystem.baseFragmentShader,
      uniforms: {
        baseColor: { value: color },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) }, // Posición de luz en espacio mundo
        ambientStrength: { value: 0.15 }, // Más oscuro, igual que otros planetas
        lightIntensity: { value: 0.85 }, // Intensidad de la luz direccional
      },
      side: THREE.FrontSide,
    });

    // Aplicar material base
    this.baseMesh.material = this.baseMaterial;
  }

  /**
   * Añade una capa de efecto al planeta
   * Crea un mesh separado ligeramente más grande para evitar z-fighting
   */
  addEffectLayer(name: string, material: THREE.ShaderMaterial, scaleFactor: number = 1.001, layerObject?: any): THREE.Mesh {
    // Crear una geometría ligeramente más grande con más segmentos para eliminar líneas meridanas
    const layerGeometry = new THREE.SphereGeometry(this.planetRadius * scaleFactor, 256, 256);

    // Crear mesh para la capa
    const layerMesh = new THREE.Mesh(layerGeometry, material);

    // Copiar posición y rotación del planeta base
    layerMesh.position.copy(this.baseMesh.position);
    layerMesh.rotation.copy(this.baseMesh.rotation);

    // Guardar la capa
    this.effectLayers.push({
      name,
      mesh: layerMesh,
      material,
      layerObject,
    });

    // Si ya estamos en una escena, añadir el mesh
    if (this.scene) {
      this.scene.add(layerMesh);
    } else {
    }

    return layerMesh;
  }

  /**
   * Crea un material para CloudBands que funciona como capa
   */
  createCloudBandsLayerMaterial(params: any): THREE.ShaderMaterial {
    const vertexShader = `
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normal;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      uniform float seed;
      uniform vec3 bandColor;
      uniform float numBands;
      uniform float rotationAngle;
      uniform float bandPositions[20];
      uniform float bandWidths[20];
      uniform float animationSpeed;
      uniform float turbulence;
      uniform float noiseScale;
      uniform vec3 lightDirection;
      uniform float opacity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      
      float hash(float n) {
        return fract(sin(n + seed) * 43758.5453123);
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
      
      float fbm(vec3 p) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;
        
        for(int i = 0; i < 4; i++) {
          value += amplitude * noise(p * frequency);
          frequency *= 2.0;
          amplitude *= 0.5;
        }
        
        return value;
      }
      
      // Función para crear cortes/gaps aleatorios en las bandas
      float createBandGaps(vec3 pos, float bandIndex) {
        // Usar ángulo alrededor del planeta para determinar posición
        float angle = atan(pos.z, pos.x);
        
        // Crear múltiples gaps por banda basados en la seed
        float gapPattern = 1.0;
        
        // 3-5 gaps por banda
        for(float g = 0.0; g < 4.0; g++) {
          float gapSeed = hash(bandIndex * 100.0 + g * 17.0);
          float gapPosition = gapSeed * 6.28318; // Posición aleatoria alrededor del planeta
          float gapWidth = 0.3 + gapSeed * 0.4; // Ancho del gap entre 0.3 y 0.7 radianes
          
          // Crear transición suave para el gap
          float distToGap = abs(angle - gapPosition);
          // Manejar el wrap-around del ángulo
          distToGap = min(distToGap, 6.28318 - distToGap);
          
          if(distToGap < gapWidth) {
            float gapIntensity = smoothstep(0.0, gapWidth, distToGap);
            gapPattern *= gapIntensity;
          }
        }
        
        return gapPattern;
      }
      
      float createCloudBands(vec3 pos) {
        float bands = 0.0;
        
        float currentY = pos.y;
        float currentX = pos.x;
        
        float cosAngle = cos(rotationAngle);
        float sinAngle = sin(rotationAngle);
        float rotatedY = sinAngle * currentX + cosAngle * currentY;
        
        for(int i = 0; i < 20; i++) {
          if(float(i) >= numBands) break;
          
          float bandPosY = bandPositions[i];
          float bandWidth = bandWidths[i];
          
          float distToBand = abs(rotatedY - bandPosY);
          if(distToBand < bandWidth / 2.0) {
            float bandIntensity = 1.0 - (distToBand / (bandWidth / 2.0));
            
            float turbulenceNoise = fbm(pos * noiseScale + vec3(time * animationSpeed * 0.1));
            bandIntensity *= (0.8 + 0.4 * turbulenceNoise * turbulence);
            
            // Aplicar gaps/cortes aleatorios a la banda
            float gapMask = createBandGaps(pos, float(i));
            bandIntensity *= gapMask;
            
            bands += bandIntensity * 0.8;
          }
        }
        
        return clamp(bands, 0.0, 1.0);
      }
      
      void main() {
        vec3 pos = normalize(vPosition);
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(lightDirection);
        
        // Calcular si estamos en la parte iluminada
        float dotNL = dot(normal, lightDir);
        float visibility = smoothstep(-0.2, 0.2, dotNL);
        
        // Solo mostrar bandas en la parte iluminada
        float bands = createCloudBands(pos);
        
        // Hacer las bandas visibles en todo el planeta
        // Solo ajustar ligeramente el brillo basado en la iluminación
        float lightIntensity = max(0.3, dotNL); // Mantener mínimo 30% de visibilidad
        
        // Color de las bandas con transparencia
        vec3 color = bandColor * (0.5 + 0.5 * lightIntensity); // Ajustar brillo del color
        float alpha = bands * opacity; // No multiplicar por lightIntensity
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        seed: { value: params.seed || Math.random() * 1000 },
        bandColor: { value: params.bandColor || new THREE.Color(0xff8c00) },
        numBands: { value: params.numBands || 8 },
        rotationAngle: { value: params.rotationAngle || 0 },
        bandPositions: { value: params.bandPositions || new Array(20).fill(0) },
        bandWidths: { value: params.bandWidths || new Array(20).fill(0.1) },
        animationSpeed: { value: params.animationSpeed || 1.0 },
        turbulence: { value: params.turbulence || 0.5 },
        noiseScale: { value: params.noiseScale || 3.0 },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        opacity: { value: params.opacity || 0.4 },
      },
      transparent: true,
      blending: THREE.NormalBlending, // Normal blending porque controlamos alpha
      side: THREE.FrontSide,
      depthWrite: false,
    });
  }

  /**
   * Crea un material para CloudGyros que funciona como capa
   */
  createCloudGyrosLayerMaterial(params: any): THREE.ShaderMaterial {
    const vertexShader = `
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normal;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      uniform vec3 stormColor;
      uniform float stormIntensity;
      uniform float spiralSpeed;
      uniform float animationSpeed;
      uniform vec2 stormCenters[5];
      uniform int numStorms;
      uniform vec3 lightDirection;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      
      float createGyroSpirals(vec3 pos) {
        float storms = 0.0;
        
        for(int i = 0; i < 5; i++) {
          if(i >= numStorms) break;
          
          vec2 stormCenter = stormCenters[i];
          float distToStorm = distance(pos.xy, stormCenter);
          
          if(distToStorm < 0.4) {
            float angle = atan(pos.y - stormCenter.y, pos.x - stormCenter.x);
            float spiral = sin(angle * 8.0 + distToStorm * 20.0 - time * animationSpeed * spiralSpeed);
            
            float stormIntensityValue = (1.0 - distToStorm / 0.4) * 0.9;
            stormIntensityValue *= (0.3 + 0.7 * spiral);
            stormIntensityValue *= stormIntensity;
            
            storms += stormIntensityValue;
          }
        }
        
        return clamp(storms, 0.0, 1.0);
      }
      
      void main() {
        vec3 pos = normalize(vPosition);
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(lightDirection);
        
        // Calcular si estamos en la parte iluminada
        float dotNL = dot(normal, lightDir);
        
        // Solo mostrar tormentas en la parte iluminada
        float storms = createGyroSpirals(pos);
        
        // CRÍTICO: hacer las tormentas completamente transparentes en la parte oscura
        float lightIntensity = max(0.0, dotNL);
        lightIntensity = pow(lightIntensity, 2.0); // Caída más agresiva hacia la oscuridad
        
        // Color de las tormentas con transparencia
        vec3 color = stormColor;
        float alpha = storms * 0.6 * lightIntensity; // Transparencia basada en iluminación
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

    // Convertir storm centers a array plano
    const centersArray = new Array(10).fill(0);
    if (params.stormCenters) {
      params.stormCenters.forEach((center: any, i: number) => {
        if (i < 5) {
          centersArray[i * 2] = center.x;
          centersArray[i * 2 + 1] = center.y;
        }
      });
    }

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        stormColor: { value: params.stormColor || new THREE.Color(0x8b0000) },
        stormIntensity: { value: params.stormIntensity || 0.8 },
        spiralSpeed: { value: params.spiralSpeed || 2.0 },
        animationSpeed: { value: params.animationSpeed || 1.0 },
        stormCenters: { value: centersArray },
        numStorms: { value: params.stormCenters ? Math.min(params.stormCenters.length, 5) : 3 },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      side: THREE.FrontSide,
      depthWrite: false,
    });
  }

  /**
   * Crea un material para MetallicSurface que funciona como capa
   */
  createMetallicSurfaceLayerMaterial(params: any): THREE.ShaderMaterial {
    const vertexShader = `
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normalMatrix * normal; // Transformar normal al espacio de vista
        vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz); // Normal en espacio mundo
        vUv = uv;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 metalColor;
      uniform float metalness;
      uniform float roughness;
      uniform float fragmentationIntensity;
      uniform float opacity;
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      uniform float time;
      uniform float noiseScale;
      uniform float noiseIntensity;
      uniform float crystalScale;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
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
      
      // Función para crear cristales facetados con normales perturbadas
      vec3 crystallineFacets(vec2 uv, float scale, vec3 baseNormal) {
        vec2 id = floor(uv * scale);
        vec2 f = fract(uv * scale);
        
        // Hash para determinar el tipo de cristal en cada celda
        float crystalType = hash(vec3(id, 42.0));
        
        // Crear caras cristalinas angulares
        vec3 facetNormal = baseNormal;
        
        // Determinar orientación del cristal
        float angle1 = hash(vec3(id, 123.0)) * 6.28;
        float angle2 = hash(vec3(id, 456.0)) * 3.14;
        
        // Crear diferentes tipos de cristales facetados más irregulares y pequeños
        if(crystalType < 0.25) {
          // Cristal irregular tipo 1 - formas asimétricas
          float noise1 = hash(vec3(id, 789.0));
          float noise2 = hash(vec3(id, 234.0));
          float irregular1 = sin((f.x + noise1) * 8.0) * cos((f.y + noise2) * 6.0);
          
          vec3 perturbation = vec3(
            cos(angle1 + irregular1) * 0.15,
            sin(angle1 + irregular1) * 0.15,
            irregular1 * 0.1
          );
          
          facetNormal = normalize(baseNormal + perturbation);
          
        } else if(crystalType < 0.5) {
          // Cristal irregular tipo 2 - facetas múltiples
          float facet1 = sin(f.x * 12.0 + angle1) * 0.5 + 0.5;
          float facet2 = cos(f.y * 10.0 + angle2) * 0.5 + 0.5;
          float combined = facet1 * facet2;
          
          vec3 perturbation = vec3(
            (facet1 - 0.5) * 0.2,
            (facet2 - 0.5) * 0.2,
            combined * 0.15
          );
          
          facetNormal = normalize(baseNormal + perturbation);
          
        } else if(crystalType < 0.75) {
          // Cristal irregular tipo 3 - ondulaciones complejas
          float wave1 = sin((f.x + f.y) * 15.0 + angle1);
          float wave2 = cos((f.x - f.y) * 13.0 + angle2);
          float complex = wave1 * wave2 * 0.5 + 0.5;
          
          vec3 perturbation = vec3(
            wave1 * 0.12,
            wave2 * 0.12,
            complex * 0.08
          );
          
          facetNormal = normalize(baseNormal + perturbation);
          
        } else {
          // Cristal irregular tipo 4 - ruido fractal
          float dist = length(f - vec2(0.5));
          float angleNoise = atan(f.y - 0.5, f.x - 0.5) + angle1;
          float fractal = sin(angleNoise * 7.0) * cos(dist * 20.0);
          
          vec3 perturbation = vec3(
            cos(angleNoise + fractal) * 0.18,
            sin(angleNoise + fractal) * 0.18,
            fractal * 0.1
          );
          
          facetNormal = normalize(baseNormal + perturbation);
        }
        
        return facetNormal;
      }
      
      void main() {
        vec3 baseNormal = normalize(vWorldNormal);
        
        // CRISTALES FACETADOS: Perturbar la normal para crear caras cristalinas
        vec3 normal = crystallineFacets(vUv, crystalScale, baseNormal);
        
        // Usar posición de luz si está disponible, sino usar dirección (EXACTAMENTE como en README)
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
        }
        
        // Cálculo de iluminación Lambertiana mejorado (EXACTAMENTE como en README)
        float dotNL = dot(normal, lightDir);
        
        // Suavizar la transición entre día y noche con mejor gradiente (EXACTAMENTE como en README)
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Añadir un poco de retroiluminación (rim lighting) para evitar oscuridad total (EXACTAMENTE como en README)
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Base metálica con variaciones
        vec3 color = metalColor;
        
        // Añadir ruido para variaciones sutiles
        float surfaceNoise = noise3D(vPosition * noiseScale);
        color = mix(color, color * 0.7, surfaceNoise * noiseIntensity);
        
        
        // Fragmentación angular en los bordes (reducida para dar más protagonismo a la purpurina)
        float edgeFactor = 1.0 - abs(dotNL);
        float fragmentation = angularCracks(vUv, 5.0 + fragmentationIntensity * 10.0, 2.0);
        
        // Aplicar fragmentación más suave
        if(edgeFactor > 0.8) {
          color = mix(color, color * 0.5, fragmentation * edgeFactor * 0.3);
        }
        
        // Ondas circulares sutiles en el interior
        float radialWaves = sin(length(vUv - 0.5) * 20.0 + time * 0.5) * 0.5 + 0.5;
        color = mix(color, color * 1.1, radialWaves * 0.1 * (1.0 - edgeFactor));
        
        // REFLEJO METÁLICO: Calcular reflexión especular usando la iluminación correcta del README
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 halfwayDir = normalize(lightDir + viewDir);
        
        // Especular metálico con la posición correcta de la luz
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        float specularStrength = pow(NdotH, mix(4.0, 128.0, 1.0 - roughness));
        vec3 specular = mix(vec3(0.04), color, metalness) * specularStrength;
        
        // Fresnel para bordes metálicos
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
        vec3 fresnelColor = mix(vec3(0.04), color, metalness) * fresnel;
        
        // Aplicar iluminación base con intensidad variable (EXACTAMENTE como en README)
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        vec3 finalColor = color * totalLight;
        
        // Añadir reflejos metálicos SOLO en la parte iluminada
        finalColor += (specular + fresnelColor * 0.5) * dayNight;
        
        // Añadir un toque de color oscuro para profundidad
        finalColor = mix(finalColor, finalColor * 0.5, pow(surfaceNoise, 2.0) * 0.3);
        
        gl_FragColor = vec4(finalColor, opacity);
      }
    `;

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        metalColor: { value: params.color || new THREE.Color(0x808080) },
        metalness: { value: params.metalness || 0.8 },
        roughness: { value: params.roughness || 0.4 },
        fragmentationIntensity: { value: params.fragmentationIntensity || 0.5 },
        opacity: { value: params.opacity || 0.8 },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) }, // Posición de luz en espacio mundo
        ambientStrength: { value: 0.15 }, // Más oscuro, igual que otros planetas
        lightIntensity: { value: 0.85 }, // Intensidad de la luz direccional
        noiseScale: { value: params.noiseScale || 8.0 },
        noiseIntensity: { value: params.noiseIntensity || 0.3 },
        crystalScale: { value: params.crystalScale || 80.0 },
      },
      transparent: true,
      blending: THREE.NormalBlending, // Usar el mismo blending que CloudBands
      side: THREE.FrontSide,
      depthWrite: false,
    });
  }

  /**
   * Crea un material para IcyTerrain que funciona como capa
   */
  createIcyTerrainLayerMaterial(params: any): THREE.ShaderMaterial {
    const vertexShader = `
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normalMatrix * normal; // Transformar normal al espacio de vista
        vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz); // Normal en espacio mundo
        vUv = uv;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 iceColor;
      uniform float iceReflectivity;
      uniform float frostDensity;
      uniform float crackIntensity;
      uniform float opacity;
      uniform float organicShapeIntensity;
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      uniform float time;
      uniform float crystalScale;
      uniform float crystalDensity;
      uniform float crystalSharpness;
      uniform float frostPattern;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      // Hash function mejorada
      float hash(vec3 p) {
        p = fract(p * vec3(443.8975, 397.2973, 491.1871));
        p += dot(p, p.yxz + 19.19);
        return fract((p.x + p.y) * p.z);
      }
      
      // Ruido 3D suave
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
      
      // Grietas de hielo con profundidad real
      float iceCracks(vec2 p) {
        vec2 n = floor(p);
        vec2 f = fract(p);
        
        float minDist = 1.0;
        
        for(int i = -1; i <= 1; i++) {
          for(int j = -1; j <= 1; j++) {
            vec2 neighbor = vec2(float(i), float(j));
            vec2 point = neighbor + hash(vec3(n + neighbor, 0.0)) - f;
            float dist = length(point);
            minDist = min(minDist, dist);
          }
        }
        
        return minDist;
      }
      
      // Burbujas internas del hielo
      float iceBubbles(vec3 p) {
        float bubbles = 0.0;
        
        // Múltiples escalas de burbujas
        bubbles += smoothstep(0.8, 1.0, noise3D(p * 8.0)) * 0.6;
        bubbles += smoothstep(0.9, 1.0, noise3D(p * 16.0 + vec3(100.0))) * 0.3;
        bubbles += smoothstep(0.95, 1.0, noise3D(p * 32.0 + vec3(200.0))) * 0.1;
        
        return bubbles;
      }
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
        // Calcular dirección de luz
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Grietas principales
        float cracks = iceCracks(vUv * crackIntensity * 4.0);
        cracks = pow(cracks, 1.5);
        
        // MICROCRISTALES PROCEDURALES - cada planeta tiene su personalidad!
        float scale1 = crystalScale * 0.8;
        float scale2 = crystalScale * 1.6; 
        float scale3 = crystalScale * 3.2;
        
        float microCrystals1 = noise3D(vWorldPosition * scale1); // Cristales pequeños
        float microCrystals2 = noise3D(vWorldPosition * scale2); // Cristales diminutos  
        float microCrystals3 = noise3D(vWorldPosition * scale3); // Cristales microscópicos
        
        // Combinar escalas de cristales con densidad procedural
        float crystals = microCrystals1 * 0.6 + microCrystals2 * 0.3 + microCrystals3 * 0.1;
        crystals = smoothstep(0.3, 0.3 + crystalDensity, crystals);
        
        // Escarcha cristalina con patrón único por planeta
        float frost = noise3D(vWorldPosition * frostPattern);
        frost = smoothstep(0.6, 0.9, frost);
        
        // COLOR BASE: Hielo con microcristales
        vec3 baseIce = vec3(0.95, 0.97, 1.0);
        vec3 scratchColor = vec3(0.7, 0.8, 0.9);
        vec3 color = mix(scratchColor, baseIce, cracks);
        
        // Los microcristales añaden brillo y variación
        color = mix(color, vec3(0.98, 0.99, 1.0), crystals * 0.3);
        
        // La escarcha añade textura cristalina blanca
        color = mix(color, vec3(1.0, 1.0, 1.0), frost * 0.4);
        
        // Iluminación suave con transición gradual día/noche
        float smoothLight = ambientStrength + (lightIntensity * dayNight);
        
        // Añadir luz ambiental extra en la cara oculta para evitar corte seco
        float backLight = max(0.0, -dotNL) * 0.25; // Luz trasera suave
        float totalLight = smoothLight + backLight;
        
        vec3 finalColor = color * totalLight;
        
        // REFLEJOS DE MICROCRISTALES - esto es clave!
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 halfwayDir = normalize(lightDir + viewDir);
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        
        // Reflejo principal del hielo
        float mainSpecular = pow(NdotH, 60.0) * iceReflectivity;
        mainSpecular *= (0.2 + 0.8 * cracks);
        
        // REFLEJOS DE CRISTALES - múltiples puntos brillantes con sharpness procedural
        float sharpness1 = crystalSharpness * 0.6;
        float sharpness2 = crystalSharpness * 1.0;
        float crystalSpecular1 = pow(NdotH, sharpness1) * crystals * iceReflectivity * 0.8;
        float crystalSpecular2 = pow(NdotH, sharpness2) * crystals * iceReflectivity * 0.4;
        
        // Reflejos de escarcha - más suaves pero numerosos
        float frostSpecular = pow(NdotH, 40.0) * frost * iceReflectivity * 0.6;
        
        vec3 specular = vec3(mainSpecular + crystalSpecular1 + crystalSpecular2 + frostSpecular);
        finalColor += specular * dayNight;
        
        // Los cristales también crean pequeños destellos
        float sparkle = smoothstep(0.8, 1.0, crystals) * smoothstep(0.9, 1.0, NdotH);
        finalColor += vec3(1.0, 1.0, 1.0) * sparkle * 0.5 * dayNight;
        
        // Alpha con transición suave - visible en toda la superficie
        float smoothVisibility = smoothstep(-0.5, 0.3, dotNL); // Transición más gradual
        float alpha = (0.5 + 0.3 * cracks + 0.2 * crystals) * smoothVisibility * opacity;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        iceColor: { value: params.color || new THREE.Color(0xB0E0E6) },
        iceReflectivity: { value: params.iceReflectivity || 0.8 },
        frostDensity: { value: params.frostDensity || 0.5 },
        crackIntensity: { value: params.crackIntensity || 0.4 },
        opacity: { value: params.opacity || 0.7 },
        crystalScale: { value: params.crystalScale || 25.0 }, // Escala procedural de cristales
        crystalDensity: { value: params.crystalDensity || 0.6 }, // Densidad procedural
        crystalSharpness: { value: params.crystalSharpness || 150.0 }, // Nitidez procedural
        frostPattern: { value: params.frostPattern || 12.0 }, // Patrón procedural de escarcha
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) }, // Posición de luz en espacio mundo
        ambientStrength: { value: 0.15 }, // Más oscuro, igual que otros planetas
        lightIntensity: { value: 0.85 }, // Intensidad de la luz direccional
      },
      transparent: true,
      side: THREE.FrontSide,
      depthWrite: false
    });
  }

  /**
   * Crea un material para AquiferWater que funciona como capa
   */
  createAquiferWaterLayerMaterial(params: any): THREE.ShaderMaterial {
    const vertexShader = `
      uniform float time;
      uniform float waveHeight;
      uniform float waveFrequency;
      uniform float waveSpeed;
      uniform float seedOffset;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      varying float vWaveHeight;
      
      // Función de ruido determinista simple (como AtmosphereClouds)
      float random(vec3 st) {
        return fract(sin(dot(st.xyz, vec3(12.9898, 78.233, 54.321))) * 43758.5453123);
      }
      
      float noise(vec3 st) {
        vec3 i = floor(st);
        vec3 f = fract(st);
        
        // Interpolación suave
        f = f * f * (3.0 - 2.0 * f);
        
        // Obtener valores en los vértices del cubo
        float a = random(i);
        float b = random(i + vec3(1.0, 0.0, 0.0));
        float c = random(i + vec3(0.0, 1.0, 0.0));
        float d = random(i + vec3(1.0, 1.0, 0.0));
        float e = random(i + vec3(0.0, 0.0, 1.0));
        float f2 = random(i + vec3(1.0, 0.0, 1.0));
        float g = random(i + vec3(0.0, 1.0, 1.0));
        float h = random(i + vec3(1.0, 1.0, 1.0));
        
        // Interpolación trilineal
        return mix(
          mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
          mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
          f.z
        );
      }
      
      void main() {
        vPosition = position;
        vUv = uv;
        
        // Usar la posición 3D normalizada para ondas esféricas continuas
        vec3 spherePos = normalize(position);
        
        // Crear ondas usando ruido 3D basado en la posición esférica
        float waveValue = 0.0;
        
        // Añadir offset de seed para que cada planeta tenga ondas únicas
        vec3 seedOffset3D = vec3(seedOffset, seedOffset * 0.7, seedOffset * 1.3);
        
        // Ondas principales usando posición 3D para continuidad (velocidades más lentas)
        // Convertir ruido de [0,1] a [-1,1] para ondas bidireccionales
        waveValue += (noise(spherePos * waveFrequency + seedOffset3D + vec3(time * waveSpeed * 0.3)) * 2.0 - 1.0) * 0.5;
        waveValue += (noise(spherePos * waveFrequency * 2.0 + seedOffset3D * 1.5 + vec3(time * waveSpeed * 0.5)) * 2.0 - 1.0) * 0.3;
        waveValue += (noise(spherePos * waveFrequency * 4.0 + seedOffset3D * 2.0 + vec3(time * waveSpeed * 0.2)) * 2.0 - 1.0) * 0.2;
        
        vWaveHeight = waveValue * waveHeight;
        
        // Deformar vértices en la dirección normal
        vec3 newPosition = position + normal * vWaveHeight;
        
        // Calcular nueva normal (aproximada) con perturbación suave
        vec3 modifiedNormal = normalize(normal + vec3(waveValue * 0.05, waveValue * 0.05, 0.0));
        vNormal = normalMatrix * modifiedNormal;
        vWorldNormal = normalize((modelMatrix * vec4(modifiedNormal, 0.0)).xyz);
        
        vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
        vWorldPosition = worldPos.xyz;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      uniform vec3 waterColor;
      uniform vec3 deepWaterColor;
      uniform vec3 foamColor;
      uniform float specularIntensity;
      uniform float transparency;
      uniform float roughness;
      
      // Uniformes de luz (EXACTAMENTE como MetallicSurfaceLayer)
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      varying float vWaveHeight;
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
        // Usar posición de luz si está disponible, sino usar dirección (EXACTAMENTE como MetallicSurfaceLayer)
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        // Cálculo de iluminación (EXACTAMENTE como MetallicSurfaceLayer)
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Rim lighting (EXACTAMENTE como MetallicSurfaceLayer)
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Color base del agua con variación por profundidad
        float depth = 1.0 - abs(vWaveHeight) * 2.0;
        vec3 baseColor = mix(deepWaterColor, waterColor, depth);
        
        // Espuma en las crestas
        float foamFactor = smoothstep(0.2, 0.4, vWaveHeight);
        baseColor = mix(baseColor, foamColor, foamFactor * 0.3);
        
        // Calcular especular (EXACTAMENTE como MetallicSurfaceLayer)
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 halfwayDir = normalize(lightDir + viewDir);
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        float specularStrength = pow(NdotH, mix(4.0, 128.0, 1.0 - roughness)) * specularIntensity;
        
        // Aplicar iluminación (EXACTAMENTE como MetallicSurfaceLayer)
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        vec3 finalColor = baseColor * totalLight;
        
        // Añadir especular SOLO en la parte iluminada
        finalColor += vec3(1.0, 1.0, 1.0) * specularStrength * dayNight;
        
        gl_FragColor = vec4(finalColor, transparency);
      }
    `;

    const waterColor = params.waterColor instanceof THREE.Color ? 
      params.waterColor : new THREE.Color(params.waterColor || 0x2E8B8B);
    const deepWaterColor = params.deepWaterColor instanceof THREE.Color ? 
      params.deepWaterColor : new THREE.Color(params.deepWaterColor || 0x003366);
    const foamColor = params.foamColor instanceof THREE.Color ? 
      params.foamColor : new THREE.Color(params.foamColor || 0xffffff);

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        // Offset basado en seed para ondas únicas por planeta
        seedOffset: { value: (params.seed || 0) % 100 },
        // Parámetros de olas
        waveHeight: { value: params.waveHeight || 0.08 },
        waveFrequency: { value: params.waveFrequency || 3.0 },
        waveSpeed: { value: params.waveSpeed || 0.5 },  // Reducido de 2.0 a 0.5
        // Colores
        waterColor: { value: waterColor },
        deepWaterColor: { value: deepWaterColor },
        foamColor: { value: foamColor },
        // Efectos visuales
        specularIntensity: { value: params.specularIntensity || 3.0 },
        transparency: { value: params.transparency || 0.6 },
        roughness: { value: params.roughness || 0.1 },
        // Uniformes de luz (EXACTAMENTE como MetallicSurfaceLayer)
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) },
        ambientStrength: { value: 0.15 },
        lightIntensity: { value: 0.85 },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      side: THREE.FrontSide,
      depthWrite: false,
    });
  }

  /**
   * Crea un material para OceanCurrents que funciona como capa
   */
  createOceanCurrentsLayerMaterial(params: any): THREE.ShaderMaterial {
    const vertexShader = `
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normalize(normalMatrix * normal);
        vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        vUv = uv;
        
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      uniform vec3 currentColor;
      uniform vec3 deepCurrentColor;
      uniform float currentIntensity;
      uniform float currentScale;
      uniform float currentSpeed;
      uniform float secondaryCurrentIntensity;
      uniform float secondaryCurrentScale;
      uniform float secondaryCurrentSpeed;
      uniform float opacity;
      uniform float seedOffset;
      
      // Uniformes de luz (EXACTAMENTE como otros efectos)
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      // Función de ruido determinista simple
      float random(vec3 st) {
        return fract(sin(dot(st.xyz, vec3(12.9898, 78.233, 54.321))) * 43758.5453123);
      }
      
      float noise(vec3 st) {
        vec3 i = floor(st);
        vec3 f = fract(st);
        
        // Interpolación suave
        f = f * f * (3.0 - 2.0 * f);
        
        // Obtener valores en los vértices del cubo
        float a = random(i);
        float b = random(i + vec3(1.0, 0.0, 0.0));
        float c = random(i + vec3(0.0, 1.0, 0.0));
        float d = random(i + vec3(1.0, 1.0, 0.0));
        float e = random(i + vec3(0.0, 0.0, 1.0));
        float f2 = random(i + vec3(1.0, 0.0, 1.0));
        float g = random(i + vec3(0.0, 1.0, 1.0));
        float h = random(i + vec3(1.0, 1.0, 1.0));
        
        // Interpolación trilineal
        return mix(
          mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
          mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
          f.z
        );
      }
      
      // Ruido fractal para patrones orgánicos
      float fbm(vec3 p) {
        float value = 0.0;
        float amplitude = 0.5;
        
        for (int i = 0; i < 4; i++) {
          value += amplitude * noise(p);
          p *= 2.0;
          amplitude *= 0.5;
        }
        
        return value;
      }
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
        // Usar posición de luz (EXACTAMENTE como otros efectos)
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        // Cálculo de iluminación básico
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Usar la posición 3D normalizada para patrones esféricos continuos
        vec3 spherePos = normalize(vPosition);
        
        // Añadir offset de seed para que cada planeta tenga corrientes únicas
        vec3 seedOffset3D = vec3(seedOffset, seedOffset * 0.7, seedOffset * 1.3);
        
        // Corrientes principales - patrones largos y serpenteantes
        float currentPattern = 0.0;
        
        // Corrientes primarias - grandes y lentas (como la Corriente del Golfo)
        currentPattern += fbm(spherePos * currentScale + seedOffset3D + vec3(time * currentSpeed * 0.1)) * currentIntensity;
        
        // Corrientes secundarias - más pequeñas y rápidas
        currentPattern += fbm(spherePos * secondaryCurrentScale + seedOffset3D * 1.5 + vec3(time * secondaryCurrentSpeed * 0.15)) * secondaryCurrentIntensity;
        
        // Corrientes terciarias - detalles finos
        currentPattern += fbm(spherePos * currentScale * 3.0 + seedOffset3D * 2.0 + vec3(time * currentSpeed * 0.05)) * 0.2;
        
        // Convertir ruido a rango apropiado para corrientes
        currentPattern = (currentPattern * 2.0 - 1.0) * 0.5 + 0.5;
        currentPattern = smoothstep(0.3, 0.7, currentPattern); // Hacer patrones más definidos
        
        // Mezclar colores basado en la intensidad de las corrientes
        vec3 baseColor = mix(deepCurrentColor, currentColor, currentPattern);
        
        // Aplicar iluminación sutil (las corrientes son cambios de albedo, no elevación)
        float totalLight = ambientStrength + (lightIntensity * dayNight * 0.3); // Menos contraste de luz
        vec3 finalColor = baseColor * totalLight;
        
        // Alpha basado en la intensidad de las corrientes y opacidad general
        // Las corrientes oceánicas son cambios de albedo, deberían ser visibles en toda la superficie
        float alpha = currentPattern * opacity;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const currentColor = params.currentColor instanceof THREE.Color ? 
      params.currentColor : new THREE.Color(params.currentColor || 0x4A9B8E);
    const deepCurrentColor = params.deepCurrentColor instanceof THREE.Color ? 
      params.deepCurrentColor : new THREE.Color(params.deepCurrentColor || 0x2D5D52);

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        // Offset basado en seed para patrones únicos por planeta
        seedOffset: { value: (params.seed || 0) % 100 },
        // Parámetros de corrientes
        currentIntensity: { value: params.currentIntensity || 0.5 },
        currentScale: { value: params.currentScale || 2.0 },
        currentSpeed: { value: params.currentSpeed || 0.2 },
        secondaryCurrentIntensity: { value: params.secondaryCurrentIntensity || 0.3 },
        secondaryCurrentScale: { value: params.secondaryCurrentScale || 3.0 },
        secondaryCurrentSpeed: { value: params.secondaryCurrentSpeed || 0.15 },
        // Colores
        currentColor: { value: currentColor },
        deepCurrentColor: { value: deepCurrentColor },
        // Efectos visuales
        opacity: { value: params.opacity || 0.25 },
        // Uniformes de luz (EXACTAMENTE como otros efectos)
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) },
        ambientStrength: { value: 0.15 },
        lightIntensity: { value: 0.85 },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      side: THREE.FrontSide,
      depthWrite: false,
    });
  }

  /**
   * Añade el sistema a la escena
   */
  addToScene(scene: THREE.Scene): void {
    this.scene = scene;

    // Añadir todas las capas de efectos a la escena
    this.effectLayers.forEach((layer) => {
      if (layer.mesh) {
        scene.add(layer.mesh);
      }
    });

    if (this.effectLayers.length === 0) {
    }
  }

  /**
   * Actualiza todos los efectos
   */
  update(deltaTime: number, planetRotation?: number): void {
    // Actualizar uniforms de cada capa
    this.effectLayers.forEach((layer) => {
      if (layer.material.uniforms.time) {
        layer.material.uniforms.time.value += deltaTime;
      }
      if (planetRotation !== undefined && layer.material.uniforms.rotationAngle) {
        layer.material.uniforms.rotationAngle.value = planetRotation;
      }

      // Actualizar el objeto de capa individual si existe
      if (layer.layerObject && layer.layerObject.update) {
        try {
          layer.layerObject.update(deltaTime, planetRotation);
        } catch (error) {
          console.error(`Error updating layer ${layer.name}:`, error);
        }
      }

      // Sincronizar rotación con el planeta base
      if (layer.mesh) {
        layer.mesh.rotation.copy(this.baseMesh.rotation);
      }
    });
  }

  /**
   * Actualiza el color base del planeta
   */
  updateBaseColor(color: THREE.Color | number[]): void {
    const newColor = color instanceof THREE.Color ? color : new THREE.Color(color as any);
    this.baseMaterial.uniforms.baseColor.value = newColor;
  }

  /**
   * Actualiza la dirección de la luz
   */
  updateLightDirection(direction: THREE.Vector3): void {
    this.baseMaterial.uniforms.lightDirection.value = direction.clone().normalize();

    // Actualizar también en todas las capas
    this.effectLayers.forEach((layer) => {
      if (layer.material.uniforms.lightDirection) {
        layer.material.uniforms.lightDirection.value = direction.clone().normalize();
      }
    });
  }

  /**
   * Actualiza la posición de la luz (preferido sobre dirección para cálculos más precisos)
   */
  updateLightPosition(position: THREE.Vector3): void {
    this.baseMaterial.uniforms.lightPosition.value = position.clone();

    // Actualizar también en todas las capas
    this.effectLayers.forEach((layer) => {
      if (layer.material.uniforms.lightPosition) {
        layer.material.uniforms.lightPosition.value = position.clone();
      }
    });
  }

  /**
   * Actualiza tanto posición como dirección de luz desde una DirectionalLight de Three.js
   */
  updateFromThreeLight(light: THREE.DirectionalLight): void {
    // Usar posición de la luz
    this.updateLightPosition(light.position);

    // También calcular y actualizar dirección
    const direction = light.target.position.clone().sub(light.position).normalize();
    this.updateLightDirection(direction);
  }

  /**
   * Crea un material genérico para capa con soporte de iluminación mejorado
   */
  createGenericLayerMaterial(vertexShader: string, fragmentShader: string, uniforms: any, transparent: boolean = true, blending: THREE.Blending = THREE.NormalBlending): THREE.ShaderMaterial {
    // Añadir uniforms de iluminación si no existen
    if (!uniforms.lightDirection) {
      uniforms.lightDirection = { value: new THREE.Vector3(1, 1, 1).normalize() };
    }
    if (!uniforms.lightPosition) {
      uniforms.lightPosition = { value: new THREE.Vector3(0, 0, 0) };
    }

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent,
      blending,
      side: THREE.FrontSide,
      depthWrite: false,
    });
  }

  /**
   * Método helper para convertir efectos existentes a capas
   */
  convertEffectToLayer(effectName: string, originalMaterial: THREE.Material | THREE.ShaderMaterial, scaleFactor: number = 1.001): THREE.Mesh | null {
    if (originalMaterial instanceof THREE.ShaderMaterial) {
      // Clonar el material pero hacerlo transparente
      const layerMaterial = originalMaterial.clone();
      layerMaterial.transparent = true;
      layerMaterial.depthWrite = false;

      // Añadir soporte de iluminación si no existe
      if (!layerMaterial.uniforms.lightDirection) {
        layerMaterial.uniforms.lightDirection = {
          value: new THREE.Vector3(1, 1, 1).normalize(),
        };
      }

      return this.addEffectLayer(effectName, layerMaterial, scaleFactor);
    }

    console.warn(`Cannot convert non-shader material to layer: ${effectName}`);
    return null;
  }

  /**
   * Obtiene el siguiente factor de escala disponible para evitar z-fighting
   */
  getNextScaleFactor(): number {
    const baseScale = 1.001;
    const increment = 0.001;
    return baseScale + this.effectLayers.length * increment;
  }

  /**
   * Obtiene un mapa de todas las capas de efectos por nombre
   */
  getLayerMeshes(): Record<string, THREE.Mesh | undefined> {
    const meshes: Record<string, THREE.Mesh | undefined> = {};
    this.effectLayers.forEach(layer => {
      if (layer.name && layer.mesh) {
        meshes[layer.name] = layer.mesh;
      }
    });
    return meshes;
  }

  /**
   * Limpia todos los recursos
   */
  dispose(): void {
    this.baseMaterial.dispose();

    this.effectLayers.forEach((layer) => {
      if (layer.mesh) {
        layer.mesh.geometry.dispose();
        if (this.scene) {
          this.scene.remove(layer.mesh);
        }
      }
      layer.material.dispose();
    });

    this.effectLayers = [];
  }
}
