/**
 * 3D Effects Library - Índice principal
 * 
 * Exporta todos los efectos 3D disponibles para facilitar las importaciones
 * y proporcionar una API unificada para el sistema de efectos modulares.
 */

// Efectos principales
export { RingSystemEffect, createRingSystemFromPythonData } from './RingSystem';
export type { RingSystemParams, RingParticle } from './RingSystem';

export { GasGiantBandsEffect, createGasGiantBandsFromPythonData } from './GasGiantBands';
export type { GasGiantBandsParams } from './GasGiantBands';

export { 
  AtmosphericHaloEffect, 
  AtmosphericStreaksEffect, 
  DenseAtmosphereEffect,
  createAtmosphericHaloFromPythonData,
  createAtmosphericStreaksFromPythonData,
  createDenseAtmosphereFromPythonData
} from './AtmosphericEffects';
export type { 
  AtmosphericHaloParams, 
  AtmosphericStreaksParams, 
  AtmosphereParams 
} from './AtmosphericEffects';

export { MetallicSurfaceEffect } from './MetallicSurface';
export type { MetallicSurfaceParams } from './MetallicSurface';

export { FragmentationEffect } from './FragmentationEffect';
export type { FragmentationParams } from './FragmentationEffect';

export { RockyTerrainEffect, createRockyTerrainFromPythonData } from './RockyTerrain';
export type { RockyTerrainParams } from './RockyTerrain';

export { IcyTerrainEffect, createIcyTerrainFromPythonData } from './IcyTerrain';
export type { IcyTerrainParams } from './IcyTerrain';

// OceanWaves eliminado - no respeta los datos de Python

// Sistema de registro y gestión
export { 
  EffectRegistry, 
  effectRegistry, 
  EffectType 
} from './EffectRegistry';
export type { 
  EffectInstance, 
  EffectCreationData, 
  EffectCreator 
} from './EffectRegistry';

// Utilidades y constantes
export const AVAILABLE_EFFECTS = [
  'metallic_surface',
  'gas_giant_bands',
  'atmospheric_halo',
  'atmospheric_streaks',
  'dense_atmosphere',
  'ring_system',
  'fragmentation',
  'rocky_terrain',
  'icy_terrain',
  // 'ocean_waves', // Eliminado - no respeta datos de Python
  'lava_flows',
  'crystal_formations',
  'cloud_layers',
  'storm_systems',
  'volcanic_activity',
  'aurora',
  'magnetic_field',
  'city_lights',
  'bioluminescence',
  'thermal_emissions'
] as const;

export type AvailableEffectType = typeof AVAILABLE_EFFECTS[number];

// Configuración por defecto para efectos comunes
export const DEFAULT_EFFECT_CONFIGS = {
  metallic_surface: {
    roughness: 0.7,
    metalness: 0.9,
    fragmentationIntensity: 0.5,
    noiseScale: 8.0,
    noiseIntensity: 0.3
  },
  
  atmospheric_halo: {
    intensity: 1.0,
    falloff: 2.0,
    scale: 1.2,
    pulsation: false
  },
  
  ring_system: {
    particleCount: 1000,
    grayVariation: 'medium' as const,
    ringThickness: 0.1,
    sparkleIntensity: 0.03,
    brightness: 2.2
  },
  
  gas_giant_bands: {
    numBands: 8,
    animationSpeed: 1.0,
    turbulence: 0.5,
    stormIntensity: 0.7
  },
  
  fragmentation: {
    fragmentCount: 20,
    size: 0.05,
    distribution: 'edge' as const,
    animationSpeed: 1.0
  },
  
  rocky_terrain: {
    baseTextureIntensity: 0.4,
    mountainColor: [0.8, 0.8, 0.8],
    cloudColor: [0.7, 0.7, 0.7],
    craterColor: [0.1, 0.1, 0.1]
  },
  
  icy_terrain: {
    baseTextureIntensity: 0.3,
    crystalColor: [0.675, 0.843, 0.902],
    crackColor: [0.2, 0.2, 0.2],
    iceCapColor: [0.678, 0.847, 1.0]
  },
  
  // ocean_waves eliminado - no respeta datos de Python
} as const;

// Funciones de utilidad
export function getEffectDefaultConfig(effectType: string): any {
  return DEFAULT_EFFECT_CONFIGS[effectType as keyof typeof DEFAULT_EFFECT_CONFIGS] || {};
}

