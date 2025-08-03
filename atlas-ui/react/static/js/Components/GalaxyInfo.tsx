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
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Galaxy Information</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 flex-1">
        
        {/* Galaxy Type */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-blue-500/30">
          <div className="text-xs sm:text-lg text-gray-300 mb-1">Type</div>
          <div className="text-sm sm:text-3xl font-bold text-blue-400">{galaxy.galaxy_type}</div>
        </div>

        {/* Number of Systems */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-purple-500/30">
          <div className="text-xs sm:text-lg text-gray-300 mb-1">Solar Systems</div>
          <div className="text-sm sm:text-3xl font-bold text-purple-400">{galaxy.num_systems.toLocaleString()}</div>
        </div>

        {/* Black Holes */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-pink-500/30 relative">
          <div className="text-xs sm:text-lg text-gray-300 mb-1">Black Holes</div>
          <div className="text-sm sm:text-3xl font-bold text-pink-400">{galaxy.black_holes.toLocaleString()}</div>
          <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded shadow-lg">
            Grouped by position
          </div>
        </div>

        {/* Pulsars */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-cyan-500/30">
          <div className="text-xs sm:text-lg text-gray-300 mb-1">Pulsars</div>
          <div className="text-sm sm:text-3xl font-bold text-cyan-400">{galaxy.pulsars.toLocaleString()}</div>
        </div>

        {/* Quasars */}
        <div className="bg-white/10 rounded-lg p-2 sm:p-3 border border-indigo-500/30">
          <div className="text-xs sm:text-lg text-gray-300 mb-1">Quasars</div>
          <div className="text-sm sm:text-3xl font-bold text-indigo-400">{galaxy.quasars.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default GalaxyInfo;