import{S as x,g as y,D as P}from"./atlas_CGrAwTYnSDNTtni2msvpu.js";import{C as S,S as E,A as T,N as R,F as _,M as b,d as C,V as D}from"./atlas_BptVXGp7hwWSDe7IbaYgj.js";const o={SIZE:{min:.12,max:.2},ROTATION_SPEED:{min:.05,max:.1},OPACITY:{min:.15,max:.35},TIME_SPEED:{min:.8,max:1.5}},I=`
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
`,M=`
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
  
  vec2 toPolar(vec2 uv) {
    vec2 centered = uv - 0.5;
    float r = length(centered);
    float theta = atan(centered.y, centered.x);
    return vec2(r, theta);
  }
  
  float hexagon(vec2 p, float radius) {
    const vec3 k = vec3(-0.866025404, 0.5, 0.577350269);
    p = abs(p);
    p -= 2.0 * min(dot(k.xy, p), 0.0) * k.xy;
    p -= vec2(clamp(p.x, -k.z * radius, k.z * radius), radius);
    return length(p) * sign(p.y);
  }
  
  void main() {
    vec2 polar = toPolar(vUv);
    
    float rotation = time * rotationSpeed;
    vec2 rotatedUV = vUv - 0.5;
    float cosR = cos(rotation);
    float sinR = sin(rotation);
    rotatedUV = vec2(
      rotatedUV.x * cosR - rotatedUV.y * sinR,
      rotatedUV.x * sinR + rotatedUV.y * cosR
    );
    
    float hex = hexagon(rotatedUV, hexagonRadius);
    
    float lineWidth = 0.03;
    float hexagonEdge = abs(hex);
    
    if (hexagonEdge > lineWidth) {
      discard;
    }
    
    if (hex > lineWidth) {
      discard;
    }
    
    float edgeIntensity = 1.0 - smoothstep(0.0, lineWidth, hexagonEdge);
    
    vec3 finalColor = planetColor * (1.0 - darkenFactor);
    
    finalColor *= 0.6;
    
    float finalOpacity = opacity * visibility * edgeIntensity * 0.25;
    
    finalColor += vec3(0.1) * edgeIntensity;
    
    gl_FragColor = vec4(finalColor, finalOpacity);
  }
`;class A{mesh;material;params;startTime;proceduralParams;constructor(e){const r=e.seed||Math.floor(Math.random()*1e6),t=new x(r);this.startTime=e.startTime||r%1e4/1e3,this.proceduralParams={size:t.uniform(o.SIZE.min,o.SIZE.max),rotationSpeed:t.uniform(o.ROTATION_SPEED.min,o.ROTATION_SPEED.max),opacity:t.uniform(o.OPACITY.min,o.OPACITY.max),timeSpeed:t.uniform(o.TIME_SPEED.min,o.TIME_SPEED.max)},this.params=e;const a=new S(e.planetColor),n=a.clone();n.multiplyScalar(1-e.hexagonData.color_darken_factor),this.material=new E({uniforms:{time:{value:0},planetColor:{value:a},hexagonColor:{value:n},darkenFactor:{value:e.hexagonData.color_darken_factor},opacity:{value:this.proceduralParams.opacity},hexagonRadius:{value:this.proceduralParams.size},rotationSpeed:{value:this.proceduralParams.rotationSpeed},pole:{value:e.hexagonData.pole==="north"?1:-1},visibility:{value:1}},vertexShader:I,fragmentShader:M,transparent:!0,depthWrite:!1,side:_,blending:e.hexagonData.nebula_blend?T:R});const s=this.createCurvedHexagonGeometry(e.hexagonData.pole,e.hexagonData.radius);this.mesh=new b(s,this.material),this.mesh.scale.set(e.planetRadius,e.planetRadius,e.planetRadius),this.updateVisibility()}updateVisibility(){if(!this.params.hexagonData.enabled){this.material.uniforms.visibility.value=0;return}const r=(this.params.currentTime||0)%this.params.hexagonData.cycle_duration_years/this.params.hexagonData.cycle_duration_years,t=this.params.hexagonData.visible_duration_years/this.params.hexagonData.cycle_duration_years;if(r<t){const a=r/t;a<.1?this.material.uniforms.visibility.value=a/.1:a>.9?this.material.uniforms.visibility.value=(1-a)/.1:this.material.uniforms.visibility.value=1}else this.material.uniforms.visibility.value=0}update(e){const t=y(P,this.proceduralParams.timeSpeed,this.startTime);this.material.uniforms.time.value=t,this.updateVisibility()}addToScene(e){e.add(this.mesh)}removeFromScene(e){e.remove(this.mesh)}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}createCurvedHexagonGeometry(e,r){const t=e==="north"?1:-1,a=64,n=1,s=new C(n,n,a,a),c=s.attributes.position,i=new D;for(let d=0;d<c.count;d++){i.fromBufferAttribute(c,d);const m=i.x,v=i.y,l=Math.sqrt(m*m+v*v);if(l<=n/2){const h=l*Math.PI*.5,f=t*Math.cos(h)*1.02,u=Math.sin(h)*1.02;if(l>0){const p=m/l,g=v/l;i.x=p*u,i.y=f,i.z=g*u}else i.x=0,i.y=t*1.02,i.z=0}c.setXYZ(d,i.x,i.y,i.z)}return c.needsUpdate=!0,s.computeVertexNormals(),s}setEnabled(e){this.mesh.visible=e}}export{A as P};
