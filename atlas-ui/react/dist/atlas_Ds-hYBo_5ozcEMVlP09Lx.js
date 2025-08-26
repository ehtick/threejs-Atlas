import{S as st}from"./atlas_BRxuskCzJ8TfEkc5-9Hxt.js";import{C as P,G as rt,v as F,w as nt,R as C,x as k,S as Y,y as lt,O as ct,z as ht,H as mt,D as dt,V as v,d as ut,g as $,M as ft,f as pt}from"./atlas_Dg_ET6FsNHb7HwLobcNa6.js";const y={WATER_BODY_COUNT:{min:4,max:8},WATER_BODY_RADIUS:{min:.07,max:.35},WATER_BODY_OPACITY:{min:.6,max:.85}};class gt{waterGroup;waterBodyMeshes=[];params;rng;materials=[];planetRadius;waterMaterial;normalMap;displacementMap;foamMap;animationTime=0;constructor(e,t={}){console.log("💧 CREATING SuperEarthWaterFeaturesEffect - TEXTURE-BASED VERSION"),console.log("Planet radius:",e),console.log("Params:",t);const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new st(i),this.planetRadius=e,this.params={water_bodies:t.water_bodies||[],waterColor:t.waterColor||new P(.2,.5,.9),globalIrregularity:t.globalIrregularity||.7,seed:i,...t},this.waterGroup=new rt,this.generateWaterTextures(),this.createUnifiedWaterMaterial(),console.log("Creating texture-based water bodies..."),this.generateWaterBodies(),console.log(`✅ Created ${this.waterBodyMeshes.length} texture-based water bodies`)}generateWaterTextures(){const t=new Uint8Array(196608);for(let r=0;r<256;r++)for(let a=0;a<256;a++){const f=(r*256+a)*3,c=r/256*Math.PI*6,d=a/256*Math.PI*6,p=Math.sin(c*1+d*.5)*.5,u=Math.sin(c*2.3-d*1.1)*.3,g=Math.sin(c*.7+d*1.9)*.2,R=(p+u)*.5+.5,W=(u+g)*.5+.5,E=1;t[f]=R*255,t[f+1]=W*255,t[f+2]=E*255}this.normalMap=new F(t,256,256,nt),this.normalMap.wrapS=C,this.normalMap.wrapT=C,this.normalMap.needsUpdate=!0;const i=128,m=new Uint8Array(i*i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const f=r*i+a,c=r/i*Math.PI*2,d=a/i*Math.PI*2,p=Math.sin(c*2+d)*.3,u=Math.cos(c-d*2)*.3,g=(p+u)*.25+.5;m[f]=Math.max(0,Math.min(255,g*255))}this.displacementMap=new F(m,i,i,k),this.displacementMap.wrapS=C,this.displacementMap.wrapT=C,this.displacementMap.needsUpdate=!0;const n=128,s=new Uint8Array(n*n);for(let r=0;r<n;r++)for(let a=0;a<n;a++){const f=r*n+a,c=r/n*Math.PI*6,d=a/n*Math.PI*6,p=(Math.sin(c)*Math.cos(d)+1)*.5,u=p>.6?p*.8:0;s[f]=u*255}this.foamMap=new F(s,n,n,k),this.foamMap.wrapS=C,this.foamMap.wrapT=C,this.foamMap.needsUpdate=!0}createUnifiedWaterMaterial(){const e=`
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
    `;this.waterMaterial=new Y({vertexShader:e,fragmentShader:t,uniforms:{waterColor:{value:new P(.15,.55,.85)},opacity:{value:.8},time:{value:0},normalMap:{value:this.normalMap},lightPosition:{value:new v(0,0,0)},lightDirection:{value:new v(1,1,1).normalize()},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:dt,depthWrite:!1,depthTest:!0,blending:mt,blendSrc:ht,blendDst:ct,blendEquation:lt})}generateWaterBodies(){this.params.water_bodies&&this.params.water_bodies.length>0?(console.log(`Using ${this.params.water_bodies.length} water bodies from data`),this.params.water_bodies.forEach((e,t)=>{const i=this.createTextureBasedWaterBody(e,t);i&&(this.waterBodyMeshes.push(i),this.waterGroup.add(i))})):(console.log("No water body data provided, generating procedural water bodies"),this.generateProceduralWaterBodies())}createTextureBasedWaterBody(e,t){if(!e.position_3d||e.position_3d.length!==3)return console.warn(`Water body ${t} missing valid position_3d`),null;const m=new v().fromArray(e.position_3d).normalize(),s=(e.radius||this.rng.uniform(y.WATER_BODY_RADIUS.min,y.WATER_BODY_RADIUS.max))*this.planetRadius,r=24,a=new ut(s*2,s*2,r,r),f=this.rng.uniform(0,Math.PI*2),c=a.attributes.uv,d=Math.cos(f),p=Math.sin(f);for(let o=0;o<c.count;o++){const l=c.getX(o)-.5,h=c.getY(o)-.5;c.setXY(o,l*d-h*p+.5,l*p+h*d+.5)}c.needsUpdate=!0;const u=a.attributes.position,g=a.attributes.uv,R=[],W=[],E=[],S=new Map;let I=0;for(let o=0;o<u.count;o++){const l=u.getX(o),h=u.getY(o),w=u.getZ(o);g.getX(o),g.getY(o);const x=Math.sqrt(l*l+h*h),A=Math.atan2(h,l),H=t%5;let M=!1;switch(H){case 0:const U=1+Math.sin(t)*.3,N=1+Math.cos(t*1.3)*.3,O=t*.7,L=l*Math.cos(O)-h*Math.sin(O),G=l*Math.sin(O)+h*Math.cos(O);M=L*L/(s*U*s*U)+G*G/(s*N*s*N)<=1;break;case 1:const J=s*(.8+Math.sin(A*2+t)*.2),K=Math.cos(A+Math.PI+t)*s*.3,Q=Math.max(J+K,s*.5);M=x<=Q;break;case 2:const tt=s*(.8+Math.sin(A*1.5+t)*.2+Math.cos(A*2.3+t*1.7)*.15);M=x<=tt;break;case 3:const X=A-t,et=s*((1+Math.cos(X))*.4+.4),at=Math.sin(X*3)*s*.1;M=x<=et+at;break;case 4:const j=A-t*.5,ot=s*Math.max(.4,1-Math.cos(j*1.5)*.4),it=Math.sin(j*6)*s*.05;M=x<=ot+it;break}if(M){const U=Math.sin(A*12+t*3)*.05;M=x*(1+U)<=s*1.1}M&&(R.push(l,h,w),W.push(g.getX(o),g.getY(o)),S.set(o,I),I++)}const D=a.getIndex();if(D)for(let o=0;o<D.count;o+=3){const l=D.getX(o),h=D.getX(o+1),w=D.getX(o+2);S.has(l)&&S.has(h)&&S.has(w)&&E.push(S.get(l),S.get(h),S.get(w))}a.setAttribute("position",new $(R,3)),a.setAttribute("uv",new $(W,2)),a.setIndex(E),a.computeVertexNormals();const T=this.waterMaterial.clone();T.uniforms.opacity.value=e.opacity||.8,T.uniforms.normalMap.value=this.normalMap;const b=new ft(a,T);this.materials.push(T);const _=m.clone(),B=new v;Math.abs(_.y)<.99?B.crossVectors(_,new v(0,1,0)).normalize():B.crossVectors(_,new v(1,0,0)).normalize();const q=new v().crossVectors(B,_).normalize(),z=a.attributes.position,Z=m.clone().multiplyScalar(this.planetRadius*1.001);for(let o=0;o<z.count;o++){const l=new v;l.fromBufferAttribute(z,o);const w=Z.clone().add(B.clone().multiplyScalar(l.x)).add(q.clone().multiplyScalar(l.y)).normalize().multiplyScalar(this.planetRadius*1.001);z.setXYZ(o,w.x,w.y,w.z)}return z.needsUpdate=!0,a.computeVertexNormals(),b.position.set(0,0,0),b.userData={baseSize:s,uvOffset:new pt(this.rng.uniform(0,1),this.rng.uniform(0,1)),animationSpeed:this.rng.uniform(.8,1.2),index:t},b.renderOrder=1002,b.castShadow=!1,b.receiveShadow=!0,console.log(`Created texture-based water body ${t}`),b}generateProceduralWaterBodies(){const e=this.rng.randint(y.WATER_BODY_COUNT.min,y.WATER_BODY_COUNT.max);console.log(`Generating ${e} procedural texture-based water bodies`);for(let t=0;t<e;t++){const i=this.rng.uniform(y.WATER_BODY_RADIUS.min,y.WATER_BODY_RADIUS.max),m={position_3d:this.generateRandomSurfacePoint(),radius:i,depth:.025,opacity:this.rng.uniform(y.WATER_BODY_OPACITY.min,y.WATER_BODY_OPACITY.max)},n=this.createTextureBasedWaterBody(m,t);n&&(this.waterBodyMeshes.push(n),this.waterGroup.add(n))}}generateRandomSurfacePoint(){const e=this.rng.uniform(.3,Math.PI-.3),t=this.rng.uniform(0,Math.PI*2),i=Math.sin(e)*Math.cos(t),m=Math.cos(e),n=Math.sin(e)*Math.sin(t);return[i,m,n]}addToScene(e,t){console.log("💧 Adding texture-based water features to scene"),t&&this.waterGroup.position.copy(t),e.add(this.waterGroup),console.log(`✅ Added ${this.waterBodyMeshes.length} water bodies to scene`)}updateFromThreeLight(e){if(this.materials.forEach(t=>{if(t instanceof Y&&t.uniforms&&(t.uniforms.lightPosition&&t.uniforms.lightPosition.value.copy(e.position),t.uniforms.lightDirection)){const i=e.target.position.clone().sub(e.position).normalize();t.uniforms.lightDirection.value.copy(i)}}),this.waterMaterial&&this.waterMaterial.uniforms&&(this.waterMaterial.uniforms.lightPosition&&this.waterMaterial.uniforms.lightPosition.value.copy(e.position),this.waterMaterial.uniforms.lightDirection)){const t=e.target.position.clone().sub(e.position).normalize();this.waterMaterial.uniforms.lightDirection.value.copy(t)}console.log("🌊 Updated water lighting from DirectionalLight - position:",e.position)}update(e){this.animationTime+=e,this.waterMaterial&&this.waterMaterial.uniforms&&(this.waterMaterial.uniforms.time.value=this.animationTime),this.materials.forEach(t=>{t instanceof Y&&t.uniforms&&(t.uniforms.time.value=this.animationTime)}),this.normalMap&&(this.normalMap.offset.x+=e*.02,this.normalMap.offset.y+=e*.015,this.normalMap.needsUpdate=!0),this.foamMap&&(this.foamMap.offset.x+=e*.025,this.foamMap.offset.y+=e*.018,this.foamMap.needsUpdate=!0)}updateParams(e){if(this.params={...this.params,...e},e.waterColor&&this.waterMaterial){const t=e.waterColor instanceof P?e.waterColor:new P().fromArray(e.waterColor);this.waterMaterial.uniforms.waterColor.value.copy(t)}}getObject3D(){return this.waterGroup}dispose(){this.normalMap&&this.normalMap.dispose(),this.displacementMap&&this.displacementMap.dispose(),this.foamMap&&this.foamMap.dispose(),this.waterMaterial&&this.waterMaterial.dispose(),this.waterBodyMeshes.forEach(e=>{e.geometry&&e.geometry.dispose()}),this.waterBodyMeshes=[],this.waterGroup.clear()}}function vt(V,e,t){console.log("💧 Creating Texture-Based SuperEarthWaterFeatures from Python data"),console.log("Surface data:",e);const m=(t||Math.floor(Math.random()*1e6))+1e4,s=(e.water_features||{}).water_bodies||[];console.log("Water bodies from Python:",s);const r={water_bodies:s,waterColor:new P(.2,.5,.9),globalIrregularity:.7,seed:m};console.log("Creating texture-based SuperEarthWaterFeaturesEffect with params:",r);const a=new gt(V,r);return console.log("✅ Texture-based SuperEarthWaterFeaturesEffect created successfully"),a}export{vt as c};
