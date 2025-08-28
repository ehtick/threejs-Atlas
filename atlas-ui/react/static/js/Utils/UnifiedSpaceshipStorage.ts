// Unified and optimized spaceship storage system
// All spaceship-related data in a single, compressed localStorage key

export interface SpaceshipData {
  // Resources (compressed)
  r: {
    a: number;  // antimatter
    e: number;  // element115
    d: number;  // deuterium
  };
  
  // Ship upgrade
  u: {
    l: number;  // level
    ef: number; // efficiency
    rn: number; // range  
    st: number; // storage
    m: number; // multiplier
  };
  
  // Collections (locationId -> timestamp)
  c: { [locationId: string]: number };
  
  // Timestamps
  t: {
    lp?: number; // last passive generation
    ld?: number; // last daily generation
    lc?: number; // last collection day
  };
  
  // Stats
  s?: {
    tc?: number; // total collections
    tr?: { a: number; e: number; d: number }; // total resources collected
    tt?: number; // total travels
    cs?: number; // collection streak (consecutive days)
    dc?: number; // daily collections today
  };
}

export class UnifiedSpaceshipStorage {
  private static readonly STORAGE_KEY = '_atlasSpaceShip';
  private static readonly COLLECTION_COOLDOWNS = {
    planet: 15 * 60 * 1000,    // 15 minutes - faster for engagement
    system: 45 * 60 * 1000,    // 45 minutes - reduced for better flow
    galaxy: 90 * 60 * 1000     // 90 minutes - accessible but meaningful
  };
  private static readonly PASSIVE_INTERVAL = 1 * 60 * 1000; // 1 minute for immediate feedback
  
  // Default initial state - generous starting resources
  private static readonly DEFAULT_DATA: SpaceshipData = {
    r: { a: 300, e: 200, d: 250 }, // Abundant starting resources for immediate engagement
    u: { l: 1, ef: 1.0, rn: 500, st: 1000, m: 1.0 }, // Better starting stats
    c: {},
    t: {},
    s: { tc: 0, tr: { a: 0, e: 0, d: 0 }, tt: 0, cs: 0, dc: 0 }
  };
  
  // Get all spaceship data
  static getData(): SpaceshipData {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) {
        this.saveData(this.DEFAULT_DATA);
        return { ...this.DEFAULT_DATA };
      }
      
      const compactData = JSON.parse(stored);
      
      // Expand compact data back to full format
      const data = this.expandData(compactData);
      
