import{D as p,S as b}from"./atlas_CtOhIAiNHzSpXytHIyKwk.js";import{G as D,V as U,n as P,T as L,a as u,S as G,C as S,D as F,A as W,M as X}from"./atlas_pGQiCQeTD5l6dMUXRRcYJ.js";const i={RING_COUNT:{min:16,max:256},EXPANSION_SPEED:{min:1.5,max:5},WAVE_INTENSITY:{min:.6,max:2},MAX_RADIUS_MULTIPLIER:{min:1.5,max:10},GLOW_INTENSITY:{min:.5,max:2},TIME_SPEED:{min:.8,max:1.3}};class Y{group;concentricRings=[];params;rng;planetRadius;cosmicOffset;constructor(t,e={}){this.planetRadius=t;const n=e.seed||Math.floor(Math.random()*1e6);this.rng=new b(n),this.params={color:e.color||[.3,1,.2],ringCount:e.ringCount||Math.floor(this.rng.random()*(i.RING_COUNT.max-i.RING_COUNT.min)+i.RING_COUNT.min),expansionSpeed:e.expansionSpeed||this.rng.random()*(i.EXPANSION_SPEED.max-i.EXPANSION_SPEED.min)+i.EXPANSION_SPEED.min,waveIntensity:e.waveIntensity||this.rng.random()*(i.WAVE_INTENSITY.max-i.WAVE_INTENSITY.min)+i.WAVE_INTENSITY.min,maxRadius:e.maxRadius||t*(this.rng.random()*(i.MAX_RADIUS_MULTIPLIER.max-i.MAX_RADIUS_MULTIPLIER.min)+i.MAX_RADIUS_MULTIPLIER.min),glowIntensity:e.glowIntensity||this.rng.random()*(i.GLOW_INTENSITY.max-i.GLOW_INTENSITY.min)+i.GLOW_INTENSITY.min,cosmicOriginTime:e.cosmicOriginTime||p,timeSpeed:e.timeSpeed||this.rng.random()*(i.TIME_SPEED.max-i.TIME_SPEED.min)+i.TIME_SPEED.min,seed:n},this.cosmicOffset=n%100*.1,this.group=new D,this.createConcentricRings()}createConcentricRings(){const t=this.params.ringCount,e=this.params.maxRadius;for(let n=0;n<t;n++){const s=n/(t-1),a=this.planetRadius*1.02+(e-this.planetRadius*1.02)*Math.pow(s,.8),c=64,m=[];for(let o=0;o<c;o++){const l=o/c*Math.PI*2,N=Math.cos(l)*a,O=Math.sin(l)*a,M=this.planetRadius*.005,A=Math.sin(l*7+n*2)*.5*.01*this.planetRadius,C=M+A;m.push(new U(N,C,O))}const E=new P(m,!0),R=this.planetRadius*.006,y=4,x=c,r=new L(E,x,R,y,!0),T=r.attributes.position.array,_=r.attributes.uv.array,d=T.length/3,h=new Float32Array(d),I=new Float32Array(d),v=new Float32Array(d);for(let o=0;o<d;o++){const l=_[o*2];h[o]=n*.6+l*Math.PI*4,I[o]=(a-this.planetRadius*1.02)/(e-this.planetRadius*1.02),v[o]=(n*7+o*3)%100/100}r.setAttribute("phase",new u(h,1)),r.setAttribute("distance",new u(I,1)),r.setAttribute("randomOffset",new u(v,1));const w=new G({transparent:!0,depthWrite:!1,depthTest:!0,blending:W,side:F,uniforms:{time:{value:0},color:{value:new S(this.params.color[0],this.params.color[1],this.params.color[2])},expansionSpeed:{value:this.params.expansionSpeed},waveIntensity:{value:this.params.waveIntensity},glowIntensity:{value:this.params.glowIntensity},ringIndex:{value:n},totalRings:{value:t}},vertexShader:`
          attribute float phase;
          attribute float distance;
          attribute float randomOffset;
          
          uniform float time;
          uniform float expansionSpeed;
          uniform float waveIntensity;
          uniform float ringIndex;
          uniform float totalRings;
          
          varying vec2 vUv;
          varying float vIntensity;
          varying float vDistance;
          
          void main() {
            vUv = uv;
            vDistance = distance;

            float wave1 = sin(phase + time * expansionSpeed) * 0.5 + 0.5;
            float wave2 = sin(phase * 2.0 - time * expansionSpeed * 1.3 + ringIndex * 0.8) * 0.3 + 0.7;
            float wave3 = cos(phase * 0.5 + time * expansionSpeed * 0.7 - ringIndex * 1.2) * 0.2 + 0.8;

            float expansionWave = sin(distance * 15.0 - time * expansionSpeed * 2.0) * 0.4 + 0.6;

            float globalPulse = sin(time * expansionSpeed * 0.5 + ringIndex * 0.3) * 0.2 + 0.8;

            vIntensity = wave1 * wave2 * wave3 * expansionWave * globalPulse * waveIntensity;

            float distanceFalloff = 1.0 - pow(distance, 1.2);
            vIntensity *= distanceFalloff;

            vIntensity *= (0.8 + randomOffset * 0.4);

            vec3 pos = position;
            pos.y += sin(phase + time * expansionSpeed * 0.5) * 2.0 * (1.0 - distance);
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          uniform float glowIntensity;
          uniform float time;
          uniform float expansionSpeed;
          
          varying vec2 vUv;
          varying float vIntensity;
          varying float vDistance;
          
          void main() {
            float centerDistance = abs(vUv.y - 0.5) * 2.0;
            float tubeFalloff = 1.0 - smoothstep(0.0, 1.0, centerDistance);

            float fragmentPulse = sin(time * expansionSpeed * 1.5) * 0.1 + 0.9;

            float finalIntensity = vIntensity * glowIntensity * fragmentPulse * tubeFalloff;

            vec3 finalColor = color;

            if (finalIntensity > 0.7) {
              finalColor = mix(color, vec3(0.5, 1.0, 0.1), (finalIntensity - 0.7) * 2.0);
            }

            finalColor *= finalIntensity;

            float alpha = max(finalIntensity * 0.7, finalIntensity * vDistance * 0.3);
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `}),f=new X(r,w);f.renderOrder=1e3+n,this.concentricRings.push(f),this.group.add(f)}}update(t){const a=(Date.now()/1e3-(this.params.cosmicOriginTime||p)+this.cosmicOffset)*(this.params.timeSpeed||1)%1e4;this.concentricRings.forEach(c=>{const m=c.material;m.uniforms.time.value=a}),this.group.rotation.y=a*.05}getObject3D(){return this.group}addToScene(t,e){e&&this.group.position.copy(e),t.add(this.group)}removeFromScene(t){t.remove(this.group)}dispose(){this.concentricRings.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.group.clear()}setEnabled(t){this.group.visible=t}updateParams(t){if(Object.assign(this.params,t),t.color){const e=new S(t.color[0],t.color[1],t.color[2]);this.concentricRings.forEach(n=>{const s=n.material;s.uniforms.color.value=e})}t.expansionSpeed!==void 0&&this.concentricRings.forEach(e=>{const n=e.material;n.uniforms.expansionSpeed.value=t.expansionSpeed}),t.waveIntensity!==void 0&&this.concentricRings.forEach(e=>{const n=e.material;n.uniforms.waveIntensity.value=t.waveIntensity}),t.glowIntensity!==void 0&&this.concentricRings.forEach(e=>{const n=e.material;n.uniforms.glowIntensity.value=t.glowIntensity})}}function B(g,t,e){const s={seed:(e||Math.floor(Math.random()*1e6))+42424,color:t.color||[.3,1,.2],cosmicOriginTime:t?.timing?.cosmic_origin_time||t?.cosmicOriginTime||p};return new Y(g,s)}export{Y as R,B as c};
