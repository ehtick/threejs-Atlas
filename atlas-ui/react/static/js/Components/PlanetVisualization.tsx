import React, { useEffect, useRef, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { HybridPlanet3DRenderer } from "../3DComponents/HybridPlanet3DRenderer";

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
  imageUrl?: string;
  planet?: Planet;
  cosmicOriginTime?: number;
  initialAngleRotation?: number;
}

const PlanetVisualization: React.FC<PlanetVisualizationProps> = ({ planetUrl, imageUrl, planet, cosmicOriginTime, initialAngleRotation }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [stargateText, setStargateText] = useState("Aligning Stargate...");
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [canvasHidden, setCanvasHidden] = useState(false);
  const [view3D, setView3D] = useState(true); // 3D por defecto
  const [enable3D, setEnable3D] = useState(true);
  const [renderingData, setRenderingData] = useState<any>(null);
  const [renderingError, setRenderingError] = useState<string | null>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      [data-rmiz-modal-overlay="visible"] {
        background-color: rgba(0, 0, 0, 0.8) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        transition: backdrop-filter 0.3s ease-in-out !important;
      }
      
      [data-rmiz-modal-img] {
        border-radius: 1rem !important;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8) !important;
      }
      
      [data-rmiz-modal-overlay="hidden"] {
        backdrop-filter: blur(0px) !important;
        -webkit-backdrop-filter: blur(0px) !important;
        transition: backdrop-filter 0.3s ease-in-out !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
    let decelerate = false;

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

      if (!decelerate && speed < 60) {
        speed += 1;
      }

      if (decelerate && speed > 2) {
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
    if (imageUrl && !view3D) {
      const highResImg = new Image();

      highResImg.onload = () => {
        if (imageRef.current) {
          imageRef.current.src = imageUrl;
          setImageLoaded(true);
          setCanvasHidden(true);
        }
      };

      highResImg.onerror = () => {
        console.error("Failed to load planet image:", imageUrl);
        setTimeout(() => {
          setImageLoaded(true);
          setCanvasHidden(true);
        }, 1500);
      };

      highResImg.src = imageUrl;
    } else if (view3D || !imageUrl) {
      setTimeout(() => {
        setImageLoaded(true);
        setCanvasHidden(true);
      }, 1500);
    }
  }, [imageUrl, view3D]);

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

  const toggleView = () => {
    setView3D(!view3D);
    if (!view3D) {
      setImageLoaded(true);
      setCanvasHidden(true);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg sm:text-xl font-bold text-white">Planet Visualization</h3>
        
        {enable3D && planet && (
          <div className="flex items-center gap-2">
            <button
              onClick={toggleView}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                view3D 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
              }`}
            >
              {view3D ? '2D View' : '3D View'}
            </button>
          </div>
        )}
      </div>

      <div className="relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4">
        {/* Starfield animation canvas */}
        <canvas 
          ref={canvasRef} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${
            canvasHidden ? "opacity-0" : "opacity-100"
          }`} 
          style={{ filter: canvasHidden ? "blur(50px)" : "none" }} 
        />

        {/* 3D View - Hybrid Planet 3D Renderer */}
        {view3D && imageLoaded && planet && (
          <div className={`absolute inset-0 w-full h-full transition-all duration-500 ${
            imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-[25px]"
          }`}>
            <HybridPlanet3DRenderer
              planetName={planet.name}
              containerClassName="w-full h-full"
              autoRotate={true}
              enableControls={true}
              showDebugInfo={false}
              planetData={{
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
                elements: planet.elements
              }}
              cosmicOriginTime={cosmicOriginTime}
              initialAngleRotation={initialAngleRotation}
              onDataLoaded={(data) => {
                setRenderingData(data);
              }}
              onError={(errorMessage) => {
                setRenderingError(errorMessage);
                console.error('❌ Hybrid Planet rendering error:', errorMessage);
              }}
            />
          </div>
        )}

        {/* 2D View */}
        {!view3D && (
          <div className={`absolute inset-0 w-full h-full transition-all duration-500 ${
            imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-[25px]"
          }`}>
            {imageLoaded && imageUrl ? (
              <div className="w-full h-full flex items-center justify-center">
                <Zoom zoomMargin={20} classDialog="backdrop-blur-3xl">
                  <img
                    ref={imageRef}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20"
                    src={imageUrl}
                    alt="Planet visualization"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      backgroundColor: "transparent",
                    }}
                  />
                </Zoom>
              </div>
            ) : (
              <img ref={imageRef} className="w-full h-full object-cover" src="/static/images/placeholder-min.jpg" alt="Planet visualization" />
            )}
          </div>
        )}
        
        {/* View indicator */}
        {enable3D && planet && (
          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
            {view3D ? '🌍 3D' : '🖼️ 2D'}
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

        <div className="mt-2 text-xs text-gray-500 text-center">
          Gateway to the stars
          {view3D && renderingData && (
            <div className="ml-2 text-blue-400 mt-1">
              • {renderingData.planet_info?.type} Planet
              {renderingData.atmosphere && <span className="text-purple-400"> • Atmosphere</span>}
              {renderingData.rings?.has_rings && <span className="text-yellow-400"> • Rings</span>}
            </div>
          )}
          {view3D && renderingError && (
            <div className="ml-2 text-red-400 mt-1">• Rendering Error</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanetVisualization;
