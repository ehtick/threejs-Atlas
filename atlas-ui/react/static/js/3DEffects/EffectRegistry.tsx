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
  AtmosphericHaloEffect, 
  AtmosphericStreaksEffect, 
  DenseAtmosphereEffect,
  createAtmosphericHaloFromPythonData,
  createAtmosphericStreaksFromPythonData,
  createDenseAtmosphereFromPythonData,
  AtmosphericHaloParams,
  AtmosphericStreaksParams,
  AtmosphereParams
} from './AtmosphericEffects';

// Importar efectos de superficie
import { MetallicSurfaceEffect } from './MetallicSurface';
import { FragmentationEffect } from './FragmentationEffect';
import { RockyTerrainEffect, createRockyTerrainFromPythonData } from './RockyTerrain';
import { IcyTerrainEffect, createIcyTerrainFromPythonData } from './IcyTerrain';
// OceanWaves eliminado - no respeta los datos de Python

// Importar efectos de debug
import { VisualDebug3DEffect, createVisualDebug3DFromPythonData } from './VisualDebug3D';

// VISUAL DEBUG FLAG - Controla si se muestra debug visual 3D
const VISUAL_DEBUG = true; // Cambiar a false para desactivar

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
  ATMOSPHERIC_HALO = 'atmospheric_halo',
  ATMOSPHERIC_STREAKS = 'atmospheric_streaks',
  DENSE_ATMOSPHERE = 'dense_atmosphere',
  
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
        // Usar el base_color correcto de Python
        let color = [0.4, 0.4, 0.45]; // Default
        
        const baseColor = data.planet_info?.base_color || data.surface?.base_color;
        if (baseColor && typeof baseColor === 'string') {
          // Convertir hex a RGB
          const hex = baseColor.replace('#', '');
          color = [
            parseInt(hex.substr(0, 2), 16) / 255,
            parseInt(hex.substr(2, 2), 16) / 255,
            parseInt(hex.substr(4, 2), 16) / 255
          ];
        } else if (Array.isArray(baseColor)) {
          color = baseColor;
        }
        
        console.log('⚙️ Creating metallic effect with color from Python:', {
          base_color: data.planet_info?.base_color,
          surface_color: data.surface?.base_color,
          final_color: color
        });
        
        return new MetallicSurfaceEffect({
          color: color,
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
    this.registerEffect(EffectType.ATMOSPHERIC_HALO, {
      create: (params, planetRadius) => new AtmosphericHaloEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => 
        createAtmosphericHaloFromPythonData(planetRadius, data.atmosphere || {})
    });

    this.registerEffect(EffectType.ATMOSPHERIC_STREAKS, {
      create: (params, planetRadius) => new AtmosphericStreaksEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => 
        createAtmosphericStreaksFromPythonData(planetRadius, data.atmosphere || {})
    });

    this.registerEffect(EffectType.DENSE_ATMOSPHERE, {
      create: (params, planetRadius) => new DenseAtmosphereEffect(planetRadius, params),
      fromPythonData: (data, planetRadius) => 
        createDenseAtmosphereFromPythonData(planetRadius, data)
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
    
    console.log('🚀 PYTHON API DATA - COMPLETE DATASET:', JSON.stringify(pythonData, null, 2));

    // 1. Efectos de superficie basados en el tipo
    if (pythonData.surface_elements) {
      const surface = pythonData.surface_elements;
      
      // Sistema modular de efectos 3D
      if (surface.effects_3d && Array.isArray(surface.effects_3d)) {
        for (const effectData of surface.effects_3d) {
          const instance = this.createEffect(
            effectData.type,
            effectData.params,
            planetRadius,
            mesh,
            effectData.priority || 0
          );
          
          if (instance) {
            effects.push(instance);
            
            // Añadir a la escena si es necesario
            if (instance.effect.addToScene) {
              instance.effect.addToScene(scene, mesh.position);
            }
          }
        }
      }
      
      // Sistema agnóstico: ejecutar comandos de renderizado de Python
      if (surface.type === 'rendering_commands' && surface.commands) {
        console.log('🎯 Executing rendering commands from Python');
        this.executeRenderingCommands(surface.commands, scene, mesh, planetRadius);
      }
      
      // Efectos específicos por tipo de planeta (LEGACY - se eliminará)
      switch (surface.type) {
        case 'gas_giant':
          const gasGiantEffect = this.createEffectFromPythonData(
            EffectType.GAS_GIANT_BANDS,
            surface,
            planetRadius,
            mesh,
            0
          );
          if (gasGiantEffect) effects.push(gasGiantEffect);
          break;

        case 'metallic':
        case 'metallic_3d':
          const metallicEffect = this.createEffectFromPythonData(
            EffectType.METALLIC_SURFACE,
            {
              ...pythonData,
              surface: {
                ...pythonData.surface,
                base_color: pythonData.planet_info?.base_color || pythonData.surface?.base_color
              }
            },
            planetRadius,
            mesh,
            0
          );
          if (metallicEffect) effects.push(metallicEffect);
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
          // El frontend NO debe tener lógica específica para tipos de planeta
          // Python debe enviar órdenes específicas de renderizado
          console.log('🚨 PROBLEM: Frontend has planet-type specific logic');
          console.log('🔧 SOLUTION: Python should send specific rendering commands');
          break;
      }
    }

    // 2. Efectos atmosféricos
    if (pythonData.atmosphere) {
      // Halo atmosférico
      if (pythonData.atmosphere.halo) {
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
        }
      }

      // Estelas atmosféricas
      if (pythonData.atmosphere.streaks) {
        const streaksEffect = this.createEffectFromPythonData(
          EffectType.ATMOSPHERIC_STREAKS,
          pythonData,
          planetRadius,
          mesh,
          20
        );
        if (streaksEffect) {
          effects.push(streaksEffect);
          streaksEffect.effect.addToScene(scene, mesh.position);
        }
      }

      // Atmósfera densa (sistema anterior) - ARREGLADA para evitar líneas meridionales
      // Para planetas oceánicos, reducir la opacidad atmosférica para no ocultar el océano
      if (pythonData.atmosphere.type && pythonData.atmosphere.type !== 'None') {
        const planetType = pythonData.planet_info?.type?.toLowerCase() || pythonData.surface_elements?.type?.toLowerCase();
        
        // Ajustar parámetros atmosféricos según el tipo de planeta
        const atmosphereData = { ...pythonData.atmosphere };
        if (planetType === 'oceanic') {
          // Para planetas oceánicos, usar atmósfera muy sutil
          atmosphereData.opacity = Math.min(atmosphereData.opacity || 0.3, 0.15);
          atmosphereData.width = Math.min(atmosphereData.width || 15, 8);
          
          console.log('🌊 Applying subtle atmosphere for oceanic planet:', atmosphereData);
        }
        
        const atmosphereEffect = this.createEffectFromPythonData(
          EffectType.DENSE_ATMOSPHERE,
          atmosphereData,
          planetRadius,
          mesh,
          5
        );
        if (atmosphereEffect) {
          effects.push(atmosphereEffect);
          atmosphereEffect.effect.addToScene(scene, mesh.position);
        }
      }
    }

    // 3. Sistema de anillos
    if (pythonData.rings && pythonData.rings.has_rings) {
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
      }
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
      console.log('🐛 Activating Visual Debug 3D mode - VISUAL_DEBUG =', VISUAL_DEBUG);
      console.log('🐛 Planet data for debug:', {
        name: pythonData.planet_info?.name,
        rotation: pythonData.timing?.current_rotation_angle,
        cosmic_origin: pythonData.debug?.cosmic_origin_time
      });
      
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
        
        // Log info de debug en consola
        const debugInfo = debugEffect.effect.getDebugInfo();
        console.log('🐛 Debug Effect Created! Info:', debugInfo);
        console.log('🐛 Sun Line Object:', debugEffect.effect.getObject3D());
      } else {
        console.error('❌ Failed to create debug effect!');
      }
    }

    console.log(`✅ Created ${effects.length} effects for planet`);
    return effects;
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

  /**
   * Ejecuta comandos de renderizado genéricos enviados por Python
   * El frontend es agnóstico del tipo de planeta
   */
  private executeRenderingCommands(
    commands: any[], 
    scene: THREE.Scene, 
    mesh: THREE.Mesh, 
    planetRadius: number
  ): void {
    console.log(`🎯 Executing ${commands.length} rendering commands from Python`);
    
    commands.forEach((command, index) => {
      try {
        switch (command.command) {
          case 'apply_material':
            this.executeApplyMaterial(command, mesh);
            break;
            
          case 'create_surface_element':
            this.executeCreateSurfaceElement(command, scene, planetRadius);
            break;
            
          default:
            console.warn(`❓ Unknown command: ${command.command}`);
        }
      } catch (error) {
        console.error(`❌ Error executing command ${index}:`, error);
      }
    });
  }

  /**
   * Ejecuta comando apply_material
   */
  private executeApplyMaterial(command: any, mesh: THREE.Mesh): void {
    console.log('🎨 Applying material from Python command:', command);
    
    const props = command.properties;
    
    if (command.material_type === 'phong') {
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(props.color),
        shininess: props.shininess || 50,
        specular: new THREE.Color(props.specular || '#222222'),
        transparent: props.transparent || false,
        opacity: props.opacity || 1.0
      });
      
      mesh.material = material;
      console.log('✅ Applied phong material with color:', props.color);
    }
  }

  /**
   * Ejecuta comando create_surface_element
   */
  private executeCreateSurfaceElement(command: any, scene: THREE.Scene, planetRadius: number): void {
    console.log('🔧 Creating surface element:', command.element_type, command.id);
    
    let geometry: THREE.BufferGeometry;
    
    // Crear geometría según el tipo
    switch (command.geometry.type) {
      case 'circle':
        geometry = new THREE.CircleGeometry(
          command.size * planetRadius * 0.1, 
          command.geometry.segments || 16
        );
        break;
        
      case 'sphere':
        geometry = new THREE.SphereGeometry(
          command.radius * planetRadius * 0.1, 
          12, 12
        );
        break;
        
      case 'irregular_polygon':
        // Por ahora usar anillo simple, después implementar forma irregular
        geometry = new THREE.RingGeometry(0, 0.05 * planetRadius, 8);
        break;
        
      default:
        console.warn(`❓ Unknown geometry type: ${command.geometry.type}`);
        return;
    }
    
    // Crear material
    const color = command.color;
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color[0], color[1], color[2]),
      opacity: color[3] || 1.0,
      transparent: (color[3] || 1.0) < 1.0
    });
    
    // Crear mesh
    const elementMesh = new THREE.Mesh(geometry, material);
    
    // Posicionar si se especifica
    if (command.position) {
      const worldPos = this.normalizedToSphere(command.position, 
        planetRadius * (1 + (command.geometry.elevation || 0))
      );
      elementMesh.position.copy(worldPos);
      elementMesh.lookAt(new THREE.Vector3(0, 0, 0));
    }
    
    scene.add(elementMesh);
    console.log('✅ Created surface element:', command.id);
  }

  /**
   * Convierte coordenadas normalizadas a posición en esfera
   */
  private normalizedToSphere(normalizedPos: [number, number], radius: number): THREE.Vector3 {
    const [x, y] = normalizedPos;
    
    const phi = Math.acos(1 - 2 * ((y + 1) / 2));
    const theta = 2 * Math.PI * ((x + 1) / 2);
    
    const worldX = radius * Math.sin(phi) * Math.cos(theta);
    const worldY = radius * Math.cos(phi);
    const worldZ = radius * Math.sin(phi) * Math.sin(theta);
    
    return new THREE.Vector3(worldX, worldY, worldZ);
  }

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