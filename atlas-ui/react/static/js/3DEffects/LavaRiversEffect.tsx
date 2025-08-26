/**
 * Lava Rivers Effect - Red vascular de canales de lava interconectados
 *
 * COMPLETAMENTE DIFERENTE a LavaFlowsEffect:
 * - LavaFlowsEffect: flujos individuales de lava con partículas
 * - LavaRiversEffect: RED VASCULAR conectada que cubre todo el planeta como venas brillantes
 */

import * as THREE from "three";
import { SeededRandom } from "../Utils/SeededRandom";
import { getAnimatedUniverseTime, DEFAULT_COSMIC_ORIGIN_TIME } from "../Utils/UniverseTime";

export interface LavaRiverParams {
  // Configuración del sistema vascular  
  networkDensity?: number; // Densidad de la red (cuántos puntos de conexión)
  branchingFactor?: number; // Cuánto se ramifica la red
  channelWidth?: number; // Ancho muy fino de las venas
  pulsationSpeed?: number; // Velocidad de pulsación de la lava
  networkPattern?: "hexagonal" | "organic" | "dendritic"; // Patrón de la red
  
  // Sistema de pulsación (como sistema circulatorio)
  heartbeatRate?: number; // Latidos por minuto del "corazón" de lava
  pulseWaveSpeed?: number; // Velocidad de ondas de pulso a través de la red
  pulseIntensity?: number; // Intensidad del efecto de pulso
  
  // Colores específicos para red vascular
  arteryColor?: THREE.Color | number[]; // Color de arterias principales (muy brillante)
  veinColor?: THREE.Color | number[]; // Color de venas secundarias
  capillaryColor?: THREE.Color | number[]; // Color de capilares (más tenue)
  pulseColor?: THREE.Color | number[]; // Color de las ondas de pulso
  
  // Efectos de conexión
  connectionGlow?: number; // Brillo en puntos de conexión
  networkEmission?: number; // Emisión de toda la red
  
  seed?: number;
  startTime?: number;
  timeSpeed?: number;
  cosmicOriginTime?: number;
  
  orbitalData?: {
    enabled: boolean;
    cycle_duration_years: number;
    visible_duration_years: number;
  };
  currentTime?: number;
  planetTemperature?: number;
}

const PROCEDURAL_RANGES = {
  NETWORK_DENSITY: { min: 50, max: 100 }, // Reducir para mejor performance y visibilidad
  BRANCHING_FACTOR: { min: 2, max: 5 }, // Cada punto se conecta a varios otros
  CHANNEL_WIDTH: { min: 0.01, max: 0.03 }, // CANALES MÁS GRUESOS para ser visibles
  HEARTBEAT_RATE: { min: 30, max: 90 }, // Latidos por minuto más rápidos
  PULSE_WAVE_SPEED: { min: 1.0, max: 3.0 }, // Velocidad más rápida
  PULSE_INTENSITY: { min: 1.0, max: 2.5 }, // MAYOR intensidad
  CONNECTION_GLOW: { min: 2.0, max: 5.0 }, // MÁS brillo
  NETWORK_EMISSION: { min: 4.0, max: 8.0 }, // MUCHA MÁS emisión para ser visible
};

// Nodo de la red vascular
interface NetworkNode {
  position: THREE.Vector3;
  connections: number[]; // Índices de nodos conectados
  nodeType: "artery" | "vein" | "capillary"; // Tipo de vaso
  pulsePhase: number; // Fase del pulso (0-1)
}

// Conexión entre nodos
interface NetworkConnection {
  from: number;
  to: number;
  path: THREE.Vector3[]; // Puntos intermedios del canal
  connectionType: "artery" | "vein" | "capillary";
  width: number;
}

export class LavaRiversEffect {
  private networkGroup: THREE.Group;
  private nodes: NetworkNode[] = [];
  private connections: NetworkConnection[] = [];
  private channelMeshes: THREE.Mesh[] = [];
  private params: LavaRiverParams;
  private startTime: number;
  private planetRadius: number;
  private material: THREE.ShaderMaterial;
  private orbitalVisibilityFactor: number = 1;
  private temperatureActivationFactor: number = 1;
  
