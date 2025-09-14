import{B as U,a as v,S as X,N as $,P as tt}from"./atlas_Dr7FhitegIaVfnn-NnCom.js";class x{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class et{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:c,ring_inner_radius:o,ring_outer_radius:l,tilt_factor:_,planet_radius:f,shape_seed:d}=e;if(!t||!c)return;const m=[...t.particles,...c.particles],h=m.length,z=new x(d||12345),u=new U,g=new Float32Array(h*3),p=new Float32Array(h*3),S=new Float32Array(h),F=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],w=z.choice(F);for(let i=0;i<h;i++){const r=m[i],b=this.planetRadius/(f||200),V=(d||12345)+i,n=new x(V),M=r.distance*b,R=r.angle,A=M*Math.sin(R),G=Math.asin((_||.2)*.5),T=A*Math.sin(G),k=A*Math.cos(G),a=((l||400)-(o||200))*b*.4,N=n.uniform(-a*.8,a*.8),B=n.uniform(-a*.3,a*.3),I=n.uniform(-.08,.08),O=M+B,j=R+I;g[i*3]=O*Math.cos(j),g[i*3+1]=T+N+this.planetRadius*.15,g[i*3+2]=k+n.uniform(-a*.4,a*.4),r.color[0]/255;const D=(r.distance-(o||200))/((l||400)-(o||200)),E=w.baseGray,P=w.variation,Z=n.uniform(-P,P),W=Math.max(.12,Math.min(.45,E+Z)),Y=.8+D*.4,q=n.uniform(.85,1.15),C=n.uniform(0,1),H=C<.03?n.uniform(1.1,1.3):1,J=W*Y*q*H,y=Math.max(.1,Math.min(.55,J));p[i*3]=y,p[i*3+1]=y,p[i*3+2]=y;const K=.15,L=n.uniform(.3,.7),Q=C<.1?n.uniform(1.05,1.2):1;S[i]=r.size*K*L*Q}u.setAttribute("position",new v(g,3)),u.setAttribute("color",new v(p,3)),u.setAttribute("size",new v(S,1)),this.material=new X({uniforms:{brightness:{value:2.2}},vertexShader:`
        attribute float size;
        varying vec3 vColor;
        varying float vDistance;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDistance = -mvPosition.z;
          
          gl_PointSize = size * (100.0 / vDistance);
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
          
          float alpha = (1.0 - distance * 2.0);
          alpha = smoothstep(0.0, 1.0, alpha);
          
          float glow = 1.0 - distance;
          glow = pow(glow, 1.5);
          
          vec3 finalColor = vColor * brightness * glow;
          
          float depthAlpha = clamp(200.0 / vDistance, 0.3, 1.0);
          
          gl_FragColor = vec4(finalColor, alpha * depthAlpha);
        }
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:$}),this.ringSystem=new tt(u,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const c=t.rotation_period_seconds||86400,o=t.cosmicOriginTime||Date.now()/1e3,l=t.initialAngleRotation||0,f=Date.now()/1e3-o,d=2*Math.PI/c,m=(l+f*d)%(2*Math.PI);this.ringSystem.rotation.y=m}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function st(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new et(e,t)}export{et as R,st as c};
