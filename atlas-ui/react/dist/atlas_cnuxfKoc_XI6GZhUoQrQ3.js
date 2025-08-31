import{S as u}from"./atlas_CNCSKQVOotd-zT0rn4WM1.js";import{B as g,P as y,a,C as r,S as v,A as b}from"./atlas_Bng76Ipsc6y2pOae0EuhP.js";class C{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(t,e={}){const i=e.seed||Math.floor(Math.random()*1e6);this.rng=new u(i),this.params={color:e.color||[.95,.95,1],particleCount:e.particleCount||50,speed:e.speed||.5,size:e.size||1,opacity:e.opacity||.3,brightness:e.brightness||1,seed:i},this.particleCount=this.params.particleCount,this.geometry=new g,this.createParticles(t),this.createMaterial(),this.particleSystem=new y(this.geometry,this.material)}createParticles(t){const e=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount),h=new Float32Array(this.particleCount),m=t*1.3;for(let o=0;o<this.particleCount;o++){const p=this.rng.random()*Math.PI*2,d=this.rng.random()*2-1,f=this.rng.random(),n=Math.acos(d),c=m*Math.cbrt(f);e[o*3]=c*Math.sin(n)*Math.cos(p),e[o*3+1]=c*Math.sin(n)*Math.sin(p),e[o*3+2]=c*Math.cos(n),i[o]=this.params.size*(.5+this.rng.random()*.5),s[o]=this.params.speed*(.8+this.rng.random()*.4),h[o]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new a(e,3)),this.geometry.setAttribute("size",new a(i,1)),this.geometry.setAttribute("speed",new a(s,1)),this.geometry.setAttribute("phase",new a(h,1))}createMaterial(){const t=this.params.color instanceof r?this.params.color:new r().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),e=`
      attribute float size;
      attribute float speed;
      attribute float phase;
      
      varying float vOpacity;
      varying float vPhase;
      
      uniform float time;
      
      void main() {
        vPhase = phase;

        vec3 animatedPosition = position;
        float animOffset = time * speed * 0.02 + phase;
        animatedPosition.y += sin(animOffset + phase) * 0.1;
        animatedPosition.x += cos(animOffset * 0.7 + phase * 1.3) * 0.05;
        animatedPosition.z += sin(animOffset * 1.1 + phase * 0.8) * 0.05;

        float distanceToCenter = length(position);
        vOpacity = 1.0 - smoothstep(0.0, 30.0, distanceToCenter);
        
        vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
        gl_PointSize = size * (100.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,i=`
      uniform vec3 color;
      uniform float opacity;
      uniform float brightness;
      
      varying float vOpacity;
      varying float vPhase;
      
      void main() {

        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);

        float alpha = 1.0 - smoothstep(0.0, 0.5, dist);

        float glow = exp(-dist * 4.0);

        alpha *= vOpacity * opacity;

        vec3 finalColor = color * brightness * (1.0 + glow * 2.0);

        finalColor += vec3(0.1, 0.1, 0.2) * glow;
        
        gl_FragColor = vec4(finalColor, alpha * (0.6 + 0.4 * glow));
      }
    `;this.material=new v({uniforms:{time:{value:0},color:{value:t},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:e,fragmentShader:i,transparent:!0,blending:b,depthWrite:!1})}addToScene(t,e){e&&this.particleSystem.position.copy(e),t.add(this.particleSystem)}update(t){this.time+=t,this.material.uniforms.time.value=this.time;const e=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*e}updateParams(t){if(this.params={...this.params,...t},t.color){const e=t.color instanceof r?t.color:new r().setRGB(t.color[0],t.color[1],t.color[2]);this.material.uniforms.color.value=e}t.opacity!==void 0&&(this.material.uniforms.opacity.value=t.opacity),t.brightness!==void 0&&(this.material.uniforms.brightness.value=t.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function A(l,t,e){const i=t.streaks||t,s={color:i.color||[.95,.95,1],particleCount:i.particleCount||30,speed:i.speed||.3,size:.8,opacity:.2,brightness:.8,seed:e||Math.floor(Math.random()*1e6)};return new C(l,s)}export{C as A,A as c};
