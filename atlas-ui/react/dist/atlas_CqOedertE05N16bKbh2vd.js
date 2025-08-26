import{S as w}from"./atlas_BRxuskCzJ8TfEkc5-9Hxt.js";import{G as O,C as P,V as m,S as L,F as E,B as x,g as D,h as A,D as N,M as I,Q as b,i as z}from"./atlas_Dg_ET6FsNHb7HwLobcNa6.js";const l={HOLE_COUNT:{min:22,max:36},HOLE_RADIUS:{min:.03,max:.1},HOLE_DEPTH:{min:.02,max:.12},ROUGHNESS:{min:.4,max:.8},COLOR_VARIATION:{min:.2,max:.5}};class U{group;planetRadius;rng;holesData=[];coneMeshes=[];holeMask;holeColor;constructor(o,e={},t){this.group=new O,this.planetRadius=o;const i=t||12345;this.rng=new w(i),this.holeColor=e.holeColor instanceof P?e.holeColor:new P(e.holeColor||"#000000"),this.holesData=this.generateProceduralHoles(),this.holesData.length>0&&this.createHoles()}generateProceduralHoles(){const o=[],e=this.rng.randint(l.HOLE_COUNT.min,l.HOLE_COUNT.max);for(let t=0;t<e;t++){const i=this.rng.random()*2*Math.PI,a=Math.acos(this.rng.random()*2-1),h=[Math.sin(a)*Math.cos(i),Math.sin(a)*Math.sin(i),Math.cos(a)];o.push({position_3d:h,radius:this.rng.uniform(l.HOLE_RADIUS.min,l.HOLE_RADIUS.max),depth:this.rng.uniform(l.HOLE_DEPTH.min,l.HOLE_DEPTH.max),roughness:this.rng.uniform(l.ROUGHNESS.min,l.ROUGHNESS.max),color_variation:this.rng.uniform(l.COLOR_VARIATION.min,l.COLOR_VARIATION.max)})}return o}createPlanetHoleShader(o){const t=Math.min(this.holesData.length,64),i=`
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normalMatrix * normal;
        vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        vUv = uv;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,a=`
      uniform vec3 baseColor;
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      uniform vec3 holePositions[${t}];
      uniform float holeRadii[${t}];
      uniform int numHoles;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      void main() {
        vec3 worldPos = normalize(vWorldPosition);
        
        // Check if this fragment is inside any hole
        for(int i = 0; i < ${t}; i++) {
          if(i >= numHoles) break;
          
          vec3 holePos = normalize(holePositions[i]);
          float dist = distance(worldPos, holePos);
          float holeRadius = holeRadii[i];
          
          // If we're inside a hole, discard this fragment (make it completely transparent)
          if(dist < holeRadius) {
            discard;
          }
        }
        
        // Calculate lighting for non-hole areas (same as base planet shader)
        vec3 normal = normalize(vWorldNormal);
        
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Add rim lighting
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Apply lighting
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        vec3 finalColor = baseColor * totalLight;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,h=new Array(t).fill(null).map((c,s)=>s<this.holesData.length?new m(...this.holesData[s].position_3d):new m(0,0,0)),r=new Array(t).fill(null).map((c,s)=>s<this.holesData.length?this.holesData[s].radius:0);return new L({vertexShader:i,fragmentShader:a,uniforms:{baseColor:{value:o},lightDirection:{value:new m(1,1,1).normalize()},lightPosition:{value:new m(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},holePositions:{value:h},holeRadii:{value:r},numHoles:{value:t}},side:E})}createHoles(){this.holesData.slice(0,64).forEach(t=>{this.createHoleCone(t)})}createHollowConeGeometry(o,e,t,i){const a=new x,h=[],r=[],c=[],s=[];for(let n=0;n<=t;n++){const S=n/t*Math.PI*2,y=Math.cos(S),H=Math.sin(S),u=y*o,d=H*o,M=e/2,p=Math.sqrt(u*u+d*d),_=p*p/(i*2),R=M-_;h.push(u,R,d),s.push(n/t,1),h.push(0,-e/2,0),s.push(n/t,0)}for(let n=0;n<t;n++){const S=n*2,y=n*2+1,H=(n+1)%(t+1)*2,u=(n+1)%(t+1)*2+1;r.push(S,y,H),r.push(y,u,H);const d=n/t*Math.PI*2,M=Math.cos(d),p=Math.sin(d);c.push(M,.5,p),c.push(M,.5,p)}const v=0,g=Math.cos(v),f=Math.sin(v);return c.push(g,.5,f),c.push(g,.5,f),a.setIndex(r),a.setAttribute("position",new D(h,3)),a.setAttribute("normal",new D(c,3)),a.setAttribute("uv",new D(s,2)),a}createHoleCone(o){const e=new m(...o.position_3d).normalize(),t=o.radius*this.planetRadius,i=o.depth*this.planetRadius*2,a=this.createHollowConeGeometry(t,i,16,this.planetRadius),h=new A({color:new P(8421504),transparent:!1,opacity:1,side:N}),r=new I(a,h),c=e.clone().multiplyScalar(this.planetRadius),s=e.clone().negate(),v=c.clone().add(s.clone().multiplyScalar(i*.5));r.position.copy(v);const g=new m(0,1,0),f=e.clone(),n=new b().setFromUnitVectors(g,f);r.setRotationFromQuaternion(n),this.coneMeshes.push(r),this.group.add(r)}update(o){}updateLightDirection(o){this.planetShader&&this.planetShader.uniforms.lightDirection.value.copy(o.normalize())}updateFromThreeLight(o){if(this.planetShader){this.planetShader.uniforms.lightPosition.value.copy(o.position);const e=o.target.position.clone().sub(o.position).normalize();this.planetShader.uniforms.lightDirection.value.copy(e)}}addToScene(o,e){this.group.position.copy(e),o.add(this.group)}applyToPlanetSystem(o,e){const t=this.createPlanetHoleShader(e);o.applyHoleShader(t),this.planetShader=t}planetShader;removeFromScene(o){o.remove(this.group)}getObject3D(){return this.group}dispose(){this.coneMeshes.forEach(o=>{o.geometry.dispose(),o.material instanceof z&&o.material.dispose()}),this.coneMeshes=[],this.planetShader&&(this.planetShader.dispose(),this.planetShader=void 0)}}function G(C,o,e){const t=o?.surface_elements?.cave_holes,i={};return t?.holes&&(i.holes=t.holes),t?.hole_color&&(i.holeColor=t.hole_color),new U(C,i,e)}export{U as C,G as c};
