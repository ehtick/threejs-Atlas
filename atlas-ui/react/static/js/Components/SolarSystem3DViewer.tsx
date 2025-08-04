import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";
import SolarSystem3DViewerFullscreen from './SolarSystem3DViewerFullscreen.tsx';

interface Planet {
  name: string;
  planet_type: string;
  diameter: number;
  orbital_radius: number;
  orbital_period_seconds: number;
  orbital_speed: number;
  axial_tilt: number;
  rotation_period_seconds: number;
  initial_orbital_angle: number;
  eccentricity_factor: number;
  mass: number;
}

interface Star {
  Type: string;
  Size: string;
  Color: string;
}

interface SolarSystem3DViewerProps {
  planets: Planet[];
  stars: Star[];
  systemName: string;
  cosmicOriginTime: number;
}

const SolarSystem3DViewer: React.FC<SolarSystem3DViewerProps> = ({ 
  planets, 
  stars, 
  systemName,
  cosmicOriginTime
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const planetsRef = useRef<THREE.Mesh[]>([]);
  const orbitsRef = useRef<THREE.Line[]>([]);
  const planetLabelsRef = useRef<THREE.Sprite[]>([]);
  const currentTimeRef = useRef<number>(0);
  
  // Use real current time like Python does
  const realCurrentTime = Math.floor(Date.now() / 1000); // Current Unix timestamp
  const [timeOffset, setTimeOffset] = useState(0); // User time adjustment
  const [isFullscreen, setIsFullscreen] = useState(false); // Fullscreen modal state
  const [sliderTimeOffset, setSliderTimeOffset] = useState(0); // Slider time offset for fullscreen
  const currentTime = realCurrentTime - cosmicOriginTime + timeOffset;
  
  // Update time reference for animation loop
  currentTimeRef.current = currentTime;


  // Function to create text sprite for planet names
  const createTextSprite = (text: string, color: string = '#ffffff') => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return null;

    // Set canvas size - much bigger
    canvas.width = 512;
    canvas.height = 128;

    // Add background for better visibility
    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw border
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);

    // Draw text - much bigger
    context.fillStyle = color;
    context.font = 'bold 32px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, 256, 64);

    // Create texture and sprite
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ 
      map: texture, 
      transparent: true,
      alphaTest: 0.1
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(20, 5, 1); // Much bigger scale
    
    return sprite;
  };

  // Handle ESC key to close fullscreen and sync slider when opening
  useEffect(() => {
    const handleCloseFullscreen = () => {
      setIsFullscreen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    // Sync slider with current time when opening fullscreen
    if (isFullscreen) {
      setSliderTimeOffset(timeOffset);
    }

    document.addEventListener('solar-system-close-fullscreen', handleCloseFullscreen);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('solar-system-close-fullscreen', handleCloseFullscreen);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen, timeOffset]);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const containerWidth = container.clientWidth;
    const isMobile = containerWidth < 640;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45, // FOV
      containerWidth / (isMobile ? 120 : 140), // Aspect ratio
      0.1, // Near
      10000 // Far - need bigger for large orbits
    );
    camera.position.set(0, 80, 120); // Higher and further back
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerWidth, isMobile ? 120 : 140);
    renderer.setClearColor(0x000011, 1);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Planet type colors (exact copy from Python code)
    const planetColors: { [key: string]: string } = {
      "Gas Giant": "#FFA500",
      "Anomaly": "#FFFFFF", 
      "Rocky": "#808080",
      "Icy": "#ADD8E6",
      "Oceanic": "#0000FF",
      "Desert": "#FFD700",
      "Lava": "#FF0000",
      "Arid": "#800000",
      "Swamp": "#008000",
      "Tundra": "#F0F8FF",
      "Forest": "#006400",
      "Savannah": "#F4A460",
      "Cave": "#D1D1D1",
      "Crystalline": "#00FFFF",
      "Metallic": "#C0C0C0",
      "Toxic": "#800080",
      "Radioactive": "#00FF00",
      "Magma": "#FF4500",
      "Molten Core": "#FF8C00",
      "Carbon": "#090909",
      "Diamond": "#87CEFA",
      "Super Earth": "#90EE90",
      "Sub Earth": "#006400",
      "Frozen Gas Giant": "#ADD8E6",
      "Nebulous": "#FFC0CB",
      "Aquifer": "#00FFFF",
      "Exotic": "#FF00FF"
    };

    // Star colors (exact copy from Python code)
    const starColors: { [key: string]: string } = {
      "red": "#FF4444",
      "orange": "#FF8844", 
      "yellow": "#FFFF44",
      "white": "#FFFFFF",
      "blue": "#4488FF",
      "purple": "#8844FF"
    };

    // Add stars at center
    const starGroup = new THREE.Group();
    stars.forEach((star, index) => {
      const starRadius = parseFloat(star.Size) * 3; // Bigger stars for visibility
      const starGeometry = new THREE.SphereGeometry(starRadius, 16, 16);
      const starColor = starColors[star.Color] || "#FFFF44";
      const starMaterial = new THREE.MeshBasicMaterial({ 
        color: starColor,
        transparent: true,
        opacity: 0.9
      });
      
      const starMesh = new THREE.Mesh(starGeometry, starMaterial);
      
      // Position multiple stars in binary/tertiary systems
      if (stars.length === 1) {
        starMesh.position.set(0, 0, 0);
      } else if (stars.length === 2) {
        starMesh.position.set(index === 0 ? -starRadius * 2 : starRadius * 2, 0, 0);
      } else {
        // Tertiary system
        if (index === 0) starMesh.position.set(-starRadius * 2, 0, 0);
        else if (index === 1) starMesh.position.set(starRadius * 2, 0, 0);
        else starMesh.position.set(0, starRadius * 2, 0);
      }
      
      // Add glow effect
      const glowGeometry = new THREE.SphereGeometry(starRadius * 1.5, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: starColor,
        transparent: true,
        opacity: 0.3
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      starMesh.add(glow);
      
      starGroup.add(starMesh);
    });
    scene.add(starGroup);

    // Find max orbital radius for scaling
    const maxOrbitalRadius = Math.max(...planets.map(p => p.orbital_radius));
    const scaleFactor = 80; // Fixed scale factor

    // Create orbital paths and planets
    planets.forEach((planet, index) => {
      // Calculate orbital radius exactly like Python
      const relativeOrbitRadius = planet.orbital_radius / maxOrbitalRadius;
      const orbitRadius = 20 + (relativeOrbitRadius * scaleFactor); // min_orbit_radius + scaled
      
      // Debug: Uncomment for troubleshooting
      // console.log(`Planet ${index}: ${planet.name}, angle: ${planet.initial_orbital_angle}, time: ${currentTime}`);
      
      const eccentricity = planet.eccentricity_factor;
      
      // Calculate ellipse parameters exactly like Python
      const semiMajorAxis = orbitRadius;
      const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity);
      
      // Create dashed orbital path exactly like Python code
      const numSegments = 360;
      const dashLength = 2;  // Python: dash_length = 2
      const gapLength = 4;   // Python: gap_length = 4
      
      for (let k = 0; k < numSegments; k += dashLength + gapLength) {
        const dashPoints = [];
        for (let j = k; j < Math.min(k + dashLength, numSegments - 1); j++) {
          // Python: angle_start = (j / num_segments) * 2 * math.pi
          const angle = (j / numSegments) * 2 * Math.PI;
          
          // Python: x_start = center_x + semi_major_axis * math.cos(angle_start)
          // Python: y_start = center_y + semi_minor_axis * math.sin(angle_start)
          const x = semiMajorAxis * Math.cos(angle);
          const z = semiMinorAxis * Math.sin(angle);
          dashPoints.push(new THREE.Vector3(x, 0, z));
        }
        
        if (dashPoints.length > 1) {
          const dashGeometry = new THREE.BufferGeometry().setFromPoints(dashPoints);
          const dashMaterial = new THREE.LineBasicMaterial({
            color: 0x708090, // Python: "slategray"
            transparent: true,
            opacity: 0.8,
            linewidth: 2 // Thicker lines
          });
          const dashLine = new THREE.Line(dashGeometry, dashMaterial);
          scene.add(dashLine);
          orbitsRef.current.push(dashLine);
        }
      }

      // Create planet - with size limits
      const basePlanetRadius = planet.diameter / 15000;
      const planetRadius = Math.max(Math.min(basePlanetRadius, 4.0), 1.5); // Min 1.5, Max 4.0
      const planetGeometry = new THREE.SphereGeometry(planetRadius, 16, 16);
      const planetColor = planetColors[planet.planet_type] || "#FFFFFF"; // Python fallback: "white"
      const planetMaterial = new THREE.MeshBasicMaterial({ 
        color: planetColor,
        transparent: true,
        opacity: 0.9
      });
      
      const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
      
      // Add glow effect to planet
      const planetGlow = new THREE.Mesh(
        new THREE.SphereGeometry(planetRadius * 1.5, 16, 16),
        new THREE.MeshBasicMaterial({
          color: planetColor,
          transparent: true,
          opacity: 0.2
        })
      );
      planetMesh.add(planetGlow);
      
      scene.add(planetMesh);
      planetsRef.current.push(planetMesh);

      // Store planet data on mesh for animation
      (planetMesh as any).planetData = planet;
      (planetMesh as any).orbitRadius = orbitRadius;
      (planetMesh as any).semiMajorAxis = semiMajorAxis;
      (planetMesh as any).semiMinorAxis = semiMinorAxis;

      // Create planet name label
      const planetName = planet.name.replace(/_/g, " ");
      const nameSprite = createTextSprite(planetName, '#ffffff');
      if (nameSprite) {
        // Position label above planet (higher up)
        nameSprite.position.copy(planetMesh.position);
        nameSprite.position.y += planetRadius + 6;
        
        // Store planet data on sprite for reference
        (nameSprite as any).planetData = planet;
        
        scene.add(nameSprite);
        planetLabelsRef.current.push(nameSprite);
      }
    });

    // Ambient lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    // Point light from star
    const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Mouse controls
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let autoRotate = false; // Start paused

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
      
      // Rotate around the solar system like in Universe3DViewer
      const spherical = new THREE.Spherical();
      spherical.setFromVector3(camera.position);
      
      spherical.theta -= deltaX * 0.01;
      spherical.phi += deltaY * 0.01;
      
      // Clamp phi to prevent flipping
      spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));
      
      camera.position.setFromSpherical(spherical);
      camera.lookAt(0, 0, 0);
      
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      setTimeout(() => {
        if (!isMouseDown) autoRotate = true;
      }, 3000);
    };

    // // Time control with scroll wheel
    // const handleWheel = (event: WheelEvent) => {
    //   event.preventDefault();
    //   if (event.deltaY > 0) {
    //     // Advance time by 1 day (86400 seconds = 24 hours)
    //     setCurrentTime(prev => prev + 86400);
    //   } else {
    //     // Go back 1 day
    //     setCurrentTime(prev => Math.max(0, prev - 86400));
    //   }
    // };

    // Combined wheel handler - zoom without ctrl, time with ctrl
    const handleKeyWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        // Time control with Ctrl+scroll - adjust offset
        event.preventDefault();
        if (event.deltaY > 0) {
          setTimeOffset(prev => prev + 604800); // +1 week (7 days)
        } else {
          setTimeOffset(prev => prev - 604800); // -1 week (7 days)
        }
      } else {
        // Zoom with normal scroll (like Universe3DViewer)
        event.preventDefault();
        const zoomSpeed = 0.1;
        const currentDistance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));
        
        if (event.deltaY > 0 && currentDistance < 500) {
          camera.position.multiplyScalar(1 + zoomSpeed);
        } else if (event.deltaY < 0 && currentDistance > 20) {
          camera.position.multiplyScalar(1 - zoomSpeed);
        }
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
    });
    canvas.addEventListener("wheel", handleKeyWheel);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // No auto rotation by default (paused)

      // Update planet positions based on current time (exact Python calculation)
      planetsRef.current.forEach((planetMesh, index) => {
        const planet = (planetMesh as any).planetData;
        const semiMajorAxis = (planetMesh as any).semiMajorAxis;
        const semiMinorAxis = (planetMesh as any).semiMinorAxis;
        
        // Calculate orbital angle exactly like Python using current time reference
        const orbitalPeriod = planet.orbital_period_seconds;
        const angleVelocityOrbit = (2 * Math.PI) / orbitalPeriod;
        
        // Python: angle_orbit = (initial_orbital_angle + time_elapsed * angle_velocity_orbit) % (2π)
        const angleOrbit = (planet.initial_orbital_angle + currentTimeRef.current * angleVelocityOrbit) % (2 * Math.PI);
        
        // Position planet exactly like Python
        // Python: planet_x = center_x + semi_major_axis * cos(angle_orbit)
        // Python: planet_y = center_y + semi_minor_axis * sin(angle_orbit)
        planetMesh.position.x = semiMajorAxis * Math.cos(angleOrbit);
        planetMesh.position.z = semiMinorAxis * Math.sin(angleOrbit);
        planetMesh.position.y = 0; // Keep on orbital plane
        
        // Planet rotation exactly like Python using current time reference
        const rotationPeriodSeconds = planet.rotation_period_seconds;
        const angleVelocityRotation = (2 * Math.PI) / rotationPeriodSeconds;
        planetMesh.rotation.y = (currentTimeRef.current * angleVelocityRotation) % (2 * Math.PI);

        // Update planet label position
        if (planetLabelsRef.current[index]) {
          const planetRadius = (planetMesh.geometry as THREE.SphereGeometry).parameters?.radius || 2;
          planetLabelsRef.current[index].position.copy(planetMesh.position);
          planetLabelsRef.current[index].position.y += planetRadius + 6;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = newWidth < 640 ? 120 : 140;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseUp);
      canvas.removeEventListener("wheel", handleKeyWheel);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      
      // Clean up refs
      planetsRef.current = [];
      orbitsRef.current = [];
      planetLabelsRef.current = [];
    };
  }, [planets, stars, cosmicOriginTime]); // Remove currentTime and timeOffset from dependencies

  const formatTime = (seconds: number) => {
    const years = Math.floor(seconds / (365.25 * 24 * 3600));
    const days = Math.floor((seconds % (365.25 * 24 * 3600)) / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    
    if (years > 0) return `${years}y ${days}d ${hours}h`;
    if (days > 0) return `${days}d ${hours}h`;
    return `${hours}h`;
  };

  const formatName = (name: string) => {
    return name.replace(/_/g, " ");
  };

  return (
    <>      
      <div className="flex flex-col items-center w-full">
        <div className="text-xs text-gray-300 mb-2">Solar System Simulation</div>
        
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
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-[10px]">Star(s)</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-[10px]">{planets.length} Planets</span>
              </div>
            </div>
            <div className="text-[10px] text-gray-500">
              Time: {formatTime(currentTime)}
            </div>
          </div>
          <div className="text-center text-[10px] text-gray-500">
            Scroll: Zoom • Ctrl+Scroll: +1week/-1week • Drag: Rotate View
          </div>
        </div>
      </div>

      {/* Fullscreen Modal - rendered outside container using portal */}
      {isFullscreen && createPortal(
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl">
          <div className="w-full h-full flex flex-col p-1 sm:p-2">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <h2 className="text-lg sm:text-xl font-bold text-white truncate">
                  {formatName(systemName)}
                </h2>
                <div className="hidden sm:flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Star(s)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">{planets.length} Planets</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Time: {formatTime(realCurrentTime - cosmicOriginTime + sliderTimeOffset)}
                  </div>
                </div>
                {/* Mobile info */}
                <div className="sm:hidden text-xs text-gray-400">
                  {planets.length}P • {formatTime(realCurrentTime - cosmicOriginTime + sliderTimeOffset)}
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

            {/* Time Slider */}
            <div className="mb-2 sm:mb-4 px-2 sm:px-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <span className="text-xs sm:text-sm text-gray-400 min-w-fit">-15y</span>
                <div className="flex-1 relative">
                  <input
                    type="range"
                    min={-15 * 365.25 * 24 * 3600} // -15 years in seconds
                    max={15 * 365.25 * 24 * 3600}  // +15 years in seconds
                    step={604800} // 1 week steps
                    value={sliderTimeOffset}
                    onChange={(e) => setSliderTimeOffset(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer 
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 
                               [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-400 
                               [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600
                               [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-yellow-400 rounded"></div>
                </div>
                <span className="text-xs sm:text-sm text-gray-400 min-w-fit">+15y</span>
                <button
                  onClick={() => setSliderTimeOffset(0)}
                  className="px-2 py-1 text-xs bg-gray-600 hover:bg-gray-500 text-white rounded transition-colors duration-200"
                  title="Reset to current time"
                >
                  Now
                </button>
              </div>
              <div className="text-center text-xs text-gray-500 mt-1">
                Time Travel: {sliderTimeOffset === 0 ? 'Present' : sliderTimeOffset > 0 ? `+${Math.abs(sliderTimeOffset / (365.25 * 24 * 3600)).toFixed(1)} years` : `-${Math.abs(sliderTimeOffset / (365.25 * 24 * 3600)).toFixed(1)} years`} • Range: 30 years
              </div>
            </div>

            {/* Modal Content - Full Size 3D Viewer */}
            <div className="flex-1 border border-white/20 rounded-lg bg-black/20 overflow-hidden min-h-0">
              <SolarSystem3DViewerFullscreen 
                planets={planets} 
                stars={stars} 
                systemName={systemName}
                cosmicOriginTime={cosmicOriginTime}
                currentTime={realCurrentTime - cosmicOriginTime + sliderTimeOffset}
                onTimeOffsetChange={(delta) => setSliderTimeOffset(prev => prev + delta)}
              />
            </div>

            {/* Modal Footer */}
            <div className="mt-2 sm:mt-4 text-center text-xs sm:text-sm text-gray-400">
              <div className="hidden sm:block">
                Scroll: Zoom • Ctrl+Scroll: +1week/-1week • Drag: Rotate View • ESC: Close
              </div>
              <div className="sm:hidden">
                Pinch: Zoom • Drag: Rotate • ESC: Close
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default SolarSystem3DViewer;