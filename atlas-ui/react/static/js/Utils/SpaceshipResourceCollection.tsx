import React from "react";
import { createRoot } from "react-dom/client";
import { calculatePlanetResources } from "./ElementResourceValues.tsx";
import { UnifiedSpaceshipStorage } from "./UnifiedSpaceshipStorage.tsx";
import { ResourceReward } from "./SpaceshipTypes.tsx";
import AntimatterIcon from "../Icons/AntimatterIcon.tsx";
import DeuteriumIcon from "../Icons/DeuteriumIcon.tsx";
import Element115Icon from "../Icons/Element115Icon.tsx";

export interface PlanetData {
  elements?: string[];
  planet_type?: string;
}

export interface BonusInfo {
  streakBonus: boolean;
  discoveryBonus: number;
  shipMultiplier?: number;
}

const COOLDOWN_HOURS = 1;

export class SpaceshipResourceCollectionManager {
  static generateLocationId(type: "galaxy" | "system" | "planet", coordinates: string, index?: number, planetName?: string): string {
    switch (type) {
      case "galaxy":
        return `galaxy_${coordinates}`;
      case "system":
        return `system_${coordinates}_${index}`;
      case "planet":
        return `planet_${coordinates}_${index}_${planetName?.toLowerCase()}`;
      default:
        return `unknown_${coordinates}`;
    }
  }

  static canCollectFromLocation(locationId: string): boolean {
    return UnifiedSpaceshipStorage.canCollectFromLocation(locationId);
  }

  static getTimeUntilNextCollection(locationId: string): number {
    return UnifiedSpaceshipStorage.getTimeUntilNextCollection(locationId);
  }

  static calculateReward(type: "galaxy" | "system" | "planet", coordinates: string, collectionCount: number = 0, planetData?: PlanetData, includeMultiplier: boolean = false): ResourceReward {
    // For planets with element data, use exact element values
    if (type === "planet" && planetData?.elements && planetData.elements.length > 0) {
      const baseResources = calculatePlanetResources(planetData.elements);
      
      // Apply diminishing returns after multiple collections
      const diminishingFactor = collectionCount > 3 ? Math.max(0.4, 1 - (collectionCount - 3) * 0.15) : 1;
      
      // Add small randomness (±10% to make it feel dynamic)
      const randomFactor = 0.9 + Math.random() * 0.2;
      
      // Calculate final values with minimum guarantee
      const finalAntimatter = Math.floor(baseResources.antimatter * diminishingFactor * randomFactor);
      const finalElement115 = Math.floor(baseResources.element115 * diminishingFactor * randomFactor);
      const finalDeuterium = Math.floor(baseResources.deuterium * diminishingFactor * randomFactor);
      
      // If base resources exist but floor resulted in 0, ensure at least the base value
      let planetReward = {
        antimatter: baseResources.antimatter > 0 && finalAntimatter === 0 ? baseResources.antimatter : finalAntimatter,
        element115: baseResources.element115 > 0 && finalElement115 === 0 ? baseResources.element115 : finalElement115,
        deuterium: baseResources.deuterium > 0 && finalDeuterium === 0 ? baseResources.deuterium : finalDeuterium,
      };
      
      // Apply ship multiplier if requested (for preview calculations)
      if (includeMultiplier) {
        const upgrade = UnifiedSpaceshipStorage.getUpgrade();
        const shipMultiplier = upgrade.multiplier;
        
        planetReward = {
          antimatter: Math.floor(planetReward.antimatter * shipMultiplier),
          element115: Math.floor(planetReward.element115 * shipMultiplier),
          deuterium: Math.floor(planetReward.deuterium * shipMultiplier),
        };
      }
      
      return planetReward;
    }
    
    // Generous rewards for engagement - optimized for addictive progression
    const baseRewards = {
      galaxy: { antimatter: 80, element115: 60, deuterium: 50 }, // Rich rewards for long journeys
      system: { antimatter: 50, element115: 60, deuterium: 50 }, // Substantial rewards for discovery
      planet: { antimatter: 18, element115: 22, deuterium: 27 }, // Good rewards - fallback for planets without element data
    };

    const base = baseRewards[type];
    
    // For planets without element data, use coordinate-based variation
    let variationFactor = 1;
    if (type === "planet" && !planetData?.elements && coordinates) {
      const coordHash = this.hashCoordinates(coordinates);
      variationFactor = 0.5 + coordHash * 1.5; // 0.5x to 2x variation
    }
    
    // Apply diminishing returns
    const diminishingFactor = collectionCount > 3 ? Math.max(0.4, 1 - (collectionCount - 3) * 0.15) : 1;
    
    // Small randomness
    const randomFactor = 0.9 + Math.random() * 0.2;
    
    let finalReward = {
      antimatter: Math.floor(base.antimatter * variationFactor * diminishingFactor * randomFactor),
      element115: Math.floor(base.element115 * variationFactor * diminishingFactor * randomFactor),
      deuterium: Math.floor(base.deuterium * variationFactor * diminishingFactor * randomFactor),
    };
    
    // Apply ship multiplier if requested (for preview calculations)
    if (includeMultiplier) {
      const upgrade = UnifiedSpaceshipStorage.getUpgrade();
      const shipMultiplier = upgrade.multiplier;
      
      finalReward = {
        antimatter: Math.floor(finalReward.antimatter * shipMultiplier),
        element115: Math.floor(finalReward.element115 * shipMultiplier),
        deuterium: Math.floor(finalReward.deuterium * shipMultiplier),
      };
    }
    
    return finalReward;
  }

