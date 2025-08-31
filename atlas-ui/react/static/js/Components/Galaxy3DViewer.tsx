// atlas-ui/react/static/js/Components/Galaxy3DViewer.tsx
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface Galaxy3DViewerProps {
  galaxyType: string;
  numSystems: number;
  blackHoles: number;
  pulsars: number;
  quasars: number;
  seed?: number;
  imageUrl?: string;
}

const Galaxy3DViewer: React.FC<Galaxy3DViewerProps> = ({
  galaxyType,
  numSystems,
  blackHoles,
  pulsars,
  quasars,
  seed = 12345,
  imageUrl,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const galaxyGroupRef = useRef<THREE.Group | null>(null);
  const [showImage, setShowImage] = useState(false);

  // Seeded random number generator
  class SeededRandom {
    private seed: number;

    constructor(seed: number) {
      this.seed = seed;
    }

    random(): number {
      const x = Math.sin(this.seed++) * 10000;
      return x - Math.floor(x);
    }

    uniform(min: number, max: number): number {
      return min + this.random() * (max - min);
    }

    gauss(mean: number, stdDev: number): number {
      let u = 0, v = 0;
      while (u === 0) u = this.random();
      while (v === 0) v = this.random();
      const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      return mean + stdDev * num;
    }

    randint(min: number, max: number): number {
      return Math.floor(this.uniform(min, max + 1));
    }
  }

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const size = Math.min(containerWidth, containerHeight);

    // Setup scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 10000);
    camera.position.set(0, 200, 400);
    camera.lookAt(0, 0, 0);

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(size, size);
    renderer.setClearColor(0x000011, 1);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Setup controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 50;
    controls.maxDistance = 800;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    // Create galaxy group
    const galaxyGroup = new THREE.Group();
    galaxyGroupRef.current = galaxyGroup;
    scene.add(galaxyGroup);

    // Setup random generator
    const rng = new SeededRandom(seed);
    const rotationAngle = rng.uniform(0, 2 * Math.PI);

    // Create stars based on galaxy type
    const starsGeometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];
    const sizes: number[] = [];

    const maxRadius = 200;
    let numPoints = numSystems;

    if (galaxyType === "Spiral") {
      // Limit points for performance
      numPoints = Math.min(numSystems, 50000);
      
      const numArms = 4;
      const armOffset = (2 * Math.PI) / numArms;
      const spread = 0.15;
      const armTightness = 0.5;
      const coreDensity = 0.1;

      // Core stars
      for (let i = 0; i < numPoints * coreDensity; i++) {
        const angle = rng.uniform(0, 2 * Math.PI);
        const radius = rng.gauss(maxRadius * 0.1, maxRadius * 0.05);
        const height = rng.gauss(0, 5);
        
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        
        positions.push(x, height, z);
        colors.push(1, 1, 1);
        
        // Procedural star size variation based on position and seed
        const starSeed = seed + i * 1337; // Unique seed per star
        const sizeRng = new SeededRandom(starSeed);
        const baseSizeVariation = sizeRng.gauss(1, 0.3); // Most stars are medium size
        const isGiant = sizeRng.random() < 0.05; // 5% chance of giant stars
        const isDwarf = sizeRng.random() < 0.3; // 30% chance of dwarf stars
        
        let finalSize = Math.max(0.3, baseSizeVariation);
        if (isGiant) finalSize *= 3 + sizeRng.uniform(0, 2); // Giant stars
        if (isDwarf) finalSize *= 0.5 + sizeRng.uniform(0, 0.3); // Dwarf stars
        
        // Core stars are generally larger and brighter
        if (radius < maxRadius * 0.2) {
          finalSize *= 1.8 + sizeRng.uniform(0, 0.7);
          colors[colors.length - 3] = 1.2; // Slightly brighter
          colors[colors.length - 2] = 1.1;
          colors[colors.length - 1] = 0.9;
        }
        
        sizes.push(Math.min(finalSize * 1.5, 12)); // Increased base size and cap
      }

      // Spiral arms
      for (let i = 0; i < numPoints; i++) {
        const theta = armTightness * Math.sqrt(i / numPoints) * 2 * Math.PI;
        const armAngle = (i % numArms) * armOffset;
        const radius = maxRadius * Math.sqrt(i / numPoints);
        
        const x = radius * Math.cos(theta + armAngle + rotationAngle) + rng.uniform(-spread * radius, spread * radius);
        const z = radius * Math.sin(theta + armAngle + rotationAngle) + rng.uniform(-spread * radius, spread * radius);
        const y = rng.gauss(0, 3);
        
        positions.push(x, y, z);
        colors.push(1, 1, 0.8);
        
        // Procedural star size variation for spiral arms
        const starSeed = seed + i * 1337;
        const sizeRng = new SeededRandom(starSeed);
        const baseSizeVariation = sizeRng.gauss(0.8, 0.25); // Slightly smaller than core
        const isGiant = sizeRng.random() < 0.03; // 3% chance of giant stars in arms
        const isDwarf = sizeRng.random() < 0.4; // 40% chance of dwarf stars
        
        let finalSize = Math.max(0.2, baseSizeVariation);
        if (isGiant) finalSize *= 2.5 + sizeRng.uniform(0, 1.5);
        if (isDwarf) finalSize *= 0.4 + sizeRng.uniform(0, 0.2);
        
        // Outer arm stars are smaller
        if (radius > maxRadius * 0.7) finalSize *= 0.8;
        
        sizes.push(Math.min(finalSize * 1.3, 8)); // Increased spiral arm star size
      }
    } else if (galaxyType === "Elliptical") {
      numPoints = Math.min(numSystems, 100000);
      
      for (let i = 0; i < numPoints; i++) {
        // Proper uniform distribution on sphere surface
        const angle = rng.uniform(0, 2 * Math.PI);
        const cosTheta = rng.uniform(-1, 1); // Uniform in cos(theta) for proper sphere distribution
        const sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
        
        // Adjustable exponential decay with stronger falloff near center
        const u = rng.random();
        
        // Modified exponential with power to control density curve
        // Higher power = stronger decay, more spread out
        const normalizedU = Math.pow(u, 0.6); // This spreads out the distribution more
        const radius = -Math.log(1 - normalizedU * 0.98) * maxRadius * 0.35;
        
        // Convert to Cartesian coordinates with proper sphere distribution
        const x = radius * sinTheta * Math.cos(angle);
        const y = radius * cosTheta * 0.6; // Flatten slightly for elliptical shape
        const z = radius * sinTheta * Math.sin(angle);
        
        positions.push(x, y, z);
        colors.push(1, 0.9, 0.7);
        
        // Procedural star size variation for elliptical galaxy
        const starSeed = seed + i * 1337;
        const sizeRng = new SeededRandom(starSeed);
        const baseSizeVariation = sizeRng.gauss(0.6, 0.2); // Smaller stars overall
        const isGiant = sizeRng.random() < 0.08; // 8% chance of giant stars (more old giants)
        const isDwarf = sizeRng.random() < 0.25; // 25% chance of dwarf stars
        
        let finalSize = Math.max(0.2, baseSizeVariation);
        if (isGiant) finalSize *= 2 + sizeRng.uniform(0, 1); // Red giants
        if (isDwarf) finalSize *= 0.6 + sizeRng.uniform(0, 0.2);
        
        // Central stars are larger (old massive stars)
        const distanceFromCenter = Math.sqrt(x*x + y*y + z*z);
        if (distanceFromCenter < maxRadius * 0.3) {
          finalSize *= 1.5 + sizeRng.uniform(0, 0.5);
        }
        
        sizes.push(Math.min(finalSize * 1.4, 7)); // Increased elliptical galaxy star size
      }
    } else if (galaxyType === "Dwarf") {
      numPoints = Math.min(numSystems / 100, 10000);
      
      for (let i = 0; i < numPoints; i++) {
        const angle = rng.uniform(0, 2 * Math.PI);
        const phi = rng.uniform(0, Math.PI);
        const radius = rng.gauss(maxRadius / 3, maxRadius * 0.3);
        
        const x = radius * Math.sin(phi) * Math.cos(angle);
        const y = radius * Math.cos(phi) * 0.5;
        const z = radius * Math.sin(phi) * Math.sin(angle);
        
        positions.push(x, y, z);
        colors.push(0.8, 0.8, 1);
        
        // Procedural star size variation for dwarf galaxy
        const starSeed = seed + i * 1337;
        const sizeRng = new SeededRandom(starSeed);
        const baseSizeVariation = sizeRng.gauss(0.7, 0.3); // More variation in small galaxy
        const isGiant = sizeRng.random() < 0.02; // 2% chance of giant stars (rare)
        const isDwarf = sizeRng.random() < 0.6; // 60% chance of dwarf stars
        
        let finalSize = Math.max(0.3, baseSizeVariation);
        if (isGiant) finalSize *= 2.5 + sizeRng.uniform(0, 1);
        if (isDwarf) finalSize *= 0.5 + sizeRng.uniform(0, 0.3);
        
        sizes.push(Math.min(finalSize * 1.2, 5)); // Increased dwarf galaxy star size
      }
    } else if (galaxyType === "Singularity Void") {
      // Create distorted space effect with psychedelic shader
      numPoints = 10000;
      
      // Swirling void particles in a double helix pattern
      for (let i = 0; i < numPoints; i++) {
        const t = i / numPoints;
        const angle = t * 30 * Math.PI;
        const radius = maxRadius * (1 - t * 0.8) + rng.uniform(-10, 10);
        const height = (t - 0.5) * 300 + Math.sin(angle * 0.5) * 20;
        
        // Double helix pattern
        const x = radius * Math.cos(angle) + Math.sin(t * 20) * 10;
        const z = radius * Math.sin(angle) + Math.cos(t * 20) * 10;
        
        positions.push(x, height, z);
        
        // Rainbow distorted colors based on position
        const hue = (t + Math.sin(angle * 0.1)) % 1;
        const color = new THREE.Color();
        color.setHSL(hue, 1, 0.5 + Math.sin(t * 10) * 0.3);
        colors.push(color.r, color.g, color.b);
        sizes.push(rng.uniform(0.3, 2) * (1 + Math.sin(t * 50) * 0.5));
      }
      
      // Add psychedelic shader wrapped around sphere
      // Create multiple sphere layers for depth
      const createPsychedelicSphere = (radius: number, opacity: number, speed: number = 1) => {
        const sphereGeometry = new THREE.SphereGeometry(radius, 64, 64);
        
        // Monjori-inspired shader adapted for spherical coordinates
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
          varying vec2 vUv;
          varying vec3 vPosition;
          varying vec3 vNormal;
          uniform float time;
          uniform float speed;
          
          void main() {
            // Use spherical coordinates for better wrapping
            float theta = atan(vPosition.z, vPosition.x);
            float phi = acos(vPosition.y / length(vPosition));
            vec2 p = vec2(theta / 3.14159, phi / 3.14159);
            
            float a = time * 40.0 * speed;
            float d, e, f, g = 1.0 / 40.0, h, i, r, q;
            
            e = 400.0 * (p.x * 0.5 + 0.5);
            f = 400.0 * (p.y * 0.5 + 0.5);
            i = 200.0 + sin(e * g + a / 150.0) * 20.0;
            d = 200.0 + cos(f * g / 2.0) * 18.0 + cos(e * g) * 7.0;
            r = sqrt(pow(abs(i - e), 2.0) + pow(abs(d - f), 2.0));
            q = f / r;
            e = (r * cos(q)) - a / 2.0;
            f = (r * sin(q)) - a / 2.0;
            d = sin(e * g) * 176.0 + sin(e * g) * 164.0 + r;
            h = ((f + d) + a / 2.0) * g;
            i = cos(h + r * p.x / 1.3) * (e + e + a) + cos(q * g * 6.0) * (r + h / 3.0);
            h = sin(f * g) * 144.0 - sin(e * g) * 212.0 * p.x;
            h = (h + (f - e) * q + sin(r - (a + h) / 7.0) * 10.0 + i / 4.0) * g;
            i += cos(h * 2.3 * sin(a / 350.0 - q)) * 184.0 * sin(q - (r * 4.3 + a / 12.0) * g) + tan(r * g + h) * 184.0 * cos(r * g + h);
            i = mod(i / 5.6, 256.0) / 64.0;
            if (i < 0.0) i += 4.0;
            if (i >= 2.0) i = 4.0 - i;
            d = r / 350.0;
            d += sin(d * d * 8.0) * 0.52;
            f = (sin(a * g) + 1.0) / 2.0;
            
            vec3 color = vec3(f * i / 1.6, i / 2.0 + d / 13.0, i) * d * p.x + 
                         vec3(i / 1.3 + d / 8.0, i / 2.0 + d / 18.0, i) * d * (1.0 - p.x);
            
            // Add depth-based color variation
            float depth = dot(vNormal, vec3(0.0, 0.0, 1.0));
            color *= 0.7 + depth * 0.3;
            
            // Add purple/violet tint for void effect
            color = mix(color, vec3(0.5, 0.0, 1.0), 0.3);
            
            // Edge glow effect
            float edgeFactor = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
            color += vec3(0.5, 0.0, 1.0) * edgeFactor * 0.5;
            
            gl_FragColor = vec4(color, ${opacity});
          }
        `;
        
        const shaderMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            speed: { value: speed }
          },
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
          transparent: true,
          blending: THREE.AdditiveBlending,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, shaderMaterial);
        (sphere as any).isSingularityShader = true;
        (sphere as any).shaderSpeed = speed;
        return sphere;
      };
      
      // Create multiple concentric psychedelic spheres
      const outerSphere = createPsychedelicSphere(250, 0.3, 1);
      galaxyGroup.add(outerSphere);
      
      const middleSphere = createPsychedelicSphere(180, 0.4, -0.7);
      galaxyGroup.add(middleSphere);
      
      const innerSphere = createPsychedelicSphere(120, 0.5, 1.5);
      galaxyGroup.add(innerSphere);
      
      // Add an inverted sphere for inner view
      const invertedSphere = createPsychedelicSphere(300, 0.2, 0.5);
      invertedSphere.scale.set(-1, 1, 1); // Invert to see from inside
      galaxyGroup.add(invertedSphere);
      
      // Add gravitational lensing distortion sphere
      const lensGeometry = new THREE.SphereGeometry(350, 32, 32);
      const lensMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 }
        },
        vertexShader: `
          varying vec3 vPosition;
          varying vec3 vNormal;
          uniform float time;
          void main() {
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            
            // Distort vertices for gravitational lensing effect
            vec3 distortedPosition = position;
            float distortion = sin(time * 0.5 + length(position) * 0.01) * 5.0;
            distortedPosition += normal * distortion;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(distortedPosition, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vPosition;
          varying vec3 vNormal;
          uniform float time;
          
          void main() {
            // Create a subtle distortion effect
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
            float wave = sin(time * 2.0 + length(vPosition) * 0.05) * 0.5 + 0.5;
            
            vec3 color = vec3(0.1, 0.0, 0.3) * fresnel * wave;
            float alpha = fresnel * 0.1 * wave;
            
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        depthWrite: false,
      });
      
      const lensSphere = new THREE.Mesh(lensGeometry, lensMaterial);
      (lensSphere as any).isSingularityShader = true;
      (lensSphere as any).shaderSpeed = 0.3;
      galaxyGroup.add(lensSphere);
      
      // Add glitch effect geometry with more chaos
      const glitchGeometry = new THREE.BufferGeometry();
      const glitchPositions: number[] = [];
      const glitchColors: number[] = [];
      
      for (let i = 0; i < 1000; i++) {
        const x = rng.uniform(-maxRadius, maxRadius);
        const y = rng.uniform(-maxRadius/2, maxRadius/2);
        const z = rng.uniform(-maxRadius, maxRadius);
        
        // Create chaotic line segments
        const offsetX = rng.uniform(-50, 50);
        const offsetY = rng.uniform(-30, 30);
        const offsetZ = rng.uniform(-50, 50);
        
        glitchPositions.push(x, y, z);
        glitchPositions.push(x + offsetX, y + offsetY, z + offsetZ);
        
        const hue = rng.random();
        const color = new THREE.Color();
        color.setHSL(hue, 1, 0.6);
        glitchColors.push(color.r, color.g, color.b);
        glitchColors.push(color.r * 0.5, color.g * 0.5, color.b * 0.5);
      }
      
      glitchGeometry.setAttribute('position', new THREE.Float32BufferAttribute(glitchPositions, 3));
      glitchGeometry.setAttribute('color', new THREE.Float32BufferAttribute(glitchColors, 3));
      
      const glitchMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
      });
      
      const glitchLines = new THREE.LineSegments(glitchGeometry, glitchMaterial);
      (glitchLines as any).isGlitchLines = true;
      galaxyGroup.add(glitchLines);
      
      // Central black hole with event horizon
      const blackHoleGroup = new THREE.Group();
      
      // Event horizon (black sphere)
      const eventHorizonGeometry = new THREE.SphereGeometry(20, 32, 32);
      const eventHorizonMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.95,
      });
      const eventHorizon = new THREE.Mesh(eventHorizonGeometry, eventHorizonMaterial);
      blackHoleGroup.add(eventHorizon);
      
      // Accretion disk with animated shader
      const diskGeometry = new THREE.RingGeometry(25, 80, 64);
      const diskMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          innerRadius: { value: 25 },
          outerRadius: { value: 80 }
        },
        vertexShader: `
          varying vec2 vUv;
          varying float vRadius;
          void main() {
            vUv = uv;
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vRadius = length(worldPosition.xy);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform float innerRadius;
          uniform float outerRadius;
          varying vec2 vUv;
          varying float vRadius;
          
          void main() {
            float normalizedRadius = (vRadius - innerRadius) / (outerRadius - innerRadius);
            float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
            
            // Swirling pattern
            float swirl = sin(angle * 5.0 - time * 2.0 + normalizedRadius * 10.0) * 0.5 + 0.5;
            float intensity = 1.0 - normalizedRadius;
            
            // Colors from hot (inner) to cold (outer)
            vec3 hotColor = vec3(1.0, 0.5, 0.0); // Orange
            vec3 coldColor = vec3(0.0, 0.3, 1.0); // Blue
            vec3 color = mix(coldColor, hotColor, intensity);
            
            // Add swirl variation
            color *= (0.7 + swirl * 0.3);
            
            // Fade out at edges
            float alpha = intensity * 0.8;
            
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });
      
      const accretionDisk = new THREE.Mesh(diskGeometry, diskMaterial);
      accretionDisk.rotation.x = Math.PI / 2;
      (accretionDisk as any).isAccretionDisk = true;
      blackHoleGroup.add(accretionDisk);
      
      // Gravitational lensing effect (distortion rings)
      for (let i = 0; i < 8; i++) {
        const ringRadius = 30 + i * 20;
        const ringGeometry = new THREE.TorusGeometry(ringRadius, 1 + i * 0.5, 8, 64);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL((0.7 + i * 0.05) % 1, 1, 0.5),
          transparent: true,
          opacity: 0.3 - i * 0.03,
          wireframe: true,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = rng.uniform(0, Math.PI);
        ring.rotation.y = rng.uniform(0, Math.PI);
        (ring as any).isDistortionRing = true;
        (ring as any).rotationSpeed = rng.uniform(0.001, 0.005) * (i % 2 === 0 ? 1 : -1);
        blackHoleGroup.add(ring);
      }
      
      galaxyGroup.add(blackHoleGroup);
      
      // Add energy jets
      const jetGeometry = new THREE.ConeGeometry(5, 100, 8);
      const jetMaterial = new THREE.MeshBasicMaterial({
        color: 0xff00ff,
        transparent: true,
        opacity: 0.6,
        emissive: 0xff00ff,
        emissiveIntensity: 1,
        blending: THREE.AdditiveBlending,
      });
      
      const jet1 = new THREE.Mesh(jetGeometry, jetMaterial);
      jet1.position.y = 50;
      galaxyGroup.add(jet1);
      
      const jet2 = new THREE.Mesh(jetGeometry, jetMaterial);
      jet2.position.y = -50;
      jet2.rotation.z = Math.PI;
      galaxyGroup.add(jet2);
    }

    // Only create normal stars for non-Singularity Void galaxies
    if (galaxyType !== "Singularity Void") {
      // Filter out stars too close to black holes (absorption effect)
      const blackHolePositions: Array<{x: number, y: number, z: number}> = [];
      
      // First, generate black hole positions (same as the ones we'll create later)
      const bhRng = new SeededRandom(seed + 999); // Consistent with actual black hole positions
      for (let i = 0; i < blackHoles; i++) {
        const x = bhRng.uniform(-50, 50);
        const y = bhRng.uniform(-20, 20);
        const z = bhRng.uniform(-50, 50);
        blackHolePositions.push({x, y, z});
      }
      
      // Process stars with black hole effects (spaghettification)
      const processedPositions: number[] = [];
      const processedColors: number[] = [];
      const processedSizes: number[] = [];
      const stretchedLinePositions: number[] = [];
      const stretchedLineColors: number[] = [];
      const eventHorizonRadius = 0.4; // Complete absorption - very small for realistic effect
      const tidalRadius = eventHorizonRadius * 25; // Spaghettification zone proportional to event horizon
      
      for (let i = 0; i < positions.length; i += 3) {
        const starX = positions[i];
        const starY = positions[i + 1];
        const starZ = positions[i + 2];
        
        let closestDistance = Infinity;
        let closestBlackHole = null;
        
        // Find closest black hole
        for (const bh of blackHolePositions) {
          const distance = Math.sqrt(
            Math.pow(starX - bh.x, 2) + 
            Math.pow(starY - bh.y, 2) + 
            Math.pow(starZ - bh.z, 2)
          );
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestBlackHole = bh;
          }
        }
        
        // Apply black hole effects based on distance
        if (closestDistance < eventHorizonRadius) {
          // Event horizon: star is completely absorbed, skip it
          continue;
        } else if (closestDistance < tidalRadius && closestBlackHole) {
          // Tidal zone: create stretched line effect (spaghettification)
          const tidalStrength = 1 - (closestDistance - eventHorizonRadius) / (tidalRadius - eventHorizonRadius);
          
          // Calculate direction vector from star to black hole
          const dirX = closestBlackHole.x - starX;
          const dirY = closestBlackHole.y - starY;
          const dirZ = closestBlackHole.z - starZ;
          const dirLength = Math.sqrt(dirX*dirX + dirY*dirY + dirZ*dirZ);
          
          // Normalize direction
          const normalizedDirX = dirX / dirLength;
          const normalizedDirY = dirY / dirLength;
          const normalizedDirZ = dirZ / dirLength;
          
          // Create curved orbital trajectory instead of straight line
          const stretchLength = tidalStrength * 8; // Length of the orbital trajectory
          
          // Calculate orbital curve based on star's position relative to black hole
          const orbitalAngle = Math.atan2(starZ - closestBlackHole.z, starX - closestBlackHole.x);
          const curvature = tidalStrength * 0.8; // More curve = closer to BH
          
          // Create curved trajectory points (spiral inward)
          const numCurvePoints = 8; // Number of points for smooth curve
          for (let j = 0; j < numCurvePoints - 1; j++) {
            const t = j / (numCurvePoints - 1); // 0 to 1
            const nextT = (j + 1) / (numCurvePoints - 1);
            
            // Current point on curve
            const currentRadius = closestDistance * (1 - t * curvature * 0.7); // Spiral inward
            const currentAngle = orbitalAngle + t * curvature * 1.5; // Curve around BH
            const currentX = closestBlackHole.x + currentRadius * Math.cos(currentAngle);
            const currentY = starY + (closestBlackHole.y - starY) * t * 0.3; // Slight Y movement
            const currentZ = closestBlackHole.z + currentRadius * Math.sin(currentAngle);
            
            // Next point on curve
            const nextRadius = closestDistance * (1 - nextT * curvature * 0.7);
            const nextAngle = orbitalAngle + nextT * curvature * 1.5;
            const nextX = closestBlackHole.x + nextRadius * Math.cos(nextAngle);
            const nextY = starY + (closestBlackHole.y - starY) * nextT * 0.3;
            const nextZ = closestBlackHole.z + nextRadius * Math.sin(nextAngle);
            
            // Add line segment
            stretchedLinePositions.push(currentX, currentY, currentZ);
            stretchedLinePositions.push(nextX, nextY, nextZ);
          }
          
          // Color the orbital curve - getting redder and dimmer toward the black hole
          const redshift = tidalStrength * 1.5;
          const originalR = colors[i];
          const originalG = colors[i + 1];
          const originalB = colors[i + 2];
          
          const stretchedR = Math.min(originalR + redshift, 2.0);
          const stretchedG = Math.max(originalG * (1 - redshift * 0.6), 0.1);
          const stretchedB = Math.max(originalB * (1 - redshift * 0.8), 0.1);
          
          // Add colors for each segment of the orbital curve
          for (let j = 0; j < numCurvePoints - 1; j++) {
            const t = j / (numCurvePoints - 1);
            const nextT = (j + 1) / (numCurvePoints - 1);
            
            // Opacity decreases along the curve toward the black hole
            const currentOpacity = 1 - t * tidalStrength * 0.6;
            const nextOpacity = 1 - nextT * tidalStrength * 0.6;
            
            // Colors get redder along the trajectory
            const currentRedshift = redshift * (0.5 + t * 0.5);
            const nextRedshift = redshift * (0.5 + nextT * 0.5);
            
            // Current point color
            stretchedLineColors.push(
              Math.min(stretchedR + currentRedshift * 0.3, 2.0) * currentOpacity,
              Math.max(stretchedG * (1 - currentRedshift * 0.2), 0.1) * currentOpacity,
              Math.max(stretchedB * (1 - currentRedshift * 0.4), 0.1) * currentOpacity
            );
            
            // Next point color (redder and dimmer)
            stretchedLineColors.push(
              Math.min(stretchedR + nextRedshift * 0.3, 2.0) * nextOpacity,
              Math.max(stretchedG * (1 - nextRedshift * 0.2), 0.1) * nextOpacity,
              Math.max(stretchedB * (1 - nextRedshift * 0.4), 0.1) * nextOpacity
            );
          }
          
          // Also add a small point at the original position for reference
          processedPositions.push(starX, starY, starZ);
          processedColors.push(stretchedR, stretchedG, stretchedB);
          processedSizes.push(Math.max(sizes[i / 3] * (1 - tidalStrength * 0.5), 0.3));
        } else {
          // Normal zone: no black hole effects
          processedPositions.push(starX, starY, starZ);
          processedColors.push(colors[i], colors[i + 1], colors[i + 2]);
          processedSizes.push(sizes[i / 3]);
        }
      }
      
      // Set up star attributes with processed data (including spaghettification effects)
      starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(processedPositions, 3));
      starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(processedColors, 3));
      starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(processedSizes, 1));

      // Create circular star material using a custom shader
      const starMaterial = new THREE.ShaderMaterial({
        uniforms: {},
        vertexShader: `
          attribute float size;
          varying vec3 vColor;
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (400.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            // Create circular points instead of squares
            vec2 center = gl_PointCoord - vec2(0.5);
            float distanceFromCenter = length(center);
            
            if (distanceFromCenter > 0.5) {
              discard;
            }
            
            // Add soft falloff for better appearance
            float alpha = 1.0 - (distanceFromCenter / 0.5);
            alpha = pow(alpha, 2.0);
            
            gl_FragColor = vec4(vColor, alpha * 0.8);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        depthWrite: false,
      });

      const stars = new THREE.Points(starsGeometry, starMaterial);
      galaxyGroup.add(stars);
      
      // Create stretched star lines (spaghettification effect)
      if (stretchedLinePositions.length > 0) {
        const stretchedGeometry = new THREE.BufferGeometry();
        stretchedGeometry.setAttribute('position', new THREE.Float32BufferAttribute(stretchedLinePositions, 3));
        stretchedGeometry.setAttribute('color', new THREE.Float32BufferAttribute(stretchedLineColors, 3));
        
        const stretchedMaterial = new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.8,
          linewidth: 2,
          blending: THREE.AdditiveBlending,
        });
        
        const stretchedLines = new THREE.LineSegments(stretchedGeometry, stretchedMaterial);
        galaxyGroup.add(stretchedLines);
      }
    } else {
      // For Singularity Void, still create the stars but with the original material
      starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

      const starMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

      const stars = new THREE.Points(starsGeometry, starMaterial);
      galaxyGroup.add(stars);
    }

    // Add black holes
    // Use the same positions as in the absorption filter for consistency
    const bhRng = new SeededRandom(seed + 999); // Consistent black hole positioning
    for (let i = 0; i < blackHoles; i++) {
      const blackHoleGroup = new THREE.Group();
      
      const x = bhRng.uniform(-50, 50);
      const y = bhRng.uniform(-20, 20);
      const z = bhRng.uniform(-50, 50);
      
      // Black hole sphere (smaller and more realistic)
      const bhGeometry = new THREE.SphereGeometry(1.5, 16, 16);
      const bhMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.9,
      });
      const bhMesh = new THREE.Mesh(bhGeometry, bhMaterial);
      blackHoleGroup.add(bhMesh);
      
      
      // Realistic thin accretion disk with multiple concentric rings
      const diskRings = [
        { innerRadius: 2, outerRadius: 2.3, color: 0xffffff, opacity: 0.8, emissive: 0xffffcc }, // Hottest - white/yellow
        { innerRadius: 2.3, outerRadius: 2.7, color: 0xffaa00, opacity: 0.7, emissive: 0xff8800 }, // Orange
        { innerRadius: 2.7, outerRadius: 3.2, color: 0xff4400, opacity: 0.6, emissive: 0xff2200 }, // Red-orange
        { innerRadius: 3.2, outerRadius: 4, color: 0xaa0000, opacity: 0.5, emissive: 0x660000 }, // Red
        { innerRadius: 4, outerRadius: 5, color: 0x440000, opacity: 0.3, emissive: 0x220000 }, // Dark red
      ];
      
      diskRings.forEach((ring, index) => {
        const ringGeometry = new THREE.RingGeometry(ring.innerRadius, ring.outerRadius, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: ring.color,
          transparent: true,
          opacity: ring.opacity,
          emissive: ring.emissive,
          emissiveIntensity: 0.3,
          side: THREE.DoubleSide,
        });
        
        const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
        ringMesh.rotation.x = Math.PI / 2; // Rotate to be horizontal
        ringMesh.rotation.z = rng.uniform(0, Math.PI * 2); // Random rotation for variety
        
        // Add slight animation data for rotation
        (ringMesh as any).isAccretionRing = true;
        (ringMesh as any).rotationSpeed = 0.002 + index * 0.0005; // Inner rings rotate faster
        
        blackHoleGroup.add(ringMesh);
      });
      
      blackHoleGroup.position.set(x, y, z);
      galaxyGroup.add(blackHoleGroup);
    }

    // Add pulsars
    for (let i = 0; i < pulsars; i++) {
      const pulsarGeometry = new THREE.SphereGeometry(1.5, 8, 8);
      const pulsarMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        emissive: 0xffff00,
        emissiveIntensity: 1,
      });
      const pulsar = new THREE.Mesh(pulsarGeometry, pulsarMaterial);
      
      pulsar.position.set(
        rng.uniform(-maxRadius, maxRadius),
        rng.uniform(-maxRadius/4, maxRadius/4),
        rng.uniform(-maxRadius, maxRadius)
      );
      
      // Add pulsing animation data
      (pulsar as any).isPulsar = true;
      (pulsar as any).pulseSpeed = rng.uniform(1, 3);
      
      galaxyGroup.add(pulsar);
    }

    // Add quasars
    for (let i = 0; i < quasars; i++) {
      const quasarGroup = new THREE.Group();
      
      // Central bright core
      const coreGeometry = new THREE.SphereGeometry(2, 16, 16);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 2,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      quasarGroup.add(core);
      
      // Jets
      const jetGeometry = new THREE.ConeGeometry(1, 20, 8);
      const jetMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        transparent: true,
        opacity: 0.6,
        emissive: 0xff0000,
        emissiveIntensity: 0.5,
      });
      
      const jet1 = new THREE.Mesh(jetGeometry, jetMaterial);
      jet1.position.y = 10;
      quasarGroup.add(jet1);
      
      const jet2 = new THREE.Mesh(jetGeometry, jetMaterial);
      jet2.position.y = -10;
      jet2.rotation.z = Math.PI;
      quasarGroup.add(jet2);
      
      quasarGroup.position.set(
        rng.uniform(-maxRadius, maxRadius),
        rng.uniform(-maxRadius/4, maxRadius/4),
        rng.uniform(-maxRadius, maxRadius)
      );
      
      galaxyGroup.add(quasarGroup);
    }

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5, 1000);
    pointLight.position.set(0, 100, 0);
    scene.add(pointLight);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const time = performance.now() / 1000;

      // Rotate galaxy slowly
      if (galaxyGroupRef.current) {
        galaxyGroupRef.current.rotation.y += 0.001;
      }

      // Animate various elements
      galaxyGroup.children.forEach((child) => {
        // Animate pulsars
        if ((child as any).isPulsar) {
          const pulseSpeed = (child as any).pulseSpeed || 1;
          child.scale.setScalar(1 + Math.sin(Date.now() * 0.001 * pulseSpeed) * 0.3);
        }
        
        // Animate singularity void shader
        if ((child as any).isSingularityShader && child instanceof THREE.Mesh) {
          const material = child.material as THREE.ShaderMaterial;
          if (material.uniforms && material.uniforms.time) {
            material.uniforms.time.value = time;
          }
          // Add subtle rotation to spherical shaders
          const shaderSpeed = (child as any).shaderSpeed || 1;
          child.rotation.y += 0.001 * shaderSpeed;
          child.rotation.x += 0.0005 * shaderSpeed;
        }
        
        // Animate accretion disk
        if ((child as any).isAccretionDisk && child instanceof THREE.Mesh) {
          const material = child.material as THREE.ShaderMaterial;
          if (material.uniforms && material.uniforms.time) {
            material.uniforms.time.value = time;
          }
          child.rotation.z += 0.002;
        }
        
        // Animate distortion rings
        if ((child as any).isDistortionRing) {
          const rotSpeed = (child as any).rotationSpeed || 0.001;
          child.rotation.x += rotSpeed;
          child.rotation.y += rotSpeed * 0.7;
          child.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
        }
        
        // Animate glitch lines
        if ((child as any).isGlitchLines && child instanceof THREE.LineSegments) {
          const material = child.material as THREE.LineBasicMaterial;
          material.opacity = 0.2 + Math.sin(time * 3) * 0.2;
          child.rotation.z += 0.0005;
        }
        
        // Recursively check children (for black hole group)
        if (child instanceof THREE.Group) {
          child.children.forEach((subchild) => {
            if ((subchild as any).isAccretionDisk && subchild instanceof THREE.Mesh) {
              const material = subchild.material as THREE.ShaderMaterial;
              if (material.uniforms && material.uniforms.time) {
                material.uniforms.time.value = time;
              }
              subchild.rotation.z += 0.002;
            }
            
            // Animate accretion rings
            if ((subchild as any).isAccretionRing && subchild instanceof THREE.Mesh) {
              const rotSpeed = (subchild as any).rotationSpeed || 0.002;
              subchild.rotation.z += rotSpeed;
            }
            
            if ((subchild as any).isDistortionRing) {
              const rotSpeed = (subchild as any).rotationSpeed || 0.001;
              subchild.rotation.x += rotSpeed;
              subchild.rotation.y += rotSpeed * 0.7;
              subchild.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
            }
          });
        }
      });

      // Update controls
      if (controlsRef.current) {
        controlsRef.current.update();
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !renderer) return;
      const container = mountRef.current;
      const size = Math.min(container.clientWidth, container.clientHeight);
      renderer.setSize(size, size);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, [galaxyType, numSystems, blackHoles, pulsars, quasars, seed]);

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="w-full h-full border border-white/20 rounded bg-black/20" />
      
      {/* Toggle button to show/hide 2D image */}
      {imageUrl && (
        <>
          <button
            onClick={() => setShowImage(!showImage)}
            className="absolute top-2 right-2 p-2 bg-black/60 hover:bg-black/80 border border-white/30 rounded-lg transition-all duration-200 flex items-center gap-1 backdrop-blur-sm shadow-lg z-10"
            title={showImage ? "Hide 2D Image" : "Show 2D Image"}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {showImage ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              )}
            </svg>
            <span className="text-xs text-white hidden sm:inline">{showImage ? "Hide" : "2D"}</span>
          </button>
          
          {/* 2D Image overlay/comparison */}
          {showImage && (
            <div className="absolute bottom-2 left-2 w-48 h-48 border-2 border-blue-400/50 rounded-lg overflow-hidden bg-black/80 backdrop-blur-sm z-10">
              <img
                src={imageUrl}
                alt="2D Galaxy visualization"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 text-center">
                2D Reference
              </div>
            </div>
          )}
        </>
      )}
      
      {/* Galaxy type indicator */}
      <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-1 z-10">
        <span className="text-white text-sm font-medium">{galaxyType} Galaxy</span>
      </div>
      
      {/* Stats */}
      <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 z-10 text-xs text-white/80">
        <div>Systems: {numSystems.toLocaleString()}</div>
        <div>Black Holes: {blackHoles}</div>
        <div>Pulsars: {pulsars}</div>
        <div>Quasars: {quasars}</div>
      </div>
    </div>
  );
};

export default Galaxy3DViewer;