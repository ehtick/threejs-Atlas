// atlas-ui/react/static/js/Components/CoordinateSelector.tsx
import React, { useState, useEffect } from "react";
import AntimatterIcon from "../Icons/AntimatterIcon.tsx";
import Element115Icon from "../Icons/Element115Icon.tsx";
import DeuteriumIcon from "../Icons/DeuteriumIcon.tsx";

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

interface CoordinateSelectorProps {
  onCoordinateChange?: (coordinates: Coordinates, isUserInteraction?: boolean) => void;
  travelCost?: { antimatter: number; element115: number; deuterium: number } | null;
  canAfford?: boolean;
  formatResource?: (value: number) => string;
  efficiency?: number;
}

const CoordinateSelector: React.FC<CoordinateSelectorProps> = ({ onCoordinateChange, travelCost, canAfford, formatResource, efficiency }) => {
  const [coordinates, setCoordinates] = useState({
    x: 1000000,
    y: 1000000,
    z: 1000000,
  });
  const [isInitialized, setIsInitialized] = useState(false);

  const coordinateOptions = {
    x: [
      { value: 0, name: "The Edge" },
      { value: 1000000, name: "Alpha" },
      { value: 2000000, name: "Beta" },
      { value: 3000000, name: "Gamma" },
      { value: 4000000, name: "Delta" },
      { value: 5000000, name: "Epsilon" },
      { value: 6000000, name: "Zeta" },
      { value: 7000000, name: "Eta" },
      { value: 8000000, name: "Theta" },
      { value: 9000000, name: "Iota" },
      { value: 10000000, name: "The Unknown" },
    ],
    y: [
      { value: 0, name: "The Edge" },
      { value: 1000000, name: "Lambda" },
      { value: 2000000, name: "Mu" },
      { value: 3000000, name: "Nu" },
      { value: 4000000, name: "Xi" },
      { value: 5000000, name: "Omicron" },
      { value: 6000000, name: "Pi" },
      { value: 7000000, name: "Rho" },
      { value: 8000000, name: "Sigma" },
      { value: 9000000, name: "Tau" },
      { value: 10000000, name: "The Unknown" },
    ],
    z: [
      { value: 0, name: "The Edge" },
      { value: 1000000, name: "Phi" },
      { value: 2000000, name: "Chi" },
      { value: 3000000, name: "Psi" },
      { value: 4000000, name: "Omega" },
      { value: 5000000, name: "Vega" },
      { value: 6000000, name: "Rigel" },
      { value: 7000000, name: "Sirius" },
      { value: 8000000, name: "Antares" },
      { value: 9000000, name: "Procyon" },
      { value: 10000000, name: "The Unknown" },
    ],
  };

  const updateSelectOption = (coordinate, value) => {
    const options = coordinateOptions[coordinate];
    for (let i = 0; i < options.length; i++) {
      const optionValue = options[i].value;
      const nextOptionValue = i < options.length - 1 ? options[i + 1].value : 10000001;

      if ((i === 0 && value <= 999999) || (value >= optionValue && value < nextOptionValue) || (i === options.length - 1 && value >= 9000000 && value <= 10000000)) {
        return i;
      }
    }
    return -1;
  };

  const handleSliderChange = (coordinate, value) => {
    const numValue = parseInt(value, 10);
    setCoordinates((prev) => ({
      ...prev,
      [coordinate]: numValue,
    }));
    if (isInitialized && onCoordinateChange) {
      onCoordinateChange({ ...coordinates, [coordinate]: numValue }, true);
    }
  };

  const handleInputChange = (coordinate, value) => {
    let numValue = parseInt(value, 10);
    if (isNaN(numValue) || numValue < 0) {
      numValue = 0;
    } else if (numValue > 10000000) {
      numValue = 10000000;
    }

    setCoordinates((prev) => ({
      ...prev,
      [coordinate]: numValue,
    }));
    if (isInitialized && onCoordinateChange) {
      onCoordinateChange({ ...coordinates, [coordinate]: numValue }, true);
    }
  };

  const handleSelectChange = (coordinate, value) => {
    const numValue = parseInt(value, 10);
    setCoordinates((prev) => ({
      ...prev,
      [coordinate]: numValue,
    }));
    if (isInitialized && onCoordinateChange) {
      onCoordinateChange({ ...coordinates, [coordinate]: numValue }, true);
    }
  };

  const randomizeCoordinates = () => {
    const maxCoordinate = 10000000;
    const newCoordinates = {
      x: Math.floor(Math.random() * maxCoordinate),
      y: Math.floor(Math.random() * maxCoordinate),
      z: Math.floor(Math.random() * maxCoordinate),
    };
    setCoordinates(newCoordinates);
    if (isInitialized && onCoordinateChange) {
      onCoordinateChange(newCoordinates, true);
    }
  };

  useEffect(() => {
    if (onCoordinateChange && isInitialized) {
      onCoordinateChange(coordinates, false);
    }
  }, [coordinates, onCoordinateChange, isInitialized]);

  useEffect(() => {
    randomizeCoordinates();
    setIsInitialized(true);
  }, []);

  const renderCoordinateGroup = (coordinate: string, label: string) => {
    const selectedIndex = updateSelectOption(coordinate, coordinates[coordinate]);
    const axisStyles = {
      x: {
        gradient: "from-blue-400 to-cyan-400",
        border: "border-blue-500/40",
        text: "text-blue-300",
        accent: "text-blue-400",
        ring: "focus:ring-blue-500",
      },
      y: {
        gradient: "from-purple-400 to-violet-400",
        border: "border-purple-500/40",
        text: "text-purple-300",
        accent: "text-purple-400",
        ring: "focus:ring-purple-500",
      },
      z: {
        gradient: "from-pink-400 to-rose-400",
        border: "border-pink-500/40",
        text: "text-pink-300",
        accent: "text-pink-400",
        ring: "focus:ring-pink-500",
      },
    };
    const style = axisStyles[coordinate as keyof typeof axisStyles];

    return (
      <div className="space-y-3" key={coordinate}>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-white">{label} Coordinate</h3>
          <div className={`text-xl sm:text-2xl font-mono ${style.accent} font-bold`}>{coordinates[coordinate].toLocaleString()}</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <select id={`${coordinate}-name`} className={`flex-1 bg-white/10 border ${style.border} rounded-lg px-4 py-3 text-white focus:ring-2 ${style.ring} focus:border-transparent backdrop-blur-sm`} value={selectedIndex >= 0 ? coordinateOptions[coordinate][selectedIndex].value : ""} onChange={(e) => handleSelectChange(coordinate, e.target.value)}>
            {coordinateOptions[coordinate].map((option, index) => (
              <option key={index} value={option.value} className="bg-gray-800 text-white">
                {option.name}
              </option>
            ))}
          </select>
          <input type="number" id={`${coordinate}-value`} name={coordinate} value={coordinates[coordinate]} className={`flex-1 bg-white/10 border ${style.border} rounded-lg px-4 py-3 text-white focus:ring-2 ${style.ring} focus:border-transparent backdrop-blur-sm`} min="0" max="10000000" onChange={(e) => handleInputChange(coordinate, e.target.value)} />
        </div>

        <div className="space-y-3">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${style.gradient} opacity-20 rounded-xl blur-sm`}></div>
            <div className="relative p-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="relative">
                <div className="absolute top-1 left-3 right-3 h-3 bg-white/10 rounded-xl"></div>
                <div className={`absolute top-1 left-3 right-3 h-3 bg-gradient-to-r ${style.gradient} rounded-xl transition-all duration-200 pointer-events-none z-10`} style={{ width: `calc(${(coordinates[coordinate] / 10000000) * 100}% - 12px)` }}></div>
                <input
                  type="range"
                  id={`${coordinate}-slider`}
                  name={coordinate}
                  min="0"
                  max="10000000"
                  value={coordinates[coordinate]}
                  className={`
                    relative z-20 w-full h-3 bg-transparent rounded-xl appearance-none cursor-pointer
                    [&::-webkit-slider-track]:bg-transparent
                    [&::-webkit-slider-track]:rounded-xl
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-6
                    [&::-webkit-slider-thumb]:h-6
                    [&::-webkit-slider-thumb]:bg-gradient-to-br
                    [&::-webkit-slider-thumb]:${style.gradient}
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:border-2
                    [&::-webkit-slider-thumb]:border-white/30
                    [&::-webkit-slider-thumb]:shadow-lg
                    [&::-webkit-slider-thumb]:hover:shadow-xl
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-webkit-slider-thumb]:transition-all
                    [&::-webkit-slider-thumb]:duration-200
                    [&::-webkit-slider-thumb]:-mt-1.5
                    [&::-moz-range-thumb]:w-6
                    [&::-moz-range-thumb]:h-6
                    [&::-moz-range-thumb]:bg-gradient-to-br
                    [&::-moz-range-thumb]:${style.gradient}
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:border-2
                    [&::-moz-range-thumb]:border-white/30
                    [&::-moz-range-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:shadow-lg
                    [&::-moz-range-thumb]:border-none
                    [&::-moz-range-track]:bg-transparent
                    [&::-moz-range-track]:border-none
                    [&::-moz-range-track]:h-3
                    transition-all
                    duration-200
                  `}
                  onChange={(e) => handleSliderChange(coordinate, e.target.value)}
                />
                <div className="flex justify-between mt-2 text-xs font-medium">
                  <span className={`${style.text} drop-shadow-sm`}>The Edge</span>
                  <span className={`text-center ${style.text}`}>{coordinateOptions[coordinate][selectedIndex >= 0 ? selectedIndex : 0]?.name || "Unknown Region"}</span>
                  <span className={`${style.text} drop-shadow-sm`}>The Unknown</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 relative">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 relative">
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-500/30 backdrop-blur-sm">{renderCoordinateGroup("x", "X")}</div>
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-purple-500/30 backdrop-blur-sm">{renderCoordinateGroup("y", "Y")}</div>
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-pink-500/30 backdrop-blur-sm md:col-span-2 lg:col-span-1">{renderCoordinateGroup("z", "Z")}</div>
      </div>

      <div className="w-full flex gap-4 relative z-10">
        <button type="submit" className="flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-95 shadow-lg backdrop-blur-sm">
          <span className="text-base sm:text-lg">🚀 Initialize Jump</span>
        </button>
        <button type="button" className="flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-95 shadow-lg backdrop-blur-sm" onClick={randomizeCoordinates}>
          <span className="text-base sm:text-lg">🎲 Random Location</span>
        </button>
      </div>

      {travelCost && formatResource && (
        <div className="w-full relative z-10">
          <div className={`w-full flex items-center justify-center gap-3 rounded-xl px-4 py-3 border backdrop-blur-sm text-sm ${canAfford ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"}`}>
            <div className="flex items-center gap-1">
              <AntimatterIcon size={14} color="#a855f7" />
              <span className="text-purple-400 font-medium">{formatResource(travelCost.antimatter)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Element115Icon size={14} color="#06b6d4" />
              <span className="text-cyan-400 font-medium">{formatResource(travelCost.element115)}</span>
            </div>
            <div className="flex items-center gap-1">
              <DeuteriumIcon size={14} color="#fb7185" />
              <span className="text-orange-400 font-medium">{formatResource(travelCost.deuterium)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoordinateSelector;
