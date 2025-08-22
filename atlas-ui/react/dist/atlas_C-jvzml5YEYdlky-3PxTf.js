import{S as M}from"./atlas_CMUvaCD4mo7XQYkYXSJfw.js";import{C as v,G as L,V as A,B as b,a as C,S as F,A as z,P as B,Q as H}from"./atlas_Ce3hh0hgxYWauQ_qSK6cl.js";const c={ERUPTION_COUNT:{min:15,max:35},ERUPTION_FREQUENCY:{min:.2,max:.8},ERUPTION_DURATION:{min:2,max:5},ERUPTION_HEIGHT:{min:.05,max:.15},ERUPTION_SPREAD:{min:.6,max:1.9},PARTICLES_PER_ERUPTION:{min:50,max:150},PARTICLE_SIZE:{min:.07,max:.09},PARTICLE_LIFETIME:{min:1.5,max:3.5},PARTICLE_SPEED:{min:.1,max:.4},EMISSIVE_INTENSITY:{min:2,max:4},TURBULENCE:{min:.5,max:1.5}};class k{position;direction;lastEruptionTime=0;isActive=!1;eruptionStartTime=0;rng;particleDirections=[];particleSpeeds=[];particleSizes=[];particleLifetimes=[];particleBirthTimes=[];particleActive=[];constructor(e,t,i,r,l,o,h,n,s,u){this.position=e,this.direction=e.clone().normalize(),this.rng=new M(t);for(let a=0;a<l;a++)this.particleDirections.push(this.getRandomDirection(o)),this.particleSpeeds.push(h*(.7+this.rng.random()*.6)),this.particleSizes.push(n*u*(.5+this.rng.random())),this.particleLifetimes.push(s*(.8+this.rng.random()*.4)),this.particleBirthTimes.push(-1),this.particleActive.push(!1);this.isActive=!1,this.eruptionStartTime=0,this.lastEruptionTime=0}initializeStateFromAbsoluteTime(e,t,i,r){const l=1/t,o=i+l,h=r*o*.37%o,n=(e+h)%o;if(n<i){this.isActive=!0,this.eruptionStartTime=e-n,this.lastEruptionTime=this.eruptionStartTime-l;const s=e-this.eruptionStartTime,u=Math.min(s/i,1);for(let a=0;a<this.particleDirections.length;a++){const T=a/this.particleDirections.length*.7;u>T&&(this.particleActive[a]=!0,this.particleBirthTimes[a]=this.eruptionStartTime+T*i,e-this.particleBirthTimes[a]>this.particleLifetimes[a]&&(this.particleActive[a]=!1))}}else{this.isActive=!1,this.lastEruptionTime=e-n+i-l,this.eruptionStartTime=0;const s=e-n,u=s+i;for(let a=0;a<this.particleDirections.length;a++){const T=a/this.particleDirections.length*.7,E=s+T*i;if(E<u){const m=e-E;m>0&&m<=this.particleLifetimes[a]&&(this.particleActive[a]=!0,this.particleBirthTimes[a]=E)}}}}shouldErupt(e,t,i){const r=1/t+i,o=(e-this.lastEruptionTime)%r<i;return o&&!this.isActive?!0:(!o&&this.isActive&&this.stopEruption(),!1)}startEruption(e){this.isActive=!0,this.eruptionStartTime=e,this.lastEruptionTime=e}stopEruption(){this.isActive=!1}getRandomDirection(e){const t=this.rng.uniform(0,Math.PI*2),i=this.rng.uniform(0,e),r=new A(Math.sin(i)*Math.cos(t),Math.sin(i)*Math.sin(t),Math.cos(i)),l=new H;return l.setFromUnitVectors(new A(0,0,1),this.direction),r.applyQuaternion(l),r}}class I{fireGroup;eruptions=[];particleSystem;particleGeometry;particleMaterial;params;startTime;planetRadius;maxParticles=5e3;static vertexShader=`
    attribute float size;
    attribute float temperature;
    attribute float opacity;
    
    varying float vTemperature;
    varying float vOpacity;
    
    void main() {
      vTemperature = temperature;
      vOpacity = opacity;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    uniform vec3 fireColorHot;
    uniform vec3 fireColorMid;
    uniform vec3 fireColorCool;
    uniform vec3 smokeColor;
    uniform float emissiveIntensity;
    
    varying float vTemperature;
    varying float vOpacity;
    
    void main() {
      // Forma circular de la partícula
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      
      // Suavizar los bordes con fadeout más gradual
      float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
      alpha *= vOpacity;
      
      // Fadeout adicional basado en opacidad para transición más suave
      alpha *= smoothstep(0.0, 0.3, vOpacity);
      
      // Descartar píxeles transparentes
      if (alpha < 0.01) discard;
      
      // Color basado en temperatura
      vec3 color;
      if (vTemperature > 0.7) {
        // Muy caliente: entre blanco-amarillo y naranja
        color = mix(fireColorMid, fireColorHot, (vTemperature - 0.7) / 0.3);
      } else if (vTemperature > 0.3) {
        // Caliente: entre naranja y rojo
        color = mix(fireColorCool, fireColorMid, (vTemperature - 0.3) / 0.4);
      } else {
        // Enfriándose: entre rojo oscuro y humo
        color = mix(smokeColor, fireColorCool, vTemperature / 0.3);
      }
      
      // Añadir emisividad para brillar
      color *= emissiveIntensity * (0.5 + vTemperature * 0.5);
      
      // Efecto de brillo en el centro
      float glow = 1.0 - dist * 2.0;
      color += vec3(1.0, 0.8, 0.3) * glow * vTemperature * 0.5;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(e,t={}){this.planetRadius=e;const i=t.seed||Math.floor(Math.random()*1e6),r=new M(i);this.startTime=t.startTime||i%1e4/1e3;const l=t.fireColorHot instanceof v?t.fireColorHot:new v(1,.95,.8),o=t.fireColorMid instanceof v?t.fireColorMid:new v(1,.5,.1),h=t.fireColorCool instanceof v?t.fireColorCool:new v(.8,.2,0),n=t.smokeColor instanceof v?t.smokeColor:new v(.2,.1,.05);this.params={eruptionCount:t.eruptionCount||Math.floor(r.uniform(c.ERUPTION_COUNT.min,c.ERUPTION_COUNT.max)),eruptionFrequency:t.eruptionFrequency||r.uniform(c.ERUPTION_FREQUENCY.min,c.ERUPTION_FREQUENCY.max),eruptionDuration:t.eruptionDuration||r.uniform(c.ERUPTION_DURATION.min,c.ERUPTION_DURATION.max),eruptionHeight:t.eruptionHeight||r.uniform(c.ERUPTION_HEIGHT.min,c.ERUPTION_HEIGHT.max),eruptionSpread:t.eruptionSpread||r.uniform(c.ERUPTION_SPREAD.min,c.ERUPTION_SPREAD.max),particlesPerEruption:t.particlesPerEruption||Math.floor(r.uniform(c.PARTICLES_PER_ERUPTION.min,c.PARTICLES_PER_ERUPTION.max)),particleSize:t.particleSize||r.uniform(c.PARTICLE_SIZE.min,c.PARTICLE_SIZE.max),particleLifetime:t.particleLifetime||r.uniform(c.PARTICLE_LIFETIME.min,c.PARTICLE_LIFETIME.max),particleSpeed:t.particleSpeed||r.uniform(c.PARTICLE_SPEED.min,c.PARTICLE_SPEED.max),particleGravity:t.particleGravity||.05,fireColorHot:l,fireColorMid:o,fireColorCool:h,smokeColor:n,emissiveIntensity:t.emissiveIntensity||r.uniform(c.EMISSIVE_INTENSITY.min,c.EMISSIVE_INTENSITY.max),glowIntensity:t.glowIntensity||2,turbulenceStrength:t.turbulenceStrength||r.uniform(c.TURBULENCE.min,c.TURBULENCE.max),windStrength:t.windStrength||.1,seed:i,startTime:this.startTime,timeSpeed:t.timeSpeed||r.uniform(.1,2)},this.fireGroup=new L,this.createEruptionPoints(r),this.initializeStateFromAbsoluteTime(),this.createParticleSystem(),this.initializeActiveEruptions();const u=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.updateParticleGeometry(u)}initializeStateFromAbsoluteTime(){const t=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;for(let i=0;i<this.eruptions.length;i++)this.eruptions[i].initializeStateFromAbsoluteTime(t,this.params.eruptionFrequency,this.params.eruptionDuration,i)}createEruptionPoints(e){const t=this.params.eruptionCount;for(let i=0;i<t;i++){const r=e.uniform(0,Math.PI*2),l=Math.acos(e.uniform(-1,1)),o=new A(Math.sin(l)*Math.cos(r)*this.planetRadius,Math.sin(l)*Math.sin(r)*this.planetRadius,Math.cos(l)*this.planetRadius),h=new k(o,Math.floor(e.random()*1e6),this.params.eruptionFrequency,this.params.eruptionDuration,150,this.params.eruptionSpread,this.params.particleSpeed,this.params.particleSize,this.params.particleLifetime,this.planetRadius);this.eruptions.push(h)}}createParticleSystem(){this.particleGeometry=new b;const e=new Float32Array(this.maxParticles*3),t=new Float32Array(this.maxParticles),i=new Float32Array(this.maxParticles),r=new Float32Array(this.maxParticles);this.particleGeometry.setAttribute("position",new C(e,3)),this.particleGeometry.setAttribute("size",new C(t,1)),this.particleGeometry.setAttribute("temperature",new C(i,1)),this.particleGeometry.setAttribute("opacity",new C(r,1)),this.particleMaterial=new F({vertexShader:I.vertexShader,fragmentShader:I.fragmentShader,uniforms:{fireColorHot:{value:this.params.fireColorHot},fireColorMid:{value:this.params.fireColorMid},fireColorCool:{value:this.params.fireColorCool},smokeColor:{value:this.params.smokeColor},emissiveIntensity:{value:this.params.emissiveIntensity}},transparent:!0,blending:z,depthWrite:!1,vertexColors:!1}),this.particleSystem=new B(this.particleGeometry,this.particleMaterial),this.particleSystem.renderOrder=4,this.fireGroup.add(this.particleSystem)}initializeActiveEruptions(){const t=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;for(let i=0;i<this.eruptions.length;i++){const r=this.eruptions[i],l=1/this.params.eruptionFrequency,o=this.params.eruptionDuration+l,h=i*o*.37%o,n=Math.max(...r.particleLifetimes),s=Math.ceil(n/o)+1;for(let u=0;u<s;u++){const a=t-u*o,T=(a+h)%o;if(T<this.params.eruptionDuration){const E=a-T;for(let m=0;m<150;m++){const p=m/150*.7,d=E+p*this.params.eruptionDuration,f=t-d;f>0&&f<=r.particleLifetimes[m]&&(r.particleActive[m]||(r.particleActive[m]=!0,r.particleBirthTimes[m]=d))}}}}}updateParticleGeometry(e){const t=this.particleGeometry.attributes.position,i=this.particleGeometry.attributes.size,r=this.particleGeometry.attributes.temperature,l=this.particleGeometry.attributes.opacity;let o=0;const h=150;for(let n=0;n<this.eruptions.length;n++){const s=this.eruptions[n],u=1/this.params.eruptionFrequency,a=this.params.eruptionDuration+u,T=n*a*.37%a,E=(e+T)%a,m=E<this.params.eruptionDuration;if(m&&!s.isActive?(s.isActive=!0,s.eruptionStartTime=e-E):!m&&s.isActive&&(s.isActive=!1),m){const p=e-s.eruptionStartTime,d=Math.min(p/this.params.eruptionDuration,1);for(let f=0;f<h;f++){const S=f/h*.7;d>S&&!s.particleActive[f]&&(s.particleActive[f]=!0,s.particleBirthTimes[f]=e-(d-S)*this.params.eruptionDuration)}}for(let p=0;p<h&&o<this.maxParticles;p++)if(s.particleActive[p]){const d=e-s.particleBirthTimes[p],f=s.particleLifetimes[p];if(d>f){s.particleActive[p]=!1;continue}const S=s.particleDirections[p].clone(),x=s.particleSpeeds[p]*d,y=s.position.clone().add(S.multiplyScalar(x)),D=this.params.particleGravity*d*d*.5;y.y-=D;const U=new A(Math.sin(e*.5+p*.1)*.01,Math.cos(e*.3+p*.1)*.005,Math.sin(e*.7+p*.1)*.01);y.add(U);const P=d/f,_=Math.max(0,1-P*.9),N=this.smoothstep(0,.1,P),O=this.smoothstep(1,.7,P),g=N*O,G=s.particleSizes[p];g>.01&&(t.setXYZ(o,y.x,y.y,y.z),i.setX(o,G),r.setX(o,_),l.setX(o,g),o++)}}for(let n=o;n<this.maxParticles;n++)t.setXYZ(n,0,0,0),i.setX(n,0),l.setX(n,0),r.setX(n,0);t.needsUpdate=!0,i.needsUpdate=!0,r.needsUpdate=!0,l.needsUpdate=!0,this.particleGeometry.setDrawRange(0,o)}smoothstep(e,t,i){const r=Math.max(0,Math.min(1,(i-e)/(t-e)));return r*r*(3-2*r)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.updateParticleGeometry(i)}addToScene(e,t){t&&this.fireGroup.position.copy(t),e.add(this.fireGroup)}getObject3D(){return this.fireGroup}dispose(){this.particleGeometry.dispose(),this.particleMaterial.dispose(),this.fireGroup.clear(),this.eruptions=[]}}function Y(R,e,t){const r={seed:(t||Math.floor(Math.random()*1e6))+9e3};return new I(R,r)}export{I as F,Y as c};
