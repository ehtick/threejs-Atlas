import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface Universe3DViewerFullscreenProps {
  coordinates: number[];
  galaxyName: string;
}

const Universe3DViewerFullscreen: React.FC<Universe3DViewerFullscreenProps> = ({ 
  coordinates, 
  galaxyName 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera setup - wider FOV for fullscreen
    const camera = new THREE.PerspectiveCamera(
      45, // Wider FOV for fullscreen
      containerWidth / containerHeight,
      0.1,
      1000
    );
    camera.position.set(20, 15, 20); // Further back for better view
    camera.lookAt(0, 0, 0);

    // Renderer setup - fullscreen size
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0x000000, 0.2);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Universe bounds
    const MIN_COORD = 0;
    const MAX_COORD = 10000000;
    const BIT_BANG = 5000000;

    // Extract and normalize coordinates (bigger scale for fullscreen)
    const [x, y, z] = coordinates;
    const normalizedX = ((x - MIN_COORD) / (MAX_COORD - MIN_COORD) - 0.5) * 16; // Bigger scale
    const normalizedY = ((y - MIN_COORD) / (MAX_COORD - MIN_COORD) - 0.5) * 16;
    const normalizedZ = ((z - MIN_COORD) / (MAX_COORD - MIN_COORD) - 0.5) * 16;

    // Create a group for all rotating elements
    const rotatingGroup = new THREE.Group();
    scene.add(rotatingGroup);

    // Create wireframe cube (universe boundary) - bigger for fullscreen
    const cubeGeometry = new THREE.BoxGeometry(16, 16, 16); // Bigger cube
    const cubeEdges = new THREE.EdgesGeometry(cubeGeometry);
    const cubeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      opacity: 0.4,
      transparent: true,
      linewidth: 2 // Thicker lines for fullscreen
    });
    const cubeWireframe = new THREE.LineSegments(cubeEdges, cubeMaterial);
    rotatingGroup.add(cubeWireframe);

    // Create grid planes for reference - bigger to match cube
    const gridHelper1 = new THREE.GridHelper(16, 16, 0xffffff, 0xffffff);
    gridHelper1.material.opacity = 0.1;
    gridHelper1.material.transparent = true;
    gridHelper1.position.y = -8;
    rotatingGroup.add(gridHelper1);

    const gridHelper2 = new THREE.GridHelper(16, 16, 0xffffff, 0xffffff);
    gridHelper2.material.opacity = 0.05;
    gridHelper2.material.transparent = true;
    gridHelper2.rotation.z = Math.PI / 2;
    gridHelper2.position.x = -8;
    rotatingGroup.add(gridHelper2);

    const gridHelper3 = new THREE.GridHelper(16, 16, 0xffffff, 0xffffff);
    gridHelper3.material.opacity = 0.05;
    gridHelper3.material.transparent = true;
    gridHelper3.rotation.x = Math.PI / 2;
    gridHelper3.position.z = -8;
    rotatingGroup.add(gridHelper3);

    // Create Bit Bang (center point) - bigger for fullscreen
    const bitBangGeometry = new THREE.SphereGeometry(0.5, 32, 32); // Bigger and higher quality
    const bitBangMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    const bitBang = new THREE.Mesh(bitBangGeometry, bitBangMaterial);
    bitBang.position.set(0, 0, 0);
    rotatingGroup.add(bitBang);

    // Add glow effect to Bit Bang
    const bitBangGlow = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 32, 32), // Bigger glow
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.2,
      })
    );
    bitBang.add(bitBangGlow);

    // Create Galaxy - bigger for fullscreen
    const galaxyGeometry = new THREE.SphereGeometry(0.4, 32, 32); // Bigger and higher quality
    const galaxyMaterial = new THREE.MeshBasicMaterial({
      color: 0x64c8ff,
      transparent: true,
      opacity: 1,
    });
    const galaxy = new THREE.Mesh(galaxyGeometry, galaxyMaterial);
    galaxy.position.set(normalizedX, normalizedY, normalizedZ);
    rotatingGroup.add(galaxy);

    // Add glow effect to Galaxy
    const galaxyGlow = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 32, 32), // Bigger glow
      new THREE.MeshBasicMaterial({
        color: 0x64c8ff,
        transparent: true,
        opacity: 0.3,
      })
    );
    galaxy.add(galaxyGlow);

    // Create connection line if close to Bit Bang
    const distance = Math.sqrt(Math.pow(x - BIT_BANG, 2) + Math.pow(y - BIT_BANG, 2) + Math.pow(z - BIT_BANG, 2));

    if (distance < 2000000) {
      const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(normalizedX, normalizedY, normalizedZ)];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineDashedMaterial({
        color: 0xffc864,
        dashSize: 0.6, // Bigger dashes for fullscreen
        gapSize: 0.6,
        opacity: 0.4,
        transparent: true,
        linewidth: 2 // Thicker line
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      line.computeLineDistances();
      rotatingGroup.add(line);
    }

    // Add ambient lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Add X, Y, Z axis labels (bigger for fullscreen)
    const createTextSprite = (text: string, color: number) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return null;

      canvas.width = 64; // Bigger canvas for fullscreen
      canvas.height = 64;

      context.fillStyle = `#${color.toString(16).padStart(6, "0")}`;
      context.font = "bold 48px Arial"; // Bigger font for fullscreen
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(text, 32, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.8 });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(1.6, 1.6, 1); // Bigger labels for fullscreen

      return sprite;
    };

    // Add axis labels at cube corners (adjusted for bigger cube)
    const xLabel = createTextSprite("X", 0xff6b6b);
    if (xLabel) {
      xLabel.position.set(8.4, -7.6, -7.6); // Adjusted for bigger cube
      rotatingGroup.add(xLabel);
    }

    const yLabel = createTextSprite("Y", 0x6bff6b);
    if (yLabel) {
      yLabel.position.set(-7.6, 8.4, -7.6); // Adjusted for bigger cube
      rotatingGroup.add(yLabel);
    }

    const zLabel = createTextSprite("Z", 0x6b6bff);
    if (zLabel) {
      zLabel.position.set(-7.6, -7.6, 8.4); // Adjusted for bigger cube
      rotatingGroup.add(zLabel);
    }

    // Mouse and touch controls
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let autoRotate = true;
    let lastTouchDistance = 0;

    const handleMouseDown = (event: MouseEvent) => {
      isMouseDown = true;
      autoRotate = false;
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isMouseDown) return;

      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;

      rotatingGroup.rotation.y += deltaX * 0.01;
      rotatingGroup.rotation.x += deltaY * 0.01;

      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      setTimeout(() => {
        if (!isMouseDown) autoRotate = true;
      }, 3000);
    };

    // Zoom with scroll wheel
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const zoomSpeed = 0.1;
      const currentDistance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));

      if (event.deltaY > 0 && currentDistance < 50) {
        camera.position.multiplyScalar(1 + zoomSpeed);
      } else if (event.deltaY < 0 && currentDistance > 10) {
        camera.position.multiplyScalar(1 - zoomSpeed);
      }
    };

    // ESC key to close fullscreen
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // This will be handled by parent component
        document.dispatchEvent(new CustomEvent('universe-close-fullscreen'));
      }
    };

    // Touch controls for mobile
    const handleTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      if (event.touches.length === 1) {
        // Single touch - rotation
        isMouseDown = true;
        autoRotate = false;
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
      } else if (event.touches.length === 2) {
        // Two finger touch - zoom
        const dx = event.touches[0].clientX - event.touches[1].clientX;
        const dy = event.touches[0].clientY - event.touches[1].clientY;
        lastTouchDistance = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      if (event.touches.length === 1 && isMouseDown) {
        // Single touch move - rotation
        const deltaX = event.touches[0].clientX - mouseX;
        const deltaY = event.touches[0].clientY - mouseY;
        
        rotatingGroup.rotation.y += deltaX * 0.01;
        rotatingGroup.rotation.x += deltaY * 0.01;
        
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
      } else if (event.touches.length === 2) {
        // Two finger move - zoom
        const dx = event.touches[0].clientX - event.touches[1].clientX;
        const dy = event.touches[0].clientY - event.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (lastTouchDistance > 0) {
          const zoomSpeed = 0.01;
          const scale = distance / lastTouchDistance;
          const currentDistance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
          
          if (scale > 1 && currentDistance > 10) {
            camera.position.multiplyScalar(1 - zoomSpeed);
          } else if (scale < 1 && currentDistance < 50) {
            camera.position.multiplyScalar(1 + zoomSpeed);
          }
        }
        
        lastTouchDistance = distance;
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      event.preventDefault();
      isMouseDown = false;
      lastTouchDistance = 0;
      setTimeout(() => {
        if (!isMouseDown) autoRotate = true;
      }, 3000);
    };

    // Add event listeners
    const canvas = renderer.domElement;
    canvas.style.cursor = "grab";
    
    canvas.addEventListener("mousedown", (e) => {
      canvas.style.cursor = "grabbing";
      handleMouseDown(e);
    });
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", () => {
      canvas.style.cursor = "grab";
      handleMouseUp();
    });
    canvas.addEventListener("mouseleave", () => {
      canvas.style.cursor = "grab";
      handleMouseUp();
    });
    canvas.addEventListener("wheel", handleWheel);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd, { passive: false });
    document.addEventListener("keydown", handleKeyDown);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Smooth rotation for the entire group (only when auto-rotate is enabled)
      if (autoRotate) {
        rotatingGroup.rotation.y += 0.002;
        rotatingGroup.rotation.x += 0.001;
      }

      // Pulsing effect for Bit Bang
      const time = Date.now() * 0.005;
      bitBang.scale.setScalar(1 + Math.sin(time) * 0.1);

      // Subtle rotation for galaxy
      galaxy.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
      
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseUp);
      canvas.removeEventListener("wheel", handleWheel);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      
      // Dispose geometries and materials
      cubeGeometry.dispose();
      cubeEdges.dispose();
      cubeMaterial.dispose();
      bitBangGeometry.dispose();
      bitBangMaterial.dispose();
      galaxyGeometry.dispose();
      galaxyMaterial.dispose();
    };
  }, [coordinates, galaxyName]);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full"
    />
  );
};

export default Universe3DViewerFullscreen;