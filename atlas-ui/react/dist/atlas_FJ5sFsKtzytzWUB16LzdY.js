import{D as I,S as O}from"./atlas_BrNrnv36SE53jZ2fSHjkt.js";import{G as _,O as N,x as A,C as f,M,B as y,a as p,S as C,A as E,P as w,V as v,n as x}from"./atlas_BoQAiljVnjMCunoRfsYFA.js";const a={SATELLITE_COUNT:{min:1,max:5},SATELLITE_DISTANCE:{min:20,max:40},CITY_LIGHT_COUNT:{min:8,max:24},ORBITAL_SPEED:{min:.2,max:.8},LIGHT_INTENSITY:{min:.6,max:1.2},CONNECTION_LINES:{min:30,max:60}};class D{group;satellites=[];cityLights=[];connectionLines=[];params;rng;planetRadius;cosmicOffset;constructor(t,i={}){this.planetRadius=t;const e=i.seed||Math.floor(Math.random()*1e6);this.rng=new O(e),this.params={color:i.color||[1,1,.8],satelliteCount:i.satelliteCount||Math.floor(this.rng.random()*(a.SATELLITE_COUNT.max-a.SATELLITE_COUNT.min)+a.SATELLITE_COUNT.min),satelliteDistance:i.satelliteDistance||this.rng.random()*(a.SATELLITE_DISTANCE.max-a.SATELLITE_DISTANCE.min)+a.SATELLITE_DISTANCE.min,cityLightCount:i.cityLightCount||Math.floor(this.rng.random()*(a.CITY_LIGHT_COUNT.max-a.CITY_LIGHT_COUNT.min)+a.CITY_LIGHT_COUNT.min),orbitalSpeed:i.orbitalSpeed||this.rng.random()*(a.ORBITAL_SPEED.max-a.ORBITAL_SPEED.min)+a.ORBITAL_SPEED.min,lightIntensity:i.lightIntensity||this.rng.random()*(a.LIGHT_INTENSITY.max-a.LIGHT_INTENSITY.min)+a.LIGHT_INTENSITY.min,connectionLines:i.connectionLines||Math.floor(this.rng.random()*(a.CONNECTION_LINES.max-a.CONNECTION_LINES.min)+a.CONNECTION_LINES.min),cosmicOriginTime:i.cosmicOriginTime||I,seed:e},this.cosmicOffset=e%100*.1,this.group=new _,this.createSatellites(),this.createCityLights(),this.createConnectionLines()}createSatellites(){const t=this.params.satelliteCount,i=this.planetRadius+this.params.satelliteDistance;for(let e=0;e<t;e++){const s=e/t*Math.PI*2+this.rng.random()*.5,n=i+this.rng.random()*10-5,c=(this.rng.random()-.5)*this.planetRadius*.2,r=Math.cos(s)*n,o=Math.sin(s)*n,m=new N(this.planetRadius*.008,0),l=new A({color:new f(this.params.color[0],this.params.color[1],this.params.color[2]),transparent:!0,opacity:.9}),h=new M(m,l);h.position.set(r,c,o),h.userData={originalAngle:s,distance:n,height:c,orbitalSpeed:this.rng.random()*.5+.5},this.satellites.push(h),this.group.add(h)}}createCityLights(){const t=this.params.cityLightCount,i=new Float32Array(t*3),e=new Float32Array(t*3),s=new Float32Array(t);for(let o=0;o<t;o++){const m=this.rng.random()*Math.PI*2,l=this.rng.random()*2-1,h=Math.sqrt(1-l*l),d=this.planetRadius*1.01,u=d*h*Math.cos(m),g=d*l,S=d*h*Math.sin(m);i[o*3]=u,i[o*3+1]=g,i[o*3+2]=S;const T=this.rng.random()*.3+.7;e[o*3]=T,e[o*3+1]=T*.9,e[o*3+2]=T*.6,s[o]=this.rng.random()*3+2}const n=new y;n.setAttribute("position",new p(i,3)),n.setAttribute("color",new p(e,3)),n.setAttribute("size",new p(s,1));const c=new C({uniforms:{time:{value:0},lightIntensity:{value:this.params.lightIntensity}},vertexShader:`
        attribute float size;
        uniform float time;
        uniform float lightIntensity;
        
        varying vec3 vColor;
        varying float vOpacity;
        
        void main() {
          vColor = color;
          
          // Flickering effect
          float flicker = sin(time * 5.0 + position.x * 10.0) * 0.1 + 0.9;
          vOpacity = lightIntensity * flicker;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          if (distanceToCenter > 0.5) discard;
          
          float intensity = 1.0 - distanceToCenter * 2.0;
          intensity = pow(intensity, 2.0);
          
          gl_FragColor = vec4(vColor * intensity, vOpacity * intensity);
        }
      `,transparent:!0,blending:E,vertexColors:!0}),r=new w(n,c);r.renderOrder=1e3,this.cityLights.push(r),this.group.add(r)}createConnectionLines(){const t=this.params.connectionLines;for(let i=0;i<t;i++){const e=[],s=this.rng.random()*Math.PI*2,n=this.rng.random()*2-1,c=Math.sqrt(1-n*n),r=this.planetRadius*1.005;e.push(new v(r*c*Math.cos(s),r*n,r*c*Math.sin(s)));const o=s+(this.rng.random()-.5)*.5,m=this.planetRadius+this.params.satelliteDistance*(.7+this.rng.random()*.6);e.push(new v(m*Math.cos(o),(this.rng.random()-.5)*this.planetRadius*.1,m*Math.sin(o)));const l=new y().setFromPoints(e),h=new Float32Array(e.length);for(let g=0;g<e.length;g++)h[g]=i*.3+g*.5;l.setAttribute("phase",new p(h,1));const d=new C({uniforms:{time:{value:0},color:{value:new f(this.params.color[0],this.params.color[1],this.params.color[2])},lightIntensity:{value:this.params.lightIntensity}},vertexShader:`
          attribute float phase;
          uniform float time;
          uniform float lightIntensity;
          
          varying float vIntensity;
          
          void main() {
            float wave = sin(phase + time * 2.0) * 0.5 + 0.5;
            vIntensity = wave * lightIntensity;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 color;
          varying float vIntensity;
          
          void main() {
            gl_FragColor = vec4(color * vIntensity, vIntensity * 0.4);
          }
        `,transparent:!0,blending:E}),u=new x(l,d);u.renderOrder=999,this.connectionLines.push(u),this.group.add(u)}}update(t){const s=(Date.now()/1e3-(this.params.cosmicOriginTime||I)+this.cosmicOffset)*(this.params.orbitalSpeed||1);this.satellites.forEach((n,c)=>{const r=n.userData,o=r.originalAngle+s*r.orbitalSpeed*.1,m=Math.cos(o)*r.distance,l=Math.sin(o)*r.distance;n.position.set(m,r.height,l),n.rotation.y=o}),this.cityLights.forEach(n=>{const c=n.material;c.uniforms.time.value=s}),this.connectionLines.forEach(n=>{const c=n.material;c.uniforms.time.value=s})}getObject3D(){return this.group}addToScene(t,i){i&&this.group.position.copy(i),t.add(this.group)}removeFromScene(t){t.remove(this.group)}dispose(){this.satellites.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.cityLights.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.connectionLines.forEach(t=>{t.geometry.dispose(),t.material.dispose()}),this.group.clear()}setEnabled(t){this.group.visible=t}updateParams(t){if(Object.assign(this.params,t),t.color){const i=new f(t.color[0],t.color[1],t.color[2]);this.satellites.forEach(e=>{e.material.color=i}),this.connectionLines.forEach(e=>{const s=e.material;s.uniforms.color.value=i})}t.lightIntensity!==void 0&&(this.cityLights.forEach(i=>{const e=i.material;e.uniforms.lightIntensity.value=t.lightIntensity}),this.connectionLines.forEach(i=>{const e=i.material;e.uniforms.lightIntensity.value=t.lightIntensity}))}}function P(L,t,i){const s={seed:(i||Math.floor(Math.random()*1e6))+90001,color:t.color||[1,1,.8],cosmicOriginTime:t?.timing?.cosmic_origin_time||t?.cosmicOriginTime||I};return new D(L,s)}export{D as L,P as c};
