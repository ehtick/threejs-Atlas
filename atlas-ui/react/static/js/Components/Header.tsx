import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-4">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <img 
            src="/static/atlas-logo.jpg" 
            alt="Atlas Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-blue-400 shadow-lg" 
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">The Atlas</h1>
            <p className="text-xs sm:text-sm text-gray-400 hidden sm:block">Universal Navigation System</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 sm:space-x-6">
          <div className="flex items-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium">ONLINE</span>
          </div>
          <div className="text-xs sm:text-sm text-gray-400 hidden lg:block">
            Quantum Navigation Ready
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;