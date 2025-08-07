/**
 * PlanetColorBase.tsx
 * 
 * Centraliza toda la lógica de colores de planetas.
 * PUNTO. Aquí va todo lo relacionado con base_color de Python.
 */

import * as THREE from 'three';

export interface PlanetColorConfig {
  baseColor: THREE.Color;
  secondaryColor?: THREE.Color;
  accentColor?: THREE.Color;
  emissiveColor?: THREE.Color;
}

/**
 * Convierte color hex de Python a THREE.Color
 */
export function hexToThreeColor(hexColor: string): THREE.Color {
  // Remover # si existe
  const hex = hexColor.replace('#', '');
  
  // Convertir a RGB normalizado (0-1)
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;
  
  return new THREE.Color(r, g, b);
}

/**
 * Convierte array RGB de Python a THREE.Color
 */
export function rgbArrayToThreeColor(rgbArray: number[]): THREE.Color {
  if (rgbArray.length >= 3) {
    return new THREE.Color(rgbArray[0], rgbArray[1], rgbArray[2]);
  }
  
  // Fallback a color por defecto
  return new THREE.Color(0.5, 0.5, 0.5);
}

/**
 * Obtiene el color base del planeta desde los datos de Python
 * ESTA ES LA FUNCIÓN PRINCIPAL que deben usar todos los efectos
 */
export function getPlanetBaseColor(pythonData: any): THREE.Color {
  
  // Prioridad 1: ocean_color específico (para compatibilidad)
  if (pythonData.ocean_color) {
    if (typeof pythonData.ocean_color === 'string') {
      return hexToThreeColor(pythonData.ocean_color);
    } else if (Array.isArray(pythonData.ocean_color)) {
      return rgbArrayToThreeColor(pythonData.ocean_color);
    }
  }
  
  // Prioridad 2: base_color de planet_info (CORRECTO)
  if (pythonData.planet_info?.base_color) {
    if (typeof pythonData.planet_info.base_color === 'string') {
      return hexToThreeColor(pythonData.planet_info.base_color);
    } else if (Array.isArray(pythonData.planet_info.base_color)) {
      return rgbArrayToThreeColor(pythonData.planet_info.base_color);
    }
  }
  
  // Prioridad 3: base_color directo (por si está en el root)
  if (pythonData.base_color) {
    if (typeof pythonData.base_color === 'string') {
      return hexToThreeColor(pythonData.base_color);
    } else if (Array.isArray(pythonData.base_color)) {
      return rgbArrayToThreeColor(pythonData.base_color);
    }
  }
  
  // Prioridad 4: Por tipo de planeta (fallback seguro)
  const planetType = pythonData.planet_info?.type || pythonData.type || 'Unknown';
  const fallbackColor = getFallbackColorForPlanetType(planetType);
  
  return fallbackColor;
}

/**
 * Colores fallback por tipo de planeta (últmo recurso)
 */
export function getFallbackColorForPlanetType(planetType: string): THREE.Color {
  const fallbackColors: Record<string, string> = {
    'Gas Giant': '#FFA500',
    'Anomaly': '#FFFFFF',
    'Rocky': '#808080',
    'Icy': '#ADD8E6',
    'Oceanic': '#0000FF',
    'Desert': '#FFD700',
    'Lava': '#FF0000',
    'Arid': '#800000',
    'Swamp': '#008000',
    'Tundra': '#F0F8FF',
    'Forest': '#006400',
    'Savannah': '#F4A460',
    'Cave': '#D1D1D1',
    'Crystalline': '#00FFFF',
    'Metallic': '#C0C0C0',
    'Toxic': '#800080',
    'Radioactive': '#00FF00',
    'Magma': '#FF4500',
    'Molten Core': '#FF8C00',
    'Carbon': '#090909',
    'Diamond': '#87CEFA',
    'Super Earth': '#90EE90',
    'Sub Earth': '#006400',
    'Frozen Gas Giant': '#ADD8E6',
    'Nebulous': '#FFC0CB',
    'Aquifer': '#00FFFF',
    'Exotic': '#FF00FF'
  };
  
  const hexColor = fallbackColors[planetType] || '#FFFFFF';
  return hexToThreeColor(hexColor);
}

/**
 * Genera colores secundarios basados en el color base
 * Para crear variaciones procedurales
 */
export function generateSecondaryColors(baseColor: THREE.Color, seed: number = 12345): PlanetColorConfig {
  // Generador de números pseudoaleatorios simple
  let s = seed;
  const random = () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
  
  // Color base
  const config: PlanetColorConfig = { baseColor: baseColor.clone() };
  
  // Color secundario (más oscuro/más claro)
  const hsl = { h: 0, s: 0, l: 0 };
  baseColor.getHSL(hsl);
  
  config.secondaryColor = new THREE.Color().setHSL(
    hsl.h, 
    Math.max(0, Math.min(1, hsl.s + (random() - 0.5) * 0.2)), // Variación de saturación
    Math.max(0, Math.min(1, hsl.l + (random() - 0.5) * 0.3))  // Variación de luminosidad
  );
  
  // Color de acento (diferente matiz)
  config.accentColor = new THREE.Color().setHSL(
    (hsl.h + (random() - 0.5) * 0.1) % 1, // Ligero cambio de matiz
    Math.max(0, Math.min(1, hsl.s * (0.8 + random() * 0.4))), // Saturación variable
    Math.max(0, Math.min(1, hsl.l * (0.6 + random() * 0.8)))  // Luminosidad variable
  );
  
  // Color emisivo (más brillante para efectos de glow)
  config.emissiveColor = new THREE.Color().setHSL(
    hsl.h,
    hsl.s * 0.8, // Menos saturado
    Math.min(1, hsl.l * 1.5) // Más brillante
  );
  
  return config;
}

/**
 * DEPRECATED: Usar getPlanetBaseColor() en su lugar
 * Esta función era la que estaba en OceanWaves.tsx - YA NO USAR
 */
export function getLegacyOceanColor(): THREE.Color {
  console.warn('getLegacyOceanColor() is deprecated. Use getPlanetBaseColor() instead.');
  return new THREE.Color(0.1, 0.3, 0.6);
}