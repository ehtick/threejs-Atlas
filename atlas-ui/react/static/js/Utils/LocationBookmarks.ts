// Location bookmarks system for saving favorite stargate locations
import { DailyChallengesManager } from './DailyChallenges';

export interface SavedLocation {
  id: string;
  name: string;
  type: 'galaxy' | 'system' | 'planet';
  timestamp: number;
  stargateUrl: string;
}

export class LocationBookmarks {
  private static readonly STORAGE_KEY = '_atlasLocations';
  private static readonly BASE_MAX_LOCATIONS = 5;
  private static readonly BONUS_PER_COMPLETION = 5;
  private static readonly ABSOLUTE_MAX_LOCATIONS = 999;

  public static getLocations(): SavedLocation[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (!data) return [];
      
      const locations = JSON.parse(data);
      return Array.isArray(locations) ? locations : [];
    } catch (error) {
      console.error('Error reading saved locations:', error);
      return [];
    }
  }

  public static async saveLocation(location: Omit<SavedLocation, 'id' | 'timestamp'>): Promise<boolean> {
    try {
      const locations = this.getLocations();
      const currentMaxLocations = this.getCurrentMaxLocations();
      
      // Check if location already exists (by stargate URL)
      const existingIndex = locations.findIndex(loc => loc.stargateUrl === location.stargateUrl);
      
      const newLocation: SavedLocation = {
        ...location,
        id: this.generateId(),
        timestamp: Date.now()
      };

      if (existingIndex !== -1) {
        // Update existing location - always allowed
        locations[existingIndex] = newLocation;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(locations));
        return true;
      }

      // Check if we have space for a new location
      if (locations.length >= currentMaxLocations) {
        // Show confirmation dialog
        const shouldOverwrite = await this.showSlotFullDialog(currentMaxLocations);
        if (!shouldOverwrite) {
          return false; // User cancelled
        }
      }

      // Add new location
      locations.push(newLocation);

      // Keep only the most recent locations if we exceed the current limit
      if (locations.length > currentMaxLocations) {
        locations.sort((a, b) => b.timestamp - a.timestamp);
        locations.splice(currentMaxLocations);
      }

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(locations));
      return true;
    } catch (error) {
      console.error('Error saving location:', error);
      return false;
    }
  }

  // Synchronous version for backward compatibility
  public static saveLocationSync(location: Omit<SavedLocation, 'id' | 'timestamp'>): void {
    const locations = this.getLocations();
    const currentMaxLocations = this.getCurrentMaxLocations();
    
    // Check if location already exists (by stargate URL)
    const existingIndex = locations.findIndex(loc => loc.stargateUrl === location.stargateUrl);
    
    const newLocation: SavedLocation = {
      ...location,
      id: this.generateId(),
      timestamp: Date.now()
    };

    if (existingIndex !== -1) {
      // Update existing location
      locations[existingIndex] = newLocation;
    } else {
      // Add new location
      locations.push(newLocation);
    }

    // Keep only the most recent locations if we exceed the current limit
    if (locations.length > currentMaxLocations) {
      locations.sort((a, b) => b.timestamp - a.timestamp);
      locations.splice(currentMaxLocations);
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(locations));
  }

  public static removeLocation(id: string): void {
    try {
      const locations = this.getLocations();
      const filteredLocations = locations.filter(loc => loc.id !== id);
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredLocations));
    } catch (error) {
      console.error('Error removing location:', error);
    }
  }

  public static clearAllLocations(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing locations:', error);
    }
  }

  private static generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private static async showSlotFullDialog(maxSlots: number): Promise<boolean> {
    return new Promise((resolve) => {
      // Create modal overlay
      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75';
      
      // Create modal content
      const modal = document.createElement('div');
      modal.className = 'bg-gray-900 border border-gray-600 rounded-lg p-6 max-w-md mx-4 text-white shadow-xl';
      
      modal.innerHTML = `
        <div class="text-center">
          <div class="text-4xl mb-4">📍</div>
          <h2 class="text-xl font-bold mb-4 text-yellow-300">No Free Slots Available</h2>
          <p class="text-gray-300 mb-4">
            You have reached your maximum of <span class="font-bold text-yellow-400">${maxSlots}</span> saved locations.
          </p>
          <p class="text-gray-300 mb-6 text-sm">
            Complete daily challenges to increase your Saved Locations storage capacity.
          </p>
          <p class="text-gray-200 mb-6">
            Would you like to overwrite the oldest saved location?
          </p>
          <div class="flex gap-3 justify-center">
            <button id="cancelSave" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors">
              Cancel
            </button>
            <button id="confirmOverwrite" class="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-md transition-colors font-semibold">
              Overwrite
            </button>
          </div>
        </div>
      `;
      
      overlay.appendChild(modal);
      document.body.appendChild(overlay);
      
      // Add event listeners
      const cancelBtn = modal.querySelector('#cancelSave');
      const confirmBtn = modal.querySelector('#confirmOverwrite');
      
      const cleanup = () => {
        document.body.removeChild(overlay);
      };
      
      cancelBtn?.addEventListener('click', () => {
        cleanup();
        resolve(false);
      });
      
      confirmBtn?.addEventListener('click', () => {
        cleanup();
        resolve(true);
      });
      
      // Close on overlay click
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          cleanup();
          resolve(false);
        }
      });
      
      // Close on Escape key
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          cleanup();
          document.removeEventListener('keydown', handleKeyDown);
          resolve(false);
        }
      };
      document.addEventListener('keydown', handleKeyDown);
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
      // Get completed days count (days where all challenges were completed)
      const completedDays = this.getCompletedDaysCount();
      
      // Also check if today is completed
      const todayCompleted = DailyChallengesManager.getCompletionStatus().allCompleted ? 1 : 0;
      
      const calculatedMax = this.BASE_MAX_LOCATIONS + ((completedDays + todayCompleted) * this.BONUS_PER_COMPLETION);
      
      // Cap at absolute maximum
      return Math.min(calculatedMax, this.ABSOLUTE_MAX_LOCATIONS);
    } catch (error) {
      console.error('Error calculating max locations:', error);
      return this.BASE_MAX_LOCATIONS;
    }
  }

  private static getCompletedDaysCount(): number {
    try {
      // Read from the more efficient _atlasDailyChallenges storage
      const challengesData = localStorage.getItem('_atlasDailyChallenges');
      if (challengesData) {
        const challenges = JSON.parse(challengesData);
        return challenges.totalCompletedDays || 0;
      }
      
      return 0;
    } catch (error) {
      console.error('Error getting completion history:', error);
      return 0;
    }
  }

  public static getLocationStats(): { total: number; galaxies: number; systems: number; planets: number; maxAllowed: number; available: number } {
    const locations = this.getLocations();
    const maxAllowed = this.getCurrentMaxLocations();
    
    // Debug info
    console.log('Location debug:', {
      completedDays: this.getCompletedDaysCount(),
      todayCompleted: DailyChallengesManager.getCompletionStatus().allCompleted,
      maxAllowed
    });
    
    return {
      total: locations.length,
      galaxies: locations.filter(loc => loc.type === 'galaxy').length,
      systems: locations.filter(loc => loc.type === 'system').length,
      planets: locations.filter(loc => loc.type === 'planet').length,
      maxAllowed,
      available: Math.max(0, maxAllowed - locations.length)
    };
  }

  // Example usage method - shows how to use the new async saveLocation
  public static async saveLocationWithConfirmation(
    name: string, 
    type: 'galaxy' | 'system' | 'planet', 
    stargateUrl: string
  ): Promise<{ success: boolean; message: string }> {
    try {
      const location = { name, type, stargateUrl };
      const saved = await this.saveLocation(location);
      
      if (saved) {
        return { 
          success: true, 
          message: `Location "${name}" saved successfully!` 
        };
      } else {
        return { 
          success: false, 
          message: 'Save operation cancelled by user.' 
        };
      }
    } catch (error) {
      console.error('Error saving location with confirmation:', error);
      return { 
        success: false, 
        message: 'Failed to save location. Please try again.' 
      };
    }
  }
}