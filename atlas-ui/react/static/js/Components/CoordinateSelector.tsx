import React, { useState, useEffect } from "react";

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

interface CoordinateSelectorProps {
  onCoordinateChange?: (coordinates: Coordinates) => void;
}

const CoordinateSelector: React.FC<CoordinateSelectorProps> = ({ onCoordinateChange }) => {
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
    // Initialize with random coordinates on mount
    randomizeCoordinates();
  }, []);

  const renderCoordinateGroup = (coordinate: string, label: string) => {
    const selectedIndex = updateSelectOption(coordinate, coordinates[coordinate]);
    const axisStyles = {
      x: {
        gradient: 'from-blue-400 to-cyan-400',
        border: 'border-blue-500/40',
        text: 'text-blue-300',
        accent: 'text-blue-400',
        ring: 'focus:ring-blue-500'
      },
      y: {
        gradient: 'from-purple-400 to-violet-400', 
        border: 'border-purple-500/40',
        text: 'text-purple-300',
        accent: 'text-purple-400',
        ring: 'focus:ring-purple-500'
      },
      z: {
        gradient: 'from-pink-400 to-rose-400',
        border: 'border-pink-500/40', 
        text: 'text-pink-300',
        accent: 'text-pink-400',
        ring: 'focus:ring-pink-500'
      }
    };
    const style = axisStyles[coordinate as keyof typeof axisStyles];

    return (
      <div className="space-y-4" key={coordinate}>
        {/* Coordinate Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {label} Coordinate
          </h3>
          <div className={`text-2xl sm:text-3xl font-mono ${style.accent} font-bold`}>
            {coordinates[coordinate].toLocaleString()}
          </div>
        </div>

        {/* Region Selector */}
        <div className="space-y-2">
          <label htmlFor={`${coordinate}-name`} className="block text-sm font-medium text-gray-300">
            Region Name
          </label>
          <select 
            id={`${coordinate}-name`} 
            className={`w-full bg-white/10 border ${style.border} rounded-lg px-4 py-3 text-white focus:ring-2 ${style.ring} focus:border-transparent backdrop-blur-sm`}
            value={selectedIndex >= 0 ? coordinateOptions[coordinate][selectedIndex].value : ""} 
            onChange={(e) => handleSelectChange(coordinate, e.target.value)}
          >
            {coordinateOptions[coordinate].map((option, index) => (
              <option key={index} value={option.value} className="bg-gray-800 text-white">
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Numeric Input */}
        <div className="space-y-2">
          <label htmlFor={`${coordinate}-value`} className="block text-sm font-medium text-gray-300">
            Precise Coordinate
          </label>
          <input 
            type="number" 
            id={`${coordinate}-value`} 
            name={coordinate} 
            value={coordinates[coordinate]} 
            className={`w-full bg-white/10 border ${style.border} rounded-lg px-4 py-3 text-white focus:ring-2 ${style.ring} focus:border-transparent backdrop-blur-sm`}
            min="0" 
            max="10000000" 
            onChange={(e) => handleInputChange(coordinate, e.target.value)} 
          />
        </div>

        {/* Range Slider */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Quick Adjust</label>
          <input 
            type="range" 
            id={`${coordinate}-slider`} 
            name={coordinate} 
            min="0" 
            max="10000000" 
            value={coordinates[coordinate]} 
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
            onChange={(e) => handleSliderChange(coordinate, e.target.value)} 
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>The Edge</span>
            <span>The Unknown</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      {/* Coordinate Groups */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-blue-500/30 backdrop-blur-sm">
          {renderCoordinateGroup("x", "X")}
        </div>
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-purple-500/30 backdrop-blur-sm">
          {renderCoordinateGroup("y", "Y")}
        </div>
        <div className="w-full bg-white/5 rounded-xl p-3 sm:p-4 lg:p-6 border border-pink-500/30 backdrop-blur-sm">
          {renderCoordinateGroup("z", "Z")}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          type="submit" 
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
        >
          <span className="text-base sm:text-lg">🚀 Initialize Jump</span>
        </button>
        <button 
          type="button" 
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
          onClick={randomizeCoordinates}
        >
          <span className="text-base sm:text-lg">🎲 Get me somewhere!</span>
        </button>
      </div>
    </div>
  );
};

export default CoordinateSelector;
