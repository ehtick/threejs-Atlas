/**
 * Effect Registry - Registro dinámico de efectos 3D
 * 
 * Sistema centralizado para gestionar todos los efectos disponibles
 * y aplicarlos dinámicamente basándose en datos de Python.
 */

import * as THREE from 'three';

// Importar todos los efectos disponibles
import { RingSystemEffect, createRingSystemFromPythonData, RingSystemParams } from './RingSystem';
import { GasGiantBandsEffect, createGasGiantBandsFromPythonData, GasGiantBandsParams } from './GasGiantBands';
import { 
  AtmosphereEffect, 
  createAtmosphereFromPythonData,
  AtmosphereParams
} from './Atmosphere';

import { 
  CloudGyrosEffect, 
  createCloudGyrosFromPythonData,
  CloudGyrosParams 
} from './CloudGyros';

import { 
  AtmosphericStreaksEffect, 
  createAtmosphericStreaksFromPythonData,
  AtmosphericStreaksParams 
} from './AtmosphericStreaks';

// Importar efectos de superficie
import { MetallicSurfaceEffect } from './MetallicSurface';
import { FragmentationEffect } from './FragmentationEffect';
import { RockyTerrainEffect, createRockyTerrainFromPythonData } from './RockyTerrain';
import { IcyTerrainEffect, createIcyTerrainFromPythonData } from './IcyTerrain';
// OceanWaves eliminado - no respeta los datos de Python

// Importar efectos de debug
import { VisualDebug3DEffect, createVisualDebug3DFromPythonData } from './VisualDebug3D';

// Importar función centralizada de colores  
import { getPlanetBaseColor } from './PlanetColorBase';

// VISUAL DEBUG FLAG - Controla si se muestra debug visual 3D
const VISUAL_DEBUG = false; // Cambiar a false para desactivar

export interface EffectInstance {
  id: string;
  type: string;
  effect: any;
  priority: number;
  enabled: boolean;
}

export interface EffectCreationData {
  type: string;
  params: any;
  priority?: number;
  enabled?: boolean;
}

// Tipos de efectos disponibles
export enum EffectType {
  // Efectos de superficie
  METALLIC_SURFACE = 'metallic_surface',
  GAS_GIANT_BANDS = 'gas_giant_bands',
  
  // Efectos atmosféricos
  ATMOSPHERE = 'atmosphere',
  ATMOSPHERIC_STREAKS = 'atmospheric_streaks',
  
  // Efectos dinámicos
  CLOUD_GYROS = 'cloud_gyros',
  
  // Efectos estructurales
  RING_SYSTEM = 'ring_system',
  FRAGMENTATION = 'fragmentation',
  
  // Efectos de superficie específicos 
  ROCKY_TERRAIN = 'rocky_terrain',
  ICY_TERRAIN = 'icy_terrain',
  OCEAN_WAVES = 'ocean_waves',
  LAVA_FLOWS = 'lava_flows',
  CRYSTAL_FORMATIONS = 'crystal_formations',
  CLOUD_LAYERS = 'cloud_layers',
  STORM_SYSTEMS = 'storm_systems',
  VOLCANIC_ACTIVITY = 'volcanic_activity',
  AURORA = 'aurora',
  MAGNETIC_FIELD = 'magnetic_field',
  
  // Efectos de iluminación
  CITY_LIGHTS = 'city_lights',
  BIOLUMINESCENCE = 'bioluminescence',
  THERMAL_EMISSIONS = 'thermal_emissions',
  
  // Efectos de debug
  VISUAL_DEBUG_3D = 'visual_debug_3d'
}

// Interfaz para creadores de efectos
export interface EffectCreator {
  create(params: any, planetRadius: number, mesh?: THREE.Mesh): any;
  fromPythonData?(pythonData: any, planetRadius: number, mesh?: THREE.Mesh): any;
}

/**
 * Registry de efectos - gestiona todos los efectos disponibles
 */
