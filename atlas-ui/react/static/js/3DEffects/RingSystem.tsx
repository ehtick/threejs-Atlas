/**
 * Ring System Effect - Sistema de anillos planetarios
 * 
 * Implementación EXACTA copiada de backup/PlanetRings3D.tsx
 * para garantizar que funcione correctamente.
 */

import * as THREE from 'three';

export interface RingSystemParams {
  full_ring?: { particles: any[] };
  ontop_ring?: { particles: any[] };
  ring_inner_radius?: number;
  ring_outer_radius?: number;
  tilt_factor?: number;
  planet_radius?: number;
  shape_seed?: number;
}

// Simple RNG for visual enhancements (not affecting core Python synchronization)
class VisualRNG {
  private seed: number;

  constructor(baseSeed: number) {
    this.seed = baseSeed;
  }

  private next(): number {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }

  uniform(min: number, max: number): number {
    return min + (max - min) * this.next();
  }

  choice<T>(items: T[]): T {
    return items[Math.floor(this.next() * items.length)];
  }
}

export class RingSystemEffect {
  private ringSystem: THREE.Points;
  private material: THREE.ShaderMaterial;
  private params: RingSystemParams;
  private planetRadius: number;

  constructor(planetRadius: number, params: RingSystemParams) {
    this.planetRadius = planetRadius;
    this.params = params;
    
    // Crear sistema de anillos usando EXACTAMENTE la misma función del backup
    this.createRingSystemFromAPI(params);
  }

