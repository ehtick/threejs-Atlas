import{S as C}from"./atlas_BCLm0rswpwHY6zwJL8hnM.js";import{G as T,V as l,b as Y,S as k,C as J,M as W}from"./atlas_CLp6T-BwF8hBVTNM0OiQd.js";const i={ERUPTION_INTENSITY:{min:.5,max:1.5},ERUPTION_FREQUENCY:{min:3,max:8},PROJECTILE_COUNT:{min:3,max:8},PROJECTILE_SIZE:{min:.001,max:.004},ARC_HEIGHT:{min:.01,max:.04},FLARE_LENGTH:{min:.08,max:.25},TIME_SPEED:{min:.8,max:1.2}};class S{eruptionsGroup;projectilesGroup;trailsGroup;splashGroup;eruptionPatterns=[];params;planetRadius;cosmicOriginTime;cosmicOffset;rng;projectilePool=[];trailPool=[];splashPool=[];static projectileVertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float temperature;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      
      vec3 pos = position;
      float deform = sin(time * 10.0 + position.x * 5.0) * 0.02;
      pos += normal * deform;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static projectileFragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float temperature;
    uniform vec3 baseColor;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float glowIntensity;
    
    void main() {
      vec3 coolColor = vec3(0.4, 0.08, 0.0);
      vec3 warmColor = vec3(0.9, 0.3, 0.05);
      vec3 hotColor = vec3(1.0, 0.8, 0.3);
      vec3 veryHotColor = vec3(1.2, 1.0, 0.8);
      
      vec3 color;
      if (temperature > 0.75) {
        color = mix(hotColor, veryHotColor, (temperature - 0.75) * 4.0);
      } else if (temperature > 0.5) {
        color = mix(warmColor, hotColor, (temperature - 0.5) * 4.0);
      } else if (temperature > 0.25) {
        color = mix(coolColor, warmColor, (temperature - 0.25) * 4.0);
      } else {
        color = coolColor;
      }
      
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      vec3 normal = normalize(vWorldNormal);
      float dotNL = dot(normal, lightDir);
      float lighting = smoothstep(-0.3, 0.1, dotNL) * 0.3 + 0.7;
      
      float emission = glowIntensity * (0.8 + temperature * 0.4);
      color *= lighting;
      color += color * emission;
      
      float fresnel = pow(1.0 - abs(dot(normalize(vPosition), vNormal)), 2.0);
      color += veryHotColor * fresnel * 0.3 * temperature;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;static trailVertexShader=`
    varying vec2 vUv;
    varying float vAlpha;
    attribute float alpha;
    
    void main() {
      vUv = uv;
      vAlpha = alpha;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;static trailFragmentShader=`
    varying vec2 vUv;
    varying float vAlpha;
    
    uniform vec3 color;
    uniform float time;
    
    void main() {
      float fade = 1.0 - vUv.y;
      float alpha = fade * vAlpha * 0.6;
      
      vec3 finalColor = color * (0.5 + fade * 0.5);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(t,o={}){this.planetRadius=t;const e=o.seed||Math.floor(Math.random()*1e6);this.cosmicOriginTime=o.cosmicOriginTime||51408e4,this.cosmicOffset=e%3600*10,this.rng=new C(e),this.params={eruptionIntensity:o.eruptionIntensity||this.rng.uniform(i.ERUPTION_INTENSITY.min,i.ERUPTION_INTENSITY.max),eruptionFrequency:o.eruptionFrequency||this.rng.uniform(i.ERUPTION_FREQUENCY.min,i.ERUPTION_FREQUENCY.max),projectileCount:o.projectileCount||Math.floor(this.rng.uniform(i.PROJECTILE_COUNT.min,i.PROJECTILE_COUNT.max)),projectileSize:o.projectileSize||this.rng.uniform(i.PROJECTILE_SIZE.min,i.PROJECTILE_SIZE.max),arcHeight:o.arcHeight||this.rng.uniform(i.ARC_HEIGHT.min,i.ARC_HEIGHT.max),timeSpeed:o.timeSpeed||this.rng.uniform(i.TIME_SPEED.min,i.TIME_SPEED.max),seed:e,cosmicOriginTime:this.cosmicOriginTime,magmaLakes:o.magmaLakes||[]},this.eruptionsGroup=new T,this.projectilesGroup=new T,this.trailsGroup=new T,this.splashGroup=new T,this.eruptionsGroup.add(this.projectilesGroup),this.eruptionsGroup.add(this.trailsGroup),this.eruptionsGroup.add(this.splashGroup),this.generateEruptionPatterns(),this.initializeObjectPools()}generateEruptionPatterns(){let t=[];if(this.params.magmaLakes&&this.params.magmaLakes.length>0)t=this.params.magmaLakes.map(o=>{const e=o.position_3d||[0,0,1];return new l(e[0],e[1],e[2]).normalize().multiplyScalar(this.planetRadius*1.002)});else{const o=Math.floor(this.rng.uniform(3,8));for(let e=0;e<o;e++){const n=this.rng.uniform(0,2*Math.PI),s=this.rng.uniform(-1,1),r=Math.acos(s);t.push(new l(Math.sin(r)*Math.cos(n),Math.sin(r)*Math.sin(n),Math.cos(r)).multiplyScalar(this.planetRadius*1.002))}}this.eruptionPatterns=t.map((o,e)=>({id:e,position:o.clone(),intervalSeconds:this.rng.uniform(12,35),phaseOffset:this.rng.uniform(0,Math.PI*2),intensity:this.rng.uniform(.7,1.3)}))}initializeObjectPools(){for(let t=0;t<50;t++){const o=new Y(this.params.projectileSize*this.planetRadius,8,6),e=new k({vertexShader:S.projectileVertexShader,fragmentShader:S.projectileFragmentShader,uniforms:{time:{value:0},temperature:{value:1},baseColor:{value:new J(1,.5,.1)},lightDirection:{value:new l(1,1,1).normalize()},lightPosition:{value:new l(0,0,0)},glowIntensity:{value:1}}}),n=new W(o,e);n.visible=!1,this.projectilePool.push(n),this.projectilesGroup.add(n)}}createTrailSegment(t,o){}createSplash(t,o){}update(t,o){const s=(Date.now()/1e3-this.cosmicOriginTime+this.cosmicOffset)*this.params.timeSpeed,r=s%1e4;this.calculateCurrentProjectiles(s),this.projectilePool.forEach(h=>{const c=h.material;c.uniforms.time.value=r})}calculateCurrentProjectiles(t){this.projectilePool.forEach(e=>{e.visible=!1});let o=0;for(const e of this.eruptionPatterns){const n=e.intervalSeconds,s=e.phaseOffset/(Math.PI*2)*n,r=t-s;if(r<0)continue;const h=Math.floor(r/n),c=3;for(let m=Math.max(0,h-c);m<=h;m++){const u=m*n+s,f=this.params.seed+e.id*1e3+m*13,p=new C(f),E=Math.floor(this.params.projectileCount*e.intensity*p.uniform(.8,1.2));for(let a=0;a<E;a++){const g=u+p.uniform(0,1),d=p.uniform(4,8)*e.intensity,P=g+d;if(t>=g&&t<=P&&o<this.projectilePool.length){const v=this.projectilePool[o];o++,this.renderProjectileAtTime(v,e,p,t,g,d,a)}}}}}renderProjectileAtTime(t,o,e,n,s,r,h){const c=e.uniform(0,Math.PI*2),m=e.uniform(i.FLARE_LENGTH.min,i.FLARE_LENGTH.max),u=o.position.clone().normalize(),f=new l,p=new l;Math.abs(u.z)<.9?f.crossVectors(u,new l(0,0,1)).normalize():f.crossVectors(u,new l(1,0,0)).normalize(),p.crossVectors(f,u).normalize();const E=(n-s)/r,a=Math.max(0,Math.min(1,E)),g=new l().addScaledVector(f,Math.cos(c)).addScaledVector(p,Math.sin(c)),d=m*this.planetRadius*a,P=g.clone().multiplyScalar(d),v=o.position.clone().add(P).normalize().multiplyScalar(this.planetRadius),R=this.params.arcHeight*this.planetRadius*o.intensity*e.uniform(.8,1.2);let I;a<.3?I=Math.sin(a*Math.PI/.3)*(a/.3):I=Math.exp(-(a-.3)*3)*Math.sin(a*Math.PI);const y=2+e.uniform(0,3),x=R*.3,N=e.uniform(0,Math.PI*2),j=Math.sin(a*y*Math.PI+N)*x*a,w=Math.cos(a*y*Math.PI*1.3+N)*x*.5*a,_=v.clone().normalize(),L=f.clone().multiplyScalar(j),z=p.clone().multiplyScalar(w),G=_.clone().multiplyScalar(R*I),M=v.clone().add(G).add(L).add(z);t.position.copy(M),t.visible=!0;const U=this.params.projectileSize*e.uniform(.7,1.3)*Math.sqrt(o.intensity);t.scale.setScalar(U/this.params.projectileSize);const F=e.uniform(.8,1)*o.intensity,H=Math.max(.4,F-(n-s)*.05),A=t.material;if(A.uniforms.temperature.value=H,a>.01){const D=Math.max(0,a-.01),b=this.calculateFlarePosition(o,e,D,r,h),V=M.clone().sub(b).normalize();t.lookAt(M.clone().add(V))}}calculateFlarePosition(t,o,e,n,s){const r=o.uniform(0,Math.PI*2),h=o.uniform(i.FLARE_LENGTH.min,i.FLARE_LENGTH.max),c=t.position.clone().normalize(),m=new l,u=new l;Math.abs(c.z)<.9?m.crossVectors(c,new l(0,0,1)).normalize():m.crossVectors(c,new l(1,0,0)).normalize(),u.crossVectors(m,c).normalize();const f=new l().addScaledVector(m,Math.cos(r)).addScaledVector(u,Math.sin(r)),p=h*this.planetRadius*e,E=f.clone().multiplyScalar(p),a=t.position.clone().add(E).normalize().multiplyScalar(this.planetRadius),g=this.params.arcHeight*this.planetRadius*t.intensity*o.uniform(.8,1.2);let d;e<.3?d=Math.sin(e*Math.PI/.3)*(e/.3):d=Math.exp(-(e-.3)*3)*Math.sin(e*Math.PI);const v=a.clone().normalize().clone().multiplyScalar(g*d);return a.clone().add(v)}updateLightPosition(t){this.projectilePool.forEach(o=>{const e=o.material;e.uniforms.lightPosition&&e.uniforms.lightPosition.value.copy(t)})}updateLightDirection(t){this.projectilePool.forEach(o=>{const e=o.material;e.uniforms.lightDirection&&e.uniforms.lightDirection.value.copy(t)})}updateFromThreeLight(t){this.updateLightPosition(t.position);const o=t.target.position.clone().sub(t.position).normalize();this.updateLightDirection(o)}addToScene(t,o){o&&this.eruptionsGroup.position.copy(o),t.add(this.eruptionsGroup)}getObject3D(){return this.eruptionsGroup}dispose(){this.projectilePool.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.projectilePool=[],this.eruptionsGroup.clear()}}function Z(O,t,o,e){const n=t.magma_lakes;if(!n||n.length===0)return null;const s=o||Math.floor(Math.random()*1e6),r=new C(s+1e4),h={eruptionIntensity:r.uniform(i.ERUPTION_INTENSITY.min,i.ERUPTION_INTENSITY.max),eruptionFrequency:r.uniform(i.ERUPTION_FREQUENCY.min,i.ERUPTION_FREQUENCY.max),projectileCount:Math.floor(r.uniform(i.PROJECTILE_COUNT.min,i.PROJECTILE_COUNT.max)),projectileSize:r.uniform(i.PROJECTILE_SIZE.min,i.PROJECTILE_SIZE.max),arcHeight:r.uniform(i.ARC_HEIGHT.min,i.ARC_HEIGHT.max),timeSpeed:r.uniform(i.TIME_SPEED.min,i.TIME_SPEED.max),seed:s+1e4,cosmicOriginTime:e,magmaLakes:n};return new S(O,h)}export{S as M,Z as c};
