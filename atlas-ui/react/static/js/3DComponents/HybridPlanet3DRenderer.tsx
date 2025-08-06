/**
 * Hybrid Planet 3D Renderer - Combina ModularPlanetRenderer con UniversalPlanetRenderer
 * 
 * Este renderer inteligente usa:
 * - UniversalPlanetRenderer para shaders JSON de la API
 * - ModularPlanetRenderer para efectos 3D locales
 * - Sistema robusto de fallbacks
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { UniversalPlanetRenderer } from './UniversalPlanetRenderer';
import { effectRegistry } from '../3DEffects/EffectRegistry';

interface HybridPlanet3DProps {
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
  onError?: (error: string) => void;
}

interface RendererMode {
  mode: 'universal' | 'modular' | 'fallback';
  reason: string;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError?: (error: string) => void },
  { hasError: boolean; error: string | null }
> {
  constructor(props: { children: React.ReactNode; onError?: (error: string) => void }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error.message);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center w-full h-full bg-gray-900/50 rounded">
          <div className="text-center p-4">
            <div className="text-red-400 text-sm mb-2">Hybrid Renderer Error</div>
            <div className="text-xs text-gray-400 max-w-xs">{this.state.error}</div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export const HybridPlanet3DRenderer: React.FC<HybridPlanet3DProps> = ({
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
  onError
}) => {
  // Referencias para Three.js
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const planetMeshRef = useRef<THREE.Mesh>();
  const controlsRef = useRef<OrbitControls>();
  const universalRendererRef = useRef<UniversalPlanetRenderer>();
  const frameIdRef = useRef<number>();

  // Estado del componente
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [renderMode, setRenderMode] = useState<RendererMode>({
    mode: 'universal',
    reason: 'Attempting API shader system'
  });
  const [apiData, setApiData] = useState<any>(null);
  const [effects, setEffects] = useState<any[]>([]);

  /**
   * Inicialización de Three.js
   */
  const initializeThreeJS = useCallback(() => {
    if (!mountRef.current) return false;

    try {
      // Limpiar contenido anterior
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }

      // Obtener dimensiones del contenedor
      const container = mountRef.current;
      const containerWidth = container.clientWidth || width;
      const containerHeight = container.clientHeight || height;
      
      // Crear escena
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000511);
      sceneRef.current = scene;

      // Configurar cámara
      const camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 1000);
      camera.position.set(0, 0, 5);
      cameraRef.current = camera;

      // Configurar renderer
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

      // Configurar iluminación
      setupLighting(scene);

      // Crear planeta base
      const planetMesh = createBasePlanet(scene);
      planetMeshRef.current = planetMesh;

      // Configurar controles
      if (enableControls) {
        setupControls(camera, renderer.domElement);
      }

      return true;
    } catch (error) {
      console.error('Error initializing Three.js:', error);
      return false;
    }
  }, [width, height, enableControls]);

  /**
   * Configurar iluminación
   */
  const setupLighting = (scene: THREE.Scene) => {
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(5, 3, 5);
    sunLight.castShadow = true;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x4466ff, 0.4);
    fillLight.position.set(-5, -3, -5);
    scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight(0x222244, 0.3);
    scene.add(ambientLight);
  };

  /**
   * Crear planeta base
   */
  const createBasePlanet = (scene: THREE.Scene): THREE.Mesh => {
    const planetGeometry = new THREE.SphereGeometry(1, 128, 64);
    const planetMaterial = new THREE.MeshStandardMaterial({
      color: getColorByPlanetType(planetData?.planet_type || 'unknown'),
      metalness: 0.1,
      roughness: 0.8
    });

    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    planetMesh.castShadow = true;
    planetMesh.receiveShadow = true;
    scene.add(planetMesh);
    
    return planetMesh;
  };

  /**
   * Configurar controles
   */
  const setupControls = (camera: THREE.PerspectiveCamera, domElement: HTMLElement) => {
    const controls = new OrbitControls(camera, domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1.5;
    controls.maxDistance = 10;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.5;
    controlsRef.current = controls;
  };

  /**
   * Obtener color por tipo de planeta
   */
  const getColorByPlanetType = (type: string): number => {
    const colorMap: { [key: string]: number } = {
      'gas giant': 0x4A90E2,
      'rocky': 0x8B4513,
      'icy': 0xE0F7FF,
      'oceanic': 0x006BB3,
      'desert': 0xD2B48C,
      'lava': 0xFF4500,
      'metallic': 0xC0C0C0,
      'toxic': 0x9ACD32,
      'crystalline': 0xFF69B4
    };
    return colorMap[type.toLowerCase()] || 0x808080;
  };

  /**
   * Intentar cargar datos de la API
   */
  const attemptApiLoad = useCallback(async (): Promise<boolean> => {
    try {
      const response = await fetch(`/api/planet/${encodeURIComponent(planetName)}/rendering-data`);
      
      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'API returned unsuccessful response');
      }

      setApiData(result.rendering_data);
      setRenderMode({
        mode: 'universal',
        reason: 'API data loaded successfully'
      });

      return true;
    } catch (error) {
      console.warn('API load failed:', error);
      return false;
    }
  }, [planetName]);

  /**
   * Aplicar renderizado Universal (API JSON)
   */
  const applyUniversalRendering = useCallback(async () => {
    if (!sceneRef.current || !planetMeshRef.current) return;

    try {
      // Crear Universal Renderer
      universalRendererRef.current = new UniversalPlanetRenderer(
        sceneRef.current, 
        planetMeshRef.current
      );

      // Cargar datos del planeta
      await universalRendererRef.current.loadPlanetData(planetName);

      setRenderMode({
        mode: 'universal',
        reason: 'Universal shaders applied'
      });

    } catch (error) {
      console.error('Universal rendering failed:', error);
      throw error;
    }
  }, [planetName]);

  /**
   * Aplicar renderizado Modular (efectos locales)
   */
  const applyModularRendering = useCallback(() => {
    if (!sceneRef.current || !planetMeshRef.current || !planetData) return;

    try {
      // Aplicar color base
      if (planetMeshRef.current.material instanceof THREE.MeshStandardMaterial) {
        const baseColor = getColorByPlanetType(planetData.planet_type);
        planetMeshRef.current.material.color.setHex(baseColor);
      }

      // Crear datos simulados para effectRegistry
      const mockData = {
        planet_info: {
          name: planetName,
          type: planetData.planet_type,
          base_color: `#${getColorByPlanetType(planetData.planet_type).toString(16).padStart(6, '0')}`,
          radius: 1
        },
        surface_elements: {
          type: planetData.planet_type.toLowerCase(),
          elements: planetData.elements
        },
        atmosphere: planetData.atmosphere !== 'None' ? {
          type: planetData.atmosphere,
          halo: true
        } : null
      };

      // Crear efectos usando el registry
      const newEffects = effectRegistry.createEffectsFromPythonPlanetData(
        mockData,
        1,
        planetMeshRef.current,
        sceneRef.current
      );

      setEffects(newEffects);
      setRenderMode({
        mode: 'modular',
        reason: `Applied ${newEffects.length} local effects`
      });

    } catch (error) {
      console.error('Modular rendering failed:', error);
      applyFallbackRendering();
    }
  }, [planetName, planetData]);

  /**
   * Aplicar renderizado de fallback
   */
  const applyFallbackRendering = useCallback(() => {
    if (!planetMeshRef.current) return;

    try {
      // Aplicar color básico
      if (planetMeshRef.current.material instanceof THREE.MeshStandardMaterial) {
        const baseColor = getColorByPlanetType(planetData?.planet_type || 'unknown');
        planetMeshRef.current.material.color.setHex(baseColor);
      }

      setRenderMode({
        mode: 'fallback',
        reason: 'Basic material rendering'
      });

    } catch (error) {
      console.error('Even fallback rendering failed:', error);
    }
  }, [planetData]);

  /**
   * Cargar datos del planeta con estrategia híbrida
   */
  const loadPlanetData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Estrategia 1: Intentar API primero (para shaders JSON)
      const apiSuccess = await attemptApiLoad();
      
      if (apiSuccess) {
        await applyUniversalRendering();
      } else {
        // Estrategia 2: Usar datos locales con efectos modulares
        if (planetData) {
          applyModularRendering();
        } else {
          // Estrategia 3: Fallback básico
          applyFallbackRendering();
        }
      }

      // Callback
      if (onDataLoaded) {
        onDataLoaded({
          mode: renderMode.mode,
          data: apiData || planetData,
          effects: effects
        });
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      
      if (onError) {
        onError(errorMessage);
      }

      // Último intento de fallback
      applyFallbackRendering();
    } finally {
      setLoading(false);
    }
  }, [attemptApiLoad, applyUniversalRendering, applyModularRendering, applyFallbackRendering, planetData, onDataLoaded, onError, renderMode.mode, apiData, effects]);

  /**
   * Bucle de animación
   */
  const animate = useCallback(() => {
    frameIdRef.current = requestAnimationFrame(animate);

    // Actualizar controles
    if (controlsRef.current) {
      controlsRef.current.update();
    }

    // Actualizar efectos si están en modo modular
    if (renderMode.mode === 'modular') {
      try {
        effectRegistry.updateAllEffects(0.016, planetMeshRef.current?.rotation.y);
      } catch (error) {
        // Silenciar errores de actualización de efectos
      }
    }

    // Renderizar escena
    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  }, [renderMode.mode]);

  /**
   * Efecto de inicialización
   */
  useEffect(() => {
    const initialize = async () => {
      try {
        if (!initializeThreeJS()) {
          setError('Failed to initialize 3D renderer');
          return;
        }

        animate();
        await loadPlanetData();
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown initialization error');
      }
    };

    initialize();

    // Cleanup
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }

      if (controlsRef.current) {
        controlsRef.current.dispose();
      }

      if (universalRendererRef.current) {
        universalRendererRef.current.dispose();
      }

      effectRegistry.clearAllEffects();

      if (rendererRef.current && mountRef.current) {
        try {
          if (mountRef.current.contains(rendererRef.current.domElement)) {
            mountRef.current.removeChild(rendererRef.current.domElement);
          }
          rendererRef.current.dispose();
        } catch (error) {
          // Silenciar errores de cleanup
        }
      }
    };
  }, [initializeThreeJS, animate, loadPlanetData, planetName]);

  return (
    <ErrorBoundary onError={onError}>
      <div className={`relative ${containerClassName}`}>
        <div 
          ref={mountRef} 
          className="w-full h-full"
          style={{ width, height }}
        />
        
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mx-auto mb-2"></div>
              <div className="text-sm">Loading hybrid planet...</div>
            </div>
          </div>
        )}
        
        {error && (
          <div className="absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm rounded-t">
            <strong>Hybrid Error:</strong> {error}
          </div>
        )}
        
        {!loading && !error && (
          <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs rounded-tr">
            <h3 className="text-lg font-bold">{planetName}</h3>
            <p className="text-sm opacity-80 capitalize">{renderMode.mode} Renderer</p>
            <p className="text-xs mt-1 opacity-60">{renderMode.reason}</p>
            {effects.length > 0 && (
              <p className="text-xs opacity-60">{effects.length} effects</p>
            )}
          </div>
        )}

        {showDebugInfo && !loading && (
          <div className="absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono rounded-bl">
            <h4 className="font-bold mb-2">Hybrid Renderer Debug</h4>
            <div>Mode: {renderMode.mode}</div>
            <div>Reason: {renderMode.reason}</div>
            <div>Effects: {effects.length}</div>
            <div className="mt-2">
              <div className="text-green-400">Status: Active</div>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};