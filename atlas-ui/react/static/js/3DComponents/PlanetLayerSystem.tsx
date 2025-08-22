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
   * Crea un material para DiamondSurface que funciona como capa
   */
  createDiamondSurfaceLayerMaterial(params: any): THREE.ShaderMaterial {
    const vertexShader = `
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normalMatrix * normal;
        vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        vUv = uv;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 diamondColor;
      uniform float refractionIndex;
      uniform float dispersion;
      uniform float clarity;
      uniform float facetSize;
      uniform float brilliance;
      uniform float opacity;
      uniform float prismaticIntensity;
      uniform float iridescenceIntensity;
      uniform float iridescenceRange;
      uniform float iridescenceSpeed;
      uniform float iridescenceScale;
      uniform float time;
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      // Hash function para patrones procedurales
      float hash(vec3 p) {
        p = fract(p * vec3(443.8975, 397.2973, 491.1871));
        p += dot(p, p.yxz + 19.19);
        return fract((p.x + p.y) * p.z);
      }
      
      // Función para crear facetas de diamante perfectas y geométricas
      vec3 diamondFacets(vec2 uv, float scale, vec3 baseNormal) {
        // CRÍTICO: Usar scale correctamente igual que crystallineFacets
        vec2 scaledUv = uv * scale;
        vec2 id = floor(scaledUv);
        vec2 f = fract(scaledUv);
        
        // Crear facetas geométricas perfectas (hexagonales/octogonales)
        float facetType = hash(vec3(id, 42.0));
        vec3 facetNormal = baseNormal;
        
        // Centro de la faceta
        vec2 center = vec2(0.5);
        vec2 toCenter = f - center;
        float dist = length(toCenter);
        float angle = atan(toCenter.y, toCenter.x);
        
        if(facetType < 0.33) {
          // Facetas hexagonales perfectas - MUY VISIBLES
          float hexAngle = floor(angle * 3.0 / 3.14159) * 3.14159 / 3.0;
          vec3 perturbation = vec3(
            cos(hexAngle) * dist * 0.8,
            sin(hexAngle) * dist * 0.8,
            (1.0 - dist) * 0.6
          );
          facetNormal = normalize(baseNormal + perturbation);
          
        } else if(facetType < 0.66) {
          // Facetas octogonales brillantes - MUY VISIBLES
          float octAngle = floor(angle * 4.0 / 3.14159) * 3.14159 / 4.0;
          vec3 perturbation = vec3(
            cos(octAngle) * dist * 0.9,
            sin(octAngle) * dist * 0.9,
            cos(dist * 6.28) * 0.5
          );
          facetNormal = normalize(baseNormal + perturbation);
          
        } else {
          // Facetas triangulares de brillante corte - MUY VISIBLES
          float triAngle = floor(angle * 6.0 / 3.14159) * 3.14159 / 6.0;
          float triPattern = sin(triAngle * 3.0) * cos(dist * 8.0);
          vec3 perturbation = vec3(
            cos(triAngle) * triPattern * 0.7,
            sin(triAngle) * triPattern * 0.7,
            triPattern * 0.4
          );
          facetNormal = normalize(baseNormal + perturbation);
        }
        
        return facetNormal;
      }
      
      // Función para dispersión cromática (separación de colores espectrales)
      vec3 chromaticDispersion(vec3 direction, vec3 normal, float dispersionAmount) {
        float eta_r = 1.0 / (refractionIndex - dispersionAmount * 0.01); // Rojo
        float eta_g = 1.0 / refractionIndex; // Verde
        float eta_b = 1.0 / (refractionIndex + dispersionAmount * 0.01); // Azul
        
        vec3 refracted_r = refract(direction, normal, eta_r);
        vec3 refracted_g = refract(direction, normal, eta_g);
        vec3 refracted_b = refract(direction, normal, eta_b);
        
        // Combinar componentes espectrales
        return vec3(
          length(refracted_r),
          length(refracted_g),
          length(refracted_b)
        );
      }
      
      // Función para iridiscencia - cambio de color según ángulo de vista
      vec3 calculateIridescence(vec3 viewDir, vec3 normal, vec3 worldPos) {
        // Ángulo entre la normal y la dirección de vista (efecto Fresnel)
        float fresnel = 1.0 - abs(dot(normal, viewDir));
        
        // Crear variación espacial basada en posición mundial
        float spatialVariation = sin(worldPos.x * iridescenceScale) * 
                                cos(worldPos.y * iridescenceScale * 0.8) * 
                                sin(worldPos.z * iridescenceScale * 1.2);
        
        // Variación temporal suave
        float timeVariation = sin(time * iridescenceSpeed) * 0.5 + 0.5;
        
        // Combinar variaciones para crear patrón único
        float colorShift = (spatialVariation * 0.7 + timeVariation * 0.3) * iridescenceRange;
        
        // Crear colores iridiscentes basados en el ángulo de vista
        float anglePhase = fresnel * 6.28318; // 2PI para ciclo completo de colores
        
        // Generar colores espectrales que cambian con el ángulo
        vec3 iridColor = vec3(
          sin(anglePhase + colorShift) * 0.5 + 0.5,                    // Rojo-Verde
          sin(anglePhase + colorShift + 2.094) * 0.5 + 0.5,            // Verde-Azul (120°)
          sin(anglePhase + colorShift + 4.188) * 0.5 + 0.5             // Azul-Rojo (240°)
        );
        
        // Intensificar el efecto en los bordes (donde fresnel es mayor)
        float edgeIntensity = pow(fresnel, 2.0);
        
        // Aplicar intensidad y hacer que sea más visible en ciertos ángulos
        return iridColor * edgeIntensity * iridescenceIntensity;
      }
      
      void main() {
        vec3 baseNormal = normalize(vWorldNormal);
        
        // FACETAS DE DIAMANTE: Crear facetas perfectas y geométricas
        vec3 normal = diamondFacets(vUv, facetSize, baseNormal);
        
        // Dirección de luz como en README
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        // Dirección de vista (cameraPosition es built-in de Three.js)
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        
        // Cálculo de iluminación básica Lambertiana
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Color base del diamante (como MetallicSurfaceLayer)
        vec3 color = diamondColor;
        
        
        // EFECTO PRISMÁTICO: Dispersión cromática estática
        vec3 dispersedColor = chromaticDispersion(-viewDir, normal, dispersion * 10.0);
        vec3 prismaticColors = vec3(
          sin(dispersedColor.r * 15.0) * 0.5 + 0.5,
          sin(dispersedColor.g * 12.0) * 0.5 + 0.5,
          sin(dispersedColor.b * 18.0) * 0.5 + 0.5
        );
        
        // Aplicar efecto prismático más visible
        color = mix(color, prismaticColors, prismaticIntensity * clarity * 0.7);
        
        // IRIDISCENCIA: Cambio de color según perspectiva
        vec3 iridescence = calculateIridescence(viewDir, normal, vWorldPosition);
        color = mix(color, color + iridescence, clarity * dayNight);
        
        // REFLEXIÓN ESPECULAR INTENSA (características del diamante)
        vec3 halfwayDir = normalize(lightDir + viewDir);
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        float specularPower = mix(32.0, 256.0, brilliance / 3.0); // Normalizar brilliance
        float specularStrength = pow(NdotH, specularPower) * brilliance;
        
        // Múltiples reflexiones internas (característica del diamante)
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
        vec3 internalReflections = vec3(1.0) * fresnel * clarity;
        
        // REFRACCIÓN: Simular el comportamiento refractivo del diamante
        vec3 refractedDir = refract(-viewDir, normal, 1.0 / refractionIndex);
        float refractionEffect = length(refractedDir) * clarity;
        
        // Aplicar efecto de refracción al color final
        vec3 refractionTint = vec3(0.9, 0.95, 1.1); // Tinte azulado por refracción
        color = mix(color, color * refractionTint, refractionEffect * 0.3);
        
        // Aplicar iluminación base (EXACTAMENTE como MetallicSurfaceLayer)
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        vec3 finalColor = color * totalLight;
        
        // Añadir brillos especulares SOLO en la parte iluminada (como MetallicSurfaceLayer)
        vec3 diamondSparkle = vec3(specularStrength);
        finalColor += diamondSparkle * dayNight;
        
        // Añadir reflexiones internas sutiles
        finalColor += internalReflections * 0.2 * dayNight;
        
        // Destellos estáticos basados en facetas (sin animación)
        float sparkle = sin(dot(normal, viewDir) * facetSize * 2.0) * 0.5 + 0.5;
        finalColor += vec3(sparkle * brilliance * 0.1) * dayNight;
        
        // Aplicar claridad (transparencia parcial)
        float finalOpacity = opacity * clarity;
        
        gl_FragColor = vec4(finalColor, finalOpacity);
      }
    `;

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        diamondColor: { value: params.color || new THREE.Color(0x808080) },
        refractionIndex: { value: params.refractionIndex || 2.42 },
        dispersion: { value: params.dispersion || 0.5 },
        clarity: { value: params.clarity || 0.8 },
        facetSize: { value: params.facetSize !== undefined ? params.facetSize : 15.0 },
        brilliance: { value: params.brilliance || 2.0 },
        opacity: { value: params.opacity || 0.9 },
        prismaticIntensity: { value: params.prismaticIntensity || 0.6 },
        iridescenceIntensity: { value: params.iridescenceIntensity || 0.5 },
        iridescenceRange: { value: params.iridescenceRange || 1.0 },
        iridescenceSpeed: { value: params.iridescenceSpeed || 0.3 },
        iridescenceScale: { value: params.iridescenceScale || 1.5 },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) },
        ambientStrength: { value: 0.15 },
        lightIntensity: { value: 0.85 },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
  }

  /**
   * Crea un material para MoltenLava que funciona como capa (adaptado de AquiferWater pero para lava)
   */
  createMoltenLavaLayerMaterial(params: any): THREE.ShaderMaterial {
    const vertexShader = `
      uniform float time;
      uniform float lavaWaveHeight;
      uniform float lavaWaveFrequency;
      uniform float lavaWaveSpeed;
      uniform float seedOffset;
      uniform float viscosity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      varying float vLavaHeight;
      
      // Función de ruido determinista más lenta para lava viscosa
      float random(vec3 st) {
        return fract(sin(dot(st.xyz, vec3(12.9898, 78.233, 54.321))) * 43758.5453123);
      }
      
      float noise(vec3 st) {
        vec3 i = floor(st);
        vec3 f = fract(st);
        
        // Interpolación más suave para movimiento viscoso
        f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
        
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
        
        // Usar la posición 3D normalizada para ondas de lava esféricas continuas
        vec3 spherePos = normalize(position);
        
        // Crear ondas de lava muy lentas y viscosas
        float lavaValue = 0.0;
        
        // Añadir offset de seed para que cada planeta tenga lava única
        vec3 seedOffset3D = vec3(seedOffset, seedOffset * 0.7, seedOffset * 1.3);
        
        // Ondas principales de lava EXTREMADAMENTE lentas (viscosidad alta)
        // Convertir ruido de [0,1] a [-1,1] para ondas bidireccionales
        lavaValue += (noise(spherePos * lavaWaveFrequency + seedOffset3D + vec3(time * lavaWaveSpeed * 0.1)) * 2.0 - 1.0) * 0.6;
        lavaValue += (noise(spherePos * lavaWaveFrequency * 1.8 + seedOffset3D * 1.5 + vec3(time * lavaWaveSpeed * 0.05)) * 2.0 - 1.0) * 0.3;
        lavaValue += (noise(spherePos * lavaWaveFrequency * 3.2 + seedOffset3D * 2.0 + vec3(time * lavaWaveSpeed * 0.03)) * 2.0 - 1.0) * 0.1;
        
        // Aplicar viscosidad para hacer el movimiento más lento y pesado
        vLavaHeight = lavaValue * lavaWaveHeight * viscosity;
        
        // Deformar vértices en la dirección normal con efecto de lava
        vec3 newPosition = position + normal * vLavaHeight;
        
        // Calcular nueva normal con perturbación de lava
        vec3 modifiedNormal = normalize(normal + vec3(lavaValue * 0.02, lavaValue * 0.02, 0.0));
        vNormal = normalMatrix * modifiedNormal;
        vWorldNormal = normalize((modelMatrix * vec4(modifiedNormal, 0.0)).xyz);
        
        vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
        vWorldPosition = worldPos.xyz;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      uniform vec3 moltenColor;
      uniform vec3 coreColor;
      uniform vec3 coolingColor;
      uniform float emissiveIntensity;
      uniform float glowIntensity;
      uniform float temperature;
      uniform float lavaRoughness;
      
      // Uniformes de luz (EXACTAMENTE como AquiferWater)
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      varying float vLavaHeight;
      
      // Función de ruido para textura de lava burbujeante
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
        
        for (int i = 0; i < 5; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
        // Usar posición de luz (EXACTAMENTE como AquiferWater)
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        // Cálculo de iluminación (EXACTAMENTE como AquiferWater)
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Rim lighting (EXACTAMENTE como AquiferWater)
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // UV animado para flujo de lava MUY LENTO
        vec2 lavaUv = vUv;
        lavaUv.x += time * 0.02; // Flujo horizontal muy lento
        lavaUv.y += time * 0.01; // Flujo vertical extremadamente lento
        
        // Textura de lava burbujeante con múltiples escalas
        float lavaTexture1 = fbm(lavaUv * 4.0);
        float lavaTexture2 = fbm(lavaUv * 8.0 + vec2(time * 0.03));
        float lavaTexture3 = fbm(lavaUv * 16.0 + vec2(time * 0.05));
        
        // Combinar texturas para efecto de lava realista
        float combinedTexture = lavaTexture1 * 0.5 + lavaTexture2 * 0.3 + lavaTexture3 * 0.2;
        
        // Pulsación de temperatura muy lenta
        float temperaturePulse = sin(time * 0.2) * 0.5 + 0.5;
        float heatIntensity = combinedTexture + temperaturePulse * 0.2 + temperature * 0.3;
        
        // Mapeo de color basado en temperatura (similar a LavaFlowsEffect)
        vec3 baseColor;
        if (heatIntensity > 0.8) {
          // Núcleo súper caliente - color core
          baseColor = mix(moltenColor, coreColor, (heatIntensity - 0.8) / 0.2);
        } else if (heatIntensity > 0.5) {
          // Lava caliente - transición
          baseColor = mix(coolingColor, moltenColor, (heatIntensity - 0.5) / 0.3);
        } else {
          // Lava enfriándose
          baseColor = coolingColor * (0.4 + heatIntensity * 0.6);
        }
        
        // Variación de color por elevación de lava
        float elevationFactor = 1.0 + abs(vLavaHeight) * 3.0;
        baseColor = mix(baseColor, coreColor, elevationFactor * 0.2);
        
        // Calcular especular rugoso (como lava real)
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 halfwayDir = normalize(lightDir + viewDir);
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        float specularStrength = pow(NdotH, mix(2.0, 8.0, 1.0 - lavaRoughness)) * glowIntensity * 0.5;
        
        // Aplicar iluminación base (EXACTAMENTE como AquiferWater)
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        vec3 finalColor = baseColor * totalLight;
        
        // Añadir especular SOLO en la parte iluminada
        finalColor += vec3(1.0, 0.8, 0.6) * specularStrength * dayNight;
        
        // Efecto emisivo MUY intenso para lava incandescente
        // ENFOQUE HÍBRIDO: La lava brilla incluso en la oscuridad, pero menos
        vec3 emissive = baseColor * emissiveIntensity * (0.6 + temperaturePulse * 0.4) * heatIntensity;
        
        // Factor de emisividad: 20-25% mínimo en oscuridad, 100% en luz
        // Más sutil en el lado oscuro para mayor realismo
        float emissiveFactor = mix(0.22, 1.0, dayNight);
        
        // Aplicar el factor emisivo manteniendo algo de brillo en la cara oculta
        finalColor += emissive * emissiveFactor;
        
        // Alpha basado en intensidad de calor
        float alpha = 0.8 + heatIntensity * 0.2;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const moltenColor = params.moltenColor instanceof THREE.Color ? 
      params.moltenColor : new THREE.Color(params.moltenColor || 0xFF8C00);
    const coreColor = params.coreColor instanceof THREE.Color ? 
      params.coreColor : new THREE.Color(params.coreColor || 0xFFB347);
    const coolingColor = params.coolingColor instanceof THREE.Color ? 
      params.coolingColor : new THREE.Color(params.coolingColor || 0xCC4400);

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        // Offset basado en seed para lava única por planeta
        seedOffset: { value: (params.seed || 0) % 100 },
        // Parámetros de olas de lava (MUY lentas)
        lavaWaveHeight: { value: params.lavaWaveHeight || 0.04 },
        lavaWaveFrequency: { value: params.lavaWaveFrequency || 2.0 },
        lavaWaveSpeed: { value: params.lavaWaveSpeed || 0.05 }, // EXTREMADAMENTE lento
        viscosity: { value: params.viscosity || 0.8 },
        // Colores incandescentes
        moltenColor: { value: moltenColor },
        coreColor: { value: coreColor },
        coolingColor: { value: coolingColor },
        // Efectos visuales de lava
        emissiveIntensity: { value: params.emissiveIntensity || 4.0 },
        glowIntensity: { value: params.glowIntensity || 3.0 },
        temperature: { value: params.temperature || 0.9 },
        lavaRoughness: { value: params.lavaRoughness || 0.8 },
        // Uniformes de luz (EXACTAMENTE como AquiferWater)
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
  }
}
