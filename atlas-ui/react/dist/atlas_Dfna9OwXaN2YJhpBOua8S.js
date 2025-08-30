import{S as f,D as y,g as M}from"./atlas_DhOreEVM1uBHzRPTt7uMw.js";import{C as m,V as c,B as N,P,a as l,S as R,A as B}from"./atlas_CLp6T-BwF8hBVTNM0OiQd.js";const e={STAR_COUNT:{min:650,max:1500},MIN_BRIGHTNESS:{min:.6,max:.8},MAX_BRIGHTNESS:{min:.9,max:1},MIN_SIZE:{min:1,max:1.2},MAX_SIZE:{min:2.5,max:4},DISTANCE:{min:250,max:450},TWINKLE_SPEED:{min:1,max:2},PARALLAX_STRENGTH:{min:1,max:3},VARIABLE_CHANCE:{min:.002,max:.005}};class S{starSystem;material;geometry;params;starCount;cameraPosition=new c;lastCameraPosition=new c;startTime;static vertexShader=`
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
  `;constructor(i,t={}){const a=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6),r=new f(a+1e4);this.params={color:t.color||new m(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(r.uniform(e.STAR_COUNT.min,e.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:r.uniform(e.MIN_BRIGHTNESS.min,e.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:r.uniform(e.MAX_BRIGHTNESS.min,e.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:r.uniform(e.MIN_SIZE.min,e.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:r.uniform(e.MAX_SIZE.min,e.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:r.uniform(e.DISTANCE.min,e.DISTANCE.max),seed:a,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:r.uniform(e.TWINKLE_SPEED.min,e.TWINKLE_SPEED.max),parallaxStrength:t.parallaxStrength!==void 0?t.parallaxStrength:r.uniform(e.PARALLAX_STRENGTH.min,e.PARALLAX_STRENGTH.max),variableChance:t.variableChance!==void 0?t.variableChance:r.uniform(e.VARIABLE_CHANCE.min,e.VARIABLE_CHANCE.max),cosmicOriginTime:t.cosmicOriginTime,timeSpeed:t.timeSpeed!==void 0?t.timeSpeed:1};const n=this.params.cosmicOriginTime||y;this.startTime=Date.now()/1e3-n,this.starCount=this.params.starCount,this.geometry=new N,this.material=this.createMaterial(),this.generateStars(i),this.starSystem=new P(this.geometry,this.material)}generateStars(i){const t=new Float32Array(this.starCount*3),a=new Float32Array(this.starCount*3),r=new Float32Array(this.starCount),n=new Float32Array(this.starCount),h=new Float32Array(this.starCount),p=new Float32Array(this.starCount),v=new Float32Array(this.starCount),I=this.params.seed,o=new f(I+1e4);for(let s=0;s<this.starCount;s++){const T=o.uniform(0,2*Math.PI),b=o.uniform(-1,1),d=Math.acos(b),_=this.params.distance,g=o.uniform(.7,1.3),u=_*g,A=u*Math.sin(d)*Math.cos(T),C=u*Math.sin(d)*Math.sin(T),x=u*Math.cos(d);t[s*3]=A,t[s*3+1]=C,t[s*3+2]=x,a[s*3]=A,a[s*3+1]=C,a[s*3+2]=x;const E=o.uniform(0,1)<this.params.variableChance;p[s]=E?1:0,v[s]=g,r[s]=o.uniform(this.params.minSize,this.params.maxSize),n[s]=o.uniform(this.params.minBrightness,this.params.maxBrightness),h[s]=o.uniform(0,Math.PI*2),E&&(n[s]=Math.min(1,n[s]+.2),h[s]=o.uniform(0,Math.PI*2))}this.geometry.setAttribute("position",new l(t,3)),this.geometry.setAttribute("originalPosition",new l(a,3)),this.geometry.setAttribute("size",new l(r,1)),this.geometry.setAttribute("brightness",new l(n,1)),this.geometry.setAttribute("twinklePhase",new l(h,1)),this.geometry.setAttribute("starType",new l(p,1)),this.geometry.setAttribute("distanceLayer",new l(v,1))}createMaterial(){const i=this.params.color instanceof m?this.params.color:new m(this.params.color);return new R({vertexShader:S.vertexShader,fragmentShader:S.fragmentShader,uniforms:{time:{value:0},starColor:{value:i},twinkleSpeed:{value:this.params.twinkleSpeed},cameraOffset:{value:new c(0,0,0)},parallaxStrength:{value:this.params.parallaxStrength}},transparent:!0,blending:B,depthWrite:!1,vertexColors:!1})}addToScene(i,t){t&&this.starSystem.position.copy(t),i.add(this.starSystem)}update(i,t,a){const r=this.params.cosmicOriginTime||y,n=M(r,this.params.timeSpeed,this.startTime);if(this.material.uniforms.time.value=n,a){this.cameraPosition.copy(a.position);const h=new c().subVectors(this.cameraPosition,this.lastCameraPosition).multiplyScalar(.3);this.material.uniforms.cameraOffset.value.lerp(h,.1),this.lastCameraPosition.copy(this.cameraPosition)}}updateWithCamera(i,t){this.update(i,void 0,t)}updateParams(i){if(this.params={...this.params,...i},i.color!==void 0){const t=i.color instanceof m?i.color:new m(i.color);this.material.uniforms.starColor.value=t}i.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=i.twinkleSpeed),i.parallaxStrength!==void 0&&(this.material.uniforms.parallaxStrength.value=i.parallaxStrength)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function O(w,i){const t=i!==void 0?i:Math.floor(Math.random()*1e6),a=new f(t+1e4),r={color:new m(16777215),starCount:Math.floor(a.uniform(e.STAR_COUNT.min,e.STAR_COUNT.max)),minBrightness:a.uniform(e.MIN_BRIGHTNESS.min,e.MIN_BRIGHTNESS.max),maxBrightness:a.uniform(e.MAX_BRIGHTNESS.min,e.MAX_BRIGHTNESS.max),minSize:a.uniform(e.MIN_SIZE.min,e.MIN_SIZE.max),maxSize:a.uniform(e.MAX_SIZE.min,e.MAX_SIZE.max),distance:a.uniform(e.DISTANCE.min,e.DISTANCE.max),seed:t,twinkleSpeed:a.uniform(e.TWINKLE_SPEED.min,e.TWINKLE_SPEED.max),parallaxStrength:a.uniform(e.PARALLAX_STRENGTH.min,e.PARALLAX_STRENGTH.max),variableChance:a.uniform(e.VARIABLE_CHANCE.min,e.VARIABLE_CHANCE.max)};return new S(w,r)}export{S,O as c};
