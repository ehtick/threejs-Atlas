import React from 'react';
import Universe3DViewer from './Universe3DViewer.tsx';

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
  
  const formatName = (name: string) => {
    return name.replace(/_/g, ' ');
  };
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

      {/* Universe Location Viewer - Full width */}
      <div className="bg-white/10 rounded-lg p-3 border border-gray-500/30 mb-3 col-span-2">
        <Universe3DViewer coordinates={galaxy.coordinates} galaxyName={galaxy.name} />
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

      {/* Technical Data - Always visible */}
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="text-xs text-gray-400 mb-2">Technical Data</div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-xs">
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

export default GalaxyInfo;