import { SpaceshipResourceManager, TravelCost } from "./SpaceshipResources";

export class SpaceshipTravelManager {
  static getTravelCost(locationType: "galaxy" | "system" | "planet", distance: number = 0): TravelCost {
    return SpaceshipResourceManager.calculateTravelCost(locationType, distance);
  }

  static canAffordTravel(locationType: "galaxy" | "system" | "planet", distance: number = 0): boolean {
    // Always allow travel - resources are only for ship improvements now
    return true;
  }

  static executeTravel(locationType: "galaxy" | "system" | "planet", distance: number = 0): "success" | "partial" | "emergency" {
    const cost = this.getTravelCost(locationType, distance);
    const resources = SpaceshipResourceManager.getResources();
    const upgrade = SpaceshipResourceManager.getUpgrade();

    const actualCost = {
      antimatter: Math.floor(cost.antimatter / upgrade.efficiency),
      element115: Math.floor(cost.element115 / upgrade.efficiency),
      deuterium: Math.floor(cost.deuterium / upgrade.efficiency),
    };

    // Calculate what percentage of resources we have
    const resourcePercentages = [
      resources.antimatter / actualCost.antimatter,
      resources.element115 / actualCost.element115,
      resources.deuterium / actualCost.deuterium,
    ];
    
    const minPercentage = Math.min(...resourcePercentages);
    
    if (minPercentage >= 1.0) {
      // SUCCESS: We have all resources
      SpaceshipResourceManager.consumeResources(actualCost);
      this.showTravelNotification(locationType, actualCost);
      return "success";
    } else if (minPercentage >= 0.5) {
      // PARTIAL: We have 50%+ resources, consume everything we have
      SpaceshipResourceManager.consumeResources({
        antimatter: Math.min(resources.antimatter, actualCost.antimatter),
        element115: Math.min(resources.element115, actualCost.element115),
        deuterium: Math.min(resources.deuterium, actualCost.deuterium),
      });
      this.showPartialTravelNotification(locationType, actualCost, minPercentage);
      return "partial";
    } else {
      // EMERGENCY: Less than 50% resources, travel on fumes
      this.showEmergencyTravelNotification(locationType, actualCost);
      return "emergency";
    }
  }