  // Create ring system using exact data from Python API - COPIED FROM BACKUP
  private createRingSystemFromAPI(ringsData: RingSystemParams): void {
    // Use exact ring data from Python API instead of generating
    const { full_ring, ontop_ring, ring_inner_radius, ring_outer_radius, tilt_factor, planet_radius, shape_seed } = ringsData;
    
    if (!full_ring || !ontop_ring) {
      console.warn('No ring data provided');
      return;
    }
    
    // Combine full ring (bottom half) and ontop ring (top half) particles
    const allParticles = [...full_ring.particles, ...ontop_ring.particles];
    const totalParticles = allParticles.length;
    
    // Create visual RNG for 3D enhancements using Python's shape_seed
    const visualRNG = new VisualRNG(shape_seed || 12345);
    
    // Create geometry using exact particle data from Python + 3D enhancements
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(totalParticles * 3);
    const colors = new Float32Array(totalParticles * 3);
    const sizes = new Float32Array(totalParticles);
    
    // Define darker, more realistic gray variations
    const grayVariations = [
      { baseGray: 0.18, variation: 0.04, name: 'dark' },     // Darker rings
      { baseGray: 0.25, variation: 0.06, name: 'medium' },   // Medium dark rings  
      { baseGray: 0.32, variation: 0.06, name: 'light' },    // Light but still subdued
      { baseGray: 0.25, variation: 0.08, name: 'mixed' }     // Controlled variation
    ];
    
    const chosenGrayVariation = visualRNG.choice(grayVariations);
    
    for (let i = 0; i < totalParticles; i++) {
      const particle = allParticles[i];
      
      // Convert from Pillow 2D coordinates to ThreeJS 3D coordinates
      // In Pillow: x,y are relative to center (200,200) with planet_radius ~200
      // In ThreeJS: we need to scale to our planetRadius
      const scale = this.planetRadius / (planet_radius || 200);
      
      // Generate proper 3D ring coordinates centered on planet axis
      // Ignore Pillow's 2D x,y coordinates and generate true 3D ring positions
      
      // Generate per-particle variations using deterministic seed for consistency
      const particleSeed = (shape_seed || 12345) + i;
      const particleRNG = new VisualRNG(particleSeed);
      
      // Use only the distance and angle from Python data, but recalculate positions properly
      const distance = particle.distance * scale;
      const angle = particle.angle;
      
      // Create proper ring geometry centered on planet (0,0,0)
      const baseX = distance * Math.cos(angle);
      const baseZ = distance * Math.sin(angle);
      const baseY = 0; // Start with flat ring, apply tilt later
      
      // Apply tilt factor to create the tilted ring plane  
      // Reducir el tilt para mantener más centrado
      const tiltAngle = Math.asin((tilt_factor || 0.2) * 0.5); // Reducir tilt a la mitad
      const tiltedY = baseZ * Math.sin(tiltAngle);
      const tiltedZ = baseZ * Math.cos(tiltAngle);
      
      // Add volumetric depth - rings should have significant thickness for 3D effect
      const ringThickness = ((ring_outer_radius || 400) - (ring_inner_radius || 200)) * scale * 0.4; // Increased thickness
      
      // Random spread for strong volumetric effect (centrado en Y=0)
      const ySpread = particleRNG.uniform(-ringThickness * 0.8, ringThickness * 0.8);
      const radialSpread = particleRNG.uniform(-ringThickness * 0.3, ringThickness * 0.3);
      const angularSpread = particleRNG.uniform(-0.08, 0.08); // Slightly more angular spread
      
      // Final position with spreads applied
      const finalDistance = distance + radialSpread;
      const finalAngle = angle + angularSpread;
      
      positions[i * 3] = finalDistance * Math.cos(finalAngle);                    // x
      positions[i * 3 + 1] = (tiltedY + ySpread) + (this.planetRadius * 0.15); // Offset para centrar en ecuador
      positions[i * 3 + 2] = tiltedZ + particleRNG.uniform(-ringThickness * 0.4, ringThickness * 0.4); // z with tilt and spread for depth
      
      // Natural gray-based coloring system for realistic rings
      const pythonGrayValue = particle.color[0] / 255; // Original Python gray (0.08-0.2)
      
      // Create distance-based gradient for depth perception
      const distanceFromCenter = particle.distance;
      const normalizedDistance = (distanceFromCenter - (ring_inner_radius || 200)) / ((ring_outer_radius || 400) - (ring_inner_radius || 200));
      
      // Generate natural gray variations
      const baseGray = chosenGrayVariation.baseGray;
      const variation = chosenGrayVariation.variation;
      
      // Per-particle gray variation (darker, more realistic range)
      const grayVariation = particleRNG.uniform(-variation, variation);
      const finalGray = Math.max(0.12, Math.min(0.45, baseGray + grayVariation));
      
      // Distance-based gradient (inner vs outer rings)
      const distanceGradient = 0.8 + normalizedDistance * 0.4; // 0.8 to 1.2
      
      // Controlled brightness variation (tighter range)
      const brightnessVariation = particleRNG.uniform(0.85, 1.15);
      
      // Add very subtle sparkle effect to few particles (even more controlled)
      const sparkleChance = particleRNG.uniform(0, 1);
      const sparkleMultiplier = sparkleChance < 0.03 ? particleRNG.uniform(1.1, 1.3) : 1.0; // Only 3% sparkle, more subtle
      
      // Final gray value
      const finalGrayValue = finalGray * distanceGradient * brightnessVariation * sparkleMultiplier;
      
      // Apply same gray to RGB for natural, darker look
      const clampedGrayValue = Math.max(0.10, Math.min(0.55, finalGrayValue));
      colors[i * 3] = clampedGrayValue;     // r
      colors[i * 3 + 1] = clampedGrayValue; // g  
      colors[i * 3 + 2] = clampedGrayValue; // b
      
      // Adjusted sizes for 3D vs 2D scaling (even smaller particles)
      const sizeScale = 0.15; // Mucho más pequeñas
      const baseSizeMultiplier = particleRNG.uniform(0.3, 0.7); // Partículas muy pequeñas
      const sparkleSize = sparkleChance < 0.1 ? particleRNG.uniform(1.05, 1.2) : 1.0; // Sparkle muy sutil
      sizes[i] = particle.size * sizeScale * baseSizeMultiplier * sparkleSize;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Enhanced particle material for darker, realistic rings
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        brightness: { value: 2.2 } // Compensate for darker base colors
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        varying float vDistance;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDistance = -mvPosition.z;
          
          // Dynamic size based on distance - very small particles
          gl_PointSize = size * (100.0 / vDistance); // Partículas muy pequeñas
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float brightness;
        varying vec3 vColor;
        varying float vDistance;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float distance = length(center);
          
          if (distance > 0.5) discard;
          
          // Create soft circular particle with gentle falloff
          float alpha = (1.0 - distance * 2.0);
          alpha = smoothstep(0.0, 1.0, alpha);
          
          // Add subtle glow effect
          float glow = 1.0 - distance;
          glow = pow(glow, 1.5);
          
          // No sparkle animation - colors should be static
          // Final color with brightness and glow (no time-based changes)
          vec3 finalColor = vColor * brightness * glow;
          
          // Distance-based alpha fade for depth
          float depthAlpha = clamp(200.0 / vDistance, 0.3, 1.0);
          
          gl_FragColor = vec4(finalColor, alpha * depthAlpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.NormalBlending // Normal blending for natural gray particles
    });
    
    // Create the point system
    this.ringSystem = new THREE.Points(particles, this.material);
    
    // Position rings perfectly centered at planet's core (0,0,0)
    this.ringSystem.position.set(0, 0, 0);
    
    // Ensure it renders above the planet
    this.ringSystem.renderOrder = 1;
  }

