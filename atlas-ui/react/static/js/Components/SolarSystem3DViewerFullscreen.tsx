import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface Planet {
  name: string;
  planet_type: string;
  diameter: number;
  orbital_radius: number;
  orbital_period_seconds: number;
  orbital_speed: number;
  axial_tilt: number;
  rotation_period_seconds: number;
  initial_orbital_angle: number;
  eccentricity_factor: number;
  mass: number;
}

interface Star {
  Type: string;
  Size: string;
  Color: string;
}

interface SolarSystem3DViewerFullscreenProps {
  planets: Planet[];
  stars: Star[];
  systemName: string;
  cosmicOriginTime: number;
  currentTime: number;
  onTimeOffsetChange: (offset: number) => void;
}

const SolarSystem3DViewerFullscreen: React.FC<SolarSystem3DViewerFullscreenProps> = ({ planets, stars, systemName, cosmicOriginTime, currentTime, onTimeOffsetChange }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const planetsRef = useRef<THREE.Mesh[]>([]);
  const orbitsRef = useRef<THREE.Line[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    sceneRef.current = scene;

    // Camera setup - wider FOV for fullscreen
    const camera = new THREE.PerspectiveCamera(
      60, // Wider FOV for fullscreen
      containerWidth / containerHeight,
      0.1,
      10000
    );
    camera.position.set(0, 120, 180); // Further back for better view
    camera.lookAt(0, 0, 0);

    // Renderer setup - fullscreen size
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0x000011, 1);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Planet type colors (exact copy from Python code)
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

    // Star colors (exact copy from Python code)
    const starColors: { [key: string]: string } = {
      red: "#FF4444",
      orange: "#FF8844",
      yellow: "#FFFF44",
      white: "#FFFFFF",
      blue: "#4488FF",
      purple: "#8844FF",
    };

    // Add stars at center - bigger for fullscreen
    const starGroup = new THREE.Group();
    stars.forEach((star, index) => {
      const starRadius = parseFloat(star.Size) * 4; // Bigger for fullscreen
      const starGeometry = new THREE.SphereGeometry(starRadius, 32, 32); // Higher quality
      const starColor = starColors[star.Color] || "#FFFF44";
      const starMaterial = new THREE.MeshBasicMaterial({
        color: starColor,
        transparent: true,
        opacity: 0.9,
      });

      const starMesh = new THREE.Mesh(starGeometry, starMaterial);

      // Position multiple stars in binary/tertiary systems
      if (stars.length === 1) {
        starMesh.position.set(0, 0, 0);
      } else if (stars.length === 2) {
        starMesh.position.set(index === 0 ? -starRadius * 2 : starRadius * 2, 0, 0);
      } else {
        // Tertiary system
        if (index === 0) starMesh.position.set(-starRadius * 2, 0, 0);
        else if (index === 1) starMesh.position.set(starRadius * 2, 0, 0);
        else starMesh.position.set(0, starRadius * 2, 0);
      }

      // Add glow effect
      const glowGeometry = new THREE.SphereGeometry(starRadius * 1.5, 32, 32);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: starColor,
        transparent: true,
        opacity: 0.3,
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      starMesh.add(glow);

      starGroup.add(starMesh);
    });
    scene.add(starGroup);

    // Find max orbital radius for scaling - bigger for fullscreen
    const maxOrbitalRadius = Math.max(...planets.map((p) => p.orbital_radius));
    const scaleFactor = 150; // Bigger scale for fullscreen

    // Create orbital paths and planets
    planets.forEach((planet, index) => {
      // Calculate orbital radius exactly like Python
      const relativeOrbitRadius = planet.orbital_radius / maxOrbitalRadius;
      const orbitRadius = 30 + relativeOrbitRadius * scaleFactor; // Bigger orbits

      const eccentricity = planet.eccentricity_factor;

      // Calculate ellipse parameters exactly like Python
      const semiMajorAxis = orbitRadius;
      const semiMinorAxis = semiMajorAxis * Math.sqrt(1 - eccentricity * eccentricity);

      // Create dashed orbital path exactly like Python code
      const numSegments = 360;
      const dashLength = 2;
      const gapLength = 4;

      for (let k = 0; k < numSegments; k += dashLength + gapLength) {
        const dashPoints = [];
        for (let j = k; j < Math.min(k + dashLength, numSegments - 1); j++) {
          const angle = (j / numSegments) * 2 * Math.PI;
          const x = semiMajorAxis * Math.cos(angle);
          const z = semiMinorAxis * Math.sin(angle);
          dashPoints.push(new THREE.Vector3(x, 0, z));
        }

        if (dashPoints.length > 1) {
          const dashGeometry = new THREE.BufferGeometry().setFromPoints(dashPoints);
          const dashMaterial = new THREE.LineBasicMaterial({
            color: 0x708090,
            transparent: true,
            opacity: 0.8,
            linewidth: 2, // Thicker lines
          });
          const dashLine = new THREE.Line(dashGeometry, dashMaterial);
          scene.add(dashLine);
          orbitsRef.current.push(dashLine);
        }
      }

      // Create planet - bigger for fullscreen with size limits
      const basePlanetRadius = planet.diameter / 8000;
      const planetRadius = Math.max(Math.min(basePlanetRadius, 8.0), 2.5); // Min 2.5, Max 8.0 for fullscreen
      const planetGeometry = new THREE.SphereGeometry(planetRadius, 32, 32); // Higher quality
      const planetColor = planetColors[planet.planet_type] || "#FFFFFF"; // Python fallback: "white"
      const planetMaterial = new THREE.MeshBasicMaterial({
        color: planetColor,
        transparent: true,
        opacity: 0.9,
      });

      const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);

      // Add glow effect to planet
      const planetGlow = new THREE.Mesh(
        new THREE.SphereGeometry(planetRadius * 1.5, 32, 32),
        new THREE.MeshBasicMaterial({
          color: planetColor,
          transparent: true,
          opacity: 0.2,
        })
      );
      planetMesh.add(planetGlow);

      scene.add(planetMesh);
      planetsRef.current.push(planetMesh);

      // Store planet data on mesh for animation
      (planetMesh as any).planetData = planet;
      (planetMesh as any).orbitRadius = orbitRadius;
      (planetMesh as any).semiMajorAxis = semiMajorAxis;
      (planetMesh as any).semiMinorAxis = semiMinorAxis;
    });

    // Ambient lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    // Point light from star
    const pointLight = new THREE.PointLight(0xffffff, 1, 2000);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Mouse and touch controls
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let autoRotate = false;
    let lastTouchDistance = 0;

    const handleMouseDown = (event: MouseEvent) => {
      isMouseDown = true;
      autoRotate = false;
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isMouseDown) return;

      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;

      // Rotate around the solar system
      const spherical = new THREE.Spherical();
      spherical.setFromVector3(camera.position);

      spherical.theta -= deltaX * 0.01;
      spherical.phi += deltaY * 0.01;

      spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));

      camera.position.setFromSpherical(spherical);
      camera.lookAt(0, 0, 0);

      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      setTimeout(() => {
        if (!isMouseDown) autoRotate = true;
      }, 3000);
    };

    // Combined wheel handler
    const handleKeyWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        // Time control with Ctrl+scroll
        event.preventDefault();
        if (event.deltaY > 0) {
          onTimeOffsetChange(86400); // +1 day
        } else {
          onTimeOffsetChange(-86400); // -1 day
        }
      } else {
        // Zoom with normal scroll
        event.preventDefault();
        const zoomSpeed = 0.1;
        const currentDistance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));

        if (event.deltaY > 0 && currentDistance < 800) {
          camera.position.multiplyScalar(1 + zoomSpeed);
        } else if (event.deltaY < 0 && currentDistance > 50) {
          camera.position.multiplyScalar(1 - zoomSpeed);
        }
      }
    };

    // ESC key to close fullscreen
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // This will be handled by parent component
        document.dispatchEvent(new CustomEvent("solar-system-close-fullscreen"));
      }
    };

    // Touch controls for mobile
    const handleTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      if (event.touches.length === 1) {
        // Single touch - rotation
        isMouseDown = true;
        autoRotate = false;
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
      } else if (event.touches.length === 2) {
        // Two finger touch - zoom
        const dx = event.touches[0].clientX - event.touches[1].clientX;
        const dy = event.touches[0].clientY - event.touches[1].clientY;
        lastTouchDistance = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      if (event.touches.length === 1 && isMouseDown) {
        // Single touch move - rotation
        const deltaX = event.touches[0].clientX - mouseX;
        const deltaY = event.touches[0].clientY - mouseY;

        const spherical = new THREE.Spherical();
        spherical.setFromVector3(camera.position);

        spherical.theta -= deltaX * 0.01;
        spherical.phi += deltaY * 0.01;
        spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi));

        camera.position.setFromSpherical(spherical);
        camera.lookAt(0, 0, 0);

        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
      } else if (event.touches.length === 2) {
        // Two finger move - zoom
        const dx = event.touches[0].clientX - event.touches[1].clientX;
        const dy = event.touches[0].clientY - event.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (lastTouchDistance > 0) {
          const zoomSpeed = 0.01;
          const scale = distance / lastTouchDistance;
          const currentDistance = camera.position.distanceTo(new THREE.Vector3(0, 0, 0));

          if (scale > 1 && currentDistance > 50) {
            camera.position.multiplyScalar(1 - zoomSpeed);
          } else if (scale < 1 && currentDistance < 800) {
            camera.position.multiplyScalar(1 + zoomSpeed);
          }
        }

        lastTouchDistance = distance;
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      event.preventDefault();
      isMouseDown = false;
      lastTouchDistance = 0;
      setTimeout(() => {
        if (!isMouseDown) autoRotate = true;
      }, 3000);
    };

    // Add event listeners
    const canvas = renderer.domElement;
    canvas.style.cursor = "grab";

    canvas.addEventListener("mousedown", (e) => {
      canvas.style.cursor = "grabbing";
      handleMouseDown(e);
    });
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", () => {
      canvas.style.cursor = "grab";
      handleMouseUp();
    });
    canvas.addEventListener("mouseleave", () => {
      canvas.style.cursor = "grab";
      handleMouseUp();
    });
    canvas.addEventListener("wheel", handleKeyWheel);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd, { passive: false });
    document.addEventListener("keydown", handleKeyDown);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Update planet positions based on current time
      planetsRef.current.forEach((planetMesh, index) => {
        const planet = (planetMesh as any).planetData;
        const semiMajorAxis = (planetMesh as any).semiMajorAxis;
        const semiMinorAxis = (planetMesh as any).semiMinorAxis;

        // Calculate orbital angle exactly like Python
        const orbitalPeriod = planet.orbital_period_seconds;
        const angleVelocityOrbit = (2 * Math.PI) / orbitalPeriod;
        const angleOrbit = (planet.initial_orbital_angle + currentTime * angleVelocityOrbit) % (2 * Math.PI);

        // Position planet exactly like Python
        planetMesh.position.x = semiMajorAxis * Math.cos(angleOrbit);
        planetMesh.position.z = semiMinorAxis * Math.sin(angleOrbit);
        planetMesh.position.y = 0;

        // Planet rotation
        const rotationPeriodSeconds = planet.rotation_period_seconds;
        const angleVelocityRotation = (2 * Math.PI) / rotationPeriodSeconds;
        planetMesh.rotation.y = (currentTime * angleVelocityRotation) % (2 * Math.PI);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);

      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseUp);
      canvas.removeEventListener("wheel", handleKeyWheel);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();

      // Clean up refs
      planetsRef.current = [];
      orbitsRef.current = [];
    };
  }, [planets, stars, currentTime, cosmicOriginTime]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default SolarSystem3DViewerFullscreen;
