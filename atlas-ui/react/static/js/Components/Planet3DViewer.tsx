import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import GasGiant3D from "../3DComponents/GasGiant3D";
import PlanetRings3D from "../3DComponents/PlanetRings3D";

interface Planet3DViewerProps {
  planetType?: string;
  planetName?: string;
  planetData?: {
    diameter?: number;
    density?: number;
    gravity?: number;
    mass?: number;
    orbital_radius?: number;
    rotation_period_seconds?: number;
    surface_temperature?: number;
    axial_tilt?: number;
    seed?: number;
  };
  cosmicOriginTime?: number;
  initialAngleRotation?: number;
  system?: {
    index: number;
    name: string;
  };
  galaxy?: {
    coordinates: number[];
    name: string;
  };
}


const Planet3DViewer: React.FC<Planet3DViewerProps> = ({ planetType = "Rocky", planetName = "Planet", planetData, cosmicOriginTime, initialAngleRotation, system, galaxy }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const containerWidth = 300;
    const containerHeight = 300;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);

    const planetColors: { [key: string]: string } = {
      "Gas Giant": "#FFA500",
      Anomaly: "#FFFFFF",
      Rocky: "#808080",
      Icy: "#ADD8E6",
      Oceanic: "#0000FF",
      Desert: "#FFD700",
      Lava: "#FF0000",
      Arid: "#800000",
      Swamp: "#008000",
      Tundra: "#F0F8FF",
      Forest: "#006400",
      Savannah: "#F4A460",
      Cave: "#D1D1D1",
      Crystalline: "#00FFFF",
      Metallic: "#C0C0C0",
      Toxic: "#800080",
      Radioactive: "#00FF00",
      Magma: "#FF4500",
      "Molten Core": "#FF8C00",
      Carbon: "#090909",
      Diamond: "#87CEFA",
      "Super Earth": "#90EE90",
      "Sub Earth": "#006400",
      "Frozen Gas Giant": "#ADD8E6",
      Nebulous: "#FFC0CB",
      Aquifer: "#00FFFF",
      Exotic: "#FF00FF",
    };

    const planetRadius = 75;

    const camera = new THREE.PerspectiveCamera(50, containerWidth / containerHeight, 0.1, 1000);
    camera.position.set(0, 0, 250);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0x000011, 1);
    container.appendChild(renderer.domElement);
    
    // Add orbit controls for zoom and rotation
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.minDistance = 100;
    controls.maxDistance = 500;
    controls.enablePan = false;

    const planetGeometry = new THREE.SphereGeometry(planetRadius, 32, 32);
    const planetColor = planetColors[planetType] || "#808080";
    const planetMaterial = new THREE.MeshLambertMaterial({
      color: planetColor,
      transparent: true,
      opacity: 0.9,
    });

    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planetMesh);

    const planetGlow = new THREE.Mesh(
      new THREE.SphereGeometry(planetRadius * 1.2, 32, 32),
      new THREE.MeshBasicMaterial({
        color: planetColor,
        transparent: true,
        opacity: 0.1,
      })
    );
    planetMesh.add(planetGlow);

    // Add planet-specific elements based on type
    if (planetType === "Gas Giant" && planetData) {
      GasGiant3D.create({
        scene,
        planetMesh,
        planetRadius,
        planetData: {
          diameter: planetData.diameter || 1000,
          density: planetData.density || 5.5,
          gravity: planetData.gravity || 9.8,
          mass: planetData.mass || 5.972e24,
          orbital_radius_m: (planetData.orbital_radius || 1) * 1.496e11, // Convert AU to meters
          rotation_period_seconds: planetData.rotation_period_seconds || 86400,
          surface_temperature: planetData.surface_temperature || 273,
          axial_tilt: planetData.axial_tilt || 0,
          seed: planetData.seed || 0,
          cosmicOriginTime,
          initialAngleRotation
        },
        planetName
      }).catch(error => {
        // Gas Giant creation failed
      });
    }

    // Add ring system for all planet types that have complete data
    if (planetData && planetData.mass && planetData.orbital_radius && 
        planetData.rotation_period_seconds && planetData.surface_temperature && 
        planetData.axial_tilt !== undefined) {
      PlanetRings3D.create({
        scene,
        planetMesh,
        planetRadius,
        planetData: {
          diameter: planetData.diameter || 1000,
          density: planetData.density || 5.5,
          gravity: planetData.gravity || 9.8,
          mass: planetData.mass,
          orbital_radius_m: planetData.orbital_radius * 1.496e11, // Convert AU to meters
          rotation_period_seconds: planetData.rotation_period_seconds,
          surface_temperature: planetData.surface_temperature,
          axial_tilt: planetData.axial_tilt,
          seed: planetData.seed || 0,
          cosmicOriginTime,
          initialAngleRotation
        },
        planetName,
        system,
        galaxy
      }).catch(error => {
        // Ring system creation failed
      });
    }

    // Increase ambient lighting for better visibility
    const ambientLight = new THREE.AmbientLight(0x808080, 1.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 1000);
    pointLight.position.set(100, 100, 100);
    scene.add(pointLight);
    
    // Add additional fill light for Gas Giants to reduce dark areas
    if (planetType === "Gas Giant") {
      const fillLight = new THREE.PointLight(0xffffff, 1.2, 1000);
      fillLight.position.set(-100, -100, 100);
      scene.add(fillLight);
    }

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Update controls
      controls.update();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      planetGeometry.dispose();
      planetMaterial.dispose();
    };
  }, [planetType, planetName]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-xs text-gray-300 mb-2">Planet Preview</div>
      <div ref={mountRef} className="border border-white/20 rounded bg-black/20" style={{ width: "300px", height: "300px" }} />
      <div className="text-xs text-gray-400 mt-2 text-center">
        <div className="text-[10px] text-gray-500">{planetName} - {planetType}</div>
        <div className="text-[9px] text-gray-600 mt-1">Drag to rotate • Scroll to zoom</div>
      </div>
    </div>
  );
};

export default Planet3DViewer;