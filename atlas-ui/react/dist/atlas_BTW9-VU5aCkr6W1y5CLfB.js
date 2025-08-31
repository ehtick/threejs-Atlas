import{S as O}from"./atlas_DcFWk_8uQW5YiyxJyXm9Z.js";import{G as gt,V as v,C as X,S as ut,D as vt,A as dt,M as pt,B as Mt,g as H}from"./atlas_BOOzg5XYrrU1N4SZySfRd.js";const a={LAKE_COUNT:{min:8,max:12},LAKE_SIZE:{min:.15,max:.55},LAKE_SIZE_VARIATION:{min:.6,max:1.4},HEAT_INTENSITY:{min:.8,max:1.5},FLOW_SPEED:{min:.002,max:.008},BUBBLE_ACTIVITY:{min:.6,max:1},GLOW_INTENSITY:{min:.8,max:1},TIME_SPEED:{min:.1,max:.3},SHAPE_COMPLEXITY:{min:3,max:8},SHAPE_IRREGULARITY:{min:.2,max:.6}};class z{magmaGroup;magmaLakes=[];magmaFlows=[];params;cosmicOriginTime;cosmicOffset;static magmaVertexShader=`
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
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vWorldNormal = normalize(mat3(modelMatrix) * normal);
      
      vec3 pos = position;
      float slowTime = time * timeSpeed;
      
      float localRadius = length(pos.xy);
      float localAngle = atan(pos.y, pos.x);
      
      float radialFlow = sin(slowTime * 0.8 + localAngle * 4.0) * flowSpeed * 0.3;
      float angularFlow = cos(slowTime * 0.6 + localRadius * 20.0) * flowSpeed * 0.2;
      
      if (localRadius > 0.0) {
        vec2 radialDir = normalize(pos.xy);
        pos.xy += radialDir * radialFlow;
      }
      
      vec2 tangentialDir = vec2(-sin(localAngle), cos(localAngle));
      pos.xy += tangentialDir * angularFlow;
      
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
      vec2 magmaUv1 = vUv * 4.0 + time * flowSpeed * vec2(0.5, 0.2);
      vec2 magmaUv2 = vUv * 7.0 + time * flowSpeed * vec2(-0.3, 0.4);
      vec2 magmaUv3 = vUv * 12.0 + time * flowSpeed * vec2(0.2, -0.6);
      vec2 magmaUv4 = vUv * 20.0 + time * flowSpeed * vec2(-0.1, 0.3);
      
      float magmaNoise1 = fbm(magmaUv1);
      float magmaNoise2 = fbm(magmaUv2);
      float magmaNoise3 = fbm(magmaUv3) * 0.5;
      float detailNoise = fbm(magmaUv4) * 0.3;
      
      vec2 flowDir = normalize(vUv - vec2(0.5));
      float flowPattern = fbm(vUv * 8.0 + flowDir * time * flowSpeed * 2.0) * 0.4;
      
      float combinedNoise = magmaNoise1 * 0.4 + magmaNoise2 * 0.25 + magmaNoise3 * 0.15 + detailNoise * 0.1 + flowPattern * 0.1;
      
      vec3 baseColor = magmaColor;
      
      float heatVariation = combinedNoise * heatIntensity;
      
      vec3 veryHotMagma = vec3(1.4, 1.0, 0.6);
      vec3 hotMagma = vec3(1.2, 0.8, 0.3);
      vec3 warmMagma = vec3(1.0, 0.5, 0.1);
      vec3 mediumMagma = vec3(0.9, 0.3, 0.05);
      vec3 coolMagma = vec3(0.7, 0.15, 0.0);
      vec3 coldMagma = vec3(0.4, 0.08, 0.0);
      
      vec3 finalColor = baseColor;
      
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
      
      float flowTemperature = flowPattern * 0.3;
      if (flowTemperature > 0.15) {
        finalColor = mix(finalColor, hotMagma, flowTemperature);
      }
      
      float bubblePattern1 = sin(vUv.x * 18.0 + time * 3.2) * sin(vUv.y * 22.0 + time * 2.8);
      float bubblePattern2 = sin(vUv.x * 35.0 + time * 4.1) * sin(vUv.y * 28.0 + time * 3.5);
      float bubbleNoise1 = noise(vUv * 30.0 + time * 1.2) * bubbleActivity;
      float bubbleNoise2 = noise(vUv * 45.0 + time * 0.6) * bubbleActivity * 0.7;
      
      if (bubblePattern1 * bubbleNoise1 > 0.35) {
        finalColor = mix(finalColor, veryHotMagma, 0.5);
      }
      
      if (bubblePattern2 * bubbleNoise2 > 0.4) {
        finalColor = mix(finalColor, hotMagma, 0.3);
      }
      
      float convectionPattern = fbm(vUv * 6.0 + time * flowSpeed * 0.5);
      if (convectionPattern > 0.6) {
        finalColor = mix(finalColor, warmMagma, 0.2);
      }
      
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection);
      }
      
      vec3 normal = normalize(vWorldNormal);
      float dotNL = dot(normal, lightDir);
      
      float dayNight = smoothstep(-0.3, 0.1, dotNL);
      
      float rimLight = 1.0 - abs(dotNL);
      rimLight = pow(rimLight, 3.0) * 0.1;
      
      float ambientStrength = 0.6;
      float lightIntensity = 0.4;
      
      float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
      
      float emission = glowIntensity * (0.8 + heatVariation * 0.4);
      
      finalColor *= totalLight;
      finalColor += finalColor * emission * 0.3;
      
      float alpha = 0.95;
      
      float distance = length(vUv - vec2(0.5));
      alpha *= smoothstep(0.5, 0.3, distance);
      
      alpha *= 0.9 + heatVariation * 0.1;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(e,o={}){const t=o.seed||Math.floor(Math.random()*1e6);this.cosmicOriginTime=o.cosmicOriginTime||51408e4,this.cosmicOffset=t%3600*10;const i=new O(t);this.params={heatIntensity:o.heatIntensity||i.uniform(a.HEAT_INTENSITY.min,a.HEAT_INTENSITY.max),flowSpeed:o.flowSpeed||i.uniform(a.FLOW_SPEED.min,a.FLOW_SPEED.max),bubbleActivity:o.bubbleActivity||i.uniform(a.BUBBLE_ACTIVITY.min,a.BUBBLE_ACTIVITY.max),glowIntensity:o.glowIntensity||i.uniform(a.GLOW_INTENSITY.min,a.GLOW_INTENSITY.max),timeSpeed:o.timeSpeed||i.uniform(a.TIME_SPEED.min,a.TIME_SPEED.max),seed:t,cosmicOriginTime:this.cosmicOriginTime,magmaLakes:o.magmaLakes||[]},this.magmaGroup=new gt,this.generateMagmaFlows(e)}generateMagmaFlows(e){const o=this.params.seed||Math.floor(Math.random()*1e6),t=new O(o),i=this.params.magmaLakes;if(i&&i.length>0)this.generateMagmaFromPython(e,i,t);else{const f=Math.floor(t.uniform(a.LAKE_COUNT.min,a.LAKE_COUNT.max));this.generateProceduralMagma(e,f,t)}}generateMagmaFromPython(e,o,t){o.forEach(i=>{this.createMagmaLake(e,i,t)})}generateProceduralMagma(e,o,t){for(let i=0;i<o;i++){const f=t.uniform(0,2*Math.PI),n=t.uniform(-1,1),l=Math.acos(n),h=t.uniform(0,1);let g;h<.3?g=[1,.8,.3,1]:h<.6?g=[.85,.27,0,1]:h<.85?g=[.7,.15,0,1]:g=[.6,.1,.2,1];const x={position_3d:[Math.sin(l)*Math.cos(f),Math.sin(l)*Math.sin(f),Math.cos(l)],radius:t.uniform(a.LAKE_SIZE.min,a.LAKE_SIZE.max),color:g,temperature:t.uniform(1500,2e3),bubble_activity:t.uniform(.6,1),glow_intensity:t.uniform(.8,1)};this.createMagmaLake(e,x,t)}}createMagmaLake(e,o,t){const i=o.position_3d||[0,0,1],f=o.radius||t.uniform(a.LAKE_SIZE.min,a.LAKE_SIZE.max),n=t.uniform(a.LAKE_SIZE_VARIATION.min,a.LAKE_SIZE_VARIATION.max),l=o.radius?.8*n:1.2*n,h=f*e*l,g={complexity:Math.floor(t.uniform(a.SHAPE_COMPLEXITY.min,a.SHAPE_COMPLEXITY.max)),irregularity:t.uniform(a.SHAPE_IRREGULARITY.min,a.SHAPE_IRREGULARITY.max),elongation:t.uniform(.6,1.5),rotation:t.uniform(0,Math.PI*2),seed:t.uniform(0,1e6)},x=new v(i[0],i[1],i[2]).normalize(),_=this.createMagmaLakeGeometry(h,t,e,x,g);let T=new X(.85,.27,0);o.color&&Array.isArray(o.color)&&(T=new X(o.color[0],o.color[1],o.color[2]));const F=new ut({vertexShader:z.magmaVertexShader,fragmentShader:z.magmaFragmentShader,uniforms:{time:{value:0},timeSpeed:{value:this.params.timeSpeed},heatIntensity:{value:this.params.heatIntensity},bubbleActivity:{value:o.bubble_activity||this.params.bubbleActivity},glowIntensity:{value:o.glow_intensity||this.params.glowIntensity},magmaColor:{value:T},flowSpeed:{value:this.params.flowSpeed},lightDirection:{value:new v(1,1,1).normalize()},lightPosition:{value:new v(0,0,0)}},transparent:!0,blending:dt,depthWrite:!1,side:vt}),b=new pt(_,F);b.position.set(0,0,0),b.renderOrder=8,this.magmaLakes.push(b),this.magmaGroup.add(b)}createMagmaLakeGeometry(e,o,t,i,f){const n=Math.max(24,Math.floor(e*60)),l=f||{complexity:5,irregularity:.4,elongation:1,rotation:0,seed:0},h=new O(l.seed),g=[],x=[],_=[],T=[],F=e/t;let b=0;const I=[],J=s=>{let r=1;const d=s-l.rotation,m=Math.cos(d),c=Math.sin(d);r*=Math.sqrt(1/(m*m/(l.elongation*l.elongation)+c*c));for(let u=0;u<l.complexity;u++){const p=u/l.complexity*Math.PI*2+h.uniform(-.3,.3),Y=h.uniform(.1,.3)*l.irregularity,C=h.uniform(.3,.6);let w=s-p;for(;w>Math.PI;)w-=Math.PI*2;for(;w<-Math.PI;)w+=Math.PI*2;const L=Math.exp(-(w*w)/(2*C*C));r+=Y*L}const S=8,P=.05*l.irregularity;return r+=Math.sin(s*S+h.uniform(0,Math.PI*2))*P,r+=Math.sin(s*S*1.7+h.uniform(0,Math.PI*2))*P*.5,Math.max(.3,Math.min(1.5,r))};for(let s=0;s<=n;s++){I[s]=[];for(let r=0;r<=n;r++){const d=s/n*2-1,m=r/n*2-1,c=Math.sqrt(d*d+m*m),S=Math.atan2(m,d),P=J(S);if(c<=P){const u=c*F,p=Math.atan2(m,d),Y=Math.sin(u)*Math.cos(p),C=Math.sin(u)*Math.sin(p),w=Math.cos(u),L=new v(Y,C,w),N=i.clone().normalize(),V=new v,k=new v;Math.abs(N.z)<.9?V.crossVectors(N,new v(0,0,1)).normalize():V.crossVectors(N,new v(1,0,0)).normalize(),k.crossVectors(V,N).normalize();const D=new v;D.addScaledVector(V,L.x),D.addScaledVector(k,L.y),D.addScaledVector(N,L.z);const y=D.normalize();let G=0;const Q=(1-c)*.003,K=10,$=Math.sin(u*K+p*3)*8e-4,tt=Math.cos(u*7+p*K)*5e-4,ot=Math.sin(u*15)*Math.cos(p*12)*3e-4,at=Math.sin(p*4)*4e-4;G=Q+$+tt+ot+at,Math.sin(u*6)*Math.sin(p*8)>.3&&c>.3&&(G+=.0012);const E=y.multiplyScalar(t+t*(.002+G));g.push(E.x,E.y,E.z),x.push(y.x,y.y,y.z);const et=.5+d*.5,it=.5+m*.5;_.push(et,it),I[s][r]=b,b++;const W=P*.65;if(c>W){const M=Math.atan2(m,d),nt=Math.sin(M*6)*.04+Math.sin(M*3)*.06,st=Math.sin(M*15)*.02+Math.sin(M*22)*.015,rt=Math.sin(M*4+u*8)*.03,lt=Math.sin(M*12)*.5+.5>.7?h.uniform(.15,.25):0,Z=Math.pow((c-W)/(P-W),2),B=((nt+st+rt)*Z+lt*Z)*h.uniform(.12,.2)*l.irregularity,U=new v,j=new v;Math.abs(y.z)<.9?U.crossVectors(y,new v(0,0,1)).normalize():U.crossVectors(y,new v(1,0,0)).normalize(),j.crossVectors(y,U).normalize();const mt=Math.cos(M)*B*t,ct=Math.sin(M)*B*t,ft=Math.sin(M*7+u*12)*B*.3,ht=U.clone().multiplyScalar(mt+ft).add(j.clone().multiplyScalar(ct));E.add(ht);const R=(b-1)*3;g[R]=E.x,g[R+1]=E.y,g[R+2]=E.z}}else I[s][r]=null}}for(let s=0;s<n;s++)for(let r=0;r<n;r++){const d=I[s][r],m=I[s+1][r],c=I[s][r+1],S=I[s+1][r+1];d!==null&&m!==null&&c!==null&&T.push(d,m,c),m!==null&&c!==null&&S!==null&&T.push(m,S,c)}const A=new Mt;return A.setAttribute("position",new H(g,3)),A.setAttribute("normal",new H(x,3)),A.setAttribute("uv",new H(_,2)),A.setIndex(T),A}addToScene(e,o){o&&this.magmaGroup.position.copy(o),e.add(this.magmaGroup)}update(){const i=(Date.now()/1e3-this.cosmicOriginTime+this.cosmicOffset)*this.params.timeSpeed%1e4;[...this.magmaLakes,...this.magmaFlows].forEach(f=>{const n=f.material;n.uniforms.time.value=i})}updateLightPosition(e){[...this.magmaLakes,...this.magmaFlows].forEach(o=>{const t=o.material;t.uniforms.lightPosition&&t.uniforms.lightPosition.value.copy(e)})}updateLightDirection(e){[...this.magmaLakes,...this.magmaFlows].forEach(o=>{const t=o.material;t.uniforms.lightDirection&&t.uniforms.lightDirection.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const o=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(o)}getObject3D(){return this.magmaGroup}dispose(){[...this.magmaLakes,...this.magmaFlows].forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.magmaLakes=[],this.magmaFlows=[],this.magmaGroup.clear()}}function Tt(q,e,o,t){const i=e.magma_lakes;if(!i||i.length===0)return null;const f=o||Math.floor(Math.random()*1e6),n=new O(f+9e3),l={heatIntensity:n.uniform(a.HEAT_INTENSITY.min,a.HEAT_INTENSITY.max),flowSpeed:n.uniform(a.FLOW_SPEED.min,a.FLOW_SPEED.max),bubbleActivity:n.uniform(a.BUBBLE_ACTIVITY.min,a.BUBBLE_ACTIVITY.max),glowIntensity:n.uniform(a.GLOW_INTENSITY.min,a.GLOW_INTENSITY.max),timeSpeed:n.uniform(a.TIME_SPEED.min,a.TIME_SPEED.max),seed:f+9e3,cosmicOriginTime:t,magmaLakes:i};return new z(q,l)}export{z as M,Tt as c};
