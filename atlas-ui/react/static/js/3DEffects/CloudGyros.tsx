/**
 * Cloud Gyros Effect - Espirales giratorias atmosféricas
 * 
 * Crea las tormentas espirales características de gas giants como 
 * la Gran Mancha Roja de Júpiter. Extraído de GasGiantBands.
 * 
 * Responsabilidades:
 * - CloudGyros.tsx -> Espirales giratorias específicas (ESTE ARCHIVO)  
 * - CloudBands.tsx -> Bandas horizontales solamente
 * - AtmosphereGlow.tsx -> Partículas luminosas orbitantes
 */

import * as THREE from 'three';

export interface CloudGyrosParams {
  stormCenters?: Array<{x: number, y: number}>;
  stormColor?: THREE.Color | number[];
  stormIntensity?: number;
  spiralSpeed?: number;
  animationSpeed?: number;
  baseColor?: THREE.Color | number[];
}

// Generador de números aleatorios con semilla
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  random(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  uniform(min: number, max: number): number {
    return min + this.random() * (max - min);
  }
}

export class CloudGyrosEffect {
  private material: THREE.ShaderMaterial;
  private params: CloudGyrosParams;
  private mesh: THREE.Mesh;
  
  private static readonly vertexShader = `
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

  private static readonly fragmentShader = `
    uniform float time;
    uniform vec3 baseColor;
    uniform vec3 stormColor;
    uniform float stormIntensity;
    uniform float spiralSpeed;
    uniform float animationSpeed;
    uniform vec2 stormCenters[5];
    uniform int numStorms;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    // Crear sistemas de tormentas espirales
    float createGyroSpirals(vec3 pos) {
      float storms = 0.0;
      
      for(int i = 0; i < 5; i++) {
        if(i >= numStorms) break;
        
        vec2 stormCenter = stormCenters[i];
        float distToStorm = distance(pos.xy, stormCenter);
        
        if(distToStorm < 0.4) { // Radio más grande para espirales más visibles
          // Crear vórtice rotatorio
          float angle = atan(pos.y - stormCenter.y, pos.x - stormCenter.x);
          float spiral = sin(angle * 8.0 + distToStorm * 20.0 - time * animationSpeed * spiralSpeed);
          
          float stormIntensityValue = (1.0 - distToStorm / 0.4) * 0.9;
          stormIntensityValue *= (0.3 + 0.7 * spiral); // Más contraste en espirales
          stormIntensityValue *= stormIntensity;
          
          storms += stormIntensityValue;
        }
      }
      
      return clamp(storms, 0.0, 1.0);
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = baseColor;
      
      // Aplicar espirales giratorias
      float storms = createGyroSpirals(pos);
      color = mix(color, stormColor, storms);
      
      // Iluminación básica
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      color *= lighting;
      
      // Añadir efecto de terminador (día/noche) - CRÍTICO
      float terminator = smoothstep(-0.1, 0.1, dot(vNormal, lightDirection));
      color *= (0.3 + 0.7 * terminator);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  constructor(mesh: THREE.Mesh, params: CloudGyrosParams = {}) {
    this.params = {
      stormCenters: params.stormCenters || [
        {x: 0.3, y: -0.2},
        {x: -0.4, y: 0.6}, 
        {x: 0.1, y: 0.8}
      ],
      stormColor: params.stormColor || new THREE.Color(0x8B0000), // Rojo oscuro
      stormIntensity: params.stormIntensity || 0.8,
      spiralSpeed: params.spiralSpeed || 2.0,
      animationSpeed: params.animationSpeed || 1.0,
      baseColor: params.baseColor || new THREE.Color(0xFFA500)
    };

    this.mesh = mesh;
    this.material = this.createMaterial();
    this.mesh.material = this.material;
  }

  private createMaterial(): THREE.ShaderMaterial {
    const baseColor = this.params.baseColor instanceof THREE.Color ? 
      this.params.baseColor : new THREE.Color(this.params.baseColor as any);
    const stormColor = this.params.stormColor instanceof THREE.Color ? 
      this.params.stormColor : new THREE.Color(this.params.stormColor as any);

    // Convertir storm centers a array plano para el shader
    const centersArray = new Array(10).fill(0); // 5 storms * 2 coordinates
    this.params.stormCenters!.forEach((center, i) => {
      if (i < 5) {
        centersArray[i * 2] = center.x;
        centersArray[i * 2 + 1] = center.y;
      }
    });

    return new THREE.ShaderMaterial({
      vertexShader: CloudGyrosEffect.vertexShader,
      fragmentShader: CloudGyrosEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        baseColor: { value: baseColor },
        stormColor: { value: stormColor },
        stormIntensity: { value: this.params.stormIntensity },
        spiralSpeed: { value: this.params.spiralSpeed },
        animationSpeed: { value: this.params.animationSpeed },
        stormCenters: { value: centersArray },
        numStorms: { value: Math.min(this.params.stormCenters!.length, 5) }
      },
      transparent: false,
      side: THREE.FrontSide
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    // Este efecto modifica el material del mesh del planeta directamente
    // No necesita ser añadido a la escena por separado
  }

  apply(mesh: THREE.Mesh): void {
    // Aplicar el material al mesh
    mesh.material = this.material;
  }

  update(deltaTime: number): void {
    this.material.uniforms.time.value += deltaTime;
  }

  updateParams(newParams: Partial<CloudGyrosParams>): void {
    this.params = { ...this.params, ...newParams };
    
    if (newParams.stormIntensity !== undefined) {
      this.material.uniforms.stormIntensity.value = newParams.stormIntensity;
    }
    if (newParams.spiralSpeed !== undefined) {
      this.material.uniforms.spiralSpeed.value = newParams.spiralSpeed;
    }
    if (newParams.animationSpeed !== undefined) {
      this.material.uniforms.animationSpeed.value = newParams.animationSpeed;
    }
  }

  dispose(): void {
    this.material.dispose();
  }
}

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createCloudGyrosFromPythonData(
  mesh: THREE.Mesh,
  gasGiantData: any
): CloudGyrosEffect {
  const storms = gasGiantData.storms || {};
  
  const params: CloudGyrosParams = {
    stormCenters: storms.centers || [
      {x: 0.3, y: -0.2},
      {x: -0.4, y: 0.6},
      {x: 0.1, y: 0.8}
    ],
    stormColor: new THREE.Color(0x8B0000), // Rojo oscuro
    stormIntensity: storms.intensity || 0.8,
    spiralSpeed: storms.spiral_speed || 2.0,
    animationSpeed: 0.2,
    baseColor: gasGiantData.base_color ? 
      new THREE.Color(gasGiantData.base_color) : new THREE.Color(0xFFA500)
  };

  return new CloudGyrosEffect(mesh, params);
}