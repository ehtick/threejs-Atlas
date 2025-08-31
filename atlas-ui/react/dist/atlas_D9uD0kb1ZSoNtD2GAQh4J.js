import{S as w}from"./atlas_BrNrnv36SE53jZ2fSHjkt.js";import{G as O,C as H,V as m,S as L,F as E,B as x,g as D,h as A,D as b,M as I,Q as N,i as U}from"./atlas_BoQAiljVnjMCunoRfsYFA.js";const l={HOLE_COUNT:{min:22,max:36},HOLE_RADIUS:{min:.03,max:.1},HOLE_DEPTH:{min:.02,max:.12},ROUGHNESS:{min:.4,max:.8},COLOR_VARIATION:{min:.2,max:.5}};class z{group;planetRadius;rng;holesData=[];coneMeshes=[];holeMask;holeColor;constructor(o,i={},t){this.group=new O,this.planetRadius=o;const e=t||12345;this.rng=new w(e),this.holeColor=i.holeColor instanceof H?i.holeColor:new H(i.holeColor||"#000000"),this.holesData=this.generateProceduralHoles(),this.holesData.length>0&&this.createHoles()}generateProceduralHoles(){const o=[],i=this.rng.randint(l.HOLE_COUNT.min,l.HOLE_COUNT.max);for(let t=0;t<i;t++){const e=this.rng.random()*2*Math.PI,a=Math.acos(this.rng.random()*2-1),h=[Math.sin(a)*Math.cos(e),Math.sin(a)*Math.sin(e),Math.cos(a)];o.push({position_3d:h,radius:this.rng.uniform(l.HOLE_RADIUS.min,l.HOLE_RADIUS.max),depth:this.rng.uniform(l.HOLE_DEPTH.min,l.HOLE_DEPTH.max),roughness:this.rng.uniform(l.ROUGHNESS.min,l.ROUGHNESS.max),color_variation:this.rng.uniform(l.COLOR_VARIATION.min,l.COLOR_VARIATION.max)})}return o}createPlanetHoleShader(o){const t=Math.min(this.holesData.length,64),e=`
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

        for(int i = 0; i < ${t}; i++) {
          if(i >= numHoles) break;
          
          vec3 holePos = normalize(holePositions[i]);
          float dist = distance(worldPos, holePos);
          float holeRadius = holeRadii[i];

          if(dist < holeRadius) {
            discard;
          }
        }

        vec3 normal = normalize(vWorldNormal);
        
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);

        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;

        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        vec3 finalColor = baseColor * totalLight;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,h=new Array(t).fill(null).map((c,s)=>s<this.holesData.length?new m(...this.holesData[s].position_3d):new m(0,0,0)),r=new Array(t).fill(null).map((c,s)=>s<this.holesData.length?this.holesData[s].radius:0);return new L({vertexShader:e,fragmentShader:a,uniforms:{baseColor:{value:o},lightDirection:{value:new m(1,1,1).normalize()},lightPosition:{value:new m(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},holePositions:{value:h},holeRadii:{value:r},numHoles:{value:t}},side:E})}createHoles(){this.holesData.slice(0,64).forEach(t=>{this.createHoleCone(t)})}createHollowConeGeometry(o,i,t,e){const a=new x,h=[],r=[],c=[],s=[];for(let n=0;n<=t;n++){const S=n/t*Math.PI*2,M=Math.cos(S),P=Math.sin(S),d=M*o,u=P*o,y=i/2,v=Math.sqrt(d*d+u*u),R=v*v/(e*2),C=y-R;h.push(d,C,u),s.push(n/t,1),h.push(0,-i/2,0),s.push(n/t,0)}for(let n=0;n<t;n++){const S=n*2,M=n*2+1,P=(n+1)%(t+1)*2,d=(n+1)%(t+1)*2+1;r.push(S,M,P),r.push(M,d,P);const u=n/t*Math.PI*2,y=Math.cos(u),v=Math.sin(u);c.push(y,.5,v),c.push(y,.5,v)}const p=0,g=Math.cos(p),f=Math.sin(p);return c.push(g,.5,f),c.push(g,.5,f),a.setIndex(r),a.setAttribute("position",new D(h,3)),a.setAttribute("normal",new D(c,3)),a.setAttribute("uv",new D(s,2)),a}createHoleCone(o){const i=new m(...o.position_3d).normalize(),t=o.radius*this.planetRadius,e=o.depth*this.planetRadius*2,a=this.createHollowConeGeometry(t,e,16,this.planetRadius),h=new A({color:new H(8421504),transparent:!1,opacity:1,side:b}),r=new I(a,h),c=i.clone().multiplyScalar(this.planetRadius),s=i.clone().negate(),p=c.clone().add(s.clone().multiplyScalar(e*.5));r.position.copy(p);const g=new m(0,1,0),f=i.clone(),n=new N().setFromUnitVectors(g,f);r.setRotationFromQuaternion(n),this.coneMeshes.push(r),this.group.add(r)}update(o){}updateLightDirection(o){this.planetShader&&this.planetShader.uniforms.lightDirection.value.copy(o.normalize())}updateFromThreeLight(o){if(this.planetShader){this.planetShader.uniforms.lightPosition.value.copy(o.position);const i=o.target.position.clone().sub(o.position).normalize();this.planetShader.uniforms.lightDirection.value.copy(i)}}addToScene(o,i){this.group.position.copy(i),o.add(this.group)}applyToPlanetSystem(o,i){const t=this.createPlanetHoleShader(i);if(o.baseMaterial&&o.baseMaterial.uniforms){const e=o.baseMaterial.uniforms;e.lightDirection&&t.uniforms.lightDirection.value.copy(e.lightDirection.value),e.lightPosition&&t.uniforms.lightPosition.value.copy(e.lightPosition.value),e.ambientStrength&&(t.uniforms.ambientStrength.value=e.ambientStrength.value),e.lightIntensity&&(t.uniforms.lightIntensity.value=e.lightIntensity.value)}o.applyHoleShader(t),this.planetShader=t,this.planetSystem=o}planetShader;planetSystem;removeFromScene(o){o.remove(this.group)}getObject3D(){return this.group}dispose(){this.coneMeshes.forEach(o=>{o.geometry.dispose(),o.material instanceof U&&o.material.dispose()}),this.coneMeshes=[],this.planetShader&&(this.planetShader.dispose(),this.planetShader=void 0)}}function G(_,o,i){const t=o?.surface_elements?.cave_holes,e={};return t?.holes&&(e.holes=t.holes),t?.hole_color&&(e.holeColor=t.hole_color),new z(_,e,i)}export{z as C,G as c};
