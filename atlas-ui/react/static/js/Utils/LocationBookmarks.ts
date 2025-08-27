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
  private static readonly BASE_MAX_LOCATIONS = 50;
  private static readonly BONUS_PER_COMPLETION = 10;
  private static readonly ABSOLUTE_MAX_LOCATIONS = 1000;

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

  public static saveLocation(location: Omit<SavedLocation, 'id' | 'timestamp'>): void {
    try {
      const locations = this.getLocations();
      
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
      const currentMaxLocations = this.getCurrentMaxLocations();
      if (locations.length > currentMaxLocations) {
        locations.sort((a, b) => b.timestamp - a.timestamp);
        locations.splice(currentMaxLocations);
      }

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(locations));
    } catch (error) {
      console.error('Error saving location:', error);
    }
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
      // Check localStorage for historical completion data
      const historyKey = '_atlasCompletionHistory';
      const history = localStorage.getItem(historyKey);
      
      if (history) {
        const completedDays = JSON.parse(history);
        return Array.isArray(completedDays) ? completedDays.length : 0;
      }
      
      return 0;
    } catch (error) {
      console.error('Error getting completion history:', error);
      return 0;
    }
  }

  public static getLocationStats(): { total: number; galaxies: number; systems: number; planets: number; maxAllowed: number } {
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
      maxAllowed
    };
  }
}