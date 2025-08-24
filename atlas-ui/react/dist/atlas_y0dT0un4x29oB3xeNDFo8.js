import{b as Z,C as d,S as _,c as j,A as Y,M as W,B as k,P as q,a as M,G as X,d as $,V as h,e as H,f as B,F as J,N as K}from"./atlas_BjkcO1_mNssSqp05cLhjd.js";import{S as y}from"./atlas_C7ZhNUnMOt3kEE8jtIwhb.js";class b{mesh;material;geometry;params;static vertexShader=`
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    uniform vec3 atmosphereColor;
    uniform float atmosphereOpacity;
    uniform float fresnelPower;
    
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      
      float fresnel = pow(1.0 - abs(dot(normal, viewDir)), fresnelPower);
      
      
      vec3 color = atmosphereColor;
      
      
      float alpha = fresnel * atmosphereOpacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(o,e={}){this.params={type:e.type||"Thin",color:e.color||[.7,.7,.7,.2],width:e.width||12,opacity:e.opacity||.2,density:e.density||1};const t=o*(1+this.params.width/100);this.geometry=new Z(t,32,32);const i=new d(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new _({vertexShader:b.vertexShader,fragmentShader:b.fragmentShader,uniforms:{atmosphereColor:{value:i},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Y,side:j,depthWrite:!1}),this.mesh=new W(this.geometry,this.material)}addToScene(o,e){e&&this.mesh.position.copy(e),o.add(this.mesh)}update(o){}updateParams(o){if(this.params={...this.params,...o},o.color){const e=new d(o.color[0],o.color[1],o.color[2]);this.material.uniforms.atmosphereColor.value=e}o.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=o.opacity),o.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*o.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function oe(S,o){let e=[.7,.7,.7,.15],t=12;if(o){if(o.color&&Array.isArray(o.color)){const a=o.color;e=[a[0],a[1],a[2],(a[3]||.15)*.7]}o.width&&(t=o.width)}const i={type:o?.type||"Thin",color:e,width:t,opacity:e[3],density:1};return new b(S,i)}const r={PARTICLE_COUNT:{min:25,max:150},SPEED:{min:.05,max:.5},SIZE:{min:.3,max:1.5},OPACITY:{min:.1,max:.3},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05},TIME_SPEED:{min:.1,max:3}};class D{particleSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
    attribute float size;
    attribute vec3 customColor;
    attribute float speed;
    attribute float phase;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    
    uniform float time;
    uniform float turbulence;
    uniform float movementAmplitude;
    
    void main() {
      vColor = customColor;
      vSize = size;
      
      // Movimiento de las partículas con turbulencia
      vec3 pos = position;
      float timeWithPhase = time * speed + phase;
      
      pos.x += sin(timeWithPhase) * movementAmplitude * turbulence;
      pos.y += cos(timeWithPhase * 0.7) * (movementAmplitude * 0.5) * turbulence;
      pos.z += sin(timeWithPhase * 0.5) * (movementAmplitude * 0.8) * turbulence;
      
      // Fade basado en la posición y tiempo
      float distanceFromCenter = length(pos.xy) / 2.0;
      vAlpha = (1.0 - distanceFromCenter) * (0.5 + 0.5 * sin(timeWithPhase * 2.0));
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    
    void main() {
      // Crear forma de estela alargada
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      // Estela con forma más dinámica
      float streak = 1.0 - smoothstep(0.0, 0.5, dist);
      float elongation = 1.0 - smoothstep(0.0, 0.3, abs(uv.x));
      streak *= elongation;
      
      // Añadir variación basada en el tamaño
      float sizeVariation = vSize > 1.5 ? 1.2 : 0.8;
      streak *= sizeVariation;
      
      gl_FragColor = vec4(vColor, streak * vAlpha);
    }
  `;constructor(o,e={}){const t=e.seed||Math.floor(Math.random()*1e6),i=new y(t);this.startTime=e.startTime||t%1e4/1e3,this.params={color:e.color||new d(16777215),particleCount:e.particleCount||Math.floor(i.uniform(r.PARTICLE_COUNT.min,r.PARTICLE_COUNT.max)),speed:e.speed||i.uniform(r.SPEED.min,r.SPEED.max),size:e.size||i.uniform(r.SIZE.min,r.SIZE.max),opacity:e.opacity||i.uniform(r.OPACITY.min,r.OPACITY.max),turbulence:e.turbulence||i.uniform(r.TURBULENCE.min,r.TURBULENCE.max),rotationSpeed:e.rotationSpeed||i.uniform(r.ROTATION_SPEED.min,r.ROTATION_SPEED.max),movementAmplitude:e.movementAmplitude||i.uniform(r.MOVEMENT_AMPLITUDE.min,r.MOVEMENT_AMPLITUDE.max),timeSpeed:e.timeSpeed||i.uniform(r.TIME_SPEED.min,r.TIME_SPEED.max),seed:t,startTime:this.startTime},this.particleCount=this.params.particleCount,this.geometry=new k,this.material=this.createMaterial(),this.generateParticles(o),this.particleSystem=new q(this.geometry,this.material)}generateParticles(o){const e=new Float32Array(this.particleCount*3),t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),p=new Float32Array(this.particleCount),c=this.params.color instanceof d?this.params.color:new d(this.params.color),u=this.params.seed||Math.floor(Math.random()*1e6),m=new y(u);for(let n=0;n<this.particleCount;n++){const f=m.spherePosition(o*m.uniform(1,1.1));e[n*3]=f.x,e[n*3+1]=f.y,e[n*3+2]=f.z;const v=m.colorVariation({r:c.r,g:c.g,b:c.b});t[n*3]=v.r,t[n*3+1]=v.g,t[n*3+2]=v.b,i[n]=this.params.size*m.uniform(.75,1.25),a[n]=this.params.speed*m.uniform(.6,1.4),p[n]=m.random()*Math.PI*2}this.geometry.setAttribute("position",new M(e,3)),this.geometry.setAttribute("customColor",new M(t,3)),this.geometry.setAttribute("size",new M(i,1)),this.geometry.setAttribute("speed",new M(a,1)),this.geometry.setAttribute("phase",new M(p,1))}createMaterial(){return new _({vertexShader:D.vertexShader,fragmentShader:D.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:Y,depthWrite:!1})}addToScene(o,e){e&&this.particleSystem.position.copy(e),o.add(this.particleSystem)}update(o){const t=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=t,this.particleSystem.rotation.y=t*this.params.rotationSpeed}updateParams(o){this.params={...this.params,...o},o.turbulence!==void 0&&(this.material.uniforms.turbulence.value=o.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function te(S,o,e){const t=o.streaks||{},i=e||Math.floor(Math.random()*1e6),a=new y(i+3e3),p=t.count||Math.floor(a.uniform(r.PARTICLE_COUNT.min,r.PARTICLE_COUNT.max)),c=t.speed||a.uniform(r.SPEED.min,r.SPEED.max),u=a.uniform(r.SIZE.min,r.SIZE.max),m=a.uniform(r.OPACITY.min,r.OPACITY.max),n=a.uniform(r.TURBULENCE.min,r.TURBULENCE.max),f=a.uniform(r.ROTATION_SPEED.min,r.ROTATION_SPEED.max),v=a.uniform(r.MOVEMENT_AMPLITUDE.min,r.MOVEMENT_AMPLITUDE.max),T=a.uniform(r.TIME_SPEED.min,r.TIME_SPEED.max),x={color:t.color?new d().setRGB(t.color[0],t.color[1],t.color[2]):new d(16777215),particleCount:p,speed:c,size:u,opacity:m,turbulence:n,seed:i,rotationSpeed:f,movementAmplitude:v,timeSpeed:T};return new D(S,x)}const s={CLOUD_COUNT:{min:15,max:30},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.9},DENSITY:{min:.5,max:2},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},PUFFINESS:{min:1,max:1.4},TIME_SPEED:{min:.1,max:3}};class A{cloudSystem;material;params;cloudCount;clouds=[];cosmicOriginTime;cosmicOffset;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float movementAmplitude;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      // Posición del mundo para efectos de ruido
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Movimiento sutil de las nubes con frecuencias bajas para evitar problemas con valores grandes
      vec3 pos = position;
      // Usar frecuencias muy bajas para que funcionen bien con valores grandes de tiempo
      float slowTime = time * 0.01; // Reducir la velocidad del tiempo para el movimiento
      pos += sin(slowTime + worldPosition.x * 0.01) * movementAmplitude * 0.1;
      pos += cos(slowTime * 0.8 + worldPosition.z * 0.01) * movementAmplitude * 0.1;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static fragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float opacity;
    uniform vec3 cloudColor;
    uniform float density;
    uniform vec2 noiseOffset;
    uniform float shapeVariation;
    uniform vec3 lightDirection; // Del sistema PlanetLayerSystem
    uniform vec3 lightPosition; // Del sistema PlanetLayerSystem
    
    // Función de ruido Perlin simplificada para nubes
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
      float frequency = 0.0;
      
      for (int i = 0; i < 4; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      // TÉCNICA BILLBOARD VOLUMÉTRICA CON SOFT PARTICLES
      
      // Distancia radial del centro para forma circular suave
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      
      // Máscara circular con bordes súper suaves (soft particles)
      float circularMask = 1.0 - smoothstep(0.1, 0.5, distFromCenter);
      
      // Ruido volumétrico para textura de nube realista
      // Usar velocidades de animación muy lentas para evitar saltos con valores grandes
      float animSpeed1 = time * 0.002; // Muy lento para valores grandes
      float animSpeed2 = time * 0.001;
      float animSpeed3 = time * 0.0005;
      
      vec2 noiseUv1 = vUv * 4.0 + noiseOffset + vec2(animSpeed1, animSpeed1 * 0.7);
      float noise1 = fbm(noiseUv1) * 0.7;
      
      vec2 noiseUv2 = vUv * 8.0 + noiseOffset * 1.3 + vec2(animSpeed2, animSpeed2 * 0.8);
      float noise2 = fbm(noiseUv2) * 0.5;
      
      vec2 noiseUv3 = vUv * 16.0 + noiseOffset * 2.1 + vec2(animSpeed3, animSpeed3 * 0.9);
      float noise3 = fbm(noiseUv3) * 0.3;
      
      // Combinar múltiples octavas de ruido
      float cloudNoise = noise1 + noise2 + noise3;
      cloudNoise = smoothstep(0.2, 1.0, cloudNoise);
      
      // Aplicar máscara circular para bordes suaves
      float baseCloud = cloudNoise * circularMask * density;
      
      // Función de densidad que baja en los bordes (soft particles)
      float densityFalloff = pow(circularMask, 1.5);
      
      // Aplicar técnica de soft particles para bordes suaves
      float finalCloud = baseCloud * densityFalloff;
      
      // Gamma correction para mayor suavidad
      finalCloud = pow(finalCloud, 0.8);
      
      // Color de nube realista con variaciones naturales
      vec3 finalColor = cloudColor;
      
      // Variación de color como nubes reales (centro más blanco, bordes más grises)
      float colorVariation = 1.0 - distFromCenter * 0.3;
      finalColor *= colorVariation;
      
      // Sombreado súper sutil y realista
      float lightIntensity = dot(vNormal, normalize(vec3(0.8, 1.0, 0.6))) * 0.15 + 0.85;
      finalColor *= lightIntensity;
      
      // Transparencia con falloff natural como nubes reales
      float alpha = finalCloud * opacity;
      alpha *= (1.0 - distFromCenter * 0.5); // Más transparente en los bordes
      
      // USAR LA LUZ REAL DEL SISTEMA PERO CON NORMAL PLANETARIA
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
      }
      
      // CRÍTICO: Usar la normal planetaria, NO la normal de la superficie de la nube
      // Para determinar qué lado del PLANETA está iluminado
      vec3 planetNormal = normalize(vWorldPosition); // Normal desde centro del planeta
      float dotNL = dot(planetNormal, lightDir);
      
      // Transición suave de opacidad (de 1.0 a 0.3)
      float lightFactor = smoothstep(-0.2, 0.2, dotNL);
      alpha *= mix(0.3, 1.0, lightFactor);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(o,e={}){const t=e.seed||Math.floor(Math.random()*1e6),i=new y(t),a=51408e4;this.cosmicOriginTime=e.cosmicOriginTime||a,this.cosmicOffset=t%3600*10,this.params={color:e.color||new d(16777215),cloudCount:e.cloudCount||Math.floor(i.uniform(s.CLOUD_COUNT.min,s.CLOUD_COUNT.max)),size:e.size||i.uniform(s.SIZE.min,s.SIZE.max),opacity:e.opacity||i.uniform(s.OPACITY.min,s.OPACITY.max),density:e.density||i.uniform(s.DENSITY.min,s.DENSITY.max),rotationSpeed:e.rotationSpeed||i.uniform(s.ROTATION_SPEED.min,s.ROTATION_SPEED.max),movementAmplitude:e.movementAmplitude||i.uniform(s.MOVEMENT_AMPLITUDE.min,s.MOVEMENT_AMPLITUDE.max),puffiness:e.puffiness||i.uniform(s.PUFFINESS.min,s.PUFFINESS.max),timeSpeed:e.timeSpeed||i.uniform(s.TIME_SPEED.min,s.TIME_SPEED.max),seed:t,cosmicOriginTime:this.cosmicOriginTime},this.cloudCount=this.params.cloudCount,this.cloudSystem=new X,this.material=this.createMaterial(),this.generateClouds(o)}generateClouds(o){const e=this.params.color instanceof d?this.params.color:new d(this.params.color),t=this.params.seed||Math.floor(Math.random()*1e6),i=new y(t),a=this.cosmicOriginTime+this.cosmicOffset,p=this.params.cloudsFromPython;for(let c=0;c<this.cloudCount;c++){let u,m,n,f=e,v=this.params.size*i.uniform(.8,1.2);if(p&&c<p.length){const l=p[c];u=l.position[0]*o*1.05,m=l.position[1]*o*1.05,n=l.position[2]*o*1.05,l.color&&(f=new d().setRGB(l.color[0],l.color[1],l.color[2])),v=l.radius*o*.8}else{const l=i.uniform(0,2*Math.PI),V=i.uniform(-1,1),w=Math.acos(V),N=o*i.uniform(1.03,1.07);u=N*Math.sin(w)*Math.cos(l),m=N*Math.sin(w)*Math.sin(l),n=N*Math.cos(w)}const T=v*i.uniform(.3,.8),x=Math.max(8,Math.floor(T*15)),P=new $(T*2,T*2,x,x),U=new h(u,m,n);new h(0,0,0);const g=U.clone().normalize(),O=new h,L=new h;Math.abs(g.y)<.99?O.crossVectors(g,new h(0,1,0)).normalize():O.crossVectors(g,new h(1,0,0)).normalize(),L.crossVectors(g,O).normalize();const F=new H;F.makeBasis(O,L,g);const I=P.attributes.position,R=new h,G=Math.sqrt(u*u+m*m+n*n);P.applyMatrix4(F);for(let l=0;l<I.count;l++){R.fromBufferAttribute(I,l);const z=R.clone().add(U).clone().normalize().multiplyScalar(G).sub(U);I.setXYZ(l,z.x,z.y,z.z)}I.needsUpdate=!0,P.computeVertexNormals(),P.translate(u,m,n);const E=this.material.clone();E.uniforms.cloudColor.value=f,E.uniforms.density.value=this.params.density*i.uniform(.8,1.2),E.uniforms.noiseOffset.value=new B((a+i.uniform(0,100))%100,(a+i.uniform(0,100))%100),E.uniforms.shapeVariation.value=i.uniform(-1,1),E.uniforms.lightDirection.value=this.material.uniforms.lightDirection.value.clone(),E.uniforms.lightPosition.value=this.material.uniforms.lightPosition.value.clone();const C=new W(P,E);C.renderOrder=2,C.userData.isAtmosphericCloud=!0,C.userData.planetNormal=g.clone(),this.clouds.push(C),this.cloudSystem.add(C)}}createMaterial(){return new _({vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},cloudColor:{value:new d(16777215)},density:{value:this.params.density},noiseOffset:{value:new B(0,0)},shapeVariation:{value:0},lightDirection:{value:new h(1,1,1).normalize()},lightPosition:{value:new h(0,0,0)}},transparent:!0,blending:K,depthWrite:!1,side:J})}addToScene(o,e){e&&this.cloudSystem.position.copy(e),o.add(this.cloudSystem)}update(o,e){const a=(Date.now()/1e3-this.cosmicOriginTime+this.cosmicOffset)*this.params.timeSpeed,p=a%1e4;this.clouds.forEach(c=>{const u=c.material;u.uniforms.time.value=p}),this.cloudSystem.rotation.y=a*this.params.rotationSpeed}updateParams(o){this.params={...this.params,...o},this.clouds.forEach(e=>{const t=e.material;o.opacity!==void 0&&(t.uniforms.opacity.value=o.opacity),o.movementAmplitude!==void 0&&(t.uniforms.movementAmplitude.value=o.movementAmplitude)})}updateLightPosition(o){this.clouds.forEach(e=>{const t=e.material;t.uniforms.lightPosition&&t.uniforms.lightPosition.value.copy(o)})}updateLightDirection(o){this.clouds.forEach(e=>{const t=e.material;t.uniforms.lightDirection&&t.uniforms.lightDirection.value.copy(o)})}updateFromThreeLight(o){this.updateLightPosition(o.position);const e=o.target.position.clone().sub(o.position).normalize();this.updateLightDirection(e)}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(o=>{o.geometry.dispose(),o.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function ie(S,o,e){const t=o.clouds||[];if(t.length===0){const c=e||Math.floor(Math.random()*1e6),u=new y(c+4e3),m={color:new d(1,1,1),cloudCount:15,size:.6,opacity:.7,density:.8,seed:c,rotationSpeed:.005,movementAmplitude:.02,puffiness:1.5,timeSpeed:u.uniform(s.TIME_SPEED.min,s.TIME_SPEED.max)};return new A(S,m)}const i=e||Math.floor(Math.random()*1e6),a=new y(i+4e3),p={color:new d(16777215),cloudCount:t.length,size:a.uniform(s.SIZE.min,s.SIZE.max),opacity:a.uniform(s.OPACITY.min,s.OPACITY.max),density:a.uniform(s.DENSITY.min,s.DENSITY.max),seed:i,rotationSpeed:a.uniform(s.ROTATION_SPEED.min,s.ROTATION_SPEED.max),movementAmplitude:a.uniform(s.MOVEMENT_AMPLITUDE.min,s.MOVEMENT_AMPLITUDE.max),puffiness:a.uniform(s.PUFFINESS.min,s.PUFFINESS.max),timeSpeed:a.uniform(s.TIME_SPEED.min,s.TIME_SPEED.max),cloudsFromPython:t};return new A(S,p)}export{D as A,ie as a,A as b,te as c,oe as d,b as e};
