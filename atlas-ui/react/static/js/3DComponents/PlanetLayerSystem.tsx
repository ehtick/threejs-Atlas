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
        
        // CRÍTICO: hacer las bandas completamente transparentes en la parte oscura
        float lightIntensity = max(0.0, dotNL);
        lightIntensity = pow(lightIntensity, 2.0); // Caída más agresiva hacia la oscuridad
        
        // Color de las bandas con transparencia
        vec3 color = bandColor;
        float alpha = bands * opacity * lightIntensity; // Usar opacity del parámetro
        
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
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
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
        
        // Fragmentación angular en los bordes
        float edgeFactor = 1.0 - abs(dotNL);
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
      },
      transparent: true,
      blending: THREE.NormalBlending, // Usar el mismo blending que CloudBands
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
