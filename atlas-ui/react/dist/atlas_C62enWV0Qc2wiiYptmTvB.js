import{S as C,D as H,g as Y}from"./atlas_CXe69HDW-Q8b_kGwXRltZ.js";import{C as D,G as X,j as Z,k,R as q,L as E,V as c,l as J,S as p,F as K,e as A,M as O,B as Q,a as z,A as L,P as ee,c as te,i as W}from"./atlas_DUxdE5_5iPCKlmI6uaLFO.js";const h={CRYSTAL_COUNT:{min:100,max:400},SIZE:{min:.8,max:1.2},TRANSMISSION:{min:0,max:0},IOR:{min:2.4,max:2.1},ROUGHNESS:{min:0,max:.01},GLOW_INTENSITY:{min:.1,max:2.1},HEIGHT:{min:.01,max:.09}};class ie{constructor(e,t={},n,o){this.planetRadius=e,this.params=t,this.seededRng=n,this.starField=o,this.crystallineGroup=new X,this.crystallineGroup.name="CrystallineSurface",this.animationSpeed=t.timeSpeed||.05,this.createStarfieldCubemap(),this.generateCrystallineFormations(),this.starField&&setTimeout(()=>{this.starField&&this.starField.getObject3D&&this.starField.getObject3D()&&this.createStarFieldReflections()},0)}crystallineGroup;crystallineFormations=[];glowMeshes=[];animationSpeed;envMap=null;starFieldReflections=null;starFieldMaterial=null;crystallineData=[];createStarfieldCubemap(){try{const t=[];for(let n=0;n<6;n++){const o=document.createElement("canvas");o.width=512,o.height=512;const i=o.getContext("2d");if(!i)continue;const a=i.createRadialGradient(512/2,512/2,0,512/2,512/2,512/2);a.addColorStop(0,"#1a1a2e"),a.addColorStop(.5,"#16213e"),a.addColorStop(1,"#0f0f23"),i.fillStyle=a,i.fillRect(0,0,512,512);const l=new C((this.params.seed||42)+n*1e3),d=200+Math.floor(l.random()*100);for(let v=0;v<d;v++){const m=l.random()*512,s=l.random()*512,r=.3+l.random()*.4,g=l.random()*2+.5,u=l.random();u<.4?i.fillStyle=`rgba(${120+60*r}, ${140+80*r}, 255, ${r})`:u<.7?i.fillStyle=`rgba(${200+55*r}, ${200+55*r}, ${200+55*r}, ${r})`:i.fillStyle=`rgba(255, ${180+60*r}, ${120+60*r}, ${r})`,i.beginPath(),i.arc(m,s,g,0,Math.PI*2),i.fill(),r>.6&&l.random()<.1&&(i.fillStyle=`rgba(255, 255, 255, ${r*.2})`,i.beginPath(),i.arc(m,s,g*2,0,Math.PI*2),i.fill())}t.push(o)}t.length===6&&(this.envMap=new Z(t),this.envMap.needsUpdate=!0,this.envMap.mapping=k,this.envMap.format=q,this.envMap.generateMipmaps=!1,this.envMap.minFilter=E,this.envMap.magFilter=E)}catch{}}generateCrystallineFormations(){this.crystallineData=this.params.crystallinePatches||this.generateProceduralCrystals(),this.crystallineData.forEach((e,t)=>{this.createCrystalFormation(e,t)})}generateProceduralCrystals(){const e=this.seededRng||new C(this.params.seed||42),t=e.randint(h.CRYSTAL_COUNT.min,h.CRYSTAL_COUNT.max),n=[];for(let o=0;o<t;o++){const i=e.random()*Math.PI*2,a=Math.acos(e.random()*2-1),l=[Math.sin(a)*Math.cos(i),Math.sin(a)*Math.sin(i),Math.cos(a)];n.push({position_3d:l,size:e.uniform(h.SIZE.min,h.SIZE.max),color:[0,.8+e.random()*.2,1,.9],height:e.uniform(h.HEIGHT.min,h.HEIGHT.max),sides:6+Math.floor(e.random()*6),transmission:e.uniform(h.TRANSMISSION.min,h.TRANSMISSION.max),ior:e.uniform(h.IOR.min,h.IOR.max),roughness:e.uniform(h.ROUGHNESS.min,h.ROUGHNESS.max),glowIntensity:e.uniform(h.GLOW_INTENSITY.min,h.GLOW_INTENSITY.max)})}return n}createCrystalFormation(e,t){const n=new c(e.position_3d[0],e.position_3d[1],e.position_3d[2]).normalize(),o=e.size*this.planetRadius*.5,i=e.height*this.planetRadius,a=e.sides,l=4,d=new J(o*.8,o,i,a,l),v=new p({uniforms:{color:{value:new D(e.color[0],e.color[1],e.color[2])},envMap:{value:this.envMap},roughness:{value:e.roughness},ior:{value:e.ior},transmission:{value:.2},lightPosition:{value:new c(0,0,0)},lightDirection:{value:new c(1,1,1).normalize()}},vertexShader:`
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
        uniform vec3 lightDirection;

        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;

        void main() {
          vec3 normal = normalize(vWorldNormal);
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);

          vec3 lightDir;
          if (length(lightPosition) > 0.0) {
            lightDir = normalize(lightPosition - vWorldPosition);
          } else {
            lightDir = normalize(-lightDirection);
          }

          float NdotL = dot(normal, lightDir);
          float dayNightFactor = smoothstep(-0.3, 0.1, NdotL);

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
      `,transparent:!0,side:K}),m=n.clone().multiplyScalar(this.planetRadius),s=m.clone().normalize(),r=new c,g=new c;Math.abs(s.y)<.99?r.crossVectors(s,new c(0,1,0)).normalize():r.crossVectors(s,new c(1,0,0)).normalize(),g.crossVectors(s,r).normalize();const u=t*137.5%360*(Math.PI/180),b=r.clone().multiplyScalar(Math.cos(u)).add(g.clone().multiplyScalar(Math.sin(u))),V=new c().crossVectors(s,b).normalize(),y=new A;y.makeRotationX(Math.PI/2),d.applyMatrix4(y);const P=new A;P.makeBasis(b,V,s);const f=d.attributes.position,x=new c;d.applyMatrix4(P);for(let w=0;w<f.count;w++){x.fromBufferAttribute(f,w);const F=x.clone().add(m),R=F.length(),T=F.clone().normalize(),_=this.planetRadius+(R-this.planetRadius)*.5,M=T.multiplyScalar(_).sub(m);f.setXYZ(w,M.x,M.y,M.z)}f.needsUpdate=!0,d.computeVertexNormals(),this.applyProceduralNoise(d,e.size*.3),d.translate(m.x,m.y,m.z);const S=new O(d,v);this.createInnerGlow(S,e,t),this.crystallineFormations.push(S),this.crystallineGroup.add(S)}applyProceduralNoise(e,t){const n=e.getAttribute("position"),o=new c;for(let i=0;i<n.count;i++){o.fromBufferAttribute(n,i);const l=this.simpleNoise(o.x*10,o.y*10,o.z*10)*t*.02;o.multiplyScalar(1+l),n.setXYZ(i,o.x,o.y,o.z)}e.setAttribute("position",n),e.computeVertexNormals()}simpleNoise(e,t,n){return(Math.sin(e*.1)*Math.cos(t*.1)*Math.sin(n*.1)+Math.sin(e*.05)*Math.cos(t*.05)*.5+Math.sin(e*.2)*Math.sin(n*.15)*.3)*.5}createStarFieldReflections(){if(!this.starField||!this.starField.getObject3D)return;const e=this.starField.getObject3D();if(!e.geometry)return;const t=e.geometry.attributes.position,n=e.geometry.attributes.size,o=e.geometry.attributes.brightness;if(!t||!n||!o)return;const i=[];if(this.crystallineData.forEach((s,r)=>{const u=new c(s.position_3d[0],s.position_3d[1],s.position_3d[2]).normalize().clone().multiplyScalar(this.planetRadius),b=u.clone().normalize();this.generateDeterministicFaceNormals(s,r).forEach((y,P)=>{for(let f=0;f<t.count;f++){const x=t.getX(f),S=t.getY(f),w=t.getZ(f),F=o.getX(f),R=n.getX(f);if(F<.6)continue;const N=new c(x,S,w).clone().normalize().clone().negate(),M=N.dot(y),B=N.clone().sub(y.clone().multiplyScalar(2*M)),I=Math.abs(B.dot(b)),j=r*1e4+P*1e3+f,U=new C(j+(this.params.seed||42)).random()<.4;if(I>.3&&M<-.1&&U){const $=u.clone().add(y.clone().multiplyScalar(.001)).clone().normalize().multiplyScalar(this.planetRadius*1.001);i.push({position:$,size:R*.4*I,brightness:F*.5*I,crystalIndex:r})}}})}),i.length===0)return;const a=new Float32Array(i.length*3),l=new Float32Array(i.length),d=new Float32Array(i.length),v=new Float32Array(i.length);i.forEach((s,r)=>{a[r*3]=s.position.x,a[r*3+1]=s.position.y,a[r*3+2]=s.position.z,l[r]=s.size,d[r]=s.brightness,v[r]=s.crystalIndex});const m=new Q;m.setAttribute("position",new z(a,3)),m.setAttribute("size",new z(l,1)),m.setAttribute("brightness",new z(d,1)),m.setAttribute("crystalIndex",new z(v,1)),this.starFieldMaterial=new p({uniforms:{planetRadius:{value:this.planetRadius},lightDirection:{value:new c(1,1,1).normalize()}},vertexShader:`
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
      `,transparent:!0,blending:L,depthWrite:!1}),this.starFieldReflections=new ee(m,this.starFieldMaterial),this.crystallineGroup.add(this.starFieldReflections)}generateDeterministicFaceNormals(e,t){const n=new C((this.params.seed||42)+t*1e3),o=[],i=e.sides||6,a=Math.min(i,8),l=new c(e.position_3d[0],e.position_3d[1],e.position_3d[2]).normalize(),d=new c,v=new c;Math.abs(l.y)<.99?d.crossVectors(l,new c(0,1,0)).normalize():d.crossVectors(l,new c(1,0,0)).normalize(),v.crossVectors(l,d).normalize();for(let m=0;m<a;m++){const s=m/a*Math.PI*2,r=n.uniform(-Math.PI*.3,Math.PI*.3),g=new c().addScaledVector(d,Math.cos(s)).addScaledVector(v,Math.sin(s)).addScaledVector(l,Math.sin(r)).normalize();o.push(g)}return o}createInnerGlow(e,t,n){const o=e.geometry.clone(),i=new p({uniforms:{time:{value:0},glowColor:{value:new D(t.color[0],t.color[1],t.color[2])},glowIntensity:{value:t.glowIntensity||.5},lightPosition:{value:new c(0,0,0)},lightDirection:{value:new c(1,1,1).normalize()}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPositionNormal;
        varying vec3 vWorldPosition;
        varying vec3 vWorldNormal;

        void main() {
          vNormal = normalize(normalMatrix * normal);
          vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
          vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        uniform vec3 glowColor;
        uniform float glowIntensity;
        uniform vec3 lightPosition;
        uniform vec3 lightDirection;

        varying vec3 vNormal;
        varying vec3 vPositionNormal;
        varying vec3 vWorldPosition;
        varying vec3 vWorldNormal;

        void main() {
          vec3 worldNormal = normalize(vWorldNormal);
          vec3 lightDir;
          if (length(lightPosition) > 0.0) {
            lightDir = normalize(lightPosition - vWorldPosition);
          } else {
            lightDir = normalize(-lightDirection);
          }
          float NdotL = dot(worldNormal, lightDir);
          float dayNightFactor = smoothstep(-0.3, 0.1, NdotL);

          float intensity = pow(0.4 - dot(vNormal, vPositionNormal), 2.0);
          intensity *= (0.8 + 0.2 * sin(time * 2.0));

          float glowVisibility = 0.15 + 0.85 * dayNightFactor;

          vec3 glow = glowColor * intensity * glowIntensity * glowVisibility;
          gl_FragColor = vec4(glow, intensity * 0.6 * glowVisibility);
        }
      `,side:te,blending:L,transparent:!0}),a=new O(o,i);a.position.copy(e.position),a.rotation.copy(e.rotation),a.scale.multiplyScalar(1.05),this.glowMeshes.push(a),this.crystallineGroup.add(a)}update(e,t){const n=this.params.cosmicOriginTime||H,o=Y(n)*this.animationSpeed;this.glowMeshes.forEach(i=>{i.material instanceof p&&(i.material.uniforms.time.value=o)}),t!==void 0&&(this.crystallineGroup.rotation.y=t)}updateLightDirection(e){this.starFieldMaterial&&this.starFieldMaterial.uniforms.lightDirection.value.copy(e),this.crystallineFormations.forEach(t=>{t.material instanceof p&&t.material.uniforms.lightDirection&&t.material.uniforms.lightDirection.value.copy(e)}),this.glowMeshes.forEach(t=>{t.material instanceof p&&t.material.uniforms.lightDirection&&t.material.uniforms.lightDirection.value.copy(e)})}updateLightPosition(e){this.starFieldMaterial&&this.starFieldMaterial.uniforms.lightPosition.value.copy(e),this.crystallineFormations.forEach(t=>{t.material instanceof p&&t.material.uniforms.lightPosition&&t.material.uniforms.lightPosition.value.copy(e)}),this.glowMeshes.forEach(t=>{t.material instanceof p&&t.material.uniforms.lightPosition&&t.material.uniforms.lightPosition.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}setStarField(e){this.starField=e,this.starFieldReflections&&(this.crystallineGroup.remove(this.starFieldReflections),this.starFieldReflections.geometry&&this.starFieldReflections.geometry.dispose(),this.starFieldMaterial&&this.starFieldMaterial.dispose(),this.starFieldReflections=null,this.starFieldMaterial=null),this.starField&&this.crystallineData.length>0&&this.createStarFieldReflections()}addToScene(e,t){this.crystallineGroup.position.copy(t),e.add(this.crystallineGroup)}removeFromScene(e){e.remove(this.crystallineGroup)}dispose(){this.crystallineFormations.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof W&&e.material.dispose()}),this.glowMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof W&&e.material.dispose()}),this.starFieldReflections&&(this.starFieldReflections.geometry&&this.starFieldReflections.geometry.dispose(),this.starFieldMaterial&&this.starFieldMaterial.dispose()),this.envMap&&this.envMap.dispose(),this.crystallineFormations=[],this.glowMeshes=[],this.starFieldReflections=null,this.starFieldMaterial=null}getGroup(){return this.crystallineGroup}getObject3D(){return this.crystallineGroup}}function se(G,e,t,n,o){return new ie(G,{seed:t,cosmicOriginTime:n,baseColor:new D(0,.8,1),transmission:.2,ior:1.6,roughness:.01,glowIntensity:.3,timeSpeed:.05},new C(t),o)}export{ie as C,se as c};
