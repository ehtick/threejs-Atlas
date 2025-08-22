/**
 * Cave Surface Holes Effect
 * Creates realistic cave holes and depressions on planet surfaces
 * Procedural generation with depth perception and proper lighting
 */

import * as THREE from 'three';
import { SeededRandom } from '../Utils/SeededRandom';

export interface CaveSurfaceHolesParams {
  holes?: Array<{
    position_3d: [number, number, number];
    radius: number;
    depth: number;
    roughness: number;
    color_variation: number;
  }>;
  planetRadius?: number;
  baseColor?: THREE.Color | string;
  holeColor?: THREE.Color | string;
  enableShadows?: boolean;
}

// Rangos para generación procedural
const PROCEDURAL_RANGES = {
  HOLE_COUNT: { min: 15, max: 30 },
  HOLE_RADIUS: { min: 0.03, max: 0.12 },
  HOLE_DEPTH: { min: 0.02, max: 0.06 },
  ROUGHNESS: { min: 0.3, max: 0.8 },
  COLOR_VARIATION: { min: 0.1, max: 0.4 },
};

export class CaveSurfaceHolesEffect {
  private group: THREE.Group;
  private planetRadius: number;
  private rng: SeededRandom;
  private holesData: CaveSurfaceHolesParams['holes'] = [];
  private holeMeshes: THREE.Mesh[] = [];
  private baseColor: THREE.Color;
  private holeColor: THREE.Color;
  private lightDirection: THREE.Vector3 = new THREE.Vector3(1, 1, 1).normalize();

  constructor(planetRadius: number, params: CaveSurfaceHolesParams = {}, seed?: number) {
    this.group = new THREE.Group();
    this.planetRadius = planetRadius;
    
    const actualSeed = seed || 12345;
    this.rng = new SeededRandom(actualSeed);
    
    // Set colors
    this.baseColor = params.baseColor instanceof THREE.Color 
      ? params.baseColor 
      : new THREE.Color(params.baseColor || '#4a3f36'); // Dark brown/gray for caves
    
    this.holeColor = params.holeColor instanceof THREE.Color
      ? params.holeColor
      : new THREE.Color(params.holeColor || '#1a1512'); // Very dark for depth
    
    // Generate procedural holes if not provided
    if (params.holes) {
      this.holesData = params.holes;
    } else {
      this.holesData = this.generateProceduralHoles();
    }
    
    if (this.holesData.length > 0) {
      this.createHoles();
    }
  }

  private generateProceduralHoles(): CaveSurfaceHolesParams['holes'] {
    const holes: NonNullable<CaveSurfaceHolesParams['holes']> = [];
    const holeCount = this.rng.randint(
      PROCEDURAL_RANGES.HOLE_COUNT.min,
      PROCEDURAL_RANGES.HOLE_COUNT.max
    );
    
    for (let i = 0; i < holeCount; i++) {
      // Generate uniform distribution on sphere
      const theta = this.rng.random() * 2 * Math.PI;
      const phi = Math.acos(this.rng.random() * 2 - 1);
      
      const position_3d: [number, number, number] = [
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      ];
      
      holes.push({
        position_3d,
        radius: this.rng.uniform(PROCEDURAL_RANGES.HOLE_RADIUS.min, PROCEDURAL_RANGES.HOLE_RADIUS.max),
        depth: this.rng.uniform(PROCEDURAL_RANGES.HOLE_DEPTH.min, PROCEDURAL_RANGES.HOLE_DEPTH.max),
        roughness: this.rng.uniform(PROCEDURAL_RANGES.ROUGHNESS.min, PROCEDURAL_RANGES.ROUGHNESS.max),
        color_variation: this.rng.uniform(PROCEDURAL_RANGES.COLOR_VARIATION.min, PROCEDURAL_RANGES.COLOR_VARIATION.max)
      });
    }
    
    return holes;
  }