  private static hashCoordinates(coordinates: string): number {
    if (!coordinates || typeof coordinates !== 'string') {
      return Math.random(); // Fallback to random value
    }
    
    let hash = 0;
    for (let i = 0; i < coordinates.length; i++) {
      const char = coordinates.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) / 2147483647; // Normalize to 0-1
  }
  
  // Calculate Discovery Bonus for early collections of the day
  private static getDiscoveryBonus(dailyCollections: number): number {
    if (dailyCollections <= 3) {
      return 5.0; // 5x bonus for first 3 collections of the day
    } else if (dailyCollections <= 5) {
      return 3.0; // 3x bonus for collections 4-5
    } else if (dailyCollections <= 7) {
      return 2.0; // 2x bonus for collections 6-7
    } else if (dailyCollections <= 10) {
      return 1.5; // 1.5x bonus for collections 8-10
    }
    return 1.0; // Normal rewards after 10 collections
  }

  static collectResources(locationId: string, type: "galaxy" | "system" | "planet", coordinates: string, planetData?: PlanetData): ResourceReward | null {
    if (!this.canCollectFromLocation(locationId)) {
      return null;
    }

    const collectionCount = UnifiedSpaceshipStorage.getCollectionCount(locationId);
    const isFirstTime = collectionCount === 0;
    let reward = this.calculateReward(type, coordinates, collectionCount, planetData);
    
    // Apply ship multiplier
    const upgrade = UnifiedSpaceshipStorage.getUpgrade();
    const shipMultiplier = upgrade.multiplier;
    
    // Mark location as collected (this updates streak and daily collections)
    UnifiedSpaceshipStorage.markLocationCollected(locationId);
    
    // Apply streak multiplier (get updated info after marking collection)
    const streakInfo = UnifiedSpaceshipStorage.getCollectionStreakInfo();
    let finalMultiplier = streakInfo.streakMultiplier;
    
    // Apply Discovery Bonus using updated daily collections count
    const discoveryBonus = this.getDiscoveryBonus(streakInfo.dailyCollections);
    finalMultiplier *= discoveryBonus;
    
    // Combine ship multiplier with other bonuses
    finalMultiplier *= shipMultiplier;
    
    if (finalMultiplier > 1.0) {
      reward = {
        antimatter: Math.floor(reward.antimatter * finalMultiplier),
        element115: Math.floor(reward.element115 * finalMultiplier),
        deuterium: Math.floor(reward.deuterium * finalMultiplier),
      };
    }
    
    // Add resources to spaceship
    UnifiedSpaceshipStorage.addResources(reward);
    
    return reward;
  }

  static getLocationCollection(locationId: string): { totalCollections: number } | null {
    const count = UnifiedSpaceshipStorage.getCollectionCount(locationId);
    return count > 0 ? { totalCollections: count } : null;
  }

