import{D as Q,g as X}from"./atlas_CXe69HDW-Q8b_kGwXRltZ.js";import{B as $,a as v,S as tt,N as it,P as et}from"./atlas_DUxdE5_5iPCKlmI6uaLFO.js";class x{seed;constructor(i){this.seed=i}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(i,t){return i+(t-i)*this.next()}choice(i){return i[Math.floor(this.next()*i.length)]}}class nt{ringSystem;material;params;planetRadius;constructor(i,t){this.planetRadius=i,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(i){const{full_ring:t,ontop_ring:c,ring_inner_radius:o,ring_outer_radius:l,tilt_factor:p,planet_radius:f,shape_seed:d}=i;if(!t||!c)return;const _=[...t.particles,...c.particles],m=_.length,z=new x(d||12345),h=new $,g=new Float32Array(m*3),u=new Float32Array(m*3),S=new Float32Array(m),F=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],b=z.choice(F);for(let e=0;e<m;e++){const r=_[e],M=this.planetRadius/(f||200),V=(d||12345)+e,n=new x(V),w=r.distance*M,R=r.angle,A=w*Math.sin(R),G=Math.asin((p||.2)*.5),I=A*Math.sin(G),T=A*Math.cos(G),a=((l||400)-(o||200))*M*.4,N=n.uniform(-a*.8,a*.8),O=n.uniform(-a*.3,a*.3),k=n.uniform(-.08,.08),B=w+O,E=R+k;g[e*3]=B*Math.cos(E),g[e*3+1]=I+N+this.planetRadius*.15,g[e*3+2]=T+n.uniform(-a*.4,a*.4),r.color[0]/255;const j=(r.distance-(o||200))/((l||400)-(o||200)),D=b.baseGray,P=b.variation,U=n.uniform(-P,P),Z=Math.max(.12,Math.min(.45,D+U)),L=.8+j*.4,W=n.uniform(.85,1.15),C=n.uniform(0,1),Y=C<.03?n.uniform(1.1,1.3):1,q=Z*L*W*Y,y=Math.max(.1,Math.min(.55,q));u[e*3]=y,u[e*3+1]=y,u[e*3+2]=y;const H=.15,J=n.uniform(.3,.7),K=C<.1?n.uniform(1.05,1.2):1;S[e]=r.size*H*J*K}h.setAttribute("position",new v(g,3)),h.setAttribute("color",new v(u,3)),h.setAttribute("size",new v(S,1)),this.material=new tt({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:it}),this.ringSystem=new et(h,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(i,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),i.add(this.ringSystem))}update(i,t){if(!this.ringSystem||!t)return;const c=t.rotation_period_seconds||86400,o=t.cosmicOriginTime||Q,l=t.initialAngleRotation||0,p=X(o),f=2*Math.PI/c,d=(l+p*f)%(2*Math.PI);this.ringSystem.rotation.y=d}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function rt(s,i){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new nt(i,t)}export{nt as R,rt as c};
