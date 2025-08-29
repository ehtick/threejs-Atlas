import React from 'react';
// Base64 encoder/decoder for localStorage keys and values
// With pako compression: JSON → gzip → base64 → localStorage
import * as pako from 'pako';

// MASTER SWITCH - Set to false to disable encoding (bypass mode)
const ENCODING_ENABLED = true;

// Minimum size threshold for compression (bytes)
// Below this size, compression adds overhead without benefit
const COMPRESSION_THRESHOLD = 100;

// Maximum size threshold for localStorage (bytes)
// Most browsers have 5-10MB limit per domain
const MAX_STORAGE_SIZE = 4 * 1024 * 1024; // 4MB safety margin

// Atlas localStorage keys that will be encoded
export const ATLAS_KEYS = {
  SPACESHIP: "_atlasSpaceShip",
  ARCHIVE: "__atlasArchive",
  DAILY_CHALLENGES: "_atlasDailyChallenges",
  LOCATIONS: "_atlasLocations",
} as const;

// Safe Uint8Array to base64 conversion without spread operator
const uint8ArrayToBase64 = (uint8Array: Uint8Array): string => {
  let binary = '';
  const len = uint8Array.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binary);
};

// Safe base64 to Uint8Array conversion
const base64ToUint8Array = (base64: string): Uint8Array => {
  const binary = atob(base64);
  const len = binary.length;
  const uint8Array = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    uint8Array[i] = binary.charCodeAt(i);
  }
  return uint8Array;
};

// Set item with compressed and encoded key and value
export const setItem = (key: string, value: string): void => {
  if (!ENCODING_ENABLED) {
    localStorage.setItem(key, value);
    return;
  }

  try {
    // Validate input size
    const valueSize = new Blob([value]).size;
    if (valueSize > MAX_STORAGE_SIZE) {
      console.warn(`Value too large: ${valueSize} bytes exceeds ${MAX_STORAGE_SIZE} bytes limit`);
      throw new Error('Value exceeds maximum storage size');
    }

    const encodedKey = btoa(encodeURIComponent(key));
    
    // Convert string to Uint8Array
    const textEncoder = new TextEncoder();
    const uint8Array = textEncoder.encode(value);
    
    let encodedValue: string;
    
    // Only compress if value is large enough to benefit
    if (uint8Array.length >= COMPRESSION_THRESHOLD) {
      const compressed = pako.gzip(uint8Array);
      encodedValue = 'c:' + uint8ArrayToBase64(compressed); // 'c:' prefix for compressed
    } else {
      encodedValue = 'u:' + uint8ArrayToBase64(uint8Array); // 'u:' prefix for uncompressed
    }
    
    // Final size check after encoding
    const finalSize = new Blob([encodedValue]).size;
    if (finalSize > MAX_STORAGE_SIZE) {
      console.warn(`Encoded value too large: ${finalSize} bytes exceeds ${MAX_STORAGE_SIZE} bytes limit`);
      throw new Error('Encoded value exceeds maximum storage size');
    }
    
    localStorage.setItem(encodedKey, encodedValue);
  } catch (error) {
    console.error("Error encoding/compressing:", error);
    // More specific fallback - only if not a size error
    if (error instanceof Error && error.message.includes('storage size')) {
      throw error; // Re-throw size errors
    }
    localStorage.setItem(key, value); // Fallback for encoding errors only
  }
};

// Get item with encoded key and decompress value
export const getItem = (key: string): string | null => {
  if (!ENCODING_ENABLED) {
    return localStorage.getItem(key);
  }

  try {
    const encodedKey = btoa(encodeURIComponent(key));
    const encodedValue = localStorage.getItem(encodedKey);
    if (encodedValue === null) return null;
    
    // Handle both new format (with prefix) and legacy format
    let uint8Array: Uint8Array;
    
    if (encodedValue.startsWith('c:')) {
      // Compressed data
      const compressed = base64ToUint8Array(encodedValue.slice(2));
      uint8Array = pako.ungzip(compressed);
    } else if (encodedValue.startsWith('u:')) {
      // Uncompressed data
      uint8Array = base64ToUint8Array(encodedValue.slice(2));
    } else {
      // Legacy format - assume compressed
      const compressedString = atob(encodedValue);
      const compressed = new Uint8Array(compressedString.split('').map(char => char.charCodeAt(0)));
      uint8Array = pako.ungzip(compressed);
    }
    
    const textDecoder = new TextDecoder();
    return textDecoder.decode(uint8Array);
  } catch (error) {
    console.error("Error decoding/decompressing:", error);
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
    const encodedKey = btoa(encodeURIComponent(key));
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