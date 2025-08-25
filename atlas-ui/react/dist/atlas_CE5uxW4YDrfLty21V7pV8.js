import{S as v}from"./atlas_CZFakru7GGKiPV4DHwGyu.js";import{G as y,V as g,C as p,S,D as w,A as T,M,k as I}from"./atlas_BjkcO1_mNssSqp05cLhjd.js";const t={LAKE_COUNT:{min:8,max:12},LAKE_SIZE:{min:.25,max:.45},HEAT_INTENSITY:{min:.8,max:1.5},FLOW_SPEED:{min:.002,max:.008},BUBBLE_ACTIVITY:{min:.6,max:1},GLOW_INTENSITY:{min:.8,max:1},TIME_SPEED:{min:.1,max:.3}};class u{magmaGroup;magmaLakes=[];magmaFlows=[];params;cosmicOriginTime;cosmicOffset;static magmaVertexShader=`
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
      // Coordenadas de textura animadas para flujo de magma
      vec2 magmaUv1 = vUv * 3.0 + time * flowSpeed * vec2(0.5, 0.2);
      vec2 magmaUv2 = vUv * 5.0 + time * flowSpeed * vec2(-0.3, 0.4);
      vec2 magmaUv3 = vUv * 8.0 + time * flowSpeed * vec2(0.2, -0.6);
      
      // Múltiples capas de ruido para textura de magma compleja
      float magmaNoise1 = fbm(magmaUv1);
      float magmaNoise2 = fbm(magmaUv2);
      float magmaNoise3 = fbm(magmaUv3) * 0.5;
      
      // Combinar ruidos para textura de magma viscoso
      float combinedNoise = magmaNoise1 * 0.5 + magmaNoise2 * 0.3 + magmaNoise3 * 0.2;
      
      // Color base del magma con variaciones de temperatura
      vec3 baseColor = magmaColor;
      
      // Crear zonas más calientes (amarillo-blanco) y más frías (rojo oscuro)
      float heatVariation = combinedNoise * heatIntensity;
      
      // Colores de temperatura del magma
      vec3 hotMagma = vec3(1.2, 0.8, 0.3);  // Amarillo-blanco caliente
      vec3 warmMagma = vec3(1.0, 0.4, 0.1); // Naranja cálido  
      vec3 coolMagma = vec3(0.8, 0.2, 0.0); // Rojo más frío
      
      vec3 finalColor = baseColor;
      
      // Aplicar gradiente de temperatura
      if (heatVariation > 0.7) {
        finalColor = mix(finalColor, hotMagma, (heatVariation - 0.7) * 3.0);
      } else if (heatVariation > 0.4) {
        finalColor = mix(finalColor, warmMagma, (heatVariation - 0.4) * 2.0);
      } else if (heatVariation < 0.2) {
        finalColor = mix(finalColor, coolMagma, (0.2 - heatVariation) * 2.0);
      }
      
      // Efectos de burbujeo
      float bubblePattern = sin(vUv.x * 20.0 + time * 3.0) * sin(vUv.y * 15.0 + time * 2.5);
      float bubbleNoise = noise(vUv * 25.0 + time * 0.8) * bubbleActivity;
      
      if (bubblePattern * bubbleNoise > 0.3) {
        // Burbujas más calientes
        finalColor = mix(finalColor, hotMagma, 0.4);
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
  `;constructor(i,a={}){const e=a.seed||Math.floor(Math.random()*1e6);this.cosmicOriginTime=a.cosmicOriginTime||51408e4,this.cosmicOffset=e%3600*10;const o=new v(e);this.params={heatIntensity:a.heatIntensity||o.uniform(t.HEAT_INTENSITY.min,t.HEAT_INTENSITY.max),flowSpeed:a.flowSpeed||o.uniform(t.FLOW_SPEED.min,t.FLOW_SPEED.max),bubbleActivity:a.bubbleActivity||o.uniform(t.BUBBLE_ACTIVITY.min,t.BUBBLE_ACTIVITY.max),glowIntensity:a.glowIntensity||o.uniform(t.GLOW_INTENSITY.min,t.GLOW_INTENSITY.max),timeSpeed:a.timeSpeed||o.uniform(t.TIME_SPEED.min,t.TIME_SPEED.max),seed:e,cosmicOriginTime:this.cosmicOriginTime,magmaLakes:a.magmaLakes||[]},this.magmaGroup=new y,this.generateMagmaFlows(i)}generateMagmaFlows(i){const a=this.params.seed||Math.floor(Math.random()*1e6),e=new v(a),o=this.params.magmaLakes;if(o&&o.length>0)this.generateMagmaFromPython(i,o,e);else{const m=Math.floor(e.uniform(t.LAKE_COUNT.min,t.LAKE_COUNT.max));this.generateProceduralMagma(i,m,e)}}generateMagmaFromPython(i,a,e){a.forEach(o=>{this.createMagmaLake(i,o,e)})}generateProceduralMagma(i,a,e){for(let o=0;o<a;o++){const m=e.uniform(0,2*Math.PI),n=e.uniform(-1,1),r=Math.acos(n),l={position_3d:[Math.sin(r)*Math.cos(m),Math.sin(r)*Math.sin(m),Math.cos(r)],radius:e.uniform(t.LAKE_SIZE.min,t.LAKE_SIZE.max),color:[.85,.27,0,1],temperature:e.uniform(1500,2e3),bubble_activity:e.uniform(.6,1),glow_intensity:e.uniform(.8,1)};this.createMagmaLake(i,l,e)}}createMagmaLake(i,a,e){const o=a.position_3d||[0,0,1],m=a.radius||e.uniform(t.LAKE_SIZE.min,t.LAKE_SIZE.max),n=a.radius?.6:1,r=m*i*n,l=new g(o[0],o[1],o[2]).normalize(),c=l.clone().multiplyScalar(i*1.002),f=this.createMagmaLakeGeometry(r,e,i);let h=new p(.85,.27,0);a.color&&Array.isArray(a.color)&&(h=new p(a.color[0],a.color[1],a.color[2]));const d=new S({vertexShader:u.magmaVertexShader,fragmentShader:u.magmaFragmentShader,uniforms:{time:{value:0},timeSpeed:{value:this.params.timeSpeed},heatIntensity:{value:this.params.heatIntensity},bubbleActivity:{value:a.bubble_activity||this.params.bubbleActivity},glowIntensity:{value:a.glow_intensity||this.params.glowIntensity},magmaColor:{value:h},flowSpeed:{value:this.params.flowSpeed},lightDirection:{value:new g(1,1,1).normalize()},lightPosition:{value:new g(0,0,0)}},transparent:!0,blending:T,depthWrite:!1,side:w}),s=new M(f,d);s.position.copy(c),s.lookAt(l.clone().multiplyScalar(i*2)),s.renderOrder=8,this.magmaLakes.push(s),this.magmaGroup.add(s)}createMagmaLakeGeometry(i,a,e){const o=Math.max(16,Math.floor(i*50)),m=new I(i,o),n=m.attributes.position;for(let r=0;r<n.count;r++){const l=n.getX(r),c=n.getY(r),f=n.getZ(r);if(new g(l,c,f).length()<.01){n.setZ(r,0);continue}const d=Math.sqrt(l*l+c*c);if(d<e){const s=Math.sqrt(e*e-d*d),E=e-s;n.setZ(r,E)}else n.setZ(r,e)}return n.needsUpdate=!0,m.computeVertexNormals(),m}addToScene(i,a){a&&this.magmaGroup.position.copy(a),i.add(this.magmaGroup)}update(){const o=(Date.now()/1e3-this.cosmicOriginTime+this.cosmicOffset)*this.params.timeSpeed%1e4;[...this.magmaLakes,...this.magmaFlows].forEach(m=>{const n=m.material;n.uniforms.time.value=o})}updateLightPosition(i){[...this.magmaLakes,...this.magmaFlows].forEach(a=>{const e=a.material;e.uniforms.lightPosition&&e.uniforms.lightPosition.value.copy(i)})}updateLightDirection(i){[...this.magmaLakes,...this.magmaFlows].forEach(a=>{const e=a.material;e.uniforms.lightDirection&&e.uniforms.lightDirection.value.copy(i)})}updateFromThreeLight(i){this.updateLightPosition(i.position);const a=i.target.position.clone().sub(i.position).normalize();this.updateLightDirection(a)}getObject3D(){return this.magmaGroup}dispose(){[...this.magmaLakes,...this.magmaFlows].forEach(i=>{i.geometry.dispose(),i.material.dispose()}),this.magmaLakes=[],this.magmaFlows=[],this.magmaGroup.clear()}}function A(b,i,a,e){const o=i.magma_lakes;if(!o||o.length===0)return null;const m=a||Math.floor(Math.random()*1e6),n=new v(m+9e3),r={heatIntensity:n.uniform(t.HEAT_INTENSITY.min,t.HEAT_INTENSITY.max),flowSpeed:n.uniform(t.FLOW_SPEED.min,t.FLOW_SPEED.max),bubbleActivity:n.uniform(t.BUBBLE_ACTIVITY.min,t.BUBBLE_ACTIVITY.max),glowIntensity:n.uniform(t.GLOW_INTENSITY.min,t.GLOW_INTENSITY.max),timeSpeed:n.uniform(t.TIME_SPEED.min,t.TIME_SPEED.max),seed:m+9e3,cosmicOriginTime:e,magmaLakes:o};return new u(b,r)}export{u as M,A as c};
