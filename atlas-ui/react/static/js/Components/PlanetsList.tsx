import React, { useEffect, useState } from 'react';
import { getVisitedPlanets, markPlanetAsVisited } from '../Utils/VisitHistory.ts';

interface Planet {
  name: string;
}

interface PlanetsListProps {
  planets: Planet[];
  coordinates: string;
  systemIndex: number;
}

const PlanetsList: React.FC<PlanetsListProps> = ({ planets, coordinates, systemIndex }) => {
  const [visitedPlanets, setVisitedPlanets] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load historical data using optimized storage
    const loadHistoricalData = () => {
      try {
        const visitedPlanetNames = getVisitedPlanets(coordinates, systemIndex, planets);
        const visited = new Set<string>();
        
        visitedPlanetNames.forEach((planetName: string) => {
          visited.add(planetName.toLowerCase());
        });
        
        setVisitedPlanets(visited);
      } catch (error) {
        console.error('Error loading historical data:', error);
      }
    };

    loadHistoricalData();
  }, [coordinates, systemIndex, planets]);

  const formatPlanetName = (name: string) => {
    return name.replace(/_/g, ' ');
  };

  const handlePlanetClick = (planetName: string) => {
    // Mark planet as visited using optimized storage
    try {
      markPlanetAsVisited(coordinates, systemIndex, planetName, planets);
    } catch (error) {
      console.error('Error marking planet as visited:', error);
    }
    
    // Navigate to planet
    window.location.href = `/planet/${planetName.toLowerCase()}`;
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl p-4 sm:p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
        {planets.map((planet) => (
          <div
            key={planet.name}
            className="relative bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
          >
            {/* Visited indicator */}
            {visitedPlanets.has(planet.name.toLowerCase()) && (
              <div className="absolute top-1 right-1 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10">
                VISITED
              </div>
            )}
            
            <button
              onClick={() => handlePlanetClick(planet.name)}
              className="w-full text-left block p-2 sm:p-3 text-gray-200 hover:text-white transition-colors duration-300 rounded-lg"
            >
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">
                  Planet
                </div>
                <div className="text-sm font-semibold text-white truncate group-hover:text-blue-300 transition-colors duration-300">
                  {formatPlanetName(planet.name)}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        ))}
      </div>
      
      {planets.length === 0 && (
        <div className="col-span-full text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No planets found</div>
          <div className="text-gray-500 text-sm">This system appears to be empty</div>
        </div>
      )}
    </div>
  );
};

export default PlanetsList;