  private createHoleMaterial(holeData: NonNullable<CaveSurfaceHolesParams['holes']>[0]): THREE.ShaderMaterial {
    const vertexShader = `
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPosition;
      varying float vDepth;
      
      uniform float holeRadius;
      uniform float holeDepth;
      
      void main() {
        vLocalPosition = position;
        
        // Calculate depth based on distance from center
        float distFromCenter = length(position.xy);
        float depthFactor = smoothstep(holeRadius, 0.0, distFromCenter);
        vDepth = depthFactor;
        
        // Displace vertices inward to create hole
        vec3 displacedPosition = position;
        if (distFromCenter < holeRadius) {
          float displacement = -holeDepth * depthFactor * depthFactor;
          displacedPosition = position + normal * displacement;
        }
        
        vec4 worldPosition = modelMatrix * vec4(displacedPosition, 1.0);
        vWorldPosition = worldPosition.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 baseColor;
      uniform vec3 holeColor;
      uniform vec3 lightDirection;
      uniform float roughness;
      uniform float colorVariation;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPosition;
      varying float vDepth;
      
      // Simple noise function for roughness
      float hash(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * 0.13);
        p3 += dot(p3, p3.yzx + 3.333);
        return fract((p3.x + p3.y) * p3.z);
      }
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
        // Add roughness to normal
        vec2 noiseCoord = vLocalPosition.xy * 10.0;
        float noise = hash(noiseCoord) * roughness;
        normal = normalize(normal + vec3(noise * 0.1 - 0.05));
        
        // Calculate lighting
        vec3 lightDir = normalize(-lightDirection);
        float dotNL = dot(normal, lightDir);
        float lightingFactor = max(0.0, dotNL);
        
        // Shadow inside holes
        float shadowFactor = 1.0 - vDepth * 0.7;
        lightingFactor *= shadowFactor;
        
        // Mix colors based on depth
        vec3 color = mix(baseColor, holeColor, vDepth);
        
        // Add color variation
        float colorNoise = hash(vLocalPosition.xy * 5.0) * colorVariation;
        color = color * (1.0 - colorNoise) + holeColor * colorNoise;
        
        // Apply lighting
        float totalLight = ambientStrength + (lightIntensity * lightingFactor);
        totalLight = clamp(totalLight, 0.2, 1.0);
        
        vec3 finalColor = color * totalLight;
        
        // Add rim lighting for depth perception
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1 * (1.0 - vDepth);
        finalColor += vec3(rimLight);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        baseColor: { value: this.baseColor },
        holeColor: { value: this.holeColor },
        lightDirection: { value: this.lightDirection.clone() },
        holeRadius: { value: holeData.radius * this.planetRadius },
        holeDepth: { value: holeData.depth * this.planetRadius },
        roughness: { value: holeData.roughness },
        colorVariation: { value: holeData.color_variation },
        ambientStrength: { value: 0.4 },
        lightIntensity: { value: 0.8 }
      },
      side: THREE.DoubleSide
    });
  }

  private createHoles(): void {
    this.holesData.forEach((holeData) => {
      // Create a plane geometry for each hole
      const holeSize = holeData.radius * this.planetRadius * 2.5;
      const segments = Math.floor(32 * holeData.radius / 0.1); // More segments for larger holes
      const geometry = new THREE.PlaneGeometry(holeSize, holeSize, segments, segments);
      
      // Create material with hole-specific parameters
      const material = this.createHoleMaterial(holeData);
      
      // Create mesh
      const holeMesh = new THREE.Mesh(geometry, material);
      
      // Position on sphere surface
      const position = new THREE.Vector3(...holeData.position_3d).normalize();
      const surfacePosition = position.multiplyScalar(this.planetRadius * 1.001); // Slightly above to prevent z-fighting
      holeMesh.position.copy(surfacePosition);
      
      // Orient to face outward from planet center
      holeMesh.lookAt(surfacePosition.clone().multiplyScalar(2));
      
      this.holeMeshes.push(holeMesh);
      this.group.add(holeMesh);
    });
  }

  update(deltaTime: number): void {
    // Animate subtle changes in hole darkness for atmospheric effect
    const time = Date.now() * 0.0001;
    
    this.holeMeshes.forEach((mesh, index) => {
      if (mesh.material instanceof THREE.ShaderMaterial) {
        const uniforms = mesh.material.uniforms;
        
        // Subtle pulsing of shadow depth
        const pulseFactor = 0.95 + Math.sin(time + index) * 0.05;
        uniforms.ambientStrength.value = 0.4 * pulseFactor;
      }
    });
  }

  updateLightDirection(direction: THREE.Vector3): void {
    this.lightDirection.copy(direction).normalize();
    
    // Update all hole materials
    this.holeMeshes.forEach(mesh => {
      if (mesh.material instanceof THREE.ShaderMaterial) {
        mesh.material.uniforms.lightDirection.value.copy(this.lightDirection);
      }
    });
  }

  updateFromThreeLight(light: THREE.DirectionalLight): void {
    const direction = light.position.clone().normalize();
    this.updateLightDirection(direction);
  }

  addToScene(scene: THREE.Scene, planetPosition: THREE.Vector3): void {
    this.group.position.copy(planetPosition);
    scene.add(this.group);
  }

  removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.group);
  }

  getObject3D(): THREE.Object3D {
    return this.group;
  }

  dispose(): void {
    this.holeMeshes.forEach(mesh => {
      mesh.geometry.dispose();
      if (mesh.material instanceof THREE.Material) {
        mesh.material.dispose();
      }
    });
    this.holeMeshes = [];
  }
}

export function createCaveSurfaceHolesFromPythonData(
  planetRadius: number,
  pythonData?: any,
  seed?: number
): CaveSurfaceHolesEffect | null {
  // Extract cave surface data if available
  const caveData = pythonData?.surface_elements?.cave_holes;
  
  const params: CaveSurfaceHolesParams = {};
  
  if (caveData?.holes) {
    params.holes = caveData.holes;
  }
  
  if (caveData?.base_color) {
    params.baseColor = caveData.base_color;
  }
  
  if (caveData?.hole_color) {
    params.holeColor = caveData.hole_color;
  }
  
  return new CaveSurfaceHolesEffect(planetRadius, params, seed);
}