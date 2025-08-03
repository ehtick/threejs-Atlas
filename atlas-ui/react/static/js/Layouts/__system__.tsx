import React, { useState, useEffect } from 'react';
import Header from '../Components/Header.tsx';
import SystemInfo from '../Components/SystemInfo.tsx';
import SystemVisualization from '../Components/SystemVisualization.tsx';
import PlanetsList from '../Components/PlanetsList.tsx';
import VersionFooter from '../Components/VersionFooter.tsx';

interface System {
  name: string;
  index: number;
  star_system_type: string;
  num_planets: number;
  stars: Array<{
    Type: string;
    Size: string;
    Color: string;
  }>;
  planets: Array<{
    name: string;
  }>;
}

interface Galaxy {
  name: string;
  coordinates: number[];
}

interface SystemLayoutProps {
  system: System;
  galaxy: Galaxy;
  system_url: string;
  version: string;
  system_index: number;
  image_url?: string;
  page: number;
}

const SystemLayout: React.FC<SystemLayoutProps> = ({
  system,
  galaxy,
  system_url,
  version,
  system_index,
  image_url,
  page
}) => {
  const [coordinates] = useState<string>(galaxy.coordinates.join(','));

  useEffect(() => {
    // Set coordinates and system index for historical data system
    document.body.setAttribute('data-coordinates', coordinates);
    document.body.setAttribute('data-system-index', system_index.toString());
  }, [coordinates, system_index]);

  const formatSystemName = (name: string) => {
    return name.replace(/_/g, ' ');
  };

  const formatGalaxyName = (name: string) => {
    return name.replace(/_/g, ' ');
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto">
      {/* Background Stars Effect */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        <Header />
        
        {/* Main Content Container */}
        <div className="w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8">
          
          {/* System Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              System '{formatSystemName(system.name)}'
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              at Galaxy '{formatGalaxyName(galaxy.name)}' - Coordinates {galaxy.coordinates.join(', ')}
            </p>
          </div>

          {/* System Information & Visualization */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6">
            <div className="flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8">
              
              {/* Mobile/Desktop: System Image - Fixed width for image */}
              <div className="order-1 lg:order-1">
                <SystemVisualization systemUrl={system_url} imageUrl={image_url} />
              </div>
              
              {/* Mobile/Desktop: System Info - Takes remaining space */}
              <div className="order-2 lg:order-2">
                <SystemInfo system={system} galaxy={galaxy} systemIndex={system_index} />
              </div>
              
            </div>
          </div>

          {/* Planets List */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Planets in '{formatSystemName(system.name)}'
            </h2>
            <PlanetsList planets={system.planets} coordinates={coordinates} systemIndex={system_index} />
          </div>

          {/* Back Button */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center">
            <button 
              onClick={() => window.location.href = `/galaxy/${page}`}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              <span className="text-base sm:text-lg">← Back to Galaxy '{formatGalaxyName(galaxy.name)}'</span>
            </button>
          </div>
        </div>
        
        <VersionFooter version={version} />
      </div>
    </div>
  );
};

export default SystemLayout;