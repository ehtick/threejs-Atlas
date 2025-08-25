import{S as x}from"./atlas_CZFakru7GGKiPV4DHwGyu.js";import{C as g,G as D,V as h,d as S,S as T,D as E,N as M,M as w,e as I}from"./atlas_BjkcO1_mNssSqp05cLhjd.js";const r={PATCH_COUNT:{min:20,max:40},DENSITY:{min:.8,max:1.5},SIZE:{min:.03,max:.12},OPACITY:{min:.7,max:.95},TREE_HEIGHT:{min:.015,max:.035},TIME_SPEED:{min:.05,max:.2}};class u{vegetationGroup;vegetationPatches=[];treeLayers=[];params;cosmicOriginTime;cosmicOffset;static vegetationVertexShader=`
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
      // Gradiente vertical para simular diferentes tipos de vegetación
      float heightGradient = vUv.y;
      
      // Base de vegetación con variación de ruido
      vec2 noiseUv = vUv * 8.0 + time * 0.01;
      float vegetationNoise = fbm(noiseUv);
      
      // Crear variaciones de color para simular diferentes plantas
      vec3 baseColor = vegetationColor;
      
      // Vegetación más oscura en la base (arbustos), más clara en el tope (hojas)
      float colorVariation = mix(0.6, 1.2, heightGradient);
      colorVariation *= (0.8 + vegetationNoise * 0.4);
      
      // Añadir variaciones de color (marrones para troncos, verdes para hojas)
      vec3 finalColor = baseColor * colorVariation;
      
      // En las partes bajas, añadir tonos marrones para simular troncos/tierra
      if (heightGradient < 0.3) {
        vec3 brownTone = vec3(0.4, 0.3, 0.2);
        finalColor = mix(finalColor, brownTone, (0.3 - heightGradient) * 0.6);
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
      
      // Iluminación suave para vegetación (plantas reciben luz difusa)
      float lighting = smoothstep(-0.4, 0.6, dotNL);
      lighting = mix(0.4, 1.0, lighting); // Siempre algo de luz ambiental
      
      // Añadir iluminación interna sutil (subsurface scattering simulado)
      float subsurface = pow(max(0.0, dot(vWorldNormal, lightDir)), 0.5) * 0.3;
      lighting += subsurface;
      
      finalColor *= lighting;
      
      // Alpha con variación para crear densidad irregular
      float alpha = opacity * density;
      alpha *= (0.7 + vegetationNoise * 0.3); // Variación en la opacidad
      
      // Más transparente en los bordes para transiciones suaves
      float edgeFade = 1.0 - pow(abs(vUv.x - 0.5) * 2.0, 2.0);
      alpha *= edgeFade;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6);this.cosmicOriginTime=t.cosmicOriginTime||51408e4,this.cosmicOffset=i%3600*10;const o=new x(i);this.params={density:t.density||o.uniform(r.DENSITY.min,r.DENSITY.max),color:t.color||new g(2972221),opacity:t.opacity||o.uniform(r.OPACITY.min,r.OPACITY.max),size:t.size||o.uniform(r.SIZE.min,r.SIZE.max),treeHeight:t.treeHeight||o.uniform(r.TREE_HEIGHT.min,r.TREE_HEIGHT.max),timeSpeed:t.timeSpeed||o.uniform(r.TIME_SPEED.min,r.TIME_SPEED.max),seed:i,cosmicOriginTime:this.cosmicOriginTime,vegetationPatches:t.vegetationPatches||[]},this.vegetationGroup=new D,this.generateVegetation(e)}generateVegetation(e){const t=this.params.seed||Math.floor(Math.random()*1e6),i=new x(t),o=this.params.vegetationPatches;let a=0;o&&o.length>0?(a=o.length,this.generateVegetationFromPython(e,o,i)):(a=Math.floor(i.uniform(r.PATCH_COUNT.min,r.PATCH_COUNT.max)),this.generateProceduralVegetation(e,a,i))}generateVegetationFromPython(e,t,i){t.forEach((o,a)=>{this.createVegetationPatch(e,o,i,a)})}generateProceduralVegetation(e,t,i){for(let o=0;o<t;o++){const a=i.uniform(0,2*Math.PI),s=i.uniform(-1,1),n=Math.acos(s),c={position_3d:[Math.sin(n)*Math.cos(a),Math.sin(n)*Math.sin(a),Math.cos(n)],size:i.uniform(r.SIZE.min,r.SIZE.max),color:[i.uniform(.1,.4),i.uniform(.4,.8),i.uniform(.1,.3)]};this.createVegetationPatch(e,c,i,o)}}createVegetationPatch(e,t,i,o){const a=t.position_3d||t.position||[0,0,1],s=(t.size||this.params.size)*e;let n=this.params.color instanceof g?this.params.color:new g(this.params.color);t.color&&Array.isArray(t.color)&&(n=new g(t.color[0],t.color[1],t.color[2]));const c=new h(a[0],a[1],a[2]).normalize();c.clone().multiplyScalar(e*1.001),this.createVegetationBase(e,c,s,n,i,o),this.createTreeLayer(e,c,s,n,i,o)}createVegetationBase(e,t,i,o,a,s){const n=Math.max(16,Math.floor(i*e*200)),c=new S(i*2,i*2,n,n);this.curvePlaneToSphere(c,t,e*1.001);const m=new T({vertexShader:u.vegetationVertexShader,fragmentShader:u.vegetationFragmentShader,uniforms:{time:{value:0},timeSpeed:{value:this.params.timeSpeed},opacity:{value:this.params.opacity},vegetationColor:{value:o},density:{value:this.params.density},treeHeight:{value:this.params.treeHeight},lightDirection:{value:new h(1,1,1).normalize()},lightPosition:{value:new h(0,0,0)}},transparent:!0,blending:M,depthWrite:!1,side:E}),l=new w(c,m);l.renderOrder=3,this.vegetationPatches.push(l),this.vegetationGroup.add(l)}createTreeLayer(e,t,i,o,a,s){const n=Math.max(12,Math.floor(i*e*150)),c=new S(i*1.5,i*1.5,n,n),m=c.attributes.position,l=new h;for(let d=0;d<m.count;d++){l.fromBufferAttribute(m,d);const y=this.noise2D(l.x*10,l.y*10,a)*this.params.treeHeight*e;l.z+=y,m.setXYZ(d,l.x,l.y,l.z)}m.needsUpdate=!0,c.computeVertexNormals(),this.curvePlaneToSphere(c,t,e*1.003);const p=o.clone().multiplyScalar(.7),f=new T({vertexShader:u.vegetationVertexShader,fragmentShader:u.vegetationFragmentShader,uniforms:{time:{value:0},timeSpeed:{value:this.params.timeSpeed},opacity:{value:this.params.opacity*.8},vegetationColor:{value:p},density:{value:this.params.density*1.2},treeHeight:{value:this.params.treeHeight},lightDirection:{value:new h(1,1,1).normalize()},lightPosition:{value:new h(0,0,0)}},transparent:!0,blending:M,depthWrite:!1,side:E}),v=new w(c,f);v.renderOrder=4,this.treeLayers.push(v),this.vegetationGroup.add(v)}curvePlaneToSphere(e,t,i){const o=new h,a=new h;Math.abs(t.y)<.99?o.crossVectors(t,new h(0,1,0)).normalize():o.crossVectors(t,new h(1,0,0)).normalize(),a.crossVectors(t,o).normalize();const s=new I;s.makeBasis(o,a,t),e.applyMatrix4(s);const n=e.attributes.position,c=new h,m=t.clone().multiplyScalar(i);for(let l=0;l<n.count;l++){c.fromBufferAttribute(n,l);const d=c.clone().add(m).clone().normalize().multiplyScalar(i+c.z).sub(m);n.setXYZ(l,d.x,d.y,d.z)}n.needsUpdate=!0,e.computeVertexNormals(),e.translate(m.x,m.y,m.z)}noise2D(e,t,i){const o=this.params.seed||0,a=(y,V)=>{const C=y*12.9898+V*78.233+o;return Math.sin(C)*43758.5453%1},s=Math.floor(e),n=Math.floor(t),c=e-s,m=t-n,l=Math.abs(a(s,n)),p=Math.abs(a(s+1,n)),f=Math.abs(a(s,n+1)),v=Math.abs(a(s+1,n+1)),d=l*(1-c)+p*c,P=f*(1-c)+v*c;return d*(1-m)+P*m}addToScene(e,t){t&&this.vegetationGroup.position.copy(t),e.add(this.vegetationGroup)}update(e){const a=(Date.now()/1e3-this.cosmicOriginTime+this.cosmicOffset)*this.params.timeSpeed%1e4;[...this.vegetationPatches,...this.treeLayers].forEach(s=>{const n=s.material;n.uniforms.time.value=a})}updateLightPosition(e){[...this.vegetationPatches,...this.treeLayers].forEach(t=>{const i=t.material;i.uniforms.lightPosition&&i.uniforms.lightPosition.value.copy(e)})}updateLightDirection(e){[...this.vegetationPatches,...this.treeLayers].forEach(t=>{const i=t.material;i.uniforms.lightDirection&&i.uniforms.lightDirection.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}updateParams(e){this.params={...this.params,...e},[...this.vegetationPatches,...this.treeLayers].forEach(t=>{const i=t.material;e.opacity!==void 0&&(i.uniforms.opacity.value=e.opacity),e.density!==void 0&&(i.uniforms.density.value=e.density),e.timeSpeed!==void 0&&(i.uniforms.timeSpeed.value=e.timeSpeed)})}getObject3D(){return this.vegetationGroup}dispose(){[...this.vegetationPatches,...this.treeLayers].forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.vegetationPatches=[],this.treeLayers=[],this.vegetationGroup.clear()}}function H(b,e,t,i){const o=e.vegetation,a=t||Math.floor(Math.random()*1e6),s=new x(a+8e3),n={color:new g(2972221),density:s.uniform(r.DENSITY.min,r.DENSITY.max),opacity:s.uniform(r.OPACITY.min,r.OPACITY.max),size:s.uniform(r.SIZE.min,r.SIZE.max),treeHeight:s.uniform(r.TREE_HEIGHT.min,r.TREE_HEIGHT.max),timeSpeed:s.uniform(r.TIME_SPEED.min,r.TIME_SPEED.max),seed:a+8e3,cosmicOriginTime:i,vegetationPatches:o};return new u(b,n)}export{u as V,H as c};
