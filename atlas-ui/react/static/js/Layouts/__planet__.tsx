import React, { useState, useEffect } from 'react';
import Header from '../Components/Header.tsx';
import PlanetInfo from '../Components/PlanetInfo.tsx';
import PlanetVisualization from '../Components/PlanetVisualization.tsx';
import TechnicalData from '../Components/TechnicalData.tsx';
import VersionFooter from '../Components/VersionFooter.tsx';

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

interface PlanetLayoutProps {
  planet: Planet;
  system: System;
  galaxy: Galaxy;
  planet_url: string;
  version: string;
  image_url?: string;
}

const PlanetLayout: React.FC<PlanetLayoutProps> = ({
  planet,
  system,
  galaxy,
  planet_url,
  version,
  image_url
}) => {
  const [coordinates] = useState<string>(galaxy.coordinates.join(','));

  useEffect(() => {
    // Set coordinates, system index, and planet name for historical data system
    document.body.setAttribute('data-coordinates', coordinates);
    document.body.setAttribute('data-system-index', system.index.toString());
    document.body.setAttribute('data-planet-name', planet.name.toLowerCase());
  }, [coordinates, system.index, planet.name]);

  const formatPlanetName = (name: string) => {
    return name.replace(/_/g, ' ');
  };

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
          
          {/* Planet Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Planet '{formatPlanetName(planet.name)}'
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              in System '{formatSystemName(system.name)}' - Galaxy '{formatGalaxyName(galaxy.name)}'
            </p>
            <p className="text-sm sm:text-base text-gray-400">
              Coordinates {galaxy.coordinates.join(', ')}
            </p>
          </div>

          {/* Planet Information & Visualization */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6">
            <div className="flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8">
              
              {/* Mobile/Desktop: Planet Image - Fixed width for image */}
              <div className="order-1 lg:order-1">
                <PlanetVisualization planetUrl={planet_url} imageUrl={image_url} />
              </div>
              
              {/* Mobile/Desktop: Planet Info - Takes remaining space */}
              <div className="order-2 lg:order-2">
                <PlanetInfo planet={planet} />
              </div>
              
            </div>
            
            {/* Technical Data - Always visible below main content */}
            <TechnicalData 
              planetName={planet.name}
              systemName={system.name}
              systemIndex={system.index}
              galaxyName={galaxy.name}
              galaxyCoordinates={galaxy.coordinates}
            />
          </div>

          {/* Back Button */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center">
            <button 
              onClick={() => window.location.href = `/system/${system.index}`}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              <span className="text-base sm:text-lg">← Back to System '{formatSystemName(system.name)}'</span>
            </button>
          </div>
        </div>
        
        <VersionFooter version={version} />
      </div>
    </div>
  );
};

export default PlanetLayout;