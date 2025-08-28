import{E as g,R as b,U as p,S as f}from"./atlas_DkwGE5ijhxZsZM2_s2tn7.js";import{S as x,g as y,D as T}from"./atlas_BJ-3dIBoTMvLRTvbW4jvB.js";import{C as h,f as u}from"./atlas_CqUMNY_RyRklhCsbOI68T.js";const P={uniforms:{tDiffuse:{value:null},uIntensity:{value:.005},uToxicTint:{value:new h(.5,0,.8)},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uIntensity;
    uniform vec3 uToxicTint;
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vec2 center = vec2(0.5);
      vec2 direction = normalize(vUv - center);
      float distance = length(vUv - center);
      
      // Aberración cromática dinámica
      float aberration = uIntensity * distance * distance;
      
      // Modular la aberración con el tiempo para efecto orgánico
      float pulse = sin(uTime * 0.5) * 0.3 + 0.7;
      aberration *= pulse;
      
      // Offset para cada canal de color
      vec2 offsetR = direction * aberration * 1.2;
      vec2 offsetG = direction * aberration * 0.8;
      vec2 offsetB = direction * aberration * 1.5;
      
      // Samplear cada canal con su offset
      float r = texture2D(tDiffuse, vUv + offsetR).r;
      float g = texture2D(tDiffuse, vUv + offsetG).g;
      float b = texture2D(tDiffuse, vUv + offsetB).b;
      
      vec3 color = vec3(r, g, b);
      
      // Aplicar tinte tóxico sutil en las áreas más brillantes
      float brightness = dot(color, vec3(0.299, 0.587, 0.114));
      float toxicMix = smoothstep(0.3, 0.8, brightness) * 0.15;
      color = mix(color, color * uToxicTint, toxicMix);
      
      // Efecto de "breathing" tóxico
      float breathing = sin(uTime * 1.2) * 0.05 + 1.0;
      color *= breathing;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `},S={uniforms:{tDiffuse:{value:null},uLightPosition:{value:new u(.5,.5)},uIntensity:{value:.3},uSamples:{value:64},uDecay:{value:.96},uWeight:{value:.4},uToxicColor:{value:new h(.6,0,.8)},uTime:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uLightPosition;
    uniform float uIntensity;
    uniform int uSamples;
    uniform float uDecay;
    uniform float uWeight;
    uniform vec3 uToxicColor;
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      
      // Vector hacia la fuente de luz
      vec2 deltaTextCoord = (vUv - uLightPosition);
      deltaTextCoord *= 1.0 / float(uSamples) * 0.5;
      
      float illuminationDecay = 1.0;
      vec2 textCord = vUv;
      
      // Acumular muestras para el efecto godray
      vec3 godrayColor = vec3(0.0);
      for (int i = 0; i < 64; i++) {
        if (i >= uSamples) break;
        
        textCord -= deltaTextCoord;
        vec4 texSample = texture2D(tDiffuse, textCord);
        
        // Solo considerar píxeles brillantes para los godrays
        float brightness = dot(texSample.rgb, vec3(0.299, 0.587, 0.114));
        brightness = smoothstep(0.4, 1.0, brightness);
        
        texSample.rgb *= illuminationDecay * uWeight * brightness;
        godrayColor += texSample.rgb;
        illuminationDecay *= uDecay;
      }
      
      // Modular intensidad con el tiempo para efecto orgánico
      float pulse = sin(uTime * 0.8) * 0.2 + 0.8;
      godrayColor *= uIntensity * pulse;
      
      // Mezclar con color tóxico
      godrayColor = mix(godrayColor, godrayColor * uToxicColor, 0.6);
      
      gl_FragColor = vec4(color.rgb + godrayColor, color.a);
    }
  `};class C{composer;bloomPass;chromaticAberrationPass;godrayPass;renderPass;planetRadius;rng;startTime;timeSpeed;bloomVariation;chromaticVariation;godrayVariation;toxicTint;constructor(e,s,o,t,i={}){this.planetRadius=t;const a=i.seed||Math.floor(Math.random()*1e6);this.rng=new x(a),this.startTime=this.rng.uniform(0,1e3),this.timeSpeed=this.rng.uniform(.8,1.5),this.bloomVariation=this.rng.uniform(.7,1.3),this.chromaticVariation=this.rng.uniform(.5,1.5),this.godrayVariation=this.rng.uniform(.6,1.2);const r=this.rng.uniform(.7,.9),n=this.rng.uniform(.8,1),c=this.rng.uniform(.3,.6);this.toxicTint=new h().setHSL(r,n,c),this.composer=new g(o),this.renderPass=new b(e,s),this.composer.addPass(this.renderPass);const l=(i.bloomStrength||.4)*this.bloomVariation,m=i.bloomRadius||.6,v=i.bloomThreshold||.3;this.bloomPass=new p(new u(window.innerWidth,window.innerHeight),l,m,v),this.composer.addPass(this.bloomPass),this.godrayPass=new f(S),this.godrayPass.uniforms.uIntensity.value=(i.godrayIntensity||.08)*this.godrayVariation,this.godrayPass.uniforms.uToxicColor.value=this.toxicTint,this.composer.addPass(this.godrayPass),this.chromaticAberrationPass=new f(P),this.chromaticAberrationPass.uniforms.uIntensity.value=(i.chromaticAberrationIntensity||.002)*this.chromaticVariation,this.chromaticAberrationPass.uniforms.uToxicTint.value=this.toxicTint,this.composer.addPass(this.chromaticAberrationPass),this.chromaticAberrationPass.renderToScreen=!0}update(e=.016){const o=y(T,this.timeSpeed,this.startTime);this.chromaticAberrationPass.uniforms.uTime.value=o,this.godrayPass.uniforms.uTime.value=o;const t=Math.sin(o*.3)*.1+1,i=Math.sin(o*.7)*.05+1;this.bloomPass.strength=.4*this.bloomVariation*t,this.chromaticAberrationPass.uniforms.uIntensity.value=.002*this.chromaticVariation*i}updateLightPosition(e,s){const o=e.clone().project(s),t=new u((o.x+1)/2,(o.y+1)/2);this.godrayPass.uniforms.uLightPosition.value=t}render(){this.composer.render()}setSize(e,s){this.composer.setSize(e,s)}dispose(){this.composer.dispose(),this.bloomPass.dispose(),this.chromaticAberrationPass.dispose(),this.godrayPass.dispose()}}function U(d,e,s,o,t,i){if(!t||t.planet_type!=="toxic")return null;const a=i||Math.floor(Math.random()*1e6),r=t.toxic_intensity,n=t.atmosphere_thickness,c=.3+r*.2,l=.001+r*.002,m=.05+n*.08;return new C(d,e,s,o,{bloomStrength:c,bloomRadius:.6,bloomThreshold:.4,chromaticAberrationIntensity:l,godrayIntensity:m,seed:a+2e4})}export{U as c};
