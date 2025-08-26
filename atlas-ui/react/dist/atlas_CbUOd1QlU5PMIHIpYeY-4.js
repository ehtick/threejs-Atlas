import{S as x}from"./atlas_xfnyr93axqOl2-j5dyf-s.js";import{C as u,G as M,S as R,v as T,D as W,V as p,M as D,w as B,f as Y,d as I}from"./atlas_DykKF8lCJH3_A5qpAP-Im.js";const r={WATER_BODY_COUNT:{min:4,max:8},WATER_BODY_RADIUS:{min:.07,max:.35},WATER_BODY_DEPTH:{min:.01,max:.04},SHAPE_IRREGULARITY:{min:.5,max:1.5},ELONGATION_RATIO:{min:2,max:4},LARGE_BODY_OPACITY:{min:.7,max:.85},MEDIUM_BODY_OPACITY:{min:.65,max:.75},SMALL_BODY_OPACITY:{min:.5,max:.65},LARGE_BODY_THRESHOLD:.2,SMALL_BODY_THRESHOLD:.1};class P{waterGroup;waterBodyMeshes=[];params;rng;materials=[];planetRadius;time=0;constructor(e,t={}){console.log("🌊 CREATING SuperEarthWaterFeaturesEffect - FLAT SURFACE VERSION"),console.log("Planet radius:",e),console.log("Params:",t);const o=t.seed||Math.floor(Math.random()*1e6);this.rng=new x(o),this.planetRadius=e,this.params={water_bodies:t.water_bodies||[],waterColor:t.waterColor||new u(.1,.4,.7),globalIrregularity:t.globalIrregularity||.6,seed:o,...t},this.waterGroup=new M,console.log("Creating simplified water bodies..."),this.generateWaterBodies(),console.log(`✅ Created ${this.waterBodyMeshes.length} water bodies`)}generateWaterBodies(){this.params.water_bodies&&this.params.water_bodies.length>0?(console.log(`Using ${this.params.water_bodies.length} water bodies from data`),this.params.water_bodies.forEach((e,t)=>{const o=this.createSimpleWaterBody(e,t);o&&(this.waterBodyMeshes.push(o),this.waterGroup.add(o),console.log(`Added water body ${t} at position:`,e.position_3d))})):(console.log("No water body data provided, generating procedural water bodies"),this.generateProceduralWaterBodies())}createWaterMaterial(e){const t=this.params.waterColor instanceof u?this.params.waterColor:new u().fromArray(this.params.waterColor),o=`
      uniform float time;
      uniform float waveHeight;
      uniform float waveSpeed;
      
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec2 vUv;
      varying float vWaveIntensity;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        
        // Simple wave animation using sine waves
        float wave1 = sin(position.x * 8.0 + time * waveSpeed) * 0.5;
        float wave2 = sin(position.y * 6.0 + time * waveSpeed * 0.8) * 0.5;
        float wave3 = cos((position.x + position.y) * 4.0 + time * waveSpeed * 1.2) * 0.3;
        
        // Combine waves for organic movement
        float waveValue = (wave1 + wave2 + wave3) * waveHeight;
        vWaveIntensity = waveValue;
        
        // NO wave displacement in vertex shader - keep completely flat
        // All animation will be visual only in fragment shader
        vec3 newPosition = position;
        
        vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
        vWorldPosition = worldPos.xyz;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,m=`
      uniform vec3 waterColor;
      uniform vec3 deepWaterColor;
      uniform float opacity;
      uniform float time;
      
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec2 vUv;
      varying float vWaveIntensity;
      
      void main() {
        // Simple lighting
        vec3 lightDir = normalize(vec3(1.0, 1.0, 0.5));
        float NdotL = max(dot(vNormal, lightDir), 0.0);
        
        // Visual depth based on distance from edge - darker in center
        vec2 center = vec2(0.5, 0.5);
        float distFromCenter = distance(vUv, center);
        float depthFactor = 1.0 - smoothstep(0.0, 0.5, distFromCenter);
        
        // Mix colors for visual depth illusion - darker in center
        vec3 color = mix(waterColor, deepWaterColor, depthFactor * 0.7);
        
        // Add subtle waves for animation without displacement
        color = mix(color, waterColor, vWaveIntensity * 0.3);
        
        // Simple lighting
        color *= 0.7 + 0.3 * NdotL;
        
        // Subtle shimmer effect only on surface
        float shimmer = sin(vUv.x * 30.0 + time * 1.5) * sin(vUv.y * 30.0 + time * 1.2);
        shimmer = shimmer * 0.03 * NdotL * (1.0 - depthFactor * 0.5);
        color += vec3(shimmer);
        
        // Consistent opacity - no depth-based transparency
        float finalOpacity = opacity;
        
        gl_FragColor = vec4(color, finalOpacity);
      }
    `,s=new R({uniforms:{time:{value:0},waterColor:{value:t},deepWaterColor:{value:new u(t).multiplyScalar(.5)},opacity:{value:e},waveHeight:{value:0},waveSpeed:{value:.5}},vertexShader:o,fragmentShader:m,transparent:!0,side:W,depthWrite:!1,depthTest:!0,depthFunc:T,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return this.materials.push(s),s}createSimpleWaterBody(e,t){if(!e.position_3d||e.position_3d.length!==3)return console.warn(`Water body ${t} missing valid position_3d:`,e.position_3d),null;const m=new p().fromArray(e.position_3d).normalize(),s=Math.max(.02,e.radius||.08)*this.planetRadius,n=e.shape_type||this.getRandomShapeType(),d=e.irregularity??this.params.globalIrregularity??.6;console.log(`Creating water body ${t} (${n}) with size:`,s);const g=this.generateSimpleOrganicGeometry(m,s,n,d,t);if(!g)return console.warn(`Failed to generate geometry for water body ${t}`),null;const S=this.createWaterMaterial(Math.max(.6,e.opacity||.75)),i=new D(g,S);return i.renderOrder=1e4,i.castShadow=!1,i.receiveShadow=!1,console.log(`Water body ${t} created successfully`),i}generateSimpleOrganicGeometry(e,t,o,m,s){const n=new p,d=new p;Math.abs(e.y)<.99?n.crossVectors(e,new p(0,1,0)).normalize():n.crossVectors(e,new p(1,0,0)).normalize(),d.crossVectors(e,n).normalize();const g=new B,S=o==="complex"?12:8,i=[];for(let a=0;a<S;a++){const c=a/S*Math.PI*2;let l=t;if(o==="elongated"){const f=this.rng.uniform(r.ELONGATION_RATIO.min,r.ELONGATION_RATIO.max);l*=1+Math.cos(c*2)*(f-1)*.5}const v=Math.sin(c*3+s)*.2+Math.cos(c*5+s*2)*.1;l*=1+v*m;const y=Math.cos(c)*l,_=Math.sin(c)*l;i.push(new Y(y,_))}if(i.length>0){g.moveTo(i[0].x,i[0].y);for(let a=0;a<i.length;a++){const c=i[a],l=i[(a+1)%i.length],v=i[(a+2)%i.length],y=c.x+(l.x-c.x)*.5,_=c.y+(l.y-c.y)*.5,f=l.x+(c.x-v.x)*.1,C=l.y+(c.y-v.y)*.1;g.bezierCurveTo(y,_,f,C,l.x,l.y)}}const E=16,O=new I(t*2,t*2,E,E),w=O.attributes.position,h=new p;for(let a=0;a<w.count;a++){if(h.x=w.getX(a),h.y=w.getY(a),h.z=0,Math.sqrt(h.x*h.x+h.y*h.y)>t){w.setXYZ(a,0,0,-1e3);continue}const l=new p().addScaledVector(n,h.x).addScaledVector(d,h.y),v=e.clone().multiplyScalar(this.planetRadius);l.add(v);const y=l.clone().normalize(),_=this.planetRadius*1,f=y.multiplyScalar(_);w.setXYZ(a,f.x,f.y,f.z)}return w.needsUpdate=!0,O.computeVertexNormals(),O}generateProceduralWaterBodies(){const e=this.rng.randint(r.WATER_BODY_COUNT.min,r.WATER_BODY_COUNT.max);console.log(`Generating ${e} procedural water bodies`);for(let t=0;t<e;t++){const o=this.getRandomShapeType(),m=this.rng.uniform(r.WATER_BODY_RADIUS.min,r.WATER_BODY_RADIUS.max);let s;m>r.LARGE_BODY_THRESHOLD?s=this.rng.uniform(r.LARGE_BODY_OPACITY.min,r.LARGE_BODY_OPACITY.max):m<r.SMALL_BODY_THRESHOLD?s=this.rng.uniform(r.SMALL_BODY_OPACITY.min,r.SMALL_BODY_OPACITY.max):s=this.rng.uniform(r.MEDIUM_BODY_OPACITY.min,r.MEDIUM_BODY_OPACITY.max);const n={position_3d:this.generateRandomSurfacePoint(),radius:m,depth:this.rng.uniform(r.WATER_BODY_DEPTH.min,r.WATER_BODY_DEPTH.max),opacity:s,shape_type:o,irregularity:this.rng.uniform(r.SHAPE_IRREGULARITY.min,r.SHAPE_IRREGULARITY.max)},d=this.createSimpleWaterBody(n,t);d&&(this.waterBodyMeshes.push(d),this.waterGroup.add(d),console.log(`Generated procedural water body ${t} with shape ${o}`))}}getRandomShapeType(){const e=this.rng.uniform(0,1);return e<.4?"lake":e<.7?"pond":e<.9?"elongated":"complex"}generateRandomSurfacePoint(){const e=this.rng.uniform(-.7,.7),t=this.rng.uniform(0,Math.PI*2),o=new p(Math.cos(t)*Math.cos(e),Math.sin(e),Math.sin(t)*Math.cos(e)).normalize();return[o.x,o.y,o.z]}addToScene(e,t){console.log("🌊 Adding water features to scene"),t&&(this.waterGroup.position.copy(t),console.log("Water group positioned at:",t)),e.add(this.waterGroup),console.log(`✅ Added ${this.waterBodyMeshes.length} water bodies to scene`)}update(e){this.time+=e,this.materials.forEach(t=>{t.uniforms.time&&(t.uniforms.time.value=this.time)})}updateParams(e){if(this.params={...this.params,...e},e.waterColor){const t=e.waterColor instanceof u?e.waterColor:new u().fromArray(e.waterColor);this.materials.forEach(o=>{o.uniforms.waterColor.value=t,o.uniforms.deepWaterColor.value=new u(t).multiplyScalar(.5)})}}getObject3D(){return this.waterGroup}dispose(){console.log("🌊 Disposing water features"),this.waterBodyMeshes.forEach(e=>{e.geometry.dispose()}),this.materials.forEach(e=>{e.dispose()}),this.waterBodyMeshes=[],this.materials=[],this.waterGroup.clear()}}function b(A,e,t){console.log("🌊 Creating Simplified SuperEarthWaterFeatures from Python data"),console.log("Surface data:",e);const m=(t||Math.floor(Math.random()*1e6))+1e4;let n=(e.water_features||{}).water_bodies||[];console.log("Water bodies from Python:",n),n.length===0&&(console.log("No water bodies from Python, will generate procedural ones"),n=[]);const d={water_bodies:n,waterColor:new u(.1,.4,.7),globalIrregularity:.6,seed:m};console.log("Creating SuperEarthWaterFeaturesEffect with params:",d);const g=new P(A,d);return console.log("✅ Simplified SuperEarthWaterFeaturesEffect created successfully"),g}export{b as c};
