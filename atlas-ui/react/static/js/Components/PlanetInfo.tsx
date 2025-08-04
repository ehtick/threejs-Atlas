import React, { useState } from 'react';
import SaveLocationButton from './SaveLocationButton.tsx';

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
  const [showAllElements, setShowAllElements] = useState(false);

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
    <div className="h-full flex flex-col relative">
      {/* VISITED Badge */}
      <div className="absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10">
        VISITED
      </div>
      
      <div className="flex items-center justify-between mb-3 pr-16">
        <h3 className="text-lg sm:text-xl font-bold text-white">Planet Information</h3>
        <SaveLocationButton
          type="planet"
          name={planet.name}
          coordinates={galaxy.coordinates.join(',')}
          systemIndex={system.index}
          planetName={planet.name}
          className="text-xs"
        />
      </div>
      
      {/* Main characteristics - Compact row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-white/10 rounded-lg p-2 border border-blue-500/30">
          <div className="text-xs text-gray-200">Type</div>
          <div className="text-sm font-bold text-blue-300 capitalize">{planet.planet_type}</div>
        </div>
        <div className="bg-white/10 rounded-lg p-2 border border-purple-500/30">
          <div className="text-xs text-gray-200">Atmosphere</div>
          <div className="text-sm font-bold text-purple-300 capitalize">{planet.atmosphere}</div>
        </div>
        <div className="bg-white/10 rounded-lg p-2 border border-green-500/30">
          <div className="text-xs text-gray-200">Life Forms</div>
          <div className="text-sm font-bold text-green-300 capitalize">{planet.life_forms}</div>
        </div>
      </div>

      {/* Physical Properties - Compact grid */}
      <div className="bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3">
        <div className="text-xs text-gray-200 mb-2">Physical Properties</div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          <div className="bg-white/5 rounded p-1.5 border border-orange-500/20">
            <div className="text-xs text-gray-300">Mass</div>
            <div className="text-xs font-bold text-orange-300">{formatMass(planet.mass)}</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-orange-500/20">
            <div className="text-xs text-gray-300">Diameter</div>
            <div className="text-xs font-bold text-orange-300">{formatDistance(planet.diameter)}</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-orange-500/20">
            <div className="text-xs text-gray-300">Density</div>
            <div className="text-xs font-bold text-orange-300">{planet.density.toFixed(2)} kg/m³</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-orange-500/20">
            <div className="text-xs text-gray-300">Gravity</div>
            <div className="text-xs font-bold text-orange-300">{planet.gravity.toFixed(2)} m/s²</div>
          </div>
        </div>
      </div>

      {/* Orbital Properties - Compact grid */}
      <div className="bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3">
        <div className="text-xs text-gray-200 mb-2">Orbital Properties</div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          <div className="bg-white/5 rounded p-1.5 border border-cyan-500/20">
            <div className="text-xs text-gray-300">Radius</div>
            <div className="text-xs font-bold text-cyan-300">{planet.orbital_radius.toFixed(2)} AU</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-cyan-500/20">
            <div className="text-xs text-gray-300">Period</div>
            <div className="text-xs font-bold text-cyan-300">{formatPeriod(planet.orbital_period_seconds)}</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-cyan-500/20">
            <div className="text-xs text-gray-300">Speed</div>
            <div className="text-xs font-bold text-cyan-300">{planet.orbital_speed.toFixed(2)} m/s</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-cyan-500/20">
            <div className="text-xs text-gray-300">Tilt</div>
            <div className="text-xs font-bold text-cyan-300">{planet.axial_tilt.toFixed(2)}°</div>
          </div>
        </div>
      </div>

      {/* Surface & Elements - Combined row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="bg-white/10 rounded-lg p-2 border border-red-500/30">
          <div className="text-xs text-gray-200 mb-2">Surface Conditions</div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-white/5 rounded p-1.5 border border-red-500/20">
              <div className="text-xs text-gray-300">Temperature</div>
              <div className="text-xs font-bold text-red-300">{formatTemperature(planet.surface_temperature)}</div>
            </div>
            <div className="bg-white/5 rounded p-1.5 border border-red-500/20">
              <div className="text-xs text-gray-300">Rotation</div>
              <div className="text-xs font-bold text-red-300">{formatPeriod(planet.rotation_period_seconds)}</div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 rounded-lg p-2 border border-yellow-500/30">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-gray-200">Elements ({planet.elements.length})</div>
            {planet.elements.length > 4 && (
              <button 
                onClick={() => setShowAllElements(!showAllElements)}
                className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
              >
                {showAllElements ? '▲ Less' : '▼ All'}
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-1">
            {(showAllElements ? planet.elements : planet.elements.slice(0, 4)).map((element, index) => (
              <span key={index} className="text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30">
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Data - Always visible */}
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="text-xs text-gray-400 mb-2">Technical Data</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">Status:</span>
            <div className="text-green-400 font-medium">Visited</div>
          </div>
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">Planet:</span>
            <div className="text-white truncate font-medium">{formatName(planet.name)}</div>
          </div>
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">System:</span>
            <div className="text-white truncate font-medium">{formatName(system.name)}</div>
          </div>
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">System ID:</span>
            <div className="text-white font-medium">#{system.index + 1}</div>
          </div>
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">Galaxy:</span>
            <div className="text-white truncate font-medium">{formatName(galaxy.name)}</div>
          </div>
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">Coordinates:</span>
            <div className="text-white font-medium">{galaxy.coordinates.join(', ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetInfo;