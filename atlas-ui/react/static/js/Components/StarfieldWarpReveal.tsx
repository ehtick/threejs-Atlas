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
  const hudSceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const hudCameraRef = useRef<THREE.OrthographicCamera | null>(null);
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
  const [signalSearching, setSignalSearching] = useState(true);

  // Use actual seeds from API or fallback
  const primordialSeed = seedData?.primordial_seed || "COSMOS-" + Date.now() + "-GENESIS";
  const sha256Seed = seedData?.sha256_seed || Array.from({length: 64}, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join("").toUpperCase();
  const decimalSeed = seedData?.decimal_seed || Array.from({length: 77}, () => Math.floor(Math.random() * 10)).join("");

  // Create HUD cockpit elements
  const createHUDCockpit = (hudScene: THREE.Scene, width: number, height: number) => {
    // Dashboard (bottom 15% of screen) - much smaller
    const dashboardHeight = height * 0.15;
    const dashboardGeometry = new THREE.PlaneGeometry(width * 1.1, dashboardHeight);
    const dashboardMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x1a1a1a, 
      transparent: true, 
      opacity: 0.6,
      side: THREE.DoubleSide
    });
    const dashboard = new THREE.Mesh(dashboardGeometry, dashboardMaterial);
    dashboard.position.set(0, -height/2 + dashboardHeight/2, -10);
    hudScene.add(dashboard);

    // Left panel (8% of screen width) - much smaller
    const leftPanelWidth = width * 0.08;
    const leftPanelGeometry = new THREE.PlaneGeometry(leftPanelWidth, height * 0.8);
    const leftPanelMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x1a1a1a, 
      transparent: true, 
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    const leftPanel = new THREE.Mesh(leftPanelGeometry, leftPanelMaterial);
    leftPanel.position.set(-width/2 + leftPanelWidth/2, 0, -10);
    hudScene.add(leftPanel);

    // Right panel (8% of screen width) - much smaller
    const rightPanelWidth = width * 0.08;
    const rightPanelGeometry = new THREE.PlaneGeometry(rightPanelWidth, height * 0.8);
    const rightPanelMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x1a1a1a, 
      transparent: true, 
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    const rightPanel = new THREE.Mesh(rightPanelGeometry, rightPanelMaterial);
    rightPanel.position.set(width/2 - rightPanelWidth/2, 0, -10);
    hudScene.add(rightPanel);

    // Top frame (5% of screen) - much smaller
    const topFrameHeight = height * 0.05;
    const topFrameGeometry = new THREE.PlaneGeometry(width * 0.9, topFrameHeight);
    const topFrameMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x2a2a2a, 
      transparent: true, 
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const topFrame = new THREE.Mesh(topFrameGeometry, topFrameMaterial);
    topFrame.position.set(0, height/2 - topFrameHeight/2, -10);
    hudScene.add(topFrame);

    // Create HUD screens for data display
    const createHUDScreen = (x: number, y: number, screenWidth: number, screenHeight: number, color: number = 0x003333) => {
      const screenGeometry = new THREE.PlaneGeometry(screenWidth, screenHeight);
      const screenMaterial = new THREE.MeshBasicMaterial({ 
        color: color, 
        transparent: true, 
        opacity: 0.3,
        side: THREE.DoubleSide
      });
      const screen = new THREE.Mesh(screenGeometry, screenMaterial);
      screen.position.set(x, y, -5);
      hudScene.add(screen);

      // Add screen border
      const borderGeometry = new THREE.EdgesGeometry(screenGeometry);
      const borderMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.8 });
      const border = new THREE.LineSegments(borderGeometry, borderMaterial);
      border.position.copy(screen.position);
      hudScene.add(border);

      return screen;
    };

    // Create three small HUD screens in the dashboard
    const screenWidth = width * 0.12;
    const screenHeight = dashboardHeight * 0.4;
    const screenY = -height/2 + dashboardHeight * 0.5;

    createHUDScreen(-width * 0.2, screenY, screenWidth, screenHeight, 0x002200); // Left screen - green
    createHUDScreen(0, screenY, screenWidth, screenHeight, 0x220033); // Center screen - purple  
    createHUDScreen(width * 0.2, screenY, screenWidth, screenHeight, 0x002233); // Right screen - blue

    // Add corner reinforcements
    const cornerSize = 20;
    const cornerGeometry = new THREE.PlaneGeometry(cornerSize, 2);
    const cornerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.7 });

    // Top corners
    const topLeftCorner1 = new THREE.Mesh(cornerGeometry, cornerMaterial);
    topLeftCorner1.position.set(-width/2 + cornerSize/2, height/2 - 1, -5);
    hudScene.add(topLeftCorner1);

    const topLeftCorner2 = new THREE.Mesh(new THREE.PlaneGeometry(2, cornerSize), cornerMaterial);
    topLeftCorner2.position.set(-width/2 + 1, height/2 - cornerSize/2, -5);
    hudScene.add(topLeftCorner2);

    const topRightCorner1 = new THREE.Mesh(cornerGeometry, cornerMaterial);
    topRightCorner1.position.set(width/2 - cornerSize/2, height/2 - 1, -5);
    hudScene.add(topRightCorner1);

    const topRightCorner2 = new THREE.Mesh(new THREE.PlaneGeometry(2, cornerSize), cornerMaterial);
    topRightCorner2.position.set(width/2 - 1, height/2 - cornerSize/2, -5);
    hudScene.add(topRightCorner2);

    // Add center crosshair/targeting system
    const crosshairSize = 32;
    const crosshairGeometry = new THREE.RingGeometry(crosshairSize - 2, crosshairSize, 0, Math.PI * 2, 32);
    const crosshairMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ffff, 
      transparent: true, 
      opacity: 0.4,
      side: THREE.DoubleSide
    });
    const crosshair = new THREE.Mesh(crosshairGeometry, crosshairMaterial);
    crosshair.position.set(0, 0, -5);
    hudScene.add(crosshair);

    // Center dot
    const dotGeometry = new THREE.CircleGeometry(2, 8);
    const dotMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.8 });
    const dot = new THREE.Mesh(dotGeometry, dotMaterial);
    dot.position.set(0, 0, -4);
    hudScene.add(dot);

    // Crosshair lines
    const lineLength = 8;
    const lineGeometry = new THREE.PlaneGeometry(lineLength, 1);
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.6 });

    // Top line
    const topLine = new THREE.Mesh(lineGeometry, lineMaterial);
    topLine.position.set(0, crosshairSize + 2, -4);
    topLine.rotation.z = Math.PI / 2;
    hudScene.add(topLine);

    // Bottom line
    const bottomLine = new THREE.Mesh(lineGeometry, lineMaterial);
    bottomLine.position.set(0, -(crosshairSize + 2), -4);
    bottomLine.rotation.z = Math.PI / 2;
    hudScene.add(bottomLine);

    // Left line
    const leftLine = new THREE.Mesh(lineGeometry, lineMaterial);
    leftLine.position.set(-(crosshairSize + 2), 0, -4);
    hudScene.add(leftLine);

    // Right line
    const rightLine = new THREE.Mesh(lineGeometry, lineMaterial);
    rightLine.position.set(crosshairSize + 2, 0, -4);
    hudScene.add(rightLine);

    return hudScene;
  };

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
      // Main scene setup (for stars)
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000000);
      sceneRef.current = scene;

      // HUD scene setup
      const hudScene = new THREE.Scene();
      hudSceneRef.current = hudScene;

      // Perspective camera for stars
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
      camera.position.set(0, 0, 0);
      cameraRef.current = camera;

      // Orthographic camera for HUD (using pixel coordinates)
      const width = window.innerWidth;
      const height = window.innerHeight;
      const hudCamera = new THREE.OrthographicCamera(-width/2, width/2, height/2, -height/2, -1000, 1000);
      hudCamera.position.z = 1;
      hudCameraRef.current = hudCamera;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.autoClear = false; // Disable auto clear for manual control
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

      // Create HUD cockpit
      createHUDCockpit(hudScene, width, height);

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

        // Clear everything first
        renderer.clear();

        // Dual rendering pass - stars first, then HUD overlay
        if (composerRef.current) {
          // Render stars with post-processing effects
          composerRef.current.render();
        } else {
          // Fallback render for stars
          renderer.render(scene, camera);
        }

        // Clear only depth buffer to render HUD on top
        renderer.clearDepth();
        
        // Render HUD scene with orthographic camera (only when data overlay is visible)
        if (showDataOverlay && hudSceneRef.current && hudCameraRef.current) {
          renderer.render(hudSceneRef.current, hudCameraRef.current);
        }

        // Complete animation after 20 seconds to allow full experience
        if (elapsed > 20) {
          if (onComplete) onComplete();
          return;
        }

        animationIdRef.current = requestAnimationFrame(animate);
      };

      // Handle window resize
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Update perspective camera
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        // Update orthographic camera with pixel coordinates
        if (hudCameraRef.current) {
          hudCameraRef.current.left = -width / 2;
          hudCameraRef.current.right = width / 2;
          hudCameraRef.current.top = height / 2;
          hudCameraRef.current.bottom = -height / 2;
          hudCameraRef.current.updateProjectionMatrix();
        }

        // Update renderer size
        renderer.setSize(width, height);
        
        // Update post-processing
        if (composerRef.current) {
          composerRef.current.setSize(width, height);
        }

        // Recreate HUD elements with new dimensions
        if (hudSceneRef.current) {
          // Clear existing HUD elements
          while (hudSceneRef.current.children.length > 0) {
            hudSceneRef.current.remove(hudSceneRef.current.children[0]);
          }
          // Recreate with new dimensions
          createHUDCockpit(hudSceneRef.current, width, height);
        }
      };

      window.addEventListener('resize', handleResize);

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
      // Remove resize listener
      window.removeEventListener('resize', () => {}); // This will be recreated each time
    };
  }, []);

  // Decryption effect for text
  useEffect(() => {
    if (!showDataOverlay) return;
    
    // First disable signal searching after a delay
    setTimeout(() => {
      setSignalSearching(false);
    }, 1500);
    
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
    
    // Sequence the decryption animations - start after signal is found
    setTimeout(() => {
      setShowPrimordial(true);
      decryptText(primordialSeed, setDecryptedPrimordial, 200);
    }, 2000);
    
    setTimeout(() => {
      setShowHash(true);
      decryptText(sha256Seed, setDecryptedHash, 0);
    }, 2800);
    
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
    }, 3600);
    
    if (seedData?.cosmic_origin_time) {
      setTimeout(() => {
        setShowTime(true);
        const timeString = `${seedData.cosmic_origin_time} | ${seedData.cosmic_origin_datetime}`;
        decryptText(timeString, setDecryptedTime, 0);
      }, 4800);
    }
  }, [showDataOverlay, primordialSeed, sha256Seed, decimalSeed, seedData]);

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Three.js mount point */}
      <div ref={mountRef} className="absolute inset-0" />


      {/* CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(10px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
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