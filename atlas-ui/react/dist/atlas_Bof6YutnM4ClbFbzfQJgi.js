import{b as Z,C as u,S as z,c as k,A as B,M as Y,B as G,P as j,a as C,G as q,d as X,V as f,e as $,f as R,F as H,N as J}from"./atlas_DfFO9DeAqJfHmKzNHJUiw.js";import{S}from"./atlas_C0O52P_24VXpcB_jxaut3.js";class D{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(t,e={}){this.params={type:e.type||"Thin",color:e.color||[.7,.7,.7,.2],width:e.width||12,opacity:e.opacity||.2,density:e.density||1};const o=t*(1+this.params.width/100);this.geometry=new Z(o,32,32);const i=new u(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new z({vertexShader:D.vertexShader,fragmentShader:D.fragmentShader,uniforms:{atmosphereColor:{value:i},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:B,side:k,depthWrite:!1}),this.mesh=new Y(this.geometry,this.material)}addToScene(t,e){e&&this.mesh.position.copy(e),t.add(this.mesh)}update(t){}updateParams(t){if(this.params={...this.params,...t},t.color){const e=new u(t.color[0],t.color[1],t.color[2]);this.material.uniforms.atmosphereColor.value=e}t.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=t.opacity),t.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*t.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function ee(T,t){let e=[.7,.7,.7,.15],o=12;if(t){if(t.color&&Array.isArray(t.color)){const s=t.color;e=[s[0],s[1],s[2],(s[3]||.15)*.7]}t.width&&(o=t.width)}const i={type:t?.type||"Thin",color:e,width:o,opacity:e[3],density:1};return new D(T,i)}const a={PARTICLE_COUNT:{min:25,max:150},SPEED:{min:.05,max:.5},SIZE:{min:.3,max:1.5},OPACITY:{min:.1,max:.3},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05},TIME_SPEED:{min:.1,max:3}};class N{particleSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
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
  `;constructor(t,e={}){const o=e.seed||Math.floor(Math.random()*1e6),i=new S(o);this.startTime=e.startTime||o%1e4/1e3,this.params={color:e.color||new u(16777215),particleCount:e.particleCount||Math.floor(i.uniform(a.PARTICLE_COUNT.min,a.PARTICLE_COUNT.max)),speed:e.speed||i.uniform(a.SPEED.min,a.SPEED.max),size:e.size||i.uniform(a.SIZE.min,a.SIZE.max),opacity:e.opacity||i.uniform(a.OPACITY.min,a.OPACITY.max),turbulence:e.turbulence||i.uniform(a.TURBULENCE.min,a.TURBULENCE.max),rotationSpeed:e.rotationSpeed||i.uniform(a.ROTATION_SPEED.min,a.ROTATION_SPEED.max),movementAmplitude:e.movementAmplitude||i.uniform(a.MOVEMENT_AMPLITUDE.min,a.MOVEMENT_AMPLITUDE.max),timeSpeed:e.timeSpeed||i.uniform(a.TIME_SPEED.min,a.TIME_SPEED.max),seed:o,startTime:this.startTime},this.particleCount=this.params.particleCount,this.geometry=new G,this.material=this.createMaterial(),this.generateParticles(t),this.particleSystem=new j(this.geometry,this.material)}generateParticles(t){const e=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount),d=new Float32Array(this.particleCount),c=this.params.color instanceof u?this.params.color:new u(this.params.color),h=this.params.seed||Math.floor(Math.random()*1e6),n=new S(h);for(let l=0;l<this.particleCount;l++){const v=n.spherePosition(t*n.uniform(1,1.1));e[l*3]=v.x,e[l*3+1]=v.y,e[l*3+2]=v.z;const p=n.colorVariation({r:c.r,g:c.g,b:c.b});o[l*3]=p.r,o[l*3+1]=p.g,o[l*3+2]=p.b,i[l]=this.params.size*n.uniform(.75,1.25),s[l]=this.params.speed*n.uniform(.6,1.4),d[l]=n.random()*Math.PI*2}this.geometry.setAttribute("position",new C(e,3)),this.geometry.setAttribute("customColor",new C(o,3)),this.geometry.setAttribute("size",new C(i,1)),this.geometry.setAttribute("speed",new C(s,1)),this.geometry.setAttribute("phase",new C(d,1))}createMaterial(){return new z({vertexShader:N.vertexShader,fragmentShader:N.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:B,depthWrite:!1})}addToScene(t,e){e&&this.particleSystem.position.copy(e),t.add(this.particleSystem)}update(t){const o=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=o,this.particleSystem.rotation.y=o*this.params.rotationSpeed}updateParams(t){this.params={...this.params,...t},t.turbulence!==void 0&&(this.material.uniforms.turbulence.value=t.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function te(T,t,e){const o=t.streaks||{},i=e||Math.floor(Math.random()*1e6),s=new S(i+3e3),d=o.count||Math.floor(s.uniform(a.PARTICLE_COUNT.min,a.PARTICLE_COUNT.max)),c=o.speed||s.uniform(a.SPEED.min,a.SPEED.max),h=s.uniform(a.SIZE.min,a.SIZE.max),n=s.uniform(a.OPACITY.min,a.OPACITY.max),l=s.uniform(a.TURBULENCE.min,a.TURBULENCE.max),v=s.uniform(a.ROTATION_SPEED.min,a.ROTATION_SPEED.max),p=s.uniform(a.MOVEMENT_AMPLITUDE.min,a.MOVEMENT_AMPLITUDE.max),A=s.uniform(a.TIME_SPEED.min,a.TIME_SPEED.max),E={color:o.color?new u().setRGB(o.color[0],o.color[1],o.color[2]):new u(16777215),particleCount:d,speed:c,size:h,opacity:n,turbulence:l,seed:i,rotationSpeed:v,movementAmplitude:p,timeSpeed:A};return new N(T,E)}const r={CLOUD_COUNT:{min:15,max:30},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.9},DENSITY:{min:.5,max:2},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},PUFFINESS:{min:1,max:1.4},TIME_SPEED:{min:.1,max:3}};class M{cloudSystem;material;params;cloudCount;clouds=[];startTime;static vertexShader=`
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
      
      // Movimiento sutil de las nubes
      vec3 pos = position;
      pos += sin(time * 0.1 + worldPosition.x * 0.01) * movementAmplitude * 0.1;
      pos += cos(time * 0.08 + worldPosition.z * 0.01) * movementAmplitude * 0.1;
      
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
      vec2 noiseUv1 = vUv * 4.0 + noiseOffset + time * 0.008;
      float noise1 = fbm(noiseUv1) * 0.7;
      
      vec2 noiseUv2 = vUv * 8.0 + noiseOffset * 1.3 + time * 0.005;
      float noise2 = fbm(noiseUv2) * 0.5;
      
      vec2 noiseUv3 = vUv * 16.0 + noiseOffset * 2.1 + time * 0.003;
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
  `;constructor(t,e={}){const o=e.seed||Math.floor(Math.random()*1e6),i=new S(o);this.startTime=e.startTime||o%1e4/1e3,this.params={color:e.color||new u(16777215),cloudCount:e.cloudCount||Math.floor(i.uniform(r.CLOUD_COUNT.min,r.CLOUD_COUNT.max)),size:e.size||i.uniform(r.SIZE.min,r.SIZE.max),opacity:e.opacity||i.uniform(r.OPACITY.min,r.OPACITY.max),density:e.density||i.uniform(r.DENSITY.min,r.DENSITY.max),rotationSpeed:e.rotationSpeed||i.uniform(r.ROTATION_SPEED.min,r.ROTATION_SPEED.max),movementAmplitude:e.movementAmplitude||i.uniform(r.MOVEMENT_AMPLITUDE.min,r.MOVEMENT_AMPLITUDE.max),puffiness:e.puffiness||i.uniform(r.PUFFINESS.min,r.PUFFINESS.max),timeSpeed:e.timeSpeed||i.uniform(r.TIME_SPEED.min,r.TIME_SPEED.max),seed:o,startTime:this.startTime},this.cloudCount=this.params.cloudCount,this.cloudSystem=new q,this.material=this.createMaterial(),this.generateClouds(t)}generateClouds(t){const e=this.params.color instanceof u?this.params.color:new u(this.params.color),o=this.params.seed||Math.floor(Math.random()*1e6),i=new S(o),s=this.params.cloudsFromPython;for(let d=0;d<this.cloudCount;d++){let c,h,n,l=e,v=this.params.size*i.uniform(.8,1.2);if(s&&d<s.length){const m=s[d];c=m.position[0]*t*1.05,h=m.position[1]*t*1.05,n=m.position[2]*t*1.05,m.color&&(l=new u().setRGB(m.color[0],m.color[1],m.color[2])),v=m.radius*t*.8}else{const m=i.uniform(0,2*Math.PI),V=i.uniform(-1,1),O=Math.acos(V),w=t*i.uniform(1.03,1.07);c=w*Math.sin(O)*Math.cos(m),h=w*Math.sin(O)*Math.sin(m),n=w*Math.cos(O)}const p=v*i.uniform(.3,.8),A=Math.max(8,Math.floor(p*15)),E=new X(p*2,p*2,A,A),b=new f(c,h,n);new f(0,0,0);const g=b.clone().normalize(),x=new f,L=new f;Math.abs(g.y)<.99?x.crossVectors(g,new f(0,1,0)).normalize():x.crossVectors(g,new f(1,0,0)).normalize(),L.crossVectors(g,x).normalize();const _=new $;_.makeBasis(x,L,g);const I=E.attributes.position,F=new f,W=Math.sqrt(c*c+h*h+n*n);E.applyMatrix4(_);for(let m=0;m<I.count;m++){F.fromBufferAttribute(I,m);const U=F.clone().add(b).clone().normalize().multiplyScalar(W).sub(b);I.setXYZ(m,U.x,U.y,U.z)}I.needsUpdate=!0,E.computeVertexNormals(),E.translate(c,h,n);const y=this.material.clone();y.uniforms.cloudColor.value=l,y.uniforms.density.value=this.params.density*i.uniform(.8,1.2),y.uniforms.noiseOffset.value=new R(i.uniform(0,100),i.uniform(0,100)),y.uniforms.shapeVariation.value=i.uniform(-1,1),y.uniforms.lightDirection.value=this.material.uniforms.lightDirection.value.clone(),y.uniforms.lightPosition.value=this.material.uniforms.lightPosition.value.clone();const P=new Y(E,y);P.renderOrder=2,P.userData.isAtmosphericCloud=!0,P.userData.planetNormal=g.clone(),this.clouds.push(P),this.cloudSystem.add(P)}}createMaterial(){return new z({vertexShader:M.vertexShader,fragmentShader:M.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},cloudColor:{value:new u(16777215)},density:{value:this.params.density},noiseOffset:{value:new R(0,0)},shapeVariation:{value:0},lightDirection:{value:new f(1,1,1).normalize()},lightPosition:{value:new f(0,0,0)}},transparent:!0,blending:J,depthWrite:!1,side:H})}addToScene(t,e){e&&this.cloudSystem.position.copy(e),t.add(this.cloudSystem)}update(t,e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.clouds.forEach(s=>{const d=s.material;d.uniforms.time.value=i}),this.cloudSystem.rotation.y=i*this.params.rotationSpeed}updateParams(t){this.params={...this.params,...t},this.clouds.forEach(e=>{const o=e.material;t.opacity!==void 0&&(o.uniforms.opacity.value=t.opacity),t.movementAmplitude!==void 0&&(o.uniforms.movementAmplitude.value=t.movementAmplitude)})}updateLightPosition(t){this.clouds.forEach(e=>{const o=e.material;o.uniforms.lightPosition&&o.uniforms.lightPosition.value.copy(t)})}updateLightDirection(t){this.clouds.forEach(e=>{const o=e.material;o.uniforms.lightDirection&&o.uniforms.lightDirection.value.copy(t)})}updateFromThreeLight(t){this.updateLightPosition(t.position);const e=t.target.position.clone().sub(t.position).normalize();this.updateLightDirection(e)}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function oe(T,t,e){const o=t.clouds||[];if(o.length===0){const c=e||Math.floor(Math.random()*1e6),h=new S(c+4e3),n={color:new u(1,1,1),cloudCount:15,size:.6,opacity:.7,density:.8,seed:c,rotationSpeed:.005,movementAmplitude:.02,puffiness:1.5,timeSpeed:h.uniform(r.TIME_SPEED.min,r.TIME_SPEED.max)};return new M(T,n)}const i=e||Math.floor(Math.random()*1e6),s=new S(i+4e3),d={color:new u(16777215),cloudCount:o.length,size:s.uniform(r.SIZE.min,r.SIZE.max),opacity:s.uniform(r.OPACITY.min,r.OPACITY.max),density:s.uniform(r.DENSITY.min,r.DENSITY.max),seed:i,rotationSpeed:s.uniform(r.ROTATION_SPEED.min,r.ROTATION_SPEED.max),movementAmplitude:s.uniform(r.MOVEMENT_AMPLITUDE.min,r.MOVEMENT_AMPLITUDE.max),puffiness:s.uniform(r.PUFFINESS.min,r.PUFFINESS.max),timeSpeed:s.uniform(r.TIME_SPEED.min,r.TIME_SPEED.max),cloudsFromPython:o};return new M(T,d)}export{N as A,oe as a,M as b,te as c,ee as d,D as e};
