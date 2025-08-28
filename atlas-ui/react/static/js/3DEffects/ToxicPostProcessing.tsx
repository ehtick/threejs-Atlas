/**
 * Toxic Planet Post-Processing Effect
 * 
 * Añade efectos de post-procesamiento específicos para planetas tóxicos:
 * - Bloom para resaltar la iluminación
 * - Godrays para simular rayos de luz a través de gases
 * - Chromatic aberration para sensación irreal de gases venenosos
 */

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime";
import { SeededRandom } from "../Utils/SeededRandom";

export interface ToxicPostProcessingParams {
  bloomStrength?: number;
  bloomRadius?: number;
  bloomThreshold?: number;
  chromaticAberrationIntensity?: number;
  godrayIntensity?: number;
  toxicTint?: THREE.Color;
  seed?: number;
  cosmicOriginTime?: number;
}

/**
 * Shader para chromatic aberration con tinte tóxico
 */
const ToxicChromaticAberrationShader = {
  uniforms: {
    tDiffuse: { value: null },
    uIntensity: { value: 0.005 },
    uToxicTint: { value: new THREE.Color(0.5, 0.0, 0.8) },
    uTime: { value: 0.0 },
  },

  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float uIntensity;
    uniform vec3 uToxicTint;
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vec2 center = vec2(0.5);
      vec2 direction = normalize(vUv - center);
      float distance = length(vUv - center);
      
      // Aberración cromática dinámica
      float aberration = uIntensity * distance * distance;
      
      // Modular la aberración con el tiempo para efecto orgánico
      float pulse = sin(uTime * 0.5) * 0.3 + 0.7;
      aberration *= pulse;
      
      // Offset para cada canal de color
      vec2 offsetR = direction * aberration * 1.2;
      vec2 offsetG = direction * aberration * 0.8;
      vec2 offsetB = direction * aberration * 1.5;
      
      // Samplear cada canal con su offset
      float r = texture2D(tDiffuse, vUv + offsetR).r;
      float g = texture2D(tDiffuse, vUv + offsetG).g;
      float b = texture2D(tDiffuse, vUv + offsetB).b;
      
      vec3 color = vec3(r, g, b);
      
      // Aplicar tinte tóxico sutil en las áreas más brillantes
      float brightness = dot(color, vec3(0.299, 0.587, 0.114));
      float toxicMix = smoothstep(0.3, 0.8, brightness) * 0.15;
      color = mix(color, color * uToxicTint, toxicMix);
      
      // Efecto de "breathing" tóxico
      float breathing = sin(uTime * 1.2) * 0.05 + 1.0;
      color *= breathing;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

/**
 * Shader para godrays tóxicos
 */
const ToxicGodrayShader = {
  uniforms: {
    tDiffuse: { value: null },
    uLightPosition: { value: new THREE.Vector2(0.5, 0.5) },
    uIntensity: { value: 0.3 },
    uSamples: { value: 64 },
    uDecay: { value: 0.96 },
    uWeight: { value: 0.4 },
    uToxicColor: { value: new THREE.Color(0.6, 0.0, 0.8) },
    uTime: { value: 0.0 },
  },

  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 uLightPosition;
    uniform float uIntensity;
    uniform int uSamples;
    uniform float uDecay;
    uniform float uWeight;
    uniform vec3 uToxicColor;
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      
      // Vector hacia la fuente de luz
      vec2 deltaTextCoord = (vUv - uLightPosition);
      deltaTextCoord *= 1.0 / float(uSamples) * 0.5;
      
      float illuminationDecay = 1.0;
      vec2 textCord = vUv;
      
      // Acumular muestras para el efecto godray
      vec3 godrayColor = vec3(0.0);
      for (int i = 0; i < 64; i++) {
        if (i >= uSamples) break;
        
        textCord -= deltaTextCoord;
        vec4 texSample = texture2D(tDiffuse, textCord);
        
        // Solo considerar píxeles brillantes para los godrays
        float brightness = dot(texSample.rgb, vec3(0.299, 0.587, 0.114));
        brightness = smoothstep(0.4, 1.0, brightness);
        
        texSample.rgb *= illuminationDecay * uWeight * brightness;
        godrayColor += texSample.rgb;
        illuminationDecay *= uDecay;
      }
      
      // Modular intensidad con el tiempo para efecto orgánico
      float pulse = sin(uTime * 0.8) * 0.2 + 0.8;
      godrayColor *= uIntensity * pulse;
      
      // Mezclar con color tóxico
      godrayColor = mix(godrayColor, godrayColor * uToxicColor, 0.6);
      
      gl_FragColor = vec4(color.rgb + godrayColor, color.a);
    }
  `
};

/**
 * Efecto de post-procesamiento para planetas tóxicos
 */
export class ToxicPostProcessingEffect {
  private composer: EffectComposer;
  private bloomPass: UnrealBloomPass;
  private chromaticAberrationPass: ShaderPass;
  private godrayPass: ShaderPass;
  private renderPass: RenderPass;
  private planetRadius: number;
  private rng: SeededRandom;
  private startTime: number;
  private timeSpeed: number;

  // Parámetros procedurales únicos por planeta
  private bloomVariation: number;
  private chromaticVariation: number;
  private godrayVariation: number;
  private toxicTint: THREE.Color;

  constructor(
    scene: THREE.Scene, 
    camera: THREE.Camera, 
    renderer: THREE.WebGLRenderer,
    planetRadius: number, 
    params: ToxicPostProcessingParams = {}
  ) {
    this.planetRadius = planetRadius;
    
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);
    
    // Parámetros de tiempo procedural
    this.startTime = this.rng.uniform(0, 1000);
    this.timeSpeed = this.rng.uniform(0.8, 1.5);

    // Generar variaciones procedurales basadas en semilla
    this.bloomVariation = this.rng.uniform(0.7, 1.3);
    this.chromaticVariation = this.rng.uniform(0.5, 1.5);
    this.godrayVariation = this.rng.uniform(0.6, 1.2);

    // Color tóxico procedural
    const toxicHue = this.rng.uniform(0.7, 0.9); // Púrpura a magenta
    const toxicSaturation = this.rng.uniform(0.8, 1.0);
    const toxicBrightness = this.rng.uniform(0.3, 0.6);
    this.toxicTint = new THREE.Color().setHSL(toxicHue, toxicSaturation, toxicBrightness);

    // Inicializar composer
    this.composer = new EffectComposer(renderer);

    // Pass de renderizado base
    this.renderPass = new RenderPass(scene, camera);
    this.composer.addPass(this.renderPass);

    // Pass de bloom con parámetros tóxicos más sutiles
    const bloomStrength = (params.bloomStrength || 0.4) * this.bloomVariation; // Reducido de 1.2 a 0.4
    const bloomRadius = params.bloomRadius || 0.6; // Reducido de 0.8 a 0.6
    const bloomThreshold = params.bloomThreshold || 0.3; // Aumentado de 0.1 a 0.3 para ser más selectivo
    
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      bloomStrength,
      bloomRadius,
      bloomThreshold
    );
    this.composer.addPass(this.bloomPass);

    // Pass de godrays con intensidad muy reducida
    this.godrayPass = new ShaderPass(ToxicGodrayShader);
    this.godrayPass.uniforms.uIntensity.value = (params.godrayIntensity || 0.08) * this.godrayVariation; // Reducido de 0.3 a 0.08
    this.godrayPass.uniforms.uToxicColor.value = this.toxicTint;
    this.composer.addPass(this.godrayPass);

    // Pass de chromatic aberration más sutil
    this.chromaticAberrationPass = new ShaderPass(ToxicChromaticAberrationShader);
    this.chromaticAberrationPass.uniforms.uIntensity.value = (params.chromaticAberrationIntensity || 0.002) * this.chromaticVariation; // Reducido de 0.005 a 0.002
    this.chromaticAberrationPass.uniforms.uToxicTint.value = this.toxicTint;
    this.composer.addPass(this.chromaticAberrationPass);

    // El último pass debe renderizar a pantalla
    this.chromaticAberrationPass.renderToScreen = true;
  }

  update(_deltaTime: number = 0.016): void {
    // Tiempo procedural determinista
    const cosmicOriginTime = DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.timeSpeed, this.startTime);

    // Actualizar uniforms de tiempo
    this.chromaticAberrationPass.uniforms.uTime.value = currentTime;
    this.godrayPass.uniforms.uTime.value = currentTime;

    // Modular efectos con el tiempo para mayor dinamismo (más sutil)
    const breathingCycle = Math.sin(currentTime * 0.3) * 0.1 + 1.0; // Reducido de 0.2 a 0.1
    const pulseCycle = Math.sin(currentTime * 0.7) * 0.05 + 1.0; // Reducido de 0.1 a 0.05

    // Modular bloom dinámicamente con valores más bajos
    this.bloomPass.strength = (0.4 * this.bloomVariation) * breathingCycle; // Cambiado de 1.2 a 0.4
    
    // Modular aberración cromática con intensidad reducida
    this.chromaticAberrationPass.uniforms.uIntensity.value = (0.002 * this.chromaticVariation) * pulseCycle; // Cambiado de 0.005 a 0.002
  }

  updateLightPosition(lightPosition: THREE.Vector3, camera: THREE.Camera): void {
    // Convertir posición 3D de luz a coordenadas de pantalla para godrays
    const screenPosition = lightPosition.clone().project(camera);
    
    // Normalizar a coordenadas UV (0-1)
    const uv = new THREE.Vector2(
      (screenPosition.x + 1) / 2,
      (screenPosition.y + 1) / 2
    );

    this.godrayPass.uniforms.uLightPosition.value = uv;
  }

  render(): void {
    this.composer.render();
  }

  setSize(width: number, height: number): void {
    this.composer.setSize(width, height);
  }

  dispose(): void {
    this.composer.dispose();
    this.bloomPass.dispose();
    this.chromaticAberrationPass.dispose();
    this.godrayPass.dispose();
  }
}

/**
 * Función de utilidad para crear el efecto desde datos de Python
 */
export function createToxicPostProcessingFromPythonData(
  scene: THREE.Scene,
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer,
  planetRadius: number,
  surfaceData: any,
  globalSeed?: number
): ToxicPostProcessingEffect | null {
  // Solo aplicar a planetas tóxicos
  if (!surfaceData || !surfaceData.planet_type || surfaceData.planet_type !== "toxic") {
    return null;
  }

  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  
  // Parámetros basados en intensidad tóxica
  const toxicIntensity = surfaceData.toxic_intensity || 0.7;
  const atmosphereThickness = surfaceData.atmosphere_thickness || 0.5;

  const bloomStrength = 0.3 + (toxicIntensity * 0.2); // Reducido significativamente
  const chromaticIntensity = 0.001 + (toxicIntensity * 0.002); // Muy sutil
  const godrayIntensity = 0.05 + (atmosphereThickness * 0.08); // Mucho más sutil

  return new ToxicPostProcessingEffect(scene, camera, renderer, planetRadius, {
    bloomStrength,
    bloomRadius: 0.6, // Reducido de 0.9 a 0.6
    bloomThreshold: 0.4, // Aumentado de 0.05 a 0.4 para ser muy selectivo
    chromaticAberrationIntensity: chromaticIntensity,
    godrayIntensity: godrayIntensity,
    seed: seed + 20000,
  });
}