export class EffectRegistry {
  private static instance: EffectRegistry;
  private creators: Map<string, EffectCreator> = new Map();
  private effects: Map<string, EffectInstance> = new Map();
  private nextId: number = 1;

  private constructor() {
    this.registerDefaultEffects();
  }

  static getInstance(): EffectRegistry {
    if (!EffectRegistry.instance) {
      EffectRegistry.instance = new EffectRegistry();
    }
    return EffectRegistry.instance;
  }

  /**
   * Registra todos los efectos por defecto
   */
  private registerDefaultEffects(): void {
    // Efectos de superficie
    this.registerEffect(EffectType.METALLIC_SURFACE, {
      create: (params, planetRadius, mesh) => new MetallicSurfaceEffect(params),
      fromPythonData: (data, planetRadius, mesh) => {
        // 🎨 Usar función centralizada de colores
        const baseColor = getPlanetBaseColor(data);
        const colorArray = [baseColor.r, baseColor.g, baseColor.b];
        
        return new MetallicSurfaceEffect({
          color: colorArray,
          roughness: data.surface?.roughness || 0.7,
          metalness: data.surface?.metalness || 0.9,
          fragmentationIntensity: data.surface?.fragmentation || 0.5
        });
      }
    });

    this.registerEffect(EffectType.GAS_GIANT_BANDS, {
      create: (params, planetRadius, mesh) => new GasGiantBandsEffect(mesh!, params),
      fromPythonData: (data, planetRadius, mesh) => 
        createGasGiantBandsFromPythonData(mesh!, data)
    });

    // Efectos atmosféricos

    this.registerEffect(EffectType.CLOUD_GYROS, {
      create: (params, planetRadius) => new CloudGyrosEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => 
        createCloudGyrosFromPythonData(planetRadius, data.atmosphere || {})
    });

    this.registerEffect(EffectType.ATMOSPHERIC_STREAKS, {
      create: (params, planetRadius) => new AtmosphericStreaksEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => 
        createAtmosphericStreaksFromPythonData(planetRadius, data.atmosphere || {})
    });

    this.registerEffect(EffectType.ATMOSPHERE, {
      create: (params, planetRadius) => new AtmosphereEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => 
        createAtmosphereFromPythonData(planetRadius, data)
    });

    // Efectos estructurales
    this.registerEffect(EffectType.RING_SYSTEM, {
      create: (params, planetRadius) => new RingSystemEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => 
        createRingSystemFromPythonData(data.rings || {}, planetRadius)
    });

    this.registerEffect(EffectType.FRAGMENTATION, {
      create: (params, planetRadius) => new FragmentationEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => {
        return new FragmentationEffect(planetRadius, {
          color: data.surface?.fragment_color || [0.3, 0.3, 0.3],
          fragmentCount: data.surface?.fragment_count || 20
        });
      }
    });

    // Nuevos efectos de terreno
    this.registerEffect(EffectType.ROCKY_TERRAIN, {
      create: (params, planetRadius, mesh) => new RockyTerrainEffect(params),
      fromPythonData: (data, planetRadius, mesh) => createRockyTerrainFromPythonData(data) // Pasar todos los datos
    });

    this.registerEffect(EffectType.ICY_TERRAIN, {
      create: (params, planetRadius, mesh) => new IcyTerrainEffect(params),
      fromPythonData: (data, planetRadius, mesh) => createIcyTerrainFromPythonData(data) // Pasar todos los datos
    });

    // Efectos futuros (placeholders)
    this.registerEffect(EffectType.LAVA_FLOWS, {
      create: (params, planetRadius) => {
        console.warn('Lava flows effect not implemented yet');
        return null;
      }
    });

    this.registerEffect(EffectType.CRYSTAL_FORMATIONS, {
      create: (params, planetRadius) => {
        console.warn('Crystal formations effect not implemented yet');
        return null;
      }
    });

    // Efectos de debug
    this.registerEffect(EffectType.VISUAL_DEBUG_3D, {
      create: (params, planetRadius) => new VisualDebug3DEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createVisualDebug3DFromPythonData(data, planetRadius)
    });

    // Más efectos pueden añadirse aquí fácilmente
  }

