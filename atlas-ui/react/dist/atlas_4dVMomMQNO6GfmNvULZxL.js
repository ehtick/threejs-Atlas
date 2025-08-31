import{S as d,D as w,g as M}from"./atlas_CvjINy7MGUzH_F6zr4ome.js";import{C as l,V as c,B as R,P as b,a as m,S as B,A as P}from"./atlas_CePo6YWp7kQwmK1a1tWI3.js";const i={STAR_COUNT:{min:650,max:1500},MIN_BRIGHTNESS:{min:.6,max:.8},MAX_BRIGHTNESS:{min:.9,max:1},MIN_SIZE:{min:1,max:1.2},MAX_SIZE:{min:2.5,max:4},DISTANCE:{min:250,max:450},TWINKLE_SPEED:{min:1,max:2},PARALLAX_STRENGTH:{min:1,max:3},VARIABLE_CHANCE:{min:.002,max:.005}};class S{starSystem;material;geometry;params;starCount;cameraPosition=new c;lastCameraPosition=new c;startTime;static vertexShader=`
    attribute float size;
    attribute float brightness;
    attribute float twinklePhase;
    attribute float starType;
    attribute float distanceLayer;
    attribute vec3 originalPosition;
    
    uniform float time;
    uniform float twinkleSpeed;
    uniform vec3 cameraOffset;
    uniform float parallaxStrength;
    
    varying float vBrightness;
    varying float vTwinkle;
    varying float vStarType;
    
    void main() {
      vBrightness = brightness;
      vStarType = starType;
      
      float baseTwinkle;
      if (starType > 0.5) {
        float pulse = sin(time * twinkleSpeed * 1.0 + twinklePhase);
        baseTwinkle = 0.2 + 0.8 * (pulse * 0.5 + 0.5);
      } else {
        float intensity = 0.05 + 0.05 * brightness;
        baseTwinkle = (1.0 - intensity) + intensity * sin(time * twinkleSpeed + twinklePhase);
      }
      vTwinkle = baseTwinkle;
      
      vec3 parallaxOffset = cameraOffset * parallaxStrength * (0.5 / distanceLayer);
      vec3 adjustedPosition = originalPosition + parallaxOffset;
      
      vec4 mvPosition = modelViewMatrix * vec4(adjustedPosition, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      float sizeMultiplier = starType > 0.5 ? 1.2 : 1.0;
      gl_PointSize = size * sizeMultiplier * (300.0 / -mvPosition.z);
    }
  `;static fragmentShader=`
    uniform vec3 starColor;
    
    varying float vBrightness;
    varying float vTwinkle;
    varying float vStarType;
    
    void main() {
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      float alpha = (1.0 - dist * 2.0) * vBrightness * vTwinkle;
      
      if (vStarType > 0.5) {
        alpha = pow(alpha, 1.0);
        alpha *= 1.5 + 1.5 * vTwinkle;
      } else {
        alpha = pow(alpha, 1.5);
        alpha *= 1.5;
      }
      
      vec3 finalColor;
      if (vStarType > 0.5) {
        vec3 variableTint = vec3(1.0, 0.6, 0.4);
        finalColor = starColor * variableTint * (0.8 + 0.4 * vTwinkle);
      } else {
        vec3 normalTint = vec3(1.0, 0.9, 0.7);
        finalColor = starColor * normalTint * (0.8 + 0.4 * vTwinkle);
      }
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(e,t={}){const a=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6),n=new d(a+1e4);this.params={color:t.color||new l(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(n.uniform(i.STAR_COUNT.min,i.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:n.uniform(i.MIN_BRIGHTNESS.min,i.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:n.uniform(i.MAX_BRIGHTNESS.min,i.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:n.uniform(i.MIN_SIZE.min,i.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:n.uniform(i.MAX_SIZE.min,i.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:n.uniform(i.DISTANCE.min,i.DISTANCE.max),seed:a,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:n.uniform(i.TWINKLE_SPEED.min,i.TWINKLE_SPEED.max),parallaxStrength:t.parallaxStrength!==void 0?t.parallaxStrength:n.uniform(i.PARALLAX_STRENGTH.min,i.PARALLAX_STRENGTH.max),variableChance:t.variableChance!==void 0?t.variableChance:n.uniform(i.VARIABLE_CHANCE.min,i.VARIABLE_CHANCE.max),cosmicOriginTime:t.cosmicOriginTime,timeSpeed:t.timeSpeed!==void 0?t.timeSpeed:1};const r=this.params.cosmicOriginTime||w;this.startTime=Date.now()/1e3-r,this.starCount=this.params.starCount,this.geometry=new R,this.material=this.createMaterial(),this.generateStars(e),this.starSystem=new b(this.geometry,this.material)}generateStars(e){const t=new Float32Array(this.starCount*3),a=new Float32Array(this.starCount*3),n=new Float32Array(this.starCount),r=new Float32Array(this.starCount),h=new Float32Array(this.starCount),T=new Float32Array(this.starCount),v=new Float32Array(this.starCount),I=this.params.seed,o=new d(I+1e4);for(let s=0;s<this.starCount;s++){const g=o.uniform(0,2*Math.PI),_=o.uniform(-1,1),f=Math.acos(_),N=this.params.distance,p=o.uniform(.7,1.3),u=N*p,A=u*Math.sin(f)*Math.cos(g),C=u*Math.sin(f)*Math.sin(g),x=u*Math.cos(f);t[s*3]=A,t[s*3+1]=C,t[s*3+2]=x,a[s*3]=A,a[s*3+1]=C,a[s*3+2]=x;const E=o.uniform(0,1)<this.params.variableChance;T[s]=E?1:0,v[s]=p,n[s]=o.uniform(this.params.minSize,this.params.maxSize),r[s]=o.uniform(this.params.minBrightness,this.params.maxBrightness),h[s]=o.uniform(0,Math.PI*2),E&&(r[s]=Math.min(1,r[s]+.2),h[s]=o.uniform(0,Math.PI*2))}this.geometry.setAttribute("position",new m(t,3)),this.geometry.setAttribute("originalPosition",new m(a,3)),this.geometry.setAttribute("size",new m(n,1)),this.geometry.setAttribute("brightness",new m(r,1)),this.geometry.setAttribute("twinklePhase",new m(h,1)),this.geometry.setAttribute("starType",new m(T,1)),this.geometry.setAttribute("distanceLayer",new m(v,1))}createMaterial(){const e=this.params.color instanceof l?this.params.color:new l(this.params.color);return new B({vertexShader:S.vertexShader,fragmentShader:S.fragmentShader,uniforms:{time:{value:0},starColor:{value:e},twinkleSpeed:{value:this.params.twinkleSpeed},cameraOffset:{value:new c(0,0,0)},parallaxStrength:{value:this.params.parallaxStrength}},transparent:!0,blending:P,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.starSystem.position.copy(t),e.add(this.starSystem)}update(e,t,a){const n=this.params.cosmicOriginTime||w,r=M(n,this.params.timeSpeed,this.startTime);if(this.material.uniforms.time.value=r,a){this.cameraPosition.copy(a.position);const h=new c().subVectors(this.cameraPosition,this.lastCameraPosition).multiplyScalar(.3);this.material.uniforms.cameraOffset.value.lerp(h,.1),this.lastCameraPosition.copy(this.cameraPosition)}}updateWithCamera(e,t){this.update(e,void 0,t)}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof l?e.color:new l(e.color);this.material.uniforms.starColor.value=t}e.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=e.twinkleSpeed),e.parallaxStrength!==void 0&&(this.material.uniforms.parallaxStrength.value=e.parallaxStrength)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function O(y,e){const t=e!==void 0?e:Math.floor(Math.random()*1e6),a=new d(t+1e4),n={color:new l(16777215),starCount:Math.floor(a.uniform(i.STAR_COUNT.min,i.STAR_COUNT.max)),minBrightness:a.uniform(i.MIN_BRIGHTNESS.min,i.MIN_BRIGHTNESS.max),maxBrightness:a.uniform(i.MAX_BRIGHTNESS.min,i.MAX_BRIGHTNESS.max),minSize:a.uniform(i.MIN_SIZE.min,i.MIN_SIZE.max),maxSize:a.uniform(i.MAX_SIZE.min,i.MAX_SIZE.max),distance:a.uniform(i.DISTANCE.min,i.DISTANCE.max),seed:t,twinkleSpeed:a.uniform(i.TWINKLE_SPEED.min,i.TWINKLE_SPEED.max),parallaxStrength:a.uniform(i.PARALLAX_STRENGTH.min,i.PARALLAX_STRENGTH.max),variableChance:a.uniform(i.VARIABLE_CHANCE.min,i.VARIABLE_CHANCE.max)};return new S(y,n)}export{S,O as c};