      // Ensure all required fields exist
      return {
        r: data.r || { ...this.DEFAULT_DATA.r },
        u: data.u || { ...this.DEFAULT_DATA.u },
        c: data.c || {},
        t: data.t || {},
        s: data.s || { ...this.DEFAULT_DATA.s }
      };
    } catch (error) {
      console.error('Error reading spaceship data:', error);
      return { ...this.DEFAULT_DATA };
    }
  }
  
  // Save all spaceship data
  private static saveData(data: SpaceshipData): void {
    try {
      // Cleanup old collections (older than 24 hours)
      const now = Date.now();
      const cutoff = now - 24 * 60 * 60 * 1000;
      
      Object.keys(data.c).forEach(key => {
        if (data.c[key] < cutoff) {
          delete data.c[key];
        }
      });
      
      // Limit collections to 500 most recent
      const collectionKeys = Object.keys(data.c);
      if (collectionKeys.length > 500) {
        const sorted = collectionKeys.sort((a, b) => data.c[a] - data.c[b]);
        const toRemove = sorted.slice(0, sorted.length - 500);
        toRemove.forEach(key => delete data.c[key]);
      }
      
      // Compact the data before saving to reduce storage size
      const compactData = this.compactData(data);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(compactData));
    } catch (error) {
      console.error('Error saving spaceship data:', error);
      
      // If storage is full, try emergency cleanup
      if (error.name === 'QuotaExceededError') {
        this.performEmergencyCleanup();
      }
    }
  }
  
  private static performEmergencyCleanup(): void {
    const data = this.getData();
    // Keep only resources and upgrades, clear collections and stats
    data.c = {};
    data.s = { tc: 0, tr: { a: 0, e: 0, d: 0 }, tt: 0 };
    this.saveData(data);
  }
  
  // Resource management
  static getResources(): { antimatter: number; element115: number; deuterium: number } {
    const data = this.getData();
    return {
      antimatter: data.r.a,
      element115: data.r.e,
      deuterium: data.r.d
    };
  }
  
  static setResources(resources: { antimatter: number; element115: number; deuterium: number }): void {
    const data = this.getData();
    const upgrade = data.u;
    
    // Apply storage limits
    data.r.a = Math.min(Math.max(0, resources.antimatter), upgrade.st);
    data.r.e = Math.min(Math.max(0, resources.element115), upgrade.st);
    data.r.d = Math.min(Math.max(0, resources.deuterium), upgrade.st);
    
    this.saveData(data);
  }
  
  static addResources(toAdd: { antimatter: number; element115: number; deuterium: number }): void {
    const data = this.getData();
    const upgrade = data.u;
    
    data.r.a = Math.min(data.r.a + toAdd.antimatter, upgrade.st);
    data.r.e = Math.min(data.r.e + toAdd.element115, upgrade.st);
    data.r.d = Math.min(data.r.d + toAdd.deuterium, upgrade.st);
    
    // Update stats
    if (data.s) {
      data.s.tr = data.s.tr || { a: 0, e: 0, d: 0 };
      data.s.tr.a += toAdd.antimatter;
      data.s.tr.e += toAdd.element115;
      data.s.tr.d += toAdd.deuterium;
    }
    
    this.saveData(data);
  }
  
  static consumeResources(cost: { antimatter: number; element115: number; deuterium: number }): boolean {
    const data = this.getData();
    
    // Apply efficiency
    const actualCost = {
      antimatter: Math.floor(cost.antimatter / data.u.ef),
      element115: Math.floor(cost.element115 / data.u.ef),
      deuterium: Math.floor(cost.deuterium / data.u.ef)
    };
    
    if (data.r.a >= actualCost.antimatter &&
        data.r.e >= actualCost.element115 &&
        data.r.d >= actualCost.deuterium) {
      
      data.r.a -= actualCost.antimatter;
      data.r.e -= actualCost.element115;
      data.r.d -= actualCost.deuterium;
      
      // Update travel stats
      if (data.s) {
        data.s.tt = (data.s.tt || 0) + 1;
      }
      
      this.saveData(data);
      return true;
    }
    
    return false;
  }
  
  // Upgrade management
  static getUpgrade(): {
    level: number;
    efficiency: number;
    range: number;
    storage: number;
    multiplier: number;
  } {
    const data = this.getData();
    return {
      level: data.u.l,
      efficiency: data.u.ef,
      range: data.u.rn,
      storage: data.u.st,
      multiplier: data.u.m
    };
  }
  
  static upgradeShip(cost: { antimatter: number; element115: number; deuterium: number }): boolean {
    const data = this.getData();
    
    // Maximum level cap
    const MAX_LEVEL = 100;
    if (data.u.l >= MAX_LEVEL) {
      return false; // Already at max level
    }
    
    // Check if can afford
    if (data.r.a >= cost.antimatter &&
        data.r.e >= cost.element115 &&
        data.r.d >= cost.deuterium) {
      
      // Consume resources
      data.r.a -= cost.antimatter;
      data.r.e -= cost.element115;
      data.r.d -= cost.deuterium;
      
      // Apply upgrade
      data.u.l += 1;
      
      // Generous improvements with smooth progression
      let efficiency = Math.min(4.0, 1 + (data.u.l - 1) * 0.2); // Higher cap, faster growth
      
      // Range with generous scaling
      let range = data.u.l <= 25 
        ? 500 + (data.u.l - 1) * 200 // Better base and growth
        : 500 + 25 * 200 + Math.floor(Math.log(data.u.l - 25 + 1) * 800);
      range = Math.min(range, 25000); // Higher cap for exploration
      
      // Storage with generous scaling
      let storage = data.u.l <= 20
        ? 1000 + (data.u.l - 1) * 400 // Much better base and growth
        : 1000 + 20 * 400 + Math.floor(Math.log(data.u.l - 20 + 1) * 1200);
      storage = Math.min(storage, 50000); // Double the cap
      
      let multiplier = Math.min(6.0, 1 + (data.u.l - 1) * 0.3); // Higher cap and faster growth
      
      // Milestone rewards every 5 levels - more generous
      if (data.u.l % 5 === 0) {
        efficiency *= 1.3; // 30% bonus efficiency
        range = Math.min(range * 1.2, 25000); // 20% bonus range but respect cap
        storage = Math.min(storage * 1.15, 50000); // 15% bonus storage but respect cap
        multiplier *= 1.4; // 40% bonus multiplier
      }
      
      data.u.ef = Math.min(6.0, efficiency); // Higher efficiency cap
      data.u.rn = Math.floor(range);
      data.u.st = Math.floor(storage);
      data.u.m = Math.min(10.0, multiplier); // Higher multiplier cap
      
      this.saveData(data);
      return true;
    }
    
    return false;
  }
  
  // Helper to extract location type from locationId
  private static getLocationTypeFromId(locationId: string): "planet" | "system" | "galaxy" {
    if (locationId.startsWith("planet_")) return "planet";
    if (locationId.startsWith("system_")) return "system";
    if (locationId.startsWith("galaxy_")) return "galaxy";
    return "planet"; // default fallback
  }
  
  // Helper to get cooldown for location type
  private static getCooldownForLocation(locationId: string): number {
    const locationType = this.getLocationTypeFromId(locationId);
    return this.COLLECTION_COOLDOWNS[locationType];
  }

  // Collection management
  static canCollectFromLocation(locationId: string): boolean {
    const data = this.getData();
    const lastCollected = data.c[locationId];
    
    if (!lastCollected) return true;
    
    const now = Date.now();
    const cooldown = this.getCooldownForLocation(locationId);
    return (now - lastCollected) >= cooldown;
  }
  
  static getTimeUntilNextCollection(locationId: string): number {
    const data = this.getData();
    const lastCollected = data.c[locationId];
    
    if (!lastCollected) return 0;
    
    const now = Date.now();
    const cooldown = this.getCooldownForLocation(locationId);
    const remaining = cooldown - (now - lastCollected);
    return remaining > 0 ? remaining / (1000 * 60 * 60) : 0; // Return in hours
  }
  
  static markLocationCollected(locationId: string): void {
    const data = this.getData();
    data.c[locationId] = Date.now();
    
    // Update collection stats and streaks
    this.updateCollectionStreaks(data);
    
    this.saveData(data);
  }
  
  // Helper to update collection streaks
  private static updateCollectionStreaks(data: SpaceshipData): void {
    const now = Date.now();
    const today = new Date(now).toDateString();
    const lastCollectionDay = data.t.lc ? new Date(data.t.lc).toDateString() : null;
    
    if (!data.s) {
      data.s = { tc: 0, tr: { a: 0, e: 0, d: 0 }, tt: 0, cs: 0, dc: 0 };
    }
    
    // Update total collections
    data.s.tc = (data.s.tc || 0) + 1;
    
    // Check if this is the first collection today
    if (today !== lastCollectionDay) {
      // New day collection
      const oldLastCollectionTime = data.t.lc; // Save the old timestamp before updating
      data.t.lc = now;
      
      if (lastCollectionDay && oldLastCollectionTime) {
        const lastDate = new Date(oldLastCollectionTime);
        const todayDate = new Date(now);
        const daysDifference = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysDifference === 1) {
          // Consecutive day - increase streak
          data.s.cs = (data.s.cs || 0) + 1;
        } else if (daysDifference > 1) {
          // Streak broken - reset to 1
          data.s.cs = 1;
        }
        // daysDifference === 0 means same day, no streak update needed
      } else {
        // First ever collection
        data.s.cs = 1;
      }
      
      // Reset daily collection count
      data.s.dc = 1;
    } else {
      // Same day collection
      data.s.dc = (data.s.dc || 0) + 1;
    }
  }
  
  // Get current collection streak info
  static getCollectionStreakInfo(): {
    currentStreak: number;
    dailyCollections: number;
    streakMultiplier: number;
  } {
    const data = this.getData();
    const currentStreak = data.s?.cs || 0;
    const dailyCollections = data.s?.dc || 0;
    
    // Calculate streak multiplier (25% bonus after 3+ consecutive days)
    const streakMultiplier = currentStreak >= 3 ? 1.25 : 1.0;
    
    return {
      currentStreak,
      dailyCollections,
      streakMultiplier
    };
  }
  
  static getCollectionCount(locationId: string): number {
    // For simplicity, we'll track this separately or estimate based on history
    // This is a simplified version - could be enhanced with more tracking
    const data = this.getData();
    const collections = Object.keys(data.c).filter(key => key.startsWith(locationId.split('_')[0]));
    return collections.length;
  }
  
  // Passive generation
  static shouldProcessPassive(): boolean {
    const data = this.getData();
    const now = Date.now();
    const lastPassive = data.t.lp || 0;
    
    return (now - lastPassive) >= this.PASSIVE_INTERVAL;
  }
  
  static markPassiveProcessed(): void {
    const data = this.getData();
    data.t.lp = Date.now();
    this.saveData(data);
  }
  
  // Stats
  static getStats(): {
    totalCollections: number;
    totalResourcesCollected: { antimatter: number; element115: number; deuterium: number };
    totalTravels: number;
  } {
    const data = this.getData();
    return {
      totalCollections: data.s?.tc || 0,
      totalResourcesCollected: data.s?.tr || { antimatter: 0, element115: 0, deuterium: 0 },
      totalTravels: data.s?.tt || 0
    };
  }
  
  // Migration from old storage
  static migrateFromOldStorage(): void {
    try {
      // Migrate from old localStorage keys
      const oldKeys = [
        'atlas_ship_resources',
        'atlas_ship_upgrades',
        'atlas_resource_collections',
        '_atlasSpaceShip_collections',
        '_atlasSpaceShip_lastPassive',
        'atlas_last_resource_generation',
        'atlas_last_passive_generation'
      ];
      
      // Check if we need to migrate
      const currentData = localStorage.getItem(this.STORAGE_KEY);
      if (currentData) return; // Already migrated
      
      // Try to migrate old data
      const oldResources = localStorage.getItem('atlas_ship_resources');
      const oldUpgrades = localStorage.getItem('atlas_ship_upgrades');
      const oldCollections = localStorage.getItem('atlas_resource_collections') || 
                            localStorage.getItem('_atlasSpaceShip_collections');
      
      const newData: SpaceshipData = { ...this.DEFAULT_DATA };
      
      if (oldResources) {
        try {
          const resources = JSON.parse(oldResources);
          newData.r.a = resources.antimatter || 150;
          newData.r.e = resources.element115 || 100;
          newData.r.d = resources.deuterium || 125;
        } catch (e) {}
      }
      
      if (oldUpgrades) {
        try {
          const upgrade = JSON.parse(oldUpgrades);
          newData.u.l = upgrade.level || 1;
          newData.u.ef = upgrade.efficiency || 1.0;
          newData.u.rn = upgrade.range || 300;
          newData.u.st = upgrade.storage || 500;
          newData.u.m = upgrade.multiplier || upgrade.passiveGeneration || 1.0;
        } catch (e) {}
      }
      
      if (oldCollections) {
        try {
          const collections = JSON.parse(oldCollections);
          Object.keys(collections).forEach(key => {
            if (collections[key].lastCollected) {
              newData.c[collections[key].id] = collections[key].lastCollected;
            }
          });
        } catch (e) {}
      }
      
      // Save migrated data
      this.saveData(newData);
      
      // Clean up old keys
      oldKeys.forEach(key => {
        try {
          localStorage.removeItem(key);
        } catch (e) {}
      });
      
      console.log('Successfully migrated to unified spaceship storage');
    } catch (error) {
      console.error('Error during migration:', error);
    }
  }
  
  // Reset (for debugging/testing)
  static reset(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
  
  // Get storage size
  static getStorageSize(): number {
    const data = localStorage.getItem(this.STORAGE_KEY) || '{}';
    return data.length;
  }

  // Compact data for storage efficiency (like atlasArchive optimization)
  private static compactData(data: SpaceshipData): any {
    const now = Date.now();
    
    // Convert absolute timestamps to relative minutes (saves space)
    // But keep enough precision for 1-minute intervals
    const compactCollections: { [key: string]: number } = {};
    Object.keys(data.c).forEach(key => {
      // Store as seconds ago instead of milliseconds (still precise enough)
      compactCollections[key] = Math.floor((now - data.c[key]) / 1000);
    });

    const compactData: any = {
      r: data.r, // Resources stay the same
      u: data.u, // Upgrades stay the same  
      c: compactCollections, // Compacted collections
      s: data.s, // Stats stay the same
      t: data.t // Keep timestamps uncompressed for simplicity
    };

    return compactData;
  }

  // Expand compact data after loading (like atlasArchive optimization)  
  private static expandData(compactData: any): SpaceshipData {
    const now = Date.now();
    
    // Handle legacy data (might be already in absolute format)
    const expandedCollections: { [key: string]: number } = {};
    if (compactData.c) {
      Object.keys(compactData.c).forEach(key => {
        const value = compactData.c[key];
        // If value is very large, it's probably already absolute timestamp
        if (value > 1000000000) {
          expandedCollections[key] = value;
        } else {
          // Convert seconds ago back to absolute timestamp
          expandedCollections[key] = now - (value * 1000);
        }
      });
    }

    const expandedData: SpaceshipData = {
      r: compactData.r || { a: 300, e: 200, d: 250 }, // Match new defaults
      u: compactData.u || { l: 1, ef: 1.0, rn: 500, st: 1000, m: 1.0 }, // Match new defaults
      c: expandedCollections,
      t: compactData.t || {}, // Use timestamps directly (uncompressed)
      s: compactData.s || { tc: 0, tr: { a: 0, e: 0, d: 0 }, tt: 0, cs: 0, dc: 0 }
    };

    return expandedData;
  }
}