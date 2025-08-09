/**
 * Effect Registry - Registro dinámico de efectos 3D
 *
 * Sistema centralizado para gestionar todos los efectos disponibles
 * y aplicarlos dinámicamente basándose en datos de Python.
 */

import * as THREE from "three";

// Importar todos los efectos disponibles
import { RingSystemEffect, createRingSystemFromPythonData, RingSystemParams } from "./RingSystem";
import { AtmosphereEffect, createAtmosphereFromPythonData, AtmosphereParams } from "./Atmosphere";

import { AtmosphereGlowEffect, createAtmosphereGlowFromPythonData, AtmosphereGlowParams } from "./AtmosphereGlow";
import { AtmosphereCloudsEffect, createAtmosphereCloudsFromPythonData, AtmosphereCloudsParams } from "./AtmosphereClouds";

// Sistema de capas mejorado
import { PlanetLayerSystem } from "../3DComponents/PlanetLayerSystem";
import { CloudBandsLayer, createCloudBandsLayerFromPythonData } from "./CloudBandsLayer";
import { CloudGyrosLayer, createCloudGyrosLayerFromPythonData } from "./CloudGyrosLayer";
import { RockyTerrainLayer, createRockyTerrainLayerFromPythonData } from "./RockyTerrainLayer";
import { IcyTerrainLayer, createIcyTerrainLayerFromPythonData } from "./IcyTerrainLayer";
import { MetallicSurfaceLayer, createMetallicSurfaceLayerFromPythonData } from "./MetallicSurfaceLayer";

// Efectos legacy eliminados - usar solo versiones Layer

import { AtmosphericStreaksEffect, createAtmosphericStreaksFromPythonData, AtmosphericStreaksParams } from "./AtmosphericStreaks";

// Importar efectos de superficie restantes
import { FragmentationEffect } from "./FragmentationEffect";
import { OceanWavesEffect, createOceanWavesFromPythonData } from "./OceanWaves";
// Efectos de superficie legacy eliminados - usar solo versiones Layer

// Importar efectos de debug
import { VisualDebug3DEffect, createVisualDebug3DFromPythonData } from "./VisualDebug3D";
import { ENABLE_EFFECTS_LOGGING } from "../Utils/DebugConfig";

// Importar función centralizada de colores
import { getPlanetBaseColor } from "./PlanetColorBase";

// VISUAL DEBUG FLAG - Controla si se muestra debug visual 3D
const VISUAL_DEBUG = false; // Cambiar a false para desactivar

export interface EffectInstance {
  id: string;
  type: string;
  effect: any;
  priority: number;
  enabled: boolean;
  name?: string; // Añadido: nombre descriptivo del efecto
}

export interface EffectCreationData {
  type: string;
  params: any;
  priority?: number;
  enabled?: boolean;
}

// Tipos de efectos disponibles
export enum EffectType {
  // Efectos de superficie - METALLIC_SURFACE eliminado, usar MetallicSurfaceLayer
  CLOUD_BANDS = "cloud_bands",
  CLOUD_GYROS = "cloud_gyros",

  // Efectos atmosféricos
  ATMOSPHERE = "atmosphere",
  ATMOSPHERE_GLOW = "atmosphere_glow",
  ATMOSPHERE_CLOUDS = "atmosphere_clouds",
  ATMOSPHERIC_STREAKS = "atmospheric_streaks",

  // Efectos estructurales
  RING_SYSTEM = "ring_system",
  FRAGMENTATION = "fragmentation",

  // Efectos de superficie específicos
  ROCKY_TERRAIN = "rocky_terrain",
  ICY_TERRAIN = "icy_terrain",
  OCEAN_WAVES = "ocean_waves",
  LAVA_FLOWS = "lava_flows",
  CRYSTAL_FORMATIONS = "crystal_formations",
  CLOUD_LAYERS = "cloud_layers",
  STORM_SYSTEMS = "storm_systems",
  VOLCANIC_ACTIVITY = "volcanic_activity",
  AURORA = "aurora",
  MAGNETIC_FIELD = "magnetic_field",

  // Efectos de iluminación
  CITY_LIGHTS = "city_lights",
  BIOLUMINESCENCE = "bioluminescence",
  THERMAL_EMISSIONS = "thermal_emissions",

