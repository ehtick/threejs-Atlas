// atlas-ui/react/static/js/3DEffects/RingSystem.tsx

import * as THREE from "three";

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
  private material: THREE.ShaderMaterial;
  private params: RingSystemParams;
  private planetRadius: number;

  constructor(planetRadius: number, params: RingSystemParams) {
    this.planetRadius = planetRadius;
    this.params = params;

    this.createRingSystemFromAPI(params);
  }

  private createRingSystemFromAPI(ringsData: RingSystemParams): void {
    const { full_ring, ontop_ring, ring_inner_radius, ring_outer_radius, tilt_factor, planet_radius, shape_seed } = ringsData;

    if (!full_ring || !ontop_ring) {
      return;
    }

    const allParticles = [...full_ring.particles, ...ontop_ring.particles];
    const totalParticles = allParticles.length;

    const visualRNG = new VisualRNG(shape_seed || 12345);

    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(totalParticles * 3);
    const colors = new Float32Array(totalParticles * 3);
    const sizes = new Float32Array(totalParticles);

    const grayVariations = [
      { baseGray: 0.18, variation: 0.04, name: "dark" },
      { baseGray: 0.25, variation: 0.06, name: "medium" },
      { baseGray: 0.32, variation: 0.06, name: "light" },
      { baseGray: 0.25, variation: 0.08, name: "mixed" },
    ];

    const chosenGrayVariation = visualRNG.choice(grayVariations);

    for (let i = 0; i < totalParticles; i++) {
      const particle = allParticles[i];

      const scale = this.planetRadius / (planet_radius || 200);

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
      const finalGray = Math.max(0.12, Math.min(0.45, baseGray + grayVariation));

      const distanceGradient = 0.8 + normalizedDistance * 0.4;

      const brightnessVariation = particleRNG.uniform(0.85, 1.15);

      const sparkleChance = particleRNG.uniform(0, 1);
      const sparkleMultiplier = sparkleChance < 0.03 ? particleRNG.uniform(1.1, 1.3) : 1.0;

      const finalGrayValue = finalGray * distanceGradient * brightnessVariation * sparkleMultiplier;

      const clampedGrayValue = Math.max(0.1, Math.min(0.55, finalGrayValue));
      colors[i * 3] = clampedGrayValue;
      colors[i * 3 + 1] = clampedGrayValue;
      colors[i * 3 + 2] = clampedGrayValue;

      const sizeScale = 0.15;
      const baseSizeMultiplier = particleRNG.uniform(0.3, 0.7);
      const sparkleSize = sparkleChance < 0.1 ? particleRNG.uniform(1.05, 1.2) : 1.0;
      sizes[i] = particle.size * sizeScale * baseSizeMultiplier * sparkleSize;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particles.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        brightness: { value: 2.2 },
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        varying float vDistance;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDistance = -mvPosition.z;
          
          gl_PointSize = size * (100.0 / vDistance);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float brightness;
        varying vec3 vColor;
        varying float vDistance;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float distance = length(center);
          
          if (distance > 0.5) discard;
          
          float alpha = (1.0 - distance * 2.0);
          alpha = smoothstep(0.0, 1.0, alpha);
          
          float glow = 1.0 - distance;
          glow = pow(glow, 1.5);
          
          vec3 finalColor = vColor * brightness * glow;
          
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

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (!this.ringSystem) return;

    if (planetPosition) {
      this.ringSystem.position.copy(planetPosition);
    } else {
      this.ringSystem.position.set(0, 0, 0);
    }

    scene.add(this.ringSystem);
  }

  update(deltaTime: number, planetData?: any): void {
    if (!this.ringSystem || !planetData) return;

    const rotationPeriod = planetData.rotation_period_seconds || 86400;
    const cosmicOriginTime = planetData.cosmicOriginTime || Date.now() / 1000;
    const initialAngleRotation = planetData.initialAngleRotation || 0;

    const currentTime = Date.now() / 1000;
    const timeElapsedSeconds = currentTime - cosmicOriginTime;
    const angleVelocityRotation = (2 * Math.PI) / rotationPeriod;
    const angleRotation = (initialAngleRotation + timeElapsedSeconds * angleVelocityRotation) % (2 * Math.PI);

    this.ringSystem.rotation.y = angleRotation;
  }

  getObject3D(): THREE.Points {
    return this.ringSystem;
  }

  dispose(): void {
    if (this.material) {
      this.material.dispose();
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
