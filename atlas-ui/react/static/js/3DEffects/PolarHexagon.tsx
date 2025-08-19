import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

// Rangos procedurales para hexágonos polares basados en observaciones de Saturno
const PROCEDURAL_RANGES = {
  SIZE: { min: 0.12, max: 0.2 }, // Tamaño más pequeño por defecto
  ROTATION_SPEED: { min: 0.05, max: 0.1 }, // Rotación muy lenta como Saturno
  OPACITY: { min: 0.15, max: 0.35 }, // Opacidad sutil
  TIME_SPEED: { min: 0.8, max: 1.5 }, // Velocidad de tiempo
};

// Shader for the polar hexagon effect with curved geometry
const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    
    // World position for curved surface calculations
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec3 planetColor;
  uniform vec3 hexagonColor;
  uniform float darkenFactor;
  uniform float opacity;
  uniform float hexagonRadius;
  uniform float rotationSpeed;
  uniform float pole;
  uniform float visibility;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  
  #define PI 3.14159265359
  
  // Convert UV to polar coordinates
  vec2 toPolar(vec2 uv) {
    vec2 centered = uv - 0.5;
    float r = length(centered);
    float theta = atan(centered.y, centered.x);
    return vec2(r, theta);
  }
  
  // Create hexagon shape
  float hexagon(vec2 p, float radius) {
    const vec3 k = vec3(-0.866025404, 0.5, 0.577350269);
    p = abs(p);
    p -= 2.0 * min(dot(k.xy, p), 0.0) * k.xy;
    p -= vec2(clamp(p.x, -k.z * radius, k.z * radius), radius);
    return length(p) * sign(p.y);
  }
  
  void main() {
    // Convert to polar coordinates centered at pole
    vec2 polar = toPolar(vUv);
    
    // Rotate hexagon slowly
    float rotation = time * rotationSpeed;
    vec2 rotatedUV = vUv - 0.5;
    float cosR = cos(rotation);
    float sinR = sin(rotation);
    rotatedUV = vec2(
      rotatedUV.x * cosR - rotatedUV.y * sinR,
      rotatedUV.x * sinR + rotatedUV.y * cosR
    );
    
    // Create hexagon shape distance field
    float hex = hexagon(rotatedUV, hexagonRadius);
    
    // HOLLOW HEXAGON: Only show the edges/lines
    float lineWidth = 0.03; // Thick lines like Saturn
    float hexagonEdge = abs(hex); // Distance to hexagon edge
    
    // Only render if we're close to the hexagon edge
    if (hexagonEdge > lineWidth) {
      discard; // Not on hexagon edge, don't render
    }
    
    // Only show if we're inside the hexagon area (not outside)
    if (hex > lineWidth) {
      discard; // Outside hexagon completely
    }
    
    // Calculate line intensity based on distance to edge
    float edgeIntensity = 1.0 - smoothstep(0.0, lineWidth, hexagonEdge);
    
    // Calculate hexagon color (darker than planet)
    vec3 finalColor = planetColor * (1.0 - darkenFactor);
    
    // Make lines more prominent
    finalColor *= 0.6; // Darker for contrast
    
    // Add subtle white tint (5-7% white)
    finalColor = mix(finalColor, vec3(1.0), 0.06);
    
    // Apply edge intensity and 25% opacity (75% transparent)
    float finalOpacity = opacity * visibility * edgeIntensity * 0.25;
    
    // Add subtle glow for Saturn-like effect
    finalColor += vec3(0.1) * edgeIntensity;
    
    gl_FragColor = vec4(finalColor, finalOpacity);
  }
