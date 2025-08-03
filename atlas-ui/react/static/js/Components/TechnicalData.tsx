import React from 'react';

interface TechnicalDataProps {
  planetName?: string;
  systemName?: string;
  systemIndex?: number;
  galaxyName: string;
  galaxyCoordinates: number[];
}

const TechnicalData: React.FC<TechnicalDataProps> = ({ 
  planetName, 
  systemName, 
  systemIndex, 
  galaxyName, 
  galaxyCoordinates 
}) => {
  const formatName = (name: string) => {
    return name.replace(/_/g, ' ');
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-3 mt-6">
      <div className="text-xs text-gray-400 mb-2">Technical Data</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
        {planetName && (
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">Planet:</span>
            <div className="text-white truncate font-medium">{formatName(planetName)}</div>
          </div>
        )}
        {systemName && (
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">System:</span>
            <div className="text-white truncate font-medium">{formatName(systemName)}</div>
          </div>
        )}
        {systemIndex !== undefined && (
          <div className="bg-white/5 rounded p-2">
            <span className="text-gray-400">System ID:</span>
            <div className="text-white font-medium">#{systemIndex + 1}</div>
          </div>
        )}
        <div className="bg-white/5 rounded p-2">
          <span className="text-gray-400">Galaxy:</span>
          <div className="text-white truncate font-medium">{formatName(galaxyName)}</div>
        </div>
        <div className="bg-white/5 rounded p-2">
          <span className="text-gray-400">Coordinates:</span>
          <div className="text-white font-medium">{galaxyCoordinates.join(', ')}</div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalData;