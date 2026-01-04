import{S as d,D as y,g as P,a as N}from"./atlas_CXe69HDW-Q8b_kGwXRltZ.js";import{C as m,V as S,B as R,P as M,a as l,S as B,A as L}from"./atlas_DUxdE5_5iPCKlmI6uaLFO.js";const i={STAR_COUNT:{min:650,max:1500},MIN_BRIGHTNESS:{min:.6,max:.8},MAX_BRIGHTNESS:{min:.9,max:1},MIN_SIZE:{min:4,max:4.8},MAX_SIZE:{min:10,max:16},DISTANCE:{min:1e3,max:1800},TWINKLE_SPEED:{min:1,max:2},PARALLAX_STRENGTH:{min:1,max:3},VARIABLE_CHANCE:{min:.002,max:.005},ORBITAL_PARALLAX_STRENGTH:{min:.15,max:.35}};class c{starSystem;material;geometry;params;starCount;cameraPosition=new S;lastCameraPosition=new S;startTime;static vertexShader=`
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
    uniform vec3 orbitalPosition;
    uniform float orbitalParallaxStrength;

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
      vec3 orbitalParallax = orbitalPosition * orbitalParallaxStrength * (1.0 / distanceLayer);

      vec3 adjustedPosition = originalPosition + parallaxOffset + orbitalParallax;

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
  `;constructor(e,t={}){const a=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6),r=new d(a+1e4);this.params={color:t.color||new m(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(r.uniform(i.STAR_COUNT.min,i.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:r.uniform(i.MIN_BRIGHTNESS.min,i.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:r.uniform(i.MAX_BRIGHTNESS.min,i.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:r.uniform(i.MIN_SIZE.min,i.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:r.uniform(i.MAX_SIZE.min,i.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:r.uniform(i.DISTANCE.min,i.DISTANCE.max),seed:a,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:r.uniform(i.TWINKLE_SPEED.min,i.TWINKLE_SPEED.max),parallaxStrength:t.parallaxStrength!==void 0?t.parallaxStrength:r.uniform(i.PARALLAX_STRENGTH.min,i.PARALLAX_STRENGTH.max),variableChance:t.variableChance!==void 0?t.variableChance:r.uniform(i.VARIABLE_CHANCE.min,i.VARIABLE_CHANCE.max),cosmicOriginTime:t.cosmicOriginTime,timeSpeed:t.timeSpeed!==void 0?t.timeSpeed:1,orbitalParallaxStrength:t.orbitalParallaxStrength!==void 0?t.orbitalParallaxStrength:r.uniform(i.ORBITAL_PARALLAX_STRENGTH.min,i.ORBITAL_PARALLAX_STRENGTH.max)};const o=this.params.cosmicOriginTime||y;this.startTime=P(o),this.starCount=this.params.starCount,this.geometry=new R,this.material=this.createMaterial(),this.generateStars(e),this.starSystem=new M(this.geometry,this.material)}generateStars(e){const t=new Float32Array(this.starCount*3),a=new Float32Array(this.starCount*3),r=new Float32Array(this.starCount),o=new Float32Array(this.starCount),h=new Float32Array(this.starCount),T=new Float32Array(this.starCount),v=new Float32Array(this.starCount),_=this.params.seed,s=new d(_+1e4);for(let n=0;n<this.starCount;n++){const g=s.uniform(0,2*Math.PI),b=s.uniform(-1,1),f=Math.acos(b),w=this.params.distance,A=s.uniform(.7,1.3),u=w*A,p=u*Math.sin(f)*Math.cos(g),x=u*Math.sin(f)*Math.sin(g),C=u*Math.cos(f);t[n*3]=p,t[n*3+1]=x,t[n*3+2]=C,a[n*3]=p,a[n*3+1]=x,a[n*3+2]=C;const E=s.uniform(0,1)<this.params.variableChance;T[n]=E?1:0,v[n]=A,r[n]=s.uniform(this.params.minSize,this.params.maxSize),o[n]=s.uniform(this.params.minBrightness,this.params.maxBrightness),h[n]=s.uniform(0,Math.PI*2),E&&(o[n]=Math.min(1,o[n]+.2),h[n]=s.uniform(0,Math.PI*2))}this.geometry.setAttribute("position",new l(t,3)),this.geometry.setAttribute("originalPosition",new l(a,3)),this.geometry.setAttribute("size",new l(r,1)),this.geometry.setAttribute("brightness",new l(o,1)),this.geometry.setAttribute("twinklePhase",new l(h,1)),this.geometry.setAttribute("starType",new l(T,1)),this.geometry.setAttribute("distanceLayer",new l(v,1))}createMaterial(){const e=this.params.color instanceof m?this.params.color:new m(this.params.color);return new B({vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,uniforms:{time:{value:0},starColor:{value:e},twinkleSpeed:{value:this.params.twinkleSpeed},cameraOffset:{value:new S(0,0,0)},parallaxStrength:{value:this.params.parallaxStrength},orbitalPosition:{value:new S(0,0,0)},orbitalParallaxStrength:{value:this.params.orbitalParallaxStrength}},transparent:!0,blending:L,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.starSystem.position.copy(t),e.add(this.starSystem)}update(e,t,a){const r=this.params.cosmicOriginTime||y,o=N(r,this.params.timeSpeed,this.startTime);if(this.material.uniforms.time.value=o,a){this.cameraPosition.copy(a.position);const h=new S().subVectors(this.cameraPosition,this.lastCameraPosition).multiplyScalar(.3);this.material.uniforms.cameraOffset.value.lerp(h,.1),this.lastCameraPosition.copy(this.cameraPosition)}}updateWithCamera(e,t){this.update(e,void 0,t)}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof m?e.color:new m(e.color);this.material.uniforms.starColor.value=t}e.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=e.twinkleSpeed),e.parallaxStrength!==void 0&&(this.material.uniforms.parallaxStrength.value=e.parallaxStrength),e.orbitalParallaxStrength!==void 0&&(this.material.uniforms.orbitalParallaxStrength.value=e.orbitalParallaxStrength)}updateOrbitalPosition(e){this.material.uniforms.orbitalPosition.value.copy(e)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function H(I,e){const t=e!==void 0?e:Math.floor(Math.random()*1e6),a=new d(t+1e4),r={color:new m(16777215),starCount:Math.floor(a.uniform(i.STAR_COUNT.min,i.STAR_COUNT.max)),minBrightness:a.uniform(i.MIN_BRIGHTNESS.min,i.MIN_BRIGHTNESS.max),maxBrightness:a.uniform(i.MAX_BRIGHTNESS.min,i.MAX_BRIGHTNESS.max),minSize:a.uniform(i.MIN_SIZE.min,i.MIN_SIZE.max),maxSize:a.uniform(i.MAX_SIZE.min,i.MAX_SIZE.max),distance:a.uniform(i.DISTANCE.min,i.DISTANCE.max),seed:t,twinkleSpeed:a.uniform(i.TWINKLE_SPEED.min,i.TWINKLE_SPEED.max),parallaxStrength:a.uniform(i.PARALLAX_STRENGTH.min,i.PARALLAX_STRENGTH.max),variableChance:a.uniform(i.VARIABLE_CHANCE.min,i.VARIABLE_CHANCE.max)};return new c(I,r)}export{c as S,H as c};
