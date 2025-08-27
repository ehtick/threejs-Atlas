import React, { useState, useEffect } from "react";
import { markSystemAsVisited } from "../Utils/VisitHistory.ts";
import { SpaceshipTravelManager } from "../Utils/SpaceshipTravelCosts.ts";

interface System {
  name: string;
  index: number;
}

interface Galaxy {
  coordinates: number[];
}

interface SystemNavigationProps {
  currentSystem: System;
  galaxy: Galaxy;
}

const SystemNavigation: React.FC<SystemNavigationProps> = ({ currentSystem, galaxy }) => {
  const [hasPrev, setHasPrev] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [showCostPreview, setShowCostPreview] = useState<boolean>(false);
  const [previewType, setPreviewType] = useState<"prev" | "next" | null>(null);

  useEffect(() => {
    setHasPrev(currentSystem.index > 0);
    setHasNext(true);
    setLoading(false);
  }, [currentSystem.index]);

  const getTravelCostInfo = () => {
    return SpaceshipTravelManager.previewTravelCost("system", 1);
  };

  const handleMouseEnter = (direction: "prev" | "next") => {
    setPreviewType(direction);
    setShowCostPreview(true);
  };

  const handleMouseLeave = () => {
    setShowCostPreview(false);
    setPreviewType(null);
  };

  const handlePrevious = async () => {
    if (currentSystem.index > 0) {
      // Check if can afford travel
      const distance = 1; // Adjacent system
      if (!SpaceshipTravelManager.canAffordTravel("system", distance)) {
        SpaceshipTravelManager.executeTravel("system", distance); // Will show insufficient resources message
        return;
      }
      
      // Consume resources for travel
      if (!SpaceshipTravelManager.executeTravel("system", distance)) {
        return; // Travel failed
      }
      
      const coordinates = galaxy.coordinates.join(",");
      markSystemAsVisited(coordinates, currentSystem.index - 1);
      window.location.href = `/system/${currentSystem.index - 1}`;
    }
  };

  const handleNext = async () => {
    // Check if can afford travel
    const distance = 1; // Adjacent system
    if (!SpaceshipTravelManager.canAffordTravel("system", distance)) {
      SpaceshipTravelManager.executeTravel("system", distance); // Will show insufficient resources message
      return;
    }
    
    // Consume resources for travel
    if (!SpaceshipTravelManager.executeTravel("system", distance)) {
      return; // Travel failed
    }
    
    const coordinates = galaxy.coordinates.join(",");
    markSystemAsVisited(coordinates, currentSystem.index + 1);
    window.location.href = `/system/${currentSystem.index + 1}`;
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
            🚀 System Travel Cost
          </div>
          <div className="text-xs text-white">
            {getTravelCostInfo()}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {previewType === "prev" && `← System ${currentSystem.index - 1}`}
            {previewType === "next" && `System ${currentSystem.index + 1} →`}
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemNavigation;
