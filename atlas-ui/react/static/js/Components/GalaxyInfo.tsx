import React from 'react';

interface Galaxy {
  name: string;
  coordinates: number[];
  galaxy_type: string;
  num_systems: number;
  black_holes: number;
  pulsars: number;
  quasars: number;
}

interface GalaxyInfoProps {
  galaxy: Galaxy;
}

const GalaxyInfo: React.FC<GalaxyInfoProps> = ({ galaxy }) => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Galaxy Information</h3>
      
      {/* Galaxy Type & Systems - Compact row */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-white/10 rounded-lg p-2 border border-blue-500/30">
          <div className="text-xs text-gray-200">Type</div>
          <div className="text-sm font-bold text-blue-300">{galaxy.galaxy_type}</div>
        </div>
        <div className="bg-white/10 rounded-lg p-2 border border-purple-500/30">
          <div className="text-xs text-gray-200">Solar Systems</div>
          <div className="text-sm font-bold text-purple-300">{galaxy.num_systems.toLocaleString()}</div>
        </div>
      </div>

      {/* Cosmic Objects - Compact grid */}
      <div className="bg-white/10 rounded-lg p-2 border border-gray-500/30">
        <div className="text-xs text-gray-200 mb-2">Cosmic Objects</div>
        <div className="grid grid-cols-3 gap-1">
          <div className="bg-white/5 rounded p-1.5 border border-pink-500/20">
            <div className="text-xs text-gray-300">Black Holes</div>
            <div className="text-xs font-bold text-pink-300">{galaxy.black_holes.toLocaleString()}</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-cyan-500/20">
            <div className="text-xs text-gray-300">Pulsars</div>
            <div className="text-xs font-bold text-cyan-300">{galaxy.pulsars.toLocaleString()}</div>
          </div>
          <div className="bg-white/5 rounded p-1.5 border border-indigo-500/20">
            <div className="text-xs text-gray-300">Quasars</div>
            <div className="text-xs font-bold text-indigo-300">{galaxy.quasars.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalaxyInfo;