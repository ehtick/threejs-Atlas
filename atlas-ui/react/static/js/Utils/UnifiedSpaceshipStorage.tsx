// atlas-ui/react/static/js/Utils/UnifiedSpaceshipStorage.tsx

import React from "react";
import { getItem, setItem, removeItem } from "./b64.tsx";

export interface SpaceshipData {
  r: {
    a: number;
    e: number;
    d: number;
  };
  u: {
    l: number;
    ef: number;
    rn: number;
    st: number;
    m: number;
  };
  c: { [locationId: string]: number };
  t: {
    lp?: number;
    ld?: number;
    lc?: number;
  };
  s?: {
    tc?: number;
    tr?: { a: number; e: number; d: number };
    tt?: number;
    cs?: number;
    dc?: number;
    dcp?: number;
    dcs?: number;
    dcg?: number;
    lcd?: string;
  };
}

export class UnifiedSpaceshipStorage {
  private static readonly STORAGE_KEY = "_atlasSpaceShip";
  private static readonly COLLECTION_COOLDOWNS = {
    planet: 15 * 60 * 1000,
    system: 45 * 60 * 1000,
    galaxy: 8 * 60 * 60 * 1000,
  };
  private static readonly DAILY_COLLECTION_LIMITS = {
    planet: Infinity,
    system: 15,
    galaxy: 5,
  };
  private static readonly PASSIVE_INTERVAL = 1 * 60 * 1000;
  private static readonly DEFAULT_DATA: SpaceshipData = {
    r: { a: 300, e: 200, d: 250 },
    u: { l: 1, ef: 1.0, rn: 500, st: 1000, m: 1.0 },
    c: {},
    t: {},
    s: { tc: 0, tr: { a: 0, e: 0, d: 0 }, tt: 0, cs: 0, dc: 0, dcp: 0, dcs: 0, dcg: 0, lcd: new Date().toDateString() },
  };
  static getData(): SpaceshipData {
    try {
      const stored = getItem(this.STORAGE_KEY);
      if (!stored) {
        this.saveData(this.DEFAULT_DATA);
        return { ...this.DEFAULT_DATA };
      }

      const compactData = JSON.parse(stored);
      const data = this.expandData(compactData);
      return {
        r: data.r || { ...this.DEFAULT_DATA.r },
        u: data.u || { ...this.DEFAULT_DATA.u },
        c: data.c || {},
        t: data.t || {},
        s: data.s || { ...this.DEFAULT_DATA.s },
      };
    } catch (error) {
      console.error("Error reading spaceship data:", error);
      return { ...this.DEFAULT_DATA };
    }
  }

  private static saveData(data: SpaceshipData): void {
    try {
      const now = Date.now();
      const cutoff = now - 24 * 60 * 60 * 1000;

      Object.keys(data.c).forEach((key) => {
        if (data.c[key] < cutoff) {
          delete data.c[key];
        }
      });

      const collectionKeys = Object.keys(data.c);
      if (collectionKeys.length > 500) {
        const sorted = collectionKeys.sort((a, b) => data.c[a] - data.c[b]);
        const toRemove = sorted.slice(0, sorted.length - 500);
        toRemove.forEach((key) => delete data.c[key]);
      }

      const compactData = this.compactData(data);
      setItem(this.STORAGE_KEY, JSON.stringify(compactData));
    } catch (error) {
      console.error("Error saving spaceship data:", error);
      if (error.name === "QuotaExceededError") {
        this.performEmergencyCleanup();
      }
    }
  }

  private static performEmergencyCleanup(): void {
    const data = this.getData();
    data.c = {};
    data.s = { tc: 0, tr: { a: 0, e: 0, d: 0 }, tt: 0 };
    this.saveData(data);
  }
  static getResources(): { antimatter: number; element115: number; deuterium: number } {
    const data = this.getData();
    return {
      antimatter: data.r.a,
      element115: data.r.e,
      deuterium: data.r.d,
    };
  }

