import{S as F}from"./atlas_DcFWk_8uQW5YiyxJyXm9Z.js";import{C as G,G as Y,j as U,k as X,R as Z,L as A,V as m,l as k,S as C,F as q,e as E,M as O,B as J,a as z,A as L,P as K,c as Q,i as B}from"./atlas_BOOzg5XYrrU1N4SZySfRd.js";const f={CRYSTAL_COUNT:{min:100,max:400},SIZE:{min:.8,max:1.2},TRANSMISSION:{min:0,max:0},IOR:{min:2.4,max:2.1},ROUGHNESS:{min:0,max:.01},GLOW_INTENSITY:{min:.1,max:2.1},HEIGHT:{min:.01,max:.09}};class ee{constructor(e,t={},s,o){this.planetRadius=e,this.params=t,this.seededRng=s,this.starField=o,this.crystallineGroup=new Y,this.crystallineGroup.name="CrystallineSurface",this.animationSpeed=t.timeSpeed||.05,this.createStarfieldCubemap(),this.generateCrystallineFormations(),this.starField&&setTimeout(()=>{this.starField&&this.starField.getObject3D&&this.starField.getObject3D()&&this.createStarFieldReflections()},0)}crystallineGroup;crystallineFormations=[];glowMeshes=[];animationSpeed;envMap=null;starFieldReflections=null;starFieldMaterial=null;crystallineData=[];createStarfieldCubemap(){try{const t=[];for(let s=0;s<6;s++){const o=document.createElement("canvas");o.width=512,o.height=512;const i=o.getContext("2d");if(!i)continue;const n=i.createRadialGradient(512/2,512/2,0,512/2,512/2,512/2);n.addColorStop(0,"#1a1a2e"),n.addColorStop(.5,"#16213e"),n.addColorStop(1,"#0f0f23"),i.fillStyle=n,i.fillRect(0,0,512,512);const l=new F((this.params.seed||42)+s*1e3),d=200+Math.floor(l.random()*100);for(let u=0;u<d;u++){const c=l.random()*512,a=l.random()*512,r=.3+l.random()*.4,p=l.random()*2+.5,v=l.random();v<.4?i.fillStyle=`rgba(${120+60*r}, ${140+80*r}, 255, ${r})`:v<.7?i.fillStyle=`rgba(${200+55*r}, ${200+55*r}, ${200+55*r}, ${r})`:i.fillStyle=`rgba(255, ${180+60*r}, ${120+60*r}, ${r})`,i.beginPath(),i.arc(c,a,p,0,Math.PI*2),i.fill(),r>.6&&l.random()<.1&&(i.fillStyle=`rgba(255, 255, 255, ${r*.2})`,i.beginPath(),i.arc(c,a,p*2,0,Math.PI*2),i.fill())}t.push(o)}t.length===6&&(this.envMap=new U(t),this.envMap.needsUpdate=!0,this.envMap.mapping=X,this.envMap.format=Z,this.envMap.generateMipmaps=!1,this.envMap.minFilter=A,this.envMap.magFilter=A)}catch{}}generateCrystallineFormations(){this.crystallineData=this.params.crystallinePatches||this.generateProceduralCrystals(),this.crystallineData.forEach((e,t)=>{this.createCrystalFormation(e,t)})}generateProceduralCrystals(){const e=this.seededRng||new F(this.params.seed||42),t=e.randint(f.CRYSTAL_COUNT.min,f.CRYSTAL_COUNT.max),s=[];for(let o=0;o<t;o++){const i=e.random()*Math.PI*2,n=Math.acos(e.random()*2-1),l=[Math.sin(n)*Math.cos(i),Math.sin(n)*Math.sin(i),Math.cos(n)];s.push({position_3d:l,size:e.uniform(f.SIZE.min,f.SIZE.max),color:[0,.8+e.random()*.2,1,.9],height:e.uniform(f.HEIGHT.min,f.HEIGHT.max),sides:6+Math.floor(e.random()*6),transmission:e.uniform(f.TRANSMISSION.min,f.TRANSMISSION.max),ior:e.uniform(f.IOR.min,f.IOR.max),roughness:e.uniform(f.ROUGHNESS.min,f.ROUGHNESS.max),glowIntensity:e.uniform(f.GLOW_INTENSITY.min,f.GLOW_INTENSITY.max)})}return s}createCrystalFormation(e,t){const s=new m(e.position_3d[0],e.position_3d[1],e.position_3d[2]).normalize(),o=e.size*this.planetRadius*.5,i=e.height*this.planetRadius,n=e.sides,l=4,d=new k(o*.8,o,i,n,l),u=new C({uniforms:{color:{value:new G(e.color[0],e.color[1],e.color[2])},envMap:{value:this.envMap},roughness:{value:e.roughness},ior:{value:e.ior},transmission:{value:.2},lightPosition:{value:new m(1e3,1e3,1e3)}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
          vPosition = position;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform samplerCube envMap;
        uniform float roughness;
        uniform float ior;
        uniform float transmission;
        uniform vec3 lightPosition;
        
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        
        void main() {
          vec3 normal = normalize(vWorldNormal);
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);

          vec3 lightDir = normalize(lightPosition - vWorldPosition);
          float NdotL = dot(normal, lightDir);
          float dayNightFactor = smoothstep(-0.5, 0.2, NdotL);

          float NdotV = max(dot(normal, viewDir), 0.0);
          float F0 = pow((1.0 - ior) / (1.0 + ior), 2.0);
          float fresnel = F0 + (1.0 - F0) * pow(1.0 - NdotV, 3.0);

          vec3 reflectDir = reflect(-viewDir, normal);
          vec3 envReflection = textureCube(envMap, reflectDir).rgb;

          vec3 perturbedNormal1 = normalize(normal + vec3(0.1, 0.0, 0.0));
          vec3 perturbedNormal2 = normalize(normal + vec3(0.0, 0.1, 0.0));
          vec3 reflectDir1 = reflect(-viewDir, perturbedNormal1);
          vec3 reflectDir2 = reflect(-viewDir, perturbedNormal2);
          
          vec3 envReflection1 = textureCube(envMap, reflectDir1).rgb;
          vec3 envReflection2 = textureCube(envMap, reflectDir2).rgb;

          vec3 totalReflection = envReflection * 0.6 + envReflection1 * 0.2 + envReflection2 * 0.2;
          totalReflection *= (2.0 - roughness);

          vec3 refractDir = refract(-viewDir, normal, 1.0 / ior);
          vec3 envRefraction = vec3(0.0);
          if (length(refractDir) > 0.0) {
            envRefraction = textureCube(envMap, refractDir).rgb;
          }

          vec3 crystalColor = color * 1.2;

          vec3 transmittedColor = mix(crystalColor * 0.8, envRefraction * crystalColor, transmission);

          float dispersion = 0.02;
          vec3 refractR = refract(-viewDir, normal, 1.0 / (ior - dispersion));
          vec3 refractG = refract(-viewDir, normal, 1.0 / ior);
          vec3 refractB = refract(-viewDir, normal, 1.0 / (ior + dispersion));
          
          vec3 dispersedColor = vec3(0.0);
          if (length(refractR) > 0.0) dispersedColor.r = textureCube(envMap, refractR).r;
          if (length(refractG) > 0.0) dispersedColor.g = textureCube(envMap, refractG).g;
          if (length(refractB) > 0.0) dispersedColor.b = textureCube(envMap, refractB).b;

          transmittedColor = mix(transmittedColor, dispersedColor * crystalColor, 0.15);

          float internalGlow = pow(fresnel, 0.5) * (1.0 - roughness);
          vec3 glowColor = crystalColor * internalGlow * 0.3;

          vec3 finalColor = mix(transmittedColor, totalReflection, fresnel);

          finalColor += glowColor;

          float visibilityFactor = 0.15 + 0.85 * dayNightFactor;
          finalColor *= visibilityFactor;

          float alpha = mix(0.3 + transmission * 0.4, 0.85, fresnel);
          alpha = clamp(alpha, 0.3, 0.9);
          alpha *= visibilityFactor;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,transparent:!0,side:q}),c=s.clone().multiplyScalar(this.planetRadius),a=c.clone().normalize(),r=new m,p=new m;Math.abs(a.y)<.99?r.crossVectors(a,new m(0,1,0)).normalize():r.crossVectors(a,new m(1,0,0)).normalize(),p.crossVectors(a,r).normalize();const v=t*137.5%360*(Math.PI/180),b=r.clone().multiplyScalar(Math.cos(v)).add(p.clone().multiplyScalar(Math.sin(v))),D=new m().crossVectors(a,b).normalize(),g=new E;g.makeRotationX(Math.PI/2),d.applyMatrix4(g);const R=new E;R.makeBasis(b,D,a);const h=d.attributes.position,x=new m;d.applyMatrix4(R);for(let y=0;y<h.count;y++){x.fromBufferAttribute(h,y);const S=x.clone().add(c),P=S.length(),T=S.clone().normalize(),_=this.planetRadius+(P-this.planetRadius)*.5,M=T.multiplyScalar(_).sub(c);h.setXYZ(y,M.x,M.y,M.z)}h.needsUpdate=!0,d.computeVertexNormals(),this.applyProceduralNoise(d,e.size*.3),d.translate(c.x,c.y,c.z);const w=new O(d,u);this.createInnerGlow(w,e,t),this.crystallineFormations.push(w),this.crystallineGroup.add(w)}applyProceduralNoise(e,t){const s=e.getAttribute("position"),o=new m;for(let i=0;i<s.count;i++){o.fromBufferAttribute(s,i);const l=this.simpleNoise(o.x*10,o.y*10,o.z*10)*t*.02;o.multiplyScalar(1+l),s.setXYZ(i,o.x,o.y,o.z)}e.setAttribute("position",s),e.computeVertexNormals()}simpleNoise(e,t,s){return(Math.sin(e*.1)*Math.cos(t*.1)*Math.sin(s*.1)+Math.sin(e*.05)*Math.cos(t*.05)*.5+Math.sin(e*.2)*Math.sin(s*.15)*.3)*.5}createStarFieldReflections(){if(!this.starField||!this.starField.getObject3D)return;const e=this.starField.getObject3D();if(!e.geometry)return;const t=e.geometry.attributes.position,s=e.geometry.attributes.size,o=e.geometry.attributes.brightness;if(!t||!s||!o)return;const i=[];if(this.crystallineData.forEach((a,r)=>{const v=new m(a.position_3d[0],a.position_3d[1],a.position_3d[2]).normalize().clone().multiplyScalar(this.planetRadius),b=v.clone().normalize();this.generateDeterministicFaceNormals(a,r).forEach((g,R)=>{for(let h=0;h<t.count;h++){const x=t.getX(h),w=t.getY(h),y=t.getZ(h),S=o.getX(h),P=s.getX(h);if(S<.6)continue;const N=new m(x,w,y).clone().normalize().clone().negate(),M=N.dot(g),j=N.clone().sub(g.clone().multiplyScalar(2*M)),I=Math.abs(j.dot(b)),W=r*1e4+R*1e3+h,$=new F(W+(this.params.seed||42)).random()<.4;if(I>.3&&M<-.1&&$){const H=v.clone().add(g.clone().multiplyScalar(.001)).clone().normalize().multiplyScalar(this.planetRadius*1.001);i.push({position:H,size:P*.4*I,brightness:S*.5*I,crystalIndex:r})}}})}),i.length===0)return;const n=new Float32Array(i.length*3),l=new Float32Array(i.length),d=new Float32Array(i.length),u=new Float32Array(i.length);i.forEach((a,r)=>{n[r*3]=a.position.x,n[r*3+1]=a.position.y,n[r*3+2]=a.position.z,l[r]=a.size,d[r]=a.brightness,u[r]=a.crystalIndex});const c=new J;c.setAttribute("position",new z(n,3)),c.setAttribute("size",new z(l,1)),c.setAttribute("brightness",new z(d,1)),c.setAttribute("crystalIndex",new z(u,1)),this.starFieldMaterial=new C({uniforms:{planetRadius:{value:this.planetRadius},lightDirection:{value:new m(1,1,1).normalize()}},vertexShader:`
        attribute float size;
        attribute float brightness;
        attribute float crystalIndex;
        
        uniform float planetRadius;
        uniform vec3 lightDirection;
        
        varying float vBrightness;
        varying float vLightInfluence;
        varying float vCrystalIndex;
        
        void main() {
          vBrightness = brightness;
          vCrystalIndex = crystalIndex;

          vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          vec3 normal = normalize(worldPos);
          float lightDot = dot(normal, lightDirection);
          vLightInfluence = max(0.01, lightDot * 0.5 + 0.5);
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = size * (350.0 / -mvPosition.z) * (0.7 + 0.3 * vLightInfluence);
        }
      `,fragmentShader:`
        varying float vBrightness;
        varying float vLightInfluence;
        varying float vCrystalIndex;
        
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = (1.0 - dist * 2.0) * vBrightness * vLightInfluence;
          alpha *= 0.8 * vLightInfluence;

          vec3 baseColor = vec3(0.4, 0.8, 1.0);
          float crystalVariation = sin(vCrystalIndex * 0.7) * 0.1;
          vec3 reflectionColor = baseColor + vec3(crystalVariation, crystalVariation * 0.5, -crystalVariation * 0.3);

          gl_FragColor = vec4(reflectionColor, alpha);
        }
      `,transparent:!0,blending:L,depthWrite:!1}),this.starFieldReflections=new K(c,this.starFieldMaterial),this.crystallineGroup.add(this.starFieldReflections)}generateDeterministicFaceNormals(e,t){const s=new F((this.params.seed||42)+t*1e3),o=[],i=e.sides||6,n=Math.min(i,8),l=new m(e.position_3d[0],e.position_3d[1],e.position_3d[2]).normalize(),d=new m,u=new m;Math.abs(l.y)<.99?d.crossVectors(l,new m(0,1,0)).normalize():d.crossVectors(l,new m(1,0,0)).normalize(),u.crossVectors(l,d).normalize();for(let c=0;c<n;c++){const a=c/n*Math.PI*2,r=s.uniform(-Math.PI*.3,Math.PI*.3),p=new m().addScaledVector(d,Math.cos(a)).addScaledVector(u,Math.sin(a)).addScaledVector(l,Math.sin(r)).normalize();o.push(p)}return o}createInnerGlow(e,t,s){const o=e.geometry.clone(),i=new C({uniforms:{time:{value:0},glowColor:{value:new G(t.color[0],t.color[1],t.color[2])},glowIntensity:{value:t.glowIntensity||.5}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPositionNormal;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        uniform vec3 glowColor;
        uniform float glowIntensity;
        
        varying vec3 vNormal;
        varying vec3 vPositionNormal;
        
        void main() {
          float intensity = pow(0.4 - dot(vNormal, vPositionNormal), 2.0);
          intensity *= (0.8 + 0.2 * sin(time * 2.0));
          
          vec3 glow = glowColor * intensity * glowIntensity;
          gl_FragColor = vec4(glow, intensity * 0.6);
        }
      `,side:Q,blending:L,transparent:!0}),n=new O(o,i);n.position.copy(e.position),n.rotation.copy(e.rotation),n.scale.multiplyScalar(1.05),this.glowMeshes.push(n),this.crystallineGroup.add(n)}update(){const t=(Date.now()-(this.params.cosmicOriginTime||0))*.001*this.animationSpeed;this.glowMeshes.forEach(s=>{s.material instanceof C&&(s.material.uniforms.time.value=t)})}updateLightDirection(e){this.starFieldMaterial&&this.starFieldMaterial.uniforms.lightDirection.value.copy(e)}updateLightPosition(e){this.starFieldMaterial&&this.starFieldMaterial.uniforms.lightPosition.value.copy(e),this.crystallineFormations.forEach(t=>{t.material instanceof C&&t.material.uniforms.lightPosition.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}setStarField(e){this.starField=e,this.starFieldReflections&&(this.crystallineGroup.remove(this.starFieldReflections),this.starFieldReflections.geometry&&this.starFieldReflections.geometry.dispose(),this.starFieldMaterial&&this.starFieldMaterial.dispose(),this.starFieldReflections=null,this.starFieldMaterial=null),this.starField&&this.crystallineData.length>0&&this.createStarFieldReflections()}addToScene(e,t){this.crystallineGroup.position.copy(t),e.add(this.crystallineGroup)}removeFromScene(e){e.remove(this.crystallineGroup)}dispose(){this.crystallineFormations.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof B&&e.material.dispose()}),this.glowMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof B&&e.material.dispose()}),this.starFieldReflections&&(this.starFieldReflections.geometry&&this.starFieldReflections.geometry.dispose(),this.starFieldMaterial&&this.starFieldMaterial.dispose()),this.envMap&&this.envMap.dispose(),this.crystallineFormations=[],this.glowMeshes=[],this.starFieldReflections=null,this.starFieldMaterial=null}getGroup(){return this.crystallineGroup}getObject3D(){return this.crystallineGroup}}function se(V,e,t,s,o){return new ee(V,{seed:t,cosmicOriginTime:s,baseColor:new G(0,.8,1),transmission:.2,ior:1.6,roughness:.01,glowIntensity:.3,timeSpeed:.05},new F(t),o)}export{ee as C,se as c};
