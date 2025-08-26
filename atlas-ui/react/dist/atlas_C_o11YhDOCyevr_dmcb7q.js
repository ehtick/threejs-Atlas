import{S as ae}from"./atlas_CZFakru7GGKiPV4DHwGyu.js";import{C as M,G as ie,V as O,S as G,D as re,M as ne,B as se,g as H,h as le}from"./atlas_BjkcO1_mNssSqp05cLhjd.js";const n={WATER_BODY_COUNT:{min:4,max:8},WATER_BODY_RADIUS:{min:.07,max:.35},WATER_BODY_DEPTH:{min:.01,max:.04},SHAPE_IRREGULARITY:{min:.5,max:1.5},COASTLINE_COMPLEXITY:{min:.3,max:.7},ELONGATION_RATIO:{min:2,max:4},LARGE_BODY_OPACITY:{min:.7,max:.85},MEDIUM_BODY_OPACITY:{min:.65,max:.75},SMALL_BODY_OPACITY:{min:.5,max:.65},LARGE_BODY_THRESHOLD:.2,SMALL_BODY_THRESHOLD:.1};class p{waterGroup;waterBodyMeshes=[];params;rng;materials=[];planetRadius;static geometryCache=new Map;static sharedMaterials=new Map;static MASS_COLORS={lake:new M(.15,.65,.85),pond:new M(.12,.58,.78),elongated:new M(.08,.52,.72),complex:new M(.05,.48,.68)};static AQUIFER_SHIMMER_COLORS={lake:new M(.3,.8,1),pond:new M(.25,.75,.95),elongated:new M(.2,.7,.9),complex:new M(.15,.65,.85)};constructor(e,t={}){console.log("🌊 CREATING SuperEarthWaterFeaturesEffect - ORGANIC VERSION"),console.log("Planet radius:",e),console.log("Params:",t);const o=t.seed||Math.floor(Math.random()*1e6);this.rng=new ae(o),this.planetRadius=e,this.params={water_bodies:t.water_bodies||[],waterColor:t.waterColor||new M(.1,.4,.7),globalIrregularity:t.globalIrregularity||.6,seed:o,...t},this.waterGroup=new ie,console.log("Creating organic water bodies..."),this.generateWaterBodies(),console.log(`✅ Created ${this.waterBodyMeshes.length} organic water bodies`)}generateWaterBodies(){this.params.water_bodies&&this.params.water_bodies.length>0?(console.log(`Using ${this.params.water_bodies.length} water bodies from data`),this.params.water_bodies.forEach((e,t)=>{const o=this.createOrganicWaterBody(e,t);o&&(this.waterBodyMeshes.push(o),this.waterGroup.add(o),console.log(`Added organic water body ${t} at position:`,e.position_3d))})):(console.log("No water body data provided, generating procedural water bodies"),this.generateProceduralWaterBodies())}createOrganicWaterBody(e,t){if(!e.position_3d||e.position_3d.length!==3)return console.warn(`Water body ${t} missing valid position_3d:`,e.position_3d),null;const i=new O().fromArray(e.position_3d).normalize(),r=Math.max(.02,e.radius||.08)*this.planetRadius,a=e.shape_type||this.getRandomShapeType(),h=e.irregularity??this.params.globalIrregularity??.6;console.log(`Creating organic water body ${t} (${a}) with base size:`,r);const m=`${a}_${Math.round(r*100)}_${Math.round(h*10)}`;let l=p.geometryCache.get(m);if(l?l=l.clone():(l=this.generateOrganicWaterGeometry(i,r,a,h,t),l&&p.geometryCache.size<20&&p.geometryCache.set(m,l.clone())),!l)return console.warn(`Failed to generate geometry for water body ${t}`),null;const A="standardWater";let c=p.sharedMaterials.get(A);if(!c){const b=p.MASS_COLORS.lake,L=p.AQUIFER_SHIMMER_COLORS.lake,C=`
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vWorldNormal;
        varying vec2 vUv;
        
        void main() {
          vPosition = position;
          vNormal = normalMatrix * normal;
          vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
          vUv = uv;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,R=`
        uniform vec3 waterColor;
        uniform vec3 shimmerColor;
        uniform float opacity;
        uniform float time;
        uniform vec3 lightPosition;
        uniform vec3 lightDirection;
        uniform float ambientStrength;
        uniform float lightIntensity;
        
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec3 vWorldPosition;
        varying vec3 vWorldNormal;
        varying vec2 vUv;
        
        void main() {
          vec3 normal = normalize(vWorldNormal);
          
          // Calculate lighting direction (same as PlanetLayerSystem)
          vec3 lightDir;
          if (length(lightPosition) > 0.0) {
            lightDir = normalize(lightPosition - vWorldPosition);
          } else {
            lightDir = normalize(-lightDirection);
          }
          
          // Lambertian lighting calculation with smooth day/night transition
          float dotNL = dot(normal, lightDir);
          float dayNight = smoothstep(-0.3, 0.1, dotNL);
          
          // Rim lighting for enhanced visibility
          float rimLight = 1.0 - abs(dotNL);
          rimLight = pow(rimLight, 3.0) * 0.1;
          
          // Water surface shimmer
          float wave = sin(time * 2.0 + vWorldPosition.x * 10.0 + vWorldPosition.z * 8.0) * 0.1 + 0.9;
          vec3 baseWaterColor = mix(waterColor, shimmerColor, wave * 0.3);
          
          // Apply lighting (same calculation as PlanetLayerSystem)
          float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
          vec3 finalColor = baseWaterColor * totalLight;
          
          // Add subtle emissive glow
          finalColor += waterColor * 0.05;
          
          gl_FragColor = vec4(finalColor, opacity);
        }
      `;c=new G({vertexShader:C,fragmentShader:R,uniforms:{waterColor:{value:b.clone()},shimmerColor:{value:L.clone()},opacity:{value:.7},time:{value:0},lightPosition:{value:new O(0,0,0)},lightDirection:{value:new O(1,1,1).normalize()},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:re,depthWrite:!0,depthTest:!0}),p.sharedMaterials.set(A,c)}this.materials.push(c);const d=new ne(l,c);d.renderOrder=1002,d.castShadow=!1,d.receiveShadow=!0,d.userData.baseOpacity=.7,d.userData.shapeType=a;const y=l.attributes.position,w=new Float32Array(y.array.length);return w.set(y.array),d.userData.originalPositions=w,d.userData.waveAmplitude=.001,d.userData.waveSpeed=1,d.userData.baseSize=r,console.log(`Organic water body ${t} created successfully with wave data`),d}generateProceduralWaterBodies(){const e=this.rng.randint(n.WATER_BODY_COUNT.min,n.WATER_BODY_COUNT.max);console.log(`Generating ${e} procedural water bodies using PROCEDURAL_RANGES`);for(let t=0;t<e;t++){const o=this.getRandomShapeType();let i=this.rng.uniform(n.SHAPE_IRREGULARITY.min,n.SHAPE_IRREGULARITY.max);o==="complex"?i=Math.max(i,.6):o==="pond"&&(i=Math.min(i,.4));const r=this.rng.uniform(n.WATER_BODY_RADIUS.min,n.WATER_BODY_RADIUS.max);let a;r>n.LARGE_BODY_THRESHOLD?a=this.rng.uniform(n.LARGE_BODY_OPACITY.min,n.LARGE_BODY_OPACITY.max):r<n.SMALL_BODY_THRESHOLD?a=this.rng.uniform(n.SMALL_BODY_OPACITY.min,n.SMALL_BODY_OPACITY.max):a=this.rng.uniform(n.MEDIUM_BODY_OPACITY.min,n.MEDIUM_BODY_OPACITY.max);const h={position_3d:this.generateRandomSurfacePoint(),radius:r,depth:this.rng.uniform(n.WATER_BODY_DEPTH.min,n.WATER_BODY_DEPTH.max),opacity:a,shape_type:o,irregularity:i,coastline_complexity:this.rng.uniform(n.COASTLINE_COMPLEXITY.min,n.COASTLINE_COMPLEXITY.max)},m=this.createOrganicWaterBody(h,t);m&&(this.waterBodyMeshes.push(m),this.waterGroup.add(m),console.log(`Generated procedural water body ${t} with shape ${o}`))}}getRandomShapeType(){const e=this.rng.uniform(0,1);return e<.4?"lake":e<.7?"pond":e<.9?"elongated":"complex"}generateOrganicWaterGeometry(e,t,o,i,r){const a=new O,h=new O;Math.abs(e.y)<.99?a.crossVectors(e,new O(0,1,0)).normalize():a.crossVectors(e,new O(1,0,0)).normalize(),h.crossVectors(e,a).normalize();let m=1,l=0,A=i*.4;switch(o){case"elongated":m=this.rng.uniform(n.ELONGATION_RATIO.min,n.ELONGATION_RATIO.max),A*=1.2;break;case"complex":l=.3,A*=1.5;break;case"pond":A*=.7;break}const c=Math.max(16,Math.min(64,Math.floor(t*200))),d=(s,u)=>{let _=0,f=1,g=3/Math.max(t*.1,1),D=0;const Y=o==="complex"?3:2;for(let N=0;N<Y;N++){const I=s*g,$=u*g,P=(T,te)=>{const oe=T*12.9898+te*78.233;return Math.sin(oe+r*1e3)*43758.5453%1},S=Math.floor(I),x=Math.floor($),F=I-S,X=$-x,U=T=>T*T*T*(T*(T*6-15)+10),W=U(F),V=U(X),j=P(S,x),q=P(S+1,x),Z=P(S,x+1),K=P(S+1,x+1),Q=j*(1-W)+q*W,J=Z*(1-W)+K*W,ee=Q*(1-V)+J*V;_+=ee*f,D+=f,f*=.5,g*=2}return _/D},y=[],w=[],b=[],L=.2,C=new Map;let R=0;for(let s=0;s<=c;s++)for(let u=0;u<=c;u++){const _=(s/c-.5)*2,f=(u/c-.5)*2,g=_*m,D=f,Y=Math.sqrt(g*g+D*D);let N=1-Y;const I=d(g*2,D*2);if(N+I*A+l*Math.abs(I)>L&&Y<1.3){const P=_*t,S=f*t,x=new O().addScaledVector(a,P).addScaledVector(h,S);y.push(x.x,x.y,x.z),b.push((_+1)*.5,(f+1)*.5),C.set(`${s},${u}`,R),R++}}for(let s=0;s<c;s++)for(let u=0;u<c;u++){const _=C.get(`${s},${u}`),f=C.get(`${s+1},${u}`),g=C.get(`${s},${u+1}`),D=C.get(`${s+1},${u+1}`);_!==void 0&&f!==void 0&&g!==void 0&&w.push(_,f,g),f!==void 0&&D!==void 0&&g!==void 0&&w.push(f,D,g)}if(y.length===0||w.length===0)return console.warn("No vertices generated for organic water body"),null;const v=new se;v.setAttribute("position",new H(y,3)),v.setAttribute("uv",new H(b,2)),v.setIndex(w),v.computeVertexNormals();const E=v.attributes.position,B=e.clone().multiplyScalar(this.planetRadius),z=new O;for(let s=0;s<E.count;s++){z.fromBufferAttribute(E,s);const g=z.clone().add(B).clone().normalize().multiplyScalar(this.planetRadius*1.003).sub(B);E.setXYZ(s,g.x,g.y,g.z)}return E.needsUpdate=!0,v.computeVertexNormals(),v.translate(B.x,B.y,B.z),v}generateRandomSurfacePoint(){const e=this.rng.uniform(-.7,.7),t=this.rng.uniform(0,Math.PI*2),o=new O(Math.cos(t)*Math.cos(e),Math.sin(e),Math.sin(t)*Math.cos(e)).normalize();return[o.x,o.y,o.z]}addToScene(e,t){console.log("🌊 Adding water features to scene"),t&&(this.waterGroup.position.copy(t),console.log("Water group positioned at:",t)),e.add(this.waterGroup),console.log(`✅ Added ${this.waterBodyMeshes.length} water bodies to scene`)}updateFromThreeLight(e){this.materials.forEach(t=>{if(t instanceof G&&t.uniforms&&(t.uniforms.lightPosition&&t.uniforms.lightPosition.value.copy(e.position),t.uniforms.lightDirection)){const o=e.target.position.clone().sub(e.position).normalize();t.uniforms.lightDirection.value.copy(o)}}),console.log("🌊 Updated water lighting from DirectionalLight at:",e.position)}update(e){const t=Date.now()/1e3;if(Math.floor(t)%2===0&&Math.floor(t*10)%10===0){const o=this.waterBodyMeshes.filter(i=>i.geometry&&i.userData.originalPositions).length;if(console.log(`🌊 Aquifer water animation update - Time: ${t.toFixed(2)}, Bodies: ${this.waterBodyMeshes.length}, With waves: ${o}`),this.waterBodyMeshes.length>0){const i=this.waterBodyMeshes[0];console.log(`   Wave params - Amplitude: ${i.userData.waveAmplitude}, Speed: ${i.userData.waveSpeed}, BaseSize: ${i.userData.baseSize}`),console.log(`   Vertex count: ${i.geometry?.attributes.position.count||0}`)}}this.waterBodyMeshes.forEach((o,i)=>{if(o.geometry&&!o.userData.originalPositions){const r=o.geometry.attributes.position,a=new Float32Array(r.array.length);a.set(r.array),o.userData.originalPositions=a,o.userData.waveAmplitude=.01,o.userData.waveSpeed=1,console.log(`🔧 Initialized missing wave data for water body ${i}`)}if(o.geometry&&o.userData.originalPositions){const r=o.geometry.attributes.position,a=o.userData.originalPositions,h=o.userData.waveAmplitude||.01,m=o.userData.waveSpeed||1;for(let l=0;l<r.count;l++){const A=l*3,c=a[A],d=a[A+1],y=a[A+2],w=1/(o.userData.baseSize||1),b=Math.sin(t*m*3+c*w*50+y*w*40)*h,L=Math.sin(t*m*2+y*w*60+d*w*30)*h*.7,C=Math.sin(t*m*4+(c+y)*w*45)*h*.5,R=b+L+C,v=new O(c,d,y).normalize();r.setXYZ(l,c+v.x*R,d+v.y*R,y+v.z*R)}r.needsUpdate=!0,o.geometry.computeVertexNormals()}if(o.material instanceof G&&o.material.uniforms){o.material.uniforms.time.value=t;const r=.7;o.material.uniforms.opacity.value=r+Math.sin(t*.3)*.1}})}updateParams(e){if(this.params={...this.params,...e},e.waterColor){const t=e.waterColor instanceof M?e.waterColor:new M().fromArray(e.waterColor);this.materials.forEach(o=>{o instanceof le&&(o.color.copy(t),o.emissive.copy(t.clone().multiplyScalar(.1)))})}}getObject3D(){return this.waterGroup}dispose(){this.waterBodyMeshes.forEach(e=>{e.geometry&&!p.geometryCache.has("shared")&&e.geometry.dispose()}),this.waterBodyMeshes=[],this.materials=[],this.waterGroup.clear()}static clearCaches(){p.geometryCache.forEach(e=>e.dispose()),p.geometryCache.clear(),p.sharedMaterials.forEach(e=>e.dispose()),p.sharedMaterials.clear()}}function ge(k,e,t){console.log("🌊 Creating Organic SuperEarthWaterFeatures from Python data"),console.log("Surface data:",e);const i=(t||Math.floor(Math.random()*1e6))+1e4;let a=(e.water_features||{}).water_bodies||[];console.log("Water bodies from Python:",a),a.length===0&&(console.log("No water bodies from Python, will generate procedural ones"),a=[]);const h={water_bodies:a,waterColor:new M(.1,.4,.7),globalIrregularity:.6,seed:i};console.log("Creating SuperEarthWaterFeaturesEffect with params:",h);const m=new p(k,h);return console.log("✅ Organic SuperEarthWaterFeaturesEffect created successfully"),m}export{ge as c};
