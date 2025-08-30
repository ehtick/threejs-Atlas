import{S as u}from"./atlas_DhOreEVM1uBHzRPTt7uMw.js";import{C as s,S as v,F as C,V as h}from"./atlas_CLp6T-BwF8hBVTNM0OiQd.js";const p={DEFAULT:{ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}},ROCKY:{ROUGHNESS:{min:1,max:2},ROCK_DENSITY:{min:1,max:3},CRATER_COUNT:{min:.4,max:.8},OPACITY:{min:.8,max:1}},CAVE:{ROUGHNESS:{min:.5,max:.7},ROCK_DENSITY:{min:.5,max:1},CRATER_COUNT:{min:.1,max:.4},OPACITY:{min:.02,max:.05}}};class m{layerMesh;material;params;layerSystem;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    // Función de ruido para deformar la superficie (estática)
    float noise(vec3 p) {
      return sin(p.x * 4.0) * sin(p.y * 4.0) * sin(p.z * 4.0);
    }
    
    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;
      
      // Deformación estática de la superficie para crear relieve rocoso
      vec3 deformed = position;
      float noiseValue = noise(position * 3.0); // SIN time - completamente estático
      deformed += normal * noiseValue * 0.02;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
    }
  `;static fragmentShader=`
    uniform vec3 rockColor;
    uniform float roughness;
    uniform float rockDensity;
    uniform float craterCount;
    uniform float opacity;
    uniform vec3 lightDirection;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    // Función de ruido mejorada
    float noise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float n = i.x + i.y * 57.0 + 113.0 * i.z;
      return mix(
        mix(mix(fract(sin(n) * 43758.5453), fract(sin(n + 1.0) * 43758.5453), f.x),
            mix(fract(sin(n + 57.0) * 43758.5453), fract(sin(n + 58.0) * 43758.5453), f.x), f.y),
        mix(mix(fract(sin(n + 113.0) * 43758.5453), fract(sin(n + 114.0) * 43758.5453), f.x),
            mix(fract(sin(n + 170.0) * 43758.5453), fract(sin(n + 171.0) * 43758.5453), f.x), f.y), f.z);
    }
    
    // FBM para textura rocosa base
    float fbm(vec3 p) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for(int i = 0; i < 4; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    // Función para crear cráteres
    float craterPattern(vec3 p, float count) {
      float craters = 0.0;
      float scale = count * 8.0; // Escalar según craterCount
      
      // Múltiples capas de cráteres con diferentes tamaños
      for(int i = 0; i < 3; i++) {
        float layerScale = scale * pow(2.0, float(i));
        vec3 cellPos = p * layerScale;
        vec3 cellId = floor(cellPos);
        vec3 cellLocal = fract(cellPos);
        
        // Hash para posición random de crater en celda
        float hash = fract(sin(dot(cellId, vec3(12.9898, 78.233, 54.53))) * 43758.5453);
        
        if(hash > 0.7) { // Solo algunas celdas tienen cráteres
          vec2 craterCenter = vec2(0.5) + 0.3 * (vec2(hash, fract(hash * 73.0)) - 0.5);
          float dist = distance(cellLocal.xy, craterCenter);
          float craterSize = 0.2 + 0.3 * fract(hash * 127.0);
          
          if(dist < craterSize) {
            float craterDepth = smoothstep(craterSize, craterSize * 0.3, dist);
            craters += craterDepth * (0.8 - float(i) * 0.2); // Cráteres más pequeños son menos profundos
          }
        }
      }
      
      return clamp(craters, 0.0, 1.0);
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(lightDirection);
      
      // Textura rocosa base usando rockDensity
      float rockTexture = fbm(pos * rockDensity);
      rockTexture = pow(rockTexture, roughness);
      
      // Crear cráteres usando craterCount
      float craters = craterPattern(pos, craterCount);
      
      // Combinar texturas
      float combinedTexture = rockTexture * (1.0 - craters * 0.5) + craters * 0.3;
      
      // Calcular iluminación para el color (pero no para la visibilidad)
      float dotNL = dot(normal, lightDir);
      float lightInfluence = smoothstep(-0.2, 0.2, dotNL);
      
      // Color base con variación según texturas
      vec3 baseColor = rockColor;
      
      // Oscurecer cráteres
      baseColor = mix(baseColor, baseColor * 0.6, craters);
      
      // Aplicar variación rocosa
      vec3 color = baseColor * (0.6 + 0.4 * combinedTexture);
      
      // Aplicar un poco de variación de luz pero mantener visibilidad en toda la superficie
      color *= (0.7 + 0.3 * lightInfluence);
      
      // Mostrar en toda la superficie del planeta con opacity variable
      float alpha = combinedTexture * opacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(t,r={}){this.layerSystem=t;const i=r.seed||Math.floor(Math.random()*1e6),a=new u(i),n=r.color instanceof s?r.color:r.color?new s(r.color):new s(9127187),c=r.planetType||"DEFAULT",e=p[c];this.params={color:n,roughness:r.roughness||a.uniform(e.ROUGHNESS.min,e.ROUGHNESS.max),rockDensity:r.rockDensity||a.uniform(e.ROCK_DENSITY.min,e.ROCK_DENSITY.max)*10,craterCount:r.craterCount||a.uniform(e.CRATER_COUNT.min,e.CRATER_COUNT.max),opacity:r.opacity||a.uniform(e.OPACITY.min,e.OPACITY.max),seed:i,planetType:c},this.material=new v({vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,uniforms:{rockColor:{value:n},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},craterCount:{value:this.params.craterCount},opacity:{value:this.params.opacity},lightDirection:{value:new h(1,1,1).normalize()}},transparent:!0,side:C,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(t){}dispose(){}}function S(d,t,r,i="DEFAULT"){const a=t.surface||{},n=t.planet_info?.base_color||a.base_color,c=r||Math.floor(Math.random()*1e6),e=new u(c+8e3);let l=i;if(i==="DEFAULT"&&t.surface_elements?.type){const f=t.surface_elements.type.toLowerCase();f==="rocky"?l="ROCKY":f==="cave"&&(l="CAVE")}const o=p[l];return new m(d,{color:n?new s(n):new s(9127187),roughness:a.roughness||e.uniform(o.ROUGHNESS.min,o.ROUGHNESS.max),rockDensity:a.rock_density||e.uniform(o.ROCK_DENSITY.min,o.ROCK_DENSITY.max)*10,craterCount:a.crater_count||e.uniform(o.CRATER_COUNT.min,o.CRATER_COUNT.max),opacity:e.uniform(o.OPACITY.min,o.OPACITY.max),seed:c,planetType:l})}export{S as c};
