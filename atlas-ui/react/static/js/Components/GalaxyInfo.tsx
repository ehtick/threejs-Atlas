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
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Galaxy Type */}
        <div className="bg-white/10 rounded-lg p-4 border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
          <div className="text-sm text-gray-300 mb-1">Type</div>
          <div className="text-xl font-bold text-blue-400">{galaxy.galaxy_type}</div>
        </div>

        {/* Number of Systems */}
        <div className="bg-white/10 rounded-lg p-4 border border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300">
          <div className="text-sm text-gray-300 mb-1">Solar Systems</div>
          <div className="text-xl font-bold text-purple-400">{galaxy.num_systems.toLocaleString()}</div>
        </div>

        {/* Black Holes */}
        <div className="bg-white/10 rounded-lg p-4 border border-pink-500/30 hover:border-pink-500/50 transition-colors duration-300">
          <div className="text-sm text-gray-300 mb-1">Black Holes</div>
          <div className="text-xl font-bold text-pink-400">{galaxy.black_holes.toLocaleString()}</div>
        </div>

        {/* Pulsars */}
        <div className="bg-white/10 rounded-lg p-4 border border-cyan-500/30 hover:border-cyan-500/50 transition-colors duration-300">
          <div className="text-sm text-gray-300 mb-1">Pulsars</div>
          <div className="text-xl font-bold text-cyan-400">{galaxy.pulsars.toLocaleString()}</div>
        </div>

        {/* Quasars */}
        <div className="bg-white/10 rounded-lg p-4 border border-indigo-500/30 hover:border-indigo-500/50 transition-colors duration-300">
          <div className="text-sm text-gray-300 mb-1">Quasars</div>
          <div className="text-xl font-bold text-indigo-400">{galaxy.quasars.toLocaleString()}</div>
        </div>

        {/* Additional Info */}
        <div className="bg-white/10 rounded-lg p-4 border border-gray-500/30 hover:border-gray-500/50 transition-colors duration-300">
          <div className="text-xs text-gray-400">
            *Black holes are grouped depending on their position
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalaxyInfo;