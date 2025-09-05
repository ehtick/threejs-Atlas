import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import AreciboMessage from "./AreciboMessage.tsx";

interface AreciboModalProps {
  isOpen: boolean;
  onClose: () => void;
  lifeForm: string;
  planetName: string;
}

const AreciboModal: React.FC<AreciboModalProps> = ({ isOpen, onClose, lifeForm, planetName }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShouldRender(false);
      onClose();
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsAnalyzing(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
      
      // Simulate analysis time
      const analysisTimer = setTimeout(() => {
        setIsAnalyzing(false);
      }, 800);
      
      return () => clearTimeout(analysisTimer);
    }
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent background scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 300ms ease-in-out",
      }}
      onClick={handleClose}
    >
      {/* Modal Content */}
      <div
        className="bg-gray-900/95 border border-green-500/50 rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.95)",
          transition: "opacity 300ms ease-in-out, transform 300ms ease-in-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-green-500/30">
          <div className="flex-1">
            {isAnalyzing ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                <h2 className="text-lg font-bold text-green-400 animate-pulse">
                  Analyzing Life Form...
                </h2>
              </div>
            ) : (
              <h2 className="text-lg font-bold text-green-400">
                🔬 Atlas Life Form Analysis
              </h2>
            )}
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700/50 flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isAnalyzing && (
            <>
              <div className="flex justify-center mb-6">
                <AreciboMessage 
                  lifeForm={lifeForm}
                  planetName={planetName}
                  scale={3}
                  className=""
                  showControls={false}
                  showInfo={false}
                />
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-2">
                  Trying to understand the Life Form analyzed?
                </p>
                <a 
                  href="https://en.wikipedia.org/wiki/Arecibo_message" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 underline text-sm transition-colors"
                >
                  Click here
                </a>
              </div>
            </>
          )}
          
          {isAnalyzing && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-8 h-8 border-3 border-green-400 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-green-400 text-sm animate-pulse">
                Scanning biological patterns...
              </p>
            </div>
          )}
        </div>

        {!isAnalyzing && (
          <div className="flex justify-end p-4 border-t border-green-500/30">
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 text-green-400 rounded transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default AreciboModal;