  // Efectos de debug
  VISUAL_DEBUG_3D = "visual_debug_3d",
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
  private layerSystem?: PlanetLayerSystem;

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
    // Efectos de superficie legacy eliminados - usar solo sistema de capas

    // CloudBands y CloudGyros ahora se manejan exclusivamente por el sistema de capas
    // Ya no necesitan registro directo - se crean en el switch case de gas_giant

    // Efectos atmosféricos

    this.registerEffect(EffectType.ATMOSPHERE_GLOW, {
      create: (params, planetRadius) => new AtmosphereGlowEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createAtmosphereGlowFromPythonData(planetRadius, data.atmosphere || {}),
    });

    this.registerEffect(EffectType.ATMOSPHERE_CLOUDS, {
      create: (params, planetRadius) => new AtmosphereCloudsEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createAtmosphereCloudsFromPythonData(planetRadius, data.surface_elements || {}),
    });

    this.registerEffect(EffectType.ATMOSPHERIC_STREAKS, {
      create: (params, planetRadius) => new AtmosphericStreaksEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createAtmosphericStreaksFromPythonData(planetRadius, data.atmosphere || {}),
    });

    this.registerEffect(EffectType.ATMOSPHERE, {
      create: (params, planetRadius) => new AtmosphereEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createAtmosphereFromPythonData(planetRadius, data),
    });

    // Efectos estructurales
    this.registerEffect(EffectType.RING_SYSTEM, {
      create: (params, planetRadius) => new RingSystemEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createRingSystemFromPythonData(data.rings || {}, planetRadius),
    });

    this.registerEffect(EffectType.FRAGMENTATION, {
      create: (params, planetRadius) => new FragmentationEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => {
        return new FragmentationEffect(planetRadius, {
          color: data.surface?.fragment_color || [0.3, 0.3, 0.3],
          fragmentCount: data.surface?.fragment_count || 20,
        });
      },
    });

    // Efectos de terreno legacy eliminados - usar solo sistema de capas

    // Efectos de superficie
    this.registerEffect(EffectType.OCEAN_WAVES, {
      create: (params, planetRadius) => new OceanWavesEffect(params),
      fromPythonData: (data, planetRadius) => createOceanWavesFromPythonData(data),
    });

    // ELIMINADO: MetallicSurfaceEffect legacy - ahora se maneja por MetallicSurfaceLayer

    // Efectos futuros (placeholders)
    this.registerEffect(EffectType.LAVA_FLOWS, {
      create: (params, planetRadius) => {
        console.warn("Lava flows effect not implemented yet");
        return null;
      },
    });

    this.registerEffect(EffectType.CRYSTAL_FORMATIONS, {
      create: (params, planetRadius) => {
        console.warn("Crystal formations effect not implemented yet");
        return null;
      },
    });

