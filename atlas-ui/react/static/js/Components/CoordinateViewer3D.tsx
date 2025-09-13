// atlas-ui/react/static/js/Components/CoordinateViewer3D.tsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface CoordinateViewer3DProps {
  coordinates: { x: number; y: number; z: number };
  className?: string;
}

const CoordinateViewer3D: React.FC<CoordinateViewer3DProps> = ({ coordinates, className = "" }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const galaxyRef = useRef<THREE.Mesh | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const rotatingGroupRef = useRef<THREE.Group | null>(null);
  const targetPositionRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const currentPositionRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 1000);
    camera.position.set(8, 6, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const rotatingGroup = new THREE.Group();
    scene.add(rotatingGroup);
    rotatingGroupRef.current = rotatingGroup;

    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeEdges = new THREE.EdgesGeometry(cubeGeometry);
    const cubeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      opacity: 0.4,
      transparent: true,
    });
    const cubeWireframe = new THREE.LineSegments(cubeEdges, cubeMaterial);
    rotatingGroup.add(cubeWireframe);

    const gridHelper1 = new THREE.GridHelper(4, 8, 0xffffff, 0xffffff);
    gridHelper1.material.opacity = 0.1;
    gridHelper1.material.transparent = true;
    gridHelper1.position.y = -2;
    rotatingGroup.add(gridHelper1);

    const gridHelper2 = new THREE.GridHelper(4, 8, 0xffffff, 0xffffff);
    gridHelper2.material.opacity = 0.05;
    gridHelper2.material.transparent = true;
    gridHelper2.rotation.z = Math.PI / 2;
    gridHelper2.position.x = -2;
    rotatingGroup.add(gridHelper2);

    const gridHelper3 = new THREE.GridHelper(4, 8, 0xffffff, 0xffffff);
    gridHelper3.material.opacity = 0.05;
    gridHelper3.material.transparent = true;
    gridHelper3.rotation.x = Math.PI / 2;
    gridHelper3.position.z = -2;
    rotatingGroup.add(gridHelper3);

    const centerGeometry = new THREE.SphereGeometry(0.15, 12, 12);
    const centerMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
    });
    const centerPoint = new THREE.Mesh(centerGeometry, centerMaterial);
    centerPoint.position.set(0, 0, 0);
    rotatingGroup.add(centerPoint);

    const centerGlow = new THREE.Mesh(
      new THREE.SphereGeometry(0.25, 12, 12),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.2,
      })
    );
    centerPoint.add(centerGlow);

    const galaxyGeometry = new THREE.SphereGeometry(0.12, 12, 12);
    const galaxyMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 1,
    });
    const galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial);
    galaxyRef.current = galaxy;
    rotatingGroup.add(galaxy);

    const galaxyGlow = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 12, 12),
      new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.3,
      })
    );
    galaxy.add(galaxyGlow);

    const createTextSprite = (text: string, color: number) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return null;

      canvas.width = 32;
      canvas.height = 32;

      context.fillStyle = `#${color.toString(16).padStart(6, "0")}`;
      context.font = "bold 24px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(text, 16, 16);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.8 });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(0.4, 0.4, 1);

      return sprite;
    };

    const xLabel = createTextSprite("X", 0xff6b6b);
    if (xLabel) {
      xLabel.position.set(2.0, -2.0, -2.0);
      rotatingGroup.add(xLabel);
    }

    const yLabel = createTextSprite("Y", 0x6bff6b);
    if (yLabel) {
      yLabel.position.set(-2.0, 2.0, -2.0);
      rotatingGroup.add(yLabel);
    }

    const zLabel = createTextSprite("Z", 0x6b6bff);
    if (zLabel) {
      zLabel.position.set(-2.0, -2.0, 2.0);
      rotatingGroup.add(zLabel);
    }

    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(3, 3, 3);
    scene.add(directionalLight);

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (rotatingGroupRef.current) {
        rotatingGroupRef.current.rotation.y += 0.002;
        rotatingGroupRef.current.rotation.x += 0.001;
      }

      if (galaxyRef.current) {
        const lerpSpeed = 0.05;
        currentPositionRef.current.lerp(targetPositionRef.current, lerpSpeed);
        galaxyRef.current.position.copy(currentPositionRef.current);
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      resizeObserver.disconnect();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const MIN_COORD = 0;
    const MAX_COORD = 10000000;

    const { x, y, z } = coordinates;
    const normalizedX = ((x - MIN_COORD) / (MAX_COORD - MIN_COORD) - 0.5) * 4;
    const normalizedY = ((y - MIN_COORD) / (MAX_COORD - MIN_COORD) - 0.5) * 4;
    const normalizedZ = ((z - MIN_COORD) / (MAX_COORD - MIN_COORD) - 0.5) * 4;

    targetPositionRef.current.set(normalizedX, normalizedY, normalizedZ);
  }, [coordinates]);

  return <div ref={mountRef} className={`rounded-lg overflow-hidden ${className}`} style={{ background: "transparent" }} />;
};

export default CoordinateViewer3D;
