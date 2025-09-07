// atlas-ui/react/static/js/Components/StarfieldWarpReveal.tsx
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

interface StarfieldWarpRevealProps {
  seedData?: {
    primordial_seed: string;
    sha256_seed: string;
    decimal_seed: string;
    cosmic_origin_time?: number;
    cosmic_origin_datetime?: string;
  } | null;
  onComplete?: () => void;
}

const StarfieldWarpReveal: React.FC<StarfieldWarpRevealProps> = ({ seedData, onComplete }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [showDataOverlay, setShowDataOverlay] = useState(false);
  const [dataOpacity, setDataOpacity] = useState(0);
  const [currentPhase, setCurrentPhase] = useState<"stars" | "warp" | "reveal">("stars");

  // Use actual seeds from API or fallback
  const primordialSeed = seedData?.primordial_seed || "COSMOS-" + Date.now() + "-GENESIS";
  const sha256Seed = seedData?.sha256_seed || Array.from({length: 64}, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join("").toUpperCase();
  const decimalSeed = seedData?.decimal_seed || Array.from({length: 77}, () => Math.floor(Math.random() * 10)).join("");

  // Create star texture similar to UniverseAnimationCanvas
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

  // Warp distortion shader - designed to be always active with smooth progression
  const WarpShader = {
    uniforms: {
      tDiffuse: { value: null },
      warpAmount: { value: 0.0 },
      time: { value: 0.0 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform float warpAmount;
      uniform float time;
      varying vec2 vUv;
      
      void main() {
        vec2 center = vec2(0.5, 0.5);
        vec2 direction = vUv - center;
        float distance = length(direction);
        
        // Very subtle radial stretch that's always active
        // Even at warpAmount = 0.001, there's a tiny effect
        float stretchBase = 1.0 + warpAmount * distance * distance * 2.0;
        vec2 stretchedUv = center + direction * stretchBase;
        
        // Chromatic aberration - very subtle at low values
        float aberrationAmount = warpAmount * distance * 0.015;
        vec2 redOffset = direction * aberrationAmount * 1.2;
        vec2 blueOffset = direction * aberrationAmount * -0.4;
        
        // Sample with offsets
        float red = texture2D(tDiffuse, stretchedUv + redOffset).r;
        float green = texture2D(tDiffuse, stretchedUv).g;
        float blue = texture2D(tDiffuse, stretchedUv + blueOffset).b;
        
        // Motion blur lines - scale with warpAmount for smooth progression
        float lineFrequency = 8.0 + warpAmount * 12.0; // Frequency increases with speed
        float lines = sin(atan(direction.y, direction.x) * lineFrequency + time * (20.0 + warpAmount * 80.0)) * 0.5 + 0.5;
        float lineIntensity = warpAmount * warpAmount; // Quadratic for very subtle start
        float lineEffect = lines * lineIntensity * 0.4 * distance;
        
        // Combine with smooth blending
        vec3 color = vec3(red, green, blue);
        color += vec3(lineEffect * 0.3, lineEffect * 0.5, lineEffect * 0.8) * smoothstep(0.0, 1.0, warpAmount);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  };

  const initScene = () => {
    if (!mountRef.current) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      sceneRef.current = scene;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
      camera.position.set(0, 0, 0);
      cameraRef.current = camera;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Post-processing setup
      const composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.3, 0.6, 0.3);
      composer.addPass(bloomPass);

      const warpPass = new ShaderPass(WarpShader);
      composer.addPass(warpPass);

      composerRef.current = composer;

      // Create starfield
      const starCount = 7500; // Same as UniverseAnimationCanvas
      const starsGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(starCount * 3);
      const colors = new Float32Array(starCount * 3);
      const sizes = new Float32Array(starCount);
      const velocities = new Float32Array(starCount * 3);
      const initialZ = new Float32Array(starCount);

      // Initialize stars
      for (let i = 0; i < starCount; i++) {
        // Position stars in a cylinder around the camera
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 50 + 5;
        const z = -Math.random() * 200 - 50; // Start behind the camera's view

        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = z;

        // Store initial Z for recycling
        initialZ[i] = z;

        // Velocity (initially slow)
        velocities[i * 3] = 0;
        velocities[i * 3 + 1] = 0;
        velocities[i * 3 + 2] = 0.5; // Initial forward speed

        // Colors (blueish-white stars)
        const intensity = Math.random() * 0.6 + 0.4;
        colors[i * 3] = intensity * 0.8;
        colors[i * 3 + 1] = intensity * 0.9;
        colors[i * 3 + 2] = intensity;

        // Sizes (matching UniverseAnimationCanvas scale)
        sizes[i] = Math.random() * 0.8 + 0.3;
      }

      starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      starsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      starsGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const starsMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        map: createCircleTexture(),
      });

      const stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);

      // Create warp streaks (initially hidden)
      const streakCount = 200;
      const streaksGeometry = new THREE.BufferGeometry();
      const streakPositions = new Float32Array(streakCount * 6); // 2 vertices per line
      const streakColors = new Float32Array(streakCount * 6);

      for (let i = 0; i < streakCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 30 + 10;
        
        // Start point
        streakPositions[i * 6] = Math.cos(angle) * radius;
        streakPositions[i * 6 + 1] = (Math.random() - 0.5) * 60;
        streakPositions[i * 6 + 2] = 10;
        
        // End point (stretched back)
        streakPositions[i * 6 + 3] = Math.cos(angle) * radius;
        streakPositions[i * 6 + 4] = streakPositions[i * 6 + 1];
        streakPositions[i * 6 + 5] = -20;

        // Colors
        const intensity = Math.random() * 0.5 + 0.5;
        for (let j = 0; j < 2; j++) {
          streakColors[i * 6 + j * 3] = intensity * 0.7;
          streakColors[i * 6 + j * 3 + 1] = intensity * 0.8;
          streakColors[i * 6 + j * 3 + 2] = intensity;
        }
      }

      streaksGeometry.setAttribute("position", new THREE.BufferAttribute(streakPositions, 3));
      streaksGeometry.setAttribute("color", new THREE.BufferAttribute(streakColors, 3));

      const streaksMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0,
        linewidth: 2,
      });

      const streaks = new THREE.LineSegments(streaksGeometry, streaksMaterial);
      scene.add(streaks);

      // Animation
      let startTime = Date.now();
      let speed = 0.1; // Start even slower
      let baseAcceleration = 0.005;
      let maxSpeed = 60;
      let warpTriggered = false;
      let dataRevealStarted = false;
      
      // Initialize warp effect immediately with minimal value
      const initialWarpPass = composerRef.current?.passes[2] as ShaderPass;
      if (initialWarpPass) {
        initialWarpPass.uniforms.warpAmount.value = 0.0001; // Tiny initial value
      }

      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;

        // Ultra smooth acceleration curve
        if (elapsed < 15) {
          // Exponential acceleration that starts very slow
          const t = elapsed / 15; // Normalize to 0-1
          const curve = Math.pow(t, 2.2); // Exponential curve
          speed = 0.1 + (maxSpeed - 0.1) * curve;
          
          // Smooth phase transitions based on speed
          if (speed > 15 && !warpTriggered) {
            warpTriggered = true;
            setCurrentPhase("warp");
          }
          
          if (speed > maxSpeed * 0.9 && !dataRevealStarted && elapsed > 10) {
            dataRevealStarted = true;
            setShowDataOverlay(true);
            setCurrentPhase("reveal");
            setTimeout(() => {
              setDataOpacity(1);
            }, 100);
          }
        } else {
          // After 15 seconds, slow down
          speed = Math.max(5, speed * 0.98);
        }

        // Update star positions
        const positions = starsGeometry.attributes.position.array as Float32Array;
        
        for (let i = 0; i < starCount; i++) {
          // Move stars forward
          positions[i * 3 + 2] += speed;

          // Recycle stars that pass the camera
          if (positions[i * 3 + 2] > 10) {
            positions[i * 3 + 2] = initialZ[i];
            
            // Randomize position for variety
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 50 + 5;
            positions[i * 3] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
          }
        }
        starsGeometry.attributes.position.needsUpdate = true;

        // Update warp streaks - start very subtle from the beginning
        if (speed > 3) { // Start earlier for smoother transition
          // Very gradual opacity curve starting from nearly invisible
          const streakProgress = (speed - 3) / (maxSpeed - 3);
          const streakIntensity = Math.pow(streakProgress, 2); // Quadratic for very gradual start
          streaksMaterial.opacity = streakIntensity * 0.8; // Max 0.8 opacity
          
          const streakPositions = streaksGeometry.attributes.position.array as Float32Array;
          for (let i = 0; i < streakCount; i++) {
            // Move streaks with speed-based velocity
            const streakSpeed = speed * (1.0 + streakIntensity * 1.0); // Streaks get faster as speed increases
            streakPositions[i * 6 + 2] += streakSpeed;
            
            // Stretch streaks based on speed - start short and grow
            const stretchFactor = 5 + speed * 2; // Start with short streaks
            streakPositions[i * 6 + 5] = streakPositions[i * 6 + 2] - stretchFactor;

            // Recycle streaks
            if (streakPositions[i * 6 + 2] > 20) {
              const angle = Math.random() * Math.PI * 2;
              const radius = Math.random() * 30 + 10;
              
              streakPositions[i * 6] = Math.cos(angle) * radius;
              streakPositions[i * 6 + 1] = (Math.random() - 0.5) * 60;
              streakPositions[i * 6 + 2] = -100;
              
              streakPositions[i * 6 + 3] = streakPositions[i * 6];
              streakPositions[i * 6 + 4] = streakPositions[i * 6 + 1];
              streakPositions[i * 6 + 5] = -100 - stretchFactor;
            }
          }
          streaksGeometry.attributes.position.needsUpdate = true;
        } else {
          streaksMaterial.opacity = 0;
        }

        // Update post-processing effects progressively
        const bloomPass = composer?.passes[1] as UnrealBloomPass;
        const warpPass = composer?.passes[2] as ShaderPass;

        if (bloomPass && warpPass) {
          // Ultra-smooth bloom progression from the very start
          const speedRatio = speed / maxSpeed; // Linear normalized
          const bloomCurve = Math.pow(speedRatio, 1.5); // Smooth curve
          bloomPass.strength = 0.1 + bloomCurve * 1.1; // From 0.1 to 1.2
          bloomPass.radius = 0.3 + bloomCurve * 0.6; // From 0.3 to 0.9

          // ULTRA SMOOTH warp effect - continuous from frame 1
          // Use a multi-stage curve for perfect progression
          const normalizedSpeed = speed / maxSpeed; // 0 to 1
          
          // Three-stage warp curve for ultimate smoothness
          let warpValue: number;
          if (normalizedSpeed < 0.3) {
            // Stage 1: Very subtle start (0 to 0.3)
            warpValue = normalizedSpeed * 0.05; // Linear, very small
          } else if (normalizedSpeed < 0.7) {
            // Stage 2: Acceleration (0.3 to 0.7)
            const t = (normalizedSpeed - 0.3) / 0.4;
            warpValue = 0.015 + Math.pow(t, 2) * 0.5; // Quadratic ramp
          } else {
            // Stage 3: Extreme warp (0.7 to 1.0)
            const t = (normalizedSpeed - 0.7) / 0.3;
            warpValue = 0.515 + Math.pow(t, 1.5) * 1.0; // Up to 1.515
          }
          
          warpPass.uniforms.warpAmount.value = warpValue;
          warpPass.uniforms.time.value = elapsed;
        }

        // Progressive camera shake - starts very subtle
        if (speed > 5) { // Start shake much earlier but very subtle
          // Ultra smooth progressive shake
          const shakeProgress = Math.pow((speed - 5) / (maxSpeed - 5), 3); // Cubic for very gradual start
          const shakeIntensity = shakeProgress * 1.0; // Max shake of 1.0
          
          // Add some variance to make it feel more organic
          const shakeX = (Math.random() - 0.5) * shakeIntensity;
          const shakeY = (Math.random() - 0.5) * shakeIntensity;
          
          camera.position.x = shakeX * (0.3 + shakeProgress * 0.7); // Scale up with speed
          camera.position.y = shakeY * (0.3 + shakeProgress * 0.7);
        } else {
          // Very smooth return to center
          camera.position.x *= 0.98;
          camera.position.y *= 0.98;
        }

        // Progressive FOV change - starts immediately but very subtle
        const fovProgress = Math.pow(speed / maxSpeed, 1.2); // Slightly more aggressive curve
        camera.fov = 75 + fovProgress * 30; // From 75 to 105 degrees for more dramatic effect
        camera.updateProjectionMatrix();

        // Render
        if (composerRef.current) {
          composerRef.current.render();
        } else {
          renderer.render(scene, camera);
        }

        // Complete animation after 18 seconds (extended for smoother progression)
        if (elapsed > 18) {
          if (onComplete) onComplete();
          return;
        }

        animationIdRef.current = requestAnimationFrame(animate);
      };

      animate();
    } catch (error) {
      console.error("Error initializing scene:", error);
    }
  };

  useEffect(() => {
    initScene();

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

  // Format decimal seed for display
  const formatDecimalSeed = (seed: string) => {
    return seed.match(/.{1,10}/g)?.join(" ") || seed;
  };

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Three.js mount point */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Data overlay */}
      {showDataOverlay && (
        <div 
          className="absolute inset-0 flex items-center justify-center z-[60] pointer-events-none"
          style={{
            opacity: dataOpacity,
            transition: "opacity 1.5s ease-in-out"
          }}
        >
          <div className="max-w-5xl mx-auto px-8 text-center">
            {/* Title with glow effect */}
            <h1 
              className="text-5xl md:text-7xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
              style={{
                textShadow: '0 0 40px rgba(6, 182, 212, 0.8), 0 0 80px rgba(147, 51, 234, 0.4)',
                animation: 'pulse 2s ease-in-out infinite'
              }}
            >
              UNIVERSAL GENESIS PROTOCOL
            </h1>

            {/* Seeds container with staggered reveal */}
            <div className="space-y-8">
              {/* Primordial Seed */}
              <div 
                className="opacity-0"
                style={{
                  animation: 'fadeInUp 0.8s ease-out 0.5s forwards'
                }}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-3 tracking-wider">
                  PRIMORDIAL SEED
                </h3>
                <div className="bg-black/50 backdrop-blur-md border border-cyan-400/30 rounded-lg p-4">
                  <code className="text-cyan-300 font-mono text-sm md:text-base break-all">
                    {primordialSeed}
                  </code>
                </div>
              </div>

              {/* SHA256 Hash */}
              <div 
                className="opacity-0"
                style={{
                  animation: 'fadeInUp 0.8s ease-out 1s forwards'
                }}
              >
                <h3 className="text-xl font-bold text-green-400 mb-3 tracking-wider">
                  QUANTUM HASH
                </h3>
                <div className="bg-black/50 backdrop-blur-md border border-green-400/30 rounded-lg p-4">
                  <code className="text-green-300 font-mono text-xs md:text-sm break-all">
                    {sha256Seed}
                  </code>
                </div>
              </div>

              {/* Decimal Seed */}
              <div 
                className="opacity-0"
                style={{
                  animation: 'fadeInUp 0.8s ease-out 1.5s forwards'
                }}
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-3 tracking-wider">
                  UNIVERSAL CONSTANT
                  <span className="text-sm opacity-70 ml-2">(77 digits)</span>
                </h3>
                <div className="bg-black/50 backdrop-blur-md border border-yellow-400/30 rounded-lg p-4">
                  <code className="text-yellow-300 font-mono text-xs md:text-sm">
                    {formatDecimalSeed(decimalSeed)}
                  </code>
                </div>
              </div>

              {/* Cosmic Origin Time */}
              {seedData?.cosmic_origin_time && (
                <div 
                  className="opacity-0"
                  style={{
                    animation: 'fadeInUp 0.8s ease-out 2s forwards'
                  }}
                >
                  <h3 className="text-xl font-bold text-purple-400 mb-3 tracking-wider">
                    TEMPORAL ORIGIN
                  </h3>
                  <div className="bg-black/50 backdrop-blur-md border border-purple-400/30 rounded-lg p-4">
                    <code className="text-purple-300 font-mono text-sm">
                      {seedData.cosmic_origin_time} ({seedData.cosmic_origin_datetime})
                    </code>
                  </div>
                </div>
              )}
            </div>

            {/* Status indicator */}
            <div 
              className="mt-12 opacity-0"
              style={{
                animation: 'fadeIn 1s ease-out 2.5s forwards'
              }}
            >
              <div className="inline-flex items-center gap-3 text-green-400 font-bold">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-lg tracking-wider">UNIVERSE INITIALIZED</span>
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            filter: brightness(1);
          }
          50% { 
            opacity: 0.9;
            filter: brightness(1.2);
          }
        }
      `}</style>

      {/* Phase indicator (bottom left) */}
      <div className="absolute bottom-4 left-4 z-[60] text-white/50 text-sm font-mono">
        <div className="flex items-center gap-2">
          <span>PHASE:</span>
          <span className={`
            px-2 py-1 rounded
            ${currentPhase === 'stars' ? 'bg-blue-500/20 text-blue-400' : ''}
            ${currentPhase === 'warp' ? 'bg-cyan-500/20 text-cyan-400' : ''}
            ${currentPhase === 'reveal' ? 'bg-green-500/20 text-green-400' : ''}
          `}>
            {currentPhase === 'stars' ? 'STAR ACCELERATION' : 
             currentPhase === 'warp' ? 'WARP SPEED' : 
             'DATA MANIFESTATION'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StarfieldWarpReveal;