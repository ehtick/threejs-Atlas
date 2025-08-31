import{D as A,S as b}from"./atlas_DcFWk_8uQW5YiyxJyXm9Z.js";import{G as T,H as N,S as v,D as M,A as f,C as p,M as P,b as D,x as R,B as E,n as U,a as x,P as G,v as B,I,u as y,V as _,c as W}from"./atlas_BOOzg5XYrrU1N4SZySfRd.js";const m={RING_COUNT:{min:3,max:8},RING_DISTANCE:{min:1.5,max:3.5},WAVE_COUNT:{min:51,max:151},WAVE_AMPLITUDE:{min:.1,max:.2},ORBITAL_SPEED:{min:.2,max:.8},PORTAL_COUNT:{min:21,max:60},ENERGY_BEAM_COUNT:{min:2,max:8},PARTICLE_COUNT:{min:201,max:801}};class z{group;plasmaRings=[];energyWaves=[];dimensionalPortals=[];energyBeams=[];energyParticles;particleOrbitData=[];spaceDistortion;params;rng;planetRadius;cosmicOffset;constructor(t,e={}){this.planetRadius=t;const n=e.seed||Math.floor(Math.random()*1e6);this.rng=new b(n),this.params={color:e.color||[.2,.6,1],ringCount:e.ringCount||Math.floor(this.rng.random()*(m.RING_COUNT.max-m.RING_COUNT.min)+m.RING_COUNT.min),ringDistance:e.ringDistance||this.rng.random()*(m.RING_DISTANCE.max-m.RING_DISTANCE.min)+m.RING_DISTANCE.min,waveCount:e.waveCount||Math.floor(this.rng.random()*(m.WAVE_COUNT.max-m.WAVE_COUNT.min)+m.WAVE_COUNT.min),waveAmplitude:e.waveAmplitude||this.rng.random()*(m.WAVE_AMPLITUDE.max-m.WAVE_AMPLITUDE.min)+m.WAVE_AMPLITUDE.min,orbitalSpeed:e.orbitalSpeed||this.rng.random()*(m.ORBITAL_SPEED.max-m.ORBITAL_SPEED.min)+m.ORBITAL_SPEED.min,portalCount:e.portalCount||Math.floor(this.rng.random()*(m.PORTAL_COUNT.max-m.PORTAL_COUNT.min)+m.PORTAL_COUNT.min),energyBeamCount:e.energyBeamCount||Math.floor(this.rng.random()*(m.ENERGY_BEAM_COUNT.max-m.ENERGY_BEAM_COUNT.min)+m.ENERGY_BEAM_COUNT.min),particleCount:e.particleCount||Math.floor(this.rng.random()*(m.PARTICLE_COUNT.max-m.PARTICLE_COUNT.min)+m.PARTICLE_COUNT.min),cosmicOriginTime:e.cosmicOriginTime||A,seed:n},this.cosmicOffset=n%100*.1,this.group=new T,this.createPlasmaRings(),this.createEnergyWaves(),this.createDimensionalPortals(),this.createEnergyBeams(),this.createEnergyParticles(),this.createSpaceDistortion()}createPlasmaRings(){const t=this.params.ringCount,e=this.planetRadius+this.params.ringDistance;for(let n=0;n<t;n++){const s=e+n*.8,a=this.rng.random()*Math.PI*.5,i=this.rng.random()*Math.PI*2,o=(this.rng.random()-.5)*Math.PI*.3,r=new N(this.planetRadius*.2+n*.1,this.planetRadius*.03,8,32),c=new v({uniforms:{time:{value:0},color:{value:new p(this.params.color[0],this.params.color[1],this.params.color[2])},opacity:{value:.6-n*.08},ringIndex:{value:n},pulseSpeed:{value:2+this.rng.random()*2}},vertexShader:`
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
        `,transparent:!0,blending:f,side:M,depthWrite:!1}),l=new P(r,c);l.rotation.set(a,0,o),l.userData={distance:s,inclination:a,longitudeOfAscendingNode:i,tiltAngle:o,orbitalSpeed:this.rng.random()*.5+.3,ringIndex:n},this.plasmaRings.push(l),this.group.add(l)}}createEnergyWaves(){const t=this.params.waveCount,e=this.planetRadius+this.params.ringDistance+.5;for(let n=0;n<t;n++){const s=e+this.rng.random()*1,a=this.rng.random()*Math.PI,i=this.rng.random()*Math.PI*2,o=this.rng.random()*Math.PI*2,r=this.calculateOrbitalPosition(s,a,i,o),c=new D(this.planetRadius*.08+this.rng.random()*.04,16,8),l=new v({uniforms:{time:{value:0},color:{value:new p(this.params.color[0]*.8,this.params.color[1]*.9,this.params.color[2])},amplitude:{value:this.params.waveAmplitude},frequency:{value:3+this.rng.random()*4},waveIndex:{value:n}},vertexShader:`
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
        `,transparent:!0,blending:f,depthWrite:!1}),d=new P(c,l);d.position.set(r.x,r.y,r.z),d.userData={distance:s,inclination:a,longitudeOfAscendingNode:i,initialAngle:o,orbitalSpeed:this.rng.random()*.4+.2,waveIndex:n},this.energyWaves.push(d),this.group.add(d)}}createDimensionalPortals(){const t=this.params.portalCount,e=this.planetRadius+this.params.ringDistance+1.2;for(let n=0;n<t;n++){const s=e+this.rng.random()*.8,a=this.rng.random()*Math.PI,i=this.rng.random()*Math.PI*2,o=this.rng.random()*Math.PI*2,r=this.calculateOrbitalPosition(s,a,i,o),c=new R(this.planetRadius*.12,this.planetRadius*.18,16,1),l=new v({uniforms:{time:{value:0},color:{value:new p(.8,.4,1)},portalIndex:{value:n},activation:{value:0}},vertexShader:`
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
        `,transparent:!0,blending:f,side:M,depthWrite:!1}),d=new P(c,l);d.position.set(r.x,r.y,r.z),d.lookAt(0,0,0),d.userData={distance:s,inclination:a,longitudeOfAscendingNode:i,initialAngle:o,orbitalSpeed:this.rng.random()*.3+.1,portalIndex:n,activationPhase:this.rng.random()*Math.PI*2},this.dimensionalPortals.push(d),this.group.add(d)}}createEnergyBeams(){const t=this.params.energyBeamCount;for(let e=0;e<t;e++){const n=this.planetRadius+.2,s=this.planetRadius+.4+this.rng.random()*.3,a=this.rng.random()*Math.PI,i=this.rng.random()*Math.PI*2,o=this.rng.random()*Math.PI*2,r=o+(this.rng.random()-.5)*Math.PI,c=this.calculateOrbitalPosition(n,a,i,o),l=this.calculateOrbitalPosition(s,a,i,r),d=this.createCurvedBeamPath(c,l,n,s),h=new E().setFromPoints(d),u=new v({uniforms:{time:{value:0},color:{value:new p(.3,.8,1)},beamIndex:{value:e},intensity:{value:0}},vertexShader:`
          uniform float time;
          uniform float beamIndex;
          uniform float intensity;
          varying float vIntensity;
          
          void main() {
            vIntensity = intensity;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float time;
          varying float vIntensity;
          
          void main() {
            float glow = sin(time * 8.0) * 0.3 + 0.7;
            gl_FragColor = vec4(color, vIntensity * glow);
          }
        `,transparent:!0,blending:f,depthWrite:!1}),g=new U(h,u);g.userData={startDistance:n,endDistance:s,inclination:a,longitudeOfAscendingNode:i,startAngle:o,endAngle:r,beamIndex:e,activationPhase:this.rng.random()*Math.PI*2},this.energyBeams.push(g),this.group.add(g)}}createEnergyParticles(){const t=this.params.particleCount,e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t);for(let o=0;o<t;o++){const r=this.planetRadius+this.params.ringDistance+this.rng.random()*2,c=this.rng.random()*Math.PI,l=this.rng.random()*Math.PI*2,d=this.rng.random()*Math.PI*2,h=this.rng.random()*.5+.2;this.particleOrbitData.push({distance:r,inclination:c,longitudeOfAscendingNode:l,initialAngle:d,orbitalSpeed:h});const u=this.calculateOrbitalPosition(r,c,l,d);e[o*3]=u.x,e[o*3+1]=u.y,e[o*3+2]=u.z;const g=this.rng.random()*.3;n[o*3]=.2+g,n[o*3+1]=.6+g,n[o*3+2]=1,s[o]=this.planetRadius*(.02+this.rng.random()*.03)}const a=new E;a.setAttribute("position",new x(e,3)),a.setAttribute("color",new x(n,3)),a.setAttribute("size",new x(s,1));const i=new v({uniforms:{time:{value:0},particleTexture:{value:this.createParticleTexture()}},vertexShader:`
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
      `,transparent:!0,blending:f,depthWrite:!1,vertexColors:!0});this.energyParticles=new G(a,i),this.group.add(this.energyParticles)}createParticleTexture(){const t=document.createElement("canvas");t.width=32,t.height=32;const e=t.getContext("2d"),n=e.createRadialGradient(16,16,0,16,16,16);return n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.4,"rgba(100, 200, 255, 0.8)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,32,32),new B(t)}createCurvedBeamPath(t,e,n,s){const a=[],o=new I().setFromVector3(t),r=new I().setFromVector3(e);for(let c=0;c<=15;c++){const l=c/15,d=y.lerp(o.phi,r.phi,l);let h=y.lerp(o.theta,r.theta,l);const u=r.theta-o.theta;Math.abs(u)>Math.PI&&(u>0?h=y.lerp(o.theta,r.theta-2*Math.PI,l):h=y.lerp(o.theta,r.theta+2*Math.PI,l));const O=y.lerp(n,s,l),w=new I(O,d,h),S=new _().setFromSpherical(w);a.push(S)}return a}createSpaceDistortion(){const t=new D(this.planetRadius+this.params.ringDistance+1.5,32,16),e=new v({uniforms:{time:{value:0},color:{value:new p(.1,.3,.6)}},vertexShader:`
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
      `,transparent:!0,blending:f,side:W,depthWrite:!1});this.spaceDistortion=new P(t,e),this.group.add(this.spaceDistortion)}calculateOrbitalPosition(t,e,n,s){const a=t*Math.cos(s),i=t*Math.sin(s),o=0,r=a,c=i*Math.cos(e)-o*Math.sin(e),l=i*Math.sin(e)+o*Math.cos(e),d=r*Math.cos(n)-c*Math.sin(n),h=r*Math.sin(n)+c*Math.cos(n),u=l;return new _(d,h,u)}update(t){const s=(Date.now()/1e3-(this.params.cosmicOriginTime||A)+this.cosmicOffset)*(this.params.orbitalSpeed||1);if(this.plasmaRings.forEach(a=>{const i=a.userData,o=i.longitudeOfAscendingNode+s*i.orbitalSpeed*.05;a.rotation.y=o,a.rotation.z=i.tiltAngle+Math.sin(s*.5+i.ringIndex)*.2;const r=a.material;r.uniforms.time.value=s}),this.energyWaves.forEach(a=>{const i=a.userData,o=i.initialAngle+s*i.orbitalSpeed*.1,r=this.calculateOrbitalPosition(i.distance,i.inclination,i.longitudeOfAscendingNode,o);a.position.set(r.x,r.y,r.z),a.rotation.x+=.01+i.waveIndex*.002,a.rotation.y+=.008+i.waveIndex*.003,a.rotation.z+=.012+i.waveIndex*.001;const c=a.material;c.uniforms.time.value=s}),this.dimensionalPortals.forEach(a=>{const i=a.userData,o=i.initialAngle+s*i.orbitalSpeed*.08,r=this.calculateOrbitalPosition(i.distance,i.inclination,i.longitudeOfAscendingNode,o);a.position.set(r.x,r.y,r.z),a.lookAt(0,0,0);const c=(Math.sin(s*1.5+i.activationPhase)+1)*.5,l=a.material;l.uniforms.time.value=s,l.uniforms.activation.value=c}),this.energyBeams.forEach(a=>{const i=a.userData,o=i.startAngle+s*.1,r=i.endAngle+s*.15,c=this.calculateOrbitalPosition(i.startDistance,i.inclination,i.longitudeOfAscendingNode,o),l=this.calculateOrbitalPosition(i.endDistance,i.inclination,i.longitudeOfAscendingNode,r),d=this.createCurvedBeamPath(c,l,i.startDistance,i.endDistance),h=a.geometry;h.setFromPoints(d),h.attributes.position.needsUpdate=!0;const u=(Math.sin(s*3+i.activationPhase)+1)*.5,g=a.material;g.uniforms.time.value=s,g.uniforms.intensity.value=u}),this.energyParticles){const a=this.energyParticles.material;a.uniforms.time.value=s;const i=this.energyParticles.geometry.attributes.position.array;for(let o=0;o<i.length/3;o++){const r=this.particleOrbitData[o],c=r.initialAngle+s*r.orbitalSpeed*.08,l=this.calculateOrbitalPosition(r.distance,r.inclination,r.longitudeOfAscendingNode,c);i[o*3]=l.x,i[o*3+1]=l.y,i[o*3+2]=l.z}this.energyParticles.geometry.attributes.position.needsUpdate=!0}if(this.spaceDistortion){const a=this.spaceDistortion.material;a.uniforms.time.value=s,this.spaceDistortion.rotation.x+=.002,this.spaceDistortion.rotation.y+=.003}}getObject3D(){return this.group}addToScene(t,e){e&&this.group.position.copy(e),t.add(this.group)}removeFromScene(t){t.remove(this.group)}dispose(){this.plasmaRings.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.energyWaves.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.dimensionalPortals.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.energyBeams.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.energyParticles&&(this.energyParticles.geometry.dispose(),this.energyParticles.material.dispose()),this.spaceDistortion&&(this.spaceDistortion.geometry.dispose(),this.spaceDistortion.material.dispose()),this.group.clear()}setEnabled(t){this.group.visible=t}updateParams(t){if(Object.assign(this.params,t),t.color){const e=new p(t.color[0],t.color[1],t.color[2]);this.plasmaRings.forEach(n=>{const s=n.material;s.uniforms.color.value=e}),this.energyWaves.forEach(n=>{const s=n.material;s.uniforms.color.value=new p(e.r*.8,e.g*.9,e.b)})}}}function V(C,t,e){const s={seed:(e||Math.floor(Math.random()*1e6))+70003,color:t.color||[.2,.6,1],cosmicOriginTime:t?.timing?.cosmic_origin_time||t?.cosmicOriginTime||A};return new z(C,s)}export{z as L,V as c};