  static showCollectionSuccess(reward: ResourceReward, locationType: string, bonusInfo?: BonusInfo, isFirstTime?: boolean): void {
    const toast = document.createElement("div");
    toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-green-900/90 to-blue-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-green-500/50 w-[90vw] max-w-lg";
    toast.style.animation = "slideInDown 0.3s ease-out";
    
    const typeEmojis = {
      galaxy: "🌌",
      system: "⭐",
      planet: "🪐"
    };
    
    const emoji = typeEmojis[locationType as keyof typeof typeEmojis] || "📦";
    
    // Create toast content using DOM manipulation instead of innerHTML
    const container = document.createElement("div");
    container.className = "flex items-center space-x-3";

    const emojiSpan = document.createElement("span");
    emojiSpan.className = "text-2xl";
    emojiSpan.textContent = emoji;

    const contentDiv = document.createElement("div");

    const titleDiv = document.createElement("div");
    titleDiv.className = "text-sm font-bold text-green-300";
    
    // Show different message for first time mining
    if (isFirstTime) {
      titleDiv.textContent = "🎉 First Time Mining - Bonus Applied!";
    } else {
      titleDiv.textContent = "Resources Collected!";
    }

    const resourceDiv = document.createElement("div");
    resourceDiv.className = "text-xs text-green-200 mt-1 flex gap-3";

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

    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(resourceDiv);


    // Add bonus information using DOM manipulation  
    if (bonusInfo?.discoveryBonus > 1.0) {
      const discoveryBonusDiv = document.createElement("div");
      discoveryBonusDiv.className = "text-xs text-yellow-300 mt-1";
      
      if (bonusInfo.discoveryBonus >= 5.0) {
        discoveryBonusDiv.textContent = "🎉 Daily Bonus: 5x (First 3 discoveries today)";
      } else if (bonusInfo.discoveryBonus >= 3.0) {
        discoveryBonusDiv.textContent = "✨ Daily Bonus: 3x (Discoveries 4-5 today)";
      } else if (bonusInfo.discoveryBonus >= 2.0) {
        discoveryBonusDiv.textContent = "🌟 Daily Bonus: 2x (Discoveries 6-7 today)";
      } else if (bonusInfo.discoveryBonus >= 1.5) {
        discoveryBonusDiv.textContent = "⭐ Daily Bonus: 1.5x (Discoveries 8-10 today)";
      }
      
      contentDiv.appendChild(discoveryBonusDiv);
    }
    
    if (bonusInfo?.streakBonus) {
      const streakBonusDiv = document.createElement("div");
      streakBonusDiv.className = "text-xs text-purple-300 mt-1";
      streakBonusDiv.textContent = "🔥 Streak Bonus: +25%";
      contentDiv.appendChild(streakBonusDiv);
    }
    
    if (bonusInfo?.shipMultiplier && bonusInfo.shipMultiplier > 1.0) {
      const shipMultiplierDiv = document.createElement("div");
      shipMultiplierDiv.className = "text-xs text-blue-300 mt-1";
      const multiplierText = bonusInfo.shipMultiplier === Math.floor(bonusInfo.shipMultiplier) 
        ? bonusInfo.shipMultiplier.toFixed(0) 
        : bonusInfo.shipMultiplier.toFixed(1);
      shipMultiplierDiv.textContent = `🚀 Ship Bonus: ${multiplierText}x`;
      contentDiv.appendChild(shipMultiplierDiv);
    }

    // Add "No bonus active" message if no bonuses are present
    const hasAnyBonus = (bonusInfo?.discoveryBonus > 1.0) || 
                       bonusInfo?.streakBonus || 
                       (bonusInfo?.shipMultiplier && bonusInfo.shipMultiplier > 1.0);
    
    if (!hasAnyBonus) {
      const noBonusDiv = document.createElement("div");
      noBonusDiv.className = "text-xs text-gray-400 mt-1";
      noBonusDiv.textContent = "No bonus active, improve your ship";
      contentDiv.appendChild(noBonusDiv);
    }

    container.appendChild(emojiSpan);
    container.appendChild(contentDiv);
    toast.appendChild(container);
    
    if (!document.getElementById("collection-toast-styles")) {
      const style = document.createElement("style");
      style.id = "collection-toast-styles";
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
  }

  static getCollectionStats(): {
    totalCollections: number;
    uniqueLocations: number;
    totalResourcesGathered: ResourceReward;
  } {
    const stats = UnifiedSpaceshipStorage.getStats();
    return {
      totalCollections: stats.totalCollections,
      uniqueLocations: stats.totalCollections, // Simplified - could track separately
      totalResourcesGathered: {
        antimatter: stats.totalResourcesCollected.antimatter,
        element115: stats.totalResourcesCollected.element115,
        deuterium: stats.totalResourcesCollected.deuterium
      },
    };
  }
}