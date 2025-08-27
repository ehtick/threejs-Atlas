import React, { useState, useEffect } from "react";
import { SpaceshipResourceCollectionManager } from "../Utils/SpaceshipResourceCollection";
import { ResourceEventManager } from "../Utils/ResourceEventManager";

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
    const fullLocationId = SpaceshipResourceCollectionManager.generateLocationId(
      locationType,
      coordinates,
      systemIndex,
      planetName
    );
    
    const updateState = () => {
      setCanCollect(SpaceshipResourceCollectionManager.canCollectFromLocation(fullLocationId));
      setTimeUntilNext(SpaceshipResourceCollectionManager.getTimeUntilNextCollection(fullLocationId));
      
      const collection = SpaceshipResourceCollectionManager.getLocationCollection(fullLocationId);
      setCollectionCount(collection?.totalCollections || 0);
    };

    updateState();
    
    // Update every 30 seconds
    const interval = setInterval(updateState, 30000);
    return () => clearInterval(interval);
  }, [locationType, coordinates, systemIndex, planetName]);

  const handleCollect = async () => {
    setIsCollecting(true);
    
    const fullLocationId = SpaceshipResourceCollectionManager.generateLocationId(
      locationType,
      coordinates,
      systemIndex,
      planetName
    );
    
    // Check if this is first time collection
    const isFirstTime = collectionCount === 0;
    
    const reward = SpaceshipResourceCollectionManager.collectResources(fullLocationId, locationType, coordinates);
    
    if (reward) {
      // Get streak info for proper bonus display
      const { UnifiedSpaceshipStorage } = await import("../Utils/UnifiedSpaceshipStorage");
      const streakInfo = UnifiedSpaceshipStorage.getCollectionStreakInfo();
      
      // Calculate discovery bonus
      const discoveryBonus = collectionCount <= 15 ? 2.5 : 
                            collectionCount <= 35 ? 1.8 : 
                            collectionCount <= 50 ? 1.3 : 1.0;
      
      // Show consolidated notification with all bonus info
      SpaceshipResourceCollectionManager.showCollectionSuccess(reward, locationType, {
        streakBonus: streakInfo.streakMultiplier > 1.0,
        discoveryBonus: discoveryBonus
      }, isFirstTime);
      
      setCanCollect(false);
      setTimeUntilNext(1); // 1 hour cooldown
      setCollectionCount(prev => prev + 1);
      
      // Emit resource update event
      ResourceEventManager.emit('resources_updated');
      ResourceEventManager.emit('mining_completed', reward);
    }
    
    setTimeout(() => setIsCollecting(false), 1000);
  };

  const getButtonText = () => {
    if (isCollecting) return "Mining...";
    if (!canCollect && timeUntilNext > 0) {
      const minutes = Math.ceil(timeUntilNext * 60);
      return `${minutes}m`;
    }
    return "Mine";
  };

  const getButtonIcon = () => {
    if (isCollecting) {
      return (
        <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      );
    }
    if (!canCollect && timeUntilNext > 0) {
      return (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
          <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/>
        </svg>
      );
    }
    return (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    );
  };

  const getRewardPreview = () => {
    const reward = SpaceshipResourceCollectionManager.calculateReward(locationType, collectionCount);
    return `${reward.antimatter}AM | ${reward.element115}E115 | ${reward.deuterium}D`;
  };

  return (
    <button 
      onClick={handleCollect} 
      disabled={!canCollect || isCollecting} 
      className={`inline-flex items-center space-x-1 px-1.5 py-0.5 rounded transition-all duration-200 text-[10px] font-medium h-[21px] box-border ${
        isCollecting ? "bg-blue-500/20 border border-blue-500/50 text-blue-400" : 
        canCollect ? "bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white hover:text-blue-300" :
        "bg-gray-500/20 border border-gray-500/50 text-gray-400"
      } ${className}`} 
      title={canCollect ? `Mine: ${getRewardPreview()}` : `Cooldown: ${Math.ceil(timeUntilNext * 60)} minutes remaining`}
    >
      {getButtonIcon()}
      <span className="text-[10px] uppercase">{getButtonText()}</span>
    </button>
  );
};

export default ResourceCollectionButton;