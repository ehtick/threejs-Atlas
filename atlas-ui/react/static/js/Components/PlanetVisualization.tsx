// atlas-ui/react/static/js/Components/PlanetVisualization.tsx
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ModularPlanetRenderer } from "../3DComponents/ModularPlanetRenderer";

interface Planet {
  name: string;
  planet_type: string;
  atmosphere: string;
  life_forms: string;
  mass: number;
  diameter: number;
  density: number;
  gravity: number;
  orbital_radius: number;
  orbital_period_seconds: number;
  orbital_speed: number;
  axial_tilt: number;
  rotation_period_seconds: number;
  surface_temperature: number;
  elements: string[];
}

interface PlanetVisualizationProps {
  planetUrl: string;
  planet?: Planet;
  cosmicOriginTime?: number;
  initialAngleRotation?: number;
}

const PlanetVisualization: React.FC<PlanetVisualizationProps> = ({ planetUrl, planet, cosmicOriginTime, initialAngleRotation }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const decelerateRef = useRef(false);
  const [stargateText, setStargateText] = useState("Aligning Stargate...");
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [canvasHidden, setCanvasHidden] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const handleCloseFullscreen = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsFullscreen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Array<{ x: number; y: number; z: number; o: number }> = [];
    const numStars = 800;
    let centerX: number, centerY: number;
    const maxCanvasSize = 800;
    let animationId: number;
    let speed = 0.5;

    function resizeCanvas() {
      const container = canvas?.parentElement;
      if (!container || !canvas) return;

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;

      canvas.width = Math.min(containerWidth, maxCanvasSize);
      canvas.height = Math.min(containerHeight, maxCanvasSize);

      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
    }

    function init() {
      resizeCanvas();
      stars = [];

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * (canvas?.width || 800),
          y: Math.random() * (canvas?.height || 800),
          z: Math.random() * (canvas?.width || 800),
          o: Math.random(),
        });
      }

      animate();
    }

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.z -= speed;

        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.o = Math.random();
        }

        const k = canvas.width / star.z;
        const x = (star.x - centerX) * k + centerX;
        const y = (star.y - centerY) * k + centerY;
        const r = 2 * k;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.o})`;
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
      });

      if (!decelerateRef.current && speed < 60) {
        speed += 1;
      }

      if (decelerateRef.current && speed > 2) {
        speed -= 2;
      }

      animationId = requestAnimationFrame(animate);
    }

    init();

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true);
      setCanvasHidden(true);
      decelerateRef.current = true;
    }, 800);
  }, []);

  useEffect(() => {
    const animationShown = sessionStorage.getItem("stargateAnimationShown");

    if (animationShown) {
      setStargateText("Stargate system aligned");
      return;
    }

    sessionStorage.setItem("stargateAnimationShown", "true");
    setIsAnimating(true);

    const getRandomString = (chars: string, length: number) => {
      return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    };

    const phases = [
      { chars: "01", duration: 40, iterations: 20 },
      { chars: "0123456789", duration: 25, iterations: 30 },
      { chars: "0123456789ABCDEF", duration: 20, iterations: 40 },
      { chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~", duration: 10, iterations: 100 },
    ];

    let currentPhase = 0;
    let currentIteration = 0;

    const animate = () => {
      if (currentPhase >= phases.length) {
        const finalMessage = "Stargate system aligned";
        let charIndex = 0;
        setStargateText("");

        const typeChar = () => {
          if (charIndex < finalMessage.length) {
            setStargateText(finalMessage.substring(0, charIndex + 1));
            charIndex++;
            setTimeout(typeChar, 30);
          } else {
            setIsAnimating(false);
          }
        };

        typeChar();
        return;
      }

      const phase = phases[currentPhase];
      setStargateText(getRandomString(phase.chars, 32));
      currentIteration++;

      if (currentIteration >= phase.iterations) {
        currentPhase++;
        currentIteration = 0;
      }

      setTimeout(animate, phase.duration);
    };

    animate();
  }, []);

  useEffect(() => {
    document.addEventListener("planet-close-fullscreen", handleCloseFullscreen);

    return () => {
      document.removeEventListener("planet-close-fullscreen", handleCloseFullscreen);
    };
  }, []);

  useEffect(() => {
    if (isEntering) {
      const timer = setTimeout(() => setIsEntering(false), 50);
      return () => clearTimeout(timer);
    }
  }, [isEntering]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-white">{planet?.name || "Planet"}</h3>
      </div>

      <div className="relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4">
        <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${canvasHidden ? "opacity-0" : "opacity-100"}`} style={{ filter: canvasHidden ? "blur(50px)" : "none" }} />

        {imageLoaded && planet && (
          <div className={`absolute inset-0 w-full h-full transition-all duration-500 ${imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-[25px]"}`}>
            <ModularPlanetRenderer
              planetName={planet.name}
              containerClassName="w-full h-full"
              autoRotate={true}
              enableControls={true}
              showDebugInfo={true}
              planetData={{
                name: planet.name,
                diameter: planet.diameter,
                density: planet.density,
                gravity: planet.gravity,
                mass: planet.mass,
                orbital_radius: planet.orbital_radius,
                rotation_period_seconds: planet.rotation_period_seconds,
                surface_temperature: planet.surface_temperature,
                axial_tilt: planet.axial_tilt,
                planet_type: planet.planet_type,
                atmosphere: planet.atmosphere,
                elements: planet.elements,
              }}
              cosmicOriginTime={cosmicOriginTime}
              initialAngleRotation={initialAngleRotation}
            />

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
        )}
      </div>

      <div className="text-center mt-auto">
        <a
          href={planetUrl}
          className={`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${isAnimating ? "animate-pulse" : ""}`}
          style={{
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <span className="relative z-10 font-mono flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z" clipRule="evenodd" />
            </svg>
            {stargateText}
          </span>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>

        <div className="mt-2 text-xs text-gray-500 text-center">Gateway to the stars</div>
      </div>

      {isFullscreen &&
        planet &&
        createPortal(
          <div className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-xl transition-all duration-300 ${isClosing ? "opacity-0 scale-95" : isEntering ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
            <div className={`w-full h-full flex flex-col p-1 sm:p-2 transition-all duration-300 delay-75 ${isClosing ? "opacity-0 translate-y-4" : isEntering ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <div className="block sm:hidden">
                  <h2 className="text-xs font-medium text-white">Planet View</h2>
                </div>
                <div className="hidden sm:block">
                  <div>
                    <h2 className="text-lg font-bold text-white">Planet Visualization</h2>
                    <div className="text-sm text-gray-400">
                      Name: {planet.name} • Type: {planet.planet_type}
                    </div>
                  </div>
                </div>

                <button onClick={handleCloseFullscreen} className="p-0.5 sm:p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded transition-colors duration-200 text-red-400 hover:text-red-300" title="Close">
                  <svg className="w-3 h-3 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 border border-white/20 rounded-lg bg-black/20 overflow-hidden min-h-0">
                {isFullscreen && (
                  <ModularPlanetRenderer
                    planetName={planet.name}
                    containerClassName="w-full h-full"
                    autoRotate={false}
                    enableControls={true}
                    showDebugInfo={false}
                    planetData={{
                      name: planet.name,
                      diameter: planet.diameter,
                      density: planet.density,
                      gravity: planet.gravity,
                      mass: planet.mass,
                      orbital_radius: planet.orbital_radius,
                      rotation_period_seconds: planet.rotation_period_seconds,
                      surface_temperature: planet.surface_temperature,
                      axial_tilt: planet.axial_tilt,
                      planet_type: planet.planet_type,
                      atmosphere: planet.atmosphere,
                      elements: planet.elements,
                    }}
                    cosmicOriginTime={cosmicOriginTime}
                    initialAngleRotation={initialAngleRotation}
                  />
                )}
              </div>

              <div className="mt-2 sm:mt-4 text-center text-xs sm:text-sm text-gray-400">
                <div className="hidden sm:block">Mouse: Rotate • Scroll: Zoom • ESC: Close</div>
                <div className="sm:hidden">Pinch: Zoom • Drag: Rotate • ESC: Close</div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default PlanetVisualization;
