import{D as w,S as R}from"./atlas_DkjWl6DBdcRHoaQOD3LxM.js";import{G as N,H as U,S as p,D as E,A as f,C as g,M as y,b as _,x as G,n as O,T as S,B,a as M,P as W,v as z,I as D,u as P,V as T,c as F}from"./atlas_Dr7FhitegIaVfnn-NnCom.js";const m={RING_COUNT:{min:3,max:8},RING_DISTANCE:{min:1.5,max:3.5},WAVE_COUNT:{min:51,max:151},WAVE_AMPLITUDE:{min:.1,max:.2},ORBITAL_SPEED:{min:.2,max:.8},PORTAL_COUNT:{min:21,max:60},ENERGY_BEAM_COUNT:{min:2,max:8},PARTICLE_COUNT:{min:201,max:801}};class L{group;plasmaRings=[];energyWaves=[];dimensionalPortals=[];energyBeams=[];energyParticles;particleOrbitData=[];spaceDistortion;params;rng;planetRadius;cosmicOffset;constructor(e,i={}){this.planetRadius=e;const n=i.seed||Math.floor(Math.random()*1e6);this.rng=new R(n),this.params={color:i.color||[.2,.6,1],ringCount:i.ringCount||Math.floor(this.rng.random()*(m.RING_COUNT.max-m.RING_COUNT.min)+m.RING_COUNT.min),ringDistance:i.ringDistance||this.rng.random()*(m.RING_DISTANCE.max-m.RING_DISTANCE.min)+m.RING_DISTANCE.min,waveCount:i.waveCount||Math.floor(this.rng.random()*(m.WAVE_COUNT.max-m.WAVE_COUNT.min)+m.WAVE_COUNT.min),waveAmplitude:i.waveAmplitude||this.rng.random()*(m.WAVE_AMPLITUDE.max-m.WAVE_AMPLITUDE.min)+m.WAVE_AMPLITUDE.min,orbitalSpeed:i.orbitalSpeed||this.rng.random()*(m.ORBITAL_SPEED.max-m.ORBITAL_SPEED.min)+m.ORBITAL_SPEED.min,portalCount:i.portalCount||Math.floor(this.rng.random()*(m.PORTAL_COUNT.max-m.PORTAL_COUNT.min)+m.PORTAL_COUNT.min),energyBeamCount:i.energyBeamCount||Math.floor(this.rng.random()*(m.ENERGY_BEAM_COUNT.max-m.ENERGY_BEAM_COUNT.min)+m.ENERGY_BEAM_COUNT.min),particleCount:i.particleCount||Math.floor(this.rng.random()*(m.PARTICLE_COUNT.max-m.PARTICLE_COUNT.min)+m.PARTICLE_COUNT.min),cosmicOriginTime:i.cosmicOriginTime||w,seed:n},this.cosmicOffset=n%100*.1,this.group=new N,this.createPlasmaRings(),this.createEnergyWaves(),this.createDimensionalPortals(),this.createEnergyBeams(),this.createEnergyParticles(),this.createSpaceDistortion()}createPlasmaRings(){const e=this.params.ringCount,i=this.planetRadius+this.params.ringDistance;for(let n=0;n<e;n++){const s=i+n*.8,a=this.rng.random()*Math.PI*.5,t=this.rng.random()*Math.PI*2,o=(this.rng.random()-.5)*Math.PI*.3,r=new U(this.planetRadius*.2+n*.1,this.planetRadius*.03,8,32),c=new p({uniforms:{time:{value:0},color:{value:new g(this.params.color[0],this.params.color[1],this.params.color[2])},opacity:{value:.6-n*.08},ringIndex:{value:n},pulseSpeed:{value:2+this.rng.random()*2}},vertexShader:`
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
        `,transparent:!0,blending:f,side:E,depthWrite:!1}),l=new y(r,c);l.rotation.set(a,0,o),l.userData={distance:s,inclination:a,longitudeOfAscendingNode:t,tiltAngle:o,orbitalSpeed:this.rng.random()*.5+.3,ringIndex:n},this.plasmaRings.push(l),this.group.add(l)}}createEnergyWaves(){const e=this.params.waveCount,i=this.planetRadius+this.params.ringDistance+.5;for(let n=0;n<e;n++){const s=i+this.rng.random()*1,a=this.rng.random()*Math.PI,t=this.rng.random()*Math.PI*2,o=this.rng.random()*Math.PI*2,r=this.calculateOrbitalPosition(s,a,t,o),c=new _(this.planetRadius*.08+this.rng.random()*.04,16,8),l=new p({uniforms:{time:{value:0},color:{value:new g(this.params.color[0]*.8,this.params.color[1]*.9,this.params.color[2])},amplitude:{value:this.params.waveAmplitude},frequency:{value:3+this.rng.random()*4},waveIndex:{value:n}},vertexShader:`
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
        `,transparent:!0,blending:f,depthWrite:!1}),d=new y(c,l);d.position.set(r.x,r.y,r.z),d.userData={distance:s,inclination:a,longitudeOfAscendingNode:t,initialAngle:o,orbitalSpeed:this.rng.random()*.4+.2,waveIndex:n},this.energyWaves.push(d),this.group.add(d)}}createDimensionalPortals(){const e=this.params.portalCount,i=this.planetRadius+this.params.ringDistance+1.2;for(let n=0;n<e;n++){const s=i+this.rng.random()*.8,a=this.rng.random()*Math.PI,t=this.rng.random()*Math.PI*2,o=this.rng.random()*Math.PI*2,r=this.calculateOrbitalPosition(s,a,t,o),c=new G(this.planetRadius*.12,this.planetRadius*.18,16,1),l=new p({uniforms:{time:{value:0},color:{value:new g(.8,.4,1)},portalIndex:{value:n},activation:{value:0}},vertexShader:`
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
        `,transparent:!0,blending:f,side:E,depthWrite:!1}),d=new y(c,l);d.position.set(r.x,r.y,r.z),d.lookAt(0,0,0),d.userData={distance:s,inclination:a,longitudeOfAscendingNode:t,initialAngle:o,orbitalSpeed:this.rng.random()*.3+.1,portalIndex:n,activationPhase:this.rng.random()*Math.PI*2},this.dimensionalPortals.push(d),this.group.add(d)}}createEnergyBeams(){const e=this.params.energyBeamCount;for(let i=0;i<e;i++){const n=this.planetRadius+.2,s=this.planetRadius+.4+this.rng.random()*.3,a=this.rng.random()*Math.PI,t=this.rng.random()*Math.PI*2,o=this.rng.random()*Math.PI*2,r=o+(this.rng.random()-.5)*Math.PI,c=this.calculateOrbitalPosition(n,a,t,o),l=this.calculateOrbitalPosition(s,a,t,r),d=this.createCurvedBeamPath(c,l,n,s),v=new O(d),h=this.planetRadius*.015,u=6,x=Math.max(20,d.length*2),I=new S(v,x,h,u,!1),A=new p({uniforms:{time:{value:0},color:{value:new g(.3,.8,1)},beamIndex:{value:i},intensity:{value:0}},vertexShader:`
          uniform float time;
          uniform float beamIndex;
          uniform float intensity;
          varying vec2 vUv;
          varying float vIntensity;
          
          void main() {
            vUv = uv;
            vIntensity = intensity;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float time;
          varying vec2 vUv;
          varying float vIntensity;
          
          void main() {
            float centerDistance = abs(vUv.y - 0.5) * 2.0;
            float tubeFalloff = 1.0 - smoothstep(0.0, 1.0, centerDistance);
            
            float glow = sin(time * 8.0 + vUv.x * 10.0) * 0.3 + 0.7;
            float energy = sin(time * 6.0 - vUv.x * 15.0) * 0.2 + 0.8;
            
            float finalIntensity = tubeFalloff * glow * energy * vIntensity;
            gl_FragColor = vec4(color, finalIntensity);
          }
        `,transparent:!0,blending:f,depthWrite:!1}),C=new y(I,A);C.userData={startDistance:n,endDistance:s,inclination:a,longitudeOfAscendingNode:t,startAngle:o,endAngle:r,beamIndex:i,activationPhase:this.rng.random()*Math.PI*2,curve:v,tubeRadius:h,tubularSegments:x,radialSegments:u},this.energyBeams.push(C),this.group.add(C)}}createEnergyParticles(){const e=this.params.particleCount,i=new Float32Array(e*3),n=new Float32Array(e*3),s=new Float32Array(e);for(let o=0;o<e;o++){const r=this.planetRadius+this.params.ringDistance+this.rng.random()*2,c=this.rng.random()*Math.PI,l=this.rng.random()*Math.PI*2,d=this.rng.random()*Math.PI*2,v=this.rng.random()*.5+.2;this.particleOrbitData.push({distance:r,inclination:c,longitudeOfAscendingNode:l,initialAngle:d,orbitalSpeed:v});const h=this.calculateOrbitalPosition(r,c,l,d);i[o*3]=h.x,i[o*3+1]=h.y,i[o*3+2]=h.z;const u=this.rng.random()*.3;n[o*3]=.2+u,n[o*3+1]=.6+u,n[o*3+2]=1,s[o]=this.planetRadius*(.035+this.rng.random()*.045)}const a=new B;a.setAttribute("position",new M(i,3)),a.setAttribute("color",new M(n,3)),a.setAttribute("size",new M(s,1));const t=new p({uniforms:{time:{value:0},particleTexture:{value:this.createParticleTexture()}},vertexShader:`
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
          
          gl_PointSize = size * (400.0 / -mvPosition.z) * 1.5; // Factor de escala mejorado para 4K
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
      `,transparent:!0,blending:f,depthWrite:!1,vertexColors:!0});this.energyParticles=new W(a,t),this.group.add(this.energyParticles)}createParticleTexture(){const e=document.createElement("canvas");e.width=32,e.height=32;const i=e.getContext("2d"),n=i.createRadialGradient(16,16,0,16,16,16);return n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.4,"rgba(100, 200, 255, 0.8)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=n,i.fillRect(0,0,32,32),new z(e)}createCurvedBeamPath(e,i,n,s){const a=[],o=new D().setFromVector3(e),r=new D().setFromVector3(i);for(let c=0;c<=15;c++){const l=c/15,d=P.lerp(o.phi,r.phi,l);let v=P.lerp(o.theta,r.theta,l);const h=r.theta-o.theta;Math.abs(h)>Math.PI&&(h>0?v=P.lerp(o.theta,r.theta-2*Math.PI,l):v=P.lerp(o.theta,r.theta+2*Math.PI,l));const x=P.lerp(n,s,l),I=new D(x,d,v),A=new T().setFromSpherical(I);a.push(A)}return a}createSpaceDistortion(){const e=new _(this.planetRadius+this.params.ringDistance+1.5,32,16),i=new p({uniforms:{time:{value:0},color:{value:new g(.1,.3,.6)}},vertexShader:`
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
      `,transparent:!0,blending:f,side:F,depthWrite:!1});this.spaceDistortion=new y(e,i),this.group.add(this.spaceDistortion)}calculateOrbitalPosition(e,i,n,s){const a=e*Math.cos(s),t=e*Math.sin(s),o=0,r=a,c=t*Math.cos(i)-o*Math.sin(i),l=t*Math.sin(i)+o*Math.cos(i),d=r*Math.cos(n)-c*Math.sin(n),v=r*Math.sin(n)+c*Math.cos(n),h=l;return new T(d,v,h)}update(e){const s=(Date.now()/1e3-(this.params.cosmicOriginTime||w)+this.cosmicOffset)*(this.params.orbitalSpeed||1);if(this.plasmaRings.forEach(a=>{const t=a.userData,o=t.longitudeOfAscendingNode+s*t.orbitalSpeed*.05;a.rotation.y=o,a.rotation.z=t.tiltAngle+Math.sin(s*.5+t.ringIndex)*.2;const r=a.material;r.uniforms.time.value=s}),this.energyWaves.forEach(a=>{const t=a.userData,o=t.initialAngle+s*t.orbitalSpeed*.1,r=this.calculateOrbitalPosition(t.distance,t.inclination,t.longitudeOfAscendingNode,o);a.position.set(r.x,r.y,r.z),a.rotation.x+=.01+t.waveIndex*.002,a.rotation.y+=.008+t.waveIndex*.003,a.rotation.z+=.012+t.waveIndex*.001;const c=a.material;c.uniforms.time.value=s}),this.dimensionalPortals.forEach(a=>{const t=a.userData,o=t.initialAngle+s*t.orbitalSpeed*.08,r=this.calculateOrbitalPosition(t.distance,t.inclination,t.longitudeOfAscendingNode,o);a.position.set(r.x,r.y,r.z),a.lookAt(0,0,0);const c=(Math.sin(s*1.5+t.activationPhase)+1)*.5,l=a.material;l.uniforms.time.value=s,l.uniforms.activation.value=c}),this.energyBeams.forEach(a=>{const t=a.userData,o=t.startAngle+s*.1,r=t.endAngle+s*.15,c=this.calculateOrbitalPosition(t.startDistance,t.inclination,t.longitudeOfAscendingNode,o),l=this.calculateOrbitalPosition(t.endDistance,t.inclination,t.longitudeOfAscendingNode,r),d=this.createCurvedBeamPath(c,l,t.startDistance,t.endDistance),v=new O(d);a.geometry.dispose(),a.geometry=new S(v,t.tubularSegments,t.tubeRadius,t.radialSegments,!1);const h=(Math.sin(s*3+t.activationPhase)+1)*.5,u=a.material;u.uniforms.time.value=s,u.uniforms.intensity.value=h}),this.energyParticles){const a=this.energyParticles.material;a.uniforms.time.value=s;const t=this.energyParticles.geometry.attributes.position.array;for(let o=0;o<t.length/3;o++){const r=this.particleOrbitData[o],c=r.initialAngle+s*r.orbitalSpeed*.08,l=this.calculateOrbitalPosition(r.distance,r.inclination,r.longitudeOfAscendingNode,c);t[o*3]=l.x,t[o*3+1]=l.y,t[o*3+2]=l.z}this.energyParticles.geometry.attributes.position.needsUpdate=!0}if(this.spaceDistortion){const a=this.spaceDistortion.material;a.uniforms.time.value=s,this.spaceDistortion.rotation.x+=.002,this.spaceDistortion.rotation.y+=.003}}getObject3D(){return this.group}addToScene(e,i){i&&this.group.position.copy(i),e.add(this.group)}removeFromScene(e){e.remove(this.group)}dispose(){this.plasmaRings.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.energyWaves.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.dimensionalPortals.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.energyBeams.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.energyParticles&&(this.energyParticles.geometry.dispose(),this.energyParticles.material.dispose()),this.spaceDistortion&&(this.spaceDistortion.geometry.dispose(),this.spaceDistortion.material.dispose()),this.group.clear()}setEnabled(e){this.group.visible=e}updateParams(e){if(Object.assign(this.params,e),e.color){const i=new g(e.color[0],e.color[1],e.color[2]);this.plasmaRings.forEach(n=>{const s=n.material;s.uniforms.color.value=i}),this.energyWaves.forEach(n=>{const s=n.material;s.uniforms.color.value=new g(i.r*.8,i.g*.9,i.b)})}}}function Y(b,e,i){const s={seed:(i||Math.floor(Math.random()*1e6))+70003,color:e.color||[.2,.6,1],cosmicOriginTime:e?.timing?.cosmic_origin_time||e?.cosmicOriginTime||w};return new L(b,s)}export{L,Y as c};
