import{D as p,S as _}from"./atlas_BrNrnv36SE53jZ2fSHjkt.js";import{G as N,V as w,B as O,a as f,S as A,C as v,D as M,A as C,n as D}from"./atlas_BoQAiljVnjMCunoRfsYFA.js";const t={RING_COUNT:{min:16,max:256},EXPANSION_SPEED:{min:1.5,max:5},WAVE_INTENSITY:{min:.6,max:2},MAX_RADIUS_MULTIPLIER:{min:1.5,max:10},GLOW_INTENSITY:{min:.5,max:2},TIME_SPEED:{min:.8,max:1.3}};class P{group;concentricRings=[];params;rng;planetRadius;cosmicOffset;constructor(i,e={}){this.planetRadius=i;const n=e.seed||Math.floor(Math.random()*1e6);this.rng=new _(n),this.params={color:e.color||[.3,1,.2],ringCount:e.ringCount||Math.floor(this.rng.random()*(t.RING_COUNT.max-t.RING_COUNT.min)+t.RING_COUNT.min),expansionSpeed:e.expansionSpeed||this.rng.random()*(t.EXPANSION_SPEED.max-t.EXPANSION_SPEED.min)+t.EXPANSION_SPEED.min,waveIntensity:e.waveIntensity||this.rng.random()*(t.WAVE_INTENSITY.max-t.WAVE_INTENSITY.min)+t.WAVE_INTENSITY.min,maxRadius:e.maxRadius||i*(this.rng.random()*(t.MAX_RADIUS_MULTIPLIER.max-t.MAX_RADIUS_MULTIPLIER.min)+t.MAX_RADIUS_MULTIPLIER.min),glowIntensity:e.glowIntensity||this.rng.random()*(t.GLOW_INTENSITY.max-t.GLOW_INTENSITY.min)+t.GLOW_INTENSITY.min,cosmicOriginTime:e.cosmicOriginTime||p,timeSpeed:e.timeSpeed||this.rng.random()*(t.TIME_SPEED.max-t.TIME_SPEED.min)+t.TIME_SPEED.min,seed:n},this.cosmicOffset=n%100*.1,this.group=new N,this.createConcentricRings()}createConcentricRings(){const i=this.params.ringCount,e=this.params.maxRadius;for(let n=0;n<i;n++){const a=n/(i-1),r=this.planetRadius*1.02+(e-this.planetRadius*1.02)*Math.pow(a,.8),s=128,c=[];for(let o=0;o<=s;o++){const d=o/s*Math.PI*2,E=Math.cos(d)*r,R=Math.sin(d)*r,x=this.planetRadius*.005,y=Math.sin(d*7+n*2)*.5*.01*this.planetRadius,T=x+y;c.push(new w(E,T,R))}const l=new O().setFromPoints(c),I=new Float32Array(s+1),u=new Float32Array(s+1),h=new Float32Array(s+1);for(let o=0;o<=s;o++)I[o]=n*.6+o/s*Math.PI*4,u[o]=(r-this.planetRadius*1.02)/(e-this.planetRadius*1.02),h[o]=(n*7+o*3)%100/100;l.setAttribute("phase",new f(I,1)),l.setAttribute("distance",new f(u,1)),l.setAttribute("randomOffset",new f(h,1));const S=new A({transparent:!0,depthWrite:!1,depthTest:!0,blending:C,side:M,uniforms:{time:{value:0},color:{value:new v(this.params.color[0],this.params.color[1],this.params.color[2])},expansionSpeed:{value:this.params.expansionSpeed},waveIntensity:{value:this.params.waveIntensity},glowIntensity:{value:this.params.glowIntensity},ringIndex:{value:n},totalRings:{value:i}},vertexShader:`
          attribute float phase;
          attribute float distance;
          attribute float randomOffset;
          
          uniform float time;
          uniform float expansionSpeed;
          uniform float waveIntensity;
          uniform float ringIndex;
          uniform float totalRings;
          
          varying float vIntensity;
          varying float vDistance;
          
          void main() {
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
          
          varying float vIntensity;
          varying float vDistance;
          
          void main() {

            float fragmentPulse = sin(time * expansionSpeed * 1.5) * 0.1 + 0.9;

            float finalIntensity = vIntensity * glowIntensity * fragmentPulse;

            vec3 finalColor = color;

            if (finalIntensity > 0.7) {
              finalColor = mix(color, vec3(0.5, 1.0, 0.1), (finalIntensity - 0.7) * 2.0);
            }

            finalColor *= finalIntensity;

            float alpha = max(finalIntensity * 0.7, finalIntensity * vDistance * 0.3);
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `}),m=new D(l,S);m.renderOrder=1e3+n,this.concentricRings.push(m),this.group.add(m)}}update(i){const r=(Date.now()/1e3-(this.params.cosmicOriginTime||p)+this.cosmicOffset)*(this.params.timeSpeed||1)%1e4;this.concentricRings.forEach(s=>{const c=s.material;c.uniforms.time.value=r}),this.group.rotation.y=r*.05}getObject3D(){return this.group}addToScene(i,e){e&&this.group.position.copy(e),i.add(this.group)}removeFromScene(i){i.remove(this.group)}dispose(){this.concentricRings.forEach(i=>{i.geometry.dispose(),i.material.dispose()}),this.group.clear()}setEnabled(i){this.group.visible=i}updateParams(i){if(Object.assign(this.params,i),i.color){const e=new v(i.color[0],i.color[1],i.color[2]);this.concentricRings.forEach(n=>{const a=n.material;a.uniforms.color.value=e})}i.expansionSpeed!==void 0&&this.concentricRings.forEach(e=>{const n=e.material;n.uniforms.expansionSpeed.value=i.expansionSpeed}),i.waveIntensity!==void 0&&this.concentricRings.forEach(e=>{const n=e.material;n.uniforms.waveIntensity.value=i.waveIntensity}),i.glowIntensity!==void 0&&this.concentricRings.forEach(e=>{const n=e.material;n.uniforms.glowIntensity.value=i.glowIntensity})}}function U(g,i,e){const a={seed:(e||Math.floor(Math.random()*1e6))+42424,color:i.color||[.3,1,.2],cosmicOriginTime:i?.timing?.cosmic_origin_time||i?.cosmicOriginTime||p};return new P(g,a)}export{P as R,U as c};
