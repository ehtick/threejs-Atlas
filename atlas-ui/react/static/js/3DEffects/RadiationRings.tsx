/**
 * Radiation Rings Effect - Efecto de Anillos de Radiación Concéntricos
 * 
 * Crea círculos concéntricos en la superficie del planeta que se expanden
 * como ondas de radiación, evocando contaminación nuclear.
 * 
 * Características:
 * - Múltiples anillos concéntricos que se expanden desde el planeta
 * - Ondas que viajan hacia afuera con diferentes fases
 * - Patrón de interferencia que crea efectos de radiación
 * - Complementa el efecto RadiationPulse para crear el "techno mandala" completo
 */

import * as THREE from 'three';
import { SeededRandom } from '../Utils/SeededRandom';

export interface RadiationRingsParams {
  color?: number[] | THREE.Color;
  ringCount?: number;
  expansionSpeed?: number;
  waveIntensity?: number;
  maxRadius?: number;
  glowIntensity?: number;
  seed?: number;
}

/**
 * Efecto de Anillos de Radiación Concéntricos
 * 
 * Crea anillos concéntricos que se expanden desde la superficie del planeta
 * como ondas de radiación electromagnética
 */
export class RadiationRingsEffect {
  private group: THREE.Group;
  private concentricRings: THREE.Line[] = [];
  private params: RadiationRingsParams;
  private time: number = 0;
  private rng: SeededRandom;
  private planetRadius: number;

  constructor(planetRadius: number, params: RadiationRingsParams = {}) {
    this.planetRadius = planetRadius;
    
    // Usar seed para generación determinística
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);
    
    this.params = {
      color: params.color || [0.3, 1.0, 0.2],  // Verde radioactivo brillante
      ringCount: params.ringCount || 10,       // Número de anillos concéntricos
      expansionSpeed: params.expansionSpeed || 2.5,  // Velocidad de expansión
      waveIntensity: params.waveIntensity || 0.85,   // Intensidad de las ondas
      maxRadius: params.maxRadius || planetRadius * 2.8,  // Radio máximo
      glowIntensity: params.glowIntensity || 1.3,    // Intensidad del brillo
      seed
    };

