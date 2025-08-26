import{S as w}from"./atlas_CZFakru7GGKiPV4DHwGyu.js";import{G as R,V as S,B as b,a as c,S as C,C as v,D as A,A as M,L as F}from"./atlas_BjkcO1_mNssSqp05cLhjd.js";class E{group;concentricRings=[];params;time=0;rng;planetRadius;constructor(e,n={}){this.planetRadius=e;const t=n.seed||Math.floor(Math.random()*1e6);this.rng=new w(t),this.params={color:n.color||[.3,1,.2],ringCount:n.ringCount||10,expansionSpeed:n.expansionSpeed||2.5,waveIntensity:n.waveIntensity||.85,maxRadius:n.maxRadius||e*2.8,glowIntensity:n.glowIntensity||1.3,seed:t},this.group=new R,this.createConcentricRings()}createConcentricRings(){const e=this.params.ringCount,n=this.params.maxRadius;for(let t=0;t<e;t++){const r=t/(e-1),l=this.planetRadius*1.05+(n-this.planetRadius*1.05)*Math.pow(r,.8),o=128,d=[];for(let i=0;i<=o;i++){const g=i/o*Math.PI*2,y=Math.cos(g)*l,I=Math.sin(g)*l,x=(this.rng.random()-.5)*.02*this.planetRadius;d.push(new S(y,x,I))}const s=new b().setFromPoints(d),p=new Float32Array(o+1),f=new Float32Array(o+1),u=new Float32Array(o+1);for(let i=0;i<=o;i++)p[i]=t*.6+i/o*Math.PI*4,f[i]=(l-this.planetRadius*1.05)/(n-this.planetRadius*1.05),u[i]=this.rng.random();s.setAttribute("phase",new c(p,1)),s.setAttribute("distance",new c(f,1)),s.setAttribute("randomOffset",new c(u,1));const h=new C({transparent:!0,depthWrite:!1,blending:M,side:A,uniforms:{time:{value:0},color:{value:new v(this.params.color[0],this.params.color[1],this.params.color[2])},expansionSpeed:{value:this.params.expansionSpeed},waveIntensity:{value:this.params.waveIntensity},glowIntensity:{value:this.params.glowIntensity},ringIndex:{value:t},totalRings:{value:e}},vertexShader:`
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
            
            // Añadir variación aleatoria sutil
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
        `}),m=new F(s,h);this.concentricRings.push(m),this.group.add(m)}}update(e){this.time+=e,this.concentricRings.forEach(n=>{const t=n.material;t.uniforms.time.value=this.time}),this.group.rotation.y+=e*.05}getObject3D(){return this.group}addToScene(e,n){n&&this.group.position.copy(n),e.add(this.group)}removeFromScene(e){e.remove(this.group)}dispose(){this.concentricRings.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.group.clear()}setEnabled(e){this.group.visible=e}updateParams(e){if(Object.assign(this.params,e),e.color){const n=new v(e.color[0],e.color[1],e.color[2]);this.concentricRings.forEach(t=>{const r=t.material;r.uniforms.color.value=n})}e.expansionSpeed!==void 0&&this.concentricRings.forEach(n=>{const t=n.material;t.uniforms.expansionSpeed.value=e.expansionSpeed}),e.waveIntensity!==void 0&&this.concentricRings.forEach(n=>{const t=n.material;t.uniforms.waveIntensity.value=e.waveIntensity}),e.glowIntensity!==void 0&&this.concentricRings.forEach(n=>{const t=n.material;t.uniforms.glowIntensity.value=e.glowIntensity})}}function j(a,e){const n={seed:a.seed||Math.floor(Math.random()*1e6),color:a.color||[.3,1,.2],ringCount:a.ring_count||10,expansionSpeed:a.expansion_speed||2.5,waveIntensity:a.wave_intensity||.85,maxRadius:a.max_radius||e*2.8,glowIntensity:a.glow_intensity||1.3};return new E(e,n)}export{E as R,j as c};
