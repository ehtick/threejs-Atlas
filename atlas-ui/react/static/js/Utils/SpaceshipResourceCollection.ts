import { calculatePlanetResources } from "./ElementResourceValues";
import { UnifiedSpaceshipStorage } from "./UnifiedSpaceshipStorage";
import { ResourceReward } from "./SpaceshipTypes";

export interface PlanetData {
  elements?: string[];
  planet_type?: string;
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

  static calculateReward(type: "galaxy" | "system" | "planet", coordinates: string, collectionCount: number = 0, planetData?: PlanetData): ResourceReward {
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
      return {
        antimatter: baseResources.antimatter > 0 && finalAntimatter === 0 ? baseResources.antimatter : finalAntimatter,
        element115: baseResources.element115 > 0 && finalElement115 === 0 ? baseResources.element115 : finalElement115,
        deuterium: baseResources.deuterium > 0 && finalDeuterium === 0 ? baseResources.deuterium : finalDeuterium,
      };
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
    
    return {
      antimatter: Math.floor(base.antimatter * variationFactor * diminishingFactor * randomFactor),
      element115: Math.floor(base.element115 * variationFactor * diminishingFactor * randomFactor),
      deuterium: Math.floor(base.deuterium * variationFactor * diminishingFactor * randomFactor),
    };
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
    if (dailyCollections <= 15) {
      return 2.5; // 2.5x bonus for first 15 collections of the day
    } else if (dailyCollections <= 35) {
      return 1.8; // 1.8x bonus for collections 16-35
    } else if (dailyCollections <= 50) {
      return 1.3; // 1.3x bonus for collections 36-50
    }
    return 1.0; // Normal rewards after 50 collections
  }

  static collectResources(locationId: string, type: "galaxy" | "system" | "planet", coordinates: string, planetData?: PlanetData): ResourceReward | null {
    if (!this.canCollectFromLocation(locationId)) {
      return null;
    }

    const collectionCount = UnifiedSpaceshipStorage.getCollectionCount(locationId);
    let reward = this.calculateReward(type, coordinates, collectionCount, planetData);
    
    // Apply streak multiplier
    const streakInfo = UnifiedSpaceshipStorage.getCollectionStreakInfo();
    let finalMultiplier = streakInfo.streakMultiplier;
    
    // Apply Discovery Bonus (2x rewards for first 10 unique locations per day)
    const discoveryBonus = this.getDiscoveryBonus(streakInfo.dailyCollections);
    finalMultiplier *= discoveryBonus;
    
    if (finalMultiplier > 1.0) {
      reward = {
        antimatter: Math.floor(reward.antimatter * finalMultiplier),
        element115: Math.floor(reward.element115 * finalMultiplier),
        deuterium: Math.floor(reward.deuterium * finalMultiplier),
      };
    }
    
    // Mark location as collected (this updates streak)
    UnifiedSpaceshipStorage.markLocationCollected(locationId);
    
    // Add resources to spaceship
    UnifiedSpaceshipStorage.addResources(reward);
    
    return reward;
  }

  static getLocationCollection(locationId: string): { totalCollections: number } | null {
    const count = UnifiedSpaceshipStorage.getCollectionCount(locationId);
    return count > 0 ? { totalCollections: count } : null;
  }

  static showCollectionSuccess(reward: ResourceReward, locationType: string, bonusInfo?: { streakBonus: boolean; discoveryBonus: number }): void {
    const toast = document.createElement("div");
    toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-green-900/90 to-blue-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-green-500/50";
    toast.style.animation = "slideInDown 0.3s ease-out";
    
    const typeEmojis = {
      galaxy: "🌌",
      system: "⭐",
      planet: "🪐"
    };
    
    const emoji = typeEmojis[locationType as keyof typeof typeEmojis] || "📦";
    
    let bonusText = "";
    if (bonusInfo?.discoveryBonus > 1.0) {
      if (bonusInfo.discoveryBonus === 2.0) {
        bonusText += '<div class="text-xs text-yellow-300 mt-1">🎉 Discovery Bonus: 2x Rewards!</div>';
      } else if (bonusInfo.discoveryBonus === 1.5) {
        bonusText += '<div class="text-xs text-yellow-300 mt-1">✨ Discovery Bonus: 1.5x Rewards!</div>';
      }
    }
    if (bonusInfo?.streakBonus) {
      bonusText += '<div class="text-xs text-purple-300 mt-1">🔥 Streak Bonus: +25%</div>';
    }
    
    toast.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="text-2xl">${emoji}</span>
        <div>
          <div class="text-sm font-bold text-green-300">Resources Collected!</div>
          <div class="text-xs text-green-200 mt-1 flex gap-3">
            <span class="text-purple-300">+${reward.antimatter} AM</span>
            <span class="text-cyan-300">+${reward.element115} E115</span>
            <span class="text-orange-300">+${reward.deuterium} D</span>
          </div>
          ${bonusText}
        </div>
      </div>
    `;
    
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