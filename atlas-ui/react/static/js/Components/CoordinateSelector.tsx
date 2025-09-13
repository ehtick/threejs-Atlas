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
  onCoordinateChange?: (coordinates: Coordinates) => void;
  travelCost?: { antimatter: number; element115: number; deuterium: number } | null;
  canAfford?: boolean;
  formatResource?: (value: number) => string;
  efficiency?: number;
}

const CoordinateSelector: React.FC<CoordinateSelectorProps> = ({
  onCoordinateChange,
  travelCost,
  canAfford,
  formatResource,
  efficiency
}) => {
  const [coordinates, setCoordinates] = useState({
    x: 1000000,
    y: 1000000,
    z: 1000000,
  });

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
  };

  const handleSelectChange = (coordinate, value) => {
    const numValue = parseInt(value, 10);
    setCoordinates((prev) => ({
      ...prev,
      [coordinate]: numValue,
    }));
  };

  const randomizeCoordinates = () => {
    const maxCoordinate = 10000000;
    const newCoordinates = {
      x: Math.floor(Math.random() * maxCoordinate),
      y: Math.floor(Math.random() * maxCoordinate),
      z: Math.floor(Math.random() * maxCoordinate),
    };
    setCoordinates(newCoordinates);
  };

  useEffect(() => {
    if (onCoordinateChange) {
      onCoordinateChange(coordinates);
    }
  }, [coordinates, onCoordinateChange]);

  useEffect(() => {
    randomizeCoordinates();
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
      <div className="space-y-4" key={coordinate}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-white">{label} Coordinate</h3>
          <div className={`text-xl sm:text-2xl font-mono ${style.accent} font-bold`}>{coordinates[coordinate].toLocaleString()}</div>
        </div>

        <div className="space-y-2">
          <label htmlFor={`${coordinate}-name`} className="block text-sm font-medium text-gray-300">
            Region Name
          </label>
          <select id={`${coordinate}-name`} className={`w-full bg-white/10 border ${style.border} rounded-lg px-4 py-3 text-white focus:ring-2 ${style.ring} focus:border-transparent backdrop-blur-sm`} value={selectedIndex >= 0 ? coordinateOptions[coordinate][selectedIndex].value : ""} onChange={(e) => handleSelectChange(coordinate, e.target.value)}>
            {coordinateOptions[coordinate].map((option, index) => (
              <option key={index} value={option.value} className="bg-gray-800 text-white">
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor={`${coordinate}-value`} className="block text-sm font-medium text-gray-300">
            Precise Coordinate
          </label>
          <input type="number" id={`${coordinate}-value`} name={coordinate} value={coordinates[coordinate]} className={`w-full bg-white/10 border ${style.border} rounded-lg px-4 py-3 text-white focus:ring-2 ${style.ring} focus:border-transparent backdrop-blur-sm`} min="0" max="10000000" onChange={(e) => handleInputChange(coordinate, e.target.value)} />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-300">Quick Adjust</label>
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${style.gradient} opacity-20 rounded-xl blur-sm`}></div>
            <div className="relative p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
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
                <div className="flex justify-between mt-3 text-xs font-medium">
                  <span className={`${style.text} drop-shadow-sm`}>The Edge</span>
                  <span className={`text-gray-400 text-center ${style.text}`}>{coordinateOptions[coordinate][selectedIndex >= 0 ? selectedIndex : 0]?.name || "Unknown Region"}</span>
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
    <div className="w-full space-y-6 sm:space-y-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-500/30 backdrop-blur-sm">{renderCoordinateGroup("x", "X")}</div>
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-purple-500/30 backdrop-blur-sm">{renderCoordinateGroup("y", "Y")}</div>
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-pink-500/30 backdrop-blur-sm md:col-span-2 lg:col-span-1">{renderCoordinateGroup("z", "Z")}</div>
      </div>

      {travelCost && formatResource && (
        <div className="flex justify-center">
          <div className={`inline-flex items-center gap-3 rounded-full px-4 py-2 border backdrop-blur-sm text-xs ${canAfford ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" className={`animate-spin ${canAfford ? 'text-emerald-500' : 'text-red-500'}`}>
              <path fill="currentColor" d="M12.735 14.654a.75.75 0 0 1-.23-1.44c.224-.094.441-.237.645-.44a.75.75 0 0 1 .996-.058a.75.75 0 0 1 .705.954c-.21.746-.6 1.477-1.105 2.147a.75.75 0 0 1-1.197-.903q.098-.13.186-.26m-2.248.041a.75.75 0 0 0 .953-.707a.75.75 0 0 0-.058-.994a2 2 0 0 1-.442-.646a.75.75 0 0 0-1.438.23a7 7 0 0 1-.26-.186a.75.75 0 0 0-.903 1.198c.67.505 1.4.894 2.148 1.105m-3.811-2.749a.75.75 0 0 0 1.18-.925a8 8 0 0 1-1.01-1.677a.75.75 0 1 0-1.372.604c.317.72.728 1.394 1.202 1.998M4.84 7.672a.75.75 0 0 0 1.49-.178a5.1 5.1 0 0 1 .108-1.862a.75.75 0 0 0-1.454-.366a6.6 6.6 0 0 0-.144 2.406M6.008 3.08a.75.75 0 1 0 1.218.875q.265-.37.62-.727a.75.75 0 0 0-1.06-1.061a7.4 7.4 0 0 0-.778.912m5.755 6.007a7 7 0 0 0-.187.26a.75.75 0 0 1 .23 1.439a2 2 0 0 0-.645.441a.75.75 0 0 1-.995.058a.752.752 0 0 1-.706-.954c.211-.746.6-1.477 1.105-2.147a.75.75 0 0 1 1.198.903m2.062.219a.75.75 0 0 0-.954.707a.75.75 0 0 0 .059.994c.204.204.347.421.441.645a.75.75 0 0 0 1.439-.23q.13.09.26.187a.75.75 0 0 0 .902-1.198c-.67-.505-1.4-.894-2.147-1.105m3.81 2.749a.75.75 0 1 0-1.18.925c.4.511.746 1.079 1.01 1.677a.75.75 0 0 0 1.372-.604a9.4 9.4 0 0 0-1.202-1.998m1.837 4.274a.75.75 0 1 0-1.49.178a5.1 5.1 0 0 1-.109 1.862a.75.75 0 0 0 1.455.366a6.6 6.6 0 0 0 .143-2.406m-1.167 4.592a.75.75 0 0 0-1.218-.875a6 6 0 0 1-.621.727a.75.75 0 0 0 1.06 1.06q.44-.439.779-.911M12.082 7.573a.75.75 0 0 1 .127-1.053a9.4 9.4 0 0 1 1.998-1.202a.75.75 0 0 1 .604 1.373a8 8 0 0 0-1.677 1.01a.75.75 0 0 1-1.053-.128m3.747-2.056a.75.75 0 0 1 .656-.833a6.6 6.6 0 0 1 2.405.143a.75.75 0 1 1-.366 1.455a5.1 5.1 0 0 0-1.862-.109a.75.75 0 0 1-.834-.656m4.203.506a.75.75 0 0 1 1.046-.171q.472.339.912.778a.75.75 0 1 1-1.06 1.06a6 6 0 0 0-.728-.62a.75.75 0 0 1-.17-1.047M12.103 17.48a.75.75 0 0 0-.926-1.18A8 8 0 0 1 9.5 17.31a.75.75 0 1 0 .604 1.372a9.4 9.4 0 0 0 1.999-1.202m-4.275 1.836a.75.75 0 1 0-.178-1.49a5.1 5.1 0 0 1-1.862-.108a.75.75 0 1 0-.366 1.454a6.6 6.6 0 0 0 2.406.144m-4.592-1.168a.75.75 0 1 0 .875-1.218a6 6 0 0 1-.727-.62a.75.75 0 0 0-1.06 1.06q.439.44.912.778" opacity={0.5}></path>
              <path fill="currentColor" d="M8.928 12.453c.406.836 1.016 1.541 1.825 1.942c-.793.183-1.71.22-2.648.087C5.315 14.087 2.75 12.284 2.75 9a.75.75 0 0 0-1.5 0c0 4.316 3.436 6.513 6.645 6.968c1.612.228 3.27.042 4.558-.584c.868-.422 1.596-1.065 1.988-1.921c.142.741.162 1.578.041 2.432c-.395 2.79-2.198 5.355-5.482 5.355a.75.75 0 0 0 0 1.5c4.316 0 6.513-3.436 6.968-6.645c.228-1.612.042-3.27-.584-4.558c-.346-.712-.84-1.33-1.48-1.745a7.7 7.7 0 0 1 1.99.027c2.792.396 5.356 2.198 5.356 5.483a.75.75 0 0 0 1.5 0c0-4.316-3.436-6.513-6.645-6.968c-1.612-.228-3.27-.043-4.558.584c-.692.336-1.294.812-1.709 1.425a7.6 7.6 0 0 1-.009-2.248c.396-2.79 2.198-5.355 5.483-5.355a.75.75 0 0 0 0-1.5c-4.316 0-6.513 3.436-6.968 6.645c-.228 1.612-.043 3.27.584 4.558"></path>
            </svg>
            <div className="flex items-center gap-1">
              <AntimatterIcon size={12} color="#a855f7" />
              <span className="text-purple-400 font-medium">{formatResource(travelCost.antimatter)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Element115Icon size={12} color="#06b6d4" />
              <span className="text-cyan-400 font-medium">{formatResource(travelCost.element115)}</span>
            </div>
            <div className="flex items-center gap-1">
              <DeuteriumIcon size={12} color="#fb7185" />
              <span className="text-orange-400 font-medium">{formatResource(travelCost.deuterium)}</span>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
        <button type="submit" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm">
          <span className="text-base sm:text-lg">🚀 Initialize Jump</span>
        </button>
        <button type="button" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm" onClick={randomizeCoordinates}>
          <span className="text-base sm:text-lg">🎲 Get me somewhere!</span>
        </button>
      </div>
    </div>
  );
};

export default CoordinateSelector;
