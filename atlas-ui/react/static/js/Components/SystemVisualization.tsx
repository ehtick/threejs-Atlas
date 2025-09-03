// atlas-ui/react/static/js/Components/SystemVisualization.tsx
import React, { useEffect, useRef, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import StargateButton from "./StargateButton";

interface SystemVisualizationProps {
  systemUrl: string;
  imageUrl?: string;
}

const SystemVisualization: React.FC<SystemVisualizationProps> = ({ systemUrl, imageUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const decelerateRef = useRef(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [canvasHidden, setCanvasHidden] = useState(false);

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
    if (imageUrl) {
      const highResImg = new Image();

      highResImg.onload = () => {
        if (imageRef.current) {
          imageRef.current.src = imageUrl;
          setImageLoaded(true);
          setCanvasHidden(true);
          decelerateRef.current = true;
        }
      };

      highResImg.onerror = () => {
        setTimeout(() => {
          setImageLoaded(true);
          setCanvasHidden(true);
          decelerateRef.current = true;
        }, 800);
      };

      highResImg.src = imageUrl;
    } else {
      setTimeout(() => {
        setImageLoaded(true);
        setCanvasHidden(true);
        decelerateRef.current = true;
      }, 800);
    }
  }, [imageUrl]);


  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">System Visualization</h3>

      <div className="relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4">
        <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${canvasHidden ? "opacity-0" : "opacity-100"}`} style={{ filter: canvasHidden ? "blur(50px)" : "none" }} />

        <div className={`absolute inset-0 w-full h-full transition-all duration-500 ${imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-[25px]"}`}>
          {imageLoaded && imageUrl ? (
            <div className="w-full h-full flex items-center justify-center">
              <Zoom zoomMargin={20} classDialog="backdrop-blur-3xl">
                <img
                  ref={imageRef}
                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20"
                  src={imageUrl}
                  alt="System visualization"
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
            <img ref={imageRef} className="w-full h-full object-cover" src="/static/images/placeholder-min.jpg" alt="System visualization" />
          )}
        </div>
      </div>

      <div className="text-center mt-auto">
        <StargateButton
          href={systemUrl}
          className="inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
          style={{
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          }}
        />

        <div className="mt-2 text-xs text-gray-500 text-center">Gateway to the stars</div>
      </div>
    </div>
  );
};

export default SystemVisualization;
