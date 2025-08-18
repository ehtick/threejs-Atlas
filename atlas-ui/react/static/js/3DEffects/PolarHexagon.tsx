import * as THREE from 'three';

// Shader for the polar hexagon effect
const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
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
  
  // Check if point is at pole
  float atPole(vec3 position, float poleSign) {
    // Use Y coordinate to determine if at north (1.0) or south (-1.0) pole
    float polarDistance = abs(position.y * poleSign);
    return smoothstep(0.7, 1.0, polarDistance);
  }
  
  void main() {
    // Check if we're at the correct pole
    float poleInfluence = atPole(vPosition, pole);
    
    if (poleInfluence < 0.01) {
      discard; // Not at the pole, don't render hexagon
    }
    
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
    
    // Create hexagon shape
    float hex = hexagon(rotatedUV, hexagonRadius);
    
    // Only show hexagon within its radius
    if (hex > 0.0) {
      discard;
    }
    
    // Calculate hexagon color (darker than planet)
    vec3 finalColor = planetColor * (1.0 - darkenFactor);
    
    // Add subtle gradient from center to edges
    float edgeFade = 1.0 - smoothstep(0.0, hexagonRadius, polar.r);
    finalColor *= (0.8 + 0.2 * edgeFade);
    
    // Apply pole influence and visibility
    float finalOpacity = opacity * poleInfluence * visibility;
    
    // Add subtle glow at edges
    float edgeGlow = smoothstep(hexagonRadius * 0.9, hexagonRadius, polar.r);
    finalColor += vec3(0.05) * edgeGlow;
    
    gl_FragColor = vec4(finalColor, finalOpacity);
  }
`;

export interface PolarHexagonParams {
  planetColor: THREE.Color | string;
  hexagonData: {
    enabled: boolean;
    pole: 'north' | 'south';
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
}

export class PolarHexagonEffect {
  private mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  private params: PolarHexagonParams;

  constructor(params: PolarHexagonParams) {
    this.params = params;
    
    // Convert planet color to THREE.Color
    const color = new THREE.Color(params.planetColor);
    
    // Calculate darker hexagon color
    const hexColor = color.clone();
    hexColor.multiplyScalar(1 - params.hexagonData.color_darken_factor);
    
    // Create shader material
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        planetColor: { value: color },
        hexagonColor: { value: hexColor },
        darkenFactor: { value: params.hexagonData.color_darken_factor },
        opacity: { value: params.hexagonData.opacity },
        hexagonRadius: { value: params.hexagonData.radius },
        rotationSpeed: { value: params.hexagonData.rotation_speed },
        pole: { value: params.hexagonData.pole === 'north' ? 1.0 : -1.0 },
        visibility: { value: 1.0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.FrontSide,
      blending: params.hexagonData.nebula_blend ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    
    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Create mesh
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.scale.set(
      params.planetRadius * 1.01,
      params.planetRadius * 1.01,
      params.planetRadius * 1.01
    );
    
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
    // Update time uniform for rotation
    this.material.uniforms.time.value += deltaTime;
    
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
  
  setEnabled(enabled: boolean): void {
    this.mesh.visible = enabled;
  }
}

// Alternative implementation using cap geometry
export class PolarHexagonCapEffect {
  private group: THREE.Group;
  private mesh: THREE.Mesh;
  private material: THREE.MeshStandardMaterial;
  private params: PolarHexagonParams;

  constructor(params: PolarHexagonParams) {
    this.params = params;
    this.group = new THREE.Group();
    
    // Convert planet color to THREE.Color
    const color = new THREE.Color(params.planetColor);
    const hexColor = color.clone().multiplyScalar(1 - params.hexagonData.color_darken_factor);
    
    // Create hexagonal cylinder geometry
    const geometry = new THREE.CylinderGeometry(
      params.planetRadius * params.hexagonData.radius, // Top radius
      params.planetRadius * params.hexagonData.radius, // Bottom radius
      params.planetRadius * 0.05, // Height (thin cylinder)
      6, // Radial segments (6 for hexagon)
      1
    );
    
    // Create material
    this.material = new THREE.MeshStandardMaterial({
      color: hexColor,
      transparent: true,
      opacity: params.hexagonData.opacity,
      emissive: hexColor,
      emissiveIntensity: 0.1,
    });
    
    // Create mesh
    this.mesh = new THREE.Mesh(geometry, this.material);
    
    // Position at pole
    const yPosition = params.hexagonData.pole === 'north' 
      ? params.planetRadius * 0.95 
      : -params.planetRadius * 0.95;
    
    this.mesh.position.y = yPosition;
    
    // Rotate if south pole
    if (params.hexagonData.pole === 'south') {
      this.mesh.rotation.x = Math.PI;
    }
    
    this.group.add(this.mesh);
    this.updateVisibility();
  }
  
  private updateVisibility(): void {
    if (!this.params.hexagonData.enabled) {
      this.material.opacity = 0;
      return;
    }
    
    const currentTime = this.params.currentTime || 0;
    const cycleProgress = (currentTime % this.params.hexagonData.cycle_duration_years) / 
                         this.params.hexagonData.cycle_duration_years;
    const visibleFraction = this.params.hexagonData.visible_duration_years / 
                           this.params.hexagonData.cycle_duration_years;
    
    let visibility = 0;
    
    if (cycleProgress < visibleFraction) {
      const localProgress = cycleProgress / visibleFraction;
      if (localProgress < 0.1) {
        visibility = localProgress / 0.1;
      } else if (localProgress > 0.9) {
        visibility = (1 - localProgress) / 0.1;
      } else {
        visibility = 1.0;
      }
    }
    
    this.material.opacity = this.params.hexagonData.opacity * visibility;
  }
  
  update(deltaTime: number): void {
    // Rotate hexagon slowly
    this.group.rotation.y += this.params.hexagonData.rotation_speed * deltaTime;
    
    // Update visibility
    this.updateVisibility();
  }
  
  addToScene(scene: THREE.Scene): void {
    scene.add(this.group);
  }
  
  removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.group);
  }
  
  dispose(): void {
    this.material.dispose();
    this.mesh.geometry.dispose();
  }
  
  setEnabled(enabled: boolean): void {
    this.group.visible = enabled;
  }
}

// Factory function to create from Python data
export function createPolarHexagonFromPythonData(
  pythonData: any,
  planetRadius: number
): PolarHexagonCapEffect | null {
  const surface = pythonData.surface_elements;
  
  if (!surface?.polar_hexagon?.enabled) {
    return null;
  }
  
  const baseColor = pythonData.planet_info?.base_color || '#FFFFFF';
  const currentTimeYears = pythonData.timing?.elapsed_time 
    ? pythonData.timing.elapsed_time / (365.25 * 24 * 3600) 
    : 0;
  
  const params: PolarHexagonParams = {
    planetColor: baseColor,
    hexagonData: surface.polar_hexagon,
    planetRadius: planetRadius,
    currentTime: currentTimeYears
  };
  
  return new PolarHexagonCapEffect(params);
}