  /**
   * Registra un nuevo tipo de efecto
   */
  registerEffect(type: string, creator: EffectCreator): void {
    this.creators.set(type, creator);
  }

  /**
   * Crea un efecto específico
   */
  createEffect(
    type: string, 
    params: any, 
    planetRadius: number, 
    mesh?: THREE.Mesh,
    priority: number = 0
  ): EffectInstance | null {
    const creator = this.creators.get(type);
    if (!creator) {
      console.warn(`Effect type '${type}' not registered`);
      return null;
    }

    try {
      const effect = creator.create(params, planetRadius, mesh);
      if (!effect) {
        return null;
      }

      const instance: EffectInstance = {
        id: `effect_${this.nextId++}`,
        type,
        effect,
        priority,
        enabled: true
      };

      this.effects.set(instance.id, instance);
      return instance;
    } catch (error) {
      console.error(`Error creating effect '${type}':`, error);
      return null;
    }
  }

  /**
   * Crea un efecto desde datos de Python
   */
  createEffectFromPythonData(
    type: string,
    pythonData: any,
    planetRadius: number,
    mesh?: THREE.Mesh,
    priority: number = 0
  ): EffectInstance | null {
    const creator = this.creators.get(type);
    if (!creator || !creator.fromPythonData) {
      return this.createEffect(type, pythonData, planetRadius, mesh, priority);
    }

    try {
      const effect = creator.fromPythonData(pythonData, planetRadius, mesh);
      if (!effect) {
        return null;
      }

      const instance: EffectInstance = {
        id: `effect_${this.nextId++}`,
        type,
        effect,
        priority,
        enabled: true
      };

      this.effects.set(instance.id, instance);
      return instance;
    } catch (error) {
      console.error(`Error creating effect '${type}' from Python data:`, error);
      return null;
    }
  }

  /**
   * Crea múltiples efectos desde una lista de datos
   */
  createEffectsFromList(
    effectsData: EffectCreationData[],
    planetRadius: number,
    mesh?: THREE.Mesh
  ): EffectInstance[] {
    const instances: EffectInstance[] = [];

    // Ordenar por prioridad
    const sortedData = effectsData.sort((a, b) => (a.priority || 0) - (b.priority || 0));

    for (const data of sortedData) {
      const instance = this.createEffect(
        data.type,
        data.params,
        planetRadius,
        mesh,
        data.priority
      );

      if (instance) {
        instance.enabled = data.enabled !== false;
        instances.push(instance);
      }
    }

    return instances;
  }

