import{S as s}from"./atlas_CMUvaCD4mo7XQYkYXSJfw.js";import{C as t,b as l,S as d,A as m,D as v,M as C}from"./atlas_Ce3hh0hgxYWauQ_qSK6cl.js";const e={CRACK_DENSITY:{min:.3,max:.6},CRACK_DEPTH:{min:.5,max:.9},CRACK_COMPLEXITY:{min:3,max:5},CRACK_SCALE:{min:3,max:8},CRACK_SHARPNESS:{min:.7,max:1},CRACK_OPACITY:{min:.6,max:.9},INTERNAL_REFLECTIONS:{min:.5,max:.9},ANIMATION_SPEED:{min:.05,max:.15}};class f{crackMesh;material;params;constructor(a={}){const o=a.seed||Math.floor(Math.random()*1e6),i=new s(o),c=a.crackColor instanceof t?a.crackColor:a.crackColor?new t(a.crackColor):new t(3355443);this.params={crackDensity:a.crackDensity!==void 0?a.crackDensity:i.uniform(e.CRACK_DENSITY.min,e.CRACK_DENSITY.max),crackDepth:a.crackDepth!==void 0?a.crackDepth:i.uniform(e.CRACK_DEPTH.min,e.CRACK_DEPTH.max),crackComplexity:a.crackComplexity!==void 0?a.crackComplexity:Math.floor(i.uniform(e.CRACK_COMPLEXITY.min,e.CRACK_COMPLEXITY.max)),crackScale:a.crackScale!==void 0?a.crackScale:i.uniform(e.CRACK_SCALE.min,e.CRACK_SCALE.max),crackSharpness:a.crackSharpness!==void 0?a.crackSharpness:i.uniform(e.CRACK_SHARPNESS.min,e.CRACK_SHARPNESS.max),crackColor:c,crackOpacity:a.crackOpacity!==void 0?a.crackOpacity:i.uniform(e.CRACK_OPACITY.min,e.CRACK_OPACITY.max),internalReflections:a.internalReflections!==void 0?a.internalReflections:i.uniform(e.INTERNAL_REFLECTIONS.min,e.INTERNAL_REFLECTIONS.max),animationSpeed:a.animationSpeed!==void 0?a.animationSpeed:i.uniform(e.ANIMATION_SPEED.min,e.ANIMATION_SPEED.max),seed:o,radius:a.radius||2.5};const n=new l(this.params.radius*1.02,32,32);this.material=new d({vertexShader:`
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vUv = uv;
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        uniform float time;
        uniform vec3 crackColor;
        uniform float crackIntensity;
        uniform float crackGlow;
        
        // Random simple
        vec2 random2(vec2 st) {
          st = vec2(dot(st, vec2(127.1, 311.7)),
                    dot(st, vec2(269.5, 183.3)));
          return -1.0 + 2.0 * fract(sin(st) * 43758.5453123);
        }
        
        // Voronoi para grietas - devuelve distancia al borde más cercano
        float voronoiCracks(vec2 st) {
          vec2 i_st = floor(st);
          vec2 f_st = fract(st);
          
          float min_dist = 10.0;
          vec2 min_point;
          
          // Encontrar la celda más cercana
          for(int y = -1; y <= 1; y++) {
            for(int x = -1; x <= 1; x++) {
              vec2 neighbor = vec2(float(x), float(y));
              vec2 point = random2(i_st + neighbor);
              // Sin animación para que no se muevan
              point = 0.5 + 0.5 * point;
              vec2 diff = neighbor + point - f_st;
              float dist = length(diff);
              
              if(dist < min_dist) {
                min_dist = dist;
                min_point = point + neighbor;
              }
            }
          }
          
          // Ahora encontrar la segunda celda más cercana para crear el borde
          float min_dist2 = 10.0;
          for(int y = -1; y <= 1; y++) {
            for(int x = -1; x <= 1; x++) {
              vec2 neighbor = vec2(float(x), float(y));
              vec2 point = random2(i_st + neighbor);
              point = 0.5 + 0.5 * point;
              vec2 diff = neighbor + point - f_st;
              float dist = length(diff);
              
              if(dist > min_dist && dist < min_dist2) {
                min_dist2 = dist;
              }
            }
          }
          
          // El borde está donde las dos distancias son similares
          return min_dist2 - min_dist;
        }
        
        void main() {
          vec2 st = vUv * 10.0; // Escala del patrón
          
          // Crear múltiples capas de grietas para más complejidad
          float edge1 = voronoiCracks(st);
          float edge2 = voronoiCracks(st * 1.7 + vec2(13.0, 7.0));
          float edge3 = voronoiCracks(st * 2.3 + vec2(5.0, 23.0));
          
          // Combinar las capas
          float lineWidth = 0.02;
          float crack1 = 1.0 - smoothstep(0.0, lineWidth, edge1);
          float crack2 = 1.0 - smoothstep(0.0, lineWidth * 0.7, edge2);
          float crack3 = 1.0 - smoothstep(0.0, lineWidth * 0.5, edge3);
          
          // Combinar todas las grietas
          float crack = max(crack1, max(crack2 * 0.7, crack3 * 0.5));
          
          // Descartar todo excepto las líneas
          if(crack < 0.1) {
            discard;
          }
          
          // Añadir variación basada en la normal para simular profundidad
          float depthVariation = abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
          crack *= 0.6 + 0.4 * depthVariation;
          
          // Añadir pulsación sutil
          float pulse = 1.0 + 0.1 * sin(time * 2.0 + st.x * 5.0);
          crack *= pulse;
          
          // Color con efecto de brillo
          vec3 baseColor = crackColor * crackIntensity;
          vec3 glowColor = baseColor * (1.0 + crackGlow * crack);
          
          // Aplicar transparencia y efecto additive
          float alpha = crack * 0.3; // Muy transparente
          
          gl_FragColor = vec4(glowColor, alpha);
        }
      `,uniforms:{time:{value:0},crackColor:{value:new t(.8,.8,1)},crackIntensity:{value:1.5},crackGlow:{value:2}},transparent:!0,depthWrite:!1,side:v,blending:m}),this.crackMesh=new C(n,this.material)}addToScene(a,o){this.crackMesh.position.copy(o),this.crackMesh.visible=!0,a.add(this.crackMesh),console.log("DiamondCracks: Added simple sphere mesh to scene")}removeFromScene(a){a.remove(this.crackMesh)}update(a){this.material.uniforms.time&&(this.material.uniforms.time.value+=a*.5)}updateFromThreeLight(a){}getObject3D(){return this.crackMesh}dispose(){this.crackMesh&&(this.crackMesh.geometry.dispose(),this.material.dispose())}}function p(r,a,o){const i=o||Math.floor(Math.random()*1e6);return new f({crackDensity:.6,crackDepth:.8,crackComplexity:4,crackScale:5,crackSharpness:.9,crackColor:new t(.8,.8,1),crackOpacity:.8,internalReflections:.7,animationSpeed:.02,seed:i,radius:a})}export{f as D,p as c};
