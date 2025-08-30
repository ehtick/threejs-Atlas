// atlas-ui/react/static/js/Components/UniverseAnimationCanvas.tsx
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface UniverseAnimationCanvasProps {
  animationType: "core" | "multiverse" | "processing" | null;
  onAnimationComplete?: () => void;
}

const UniverseAnimationCanvas: React.FC<UniverseAnimationCanvasProps> = ({ animationType, onAnimationComplete }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const createCircleTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;

    ctx.clearRect(0, 0, 64, 64);

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1.0)");
    gradient.addColorStop(0.3, "rgba(255,255,255,0.8)");
    gradient.addColorStop(0.7, "rgba(255,255,255,0.2)");
    gradient.addColorStop(1, "rgba(255,255,255,0.0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.premultiplyAlpha = false;
    texture.format = THREE.RGBAFormat;
    return texture;
  };

  const initScene = () => {
    if (!mountRef.current) {
      return;
    }

    try {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000011);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
      const cubeEdges = new THREE.EdgesGeometry(cubeGeometry);
      const cubeMaterial = new THREE.LineBasicMaterial({
        color: 0x666666,
        transparent: true,
        opacity: 0.5,
        linewidth: 3,
      });
      const universeCube = new THREE.LineSegments(cubeEdges, cubeMaterial);
      scene.add(universeCube);

      const bigBangPositions = new Float32Array([0, 0, 0]);
      const bigBangColors = new Float32Array([1, 1, 1]);
      const bigBangSizes = new Float32Array([10]);

      const bigBangGeometry = new THREE.BufferGeometry();
      bigBangGeometry.setAttribute("position", new THREE.BufferAttribute(bigBangPositions, 3));
      bigBangGeometry.setAttribute("color", new THREE.BufferAttribute(bigBangColors, 3));
      bigBangGeometry.setAttribute("size", new THREE.BufferAttribute(bigBangSizes, 1));

      const bigBangMaterial = new THREE.PointsMaterial({
        size: 7,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        alphaTest: 0.01,
        map: createCircleTexture(),
      });

      const bigBang = new THREE.Points(bigBangGeometry, bigBangMaterial);
      scene.add(bigBang);

      const maxGalaxies = 7500;
      const galaxyPositions = new Float32Array(maxGalaxies * 3);
      const galaxyColors = new Float32Array(maxGalaxies * 3);
      const galaxySizes = new Float32Array(maxGalaxies);
      const galaxyDistances = new Float32Array(maxGalaxies);

      for (let i = 0; i < maxGalaxies; i++) {
        let x, y, z;

        const attempts = 3 + Math.floor(Math.random() * 3);
        let minDistance = Infinity;
        let bestX = 0,
          bestY = 0,
          bestZ = 0;

        for (let attempt = 0; attempt < attempts; attempt++) {
          const tempX = (Math.random() - 0.5) * 10;
          const tempY = (Math.random() - 0.5) * 10;
          const tempZ = (Math.random() - 0.5) * 10;

          const distanceFromCenter = Math.sqrt(tempX * tempX + tempY * tempY + tempZ * tempZ);

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

        const distance = Math.sqrt(x * x + y * y + z * z);
        galaxyDistances[i] = distance;

        galaxyColors[i * 3] = 0.2;
        galaxyColors[i * 3 + 1] = 0.5;
        galaxyColors[i * 3 + 2] = 1.0;

        galaxySizes[i] = Math.random() * 0.4 + 0.1;
      }

      const galaxyGeometry = new THREE.BufferGeometry();
      galaxyGeometry.setAttribute("position", new THREE.BufferAttribute(galaxyPositions, 3));
      galaxyGeometry.setAttribute("color", new THREE.BufferAttribute(galaxyColors, 3));
      galaxyGeometry.setAttribute("size", new THREE.BufferAttribute(galaxySizes, 1));

      const galaxyMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        alphaTest: 0.01,
        depthWrite: false,
        map: createCircleTexture(),
      });

      const galaxies = new THREE.Points(galaxyGeometry, galaxyMaterial);
      scene.add(galaxies);

      let startTime = Date.now();
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const slowedElapsed = elapsed * 0.5;

        const progress = Math.min(elapsed / 7, 1);

        const timeAcceleration = Math.pow(slowedElapsed * 0.8, 3);
        const expansionAcceleration = Math.pow(progress, 2) * 20;
        const totalAcceleration = 1 + timeAcceleration + expansionAcceleration;

        const rotationSpeed = slowedElapsed * 0.05 * totalAcceleration;

        universeCube.rotation.x = Math.sin(rotationSpeed * 0.7) * 0.2;
        universeCube.rotation.y = rotationSpeed * 0.5;
        universeCube.rotation.z = Math.cos(rotationSpeed * 0.3) * 0.15;

        galaxies.rotation.copy(universeCube.rotation);

        const pulse = 3 + Math.sin(slowedElapsed * 8) * 2;
        bigBangMaterial.size = pulse;
        bigBangMaterial.opacity = 0.8 + Math.sin(slowedElapsed * 10) * 0.2;

        const maxCubeDistance = Math.sqrt(5 * 5 + 5 * 5 + 5 * 5);
        const expansionRadius = progress * maxCubeDistance;
        let visibleGalaxies = 0;

        for (let i = 0; i < maxGalaxies; i++) {
          const galaxyDistance = galaxyDistances[i];
          if (galaxyDistance <= expansionRadius) {
            visibleGalaxies++;
          }
        }

        galaxyGeometry.setDrawRange(0, visibleGalaxies);
        galaxyMaterial.opacity = 1.0;

        const baseRadius = 15 + Math.sin(slowedElapsed * 0.5) * 3;
        const zoomFactor = 1 - progress * 0.8;
        const radius = baseRadius * zoomFactor;

        camera.position.x = Math.cos(slowedElapsed * 0.2) * radius;
        camera.position.y = Math.sin(slowedElapsed * 0.15) * radius * 0.5;
        camera.position.z = Math.sin(slowedElapsed * 0.2) * radius;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);

        if (elapsed > 7.5 && onAnimationComplete) {
          onAnimationComplete();
          return;
        }

        animationIdRef.current = requestAnimationFrame(animate);
      };

      animate();
    } catch (error) {}
  };

  useEffect(() => {
    if (animationType && !isVisible) {
      setIsVisible(true);

      setTimeout(() => {
        initScene();
      }, 100);
    }
  }, [animationType, isVisible]);

  useEffect(() => {
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && mountRef.current && rendererRef.current.domElement.parentNode) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-50 bg-black"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default UniverseAnimationCanvas;
