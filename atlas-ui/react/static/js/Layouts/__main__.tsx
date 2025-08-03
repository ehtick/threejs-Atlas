import React, { useState } from 'react';
import Header from '../Components/Header.tsx';
import CoordinateSelector from '../Components/CoordinateSelector.tsx';
import VersionFooter from '../Components/VersionFooter.tsx';

interface MainLayoutProps {
  error: string | null;
  version: string;
}

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

const MainLayout: React.FC<MainLayoutProps> = ({ error, version }) => {
  const [currentCoordinates, setCurrentCoordinates] = useState<Coordinates>({
    x: 1000000,
    y: 1000000,
    z: 1000000
  });

  const handleCoordinateChange = (coordinates: Coordinates) => {
    setCurrentCoordinates(coordinates);
  };

  const handleSubmit = () => {
    // Create a form and submit to Flask
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/navigate';
    
    Object.entries(currentCoordinates).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value.toString();
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
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
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Atlas Navigation System
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">
              Navigate through infinite galaxies, solar systems, and planets. Enter coordinates to begin your journey across the universe.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-8 bg-red-500/20 border border-red-500 rounded-lg p-4 text-red-200 text-center">
              <span className="font-semibold">Navigation Error:</span> {error}
            </div>
          )}

          {/* Navigation Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl overflow-hidden">
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="w-full">
              <div className="p-3 sm:p-4 lg:p-6">
                <CoordinateSelector onCoordinateChange={handleCoordinateChange} />
              </div>
            </form>
          </div>

          {/* Current Coordinates Display */}
          <div className="bg-gradient-to-r from-emerald-500/20 via-violet-500/20 to-rose-500/20 rounded-xl p-4 sm:p-6 text-center border border-white/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r from-emerald-300 via-violet-300 to-rose-300 bg-clip-text text-transparent">
              Current Coordinates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{currentCoordinates.x.toLocaleString()}</div>
                <div className="text-xs sm:text-sm text-gray-300">X Coordinate</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-violet-500/30 hover:border-violet-500/50 transition-colors duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-violet-400">{currentCoordinates.y.toLocaleString()}</div>
                <div className="text-xs sm:text-sm text-gray-300">Y Coordinate</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 sm:p-4 border border-rose-500/30 hover:border-rose-500/50 transition-colors duration-300 sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-rose-400">{currentCoordinates.z.toLocaleString()}</div>
                <div className="text-xs sm:text-sm text-gray-300">Z Coordinate</div>
              </div>
            </div>
          </div>
        </div>
        
        <VersionFooter version={version} />
      </div>
    </div>
  );
};

export default MainLayout;