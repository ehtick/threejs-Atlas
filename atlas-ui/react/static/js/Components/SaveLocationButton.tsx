import React, { useState, useEffect } from 'react';
import { LocationBookmarks } from '../Utils/LocationBookmarks.ts';
import { StargateGenerator } from '../Utils/StargateGenerator.ts';

interface SaveLocationButtonProps {
  type: 'galaxy' | 'system' | 'planet';
  name: string;
  coordinates: string;
  systemIndex?: number;
  planetName?: string;
  className?: string;
}

const SaveLocationButton: React.FC<SaveLocationButtonProps> = ({
  type,
  name,
  coordinates,
  systemIndex,
  planetName,
  className = ""
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateStargateUrl = (): string => {
    try {
      const galaxyCoords = coordinates.split(',').map(Number);
      const currentPage = StargateGenerator.getCurrentPage();
      
      switch (type) {
        case 'galaxy':
          return StargateGenerator.generateGalaxyUrl(galaxyCoords, currentPage);
        case 'system':
          if (systemIndex !== undefined) {
            return StargateGenerator.generateSystemUrl(galaxyCoords, systemIndex, currentPage);
          }
          break;
        case 'planet':
          if (systemIndex !== undefined && planetName) {
            return StargateGenerator.generatePlanetUrl(galaxyCoords, systemIndex, planetName, currentPage);
          }
          break;
      }
      
      // Fallback to current URL if something goes wrong
      return window.location.pathname;
    } catch (error) {
      console.error('Error generating stargate URL:', error);
      return window.location.pathname;
    }
  };

  useEffect(() => {
    // Check if location is already saved using the stargate URL
    const savedLocations = LocationBookmarks.getLocations();
    const stargateUrl = generateStargateUrl();
    const exists = savedLocations.some(loc => loc.stargateUrl === stargateUrl);
    setIsSaved(exists);
  }, [coordinates, systemIndex, planetName, type]);

  const handleSaveLocation = async () => {
    setIsLoading(true);
    
    try {
      const stargateUrl = generateStargateUrl();
      
      LocationBookmarks.saveLocation({
        name,
        type,
        stargateUrl
      });

      setIsSaved(true);
      
      // Show brief feedback
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
      
    } catch (error) {
      console.error('Error saving location:', error);
      setIsLoading(false);
    }
  };

  const formatName = (name: string) => {
    return name.replace(/_/g, ' ');
  };

  return (
    <>
      <button
        onClick={handleSaveLocation}
        disabled={isSaved || isLoading}
        className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
          isSaved
            ? 'bg-green-500/20 border border-green-500/50 text-green-400 cursor-default'
            : isLoading
            ? 'bg-blue-500/20 border border-blue-500/50 text-blue-400 cursor-wait'
            : 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white hover:text-blue-300'
        } ${className}`}
        title={isSaved ? 'Location saved' : `Save ${formatName(name)} to bookmarks`}
      >
        {isLoading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Saving...</span>
          </>
        ) : isSaved ? (
          <>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span>Saved</span>
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Save Location</span>
          </>
        )}
      </button>
    </>
  );
};

export default SaveLocationButton;