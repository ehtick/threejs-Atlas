import{S as d}from"./atlas_BlTNaWGHZ8zx8h3TIfddO.js";import{C as r,B as x,P as T,a as m,S as C,A as N}from"./atlas_Xs9BLEnnn6iCcADsGARg5.js";const e={STAR_COUNT:{min:150,max:450},MIN_BRIGHTNESS:{min:.4,max:.7},MAX_BRIGHTNESS:{min:.8,max:1},MIN_SIZE:{min:1.2,max:1.8},MAX_SIZE:{min:3.5,max:5},DISTANCE:{min:300,max:600},TWINKLE_SPEED:{min:.002,max:.008}};class l{starSystem;material;geometry;params;starCount;static vertexShader=`
    attribute float size;
    attribute float brightness;
    attribute float twinklePhase;
    
    uniform float time;
    uniform float twinkleSpeed;
    
    varying float vBrightness;
    varying float vTwinkle;
    
    void main() {
      vBrightness = brightness;
      
      // Parpadeo sutil de las estrellas
      vTwinkle = 0.8 + 0.2 * sin(time * twinkleSpeed + twinklePhase);
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Tamaño basado en atributo y distancia - PUNTO MEDIO
      gl_PointSize = size * (300.0 / -mvPosition.z);
    }
  `;static fragmentShader=`
    uniform vec3 starColor;
    
    varying float vBrightness;
    varying float vTwinkle;
    
    void main() {
      // Crear forma circular de estrella
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      // Gradiente circular para efecto de estrella - EQUILIBRADO
      float alpha = (1.0 - dist * 2.0) * vBrightness * vTwinkle;
      alpha = pow(alpha, 1.5); // Balance entre concentración y visibilidad
      alpha *= 1.3; // Intensidad moderada
      
      // Color de estrella con brillo variable - EQUILIBRADO
      vec3 finalColor = starColor * (0.9 + 0.2 * vTwinkle);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(i,t={}){const a=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6),n=new d(a+1e4);this.params={color:t.color||new r(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(n.uniform(e.STAR_COUNT.min,e.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:n.uniform(e.MIN_BRIGHTNESS.min,e.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:n.uniform(e.MAX_BRIGHTNESS.min,e.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:n.uniform(e.MIN_SIZE.min,e.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:n.uniform(e.MAX_SIZE.min,e.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:n.uniform(e.DISTANCE.min,e.DISTANCE.max),seed:a,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:n.uniform(e.TWINKLE_SPEED.min,e.TWINKLE_SPEED.max)},this.starCount=this.params.starCount,this.geometry=new x,this.material=this.createMaterial(),this.generateStars(i),this.starSystem=new T(this.geometry,this.material)}generateStars(i){const t=new Float32Array(this.starCount*3),a=new Float32Array(this.starCount),n=new Float32Array(this.starCount),c=new Float32Array(this.starCount),v=this.params.seed,o=new d(v+1e4);for(let s=0;s<this.starCount;s++){const u=o.uniform(0,2*Math.PI),I=o.uniform(-1,1),h=Math.acos(I),S=this.params.distance*o.uniform(.8,1.2),g=S*Math.sin(h)*Math.cos(u),E=S*Math.sin(h)*Math.sin(u),M=S*Math.cos(h);t[s*3]=g,t[s*3+1]=E,t[s*3+2]=M,a[s]=o.uniform(this.params.minSize,this.params.maxSize),n[s]=o.uniform(this.params.minBrightness,this.params.maxBrightness),c[s]=o.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new m(t,3)),this.geometry.setAttribute("size",new m(a,1)),this.geometry.setAttribute("brightness",new m(n,1)),this.geometry.setAttribute("twinklePhase",new m(c,1))}createMaterial(){const i=this.params.color instanceof r?this.params.color:new r(this.params.color);return new C({vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,uniforms:{time:{value:0},starColor:{value:i},twinkleSpeed:{value:this.params.twinkleSpeed}},transparent:!0,blending:N,depthWrite:!1,vertexColors:!1})}addToScene(i,t){t&&this.starSystem.position.copy(t),i.add(this.starSystem)}update(i){this.material.uniforms.time.value+=i}updateParams(i){if(this.params={...this.params,...i},i.color!==void 0){const t=i.color instanceof r?i.color:new r(i.color);this.material.uniforms.starColor.value=t}i.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=i.twinkleSpeed)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function A(f,i){const t=i!==void 0?i:Math.floor(Math.random()*1e6),a=new d(t+1e4),n={color:new r(16777215),starCount:Math.floor(a.uniform(e.STAR_COUNT.min,e.STAR_COUNT.max)),minBrightness:a.uniform(e.MIN_BRIGHTNESS.min,e.MIN_BRIGHTNESS.max),maxBrightness:a.uniform(e.MAX_BRIGHTNESS.min,e.MAX_BRIGHTNESS.max),minSize:a.uniform(e.MIN_SIZE.min,e.MIN_SIZE.max),maxSize:a.uniform(e.MAX_SIZE.min,e.MAX_SIZE.max),distance:a.uniform(e.DISTANCE.min,e.DISTANCE.max),seed:t,twinkleSpeed:a.uniform(e.TWINKLE_SPEED.min,e.TWINKLE_SPEED.max)};return new l(f,n)}export{l as S,A as c};
