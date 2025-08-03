import React, { useState } from 'react';

interface Planet {
  name: string;
  planet_type: string;
  atmosphere: string;
  life_forms: string;
  mass: number;
  diameter: number;
  density: number;
  gravity: number;
  orbital_radius: number;
  orbital_period_seconds: number;
  orbital_speed: number;
  axial_tilt: number;
  rotation_period_seconds: number;
  surface_temperature: number;
  elements: string[];
}

interface System {
  name: string;
  index: number;
}

interface Galaxy {
  name: string;
  coordinates: number[];
}

interface PlanetInfoProps {
  planet: Planet;
  system: System;
  galaxy: Galaxy;
}

const PlanetInfo: React.FC<PlanetInfoProps> = ({ planet, system, galaxy }) => {
  const [showLocalization, setShowLocalization] = useState(false);

  const formatName = (name: string) => {
    return name.replace(/_/g, ' ');
  };

  const formatPeriod = (seconds: number) => {
    const days = seconds / (60 * 60 * 24);
    if (days < 30) {
      return `${days.toFixed(2)} days`;
    } else if (days < 365) {
      return `${(days / 30).toFixed(2)} months`;
    } else {
      return `${(days / 365).toFixed(2)} years`;
    }
  };

  const formatTemperature = (celsius: number) => {
    const fahrenheit = celsius * 9/5 + 32;
    return `${celsius.toFixed(1)}°C (${fahrenheit.toFixed(1)}°F)`;
  };

  const formatMass = (mass: number) => {
    return `${mass.toExponential(2)} kg`;
  };

  const formatDistance = (distance: number) => {
    if (distance >= 1000) {
      return `${(distance / 1000).toFixed(2)} km`;
    }
    return `${distance.toFixed(2)} m`;
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Planet Information</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 flex-1">
        
        {/* Planet Type */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-blue-500/30">
          <div className="text-xs sm:text-lg text-gray-200 mb-1">Type</div>
          <div className="text-sm sm:text-3xl font-bold text-blue-300 capitalize">{planet.planet_type}</div>
        </div>

        {/* Atmosphere */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-purple-500/30">
          <div className="text-xs sm:text-lg text-gray-200 mb-1">Atmosphere</div>
          <div className="text-sm sm:text-3xl font-bold text-purple-300 capitalize">{planet.atmosphere}</div>
        </div>

        {/* Life Forms */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-green-500/30">
          <div className="text-xs sm:text-lg text-gray-200 mb-1">Life Forms</div>
          <div className="text-sm sm:text-3xl font-bold text-green-300 capitalize">{planet.life_forms}</div>
        </div>

        {/* Physical Properties */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-orange-500/30 col-span-2 lg:col-span-3">
          <div className="text-xs sm:text-lg text-gray-200 mb-3">Physical Properties</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="bg-white/5 rounded p-2 border border-orange-500/20">
              <div className="text-xs text-gray-300">Mass</div>
              <div className="text-xs sm:text-sm font-bold text-orange-300">{formatMass(planet.mass)}</div>
            </div>
            <div className="bg-white/5 rounded p-2 border border-orange-500/20">
              <div className="text-xs text-gray-300">Diameter</div>
              <div className="text-xs sm:text-sm font-bold text-orange-300">{formatDistance(planet.diameter)}</div>
            </div>
            <div className="bg-white/5 rounded p-2 border border-orange-500/20">
              <div className="text-xs text-gray-300">Density</div>
              <div className="text-xs sm:text-sm font-bold text-orange-300">{planet.density.toFixed(2)} kg/m³</div>
            </div>
            <div className="bg-white/5 rounded p-2 border border-orange-500/20">
              <div className="text-xs text-gray-300">Gravity</div>
              <div className="text-xs sm:text-sm font-bold text-orange-300">{planet.gravity.toFixed(2)} m/s²</div>
            </div>
          </div>
        </div>

        {/* Orbital Properties */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-cyan-500/30 col-span-2 lg:col-span-3">
          <div className="text-xs sm:text-lg text-gray-200 mb-3">Orbital Properties</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="bg-white/5 rounded p-2 border border-cyan-500/20">
              <div className="text-xs text-gray-300">Orbital Radius</div>
              <div className="text-xs sm:text-sm font-bold text-cyan-300">{planet.orbital_radius.toFixed(2)} AU</div>
            </div>
            <div className="bg-white/5 rounded p-2 border border-cyan-500/20">
              <div className="text-xs text-gray-300">Orbital Period</div>
              <div className="text-xs sm:text-sm font-bold text-cyan-300">{formatPeriod(planet.orbital_period_seconds)}</div>
            </div>
            <div className="bg-white/5 rounded p-2 border border-cyan-500/20">
              <div className="text-xs text-gray-300">Orbital Speed</div>
              <div className="text-xs sm:text-sm font-bold text-cyan-300">{planet.orbital_speed.toFixed(2)} m/s</div>
            </div>
            <div className="bg-white/5 rounded p-2 border border-cyan-500/20">
              <div className="text-xs text-gray-300">Axial Tilt</div>
              <div className="text-xs sm:text-sm font-bold text-cyan-300">{planet.axial_tilt.toFixed(2)}°</div>
            </div>
          </div>
        </div>

        {/* Surface Conditions */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-red-500/30 col-span-2 lg:col-span-2">
          <div className="text-xs sm:text-lg text-gray-200 mb-3">Surface Conditions</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bg-white/5 rounded p-2 border border-red-500/20">
              <div className="text-xs text-gray-300">Temperature</div>
              <div className="text-xs sm:text-sm font-bold text-red-300">{formatTemperature(planet.surface_temperature)}</div>
            </div>
            <div className="bg-white/5 rounded p-2 border border-red-500/20">
              <div className="text-xs text-gray-300">Rotation Period</div>
              <div className="text-xs sm:text-sm font-bold text-red-300">{formatPeriod(planet.rotation_period_seconds)}</div>
            </div>
          </div>
        </div>

        {/* Elements */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-yellow-500/30 col-span-2 lg:col-span-1">
          <div className="text-xs sm:text-lg text-gray-200 mb-2">Elements</div>
          <div className="flex flex-wrap gap-1">
            {planet.elements.slice(0, 6).map((element, index) => (
              <span key={index} className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded border border-yellow-500/30">
                {element}
              </span>
            ))}
            {planet.elements.length > 6 && (
              <span className="text-xs text-gray-300 px-2 py-1">
                +{planet.elements.length - 6} more
              </span>
            )}
          </div>
          
          {/* Localization Toggle - Inside Elements */}
          <div className="border-t border-yellow-500/20 pt-2 mt-3">
            <button 
              onClick={() => setShowLocalization(!showLocalization)}
              className="text-xs text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              {showLocalization ? '▼' : '▶'} Technical Data
            </button>
            
            {showLocalization && (
              <div className="mt-2 grid grid-cols-1 gap-2 text-xs">
                <div className="bg-white/5 rounded p-1">
                  <span className="text-yellow-300">Planet:</span>
                  <div className="text-white truncate">{formatName(planet.name)}</div>
                </div>
                <div className="bg-white/5 rounded p-1">
                  <span className="text-yellow-300">System:</span>
                  <div className="text-white truncate">{formatName(system.name)}</div>
                </div>
                <div className="bg-white/5 rounded p-1">
                  <span className="text-yellow-300">System ID:</span>
                  <div className="text-white">#{system.index + 1}</div>
                </div>
                <div className="bg-white/5 rounded p-1">
                  <span className="text-yellow-300">Galaxy:</span>
                  <div className="text-white truncate">{formatName(galaxy.name)}</div>
                </div>
                <div className="bg-white/5 rounded p-1">
                  <span className="text-yellow-300">Coords:</span>
                  <div className="text-white">{galaxy.coordinates.join(', ')}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfo;