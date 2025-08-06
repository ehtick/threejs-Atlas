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

// Importar Universal Renderer para shaders JSON
import { UniversalPlanetRenderer } from './UniversalPlanetRenderer';

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
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const planetMeshRef = useRef<THREE.Mesh>();
  const controlsRef = useRef<OrbitControls>();
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const frameIdRef = useRef<number>();

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
  const universalRendererRef = useRef<UniversalPlanetRenderer>();
  const resizeObserverRef = useRef<ResizeObserver>();

  // Funciones helper para generar efectos
  const getColorByPlanetType = (type: string): string => {
    const colorMap: { [key: string]: string } = {
      'gas giant': '#4A90E2',
      'rocky': '#8B4513',
      'icy': '#E0F7FF',
      'oceanic': '#006BB3',
      'desert': '#D2B48C',
      'lava': '#FF4500',
      'metallic': '#C0C0C0',
      'toxic': '#9ACD32',
      'crystalline': '#FF69B4'
    };
    return colorMap[type.toLowerCase()] || '#808080';
  };

  const generateEffectsForPlanetType = (type: string): any[] => {
    const effects: any[] = [];
    const lowerType = type.toLowerCase();

    switch (lowerType) {
      case 'gas giant':
        effects.push({
          type: 'gas_giant_bands',
          params: {
            band_count: 5 + Math.floor(Math.random() * 3),
            colors: ['#4A90E2', '#6BA3D6', '#87CEEB']
          },
          priority: 0
        });
        break;
      
      case 'metallic':
        effects.push({
          type: 'metallic_surface',
          params: {
            color: [0.7, 0.7, 0.8],
            roughness: 0.3,
            metalness: 0.9
          },
          priority: 0
        });
        break;
      
      case 'rocky':
        effects.push({
          type: 'rocky_terrain',
          params: {
            color: [0.5, 0.3, 0.2],
            roughness: 0.9,
            crater_density: 0.3
          },
          priority: 0
        });
        break;
      
      case 'icy':
        effects.push({
          type: 'icy_terrain',
          params: {
            color: [0.9, 0.95, 1.0],
            roughness: 0.1,
            ice_thickness: 0.5
          },
          priority: 0
        });
        break;
      
      case 'oceanic':
        effects.push({
          type: 'ocean_waves',
          params: {
            color: [0.0, 0.4, 0.8],
            wave_height: 0.02,
            wave_speed: 1.0
          },
          priority: 0
        });
        break;
    }

    return effects;
  };

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
   * Aplicar shader uniforms de la API directamente al planeta
   */
  const applyShaderUniformsToPlanet = async (shaderUniforms: any, planetData: PlanetRenderingData) => {
    if (!planetMeshRef.current) return;

    console.log('🎨 Creating shader material with uniforms:', shaderUniforms);

    // Shader vertex simple
    const vertexShader = `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // Shader fragment que usa los uniforms de la API
    const fragmentShader = `
      uniform float time;
      uniform vec3 baseColor;
      uniform float planetRadius;
      uniform float surfaceDetail;
      uniform float atmosphericHaze;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vec3 color = baseColor;
        
        // Aplicar variaciones basadas en los uniforms de la API
        float surface = sin(vPosition.x * surfaceDetail) * cos(vPosition.y * surfaceDetail) * sin(vPosition.z * surfaceDetail);
        color = mix(color, color * 1.3, surface * 0.3);
        
        // Efecto atmosférico
        float fresnel = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
        color = mix(color, vec3(0.5, 0.7, 1.0), fresnel * atmosphericHaze);
        
        // Iluminación básica
        float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
        color *= lighting;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Crear uniforms basados en los datos de la API
    const uniforms = {
      time: { value: 0.0 },
      baseColor: { value: new THREE.Color(planetData.planet_info.base_color) },
      planetRadius: { value: planetData.planet_info.radius || 1.0 },
      surfaceDetail: { value: shaderUniforms.surfaceDetail || 5.0 },
      atmosphericHaze: { value: shaderUniforms.atmosphericHaze || 0.1 },
      ...shaderUniforms // Incluir todos los uniforms de la API
    };

    // Crear y aplicar el material shader
    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms
    });

    planetMeshRef.current.material = shaderMaterial;
    console.log('✅ Shader material applied with API uniforms');
  };

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

      // Configurar iluminación realista
      setupLighting(scene);

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
   * Configurar iluminación de la escena
   */
  const setupLighting = (scene: THREE.Scene) => {
    // Luz principal (sol)
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(5, 3, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 50;
    sunLight.shadow.camera.left = -10;
    sunLight.shadow.camera.right = 10;
    sunLight.shadow.camera.top = 10;
    sunLight.shadow.camera.bottom = -10;
    scene.add(sunLight);

    // Luz de relleno fría
    const fillLight = new THREE.DirectionalLight(0x4466ff, 0.4);
    fillLight.position.set(-5, -3, -5);
    scene.add(fillLight);

    // Luz ambiental suave
    const ambientLight = new THREE.AmbientLight(0x222244, 0.3);
    scene.add(ambientLight);

    // Añadir helper para debug (solo si está habilitado)
    if (showDebugInfo) {
      const sunLightHelper = new THREE.DirectionalLightHelper(sunLight, 1);
      scene.add(sunLightHelper);
    }
  };

  /**
   * Crear planeta base genérico
   */
  const createBasePlanet = (scene: THREE.Scene) => {
    const planetGeometry = new THREE.SphereGeometry(1, 128, 64);
    const planetMaterial = new THREE.MeshStandardMaterial({
      color: 0x808080,
      metalness: 0.1,
      roughness: 0.8
    });

    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    planetMesh.castShadow = true;
    planetMesh.receiveShadow = true;
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
    controls.minDistance = 1.5;
    controls.maxDistance = 10;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.5;
    controls.enablePan = true;
    controls.enableZoom = true;
    controlsRef.current = controls;
  };

  /**
   * Cargar datos del planeta desde la API o usar datos locales
   */
  const loadPlanetData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Si tenemos datos locales del planeta, úsalos directamente
      if (planetData) {
        // Crear estructura de datos compatible con el sistema modular
        const data: PlanetRenderingData = {
          planet_info: {
            name: planetName,
            type: planetData.planet_type,
            base_color: getColorByPlanetType(planetData.planet_type),
            radius: planetData.diameter / 2
          },
          surface_elements: {
            type: planetData.planet_type.toLowerCase(),
            elements: planetData.elements,
            effects_3d: generateEffectsForPlanetType(planetData.planet_type)
          },
          atmosphere: planetData.atmosphere !== 'None' ? {
            type: planetData.atmosphere,
            halo: true,
            color: [0.5, 0.7, 1.0, 0.3]
          } : null,
          timing: {
            cosmic_origin_time: cosmicOriginTime,
            initial_angle_rotation: initialAngleRotation
          }
        };

        setRenderingData(data);
        
        // Crear efectos basados en los datos
        await createEffectsFromData(data);
        
        // Callback opcional
        if (onDataLoaded) {
          onDataLoaded(data);
        }
        
        setLoading(false);
        return;
      }

      // Fallback: cargar desde API si no tenemos datos locales
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

      console.log('🌍 API data loaded:', data);

      // SI la API devuelve shader_uniforms, aplicar shaders procedurales directamente
      if (data.shader_uniforms) {
        console.log('🎨 Applying shader uniforms from API:', data.shader_uniforms);
        
        // Aplicar los shader uniforms directamente al material del planeta
        if (planetMeshRef.current?.material instanceof THREE.ShaderMaterial) {
          // Actualizar los uniforms del material con los datos de la API
          const material = planetMeshRef.current.material;
          Object.keys(data.shader_uniforms).forEach(key => {
            if (material.uniforms[key]) {
              material.uniforms[key].value = data.shader_uniforms[key];
            }
          });
          material.needsUpdate = true;
          console.log('✅ Shader uniforms applied to planet material');
        } else {
          // Si no es un ShaderMaterial, crear uno con los uniforms
          console.log('🔄 Creating ShaderMaterial with API uniforms');
          await applyShaderUniformsToPlanet(data.shader_uniforms, data);
        }
        
        // También crear efectos modulares adicionales
        await createEffectsFromData(data);
      } else {
        console.log('🔧 Using Modular Effects for API data (no shader_uniforms found)');
        // Crear efectos modulares basados en los datos
        await createEffectsFromData(data);
      }

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

  /**
   * Crear efectos desde datos de Python
   */
  const createEffectsFromData = async (data: PlanetRenderingData) => {
    if (!sceneRef.current || !planetMeshRef.current) return;

    try {
      // Limpiar efectos anteriores
      clearActiveEffects();

      // Aplicar color base al planeta
      if (planetMeshRef.current.material instanceof THREE.MeshStandardMaterial) {
        const baseColor = new THREE.Color(data.planet_info.base_color);
        planetMeshRef.current.material.color = baseColor;
        planetMeshRef.current.material.needsUpdate = true;
      }

      // Crear efectos usando el registry
      const newEffects = effectRegistry.createEffectsFromPythonPlanetData(
        data,
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

      // Actualizar estadísticas
      updateStats();

    } catch (error) {
      console.error('Error creating effects:', error);
      applyFallbackEffects();
    }
  };

  /**
   * Aplicar efectos de emergencia
   */
  const applyFallbackEffects = () => {
    if (!sceneRef.current || !planetMeshRef.current) return;

    console.log('⚠️ Applying fallback effects');

    try {
      // Efecto de halo básico
      const fallbackEffect = effectRegistry.createEffect(
        'atmospheric_halo',
        {
          color: [0.5, 0.5, 0.8],
          intensity: 0.5,
          falloff: 2.0,
          scale: 1.1
        },
        1,
        planetMeshRef.current
      );

      if (fallbackEffect && fallbackEffect.effect.addToScene) {
        fallbackEffect.effect.addToScene(sceneRef.current, planetMeshRef.current.position);
        activeEffectsRef.current = [fallbackEffect];
        setEffects([fallbackEffect]);
      }
    } catch (error) {
      console.error('Error applying fallback effects:', error);
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

    // Rotación del planeta si no hay controles
    if (planetMeshRef.current && !enableControls) {
      planetMeshRef.current.rotation.y += deltaTime * 0.1;
    }

    // Actualizar uniforms de shader si es ShaderMaterial
    if (planetMeshRef.current?.material instanceof THREE.ShaderMaterial) {
      const material = planetMeshRef.current.material;
      if (material.uniforms.time) {
        material.uniforms.time.value += deltaTime;
      }
    }

    // Renderizar escena
    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      const renderStartTime = performance.now();
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      const renderTime = performance.now() - renderStartTime;

      // Actualizar estadísticas cada 5 segundos para evitar spam
      if (currentTime - lastFrameTimeRef.current > 5000) {
        const frameRate = 1000 / (currentTime - lastFrameTimeRef.current);
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

      if (universalRendererRef.current) {
        universalRendererRef.current.dispose();
      }

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
      loadPlanetData();
    }
  }, [planetName, planetData?.planet_type]); // Solo cuando cambian datos críticos

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
   * Renderizado del componente
   */
  return (
    <div className={`relative ${containerClassName}`}>
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
            {effects.map((effect, i) => (
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