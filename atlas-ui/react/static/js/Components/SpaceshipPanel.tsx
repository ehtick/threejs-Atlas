import React, { useState, useEffect, useRef } from "react";
import { getStorageStats } from "../Utils/VisitHistory.ts";
import { LocationBookmarks, SavedLocation } from "../Utils/LocationBookmarks.ts";
import { DailyChallengesManager, DailyChallenges } from "../Utils/DailyChallenges.ts";
import { SpaceshipResourceManager, SpaceshipResource, SpaceshipUpgrade, TravelCost } from "../Utils/SpaceshipResources.ts";
import ProgressBar from "./ProgressBar.tsx";

interface SpaceshipPanelProps {
  currentLocation?: {
    type: "galaxy" | "system" | "planet";
    name: string;
    coordinates: string;
    systemIndex?: number;
    planetName?: string;
  };
}

const SpaceshipPanel: React.FC<SpaceshipPanelProps> = ({ currentLocation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState<"stats" | "ship" | "saved">("stats");
  const [stats, setStats] = useState<any>(null);
  const [savedLocations, setSavedLocations] = useState<SavedLocation[]>([]);
  const [locationStats, setLocationStats] = useState<any>(null);
  const [dailyChallenges, setDailyChallenges] = useState<DailyChallenges | null>(null);
  const [spaceshipResources, setSpaceshipResources] = useState<SpaceshipResource>({ antimatter: 0, element115: 0, deuterium: 0 });
  const [spaceshipUpgrade, setSpaceshipUpgrade] = useState<SpaceshipUpgrade>({ level: 1, efficiency: 1.0, range: 300, storage: 500, passiveGeneration: 1.0 });
  const [upgradeCost, setUpgradeCost] = useState<TravelCost>({ antimatter: 0, element115: 0, deuterium: 0 });
  const [passiveGeneration, setPassiveGeneration] = useState<any>({ antimatter: 0, element115: 0, deuterium: 0, sources: { planets: 0, systems: 0, galaxies: 0 } });
  const [showCollectionPopup, setShowCollectionPopup] = useState<boolean>(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStats(getStorageStats());
      setSavedLocations(LocationBookmarks.getLocations());
      setLocationStats(LocationBookmarks.getLocationStats());
      
      const challenges = DailyChallengesManager.updateProgress();
      setDailyChallenges(challenges);
      
      // Load spaceship data
      setSpaceshipResources(SpaceshipResourceManager.getResources());
      setSpaceshipUpgrade(SpaceshipResourceManager.getUpgrade());
      const upgrade = SpaceshipResourceManager.getUpgrade();
      setUpgradeCost(SpaceshipResourceManager.getUpgradeCost(upgrade.level));
      
      // Load passive generation info with limit
      const passiveInfo = SpaceshipResourceManager.getAccumulatedResourcesWithLimit();
      setPassiveGeneration(passiveInfo);
    }
  }, [isOpen]);

  // Update passive generation display every 30 seconds when panel is open
  useEffect(() => {
    if (!isOpen) return;
    
    const updatePassiveDisplay = () => {
      // Refresh accumulated resources display
      const passiveInfo = SpaceshipResourceManager.getAccumulatedResourcesWithLimit();
      setPassiveGeneration(passiveInfo);
    };
    
    // Update every 15 seconds to show accumulating resources (now that intervals are 1 minute)
    const interval = setInterval(updatePassiveDisplay, 15000);
    
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // Same duration as animation
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !isClosing && panelRef.current && !panelRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isClosing]);

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatLocationName = (name: string) => {
    return name.replace(/_/g, " ");
  };

  const handleRemoveLocation = (e: React.MouseEvent, locationId: string) => {
    e.stopPropagation();
    LocationBookmarks.removeLocation(locationId);
    setSavedLocations(LocationBookmarks.getLocations());
    setLocationStats(LocationBookmarks.getLocationStats());
  };

  return (
    <>
      <div ref={panelRef} className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <button onClick={handleToggle} className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 hover:from-blue-500 hover:via-purple-500 hover:to-blue-700 text-white rounded-full shadow-2xl border-2 border-blue-400/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm" title="Spaceship Control Panel">
          <div className="flex items-center justify-center">
            <svg className="flex items-center justify-center" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                <path d="M12 3a6.02 6.02 0 0 0-5.923 4.9c-.086.466-.13.699.032 1.005c.161.307.39.409.847.613c1.38.614 3.134.982 5.044.982s3.665-.368 5.044-.982c.457-.204.686-.306.847-.613c.162-.306.118-.54.032-1.005A6.02 6.02 0 0 0 12 3"></path>
                <path d="M17 5.5c2.989.788 5 2.26 5 3.945C22 11.961 17.523 14 12 14S2 11.96 2 9.445C2 7.76 4.011 6.288 7 5.5M12 18v3m5-4l1 4M7 17l-1 4"></path>
              </g>
            </svg>
          </div>

          <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping"></div>
        </button>

        {isOpen && (
          <div 
            className="fixed bottom-20 sm:bottom-24 right-2 sm:right-6 w-[calc(100vw-1rem)] sm:w-96 max-w-md max-h-[70vh] sm:max-h-96 bg-black/90 backdrop-blur-xl rounded-2xl border border-blue-400/30 shadow-2xl z-40 overflow-hidden transition-all duration-300 ease-out"
            style={{
              animation: isClosing ? 'slideDownFadeOut 0.3s ease-out forwards' : 'slideUpFadeIn 0.3s ease-out forwards'
            }}
          >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-white font-bold text-lg">🚀 Spaceship Control</h3>
              </div>
              <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex mt-3 space-x-1 overflow-x-auto">
              <button onClick={() => setActiveTab("stats")} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap ${activeTab === "stats" ? "bg-blue-500/30 text-blue-300 border border-blue-500/50" : "text-gray-400 hover:text-white hover:bg-white/10"}`}>
                📊 Stats
              </button>
              <button onClick={() => setActiveTab("ship")} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap ${activeTab === "ship" ? "bg-green-500/30 text-green-300 border border-green-500/50" : "text-gray-400 hover:text-white hover:bg-white/10"}`}>
                🚀 Ship
              </button>
              <button onClick={() => setActiveTab("saved")} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap ${activeTab === "saved" ? "bg-purple-500/30 text-purple-300 border border-purple-500/50" : "text-gray-400 hover:text-white hover:bg-white/10"}`}>
                📍 Saved ({locationStats?.total || 0})
              </button>
            </div>
          </div>

          <div className="p-4 max-h-64 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {activeTab === "stats" && (
              <div className="space-y-2">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold text-xs">🌟 Daily Challenges</h4>
                    {dailyChallenges && (
                      <div className="text-[10px] text-indigo-400 font-medium">
                        Day {dailyChallenges.dayNumber} • x{DailyChallengesManager.getDayInfo().multiplier}
                      </div>
                    )}
                  </div>

                  {dailyChallenges && (
                    <div className="space-y-1.5 mb-2">
                      {dailyChallenges.challenges.map((challenge) => {
                        const colors = {
                          galaxies: "indigo" as const,
                          systems: "blue" as const,
                          planets: "purple" as const,
                        };

                        const labels = {
                          galaxies: "Galaxies",
                          systems: "Systems",
                          planets: "Planets",
                        };

                        return (
                          <div key={challenge.type} className="relative">
                            <div className="text-[10px] text-gray-400 mb-0.5">{labels[challenge.type]}</div>
                            <ProgressBar value={challenge.current} max={challenge.target} label={`${challenge.current}/${challenge.target}`} color={colors[challenge.type]} showPercentage={true} />
                            {challenge.completed && <div className="absolute -right-2 -top-1 text-white bg-green-500 px-0.5 rounded-full text-[8px]">✓</div>}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {dailyChallenges && (
                    <div className="grid grid-cols-2 gap-1 text-[10px] mb-2">
                      <div className="bg-white/5 rounded p-1.5 border border-indigo-500/20">
                        <div className="text-gray-400 text-[9px]">Completed</div>
                        <div className="text-indigo-400 font-bold">
                          {dailyChallenges.challenges.filter((c) => c.completed).length}/{dailyChallenges.challenges.length}
                        </div>
                      </div>
                      <div className="bg-white/5 rounded p-1.5 border border-green-500/20">
                        <div className="text-gray-400 text-[9px]">Atlas Size</div>
                        <div className="text-green-400 font-bold">{stats ? formatBytes(stats.size) : "0 B"}</div>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2 text-xs">📍 Saved Locations</h4>

                  <div className="mb-2">
                    <div className="text-[10px] text-gray-400 mb-0.5">Storage Usage</div>
                    <ProgressBar value={locationStats?.total || 0} max={locationStats?.maxAllowed || 50} label={`${locationStats?.total || 0}/${locationStats?.maxAllowed || 50}`} color="cyan" showPercentage={true} />
                  </div>

                  <div className="grid grid-cols-3 gap-1 text-[10px]">
                    <div className="bg-white/5 rounded p-1 text-center">
                      <div className="text-gray-400 text-[9px]">Galaxies</div>
                      <div className="text-indigo-400 font-bold">{locationStats?.galaxies || 0}</div>
                    </div>
                    <div className="bg-white/5 rounded p-1 text-center">
                      <div className="text-gray-400 text-[9px]">Systems</div>
                      <div className="text-blue-400 font-bold">{locationStats?.systems || 0}</div>
                    </div>
                    <div className="bg-white/5 rounded p-1 text-center">
                      <div className="text-gray-400 text-[9px]">Planets</div>
                      <div className="text-purple-400 font-bold">{locationStats?.planets || 0}</div>
                    </div>
                  </div>
                  <div className="text-[9px] text-gray-500 mt-1">*Complete daily tasks to save more locations</div>
                </div>
              </div>
            )}

            {activeTab === "ship" && (
              <div className="space-y-2">
                <div>
                  <h4 className="text-white font-semibold mb-2 text-xs flex items-center gap-1">
                    ⚡ Resources
                    <div className="text-[10px] text-gray-400">Lv.{spaceshipUpgrade.level}</div>
                  </h4>
                  
                  <div className="space-y-1 mb-2">
                    <div className="bg-white/5 rounded p-1.5 border border-purple-500/20">
                      <div className="flex justify-between text-[10px] mb-0.5">
                        <span className="text-purple-300">Antimatter</span>
                        <span className="text-white font-mono">{spaceshipResources.antimatter}/{spaceshipUpgrade.storage}</span>
                      </div>
                      <ProgressBar 
                        value={spaceshipResources.antimatter} 
                        max={spaceshipUpgrade.storage} 
                        label="" 
                        color="purple" 
                        showPercentage={false} 
                      />
                    </div>
                    
                    <div className="bg-white/5 rounded p-1.5 border border-cyan-500/20">
                      <div className="flex justify-between text-[10px] mb-0.5">
                        <span className="text-cyan-300">Element 115</span>
                        <span className="text-white font-mono">{spaceshipResources.element115}/{spaceshipUpgrade.storage}</span>
                      </div>
                      <ProgressBar 
                        value={spaceshipResources.element115} 
                        max={spaceshipUpgrade.storage} 
                        label="" 
                        color="cyan" 
                        showPercentage={false} 
                      />
                    </div>
                    
                    <div className="bg-white/5 rounded p-1.5 border border-orange-500/20">
                      <div className="flex justify-between text-[10px] mb-0.5">
                        <span className="text-orange-300">Deuterium</span>
                        <span className="text-white font-mono">{spaceshipResources.deuterium}/{spaceshipUpgrade.storage}</span>
                      </div>
                      <ProgressBar 
                        value={spaceshipResources.deuterium} 
                        max={spaceshipUpgrade.storage} 
                        label="" 
                        color="orange" 
                        showPercentage={false} 
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2 text-xs">🔧 Ship Upgrade</h4>
                  
                  <div className="grid grid-cols-4 gap-1 text-[10px] mb-2">
                    <div className="bg-white/5 rounded p-1 border border-blue-500/20">
                      <div className="text-gray-400 text-[9px]">Efficiency</div>
                      <div className="text-blue-400 font-bold">{spaceshipUpgrade.efficiency.toFixed(1)}x</div>
                    </div>
                    <div className="bg-white/5 rounded p-1 border border-green-500/20">
                      <div className="text-gray-400 text-[9px]">Range</div>
                      <div className="text-green-400 font-bold">{spaceshipUpgrade.range}</div>
                    </div>
                    <div className="bg-white/5 rounded p-1 border border-yellow-500/20">
                      <div className="text-gray-400 text-[9px]">Storage</div>
                      <div className="text-yellow-400 font-bold">{spaceshipUpgrade.storage}</div>
                    </div>
                    <div className="bg-white/5 rounded p-1 border border-indigo-500/20">
                      <div className="text-gray-400 text-[9px]">Passive</div>
                      <div className="text-indigo-400 font-bold">{spaceshipUpgrade.passiveGeneration.toFixed(1)}x</div>
                    </div>
                  </div>
                  
                  {spaceshipUpgrade.level < 100 && !SpaceshipResourceManager.canAffordUpgrade() && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded p-1.5 mb-2">
                      <div className="text-[10px] text-red-300 font-semibold mb-0.5">Missing resources:</div>
                      <div className="text-[9px] text-red-200 space-y-0.5">
                        {upgradeCost.antimatter > spaceshipResources.antimatter && (
                          <div>• Need {upgradeCost.antimatter - spaceshipResources.antimatter} more Antimatter</div>
                        )}
                        {upgradeCost.element115 > spaceshipResources.element115 && (
                          <div>• Need {upgradeCost.element115 - spaceshipResources.element115} more Element 115</div>
                        )}
                        {upgradeCost.deuterium > spaceshipResources.deuterium && (
                          <div>• Need {upgradeCost.deuterium - spaceshipResources.deuterium} more Deuterium</div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => {
                      if (SpaceshipResourceManager.upgradeShip()) {
                        setSpaceshipResources(SpaceshipResourceManager.getResources());
                        setSpaceshipUpgrade(SpaceshipResourceManager.getUpgrade());
                        const upgrade = SpaceshipResourceManager.getUpgrade();
                        setUpgradeCost(SpaceshipResourceManager.getUpgradeCost(upgrade.level));
                        
                        // Update passive generation info after upgrade
                        const passiveInfo = SpaceshipResourceManager.calculatePassiveGeneration();
                        setPassiveGeneration(passiveInfo);
                      }
                    }}
                    disabled={!SpaceshipResourceManager.canAffordUpgrade()}
                    className={`w-full px-2 py-1.5 rounded text-[10px] font-medium transition-all duration-200 ${
                      SpaceshipResourceManager.canAffordUpgrade()
                        ? "bg-gradient-to-r from-green-600/30 to-blue-600/30 hover:from-green-600/40 hover:to-blue-600/40 text-green-300 border border-green-500/50 hover:border-green-400/70 cursor-pointer"
                        : "bg-gray-700/30 text-gray-500 border border-gray-600/30 cursor-not-allowed"
                    }`}
                  >
                    {spaceshipUpgrade.level >= 100 ? (
                      <div className="text-yellow-400">🌟 MAX LEVEL - Ultimate Spaceship!</div>
                    ) : (
                      <div>
                        <div className="font-bold">Upgrade to Level {spaceshipUpgrade.level + 1}</div>
                        <div className="opacity-80 flex gap-2 justify-center mt-0.5">
                          <span className="text-purple-300">{upgradeCost.antimatter}AM</span>
                          <span className="text-cyan-300">{upgradeCost.element115}E115</span>
                          <span className="text-orange-300">{upgradeCost.deuterium}D</span>
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === "saved" && (
              <div className="space-y-2">
                {/* Manual Collection */}
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-2 border border-purple-500/30">
                  <h4 className="text-white font-semibold text-xs flex items-center gap-1 mb-1">
                    ⛏️ Mining Operations
                  </h4>
                  
                  {passiveGeneration.sources.planets === 0 && passiveGeneration.sources.systems === 0 ? (
                    <div className="text-[10px] text-gray-400">
                      💡 Save planets and systems to enable mining operations
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-center justify-between text-[10px] mb-1">
                        <span className="text-purple-300">Generating/min:</span>
                        <div className="flex gap-2">
                          <span className="text-purple-300">+{Math.round(spaceshipUpgrade.passiveGeneration * passiveGeneration.sources.planets + spaceshipUpgrade.passiveGeneration * passiveGeneration.sources.systems * 0.5)} AM</span>
                          <span className="text-cyan-300">+{Math.round(spaceshipUpgrade.passiveGeneration * passiveGeneration.sources.planets * 0.8 + spaceshipUpgrade.passiveGeneration * passiveGeneration.sources.systems * 0.6)} E115</span>
                          <span className="text-orange-300">+{Math.round(spaceshipUpgrade.passiveGeneration * passiveGeneration.sources.planets * 0.6 + spaceshipUpgrade.passiveGeneration * passiveGeneration.sources.systems * 0.4)} D</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-[10px] mb-2">
                        <span className="text-gray-400">Ready to collect:</span>
                        <div className="flex gap-2">
                          <span className="text-purple-300">+{passiveGeneration.antimatter} AM</span>
                          <span className="text-cyan-300">+{passiveGeneration.element115} E115</span>
                          <span className="text-orange-300">+{passiveGeneration.deuterium} D</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => {
                          setShowCollectionPopup(true);
                        }}
                        disabled={passiveGeneration.antimatter + passiveGeneration.element115 + passiveGeneration.deuterium === 0}
                        className={`w-full px-2 py-1.5 rounded text-[10px] font-medium transition-all duration-200 ${
                          (passiveGeneration.antimatter + passiveGeneration.element115 + passiveGeneration.deuterium > 0)
                            ? "bg-gradient-to-r from-purple-600/30 to-blue-600/30 hover:from-purple-600/40 hover:to-blue-600/40 text-purple-300 border border-purple-500/50 hover:border-purple-400/70 cursor-pointer"
                            : "bg-gray-700/30 text-gray-500 border border-gray-600/30 cursor-not-allowed"
                        }`}
                      >
                        🚀 Collect From {passiveGeneration.sources.planets}🪐 {passiveGeneration.sources.systems}⭐
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Saved Locations List */}
                <div className="space-y-1">
                  {savedLocations.length === 0 ? (
                    <div className="text-center py-4">
                      <div className="text-gray-400 text-xs mb-1">No saved locations</div>
                      <div className="text-gray-500 text-[10px]">Use the 📍 button to save locations</div>
                    </div>
                  ) : (
                    savedLocations.map((location) => (
                      <div key={location.id} className="bg-white/5 hover:bg-white/10 rounded p-1.5 border border-white/10 hover:border-white/20 transition-all duration-200 group">
                        <div className="flex items-center justify-between">
                          <a href={location.stargateUrl} className="flex-1 min-w-0 hover:text-blue-300 transition-colors duration-200" title={`Navigate to ${formatLocationName(location.name)}`}>
                            <div className="flex items-center space-x-1">
                              <div className="text-[8px]">
                                {location.type === "galaxy" && "🌌"}
                                {location.type === "system" && "⭐"}
                                {location.type === "planet" && "🪐"}
                              </div>
                              <div className="text-white text-[10px] font-medium truncate">{formatLocationName(location.name)}</div>
                              <div className="text-gray-500 text-[8px] shrink-0">
                                {(() => {
                                  try {
                                    const date = new Date(location.timestamp);
                                    return isNaN(date.getTime()) ? 'N/A' : date.toLocaleDateString();
                                  } catch (e) {
                                    return 'N/A';
                                  }
                                })()}
                              </div>
                            </div>
                          </a>

                          <button onClick={(e) => handleRemoveLocation(e, location.id)} className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400 transition-all duration-200 ml-1" title="Remove location">
                            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
            </div>
          </div>
        )}
        
        {/* Mass Collection Popup */}
        {showCollectionPopup && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-purple-400/30 shadow-2xl w-full max-w-md">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-4 border-b border-white/10 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    ⛏️ Mass Collection
                  </h3>
                  <button 
                    onClick={() => setShowCollectionPopup(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="text-sm text-gray-300 mb-4">
                  Collect resources from all your saved mining locations at once.
                </div>
                
                <div className="bg-white/5 rounded-lg p-3 mb-4">
                  <div className="text-xs text-gray-400 mb-2">Available to collect:</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className={`font-bold ${passiveGeneration.antimatter > 0 ? 'text-purple-300' : 'text-gray-500'}`}>
                        +{passiveGeneration.antimatter}
                      </div>
                      <div className="text-gray-500">Antimatter</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-bold ${passiveGeneration.element115 > 0 ? 'text-cyan-300' : 'text-gray-500'}`}>
                        +{passiveGeneration.element115}
                      </div>
                      <div className="text-gray-500">Element 115</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-bold ${passiveGeneration.deuterium > 0 ? 'text-orange-300' : 'text-gray-500'}`}>
                        +{passiveGeneration.deuterium}
                      </div>
                      <div className="text-gray-500">Deuterium</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mb-4">
                  🌟 Sources: {passiveGeneration.sources.planets} Planets, {passiveGeneration.sources.systems} Systems
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowCollectionPopup(false)}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 border border-gray-600/50 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Execute mass collection
                      SpaceshipResourceManager.addResources({
                        antimatter: passiveGeneration.antimatter,
                        element115: passiveGeneration.element115,
                        deuterium: passiveGeneration.deuterium,
                      });
                      
                      // Show collection notification
                      SpaceshipResourceManager.showPassiveGenerationNotification(passiveGeneration);
                      
                      // Reset the generation accumulation after collection
                      const data = JSON.parse(localStorage.getItem('_atlasSpaceShip') || '{}');
                      if (!data.t) data.t = {};
                      data.t.lp = Date.now(); // Reset accumulation timer
                      localStorage.setItem('_atlasSpaceShip', JSON.stringify(data));
                      
                      // Refresh UI - should show 0 resources now since we just collected
                      setSpaceshipResources(SpaceshipResourceManager.getResources());
                      const passiveInfo = SpaceshipResourceManager.getAccumulatedResourcesWithLimit();
                      setPassiveGeneration(passiveInfo);
                      
                      setShowCollectionPopup(false);
                    }}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600/30 to-blue-600/30 hover:from-purple-600/40 hover:to-blue-600/40 text-purple-300 border border-purple-500/50 hover:border-purple-400/70 transition-all duration-200"
                  >
                    🚀 Collect All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SpaceshipPanel;
