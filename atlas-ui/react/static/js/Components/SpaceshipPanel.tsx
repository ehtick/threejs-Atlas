import React, { useState, useEffect } from "react";
import { getStorageStats } from "../Utils/VisitHistory.ts";
import { LocationBookmarks, SavedLocation } from "../Utils/LocationBookmarks.ts";
import { DailyChallengesManager, DailyChallenges } from "../Utils/DailyChallenges.ts";
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
  const [activeTab, setActiveTab] = useState<"stats" | "locations">("stats");
  const [stats, setStats] = useState<any>(null);
  const [savedLocations, setSavedLocations] = useState<SavedLocation[]>([]);
  const [locationStats, setLocationStats] = useState<any>(null);
  const [dailyChallenges, setDailyChallenges] = useState<DailyChallenges | null>(null);

  useEffect(() => {
    if (isOpen) {
      setStats(getStorageStats());
      setSavedLocations(LocationBookmarks.getLocations());
      setLocationStats(LocationBookmarks.getLocationStats());

      const challenges = DailyChallengesManager.updateProgress();
      setDailyChallenges(challenges);
    }
  }, [isOpen]);

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
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 hover:from-blue-500 hover:via-purple-500 hover:to-blue-700 text-white rounded-full shadow-2xl border-2 border-blue-400/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm" title="Spaceship Control Panel">
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
      </div>

      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-2 sm:right-6 w-[calc(100vw-1rem)] sm:w-96 max-w-md max-h-[70vh] sm:max-h-96 bg-black/90 backdrop-blur-xl rounded-2xl border border-blue-400/30 shadow-2xl z-40 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-white font-bold text-lg">🚀 Spaceship Control</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex mt-3 space-x-1">
              <button onClick={() => setActiveTab("stats")} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${activeTab === "stats" ? "bg-blue-500/30 text-blue-300 border border-blue-500/50" : "text-gray-400 hover:text-white hover:bg-white/10"}`}>
                📊 Statistics
              </button>
              <button onClick={() => setActiveTab("locations")} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${activeTab === "locations" ? "bg-purple-500/30 text-purple-300 border border-purple-500/50" : "text-gray-400 hover:text-white hover:bg-white/10"}`}>
                📍 Saved Locations ({locationStats?.total || 0})
              </button>
            </div>
          </div>

          <div className="p-4 max-h-64 overflow-y-auto">
            {activeTab === "stats" && (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold text-sm">🌟 Daily Challenges</h4>
                    {dailyChallenges && (
                      <div className="text-xs text-indigo-400 font-medium">
                        Day {dailyChallenges.dayNumber} • x{Math.min(1 + (dailyChallenges.dayNumber - 1) * 0.1, 2.0).toFixed(1)}
                      </div>
                    )}
                  </div>

                  {dailyChallenges && (
                    <div className="space-y-3 mb-4">
                      {dailyChallenges.challenges.map((challenge) => {
                        const colors = {
                          galaxies: "indigo" as const,
                          systems: "blue" as const,
                          planets: "purple" as const,
                        };

                        const labels = {
                          galaxies: "Galaxies Explored",
                          systems: "Systems Visited",
                          planets: "Planets Discovered",
                        };

                        return (
                          <div key={challenge.type} className="relative">
                            <ProgressBar value={challenge.current} max={challenge.target} label={`${labels[challenge.type]}: ${challenge.current}/${challenge.target}`} color={colors[challenge.type]} showPercentage={true} />
                            {challenge.completed && <div className="absolute -right-3 top-0 text-white bg-green-500 px-0.5 rounded-full text-[8px]">✓</div>}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {dailyChallenges && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                      <div className="bg-white/5 rounded-lg p-2 border border-indigo-500/20">
                        <div className="text-gray-400">Completed</div>
                        <div className="text-indigo-400 font-bold">
                          {dailyChallenges.challenges.filter((c) => c.completed).length}/{dailyChallenges.challenges.length}
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2 border border-green-500/20">
                        <div className="text-gray-400">Archive Size</div>
                        <div className="text-green-400 font-bold">{stats ? formatBytes(stats.size) : "0 B"}</div>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm">📍 Saved Locations</h4>

                  <div className="mb-3">
                    <ProgressBar value={locationStats?.total || 0} max={locationStats?.maxAllowed || 50} label={`Saved Locations: ${locationStats?.total || 0}/${locationStats?.maxAllowed || 50}`} color="cyan" showPercentage={true} />
                  </div>

                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="bg-white/5 rounded p-1.5 text-center">
                      <div className="text-gray-400 text-[10px]">Galaxies</div>
                      <div className="text-indigo-400 font-bold text-xs">{locationStats?.galaxies || 0}</div>
                    </div>
                    <div className="bg-white/5 rounded p-1.5 text-center">
                      <div className="text-gray-400 text-[10px]">Systems</div>
                      <div className="text-blue-400 font-bold text-xs">{locationStats?.systems || 0}</div>
                    </div>
                    <div className="bg-white/5 rounded p-1.5 text-center">
                      <div className="text-gray-400 text-[10px]">Planets</div>
                      <div className="text-purple-400 font-bold text-xs">{locationStats?.planets || 0}</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-gray-500 mt-2">*Complete your daily tasks to be able to save more Atlas locations</div>
                </div>
              </div>
            )}

            {activeTab === "locations" && (
              <div className="space-y-2">
                {savedLocations.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-gray-400 text-sm mb-2">No saved locations</div>
                    <div className="text-gray-500 text-xs">Use the 📍 button to save locations</div>
                  </div>
                ) : (
                  savedLocations.map((location) => (
                    <div key={location.id} className="bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-200 group">
                      <div className="flex items-start justify-between">
                        <a href={location.stargateUrl} className="flex-1 min-w-0 hover:text-blue-300 transition-colors duration-200" title={`Navigate to ${formatLocationName(location.name)}`}>
                          <div className="flex items-center space-x-2 mb-1">
                            <div className="text-xs">
                              {location.type === "galaxy" && "🌌"}
                              {location.type === "system" && "⭐"}
                              {location.type === "planet" && "🪐"}
                            </div>
                            <div className="text-white text-sm font-medium truncate">{formatLocationName(location.name)}</div>
                          </div>
                          <div className="text-gray-400 text-xs truncate">Saved {new Date(location.timestamp).toLocaleDateString()}</div>
                        </a>

                        <button onClick={(e) => handleRemoveLocation(e, location.id)} className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-400 transition-all duration-200 ml-2" title="Remove location">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SpaceshipPanel;
