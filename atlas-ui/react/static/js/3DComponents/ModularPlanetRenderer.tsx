/**
 * Modular Planet Renderer - Sistema completamente modular y sin hardcodeo
 * 
 * Este componente reemplaza a todos los renderizadores anteriores con un sistema
 * completamente dinámico que usa efectos modulares basados en datos de Python.
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Importar sistema de efectos modulares
import { effectRegistry, EffectInstance } from '../3DEffects/EffectRegistry';
import { createPlanetEffectConfig, EffectsLogger } from '../3DEffects';
import { DebugPlanetData, useDebugPlanetData } from '../utils/DebugPlanetData';
import { getPlanetBaseColor } from '../3DEffects/PlanetColorBase';

// Interfaces
interface ModularPlanetRendererProps {
  planetName: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  autoRotate?: boolean;
  enableControls?: boolean;
  showDebugInfo?: boolean;
  planetData?: {
    name?: string;
    diameter: number;
    density: number;
    gravity: number;
    mass: number;
    orbital_radius: number;
    orbital_period_seconds?: number;
    rotation_period_seconds: number;
    surface_temperature: number;
    axial_tilt: number;
    planet_type: string;
    atmosphere: string;
    elements: string[];
    initial_orbital_angle?: number;
  };
  cosmicOriginTime?: number;
  initialAngleRotation?: number;
  onDataLoaded?: (data: any) => void;
  onEffectsCreated?: (effects: EffectInstance[]) => void;
  onError?: (error: string) => void;
}

interface PlanetRenderingData {
  planet_info: {
    name: string;
    type: string;
    base_color: string;
    radius: number;
  };
  surface_elements?: any;
  atmosphere?: any;
  rings?: any;
  timing?: {
    cosmic_origin_time: number;
    current_time_seconds: number;
    elapsed_time: number;
    initial_orbital_angle: number;
    current_orbital_angle: number;
    max_orbital_radius: number;
    system_max_orbital_radius: number;
  };
  effects_3d?: any[];
  shader_uniforms?: any;
  universal_actions?: any[];
  original_planet_data?: any;
}

interface RendererStats {
  activeEffects: number;
  enabledEffects: number;
  frameRate: number;
  renderTime: number;
}

/**
 * Componente principal del renderizador modular
 */
