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

interface DecryptingTextProps {
  text: string;
  duration: number;
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
  const [decryptedPrimordial, setDecryptedPrimordial] = useState("");
  const [decryptedHash, setDecryptedHash] = useState("");
  const [decryptedDecimal, setDecryptedDecimal] = useState("");
  const [decryptedTime, setDecryptedTime] = useState("");
  const [showPrimordial, setShowPrimordial] = useState(false);
  const [showHash, setShowHash] = useState(false);
  const [showDecimal, setShowDecimal] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

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

        // Sizes (doubled for better visibility)
        sizes[i] = Math.random() * 1.6 + 0.6; // Doubled from 0.8 + 0.3
      }

      starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      starsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      starsGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const starsMaterial = new THREE.PointsMaterial({
        size: 0.2, // Doubled from 0.1
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
      let speed = 0.3; // Start slower for better buildup
      let baseAcceleration = 0.005;
      let maxSpeed = 25; // Much lower max speed for coherent warp effect
      let warpTriggered = false;
      let dataRevealStarted = false;
      
      // Initialize warp effect immediately with minimal value
      const initialWarpPass = composerRef.current?.passes[2] as ShaderPass;
      if (initialWarpPass) {
        initialWarpPass.uniforms.warpAmount.value = 0.0005; // Very tiny initial value
      }

      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;

        // Slower, smoother acceleration curve
        if (elapsed < 10) { // Longer acceleration phase
          // Smoother acceleration curve for better warp buildup
          const t = elapsed / 10; // Normalize to 0-1
          const curve = Math.pow(t, 2); // Quadratic curve for smoother acceleration
          speed = 0.3 + (maxSpeed - 0.3) * curve;
          
          // Earlier phase transitions
          if (speed > 8 && !warpTriggered) { // Reduced from 15 to 8
            warpTriggered = true;
            setCurrentPhase("warp");
          }
        } else if (elapsed < 16) { // Maintain max speed during reveal
          // Keep at max speed while showing data
          speed = maxSpeed;
          
          // Trigger data reveal
          if (!dataRevealStarted && elapsed > 11) {
            dataRevealStarted = true;
            setShowDataOverlay(true);
            setCurrentPhase("reveal");
            setTimeout(() => {
              setDataOpacity(1);
            }, 100);
          }
        } else {
          // After 16 seconds, slowly decelerate
          speed = Math.max(8, maxSpeed * Math.pow(0.97, elapsed - 16)); // Gradual slowdown but stays above 8
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

        // Update warp streaks - start very early
        if (speed > 2) { // Start even earlier
          // Very gradual opacity curve starting from nearly invisible
          const streakProgress = (speed - 2) / (maxSpeed - 2);
          const streakIntensity = Math.pow(streakProgress, 1.5); // Less extreme curve for earlier visibility
          streaksMaterial.opacity = streakIntensity * 0.9; // Slightly higher max opacity
          
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
          // Bloom always proportional to speed
          const speedRatio = speed / maxSpeed; // Linear normalized
          // Linear progression for consistent growth
          bloomPass.strength = 0.15 + speedRatio * 1.05; // From 0.15 to 1.2, always visible
          bloomPass.radius = 0.4 + speedRatio * 0.5; // From 0.4 to 0.9

          // Completely smooth and proportional warp effect
          // Always active, growing with speed
          const normalizedSpeed = speed / maxSpeed; // 0 to 1
          
          // Smoother curve that creates a more realistic warp effect
          // Less extreme at max speed for better visual coherence
          const warpValue = Math.pow(normalizedSpeed, 1.8) * 0.8; // Smoother curve, max 0.8 for coherent visuals
          
          // Always apply the warp, even at minimum speed
          warpPass.uniforms.warpAmount.value = Math.max(0.001, warpValue); // Small minimum for subtle start
          warpPass.uniforms.time.value = elapsed;
        }

        // Progressive camera shake - starts earlier
        if (speed > 3) { // Start shake even earlier
          // More noticeable progressive shake
          const shakeProgress = Math.pow((speed - 3) / (maxSpeed - 3), 2.5); // Smoother curve
          const shakeIntensity = shakeProgress * 1.2; // Slightly more shake
          
          // Add some variance to make it feel more organic
          const shakeX = (Math.random() - 0.5) * shakeIntensity;
          const shakeY = (Math.random() - 0.5) * shakeIntensity;
          
          camera.position.x = shakeX * (0.2 + shakeProgress * 0.8);
          camera.position.y = shakeY * (0.2 + shakeProgress * 0.8);
        } else {
          // Very smooth return to center
          camera.position.x *= 0.98;
          camera.position.y *= 0.98;
        }

        // FOV always proportional to speed - but with reasonable limits
        const normalizedSpeed = speed / maxSpeed; // 0 to 1
        // Smooth FOV change that doesn't get too extreme
        const fovCurve = Math.pow(normalizedSpeed, 0.7); // Slightly curved for better feel
        camera.fov = 75 + fovCurve * 25; // From 75 to 100 degrees max - more realistic range
        camera.updateProjectionMatrix();

        // Render
        if (composerRef.current) {
          composerRef.current.render();
        } else {
          renderer.render(scene, camera);
        }

        // Complete animation after 20 seconds to allow full experience
        if (elapsed > 20) {
          setIsFadingOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300); // Wait for fadeout animation
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

  // Decryption effect for text
  useEffect(() => {
    if (!showDataOverlay) return;
    
    const chars = "0123456789ABCDEF";
    const decryptText = (original: string, setter: React.Dispatch<React.SetStateAction<string>>, delay: number) => {
      setTimeout(() => {
        let iteration = 0;
        const interval = setInterval(() => {
          setter(original.split("")
            .map((char, index) => {
              if (index < iteration) {
                return original[index];
              }
              if (char === " " || char === "-" || char === ":" || char === "(" || char === ")") {
                return char;
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join(""));
          
          if (iteration >= original.length) {
            clearInterval(interval);
          }
          iteration += 1;
        }, 30);
      }, delay);
    };
    
    // Sequence the decryption animations
    setShowPrimordial(true);
    decryptText(primordialSeed, setDecryptedPrimordial, 200);
    
    setTimeout(() => {
      setShowHash(true);
      decryptText(sha256Seed, setDecryptedHash, 0);
    }, 800);
    
    setTimeout(() => {
      setShowDecimal(true);
      // Special effect for decimal seed - decrypt in chunks
      const decimalChunks = decimalSeed.match(/.{1,7}/g) || [];
      let fullDecrypted = "";
      decimalChunks.forEach((chunk, i) => {
        setTimeout(() => {
          decryptText(chunk, (val) => {
            fullDecrypted = decimalSeed.substring(0, i * 7) + val;
            setDecryptedDecimal(fullDecrypted);
          }, 0);
        }, i * 100);
      });
    }, 1600);
    
    if (seedData?.cosmic_origin_time) {
      setTimeout(() => {
        setShowTime(true);
        const timeString = `${seedData.cosmic_origin_time} | ${seedData.cosmic_origin_datetime}`;
        decryptText(timeString, setDecryptedTime, 0);
      }, 2800);
    }
  }, [showDataOverlay, primordialSeed, sha256Seed, decimalSeed, seedData]);

  return (
    <div className={`fixed inset-0 bg-black z-[9999] overflow-hidden ${isFadingOut ? 'animate-fadeOut' : 'animate-fadeIn'}`}>
      {/* Three.js mount point */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Professional Data Overlay */}
      {showDataOverlay && (
        <div 
          className="absolute inset-0 flex items-center justify-center z-[60] pointer-events-none p-4"
          style={{
            opacity: dataOpacity,
            transition: "opacity 1.5s ease-in-out"
          }}
        >
          <div className="w-full max-w-2xl mx-auto">
            {/* Compact Modal-style Container */}
            <div className="bg-black/90 backdrop-blur-xl border border-blue-400/30 rounded-xl shadow-2xl overflow-hidden"
                 style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-3 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-base flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Atlas Initialization Protocol
                  </h3>
                  <div className="text-xs text-gray-400 font-mono">
                    v2.4.36
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 space-y-3 text-sm max-h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                
                {/* Primordial Seed */}
                {showPrimordial && (
                  <div className="animate-fadeIn">
                    <div className="bg-white/5 rounded-lg p-3 border border-cyan-500/30">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-cyan-400 font-medium text-sm">Primordial Seed</h4>
                        <div className="text-xs text-gray-400">GENESIS</div>
                      </div>
                      <div className="bg-black/70 p-2 rounded border border-cyan-500/20">
                        <div className="text-cyan-300 font-mono break-all text-xs">
                          {decryptedPrimordial || primordialSeed}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Quantum Hash */}
                {showHash && (
                  <div className="animate-fadeIn">
                    <div className="bg-white/5 rounded-lg p-3 border border-green-500/30">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-green-400 font-medium text-sm">Quantum Hash</h4>
                        <div className="text-xs text-gray-400">SHA256</div>
                      </div>
                      <div className="bg-black/70 p-2 rounded border border-green-500/20">
                        <div className="text-green-300 font-mono break-all text-xs">
                          {decryptedHash || sha256Seed}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Universal Constant */}
                {showDecimal && (
                  <div className="animate-fadeIn">
                    <div className="bg-white/5 rounded-lg p-3 border border-yellow-500/30">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-yellow-400 font-medium text-sm">Universal Constant</h4>
                        <div className="text-xs text-gray-400">{decryptedDecimal.length}/77</div>
                      </div>
                      <div className="bg-black/70 p-2 rounded border border-yellow-500/20">
                        <div className="text-yellow-200 font-mono text-xs" style={{ letterSpacing: '0.5px', wordBreak: 'break-all', lineHeight: '1.2' }}>
                          {decryptedDecimal && decryptedDecimal.split('').map((digit, i) => (
                            <span key={i} className={i % 7 === 0 && i > 0 ? 'ml-1' : ''}>{digit}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Genesis Timestamp */}
                {showTime && seedData?.cosmic_origin_time && (
                  <div className="animate-fadeIn">
                    <div className="bg-white/5 rounded-lg p-3 border border-purple-500/30">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-purple-400 font-medium text-sm">Genesis Timestamp</h4>
                        <div className="text-xs text-gray-400">TEMPORAL</div>
                      </div>
                      <div className="bg-black/70 p-2 rounded border border-purple-500/20 space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-purple-400 text-xs">Unix:</span>
                          <span className="text-purple-200 font-mono text-xs">
                            {decryptedTime.split(' | ')[0] || seedData.cosmic_origin_time}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-purple-400 text-xs">Date:</span>
                          <span className="text-purple-200 font-mono text-xs">
                            {decryptedTime.split(' | ')[1] || seedData.cosmic_origin_datetime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Final Status */}
                {showTime && (
                  <div className="text-center animate-fadeIn">
                    <div className="bg-green-500/20 border border-green-500/50 rounded-lg px-4 py-2">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-medium text-sm">
                          Initialization Complete
                        </span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                )}
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