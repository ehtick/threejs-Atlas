import { ShipResourceManager } from "./ShipResources";
import { NavigationHelper } from "./NavigationHelper";

export class NavigationManager {
  private static instance: NavigationManager;
  private isInitialized = false;

  static getInstance(): NavigationManager {
    if (!NavigationManager.instance) {
      NavigationManager.instance = new NavigationManager();
    }
    return NavigationManager.instance;
  }

  initialize(): void {
    if (this.isInitialized) return;
    this.isInitialized = true;

    // Intercept all navigation clicks
    document.addEventListener("click", this.handleClick.bind(this), true);
    
    // Generate daily resources on page load
    ShipResourceManager.generateDailyResources();
    ShipResourceManager.generatePassiveResourcesFromSavedLocations();
  }

  checkAndConsume(destination: any, currentCoords: number[], type: "galaxy" | "system" | "planet"): boolean {
    const destCoords = [destination.x, destination.y, destination.z];
    const distance = NavigationHelper.calculateDistance(currentCoords, destCoords);
    const cost = ShipResourceManager.calculateTravelCost(distance, type);
    const resources = ShipResourceManager.getResources();
    const upgrade = ShipResourceManager.getUpgrade();
    
    // Calculate actual cost with efficiency
    const actualCost = {
      antimatter: Math.floor(cost.antimatter / upgrade.efficiency),
      element115: Math.floor(cost.element115 / upgrade.efficiency),
      deuterium: Math.floor(cost.deuterium / upgrade.efficiency),
    };
    
    // Check if we can afford it
    const canAfford = 
      resources.antimatter >= actualCost.antimatter &&
      resources.element115 >= actualCost.element115 &&
      resources.deuterium >= actualCost.deuterium;
    
    const withinRange = distance <= upgrade.range;
    
    if (canAfford && withinRange) {
      // Consume resources
      const consumed = ShipResourceManager.consumeResources(cost);
      if (consumed) {
        this.showNavigationSuccess(actualCost, type);
        return true;
      }
    }
    
    // Show error
    const check = NavigationHelper.checkNavigationResources(currentCoords, destCoords, type);
    NavigationHelper.showNavigationError(check);
    return false;
  }

  private handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const link = target.closest("a") as HTMLAnchorElement;
    
    if (!link || !link.href) return;
    
    // Check if this is a navigation link
    const url = new URL(link.href);
    if (url.origin !== window.location.origin) return;
    
    // Parse navigation type and destination
    const navigation = this.parseNavigation(url);
    if (!navigation) return;
    
    // Calculate and check resources
    const canNavigate = this.checkAndConsumeResources(navigation);
    
    if (!canNavigate) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  private parseNavigation(url: URL): any {
    const pathname = url.pathname;
    
    // Stargate navigation
    if (pathname.includes("/stargate/")) {
      const encodedData = pathname.split("/stargate/")[1];
      try {
        const decoded = atob(encodedData);
        const data = JSON.parse(decoded);
        return {
          type: data.type || "galaxy",
          destination: data.coordinates || [0, 0, 0],
          url: url.href
        };
      } catch {
        return null;
      }
    }
    
    // Direct navigation patterns
    if (pathname.match(/^\/galaxy\/\d+$/)) {
      const page = parseInt(pathname.split("/")[2]);
      return {
        type: "galaxy",
        destination: [page * 1000, page * 1000, page * 1000],
        url: url.href
      };
    }
    
    if (pathname.match(/^\/system\/\d+$/)) {
      return {
        type: "system",
        destination: this.estimateSystemCoordinates(),
        url: url.href
      };
    }
    
    if (pathname.match(/^\/planet\//)) {
      return {
        type: "planet",
        destination: this.estimatePlanetCoordinates(),
        url: url.href
      };
    }
    
    return null;
  }

  private getCurrentCoordinates(): number[] {
    // Try to get coordinates from the current page
    const pathMatch = window.location.pathname.match(/\/galaxy\/(\d+)/);
    if (pathMatch) {
      const page = parseInt(pathMatch[1]);
      return [page * 1000, page * 1000, page * 1000];
    }
    
    // Default coordinates if we can't determine current position
    return [0, 0, 0];
  }

  private estimateSystemCoordinates(): number[] {
    const current = this.getCurrentCoordinates();
    // Systems are relatively close, add small offset
    return [current[0] + 100, current[1] + 100, current[2] + 100];
  }

  private estimatePlanetCoordinates(): number[] {
    const current = this.getCurrentCoordinates();
    // Planets are very close, minimal offset
    return [current[0] + 10, current[1] + 10, current[2] + 10];
  }

  private checkAndConsumeResources(navigation: any): boolean {
    const currentCoords = this.getCurrentCoordinates();
    const distance = NavigationHelper.calculateDistance(currentCoords, navigation.destination);
    const cost = ShipResourceManager.calculateTravelCost(distance, navigation.type);
    const resources = ShipResourceManager.getResources();
    const upgrade = ShipResourceManager.getUpgrade();
    
    // Calculate actual cost with efficiency
    const actualCost = {
      antimatter: Math.floor(cost.antimatter / upgrade.efficiency),
      element115: Math.floor(cost.element115 / upgrade.efficiency),
      deuterium: Math.floor(cost.deuterium / upgrade.efficiency),
    };
    
    // Check if we can afford it
    const canAfford = 
      resources.antimatter >= actualCost.antimatter &&
      resources.element115 >= actualCost.element115 &&
      resources.deuterium >= actualCost.deuterium;
    
    const withinRange = distance <= upgrade.range;
    
    if (canAfford && withinRange) {
      // Consume resources
      const consumed = ShipResourceManager.consumeResources(cost);
      if (consumed) {
        this.showNavigationSuccess(actualCost, navigation.type);
        return true;
      }
    }
    
    // Show error
    const check = NavigationHelper.checkNavigationResources(
      currentCoords,
      navigation.destination,
      navigation.type
    );
    NavigationHelper.showNavigationError(check);
    return false;
  }

  private showNavigationSuccess(cost: any, type: string): void {
    const toast = document.createElement("div");
    toast.className = "fixed bottom-4 left-4 z-50 bg-green-900/90 text-white px-4 py-3 rounded-lg shadow-lg border border-green-500/50";
    toast.style.animation = "slideInLeft 0.3s ease-out";
    
    const typeEmoji = {
      galaxy: "🌌",
      system: "⭐",
      planet: "🪐"
    }[type] || "🚀";
    
    toast.innerHTML = `
      <div class="flex items-center space-x-2">
        <span class="text-green-300">${typeEmoji}</span>
        <div>
          <div class="text-sm font-semibold">Navigation Engaged!</div>
          <div class="text-xs text-green-200">
            Consumed: ${cost.antimatter} AM | ${cost.element115} E115 | ${cost.deuterium} D
          </div>
        </div>
      </div>
    `;
    
    // Add CSS animation if not already present
    if (!document.getElementById("navigation-success-styles")) {
      const style = document.createElement("style");
      style.id = "navigation-success-styles";
      style.textContent = `
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = "slideOutLeft 0.3s ease-in forwards";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3000);
  }
}

// Auto-initialize on module load
if (typeof window !== "undefined") {
  NavigationManager.getInstance().initialize();
}