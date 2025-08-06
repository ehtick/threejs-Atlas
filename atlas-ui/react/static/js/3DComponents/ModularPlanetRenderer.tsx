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
    diameter: number;
    density: number;
    gravity: number;
    mass: number;
    orbital_radius: number;
    rotation_period_seconds: number;
    surface_temperature: number;
    axial_tilt: number;
    planet_type: string;
    atmosphere: string;
    elements: string[];
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
  timing?: any;
  effects_3d?: any[];
  shader_uniforms?: any;
  universal_actions?: any[];
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

    console.log(`📐 Renderer resized to: ${containerWidth}x${containerHeight}`);
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

      // Obtener dimensiones del contenedor de forma responsive
      const container = mountRef.current;
      const containerWidth = container.clientWidth || width || 400;
      const containerHeight = container.clientHeight || height || 400;
      
      // Crear escena
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000511);
      sceneRef.current = scene;

      // Configurar cámara
      const camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 1000);
      camera.position.set(0, 0, 5);
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
      createBasePlanet(scene);

      // Configurar controles si están habilitados
      if (enableControls) {
        setupControls(camera, renderer.domElement);
      }

      return true;
    } catch (error) {
      console.error('Error initializing Three.js:', error);
      return false;
    }
  }, []); // Sin dependencias para evitar recreación

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
      console.log('✅ Using explicit sun_angle from Python:', explicitSunAngle);
      return explicitSunAngle;
    }
    
    // VERIFICAR que orbital_angle existe
    const orbitalAngle = planetData.timing?.orbital_angle;
    if (orbitalAngle === undefined || orbitalAngle === null) {
      console.error('❌ CRITICAL: orbital_angle missing for planet:', planetData.planet_info?.name);
      console.error('   Full timing data:', planetData.timing);
      return 0; // Valor por defecto problemático
    }
    
    const sunAngle = orbitalAngle;
    
    console.log('☀️ Sun angle calculated from orbital position:', {
      planetName: planetData.planet_info?.name,
      orbitalAngle: (orbitalAngle * 180 / Math.PI).toFixed(1) + '°',
      sunAngle: (sunAngle * 180 / Math.PI).toFixed(1) + '°',
      hasTimingData: !!planetData.timing,
      fullTimingKeys: planetData.timing ? Object.keys(planetData.timing) : 'NONE'
    });
    
    return sunAngle;
  };

  // Referencias para luces que necesitan ser actualizadas
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const fillLightRef = useRef<THREE.DirectionalLight | null>(null);

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

    console.log('🔄 UPDATING LIGHTING with real data from API...');
    
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

    console.log('✅ LIGHTING UPDATED with orbital_angle:', (sunAngle * 180 / Math.PI).toFixed(1) + '°');
  };

  /**
   * Configurar iluminación de la escena basada en datos reales de Python
   */
  const setupLighting = (scene: THREE.Scene, planetData?: any) => {
    // Si no hay datos, usar iluminación por defecto temporal
    if (!planetData) {
      console.log('⚠️ Setting up DEFAULT lighting (waiting for API data...)');
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
    
    const shadowAngle = sunAngle; // Línea amarilla apunta hacia aquí (SOMBRA)
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
    
    console.log('🔍 DEBUGGING ILLUMINATION:');
    console.log('   📡 Raw orbital_angle from Python:', (planetData.timing?.orbital_angle || 0) * 180 / Math.PI + '°');
    console.log('   🟡 Yellow line (shadow) points to:', (shadowAngle * 180 / Math.PI).toFixed(1) + '°');
    console.log('   ☀️ Sun light positioned at:', (actualSunAngle * 180 / Math.PI).toFixed(1) + '°');
    console.log('   🌑 Dark side should be at:', (shadowAngle * 180 / Math.PI).toFixed(1) + '°');
    console.log('   📍 Sun light coords: x=' + sunX.toFixed(2) + ', y=' + sunY.toFixed(2) + ', z=' + sunZ.toFixed(2) + ' (Y varies with orbital position)');
    console.log('   📍 Expected shadow coords: x=' + (Math.cos(shadowAngle) * 2).toFixed(2) + ', z=' + (Math.sin(shadowAngle) * 2).toFixed(2));
    console.log('   🎯 Planet name:', planetData.planet_info?.name || 'unknown');

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
    const planetGeometry = new THREE.SphereGeometry(1, 128, 64);
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
    scene.add(planetMesh);
    planetMeshRef.current = planetMesh;
    
    console.log('🪐 Base planet created with material that should respond to directional lighting');
  };

  /**
   * Configurar controles orbitales
   */
  const setupControls = (camera: THREE.PerspectiveCamera, domElement: HTMLElement) => {
    const controls = new OrbitControls(camera, domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1.5;
    controls.maxDistance = 10;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.1; // Más lento para no interferir visualmente con rotación del planeta
    controls.enablePan = true;
    controls.enableZoom = true;
    controlsRef.current = controls;
  };

  // Oceanic shader removed - now using OceanWaves effect from 3DEffects

  // Gas Giant shader removed - now using GasGiantBands effect from 3DEffects

  // Generic shader removed - now using appropriate effects from 3DEffects directory

  // Universal shader removed - now using modular effects system

  /**
   * Cargar datos del planeta desde la API o usar datos locales
   */
  const loadPlanetData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Frontend now uses modular effects system - load from API
      EffectsLogger.log('Loading planet data from API', { planetName });

      // Cargar desde API para datos procedurales específicos
      console.log('🚀 Fetching procedural data from API for:', planetName);
      const response = await fetch(`/api/planet/${encodeURIComponent(planetName)}/rendering-data`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch planet data');
      }

      const data: PlanetRenderingData = result.rendering_data;
      setRenderingData(data);

      // ⚠️ VERIFICACIÓN CRÍTICA: ¿Tiene orbital_angle?
      console.group(`🔍 PLANET DATA VERIFICATION: ${data.planet_info.name}`);
      console.log('📊 Timing data received:', data.timing);
      
      if (!data.timing?.orbital_angle && data.timing?.orbital_angle !== 0) {
        console.error('❌ CRITICAL: Missing orbital_angle for planet:', data.planet_info.name);
        console.error('   This will cause incorrect lighting for ALL planets!');
      } else {
        console.log('✅ orbital_angle present:', (data.timing.orbital_angle * 180 / Math.PI).toFixed(1) + '°');
      }
      
      // Full debug info
      if (showDebugInfo || true) { 
        console.log('📡 Full API response:', data);
        if (data.surface_elements?.type === 'oceanic') {
          console.log('🌊 Oceanic specific data:', {
            green_patches: data.surface_elements.green_patches,
            abstract_lands: data.surface_elements.abstract_lands,
            base_color: data.planet_info.base_color
          });
        }
      }
      console.groupEnd();

      EffectsLogger.log('API data loaded successfully', {
        planet: data.planet_info.name,
        type: data.planet_info.type,
        hasEffects: !!data.surface_elements
      });

      // 🔄 ACTUALIZAR ILUMINACIÓN con datos reales de la API
      updateLightingWithRealData(data);

      // Apply modular effects using the 3DEffects system
      await applyProceduralShadersFromAPI(data);

      // Callback opcional
      if (onDataLoaded) {
        onDataLoaded(data);
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error loading planet data:', errorMessage);
      setError(errorMessage);
      
      if (onError) {
        onError(errorMessage);
      }

      // Aplicar efectos por defecto en caso de error
      applyFallbackEffects();
    } finally {
      setLoading(false);
    }
  }, [planetName, planetData, cosmicOriginTime, initialAngleRotation]); // Solo props esenciales

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

    // Rotación del planeta REAL basada en datos de Python (SIEMPRE, independiente de controles)
    if (planetMeshRef.current && planetData) {
      // Calcular rotación EXACTA como en Pillow
      const currentTime = Date.now() / 1000; // Tiempo actual en segundos Unix
      const cosmicOriginTime = planetData.debug?.cosmic_origin_time || planetData.cosmic_origin_time || currentTime - 3600;
      const rotationPeriod = planetData.planet_info?.rotation_period || planetData.rotation_period_seconds || 86400;
      const initialAngleRotation = planetData.debug?.initial_angle_rotation || planetData.initial_angle_rotation || 0;
      
      // Debug: mostrar datos de rotación una vez
      if (!window.rotationDataLogged) {
        console.log('🌍 Real Planet Rotation Data:', {
          rotationPeriod: rotationPeriod,
          rotationPeriodDays: (rotationPeriod / 86400).toFixed(2) + ' days',
          rotationPeriodMonths: (rotationPeriod / (86400 * 30.44)).toFixed(2) + ' months',
          axialTilt: (planetData.planet_info?.axial_tilt || 0).toFixed(2) + '°',
          cosmicOriginTime: new Date(cosmicOriginTime * 1000).toISOString(),
          initialAngle: initialAngleRotation + ' radians'
        });
        window.rotationDataLogged = true;
      }
      
      const timeElapsedSeconds = currentTime - cosmicOriginTime;
      const angleVelocityRotation = (2 * Math.PI) / rotationPeriod;
      const currentRotationAngle = (initialAngleRotation + timeElapsedSeconds * angleVelocityRotation) % (2 * Math.PI);
      
      // Aplicar rotación REAL del planeta (independiente de OrbitControls)
      planetMeshRef.current.rotation.y = currentRotationAngle;
      
      // Aplicar inclinación axial REAL del planeta
      const axialTilt = planetData.planet_info?.axial_tilt || 0; // En grados
      planetMeshRef.current.rotation.z = axialTilt * (Math.PI / 180); // Convertir a radianes
      
      // Debug: mostrar rotación actual ocasionalmente
      if (Math.random() < 0.001) { // Cada ~1000 frames
        console.log('🌍 Current planet rotation:', {
          angle: currentRotationAngle,
          degrees: (currentRotationAngle * 180 / Math.PI).toFixed(2) + '°',
          timeElapsed: (timeElapsedSeconds / 86400).toFixed(2) + ' days'
        });
      }
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
    
    const initialize = async () => {
      try {
        if (!isMounted) return;
        
        if (!initializeThreeJS()) {
          if (isMounted) setError('Failed to initialize 3D renderer');
          return;
        }

        if (!isMounted) return;
        animate();
        
        // Configurar resize observer para responsividad
        if (mountRef.current && 'ResizeObserver' in window) {
          resizeObserverRef.current = new ResizeObserver(handleResize);
          resizeObserverRef.current.observe(mountRef.current);
        }
        
        // Fallback: listener de resize de ventana
        window.addEventListener('resize', handleResize);
        
        if (!isMounted) return;
        await loadPlanetData();
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

  // Efecto separado para cuando cambian los datos del planeta
  useEffect(() => {
    if (planetData && sceneRef.current && planetMeshRef.current) {
      console.log('🔄 PLANET DATA CHANGED - Reloading for:', planetName);
      loadPlanetData();
    }
  }, [planetName, planetData?.planet_type, planetData?.diameter, planetData?.elements]); // Más datos para forzar recarga
  
  // Efecto adicional para forzar recarga cuando cambia planetName desde la URL
  useEffect(() => {
    console.log('🌍 PLANET NAME CHANGED:', planetName);
    if (sceneRef.current && planetMeshRef.current) {
      // Forzar recarga completa del shader
      setTimeout(() => {
        console.log('🔄 FORCING SHADER RELOAD for new planet:', planetName);
        loadPlanetData();
      }, 100); // Pequeño delay para asegurar que la escena esté lista
    }
  }, [planetName]); // Solo cuando cambia el nombre del planeta

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
          console.log('🌍 Planet data loaded:', data);
        }}
        onEffectsCreated={(effects) => {
          console.log('🎮 Effects created:', effects);
        }}
        onError={(error) => {
          console.error('❌ Planet renderer error:', error);
        }}
      />
    </div>
  );
};