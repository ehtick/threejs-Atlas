/**
 * Anomaly Glitch Field Effect - Campo de interferencia electrónica
 *
 * Simula interferencias electrónicas y digitales como un holograma defectuoso
 * o sistema de computadora averiado. Incluye líneas de circuito, píxeles,
 * scanlines de CRT y parpadeos de pantalla para un look cyber-tech evidente.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

export interface AnomalyGlitchFieldParams {
  intensity?: number;
  glitchFrequency?: number;
  distortionScale?: number;
  colorShift?: number;
  seed?: number;
  timeSpeed?: number;
  pulseAmplitude?: number;
}

const PROCEDURAL_RANGES = {
  INTENSITY: { min: 0.4, max: 0.7 },
  GLITCH_FREQUENCY: { min: 2.0, max: 5.0 },
  DISTORTION_SCALE: { min: 0.02, max: 0.08 },
  COLOR_SHIFT: { min: 0.2, max: 0.5 },
  TIME_SPEED: { min: 0.5, max: 1.5 },
  PULSE_AMPLITUDE: { min: 0.1, max: 0.3 }
};

export class AnomalyGlitchFieldEffect {
  private glitchSystem: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: AnomalyGlitchFieldParams;
  private startTime: number;
  private visibilityInterval: number;
  private isVisible: boolean = true;

  private static readonly vertexShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float intensity;
    uniform float distortionScale;
    
    // Función de ruido para distorsión
    float noise(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
    }
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Distorsión glitch procedural más sutil
      vec3 pos = position;
      float n1 = noise(pos * 2.0 + time * 0.8) - 0.5;
      float n2 = noise(pos * 4.0 + time * 0.6) - 0.5;
      
      pos += n1 * distortionScale * intensity * 0.05;
      pos += n2 * distortionScale * intensity * 0.025;
      
      // Ondulaciones suaves en lugar de pulsos
      float wave = sin(time * 1.2) * 0.03 + 0.97;
      pos *= wave;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  private static readonly fragmentShader = `
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float intensity;
    uniform float glitchFrequency;
    uniform float colorShift;
    uniform float pulseAmplitude;
    
    // Función de ruido mejorada
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
    
    void main() {
      // Coordenadas para efectos glitch más lentos
      vec2 glitchUv = vUv + time * 0.03;
      
      // Patrones de interferencia sutiles
      float interference1 = noise(glitchUv * glitchFrequency);
      float interference2 = noise(glitchUv * glitchFrequency * 1.5 + time * 0.5);
      float interference3 = noise(glitchUv * glitchFrequency * 0.7 - time * 0.3);
      
      // Combinación de interferencias suavizada
      float totalInterference = (interference1 + interference2 + interference3) / 3.0;
      totalInterference = smoothstep(0.3, 0.7, totalInterference);
      
      // Mantener color púrpura original pero con efectos electrónicos
      vec3 baseColor = vec3(0.4, 0.1, 0.6); // Púrpura original
      
      // Efectos electrónicos digitales con púrpura
      float colorOffset = totalInterference * colorShift;
      
      // Simulación de circuitos eléctricos en tonos púrpura ultra rápidos
      float electricPattern = step(0.6, noise(vUv * 15.0 + time * 3.0));
      vec3 purpleElectric = vec3(0.6, 0.2, 0.9); // Púrpura más brillante
      vec3 purpleBright = vec3(0.8, 0.4, 1.0);   // Púrpura muy brillante
      
      vec3 glitchColor = mix(baseColor, purpleElectric, electricPattern);
      
      // Líneas de circuito en púrpura brillante
      float circuitLines = step(0.95, sin(vUv.x * 40.0)) + step(0.95, sin(vUv.y * 40.0));
      glitchColor = mix(glitchColor, purpleBright, circuitLines * 0.8);
      
      // Pulso electrónico más evidente
      float electronPulse = sin(time * 2.0) * 0.3 + 0.7;
      glitchColor *= electronPulse;
      
      // Líneas de escaneo de monitor CRT
      float scanlines = sin(vUv.y * 100.0) * 0.1 + 0.9;
      glitchColor *= scanlines;
      
      // Pixelación digital ultra densa y rápida
      vec2 pixelGrid = floor(vUv * 40.0) / 40.0;  // Más cuadraditos
      float pixelNoise = random(pixelGrid + floor(time * 15.0));  // Mucho más rápido
      
      // Efecto de interferencia electrónica en púrpura con más actividad
      if (pixelNoise > 0.80) {  // Más píxeles activos
        glitchColor = vec3(1.0, 0.8, 1.0); // Píxeles púrpura brillante
      } else if (pixelNoise > 0.65) {  // Más rango de actividad
        glitchColor = mix(glitchColor, vec3(0.9, 0.5, 1.0), 0.8); // Púrpura intenso
      } else if (pixelNoise > 0.55) {
        glitchColor = mix(glitchColor, vec3(0.7, 0.3, 0.9), 0.4); // Púrpura medio
      }
      
      // Efecto de parpadeo de pantalla
      float screenFlicker = sin(time * 25.0) * 0.05 + 0.95;
      glitchColor *= screenFlicker;
      
      // Transparencia con efecto de pantalla
      float alpha = intensity * (totalInterference * 0.6 + 0.4);
      alpha *= (1.0 - length(vUv - 0.5) * 0.8); // Borde más suave
      
      // Aumento de alpha en líneas de circuito
      alpha += circuitLines * 0.3;
      
      gl_FragColor = vec4(glitchColor, alpha);
    }
  `;

  constructor(planetRadius: number, params: AnomalyGlitchFieldParams = {}) {
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    this.startTime = (seed % 10000) / 1000;
    
    this.params = {
      intensity: params.intensity || rng.uniform(PROCEDURAL_RANGES.INTENSITY.min, PROCEDURAL_RANGES.INTENSITY.max),
      glitchFrequency: params.glitchFrequency || rng.uniform(PROCEDURAL_RANGES.GLITCH_FREQUENCY.min, PROCEDURAL_RANGES.GLITCH_FREQUENCY.max),
      distortionScale: params.distortionScale || rng.uniform(PROCEDURAL_RANGES.DISTORTION_SCALE.min, PROCEDURAL_RANGES.DISTORTION_SCALE.max),
      colorShift: params.colorShift || rng.uniform(PROCEDURAL_RANGES.COLOR_SHIFT.min, PROCEDURAL_RANGES.COLOR_SHIFT.max),
      timeSpeed: params.timeSpeed || rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
      pulseAmplitude: params.pulseAmplitude || rng.uniform(PROCEDURAL_RANGES.PULSE_AMPLITUDE.min, PROCEDURAL_RANGES.PULSE_AMPLITUDE.max),
      seed: seed,
    };

    // Intervalo de visibilidad entre 3-8 segundos
    this.visibilityInterval = rng.uniform(3.0, 8.0);

    this.material = this.createMaterial();
    const geometry = new THREE.SphereGeometry(planetRadius * 1.2, 32, 32);
    this.glitchSystem = new THREE.Mesh(geometry, this.material);
  }

  private createMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: AnomalyGlitchFieldEffect.vertexShader,
      fragmentShader: AnomalyGlitchFieldEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        intensity: { value: this.params.intensity },
        glitchFrequency: { value: this.params.glitchFrequency },
        distortionScale: { value: this.params.distortionScale },
        colorShift: { value: this.params.colorShift },
        pulseAmplitude: { value: this.params.pulseAmplitude },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.glitchSystem.position.copy(planetPosition);
    }
    scene.add(this.glitchSystem);
  }

  update(deltaTime: number): void {
    const rawTime = this.startTime + (Date.now() / 1000) * this.params.timeSpeed!;
    const currentTime = rawTime % 1000;
    
    this.material.uniforms.time.value = currentTime;
    
    // Sistema de aparición/desaparición
    const visibilityTime = currentTime % (this.visibilityInterval * 2);
    const shouldBeVisible = visibilityTime < this.visibilityInterval;
    
    if (shouldBeVisible !== this.isVisible) {
      this.isVisible = shouldBeVisible;
      if (this.isVisible) {
        console.log("💜 Glitch field appearing!");
      } else {
        console.log("👻 Glitch field disappearing!");
      }
    }
    
    // Fade suave entre visible/invisible
    const targetOpacity = this.isVisible ? 1.0 : 0.0;
    const fadeSpeed = 2.0; // Velocidad de fade
    const currentOpacity = this.material.uniforms.intensity.value / this.params.intensity!;
    const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * deltaTime * fadeSpeed;
    this.material.uniforms.intensity.value = newOpacity * this.params.intensity!;
    
    // Rotación mucho más lenta y suave
    this.glitchSystem.rotation.x += deltaTime * 0.05;
    this.glitchSystem.rotation.y += deltaTime * 0.03;
    this.glitchSystem.rotation.z += deltaTime * 0.02;
  }

  getObject3D(): THREE.Mesh {
    return this.glitchSystem;
  }

  dispose(): void {
    this.glitchSystem.geometry.dispose();
    this.material.dispose();
  }
}

export function createAnomalyGlitchFieldFromPythonData(planetRadius: number, anomalyData: any, globalSeed?: number): AnomalyGlitchFieldEffect {
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 5000);
  
  const params: AnomalyGlitchFieldParams = {
    intensity: rng.uniform(PROCEDURAL_RANGES.INTENSITY.min, PROCEDURAL_RANGES.INTENSITY.max),
    glitchFrequency: rng.uniform(PROCEDURAL_RANGES.GLITCH_FREQUENCY.min, PROCEDURAL_RANGES.GLITCH_FREQUENCY.max),
    distortionScale: rng.uniform(PROCEDURAL_RANGES.DISTORTION_SCALE.min, PROCEDURAL_RANGES.DISTORTION_SCALE.max),
    colorShift: rng.uniform(PROCEDURAL_RANGES.COLOR_SHIFT.min, PROCEDURAL_RANGES.COLOR_SHIFT.max),
    timeSpeed: rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
    pulseAmplitude: rng.uniform(PROCEDURAL_RANGES.PULSE_AMPLITUDE.min, PROCEDURAL_RANGES.PULSE_AMPLITUDE.max),
    seed,
  };

  return new AnomalyGlitchFieldEffect(planetRadius, params);
}