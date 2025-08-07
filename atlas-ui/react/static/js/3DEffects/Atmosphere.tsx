/**
 * Atmosphere Effects - Efectos atmosféricos modulares
 * 
 * Incluye halos, resplandores y atmósferas densas que pueden aplicarse 
 * a cualquier tipo de planeta. Estelas dinámicas movidas a CloudGyros.tsx.
 */

import * as THREE from 'three';

export interface AtmosphericHaloParams {
  color?: THREE.Color | number[];
  intensity?: number;
  falloff?: number;
  scale?: number;
  pulsation?: boolean;
  pulsationSpeed?: number;
  fresnelPower?: number;
}



/**
 * Efecto de Halo Atmosférico
 */
export class AtmosphericHaloEffect {
  private mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.SphereGeometry;
  private params: AtmosphericHaloParams;

  private static readonly vertexShader = `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  private static readonly fragmentShader = `
    uniform vec3 glowColor;
    uniform float glowIntensity;
    uniform float glowFalloff;
    uniform float fresnelPower;
    uniform float time;
    uniform bool pulsation;
    uniform float pulsationSpeed;
    
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // Efecto Fresnel para el halo
      float fresnel = pow(1.0 - abs(dot(normal, viewDir)), fresnelPower);
      
      // Pulsación opcional
      float pulse = pulsation ? 
        (0.8 + 0.2 * sin(time * pulsationSpeed)) : 1.0;
      
      // Color del halo con gradiente
      vec3 color = glowColor * glowIntensity * fresnel * pulse;
      
      // Añadir variación de color en los bordes
      color += glowColor * 0.5 * pow(fresnel, 3.0);
      
      // Gradiente radial adicional
      float radialGradient = 1.0 - length(vWorldPosition.xz) * 0.1;
      color *= max(0.5, radialGradient);
      
      // Alpha con suavizado
      float alpha = fresnel * glowFalloff * pulse;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  constructor(planetRadius: number, params: AtmosphericHaloParams = {}) {
    this.params = {
      color: params.color || new THREE.Color(0x888888), // CAMBIO: Gris en lugar de azul
      intensity: params.intensity || 0.5, // CAMBIO: Intensidad reducida
      falloff: params.falloff || 0.6, // CAMBIO: Falloff más suave
      scale: params.scale || 1.15, // CAMBIO: Escala ligeramente menor
      pulsation: params.pulsation || false,
      pulsationSpeed: params.pulsationSpeed || 2.0,
      fresnelPower: params.fresnelPower || 3.0 // CAMBIO: Fresnel más sutil
    };

    this.geometry = new THREE.SphereGeometry(
      planetRadius * this.params.scale!,
      64,
      64
    );

    this.material = this.createMaterial();
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  private createMaterial(): THREE.ShaderMaterial {
    const color = this.params.color instanceof THREE.Color ? 
      this.params.color : new THREE.Color(this.params.color as any);

    return new THREE.ShaderMaterial({
      vertexShader: AtmosphericHaloEffect.vertexShader,
      fragmentShader: AtmosphericHaloEffect.fragmentShader,
      uniforms: {
        glowColor: { value: color },
        glowIntensity: { value: this.params.intensity },
        glowFalloff: { value: this.params.falloff },
        fresnelPower: { value: this.params.fresnelPower },
        time: { value: 0 },
        pulsation: { value: this.params.pulsation },
        pulsationSpeed: { value: this.params.pulsationSpeed }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.mesh.position.copy(planetPosition);
    }
    scene.add(this.mesh);
  }

  update(deltaTime: number): void {
    this.material.uniforms.time.value += deltaTime;
  }

  updateParams(newParams: Partial<AtmosphericHaloParams>): void {
    this.params = { ...this.params, ...newParams };

    if (newParams.color) {
      const color = newParams.color instanceof THREE.Color ? 
        newParams.color : new THREE.Color(newParams.color as any);
      this.material.uniforms.glowColor.value = color;
    }
    if (newParams.intensity !== undefined) {
      this.material.uniforms.glowIntensity.value = newParams.intensity;
    }
    if (newParams.falloff !== undefined) {
      this.material.uniforms.glowFalloff.value = newParams.falloff;
    }
    if (newParams.pulsation !== undefined) {
      this.material.uniforms.pulsation.value = newParams.pulsation;
    }
    if (newParams.pulsationSpeed !== undefined) {
      this.material.uniforms.pulsationSpeed.value = newParams.pulsationSpeed;
    }
  }

  getObject3D(): THREE.Mesh {
    return this.mesh;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}



// Funciones de utilidad para crear efectos desde datos de Python
export function createAtmosphericHaloFromPythonData(
  planetRadius: number, 
  atmosphereData: any
): AtmosphericHaloEffect {
  const haloData = atmosphereData.halo || {};
  
  console.log('🌟 AtmosphericHalo received data:', atmosphereData);
  
  // CAMBIO: Usar el color de la atmósfera en lugar de azul por defecto
  let haloColor = new THREE.Color(0x888888); // Gris por defecto
  
  // Si hay color específico de halo, usarlo
  if (haloData.color && Array.isArray(haloData.color)) {
    haloColor = new THREE.Color().setRGB(
      haloData.color[0], haloData.color[1], haloData.color[2]
    );
    console.log('🌟 Using specific halo color:', haloColor);
  } 
  // Si no hay halo específico pero hay atmósfera, usar color de atmósfera
  else if (atmosphereData.color && Array.isArray(atmosphereData.color)) {
    haloColor = new THREE.Color().setRGB(
      atmosphereData.color[0], 
      atmosphereData.color[1], 
      atmosphereData.color[2]
    );
    console.log('🌟 Using atmosphere color for halo:', atmosphereData.color, '→', haloColor);
  } else {
    console.log('🌟 Using default gray halo color (no atmosphere color found)');
  }
  
  const params: AtmosphericHaloParams = {
    color: haloColor,
    intensity: haloData.intensity || 0.3, // CAMBIO: Intensidad muy baja
    falloff: haloData.falloff || 0.4, // CAMBIO: Falloff muy sutil
    scale: haloData.scale || 1.08, // CAMBIO: Escala muy pequeña
    pulsation: haloData.pulsation || false,
    pulsationSpeed: haloData.pulsation_speed || 2.0
  };

  return new AtmosphericHaloEffect(planetRadius, params);
}


