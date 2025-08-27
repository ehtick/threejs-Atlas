import{S as Z}from"./atlas_BJ-3dIBoTMvLRTvbW4jvB.js";import{C,G as rt,v as Y,w as I,R as D,S as V,x as nt,O as lt,y as ct,z as ht,D as mt,V as y,d as pt,g as q,M as ft,f as ut}from"./atlas_CqUMNY_RyRklhCsbOI68T.js";const S={WATER_BODY_COUNT:{min:4,max:8},WATER_BODY_RADIUS:{min:.07,max:.35},WATER_BODY_OPACITY:{min:.6,max:.85}};class dt{waterGroup;waterBodyMeshes=[];params;rng;materials=[];planetRadius;waterMaterial;normalMap;displacementMap;foamMap;animationTime=0;constructor(e,t={}){const s=t.seed||Math.floor(Math.random()*1e6);this.rng=new Z(s),this.planetRadius=e,this.params={water_bodies:t.water_bodies||[],waterColor:t.waterColor||new C(.2,.5,.9),globalIrregularity:t.globalIrregularity||.7,seed:s,...t},this.waterGroup=new rt,this.generateWaterTextures(),this.createUnifiedWaterMaterial(),this.generateWaterBodies()}generateWaterTextures(){const t=new Uint8Array(262144);for(let l=0;l<256;l++)for(let a=0;a<256;a++){const n=(l*256+a)*4,p=l/256*Math.PI*6,c=a/256*Math.PI*6,g=Math.sin(p*1+c*.5)*.5,u=Math.sin(p*2.3-c*1.1)*.3,h=Math.sin(p*.7+c*1.9)*.2,M=(g+u)*.5+.5,W=(u+h)*.5+.5,x=1;t[n]=M*255,t[n+1]=W*255,t[n+2]=x*255,t[n+3]=255}this.normalMap=new Y(t,256,256,I),this.normalMap.wrapS=D,this.normalMap.wrapT=D,this.normalMap.needsUpdate=!0;const s=128,f=new Uint8Array(s*s*4);for(let l=0;l<s;l++)for(let a=0;a<s;a++){const n=(l*s+a)*4,p=l/s*Math.PI*2,c=a/s*Math.PI*2,g=Math.sin(p*2+c)*.3,u=Math.cos(p-c*2)*.3,h=(g+u)*.25+.5,M=Math.max(0,Math.min(255,h*255));f[n]=M,f[n+1]=M,f[n+2]=M,f[n+3]=255}this.displacementMap=new Y(f,s,s,I),this.displacementMap.wrapS=D,this.displacementMap.wrapT=D,this.displacementMap.needsUpdate=!0;const r=128,i=new Uint8Array(r*r*4);for(let l=0;l<r;l++)for(let a=0;a<r;a++){const n=(l*r+a)*4,p=l/r*Math.PI*6,c=a/r*Math.PI*6,g=(Math.sin(p)*Math.cos(c)+1)*.5,h=(g>.6?g*.8:0)*255;i[n]=h,i[n+1]=h,i[n+2]=h,i[n+3]=255}this.foamMap=new Y(i,r,r,I),this.foamMap.wrapS=D,this.foamMap.wrapT=D,this.foamMap.needsUpdate=!0}createUnifiedWaterMaterial(){const e=`
      uniform float time;
      
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vAnimatedUv;
      
      void main() {
        vUv = uv;
        
        // Animate UV for more visible flowing water effect
        vAnimatedUv = uv + vec2(time * 0.08, time * 0.06);
        
        // No vertex displacement - keep water surface flat
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        
        // For curved water on planet surface, normal should point radially outward from planet center
        // Assume planet center is at origin (0,0,0)
        vWorldNormal = normalize(vWorldPosition);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,t=`
      uniform vec3 waterColor;
      uniform float opacity;
      uniform float time;
      uniform sampler2D normalMap;
      uniform vec3 lightPosition;
      uniform vec3 lightDirection;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vAnimatedUv;
      
      void main() {
        // Sample animated normal map with more visible wave patterns
        vec3 normalMapSample = texture2D(normalMap, vAnimatedUv * 2.0).rgb;
        vec3 perturbedNormal = normalize(vWorldNormal + (normalMapSample - 0.5) * 0.4);
        
        // EXACT SAME lighting calculation as PlanetLayerSystem
        vec3 normal = normalize(perturbedNormal);
        
        // Calculate lighting direction - EXACT COPY from PlanetLayerSystem
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
        }
        
        // Lambertian lighting calculation with smooth day/night transition
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Rim lighting for enhanced visibility
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Final lighting calculation (EXACT same as PlanetLayerSystem)
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        
        // Water-specific effects on top of base lighting
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.0);
        
        // Base water color (no foam textures inside - only clean water)
        vec3 finalColor = waterColor;
        
        // Apply EXACT same lighting as planet surface
        finalColor *= totalLight;
        
        // Add water-specific fresnel highlight
        finalColor += vec3(0.2, 0.3, 0.4) * fresnel * 0.3;
        
        // More visible shimmer effect for wave animation
        float shimmer = sin(time * 2.5 + vWorldPosition.x * 30.0 + vWorldPosition.z * 25.0) * 0.08 + 0.92;
        finalColor *= shimmer;
        
        // Calculate edge softness based on UV distance from center
        vec2 centerDist = vUv - vec2(0.5, 0.5);
        float distFromCenter = length(centerDist) * 2.0; // Normalize to 0-1 range
        
        // Add noise to the edge for more organic appearance
        float edgeNoise = sin(vUv.x * 20.0 + time * 0.5) * cos(vUv.y * 20.0 - time * 0.3) * 0.1;
        distFromCenter += edgeNoise;
        
        // Create very smooth edge falloff for organic appearance
        float edgeSoftness = 1.0 - smoothstep(0.5, 0.95, distFromCenter);
        
        // Apply additional smoothing at the very edge
        edgeSoftness = pow(edgeSoftness, 1.5);
        
        float finalOpacity = opacity * edgeSoftness;
        
        gl_FragColor = vec4(finalColor, finalOpacity);
      }
    `;this.waterMaterial=new V({vertexShader:e,fragmentShader:t,uniforms:{waterColor:{value:new C(.15,.55,.85)},opacity:{value:.8},time:{value:0},normalMap:{value:this.normalMap},lightPosition:{value:new y(0,0,0)},lightDirection:{value:new y(1,1,1).normalize()},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:mt,depthWrite:!1,depthTest:!0,blending:ht,blendSrc:ct,blendDst:lt,blendEquation:nt})}generateWaterBodies(){this.params.water_bodies&&this.params.water_bodies.length>0?this.params.water_bodies.forEach((e,t)=>{const s=this.createTextureBasedWaterBody(e,t);s&&(this.waterBodyMeshes.push(s),this.waterGroup.add(s))}):this.generateProceduralWaterBodies()}createTextureBasedWaterBody(e,t){if(!e.position_3d||e.position_3d.length!==3)return console.warn(`Water body ${t} missing valid position_3d`),null;const f=new y().fromArray(e.position_3d).normalize(),i=(e.radius||this.rng.uniform(S.WATER_BODY_RADIUS.min,S.WATER_BODY_RADIUS.max))*this.planetRadius,l=24,a=new pt(i*2,i*2,l,l),n=this.rng.uniform(0,Math.PI*2),p=a.attributes.uv,c=Math.cos(n),g=Math.sin(n);for(let o=0;o<p.count;o++){const m=p.getX(o)-.5,d=p.getY(o)-.5;p.setXY(o,m*c-d*g+.5,m*g+d*c+.5)}p.needsUpdate=!0;const u=a.attributes.position,h=a.attributes.uv,M=[],W=[],x=[],A=new Map;let L=0;for(let o=0;o<u.count;o++){const m=u.getX(o),d=u.getY(o),v=u.getZ(o);h.getX(o),h.getY(o);const R=Math.sqrt(m*m+d*d),b=Math.atan2(d,m),J=t%5;let w=!1;switch(J){case 0:const E=1+Math.sin(t)*.3,N=1+Math.cos(t*1.3)*.3,O=t*.7,X=m*Math.cos(O)-d*Math.sin(O),G=m*Math.sin(O)+d*Math.cos(O);w=X*X/(i*E*i*E)+G*G/(i*N*i*N)<=1;break;case 1:const K=i*(.8+Math.sin(b*2+t)*.2),Q=Math.cos(b+Math.PI+t)*i*.3,tt=Math.max(K+Q,i*.5);w=R<=tt;break;case 2:const et=i*(.8+Math.sin(b*1.5+t)*.2+Math.cos(b*2.3+t*1.7)*.15);w=R<=et;break;case 3:const k=b-t,at=i*((1+Math.cos(k))*.4+.4),it=Math.sin(k*3)*i*.1;w=R<=at+it;break;case 4:const j=b-t*.5,ot=i*Math.max(.4,1-Math.cos(j*1.5)*.4),st=Math.sin(j*6)*i*.05;w=R<=ot+st;break}if(w){const E=Math.sin(b*12+t*3)*.05;w=R*(1+E)<=i*1.1}w&&(M.push(m,d,v),W.push(h.getX(o),h.getY(o)),A.set(o,L),L++)}const P=a.getIndex();if(P)for(let o=0;o<P.count;o+=3){const m=P.getX(o),d=P.getX(o+1),v=P.getX(o+2);A.has(m)&&A.has(d)&&A.has(v)&&x.push(A.get(m),A.get(d),A.get(v))}a.setAttribute("position",new q(M,3)),a.setAttribute("uv",new q(W,2)),a.setIndex(x),a.computeVertexNormals();const z=this.waterMaterial.clone();z.uniforms.opacity.value=e.opacity||.8,z.uniforms.normalMap.value=this.normalMap;const _=new ft(a,z);this.materials.push(z);const B=f.clone(),T=new y;Math.abs(B.y)<.99?T.crossVectors(B,new y(0,1,0)).normalize():T.crossVectors(B,new y(1,0,0)).normalize();const $=new y().crossVectors(T,B).normalize(),U=a.attributes.position,H=f.clone().multiplyScalar(this.planetRadius*1.001);for(let o=0;o<U.count;o++){const m=new y;m.fromBufferAttribute(U,o);const v=H.clone().add(T.clone().multiplyScalar(m.x)).add($.clone().multiplyScalar(m.y)).normalize().multiplyScalar(this.planetRadius*1.001);U.setXYZ(o,v.x,v.y,v.z)}return U.needsUpdate=!0,a.computeVertexNormals(),_.position.set(0,0,0),_.userData={baseSize:i,uvOffset:new ut(this.rng.uniform(0,1),this.rng.uniform(0,1)),animationSpeed:this.rng.uniform(.8,1.2),index:t},_.renderOrder=1002,_.castShadow=!1,_.receiveShadow=!0,_}generateProceduralWaterBodies(){const e=this.rng.randint(S.WATER_BODY_COUNT.min,S.WATER_BODY_COUNT.max);for(let t=0;t<e;t++){const s=this.rng.uniform(S.WATER_BODY_RADIUS.min,S.WATER_BODY_RADIUS.max),f={position_3d:this.generateRandomSurfacePoint(),radius:s,depth:.025,opacity:this.rng.uniform(S.WATER_BODY_OPACITY.min,S.WATER_BODY_OPACITY.max)},r=this.createTextureBasedWaterBody(f,t);r&&(this.waterBodyMeshes.push(r),this.waterGroup.add(r))}}generateRandomSurfacePoint(){const e=this.rng.uniform(.3,Math.PI-.3),t=this.rng.uniform(0,Math.PI*2),s=Math.sin(e)*Math.cos(t),f=Math.cos(e),r=Math.sin(e)*Math.sin(t);return[s,f,r]}addToScene(e,t){t&&this.waterGroup.position.copy(t),e.add(this.waterGroup)}updateFromThreeLight(e){if(this.materials.forEach(t=>{if(t instanceof V&&t.uniforms&&(t.uniforms.lightPosition&&t.uniforms.lightPosition.value.copy(e.position),t.uniforms.lightDirection)){const s=e.target.position.clone().sub(e.position).normalize();t.uniforms.lightDirection.value.copy(s)}}),this.waterMaterial&&this.waterMaterial.uniforms&&(this.waterMaterial.uniforms.lightPosition&&this.waterMaterial.uniforms.lightPosition.value.copy(e.position),this.waterMaterial.uniforms.lightDirection)){const t=e.target.position.clone().sub(e.position).normalize();this.waterMaterial.uniforms.lightDirection.value.copy(t)}}update(e){this.animationTime+=e,this.waterMaterial&&this.waterMaterial.uniforms&&(this.waterMaterial.uniforms.time.value=this.animationTime),this.materials.forEach(t=>{t instanceof V&&t.uniforms&&(t.uniforms.time.value=this.animationTime)}),this.normalMap&&(this.normalMap.offset.x+=e*.02,this.normalMap.offset.y+=e*.015,this.normalMap.needsUpdate=!0),this.foamMap&&(this.foamMap.offset.x+=e*.025,this.foamMap.offset.y+=e*.018,this.foamMap.needsUpdate=!0)}updateParams(e){if(this.params={...this.params,...e},e.waterColor&&this.waterMaterial){const t=e.waterColor instanceof C?e.waterColor:new C().fromArray(e.waterColor);this.waterMaterial.uniforms.waterColor.value.copy(t)}}getObject3D(){return this.waterGroup}dispose(){this.normalMap&&this.normalMap.dispose(),this.displacementMap&&this.displacementMap.dispose(),this.foamMap&&this.foamMap.dispose(),this.waterMaterial&&this.waterMaterial.dispose(),this.waterBodyMeshes.forEach(e=>{e.geometry&&e.geometry.dispose()}),this.waterBodyMeshes=[],this.waterGroup.clear()}}function vt(F,e,t,s){const r=(t||Math.floor(Math.random()*1e6))+1e4,i=new Z(r);let a=(e.water_features||{}).water_bodies||[];if(s==="desert"){const c=i.uniform(3,5);if(i.uniform(0,100)<=c){const u=i.uniform(0,2*Math.PI),h=Math.acos(i.uniform(-1,1));a=[{position_3d:[Math.sin(h)*Math.cos(u),Math.sin(h)*Math.sin(u),Math.cos(h)],radius:i.uniform(.08,.15),depth:i.uniform(.005,.015),opacity:i.uniform(.75,.85),shape_type:"lake"}]}else return null}a.length===0&&e.blue_patches&&e.blue_patches.length>0&&(a=e.blue_patches.map(c=>({position_3d:c.position_3d,radius:c.size||.1,depth:c.height||.02,opacity:c.color?.[3]||.8,shape_type:"lake"})));const n={water_bodies:a,waterColor:new C(.2,.5,.9),globalIrregularity:.7,seed:r};return new dt(F,n)}export{vt as c};