export function isEffectAvailable(effectType: string): boolean {
  return AVAILABLE_EFFECTS.includes(effectType as any);
}

/**
 * Crea una configuración de efectos optimizada para un tipo de planeta
 */
export function createPlanetEffectConfig(planetType: string): EffectCreationData[] {
  const effects: EffectCreationData[] = [];
  
  switch (planetType.toLowerCase()) {
    case 'metallic':
      effects.push(
        {
          type: 'metallic_surface',
          params: {
            ...DEFAULT_EFFECT_CONFIGS.metallic_surface,
            color: [0.4, 0.4, 0.45]
          },
          priority: 0
        },
        {
          type: 'atmospheric_halo',
          params: {
            ...DEFAULT_EFFECT_CONFIGS.atmospheric_halo,
            color: [0.6, 0.1, 0.9],
            scale: 1.15
          },
          priority: 10
        },
        {
          type: 'atmospheric_streaks',
          params: {
            color: [0.95, 0.95, 1.0],
            particleCount: 100
          },
          priority: 20
        }
      );
      break;
      
    case 'gas giant':
      effects.push(
        {
          type: 'gas_giant_bands',
          params: DEFAULT_EFFECT_CONFIGS.gas_giant_bands,
          priority: 0
        },
        {
          type: 'atmospheric_halo',
          params: {
            ...DEFAULT_EFFECT_CONFIGS.atmospheric_halo,
            color: [1.0, 0.6, 0.2],
            intensity: 0.8
          },
          priority: 10
        }
      );
      break;
      
    case 'icy':
      effects.push(
        {
          type: 'atmospheric_halo',
          params: {
            ...DEFAULT_EFFECT_CONFIGS.atmospheric_halo,
            color: [0.5, 0.8, 1.0],
            intensity: 0.6,
            scale: 1.1
          },
          priority: 10
        }
      );
      break;
      
    default:
      // Efectos genéricos por defecto
      effects.push({
        type: 'atmospheric_halo',
        params: {
          color: [0.5, 0.5, 0.8],
          intensity: 0.5
        },
        priority: 10
      });
      break;
  }
  
  return effects;
}

/**
 * Validador de configuración de efectos
 */
export function validateEffectConfig(effectType: string, params: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!isEffectAvailable(effectType)) {
    errors.push(`Effect type '${effectType}' is not available`);
  }
  
  // Validaciones específicas por tipo de efecto
  switch (effectType) {
    case 'metallic_surface':
      if (params.roughness !== undefined && (params.roughness < 0 || params.roughness > 1)) {
        errors.push('Roughness must be between 0 and 1');
      }
      if (params.metalness !== undefined && (params.metalness < 0 || params.metalness > 1)) {
        errors.push('Metalness must be between 0 and 1');
      }
      break;
      
    case 'ring_system':
      if (params.particleCount !== undefined && params.particleCount < 1) {
        errors.push('Particle count must be positive');
      }
      break;
      
    case 'fragmentation':
      if (params.fragmentCount !== undefined && params.fragmentCount < 1) {
        errors.push('Fragment count must be positive');
      }
      break;
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Logger para debug de efectos
 */
export const EffectsLogger = {
  log: (message: string, data?: any) => {
    // Logs disabled for cleaner console
  },
  
  warn: (message: string, data?: any) => {
    console.warn(`⚠️ [Effects] ${message}`, data || '');
  },
  
  error: (message: string, error?: any) => {
    console.error(`❌ [Effects] ${message}`, error || '');
  },
  
  debug: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`🔍 [Effects] ${message}`, data || '');
    }
  }
};

// Re-exportar el registry para acceso directo
export { effectRegistry as Effects };

// Versión y metadata
export const EFFECTS_LIBRARY_VERSION = '1.0.0';
export const EFFECTS_LIBRARY_NAME = 'Atlas Planet Effects Library';

export const EFFECTS_METADATA = {
  version: EFFECTS_LIBRARY_VERSION,
  name: EFFECTS_LIBRARY_NAME,
  totalEffects: AVAILABLE_EFFECTS.length,
  lastUpdated: new Date().toISOString(),
  author: 'Atlas Universal Planet Renderer',
  description: 'Modular 3D effects library for procedural planet rendering'
};

// Inicialización
EffectsLogger.log(`Initialized ${EFFECTS_LIBRARY_NAME} v${EFFECTS_LIBRARY_VERSION}`);