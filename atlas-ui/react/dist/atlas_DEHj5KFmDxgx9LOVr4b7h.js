import{S as u}from"./atlas_ChU1OZn73_ret8fa2ScFF.js";import{C as s,S as C,F as p,V as x}from"./atlas_S2gaYUaVDGx2fzGLEfKud.js";const v={DEFAULT:{ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}},ROCKY:{ROUGHNESS:{min:1,max:2},ROCK_DENSITY:{min:1,max:3},CRATER_COUNT:{min:.4,max:.8},OPACITY:{min:.8,max:1}},CAVE:{ROUGHNESS:{min:.5,max:.7},ROCK_DENSITY:{min:.5,max:1},CRATER_COUNT:{min:.1,max:.4},OPACITY:{min:.02,max:.05}}};class m{layerMesh;material;params;layerSystem;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;

    float noise(vec3 p) {
      return sin(p.x * 4.0) * sin(p.y * 4.0) * sin(p.z * 4.0);
    }
    
    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;

      vec3 deformed = position;
      float noiseValue = noise(position * 3.0);
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

    float craterPattern(vec3 p, float count) {
      float craters = 0.0;
      float scale = count * 8.0;

      for(int i = 0; i < 3; i++) {
        float layerScale = scale * pow(2.0, float(i));
        vec3 cellPos = p * layerScale;
        vec3 cellId = floor(cellPos);
        vec3 cellLocal = fract(cellPos);

        float hash = fract(sin(dot(cellId, vec3(12.9898, 78.233, 54.53))) * 43758.5453);
        
        if(hash > 0.7) {
          vec2 craterCenter = vec2(0.5) + 0.3 * (vec2(hash, fract(hash * 73.0)) - 0.5);
          float dist = distance(cellLocal.xy, craterCenter);
          float craterSize = 0.2 + 0.3 * fract(hash * 127.0);
          
          if(dist < craterSize) {
            float craterDepth = smoothstep(craterSize, craterSize * 0.3, dist);
            craters += craterDepth * (0.8 - float(i) * 0.2);
          }
        }
      }
      
      return clamp(craters, 0.0, 1.0);
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(lightDirection);

      float rockTexture = fbm(pos * rockDensity);
      rockTexture = pow(rockTexture, roughness);

      float craters = craterPattern(pos, craterCount);

      float combinedTexture = rockTexture * (1.0 - craters * 0.5) + craters * 0.3;

      float dotNL = dot(normal, lightDir);
      float lightInfluence = smoothstep(-0.2, 0.2, dotNL);

      vec3 baseColor = rockColor;

      baseColor = mix(baseColor, baseColor * 0.6, craters);

      vec3 color = baseColor * (0.6 + 0.4 * combinedTexture);

      color *= (0.7 + 0.3 * lightInfluence);

      float alpha = combinedTexture * opacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(a,o={}){this.layerSystem=a;const i=o.seed||Math.floor(Math.random()*1e6),r=new u(i),n=o.color instanceof s?o.color:o.color?new s(o.color):new s(9127187),c=o.planetType||"DEFAULT",e=v[c];this.params={color:n,roughness:o.roughness||r.uniform(e.ROUGHNESS.min,e.ROUGHNESS.max),rockDensity:o.rockDensity||r.uniform(e.ROCK_DENSITY.min,e.ROCK_DENSITY.max)*10,craterCount:o.craterCount||r.uniform(e.CRATER_COUNT.min,e.CRATER_COUNT.max),opacity:o.opacity||r.uniform(e.OPACITY.min,e.OPACITY.max),seed:i,planetType:c},this.material=new C({vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,uniforms:{rockColor:{value:n},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},craterCount:{value:this.params.craterCount},opacity:{value:this.params.opacity},lightDirection:{value:new x(1,1,1).normalize()}},transparent:!0,side:p,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(a){}dispose(){}}function T(h,a,o,i="DEFAULT"){const r=a.surface||{},n=a.planet_info?.base_color||r.base_color,c=o||Math.floor(Math.random()*1e6),e=new u(c+8e3);let l=i;if(i==="DEFAULT"&&a.surface_elements?.type){const f=a.surface_elements.type.toLowerCase();f==="rocky"?l="ROCKY":f==="cave"&&(l="CAVE")}const t=v[l];return new m(h,{color:n?new s(n):new s(9127187),roughness:r.roughness||e.uniform(t.ROUGHNESS.min,t.ROUGHNESS.max),rockDensity:r.rock_density||e.uniform(t.ROCK_DENSITY.min,t.ROCK_DENSITY.max)*10,craterCount:r.crater_count||e.uniform(t.CRATER_COUNT.min,t.CRATER_COUNT.max),opacity:e.uniform(t.OPACITY.min,t.OPACITY.max),seed:c,planetType:l})}export{T as c};
