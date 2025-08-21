import{S as F}from"./atlas_CMUvaCD4mo7XQYkYXSJfw.js";import{C as r,G as D,V as n,d as N,e as W,M as U,S as _,F as O,A as G,i as z}from"./atlas_Ce3hh0hgxYWauQ_qSK6cl.js";const t={FLOW_COUNT:{min:8,max:16},FLOW_LENGTH:{min:.3,max:.8},FLOW_WIDTH:{min:.02,max:.06},FLOW_INTENSITY:{min:1.2,max:2.5},FLOW_SPEED:{min:.1,max:.4},PULSE_SPEED:{min:.8,max:1.8},TURBULENCE:{min:.5,max:1.5},EMISSIVE_INTENSITY:{min:2,max:4},GLOW_RADIUS:{min:1.1,max:1.3},TIME_SPEED:{min:.1,max:2}};class h{lavaGroup;lavaFlows=[];material;params;startTime;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float flowSpeed;
    uniform float turbulence;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      // Posición del mundo para efectos de ruido
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Movimiento de lava con turbulencia
      vec3 pos = position;
      
      // Flujo principal a lo largo de la superficie
      float flowNoise = sin(time * flowSpeed + worldPosition.x * 2.0) * 0.1;
      flowNoise += cos(time * flowSpeed * 1.3 + worldPosition.z * 1.5) * 0.05;
      
      // Turbulencia adicional para movimiento orgánico
      float turbulentMotion = sin(time * turbulence + worldPosition.y * 3.0) * 0.02;
      turbulentMotion += cos(time * turbulence * 0.7 + length(worldPosition.xz) * 4.0) * 0.015;
      
      pos += normal * (flowNoise + turbulentMotion);
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static fragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
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
    
    // Función de ruido para textura de lava
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
      // UV animado para flujo de lava
      vec2 flowUv = vUv;
      flowUv.x += time * 0.1; // Flujo horizontal lento
      flowUv.y += time * 0.05; // Flujo vertical muy lento
      
      // Múltiples escalas de ruido para textura realista de lava
      float lavaTexture1 = fbm(flowUv * 8.0);
      float lavaTexture2 = fbm(flowUv * 16.0 + vec2(time * 0.1));
      float lavaTexture3 = fbm(flowUv * 32.0 + vec2(time * 0.2));
      
      // Combinar texturas para efecto de lava burbujeante
      float combinedTexture = lavaTexture1 * 0.5 + lavaTexture2 * 0.3 + lavaTexture3 * 0.2;
      
      // Pulsación de temperatura
      float temperaturePulse = sin(time * pulseSpeed) * 0.5 + 0.5;
      float heatIntensity = combinedTexture + temperaturePulse * 0.3;
      
      // Mapeo de color basado en temperatura
      vec3 finalColor;
      if (heatIntensity > 0.7) {
        // Núcleo súper caliente - color core (#FF8C00 - naranja intenso)
        finalColor = mix(hotColor, coreColor, (heatIntensity - 0.7) / 0.3);
      } else if (heatIntensity > 0.4) {
        // Lava caliente - transición de hot a core
        finalColor = mix(coolColor, hotColor, (heatIntensity - 0.4) / 0.3);
      } else {
        // Lava enfriándose - color más oscuro
        finalColor = coolColor * (0.5 + heatIntensity * 0.5);
      }
      
      // Efecto emisivo intenso para brillar en la oscuridad
      vec3 emissive = finalColor * emissiveIntensity * (0.8 + temperaturePulse * 0.4);
      
      // Iluminación básica
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      float lambertian = max(dot(vNormal, lightDir), 0.0);
      vec3 diffuse = finalColor * (0.3 + lambertian * 0.7);
      
      // Combinar difuso y emisivo
      vec3 result = diffuse + emissive;
      
      // Alpha basado en intensidad de calor y distancia del centro
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      float alpha = heatIntensity * flowIntensity * (1.0 - distFromCenter * 0.3);
      
      gl_FragColor = vec4(result, alpha);
    }
  `;constructor(o,e={}){const a=e.seed||Math.floor(Math.random()*1e6),i=new F(a);this.startTime=e.startTime||a%1e4/1e3;const l=new r(16747520),s={h:0,s:0,l:0};l.getHSL(s),this.params={flowCount:e.flowCount||Math.floor(i.uniform(t.FLOW_COUNT.min,t.FLOW_COUNT.max)),flowLength:e.flowLength||i.uniform(t.FLOW_LENGTH.min,t.FLOW_LENGTH.max),flowWidth:e.flowWidth||i.uniform(t.FLOW_WIDTH.min,t.FLOW_WIDTH.max),flowIntensity:e.flowIntensity||i.uniform(t.FLOW_INTENSITY.min,t.FLOW_INTENSITY.max),flowSpeed:e.flowSpeed||i.uniform(t.FLOW_SPEED.min,t.FLOW_SPEED.max),pulseSpeed:e.pulseSpeed||i.uniform(t.PULSE_SPEED.min,t.PULSE_SPEED.max),turbulence:e.turbulence||i.uniform(t.TURBULENCE.min,t.TURBULENCE.max),coreColor:e.coreColor instanceof r?e.coreColor:new r().setHSL(s.h,1,.6),hotColor:e.hotColor instanceof r?e.hotColor:new r().setHSL(s.h+.05,.9,.5),coolColor:e.coolColor instanceof r?e.coolColor:new r().setHSL(s.h-.05,.8,.3),emissiveIntensity:e.emissiveIntensity||i.uniform(t.EMISSIVE_INTENSITY.min,t.EMISSIVE_INTENSITY.max),glowRadius:e.glowRadius||i.uniform(t.GLOW_RADIUS.min,t.GLOW_RADIUS.max),sparkleIntensity:e.sparkleIntensity||1,seed:a,startTime:this.startTime,timeSpeed:e.timeSpeed||i.uniform(t.TIME_SPEED.min,t.TIME_SPEED.max)},this.lavaGroup=new D,this.material=this.createMaterial(),this.generateLavaFlows(o,i)}generateLavaFlows(o,e){const a=this.params.flowCount;for(let i=0;i<a;i++){const l=e.uniform(0,2*Math.PI),s=e.uniform(-1,1),p=Math.acos(s),S=new n(Math.sin(p)*Math.cos(l),Math.sin(p)*Math.sin(l),Math.cos(p)),g=this.params.flowLength*e.uniform(.7,1.3),T=this.params.flowWidth*e.uniform(.8,1.2),L=Math.max(16,Math.floor(g*32)),m=new N(g*o*2,T*o*2,L,8),c=S.clone().normalize(),f=new n,y=new n;Math.abs(c.y)<.99?f.crossVectors(c,new n(0,1,0)).normalize():f.crossVectors(c,new n(1,0,0)).normalize(),y.crossVectors(c,f).normalize();const I=new W;I.makeBasis(f,y,c),m.applyMatrix4(I);const v=m.attributes.position,C=new n,u=S.clone().multiplyScalar(o);for(let d=0;d<v.count;d++){C.fromBufferAttribute(v,d);const M=C.clone().add(u).clone().normalize(),b=o*.005,x=M.multiplyScalar(o+b).sub(u);v.setXYZ(d,x.x,x.y,x.z)}v.needsUpdate=!0,m.computeVertexNormals(),m.translate(u.x,u.y,u.z);const P=this.material.clone(),w=new U(m,P);w.renderOrder=3,this.lavaFlows.push(w),this.lavaGroup.add(w)}}createMaterial(){return new _({vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,uniforms:{time:{value:0},flowSpeed:{value:this.params.flowSpeed},pulseSpeed:{value:this.params.pulseSpeed},turbulence:{value:this.params.turbulence},flowIntensity:{value:this.params.flowIntensity},coreColor:{value:this.params.coreColor},hotColor:{value:this.params.hotColor},coolColor:{value:this.params.coolColor},emissiveIntensity:{value:this.params.emissiveIntensity},glowRadius:{value:this.params.glowRadius},lightDirection:{value:new n(1,1,1).normalize()},lightPosition:{value:new n(0,0,0)}},transparent:!0,blending:G,depthWrite:!1,side:O})}addToScene(o,e){e&&this.lavaGroup.position.copy(e),o.add(this.lavaGroup)}update(o){const a=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.lavaFlows.forEach(i=>{const l=i.material;l.uniforms.time.value=a})}updateLightPosition(o){this.lavaFlows.forEach(e=>{const a=e.material;a.uniforms.lightPosition&&a.uniforms.lightPosition.value.copy(o)})}updateLightDirection(o){this.lavaFlows.forEach(e=>{const a=e.material;a.uniforms.lightDirection&&a.uniforms.lightDirection.value.copy(o)})}updateFromThreeLight(o){this.updateLightPosition(o.position);const e=o.target.position.clone().sub(o.position).normalize();this.updateLightDirection(e)}getObject3D(){return this.lavaGroup}dispose(){this.lavaFlows.forEach(o=>{o.geometry.dispose(),o.material instanceof z&&o.material.dispose()}),this.lavaFlows=[],this.lavaGroup.clear()}}function A(E,o,e){const i={flowCount:12,flowIntensity:2,emissiveIntensity:3,seed:(e||Math.floor(Math.random()*1e6))+7e3};return new h(E,i)}export{h as L,A as c};
