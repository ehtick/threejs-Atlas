import{S as T,D as f,g as _}from"./atlas_CvjINy7MGUzH_F6zr4ome.js";import{C as m,G as C,V as y,S as E,D as S,A as g,s as w,T as R,M as N}from"./atlas_CePo6YWp7kQwmK1a1tWI3.js";const c={NETWORK_DENSITY:{min:50,max:100},BRANCHING_FACTOR:{min:12,max:15},CHANNEL_WIDTH:{min:.01,max:.03},HEARTBEAT_RATE:{min:30,max:90},PULSE_WAVE_SPEED:{min:1,max:3},PULSE_INTENSITY:{min:1,max:2.5},NETWORK_EMISSION:{min:4,max:8}};class v{networkGroup;nodes=[];connections=[];channelMeshes=[];params;startTime;planetRadius;material;orbitalVisibilityFactor=1;temperatureActivationFactor=1;static channelVertexShader=`
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying float vDistanceToCenter;
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);

      vDistanceToCenter = abs(uv.y - 0.5) * 2.0;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;static channelFragmentShader=`
    uniform float time;
    uniform vec3 arteryColor;
    uniform vec3 veinColor;
    uniform vec3 pulseColor;
    uniform float heartbeatRate;
    uniform float pulseWaveSpeed;
    uniform float pulseIntensity;
    uniform float networkEmission;
    uniform float channelType;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying float vDistanceToCenter;
    
    void main() {

      float heartbeat = (heartbeatRate / 60.0) * time;
      float pulse = sin(heartbeat * 6.28318) * 0.5 + 0.5;

      float pulseWave = sin((vUv.x * 10.0) - (time * pulseWaveSpeed * 5.0));
      pulseWave = pulseWave * 0.5 + 0.5;

      float totalPulse = mix(pulse, pulseWave, 0.6) * pulseIntensity;

      vec3 baseColor;
      if (channelType > 0.75) {
        baseColor = arteryColor;
      } else if (channelType > 0.25) {
        baseColor = veinColor;
      } else {
        baseColor = veinColor * 0.6;
      }

      vec3 finalColor = mix(baseColor, pulseColor, totalPulse * 0.7);

      float edgeFactor = 1.0 - smoothstep(0.3, 1.0, vDistanceToCenter);

      float emission = networkEmission * (0.5 + channelType * 0.5) * edgeFactor;
      
      gl_FragColor = vec4(finalColor * emission, edgeFactor * 0.9);
    }
  `;constructor(n,e={}){this.planetRadius=n;const s=e.seed||Math.floor(Math.random()*1e6),t=new T(s);this.startTime=e.startTime||s%1e4/1e3;const i=e.arteryColor instanceof m?e.arteryColor:new m(1,.8,.2),a=e.veinColor instanceof m?e.veinColor:new m(1,.3,0),r=e.capillaryColor instanceof m?e.capillaryColor:new m(.8,.2,0),o=e.pulseColor instanceof m?e.pulseColor:new m(1,1,.8);this.params={networkDensity:e.networkDensity||Math.floor(t.uniform(c.NETWORK_DENSITY.min,c.NETWORK_DENSITY.max)),branchingFactor:e.branchingFactor||Math.floor(t.uniform(c.BRANCHING_FACTOR.min,c.BRANCHING_FACTOR.max)),channelWidth:e.channelWidth||t.uniform(c.CHANNEL_WIDTH.min,c.CHANNEL_WIDTH.max),heartbeatRate:e.heartbeatRate||t.uniform(c.HEARTBEAT_RATE.min,c.HEARTBEAT_RATE.max),pulseWaveSpeed:e.pulseWaveSpeed||t.uniform(c.PULSE_WAVE_SPEED.min,c.PULSE_WAVE_SPEED.max),pulseIntensity:e.pulseIntensity||t.uniform(c.PULSE_INTENSITY.min,c.PULSE_INTENSITY.max),networkPattern:e.networkPattern||(t.random()>.5?"organic":"dendritic"),arteryColor:i,veinColor:a,capillaryColor:r,pulseColor:o,networkEmission:e.networkEmission||t.uniform(c.NETWORK_EMISSION.min,c.NETWORK_EMISSION.max),seed:s,startTime:this.startTime,timeSpeed:e.timeSpeed||t.uniform(.5,2),orbitalData:e.orbitalData,currentTime:e.currentTime||0,planetTemperature:e.planetTemperature||0},this.temperatureActivationFactor=this.calculateTemperatureActivation(),this.orbitalVisibilityFactor=this.calculateOrbitalVisibility(),this.networkGroup=new C,this.generateVascularNetwork(t),this.createMaterials(),this.createChannelGeometries()}generateVascularNetwork(n){const e=this.params.networkDensity;for(let s=0;s<e;s++){const t=n.uniform(0,Math.PI*2),i=Math.acos(n.uniform(-1,1)),a=new y(Math.sin(i)*Math.cos(t)*this.planetRadius,Math.sin(i)*Math.sin(t)*this.planetRadius,Math.cos(i)*this.planetRadius);let r;const o=n.random();o<.1?r="artery":o<.4?r="vein":r="capillary",this.nodes.push({position:a,connections:[],nodeType:r,pulsePhase:n.random()*Math.PI*2})}this.connectNetworkNodes(n)}connectNetworkNodes(n){const e=this.planetRadius*.3,s=this.params.branchingFactor;for(let t=0;t<this.nodes.length;t++){const i=this.nodes[t],a=[];for(let o=0;o<this.nodes.length;o++){if(t===o)continue;const l=i.position.distanceTo(this.nodes[o].position);l<e&&a.push({index:o,distance:l})}a.sort((o,l)=>o.distance-l.distance);let r;switch(i.nodeType){case"artery":r=Math.min(s+2,a.length);break;case"vein":r=Math.min(s,a.length);break;case"capillary":r=Math.min(Math.floor(s*.6),a.length);break}for(let o=0;o<r;o++){const l=a[o].index,u=this.nodes[l];if(i.connections.includes(l)||u.connections.includes(t))continue;i.connections.push(l),u.connections.push(t);let d;i.nodeType==="artery"||u.nodeType==="artery"?d="artery":i.nodeType==="vein"||u.nodeType==="vein"?d="vein":d="capillary";const b=this.createCurvedPath(i.position,u.position,n);let p;switch(d){case"artery":p=this.params.channelWidth*this.planetRadius*2;break;case"vein":p=this.params.channelWidth*this.planetRadius*1.2;break;case"capillary":p=this.params.channelWidth*this.planetRadius*.6;break}this.connections.push({from:t,to:l,path:b,connectionType:d,width:p})}}}createCurvedPath(n,e,s){const t=[n.clone()],i=8;for(let a=1;a<i;a++){const r=a/i,o=n.clone().lerp(e,r);o.normalize().multiplyScalar(this.planetRadius);const l=new y((s.random()-.5)*.1,(s.random()-.5)*.1,(s.random()-.5)*.1);o.add(l),o.normalize().multiplyScalar(this.planetRadius),t.push(o)}return t.push(e.clone()),t}createMaterials(){this.material=new E({vertexShader:v.channelVertexShader,fragmentShader:v.channelFragmentShader,uniforms:{time:{value:0},arteryColor:{value:this.params.arteryColor},veinColor:{value:this.params.veinColor},pulseColor:{value:this.params.pulseColor},heartbeatRate:{value:this.params.heartbeatRate},pulseWaveSpeed:{value:this.params.pulseWaveSpeed},pulseIntensity:{value:this.params.pulseIntensity},networkEmission:{value:this.params.networkEmission},channelType:{value:.5}},transparent:!0,blending:g,side:S,depthWrite:!1})}createChannelGeometries(){this.connections.forEach(n=>{const e=new w(n.path),s=new R(e,32,n.width*.5,4,!1),t=this.material.clone();let i;switch(n.connectionType){case"artery":i=1;break;case"vein":i=.5;break;case"capillary":i=0;break}t.uniforms.channelType.value=i;const a=new N(s,t);a.renderOrder=6,this.channelMeshes.push(a),this.networkGroup.add(a)})}calculateTemperatureActivation(){return 1}calculateOrbitalVisibility(){if(!this.params.orbitalData||!this.params.orbitalData.enabled)return 1;const n=this.params.cosmicOriginTime||f,t=(Date.now()/1e3-n)/(365.25*24*3600)%this.params.orbitalData.cycle_duration_years/this.params.orbitalData.cycle_duration_years,i=this.params.orbitalData.visible_duration_years/this.params.orbitalData.cycle_duration_years;if(t<=i){const a=t/i;return a<.1?a/.1:a>.9?(1-a)/.1:1}return 0}update(n){const e=this.params.cosmicOriginTime||f,s=_(e,this.params.timeSpeed,this.startTime);this.orbitalVisibilityFactor=this.calculateOrbitalVisibility();const t=this.temperatureActivationFactor*this.orbitalVisibilityFactor;t>0?this.channelMeshes.forEach(i=>{const a=i.material;a.uniforms.time.value=s,a.uniforms.networkEmission.value=this.params.networkEmission*t,a.uniforms.pulseIntensity.value=this.params.pulseIntensity*t,i.visible=!0}):this.channelMeshes.forEach(i=>{i.visible=!1})}addToScene(n,e){e&&this.networkGroup.position.copy(e),n.add(this.networkGroup)}getObject3D(){return this.networkGroup}dispose(){this.channelMeshes.forEach(n=>{n.geometry.dispose(),n.material.dispose()}),this.networkGroup.clear(),this.nodes=[],this.connections=[],this.channelMeshes=[]}}function k(h,n,e){const s=h?.seeds?.planet_seed||Math.floor(Math.random()*1e6),t=h?.original_planet_data?.surface_temperature||0,i=h?.timing?.elapsed_time?h.timing.elapsed_time/(365.25*24*3600):0,a=h?.original_planet_data?.orbital_period_seconds?h.original_planet_data.orbital_period_seconds/(365.25*24*3600):1,r=h?.lava_rivers_data||{},o=new T(s+10001),l=r.cycle_duration_years||o.uniform(a*.3,a*.6),u={enabled:!1,cycle_duration_years:l,visible_duration_years:r.visible_duration_years||o.uniform(l*.6,l*.8)},d={seed:s+1e4,planetTemperature:t,orbitalData:u,currentTime:i,cosmicOriginTime:h?.timing?.cosmic_origin_time};return new v(n,d)}export{v as L,k as c};
