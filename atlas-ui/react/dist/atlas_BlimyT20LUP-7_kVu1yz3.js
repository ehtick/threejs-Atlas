import{S as Z}from"./atlas_BCLm0rswpwHY6zwJL8hnM.js";import{C as W,G as rt,H as Y,R as N,w as R,S as V,I as nt,O as lt,J as ct,K as ht,D as mt,V as y,d as ut,g as q,M as pt,f as ft}from"./atlas_CLp6T-BwF8hBVTNM0OiQd.js";const S={WATER_BODY_COUNT:{min:4,max:8},WATER_BODY_RADIUS:{min:.07,max:.35},WATER_BODY_OPACITY:{min:.6,max:.85}};class dt{waterGroup;waterBodyMeshes=[];params;rng;materials=[];planetRadius;waterMaterial;normalMap;displacementMap;foamMap;animationTime=0;constructor(e,t={}){const s=t.seed||Math.floor(Math.random()*1e6);this.rng=new Z(s),this.planetRadius=e,this.params={water_bodies:t.water_bodies||[],waterColor:t.waterColor||new W(.2,.5,.9),globalIrregularity:t.globalIrregularity||.7,seed:s,...t},this.waterGroup=new rt,this.generateWaterTextures(),this.createUnifiedWaterMaterial(),this.generateWaterBodies()}generateWaterTextures(){const t=new Uint8Array(262144);for(let l=0;l<256;l++)for(let a=0;a<256;a++){const n=(l*256+a)*4,u=l/256*Math.PI*6,c=a/256*Math.PI*6,M=Math.sin(u*1+c*.5)*.5,f=Math.sin(u*2.3-c*1.1)*.3,h=Math.sin(u*.7+c*1.9)*.2,g=(M+f)*.5+.5,x=(f+h)*.5+.5,z=1;t[n]=g*255,t[n+1]=x*255,t[n+2]=z*255,t[n+3]=255}this.normalMap=new Y(t,256,256,N),this.normalMap.wrapS=R,this.normalMap.wrapT=R,this.normalMap.needsUpdate=!0;const s=128,p=new Uint8Array(s*s*4);for(let l=0;l<s;l++)for(let a=0;a<s;a++){const n=(l*s+a)*4,u=l/s*Math.PI*2,c=a/s*Math.PI*2,M=Math.sin(u*2+c)*.3,f=Math.cos(u-c*2)*.3,h=(M+f)*.25+.5,g=Math.max(0,Math.min(255,h*255));p[n]=g,p[n+1]=g,p[n+2]=g,p[n+3]=255}this.displacementMap=new Y(p,s,s,N),this.displacementMap.wrapS=R,this.displacementMap.wrapT=R,this.displacementMap.needsUpdate=!0;const r=128,i=new Uint8Array(r*r*4);for(let l=0;l<r;l++)for(let a=0;a<r;a++){const n=(l*r+a)*4,u=l/r*Math.PI*6,c=a/r*Math.PI*6,M=(Math.sin(u)*Math.cos(c)+1)*.5,h=(M>.6?M*.8:0)*255;i[n]=h,i[n+1]=h,i[n+2]=h,i[n+3]=255}this.foamMap=new Y(i,r,r,N),this.foamMap.wrapS=R,this.foamMap.wrapT=R,this.foamMap.needsUpdate=!0}createUnifiedWaterMaterial(){const e=`
      uniform float time;
      
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vAnimatedUv;
      
      void main() {
        vUv = uv;

        vAnimatedUv = uv + vec2(time * 0.08, time * 0.06);

        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;

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

        vec3 normalMapSample = texture2D(normalMap, vAnimatedUv * 2.0).rgb;
        vec3 perturbedNormal = normalize(vWorldNormal + (normalMapSample - 0.5) * 0.4);

        vec3 normal = normalize(perturbedNormal);

        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }

        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);

        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;

        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;

        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.0);

        vec3 finalColor = waterColor;

        finalColor *= totalLight;

        finalColor += vec3(0.2, 0.3, 0.4) * fresnel * 0.3;

        float shimmer = sin(time * 2.5 + vWorldPosition.x * 30.0 + vWorldPosition.z * 25.0) * 0.08 + 0.92;
        finalColor *= shimmer;

        vec2 centerDist = vUv - vec2(0.5, 0.5);
        float distFromCenter = length(centerDist) * 2.0;

        float edgeNoise = sin(vUv.x * 20.0 + time * 0.5) * cos(vUv.y * 20.0 - time * 0.3) * 0.1;
        distFromCenter += edgeNoise;

        float edgeSoftness = 1.0 - smoothstep(0.5, 0.95, distFromCenter);

        edgeSoftness = pow(edgeSoftness, 1.5);
        
        float finalOpacity = opacity * edgeSoftness;
        
        gl_FragColor = vec4(finalColor, finalOpacity);
      }
    `;this.waterMaterial=new V({vertexShader:e,fragmentShader:t,uniforms:{waterColor:{value:new W(.15,.55,.85)},opacity:{value:.8},time:{value:0},normalMap:{value:this.normalMap},lightPosition:{value:new y(0,0,0)},lightDirection:{value:new y(1,1,1).normalize()},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:mt,depthWrite:!1,depthTest:!0,blending:ht,blendSrc:ct,blendDst:lt,blendEquation:nt})}generateWaterBodies(){this.params.water_bodies&&this.params.water_bodies.length>0?this.params.water_bodies.forEach((e,t)=>{const s=this.createTextureBasedWaterBody(e,t);s&&(this.waterBodyMeshes.push(s),this.waterGroup.add(s))}):this.generateProceduralWaterBodies()}createTextureBasedWaterBody(e,t){if(!e.position_3d||e.position_3d.length!==3)return null;const p=new y().fromArray(e.position_3d).normalize(),i=(e.radius||this.rng.uniform(S.WATER_BODY_RADIUS.min,S.WATER_BODY_RADIUS.max))*this.planetRadius,l=24,a=new ut(i*2,i*2,l,l),n=this.rng.uniform(0,Math.PI*2),u=a.attributes.uv,c=Math.cos(n),M=Math.sin(n);for(let o=0;o<u.count;o++){const m=u.getX(o)-.5,d=u.getY(o)-.5;u.setXY(o,m*c-d*M+.5,m*M+d*c+.5)}u.needsUpdate=!0;const f=a.attributes.position,h=a.attributes.uv,g=[],x=[],z=[],_=new Map;let G=0;for(let o=0;o<f.count;o++){const m=f.getX(o),d=f.getY(o),v=f.getZ(o);h.getX(o),h.getY(o);const P=Math.sqrt(m*m+d*d),A=Math.atan2(d,m),K=t%5;let w=!1;switch(K){case 0:const O=1+Math.sin(t)*.3,I=1+Math.cos(t*1.3)*.3,E=t*.7,L=m*Math.cos(E)-d*Math.sin(E),X=m*Math.sin(E)+d*Math.cos(E);w=L*L/(i*O*i*O)+X*X/(i*I*i*I)<=1;break;case 1:const Q=i*(.8+Math.sin(A*2+t)*.2),$=Math.cos(A+Math.PI+t)*i*.3,tt=Math.max(Q+$,i*.5);w=P<=tt;break;case 2:const et=i*(.8+Math.sin(A*1.5+t)*.2+Math.cos(A*2.3+t*1.7)*.15);w=P<=et;break;case 3:const k=A-t,at=i*((1+Math.cos(k))*.4+.4),it=Math.sin(k*3)*i*.1;w=P<=at+it;break;case 4:const j=A-t*.5,ot=i*Math.max(.4,1-Math.cos(j*1.5)*.4),st=Math.sin(j*6)*i*.05;w=P<=ot+st;break}if(w){const O=Math.sin(A*12+t*3)*.05;w=P*(1+O)<=i*1.1}w&&(g.push(m,d,v),x.push(h.getX(o),h.getY(o)),_.set(o,G),G++)}const b=a.getIndex();if(b)for(let o=0;o<b.count;o+=3){const m=b.getX(o),d=b.getX(o+1),v=b.getX(o+2);_.has(m)&&_.has(d)&&_.has(v)&&z.push(_.get(m),_.get(d),_.get(v))}a.setAttribute("position",new q(g,3)),a.setAttribute("uv",new q(x,2)),a.setIndex(z),a.computeVertexNormals();const B=this.waterMaterial.clone();B.uniforms.opacity.value=e.opacity||.8,B.uniforms.normalMap.value=this.normalMap;const D=new pt(a,B);this.materials.push(B);const C=p.clone(),U=new y;Math.abs(C.y)<.99?U.crossVectors(C,new y(0,1,0)).normalize():U.crossVectors(C,new y(1,0,0)).normalize();const H=new y().crossVectors(U,C).normalize(),T=a.attributes.position,J=p.clone().multiplyScalar(this.planetRadius*1.001);for(let o=0;o<T.count;o++){const m=new y;m.fromBufferAttribute(T,o);const v=J.clone().add(U.clone().multiplyScalar(m.x)).add(H.clone().multiplyScalar(m.y)).normalize().multiplyScalar(this.planetRadius*1.001);T.setXYZ(o,v.x,v.y,v.z)}return T.needsUpdate=!0,a.computeVertexNormals(),D.position.set(0,0,0),D.userData={baseSize:i,uvOffset:new ft(this.rng.uniform(0,1),this.rng.uniform(0,1)),animationSpeed:this.rng.uniform(.8,1.2),index:t},D.renderOrder=1002,D.castShadow=!1,D.receiveShadow=!0,D}generateProceduralWaterBodies(){const e=this.rng.randint(S.WATER_BODY_COUNT.min,S.WATER_BODY_COUNT.max);for(let t=0;t<e;t++){const s=this.rng.uniform(S.WATER_BODY_RADIUS.min,S.WATER_BODY_RADIUS.max),p={position_3d:this.generateRandomSurfacePoint(),radius:s,depth:.025,opacity:this.rng.uniform(S.WATER_BODY_OPACITY.min,S.WATER_BODY_OPACITY.max)},r=this.createTextureBasedWaterBody(p,t);r&&(this.waterBodyMeshes.push(r),this.waterGroup.add(r))}}generateRandomSurfacePoint(){const e=this.rng.uniform(.3,Math.PI-.3),t=this.rng.uniform(0,Math.PI*2),s=Math.sin(e)*Math.cos(t),p=Math.cos(e),r=Math.sin(e)*Math.sin(t);return[s,p,r]}addToScene(e,t){t&&this.waterGroup.position.copy(t),e.add(this.waterGroup)}updateFromThreeLight(e){if(this.materials.forEach(t=>{if(t instanceof V&&t.uniforms&&(t.uniforms.lightPosition&&t.uniforms.lightPosition.value.copy(e.position),t.uniforms.lightDirection)){const s=e.target.position.clone().sub(e.position).normalize();t.uniforms.lightDirection.value.copy(s)}}),this.waterMaterial&&this.waterMaterial.uniforms&&(this.waterMaterial.uniforms.lightPosition&&this.waterMaterial.uniforms.lightPosition.value.copy(e.position),this.waterMaterial.uniforms.lightDirection)){const t=e.target.position.clone().sub(e.position).normalize();this.waterMaterial.uniforms.lightDirection.value.copy(t)}}update(e){this.animationTime+=e,this.waterMaterial&&this.waterMaterial.uniforms&&(this.waterMaterial.uniforms.time.value=this.animationTime),this.materials.forEach(t=>{t instanceof V&&t.uniforms&&(t.uniforms.time.value=this.animationTime)}),this.normalMap&&(this.normalMap.offset.x+=e*.02,this.normalMap.offset.y+=e*.015,this.normalMap.needsUpdate=!0),this.foamMap&&(this.foamMap.offset.x+=e*.025,this.foamMap.offset.y+=e*.018,this.foamMap.needsUpdate=!0)}updateParams(e){if(this.params={...this.params,...e},e.waterColor&&this.waterMaterial){const t=e.waterColor instanceof W?e.waterColor:new W().fromArray(e.waterColor);this.waterMaterial.uniforms.waterColor.value.copy(t)}}getObject3D(){return this.waterGroup}dispose(){this.normalMap&&this.normalMap.dispose(),this.displacementMap&&this.displacementMap.dispose(),this.foamMap&&this.foamMap.dispose(),this.waterMaterial&&this.waterMaterial.dispose(),this.waterBodyMeshes.forEach(e=>{e.geometry&&e.geometry.dispose()}),this.waterBodyMeshes=[],this.waterGroup.clear()}}function vt(F,e,t,s){const r=(t||Math.floor(Math.random()*1e6))+1e4,i=new Z(r);let a=(e.water_features||{}).water_bodies||[];if(s==="desert"){const c=i.uniform(3,5);if(i.uniform(0,100)<=c){const f=i.uniform(0,2*Math.PI),h=Math.acos(i.uniform(-1,1));a=[{position_3d:[Math.sin(h)*Math.cos(f),Math.sin(h)*Math.sin(f),Math.cos(h)],radius:i.uniform(.08,.15),depth:i.uniform(.005,.015),opacity:i.uniform(.75,.85),shape_type:"lake"}]}else return null}a.length===0&&e.blue_patches&&e.blue_patches.length>0&&(a=e.blue_patches.map(c=>({position_3d:c.position_3d,radius:c.size||.1,depth:c.height||.02,opacity:c.color?.[3]||.8,shape_type:"lake"})));const n={water_bodies:a,waterColor:new W(.2,.5,.9),globalIrregularity:.7,seed:r};return new dt(F,n)}export{vt as c};
