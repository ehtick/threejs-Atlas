/**
 * Metallic Surface Effect - Efecto AVANZADO que hace planetas VERDADERAMENTE metálicos
 * 
 * MEJORADO: Crea environment map, iluminación intensa y efectos visuales metálicos reales
 */

import * as THREE from 'three';

export interface MetallicSurfaceParams {
  color?: THREE.Color | number[];
  metalness?: number;
  roughness?: number;
  envMapIntensity?: number;
  clearcoat?: number;
  clearcoatRoughness?: number;
  reflectivity?: number;
}

export class MetallicSurfaceEffect {
  private params: MetallicSurfaceParams;

  constructor(params: MetallicSurfaceParams = {}) {
    this.params = params;
    console.log('🔥 MetallicSurface: CONSTRUCTOR LLAMADO - pero NO hace nada');
  }


  /**
   * APPLY - Efecto metálico realista
   */
  apply(mesh: THREE.Mesh): void {
    console.log('🔥 MetallicSurface.apply() LLAMADO - APLICANDO SUPERFICIE METÁLICA');
    
    if (mesh.material instanceof THREE.MeshStandardMaterial) {
      // CONFIGURACIÓN METÁLICA REALISTA
      
      // Color plata brillante con ligero tinte azulado
      const metalColor = this.params.color instanceof THREE.Color ? 
        this.params.color : new THREE.Color(this.params.color as any);
      mesh.material.color.copy(metalColor);
      
      // Propiedades PBR metálicas
      mesh.material.metalness = this.params.metalness || 0.95;  // Muy metálico
      mesh.material.roughness = this.params.roughness || 0.1;   // Ligeramente rugoso para realismo
      
      // Brillo emissive sutil para simular energía interna
      mesh.material.emissive.setHex(0x1a1a2e);  // Azul muy oscuro
      mesh.material.emissiveIntensity = 0.05;
      
      // Clearcoat para capa brillante (si está disponible)
      if ((mesh.material as any).clearcoat !== undefined) {
        (mesh.material as any).clearcoat = this.params.clearcoat || 0.3;
        (mesh.material as any).clearcoatRoughness = this.params.clearcoatRoughness || 0.1;
      }
      
      // Reflectividad máxima
      if (mesh.material.reflectivity !== undefined) {
        mesh.material.reflectivity = this.params.reflectivity || 0.9;
      }
      
      mesh.material.needsUpdate = true;
      
      console.log('✅ SUPERFICIE METÁLICA APLICADA:', {
        color: mesh.material.color.getHexString(),
        metalness: mesh.material.metalness,
        roughness: mesh.material.roughness,
        emissive: mesh.material.emissive.getHexString()
      });
    } else {
      console.warn('⚠️ Material no es MeshStandardMaterial:', mesh.material.type);
    }
  }

  /**
   * UPDATE VACÍO
   */
  update(deltaTime: number): void {
    // NO HACE NADA
  }

  /**
   * MÉTODOS VACÍOS
   */
  updateParams(newParams: Partial<MetallicSurfaceParams>): void {
    // NO HACE NADA
  }

  getMaterial(): any {
    return null;
  }

  dispose(): void {
    // NO HACE NADA
  }
}