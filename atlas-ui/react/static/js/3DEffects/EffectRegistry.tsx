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
import { LandMassesEffect, createLandMassesFromPythonData, createTransparentLandMassesForIcyPlanet, LandMassesParams } from "./LandMasses";
import { IcyFeaturesEffect, createIcyFeaturesFromPythonData } from "./IcyFeatures";
import { TundraSnowflakesEffect, createTundraSnowflakesFromPythonData } from "./TundraSnowflakes";
import { RiverLinesEffect, createRiverLinesFromPythonData } from "./RiverLines";

// Efectos anómalos
// AnomalyGlitchFieldEffect, AnomalyGeometricMorphEffect, AnomalyGravityWellEffect y AnomalyVoidSphereEffect movidos a Unused3DEffects
import { AnomalyPhaseMatterEffect, createAnomalyPhaseMatterFromPythonData } from "./AnomalyPhaseMatter";
import { PulsatingCubeEffect, createPulsatingCubeFromPythonData } from "./PulsatingCube";
import { PlanetRaysEffect, createPlanetRaysFromPythonData } from "./PlanetRays";

// Sistema de capas mejorado
import { PlanetLayerSystem } from "../3DComponents/PlanetLayerSystem";
import { CloudBandsLayer, createCloudBandsLayerFromPythonData } from "./CloudBandsLayer";
import { CloudGyrosLayer, createCloudGyrosLayerFromPythonData } from "./CloudGyrosLayer";
import { RockyTerrainLayer, createRockyTerrainLayerFromPythonData } from "./RockyTerrainLayer";
import { IcyTerrainLayer, createIcyTerrainLayerFromPythonData } from "./IcyTerrainLayer";
import { MetallicSurfaceLayer, createMetallicSurfaceLayerFromPythonData } from "./MetallicSurfaceLayer";
import { DiamondSurfaceLayer, createDiamondSurfaceLayerFromPythonData } from "./DiamondSurfaceLayer";
import { DiamondCracksEffect, createDiamondCracksFromPythonData } from "./DiamondCracksEffect";
import { ExoticGeometricShapesEffect, createExoticGeometricShapesFromPythonData } from "./ExoticGeometricShapes";
import { ExoticDoodlesEffect, createExoticDoodlesFromPythonData } from "./ExoticDoodles";

// Efectos legacy eliminados - usar solo versiones Layer

import { AtmosphericStreaksEffect, createAtmosphericStreaksFromPythonData, AtmosphericStreaksParams } from "./AtmosphericStreaks";
import { StarFieldEffect, createStarFieldFromPythonData, StarFieldParams } from "./StarField";
import { PolarHexagonEffect, createPolarHexagonFromPythonData } from "./PolarHexagon";

// Importar efectos de superficie restantes
import { FragmentationEffect } from "./FragmentationEffect";
import { OceanWavesEffect, createOceanWavesFromPythonData } from "./OceanWaves";
import { FluidLayersEffect, createFluidLayersFromPythonData } from "./FluidLayers";
import { AquiferWaterEffect, createAquiferWaterFromPythonData } from "./AquiferWaterEffect";
import { OceanCurrentsEffect, createOceanCurrentsFromPythonData } from "./OceanCurrentsEffect";
import { LavaFlowsEffect, createLavaFlowsFromPythonData } from "./LavaFlowsEffect";
import { MoltenLavaEffect, createMoltenLavaFromPythonData } from "./MoltenLavaEffect";
import { FireEruptionEffect, createFireEruptionFromPythonData } from "./FireEruptionEffect";
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
  STAR_FIELD = "star_field",

  // Efectos estructurales
  RING_SYSTEM = "ring_system",
  FRAGMENTATION = "fragmentation",

  // Efectos de superficie específicos
  ROCKY_TERRAIN = "rocky_terrain",
  ICY_TERRAIN = "icy_terrain",
  LAND_MASSES = "land_masses",
  OCEAN_WAVES = "ocean_waves",
  FLUID_LAYERS = "fluid_layers",
  AQUIFER_WATER = "aquifer_water",
  OCEAN_CURRENTS = "ocean_currents",
  LAVA_FLOWS = "lava_flows",
  MOLTEN_LAVA = "molten_lava",
  FIRE_ERUPTION = "fire_eruption",
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

  // Efectos de clima
  TUNDRA_SNOWFLAKES = "tundra_snowflakes",

  // Efectos geológicos
  RIVER_LINES = "river_lines",

  // Efectos anómalos (algunos desactivados)
  // ANOMALY_GLITCH_FIELD = "anomaly_glitch_field", // Movido a Unused3DEffects
  // ANOMALY_VOID_SPHERE = "anomaly_void_sphere", // Movido a Unused3DEffects
  ANOMALY_PHASE_MATTER = "anomaly_phase_matter",
  PULSATING_CUBE = "pulsating_cube",
  PLANET_RAYS = "planet_rays",
  // ANOMALY_GEOMETRIC_MORPH = "anomaly_geometric_morph", // Movido a Unused3DEffects
  // ANOMALY_GRAVITY_WELL = "anomaly_gravity_well", // Movido a Unused3DEffects

  // Efectos de debug
  VISUAL_DEBUG_3D = "visual_debug_3d",
  
  // Efectos para planetas Exotic
  EXOTIC_GEOMETRIC_SHAPES = "exotic_geometric_shapes",
  EXOTIC_DOODLES = "exotic_doodles",
}

