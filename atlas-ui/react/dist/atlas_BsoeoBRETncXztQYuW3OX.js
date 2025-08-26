import{D as p,S as y}from"./atlas_CZFakru7GGKiPV4DHwGyu.js";import{G as T,V as _,B as w,a as d,S as N,C as v,D as O,A,L as M}from"./atlas_BjkcO1_mNssSqp05cLhjd.js";const t={RING_COUNT:{min:8,max:150},EXPANSION_SPEED:{min:1.5,max:2.5},WAVE_INTENSITY:{min:.6,max:1},MAX_RADIUS_MULTIPLIER:{min:2.2,max:3.2},GLOW_INTENSITY:{min:1,max:1.6},TIME_SPEED:{min:.8,max:1.3}};class C{group;concentricRings=[];params;rng;planetRadius;cosmicOffset;constructor(i,n={}){this.planetRadius=i;const e=n.seed||Math.floor(Math.random()*1e6);this.rng=new y(e),this.params={color:n.color||[.3,1,.2],ringCount:n.ringCount||Math.floor(this.rng.random()*(t.RING_COUNT.max-t.RING_COUNT.min)+t.RING_COUNT.min),expansionSpeed:n.expansionSpeed||this.rng.random()*(t.EXPANSION_SPEED.max-t.EXPANSION_SPEED.min)+t.EXPANSION_SPEED.min,waveIntensity:n.waveIntensity||this.rng.random()*(t.WAVE_INTENSITY.max-t.WAVE_INTENSITY.min)+t.WAVE_INTENSITY.min,maxRadius:n.maxRadius||i*(this.rng.random()*(t.MAX_RADIUS_MULTIPLIER.max-t.MAX_RADIUS_MULTIPLIER.min)+t.MAX_RADIUS_MULTIPLIER.min),glowIntensity:n.glowIntensity||this.rng.random()*(t.GLOW_INTENSITY.max-t.GLOW_INTENSITY.min)+t.GLOW_INTENSITY.min,cosmicOriginTime:n.cosmicOriginTime||p,timeSpeed:n.timeSpeed||this.rng.random()*(t.TIME_SPEED.max-t.TIME_SPEED.min)+t.TIME_SPEED.min,seed:e},this.cosmicOffset=e%100*.1,this.group=new T,this.createConcentricRings()}createConcentricRings(){const i=this.params.ringCount,n=this.params.maxRadius;for(let e=0;e<i;e++){const s=e/(i-1),r=this.planetRadius*1.05+(n-this.planetRadius*1.05)*Math.pow(s,.8),o=128,l=[];for(let a=0;a<=o;a++){const m=a/o*Math.PI*2,E=Math.cos(m)*r,x=Math.sin(m)*r,R=Math.sin(m*7+e*2)*.5*.02*this.planetRadius;l.push(new _(E,R,x))}const c=new w().setFromPoints(l),u=new Float32Array(o+1),g=new Float32Array(o+1),I=new Float32Array(o+1);for(let a=0;a<=o;a++)u[a]=e*.6+a/o*Math.PI*4,g[a]=(r-this.planetRadius*1.05)/(n-this.planetRadius*1.05),I[a]=(e*7+a*3)%100/100;c.setAttribute("phase",new d(u,1)),c.setAttribute("distance",new d(g,1)),c.setAttribute("randomOffset",new d(I,1));const S=new N({transparent:!0,depthWrite:!1,blending:A,side:O,uniforms:{time:{value:0},color:{value:new v(this.params.color[0],this.params.color[1],this.params.color[2])},expansionSpeed:{value:this.params.expansionSpeed},waveIntensity:{value:this.params.waveIntensity},glowIntensity:{value:this.params.glowIntensity},ringIndex:{value:e},totalRings:{value:i}},vertexShader:`
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
            
            // Múltiples ondas superpuestas para crear patrón complejo
            float wave1 = sin(phase + time * expansionSpeed) * 0.5 + 0.5;
            float wave2 = sin(phase * 2.0 - time * expansionSpeed * 1.3 + ringIndex * 0.8) * 0.3 + 0.7;
            float wave3 = cos(phase * 0.5 + time * expansionSpeed * 0.7 - ringIndex * 1.2) * 0.2 + 0.8;
            
            // Onda de expansión que recorre los anillos
            float expansionWave = sin(distance * 15.0 - time * expansionSpeed * 2.0) * 0.4 + 0.6;
            
            // Pulso que afecta a todos los anillos simultáneamente
            float globalPulse = sin(time * expansionSpeed * 0.5 + ringIndex * 0.3) * 0.2 + 0.8;
            
            // Combinar todas las ondas
            vIntensity = wave1 * wave2 * wave3 * expansionWave * globalPulse * waveIntensity;
            
            // Atenuar según la distancia (más intenso cerca del planeta)
            float distanceFalloff = 1.0 - pow(distance, 1.2);
            vIntensity *= distanceFalloff;
            
            // Variación determinística sutil
            vIntensity *= (0.8 + randomOffset * 0.4);
            
            // Desplazamiento vertical sutil para dar volumen
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
            // Pulso adicional en el fragment shader para más dinamismo
            float fragmentPulse = sin(time * expansionSpeed * 1.5) * 0.1 + 0.9;
            
            // Intensidad final con glow
            float finalIntensity = vIntensity * glowIntensity * fragmentPulse;
            
            // Color con variación sutil
            vec3 finalColor = color;
            
            // Añadir un toque de amarillo-verde en las zonas más intensas (más radioactivo)
            if (finalIntensity > 0.7) {
              finalColor = mix(color, vec3(0.5, 1.0, 0.1), (finalIntensity - 0.7) * 2.0);
            }
            
            // Aplicar intensidad al color
            finalColor *= finalIntensity;
            
            // Transparencia basada en intensidad pero con mínimo para visibilidad
            float alpha = max(finalIntensity * 0.7, finalIntensity * vDistance * 0.3);
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `}),h=new M(c,S);this.concentricRings.push(h),this.group.add(h)}}update(i){const r=(Date.now()/1e3-(this.params.cosmicOriginTime||p)+this.cosmicOffset)*(this.params.timeSpeed||1)%1e4;this.concentricRings.forEach(o=>{const l=o.material;l.uniforms.time.value=r}),this.group.rotation.y=r*.05}getObject3D(){return this.group}addToScene(i,n){n&&this.group.position.copy(n),i.add(this.group)}removeFromScene(i){i.remove(this.group)}dispose(){this.concentricRings.forEach(i=>{i.geometry.dispose(),i.material.dispose()}),this.group.clear()}setEnabled(i){this.group.visible=i}updateParams(i){if(Object.assign(this.params,i),i.color){const n=new v(i.color[0],i.color[1],i.color[2]);this.concentricRings.forEach(e=>{const s=e.material;s.uniforms.color.value=n})}i.expansionSpeed!==void 0&&this.concentricRings.forEach(n=>{const e=n.material;e.uniforms.expansionSpeed.value=i.expansionSpeed}),i.waveIntensity!==void 0&&this.concentricRings.forEach(n=>{const e=n.material;e.uniforms.waveIntensity.value=i.waveIntensity}),i.glowIntensity!==void 0&&this.concentricRings.forEach(n=>{const e=n.material;e.uniforms.glowIntensity.value=i.glowIntensity})}}function b(f,i,n){const s={seed:(n||Math.floor(Math.random()*1e6))+42424,color:i.color||[.3,1,.2],cosmicOriginTime:i?.timing?.cosmic_origin_time||i?.cosmicOriginTime||p};return new C(f,s)}export{C as R,b as c};
