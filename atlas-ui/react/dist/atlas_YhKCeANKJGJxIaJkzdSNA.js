import{S as O}from"./atlas_xfnyr93axqOl2-j5dyf-s.js";import{G as da,V as g,C as q,S as ha,D as ga,A as va,M as pa,B as Ma,g as W}from"./atlas_DykKF8lCJH3_A5qpAP-Im.js";const o={LAKE_COUNT:{min:8,max:12},LAKE_SIZE:{min:.15,max:.55},LAKE_SIZE_VARIATION:{min:.6,max:1.4},HEAT_INTENSITY:{min:.8,max:1.5},FLOW_SPEED:{min:.002,max:.008},BUBBLE_ACTIVITY:{min:.6,max:1},GLOW_INTENSITY:{min:.8,max:1},TIME_SPEED:{min:.1,max:.3},SHAPE_COMPLEXITY:{min:3,max:8},SHAPE_IRREGULARITY:{min:.2,max:.6}};class z{magmaGroup;magmaLakes=[];magmaFlows=[];params;cosmicOriginTime;cosmicOffset;static magmaVertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float timeSpeed;
    uniform float flowSpeed;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      // Posición del mundo para efectos de flujo y calor
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      
      // Movimiento de flujo del magma adaptado para superficie curva
      vec3 pos = position;
      float slowTime = time * timeSpeed;
      
      // Para geometría esférica, aplicar deformaciones que respeten la curvatura
      // Usar coordenadas polares locales para flujo radial
      float localRadius = length(pos.xy);
      float localAngle = atan(pos.y, pos.x);
      
      // Flujo viscoso del magma en coordenadas polares
      float radialFlow = sin(slowTime * 0.8 + localAngle * 4.0) * flowSpeed * 0.3;
      float angularFlow = cos(slowTime * 0.6 + localRadius * 20.0) * flowSpeed * 0.2;
      
      // Aplicar flujo radial (hacia adentro/afuera del centro del parche)
      if (localRadius > 0.0) {
        vec2 radialDir = normalize(pos.xy);
        pos.xy += radialDir * radialFlow;
      }
      
      // Aplicar flujo angular (rotación alrededor del centro)
      vec2 tangentialDir = vec2(-sin(localAngle), cos(localAngle));
      pos.xy += tangentialDir * angularFlow;
      
      // Ligero movimiento vertical para simular burbujeo, respetando la curvatura
      float bubbleHeight = sin(slowTime * 1.5 + localRadius * 15.0 + localAngle * 3.0) * flowSpeed * 0.05;
      pos.z += bubbleHeight;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static magmaFragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    
    uniform float time;
    uniform float heatIntensity;
    uniform float bubbleActivity;
    uniform float glowIntensity;
    uniform vec3 magmaColor;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float flowSpeed;
    
    // Función de ruido para textura de magma
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
      
      for (int i = 0; i < 4; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      // Coordenadas de textura animadas para flujo de magma con más complejidad
      vec2 magmaUv1 = vUv * 4.0 + time * flowSpeed * vec2(0.5, 0.2);
      vec2 magmaUv2 = vUv * 7.0 + time * flowSpeed * vec2(-0.3, 0.4);
      vec2 magmaUv3 = vUv * 12.0 + time * flowSpeed * vec2(0.2, -0.6);
      vec2 magmaUv4 = vUv * 20.0 + time * flowSpeed * vec2(-0.1, 0.3); // Detalles finos
      
      // Múltiples capas de ruido para textura de magma muy compleja
      float magmaNoise1 = fbm(magmaUv1);
      float magmaNoise2 = fbm(magmaUv2);
      float magmaNoise3 = fbm(magmaUv3) * 0.5;
      float detailNoise = fbm(magmaUv4) * 0.3; // Detalles finos de superficie
      
      // Crear patrones de flujo direccional
      vec2 flowDir = normalize(vUv - vec2(0.5));
      float flowPattern = fbm(vUv * 8.0 + flowDir * time * flowSpeed * 2.0) * 0.4;
      
      // Combinar ruidos para textura de magma viscoso muy detallada
      float combinedNoise = magmaNoise1 * 0.4 + magmaNoise2 * 0.25 + magmaNoise3 * 0.15 + detailNoise * 0.1 + flowPattern * 0.1;
      
      // Color base del magma con variaciones de temperatura
      vec3 baseColor = magmaColor;
      
      // Crear zonas más calientes (amarillo-blanco) y más frías (rojo oscuro)
      float heatVariation = combinedNoise * heatIntensity;
      
      // Colores de temperatura del magma más realistas y variados
      vec3 veryHotMagma = vec3(1.4, 1.0, 0.6);  // Blanco-amarillo súper caliente
      vec3 hotMagma = vec3(1.2, 0.8, 0.3);      // Amarillo-blanco caliente
      vec3 warmMagma = vec3(1.0, 0.5, 0.1);     // Naranja cálido  
      vec3 mediumMagma = vec3(0.9, 0.3, 0.05);  // Rojo-naranja medio
      vec3 coolMagma = vec3(0.7, 0.15, 0.0);    // Rojo más frío
      vec3 coldMagma = vec3(0.4, 0.08, 0.0);    // Rojo muy oscuro (casi solidificado)
      
      vec3 finalColor = baseColor;
      
      // Aplicar gradiente de temperatura más suave y realista
      if (heatVariation > 0.85) {
        finalColor = mix(finalColor, veryHotMagma, (heatVariation - 0.85) * 6.0);
      } else if (heatVariation > 0.65) {
        finalColor = mix(finalColor, hotMagma, (heatVariation - 0.65) * 4.0);
      } else if (heatVariation > 0.45) {
        finalColor = mix(finalColor, warmMagma, (heatVariation - 0.45) * 3.0);
      } else if (heatVariation > 0.25) {
        finalColor = mix(finalColor, mediumMagma, (heatVariation - 0.25) * 2.5);
      } else if (heatVariation > 0.1) {
        finalColor = mix(finalColor, coolMagma, (heatVariation - 0.1) * 2.0);
      } else {
        finalColor = mix(finalColor, coldMagma, (0.1 - heatVariation) * 3.0);
      }
      
      // Añadir variaciones de temperatura basadas en el patrón de flujo
      float flowTemperature = flowPattern * 0.3;
      if (flowTemperature > 0.15) {
        finalColor = mix(finalColor, hotMagma, flowTemperature);
      }
      
      // Efectos de burbujeo más realistas y variados
      float bubblePattern1 = sin(vUv.x * 18.0 + time * 3.2) * sin(vUv.y * 22.0 + time * 2.8);
      float bubblePattern2 = sin(vUv.x * 35.0 + time * 4.1) * sin(vUv.y * 28.0 + time * 3.5);
      float bubbleNoise1 = noise(vUv * 30.0 + time * 1.2) * bubbleActivity;
      float bubbleNoise2 = noise(vUv * 45.0 + time * 0.6) * bubbleActivity * 0.7;
      
      // Burbujas grandes (gases principales)
      if (bubblePattern1 * bubbleNoise1 > 0.35) {
        finalColor = mix(finalColor, veryHotMagma, 0.5);
      }
      
      // Burbujas pequeñas (desgasificación detallada)
      if (bubblePattern2 * bubbleNoise2 > 0.4) {
        finalColor = mix(finalColor, hotMagma, 0.3);
      }
      
      // Efectos de convección (remolinos de calor)
      float convectionPattern = fbm(vUv * 6.0 + time * flowSpeed * 0.5);
      if (convectionPattern > 0.6) {
        finalColor = mix(finalColor, warmMagma, 0.2);
      }
      
      // Iluminación planetaria siguiendo el patrón del README.md
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      // Usar normal mundial correcta como en PlanetLayerSystem
      vec3 normal = normalize(vWorldNormal);
      float dotNL = dot(normal, lightDir);
      
      // Smooth day/night transition como en el README
      float dayNight = smoothstep(-0.3, 0.1, dotNL);
      
      // Rim lighting para visibilidad mejorada
      float rimLight = 1.0 - abs(dotNL);
      rimLight = pow(rimLight, 3.0) * 0.1;
      
      // El magma es auto-iluminado pero sigue la iluminación planetaria
      float ambientStrength = 0.6; // Alta iluminación ambiente por emisión propia
      float lightIntensity = 0.4;   // Menos dependiente de luz externa
      
      // Cálculo final de iluminación siguiendo el patrón del README
      float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
      
      // Emisión intensa del magma caliente (auto-iluminación)
      float emission = glowIntensity * (0.8 + heatVariation * 0.4);
      
      // Aplicar iluminación planetaria + emisión propia
      finalColor *= totalLight;
      finalColor += finalColor * emission * 0.3; // Emisión adicional para brillo
      
      // Alpha con variación para flujos naturales
      float alpha = 0.95; // Magma muy opaco
      
      // Reducir alpha en los bordes para transición suave
      float distance = length(vUv - vec2(0.5));
      alpha *= smoothstep(0.5, 0.3, distance);
      
      // Añadir variación de alpha basada en temperatura
      alpha *= 0.9 + heatVariation * 0.1;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(i,e={}){const a=e.seed||Math.floor(Math.random()*1e6);this.cosmicOriginTime=e.cosmicOriginTime||51408e4,this.cosmicOffset=a%3600*10;const t=new O(a);this.params={heatIntensity:e.heatIntensity||t.uniform(o.HEAT_INTENSITY.min,o.HEAT_INTENSITY.max),flowSpeed:e.flowSpeed||t.uniform(o.FLOW_SPEED.min,o.FLOW_SPEED.max),bubbleActivity:e.bubbleActivity||t.uniform(o.BUBBLE_ACTIVITY.min,o.BUBBLE_ACTIVITY.max),glowIntensity:e.glowIntensity||t.uniform(o.GLOW_INTENSITY.min,o.GLOW_INTENSITY.max),timeSpeed:e.timeSpeed||t.uniform(o.TIME_SPEED.min,o.TIME_SPEED.max),seed:a,cosmicOriginTime:this.cosmicOriginTime,magmaLakes:e.magmaLakes||[]},this.magmaGroup=new da,this.generateMagmaFlows(i)}generateMagmaFlows(i){const e=this.params.seed||Math.floor(Math.random()*1e6),a=new O(e),t=this.params.magmaLakes;if(t&&t.length>0)this.generateMagmaFromPython(i,t,a);else{const f=Math.floor(a.uniform(o.LAKE_COUNT.min,o.LAKE_COUNT.max));this.generateProceduralMagma(i,f,a)}}generateMagmaFromPython(i,e,a){e.forEach(t=>{this.createMagmaLake(i,t,a)})}generateProceduralMagma(i,e,a){for(let t=0;t<e;t++){const f=a.uniform(0,2*Math.PI),n=a.uniform(-1,1),l=Math.acos(n),u=a.uniform(0,1);let d;u<.3?d=[1,.8,.3,1]:u<.6?d=[.85,.27,0,1]:u<.85?d=[.7,.15,0,1]:d=[.6,.1,.2,1];const x={position_3d:[Math.sin(l)*Math.cos(f),Math.sin(l)*Math.sin(f),Math.cos(l)],radius:a.uniform(o.LAKE_SIZE.min,o.LAKE_SIZE.max),color:d,temperature:a.uniform(1500,2e3),bubble_activity:a.uniform(.6,1),glow_intensity:a.uniform(.8,1)};this.createMagmaLake(i,x,a)}}createMagmaLake(i,e,a){const t=e.position_3d||[0,0,1],f=e.radius||a.uniform(o.LAKE_SIZE.min,o.LAKE_SIZE.max),n=a.uniform(o.LAKE_SIZE_VARIATION.min,o.LAKE_SIZE_VARIATION.max),l=e.radius?.8*n:1.2*n,u=f*i*l,d={complexity:Math.floor(a.uniform(o.SHAPE_COMPLEXITY.min,o.SHAPE_COMPLEXITY.max)),irregularity:a.uniform(o.SHAPE_IRREGULARITY.min,o.SHAPE_IRREGULARITY.max),elongation:a.uniform(.6,1.5),rotation:a.uniform(0,Math.PI*2),seed:a.uniform(0,1e6)},x=new g(t[0],t[1],t[2]).normalize(),C=this.createMagmaLakeGeometry(u,a,i,x,d);let A=new q(.85,.27,0);e.color&&Array.isArray(e.color)&&(A=new q(e.color[0],e.color[1],e.color[2]));const F=new ha({vertexShader:z.magmaVertexShader,fragmentShader:z.magmaFragmentShader,uniforms:{time:{value:0},timeSpeed:{value:this.params.timeSpeed},heatIntensity:{value:this.params.heatIntensity},bubbleActivity:{value:e.bubble_activity||this.params.bubbleActivity},glowIntensity:{value:e.glow_intensity||this.params.glowIntensity},magmaColor:{value:A},flowSpeed:{value:this.params.flowSpeed},lightDirection:{value:new g(1,1,1).normalize()},lightPosition:{value:new g(0,0,0)}},transparent:!0,blending:va,depthWrite:!1,side:ga}),b=new pa(C,F);b.position.set(0,0,0),b.renderOrder=8,this.magmaLakes.push(b),this.magmaGroup.add(b)}createMagmaLakeGeometry(i,e,a,t,f){const n=Math.max(24,Math.floor(i*60)),l=f||{complexity:5,irregularity:.4,elongation:1,rotation:0,seed:0},u=new O(l.seed),d=[],x=[],C=[],A=[],F=i/a;let b=0;const E=[],J=r=>{let s=1;const v=r-l.rotation,m=Math.cos(v),c=Math.sin(v);s*=Math.sqrt(1/(m*m/(l.elongation*l.elongation)+c*c));for(let h=0;h<l.complexity;h++){const p=h/l.complexity*Math.PI*2+u.uniform(-.3,.3),j=u.uniform(.1,.3)*l.irregularity,_=u.uniform(.3,.6);let y=r-p;for(;y>Math.PI;)y-=Math.PI*2;for(;y<-Math.PI;)y+=Math.PI*2;const L=Math.exp(-(y*y)/(2*_*_));s+=j*L}const I=8,T=.05*l.irregularity;return s+=Math.sin(r*I+u.uniform(0,Math.PI*2))*T,s+=Math.sin(r*I*1.7+u.uniform(0,Math.PI*2))*T*.5,Math.max(.3,Math.min(1.5,s))};for(let r=0;r<=n;r++){E[r]=[];for(let s=0;s<=n;s++){const v=r/n*2-1,m=s/n*2-1,c=Math.sqrt(v*v+m*m),I=Math.atan2(m,v),T=J(I);if(c<=T){const h=c*F,p=Math.atan2(m,v),j=Math.sin(h)*Math.cos(p),_=Math.sin(h)*Math.sin(p),y=Math.cos(h),L=new g(j,_,y),N=t.clone().normalize(),D=new g,H=new g;Math.abs(N.z)<.9?D.crossVectors(N,new g(0,0,1)).normalize():D.crossVectors(N,new g(1,0,0)).normalize(),H.crossVectors(D,N).normalize();const V=new g;V.addScaledVector(D,L.x),V.addScaledVector(H,L.y),V.addScaledVector(N,L.z);const w=V.normalize();let R=0;const Q=(1-c)*.003,k=10,$=Math.sin(h*k+p*3)*8e-4,aa=Math.cos(h*7+p*k)*5e-4,ea=Math.sin(h*15)*Math.cos(p*12)*3e-4,oa=Math.sin(p*4)*4e-4;R=Q+$+aa+ea+oa,Math.sin(h*6)*Math.sin(p*8)>.3&&c>.3&&(R+=.0012);const S=w.multiplyScalar(a+a*(.002+R));d.push(S.x,S.y,S.z),x.push(w.x,w.y,w.z);const ia=.5+v*.5,ta=.5+m*.5;C.push(ia,ta),E[r][s]=b,b++;const Y=T*.65;if(c>Y){const M=Math.atan2(m,v),na=Math.sin(M*6)*.04+Math.sin(M*3)*.06,ra=Math.sin(M*15)*.02+Math.sin(M*22)*.015,sa=Math.sin(M*4+h*8)*.03,la=Math.sin(M*12)*.5+.5>.7?u.uniform(.15,.25):0,K=Math.pow((c-Y)/(T-Y),2),B=((na+ra+sa)*K+la*K)*u.uniform(.12,.2)*l.irregularity,U=new g,Z=new g;Math.abs(w.z)<.9?U.crossVectors(w,new g(0,0,1)).normalize():U.crossVectors(w,new g(1,0,0)).normalize(),Z.crossVectors(w,U).normalize();const ma=Math.cos(M)*B*a,ca=Math.sin(M)*B*a,fa=Math.sin(M*7+h*12)*B*.3,ua=U.clone().multiplyScalar(ma+fa).add(Z.clone().multiplyScalar(ca));S.add(ua);const G=(b-1)*3;d[G]=S.x,d[G+1]=S.y,d[G+2]=S.z}}else E[r][s]=null}}for(let r=0;r<n;r++)for(let s=0;s<n;s++){const v=E[r][s],m=E[r+1][s],c=E[r][s+1],I=E[r+1][s+1];v!==null&&m!==null&&c!==null&&A.push(v,m,c),m!==null&&c!==null&&I!==null&&A.push(m,I,c)}const P=new Ma;return P.setAttribute("position",new W(d,3)),P.setAttribute("normal",new W(x,3)),P.setAttribute("uv",new W(C,2)),P.setIndex(A),P}addToScene(i,e){e&&this.magmaGroup.position.copy(e),i.add(this.magmaGroup)}update(){const t=(Date.now()/1e3-this.cosmicOriginTime+this.cosmicOffset)*this.params.timeSpeed%1e4;[...this.magmaLakes,...this.magmaFlows].forEach(f=>{const n=f.material;n.uniforms.time.value=t})}updateLightPosition(i){[...this.magmaLakes,...this.magmaFlows].forEach(e=>{const a=e.material;a.uniforms.lightPosition&&a.uniforms.lightPosition.value.copy(i)})}updateLightDirection(i){[...this.magmaLakes,...this.magmaFlows].forEach(e=>{const a=e.material;a.uniforms.lightDirection&&a.uniforms.lightDirection.value.copy(i)})}updateFromThreeLight(i){this.updateLightPosition(i.position);const e=i.target.position.clone().sub(i.position).normalize();this.updateLightDirection(e)}getObject3D(){return this.magmaGroup}dispose(){[...this.magmaLakes,...this.magmaFlows].forEach(i=>{i.geometry.dispose(),i.material.dispose()}),this.magmaLakes=[],this.magmaFlows=[],this.magmaGroup.clear()}}function Aa(X,i,e,a){const t=i.magma_lakes;if(!t||t.length===0)return null;const f=e||Math.floor(Math.random()*1e6),n=new O(f+9e3),l={heatIntensity:n.uniform(o.HEAT_INTENSITY.min,o.HEAT_INTENSITY.max),flowSpeed:n.uniform(o.FLOW_SPEED.min,o.FLOW_SPEED.max),bubbleActivity:n.uniform(o.BUBBLE_ACTIVITY.min,o.BUBBLE_ACTIVITY.max),glowIntensity:n.uniform(o.GLOW_INTENSITY.min,o.GLOW_INTENSITY.max),timeSpeed:n.uniform(o.TIME_SPEED.min,o.TIME_SPEED.max),seed:f+9e3,cosmicOriginTime:a,magmaLakes:t};return new z(X,l)}export{z as M,Aa as c};
