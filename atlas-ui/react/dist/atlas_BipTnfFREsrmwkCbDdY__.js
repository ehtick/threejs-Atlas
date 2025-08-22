import{S as x}from"./atlas_CZPwVUCzTXPjRwu-ZVPrl.js";import{C as y,S as P,A as S,N as C,F as E,M as b,d as R,V as T}from"./atlas_DoxhO7agDNvhtnb7c3WZw.js";const i={SIZE:{min:.12,max:.2},ROTATION_SPEED:{min:.05,max:.1},OPACITY:{min:.15,max:.35},TIME_SPEED:{min:.8,max:1.5}},D=`
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    
    // World position for curved surface calculations
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,_=`
  uniform float time;
  uniform vec3 planetColor;
  uniform vec3 hexagonColor;
  uniform float darkenFactor;
  uniform float opacity;
  uniform float hexagonRadius;
  uniform float rotationSpeed;
  uniform float pole;
  uniform float visibility;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  
  #define PI 3.14159265359
  
  // Convert UV to polar coordinates
  vec2 toPolar(vec2 uv) {
    vec2 centered = uv - 0.5;
    float r = length(centered);
    float theta = atan(centered.y, centered.x);
    return vec2(r, theta);
  }
  
  // Create hexagon shape
  float hexagon(vec2 p, float radius) {
    const vec3 k = vec3(-0.866025404, 0.5, 0.577350269);
    p = abs(p);
    p -= 2.0 * min(dot(k.xy, p), 0.0) * k.xy;
    p -= vec2(clamp(p.x, -k.z * radius, k.z * radius), radius);
    return length(p) * sign(p.y);
  }
  
  void main() {
    // Convert to polar coordinates centered at pole
    vec2 polar = toPolar(vUv);
    
    // Rotate hexagon slowly
    float rotation = time * rotationSpeed;
    vec2 rotatedUV = vUv - 0.5;
    float cosR = cos(rotation);
    float sinR = sin(rotation);
    rotatedUV = vec2(
      rotatedUV.x * cosR - rotatedUV.y * sinR,
      rotatedUV.x * sinR + rotatedUV.y * cosR
    );
    
    // Create hexagon shape distance field
    float hex = hexagon(rotatedUV, hexagonRadius);
    
    // HOLLOW HEXAGON: Only show the edges/lines
    float lineWidth = 0.03; // Thick lines like Saturn
    float hexagonEdge = abs(hex); // Distance to hexagon edge
    
    // Only render if we're close to the hexagon edge
    if (hexagonEdge > lineWidth) {
      discard; // Not on hexagon edge, don't render
    }
    
    // Only show if we're inside the hexagon area (not outside)
    if (hex > lineWidth) {
      discard; // Outside hexagon completely
    }
    
    // Calculate line intensity based on distance to edge
    float edgeIntensity = 1.0 - smoothstep(0.0, lineWidth, hexagonEdge);
    
    // Calculate hexagon color (darker than planet)
    vec3 finalColor = planetColor * (1.0 - darkenFactor);
    
    // Make lines more prominent
    finalColor *= 0.6; // Darker for contrast
    
    // Apply edge intensity and 25% opacity (75% transparent)
    float finalOpacity = opacity * visibility * edgeIntensity * 0.25;
    
    // Add subtle glow for Saturn-like effect
    finalColor += vec3(0.1) * edgeIntensity;
    
    gl_FragColor = vec4(finalColor, finalOpacity);
  }
`;class k{mesh;material;params;startTime;proceduralParams;constructor(e){const n=e.seed||Math.floor(Math.random()*1e6),t=new x(n);this.startTime=e.startTime||n%1e4/1e3,this.proceduralParams={size:t.uniform(i.SIZE.min,i.SIZE.max),rotationSpeed:t.uniform(i.ROTATION_SPEED.min,i.ROTATION_SPEED.max),opacity:t.uniform(i.OPACITY.min,i.OPACITY.max),timeSpeed:t.uniform(i.TIME_SPEED.min,i.TIME_SPEED.max)},this.params=e;const o=new y(e.planetColor),r=o.clone();r.multiplyScalar(1-e.hexagonData.color_darken_factor),this.material=new P({uniforms:{time:{value:0},planetColor:{value:o},hexagonColor:{value:r},darkenFactor:{value:e.hexagonData.color_darken_factor},opacity:{value:this.proceduralParams.opacity},hexagonRadius:{value:this.proceduralParams.size},rotationSpeed:{value:this.proceduralParams.rotationSpeed},pole:{value:e.hexagonData.pole==="north"?1:-1},visibility:{value:1}},vertexShader:D,fragmentShader:_,transparent:!0,depthWrite:!1,side:E,blending:e.hexagonData.nebula_blend?S:C});const s=this.createCurvedHexagonGeometry(e.hexagonData.pole,e.hexagonData.radius);this.mesh=new b(s,this.material),this.mesh.scale.set(e.planetRadius,e.planetRadius,e.planetRadius),this.updateVisibility()}updateVisibility(){if(!this.params.hexagonData.enabled){this.material.uniforms.visibility.value=0;return}const n=(this.params.currentTime||0)%this.params.hexagonData.cycle_duration_years/this.params.hexagonData.cycle_duration_years,t=this.params.hexagonData.visible_duration_years/this.params.hexagonData.cycle_duration_years;if(n<t){const o=n/t;o<.1?this.material.uniforms.visibility.value=o/.1:o>.9?this.material.uniforms.visibility.value=(1-o)/.1:this.material.uniforms.visibility.value=1}else this.material.uniforms.visibility.value=0}update(e){const t=(this.startTime+Date.now()/1e3*this.proceduralParams.timeSpeed)%1e3;this.material.uniforms.time.value=t,this.updateVisibility()}addToScene(e){e.add(this.mesh)}removeFromScene(e){e.remove(this.mesh)}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}createCurvedHexagonGeometry(e,n){const t=e==="north"?1:-1,o=64,r=1,s=new R(r,r,o,o),c=s.attributes.position,a=new T;for(let d=0;d<c.count;d++){a.fromBufferAttribute(c,d);const m=a.x,h=a.y,l=Math.sqrt(m*m+h*h);if(l<=r/2){const u=l*Math.PI*.5,p=t*Math.cos(u)*1.02,v=Math.sin(u)*1.02;if(l>0){const f=m/l,g=h/l;a.x=f*v,a.y=p,a.z=g*v}else a.x=0,a.y=t*1.02,a.z=0}c.setXYZ(d,a.x,a.y,a.z)}return c.needsUpdate=!0,s.computeVertexNormals(),s}setEnabled(e){this.mesh.visible=e}}export{k as P};
