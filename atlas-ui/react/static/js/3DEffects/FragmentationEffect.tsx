/**
 * Fragmentation Effect - Efecto de fragmentación 3D
 * 
 * Crea geometría fragmentada en los bordes y superficies de planetas
 * para simular placas tectónicas, impactos o erosión natural.
 */

import * as THREE from 'three';

export interface FragmentationParams {
  fragmentCount?: number;
  color?: THREE.Color | number[];
  size?: number;
  distribution?: 'edge' | 'surface' | 'random';
  animationSpeed?: number;
  rotationSpeed?: number;
  metalness?: number;
  roughness?: number;
}

export class FragmentationEffect {
  private fragments: THREE.Group;
  private fragmentMeshes: THREE.Mesh[] = [];
  private params: FragmentationParams;
  private planetRadius: number;

  constructor(planetRadius: number, params: FragmentationParams = {}) {
    this.planetRadius = planetRadius;
    this.params = {
      fragmentCount: params.fragmentCount || 20,
      color: params.color || new THREE.Color(0x444444),
      size: params.size || 0.05,
      distribution: params.distribution || 'edge',
      animationSpeed: params.animationSpeed || 1.0,
      rotationSpeed: params.rotationSpeed || 0.1,
      metalness: params.metalness || 0.9,
      roughness: params.roughness || 0.6
    };

    this.fragments = new THREE.Group();
    this.generateFragments();
  }

  /**
   * Genera los fragmentos basándose en los parámetros
   */
  private generateFragments(): void {
    const material = new THREE.MeshStandardMaterial({
      color: this.params.color instanceof THREE.Color ? 
        this.params.color : new THREE.Color(this.params.color as any),
      metalness: this.params.metalness,
      roughness: this.params.roughness
    });

    for (let i = 0; i < this.params.fragmentCount!; i++) {
      // Crear fragmentos con formas procedurales
      const geometry = this.generateFragmentGeometry();
      const fragment = new THREE.Mesh(geometry, material);

      // Posicionamiento basado en distribución
      this.positionFragment(fragment, i);

      // Rotación aleatoria inicial
      fragment.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Escala variable
      const scale = this.params.size! * (Math.random() * 0.5 + 0.75);
      fragment.scale.set(scale, scale, scale);

      // Datos adicionales para animación
      (fragment as any).userData = {
        rotationAxis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize(),
        rotationSpeed: (Math.random() - 0.5) * this.params.rotationSpeed!
      };

      this.fragmentMeshes.push(fragment);
      this.fragments.add(fragment);
    }
  }