  /**
   * Interpreta datos completos de Python y crea todos los efectos necesarios
   */
  createEffectsFromPythonPlanetData(
    pythonData: any,
    planetRadius: number,
    mesh: THREE.Mesh,
    scene: THREE.Scene
  ): EffectInstance[] {
    const effects: EffectInstance[] = [];
    
    try {
      // 🚀 DEBUG: Log the complete data structure
      console.log('🌍 EffectRegistry received Python data:', pythonData);
      console.log('🔍 Surface elements:', pythonData.surface_elements);
      console.log('🌫️ Atmosphere:', pythonData.atmosphere);
      console.log('💍 Rings:', pythonData.rings);
      console.log('🪐 Planet info:', pythonData.planet_info);
    

    // 1. Efectos de superficie basados en el tipo
    if (pythonData.surface_elements) {
      const surface = pythonData.surface_elements;
      console.log('🏔️ Processing surface elements:', surface.type, surface);
      
      // Sistema modular de efectos 3D
      if (surface.effects_3d && Array.isArray(surface.effects_3d)) {
        console.log('🚀 ENCONTRADOS effects_3d:', surface.effects_3d.length, 'efectos');
        console.log('🚀 LISTA COMPLETA DE effects_3d:', JSON.stringify(surface.effects_3d, null, 2));
        
        for (const effectData of surface.effects_3d) {
          console.log('🔍 PROCESANDO EFECTO:', effectData.type, 'con params:', effectData.params);
          
          const instance = this.createEffect(
            effectData.type,
            effectData.params,
            planetRadius,
            mesh,
            effectData.priority || 0
          );
          
          if (instance) {
            effects.push(instance);
            
            // APLICAR EL EFECTO INMEDIATAMENTE
            if (instance.effect.apply) {
              console.log('🎯 APLICANDO EFECTO:', effectData.type, 'al mesh');
              instance.effect.apply(mesh);
            } else {
              console.warn('⚠️ EFECTO SIN apply():', effectData.type);
            }
            
            // Añadir a la escena si es necesario
            if (instance.effect.addToScene) {
              instance.effect.addToScene(scene, mesh.position);
            }
            console.log('✅ EFECTO AGREGADO Y APLICADO:', effectData.type);
          } else {
            console.error('❌ FALLO AL CREAR EFECTO:', effectData.type);
          }
        }
      } else {
        console.log('❌ NO HAY effects_3d O NO ES ARRAY:', typeof surface.effects_3d, surface.effects_3d);
      }
      
      // Sistema de rendering_commands ELIMINADO - usar efectos específicos
      
      // Efectos específicos por tipo de planeta (LEGACY - se eliminará)
      console.log('🔍 Checking legacy surface type:', surface.type);
      switch (surface.type) {
        case 'gas_giant':
          console.log('🌀 Creating Gas Giant bands effect');
          const gasGiantEffect = this.createEffectFromPythonData(
            EffectType.GAS_GIANT_BANDS,
            {
              ...surface,
              base_color: pythonData.planet_info?.base_color || pythonData.surface?.base_color,
              turbulence: pythonData.turbulence || surface.turbulence,
              storm_intensity: pythonData.storm_intensity || surface.storm_intensity
            },
            planetRadius,
            mesh,
            0
          );
          if (gasGiantEffect) {
            effects.push(gasGiantEffect);
            console.log('✅ Gas Giant bands effect applied to mesh material');
          } else {
            console.warn('⚠️ Failed to create Gas Giant effect');
          }
          break;

        case 'metallic':
        case 'metallic_3d':
          console.log('⚙️ Metallic planet detected - effects should be handled by modular effects_3d system');
          // Los effects_3d ya se procesaron arriba en lines 363-384
          // No agregamos efectos legacy aquí para evitar duplicación
          break;

        case 'rocky':
          const rockyEffect = this.createEffectFromPythonData(
            EffectType.ROCKY_TERRAIN,
            {
              ...pythonData,
              base_color: pythonData.planet_info?.base_color,
              surface: {
                ...pythonData.surface,
                base_color: pythonData.planet_info?.base_color
              }
            },
            planetRadius,
            mesh,
            0
          );
          if (rockyEffect) {
            effects.push(rockyEffect);
            rockyEffect.effect.apply(mesh);
          }
          break;

        case 'icy':
          const icyEffect = this.createEffectFromPythonData(
            EffectType.ICY_TERRAIN,
            {
              ...pythonData,
              base_color: pythonData.planet_info?.base_color,
              surface: {
                ...pythonData.surface,
                base_color: pythonData.planet_info?.base_color
              }
            },
            planetRadius,
            mesh,
            0
          );
          if (icyEffect) {
            effects.push(icyEffect);
            icyEffect.effect.apply(mesh);
          }
          break;

        case 'oceanic':
          console.log('🌊 Oceanic planet detected - using generic rendering');
          // El frontend NO debe tener lógica específica para tipos de planeta
          // Python debe enviar órdenes específicas de renderizado
          break;
          
        default:
          console.log('❓ Unknown surface type:', surface.type, '- applying base color');
          // Para tipos sin efectos específicos, aplicar al menos el color base
          if (mesh.material instanceof THREE.MeshStandardMaterial) {
            const baseColor = getPlanetBaseColor(pythonData);
            mesh.material.color.copy(baseColor);
            console.log('✅ Applied base color to planet without specific effects:', baseColor);
          }
          break;
      }
    } else {
      console.log('❌ No surface_elements found in Python data - applying base color');
      // Si no hay surface_elements, aplicar al menos el color base
      if (mesh.material instanceof THREE.MeshStandardMaterial) {
        const baseColor = getPlanetBaseColor(pythonData);
        mesh.material.color.copy(baseColor);
        console.log('✅ Applied base color to planet without surface_elements:', baseColor);
      }
    }

    // 2. Efectos atmosféricos
    if (pythonData.atmosphere) {
      console.log('🌫️ Applying atmospheric effects for:', pythonData.planet_info?.type);
      
      // Halo atmosférico - SOLO aplicar si hay datos específicos de halo
      if (pythonData.atmosphere.halo && pythonData.atmosphere.halo.enabled !== false) {
        const haloEffect = this.createEffectFromPythonData(
          EffectType.ATMOSPHERIC_HALO,
          pythonData,
          planetRadius,
          mesh,
          10
        );
        if (haloEffect) {
          effects.push(haloEffect);
          haloEffect.effect.addToScene(scene, mesh.position);
          console.log('✅ Added atmospheric halo effect');
        }
      }

      // Cloud Gyros - aplicar para planetas específicos
      if (pythonData.atmosphere.streaks || ['Gas Giant', 'Frozen Gas Giant'].includes(pythonData.planet_info?.type)) {
        const gyrosEffect = this.createEffectFromPythonData(
          EffectType.CLOUD_GYROS,
          pythonData,
          planetRadius,
          mesh,
          20
        );
        if (gyrosEffect) {
          effects.push(gyrosEffect);
          gyrosEffect.effect.addToScene(scene, mesh.position);
          console.log('✅ Added cloud gyros effect');
        }
      }

      // Atmosphere Brights (resplandor atmosférico)
      // Para planetas oceánicos, reducir la opacidad atmosférica para no ocultar el océano
      if (pythonData.atmosphere.type && pythonData.atmosphere.type !== 'None') {
        const planetType = pythonData.planet_info?.type?.toLowerCase() || pythonData.surface_elements?.type?.toLowerCase();
        
        // Ajustar parámetros atmosféricos según el tipo de planeta
        const atmosphereData = { ...pythonData.atmosphere };
        if (planetType === 'oceanic') {
          // Para planetas oceánicos, usar atmósfera muy sutil
          atmosphereData.opacity = Math.min(atmosphereData.opacity || 0.3, 0.15);
          atmosphereData.width = Math.min(atmosphereData.width || 15, 8);
          
        }
        
        const atmosphereEffect = this.createEffectFromPythonData(
          EffectType.ATMOSPHERE,
          atmosphereData,
          planetRadius,
          mesh,
          5
        );
        if (atmosphereEffect) {
          effects.push(atmosphereEffect);
          atmosphereEffect.effect.addToScene(scene, mesh.position);
          console.log('✅ Added atmosphere effect');
        }
      }
    }

    // 3. Sistema de anillos
    if (pythonData.rings && pythonData.rings.has_rings || 
        ['Gas Giant', 'Frozen Gas Giant', 'Super Earth'].includes(pythonData.planet_info?.type)) {
      console.log('💍 Applying ring system for:', pythonData.planet_info?.type, 'rings data:', pythonData.rings);
      
      const ringsEffect = this.createEffectFromPythonData(
        EffectType.RING_SYSTEM,
        pythonData,
        planetRadius,
        mesh,
        1
      );
      if (ringsEffect) {
        effects.push(ringsEffect);
        ringsEffect.effect.addToScene(scene, mesh.position);
        console.log('✅ Added ring system effect');
      } else {
        console.warn('⚠️ Failed to create ring effect');
      }
    } else {
      console.log('❌ No rings for:', pythonData.planet_info?.type, 'rings:', pythonData.rings);
    }

    // 4. Efectos de fragmentación
    if (pythonData.surface_elements?.has_fragmentation_zones) {
      const fragmentationEffect = this.createEffectFromPythonData(
        EffectType.FRAGMENTATION,
        pythonData,
        planetRadius,
        mesh,
        5
      );
      if (fragmentationEffect) {
        effects.push(fragmentationEffect);
        fragmentationEffect.effect.addToScene(scene, mesh.position);
      }
    }

    // 5. Efecto de debug visual (controlado por VISUAL_DEBUG flag)
    if (VISUAL_DEBUG) {
      
      const debugEffect = this.createEffectFromPythonData(
        EffectType.VISUAL_DEBUG_3D,
        pythonData,
        planetRadius,
        mesh,
        100 // Prioridad alta para render encima
      );
      
      if (debugEffect) {
        effects.push(debugEffect);
        debugEffect.effect.addToScene(scene, mesh.position);
        
      } else {
        console.error(' Failed to create debug effect!');
      }
    }

    // 🚀 RESUMEN FINAL
    console.log('📊 EffectRegistry Summary:');
    console.log(`   Total effects created: ${effects.length}`);
    effects.forEach((effect, index) => {
      console.log(`   ${index + 1}. ${effect.type} (${effect.enabled ? 'enabled' : 'disabled'})`);
    });
    
    if (effects.length === 0) {
      console.warn('⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions.');
    }

    return effects;
    } catch (error) {
      console.error('Error in EffectRegistry.createEffectsFromPythonPlanetData:', error);
      throw error; // Re-throw to trigger fallback in ModularPlanetRenderer
    }
  }

