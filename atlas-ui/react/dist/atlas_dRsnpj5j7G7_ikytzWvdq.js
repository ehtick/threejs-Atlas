import{D as v,S as y}from"./atlas_CGrAwTYnSDNTtni2msvpu.js";import{G as w,b as f,S as u,c as _,A as h,C as d,M as p,l as O,D as P,V as I}from"./atlas_BptVXGp7hwWSDe7IbaYgj.js";const l={CLOUD_LAYER_COUNT:{min:3,max:6},ATMOSPHERIC_BELT_COUNT:{min:2,max:5},GAS_SWIRL_COUNT:{min:8,max:20},COLOR_SHIFT_SPEED:{min:.5,max:2},FLOW_SPEED:{min:.3,max:1.2},CONSCIOUSNESS_PULSE_COUNT:{min:5,max:12}};class E{group;cloudLayers=[];atmosphericBelts=[];gasSwirls=[];consciousnessPulses=[];params;rng;planetRadius;cosmicOffset;constructor(t,o={}){this.planetRadius=t;const a=o.seed||Math.floor(Math.random()*1e6);this.rng=new y(a),this.params={color:o.color||[.6,.8,.4],cloudLayerCount:o.cloudLayerCount||Math.floor(this.rng.random()*(l.CLOUD_LAYER_COUNT.max-l.CLOUD_LAYER_COUNT.min)+l.CLOUD_LAYER_COUNT.min),atmosphericBeltCount:o.atmosphericBeltCount||Math.floor(this.rng.random()*(l.ATMOSPHERIC_BELT_COUNT.max-l.ATMOSPHERIC_BELT_COUNT.min)+l.ATMOSPHERIC_BELT_COUNT.min),gasSwirlCount:o.gasSwirlCount||Math.floor(this.rng.random()*(l.GAS_SWIRL_COUNT.max-l.GAS_SWIRL_COUNT.min)+l.GAS_SWIRL_COUNT.min),colorShiftSpeed:o.colorShiftSpeed||this.rng.random()*(l.COLOR_SHIFT_SPEED.max-l.COLOR_SHIFT_SPEED.min)+l.COLOR_SHIFT_SPEED.min,flowSpeed:o.flowSpeed||this.rng.random()*(l.FLOW_SPEED.max-l.FLOW_SPEED.min)+l.FLOW_SPEED.min,consciousnessPulseCount:o.consciousnessPulseCount||Math.floor(this.rng.random()*(l.CONSCIOUSNESS_PULSE_COUNT.max-l.CONSCIOUSNESS_PULSE_COUNT.min)+l.CONSCIOUSNESS_PULSE_COUNT.min),cosmicOriginTime:o.cosmicOriginTime||v,seed:a},this.cosmicOffset=a%100*.1,this.group=new w,this.createCloudLayers(),this.createAtmosphericBelts(),this.createGasSwirls(),this.createConsciousnessPulses()}createCloudLayers(){const t=this.params.cloudLayerCount;for(let o=0;o<t;o++){const a=this.planetRadius+.1+o*.15,e=new f(a,32,16),s=new u({uniforms:{time:{value:0},baseColor:{value:new d(this.params.color[0],this.params.color[1],this.params.color[2])},layerIndex:{value:o},colorShiftSpeed:{value:this.params.colorShiftSpeed},opacity:{value:.3-o*.04}},vertexShader:`
          uniform float time;
          uniform float layerIndex;
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying float vDistortion;
          
          float noise(vec3 p) {
            return sin(p.x * 4.0 + time * 0.5) * sin(p.y * 4.0 + time * 0.7) * sin(p.z * 4.0 + time * 0.3) * 0.5 + 0.5;
          }
          
          void main() {
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            
            vec3 noisePos = position * 2.0 + time * 0.2;
            float distortion = noise(noisePos) * 0.1;
            vDistortion = distortion;
            
            vec3 pos = position + normal * distortion;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 baseColor;
          uniform float time;
          uniform float layerIndex;
          uniform float colorShiftSpeed;
          uniform float opacity;
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying float vDistortion;
          
          vec3 hsv2rgb(vec3 c) {
            vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
            vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
            return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
          }
          
          void main() {
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
            
            float colorCycle = sin(time * colorShiftSpeed + layerIndex * 2.0 + vPosition.x * 0.5) * 0.5 + 0.5;
            float hueShift = colorCycle * 0.3 + layerIndex * 0.1;
            
            vec3 shiftedColor = hsv2rgb(vec3(hueShift, 0.7, 0.9));
            vec3 finalColor = mix(baseColor, shiftedColor, colorCycle);
            
            float alpha = fresnel * opacity * (0.8 + vDistortion * 2.0);
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `,transparent:!0,blending:h,side:_,depthWrite:!1}),i=new p(e,s);i.userData={layerIndex:o,rotationSpeed:(this.rng.random()-.5)*.01},this.cloudLayers.push(i),this.group.add(i)}}createAtmosphericBelts(){const t=this.params.atmosphericBeltCount;for(let o=0;o<t;o++){const a=this.planetRadius+.3+o*.4,e=this.planetRadius*.15,s=new O(a,a,e,64,8,!0),i=new u({uniforms:{time:{value:0},baseColor:{value:new d(this.params.color[0]*.8,this.params.color[1]*1.2,this.params.color[2]*.9)},beltIndex:{value:o},flowSpeed:{value:this.params.flowSpeed}},vertexShader:`
          uniform float time;
          uniform float beltIndex;
          uniform float flowSpeed;
          varying vec2 vUv;
          varying vec3 vPosition;
          varying float vFlow;
          
          void main() {
            vUv = uv;
            vPosition = position;
            
            float flow = sin(time * flowSpeed + beltIndex * 3.0 + position.x * 0.1) * 0.5 + 0.5;
            vFlow = flow;
            
            vec3 pos = position;
            pos.y += sin(time * 2.0 + uv.x * 20.0) * 0.05;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 baseColor;
          uniform float time;
          uniform float beltIndex;
          varying vec2 vUv;
          varying vec3 vPosition;
          varying float vFlow;
          
          void main() {
            float stripPattern = sin(vUv.x * 40.0 + time * 3.0) * 0.5 + 0.5;
            float flowPattern = sin(vUv.x * 10.0 + time * 5.0 + beltIndex * 2.0) * 0.3 + 0.7;
            
            float edgeFade = smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y);
            
            vec3 gasColor = baseColor * (1.0 + stripPattern * 0.5) * flowPattern;
            float alpha = edgeFade * vFlow * 0.6;
            
            gl_FragColor = vec4(gasColor, alpha);
          }
        `,transparent:!0,blending:h,side:P,depthWrite:!1}),n=new p(s,i),r=this.rng.random()*Math.PI*.4+Math.PI*.3,m=this.rng.random()*Math.PI*2,c=(this.rng.random()-.5)*.3;n.rotation.x=Math.PI/2+c,n.rotation.y=m,n.rotation.z=r,n.userData={beltIndex:o,inclination:r,longitudeOfAscendingNode:m,tiltAngle:c,orbitalSpeed:this.rng.random()*.3+.1,rotationSpeed:(this.rng.random()-.5)*.02},this.atmosphericBelts.push(n),this.group.add(n)}}createGasSwirls(){const t=this.params.gasSwirlCount;for(let o=0;o<t;o++){const a=this.planetRadius+.05+this.rng.random()*.8,e=this.rng.random()*Math.PI,s=this.rng.random()*Math.PI*2,i=this.rng.random()*Math.PI*2,n=this.calculateOrbitalPosition(a,e,s,i),r=new f(this.planetRadius*(.08+this.rng.random()*.06),16,12),m=new u({uniforms:{time:{value:0},color:{value:new d(this.params.color[0],this.params.color[1]*1.1,this.params.color[2]*.8)},swirlIndex:{value:o},swirlSpeed:{value:2+this.rng.random()*3}},vertexShader:`
          uniform float time;
          uniform float swirlIndex;
          uniform float swirlSpeed;
          varying vec3 vNormal;
          varying vec3 vPosition;
          varying float vSwirl;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            
            float swirl = sin(time * swirlSpeed + swirlIndex * 2.0) * 0.5 + 0.5;
            vSwirl = swirl;
            
            vec3 pos = position;
            float twist = atan(pos.y, pos.x) + time * 2.0 + swirlIndex;
            pos.x += sin(twist) * 0.05 * swirl;
            pos.y += cos(twist) * 0.05 * swirl;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float time;
          uniform float swirlIndex;
          varying vec3 vNormal;
          varying vec3 vPosition;
          varying float vSwirl;
          
          void main() {
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
            float gasPattern = sin(vPosition.x * 8.0 + time * 4.0) * sin(vPosition.y * 6.0 + time * 3.0) * 0.3 + 0.7;
            
            float alpha = fresnel * gasPattern * vSwirl * 0.7;
            vec3 gasColor = color * (1.0 + gasPattern * 0.5);
            
            gl_FragColor = vec4(gasColor, alpha);
          }
        `,transparent:!0,blending:h,depthWrite:!1}),c=new p(r,m);c.position.set(n.x,n.y,n.z),c.userData={distance:a,inclination:e,longitudeOfAscendingNode:s,initialAngle:i,orbitalSpeed:this.rng.random()*.5+.3,swirlIndex:o},this.gasSwirls.push(c),this.group.add(c)}}createConsciousnessPulses(){const t=this.params.consciousnessPulseCount;for(let o=0;o<t;o++){const a=this.planetRadius+.6+this.rng.random()*.5,e=this.rng.random()*Math.PI,s=this.rng.random()*Math.PI*2,i=this.rng.random()*Math.PI*2,n=this.calculateOrbitalPosition(a,e,s,i),r=new f(this.planetRadius*.04,8,6),m=new u({uniforms:{time:{value:0},color:{value:new d(this.params.color[0]*1.2,this.params.color[1],this.params.color[2]*1.3)},pulseIndex:{value:o},pulseSpeed:{value:3+this.rng.random()*2}},vertexShader:`
          uniform float time;
          uniform float pulseIndex;
          uniform float pulseSpeed;
          varying float vIntensity;
          
          void main() {
            float pulse = sin(time * pulseSpeed + pulseIndex * 1.5) * 0.5 + 0.5;
            vIntensity = pulse;
            
            vec3 pos = position * (1.0 + pulse * 0.3);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float time;
          varying float vIntensity;
          
          void main() {
            float consciousness = sin(time * 8.0) * 0.2 + 0.8;
            
            gl_FragColor = vec4(color * consciousness, vIntensity * 0.9);
          }
        `,transparent:!0,blending:h,depthWrite:!1}),c=new p(r,m);c.position.set(n.x,n.y,n.z),c.userData={distance:a,inclination:e,longitudeOfAscendingNode:s,initialAngle:i,orbitalSpeed:this.rng.random()*.3+.1,pulseIndex:o},this.consciousnessPulses.push(c),this.group.add(c)}}calculateOrbitalPosition(t,o,a,e){const s=t*Math.cos(e),i=t*Math.sin(e),n=0,r=s,m=i*Math.cos(o)-n*Math.sin(o),c=i*Math.sin(o)+n*Math.cos(o),S=r*Math.cos(a)-m*Math.sin(a),C=r*Math.sin(a)+m*Math.cos(a),x=c;return new I(S,C,x)}update(t){const e=Date.now()/1e3-(this.params.cosmicOriginTime||v)+this.cosmicOffset;this.cloudLayers.forEach(s=>{const i=s.userData;s.rotation.y+=i.rotationSpeed,s.rotation.z+=i.rotationSpeed*.7;const n=s.material;n.uniforms.time.value=e}),this.atmosphericBelts.forEach(s=>{const i=s.userData,n=i.longitudeOfAscendingNode+e*i.orbitalSpeed*.1;s.rotation.x=Math.PI/2+i.tiltAngle+Math.sin(e*.5+i.beltIndex)*.1,s.rotation.y=n,s.rotation.z=i.inclination+Math.cos(e*.3+i.beltIndex)*.05;const r=s.material;r.uniforms.time.value=e}),this.gasSwirls.forEach(s=>{const i=s.userData,n=i.initialAngle+e*i.orbitalSpeed*.1,r=this.calculateOrbitalPosition(i.distance,i.inclination,i.longitudeOfAscendingNode,n);s.position.set(r.x,r.y,r.z),s.rotation.x+=.02,s.rotation.y+=.015;const m=s.material;m.uniforms.time.value=e}),this.consciousnessPulses.forEach(s=>{const i=s.userData,n=i.initialAngle+e*i.orbitalSpeed*.05,r=this.calculateOrbitalPosition(i.distance,i.inclination,i.longitudeOfAscendingNode,n);s.position.set(r.x,r.y,r.z);const m=s.material;m.uniforms.time.value=e})}getObject3D(){return this.group}addToScene(t,o){o&&this.group.position.copy(o),t.add(this.group)}removeFromScene(t){t.remove(this.group)}dispose(){this.cloudLayers.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.atmosphericBelts.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.gasSwirls.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.consciousnessPulses.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.group.clear()}setEnabled(t){this.group.visible=t}updateParams(t){if(Object.assign(this.params,t),t.color){const o=new d(t.color[0],t.color[1],t.color[2]);this.cloudLayers.forEach(a=>{const e=a.material;e.uniforms.baseColor.value=o}),this.atmosphericBelts.forEach(a=>{const e=a.material;e.uniforms.baseColor.value=new d(o.r*.8,o.g*1.2,o.b*.9)}),this.gasSwirls.forEach(a=>{const e=a.material;e.uniforms.color.value=new d(o.r,o.g*1.1,o.b*.8)}),this.consciousnessPulses.forEach(a=>{const e=a.material;e.uniforms.color.value=new d(o.r*1.2,o.g,o.b*1.3)})}}}function L(g,t,o){const e={seed:(o||Math.floor(Math.random()*1e6))+80004,color:t.color||[.6,.8,.4],cosmicOriginTime:t?.timing?.cosmic_origin_time||t?.cosmicOriginTime||v};return new E(g,e)}export{E as L,L as c};