  // Shader para los canales vasculares
  private static readonly channelVertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying float vDistanceToCenter;
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      
      // Distancia al centro del canal para efectos de borde
      vDistanceToCenter = abs(uv.y - 0.5) * 2.0;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  
  private static readonly channelFragmentShader = `
    uniform float time;
    uniform vec3 arteryColor;
    uniform vec3 veinColor;
    uniform vec3 pulseColor;
    uniform float heartbeatRate;
    uniform float pulseWaveSpeed;
    uniform float pulseIntensity;
    uniform float networkEmission;
    uniform float channelType; // 0=capillary, 0.5=vein, 1=artery
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying float vDistanceToCenter;
    
    void main() {
      // Calcular pulso cardíaco
      float heartbeat = (heartbeatRate / 60.0) * time; // Convertir BPM a Hz
      float pulse = sin(heartbeat * 6.28318) * 0.5 + 0.5;
      
      // Onda de pulso que viaja a lo largo del canal
      float pulseWave = sin((vUv.x * 10.0) - (time * pulseWaveSpeed * 5.0));
      pulseWave = pulseWave * 0.5 + 0.5;
      
      // Combinar pulso cardíaco con onda de pulso
      float totalPulse = mix(pulse, pulseWave, 0.6) * pulseIntensity;
      
      // Color base según tipo de canal
      vec3 baseColor;
      if (channelType > 0.75) {
        baseColor = arteryColor; // Arterias principales
      } else if (channelType > 0.25) {
        baseColor = veinColor; // Venas secundarias
      } else {
        baseColor = veinColor * 0.6; // Capilares más tenues
      }
      
      // Color del pulso
      vec3 finalColor = mix(baseColor, pulseColor, totalPulse * 0.7);
      
      // Efecto de borde para hacer canales más finos en los extremos
      float edgeFactor = 1.0 - smoothstep(0.3, 1.0, vDistanceToCenter);
      
      // Intensidad emisiva variable por tipo de canal
      float emission = networkEmission * (0.5 + channelType * 0.5) * edgeFactor;
      
      gl_FragColor = vec4(finalColor * emission, edgeFactor * 0.9);
    }
  `;
  
  constructor(planetRadius: number, params: LavaRiverParams = {}) {
    this.planetRadius = planetRadius;
    
    const seed = params.seed || Math.floor(Math.random() * 1000000);
    const rng = new SeededRandom(seed);
    
    this.startTime = params.startTime || (seed % 10000) / 1000;
    
    // Colores para el sistema vascular
    const arteryColor = params.arteryColor instanceof THREE.Color ? params.arteryColor :
      new THREE.Color(1.0, 0.8, 0.2); // Amarillo brillante para arterias
    const veinColor = params.veinColor instanceof THREE.Color ? params.veinColor :
      new THREE.Color(1.0, 0.3, 0.0); // Naranja para venas
    const capillaryColor = params.capillaryColor instanceof THREE.Color ? params.capillaryColor :
      new THREE.Color(0.8, 0.2, 0.0); // Rojo oscuro para capilares
    const pulseColor = params.pulseColor instanceof THREE.Color ? params.pulseColor :
      new THREE.Color(1.0, 1.0, 0.8); // Blanco-amarillo para pulsos
    
    this.params = {
      networkDensity: params.networkDensity || Math.floor(rng.uniform(PROCEDURAL_RANGES.NETWORK_DENSITY.min, PROCEDURAL_RANGES.NETWORK_DENSITY.max)),
      branchingFactor: params.branchingFactor || Math.floor(rng.uniform(PROCEDURAL_RANGES.BRANCHING_FACTOR.min, PROCEDURAL_RANGES.BRANCHING_FACTOR.max)),
      channelWidth: params.channelWidth || rng.uniform(PROCEDURAL_RANGES.CHANNEL_WIDTH.min, PROCEDURAL_RANGES.CHANNEL_WIDTH.max),
      heartbeatRate: params.heartbeatRate || rng.uniform(PROCEDURAL_RANGES.HEARTBEAT_RATE.min, PROCEDURAL_RANGES.HEARTBEAT_RATE.max),
      pulseWaveSpeed: params.pulseWaveSpeed || rng.uniform(PROCEDURAL_RANGES.PULSE_WAVE_SPEED.min, PROCEDURAL_RANGES.PULSE_WAVE_SPEED.max),
      pulseIntensity: params.pulseIntensity || rng.uniform(PROCEDURAL_RANGES.PULSE_INTENSITY.min, PROCEDURAL_RANGES.PULSE_INTENSITY.max),
      networkPattern: params.networkPattern || (rng.random() > 0.5 ? "organic" : "dendritic"),
      arteryColor,
      veinColor,
      capillaryColor,
      pulseColor,
      connectionGlow: params.connectionGlow || rng.uniform(PROCEDURAL_RANGES.CONNECTION_GLOW.min, PROCEDURAL_RANGES.CONNECTION_GLOW.max),
      networkEmission: params.networkEmission || rng.uniform(PROCEDURAL_RANGES.NETWORK_EMISSION.min, PROCEDURAL_RANGES.NETWORK_EMISSION.max),
      seed,
      startTime: this.startTime,
      timeSpeed: params.timeSpeed || rng.uniform(0.5, 2.0),
      orbitalData: params.orbitalData,
      currentTime: params.currentTime || 0,
      planetTemperature: params.planetTemperature || 0
    };
    
    this.temperatureActivationFactor = this.calculateTemperatureActivation();
    this.orbitalVisibilityFactor = this.calculateOrbitalVisibility();
    
    this.networkGroup = new THREE.Group();
    
    // Generar red vascular
    this.generateVascularNetwork(rng);
    
    // Crear materiales
    this.createMaterials();
    
    // Crear geometrías de los canales
    this.createChannelGeometries();
  }
  