  /**
   * Obtiene un efecto por ID
   */
  getEffect(id: string): EffectInstance | null {
    return this.effects.get(id) || null;
  }

  /**
   * Obtiene todos los efectos de un tipo
   */
  getEffectsByType(type: string): EffectInstance[] {
    return Array.from(this.effects.values()).filter(effect => effect.type === type);
  }

  /**
   * Obtiene todos los efectos activos
   */
  getAllEffects(): EffectInstance[] {
    return Array.from(this.effects.values());
  }

  /**
   * Habilita/deshabilita un efecto
   */
  toggleEffect(id: string, enabled?: boolean): void {
    const effect = this.effects.get(id);
    if (effect) {
      effect.enabled = enabled !== undefined ? enabled : !effect.enabled;
    }
  }

  /**
   * Actualiza todos los efectos activos
   */
  updateAllEffects(deltaTime: number, planetRotation?: number): void {
    for (const instance of this.effects.values()) {
      if (instance.enabled && instance.effect.update) {
        try {
          instance.effect.update(deltaTime, planetRotation);
        } catch (error) {
          console.error(`Error updating effect ${instance.type}:`, error);
        }
      }
    }
  }

  /**
   * Elimina un efecto
   */
  removeEffect(id: string): void {
    const instance = this.effects.get(id);
    if (instance) {
      if (instance.effect.dispose) {
        instance.effect.dispose();
      }
      this.effects.delete(id);
    }
  }

  // TODO: Sistema rendering_commands ELIMINADO completamente
  // Usar efectos específicos de nivel raíz como rings/atmosphere

  /**
   * Limpia todos los efectos
   */
  clearAllEffects(): void {
    for (const instance of this.effects.values()) {
      if (instance.effect.dispose) {
        instance.effect.dispose();
      }
    }
    this.effects.clear();
  }

  /**
   * Obtiene estadísticas del registro
   */
  getStats(): { registeredTypes: number; activeEffects: number; enabledEffects: number } {
    const activeEffects = Array.from(this.effects.values());
    return {
      registeredTypes: this.creators.size,
      activeEffects: activeEffects.length,
      enabledEffects: activeEffects.filter(e => e.enabled).length
    };
  }

  /**
   * Lista todos los tipos de efectos disponibles
   */
  getAvailableEffectTypes(): string[] {
    return Array.from(this.creators.keys());
  }
}

// Exportar instancia singleton
export const effectRegistry = EffectRegistry.getInstance();