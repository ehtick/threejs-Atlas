import{S as F}from"./atlas_C7ZhNUnMOt3kEE8jtIwhb.js";import{C as n,G as N,V as r,d as W,e as U,M as D,S as _,F as G,A as O,i as H}from"./atlas_BjkcO1_mNssSqp05cLhjd.js";const t={FLOW_COUNT:{min:20,max:35},FLOW_LENGTH:{min:.4,max:1.2},FLOW_WIDTH:{min:.015,max:.08},FLOW_INTENSITY:{min:1.5,max:3},FLOW_SPEED:{min:.05,max:.3},PULSE_SPEED:{min:.5,max:1.2},TURBULENCE:{min:.8,max:2},EMISSIVE_INTENSITY:{min:3,max:5},GLOW_RADIUS:{min:1.1,max:1.3},TIME_SPEED:{min:.1,max:2},EMERGENCE_HEIGHT:{min:.01,max:.03}};class h{lavaGroup;lavaFlows=[];material;params;startTime;static vertexShader=`
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
      
      // Posición del mundo para efectos de ruido
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Movimiento de lava con turbulencia
      vec3 pos = position;
      
      // EMERGENCIA: El flujo sale y entra de la superficie basado en la posición UV
      // Usar UV.x como progreso a lo largo del flujo (0 = inicio, 1 = fin)
      float flowProgress = vUv.x;
      
      // Crear onda de emergencia que viaja a lo largo del flujo
      float emergenceWave = sin((flowProgress * 3.14159 * 2.0) - time * flowSpeed * 2.0);
      
      // Combinar con patrón secundario para más variación
      emergenceWave += sin((flowProgress * 6.28318) + time * flowSpeed) * 0.3;
      
      // Aplicar función smoothstep para transiciones suaves en los extremos
      float edgeFade = smoothstep(0.0, 0.1, flowProgress) * smoothstep(1.0, 0.9, flowProgress);
      emergenceWave *= edgeFade;
      
      // Altura de emergencia variable (algunos flujos emergen más que otros)
      float maxEmergence = emergenceHeight * (1.0 + sin(worldPosition.x * 10.0) * 0.5);
      
      // El flujo emerge y se sumerge periódicamente
      float emergence = emergenceWave * maxEmergence;
      vEmergence = emergence; // Pasar a fragment shader para efectos visuales
      
      // Flujo principal a lo largo de la superficie con emergencia
      float flowNoise = sin(time * flowSpeed + worldPosition.x * 2.0) * 0.05;
      flowNoise += cos(time * flowSpeed * 1.3 + worldPosition.z * 1.5) * 0.03;
      
      // Turbulencia adicional para movimiento orgánico
      float turbulentMotion = sin(time * turbulence + worldPosition.y * 3.0) * 0.02;
      turbulentMotion += cos(time * turbulence * 0.7 + length(worldPosition.xz) * 4.0) * 0.015;
      
      // Aplicar emergencia y movimiento lateral
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
      
      // Pulsación de temperatura + efecto de emergencia
      float temperaturePulse = sin(time * pulseSpeed) * 0.5 + 0.5;
      // Más caliente cuando emerge de la superficie
      float emergenceGlow = abs(vEmergence) * 5.0; // Brillo extra al emerger
      float heatIntensity = combinedTexture + temperaturePulse * 0.3 + emergenceGlow;
      
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
      
      // Iluminación básica primero para calcular dayNight
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      float lambertian = max(dot(vNormal, lightDir), 0.0);
      
      // Calcular factor día/noche similar al sistema principal
      float dayNight = smoothstep(-0.3, 0.1, lambertian);
      
      vec3 diffuse = finalColor * (0.3 + lambertian * 0.7);
      
      // Efecto emisivo intenso para brillar en la oscuridad
      // ENFOQUE HÍBRIDO: Los flujos de lava brillan más cuando emergen Y en el lado iluminado
      vec3 emissive = finalColor * emissiveIntensity * (0.8 + temperaturePulse * 0.4);
      
      // Factor de emisividad: 25% mínimo en oscuridad, 100% en luz
      // Los flujos son ligeramente más brillantes que la superficie base
      float emissiveFactor = mix(0.25, 1.0, dayNight);
      
      // Bonus de emergencia: cuando el flujo emerge, brilla más incluso en oscuridad
      float emergenceBonus = abs(vEmergence) * 10.0;
      emissiveFactor = min(1.0, emissiveFactor + emergenceBonus * 0.2); // Bonus reducido también
      
      // Combinar difuso y emisivo con factor híbrido
      vec3 result = diffuse + (emissive * emissiveFactor);
      
      // Alpha basado en intensidad de calor y distancia del centro
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      float alpha = heatIntensity * flowIntensity * (1.0 - distFromCenter * 0.3);
      
      gl_FragColor = vec4(result, alpha);
    }
  `;constructor(o,e={}){const a=e.seed||Math.floor(Math.random()*1e6),i=new F(a);this.startTime=e.startTime||a%1e4/1e3;const l=new n(16747520),s={h:0,s:0,l:0};l.getHSL(s),this.params={flowCount:e.flowCount||Math.floor(i.uniform(t.FLOW_COUNT.min,t.FLOW_COUNT.max)),flowLength:e.flowLength||i.uniform(t.FLOW_LENGTH.min,t.FLOW_LENGTH.max),flowWidth:e.flowWidth||i.uniform(t.FLOW_WIDTH.min,t.FLOW_WIDTH.max),flowIntensity:e.flowIntensity||i.uniform(t.FLOW_INTENSITY.min,t.FLOW_INTENSITY.max),flowSpeed:e.flowSpeed||i.uniform(t.FLOW_SPEED.min,t.FLOW_SPEED.max),pulseSpeed:e.pulseSpeed||i.uniform(t.PULSE_SPEED.min,t.PULSE_SPEED.max),turbulence:e.turbulence||i.uniform(t.TURBULENCE.min,t.TURBULENCE.max),coreColor:e.coreColor instanceof n?e.coreColor:new n().setHSL(s.h,1,.6),hotColor:e.hotColor instanceof n?e.hotColor:new n().setHSL(s.h+.05,.9,.5),coolColor:e.coolColor instanceof n?e.coolColor:new n().setHSL(s.h-.05,.8,.3),emissiveIntensity:e.emissiveIntensity||i.uniform(t.EMISSIVE_INTENSITY.min,t.EMISSIVE_INTENSITY.max),glowRadius:e.glowRadius||i.uniform(t.GLOW_RADIUS.min,t.GLOW_RADIUS.max),sparkleIntensity:e.sparkleIntensity||1,emergenceHeight:e.emergenceHeight||i.uniform(t.EMERGENCE_HEIGHT.min,t.EMERGENCE_HEIGHT.max),seed:a,startTime:this.startTime,timeSpeed:e.timeSpeed||i.uniform(t.TIME_SPEED.min,t.TIME_SPEED.max)},this.lavaGroup=new N,this.material=this.createMaterial(),this.generateLavaFlows(o,i)}generateLavaFlows(o,e){const a=this.params.flowCount;for(let i=0;i<a;i++){const l=e.uniform(0,2*Math.PI),s=e.uniform(-1,1),g=Math.acos(s),E=new r(Math.sin(g)*Math.cos(l),Math.sin(g)*Math.sin(l),Math.cos(g)),x=this.params.flowLength*e.uniform(.7,1.3),b=this.params.flowWidth*e.uniform(.8,1.2),T=Math.max(16,Math.floor(x*32)),m=new W(x*o*2,b*o*2,T,8),c=E.clone().normalize(),f=new r,S=new r;Math.abs(c.y)<.99?f.crossVectors(c,new r(0,1,0)).normalize():f.crossVectors(c,new r(1,0,0)).normalize(),S.crossVectors(c,f).normalize();const y=new U;y.makeBasis(f,S,c),m.applyMatrix4(y);const d=m.attributes.position,C=new r,u=E.clone().multiplyScalar(o);for(let v=0;v<d.count;v++){C.fromBufferAttribute(d,v);const L=C.clone().add(u).clone().normalize(),M=e.uniform(-.002,.008)*o,w=L.multiplyScalar(o+M).sub(u);d.setXYZ(v,w.x,w.y,w.z)}d.needsUpdate=!0,m.computeVertexNormals(),m.translate(u.x,u.y,u.z);const P=this.material.clone(),p=new D(m,P);p.renderOrder=3,this.lavaFlows.push(p),this.lavaGroup.add(p)}}createMaterial(){return new _({vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,uniforms:{time:{value:0},flowSpeed:{value:this.params.flowSpeed},pulseSpeed:{value:this.params.pulseSpeed},turbulence:{value:this.params.turbulence},flowIntensity:{value:this.params.flowIntensity},emergenceHeight:{value:this.params.emergenceHeight},coreColor:{value:this.params.coreColor},hotColor:{value:this.params.hotColor},coolColor:{value:this.params.coolColor},emissiveIntensity:{value:this.params.emissiveIntensity},glowRadius:{value:this.params.glowRadius},lightDirection:{value:new r(1,1,1).normalize()},lightPosition:{value:new r(0,0,0)}},transparent:!0,blending:O,depthWrite:!1,side:G})}addToScene(o,e){e&&this.lavaGroup.position.copy(e),o.add(this.lavaGroup)}update(o){const a=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.lavaFlows.forEach(i=>{const l=i.material;l.uniforms.time.value=a})}updateLightPosition(o){this.lavaFlows.forEach(e=>{const a=e.material;a.uniforms.lightPosition&&a.uniforms.lightPosition.value.copy(o)})}updateLightDirection(o){this.lavaFlows.forEach(e=>{const a=e.material;a.uniforms.lightDirection&&a.uniforms.lightDirection.value.copy(o)})}updateFromThreeLight(o){this.updateLightPosition(o.position);const e=o.target.position.clone().sub(o.position).normalize();this.updateLightDirection(e)}getObject3D(){return this.lavaGroup}dispose(){this.lavaFlows.forEach(o=>{o.geometry.dispose(),o.material instanceof H&&o.material.dispose()}),this.lavaFlows=[],this.lavaGroup.clear()}}function A(I,o,e){const i={flowCount:28,flowLength:.8,flowWidth:.04,flowIntensity:2.5,flowSpeed:.15,turbulence:1.5,emergenceHeight:.02,emissiveIntensity:4,seed:(e||Math.floor(Math.random()*1e6))+7e3};return new h(I,i)}export{h as L,A as c};
