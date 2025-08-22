/**
 * Anomaly Void Sphere Effect - Esferas de vacío dimensional
 *
 * Crea esferas de antimateria o vacío cuántico que absorben luz y materia,
 * generando efectos visuales de inversión y distorsión gravitacional.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface AnomalyVoidSphereParams {
  sphereCount?: number;
  voidIntensity?: number;
  absorptionRate?: number;
  sphereSize?: number;
  seed?: number;
  timeSpeed?: number;
  gravitationalPull?: number;
}

const PROCEDURAL_RANGES = {
  SPHERE_COUNT: { min: 2, max: 6 },
  VOID_INTENSITY: { min: 0.6, max: 1.0 },
  ABSORPTION_RATE: { min: 0.3, max: 0.8 },
  SPHERE_SIZE: { min: 0.3, max: 0.8 },
  TIME_SPEED: { min: 0.2, max: 1.5 },
  GRAVITATIONAL_PULL: { min: 0.1, max: 0.5 }
};

export class AnomalyVoidSphereEffect {
  private voidSystem: THREE.Group;
  private voidSpheres: THREE.Mesh[] = [];
  private params: AnomalyVoidSphereParams;
  private sphereCount: number;
  private startTime: number;

  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vDistFromCenter;
    
    uniform float time;
    uniform float gravitationalPull;
    uniform float absorptionRate;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Distancia desde el centro de la esfera de vacío
      vDistFromCenter = length(position);
      
      // Efecto gravitacional - vertices son atraídos hacia el centro
      vec3 pos = position;
      float gravitationalEffect = gravitationalPull * (1.0 - vDistFromCenter);
      
      // Contracción hacia el centro del vacío
      pos *= 1.0 - gravitationalEffect * sin(time * 2.0) * 0.1;
      
      // Ondulación del espacio-tiempo
      float spaceTimeWave = sin(vDistFromCenter * 10.0 - time * 3.0) * 0.05;
      pos += normalize(pos) * spaceTimeWave * absorptionRate;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  private static readonly fragmentShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vDistFromCenter;
    
    uniform float time;
    uniform float voidIntensity;
    uniform float absorptionRate;
    uniform float gravitationalPull;
    
    // Función de inversión de color para efecto de antimateria
    vec3 invertColor(vec3 color) {
      return vec3(1.0) - color;
    }
    
    // Simular absorción de luz
    float lightAbsorption(float dist, float intensity) {
      return 1.0 - exp(-dist * intensity);
    }
    
    void main() {
      // Coordenadas esféricas para efectos de vacío
      float distFromCenter = vDistFromCenter;
      
      // Centro del vacío - completamente negro
      float voidCore = 1.0 - smoothstep(0.0, 0.3, distFromCenter);
      
      // Anillo de absorción - donde la materia es destruida
      float absorptionRing = smoothstep(0.2, 0.6, distFromCenter) * 
                            (1.0 - smoothstep(0.6, 1.0, distFromCenter));
      
      // Borde de distorsión - efectos visuales extraños
      float distortionEdge = smoothstep(0.7, 1.0, distFromCenter);
      
      // Color base del vacío (negro profundo con tintes púrpura)
      vec3 voidColor = vec3(0.1, 0.0, 0.2);
      
      // Efectos de absorción de luz
      if (voidCore > 0.1) {
        // Centro completamente negro
        voidColor = vec3(0.0);
      } else if (absorptionRing > 0.1) {
        // Anillo de absorción - efectos de antimateria
        float absorption = lightAbsorption(distFromCenter, absorptionRate);
        voidColor = invertColor(voidColor) * absorption;
        
        // Efectos de energía siendo absorbida
        float energySpiral = sin(distFromCenter * 20.0 + time * 5.0) * 0.5 + 0.5;
        voidColor += vec3(0.5, 0.0, 0.5) * energySpiral * 0.3;
        
        // Líneas de fuerza gravitacional
        float forceLines = abs(sin(atan(vUv.y, vUv.x) * 8.0 + time * 2.0));
        voidColor += vec3(0.3, 0.0, 0.6) * forceLines * 0.2;
      } else if (distortionEdge > 0.1) {
        // Borde de distorsión - efectos visuales extraños
        vec3 distortedColor = vec3(0.8, 0.2, 1.0);
        
        // Ondulaciones en el borde
        float edgeWave = sin(distFromCenter * 15.0 + time * 3.0) * 0.5 + 0.5;
        distortedColor *= edgeWave;
        
        // Interferencia cuántica en el borde
        float interference = fract(sin(dot(vUv, vec2(12.9898, 78.233)) + time) * 43758.5453);
        if (interference > 0.9) {
          distortedColor = vec3(1.0, 1.0, 1.0); // Destello cuántico
        }
        
        voidColor = mix(voidColor, distortedColor, distortionEdge);
      }
      
      // Pulso de vacío - el vacío "respira"
      float voidPulse = sin(time * 1.5) * 0.2 + 0.8;
      voidColor *= voidPulse;
      
      // Efectos de lente gravitacional en los bordes
      if (distFromCenter > 0.8) {
        float lensing = sin(time * 4.0 + distFromCenter * 20.0) * 0.3;
        voidColor.rgb += lensing;
      }
      
      // Alpha basada en la intensidad del vacío y distancia
      float alpha = voidIntensity;
      
      if (voidCore > 0.1) {
        alpha = 1.0; // Centro completamente opaco
      } else {
        alpha *= (absorptionRing + distortionEdge * 0.7);
      }
      
      // Efecto de horizonte de eventos
      float eventHorizon = smoothstep(0.9, 1.0, distFromCenter);
      alpha *= (1.0 - eventHorizon * 0.8);
      
      gl_FragColor = vec4(voidColor, alpha);
    }
  `;

  constructor(planetRadius: number, params: AnomalyVoidSphereParams = {}) {
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    this.startTime = (seed % 10000) / 1000;
    
    this.params = {
      sphereCount: params.sphereCount || Math.floor(rng.uniform(PROCEDURAL_RANGES.SPHERE_COUNT.min, PROCEDURAL_RANGES.SPHERE_COUNT.max)),
      voidIntensity: params.voidIntensity || rng.uniform(PROCEDURAL_RANGES.VOID_INTENSITY.min, PROCEDURAL_RANGES.VOID_INTENSITY.max),
      absorptionRate: params.absorptionRate || rng.uniform(PROCEDURAL_RANGES.ABSORPTION_RATE.min, PROCEDURAL_RANGES.ABSORPTION_RATE.max),
      sphereSize: params.sphereSize || rng.uniform(PROCEDURAL_RANGES.SPHERE_SIZE.min, PROCEDURAL_RANGES.SPHERE_SIZE.max),
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
      gravitationalPull: params.gravitationalPull || rng.uniform(PROCEDURAL_RANGES.GRAVITATIONAL_PULL.min, PROCEDURAL_RANGES.GRAVITATIONAL_PULL.max),
      seed: seed,
    };

    this.sphereCount = this.params.sphereCount!;
    this.voidSystem = new THREE.Group();
    
    this.generateVoidSpheres(planetRadius);
    
  }

  private generateVoidSpheres(planetRadius: number): void {
    const seed = this.params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);

    for (let i = 0; i < this.sphereCount; i++) {
      // Tamaño variable para cada esfera de vacío
      const sphereSize = this.params.sphereSize! * rng.uniform(0.7, 1.4);
      
      // Geometría esférica con suficientes segmentos para efectos suaves
      const geometry = new THREE.SphereGeometry(sphereSize, 32, 32);
      
      // Material individual para cada esfera
      const material = this.createMaterial();
      
      // Crear mesh de esfera de vacío
      const voidMesh = new THREE.Mesh(geometry, material);
      
      // Posicionar esfera relativa al centro (el grupo será posicionado en addToScene)
      const distance = planetRadius * rng.uniform(1.3, 2.2);
      const position = rng.spherePosition(distance);
      voidMesh.position.copy(position);
      
      // Rotación inicial aleatoria
      voidMesh.rotation.set(
        rng.uniform(0, Math.PI * 2),
        rng.uniform(0, Math.PI * 2),
        rng.uniform(0, Math.PI * 2)
      );
      
      // Guardar datos específicos de cada esfera
      voidMesh.userData = {
        orbitSpeed: rng.uniform(0.1, 0.3),
        rotationSpeed: rng.uniform(0.05, 0.15),
        pulsePhase: rng.uniform(0, Math.PI * 2),
        initialPosition: position.clone()
      };
      
      this.voidSpheres.push(voidMesh);
      this.voidSystem.add(voidMesh);
    }
  }

  private createMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: AnomalyVoidSphereEffect.vertexShader,
      fragmentShader: AnomalyVoidSphereEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        voidIntensity: { value: this.params.voidIntensity },
        absorptionRate: { value: this.params.absorptionRate },
        gravitationalPull: { value: this.params.gravitationalPull },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.BackSide, // Renderizar desde adentro para efecto de vacío
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.voidSystem.position.copy(planetPosition);
    }
    scene.add(this.voidSystem);
  }

  update(deltaTime: number): void {
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000;
    
    // Actualizar cada esfera de vacío
    this.voidSpheres.forEach((sphere, index) => {
      const material = sphere.material as THREE.ShaderMaterial;
      material.uniforms.time.value = currentTime;
      
      const userData = sphere.userData;
      
      // Órbita errática alrededor del planeta
      const orbitAngle = currentTime * userData.orbitSpeed + index * Math.PI / 2;
      const orbitRadius = userData.initialPosition.length();
      
      sphere.position.x = Math.cos(orbitAngle) * orbitRadius;
      sphere.position.z = Math.sin(orbitAngle) * orbitRadius;
      sphere.position.y = userData.initialPosition.y + Math.sin(currentTime + userData.pulsePhase) * 0.3;
      
      // Rotación individual
      sphere.rotation.x += deltaTime * userData.rotationSpeed;
      sphere.rotation.y += deltaTime * userData.rotationSpeed * 0.7;
      sphere.rotation.z += deltaTime * userData.rotationSpeed * 1.3;
      
      // Pulsación de tamaño para simular "respiración" del vacío
      const pulseScale = 1.0 + Math.sin(currentTime * 2.0 + userData.pulsePhase) * 0.1;
      sphere.scale.setScalar(pulseScale);
    });
    
    // Rotación general del sistema
    this.voidSystem.rotation.y += deltaTime * 0.05;
  }

  getObject3D(): THREE.Group {
    return this.voidSystem;
  }

  dispose(): void {
    this.voidSpheres.forEach(sphere => {
      sphere.geometry.dispose();
      (sphere.material as THREE.ShaderMaterial).dispose();
    });
    this.voidSpheres = [];
    this.voidSystem.clear();
  }
}

export function createAnomalyVoidSphereFromPythonData(planetRadius: number, anomalyData: any, globalSeed?: number): AnomalyVoidSphereEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 8000);
  
  const params: AnomalyVoidSphereParams = {
    sphereCount: Math.floor(rng.uniform(PROCEDURAL_RANGES.SPHERE_COUNT.min, PROCEDURAL_RANGES.SPHERE_COUNT.max)),
    voidIntensity: rng.uniform(PROCEDURAL_RANGES.VOID_INTENSITY.min, PROCEDURAL_RANGES.VOID_INTENSITY.max),
    absorptionRate: rng.uniform(PROCEDURAL_RANGES.ABSORPTION_RATE.min, PROCEDURAL_RANGES.ABSORPTION_RATE.max),
    sphereSize: rng.uniform(PROCEDURAL_RANGES.SPHERE_SIZE.min, PROCEDURAL_RANGES.SPHERE_SIZE.max),
    timeSpeed: rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
    gravitationalPull: rng.uniform(PROCEDURAL_RANGES.GRAVITATIONAL_PULL.min, PROCEDURAL_RANGES.GRAVITATIONAL_PULL.max),
    seed,
  };

  return new AnomalyVoidSphereEffect(planetRadius, params);
}