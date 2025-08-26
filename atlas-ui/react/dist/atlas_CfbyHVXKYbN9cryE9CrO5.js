import{S as X}from"./atlas_CtjRlAX5HR7UzNXl58rox.js";import{C as b,G as j,v as T,w as $,R as x,x as z,S as H,N as Z,D as k,V as M,d as q,g as I,M as J,f as K}from"./atlas_C6UiBtzYYNZp5NEn_kUjD.js";const f={WATER_BODY_COUNT:{min:4,max:8},WATER_BODY_RADIUS:{min:.07,max:.35},WATER_BODY_DEPTH:{min:.01,max:.04},WATER_BODY_OPACITY:{min:.6,max:.8}};class Q{waterGroup;waterBodyMeshes=[];params;rng;planetRadius;waterMaterial;normalMap;displacementMap;foamMap;animationTime=0;constructor(t,e={}){console.log("💧 CREATING SuperEarthWaterFeaturesEffect - TEXTURE-BASED VERSION"),console.log("Planet radius:",t),console.log("Params:",e);const i=e.seed||Math.floor(Math.random()*1e6);this.rng=new X(i),this.planetRadius=t,this.params={water_bodies:e.water_bodies||[],waterColor:e.waterColor||new b(.2,.5,.9),globalIrregularity:e.globalIrregularity||.7,seed:i,...e},this.waterGroup=new j,this.generateWaterTextures(),this.createUnifiedWaterMaterial(),console.log("Creating texture-based water bodies..."),this.generateWaterBodies(),console.log(`✅ Created ${this.waterBodyMeshes.length} texture-based water bodies`)}generateWaterTextures(){const e=new Uint8Array(196608);for(let r=0;r<256;r++)for(let a=0;a<256;a++){const d=(r*256+a)*3,l=r/256*Math.PI*4,p=a/256*Math.PI*4,g=Math.sin(l)*Math.cos(p)*.3,u=Math.sin(l*1.5+p*.5)*.2,y=g*.5+.5,D=u*.5+.5,P=1;e[d]=y*255,e[d+1]=D*255,e[d+2]=P*255}this.normalMap=new T(e,256,256,$),this.normalMap.wrapS=x,this.normalMap.wrapT=x,this.normalMap.needsUpdate=!0;const i=128,c=new Uint8Array(i*i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){const d=r*i+a,l=r/i*Math.PI*2,p=a/i*Math.PI*2,g=Math.sin(l*2+p)*.3,u=Math.cos(l-p*2)*.3,y=(g+u)*.25+.5;c[d]=Math.max(0,Math.min(255,y*255))}this.displacementMap=new T(c,i,i,z),this.displacementMap.wrapS=x,this.displacementMap.wrapT=x,this.displacementMap.needsUpdate=!0;const s=128,h=new Uint8Array(s*s);for(let r=0;r<s;r++)for(let a=0;a<s;a++){const d=r*s+a,l=r/s*Math.PI*6,p=a/s*Math.PI*6,g=(Math.sin(l)*Math.cos(p)+1)*.5,u=g>.6?g*.8:0;h[d]=u*255}this.foamMap=new T(h,s,s,z),this.foamMap.wrapS=x,this.foamMap.wrapT=x,this.foamMap.needsUpdate=!0}createUnifiedWaterMaterial(){const t=`
      uniform float time;
      uniform sampler2D displacementMap;
      uniform float displacementScale;
      
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vAnimatedUv;
      
      void main() {
        vUv = uv;
        
        // Animate UV for flowing water effect
        vAnimatedUv = uv + vec2(time * 0.02, time * 0.015);
        
        // Sample displacement for vertex height
        float displacement = texture2D(displacementMap, vAnimatedUv).r;
        
        // Apply displacement along normal
        vec3 displacedPosition = position + normal * displacement * displacementScale;
        
        vec4 worldPos = modelMatrix * vec4(displacedPosition, 1.0);
        vWorldPosition = worldPos.xyz;
        
        // For curved water on planet surface, normal should point radially outward from planet center
        // Assume planet center is at origin (0,0,0)
        vWorldNormal = normalize(vWorldPosition);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
      }
    `,e=`
      uniform vec3 waterColor;
      uniform vec3 foamColor;
      uniform float opacity;
      uniform float time;
      uniform sampler2D normalMap;
      uniform sampler2D foamMap;
      uniform vec3 lightPosition;
      uniform vec3 lightDirection;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vAnimatedUv;
      
      void main() {
        // Sample animated normal map
        vec3 normalMapSample = texture2D(normalMap, vAnimatedUv * 3.0).rgb;
        vec3 perturbedNormal = normalize(vWorldNormal + (normalMapSample - 0.5) * 0.2);
        
        // EXACT SAME lighting calculation as PlanetLayerSystem
        vec3 normal = normalize(perturbedNormal);
        
        // Calculate lighting direction - FIX for correct illumination
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          // Point light - direction from surface to light
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          // Directional light - use light direction directly (not negated)
          lightDir = normalize(lightDirection);
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
        
        // Sample foam map
        float foam = texture2D(foamMap, vAnimatedUv * 5.0).r;
        
        // Base water color (no animated variations that break lighting)
        vec3 baseColor = waterColor;
        
        // Combine water color with foam
        vec3 finalColor = mix(baseColor, foamColor, foam * 0.3);
        
        // Apply EXACT same lighting as planet surface
        finalColor *= totalLight;
        
        // Add water-specific fresnel highlight
        finalColor += vec3(0.2, 0.3, 0.4) * fresnel * 0.3;
        
        // Subtle shimmer effect (reduced to not interfere with lighting)
        float shimmer = sin(time * 2.0 + vWorldPosition.x * 15.0 + vWorldPosition.z * 12.0) * 0.05 + 0.95;
        finalColor *= shimmer;
        
        gl_FragColor = vec4(finalColor, opacity * (1.0 - foam * 0.1));
      }
    `;this.waterMaterial=new H({vertexShader:t,fragmentShader:e,uniforms:{waterColor:{value:new b(.15,.55,.85)},foamColor:{value:new b(.9,.95,1)},opacity:{value:.8},time:{value:0},normalMap:{value:this.normalMap},displacementMap:{value:this.displacementMap},foamMap:{value:this.foamMap},displacementScale:{value:0},lightPosition:{value:new M(0,0,0)},lightDirection:{value:new M(1,1,1).normalize()},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:k,depthWrite:!1,depthTest:!0,blending:Z})}generateWaterBodies(){this.params.water_bodies&&this.params.water_bodies.length>0?(console.log(`Using ${this.params.water_bodies.length} water bodies from data`),this.params.water_bodies.forEach((t,e)=>{const i=this.createTextureBasedWaterBody(t,e);i&&(this.waterBodyMeshes.push(i),this.waterGroup.add(i))})):(console.log("No water body data provided, generating procedural water bodies"),this.generateProceduralWaterBodies())}createTextureBasedWaterBody(t,e){if(!t.position_3d||t.position_3d.length!==3)return console.warn(`Water body ${e} missing valid position_3d`),null;const c=new M().fromArray(t.position_3d).normalize(),h=(t.radius||this.rng.uniform(f.WATER_BODY_RADIUS.min,f.WATER_BODY_RADIUS.max))*this.planetRadius,r=24,a=new q(h*2,h*2,r,r),d=this.rng.uniform(0,Math.PI*2),l=a.attributes.uv,p=Math.cos(d),g=Math.sin(d);for(let o=0;o<l.count;o++){const n=l.getX(o)-.5,m=l.getY(o)-.5;l.setXY(o,n*p-m*g+.5,n*g+m*p+.5)}l.needsUpdate=!0;const u=a.attributes.position,y=a.attributes.uv,D=[],P=[],B=[],v=new Map;let U=0;for(let o=0;o<u.count;o++){const n=u.getX(o),m=u.getY(o),w=u.getZ(o),Y=Math.sqrt(n*n+m*m),R=Math.atan2(m,n),V=Math.sin(R*3+e)*.3,F=Math.cos(R*5+e*2)*.2,G=Math.sin(R*7+e*3)*.15,L=h*(.7+V+F+G);Y<=L&&(D.push(n,m,w),P.push(y.getX(o),y.getY(o)),v.set(o,U),U++)}const A=a.getIndex();if(A)for(let o=0;o<A.count;o+=3){const n=A.getX(o),m=A.getX(o+1),w=A.getX(o+2);v.has(n)&&v.has(m)&&v.has(w)&&B.push(v.get(n),v.get(m),v.get(w))}a.setAttribute("position",new I(D,3)),a.setAttribute("uv",new I(P,2)),a.setIndex(B),a.computeVertexNormals();const S=new J(a,this.waterMaterial),W=c.clone(),C=new M;Math.abs(W.y)<.99?C.crossVectors(W,new M(0,1,0)).normalize():C.crossVectors(W,new M(1,0,0)).normalize();const O=new M().crossVectors(C,W).normalize(),_=a.attributes.position,N=c.clone().multiplyScalar(this.planetRadius*1.01);for(let o=0;o<_.count;o++){const n=new M;n.fromBufferAttribute(_,o);const w=N.clone().add(C.clone().multiplyScalar(n.x)).add(O.clone().multiplyScalar(n.y)).normalize().multiplyScalar(this.planetRadius*1.015);_.setXYZ(o,w.x,w.y,w.z)}return _.needsUpdate=!0,a.computeVertexNormals(),S.position.set(0,0,0),S.userData={baseSize:h,uvOffset:new K(this.rng.uniform(0,1),this.rng.uniform(0,1)),animationSpeed:this.rng.uniform(.8,1.2),index:e},S.renderOrder=1005,S.castShadow=!1,S.receiveShadow=!0,console.log(`Created texture-based water body ${e}`),S}generateProceduralWaterBodies(){const t=this.rng.randint(f.WATER_BODY_COUNT.min,f.WATER_BODY_COUNT.max);console.log(`Generating ${t} procedural texture-based water bodies`);for(let e=0;e<t;e++){const i=this.rng.uniform(f.WATER_BODY_RADIUS.min,f.WATER_BODY_RADIUS.max),c={position_3d:this.generateRandomSurfacePoint(),radius:i,depth:this.rng.uniform(f.WATER_BODY_DEPTH.min,f.WATER_BODY_DEPTH.max),opacity:this.rng.uniform(f.WATER_BODY_OPACITY.min,f.WATER_BODY_OPACITY.max)},s=this.createTextureBasedWaterBody(c,e);s&&(this.waterBodyMeshes.push(s),this.waterGroup.add(s))}}generateRandomSurfacePoint(){const t=this.rng.uniform(.3,Math.PI-.3),e=this.rng.uniform(0,Math.PI*2),i=Math.sin(t)*Math.cos(e),c=Math.cos(t),s=Math.sin(t)*Math.sin(e);return[i,c,s]}addToScene(t,e){console.log("💧 Adding texture-based water features to scene"),e&&this.waterGroup.position.copy(e),t.add(this.waterGroup),console.log(`✅ Added ${this.waterBodyMeshes.length} water bodies to scene`)}updateFromThreeLight(t){if(this.waterMaterial&&this.waterMaterial.uniforms&&(this.waterMaterial.uniforms.lightPosition&&this.waterMaterial.uniforms.lightPosition.value.copy(t.position),this.waterMaterial.uniforms.lightDirection)){const e=t.target.position.clone().sub(t.position).normalize();this.waterMaterial.uniforms.lightDirection.value.copy(e)}console.log("🌊 Updated water lighting from DirectionalLight - position:",t.position)}update(t){this.animationTime+=t,this.waterMaterial&&this.waterMaterial.uniforms&&(this.waterMaterial.uniforms.time.value=this.animationTime,this.waterMaterial.uniforms.displacementScale.value=0,this.waterMaterial.uniforms.opacity.value=.75),this.normalMap&&(this.normalMap.offset.x+=t*.008,this.normalMap.offset.y+=t*.006,this.normalMap.needsUpdate=!0),this.foamMap&&(this.foamMap.offset.x+=t*.012,this.foamMap.offset.y+=t*.009,this.foamMap.needsUpdate=!0),this.waterBodyMeshes.forEach(e=>{e.userData.animationSpeed&&e.scale.setScalar(1)})}updateParams(t){if(this.params={...this.params,...t},t.waterColor&&this.waterMaterial){const e=t.waterColor instanceof b?t.waterColor:new b().fromArray(t.waterColor);this.waterMaterial.uniforms.waterColor.value.copy(e)}}getObject3D(){return this.waterGroup}dispose(){this.normalMap&&this.normalMap.dispose(),this.displacementMap&&this.displacementMap.dispose(),this.foamMap&&this.foamMap.dispose(),this.waterMaterial&&this.waterMaterial.dispose(),this.waterBodyMeshes.forEach(t=>{t.geometry&&t.geometry.dispose()}),this.waterBodyMeshes=[],this.waterGroup.clear()}}function at(E,t,e){console.log("💧 Creating Texture-Based SuperEarthWaterFeatures from Python data"),console.log("Surface data:",t);const c=(e||Math.floor(Math.random()*1e6))+1e4,h=(t.water_features||{}).water_bodies||[];console.log("Water bodies from Python:",h);const r={water_bodies:h,waterColor:new b(.2,.5,.9),globalIrregularity:.7,seed:c};console.log("Creating texture-based SuperEarthWaterFeaturesEffect with params:",r);const a=new Q(E,r);return console.log("✅ Texture-based SuperEarthWaterFeaturesEffect created successfully"),a}export{at as c};
