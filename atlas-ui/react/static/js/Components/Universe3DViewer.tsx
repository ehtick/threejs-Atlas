import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import Universe3DViewerFullscreen from './Universe3DViewerFullscreen.tsx';

interface Universe3DViewerProps {
  coordinates: number[];
  galaxyName: string;
}

const Universe3DViewer: React.FC<Universe3DViewerProps> = ({ coordinates, galaxyName }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false); // Fullscreen modal state

  // Handle ESC key to close fullscreen
  useEffect(() => {
    const handleCloseFullscreen = () => {
      setIsFullscreen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener('universe-close-fullscreen', handleCloseFullscreen);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('universe-close-fullscreen', handleCloseFullscreen);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const containerWidth = container.clientWidth;
    const isMobile = containerWidth < 640;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      30, // FOV
      containerWidth / (isMobile ? 120 : 120), // Aspect ratio - smaller height
      0.1, // Near
      1000 // Far
    );
    camera.position.set(12, 8, 12); // Closer to the cube
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerWidth, isMobile ? 120 : 120); // Smaller height
    renderer.setClearColor(0x000000, 0.2);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Universe bounds
    const MIN_COORD = 0;
    const MAX_COORD = 10000000;
    const BIT_BANG = 5000000;

    // Extract and normalize coordinates (adjusted for smaller cube)
    const [x, y, z] = coordinates;
    const normalizedX = ((x - MIN_COORD) / (MAX_COORD - MIN_COORD) - 0.5) * 8;
    const normalizedY = ((y - MIN_COORD) / (MAX_COORD - MIN_COORD) - 0.5) * 8;
    const normalizedZ = ((z - MIN_COORD) / (MAX_COORD - MIN_COORD) - 0.5) * 8;

    // Create a group for all rotating elements
    const rotatingGroup = new THREE.Group();
    scene.add(rotatingGroup);

    // Create wireframe cube (universe boundary) - smaller
    const cubeGeometry = new THREE.BoxGeometry(8, 8, 8); // Smaller cube
    const cubeEdges = new THREE.EdgesGeometry(cubeGeometry);
    const cubeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      opacity: 0.4,
      transparent: true,
    });
    const cubeWireframe = new THREE.LineSegments(cubeEdges, cubeMaterial);
    rotatingGroup.add(cubeWireframe);

    // Create grid planes for reference - smaller to match cube
    const gridHelper1 = new THREE.GridHelper(8, 8, 0xffffff, 0xffffff);
    gridHelper1.material.opacity = 0.1;
    gridHelper1.material.transparent = true;
    gridHelper1.position.y = -4;
    rotatingGroup.add(gridHelper1);

    const gridHelper2 = new THREE.GridHelper(8, 8, 0xffffff, 0xffffff);
    gridHelper2.material.opacity = 0.05;
    gridHelper2.material.transparent = true;
    gridHelper2.rotation.z = Math.PI / 2;
    gridHelper2.position.x = -4;
    rotatingGroup.add(gridHelper2);

    const gridHelper3 = new THREE.GridHelper(8, 8, 0xffffff, 0xffffff);
    gridHelper3.material.opacity = 0.05;
    gridHelper3.material.transparent = true;
    gridHelper3.rotation.x = Math.PI / 2;
    gridHelper3.position.z = -4;
    rotatingGroup.add(gridHelper3);

    // Create Bit Bang (center point) - bigger
    const bitBangGeometry = new THREE.SphereGeometry(0.25, 16, 16); // Bigger
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
      new THREE.SphereGeometry(0.45, 16, 16), // Bigger glow
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.2,
      })
    );
    bitBang.add(bitBangGlow);

    // Create Galaxy - bigger
    const galaxyGeometry = new THREE.SphereGeometry(0.2, 16, 16); // Bigger
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
      new THREE.SphereGeometry(0.35, 16, 16), // Bigger glow
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
        dashSize: 0.3,
        gapSize: 0.3,
        opacity: 0.4,
        transparent: true,
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
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add X, Y, Z axis labels
    // Create simple text sprites for better performance
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
      sprite.scale.set(0.8, 0.8, 1);

      return sprite;
    };

    // Add axis labels at cube corners
    const xLabel = createTextSprite("X", 0xff6b6b);
    if (xLabel) {
      xLabel.position.set(4.2, -3.8, -3.8); // Bottom right front corner
      rotatingGroup.add(xLabel);
    }

    const yLabel = createTextSprite("Y", 0x6bff6b);
    if (yLabel) {
      yLabel.position.set(-3.8, 4.2, -3.8); // Top left front corner
      rotatingGroup.add(yLabel);
    }

    const zLabel = createTextSprite("Z", 0x6b6bff);
    if (zLabel) {
      zLabel.position.set(-3.8, -3.8, 4.2); // Bottom left back corner
      rotatingGroup.add(zLabel);
    }

    // Mouse controls
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let autoRotate = true;

    const handleMouseDown = (event: MouseEvent) => {
      isMouseDown = true;
      autoRotate = false; // Stop auto rotation when user interacts
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
      // Resume auto rotation after 3 seconds of no interaction
      setTimeout(() => {
        if (!isMouseDown) autoRotate = true;
      }, 3000);
    };

    // Zoom with scroll wheel
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const zoomSpeed = 0.1;
      const currentDistance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));

      if (event.deltaY > 0 && currentDistance < 25) {
        // Zoom out
        camera.position.multiplyScalar(1 + zoomSpeed);
      } else if (event.deltaY < 0 && currentDistance > 5) {
        // Zoom in
        camera.position.multiplyScalar(1 - zoomSpeed);
      }
    };

    // Add event listeners
    const canvas = renderer.domElement;
    canvas.style.cursor = "grab";
    canvas.style.borderRadius = "8px";

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
    }); // Stop dragging when mouse leaves
    canvas.addEventListener("wheel", handleWheel);

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
      const newHeight = newWidth < 640 ? 150 : 160; // Updated heights

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      // Remove mouse event listeners
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseUp);
      canvas.removeEventListener("wheel", handleWheel);

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

  const formatName = (name: string) => {
    return name.replace(/_/g, " ");
  };

  const formatCoord = (coord: number) => {
    if (coord >= 1000000) return `${(coord / 1000000).toFixed(1)}M`;
    if (coord >= 1000) return `${(coord / 1000).toFixed(1)}K`;
    return coord.toString();
  };

  const [x, y, z] = coordinates;

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="text-xs text-gray-300 mb-2">Galaxy Location</div>

        <div className="relative w-full">
          <div 
            ref={mountRef} 
            className="w-full border border-white/20 rounded bg-black/20" 
            style={{ height: "auto" }} 
          />
          
          {/* Expand button overlaid on canvas */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-2 right-2 p-2 bg-black/60 hover:bg-black/80 border border-white/30 rounded-lg transition-all duration-200 flex items-center gap-1 backdrop-blur-sm shadow-lg z-10"
            title="Expand to fullscreen"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span className="text-xs text-white hidden sm:inline">Expand</span>
          </button>
        </div>

        <div className="text-xs text-gray-400 mt-2 w-full">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full opacity-90"></div>
                <span className="text-[10px]">Bit Bang</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-[10px]">{formatName(galaxyName)}</span>
              </div>
            </div>
            <div className="text-[10px] text-gray-500">
              {formatCoord(x)}, {formatCoord(y)}, {formatCoord(z)}
            </div>
          </div>
          <div className="text-center text-[10px] text-gray-500">
            Scroll: Zoom • Drag: Rotate View
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center">
          <div className="w-full h-full flex flex-col p-2 sm:p-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <h2 className="text-lg sm:text-xl font-bold text-white truncate">
                  {formatName(galaxyName)} - Galaxy Location
                </h2>
                <div className="hidden sm:flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-white rounded-full opacity-90"></div>
                    <span className="text-sm text-gray-300">Bit Bang</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Galaxy</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {formatCoord(x)}, {formatCoord(y)}, {formatCoord(z)}
                  </div>
                </div>
                {/* Mobile info */}
                <div className="sm:hidden text-xs text-gray-400">
                  Universe Cube
                </div>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 sm:p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg transition-colors duration-200 text-red-400 hover:text-red-300 flex-shrink-0"
                title="Close fullscreen (ESC)"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content - Full Size Universe 3D Viewer */}
            <div className="flex-1 border border-white/20 rounded-lg bg-black/20 overflow-hidden min-h-0">
              <Universe3DViewerFullscreen 
                coordinates={coordinates} 
                galaxyName={galaxyName}
              />
            </div>

            {/* Modal Footer */}
            <div className="mt-2 sm:mt-4 text-center text-xs sm:text-sm text-gray-400">
              <div className="hidden sm:block">
                Scroll: Zoom • Drag: Rotate View • ESC: Close
              </div>
              <div className="sm:hidden">
                Pinch: Zoom • Drag: Rotate • ESC: Close
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Universe3DViewer;
