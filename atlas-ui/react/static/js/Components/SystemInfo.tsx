import React, { useState } from 'react';

interface Star {
  Type: string;
  Size: string;
  Color: string;
}

interface System {
  name: string;
  index: number;
  star_system_type: string;
  num_planets: number;
  stars: Star[];
  planets: Array<{
    name: string;
  }>;
}

interface Galaxy {
  name: string;
  coordinates: number[];
}

interface SystemInfoProps {
  system: System;
  galaxy: Galaxy;
  systemIndex: number;
}

const SystemInfo: React.FC<SystemInfoProps> = ({ system, galaxy, systemIndex }) => {
  const [showLocalization, setShowLocalization] = useState(false);

  const formatName = (name: string) => {
    return name.replace(/_/g, ' ');
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">System Information</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 flex-1">
        
        {/* System Type */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-blue-500/30">
          <div className="text-xs sm:text-lg text-gray-300 mb-1">System Type</div>
          <div className="text-sm sm:text-3xl font-bold text-blue-400 capitalize">{system.star_system_type}</div>
        </div>

        {/* Number of Planets */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-purple-500/30">
          <div className="text-xs sm:text-lg text-gray-300 mb-1">Planets</div>
          <div className="text-sm sm:text-3xl font-bold text-purple-400">{system.num_planets}</div>
        </div>

        {/* Number of Stars */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-orange-500/30">
          <div className="text-xs sm:text-lg text-gray-300 mb-1">Stars</div>
          <div className="text-sm sm:text-3xl font-bold text-orange-400">{system.stars.length}</div>
        </div>

        {/* Stars Information - Spans remaining columns */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-yellow-500/30 col-span-2 lg:col-span-3">
          <div className="text-xs sm:text-lg text-gray-300 mb-2">Stellar Composition</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {system.stars.map((star, index) => (
              <div key={index} className="bg-white/5 rounded p-2 border border-yellow-500/20">
                <div className="text-xs text-gray-400">Star {index + 1}</div>
                <div className="text-xs sm:text-sm font-bold text-yellow-400">{star.Type}</div>
                <div className="text-xs text-gray-300">{star.Color}</div>
                <div className="text-xs text-gray-300">{star.Size}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Localization Toggle */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-gray-500/30 col-span-2 lg:col-span-3">
          <button 
            onClick={() => setShowLocalization(!showLocalization)}
            className="w-full text-left text-xs sm:text-sm text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            {showLocalization ? 'Hide' : 'View'} Localization Information
          </button>
          
          {showLocalization && (
            <div className="mt-3 pt-3 border-t border-gray-600/30 space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-400">System:</span>
                  <span className="text-white ml-2">{formatName(system.name)}</span>
                </div>
                <div>
                  <span className="text-gray-400">System ID:</span>
                  <span className="text-white ml-2">#{systemIndex + 1}</span>
                </div>
                <div>
                  <span className="text-gray-400">Galaxy:</span>
                  <span className="text-white ml-2">{formatName(galaxy.name)}</span>
                </div>
                <div>
                  <span className="text-gray-400">Coordinates:</span>
                  <span className="text-white ml-2">X: {galaxy.coordinates[0]}, Y: {galaxy.coordinates[1]}, Z: {galaxy.coordinates[2]}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;