    this.group = new THREE.Group();
    this.createConcentricRings();
  }

  private createConcentricRings(): void {
    const ringCount = this.params.ringCount!;
    const maxRingRadius = this.params.maxRadius!;
    
    for (let i = 0; i < ringCount; i++) {
      // Distribución exponencial de los anillos para mayor densidad cerca del planeta
      const t = i / (ringCount - 1);
      const ringRadius = this.planetRadius * 1.05 + (maxRingRadius - this.planetRadius * 1.05) * Math.pow(t, 0.8);
      
      // Crear geometría circular con alta resolución
      const segments = 128; // Alta resolución para suavidad
      const points = [];
      
      for (let j = 0; j <= segments; j++) {
        const angle = (j / segments) * Math.PI * 2;
        const x = Math.cos(angle) * ringRadius;
        const z = Math.sin(angle) * ringRadius;
        const y = (this.rng.random() - 0.5) * 0.02 * this.planetRadius; // Ligera variación vertical
        points.push(new THREE.Vector3(x, y, z));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      // Crear atributos para animación compleja
      const phases = new Float32Array(segments + 1);
      const distances = new Float32Array(segments + 1);
      const randomOffsets = new Float32Array(segments + 1);
      
      for (let j = 0; j <= segments; j++) {
        phases[j] = i * 0.6 + (j / segments) * Math.PI * 4; // Fase diferente por anillo y posición
        distances[j] = (ringRadius - this.planetRadius * 1.05) / (maxRingRadius - this.planetRadius * 1.05);
        randomOffsets[j] = this.rng.random(); // Offset aleatorio para variación
      }
      
      geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1));
      geometry.setAttribute('distance', new THREE.BufferAttribute(distances, 1));
      geometry.setAttribute('randomOffset', new THREE.BufferAttribute(randomOffsets, 1));
      
      const material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(this.params.color![0], this.params.color![1], this.params.color![2]) },
          expansionSpeed: { value: this.params.expansionSpeed },
          waveIntensity: { value: this.params.waveIntensity },
          glowIntensity: { value: this.params.glowIntensity },
          ringIndex: { value: i },
          totalRings: { value: ringCount }
        },
        
        vertexShader: `
          attribute float phase;
          attribute float distance;
          attribute float randomOffset;
          
          uniform float time;
          uniform float expansionSpeed;
          uniform float waveIntensity;
          uniform float ringIndex;
          uniform float totalRings;
          
          varying float vIntensity;
          varying float vDistance;
          
          void main() {
            vDistance = distance;
            
            // Múltiples ondas superpuestas para crear patrón complejo
            float wave1 = sin(phase + time * expansionSpeed) * 0.5 + 0.5;
            float wave2 = sin(phase * 2.0 - time * expansionSpeed * 1.3 + ringIndex * 0.8) * 0.3 + 0.7;
            float wave3 = cos(phase * 0.5 + time * expansionSpeed * 0.7 - ringIndex * 1.2) * 0.2 + 0.8;
            
            // Onda de expansión que recorre los anillos
            float expansionWave = sin(distance * 15.0 - time * expansionSpeed * 2.0) * 0.4 + 0.6;
            
            // Pulso que afecta a todos los anillos simultáneamente
            float globalPulse = sin(time * expansionSpeed * 0.5 + ringIndex * 0.3) * 0.2 + 0.8;
            
            // Combinar todas las ondas
            vIntensity = wave1 * wave2 * wave3 * expansionWave * globalPulse * waveIntensity;
            
            // Atenuar según la distancia (más intenso cerca del planeta)
            float distanceFalloff = 1.0 - pow(distance, 1.2);
            vIntensity *= distanceFalloff;
            
            // Añadir variación aleatoria sutil
            vIntensity *= (0.8 + randomOffset * 0.4);
            
            // Desplazamiento vertical sutil para dar volumen
            vec3 pos = position;
            pos.y += sin(phase + time * expansionSpeed * 0.5) * 2.0 * (1.0 - distance);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        
        fragmentShader: `
          uniform vec3 color;
          uniform float glowIntensity;
          uniform float time;
          uniform float expansionSpeed;
          
          varying float vIntensity;
          varying float vDistance;
          
          void main() {
            // Pulso adicional en el fragment shader para más dinamismo
            float fragmentPulse = sin(time * expansionSpeed * 1.5) * 0.1 + 0.9;
            
            // Intensidad final con glow
            float finalIntensity = vIntensity * glowIntensity * fragmentPulse;
            
            // Color con variación sutil
            vec3 finalColor = color;
            
            // Añadir un toque de amarillo-verde en las zonas más intensas (más radioactivo)
            if (finalIntensity > 0.7) {
              finalColor = mix(color, vec3(0.5, 1.0, 0.1), (finalIntensity - 0.7) * 2.0);
            }
            
            // Aplicar intensidad al color
            finalColor *= finalIntensity;
            
            // Transparencia basada en intensidad pero con mínimo para visibilidad
            float alpha = max(finalIntensity * 0.7, finalIntensity * vDistance * 0.3);
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `
      });
      
      const ring = new THREE.Line(geometry, material);
      this.concentricRings.push(ring);
      this.group.add(ring);
    }
  }

  public update(deltaTime: number): void {
    this.time += deltaTime;
    
    // Actualizar círculos concéntricos
    this.concentricRings.forEach((ring) => {
      const material = ring.material as THREE.ShaderMaterial;
      material.uniforms.time.value = this.time;
    });
    
    // Rotar ligeramente el grupo para añadir dinamismo
    this.group.rotation.y += deltaTime * 0.05;
  }

  public getObject3D(): THREE.Object3D {
    return this.group;
  }

  public addToScene(scene: THREE.Scene, position?: THREE.Vector3): void {
    if (position) {
      this.group.position.copy(position);
    }
    scene.add(this.group);
  }

  public removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.group);
  }

  public dispose(): void {
    // Limpiar geometrías de círculos concéntricos
    this.concentricRings.forEach(ring => {
      ring.geometry.dispose();
      (ring.material as THREE.Material).dispose();
    });
    
    // Remover del grupo
    this.group.clear();
  }

  public setEnabled(enabled: boolean): void {
    this.group.visible = enabled;
  }

  public updateParams(newParams: Partial<RadiationRingsParams>): void {
    Object.assign(this.params, newParams);
    
    // Actualizar uniformes
    if (newParams.color) {
      const color = new THREE.Color(newParams.color[0], newParams.color[1], newParams.color[2]);
      this.concentricRings.forEach(ring => {
        const material = ring.material as THREE.ShaderMaterial;
        material.uniforms.color.value = color;
      });
    }
    
    if (newParams.expansionSpeed !== undefined) {
      this.concentricRings.forEach(ring => {
        const material = ring.material as THREE.ShaderMaterial;
        material.uniforms.expansionSpeed.value = newParams.expansionSpeed;
      });
    }
    
    if (newParams.waveIntensity !== undefined) {
      this.concentricRings.forEach(ring => {
        const material = ring.material as THREE.ShaderMaterial;
        material.uniforms.waveIntensity.value = newParams.waveIntensity;
      });
    }
    
    if (newParams.glowIntensity !== undefined) {
      this.concentricRings.forEach(ring => {
        const material = ring.material as THREE.ShaderMaterial;
        material.uniforms.glowIntensity.value = newParams.glowIntensity;
      });
    }
  }
}

/**
 * Crea un efecto de anillos de radiación desde datos de Python
 */
export function createRadiationRingsFromPythonData(
  pythonData: any,
  planetRadius: number
): RadiationRingsEffect {
  const params: RadiationRingsParams = {
    seed: pythonData.seed || Math.floor(Math.random() * 1000000),
    color: pythonData.color || [0.3, 1.0, 0.2],
    ringCount: pythonData.ring_count || 10,
    expansionSpeed: pythonData.expansion_speed || 2.5,
    waveIntensity: pythonData.wave_intensity || 0.85,
    maxRadius: pythonData.max_radius || planetRadius * 2.8,
    glowIntensity: pythonData.glow_intensity || 1.3
  };

  return new RadiationRingsEffect(planetRadius, params);
}