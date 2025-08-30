import{S as b}from"./atlas_DhOreEVM1uBHzRPTt7uMw.js";import{G as z,d as _,V as u,e as L,f as A,M as V,S as R,F as Y,N as B}from"./atlas_CLp6T-BwF8hBVTNM0OiQd.js";const e={CLOUD_COUNT:{min:15,max:25},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.8},DENSITY:{min:.5,max:1.5},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},TURBULENCE:{min:1,max:2},TIME_SPEED:{min:.1,max:3}};class S{cloudSystem;material;params;cloudCount;clouds=[];cosmicOriginTime;cosmicOffset;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float movementAmplitude;
    uniform float turbulence;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Movimiento más dinámico para planetas gaseosos con turbulencia
      vec3 pos = position;
      float slowTime = time * 0.015; // Más rápido que atmosphere clouds
      
      // Múltiples capas de turbulencia para simular atmósferas gaseosas complejas
      pos += sin(slowTime + worldPosition.x * 0.02) * movementAmplitude * turbulence * 0.2;
      pos += cos(slowTime * 1.3 + worldPosition.z * 0.015) * movementAmplitude * turbulence * 0.15;
      pos += sin(slowTime * 0.7 + worldPosition.y * 0.018) * movementAmplitude * turbulence * 0.1;
      
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
    uniform float turbulence;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    
    // Función de ruido más complejo para atmósferas gaseosas
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
    
    // FBM más complejo para turbulencias gaseosas
    float fbm(vec2 st, int octaves) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for (int i = 0; i < 6; i++) {
        if (i >= octaves) break;
        value += amplitude * noise(st);
        st *= 2.0 + turbulence * 0.1; // Frecuencia variable según turbulencia
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      
      // Máscara circular más suave para nubes secundarias
      float circularMask = 1.0 - smoothstep(0.05, 0.6, distFromCenter);
      
      // Múltiples capas de ruido para simular turbulencias complejas
      float animSpeed1 = time * 0.003;
      float animSpeed2 = time * 0.0015;
      float animSpeed3 = time * 0.001;
      float animSpeed4 = time * 0.0008;
      
      // Capas de ruido con diferentes escalas y velocidades
      vec2 noiseUv1 = vUv * 3.0 + noiseOffset + vec2(animSpeed1, animSpeed1 * 0.8);
      float noise1 = fbm(noiseUv1, 4) * 0.8;
      
      vec2 noiseUv2 = vUv * 6.0 + noiseOffset * 1.5 + vec2(animSpeed2, animSpeed2 * 1.2);
      float noise2 = fbm(noiseUv2, 5) * 0.6;
      
      vec2 noiseUv3 = vUv * 12.0 + noiseOffset * 2.5 + vec2(animSpeed3, animSpeed3 * 0.9);
      float noise3 = fbm(noiseUv3, 3) * 0.4;
      
      // Capa adicional de micro-turbulencia
      vec2 noiseUv4 = vUv * 24.0 + noiseOffset * 3.5 + vec2(animSpeed4, animSpeed4 * 1.5);
      float noise4 = fbm(noiseUv4, 2) * 0.3;
      
      // Combinar ruidos con pesos variables según turbulencia
      float cloudNoise = noise1 + noise2 * turbulence * 0.5 + noise3 * turbulence * 0.3 + noise4 * turbulence * 0.2;
      cloudNoise = smoothstep(0.15, 1.2, cloudNoise);
      
      // Aplicar máscara y densidad
      float baseCloud = cloudNoise * circularMask * density;
      
      // Falloff más pronunciado para nubes secundarias
      float densityFalloff = pow(circularMask, 2.0);
      float finalCloud = baseCloud * densityFalloff;
      
      // Gamma correction adaptada para nubes gaseosas
      finalCloud = pow(finalCloud, 0.9);
      
      // Color ligeramente más oscuro que el planeta base
      vec3 finalColor = cloudColor * 0.85; // 15% más oscuro para mejor visibilidad
      
      // Variación de color más dramática para atmósferas gaseosas
      float colorVariation = 1.0 - distFromCenter * 0.5;
      finalColor *= colorVariation;
      
      // Sombreado más contrastado para definir estructuras gaseosas
      float lightIntensity = dot(vNormal, normalize(vec3(0.7, 1.0, 0.5))) * 0.25 + 0.75;
      finalColor *= lightIntensity;
      
      // Transparencia con mayor falloff en los bordes
      float alpha = finalCloud * opacity;
      alpha *= (1.0 - pow(distFromCenter, 1.5) * 0.7);
      
      // Sistema de iluminación igual que atmosphere clouds
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      vec3 planetNormal = normalize(vWorldPosition);
      float dotNL = dot(planetNormal, lightDir);
      
      // Transición más dramática para nubes secundarias
      float lightFactor = smoothstep(-0.3, 0.3, dotNL);
      alpha *= mix(0.2, 1.0, lightFactor); // Mayor contraste día/noche
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(o,i){const t=i.seed||Math.floor(Math.random()*1e6),s=new b(t+5e3);this.cosmicOriginTime=i.cosmicOriginTime||51408e4,this.cosmicOffset=t%3600*15,this.params={baseColor:i.baseColor,cloudCount:i.cloudCount||Math.floor(s.uniform(e.CLOUD_COUNT.min,e.CLOUD_COUNT.max)),size:i.size||s.uniform(e.SIZE.min,e.SIZE.max),opacity:i.opacity||s.uniform(e.OPACITY.min,e.OPACITY.max),density:i.density||s.uniform(e.DENSITY.min,e.DENSITY.max),rotationSpeed:i.rotationSpeed||s.uniform(e.ROTATION_SPEED.min,e.ROTATION_SPEED.max),movementAmplitude:i.movementAmplitude||s.uniform(e.MOVEMENT_AMPLITUDE.min,e.MOVEMENT_AMPLITUDE.max),turbulence:i.turbulence||s.uniform(e.TURBULENCE.min,e.TURBULENCE.max),timeSpeed:i.timeSpeed||s.uniform(e.TIME_SPEED.min,e.TIME_SPEED.max),seed:t,cosmicOriginTime:this.cosmicOriginTime,cloudsFromPython:i.cloudsFromPython},this.cloudCount=this.params.cloudCount,this.cloudSystem=new z,this.material=this.createMaterial(),this.generateClouds(o)}generateClouds(o){const i=this.params.seed||Math.floor(Math.random()*1e6),t=new b(i+5e3),s=this.cosmicOriginTime+this.cosmicOffset,c=this.params.cloudsFromPython;for(let m=0;m<this.cloudCount;m++){let a,r,l,C=this.params.baseColor.clone().multiplyScalar(.85),d=this.params.size*t.uniform(.8,1.2);if(c&&m<c.length){const n=c[m];if(!n.position||n.position.length!==3){console.warn("Invalid cloud data:",n);continue}if(a=n.position[0]*o*1.05,r=n.position[1]*o*1.05,l=n.position[2]*o*1.05,!isFinite(a)||!isFinite(r)||!isFinite(l)){console.warn("Invalid position calculated:",{x:a,y:r,z:l},"from data:",n.position);continue}d=n.radius*o*.8}else{const n=t.uniform(0,2*Math.PI),U=t.uniform(-1,1),M=Math.acos(U),T=o*1.05;if(a=T*Math.sin(M)*Math.cos(n),r=T*Math.sin(M)*Math.sin(n),l=T*Math.cos(M),!isFinite(a)||!isFinite(r)||!isFinite(l)){console.warn("Invalid procedural position:",{x:a,y:r,z:l});continue}}(!isFinite(d)||d<=0)&&(console.warn("Invalid cloudSize:",d,"using fallback"),d=1);const p=d*t.uniform(.3,.8);if(!isFinite(p)||p<=0){console.warn("Invalid baseRadius:",p);continue}const D=Math.max(8,Math.floor(p*15)),h=new _(p*24,p*24,D,D),x=new u(a,r,l);new u(0,0,0);const v=x.clone().normalize(),y=new u,N=new u;Math.abs(v.y)<.99?y.crossVectors(v,new u(0,1,0)).normalize():y.crossVectors(v,new u(1,0,0)).normalize(),N.crossVectors(v,y).normalize();const I=new L;I.makeBasis(y,N,v);const E=h.attributes.position,w=new u,F=Math.sqrt(a*a+r*r+l*l);h.applyMatrix4(I);for(let n=0;n<E.count;n++){w.fromBufferAttribute(E,n);const O=w.clone().add(x).clone().normalize().multiplyScalar(F).sub(x);E.setXYZ(n,O.x,O.y,O.z)}E.needsUpdate=!0,h.computeVertexNormals(),h.translate(a,r,l);const f=this.material.clone();f.uniforms.cloudColor.value=C,f.uniforms.density.value=this.params.density*t.uniform(.8,1.2),f.uniforms.turbulence.value=this.params.turbulence*t.uniform(.8,1.2),f.uniforms.noiseOffset.value=new A((s+t.uniform(0,100))%100,(s+t.uniform(0,100))%100),f.uniforms.lightDirection.value=this.material.uniforms.lightDirection.value.clone(),f.uniforms.lightPosition.value=this.material.uniforms.lightPosition.value.clone();const g=new V(h,f);g.renderOrder=3,g.userData.isSecondaryCloud=!0,g.userData.planetNormal=v.clone(),this.clouds.push(g),this.cloudSystem.add(g)}}createMaterial(){return new R({vertexShader:S.vertexShader,fragmentShader:S.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},turbulence:{value:this.params.turbulence},cloudColor:{value:this.params.baseColor.clone().multiplyScalar(.85)},density:{value:this.params.density},noiseOffset:{value:new A(0,0)},lightDirection:{value:new u(1,1,1).normalize()},lightPosition:{value:new u(0,0,0)}},transparent:!0,blending:B,depthWrite:!1,side:Y})}addToScene(o,i){i&&this.cloudSystem.position.copy(i),o.add(this.cloudSystem)}update(o,i){const c=(Date.now()/1e3-this.cosmicOriginTime+this.cosmicOffset)*this.params.timeSpeed,m=c%1e4;this.clouds.forEach(a=>{const r=a.material;r.uniforms.time.value=m}),this.cloudSystem.rotation.y=c*this.params.rotationSpeed,this.cloudSystem.rotation.x=c*this.params.rotationSpeed*.3}updateParams(o){this.params={...this.params,...o},this.clouds.forEach(i=>{const t=i.material;o.opacity!==void 0&&(t.uniforms.opacity.value=o.opacity),o.movementAmplitude!==void 0&&(t.uniforms.movementAmplitude.value=o.movementAmplitude),o.turbulence!==void 0&&(t.uniforms.turbulence.value=o.turbulence)})}updateLightPosition(o){this.clouds.forEach(i=>{const t=i.material;t.uniforms.lightPosition&&t.uniforms.lightPosition.value.copy(o)})}updateLightDirection(o){this.clouds.forEach(i=>{const t=i.material;t.uniforms.lightDirection&&t.uniforms.lightDirection.value.copy(o)})}updateFromThreeLight(o){this.updateLightPosition(o.position);const i=o.target.position.clone().sub(o.position).normalize();this.updateLightDirection(i)}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(o=>{o.geometry.dispose(),o.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function G(P,o,i,t,s){const c=o.secondary_clouds||[];if(c.length===0){const l=t||Math.floor(Math.random()*1e6),C=new b(l+5e3),d={baseColor:i,cloudCount:20,size:.6,opacity:.6,density:.8,seed:l,rotationSpeed:.005,movementAmplitude:.02,turbulence:1.2,timeSpeed:C.uniform(e.TIME_SPEED.min,e.TIME_SPEED.max),cosmicOriginTime:s};return new S(P,d)}const m=t||Math.floor(Math.random()*1e6),a=new b(m+5e3),r={baseColor:i,cloudCount:c.length,size:a.uniform(e.SIZE.min,e.SIZE.max),opacity:a.uniform(e.OPACITY.min,e.OPACITY.max),density:a.uniform(e.DENSITY.min,e.DENSITY.max),seed:m,rotationSpeed:a.uniform(e.ROTATION_SPEED.min,e.ROTATION_SPEED.max),movementAmplitude:a.uniform(e.MOVEMENT_AMPLITUDE.min,e.MOVEMENT_AMPLITUDE.max),turbulence:a.uniform(e.TURBULENCE.min,e.TURBULENCE.max),timeSpeed:a.uniform(e.TIME_SPEED.min,e.TIME_SPEED.max),cosmicOriginTime:s,cloudsFromPython:c};return new S(P,r)}export{G as c};
