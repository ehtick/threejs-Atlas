/**
 * Cave Surface Holes Effect
 * Creates transparent holes as a layer over the planet surface with depth cones
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
  private coneMeshes: THREE.Mesh[] = [];
  private holeMask?: THREE.Mesh;
  private holeColor: THREE.Color;

  constructor(planetRadius: number, params: CaveSurfaceHolesParams = {}, seed?: number) {
    this.group = new THREE.Group();
    this.planetRadius = planetRadius;
    
    const actualSeed = seed || 12345;
    this.rng = new SeededRandom(actualSeed);
    
    this.holeColor = params.holeColor instanceof THREE.Color
      ? params.holeColor
      : new THREE.Color(params.holeColor || '#000000');
    
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

  // Create planet base material with transparent holes
  createPlanetHoleShader(baseColor: THREE.Color): THREE.ShaderMaterial {
    const maxHoles = Math.max(this.holesData.length, 1);
    
    const vertexShader = `
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normalMatrix * normal;
        vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        vUv = uv;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 baseColor;
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      uniform vec3 holePositions[${maxHoles}];
      uniform float holeRadii[${maxHoles}];
      uniform int numHoles;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      void main() {
        vec3 worldPos = normalize(vWorldPosition);
        
        // Check if this fragment is inside any hole
        for(int i = 0; i < ${maxHoles}; i++) {
          if(i >= numHoles) break;
          
          vec3 holePos = normalize(holePositions[i]);
          float dist = distance(worldPos, holePos);
          float holeRadius = holeRadii[i];
          
          // If we're inside a hole, discard this fragment (make it completely transparent)
          if(dist < holeRadius) {
            discard;
          }
        }
        
        // Calculate lighting for non-hole areas (same as base planet shader)
        vec3 normal = normalize(vWorldNormal);
        
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Add rim lighting
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Apply lighting
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        vec3 finalColor = baseColor * totalLight;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const holePositions = new Array(maxHoles).fill(null).map((_, i) => 
      i < this.holesData.length 
        ? new THREE.Vector3(...this.holesData[i].position_3d)
        : new THREE.Vector3(0, 0, 0)
    );
    
    const holeRadii = new Array(maxHoles).fill(null).map((_, i) => 
      i < this.holesData.length ? this.holesData[i].radius : 0
    );

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        baseColor: { value: baseColor },
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) },
        ambientStrength: { value: 0.15 },
        lightIntensity: { value: 0.85 },
        holePositions: { value: holePositions },
        holeRadii: { value: holeRadii },
        numHoles: { value: this.holesData.length }
      },
      side: THREE.FrontSide
    });
  }

  private createHoles(): void {
    // Create depth cones for each hole
    this.holesData.forEach((holeData) => {
      this.createHoleCone(holeData);
    });
  }

  private createHoleCone(holeData: NonNullable<CaveSurfaceHolesParams['holes']>[0]): void {
    const position = new THREE.Vector3(...holeData.position_3d).normalize();
    const coneRadius = holeData.radius * this.planetRadius;
    const caveDepth = holeData.depth * this.planetRadius * 2;
    
    // Create a cone that sits exactly in the hole opening, pointing inward
    const coneGeometry = new THREE.ConeGeometry(coneRadius, caveDepth, 16);
    const coneMaterial = new THREE.MeshLambertMaterial({
      color: new THREE.Color(0x808080), // Gray color for testing alignment
      transparent: true,
      opacity: 1.0,
      side: THREE.DoubleSide
    });
    
    const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
    
    // Position cone exactly at the hole location on planet surface
    const surfacePosition = position.clone().multiplyScalar(this.planetRadius);
    const inwardDirection = position.clone().negate();
    
    // Place cone so its wide end is at the surface and tip points inward
    const conePosition = surfacePosition.clone().add(inwardDirection.clone().multiplyScalar(caveDepth * 0.5));
    coneMesh.position.copy(conePosition);
    
    // Orient cone so tip points toward planet center
    // The cone by default points up (0,1,0), we need it to point toward center
    const up = new THREE.Vector3(0, 1, 0);
    const targetDirection = inwardDirection.clone(); // Direction toward center from this position
    
    // Create quaternion to rotate from up direction to target direction
    const quaternion = new THREE.Quaternion().setFromUnitVectors(up, targetDirection);
    coneMesh.setRotationFromQuaternion(quaternion);
    
    this.coneMeshes.push(coneMesh);
    this.group.add(coneMesh);
  }

  update(_deltaTime: number): void {
    // Animate subtle changes in cone lighting for atmospheric effect
    const time = Date.now() * 0.0001;
    
    this.coneMeshes.forEach((mesh, index) => {
      if (mesh.material instanceof THREE.MeshLambertMaterial) {
        // Subtle pulsing of opacity
        const pulseFactor = 0.7 + Math.sin(time + index * 0.5) * 0.1;
        mesh.material.opacity = pulseFactor;
      }
    });
  }

  updateLightDirection(direction: THREE.Vector3): void {
    if (this.planetShader) {
      this.planetShader.uniforms.lightDirection.value.copy(direction.normalize());
    }
  }

  updateFromThreeLight(light: THREE.DirectionalLight): void {
    if (this.planetShader) {
      this.planetShader.uniforms.lightPosition.value.copy(light.position);
      const direction = light.target.position.clone().sub(light.position).normalize();
      this.planetShader.uniforms.lightDirection.value.copy(direction);
    }
  }

  addToScene(scene: THREE.Scene, planetPosition: THREE.Vector3): void {
    this.group.position.copy(planetPosition);
    scene.add(this.group);
  }

  // Apply hole shader to planet layer system
  applyToPlanetSystem(planetSystem: any, baseColor: THREE.Color): void {
    const holeShader = this.createPlanetHoleShader(baseColor);
    planetSystem.applyHoleShader(holeShader);
    this.planetShader = holeShader;
  }

  private planetShader?: THREE.ShaderMaterial;

  removeFromScene(scene: THREE.Scene): void {
    scene.remove(this.group);
  }

  getObject3D(): THREE.Object3D {
    return this.group;
  }

  dispose(): void {
    this.coneMeshes.forEach(mesh => {
      mesh.geometry.dispose();
      if (mesh.material instanceof THREE.Material) {
        mesh.material.dispose();
      }
    });
    this.coneMeshes = [];
    
    if (this.planetShader) {
      this.planetShader.dispose();
      this.planetShader = undefined;
    }
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
  
  if (caveData?.hole_color) {
    params.holeColor = caveData.hole_color;
  }
  
  return new CaveSurfaceHolesEffect(planetRadius, params, seed);
}