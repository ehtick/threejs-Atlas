// atlas-ui/react/static/js/Components/SystemVisualizationUniversal.tsx
import React, { useEffect, useRef, useState } from "react";
import SolarSystem3DViewerLeft from "./SolarSystem3DViewerLeft.tsx";

interface System {
  name: string;
  index: number;
  star_system_type: string;
  num_planets: number;
  stars: Array<{
    Type: string;
    Size: string;
    Color: string;
  }>;
  planets: Array<{
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
  }>;
}

interface SystemVisualizationUniversalProps {
  systemUrl: string;
  system?: System;
  cosmicOriginTime?: number;
}

const SystemVisualizationUniversal: React.FC<SystemVisualizationUniversalProps> = ({ systemUrl, system, cosmicOriginTime }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stargateText, setStargateText] = useState("Aligning Stargate...");
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [canvasHidden, setCanvasHidden] = useState(false);

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
    // Start loading 3D scene immediately
    setImageLoaded(true);

    // Hide canvas after animation
    setTimeout(() => {
      setCanvasHidden(true);
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

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-white">{system?.name || "System"}</h3>
      </div>

      <div className="relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4">
        <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${canvasHidden ? "opacity-0" : "opacity-100"}`} style={{ filter: canvasHidden ? "blur(50px)" : "none" }} />

        {imageLoaded && system && (
          <div className={`absolute inset-0 w-full h-full transition-all duration-500 ${imageLoaded && canvasHidden ? "opacity-100 blur-0" : "opacity-0 blur-[25px]"}`}>
            <SolarSystem3DViewerLeft planets={system.planets} stars={system.stars} systemName={system.name} cosmicOriginTime={cosmicOriginTime || 0} />
          </div>
        )}
      </div>

      <div className="text-center mt-auto">
        <a
          href={systemUrl}
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
    </div>
  );
};

export default SystemVisualizationUniversal;
