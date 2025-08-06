# Atlas Modular Planet Effects System

## Overview

The Atlas Universal Planet Renderer has been completely refactored into a modular effects system that eliminates hardcoded planet types and enables dynamic, AI-driven planet generation without frontend recompilation.

## Architecture

### Core Components

1. **ModularPlanetRenderer.tsx** - Main rendering component that uses only the modular system
2. **EffectRegistry.tsx** - Central registry that manages all available effects dynamically
3. **3DEffects/** - Directory containing all modular effect implementations
4. **index.ts** - Unified API and configuration for all effects

### Key Benefits

- ✅ **No Hardcoded Planet Types** - All planet rendering is driven by data from Python
- ✅ **Dynamic Effect Composition** - Effects are combined at runtime based on Python specifications
- ✅ **Hot-Swappable Effects** - New effects can be added without frontend changes
- ✅ **AI-Friendly** - Backend AI can create new planet types by generating effect data
- ✅ **Performance Optimized** - Only needed effects are loaded and rendered
- ✅ **Type Safe** - Full TypeScript support with proper interfaces

## Available Effects

### Surface Effects
- **MetallicSurface** - PBR metallic shaders with procedural fragmentation
- **RockyTerrain** - Mountain ranges, clouds, and crater effects
- **IcyTerrain** - Ice crystals, surface cracks, and polar ice caps
- **OceanWaves** - Animated water with landmasses and foam
- **GasGiantBands** - Procedural cloud bands and storm systems
- **FragmentationEffect** - 3D surface fragmentation and debris

### Atmospheric Effects
- **AtmosphericHalo** - Glowing atmospheric halos with customizable colors
- **AtmosphericStreaks** - Particle-based atmospheric streaks
- **DenseAtmosphere** - Thick atmospheric layers

### Structural Effects
- **RingSystem** - Planetary ring systems with realistic particle physics

## Usage

### Basic Integration

```typescript
import { ModularPlanetRenderer } from './3DComponents/ModularPlanetRenderer';

// Use the modular renderer instead of hardcoded components
<ModularPlanetRenderer
  planetName="your_planet_name"
  autoRotate={true}
  enableControls={true}
  showDebugInfo={true}
  onDataLoaded={(data) => console.log('Planet data:', data)}
  onEffectsCreated={(effects) => console.log('Effects created:', effects)}
/>
```

### Manual Effect Creation

```typescript
import { effectRegistry, MetallicSurfaceEffect } from './3DEffects';

// Create effects manually
const metallicEffect = effectRegistry.createEffect(
  'metallic_surface',
  {
    color: [0.4, 0.4, 0.45],
    roughness: 0.7,
    metalness: 0.9
  },
  planetRadius,
  planetMesh
);

// Apply to mesh
if (metallicEffect) {
  metallicEffect.effect.apply(planetMesh);
}
```

### Custom Effect Development

```typescript
import * as THREE from 'three';

export interface CustomEffectParams {
  intensity?: number;
  color?: THREE.Color | number[];
}

export class CustomEffect {
  private material: THREE.ShaderMaterial;
  
  constructor(params: CustomEffectParams) {
    // Implementation
  }
  
  apply(mesh: THREE.Mesh): void {
    mesh.material = this.material;
  }
  
  update(deltaTime: number): void {
    // Animation updates
  }
  
  dispose(): void {
    this.material.dispose();
  }
}

// Register with the system
effectRegistry.registerEffect('custom_effect', {
  create: (params, planetRadius, mesh) => new CustomEffect(params)
});
```

## Python Backend Integration

### Planet Data Structure

The Python backend should generate data in this format:

```python
planet_data = {
    "planet_info": {
        "name": "example_planet",
        "type": "Rocky",  # This drives effect selection
        "base_color": "#8B4513",
        "radius": 100
    },
    "surface_elements": {
        "type": "rocky",
        "effects_3d": [  # Modular system approach
            {
                "type": "rocky_terrain",
                "params": {
                    "mountains": [...],
                    "clouds": [...],
                    "crater": {...}
                },
                "priority": 0
            }
        ]
    },
    "atmosphere": {
        "halo": {
            "color": [0.5, 0.8, 1.0, 0.6],
            "intensity": 1.0
        }
    },
    "rings": {
        "has_rings": True,
        "particles": [...]
    }
}
```

### Effect Type Mapping

| Planet Type | Primary Effects | Additional Effects |
|-------------|----------------|-------------------|
| Rocky | rocky_terrain | atmospheric_halo |
| Icy | icy_terrain | atmospheric_halo |
| Oceanic | ocean_waves | atmospheric_halo |
| Metallic | metallic_surface, fragmentation | atmospheric_halo, atmospheric_streaks |
| Gas Giant | gas_giant_bands | ring_system |

### Universal Actions System

For advanced customization, use the universal actions system:

```python
surface_data = {
    "type": "universal_actions",
    "actions": [
        {
            "type": "draw_pointed_crystal",
            "position": [0.3, 0.2],
            "radius": 0.1,
            "layers": 6,
            "color": [0.8, 0.9, 1.0, 0.8],
            "angle": 1.2
        }
    ]
}
```

## Configuration

### Default Effect Settings

Effects come with sensible defaults that can be overridden:

```typescript
import { DEFAULT_EFFECT_CONFIGS } from './3DEffects';

// Customize default settings
const customConfig = {
  ...DEFAULT_EFFECT_CONFIGS.metallic_surface,
  roughness: 0.8,
  metalness: 0.95
};
```

### Available Effect Types

```typescript
import { AVAILABLE_EFFECTS } from './3DEffects';

console.log(AVAILABLE_EFFECTS);
// ['metallic_surface', 'gas_giant_bands', 'rocky_terrain', ...]
```

## Performance Optimization

### Effect Prioritization

Effects are rendered in priority order (lower numbers first):

```typescript
const effects = [
  { type: 'metallic_surface', priority: 0 },   // Base surface (first)
  { type: 'fragmentation', priority: 5 },      // Surface details
  { type: 'atmospheric_halo', priority: 10 },  // Atmosphere (last)
];
```

### Memory Management

```typescript
// Effects are automatically disposed when the component unmounts
// Manual cleanup if needed:
effectRegistry.clearAllEffects();
```

## Testing

### Validation Script

Run the test script to validate your setup:

```bash
python3 test_modular_effects.py
```

This generates test data and validates the complete data flow from Python to Three.js.

### Debug Mode

Enable debug information to monitor effect creation:

```typescript
<ModularPlanetRenderer
  showDebugInfo={true}
  onEffectsCreated={(effects) => {
    console.log(`Created ${effects.length} effects:`, effects);
  }}
/>
```

## Migration Guide

### From Hardcoded Components

**Before (Hardcoded):**
```typescript
import GasGiant3D from './3DComponents/GasGiant3D';
import PlanetRings3D from './3DComponents/PlanetRings3D';

// Multiple hardcoded components
GasGiant3D.create(props);
PlanetRings3D.create(props);
```

**After (Modular):**
```typescript
import { ModularPlanetRenderer } from './3DComponents/ModularPlanetRenderer';

// Single modular component handles everything
<ModularPlanetRenderer planetName="gas_giant_example" />
```

### Effect Registration

Old effects can be easily converted to the modular system:

1. Extract shader code into separate effect class
2. Implement standard interface (apply, update, dispose)
3. Register with EffectRegistry
4. Update Python backend to generate appropriate data

## Troubleshooting

### Common Issues

**Effects not appearing:**
- Check that Python data includes the correct `surface_elements.type`
- Verify effect is registered in EffectRegistry
- Enable debug mode to see effect creation logs

**Performance issues:**
- Reduce particle counts in ring systems
- Lower shader complexity for mobile devices
- Use effect prioritization to render expensive effects last

**Type errors:**
- Ensure all effect parameters match their TypeScript interfaces
- Use proper color formats (THREE.Color or [r,g,b] arrays)

### Debug Tools

```typescript
// Get registry statistics
const stats = effectRegistry.getStats();
console.log('Registry Stats:', stats);

// List available effect types
console.log('Available Effects:', effectRegistry.getAvailableEffectTypes());

// Validate effect configuration
import { validateEffectConfig } from './3DEffects';
const validation = validateEffectConfig('metallic_surface', params);
```

## API Reference

### ModularPlanetRenderer Props

```typescript
interface ModularPlanetRendererProps {
  planetName: string;                    // Required: Planet identifier
  containerClassName?: string;           // CSS classes for container
  width?: number;                        // Renderer width (default: 800)
  height?: number;                       // Renderer height (default: 600)
  autoRotate?: boolean;                  // Auto-rotation (default: true)
  enableControls?: boolean;              // Orbital controls (default: true)
  showDebugInfo?: boolean;               // Debug overlay (default: false)
  onDataLoaded?: (data: any) => void;    // Data load callback
  onEffectsCreated?: (effects: EffectInstance[]) => void; // Effects callback
  onError?: (error: string) => void;     // Error callback
}
```

### EffectRegistry Methods

```typescript
class EffectRegistry {
  // Create single effect
  createEffect(type: string, params: any, planetRadius: number, mesh?: THREE.Mesh): EffectInstance | null;
  
  // Create from Python data
  createEffectFromPythonData(type: string, data: any, ...args): EffectInstance | null;
  
  // Create multiple effects
  createEffectsFromList(effects: EffectCreationData[], ...args): EffectInstance[];
  
  // Update all active effects
  updateAllEffects(deltaTime: number, planetRotation?: number): void;
  
  // Get statistics
  getStats(): { registeredTypes: number; activeEffects: number; enabledEffects: number };
}
```

## Roadmap

### Planned Features

- **Advanced Particle Systems** - More sophisticated atmospheric effects
- **Procedural Texturing** - Dynamic texture generation based on planet data
- **Weather Systems** - Dynamic weather patterns and storms
- **City Lights** - Civilization indicators and light pollution
- **Aurora Effects** - Magnetic field visualizations
- **Volumetric Rendering** - 3D atmospheric effects

### Contributing

To add new effects:

1. Create effect class in `3DEffects/`
2. Export from `index.ts`
3. Register in `EffectRegistry.tsx`
4. Add default configuration
5. Update this documentation
6. Add test cases

## Conclusion

The modular effects system provides a powerful, flexible foundation for procedural planet rendering that can adapt to any planet type generated by AI systems. The separation of concerns between Python (data generation) and Three.js (rendering) enables real-time planet creation without frontend recompilation.

For questions or contributions, please refer to the main Atlas project documentation.