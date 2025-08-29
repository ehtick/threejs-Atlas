import React, { useState, useEffect } from "react";
import { SpaceshipResourceManager } from "../Utils/SpaceshipResources";
import { ResourceEventManager } from "../Utils/ResourceEventManager";

const FuelBars: React.FC = () => {
  const [resources, setResources] = useState({ antimatter: 0, element115: 0, deuterium: 0 });
  const [maxStorage, setMaxStorage] = useState(500);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateResources = () => {
      setResources(SpaceshipResourceManager.getResources());
      setMaxStorage(SpaceshipResourceManager.getUpgrade().storage);
    };

    updateResources();
    
    // Update every 5 seconds as fallback
    const interval = setInterval(updateResources, 5000);
    
    // Subscribe to resource update events for immediate updates
    const unsubscribe = ResourceEventManager.subscribe('resources_updated', updateResources);
    
    return () => {
      clearInterval(interval);
      unsubscribe();
    };
  }, []);

  const formatResource = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value.toString();
  };

  const getPercentage = (value: number) => {
    return (value / maxStorage) * 100;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div 
        className={`flex w-full transition-all duration-300 ease-out backdrop-blur-md cursor-pointer ${isExpanded ? 'h-14 saturate-200' : 'h-1'} group`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Antimatter Bar */}
        <div className="w-1/3 relative bg-purple-900/30 backdrop-blur-md border-r border-white/20 overflow-hidden">
          <div 
            className="absolute left-0 h-full bg-gradient-to-r from-purple-900 to-purple-600 transition-all duration-300"
            style={{ width: `${getPercentage(resources.antimatter)}%` }}
          />
          
          {isExpanded && (
            <div className="absolute inset-0 flex items-center justify-center text-white p-2">
              <div className="text-center">
                <div className="text-xs font-semibold text-purple-300 mb-0.5">
                  Antimatter
                </div>
                <div className="text-xs text-white font-mono">
                  {formatResource(resources.antimatter)}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Element 115 Bar */}
        <div className="w-1/3 relative bg-cyan-900/30 backdrop-blur-md border-r border-white/20 overflow-hidden">
          <div 
            className="absolute left-0 h-full bg-gradient-to-r from-cyan-900 to-cyan-600 transition-all duration-300"
            style={{ width: `${getPercentage(resources.element115)}%` }}
          />
          
          {isExpanded && (
            <div className="absolute inset-0 flex items-center justify-center text-white p-2">
              <div className="text-center">
                <div className="text-xs font-semibold text-cyan-300 mb-0.5">
                  Element 115
                </div>
                <div className="text-xs text-white font-mono">
                  {formatResource(resources.element115)}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Deuterium Bar */}
        <div className="w-1/3 relative bg-orange-900/30 backdrop-blur-md overflow-hidden">
          <div 
            className="absolute left-0 h-full bg-gradient-to-r from-orange-900 to-orange-600 transition-all duration-300"
            style={{ width: `${getPercentage(resources.deuterium)}%` }}
          />
          
          {isExpanded && (
            <div className="absolute inset-0 flex items-center justify-center text-white p-2">
              <div className="text-center">
                <div className="text-xs font-semibold text-orange-300 mb-0.5">
                  Deuterium
                </div>
                <div className="text-xs text-white font-mono">
                  {formatResource(resources.deuterium)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FuelBars;