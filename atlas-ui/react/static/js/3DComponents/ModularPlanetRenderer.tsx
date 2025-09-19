// atlas-ui/react/static/js/3DComponents/ModularPlanetRenderer.tsx

import React, { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { addQRToScreenshot } from "../Components/QRGenerator";
import { addCopyrightWatermark } from "../Components/CopyrightWatermark";
import ExportingOverlay from "../Components/ExportingOverlay";

import { effectRegistry, EffectInstance } from "../3DEffects/EffectRegistry";
import { createPlanetEffectConfig, EffectsLogger } from "../3DEffects";
import { DebugPlanetData, useDebugPlanetData } from "../Utils/DebugPlanetData.tsx";
import { getPlanetBaseColor } from "../3DEffects/PlanetColorBase";
import { PlanetLayerSystem } from "./PlanetLayerSystem";
import { MoonSystem } from "./MoonSystem";
import { ToxicPostProcessingEffect, createToxicPostProcessingFromPythonData } from "../3DEffects/ToxicPostProcessing";

const NORMALIZED_PLANET_RADIUS = 2.5;

const calculateExactCameraDistance = (): number => {
  const fovRadians = (45 * Math.PI) / 180;
  const desiredProportion = 0.5;
  return NORMALIZED_PLANET_RADIUS / (Math.tan(fovRadians / 2) * desiredProportion);
};

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
  onMoonSelected?: (moon: any | null) => void;
  planetUrl?: string;
}

interface PlanetRenderingData {
  planet_info: {
    name: string;
    type: string;
    base_color: string;
    radius: number;
    orbital_radius?: number;
  };
  surface_elements?: any;
  atmosphere?: any;
  rings?: any;
  moons?: {
    count: number;
    roche_limit: number;
    hill_radius: number;
    moons: Array<{
      name: string;
      properties: {
        mass_kg: number;
        radius_km: number;
        density_kg_m3: number;
        type: string;
        origin: string;
      };
      orbit: {
        semi_major_axis_km: number;
        eccentricity: number;
        inclination_deg: number;
        orbital_period_seconds: number;
        orbital_period_days: number;
        current_angle: number;
        position: { x: number; y: number; z: number };
      };
      visuals: {
        base_color: string;
        roughness: number;
        metalness: number;
        normal_strength: number;
        relative_size: number;
        has_atmosphere: boolean;
        atmosphere_color?: string;
        atmosphere_opacity?: number;
      };
      surface: any;
      procedural: any;
    }>;
    render_settings: {
      max_visible_distance: number;
      lod_distances: number[];
    };
  };
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
  seeds?: {
    shape_seed: number;
    config_seed: string;
    planet_seed: number;
  };
}

interface RendererStats {
  activeEffects: number;
  enabledEffects: number;
  frameRate: number;
  renderTime: number;
}

