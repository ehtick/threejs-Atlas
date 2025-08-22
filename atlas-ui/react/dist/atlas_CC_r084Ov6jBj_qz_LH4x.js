import{S}from"./atlas_CZPwVUCzTXPjRwu-ZVPrl.js";import{G as y,C as c,V as l,S as P,F as D,g as C,h as u,D as H,M as R,Q as M,i as w}from"./atlas_DoxhO7agDNvhtnb7c3WZw.js";const a={HOLE_COUNT:{min:15,max:30},HOLE_RADIUS:{min:.03,max:.12},HOLE_DEPTH:{min:.02,max:.06},ROUGHNESS:{min:.3,max:.8},COLOR_VARIATION:{min:.1,max:.4}};class O{group;planetRadius;rng;holesData=[];coneMeshes=[];holeMask;holeColor;constructor(o,e={},i){this.group=new y,this.planetRadius=o;const t=i||12345;this.rng=new S(t),this.holeColor=e.holeColor instanceof c?e.holeColor:new c(e.holeColor||"#000000"),e.holes?this.holesData=e.holes:this.holesData=this.generateProceduralHoles(),this.holesData.length>0&&this.createHoles()}generateProceduralHoles(){const o=[],e=this.rng.randint(a.HOLE_COUNT.min,a.HOLE_COUNT.max);for(let i=0;i<e;i++){const t=this.rng.random()*2*Math.PI,n=Math.acos(this.rng.random()*2-1),h=[Math.sin(n)*Math.cos(t),Math.sin(n)*Math.sin(t),Math.cos(n)];o.push({position_3d:h,radius:this.rng.uniform(a.HOLE_RADIUS.min,a.HOLE_RADIUS.max),depth:this.rng.uniform(a.HOLE_DEPTH.min,a.HOLE_DEPTH.max),roughness:this.rng.uniform(a.ROUGHNESS.min,a.ROUGHNESS.max),color_variation:this.rng.uniform(a.COLOR_VARIATION.min,a.COLOR_VARIATION.max)})}return o}createPlanetHoleShader(o){const e=Math.max(this.holesData.length,1),i=`
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
    `,t=`
      uniform vec3 baseColor;
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      uniform vec3 holePositions[${e}];
      uniform float holeRadii[${e}];
      uniform int numHoles;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      void main() {
        vec3 worldPos = normalize(vWorldPosition);
        
        // Check if this fragment is inside any hole
        for(int i = 0; i < ${e}; i++) {
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
    `,n=new Array(e).fill(null).map((r,s)=>s<this.holesData.length?new l(...this.holesData[s].position_3d):new l(0,0,0)),h=new Array(e).fill(null).map((r,s)=>s<this.holesData.length?this.holesData[s].radius:0);return new P({vertexShader:i,fragmentShader:t,uniforms:{baseColor:{value:o},lightDirection:{value:new l(1,1,1).normalize()},lightPosition:{value:new l(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},holePositions:{value:n},holeRadii:{value:h},numHoles:{value:this.holesData.length}},side:D})}createHoles(){this.holesData.forEach(o=>{this.createHoleCone(o)})}createHoleCone(o){const e=new l(...o.position_3d).normalize(),i=o.radius*this.planetRadius,t=o.depth*this.planetRadius*2,n=new C(i,t,16),h=new u({color:new c(8421504),transparent:!0,opacity:1,side:H}),r=new R(n,h),s=e.clone().multiplyScalar(this.planetRadius),d=e.clone().negate(),g=s.clone().add(d.clone().multiplyScalar(t*.5));r.position.copy(g);const v=new l(0,1,0),p=d.clone(),f=new M().setFromUnitVectors(v,p);r.setRotationFromQuaternion(f),this.coneMeshes.push(r),this.group.add(r)}update(o){const e=Date.now()*1e-4;this.coneMeshes.forEach((i,t)=>{if(i.material instanceof u){const n=.7+Math.sin(e+t*.5)*.1;i.material.opacity=n}})}updateLightDirection(o){this.planetShader&&this.planetShader.uniforms.lightDirection.value.copy(o.normalize())}updateFromThreeLight(o){if(this.planetShader){this.planetShader.uniforms.lightPosition.value.copy(o.position);const e=o.target.position.clone().sub(o.position).normalize();this.planetShader.uniforms.lightDirection.value.copy(e)}}addToScene(o,e){this.group.position.copy(e),o.add(this.group)}applyToPlanetSystem(o,e){const i=this.createPlanetHoleShader(e);o.applyHoleShader(i),this.planetShader=i}planetShader;removeFromScene(o){o.remove(this.group)}getObject3D(){return this.group}dispose(){this.coneMeshes.forEach(o=>{o.geometry.dispose(),o.material instanceof w&&o.material.dispose()}),this.coneMeshes=[],this.planetShader&&(this.planetShader.dispose(),this.planetShader=void 0)}}function N(m,o,e){const i=o?.surface_elements?.cave_holes,t={};return i?.holes&&(t.holes=i.holes),i?.hole_color&&(t.holeColor=i.hole_color),new O(m,t,e)}export{O as C,N as c};
