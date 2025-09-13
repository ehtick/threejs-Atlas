// atlas-ui/react/static/js/Layouts/__main__.tsx

import React, { useState, useEffect, useRef } from "react";
import Header from "../Components/Header.tsx";
import CoordinateSelector from "../Components/CoordinateSelector.tsx";
import CoordinateViewer3D from "../Components/CoordinateViewer3D.tsx";
import VersionFooter from "../Components/VersionFooter.tsx";
import SpaceshipPanel from "../Components/SpaceshipPanel.tsx";
import FuelBars from "../Components/FuelBars.tsx";
import StarfieldWarpReveal from "../Components/StarfieldWarpReveal.tsx";
import { UnifiedSpaceshipStorage } from "../Utils/UnifiedSpaceshipStorage.tsx";
import { SpaceshipTravelManager } from "../Utils/SpaceshipTravelCosts.tsx";
import { SpaceshipResourceManager } from "../Utils/SpaceshipResources.tsx";

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
  const [showWarpReveal, setShowWarpReveal] = useState(false);
  const [show3DViewer, setShow3DViewer] = useState(false);
  const [showNavigationText, setShowNavigationText] = useState(true);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [seedData, setSeedData] = useState<{
    primordial_seed: string;
    sha256_seed: string;
    decimal_seed: string;
    cosmic_origin_time?: number;
    cosmic_origin_datetime?: string;
  } | null>(null);

  useEffect(() => {
    UnifiedSpaceshipStorage.migrateFromOldStorage();

    const hasSeenIntro = localStorage.getItem("atlasIntroSeen");
    if (!hasSeenIntro) {
      fetch("/api/universe/config")
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSeedData({
              primordial_seed: data.seed_str,
              sha256_seed: data.seed_hash,
              decimal_seed: data.seed_decimal,
              cosmic_origin_time: data.cosmic_origin_time,
              cosmic_origin_datetime: data.cosmic_origin_datetime,
            });
            setShowWarpReveal(true);
          }
        })
        .catch((error) => {
          console.error("Error fetching universe config:", error);
        });

      localStorage.setItem("atlasIntroSeen", "true");
    }
  }, []);

  const handleWarpRevealComplete = () => {
    setShowWarpReveal(false);
  };

  const handleCoordinateChange = (coordinates: Coordinates, isUserInteraction: boolean = false) => {
    setCurrentCoordinates(coordinates);

    if (isUserInteraction) {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }

      setShow3DViewer(true);
      setShowNavigationText(false);

      hideTimerRef.current = setTimeout(() => {
        setShow3DViewer(false);
        setShowNavigationText(true);
        hideTimerRef.current = null;
      }, 3000);
    }
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

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

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
    <>
      {showWarpReveal && <StarfieldWarpReveal seedData={seedData} onComplete={handleWarpRevealComplete} />}

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

          <div className="w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8 relative">
            <div className="text-center mb-12 relative min-h-[200px] flex items-center justify-center">
              <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out transform ${showNavigationText ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"}`} style={{ pointerEvents: showNavigationText ? "auto" : "none" }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Atlas Navigation System</h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">Navigate through infinite galaxies, solar systems, and planets. Enter coordinates to begin your journey across the universe.</p>
              </div>

              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out transform ${show3DViewer ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2"}`} style={{ pointerEvents: "none" }}>
                <div className="w-96 h-96">
                  <CoordinateViewer3D coordinates={currentCoordinates} className="w-full h-full" />
                </div>
              </div>
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
                  <CoordinateSelector onCoordinateChange={handleCoordinateChange} travelCost={travelCost} canAfford={canAfford} formatResource={formatResource} efficiency={SpaceshipTravelManager.getTravelEfficiency()} />
                </div>
              </form>
            </div>
          </div>

          <VersionFooter version={version} />
        </div>

        <SpaceshipPanel />
      </div>
    </>
  );
};

export default MainLayout;
