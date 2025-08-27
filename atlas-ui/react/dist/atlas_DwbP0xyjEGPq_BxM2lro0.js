import{S as Z}from"./atlas_BRxuskCzJ8TfEkc5-9Hxt.js";import{C as P,G as rt,v as Y,w as nt,R as _,x as j,S as I,y as lt,O as ct,z as ht,H as mt,D as pt,V as w,d as ft,g as q,M as ut,f as dt}from"./atlas_Dg_ET6FsNHb7HwLobcNa6.js";const y={WATER_BODY_COUNT:{min:4,max:8},WATER_BODY_RADIUS:{min:.07,max:.35},WATER_BODY_OPACITY:{min:.6,max:.85}};class gt{waterGroup;waterBodyMeshes=[];params;rng;materials=[];planetRadius;waterMaterial;normalMap;displacementMap;foamMap;animationTime=0;constructor(e,t={}){const s=t.seed||Math.floor(Math.random()*1e6);this.rng=new Z(s),this.planetRadius=e,this.params={water_bodies:t.water_bodies||[],waterColor:t.waterColor||new P(.2,.5,.9),globalIrregularity:t.globalIrregularity||.7,seed:s,...t},this.waterGroup=new rt,this.generateWaterTextures(),this.createUnifiedWaterMaterial(),this.generateWaterBodies()}generateWaterTextures(){const t=new Uint8Array(196608);for(let n=0;n<256;n++)for(let a=0;a<256;a++){const f=(n*256+a)*3,h=n/256*Math.PI*6,l=a/256*Math.PI*6,g=Math.sin(h*1+l*.5)*.5,m=Math.sin(h*2.3-l*1.1)*.3,u=Math.sin(h*.7+l*1.9)*.2,C=(g+m)*.5+.5,W=(m+u)*.5+.5,x=1;t[f]=C*255,t[f+1]=W*255,t[f+2]=x*255}this.normalMap=new Y(t,256,256,nt),this.normalMap.wrapS=_,this.normalMap.wrapT=_,this.normalMap.needsUpdate=!0;const s=128,d=new Uint8Array(s*s);for(let n=0;n<s;n++)for(let a=0;a<s;a++){const f=n*s+a,h=n/s*Math.PI*2,l=a/s*Math.PI*2,g=Math.sin(h*2+l)*.3,m=Math.cos(h-l*2)*.3,u=(g+m)*.25+.5;d[f]=Math.max(0,Math.min(255,u*255))}this.displacementMap=new Y(d,s,s,j),this.displacementMap.wrapS=_,this.displacementMap.wrapT=_,this.displacementMap.needsUpdate=!0;const r=128,i=new Uint8Array(r*r);for(let n=0;n<r;n++)for(let a=0;a<r;a++){const f=n*r+a,h=n/r*Math.PI*6,l=a/r*Math.PI*6,g=(Math.sin(h)*Math.cos(l)+1)*.5,m=g>.6?g*.8:0;i[f]=m*255}this.foamMap=new Y(i,r,r,j),this.foamMap.wrapS=_,this.foamMap.wrapT=_,this.foamMap.needsUpdate=!0}createUnifiedWaterMaterial(){const e=`
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
    `;this.waterMaterial=new I({vertexShader:e,fragmentShader:t,uniforms:{waterColor:{value:new P(.15,.55,.85)},opacity:{value:.8},time:{value:0},normalMap:{value:this.normalMap},lightPosition:{value:new w(0,0,0)},lightDirection:{value:new w(1,1,1).normalize()},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:pt,depthWrite:!1,depthTest:!0,blending:mt,blendSrc:ht,blendDst:ct,blendEquation:lt})}generateWaterBodies(){this.params.water_bodies&&this.params.water_bodies.length>0?this.params.water_bodies.forEach((e,t)=>{const s=this.createTextureBasedWaterBody(e,t);s&&(this.waterBodyMeshes.push(s),this.waterGroup.add(s))}):this.generateProceduralWaterBodies()}createTextureBasedWaterBody(e,t){if(!e.position_3d||e.position_3d.length!==3)return console.warn(`Water body ${t} missing valid position_3d`),null;const d=new w().fromArray(e.position_3d).normalize(),i=(e.radius||this.rng.uniform(y.WATER_BODY_RADIUS.min,y.WATER_BODY_RADIUS.max))*this.planetRadius,n=24,a=new ft(i*2,i*2,n,n),f=this.rng.uniform(0,Math.PI*2),h=a.attributes.uv,l=Math.cos(f),g=Math.sin(f);for(let o=0;o<h.count;o++){const c=h.getX(o)-.5,p=h.getY(o)-.5;h.setXY(o,c*l-p*g+.5,c*g+p*l+.5)}h.needsUpdate=!0;const m=a.attributes.position,u=a.attributes.uv,C=[],W=[],x=[],S=new Map;let F=0;for(let o=0;o<m.count;o++){const c=m.getX(o),p=m.getY(o),M=m.getZ(o);u.getX(o),u.getY(o);const D=Math.sqrt(c*c+p*p),A=Math.atan2(p,c),J=t%5;let v=!1;switch(J){case 0:const E=1+Math.sin(t)*.3,N=1+Math.cos(t*1.3)*.3,O=t*.7,L=c*Math.cos(O)-p*Math.sin(O),X=c*Math.sin(O)+p*Math.cos(O);v=L*L/(i*E*i*E)+X*X/(i*N*i*N)<=1;break;case 1:const K=i*(.8+Math.sin(A*2+t)*.2),Q=Math.cos(A+Math.PI+t)*i*.3,tt=Math.max(K+Q,i*.5);v=D<=tt;break;case 2:const et=i*(.8+Math.sin(A*1.5+t)*.2+Math.cos(A*2.3+t*1.7)*.15);v=D<=et;break;case 3:const G=A-t,at=i*((1+Math.cos(G))*.4+.4),it=Math.sin(G*3)*i*.1;v=D<=at+it;break;case 4:const k=A-t*.5,ot=i*Math.max(.4,1-Math.cos(k*1.5)*.4),st=Math.sin(k*6)*i*.05;v=D<=ot+st;break}if(v){const E=Math.sin(A*12+t*3)*.05;v=D*(1+E)<=i*1.1}v&&(C.push(c,p,M),W.push(u.getX(o),u.getY(o)),S.set(o,F),F++)}const R=a.getIndex();if(R)for(let o=0;o<R.count;o+=3){const c=R.getX(o),p=R.getX(o+1),M=R.getX(o+2);S.has(c)&&S.has(p)&&S.has(M)&&x.push(S.get(c),S.get(p),S.get(M))}a.setAttribute("position",new q(C,3)),a.setAttribute("uv",new q(W,2)),a.setIndex(x),a.computeVertexNormals();const z=this.waterMaterial.clone();z.uniforms.opacity.value=e.opacity||.8,z.uniforms.normalMap.value=this.normalMap;const b=new ut(a,z);this.materials.push(z);const B=d.clone(),T=new w;Math.abs(B.y)<.99?T.crossVectors(B,new w(0,1,0)).normalize():T.crossVectors(B,new w(1,0,0)).normalize();const H=new w().crossVectors(T,B).normalize(),U=a.attributes.position,$=d.clone().multiplyScalar(this.planetRadius*1.001);for(let o=0;o<U.count;o++){const c=new w;c.fromBufferAttribute(U,o);const M=$.clone().add(T.clone().multiplyScalar(c.x)).add(H.clone().multiplyScalar(c.y)).normalize().multiplyScalar(this.planetRadius*1.001);U.setXYZ(o,M.x,M.y,M.z)}return U.needsUpdate=!0,a.computeVertexNormals(),b.position.set(0,0,0),b.userData={baseSize:i,uvOffset:new dt(this.rng.uniform(0,1),this.rng.uniform(0,1)),animationSpeed:this.rng.uniform(.8,1.2),index:t},b.renderOrder=1002,b.castShadow=!1,b.receiveShadow=!0,b}generateProceduralWaterBodies(){const e=this.rng.randint(y.WATER_BODY_COUNT.min,y.WATER_BODY_COUNT.max);for(let t=0;t<e;t++){const s=this.rng.uniform(y.WATER_BODY_RADIUS.min,y.WATER_BODY_RADIUS.max),d={position_3d:this.generateRandomSurfacePoint(),radius:s,depth:.025,opacity:this.rng.uniform(y.WATER_BODY_OPACITY.min,y.WATER_BODY_OPACITY.max)},r=this.createTextureBasedWaterBody(d,t);r&&(this.waterBodyMeshes.push(r),this.waterGroup.add(r))}}generateRandomSurfacePoint(){const e=this.rng.uniform(.3,Math.PI-.3),t=this.rng.uniform(0,Math.PI*2),s=Math.sin(e)*Math.cos(t),d=Math.cos(e),r=Math.sin(e)*Math.sin(t);return[s,d,r]}addToScene(e,t){t&&this.waterGroup.position.copy(t),e.add(this.waterGroup)}updateFromThreeLight(e){if(this.materials.forEach(t=>{if(t instanceof I&&t.uniforms&&(t.uniforms.lightPosition&&t.uniforms.lightPosition.value.copy(e.position),t.uniforms.lightDirection)){const s=e.target.position.clone().sub(e.position).normalize();t.uniforms.lightDirection.value.copy(s)}}),this.waterMaterial&&this.waterMaterial.uniforms&&(this.waterMaterial.uniforms.lightPosition&&this.waterMaterial.uniforms.lightPosition.value.copy(e.position),this.waterMaterial.uniforms.lightDirection)){const t=e.target.position.clone().sub(e.position).normalize();this.waterMaterial.uniforms.lightDirection.value.copy(t)}}update(e){this.animationTime+=e,this.waterMaterial&&this.waterMaterial.uniforms&&(this.waterMaterial.uniforms.time.value=this.animationTime),this.materials.forEach(t=>{t instanceof I&&t.uniforms&&(t.uniforms.time.value=this.animationTime)}),this.normalMap&&(this.normalMap.offset.x+=e*.02,this.normalMap.offset.y+=e*.015,this.normalMap.needsUpdate=!0),this.foamMap&&(this.foamMap.offset.x+=e*.025,this.foamMap.offset.y+=e*.018,this.foamMap.needsUpdate=!0)}updateParams(e){if(this.params={...this.params,...e},e.waterColor&&this.waterMaterial){const t=e.waterColor instanceof P?e.waterColor:new P().fromArray(e.waterColor);this.waterMaterial.uniforms.waterColor.value.copy(t)}}getObject3D(){return this.waterGroup}dispose(){this.normalMap&&this.normalMap.dispose(),this.displacementMap&&this.displacementMap.dispose(),this.foamMap&&this.foamMap.dispose(),this.waterMaterial&&this.waterMaterial.dispose(),this.waterBodyMeshes.forEach(e=>{e.geometry&&e.geometry.dispose()}),this.waterBodyMeshes=[],this.waterGroup.clear()}}function wt(V,e,t,s){const r=(t||Math.floor(Math.random()*1e6))+1e4,i=new Z(r);let a=(e.water_features||{}).water_bodies||[];if(s==="desert"){const l=i.uniform(3,5);if(i.uniform(0,100)<=l){const m=i.uniform(0,2*Math.PI),u=Math.acos(i.uniform(-1,1));a=[{position_3d:[Math.sin(u)*Math.cos(m),Math.sin(u)*Math.sin(m),Math.cos(u)],radius:i.uniform(.08,.15),depth:i.uniform(.005,.015),opacity:i.uniform(.75,.85),shape_type:"lake"}]}else return null}a.length===0&&e.blue_patches&&e.blue_patches.length>0&&(a=e.blue_patches.map(l=>({position_3d:l.position_3d,radius:l.size||.1,depth:l.height||.02,opacity:l.color?.[3]||.8,shape_type:"lake"})));const f={water_bodies:a,waterColor:new P(.2,.5,.9),globalIrregularity:.7,seed:r};return new gt(V,f)}export{wt as c};
