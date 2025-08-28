// Optimized localStorage system for Atlas universe exploration data
import { DailyChallengesManager } from './DailyChallenges';
import { ATLAS_KEYS, getItem, setItem, migrateToEncoded } from './b64';


// Optimized data structure
interface OptimizedVisitData {
  g: { [galaxyHash: string]: { [systemIndex: string]: string } }; // galaxies -> systems -> planet bitmap
  gv: { [galaxyHash: string]: boolean }; // visited galaxies
}

// Galaxy coordinate hashing
const hashGalaxyCoords = (coordinates: string): string => {
  const [x, y, z] = coordinates.split(',').map(Number);
  // Pack coordinates into a shorter representation
  // Use base36 to get compact strings
  return `${x.toString(36)}_${y.toString(36)}_${z.toString(36)}`;
};

const unhashGalaxyCoords = (hash: string): string => {
  const [x, y, z] = hash.split('_');
  return `${parseInt(x, 36)},${parseInt(y, 36)},${parseInt(z, 36)}`;
};

// Main storage interface
export class OptimizedAtlasStorage {
  private static readonly STORAGE_KEY = ATLAS_KEYS.ARCHIVE;
  private static readonly MAX_ENTRIES_PER_GALAXY = 1000; // Limit to prevent overflow
  
  private static getData(): OptimizedVisitData {
    try {
      // Migrate to encoded storage on first access
      this.migrateToEncodedStorage();
      
      // Clean up legacy storage on first access
      this.cleanupLegacyStorage();
      
      const data = getItem(this.STORAGE_KEY);
      if (!data) return { g: {}, gv: {} };
      
      const parsed = JSON.parse(data);
      // Ensure gv exists for backward compatibility
      if (!parsed.gv) parsed.gv = {};
      
      return parsed;
    } catch (error) {
      console.error('Error reading Atlas archive:', error);
      return { g: {}, gv: {} };
    }
  }
  
  private static cleanupLegacyStorage(): void {
    try {
      // Remove legacy atlasHistoricalData if it exists
      const legacyKey = 'atlasHistoricalData';
      if (localStorage.getItem(legacyKey)) {
        localStorage.removeItem(legacyKey);
      }
    } catch (error) {
      console.error('Error cleaning up legacy storage:', error);
    }
  }
  
  private static migrateToEncodedStorage(): void {
    try {
      // Check if migration is needed (if old unencoded key exists)
      if (localStorage.getItem(this.STORAGE_KEY)) {
        migrateToEncoded();
      }
    } catch (error) {
      console.error('Error migrating to encoded storage:', error);
    }
  }
  
  private static saveData(data: OptimizedVisitData): void {
    try {
      setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving Atlas archive:', error);
    }
  }
  
  private static performCleanup(data: OptimizedVisitData): void {
    // Remove oldest galaxies if we have too many
    const galaxyHashes = Object.keys(data.g);
    if (galaxyHashes.length > 100) { // Keep only 100 most recent galaxies
      const toRemove = galaxyHashes.slice(0, galaxyHashes.length - 100);
      toRemove.forEach(hash => delete data.g[hash]);
    }
    
    // Limit systems per galaxy
    Object.keys(data.g).forEach(galaxyHash => {
      const systems = data.g[galaxyHash];
      const systemKeys = Object.keys(systems);
      if (systemKeys.length > this.MAX_ENTRIES_PER_GALAXY) {
        const toRemove = systemKeys.slice(0, systemKeys.length - this.MAX_ENTRIES_PER_GALAXY);
        toRemove.forEach(key => delete systems[key]);
      }
    });
  }
  
  private static performEmergencyCleanup(): void {
    // Keep only current galaxy data
    const currentGalaxy = document.body.getAttribute('data-coordinates');
    if (currentGalaxy) {
      const currentHash = hashGalaxyCoords(currentGalaxy);
      const data = this.getData();
      const currentGalaxyData = data.g[currentHash];
      
      data.g = {};
      if (currentGalaxyData) {
        data.g[currentHash] = currentGalaxyData;
      }
      
      this.saveData(data);
    }
  }
  
  public static markPlanetVisited(coordinates: string, systemIndex: number, planetName: string, systemPlanets: any[]): void {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    const systemKey = systemIndex.toString(16); // Hexadecimal for smaller keys
    
    // Find planet index in the system
    const planetIndex = systemPlanets.findIndex(p => p.name.toLowerCase() === planetName.toLowerCase());
    if (planetIndex === -1) {
      console.warn(`Planet ${planetName} not found in system planets list`);
      return;
    }
    
    // Ensure galaxy exists
    if (!data.g[galaxyHash]) {
      data.g[galaxyHash] = {};
    }
    
    // Ensure system exists
    if (!data.g[galaxyHash][systemKey]) {
      data.g[galaxyHash][systemKey] = '';
    }
    
    // Convert bitmap to array of visited planet indices
    const visitedIndices = this.bitmapToIndices(data.g[galaxyHash][systemKey]);
    
    // Only add if not already visited
    if (!visitedIndices.includes(planetIndex)) {
      visitedIndices.push(planetIndex);
      data.g[galaxyHash][systemKey] = this.indicesToBitmap(visitedIndices);
      this.saveData(data);
      
      // Update Daily Challenges progress when a new planet is visited
      DailyChallengesManager.updateProgress();
    }
  }
  
