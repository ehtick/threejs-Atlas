import{S as l}from"./atlas_DCnp7L347Zej0R-2R5015.js";import{C as n,S as f,F as u,V as v}from"./atlas_YyHXU7w5UzCW5Af7UsLdJ.js";const o={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class c{layerMesh;material;params;layerSystem;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    uniform float time;
    
    // Función de ruido para deformar la superficie
    float noise(vec3 p) {
      return sin(p.x * 4.0) * sin(p.y * 4.0) * sin(p.z * 4.0);
    }
    
    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;
      
      // Deformación sutil de la superficie para crear relieve rocoso
      vec3 deformed = position;
      float noiseValue = noise(position * 3.0 + time * 0.01);
      deformed += normal * noiseValue * 0.02;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
    }
  `;static fragmentShader=`
    uniform vec3 rockColor;
    uniform float roughness;
    uniform float rockDensity;
    uniform float opacity;
    uniform vec3 lightDirection;
    uniform float time;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    // Función de ruido
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
    
    // FBM para más detalle
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
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(lightDirection);
      
      // Textura rocosa
      float rockTexture = fbm(pos * rockDensity);
      rockTexture = pow(rockTexture, roughness);
      
      // Calcular iluminación
      float dotNL = dot(normal, lightDir);
      float visibility = smoothstep(-0.2, 0.2, dotNL);
      
      // Color final con variación rocosa
      vec3 color = rockColor * (0.7 + 0.3 * rockTexture);
      
      // Solo mostrar en la parte iluminada
      float alpha = rockTexture * visibility * opacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(a,e={}){this.layerSystem=a;const r=e.seed||Math.floor(Math.random()*1e6),i=new l(r),t=e.color instanceof n?e.color:e.color?new n(e.color):new n(9127187);this.params={color:t,roughness:e.roughness||i.uniform(o.ROUGHNESS.min,o.ROUGHNESS.max),rockDensity:e.rockDensity||i.uniform(o.ROCK_DENSITY.min,o.ROCK_DENSITY.max)*10,craterCount:e.craterCount||i.uniform(o.CRATER_COUNT.min,o.CRATER_COUNT.max),opacity:e.opacity||i.uniform(o.OPACITY.min,o.OPACITY.max),seed:r},this.material=new f({vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,uniforms:{time:{value:0},rockColor:{value:t},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new v(1,1,1).normalize()}},transparent:!0,side:u,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(a){this.material.uniforms.time&&(this.material.uniforms.time.value+=a)}dispose(){}}function p(m,a,e){const r=a.surface||{},i=a.planet_info?.base_color||r.base_color,t=e||Math.floor(Math.random()*1e6),s=new l(t+8e3);return new c(m,{color:i?new n(i):new n(9127187),roughness:r.roughness||s.uniform(o.ROUGHNESS.min,o.ROUGHNESS.max),rockDensity:r.rock_density||s.uniform(o.ROCK_DENSITY.min,o.ROCK_DENSITY.max)*10,craterCount:r.crater_count||s.uniform(o.CRATER_COUNT.min,o.CRATER_COUNT.max),opacity:s.uniform(o.OPACITY.min,o.OPACITY.max),seed:t})}export{p as c};