  private generateVascularNetwork(rng: SeededRandom): void {
    const density = this.params.networkDensity!;
    
    // 1. Generar nodos distribuidos por la superficie
    for (let i = 0; i < density; i++) {
      const phi = rng.uniform(0, Math.PI * 2);
      const theta = Math.acos(rng.uniform(-1, 1));
      
      const position = new THREE.Vector3(
        Math.sin(theta) * Math.cos(phi) * this.planetRadius,
        Math.sin(theta) * Math.sin(phi) * this.planetRadius,
        Math.cos(theta) * this.planetRadius
      );
      
      // Determinar tipo de nodo basado en distribución
      let nodeType: "artery" | "vein" | "capillary";
      const typeRand = rng.random();
      if (typeRand < 0.1) {
        nodeType = "artery"; // 10% arterias principales
      } else if (typeRand < 0.4) {
        nodeType = "vein"; // 30% venas
      } else {
        nodeType = "capillary"; // 60% capilares
      }
      
      this.nodes.push({
        position,
        connections: [],
        nodeType,
        pulsePhase: rng.random() * Math.PI * 2 // Fase aleatoria del pulso
      });
    }
    
    // 2. Conectar nodos para formar red vascular
    this.connectNetworkNodes(rng);
  }
  
  private connectNetworkNodes(rng: SeededRandom): void {
    const maxDistance = this.planetRadius * 0.3; // Distancia máxima de conexión
    const branchingFactor = this.params.branchingFactor!;
    
    // Para cada nodo, conectar con nodos cercanos
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const distances: { index: number; distance: number }[] = [];
      
      // Calcular distancias a todos los otros nodos
      for (let j = 0; j < this.nodes.length; j++) {
        if (i === j) continue;
        
        const distance = node.position.distanceTo(this.nodes[j].position);
        if (distance < maxDistance) {
          distances.push({ index: j, distance });
        }
      }
      
      // Ordenar por distancia y conectar con los más cercanos
      distances.sort((a, b) => a.distance - b.distance);
      
      // Número de conexiones basado en tipo de nodo
      let maxConnections;
      switch (node.nodeType) {
        case "artery":
          maxConnections = Math.min(branchingFactor + 2, distances.length);
          break;
        case "vein":  
          maxConnections = Math.min(branchingFactor, distances.length);
          break;
        case "capillary":
          maxConnections = Math.min(Math.floor(branchingFactor * 0.6), distances.length);
          break;
      }
      
      // Crear conexiones
      for (let k = 0; k < maxConnections; k++) {
        const targetIndex = distances[k].index;
        const targetNode = this.nodes[targetIndex];
        
        // Evitar conexiones duplicadas
        if (node.connections.includes(targetIndex) || targetNode.connections.includes(i)) {
          continue;
        }
        
        // Añadir conexión bidireccional
        node.connections.push(targetIndex);
        targetNode.connections.push(i);
        
        // Determinar tipo de conexión basado en los nodos
        let connectionType: "artery" | "vein" | "capillary";
        if (node.nodeType === "artery" || targetNode.nodeType === "artery") {
          connectionType = "artery";
        } else if (node.nodeType === "vein" || targetNode.nodeType === "vein") {
          connectionType = "vein";
        } else {
          connectionType = "capillary";
        }
        
        // Crear path curvo entre los nodos
        const path = this.createCurvedPath(node.position, targetNode.position, rng);
        
        // Ancho basado en tipo de conexión
        let width;
        switch (connectionType) {
          case "artery":
            width = this.params.channelWidth! * this.planetRadius * 2.0;
            break;
          case "vein":
            width = this.params.channelWidth! * this.planetRadius * 1.2;
            break;
          case "capillary":
            width = this.params.channelWidth! * this.planetRadius * 0.6;
            break;
        }
        
        this.connections.push({
          from: i,
          to: targetIndex,
          path,
          connectionType,
          width
        });
      }
    }
  }
  
  private createCurvedPath(start: THREE.Vector3, end: THREE.Vector3, rng: SeededRandom): THREE.Vector3[] {
    const path: THREE.Vector3[] = [start.clone()];
    
    // Crear puntos intermedios para path curvo en la superficie
    const segments = 8;
    for (let i = 1; i < segments; i++) {
      const t = i / segments;
      
      // Interpolación lineal inicial
      const point = start.clone().lerp(end, t);
      
      // Proyectar a la superficie
      point.normalize().multiplyScalar(this.planetRadius);
      
      // Añadir curvatura aleatoria pequeña
      const deviation = new THREE.Vector3(
        (rng.random() - 0.5) * 0.1,
        (rng.random() - 0.5) * 0.1,
        (rng.random() - 0.5) * 0.1
      );
      point.add(deviation);
      point.normalize().multiplyScalar(this.planetRadius);
      
      path.push(point);
    }
    
    path.push(end.clone());
    return path;
  }
  
  private createMaterials(): void {
    // Material para los canales
    this.material = new THREE.ShaderMaterial({
      vertexShader: LavaRiversEffect.channelVertexShader,
      fragmentShader: LavaRiversEffect.channelFragmentShader,
      uniforms: {
        time: { value: 0 },
        arteryColor: { value: this.params.arteryColor },
        veinColor: { value: this.params.veinColor },
        pulseColor: { value: this.params.pulseColor },
        heartbeatRate: { value: this.params.heartbeatRate },
        pulseWaveSpeed: { value: this.params.pulseWaveSpeed },
        pulseIntensity: { value: this.params.pulseIntensity },
        networkEmission: { value: this.params.networkEmission },
        channelType: { value: 0.5 } // Se ajustará por mesh
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    
    // No crear material para esferas - solo canales
  }
  
  private createChannelGeometries(): void {
    // Crear geometría para cada conexión
    this.connections.forEach(connection => {
      // Crear curva desde el path
      const curve = new THREE.CatmullRomCurve3(connection.path);
      
      // Crear geometría tubular muy fina
      const tubeGeometry = new THREE.TubeGeometry(
        curve,
        32, // Segmentos
        connection.width * 0.5, // Radio
        4, // Segmentos radiales (pocos para rendimiento)
        false
      );
      
      // Material específico para este tipo de conexión
      const channelMaterial = this.material.clone();
      let channelTypeValue;
      switch (connection.connectionType) {
        case "artery":
          channelTypeValue = 1.0;
          break;
        case "vein":
          channelTypeValue = 0.5;
          break;
        case "capillary":
          channelTypeValue = 0.0;
          break;
      }
      channelMaterial.uniforms.channelType.value = channelTypeValue;
      
      const channelMesh = new THREE.Mesh(tubeGeometry, channelMaterial);
      channelMesh.renderOrder = 6; // Encima de superficie pero debajo de partículas
      
      this.channelMeshes.push(channelMesh);
      this.networkGroup.add(channelMesh);
    });
    
    // No crear esferas - solo canales de la red vascular
  }
  
  private calculateTemperatureActivation(): number {
    // SIEMPRE ACTIVADO para debugging visual
    return 1.0;
  }
  
  private calculateOrbitalVisibility(): number {
    if (!this.params.orbitalData || !this.params.orbitalData.enabled) {
      return 1;
    }
    
    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTimeSeconds = Date.now() / 1000 - cosmicOriginTime;
    const currentTime = currentTimeSeconds / (365.25 * 24 * 3600);
    
    const cycleProgress = (currentTime % this.params.orbitalData.cycle_duration_years) / 
                         this.params.orbitalData.cycle_duration_years;
    const visibleFraction = this.params.orbitalData.visible_duration_years / 
                           this.params.orbitalData.cycle_duration_years;
    
    if (cycleProgress <= visibleFraction) {
      const visibleProgress = cycleProgress / visibleFraction;
      
      if (visibleProgress < 0.1) {
        return visibleProgress / 0.1;
      } else if (visibleProgress > 0.9) {
        return (1.0 - visibleProgress) / 0.1;
      } else {
        return 1.0;
      }
    }
    
    return 0;
  }
  
  update(_deltaTime: number): void {
    const cosmicOriginTime = this.params.cosmicOriginTime || DEFAULT_COSMIC_ORIGIN_TIME;
    const currentTime = getAnimatedUniverseTime(cosmicOriginTime, this.params.timeSpeed, this.startTime);
    
    this.orbitalVisibilityFactor = this.calculateOrbitalVisibility();
    const totalActivationFactor = this.temperatureActivationFactor * this.orbitalVisibilityFactor;
    
    if (totalActivationFactor > 0) {
      // Actualizar uniforms de tiempo para todos los materiales
      this.channelMeshes.forEach(mesh => {
        const material = mesh.material as THREE.ShaderMaterial;
        material.uniforms.time.value = currentTime;
        material.uniforms.networkEmission.value = this.params.networkEmission! * totalActivationFactor;
        material.uniforms.pulseIntensity.value = this.params.pulseIntensity! * totalActivationFactor;
        mesh.visible = true;
      });
      
    } else {
      // Ocultar toda la red si no está activa
      this.channelMeshes.forEach(mesh => { mesh.visible = false; });
    }
  }
  
  addToScene(scene: THREE.Scene, planetPosition?: THREE.Vector3): void {
    if (planetPosition) {
      this.networkGroup.position.copy(planetPosition);
    }
    scene.add(this.networkGroup);
  }
  
  getObject3D(): THREE.Group {
    return this.networkGroup;
  }
  
  dispose(): void {
    this.channelMeshes.forEach(mesh => {
      mesh.geometry.dispose();
      (mesh.material as THREE.Material).dispose();
    });
    
    this.networkGroup.clear();
    this.nodes = [];
    this.connections = [];
    this.channelMeshes = [];
  }
}

/**
 * Función para crear desde datos de Python
 */
export function createLavaRiversFromPythonData(
  pythonData: any,
  planetRadius: number,
  _layerSystem?: any
): LavaRiversEffect {
  const seed = pythonData?.seeds?.planet_seed || Math.floor(Math.random() * 1000000);
  
  const planetTemperature = pythonData?.original_planet_data?.surface_temperature || 0;
  const currentTimeYears = pythonData?.timing?.elapsed_time ? pythonData.timing.elapsed_time / (365.25 * 24 * 3600) : 0;
  
  const orbitalPeriodYears = pythonData?.original_planet_data?.orbital_period_seconds ? 
    pythonData.original_planet_data.orbital_period_seconds / (365.25 * 24 * 3600) : 1.0;
  
  const lavaRiversData = pythonData?.lava_rivers_data || {};
  const rng = new SeededRandom(seed + 10001);
  
  const cycleDuration = lavaRiversData.cycle_duration_years || 
    rng.uniform(orbitalPeriodYears * 0.3, orbitalPeriodYears * 0.6);
  
  const orbitalData = {
    enabled: false, // Desactivar orbital para debugging - siempre visible
    cycle_duration_years: cycleDuration,
    visible_duration_years: lavaRiversData.visible_duration_years || 
      rng.uniform(cycleDuration * 0.6, cycleDuration * 0.8)
  };
  
  const params: LavaRiverParams = {
    seed: seed + 10000,
    planetTemperature: planetTemperature,
    orbitalData: orbitalData,
    currentTime: currentTimeYears,
    cosmicOriginTime: pythonData?.timing?.cosmic_origin_time
  };
  
  return new LavaRiversEffect(planetRadius, params);
}