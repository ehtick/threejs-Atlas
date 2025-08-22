import{S as g}from"./atlas_CMUvaCD4mo7XQYkYXSJfw.js";import{C as v,G as N,V as C,B as F,a as A,S as L,A as z,P as B,Q as H}from"./atlas_Ce3hh0hgxYWauQ_qSK6cl.js";const l={ERUPTION_COUNT:{min:15,max:35},ERUPTION_FREQUENCY:{min:.2,max:.8},ERUPTION_DURATION:{min:2,max:5},ERUPTION_HEIGHT:{min:.05,max:.15},ERUPTION_SPREAD:{min:.6,max:1.9},PARTICLES_PER_ERUPTION:{min:50,max:150},PARTICLE_SIZE:{min:.07,max:.09},PARTICLE_LIFETIME:{min:1.5,max:3.5},PARTICLE_SPEED:{min:.1,max:.4},EMISSIVE_INTENSITY:{min:2,max:4},TURBULENCE:{min:.5,max:1.5}};class V{position;direction;lastEruptionTime=0;isActive=!1;eruptionStartTime=0;rng;particleDirections=[];particleSpeeds=[];particleSizes=[];particleLifetimes=[];particleBirthTimes=[];particleActive=[];constructor(i,t,r,e,a,s,p,c,o,h){this.position=i,this.direction=i.clone().normalize(),this.rng=new g(t);for(let n=0;n<a;n++)this.particleDirections.push(this.getRandomDirection(s)),this.particleSpeeds.push(p*(.7+this.rng.random()*.6)),this.particleSizes.push(c*h*(.5+this.rng.random())),this.particleLifetimes.push(o*(.8+this.rng.random()*.4)),this.particleBirthTimes.push(-1),this.particleActive.push(!1);this.isActive=!1,this.eruptionStartTime=0,this.lastEruptionTime=0}initializeStateFromAbsoluteTime(i,t,r,e){const a=1/t,s=r+a,p=e*s*.37%s,c=(i+p)%s;if(c<r){this.isActive=!0,this.eruptionStartTime=i-c,this.lastEruptionTime=this.eruptionStartTime-a;const o=i-this.eruptionStartTime,h=Math.min(o/r,1);for(let n=0;n<this.particleDirections.length;n++){const T=n/this.particleDirections.length*.7;h>T&&(this.particleActive[n]=!0,this.particleBirthTimes[n]=this.eruptionStartTime+T*r,i-this.particleBirthTimes[n]>this.particleLifetimes[n]&&(this.particleActive[n]=!1))}}else{this.isActive=!1,this.lastEruptionTime=i-c+r-a,this.eruptionStartTime=0;const o=i-c,h=o+r;for(let n=0;n<this.particleDirections.length;n++){const T=n/this.particleDirections.length*.7,y=o+T*r;if(y<h){const u=i-y;u>0&&u<=this.particleLifetimes[n]&&(this.particleActive[n]=!0,this.particleBirthTimes[n]=y)}}}}shouldErupt(i,t,r){const e=1/t+r,s=(i-this.lastEruptionTime)%e<r;return s&&!this.isActive?!0:(!s&&this.isActive&&this.stopEruption(),!1)}startEruption(i){this.isActive=!0,this.eruptionStartTime=i,this.lastEruptionTime=i}stopEruption(){this.isActive=!1}getRandomDirection(i){const t=this.rng.uniform(0,Math.PI*2),r=this.rng.uniform(0,i),e=new C(Math.sin(r)*Math.cos(t),Math.sin(r)*Math.sin(t),Math.cos(r)),a=new H;return a.setFromUnitVectors(new C(0,0,1),this.direction),e.applyQuaternion(a),e}}class P{fireGroup;eruptions=[];particleSystem;particleGeometry;particleMaterial;params;startTime;planetRadius;maxParticles=5e3;orbitalVisibilityFactor;temperatureActivationFactor;static vertexShader=`
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
  `;constructor(i,t={}){this.planetRadius=i;const r=t.seed||Math.floor(Math.random()*1e6),e=new g(r);this.startTime=t.startTime||r%1e4/1e3;const a=t.fireColorHot instanceof v?t.fireColorHot:new v(1,.95,.8),s=t.fireColorMid instanceof v?t.fireColorMid:new v(1,.5,.1),p=t.fireColorCool instanceof v?t.fireColorCool:new v(.8,.2,0),c=t.smokeColor instanceof v?t.smokeColor:new v(.2,.1,.05);this.params={eruptionCount:t.eruptionCount||Math.floor(e.uniform(l.ERUPTION_COUNT.min,l.ERUPTION_COUNT.max)),eruptionFrequency:t.eruptionFrequency||e.uniform(l.ERUPTION_FREQUENCY.min,l.ERUPTION_FREQUENCY.max),eruptionDuration:t.eruptionDuration||e.uniform(l.ERUPTION_DURATION.min,l.ERUPTION_DURATION.max),eruptionHeight:t.eruptionHeight||e.uniform(l.ERUPTION_HEIGHT.min,l.ERUPTION_HEIGHT.max),eruptionSpread:t.eruptionSpread||e.uniform(l.ERUPTION_SPREAD.min,l.ERUPTION_SPREAD.max),particlesPerEruption:t.particlesPerEruption||Math.floor(e.uniform(l.PARTICLES_PER_ERUPTION.min,l.PARTICLES_PER_ERUPTION.max)),particleSize:t.particleSize||e.uniform(l.PARTICLE_SIZE.min,l.PARTICLE_SIZE.max),particleLifetime:t.particleLifetime||e.uniform(l.PARTICLE_LIFETIME.min,l.PARTICLE_LIFETIME.max),particleSpeed:t.particleSpeed||e.uniform(l.PARTICLE_SPEED.min,l.PARTICLE_SPEED.max),particleGravity:t.particleGravity||.05,fireColorHot:a,fireColorMid:s,fireColorCool:p,smokeColor:c,emissiveIntensity:t.emissiveIntensity||e.uniform(l.EMISSIVE_INTENSITY.min,l.EMISSIVE_INTENSITY.max),glowIntensity:t.glowIntensity||2,turbulenceStrength:t.turbulenceStrength||e.uniform(l.TURBULENCE.min,l.TURBULENCE.max),windStrength:t.windStrength||.1,seed:r,startTime:this.startTime,timeSpeed:t.timeSpeed||e.uniform(.1,2),orbitalData:t.orbitalData,currentTime:t.currentTime||0,planetTemperature:t.planetTemperature||0},this.temperatureActivationFactor=this.calculateTemperatureActivation(),this.orbitalVisibilityFactor=this.calculateOrbitalVisibility(),this.fireGroup=new N,this.createEruptionPoints(e),this.initializeStateFromAbsoluteTime(),this.createParticleSystem(),this.initializeActiveEruptions();const h=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.updateParticleGeometry(h)}initializeStateFromAbsoluteTime(){const t=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;for(let r=0;r<this.eruptions.length;r++)this.eruptions[r].initializeStateFromAbsoluteTime(t,this.params.eruptionFrequency,this.params.eruptionDuration,r)}createEruptionPoints(i){const t=this.params.eruptionCount;for(let r=0;r<t;r++){const e=i.uniform(0,Math.PI*2),a=Math.acos(i.uniform(-1,1)),s=new C(Math.sin(a)*Math.cos(e)*this.planetRadius,Math.sin(a)*Math.sin(e)*this.planetRadius,Math.cos(a)*this.planetRadius),p=new V(s,Math.floor(i.random()*1e6),this.params.eruptionFrequency,this.params.eruptionDuration,150,this.params.eruptionSpread,this.params.particleSpeed,this.params.particleSize,this.params.particleLifetime,this.planetRadius);this.eruptions.push(p)}}createParticleSystem(){this.particleGeometry=new F;const i=new Float32Array(this.maxParticles*3),t=new Float32Array(this.maxParticles),r=new Float32Array(this.maxParticles),e=new Float32Array(this.maxParticles);this.particleGeometry.setAttribute("position",new A(i,3)),this.particleGeometry.setAttribute("size",new A(t,1)),this.particleGeometry.setAttribute("temperature",new A(r,1)),this.particleGeometry.setAttribute("opacity",new A(e,1)),this.particleMaterial=new L({vertexShader:P.vertexShader,fragmentShader:P.fragmentShader,uniforms:{fireColorHot:{value:this.params.fireColorHot},fireColorMid:{value:this.params.fireColorMid},fireColorCool:{value:this.params.fireColorCool},smokeColor:{value:this.params.smokeColor},emissiveIntensity:{value:this.params.emissiveIntensity}},transparent:!0,blending:z,depthWrite:!1,vertexColors:!1}),this.particleSystem=new B(this.particleGeometry,this.particleMaterial),this.particleSystem.renderOrder=4,this.fireGroup.add(this.particleSystem)}initializeActiveEruptions(){const t=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;for(let r=0;r<this.eruptions.length;r++){const e=this.eruptions[r],a=1/this.params.eruptionFrequency,s=this.params.eruptionDuration+a,p=r*s*.37%s,c=Math.max(...e.particleLifetimes),o=Math.ceil(c/s)+1;for(let h=0;h<o;h++){const n=t-h*s,T=(n+p)%s;if(T<this.params.eruptionDuration){const y=n-T;for(let u=0;u<150;u++){const m=u/150*.7,d=y+m*this.params.eruptionDuration,f=t-d;f>0&&f<=e.particleLifetimes[u]&&(e.particleActive[u]||(e.particleActive[u]=!0,e.particleBirthTimes[u]=d))}}}}}calculateTemperatureActivation(){const i=this.params.planetTemperature||0;return i<2500?0:i>=5e3?1:(i-2500)/2500}calculateOrbitalVisibility(){if(!this.params.orbitalData||!this.params.orbitalData.enabled)return 1;const t=(this.params.currentTime||0)%this.params.orbitalData.cycle_duration_years/this.params.orbitalData.cycle_duration_years,r=this.params.orbitalData.visible_duration_years/this.params.orbitalData.cycle_duration_years;if(t<=r){const e=t/r;return e<.1?e/.1:e>.9?(1-e)/.1:1}return 0}updateParticleGeometry(i){const t=this.particleGeometry.attributes.position,r=this.particleGeometry.attributes.size,e=this.particleGeometry.attributes.temperature,a=this.particleGeometry.attributes.opacity;let s=0;const p=150;for(let c=0;c<this.eruptions.length;c++){const o=this.eruptions[c],h=1/this.params.eruptionFrequency,n=this.params.eruptionDuration+h,T=c*n*.37%n,y=(i+T)%n,u=y<this.params.eruptionDuration;if(u&&!o.isActive?(o.isActive=!0,o.eruptionStartTime=i-y):!u&&o.isActive&&(o.isActive=!1),u){const m=i-o.eruptionStartTime,d=Math.min(m/this.params.eruptionDuration,1);for(let f=0;f<p;f++){const S=f/p*.7;d>S&&!o.particleActive[f]&&(o.particleActive[f]=!0,o.particleBirthTimes[f]=i-(d-S)*this.params.eruptionDuration)}}for(let m=0;m<p&&s<this.maxParticles;m++)if(o.particleActive[m]){const d=i-o.particleBirthTimes[m],f=o.particleLifetimes[m];if(d>f){o.particleActive[m]=!1;continue}const S=o.particleDirections[m].clone(),_=o.particleSpeeds[m]*d,E=o.position.clone().add(S.multiplyScalar(_)),M=this.params.particleGravity*d*d*.5;E.y-=M;const w=new C(Math.sin(i*.5+m*.1)*.01,Math.cos(i*.3+m*.1)*.005,Math.sin(i*.7+m*.1)*.01);E.add(w);const I=d/f,x=Math.max(0,1-I*.9),U=this.smoothstep(0,.1,I),O=this.smoothstep(1,.7,I),R=U*O,G=o.particleSizes[m];R>.01&&(t.setXYZ(s,E.x,E.y,E.z),r.setX(s,G),e.setX(s,x),a.setX(s,R),s++)}}for(let c=s;c<this.maxParticles;c++)t.setXYZ(c,0,0,0),r.setX(c,0),a.setX(c,0),e.setX(c,0);t.needsUpdate=!0,r.needsUpdate=!0,e.needsUpdate=!0,a.needsUpdate=!0,this.particleGeometry.setDrawRange(0,s)}smoothstep(i,t,r){const e=Math.max(0,Math.min(1,(r-i)/(t-i)));return e*e*(3-2*e)}update(i){const r=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.orbitalVisibilityFactor=this.calculateOrbitalVisibility();const e=this.temperatureActivationFactor*this.orbitalVisibilityFactor;if(e>0){if(this.updateParticleGeometry(r),this.particleMaterial&&this.particleMaterial.uniforms){const a=this.params.emissiveIntensity||1;this.particleMaterial.uniforms.emissiveIntensity.value=a*e}}else this.hideAllParticles()}hideAllParticles(){const i=this.particleGeometry.attributes.position,t=this.particleGeometry.attributes.size,r=this.particleGeometry.attributes.opacity,e=this.particleGeometry.attributes.temperature;for(let a=0;a<this.maxParticles;a++)i.setXYZ(a,0,0,0),t.setX(a,0),r.setX(a,0),e.setX(a,0);i.needsUpdate=!0,t.needsUpdate=!0,e.needsUpdate=!0,r.needsUpdate=!0,this.particleGeometry.setDrawRange(0,0)}addToScene(i,t){t&&this.fireGroup.position.copy(t),i.add(this.fireGroup)}getObject3D(){return this.fireGroup}dispose(){this.particleGeometry.dispose(),this.particleMaterial.dispose(),this.fireGroup.clear(),this.eruptions=[]}}function k(b,i,t,r){const e=t||Math.floor(Math.random()*1e6),a=0,s=0,p={},c=p.enabled?{enabled:!0,cycle_duration_years:p.cycle_duration_years||10,visible_duration_years:p.visible_duration_years||2}:{enabled:!1,cycle_duration_years:1,visible_duration_years:1},o={seed:e+9e3,planetTemperature:a,orbitalData:c,currentTime:s};return new P(b,o)}export{P as F,k as c};
