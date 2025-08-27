import { LocationBookmarks } from "./LocationBookmarks";

export interface ShipResource {
  antimatter: number;
  element115: number;
  deuterium: number;
}

export interface ShipUpgrade {
  level: number;
  efficiency: number; // Reduces travel costs
  range: number; // Maximum travel distance
  storage: number; // Maximum resource capacity
}

export interface TravelCost {
  antimatter: number;
  element115: number;
  deuterium: number;
}

const STORAGE_KEY = "atlas_ship_resources";
const UPGRADE_KEY = "atlas_ship_upgrades";

export class ShipResourceManager {
  private static DEFAULT_RESOURCES: ShipResource = {
    antimatter: 100,
    element115: 50,
    deuterium: 75,
  };

  private static DEFAULT_UPGRADE: ShipUpgrade = {
    level: 1,
    efficiency: 1.0,
    range: 200, // Increased initial range
    storage: 200,
  };

  static getResources(): ShipResource {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      this.setResources(this.DEFAULT_RESOURCES);
      return this.DEFAULT_RESOURCES;
    }
    return JSON.parse(stored);
  }

  static setResources(resources: ShipResource): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resources));
  }

  static addResources(toAdd: Partial<ShipResource>): void {
    const current = this.getResources();
    const upgrade = this.getUpgrade();
    
    current.antimatter = Math.min(
      (current.antimatter || 0) + (toAdd.antimatter || 0),
      upgrade.storage
    );
    current.element115 = Math.min(
      (current.element115 || 0) + (toAdd.element115 || 0),
      upgrade.storage
    );
    current.deuterium = Math.min(
      (current.deuterium || 0) + (toAdd.deuterium || 0),
      upgrade.storage
    );
    
    this.setResources(current);
  }

  static consumeResources(cost: TravelCost): boolean {
    const current = this.getResources();
    const upgrade = this.getUpgrade();
    
    const actualCost = {
      antimatter: Math.floor(cost.antimatter / upgrade.efficiency),
      element115: Math.floor(cost.element115 / upgrade.efficiency),
      deuterium: Math.floor(cost.deuterium / upgrade.efficiency),
    };

    if (
      current.antimatter >= actualCost.antimatter &&
      current.element115 >= actualCost.element115 &&
      current.deuterium >= actualCost.deuterium
    ) {
      current.antimatter -= actualCost.antimatter;
      current.element115 -= actualCost.element115;
      current.deuterium -= actualCost.deuterium;
      this.setResources(current);
      return true;
    }
    
    return false;
  }

  static calculateTravelCost(distance: number, locationType: "galaxy" | "system" | "planet"): TravelCost {
    const baseMultipliers = {
      galaxy: { antimatter: 0.5, element115: 0.3, deuterium: 0.2 },
      system: { antimatter: 0.2, element115: 0.4, deuterium: 0.4 },
      planet: { antimatter: 0.1, element115: 0.2, deuterium: 0.7 },
    };

    const multiplier = baseMultipliers[locationType];
    const baseCost = Math.min(distance, 1000);

    return {
      antimatter: Math.floor(baseCost * multiplier.antimatter),
      element115: Math.floor(baseCost * multiplier.element115),
      deuterium: Math.floor(baseCost * multiplier.deuterium),
    };
  }

  static canAffordTravel(distance: number, locationType: "galaxy" | "system" | "planet"): boolean {
    const cost = this.calculateTravelCost(distance, locationType);
    const resources = this.getResources();
    const upgrade = this.getUpgrade();

    const actualCost = {
      antimatter: Math.floor(cost.antimatter / upgrade.efficiency),
      element115: Math.floor(cost.element115 / upgrade.efficiency),
      deuterium: Math.floor(cost.deuterium / upgrade.efficiency),
    };

    return (
      resources.antimatter >= actualCost.antimatter &&
      resources.element115 >= actualCost.element115 &&
      resources.deuterium >= actualCost.deuterium &&
      distance <= upgrade.range
    );
  }

  static getUpgrade(): ShipUpgrade {
    const stored = localStorage.getItem(UPGRADE_KEY);
    if (!stored) {
      this.setUpgrade(this.DEFAULT_UPGRADE);
      return this.DEFAULT_UPGRADE;
    }
    return JSON.parse(stored);
  }

  static setUpgrade(upgrade: ShipUpgrade): void {
    localStorage.setItem(UPGRADE_KEY, JSON.stringify(upgrade));
  }

  static getUpgradeCost(currentLevel: number): TravelCost {
    const baseCost = 50;
    const multiplier = Math.pow(1.5, currentLevel);
    
    return {
      antimatter: Math.floor(baseCost * multiplier),
      element115: Math.floor(baseCost * multiplier * 0.8),
      deuterium: Math.floor(baseCost * multiplier * 0.6),
    };
  }

  static upgradeShip(): boolean {
    const current = this.getUpgrade();
    const cost = this.getUpgradeCost(current.level);
    
    if (this.consumeResources(cost)) {
      current.level += 1;
      current.efficiency = 1 + (current.level - 1) * 0.2;
      current.range = 200 + (current.level - 1) * 100; // Better range progression
      current.storage = 200 + (current.level - 1) * 100;
      this.setUpgrade(current);
      return true;
    }
    
    return false;
  }

  static reset(): void {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(UPGRADE_KEY);
  }

  static generateDailyResources(): void {
    const lastGeneration = localStorage.getItem("atlas_last_resource_generation");
    const today = new Date().toDateString();
    
    if (lastGeneration !== today) {
      // Base daily resources
      this.addResources({
        antimatter: 30,
        element115: 20,
        deuterium: 25,
      });
      localStorage.setItem("atlas_last_resource_generation", today);
    }
  }

  static generatePassiveResourcesFromSavedLocations(): void {
    const lastPassive = localStorage.getItem("atlas_last_passive_generation");
    const now = Date.now();
    const hoursSinceLastPassive = lastPassive ? (now - parseInt(lastPassive)) / (1000 * 60 * 60) : 24;
    
    // Generate passive resources every hour
    if (hoursSinceLastPassive >= 1) {
      const savedLocations = LocationBookmarks.getLocations();
      
      let passiveResources = { antimatter: 0, element115: 0, deuterium: 0 };
      
      savedLocations.forEach((location: any) => {
        // Each saved location generates 10% of base collection amount per hour
        const baseRewards = {
          galaxy: { antimatter: 2, element115: 1.5, deuterium: 1 },
          system: { antimatter: 1.5, element115: 2, deuterium: 1.5 },
          planet: { antimatter: 1, element115: 1, deuterium: 2.5 },
        };
        
        const reward = baseRewards[location.type] || baseRewards.galaxy;
        passiveResources.antimatter += Math.floor(reward.antimatter * Math.floor(hoursSinceLastPassive));
        passiveResources.element115 += Math.floor(reward.element115 * Math.floor(hoursSinceLastPassive));
        passiveResources.deuterium += Math.floor(reward.deuterium * Math.floor(hoursSinceLastPassive));
      });
      
      if (savedLocations.length > 0) {
        this.addResources(passiveResources);
        this.showPassiveResourcesNotification(passiveResources, savedLocations.length, Math.floor(hoursSinceLastPassive));
      }
      
      localStorage.setItem("atlas_last_passive_generation", now.toString());
    }
  }

  static showPassiveResourcesNotification(resources: any, locationCount: number, hours: number): void {
    if (resources.antimatter + resources.element115 + resources.deuterium === 0) return;
    
    const toast = document.createElement("div");
    toast.className = "fixed top-4 left-4 z-50 bg-blue-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-blue-500/50";
    toast.style.animation = "slideInLeft 0.3s ease-out";
    
    toast.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="text-2xl">📍</span>
        <div>
          <div class="text-sm font-bold text-blue-300">Passive Mining Complete!</div>
          <div class="text-xs text-blue-200 mt-1">
            ${locationCount} locations • ${hours}h mining
          </div>
          <div class="text-xs text-blue-200 flex gap-3 mt-1">
            <span class="text-purple-300">+${resources.antimatter} AM</span>
            <span class="text-cyan-300">+${resources.element115} E115</span>
            <span class="text-orange-300">+${resources.deuterium} D</span>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = "slideOutLeft 0.3s ease-in forwards";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 5000);
  }
}