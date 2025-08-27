import React, { useState, useEffect } from "react";
import { SpaceshipTravelManager } from "../Utils/SpaceshipTravelCosts";

interface Galaxy {
  name: string;
  coordinates: number[];
}

interface GalaxyNavigationProps {
  currentGalaxy: Galaxy;
}

const GalaxyNavigation: React.FC<GalaxyNavigationProps> = ({ currentGalaxy }) => {
  const [hasPrev, setHasPrev] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [showCostPreview, setShowCostPreview] = useState<boolean>(false);
  const [previewType, setPreviewType] = useState<"prev" | "next" | null>(null);

  const MAX_COORDINATE = 10000000;

  useEffect(() => {
    const [x, y, z] = currentGalaxy.coordinates;

    const canGoPrev = !(x === 0 && y === 0 && z === 0);

    const canGoNext = !(x === MAX_COORDINATE && y === MAX_COORDINATE && z === MAX_COORDINATE);

    setHasPrev(canGoPrev);
    setHasNext(canGoNext);
    setLoading(false);
  }, [currentGalaxy.coordinates]);

  const getTravelCostInfo = () => {
    return SpaceshipTravelManager.previewTravelCost("galaxy", 1);
  };

  const handleMouseEnter = (direction: "prev" | "next") => {
    setPreviewType(direction);
    setShowCostPreview(true);
  };

  const handleMouseLeave = () => {
    setShowCostPreview(false);
    setPreviewType(null);
  };

  const formatCoordinates = (coords: number[]) => {
    return `(${coords.join(", ")})`;
  };

  const getPreviousCoordinates = (): number[] => {
    const [x, y, z] = currentGalaxy.coordinates;

    if (z > 0) {
      return [x, y, z - 1];
    } else if (y > 0) {
      return [x, y - 1, MAX_COORDINATE];
    } else if (x > 0) {
      return [x - 1, MAX_COORDINATE, MAX_COORDINATE];
    }

    return [0, 0, 0];
  };

  const getNextCoordinates = (): number[] => {
    const [x, y, z] = currentGalaxy.coordinates;

    if (z < MAX_COORDINATE) {
      return [x, y, z + 1];
    } else if (y < MAX_COORDINATE) {
      return [x, y + 1, 0];
    } else if (x < MAX_COORDINATE) {
      return [x + 1, 0, 0];
    }

    return [MAX_COORDINATE, MAX_COORDINATE, MAX_COORDINATE];
  };

  const handlePrevious = () => {
    if (hasPrev) {
      // Check if can afford travel
      const distance = 1; // Adjacent galaxy
      if (!SpaceshipTravelManager.canAffordTravel("galaxy", distance)) {
        SpaceshipTravelManager.executeTravel("galaxy", distance); // Will show insufficient resources message
        return;
      }
      
      // Consume resources for travel
      if (!SpaceshipTravelManager.executeTravel("galaxy", distance)) {
        return; // Travel failed
      }
      
      const [x, y, z] = getPreviousCoordinates();
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "/navigate";

      const xInput = document.createElement("input");
      xInput.type = "hidden";
      xInput.name = "x";
      xInput.value = x.toString();

      const yInput = document.createElement("input");
      yInput.type = "hidden";
      yInput.name = "y";
      yInput.value = y.toString();

      const zInput = document.createElement("input");
      zInput.type = "hidden";
      zInput.name = "z";
      zInput.value = z.toString();

      form.appendChild(xInput);
      form.appendChild(yInput);
      form.appendChild(zInput);
      document.body.appendChild(form);
      form.submit();
    }
  };

  const handleNext = () => {
    if (hasNext) {
      // Check if can afford travel
      const distance = 1; // Adjacent galaxy
      if (!SpaceshipTravelManager.canAffordTravel("galaxy", distance)) {
        SpaceshipTravelManager.executeTravel("galaxy", distance); // Will show insufficient resources message
        return;
      }
      
      // Consume resources for travel
      if (!SpaceshipTravelManager.executeTravel("galaxy", distance)) {
        return; // Travel failed
      }
      
      const [x, y, z] = getNextCoordinates();
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "/navigate";

      const xInput = document.createElement("input");
      xInput.type = "hidden";
      xInput.name = "x";
      xInput.value = x.toString();

      const yInput = document.createElement("input");
      yInput.type = "hidden";
      yInput.name = "y";
      yInput.value = y.toString();

      const zInput = document.createElement("input");
      zInput.type = "hidden";
      zInput.name = "z";
      zInput.value = z.toString();

      form.appendChild(xInput);
      form.appendChild(yInput);
      form.appendChild(zInput);
      document.body.appendChild(form);
      form.submit();
    }
  };

  if (loading) {
    return null;
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={handlePrevious} 
          onMouseEnter={() => handleMouseEnter("prev")}
          onMouseLeave={handleMouseLeave}
          disabled={!hasPrev} 
          className={`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${hasPrev ? "bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300" : "bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={handleNext} 
          onMouseEnter={() => handleMouseEnter("next")}
          onMouseLeave={handleMouseLeave}
          disabled={!hasNext} 
          className={`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${hasNext ? "bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300" : "bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Travel Cost Preview */}
      {showCostPreview && previewType && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-black/90 backdrop-blur-xl rounded-lg border border-blue-400/30 p-3 shadow-2xl min-w-max">
          <div className="text-xs text-blue-300 font-semibold mb-1">
            🚀 Galaxy Travel Cost
          </div>
          <div className="text-xs text-white">
            {getTravelCostInfo()}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {previewType === "prev" && `← Galaxy ${formatCoordinates(getPreviousCoordinates())}`}
            {previewType === "next" && `Galaxy ${formatCoordinates(getNextCoordinates())} →`}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalaxyNavigation;
