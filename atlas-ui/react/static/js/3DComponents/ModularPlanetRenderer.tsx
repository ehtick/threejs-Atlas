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
   * Aplicar shaders procedurales usando datos específicos del JSON de la API
   */
  const applyProceduralShadersFromAPI = async (planetData: PlanetRenderingData) => {
    if (!planetMeshRef.current) return;

    const planetType = planetData.planet_info.type.toLowerCase();
    const seeds = planetData.seeds;
    const surfaceElements = planetData.surface_elements;
    
    console.log('🔥 DEBUGGING PROCEDURAL SHADER APPLICATION');
    console.log('  🌍 Planet Name:', planetData.planet_info.name);
    console.log('  📊 Planet Type:', planetType);
    console.log('  🌱 Seeds:', seeds);
    console.log('  🏗️ Surface Elements:', surfaceElements);
    
    if (planetType === 'oceanic') {
      console.log('  🌊 OCEANIC DATA DETAILS:');
      console.log('    🟢 Green Patches:', surfaceElements?.green_patches?.length || 0);
      console.log('    ☁️ Clouds:', surfaceElements?.clouds?.length || 0);
      if (surfaceElements?.green_patches?.[0]) {
        console.log('    📍 First Patch:', surfaceElements.green_patches[0]);
      }
    }
    
    if (planetType === 'gas giant') {
      console.log('  🌪️ GAS GIANT DATA DETAILS:');
      console.log('    🌀 Cloud Bands:', surfaceElements?.cloud_bands);
      console.log('    ⛈️ Storms:', surfaceElements?.storms?.length || 0);
    }

    // Shader vertex común
    const vertexShader = `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // Generar shader UNIVERSAL que renderiza lo que mande el backend
    const { fragmentShader, uniforms } = generateUniversalShader(planetData);

    // Limpiar material anterior si existe
    if (planetMeshRef.current.material) {
      const oldMaterial = planetMeshRef.current.material;
      console.log('🧼 Disposing old material for new planet');
      if (oldMaterial instanceof THREE.Material) {
        oldMaterial.dispose();
      }
    }

    // Crear y aplicar el material shader procedural
    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      side: THREE.FrontSide
    });

    planetMeshRef.current.material = shaderMaterial;
    console.log('✅ NEW Procedural shader applied for', planetType, 'planet:', planetData.planet_info.name);
  };

  /**
   * Generar shader UNIVERSAL que renderiza lo que mande el backend, sin importar el tipo
   */
  const generateUniversalShader = (data: PlanetRenderingData) => {
    const baseColor = new THREE.Color(data.planet_info.base_color);
    const seed = parseFloat(data.seeds.shape_seed) * 0.001;
    
    // Usar el shape_seed directamente de Python para determinismo completo
    const planetHash = (parseFloat(data.seeds?.shape_seed || '0') * 0.001) % 1.0;
    
    console.log('🎨 UNIVERSAL SHADER for', data.planet_info.name);
    console.log('  seed:', seed, 'hash:', planetHash, 'color:', baseColor);
    console.log('  🚀 BACKEND DATA:', data.surface_elements);
    
    // Extraer TODOS los datos que envíe el backend, sin importar el tipo
    const surfaceData = data.surface_elements || {};
    
    // Arrays para elementos renderizables (backend envía lo que quiera)
    const renderableElements = [];
    
    // Si hay green_patches, añadirlos usando el RNG procedural de Python
    if (surfaceData.green_patches) {
      surfaceData.green_patches.slice(0, 10).forEach((patch: any, index: number) => {
        // Usar los datos exactos de Python sin modificarlos
        const patchSeed = parseFloat(data.seeds?.shape_seed || '0') + index;
        const colorVariation = Math.abs(Math.sin(patchSeed * 100.0)) * 0.3;
        
        // Colores más fieles a los datos originales con variación procedural
        const proceduralColor = [
          patch.color[0] * (1.0 + colorVariation * 0.5),
          patch.color[1] * (1.1 + colorVariation * 0.3), 
          patch.color[2] * (0.9 + colorVariation * 0.2),
          0.85 // Opacidad consistente
        ];
        
        renderableElements.push({
          type: 'patch',
          position: patch.position,
          size: patch.size * 1.1, // Tamaño procedural basado en datos Python
          color: proceduralColor
        });
      });
    }
    
    // Si hay clouds, añadirlas usando datos procedurales específicos
    if (surfaceData.clouds) {
      surfaceData.clouds.slice(0, 5).forEach((cloud: any, index: number) => {
        // Usar seed específico para cada nube
        const cloudSeed = parseFloat(data.seeds?.shape_seed || '0') + index * 10;
        const opacity = 0.3 + (Math.abs(Math.sin(cloudSeed)) * 0.3);
        
        renderableElements.push({
          type: 'cloud',
          position: cloud.position,
          size: cloud.radius * 1.3,
          color: [0.96, 0.96, 0.98, opacity] // Opacidad procedural
        });
      });
    }
    
    // Si hay crystals, añadirlos
    if (surfaceData.crystals) {
      surfaceData.crystals.slice(0, 10).forEach((crystal: any) => {
        renderableElements.push({
          type: 'crystal',
          position: crystal.position,
          size: crystal.width,
          color: crystal.color
        });
      });
    }
    
    // Si hay cloud_bands, añadirlas como elementos
    if (surfaceData.cloud_bands) {
      const bands = surfaceData.cloud_bands;
      for (let i = 0; i < bands.num_bands && i < 10; i++) {
        if (bands.widths[i] > 0) {
          renderableElements.push({
            type: 'band',
            position: [0, bands.positions[i]], // Y position
            size: bands.widths[i],
            color: [1.2, 1.2, 1.2, 0.6] // Banda clara
          });
        }
      }
    }
    
    // Si hay storms, añadirlas
    if (surfaceData.storms) {
      surfaceData.storms.forEach((storm: any) => {
        renderableElements.push({
          type: 'storm',
          position: storm.position,
          size: storm.radius,
          color: [0.545, 0.0, 0.0, 0.8] // Rojo oscuro
        });
      });
    }
    
    console.log('🌌 RENDERABLE ELEMENTS extracted from backend:', renderableElements.length);
    renderableElements.forEach((el, i) => {
      console.log(`  ${i}: ${el.type} at [${el.position[0]}, ${el.position[1]}] size=${el.size}`);
    });
    
    // Convertir elementos a arrays para el shader
    const maxElements = 20;
    const elementTypes: number[] = new Array(maxElements).fill(0);
    const elementPositions: number[] = new Array(maxElements * 2).fill(0);
    const elementSizes: number[] = new Array(maxElements).fill(0);
    const elementColors: number[] = new Array(maxElements * 4).fill(0);
    
    renderableElements.slice(0, maxElements).forEach((element, i) => {
      // Mapear tipos a números
      const typeMap: {[key: string]: number} = {
        'patch': 1, 'cloud': 2, 'crystal': 3, 'band': 4, 'storm': 5
      };
      
      elementTypes[i] = typeMap[element.type] || 0;
      elementPositions[i * 2] = element.position[0];
      elementPositions[i * 2 + 1] = element.position[1];
      elementSizes[i] = element.size;
      elementColors[i * 4] = element.color[0];
      elementColors[i * 4 + 1] = element.color[1];
      elementColors[i * 4 + 2] = element.color[2];
      elementColors[i * 4 + 3] = element.color[3] || 1.0;
    });
    
    const baseUniforms = {
      time: { value: 0.0 },
      seed: { value: seed },
      planetHash: { value: planetHash },
      baseColor: { value: baseColor },
      planetRadius: { value: 1.0 },
      numElements: { value: Math.min(renderableElements.length, maxElements) },
      elementTypes: { value: elementTypes },
      elementPositions: { value: elementPositions },
      elementSizes: { value: elementSizes },
      elementColors: { value: elementColors }
    };
    
    return generateUniversalShaderCode(baseUniforms);
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
   * Generar shader específico para planetas Oceanic usando datos del JSON
   */
  const generateOceanicShader = (data: PlanetRenderingData, baseUniforms: any) => {
    const surfaceData = data.surface_elements;
    
    // Extraer datos específicos del oceanic del JSON
    const greenPatches = surfaceData?.green_patches || [];
    const clouds = surfaceData?.clouds || [];
    
    console.log('🌊 GENERATING OCEANIC SHADER:');
    console.log('  🟢 Raw Green Patches Data:', greenPatches.length, greenPatches.slice(0, 3));
    console.log('  ☁️ Raw Clouds Data:', clouds.length, clouds.slice(0, 2));
    
    // Convertir datos del JSON a arrays para shader
    const patchPositions: number[] = [];
    const patchSizes: number[] = [];
    const patchColors: number[] = [];
    
    greenPatches.slice(0, 10).forEach((patch: any, i: number) => {
      console.log(`  📍 Processing patch ${i}:`, patch.position, 'size:', patch.size, 'color:', patch.color);
      patchPositions.push(patch.position[0], patch.position[1]);
      patchSizes.push(patch.size);
      patchColors.push(patch.color[0], patch.color[1], patch.color[2]);
    });
    
    // Rellenar hasta 10 elementos
    while (patchPositions.length < 20) patchPositions.push(0.0);
    while (patchSizes.length < 10) patchSizes.push(0.0);
    while (patchColors.length < 30) patchColors.push(0.0);
    
    console.log('  🎯 Final Shader Arrays:');
    console.log('    Positions:', patchPositions.slice(0, 6), '...');
    console.log('    Sizes:', patchSizes.slice(0, 3), '...');
    console.log('    Colors:', patchColors.slice(0, 9), '...');

    const numPatches = Math.min(greenPatches.length, 10);
    const uniforms = {
      ...baseUniforms,
      numGreenPatches: { value: numPatches },
      patchPositions: { value: patchPositions },
      patchSizes: { value: patchSizes },
      patchColors: { value: patchColors },
      oceanDepth: { value: 0.8 },
      waveAmplitude: { value: 0.02 },
      waveFrequency: { value: 2.0 }
    };
    
    console.log('  🎮 Final Oceanic Uniforms:');
    console.log('    numGreenPatches:', numPatches);
    console.log('    seed:', baseUniforms.seed.value);
    console.log('    planetHash:', baseUniforms.planetHash.value);
    console.log('    baseColor:', baseUniforms.baseColor.value);
    console.log('    patchPositions array:', patchPositions);
    console.log('    patchSizes array:', patchSizes);
    console.log('    patchColors array:', patchColors);
    
    // DEBUG EXTREMO: Alertar diferencias
    if (numPatches > 0) {
      const firstPatchData = `Patch0: pos=[${patchPositions[0]}, ${patchPositions[1]}] size=${patchSizes[0]}`;
      console.log('  🔥 FIRST PATCH DEBUG:', firstPatchData);
      
      // Crear identificador único para este planeta
      const planetId = `${data.planet_info.name}_${baseUniforms.seed.value.toFixed(6)}`;
      console.log('  🌍 PLANET UNIQUE ID:', planetId);
      
      // Guardar en window para comparar entre planetas
      if (!(window as any).planetDebugData) {
        (window as any).planetDebugData = {};
      }
      (window as any).planetDebugData[planetId] = {
        name: data.planet_info.name,
        seed: baseUniforms.seed.value,
        hash: baseUniforms.planetHash.value,
        patches: numPatches,
        firstPatch: firstPatchData
      };
      
      console.log('  📊 ALL PLANETS DATA:', (window as any).planetDebugData);
    }

    const fragmentShader = `
      uniform float time;
      uniform float seed;
      uniform float planetHash;
      uniform vec3 baseColor;
      uniform int numGreenPatches;
      uniform float patchPositions[20];
      uniform float patchSizes[10];
      uniform float patchColors[30];
      uniform float oceanDepth;
      uniform float waveAmplitude;
      uniform float waveFrequency;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        // SHADER DE DEBUG EXTREMO - Solo mostrar datos del JSON
        vec3 color = vec3(0.0, 0.0, 0.2); // Azul oscuro base
        
        // Coordenadas esféricas
        vec2 sphereUV = vec2(
          atan(vPosition.z, vPosition.x) / 6.28318 + 0.5,
          acos(vPosition.y) / 3.14159
        );
        
        // DEBUG 1: Mostrar seed como color
        color.r = fract(seed * 1000.0); // Rojo = seed
        color.g = fract(planetHash * 1000.0); // Verde = planetHash
        
        // DEBUG 2: Si hay patches, mostrar TODOS como puntos gigantes
        for(int i = 0; i < numGreenPatches && i < 10; i++) {
          vec2 patchPos = vec2(patchPositions[i*2], patchPositions[i*2+1]);
          
          // Convertir posición JSON [-1,1] directamente a esfera [0,1]
          vec2 patchUV = (patchPos + 1.0) * 0.5;
          
          float dist = distance(sphereUV, patchUV);
          
          // Punto GIGANTE para que sea imposible no verlo
          if(dist < 0.3) {
            // Color diferente por patch index
            if(i == 0) color = vec3(1.0, 0.0, 1.0); // Magenta
            else if(i == 1) color = vec3(1.0, 1.0, 0.0); // Amarillo
            else if(i == 2) color = vec3(0.0, 1.0, 1.0); // Cyan
            else color = vec3(1.0, 0.0, 0.0); // Rojo para el resto
          }
        }
        
        // DEBUG 3: Mostrar número de patches como intensidad azul
        color.b = float(numGreenPatches) / 20.0;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    return { fragmentShader, uniforms };
  };

  /**
   * Generar shader específico para planetas Gas Giant usando datos del JSON
   */
  const generateGasGiantShader = (data: PlanetRenderingData, baseUniforms: any) => {
    const cloudBands = data.surface_elements?.cloud_bands;
    const storms = data.surface_elements?.storms || [];
    
    if (!cloudBands) {
      return generateGenericShader(data, baseUniforms);
    }

    const uniforms = {
      ...baseUniforms,
      numBands: { value: cloudBands.num_bands },
      bandPositions: { value: cloudBands.positions.slice(0, 20) },
      bandWidths: { value: cloudBands.widths.slice(0, 20) },
      bandRotation: { value: cloudBands.rotation },
      hasStorm: { value: storms.length > 0 ? 1 : 0 },
      stormPos: { value: storms[0] ? [storms[0].position[0], storms[0].position[1]] : [0, 0] },
      stormRadius: { value: storms[0]?.radius || 0.1 }
    };

    const fragmentShader = `
      uniform float time;
      uniform float seed;
      uniform vec3 baseColor;
      uniform int numBands;
      uniform float bandPositions[20];
      uniform float bandWidths[20];
      uniform float bandRotation;
      uniform int hasStorm;
      uniform vec2 stormPos;
      uniform float stormRadius;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      float noise(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }
      
      void main() {
        vec3 color = baseColor;
        
        // Coordenadas esféricas
        vec2 sphereUV = vec2(
          atan(vPosition.z, vPosition.x) / 6.28318 + 0.5,
          acos(vPosition.y) / 3.14159
        );
        
        // Aplicar bandas de nubes proceduralmente desde JSON
        float y = (sphereUV.y - 0.5) * 2.0; // Convertir a rango [-1, 1]
        
        for(int i = 0; i < 20; i++) {
          if(i >= numBands) break;
          
          float bandY = bandPositions[i];
          float bandWidth = bandWidths[i];
          
          if(bandWidth > 0.0) {
            float distToBand = abs(y - bandY);
            float bandInfluence = smoothstep(bandWidth, bandWidth * 0.5, distToBand);
            
            // Color de banda con variación procedural
            vec3 bandColor = color * (1.2 + noise(vec2(float(i), seed)) * 0.3);
            color = mix(color, bandColor, bandInfluence * 0.6);
          }
        }
        
        // Rotación de bandas
        float rotatedU = sphereUV.x + bandRotation + time * 0.1;
        float bandNoise = noise(vec2(rotatedU * 10.0, sphereUV.y * 5.0));
        color += bandNoise * 0.1;
        
        // Aplicar tormenta si existe
        if(hasStorm > 0) {
          vec2 stormUV = (stormPos + 1.0) * 0.5;
          float distToStorm = distance(sphereUV, stormUV);
          float stormInfluence = smoothstep(stormRadius, stormRadius * 0.5, distToStorm);
          
          if(stormInfluence > 0.0) {
            vec3 stormColor = vec3(0.545, 0.0, 0.0); // darkred
            color = mix(color, stormColor, stormInfluence * 0.8);
          }
        }
        
        // Iluminación
        float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
        color *= lighting;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    return { fragmentShader, uniforms };
  };

  /**
   * Generar shader genérico para tipos no implementados
   */
  const generateGenericShader = (data: PlanetRenderingData, baseUniforms: any) => {
    const uniforms = {
      ...baseUniforms,
      surfaceDetail: { value: 5.0 },
      atmosphericHaze: { value: 0.1 }
    };

    const fragmentShader = `
      uniform float time;
      uniform float seed;
      uniform vec3 baseColor;
      uniform float surfaceDetail;
      uniform float atmosphericHaze;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vec3 color = baseColor;
        
        // Variaciones procedurales usando seed
        float surface = sin(vPosition.x * surfaceDetail + seed) * cos(vPosition.y * surfaceDetail + seed);
        color = mix(color, color * 1.3, surface * 0.3);
        
        // Efecto atmosférico
        float fresnel = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
        color = mix(color, vec3(0.5, 0.7, 1.0), fresnel * atmosphericHaze);
        
        // Iluminación
        float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
        color *= lighting;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    return { fragmentShader, uniforms };
  };

  /**
   * Generar shader UNIVERSAL que renderiza cualquier elemento que mande el backend
   */
  const generateUniversalShaderCode = (uniforms: any) => {
    const fragmentShader = `
      uniform float time;
      uniform float seed;
      uniform float planetHash;
      uniform vec3 baseColor;
      uniform int numElements;
      uniform int elementTypes[20];     // 1=patch, 2=cloud, 3=crystal, 4=band, 5=storm
      uniform float elementPositions[40]; // x,y pairs
      uniform float elementSizes[20];
      uniform float elementColors[80];  // r,g,b,a quads
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      // Función para convertir posición 3D a coordenadas de superficie sin distorsión
      vec3 get3DCoords(vec3 pos, vec2 elementPos) {
        // Convertir la posición del elemento de [-1,1] a ángulos esféricos
        float theta = elementPos.x * 3.14159; // Longitud
        float phi = (elementPos.y + 1.0) * 1.5708; // Latitud (0 a PI)
        
        // Crear vector 3D desde los ángulos
        vec3 elementDir = vec3(
          sin(phi) * cos(theta),
          cos(phi),
          sin(phi) * sin(theta)
        );
        
        return elementDir;
      }
      
      // Función de distancia geodésica en la esfera (sin distorsión en polos)
      float sphericalDistance(vec3 pos1, vec3 pos2) {
        // Normalizar las posiciones para trabajar en la superficie de la esfera
        vec3 p1 = normalize(pos1);
        vec3 p2 = normalize(pos2);
        
        // Calcular distancia angular usando dot product
        float angle = acos(clamp(dot(p1, p2), -1.0, 1.0));
        
        // Convertir a distancia en el rango [0,1]
        return angle / 3.14159;
      }
      
      void main() {
        // Color base del planeta
        vec3 color = baseColor;
        
        // Usar posición 3D normalizada directamente (sin UV mapping)
        vec3 normalPos = normalize(vPosition);
        
        // Variación procedural oceánica base suave
        vec3 depthPos = vPosition * 3.0 + vec3(seed);
        float depthNoise = fract(sin(dot(depthPos, vec3(17.123, 89.456, 43.789))) * 12758.5);
        color = mix(color, color * 0.95, depthNoise * 0.08); // Variación muy sutil
        
        // Renderizar TODOS los elementos que envíe el backend
        for(int i = 0; i < 20; i++) {
          if(i >= numElements) break;
          
          int elementType = elementTypes[i];
          vec2 elementPos = vec2(elementPositions[i*2], elementPositions[i*2+1]);
          float elementSize = elementSizes[i];
          vec4 elementColor = vec4(
            elementColors[i*4],
            elementColors[i*4+1], 
            elementColors[i*4+2],
            elementColors[i*4+3]
          );
          
          if(elementType == 0) continue; // Skip empty
          
          if(elementType == 4) { // Band - bandas horizontales
            // Las bandas usan latitud directamente
            float bandLatitude = elementPos.y;
            float currentLatitude = normalPos.y;
            
            float distToBand = abs(currentLatitude - bandLatitude);
            float influence = smoothstep(elementSize, elementSize * 0.3, distToBand);
            
            if(influence > 0.0) {
              // Añadir variación longitudinal suave
              float bandVariation = sin(atan(normalPos.z, normalPos.x) * 3.0 + seed) * 0.1 + 0.9;
              color = mix(color, elementColor.rgb, influence * elementColor.a * bandVariation);
            }
          } else {
            // Elementos puntuales usando distancia esférica 3D
            vec3 elementDir = get3DCoords(normalPos, elementPos);
            float dist = sphericalDistance(normalPos, elementDir);
            
            // Ajustar el tamaño del elemento para compensar la proyección esférica
            float adjustedSize = elementSize * 0.5;
            float influence = smoothstep(adjustedSize, adjustedSize * 0.3, dist);
            
            if(influence > 0.0) {
              // Diferentes formas según tipo
              if(elementType == 1) { // Patch - continentes/islas suaves
                // Usar coordenadas 3D para evitar distorsión y cortes
                vec3 coastPos = normalPos * 15.0 + vec3(planetHash * 1000.0);
                float coastalNoise = fract(sin(dot(coastPos, vec3(12.9898,78.233,37.719))) * 43758.5);
                
                // Bordes suaves pero definidos para continentes
                float landInfluence = smoothstep(0.0, 0.7, influence);
                landInfluence *= coastalNoise * 0.2 + 0.8;
                
                color = mix(color, elementColor.rgb, landInfluence * elementColor.a);
              } else if(elementType == 2) { // Cloud - difuso suavizado
                // Nubes usando coordenadas 3D sin animación
                vec3 cloudPos = normalPos * 8.0 + vec3(planetHash * 500.0);
                float cloudPattern = fract(sin(dot(cloudPos, vec3(12.9898,78.233,37.719))) * 43758.5);
                
                // Nubes más suaves
                float cloudInfluence = smoothstep(0.0, 0.9, influence);
                cloudInfluence *= cloudPattern * 0.15 + 0.85;
                color = mix(color, elementColor.rgb, cloudInfluence * elementColor.a * 0.5);
              } else if(elementType == 3) { // Crystal - angular
                // Usar distancia esférica para los cristales
                float crystalPattern = abs(sin(dist * 30.0 + planetHash * 10.0));
                float crystalInfluence = influence * crystalPattern;
                color = mix(color, elementColor.rgb, crystalInfluence * elementColor.a);
              } else if(elementType == 5) { // Storm - swirl
                // Tormentas sin animación temporal para evitar flickering
                float swirl = sin(dist * 20.0 + planetHash * 5.0) * influence;
                color = mix(color, elementColor.rgb, abs(swirl) * elementColor.a);
              }
            }
          }
        }
        
        // Variación procedural usando posición 3D normalizada (sin distorsión)
        vec3 noisePos = normalPos * 5.0 + vec3(seed + planetHash);
        float noise1 = fract(sin(dot(noisePos, vec3(12.9898, 78.233, 37.719))) * 43758.5);
        float noise2 = fract(sin(dot(noisePos * 1.7, vec3(35.9898, 46.233, 91.123))) * 23758.5);
        float smoothNoise = mix(noise1, noise2, 0.5);
        color = mix(color, color * 1.03, smoothNoise * 0.15); // Variación sutil pero visible
        
        // Iluminación realista
        float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
        color *= lighting;
        
        // Fresnel effect sutil para el borde (más realista que un falloff)
        float fresnel = pow(1.0 - abs(dot(vNormal, normalize(vPosition))), 2.0);
        color = mix(color, color * 0.7, fresnel * 0.3); // Oscurecer sutilmente en los bordes
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    return { fragmentShader, uniforms };
  };

  /**
   * Cargar datos del planeta desde la API o usar datos locales
   */
  const loadPlanetData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // 🎆 FRONTEND AHORA ES AGNÓSTICO - SIEMPRE usar API
      console.log('🌐 UNIVERSAL RENDERING: Frontend is agnostic, always use API for:', planetName);
      console.log('  🚀 Backend will provide ALL rendering data, frontend just renders it');
      
      // (Codigo local comentado - ahora siempre usamos API)
      // if (planetData && !needsAPIData) { ... }

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

      console.log('🔥 API DATA LOADED - FULL DEBUG:');
      console.log('  🌍 Planet:', data.planet_info.name, '- Type:', data.planet_info.type);
      console.log('  🌱 Seeds:', data.seeds);
      console.log('  🏗️ Surface Elements Full:', JSON.stringify(data.surface_elements, null, 2));
      
      if (data.surface_elements?.green_patches) {
        console.log('  🟢 Green Patches Count:', data.surface_elements.green_patches.length);
        data.surface_elements.green_patches.slice(0, 3).forEach((patch, i) => {
          console.log(`    Patch ${i}:`, patch.position, 'size:', patch.size, 'color:', patch.color);
        });
      }
      
      if (data.surface_elements?.cloud_bands) {
        console.log('  🌪️ Cloud Bands:', data.surface_elements.cloud_bands);
      }

      // Aplicar shaders procedurales usando los datos específicos del JSON
      console.log('🎨 Applying procedural shaders using JSON data for:', data.planet_info.type);
      
      // SIEMPRE usar datos procedurales del JSON, no shaders genéricos
      await applyProceduralShadersFromAPI(data);
      
      // También crear efectos modulares adicionales si están definidos
      if (data.surface_elements?.effects_3d) {
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