import{S as m}from"./atlas_xfnyr93axqOl2-j5dyf-s.js";import{C as c,S as M,D as N,N as T,V as y}from"./atlas_DykKF8lCJH3_A5qpAP-Im.js";const t={STORM_COUNT:{min:1,max:4},STORM_SIZE:{min:.15,max:.3},STORM_INTENSITY:{min:.6,max:1.2},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.1,max:.3}};class d{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(o,a={}){this.layerSystem=o;const e=a.seed||Math.floor(Math.random()*1e6),r=new m(e);this.params={stormCenters:a.stormCenters||this.generateStormCenters(e),stormColor:a.stormColor||new c(16724016),stormIntensity:a.stormIntensity||r.uniform(t.STORM_INTENSITY.min,t.STORM_INTENSITY.max),spiralSpeed:a.spiralSpeed||r.uniform(t.SPIRAL_SPEED.min,t.SPIRAL_SPEED.max),animationSpeed:a.animationSpeed||r.uniform(t.ANIMATION_SPEED.min,t.ANIMATION_SPEED.max),opacity:a.opacity||r.uniform(t.OPACITY.min,t.OPACITY.max),seed:e},this.material=this.createShaderMaterial(),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}createShaderMaterial(){const o=new Array(90).fill(0),a=new Array(30).fill(.25),e=new Array(30).fill(1),r=new Array(30).fill(1),s=new Array(30).fill(1);return this.params.stormCenters&&(console.log(`🔧 Processing ${this.params.stormCenters.length} storms for shader`),this.params.stormCenters.forEach((i,n)=>{n<30&&(o[n*3]=i.x,o[n*3+1]=i.y,o[n*3+2]=i.z,a[n]=i.size,e[n]=i.intensity,r[n]=i.spiralSpeed,s[n]=i.animationSpeed,n<5&&console.log(`  Storm ${n}: center=(${i.x.toFixed(2)}, ${i.y.toFixed(2)}, ${i.z.toFixed(2)}), size=${i.size.toFixed(3)}`))})),new M({vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,uniforms:{time:{value:0},stormColor:{value:this.params.stormColor||new c(16724016)},opacity:{value:this.params.opacity||t.OPACITY.max},stormCenters3D:{value:o},stormSizes:{value:a},stormIntensities:{value:e},spiralSpeeds:{value:r},animationSpeeds:{value:s},numStorms:{value:this.params.stormCenters?Math.min(this.params.stormCenters.length,30):30},lightDirection:{value:new y(1,1,1).normalize()},lightPosition:{value:new y(1,1,1)},ambientStrength:{value:.2},lightIntensity:{value:1}},transparent:!0,blending:T,side:N,depthWrite:!1})}generateStormCenters(o){const a=Math.abs(o%1e6);console.log(`🌪️ Generating storms with normalized seed ${a}`);const e=[],r=new m(a),s=Math.floor(r.uniform(t.STORM_COUNT.min,t.STORM_COUNT.max+1));for(let i=0;i<s;i++){const n=a+i*7919,l=new m(n),p=l.uniform(0,Math.PI*2),f=Math.acos(l.uniform(-1,1)),u=Math.sin(f)*Math.cos(p),S=Math.sin(f)*Math.sin(p),v=Math.cos(f),h=l.uniform(t.STORM_SIZE.min,t.STORM_SIZE.max),g=l.uniform(t.STORM_INTENSITY.min,t.STORM_INTENSITY.max),I=l.uniform(t.SPIRAL_SPEED.min,t.SPIRAL_SPEED.max),A=l.uniform(t.ANIMATION_SPEED.min,t.ANIMATION_SPEED.max);i<5&&console.log(`Storm ${i}: seed=${n}, pos=(${u.toFixed(2)}, ${S.toFixed(2)}, ${v.toFixed(2)}), size=${h.toFixed(3)}, intensity=${g.toFixed(3)}`),e.push({x:u,y:S,z:v,size:h,intensity:g,spiralSpeed:I,animationSpeed:A})}return console.log(`✅ Generated ${e.length} storms total`),e}update(o){this.material.uniforms.time&&(this.material.uniforms.time.value+=o)}updateParams(o){if(this.params={...this.params,...o},o.stormIntensity!==void 0){const a=this.material.uniforms.stormIntensities.value;for(let e=0;e<a.length;e++)a[e]=o.stormIntensity}if(o.spiralSpeed!==void 0){const a=this.material.uniforms.spiralSpeeds.value;for(let e=0;e<a.length;e++)a[e]=o.spiralSpeed}if(o.animationSpeed!==void 0){const a=this.material.uniforms.animationSpeeds.value;for(let e=0;e<a.length;e++)a[e]=o.animationSpeed}o.opacity!==void 0&&(this.material.uniforms.opacity.value=o.opacity)}dispose(){}}function x(E,o,a){const e=o.storms||{},r=a||Math.floor(Math.random()*1e6),s=new m(r+5e3),i={stormCenters:e.centers||void 0,stormColor:new c(16724016),stormIntensity:e.intensity||o.storm_intensity||s.uniform(t.STORM_INTENSITY.min,t.STORM_INTENSITY.max),spiralSpeed:e.spiral_speed||s.uniform(t.SPIRAL_SPEED.min,t.SPIRAL_SPEED.max),animationSpeed:s.uniform(t.ANIMATION_SPEED.min,t.ANIMATION_SPEED.max),opacity:s.uniform(t.OPACITY.min,t.OPACITY.max),seed:r};return new d(E,i)}export{x as c};
