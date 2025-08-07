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
    name?: string; // AÑADIDO: nombre del planeta
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
  original_planet_data?: any; // 🚀 NEW: Keep original API data
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
  
  // 🎯 CRITICAL FIX: Add currentTimeRef like System View (línea 41)
  const currentTimeRef = useRef<number>(0);
  
  // 🎯 CRITICAL FIX: Add renderingDataRef to persist data across renders in animation loop
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
  
  // 🎯 CRITICAL FIX: Add time calculation like System View (líneas 43-57)
  const realCurrentTime = Math.floor(Date.now() / 1000);
  const [timeOffset, setTimeOffset] = useState(0);
  const baseCosmicOriginTime = cosmicOriginTime || renderingData?.timing?.cosmic_origin_time || (Date.now() / 1000 - 3600);
  const currentTime = realCurrentTime - baseCosmicOriginTime + timeOffset;
  
  // Update currentTimeRef like System View (línea 57)
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
    console.log('🔧 initializeThreeJS called with renderingData:', {
      hasRenderingData: !!renderingData,
      initial_orbital_angle: renderingData?.timing?.initial_orbital_angle
    });
    
    if (!mountRef.current) {
      return false;
    }

    try {
      // Limpiar contenido anterior
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
      
      // 🧹 Limpiar referencias para la re-inicialización
      console.log('🔧 Clearing references...');
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      planetMeshRef.current = null;
      orbitLineRef.current = null;
      
      // Reset debug flags
      (window as any).orbitalCalculationLogged = false;
      
      console.log('🔧 References cleared');

      // Obtener dimensiones del contenedor de forma responsive
      const container = mountRef.current;
      const containerWidth = container.clientWidth || width || 400;
      const containerHeight = container.clientHeight || height || 400;
      
      // Crear escena
      console.log('🔧 Creating scene...');
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000511);
      sceneRef.current = scene;
      console.log('🔧 Scene created');

      // Configurar cámara - EXACTAMENTE IGUAL que SolarSystem3DViewer.tsx línea 212-214
      const camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 10000);
      // 🎯 CRITICAL FIX: Use EXACT same camera position as System View
      camera.position.set(0, 80, 120); // EXACT same as SolarSystem3DViewer.tsx
      camera.lookAt(0, 0, 0); // Same as System view
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

      // Configurar iluminación básica inicial (se actualizará cuando lleguen datos de la API)
      setupLighting(scene, null); // null = usar iluminación por defecto temporal

      // Crear planeta base
      console.log('🔧 Creating base planet...');
      createBasePlanet(scene);
      console.log('🔧 Base planet created. planetMeshRef.current:', !!planetMeshRef.current);

      // Configurar controles si están habilitados (autoRotate desactivado)
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
    // ⚠️ VERIFICAR DATOS CRÍTICOS
    if (!planetData) {
      console.error('❌ calculateSunAngle: NO planetData provided!');
      return 0;
    }
    
    // Si Python envía sun_angle explícitamente, usarlo
    const explicitSunAngle = planetData.sun_angle || planetData.lighting?.sun_angle;
    if (explicitSunAngle !== undefined) {
      return explicitSunAngle;
    }
    
    // 🚀 FIXED: Use current_orbital_angle from API
    const orbitalAngle = planetData.timing?.current_orbital_angle || planetData.timing?.orbital_angle;
    if (orbitalAngle === undefined || orbitalAngle === null) {
      console.error('❌ CRITICAL: orbital_angle missing for planet:', planetData.planet_info?.name);
      console.error('   Full timing data:', planetData.timing);
      return 0; // Valor por defecto problemático
    }
    
    const sunAngle = orbitalAngle;
    
    
    return sunAngle;
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
      console.error('❌ Cannot update lighting: missing light references');
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
    // Si no tenemos datos del planeta aún, no crear la línea orbital
    if (!planetData?.orbital_radius) {
      console.warn('⚠️ No orbital_radius data for orbit line');
      return;
    }
    
    // CRÍTICO: Solo usar el max_orbital_radius del backend, nunca fallback
    const systemMaxOrbitalRadius = renderingData?.timing?.max_orbital_radius;
    
    if (!systemMaxOrbitalRadius) {
      console.warn('⚠️ No max_orbital_radius from backend, skipping orbit line');
      return;
    }
    
    const relativeOrbitRadius = planetData.orbital_radius / systemMaxOrbitalRadius;
    const scaleFactor = 80; // Mismo factor de escala que SolarSystem3DViewer
    const orbitalRadius = 20 + relativeOrbitRadius * scaleFactor; // Mismo cálculo que SolarSystem3DViewer
    
    // Guardar el radio calculado globalmente para verificar consistencia
    (window as any).debugOrbitRadius = orbitalRadius;
    (window as any).debugSystemMaxRadius = systemMaxOrbitalRadius;
    console.log(`✅ Orbit line created at radius: ${orbitalRadius.toFixed(2)} (max_system: ${systemMaxOrbitalRadius})`);
    
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
    // Crear una esfera brillante que representa el sol - escalado como en SolarSystem3DViewer
    // En SolarSystem3DViewer: starRadius = parseFloat(star.Size) * 3
    // Asumimos un tamaño típico de estrella de 1.0 por defecto
    const sunRadius = 3; // Mismo que SolarSystem3DViewer con Size=1.0
    const sunGeometry = new THREE.SphereGeometry(sunRadius, 32, 32);
    
    // Material emisivo brillante para simular el sol
    const sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xFFFF44, // Amarillo brillante
      transparent: false,
      opacity: 1.0
    });
    
    const sunSphere = new THREE.Mesh(sunGeometry, sunMaterial);
    sunSphere.position.set(0, 0, 0); // En el centro de la escena
    
    // Añadir glow effect al sol
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
    // Crear el sol en el centro de la escena SIEMPRE
    createSunSphere(scene);
    
    // NO crear la línea orbital aquí - esperaremos a tener los datos correctos
    
    // Si no hay datos, usar iluminación por defecto temporal
    if (!planetData) {
      const defaultSunLight = new THREE.DirectionalLight(0xffffff, 2.0);
      defaultSunLight.position.set(10, 0, 0); // Por defecto desde la derecha
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

    // Calcular posición real del sol basándose en datos de Python
    const sunAngle = calculateSunAngle(planetData);
    const sunDistance = 10;
    
    const actualSunAngle = sunAngle + Math.PI; // Sol está en dirección OPUESTA
    
    // Luz principal (sol) en dirección OPUESTA a donde apunta la línea amarilla
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    // Calcular posición 3D de la luz considerando variación vertical
    // Usar el orbital_angle para variar la altura (componente Y) - DRAMÁTICO para que sea visible
    const orbitalVariationY = Math.sin(sunAngle) * 5; // Variación MÁS DRAMÁTICA en Y
    
    const sunX = sunDistance * Math.cos(actualSunAngle);
    const sunY = orbitalVariationY; // Ya no fijo en 0
    const sunZ = sunDistance * Math.sin(actualSunAngle);
    
    sunLight.position.set(sunX, sunY, sunZ);
    sunLight.target.position.set(0, 0, 0);
    scene.add(sunLight.target);
    setupShadowProperties(sunLight);
    scene.add(sunLight);
    sunLightRef.current = sunLight;
    

    // Luz de relleno MUY sutil
    const fillLight = new THREE.DirectionalLight(0x4466ff, 0.05);
    fillLight.position.set(-sunX * 0.5, 0, -sunZ * 0.5);
    scene.add(fillLight);
    fillLightRef.current = fillLight;

    // Luz ambiental MUY suave para hacer las sombras más evidentes
    if (!scene.children.find(child => child instanceof THREE.AmbientLight)) {
      const ambientLight = new THREE.AmbientLight(0x222244, 0.1);
      scene.add(ambientLight);
    }

  };


  /**
   * Crear planeta base genérico
   */
  const createBasePlanet = (scene: THREE.Scene) => {
    // Tamaño del planeta basado en el diámetro real
    const basePlanetRadius = planetData?.diameter ? planetData.diameter / 15000 : 1;
    const planetRadius = Math.max(Math.min(basePlanetRadius, 4.0), 1.5); // Mismo cálculo que SolarSystem3DViewer
    
    const planetGeometry = new THREE.SphereGeometry(planetRadius, 128, 64);
    // Usar material básico temporalmente para verificar iluminación
    const planetMaterial = new THREE.MeshStandardMaterial({
      color: 0x808080,
      metalness: 0.1,
      roughness: 0.8,
      // Asegurar que responde a la luz direccional
      transparent: false,
      opacity: 1.0
    });

    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    planetMesh.castShadow = true;
    planetMesh.receiveShadow = true;
    
    // Posición inicial temporal - será actualizada cuando lleguen los datos reales
    // Por ahora, colocar en una posición media típica
    planetMesh.position.set(50, 0, 0); // Posición temporal hasta que animate() la actualice
    
    scene.add(planetMesh);
    planetMeshRef.current = planetMesh;
    
  };

  /**
   * Configurar controles orbitales
   */
  const setupControls = (camera: THREE.PerspectiveCamera, domElement: HTMLElement) => {
    const controls = new OrbitControls(camera, domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 50; // 🚀 FIXED: Allow closer zoom but not too close to planet orbit
    controls.maxDistance = 800; // 🚀 FIXED: Allow zooming out to see entire system
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.1; // Más lento para no interferir visualmente con rotación del planeta
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.target.set(0, 0, 0); // Mirar al centro donde está el sol
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
    console.log('🚀 loadPlanetDataOnly called with planetName:', planetName);
    
    // Prevenir llamadas múltiples
    if ((window as any).isLoadingPlanetData) {
      console.log('⚠️ Already loading planet data, skipping...');
      return;
    }
    (window as any).isLoadingPlanetData = true;
    
    try {
      setLoading(true);
      setError(null);

      // Frontend now uses modular effects system - load from API
      EffectsLogger.log('Loading planet data from API', { planetName });

      // DEBUG: Mostrar la URL que se va a fetchar
      const apiUrl = `/api/planet/rendering-data`;
      console.log('🔗 Fetching API URL:', apiUrl);

      // Cargar desde API para datos procedurales específicos
      console.log('⏳ Starting fetch...');
      const response = await fetch(apiUrl);
      console.log('📡 Fetch completed, status:', response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('📄 Parsing JSON...');
      const result = await response.json();
      console.log('✅ JSON parsed, success:', result.success);

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch planet data');
      }

      // 🚀 NEW: Transform API data to expected format
      const planetApiData = result.planet_data;
      const timingApiData = result.timing;
      
      // Convert API response to expected PlanetRenderingData format
      const data: PlanetRenderingData = {
        planet_info: {
          name: planetApiData.name,
          type: planetApiData.planet_type,
          base_color: '#808080', // Default, will be overridden by effects
          radius: planetApiData.diameter / 15000 // Convert to render scale
        },
        timing: {
          cosmic_origin_time: timingApiData.cosmic_origin_time,
          current_time_seconds: timingApiData.current_time_seconds,
          elapsed_time: timingApiData.elapsed_time,
          initial_orbital_angle: planetApiData.initial_orbital_angle,
          current_orbital_angle: planetApiData.current_orbital_angle,
          max_orbital_radius: timingApiData.max_orbital_radius,
          system_max_orbital_radius: planetApiData.system_max_orbital_radius
        },
        // Keep original API data for backwards compatibility with effects
        original_planet_data: planetApiData
      };
      setRenderingData(data);
      
      // 🎯 CRITICAL FIX: Update renderingDataRef so animation loop can access it
      renderingDataRef.current = data;
      
      console.log('💾 setRenderingData called with:', {
        planet_info: data.planet_info,
        timing: data.timing,
        hasTimingData: !!data.timing,
        initial_orbital_angle: data.timing?.initial_orbital_angle
      });

      EffectsLogger.log('API data loaded successfully', {
        planet: data.planet_info.name,
        type: data.planet_info.type,
        hasEffects: !!data.surface_elements
      });

      // Callback opcional
      if (onDataLoaded) {
        onDataLoaded(data);
      }

      // Retornar los datos para uso inmediato
      return data;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('❌ Error loading planet data:', errorMessage);
      console.error('❌ Full error object:', error);
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
    console.log('🚀 loadPlanetData called with planetName:', planetName);
    
    // Prevenir llamadas múltiples
    if ((window as any).isLoadingPlanetData) {
      console.log('⚠️ Already loading planet data, skipping...');
      return;
    }
    (window as any).isLoadingPlanetData = true;
    
    try {
      setLoading(true);
      setError(null);

      // Frontend now uses modular effects system - load from API
      EffectsLogger.log('Loading planet data from API', { planetName });

      // DEBUG: Mostrar la URL que se va a fetchar
      const apiUrl = `/api/planet/rendering-data`;
      console.log('🔗 Fetching API URL:', apiUrl);

      // Cargar desde API para datos procedurales específicos
      console.log('⏳ Starting fetch...');
      const response = await fetch(apiUrl);
      console.log('📡 Fetch completed, status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('📄 Parsing JSON...');
      const result = await response.json();
      console.log('✅ JSON parsed, success:', result.success);
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch planet data');
      }

      // 🚀 NEW: Transform API data to expected format
      const planetApiData = result.planet_data;
      const timingApiData = result.timing;
      
      // Convert API response to expected PlanetRenderingData format
      const data: PlanetRenderingData = {
        planet_info: {
          name: planetApiData.name,
          type: planetApiData.planet_type,
          base_color: '#808080', // Default, will be overridden by effects
          radius: planetApiData.diameter / 15000 // Convert to render scale
        },
        timing: {
          cosmic_origin_time: timingApiData.cosmic_origin_time,
          current_time_seconds: timingApiData.current_time_seconds,
          elapsed_time: timingApiData.elapsed_time,
          initial_orbital_angle: planetApiData.initial_orbital_angle,
          current_orbital_angle: planetApiData.current_orbital_angle,
          max_orbital_radius: timingApiData.max_orbital_radius,
          system_max_orbital_radius: planetApiData.system_max_orbital_radius
        },
        // Keep original API data for backwards compatibility with effects
        original_planet_data: planetApiData
      };
      setRenderingData(data);
      
      // 🎯 CRITICAL FIX: Update renderingDataRef so animation loop can access it
      renderingDataRef.current = data;
      
      console.log('💾 setRenderingData called with:', {
        planet_info: data.planet_info,
        timing: data.timing,
        hasTimingData: !!data.timing,
        initial_orbital_angle: data.timing?.initial_orbital_angle
      });

      EffectsLogger.log('API data loaded successfully', {
        planet: data.planet_info.name,
        type: data.planet_info.type,
        hasEffects: !!data.surface_elements
      });

      // 🔄 ACTUALIZAR ILUMINACIÓN con datos reales de la API
      updateLightingWithRealData(data);
      
      // 🔄 ACTUALIZAR LÍNEA ORBITAL con el max_orbital_radius correcto del sistema
      // Primero eliminar la línea orbital anterior si existe
      if (orbitLineRef.current && sceneRef.current) {
        sceneRef.current.remove(orbitLineRef.current);
        orbitLineRef.current.geometry.dispose();
        (orbitLineRef.current.material as THREE.LineBasicMaterial).dispose();
        orbitLineRef.current = null;
      }
      // Crear nueva línea orbital con los datos correctos
      createOrbitLine(sceneRef.current!, data);

      // Apply modular effects using the 3DEffects system
      await applyProceduralShadersFromAPI(data);

      // Callback opcional
      if (onDataLoaded) {
        onDataLoaded(data);
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('❌ Error loading planet data:', errorMessage);
      console.error('❌ Full error object:', error);
      setError(errorMessage);
      
      if (onError) {
        onError(errorMessage);
      }

      // Aplicar efectos por defecto en caso de error
      applyFallbackEffects();
    } finally {
      setLoading(false);
      (window as any).isLoadingPlanetData = false;
    }
  }, [planetName, planetData, cosmicOriginTime, initialAngleRotation]); // Solo props esenciales

  /**
   * Actualizar SOLO la posición del planeta con los datos correctos de la API
   */
  const updatePlanetPositionWithAPIData = useCallback(() => {
    if (!renderingData || !planetMeshRef.current) {
      console.log('⚠️ Cannot update planet position: missing renderingData or planetMesh');
      return;
    }

    // 🎯 COPIAR EXACTO de SolarSystem3DViewer.tsx líneas 404-407
    const orbitalPeriod = planetData?.orbital_period_seconds || 365.25 * 24 * 3600;
    const angleVelocityOrbit = (2 * Math.PI) / orbitalPeriod;
    const initialOrbitalAngle = renderingData.timing?.initial_orbital_angle || 0;
    
    // ⚡ EXACTO: Replicar currentTimeRef.current de System view
    const realCurrentTime = Date.now() / 1000;
    const timeOffset = 0; // System view usa slider, nosotros 0
    const baseCosmicOriginTime = cosmicOriginTime || renderingData.timing?.cosmic_origin_time || (Date.now() / 1000 - 3600);
    const currentTimeSystem = realCurrentTime - baseCosmicOriginTime + timeOffset;
    
    // 🎯 LÍNEA 407 EXACTA: const angleOrbit = (planet.initial_orbital_angle + currentTimeRef.current * angleVelocityOrbit) % (2 * Math.PI);
    const angleOrbit = (initialOrbitalAngle + currentTimeSystem * angleVelocityOrbit) % (2 * Math.PI);
    
    // ⚡ EXACTO: Calcular semiMajorAxis y semiMinorAxis como System view
    const systemMaxOrbitalRadius = renderingData.timing?.max_orbital_radius || 100;
    const relativeRadius = renderingData.planet_info?.orbital_radius / systemMaxOrbitalRadius;
    const semiMajorAxis = 20 + relativeRadius * 80; // Mismo cálculo que System
    const semiMinorAxis = semiMajorAxis; // Sin elipse por ahora
    
    // 🎯 LÍNEAS 409-411 EXACTAS:
    // planetMesh.position.x = semiMajorAxis * Math.cos(angleOrbit);
    // planetMesh.position.z = semiMinorAxis * Math.sin(angleOrbit); 
    const planetX = semiMajorAxis * Math.cos(angleOrbit);
    const planetZ = semiMinorAxis * Math.sin(angleOrbit);
    
    // ACTUALIZAR POSICIÓN del planeta
    planetMeshRef.current.position.x = planetX;
    planetMeshRef.current.position.z = planetZ;
    planetMeshRef.current.position.y = 0;
    
    // 🚀 DISABLED: Don't follow planet - keep camera centered on sun for System view comparison
    // (Camera will be controlled by OrbitControls instead)
    
    console.log('✅ Planet position updated with API data:', {
      name: renderingData.planet_info?.name,
      initial_orbital_angle: initialOrbitalAngle,
      angleOrbit: angleOrbit,
      position: { x: planetX.toFixed(2), z: planetZ.toFixed(2) },
      source: 'API renderingData'
    });
    
  }, [renderingData, planetData, cosmicOriginTime]);

  /**
   * Aplicar los datos ya cargados de la API a la escena ThreeJS
   */
  const applyAPIDataToScene = useCallback(async (apiData?: PlanetRenderingData) => {
    console.log('🎨 applyAPIDataToScene called');
    
    // Usar apiData pasado como parámetro o renderingData del state
    const dataToUse = apiData || renderingData;
    
    if (!dataToUse) {
      console.log('⚠️ No rendering data available, skipping scene application');
      return;
    }

    if (!sceneRef.current) {
      console.log('⚠️ No scene available, skipping scene application');
      return;
    }

    try {
      console.log('🔧 Applying API data to scene:', {
        planet: dataToUse.planet_info.name,
        initial_orbital_angle: dataToUse.timing?.initial_orbital_angle,
        max_orbital_radius: dataToUse.timing?.max_orbital_radius
      });

      // 🔄 ACTUALIZAR ILUMINACIÓN con datos reales de la API
      updateLightingWithRealData(dataToUse);
      
      // 🔄 ACTUALIZAR LÍNEA ORBITAL con el max_orbital_radius correcto del sistema
      // Primero eliminar la línea orbital anterior si existe
      if (orbitLineRef.current && sceneRef.current) {
        sceneRef.current.remove(orbitLineRef.current);
        orbitLineRef.current.geometry.dispose();
        (orbitLineRef.current.material as THREE.LineBasicMaterial).dispose();
        orbitLineRef.current = null;
      }
      // Crear nueva línea orbital con los datos correctos
      createOrbitLine(sceneRef.current, dataToUse);
      
      // 🎯 DEBUG: Compare Planet vs System API data
      if (!(window as any).comparedAPIs) {
        compareAPIsData();
        (window as any).comparedAPIs = true;
      }
      
      // 🌟 NEW: Draw ALL planets for comparison with System view  
      if ((window as any).systemPlanetsData) {
        drawAllPlanets(sceneRef.current);
      }

      // Apply modular effects using the 3DEffects system
      await applyProceduralShadersFromAPI(dataToUse);

    } catch (error) {
      console.error('❌ Error applying API data to scene:', error);
      // Aplicar efectos por defecto en caso de error
      applyFallbackEffects();
    }
  }, [renderingData]);

  // createEffectsFromData removed - now unified in applyProceduralShadersFromAPI

  /**
   * Aplicar efectos de emergencia usando el sistema modular
   */
  const applyFallbackEffects = () => {
    if (!sceneRef.current || !planetMeshRef.current) return;

    EffectsLogger.warn('Applying fallback effects');

    try {
      // Limpiar efectos anteriores
      clearActiveEffects();

      // Crear efectos básicos usando configuración por defecto
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
        console.error('Error disposing effect:', error);
      }
    });

    activeEffectsRef.current = [];
    setEffects([]);
  };

  /**
   * 🎯 DEBUG: Compare Planet vs System API responses
   */
  const compareAPIsData = async () => {
    try {
      console.log('🔍 COMPARING Planet API vs System API...');
      
      // Fetch Planet API
      const planetResponse = await fetch('/api/planet/rendering-data');
      const planetResult = await planetResponse.json();
      
      // Fetch System API
      const systemResponse = await fetch('/api/system/rendering-data');
      const systemResult = await systemResponse.json();
      
      if (planetResult.success && systemResult.success) {
        // Find our planet in system data
        const systemPlanet = systemResult.system_data.planets.find((p: any) => 
          p.name.toLowerCase() === planetName.toLowerCase()
        );
        
        const planetAPIData = {
          endpoint: '/api/planet/rendering-data',
          initial_orbital_angle: planetResult.planet_data?.initial_orbital_angle,
          orbital_radius: planetResult.planet_data?.orbital_radius,
          cosmic_origin_time: planetResult.timing?.cosmic_origin_time
        };
        
        const systemAPIData = {
          endpoint: '/api/system/rendering-data',
          initial_orbital_angle: systemPlanet?.initial_orbital_angle,
          orbital_radius: systemPlanet?.orbital_radius,
          cosmic_origin_time: systemResult.system_data?.timing?.cosmic_origin_time
        };
        
        const differences = {
          angle_diff: Math.abs((planetResult.planet_data?.initial_orbital_angle || 0) - (systemPlanet?.initial_orbital_angle || 0)),
          radius_diff: Math.abs((planetResult.planet_data?.orbital_radius || 0) - (systemPlanet?.orbital_radius || 0)),
          time_diff: Math.abs((planetResult.timing?.cosmic_origin_time || 0) - (systemResult.system_data?.timing?.cosmic_origin_time || 0))
        };
        
        console.log('🎯 API COMPARISON for', planetName);
        console.log('📊 Planet API:', planetAPIData);
        console.log('🌌 System API:', systemAPIData);  
        console.log('⚖️ Differences:', differences);
        
        // Store system data for planet rendering
        (window as any).systemPlanetsData = systemResult.system_data.planets;
        (window as any).systemTimingData = systemResult.system_data.timing;
      }
    } catch (error) {
      console.error('❌ Error comparing APIs:', error);
    }
  };

  /**
   * 🌟 NEW: Draw ALL planets like System view for comparison
   */
  const drawAllPlanets = (scene: THREE.Scene) => {
    const systemPlanets = (window as any).systemPlanetsData;
    const systemTiming = (window as any).systemTimingData;
    
    if (!systemPlanets || !systemTiming) {
      return;
    }
    
    console.log('🌟 Drawing ALL planets for comparison with System view:', systemPlanets.length);
    
    systemPlanets.forEach((planet: any, index: number) => {
      // Skip the main planet (it's already drawn)
      if (planet.name.toLowerCase() === planetName.toLowerCase()) {
        return;
      }
      
      // Create simple sphere for other planets
      const planetGeometry = new THREE.SphereGeometry(2, 16, 16);
      const planetMaterial = new THREE.MeshLambertMaterial({ 
        color: index % 2 === 0 ? 0x444444 : 0x666666 
      });
      const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
      
      // Calculate position exactly like System view
      const relativeOrbitRadius = planet.orbital_radius / systemTiming.max_orbital_radius;
      const scaleFactor = 80;
      const orbitalRadius = 20 + relativeOrbitRadius * scaleFactor;
      
      const realCurrentTime = Math.floor(Date.now() / 1000);
      const currentTime = realCurrentTime - systemTiming.cosmic_origin_time;
      const angleVelocityOrbit = (2 * Math.PI) / planet.orbital_period_seconds;
      const angleOrbit = (planet.initial_orbital_angle + currentTime * angleVelocityOrbit) % (2 * Math.PI);
      
      const planetX = orbitalRadius * Math.cos(angleOrbit);
      const planetZ = orbitalRadius * Math.sin(angleOrbit);
      
      planetMesh.position.set(planetX, 0, planetZ);
      planetMesh.name = `comparison-planet-${planet.name}`;
      scene.add(planetMesh);
      
      console.log(`🪐 Added comparison planet ${planet.name} at (${planetX.toFixed(2)}, 0, ${planetZ.toFixed(2)})`);
    });
    
    // 🎯 SPECIAL: Draw EXACT marker for Tonnir using System view calculation
    const tonnirPlanet = systemPlanets.find((p: any) => p.name.toLowerCase().includes('tonnir'));
    if (tonnirPlanet) {
      // Use EXACT same calculation as System view logs show
      const systemCurrentTime = 1240487644; // From System view log: "currentTime": "1240487644"
      const systemAngleVelocity = (2 * Math.PI) / tonnirPlanet.orbital_period_seconds;
      const systemAngleOrbit = (tonnirPlanet.initial_orbital_angle + systemCurrentTime * systemAngleVelocity) % (2 * Math.PI);
      
      const systemRelativeRadius = tonnirPlanet.orbital_radius / systemTiming.max_orbital_radius;
      const systemScaleFactor = 80;
      const systemOrbitalRadius = 20 + systemRelativeRadius * systemScaleFactor;
      
      const systemX = systemOrbitalRadius * Math.cos(systemAngleOrbit);
      const systemZ = systemOrbitalRadius * Math.sin(systemAngleOrbit);
      
      // Create a BRIGHT RED marker for exact System position
      const systemMarkerGeometry = new THREE.SphereGeometry(3, 16, 16);
      const systemMarkerMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
      const systemMarker = new THREE.Mesh(systemMarkerGeometry, systemMarkerMaterial);
      systemMarker.position.set(systemX, 0, systemZ);
      systemMarker.name = 'SYSTEM-EXACT-POSITION';
      scene.add(systemMarker);
      
      console.log('🔴 SYSTEM EXACT MARKER placed at:', {
        name: tonnirPlanet.name,
        systemCurrentTime,
        systemAngleOrbit: (systemAngleOrbit * 180 / Math.PI).toFixed(2) + '°',
        systemPosition: { x: systemX.toFixed(2), z: systemZ.toFixed(2) }
      });
    }
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

    // Actualizar efectos activos
    try {
      effectRegistry.updateAllEffects(deltaTime, planetMeshRef.current?.rotation.y);
    } catch (error) {
      console.error('Error updating effects:', error);
    }

    // Rotación y POSICIÓN ORBITAL del planeta REAL - Misma lógica que SolarSystem3DViewer.tsx
    
    // 🔍 DEBUG: Check animation loop conditions
    if (!(window as any).animationLoopDebugged) {
      console.log('🔄 ANIMATION LOOP DEBUG:', {
        hasPlanetMesh: !!planetMeshRef.current,
        hasRenderingData: !!renderingDataRef.current,
        renderingDataType: typeof renderingDataRef.current,
        renderingDataKeys: renderingDataRef.current ? Object.keys(renderingDataRef.current) : 'null'
      });
      (window as any).animationLoopDebugged = true;
    }
    
    // 🎯 CRITICAL: Only proceed if we have API data ready - Use renderingDataRef.current
    if (planetMeshRef.current && renderingDataRef.current) {
      // Get planet name first - MOVED UP to fix reference error
      const currentPlanetName = renderingDataRef.current.planet_info?.name || planetName;
      
      // 🚀 Use API data directly from renderingDataRef - simplified
      const apiData = renderingDataRef.current.original_planet_data;
      const orbitalPeriod = apiData?.orbital_period_seconds || 365.25 * 24 * 3600;
      
      // 🎯 CRITICAL: Get initial_orbital_angle from timing (this was the bug!)
      const initialOrbitalAngle = renderingDataRef.current.timing?.initial_orbital_angle || 0;
      
      const currentCosmicOriginTime = cosmicOriginTime || renderingDataRef.current.timing?.cosmic_origin_time || Date.now() / 1000 - 3600;
      const axialTilt = apiData?.axial_tilt || 0;

      // 🎯 USE API DATA properly like System View
      // System View calculates exactly like this (orbitalPeriod already declared above)
      const angleVelocityOrbit = (2 * Math.PI) / orbitalPeriod;
      
      // 🔍 CRITICAL: Debug the initial_orbital_angle issue and position
      if (currentPlanetName.toLowerCase().includes('tonnir') && !(window as any).orbitalAngleDebugged) {
        console.log('🔍 DEBUGGING initial_orbital_angle:', {
          'from_timing': renderingDataRef.current.timing?.initial_orbital_angle,
          'from_apiData': apiData?.initial_orbital_angle,  
          'currentUsed': initialOrbitalAngle,
          'timing_full': renderingDataRef.current.timing
        });
        (window as any).orbitalAngleDebugged = true;
      }
      
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
      
      // Verificar que el radio coincida con el de la línea orbital (solo la primera vez)
      if ((window as any).debugOrbitRadius && !(window as any).orbitChecked) {
        const difference = Math.abs((window as any).debugOrbitRadius - orbitRadius);
        if (difference > 0.01) {
          console.error(`❌ CRITICAL: Planet not on orbit line! Difference: ${difference.toFixed(2)}`);
          console.log('Line radius:', (window as any).debugOrbitRadius, 'Planet radius:', orbitRadius);
          console.log('Max system radius - Line:', (window as any).debugSystemMaxRadius, 'Planet:', systemMaxOrbitalRadius);
        } else {
          console.log(`✅ Planet correctly orbiting at radius: ${orbitRadius.toFixed(2)}`);
        }
        (window as any).orbitChecked = true;
      }
      
      // 🎯 CRITICAL FIX: Use EXACT same calculation as System View
      // The issue is in our calculation - let's debug step by step
      
      // Calculate position exactly like System View
      const planetX = semiMajorAxis * Math.cos(angleOrbit);
      const planetZ = semiMinorAxis * Math.sin(angleOrbit);
      
      // 🎯 CRITICAL FIX: Use calculated position with corrected values
      // Now that we fixed the time and initial_orbital_angle, use the calculation
      planetMeshRef.current.position.x = planetX;
      planetMeshRef.current.position.z = planetZ;
      planetMeshRef.current.position.y = 0;
      
      // 🔍 DEBUG: Log planet position for visibility debugging
      if (currentPlanetName.toLowerCase().includes('tonnir') && !(window as any).positionDebugged) {
        console.log('🎯 PLANET POSITION DEBUG:', {
          planetPosition: { x: planetX.toFixed(2), y: 0, z: planetZ.toFixed(2) },
          orbitRadius: orbitRadius.toFixed(2),
          distanceFromOrigin: Math.sqrt(planetX*planetX + planetZ*planetZ).toFixed(2),
          cameraPosition: cameraRef.current ? { 
            x: cameraRef.current.position.x, 
            y: cameraRef.current.position.y, 
            z: cameraRef.current.position.z 
          } : 'no camera',
          angleOrbit: angleOrbit.toFixed(4),
          angleOrbitDegrees: (angleOrbit * 180 / Math.PI).toFixed(2) + '°'
        });
        (window as any).positionDebugged = true;
      }
      
      // 🎯 DEBUG: Add visual markers for comparison
      if (currentPlanetName.toLowerCase().includes('tonnir') && !(window as any).debugMarkersAdded && sceneRef.current) {
        
        // 🟢 GREEN marker for Planet view CALCULATED position (what we calculated)
        const planetMarkerGeometry = new THREE.SphereGeometry(4, 16, 16);
        const planetMarkerMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
        const planetMarker = new THREE.Mesh(planetMarkerGeometry, planetMarkerMaterial);
        planetMarker.position.set(planetX, 5, planetZ); // Show calculated position
        planetMarker.name = 'PLANET-VIEW-CALCULATED-POSITION';
        sceneRef.current.add(planetMarker);
        
        // 🔴 RED marker for EXACT System view calculation using same logged values
        // From System view logs: currentTime: 1240487644, position: x: "1.14", z: "99.07"
        const systemExactX = 1.14;
        const systemExactZ = 99.07;
        
        const systemMarkerGeometry = new THREE.SphereGeometry(5, 16, 16);
        const systemMarkerMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
        const systemMarker = new THREE.Mesh(systemMarkerGeometry, systemMarkerMaterial);
        systemMarker.position.set(systemExactX, 8, systemExactZ); // Higher for visibility
        systemMarker.name = 'SYSTEM-VIEW-POSITION';
        sceneRef.current.add(systemMarker);
        
        console.log('🟢 PLANET VIEW CALCULATED MARKER placed at:', {
          planetCurrentTime: currentTimeRef.current,
          planetAngleOrbit: (angleOrbit * 180 / Math.PI).toFixed(2) + '°',
          calculatedPosition: { x: planetX.toFixed(2), z: planetZ.toFixed(2) },
          actualPlanetPosition: { x: "1.14", z: "99.07" }
        });
        
        console.log('🔴 SYSTEM VIEW MARKER placed at:', {
          systemPosition: { x: systemExactX.toFixed(2), z: systemExactZ.toFixed(2) },
          source: 'From System view logged values'
        });
        
        (window as any).debugMarkersAdded = true;
      }
      
      // 🌟 SIMPLE FIX: Always keep OrbitControls target at sun center
      if (controlsRef.current) {
        controlsRef.current.target.set(0, 0, 0); // Always look at sun
        // Don't call update() here - let OrbitControls handle it naturally
      }
      
      // 🎯 DEBUG para Tonnir_MD-1420 - Log valores calculados vs System view
      const nameToCheck = currentPlanetName.toLowerCase();
      if (nameToCheck.includes('tonnir') && (nameToCheck.includes('md-1420') || nameToCheck.includes('md_1420'))) {
        // Solo loguear una vez
        if (!(window as any).tonnirLoggedInPlanet) {
          console.log('🔍 DETAILED CALCULATION COMPARISON:', {
            name: currentPlanetName,
            '=== INPUT VALUES ===': '---',
            // Raw input data
            orbital_radius: actualOrbitalRadius,
            system_max_orbital_radius: systemMaxOrbitalRadius,
            initial_orbital_angle: initialOrbitalAngle,
            orbital_period_seconds: orbitalPeriod,
            currentTimeRef: currentTimeRef.current,
            cosmic_origin_time: currentCosmicOriginTime,
            '=== INTERMEDIATE CALCULATIONS ===': '---',
            // Step by step calculations
            relativeOrbitRadius: (actualOrbitalRadius / systemMaxOrbitalRadius).toFixed(6),
            scaleFactor: scaleFactor,
            orbitRadius: orbitRadius.toFixed(6),
            angleVelocityOrbit: angleVelocityOrbit.toFixed(10),
            angleOrbit: angleOrbit.toFixed(6),
            angleOrbitDegrees: (angleOrbit * 180 / Math.PI).toFixed(2),
            eccentricity: eccentricity,
            semiMajorAxis: semiMajorAxis.toFixed(6),
            semiMinorAxis: semiMinorAxis.toFixed(6),
            '=== POSITION RESULTS ===': '---',
            // Final positions
            calculatedPosition: { x: planetX.toFixed(6), z: planetZ.toFixed(6) },
            expectedSystemPosition: { x: "1.14", z: "99.07" },
            // Error analysis
            calculationError: { 
              x: Math.abs(planetX - 1.14).toFixed(4), 
              z: Math.abs(planetZ - 99.07).toFixed(4) 
            },
            '=== SYSTEM VIEW COMPARISON ===': '---',
            systemViewCurrentTime: '1240487644', // From System logs
            ourCurrentTimeRef: currentTimeRef.current
          });
          (window as any).tonnirLoggedInPlanet = true;
        }
      }
      
      // ROTACIÓN del planeta sobre su propio eje - IGUAL que System View línea 515
      const rotationPeriod = apiData?.rotation_period_seconds || 86400; // 24 horas por defecto
      const angleVelocityRotation = (2 * Math.PI) / rotationPeriod;
      planetMeshRef.current.rotation.y = (currentTimeRef.current * angleVelocityRotation) % (2 * Math.PI);
      
      // Aplicar inclinación axial
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
        
        // 🚀 CAMBIO CRÍTICO: Primero cargar datos de la API, después montar ThreeJS
        console.log('🔄 Step 1: Loading planet data from API...');
        const apiData = await loadPlanetDataOnly(); // Nueva función que solo carga datos sin depender de la escena
        
        if (!isMounted) return;
        console.log('🔄 Step 2: Initializing ThreeJS with API data...');
        
        if (!initializeThreeJS()) {
          if (isMounted) setError('Failed to initialize 3D renderer');
          return;
        }

        if (!isMounted) return;
        console.log('🔄 Step 3: Starting animation...');
        animate();
        
        // Configurar resize observer para responsividad
        if (mountRef.current && 'ResizeObserver' in window) {
          resizeObserverRef.current = new ResizeObserver(handleResize);
          resizeObserverRef.current.observe(mountRef.current);
        }
        
        // Fallback: listener de resize de ventana
        window.addEventListener('resize', handleResize);
        
        if (!isMounted) return;
        console.log('🔄 Step 4: Applying API data to ThreeJS scene...');
        // 🚀 CRÍTICO: Pasar los datos directamente sin depender del state
        if (apiData) {
          await applyAPIDataToScene(apiData);
        } else {
          console.log('❌ No API data available, applying fallback');
          applyFallbackEffects();
        }
      } catch (error) {
        console.error('Error during ModularPlanetRenderer initialization:', error);
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
          console.error('Error during cleanup:', error);
        }
      }
    };
  }, []); // Sin dependencias para evitar re-ejecuciones

  // ❌ ELIMINADOS: useEffect adicionales que recargan datos para evitar conflictos
  // Ahora el flujo es: API primero → ThreeJS después → aplicar datos a la escena

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
  }, []); // Sin dependencias

  /**
   * Efecto para monitorear cuando renderingData se actualiza
   */
  useEffect(() => {
    if (renderingData) {
      console.log('🎯 renderingData updated:', {
        hasData: true,
        initial_orbital_angle: renderingData.timing?.initial_orbital_angle,
        planet_name: renderingData.planet_info?.name,
        planet_type: renderingData.planet_info?.type,
        max_orbital_radius: renderingData.timing?.max_orbital_radius
      });
      
      // 🚀 CRITICAL: Solo recalcular posición orbital cuando renderingData se actualiza
      if (sceneRef.current && planetMeshRef.current) {
        console.log('🔄 Recalculating planet position with updated renderingData...');
        updatePlanetPositionWithAPIData();
      }
    } else {
      console.log('🎯 renderingData is null/undefined');
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