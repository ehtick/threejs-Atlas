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

  const renderCoordinateGroup = (coordinate, label) => {
    const selectedIndex = updateSelectOption(coordinate, coordinates[coordinate]);

    return (
      <div className="coordinate-group" key={coordinate}>
        <label htmlFor={`${coordinate}-name`}>{label} Coordinate Name</label>
        <select id={`${coordinate}-name`} className="coordinate-name" value={selectedIndex >= 0 ? coordinateOptions[coordinate][selectedIndex].value : ""} onChange={(e) => handleSelectChange(coordinate, e.target.value)}>
          {coordinateOptions[coordinate].map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>

        <input type="number" id={`${coordinate}-value`} name={coordinate} value={coordinates[coordinate]} className="coordinate-input" min="0" max="10000000" onChange={(e) => handleInputChange(coordinate, e.target.value)} />

        <input type="range" id={`${coordinate}-slider`} name={coordinate} min="0" max="10000000" value={coordinates[coordinate]} className="coordinate-slider" onChange={(e) => handleSliderChange(coordinate, e.target.value)} />
      </div>
    );
  };

  return (
    <div className="coordinate-selector">
      {renderCoordinateGroup("x", "X")}
      {renderCoordinateGroup("y", "Y")}
      {renderCoordinateGroup("z", "Z")}

      <div className="form-actions">
        <button type="submit" className="navigate-button">
          Initialize Jump
        </button>
        <button type="button" className="random-button" onClick={randomizeCoordinates}>
          Get me somewhere!
        </button>
      </div>
    </div>
  );
};

export default CoordinateSelector;
