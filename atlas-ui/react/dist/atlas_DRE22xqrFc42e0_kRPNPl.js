import{D as I,S as T}from"./atlas_CGrAwTYnSDNTtni2msvpu.js";import{G as b,H as N,S as f,D as M,A as v,C as u,M as P,b as D,x as R,B as E,I as U,o as B,a as x,P as G,v as L,J as A,u as y,V as O,c as W}from"./atlas_BptVXGp7hwWSDe7IbaYgj.js";const m={RING_COUNT:{min:3,max:8},RING_DISTANCE:{min:1.5,max:3.5},WAVE_COUNT:{min:51,max:151},WAVE_AMPLITUDE:{min:.1,max:.2},ORBITAL_SPEED:{min:.2,max:.8},PORTAL_COUNT:{min:21,max:60},ENERGY_BEAM_COUNT:{min:2,max:8},PARTICLE_COUNT:{min:201,max:801}};class z{group;plasmaRings=[];energyWaves=[];dimensionalPortals=[];energyBeams=[];energyParticles;particleOrbitData=[];spaceDistortion;params;rng;planetRadius;cosmicOffset;constructor(t,i={}){this.planetRadius=t;const n=i.seed||Math.floor(Math.random()*1e6);this.rng=new T(n),this.params={color:i.color||[.2,.6,1],ringCount:i.ringCount||Math.floor(this.rng.random()*(m.RING_COUNT.max-m.RING_COUNT.min)+m.RING_COUNT.min),ringDistance:i.ringDistance||this.rng.random()*(m.RING_DISTANCE.max-m.RING_DISTANCE.min)+m.RING_DISTANCE.min,waveCount:i.waveCount||Math.floor(this.rng.random()*(m.WAVE_COUNT.max-m.WAVE_COUNT.min)+m.WAVE_COUNT.min),waveAmplitude:i.waveAmplitude||this.rng.random()*(m.WAVE_AMPLITUDE.max-m.WAVE_AMPLITUDE.min)+m.WAVE_AMPLITUDE.min,orbitalSpeed:i.orbitalSpeed||this.rng.random()*(m.ORBITAL_SPEED.max-m.ORBITAL_SPEED.min)+m.ORBITAL_SPEED.min,portalCount:i.portalCount||Math.floor(this.rng.random()*(m.PORTAL_COUNT.max-m.PORTAL_COUNT.min)+m.PORTAL_COUNT.min),energyBeamCount:i.energyBeamCount||Math.floor(this.rng.random()*(m.ENERGY_BEAM_COUNT.max-m.ENERGY_BEAM_COUNT.min)+m.ENERGY_BEAM_COUNT.min),particleCount:i.particleCount||Math.floor(this.rng.random()*(m.PARTICLE_COUNT.max-m.PARTICLE_COUNT.min)+m.PARTICLE_COUNT.min),cosmicOriginTime:i.cosmicOriginTime||I,seed:n},this.cosmicOffset=n%100*.1,this.group=new b,this.createPlasmaRings(),this.createEnergyWaves(),this.createDimensionalPortals(),this.createEnergyBeams(),this.createEnergyParticles(),this.createSpaceDistortion()}createPlasmaRings(){const t=this.params.ringCount,i=this.planetRadius+this.params.ringDistance;for(let n=0;n<t;n++){const s=i+n*.8,a=this.rng.random()*Math.PI*.5,e=this.rng.random()*Math.PI*2,o=(this.rng.random()-.5)*Math.PI*.3,r=new N(this.planetRadius*.2+n*.1,this.planetRadius*.03,8,32),c=new f({uniforms:{time:{value:0},color:{value:new u(this.params.color[0],this.params.color[1],this.params.color[2])},opacity:{value:.6-n*.08},ringIndex:{value:n},pulseSpeed:{value:2+this.rng.random()*2}},vertexShader:`
          uniform float time;
          uniform float ringIndex;
          uniform float pulseSpeed;
          varying vec2 vUv;
          varying float vIntensity;
          
          void main() {
            vUv = uv;
            float pulse = sin(time * pulseSpeed + ringIndex * 1.5) * 0.3 + 0.7;
            vIntensity = pulse;
            
            vec3 pos = position;
            pos.z += sin(time * 1.5 + ringIndex) * 0.1;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float opacity;
          uniform float time;
          varying vec2 vUv;
          varying float vIntensity;
          
          void main() {
            float plasma = sin(vUv.x * 15.0 + time * 3.0) * sin(vUv.y * 10.0 + time * 2.0) * 0.5 + 0.5;
            float energy = sin(time * 4.0 + vUv.x * 8.0) * 0.3 + 0.7;
            
            float finalIntensity = plasma * energy * vIntensity;
            
            gl_FragColor = vec4(color, finalIntensity * opacity);
          }
        `,transparent:!0,blending:v,side:M,depthWrite:!1}),l=new P(r,c);l.rotation.set(a,0,o),l.userData={distance:s,inclination:a,longitudeOfAscendingNode:e,tiltAngle:o,orbitalSpeed:this.rng.random()*.5+.3,ringIndex:n},this.plasmaRings.push(l),this.group.add(l)}}createEnergyWaves(){const t=this.params.waveCount,i=this.planetRadius+this.params.ringDistance+.5;for(let n=0;n<t;n++){const s=i+this.rng.random()*1,a=this.rng.random()*Math.PI,e=this.rng.random()*Math.PI*2,o=this.rng.random()*Math.PI*2,r=this.calculateOrbitalPosition(s,a,e,o),c=new D(this.planetRadius*.08+this.rng.random()*.04,16,8),l=new f({uniforms:{time:{value:0},color:{value:new u(this.params.color[0]*.8,this.params.color[1]*.9,this.params.color[2])},amplitude:{value:this.params.waveAmplitude},frequency:{value:3+this.rng.random()*4},waveIndex:{value:n}},vertexShader:`
          uniform float time;
          uniform float amplitude;
          uniform float frequency;
          uniform float waveIndex;
          varying vec3 vNormal;
          varying float vWaveIntensity;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            
            float wave = sin(time * frequency + waveIndex * 2.0) * amplitude;
            vec3 pos = position + normal * wave;
            
            vWaveIntensity = (sin(time * 2.0 + waveIndex) + 1.0) * 0.5;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float time;
          varying vec3 vNormal;
          varying float vWaveIntensity;
          
          void main() {
            float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            float ethereal = sin(time * 4.0 + fresnel * 10.0) * 0.3 + 0.7;
            
            float finalIntensity = fresnel * ethereal * vWaveIntensity * 0.8;
            gl_FragColor = vec4(color, finalIntensity);
          }
        `,transparent:!0,blending:v,depthWrite:!1}),d=new P(c,l);d.position.set(r.x,r.y,r.z),d.userData={distance:s,inclination:a,longitudeOfAscendingNode:e,initialAngle:o,orbitalSpeed:this.rng.random()*.4+.2,waveIndex:n},this.energyWaves.push(d),this.group.add(d)}}createDimensionalPortals(){const t=this.params.portalCount,i=this.planetRadius+this.params.ringDistance+1.2;for(let n=0;n<t;n++){const s=i+this.rng.random()*.8,a=this.rng.random()*Math.PI,e=this.rng.random()*Math.PI*2,o=this.rng.random()*Math.PI*2,r=this.calculateOrbitalPosition(s,a,e,o),c=new R(this.planetRadius*.12,this.planetRadius*.18,16,1),l=new f({uniforms:{time:{value:0},color:{value:new u(.8,.4,1)},portalIndex:{value:n},activation:{value:0}},vertexShader:`
          uniform float time;
          uniform float portalIndex;
          uniform float activation;
          varying vec2 vUv;
          varying float vActivation;
          
          void main() {
            vUv = uv;
            vActivation = activation;
            
            vec3 pos = position;
            float ripple = sin(time * 4.0 + portalIndex * 2.0) * 0.05 * activation;
            pos += normal * ripple;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float time;
          uniform float portalIndex;
          varying vec2 vUv;
          varying float vActivation;
          
          void main() {
            vec2 center = vUv - 0.5;
            float dist = length(center);
            
            float portal = smoothstep(0.35, 0.4, dist) * (1.0 - smoothstep(0.45, 0.5, dist));
            
            float spiral = sin(atan(center.y, center.x) * 8.0 + time * 6.0 + dist * 20.0) * 0.5 + 0.5;
            float vortex = sin(time * 10.0 + portalIndex * 3.0) * 0.3 + 0.7;
            
            float intensity = portal * spiral * vortex * vActivation;
            
            vec3 portalColor = mix(color, vec3(1.0, 0.8, 0.9), spiral * 0.3);
            gl_FragColor = vec4(portalColor, intensity);
          }
        `,transparent:!0,blending:v,side:M,depthWrite:!1}),d=new P(c,l);d.position.set(r.x,r.y,r.z),d.lookAt(0,0,0),d.userData={distance:s,inclination:a,longitudeOfAscendingNode:e,initialAngle:o,orbitalSpeed:this.rng.random()*.3+.1,portalIndex:n,activationPhase:this.rng.random()*Math.PI*2},this.dimensionalPortals.push(d),this.group.add(d)}}createEnergyBeams(){const t=this.params.energyBeamCount;for(let i=0;i<t;i++){const n=this.planetRadius+.2,s=this.planetRadius+.4+this.rng.random()*.3,a=this.rng.random()*Math.PI,e=this.rng.random()*Math.PI*2,o=this.rng.random()*Math.PI*2,r=o+(this.rng.random()-.5)*Math.PI,c=this.calculateOrbitalPosition(n,a,e,o),l=this.calculateOrbitalPosition(s,a,e,r),d=this.createCurvedBeamPath(c,l,n,s),p=new E().setFromPoints(d),h=new U({color:new u(.3,.8,1),transparent:!0,opacity:0,linewidth:2,blending:v,depthWrite:!1});h.isLifeFormBeamLine=!0;const g=new B(p,h);g.userData={startDistance:n,endDistance:s,inclination:a,longitudeOfAscendingNode:e,startAngle:o,endAngle:r,beamIndex:i,activationPhase:this.rng.random()*Math.PI*2},this.energyBeams.push(g),this.group.add(g)}}createEnergyParticles(){const t=this.params.particleCount,i=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t);for(let o=0;o<t;o++){const r=this.planetRadius+this.params.ringDistance+this.rng.random()*2,c=this.rng.random()*Math.PI,l=this.rng.random()*Math.PI*2,d=this.rng.random()*Math.PI*2,p=this.rng.random()*.5+.2;this.particleOrbitData.push({distance:r,inclination:c,longitudeOfAscendingNode:l,initialAngle:d,orbitalSpeed:p});const h=this.calculateOrbitalPosition(r,c,l,d);i[o*3]=h.x,i[o*3+1]=h.y,i[o*3+2]=h.z;const g=this.rng.random()*.3;n[o*3]=.2+g,n[o*3+1]=.6+g,n[o*3+2]=1,s[o]=this.planetRadius*(.02+this.rng.random()*.03)}const a=new E;a.setAttribute("position",new x(i,3)),a.setAttribute("color",new x(n,3)),a.setAttribute("size",new x(s,1));const e=new f({uniforms:{time:{value:0},particleTexture:{value:this.createParticleTexture()}},vertexShader:`
        attribute float size;
        uniform float time;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vColor = color;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float distanceFade = 1.0 / (1.0 + length(mvPosition.xyz) * 0.1);
          
          vAlpha = sin(time * 2.0 + position.x * 0.1) * 0.3 + 0.7;
          vAlpha *= distanceFade;
          
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform sampler2D particleTexture;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vec4 texColor = texture2D(particleTexture, gl_PointCoord);
          gl_FragColor = vec4(vColor * texColor.rgb, texColor.a * vAlpha);
        }
      `,transparent:!0,blending:v,depthWrite:!1,vertexColors:!0});this.energyParticles=new G(a,e),this.group.add(this.energyParticles)}createParticleTexture(){const t=document.createElement("canvas");t.width=32,t.height=32;const i=t.getContext("2d"),n=i.createRadialGradient(16,16,0,16,16,16);return n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.4,"rgba(100, 200, 255, 0.8)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=n,i.fillRect(0,0,32,32),new L(t)}createCurvedBeamPath(t,i,n,s){const a=[],o=new A().setFromVector3(t),r=new A().setFromVector3(i);for(let c=0;c<=15;c++){const l=c/15,d=y.lerp(o.phi,r.phi,l);let p=y.lerp(o.theta,r.theta,l);const h=r.theta-o.theta;Math.abs(h)>Math.PI&&(h>0?p=y.lerp(o.theta,r.theta-2*Math.PI,l):p=y.lerp(o.theta,r.theta+2*Math.PI,l));const _=y.lerp(n,s,l),w=new A(_,d,p),S=new O().setFromSpherical(w);a.push(S)}return a}createSpaceDistortion(){const t=new D(this.planetRadius+this.params.ringDistance+1.5,32,16),i=new f({uniforms:{time:{value:0},color:{value:new u(.1,.3,.6)}},vertexShader:`
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          
          vec3 pos = position;
          float distortion = sin(pos.x * 2.0 + time) * sin(pos.y * 2.0 + time * 1.3) * sin(pos.z * 2.0 + time * 0.7);
          pos += normal * distortion * 0.1;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
          float distortionPattern = sin(vPosition.x * 5.0 + time * 2.0) * sin(vPosition.y * 5.0 + time * 1.5) * 0.5 + 0.5;
          
          float alpha = fresnel * distortionPattern * 0.15;
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,blending:v,side:W,depthWrite:!1});this.spaceDistortion=new P(t,i),this.group.add(this.spaceDistortion)}calculateOrbitalPosition(t,i,n,s){const a=t*Math.cos(s),e=t*Math.sin(s),o=0,r=a,c=e*Math.cos(i)-o*Math.sin(i),l=e*Math.sin(i)+o*Math.cos(i),d=r*Math.cos(n)-c*Math.sin(n),p=r*Math.sin(n)+c*Math.cos(n),h=l;return new O(d,p,h)}update(t){const s=(Date.now()/1e3-(this.params.cosmicOriginTime||I)+this.cosmicOffset)*(this.params.orbitalSpeed||1);if(this.plasmaRings.forEach(a=>{const e=a.userData,o=e.longitudeOfAscendingNode+s*e.orbitalSpeed*.05;a.rotation.y=o,a.rotation.z=e.tiltAngle+Math.sin(s*.5+e.ringIndex)*.2;const r=a.material;r.uniforms.time.value=s}),this.energyWaves.forEach(a=>{const e=a.userData,o=e.initialAngle+s*e.orbitalSpeed*.1,r=this.calculateOrbitalPosition(e.distance,e.inclination,e.longitudeOfAscendingNode,o);a.position.set(r.x,r.y,r.z),a.rotation.x+=.01+e.waveIndex*.002,a.rotation.y+=.008+e.waveIndex*.003,a.rotation.z+=.012+e.waveIndex*.001;const c=a.material;c.uniforms.time.value=s}),this.dimensionalPortals.forEach(a=>{const e=a.userData,o=e.initialAngle+s*e.orbitalSpeed*.08,r=this.calculateOrbitalPosition(e.distance,e.inclination,e.longitudeOfAscendingNode,o);a.position.set(r.x,r.y,r.z),a.lookAt(0,0,0);const c=(Math.sin(s*1.5+e.activationPhase)+1)*.5,l=a.material;l.uniforms.time.value=s,l.uniforms.activation.value=c}),this.energyBeams.forEach(a=>{const e=a.userData,o=e.startAngle+s*.1,r=e.endAngle+s*.15,c=this.calculateOrbitalPosition(e.startDistance,e.inclination,e.longitudeOfAscendingNode,o),l=this.calculateOrbitalPosition(e.endDistance,e.inclination,e.longitudeOfAscendingNode,r),d=this.createCurvedBeamPath(c,l,e.startDistance,e.endDistance),p=a.geometry;p.setFromPoints(d),p.attributes.position.needsUpdate=!0;const h=(Math.sin(s*3+e.activationPhase)+1)*.5,g=a.material;g.uniforms.time.value=s,g.uniforms.intensity.value=h}),this.energyParticles){const a=this.energyParticles.material;a.uniforms.time.value=s;const e=this.energyParticles.geometry.attributes.position.array;for(let o=0;o<e.length/3;o++){const r=this.particleOrbitData[o],c=r.initialAngle+s*r.orbitalSpeed*.08,l=this.calculateOrbitalPosition(r.distance,r.inclination,r.longitudeOfAscendingNode,c);e[o*3]=l.x,e[o*3+1]=l.y,e[o*3+2]=l.z}this.energyParticles.geometry.attributes.position.needsUpdate=!0}if(this.spaceDistortion){const a=this.spaceDistortion.material;a.uniforms.time.value=s,this.spaceDistortion.rotation.x+=.002,this.spaceDistortion.rotation.y+=.003}}getObject3D(){return this.group}addToScene(t,i){i&&this.group.position.copy(i),t.add(this.group)}removeFromScene(t){t.remove(this.group)}dispose(){this.plasmaRings.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.energyWaves.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.dimensionalPortals.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.energyBeams.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.energyParticles&&(this.energyParticles.geometry.dispose(),this.energyParticles.material.dispose()),this.spaceDistortion&&(this.spaceDistortion.geometry.dispose(),this.spaceDistortion.material.dispose()),this.group.clear()}setEnabled(t){this.group.visible=t}updateParams(t){if(Object.assign(this.params,t),t.color){const i=new u(t.color[0],t.color[1],t.color[2]);this.plasmaRings.forEach(n=>{const s=n.material;s.uniforms.color.value=i}),this.energyWaves.forEach(n=>{const s=n.material;s.uniforms.color.value=new u(i.r*.8,i.g*.9,i.b)})}}}function j(C,t,i){const s={seed:(i||Math.floor(Math.random()*1e6))+70003,color:t.color||[.2,.6,1],cosmicOriginTime:t?.timing?.cosmic_origin_time||t?.cosmicOriginTime||I};return new z(C,s)}export{z as L,j as c};
