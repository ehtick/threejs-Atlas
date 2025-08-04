import React, { useEffect, useState } from 'react';
import { getSystemVisitStatus } from '../Utils/VisitHistory.ts';

interface System {
  index: number;
  number: number;
  name: string;
  num_planets?: number;
}

interface SystemsListProps {
  systems: System[];
  coordinates: string;
}

const SystemsList: React.FC<SystemsListProps> = ({ systems, coordinates }) => {
  const [systemVisitStates, setSystemVisitStates] = useState<Map<number, 'none' | 'partial' | 'complete'>>(new Map());

  useEffect(() => {
    // Load historical data and determine visit states
    const loadHistoricalData = () => {
      try {
        const states = new Map<number, 'none' | 'partial' | 'complete'>();
        
        systems.forEach(system => {
          const visitStatus = getSystemVisitStatus(coordinates, system.index, system.num_planets || 1);
          states.set(system.index, visitStatus);
        });
        
        setSystemVisitStates(states);
      } catch (error) {
        console.error('Error loading historical data:', error);
      }
    };

    loadHistoricalData();
  }, [coordinates, systems]);

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl p-4 sm:p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3">
        {systems.map((system) => (
          <div
            key={system.index}
            className="relative bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
          >
            {/* Visit status indicator */}
            {(() => {
              const visitStatus = systemVisitStates.get(system.index) || 'none';
              if (visitStatus === 'complete') {
                return (
                  <div className="absolute top-1 right-1 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10">
                    VISITED
                  </div>
                );
              } else if (visitStatus === 'partial') {
                return (
                  <div className="absolute top-1 right-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 text-[10px] px-1.5 py-0.5 rounded z-10">
                    PARTIAL
                  </div>
                );
              }
              return null;
            })()}
            
            <button
              onClick={() => window.location.href = `/system/${system.index}`}
              className="w-full text-left block p-2 sm:p-3 text-gray-200 hover:text-white transition-colors duration-300 rounded-lg"
            >
              <div className="text-center">
                <div className="text-xs text-gray-400 mb-1">
                  #{system.number}
                </div>
                <div className="text-sm font-semibold text-white truncate group-hover:text-blue-300 transition-colors duration-300">
                  {system.name}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        ))}
      </div>
      
      {systems.length === 0 && (
        <div className="col-span-full text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No systems found</div>
          <div className="text-gray-500 text-sm">This galaxy appears to be empty</div>
        </div>
      )}
    </div>
  );
};

export default SystemsList;