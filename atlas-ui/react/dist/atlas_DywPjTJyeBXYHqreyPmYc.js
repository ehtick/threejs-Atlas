import{S as E,D as T,g as P}from"./atlas_BCLm0rswpwHY6zwJL8hnM.js";import{C as M,d as _,V as v,M as A,S as C,D as I,A as O}from"./atlas_CLp6T-BwF8hBVTNM0OiQd.js";const s={OBJECT_COUNT:{min:16,max:32},SPOT_SIZE:{min:.4,max:1.2},SPOT_SIZE_SPECIAL:{min:3.2,max:4.2},MOVE_SPEED:{min:.01,max:.1},INNER_ROTATION_SPEED:{min:-300,max:300},PULSE_AMPLITUDE:{min:.1,max:2.5},TIME_SPEED:{min:.1,max:3}},R=.04;function y(m,i,t){return new C({uniforms:{uTime:{value:0},uToxicColor:{value:m},uSize:{value:i},uSeed:{value:t},uPulseAmplitude:{value:.2}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uToxicColor;
      uniform float uSize;
      uniform float uSeed;
      uniform float uPulseAmplitude;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7)) + uSeed) * 43758.5453);
      }

      float polygonShape(vec2 p, int vertices) {
        vec2 center = vec2(0.5);
        vec2 dir = p - center;
        float angle = atan(dir.y, dir.x);
        float radius = length(dir);
        
        float angleStep = 6.28318 / float(vertices);
        float minDist = uSize;
        
        for (int i = 0; i < 8; i++) {
          if (i >= vertices) break;
          float vertexAngle = float(i) * angleStep;
          
            float vertexHash = hash(vec2(float(i) * 17.3, uSeed));
          float vertexRadius = uSize * 0.3 * (0.7 + 0.6 * vertexHash);
          
          vec2 vertex = center + vec2(cos(vertexAngle), sin(vertexAngle)) * vertexRadius;
          float distToVertex = length(p - vertex);
          minDist = min(minDist, distToVertex);
        }
        
        return 1.0 - smoothstep(0.0, uSize * 0.1, minDist);
      }

      void main() {
        int vertices = 5 + int(hash(vec2(uSeed + 10.0, 0.0)) * 2.0);
        float polygon = polygonShape(vUv, vertices);
        
        if (polygon < 0.1) {
          discard;
        }
        
        float pulse = sin(uTime * 2.0 + uSeed) * uPulseAmplitude + (1.0 - uPulseAmplitude * 0.5);
        
        vec3 finalColor = uToxicColor * pulse;
        float alpha = polygon * 0.8;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,transparent:!0,blending:O,depthWrite:!1,side:I})}class D{mesh;material;initialAngle;initialPhi;angleSpeed;phiSpeed;rotationSpeed;size;pulseAmplitude;planetRadius;constructor(i,t,e,o,a,r){this.planetRadius=i;const n=new E(e);r?this.size=n.uniform(s.SPOT_SIZE_SPECIAL.min,s.SPOT_SIZE_SPECIAL.max):this.size=n.uniform(s.SPOT_SIZE.min,s.SPOT_SIZE.max),this.pulseAmplitude=n.uniform(s.PULSE_AMPLITUDE.min,s.PULSE_AMPLITUDE.max);const l=o!==void 0?o:n.uniform(s.MOVE_SPEED.min,s.MOVE_SPEED.max),p=a!==void 0?a:n.uniform(s.INNER_ROTATION_SPEED.min,s.INNER_ROTATION_SPEED.max);this.angleSpeed=n.uniform(.5,1.5)*l,this.phiSpeed=n.uniform(-.3,.3)*l,this.rotationSpeed=p*n.uniform(.8,1.2);const u=new _(this.size*2,this.size*2,8,8),c=u.attributes.position.array;for(let h=0;h<c.length;h+=3){const S=c[h],f=c[h+1];c[h+2];const x=new v(S,f,0),d=this.planetRadius*1.001;x.normalize().multiplyScalar(d);const g=Math.sqrt(Math.max(0,d*d-S*S-f*f))-d;c[h+2]=g}u.attributes.position.needsUpdate=!0,u.computeVertexNormals(),this.material=y(t,this.size,e),this.material.uniforms.uPulseAmplitude.value=this.pulseAmplitude,this.mesh=new A(u,this.material),this.initialAngle=n.uniform(0,Math.PI*2),this.initialPhi=n.uniform(.2,Math.PI-.2)}updatePosition(i){const t=this.initialAngle+this.angleSpeed*i;let e=this.initialPhi+this.phiSpeed*i;e=Math.abs(e%(Math.PI*2)),e>Math.PI&&(e=Math.PI*2-e);const o=this.planetRadius*1.005,a=o*Math.sin(e)*Math.cos(t),r=o*Math.cos(e),n=o*Math.sin(e)*Math.sin(t);this.mesh.position.set(a,r,n);const l=new v(a,r,n).normalize();this.mesh.lookAt(this.mesh.position.x+l.x,this.mesh.position.y+l.y,this.mesh.position.z+l.z);const p=i*this.rotationSpeed*.01;this.mesh.rotateZ(p)}update(i,t){this.updatePosition(t),this.material.uniforms.uTime.value=t}getMesh(){return this.mesh}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}}class U{spots=[];planetRadius;rng;startTime;proceduralParams;toxicColor;cosmicOriginTime;useSpecialEffect;constructor(i,t={}){this.planetRadius=i;const e=t.seed||Math.floor(Math.random()*1e6);this.rng=new E(e),this.useSpecialEffect=this.rng.random()<R,this.startTime=e%1e4/1e3,this.cosmicOriginTime=t.cosmicOriginTime||T,this.proceduralParams={objectCount:Math.floor(this.rng.uniform(s.OBJECT_COUNT.min,s.OBJECT_COUNT.max)),timeSpeed:t.timeSpeed||this.rng.uniform(s.TIME_SPEED.min,s.TIME_SPEED.max),moveSpeed:t.moveSpeed,innerRotationSpeed:t.innerRotationSpeed};const o=this.rng.uniform(.7,.95),a=this.rng.uniform(.8,1),r=this.rng.uniform(.5,.9);this.toxicColor=t.toxicColor||new M().setHSL(o,a,r),this.createSpots()}createSpots(){for(let i=0;i<this.proceduralParams.objectCount;i++){const t=this.rng.random()*1e6,e=this.rng.uniform(-.05,.05),o=this.toxicColor.clone(),a={};o.getHSL(a),o.setHSL((a.h+e)%1,a.s,a.l);const r=new D(this.planetRadius,o,t,this.proceduralParams.moveSpeed,this.proceduralParams.innerRotationSpeed,this.useSpecialEffect);this.spots.push(r)}}update(i=.016){const t=P(this.cosmicOriginTime,this.proceduralParams.timeSpeed,this.startTime);this.spots.forEach(e=>{e.update(i,t)})}addToScene(i,t){this.spots.forEach(e=>{e.getMesh().position.add(t),i.add(e.getMesh())})}dispose(){this.spots.forEach(i=>i.dispose()),this.spots=[]}}function w(m,i,t,e){if(!i||!i.type||i.type.toLowerCase()!=="toxic")return null;const o=t||Math.floor(Math.random()*1e6);return new U(m,{seed:o+3e4,moveSpeed:e?.moveSpeed,innerRotationSpeed:e?.innerRotationSpeed,timeSpeed:e?.timeSpeed,toxicColor:e?.toxicColor,...e})}export{U as T,w as c};
