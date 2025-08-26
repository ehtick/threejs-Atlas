/**
 * Super Earth Water Features Effect - ORGANIC VERSION
 *
 * Creates realistic, organic water body shapes that resemble natural lakes, ponds,
 * and water formations using procedural noise and vertex displacement.
 * Features irregular coastlines and natural water body appearance.
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";

// Procedural ranges for water body generation
const PROCEDURAL_RANGES = {
  WATER_BODY_COUNT: { min: 4, max: 8 }, // Number of water bodies
  WATER_BODY_RADIUS: { min: 0.07, max: 0.35 }, // Size of each water body
  WATER_BODY_DEPTH: { min: 0.01, max: 0.04 }, // Depth variation
  WATER_BODY_OPACITY: { min: 0.6, max: 0.8 }, // Base transparency
  SHAPE_IRREGULARITY: { min: 0.5, max: 1.5 }, // How organic the shape is
  COASTLINE_COMPLEXITY: { min: 0.3, max: 0.7 }, // Coastline detail level
  ELONGATION_RATIO: { min: 2.0, max: 4.0 }, // For elongated water bodies
  COMPLEX_INLETS: { min: 3, max: 6 }, // Number of inlets for complex shapes
  LARGE_BODY_OPACITY: { min: 0.7, max: 0.85 }, // Larger bodies are more opaque (deeper)
  MEDIUM_BODY_OPACITY: { min: 0.65, max: 0.75 }, // Medium bodies have moderate opacity
  SMALL_BODY_OPACITY: { min: 0.5, max: 0.65 }, // Smaller bodies are more transparent (shallower)
  LARGE_BODY_THRESHOLD: 0.2, // Bodies larger than 20% of max size are "large"
  SMALL_BODY_THRESHOLD: 0.1, // Bodies smaller than 10% of max size are "small"
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
  
  // Performance optimizations - geometry and material caching
  private static geometryCache = new Map<string, THREE.BufferGeometry>();
  private static sharedMaterials = new Map<string, THREE.MeshPhysicalMaterial>();
  
  // Color definitions for different water body types - aquifer water tones
  private static readonly MASS_COLORS = {
    lake: new THREE.Color(0.15, 0.65, 0.85),     // Crystal aquifer blue - large bodies
    pond: new THREE.Color(0.12, 0.58, 0.78),     // Clear aquifer blue - smaller bodies  
    elongated: new THREE.Color(0.08, 0.52, 0.72), // Deep aquifer blue - rivers/streams
    complex: new THREE.Color(0.05, 0.48, 0.68)   // Deepest aquifer blue - complex shapes
  };
  
  // Aquifer-specific shimmer colors for enhanced visual effects
  private static readonly AQUIFER_SHIMMER_COLORS = {
    lake: new THREE.Color(0.3, 0.8, 1.0),       // Bright aquifer shimmer
    pond: new THREE.Color(0.25, 0.75, 0.95),    // Medium aquifer shimmer
    elongated: new THREE.Color(0.2, 0.7, 0.9),  // Flowing aquifer shimmer
    complex: new THREE.Color(0.15, 0.65, 0.85)  // Deep aquifer shimmer
  };

  constructor(planetRadius: number, params: SuperEarthWaterFeaturesParams = {}) {
    console.log("🌊 CREATING SuperEarthWaterFeaturesEffect - ORGANIC VERSION");
    console.log("Planet radius:", planetRadius);
    console.log("Params:", params);

    const seed = params.seed || Math.floor(Math.random() * 1000000);
    this.rng = new SeededRandom(seed);
    this.planetRadius = planetRadius;

    this.params = {
      water_bodies: params.water_bodies || [],
      waterColor: params.waterColor || new THREE.Color(0.1, 0.4, 0.7), // Natural water blue
      globalIrregularity: params.globalIrregularity || 0.6, // Default irregularity
      seed,
      ...params,
    };

    this.waterGroup = new THREE.Group();
    console.log("Creating organic water bodies...");
    this.generateWaterBodies();
    console.log(`✅ Created ${this.waterBodyMeshes.length} organic water bodies`);
  }

  private generateWaterBodies(): void {
    // Use provided water bodies or generate procedural ones
    if (this.params.water_bodies && this.params.water_bodies.length > 0) {
      console.log(`Using ${this.params.water_bodies.length} water bodies from data`);
      this.params.water_bodies.forEach((bodyData, index) => {
        const waterMesh = this.createOrganicWaterBody(bodyData, index);
        if (waterMesh) {
          this.waterBodyMeshes.push(waterMesh);
          this.waterGroup.add(waterMesh);
          console.log(`Added organic water body ${index} at position:`, bodyData.position_3d);
        }
      });
    } else {
      console.log("No water body data provided, generating procedural water bodies");
      this.generateProceduralWaterBodies();
    }
  }

  private createOrganicWaterBody(bodyData: any, bodyIndex: number): THREE.Mesh | null {
    if (!bodyData.position_3d || bodyData.position_3d.length !== 3) {
      console.warn(`Water body ${bodyIndex} missing valid position_3d:`, bodyData.position_3d);
      return null;
    }

    const position = new THREE.Vector3().fromArray(bodyData.position_3d);
    const sphericalPos = position.normalize();

    // Water body parameters
    const baseSize = Math.max(0.02, bodyData.radius || 0.08) * this.planetRadius;
    const shapeType = bodyData.shape_type || this.getRandomShapeType();
    const irregularity = bodyData.irregularity ?? this.params.globalIrregularity ?? 0.6;

    console.log(`Creating organic water body ${bodyIndex} (${shapeType}) with base size:`, baseSize);

    // Check cache first for similar geometries
    const cacheKey = `${shapeType}_${Math.round(baseSize * 100)}_${Math.round(irregularity * 10)}`;
    let geometry = SuperEarthWaterFeaturesEffect.geometryCache.get(cacheKey);
    
    if (!geometry) {
      geometry = this.generateOrganicWaterGeometry(sphericalPos, baseSize, shapeType, irregularity, bodyIndex);
      if (geometry && SuperEarthWaterFeaturesEffect.geometryCache.size < 20) { // Limit cache size
        SuperEarthWaterFeaturesEffect.geometryCache.set(cacheKey, geometry.clone());
      }
    } else {
      geometry = geometry.clone(); // Clone cached geometry for this instance
    }

    if (!geometry) {
      console.warn(`Failed to generate geometry for water body ${bodyIndex}`);
      return null;
    }

    // Use the same material for all water bodies
    const materialKey = "standardWater"; // Same material key for all
    
    let material = SuperEarthWaterFeaturesEffect.sharedMaterials.get(materialKey);
    
    if (!material) {
      // Use the same color and shimmer for all water bodies
      const waterColor = SuperEarthWaterFeaturesEffect.MASS_COLORS.lake; // Same color for all
      const shimmerColor = SuperEarthWaterFeaturesEffect.AQUIFER_SHIMMER_COLORS.lake; // Same shimmer for all
      
      // Create aquifer water-like material with enhanced properties
      material = new THREE.MeshPhysicalMaterial({
        color: waterColor,
        opacity: 0.7, // Fixed opacity for all bodies
        transparent: true,
        emissive: waterColor.clone().multiplyScalar(0.2),
        side: THREE.DoubleSide,
        depthWrite: true,
        depthTest: true,
        // Enhanced aquifer_water effect properties
        roughness: 0.02, // Smoother surface for clearer water
        metalness: 0.05, // Less metallic for natural water
        transmission: 0.6, // Higher transmission for aquifer clarity
        thickness: 0.8, // Increased thickness for depth
        ior: 1.33, // Water refraction index
        reflectivity: 0.5, // Higher reflectivity for aquifer surface
        iridescence: 0.3, // Enhanced iridescence for aquifer shimmer
        iridescenceIOR: 1.4, // Stronger iridescence effect
        sheen: 0.5, // Enhanced sheen for aquifer glow
        sheenColor: shimmerColor.clone(),
        clearcoat: 0.7, // Stronger clearcoat for aquifer surface
        clearcoatRoughness: 0.03, // Smoother clearcoat for aquifer effect
        // Additional aquifer water properties
        attenuationDistance: 1.5, // Enhanced light attenuation through aquifer water
        attenuationColor: waterColor.clone().multiplyScalar(0.8),
      });
      
      SuperEarthWaterFeaturesEffect.sharedMaterials.set(materialKey, material);
    }
    this.materials.push(material);
    const waterMesh = new THREE.Mesh(geometry, material);
    waterMesh.renderOrder = 1002; // Above land masses
    waterMesh.castShadow = false; // Water doesn't cast shadows
    waterMesh.receiveShadow = true; // But receives shadows
    
    // Store base opacity for animation - same for all bodies
    waterMesh.userData.baseOpacity = 0.7;
    waterMesh.userData.shapeType = shapeType; // Store shape type for aquifer effects
    
    // Store original vertex positions for wave animation
    const positions = geometry.attributes.position;
    const originalPositions = new Float32Array(positions.array.length);
    originalPositions.set(positions.array);
    waterMesh.userData.originalPositions = originalPositions;
    waterMesh.userData.waveAmplitude = 0.001; // Fixed wave amplitude for all bodies
    waterMesh.userData.waveSpeed = 1.0; // Fixed wave speed for all bodies
    waterMesh.userData.baseSize = baseSize; // Store for debugging

    console.log(`Organic water body ${bodyIndex} created successfully with wave data`);
    return waterMesh;
  }

  private generateProceduralWaterBodies(): void {
    // Generate procedural water bodies using PROCEDURAL_RANGES
    const bodyCount = this.rng.randint(PROCEDURAL_RANGES.WATER_BODY_COUNT.min, PROCEDURAL_RANGES.WATER_BODY_COUNT.max);
    console.log(`Generating ${bodyCount} procedural water bodies using PROCEDURAL_RANGES`);

    for (let i = 0; i < bodyCount; i++) {
      const shapeType = this.getRandomShapeType();

      // Use appropriate irregularity and complexity based on shape type
      let irregularity = this.rng.uniform(PROCEDURAL_RANGES.SHAPE_IRREGULARITY.min, PROCEDURAL_RANGES.SHAPE_IRREGULARITY.max);

      // Adjust parameters based on shape type
      if (shapeType === "complex") {
        // Complex shapes need higher irregularity
        irregularity = Math.max(irregularity, 0.6);
      } else if (shapeType === "pond") {
        // Ponds are more regular
        irregularity = Math.min(irregularity, 0.4);
      }

      // Generate radius first to determine opacity based on size
      const radius = this.rng.uniform(PROCEDURAL_RANGES.WATER_BODY_RADIUS.min, PROCEDURAL_RANGES.WATER_BODY_RADIUS.max);

      // Determine opacity based on water body size
      let opacity: number;
      if (radius > PROCEDURAL_RANGES.LARGE_BODY_THRESHOLD) {
        // Large bodies - deeper water, more opaque
        opacity = this.rng.uniform(PROCEDURAL_RANGES.LARGE_BODY_OPACITY.min, PROCEDURAL_RANGES.LARGE_BODY_OPACITY.max);
      } else if (radius < PROCEDURAL_RANGES.SMALL_BODY_THRESHOLD) {
        // Small bodies - shallower water, more transparent
        opacity = this.rng.uniform(PROCEDURAL_RANGES.SMALL_BODY_OPACITY.min, PROCEDURAL_RANGES.SMALL_BODY_OPACITY.max);
      } else {
        // Medium bodies - moderate opacity
        opacity = this.rng.uniform(PROCEDURAL_RANGES.MEDIUM_BODY_OPACITY.min, PROCEDURAL_RANGES.MEDIUM_BODY_OPACITY.max);
      }

      const bodyData = {
        position_3d: this.generateRandomSurfacePoint(),
        radius: radius,
        depth: this.rng.uniform(PROCEDURAL_RANGES.WATER_BODY_DEPTH.min, PROCEDURAL_RANGES.WATER_BODY_DEPTH.max),
        opacity: opacity,
        shape_type: shapeType,
        irregularity: irregularity,
        coastline_complexity: this.rng.uniform(PROCEDURAL_RANGES.COASTLINE_COMPLEXITY.min, PROCEDURAL_RANGES.COASTLINE_COMPLEXITY.max),
      };

      const waterMesh = this.createOrganicWaterBody(bodyData, i);
      if (waterMesh) {
        this.waterBodyMeshes.push(waterMesh);
        this.waterGroup.add(waterMesh);
        console.log(`Generated procedural water body ${i} with shape ${shapeType}`);
      }
    }
  }

  /**
   * Get a random shape type for water bodies with natural distribution
   */
  private getRandomShapeType(): "lake" | "pond" | "elongated" | "complex" {
    const rand = this.rng.uniform(0, 1);
    if (rand < 0.4) return "lake"; // 40% - irregular round lakes
    if (rand < 0.7) return "pond"; // 30% - smaller, more circular ponds
    if (rand < 0.9) return "elongated"; // 20% - river-like elongated bodies
    return "complex"; // 10% - complex shapes with inlets
  }

  /**
   * Generate organic water body geometry using FBM noise for natural coastlines
   */
  private generateOrganicWaterGeometry(sphericalPos: THREE.Vector3, baseSize: number, shapeType: string, irregularity: number, seedOffset: number): THREE.BufferGeometry | null {
    // Create tangent space for the water body surface
    const tangent1 = new THREE.Vector3();
    const tangent2 = new THREE.Vector3();

    if (Math.abs(sphericalPos.y) < 0.99) {
      tangent1.crossVectors(sphericalPos, new THREE.Vector3(0, 1, 0)).normalize();
    } else {
      tangent1.crossVectors(sphericalPos, new THREE.Vector3(1, 0, 0)).normalize();
    }
    tangent2.crossVectors(sphericalPos, tangent1).normalize();

    // Shape-specific parameters
    let aspectRatio = 1.0;
    let complexityBonus = 0.0;
    let noiseAmplitude = irregularity * 0.4;

    switch (shapeType) {
      case "elongated":
        aspectRatio = this.rng.uniform(PROCEDURAL_RANGES.ELONGATION_RATIO.min, PROCEDURAL_RANGES.ELONGATION_RATIO.max); // Stretch in one direction using PROCEDURAL_RANGES
        noiseAmplitude *= 1.2; // More coastal variation
        break;
      case "complex":
        complexityBonus = 0.3; // Extra noise detail for inlets
        noiseAmplitude *= 1.5;
        break;
      case "pond":
        noiseAmplitude *= 0.7; // Smoother, more regular
        break;
      case "lake":
      default:
        // Standard parameters
        break;
    }

    // Adaptive resolution based on size - optimized for performance
    const resolution = Math.max(16, Math.min(64, Math.floor(baseSize * 200)));

    // FBM Noise function for organic coastlines (adapted from LandMasses.tsx)
    const fbmNoise = (x: number, y: number) => {
      let value = 0;
      let amplitude = 1;
      let frequency = 3.0 / Math.max(baseSize * 0.1, 1.0); // Adaptive frequency
      let maxValue = 0;

      // Reduced octaves for performance - still maintains good quality
      const octaves = shapeType === "complex" ? 3 : 2;

      for (let i = 0; i < octaves; i++) {
        const sx = x * frequency;
        const sy = y * frequency;

        // Hash function for coherent noise
        const hash = (px: number, py: number) => {
          const dot = px * 12.9898 + py * 78.233;
          return (Math.sin(dot + seedOffset * 1000) * 43758.5453) % 1;
        };

        // Smooth interpolation
        const ix = Math.floor(sx);
        const iy = Math.floor(sy);
        const fx = sx - ix;
        const fy = sy - iy;

        const smooth = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
        const sx_smooth = smooth(fx);
        const sy_smooth = smooth(fy);

        // Corner values
        const n00 = hash(ix, iy);
        const n10 = hash(ix + 1, iy);
        const n01 = hash(ix, iy + 1);
        const n11 = hash(ix + 1, iy + 1);

        // Bilinear interpolation
        const nx0 = n00 * (1 - sx_smooth) + n10 * sx_smooth;
        const nx1 = n01 * (1 - sx_smooth) + n11 * sx_smooth;
        const nxy = nx0 * (1 - sy_smooth) + nx1 * sy_smooth;

        value += nxy * amplitude;
        maxValue += amplitude;

        amplitude *= 0.5;
        frequency *= 2.0; // Simplified frequency progression
      }

      return value / maxValue;
    };

    // Generate organic coastline vertices
    const vertices: number[] = [];
    const indices: number[] = [];
    const uvs: number[] = [];

    // Water threshold - areas below this become water
    const waterThreshold = 0.2; // Higher threshold = smaller water bodies

    const vertexMap = new Map<string, number>();
    let vertexIndex = 0;

    // Create vertex grid with organic boundaries
    for (let i = 0; i <= resolution; i++) {
      for (let j = 0; j <= resolution; j++) {
        // UV coordinates (-1 to 1)
        const u = (i / resolution - 0.5) * 2;
        const v = (j / resolution - 0.5) * 2;

        // Apply aspect ratio for elongated shapes
        const scaledU = u * aspectRatio;
        const scaledV = v;

        // Distance from center
        const distFromCenter = Math.sqrt(scaledU * scaledU + scaledV * scaledV);

        // Base circular/elliptical shape
        let baseShape = 1.0 - distFromCenter;

        // Add noise for organic coastline
        const noiseValue = fbmNoise(scaledU * 2, scaledV * 2);
        const organicBoundary = baseShape + noiseValue * noiseAmplitude + complexityBonus * Math.abs(noiseValue);

        // Only create vertices for water areas (below threshold means water)
        if (organicBoundary > waterThreshold && distFromCenter < 1.3) {
          // Convert UV to local 3D coordinates
          const localX = u * baseSize;
          const localY = v * baseSize;

          // Project to world space using tangent basis
          const worldPos = new THREE.Vector3().addScaledVector(tangent1, localX).addScaledVector(tangent2, localY);

          vertices.push(worldPos.x, worldPos.y, worldPos.z);
          uvs.push((u + 1) * 0.5, (v + 1) * 0.5);

          vertexMap.set(`${i},${j}`, vertexIndex);
          vertexIndex++;
        }
      }
    }

    // Create triangulation for water surface
    for (let i = 0; i < resolution; i++) {
      for (let j = 0; j < resolution; j++) {
        const v00 = vertexMap.get(`${i},${j}`);
        const v10 = vertexMap.get(`${i + 1},${j}`);
        const v01 = vertexMap.get(`${i},${j + 1}`);
        const v11 = vertexMap.get(`${i + 1},${j + 1}`);

        // Create triangles only where all vertices exist
        if (v00 !== undefined && v10 !== undefined && v01 !== undefined) {
          indices.push(v00, v10, v01);
        }
        if (v10 !== undefined && v11 !== undefined && v01 !== undefined) {
          indices.push(v10, v11, v01);
        }
      }
    }

    if (vertices.length === 0 || indices.length === 0) {
      console.warn("No vertices generated for organic water body");
      return null;
    }

    // Create and configure geometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    // Project vertices onto planet surface with slight elevation for water
    const positions = geometry.attributes.position;
    const waterPosition = sphericalPos.clone().multiplyScalar(this.planetRadius);
    const vertex = new THREE.Vector3();

    for (let i = 0; i < positions.count; i++) {
      vertex.fromBufferAttribute(positions, i);

      // Move to world coordinates
      const worldVertex = vertex.clone().add(waterPosition);

      // Project onto sphere surface with slight elevation above land
      const direction = worldVertex.clone().normalize();
      const projectedVertex = direction.multiplyScalar(this.planetRadius * 1.003); // Slightly above surface

      // Convert back to local coordinates
      const localVertex = projectedVertex.sub(waterPosition);
      positions.setXYZ(i, localVertex.x, localVertex.y, localVertex.z);
    }

    positions.needsUpdate = true;
    geometry.computeVertexNormals();

    // Position the geometry on planet surface
    geometry.translate(waterPosition.x, waterPosition.y, waterPosition.z);

    return geometry;
  }

  private generateRandomSurfacePoint(): number[] {
    const lat = this.rng.uniform(-0.7, 0.7); // Avoid poles
    const lon = this.rng.uniform(0, Math.PI * 2);

    const point = new THREE.Vector3(Math.cos(lon) * Math.cos(lat), Math.sin(lat), Math.sin(lon) * Math.cos(lat)).normalize();

    return [point.x, point.y, point.z];
  }

  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    console.log("🌊 Adding water features to scene");
    if (planetPosition) {
      this.waterGroup.position.copy(planetPosition);
      console.log("Water group positioned at:", planetPosition);
    }
    scene.add(this.waterGroup);
    console.log(`✅ Added ${this.waterBodyMeshes.length} water bodies to scene`);
  }

  update(_deltaTime: number): void {
    // Animate aquifer water bodies with enhanced time-based effects including wave movement
    const currentTime = Date.now() / 1000;
    
    // Debug log every 2 seconds with wave parameters
    if (Math.floor(currentTime) % 2 === 0 && Math.floor(currentTime * 10) % 10 === 0) {
      const bodiesWithWaves = this.waterBodyMeshes.filter(mesh => 
        mesh.geometry && mesh.userData.originalPositions).length;
      console.log(`🌊 Aquifer water animation update - Time: ${currentTime.toFixed(2)}, Bodies: ${this.waterBodyMeshes.length}, With waves: ${bodiesWithWaves}`);
      if (this.waterBodyMeshes.length > 0) {
        const firstMesh = this.waterBodyMeshes[0];
        console.log(`   Wave params - Amplitude: ${firstMesh.userData.waveAmplitude}, Speed: ${firstMesh.userData.waveSpeed}, BaseSize: ${firstMesh.userData.baseSize}`);
        console.log(`   Vertex count: ${firstMesh.geometry?.attributes.position.count || 0}`);
      }
    }
    
    this.waterBodyMeshes.forEach((mesh, index) => {
      // Initialize wave data if missing
      if (mesh.geometry && !mesh.userData.originalPositions) {
        const positions = mesh.geometry.attributes.position;
        const originalPositions = new Float32Array(positions.array.length);
        originalPositions.set(positions.array);
        mesh.userData.originalPositions = originalPositions;
        mesh.userData.waveAmplitude = 0.01; // Fixed amplitude for all
        mesh.userData.waveSpeed = 1.0; // Fixed speed for all
        console.log(`🔧 Initialized missing wave data for water body ${index}`);
      }
      
      // Animate vertex positions for wave movement
      if (mesh.geometry && mesh.userData.originalPositions) {
        const positions = mesh.geometry.attributes.position;
        const originalPositions = mesh.userData.originalPositions;
        const waveAmplitude = mesh.userData.waveAmplitude || 0.01; // Fixed amplitude
        const waveSpeed = mesh.userData.waveSpeed || 1.0; // Fixed speed
        
        // Create multiple wave patterns for realistic water movement
        for (let i = 0; i < positions.count; i++) {
          const i3 = i * 3;
          const originalX = originalPositions[i3];
          const originalY = originalPositions[i3 + 1];
          const originalZ = originalPositions[i3 + 2];
          
          // Calculate wave displacement using multiple sine waves - adjusted for small water bodies
          const scaleFactor = 1.0 / (mesh.userData.baseSize || 1.0); // Inverse scale for smaller bodies
          const wave1 = Math.sin(currentTime * waveSpeed * 3.0 + originalX * scaleFactor * 50.0 + originalZ * scaleFactor * 40.0) * waveAmplitude;
          const wave2 = Math.sin(currentTime * waveSpeed * 2.0 + originalZ * scaleFactor * 60.0 + originalY * scaleFactor * 30.0) * waveAmplitude * 0.7;
          const wave3 = Math.sin(currentTime * waveSpeed * 4.0 + (originalX + originalZ) * scaleFactor * 45.0) * waveAmplitude * 0.5;
          
          // Apply wave displacement primarily in the normal direction
          const displacement = wave1 + wave2 + wave3;
          
          // Simplified normal calculation - assume radial direction from center
          const normal = new THREE.Vector3(originalX, originalY, originalZ).normalize();
          
          // Apply displacement along the surface normal
          positions.setXYZ(i, 
            originalX + normal.x * displacement,
            originalY + normal.y * displacement, 
            originalZ + normal.z * displacement
          );
        }
        
        positions.needsUpdate = true;
        mesh.geometry.computeVertexNormals(); // Recompute normals for proper lighting
      }
      
      // Material animations (same for all bodies)
      if (mesh.material instanceof THREE.MeshPhysicalMaterial) {
        // Enhanced aquifer shimmer animation - identical for all bodies
        const baseColor = mesh.material.color.clone();
        const shimmerOscillation = Math.sin(currentTime * 1.5) * 0.1; // No index variation
        const depthPulse = Math.sin(currentTime * 0.8) * 0.05; // No index variation
        
        // Animate emissive color for aquifer glow
        mesh.material.emissive.setRGB(
          baseColor.r * (0.2 + shimmerOscillation),
          baseColor.g * (0.2 + shimmerOscillation), 
          baseColor.b * (0.2 + shimmerOscillation + depthPulse)
        );
        
        // Animate transmission for aquifer depth variation
        mesh.material.transmission = 0.6 + Math.sin(currentTime * 0.6) * 0.2;
        
        // Animate iridescence for aquifer shimmer effect
        mesh.material.iridescence = 0.3 + Math.sin(currentTime * 1.0) * 0.15;
        
        // Animate sheen for surface reflection variation
        mesh.material.sheen = 0.5 + Math.sin(currentTime * 1.2) * 0.3;
        
        // Animate clearcoat for aquifer surface dynamics
        mesh.material.clearcoat = 0.7 + Math.sin(currentTime * 0.5) * 0.15;
        
        // Subtle opacity animation for breathing effect
        const baseOpacity = 0.7; // Same for all
        mesh.material.opacity = baseOpacity + Math.sin(currentTime * 0.3) * 0.1;
      }
    });
  }

  updateParams(newParams: Partial<SuperEarthWaterFeaturesParams>): void {
    this.params = { ...this.params, ...newParams };

    // Simple parameter updates for basic materials
    if (newParams.waterColor) {
      const waterColor = newParams.waterColor instanceof THREE.Color ? newParams.waterColor : new THREE.Color().fromArray(newParams.waterColor as number[]);

      this.materials.forEach((material) => {
        if (material instanceof THREE.MeshLambertMaterial) {
          material.color.copy(waterColor);
          material.emissive.copy(waterColor.clone().multiplyScalar(0.1));
        }
      });
    }
  }

  getObject3D(): THREE.Group {
    return this.waterGroup;
  }

  dispose(): void {
    // Dispose individual geometries but preserve shared resources
    this.waterBodyMeshes.forEach((mesh) => {
      if (mesh.geometry && !SuperEarthWaterFeaturesEffect.geometryCache.has('shared')) {
        mesh.geometry.dispose();
      }
    });

    // Don't dispose shared materials as they may be used by other instances
    this.waterBodyMeshes = [];
    this.materials = [];
    this.waterGroup.clear();
  }
  
  // Static method to clear all caches when no longer needed
  static clearCaches(): void {
    SuperEarthWaterFeaturesEffect.geometryCache.forEach(geometry => geometry.dispose());
    SuperEarthWaterFeaturesEffect.geometryCache.clear();
    SuperEarthWaterFeaturesEffect.sharedMaterials.forEach(material => material.dispose());
    SuperEarthWaterFeaturesEffect.sharedMaterials.clear();
  }
}

