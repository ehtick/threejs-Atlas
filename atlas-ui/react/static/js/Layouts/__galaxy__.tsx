import React, { useState, useEffect } from 'react';
import Header from '../Components/Header.tsx';
import GalaxyInfo from '../Components/GalaxyInfo.tsx';
import GalaxyVisualization from '../Components/GalaxyVisualization.tsx';
import SystemsList from '../Components/SystemsList.tsx';
import GalaxyNavigation from '../Components/GalaxyNavigation.tsx';
import Pagination from '../Components/Pagination.tsx';
import VersionFooter from '../Components/VersionFooter.tsx';
import SpaceshipPanel from '../Components/SpaceshipPanel.tsx';

interface Galaxy {
  name: string;
  coordinates: number[];
  galaxy_type: string;
  num_systems: number;
  black_holes: number;
  pulsars: number;
  quasars: number;
}

interface System {
  index: number;
  number: number;
  name: string;
}

interface GalaxyLayoutProps {
  galaxy: Galaxy;
  systems: System[];
  galaxy_url: string;
  version: string;
  page: number;
  prev_page?: number;
  next_page?: number;
  finish: number;
  image_url?: string;
}

const GalaxyLayout: React.FC<GalaxyLayoutProps> = ({
  galaxy,
  systems,
  galaxy_url,
  version,
  page,
  prev_page,
  next_page,
  finish,
  image_url
}) => {
  const [coordinates] = useState<string>(galaxy.coordinates.join(','));

  useEffect(() => {
    // Set coordinates in document body for historical data system
    document.body.setAttribute('data-coordinates', coordinates);
  }, [coordinates]);

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
          
          {/* Galaxy Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Galaxy '{formatGalaxyName(galaxy.name)}'
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              at Coordinates {galaxy.coordinates.join(', ')}
            </p>
          </div>

          {/* Galaxy Navigation */}
          <GalaxyNavigation 
            currentGalaxy={galaxy}
          />

          {/* Galaxy Information & Visualization */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6">
            <div className="flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative">
              
              {/* Mobile/Desktop: Galaxy Image - Fixed width for image */}
              <div className="order-1 lg:order-1">
                <GalaxyVisualization galaxyUrl={galaxy_url} imageUrl={image_url} />
              </div>
              
              {/* Vertical separator - Desktop only */}
              <div className="hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"></div>
              
              {/* Mobile/Desktop: Galaxy Info - Takes remaining space */}
              <div className="order-2 lg:order-2">
                <GalaxyInfo galaxy={galaxy} />
              </div>
              
            </div>
          </div>

          {/* Systems List */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Systems in '{formatGalaxyName(galaxy.name)}'
            </h2>
            <SystemsList systems={systems} coordinates={coordinates} />
          </div>

          {/* Back Button */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              <span className="text-base sm:text-lg">← Go Back to Planetary Index</span>
            </button>
          </div>

          {/* Pagination */}
          <Pagination 
            page={page}
            prevPage={prev_page}
            nextPage={next_page}
            finish={finish}
          />
        </div>
        
        <VersionFooter version={version} />
      </div>
      
      {/* Spaceship Panel */}
      <SpaceshipPanel
        currentLocation={{
          type: 'galaxy',
          name: galaxy.name,
          coordinates: galaxy.coordinates.join(',')
        }}
      />
    </div>
  );
};

export default GalaxyLayout;