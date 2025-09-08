import{D as O,S as Y}from"./atlas_DxIUfhfJiL6S17-iYXL6q.js";import{G as L,b as I,S,A as x,D as b,C,M as P,V as R,B as M,a as f,P as w,t as W,r as D,g as V,x as U,c as F,y as B,v as _,e as A}from"./atlas_DhOIq2w9B2IVYJei_u5Oy.js";const h={SACRED_SYMBOL_COUNT:{min:12,max:24},ORBITAL_CROSS_COUNT:{min:8,max:16},SACRED_CIRCLE_COUNT:{min:24,max:32},GOLDEN_PARTICLE_COUNT:{min:200,max:350},DIVINE_PULSE_INTENSITY:{min:3,max:8},ORBITAL_SPEED:{min:.2,max:1},CROSS_SPIRAL_COUNT:{min:3,max:6},HOLOGRAM_RING_COUNT:{min:4,max:8},BINARY_DIGIT_COUNT:{min:200,max:600}};class k{group;digitalGodSphere;godSphere;binaryDigits=[];binaryDigitData=[];sacredSymbols=[];orbitalCrosses=[];crossSpirals=[];hologramRings=[];sacredCircles=[];goldenParticles;divineParticles;energyWaves=[];particleOrbitData=[];divineParticleOrbitData=[];spaceDistortion;divineLight;holyLights=[];params;rng;planetRadius;cosmicOffset;constructor(e,t={}){this.planetRadius=e;const s=t.seed||Math.floor(Math.random()*1e6);this.rng=new Y(s),this.params={color:t.color||[1,.84,0],sacredSymbolCount:t.sacredSymbolCount||Math.floor(this.rng.random()*(h.SACRED_SYMBOL_COUNT.max-h.SACRED_SYMBOL_COUNT.min)+h.SACRED_SYMBOL_COUNT.min),orbitalCrossCount:t.orbitalCrossCount||Math.floor(this.rng.random()*(h.ORBITAL_CROSS_COUNT.max-h.ORBITAL_CROSS_COUNT.min)+h.ORBITAL_CROSS_COUNT.min),sacredCircleCount:t.sacredCircleCount||Math.floor(this.rng.random()*(h.SACRED_CIRCLE_COUNT.max-h.SACRED_CIRCLE_COUNT.min)+h.SACRED_CIRCLE_COUNT.min),goldenParticleCount:t.goldenParticleCount||Math.floor(this.rng.random()*(h.GOLDEN_PARTICLE_COUNT.max-h.GOLDEN_PARTICLE_COUNT.min)+h.GOLDEN_PARTICLE_COUNT.min),divinePulseIntensity:t.divinePulseIntensity||this.rng.random()*(h.DIVINE_PULSE_INTENSITY.max-h.DIVINE_PULSE_INTENSITY.min)+h.DIVINE_PULSE_INTENSITY.min,orbitalSpeed:t.orbitalSpeed||this.rng.random()*(h.ORBITAL_SPEED.max-h.ORBITAL_SPEED.min)+h.ORBITAL_SPEED.min,crossSpiralCount:t.crossSpiralCount||Math.floor(this.rng.random()*(h.CROSS_SPIRAL_COUNT.max-h.CROSS_SPIRAL_COUNT.min)+h.CROSS_SPIRAL_COUNT.min),hologramRingCount:t.hologramRingCount||Math.floor(this.rng.random()*(h.HOLOGRAM_RING_COUNT.max-h.HOLOGRAM_RING_COUNT.min)+h.HOLOGRAM_RING_COUNT.min),cosmicOriginTime:t.cosmicOriginTime||O,seed:s},this.cosmicOffset=s%100*.1,this.group=new L,this.createDigitalGodSphere(),this.createBinaryDigits(),this.createSacredSymbols(),this.createOrbitalCrosses(),this.createCrossSpirals(),this.createHologramRings(),this.createSacredCircles(),this.createGoldenParticles(),this.createDivineParticles(),this.createEnergyWaves(),this.createSpaceDistortion(),this.createDivineLight(),this.createHolyLights()}createDigitalGodSphere(){this.digitalGodSphere=new L;const e=this.planetRadius*1.33,t=new I(e,64,64),s=new S({uniforms:{time:{value:0},color:{value:new C(1,.8,0)},pulseIntensity:{value:this.params.divinePulseIntensity},planetRadius:{value:this.planetRadius}},vertexShader:`
        uniform float time;
        uniform float pulseIntensity;
        uniform float planetRadius;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        varying float vPulse;
        varying float vDistanceFromCenter;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vUv = uv;
          vDistanceFromCenter = length(position);
          
          float pulse = sin(time * 2.0) * 0.03 + 1.0;
          vPulse = pulse * pulseIntensity;
          
          vec3 pos = position * pulse;
          // Digital energy waves
          pos += normal * sin(time * 3.0 + length(position) * 0.1) * 0.02;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float time;
        uniform float planetRadius;
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        varying float vPulse;
        varying float vDistanceFromCenter;
        
        void main() {
          vec3 digitalColor = color;
          
          float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 2.0);
          
          float gridX = sin(vUv.x * 120.0 + time * 2.5) * 0.5 + 0.5;
          float gridY = sin(vUv.y * 100.0 + time * 2.0) * 0.5 + 0.5;
          float grid = step(0.92, gridX) + step(0.92, gridY);

          float gridDiag = sin((vUv.x + vUv.y) * 90.0 + time * 1.8) * 0.5 + 0.5;
          grid += step(0.95, gridDiag) * 0.5;
          grid *= 1.0;
          
          float dataStream = sin(vUv.y * 70.0 - time * 6.0) * 0.5 + 0.5;
          float dataStream2 = sin(vUv.x * 60.0 + time * 4.5) * 0.5 + 0.5;
          dataStream = step(0.65, dataStream) * 0.8 + step(0.75, dataStream2) * 0.6;
          
          float waves = sin(vDistanceFromCenter * 0.4 + time * 5.0) * 0.3 + 0.7;
          waves += sin(vDistanceFromCenter * 0.8 + time * 3.0) * 0.2;
          waves += sin(vDistanceFromCenter * 1.2 - time * 2.0) * 0.15;
          
          vec3 finalColor = digitalColor * waves;
          finalColor += vec3(1.0, 0.9, 0.3) * grid;
          finalColor += vec3(1.0, 0.8, 0.2) * dataStream; 
          finalColor += vec3(1.0, 0.7, 0.1) * fresnel * 0.8; 
          
          float distanceFade = smoothstep(planetRadius * 1.4, planetRadius * 1.0, vDistanceFromCenter);
          float alpha = (0.6 + fresnel * 0.4 + grid * 0.3 + dataStream * 0.25) * distanceFade;
          
          gl_FragColor = vec4(finalColor * vPulse, alpha);
        }
      `,transparent:!0,side:b,depthWrite:!1,blending:x});this.godSphere=new P(t,s),this.digitalGodSphere.add(this.godSphere);const n=this.params.planetPosition||new R(0,0,0);this.digitalGodSphere.position.copy(n),this.digitalGodSphere.userData={rotationSpeed:.002,planetPosition:n.clone(),baseRotationX:this.digitalGodSphere.rotation.x,baseRotationY:this.digitalGodSphere.rotation.y},this.group.add(this.digitalGodSphere)}createBinaryDigits(){const e=this.params.binaryDigitCount||Math.floor(this.rng.random()*(h.BINARY_DIGIT_COUNT.max-h.BINARY_DIGIT_COUNT.min)+h.BINARY_DIGIT_COUNT.min),t=this.planetRadius*1.35;for(let s=0;s<5;s++){const n=Math.floor(e/5),o=new Float32Array(n*3),i=new Float32Array(n*3),a=new Float32Array(n),l=new Float32Array(n);for(let m=0;m<n;m++){const g=Math.PI*(3-Math.sqrt(5)),v=s*n+m,y=1-v/(e-1)*2,p=Math.sqrt(1-y*y),u=g*v,G=t*Math.cos(u)*p,N=t*Math.sin(u)*p,E=t*y;o[m*3]=G,o[m*3+1]=E,o[m*3+2]=N;const z=Math.floor(this.rng.random()*2);l[m]=z,i[m*3]=1,i[m*3+1]=1,i[m*3+2]=1,a[m]=this.planetRadius*(.06+this.rng.random()*.04),this.binaryDigitData.push({position:new R(G,E,N),velocity:new R((this.rng.random()-.5)*.02,(this.rng.random()-.5)*.02,(this.rng.random()-.5)*.02),digit:z,scale:a[m],orbitalSpeed:.5+this.rng.random()*.5,phase:this.rng.random()*Math.PI*2})}const r=new M;r.setAttribute("position",new f(o,3)),r.setAttribute("color",new f(i,3)),r.setAttribute("size",new f(a,1)),r.setAttribute("digit",new f(l,1));const c=new S({uniforms:{time:{value:0},digitTexture:{value:this.createBinaryDigitTexture()}},vertexShader:`
          attribute float size;
          attribute float digit;
          uniform float time;
          varying vec3 vColor;
          varying float vAlpha;
          varying float vDigit;
          
          void main() {
            vColor = color;
            vDigit = digit;
            
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            float distanceFade = 1.0 / (1.0 + length(mvPosition.xyz) * 0.01);
            
            float pulse = sin(time * 4.0 + position.x * 0.15 + position.y * 0.15 + digit * 3.14) * 0.4 + 0.6;

            float matrixFlicker = step(0.95, sin(time * 20.0 + position.x * 50.0 + position.y * 30.0));
            vAlpha = (pulse + matrixFlicker * 0.8) * distanceFade;
            
            gl_PointSize = size * (400.0 / -mvPosition.z) * (1.0 + pulse * 0.5 + matrixFlicker * 0.3);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,fragmentShader:`
          uniform sampler2D digitTexture;
          varying vec3 vColor;
          varying float vAlpha;
          varying float vDigit;
          
          void main() {
            vec4 texColor = texture2D(digitTexture, gl_PointCoord);
            
            vec2 coord = gl_PointCoord;
            coord.y = 1.0 - coord.y; 
            if (vDigit < 0.5) {
              coord.x *= 0.5;
            } else {
              coord.x = coord.x * 0.5 + 0.5;
            }
            
            vec4 finalTexColor = texture2D(digitTexture, coord);
            vec3 finalColor = vColor * finalTexColor.rgb;
            
            gl_FragColor = vec4(finalColor, finalTexColor.a * vAlpha);
          }
        `,transparent:!0,blending:x,depthWrite:!1,vertexColors:!0}),d=new w(r,c);d.userData={systemIndex:s},this.binaryDigits.push(d),this.digitalGodSphere.add(d)}}createSacredSymbols(){const e=this.params.sacredSymbolCount;for(let t=0;t<e;t++){const s=this.planetRadius+2+this.rng.random()*1.5,n=this.rng.random()*Math.PI,o=this.rng.random()*Math.PI*2,i=this.rng.random()*Math.PI*2,a=this.calculateOrbitalPosition(s,n,o,i),l=Math.floor(this.rng.random()*2);let r;l===0?r=this.createStarGeometry():r=new W(this.planetRadius*.08,this.planetRadius*.12,3);const c=new S({uniforms:{time:{value:0},color:{value:new C(this.params.color[0]*.9,this.params.color[1]*1.1,this.params.color[2]*.9)},symbolIndex:{value:t},symbolType:{value:l}},vertexShader:`
          uniform float time;
          uniform float symbolIndex;
          varying vec3 vPosition;
          varying float vSacred;
          
          void main() {
            vPosition = position;
            
            float sacred = sin(time * 4.0 + symbolIndex * 2.0) * 0.3 + 0.7;
            vSacred = sacred;
            
            vec3 pos = position * (1.0 + sacred * 0.2);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float time;
          uniform float symbolType;
          varying vec3 vPosition;
          varying float vSacred;
          
          void main() {
            float divine = sin(time * 6.0 + vPosition.x * 5.0) * 0.2 + 0.8;
            float sacred = sin(time * 3.0 + symbolType * 3.14) * 0.1 + 0.9;
            
            vec3 holyColor = color * divine * sacred;
            float alpha = vSacred * 0.9;
            
            gl_FragColor = vec4(holyColor, alpha);
          }
        `,transparent:!0,blending:x,side:b,depthWrite:!1}),d=new P(r,c);d.position.set(a.x,a.y,a.z),d.lookAt(0,0,0),d.userData={distance:s,inclination:n,longitudeOfAscendingNode:o,initialAngle:i,orbitalSpeed:this.rng.random()*.3+.1,symbolIndex:t,symbolType:l},this.sacredSymbols.push(d),this.group.add(d)}}createCrossGeometry(){const e=this.planetRadius*.1,t=e*.2,s=new D(t,e,t),o=new D(e*.6,t,t).clone();o.translate(0,e*.2,0);const i=s.attributes.position.array,a=o.attributes.position.array,l=i.length+a.length,r=new Float32Array(l);r.set(i,0),r.set(a,i.length);const c=new M;return c.setAttribute("position",new f(r,3)),c.computeVertexNormals(),c}createEnhancedCrossGeometry(){const e=this.planetRadius*.15,t=e*.15,s=new D(t,e,t),o=new D(e*.7,t,t).clone();o.translate(0,e*.15,0);const i=new I(t*.8,8,8),a=i.clone(),l=i.clone(),r=i.clone(),c=i.clone();a.translate(0,e*.4,0),l.translate(0,-e*.4,0),r.translate(-e*.25,e*.15,0),c.translate(e*.25,e*.15,0);const d=[s,o,a,l,r,c];let m=0;d.forEach(p=>m+=p.attributes.position.count*3);const g=new Float32Array(m);let v=0;d.forEach(p=>{const u=p.attributes.position.array;g.set(u,v),v+=u.length});const y=new M;return y.setAttribute("position",new f(g,3)),y.computeVertexNormals(),y}createStarGeometry(){const e=this.planetRadius*.08,t=e*.4,s=5,n=[];for(let a=0;a<s*2;a++){const l=a/(s*2)*Math.PI*2,r=a%2===0?e:t;n.push(Math.cos(l)*r,Math.sin(l)*r,0)}const o=new M;o.setAttribute("position",new V(n,3));const i=[];for(let a=0;a<s*2-2;a++)i.push(0,a+1,a+2);return i.push(0,s*2-1,1),o.setIndex(i),o.computeVertexNormals(),o}createOrbitalCrosses(){const e=this.params.orbitalCrossCount;for(let t=0;t<e;t++){const s=Math.PI*(3-Math.sqrt(5)),n=this.planetRadius+1.5+t*t*.3+this.rng.random()*.5,o=Math.acos(1-2*(t+this.rng.random())/e),i=t*s+this.rng.random()*.5,a=this.rng.random()*Math.PI*2,l=this.createEnhancedCrossGeometry(),r=new S({uniforms:{time:{value:0},color:{value:new C(this.params.color[0],this.params.color[1]*.8,this.params.color[2]*1.2)},crossIndex:{value:t},divinePulse:{value:this.params.divinePulseIntensity}},vertexShader:`
          uniform float time;
          uniform float crossIndex;
          uniform float divinePulse;
          varying float vBlessing;
          varying vec3 vPosition;
          varying vec3 vNormal;
          
          void main() {
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            
            float blessing = sin(time * 5.0 + crossIndex * 1.5) * 0.4 + 0.6;
            float divineScale = sin(time * 3.0 + crossIndex) * 0.3 + 1.0;
            vBlessing = blessing * divinePulse;
            
            vec3 pos = position * divineScale;
            pos += normal * sin(time * 4.0 + position.x * 10.0) * 0.02;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float time;
          uniform float crossIndex;
          varying float vBlessing;
          varying vec3 vPosition;
          varying vec3 vNormal;
          
          void main() {
            float divine = sin(time * 8.0 + vPosition.x * 5.0) * sin(time * 6.0 + vPosition.y * 3.0) * 0.3 + 0.7;
            float sacred = sin(time * 10.0 + crossIndex * 2.0) * 0.2 + 0.8;
            
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
            float shimmer = sin(time * 15.0 + vPosition.x * 20.0 + vPosition.y * 15.0) * 0.5 + 0.5;
            
            vec3 finalColor = color * divine * sacred;
            finalColor += vec3(1.0, 1.0, 0.8) * fresnel * shimmer * 0.3;
            
            gl_FragColor = vec4(finalColor, vBlessing * (1.0 + fresnel * 0.5));
          }
        `,transparent:!0,blending:x,side:b,depthWrite:!1}),c=new P(l,r),d=t*s,m=t*s*1.618,g=t*s*.618;c.userData={distance:n,inclination:o,longitudeOfAscendingNode:i,initialAngle:a,orbitalSpeed:(.2+t%3*.1)*this.params.orbitalSpeed,crossIndex:t,rotationPhaseX:d,rotationPhaseY:m,rotationPhaseZ:g,rotationSpeedX:(this.rng.random()-.5)*.02,rotationSpeedY:(this.rng.random()-.5)*.03,rotationSpeedZ:(this.rng.random()-.5)*.025},this.orbitalCrosses.push(c),this.group.add(c)}}createCrossSpirals(){const e=this.params.crossSpiralCount;for(let t=0;t<e;t++){const s=12+t*6,n=this.planetRadius+2+t*1.5,o=this.planetRadius*2;for(let i=0;i<s;i++){const a=i/s,l=a*Math.PI*6,r=(a-.5)*o,c=n*(1+Math.sin(a*Math.PI*3)*.2),d=Math.cos(l)*c,m=Math.sin(l)*c,g=r,v=this.createEnhancedCrossGeometry(),y=new S({uniforms:{time:{value:0},color:{value:new C(1,.9,.3)},spiralIndex:{value:t},crossIndex:{value:i}},vertexShader:`
            uniform float time;
            uniform float spiralIndex;
            uniform float crossIndex;
            varying float vHoliness;
            varying vec3 vPosition;
            varying vec3 vNormal;
            
            void main() {
              vPosition = position;
              vNormal = normalize(normalMatrix * normal);
              
              float holiness = sin(time * 7.0 + spiralIndex + crossIndex * 0.5) * 0.5 + 0.5;
              vHoliness = holiness;
              
              vec3 pos = position;
              pos *= (1.0 + holiness * 0.3);
              
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,fragmentShader:`
            uniform vec3 color;
            uniform float time;
            varying float vHoliness;
            varying vec3 vPosition;
            varying vec3 vNormal;
            
            void main() {
              float divine = sin(time * 12.0 + vPosition.x * 8.0 + vPosition.y * 6.0) * 0.4 + 0.6;
              float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
              
              vec3 finalColor = color * divine;
              finalColor += vec3(1.0, 1.0, 1.0) * fresnel * 0.5;
              
              gl_FragColor = vec4(finalColor, vHoliness * (0.8 + fresnel * 0.4));
            }
          `,transparent:!0,blending:x,side:b,depthWrite:!1}),p=new P(v,y);p.position.set(d,g,m),p.lookAt(0,0,0),p.userData={spiralIndex:t,crossIndex:i,angle:l,spiralRadius:n,height:r,rotationSpeed:(this.rng.random()-.5)*.03},this.crossSpirals.push(p),this.group.add(p)}}}createHologramRings(){const e=this.params.hologramRingCount;for(let t=0;t<e;t++){const s=this.planetRadius+1+t*.8,n=new U(s,s+.02,128,1),o=new S({uniforms:{time:{value:0},color:{value:new C(.3+t*.1,.8,1)},ringIndex:{value:t}},vertexShader:`
          uniform float time;
          uniform float ringIndex;
          varying vec2 vUv;
          varying float vHologram;
          
          void main() {
            vUv = uv;
            
            float hologram = sin(time * 8.0 + ringIndex * 2.0) * 0.3 + 0.7;
            vHologram = hologram;
            
            vec3 pos = position;
            pos.z += sin(time * 5.0 + atan(pos.y, pos.x) * 20.0) * 0.1;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float time;
          uniform float ringIndex;
          varying vec2 vUv;
          varying float vHologram;
          
          void main() {
            float dist = length(vUv - 0.5);
            float ring = 1.0 - smoothstep(0.48, 0.5, dist);
            ring *= smoothstep(0.45, 0.47, dist);
            
            float scanlines = sin(dist * 200.0 + time * 10.0) * 0.5 + 0.5;
            float hologram = sin(time * 15.0 + dist * 50.0) * 0.3 + 0.7;
            
            float intensity = ring * scanlines * hologram * vHologram;
            
            gl_FragColor = vec4(color, intensity);
          }
        `,transparent:!0,blending:x,side:b,depthWrite:!1}),i=new P(n,o);i.rotation.x=Math.PI/2+t*.2,i.rotation.y=t*.3,i.userData={ringIndex:t,baseRotationX:i.rotation.x,baseRotationY:i.rotation.y,rotationSpeed:(this.rng.random()-.5)*.01},this.hologramRings.push(i),this.group.add(i)}}createSacredCircles(){const e=this.params.sacredCircleCount;for(let t=0;t<e;t++){const s=this.planetRadius+1.8+t%5*.4,n=.05+t%3*.02,o=new U(s-n,s+n,128,4),i=new S({uniforms:{time:{value:0},color:{value:new C(1,.8,.1)},circleIndex:{value:t},ringRadius:{value:s}},vertexShader:`
          uniform float time;
          uniform float circleIndex;
          uniform float ringRadius;
          varying vec2 vUv;
          varying vec3 vPosition;
          varying float vEnergy;
          varying float vDistance;
          
          void main() {
            vUv = uv;
            vPosition = position;
            vDistance = length(position);
            
            float energy1 = sin(time * 3.0 + circleIndex * 0.8) * 0.2 + 0.8;
            float energy2 = sin(time * 5.0 + atan(position.y, position.x) * 8.0) * 0.3 + 0.7;
            vEnergy = energy1 * energy2;
            
            vec3 pos = position;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float time;
          uniform float circleIndex;
          varying vec2 vUv;
          varying vec3 vPosition;
          varying float vEnergy;
          varying float vDistance;
          
          void main() {
            float dist = length(vUv - 0.5);
            float ring = smoothstep(0.4, 0.42, dist) * (1.0 - smoothstep(0.48, 0.5, dist));
            
            float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
            float segments = sin(angle * 20.0 + time * 2.0 + circleIndex * 3.0) * 0.5 + 0.5;
            segments = step(0.3, segments);
            
            float dataFlow = sin(angle * 15.0 - time * 8.0) * 0.5 + 0.5;
            dataFlow = step(0.7, dataFlow) * 0.8;
            
            float shimmer = sin(time * 12.0 + angle * 25.0 + dist * 30.0) * 0.3 + 0.7;
            
            float intensity = ring * (segments * 0.7 + dataFlow * 0.5 + 0.3) * shimmer * vEnergy;
            
            vec3 finalColor = color;
            finalColor += vec3(0.2, 0.3, 0.0) * sin(circleIndex * 2.0); 
            
            gl_FragColor = vec4(finalColor, intensity);
          }
        `,transparent:!0,blending:x,side:b,depthWrite:!1}),a=new P(o,i),l=(1+Math.sqrt(5))/2,r=t*l%1*Math.PI*2;a.rotation.x=r+t*.3,a.rotation.y=r*1.618+t*.4,a.rotation.z=r*.618+t*.2,a.userData={circleIndex:t,orbitalSpeed:.3+this.rng.random()*.4,baseRotationX:a.rotation.x,baseRotationY:a.rotation.y,baseRotationZ:a.rotation.z,orbitalPhase:r},this.sacredCircles.push(a),this.group.add(a)}}createGoldenParticles(){const e=this.params.goldenParticleCount,t=new Float32Array(e*3),s=new Float32Array(e*3),n=new Float32Array(e);for(let a=0;a<e;a++){const l=this.planetRadius+this.rng.random()*4,r=this.rng.random()*Math.PI,c=this.rng.random()*Math.PI*2,d=this.rng.random()*Math.PI*2,m=this.rng.random()*.5+.2,g=this.rng.random()*.02+.01;this.particleOrbitData.push({distance:l,inclination:r,longitudeOfAscendingNode:c,initialAngle:d,orbitalSpeed:m,fallSpeed:g});const v=this.calculateOrbitalPosition(l,r,c,d);t[a*3]=v.x,t[a*3+1]=v.y+this.rng.random()*2,t[a*3+2]=v.z,s[a*3]=1,s[a*3+1]=.84+this.rng.random()*.16,s[a*3+2]=0+this.rng.random()*.3,n[a]=this.planetRadius*(.01+this.rng.random()*.02)}const o=new M;o.setAttribute("position",new f(t,3)),o.setAttribute("color",new f(s,3)),o.setAttribute("size",new f(n,1));const i=new S({uniforms:{time:{value:0},particleTexture:{value:this.createDivineParticleTexture()}},vertexShader:`
        attribute float size;
        uniform float time;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vColor = color;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float distanceFade = 1.0 / (1.0 + length(mvPosition.xyz) * 0.05);
          
          vAlpha = sin(time * 3.0 + position.x * 0.1) * 0.4 + 0.6;
          vAlpha *= distanceFade;
          
          gl_PointSize = size * (400.0 / -mvPosition.z);
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
      `,transparent:!0,blending:x,depthWrite:!1,vertexColors:!0});this.goldenParticles=new w(o,i),this.group.add(this.goldenParticles)}createDivineParticles(){const e=Math.floor(this.params.goldenParticleCount*.3),t=new Float32Array(e*3),s=new Float32Array(e*3),n=new Float32Array(e);for(let a=0;a<e;a++){const l=this.planetRadius+this.rng.random()*6,r=this.rng.random()*Math.PI,c=this.rng.random()*Math.PI*2,d=this.rng.random()*Math.PI*2,m=this.rng.random()*.8+.3,g=this.rng.random()*Math.PI*2;this.divineParticleOrbitData.push({distance:l,inclination:r,longitudeOfAscendingNode:c,initialAngle:d,orbitalSpeed:m,phase:g});const v=this.calculateOrbitalPosition(l,r,c,d);t[a*3]=v.x,t[a*3+1]=v.y,t[a*3+2]=v.z,s[a*3]=1,s[a*3+1]=1,s[a*3+2]=.8+this.rng.random()*.2,n[a]=this.planetRadius*(.02+this.rng.random()*.03)}const o=new M;o.setAttribute("position",new f(t,3)),o.setAttribute("color",new f(s,3)),o.setAttribute("size",new f(n,1));const i=new S({uniforms:{time:{value:0},particleTexture:{value:this.createDivineStarTexture()}},vertexShader:`
        attribute float size;
        uniform float time;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vColor = color;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float distanceFade = 1.0 / (1.0 + length(mvPosition.xyz) * 0.03);
          
          float pulse = sin(time * 4.0 + position.x * 0.2 + position.y * 0.15) * 0.5 + 0.5;
          vAlpha = pulse * distanceFade;
          
          gl_PointSize = size * (500.0 / -mvPosition.z) * (1.0 + pulse * 0.5);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform sampler2D particleTexture;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vec4 texColor = texture2D(particleTexture, gl_PointCoord);
          vec3 finalColor = vColor * texColor.rgb;
          finalColor += vec3(0.3, 0.3, 0.8) * texColor.a * 0.5;
          gl_FragColor = vec4(finalColor, texColor.a * vAlpha);
        }
      `,transparent:!0,blending:x,depthWrite:!1,vertexColors:!0});this.divineParticles=new w(o,i),this.group.add(this.divineParticles)}createEnergyWaves(){for(let t=0;t<6;t++){const s=this.planetRadius+3+t*1,n=new I(s,64,32),o=new S({uniforms:{time:{value:0},color:{value:new C(.2,.6,1)},waveIndex:{value:t}},vertexShader:`
          uniform float time;
          uniform float waveIndex;
          varying vec3 vNormal;
          varying vec3 vPosition;
          varying float vWave;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            
            float wave = sin(time * 3.0 + waveIndex * 0.5) * 0.5 + 0.5;
            vWave = wave;
            
            vec3 pos = position * (1.0 + wave * 0.1);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float time;
          varying vec3 vNormal;
          varying vec3 vPosition;
          varying float vWave;
          
          void main() {
            float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
            float energy = sin(vPosition.x * 2.0 + time * 2.0) * sin(vPosition.y * 2.0 + time * 1.5) * sin(vPosition.z * 2.0 + time * 3.0);
            energy = energy * 0.3 + 0.7;
            
            float alpha = fresnel * energy * vWave * 0.1;
            gl_FragColor = vec4(color, alpha);
          }
        `,transparent:!0,blending:x,side:F,depthWrite:!1}),i=new P(n,o);i.userData={waveIndex:t,rotationSpeed:(this.rng.random()-.5)*.005},this.energyWaves.push(i),this.group.add(i)}}createHolyLights(){for(let t=0;t<8;t++){const s=t/8*Math.PI*2,n=this.planetRadius+2,o=(this.rng.random()-.5)*this.planetRadius,i=Math.cos(s)*n,a=Math.sin(s)*n,l=o,r=new B(new C(1,.9,.7),1.5,this.planetRadius*8);r.position.set(i,l,a),r.userData={lightIndex:t,baseX:i,baseY:l,baseZ:a,angle:s,distance:n,orbitalSpeed:.1+this.rng.random()*.2},this.holyLights.push(r),this.group.add(r)}}createDivineParticleTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),s=t.createRadialGradient(32,32,0,32,32,32);return s.addColorStop(0,"rgba(255, 215, 0, 1)"),s.addColorStop(.3,"rgba(255, 255, 100, 0.8)"),s.addColorStop(.7,"rgba(255, 200, 50, 0.4)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=s,t.fillRect(0,0,64,64),t.strokeStyle="rgba(255, 255, 255, 0.8)",t.lineWidth=2,t.beginPath(),t.moveTo(32,16),t.lineTo(32,48),t.moveTo(16,32),t.lineTo(48,32),t.stroke(),new _(e)}createDivineStarTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),s=64,n=64,i=t.createRadialGradient(s,n,0,s,n,60);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.2,"rgba(255, 255, 200, 0.9)"),i.addColorStop(.5,"rgba(200, 200, 255, 0.6)"),i.addColorStop(.8,"rgba(100, 150, 255, 0.3)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=i,t.fillRect(0,0,128,128),t.strokeStyle="rgba(255, 255, 255, 0.8)",t.lineWidth=3;for(let r=0;r<8;r++){const c=r/8*Math.PI*2,d=10,m=55;t.beginPath(),t.moveTo(s+Math.cos(c)*d,n+Math.sin(c)*d),t.lineTo(s+Math.cos(c)*m,n+Math.sin(c)*m),t.stroke()}const a=t.createRadialGradient(s,n,0,s,n,20);return a.addColorStop(0,"rgba(255, 255, 255, 1)"),a.addColorStop(.5,"rgba(255, 255, 200, 0.8)"),a.addColorStop(1,"rgba(255, 200, 100, 0.4)"),t.fillStyle=a,t.beginPath(),t.arc(s,n,20,0,Math.PI*2),t.fill(),new _(e)}createBinaryDigitTexture(){const e=document.createElement("canvas");e.width=128,e.height=64;const t=e.getContext("2d");t.fillStyle="rgba(0, 0, 0, 0)",t.fillRect(0,0,128,64),t.fillStyle="rgba(255, 255, 255, 1)",t.font="bold 48px monospace",t.textAlign="center",t.textBaseline="middle",t.fillText("0",32,32),t.fillText("1",96,32),t.shadowColor="#ffffff",t.shadowBlur=8,t.fillStyle="rgba(255, 255, 255, 0.9)",t.fillText("0",32,32),t.fillText("1",96,32);const s=new _(e);return s.needsUpdate=!0,s}createSpaceDistortion(){const e=new I(this.planetRadius+5,64,32),t=new S({uniforms:{time:{value:0},color:{value:new C(this.params.color[0]*.3,this.params.color[1]*.3,this.params.color[2]*.1)}},vertexShader:`
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          
          vec3 pos = position;
          float distortion = sin(pos.x * 1.5 + time * 0.5) * sin(pos.y * 1.5 + time * 0.7) * sin(pos.z * 1.5 + time * 0.3);
          pos += normal * distortion * 0.2;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
          float divine = sin(vPosition.x * 3.0 + time) * sin(vPosition.y * 3.0 + time * 1.3) * sin(vPosition.z * 3.0 + time * 0.7) * 0.5 + 0.5;
          
          float alpha = fresnel * divine * 0.1;
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,blending:x,side:F,depthWrite:!1});this.spaceDistortion=new P(e,t),this.group.add(this.spaceDistortion)}createDivineLight(){this.divineLight=new B(new C(this.params.color[0],this.params.color[1],this.params.color[2]),2,this.planetRadius*10),this.divineLight.position.set(0,this.planetRadius*1.5,0),this.group.add(this.divineLight)}calculateOrbitalPosition(e,t,s,n){const o=e*Math.cos(n),i=e*Math.sin(n),a=0,l=o,r=i*Math.cos(t)-a*Math.sin(t),c=i*Math.sin(t)+a*Math.cos(t),d=l*Math.cos(s)-r*Math.sin(s),m=l*Math.sin(s)+r*Math.cos(s),g=c;return new R(d,m,g)}update(e){const n=Date.now()/1e3-(this.params.cosmicOriginTime||O)+this.cosmicOffset;if(this.digitalGodSphere){const o=this.digitalGodSphere.userData;this.params.planetPosition&&o.planetPosition&&(this.params.planetPosition.equals(o.planetPosition)||(this.digitalGodSphere.position.copy(this.params.planetPosition),o.planetPosition.copy(this.params.planetPosition))),this.digitalGodSphere.rotation.y=o.baseRotationY+n*o.rotationSpeed,this.digitalGodSphere.rotation.x=o.baseRotationX+n*o.rotationSpeed*.3;const i=this.godSphere.material;i.uniforms.time.value=n;const a=Math.sin(n*1.2)*.015+1;this.digitalGodSphere.scale.setScalar(a)}if(this.binaryDigits.forEach(o=>{const i=o.material;i.uniforms.time.value=n;const a=o.geometry.attributes.position.array,l=o.userData.systemIndex;for(let r=0;r<a.length/3;r++){const c=l*Math.floor(this.binaryDigits[0].geometry.attributes.position.count)+r;if(c<this.binaryDigitData.length){const d=this.binaryDigitData[c],m=n*d.orbitalSpeed,g=d.phase,v=this.planetRadius*1.35,y=d.position.clone().normalize(),p=new A;p.makeRotationY(m*.5+g),p.multiply(new A().makeRotationX(m*.3+g*.7));const u=y.clone();u.applyMatrix4(p),u.multiplyScalar(v),u.add(d.velocity.clone().multiplyScalar(Math.sin(m+g))),a[r*3]=u.x,a[r*3+1]=u.y,a[r*3+2]=u.z}}o.geometry.attributes.position.needsUpdate=!0}),this.sacredSymbols.forEach(o=>{const i=o.userData,a=i.initialAngle+n*i.orbitalSpeed*.05,l=this.calculateOrbitalPosition(i.distance,i.inclination,i.longitudeOfAscendingNode,a);o.position.set(l.x,l.y,l.z),o.lookAt(0,0,0),o.rotation.z+=.02;const r=o.material;r.uniforms.time.value=n}),this.orbitalCrosses.forEach(o=>{const i=o.userData,a=i.initialAngle+n*i.orbitalSpeed*.08,l=this.calculateOrbitalPosition(i.distance,i.inclination,i.longitudeOfAscendingNode,a);o.position.set(l.x,l.y,l.z),o.rotation.x=i.rotationPhaseX+n*i.rotationSpeedX,o.rotation.y=i.rotationPhaseY+n*i.rotationSpeedY,o.rotation.z=i.rotationPhaseZ+n*i.rotationSpeedZ;const r=Math.sin(n*3+i.crossIndex)*.3;o.rotation.x+=r,o.rotation.y+=r*1.618,o.rotation.z+=r*.618;const c=o.material;c.uniforms.time.value=n}),this.crossSpirals.forEach(o=>{const i=o.userData,a=n*.5,l=i.angle+a,r=Math.sin(a*2+i.crossIndex*.1)*.3,c=Math.cos(l)*i.spiralRadius*(1+r),d=Math.sin(l)*i.spiralRadius*(1+r),m=i.height+Math.sin(a*3+i.crossIndex)*.5;o.position.set(c,m,d),o.lookAt(0,0,0),o.rotation.z+=i.rotationSpeed;const g=o.material;g.uniforms.time.value=n}),this.hologramRings.forEach(o=>{const i=o.userData;o.rotation.x=i.baseRotationX+n*i.rotationSpeed,o.rotation.y=i.baseRotationY+n*i.rotationSpeed*.7,o.rotation.z+=i.rotationSpeed*.5;const a=o.material;a.uniforms.time.value=n}),this.sacredCircles.forEach(o=>{const i=o.userData,a=n*i.orbitalSpeed*.1+i.orbitalPhase;o.rotation.x=i.baseRotationX,o.rotation.y=i.baseRotationY,o.rotation.z=i.baseRotationZ;const l=new A;l.makeRotationY(a),o.applyMatrix4(l);const r=o.material;r.uniforms.time.value=n}),this.goldenParticles){const o=this.goldenParticles.material;o.uniforms.time.value=n;const i=this.goldenParticles.geometry.attributes.position.array;for(let a=0;a<i.length/3;a++){const l=this.particleOrbitData[a],r=l.initialAngle+n*l.orbitalSpeed*.03,c=this.calculateOrbitalPosition(l.distance,l.inclination,l.longitudeOfAscendingNode,r),d=Math.sin(n*l.fallSpeed+a*.1)*.5;i[a*3]=c.x,i[a*3+1]=c.y+d,i[a*3+2]=c.z}this.goldenParticles.geometry.attributes.position.needsUpdate=!0}if(this.divineParticles){const o=this.divineParticles.material;o.uniforms.time.value=n;const i=this.divineParticles.geometry.attributes.position.array;for(let a=0;a<i.length/3;a++){const l=this.divineParticleOrbitData[a],r=l.initialAngle+n*l.orbitalSpeed*.05,c=this.calculateOrbitalPosition(l.distance,l.inclination,l.longitudeOfAscendingNode,r),d=Math.sin(n*2+l.phase)*1,m=Math.sin(n*1+a*.1)*.3;i[a*3]=c.x+m,i[a*3+1]=c.y+d,i[a*3+2]=c.z+m}this.divineParticles.geometry.attributes.position.needsUpdate=!0}if(this.energyWaves.forEach(o=>{const i=o.userData;o.rotation.x+=i.rotationSpeed,o.rotation.y+=i.rotationSpeed*1.3,o.rotation.z+=i.rotationSpeed*.7;const a=o.material;a.uniforms.time.value=n;const l=Math.sin(n*2+i.waveIndex*.5)*.1+1;o.scale.setScalar(l)}),this.holyLights.forEach(o=>{const i=o.userData,a=i.angle+n*i.orbitalSpeed*.1,l=Math.sin(n*1.5+i.lightIndex)*i.distance*.5,r=Math.cos(a)*i.distance,c=Math.sin(a)*i.distance,d=i.baseY+l;o.position.set(r,d,c);const m=Math.sin(n*4+i.lightIndex*.8)*.8+1.2;o.intensity=m}),this.spaceDistortion){const o=this.spaceDistortion.material;o.uniforms.time.value=n,this.spaceDistortion.rotation.x+=.001,this.spaceDistortion.rotation.y+=.0015}if(this.divineLight){const o=Math.sin(n*2)*.5+1.5;this.divineLight.intensity=o}}getObject3D(){return this.group}addToScene(e,t){t&&this.group.position.copy(t),e.add(this.group)}removeFromScene(e){e.remove(this.group)}dispose(){this.digitalGodSphere&&this.godSphere&&(this.godSphere.geometry.dispose(),this.godSphere.material.dispose()),this.binaryDigits.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.sacredSymbols.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.orbitalCrosses.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.crossSpirals.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.hologramRings.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.sacredCircles.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.goldenParticles&&(this.goldenParticles.geometry.dispose(),this.goldenParticles.material.dispose()),this.divineParticles&&(this.divineParticles.geometry.dispose(),this.divineParticles.material.dispose()),this.energyWaves.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.holyLights.forEach(()=>{}),this.spaceDistortion&&(this.spaceDistortion.geometry.dispose(),this.spaceDistortion.material.dispose()),this.group.clear()}setEnabled(e){this.group.visible=e}updateParams(e){if(Object.assign(this.params,e),e.color){const t=new C(e.color[0],e.color[1],e.color[2]);if(this.godSphere){const s=this.godSphere.material;s.uniforms.color.value=t}this.divineLight&&(this.divineLight.color=t)}}updatePlanetPosition(e){this.params.planetPosition=e,this.digitalGodSphere&&(this.digitalGodSphere.position.copy(e),this.digitalGodSphere.userData.planetPosition&&this.digitalGodSphere.userData.planetPosition.copy(e))}}function j(T,e,t){const n={seed:(t||Math.floor(Math.random()*1e6))+90005,color:e.color||[1,.84,0],cosmicOriginTime:e?.timing?.cosmic_origin_time||e?.cosmicOriginTime||O};return new k(T,n)}export{k as L,j as c};
