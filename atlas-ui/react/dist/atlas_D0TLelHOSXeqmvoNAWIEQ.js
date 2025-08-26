import{S as V}from"./atlas_CtjRlAX5HR7UzNXl58rox.js";import{C as b,G as H,V as m,S as I,D as N,N as z,M as D,e as A,B as O,g as C}from"./atlas_C6UiBtzYYNZp5NEn_kUjD.js";const s={PATCH_COUNT:{min:20,max:40},DENSITY:{min:.8,max:1.5},SIZE:{min:.08,max:.25},OPACITY:{min:.7,max:.95},TREE_HEIGHT:{min:.015,max:.035},TIME_SPEED:{min:.05,max:.2}};class T{vegetationGroup;vegetationPatches=[];treeLayers=[];params;cosmicOriginTime;cosmicOffset;static vegetationVertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float timeSpeed;
    uniform float treeHeight;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      // Posición del mundo para efectos de ruido y iluminación
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      
      // Movimiento sutil simulando viento en la vegetación
      vec3 pos = position;
      float slowTime = time * timeSpeed;
      
      // Movimiento más pronunciado en las partes altas (árboles)
      float heightFactor = smoothstep(0.0, 1.0, vUv.y);
      
      // Oscilar suavemente simulando viento
      pos.x += sin(slowTime + worldPosition.z * 0.1) * treeHeight * 0.1 * heightFactor;
      pos.z += cos(slowTime * 0.7 + worldPosition.x * 0.1) * treeHeight * 0.08 * heightFactor;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static vegetationFragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float opacity;
    uniform vec3 vegetationColor;
    uniform float density;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float treeHeight;
    
    // Función de ruido para textura de vegetación
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for (int i = 0; i < 3; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      // Distancia radial desde el centro para crear transiciones orgánicas
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      
      // Base de vegetación con múltiples capas de ruido para textura orgánica
      vec2 noiseUv1 = vUv * 12.0 + time * 0.008;
      float vegetationNoise1 = fbm(noiseUv1);
      
      vec2 noiseUv2 = vUv * 6.0 + time * 0.005;
      float vegetationNoise2 = fbm(noiseUv2);
      
      vec2 noiseUv3 = vUv * 20.0 + time * 0.012;
      float vegetationNoise3 = fbm(noiseUv3) * 0.5;
      
      // Combinar capas de ruido para textura compleja
      float combinedNoise = vegetationNoise1 * 0.6 + vegetationNoise2 * 0.3 + vegetationNoise3 * 0.1;
      
      // Crear variaciones de color para simular follaje denso
      vec3 baseColor = vegetationColor;
      
      // Variaciones de color más complejas para simular hojas, ramas, sombras
      float colorVariation = 0.7 + combinedNoise * 0.6;
      
      // Crear zonas más oscuras (sombras entre hojas) y más claras (hojas al sol)
      float leafPattern = sin(vUv.x * 15.0) * sin(vUv.y * 12.0) * 0.15;
      colorVariation += leafPattern;
      
      vec3 finalColor = baseColor * colorVariation;
      
      // Añadir variaciones de color naturales (diferentes tonos de verde y marrón)
      vec3 darkGreen = vec3(0.15, 0.35, 0.12);  // Verde oscuro para sombras
      vec3 lightGreen = vec3(0.25, 0.50, 0.18); // Verde claro para hojas iluminadas
      vec3 brownTone = vec3(0.35, 0.25, 0.15);  // Marrón para ramas/troncos
      
      // Mezclar colores basado en el ruido para crear variedad natural
      if (combinedNoise < 0.3) {
        finalColor = mix(finalColor, darkGreen, 0.4);
      } else if (combinedNoise > 0.7) {
        finalColor = mix(finalColor, lightGreen, 0.3);
      }
      
      // Añadir algunos elementos marrones para simular ramas
      if (vegetationNoise3 > 0.8) {
        finalColor = mix(finalColor, brownTone, 0.2);
      }
      
      // Iluminación planetaria real
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      // Usar la normal planetaria para determinar iluminación
      vec3 planetNormal = normalize(vWorldPosition);
      float dotNL = dot(planetNormal, lightDir);
      
      // Iluminación más compleja para vegetación densa
      float lighting = smoothstep(-0.3, 0.8, dotNL);
      lighting = mix(0.3, 1.0, lighting); // Luz ambiental para simular luz filtrada
      
      // Añadir scattering subsuperficial más pronunciado para hojas
      float subsurface = pow(max(0.0, dot(vWorldNormal, lightDir)), 0.8) * 0.4;
      lighting += subsurface;
      
      // Simular oclusión ambiental en áreas densas
      float ambientOcclusion = 1.0 - (combinedNoise * 0.2);
      lighting *= ambientOcclusion;
      
      finalColor *= lighting;
      
      // Alpha con patrón orgánico para bordes naturales
      float alpha = opacity * density;
      
      // Crear máscara orgánica basada en ruido para bordes irregulares
      float organicMask = smoothstep(0.2, 1.0, combinedNoise);
      
      // Transición suave desde el centro hacia los bordes
      float radialFade = 1.0 - smoothstep(0.3, 0.9, distFromCenter);
      
      // Combinar máscaras para efecto natural
      alpha *= organicMask * radialFade;
      
      // Añadir variación adicional para evitar uniformidad
      alpha *= (0.8 + sin(vUv.x * 25.0) * sin(vUv.y * 30.0) * 0.15);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(t,e={}){const o=e.seed||Math.floor(Math.random()*1e6);this.cosmicOriginTime=e.cosmicOriginTime||51408e4,this.cosmicOffset=o%3600*10;const i=new V(o);this.params={density:e.density||i.uniform(s.DENSITY.min,s.DENSITY.max),color:e.color||new b(2972221),opacity:e.opacity||i.uniform(s.OPACITY.min,s.OPACITY.max),size:e.size||i.uniform(s.SIZE.min,s.SIZE.max),treeHeight:e.treeHeight||i.uniform(s.TREE_HEIGHT.min,s.TREE_HEIGHT.max),timeSpeed:e.timeSpeed||i.uniform(s.TIME_SPEED.min,s.TIME_SPEED.max),seed:o,cosmicOriginTime:this.cosmicOriginTime,vegetationPatches:e.vegetationPatches||[]},this.vegetationGroup=new H,this.generateVegetation(t)}generateVegetation(t){const e=this.params.seed||Math.floor(Math.random()*1e6),o=new V(e),i=this.params.vegetationPatches;let a=0;i&&i.length>0?(a=i.length,this.generateVegetationFromPython(t,i,o)):(a=Math.floor(o.uniform(s.PATCH_COUNT.min,s.PATCH_COUNT.max)),this.generateProceduralVegetation(t,a,o))}generateVegetationFromPython(t,e,o){e.forEach((i,a)=>{this.createVegetationPatch(t,i,o,a)})}generateProceduralVegetation(t,e,o){for(let i=0;i<e;i++){const a=o.uniform(0,2*Math.PI),r=o.uniform(-1,1),n=Math.acos(r),c={position_3d:[Math.sin(n)*Math.cos(a),Math.sin(n)*Math.sin(a),Math.cos(n)],size:o.uniform(s.SIZE.min,s.SIZE.max),color:[o.uniform(.1,.4),o.uniform(.4,.8),o.uniform(.1,.3)]};this.createVegetationPatch(t,c,o,i)}}createVegetationPatch(t,e,o,i){const a=e.position_3d||e.position||[0,0,1],r=(e.size||this.params.size)*t;let n=this.params.color instanceof b?this.params.color:new b(this.params.color);e.color&&Array.isArray(e.color)&&(n=new b(e.color[0],e.color[1],e.color[2]));const c=new m(a[0],a[1],a[2]).normalize();this.createVegetationBase(t,c,r,n,o),this.createTreeLayer(t,c,r,n,o)}createVegetationBase(t,e,o,i,a){const r=this.createOrganicVegetationGeometry(t,e,o,a),n=new I({vertexShader:T.vegetationVertexShader,fragmentShader:T.vegetationFragmentShader,uniforms:{time:{value:0},timeSpeed:{value:this.params.timeSpeed},opacity:{value:this.params.opacity},vegetationColor:{value:i},density:{value:this.params.density},treeHeight:{value:this.params.treeHeight},lightDirection:{value:new m(1,1,1).normalize()},lightPosition:{value:new m(0,0,0)}},transparent:!0,blending:z,depthWrite:!1,side:N}),c=new D(r,n);c.renderOrder=3,this.vegetationPatches.push(c),this.vegetationGroup.add(c)}createTreeLayer(t,e,o,i,a){const r=Math.floor(a.uniform(8,20));for(let n=0;n<r;n++){const c=a.uniform(0,Math.PI*2),y=a.uniform(0,o*.8),x=Math.cos(c)*y,S=Math.sin(c)*y,f=new m,g=new m;Math.abs(e.y)<.99?f.crossVectors(e,new m(0,1,0)).normalize():f.crossVectors(e,new m(1,0,0)).normalize(),g.crossVectors(e,f).normalize();const h=e.clone().multiplyScalar(t*1.002);h.addScaledVector(f,x),h.addScaledVector(g,S);const p=a.uniform(.008,.02)*t,l=this.createSingleTreeGeometry(p,a),d=h.clone().normalize(),u=new A,v=new m,P=new m;Math.abs(d.y)<.99?v.crossVectors(d,new m(0,1,0)).normalize():v.crossVectors(d,new m(1,0,0)).normalize(),P.crossVectors(d,v).normalize(),u.makeBasis(v,P,d),l.applyMatrix4(u),l.translate(h.x,h.y,h.z);const w=i.clone().multiplyScalar(a.uniform(.6,.9)),E=new I({vertexShader:T.vegetationVertexShader,fragmentShader:T.vegetationFragmentShader,uniforms:{time:{value:0},timeSpeed:{value:this.params.timeSpeed},opacity:{value:this.params.opacity*a.uniform(.7,.9)},vegetationColor:{value:w},density:{value:this.params.density*a.uniform(.8,1.2)},treeHeight:{value:this.params.treeHeight},lightDirection:{value:new m(1,1,1).normalize()},lightPosition:{value:new m(0,0,0)}},transparent:!0,blending:z,depthWrite:!1,side:N}),M=new D(l,E);M.renderOrder=4,this.treeLayers.push(M),this.vegetationGroup.add(M)}}createOrganicVegetationGeometry(t,e,o,i){const a=[],r=[],n=[],c=new m,y=new m;Math.abs(e.y)<.99?c.crossVectors(e,new m(0,1,0)).normalize():c.crossVectors(e,new m(1,0,0)).normalize(),y.crossVectors(e,c).normalize();const x=e.clone().multiplyScalar(t*1.0005);let S=0;const f=Math.floor(i.uniform(20,40)),g=[];for(let l=0;l<f;l++){const d=l/f*Math.PI*2,u=d*3,v=Math.sin(u+i.uniform(0,Math.PI*2))*.3+1,P=i.uniform(.6,1)*v,w=o*P,E=Math.cos(d)*w,M=Math.sin(d)*w;g.push({x:E,y:M,u:(E/o+1)*.5,v:(M/o+1)*.5})}a.push(x.x,x.y,x.z),n.push(.5,.5);const h=S++;for(const l of g){const u=x.clone().addScaledVector(c,l.x).addScaledVector(y,l.y).clone().normalize(),v=this.noise2D(l.x*5,l.y*5,i)*2e-4,P=u.multiplyScalar(t*(1.0005+v));a.push(P.x,P.y,P.z),n.push(l.u,l.v),S++}for(let l=0;l<g.length;l++){const d=(l+1)%g.length,u=l+1,v=d+1;r.push(h,u,v)}const p=new O;return p.setAttribute("position",new C(a,3)),p.setAttribute("uv",new C(n,2)),p.setIndex(r),p.computeVertexNormals(),p}createSingleTreeGeometry(t,e){const o=t*e.uniform(.8,1.5),i=t*e.uniform(.4,.8),a=[-i/2,0,0,i/2,0,0,-i/2,o,0,i/2,0,0,i/2,o,0,-i/2,o,0],r=[0,0,1,0,0,1,1,0,1,1,0,1],n=new O;return n.setAttribute("position",new C(a,3)),n.setAttribute("uv",new C(r,2)),n.computeVertexNormals(),n}noise2D(t,e,o){const i=this.params.seed||0,a=(l,d)=>{const u=l*12.9898+d*78.233+i;return Math.sin(u)*43758.5453%1},r=Math.floor(t),n=Math.floor(e),c=t-r,y=e-n,x=Math.abs(a(r,n)),S=Math.abs(a(r+1,n)),f=Math.abs(a(r,n+1)),g=Math.abs(a(r+1,n+1)),h=x*(1-c)+S*c,p=f*(1-c)+g*c;return h*(1-y)+p*y}addToScene(t,e){e&&this.vegetationGroup.position.copy(e),t.add(this.vegetationGroup)}update(){const i=(Date.now()/1e3-this.cosmicOriginTime+this.cosmicOffset)*this.params.timeSpeed%1e4;[...this.vegetationPatches,...this.treeLayers].forEach(a=>{const r=a.material;r.uniforms.time.value=i})}updateLightPosition(t){[...this.vegetationPatches,...this.treeLayers].forEach(e=>{const o=e.material;o.uniforms.lightPosition&&o.uniforms.lightPosition.value.copy(t)})}updateLightDirection(t){[...this.vegetationPatches,...this.treeLayers].forEach(e=>{const o=e.material;o.uniforms.lightDirection&&o.uniforms.lightDirection.value.copy(t)})}updateFromThreeLight(t){this.updateLightPosition(t.position);const e=t.target.position.clone().sub(t.position).normalize();this.updateLightDirection(e)}updateParams(t){this.params={...this.params,...t},[...this.vegetationPatches,...this.treeLayers].forEach(e=>{const o=e.material;t.opacity!==void 0&&(o.uniforms.opacity.value=t.opacity),t.density!==void 0&&(o.uniforms.density.value=t.density),t.timeSpeed!==void 0&&(o.uniforms.timeSpeed.value=t.timeSpeed)})}getObject3D(){return this.vegetationGroup}dispose(){[...this.vegetationPatches,...this.treeLayers].forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.vegetationPatches=[],this.treeLayers=[],this.vegetationGroup.clear()}}function F(G,t,e,o){const i=t.vegetation,a=e||Math.floor(Math.random()*1e6),r=new V(a+8e3),n={color:new b(2972221),density:r.uniform(s.DENSITY.min,s.DENSITY.max),opacity:r.uniform(s.OPACITY.min,s.OPACITY.max),size:r.uniform(s.SIZE.min,s.SIZE.max),treeHeight:r.uniform(s.TREE_HEIGHT.min,s.TREE_HEIGHT.max),timeSpeed:r.uniform(s.TIME_SPEED.min,s.TIME_SPEED.max),seed:a+8e3,cosmicOriginTime:o,vegetationPatches:i};return new T(G,n)}export{T as V,F as c};
