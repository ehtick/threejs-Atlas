import{S as u}from"./atlas_BRxuskCzJ8TfEkc5-9Hxt.js";import{C as l,V as h,B as M,P as N,a as o,S as _,A as P}from"./atlas_Dg_ET6FsNHb7HwLobcNa6.js";const e={STAR_COUNT:{min:2e3,max:3e3},MIN_BRIGHTNESS:{min:.6,max:.8},MAX_BRIGHTNESS:{min:.9,max:1},MIN_SIZE:{min:1.2,max:1.8},MAX_SIZE:{min:3.5,max:5},DISTANCE:{min:150,max:300},TWINKLE_SPEED:{min:1,max:2},PARALLAX_STRENGTH:{min:1,max:3},VARIABLE_CHANCE:{min:.002,max:.005}};class c{starSystem;material;geometry;params;starCount;cameraPosition=new h;lastCameraPosition=new h;static vertexShader=`
    attribute float size;
    attribute float brightness;
    attribute float twinklePhase;
    attribute float starType; // 0=normal, 1=pulsar
    attribute float distanceLayer; // Para parallax
    attribute vec3 originalPosition; // Posición original para parallax
    
    uniform float time;
    uniform float twinkleSpeed;
    uniform vec3 cameraOffset; // Offset de cámara para parallax
    uniform float parallaxStrength;
    
    varying float vBrightness;
    varying float vTwinkle;
    varying float vStarType;
    
    void main() {
      vBrightness = brightness;
      vStarType = starType;
      
      // Sistema de parpadeo mejorado basado en tipo de estrella
      float baseTwinkle;
      if (starType > 0.5) {
        // Variables: pulso MUY visible y evidente
        float pulse = sin(time * twinkleSpeed * 1.0 + twinklePhase); // Velocidad normal
        baseTwinkle = 0.2 + 0.8 * (pulse * 0.5 + 0.5); // Variación dramática (20%-100%)
      } else {
        // Estrellas normales: MUY estables, apenas parpadean
        float intensity = 0.05 + 0.05 * brightness; // Parpadeo mínimo
        baseTwinkle = (1.0 - intensity) + intensity * sin(time * twinkleSpeed + twinklePhase);
      }
      vTwinkle = baseTwinkle;
      
      // Efecto parallax suave pero visible
      vec3 parallaxOffset = cameraOffset * parallaxStrength * (0.5 / distanceLayer);
      vec3 adjustedPosition = originalPosition + parallaxOffset;
      
      vec4 mvPosition = modelViewMatrix * vec4(adjustedPosition, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Tamaño con variación por tipo
      float sizeMultiplier = starType > 0.5 ? 1.2 : 1.0; // Pulsares ligeramente más grandes
      gl_PointSize = size * sizeMultiplier * (300.0 / -mvPosition.z);
    }
  `;static fragmentShader=`
    uniform vec3 starColor;
    
    varying float vBrightness;
    varying float vTwinkle;
    varying float vStarType;
    
    void main() {
      // Crear forma circular de estrella
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      // Gradiente circular con variación por tipo de estrella
      float alpha = (1.0 - dist * 2.0) * vBrightness * vTwinkle;
      
      // Ajustar intensidad según tipo
      if (vStarType > 0.5) {
        // Variables: cambio notable de brillo para que se vean
        alpha = pow(alpha, 1.0);
        alpha *= 1.5 + 1.5 * vTwinkle; // Va de 1.5x a 3.0x brillo (visible)
      } else {
        // Estrellas normales
        alpha = pow(alpha, 1.5);
        alpha *= 1.5;
      }
      
      // Color realista por tipo de estrella
      vec3 finalColor;
      if (vStarType > 0.5) {
        // Variables: tinte rojizo como gigantes rojas variables (Betelgeuse, Mira)
        vec3 variableTint = vec3(1.0, 0.6, 0.4);
        finalColor = starColor * variableTint * (0.8 + 0.4 * vTwinkle); // Color rojizo estable
      } else {
        // Estrellas normales: amarillentas estables
        vec3 normalTint = vec3(1.0, 0.9, 0.7);
        finalColor = starColor * normalTint * (0.8 + 0.4 * vTwinkle);
      }
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(a,t={}){const i=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6),r=new u(i+1e4);this.params={color:t.color||new l(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(r.uniform(e.STAR_COUNT.min,e.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:r.uniform(e.MIN_BRIGHTNESS.min,e.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:r.uniform(e.MAX_BRIGHTNESS.min,e.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:r.uniform(e.MIN_SIZE.min,e.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:r.uniform(e.MAX_SIZE.min,e.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:r.uniform(e.DISTANCE.min,e.DISTANCE.max),seed:i,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:r.uniform(e.TWINKLE_SPEED.min,e.TWINKLE_SPEED.max),parallaxStrength:t.parallaxStrength!==void 0?t.parallaxStrength:r.uniform(e.PARALLAX_STRENGTH.min,e.PARALLAX_STRENGTH.max),variableChance:t.variableChance!==void 0?t.variableChance:r.uniform(e.VARIABLE_CHANCE.min,e.VARIABLE_CHANCE.max)},this.starCount=this.params.starCount,this.geometry=new M,this.material=this.createMaterial(),this.generateStars(a),this.starSystem=new N(this.geometry,this.material)}generateStars(a){const t=new Float32Array(this.starCount*3),i=new Float32Array(this.starCount*3),r=new Float32Array(this.starCount),m=new Float32Array(this.starCount),S=new Float32Array(this.starCount),p=new Float32Array(this.starCount),v=new Float32Array(this.starCount),w=this.params.seed,n=new u(w+1e4);for(let s=0;s<this.starCount;s++){const g=n.uniform(0,2*Math.PI),b=n.uniform(-1,1),d=Math.acos(b),I=this.params.distance,A=n.uniform(.7,1.3),f=I*A,T=f*Math.sin(d)*Math.cos(g),x=f*Math.sin(d)*Math.sin(g),C=f*Math.cos(d);t[s*3]=T,t[s*3+1]=x,t[s*3+2]=C,i[s*3]=T,i[s*3+1]=x,i[s*3+2]=C;const E=n.uniform(0,1)<this.params.variableChance;p[s]=E?1:0,v[s]=A,r[s]=n.uniform(this.params.minSize,this.params.maxSize),m[s]=n.uniform(this.params.minBrightness,this.params.maxBrightness),S[s]=n.uniform(0,Math.PI*2),E&&(m[s]=Math.min(1,m[s]+.2),S[s]=n.uniform(0,Math.PI*2))}this.geometry.setAttribute("position",new o(t,3)),this.geometry.setAttribute("originalPosition",new o(i,3)),this.geometry.setAttribute("size",new o(r,1)),this.geometry.setAttribute("brightness",new o(m,1)),this.geometry.setAttribute("twinklePhase",new o(S,1)),this.geometry.setAttribute("starType",new o(p,1)),this.geometry.setAttribute("distanceLayer",new o(v,1))}createMaterial(){const a=this.params.color instanceof l?this.params.color:new l(this.params.color);return new _({vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,uniforms:{time:{value:0},starColor:{value:a},twinkleSpeed:{value:this.params.twinkleSpeed},cameraOffset:{value:new h(0,0,0)},parallaxStrength:{value:this.params.parallaxStrength}},transparent:!0,blending:P,depthWrite:!1,vertexColors:!1})}addToScene(a,t){t&&this.starSystem.position.copy(t),a.add(this.starSystem)}update(a,t,i){if(this.material.uniforms.time.value+=a,i){this.cameraPosition.copy(i.position);const r=new h().subVectors(this.cameraPosition,this.lastCameraPosition).multiplyScalar(.3);this.material.uniforms.cameraOffset.value.lerp(r,.1),this.lastCameraPosition.copy(this.cameraPosition)}}updateWithCamera(a,t){this.update(a,void 0,t)}updateParams(a){if(this.params={...this.params,...a},a.color!==void 0){const t=a.color instanceof l?a.color:new l(a.color);this.material.uniforms.starColor.value=t}a.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=a.twinkleSpeed),a.parallaxStrength!==void 0&&(this.material.uniforms.parallaxStrength.value=a.parallaxStrength)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function k(y,a){const t=a!==void 0?a:Math.floor(Math.random()*1e6),i=new u(t+1e4),r={color:new l(16777215),starCount:Math.floor(i.uniform(e.STAR_COUNT.min,e.STAR_COUNT.max)),minBrightness:i.uniform(e.MIN_BRIGHTNESS.min,e.MIN_BRIGHTNESS.max),maxBrightness:i.uniform(e.MAX_BRIGHTNESS.min,e.MAX_BRIGHTNESS.max),minSize:i.uniform(e.MIN_SIZE.min,e.MIN_SIZE.max),maxSize:i.uniform(e.MAX_SIZE.min,e.MAX_SIZE.max),distance:i.uniform(e.DISTANCE.min,e.DISTANCE.max),seed:t,twinkleSpeed:i.uniform(e.TWINKLE_SPEED.min,e.TWINKLE_SPEED.max),parallaxStrength:i.uniform(e.PARALLAX_STRENGTH.min,e.PARALLAX_STRENGTH.max),variableChance:i.uniform(e.VARIABLE_CHANCE.min,e.VARIABLE_CHANCE.max)};return new c(y,r)}export{c as S,k as c};
