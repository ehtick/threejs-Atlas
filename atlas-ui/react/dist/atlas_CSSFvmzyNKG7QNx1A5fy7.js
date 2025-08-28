import{S as u,D as d,g as p}from"./atlas_BJ-3dIBoTMvLRTvbW4jvB.js";import{C as S,b as f,M as g,G as v,S as x,D as E,A as T}from"./atlas_CqUMNY_RyRklhCsbOI68T.js";const r={OBJECT_COUNT:{min:3,max:3},SPOT_SIZE:{min:.4,max:1.2},MOVE_SPEED:{min:1e-4,max:5e-4},INNER_ROTATION_SPEED:{min:-11,max:11},PULSE_AMPLITUDE:{min:.1,max:1.3},TIME_SPEED:{min:.1,max:3}};function P(a,i,t){return new x({uniforms:{uTime:{value:0},uToxicColor:{value:a},uSize:{value:i},uSeed:{value:t},uPulseAmplitude:{value:.2}},vertexShader:`
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

      // Hash function
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7)) + uSeed) * 43758.5453);
      }

      // Crear forma poligonal irregular
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
          
          // Variación procedural en cada vértice
          float vertexHash = hash(vec2(float(i) * 17.3, uSeed));
          float vertexRadius = uSize * 0.3 * (0.7 + 0.6 * vertexHash);
          
          vec2 vertex = center + vec2(cos(vertexAngle), sin(vertexAngle)) * vertexRadius;
          float distToVertex = length(p - vertex);
          minDist = min(minDist, distToVertex);
        }
        
        return 1.0 - smoothstep(0.0, uSize * 0.1, minDist);
      }

      void main() {
        // Crear polígono irregular con 5-7 vértices
        int vertices = 5 + int(hash(vec2(uSeed + 10.0, 0.0)) * 2.0);
        float polygon = polygonShape(vUv, vertices);
        
        if (polygon < 0.1) {
          discard;
        }
        
        // Efecto de pulsación
        float pulse = sin(uTime * 2.0 + uSeed) * uPulseAmplitude + (1.0 - uPulseAmplitude * 0.5);
        
        // Color final con pulsación
        vec3 finalColor = uToxicColor * pulse;
        float alpha = polygon * 0.8;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,transparent:!0,blending:T,depthWrite:!1,side:E})}class A{group;mesh;material;initialAngle;initialPhi;angleSpeed;phiSpeed;rotationSpeed;rotationAxisX;rotationAxisY;rotationAxisZ;size;pulseAmplitude;constructor(i,t,e,s,n){const o=new u(e);this.size=o.uniform(r.SPOT_SIZE.min,r.SPOT_SIZE.max),this.pulseAmplitude=o.uniform(r.PULSE_AMPLITUDE.min,r.PULSE_AMPLITUDE.max);const h=s!==void 0?s:o.uniform(r.MOVE_SPEED.min,r.MOVE_SPEED.max),m=n!==void 0?n:o.uniform(r.INNER_ROTATION_SPEED.min,r.INNER_ROTATION_SPEED.max);this.angleSpeed=o.uniform(-1,1)*h,this.phiSpeed=o.uniform(-.4,.4)*h,this.rotationSpeed=m*o.uniform(.8,1.2),this.rotationAxisX=o.uniform(-.3,.3),this.rotationAxisY=o.uniform(-.5,.5),this.rotationAxisZ=o.uniform(.7,1)*(o.random()>.5?1:-1);const l=this.size*.8,c=new f(l,12,12,0,Math.PI*2,0,Math.PI);this.material=P(t,this.size,e),this.material.uniforms.uPulseAmplitude.value=this.pulseAmplitude,this.mesh=new g(c,this.material),this.mesh.position.z=i*1.005+l,this.group=new v,this.group.add(this.mesh),this.initialAngle=o.uniform(0,Math.PI*2),this.initialPhi=o.uniform(.2,Math.PI-.2)}updatePosition(i){const t=this.initialAngle+this.angleSpeed*i;let e=this.initialPhi+this.phiSpeed*i;const s=Math.PI-.4;e=e%(s*2),e>s&&(e=s*2-e),e=Math.max(.2,Math.min(Math.PI-.2,e+.2)),this.group.rotation.order="YXZ",this.group.rotation.y=t,this.group.rotation.x=e-Math.PI/2,this.group.rotation.z=0;const n=i*this.rotationSpeed;this.mesh.rotation.x=n*this.rotationAxisX,this.mesh.rotation.y=n*this.rotationAxisY,this.mesh.rotation.z=n*this.rotationAxisZ}update(i,t){this.updatePosition(t),this.material.uniforms.uTime.value=t}getMesh(){return this.group}dispose(){this.material.dispose(),this.mesh.geometry.dispose(),this.group.remove(this.mesh)}}class M{spots=[];planetRadius;rng;startTime;proceduralParams;toxicColor;cosmicOriginTime;constructor(i,t={}){this.planetRadius=i;const e=t.seed||Math.floor(Math.random()*1e6);this.rng=new u(e),this.startTime=e%1e4/1e3,this.cosmicOriginTime=t.cosmicOriginTime||d,this.proceduralParams={objectCount:Math.floor(this.rng.uniform(r.OBJECT_COUNT.min,r.OBJECT_COUNT.max)),timeSpeed:t.timeSpeed||this.rng.uniform(r.TIME_SPEED.min,r.TIME_SPEED.max),moveSpeed:t.moveSpeed,innerRotationSpeed:t.innerRotationSpeed};const s=this.rng.uniform(.7,.95),n=this.rng.uniform(.8,1),o=this.rng.uniform(.5,.9);this.toxicColor=t.toxicColor||new S().setHSL(s,n,o),this.createSpots()}createSpots(){for(let i=0;i<this.proceduralParams.objectCount;i++){const t=this.rng.random()*1e6,e=this.rng.uniform(-.05,.05),s=this.toxicColor.clone(),n={};s.getHSL(n),s.setHSL((n.h+e)%1,n.s,n.l);const o=new A(this.planetRadius,s,t,this.proceduralParams.moveSpeed,this.proceduralParams.innerRotationSpeed);this.spots.push(o)}}update(i=.016){const t=p(this.cosmicOriginTime,this.proceduralParams.timeSpeed,this.startTime);this.spots.forEach(e=>{e.update(i,t)})}addToScene(i,t){this.spots.forEach(e=>{e.getMesh().position.add(t),i.add(e.getMesh())})}dispose(){this.spots.forEach(i=>i.dispose()),this.spots=[]}}function I(a,i,t,e){if(!i||!i.type||i.type.toLowerCase()!=="toxic")return null;const s=t||Math.floor(Math.random()*1e6);return new M(a,{seed:s+3e4,moveSpeed:e?.moveSpeed,innerRotationSpeed:e?.innerRotationSpeed,timeSpeed:e?.timeSpeed,toxicColor:e?.toxicColor,...e})}export{M as T,I as c};
