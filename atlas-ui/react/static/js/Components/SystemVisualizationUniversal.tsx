// atlas-ui/react/static/js/Components/SystemVisualizationUniversal.tsx
import React, { useEffect, useRef, useState } from "react";
import SolarSystem3DViewerLeft from "./SolarSystem3DViewerLeft.tsx";
import StargateButton from "./StargateButton";

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
    setImageLoaded(true);

    setTimeout(() => {
      setCanvasHidden(true);
    }, 800);
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
            <SolarSystem3DViewerLeft planets={system.planets} stars={system.stars} systemName={system.name} cosmicOriginTime={cosmicOriginTime || 0} systemUrl={systemUrl} />
          </div>
        )}
      </div>

      <div className="text-center mt-auto">
        <StargateButton href={systemUrl} />

        <div className="mt-2 text-xs text-gray-500 text-center">Gateway to the stars</div>
      </div>
    </div>
  );
};

export default SystemVisualizationUniversal;
