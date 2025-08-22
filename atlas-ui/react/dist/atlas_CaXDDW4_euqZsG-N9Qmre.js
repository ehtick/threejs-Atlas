import{S as m}from"./atlas_ouOT0ykXceu4Q_V1lX7IB.js";import{V as d,G as u,C as n,S as s,D as g,d as p,M as f,g as v}from"./atlas_C0Xm8D4F9LGKGgzeG7E8_.js";const a={HOLE_COUNT:{min:15,max:30},HOLE_RADIUS:{min:.03,max:.12},HOLE_DEPTH:{min:.02,max:.06},ROUGHNESS:{min:.3,max:.8},COLOR_VARIATION:{min:.1,max:.4}};class C{group;planetRadius;rng;holesData=[];holeMeshes=[];baseColor;holeColor;lightDirection=new d(1,1,1).normalize();constructor(o,e={},t){this.group=new u,this.planetRadius=o;const i=t||12345;this.rng=new m(i),this.baseColor=e.baseColor instanceof n?e.baseColor:new n(e.baseColor||"#4a3f36"),this.holeColor=e.holeColor instanceof n?e.holeColor:new n(e.holeColor||"#1a1512"),e.holes?this.holesData=e.holes:this.holesData=this.generateProceduralHoles(),this.holesData.length>0&&this.createHoles()}generateProceduralHoles(){const o=[],e=this.rng.randint(a.HOLE_COUNT.min,a.HOLE_COUNT.max);for(let t=0;t<e;t++){const i=this.rng.random()*2*Math.PI,l=Math.acos(this.rng.random()*2-1),r=[Math.sin(l)*Math.cos(i),Math.sin(l)*Math.sin(i),Math.cos(l)];o.push({position_3d:r,radius:this.rng.uniform(a.HOLE_RADIUS.min,a.HOLE_RADIUS.max),depth:this.rng.uniform(a.HOLE_DEPTH.min,a.HOLE_DEPTH.max),roughness:this.rng.uniform(a.ROUGHNESS.min,a.ROUGHNESS.max),color_variation:this.rng.uniform(a.COLOR_VARIATION.min,a.COLOR_VARIATION.max)})}return o}createHoleMaterial(o){const e=`
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPosition;
      varying float vDepth;
      
      uniform float holeRadius;
      uniform float holeDepth;
      
      void main() {
        vLocalPosition = position;
        
        // Calculate depth based on distance from center
        float distFromCenter = length(position.xy);
        float depthFactor = smoothstep(holeRadius, 0.0, distFromCenter);
        vDepth = depthFactor;
        
        // Displace vertices inward to create hole
        vec3 displacedPosition = position;
        if (distFromCenter < holeRadius) {
          float displacement = -holeDepth * depthFactor * depthFactor;
          displacedPosition = position + normal * displacement;
        }
        
        vec4 worldPosition = modelMatrix * vec4(displacedPosition, 1.0);
        vWorldPosition = worldPosition.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
      }
    `,t=`
      uniform vec3 baseColor;
      uniform vec3 holeColor;
      uniform vec3 lightDirection;
      uniform float roughness;
      uniform float colorVariation;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec3 vLocalPosition;
      varying float vDepth;
      
      // Simple noise function for roughness
      float hash(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * 0.13);
        p3 += dot(p3, p3.yzx + 3.333);
        return fract((p3.x + p3.y) * p3.z);
      }
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
        // Add roughness to normal
        vec2 noiseCoord = vLocalPosition.xy * 10.0;
        float noise = hash(noiseCoord) * roughness;
        normal = normalize(normal + vec3(noise * 0.1 - 0.05));
        
        // Calculate lighting
        vec3 lightDir = normalize(-lightDirection);
        float dotNL = dot(normal, lightDir);
        float lightingFactor = max(0.0, dotNL);
        
        // Shadow inside holes
        float shadowFactor = 1.0 - vDepth * 0.7;
        lightingFactor *= shadowFactor;
        
        // Mix colors based on depth
        vec3 color = mix(baseColor, holeColor, vDepth);
        
        // Add color variation
        float colorNoise = hash(vLocalPosition.xy * 5.0) * colorVariation;
        color = color * (1.0 - colorNoise) + holeColor * colorNoise;
        
        // Apply lighting
        float totalLight = ambientStrength + (lightIntensity * lightingFactor);
        totalLight = clamp(totalLight, 0.2, 1.0);
        
        vec3 finalColor = color * totalLight;
        
        // Add rim lighting for depth perception
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1 * (1.0 - vDepth);
        finalColor += vec3(rimLight);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;return new s({vertexShader:e,fragmentShader:t,uniforms:{baseColor:{value:this.baseColor},holeColor:{value:this.holeColor},lightDirection:{value:this.lightDirection.clone()},holeRadius:{value:o.radius*this.planetRadius},holeDepth:{value:o.depth*this.planetRadius},roughness:{value:o.roughness},colorVariation:{value:o.color_variation},ambientStrength:{value:.4},lightIntensity:{value:.8}},side:g})}createHoles(){this.holesData.forEach(o=>{const e=o.radius*this.planetRadius*2.5,t=Math.floor(32*o.radius/.1),i=new p(e,e,t,t),l=this.createHoleMaterial(o),r=new f(i,l),c=new d(...o.position_3d).normalize().multiplyScalar(this.planetRadius*1.001);r.position.copy(c),r.lookAt(c.clone().multiplyScalar(2)),this.holeMeshes.push(r),this.group.add(r)})}update(o){const e=Date.now()*1e-4;this.holeMeshes.forEach((t,i)=>{if(t.material instanceof s){const l=t.material.uniforms,r=.95+Math.sin(e+i)*.05;l.ambientStrength.value=.4*r}})}updateLightDirection(o){this.lightDirection.copy(o).normalize(),this.holeMeshes.forEach(e=>{e.material instanceof s&&e.material.uniforms.lightDirection.value.copy(this.lightDirection)})}updateFromThreeLight(o){const e=o.position.clone().normalize();this.updateLightDirection(e)}addToScene(o,e){this.group.position.copy(e),o.add(this.group)}removeFromScene(o){o.remove(this.group)}getObject3D(){return this.group}dispose(){this.holeMeshes.forEach(o=>{o.geometry.dispose(),o.material instanceof v&&o.material.dispose()}),this.holeMeshes=[]}}function y(h,o,e){const t=o?.surface_elements?.cave_holes,i={};return t?.holes&&(i.holes=t.holes),t?.base_color&&(i.baseColor=t.base_color),t?.hole_color&&(i.holeColor=t.hole_color),new C(h,i,e)}export{C,y as c};