  public static markGalaxyVisited(coordinates: string): void {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    
    if (!data.gv[galaxyHash]) {
      data.gv[galaxyHash] = true;
      console.log(`🌌 Galaxy marked as visited: ${coordinates} (hash: ${galaxyHash})`);
      this.saveData(data);
      
      // Update Daily Challenges progress when a new galaxy is visited
      DailyChallengesManager.updateProgress();
    }
  }
  
  public static markSystemVisited(coordinates: string, systemIndex: number): void {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    const systemKey = systemIndex.toString(16); // Hexadecimal for smaller keys
    
    // Also mark galaxy as visited when visiting a system
    this.markGalaxyVisited(coordinates);
    
    if (!data.g[galaxyHash]) {
      data.g[galaxyHash] = {};
    }
    
    if (!data.g[galaxyHash][systemKey]) {
      data.g[galaxyHash][systemKey] = '';
      this.saveData(data);
      
      // Update Daily Challenges progress when a new system is visited
      DailyChallengesManager.updateProgress();
    }
  }
  
  // Convert bitmap string to array of planet indices
  private static bitmapToIndices(bitmap: string): number[] {
    if (!bitmap) return [];
    return bitmap.split('').map((char, index) => char === '1' ? index : -1).filter(i => i !== -1);
  }
  
  // Convert array of planet indices to bitmap string
  private static indicesToBitmap(indices: number[]): string {
    if (indices.length === 0) return '';
    const maxIndex = Math.max(...indices);
    const bitmap = Array(maxIndex + 1).fill('0');
    indices.forEach(index => {
      if (index >= 0) bitmap[index] = '1';
    });
    return bitmap.join('');
  }
  
  public static isGalaxyVisited(coordinates: string): boolean {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    
    return !!data.gv[galaxyHash];
  }
  
  public static isSystemVisited(coordinates: string, systemIndex: number): boolean {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    const systemKey = systemIndex.toString(16); // Hexadecimal for smaller keys
    
    return !!(data.g[galaxyHash] && systemKey in data.g[galaxyHash]);
  }
  
  public static getVisitedPlanets(coordinates: string, systemIndex: number, systemPlanets: any[]): string[] {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    const systemKey = systemIndex.toString(16); // Hexadecimal for smaller keys
    
    const bitmap = data.g[galaxyHash]?.[systemKey] || '';
    const visitedIndices = this.bitmapToIndices(bitmap);
    
    // Convert indices back to planet names
    return visitedIndices.map(index => {
      const planet = systemPlanets[index];
      return planet ? planet.name.toLowerCase() : null;
    }).filter(name => name !== null);
  }
  
  public static getVisitedPlanetCount(coordinates: string, systemIndex: number): number {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    const systemKey = systemIndex.toString(16); // Hexadecimal for smaller keys
    
    const bitmap = data.g[galaxyHash]?.[systemKey] || '';
    return this.bitmapToIndices(bitmap).length;
  }
  
  
  
  
  public static getStorageStats(): { size: number; galaxies: number; visitedGalaxies: number; systems: number; planets: number } {
    const data = this.getData();
    
    // Calculate size of all Atlas-related localStorage keys
    let totalSize = 0;
    const atlasKeys = Object.values(ATLAS_KEYS);
    
    atlasKeys.forEach(key => {
      const value = getItem(key);
      if (value) {
        totalSize += value.length;
      }
    });
    
    let totalSystems = 0;
    let totalPlanets = 0;
    
    Object.values(data.g).forEach(galaxy => {
      totalSystems += Object.keys(galaxy).length;
      Object.values(galaxy).forEach(planetBitmap => {
        if (typeof planetBitmap === 'string') {
          // Count 1s in bitmap
          totalPlanets += (planetBitmap.match(/1/g) || []).length;
        }
      });
    });

    // Count total visited galaxies (combining both data.g and data.gv)
    const galaxiesWithSystems = new Set(Object.keys(data.g || {}));
    const visitedGalaxies = new Set(Object.keys(data.gv || {}));
    const allVisitedGalaxies = new Set([...galaxiesWithSystems, ...visitedGalaxies]);
    
    return {
      size: totalSize,
      galaxies: allVisitedGalaxies.size,
      visitedGalaxies: Object.keys(data.gv).length,
      systems: totalSystems,
      planets: totalPlanets
    };
  }
  
}