    // Efectos de debug
    this.registerEffect(EffectType.VISUAL_DEBUG_3D, {
      create: (params, planetRadius) => new VisualDebug3DEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createVisualDebug3DFromPythonData(data, planetRadius),
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
  createEffect(type: string, params: any, planetRadius: number, mesh?: THREE.Mesh, priority: number = 0): EffectInstance | null {
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
        enabled: true,
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
  createEffectFromPythonData(type: string, pythonData: any, planetRadius: number, mesh?: THREE.Mesh, priority: number = 0): EffectInstance | null {
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
        enabled: true,
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
  createEffectsFromList(effectsData: EffectCreationData[], planetRadius: number, mesh?: THREE.Mesh): EffectInstance[] {
    const instances: EffectInstance[] = [];

    // Ordenar por prioridad
    const sortedData = effectsData.sort((a, b) => (a.priority || 0) - (b.priority || 0));

    for (const data of sortedData) {
      const instance = this.createEffect(data.type, data.params, planetRadius, mesh, data.priority);

      if (instance) {
        instance.enabled = data.enabled !== false;
        instances.push(instance);
      }
    }

    return instances;
  }

  /**
   * Interpreta datos completos de Python y crea todos los efectos necesarios
   * ACTUALIZADO: Usa PlanetLayerSystem existente
   */
  createEffectsFromPythonPlanetData(pythonData: any, planetRadius: number, mesh: THREE.Mesh, scene: THREE.Scene, existingLayerSystem?: PlanetLayerSystem): EffectInstance[] {
    const effects: EffectInstance[] = [];

    try {
      // 🚀 DEBUG: Log the complete data structure

      // ⭐ Obtener color base para usar en efectos
      const baseColor = getPlanetBaseColor(pythonData);

      // ⭐ USAR PlanetLayerSystem existente o crear uno nuevo
      if (existingLayerSystem) {
        this.layerSystem = existingLayerSystem;
      } else {
        this.layerSystem = new PlanetLayerSystem(mesh, baseColor);
      }

      // 1. Efectos de superficie basados en el tipo
      if (pythonData.surface_elements) {
        const surface = pythonData.surface_elements;

        // Sistema modular de efectos 3D
        if (surface.effects_3d && Array.isArray(surface.effects_3d)) {
          for (const effectData of surface.effects_3d) {
            // Manejar atmospheric_streaks especialmente para pasar la seed (como AtmosphereGlow)
            if (effectData.type === "atmospheric_streaks") {
              const streaksEffect = createAtmosphericStreaksFromPythonData(
                planetRadius,
                effectData.params,
                pythonData.seeds?.shape_seed + 3000 // Seed específica para atmospheric streaks
              );

              const streaksInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "atmospheric_streaks",
                effect: streaksEffect,
                priority: effectData.priority || 0,
                enabled: true,
                name: "Atmospheric Streaks",
              };

              // CRÍTICO: Añadir al mapa de efectos para que se pueda hacer toggle
              this.effects.set(streaksInstance.id, streaksInstance);
              effects.push(streaksInstance);
              streaksEffect.addToScene(scene, mesh.position);
              continue; // Skip the normal createEffect flow
            }

            const instance = this.createEffect(effectData.type, effectData.params, planetRadius, mesh, effectData.priority || 0);

            if (instance) {
              // Añadir nombre descriptivo al efecto
              instance.name = effectData.type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

              effects.push(instance);

              // 🚀 APLICAR EFECTO como antes, pero respetando la iluminación base
              if (instance.effect.apply) {
                instance.effect.apply(mesh);
              }

              // Añadir a la escena si es necesario
              if (instance.effect.addToScene) {
                instance.effect.addToScene(scene, mesh.position);
              }
            } else {
              console.error("❌ FALLO AL CREAR EFECTO:", effectData.type);
            }
          }
        } else {
        }

        // Sistema de rendering_commands ELIMINADO - usar efectos específicos

        // Efectos específicos por tipo de planeta (LEGACY - se eliminará)

        switch (surface.type) {
          case "gas_giant":
            // El sistema de capas ya fue creado arriba, solo añadir las capas específicas
            if (this.layerSystem) {
              // Añadir capa de bandas

              const cloudBandsLayer = createCloudBandsLayerFromPythonData(
                this.layerSystem,
                {
                  ...surface,
                  base_color: baseColor,
                  turbulence: pythonData.turbulence || surface.turbulence,
                },
                pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed || pythonData.seeds?.planet_seed // Usar seed del planeta
              );

              // Añadir capa de espirales

              const cloudGyrosLayer = createCloudGyrosLayerFromPythonData(
                this.layerSystem,
                {
                  ...surface,
                  base_color: baseColor,
                  storm_intensity: pythonData.storm_intensity || surface.storm_intensity,
                },
                (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 1000 // Usar seed del planeta con offset
              );

              // Crear efectos para tracking y añadir al mapa de efectos
              const bandsInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "cloud_bands_layer",
                effect: cloudBandsLayer,
                priority: 0,
                enabled: true,
              };
              this.effects.set(bandsInstance.id, bandsInstance);
              effects.push(bandsInstance);

              const gyrosInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "cloud_gyros_layer",
                effect: cloudGyrosLayer,
                priority: 1,
                enabled: true,
              };
              this.effects.set(gyrosInstance.id, gyrosInstance);
              effects.push(gyrosInstance);
            } else {
              console.error("❌ PlanetLayerSystem not initialized!");
            }
            break;

          case "metallic":
          case "metallic_3d":
            if (this.layerSystem) {
              const metallicLayer = createMetallicSurfaceLayerFromPythonData(this.layerSystem, pythonData, pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed);

              const metallicInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "metallic_surface_layer",
                effect: metallicLayer,
                priority: 0,
                enabled: true,
              };
              this.effects.set(metallicInstance.id, metallicInstance);
              effects.push(metallicInstance);
            }
            break;

          case "rocky":
            if (this.layerSystem) {
              const rockyLayer = createRockyTerrainLayerFromPythonData(this.layerSystem, pythonData, pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed);

              const rockyInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "rocky_terrain_layer",
                effect: rockyLayer,
                priority: 0,
                enabled: true,
              };
              this.effects.set(rockyInstance.id, rockyInstance);
              effects.push(rockyInstance);

              // Añadir nubes atmosféricas si están disponibles
              if (surface.clouds && surface.clouds.length > 0) {
                const cloudsEffect = createAtmosphereCloudsFromPythonData(
                  planetRadius,
                  surface,
                  (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 4000 // Seed específica para nubes
                );

                const cloudsInstance: EffectInstance = {
                  id: `effect_${this.nextId++}`,
                  type: "atmosphere_clouds",
                  effect: cloudsEffect,
                  priority: 15,
                  enabled: true,
                  name: "Atmospheric Clouds"
                };

                this.effects.set(cloudsInstance.id, cloudsInstance);
                effects.push(cloudsInstance);
                cloudsEffect.addToScene(scene, mesh.position);
              }
            }
            break;

          case "icy":
            if (this.layerSystem) {
              const icyLayer = createIcyTerrainLayerFromPythonData(this.layerSystem, pythonData, pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed);

              const icyInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "icy_terrain_layer",
                effect: icyLayer,
                priority: 0,
                enabled: true,
              };
              this.effects.set(icyInstance.id, icyInstance);
              effects.push(icyInstance);
            }
            break;

          case "oceanic":
            // Añadir nubes atmosféricas si están disponibles para planetas oceánicos
            if (surface.clouds && surface.clouds.length > 0) {
              const cloudsEffect = createAtmosphereCloudsFromPythonData(
                planetRadius,
                surface,
                (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 4000 // Seed específica para nubes
              );

              const cloudsInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "atmosphere_clouds",
                effect: cloudsEffect,
                priority: 15,
                enabled: true,
                name: "Atmospheric Clouds"
              };

              this.effects.set(cloudsInstance.id, cloudsInstance);
              effects.push(cloudsInstance);
              cloudsEffect.addToScene(scene, mesh.position);
            }
            break;

          default:
            // Para tipos sin efectos específicos, aplicar al menos el color base
            if (mesh.material instanceof THREE.MeshStandardMaterial) {
              const baseColor = getPlanetBaseColor(pythonData);
              mesh.material.color.copy(baseColor);
            }
            break;
        }
      } else {
        // Si no hay surface_elements, aplicar al menos el color base
        if (mesh.material instanceof THREE.MeshStandardMaterial) {
          const baseColor = getPlanetBaseColor(pythonData);
          mesh.material.color.copy(baseColor);
        }
      }

      // 2. Efectos atmosféricos
      if (pythonData.atmosphere) {
        // Atmosphere Glow - aplicar para planetas con atmósfera dinámica
        if (pythonData.atmosphere.streaks || ["Gas Giant", "Frozen Gas Giant"].includes(pythonData.planet_info?.type)) {
          // Pasar seed directamente al crear atmosphere glow
          const glowEffect = createAtmosphereGlowFromPythonData(
            planetRadius,
            pythonData.atmosphere || {},
            pythonData.seeds?.shape_seed + 2000 // Seed específica para partículas
          );

          if (glowEffect) {
            const glowInstance: EffectInstance = {
              id: `effect_${this.nextId++}`,
              type: "atmosphere_glow",
              effect: glowEffect,
              priority: 20,
              enabled: true,
            };

            // CRÍTICO: Añadir al mapa de efectos para que se actualice
            this.effects.set(glowInstance.id, glowInstance);
            effects.push(glowInstance);

            glowEffect.addToScene(scene, mesh.position);
          }
        }

        // Atmosphere Brights (resplandor atmosférico)
        // Para planetas oceánicos, reducir la opacidad atmosférica para no ocultar el océano
        if (pythonData.atmosphere.type && pythonData.atmosphere.type !== "None") {
          const planetType = pythonData.planet_info?.type?.toLowerCase() || pythonData.surface_elements?.type?.toLowerCase();

          // Ajustar parámetros atmosféricos según el tipo de planeta
          const atmosphereData = { ...pythonData.atmosphere };
          if (planetType === "oceanic") {
            // Para planetas oceánicos, usar atmósfera muy sutil
            atmosphereData.opacity = Math.min(atmosphereData.opacity || 0.3, 0.15);
            atmosphereData.width = Math.min(atmosphereData.width || 15, 8);
          }

          const atmosphereEffect = this.createEffectFromPythonData(EffectType.ATMOSPHERE, atmosphereData, planetRadius, mesh, 5);
          if (atmosphereEffect) {
            effects.push(atmosphereEffect);
            atmosphereEffect.effect.addToScene(scene, mesh.position);
          }
        }
      }

      // 3. Sistema de anillos
      if ((pythonData.rings && pythonData.rings.has_rings) || ["Gas Giant", "Frozen Gas Giant", "Super Earth"].includes(pythonData.planet_info?.type)) {
        const ringsEffect = this.createEffectFromPythonData(EffectType.RING_SYSTEM, pythonData, planetRadius, mesh, 1);
        if (ringsEffect) {
          effects.push(ringsEffect);
          ringsEffect.effect.addToScene(scene, mesh.position);
        } else {
          console.warn("⚠️ Failed to create ring effect");
        }
      } else {
      }

      // 4. Efectos de fragmentación
      if (pythonData.surface_elements?.has_fragmentation_zones) {
        const fragmentationEffect = this.createEffectFromPythonData(EffectType.FRAGMENTATION, pythonData, planetRadius, mesh, 5);
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
          console.error(" Failed to create debug effect!");
        }
      }

      // ⭐ AÑADIR EL SISTEMA DE CAPAS A LA ESCENA DESPUÉS DE CREAR TODAS LAS CAPAS
      if (this.layerSystem) {
        this.layerSystem.addToScene(scene);
      }

      // 🚀 RESUMEN FINAL

      effects.forEach((effect, index) => {});

      if (effects.length === 0) {
        console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions.");
      }

      return effects;
    } catch (error) {
      console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:", error);
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
    return Array.from(this.effects.values()).filter((effect) => effect.type === type);
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
    const effectInstance = this.effects.get(id);
    if (effectInstance) {
      effectInstance.enabled = enabled !== undefined ? enabled : !effectInstance.enabled;

      // Actualizar visibilidad del objeto 3D
      const effect = effectInstance.effect;

      // Para efectos con getObject3D (como RingSystem, AtmosphericStreaks, etc.)
      if (effect && effect.getObject3D) {
        const object3D = effect.getObject3D();
        if (object3D) {
          object3D.visible = effectInstance.enabled;
        }
      }

      // Para efectos de capa manejados por PlanetLayerSystem
      if (this.layerSystem) {
        // Buscar la capa correspondiente y actualizar su visibilidad
        const layerMeshes = this.layerSystem.getLayerMeshes();

        // Mapear tipos de efectos a nombres de capa
        const layerNameMap: Record<string, string> = {
          cloud_bands_layer: "cloudBands",
          cloud_gyros_layer: "cloudGyros",
          metallic_surface_layer: "metallicSurface",
          rocky_terrain_layer: "rockyTerrain",
          icy_terrain_layer: "icyTerrain",
        };

        const layerName = layerNameMap[effectInstance.type];

        if (layerName && layerMeshes[layerName]) {
          layerMeshes[layerName].visible = effectInstance.enabled;
        }
      }
    } else {
      console.warn(`⚠️ Effect not found: ${id}`);
    }
  }

  /**
   * Actualiza todos los efectos activos
   */
  updateAllEffects(deltaTime: number, planetRotation?: number): void {
    // Actualizar sistema de capas si existe
    if (this.layerSystem) {
      this.layerSystem.update(deltaTime, planetRotation);
    }

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
    // Limpiar sistema de capas si existe
    if (this.layerSystem) {
      this.layerSystem.dispose();
      this.layerSystem = undefined;
    }

    for (const instance of this.effects.values()) {
      if (instance.effect.dispose) {
        instance.effect.dispose();
      }
    }
    this.effects.clear();

    // CRÍTICO: Resetear el contador de IDs para que empiecen desde 1 nuevamente
    this.nextId = 1;
  }

  /**
   * Obtiene estadísticas del registro
   */
  getStats(): { registeredTypes: number; activeEffects: number; enabledEffects: number } {
    const activeEffects = Array.from(this.effects.values());
    return {
      registeredTypes: this.creators.size,
      activeEffects: activeEffects.length,
      enabledEffects: activeEffects.filter((e) => e.enabled).length,
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