  /**
   * Añade el sistema de anillos a la escena
   */
  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (!this.ringSystem) return;
    
    // Los anillos deben estar centrados con el planeta
    // Si el planeta está en una posición específica, mover los anillos allí también
    if (planetPosition) {
      this.ringSystem.position.copy(planetPosition);
    } else {
      // Asegurar que están en el origen si no se especifica posición
      this.ringSystem.position.set(0, 0, 0);
    }
    
    scene.add(this.ringSystem);
  }

  /**
   * Actualiza la animación del sistema de anillos con rotación real como en Pillow
   */
  update(deltaTime: number, planetData?: any): void {
    if (!this.ringSystem || !planetData) return;

    // Ring rotation animation - exact real time as Pillow
    const rotationPeriod = planetData.rotation_period_seconds || 86400;
    const cosmicOriginTime = planetData.cosmicOriginTime || Date.now() / 1000;
    const initialAngleRotation = planetData.initialAngleRotation || 0;

    // Calculate exact rotation as in Pillow (same as planet)
    const currentTime = Date.now() / 1000;
    const timeElapsedSeconds = currentTime - cosmicOriginTime;
    const angleVelocityRotation = (2 * Math.PI) / rotationPeriod;
    const angleRotation = (initialAngleRotation + timeElapsedSeconds * angleVelocityRotation) % (2 * Math.PI);

    // Apply the same rotation as the planet
    this.ringSystem.rotation.y = angleRotation;
  }

  /**
   * Obtiene el objeto Three.js para manipulación directa
   */
  getObject3D(): THREE.Points {
    return this.ringSystem;
  }

  /**
   * Limpia recursos
   */
  dispose(): void {
    if (this.material) {
      this.material.dispose();
    }
  }
}

// Función de utilidad para crear anillos desde datos de Python - EXACTA DEL BACKUP
export function createRingSystemFromPythonData(ringsData: any, planetRadius: number): RingSystemEffect {
  const params: RingSystemParams = {
    full_ring: ringsData.full_ring,
    ontop_ring: ringsData.ontop_ring,
    ring_inner_radius: ringsData.ring_inner_radius,
    ring_outer_radius: ringsData.ring_outer_radius,
    tilt_factor: ringsData.tilt_factor,
    planet_radius: ringsData.planet_radius,
    shape_seed: ringsData.shape_seed
  };

  return new RingSystemEffect(planetRadius, params);
}