  /**
   * Genera geometría procedural para un fragmento
   */
  private generateFragmentGeometry(): THREE.BufferGeometry {
    const sides = Math.floor(Math.random() * 4) + 3; // 3-6 lados
    const vertices: number[] = [];
    const normals: number[] = [];
    const indices: number[] = [];

    // Generar vértices en forma de polígono irregular
    const baseVertices: THREE.Vector3[] = [];
    
    // Centro
    baseVertices.push(new THREE.Vector3(0, 0, 0));
    
    // Vértices del polígono base
    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2;
      const radius = Math.random() * 0.5 + 0.5;
      const height = (Math.random() - 0.5) * 0.3;
      
      baseVertices.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        height
      ));
    }

    // Vértices superiores (extrusión)
    for (let i = 1; i <= sides; i++) {
      const baseVertex = baseVertices[i];
      const extrudedVertex = baseVertex.clone();
      extrudedVertex.z += Math.random() * 0.4 + 0.2; // Extrusión aleatoria
      baseVertices.push(extrudedVertex);
    }

    // Convertir vértices a arrays
    for (const vertex of baseVertices) {
      vertices.push(vertex.x, vertex.y, vertex.z);
    }

    // Generar caras triangulares
    // Base (cara inferior)
    for (let i = 1; i < sides; i++) {
      indices.push(0, i, i + 1);
    }
    indices.push(0, sides, 1); // Última cara de la base

    // Tapa superior
    const topCenterIndex = baseVertices.length - sides - 1;
    for (let i = 0; i < sides - 1; i++) {
      indices.push(topCenterIndex, topCenterIndex + i + 2, topCenterIndex + i + 1);
    }
    indices.push(topCenterIndex, topCenterIndex + 1, topCenterIndex + sides);

    // Caras laterales
    for (let i = 0; i < sides; i++) {
      const bottom1 = i + 1;
      const bottom2 = (i + 1) % sides + 1;
      const top1 = bottom1 + sides;
      const top2 = bottom2 + sides;

      // Dos triángulos por cara lateral
      indices.push(bottom1, top1, bottom2);
      indices.push(bottom2, top1, top2);
    }

    // Calcular normales automáticamente
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    return geometry;
  }

  /**
   * Posiciona un fragmento basándose en la distribución configurada
   */
  private positionFragment(fragment: THREE.Mesh, index: number): void {
    let position: THREE.Vector3;

    switch (this.params.distribution) {
      case 'edge':
        // Fragmentos concentrados en los bordes
        position = this.generateEdgePosition(index);
        break;

      case 'surface':
        // Fragmentos distribuidos por toda la superficie
        position = this.generateSurfacePosition();
        break;

      case 'random':
      default:
        // Distribución aleatoria
        position = this.generateRandomPosition();
        break;
    }

    fragment.position.copy(position);
  }

  /**
   * Genera posición en los bordes del planeta
   */
  private generateEdgePosition(index: number): THREE.Vector3 {
    // Distribuir fragmentos alrededor del perímetro
    const angle = (index / this.params.fragmentCount!) * Math.PI * 2;
    const edgeOffset = this.planetRadius * (0.95 + Math.random() * 0.1);
    const heightVariation = (Math.random() - 0.5) * this.planetRadius * 0.5;

    return new THREE.Vector3(
      Math.cos(angle) * edgeOffset,
      heightVariation,
      Math.sin(angle) * edgeOffset
    );
  }

  /**
   * Genera posición en la superficie del planeta
   */
  private generateSurfacePosition(): THREE.Vector3 {
    // Distribución esférica en la superficie
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const radius = this.planetRadius * (1.0 + Math.random() * 0.05);

    return new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
  }

  /**
   * Genera posición completamente aleatoria
   */
  private generateRandomPosition(): THREE.Vector3 {
    const radius = this.planetRadius * (0.8 + Math.random() * 0.4);
    const angle1 = Math.random() * Math.PI * 2;
    const angle2 = Math.random() * Math.PI * 2;

    return new THREE.Vector3(
      radius * Math.sin(angle1) * Math.cos(angle2),
      radius * Math.sin(angle1) * Math.sin(angle2),
      radius * Math.cos(angle1)
    );
  }

  /**
   * Añade el efecto a la escena
   */
  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.fragments.position.copy(planetPosition);
    }
    scene.add(this.fragments);
  }

  /**
   * Actualiza la animación de los fragmentos
   */
  update(deltaTime: number): void {
    // Animar cada fragmento individualmente
    this.fragmentMeshes.forEach((fragment, i) => {
      const userData = (fragment as any).userData;
      
      // Rotación continua
      fragment.rotateOnAxis(
        userData.rotationAxis, 
        userData.rotationSpeed * deltaTime * this.params.animationSpeed!
      );

      // Flotación sutil
      const floatOffset = Math.sin(Date.now() * 0.001 + i) * 0.001;
      fragment.position.y += floatOffset * deltaTime;
    });

    // Rotación lenta del grupo completo
    this.fragments.rotation.y += deltaTime * 0.01 * this.params.animationSpeed!;
  }

  /**
   * Actualiza parámetros dinámicamente
   */
  updateParams(newParams: Partial<FragmentationParams>): void {
    this.params = { ...this.params, ...newParams };

    // Si cambia el color, actualizar material de todos los fragmentos
    if (newParams.color) {
      const color = newParams.color instanceof THREE.Color ? 
        newParams.color : new THREE.Color(newParams.color as any);
      
      this.fragmentMeshes.forEach(fragment => {
        if (fragment.material instanceof THREE.MeshStandardMaterial) {
          fragment.material.color = color;
        }
      });
    }

    // Si cambian las propiedades del material
    if (newParams.metalness !== undefined || newParams.roughness !== undefined) {
      this.fragmentMeshes.forEach(fragment => {
        if (fragment.material instanceof THREE.MeshStandardMaterial) {
          if (newParams.metalness !== undefined) {
            fragment.material.metalness = newParams.metalness;
          }
          if (newParams.roughness !== undefined) {
            fragment.material.roughness = newParams.roughness;
          }
        }
      });
    }

    // Si cambia el tamaño, regenerar fragmentos
    if (newParams.size !== undefined || newParams.fragmentCount !== undefined) {
      this.regenerateFragments();
    }
  }

  /**
   * Regenera los fragmentos con nuevos parámetros
   */
  private regenerateFragments(): void {
    // Limpiar fragmentos existentes
    this.fragmentMeshes.forEach(fragment => {
      if (fragment.geometry) fragment.geometry.dispose();
      if (fragment.material instanceof THREE.Material) fragment.material.dispose();
    });
    
    this.fragments.clear();
    this.fragmentMeshes = [];

    // Generar nuevos fragmentos
    this.generateFragments();
  }

  /**
   * Obtiene el objeto 3D para manipulación directa
   */
  getObject3D(): THREE.Group {
    return this.fragments;
  }

  /**
   * Obtiene todos los fragmentos individuales
   */
  getFragmentMeshes(): THREE.Mesh[] {
    return [...this.fragmentMeshes];
  }

  /**
   * Limpia recursos
   */
  dispose(): void {
    this.fragmentMeshes.forEach(fragment => {
      if (fragment.geometry) fragment.geometry.dispose();
      if (fragment.material instanceof THREE.Material) fragment.material.dispose();
    });
    
    this.fragmentMeshes = [];
    this.fragments.clear();
  }
}