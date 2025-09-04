// atlas-ui/react/static/js/Utils/LocationBookmarks.tsx
import { DailyChallengesManager } from "./DailyChallenges.tsx";
import { getItem, setItem, removeItem } from "./b64.tsx";

export interface SavedLocation {
  id: string;
  name: string;
  type: "galaxy" | "system" | "planet";
  timestamp: number;
  stargateUrl: string;
}

export class LocationBookmarks {
  private static readonly STORAGE_KEY = "_atlasLocations";
  private static readonly BASE_MAX_LOCATIONS = 5;
  private static readonly BONUS_PER_COMPLETION = 5;
  private static readonly ABSOLUTE_MAX_LOCATIONS = 999;

  public static getLocations(): SavedLocation[] {
    try {
      const data = getItem(this.STORAGE_KEY);
      if (!data) return [];

      const locations = JSON.parse(data);
      return Array.isArray(locations) ? locations : [];
    } catch (error) {
      console.error("Error reading saved locations:", error);
      return [];
    }
  }

  private static normalizeStargateUrl(url: string): string {
    // Extract just the /stargate/xxx part from any URL format
    const stargateIndex = url.indexOf('/stargate/');
    return stargateIndex !== -1 ? url.substring(stargateIndex) : url;
  }

  public static isLocationSaved(stargateUrl: string): boolean {
    const normalizedUrl = this.normalizeStargateUrl(stargateUrl);
    const savedLocations = this.getLocations();
    return savedLocations.some((loc) => 
      this.normalizeStargateUrl(loc.stargateUrl) === normalizedUrl
    );
  }

  public static async saveLocation(location: Omit<SavedLocation, "id" | "timestamp">): Promise<boolean> {
    try {
      const locations = this.getLocations();
      const currentMaxLocations = this.getCurrentMaxLocations();

      const existingIndex = locations.findIndex((loc) => loc.stargateUrl === location.stargateUrl);

      const newLocation: SavedLocation = {
        ...location,
        id: this.generateId(),
        timestamp: Date.now(),
      };

      if (existingIndex !== -1) {
        locations[existingIndex] = newLocation;
        setItem(this.STORAGE_KEY, JSON.stringify(locations));
        return true;
      }

      if (locations.length >= currentMaxLocations) {
        const shouldOverwrite = await this.showSlotFullDialog(currentMaxLocations);
        if (!shouldOverwrite) {
          return false;
        }
      }

      locations.push(newLocation);
      if (locations.length > currentMaxLocations) {
        locations.sort((a, b) => b.timestamp - a.timestamp);
        locations.splice(currentMaxLocations);
      }

      setItem(this.STORAGE_KEY, JSON.stringify(locations));
      return true;
    } catch (error) {
      console.error("Error saving location:", error);
      return false;
    }
  }

  public static saveLocationSync(location: Omit<SavedLocation, "id" | "timestamp">): void {
    const locations = this.getLocations();
    const currentMaxLocations = this.getCurrentMaxLocations();

    const existingIndex = locations.findIndex((loc) => loc.stargateUrl === location.stargateUrl);

    const newLocation: SavedLocation = {
      ...location,
      id: this.generateId(),
      timestamp: Date.now(),
    };

    if (existingIndex !== -1) {
      locations[existingIndex] = newLocation;
    } else {
      locations.push(newLocation);
    }

    if (locations.length > currentMaxLocations) {
      locations.sort((a, b) => b.timestamp - a.timestamp);
      locations.splice(currentMaxLocations);
    }

    setItem(this.STORAGE_KEY, JSON.stringify(locations));
  }

  public static removeLocation(id: string): void {
    try {
      const locations = this.getLocations();
      const filteredLocations = locations.filter((loc) => loc.id !== id);

      setItem(this.STORAGE_KEY, JSON.stringify(filteredLocations));
    } catch (error) {
      console.error("Error removing location:", error);
    }
  }

  public static clearAllLocations(): void {
    try {
      removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error("Error clearing locations:", error);
    }
  }

