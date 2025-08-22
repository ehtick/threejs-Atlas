import{S as I}from"./atlas_CMUvaCD4mo7XQYkYXSJfw.js";import{C as m,G,V as E,B as b,a as d,S as L,A as F,P as z,Q as H}from"./atlas_Ce3hh0hgxYWauQ_qSK6cl.js";const o={ERUPTION_COUNT:{min:8,max:15},ERUPTION_FREQUENCY:{min:.2,max:.8},ERUPTION_DURATION:{min:2,max:5},ERUPTION_HEIGHT:{min:.15,max:.35},ERUPTION_SPREAD:{min:.3,max:.7},PARTICLES_PER_ERUPTION:{min:50,max:150},PARTICLE_SIZE:{min:.008,max:.02},PARTICLE_LIFETIME:{min:1.5,max:3.5},PARTICLE_SPEED:{min:.2,max:.5},EMISSIVE_INTENSITY:{min:4,max:8},TURBULENCE:{min:.5,max:1.5}};class B{position;direction;lastEruptionTime=0;isActive=!1;eruptionStartTime=0;rng;particleDirections=[];particleSpeeds=[];particleSizes=[];particleLifetimes=[];constructor(e,t,r,i,a,s,c,n,l,S){this.position=e,this.direction=e.clone().normalize(),this.rng=new I(t);for(let u=0;u<a;u++)this.particleDirections.push(this.getRandomDirection(s)),this.particleSpeeds.push(c*(.7+this.rng.random()*.6)),this.particleSizes.push(n*S*(.5+this.rng.random())),this.particleLifetimes.push(l*(.8+this.rng.random()*.4));this.isActive=!1,this.eruptionStartTime=0,this.lastEruptionTime=0}initializeStateFromAbsoluteTime(e,t,r,i){const a=1/t,s=r+a,c=i*s*.37%s,n=(e+c)%s;n<r?(this.isActive=!0,this.eruptionStartTime=e-n,this.lastEruptionTime=this.eruptionStartTime-a):(this.isActive=!1,this.lastEruptionTime=e-n+r-a,this.eruptionStartTime=0)}shouldErupt(e,t,r){const i=1/t+r,s=(e-this.lastEruptionTime)%i<r;return s&&!this.isActive?!0:(!s&&this.isActive&&this.stopEruption(),!1)}startEruption(e){this.isActive=!0,this.eruptionStartTime=e,this.lastEruptionTime=e}stopEruption(){this.isActive=!1}getRandomDirection(e){const t=this.rng.uniform(0,Math.PI*2),r=this.rng.uniform(0,e),i=new E(Math.sin(r)*Math.cos(t),Math.sin(r)*Math.sin(t),Math.cos(r)),a=new H;return a.setFromUnitVectors(new E(0,0,1),this.direction),i.applyQuaternion(a),i}}class T{fireGroup;eruptions=[];particleSystem;particleGeometry;particleMaterial;params;startTime;planetRadius;maxParticles=5e3;static vertexShader=`
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
      
      // Suavizar los bordes
      float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
      alpha *= vOpacity;
      
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
  `;constructor(e,t={}){this.planetRadius=e;const r=t.seed||Math.floor(Math.random()*1e6),i=new I(r);this.startTime=t.startTime||r%1e4/1e3;const a=t.fireColorHot instanceof m?t.fireColorHot:new m(1,.95,.8),s=t.fireColorMid instanceof m?t.fireColorMid:new m(1,.5,.1),c=t.fireColorCool instanceof m?t.fireColorCool:new m(.8,.2,0),n=t.smokeColor instanceof m?t.smokeColor:new m(.2,.1,.05);this.params={eruptionCount:t.eruptionCount||Math.floor(i.uniform(o.ERUPTION_COUNT.min,o.ERUPTION_COUNT.max)),eruptionFrequency:t.eruptionFrequency||i.uniform(o.ERUPTION_FREQUENCY.min,o.ERUPTION_FREQUENCY.max),eruptionDuration:t.eruptionDuration||i.uniform(o.ERUPTION_DURATION.min,o.ERUPTION_DURATION.max),eruptionHeight:t.eruptionHeight||i.uniform(o.ERUPTION_HEIGHT.min,o.ERUPTION_HEIGHT.max),eruptionSpread:t.eruptionSpread||i.uniform(o.ERUPTION_SPREAD.min,o.ERUPTION_SPREAD.max),particlesPerEruption:t.particlesPerEruption||Math.floor(i.uniform(o.PARTICLES_PER_ERUPTION.min,o.PARTICLES_PER_ERUPTION.max)),particleSize:t.particleSize||i.uniform(o.PARTICLE_SIZE.min,o.PARTICLE_SIZE.max),particleLifetime:t.particleLifetime||i.uniform(o.PARTICLE_LIFETIME.min,o.PARTICLE_LIFETIME.max),particleSpeed:t.particleSpeed||i.uniform(o.PARTICLE_SPEED.min,o.PARTICLE_SPEED.max),particleGravity:t.particleGravity||.05,fireColorHot:a,fireColorMid:s,fireColorCool:c,smokeColor:n,emissiveIntensity:t.emissiveIntensity||i.uniform(o.EMISSIVE_INTENSITY.min,o.EMISSIVE_INTENSITY.max),glowIntensity:t.glowIntensity||2,turbulenceStrength:t.turbulenceStrength||i.uniform(o.TURBULENCE.min,o.TURBULENCE.max),windStrength:t.windStrength||.1,seed:r,startTime:this.startTime,timeSpeed:t.timeSpeed||i.uniform(.1,2)},this.fireGroup=new G,this.createEruptionPoints(i),this.initializeStateFromAbsoluteTime(),this.createParticleSystem(),this.initializeActiveEruptions()}initializeStateFromAbsoluteTime(){const t=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;for(let r=0;r<this.eruptions.length;r++)this.eruptions[r].initializeStateFromAbsoluteTime(t,this.params.eruptionFrequency,this.params.eruptionDuration,r)}createEruptionPoints(e){const t=this.params.eruptionCount;for(let r=0;r<t;r++){const i=e.uniform(0,Math.PI*2),a=Math.acos(e.uniform(-1,1)),s=new E(Math.sin(a)*Math.cos(i)*this.planetRadius,Math.sin(a)*Math.sin(i)*this.planetRadius,Math.cos(a)*this.planetRadius),c=new B(s,Math.floor(e.random()*1e6),this.params.eruptionFrequency,this.params.eruptionDuration,150,this.params.eruptionSpread,this.params.particleSpeed,this.params.particleSize,this.params.particleLifetime,this.planetRadius);this.eruptions.push(c)}}createParticleSystem(){this.particleGeometry=new b;const e=new Float32Array(this.maxParticles*3),t=new Float32Array(this.maxParticles),r=new Float32Array(this.maxParticles),i=new Float32Array(this.maxParticles);this.particleGeometry.setAttribute("position",new d(e,3)),this.particleGeometry.setAttribute("size",new d(t,1)),this.particleGeometry.setAttribute("temperature",new d(r,1)),this.particleGeometry.setAttribute("opacity",new d(i,1)),this.particleMaterial=new L({vertexShader:T.vertexShader,fragmentShader:T.fragmentShader,uniforms:{fireColorHot:{value:this.params.fireColorHot},fireColorMid:{value:this.params.fireColorMid},fireColorCool:{value:this.params.fireColorCool},smokeColor:{value:this.params.smokeColor},emissiveIntensity:{value:this.params.emissiveIntensity}},transparent:!0,blending:F,depthWrite:!1,vertexColors:!1}),this.particleSystem=new z(this.particleGeometry,this.particleMaterial),this.particleSystem.renderOrder=4,this.fireGroup.add(this.particleSystem)}initializeActiveEruptions(){}updateParticleGeometry(e){const t=this.particleGeometry.attributes.position,r=this.particleGeometry.attributes.size,i=this.particleGeometry.attributes.temperature,a=this.particleGeometry.attributes.opacity;let s=0;const c=150;for(let n=0;n<this.eruptions.length;n++){const l=this.eruptions[n],S=1/this.params.eruptionFrequency,u=this.params.eruptionDuration+S,P=n*u*.37%u,v=(e+P)%u;if(v<this.params.eruptionDuration){l.isActive||(l.isActive=!0,l.eruptionStartTime=e-v);const R=e-l.eruptionStartTime,A=Math.min(R/this.params.eruptionDuration,1);for(let p=0;p<c&&s<this.maxParticles;p++){const M=p/c*.7,h=Math.max(0,Math.min(1,A-M));if(h>0){const x=l.particleDirections[p].clone(),g=l.particleSpeeds[p],y=h*this.params.eruptionDuration,w=g*y,f=l.position.clone().add(x.multiplyScalar(w)),U=this.params.particleGravity*y*y*.5;f.y-=U;const _=new E(Math.sin(e*.5+p*.1)*.01,Math.cos(e*.3+p*.1)*.005,Math.sin(e*.7+p*.1)*.01);f.add(_);const N=Math.max(0,1-h*.8),D=this.smoothstep(0,.2,h)*this.smoothstep(1,.6,h),O=l.particleSizes[p];t.setXYZ(s,f.x,f.y,f.z),r.setX(s,O),i.setX(s,N),a.setX(s,D),s++}}}else l.isActive=!1}for(let n=s;n<this.maxParticles;n++)t.setXYZ(n,0,0,0),r.setX(n,0),a.setX(n,0),i.setX(n,0);t.needsUpdate=!0,r.needsUpdate=!0,i.needsUpdate=!0,a.needsUpdate=!0,this.particleGeometry.setDrawRange(0,s)}smoothstep(e,t,r){const i=Math.max(0,Math.min(1,(r-e)/(t-e)));return i*i*(3-2*i)}update(e){const r=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.updateParticleGeometry(r)}addToScene(e,t){t&&this.fireGroup.position.copy(t),e.add(this.fireGroup)}getObject3D(){return this.fireGroup}dispose(){this.particleGeometry.dispose(),this.particleMaterial.dispose(),this.fireGroup.clear(),this.eruptions=[]}}function q(C,e,t){const i={seed:(t||Math.floor(Math.random()*1e6))+9e3};return new T(C,i)}export{T as F,q as c};
