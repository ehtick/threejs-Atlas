import React, { useEffect, useState } from 'react';

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
    // Load historical data from localStorage
    const loadHistoricalData = () => {
      try {
        const viewedPlanets = JSON.parse(localStorage.getItem('atlasHistoricalData') || '{}');
        const coordsData = viewedPlanets[coordinates] || {};
        const systemData = coordsData[systemIndex.toString()] || [];
        const visited = new Set<string>();
        
        systemData.forEach((planetName: string) => {
          visited.add(planetName.toLowerCase());
        });
        
        setVisitedPlanets(visited);
      } catch (error) {
        console.error('Error loading historical data:', error);
      }
    };

    loadHistoricalData();

    // Mark current location as viewed
    const markLocationAsViewed = () => {
      try {
        let viewedPlanets = JSON.parse(localStorage.getItem('atlasHistoricalData') || '{}');
        
        if (!viewedPlanets[coordinates]) {
          viewedPlanets[coordinates] = {};
        }
        
        if (!viewedPlanets[coordinates][systemIndex.toString()]) {
          viewedPlanets[coordinates][systemIndex.toString()] = [];
        }
        
        localStorage.setItem('atlasHistoricalData', JSON.stringify(viewedPlanets));
      } catch (error) {
        console.error('Error saving historical data:', error);
      }
    };

    markLocationAsViewed();
  }, [coordinates, systemIndex]);

  const formatPlanetName = (name: string) => {
    return name.replace(/_/g, ' ');
  };

  const handlePlanetClick = (planetName: string) => {
    // Mark planet as visited when clicked
    try {
      let viewedPlanets = JSON.parse(localStorage.getItem('atlasHistoricalData') || '{}');
      
      if (!viewedPlanets[coordinates]) {
        viewedPlanets[coordinates] = {};
      }
      
      if (!viewedPlanets[coordinates][systemIndex.toString()]) {
        viewedPlanets[coordinates][systemIndex.toString()] = [];
      }
      
      const planetKey = planetName.toLowerCase();
      if (!viewedPlanets[coordinates][systemIndex.toString()].includes(planetKey)) {
        viewedPlanets[coordinates][systemIndex.toString()].push(planetKey);
        localStorage.setItem('atlasHistoricalData', JSON.stringify(viewedPlanets));
      }
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
              <div 
                className="absolute left-0 top-0 w-1 h-full bg-cyan-400 rounded-l-lg opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(180deg, #00d4ff 0%, #00a0ff 100%)'
                }}
              />
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