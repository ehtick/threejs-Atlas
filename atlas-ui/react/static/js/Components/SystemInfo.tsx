import React, { useState } from "react";
import SolarSystem3DViewer from "./SolarSystem3DViewer.tsx";
import SaveLocationButton from "./SaveLocationButton.tsx";

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
    planet_type: string;
    diameter: number;
    orbital_radius: number;
    orbital_period_seconds: number;
    orbital_speed: number;
    axial_tilt: number;
    rotation_period_seconds: number;
    initial_orbital_angle: number;
    eccentricity_factor: number;
    mass: number;
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
  cosmicOriginTime: number;
}

const SystemInfo: React.FC<SystemInfoProps> = ({ system, galaxy, systemIndex, cosmicOriginTime }) => {
  const formatName = (name: string) => {
    return name.replace(/_/g, " ");
  };

  return (
    <div className="h-full flex flex-col relative">
      <div className="absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10">VISITED</div>

      <div className="flex items-center justify-between mb-3 pr-16">
        <h3 className="text-lg sm:text-xl font-bold text-white">System Information</h3>
        <SaveLocationButton type="system" name={system.name} coordinates={galaxy.coordinates.join(",")} systemIndex={systemIndex} className="text-xs" />
      </div>

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

      <div className="bg-white/10 rounded-lg p-3 border border-gray-500/30 mb-3 col-span-3">
        <SolarSystem3DViewer planets={system.planets} stars={system.stars} systemName={system.name} cosmicOriginTime={cosmicOriginTime} />
      </div>

      <div className="bg-white/10 rounded-lg p-2 border border-yellow-500/30">
        <div className="text-xs text-gray-200 mb-2">Stellar Composition</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {system.stars.map((star, index) => (
            <div key={index} className="bg-white/5 rounded p-1.5 border border-yellow-500/20">
              <div className="text-xs text-gray-300">Star {index + 1}</div>
              <div className="text-xs font-bold text-yellow-300">{star.Type}</div>
              <div className="text-xs text-gray-300">
                {star.Color} • {star.Size}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="text-xs text-gray-400 mb-2">Technical Data</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">Status:</span>
            <div className="text-green-400 font-medium">Visited</div>
          </div>
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">System:</span>
            <div className="text-white truncate font-medium">{formatName(system.name)}</div>
          </div>
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">System ID:</span>
            <div className="text-white font-medium">#{systemIndex + 1}</div>
          </div>
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">Galaxy:</span>
            <div className="text-white truncate font-medium">{formatName(galaxy.name)}</div>
          </div>
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">Coordinates:</span>
            <div className="text-white font-medium">{galaxy.coordinates.join(", ")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;
