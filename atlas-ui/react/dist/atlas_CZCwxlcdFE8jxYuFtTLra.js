import{S as l}from"./atlas_CMUvaCD4mo7XQYkYXSJfw.js";import{C as o,S as m,D as f,N as p,V as t,b as v,M as d}from"./atlas_Ce3hh0hgxYWauQ_qSK6cl.js";const e={CRACK_DENSITY:{min:.3,max:.6},CRACK_DEPTH:{min:.5,max:.9},CRACK_COMPLEXITY:{min:3,max:5},CRACK_SCALE:{min:3,max:8},CRACK_SHARPNESS:{min:.7,max:1},CRACK_OPACITY:{min:.6,max:.9},INTERNAL_REFLECTIONS:{min:.5,max:.9},ANIMATION_SPEED:{min:.05,max:.15}};class c{crackMesh;material;params;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    varying vec2 vUv;
    
    void main() {
      vPosition = position;
      vNormal = normalMatrix * normal;
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;static fragmentShader=`
    uniform vec3 crackColor;
    uniform float crackDensity;
    uniform float crackDepth;
    uniform float crackComplexity;
    uniform float crackScale;
    uniform float crackSharpness;
    uniform float crackOpacity;
    uniform float internalReflections;
    uniform float animationSpeed;
    uniform float time;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    varying vec2 vUv;
    
    // Hash function para patrones procedurales
    float hash(vec3 p) {
      p = fract(p * vec3(443.8975, 397.2973, 491.1871));
      p += dot(p, p.yxz + 19.19);
      return fract((p.x + p.y) * p.z);
    }
    
    // Ruido 3D para patrones orgánicos
    float noise3D(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float n = mix(
        mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
      
      return n;
    }
    
    // Ruido fractal para patrones complejos
    float fbm(vec3 p, float complexity) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for(float i = 0.0; i < 5.0; i++) {
        if(i >= complexity) break;
        value += amplitude * noise3D(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    // Función Voronoi para crear patrones de grietas
    vec2 voronoi(vec2 p) {
      vec2 n = floor(p);
      vec2 f = fract(p);
      
      float minDist = 1.0;
      float secondMinDist = 1.0;
      
      for(int i = -1; i <= 1; i++) {
        for(int j = -1; j <= 1; j++) {
          vec2 neighbor = vec2(float(i), float(j));
          vec2 point = neighbor + hash(vec3(n + neighbor, 0.0)) - f;
          float dist = length(point);
          
          if(dist < minDist) {
            secondMinDist = minDist;
            minDist = dist;
          } else if(dist < secondMinDist) {
            secondMinDist = dist;
          }
        }
      }
      
      return vec2(minDist, secondMinDist);
    }
    
    // Crear patrones de grietas 3D - VERSIÓN SIMPLIFICADA PARA DEBUGGING
    float createCracks(vec3 pos) {
      // Grietas simples usando patrones sinusoidales para debugging
      float simple1 = sin(pos.x * crackScale * 2.0) * sin(pos.y * crackScale * 1.5);
      float simple2 = sin(pos.y * crackScale * 2.2) * sin(pos.z * crackScale * 1.8);
      float simple3 = sin(pos.z * crackScale * 1.9) * sin(pos.x * crackScale * 2.1);
      
      // Combinar patrones
      float cracks = max(simple1, max(simple2, simple3));
      
      // Normalizar a rango 0-1
      cracks = (cracks + 1.0) * 0.5;
      
      // Aplicar threshold basado en densidad
      cracks = cracks > (1.0 - crackDensity) ? 1.0 : 0.0;
      
      // Añadir un poco de ruido para variación
      float noise = fbm(pos * 5.0, 2.0);
      cracks *= (0.7 + noise * 0.3);
      
      return cracks;
    }
    
    // Crear reflexiones internas en las grietas
    vec3 internalReflectionEffect(vec3 viewDir, vec3 normal, float crackValue) {
      // Simular reflexiones múltiples dentro de las grietas
      float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 2.0);
      
      // Color espectral de las reflexiones internas
      vec3 spectralColor = vec3(
        sin(crackValue * 10.0 + time * animationSpeed) * 0.5 + 0.5,
        sin(crackValue * 12.0 + time * animationSpeed * 0.8) * 0.5 + 0.5,
        sin(crackValue * 8.0 + time * animationSpeed * 1.2) * 0.5 + 0.5
      );
      
      return spectralColor * fresnel * internalReflections;
    }
    
    void main() {
      // TEST EXTREMO: Simplemente pintar toda la esfera de rojo brillante
      // para verificar que el efecto se está renderizando
      
      gl_FragColor = vec4(1.0, 0.0, 0.0, 0.8); // ROJO SÓLIDO con 80% opacidad
    }
  `;constructor(a={}){const r=a.seed||Math.floor(Math.random()*1e6),i=new l(r),n=a.crackColor instanceof o?a.crackColor:a.crackColor?new o(a.crackColor):new o(3355443);this.params={crackDensity:a.crackDensity||i.uniform(e.CRACK_DENSITY.min,e.CRACK_DENSITY.max),crackDepth:a.crackDepth||i.uniform(e.CRACK_DEPTH.min,e.CRACK_DEPTH.max),crackComplexity:a.crackComplexity||Math.floor(i.uniform(e.CRACK_COMPLEXITY.min,e.CRACK_COMPLEXITY.max)),crackScale:a.crackScale||i.uniform(e.CRACK_SCALE.min,e.CRACK_SCALE.max),crackSharpness:a.crackSharpness||i.uniform(e.CRACK_SHARPNESS.min,e.CRACK_SHARPNESS.max),crackColor:n,crackOpacity:a.crackOpacity||i.uniform(e.CRACK_OPACITY.min,e.CRACK_OPACITY.max),internalReflections:a.internalReflections||i.uniform(e.INTERNAL_REFLECTIONS.min,e.INTERNAL_REFLECTIONS.max),animationSpeed:a.animationSpeed||i.uniform(e.ANIMATION_SPEED.min,e.ANIMATION_SPEED.max),seed:r,radius:a.radius||2.5},this.material=new m({vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,uniforms:{time:{value:0},crackColor:{value:this.params.crackColor},crackDensity:{value:this.params.crackDensity},crackDepth:{value:this.params.crackDepth},crackComplexity:{value:this.params.crackComplexity},crackScale:{value:this.params.crackScale},crackSharpness:{value:this.params.crackSharpness},crackOpacity:{value:this.params.crackOpacity},internalReflections:{value:this.params.internalReflections},animationSpeed:{value:this.params.animationSpeed},lightDirection:{value:new t(1,1,1).normalize()},lightPosition:{value:new t(0,0,0)}},transparent:!0,blending:p,side:f,depthWrite:!1});const s=new v(this.params.radius*1.05,32,32);this.crackMesh=new d(s,this.material)}addToScene(a,r){this.crackMesh.position.copy(r),a.add(this.crackMesh)}removeFromScene(a){a.remove(this.crackMesh)}update(a){this.material.uniforms.time&&(this.material.uniforms.time.value+=a)}updateFromThreeLight(a){this.material.uniforms.lightDirection&&a.position&&this.material.uniforms.lightDirection.value.copy(a.position).normalize(),this.material.uniforms.lightPosition&&a.position&&this.material.uniforms.lightPosition.value.copy(a.position)}dispose(){this.crackMesh&&(this.crackMesh.geometry.dispose(),this.material.dispose())}}function k(h,a,r){const i=r||Math.floor(Math.random()*1e6);return new c({crackDensity:.8,crackDepth:1,crackComplexity:3,crackScale:2,crackSharpness:.5,crackColor:new o(16777215),crackOpacity:1,internalReflections:.9,animationSpeed:.1,seed:i,radius:a})}export{k as c};
