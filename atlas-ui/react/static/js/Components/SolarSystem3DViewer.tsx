// atlas-ui/react/static/js/Components/SolarSystem3DViewer.tsx
import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";
import SolarSystem3DViewerFullscreen from "./SolarSystem3DViewerFullscreen.tsx";

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

const SolarSystem3DViewer: React.FC<SolarSystem3DViewerProps> = ({ planets, stars, systemName, cosmicOriginTime }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const planetsRef = useRef<THREE.Mesh[]>([]);
  const orbitsRef = useRef<THREE.Line[]>([]);
  const planetLabelsRef = useRef<THREE.Sprite[]>([]);
  const currentTimeRef = useRef<number>(0);

  const realCurrentTime = Math.floor(Date.now() / 1000);
  const [timeOffset, setTimeOffset] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [sliderTimeOffset, setSliderTimeOffset] = useState(0);

  const [systemData, setSystemData] = useState<any>(null);
  const [loadingAPI, setLoadingAPI] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);

  const currentTime = realCurrentTime - cosmicOriginTime + timeOffset;

  currentTimeRef.current = currentTime;

  useEffect(() => {
    const fetchSystemData = async () => {
      try {
        setLoadingAPI(true);
        setApiError(null);

        const response = await fetch("/api/system/rendering-data");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
          setSystemData(result.system_data);
        } else {
          throw new Error(result.error || "Failed to fetch system data");
        }
      } catch (error) {
        setApiError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoadingAPI(false);
      }
    };

    fetchSystemData();
  }, []);

  const handleCloseFullscreen = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsFullscreen(false);
      setIsClosing(false);
    }, 300);
  };

  const createTextSprite = (text: string, color: string = "#ffffff") => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return null;

    canvas.width = 512;
    canvas.height = 128;

    context.fillStyle = "rgba(0, 0, 0, 0.7)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = "#ffffff";
    context.lineWidth = 2;
    context.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);

    context.fillStyle = color;
    context.font = "bold 32px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, 256, 64);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      alphaTest: 0.1,
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(20, 5, 1);

    return sprite;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isFullscreen) {
        handleCloseFullscreen();
      }
    };

    if (isFullscreen) {
      setSliderTimeOffset(timeOffset);
    }

    document.addEventListener("solar-system-close-fullscreen", handleCloseFullscreen);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("solar-system-close-fullscreen", handleCloseFullscreen);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen, timeOffset]);

  useEffect(() => {
    if (isFullscreen && isEntering) {
      const timer = setTimeout(() => {
        setIsEntering(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isFullscreen, isEntering]);

  useEffect(() => {
    if (loadingAPI || !systemData) {
      return;
    }

    (window as any).tonnirLoggedInSystem = false;

    if (!mountRef.current) return;

    const container = mountRef.current;
    const containerWidth = container.clientWidth;
    const isMobile = containerWidth < 640;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, containerWidth / (isMobile ? 120 : 120), 0.1, 10000);
    camera.position.set(0, 80, 120);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerWidth, isMobile ? 120 : 120);
    renderer.setClearColor(0x000011, 1);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const planetColors: { [key: string]: string } = {
      "Gas Giant": "#FFA500",
      Anomaly: "#FFFFFF",
      Rocky: "#808080",
      Icy: "#ADD8E6",
      Oceanic: "#0000FF",
      Desert: "#FFD700",
      Lava: "#FF0000",
      Arid: "#800000",
      Swamp: "#008000",
      Tundra: "#F0F8FF",
      Forest: "#006400",
      Savannah: "#F4A460",
      Cave: "#D1D1D1",
      Crystalline: "#00FFFF",
      Metallic: "#C0C0C0",
      Toxic: "#800080",
      Radioactive: "#00FF00",
      Magma: "#FF4500",
      "Molten Core": "#FF8C00",
      Carbon: "#090909",
      Diamond: "#87CEFA",
      "Super Earth": "#90EE90",
      "Sub Earth": "#006400",
      "Frozen Gas Giant": "#ADD8E6",
      Nebulous: "#FFC0CB",
      Aquifer: "#00FFFF",
      Exotic: "#FF00FF",
    };

    const starColors: { [key: string]: string } = {
      red: "#FF4444",
      orange: "#FF8844",
      yellow: "#FFFF44",
      white: "#FFFFFF",
      blue: "#4488FF",
      purple: "#8844FF",
    };

    const starGroup = new THREE.Group();
    systemData.stars.forEach((star, index) => {
      const starRadius = parseFloat(star.Size) * 3;
      const starGeometry = new THREE.SphereGeometry(starRadius, 16, 16);
      const starColor = starColors[star.Color] || "#FFFF44";
      const starMaterial = new THREE.MeshBasicMaterial({
        color: starColor,
        transparent: true,
        opacity: 0.9,
      });

      const starMesh = new THREE.Mesh(starGeometry, starMaterial);

      if (systemData.stars.length === 1) {
        starMesh.position.set(0, 0, 0);
      } else if (systemData.stars.length === 2) {
        starMesh.position.set(index === 0 ? -starRadius * 2 : starRadius * 2, 0, 0);
      } else {
        if (index === 0) starMesh.position.set(-starRadius * 2, 0, 0);
        else if (index === 1) starMesh.position.set(starRadius * 2, 0, 0);
        else starMesh.position.set(0, starRadius * 2, 0);
      }

      const glowGeometry = new THREE.SphereGeometry(starRadius * 1.5, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: starColor,
        transparent: true,
        opacity: 0.3,
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      starMesh.add(glow);

      starGroup.add(starMesh);
    });
    scene.add(starGroup);

    const maxOrbitalRadius = systemData.timing.max_orbital_radius;
    const scaleFactor = 80;

    (window as any).systemMaxOrbitalRadius = maxOrbitalRadius;

    systemData.planets.forEach((planet, index) => {
      const relativeOrbitRadius = planet.orbital_radius / maxOrbitalRadius;
      const orbitRadius = 20 + relativeOrbitRadius * scaleFactor;

      const eccentricity = planet.eccentricity_factor;

      const semiMajorAxis = orbitRadius;
      const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity);

      const numSegments = 360;
      const dashLength = 2;
      const gapLength = 4;

      for (let k = 0; k < numSegments; k += dashLength + gapLength) {
        const dashPoints = [];
        for (let j = k; j < Math.min(k + dashLength, numSegments - 1); j++) {
          const angle = (j / numSegments) * 2 * Math.PI;

          const x = semiMajorAxis * Math.cos(angle);
          const z = semiMinorAxis * Math.sin(angle);
          dashPoints.push(new THREE.Vector3(x, 0, z));
        }

        if (dashPoints.length > 1) {
          const dashGeometry = new THREE.BufferGeometry().setFromPoints(dashPoints);
          const dashMaterial = new THREE.LineBasicMaterial({
            color: 0x708090,
            transparent: true,
            opacity: 0.8,
            linewidth: 2,
          });
          const dashLine = new THREE.Line(dashGeometry, dashMaterial);
          scene.add(dashLine);
          orbitsRef.current.push(dashLine);
        }
      }

      const basePlanetRadius = planet.diameter / 15000;
      const planetRadius = Math.max(Math.min(basePlanetRadius, 4.0), 1.5);
      const planetGeometry = new THREE.SphereGeometry(planetRadius, 16, 16);
      const planetColor = planetColors[planet.planet_type] || "#FFFFFF";
      const planetMaterial = new THREE.MeshBasicMaterial({
        color: planetColor,
        transparent: true,
        opacity: 0.9,
      });

      const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);

      const planetGlow = new THREE.Mesh(
        new THREE.SphereGeometry(planetRadius * 1.5, 16, 16),
        new THREE.MeshBasicMaterial({
          color: planetColor,
          transparent: true,
          opacity: 0.2,
        })
      );
      planetMesh.add(planetGlow);

      scene.add(planetMesh);
      planetsRef.current.push(planetMesh);

      (planetMesh as any).planetData = planet;
      (planetMesh as any).orbitRadius = orbitRadius;
      (planetMesh as any).semiMajorAxis = semiMajorAxis;
      (planetMesh as any).semiMinorAxis = semiMinorAxis;

      const planetName = planet.name.replace(/_/g, " ");
      const nameSprite = createTextSprite(planetName, "#ffffff");
      if (nameSprite) {
        nameSprite.position.copy(planetMesh.position);
        nameSprite.position.y += planetRadius + 6;

        (nameSprite as any).planetData = planet;

        scene.add(nameSprite);
        planetLabelsRef.current.push(nameSprite);
      }
    });

    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let autoRotate = false;

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

      const spherical = new THREE.Spherical();
      spherical.setFromVector3(camera.position);

      spherical.theta -= deltaX * 0.01;
      spherical.phi += deltaY * 0.01;

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

    const handleKeyWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
        if (event.deltaY > 0) {
          setTimeOffset((prev) => prev + 604800);
        } else {
          setTimeOffset((prev) => prev - 604800);
        }
      } else {
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

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      planetsRef.current.forEach((planetMesh, index) => {
        const planet = (planetMesh as any).planetData;
        const semiMajorAxis = (planetMesh as any).semiMajorAxis;
        const semiMinorAxis = (planetMesh as any).semiMinorAxis;

        const orbitalPeriod = planet.orbital_period_seconds;
        const angleVelocityOrbit = (2 * Math.PI) / orbitalPeriod;

        const angleOrbit = (planet.initial_orbital_angle + currentTimeRef.current * angleVelocityOrbit) % (2 * Math.PI);

        planetMesh.position.x = semiMajorAxis * Math.cos(angleOrbit);
        planetMesh.position.z = semiMinorAxis * Math.sin(angleOrbit);
        planetMesh.position.y = 0;

        const rotationPeriodSeconds = planet.rotation_period_seconds;
        const angleVelocityRotation = (2 * Math.PI) / rotationPeriodSeconds;
        planetMesh.rotation.y = (currentTimeRef.current * angleVelocityRotation) % (2 * Math.PI);

        if (planetLabelsRef.current[index]) {
          const planetRadius = (planetMesh.geometry as THREE.SphereGeometry).parameters?.radius || 2;
          planetLabelsRef.current[index].position.copy(planetMesh.position);
          planetLabelsRef.current[index].position.y += planetRadius + 6;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = newWidth < 640 ? 120 : 120;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

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

      planetsRef.current = [];
      orbitsRef.current = [];
      planetLabelsRef.current = [];
    };
  }, [planets, stars, cosmicOriginTime, systemData]);

  const formatTime = (seconds: number) => {
    if (seconds <= 0) return "Cosmic Origin Time";

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
        <div className="text-xs text-gray-300 mb-2">Solar System Perspective</div>

        <div className="relative w-full">
          <div ref={mountRef} className="w-full border border-white/20 rounded bg-black/20" style={{ height: "auto" }} />

          {!loadingAPI && !apiError && systemName && (
            <div className="absolute bottom-0 left-0 p-2 text-white bg-black bg-opacity-50 max-w-xs rounded-tr-lg">
              <h3 className="text-xs font-bold">{systemName}</h3>
            </div>
          )}

          <button
            onClick={() => {
              setIsFullscreen(true);
              setIsEntering(true);
            }}
            className="absolute top-2 right-2 p-2 bg-black/60 hover:bg-black/80 border border-white/30 rounded-lg transition-all duration-200 backdrop-blur-sm shadow-lg z-10"
            title="Expand to fullscreen"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
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
                <span className="text-[10px]">{systemData?.planets?.length || planets.length} Planets</span>
              </div>
            </div>
            <div className="text-[10px] text-gray-500">Time: {formatTime(currentTime)}</div>
          </div>
          <div className="text-center text-[10px] text-gray-500">Scroll: Zoom • Ctrl+Scroll: +1week/-1week • Drag: Rotate View</div>
        </div>
      </div>

      {isFullscreen &&
        createPortal(
          <div className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-xl transition-all duration-300 ${isClosing ? "opacity-0 scale-95" : isEntering ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
            <div className={`w-full h-full flex flex-col p-1 sm:p-2 transition-all duration-300 delay-75 ${isClosing ? "opacity-0 translate-y-4" : isEntering ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <div className="block sm:hidden">
                  <h2 className="text-xs font-medium text-white">{formatName(systemName)}</h2>
                </div>

                <div className="hidden sm:flex items-center gap-4 flex-1">
                  <h2 className="text-xl font-bold text-white">{formatName(systemName)}</h2>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">Star(s)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{systemData?.planets?.length || planets.length} Planets</span>
                    </div>
                    <div className="text-sm text-gray-400">Time: {formatTime(realCurrentTime - cosmicOriginTime + sliderTimeOffset)}</div>
                  </div>
                </div>

                <button onClick={handleCloseFullscreen} className="p-0.5 sm:p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded transition-colors duration-200 text-red-400 hover:text-red-300" title="Close">
                  <svg className="w-3 h-3 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-2 sm:mb-4 px-2 sm:px-4">
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="text-xs sm:text-sm text-gray-400 min-w-fit">-100y</span>
                  <div className="flex-1 relative">
                    <input
                      type="range"
                      min={-100 * 365.25 * 24 * 3600}
                      max={100 * 365.25 * 24 * 3600}
                      step={604800}
                      value={sliderTimeOffset}
                      onChange={(e) => {
                        const newValue = Number(e.target.value);
                        const maxPastTime = -(realCurrentTime - cosmicOriginTime);
                        setSliderTimeOffset(Math.max(newValue, maxPastTime));
                      }}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                               [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                               [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-400
                               [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-600
                               [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                    />
                    <div
                      className="absolute top-0 transform -translate-x-1/2 w-0.5 h-2 bg-yellow-400 rounded"
                      style={{
                        left: `${((0 - -100 * 365.25 * 24 * 3600) / (100 * 365.25 * 24 * 3600 - -100 * 365.25 * 24 * 3600)) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 min-w-fit">+100y</span>
                  <button onClick={() => setSliderTimeOffset(0)} className="px-2 py-1 text-xs bg-gray-600 hover:bg-gray-500 text-white rounded transition-colors duration-200" title="Reset to current time">
                    Now
                  </button>
                </div>
                <div className="text-center text-xs text-gray-500 mt-1">Time Travel: {sliderTimeOffset === 0 ? "Present" : sliderTimeOffset > 0 ? `+${Math.abs(sliderTimeOffset / (365.25 * 24 * 3600)).toFixed(1)} years` : `-${Math.abs(sliderTimeOffset / (365.25 * 24 * 3600)).toFixed(1)} years`} • Range: 200 years</div>
              </div>

              <div className="flex-1 border border-white/20 rounded-lg bg-black/20 overflow-hidden min-h-0">
                <SolarSystem3DViewerFullscreen planets={systemData?.planets || planets} stars={systemData?.stars || stars} systemName={systemName} cosmicOriginTime={cosmicOriginTime} currentTime={realCurrentTime - cosmicOriginTime + sliderTimeOffset} onTimeOffsetChange={(delta) => setSliderTimeOffset((prev) => prev + delta)} />
              </div>

              <div className="mt-2 sm:mt-4 text-center text-xs sm:text-sm text-gray-400">
                <div className="hidden sm:block">Scroll: Zoom • Ctrl+Scroll: +1week/-1week • Drag: Rotate View • ESC: Close</div>
                <div className="sm:hidden">Pinch: Zoom • Drag: Rotate • ESC: Close</div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default SolarSystem3DViewer;
