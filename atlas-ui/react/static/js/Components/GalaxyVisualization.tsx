// atlas-ui/react/static/js/Components/GalaxyVisualization.tsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Galaxy3DViewer from "./Galaxy3DViewer.tsx";
import Galaxy3DViewerFullscreen from "./Galaxy3DViewerFullscreen.tsx";

interface GalaxyVisualizationProps {
  galaxyUrl: string;
  galaxyType?: string;
  numSystems?: number;
  blackHoles?: number;
  pulsars?: number;
  quasars?: number;
  galaxyName?: string;
}

const GalaxyVisualization: React.FC<GalaxyVisualizationProps> = ({ galaxyUrl, galaxyType = "Spiral", numSystems = 10000, blackHoles = 5, pulsars = 10, quasars = 3, galaxyName }) => {
  const [stargateText, setStargateText] = useState("Aligning Stargate...");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

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
      { chars: "0123456789", duration: 25, iterations: 35 },
      { chars: "0123456789ABCDEF", duration: 20, iterations: 50 },
      { chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~", duration: 15, iterations: 100 },
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

  const handleCloseFullscreen = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsFullscreen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    document.addEventListener("galaxy-close-fullscreen", handleCloseFullscreen);

    return () => {
      document.removeEventListener("galaxy-close-fullscreen", handleCloseFullscreen);
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
        <h3 className="text-lg sm:text-xl font-bold text-white">Galaxy Visualization</h3>
      </div>

      <div className="relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4">
        <Galaxy3DViewer 
          galaxyType={galaxyType} 
          numSystems={numSystems} 
          blackHoles={blackHoles} 
          pulsars={pulsars} 
          quasars={quasars} 
          galaxyName={galaxyName}
          onExpandClick={() => {
            setIsFullscreen(true);
            setIsEntering(true);
          }}
        />
      </div>

      <div className="text-center mt-auto">
        <a
          href={galaxyUrl}
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
        createPortal(
          <div className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-xl transition-all duration-300 ${isClosing ? "opacity-0 scale-95" : isEntering ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
            <div className={`w-full h-full flex flex-col p-1 sm:p-2 transition-all duration-300 delay-75 ${isClosing ? "opacity-0 translate-y-4" : isEntering ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
              <div className="flex items-center justify-between mb-2 sm:mb-4">
                <div className="block sm:hidden">
                  <h2 className="text-xs font-medium text-white">Galaxy View</h2>
                </div>
                <div className="hidden sm:block">
                  <div>
                    <h2 className="text-lg font-bold text-white">Galaxy Visualization</h2>
                    <div className="text-sm text-gray-400">Type: {galaxyType} • Systems: {numSystems.toLocaleString()}</div>
                  </div>
                </div>

                <button 
                  onClick={handleCloseFullscreen} 
                  className="p-0.5 sm:p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded transition-colors duration-200 text-red-400 hover:text-red-300" 
                  title="Close"
                >
                  <svg className="w-3 h-3 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 border border-white/20 rounded-lg bg-black/20 overflow-hidden min-h-0">
                <Galaxy3DViewerFullscreen 
                  galaxyType={galaxyType} 
                  numSystems={numSystems} 
                  blackHoles={blackHoles} 
                  pulsars={pulsars} 
                  quasars={quasars} 
                  galaxyName={galaxyName}
                />
              </div>

              <div className="mt-2 sm:mt-4 text-center text-xs sm:text-sm text-gray-400">
                <div className="hidden sm:block">Scroll: Zoom • Drag: Rotate View • ESC: Close</div>
                <div className="sm:hidden">Pinch: Zoom • Drag: Rotate • ESC: Close</div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default GalaxyVisualization;
