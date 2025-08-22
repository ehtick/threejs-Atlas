import{B as U,a as v,S as X,N as $,P as tt}from"./atlas_C0Xm8D4F9LGKGgzeG7E8_.js";class z{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class et{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:c,ring_inner_radius:o,ring_outer_radius:l,tilt_factor:_,planet_radius:f,shape_seed:d}=e;if(!t||!c){console.warn("No ring data provided");return}const m=[...t.particles,...c.particles],h=m.length,x=new z(d||12345),u=new U,g=new Float32Array(h*3),p=new Float32Array(h*3),S=new Float32Array(h),F=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],b=x.choice(F);for(let i=0;i<h;i++){const r=m[i],w=this.planetRadius/(f||200),V=(d||12345)+i,n=new z(V),M=r.distance*w,A=r.angle,P=M*Math.sin(A),R=Math.asin((_||.2)*.5),N=P*Math.sin(R),T=P*Math.cos(R),s=((l||400)-(o||200))*w*.4,k=n.uniform(-s*.8,s*.8),B=n.uniform(-s*.3,s*.3),D=n.uniform(-.08,.08),I=M+B,O=A+D;g[i*3]=I*Math.cos(O),g[i*3+1]=N+k+this.planetRadius*.15,g[i*3+2]=T+n.uniform(-s*.4,s*.4),r.color[0]/255;const j=(r.distance-(o||200))/((l||400)-(o||200)),E=b.baseGray,G=b.variation,Z=n.uniform(-G,G),q=Math.max(.12,Math.min(.45,E+Z)),W=.8+j*.4,Y=n.uniform(.85,1.15),C=n.uniform(0,1),H=C<.03?n.uniform(1.1,1.3):1,J=q*W*Y*H,y=Math.max(.1,Math.min(.55,J));p[i*3]=y,p[i*3+1]=y,p[i*3+2]=y;const K=.15,L=n.uniform(.3,.7),Q=C<.1?n.uniform(1.05,1.2):1;S[i]=r.size*K*L*Q}u.setAttribute("position",new v(g,3)),u.setAttribute("color",new v(p,3)),u.setAttribute("size",new v(S,1)),this.material=new X({uniforms:{brightness:{value:2.2}},vertexShader:`
        attribute float size;
        varying vec3 vColor;
        varying float vDistance;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDistance = -mvPosition.z;
          
          // Dynamic size based on distance - very small particles
          gl_PointSize = size * (100.0 / vDistance); // Partículas muy pequeñas
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float brightness;
        varying vec3 vColor;
        varying float vDistance;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float distance = length(center);
          
          if (distance > 0.5) discard;
          
          // Create soft circular particle with gentle falloff
          float alpha = (1.0 - distance * 2.0);
          alpha = smoothstep(0.0, 1.0, alpha);
          
          // Add subtle glow effect
          float glow = 1.0 - distance;
          glow = pow(glow, 1.5);
          
          // No sparkle animation - colors should be static
          // Final color with brightness and glow (no time-based changes)
          vec3 finalColor = vColor * brightness * glow;
          
          // Distance-based alpha fade for depth
          float depthAlpha = clamp(200.0 / vDistance, 0.3, 1.0);
          
          gl_FragColor = vec4(finalColor, alpha * depthAlpha);
        }
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:$}),this.ringSystem=new tt(u,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const c=t.rotation_period_seconds||86400,o=t.cosmicOriginTime||Date.now()/1e3,l=t.initialAngleRotation||0,f=Date.now()/1e3-o,d=2*Math.PI/c,m=(l+f*d)%(2*Math.PI);this.ringSystem.rotation.y=m}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function at(a,e){const t={full_ring:a.full_ring,ontop_ring:a.ontop_ring,ring_inner_radius:a.ring_inner_radius,ring_outer_radius:a.ring_outer_radius,tilt_factor:a.tilt_factor,planet_radius:a.planet_radius,shape_seed:a.shape_seed};return new et(e,t)}export{et as R,at as c};