export const ModularPlanetRenderer = forwardRef<{ captureScreenshot: () => void }, ModularPlanetRendererProps>(({ planetName, containerClassName = "", width = 800, height = 600, autoRotate = true, enableControls = true, showDebugInfo = false, planetData, cosmicOriginTime, initialAngleRotation, onDataLoaded, onEffectsCreated, onError, onMoonSelected, planetUrl }, ref) => {
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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [renderingData, setRenderingData] = useState<PlanetRenderingData | null>(null);
  const [effects, setEffects] = useState<EffectInstance[]>([]);
  const [stats, setStats] = useState<RendererStats>({
    activeEffects: 0,
    enabledEffects: 0,
    frameRate: 0,
    renderTime: 0,
  });

  const activeEffectsRef = useRef<EffectInstance[]>([]);
  const lastFrameTimeRef = useRef<number>(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const planetLayerSystemRef = useRef<PlanetLayerSystem | null>(null);
  const moonSystemRef = useRef<MoonSystem | null>(null);
  const toxicPostProcessingRef = useRef<ToxicPostProcessingEffect | null>(null);

  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());

  const mouseDownRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const isDraggingRef = useRef<boolean>(false);

  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [selectedMoon, setSelectedMoon] = useState<any | null>(null);

  const cameraAnimationRef = useRef<{
    isAnimating: boolean;
    startPosition: THREE.Vector3;
    startTarget: THREE.Vector3;
    endPosition: THREE.Vector3;
    endTarget: THREE.Vector3;
    startTime: number;
    duration: number;
  } | null>(null);

  useImperativeHandle(ref, () => ({
    captureScreenshot: () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current || isGeneratingImage) return;

      setIsGeneratingImage(true);

      if (controlsRef.current) {
        controlsRef.current.enabled = false;
      }

      const renderer = rendererRef.current;
      const scene = sceneRef.current;
      const camera = cameraRef.current;

      const originalWidth = renderer.domElement.width;
      const originalHeight = renderer.domElement.height;

      const scaleFactor = 3840 / originalWidth;

      const scaledObjects: any[] = [];
      scene.traverse((object: any) => {
        if (object.isPoints && object.material) {
          const mat = object.material;
          if (mat.size !== undefined) {
            scaledObjects.push({ material: mat, originalSize: mat.size });
            const isPulsatingCubeParticle = (mat as any).isPulsatingCubeParticle === true;
            const particleScaleFactor = isPulsatingCubeParticle ? scaleFactor * 0.3 : scaleFactor * 1;
            mat.size = mat.size * particleScaleFactor;
          }
          if (mat.uniforms) {
            const isPulsatingCubeParticle = (mat as any).isPulsatingCubeParticle === true;
            const particleScaleFactor = isPulsatingCubeParticle ? scaleFactor * 0.3 : scaleFactor * 1;

            if (mat.uniforms.size) {
              scaledObjects.push({ material: mat, uniform: "size", originalValue: mat.uniforms.size.value });
              mat.uniforms.size.value = mat.uniforms.size.value * particleScaleFactor;
            }
            if (mat.uniforms.scale) {
              scaledObjects.push({ material: mat, uniform: "scale", originalValue: mat.uniforms.scale.value });
              mat.uniforms.scale.value = mat.uniforms.scale.value * particleScaleFactor;
            }
          }
          if (object.geometry && object.geometry.attributes.size) {
            const sizeAttribute = object.geometry.attributes.size;
            const originalSizes = sizeAttribute.array.slice();
            scaledObjects.push({
              geometry: object.geometry,
              originalSizeArray: originalSizes,
            });

            const isPulsatingCubeParticle = (mat as any).isPulsatingCubeParticle === true;
            const particleScaleFactor = isPulsatingCubeParticle ? scaleFactor * 0.3 : scaleFactor * 1;

            for (let i = 0; i < sizeAttribute.array.length; i++) {
              sizeAttribute.array[i] *= particleScaleFactor;
            }
            sizeAttribute.needsUpdate = true;
          }
        }
        if (object.isSprite) {
          scaledObjects.push({
            object: object,
            originalScale: object.scale.clone(),
          });
          object.scale.multiplyScalar(scaleFactor * 1);
        }
        if (object.isLine && object.material) {
          const mat = object.material;
          if (mat.linewidth !== undefined) {
            scaledObjects.push({ material: mat, originalLinewidth: mat.linewidth });
            mat.linewidth = mat.linewidth * scaleFactor * 1;
          }
        }
      });

      const highResWidth = 3840;
      const highResHeight = 3840;
      renderer.setSize(highResWidth, highResHeight);
      camera.aspect = 1;
      camera.updateProjectionMatrix();

      renderer.render(scene, camera);

      renderer.domElement.toBlob(
        (blob) => {
          if (blob) {
            const tempCanvas = document.createElement("canvas");
            const ctx = tempCanvas.getContext("2d");
            tempCanvas.width = highResWidth;
            tempCanvas.height = highResHeight;

            if (ctx) {
              const img = new Image();
              img.onload = async () => {
                ctx.drawImage(img, 0, 0);

                addCopyrightWatermark(ctx, { imageWidth: highResWidth, imageHeight: highResHeight });

                if (planetUrl) {
                  await addQRToScreenshot(ctx, highResWidth, highResHeight, {
                    type: "planet",
                    stargateUrl: planetUrl,
                  });
                }

                tempCanvas.toBlob(
                  (watermarkedBlob) => {
                    if (watermarkedBlob) {
                      const url = URL.createObjectURL(watermarkedBlob);
                      const link = document.createElement("a");
                      link.href = url;
                      link.download = `planet_${planetName}_${Date.now()}.jpg`;
                      link.click();
                      URL.revokeObjectURL(url);
                    }
                  },
                  "image/jpeg",
                  1.0
                );
              };

              const url = URL.createObjectURL(blob);
              img.src = url;
            }
          }

          scaledObjects.forEach(({ material, object, originalSize, originalScale, originalLinewidth, uniform, originalValue, geometry, originalSizeArray }) => {
            if (originalSize !== undefined) material.size = originalSize;
            if (originalScale !== undefined) object.scale.copy(originalScale);
            if (originalLinewidth !== undefined) material.linewidth = originalLinewidth;
            if (uniform && originalValue !== undefined) material.uniforms[uniform].value = originalValue;
            if (geometry && originalSizeArray) {
              const sizeAttribute = geometry.attributes.size;
              for (let i = 0; i < originalSizeArray.length; i++) {
                sizeAttribute.array[i] = originalSizeArray[i];
              }
              sizeAttribute.needsUpdate = true;
            }
          });

          renderer.setSize(originalWidth, originalHeight);
          camera.aspect = originalWidth / originalHeight;
          camera.updateProjectionMatrix();

          if (controlsRef.current) {
            controlsRef.current.enabled = true;
          }
          setIsGeneratingImage(false);
        },
        "image/jpeg",
        1.0
      );
    },
    isGeneratingImage,
  }));

  const realCurrentTime = Math.floor(Date.now() / 1000);
  const [timeOffset, setTimeOffset] = useState(0);
  const baseCosmicOriginTime = cosmicOriginTime || renderingData?.timing?.cosmic_origin_time || Date.now() / 1000 - 3600;
  const currentTime = realCurrentTime - baseCosmicOriginTime + timeOffset;

  currentTimeRef.current = currentTime;

  const handleResize = useCallback(() => {
    if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;

    const container = mountRef.current;
    const containerWidth = container.clientWidth || 400;
    const containerHeight = container.clientHeight || 400;

    rendererRef.current.setSize(containerWidth, containerHeight);

    if (toxicPostProcessingRef.current) {
      toxicPostProcessingRef.current.setSize(containerWidth, containerHeight);
    }

    cameraRef.current.aspect = containerWidth / containerHeight;
    cameraRef.current.updateProjectionMatrix();
  }, []);

  const applyProceduralShadersFromAPI = async (planetData: PlanetRenderingData) => {
    if (!planetMeshRef.current || !sceneRef.current || !planetLayerSystemRef.current) return;

    EffectsLogger.log("Applying modular effects from API data", {
      planet: planetData.planet_info.name,
      type: planetData.planet_info.type,
    });

    try {
      clearActiveEffects();

      const baseColor = getPlanetBaseColor(planetData);
      planetLayerSystemRef.current.updateBaseColor(baseColor);

      const newEffects = effectRegistry.createEffectsFromPythonPlanetData(planetData, NORMALIZED_PLANET_RADIUS, planetMeshRef.current, sceneRef.current, planetLayerSystemRef.current);

      const planetType = planetData.planet_info?.type || (planetData.surface_elements as any)?.planet_type || (planetData as any).planet_type;
      if ((planetType === "toxic" || planetType === "Toxic") && sceneRef.current && cameraRef.current && rendererRef.current) {
        try {
          const toxicPostProcessing = createToxicPostProcessingFromPythonData(
            sceneRef.current,
            cameraRef.current,
            rendererRef.current,
            NORMALIZED_PLANET_RADIUS,
            {
              planet_type: "toxic",
              toxic_intensity: 0.8,
              atmosphere_thickness: 0.6,
            },
            planetData.seeds?.planet_seed
          );

          if (toxicPostProcessing) {
            toxicPostProcessingRef.current = toxicPostProcessing;

            const toxicPostProcessingInstance: EffectInstance = {
              id: `effect_toxic_postprocessing_${Date.now()}`,
              type: "toxic_post_processing",
              effect: {
                dispose: () => toxicPostProcessing.dispose(),
                update: (deltaTime: number) => toxicPostProcessing.update(deltaTime),
                updateUniforms: (deltaTime: number) => toxicPostProcessing.update(deltaTime),
                addToScene: () => {},
                apply: () => {},
              } as any,
              priority: 100,
              enabled: true,
              name: "Toxic Post-Processing (Bloom + Godrays + Chromatic Aberration)",
            };

            (effectRegistry as any).effects.set(toxicPostProcessingInstance.id, toxicPostProcessingInstance);
            newEffects.push(toxicPostProcessingInstance);

            EffectsLogger.log("Created toxic post-processing effects");
          }
        } catch (error) {
          EffectsLogger.error("Error creating toxic post-processing", error);
        }
      } else {
        if (toxicPostProcessingRef.current) {
          toxicPostProcessingRef.current.dispose();
          toxicPostProcessingRef.current = null;
        }
      }

      setEffects(newEffects);
      activeEffectsRef.current = newEffects;

      if (onEffectsCreated) {
        onEffectsCreated(newEffects);
      }

      EffectsLogger.log(`Successfully applied ${newEffects.length} modular effects`);
      updateStats();
    } catch (error) {
      EffectsLogger.error("Error applying modular effects", error);
      applyFallbackEffects();
    }
  };

  const initializeThreeJS = useCallback(() => {
    if (!mountRef.current) {
      return false;
    }

    try {
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }

      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      planetMeshRef.current = null;
      orbitLineRef.current = null;

      const container = mountRef.current;
      const containerWidth = container.clientWidth || width || 400;
      const containerHeight = container.clientHeight || height || 400;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000511);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(45, containerWidth / containerHeight, 0.1, 10000);

      const cameraDistance = calculateExactCameraDistance();

      camera.position.set(0, 0, cameraDistance);
      camera.lookAt(0, 0, 0);
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });

      renderer.setSize(containerWidth, containerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      renderer.domElement.className = "";

      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      setupLighting(scene, null);

      createBasePlanet(scene);
      if (enableControls) {
        setupControls(camera, renderer.domElement);
      }

      return true;
    } catch (error) {
      return false;
    }
  }, [renderingData, planetData, cosmicOriginTime]);

  const calculateSunAngle = (planetData?: any): number => {
    if (!planetData) {
      return 0;
    }

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

  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const fillLightRef = useRef<THREE.DirectionalLight | null>(null);
  const sunSphereRef = useRef<THREE.Mesh | null>(null);
  const orbitLineRef = useRef<THREE.Line | null>(null);

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

  const updateLightingWithRealData = (planetData: any) => {
    if (!sunLightRef.current || !sceneRef.current) {
      return;
    }

    const sunAngle = calculateSunAngle(planetData);
    const sunDistance = 10;
    const actualSunAngle = sunAngle + Math.PI;

    const orbitalVariationY = Math.sin(sunAngle) * 5;

    const sunX = sunDistance * Math.cos(actualSunAngle);
    const sunY = orbitalVariationY;
    const sunZ = sunDistance * Math.sin(actualSunAngle);

    sunLightRef.current.position.set(sunX, sunY, sunZ);
    sunLightRef.current.target.position.set(0, 0, 0);
    if (!sceneRef.current.children.includes(sunLightRef.current.target)) {
      sceneRef.current.add(sunLightRef.current.target);
    }

    if (fillLightRef.current) {
      fillLightRef.current.position.set(-sunX * 0.5, 0, -sunZ * 0.5);
    }

    if (planetLayerSystemRef.current && sunLightRef.current) {
      planetLayerSystemRef.current.updateFromThreeLight(sunLightRef.current);
    }

    if (sunLightRef.current) {
      effectRegistry.updateLightForAllEffects(sunLightRef.current);
    }
  };

  const setupLighting = (scene: THREE.Scene, planetData?: any) => {
    if (!planetData) {
      const defaultSunLight = new THREE.DirectionalLight(0xffffff, 2.0);
      defaultSunLight.position.set(-10, 5, 10);
      defaultSunLight.target.position.set(0, 0, 0);
      defaultSunLight.castShadow = true;
      setupShadowProperties(defaultSunLight);
      scene.add(defaultSunLight);
      scene.add(defaultSunLight.target);
      sunLightRef.current = defaultSunLight;

      const defaultFillLight = new THREE.DirectionalLight(0xffffff, 0.01);
      defaultFillLight.position.set(8, -3, -5);
      scene.add(defaultFillLight);
      fillLightRef.current = defaultFillLight;

      setTimeout(() => {
        if (planetLayerSystemRef.current && defaultSunLight) {
          planetLayerSystemRef.current.updateFromThreeLight(defaultSunLight);
        }
        if (defaultSunLight) {
          effectRegistry.updateLightForAllEffects(defaultSunLight);
        }
      }, 50);

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

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.005);
    fillLight.position.set(-sunX * 0.5, 0, -sunZ * 0.5);
    scene.add(fillLight);
    fillLightRef.current = fillLight;

    if (!scene.children.find((child) => child instanceof THREE.AmbientLight)) {
    }

    if (planetLayerSystemRef.current && sunLight) {
      planetLayerSystemRef.current.updateFromThreeLight(sunLight);
    }

    if (sunLight) {
      effectRegistry.updateLightForAllEffects(sunLight);
    }
  };

  const createBasePlanet = (scene: THREE.Scene) => {
    const planetGeometry = new THREE.SphereGeometry(NORMALIZED_PLANET_RADIUS, 128, 64);

    const tempMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
    const planetMesh = new THREE.Mesh(planetGeometry, tempMaterial);
    planetMesh.castShadow = true;
    planetMesh.receiveShadow = true;
    planetMesh.position.set(0, 0, 0);

    scene.add(planetMesh);
    planetMeshRef.current = planetMesh;

    const defaultColor = new THREE.Color(0x808080);
    planetLayerSystemRef.current = new PlanetLayerSystem(planetMesh, defaultColor);
    planetLayerSystemRef.current.addToScene(scene);

    if (cameraRef.current) {
      const defaultCosmicOriginTime = 514080000;
      moonSystemRef.current = new MoonSystem(scene, NORMALIZED_PLANET_RADIUS, cameraRef.current, new THREE.Vector3(0, 0, 0), defaultCosmicOriginTime);
    }
  };

  const handleMouseDown = useCallback((event: MouseEvent) => {
    const rect = mountRef.current?.getBoundingClientRect();
    if (!rect) return;

    mouseDownRef.current = {
      x: event.clientX,
      y: event.clientY,
      time: Date.now(),
    };
    isDraggingRef.current = false;
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!mouseDownRef.current) return;

    const deltaX = event.clientX - mouseDownRef.current.x;
    const deltaY = event.clientY - mouseDownRef.current.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance > 5) {
      isDraggingRef.current = true;
    }
  }, []);

  const handleMoonClick = useCallback((event: MouseEvent) => {
    if (!cameraRef.current || !sceneRef.current || !moonSystemRef.current || !controlsRef.current) return;

    if (!mouseDownRef.current) return;

    const timeSinceMouseDown = Date.now() - mouseDownRef.current.time;
    const wasDragging = isDraggingRef.current;

    mouseDownRef.current = null;
    isDraggingRef.current = false;

    if (wasDragging || timeSinceMouseDown > 500) {
      return;
    }

    const rect = mountRef.current?.getBoundingClientRect();
    if (!rect) return;

    mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);

    const clickedMoon = moonSystemRef.current.getMoonAtPosition(raycasterRef.current);

    if (clickedMoon) {
      setSelectedMoon(clickedMoon);

      if (onMoonSelected) {
        onMoonSelected(clickedMoon);
      }

      const moonPosition = moonSystemRef.current.getMoonPosition(clickedMoon.name);
      if (moonPosition) {
        const focusDistance = NORMALIZED_PLANET_RADIUS * 8;
        const targetPosition = new THREE.Vector3(moonPosition.x, moonPosition.y + focusDistance * 0.3, moonPosition.z + focusDistance);

        animateCameraToTarget(targetPosition, moonPosition);
      }
    } else {
      const planetIntersects = raycasterRef.current.intersectObject(planetMeshRef.current || new THREE.Object3D(), true);

      if (planetIntersects.length > 0) {
        setSelectedMoon(null);

        if (onMoonSelected) {
          onMoonSelected(null);
        }
        const planetPosition = new THREE.Vector3(0, 0, 0);
        const cameraDistance = calculateExactCameraDistance();
        const targetPosition = new THREE.Vector3(0, 0, cameraDistance);

        animateCameraToTarget(targetPosition, planetPosition);
      } else {
        setSelectedMoon(null);

        if (onMoonSelected) {
          onMoonSelected(null);
        }
      }
    }
  }, []);

  const animateCameraToTarget = useCallback((targetPosition: THREE.Vector3, targetLookAt: THREE.Vector3) => {
    if (!cameraRef.current || !controlsRef.current) return;

    const camera = cameraRef.current;
    const controls = controlsRef.current;

    cameraAnimationRef.current = {
      isAnimating: true,
      startPosition: camera.position.clone(),
      startTarget: controls.target.clone(),
      endPosition: targetPosition,
      endTarget: targetLookAt,
      startTime: performance.now(),
      duration: 1500,
    };

    controls.enabled = false;
  }, []);

  const setupControls = (camera: THREE.PerspectiveCamera, domElement: HTMLElement) => {
    const controls = new OrbitControls(camera, domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const exactDistance = calculateExactCameraDistance();

    controls.minDistance = exactDistance * 0.5;
    controls.maxDistance = exactDistance * 2;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.5;
    controls.enablePan = true;
    controls.enableZoom = true;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;
  };

  const loadPlanetDataOnly = useCallback(async () => {
    if ((window as any).isLoadingPlanetData) {
      return;
    }
    (window as any).isLoadingPlanetData = true;

    try {
      setLoading(true);
      setError(null);

      EffectsLogger.log("Loading planet data from API", { planetName });

      const apiUrl = `/api/planet/rendering-data`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to fetch planet data");
      }
      const planetApiData = result.planet_data;
      const timingApiData = result.timing;
      const renderingApiData = result.rendering_data;

      const data: PlanetRenderingData = {
        planet_info: renderingApiData?.planet_info || {
          name: planetApiData.name,
          type: planetApiData.planet_type,
          base_color: "#808080",
          radius: planetApiData.diameter / 15000,
          orbital_radius: planetApiData.orbital_radius,
        },

        surface_elements: renderingApiData?.surface_elements,
        atmosphere: renderingApiData?.atmosphere,
        rings: renderingApiData?.rings,
        moons: renderingApiData?.moons,
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
          system_max_orbital_radius: planetApiData.system_max_orbital_radius,
        },
        original_planet_data: planetApiData,
        seeds: renderingApiData?.seeds,
      };
      setRenderingData(data);

      renderingDataRef.current = data;

      EffectsLogger.log("API data loaded successfully", {
        planet: data.planet_info.name,
        type: data.planet_info.type,
        hasEffects: !!data.surface_elements,
        fullRenderingData: renderingApiData,
      });

      updateLightingWithRealData(data);

      if (data.moons) {
        (data as any).pendingMoonData = data.moons;
      }

      if (onDataLoaded) {
        onDataLoaded(data);
      }

      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setError(errorMessage);

      if (onError) {
        onError(errorMessage);
      }
      return null;
    } finally {
      setLoading(false);
      (window as any).isLoadingPlanetData = false;
    }
  }, [planetName, onDataLoaded, onError]);

  const loadPlanetData = useCallback(async () => {
    if ((window as any).isLoadingPlanetData) {
      return;
    }
    (window as any).isLoadingPlanetData = true;

    try {
      setLoading(true);
      setError(null);

      EffectsLogger.log("Loading planet data from API", { planetName });

      const apiUrl = `/api/planet/rendering-data`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to fetch planet data");
      }

      const planetApiData = result.planet_data;
      const timingApiData = result.timing;
      const renderingApiData = result.rendering_data;

      const data: PlanetRenderingData = {
        planet_info: renderingApiData?.planet_info || {
          name: planetApiData.name,
          type: planetApiData.planet_type,
          base_color: "#808080",
          radius: planetApiData.diameter / 15000,
          orbital_radius: planetApiData.orbital_radius,
        },

        surface_elements: renderingApiData?.surface_elements,
        atmosphere: renderingApiData?.atmosphere,
        rings: renderingApiData?.rings,
        moons: renderingApiData?.moons,
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
          system_max_orbital_radius: planetApiData.system_max_orbital_radius,
        },
        original_planet_data: planetApiData,
        seeds: renderingApiData?.seeds,
      };
      setRenderingData(data);

      renderingDataRef.current = data;

      EffectsLogger.log("API data loaded successfully", {
        planet: data.planet_info.name,
        type: data.planet_info.type,
        hasEffects: !!data.surface_elements,
        fullRenderingData: renderingApiData,
      });

      updateLightingWithRealData(data);

      if (data.moons) {
        if (!moonSystemRef.current && cameraRef.current && sceneRef.current) {
          const cosmicOriginTime = data.timing?.cosmic_origin_time || 514080000;
          moonSystemRef.current = new MoonSystem(sceneRef.current, NORMALIZED_PLANET_RADIUS, cameraRef.current, new THREE.Vector3(0, 0, 0), cosmicOriginTime);
        }

        if (moonSystemRef.current) {
          const moonSystemData = {
            ...data.moons,
            cosmic_origin_time: data.timing?.cosmic_origin_time || 514080000,
            planet_mass: data.original_planet_data?.mass || 1e24,
            planet_radius: NORMALIZED_PLANET_RADIUS,
            moons: data.moons.moons.map((moon) => ({
              ...moon,
              rotation: {
                rotation_period_s: moon.orbit.orbital_period_seconds || 86400,
                rotation_period_hours: (moon.orbit.orbital_period_seconds || 86400) / 3600,
                angular_velocity_rad_s: (2 * Math.PI) / (moon.orbit.orbital_period_seconds || 86400),
                is_tidally_locked: true,
              },
            })),
          };
          moonSystemRef.current.loadMoonSystem(moonSystemData);
        }
      }

      if (orbitLineRef.current && sceneRef.current) {
        sceneRef.current.remove(orbitLineRef.current);
        orbitLineRef.current.geometry.dispose();
        (orbitLineRef.current.material as THREE.LineBasicMaterial).dispose();
        orbitLineRef.current = null;
      }

      await applyProceduralShadersFromAPI(data);

      if (onDataLoaded) {
        onDataLoaded(data);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
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

  const updatePlanetPositionWithAPIData = useCallback(() => {
    if (!renderingData || !planetMeshRef.current) {
      return;
    }
    const orbitalPeriod = planetData?.orbital_period_seconds || 365.25 * 24 * 3600;
    const angleVelocityOrbit = (2 * Math.PI) / orbitalPeriod;
    const initialOrbitalAngle = renderingData.timing?.initial_orbital_angle || 0;

    const realCurrentTime = Date.now() / 1000;
    const timeOffset = 0;
    const baseCosmicOriginTime = cosmicOriginTime || renderingData.timing?.cosmic_origin_time || Date.now() / 1000 - 3600;
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

  const applyAPIDataToScene = useCallback(
    async (apiData?: PlanetRenderingData) => {
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

        await applyProceduralShadersFromAPI(dataToUse);
      } catch (error) {
        EffectsLogger.error("Error in applyProceduralShadersFromAPI:", error);
        applyFallbackEffects();
      }
    },
    [renderingData]
  );

  const applyFallbackEffects = () => {
    if (!sceneRef.current || !planetMeshRef.current) return;

    EffectsLogger.warn("Applying fallback effects for planet type:", planetData?.planet_type);

    try {
      clearActiveEffects();

      if (planetMeshRef.current.material instanceof THREE.MeshStandardMaterial) {
        const fallbackColor = 0x666666;
        planetMeshRef.current.material.color.setHex(fallbackColor);
      }

      try {
        const fallbackConfig = createPlanetEffectConfig("generic");

        const fallbackEffects = effectRegistry.createEffectsFromList(fallbackConfig, NORMALIZED_PLANET_RADIUS, planetMeshRef.current);

        fallbackEffects.forEach((effect) => {
          if (effect.effect.addToScene && sceneRef.current && planetMeshRef.current) {
            effect.effect.addToScene(sceneRef.current, planetMeshRef.current.position);
          }
        });

        activeEffectsRef.current = fallbackEffects;
        setEffects(fallbackEffects);
      } catch (effectError) {}

      updateStats();
    } catch (error) {
      EffectsLogger.error("Error applying fallback effects", error);
    }
  };

  const clearActiveEffects = () => {
    activeEffectsRef.current.forEach((effect) => {
      try {
        effectRegistry.removeEffect(effect.id);

        if (effect.effect.dispose) {
          effect.effect.dispose();
        }
      } catch (error) {}
    });

    if (toxicPostProcessingRef.current) {
      toxicPostProcessingRef.current.dispose();
      toxicPostProcessingRef.current = null;
    }

    activeEffectsRef.current = [];
    setEffects([]);
  };

  const animate = useCallback(() => {
    frameIdRef.current = requestAnimationFrame(animate);

    const currentTime = performance.now();
    const deltaTime = clockRef.current.getDelta();

    if (cameraAnimationRef.current?.isAnimating && cameraRef.current && controlsRef.current) {
      const animation = cameraAnimationRef.current;
      const elapsed = currentTime - animation.startTime;
      const progress = Math.min(elapsed / animation.duration, 1);

      const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
      const easedProgress = easeInOutCubic(progress);

      const camera = cameraRef.current;
      const controls = controlsRef.current;

      camera.position.lerpVectors(animation.startPosition, animation.endPosition, easedProgress);
      controls.target.lerpVectors(animation.startTarget, animation.endTarget, easedProgress);

      camera.lookAt(controls.target);
      controls.update();

      if (progress >= 1) {
        cameraAnimationRef.current.isAnimating = false;
        controls.enabled = true;
        cameraAnimationRef.current = null;
      }
    } else if (controlsRef.current) {
      controlsRef.current.update();
    }

    try {
      effectRegistry.updateAllEffects(deltaTime, planetMeshRef.current?.rotation.y, cameraRef.current || undefined);
    } catch (error) {}

    if (planetMeshRef.current && renderingDataRef.current) {
      const currentPlanetName = renderingDataRef.current.planet_info?.name || planetName;

      const apiData = renderingDataRef.current.original_planet_data;
      const orbitalPeriod = apiData?.orbital_period_seconds || 365.25 * 24 * 3600;

      const initialOrbitalAngle = renderingDataRef.current.timing?.initial_orbital_angle || 0;

      const currentCosmicOriginTime = cosmicOriginTime || renderingDataRef.current.timing?.cosmic_origin_time || Date.now() / 1000 - 3600;
      const axialTilt = apiData?.axial_tilt || 0;

      const angleVelocityOrbit = (2 * Math.PI) / orbitalPeriod;

      const angleOrbit = (initialOrbitalAngle + currentTimeRef.current * angleVelocityOrbit) % (2 * Math.PI);

      const systemMaxOrbitalRadius = renderingDataRef.current.timing?.max_orbital_radius || renderingDataRef.current.timing?.system_max_orbital_radius;
      const actualOrbitalRadius = apiData?.orbital_radius;

      if (!systemMaxOrbitalRadius || !actualOrbitalRadius) {
        return;
      }

      const relativeOrbitRadius = actualOrbitalRadius / systemMaxOrbitalRadius;
      const scaleFactor = 80;
      const orbitRadius = 20 + relativeOrbitRadius * scaleFactor;

      const eccentricity = apiData?.eccentricity_factor || 0.1;
      const semiMajorAxis = orbitRadius;
      const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity);

      planetMeshRef.current.position.set(0, 0, 0);

      const rotationPeriod = apiData?.rotation_period_seconds || 86400;
      const angleVelocityRotation = (2 * Math.PI) / rotationPeriod;
      planetMeshRef.current.rotation.y = (currentTimeRef.current * angleVelocityRotation) % (2 * Math.PI);

      planetMeshRef.current.rotation.z = axialTilt * (Math.PI / 180);
    }

    activeEffectsRef.current.forEach((effectInstance) => {
      if (effectInstance.effect.updateUniforms) {
        effectInstance.effect.updateUniforms(deltaTime);
      }
    });

    const toxicPostProcessingEffect = Array.from((effectRegistry as any).effects.values()).find((effect: any) => effect.type === "toxic_post_processing");
    const toxicPostProcessingEnabled = (toxicPostProcessingEffect as any)?.enabled || false;
    if (toxicPostProcessingRef.current && toxicPostProcessingEnabled) {
      toxicPostProcessingRef.current.update(deltaTime);

      if (sunLightRef.current) {
        toxicPostProcessingRef.current.updateLightPosition(sunLightRef.current.position, cameraRef.current!);
      }
    }

    if (rendererRef.current && sceneRef.current && cameraRef.current) {
      if (moonSystemRef.current) {
        moonSystemRef.current.update();
      }

      const renderStartTime = performance.now();

      if (toxicPostProcessingRef.current && toxicPostProcessingEnabled) {
        toxicPostProcessingRef.current.render();
      } else {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }

      const renderTime = performance.now() - renderStartTime;

      if (currentTime - lastFrameTimeRef.current > 5000) {
        const frameRate = 1000 / (currentTime - lastFrameTimeRef.current);
        updateStats();
        setStats((prevStats) => ({
          ...prevStats,
          frameRate: Math.round(frameRate),
          renderTime: Math.round(renderTime * 100) / 100,
        }));
        lastFrameTimeRef.current = currentTime;
      }
    }
  }, []);

  const updateStats = useCallback(() => {
    const registryStats = effectRegistry.getStats();
    setStats((prevStats) => ({
      ...prevStats,
      activeEffects: registryStats.activeEffects,
      enabledEffects: registryStats.enabledEffects,
    }));
  }, []);

  useEffect(() => {
    let isMounted = true;

    const initialize = async () => {
      try {
        if (!isMounted) return;

        const apiData = await loadPlanetDataOnly();

        if (!isMounted) return;

        if (!initializeThreeJS()) {
          if (isMounted) setError("Failed to initialize 3D renderer");
          return;
        }

        if (!isMounted) return;
        animate();

        if (mountRef.current && "ResizeObserver" in window) {
          resizeObserverRef.current = new ResizeObserver(handleResize);
          resizeObserverRef.current.observe(mountRef.current);
        }

        window.addEventListener("resize", handleResize);

        if (mountRef.current) {
          mountRef.current.addEventListener("mousedown", handleMouseDown);
          mountRef.current.addEventListener("mousemove", handleMouseMove);
          mountRef.current.addEventListener("click", handleMoonClick);
        }

        if (!isMounted) return;
        if (apiData) {
          await applyAPIDataToScene(apiData);
        } else {
          applyFallbackEffects();
        }
      } catch (error) {
        if (isMounted) {
          setError(error instanceof Error ? error.message : "Unknown initialization error");
        }
      }
    };

    initialize();

    return () => {
      isMounted = false;

      renderingDataRef.current = null;

      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }

      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      window.removeEventListener("resize", handleResize);

      if (mountRef.current) {
        mountRef.current.removeEventListener("mousedown", handleMouseDown);
        mountRef.current.removeEventListener("mousemove", handleMouseMove);
        mountRef.current.removeEventListener("click", handleMoonClick);
      }

      clearActiveEffects();

      if (planetLayerSystemRef.current) {
        planetLayerSystemRef.current.dispose();
        planetLayerSystemRef.current = null;
      }

      if (moonSystemRef.current) {
        moonSystemRef.current.dispose();
        moonSystemRef.current = null;
      }

      if (controlsRef.current) {
        controlsRef.current.dispose();
      }

      if (sunSphereRef.current && sceneRef.current) {
        sceneRef.current.remove(sunSphereRef.current);
        sunSphereRef.current.geometry.dispose();
        (sunSphereRef.current.material as THREE.MeshBasicMaterial).dispose();
        sunSphereRef.current = null;
      }

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
        } catch (error) {}
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const registryStats = effectRegistry.getStats();
      setStats((prevStats) => ({
        ...prevStats,
        activeEffects: registryStats.activeEffects,
        enabledEffects: registryStats.enabledEffects,
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (renderingData) {
      if (sceneRef.current && planetMeshRef.current) {
        updatePlanetPositionWithAPIData();
      }
    }
  }, [renderingData, updatePlanetPositionWithAPIData]);

  useEffect(() => {
    if (renderingData && (renderingData as any).pendingMoonData && moonSystemRef.current) {
      const moonData = (renderingData as any).pendingMoonData;
      const moonSystemData = {
        ...moonData,
        cosmic_origin_time: renderingData.timing?.cosmic_origin_time || 514080000,
        planet_mass: renderingData.original_planet_data?.mass || 1e24,
        planet_radius: NORMALIZED_PLANET_RADIUS,
        moons: moonData.moons.map((moon: any) => ({
          ...moon,
          rotation: {
            rotation_period_s: moon.orbit.orbital_period_seconds || 86400,
            rotation_period_hours: (moon.orbit.orbital_period_seconds || 86400) / 3600,
            angular_velocity_rad_s: (2 * Math.PI) / (moon.orbit.orbital_period_seconds || 86400),
            is_tidally_locked: true,
          },
        })),
      };
      moonSystemRef.current.loadMoonSystem(moonSystemData);

      delete (renderingData as any).pendingMoonData;
    }
  }, [renderingData, moonSystemRef.current]);

  useDebugPlanetData(renderingData);

  return (
    <div className={`relative ${containerClassName}`}>
      {showDebugInfo && renderingData && <DebugPlanetData planetData={renderingData} showInPage={true} showInConsole={true} />}

      <div ref={mountRef} className="w-full h-full" style={{ minHeight: "300px", aspectRatio: "1" }} />

      <ExportingOverlay isVisible={isGeneratingImage} />

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
        <div className="absolute bottom-0 left-0 p-2 text-white bg-black bg-opacity-50 max-w-xs rounded-tr-lg">
          <h3 className="text-xs font-bold">{renderingData.planet_info.name}</h3>
          {renderingData.moons && <div className="text-xs mt-1">Moons: {renderingData.moons.count}</div>}
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
                {effect.type} ({effect.enabled ? "ON" : "OFF"})
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export const ExampleModularPlanet: React.FC<{ planetName?: string }> = ({ planetName = "metallic_test_planet" }) => {
  return (
    <div className="w-full h-screen bg-gray-900">
      <ModularPlanetRenderer ref={null} planetName={planetName} containerClassName="w-full h-full" autoRotate={true} enableControls={true} showDebugInfo={true} onDataLoaded={(data) => {}} onEffectsCreated={(effects) => {}} onError={(error) => {}} />
    </div>
  );
};
