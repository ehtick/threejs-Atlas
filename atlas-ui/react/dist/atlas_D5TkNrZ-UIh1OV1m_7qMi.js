import{B as d,P as T,a as h,S as y,A as C}from"./atlas_Bd-08EnGHvuA4jxvJ1T-8.js";class p{seed;constructor(t){this.seed=t}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(t,e){return t+this.random()*(e-t)}randint(t,e){return Math.floor(this.random()*(e-t+1))+t}spherePosition(t){const e=this.random()*Math.PI*2,i=Math.acos(this.random()*2-1);return{x:t*Math.sin(i)*Math.cos(e),y:t*Math.sin(i)*Math.sin(e),z:t*Math.cos(i)}}colorVariation(t,e=.4){return{r:t.r*(.8+this.random()*e),g:t.g*(.8+this.random()*e),b:t.b*(.8+this.random()*e)}}}let v=0;function M(n){v=n}function g(n){return Date.now()/1e3-n+v}function A(n,t=1,e=0){const i=g(n);return e+i*t}const I=51408e4,a={PARTICLE_COUNT:{min:60,max:150},PHASE_INTENSITY:{min:.4,max:.9},TRANSITION_SPEED:{min:1,max:4},COHERENCE_LEVEL:{min:.7,max:.7},TIME_SPEED:{min:3e-4,max:6e-4},PHASE_STATES:{min:3,max:6}};class c{phaseSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
    attribute float size;
    attribute vec3 phaseVector;
    attribute float coherenceFactor;
    attribute float phaseState;
    attribute float transitionPhase;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vPhaseState;
    varying float vCoherence;
    
    uniform float time;
    uniform float phaseIntensity;
    uniform float transitionSpeed;
    uniform float coherenceLevel;
    uniform float phaseStates;
    
    float phaseTransition(float state, float t) {
      float cycle = sin(t * transitionSpeed + state * 6.28 / phaseStates);
      return 0.5 + 0.5 * cycle;
    }
    
    vec3 getPhasePosition(vec3 basePos, float state, float t) {
      float transition = phaseTransition(state, t);
      
      if (state < 1.0) {
        return basePos * (0.8 + 0.2 * transition);
      }
      else if (state < 2.0) {
        vec3 flow = vec3(sin(t + basePos.x), cos(t + basePos.y), sin(t * 0.5 + basePos.z)) * 0.1;
        return basePos + flow * transition;
      }
      else if (state < 3.0) {
        return basePos * (1.0 + 0.5 * transition);
      }
      else if (state < 4.0) {
        vec3 energy = normalize(phaseVector) * sin(t * 3.0) * 0.3;
        return basePos + energy * transition;
      }
      else if (state < 5.0) {
        vec3 uncertainty = phaseVector * sin(t * 5.0 + state) * 0.4;
        return basePos + uncertainty * transition;
      }
      else {
        return -basePos * (0.5 + 0.5 * transition);
      }
    }
    
    void main() {
      vSize = size;
      vPhaseState = phaseState;
      vCoherence = coherenceFactor;
      
      vec3 pos = getPhasePosition(position, phaseState, time + transitionPhase);
      
      float coherence = coherenceFactor * coherenceLevel;
      float phaseTransitionValue = phaseTransition(phaseState, time + transitionPhase);
      
      if (phaseState < 1.0) {
        vColor = vec3(0.8, 0.8, 1.0);
      } else if (phaseState < 2.0) {
        vColor = vec3(0.3, 0.7, 1.0);
      } else if (phaseState < 3.0) {
        vColor = vec3(0.9, 0.9, 0.6);
      } else if (phaseState < 4.0) {
        vColor = vec3(1.0, 0.5, 0.2);
      } else if (phaseState < 5.0) {
        vColor = vec3(0.7, 0.3, 1.0);
      } else {
        vColor = vec3(1.0, 0.2, 0.8);
      }
      
      vColor *= (0.7 + 0.3 * phaseTransitionValue);
      
      vAlpha = coherence * phaseIntensity * phaseTransitionValue;
      
      float materialization = abs(sin(time * 2.0 + phaseState)) * 0.5 + 0.5;
      vAlpha *= materialization;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z) * (0.5 + coherence);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vPhaseState;
    varying float vCoherence;
    
    uniform float time;
    
    float quantumInterference(vec2 uv, float phase) {
      float dist = length(uv);
      float wave = sin(dist * 15.0 + phase * 10.0 + time * 3.0);
      return 0.5 + 0.5 * wave;
    }
    
    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      float particle = 1.0 - smoothstep(0.0, 0.5, dist);
      
      if (vPhaseState < 1.0) {
        particle = 1.0 - smoothstep(0.0, 0.3, dist);
      } else if (vPhaseState < 2.0) {
        particle = 1.0 - smoothstep(0.0, 0.4, dist);
        particle *= (0.8 + 0.2 * sin(time * 2.0 + dist * 10.0));
      } else if (vPhaseState < 3.0) {
        particle = 1.0 - smoothstep(0.0, 0.5, dist);
        particle *= 0.6;
      } else if (vPhaseState < 4.0) {
        float energy = quantumInterference(uv, vPhaseState);
        particle *= energy;
      } else if (vPhaseState < 5.0) {
        float interference = quantumInterference(uv, vPhaseState);
        particle *= interference;
        
        float probability = abs(sin(time + vPhaseState));
        if (probability < 0.3) {
          particle *= 0.2;
        }
      } else {
        particle = smoothstep(0.2, 0.5, dist) - smoothstep(0.5, 0.8, dist);
      }
      
      float coherenceEffect = vCoherence;
      if (coherenceEffect < 0.3) {
        particle *= 0.4;
        
        float flicker = step(0.8, fract(sin(time * 10.0 + vPhaseState) * 43758.5453));
        particle *= (0.3 + 0.7 * flicker);
      }
      
      float temporal = sin(time * 4.0 + vPhaseState) * 0.2 + 0.8;
      particle *= temporal;
      
      vec3 finalColor = vColor;
      
      if (abs(sin(time * 2.0 + vPhaseState)) > 0.9) {
        finalColor += vec3(0.5, 0.5, 0.5);
      }
      
      float finalAlpha = particle * vAlpha;
      gl_FragColor = vec4(finalColor, finalAlpha);
    }
  `;constructor(t,e={}){const i=e.seed||Math.floor(Math.random()*1e6),s=new p(i);this.startTime=e.startTime||i%1e4/1e3,this.params={particleCount:e.particleCount||Math.floor(s.uniform(a.PARTICLE_COUNT.min,a.PARTICLE_COUNT.max)),phaseIntensity:e.phaseIntensity||s.uniform(a.PHASE_INTENSITY.min,a.PHASE_INTENSITY.max),transitionSpeed:e.transitionSpeed||s.uniform(a.TRANSITION_SPEED.min,a.TRANSITION_SPEED.max),coherenceLevel:e.coherenceLevel||s.uniform(a.COHERENCE_LEVEL.min,a.COHERENCE_LEVEL.max),timeSpeed:e.timeSpeed||s.uniform(a.TIME_SPEED.min,a.TIME_SPEED.max),phaseStates:e.phaseStates||Math.floor(s.uniform(a.PHASE_STATES.min,a.PHASE_STATES.max)),seed:i,startTime:this.startTime},this.particleCount=this.params.particleCount,this.geometry=new d,this.material=this.createMaterial(),this.generatePhaseParticles(t),this.phaseSystem=new T(this.geometry,this.material)}generatePhaseParticles(t){const e=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount*3),l=new Float32Array(this.particleCount),S=new Float32Array(this.particleCount),u=new Float32Array(this.particleCount),E=this.params.seed||Math.floor(Math.random()*1e6),r=new p(E);for(let o=0;o<this.particleCount;o++){const P=t*r.uniform(1.1,1.9),m=r.spherePosition(P);e[o*3]=m.x,e[o*3+1]=m.y,e[o*3+2]=m.z,i[o]=r.uniform(.8,2);const f=r.spherePosition(1);s[o*3]=f.x,s[o*3+1]=f.y,s[o*3+2]=f.z,l[o]=r.uniform(.1,1),S[o]=r.uniform(0,this.params.phaseStates),u[o]=r.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new h(e,3)),this.geometry.setAttribute("size",new h(i,1)),this.geometry.setAttribute("phaseVector",new h(s,3)),this.geometry.setAttribute("coherenceFactor",new h(l,1)),this.geometry.setAttribute("phaseState",new h(S,1)),this.geometry.setAttribute("transitionPhase",new h(u,1))}createMaterial(){return new y({vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,uniforms:{time:{value:0},phaseIntensity:{value:this.params.phaseIntensity},transitionSpeed:{value:this.params.transitionSpeed},coherenceLevel:{value:this.params.coherenceLevel},phaseStates:{value:this.params.phaseStates}},transparent:!0,blending:C,depthWrite:!1})}addToScene(t,e){e&&this.phaseSystem.position.copy(e),t.add(this.phaseSystem)}update(){const e=A(I,this.params.timeSpeed,this.startTime);this.material.uniforms.time.value=e,this.phaseSystem.rotation.x=e*.012*Math.cos(e*.3),this.phaseSystem.rotation.y=e*.008*Math.sin(e*.5),this.phaseSystem.rotation.z=e*.006*Math.cos(e*.7)}getObject3D(){return this.phaseSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function b(n,t,e){const i=e||Math.floor(Math.random()*1e6),s=new p(i+9e3),l={particleCount:Math.floor(s.uniform(a.PARTICLE_COUNT.min,a.PARTICLE_COUNT.max)),phaseIntensity:s.uniform(a.PHASE_INTENSITY.min,a.PHASE_INTENSITY.max),transitionSpeed:s.uniform(a.TRANSITION_SPEED.min,a.TRANSITION_SPEED.max),coherenceLevel:s.uniform(a.COHERENCE_LEVEL.min,a.COHERENCE_LEVEL.max),timeSpeed:s.uniform(a.TIME_SPEED.min,a.TIME_SPEED.max),phaseStates:Math.floor(s.uniform(a.PHASE_STATES.min,a.PHASE_STATES.max)),seed:i,startTime:i%1e4/1e3};return new c(n,l)}export{c as A,I as D,p as S,A as a,b as c,g,M as s};