export const ModularPlanetRenderer: React.FC<ModularPlanetRendererProps> = ({
  planetName,
  containerClassName = '',
  width = 800,
  height = 600,
  autoRotate = true,
  enableControls = true,
  showDebugInfo = false,
  planetData,
  cosmicOriginTime,
  initialAngleRotation,
  onDataLoaded,
  onEffectsCreated,
  onError
}) => {
  // Referencias para Three.js
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const planetMeshRef = useRef<THREE.Mesh | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const frameIdRef = useRef<number | null>(null);
  
  const currentTimeRef = useRef<number>(0);
  const renderingDataRef = useRef<PlanetRenderingData | null>(null);

  // Estado del componente
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [renderingData, setRenderingData] = useState<PlanetRenderingData | null>(null);
  const [effects, setEffects] = useState<EffectInstance[]>([]);
  const [stats, setStats] = useState<RendererStats>({
    activeEffects: 0,
    enabledEffects: 0,
    frameRate: 0,
    renderTime: 0
  });

  // Referencias para el sistema de efectos
  const activeEffectsRef = useRef<EffectInstance[]>([]);
  const lastFrameTimeRef = useRef<number>(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  
  const realCurrentTime = Math.floor(Date.now() / 1000);
  const [timeOffset, setTimeOffset] = useState(0);
  const baseCosmicOriginTime = cosmicOriginTime || renderingData?.timing?.cosmic_origin_time || (Date.now() / 1000 - 3600);
  const currentTime = realCurrentTime - baseCosmicOriginTime + timeOffset;
  
  currentTimeRef.current = currentTime;


  // Helper functions for the modular effects system now handled by EffectsLogger

  /**
   * Manejar resize responsivo del contenedor
   */
  const handleResize = useCallback(() => {
    if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;

    const container = mountRef.current;
    const containerWidth = container.clientWidth || 400;
    const containerHeight = container.clientHeight || 400;

    // Actualizar renderer
    rendererRef.current.setSize(containerWidth, containerHeight);

    // Actualizar cámara
    cameraRef.current.aspect = containerWidth / containerHeight;
    cameraRef.current.updateProjectionMatrix();

  }, []);

  /**
   * Aplicar efectos procedurales usando el sistema modular desde la API
   */
  const applyProceduralShadersFromAPI = async (planetData: PlanetRenderingData) => {
    if (!planetMeshRef.current || !sceneRef.current) return;

    EffectsLogger.log('Applying modular effects from API data', {
      planet: planetData.planet_info.name,
      type: planetData.planet_info.type
    });

    try {
      // Limpiar efectos anteriores
      clearActiveEffects();

      // Crear efectos usando el registry modular
      const newEffects = effectRegistry.createEffectsFromPythonPlanetData(
        planetData,
        1, // planetRadius
        planetMeshRef.current,
        sceneRef.current
      );

      // Actualizar estado
      setEffects(newEffects);
      activeEffectsRef.current = newEffects;

      // Callback opcional
      if (onEffectsCreated) {
        onEffectsCreated(newEffects);
      }

      EffectsLogger.log(`Successfully applied ${newEffects.length} modular effects`);
      updateStats();
    } catch (error) {
      EffectsLogger.error('Error applying modular effects', error);
      applyFallbackEffects();
    }
  };

  // Shaders removed - now using modular effects from 3DEffects directory

  /**
   * Inicialización de Three.js
   */
  const initializeThreeJS = useCallback(() => {
    if (!mountRef.current) {
      return false;
    }

    try {
      // Limpiar contenido anterior
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
      
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      planetMeshRef.current = null;
      orbitLineRef.current = null;

      // Obtener dimensiones del contenedor de forma responsive
      const container = mountRef.current;
      const containerWidth = container.clientWidth || width || 400;
      const containerHeight = container.clientHeight || height || 400;
      
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000511);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 10000);
      camera.position.set(0, 80, 120);
      camera.lookAt(0, 0, 0);
      cameraRef.current = camera;

      // Configurar renderer con configuraciones optimizadas
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      
      renderer.setSize(containerWidth, containerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      setupLighting(scene, null);

      createBasePlanet(scene);
      if (enableControls) {
        setupControls(camera, renderer.domElement);
      }

      return true;
    } catch (error) {
      console.error('Error initializing Three.js:', error);
      return false;
    }
  }, [renderingData, planetData, cosmicOriginTime]); // Dependencias necesarias para usar los datos correctos

  /**
   * Calcular ángulo del sol basándose en la posición ORBITAL del planeta (no rotación)
   * CORREGIDO: Usar la misma lógica que Pillow donde sun_angle = orbital_angle
   */
  const calculateSunAngle = (planetData?: any): number => {
    if (!planetData) {
      return 0;
    }
    
    // Si Python envía sun_angle explícitamente, usarlo
    const explicitSunAngle = planetData.sun_angle || planetData.lighting?.sun_angle;
    if (explicitSunAngle !== undefined) {
      return explicitSunAngle;
    }
    
    const orbitalAngle = planetData.timing?.current_orbital_angle || planetData.timing?.orbital_angle;
    if (orbitalAngle === undefined || orbitalAngle === null) {
      return 0;
    }
    
    return orbitalAngle;
  };

  // Referencias para luces que necesitan ser actualizadas
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const fillLightRef = useRef<THREE.DirectionalLight | null>(null);
  
  // Referencia para la esfera del sol en el centro de la escena
  const sunSphereRef = useRef<THREE.Mesh | null>(null);
  
  // Referencia para la órbita visual del planeta
  const orbitLineRef = useRef<THREE.Line | null>(null);

  /**
   * Configurar propiedades de sombra para una luz direccional
   */
  const setupShadowProperties = (light: THREE.DirectionalLight) => {
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 50;
    light.shadow.camera.left = -10;
    light.shadow.camera.right = 10;
    light.shadow.camera.top = 10;
    light.shadow.camera.bottom = -10;
  };

  /**
   * ACTUALIZAR iluminación cuando lleguen datos reales de la API
   */
  const updateLightingWithRealData = (planetData: any) => {
    if (!sunLightRef.current || !sceneRef.current) {
      return;
    }

    const sunAngle = calculateSunAngle(planetData);
    const sunDistance = 10;
    const actualSunAngle = sunAngle + Math.PI;
    
    // Calcular posición 3D de la luz considerando variación vertical
    // Usar el orbital_angle para variar la altura (componente Y) - DRAMÁTICO para que sea visible
    const orbitalVariationY = Math.sin(sunAngle) * 5; // Variación MÁS DRAMÁTICA en Y
    
    const sunX = sunDistance * Math.cos(actualSunAngle);
    const sunY = orbitalVariationY; // Ya no fijo en 0
    const sunZ = sunDistance * Math.sin(actualSunAngle);
    
    // Actualizar posición de luz principal
    sunLightRef.current.position.set(sunX, sunY, sunZ);
    sunLightRef.current.target.position.set(0, 0, 0);
    if (!sceneRef.current.children.includes(sunLightRef.current.target)) {
      sceneRef.current.add(sunLightRef.current.target);
    }
    
    // Actualizar luz de relleno
    if (fillLightRef.current) {
      fillLightRef.current.position.set(-sunX * 0.5, 0, -sunZ * 0.5);
    }

  };

  /**
   * Crear línea orbital alrededor del sol
   */
  const createOrbitLine = (scene: THREE.Scene, renderingData?: any) => {
    if (!planetData?.orbital_radius) {
      return;
    }
    
    const systemMaxOrbitalRadius = renderingData?.timing?.max_orbital_radius;
    
    if (!systemMaxOrbitalRadius) {
      return;
    }
    
    const relativeOrbitRadius = planetData.orbital_radius / systemMaxOrbitalRadius;
    const scaleFactor = 80;
    const orbitalRadius = 20 + relativeOrbitRadius * scaleFactor;
    
    const segments = 64;
    const orbitPoints = [];
    
    // Crear puntos de la órbita circular
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      orbitPoints.push(new THREE.Vector3(
        orbitalRadius * Math.cos(angle),
        0, // En el plano horizontal
        orbitalRadius * Math.sin(angle)
      ));
    }
    
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitMaterial = new THREE.LineBasicMaterial({
      color: 0x708090, // Gris suave
      transparent: true,
      opacity: 0.4,
      linewidth: 1
    });
    
    const orbitLine = new THREE.Line(orbitGeometry, orbitMaterial);
    scene.add(orbitLine);
    orbitLineRef.current = orbitLine;
    
  };

  /**
   * Crear esfera del sol en el centro de la escena
   */
  const createSunSphere = (scene: THREE.Scene) => {
    const sunRadius = 3;
    const sunGeometry = new THREE.SphereGeometry(sunRadius, 32, 32);
    
    const sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFFF44,
      transparent: false,
      opacity: 1.0
    });
    
    const sunSphere = new THREE.Mesh(sunGeometry, sunMaterial);
    sunSphere.position.set(0, 0, 0);
    const glowGeometry = new THREE.SphereGeometry(sunRadius * 1.8, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFFF44,
      transparent: true,
      opacity: 0.3
    });
    const sunGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    sunSphere.add(sunGlow);
    
    scene.add(sunSphere);
    sunSphereRef.current = sunSphere;
    
  };

  /**
   * Configurar iluminación de la escena basada en datos reales de Python
   */
  const setupLighting = (scene: THREE.Scene, planetData?: any) => {
    createSunSphere(scene);
    if (!planetData) {
      const defaultSunLight = new THREE.DirectionalLight(0xffffff, 2.0);
      defaultSunLight.position.set(10, 0, 0);
      defaultSunLight.castShadow = true;
      setupShadowProperties(defaultSunLight);
      scene.add(defaultSunLight);
      sunLightRef.current = defaultSunLight;

      const defaultFillLight = new THREE.DirectionalLight(0x4466ff, 0.05);
      defaultFillLight.position.set(-5, 0, 0);
      scene.add(defaultFillLight);
      fillLightRef.current = defaultFillLight;

      const ambientLight = new THREE.AmbientLight(0x222244, 0.1);
      scene.add(ambientLight);
      return;
    }

    const sunAngle = calculateSunAngle(planetData);
    const sunDistance = 10;
    
    const actualSunAngle = sunAngle + Math.PI;
    
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    const orbitalVariationY = Math.sin(sunAngle) * 5;
    
    const sunX = sunDistance * Math.cos(actualSunAngle);
    const sunY = orbitalVariationY;
    const sunZ = sunDistance * Math.sin(actualSunAngle);
    
    sunLight.position.set(sunX, sunY, sunZ);
    sunLight.target.position.set(0, 0, 0);
    scene.add(sunLight.target);
    setupShadowProperties(sunLight);
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    const fillLight = new THREE.DirectionalLight(0x4466ff, 0.05);
    fillLight.position.set(-sunX * 0.5, 0, -sunZ * 0.5);
    scene.add(fillLight);
    fillLightRef.current = fillLight;
    if (!scene.children.find(child => child instanceof THREE.AmbientLight)) {
      const ambientLight = new THREE.AmbientLight(0x222244, 0.1);
      scene.add(ambientLight);
    }

  };


  /**
   * Crear planeta base genérico - color será actualizado cuando lleguen datos de API
   */
  const createBasePlanet = (scene: THREE.Scene) => {
    const basePlanetRadius = planetData?.diameter ? planetData.diameter / 15000 : 1;
    const planetRadius = Math.max(Math.min(basePlanetRadius, 4.0), 1.5);
    
    const planetGeometry = new THREE.SphereGeometry(planetRadius, 128, 64);
    const planetMaterial = new THREE.MeshStandardMaterial({
      color: 0x808080,  // Temporal - será reemplazado por datos de API
      metalness: 0.1,
      roughness: 0.8,
      transparent: false,
      opacity: 1.0
    });

    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    planetMesh.castShadow = true;
    planetMesh.receiveShadow = true;
    
    planetMesh.position.set(50, 0, 0);
    
    scene.add(planetMesh);
    planetMeshRef.current = planetMesh;
    
    console.log('🪐 Base planet created - color will be updated when API data arrives');
  };

  /**
   * Actualizar material del planeta con datos reales de la API
   * USA LA FUNCIÓN CENTRALIZADA DE COLORES (solo como fallback)
   */
  const updatePlanetMaterialWithAPIData = (renderingData: PlanetRenderingData) => {
    if (!planetMeshRef.current || !renderingData) return;

    const material = planetMeshRef.current.material as THREE.MeshStandardMaterial;
    
    // Solo aplicar color base si el material sigue siendo gris (no fue modificado por efectos)
    const currentColor = material.color;
    const isDefaultGray = Math.abs(currentColor.r - 0.5) < 0.01 && 
                         Math.abs(currentColor.g - 0.5) < 0.01 && 
                         Math.abs(currentColor.b - 0.5) < 0.01;
    
    if (isDefaultGray) {
      // 🎨 USAR FUNCIÓN CENTRALIZADA para obtener color de Python
      const baseColor = getPlanetBaseColor(renderingData);
      material.color.copy(baseColor);
      
      console.log('🎨 Applied fallback color from centralized system:', {
        apiColor: renderingData.planet_info?.base_color,
        appliedColor: baseColor,
        planetType: renderingData.planet_info?.type
      });
    } else {
      console.log('🎨 Material already modified by effects, skipping base color');
    }

    // Actualizar otras propiedades si vienen en la API (siempre aplicar)
    if (renderingData.surface_elements?.metalness !== undefined) {
      material.metalness = renderingData.surface_elements.metalness;
    }
    if (renderingData.surface_elements?.roughness !== undefined) {
      material.roughness = renderingData.surface_elements.roughness;
    }
  };

  /**
   * Configurar controles orbitales
   */
  const setupControls = (camera: THREE.PerspectiveCamera, domElement: HTMLElement) => {
    const controls = new OrbitControls(camera, domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 50;
    controls.maxDistance = 800;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.1;
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;
  };

  // Oceanic shader removed - now using OceanWaves effect from 3DEffects

  // Gas Giant shader removed - now using GasGiantBands effect from 3DEffects

  // Generic shader removed - now using appropriate effects from 3DEffects directory

  // Universal shader removed - now using modular effects system

  /**
   * Cargar SOLO los datos del planeta desde la API (sin depender de la escena ThreeJS)
   */
  const loadPlanetDataOnly = useCallback(async () => {
    if ((window as any).isLoadingPlanetData) {
      return;
    }
    (window as any).isLoadingPlanetData = true;
    
    try {
      setLoading(true);
      setError(null);

      EffectsLogger.log('Loading planet data from API', { planetName });

      const apiUrl = `/api/planet/rendering-data`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch planet data');
      }
      const planetApiData = result.planet_data;
      const timingApiData = result.timing;
      const renderingApiData = result.rendering_data; // 🚀 NEW: Use translated rendering data
      
      const data: PlanetRenderingData = {
        // Use translated planet_info from Python translator
        planet_info: renderingApiData?.planet_info || {
          name: planetApiData.name,
          type: planetApiData.planet_type,
          base_color: '#808080',
          radius: planetApiData.diameter / 15000
        },
        // Add all translated data from Python
        surface_elements: renderingApiData?.surface_elements,
        atmosphere: renderingApiData?.atmosphere,
        rings: renderingApiData?.rings,
        effects_3d: renderingApiData?.effects_3d,
        shader_uniforms: renderingApiData?.shader_uniforms,
        universal_actions: renderingApiData?.universal_actions,
        timing: {
          cosmic_origin_time: timingApiData.cosmic_origin_time,
          current_time_seconds: timingApiData.current_time_seconds,
          elapsed_time: timingApiData.elapsed_time,
          initial_orbital_angle: planetApiData.initial_orbital_angle,
          current_orbital_angle: planetApiData.current_orbital_angle,
          max_orbital_radius: timingApiData.max_orbital_radius,
          system_max_orbital_radius: planetApiData.system_max_orbital_radius
        },
        original_planet_data: planetApiData
      };
      setRenderingData(data);
      
      renderingDataRef.current = data;
      

      EffectsLogger.log('API data loaded successfully', {
        planet: data.planet_info.name,
        type: data.planet_info.type,
        hasEffects: !!data.surface_elements,
        fullRenderingData: renderingApiData  // 🚀 DEBUG: Log full rendering data
      });
      
      // 🚀 DEBUG: Log to console for easier debugging
      console.log('🌍 Planet API Response:', result);
      console.log('🎨 Rendering Data:', renderingApiData);
      console.log('🔧 Processed Data:', data);

      // Callback opcional
      if (onDataLoaded) {
        onDataLoaded(data);
      }

      // Retornar los datos para uso inmediato
      return data;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      
      if (onError) {
        onError(errorMessage);
      }
      return null; // Retornar null en caso de error
    } finally {
      setLoading(false);
      (window as any).isLoadingPlanetData = false;
    }
  }, [planetName, onDataLoaded, onError]);

  /**
   * Cargar datos del planeta desde la API o usar datos locales
   */
  const loadPlanetData = useCallback(async () => {
    if ((window as any).isLoadingPlanetData) {
      return;
    }
    (window as any).isLoadingPlanetData = true;
    
    try {
      setLoading(true);
      setError(null);

      EffectsLogger.log('Loading planet data from API', { planetName });

      const apiUrl = `/api/planet/rendering-data`;
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch planet data');
      }

      const planetApiData = result.planet_data;
      const timingApiData = result.timing;
      const renderingApiData = result.rendering_data; // 🚀 NEW: Use translated rendering data
      
      const data: PlanetRenderingData = {
        // Use translated planet_info from Python translator
        planet_info: renderingApiData?.planet_info || {
          name: planetApiData.name,
          type: planetApiData.planet_type,
          base_color: '#808080',
          radius: planetApiData.diameter / 15000
        },
        // Add all translated data from Python
        surface_elements: renderingApiData?.surface_elements,
        atmosphere: renderingApiData?.atmosphere,
        rings: renderingApiData?.rings,
        effects_3d: renderingApiData?.effects_3d,
        shader_uniforms: renderingApiData?.shader_uniforms,
        universal_actions: renderingApiData?.universal_actions,
        timing: {
          cosmic_origin_time: timingApiData.cosmic_origin_time,
          current_time_seconds: timingApiData.current_time_seconds,
          elapsed_time: timingApiData.elapsed_time,
          initial_orbital_angle: planetApiData.initial_orbital_angle,
          current_orbital_angle: planetApiData.current_orbital_angle,
          max_orbital_radius: timingApiData.max_orbital_radius,
          system_max_orbital_radius: planetApiData.system_max_orbital_radius
        },
        original_planet_data: planetApiData
      };
      setRenderingData(data);
      
      renderingDataRef.current = data;
      

      EffectsLogger.log('API data loaded successfully', {
        planet: data.planet_info.name,
        type: data.planet_info.type,
        hasEffects: !!data.surface_elements,
        fullRenderingData: renderingApiData  // 🚀 DEBUG: Log full rendering data
      });
      
      // 🚀 DEBUG: Also log here for the full load function
      console.log('🌍 Full Load - API Response:', result);
      console.log('🎨 Full Load - Rendering Data:', renderingApiData);
      console.log('🔧 Full Load - Processed Data:', data);

      updateLightingWithRealData(data);
      if (orbitLineRef.current && sceneRef.current) {
        sceneRef.current.remove(orbitLineRef.current);
        orbitLineRef.current.geometry.dispose();
        (orbitLineRef.current.material as THREE.LineBasicMaterial).dispose();
        orbitLineRef.current = null;
      }
      createOrbitLine(sceneRef.current!, data);

      // Apply modular effects using the 3DEffects system
      await applyProceduralShadersFromAPI(data);
      
      // 🎨 Apply base color only as fallback if no effects changed material
      updatePlanetMaterialWithAPIData(data);

      // Callback opcional
      if (onDataLoaded) {
        onDataLoaded(data);
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      
      if (onError) {
        onError(errorMessage);
      }

      applyFallbackEffects();
    } finally {
      setLoading(false);
      (window as any).isLoadingPlanetData = false;
    }
  }, [planetName, planetData, cosmicOriginTime, initialAngleRotation]);

  /**
   * Actualizar SOLO la posición del planeta con los datos correctos de la API
   */
  const updatePlanetPositionWithAPIData = useCallback(() => {
    if (!renderingData || !planetMeshRef.current) {
      return;
    }
    const orbitalPeriod = planetData?.orbital_period_seconds || 365.25 * 24 * 3600;
    const angleVelocityOrbit = (2 * Math.PI) / orbitalPeriod;
    const initialOrbitalAngle = renderingData.timing?.initial_orbital_angle || 0;
    
    const realCurrentTime = Date.now() / 1000;
    const timeOffset = 0;
    const baseCosmicOriginTime = cosmicOriginTime || renderingData.timing?.cosmic_origin_time || (Date.now() / 1000 - 3600);
    const currentTimeSystem = realCurrentTime - baseCosmicOriginTime + timeOffset;
    const angleOrbit = (initialOrbitalAngle + currentTimeSystem * angleVelocityOrbit) % (2 * Math.PI);
    
    const systemMaxOrbitalRadius = renderingData.timing?.max_orbital_radius || 100;
    const relativeRadius = renderingData.planet_info?.orbital_radius / systemMaxOrbitalRadius;
    const semiMajorAxis = 20 + relativeRadius * 80;
    const semiMinorAxis = semiMajorAxis;
    
    const planetX = semiMajorAxis * Math.cos(angleOrbit);
    const planetZ = semiMinorAxis * Math.sin(angleOrbit);
    
    planetMeshRef.current.position.x = planetX;
    planetMeshRef.current.position.z = planetZ;
    planetMeshRef.current.position.y = 0;
    
  }, [renderingData, planetData, cosmicOriginTime]);

  /**
   * Aplicar los datos ya cargados de la API a la escena ThreeJS
   */
  const applyAPIDataToScene = useCallback(async (apiData?: PlanetRenderingData) => {
    const dataToUse = apiData || renderingData;
    
    if (!dataToUse) {
      return;
    }

    if (!sceneRef.current) {
      return;
    }

    try {
      updateLightingWithRealData(dataToUse);
      if (orbitLineRef.current && sceneRef.current) {
        sceneRef.current.remove(orbitLineRef.current);
        orbitLineRef.current.geometry.dispose();
        (orbitLineRef.current.material as THREE.LineBasicMaterial).dispose();
        orbitLineRef.current = null;
      }
      createOrbitLine(sceneRef.current, dataToUse);

      await applyProceduralShadersFromAPI(dataToUse);
      
      // 🎨 Apply base color as fallback if no effects changed material
      updatePlanetMaterialWithAPIData(dataToUse);

    } catch (error) {
      applyFallbackEffects();
    }
  }, [renderingData]);

  // createEffectsFromData removed - now unified in applyProceduralShadersFromAPI

  /**
   * Aplicar efectos de emergencia usando el sistema modular
   */
  const applyFallbackEffects = () => {
    if (!sceneRef.current || !planetMeshRef.current) return;

    EffectsLogger.warn('Applying fallback effects for planet type:', planetData?.planet_type);

    try {
      // Limpiar efectos anteriores
      clearActiveEffects();

      // 🚀 Apply basic generic color as fallback (no hardcoding)
      if (planetMeshRef.current.material instanceof THREE.MeshStandardMaterial) {
        const fallbackColor = 0x666666; // Generic gray - API should provide real colors
        planetMeshRef.current.material.color.setHex(fallbackColor);
        console.log('⚠️ Applied fallback generic color - API should provide real colors');
      }

      // Try to create basic effects if the system is available
      try {
        const fallbackConfig = createPlanetEffectConfig('generic');
        
        const fallbackEffects = effectRegistry.createEffectsFromList(
          fallbackConfig,
          1, // planetRadius
          planetMeshRef.current
        );

        // Añadir efectos a la escena
        fallbackEffects.forEach(effect => {
          if (effect.effect.addToScene && sceneRef.current && planetMeshRef.current) {
            effect.effect.addToScene(sceneRef.current, planetMeshRef.current.position);
          }
        });

        activeEffectsRef.current = fallbackEffects;
        setEffects(fallbackEffects);
      } catch (effectError) {
        console.warn('Could not create fallback effects, using basic material only:', effectError);
      }
      
      updateStats();
    } catch (error) {
      EffectsLogger.error('Error applying fallback effects', error);
    }
  };

  /**
   * Limpiar efectos activos
   */
  const clearActiveEffects = () => {
    activeEffectsRef.current.forEach(effect => {
      try {
        if (effect.effect.dispose) {
          effect.effect.dispose();
        }
      } catch (error) {
      }
    });

    activeEffectsRef.current = [];
    setEffects([]);
  };



  /**
   * Bucle de animación principal
   */
  const animate = useCallback(() => {
    frameIdRef.current = requestAnimationFrame(animate);

    const currentTime = performance.now();
    const deltaTime = clockRef.current.getDelta();

    // Actualizar controles
    if (controlsRef.current) {
      controlsRef.current.update();
    }

    try {
      effectRegistry.updateAllEffects(deltaTime, planetMeshRef.current?.rotation.y);
    } catch (error) {
    }

    if (planetMeshRef.current && renderingDataRef.current) {
      const currentPlanetName = renderingDataRef.current.planet_info?.name || planetName;
      
      const apiData = renderingDataRef.current.original_planet_data;
      const orbitalPeriod = apiData?.orbital_period_seconds || 365.25 * 24 * 3600;
      
      const initialOrbitalAngle = renderingDataRef.current.timing?.initial_orbital_angle || 0;
      
      const currentCosmicOriginTime = cosmicOriginTime || renderingDataRef.current.timing?.cosmic_origin_time || Date.now() / 1000 - 3600;
      const axialTilt = apiData?.axial_tilt || 0;

      const angleVelocityOrbit = (2 * Math.PI) / orbitalPeriod;
      
      const angleOrbit = (initialOrbitalAngle + currentTimeRef.current * angleVelocityOrbit) % (2 * Math.PI);
      
      // Get system max orbital radius from API
      const systemMaxOrbitalRadius = renderingDataRef.current.timing?.max_orbital_radius || renderingDataRef.current.timing?.system_max_orbital_radius;
      const actualOrbitalRadius = apiData?.orbital_radius;
      
      if (!systemMaxOrbitalRadius || !actualOrbitalRadius) {
        return; // Wait for proper API data
      }
      
      const relativeOrbitRadius = actualOrbitalRadius / systemMaxOrbitalRadius;
      const scaleFactor = 80;
      const orbitRadius = 20 + relativeOrbitRadius * scaleFactor;
      
      const eccentricity = apiData?.eccentricity_factor || 0.1;
      const semiMajorAxis = orbitRadius;
      const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity);
      
      const planetX = semiMajorAxis * Math.cos(angleOrbit);
      const planetZ = semiMinorAxis * Math.sin(angleOrbit);
      
      planetMeshRef.current.position.x = planetX;
      planetMeshRef.current.position.z = planetZ;
      planetMeshRef.current.position.y = 0;
      
      if (controlsRef.current) {
        controlsRef.current.target.set(0, 0, 0);
      }
      
      const rotationPeriod = apiData?.rotation_period_seconds || 86400;
      const angleVelocityRotation = (2 * Math.PI) / rotationPeriod;
      planetMeshRef.current.rotation.y = (currentTimeRef.current * angleVelocityRotation) % (2 * Math.PI);
      
      planetMeshRef.current.rotation.z = axialTilt * (Math.PI / 180);
      
    }

    // Actualizar uniforms de shaders de los efectos activos
    activeEffectsRef.current.forEach(effectInstance => {
      if (effectInstance.effect.updateUniforms) {
        effectInstance.effect.updateUniforms(deltaTime);
      }
    });

    // Renderizar escena
    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      const renderStartTime = performance.now();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      const renderTime = performance.now() - renderStartTime;

      // Actualizar estadísticas cada 5 segundos para evitar spam
      if (currentTime - lastFrameTimeRef.current > 5000) {
        const frameRate = 1000 / (currentTime - lastFrameTimeRef.current);
        updateStats();
        setStats(prevStats => ({
          ...prevStats,
          frameRate: Math.round(frameRate),
          renderTime: Math.round(renderTime * 100) / 100
        }));
        lastFrameTimeRef.current = currentTime;
      }
    }
  }, []); // Sin dependencias para evitar recreación constante

  /**
   * Actualizar estadísticas de efectos
   */
  const updateStats = useCallback(() => {
    const registryStats = effectRegistry.getStats();
    setStats(prevStats => ({
      ...prevStats,
      activeEffects: registryStats.activeEffects,
      enabledEffects: registryStats.enabledEffects
    }));
  }, []);

  /**
   * Efecto de inicialización
   */
  useEffect(() => {
    let isMounted = true;
    
    // Resetear flags de debug cuando se monta el componente
    (window as any).tonnirLoggedInPlanet = false;
    (window as any).orbitChecked = false;
    (window as any).debugOrbitRadius = null;
    (window as any).debugSystemMaxRadius = null;
    (window as any).planetNameLogged = false;
    (window as any).timingDataLogged = false;
    (window as any).isLoadingPlanetData = false;
    (window as any).orbitalAngleSourceLogged = false;
    (window as any).orbitalAngleDebugged = false;
    (window as any).positionDebugged = false;
    (window as any).animationLoopDebugged = false;
    
    const initialize = async () => {
      try {
        if (!isMounted) return;
        
        const apiData = await loadPlanetDataOnly();
        
        if (!isMounted) return;
        
        if (!initializeThreeJS()) {
          if (isMounted) setError('Failed to initialize 3D renderer');
          return;
        }

        if (!isMounted) return;
        animate();
        
        if (mountRef.current && 'ResizeObserver' in window) {
          resizeObserverRef.current = new ResizeObserver(handleResize);
          resizeObserverRef.current.observe(mountRef.current);
        }
        
        window.addEventListener('resize', handleResize);
        
        if (!isMounted) return;
        if (apiData) {
          await applyAPIDataToScene(apiData);
        } else {
          applyFallbackEffects();
        }
      } catch (error) {
        if (isMounted) {
          setError(error instanceof Error ? error.message : 'Unknown initialization error');
        }
      }
    };

    initialize();

    // Cleanup
    return () => {
      isMounted = false;
      
      // Clear refs
      renderingDataRef.current = null;
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }

      // Cleanup resize observer
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      window.removeEventListener('resize', handleResize);

      clearActiveEffects();

      if (controlsRef.current) {
        controlsRef.current.dispose();
      }

      // Limpiar esfera del sol
      if (sunSphereRef.current && sceneRef.current) {
        sceneRef.current.remove(sunSphereRef.current);
        sunSphereRef.current.geometry.dispose();
        (sunSphereRef.current.material as THREE.MeshBasicMaterial).dispose();
        sunSphereRef.current = null;
      }

      // Limpiar línea orbital
      if (orbitLineRef.current && sceneRef.current) {
        sceneRef.current.remove(orbitLineRef.current);
        orbitLineRef.current.geometry.dispose();
        (orbitLineRef.current.material as THREE.LineBasicMaterial).dispose();
        orbitLineRef.current = null;
      }

      if (rendererRef.current && mountRef.current) {
        try {
          if (mountRef.current.contains(rendererRef.current.domElement)) {
            mountRef.current.removeChild(rendererRef.current.domElement);
          }
          rendererRef.current.dispose();
        } catch (error) {
        }
      }
    };
  }, []);

  /**
   * Efecto para actualizar estadísticas periódicamente
   */
  useEffect(() => {
    const interval = setInterval(() => {
      const registryStats = effectRegistry.getStats();
      setStats(prevStats => ({
        ...prevStats,
        activeEffects: registryStats.activeEffects,
        enabledEffects: registryStats.enabledEffects
      }));
    }, 10000); // Cada 10 segundos
    
    return () => clearInterval(interval);
  }, []);

  /**
   * Efecto para monitorear cuando renderingData se actualiza
   */
  useEffect(() => {
    if (renderingData) {
      if (sceneRef.current && planetMeshRef.current) {
        updatePlanetPositionWithAPIData();
      }
    }
  }, [renderingData, updatePlanetPositionWithAPIData]);

  /**
   * Hook de debug para los datos del planeta
   */
  useDebugPlanetData(renderingData);

  /**
   * Renderizado del componente
   */
  return (
    <div className={`relative ${containerClassName}`}>
      {/* Componente de debug visual (solo si está habilitado) */}
      {showDebugInfo && renderingData && (
        <DebugPlanetData 
          planetData={renderingData} 
          showInPage={true}
          showInConsole={true}
        />
      )}
      
      <div 
        ref={mountRef} 
        className="w-full h-full"
        style={{ minHeight: '300px', aspectRatio: '1' }}
      />
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            <div>Loading planet...</div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {renderingData && !loading && (
        <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs">
          <h3 className="text-lg font-bold">{renderingData.planet_info.name}</h3>
          <p className="text-sm opacity-80">{renderingData.planet_info.type}</p>
          <p className="text-xs mt-1 opacity-60">
            {effects.length} effects active
          </p>
          {renderingData.surface_elements?.description && (
            <p className="text-xs mt-2 opacity-60">
              {renderingData.surface_elements.description.appearance}
            </p>
          )}
        </div>
      )}

      {showDebugInfo && (
        <div className="absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono">
          <h4 className="font-bold mb-2">Debug Info</h4>
          <div>Frame Rate: {stats.frameRate} FPS</div>
          <div>Render Time: {stats.renderTime}ms</div>
          <div>Active Effects: {stats.activeEffects}</div>
          <div>Enabled Effects: {stats.enabledEffects}</div>
          <div className="mt-2">
            <div className="font-semibold">Effects:</div>
            {effects.map((effect) => (
              <div key={effect.id} className="ml-2">
                {effect.type} ({effect.enabled ? 'ON' : 'OFF'})
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente de ejemplo para uso inmediato
export const ExampleModularPlanet: React.FC<{ planetName?: string }> = ({ 
  planetName = "metallic_test_planet" 
}) => {
  return (
    <div className="w-full h-screen bg-gray-900">
      <ModularPlanetRenderer
        planetName={planetName}
        containerClassName="w-full h-full"
        autoRotate={true}
        enableControls={true}
        showDebugInfo={true}
        onDataLoaded={(data) => {
        }}
        onEffectsCreated={(effects) => {
        }}
        onError={(error) => {
          console.error('❌ Planet renderer error:', error);
        }}
      />
    </div>
  );
};