/**
 * Create Super Earth water features from Python data - ORGANIC VERSION
 *
 * Creates realistic water bodies with organic, irregular coastlines that resemble
 * natural lakes, ponds, and water formations using procedural noise generation.
 */
export function createSuperEarthWaterFeaturesFromPythonData(planetRadius: number, surfaceData: any, globalSeed?: number): SuperEarthWaterFeaturesEffect | null {
  console.log("🌊 Creating Organic SuperEarthWaterFeatures from Python data");
  console.log("Surface data:", surfaceData);

  const seed = globalSeed || Math.floor(Math.random() * 1000000);
  const waterSeed = seed + 10000;

  // Extract water features data from Python
  const waterFeaturesData = surfaceData.water_features || {};
  let waterBodies = waterFeaturesData.water_bodies || [];

  console.log("Water bodies from Python:", waterBodies);

  // Generate procedural water bodies if none provided
  if (waterBodies.length === 0) {
    console.log("No water bodies from Python, will generate procedural ones");
    // Don't generate here - let the effect handle it
    waterBodies = [];
  }

  const params: SuperEarthWaterFeaturesParams = {
    water_bodies: waterBodies,
    waterColor: new THREE.Color(0.1, 0.4, 0.7), // Natural water blue
    globalIrregularity: 0.6, // Natural irregularity for procedural bodies
    seed: waterSeed,
  };

  console.log("Creating SuperEarthWaterFeaturesEffect with params:", params);

  const effect = new SuperEarthWaterFeaturesEffect(planetRadius, params);

  console.log("✅ Organic SuperEarthWaterFeaturesEffect created successfully");
  return effect;
}
