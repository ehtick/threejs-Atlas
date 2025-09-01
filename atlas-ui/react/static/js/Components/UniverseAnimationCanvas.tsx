// atlas-ui/react/static/js/Components/UniverseAnimationCanvas.tsx
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface UniverseAnimationCanvasProps {
  animationType: "core" | "multiverse" | "processing" | null;
  onAnimationComplete?: () => void;
}

const UniverseAnimationCanvas: React.FC<UniverseAnimationCanvasProps> = ({ animationType, onAnimationComplete }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const createCircleTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;

    ctx.clearRect(0, 0, 64, 64);

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1.0)");
    gradient.addColorStop(0.3, "rgba(255,255,255,0.8)");
    gradient.addColorStop(0.7, "rgba(255,255,255,0.2)");
    gradient.addColorStop(1, "rgba(255,255,255,0.0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.premultiplyAlpha = false;
    texture.format = THREE.RGBAFormat;
    return texture;
  };

  const initScene = () => {
    if (!mountRef.current) {
      return;
    }

    try {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000011);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
      camera.position.set(0, 0, 0.1);
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
      const cubeEdges = new THREE.EdgesGeometry(cubeGeometry);
      const cubeMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        linewidth: 5,
      });
      const universeCube = new THREE.LineSegments(cubeEdges, cubeMaterial);
      scene.add(universeCube);

      const bigBangPositions = new Float32Array([0, 0, 0]);
      const bigBangColors = new Float32Array([1, 1, 1]);
      const bigBangSizes = new Float32Array([10]);

      const bigBangGeometry = new THREE.BufferGeometry();
      bigBangGeometry.setAttribute("position", new THREE.BufferAttribute(bigBangPositions, 3));
      bigBangGeometry.setAttribute("color", new THREE.BufferAttribute(bigBangColors, 3));
      bigBangGeometry.setAttribute("size", new THREE.BufferAttribute(bigBangSizes, 1));

      const bigBangMaterial = new THREE.PointsMaterial({
        size: 7,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        alphaTest: 0.01,
        map: createCircleTexture(),
      });

      const bigBang = new THREE.Points(bigBangGeometry, bigBangMaterial);
      scene.add(bigBang);

      const maxGalaxies = 7500;
      const galaxyPositions = new Float32Array(maxGalaxies * 3);
      const galaxyColors = new Float32Array(maxGalaxies * 3);
      const galaxySizes = new Float32Array(maxGalaxies);
      const galaxyTargetPositions = new Float32Array(maxGalaxies * 3);
      const galaxyDirections = new Float32Array(maxGalaxies * 3);
      const galaxyDistances = new Float32Array(maxGalaxies);

      // Ordenar galaxias por distancia final para un lanzamiento progresivo
      const galaxyData = [];
      
      for (let i = 0; i < maxGalaxies; i++) {
        // Generar posición final aleatoria
        const attempts = 3 + Math.floor(Math.random() * 3);
        let minDistance = Infinity;
        let bestX = 0, bestY = 0, bestZ = 0;

        for (let attempt = 0; attempt < attempts; attempt++) {
          const tempX = (Math.random() - 0.5) * 10;
          const tempY = (Math.random() - 0.5) * 10;
          const tempZ = (Math.random() - 0.5) * 10;

          const distanceFromCenter = Math.sqrt(tempX * tempX + tempY * tempY + tempZ * tempZ);
          const biasWeight = Math.pow(Math.random(), 1.8) + distanceFromCenter * 0.1;

          if (biasWeight < minDistance) {
            minDistance = biasWeight;
            bestX = tempX;
            bestY = tempY;
            bestZ = tempZ;
          }
        }

        const distance = Math.sqrt(bestX * bestX + bestY * bestY + bestZ * bestZ);
        
        galaxyData.push({
          index: i,
          x: bestX,
          y: bestY,  
          z: bestZ,
          distance: distance,
          launchTime: Math.random() * 3, // Tiempo aleatorio de lanzamiento entre 0-3s
          speed: distance > 0 ? (2 + Math.random() * 3) / distance : 1 // Velocidad inversamente proporcional a la distancia
        });
      }

      // Inicializar arrays
      for (let i = 0; i < maxGalaxies; i++) {
        const data = galaxyData[i];
        
        // Todas empiezan en el centro
        galaxyPositions[i * 3] = 0;
        galaxyPositions[i * 3 + 1] = 0;
        galaxyPositions[i * 3 + 2] = 0;

        // Guardar datos en los arrays
        galaxyTargetPositions[i * 3] = data.x;
        galaxyTargetPositions[i * 3 + 1] = data.y;
        galaxyTargetPositions[i * 3 + 2] = data.z;

        galaxyDistances[i] = data.distance;

        if (data.distance > 0) {
          galaxyDirections[i * 3] = data.x / data.distance;
          galaxyDirections[i * 3 + 1] = data.y / data.distance;
          galaxyDirections[i * 3 + 2] = data.z / data.distance;
        } else {
          galaxyDirections[i * 3] = 0;
          galaxyDirections[i * 3 + 1] = 0;
          galaxyDirections[i * 3 + 2] = 1;
        }

        // Colores más intensos basados en distancia
        const intensity = Math.random() * 0.8 + 0.4;
        const distanceRatio = Math.min(data.distance / 5, 1);
        
        galaxyColors[i * 3] = intensity * (0.2 + distanceRatio * 0.8);
        galaxyColors[i * 3 + 1] = intensity * (0.5 + distanceRatio * 0.5);
        galaxyColors[i * 3 + 2] = intensity * (0.8 + distanceRatio * 0.2);

        galaxySizes[i] = Math.random() * 0.8 + 0.3;
      }

      const galaxyGeometry = new THREE.BufferGeometry();
      galaxyGeometry.setAttribute("position", new THREE.BufferAttribute(galaxyPositions, 3));
      galaxyGeometry.setAttribute("color", new THREE.BufferAttribute(galaxyColors, 3));
      galaxyGeometry.setAttribute("size", new THREE.BufferAttribute(galaxySizes, 1));

      const galaxyMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        alphaTest: 0.01,
        depthWrite: false,
        map: createCircleTexture(),
      });

      const galaxies = new THREE.Points(galaxyGeometry, galaxyMaterial);
      scene.add(galaxies);

      // EFECTOS DE EXPLOSIÓN ÉPICA (sin flash blanco de fondo)

      // Ondas de choque múltiples
      const shockwaves = [];
      for (let i = 0; i < 8; i++) {
        const wave = new THREE.Mesh(
          new THREE.SphereGeometry(1, 32, 32),
          new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(i * 0.08, 1, 0.7),
            transparent: true,
            opacity: 0,
            wireframe: true,
            blending: THREE.AdditiveBlending,
          })
        );
        shockwaves.push(wave);
        scene.add(wave);
      }


      // Partículas explosivas
      const explosionParticles = [];
      const particleCount = 200;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(
          new THREE.BoxGeometry(0.1, 0.1, 0.1),
          new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(Math.random() * 0.2, 1, 0.8),
            transparent: true,
            opacity: 0,
            blending: THREE.AdditiveBlending,
          })
        );
        
        particle.userData = {
          direction: new THREE.Vector3(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          ).normalize(),
          speed: Math.random() * 10 + 5,
          life: Math.random() * 2 + 1
        };
        
        explosionParticles.push(particle);
        scene.add(particle);
      }


      let startTime = Date.now();
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        
        const totalDuration = 8;
        const explosionDuration = 1.5; // Duración de la explosión épica
        
        // EXPLOSIÓN ÉPICA - Múltiples efectos simultáneos
        const explosionPhase = Math.min(elapsed / explosionDuration, 1);
        const isExploding = elapsed < explosionDuration;
        
        if (isExploding) {
          // Solo intensificar el núcleo - sin flash separado
          const flashIntensity = explosionPhase < 0.2 ? 
            Math.sin(explosionPhase * Math.PI * 10) * 0.5 + 1 : 
            Math.max(0, 1 - explosionPhase * 2);
          
          // ONDAS DE CHOQUE MÚLTIPLES
          shockwaves.forEach((wave, index) => {
            const waveDelay = index * 0.08;
            const waveProgress = Math.max(0, explosionPhase - waveDelay);
            
            if (waveProgress > 0) {
              const scale = waveProgress * (40 + index * 8);
              wave.scale.setScalar(scale);
              wave.material.opacity = Math.max(0, (1.2 - index * 0.1) - waveProgress * 0.8);
            }
          });


          // PARTÍCULAS EXPLOSIVAS
          explosionParticles.forEach(particle => {
            const particleLife = explosionPhase * particle.userData.life;
            if (particleLife > 0) {
              const distance = particleLife * particle.userData.speed;
              const pos = particle.userData.direction.clone().multiplyScalar(distance);
              particle.position.copy(pos);
              
              particle.material.opacity = Math.max(0, 1 - particleLife / particle.userData.life);
              particle.rotation.x += 0.2;
              particle.rotation.y += 0.15;
              particle.rotation.z += 0.25;
            }
          });

          // SHAKE VIOLENTO DE CÁMARA - Se aplica más tarde
          
          // FOV DISTORTION EXTREMA
          camera.fov = 75 + Math.sin(explosionPhase * Math.PI) * 40;
          camera.updateProjectionMatrix();
          
          // NÚCLEO CENTRAL EXPLOSIVO - El verdadero centro de la explosión
          const coreExplosionIntensity = Math.sin(elapsed * 80) * 0.5 + 1;
          bigBangMaterial.size = 15 + coreExplosionIntensity * 20 * (1 - explosionPhase);
          bigBangMaterial.opacity = Math.min(1.5, 1 + flashIntensity * 0.8 - explosionPhase);
        } else {
          // Post-explosión - núcleo desaparece
          bigBangMaterial.opacity = 0;
        }

        // LANZAMIENTO PROGRESIVO - Las estrellas salen una a una
        for (let i = 0; i < maxGalaxies; i++) {
          const data = galaxyData[i];
          const launchTime = data.launchTime;
          const speed = data.speed;
          
          if (elapsed > launchTime) {
            // Tiempo desde que esta estrella empezó a moverse
            const travelTime = elapsed - launchTime;
            
            // Distancia que ha viajado (con aceleración inicial)
            const progress = Math.min(travelTime * speed, 1);
            const smoothProgress = Math.pow(progress, 0.8);
            
            galaxyPositions[i * 3] = data.x * smoothProgress;
            galaxyPositions[i * 3 + 1] = data.y * smoothProgress;
            galaxyPositions[i * 3 + 2] = data.z * smoothProgress;
          } else {
            // Aún no ha salido, permanece en el centro
            galaxyPositions[i * 3] = 0;
            galaxyPositions[i * 3 + 1] = 0;
            galaxyPositions[i * 3 + 2] = 0;
          }
        }
        
        galaxyGeometry.attributes.position.needsUpdate = true;
        galaxyMaterial.opacity = Math.min(elapsed * 0.8, 1);

        // UNIVERSE CUBE - Rotación más pronunciada
        const rotationSpeed = elapsed * 0.1;
        universeCube.rotation.x = Math.sin(rotationSpeed * 0.7) * 0.3;
        universeCube.rotation.y = rotationSpeed * 0.8;
        universeCube.rotation.z = Math.cos(rotationSpeed * 0.5) * 0.25;

        // Las galaxias ROTAN CON el cubo
        galaxies.rotation.copy(universeCube.rotation);

        // CAMERA MOVEMENT - Mantenerse cerca pero girando alrededor
        const cameraDistance = 8 + Math.sin(elapsed * 0.3) * 2;

        // Cámara girando alrededor del cubo
        const cameraAngle = elapsed * 0.15;
        const cameraHeight = Math.sin(elapsed * 0.08) * 3;
        
        let finalCameraX = Math.cos(cameraAngle) * cameraDistance;
        let finalCameraY = cameraHeight;
        let finalCameraZ = Math.sin(cameraAngle) * cameraDistance;
        
        // Aplicar shake durante la explosión
        if (isExploding) {
          const shakeIntensity = Math.sin(explosionPhase * Math.PI) * 0.8;
          finalCameraX += (Math.random() - 0.5) * shakeIntensity;
          finalCameraY += (Math.random() - 0.5) * shakeIntensity;
          finalCameraZ += (Math.random() - 0.5) * shakeIntensity;
        }
        
        camera.position.set(finalCameraX, finalCameraY, finalCameraZ);
        
        // Siempre mirar hacia el centro del cubo
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);

        if (elapsed > totalDuration && onAnimationComplete) {
          onAnimationComplete();
          return;
        }

        animationIdRef.current = requestAnimationFrame(animate);
      };

      animate();
    } catch (error) {}
  };

  useEffect(() => {
    if (animationType && !isVisible) {
      setIsVisible(true);

      setTimeout(() => {
        initScene();
      }, 100);
    }
  }, [animationType, isVisible]);

  useEffect(() => {
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && mountRef.current && rendererRef.current.domElement.parentNode) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-50 bg-black"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default UniverseAnimationCanvas;
