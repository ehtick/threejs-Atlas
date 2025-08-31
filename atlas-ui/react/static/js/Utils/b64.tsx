// atlas-ui/react/static/js/Utils/b64.tsx
import * as pako from "pako";
const ENCODING_ENABLED = true;

const COMPRESSION_THRESHOLD = 100;

const MAX_STORAGE_SIZE = 4 * 1024 * 1024;

export const ATLAS_KEYS = {
  SPACESHIP: "_atlasSpaceShip",
  ARCHIVE: "__atlasArchive",
  DAILY_CHALLENGES: "_atlasDailyChallenges",
  LOCATIONS: "_atlasLocations",
} as const;

const uint8ArrayToBase64 = (uint8Array: Uint8Array): string => {
  let binary = "";
  const len = uint8Array.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binary);
};

const base64ToUint8Array = (base64: string): Uint8Array => {
  const binary = atob(base64);
  const len = binary.length;
  const uint8Array = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    uint8Array[i] = binary.charCodeAt(i);
  }
  return uint8Array;
};

export const setItem = (key: string, value: string): void => {
  if (!ENCODING_ENABLED) {
    localStorage.setItem(key, value);
    return;
  }

  try {
    const valueSize = new Blob([value]).size;
    if (valueSize > MAX_STORAGE_SIZE) {
      console.warn(`Value too large: ${valueSize} bytes exceeds ${MAX_STORAGE_SIZE} bytes limit`);
      throw new Error("Value exceeds maximum storage size");
    }

    const encodedKey = btoa(encodeURIComponent(key));

    const textEncoder = new TextEncoder();
    const uint8Array = textEncoder.encode(value);

    let encodedValue: string;

    if (uint8Array.length >= COMPRESSION_THRESHOLD) {
      const compressed = pako.gzip(uint8Array);
      encodedValue = "c:" + uint8ArrayToBase64(compressed);
    } else {
      encodedValue = "u:" + uint8ArrayToBase64(uint8Array);
    }

    const finalSize = new Blob([encodedValue]).size;
    if (finalSize > MAX_STORAGE_SIZE) {
      console.warn(`Encoded value too large: ${finalSize} bytes exceeds ${MAX_STORAGE_SIZE} bytes limit`);
      throw new Error("Encoded value exceeds maximum storage size");
    }

    localStorage.setItem(encodedKey, encodedValue);
  } catch (error) {
    console.error("Error encoding/compressing:", error);
    if (error instanceof Error && error.message.includes("storage size")) {
      throw error;
    }
    localStorage.setItem(key, value);
  }
};

export const getItem = (key: string): string | null => {
  if (!ENCODING_ENABLED) {
    return localStorage.getItem(key);
  }

  try {
    const encodedKey = btoa(encodeURIComponent(key));
    const encodedValue = localStorage.getItem(encodedKey);
    if (encodedValue === null) return null;

    let uint8Array: Uint8Array;

    if (encodedValue.startsWith("c:")) {
      const compressed = base64ToUint8Array(encodedValue.slice(2));
      uint8Array = pako.ungzip(compressed);
    } else if (encodedValue.startsWith("u:")) {
      uint8Array = base64ToUint8Array(encodedValue.slice(2));
    } else {
      const compressedString = atob(encodedValue);
      const compressed = new Uint8Array(compressedString.split("").map((char) => char.charCodeAt(0)));
      uint8Array = pako.ungzip(compressed);
    }

    const textDecoder = new TextDecoder();
    return textDecoder.decode(uint8Array);
  } catch (error) {
    console.error("Error decoding/decompressing:", error);
    return localStorage.getItem(key);
  }
};

export const removeItem = (key: string): void => {
  if (!ENCODING_ENABLED) {
    localStorage.removeItem(key);
    return;
  }

  try {
    const encodedKey = btoa(encodeURIComponent(key));
    localStorage.removeItem(encodedKey);
  } catch (error) {
    console.error("Error removing encoded item:", error);
    localStorage.removeItem(key);
  }
};

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
