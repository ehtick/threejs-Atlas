import{D as ot,g as st}from"./atlas_D5TkNrZ-UIh1OV1m_7qMi.js";import{B as F,a as x,S as E,N as V,V as y,P as at,G as rt,g as lt,Z as R}from"./atlas_Bd-08EnGHvuA4jxvJ1T-8.js";class L{seed;constructor(t){this.seed=t}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(t,i){return t+(i-t)*this.next()}choice(t){return t[Math.floor(this.next()*t.length)]}}class ct{ringSystem;concentricLines;material;linesMaterial;params;planetRadius;actualInnerRadius=0;actualOuterRadius=0;scale=1;tiltAngle=0;constructor(t,i){this.planetRadius=t,this.params=i,this.createRingSystemFromAPI(i),this.createConcentricLines()}createRingSystemFromAPI(t){const{full_ring:i,ontop_ring:e,ring_inner_radius:n,ring_outer_radius:s,tilt_factor:u,planet_radius:m,shape_seed:l}=t;if(!i||!e)return;const f=[...i.particles,...e.particles],c=f.length;this.scale=this.planetRadius/(m||200),this.tiltAngle=Math.asin((u||.2)*.5);let P=1/0,d=0;for(const o of f)o.distance<P&&(P=o.distance),o.distance>d&&(d=o.distance);this.actualInnerRadius=P*this.scale,this.actualOuterRadius=d*this.scale;const b=new L(l||12345),g=new F,h=new Float32Array(c*3),p=new Float32Array(c*3),S=new Float32Array(c),O=[{baseGray:.12,variation:.03,name:"dark"},{baseGray:.18,variation:.04,name:"medium"},{baseGray:.22,variation:.05,name:"light"},{baseGray:.16,variation:.04,name:"mixed"}],M=b.choice(O);for(let o=0;o<c;o++){const w=f[o],A=this.scale,B=(l||12345)+o,a=new L(B),D=w.distance*A,W=w.angle,z=D*Math.sin(W),C=Math.asin((u||.2)*.5),T=z*Math.sin(C),N=z*Math.cos(C),v=((s||400)-(n||200))*A*.4,k=a.uniform(-v*.8,v*.8),j=a.uniform(-v*.3,v*.3),Z=a.uniform(-.08,.08),U=D+j,Y=W+Z;h[o*3]=U*Math.cos(Y),h[o*3+1]=T+k+this.planetRadius*.15,h[o*3+2]=N+a.uniform(-v*.4,v*.4),w.color[0]/255;const q=(w.distance-(n||200))/((s||400)-(n||200)),H=M.baseGray,I=M.variation,J=a.uniform(-I,I),K=Math.max(.08,Math.min(.3,H+J)),Q=.8+q*.4,X=a.uniform(.85,1.15),G=a.uniform(0,1),$=G<.03?a.uniform(1.1,1.3):1,tt=K*Q*X*$,_=Math.max(.06,Math.min(.35,tt));p[o*3]=_,p[o*3+1]=_,p[o*3+2]=_;const it=.25,nt=a.uniform(.3,.8),et=G<.1?a.uniform(1.05,1.2):1;S[o]=w.size*it*nt*et}g.setAttribute("position",new x(h,3)),g.setAttribute("color",new x(p,3)),g.setAttribute("size",new x(S,1)),this.material=new E({uniforms:{brightness:{value:4.4},lightDirection:{value:new y(1,0,0)},ambientLight:{value:.15},planetRadius:{value:this.planetRadius},planetWorldPos:{value:new y(0,0,0)}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:V}),this.ringSystem=new at(g,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}createConcentricLines(){if(this.actualInnerRadius===0||this.actualOuterRadius===0)return;this.concentricLines=new rt;const t=this.params.shape_seed||12345,i=25,e=128;this.linesMaterial=new E({uniforms:{brightness:{value:3},intensity:{value:1},lightDirection:{value:new y(1,0,0)},planetRadius:{value:this.planetRadius},planetWorldPos:{value:new y(0,0,0)}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:V});for(let n=0;n<i;n++){const s=new L(t+n*31);if(s.uniform(0,1)<.1)continue;const u=n/(i-1),m=this.actualInnerRadius+(this.actualOuterRadius-this.actualInnerRadius)*u,l=[];for(let d=0;d<=e;d++){const b=d/e*Math.PI*2,g=m*Math.cos(b),h=m*Math.sin(b),p=h*Math.sin(this.tiltAngle)-this.planetRadius*.07,S=h*Math.cos(this.tiltAngle);l.push(g,p,S)}const f=new F;f.setAttribute("position",new lt(l,3));const c=this.linesMaterial.clone();c.uniforms.intensity={value:s.uniform(.4,1)};const P=new R(f,c);this.concentricLines.add(P)}}addToScene(t,i){if(!this.ringSystem)return;const e=i||new y(0,0,0);this.ringSystem.position.copy(e),this.material?.uniforms.planetWorldPos&&this.material.uniforms.planetWorldPos.value.copy(e),this.concentricLines&&(this.concentricLines.position.copy(e),this.concentricLines.children.forEach(n=>{if(n instanceof R){const s=n.material;s.uniforms?.planetWorldPos&&s.uniforms.planetWorldPos.value.copy(e)}})),t.add(this.ringSystem),this.concentricLines&&t.add(this.concentricLines)}update(t,i){if(!this.ringSystem||!i)return;const e=i.rotation_period_seconds||86400,n=i.cosmicOriginTime||ot,s=i.initialAngleRotation||0,u=st(n),m=2*Math.PI/e,l=(s+u*m)%(2*Math.PI);this.ringSystem.rotation.y=l,this.concentricLines&&(this.concentricLines.rotation.y=l)}getObject3D(){return this.ringSystem}updateLightDirection(t){const i=t.clone().normalize();this.material?.uniforms.lightDirection&&this.material.uniforms.lightDirection.value.copy(i),this.concentricLines&&this.concentricLines.children.forEach(e=>{if(e instanceof R){const n=e.material;n.uniforms?.lightDirection&&n.uniforms.lightDirection.value.copy(i)}})}updateFromThreeLight(t){const i=new y().subVectors(t.position,t.target.position).normalize();this.material?.uniforms.lightDirection&&this.material.uniforms.lightDirection.value.copy(i),this.concentricLines&&this.concentricLines.children.forEach(e=>{if(e instanceof R){const n=e.material;n.uniforms?.lightDirection&&n.uniforms.lightDirection.value.copy(i)}})}dispose(){this.material&&this.material.dispose(),this.linesMaterial&&this.linesMaterial.dispose(),this.concentricLines&&this.concentricLines.children.forEach(t=>{t instanceof R&&(t.geometry.dispose(),t.material.dispose())})}}function mt(r,t){const i={full_ring:r.full_ring,ontop_ring:r.ontop_ring,ring_inner_radius:r.ring_inner_radius,ring_outer_radius:r.ring_outer_radius,tilt_factor:r.tilt_factor,planet_radius:r.planet_radius,shape_seed:r.shape_seed};return new ct(t,i)}export{ct as R,mt as c};
