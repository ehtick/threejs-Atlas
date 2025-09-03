import{S as N}from"./atlas_CtOhIAiNHzSpXytHIyKwk.js";import{C as r,G as W,V as a,d as b,e as D,M as _,S as U,F as G,A as O,i as H}from"./atlas_pGQiCQeTD5l6dMUXRRcYJ.js";const t={FLOW_COUNT:{min:20,max:35},FLOW_LENGTH:{min:.4,max:1.2},FLOW_WIDTH:{min:.015,max:.08},FLOW_INTENSITY:{min:1.5,max:3},FLOW_SPEED:{min:.05,max:.3},PULSE_SPEED:{min:.5,max:1.2},TURBULENCE:{min:.8,max:2},EMISSIVE_INTENSITY:{min:3,max:5},GLOW_RADIUS:{min:1.1,max:1.3},TIME_SPEED:{min:.1,max:2},EMERGENCE_HEIGHT:{min:.01,max:.03}};class d{lavaGroup;lavaFlows=[];material;params;startTime;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vEmergence;
    
    uniform float time;
    uniform float flowSpeed;
    uniform float turbulence;
    uniform float emergenceHeight;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      vec3 pos = position;
      
      float flowProgress = vUv.x;
      
      float emergenceWave = sin((flowProgress * 3.14159 * 2.0) - time * flowSpeed * 2.0);
      
      emergenceWave += sin((flowProgress * 6.28318) + time * flowSpeed) * 0.3;
      
      float edgeFade = smoothstep(0.0, 0.1, flowProgress) * smoothstep(1.0, 0.9, flowProgress);
      emergenceWave *= edgeFade;
      
      float maxEmergence = emergenceHeight * (1.0 + sin(worldPosition.x * 10.0) * 0.5);
      
      float emergence = emergenceWave * maxEmergence;
      vEmergence = emergence;
      
      float flowNoise = sin(time * flowSpeed + worldPosition.x * 2.0) * 0.05;
      flowNoise += cos(time * flowSpeed * 1.3 + worldPosition.z * 1.5) * 0.03;
      
      float turbulentMotion = sin(time * turbulence + worldPosition.y * 3.0) * 0.02;
      turbulentMotion += cos(time * turbulence * 0.7 + length(worldPosition.xz) * 4.0) * 0.015;
      
      pos += normal * (emergence + flowNoise + turbulentMotion);
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static fragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vEmergence;
    
    uniform float time;
    uniform float flowIntensity;
    uniform float pulseSpeed;
    uniform vec3 coreColor;
    uniform vec3 hotColor;
    uniform vec3 coolColor;
    uniform float emissiveIntensity;
    uniform float glowRadius;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for (int i = 0; i < 6; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      vec2 flowUv = vUv;
      flowUv.x += time * 0.1;
      flowUv.y += time * 0.05;
      
      float lavaTexture1 = fbm(flowUv * 8.0);
      float lavaTexture2 = fbm(flowUv * 16.0 + vec2(time * 0.1));
      float lavaTexture3 = fbm(flowUv * 32.0 + vec2(time * 0.2));
      
      float combinedTexture = lavaTexture1 * 0.5 + lavaTexture2 * 0.3 + lavaTexture3 * 0.2;
      
      float temperaturePulse = sin(time * pulseSpeed) * 0.5 + 0.5;
      float emergenceGlow = abs(vEmergence) * 5.0;
      float heatIntensity = combinedTexture + temperaturePulse * 0.3 + emergenceGlow;
      
      vec3 finalColor;
      if (heatIntensity > 0.7) {
        finalColor = mix(hotColor, coreColor, (heatIntensity - 0.7) / 0.3);
      } else if (heatIntensity > 0.4) {
        finalColor = mix(coolColor, hotColor, (heatIntensity - 0.4) / 0.3);
      } else {
        finalColor = coolColor * (0.5 + heatIntensity * 0.5);
      }
      
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      float lambertian = max(dot(vNormal, lightDir), 0.0);
      
      float dayNight = smoothstep(-0.3, 0.1, lambertian);
      
      vec3 diffuse = finalColor * (0.3 + lambertian * 0.7);
      
      vec3 emissive = finalColor * emissiveIntensity * (0.8 + temperaturePulse * 0.4);
      
      float emissiveFactor = mix(0.25, 1.0, dayNight);
      
      float emergenceBonus = abs(vEmergence) * 10.0;
      emissiveFactor = min(1.0, emissiveFactor + emergenceBonus * 0.2);
      
      vec3 result = diffuse + (emissive * emissiveFactor);
      
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      float alpha = heatIntensity * flowIntensity * (1.0 - distFromCenter * 0.3);
      
      gl_FragColor = vec4(result, alpha);
    }
  `;constructor(o,e={}){const n=e.seed||Math.floor(Math.random()*1e6),i=new N(n);this.startTime=e.startTime||n%1e4/1e3;const l=new r(16747520),s={h:0,s:0,l:0};l.getHSL(s),this.params={flowCount:e.flowCount||Math.floor(i.uniform(t.FLOW_COUNT.min,t.FLOW_COUNT.max)),flowLength:e.flowLength||i.uniform(t.FLOW_LENGTH.min,t.FLOW_LENGTH.max),flowWidth:e.flowWidth||i.uniform(t.FLOW_WIDTH.min,t.FLOW_WIDTH.max),flowIntensity:e.flowIntensity||i.uniform(t.FLOW_INTENSITY.min,t.FLOW_INTENSITY.max),flowSpeed:e.flowSpeed||i.uniform(t.FLOW_SPEED.min,t.FLOW_SPEED.max),pulseSpeed:e.pulseSpeed||i.uniform(t.PULSE_SPEED.min,t.PULSE_SPEED.max),turbulence:e.turbulence||i.uniform(t.TURBULENCE.min,t.TURBULENCE.max),coreColor:e.coreColor instanceof r?e.coreColor:new r().setHSL(s.h,1,.6),hotColor:e.hotColor instanceof r?e.hotColor:new r().setHSL(s.h+.05,.9,.5),coolColor:e.coolColor instanceof r?e.coolColor:new r().setHSL(s.h-.05,.8,.3),emissiveIntensity:e.emissiveIntensity||i.uniform(t.EMISSIVE_INTENSITY.min,t.EMISSIVE_INTENSITY.max),glowRadius:e.glowRadius||i.uniform(t.GLOW_RADIUS.min,t.GLOW_RADIUS.max),sparkleIntensity:e.sparkleIntensity||1,emergenceHeight:e.emergenceHeight||i.uniform(t.EMERGENCE_HEIGHT.min,t.EMERGENCE_HEIGHT.max),seed:n,startTime:this.startTime,timeSpeed:e.timeSpeed||i.uniform(t.TIME_SPEED.min,t.TIME_SPEED.max)},this.lavaGroup=new W,this.material=this.createMaterial(),this.generateLavaFlows(o,i)}generateLavaFlows(o,e){const n=this.params.flowCount;for(let i=0;i<n;i++){const l=e.uniform(0,2*Math.PI),s=e.uniform(-1,1),g=Math.acos(s),E=new a(Math.sin(g)*Math.cos(l),Math.sin(g)*Math.sin(l),Math.cos(g)),x=this.params.flowLength*e.uniform(.7,1.3),T=this.params.flowWidth*e.uniform(.8,1.2),P=Math.max(16,Math.floor(x*32)),m=new b(x*o*2,T*o*2,P,8),c=E.clone().normalize(),u=new a,S=new a;Math.abs(c.y)<.99?u.crossVectors(c,new a(0,1,0)).normalize():u.crossVectors(c,new a(1,0,0)).normalize(),S.crossVectors(c,u).normalize();const y=new D;y.makeBasis(u,S,c),m.applyMatrix4(y);const v=m.attributes.position,I=new a,f=E.clone().multiplyScalar(o);for(let h=0;h<v.count;h++){I.fromBufferAttribute(v,h);const M=I.clone().add(f).clone().normalize(),F=e.uniform(-.002,.008)*o,p=M.multiplyScalar(o+F).sub(f);v.setXYZ(h,p.x,p.y,p.z)}v.needsUpdate=!0,m.computeVertexNormals(),m.translate(f.x,f.y,f.z);const L=this.material.clone(),w=new _(m,L);w.renderOrder=3,this.lavaFlows.push(w),this.lavaGroup.add(w)}}createMaterial(){return new U({vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,uniforms:{time:{value:0},flowSpeed:{value:this.params.flowSpeed},pulseSpeed:{value:this.params.pulseSpeed},turbulence:{value:this.params.turbulence},flowIntensity:{value:this.params.flowIntensity},emergenceHeight:{value:this.params.emergenceHeight},coreColor:{value:this.params.coreColor},hotColor:{value:this.params.hotColor},coolColor:{value:this.params.coolColor},emissiveIntensity:{value:this.params.emissiveIntensity},glowRadius:{value:this.params.glowRadius},lightDirection:{value:new a(1,1,1).normalize()},lightPosition:{value:new a(0,0,0)}},transparent:!0,blending:O,depthWrite:!1,side:G})}addToScene(o,e){e&&this.lavaGroup.position.copy(e),o.add(this.lavaGroup)}update(o){const n=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.lavaFlows.forEach(i=>{const l=i.material;l.uniforms.time.value=n})}updateLightPosition(o){this.lavaFlows.forEach(e=>{const n=e.material;n.uniforms.lightPosition&&n.uniforms.lightPosition.value.copy(o)})}updateLightDirection(o){this.lavaFlows.forEach(e=>{const n=e.material;n.uniforms.lightDirection&&n.uniforms.lightDirection.value.copy(o)})}updateFromThreeLight(o){this.updateLightPosition(o.position);const e=o.target.position.clone().sub(o.position).normalize();this.updateLightDirection(e)}getObject3D(){return this.lavaGroup}dispose(){this.lavaFlows.forEach(o=>{o.geometry.dispose(),o.material instanceof H&&o.material.dispose()}),this.lavaFlows=[],this.lavaGroup.clear()}}function B(C,o,e){const i={flowCount:28,flowLength:.8,flowWidth:.04,flowIntensity:2.5,flowSpeed:.15,turbulence:1.5,emergenceHeight:.02,emissiveIntensity:4,seed:(e||Math.floor(Math.random()*1e6))+7e3};return new d(C,i)}export{d as L,B as c};
