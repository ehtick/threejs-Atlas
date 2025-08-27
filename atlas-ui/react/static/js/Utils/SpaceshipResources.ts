import { UnifiedSpaceshipStorage } from "./UnifiedSpaceshipStorage";

export interface SpaceshipResource {
  antimatter: number;
  element115: number;
  deuterium: number;
}

export interface SpaceshipUpgrade {
  level: number;
  efficiency: number;
  range: number;
  storage: number;
  passiveGeneration: number;
}

export interface TravelCost {
  antimatter: number;
  element115: number;
  deuterium: number;
}

export interface PassiveGeneration {
  antimatter: number;
  element115: number;
  deuterium: number;
  sources: {
    planets: number;
    systems: number;
    galaxies: number;
  };
}

export class SpaceshipResourceManager {
  // Initialize and migrate on first load
  static initialize(): void {
    UnifiedSpaceshipStorage.migrateFromOldStorage();
  }

  static getResources(): SpaceshipResource {
    return UnifiedSpaceshipStorage.getResources();
  }

  static getUpgrade(): SpaceshipUpgrade {
    return UnifiedSpaceshipStorage.getUpgrade();
  }

  static addResources(toAdd: Partial<SpaceshipResource>): void {
    UnifiedSpaceshipStorage.addResources({
      antimatter: toAdd.antimatter || 0,
      element115: toAdd.element115 || 0,
      deuterium: toAdd.deuterium || 0
    });
  }

  static consumeResources(cost: TravelCost): boolean {
    return UnifiedSpaceshipStorage.consumeResources(cost);
  }

  static calculateTravelCost(locationType: "galaxy" | "system" | "planet", distance: number = 0): TravelCost {
    const baseCosts = {
      galaxy: { antimatter: 8, element115: 6, deuterium: 5 }, // Accessible but significant for long-range exploration
      system: { antimatter: 3, element115: 2, deuterium: 4 }, // Very cheap to encourage discovery
      planet: { antimatter: 0, element115: 0, deuterium: 1 }, // Almost free to promote exploration
    };

    const base = baseCosts[locationType];
    const distanceMultiplier = Math.max(1, distance / 100);
    
    return {
      antimatter: Math.floor(base.antimatter * distanceMultiplier),
      element115: Math.floor(base.element115 * distanceMultiplier),
      deuterium: Math.floor(base.deuterium * distanceMultiplier),
    };
  }

