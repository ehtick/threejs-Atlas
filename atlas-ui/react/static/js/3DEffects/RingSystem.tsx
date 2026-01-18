// atlas-ui/react/static/js/3DEffects/RingSystem.tsx

import * as THREE from "three";
import { getUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime.tsx";

export interface RingSystemParams {
  full_ring?: { particles: any[] };
  ontop_ring?: { particles: any[] };
  ring_inner_radius?: number;
  ring_outer_radius?: number;
  tilt_factor?: number;
  planet_radius?: number;
  shape_seed?: number;
}

class VisualRNG {
  private seed: number;

  constructor(baseSeed: number) {
    this.seed = baseSeed;
  }

  private next(): number {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }

  uniform(min: number, max: number): number {
    return min + (max - min) * this.next();
  }

  choice<T>(items: T[]): T {
    return items[Math.floor(this.next() * items.length)];
  }
}

export class RingSystemEffect {
  private ringSystem: THREE.Points;
  private concentricLines: THREE.Group;
  private material: THREE.ShaderMaterial;
  private linesMaterial: THREE.ShaderMaterial;
  private params: RingSystemParams;
  private planetRadius: number;
  private actualInnerRadius: number = 0;
  private actualOuterRadius: number = 0;
  private scale: number = 1;
  private tiltAngle: number = 0;

  constructor(planetRadius: number, params: RingSystemParams) {
    this.planetRadius = planetRadius;
    this.params = params;

    this.createRingSystemFromAPI(params);
    this.createConcentricLines();
  }

  private createRingSystemFromAPI(ringsData: RingSystemParams): void {
    const { full_ring, ontop_ring, ring_inner_radius, ring_outer_radius, tilt_factor, planet_radius, shape_seed } = ringsData;

    if (!full_ring || !ontop_ring) {
      return;
    }

    const allParticles = [...full_ring.particles, ...ontop_ring.particles];
    const totalParticles = allParticles.length;

    this.scale = this.planetRadius / (planet_radius || 200);
    this.tiltAngle = Math.asin((tilt_factor || 0.2) * 0.5);

    let minDist = Infinity;
    let maxDist = 0;
    for (const p of allParticles) {
      if (p.distance < minDist) minDist = p.distance;
      if (p.distance > maxDist) maxDist = p.distance;
    }
    this.actualInnerRadius = minDist * this.scale;
    this.actualOuterRadius = maxDist * this.scale;

    const visualRNG = new VisualRNG(shape_seed || 12345);

    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(totalParticles * 3);
    const colors = new Float32Array(totalParticles * 3);
    const sizes = new Float32Array(totalParticles);

    const grayVariations = [
      { baseGray: 0.12, variation: 0.03, name: "dark" },
      { baseGray: 0.18, variation: 0.04, name: "medium" },
      { baseGray: 0.22, variation: 0.05, name: "light" },
      { baseGray: 0.16, variation: 0.04, name: "mixed" },
    ];

    const chosenGrayVariation = visualRNG.choice(grayVariations);

    for (let i = 0; i < totalParticles; i++) {
      const particle = allParticles[i];

      const scale = this.scale;

      const particleSeed = (shape_seed || 12345) + i;
      const particleRNG = new VisualRNG(particleSeed);

      const distance = particle.distance * scale;
      const angle = particle.angle;

      const baseX = distance * Math.cos(angle);
      const baseZ = distance * Math.sin(angle);
      const baseY = 0;

      const tiltAngle = Math.asin((tilt_factor || 0.2) * 0.5);
      const tiltedY = baseZ * Math.sin(tiltAngle);
      const tiltedZ = baseZ * Math.cos(tiltAngle);

      const ringThickness = ((ring_outer_radius || 400) - (ring_inner_radius || 200)) * scale * 0.4;

      const ySpread = particleRNG.uniform(-ringThickness * 0.8, ringThickness * 0.8);
      const radialSpread = particleRNG.uniform(-ringThickness * 0.3, ringThickness * 0.3);
      const angularSpread = particleRNG.uniform(-0.08, 0.08);

      const finalDistance = distance + radialSpread;
      const finalAngle = angle + angularSpread;

      positions[i * 3] = finalDistance * Math.cos(finalAngle);
      positions[i * 3 + 1] = tiltedY + ySpread + this.planetRadius * 0.15;
      positions[i * 3 + 2] = tiltedZ + particleRNG.uniform(-ringThickness * 0.4, ringThickness * 0.4);

      const pythonGrayValue = particle.color[0] / 255;

      const distanceFromCenter = particle.distance;
      const normalizedDistance = (distanceFromCenter - (ring_inner_radius || 200)) / ((ring_outer_radius || 400) - (ring_inner_radius || 200));

      const baseGray = chosenGrayVariation.baseGray;
      const variation = chosenGrayVariation.variation;

      const grayVariation = particleRNG.uniform(-variation, variation);
      const finalGray = Math.max(0.08, Math.min(0.3, baseGray + grayVariation));

      const distanceGradient = 0.8 + normalizedDistance * 0.4;

      const brightnessVariation = particleRNG.uniform(0.85, 1.15);

      const sparkleChance = particleRNG.uniform(0, 1);
      const sparkleMultiplier = sparkleChance < 0.03 ? particleRNG.uniform(1.1, 1.3) : 1.0;

      const finalGrayValue = finalGray * distanceGradient * brightnessVariation * sparkleMultiplier;

      const clampedGrayValue = Math.max(0.06, Math.min(0.35, finalGrayValue));
      colors[i * 3] = clampedGrayValue;
      colors[i * 3 + 1] = clampedGrayValue;
      colors[i * 3 + 2] = clampedGrayValue;

      const sizeScale = 0.25;
      const baseSizeMultiplier = particleRNG.uniform(0.3, 0.8);
      const sparkleSize = sparkleChance < 0.1 ? particleRNG.uniform(1.05, 1.2) : 1.0;
      sizes[i] = particle.size * sizeScale * baseSizeMultiplier * sparkleSize;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particles.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        brightness: { value: 4.4 },
        lightDirection: { value: new THREE.Vector3(1, 0, 0) },
        ambientLight: { value: 0.15 },
        planetRadius: { value: this.planetRadius },
        planetWorldPos: { value: new THREE.Vector3(0, 0, 0) },
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        varying float vDistance;
        varying vec3 vWorldPosition;

        void main() {
          vColor = color;

          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDistance = -mvPosition.z;

          gl_PointSize = size * (120.0 / vDistance);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float brightness;
        uniform vec3 lightDirection;
        uniform float ambientLight;
        uniform float planetRadius;
        uniform vec3 planetWorldPos;
        varying vec3 vColor;
        varying float vDistance;
        varying vec3 vWorldPosition;

        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);

          if (dist > 0.5) discard;

          float alpha = (1.0 - dist * 2.0);
          alpha = smoothstep(0.0, 1.0, alpha);

          float glow = 1.0 - dist;
          glow = pow(glow, 1.5);

          vec3 toLight = normalize(lightDirection);

          vec3 relPos = vWorldPosition - planetWorldPos;

          float behindPlanet = -dot(relPos, toLight);

          vec3 onAxis = -toLight * behindPlanet;
          float distFromAxis = length(relPos - onAxis);

          float isBehind = step(0.0, behindPlanet);

          float coneExpansion = 0.4;
          float shadowRadius = planetRadius + behindPlanet * coneExpansion;

          float gradientStart = shadowRadius * 1.5;
          float gradientEnd = shadowRadius;

          float shadow = smoothstep(gradientEnd, gradientStart, distFromAxis);

          shadow = mix(1.0, shadow, isBehind);

          float ambientInShadow = 0.35;
          float totalLight = mix(ambientInShadow, 1.0, shadow);

          vec3 finalColor = vColor * brightness * glow * totalLight;

          float depthAlpha = clamp(200.0 / vDistance, 0.3, 1.0);

          gl_FragColor = vec4(finalColor, alpha * depthAlpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    this.ringSystem = new THREE.Points(particles, this.material);

    this.ringSystem.position.set(0, 0, 0);

    this.ringSystem.renderOrder = 1;
  }

  private createConcentricLines(): void {
    if (this.actualInnerRadius === 0 || this.actualOuterRadius === 0) return;

    this.concentricLines = new THREE.Group();

    const shapeSeed = this.params.shape_seed || 12345;
    const numLines = 25;
    const segments = 128;

    this.linesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        brightness: { value: 3.0 },
        intensity: { value: 1.0 },
        lightDirection: { value: new THREE.Vector3(1, 0, 0) },
        planetRadius: { value: this.planetRadius },
        planetWorldPos: { value: new THREE.Vector3(0, 0, 0) },
      },
      vertexShader: `
        varying vec3 vWorldPosition;

        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float brightness;
        uniform float intensity;
        uniform vec3 lightDirection;
        uniform float planetRadius;
        uniform vec3 planetWorldPos;
        varying vec3 vWorldPosition;

        void main() {
          vec3 toLight = normalize(lightDirection);

          vec3 relPos = vWorldPosition - planetWorldPos;
          float behindPlanet = -dot(relPos, toLight);
          vec3 onAxis = -toLight * behindPlanet;
          float distFromAxis = length(relPos - onAxis);
          float isBehind = step(0.0, behindPlanet);

          float coneExpansion = 0.4;
          float shadowRadius = planetRadius + behindPlanet * coneExpansion;
          float gradientStart = shadowRadius * 1.5;
          float gradientEnd = shadowRadius;

          float shadow = smoothstep(gradientEnd, gradientStart, distFromAxis);
          shadow = mix(1.0, shadow, isBehind);

          float ambientInShadow = 0.35;
          float totalLight = mix(ambientInShadow, 1.0, shadow);

          vec3 lineColor = vec3(0.2) * intensity * brightness * totalLight;
          gl_FragColor = vec4(lineColor, 0.6 * intensity);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    for (let i = 0; i < numLines; i++) {
      const lineRng = new VisualRNG(shapeSeed + i * 31);

      if (lineRng.uniform(0, 1) < 0.1) continue;

      const t = i / (numLines - 1);
      const radius = this.actualInnerRadius + (this.actualOuterRadius - this.actualInnerRadius) * t;

      const positions: number[] = [];
      for (let j = 0; j <= segments; j++) {
        const angle = (j / segments) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        const tiltedY = z * Math.sin(this.tiltAngle) - this.planetRadius * 0.07;
        const tiltedZ = z * Math.cos(this.tiltAngle);
        positions.push(x, tiltedY, tiltedZ);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

      const mat = this.linesMaterial.clone();
      mat.uniforms.intensity = { value: lineRng.uniform(0.4, 1.0) };

      const line = new THREE.LineLoop(geometry, mat);
      this.concentricLines.add(line);
    }
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (!this.ringSystem) return;

    const pos = planetPosition || new THREE.Vector3(0, 0, 0);

    this.ringSystem.position.copy(pos);
    if (this.material?.uniforms.planetWorldPos) {
      this.material.uniforms.planetWorldPos.value.copy(pos);
    }

    if (this.concentricLines) {
      this.concentricLines.position.copy(pos);
      this.concentricLines.children.forEach((child) => {
        if (child instanceof THREE.LineLoop) {
          const mat = child.material as THREE.ShaderMaterial;
          if (mat.uniforms?.planetWorldPos) {
            mat.uniforms.planetWorldPos.value.copy(pos);
          }
        }
      });
    }

    scene.add(this.ringSystem);
    if (this.concentricLines) {
      scene.add(this.concentricLines);
    }
  }

  update(deltaTime: number, planetData?: any): void {
    if (!this.ringSystem || !planetData) return;

    const rotationPeriod = planetData.rotation_period_seconds || 86400;
    const cosmicOriginTime = planetData.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    const initialAngleRotation = planetData.initialAngleRotation || 0;

    const timeElapsedSeconds = getUniverseTime(cosmicOriginTime);
    const angleVelocityRotation = (2 * Math.PI) / rotationPeriod;
    const angleRotation = (initialAngleRotation + timeElapsedSeconds * angleVelocityRotation) % (2 * Math.PI);

    this.ringSystem.rotation.y = angleRotation;
    if (this.concentricLines) {
      this.concentricLines.rotation.y = angleRotation;
    }
  }

  getObject3D(): THREE.Points {
    return this.ringSystem;
  }

  updateLightDirection(lightDir: THREE.Vector3): void {
    const normalizedDir = lightDir.clone().normalize();
    if (this.material?.uniforms.lightDirection) {
      this.material.uniforms.lightDirection.value.copy(normalizedDir);
    }
    if (this.concentricLines) {
      this.concentricLines.children.forEach((child) => {
        if (child instanceof THREE.LineLoop) {
          const mat = child.material as THREE.ShaderMaterial;
          if (mat.uniforms?.lightDirection) {
            mat.uniforms.lightDirection.value.copy(normalizedDir);
          }
        }
      });
    }
  }

  updateFromThreeLight(light: THREE.DirectionalLight): void {
    const lightDir = new THREE.Vector3().subVectors(light.position, light.target.position).normalize();

    if (this.material?.uniforms.lightDirection) {
      this.material.uniforms.lightDirection.value.copy(lightDir);
    }
    if (this.concentricLines) {
      this.concentricLines.children.forEach((child) => {
        if (child instanceof THREE.LineLoop) {
          const mat = child.material as THREE.ShaderMaterial;
          if (mat.uniforms?.lightDirection) {
            mat.uniforms.lightDirection.value.copy(lightDir);
          }
        }
      });
    }
  }

  dispose(): void {
    if (this.material) {
      this.material.dispose();
    }
    if (this.linesMaterial) {
      this.linesMaterial.dispose();
    }
    if (this.concentricLines) {
      this.concentricLines.children.forEach((child) => {
        if (child instanceof THREE.LineLoop) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
      });
    }
  }
}

export function createRingSystemFromPythonData(ringsData: any, planetRadius: number): RingSystemEffect {
  const params: RingSystemParams = {
    full_ring: ringsData.full_ring,
    ontop_ring: ringsData.ontop_ring,
    ring_inner_radius: ringsData.ring_inner_radius,
    ring_outer_radius: ringsData.ring_outer_radius,
    tilt_factor: ringsData.tilt_factor,
    planet_radius: ringsData.planet_radius,
    shape_seed: ringsData.shape_seed,
  };

  return new RingSystemEffect(planetRadius, params);
}