  private static generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private static async showSlotFullDialog(maxSlots: number): Promise<boolean> {
    return new Promise((resolve) => {
      const overlay = document.createElement("div");
      overlay.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300 opacity-0";
      overlay.style.backdropFilter = "blur(8px)";

      const modal = document.createElement("div");
      modal.className = "relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-slate-600/50 rounded-2xl p-8 max-w-md mx-4 text-white shadow-2xl backdrop-blur-xl transform scale-95 transition-all duration-300";
      modal.style.backdropFilter = "blur(20px)";
      modal.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)";

      const container = document.createElement("div");
      container.className = "text-center";

      const iconContainer = document.createElement("div");
      iconContainer.className = "inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-6";

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "w-8 h-8 text-amber-400");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("viewBox", "0 0 24 24");

      const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path1.setAttribute("stroke-linecap", "round");
      path1.setAttribute("stroke-linejoin", "round");
      path1.setAttribute("stroke-width", "2");
      path1.setAttribute("d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z");

      const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path2.setAttribute("stroke-linecap", "round");
      path2.setAttribute("stroke-linejoin", "round");
      path2.setAttribute("stroke-width", "2");
      path2.setAttribute("d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z");

      svg.appendChild(path1);
      svg.appendChild(path2);
      iconContainer.appendChild(svg);

      const title = document.createElement("h2");
      title.className = "text-2xl font-bold mb-4 text-white";
      title.textContent = "Storage Full";

      const tipParagraph = document.createElement("p");
      tipParagraph.className = "text-slate-400 mb-6 text-[10px] bg-slate-800/50 rounded-lg p-3 border border-slate-700/50";
      tipParagraph.textContent = "💡 Complete daily challenges to increase your storage capacity";

      const mainParagraph = document.createElement("p");
      mainParagraph.className = "text-slate-300 mb-4 text-base leading-relaxed";
      mainParagraph.textContent = "You have reached your maximum of ";

      const maxSlotsSpan = document.createElement("span");
      maxSlotsSpan.className = "font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded-lg";
      maxSlotsSpan.textContent = maxSlots.toString();

      mainParagraph.appendChild(maxSlotsSpan);
      mainParagraph.appendChild(document.createTextNode(" saved locations."));

      const questionParagraph = document.createElement("p");
      questionParagraph.className = "text-slate-200 mb-8 text-base";
      questionParagraph.textContent = "Overwrite the oldest saved location?";

      const buttonContainer = document.createElement("div");
      buttonContainer.className = "flex gap-4 justify-center";

      const cancelButton = document.createElement("button");
      cancelButton.id = "cancelSave";
      cancelButton.className = "px-6 py-3 bg-slate-700/80 hover:bg-slate-600/80 border border-slate-600/50 hover:border-slate-500/50 rounded-xl transition-all duration-200 font-medium text-slate-200 hover:text-white transform hover:scale-105 hover:shadow-lg";
      cancelButton.textContent = "Cancel";

      const confirmButton = document.createElement("button");
      confirmButton.id = "confirmOverwrite";
      confirmButton.className = "px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-xl transition-all duration-200 font-semibold text-white transform hover:scale-105 hover:shadow-lg border border-amber-400/30";
      confirmButton.textContent = "Overwrite";

      buttonContainer.appendChild(cancelButton);
      buttonContainer.appendChild(confirmButton);

      container.appendChild(iconContainer);
      container.appendChild(title);
      container.appendChild(tipParagraph);
      container.appendChild(mainParagraph);
      container.appendChild(questionParagraph);
      container.appendChild(buttonContainer);

      modal.appendChild(container);

      overlay.appendChild(modal);
      document.body.appendChild(overlay);

      requestAnimationFrame(() => {
        overlay.style.opacity = "1";
        modal.style.transform = "scale(1)";
      });

      const cancelBtn = modal.querySelector("#cancelSave");
      const confirmBtn = modal.querySelector("#confirmOverwrite");

      const cleanup = (result: boolean) => {
        overlay.style.opacity = "0";
        modal.style.transform = "scale(0.95)";

        setTimeout(() => {
          if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
          }
          resolve(result);
        }, 300);
      };

      cancelBtn?.addEventListener("click", () => {
        cleanup(false);
      });

      confirmBtn?.addEventListener("click", () => {
        cleanup(true);
      });

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          cleanup(false);
        }
      });

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          document.removeEventListener("keydown", handleKeyDown);
          cleanup(false);
        }
      };
      document.addEventListener("keydown", handleKeyDown);
    });
  }

  public static hasAvailableSlot(): boolean {
    const locations = this.getLocations();
    const maxLocations = this.getCurrentMaxLocations();
    return locations.length < maxLocations;
  }

  public static getAvailableSlots(): number {
    const locations = this.getLocations();
    const maxLocations = this.getCurrentMaxLocations();
    return Math.max(0, maxLocations - locations.length);
  }

  public static getCurrentMaxLocations(): number {
    try {
      const completedDays = this.getCompletedDaysCount();

      const todayCompleted = DailyChallengesManager.getCompletionStatus().allCompleted ? 1 : 0;

      const calculatedMax = this.BASE_MAX_LOCATIONS + (completedDays + todayCompleted) * this.BONUS_PER_COMPLETION;

      return Math.min(calculatedMax, this.ABSOLUTE_MAX_LOCATIONS);
    } catch (error) {
      console.error("Error calculating max locations:", error);
      return this.BASE_MAX_LOCATIONS;
    }
  }

  private static getCompletedDaysCount(): number {
    try {
      const challengesData = getItem("_atlasDailyChallenges");
      if (challengesData) {
        const challenges = JSON.parse(challengesData);
        return challenges.totalCompletedDays || 0;
      }

      return 0;
    } catch (error) {
      console.error("Error getting completion history:", error);
      return 0;
    }
  }

  public static getLocationStats(): { total: number; galaxies: number; systems: number; planets: number; maxAllowed: number; available: number } {
    const locations = this.getLocations();
    const maxAllowed = this.getCurrentMaxLocations();

    return {
      total: locations.length,
      galaxies: locations.filter((loc) => loc.type === "galaxy").length,
      systems: locations.filter((loc) => loc.type === "system").length,
      planets: locations.filter((loc) => loc.type === "planet").length,
      maxAllowed,
      available: Math.max(0, maxAllowed - locations.length),
    };
  }

  public static async saveLocationWithConfirmation(name: string, type: "galaxy" | "system" | "planet", stargateUrl: string): Promise<{ success: boolean; message: string }> {
    try {
      const location = { name, type, stargateUrl };
      const saved = await this.saveLocation(location);

      if (saved) {
        return {
          success: true,
          message: `Location "${name}" saved successfully!`,
        };
      } else {
        return {
          success: false,
          message: "Save operation cancelled by user.",
        };
      }
    } catch (error) {
      console.error("Error saving location with confirmation:", error);
      return {
        success: false,
        message: "Failed to save location. Please try again.",
      };
    }
  }
}
