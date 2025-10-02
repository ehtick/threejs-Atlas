// atlas-ui/react/static/js/Utils/OptimizedStorage.tsx

import { DailyChallengesManager } from "./DailyChallenges.tsx";
import { ATLAS_KEYS, getItem, setItem, migrateToEncoded, getUniverseInfo } from "./b64.tsx";

interface OptimizedVisitData {
  g: { [galaxyHash: string]: { [systemIndex: string]: string } };
  gv: { [galaxyHash: string]: boolean };
}

const hashGalaxyCoords = (coordinates: string): string => {
  const [x, y, z] = coordinates.split(",").map(Number);
  return `${x.toString(36)}_${y.toString(36)}_${z.toString(36)}`;
};

const unhashGalaxyCoords = (hash: string): string => {
  const [x, y, z] = hash.split("_");
  return `${parseInt(x, 36)},${parseInt(y, 36)},${parseInt(z, 36)}`;
};

export class OptimizedAtlasStorage {
  private static readonly STORAGE_KEY = ATLAS_KEYS.ARCHIVE;
  private static readonly MAX_ENTRIES_PER_GALAXY = 1000;

  private static getData(): OptimizedVisitData {
    try {
      this.migrateToEncodedStorage();

      this.cleanupLegacyStorage();

      const data = getItem(this.STORAGE_KEY);
      if (!data) return { g: {}, gv: {} };

      const parsed = JSON.parse(data);
      if (!parsed.gv) parsed.gv = {};

      return parsed;
    } catch (error) {
      console.error("Error reading Atlas archive:", error);
      return { g: {}, gv: {} };
    }
  }

  private static cleanupLegacyStorage(): void {
    try {
      const legacyKey = "atlasHistoricalData";
      if (localStorage.getItem(legacyKey)) {
        localStorage.removeItem(legacyKey);
      }
    } catch (error) {
      console.error("Error cleaning up legacy storage:", error);
    }
  }

  private static migrateToEncodedStorage(): void {
    try {
      if (localStorage.getItem(this.STORAGE_KEY)) {
        migrateToEncoded();
      }
    } catch (error) {
      console.error("Error migrating to encoded storage:", error);
    }
  }

  private static saveData(data: OptimizedVisitData): void {
    try {
      setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving Atlas archive:", error);
    }
  }

  private static performCleanup(data: OptimizedVisitData): void {
    const galaxyHashes = Object.keys(data.g);
    if (galaxyHashes.length > 100) {
      const toRemove = galaxyHashes.slice(0, galaxyHashes.length - 100);
      toRemove.forEach((hash) => delete data.g[hash]);
    }

    Object.keys(data.g).forEach((galaxyHash) => {
      const systems = data.g[galaxyHash];
      const systemKeys = Object.keys(systems);
      if (systemKeys.length > this.MAX_ENTRIES_PER_GALAXY) {
        const toRemove = systemKeys.slice(0, systemKeys.length - this.MAX_ENTRIES_PER_GALAXY);
        toRemove.forEach((key) => delete systems[key]);
      }
    });
  }

  private static performEmergencyCleanup(): void {
    const currentGalaxy = document.body.getAttribute("data-coordinates");
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
    const systemKey = systemIndex.toString(16);

    const planetIndex = systemPlanets.findIndex((p) => p.name.toLowerCase() === planetName.toLowerCase());
    if (planetIndex === -1) {
      console.warn(`Planet ${planetName} not found in system planets list`);
      return;
    }

    if (!data.g[galaxyHash]) {
      data.g[galaxyHash] = {};
    }

    if (!data.g[galaxyHash][systemKey]) {
      data.g[galaxyHash][systemKey] = "";
    }

    const visitedIndices = this.bitmapToIndices(data.g[galaxyHash][systemKey]);

    if (!visitedIndices.includes(planetIndex)) {
      visitedIndices.push(planetIndex);
      data.g[galaxyHash][systemKey] = this.indicesToBitmap(visitedIndices);
      this.saveData(data);

      DailyChallengesManager.updateProgress();
    }
  }

  public static markGalaxyVisited(coordinates: string): void {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);

