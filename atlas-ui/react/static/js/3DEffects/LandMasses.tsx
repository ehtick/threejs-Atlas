// atlas-ui/react/static/js/3DEffects/LandMasses.tsx
import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom.tsx";

export interface LandMassesParams {
  greenPatches?: any[];
  seed?: number;
  transparentMode?: boolean;
  tundraMode?: boolean;
}

export class LandMassesEffect {
  private landGroup: THREE.Group;
  private lands: THREE.Mesh[] = [];

  constructor(planetRadius: number, params: LandMassesParams = {}) {
    this.landGroup = new THREE.Group();
    
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);

    if (params.greenPatches && params.greenPatches.length > 0) {
      this.generateLandsFromPython(planetRadius, params.greenPatches, rng, params);
    } else {

      this.generateProceduralLands(planetRadius, rng, params);
    }
  }

  private generateLandsFromPython(planetRadius: number, greenPatches: any[], rng: SeededRandom, params: LandMassesParams): void {
    greenPatches.forEach((patch, index) => {

      let position = patch.position_3d || patch.position || [0, 0, 1];

      if (position.length === 2) {

        const theta = rng.uniform(0, Math.PI * 2);
        const phi = Math.acos(rng.uniform(-1, 1));
        position = [
          Math.sin(phi) * Math.cos(theta),
          Math.sin(phi) * Math.sin(theta),
          Math.cos(phi)
        ];
      }
      
      const size = (patch.size || 0.1) * planetRadius * 1.8;
      const sides = Math.max(8, Math.min(patch.sides || 20, 12));

      let patchColor = new THREE.Color(0x4a7c59);
      let patchOpacity = 1.0;
      
      if (patch.color && Array.isArray(patch.color)) {

        patchColor = new THREE.Color(
          patch.color[0],
          patch.color[1], 
          patch.color[2]
        );

        if (patch.color.length > 3) {
          patchOpacity = patch.color[3];
        }
      }

      const resolution = Math.max(24, Math.min(64, Math.floor(size * 32)));
      const planeSize = size * 2;

      const sphericalPos = new THREE.Vector3(
        position[0],
        position[1],
        position[2]
      ).normalize();

      const tangent1 = new THREE.Vector3();
      const tangent2 = new THREE.Vector3();
      
      if (Math.abs(sphericalPos.y) < 0.99) {
        tangent1.crossVectors(sphericalPos, new THREE.Vector3(0, 1, 0)).normalize();
      } else {
        tangent1.crossVectors(sphericalPos, new THREE.Vector3(1, 0, 0)).normalize();
      }
      tangent2.crossVectors(sphericalPos, tangent1).normalize();

      const baseFrequency = 2.0 / Math.max(size * 0.05, 1.0);
      
      const fbmNoise = (x: number, y: number) => {
        let value = 0;
        let amplitude = 1;
        let frequency = baseFrequency;
        let maxValue = 0;

        const octaves = Math.min(5, Math.max(3, Math.floor(size / 40) + 2));
        
        for (let i = 0; i < octaves; i++) {
          const sx = x * frequency;
          const sy = y * frequency;

          const hash = (px: number, py: number) => {
            const dot = px * 12.9898 + py * 78.233;
            return Math.sin(dot + rng.uniform(0, 1000)) * 43758.5453 % 1;
          };

          const ix = Math.floor(sx);
          const iy = Math.floor(sy);
          const fx = sx - ix;
          const fy = sy - iy;

          const smooth = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
          
          const sx_smooth = smooth(fx);
          const sy_smooth = smooth(fy);

          const n00 = hash(ix, iy);
          const n10 = hash(ix + 1, iy);
          const n01 = hash(ix, iy + 1);
          const n11 = hash(ix + 1, iy + 1);

          const nx0 = n00 * (1 - sx_smooth) + n10 * sx_smooth;
          const nx1 = n01 * (1 - sx_smooth) + n11 * sx_smooth;
          const nxy = nx0 * (1 - sy_smooth) + nx1 * sy_smooth;
          
          value += nxy * amplitude;
          maxValue += amplitude;
          
          amplitude *= 0.5;
          frequency *= 2.2;
        }
        
        return value / maxValue;
      };

      const vertices: number[] = [];
      const indices: number[] = [];
      const uvs: number[] = [];

      const landThreshold = 0.35;

      const vertexMap = new Map<string, number>();
      const heightMap = new Map<string, number>();
      let vertexIndex = 0;
      
      for (let i = 0; i <= resolution; i++) {
        for (let j = 0; j <= resolution; j++) {

          const u = (i / resolution - 0.5) * 2;
          const v = (j / resolution - 0.5) * 2;

          const distFromCenter = Math.sqrt(u * u + v * v);

          const noiseValue = fbmNoise(u * 2, v * 2);

          const shapeFactor = (1.0 - distFromCenter * 0.5) + noiseValue * 0.6;

          if (shapeFactor > landThreshold && distFromCenter < 1.2) {

            const localX = u * size;
            const localY = v * size;
            const localZ = 0;

            const worldPos = new THREE.Vector3()
              .addScaledVector(tangent1, localX)
              .addScaledVector(tangent2, localY)
              .addScaledVector(sphericalPos, localZ);
            
            vertices.push(worldPos.x, worldPos.y, worldPos.z);
            uvs.push((u + 1) * 0.5, (v + 1) * 0.5);

            vertexMap.set(`${i},${j}`, vertexIndex);

            heightMap.set(`${i},${j}`, noiseValue);
            vertexIndex++;
          }
        }
      }

      for (let i = 0; i < resolution; i++) {
        for (let j = 0; j < resolution; j++) {
          const v00 = vertexMap.get(`${i},${j}`);
          const v10 = vertexMap.get(`${i+1},${j}`);
          const v01 = vertexMap.get(`${i},${j+1}`);
          const v11 = vertexMap.get(`${i+1},${j+1}`);

          if (v00 !== undefined && v10 !== undefined && v01 !== undefined) {
            indices.push(v00, v10, v01);
          }
          if (v10 !== undefined && v11 !== undefined && v01 !== undefined) {
            indices.push(v10, v11, v01);
          }
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();

      const positions = geometry.attributes.position;
      const landPosition = sphericalPos.clone().multiplyScalar(planetRadius);
      const vertex = new THREE.Vector3();

      for (let i = 0; i < positions.count; i++) {
        vertex.fromBufferAttribute(positions, i);

        const worldVertex = vertex.clone().add(landPosition);

        const direction = worldVertex.clone().normalize();

        const uv = geometry.attributes.uv;
        if (uv) {
          const u = uv.getX(i) * 2 - 1;
          const v = uv.getY(i) * 2 - 1;
          const distFromCenter = Math.sqrt(u * u + v * v);

          const noiseValue = fbmNoise(u * 2, v * 2);

          const edgeFactor = Math.max(0, 1.0 - Math.pow(distFromCenter, 0.7));

          const combinedHeight = edgeFactor * 0.5 + noiseValue * 0.5;

          const smoothstep = (x: number) => x * x * (3.0 - 2.0 * x);
          const smoothHeight = smoothstep(combinedHeight);

          const cloudLayerRadius = planetRadius * 1.01;
          const maxAbsoluteRelief = cloudLayerRadius - planetRadius;

          const proportionalRelief = size * 0.15;
          const maxRelief = Math.min(proportionalRelief, maxAbsoluteRelief * 0.9);
          const minRelief = planetRadius * 0.008;

          const baseRadius = planetRadius + minRelief;
          const peakRadius = planetRadius + minRelief + maxRelief;

          const finalRadius = THREE.MathUtils.lerp(baseRadius, peakRadius, smoothHeight);
          
          const projectedVertex = direction.multiplyScalar(finalRadius);

          const localVertex = projectedVertex.sub(landPosition);
          
          positions.setXYZ(i, localVertex.x, localVertex.y, localVertex.z);
        }
      }
      
      positions.needsUpdate = true;
      geometry.computeVertexNormals();

      geometry.translate(landPosition.x, landPosition.y, landPosition.z);

      const material = new THREE.MeshPhongMaterial({
        color: params.transparentMode ? new THREE.Color(0xE6F3FF) : patchColor,
        opacity: params.transparentMode ? 0.3 : patchOpacity,
        transparent: params.transparentMode || patchOpacity < 1.0,
        emissive: params.transparentMode ? new THREE.Color(0xCCE6FF).multiplyScalar(0.1) : patchColor.clone().multiplyScalar(0.05),
        emissiveIntensity: params.transparentMode ? 0.05 : 0.0000001,
        shininess: params.transparentMode ? 30 : 8,
        flatShading: false,

        bumpScale: 0.002,

        depthWrite: true,
        depthTest: true,

        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
      });

      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 64;
      const ctx = canvas.getContext('2d')!;
      const imageData = ctx.createImageData(64, 64);
      
      for (let i = 0; i < imageData.data.length; i += 4) {
        const noise = rng.uniform(0.8, 1.2);
        const gray = Math.floor(128 * noise);
        imageData.data[i] = gray;
        imageData.data[i + 1] = gray;
        imageData.data[i + 2] = gray;
        imageData.data[i + 3] = 255;
      }
      
      ctx.putImageData(imageData, 0, 0);
      const noiseTexture = new THREE.CanvasTexture(canvas);
      noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
      noiseTexture.repeat.set(2, 2);
      
      material.bumpMap = noiseTexture;
      
      const landMesh = new THREE.Mesh(geometry, material);
      landMesh.castShadow = true;
      landMesh.receiveShadow = true;

      landMesh.renderOrder = 1;
      
      this.lands.push(landMesh);
      this.landGroup.add(landMesh);
    });
  }

  private generateProceduralLands(planetRadius: number, rng: SeededRandom, params: LandMassesParams): void {

    const numLands = Math.floor(rng.uniform(5, 15));
    
    for (let i = 0; i < numLands; i++) {

      const theta = rng.uniform(0, Math.PI * 2);
      const phi = Math.acos(rng.uniform(-1, 1));
      
      const position = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      );

      const size = planetRadius * rng.uniform(0.02, 0.08);

      const geometry = new THREE.CircleGeometry(size, 16);

      const worldPos = position.clone().multiplyScalar(planetRadius * 1.002);
      geometry.lookAt(position);
      geometry.translate(worldPos.x, worldPos.y, worldPos.z);

      const greenAmount = rng.uniform(0.3, 0.7);
      const baseColor = new THREE.Color(
        0.36 * (1 - greenAmount) + 0.22 * greenAmount,
        0.23 * (1 - greenAmount) + 0.36 * greenAmount,
        0
      );

      const isTundra = params.tundraMode || false;
      const proceduralOpacity = isTundra ? 0.25 : 1.0;
      
      const material = new THREE.MeshPhongMaterial({
        color: params.transparentMode ? new THREE.Color(0xE6F3FF) : baseColor,
        opacity: params.transparentMode ? 0.3 : proceduralOpacity,
        transparent: params.transparentMode || proceduralOpacity < 1.0,
        emissive: params.transparentMode ? new THREE.Color(0xCCE6FF).multiplyScalar(0.1) : 0x0a0a00,
        shininess: params.transparentMode ? 30 : 5,

        depthWrite: true,
        depthTest: true,
      });
      
      const landMesh = new THREE.Mesh(geometry, material);

      landMesh.renderOrder = 1;
      this.lands.push(landMesh);
      this.landGroup.add(landMesh);
    }
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.landGroup.position.copy(planetPosition);
    }
    scene.add(this.landGroup);
  }

  update(deltaTime: number): void {

  }

  getObject3D(): THREE.Group {
    return this.landGroup;
  }

  dispose(): void {
    this.lands.forEach(land => {
      land.geometry.dispose();
      if (land.material instanceof THREE.Material) {
        land.material.dispose();
      }
    });
    this.lands = [];
    this.landGroup.clear();
  }
}

