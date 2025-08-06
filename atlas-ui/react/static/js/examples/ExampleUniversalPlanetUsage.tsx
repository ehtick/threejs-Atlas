import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import UniversalPlanet3D from '../3DComponents/UniversalPlanet3D';

interface ExampleUniversalPlanetUsageProps {
  planetName: string;
  containerClassName?: string;
}

const ExampleUniversalPlanetUsage: React.FC<ExampleUniversalPlanetUsageProps> = ({
  planetName,
  containerClassName = "w-full h-96"
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [renderingData, setRenderingData] = useState<any>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let planetMesh: THREE.Mesh;
    let animationId: number;
    
    const initThreeJS = async () => {
      try {
        // Create scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000011);
        
        // Create camera
        camera = new THREE.PerspectiveCamera(
          75,
          mountRef.current!.clientWidth / mountRef.current!.clientHeight,
          0.1,
          1000
        );
        camera.position.z = 5;
        
        // Create renderer
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current!.appendChild(renderer.domElement);
        
        // Create basic planet geometry (will be replaced by UniversalPlanet3D)
        const geometry = new THREE.SphereGeometry(1, 64, 64);
        const material = new THREE.MeshLambertMaterial({ color: 0x888888 });
        planetMesh = new THREE.Mesh(geometry, material);
        scene.add(planetMesh);
        
        // Add basic lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);
        
        // Initialize Universal Planet 3D
        await UniversalPlanet3D.create({
          scene,
          planetMesh,
          planetRadius: 100, // This will be overridden by the API data
          planetName,
          onDataLoaded: (data) => {
            setRenderingData(data);
            setIsLoading(false);
            console.log('Planet rendering data loaded:', data);
          }
        });
        
        // Animation loop
        const animate = () => {
          animationId = requestAnimationFrame(animate);
          
          // Basic camera rotation for demo
          camera.position.x = Math.cos(Date.now() * 0.0005) * 5;
          camera.position.z = Math.sin(Date.now() * 0.0005) * 5;
          camera.lookAt(0, 0, 0);
          
          renderer.render(scene, camera);
        };
        
        animate();
        
      } catch (err) {
        console.error('Error initializing 3D planet:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        setIsLoading(false);
      }
    };
    
    initThreeJS();
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
      
      if (planetMesh) {
        if (planetMesh.geometry) planetMesh.geometry.dispose();
        if (planetMesh.material) {
          if (Array.isArray(planetMesh.material)) {
            planetMesh.material.forEach(material => material.dispose());
          } else {
            planetMesh.material.dispose();
          }
        }
      }
    };
  }, [planetName]);
  
  if (error) {
    return (
      <div className={`${containerClassName} flex items-center justify-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded`}>
        <div className="text-center">
          <h3 className="font-bold">Error Loading Planet</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`${containerClassName} relative`}>
      <div ref={mountRef} className="w-full h-full" />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Loading {planetName}...</p>
          </div>
        </div>
      )}
      
      {renderingData && !isLoading && (
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-xs">
          <h3 className="font-bold text-lg mb-2">{renderingData.planet_info.name}</h3>
          <div className="text-sm space-y-1">
            <p><strong>Type:</strong> {renderingData.planet_info.type}</p>
            <p><strong>Diameter:</strong> {(renderingData.planet_info.diameter / 1000).toFixed(2)} km</p>
            <p><strong>Gravity:</strong> {renderingData.planet_info.gravity.toFixed(2)} m/s²</p>
            {renderingData.atmosphere && (
              <p><strong>Atmosphere:</strong> {renderingData.atmosphere.type}</p>
            )}
            {renderingData.rings && renderingData.rings.has_rings && (
              <p><strong>Has Rings:</strong> Yes</p>
            )}
            {renderingData.life_forms && renderingData.life_forms.type !== "None" && (
              <p><strong>Life:</strong> {renderingData.life_forms.type}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExampleUniversalPlanetUsage;