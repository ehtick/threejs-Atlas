// Optimized localStorage system for Atlas universe exploration data


// Optimized data structure
interface OptimizedVisitData {
  g: { [galaxyHash: string]: { [systemIndex: string]: string } }; // galaxies -> systems -> planet bitmap
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
  private static readonly STORAGE_KEY = '__atlasArchive';
  private static readonly MAX_ENTRIES_PER_GALAXY = 1000; // Limit to prevent overflow
  
  private static getData(): OptimizedVisitData {
    try {
      // Clean up legacy storage on first access
      this.cleanupLegacyStorage();
      
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (!data) return { g: {} };
      
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading Atlas archive:', error);
      return { g: {} };
    }
  }
  
  private static cleanupLegacyStorage(): void {
    try {
      // Remove legacy atlasHistoricalData if it exists
      const legacyKey = 'atlasHistoricalData';
      if (localStorage.getItem(legacyKey)) {
        localStorage.removeItem(legacyKey);
        console.log('🧹 Cleaned up legacy storage (atlasHistoricalData)');
      }
    } catch (error) {
      console.error('Error cleaning up legacy storage:', error);
    }
  }
  
  private static saveData(data: OptimizedVisitData): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
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
      console.log(`🧹 Cleaned up ${toRemove.length} old galaxy records`);
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
      console.log('🚨 Emergency cleanup: kept only current galaxy data');
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
      console.log(`✅ Marked planet '${planetName}' as visited (index: ${planetIndex})`);
    }
  }
  
  public static markSystemVisited(coordinates: string, systemIndex: number): void {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    const systemKey = systemIndex.toString(16); // Hexadecimal for smaller keys
    
    if (!data.g[galaxyHash]) {
      data.g[galaxyHash] = {};
    }
    
    if (!data.g[galaxyHash][systemKey]) {
      data.g[galaxyHash][systemKey] = '';
      this.saveData(data);
      console.log(`✅ Marked system ${systemIndex} as visited`);
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
  
  
  
  
  public static getStorageStats(): { size: number; galaxies: number; systems: number; planets: number } {
    const data = this.getData();
    const serialized = JSON.stringify(data);
    
    let totalSystems = 0;
    let totalPlanets = 0;
    
    Object.values(data.g).forEach(galaxy => {
      totalSystems += Object.keys(galaxy).length;
      Object.values(galaxy).forEach(planetArray => {
        totalPlanets += planetArray.length;
      });
    });
    
    return {
      size: serialized.length,
      galaxies: Object.keys(data.g).length,
      systems: totalSystems,
      planets: totalPlanets
    };
  }
  
}