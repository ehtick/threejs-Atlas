/**
 * Super Earth Water Features Effect - TEXTURE-BASED VERSION
 *
 * Creates water bodies using texture-based rendering with UV animation,
 * displacement maps, and normal maps for wave effects instead of vertex displacement.
 * Uses THREE.PlaneGeometry as base with unified water material.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

// Procedural ranges for water body generation (only actively used values)
const PROCEDURAL_RANGES = {
  WATER_BODY_COUNT: { min: 4, max: 8 }, // Number of water bodies
  WATER_BODY_RADIUS: { min: 0.07, max: 0.35 }, // Size of each water body
  WATER_BODY_OPACITY: { min: 0.6, max: 0.85 }, // Opacity variation for water bodies
};

export interface SuperEarthWaterFeaturesParams {
  water_bodies?: {
    position_3d: number[];
    radius: number;
    depth: number;
    opacity: number;
    shape_type?: "lake" | "pond" | "elongated" | "complex"; // Shape variety
    irregularity?: number; // 0-1, how irregular the coastline is
  }[];
  waterColor?: THREE.Color | number[];
  seed?: number;
  globalIrregularity?: number; // Default irregularity for procedural bodies
}

export class SuperEarthWaterFeaturesEffect {
  private waterGroup: THREE.Group;
  private waterBodyMeshes: THREE.Mesh[] = [];
  private params: SuperEarthWaterFeaturesParams;
  private rng: SeededRandom;
  private materials: THREE.Material[] = [];
  private planetRadius: number;

  // Unified water material for all bodies
  private waterMaterial: THREE.ShaderMaterial;

  // Texture maps for water effects
  private normalMap: THREE.DataTexture;
  private displacementMap: THREE.DataTexture;
  private foamMap: THREE.DataTexture;

  // Animation parameters
  private animationTime: number = 0;

  constructor(planetRadius: number, params: SuperEarthWaterFeaturesParams = {}) {
    console.log("💧 CREATING SuperEarthWaterFeaturesEffect - TEXTURE-BASED VERSION");
    console.log("Planet radius:", planetRadius);
    console.log("Params:", params);

    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);
    this.planetRadius = planetRadius;

    this.params = {
      water_bodies: params.water_bodies || [],
      waterColor: params.waterColor || new THREE.Color(0.2, 0.5, 0.9),
      globalIrregularity: params.globalIrregularity || 0.7,
      seed,
      ...params,
    };

    this.waterGroup = new THREE.Group();

    // Generate texture maps for water effects
    this.generateWaterTextures();

    // Create unified water material
    this.createUnifiedWaterMaterial();

    console.log("Creating texture-based water bodies...");
    this.generateWaterBodies();
    console.log(`✅ Created ${this.waterBodyMeshes.length} texture-based water bodies`);
  }

  private generateWaterTextures(): void {
    // Generate normal map for wave patterns
    const normalSize = 256;
    const normalData = new Uint8Array(normalSize * normalSize * 3);

    for (let i = 0; i < normalSize; i++) {
      for (let j = 0; j < normalSize; j++) {
        const idx = (i * normalSize + j) * 3;

        // Create more pronounced wave patterns for normals
        const u = (i / normalSize) * Math.PI * 6;
        const v = (j / normalSize) * Math.PI * 6;

        // Multiple wave frequencies for realistic ocean waves
        const wave1 = Math.sin(u * 1.0 + v * 0.5) * 0.5;
        const wave2 = Math.sin(u * 2.3 - v * 1.1) * 0.3;
        const wave3 = Math.sin(u * 0.7 + v * 1.9) * 0.2;

        const nx = (wave1 + wave2) * 0.5 + 0.5;
        const ny = (wave2 + wave3) * 0.5 + 0.5;
        const nz = 1.0;

        normalData[idx] = nx * 255;
        normalData[idx + 1] = ny * 255;
        normalData[idx + 2] = nz * 255;
      }
    }

    this.normalMap = new THREE.DataTexture(normalData, normalSize, normalSize, THREE.RGBFormat);
    this.normalMap.wrapS = THREE.RepeatWrapping;
    this.normalMap.wrapT = THREE.RepeatWrapping;
    this.normalMap.needsUpdate = true;

    // Generate displacement map for height variation
    const dispSize = 128;
    const dispData = new Uint8Array(dispSize * dispSize);

    for (let i = 0; i < dispSize; i++) {
      for (let j = 0; j < dispSize; j++) {
        const idx = i * dispSize + j;

        // Create smooth displacement without noise
        const u = (i / dispSize) * Math.PI * 2;
        const v = (j / dispSize) * Math.PI * 2;

        const disp1 = Math.sin(u * 2 + v) * 0.3;
        const disp2 = Math.cos(u - v * 2) * 0.3;
        const height = (disp1 + disp2) * 0.25 + 0.5;

        dispData[idx] = Math.max(0, Math.min(255, height * 255));
      }
    }

    this.displacementMap = new THREE.DataTexture(dispData, dispSize, dispSize, THREE.RedFormat);
    this.displacementMap.wrapS = THREE.RepeatWrapping;
    this.displacementMap.wrapT = THREE.RepeatWrapping;
    this.displacementMap.needsUpdate = true;

    // Generate foam map for shoreline effects
    const foamSize = 128;
    const foamData = new Uint8Array(foamSize * foamSize);

    for (let i = 0; i < foamSize; i++) {
      for (let j = 0; j < foamSize; j++) {
        const idx = i * foamSize + j;

        // Create smooth foam pattern
        const u = (i / foamSize) * Math.PI * 6;
        const v = (j / foamSize) * Math.PI * 6;
        const foamValue = (Math.sin(u) * Math.cos(v) + 1) * 0.5;
        const foam = foamValue > 0.6 ? foamValue * 0.8 : 0;

        foamData[idx] = foam * 255;
      }
    }

    this.foamMap = new THREE.DataTexture(foamData, foamSize, foamSize, THREE.RedFormat);
    this.foamMap.wrapS = THREE.RepeatWrapping;
    this.foamMap.wrapT = THREE.RepeatWrapping;
    this.foamMap.needsUpdate = true;
  }

  private createUnifiedWaterMaterial(): void {
    const vertexShader = `
      uniform float time;
      
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vAnimatedUv;
      
      void main() {
        vUv = uv;
        
        // Animate UV for more visible flowing water effect
        vAnimatedUv = uv + vec2(time * 0.08, time * 0.06);
        
        // No vertex displacement - keep water surface flat
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        
        // For curved water on planet surface, normal should point radially outward from planet center
        // Assume planet center is at origin (0,0,0)
        vWorldNormal = normalize(vWorldPosition);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform vec3 waterColor;
      uniform float opacity;
      uniform float time;
      uniform sampler2D normalMap;
      uniform vec3 lightPosition;
      uniform vec3 lightDirection;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vAnimatedUv;
      
      void main() {
        // Sample animated normal map with more visible wave patterns
        vec3 normalMapSample = texture2D(normalMap, vAnimatedUv * 2.0).rgb;
        vec3 perturbedNormal = normalize(vWorldNormal + (normalMapSample - 0.5) * 0.4);
        
        // EXACT SAME lighting calculation as PlanetLayerSystem
        vec3 normal = normalize(perturbedNormal);
        
        // Calculate lighting direction - EXACT COPY from PlanetLayerSystem
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
        }
        
        // Lambertian lighting calculation with smooth day/night transition
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Rim lighting for enhanced visibility
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Final lighting calculation (EXACT same as PlanetLayerSystem)
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        
        // Water-specific effects on top of base lighting
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.0);
        
        // Base water color (no foam textures inside - only clean water)
        vec3 finalColor = waterColor;
        
        // Apply EXACT same lighting as planet surface
        finalColor *= totalLight;
        
        // Add water-specific fresnel highlight
        finalColor += vec3(0.2, 0.3, 0.4) * fresnel * 0.3;
        
        // More visible shimmer effect for wave animation
        float shimmer = sin(time * 2.5 + vWorldPosition.x * 30.0 + vWorldPosition.z * 25.0) * 0.08 + 0.92;
        finalColor *= shimmer;
        
        // Calculate edge softness based on UV distance from center
        vec2 centerDist = vUv - vec2(0.5, 0.5);
        float distFromCenter = length(centerDist) * 2.0; // Normalize to 0-1 range
        
        // Add noise to the edge for more organic appearance
        float edgeNoise = sin(vUv.x * 20.0 + time * 0.5) * cos(vUv.y * 20.0 - time * 0.3) * 0.1;
        distFromCenter += edgeNoise;
        
        // Create very smooth edge falloff for organic appearance
        float edgeSoftness = 1.0 - smoothstep(0.5, 0.95, distFromCenter);
        
        // Apply additional smoothing at the very edge
        edgeSoftness = pow(edgeSoftness, 1.5);
        
        float finalOpacity = opacity * edgeSoftness;
        
        gl_FragColor = vec4(finalColor, finalOpacity);
      }
    `;

    this.waterMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        waterColor: { value: new THREE.Color(0.15, 0.55, 0.85) },
        opacity: { value: 0.8 },
        time: { value: 0 },
        normalMap: { value: this.normalMap },
        lightPosition: { value: new THREE.Vector3(0, 0, 0) }, // Will be updated by updateFromThreeLight
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() }, // Will be updated by updateFromThreeLight
        ambientStrength: { value: 0.15 }, // Same as PlanetLayerSystem
        lightIntensity: { value: 0.85 }, // Same as PlanetLayerSystem
      },
      transparent: true,
      side: THREE.DoubleSide, // Both sides to ensure visibility
      depthWrite: false, // Don't write to depth buffer to avoid z-fighting
      depthTest: true,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
      blendEquation: THREE.AddEquation,
    });
  }

  private generateWaterBodies(): void {
    // Use provided water bodies or generate procedural ones
    if (this.params.water_bodies && this.params.water_bodies.length > 0) {
      console.log(`Using ${this.params.water_bodies.length} water bodies from data`);
      this.params.water_bodies.forEach((bodyData, index) => {
        const waterMesh = this.createTextureBasedWaterBody(bodyData, index);
        if (waterMesh) {
          this.waterBodyMeshes.push(waterMesh);
          this.waterGroup.add(waterMesh);
        }
      });
    } else {
      console.log("No water body data provided, generating procedural water bodies");
      this.generateProceduralWaterBodies();
    }
  }

  private createTextureBasedWaterBody(bodyData: any, bodyIndex: number): THREE.Mesh | null {
    if (!bodyData.position_3d || bodyData.position_3d.length !== 3) {
      console.warn(`Water body ${bodyIndex} missing valid position_3d`);
      return null;
    }

    const position = new THREE.Vector3().fromArray(bodyData.position_3d);
    const sphericalPos = position.normalize();

    // Calculate size with randomization
    const baseRadius = bodyData.radius || this.rng.uniform(PROCEDURAL_RANGES.WATER_BODY_RADIUS.min, PROCEDURAL_RANGES.WATER_BODY_RADIUS.max);
    const size = baseRadius * this.planetRadius;

    // Create flat plane geometry - completely 2D with no depth
    const segments = 24; // Enough resolution for curving to sphere
    const geometry = new THREE.PlaneGeometry(size * 2, size * 2, segments, segments);

    // Add UV variation by rotating UVs randomly
    const uvRotation = this.rng.uniform(0, Math.PI * 2);
    const uvs = geometry.attributes.uv;
    const cosR = Math.cos(uvRotation);
    const sinR = Math.sin(uvRotation);

    for (let i = 0; i < uvs.count; i++) {
      const u = uvs.getX(i) - 0.5;
      const v = uvs.getY(i) - 0.5;
      uvs.setXY(i, u * cosR - v * sinR + 0.5, u * sinR + v * cosR + 0.5);
    }
    uvs.needsUpdate = true;

    // Create organic water shapes using noise-based boundary
    const positionsAttr = geometry.attributes.position;
    const uvsAttr = geometry.attributes.uv;
    const validVertices = [];
    const validUVs = [];
    const validIndices = [];
    const originalUVs = []; // Store original UVs for edge calculation

    // Generate organic boundary using noise
    const vertexMap = new Map();
    let newVertexIndex = 0;

    for (let i = 0; i < positionsAttr.count; i++) {
      const x = positionsAttr.getX(i);
      const y = positionsAttr.getY(i);
      const z = positionsAttr.getZ(i);

      // Store original UV for edge calculation
      const origU = uvsAttr.getX(i);
      const origV = uvsAttr.getY(i);

      // Base circular distance
      const distFromCenter = Math.sqrt(x * x + y * y);
      const angle = Math.atan2(y, x);

      // Create DIFFERENT geometric shapes with correct boundary calculations
      const shapeType = bodyIndex % 5; // 5 different shape types
      let withinBoundary = false;

      switch (shapeType) {
        case 0: // Oval/Elliptical
          const ellipseA = 1.0 + Math.sin(bodyIndex) * 0.3; // Reduced variation
          const ellipseB = 1.0 + Math.cos(bodyIndex * 1.3) * 0.3;
          const ellipseAngle = bodyIndex * 0.7;
          const rotatedX = x * Math.cos(ellipseAngle) - y * Math.sin(ellipseAngle);
          const rotatedY = x * Math.sin(ellipseAngle) + y * Math.cos(ellipseAngle);
          withinBoundary = (rotatedX * rotatedX) / (size * ellipseA * size * ellipseA) + (rotatedY * rotatedY) / (size * ellipseB * size * ellipseB) <= 1.0;
          break;

        case 1: // Kidney/Bean shape
          const beanRadius = size * (0.8 + Math.sin(angle * 2 + bodyIndex) * 0.2);
          const beanIndent = Math.cos(angle + Math.PI + bodyIndex) * size * 0.3;
          const effectiveRadius = Math.max(beanRadius + beanIndent, size * 0.5);
          withinBoundary = distFromCenter <= effectiveRadius;
          break;

        case 2: // Irregular blob
          const blobRadius = size * (0.8 + Math.sin(angle * 1.5 + bodyIndex) * 0.2 + Math.cos(angle * 2.3 + bodyIndex * 1.7) * 0.15);
          withinBoundary = distFromCenter <= blobRadius;
          break;

        case 3: // Teardrop shape
          const tearAngle = angle - bodyIndex;
          const tearRadius = size * ((1 + Math.cos(tearAngle)) * 0.4 + 0.4);
          const tearDistortion = Math.sin(tearAngle * 3) * size * 0.1;
          withinBoundary = distFromCenter <= tearRadius + tearDistortion;
          break;

        case 4: // Crescent/C-shape
          const crescentAngle = angle - bodyIndex * 0.5;
          const crescentRadius = size * Math.max(0.4, 1.0 - Math.cos(crescentAngle * 1.5) * 0.4);
          const crescentDetail = Math.sin(crescentAngle * 6) * size * 0.05;
          withinBoundary = distFromCenter <= crescentRadius + crescentDetail;
          break;
      }

      // Add subtle coastline irregularity if within base shape
      if (withinBoundary) {
        const coastlineNoise = Math.sin(angle * 12 + bodyIndex * 3) * 0.05;
        const finalRadius = distFromCenter * (1.0 + coastlineNoise);
        withinBoundary = finalRadius <= size * 1.1; // Allow slight expansion
      }

      // Keep vertex if it's within the shape boundary
      if (withinBoundary) {
        validVertices.push(x, y, z);
        validUVs.push(uvsAttr.getX(i), uvsAttr.getY(i));
        originalUVs.push(origU, origV); // Store original UV for edge softness
        vertexMap.set(i, newVertexIndex);
        newVertexIndex++;
      }
    }

    // Rebuild indices for valid vertices only
    const originalIndices = geometry.getIndex();
    if (originalIndices) {
      for (let i = 0; i < originalIndices.count; i += 3) {
        const a = originalIndices.getX(i);
        const b = originalIndices.getX(i + 1);
        const c = originalIndices.getX(i + 2);

        if (vertexMap.has(a) && vertexMap.has(b) && vertexMap.has(c)) {
          validIndices.push(vertexMap.get(a), vertexMap.get(b), vertexMap.get(c));
        }
      }
    }

    // Create new geometry with organic shape
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(validVertices, 3));
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(validUVs, 2));
    geometry.setIndex(validIndices);
    geometry.computeVertexNormals();

    // Create mesh with individual material for this water body's opacity
    const individualMaterial = this.waterMaterial.clone();
    individualMaterial.uniforms.opacity.value = bodyData.opacity || 0.8;
    // Ensure the cloned material has the texture references
    individualMaterial.uniforms.normalMap.value = this.normalMap;
    const waterMesh = new THREE.Mesh(geometry, individualMaterial);

    // Store individual material for cleanup
    this.materials.push(individualMaterial);

    // Create tangent space for spherical surface following
    const up = sphericalPos.clone();
    const right = new THREE.Vector3();
    if (Math.abs(up.y) < 0.99) {
      right.crossVectors(up, new THREE.Vector3(0, 1, 0)).normalize();
    } else {
      right.crossVectors(up, new THREE.Vector3(1, 0, 0)).normalize();
    }
    const forward = new THREE.Vector3().crossVectors(right, up).normalize();

    // Curve each vertex to follow planet surface at uniform height
    const positions = geometry.attributes.position;
    const centerPos = sphericalPos.clone().multiplyScalar(this.planetRadius * 1.001); // Just barely above surface

    for (let i = 0; i < positions.count; i++) {
      const localVertex = new THREE.Vector3();
      localVertex.fromBufferAttribute(positions, i);

      // Convert local flat coordinates to world space
      const worldVertex = centerPos.clone().add(right.clone().multiplyScalar(localVertex.x)).add(forward.clone().multiplyScalar(localVertex.y));

      // Project onto sphere surface at uniform height
      const projectedVertex = worldVertex.normalize().multiplyScalar(this.planetRadius * 1.001); // Just barely above surface

      // Store as world coordinates (no mesh positioning needed)
      positions.setXYZ(i, projectedVertex.x, projectedVertex.y, projectedVertex.z);
    }

    positions.needsUpdate = true;
    geometry.computeVertexNormals();

    // No mesh positioning - vertices are already in world space
    waterMesh.position.set(0, 0, 0);

    // Store metadata for animation
    waterMesh.userData = {
      baseSize: size,
      uvOffset: new THREE.Vector2(this.rng.uniform(0, 1), this.rng.uniform(0, 1)),
      animationSpeed: this.rng.uniform(0.8, 1.2),
      index: bodyIndex,
    };

    waterMesh.renderOrder = 1002; // Just above surface, same level as land masses
    waterMesh.castShadow = false;
    waterMesh.receiveShadow = true;

    console.log(`Created texture-based water body ${bodyIndex}`);
    return waterMesh;
  }

  private generateProceduralWaterBodies(): void {
    const bodyCount = this.rng.randint(PROCEDURAL_RANGES.WATER_BODY_COUNT.min, PROCEDURAL_RANGES.WATER_BODY_COUNT.max);

    console.log(`Generating ${bodyCount} procedural texture-based water bodies`);

    for (let i = 0; i < bodyCount; i++) {
      const radius = this.rng.uniform(PROCEDURAL_RANGES.WATER_BODY_RADIUS.min, PROCEDURAL_RANGES.WATER_BODY_RADIUS.max);

      const bodyData = {
        position_3d: this.generateRandomSurfacePoint(),
        radius: radius,
        depth: 0.025, // Fixed depth since depth variation is not used
        opacity: this.rng.uniform(PROCEDURAL_RANGES.WATER_BODY_OPACITY.min, PROCEDURAL_RANGES.WATER_BODY_OPACITY.max),
      };

      const waterMesh = this.createTextureBasedWaterBody(bodyData, i);
      if (waterMesh) {
        this.waterBodyMeshes.push(waterMesh);
        this.waterGroup.add(waterMesh);
      }
    }
  }

  private generateRandomSurfacePoint(): number[] {
    // MANUAL ADJUSTMENT - Modify these ranges to control where water appears:

    // Current: Random distribution avoiding poles
    // const theta = this.rng.uniform(0.3, Math.PI - 0.3);  // Latitude: 0=north pole, π=south pole
    // const phi = this.rng.uniform(0, Math.PI * 2);        // Longitude: 0=east, π=west, 2π=east

    // EXAMPLE OPTIONS - uncomment one:

    // 1. Northern hemisphere only:
    // const theta = this.rng.uniform(0.2, Math.PI * 0.6);
    // const phi = this.rng.uniform(0, Math.PI * 2);

    // 2. Equatorial band:
    // const theta = this.rng.uniform(Math.PI * 0.3, Math.PI * 0.7);
    // const phi = this.rng.uniform(0, Math.PI * 2);

    // 3. Western hemisphere:
    // const theta = this.rng.uniform(0.3, Math.PI - 0.3);
    // const phi = this.rng.uniform(Math.PI * 0.5, Math.PI * 1.5);

    // CURRENT SETTING (change these values):
    const theta = this.rng.uniform(0.3, Math.PI - 0.3); // Full latitude range
    const phi = this.rng.uniform(0, Math.PI * 2); // Full longitude range

    const x = Math.sin(theta) * Math.cos(phi);
    const y = Math.cos(theta);
    const z = Math.sin(theta) * Math.sin(phi);

    return [x, y, z];
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    console.log("💧 Adding texture-based water features to scene");
    if (planetPosition) {
      this.waterGroup.position.copy(planetPosition);
    }
    scene.add(this.waterGroup);
    console.log(`✅ Added ${this.waterBodyMeshes.length} water bodies to scene`);
  }

  /**
   * Update lighting from Three.js DirectionalLight - EXACT same as PlanetLayerSystem
   */
  updateFromThreeLight(light: THREE.DirectionalLight): void {
    // Update all individual water body materials
    this.materials.forEach((material) => {
      if (material instanceof THREE.ShaderMaterial && material.uniforms) {
        // Update light position (for point light calculations)
        if (material.uniforms.lightPosition) {
          material.uniforms.lightPosition.value.copy(light.position);
        }

        // Calculate and update light direction (for directional light calculations)
        if (material.uniforms.lightDirection) {
          const direction = light.target.position.clone().sub(light.position).normalize();
          material.uniforms.lightDirection.value.copy(direction);
        }
      }
    });

    // Also update the base water material
    if (this.waterMaterial && this.waterMaterial.uniforms) {
      // Update light position (for point light calculations)
      if (this.waterMaterial.uniforms.lightPosition) {
        this.waterMaterial.uniforms.lightPosition.value.copy(light.position);
      }

      // Calculate and update light direction (for directional light calculations)
      if (this.waterMaterial.uniforms.lightDirection) {
        const direction = light.target.position.clone().sub(light.position).normalize();
        this.waterMaterial.uniforms.lightDirection.value.copy(direction);
      }
    }

    console.log("🌊 Updated water lighting from DirectionalLight - position:", light.position);
  }

  update(deltaTime: number): void {
    this.animationTime += deltaTime;

    // Update shader time uniform for UV animation (2D wave simulation)
    if (this.waterMaterial && this.waterMaterial.uniforms) {
      this.waterMaterial.uniforms.time.value = this.animationTime;
    }

    // Update all individual water body materials
    this.materials.forEach((material) => {
      if (material instanceof THREE.ShaderMaterial && material.uniforms) {
        material.uniforms.time.value = this.animationTime;
      }
    });

    // Animate normal map for more visible 2D wave simulation
    if (this.normalMap) {
      this.normalMap.offset.x += deltaTime * 0.02;
      this.normalMap.offset.y += deltaTime * 0.015;
      this.normalMap.needsUpdate = true;
    }

    // Foam map animation for shoreline effects
    if (this.foamMap) {
      this.foamMap.offset.x += deltaTime * 0.025;
      this.foamMap.offset.y += deltaTime * 0.018;
      this.foamMap.needsUpdate = true;
    }
  }

  updateParams(newParams: Partial<SuperEarthWaterFeaturesParams>): void {
    this.params = { ...this.params, ...newParams };

    if (newParams.waterColor && this.waterMaterial) {
      const waterColor = newParams.waterColor instanceof THREE.Color ? newParams.waterColor : new THREE.Color().fromArray(newParams.waterColor as number[]);

      this.waterMaterial.uniforms.waterColor.value.copy(waterColor);
    }
  }

  getObject3D(): THREE.Group {
    return this.waterGroup;
  }

  dispose(): void {
    // Dispose textures
    if (this.normalMap) this.normalMap.dispose();
    if (this.displacementMap) this.displacementMap.dispose();
    if (this.foamMap) this.foamMap.dispose();

    // Dispose material
    if (this.waterMaterial) this.waterMaterial.dispose();

    // Dispose geometries
    this.waterBodyMeshes.forEach((mesh) => {
      if (mesh.geometry) mesh.geometry.dispose();
    });

    this.waterBodyMeshes = [];
    this.waterGroup.clear();
  }
}

