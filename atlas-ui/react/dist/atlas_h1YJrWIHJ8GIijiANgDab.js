import{D as z,g as D}from"./atlas_D5TkNrZ-UIh1OV1m_7qMi.js";import{B as A,a as S,S as I,N as W,V as w,P as E,G as F,g as O,Z as b}from"./atlas_Bd-08EnGHvuA4jxvJ1T-8.js";class C{seed;constructor(t){this.seed=t}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(t,i){return t+(i-t)*this.next()}choice(t){return t[Math.floor(this.next()*t.length)]}}class B{ringSystem;concentricLines;material;linesMaterial;params;planetRadius;actualInnerRadius=0;actualOuterRadius=0;scale=1;tiltAngle=0;constructor(t,i){this.planetRadius=t,this.params=i,this.createRingSystemFromAPI(i),this.createConcentricLines()}weightedChoice(t,i,e){const n=e.uniform(0,1);let s=0;for(let r=0;r<i.length;r++)if(s+=i[r],n<s)return t[r];return t[t.length-1]}createRingSystemFromAPI(t){const{inner_radius:i,outer_radius:e,tilt_factor:n,planet_radius:s,shape_seed:r,num_particles_per_band:p,bands:l}=t;if(!l||l.length===0)return;this.scale=this.planetRadius/(s||200),this.tiltAngle=Math.asin((n||.2)*.5),this.actualInnerRadius=(i||200)*this.scale,this.actualOuterRadius=(e||400)*this.scale;const a=new C(r||12345),v=Math.floor((p||800)*1.5),y=l.length*v*2,u=new A,c=new Float32Array(y*3),d=new Float32Array(y*3),P=new Float32Array(y),M=[.4,.3,.2,.1],L=[.5,1,1.5,2];let o=0;for(const _ of l){for(let R=0;R<v;R++){const m=a.uniform(Math.PI,2*Math.PI),f=a.uniform(_.inner,_.outer)*this.scale,g=a.uniform(20,50)/255,x=this.weightedChoice(L,M,a);c[o*3]=f*Math.cos(m),c[o*3+1]=f*Math.sin(this.tiltAngle)*Math.sin(m)-this.planetRadius*.07,c[o*3+2]=f*Math.cos(this.tiltAngle)*Math.sin(m),d[o*3]=g,d[o*3+1]=g,d[o*3+2]=g,P[o]=x*.25,o++}for(let R=0;R<v;R++){const m=a.uniform(0,Math.PI),f=a.uniform(_.inner,_.outer)*this.scale,g=a.uniform(20,50)/255,x=this.weightedChoice(L,M,a);c[o*3]=f*Math.cos(m),c[o*3+1]=f*Math.sin(this.tiltAngle)*Math.sin(m)-this.planetRadius*.07,c[o*3+2]=f*Math.cos(this.tiltAngle)*Math.sin(m),d[o*3]=g,d[o*3+1]=g,d[o*3+2]=g,P[o]=x*.25,o++}}u.setAttribute("position",new S(c,3)),u.setAttribute("color",new S(d,3)),u.setAttribute("size",new S(P,1)),this.material=new I({uniforms:{brightness:{value:4.4},lightDirection:{value:new w(1,0,0)},ambientLight:{value:.15},planetRadius:{value:this.planetRadius},planetWorldPos:{value:new w(0,0,0)}},vertexShader:`
        attribute float size;
        varying vec3 vColor;
        varying float vDistance;
        varying vec3 vWorldPosition;

        void main() {
          vColor = color;

          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDistance = -mvPosition.z;

          gl_PointSize = size * (120.0 / vDistance);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float brightness;
        uniform vec3 lightDirection;
        uniform float ambientLight;
        uniform float planetRadius;
        uniform vec3 planetWorldPos;
        varying vec3 vColor;
        varying float vDistance;
        varying vec3 vWorldPosition;

        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);

          if (dist > 0.5) discard;

          float alpha = (1.0 - dist * 2.0);
          alpha = smoothstep(0.0, 1.0, alpha);

          float glow = 1.0 - dist;
          glow = pow(glow, 1.5);

          vec3 toLight = normalize(lightDirection);

          vec3 relPos = vWorldPosition - planetWorldPos;

          float behindPlanet = -dot(relPos, toLight);

          vec3 onAxis = -toLight * behindPlanet;
          float distFromAxis = length(relPos - onAxis);

          float isBehind = step(0.0, behindPlanet);

          float coneExpansion = 0.4;
          float shadowRadius = planetRadius + behindPlanet * coneExpansion;

          float gradientStart = shadowRadius * 1.5;
          float gradientEnd = shadowRadius;

          float shadow = smoothstep(gradientEnd, gradientStart, distFromAxis);

          shadow = mix(1.0, shadow, isBehind);

          float ambientInShadow = 0.35;
          float totalLight = mix(ambientInShadow, 1.0, shadow);

          vec3 finalColor = vColor * brightness * glow * totalLight;

          float depthAlpha = clamp(200.0 / vDistance, 0.3, 1.0);

          gl_FragColor = vec4(finalColor, alpha * depthAlpha);
        }
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:W}),this.ringSystem=new E(u,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}createConcentricLines(){if(this.actualInnerRadius===0||this.actualOuterRadius===0)return;this.concentricLines=new F;const t=this.params.shape_seed||12345,i=25,e=128;this.linesMaterial=new I({uniforms:{brightness:{value:3},intensity:{value:1},lightDirection:{value:new w(1,0,0)},planetRadius:{value:this.planetRadius},planetWorldPos:{value:new w(0,0,0)}},vertexShader:`
        varying vec3 vWorldPosition;

        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float brightness;
        uniform float intensity;
        uniform vec3 lightDirection;
        uniform float planetRadius;
        uniform vec3 planetWorldPos;
        varying vec3 vWorldPosition;

        void main() {
          vec3 toLight = normalize(lightDirection);

          vec3 relPos = vWorldPosition - planetWorldPos;
          float behindPlanet = -dot(relPos, toLight);
          vec3 onAxis = -toLight * behindPlanet;
          float distFromAxis = length(relPos - onAxis);
          float isBehind = step(0.0, behindPlanet);

          float coneExpansion = 0.4;
          float shadowRadius = planetRadius + behindPlanet * coneExpansion;
          float gradientStart = shadowRadius * 1.5;
          float gradientEnd = shadowRadius;

          float shadow = smoothstep(gradientEnd, gradientStart, distFromAxis);
          shadow = mix(1.0, shadow, isBehind);

          float ambientInShadow = 0.35;
          float totalLight = mix(ambientInShadow, 1.0, shadow);

          vec3 lineColor = vec3(0.2) * intensity * brightness * totalLight;
          gl_FragColor = vec4(lineColor, 0.6 * intensity);
        }
      `,transparent:!0,depthWrite:!1,blending:W});for(let n=0;n<i;n++){const s=new C(t+n*31);if(s.uniform(0,1)<.1)continue;const r=n/(i-1),p=this.actualInnerRadius+(this.actualOuterRadius-this.actualInnerRadius)*r,l=[];for(let u=0;u<=e;u++){const c=u/e*Math.PI*2,d=p*Math.cos(c),P=p*Math.sin(c),M=P*Math.sin(this.tiltAngle)-this.planetRadius*.07,L=P*Math.cos(this.tiltAngle);l.push(d,M,L)}const a=new A;a.setAttribute("position",new O(l,3));const v=this.linesMaterial.clone();v.uniforms.intensity={value:s.uniform(.4,1)};const y=new b(a,v);this.concentricLines.add(y)}}addToScene(t,i){if(!this.ringSystem)return;const e=i||new w(0,0,0);this.ringSystem.position.copy(e),this.material?.uniforms.planetWorldPos&&this.material.uniforms.planetWorldPos.value.copy(e),this.concentricLines&&(this.concentricLines.position.copy(e),this.concentricLines.children.forEach(n=>{if(n instanceof b){const s=n.material;s.uniforms?.planetWorldPos&&s.uniforms.planetWorldPos.value.copy(e)}})),t.add(this.ringSystem),this.concentricLines&&t.add(this.concentricLines)}update(t,i){if(!this.ringSystem||!i)return;const e=i.rotation_period_seconds||86400,n=i.cosmicOriginTime||z,s=i.initialAngleRotation||0,r=D(n),p=2*Math.PI/e,l=(s+r*p)%(2*Math.PI);this.ringSystem.rotation.y=l,this.concentricLines&&(this.concentricLines.rotation.y=l)}getObject3D(){return this.ringSystem}updateLightDirection(t){const i=t.clone().normalize();this.material?.uniforms.lightDirection&&this.material.uniforms.lightDirection.value.copy(i),this.concentricLines&&this.concentricLines.children.forEach(e=>{if(e instanceof b){const n=e.material;n.uniforms?.lightDirection&&n.uniforms.lightDirection.value.copy(i)}})}updateFromThreeLight(t){const i=new w().subVectors(t.position,t.target.position).normalize();this.material?.uniforms.lightDirection&&this.material.uniforms.lightDirection.value.copy(i),this.concentricLines&&this.concentricLines.children.forEach(e=>{if(e instanceof b){const n=e.material;n.uniforms?.lightDirection&&n.uniforms.lightDirection.value.copy(i)}})}dispose(){this.material&&this.material.dispose(),this.linesMaterial&&this.linesMaterial.dispose(),this.concentricLines&&this.concentricLines.children.forEach(t=>{t instanceof b&&(t.geometry.dispose(),t.material.dispose())})}}function G(h,t){const i={inner_radius:h.inner_radius,outer_radius:h.outer_radius,tilt_factor:h.tilt_factor,planet_radius:h.planet_radius,shape_seed:h.shape_seed,num_particles_per_band:h.num_particles_per_band,bands:h.bands};return new B(t,i)}export{B as R,G as c};
