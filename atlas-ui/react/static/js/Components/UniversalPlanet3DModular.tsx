/**
 * Universal Planet 3D Modular Component
 * 
 * Renderiza planetas usando el sistema de efectos modulares
 * completamente dinámico sin hardcodear tipos de planetas.
 */

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { 
  PlanetEffectsManager, 
  translatePythonEffectsToThreeJS 
} from '../3DEffects/PlanetEffectsLibrary';

interface UniversalPlanet3DModularProps {
  planetName: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  autoRotate?: boolean;
  showControls?: boolean;
  onDataLoaded?: (data: any) => void;
}

export const UniversalPlanet3DModular: React.FC<UniversalPlanet3DModularProps> = ({
  planetName,
  containerClassName = '',
  width = 800,
  height = 600,
  autoRotate = true,
  showControls = true,
  onDataLoaded
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const planetMeshRef = useRef<THREE.Mesh>();
  const effectsManagerRef = useRef<PlanetEffectsManager>();
  const controlsRef = useRef<OrbitControls>();
  const frameIdRef = useRef<number>();
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [planetData, setPlanetData] = useState<any>(null);
  const [showDebugData, setShowDebugData] = useState(false);
  const [rawPythonData, setRawPythonData] = useState<string>('');

  useEffect(() => {
    if (!mountRef.current) return;

    // ========================================================================
    // INICIALIZACIÓN DE THREE.JS
    // ========================================================================
    
    // Crear escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000511); // Fondo espacial oscuro
    sceneRef.current = scene;

    // Configurar cámara
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Configurar renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ========================================================================
    // ILUMINACIÓN
    // ========================================================================
    
    // Luz principal (sol)
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
    sunLight.position.set(5, 3, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    // Luz de relleno
    const fillLight = new THREE.DirectionalLight(0x4466ff, 0.3);
    fillLight.position.set(-5, -3, -5);
    scene.add(fillLight);

    // Luz ambiental suave
    const ambientLight = new THREE.AmbientLight(0x222244, 0.4);
    scene.add(ambientLight);

    // ========================================================================
    // CREAR PLANETA BASE
    // ========================================================================
    
    const planetGeometry = new THREE.SphereGeometry(1, 128, 64);
    const planetMaterial = new THREE.MeshStandardMaterial({
      color: 0x808080,
      metalness: 0.5,
      roughness: 0.5
    });
    
    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    planetMesh.castShadow = true;
    planetMesh.receiveShadow = true;
    scene.add(planetMesh);
    planetMeshRef.current = planetMesh;

    // ========================================================================
    // CONTROLES ORBITALES
    // ========================================================================
    
    if (showControls) {
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 2;
      controls.maxDistance = 10;
      controls.autoRotate = autoRotate;
      controls.autoRotateSpeed = 0.5;
      controlsRef.current = controls;
    }

    // ========================================================================
    // GESTOR DE EFECTOS
    // ========================================================================
    
    const effectsManager = new PlanetEffectsManager(scene, planetMesh, 1);
    effectsManagerRef.current = effectsManager;

    // ========================================================================
    // CARGAR DATOS DEL PLANETA
    // ========================================================================
    
    const loadPlanetData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/planet/${encodeURIComponent(planetName)}/rendering-data`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Failed to fetch planet data');
        }
        
        const data = result.rendering_data;
        setPlanetData(data);
        
        // 🚀 GUARDAR DATOS COMPLETOS PARA DEBUG
        setRawPythonData(JSON.stringify(result, null, 2));
        
        // Callback opcional
        if (onDataLoaded) {
          onDataLoaded(data);
        }
        
        // ====================================================================
        // APLICAR EFECTOS BASADOS EN LOS DATOS
        // ====================================================================
        
        // Opción 1: Si el planeta tiene efectos 3D definidos
        if (data.effects_3d) {
          effectsManager.applyEffectsFromData(data.effects_3d);
        }
        // Opción 2: Si es un planeta metálico con estructura nueva
        else if (data.type === 'metallic_3d') {
          // Aplicar efectos del planeta metálico
          const effects = translatePythonEffectsToThreeJS(data);
          effectsManager.applyEffectsFromData(effects);
        }
        // Opción 3: Generar efectos basados en el tipo de planeta
        else {
          applyDefaultEffectsForPlanetType(data, effectsManager);
        }
        
        setLoading(false);
        
      } catch (err) {
        console.error('Error loading planet data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
        
        // Aplicar efectos por defecto en caso de error
        applyFallbackEffects(effectsManager);
      }
    };
    
    loadPlanetData();

    // ========================================================================
    // BUCLE DE ANIMACIÓN
    // ========================================================================
    
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      const deltaTime = clockRef.current.getDelta();
      
      // Actualizar controles
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      // Actualizar efectos
      if (effectsManagerRef.current) {
        effectsManagerRef.current.update(deltaTime);
      }
      
      // Rotación del planeta
      if (planetMeshRef.current && !showControls) {
        planetMeshRef.current.rotation.y += deltaTime * 0.1;
      }
      
      // Renderizar
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();

    // ========================================================================
    // LIMPIEZA
    // ========================================================================
    
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (effectsManagerRef.current) {
        effectsManagerRef.current.dispose();
      }
      
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      
      // Limpiar geometrías y materiales
      planetGeometry.dispose();
      planetMaterial.dispose();
    };
  }, [planetName, width, height, autoRotate, showControls, onDataLoaded]);

  // ==========================================================================
  // FUNCIONES AUXILIARES
  // ==========================================================================
  
  const applyDefaultEffectsForPlanetType = (
    data: any, 
    effectsManager: PlanetEffectsManager
  ) => {
    const planetType = data.planet_info?.type;
    
    switch (planetType) {
      case 'Gas Giant':
        effectsManager.addEffect('atmospheric_halo', {
          color: [1.0, 0.6, 0.2],
          intensity: 0.8,
          falloff: 2.0,
          scale: 1.2
        });
        break;
        
      case 'Rocky':
        // Sin efectos especiales, solo superficie rocosa básica
        break;
        
      case 'Icy':
        effectsManager.addEffect('atmospheric_halo', {
          color: [0.5, 0.8, 1.0],
          intensity: 0.6,
          falloff: 1.5,
          scale: 1.1
        });
        break;
        
      case 'Metallic':
        // Aplicar efectos metálicos por defecto
        effectsManager.addEffect('metallic_surface', {
          color: [0.4, 0.4, 0.45],
          roughness: 0.7,
          metalness: 0.9,
          fragmentationIntensity: 0.5
        });
        
        effectsManager.addEffect('atmospheric_halo', {
          color: [0.6, 0.1, 0.9],
          intensity: 1.0,
          falloff: 2.0,
          scale: 1.15
        });
        
        effectsManager.addEffect('atmospheric_streaks', {
          color: [0.95, 0.95, 1.0],
          particleCount: 100
        });
        break;
        
      // Más tipos de planetas...
      default:
        // Efectos genéricos por defecto
        break;
    }
  };
  
  const applyFallbackEffects = (effectsManager: PlanetEffectsManager) => {
    // Efectos de emergencia si falla la carga
    effectsManager.addEffect('atmospheric_halo', {
      color: [0.5, 0.5, 0.8],
      intensity: 0.5,
      falloff: 2.0,
      scale: 1.1
    });
  };

  // ==========================================================================
  // RENDERIZADO
  // ==========================================================================
  
  return (
    <div className={`relative ${containerClassName}`}>
      <div 
        ref={mountRef} 
        className="w-full h-full"
        style={{ width, height }}
      />
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white">Loading planet...</div>
        </div>
      )}
      
      {error && (
        <div className="absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm">
          Error: {error}
        </div>
      )}
      
      {planetData && !loading && (
        <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50">
          <h3 className="text-lg font-bold">{planetData.planet_info?.name}</h3>
          <p className="text-sm opacity-80">{planetData.planet_info?.type}</p>
          {planetData.description && (
            <p className="text-xs mt-2 opacity-60">
              {planetData.description.appearance}
            </p>
          )}
        </div>
      )}

      {/* 🚀 PYTHON API DATA DEBUG BOX */}
      <button 
        onClick={() => setShowDebugData(!showDebugData)}
        className="absolute top-2 right-2 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded font-bold z-10 transition-colors"
        title="Show/Hide Python API Data"
      >
        🚀 API DATA
      </button>

      {showDebugData && (
        <div className="absolute top-10 right-2 w-80 max-h-96 bg-black bg-opacity-90 border border-gray-400 rounded p-3 overflow-hidden z-10">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-white font-bold text-sm">🚀 PYTHON API DATA - COMPLETE DATASET</h4>
            <button 
              onClick={() => setShowDebugData(false)}
              className="text-red-400 hover:text-red-300 font-bold"
            >
              ✕
            </button>
          </div>
          <textarea 
            value={rawPythonData}
            readOnly
            className="w-full h-80 bg-gray-900 text-green-400 text-xs font-mono border border-gray-600 rounded p-2 resize-none overflow-auto"
            placeholder="Loading API data..."
          />
          <div className="text-gray-400 text-xs mt-1">
            Scroll to see all data • Copy/paste friendly
          </div>
        </div>
      )}
    </div>
  );
};

// =============================================================================
// EJEMPLO DE USO
// =============================================================================

export const ExampleMetallicPlanet: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gray-900">
      <UniversalPlanet3DModular
        planetName="metallic_test_planet"
        containerClassName="w-full h-full"
        autoRotate={true}
        showControls={true}
        onDataLoaded={(data) => {
          console.log('🌍 Planet data loaded:', data);
        }}
      />
    </div>
  );
};