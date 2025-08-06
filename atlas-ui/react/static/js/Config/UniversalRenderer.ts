/**
 * Universal Planet Renderer Configuration
 * 
 * This file contains configuration options for the Universal Planet Renderer system
 */

export interface UniversalRendererConfig {
  // Enable/disable the universal renderer system globally
  enabled: boolean;
  
  // Default to universal renderer (true) or legacy renderer (false)
  defaultToUniversal: boolean;
  
  // Enable fallback to legacy renderer if universal fails
  enableFallback: boolean;
  
  // Show renderer toggle in UI
  showToggle: boolean;
  
  // Show 3D/2D toggle in planet visualization
  show3DToggle: boolean;
  
  // Enable debug information
  showDebugInfo: boolean;
  
  // API endpoints
  api: {
    renderingData: string;
    locationData: string;
  };
  
  // 3D Renderer settings
  renderer3D: {
    antialias: boolean;
    shadows: boolean;
    maxPixelRatio: number;
    enableOrbitControls: boolean;
    autoRotate: boolean;
    autoRotateSpeed: number;
  };
  
  // Supported planet types for universal rendering
  supportedPlanetTypes: string[];
  
  // Feature flags
  features: {
    rings: boolean;
    atmosphere: boolean;
    lifeEffects: boolean;
    dynamicShaders: boolean;
    particleEffects: boolean;
    realTimeRotation: boolean;
  };
}

// Default configuration
export const defaultUniversalRendererConfig: UniversalRendererConfig = {
  enabled: true,
  defaultToUniversal: true,
  enableFallback: true,
  showToggle: true,
  show3DToggle: true,
  showDebugInfo: false,
  
  api: {
    renderingData: '/api/planet/{planetName}/rendering-data',
    locationData: '/api/planet/{planetName}/location-data'
  },
  
  renderer3D: {
    antialias: true,
    shadows: false,
    maxPixelRatio: 2,
    enableOrbitControls: true,
    autoRotate: false,
    autoRotateSpeed: 0.5
  },
  
  supportedPlanetTypes: [
    'Gas Giant',
    'Anomaly',
    'Rocky',
    'Icy',
    'Oceanic',
    'Desert',
    'Lava',
    'Arid',
    'Swamp',
    'Tundra',
    'Forest',
    'Savannah',
    'Cave',
    'Crystalline',
    'Metallic',
    'Toxic',
    'Radioactive',
    'Magma',
    'Molten Core',
    'Carbon',
    'Diamond',
    'Super Earth',
    'Sub Earth',
    'Frozen Gas Giant',
    'Nebulous',
    'Aquifer',
    'Exotic'
  ],
  
  features: {
    rings: true,
    atmosphere: true,
    lifeEffects: true,
    dynamicShaders: true,
    particleEffects: true,
    realTimeRotation: true
  }
};

// Runtime configuration (can be modified during execution)
let runtimeConfig: UniversalRendererConfig = { ...defaultUniversalRendererConfig };

/**
 * Get current universal renderer configuration
 */
export const getUniversalRendererConfig = (): UniversalRendererConfig => {
  return runtimeConfig;
};

/**
 * Update universal renderer configuration
 */
export const updateUniversalRendererConfig = (updates: Partial<UniversalRendererConfig>): void => {
  runtimeConfig = { ...runtimeConfig, ...updates };
  
  // Save to localStorage for persistence
  try {
    localStorage.setItem('universalRendererConfig', JSON.stringify(runtimeConfig));
  } catch (error) {
    console.warn('Failed to save universal renderer config to localStorage:', error);
  }
};

/**
 * Load configuration from localStorage
 */
export const loadUniversalRendererConfig = (): void => {
  try {
    const saved = localStorage.getItem('universalRendererConfig');
    if (saved) {
      const savedConfig = JSON.parse(saved);
      runtimeConfig = { ...defaultUniversalRendererConfig, ...savedConfig };
    }
  } catch (error) {
    console.warn('Failed to load universal renderer config from localStorage:', error);
    runtimeConfig = { ...defaultUniversalRendererConfig };
  }
};

/**
 * Reset configuration to defaults
 */
export const resetUniversalRendererConfig = (): void => {
  runtimeConfig = { ...defaultUniversalRendererConfig };
  
  try {
    localStorage.removeItem('universalRendererConfig');
  } catch (error) {
    console.warn('Failed to remove universal renderer config from localStorage:', error);
  }
};

/**
 * Check if a planet type is supported by the universal renderer
 */
export const isPlanetTypeSupported = (planetType: string): boolean => {
  return runtimeConfig.supportedPlanetTypes.includes(planetType);
};

/**
 * Check if universal renderer is enabled and should be used
 */
export const shouldUseUniversalRenderer = (planetType?: string): boolean => {
  if (!runtimeConfig.enabled) {
    return false;
  }
  
  if (planetType && !isPlanetTypeSupported(planetType)) {
    return false;
  }
  
  return true;
};

/**
 * Get API endpoint for planet rendering data
 */
export const getRenderingDataEndpoint = (planetName: string): string => {
  return runtimeConfig.api.renderingData.replace('{planetName}', encodeURIComponent(planetName));
};

/**
 * Development/debugging utilities
 */
export const UniversalRendererDebug = {
  /**
   * Log current configuration
   */
  logConfig: () => {
    console.group('🌍 Universal Planet Renderer Configuration');
    console.table(runtimeConfig);
    console.groupEnd();
  },
  
  /**
   * Enable debug mode
   */
  enableDebug: () => {
    updateUniversalRendererConfig({ showDebugInfo: true });
    console.log('🔍 Universal Renderer debug mode enabled');
  },
  
  /**
   * Disable debug mode
   */
  disableDebug: () => {
    updateUniversalRendererConfig({ showDebugInfo: false });
    console.log('🔍 Universal Renderer debug mode disabled');
  },
  
  /**
   * Test planet type support
   */
  testPlanetType: (planetType: string) => {
    const supported = isPlanetTypeSupported(planetType);
    console.log(`🌍 Planet type "${planetType}": ${supported ? '✅ Supported' : '❌ Not supported'}`);
    return supported;
  },
  
  /**
   * Get performance metrics
   */
  getMetrics: () => {
    return {
      config: runtimeConfig,
      supported_types: runtimeConfig.supportedPlanetTypes.length,
      features_enabled: Object.values(runtimeConfig.features).filter(Boolean).length,
      total_features: Object.keys(runtimeConfig.features).length
    };
  }
};

// Initialize configuration on module load
loadUniversalRendererConfig();

// Export for global access in development
if (typeof window !== 'undefined') {
  (window as any).UniversalRendererDebug = UniversalRendererDebug;
}