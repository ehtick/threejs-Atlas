import{S as M}from"./atlas_CMUvaCD4mo7XQYkYXSJfw.js";import{C as f,G as L,V as I,B as b,a as C,S as F,A as z,P as B,Q as H}from"./atlas_Ce3hh0hgxYWauQ_qSK6cl.js";const a={ERUPTION_COUNT:{min:8,max:15},ERUPTION_FREQUENCY:{min:.2,max:.8},ERUPTION_DURATION:{min:2,max:5},ERUPTION_HEIGHT:{min:.15,max:.35},ERUPTION_SPREAD:{min:.3,max:.7},PARTICLES_PER_ERUPTION:{min:50,max:150},PARTICLE_SIZE:{min:.07,max:.09},PARTICLE_LIFETIME:{min:1.5,max:3.5},PARTICLE_SPEED:{min:.05,max:.25},EMISSIVE_INTENSITY:{min:4,max:8},TURBULENCE:{min:.5,max:1.5}};class X{position;direction;lastEruptionTime=0;isActive=!1;eruptionStartTime=0;rng;particleDirections=[];particleSpeeds=[];particleSizes=[];particleLifetimes=[];particleBirthTimes=[];particleActive=[];constructor(e,t,i,r,l,n,m,c,o,d){this.position=e,this.direction=e.clone().normalize(),this.rng=new M(t);for(let s=0;s<l;s++)this.particleDirections.push(this.getRandomDirection(n)),this.particleSpeeds.push(m*(.7+this.rng.random()*.6)),this.particleSizes.push(c*d*(.5+this.rng.random())),this.particleLifetimes.push(o*(.8+this.rng.random()*.4)),this.particleBirthTimes.push(-1),this.particleActive.push(!1);this.isActive=!1,this.eruptionStartTime=0,this.lastEruptionTime=0}initializeStateFromAbsoluteTime(e,t,i,r){const l=1/t,n=i+l,m=r*n*.37%n,c=(e+m)%n;if(c<i){this.isActive=!0,this.eruptionStartTime=e-c,this.lastEruptionTime=this.eruptionStartTime-l;const o=e-this.eruptionStartTime,d=Math.min(o/i,1);for(let s=0;s<this.particleDirections.length;s++){const T=s/this.particleDirections.length*.7;d>T&&(this.particleActive[s]=!0,this.particleBirthTimes[s]=this.eruptionStartTime+T*i,e-this.particleBirthTimes[s]>this.particleLifetimes[s]&&(this.particleActive[s]=!1))}}else{this.isActive=!1,this.lastEruptionTime=e-c+i-l,this.eruptionStartTime=0;const o=e-c,d=o+i;for(let s=0;s<this.particleDirections.length;s++){const T=s/this.particleDirections.length*.7,E=o+T*i;if(E<d){const v=e-E;v>0&&v<=this.particleLifetimes[s]&&(this.particleActive[s]=!0,this.particleBirthTimes[s]=E)}}}}shouldErupt(e,t,i){const r=1/t+i,n=(e-this.lastEruptionTime)%r<i;return n&&!this.isActive?!0:(!n&&this.isActive&&this.stopEruption(),!1)}startEruption(e){this.isActive=!0,this.eruptionStartTime=e,this.lastEruptionTime=e}stopEruption(){this.isActive=!1}getRandomDirection(e){const t=this.rng.uniform(0,Math.PI*2),i=this.rng.uniform(0,e),r=new I(Math.sin(i)*Math.cos(t),Math.sin(i)*Math.sin(t),Math.cos(i)),l=new H;return l.setFromUnitVectors(new I(0,0,1),this.direction),r.applyQuaternion(l),r}}class A{fireGroup;eruptions=[];particleSystem;particleGeometry;particleMaterial;params;startTime;planetRadius;maxParticles=5e3;static vertexShader=`
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
  `;constructor(e,t={}){this.planetRadius=e;const i=t.seed||Math.floor(Math.random()*1e6),r=new M(i);this.startTime=t.startTime||i%1e4/1e3;const l=t.fireColorHot instanceof f?t.fireColorHot:new f(1,.95,.8),n=t.fireColorMid instanceof f?t.fireColorMid:new f(1,.5,.1),m=t.fireColorCool instanceof f?t.fireColorCool:new f(.8,.2,0),c=t.smokeColor instanceof f?t.smokeColor:new f(.2,.1,.05);this.params={eruptionCount:t.eruptionCount||Math.floor(r.uniform(a.ERUPTION_COUNT.min,a.ERUPTION_COUNT.max)),eruptionFrequency:t.eruptionFrequency||r.uniform(a.ERUPTION_FREQUENCY.min,a.ERUPTION_FREQUENCY.max),eruptionDuration:t.eruptionDuration||r.uniform(a.ERUPTION_DURATION.min,a.ERUPTION_DURATION.max),eruptionHeight:t.eruptionHeight||r.uniform(a.ERUPTION_HEIGHT.min,a.ERUPTION_HEIGHT.max),eruptionSpread:t.eruptionSpread||r.uniform(a.ERUPTION_SPREAD.min,a.ERUPTION_SPREAD.max),particlesPerEruption:t.particlesPerEruption||Math.floor(r.uniform(a.PARTICLES_PER_ERUPTION.min,a.PARTICLES_PER_ERUPTION.max)),particleSize:t.particleSize||r.uniform(a.PARTICLE_SIZE.min,a.PARTICLE_SIZE.max),particleLifetime:t.particleLifetime||r.uniform(a.PARTICLE_LIFETIME.min,a.PARTICLE_LIFETIME.max),particleSpeed:t.particleSpeed||r.uniform(a.PARTICLE_SPEED.min,a.PARTICLE_SPEED.max),particleGravity:t.particleGravity||.05,fireColorHot:l,fireColorMid:n,fireColorCool:m,smokeColor:c,emissiveIntensity:t.emissiveIntensity||r.uniform(a.EMISSIVE_INTENSITY.min,a.EMISSIVE_INTENSITY.max),glowIntensity:t.glowIntensity||2,turbulenceStrength:t.turbulenceStrength||r.uniform(a.TURBULENCE.min,a.TURBULENCE.max),windStrength:t.windStrength||.1,seed:i,startTime:this.startTime,timeSpeed:t.timeSpeed||r.uniform(.1,2)},this.fireGroup=new L,this.createEruptionPoints(r),this.initializeStateFromAbsoluteTime(),this.createParticleSystem(),this.initializeActiveEruptions()}initializeStateFromAbsoluteTime(){const t=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;for(let i=0;i<this.eruptions.length;i++)this.eruptions[i].initializeStateFromAbsoluteTime(t,this.params.eruptionFrequency,this.params.eruptionDuration,i)}createEruptionPoints(e){const t=this.params.eruptionCount;for(let i=0;i<t;i++){const r=e.uniform(0,Math.PI*2),l=Math.acos(e.uniform(-1,1)),n=new I(Math.sin(l)*Math.cos(r)*this.planetRadius,Math.sin(l)*Math.sin(r)*this.planetRadius,Math.cos(l)*this.planetRadius),m=new X(n,Math.floor(e.random()*1e6),this.params.eruptionFrequency,this.params.eruptionDuration,150,this.params.eruptionSpread,this.params.particleSpeed,this.params.particleSize,this.params.particleLifetime,this.planetRadius);this.eruptions.push(m)}}createParticleSystem(){this.particleGeometry=new b;const e=new Float32Array(this.maxParticles*3),t=new Float32Array(this.maxParticles),i=new Float32Array(this.maxParticles),r=new Float32Array(this.maxParticles);this.particleGeometry.setAttribute("position",new C(e,3)),this.particleGeometry.setAttribute("size",new C(t,1)),this.particleGeometry.setAttribute("temperature",new C(i,1)),this.particleGeometry.setAttribute("opacity",new C(r,1)),this.particleMaterial=new F({vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,uniforms:{fireColorHot:{value:this.params.fireColorHot},fireColorMid:{value:this.params.fireColorMid},fireColorCool:{value:this.params.fireColorCool},smokeColor:{value:this.params.smokeColor},emissiveIntensity:{value:this.params.emissiveIntensity}},transparent:!0,blending:z,depthWrite:!1,vertexColors:!1}),this.particleSystem=new B(this.particleGeometry,this.particleMaterial),this.particleSystem.renderOrder=4,this.fireGroup.add(this.particleSystem)}initializeActiveEruptions(){}updateParticleGeometry(e){const t=this.particleGeometry.attributes.position,i=this.particleGeometry.attributes.size,r=this.particleGeometry.attributes.temperature,l=this.particleGeometry.attributes.opacity;let n=0;const m=150;for(let c=0;c<this.eruptions.length;c++){const o=this.eruptions[c],d=1/this.params.eruptionFrequency,s=this.params.eruptionDuration+d,T=c*s*.37%s,E=(e+T)%s,v=E<this.params.eruptionDuration;if(v&&!o.isActive?(o.isActive=!0,o.eruptionStartTime=e-E):!v&&o.isActive&&(o.isActive=!1),v){const p=e-o.eruptionStartTime,u=Math.min(p/this.params.eruptionDuration,1);for(let h=0;h<m;h++){const y=h/m*.7;u>y&&!o.particleActive[h]&&(o.particleActive[h]=!0,o.particleBirthTimes[h]=e-(u-y)*this.params.eruptionDuration)}}for(let p=0;p<m&&n<this.maxParticles;p++)if(o.particleActive[p]){const u=e-o.particleBirthTimes[p],h=o.particleLifetimes[p];if(u>h){o.particleActive[p]=!1;continue}const y=o.particleDirections[p].clone(),w=o.particleSpeeds[p]*u,S=o.position.clone().add(y.multiplyScalar(w)),D=this.params.particleGravity*u*u*.5;S.y-=D;const U=new I(Math.sin(e*.5+p*.1)*.01,Math.cos(e*.3+p*.1)*.005,Math.sin(e*.7+p*.1)*.01);S.add(U);const P=u/h,_=Math.max(0,1-P*.9),N=this.smoothstep(0,.1,P),O=this.smoothstep(1,.7,P),g=N*O,G=o.particleSizes[p];g>.01&&(t.setXYZ(n,S.x,S.y,S.z),i.setX(n,G),r.setX(n,_),l.setX(n,g),n++)}}for(let c=n;c<this.maxParticles;c++)t.setXYZ(c,0,0,0),i.setX(c,0),l.setX(c,0),r.setX(c,0);t.needsUpdate=!0,i.needsUpdate=!0,r.needsUpdate=!0,l.needsUpdate=!0,this.particleGeometry.setDrawRange(0,n)}smoothstep(e,t,i){const r=Math.max(0,Math.min(1,(i-e)/(t-e)));return r*r*(3-2*r)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.updateParticleGeometry(i)}addToScene(e,t){t&&this.fireGroup.position.copy(t),e.add(this.fireGroup)}getObject3D(){return this.fireGroup}dispose(){this.particleGeometry.dispose(),this.particleMaterial.dispose(),this.fireGroup.clear(),this.eruptions=[]}}function q(R,e,t){const r={seed:(t||Math.floor(Math.random()*1e6))+9e3};return new A(R,r)}export{A as F,q as c};
