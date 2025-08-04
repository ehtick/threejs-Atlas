import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface UniverseAnimationCanvasProps {
  animationType: 'core' | 'multiverse' | 'processing' | null;
  onAnimationComplete?: () => void;
}

const UniverseAnimationCanvas: React.FC<UniverseAnimationCanvasProps> = ({ 
  animationType, 
  onAnimationComplete 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  console.log('UniverseAnimationCanvas render, animationType:', animationType);

  // Create perfectly transparent circular texture for points
  const createCircleTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    
    // Clear with full transparency
    ctx.clearRect(0, 0, 64, 64);
    
    // Create radial gradient with full transparency outside
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1.0)');
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(0.7, 'rgba(255,255,255,0.2)');
    gradient.addColorStop(1, 'rgba(255,255,255,0.0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.premultiplyAlpha = false;
    texture.format = THREE.RGBAFormat;
    return texture;
  };

  // Initialize Three.js scene
  const initScene = () => {
    console.log('Initializing Three.js scene...');
    if (!mountRef.current) {
      console.error('mountRef.current is null');
      return;
    }

    try {
      // Scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000011);
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
      cameraRef.current = camera;

      // Renderer
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: false
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      console.log('Three.js scene initialized successfully');

      // Universe container - 3D cube wireframe (10m x 10m x 10m)
      const cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
      const cubeEdges = new THREE.EdgesGeometry(cubeGeometry);
      const cubeMaterial = new THREE.LineBasicMaterial({ 
        color: 0x666666, 
        transparent: true, 
        opacity: 0.5,
        linewidth: 3
      });
      const universeCube = new THREE.LineSegments(cubeEdges, cubeMaterial);
      scene.add(universeCube);

      // Big Bang center - single white pulsating point
      const bigBangPositions = new Float32Array([0, 0, 0]);
      const bigBangColors = new Float32Array([1, 1, 1]);
      const bigBangSizes = new Float32Array([10]);
      
      const bigBangGeometry = new THREE.BufferGeometry();
      bigBangGeometry.setAttribute('position', new THREE.BufferAttribute(bigBangPositions, 3));
      bigBangGeometry.setAttribute('color', new THREE.BufferAttribute(bigBangColors, 3));
      bigBangGeometry.setAttribute('size', new THREE.BufferAttribute(bigBangSizes, 1));
      
      const bigBangMaterial = new THREE.PointsMaterial({
        size: 7,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        alphaTest: 0.01,
        map: createCircleTexture()
      });
      
      const bigBang = new THREE.Points(bigBangGeometry, bigBangMaterial);
      scene.add(bigBang);

      // Galaxies - expanding from center (more for cinematic effect)
      const maxGalaxies = 7500;
      const galaxyPositions = new Float32Array(maxGalaxies * 3);
      const galaxyColors = new Float32Array(maxGalaxies * 3);
      const galaxySizes = new Float32Array(maxGalaxies);
      const galaxyDistances = new Float32Array(maxGalaxies); // Track distance from center
      
      // Pre-calculate galaxy positions with ORGANIC CENTER DENSITY (elimina patrón de cruz)
      for (let i = 0; i < maxGalaxies; i++) {
        // Generate random position in cube first, then apply organic center bias
        let x, y, z;
        
        // Use multiple random attempts to create organic, non-linear distribution
        const attempts = 3 + Math.floor(Math.random() * 3); // 3-5 attempts for randomness
        let minDistance = Infinity;
        let bestX = 0, bestY = 0, bestZ = 0;
        
        for (let attempt = 0; attempt < attempts; attempt++) {
          // Pure random position in cube
          const tempX = (Math.random() - 0.5) * 10; // -5 to +5
          const tempY = (Math.random() - 0.5) * 10; // -5 to +5  
          const tempZ = (Math.random() - 0.5) * 10; // -5 to +5
          
          // Distance from center (0,0,0)
          const distanceFromCenter = Math.sqrt(tempX * tempX + tempY * tempY + tempZ * tempZ);
          
          // Apply center bias: prefer positions closer to center with some randomness
          const biasWeight = Math.pow(Math.random(), 1.8) + distanceFromCenter * 0.1;
          
          if (biasWeight < minDistance) {
            minDistance = biasWeight;
            bestX = tempX;
            bestY = tempY;
            bestZ = tempZ;
          }
        }
        
        x = bestX;
        y = bestY;
        z = bestZ;
        
        galaxyPositions[i * 3] = x;
        galaxyPositions[i * 3 + 1] = y;
        galaxyPositions[i * 3 + 2] = z;
        
        // Distance from center (0,0,0) for progressive appearance
        const distance = Math.sqrt(x * x + y * y + z * z);
        galaxyDistances[i] = distance;
        
        // Blue galaxies
        galaxyColors[i * 3] = 0.2;     // R
        galaxyColors[i * 3 + 1] = 0.5; // G  
        galaxyColors[i * 3 + 2] = 1.0; // B
        
        galaxySizes[i] = Math.random() * 0.4 + 0.1; // Ultra small for maximum realism
      }
      
      const galaxyGeometry = new THREE.BufferGeometry();
      galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3));
      galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3));
      galaxyGeometry.setAttribute('size', new THREE.BufferAttribute(galaxySizes, 1));
      
      const galaxyMaterial = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        alphaTest: 0.01,
        depthWrite: false,
        map: createCircleTexture()
      });
      
      const galaxies = new THREE.Points(galaxyGeometry, galaxyMaterial);
      scene.add(galaxies);

      // Big Bang Universe Expansion Animation
      let startTime = Date.now();
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / 7, 1); // 7 second animation
        
        // Rotate universe cube AND galaxies together with DRAMATIC ACCELERATION
        // Starts slow, accelerates MUCH faster tied to universe expansion progress
        // Exponential acceleration based on both time and universe filling progress
        const timeAcceleration = Math.pow(elapsed * 0.8, 3); // Cubic time acceleration
        const expansionAcceleration = Math.pow(progress, 2) * 20; // Tied to universe filling
        const totalAcceleration = 1 + timeAcceleration + expansionAcceleration;
        const rotationSpeed = elapsed * 0.05 * totalAcceleration;
        
        universeCube.rotation.x = Math.sin(rotationSpeed * 0.7) * 0.2;
        universeCube.rotation.y = rotationSpeed * 0.5;
        universeCube.rotation.z = Math.cos(rotationSpeed * 0.3) * 0.15;
        
        // Rotate galaxies with same rotation as cube
        galaxies.rotation.copy(universeCube.rotation);
        
        // Big Bang pulsation (smaller)
        const pulse = 3 + Math.sin(elapsed * 8) * 2;
        bigBangMaterial.size = pulse;
        bigBangMaterial.opacity = 0.8 + Math.sin(elapsed * 10) * 0.2;
        
        // Progressive galaxy appearance from center outward in CUBE
        const maxCubeDistance = Math.sqrt(5*5 + 5*5 + 5*5); // ~8.66 units (corner to center)
        const expansionRadius = progress * maxCubeDistance; // 0 to 8.66 units
        let visibleGalaxies = 0;
        
        // Update galaxy visibility based on expansion radius
        for (let i = 0; i < maxGalaxies; i++) {
          const galaxyDistance = galaxyDistances[i];
          
          if (galaxyDistance <= expansionRadius) {
            visibleGalaxies++;
          }
        }
        
        // Set galaxy count dynamically
        galaxyGeometry.setDrawRange(0, visibleGalaxies);
        galaxyMaterial.opacity = 1.0;
        
        // Dynamic camera movement with progressive zoom-in toward center
        const baseRadius = 15 + Math.sin(elapsed * 0.5) * 3;
        // Progressive zoom: starts at full radius, zooms to 40% by the end
        const zoomFactor = 1 - (progress * 0.6); // 1.0 → 0.4 (closer to center)
        const radius = baseRadius * zoomFactor;
        
        camera.position.x = Math.cos(elapsed * 0.2) * radius;
        camera.position.y = Math.sin(elapsed * 0.15) * radius * 0.5;
        camera.position.z = Math.sin(elapsed * 0.2) * radius;
        camera.lookAt(0, 0, 0);
        
        renderer.render(scene, camera);

        if (elapsed > 7.5 && onAnimationComplete) {
          console.log('Big Bang animation complete, calling callback');
          onAnimationComplete();
          return;
        }
        
        animationIdRef.current = requestAnimationFrame(animate);
      };
      
      animate();

    } catch (error) {
      console.error('Error initializing Three.js scene:', error);
    }
  };

  // Start animation based on type
  useEffect(() => {
    console.log('useEffect triggered, animationType:', animationType, 'isVisible:', isVisible);
    
    if (animationType && !isVisible) {
      console.log('Setting visible and initializing scene');
      setIsVisible(true);
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        initScene();
      }, 100);
    }
  }, [animationType, isVisible]);

  // Cleanup
  useEffect(() => {
    return () => {
      console.log('Cleaning up animation');
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && mountRef.current && rendererRef.current.domElement.parentNode) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  console.log('Rendering component, isVisible:', isVisible);

  if (!isVisible) {
    console.log('Component not visible, returning null');
    return null;
  }

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-50 bg-black"
      style={{ 
        width: '100vw', 
        height: '100vh'
      }}
    />
  );
};

export default UniverseAnimationCanvas;