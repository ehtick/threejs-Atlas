import React, { useState, useEffect } from "react";
import { SpaceshipResourceManager } from "../Utils/SpaceshipResources.tsx";
import { ResourceEventManager } from "../Utils/ResourceEventManager.tsx";
import AntimatterIcon from "../Icons/AntimatterIcon.tsx";
import Element115Icon from "../Icons/Element115Icon.tsx";
import DeuteriumIcon from "../Icons/DeuteriumIcon.tsx";
import { createRoot } from 'react-dom/client';

// Global debug variables for treasure chest
declare global {
  interface Window {
    CHEST_SHOW?: boolean;
    CHEST_PROBABILITY?: number;
  }
}

// Configuration for treasure chest appearance
if (typeof window !== 'undefined') {
  window.CHEST_SHOW = true; // Set to true to always show (debugging)
  window.CHEST_PROBABILITY = 0.000001; // 0.0001% = 1 in 1,000,000
  // Common values:
  // 0.000001 = 0.0001% (1 in 1,000,000) - extremely rare
  // 0.00001 = 0.001% (1 in 100,000) - very rare
  // 0.0001 = 0.01% (1 in 10,000) - rare
  // 0.001 = 0.1% (1 in 1,000) - uncommon
  // 0.01 = 1% (1 in 100) - occasional
  // 0.1 = 10% (1 in 10) - common
  // 1.0 = 100% - always
}

interface TreasureReward {
  antimatter: number;
  element115: number;
  deuterium: number;
}

