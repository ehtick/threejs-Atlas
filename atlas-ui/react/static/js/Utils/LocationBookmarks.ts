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
      // Create modal overlay with blur background
      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300 opacity-0';
      overlay.style.backdropFilter = 'blur(8px)';
      
      // Create modal content with modern styling
      const modal = document.createElement('div');
      modal.className = 'relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-slate-600/50 rounded-2xl p-8 max-w-md mx-4 text-white shadow-2xl backdrop-blur-xl transform scale-95 transition-all duration-300';
      modal.style.backdropFilter = 'blur(20px)';
      modal.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)';
      
      modal.innerHTML = `
        <div class="text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-6">
            <svg class="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 class="text-2xl font-bold mb-4 text-white">Storage Full</h2>
                    <p class="text-slate-400 mb-6 text-[10px] bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
            💡 Complete daily challenges to increase your storage capacity
          </p>

          <p class="text-slate-300 mb-4 text-base leading-relaxed">
            You have reached your maximum of <span class="font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded-lg">${maxSlots}</span> saved locations.
          </p>
          <p class="text-slate-200 mb-8 text-base">
            Overwrite the oldest saved location?
          </p>
          <div class="flex gap-4 justify-center">
            <button id="cancelSave" class="px-6 py-3 bg-slate-700/80 hover:bg-slate-600/80 border border-slate-600/50 hover:border-slate-500/50 rounded-xl transition-all duration-200 font-medium text-slate-200 hover:text-white transform hover:scale-105 hover:shadow-lg">
              Cancel
            </button>
            <button id="confirmOverwrite" class="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-xl transition-all duration-200 font-semibold text-white transform hover:scale-105 hover:shadow-lg border border-amber-400/30">
              Overwrite
            </button>
          </div>
        </div>
      `;
      
      overlay.appendChild(modal);
      document.body.appendChild(overlay);
      
      // Trigger fade-in animation
      requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        modal.style.transform = 'scale(1)';
      });
      
      // Add event listeners
      const cancelBtn = modal.querySelector('#cancelSave');
      const confirmBtn = modal.querySelector('#confirmOverwrite');
      
      const cleanup = (result: boolean) => {
        // Fade-out animation
        overlay.style.opacity = '0';
        modal.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
          if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
          }
          resolve(result);
        }, 300);
      };
      
      cancelBtn?.addEventListener('click', () => {
        cleanup(false);
      });
      
      confirmBtn?.addEventListener('click', () => {
        cleanup(true);
      });
      
      // Close on overlay click
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          cleanup(false);
        }
      });
      
      // Close on Escape key
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          document.removeEventListener('keydown', handleKeyDown);
          cleanup(false);
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