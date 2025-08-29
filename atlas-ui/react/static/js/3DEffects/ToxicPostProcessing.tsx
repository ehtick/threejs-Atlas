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
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime.tsx";
import { SeededRandom } from "../Utils/SeededRandom.tsx";

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
 * Rangos procedurales para efectos de post-procesamiento tóxico
 * Permite variación significativa entre planetas
 */
const PROCEDURAL_RANGES = {
  bloomStrength: {
    min: 0.3,    // Bloom sutil
    max: 0.6,    // Bloom intenso (2x)
  },
  bloomRadius: {
    min: 0.4,    // Radio concentrado
    max: 0.8,    // Radio amplio (2x)
  },
  bloomThreshold: {
    min: 0.2,    // Más selectivo
    max: 0.5,    // Muy selectivo
  },
  godrayIntensity: {
    min: 0.05,   // Godrays muy sutiles
    max: 0.16,   // Godrays notables (3.2x)
  },
  chromaticAberrationIntensity: {
    min: 0.001,  // Aberración apenas perceptible
    max: 0.004,  // Aberración notable (4x)
  },
  timeSpeed: {
    min: 0.6,    // Animaciones lentas
    max: 1.8,    // Animaciones rápidas (3x)
  },
  breathingAmplitude: {
    min: 0.05,   // Respiración sutil
    max: 0.2,    // Respiración intensa (4x)
  },
  pulseAmplitude: {
    min: 0.02,   // Pulso sutil
    max: 0.1,    // Pulso intenso (5x)
  }
} as const;

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
  private proceduralParams: {
    bloomStrength: number;
    bloomRadius: number;
    bloomThreshold: number;
    godrayIntensity: number;
    chromaticAberrationIntensity: number;
    timeSpeed: number;
    breathingAmplitude: number;
    pulseAmplitude: number;
  };
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

    // Generar parámetros procedurales usando los rangos definidos
    this.proceduralParams = {
      bloomStrength: this.rng.uniform(PROCEDURAL_RANGES.bloomStrength.min, PROCEDURAL_RANGES.bloomStrength.max),
      bloomRadius: this.rng.uniform(PROCEDURAL_RANGES.bloomRadius.min, PROCEDURAL_RANGES.bloomRadius.max),
      bloomThreshold: this.rng.uniform(PROCEDURAL_RANGES.bloomThreshold.min, PROCEDURAL_RANGES.bloomThreshold.max),
      godrayIntensity: this.rng.uniform(PROCEDURAL_RANGES.godrayIntensity.min, PROCEDURAL_RANGES.godrayIntensity.max),
      chromaticAberrationIntensity: this.rng.uniform(PROCEDURAL_RANGES.chromaticAberrationIntensity.min, PROCEDURAL_RANGES.chromaticAberrationIntensity.max),
      timeSpeed: this.rng.uniform(PROCEDURAL_RANGES.timeSpeed.min, PROCEDURAL_RANGES.timeSpeed.max),
      breathingAmplitude: this.rng.uniform(PROCEDURAL_RANGES.breathingAmplitude.min, PROCEDURAL_RANGES.breathingAmplitude.max),
      pulseAmplitude: this.rng.uniform(PROCEDURAL_RANGES.pulseAmplitude.min, PROCEDURAL_RANGES.pulseAmplitude.max),
    };

    // Color tóxico procedural con mayor variación
    const toxicHue = this.rng.uniform(0.65, 0.95); // Mayor rango de púrpura a magenta
    const toxicSaturation = this.rng.uniform(0.7, 1.0);
    const toxicBrightness = this.rng.uniform(0.25, 0.7);
    this.toxicTint = new THREE.Color().setHSL(toxicHue, toxicSaturation, toxicBrightness);

    // Inicializar composer
    this.composer = new EffectComposer(renderer);

    // Pass de renderizado base
    this.renderPass = new RenderPass(scene, camera);
    this.composer.addPass(this.renderPass);

    // Pass de bloom usando parámetros procedurales
    const bloomStrength = params.bloomStrength || this.proceduralParams.bloomStrength;
    const bloomRadius = params.bloomRadius || this.proceduralParams.bloomRadius;
    const bloomThreshold = params.bloomThreshold || this.proceduralParams.bloomThreshold;
    
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      bloomStrength,
      bloomRadius,
      bloomThreshold
    );
    this.composer.addPass(this.bloomPass);

    // Pass de godrays usando parámetros procedurales
    this.godrayPass = new ShaderPass(ToxicGodrayShader);
    this.godrayPass.uniforms.uIntensity.value = params.godrayIntensity || this.proceduralParams.godrayIntensity;
    this.godrayPass.uniforms.uToxicColor.value = this.toxicTint;
    this.composer.addPass(this.godrayPass);

    // Pass de chromatic aberration usando parámetros procedurales
    this.chromaticAberrationPass = new ShaderPass(ToxicChromaticAberrationShader);
    this.chromaticAberrationPass.uniforms.uIntensity.value = params.chromaticAberrationIntensity || this.proceduralParams.chromaticAberrationIntensity;
    this.chromaticAberrationPass.uniforms.uToxicTint.value = this.toxicTint;
    this.composer.addPass(this.chromaticAberrationPass);

    // El último pass debe renderizar a pantalla
    this.chromaticAberrationPass.renderToScreen = true;
  }

  update(_deltaTime: number = 0.016): void {
    // Tiempo procedural determinista usando parámetros procedurales
    const cosmicOriginTime = DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.proceduralParams.timeSpeed, this.startTime);

    // Actualizar uniforms de tiempo
    this.chromaticAberrationPass.uniforms.uTime.value = currentTime;
    this.godrayPass.uniforms.uTime.value = currentTime;

    // Modular efectos con el tiempo usando amplitudes procedurales
    const breathingCycle = Math.sin(currentTime * 0.3) * this.proceduralParams.breathingAmplitude + 1.0;
    const pulseCycle = Math.sin(currentTime * 0.7) * this.proceduralParams.pulseAmplitude + 1.0;

    // Modular bloom dinámicamente usando base procedural
    this.bloomPass.strength = this.proceduralParams.bloomStrength * breathingCycle;
    
    // Modular aberración cromática usando base procedural
    this.chromaticAberrationPass.uniforms.uIntensity.value = this.proceduralParams.chromaticAberrationIntensity * pulseCycle;
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
  const rng = new SeededRandom(seed + 20000);
  
  // Parámetros basados en intensidad tóxica (si están disponibles)
  const toxicIntensity = surfaceData.toxic_intensity || rng.uniform(0.4, 1.0);
  const atmosphereThickness = surfaceData.atmosphere_thickness || rng.uniform(0.3, 0.8);

  // Usar rangos procedurales con modificadores basados en datos del planeta
  const intensityMultiplier = 0.7 + (toxicIntensity * 0.6); // 0.7 to 1.3 multiplier
  const atmosphereMultiplier = 0.8 + (atmosphereThickness * 0.4); // 0.8 to 1.2 multiplier

  // Calcular parámetros dentro de los rangos, pero influenciados por datos del planeta
  const bloomStrength = rng.uniform(
    PROCEDURAL_RANGES.bloomStrength.min * intensityMultiplier,
    PROCEDURAL_RANGES.bloomStrength.max * intensityMultiplier
  );

  const bloomRadius = rng.uniform(
    PROCEDURAL_RANGES.bloomRadius.min,
    PROCEDURAL_RANGES.bloomRadius.max
  );

  const bloomThreshold = rng.uniform(
    PROCEDURAL_RANGES.bloomThreshold.min,
    PROCEDURAL_RANGES.bloomThreshold.max
  );

  const chromaticIntensity = rng.uniform(
    PROCEDURAL_RANGES.chromaticAberrationIntensity.min * intensityMultiplier,
    PROCEDURAL_RANGES.chromaticAberrationIntensity.max * intensityMultiplier
  );

  const godrayIntensity = rng.uniform(
    PROCEDURAL_RANGES.godrayIntensity.min * atmosphereMultiplier,
    PROCEDURAL_RANGES.godrayIntensity.max * atmosphereMultiplier
  );

  return new ToxicPostProcessingEffect(scene, camera, renderer, planetRadius, {
    bloomStrength,
    bloomRadius,
    bloomThreshold,
    chromaticAberrationIntensity: chromaticIntensity,
    godrayIntensity: godrayIntensity,
    seed: seed + 20000,
  });
}