  static canAffordTravel(locationType: "galaxy" | "system" | "planet", distance: number = 0): boolean {
    const cost = this.calculateTravelCost(locationType, distance);
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

  static getUpgradeCost(currentLevel: number): TravelCost {
    const baseCost = 30; // Very accessible base cost for smooth progression
    const multiplier = Math.pow(1.25, currentLevel - 1); // Gentle exponential curve (25% instead of 50%)
    
    return {
      antimatter: Math.floor(baseCost * multiplier),
      element115: Math.floor(baseCost * multiplier * 1.2),
      deuterium: Math.floor(baseCost * multiplier * 0.8),
    };
  }

  static canAffordUpgrade(): boolean {
    const upgrade = this.getUpgrade();
    const MAX_LEVEL = 100;
    
    // Check if already at max level
    if (upgrade.level >= MAX_LEVEL) {
      return false;
    }
    
    const cost = this.getUpgradeCost(upgrade.level);
    const resources = this.getResources();

    return (
      resources.antimatter >= cost.antimatter &&
      resources.element115 >= cost.element115 &&
      resources.deuterium >= cost.deuterium
    );
  }

  static upgradeShip(): boolean {
    const upgrade = this.getUpgrade();
    const cost = this.getUpgradeCost(upgrade.level);
    return UnifiedSpaceshipStorage.upgradeShip(cost);
  }

  static calculatePassiveGeneration(): PassiveGeneration {
    const upgrade = this.getUpgrade();
    const savedLocationsData = JSON.parse(localStorage.getItem("_atlasLocations") || "[]");
    
    // Handle both old array format and new object format
    const savedLocations = Array.isArray(savedLocationsData) 
      ? savedLocationsData 
      : savedLocationsData.locations || [];
    
    let totalGeneration = { antimatter: 0, element115: 0, deuterium: 0 };
    let sources = { planets: 0, systems: 0, galaxies: 0 };
    
    savedLocations.forEach((location: any) => {
      if (location.type === "planet") {
        sources.planets++;
        totalGeneration.antimatter += 8; // Generous passive generation per minute
        totalGeneration.element115 += 6; // Generous passive generation per minute
        totalGeneration.deuterium += 10; // Generous passive generation per minute
      } else if (location.type === "system") {
        sources.systems++;
        totalGeneration.antimatter += 3; // Meaningful passive generation per minute
        totalGeneration.element115 += 2; // Meaningful passive generation per minute
        totalGeneration.deuterium += 4; // Meaningful passive generation per minute
      }
      // Galaxies don't generate passive resources as per requirements
    });
    
    // Apply ship passive generation multiplier
    totalGeneration.antimatter = Math.floor(totalGeneration.antimatter * upgrade.passiveGeneration);
    totalGeneration.element115 = Math.floor(totalGeneration.element115 * upgrade.passiveGeneration);
    totalGeneration.deuterium = Math.floor(totalGeneration.deuterium * upgrade.passiveGeneration);
    
    return {
      ...totalGeneration,
      sources
    };
  }

  static processPassiveGeneration(): void {
    if (UnifiedSpaceshipStorage.shouldProcessPassive()) {
      const generation = this.calculatePassiveGeneration();
      
      if (generation.antimatter > 0 || generation.element115 > 0 || generation.deuterium > 0) {
        this.addResources({
          antimatter: generation.antimatter,
          element115: generation.element115,
          deuterium: generation.deuterium,
        });
        
        this.showPassiveGenerationNotification(generation);
      }
      
      UnifiedSpaceshipStorage.markPassiveProcessed();
    }
  }

  // Calculate accumulated resources with x5 upgrade cost limit
  static getAccumulatedResourcesWithLimit(): PassiveGeneration {
    const baseGeneration = this.calculatePassiveGeneration();
    const upgrade = this.getUpgrade();
    const upgradeCost = this.getUpgradeCost(upgrade.level);
    
    // Calculate x5 upgrade cost limit
    const limit = {
      antimatter: upgradeCost.antimatter * 5,
      element115: upgradeCost.element115 * 5,
      deuterium: upgradeCost.deuterium * 5,
    };
    
    // Calculate how many intervals have passed
    const data = UnifiedSpaceshipStorage.getData();
    const lastPassive = data.t.lp;
    const now = Date.now();
    
    // If no previous passive generation timestamp, return base generation only
    if (!lastPassive || lastPassive === 0) {
      return baseGeneration;
    }
    
    // If no sources, return zero generation
    if (baseGeneration.sources.planets === 0 && baseGeneration.sources.systems === 0) {
      return baseGeneration;
    }
    
    const intervalsPassed = Math.floor((now - lastPassive) / (1 * 60 * 1000)); // 1 minute intervals for frequent engagement
    
    if (intervalsPassed < 1) {
      // Less than one interval passed - no resources available yet
      return {
        antimatter: 0,
        element115: 0,
        deuterium: 0,
        sources: baseGeneration.sources
      };
    } else if (intervalsPassed === 1) {
      // Exactly one interval - return base generation
      return baseGeneration;
    }
    
    // Calculate total accumulated resources with higher caps for smoother progression
    const accumulated = {
      antimatter: Math.min(baseGeneration.antimatter * intervalsPassed, limit.antimatter * 2), // Double the cap
      element115: Math.min(baseGeneration.element115 * intervalsPassed, limit.element115 * 2), // Double the cap
      deuterium: Math.min(baseGeneration.deuterium * intervalsPassed, limit.deuterium * 2), // Double the cap
      sources: baseGeneration.sources
    };
    
    return accumulated;
  }

  static showPassiveGenerationNotification(generation: PassiveGeneration): void {
    if (generation.antimatter + generation.element115 + generation.deuterium === 0) return;
    
    const toast = document.createElement("div");
    toast.className = "fixed top-4 right-4 z-50 bg-gradient-to-r from-purple-900/90 to-blue-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-purple-500/50";
    toast.style.animation = "slideInRight 0.3s ease-out";
    
    // Calculate generation rate per hour
    const perHour = {
      antimatter: generation.antimatter * 60, // Per minute * 60 = per hour
      element115: generation.element115 * 60,
      deuterium: generation.deuterium * 60
    };
    
    toast.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="text-2xl">⛏️</span>
        <div>
          <div class="text-sm font-bold text-purple-300">Passive Mining</div>
          <div class="text-xs text-purple-200 mt-1">
            ${generation.sources.planets}🪐 ${generation.sources.systems}⭐ generating
          </div>
          <div class="text-xs text-purple-200 flex gap-3 mt-1">
            ${generation.antimatter > 0 ? `<span class="text-purple-300">+${generation.antimatter} AM</span>` : ''}
            ${generation.element115 > 0 ? `<span class="text-cyan-300">+${generation.element115} E115</span>` : ''}
            ${generation.deuterium > 0 ? `<span class="text-orange-300">+${generation.deuterium} D</span>` : ''}
          </div>
          <div class="text-xs text-purple-100 mt-1 opacity-75">
            Rate: ${perHour.antimatter}/${perHour.element115}/${perHour.deuterium} per hour
          </div>
        </div>
      </div>
    `;
    
    if (!document.getElementById("passive-toast-styles")) {
      const style = document.createElement("style");
      style.id = "passive-toast-styles";
      style.textContent = `
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = "slideOutRight 0.3s ease-in forwards";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 5000); // Show longer for more information
  }

