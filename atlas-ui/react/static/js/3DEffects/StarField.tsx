// atlas-ui/react/static/js/3DEffects/StarField.tsx

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";
import { getAnimatedUniverseTime, getUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime.tsx";

export interface StarFieldParams {
  color?: THREE.Color | number;
  starCount?: number;
  minBrightness?: number;
  maxBrightness?: number;
  minSize?: number;
  maxSize?: number;
  distance?: number;
  seed?: number;
  twinkleSpeed?: number;
  parallaxStrength?: number;
  variableChance?: number;
  cosmicOriginTime?: number;
  timeSpeed?: number;
  orbitalParallaxStrength?: number; // How much stars shift based on orbital position
}

const PROCEDURAL_RANGES = {
  STAR_COUNT: { min: 650, max: 1500 },
  MIN_BRIGHTNESS: { min: 0.6, max: 0.8 },
  MAX_BRIGHTNESS: { min: 0.9, max: 1.0 },
  MIN_SIZE: { min: 4, max: 4.8 }, // 4x original (was 1-1.2)
  MAX_SIZE: { min: 10, max: 16.0 }, // 4x original (was 2.5-4.0)
  DISTANCE: { min: 1000, max: 1800 }, // 4x original (was 250-450)
  TWINKLE_SPEED: { min: 1.0, max: 2.0 },
  PARALLAX_STRENGTH: { min: 1.0, max: 3.0 },
  VARIABLE_CHANCE: { min: 0.002, max: 0.005 },
  ORBITAL_PARALLAX_STRENGTH: { min: 0.15, max: 0.35 }, // Subtle orbital parallax effect
};

export class StarFieldEffect {
  private starSystem: THREE.Points;
  private material: THREE.ShaderMaterial;
  private geometry: THREE.BufferGeometry;
  private params: StarFieldParams;
  private starCount: number;
  private cameraPosition: THREE.Vector3 = new THREE.Vector3();
  private lastCameraPosition: THREE.Vector3 = new THREE.Vector3();
  private startTime: number;

  private static readonly vertexShader = `
    attribute float size;
    attribute float brightness;
    attribute float twinklePhase;
    attribute float starType;
    attribute float distanceLayer;
    attribute vec3 originalPosition;

    uniform float time;
    uniform float twinkleSpeed;
    uniform vec3 cameraOffset;
    uniform float parallaxStrength;
    uniform vec3 orbitalPosition;
    uniform float orbitalParallaxStrength;

    varying float vBrightness;
    varying float vTwinkle;
    varying float vStarType;

    void main() {
      vBrightness = brightness;
      vStarType = starType;

      float baseTwinkle;
      if (starType > 0.5) {
        float pulse = sin(time * twinkleSpeed * 1.0 + twinklePhase);
        baseTwinkle = 0.2 + 0.8 * (pulse * 0.5 + 0.5);
      } else {
        float intensity = 0.05 + 0.05 * brightness;
        baseTwinkle = (1.0 - intensity) + intensity * sin(time * twinkleSpeed + twinklePhase);
      }
      vTwinkle = baseTwinkle;

      vec3 parallaxOffset = cameraOffset * parallaxStrength * (0.5 / distanceLayer);
      vec3 orbitalParallax = orbitalPosition * orbitalParallaxStrength * (1.0 / distanceLayer);

      vec3 adjustedPosition = originalPosition + parallaxOffset + orbitalParallax;

      vec4 mvPosition = modelViewMatrix * vec4(adjustedPosition, 1.0);
      gl_Position = projectionMatrix * mvPosition;

      float sizeMultiplier = starType > 0.5 ? 1.2 : 1.0;
      gl_PointSize = size * sizeMultiplier * (300.0 / -mvPosition.z);
    }
  `;

  private static readonly fragmentShader = `
    uniform vec3 starColor;
    
    varying float vBrightness;
    varying float vTwinkle;
    varying float vStarType;
    
    void main() {
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      float alpha = (1.0 - dist * 2.0) * vBrightness * vTwinkle;
      
      if (vStarType > 0.5) {
        alpha = pow(alpha, 1.0);
        alpha *= 1.5 + 1.5 * vTwinkle;
      } else {
        alpha = pow(alpha, 1.5);
        alpha *= 1.5;
      }
      
      vec3 finalColor;
      if (vStarType > 0.5) {
        vec3 variableTint = vec3(1.0, 0.6, 0.4);
        finalColor = starColor * variableTint * (0.8 + 0.4 * vTwinkle);
      } else {
        vec3 normalTint = vec3(1.0, 0.9, 0.7);
        finalColor = starColor * normalTint * (0.8 + 0.4 * vTwinkle);
      }
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  constructor(planetRadius: number, params: StarFieldParams = {}) {
    const seed = params.seed !== undefined ? params.seed : Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed + 10000);

    this.params = {
      color: params.color || new THREE.Color(0xffffff),
      starCount: params.starCount !== undefined ? params.starCount : Math.floor(rng.uniform(PROCEDURAL_RANGES.STAR_COUNT.min, PROCEDURAL_RANGES.STAR_COUNT.max)),
      minBrightness: params.minBrightness !== undefined ? params.minBrightness : rng.uniform(PROCEDURAL_RANGES.MIN_BRIGHTNESS.min, PROCEDURAL_RANGES.MIN_BRIGHTNESS.max),
      maxBrightness: params.maxBrightness !== undefined ? params.maxBrightness : rng.uniform(PROCEDURAL_RANGES.MAX_BRIGHTNESS.min, PROCEDURAL_RANGES.MAX_BRIGHTNESS.max),
      minSize: params.minSize !== undefined ? params.minSize : rng.uniform(PROCEDURAL_RANGES.MIN_SIZE.min, PROCEDURAL_RANGES.MIN_SIZE.max),
      maxSize: params.maxSize !== undefined ? params.maxSize : rng.uniform(PROCEDURAL_RANGES.MAX_SIZE.min, PROCEDURAL_RANGES.MAX_SIZE.max),
      distance: params.distance !== undefined ? params.distance : rng.uniform(PROCEDURAL_RANGES.DISTANCE.min, PROCEDURAL_RANGES.DISTANCE.max),
      seed: seed,
      twinkleSpeed: params.twinkleSpeed !== undefined ? params.twinkleSpeed : rng.uniform(PROCEDURAL_RANGES.TWINKLE_SPEED.min, PROCEDURAL_RANGES.TWINKLE_SPEED.max),
      parallaxStrength: params.parallaxStrength !== undefined ? params.parallaxStrength : rng.uniform(PROCEDURAL_RANGES.PARALLAX_STRENGTH.min, PROCEDURAL_RANGES.PARALLAX_STRENGTH.max),
      variableChance: params.variableChance !== undefined ? params.variableChance : rng.uniform(PROCEDURAL_RANGES.VARIABLE_CHANCE.min, PROCEDURAL_RANGES.VARIABLE_CHANCE.max),
      cosmicOriginTime: params.cosmicOriginTime,
      timeSpeed: params.timeSpeed !== undefined ? params.timeSpeed : 1.0,
      orbitalParallaxStrength: params.orbitalParallaxStrength !== undefined ? params.orbitalParallaxStrength : rng.uniform(PROCEDURAL_RANGES.ORBITAL_PARALLAX_STRENGTH.min, PROCEDURAL_RANGES.ORBITAL_PARALLAX_STRENGTH.max),
    };

    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    this.startTime = getUniverseTime(cosmicOriginTime);

    this.starCount = this.params.starCount!;
    this.geometry = new THREE.BufferGeometry();
    this.material = this.createMaterial();

    this.generateStars(planetRadius);
    this.starSystem = new THREE.Points(this.geometry, this.material);
  }

  private generateStars(_planetRadius: number): void {
    const positions = new Float32Array(this.starCount * 3);
    const originalPositions = new Float32Array(this.starCount * 3);
    const sizes = new Float32Array(this.starCount);
    const brightnesses = new Float32Array(this.starCount);
    const twinklePhases = new Float32Array(this.starCount);
    const starTypes = new Float32Array(this.starCount);
    const distanceLayers = new Float32Array(this.starCount);

    const seed = this.params.seed!;
    const rng = new SeededRandom(seed + 10000);

    for (let i = 0; i < this.starCount; i++) {
      const phi = rng.uniform(0, 2 * Math.PI);
      const cosTheta = rng.uniform(-1, 1);
      const theta = Math.acos(cosTheta);

      const baseDistance = this.params.distance!;
      const distanceVariation = rng.uniform(0.7, 1.3);
      const distance = baseDistance * distanceVariation;

      const x = distance * Math.sin(theta) * Math.cos(phi);
      const y = distance * Math.sin(theta) * Math.sin(phi);
      const z = distance * Math.cos(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      const isVariable = rng.uniform(0, 1) < this.params.variableChance!;
      starTypes[i] = isVariable ? 1.0 : 0.0;

      distanceLayers[i] = distanceVariation;

      sizes[i] = rng.uniform(this.params.minSize!, this.params.maxSize!);
      brightnesses[i] = rng.uniform(this.params.minBrightness!, this.params.maxBrightness!);
      twinklePhases[i] = rng.uniform(0, Math.PI * 2);

      if (isVariable) {
        brightnesses[i] = Math.min(1.0, brightnesses[i] + 0.2);
        twinklePhases[i] = rng.uniform(0, Math.PI * 2);
      }
    }

    this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute("originalPosition", new THREE.BufferAttribute(originalPositions, 3));
    this.geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    this.geometry.setAttribute("brightness", new THREE.BufferAttribute(brightnesses, 1));
    this.geometry.setAttribute("twinklePhase", new THREE.BufferAttribute(twinklePhases, 1));
    this.geometry.setAttribute("starType", new THREE.BufferAttribute(starTypes, 1));
    this.geometry.setAttribute("distanceLayer", new THREE.BufferAttribute(distanceLayers, 1));
  }

  private createMaterial(): THREE.ShaderMaterial {
    const starColor = this.params.color instanceof THREE.Color ? this.params.color : new THREE.Color(this.params.color as any);

    return new THREE.ShaderMaterial({
      vertexShader: StarFieldEffect.vertexShader,
      fragmentShader: StarFieldEffect.fragmentShader,
      uniforms: {
        time: { value: 0 },
        starColor: { value: starColor },
        twinkleSpeed: { value: this.params.twinkleSpeed },
        cameraOffset: { value: new THREE.Vector3(0, 0, 0) },
        parallaxStrength: { value: this.params.parallaxStrength },
        orbitalPosition: { value: new THREE.Vector3(0, 0, 0) },
        orbitalParallaxStrength: { value: this.params.orbitalParallaxStrength },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: false,
    });
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.starSystem.position.copy(planetPosition);
    }
    scene.add(this.starSystem);
  }

  update(_deltaTime: number, _planetRotation?: number, camera?: THREE.Camera): void {
    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.params.timeSpeed!, this.startTime);

    this.material.uniforms.time.value = currentTime;

    if (camera) {
      this.cameraPosition.copy(camera.position);

      const cameraOffset = new THREE.Vector3().subVectors(this.cameraPosition, this.lastCameraPosition).multiplyScalar(0.3);

      this.material.uniforms.cameraOffset.value.lerp(cameraOffset, 0.1);
      this.lastCameraPosition.copy(this.cameraPosition);
    }
  }

  updateWithCamera(deltaTime: number, camera: THREE.Camera): void {
    this.update(deltaTime, undefined, camera);
  }

  updateParams(newParams: Partial<StarFieldParams>): void {
    this.params = { ...this.params, ...newParams };

    if (newParams.color !== undefined) {
      const newColor = newParams.color instanceof THREE.Color ? newParams.color : new THREE.Color(newParams.color);
      this.material.uniforms.starColor.value = newColor;
    }

    if (newParams.twinkleSpeed !== undefined) {
      this.material.uniforms.twinkleSpeed.value = newParams.twinkleSpeed;
    }

    if (newParams.parallaxStrength !== undefined) {
      this.material.uniforms.parallaxStrength.value = newParams.parallaxStrength;
    }

    if (newParams.orbitalParallaxStrength !== undefined) {
      this.material.uniforms.orbitalParallaxStrength.value = newParams.orbitalParallaxStrength;
    }
  }

  updateOrbitalPosition(position: THREE.Vector3): void {
    this.material.uniforms.orbitalPosition.value.copy(position);
  }

  getObject3D(): THREE.Points {
    return this.starSystem;
  }

  dispose(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}

export function createStarFieldFromPythonData(planetRadius: number, planetSeed?: number): StarFieldEffect {
  const seed = planetSeed !== undefined ? planetSeed : Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 10000);

  const params: StarFieldParams = {
    color: new THREE.Color(0xffffff),
    starCount: Math.floor(rng.uniform(PROCEDURAL_RANGES.STAR_COUNT.min, PROCEDURAL_RANGES.STAR_COUNT.max)),
    minBrightness: rng.uniform(PROCEDURAL_RANGES.MIN_BRIGHTNESS.min, PROCEDURAL_RANGES.MIN_BRIGHTNESS.max),
    maxBrightness: rng.uniform(PROCEDURAL_RANGES.MAX_BRIGHTNESS.min, PROCEDURAL_RANGES.MAX_BRIGHTNESS.max),
    minSize: rng.uniform(PROCEDURAL_RANGES.MIN_SIZE.min, PROCEDURAL_RANGES.MIN_SIZE.max),
    maxSize: rng.uniform(PROCEDURAL_RANGES.MAX_SIZE.min, PROCEDURAL_RANGES.MAX_SIZE.max),
    distance: rng.uniform(PROCEDURAL_RANGES.DISTANCE.min, PROCEDURAL_RANGES.DISTANCE.max),
    seed,
    twinkleSpeed: rng.uniform(PROCEDURAL_RANGES.TWINKLE_SPEED.min, PROCEDURAL_RANGES.TWINKLE_SPEED.max),
    parallaxStrength: rng.uniform(PROCEDURAL_RANGES.PARALLAX_STRENGTH.min, PROCEDURAL_RANGES.PARALLAX_STRENGTH.max),
    variableChance: rng.uniform(PROCEDURAL_RANGES.VARIABLE_CHANCE.min, PROCEDURAL_RANGES.VARIABLE_CHANCE.max),
  };

  return new StarFieldEffect(planetRadius, params);
}
