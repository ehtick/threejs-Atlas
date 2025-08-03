import React from "react";

interface VersionFooterProps {
  version: string;
}

const VersionFooter: React.FC<VersionFooterProps> = ({ version }) => {
  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 mt-8 sm:mt-16 py-6 sm:py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-gray-400">Atlas v{version}</span>
            </div>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="text-xs sm:text-sm text-gray-400">Universal Navigation System</span>
          </div>
          
          <div className="text-xs sm:text-sm text-gray-400">
            Created by Claudio González for{" "}
            <a 
              target="_blank" 
              href="https://www.banshee.pro/" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Banshee Technologies
            </a>
          </div>
        </div>
        
        <div className="mt-3 sm:mt-4 text-xs text-gray-500">
          Quantum-powered navigation across infinite galactic coordinates
        </div>
      </div>
    </footer>
  );
};

export default VersionFooter;