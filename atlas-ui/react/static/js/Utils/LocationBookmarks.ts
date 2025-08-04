// Location bookmarks system for saving favorite stargate locations

export interface SavedLocation {
  id: string;
  name: string;
  type: 'galaxy' | 'system' | 'planet';
  coordinates: string;
  systemIndex?: number;
  planetName?: string;
  timestamp: number;
  stargateUrl: string;
}

export class LocationBookmarks {
  private static readonly STORAGE_KEY = '_atlasLocations';
  private static readonly MAX_LOCATIONS = 50; // Prevent storage overflow

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
        console.log('📍 Updated saved location:', location.name);
      } else {
        // Add new location
        locations.push(newLocation);
        console.log('📍 Saved new location:', location.name);
      }

      // Keep only the most recent locations if we exceed the limit
      if (locations.length > this.MAX_LOCATIONS) {
        locations.sort((a, b) => b.timestamp - a.timestamp);
        locations.splice(this.MAX_LOCATIONS);
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
      console.log('🗑️ Removed saved location');
    } catch (error) {
      console.error('Error removing location:', error);
    }
  }

  public static clearAllLocations(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
      console.log('🗑️ Cleared all saved locations');
    } catch (error) {
      console.error('Error clearing locations:', error);
    }
  }

  private static generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  public static getLocationStats(): { total: number; galaxies: number; systems: number; planets: number } {
    const locations = this.getLocations();
    
    return {
      total: locations.length,
      galaxies: locations.filter(loc => loc.type === 'galaxy').length,
      systems: locations.filter(loc => loc.type === 'system').length,
      planets: locations.filter(loc => loc.type === 'planet').length
    };
  }
}