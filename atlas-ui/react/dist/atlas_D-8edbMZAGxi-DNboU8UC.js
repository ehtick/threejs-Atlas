import{S as m}from"./atlas_BRxuskCzJ8TfEkc5-9Hxt.js";import{C as c,S as M,D as N,N as T,V as u}from"./atlas_Dg_ET6FsNHb7HwLobcNa6.js";const a={STORM_COUNT:{min:1,max:4},STORM_SIZE:{min:.15,max:.3},STORM_INTENSITY:{min:.6,max:1.2},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.1,max:.3}};class d{layerMesh;material;params;layerSystem;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    varying vec2 vUv;
    
    void main() {
      vPosition = position;
      vNormal = normalMatrix * normal; // Transformar normal al espacio de vista
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz); // Normal en espacio mundo
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;static fragmentShader=`
    uniform float time;
    uniform vec3 stormColor;
    uniform vec3 stormCenters3D[30]; // Centros en 3D para evitar distorsión - aumentado a 30
    uniform float stormSizes[30]; // Tamaños variables por tormenta - aumentado a 30
    uniform float stormIntensities[30]; // Intensidad individual por tormenta - aumentado a 30
    uniform float spiralSpeeds[30]; // Velocidad espiral individual por tormenta - aumentado a 30
    uniform float animationSpeeds[30]; // Velocidad animación individual por tormenta - aumentado a 30
    uniform int numStorms;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float ambientStrength;
    uniform float lightIntensity;
    uniform float opacity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    varying vec2 vUv;
    
    float createGyroSpirals(vec3 pos) {
      float storms = 0.0;
      
      for(int i = 0; i < 30; i++) {
        if(i >= numStorms) break;
        
        vec3 stormCenter3D = normalize(stormCenters3D[i]); // Centro normalizado en esfera
        float stormSize = stormSizes[i];
        float stormIntensity = stormIntensities[i]; // Intensidad individual
        float spiralSpeed = spiralSpeeds[i]; // Velocidad espiral individual
        float animationSpeed = animationSpeeds[i]; // Velocidad animación individual
        
        // Calcular distancia angular en 3D (sin distorsión)
        float dotProduct = dot(pos, stormCenter3D);
        float angularDist = acos(clamp(dotProduct, -1.0, 1.0)); // Distancia angular real
        
        if(angularDist < stormSize) {
          // Calcular vector tangente para el ángulo de espiral
          vec3 tangent = normalize(cross(stormCenter3D, vec3(0.0, 0.0, 1.0)));
          if(length(cross(stormCenter3D, vec3(0.0, 0.0, 1.0))) < 0.1) {
            tangent = normalize(cross(stormCenter3D, vec3(1.0, 0.0, 0.0)));
          }
          
          vec3 toPoint = pos - stormCenter3D * dot(pos, stormCenter3D);
          float angle = atan(dot(toPoint, cross(stormCenter3D, tangent)), dot(toPoint, tangent));
          
          // Espirales SUAVES para efecto de nubes - MENOS step functions más smoothstep
          float spiralFreq = 2.0 + spiralSpeed * 8.0; // Frecuencias más bajas para nubes suaves
          float radialFreq = 5.0 + spiralSpeed * 15.0; // Menor frecuencia radial para suavidad
          float spiral = sin(angle * spiralFreq + angularDist * radialFreq - time * animationSpeed * 2.0);
          
          // BLUR: Usar smoothstep en lugar de step para efecto de nubes difuso
          spiral = smoothstep(-0.4, 1.2, spiral + 0.5); // Transición AÚN MÁS suave
          
          // Añadir ruido suave para textura de nube
          float cloudNoise = sin(angularDist * 25.0 + time * animationSpeed) * 0.3;
          spiral = spiral * (0.7 + cloudNoise * 0.3);
          
          // Intensidad suave para efecto de nube
          spiral = spiral * (0.3 + stormIntensity * 0.7);
          
          // Bordes SUAVES para efecto de nube - falloff más gradual
          float falloffStart = stormSize * 0.3; // Inicio AÚN más temprano para transición MÁS larga
          float falloffRange = stormSize - falloffStart;
          float falloff = 1.0;
          
          if(angularDist > falloffStart) {
            falloff = 1.0 - ((angularDist - falloffStart) / falloffRange);
            // Potencia suave para bordes de nube difusos
            falloff = smoothstep(0.0, 1.0, falloff); // Muy suave
            falloff = smoothstep(0.0, 1.0, falloff); // Doble smoothstep para MÁS blur
            falloff = pow(falloff, 0.7); // Aún menos agresivo
          }
          
          // Usar intensidad individual con factor de nube suave
          float stormIntensityValue = falloff * spiral * stormIntensity * 0.3; // Aumentar un poco para compensar menor opacidad
          storms += stormIntensityValue;
        }
      }
      
      // No clamp para permitir que se vean múltiples tormentas
      return storms;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      
      // Enhanced lighting with rim lighting and proper transformations (EXACTAMENTE como en README)
      vec3 normal = normalize(vWorldNormal);
      vec3 lightDir = normalize(lightPosition - vWorldPosition);
      float dotNL = dot(normal, lightDir);
      
      // Smooth day/night transition (EXACTAMENTE como en README)
      float dayNight = smoothstep(-0.3, 0.1, dotNL);
      
      // Rim lighting for enhanced visibility (EXACTAMENTE como en README)
      float rimLight = 1.0 - abs(dotNL);
      rimLight = pow(rimLight, 3.0) * 0.1;
      
      // Final lighting calculation (EXACTAMENTE como en README)
      float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
      
      // Calcular tormentas directamente en 3D sin proyección distorsionante
      float storms = createGyroSpirals(pos);
      
      // Color de las tormentas con iluminación aplicada EXACTAMENTE como README
      vec3 color = stormColor * totalLight;
      float alpha = clamp(storms * opacity * 3.0, 0.0, 0.8); // Compensar menor opacidad, max 0.8 para efecto nube
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(o,e={}){this.layerSystem=o;const t=e.seed||Math.floor(Math.random()*1e6),r=new m(t);this.params={stormCenters:e.stormCenters||this.generateStormCenters(t),stormColor:e.stormColor||new c(16724016),stormIntensity:e.stormIntensity||r.uniform(a.STORM_INTENSITY.min,a.STORM_INTENSITY.max),spiralSpeed:e.spiralSpeed||r.uniform(a.SPIRAL_SPEED.min,a.SPIRAL_SPEED.max),animationSpeed:e.animationSpeed||r.uniform(a.ANIMATION_SPEED.min,a.ANIMATION_SPEED.max),opacity:e.opacity||r.uniform(a.OPACITY.min,a.OPACITY.max),seed:t},this.material=this.createShaderMaterial(),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}createShaderMaterial(){const o=new Array(90).fill(0),e=new Array(30).fill(.25),t=new Array(30).fill(1),r=new Array(30).fill(1),s=new Array(30).fill(1);return this.params.stormCenters&&this.params.stormCenters.forEach((i,n)=>{n<30&&(o[n*3]=i.x,o[n*3+1]=i.y,o[n*3+2]=i.z,e[n]=i.size,t[n]=i.intensity,r[n]=i.spiralSpeed,s[n]=i.animationSpeed)}),new M({vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,uniforms:{time:{value:0},stormColor:{value:this.params.stormColor||new c(16724016)},opacity:{value:this.params.opacity||a.OPACITY.max},stormCenters3D:{value:o},stormSizes:{value:e},stormIntensities:{value:t},spiralSpeeds:{value:r},animationSpeeds:{value:s},numStorms:{value:this.params.stormCenters?Math.min(this.params.stormCenters.length,30):30},lightDirection:{value:new u(1,1,1).normalize()},lightPosition:{value:new u(1,1,1)},ambientStrength:{value:.2},lightIntensity:{value:1}},transparent:!0,blending:T,side:N,depthWrite:!1})}generateStormCenters(o){const e=Math.abs(o%1e6),t=[],r=new m(e),s=Math.floor(r.uniform(a.STORM_COUNT.min,a.STORM_COUNT.max+1));for(let i=0;i<s;i++){const n=e+i*7919,l=new m(n),p=l.uniform(0,Math.PI*2),f=Math.acos(l.uniform(-1,1)),v=Math.sin(f)*Math.cos(p),h=Math.sin(f)*Math.sin(p),g=Math.cos(f),E=l.uniform(a.STORM_SIZE.min,a.STORM_SIZE.max),y=l.uniform(a.STORM_INTENSITY.min,a.STORM_INTENSITY.max),I=l.uniform(a.SPIRAL_SPEED.min,a.SPIRAL_SPEED.max),A=l.uniform(a.ANIMATION_SPEED.min,a.ANIMATION_SPEED.max);t.push({x:v,y:h,z:g,size:E,intensity:y,spiralSpeed:I,animationSpeed:A})}return t}update(o){this.material.uniforms.time&&(this.material.uniforms.time.value+=o)}updateParams(o){if(this.params={...this.params,...o},o.stormIntensity!==void 0){const e=this.material.uniforms.stormIntensities.value;for(let t=0;t<e.length;t++)e[t]=o.stormIntensity}if(o.spiralSpeed!==void 0){const e=this.material.uniforms.spiralSpeeds.value;for(let t=0;t<e.length;t++)e[t]=o.spiralSpeed}if(o.animationSpeed!==void 0){const e=this.material.uniforms.animationSpeeds.value;for(let t=0;t<e.length;t++)e[t]=o.animationSpeed}o.opacity!==void 0&&(this.material.uniforms.opacity.value=o.opacity)}dispose(){}}function P(S,o,e){const t=o.storms||{},r=e||Math.floor(Math.random()*1e6),s=new m(r+5e3),i={stormCenters:t.centers||void 0,stormColor:new c(16724016),stormIntensity:t.intensity||o.storm_intensity||s.uniform(a.STORM_INTENSITY.min,a.STORM_INTENSITY.max),spiralSpeed:t.spiral_speed||s.uniform(a.SPIRAL_SPEED.min,a.SPIRAL_SPEED.max),animationSpeed:s.uniform(a.ANIMATION_SPEED.min,a.ANIMATION_SPEED.max),opacity:s.uniform(a.OPACITY.min,a.OPACITY.max),seed:r};return new d(S,i)}export{P as c};