    if (!data.gv[galaxyHash]) {
      data.gv[galaxyHash] = true;
      this.saveData(data);

      DailyChallengesManager.updateProgress();
    }
  }

  public static markSystemVisited(coordinates: string, systemIndex: number): void {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    const systemKey = systemIndex.toString(16);

    this.markGalaxyVisited(coordinates);

    if (!data.g[galaxyHash]) {
      data.g[galaxyHash] = {};
    }

    if (!data.g[galaxyHash][systemKey]) {
      data.g[galaxyHash][systemKey] = "";
      this.saveData(data);

      DailyChallengesManager.updateProgress();
    }
  }

  private static bitmapToIndices(bitmap: string): number[] {
    if (!bitmap) return [];
    return bitmap
      .split("")
      .map((char, index) => (char === "1" ? index : -1))
      .filter((i) => i !== -1);
  }

  private static indicesToBitmap(indices: number[]): string {
    if (indices.length === 0) return "";
    const maxIndex = Math.max(...indices);
    const bitmap = Array(maxIndex + 1).fill("0");
    indices.forEach((index) => {
      if (index >= 0) bitmap[index] = "1";
    });
    return bitmap.join("");
  }

  public static isGalaxyVisited(coordinates: string): boolean {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);

    return !!data.gv[galaxyHash];
  }

  public static isSystemVisited(coordinates: string, systemIndex: number): boolean {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    const systemKey = systemIndex.toString(16);

    return !!(data.g[galaxyHash] && systemKey in data.g[galaxyHash]);
  }

  public static getVisitedPlanets(coordinates: string, systemIndex: number, systemPlanets: any[]): string[] {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    const systemKey = systemIndex.toString(16);

    const bitmap = data.g[galaxyHash]?.[systemKey] || "";
    const visitedIndices = this.bitmapToIndices(bitmap);

    return visitedIndices
      .map((index) => {
        const planet = systemPlanets[index];
        return planet ? planet.name.toLowerCase() : null;
      })
      .filter((name) => name !== null);
  }

  public static getVisitedPlanetCount(coordinates: string, systemIndex: number): number {
    const data = this.getData();
    const galaxyHash = hashGalaxyCoords(coordinates);
    const systemKey = systemIndex.toString(16);

    const bitmap = data.g[galaxyHash]?.[systemKey] || "";
    return this.bitmapToIndices(bitmap).length;
  }

  public static getStorageStats(): { size: number; galaxies: number; visitedGalaxies: number; systems: number; planets: number } {
    const data = this.getData();

    let totalSize = 0;

    const globalKeys = [ATLAS_KEYS.SPACESHIP, ATLAS_KEYS.DAILY_CHALLENGES, ATLAS_KEYS.LOCATIONS];
    globalKeys.forEach((key) => {
      const value = getItem(key);
      if (value) {
        totalSize += value.length;
      }
    });

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        try {
          const decodedKey = decodeURIComponent(atob(key));
          if (decodedKey.startsWith(ATLAS_KEYS.ARCHIVE)) {
            const value = localStorage.getItem(key);
            if (value) {
              try {
                const decompressedValue = getItem(decodedKey.includes("_") ? decodedKey : ATLAS_KEYS.ARCHIVE);
                if (decompressedValue) {
                  totalSize += decompressedValue.length;
                }
              } catch {
                totalSize += value.length;
              }
            }
          }
        } catch {
          continue;
        }
      }
    }

    let totalSystems = 0;
    let totalPlanets = 0;

    Object.values(data.g).forEach((galaxy) => {
      totalSystems += Object.keys(galaxy).length;
      Object.values(galaxy).forEach((planetBitmap) => {
        if (typeof planetBitmap === "string") {
          totalPlanets += (planetBitmap.match(/1/g) || []).length;
        }
      });
    });

    const galaxiesWithSystems = new Set(Object.keys(data.g || {}));
    const visitedGalaxies = new Set(Object.keys(data.gv || {}));
    const allVisitedGalaxies = new Set([...galaxiesWithSystems, ...visitedGalaxies]);

    return {
      size: totalSize,
      galaxies: allVisitedGalaxies.size,
      visitedGalaxies: Object.keys(data.gv).length,
      systems: totalSystems,
      planets: totalPlanets,
    };
  }

  public static getCurrentUniverseInfo(): { isRemote: boolean; nodeId: string | null; seedName?: string } {
    return getUniverseInfo();
  }

  public static debugListAllUniverseKeys(): void {
    const allKeys: string[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        try {
          const decodedKey = decodeURIComponent(atob(key));
          if (decodedKey.includes("atlas") || decodedKey.includes("Atlas")) {
            allKeys.push(decodedKey);
          }
        } catch {
          if (key.includes("atlas") || key.includes("Atlas")) {
            allKeys.push(key);
          }
        }
      }
    }

    console.group("🗄️ All Atlas Storage Keys Across Universes");
    console.log("Found", allKeys.length, "Atlas-related keys:");

    const grouped: { [prefix: string]: string[] } = {};
    allKeys.forEach((key) => {
      const match = key.match(/^(__?atlas\w+)(_.*)?$/);
      if (match) {
        const baseKey = match[1];
        const suffix = match[2] || " (local)";
        if (!grouped[baseKey]) grouped[baseKey] = [];
        grouped[baseKey].push(suffix);
      }
    });

    Object.entries(grouped).forEach(([baseKey, suffixes]) => {
      console.log(`  ${baseKey}:`, suffixes);
    });
    console.groupEnd();
  }
}