// Interfaz para creadores de efectos
export interface EffectCreator {
  create(params: any, planetRadius: number, layerSystem?: PlanetLayerSystem, mesh?: THREE.Mesh): any;
  fromPythonData?(pythonData: any, planetRadius: number, layerSystem?: PlanetLayerSystem, mesh?: THREE.Mesh): any;
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
    this.registerEffect(EffectType.LAND_MASSES, {
      create: (params, planetRadius) => new LandMassesEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createLandMassesFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed),
    });

    this.registerEffect(EffectType.OCEAN_WAVES, {
      create: (params, planetRadius) => new OceanWavesEffect(params),
      fromPythonData: (data, planetRadius) => createOceanWavesFromPythonData(data),
    });

    this.registerEffect(EffectType.AQUIFER_WATER, {
      create: (params, planetRadius, layerSystem) => new AquiferWaterEffect(layerSystem!, params),
      fromPythonData: (data, planetRadius, layerSystem) => createAquiferWaterFromPythonData(layerSystem!, data),
    });

    this.registerEffect(EffectType.FLUID_LAYERS, {
      create: (params, planetRadius) => new FluidLayersEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createFluidLayersFromPythonData(planetRadius, data),
    });

    // ELIMINADO: MetallicSurfaceEffect legacy - ahora se maneja por MetallicSurfaceLayer

    // Efectos de lava para planetas Molten Core
    this.registerEffect(EffectType.LAVA_FLOWS, {
      create: (params, planetRadius) => new LavaFlowsEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createLavaFlowsFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed),
    });

    this.registerEffect(EffectType.MOLTEN_LAVA, {
      create: (params, planetRadius, layerSystem) => new MoltenLavaEffect(layerSystem!, params),
      fromPythonData: (data, planetRadius, layerSystem) => createMoltenLavaFromPythonData(layerSystem!, data, data.seeds?.planet_seed),
    });

    this.registerEffect(EffectType.FIRE_ERUPTION, {
      create: (params, planetRadius) => new FireEruptionEffect(planetRadius, params),
      fromPythonData: (data, planetRadius, layerSystem) => createFireEruptionFromPythonData(data, planetRadius, layerSystem),
    });

    // Efectos futuros (placeholders)

    this.registerEffect(EffectType.CRYSTAL_FORMATIONS, {
      create: (params, planetRadius) => {
        console.warn("Crystal formations effect not implemented yet");
        return null;
      },
    });

    // Efectos de fondo
    this.registerEffect(EffectType.STAR_FIELD, {
      create: (params, planetRadius) => new StarFieldEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createStarFieldFromPythonData(planetRadius, data.seeds?.planet_seed || data.planet_seed),
    });

    // Efectos de clima
    this.registerEffect(EffectType.TUNDRA_SNOWFLAKES, {
      create: (params, planetRadius) => new TundraSnowflakesEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createTundraSnowflakesFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed),
    });

    this.registerEffect(EffectType.RIVER_LINES, {
      create: (params, planetRadius) => new RiverLinesEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createRiverLinesFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed),
    });

    // Efectos de superficie específicos

    // Efectos anómalos
    // AnomalyGlitchField desactivado - movido a Unused3DEffects
    // this.registerEffect(EffectType.ANOMALY_GLITCH_FIELD, {
    //   create: (params, planetRadius) => new AnomalyGlitchFieldEffect(planetRadius, params),
    //   fromPythonData: (data, planetRadius) => createAnomalyGlitchFieldFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed),
    // });

    // AnomalyVoidSphere desactivado - movido a Unused3DEffects
    // this.registerEffect(EffectType.ANOMALY_VOID_SPHERE, {
    //   create: (params, planetRadius) => new AnomalyVoidSphereEffect(planetRadius, params),
    //   fromPythonData: (data, planetRadius) => createAnomalyVoidSphereFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed),
    // });

    this.registerEffect(EffectType.ANOMALY_PHASE_MATTER, {
      create: (params, planetRadius) => new AnomalyPhaseMatterEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createAnomalyPhaseMatterFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed),
    });

    this.registerEffect(EffectType.PULSATING_CUBE, {
      create: (params, planetRadius) => new PulsatingCubeEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => {
        // Obtener el color del planeta
        const baseColor = getPlanetBaseColor(data);
        // CRÍTICO: Pasar pythonData completo como 5to parámetro
        return createPulsatingCubeFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed, baseColor, data);
      },
    });

    this.registerEffect(EffectType.PLANET_RAYS, {
      create: (params, planetRadius) => new PlanetRaysEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createPlanetRaysFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed),
    });

    // AnomalyGeometricMorph desactivado - movido a Unused3DEffects
    // this.registerEffect(EffectType.ANOMALY_GEOMETRIC_MORPH, {
    //   create: (params, planetRadius) => new AnomalyGeometricMorphEffect(planetRadius, params),
    //   fromPythonData: (data, planetRadius) => createAnomalyGeometricMorphFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed),
    // });

    // AnomalyGravityWell desactivado - movido a Unused3DEffects
    // this.registerEffect(EffectType.ANOMALY_GRAVITY_WELL, {
    //   create: (params, planetRadius) => new AnomalyGravityWellEffect(planetRadius, params),
    //   fromPythonData: (data, planetRadius) => createAnomalyGravityWellFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed),
    // });

    // Efectos de debug
    this.registerEffect(EffectType.VISUAL_DEBUG_3D, {
      create: (params, planetRadius) => new VisualDebug3DEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createVisualDebug3DFromPythonData(data, planetRadius),
    });

    // Efectos de diamante
    this.registerEffect("diamond_cracks", {
      create: (params, planetRadius) => new DiamondCracksEffect({ ...params, radius: planetRadius }),
      fromPythonData: (data, planetRadius) => createDiamondCracksFromPythonData(data, planetRadius, data.seeds?.shape_seed || data.seeds?.planet_seed),
    });

    // Efectos para planetas Exotic
    this.registerEffect(EffectType.EXOTIC_GEOMETRIC_SHAPES, {
      create: (params, planetRadius) => new ExoticGeometricShapesEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => {
        const baseColor = getPlanetBaseColor(data);
        return createExoticGeometricShapesFromPythonData(
          planetRadius, 
          data.surface_elements || {}, 
          data.seeds?.planet_seed,
          baseColor
        );
      },
    });

    this.registerEffect(EffectType.EXOTIC_DOODLES, {
      create: (params, planetRadius) => new ExoticDoodlesEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => createExoticDoodlesFromPythonData(planetRadius, data.surface_elements || {}, data.seeds?.planet_seed),
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
      const effect = creator.create(params, planetRadius, this.layerSystem);
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
      const effect = creator.fromPythonData(pythonData, planetRadius, this.layerSystem);
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

        switch (surface.type.toLowerCase()) {
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

              // Add polar hexagon effect if present
              if (surface.polar_hexagon && surface.polar_hexagon.enabled) {
                // Calculate current time in years from cosmic origin
                const currentTimeYears = pythonData.timing?.elapsed_time ? pythonData.timing.elapsed_time / (365.25 * 24 * 3600) : 0;

                const hexagonEffect = new PolarHexagonEffect({
                  planetColor: baseColor,
                  hexagonData: surface.polar_hexagon,
                  planetRadius: planetRadius,
                  currentTime: currentTimeYears,
                });

                const hexagonInstance: EffectInstance = {
                  id: `effect_${this.nextId++}`,
                  type: "polar_hexagon",
                  effect: hexagonEffect,
                  priority: 10, // High priority to render on top
                  enabled: true,
                };
                this.effects.set(hexagonInstance.id, hexagonInstance);
                effects.push(hexagonInstance);

                // Add to scene
                if (scene) {
                  hexagonEffect.addToScene(scene);
                }
              }
            } else {
              console.error("❌ PlanetLayerSystem not initialized!");
            }
            break;

          case "frozen_gas_giant":
            // Similar to gas_giant but with icy appearance
            if (this.layerSystem) {
              // Add cloud bands with icy tint
              const frozenBandsLayer = createCloudBandsLayerFromPythonData(
                this.layerSystem,
                {
                  ...surface,
                  base_color: baseColor,
                  turbulence: pythonData.turbulence || surface.turbulence,
                  icy_tint: true, // Flag for blue-white tinting
                },
                pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed
              );

              const frozenBandsInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "cloud_bands_layer",
                effect: frozenBandsLayer,
                priority: 0,
                enabled: true,
              };
              this.effects.set(frozenBandsInstance.id, frozenBandsInstance);
              effects.push(frozenBandsInstance);

              // Add polar hexagon if present
              if (surface.polar_hexagon && surface.polar_hexagon.enabled) {
                const currentTimeYears = pythonData.timing?.elapsed_time ? pythonData.timing.elapsed_time / (365.25 * 24 * 3600) : 0;

                const hexagonEffect = new PolarHexagonEffect({
                  planetColor: baseColor,
                  hexagonData: surface.polar_hexagon,
                  planetRadius: planetRadius,
                  currentTime: currentTimeYears,
                });

                const hexagonInstance: EffectInstance = {
                  id: `effect_${this.nextId++}`,
                  type: "polar_hexagon",
                  effect: hexagonEffect,
                  priority: 10,
                  enabled: true,
                };
                this.effects.set(hexagonInstance.id, hexagonInstance);
                effects.push(hexagonInstance);

                // Add to scene
                if (scene) {
                  hexagonEffect.addToScene(scene);
                }
              }
            }
            break;

          case "aquifer":
            // Planetas Aquifer - superficie acuática con efectos de olas realistas
            console.log("🌊 Processing Aquifer planet with surface data:", surface);
            console.log("🌊 Surface.clouds:", surface.clouds);
            const aquiferWaterEffect = createAquiferWaterFromPythonData(this.layerSystem!, pythonData);

            if (aquiferWaterEffect) {
              const aquiferWaterInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "aquifer_water",
                effect: aquiferWaterEffect,
                priority: 2,
                enabled: true,
                name: "Aquifer Water Surface",
              };

              this.effects.set(aquiferWaterInstance.id, aquiferWaterInstance);
              effects.push(aquiferWaterInstance);

              // Como MetallicSurfaceLayer, ya no necesita apply() ni addToScene()
              // porque se integra automáticamente con PlanetLayerSystem
              console.log("🌊 AquiferWater effect added for aquifer planet");
            }

            // Añadir corrientes oceánicas para todos los planetas acuáticos
            const oceanCurrentsEffect = createOceanCurrentsFromPythonData(this.layerSystem!, pythonData);

            if (oceanCurrentsEffect) {
              const oceanCurrentsInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "ocean_currents",
                effect: oceanCurrentsEffect,
                priority: 1, // Prioridad más alta para que aparezca debajo del agua
                enabled: true,
                name: "Ocean Currents",
              };

              this.effects.set(oceanCurrentsInstance.id, oceanCurrentsInstance);
              effects.push(oceanCurrentsInstance);

              console.log("🌊 Ocean Currents effect added for aquifer planet");
            }

            // Añadir nubes atmosféricas si están disponibles para planetas acuáticos
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
                name: "Atmospheric Clouds",
              };
              this.effects.set(cloudsInstance.id, cloudsInstance);
              effects.push(cloudsInstance);
              cloudsEffect.addToScene(scene, mesh.position);
              console.log("☁️ Atmospheric Clouds added to Aquifer planet");
            }

            // Añadir masas de tierra emergentes si están disponibles
            if (surface.land_masses && surface.land_masses.length > 0) {
              const landMassesEffect = createLandMassesFromPythonData(planetRadius, surface, (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 7000);
              if (landMassesEffect) {
                const landMassesInstance: EffectInstance = {
                  id: `effect_${this.nextId++}`,
                  type: "land_masses",
                  effect: landMassesEffect,
                  priority: 3,
                  enabled: true,
                  name: "Emergent Land Masses",
                };
                this.effects.set(landMassesInstance.id, landMassesInstance);
                effects.push(landMassesInstance);
                landMassesEffect.addToScene(scene, mesh.position);
              }
            }

            // Añadir atmósfera sutil si está disponible
            if (surface.atmosphere_clouds && surface.atmosphere_clouds.length > 0) {
              const cloudsEffect = createAtmosphereCloudsFromPythonData(planetRadius, surface, (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 8000);
              if (cloudsEffect) {
                const cloudsInstance: EffectInstance = {
                  id: `effect_${this.nextId++}`,
                  type: "atmosphere_clouds",
                  effect: cloudsEffect,
                  priority: 4,
                  enabled: true,
                  name: "Atmospheric Clouds",
                };
                this.effects.set(cloudsInstance.id, cloudsInstance);
                effects.push(cloudsInstance);
                cloudsEffect.addToScene(scene, mesh.position);
              }
            }
            break;

          case "nebulous":
            // Nebula-like gas giant with swirling patterns
            if (this.layerSystem) {
              // Add nebula swirls using cloud gyros with special parameters
              const nebulaGyrosLayer = createCloudGyrosLayerFromPythonData(
                this.layerSystem,
                {
                  ...surface,
                  base_color: baseColor,
                  storm_intensity: surface.nebula_density || 0.6,
                  color_variance: surface.color_variance || 0.2,
                },
                (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 2000
              );

              const nebulaGyrosInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "cloud_gyros_layer",
                effect: nebulaGyrosLayer,
                priority: 0,
                enabled: true,
              };
              this.effects.set(nebulaGyrosInstance.id, nebulaGyrosInstance);
              effects.push(nebulaGyrosInstance);

              // Add polar hexagon if present
              if (surface.polar_hexagon && surface.polar_hexagon.enabled) {
                const currentTimeYears = pythonData.timing?.elapsed_time ? pythonData.timing.elapsed_time / (365.25 * 24 * 3600) : 0;

                const hexagonEffect = new PolarHexagonEffect({
                  planetColor: baseColor,
                  hexagonData: surface.polar_hexagon,
                  planetRadius: planetRadius,
                  currentTime: currentTimeYears,
                });

                const hexagonInstance: EffectInstance = {
                  id: `effect_${this.nextId++}`,
                  type: "polar_hexagon",
                  effect: hexagonEffect,
                  priority: 10,
                  enabled: true,
                };
                this.effects.set(hexagonInstance.id, hexagonInstance);
                effects.push(hexagonInstance);

                // Add to scene
                if (scene) {
                  hexagonEffect.addToScene(scene);
                }
              }
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

          case "diamond":
            if (this.layerSystem) {
              const diamondLayer = createDiamondSurfaceLayerFromPythonData(this.layerSystem, pythonData, pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed);

              const diamondInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "diamond_surface_layer",
                effect: diamondLayer,
                priority: 0,
                enabled: true,
              };
              this.effects.set(diamondInstance.id, diamondInstance);
              effects.push(diamondInstance);

              // Añadir grietas internas al diamante como efecto independiente
              const cracksEffect = createDiamondCracksFromPythonData(
                pythonData, 
                planetRadius,
                pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed
              );
              
              const cracksInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "diamond_cracks",
                effect: cracksEffect,
                priority: 1, // Mayor prioridad para renderizar sobre el diamante
                enabled: true,
              };
              this.effects.set(cracksInstance.id, cracksInstance);
              effects.push(cracksInstance);
              
              // CRÍTICO: Añadir el efecto a la escena
              cracksEffect.addToScene(scene, mesh.position);

              // Añadir nubes atmosféricas si están disponibles para planetas Diamond
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
                  name: "Atmospheric Clouds",
                };

                this.effects.set(cloudsInstance.id, cloudsInstance);
                effects.push(cloudsInstance);
                cloudsEffect.addToScene(scene, mesh.position);
              }
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
                  name: "Atmospheric Clouds",
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

              // Agregar LandMasses transparentes para crear variaciones topográficas
              const transparentLandMasses = createTransparentLandMassesForIcyPlanet(
                planetRadius,
                surface,
                (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 8000 // Seed específica para LandMasses en Icy
              );

              if (transparentLandMasses) {
                const landMassesInstance: EffectInstance = {
                  id: `effect_${this.nextId++}`,
                  type: "transparent_land_masses",
                  effect: transparentLandMasses,
                  priority: 1, // Prioridad después del terreno base
                  enabled: true,
                  name: "Ice Formations",
                };

                this.effects.set(landMassesInstance.id, landMassesInstance);
                effects.push(landMassesInstance);
                transparentLandMasses.addToScene(scene, mesh.position);
                console.log("🧊 Ice Formations (transparent LandMasses) added to Icy planet");
              } else {
                console.warn("❄️ Failed to create transparent LandMasses for Icy planet");
              }

              // Añadir nubes atmosféricas si están disponibles para planetas Icy (ahora vienen desde Python)
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
                  name: "Atmospheric Clouds",
                };

                this.effects.set(cloudsInstance.id, cloudsInstance);
                effects.push(cloudsInstance);
                cloudsEffect.addToScene(scene, mesh.position);
                console.log("☁️ Atmospheric Clouds added to Icy planet");
              }

              // Añadir características heladas (cristales, grietas, casquetes)
              const icyFeaturesEffect = createIcyFeaturesFromPythonData(
                planetRadius,
                surface,
                (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 9000 // Seed específica para características heladas
              );

              if (icyFeaturesEffect) {
                const icyFeaturesInstance: EffectInstance = {
                  id: `effect_${this.nextId++}`,
                  type: "icy_features",
                  effect: icyFeaturesEffect,
                  priority: 2, // Después del terreno y formaciones, pero antes de nubes
                  enabled: true,
                  name: "Ice Crystals & Features",
                };

                this.effects.set(icyFeaturesInstance.id, icyFeaturesInstance);
                effects.push(icyFeaturesInstance);
                icyFeaturesEffect.addToScene(scene, mesh.position);
                console.log("❄️ Icy Features (crystals, cracks, ice caps) added to Icy planet");
              }
            }
            break;

          case "oceanic":
            // Añadir FluidLayers para corrientes oceánicas transparentes
            const fluidLayersEffect = createFluidLayersFromPythonData(planetRadius, pythonData);

            if (fluidLayersEffect) {
              const fluidLayersInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "fluid_layers",
                effect: fluidLayersEffect,
                priority: 3,
                enabled: true,
                name: "Fluid Ocean Layers",
              };

              this.effects.set(fluidLayersInstance.id, fluidLayersInstance);
              effects.push(fluidLayersInstance);
              fluidLayersEffect.addToScene(scene, mesh.position);

              console.log("🌊 FluidLayers effect added for oceanic planet");
            }

            // Añadir green_patches como masas de tierra para planetas oceánicos
            if (surface.green_patches && surface.green_patches.length > 0) {
              const landMassesEffect = createLandMassesFromPythonData(planetRadius, surface, (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 6000);

              if (landMassesEffect) {
                const landMassesInstance: EffectInstance = {
                  id: `effect_${this.nextId++}`,
                  type: "land_masses",
                  effect: landMassesEffect,
                  priority: 5, // Prioridad baja para que esté cerca de la superficie
                  enabled: true,
                  name: "Land Masses (Islands)",
                };

                this.effects.set(landMassesInstance.id, landMassesInstance);
                effects.push(landMassesInstance);
                landMassesEffect.addToScene(scene, mesh.position);
              }
            }

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
                name: "Atmospheric Clouds",
              };

              this.effects.set(cloudsInstance.id, cloudsInstance);
              effects.push(cloudsInstance);
              cloudsEffect.addToScene(scene, mesh.position);
            }
            break;

          case "tundra":
            // Tundra planets: mix of land masses (earth tones), sparse ice features, and atmospheric clouds

            // 1. Land masses with earth-toned colors (browns, greys, muted greens) WITH LOW OPACITY
            if (surface.green_patches && surface.green_patches.length > 0) {
              // NOTE: The opacity is already in the patch data from Python (0.25)
              // The LandMassesEffect will use it automatically
              const landMassesEffect = createLandMassesFromPythonData(planetRadius, surface, (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 6000);

              if (landMassesEffect) {
                const landMassesInstance: EffectInstance = {
                  id: `effect_${this.nextId++}`,
                  type: "land_masses",
                  effect: landMassesEffect,
                  priority: 5,
                  enabled: true,
                  name: "Tundra Terrain",
                };

                this.effects.set(landMassesInstance.id, landMassesInstance);
                effects.push(landMassesInstance);
                landMassesEffect.addToScene(scene, mesh.position);
                console.log("🏔️ Tundra terrain (LandMasses) added");
              }
            }

            // 2. Sparse ice features (seasonal snow patches, sparse crystals)
            const tundraIcyFeatures = createIcyFeaturesFromPythonData(planetRadius, surface, (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 9000);

            if (tundraIcyFeatures) {
              const icyFeaturesInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "icy_features",
                effect: tundraIcyFeatures,
                priority: 6,
                enabled: true,
                name: "Snow Patches & Ice",
              };

              this.effects.set(icyFeaturesInstance.id, icyFeaturesInstance);
              effects.push(icyFeaturesInstance);
              tundraIcyFeatures.addToScene(scene, mesh.position);
              console.log("❄️ Sparse ice features added to Tundra planet");
            }

            // 3. Atmospheric clouds with earth-like colors
            if (surface.clouds && surface.clouds.length > 0) {
              const cloudsEffect = createAtmosphereCloudsFromPythonData(planetRadius, surface, (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 4000);

              const cloudsInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "atmosphere_clouds",
                effect: cloudsEffect,
                priority: 15,
                enabled: true,
                name: "Atmospheric Clouds",
              };

              this.effects.set(cloudsInstance.id, cloudsInstance);
              effects.push(cloudsInstance);
              cloudsEffect.addToScene(scene, mesh.position);
              console.log("☁️ Atmospheric clouds added to Tundra planet");
            }

            // 4. Tundra snowflakes effect
            const snowflakesEffect = createTundraSnowflakesFromPythonData(planetRadius, surface, (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 15000);

            if (snowflakesEffect) {
              const snowflakesInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "tundra_snowflakes",
                effect: snowflakesEffect,
                priority: 20,
                enabled: true,
                name: "Snowflakes",
              };

              this.effects.set(snowflakesInstance.id, snowflakesInstance);
              effects.push(snowflakesInstance);
              snowflakesEffect.addToScene(scene, mesh.position);
              console.log("❄️ Tundra snowflakes added to Tundra planet");
            }
            break;

          case "arid":
            // Arid planets: rocky terrain with atmospheric clouds and sparse land masses in dark reddish colors
            console.log("🏜️ Processing Arid planet - adding atmospheric clouds and land masses");

            // 1. Añadir nubes atmosféricas SIEMPRE para planetas Arid (proceduralmente si no hay datos)
            let cloudsEffect;
            if (surface.clouds && surface.clouds.length > 0) {
              // Usar datos desde Python si están disponibles
              cloudsEffect = createAtmosphereCloudsFromPythonData(
                planetRadius,
                surface,
                (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 4000
              );
            } else {
              // Generar proceduralmente si no hay datos desde Python
              cloudsEffect = new AtmosphereCloudsEffect(planetRadius, {
                color: new THREE.Color(0.9, 0.8, 0.7), // Color arena/polvo para planetas áridos
                cloudCount: 20, // Más nubes para mejor cobertura
                size: 4.2, // Tamaño mucho mayor (rango 3.8-5.5 de PROCEDURAL_RANGES)
                opacity: 0.7,
                density: 1.2, // Mayor densidad para visibilidad
                seed: (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 4000,
                rotationSpeed: 0.004,
                movementAmplitude: 0.012,
                puffiness: 1.3,
                timeSpeed: 1.0
              });
            }

            if (cloudsEffect) {
              const cloudsInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "atmosphere_clouds",
                effect: cloudsEffect,
                priority: 15,
                enabled: true,
                name: "Atmospheric Clouds",
              };

              this.effects.set(cloudsInstance.id, cloudsInstance);
              effects.push(cloudsInstance);
              cloudsEffect.addToScene(scene, mesh.position);
              console.log("☁️ Atmospheric Clouds added to Arid planet");
            }

            // 2. Añadir masas de tierra SIEMPRE para planetas Arid con colores áridos
            let landMassesEffect;
            if (surface.green_patches && surface.green_patches.length > 0) {
              // Usar datos desde Python pero modificar colores
              const modifiedSurface = {
                ...surface,
                green_patches: surface.green_patches.map((patch: any) => ({
                  ...patch,
                  color: [0.5, 0.0, 0.0, patch.color?.[3] || 1.0] // RGB normalizado del #800000
                }))
              };

              landMassesEffect = createLandMassesFromPythonData(
                planetRadius, 
                modifiedSurface, 
                (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 6000
              );
            } else {
              // Generar proceduralmente con colores áridos - COBERTURA EXTENSIVA como planetas oceánicos
              landMassesEffect = new LandMassesEffect(planetRadius, {
                seed: (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 6000,
                // Generar green_patches sintéticas con colores áridos - MUCHOS MÁS PARCHES
                greenPatches: Array.from({length: 25}, (_, i) => { // Reducir cantidad pero hacer MUCHO más grandes
                  const seed = (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 6000 + i * 100;
                  const rng = Math.sin(seed) * 0.5 + 0.5; // Pseudo-random [0,1]
                  
                  // Distribución más uniforme en la esfera usando algoritmo mejorado
                  const phi = Math.acos(1 - 2 * (i + rng) / 25); // Latitud uniforme
                  const theta = 2 * Math.PI * ((i * 2.399) % 1); // Longitud con espiral dorada
                  
                  // Crear diferentes tipos de formaciones: pequeñas, medianas y grandes
                  let size;
                  if (i < 8) {
                    // 8 formaciones GRANDES (continentes áridos)
                    size = 0.25 + rng * 0.25; // 0.25-0.50 - MUY GRANDES
                  } else if (i < 16) {
                    // 8 formaciones medianas (mesetas)
                    size = 0.15 + rng * 0.15; // 0.15-0.30 - GRANDES
                  } else {
                    // 9 formaciones pequeñas (afloramientos)
                    size = 0.08 + rng * 0.12; // 0.08-0.20 - MEDIANAS
                  }
                  
                  return {
                    position_3d: [
                      Math.sin(phi) * Math.cos(theta),
                      Math.sin(phi) * Math.sin(theta),
                      Math.cos(phi)
                    ],
                    size: size,
                    sides: 12 + Math.floor(rng * 16), // Geometría variada (12-28 lados)
                    color: [0.5, 0.0, 0.0, 0.7 + rng * 0.2] // Color árido con opacidad variada (0.7-0.9)
                  };
                })
              });
            }

            if (landMassesEffect) {
              const landMassesInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "land_masses",
                effect: landMassesEffect,
                priority: 5,
                enabled: true,
                name: "Arid Terrain",
              };

              this.effects.set(landMassesInstance.id, landMassesInstance);
              effects.push(landMassesInstance);
              landMassesEffect.addToScene(scene, mesh.position);
              console.log("🏜️ Arid terrain (LandMasses with dark reddish color) added to Arid planet");
            }

            // 3. Añadir ríos secos para dar más detalle al terreno árido
            const riverLinesEffect = createRiverLinesFromPythonData(
              planetRadius,
              surface,
              (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed)
            );
            if (riverLinesEffect) {
              const riverLinesInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "river_lines",
                effect: riverLinesEffect,
                priority: 6, // Prioridad alta para renderizar sobre el terreno
                enabled: true,
                name: "Dried River Channels",
              };
              this.effects.set(riverLinesInstance.id, riverLinesInstance);
              effects.push(riverLinesInstance);
              riverLinesEffect.addToScene(scene, mesh.position);
              console.log("🏜️ Dried river channels added to Arid planet");
            }
            break;

          case "molten_core":
          case "molten core":
            // Planetas Molten Core: superficie de lava incandescente con efectos de fuego
            console.log("🌋 Processing Molten Core planet - adding lava effects");

            // 1. Añadir superficie de lava como capa base
            const moltenLavaEffect = createMoltenLavaFromPythonData(this.layerSystem!, pythonData);
            
            if (moltenLavaEffect) {
              const moltenLavaInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "molten_lava",
                effect: moltenLavaEffect,
                priority: 2,
                enabled: true,
                name: "Molten Lava Surface",
              };

              this.effects.set(moltenLavaInstance.id, moltenLavaInstance);
              effects.push(moltenLavaInstance);
              console.log("🌋 Molten Lava surface layer added for Molten Core planet");
            }

            // 2. Añadir flujos de lava y látigos de fuego
            const lavaFlowsEffect = createLavaFlowsFromPythonData(
              planetRadius, 
              surface, 
              (pythonData.seeds?.planet_seed || pythonData.seeds?.shape_seed) + 9000
            );
            
            if (lavaFlowsEffect) {
              const lavaFlowsInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "lava_flows",
                effect: lavaFlowsEffect,
                priority: 4, // Alta prioridad para que se vea encima de la superficie
                enabled: true,
                name: "Lava Flows & Fire Whips",
              };

              this.effects.set(lavaFlowsInstance.id, lavaFlowsInstance);
              effects.push(lavaFlowsInstance);
              lavaFlowsEffect.addToScene(scene, mesh.position);
              console.log("🔥 Lava Flows (fire whips) added to Molten Core planet");
            }

            // 3. Añadir erupciones de fuego (llamas que salen de la superficie)
            const fireEruptionEffect = this.createEffectFromPythonData(
              EffectType.FIRE_ERUPTION,
              pythonData,
              planetRadius,
              mesh
            )?.effect;

            if (fireEruptionEffect) {
              const fireEruptionInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "fire_eruption",
                effect: fireEruptionEffect,
                priority: 15, // Alta prioridad para renderizar sobre otros efectos
                enabled: true,
                name: "Fire Eruptions",
              };

              this.effects.set(fireEruptionInstance.id, fireEruptionInstance);
              effects.push(fireEruptionInstance);
              fireEruptionEffect.addToScene(scene, mesh.position);
              console.log("🔥 Fire Eruptions added to Molten Core planet");
            }

            // 4. Añadir landmasses incandescentes (masas de tierra que brillan como lava)
            if (surface.green_patches && surface.green_patches.length > 0) {
              // Modificar los green_patches para que sean incandescentes (color Molten Core)
              const moltenCoreMassesData = {
                ...surface,
                green_patches: surface.green_patches.map((patch: any) => ({
                  ...patch,
                  // Color incandescente basado en Molten Core (#FF8C00)
                  color: [1.0, 0.55, 0.0, patch.color?.[3] || 0.9] // RGB normalizado + alpha
                }))
              };

              const incandescientLandMasses = createLandMassesFromPythonData(
                planetRadius, 
                moltenCoreMassesData, 
                (pythonData.seeds?.planet_seed || pythonData.seeds?.shape_seed) + 10000
              );

              if (incandescientLandMasses) {
                const landMassesInstance: EffectInstance = {
                  id: `effect_${this.nextId++}`,
                  type: "land_masses",
                  effect: incandescientLandMasses,
                  priority: 3, // Encima de la superficie de lava
                  enabled: true,
                  name: "Incandescent Land Masses",
                };

                this.effects.set(landMassesInstance.id, landMassesInstance);
                effects.push(landMassesInstance);
                incandescientLandMasses.addToScene(scene, mesh.position);
                console.log("🌋 Incandescent Land Masses added to Molten Core planet");
              }
            }

            // 4. Añadir nubes atmosféricas si están disponibles (con tinte anaranjado)
            if (surface.clouds && surface.clouds.length > 0) {
              const moltenCloudsEffect = createAtmosphereCloudsFromPythonData(
                planetRadius,
                surface,
                (pythonData.seeds?.planet_seed || pythonData.seeds?.shape_seed) + 4000
              );

              const moltenCloudsInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "atmosphere_clouds",
                effect: moltenCloudsEffect,
                priority: 15,
                enabled: true,
                name: "Molten Atmospheric Clouds",
              };

              this.effects.set(moltenCloudsInstance.id, moltenCloudsInstance);
              effects.push(moltenCloudsInstance);
              moltenCloudsEffect.addToScene(scene, mesh.position);
              console.log("🌫️ Molten Atmospheric Clouds added to Molten Core planet");
            }
            break;

          case "exotic":
            // Planetas Exotic: nubes alienígenas, figuras geométricas y doodles
            console.log("👽 Processing Exotic planet");
            
            // 1. Añadir nubes atmosféricas si están disponibles
            if (surface.clouds && surface.clouds.length > 0) {
              const cloudsEffect = createAtmosphereCloudsFromPythonData(
                planetRadius,
                surface,
                (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 4000
              );
              
              const cloudsInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: "atmosphere_clouds",
                effect: cloudsEffect,
                priority: 15,
                enabled: true,
                name: "Exotic Atmospheric Clouds",
              };
              
              this.effects.set(cloudsInstance.id, cloudsInstance);
              effects.push(cloudsInstance);
              cloudsEffect.addToScene(scene, mesh.position);
              console.log("☁️ Exotic Atmospheric Clouds added");
            }
            
            // 2. Añadir figuras geométricas pequeñas
            const geometricShapesEffect = createExoticGeometricShapesFromPythonData(
              planetRadius,
              surface,
              (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 5000,
              baseColor  // Pass the planet base color
            );
            
            if (geometricShapesEffect) {
              const shapesInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: EffectType.EXOTIC_GEOMETRIC_SHAPES,
                effect: geometricShapesEffect,
                priority: 10,
                enabled: true,
                name: "Exotic Geometric Shapes",
              };
              
              this.effects.set(shapesInstance.id, shapesInstance);
              effects.push(shapesInstance);
              geometricShapesEffect.addToScene(scene, mesh.position);
              console.log("🔷 Exotic Geometric Shapes added");
            }
            
            // 3. Añadir doodles/garabatos grandes
            const doodlesEffect = createExoticDoodlesFromPythonData(
              planetRadius,
              surface,
              (pythonData.seeds?.shape_seed || pythonData.seeds?.planet_seed) + 6000
            );
            
            if (doodlesEffect) {
              const doodlesInstance: EffectInstance = {
                id: `effect_${this.nextId++}`,
                type: EffectType.EXOTIC_DOODLES,
                effect: doodlesEffect,
                priority: 12,
                enabled: true,
                name: "Exotic Doodles",
              };
              
              this.effects.set(doodlesInstance.id, doodlesInstance);
              effects.push(doodlesInstance);
              doodlesEffect.addToScene(scene, mesh.position);
              console.log("🎨 Exotic Doodles added");
            }
            break;

          case "anomaly":
            // Planetas anómalos: múltiples efectos extraños y perturbadores
            console.log("🌌 DETECTED ANOMALY PLANET - Creating effects");
            console.log("🌌 Planet data:", { surfaceType: surface.type, planetType: pythonData.planet_info?.type });

            // 🚀 MODO SHOWCASE: ACTIVAR TODOS LOS EFECTOS PARA EVALUACIÓN
            console.log("🎭 SHOWCASE MODE: Activating ALL anomaly effects for evaluation");

            const allAnomalyEffects = [
              // EffectType.ANOMALY_GLITCH_FIELD, // Desactivado - movido a Unused3DEffects
              // EffectType.ANOMALY_VOID_SPHERE, // Desactivado - movido a Unused3DEffects
              EffectType.ANOMALY_PHASE_MATTER,
              EffectType.PULSATING_CUBE,
              EffectType.PLANET_RAYS,
              // EffectType.ANOMALY_GEOMETRIC_MORPH, // Desactivado - movido a Unused3DEffects
              // EffectType.ANOMALY_GRAVITY_WELL // Desactivado - movido a Unused3DEffects
            ];

            const selectedEffects = allAnomalyEffects;
            const anomalySeed = pythonData.seeds?.planet_seed || Math.floor(Math.random() * 1000000);
            const numEffects = selectedEffects.length;

            // Crear los efectos seleccionados
            for (let i = 0; i < numEffects; i++) {
              const effectType = selectedEffects[i];
              const effectSeed = anomalySeed + i * 10000;

              const anomalyEffect = this.createEffectFromPythonData(
                effectType,
                { ...pythonData, seeds: { ...pythonData.seeds, planet_seed: effectSeed } },
                planetRadius,
                mesh,
                10 + i // Prioridad alta para efectos anómalos
              );

              if (anomalyEffect) {
                anomalyEffect.name = effectType.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
                effects.push(anomalyEffect);

                if (anomalyEffect.effect.addToScene) {
                  anomalyEffect.effect.addToScene(scene, mesh.position);
                }

                console.log(`🎭 Added anomaly effect: ${anomalyEffect.name}`);
              }
            }

            // Añadir atmósfera anómala si está disponible
            if (pythonData.atmosphere && pythonData.atmosphere.type !== "None") {
              const atmosphereEffect = this.createEffectFromPythonData(EffectType.ATMOSPHERE, pythonData.atmosphere, planetRadius, mesh, 5);
              if (atmosphereEffect) {
                effects.push(atmosphereEffect);
                atmosphereEffect.effect.addToScene(scene, mesh.position);
                console.log("🌫️ Anomalous atmosphere added");
              }
            }
            break;

          default:
            // Verificar si es un planeta anómalo por planet_info.type
            if (pythonData.planet_info?.type?.toLowerCase() === "anomaly") {
              console.log("🌌 DETECTED ANOMALY PLANET via planet_info.type - Creating effects");

              // 🚀 MODO SHOWCASE: ACTIVAR TODOS LOS EFECTOS PARA EVALUACIÓN
              console.log("🎭 SHOWCASE MODE (alt detection): Activating ALL anomaly effects for evaluation");

              const allAnomalyEffects = [
                // EffectType.ANOMALY_GLITCH_FIELD, // Desactivado - movido a Unused3DEffects
                // EffectType.ANOMALY_VOID_SPHERE, // Desactivado - movido a Unused3DEffects
                EffectType.ANOMALY_PHASE_MATTER,
                EffectType.PULSATING_CUBE,
                EffectType.PLANET_RAYS,
                // EffectType.ANOMALY_GEOMETRIC_MORPH, // Desactivado - movido a Unused3DEffects
                // EffectType.ANOMALY_GRAVITY_WELL // Desactivado - movido a Unused3DEffects
              ];

              const selectedEffects = allAnomalyEffects;
              const anomalySeed = pythonData.seeds?.planet_seed || Math.floor(Math.random() * 1000000);
              const numEffects = selectedEffects.length;

              for (let i = 0; i < numEffects; i++) {
                const effectType = selectedEffects[i];
                const effectSeed = anomalySeed + i * 10000;

                const anomalyEffect = this.createEffectFromPythonData(effectType, { ...pythonData, seeds: { ...pythonData.seeds, planet_seed: effectSeed } }, planetRadius, mesh, 10 + i);

                if (anomalyEffect) {
                  anomalyEffect.name = effectType.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
                  effects.push(anomalyEffect);

                  if (anomalyEffect.effect.addToScene) {
                    anomalyEffect.effect.addToScene(scene, mesh.position);
                  }

                  console.log(`🎭 Added anomaly effect: ${anomalyEffect.name}`);
                }
              }

              // Añadir atmósfera anómala si está disponible
              if (pythonData.atmosphere && pythonData.atmosphere.type !== "None") {
                const atmosphereEffect = this.createEffectFromPythonData(EffectType.ATMOSPHERE, pythonData.atmosphere, planetRadius, mesh, 5);
                if (atmosphereEffect) {
                  effects.push(atmosphereEffect);
                  atmosphereEffect.effect.addToScene(scene, mesh.position);
                  console.log("🌫️ Anomalous atmosphere added");
                }
              }
            } else {
              // Para tipos sin efectos específicos, aplicar al menos el color base
              if (mesh.material instanceof THREE.MeshStandardMaterial) {
                const baseColor = getPlanetBaseColor(pythonData);
                mesh.material.color.copy(baseColor);
              }
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

      // 2. Efectos atmosféricos (solo para planetas no-anómalos)
      const planetType = pythonData.planet_info?.type?.toLowerCase() || pythonData.surface_elements?.type?.toLowerCase();
      const isAnomalyPlanet = planetType === "anomaly" || pythonData.surface_elements?.type === "anomaly";

      if (pythonData.atmosphere && !isAnomalyPlanet) {
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

      // ⭐ AÑADIR STARFIELD AUTOMÁTICAMENTE (siempre presente como fondo)
      try {
        const starFieldEffect = this.createEffectFromPythonData(
          EffectType.STAR_FIELD,
          pythonData,
          planetRadius,
          mesh,
          -100 // Prioridad muy baja para que esté al fondo
        );

        if (starFieldEffect && starFieldEffect.effect) {
          starFieldEffect.effect.addToScene(scene, mesh.position);
          effects.push(starFieldEffect);
        }
      } catch (error) {
        console.warn("Could not create StarField:", error);
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

      // Para efectos con getObject3D (como RingSystem, AtmosphericStreaks, FluidLayers, LandMasses, etc.)
      if (effect && effect.getObject3D) {
        const object3D = effect.getObject3D();
        if (object3D) {
          object3D.visible = effectInstance.enabled;
          console.log(`🎮 Toggle effect ${effectInstance.type}: visible = ${effectInstance.enabled}`);
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
          diamond_surface_layer: "diamondSurface",
          rocky_terrain_layer: "rockyTerrain",
          icy_terrain_layer: "icyTerrain",
          aquifer_water: "aquiferWater",
          ocean_currents: "oceanCurrents",
          molten_lava: "moltenLava",
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
   * Actualiza la luz de todos los efectos (incluyendo PlanetLayerSystem)
   */
  updateLightForAllEffects(light: THREE.DirectionalLight): void {
    // Actualizar PlanetLayerSystem
    if (this.layerSystem) {
      this.layerSystem.updateFromThreeLight(light);
    }

    // Actualizar efectos que tienen updateFromThreeLight
    for (const instance of this.effects.values()) {
      if (instance.enabled && instance.effect.updateFromThreeLight) {
        try {
          instance.effect.updateFromThreeLight(light);
        } catch (error) {
          console.error(`Error updating light for effect ${instance.type}:`, error);
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
