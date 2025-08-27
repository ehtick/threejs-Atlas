import React, { useState, useEffect } from "react";
import { ResourceCollectionManager } from "../Utils/ResourceCollection";

interface ResourceCollectionButtonProps {
  locationType: "galaxy" | "system" | "planet";
  locationId: string;
  coordinates: string;
  systemIndex?: number;
  planetName?: string;
  className?: string;
}

const ResourceCollectionButton: React.FC<ResourceCollectionButtonProps> = ({
  locationType,
  locationId,
  coordinates,
  systemIndex,
  planetName,
  className = ""
}) => {
  const [canCollect, setCanCollect] = useState(false);
  const [timeUntilNext, setTimeUntilNext] = useState(0);
  const [isCollecting, setIsCollecting] = useState(false);
  const [collectionCount, setCollectionCount] = useState(0);

  useEffect(() => {
    const fullLocationId = ResourceCollectionManager.generateLocationId(
      locationType,
      coordinates,
      systemIndex,
      planetName
    );
    
    const updateState = () => {
      setCanCollect(ResourceCollectionManager.canCollectFromLocation(fullLocationId));
      setTimeUntilNext(ResourceCollectionManager.getTimeUntilNextCollection(fullLocationId));
      
      const collection = ResourceCollectionManager.getLocationCollection(fullLocationId);
      setCollectionCount(collection?.totalCollections || 0);
    };

    updateState();
    
    // Update every 30 seconds
    const interval = setInterval(updateState, 30000);
    return () => clearInterval(interval);
  }, [locationType, coordinates, systemIndex, planetName]);

  const handleCollect = async () => {
    setIsCollecting(true);
    
    const fullLocationId = ResourceCollectionManager.generateLocationId(
      locationType,
      coordinates,
      systemIndex,
      planetName
    );
    
    const reward = ResourceCollectionManager.collectResources(fullLocationId, locationType);
    
    if (reward) {
      ResourceCollectionManager.showCollectionSuccess(reward, locationType);
      setCanCollect(false);
      setTimeUntilNext(1); // 1 hour cooldown
      setCollectionCount(prev => prev + 1);
    }
    
    setTimeout(() => setIsCollecting(false), 1000);
  };

  const getButtonText = () => {
    if (isCollecting) return "Collecting...";
    if (!canCollect && timeUntilNext > 0) {
      const minutes = Math.ceil(timeUntilNext * 60);
      return `${minutes}m`;
    }
    return "Collect";
  };

  const getButtonIcon = () => {
    if (isCollecting) return "⚡";
    if (!canCollect && timeUntilNext > 0) return "⏰";
    return "📦";
  };

  const getRewardPreview = () => {
    const reward = ResourceCollectionManager.calculateReward(locationType, collectionCount);
    return `${reward.antimatter}AM | ${reward.element115}E115 | ${reward.deuterium}D`;
  };

  const baseClasses = "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border";
  
  const stateClasses = canCollect && !isCollecting
    ? "bg-gradient-to-r from-green-600/20 to-blue-600/20 hover:from-green-600/30 hover:to-blue-600/30 text-green-300 border-green-500/50 hover:border-green-400/70 cursor-pointer transform hover:scale-105"
    : "bg-gray-700/30 text-gray-400 border-gray-600/50 cursor-not-allowed";

  return (
    <button
      onClick={handleCollect}
      disabled={!canCollect || isCollecting}
      className={`${baseClasses} ${stateClasses} ${className}`}
      title={canCollect ? `Collect: ${getRewardPreview()}` : `Cooldown: ${Math.ceil(timeUntilNext * 60)} minutes remaining`}
    >
      <span className="text-base">{getButtonIcon()}</span>
      <div className="flex flex-col items-start">
        <span className="leading-tight">{getButtonText()}</span>
        {collectionCount > 0 && (
          <span className="text-xs opacity-70">#{collectionCount + 1}</span>
        )}
      </div>
    </button>
  );
};

export default ResourceCollectionButton;