  static setResources(resources: { antimatter: number; element115: number; deuterium: number }): void {
    const data = this.getData();
    const upgrade = data.u;
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
    const actualCost = {
      antimatter: Math.floor(cost.antimatter / data.u.ef),
      element115: Math.floor(cost.element115 / data.u.ef),
      deuterium: Math.floor(cost.deuterium / data.u.ef),
    };

    if (data.r.a >= actualCost.antimatter && data.r.e >= actualCost.element115 && data.r.d >= actualCost.deuterium) {
      data.r.a -= actualCost.antimatter;
      data.r.e -= actualCost.element115;
      data.r.d -= actualCost.deuterium;
      if (data.s) {
        data.s.tt = (data.s.tt || 0) + 1;
      }

      this.saveData(data);
      return true;
    }

    return false;
  }
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
      multiplier: data.u.m,
    };
  }

  static upgradeShip(cost: { antimatter: number; element115: number; deuterium: number }): boolean {
    const data = this.getData();
    const MAX_LEVEL = 100;
    if (data.u.l >= MAX_LEVEL) {
      return false;
    }
    if (data.r.a >= cost.antimatter && data.r.e >= cost.element115 && data.r.d >= cost.deuterium) {
      data.r.a -= cost.antimatter;
      data.r.e -= cost.element115;
      data.r.d -= cost.deuterium;
      data.u.l += 1;
      let efficiency = Math.min(4.0, 1 + (data.u.l - 1) * 0.2); // Higher cap, faster growth

      let range =
        data.u.l <= 25
          ? 500 + (data.u.l - 1) * 200 // Better base and growth
          : 500 + 25 * 200 + Math.floor(Math.log(data.u.l - 25 + 1) * 800);
      range = Math.min(range, 25000); // Higher cap for exploration

      let storage =
        data.u.l <= 20
          ? 1000 + (data.u.l - 1) * 400 // Much better base and growth
          : 1000 + 20 * 400 + Math.floor(Math.log(data.u.l - 20 + 1) * 1200);
      storage = Math.min(storage, 50000); // Double the cap

      let multiplier = 1.0 + (data.u.l - 1) * 0.242; // Calculated to reach exactly 25x at level 100

      data.u.ef = Math.min(6.0, efficiency); // Higher efficiency cap
      data.u.rn = Math.floor(range);
      data.u.st = Math.floor(storage);
      data.u.m = Math.min(25.0, multiplier); // New 25x multiplier cap

      this.saveData(data);
      return true;
    }

    return false;
  }

  private static getLocationTypeFromId(locationId: string): "planet" | "system" | "galaxy" {
    if (locationId.startsWith("planet_")) return "planet";
    if (locationId.startsWith("system_")) return "system";
    if (locationId.startsWith("galaxy_")) return "galaxy";
    return "planet";
  }
  private static getCooldownForLocation(locationId: string): number {
    const locationType = this.getLocationTypeFromId(locationId);
    return this.COLLECTION_COOLDOWNS[locationType];
  }

  private static canCollectFromLocationType(locationType: "planet" | "system" | "galaxy", data?: SpaceshipData): boolean {
    if (!data) data = this.getData();

    const today = new Date().toDateString();

    if (data.s && data.s.lcd !== today) {
      data.s.dcp = 0;
      data.s.dcs = 0;
      data.s.dcg = 0;
      data.s.lcd = today;
      this.saveData(data);
    }

    if (!data.s) return true;

    const limit = this.DAILY_COLLECTION_LIMITS[locationType];
    if (limit === Infinity) return true;

    const currentCount = locationType === "planet" ? data.s.dcp || 0 : locationType === "system" ? data.s.dcs || 0 : data.s.dcg || 0;

    return currentCount < limit;
  }

  static canCollectFromLocation(locationId: string): boolean {
    const data = this.getData();
    const lastCollected = data.c[locationId];

    if (lastCollected) {
      const now = Date.now();
      const cooldown = this.getCooldownForLocation(locationId);
      if (now - lastCollected < cooldown) {
        return false;
      }
    }

    const locationType = this.getLocationTypeFromId(locationId);
    return this.canCollectFromLocationType(locationType, data);
  }

  static getTimeUntilNextCollection(locationId: string): number {
    const data = this.getData();
    const lastCollected = data.c[locationId];

    if (!lastCollected) return 0;

    const now = Date.now();
    const cooldown = this.getCooldownForLocation(locationId);
    const remaining = cooldown - (now - lastCollected);
    return remaining > 0 ? remaining / (1000 * 60 * 60) : 0;
  }

  static markLocationCollected(locationId: string): void {
    const data = this.getData();
    data.c[locationId] = Date.now();

    const locationType = this.getLocationTypeFromId(locationId);
    this.updateDailyCollectionCounters(data, locationType);

    this.updateCollectionStreaks(data);

    this.saveData(data);
  }

  private static updateDailyCollectionCounters(data: SpaceshipData, locationType: "planet" | "system" | "galaxy"): void {
    const today = new Date().toDateString();

    if (!data.s) {
      data.s = { tc: 0, tr: { a: 0, e: 0, d: 0 }, tt: 0, cs: 0, dc: 0, dcp: 0, dcs: 0, dcg: 0, lcd: today };
    }

    if (data.s.lcd !== today) {
      data.s.dcp = 0;
      data.s.dcs = 0;
      data.s.dcg = 0;
      data.s.lcd = today;
    }

    if (locationType === "planet") {
      data.s.dcp = (data.s.dcp || 0) + 1;
    } else if (locationType === "system") {
      data.s.dcs = (data.s.dcs || 0) + 1;
    } else if (locationType === "galaxy") {
      data.s.dcg = (data.s.dcg || 0) + 1;
    }
  }

  private static updateCollectionStreaks(data: SpaceshipData): void {
    const now = Date.now();
    const today = new Date(now).toDateString();
    const lastCollectionDay = data.t.lc ? new Date(data.t.lc).toDateString() : null;

    if (!data.s) {
      data.s = { tc: 0, tr: { a: 0, e: 0, d: 0 }, tt: 0, cs: 0, dc: 0 };
    }

    data.s.tc = (data.s.tc || 0) + 1;

    if (today !== lastCollectionDay) {
      const oldLastCollectionTime = data.t.lc;
      data.t.lc = now;

      if (lastCollectionDay && oldLastCollectionTime) {
        const lastDate = new Date(oldLastCollectionTime);
        const todayDate = new Date(now);
        const daysDifference = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

        if (daysDifference === 1) {
          data.s.cs = (data.s.cs || 0) + 1;
        } else if (daysDifference > 1) {
          data.s.cs = 1;
        }
      } else {
        data.s.cs = 1;
      }

      data.s.dc = 1;
    } else {
      data.s.dc = (data.s.dc || 0) + 1;
    }
  }

  static getCollectionStreakInfo(): {
    currentStreak: number;
    dailyCollections: number;
    streakMultiplier: number;
  } {
    const data = this.getData();
    const currentStreak = data.s?.cs || 0;
    const dailyCollections = data.s?.dc || 0;

    const streakMultiplier = currentStreak >= 3 ? 1.25 : 1.0;

    return {
      currentStreak,
      dailyCollections,
      streakMultiplier,
    };
  }

  static getCollectionCount(locationId: string): number {
    const data = this.getData();
    const collections = Object.keys(data.c).filter((key) => key.startsWith(locationId.split("_")[0]));
    return collections.length;
  }

  static shouldProcessPassive(): boolean {
    const data = this.getData();
    const now = Date.now();
    const lastPassive = data.t.lp || 0;

    return now - lastPassive >= this.PASSIVE_INTERVAL;
  }

  static markPassiveProcessed(): void {
    const data = this.getData();
    data.t.lp = Date.now();
    this.saveData(data);
  }

  static getStats(): {
    totalCollections: number;
    totalResourcesCollected: { antimatter: number; element115: number; deuterium: number };
    totalTravels: number;
  } {
    const data = this.getData();
    const rawResources = data.s?.tr || { a: 0, e: 0, d: 0 };

    return {
      totalCollections: data.s?.tc || 0,
      totalResourcesCollected: {
        antimatter: rawResources.a || 0,
        element115: rawResources.e || 0,
        deuterium: rawResources.d || 0,
      },
      totalTravels: data.s?.tt || 0,
    };
  }

  static migrateFromOldStorage(): void {
    try {
      const oldKeys = ["atlas_ship_resources", "atlas_ship_upgrades", "atlas_resource_collections", "_atlasSpaceShip_collections", "_atlasSpaceShip_lastPassive", "atlas_last_resource_generation", "atlas_last_passive_generation"];

      const currentData = getItem(this.STORAGE_KEY);
      if (currentData) return;

      const oldResources = localStorage.getItem("atlas_ship_resources");
      const oldUpgrades = localStorage.getItem("atlas_ship_upgrades");
      const oldCollections = localStorage.getItem("atlas_resource_collections") || localStorage.getItem("_atlasSpaceShip_collections");

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
          Object.keys(collections).forEach((key) => {
            if (collections[key].lastCollected) {
              newData.c[collections[key].id] = collections[key].lastCollected;
            }
          });
        } catch (e) {}
      }

      this.saveData(newData);

      oldKeys.forEach((key) => {
        try {
          localStorage.removeItem(key);
        } catch (e) {}
      });

      console.log("Successfully migrated to unified spaceship storage");
    } catch (error) {
      console.error("Error during migration:", error);
    }
  }

  static reset(): void {
    removeItem(this.STORAGE_KEY);
  }

  static getStorageSize(): number {
    const data = getItem(this.STORAGE_KEY) || "{}";
    return data.length;
  }

  private static compactData(data: SpaceshipData): any {
    const compactData: any = {
      r: data.r,
      u: data.u,
      c: data.c,
      s: data.s,
      t: data.t,
    };

    return compactData;
  }

  private static expandData(compactData: any): SpaceshipData {
    const now = Date.now();
    const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

    const expandedCollections: { [key: string]: number } = {};
    if (compactData.c) {
      Object.keys(compactData.c).forEach((key) => {
        const value = compactData.c[key];

        const MIN_VALID_TIMESTAMP = 1577836800000; // Jan 1, 2020
        const MAX_VALID_TIMESTAMP = 1893456000000; // Jan 1, 2030

        if (value === 0) {
          const migratedTimestamp = now - TWENTY_FOUR_HOURS;
          expandedCollections[key] = migratedTimestamp;
        } else if (value >= MIN_VALID_TIMESTAMP && value <= MAX_VALID_TIMESTAMP) {
          expandedCollections[key] = value;
        } else if (value > 0 && value < 86400 * 30) {
          const converted = now - value * 1000;
          expandedCollections[key] = converted;
        } else {
          expandedCollections[key] = now - TWENTY_FOUR_HOURS;
        }
      });
    }

    const expandedData: SpaceshipData = {
      r: compactData.r || { a: 300, e: 200, d: 250 }, // Match new defaults
      u: compactData.u || { l: 1, ef: 1.0, rn: 500, st: 1000, m: 1.0 }, // Match new defaults
      c: expandedCollections,
      t: compactData.t || {}, // Use timestamps directly (uncompressed)
      s: compactData.s || { tc: 0, tr: { a: 0, e: 0, d: 0 }, tt: 0, cs: 0, dc: 0, dcp: 0, dcs: 0, dcg: 0, lcd: new Date().toDateString() },
    };

    return expandedData;
  }
  static cleanCorruptedTimestamps(): void {
    const data = this.getData();
    const now = Date.now();
    const MIN_VALID_TIMESTAMP = 1577836800000; // Jan 1, 2020
    const MAX_VALID_TIMESTAMP = 1893456000000; // Jan 1, 2030
    const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

    let cleaned = false;
    Object.keys(data.c).forEach((key) => {
      const value = data.c[key];
      if (value === 0) {
        data.c[key] = now - TWENTY_FOUR_HOURS;
        cleaned = true;
      } else if (value < MIN_VALID_TIMESTAMP || value > MAX_VALID_TIMESTAMP) {
        data.c[key] = now - TWENTY_FOUR_HOURS; // Instead of deleting, set to 24hrs ago
        cleaned = true;
      }
    });

    if (cleaned) {
      this.saveData(data);
    }
  }
  static getDailyCollectionInfo(): {
    planets: { used: number; limit: number; unlimited: boolean };
    systems: { used: number; limit: number; unlimited: boolean };
    galaxies: { used: number; limit: number; unlimited: boolean };
  } {
    const data = this.getData();
    const today = new Date().toDateString();

    if (!data.s) {
      data.s = { tc: 0, tr: { a: 0, e: 0, d: 0 }, tt: 0, cs: 0, dc: 0, dcp: 0, dcs: 0, dcg: 0, lcd: today };
      this.saveData(data);
    }

    if (data.s.lcd !== today) {
      data.s.dcp = 0;
      data.s.dcs = 0;
      data.s.dcg = 0;
      data.s.lcd = today;
      this.saveData(data);
    }

    return {
      planets: {
        used: data.s.dcp || 0,
        limit: this.DAILY_COLLECTION_LIMITS.planet,
        unlimited: this.DAILY_COLLECTION_LIMITS.planet === Infinity,
      },
      systems: {
        used: data.s.dcs || 0,
        limit: this.DAILY_COLLECTION_LIMITS.system,
        unlimited: this.DAILY_COLLECTION_LIMITS.system === Infinity,
      },
      galaxies: {
        used: data.s.dcg || 0,
        limit: this.DAILY_COLLECTION_LIMITS.galaxy,
        unlimited: this.DAILY_COLLECTION_LIMITS.galaxy === Infinity,
      },
    };
  }
}