  private static showTravelNotification(locationType: "galaxy" | "system" | "planet", cost: TravelCost): void {
    const toast = document.createElement("div");
    toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-blue-500/50";
    toast.style.animation = "slideInDown 0.3s ease-out";
    
    const typeEmojis = {
      galaxy: "🌌",
      system: "⭐",
      planet: "🪐"
    };
    
    const typeNames = {
      galaxy: "Galaxy",
      system: "System", 
      planet: "Planet"
    };
    
    toast.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="text-2xl">${typeEmojis[locationType]}</span>
        <div>
          <div class="text-sm font-bold text-blue-300">${typeNames[locationType]} Travel</div>
          <div class="text-xs text-blue-200 mt-1 flex gap-3">
            <span class="text-purple-300">-${cost.antimatter} AM</span>
            <span class="text-cyan-300">-${cost.element115} E115</span>
            <span class="text-orange-300">-${cost.deuterium} D</span>
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
    }, 2000);
  }

  private static showPartialTravelNotification(locationType: "galaxy" | "system" | "planet", cost: TravelCost, percentage: number): void {
    const toast = document.createElement("div");
    toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-orange-900/90 to-yellow-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-orange-500/50";
    toast.style.animation = "slideInDown 0.3s ease-out";
    
    const typeEmojis = {
      galaxy: "🌌",
      system: "⭐",
      planet: "🪐"
    };
    
    const typeNames = {
      galaxy: "Galaxy",
      system: "System", 
      planet: "Planet"
    };
    
    toast.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="text-2xl">${typeEmojis[locationType]}</span>
        <div>
          <div class="text-sm font-bold text-orange-300">${typeNames[locationType]} Travel - Low Fuel</div>
          <div class="text-xs text-orange-200 mt-1">${Math.floor(percentage * 100)}% fuel efficiency - slower travel</div>
          <div class="text-xs text-orange-200 mt-1 flex gap-3">
            <span class="text-purple-300">Need ${cost.antimatter} AM</span>
            <span class="text-cyan-300">Need ${cost.element115} E115</span>
            <span class="text-orange-300">Need ${cost.deuterium} D</span>
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
    }, 3500);
  }

  private static showEmergencyTravelNotification(locationType: "galaxy" | "system" | "planet", cost: TravelCost): void {
    const toast = document.createElement("div");
    toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-red-900/90 to-orange-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-red-500/50";
    toast.style.animation = "slideInDown 0.3s ease-out";
    
    const typeEmojis = {
      galaxy: "🌌",
      system: "⭐",
      planet: "🪐"
    };
    
    const typeNames = {
      galaxy: "Galaxy",
      system: "System", 
      planet: "Planet"
    };
    
    toast.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="text-2xl">${typeEmojis[locationType]}</span>
        <div>
          <div class="text-sm font-bold text-red-300">${typeNames[locationType]} Emergency Travel</div>
          <div class="text-xs text-red-200 mt-1">⚠️ Running on fumes - very slow travel</div>
          <div class="text-xs text-red-200 mt-1 flex gap-3">
            <span class="text-purple-300">Need ${cost.antimatter} AM</span>
            <span class="text-cyan-300">Need ${cost.element115} E115</span>
            <span class="text-orange-300">Need ${cost.deuterium} D</span>
          </div>
          <div class="text-xs text-red-200 mt-1">🔧 Collect resources or upgrade ship</div>
        </div>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = "slideOutUp 0.3s ease-in forwards";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4500);
  }

  private static showResourceShortageButTravelNotification(locationType: "galaxy" | "system" | "planet", cost: TravelCost): void {
    const toast = document.createElement("div");
    toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-yellow-900/90 to-orange-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-yellow-500/50";
    toast.style.animation = "slideInDown 0.3s ease-out";
    
    const typeEmojis = {
      galaxy: "🌌",
      system: "⭐",
      planet: "🪐"
    };
    
    const typeNames = {
      galaxy: "Galaxy",
      system: "System", 
      planet: "Planet"
    };
    
    toast.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="text-2xl">${typeEmojis[locationType]}</span>
        <div>
          <div class="text-sm font-bold text-yellow-300">${typeNames[locationType]} Travel - No Fuel</div>
          <div class="text-xs text-yellow-200 mt-1">Traveling on emergency reserves</div>
          <div class="text-xs text-yellow-200 mt-1 flex gap-3">
            <span class="text-purple-300">Need ${cost.antimatter} AM</span>
            <span class="text-cyan-300">Need ${cost.element115} E115</span>
            <span class="text-orange-300">Need ${cost.deuterium} D</span>
          </div>
          <div class="text-xs text-yellow-200 mt-1">⚡ Improve your ship for efficiency</div>
        </div>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = "slideOutUp 0.3s ease-in forwards";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  }

  static previewTravelCost(locationType: "galaxy" | "system" | "planet", distance: number = 0): string {
    const cost = this.getTravelCost(locationType, distance);
    const upgrade = SpaceshipResourceManager.getUpgrade();
    
    const actualCost = {
      antimatter: Math.floor(cost.antimatter / upgrade.efficiency),
      element115: Math.floor(cost.element115 / upgrade.efficiency),
      deuterium: Math.floor(cost.deuterium / upgrade.efficiency),
    };
    
    return `${actualCost.antimatter}AM | ${actualCost.element115}E115 | ${actualCost.deuterium}D`;
  }

  static getTravelEfficiency(): number {
    const upgrade = SpaceshipResourceManager.getUpgrade();
    return upgrade.efficiency;
  }

  static getMaxTravelRange(): number {
    const upgrade = SpaceshipResourceManager.getUpgrade();
    return upgrade.range;
  }
}