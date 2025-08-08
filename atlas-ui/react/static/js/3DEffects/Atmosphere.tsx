/**
 * Atmosphere Effect - Efectos atmosféricos principales
 * 
 * Este es el efecto atmosférico principal que usa Fresnel para crear
 * la atmósfera base de los planetas. Anteriormente llamado AtmosphereBrights.
 * 
 * Responsabilidades:
 * - Atmosphere.tsx -> Atmósfera base con efecto Fresnel (ESTE ARCHIVO)
 * - CloudGyros.tsx -> Partículas dinámicas giratorias
 * - AtmosphericStreaks.tsx -> Estelas atmosféricas específicas
 */

import * as THREE from 'three';

export interface AtmosphereParams {
  type?: string;
  color?: number[];
  width?: number;
  opacity?: number;
  density?: number;
}

/**
 * Efecto Atmosférico Principal
 * 
 * Crea la atmósfera base del planeta usando efectos Fresnel
 */
export class AtmosphereEffect {
  private mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.SphereGeometry;
  private params: AtmosphereParams;

  private static readonly vertexShader = `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  private static readonly fragmentShader = `
    uniform vec3 atmosphereColor;
    uniform float atmosphereOpacity;
    uniform float fresnelPower;
    
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // Efecto Fresnel - opaco en bordes, transparente en el centro
      float fresnel = pow(1.0 - abs(dot(normal, viewDir)), fresnelPower);
      
      // Color de la atmósfera
      vec3 color = atmosphereColor;
      
      // Alpha con efecto fresnel
      float alpha = fresnel * atmosphereOpacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;

  constructor(planetRadius: number, params: AtmosphereParams = {}) {
    this.params = {
      type: params.type || 'Thin',
      color: params.color || [0.7, 0.7, 0.7, 0.2], // Gris con más opacidad
      width: params.width || 12, // Width más cercano a Python
      opacity: params.opacity || 0.2, // Opacidad más visible
      density: params.density || 1.0
    };

    // Usar el width de la atmósfera para determinar el grosor
    // width viene como porcentaje adicional del radio del planeta
    const atmosphereRadius = planetRadius * (1 + (this.params.width! / 100));
    
    // Usar el doble de resolución para suavizar los polígonos visibles
    this.geometry = new THREE.SphereGeometry(atmosphereRadius, 32, 32);
    
    // Crear el color THREE.js
    const atmosphereColor = new THREE.Color(
      this.params.color![0],
      this.params.color![1],
      this.params.color![2]
    );
    
    // Usar ShaderMaterial con efecto fresnel
    this.material = new THREE.ShaderMaterial({
      vertexShader: AtmosphereEffect.vertexShader,
      fragmentShader: AtmosphereEffect.fragmentShader,
      uniforms: {
        atmosphereColor: { value: atmosphereColor },
        atmosphereOpacity: { value: this.params.opacity! },
        fresnelPower: { value: 2.0 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.mesh.position.copy(planetPosition);
    }
    scene.add(this.mesh);
  }

  update(deltaTime: number): void {
    // No rotación para mantener consistencia con las estrellas
  }

  updateParams(newParams: Partial<AtmosphereParams>): void {
    this.params = { ...this.params, ...newParams };

    if (newParams.color) {
      const atmosphereColor = new THREE.Color(
        newParams.color[0],
        newParams.color[1],
        newParams.color[2]
      );
      this.material.uniforms.atmosphereColor.value = atmosphereColor;
    }
    if (newParams.opacity !== undefined) {
      this.material.uniforms.atmosphereOpacity.value = newParams.opacity;
    }
    if (newParams.density !== undefined) {
      this.material.uniforms.atmosphereOpacity.value = (this.params.opacity || 0.3) * newParams.density;
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

/**
 * Función de utilidad para crear efecto desde datos de Python
 */
export function createAtmosphereFromPythonData(
  planetRadius: number, 
  atmosphereData: any
): AtmosphereEffect {
  console.log('🌫️ ATMOSPHERE CREATING - THIS SHOULD BE THE GLOW!', { type: 'Fresnel', width: 12 });
  
  // Default: atmósfera gris con opacidad moderada
  let atmosphereColor = [0.7, 0.7, 0.7, 0.15]; // Gris con más opacidad
  let atmosphereWidth = 12; // Width más cercano a Python por defecto
  
  if (atmosphereData) {
    console.log('🌫️ Atmosphere received data:', atmosphereData);
    
    // Verificar si hay color específico desde Python
    if (atmosphereData.color && Array.isArray(atmosphereData.color)) {
      // Python ya normaliza los colores a 0-1 (ver línea 212 en __frontendAPI_planet_renderer.py)
      const pythonColor = atmosphereData.color;
      atmosphereColor = [
        pythonColor[0],  // R (ya normalizado)
        pythonColor[1],  // G (ya normalizado)  
        pythonColor[2],  // B (ya normalizado)
        (pythonColor[3] || 0.15) * 0.7  // A - Usar opacidad de Python con reducción mínima
      ];
      console.log('🎨 Using API atmosphere color (Python normalized):', atmosphereColor);
    } else {
      console.log('🎨 Using default atmosphere color (no API color found):', atmosphereColor);
    }
    
    // Usar width desde Python si está disponible
    if (atmosphereData.width) {
      atmosphereWidth = atmosphereData.width;
    }
    
  } else {
    console.log('🎨 No atmosphere data found, using defaults:', { color: atmosphereColor, width: atmosphereWidth });
  }
  
  console.log('🌫️ Final Atmosphere params:', { 
    color: atmosphereColor, 
    width: atmosphereWidth, 
    planetRadius,
    opacity: atmosphereColor[3]
  });
  
  const params: AtmosphereParams = {
    type: atmosphereData?.type || 'Thin',
    color: atmosphereColor,
    width: atmosphereWidth,
    opacity: atmosphereColor[3], // ✅ RESTAURAR ATMOSPHERE
    density: 1.0
  };

  return new AtmosphereEffect(planetRadius, params);
}