  static reset(): void {
    UnifiedSpaceshipStorage.reset();
  }

  static getResourcesPercentage(): { antimatter: number; element115: number; deuterium: number } {
    const resources = this.getResources();
    const upgrade = this.getUpgrade();
    
    return {
      antimatter: (resources.antimatter / upgrade.storage) * 100,
      element115: (resources.element115 / upgrade.storage) * 100,
      deuterium: (resources.deuterium / upgrade.storage) * 100,
    };
  }

  static getPassiveGenerationInfo(): { 
    generation: PassiveGeneration; 
    perHour: { antimatter: number; element115: number; deuterium: number };
    nextGenerationIn: number; 
  } {
    const generation = this.calculatePassiveGeneration();
    const nextGeneration = UnifiedSpaceshipStorage.shouldProcessPassive() 
      ? 0 
      : (1 * 60 * 1000 - (Date.now() - (UnifiedSpaceshipStorage.getData().t.lp || 0))) / 1000; // 1 minute intervals
    
    return {
      generation,
      perHour: {
        antimatter: generation.antimatter * 60, // Per minute * 60 = per hour
        element115: generation.element115 * 60,
        deuterium: generation.deuterium * 60,
      },
      nextGenerationIn: Math.max(0, nextGeneration)
    };
  }

  // Resource Exchange System
  static getExchangeRates(): { 
    [key: string]: { from: string; to: string; rate: number; available: number }[] 
  } {
    const resources = this.getResources();
    
    return {
      antimatter: [
        { from: "antimatter", to: "element115", rate: 1.2, available: resources.antimatter },
        { from: "antimatter", to: "deuterium", rate: 0.8, available: resources.antimatter }
      ],
      element115: [
        { from: "element115", to: "antimatter", rate: 0.9, available: resources.element115 },
        { from: "element115", to: "deuterium", rate: 1.1, available: resources.element115 }
      ],
      deuterium: [
        { from: "deuterium", to: "antimatter", rate: 1.3, available: resources.deuterium },
        { from: "deuterium", to: "element115", rate: 0.95, available: resources.deuterium }
      ]
    };
  }

  static exchangeResources(fromResource: "antimatter" | "element115" | "deuterium", 
                         toResource: "antimatter" | "element115" | "deuterium", 
                         amount: number): boolean {
    const resources = this.getResources();
    const rates = this.getExchangeRates();
    
    // Find the exchange rate
    const availableExchanges = rates[fromResource];
    const exchange = availableExchanges.find(e => e.to === toResource);
    
    if (!exchange || amount <= 0 || resources[fromResource] < amount) {
      return false;
    }
    
    const exchangeAmount = Math.floor(amount * exchange.rate);
    const upgrade = this.getUpgrade();
    
    // Check if we have enough storage for the received resource
    if (resources[toResource] + exchangeAmount > upgrade.storage) {
      return false;
    }
    
    // Execute exchange
    const newResources = { ...resources };
    newResources[fromResource] -= amount;
    newResources[toResource] += exchangeAmount;
    
    UnifiedSpaceshipStorage.setResources(newResources);
    
    // Show exchange notification
    this.showExchangeNotification(fromResource, toResource, amount, exchangeAmount);
    
    return true;
  }

  private static showExchangeNotification(fromResource: string, toResource: string, sentAmount: number, receivedAmount: number): void {
    const toast = document.createElement("div");
    toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-amber-900/90 to-orange-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-amber-500/50";
    toast.style.animation = "slideInDown 0.3s ease-out";
    
    const resourceLabels: { [key: string]: { name: string; color: string } } = {
      antimatter: { name: "AM", color: "text-purple-300" },
      element115: { name: "E115", color: "text-cyan-300" },
      deuterium: { name: "D", color: "text-orange-300" }
    };
    
    const fromLabel = resourceLabels[fromResource];
    const toLabel = resourceLabels[toResource];
    
    toast.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="text-2xl">🔄</span>
        <div>
          <div class="text-sm font-bold text-amber-300">Resource Exchange</div>
          <div class="text-xs text-amber-200 mt-1">
            <span class="${fromLabel.color}">-${sentAmount} ${fromLabel.name}</span>
            <span class="text-amber-300 mx-2">→</span>
            <span class="${toLabel.color}">+${receivedAmount} ${toLabel.name}</span>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = "slideOutUp 0.3s ease-in forwards";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }

}