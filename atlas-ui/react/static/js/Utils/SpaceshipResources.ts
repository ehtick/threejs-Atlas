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
  multiplier: number;
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
      galaxy: { antimatter: 25, element115: 20, deuterium: 15 }, // High cost - significant investment for galaxy exploration
      system: { antimatter: 8, element115: 6, deuterium: 10 }, // Medium cost - meaningful for system travel
      planet: { antimatter: 2, element115: 1, deuterium: 3 }, // Low but not free - encourages resource management
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
    // Calculate current storage capacity to ensure costs remain feasible
    let currentStorage: number;
    if (currentLevel <= 20) {
      currentStorage = 1000 + (currentLevel - 1) * 400;
    } else {
      currentStorage = 1000 + 20 * 400 + Math.floor(Math.log(currentLevel - 20 + 1) * 1200);
    }
    
    // Base cost that scales with storage capacity to maintain ~40-50% ratio for feasibility
    const baseCostRatio = 0.4; // 40% of storage capacity for most expensive resource (safer)
    const baseResourceCost = Math.floor(currentStorage * baseCostRatio / 1.3); // Divide by 1.3 since E115 has 1.3x multiplier
    
    // Add minimal level-based scaling for progression feel
    const levelScaling = 1 + (currentLevel - 1) * 0.01; // Only 1% increase per level
    const scaledCost = Math.floor(baseResourceCost * levelScaling);
    
    return {
      antimatter: scaledCost,
      element115: Math.floor(scaledCost * 1.3), // Element115 becomes more expensive
      deuterium: Math.floor(scaledCost * 0.9), // Deuterium slightly cheaper
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
        totalGeneration.antimatter += 3; // Per minute generation (was 12/5min = 2.4, rounded up)
        totalGeneration.element115 += 2; // Per minute generation (was 9/5min = 1.8, rounded up)
        totalGeneration.deuterium += 3; // Per minute generation (was 15/5min = 3)
      } else if (location.type === "system") {
        sources.systems++;
        totalGeneration.antimatter += 1; // Per minute generation (was 5/5min = 1)
        totalGeneration.element115 += 1; // Per minute generation (was 4/5min = 0.8, rounded up)
        totalGeneration.deuterium += 1; // Per minute generation (was 6/5min = 1.2, rounded down)
      }
      // Galaxies don't generate passive resources as per requirements
    });
    
    // Apply ship multiplier
    totalGeneration.antimatter = Math.floor(totalGeneration.antimatter * upgrade.multiplier);
    totalGeneration.element115 = Math.floor(totalGeneration.element115 * upgrade.multiplier);
    totalGeneration.deuterium = Math.floor(totalGeneration.deuterium * upgrade.multiplier);
    
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
    
    const intervalsPassed = Math.floor((now - lastPassive) / (1 * 60 * 1000)); // 1 minute intervals for immediate feedback
    
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
    toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-purple-900/90 to-blue-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-purple-500/50 w-[90vw] max-w-lg";
    toast.style.animation = "slideInDown 0.3s ease-out";
    
    // Create toast content using DOM manipulation instead of innerHTML
    const container = document.createElement("div");
    container.className = "flex items-center space-x-3";

    const emojiSpan = document.createElement("span");
    emojiSpan.className = "text-2xl";
    emojiSpan.textContent = "⛏️";

    const contentDiv = document.createElement("div");

    const titleDiv = document.createElement("div");
    titleDiv.className = "text-sm font-bold text-purple-300";
    titleDiv.textContent = "Mining Operations Complete!";

    const resourceDiv = document.createElement("div");
    resourceDiv.className = "text-xs text-purple-200 mt-1 flex gap-3";

    const amSpan = document.createElement("span");
    amSpan.className = "text-purple-300";
    amSpan.textContent = `+${generation.antimatter} AM`;

    const e115Span = document.createElement("span");
    e115Span.className = "text-cyan-300";
    e115Span.textContent = `+${generation.element115} E115`;

    const deuteriumSpan = document.createElement("span");
    deuteriumSpan.className = "text-orange-300";
    deuteriumSpan.textContent = `+${generation.deuterium} D`;

    resourceDiv.appendChild(amSpan);
    resourceDiv.appendChild(e115Span);
    resourceDiv.appendChild(deuteriumSpan);

    const sourceDiv = document.createElement("div");
    sourceDiv.className = "text-xs text-purple-300 mt-1";
    sourceDiv.textContent = `Collected from ${generation.sources.planets}🪐 ${generation.sources.systems}⭐`;

    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(resourceDiv);
    contentDiv.appendChild(sourceDiv);

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
    
    // Create toast content using DOM manipulation instead of innerHTML
    const container = document.createElement("div");
    container.className = "flex items-center space-x-3";

    const emojiSpan = document.createElement("span");
    emojiSpan.className = "text-2xl";
    emojiSpan.textContent = "🔄";

    const contentDiv = document.createElement("div");

    const titleDiv = document.createElement("div");
    titleDiv.className = "text-sm font-bold text-amber-300";
    titleDiv.textContent = "Resource Exchange";

    const exchangeDiv = document.createElement("div");
    exchangeDiv.className = "text-xs text-amber-200 mt-1";

    const fromSpan = document.createElement("span");
    fromSpan.className = fromLabel.color;
    fromSpan.textContent = `-${sentAmount} ${fromLabel.name}`;

    const arrowSpan = document.createElement("span");
    arrowSpan.className = "text-amber-300 mx-2";
    arrowSpan.textContent = "→";

    const toSpan = document.createElement("span");
    toSpan.className = toLabel.color;
    toSpan.textContent = `+${receivedAmount} ${toLabel.name}`;

    exchangeDiv.appendChild(fromSpan);
    exchangeDiv.appendChild(arrowSpan);
    exchangeDiv.appendChild(toSpan);

    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(exchangeDiv);

    container.appendChild(emojiSpan);
    container.appendChild(contentDiv);
    toast.appendChild(container);
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = "slideOutUp 0.3s ease-in forwards";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }

}