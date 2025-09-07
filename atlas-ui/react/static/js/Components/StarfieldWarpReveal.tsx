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
  const [decryptedPrimordial, setDecryptedPrimordial] = useState("");
  const [decryptedHash, setDecryptedHash] = useState("");
  const [decryptedDecimal, setDecryptedDecimal] = useState("");
  const [decryptedTime, setDecryptedTime] = useState("");
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentResult, setCurrentResult] = useState("");
  const [commandPhase, setCommandPhase] = useState(true);
  const [activeCommandIndex, setActiveCommandIndex] = useState(0);
  const [showPrimordial, setShowPrimordial] = useState(false);
  const [showHash, setShowHash] = useState(false);
  const [showDecimal, setShowDecimal] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [headerStatus, setHeaderStatus] = useState("ACTIVE");
  const [headerStatusDecrypting, setHeaderStatusDecrypting] = useState(true); // Start with Matrix effect
  const [isMatrixMode, setIsMatrixMode] = useState(true);
  const [canStartTextDecryption, setCanStartTextDecryption] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showStarAccelerationBadge, setShowStarAccelerationBadge] = useState(false);
  const [starAccelerationFadingOut, setStarAccelerationFadingOut] = useState(false);
  const [showWarpSpeedBadge, setShowWarpSpeedBadge] = useState(false);
  const [warpSpeedFadingOut, setWarpSpeedFadingOut] = useState(false);
  const [showDataManifestationBadge, setShowDataManifestationBadge] = useState(false);
  const [dataManifestationFadingOut, setDataManifestationFadingOut] = useState(false);
  const [containerBackgroundOpacity, setContainerBackgroundOpacity] = useState(1);
  const [needsTransparency, setNeedsTransparency] = useState(false);
  const [canvasOpacity, setCanvasOpacity] = useState(1);
  const [blurAmount, setBlurAmount] = useState(0);

  // Use actual seeds from API or fallback
  const primordialSeed = seedData?.primordial_seed || "COSMOS-" + Date.now() + "-GENESIS";
  const sha256Seed =
    seedData?.sha256_seed ||
    Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16))
      .join("")
      .toUpperCase();
  const decimalSeed = seedData?.decimal_seed || Array.from({ length: 77 }, () => Math.floor(Math.random() * 10)).join("");

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
        alpha: true, // Enable alpha for transparency
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 1); // Start with solid black
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

      // Animation with coherent timing constants
      let startTime = Date.now();
      let speed = 0.3; // Start slower for better buildup
      let baseAcceleration = 0.005;
      let maxSpeed = 20; // Optimized for coherent warp effect
      let warpTriggered = false;
      let dataRevealStarted = false;
      let decelerationStarted = false;

      // Coherent phase timing constants (total: 15 seconds)
      const ACCELERATION_PHASE = 5; // 0-5s: Acceleration to max speed
      const MAX_SPEED_HOLD = 7; // 5-7s: Hold max speed
      const DECELERATION_START = 7; // 7s: Start deceleration when terminal appears (1s earlier)
      const REVEAL_PHASE = 4; // 7-11s: Data revelation (during deceleration)
      const COMPLETE_STOP = 11; // 11s: Complete stop (no stars or effects)
      const STAR_FADEOUT_START = 10; // Stars start fading 1s before complete stop
      const TOTAL_DURATION = 15;

      // Initialize warp effect immediately with minimal value
      const initialWarpPass = composerRef.current?.passes[2] as ShaderPass;
      if (initialWarpPass) {
        initialWarpPass.uniforms.warpAmount.value = 0.0005; // Very tiny initial value
      }

      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;

        // Show star acceleration badge at the beginning (coherent 2s display)
        if (elapsed > 0.8 && elapsed < 0.9 && !showStarAccelerationBadge) {
          setShowStarAccelerationBadge(true);
          setTimeout(() => {
            setStarAccelerationFadingOut(true);
            setTimeout(() => {
              setShowStarAccelerationBadge(false);
              setStarAccelerationFadingOut(false);
            }, 300);
          }, 2000); // Consistent 2s display
        }

        // Phase 1: Acceleration (0-5s)
        if (elapsed < ACCELERATION_PHASE) {
          const t = elapsed / ACCELERATION_PHASE;
          const curve = Math.pow(t, 2.2);
          speed = 0.3 + (maxSpeed - 0.3) * curve;

          // Trigger warp badge at 75% acceleration
          if (speed > maxSpeed * 0.75 && !warpTriggered) {
            warpTriggered = true;
            setShowWarpSpeedBadge(true);
            setTimeout(() => {
              setWarpSpeedFadingOut(true);
              setTimeout(() => {
                setShowWarpSpeedBadge(false);
                setWarpSpeedFadingOut(false);
              }, 300);
            }, 2000); // Consistent 2s display
          }
        } else if (elapsed < MAX_SPEED_HOLD) {
          // Phase 2: Hold maximum speed (5-7s)
          speed = maxSpeed;
        } else if (elapsed < COMPLETE_STOP) {
          // Phase 3: Deceleration (7-11s) - starts when terminal appears (1s earlier)
          const decelerationTime = elapsed - DECELERATION_START;
          const decelerationDuration = COMPLETE_STOP - DECELERATION_START; // 4 seconds total
          const t = decelerationTime / decelerationDuration;
          const decelerationCurve = Math.pow(1 - t, 2);
          speed = 0.001 + (maxSpeed - 0.001) * decelerationCurve; // Decelerate from max to complete stop

          // Trigger data reveal at exactly 7s (when deceleration starts - 1s earlier)
          if (!dataRevealStarted && elapsed >= DECELERATION_START) {
            dataRevealStarted = true;
            setShowDataOverlay(true);
            setShowDataManifestationBadge(true);
            setTimeout(() => {
              setDataManifestationFadingOut(true);
              setTimeout(() => {
                setShowDataManifestationBadge(false);
                setDataManifestationFadingOut(false);
              }, 300);
            }, 1800);

            setTimeout(() => {
              setDataOpacity(1);
              // SOLO DESPUÉS de que el fade-in termine completamente, iniciar la escritura
              setTimeout(() => {
                setCanStartTextDecryption(true);
              }, 1500); // Esperar 1.5s para que el fade-in termine completamente

              // Start transparency at 9s (2s after data appears - adjusted for earlier timing)
              setTimeout(() => {
                const startTransparency = () => {
                  let progress = 0;
                  const duration = 2500; // 2.5s for complete transparency
                  const interval = 50;
                  const steps = duration / interval;
                  const opacityStep = 1.0 / steps;
                  const blurStep = 10 / steps;

                  const timer = setInterval(() => {
                    progress += 1;
                    const currentOpacity = Math.max(0, 1 - opacityStep * progress);
                    const currentBlur = Math.min(10, blurStep * progress);

                    setContainerBackgroundOpacity(currentOpacity);
                    setCanvasOpacity(currentOpacity);
                    setBlurAmount(currentBlur);

                    if (progress >= steps) {
                      clearInterval(timer);
                      setNeedsTransparency(true);
                    }
                  }, interval);
                };
                startTransparency();
              }, 2000); // 2s delay = 9s total
            }, 100);
          }
        } else if (elapsed < TOTAL_DURATION) {
          // Phase 4: Complete stop (11-15s) - no movement, no effects
          speed = 0.001;
        } else {
          // After 15s - completely static
          speed = 0.001;
        }

        // Update star positions and fade to void
        const positions = starsGeometry.attributes.position.array as Float32Array;

        // Calculate star fade - starts just before complete deceleration (at 10s)
        let starOpacity = 1;

        if (elapsed >= STAR_FADEOUT_START) {
          // Stars start fading at 10s (1s before complete stop)
          const fadeTime = elapsed - STAR_FADEOUT_START;
          const totalFadeTime = COMPLETE_STOP - STAR_FADEOUT_START; // 1 second to fade

          if (fadeTime < totalFadeTime) {
            // Quick fadeout just before stars stop completely
            const fadeProgress = fadeTime / totalFadeTime;
            starOpacity = Math.max(0, 1 - Math.pow(fadeProgress, 0.5)); // Smooth curve, faster at end
          } else {
            // Complete fadeout after 11s
            starOpacity = 0;
          }
        }

        // Background transparency logic
        if (elapsed >= DECELERATION_START) {
          // Background transparency handled by earlier logic
          scene.background = null;
          renderer.setClearColor(0x000000, 0);
        } else if (elapsed > DECELERATION_START - 1) {
          // Prepare for transparency slightly before deceleration (at 6s)
          scene.background = null;
          renderer.setClearColor(0x000000, 0);
        } else {
          // Keep solid black during acceleration and warp
          scene.background = new THREE.Color(0x000000);
          renderer.setClearColor(0x000000, 1);
        }

        // Update star material opacity with smooth transition
        const starMaterial = stars.material as THREE.PointsMaterial;
        starMaterial.opacity = starOpacity;

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

        // Update warp streaks with coherent timing
        if (speed > 2) {
          const streakProgress = (speed - 2) / (maxSpeed - 2);
          let streakIntensity = Math.pow(streakProgress, 1.5);

          // Fade out during deceleration phase - complete fade by 11s (adjusted timing)
          if (elapsed > 10) {
            const fadeTime = elapsed - 10;
            const fadeProgress = Math.min(1, fadeTime / 1); // 1 second to fade
            streakIntensity *= 1 - fadeProgress;
          }

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
          // Bloom proportional to speed, with deceleration fade
          let speedRatio = speed / maxSpeed; // Linear normalized
          let normalizedSpeed = speed / maxSpeed; // 0 to 1

          // Apply deceleration fade to effects - complete fade by 11s (adjusted timing)
          if (elapsed > 10) {
            const effectFadeTime = elapsed - 10;
            const maxFadeTime = 1; // 1 second to fade effects completely (10s to 11s)
            if (effectFadeTime < maxFadeTime) {
              const fadeProgress = effectFadeTime / maxFadeTime;
              const fadeMultiplier = Math.max(0, 1 - fadeProgress);
              speedRatio *= fadeMultiplier;
              normalizedSpeed *= fadeMultiplier;
            } else {
              speedRatio = 0;
              normalizedSpeed = 0;
            }
          }

          // Linear progression for consistent growth, reduced during deceleration
          bloomPass.strength = 0.15 + speedRatio * 1.05; // From 0.15 to 1.2, fades during deceleration
          bloomPass.radius = 0.4 + speedRatio * 0.5; // From 0.4 to 0.9, fades during deceleration

          // Smoother curve that creates a more realistic warp effect
          // Less extreme at max speed for better visual coherence, fades during deceleration
          const warpValue = Math.pow(normalizedSpeed, 1.8) * 0.8; // Smoother curve, max 0.8 for coherent visuals

          // Always apply the warp, even at minimum speed, but fade during deceleration
          warpPass.uniforms.warpAmount.value = Math.max(0.001, warpValue); // Small minimum for subtle start
          warpPass.uniforms.time.value = elapsed;
        }

        // Progressive camera shake with coherent timing
        if (speed > 3) {
          let shakeProgress = Math.pow((speed - 3) / (maxSpeed - 3), 2.5);

          // Apply deceleration fade to shake - complete fade by 11s (adjusted timing)
          if (elapsed > 10) {
            const fadeTime = elapsed - 10;
            const fadeProgress = Math.min(1, fadeTime / 1);
            shakeProgress *= 1 - fadeProgress;
          }

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

        // FOV changes - complete return to normal by 12s
        let fovNormalizedSpeed = speed / maxSpeed;

        // FOV completely returns to normal by 11s (adjusted timing)
        if (elapsed > 10) {
          const returnTime = elapsed - 10;
          const maxReturnTime = 1; // 1 second to return FOV completely (10s to 11s)
          if (returnTime < maxReturnTime) {
            const fadeProgress = returnTime / maxReturnTime;
            fovNormalizedSpeed *= Math.max(0, 1 - fadeProgress);
          } else {
            fovNormalizedSpeed = 0;
          }
        }

        // Smooth FOV change that returns to 75
        const fovCurve = Math.pow(fovNormalizedSpeed, 0.7);
        camera.fov = 75 + fovCurve * 25;
        camera.updateProjectionMatrix();

        // Hide data overlay at 14s
        if (elapsed > 14 && showDataOverlay) {
          setDataOpacity(0);
          setTimeout(() => {
            setShowDataOverlay(false);
          }, 1000); // Faster fade for coherent ending
        }

        // Render
        if (needsTransparency) {
          // Use direct renderer for transparency
          renderer.render(scene, camera);
        } else if (composerRef.current) {
          // Use post-processing effects for normal phases
          composerRef.current.render();
        } else {
          renderer.render(scene, camera);
        }

        // Complete animation after 15.5s
        if (elapsed > TOTAL_DURATION + 0.5) {
          setIsFadingOut(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300);
          return;
        }

        animationIdRef.current = requestAnimationFrame(animate);
      };

      animate();
    } catch (error) {
      console.error("Error initializing scene:", error);
    }
  };

  // Update canvas opacity when it changes
  useEffect(() => {
    if (rendererRef.current && rendererRef.current.domElement) {
      rendererRef.current.domElement.style.opacity = canvasOpacity.toString();
      rendererRef.current.domElement.style.transition = "opacity 2s ease-out";
    }
  }, [canvasOpacity]);

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

  // Text decryption will now start when canStartTextDecryption is set to true
  // This happens 1.5s AFTER the terminal fade-in begins (when dataOpacity reaches 1)

  // Decryption effect for text - starts AFTER terminal fade-in completes
  useEffect(() => {
    if (!canStartTextDecryption) return;

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const decryptTerminalText = (terminalText: string, setter: React.Dispatch<React.SetStateAction<string>>, delay: number, onComplete?: () => void) => {
      setTimeout(() => {
        let iteration = 0;
        const interval = setInterval(() => {
          setter(
            terminalText
              .split("")
              .map((char, index) => {
                if (index < iteration) {
                  return terminalText[index];
                }
                if (char === " " || char === "\n" || char === ">" || char === "|" || char === "-") {
                  return char;
                }
                return chars[Math.floor(Math.random() * chars.length)];
              })
              .join("")
          );

          if (iteration >= terminalText.length) {
            clearInterval(interval);
            if (onComplete) onComplete();
          }
          iteration += 1;
        }, 6); // Much faster decryption
      }, delay);
    };

    // Function to stop Matrix effect when all text is done
    const stopMatrixEffect = () => {
      setIsMatrixMode(false);
    };

    // Generate separate terminal lines for each data type
    const primordialLine = `atlas@cube:~ $ > DEPLOY\n > Universe Primordial Seed: ${primordialSeed}`;
    const hashLine = `atlas@cube:~ $ > CYPHER\n > Quantum Overlay: ${sha256Seed}`;
    const decimalLine = `atlas@cube:~ $ > CREATE\n > Universal Constant: ${decimalSeed}`;
    const timeLine = seedData?.cosmic_origin_time ? `atlas@cube:~ $ > RUN\n > Genesis: ${seedData.cosmic_origin_time} Unix ${new Date(seedData.cosmic_origin_time * 1000).toLocaleString("es-ES")}` : "";

    // Sequential animation with faster timing
    setShowPrimordial(true);
    decryptTerminalText(primordialLine, setDecryptedPrimordial, 50, () => {
      // Show hash line after primordial completes
      setTimeout(() => {
        setShowHash(true);
        decryptTerminalText(hashLine, setDecryptedHash, 0, () => {
          // Show decimal line after hash completes
          setTimeout(() => {
            setShowDecimal(true);
            decryptTerminalText(decimalLine, setDecryptedDecimal, 0, () => {
              // Show time line after decimal completes (if exists)
              if (timeLine) {
                setTimeout(() => {
                  setShowTime(true);
                  decryptTerminalText(timeLine, setDecryptedTime, 0, () => {
                    // Stop Matrix effect and show completion after all data is done
                    stopMatrixEffect();
                    setTimeout(() => {
                      setShowCompletion(true);
                    }, 100);
                  });
                }, 100);
              } else {
                // No time data, stop Matrix and show completion directly
                stopMatrixEffect();
                setTimeout(() => {
                  setShowCompletion(true);
                }, 100);
              }
            });
          }, 100);
        });
      }, 100);
    });
  }, [canStartTextDecryption, primordialSeed, sha256Seed, decimalSeed, seedData]);

  // Matrix effect for header status
  useEffect(() => {
    if (!isMatrixMode) {
      // When Matrix mode ends, set to ACTIVE
      setHeaderStatus("ACTIVE");
      setHeaderStatusDecrypting(false);
      return;
    }

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const matrixInterval = setInterval(() => {
      // Generate random 6-character string for ACTIVE length
      const randomText = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");

      setHeaderStatus(randomText);
    }, 15); // Even faster Matrix cycling

    return () => clearInterval(matrixInterval);
  }, [isMatrixMode]);

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden ${isFadingOut ? "animate-fadeOut" : "animate-fadeIn"}`}
      style={{
        backgroundColor: containerBackgroundOpacity > 0 ? `rgba(0, 0, 0, ${containerBackgroundOpacity})` : "transparent",
        backdropFilter: blurAmount > 0 ? `blur(${blurAmount}px)` : "none",
        WebkitBackdropFilter: blurAmount > 0 ? `blur(${blurAmount}px)` : "none",
        transition: "background-color 0.1s ease-out, backdrop-filter 0.1s ease-out",
      }}
    >
      {/* Three.js mount point */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Professional Data Overlay */}
      {showDataOverlay && (
        <div
          className="absolute inset-0 flex items-center justify-center z-[60] pointer-events-none p-4"
          style={{
            opacity: dataOpacity,
            transition: "opacity 1.5s ease-in-out",
          }}
        >
          <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
            {/* Terminal-style Container - with solid background */}
            <div
              className="bg-black/95 border border-green-400/60 shadow-2xl overflow-hidden backdrop-blur-sm rounded-lg"
              style={{
                fontFamily: "Courier New, monospace",
                backdropFilter: "blur(12px)",
                minHeight: "320px", // Increased from implicit 200px
              }}
            >
              {/* Terminal Header */}
              <div className={`px-3 sm:px-6 py-3 border-b border-green-400/50 flex items-center justify-between transition-all duration-500 ${isMatrixMode ? "bg-green-900/30" : "bg-green-500/20 border-green-300"}`}>
                <div className={`text-xs sm:text-sm font-mono uppercase tracking-wider transition-colors duration-500 break-words sm:break-normal overflow-hidden ${isMatrixMode ? "text-green-400" : "text-green-300"}`}>
                  <span className="hidden lg:inline">&gt; ATLAS INITIALIZATION PROTOCOL v2.4.36 &lt;</span>
                  <span className="hidden sm:inline lg:hidden">&gt; ATLAS INIT PROTOCOL v2.4.36 &lt;</span>
                  <span className="sm:hidden">&gt; ATLAS INIT v2.4.36 &lt;</span>
                </div>
                <div className="flex gap-1 items-center">
                  <div className={`w-2 h-2 transition-colors duration-500 ${isMatrixMode ? "bg-green-400 animate-pulse" : "bg-green-300"}`}></div>
                  <div className={`text-xs sm:text-sm font-mono transition-colors duration-500 ${isMatrixMode ? "text-green-400 animate-pulse" : "text-green-300 font-bold"}`}>{headerStatus}</div>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-3 sm:p-6 text-green-400 font-mono text-xs leading-relaxed bg-black/70 overflow-x-auto" style={{ minHeight: "420px" }}>
                {/* Sequential Terminal Output Lines */}
                {showPrimordial && (
                  <div className="animate-fadeIn text-green-300 mb-3 break-words overflow-wrap-anywhere">
                    <span className="whitespace-pre-wrap">{decryptedPrimordial}</span>
                  </div>
                )}

                {showHash && (
                  <div className="animate-fadeIn text-green-300 mb-3 break-words overflow-wrap-anywhere">
                    <span className="whitespace-pre-wrap">{decryptedHash}</span>
                  </div>
                )}

                {showDecimal && (
                  <div className="animate-fadeIn text-green-300 mb-3 break-words overflow-wrap-anywhere">
                    <span className="whitespace-pre-wrap">{decryptedDecimal}</span>
                  </div>
                )}

                {showTime && (
                  <div className="animate-fadeIn text-green-300 mb-4 break-words overflow-wrap-anywhere">
                    <span className="whitespace-pre-wrap">{decryptedTime}</span>
                  </div>
                )}

                {showCompletion && (
                  <div
                    className="text-green-400 tracking-wider mt-8 break-words"
                    style={{
                      animation: "0.5s ease-out, blink 0.8s infinite",
                    }}
                  >
                    &gt; ATLAS INITIALIZATION PROTOCOL COMPLETED
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Phase badges (bottom center) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[60]">
        {showStarAccelerationBadge && <div className={`bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg font-mono text-xs uppercase tracking-wider border border-blue-400/30 backdrop-blur-sm ${starAccelerationFadingOut ? "animate-phaseSlideDownFadeOut" : "animate-phaseSlideUpFadeIn"}`}>INMMERSION</div>}
        {showWarpSpeedBadge && <div className={`bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-lg font-mono text-xs uppercase tracking-wider border border-cyan-400/30 backdrop-blur-sm ${warpSpeedFadingOut ? "animate-phaseSlideDownFadeOut" : "animate-phaseSlideUpFadeIn"}`}>WARP SPEED</div>}
        {showDataManifestationBadge && <div className={`bg-green-500/20 text-green-400 px-3 py-1 rounded-lg font-mono text-xs uppercase tracking-wider border border-green-400/30 backdrop-blur-sm ${dataManifestationFadingOut ? "animate-phaseSlideDownFadeOut" : "animate-phaseSlideUpFadeIn"}`}>GNOSIS</div>}
      </div>
    </div>
  );
};

export default StarfieldWarpReveal;
