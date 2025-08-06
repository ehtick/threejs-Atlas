import * as THREE from "three";

/**
 * Universal Planet Renderer - Sistema completamente dinámico
 * 
 * Este renderizador puede dibujar CUALQUIER tipo de planeta sin necesidad
 * de hardcodear tipos específicos. Todo se basa en acciones universales.
 */

interface UniversalAction {
  type: string;
  params: any;
  blend_mode?: string;
  opacity?: number;
}

interface PlanetRenderingData {
  planet_info: {
    name: string;
    type: string;
    base_color: string;
    radius: number;
  };
  universal_actions: UniversalAction[];
  atmosphere?: any;
  rings?: any;
  timing?: any;
}

// Shader vertex universal - maneja todas las transformaciones
const universalVertexShader = `
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  
  void main() {
    vPosition = position;
    vNormal = normal;
    vUv = uv;
    
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Shader fragment universal - interpreta acciones dinámicamente
const universalFragmentShader = `
  uniform float time;
  uniform vec3 baseColor;
  uniform float actionCount;
  
  // Arrays dinámicos para acciones (máximo 100 acciones)
  uniform int actionTypes[100];
  uniform vec4 actionParams1[100]; // x, y, width/radius, height/intensity
  uniform vec4 actionParams2[100]; // color rgba
  uniform vec4 actionParams3[100]; // parámetros adicionales
  
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec2 vUv;
  varying vec3 vWorldPosition;
  
  // Funciones de utilidad
  float sdCircle(vec2 p, vec2 center, float radius) {
    return length(p - center) - radius;
  }
  
  float sdBox(vec2 p, vec2 center, vec2 size) {
    vec2 d = abs(p - center) - size;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
  }
  
  float sdTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {
    vec2 e0 = b - a, e1 = c - b, e2 = a - c;
    vec2 v0 = p - a, v1 = p - b, v2 = p - c;
    vec2 pq0 = v0 - e0 * clamp(dot(v0, e0) / dot(e0, e0), 0.0, 1.0);
    vec2 pq1 = v1 - e1 * clamp(dot(v1, e1) / dot(e1, e1), 0.0, 1.0);
    vec2 pq2 = v2 - e2 * clamp(dot(v2, e2) / dot(e2, e2), 0.0, 1.0);
    float s = sign(e0.x * e2.y - e0.y * e2.x);
    vec2 d = min(min(vec2(dot(pq0, pq0), s * (v0.x * e0.y - v0.y * e0.x)),
                     vec2(dot(pq1, pq1), s * (v1.x * e1.y - v1.y * e1.x))),
                     vec2(dot(pq2, pq2), s * (v2.x * e2.y - v2.y * e2.x)));
    return -sqrt(d.x) * sign(d.y);
  }
  
  float sdStar(vec2 p, vec2 center, float r, int n, float m) {
    float an = 3.141593 / float(n);
    float en = 3.141593 / m;
    vec2 acs = vec2(cos(an), sin(an));
    vec2 ecs = vec2(cos(en), sin(en));
    
    vec2 q = p - center;
    float bn = mod(atan(q.x, q.y), 2.0 * an) - an;
    q = length(q) * vec2(cos(bn), abs(sin(bn)));
    q -= r * acs;
    q += ecs * clamp(-dot(q, ecs), 0.0, r * acs.y / ecs.y);
    return length(q) * sign(q.x);
  }
  
  // Ruido procedural
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  
  float fbm(vec2 p, float frequency, float amplitude, int octaves) {
    float value = 0.0;
    float amp = amplitude;
    
    for(int i = 0; i < octaves; i++) {
      value += amp * noise(p * frequency);
      p *= 2.0;
      amp *= 0.5;
    }
    
    return value;
  }
  
  // Función principal de renderizado de acciones
  vec3 executeAction(int actionType, vec4 params1, vec4 params2, vec4 params3, vec2 pos) {
    vec3 color = vec3(0.0);
    
    // ACTION_DRAW_CIRCLE = 1
    if(actionType == 1) {
      vec2 center = params1.xy;
      float radius = params1.z;
      float dist = sdCircle(pos, center, radius);
      if(dist < 0.0) {
        float alpha = smoothstep(-radius * 0.1, 0.0, dist);
        color = params2.rgb * alpha * params2.a;
      }
    }
    // ACTION_DRAW_BAND = 2 (para Gas Giants)
    else if(actionType == 2) {
      float yPos = params1.x;
      float width = params1.y;
      float rotation = params1.z;
      
      // Rotar coordenadas
      float cosR = cos(rotation);
      float sinR = sin(rotation);
      vec2 rotPos = vec2(
        pos.x * cosR - pos.y * sinR,
        pos.x * sinR + pos.y * cosR
      );
      
      float dist = abs(rotPos.y - yPos);
      if(dist < width * 0.5) {
        float alpha = 1.0 - (dist / (width * 0.5));
        color = params2.rgb * alpha * params2.a;
      }
    }
    // ACTION_DRAW_TRIANGLE = 3 (montañas)
    else if(actionType == 3) {
      vec2 p1 = params1.xy;
      vec2 p2 = params1.zw;
      vec2 p3 = params3.xy;
      
      float dist = sdTriangle(pos, p1, p2, p3);
      if(dist < 0.0) {
        float alpha = smoothstep(-0.01, 0.0, dist);
        color = params2.rgb * alpha * params2.a;
      }
    }
    // ACTION_DRAW_CRYSTAL = 4
    else if(actionType == 4) {
      vec2 center = params1.xy;
      float radius = params1.z;
      float layers = params1.w;
      int points = int(params3.x);
      
      float dist = sdStar(pos, center, radius, points, 2.0);
      if(dist < 0.0) {
        float layerEffect = 1.0 - (abs(dist) / radius);
        layerEffect = pow(layerEffect, 2.0);
        color = params2.rgb * layerEffect * params2.a;
      }
    }
    // ACTION_DRAW_CRATER = 5
    else if(actionType == 5) {
      vec2 center = params1.xy;
      float radius = params1.z;
      float depth = params1.w;
      
      float dist = sdCircle(pos, center, radius);
      if(dist < 0.0) {
        // Efecto de borde elevado
        float rimDist = abs(dist + radius * 0.8);
        if(rimDist < radius * 0.2) {
          float rimAlpha = 1.0 - (rimDist / (radius * 0.2));
          color = mix(params2.rgb * 0.7, params2.rgb, rimAlpha) * params2.a;
        } else {
          // Centro oscuro
          float centerAlpha = smoothstep(-radius, -radius * 0.3, dist);
          color = params2.rgb * 0.3 * centerAlpha * params2.a;
        }
      }
    }
    // ACTION_DRAW_CLOUD = 6
    else if(actionType == 6) {
      vec2 center = params1.xy;
      float radius = params1.z;
      float density = params1.w;
      
      float dist = sdCircle(pos, center, radius);
      if(dist < 0.0) {
        // Añadir ruido para efecto nube
        float cloudNoise = noise(pos * 10.0 + vec2(time * 0.1));
        float alpha = smoothstep(-radius, 0.0, dist) * density * (0.5 + 0.5 * cloudNoise);
        color = params2.rgb * alpha * params2.a;
      }
    }
    // ACTION_APPLY_NOISE = 7
    else if(actionType == 7) {
      float frequency = params1.x;
      float amplitude = params1.y;
      int octaves = int(params1.z);
      
      float noiseValue = fbm(pos, frequency, amplitude, octaves);
      color = vec3(noiseValue) * params2.a;
    }
    // ACTION_DRAW_LINE = 8
    else if(actionType == 8) {
      vec2 start = params1.xy;
      vec2 end = params1.zw;
      float width = params3.x;
      
      vec2 lineVec = end - start;
      vec2 pointVec = pos - start;
      float lineLength = length(lineVec);
      
      if(lineLength > 0.0) {
        float t = clamp(dot(pointVec, lineVec) / (lineLength * lineLength), 0.0, 1.0);
        vec2 projection = start + t * lineVec;
        float dist = length(pos - projection);
        
        if(dist < width) {
          float alpha = 1.0 - (dist / width);
          color = params2.rgb * alpha * params2.a;
        }
      }
    }
    // ACTION_DRAW_POLYGON = 9
    else if(actionType == 9) {
      // Simplificado: usar distancia al centro del polígono
      vec2 center = params1.xy;
      float radius = params1.z;
      
      float dist = length(pos - center);
      if(dist < radius) {
        float alpha = smoothstep(radius, radius * 0.8, dist);
        color = params2.rgb * alpha * params2.a;
      }
    }
    // ACTION_DRAW_STORM = 10 (para Gas Giants)
    else if(actionType == 10) {
      vec2 center = params1.xy;
      float radius = params1.z;
      float intensity = params1.w;
      
      float dist = length(pos - center);
      if(dist < radius) {
        // Crear efecto de vórtice
        float angle = atan(pos.y - center.y, pos.x - center.x);
        float spiral = sin(angle * 5.0 + dist * 10.0 - time * 2.0);
        float alpha = (1.0 - dist / radius) * intensity * (0.5 + 0.5 * spiral);
        color = params2.rgb * alpha * params2.a;
      }
    }
    // ACTION_DRAW_GLOW = 11
    else if(actionType == 11) {
      vec2 center = params1.xy;
      float radius = params1.z;
      float intensity = params1.w;
      
      float dist = length(pos - center);
      if(dist < radius) {
        float alpha = pow(1.0 - dist / radius, 2.0) * intensity;
        color = params2.rgb * alpha * params2.a;
      }
    }
    
    return color;
  }
  
  // Función de mezcla de colores
  vec3 blendColors(vec3 base, vec3 overlay, float opacity, int blendMode) {
    if(blendMode == 1) { // Multiply
      return mix(base, base * overlay, opacity);
    } else if(blendMode == 2) { // Add
      return base + overlay * opacity;
    } else if(blendMode == 3) { // Overlay
      vec3 result;
      for(int i = 0; i < 3; i++) {
        if(base[i] < 0.5) {
          result[i] = 2.0 * base[i] * overlay[i];
        } else {
          result[i] = 1.0 - 2.0 * (1.0 - base[i]) * (1.0 - overlay[i]);
        }
      }
      return mix(base, result, opacity);
    }
    // Normal blend
    return mix(base, overlay, opacity);
  }
  
  void main() {
    vec3 pos = normalize(vPosition);
    vec3 finalColor = baseColor;
    
    // Convertir coordenadas esféricas a planas para el procesamiento
    vec2 uv = vUv * 2.0 - 1.0; // Rango -1 a 1
    
    // Ejecutar todas las acciones en orden
    for(int i = 0; i < int(actionCount); i++) {
      vec3 actionColor = executeAction(
        actionTypes[i],
        actionParams1[i],
        actionParams2[i],
        actionParams3[i],
        uv
      );
      
      // Aplicar la acción con su modo de mezcla
      if(length(actionColor) > 0.0) {
        int blendMode = int(actionParams3[i].w);
        finalColor = blendColors(finalColor, actionColor, 1.0, blendMode);
      }
    }
    
    // Aplicar iluminación básica
    vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
    float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
    finalColor *= lighting;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// Mapeo de tipos de acción a códigos numéricos
const ACTION_TYPE_MAP: { [key: string]: number } = {
  "draw_circle": 1,
  "draw_band": 2,
  "draw_triangle": 3,
  "draw_crystal": 4,
  "draw_crater": 5,
  "draw_cloud": 6,
  "apply_noise": 7,
  "draw_line": 8,
  "draw_polygon": 9,
  "draw_storm": 10,
  "draw_glow": 11,
  "draw_ellipse": 12,
  "draw_arc": 13,
  "draw_rectangle": 14,
  "draw_star": 15,
  "draw_crack": 16,
  "apply_gradient": 17,
  "apply_texture": 18,
  "apply_blur": 19,
  "draw_aurora": 20,
  "draw_fog": 21,
  "draw_ocean": 22,
  "draw_river": 23,
  "draw_lake": 24,
  "draw_lava_flow": 25,
  "draw_mountain": 26,
  "draw_canyon": 27,
  "draw_volcano": 28,
  "draw_forest": 29,
  "draw_vegetation_cluster": 30,
  "draw_tree": 31,
  "draw_reflection": 32,
  "draw_shadow": 33,
  "draw_particles": 34,
  "draw_stripe": 35,
  "draw_grid": 36,
  "draw_spiral": 37
};

// Mapeo de modos de mezcla
const BLEND_MODE_MAP: { [key: string]: number } = {
  "normal": 0,
  "multiply": 1,
  "add": 2,
  "overlay": 3
};

export class UniversalPlanetRenderer {
  private scene: THREE.Scene;
  private planetMesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;
  
  constructor(scene: THREE.Scene, planetMesh: THREE.Mesh) {
    this.scene = scene;
    this.planetMesh = planetMesh;
    
    // Crear material shader inicial
    this.material = new THREE.ShaderMaterial({
      vertexShader: universalVertexShader,
      fragmentShader: universalFragmentShader,
      uniforms: {
        time: { value: 0.0 },
        baseColor: { value: new THREE.Color(0x808080) },
        actionCount: { value: 0 },
        actionTypes: { value: new Array(100).fill(0) },
        actionParams1: { value: new Array(100).fill(new THREE.Vector4()) },
        actionParams2: { value: new Array(100).fill(new THREE.Vector4()) },
        actionParams3: { value: new Array(100).fill(new THREE.Vector4()) }
      }
    });
    
    this.planetMesh.material = this.material;
  }
  
  async loadPlanetData(planetName: string): Promise<void> {
    try {
      // Obtener datos del planeta desde la API
      const response = await fetch(`/api/planet/${encodeURIComponent(planetName)}/rendering-data-v2`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch planet data');
      }
      
      const data: PlanetRenderingData = result.rendering_data;
      
      // Aplicar color base
      const baseColor = new THREE.Color(data.planet_info.base_color);
      this.material.uniforms.baseColor.value = baseColor;
      
      // Procesar acciones universales
      if (data.universal_actions && data.universal_actions.length > 0) {
        this.applyUniversalActions(data.universal_actions);
      }
      
      // Procesar atmósfera si existe
      if (data.atmosphere) {
        this.createAtmosphere(data.atmosphere);
      }
      
      // Procesar anillos si existen
      if (data.rings && data.rings.has_rings) {
        this.createRings(data.rings);
      }
      
      // Iniciar animación
      this.startAnimation(data.timing);
      
    } catch (error) {
      console.error('Error loading planet data:', error);
      // Usar renderizado por defecto
      this.applyDefaultRendering();
    }
  }
  
  private applyUniversalActions(actions: UniversalAction[]): void {
    const maxActions = 100;
    const numActions = Math.min(actions.length, maxActions);
    
    const actionTypes = new Array(maxActions).fill(0);
    const actionParams1 = new Array(maxActions).fill(null).map(() => new THREE.Vector4());
    const actionParams2 = new Array(maxActions).fill(null).map(() => new THREE.Vector4());
    const actionParams3 = new Array(maxActions).fill(null).map(() => new THREE.Vector4());
    
    for (let i = 0; i < numActions; i++) {
      const action = actions[i];
      const actionType = ACTION_TYPE_MAP[action.type] || 0;
      actionTypes[i] = actionType;
      
      // Procesar parámetros según el tipo de acción
      const params = action.params || {};
      
      switch (action.type) {
        case "draw_circle":
        case "draw_cloud":
          actionParams1[i].set(
            params.center?.[0] || 0,
            params.center?.[1] || 0,
            params.radius || 0.1,
            params.density || 1.0
          );
          break;
          
        case "draw_band":
          actionParams1[i].set(
            params.y_position || 0,
            params.width || 0.1,
            params.rotation || 0,
            0
          );
          break;
          
        case "draw_triangle":
        case "draw_mountain":
          actionParams1[i].set(
            params.p1?.[0] || params.base?.[0] || 0,
            params.p1?.[1] || params.base?.[1] || 0,
            params.p2?.[0] || params.peak?.[0] || 0,
            params.p2?.[1] || params.peak?.[1] || 0
          );
          actionParams3[i].set(
            params.p3?.[0] || params.width || 0,
            params.p3?.[1] || 0,
            0,
            0
          );
          break;
          
        case "draw_crystal":
          actionParams1[i].set(
            params.center?.[0] || 0,
            params.center?.[1] || 0,
            params.radius || 0.1,
            params.layers || 3
          );
          actionParams3[i].set(
            params.points || 6,
            params.angle || 0,
            0,
            0
          );
          break;
          
        case "draw_crater":
          actionParams1[i].set(
            params.center?.[0] || 0,
            params.center?.[1] || 0,
            params.radius || 0.1,
            params.depth || 0.03
          );
          break;
          
        case "draw_line":
          actionParams1[i].set(
            params.start?.[0] || 0,
            params.start?.[1] || 0,
            params.end?.[0] || 0,
            params.end?.[1] || 0
          );
          actionParams3[i].set(
            params.width || 0.01,
            0,
            0,
            0
          );
          break;
          
        case "draw_storm":
          actionParams1[i].set(
            params.center?.[0] || 0,
            params.center?.[1] || 0,
            params.radius || 0.2,
            params.intensity || 1.0
          );
          break;
          
        case "apply_noise":
          actionParams1[i].set(
            params.frequency || 8.0,
            params.amplitude || 0.5,
            params.octaves || 4,
            0
          );
          break;
          
        case "draw_polygon":
          // Simplificación: usar el centro y radio del polígono
          const points = params.points || [];
          if (points.length > 0) {
            let centerX = 0, centerY = 0;
            for (const point of points) {
              centerX += point[0] || 0;
              centerY += point[1] || 0;
            }
            centerX /= points.length;
            centerY /= points.length;
            
            let maxDist = 0;
            for (const point of points) {
              const dist = Math.sqrt((point[0] - centerX) ** 2 + (point[1] - centerY) ** 2);
              maxDist = Math.max(maxDist, dist);
            }
            
            actionParams1[i].set(centerX, centerY, maxDist, 0);
          }
          break;
      }
      
      // Color (común para todas las acciones)
      const color = params.color || [1, 1, 1, 1];
      actionParams2[i].set(
        color[0] || 1,
        color[1] || 1,
        color[2] || 1,
        color[3] || action.opacity || 1
      );
      
      // Modo de mezcla
      const blendMode = BLEND_MODE_MAP[action.blend_mode || "normal"] || 0;
      actionParams3[i].w = blendMode;
    }
    
    // Actualizar uniforms
    this.material.uniforms.actionCount.value = numActions;
    this.material.uniforms.actionTypes.value = actionTypes;
    this.material.uniforms.actionParams1.value = actionParams1;
    this.material.uniforms.actionParams2.value = actionParams2;
    this.material.uniforms.actionParams3.value = actionParams3;
  }
  
  private createAtmosphere(atmosphereData: any): void {
    const atmosphereGeometry = new THREE.SphereGeometry(1.1, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(
        atmosphereData.color[0],
        atmosphereData.color[1],
        atmosphereData.color[2]
      ),
      transparent: true,
      opacity: atmosphereData.color[3] * 0.3,
      side: THREE.BackSide
    });
    
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphereMesh.position.copy(this.planetMesh.position);
    this.scene.add(atmosphereMesh);
  }
  
  private createRings(ringsData: any): void {
    // Implementación simplificada de anillos
    const ringGeometry = new THREE.RingGeometry(1.3, 1.6, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xaaaaaa,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });
    
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 2 * ringsData.tilt_factor;
    ringMesh.position.copy(this.planetMesh.position);
    this.scene.add(ringMesh);
  }
  
  private applyDefaultRendering(): void {
    // Renderizado por defecto si falla la carga
    this.material.uniforms.baseColor.value = new THREE.Color(0x808080);
    this.material.uniforms.actionCount.value = 0;
  }
  
  private startAnimation(timingData: any): void {
    const animate = () => {
      // Actualizar tiempo
      this.material.uniforms.time.value += 0.01;
      
      // Rotación del planeta si hay datos de timing
      if (timingData) {
        const rotationSpeed = (2 * Math.PI) / (timingData.rotation_period || 86400);
        this.planetMesh.rotation.y += rotationSpeed * 0.01;
      }
      
      requestAnimationFrame(animate);
    };
    animate();
  }
  
  // Método para actualizar acciones en tiempo real
  updateActions(actions: UniversalAction[]): void {
    this.applyUniversalActions(actions);
  }
  
  // Método para limpiar recursos
  dispose(): void {
    this.material.dispose();
  }
}