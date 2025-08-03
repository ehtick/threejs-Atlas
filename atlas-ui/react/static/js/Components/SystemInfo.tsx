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


interface SystemInfoProps {
  system: System;
}

const SystemInfo: React.FC<SystemInfoProps> = ({ system }) => {

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3">System Information</h3>
      
      {/* Main characteristics - Compact row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-white/10 rounded-lg p-2 border border-blue-500/30">
          <div className="text-xs text-gray-200">System Type</div>
          <div className="text-sm font-bold text-blue-300 capitalize">{system.star_system_type}</div>
        </div>
        <div className="bg-white/10 rounded-lg p-2 border border-purple-500/30">
          <div className="text-xs text-gray-200">Planets</div>
          <div className="text-sm font-bold text-purple-300">{system.num_planets}</div>
        </div>
        <div className="bg-white/10 rounded-lg p-2 border border-orange-500/30">
          <div className="text-xs text-gray-200">Stars</div>
          <div className="text-sm font-bold text-orange-300">{system.stars.length}</div>
        </div>
      </div>

      {/* Stellar Composition - Compact grid */}
      <div className="bg-white/10 rounded-lg p-2 border border-yellow-500/30">
        <div className="text-xs text-gray-200 mb-2">Stellar Composition</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {system.stars.map((star, index) => (
            <div key={index} className="bg-white/5 rounded p-1.5 border border-yellow-500/20">
              <div className="text-xs text-gray-300">Star {index + 1}</div>
              <div className="text-xs font-bold text-yellow-300">{star.Type}</div>
              <div className="text-xs text-gray-300">{star.Color} • {star.Size}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;