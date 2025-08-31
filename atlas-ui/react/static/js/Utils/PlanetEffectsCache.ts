// atlas-ui/react/static/js/Utils/PlanetEffectsCache.ts

interface CachedPlanetData {
  planetData: any;
  effects: any[];
  timestamp: number;
}

class PlanetEffectsCache {
  private cache: Map<string, CachedPlanetData> = new Map();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  getCacheKey(planetName: string, cosmicOriginTime?: number): string {
    return `${planetName}_${cosmicOriginTime || 'default'}`;
  }

  set(planetName: string, planetData: any, effects: any[], cosmicOriginTime?: number): void {
    const key = this.getCacheKey(planetName, cosmicOriginTime);
    this.cache.set(key, {
      planetData: JSON.parse(JSON.stringify(planetData)), // Deep clone
      effects: JSON.parse(JSON.stringify(effects)), // Deep clone
      timestamp: Date.now()
    });
  }

  get(planetName: string, cosmicOriginTime?: number): CachedPlanetData | null {
    const key = this.getCacheKey(planetName, cosmicOriginTime);
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }

    // Check if cache is still valid
    if (Date.now() - cached.timestamp > this.CACHE_TTL) {
      this.cache.delete(key);
      return null;
    }

    return cached;
  }

  clear(): void {
    this.cache.clear();
  }

  has(planetName: string, cosmicOriginTime?: number): boolean {
    const key = this.getCacheKey(planetName, cosmicOriginTime);
    const cached = this.cache.get(key);
    
    if (!cached) {
      return false;
    }

    // Check if cache is still valid
    if (Date.now() - cached.timestamp > this.CACHE_TTL) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }
}

// Global singleton instance
export const planetEffectsCache = new PlanetEffectsCache();