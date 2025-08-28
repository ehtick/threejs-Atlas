// Base64 encoder/decoder for localStorage keys and values
// Simple: encode key + encode value, decode key + decode value

// MASTER SWITCH - Set to false to disable encoding (bypass mode)
const ENCODING_ENABLED = true;

// Atlas localStorage keys that will be encoded
export const ATLAS_KEYS = {
  SPACESHIP: "_atlasSpaceShip",
  ARCHIVE: "__atlasArchive",
  DAILY_CHALLENGES: "_atlasDailyChallenges",
  LOCATIONS: "_atlasLocations",
} as const;

// Set item with encoded key and value
export const setItem = (key: string, value: string): void => {
  if (!ENCODING_ENABLED) {
    localStorage.setItem(key, value);
    return;
  }

  try {
    const encodedKey = btoa(key);
    const encodedValue = btoa(value);
    localStorage.setItem(encodedKey, encodedValue);
  } catch (error) {
    console.error("Error encoding:", error);
    localStorage.setItem(key, value); // Fallback
  }
};

// Get item with encoded key and decode value
export const getItem = (key: string): string | null => {
  if (!ENCODING_ENABLED) {
    return localStorage.getItem(key);
  }

  try {
    const encodedKey = btoa(key);
    const encodedValue = localStorage.getItem(encodedKey);
    if (encodedValue === null) return null;
    return atob(encodedValue);
  } catch (error) {
    console.error("Error decoding:", error);
    return localStorage.getItem(key); // Fallback
  }
};

// Remove item with encoded key
export const removeItem = (key: string): void => {
  if (!ENCODING_ENABLED) {
    localStorage.removeItem(key);
    return;
  }

  try {
    const encodedKey = btoa(key);
    localStorage.removeItem(encodedKey);
  } catch (error) {
    console.error("Error removing encoded item:", error);
    localStorage.removeItem(key); // Fallback
  }
};

// Migrate existing localStorage to encoded storage
export const migrateToEncoded = (): void => {
  if (!ENCODING_ENABLED) {
    console.log("Encoding disabled - skipping migration");
    return;
  }

  const keysToMigrate = Object.values(ATLAS_KEYS);

  keysToMigrate.forEach((key) => {
    const value = localStorage.getItem(key);
    if (value !== null) {
      setItem(key, value);
      localStorage.removeItem(key);
      console.log(`Migrated ${key} to encoded storage`);
    }
  });
};
