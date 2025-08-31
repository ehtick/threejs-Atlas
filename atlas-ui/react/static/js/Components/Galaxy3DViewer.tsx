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
        sizes.push(rng.uniform(0.5, 2));
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
        sizes.push(rng.uniform(0.5, 1.5));
      }
    } else if (galaxyType === "Elliptical") {
      numPoints = Math.min(numSystems, 100000);
      
      for (let i = 0; i < numPoints; i++) {
        const angle = rng.uniform(0, 2 * Math.PI);
        const phi = rng.uniform(0, Math.PI);
        const radius = rng.gauss(maxRadius / 4, maxRadius / 8);
        
        const x = radius * Math.sin(phi) * Math.cos(angle);
        const y = radius * Math.cos(phi) * 0.6; // Flatten slightly
        const z = radius * Math.sin(phi) * Math.sin(angle);
        
        positions.push(x, y, z);
        colors.push(1, 0.9, 0.7);
        sizes.push(rng.uniform(0.3, 1));
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
        sizes.push(rng.uniform(0.5, 2));
      }
    } else if (galaxyType === "Singularity Void") {
      // Create distorted space effect
      numPoints = 5000;
      
      // Swirling void particles
      for (let i = 0; i < numPoints; i++) {
        const t = i / numPoints;
        const angle = t * 20 * Math.PI;
        const radius = maxRadius * (1 - t) + rng.uniform(-20, 20);
        const height = (t - 0.5) * 200 + rng.uniform(-10, 10);
        
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        
        positions.push(x, height, z);
        
        // Distorted colors
        const r = rng.uniform(0.5, 1);
        const g = rng.uniform(0, 0.5);
        const b = rng.uniform(0.5, 1);
        colors.push(r, g, b);
        sizes.push(rng.uniform(0.5, 3));
      }
      
      // Add glitch effect geometry
      const glitchGeometry = new THREE.BufferGeometry();
      const glitchPositions: number[] = [];
      const glitchColors: number[] = [];
      
      for (let i = 0; i < 500; i++) {
        const x = rng.uniform(-maxRadius, maxRadius);
        const y = rng.uniform(-maxRadius/2, maxRadius/2);
        const z = rng.uniform(-maxRadius, maxRadius);
        
        // Create line segments
        glitchPositions.push(x, y, z);
        glitchPositions.push(x + rng.uniform(-30, 30), y + rng.uniform(-10, 10), z + rng.uniform(-30, 30));
        
        const color = new THREE.Color();
        color.setHSL(rng.random(), 1, 0.5);
        glitchColors.push(color.r, color.g, color.b);
        glitchColors.push(color.r, color.g, color.b);
      }
      
      glitchGeometry.setAttribute('position', new THREE.Float32BufferAttribute(glitchPositions, 3));
      glitchGeometry.setAttribute('color', new THREE.Float32BufferAttribute(glitchColors, 3));
      
      const glitchMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
      });
      
      const glitchLines = new THREE.LineSegments(glitchGeometry, glitchMaterial);
      galaxyGroup.add(glitchLines);
      
      // Central void
      const voidGeometry = new THREE.SphereGeometry(30, 32, 32);
      const voidMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.9,
      });
      const voidMesh = new THREE.Mesh(voidGeometry, voidMaterial);
      galaxyGroup.add(voidMesh);
      
      // Void distortion rings
      for (let i = 0; i < 5; i++) {
        const ringGeometry = new THREE.TorusGeometry(40 + i * 15, 2, 8, 64);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.8, 1, 0.5),
          transparent: true,
          opacity: 0.3 - i * 0.05,
          wireframe: true,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = rng.uniform(0, Math.PI);
        ring.rotation.y = rng.uniform(0, Math.PI);
        galaxyGroup.add(ring);
      }
    }

    // Set up star attributes
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    starsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    starsGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

    // Create star material
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

    // Add black holes
    for (let i = 0; i < blackHoles; i++) {
      const blackHoleGroup = new THREE.Group();
      
      const x = rng.uniform(-30, 30);
      const y = rng.uniform(-10, 10);
      const z = rng.uniform(-30, 30);
      
      // Black hole sphere
      const bhGeometry = new THREE.SphereGeometry(3, 16, 16);
      const bhMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.9,
      });
      const bhMesh = new THREE.Mesh(bhGeometry, bhMaterial);
      blackHoleGroup.add(bhMesh);
      
      // Accretion disk
      const diskGeometry = new THREE.TorusGeometry(8, 2, 8, 32);
      const diskMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.6,
        emissive: 0x00ffff,
        emissiveIntensity: 0.5,
      });
      const disk = new THREE.Mesh(diskGeometry, diskMaterial);
      disk.rotation.x = Math.PI / 2;
      blackHoleGroup.add(disk);
      
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

      // Rotate galaxy slowly
      if (galaxyGroupRef.current) {
        galaxyGroupRef.current.rotation.y += 0.001;
      }

      // Animate pulsars
      galaxyGroup.children.forEach((child) => {
        if ((child as any).isPulsar) {
          const pulseSpeed = (child as any).pulseSpeed || 1;
          child.scale.setScalar(1 + Math.sin(Date.now() * 0.001 * pulseSpeed) * 0.3);
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