/**
 * Create Super Earth water features from Python data - TEXTURE-BASED VERSION
 *
 * Creates water bodies using texture-based rendering with UV animation
 * and normal maps for wave effects instead of vertex displacement.
 */
export function createSuperEarthWaterFeaturesFromPythonData(planetRadius: number, surfaceData: any, globalSeed?: number, planetType?: string): SuperEarthWaterFeaturesEffect | null {
  console.log("💧 Creating Texture-Based SuperEarthWaterFeatures from Python data");
  console.log("Surface data:", surfaceData);
  console.log("Planet type:", planetType);

  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const waterSeed = seed + 10000;
  const rng = new SeededRandom(waterSeed);

  // Extract water features data from Python
  const waterFeaturesData = surfaceData.water_features || {};
  let waterBodies = waterFeaturesData.water_bodies || [];

  // Handle desert planets with 3-5% probability for rare water masses
  if (planetType === "desert") {
    const probability = rng.uniform(3, 5); // 3-5% probability
    const roll = rng.uniform(0, 100);
    console.log(`💧 Desert water probability: ${probability.toFixed(2)}%, rolled: ${roll.toFixed(2)}%`);

    if (roll <= probability) {
      console.log("💧 Desert planet gets rare water mass!");
      // Generate a single rare water mass for desert
      const theta = rng.uniform(0, 2 * Math.PI);
      const phi = Math.acos(rng.uniform(-1, 1));

      waterBodies = [
        {
          position_3d: [Math.sin(phi) * Math.cos(theta), Math.sin(phi) * Math.sin(theta), Math.cos(phi)],
          radius: rng.uniform(0.08, 0.15), // Medium-sized for desert
          depth: rng.uniform(0.005, 0.015),
          opacity: rng.uniform(0.75, 0.85),
          shape_type: "lake",
        },
      ];
    } else {
      console.log("💧 Desert planet has no water masses (too dry)");
      return null; // No water for this desert planet
    }
  }

  // Also check for blue_patches (legacy support)
  if (waterBodies.length === 0 && surfaceData.blue_patches && surfaceData.blue_patches.length > 0) {
    console.log("💧 Converting blue_patches to water_bodies");
    waterBodies = surfaceData.blue_patches.map((patch: any) => ({
      position_3d: patch.position_3d,
      radius: patch.size || 0.1,
      depth: patch.height || 0.02,
      opacity: patch.color?.[3] || 0.8,
      shape_type: "lake",
    }));
  }

  console.log("Water bodies from Python:", waterBodies);

  const params: SuperEarthWaterFeaturesParams = {
    water_bodies: waterBodies,
    waterColor: new THREE.Color(0.2, 0.5, 0.9),
    globalIrregularity: 0.7,
    seed: waterSeed,
  };

  console.log("Creating texture-based SuperEarthWaterFeaturesEffect with params:", params);

  const effect = new SuperEarthWaterFeaturesEffect(planetRadius, params);

  console.log("✅ Texture-based SuperEarthWaterFeaturesEffect created successfully");
  return effect;
}
