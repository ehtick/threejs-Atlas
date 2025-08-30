// atlas-ui/react/static/js/Components/FuelBars.tsx
import React, { useState, useEffect } from "react";
import { SpaceshipResourceManager } from "../Utils/SpaceshipResources.tsx";
import { ResourceEventManager } from "../Utils/ResourceEventManager.tsx";
import AntimatterIcon from "../Icons/AntimatterIcon";
import Element115Icon from "../Icons/Element115Icon";
import DeuteriumIcon from "../Icons/DeuteriumIcon";

interface Resource {
  name: string;
  value: number;
  color: string;
  glow: string;
  icon: React.ReactNode;
  gradient: string;
}

const FuelBars: React.FC = () => {
  const [resources, setResources] = useState({ antimatter: 0, element115: 0, deuterium: 0 });
  const [maxStorage, setMaxStorage] = useState(500);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredResource, setHoveredResource] = useState<string | null>(null);
  const [isMobileToggled, setIsMobileToggled] = useState(false);

  useEffect(() => {
    const updateResources = () => {
      const newResources = SpaceshipResourceManager.getResources();
      setResources(newResources);
      setMaxStorage(SpaceshipResourceManager.getUpgrade().storage);
    };

    updateResources();
    
    const interval = setInterval(updateResources, 5000);
    const unsubscribe = ResourceEventManager.subscribe('resources_updated', updateResources);
    
    return () => {
      clearInterval(interval);
      unsubscribe();
    };
  }, []);

  const formatResource = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value.toFixed(0);
  };

  const getPercentage = (value: number) => {
    return Math.min((value / maxStorage) * 100, 100);
  };

  const resourcesConfig: Resource[] = [
    {
      name: "ANTIMATTER",
      value: resources.antimatter,
      color: "purple",
      glow: "rgba(168, 85, 247, 0.5)",
      icon: <AntimatterIcon size={20} color="#ffffff" />,
      gradient: "from-purple-600 via-purple-500 to-fuchsia-500"
    },
    {
      name: "ELEMENT 115",
      value: resources.element115,
      color: "cyan",
      glow: "rgba(34, 211, 238, 0.5)",
      icon: <Element115Icon size={20} color="#ffffff" />,
      gradient: "from-cyan-500 via-cyan-400 to-blue-400"
    },
    {
      name: "DEUTERIUM",
      value: resources.deuterium,
      color: "orange",
      glow: "rgba(251, 146, 60, 0.5)",
      icon: <DeuteriumIcon size={20} color="#ffffff" />,
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    }
  ];

  const shouldExpand = isExpanded || isMobileToggled;

  const handleMobileToggle = () => {
    setIsMobileToggled(!isMobileToggled);
    setHoveredResource(null);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div 
        className={`relative w-full transition-all duration-500 ease-out ${
          shouldExpand ? 'h-14 sm:h-20' : 'h-1 sm:h-1.5'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => {
          setIsExpanded(false);
          setHoveredResource(null);
        }}
      >
        {/* Background glassmorphism effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent backdrop-blur-xl" />
        
        {/* Resource bars container */}
        <div className="relative h-full flex gap-px">
          {resourcesConfig.map((resource) => {
            const percentage = getPercentage(resource.value);
            const isHovered = hoveredResource === resource.name;
            const isCritical = percentage < 20;
            const isAlmostFull = percentage > 90;
            
            return (
              <div
                key={resource.name}
                className="flex-1 relative overflow-hidden group"
                onMouseEnter={() => setHoveredResource(resource.name)}
                onMouseLeave={() => setHoveredResource(null)}
              >
                {/* Background with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50" />
                
                {/* Main resource bar with animated gradient */}
                <div 
                  className={`absolute left-0 h-full bg-gradient-to-r ${resource.gradient} 
                    transition-all duration-700 ease-out ${
                    isHovered ? 'brightness-125 saturate-150' : ''
                  } ${isCritical ? 'animate-pulse' : ''}`}
                  style={{ 
                    width: `${percentage}%`,
                    boxShadow: `0 0 20px ${resource.glow}`,
                  }}
                >
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                    animate-shimmer" 
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 3s infinite'
                    }}
                  />
                </div>
                
                {/* Critical warning overlay */}
                {isCritical && (
                  <div className="absolute inset-0 bg-red-500/20 animate-pulse pointer-events-none" />
                )}
                
                {/* Almost full glow effect */}
                {isAlmostFull && (
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/20 to-transparent animate-pulse" />
                )}
                
                {/* Content overlay */}
                {shouldExpand && (
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    shouldExpand ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {/* Dark overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
                    
                    {/* Mobile Layout - Vertical stack */}
                    <div className="sm:hidden absolute inset-0 flex flex-col justify-center px-2 z-10">
                      {/* Top row: Icon + Name */}
                      <div className="flex items-center gap-1 mb-1">
                        <div className="text-base" 
                          style={{ 
                            filter: `drop-shadow(0 0 8px ${resource.glow})`
                          }}>
                          {resource.icon}
                        </div>
                        <span className="text-[10px] font-bold tracking-wider text-white/90 uppercase drop-shadow-lg">
                          {resource.name}
                        </span>
                      </div>
                      {/* Bottom row: Value */}
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-white font-mono drop-shadow-lg">
                          {formatResource(resource.value)}
                        </span>
                        <span className="text-[9px] text-white/70 drop-shadow-lg">
                          / {formatResource(maxStorage)}
                        </span>
                      </div>
                      {/* Status indicator - positioned absolute */}
                      {isCritical && (
                        <div className="absolute bottom-1 right-2">
                          <span className="text-[8px] text-red-400 uppercase tracking-wider animate-pulse font-bold drop-shadow-lg">
                            LOW
                          </span>
                        </div>
                      )}
                      {isAlmostFull && (
                        <div className="absolute bottom-1 right-2">
                          <span className="text-[8px] text-green-400 uppercase tracking-wider font-bold drop-shadow-lg">
                            FULL
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Desktop Layout - Horizontal */}
                    <div className="hidden sm:flex absolute inset-0 items-center justify-between px-4 z-10">
                      {/* Left side - Icon and name */}
                      <div className="flex items-center gap-2">
                        <div className={`text-2xl ${isHovered ? 'animate-spin-slow' : ''}`} 
                          style={{ 
                            filter: `drop-shadow(0 0 12px ${resource.glow})`
                          }}>
                          {resource.icon}
                        </div>
                        <div>
                          <div className="text-[11px] font-bold tracking-wider text-white/90 uppercase drop-shadow-lg">
                            {resource.name}
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-base font-bold text-white font-mono drop-shadow-lg">
                              {formatResource(resource.value)}
                            </span>
                            <span className="text-xs text-white/80 drop-shadow-lg">
                              / {formatResource(maxStorage)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right side - Status indicators */}
                      {(isCritical || isAlmostFull) && (
                        <div className={`text-right transition-all duration-300 ${
                          isHovered ? 'scale-110' : ''
                        }`}>
                          {isCritical && (
                            <div className="text-[11px] text-red-400 uppercase tracking-wider animate-pulse font-bold">
                              LOW
                            </div>
                          )}
                          {isAlmostFull && (
                            <div className="text-[11px] text-green-400 uppercase tracking-wider font-bold">
                              FULL
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Hover effect border */}
                {isHovered && shouldExpand && (
                  <div className="absolute inset-0 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Mobile Toggle Ribbon - Only visible on mobile */}
      <div className="sm:hidden absolute top-full right-2 z-40">
        <div 
          onClick={handleMobileToggle}
          className={`bg-gradient-to-b from-black/40 via-black/50 to-black/60 backdrop-blur-md 
            border-l border-r border-b border-white/10 w-6 h-6 cursor-pointer 
            transition-all duration-300 hover:bg-black/70 active:bg-black/80
            flex items-center justify-center relative overflow-hidden
            shadow-lg shadow-black/30 ${shouldExpand ? 'opacity-100' : 'opacity-70'}`}
          style={{
            borderBottomLeftRadius: '6px',
            borderBottomRightRadius: '6px'
          }}
        >
          {/* Subtle background glow */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${
            shouldExpand ? 'bg-gradient-to-r from-blue-500/10 to-transparent' : 'bg-gradient-to-r from-blue-500/5 to-transparent'
          }`} />
          
          <div className="text-white/90 relative z-10">
            <div className={`text-sm font-bold transition-all duration-300 transform ${
              shouldExpand ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
            }`}>
              {shouldExpand ? '−' : '+'}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default FuelBars;