export function createLandMassesFromPythonData(
  planetRadius: number, 
  surfaceData: any, 
  globalSeed?: number
): LandMassesEffect | null {

  const greenPatches = surfaceData.green_patches;
  
  if (!greenPatches || greenPatches.length === 0) {
    return null;
  }
  
  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  
  return new LandMassesEffect(planetRadius, {
    greenPatches: greenPatches,
    seed: seed + 6000
  });
}

export function createTransparentLandMassesForIcyPlanet(
  planetRadius: number, 
  surfaceData: any, 
  globalSeed?: number
): LandMassesEffect | null {

  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const rng = new SeededRandom(seed + 7000);

  const numPatches = Math.floor(rng.uniform(3, 8));
  const syntheticPatches = [];
  
  for (let i = 0; i < numPatches; i++) {

    const theta = rng.uniform(0, Math.PI * 2);
    const phi = Math.acos(rng.uniform(-1, 1));
    
    syntheticPatches.push({
      position_3d: [
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      ],
      size: rng.uniform(0.05, 0.15),
      sides: Math.floor(rng.uniform(8, 16)),
      color: [0, 0, 0]
    });
  }

  return new LandMassesEffect(planetRadius, {
    greenPatches: syntheticPatches,
    seed: seed + 7000,
    transparentMode: true
  });
}