const TreasureChest: React.FC = () => {
  const [showTreasureChest, setShowTreasureChest] = useState<boolean>(false); // false for normal behavior
  const [showChestPopup, setShowChestPopup] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isButtonDisappearing, setIsButtonDisappearing] = useState<boolean>(false);
  const [treasureReward, setTreasureReward] = useState<TreasureReward | null>(null);

  // Check if treasure chest should show
  useEffect(() => {
    const probability = window.CHEST_PROBABILITY || 0.000001; // Default to 0.0001%
    const shouldShow = window.CHEST_SHOW || Math.random() < probability;
    console.log('TreasureChest - CHEST_SHOW:', window.CHEST_SHOW, 'CHEST_PROBABILITY:', probability, 'shouldShow:', shouldShow);
    setShowTreasureChest(shouldShow);
  }, []);

  const showTreasureNotification = (reward: TreasureReward) => {
    if (reward.antimatter + reward.element115 + reward.deuterium === 0) return;
    
    const toast = document.createElement("div");
    toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-yellow-900/90 to-amber-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-yellow-500/50 w-[90vw] max-w-lg";
    toast.style.animation = "slideInDown 0.3s ease-out";
    
    // Create toast content using DOM manipulation
    const container = document.createElement("div");
    container.className = "flex items-center space-x-3";

    const emojiSpan = document.createElement("span");
    emojiSpan.className = "text-2xl";
    emojiSpan.textContent = "💰";

    const contentDiv = document.createElement("div");

    const titleDiv = document.createElement("div");
    titleDiv.className = "text-sm font-bold text-yellow-300";
    titleDiv.textContent = "Treasure Chest Collected!";

    const resourceDiv = document.createElement("div");
    resourceDiv.className = "text-xs text-yellow-200 mt-1 flex gap-3";

    // Create resource spans with icons using createRoot
    const amSpan = document.createElement("span");
    amSpan.className = "text-purple-300 flex items-center gap-1";
    const amRoot = createRoot(amSpan);
    amRoot.render(
      <>
        <AntimatterIcon size={12} color="currentColor" />
        +{reward.antimatter} AM
      </>
    );

    const e115Span = document.createElement("span");
    e115Span.className = "text-cyan-300 flex items-center gap-1";
    const e115Root = createRoot(e115Span);
    e115Root.render(
      <>
        <Element115Icon size={12} color="currentColor" />
        +{reward.element115} E115
      </>
    );

    const deuteriumSpan = document.createElement("span");
    deuteriumSpan.className = "text-orange-300 flex items-center gap-1";
    const deuteriumRoot = createRoot(deuteriumSpan);
    deuteriumRoot.render(
      <>
        <DeuteriumIcon size={12} color="currentColor" />
        +{reward.deuterium} D
      </>
    );

    resourceDiv.appendChild(amSpan);
    resourceDiv.appendChild(e115Span);
    resourceDiv.appendChild(deuteriumSpan);

    const sourceDiv = document.createElement("div");
    sourceDiv.className = "text-xs text-yellow-300 mt-1";
    sourceDiv.textContent = `🎉 Lucky find! Extremely rare treasure!`;

    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(resourceDiv);
    contentDiv.appendChild(sourceDiv);

    container.appendChild(emojiSpan);
    container.appendChild(contentDiv);
    toast.appendChild(container);
    
    if (!document.getElementById("treasure-toast-styles")) {
      const style = document.createElement("style");
      style.id = "treasure-toast-styles";
      style.textContent = `
        @keyframes slideInDown {
          from {
            transform: translate(-50%, -100%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }
        @keyframes slideOutUp {
          from {
            transform: translate(-50%, 0);
            opacity: 1;
          }
          to {
            transform: translate(-50%, -100%);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = "slideOutUp 0.3s ease-in forwards";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  };

  const handleTreasureChestClick = () => {
    // Generate random resources (0-1000 each) but don't add them yet
    const randomResources: TreasureReward = {
      antimatter: Math.floor(Math.random() * 1001),
      element115: Math.floor(Math.random() * 1001),
      deuterium: Math.floor(Math.random() * 1001)
    };

    // Store the reward for the popup
    setTreasureReward(randomResources);
    
    // Show reward popup (resources not added yet)
    setShowChestPopup(true);
  };

  const handleCollectRewards = () => {
    if (treasureReward) {
      // Now actually add the resources
      SpaceshipResourceManager.addResources(treasureReward);
      
      // Show collection notification
      showTreasureNotification(treasureReward);
      
      // Emit resource update event
      ResourceEventManager.emit('resources_updated');
    }
    
    // Trigger modal closing animation
    setIsClosing(true);
    
    // After modal animation, close modal and start button animation
    setTimeout(() => {
      setShowChestPopup(false);
      setTreasureReward(null);
      setIsClosing(false);
      
      // Now trigger the button disappearing animation
      disappearChestButton();
    }, 300); // Match modal animation duration
  };

  const disappearChestButton = () => {
    // Start button disappearing animation
    setIsButtonDisappearing(true);
    
    // After button animation completes, hide the chest
    setTimeout(() => {
      setShowTreasureChest(false);
      setIsButtonDisappearing(false);
    }, 800); // Match popAndFadeOut duration
  };

  const handleCloseWithoutCollecting = () => {
    // Trigger modal closing animation
    setIsClosing(true);
    
    // After modal animation, close modal and start button animation
    setTimeout(() => {
      setShowChestPopup(false);
      setTreasureReward(null);
      setIsClosing(false);
      
      // Now trigger the button disappearing animation
      disappearChestButton();
    }, 300); // Match modal animation duration
  };

  console.log('TreasureChest render - showTreasureChest:', showTreasureChest);
  if (!showTreasureChest) return null;

  return (
    <>
      {/* Treasure Chest Button - Positioned above spaceship control */}
      <button 
        onClick={handleTreasureChestClick}
        className={`fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-600 via-amber-600 to-yellow-800 hover:from-yellow-500 hover:via-amber-500 hover:to-yellow-700 text-white rounded-full shadow-2xl border-2 border-yellow-400/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm ${
          isButtonDisappearing ? 'animate-popAndFadeOut' : ''
        }`}
        title="Treasure Chest - Click for random resources!"
      >
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M2 20h20V7c0-.8-.32-1.56-.88-2.12S19.8 4 19 4H5c-.8 0-1.56.32-2.12.88S2 6.2 2 7zm18-9h-5V9H9v2H4V7c0-.26.11-.5.29-.71C4.5 6.11 4.74 6 5 6h14c.27 0 .5.11.71.29c.19.21.29.45.29.71zm-5 2h5v5H4v-5h5l2 2h2zm-4-2h2v2h-2z"></path>
          </svg>
        </div>
        <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping"></div>
      </button>

      {/* Treasure Chest Reward Popup */}
      {showChestPopup && treasureReward && (
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 ${
            isClosing ? 'animate-fadeOut' : 'animate-fadeIn'
          }`}
          style={{ zIndex: 10000 }}
          onClick={handleCloseWithoutCollecting}
        >
          <div 
            className={`bg-gradient-to-br from-yellow-900/90 via-amber-900/90 to-yellow-800/90 backdrop-blur-xl rounded-2xl border-2 border-yellow-400/50 shadow-2xl w-full max-w-md ${
              isClosing ? 'animate-slideDown' : 'animate-slideUp'
            }`}
            style={{ zIndex: 10001 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-yellow-600/30 to-amber-600/30 p-4 border-b border-yellow-400/30 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h3 className="text-yellow-100 font-bold text-xl flex items-center gap-2">
                  🎉 Treasure Found! 🎉
                </h3>
                <button 
                  onClick={handleCloseWithoutCollecting}
                  className="text-yellow-400 hover:text-yellow-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 text-center">
              <div className="text-lg text-yellow-200 mb-4">
                You discovered a rare treasure chest!
              </div>
              
              <div className="bg-black/30 rounded-lg p-4 mb-4">
                <div className="text-sm text-yellow-300 mb-2">Resources to collect:</div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-purple-300 font-bold flex items-center justify-center gap-1">
                      <AntimatterIcon size={16} color="currentColor" />
                      +{treasureReward.antimatter}
                    </div>
                    <div className="text-xs text-purple-400">Antimatter</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cyan-300 font-bold flex items-center justify-center gap-1">
                      <Element115Icon size={16} color="currentColor" />
                      +{treasureReward.element115}
                    </div>
                    <div className="text-xs text-cyan-400">Element 115</div>
                  </div>
                  <div className="text-center">
                    <div className="text-orange-300 font-bold flex items-center justify-center gap-1">
                      <DeuteriumIcon size={16} color="currentColor" />
                      +{treasureReward.deuterium}
                    </div>
                    <div className="text-xs text-orange-400">Deuterium</div>
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-yellow-400 mb-4">
                ✨ Lucky find! These chests are extremely rare! ✨
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={handleCloseWithoutCollecting}
                  className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 border border-gray-600/50 transition-all duration-200"
                >
                  Close
                </button>
                <button
                  onClick={handleCollectRewards}
                  className="flex-1 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-yellow-600/30 to-amber-600/30 hover:from-yellow-600/40 hover:to-amber-600/40 text-yellow-300 border border-yellow-500/50 hover:border-yellow-400/70 transition-all duration-200"
                >
                  🎉 Collect
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add custom animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 1; 
            transform: translateY(0); 
          }
          to { 
            opacity: 0; 
            transform: translateY(20px); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-fadeOut {
          animation: fadeOut 0.3s ease-in forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-in forwards;
        }
        
        @keyframes popAndFadeOut {
          0% { 
            opacity: 1; 
            transform: scale(1); 
          }
          20% { 
            opacity: 1; 
            transform: scale(1.2) rotate(10deg); 
          }
          40% { 
            opacity: 1; 
            transform: scale(1.1) rotate(-5deg); 
          }
          60% { 
            opacity: 1; 
            transform: scale(1.05) rotate(2deg); 
          }
          80% { 
            opacity: 0.7; 
            transform: scale(1) rotate(0deg); 
          }
          100% { 
            opacity: 0; 
            transform: scale(0.8); 
          }
        }
        
        .animate-popAndFadeOut {
          animation: popAndFadeOut 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default TreasureChest;