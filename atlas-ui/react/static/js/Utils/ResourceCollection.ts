import { ShipResourceManager } from "./ShipResources";

export interface ResourceReward {
  antimatter: number;
  element115: number;
  deuterium: number;
}

export interface LocationCollection {
  id: string;
  lastCollected: number;
  totalCollections: number;
}

const COLLECTION_KEY = "atlas_resource_collections";
const COOLDOWN_HOURS = 1; // 1 hour cooldown per location

export class ResourceCollectionManager {
  private static getCollections(): { [key: string]: LocationCollection } {
    const stored = localStorage.getItem(COLLECTION_KEY);
    return stored ? JSON.parse(stored) : {};
  }

  private static setCollections(collections: { [key: string]: LocationCollection }): void {
    localStorage.setItem(COLLECTION_KEY, JSON.stringify(collections));
  }

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

  static getLocationCollection(locationId: string): LocationCollection | null {
    const collections = this.getCollections();
    return collections[locationId] || null;
  }

  static canCollectFromLocation(locationId: string): boolean {
    const collection = this.getLocationCollection(locationId);
    if (!collection) return true;
    
    const now = Date.now();
    const hoursSinceLastCollection = (now - collection.lastCollected) / (1000 * 60 * 60);
    return hoursSinceLastCollection >= COOLDOWN_HOURS;
  }

  static getTimeUntilNextCollection(locationId: string): number {
    const collection = this.getLocationCollection(locationId);
    if (!collection) return 0;
    
    const now = Date.now();
    const hoursSinceLastCollection = (now - collection.lastCollected) / (1000 * 60 * 60);
    const remaining = COOLDOWN_HOURS - hoursSinceLastCollection;
    return remaining > 0 ? remaining : 0;
  }

  static calculateReward(type: "galaxy" | "system" | "planet", collectionCount: number = 0): ResourceReward {
    const baseRewards = {
      galaxy: { antimatter: 20, element115: 15, deuterium: 10 },
      system: { antimatter: 15, element115: 20, deuterium: 15 },
      planet: { antimatter: 10, element115: 10, deuterium: 25 },
    };

    const base = baseRewards[type];
    
    // Diminishing returns after 5 collections from same location
    const diminishingFactor = collectionCount > 5 ? Math.max(0.3, 1 - (collectionCount - 5) * 0.1) : 1;
    
    // Add some randomness (±20%)
    const randomFactor = 0.8 + Math.random() * 0.4;
    
    return {
      antimatter: Math.floor(base.antimatter * diminishingFactor * randomFactor),
      element115: Math.floor(base.element115 * diminishingFactor * randomFactor),
      deuterium: Math.floor(base.deuterium * diminishingFactor * randomFactor),
    };
  }

  static collectResources(locationId: string, type: "galaxy" | "system" | "planet"): ResourceReward | null {
    if (!this.canCollectFromLocation(locationId)) {
      return null;
    }

    const collections = this.getCollections();
    const existingCollection = collections[locationId];
    const collectionCount = existingCollection ? existingCollection.totalCollections : 0;
    
    const reward = this.calculateReward(type, collectionCount);
    
    // Update collection record
    collections[locationId] = {
      id: locationId,
      lastCollected: Date.now(),
      totalCollections: collectionCount + 1,
    };
    this.setCollections(collections);
    
    // Add resources to ship
    ShipResourceManager.addResources(reward);
    
    return reward;
  }

  static getCollectionStats(): {
    totalCollections: number;
    uniqueLocations: number;
    totalResourcesGathered: ResourceReward;
  } {
    const collections = this.getCollections();
    const locationIds = Object.keys(collections);
    
    let totalCollections = 0;
    const totalResourcesGathered = { antimatter: 0, element115: 0, deuterium: 0 };
    
    locationIds.forEach(locationId => {
      const collection = collections[locationId];
      totalCollections += collection.totalCollections;
      
      // Estimate resources gathered (approximation since we don't store exact amounts)
      const locationTypeMatch = locationId.match(/^(galaxy|system|planet)_/);
      if (locationTypeMatch) {
        const type = locationTypeMatch[1] as "galaxy" | "system" | "planet";
        for (let i = 0; i < collection.totalCollections; i++) {
          const reward = this.calculateReward(type, i);
          totalResourcesGathered.antimatter += reward.antimatter;
          totalResourcesGathered.element115 += reward.element115;
          totalResourcesGathered.deuterium += reward.deuterium;
        }
      }
    });
    
    return {
      totalCollections,
      uniqueLocations: locationIds.length,
      totalResourcesGathered,
    };
  }

  static showCollectionSuccess(reward: ResourceReward, locationType: string): void {
    const toast = document.createElement("div");
    toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-green-500/50";
    toast.style.animation = "slideInDown 0.3s ease-out";
    
    const typeEmoji = {
      galaxy: "🌌",
      system: "⭐",
      planet: "🪐"
    }[locationType] || "📦";
    
    toast.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="text-2xl">${typeEmoji}</span>
        <div>
          <div class="text-sm font-bold text-green-300">Resources Collected!</div>
          <div class="text-xs text-green-200 mt-1 flex gap-3">
            <span class="text-purple-300">+${reward.antimatter} AM</span>
            <span class="text-cyan-300">+${reward.element115} E115</span>
            <span class="text-orange-300">+${reward.deuterium} D</span>
          </div>
        </div>
      </div>
    `;
    
    // Add CSS if not present
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
}