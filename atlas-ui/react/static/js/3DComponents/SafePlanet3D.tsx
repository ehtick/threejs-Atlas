/**
 * Safe Planet 3D - Componente ultra-robusto sin dependencias circulares
 * 
 * Este es un componente de emergencia que nunca debería fallar
 */

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface SafePlanet3DProps {
  planetName: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  autoRotate?: boolean;
  enableControls?: boolean;
  planetData?: {
    planet_type: string;
    atmosphere: string;
    diameter: number;
  };
  onError?: (error: string) => void;
}

export const SafePlanet3D: React.FC<SafePlanet3DProps> = ({
  planetName,
  containerClassName = '',
  width = 800,
  height = 600,
  autoRotate = true,
  enableControls = true,
  planetData,
  onError
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const planetRef = useRef<THREE.Mesh>();
  const controlsRef = useRef<OrbitControls>();
  const frameIdRef = useRef<number>();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Colores seguros por tipo de planeta
  const getPlanetColor = (type?: string): number => {
    const colors: { [key: string]: number } = {
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
    return colors[type?.toLowerCase() || ''] || 0x808080;
  };

  useEffect(() => {
    let mounted = true;
    
    const initThreeJS = () => {
      try {
        if (!mountRef.current || !mounted) return false;

        // Limpiar
        while (mountRef.current.firstChild) {
          mountRef.current.removeChild(mountRef.current.firstChild);
        }

        const container = mountRef.current;
        const w = container.clientWidth || width;
        const h = container.clientHeight || height;

        // Escena
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000511);
        sceneRef.current = scene;

        // Cámara
        const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
        camera.position.set(0, 0, 5);
        cameraRef.current = camera;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Iluminación
        const sunLight = new THREE.DirectionalLight(0xffffff, 1);
        sunLight.position.set(5, 3, 5);
        scene.add(sunLight);

        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        scene.add(ambientLight);

        // Planeta
        const geometry = new THREE.SphereGeometry(1, 64, 32);
        const material = new THREE.MeshLambertMaterial({
          color: getPlanetColor(planetData?.planet_type)
        });
        const planet = new THREE.Mesh(geometry, material);
        scene.add(planet);
        planetRef.current = planet;

        // Controles
        if (enableControls) {
          const controls = new OrbitControls(camera, renderer.domElement);
          controls.enableDamping = true;
          controls.autoRotate = autoRotate;
          controls.autoRotateSpeed = 0.5;
          controlsRef.current = controls;
        }

        return true;
      } catch (error) {
        console.error('Error initializing Three.js:', error);
        return false;
      }
    };

    const animate = () => {
      if (!mounted) return;
      
      frameIdRef.current = requestAnimationFrame(animate);

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      if (planetRef.current && !enableControls) {
        planetRef.current.rotation.y += 0.005;
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    const initialize = async () => {
      try {
        if (!mounted) return;
        
        if (initThreeJS()) {
          animate();
          if (mounted) setLoading(false);
        } else {
          if (mounted) setError('Failed to initialize 3D renderer');
        }
      } catch (error) {
        console.error('Initialization error:', error);
        if (mounted) {
          setError(error instanceof Error ? error.message : 'Unknown error');
          if (onError) onError(error instanceof Error ? error.message : 'Unknown error');
        }
      }
    };

    initialize();

    return () => {
      mounted = false;
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
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
          console.error('Cleanup error:', error);
        }
      }
    };
  }, [planetName, planetData?.planet_type, width, height, autoRotate, enableControls]);

  return (
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
            <div className="text-sm">Loading safe 3D planet...</div>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm rounded-t">
          <strong>Safe Mode:</strong> {error}
        </div>
      )}
      
      {!loading && !error && (
        <div className="absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs rounded-tr">
          <h3 className="text-lg font-bold">{planetName}</h3>
          <p className="text-sm opacity-80">Safe 3D Renderer</p>
          <p className="text-xs mt-1 opacity-60">Basic planet visualization</p>
        </div>
      )}
    </div>
  );
};