`;

export interface PolarHexagonParams {
  planetColor: THREE.Color | string;
  hexagonData: {
    enabled: boolean;
    pole: "north" | "south";
    radius: number;
    rotation_speed: number;
    color_darken_factor: number;
    cycle_duration_years: number;
    visible_duration_years: number;
    opacity: number;
    nebula_blend?: boolean;
  };
  planetRadius: number;
  currentTime?: number; // Current time in years for visibility cycles
  seed?: number; // Seed for procedural generation
  startTime?: number; // Deterministic start time
  timeSpeed?: number; // Speed multiplier for time
}

export class PolarHexagonEffect {
  private mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: PolarHexagonParams;
  private startTime: number;
  private proceduralParams: {
    size: number;
    rotationSpeed: number;
    opacity: number;
    timeSpeed: number;
  };

  constructor(params: PolarHexagonParams) {
    // Generar valores procedurales usando seed
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);

    // Tiempo inicial determinista basado en el seed
    this.startTime = params.startTime || (seed % 10000) / 1000;

    // Generar parámetros procedurales
    this.proceduralParams = {
      size: rng.uniform(PROCEDURAL_RANGES.SIZE.min, PROCEDURAL_RANGES.SIZE.max),
      rotationSpeed: rng.uniform(PROCEDURAL_RANGES.ROTATION_SPEED.min, PROCEDURAL_RANGES.ROTATION_SPEED.max),
      opacity: rng.uniform(PROCEDURAL_RANGES.OPACITY.min, PROCEDURAL_RANGES.OPACITY.max),
      timeSpeed: rng.uniform(PROCEDURAL_RANGES.TIME_SPEED.min, PROCEDURAL_RANGES.TIME_SPEED.max),
    };

    this.params = params;

    // Convert planet color to THREE.Color
    const color = new THREE.Color(params.planetColor);

    // Calculate darker hexagon color
    const hexColor = color.clone();
    hexColor.multiplyScalar(1 - params.hexagonData.color_darken_factor);

    // Create shader material with procedural values
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        planetColor: { value: color },
        hexagonColor: { value: hexColor },
        darkenFactor: { value: params.hexagonData.color_darken_factor },
        opacity: { value: this.proceduralParams.opacity }, // Use procedural opacity
        hexagonRadius: { value: this.proceduralParams.size }, // Use procedural size
        rotationSpeed: { value: this.proceduralParams.rotationSpeed }, // Use procedural rotation
        pole: { value: params.hexagonData.pole === "north" ? 1.0 : -1.0 },
        visibility: { value: 1.0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: params.hexagonData.nebula_blend ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    // Create custom curved hexagon geometry
    const geometry = this.createCurvedHexagonGeometry(params.hexagonData.pole, params.hexagonData.radius);

    // Create mesh
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.scale.set(params.planetRadius, params.planetRadius, params.planetRadius);

    this.updateVisibility();
  }

  private updateVisibility(): void {
    if (!this.params.hexagonData.enabled) {
      this.material.uniforms.visibility.value = 0;
      return;
    }

    const currentTime = this.params.currentTime || 0;
    const cycleProgress = (currentTime % this.params.hexagonData.cycle_duration_years) / 
                         this.params.hexagonData.cycle_duration_years;
    const visibleFraction = this.params.hexagonData.visible_duration_years / 
                           this.params.hexagonData.cycle_duration_years;
    
    // Hexagon is visible for the first part of the cycle
    if (cycleProgress < visibleFraction) {
      // Fade in and out smoothly
      const localProgress = cycleProgress / visibleFraction;
      if (localProgress < 0.1) {
        this.material.uniforms.visibility.value = localProgress / 0.1; // Fade in
      } else if (localProgress > 0.9) {
        this.material.uniforms.visibility.value = (1 - localProgress) / 0.1; // Fade out
      } else {
        this.material.uniforms.visibility.value = 1.0; // Fully visible
      }
    } else {
      this.material.uniforms.visibility.value = 0.0; // Not visible
    }
  }

  update(deltaTime: number): void {
    // Calcular tiempo absoluto determinista como AtmosphereClouds
    const rawTime = this.startTime + (Date.now() / 1000) * this.proceduralParams.timeSpeed;
    const currentTime = rawTime % 1000; // Mantener en ciclo de 1000 segundos

    // Update time uniform for rotation with deterministic time
    this.material.uniforms.time.value = currentTime;

    // Update visibility based on cycle
    this.updateVisibility();
  }

  addToScene(scene: THREE.Scene): void {
    scene.add(this.mesh);
  }

  removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.mesh);
  }

  dispose(): void {
    this.material.dispose();
    this.mesh.geometry.dispose();
  }

  private createCurvedHexagonGeometry(pole: "north" | "south", hexRadius: number): THREE.BufferGeometry {
    const poleDirection = pole === "north" ? 1 : -1;

    // Create a plane and curve it to match the polar region
    const segments = 64; // More segments for smooth curvature
    const size = 1.0; // Size of the plane

    const geometry = new THREE.PlaneGeometry(size, size, segments, segments);

    // Curve the plane to follow the sphere surface at the pole
    const positions = geometry.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < positions.count; i++) {
      vertex.fromBufferAttribute(positions, i);

      // Map plane coordinates to sphere coordinates
      const x = vertex.x;
      const z = vertex.y; // Note: PlaneGeometry uses Y as the second dimension

      // Calculate distance from center
      const distance = Math.sqrt(x * x + z * z);

      if (distance <= size / 2) {
        // Project onto sphere surface
        const sphereRadius = 1.02; // Slightly above planet surface
        const angle = distance * Math.PI * 0.5; // Map distance to angle (0 to PI/2)

        const sphereY = poleDirection * Math.cos(angle) * sphereRadius;
        const radialDistance = Math.sin(angle) * sphereRadius;

        // Maintain relative position but project onto sphere
        if (distance > 0) {
          const normalizedX = x / distance;
          const normalizedZ = z / distance;

          vertex.x = normalizedX * radialDistance;
          vertex.y = sphereY;
          vertex.z = normalizedZ * radialDistance;
        } else {
          // At center (pole)
          vertex.x = 0;
          vertex.y = poleDirection * sphereRadius;
          vertex.z = 0;
        }
      }

      positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    positions.needsUpdate = true;
    geometry.computeVertexNormals();

    return geometry;
  }

  setEnabled(enabled: boolean): void {
    this.mesh.visible = enabled;
  }
}

// Factory function to create from Python data
export function createPolarHexagonFromPythonData(pythonData: any, planetRadius: number): PolarHexagonEffect | null {
  const surface = pythonData.surface_elements;

  if (!surface?.polar_hexagon?.enabled) {
    return null;
  }

  const baseColor = pythonData.planet_info?.base_color || "#FFFFFF";
  const currentTimeYears = pythonData.timing?.elapsed_time ? pythonData.timing.elapsed_time / (365.25 * 24 * 3600) : 0;

  // Use planet seed for procedural generation
  const seed = pythonData.seeds?.planet_seed || pythonData.seeds?.shape_seed || Math.floor(Math.random() * 1000000);

  const params: PolarHexagonParams = {
    planetColor: baseColor,
    hexagonData: surface.polar_hexagon,
    planetRadius: planetRadius,
    currentTime: currentTimeYears,
    seed: seed + 5000, // Offset for polar hexagon specific generation
    startTime: (seed % 10000) / 1000, // Deterministic start time based on seed
  };

  return new PolarHexagonEffect(params);
}
