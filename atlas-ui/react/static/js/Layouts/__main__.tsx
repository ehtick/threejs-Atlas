// atlas-ui/react/static/js/Layouts/__main__.tsx
import React, { useState, useEffect } from "react";
import Header from "../Components/Header.tsx";
import CoordinateSelector from "../Components/CoordinateSelector.tsx";
import VersionFooter from "../Components/VersionFooter.tsx";
import SpaceshipPanel from "../Components/SpaceshipPanel.tsx";
import FuelBars from "../Components/FuelBars.tsx";
import { UnifiedSpaceshipStorage } from "../Utils/UnifiedSpaceshipStorage.tsx";
import { SpaceshipTravelManager } from "../Utils/SpaceshipTravelCosts.tsx";
import { SpaceshipResourceManager } from "../Utils/SpaceshipResources.tsx";
import AntimatterIcon from "../Icons/AntimatterIcon.tsx";
import Element115Icon from "../Icons/Element115Icon.tsx";
import DeuteriumIcon from "../Icons/DeuteriumIcon.tsx";

interface MainLayoutProps {
  error: string | null;
  version: string;
}

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

const MainLayout: React.FC<MainLayoutProps> = ({ error, version }) => {
  const [currentCoordinates, setCurrentCoordinates] = useState<Coordinates>({
    x: 1000000,
    y: 1000000,
    z: 1000000,
  });
  const [travelCost, setTravelCost] = useState<{ antimatter: number; element115: number; deuterium: number } | null>(null);
  const [canAfford, setCanAfford] = useState(false);

  useEffect(() => {
    UnifiedSpaceshipStorage.migrateFromOldStorage();
  }, []);

  const handleCoordinateChange = (coordinates: Coordinates) => {
    setCurrentCoordinates(coordinates);
  };

  const calculateTravelCost = (coordinates: Coordinates) => {
    const distance = Math.floor(Math.sqrt(Math.pow(coordinates.x - 1000000, 2) + Math.pow(coordinates.y - 1000000, 2) + Math.pow(coordinates.z - 1000000, 2)) / 10000);

    const cost = SpaceshipResourceManager.calculateTravelCost("galaxy", distance);
    const upgrade = SpaceshipResourceManager.getUpgrade();

    const firstPass = {
      antimatter: Math.floor(cost.antimatter / upgrade.efficiency),
      element115: Math.floor(cost.element115 / upgrade.efficiency),
      deuterium: Math.floor(cost.deuterium / upgrade.efficiency),
    };

    const actualConsumption = {
      antimatter: Math.floor(firstPass.antimatter / upgrade.efficiency),
      element115: Math.floor(firstPass.element115 / upgrade.efficiency),
      deuterium: Math.floor(firstPass.deuterium / upgrade.efficiency),
    };

    setTravelCost(actualConsumption);

    const resources = SpaceshipResourceManager.getResources();
    const affordable = resources.antimatter >= actualConsumption.antimatter && resources.element115 >= actualConsumption.element115 && resources.deuterium >= actualConsumption.deuterium;
    setCanAfford(affordable);
  };

  useEffect(() => {
    calculateTravelCost(currentCoordinates);
  }, [currentCoordinates.x, currentCoordinates.y, currentCoordinates.z]);

  useEffect(() => {
    const updateTravelCost = () => {
      calculateTravelCost(currentCoordinates);
    };

    const interval = setInterval(updateTravelCost, 5000);

    return () => clearInterval(interval);
  }, [currentCoordinates.x, currentCoordinates.y, currentCoordinates.z]);

  const formatResource = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(2)}M`;
    }
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value.toString();
  };

  const handleSubmit = () => {
    const distance = Math.floor(Math.sqrt(Math.pow(currentCoordinates.x - 1000000, 2) + Math.pow(currentCoordinates.y - 1000000, 2) + Math.pow(currentCoordinates.z - 1000000, 2)) / 10000);

    if (!SpaceshipTravelManager.canAffordTravel("galaxy", distance)) {
      SpaceshipTravelManager.executeTravel("galaxy", distance);
      return;
    }

    if (!SpaceshipTravelManager.executeTravel("galaxy", distance)) {
      return;
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/navigate";

    Object.entries(currentCoordinates).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value.toString();
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <FuelBars />

      <div className="relative z-10 pt-1">
        <Header />

        <div className="w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Atlas Navigation System</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">Navigate through infinite galaxies, solar systems, and planets. Enter coordinates to begin your journey across the universe.</p>
          </div>

          {error && (
            <div className="mb-8 bg-red-500/20 border border-red-500 rounded-lg p-4 text-red-200 text-center">
              <span className="font-semibold">Navigation Error:</span> {error}
            </div>
          )}

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl overflow-hidden">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="w-full"
            >
              <div className="p-3 sm:p-4 lg:p-6">
                <CoordinateSelector onCoordinateChange={handleCoordinateChange} />
              </div>
            </form>
          </div>

          {travelCost && (
            <div className={`bg-gradient-to-r ${canAfford ? "from-emerald-500/20 via-blue-500/20 to-purple-500/20 border-emerald-500/30" : "from-red-500/20 via-orange-500/20 to-yellow-500/20 border-red-500/30"} rounded-xl p-4 sm:p-6 mb-8 border backdrop-blur-sm`}>
              <div className="text-center mb-4">
                <h3 className={`text-xl sm:text-2xl font-semibold mb-2 ${canAfford ? "text-emerald-300" : "text-red-300"}`}>🚀 Travel Fuel Consumption</h3>
                <p className="text-sm sm:text-base text-gray-300">Resources required for this journey (including ship efficiency bonuses)</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4 border border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <AntimatterIcon size={24} color="#a855f7" />
                    <span className="text-sm font-medium text-gray-300">Antimatter</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400">{formatResource(travelCost.antimatter)}</div>
                  <div className="text-xs text-gray-400 mt-1">AM Required</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-cyan-500/30 hover:border-cyan-500/50 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Element115Icon size={24} color="#06b6d4" />
                    <span className="text-sm font-medium text-gray-300">Element 115</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{formatResource(travelCost.element115)}</div>
                  <div className="text-xs text-gray-400 mt-1">E115 Required</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4 border border-orange-500/30 hover:border-orange-500/50 transition-colors duration-300 sm:col-span-3 lg:col-span-1">
                  <div className="flex items-center gap-3 mb-2">
                    <DeuteriumIcon size={24} color="#fb7185" />
                    <span className="text-sm font-medium text-gray-300">Deuterium</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400">{formatResource(travelCost.deuterium)}</div>
                  <div className="text-xs text-gray-400 mt-1">D Required</div>
                </div>
              </div>

              <div className="mt-4 text-center">
                {canAfford ? (
                  <div className="flex items-center justify-center gap-2 text-emerald-300">
                    <span className="text-lg">✅</span>
                    <span className="font-medium">Sufficient fuel for travel</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-red-300">
                    <span className="text-lg">⚠️</span>
                    <span className="font-medium">Insufficient fuel - collect more resources</span>
                  </div>
                )}
                <div className="text-xs text-gray-400 mt-2">Ship efficiency: {SpaceshipTravelManager.getTravelEfficiency().toFixed(2)}x</div>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-emerald-500/20 via-violet-500/20 to-rose-500/20 rounded-xl p-4 sm:p-6 text-center border border-white/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r from-emerald-300 via-violet-300 to-rose-300 bg-clip-text text-transparent">Current Coordinates</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{currentCoordinates.x.toLocaleString()}</div>
                <div className="text-xs sm:text-sm text-gray-300">X Coordinate</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-violet-500/30 hover:border-violet-500/50 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-violet-400">{currentCoordinates.y.toLocaleString()}</div>
                <div className="text-xs sm:text-sm text-gray-300">Y Coordinate</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-rose-500/30 hover:border-rose-500/50 transition-colors duration-300 sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-rose-400">{currentCoordinates.z.toLocaleString()}</div>
                <div className="text-xs sm:text-sm text-gray-300">Z Coordinate</div>
              </div>
            </div>
          </div>
        </div>

        <VersionFooter version={version} />
      </div>

      <SpaceshipPanel />
    </div>
  );
};

export default MainLayout;
