import{r as w,j as c,R as ai,V as gi,c as yi}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as xi}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Si,U as bi,m as st,c as Dt,a as _i}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as Ei,V as P,n as Ke,T as $e,Q as Yt,l as Gt,o as Te,R as wi,p as Ci,q as si,e as Me,r as U,s as ae,N as De,t as Be,c as Ue,C as v,u as ni,v as Re,d as ge,G as Oe,w as zt,x as ri,F as Pe,y as Rt,z as Lt,h as Ti,H as Pi,I as Mi,J as Qe,B as Ii,K as Wt,O as Ai,U as Ni,X as Di,L as Ot,g as Ft,Y as jt,Z as Je,M as li,_ as Ri,S as Li,P as Oi,W as Fi,$ as zi,a0 as ji,a1 as Ui,D as Ht,A as ki}from"./atlas_BBvg3trlEj92w4KqSeMf8.js";const Vi=({effects:s,onToggleEffect:e})=>{const[t,i]=w.useState(s),[o,a]=w.useState(!1);w.useEffect(()=>{i(s)},[s]);const r=(m,d)=>{i(n=>n.map(u=>u.id===m?{...u,enabled:d}:u)),e(m,d)},l=m=>m;return t.length===0?null:c.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("div",{className:"text-xs text-gray-400",children:"3D Effects Control"}),c.jsxs("button",{onClick:()=>a(!o),className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[o?"Hide":"Show"," (",t.filter(m=>m.enabled).length,"/",t.length,")"]})]}),o&&c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:t.map(m=>c.jsxs("div",{className:"bg-white/5 rounded p-2 flex items-center justify-between",children:[c.jsxs("label",{className:"flex items-center gap-2 cursor-pointer flex-1",children:[c.jsx("input",{type:"checkbox",checked:m.enabled,onChange:d=>r(m.id,d.target.checked),className:"rounded border-gray-400 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-white/10"}),c.jsx("span",{className:`${m.enabled?"text-white":"text-gray-500"} transition-colors`,children:l(m.type)})]}),c.jsx("span",{className:`text-[10px] ${m.enabled?"text-green-400":"text-gray-600"}`,children:m.enabled?"ON":"OFF"})]},m.id))}),o&&t.length>3&&c.jsxs("div",{className:"mt-2 flex gap-2",children:[c.jsx("button",{onClick:()=>{t.forEach(m=>r(m.id,!0))},className:"text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors",children:"Enable All"}),c.jsx("button",{onClick:()=>{t.forEach(m=>r(m.id,!1))},className:"text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors",children:"Disable All"})]})]})},Yi=({planet:s,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:o,effects:a,onToggleEffect:r})=>{const[l,m]=w.useState(!1),d=y=>y.replace(/_/g," "),n=y=>{const E=y/86400;return E<30?`${E.toFixed(2)} days`:E<365?`${(E/30).toFixed(2)} months`:`${(E/365).toFixed(2)} years`},u=y=>{const E=y*9/5+32;return`${y.toFixed(1)}°C (${E.toFixed(1)}°F)`},g=y=>`${y.toExponential(2)} kg`,p=y=>y>=1e3?`${(y/1e3).toFixed(2)} km`:`${y.toFixed(2)} m`;return c.jsxs("div",{className:"h-full flex flex-col relative",children:[c.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),c.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[c.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),c.jsx(Si,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[c.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[c.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),c.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),c.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[c.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),c.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),c.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[c.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),c.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),c.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[c.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),c.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[c.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[c.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),c.jsx("div",{className:"text-xs font-bold text-orange-300",children:g(s.mass)})]}),c.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[c.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),c.jsx("div",{className:"text-xs font-bold text-orange-300",children:p(s.diameter)})]}),c.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[c.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),c.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),c.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[c.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),c.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),c.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[c.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),c.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[c.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[c.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),c.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),c.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[c.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),c.jsx("div",{className:"text-xs font-bold text-cyan-300",children:n(s.orbital_period_seconds)})]}),c.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[c.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),c.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),c.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[c.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),c.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[c.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[c.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),c.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[c.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[c.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),c.jsx("div",{className:"text-xs font-bold text-red-300",children:u(s.surface_temperature)})]}),c.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[c.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),c.jsx("div",{className:"text-xs font-bold text-red-300",children:n(s.rotation_period_seconds)})]})]})]}),c.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&c.jsx("button",{onClick:()=>m(!l),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:l?"▲ Less":"▼ All"})]}),c.jsx("div",{className:"flex flex-wrap gap-1",children:(l?s.elements:s.elements.slice(0,4)).map((y,E)=>c.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:y},E))})]})]}),c.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[c.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),c.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[c.jsxs("div",{className:"bg-white/5 rounded p-2",children:[c.jsx("span",{className:"text-gray-400",children:"Status:"}),c.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),c.jsxs("div",{className:"bg-white/5 rounded p-2",children:[c.jsx("span",{className:"text-gray-400",children:"Planet:"}),c.jsx("div",{className:"text-white truncate font-medium",children:d(s.name)})]}),c.jsxs("div",{className:"bg-white/5 rounded p-2",children:[c.jsx("span",{className:"text-gray-400",children:"System:"}),c.jsx("div",{className:"text-white truncate font-medium",children:d(e.name)})]}),c.jsxs("div",{className:"bg-white/5 rounded p-2",children:[c.jsx("span",{className:"text-gray-400",children:"System ID:"}),c.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),c.jsxs("div",{className:"bg-white/5 rounded p-2",children:[c.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),c.jsx("div",{className:"text-white truncate font-medium",children:d(t.name)})]}),c.jsxs("div",{className:"bg-white/5 rounded p-2",children:[c.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),c.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]}),a&&r&&c.jsx(Vi,{effects:a,onToggleEffect:r})]})},Bt={type:"change"},Ut={type:"start"},ci={type:"end"},_t=new wi,Zt=new Ci,Gi=Math.cos(70*si.DEG2RAD),ve=new P,we=2*Math.PI,J={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mt=1e-6;class Wi extends Ei{constructor(e,t=null){super(e,t),this.state=J.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ke.ROTATE,MIDDLE:Ke.DOLLY,RIGHT:Ke.PAN},this.touches={ONE:$e.ROTATE,TWO:$e.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Yt,this._lastTargetPosition=new P,this._quat=new Yt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gt,this._sphericalDelta=new Gt,this._scale=1,this._panOffset=new P,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new P,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bi.bind(this),this._onPointerDown=Hi.bind(this),this._onPointerUp=Zi.bind(this),this._onContextMenu=eo.bind(this),this._onMouseWheel=Xi.bind(this),this._onKeyDown=Ki.bind(this),this._onTouchStart=Qi.bind(this),this._onTouchMove=Ji.bind(this),this._onMouseDown=qi.bind(this),this._onMouseMove=$i.bind(this),this._interceptControlDown=to.bind(this),this._interceptControlUp=io.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bt),this.update(),this.state=J.NONE}update(e=null){const t=this.object.position;ve.copy(t).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===J.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=we:i>Math.PI&&(i-=we),o<-Math.PI?o+=we:o>Math.PI&&(o-=we),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),t.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const l=ve.length();r=this._clampDistance(l*this._scale);const m=l-r;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),a=!!m}else if(this.object.isOrthographicCamera){const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=m!==this.object.zoom;const d=new P(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(l),this.object.updateMatrixWorld(),r=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(_t.origin.copy(this.object.position),_t.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_t.direction))<Gi?this.object.lookAt(this.target):(Zt.setFromNormalAndCoplanarPoint(this.object.up,this.target),_t.intersectPlane(Zt,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Mt||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mt||this._lastTargetPosition.distanceToSquared(this.target)>Mt?(this.dispatchEvent(Bt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?we/60*this.autoRotateSpeed*e:we/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ve.setFromMatrixColumn(t,0),ve.multiplyScalar(-e),this._panOffset.add(ve)}_panUp(e,t){this.screenSpacePanning===!0?ve.setFromMatrixColumn(t,1):(ve.setFromMatrixColumn(t,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(e),this._panOffset.add(ve)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;ve.copy(o).sub(this.target);let a=ve.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,r=i.width,l=i.height;this._mouse.x=o/r*2-1,this._mouse.y=-(a/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(we*this._rotateDelta.x/t.clientHeight),this._rotateUp(we*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(we*this._rotateDelta.x/t.clientHeight),this._rotateUp(we*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,l=(e.pageY+t.y)*.5;this._updateZoomParameters(r,l)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Hi(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Bi(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Zi(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ci),this.state=J.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qi(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=J.DOLLY;break;case Ke.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=J.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=J.ROTATE}break;case Ke.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=J.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=J.PAN}break;default:this.state=J.NONE}this.state!==J.NONE&&this.dispatchEvent(Ut)}function $i(s){switch(this.state){case J.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case J.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case J.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Xi(s){this.enabled===!1||this.enableZoom===!1||this.state!==J.NONE||(s.preventDefault(),this.dispatchEvent(Ut),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ci))}function Ki(s){this.enabled!==!1&&this._handleKeyDown(s)}function Qi(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case $e.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=J.TOUCH_ROTATE;break;case $e.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=J.TOUCH_PAN;break;default:this.state=J.NONE}break;case 2:switch(this.touches.TWO){case $e.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=J.TOUCH_DOLLY_PAN;break;case $e.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=J.TOUCH_DOLLY_ROTATE;break;default:this.state=J.NONE}break;default:this.state=J.NONE}this.state!==J.NONE&&this.dispatchEvent(Ut)}function Ji(s){switch(this._trackPointer(s),this.state){case J.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case J.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case J.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case J.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=J.NONE}}function eo(s){this.enabled!==!1&&s.preventDefault()}function to(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function io(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class qt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class mi{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:o,ring_outer_radius:a,tilt_factor:r,planet_radius:l,shape_seed:m}=e;if(!t||!i){console.warn("No ring data provided");return}const d=[...t.particles,...i.particles],n=d.length,u=new qt(m||12345),g=new Me,p=new Float32Array(n*3),y=new Float32Array(n*3),E=new Float32Array(n),b=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],h=u.choice(b);for(let f=0;f<n;f++){const N=d[f],T=this.planetRadius/(l||200),C=(m||12345)+f,M=new qt(C),j=N.distance*T,O=N.angle,z=j*Math.sin(O),Z=Math.asin((r||.2)*.5),_=z*Math.sin(Z),k=z*Math.cos(Z),V=((a||400)-(o||200))*T*.4,G=M.uniform(-V*.8,V*.8),ee=M.uniform(-V*.3,V*.3),q=M.uniform(-.08,.08),K=j+ee,A=O+q;p[f*3]=K*Math.cos(A),p[f*3+1]=_+G+this.planetRadius*.15,p[f*3+2]=k+M.uniform(-V*.4,V*.4),N.color[0]/255;const L=(N.distance-(o||200))/((a||400)-(o||200)),$=h.baseGray,te=h.variation,ye=M.uniform(-te,te),ie=Math.max(.12,Math.min(.45,$+ye)),xe=.8+L*.4,_e=M.uniform(.85,1.15),Ce=M.uniform(0,1),Ee=Ce<.03?M.uniform(1.1,1.3):1,Ie=ie*xe*_e*Ee,fe=Math.max(.1,Math.min(.55,Ie));y[f*3]=fe,y[f*3+1]=fe,y[f*3+2]=fe;const Fe=.15,Ae=M.uniform(.3,.7),he=Ce<.1?M.uniform(1.05,1.2):1;E[f]=N.size*Fe*Ae*he}g.setAttribute("position",new U(p,3)),g.setAttribute("color",new U(y,3)),g.setAttribute("size",new U(E,1)),this.material=new ae({uniforms:{brightness:{value:2.2}},vertexShader:`
        attribute float size;
        varying vec3 vColor;
        varying float vDistance;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDistance = -mvPosition.z;
          
          // Dynamic size based on distance - very small particles
          gl_PointSize = size * (100.0 / vDistance); // Partículas muy pequeñas
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float brightness;
        varying vec3 vColor;
        varying float vDistance;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float distance = length(center);
          
          if (distance > 0.5) discard;
          
          // Create soft circular particle with gentle falloff
          float alpha = (1.0 - distance * 2.0);
          alpha = smoothstep(0.0, 1.0, alpha);
          
          // Add subtle glow effect
          float glow = 1.0 - distance;
          glow = pow(glow, 1.5);
          
          // No sparkle animation - colors should be static
          // Final color with brightness and glow (no time-based changes)
          vec3 finalColor = vColor * brightness * glow;
          
          // Distance-based alpha fade for depth
          float depthAlpha = clamp(200.0 / vDistance, 0.3, 1.0);
          
          gl_FragColor = vec4(finalColor, alpha * depthAlpha);
        }
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:De}),this.ringSystem=new Be(g,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,o=t.cosmicOriginTime||Date.now()/1e3,a=t.initialAngleRotation||0,l=Date.now()/1e3-o,m=2*Math.PI/i,d=(a+l*m)%(2*Math.PI);this.ringSystem.rotation.y=d}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function oo(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new mi(e,t)}class rt{mesh;material;geometry;params;static vertexShader=`
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    uniform vec3 atmosphereColor;
    uniform float atmosphereOpacity;
    uniform float fresnelPower;
    
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      
      float fresnel = pow(1.0 - abs(dot(normal, viewDir)), fresnelPower);
      
      
      vec3 color = atmosphereColor;
      
      
      float alpha = fresnel * atmosphereOpacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new Ue(i,32,32);const o=new v(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ae({vertexShader:rt.vertexShader,fragmentShader:rt.fragmentShader,uniforms:{atmosphereColor:{value:o},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Re,side:ni,depthWrite:!1}),this.mesh=new ge(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new v(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function ao(s,e){let t=[.7,.7,.7,.15],i=12;if(e){if(e.color&&Array.isArray(e.color)){const a=e.color;t=[a[0],a[1],a[2],(a[3]||.15)*.7]}e.width&&(i=e.width)}const o={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new rt(s,o)}class D{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,i=Math.acos(this.random()*2-1);return{x:e*Math.sin(i)*Math.cos(t),y:e*Math.sin(i)*Math.sin(t),z:e*Math.cos(i)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const W={PARTICLE_COUNT:{min:25,max:150},SPEED:{min:.05,max:.5},SIZE:{min:.3,max:1.5},OPACITY:{min:.1,max:.3},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05},TIME_SPEED:{min:.1,max:3}};class lt{particleSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
    attribute float size;
    attribute vec3 customColor;
    attribute float speed;
    attribute float phase;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    
    uniform float time;
    uniform float turbulence;
    uniform float movementAmplitude;
    
    void main() {
      vColor = customColor;
      vSize = size;
      
      // Movimiento de las partículas con turbulencia
      vec3 pos = position;
      float timeWithPhase = time * speed + phase;
      
      pos.x += sin(timeWithPhase) * movementAmplitude * turbulence;
      pos.y += cos(timeWithPhase * 0.7) * (movementAmplitude * 0.5) * turbulence;
      pos.z += sin(timeWithPhase * 0.5) * (movementAmplitude * 0.8) * turbulence;
      
      // Fade basado en la posición y tiempo
      float distanceFromCenter = length(pos.xy) / 2.0;
      vAlpha = (1.0 - distanceFromCenter) * (0.5 + 0.5 * sin(timeWithPhase * 2.0));
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    
    void main() {
      // Crear forma de estela alargada
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      // Estela con forma más dinámica
      float streak = 1.0 - smoothstep(0.0, 0.5, dist);
      float elongation = 1.0 - smoothstep(0.0, 0.3, abs(uv.x));
      streak *= elongation;
      
      // Añadir variación basada en el tamaño
      float sizeVariation = vSize > 1.5 ? 1.2 : 0.8;
      streak *= sizeVariation;
      
      gl_FragColor = vec4(vColor, streak * vAlpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);this.startTime=t.startTime||i%1e4/1e3,this.params={color:t.color||new v(16777215),particleCount:t.particleCount||Math.floor(o.uniform(W.PARTICLE_COUNT.min,W.PARTICLE_COUNT.max)),speed:t.speed||o.uniform(W.SPEED.min,W.SPEED.max),size:t.size||o.uniform(W.SIZE.min,W.SIZE.max),opacity:t.opacity||o.uniform(W.OPACITY.min,W.OPACITY.max),turbulence:t.turbulence||o.uniform(W.TURBULENCE.min,W.TURBULENCE.max),rotationSpeed:t.rotationSpeed||o.uniform(W.ROTATION_SPEED.min,W.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||o.uniform(W.MOVEMENT_AMPLITUDE.min,W.MOVEMENT_AMPLITUDE.max),timeSpeed:t.timeSpeed||o.uniform(W.TIME_SPEED.min,W.TIME_SPEED.max),seed:i,startTime:this.startTime},this.particleCount=this.params.particleCount,this.geometry=new Me,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new Be(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),l=this.params.color instanceof v?this.params.color:new v(this.params.color),m=this.params.seed||Math.floor(Math.random()*1e6),d=new D(m);for(let n=0;n<this.particleCount;n++){const u=d.spherePosition(e*d.uniform(1,1.1));t[n*3]=u.x,t[n*3+1]=u.y,t[n*3+2]=u.z;const g=d.colorVariation({r:l.r,g:l.g,b:l.b});i[n*3]=g.r,i[n*3+1]=g.g,i[n*3+2]=g.b,o[n]=this.params.size*d.uniform(.75,1.25),a[n]=this.params.speed*d.uniform(.6,1.4),r[n]=d.random()*Math.PI*2}this.geometry.setAttribute("position",new U(t,3)),this.geometry.setAttribute("customColor",new U(i,3)),this.geometry.setAttribute("size",new U(o,1)),this.geometry.setAttribute("speed",new U(a,1)),this.geometry.setAttribute("phase",new U(r,1))}createMaterial(){return new ae({vertexShader:lt.vertexShader,fragmentShader:lt.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:Re,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.particleSystem.rotation.y=i*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function $t(s,e,t){const i=e.streaks||{},o=t||Math.floor(Math.random()*1e6),a=new D(o+3e3),r=i.count||Math.floor(a.uniform(W.PARTICLE_COUNT.min,W.PARTICLE_COUNT.max)),l=i.speed||a.uniform(W.SPEED.min,W.SPEED.max),m=a.uniform(W.SIZE.min,W.SIZE.max),d=a.uniform(W.OPACITY.min,W.OPACITY.max),n=a.uniform(W.TURBULENCE.min,W.TURBULENCE.max),u=a.uniform(W.ROTATION_SPEED.min,W.ROTATION_SPEED.max),g=a.uniform(W.MOVEMENT_AMPLITUDE.min,W.MOVEMENT_AMPLITUDE.max),p=a.uniform(W.TIME_SPEED.min,W.TIME_SPEED.max),y={color:i.color?new v().setRGB(i.color[0],i.color[1],i.color[2]):new v(16777215),particleCount:r,speed:l,size:m,opacity:d,turbulence:n,seed:o,rotationSpeed:u,movementAmplitude:g,timeSpeed:p};return new lt(s,y)}const H={CLOUD_COUNT:{min:15,max:30},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.9},DENSITY:{min:.5,max:2},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},PUFFINESS:{min:1,max:1.4},TIME_SPEED:{min:.1,max:3}};class et{cloudSystem;material;params;cloudCount;clouds=[];startTime;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float movementAmplitude;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      // Posición del mundo para efectos de ruido
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Movimiento sutil de las nubes
      vec3 pos = position;
      pos += sin(time * 0.1 + worldPosition.x * 0.01) * movementAmplitude * 0.1;
      pos += cos(time * 0.08 + worldPosition.z * 0.01) * movementAmplitude * 0.1;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static fragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float opacity;
    uniform vec3 cloudColor;
    uniform float density;
    uniform vec2 noiseOffset;
    uniform float shapeVariation;
    uniform vec3 lightDirection; // Del sistema PlanetLayerSystem
    uniform vec3 lightPosition; // Del sistema PlanetLayerSystem
    
    // Función de ruido Perlin simplificada para nubes
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 0.0;
      
      for (int i = 0; i < 4; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      // TÉCNICA BILLBOARD VOLUMÉTRICA CON SOFT PARTICLES
      
      // Distancia radial del centro para forma circular suave
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      
      // Máscara circular con bordes súper suaves (soft particles)
      float circularMask = 1.0 - smoothstep(0.1, 0.5, distFromCenter);
      
      // Ruido volumétrico para textura de nube realista
      vec2 noiseUv1 = vUv * 4.0 + noiseOffset + time * 0.008;
      float noise1 = fbm(noiseUv1) * 0.7;
      
      vec2 noiseUv2 = vUv * 8.0 + noiseOffset * 1.3 + time * 0.005;
      float noise2 = fbm(noiseUv2) * 0.5;
      
      vec2 noiseUv3 = vUv * 16.0 + noiseOffset * 2.1 + time * 0.003;
      float noise3 = fbm(noiseUv3) * 0.3;
      
      // Combinar múltiples octavas de ruido
      float cloudNoise = noise1 + noise2 + noise3;
      cloudNoise = smoothstep(0.2, 1.0, cloudNoise);
      
      // Aplicar máscara circular para bordes suaves
      float baseCloud = cloudNoise * circularMask * density;
      
      // Función de densidad que baja en los bordes (soft particles)
      float densityFalloff = pow(circularMask, 1.5);
      
      // Aplicar técnica de soft particles para bordes suaves
      float finalCloud = baseCloud * densityFalloff;
      
      // Gamma correction para mayor suavidad
      finalCloud = pow(finalCloud, 0.8);
      
      // Color de nube realista con variaciones naturales
      vec3 finalColor = cloudColor;
      
      // Variación de color como nubes reales (centro más blanco, bordes más grises)
      float colorVariation = 1.0 - distFromCenter * 0.3;
      finalColor *= colorVariation;
      
      // Sombreado súper sutil y realista
      float lightIntensity = dot(vNormal, normalize(vec3(0.8, 1.0, 0.6))) * 0.15 + 0.85;
      finalColor *= lightIntensity;
      
      // Transparencia con falloff natural como nubes reales
      float alpha = finalCloud * opacity;
      alpha *= (1.0 - distFromCenter * 0.5); // Más transparente en los bordes
      
      // USAR LA LUZ REAL DEL SISTEMA PERO CON NORMAL PLANETARIA
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
      }
      
      // CRÍTICO: Usar la normal planetaria, NO la normal de la superficie de la nube
      // Para determinar qué lado del PLANETA está iluminado
      vec3 planetNormal = normalize(vWorldPosition); // Normal desde centro del planeta
      float dotNL = dot(planetNormal, lightDir);
      
      // Transición suave de opacidad (de 1.0 a 0.3)
      float lightFactor = smoothstep(-0.2, 0.2, dotNL);
      alpha *= mix(0.3, 1.0, lightFactor);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);this.startTime=t.startTime||i%1e4/1e3,this.params={color:t.color||new v(16777215),cloudCount:t.cloudCount||Math.floor(o.uniform(H.CLOUD_COUNT.min,H.CLOUD_COUNT.max)),size:t.size||o.uniform(H.SIZE.min,H.SIZE.max),opacity:t.opacity||o.uniform(H.OPACITY.min,H.OPACITY.max),density:t.density||o.uniform(H.DENSITY.min,H.DENSITY.max),rotationSpeed:t.rotationSpeed||o.uniform(H.ROTATION_SPEED.min,H.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||o.uniform(H.MOVEMENT_AMPLITUDE.min,H.MOVEMENT_AMPLITUDE.max),puffiness:t.puffiness||o.uniform(H.PUFFINESS.min,H.PUFFINESS.max),timeSpeed:t.timeSpeed||o.uniform(H.TIME_SPEED.min,H.TIME_SPEED.max),seed:i,startTime:this.startTime},this.cloudCount=this.params.cloudCount,this.cloudSystem=new Oe,this.material=this.createMaterial(),this.generateClouds(e)}generateClouds(e){const t=this.params.color instanceof v?this.params.color:new v(this.params.color),i=this.params.seed||Math.floor(Math.random()*1e6),o=new D(i),a=this.params.cloudsFromPython;for(let r=0;r<this.cloudCount;r++){let l,m,d,n=t,u=this.params.size*o.uniform(.8,1.2);if(a&&r<a.length){const z=a[r];l=z.position[0]*e*1.04,m=z.position[1]*e*1.04,d=z.position[2]*e*1.04,z.color&&(n=new v().setRGB(z.color[0],z.color[1],z.color[2])),u=z.radius*e*.8}else{const z=o.uniform(0,2*Math.PI),Z=o.uniform(-1,1),_=Math.acos(Z),k=e*o.uniform(1.02,1.06);l=k*Math.sin(_)*Math.cos(z),m=k*Math.sin(_)*Math.sin(z),d=k*Math.cos(_)}const g=u*o.uniform(.3,.8),p=Math.max(8,Math.floor(g*15)),y=new zt(g*2,g*2,p,p),E=new P(l,m,d);new P(0,0,0);const b=E.clone().normalize(),h=new P,f=new P;Math.abs(b.y)<.99?h.crossVectors(b,new P(0,1,0)).normalize():h.crossVectors(b,new P(1,0,0)).normalize(),f.crossVectors(b,h).normalize();const N=new ri;N.makeBasis(h,f,b);const T=y.attributes.position,C=new P,M=Math.sqrt(l*l+m*m+d*d);y.applyMatrix4(N);for(let z=0;z<T.count;z++){C.fromBufferAttribute(T,z);const V=C.clone().add(E).clone().normalize().multiplyScalar(M).sub(E);T.setXYZ(z,V.x,V.y,V.z)}T.needsUpdate=!0,y.computeVertexNormals(),y.translate(l,m,d);const j=this.material.clone();j.uniforms.cloudColor.value=n,j.uniforms.density.value=this.params.density*o.uniform(.8,1.2),j.uniforms.noiseOffset.value=new Te(o.uniform(0,100),o.uniform(0,100)),j.uniforms.shapeVariation.value=o.uniform(-1,1),j.uniforms.lightDirection.value=this.material.uniforms.lightDirection.value.clone(),j.uniforms.lightPosition.value=this.material.uniforms.lightPosition.value.clone();const O=new ge(y,j);O.userData.isAtmosphericCloud=!0,O.userData.planetNormal=b.clone(),this.clouds.push(O),this.cloudSystem.add(O)}}createMaterial(){return new ae({vertexShader:et.vertexShader,fragmentShader:et.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},cloudColor:{value:new v(16777215)},density:{value:this.params.density},noiseOffset:{value:new Te(0,0)},shapeVariation:{value:0},lightDirection:{value:new P(1,1,1).normalize()},lightPosition:{value:new P(0,0,0)}},transparent:!0,blending:De,depthWrite:!1,side:Pe})}addToScene(e,t){t&&this.cloudSystem.position.copy(t),e.add(this.cloudSystem)}update(e,t){const o=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.clouds.forEach(a=>{const r=a.material;r.uniforms.time.value=o}),this.cloudSystem.rotation.y=o*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},this.clouds.forEach(t=>{const i=t.material;e.opacity!==void 0&&(i.uniforms.opacity.value=e.opacity),e.movementAmplitude!==void 0&&(i.uniforms.movementAmplitude.value=e.movementAmplitude)})}updateLightPosition(e){this.clouds.forEach(t=>{const i=t.material;i.uniforms.lightPosition&&i.uniforms.lightPosition.value.copy(e)})}updateLightDirection(e){this.clouds.forEach(t=>{const i=t.material;i.uniforms.lightDirection&&i.uniforms.lightDirection.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function at(s,e,t){const i=e.clouds||[];if(i.length===0){const l=t||Math.floor(Math.random()*1e6),m=new D(l+4e3),d={color:new v(1,1,1),cloudCount:15,size:.6,opacity:.7,density:.8,seed:l,rotationSpeed:.005,movementAmplitude:.02,puffiness:1.5,timeSpeed:m.uniform(H.TIME_SPEED.min,H.TIME_SPEED.max)};return new et(s,d)}const o=t||Math.floor(Math.random()*1e6),a=new D(o+4e3),r={color:new v(16777215),cloudCount:i.length,size:a.uniform(H.SIZE.min,H.SIZE.max),opacity:a.uniform(H.OPACITY.min,H.OPACITY.max),density:a.uniform(H.DENSITY.min,H.DENSITY.max),seed:o,rotationSpeed:a.uniform(H.ROTATION_SPEED.min,H.ROTATION_SPEED.max),movementAmplitude:a.uniform(H.MOVEMENT_AMPLITUDE.min,H.MOVEMENT_AMPLITUDE.max),puffiness:a.uniform(H.PUFFINESS.min,H.PUFFINESS.max),timeSpeed:a.uniform(H.TIME_SPEED.min,H.TIME_SPEED.max),cloudsFromPython:i};return new et(s,r)}class kt{landGroup;lands=[];constructor(e,t={}){this.landGroup=new Oe;const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);t.greenPatches&&t.greenPatches.length>0?this.generateLandsFromPython(e,t.greenPatches,o,t):this.generateProceduralLands(e,o,t)}generateLandsFromPython(e,t,i,o){t.forEach((a,r)=>{let l=a.position_3d||a.position||[0,0,1];if(l.length===2){const A=i.uniform(0,Math.PI*2),F=Math.acos(i.uniform(-1,1));l=[Math.sin(F)*Math.cos(A),Math.sin(F)*Math.sin(A),Math.cos(F)]}const m=(a.size||.1)*e*1.8;Math.max(8,Math.min(a.sides||20,12));let d=new v(4881497),n=1;a.color&&Array.isArray(a.color)&&(d=new v(a.color[0],a.color[1],a.color[2]),a.color.length>3&&(n=a.color[3]));const u=Math.max(24,Math.min(64,Math.floor(m*32))),g=new P(l[0],l[1],l[2]).normalize(),p=new P,y=new P;Math.abs(g.y)<.99?p.crossVectors(g,new P(0,1,0)).normalize():p.crossVectors(g,new P(1,0,0)).normalize(),y.crossVectors(g,p).normalize();const E=2/Math.max(m*.05,1),b=(A,F)=>{let L=0,$=1,te=E,ye=0;const ie=Math.min(5,Math.max(3,Math.floor(m/40)+2));for(let xe=0;xe<ie;xe++){const _e=A*te,Ce=F*te,Ee=(Ne,St)=>{const ot=Ne*12.9898+St*78.233;return Math.sin(ot+i.uniform(0,1e3))*43758.5453%1},Ie=Math.floor(_e),fe=Math.floor(Ce),Fe=_e-Ie,Ae=Ce-fe,he=Ne=>Ne*Ne*Ne*(Ne*(Ne*6-15)+10),ze=he(Fe),Ye=he(Ae),tt=Ee(Ie,fe),it=Ee(Ie+1,fe),xt=Ee(Ie,fe+1),Ge=Ee(Ie+1,fe+1),ke=tt*(1-ze)+it*ze,Tt=xt*(1-ze)+Ge*ze,Ze=ke*(1-Ye)+Tt*Ye;L+=Ze*$,ye+=$,$*=.5,te*=2.2}return L/ye},h=[],f=[],N=[],T=.35,C=new Map,M=new Map;let j=0;for(let A=0;A<=u;A++)for(let F=0;F<=u;F++){const L=(A/u-.5)*2,$=(F/u-.5)*2,te=Math.sqrt(L*L+$*$),ye=b(L*2,$*2);if(1-te*.5+ye*.6>T&&te<1.2){const xe=L*m,_e=$*m,Ee=new P().addScaledVector(p,xe).addScaledVector(y,_e).addScaledVector(g,0);h.push(Ee.x,Ee.y,Ee.z),N.push((L+1)*.5,($+1)*.5),C.set(`${A},${F}`,j),M.set(`${A},${F}`,ye),j++}}for(let A=0;A<u;A++)for(let F=0;F<u;F++){const L=C.get(`${A},${F}`),$=C.get(`${A+1},${F}`),te=C.get(`${A},${F+1}`),ye=C.get(`${A+1},${F+1}`);L!==void 0&&$!==void 0&&te!==void 0&&f.push(L,$,te),$!==void 0&&ye!==void 0&&te!==void 0&&f.push($,ye,te)}const O=new Me;O.setAttribute("position",new Rt(h,3)),O.setAttribute("uv",new Rt(N,2)),O.setIndex(f),O.computeVertexNormals();const z=O.attributes.position,Z=g.clone().multiplyScalar(e),_=new P;for(let A=0;A<z.count;A++){_.fromBufferAttribute(z,A);const L=_.clone().add(Z).clone().normalize(),$=O.attributes.uv;if($){const te=$.getX(A)*2-1,ye=$.getY(A)*2-1,ie=Math.sqrt(te*te+ye*ye),xe=b(te*2,ye*2),Ce=Math.max(0,1-Math.pow(ie,.7))*.5+xe*.5,Ie=(ke=>ke*ke*(3-2*ke))(Ce),Fe=e*1.01-e,Ae=m*.15,he=Math.min(Ae,Fe*.9),ze=e*.002,Ye=e+ze,tt=e+ze+he,it=si.lerp(Ye,tt,Ie),Ge=L.multiplyScalar(it).sub(Z);z.setXYZ(A,Ge.x,Ge.y,Ge.z)}}z.needsUpdate=!0,O.computeVertexNormals(),O.translate(Z.x,Z.y,Z.z);const k=new Lt({color:o.transparentMode?new v(15135743):d,opacity:o.transparentMode?.3:n,transparent:o.transparentMode||n<1,emissive:o.transparentMode?new v(13428479).multiplyScalar(.1):d.clone().multiplyScalar(.05),emissiveIntensity:o.transparentMode?.05:1e-7,shininess:o.transparentMode?30:8,flatShading:!1,bumpScale:.002}),V=document.createElement("canvas");V.width=V.height=64;const G=V.getContext("2d"),ee=G.createImageData(64,64);for(let A=0;A<ee.data.length;A+=4){const F=i.uniform(.8,1.2),L=Math.floor(128*F);ee.data[A]=L,ee.data[A+1]=L,ee.data[A+2]=L,ee.data[A+3]=255}G.putImageData(ee,0,0);const q=new Ti(V);q.wrapS=q.wrapT=Pi,q.repeat.set(2,2),k.bumpMap=q;const K=new ge(O,k);K.castShadow=!0,K.receiveShadow=!0,this.lands.push(K),this.landGroup.add(K)})}generateProceduralLands(e,t,i){const o=Math.floor(t.uniform(5,15));for(let a=0;a<o;a++){const r=t.uniform(0,Math.PI*2),l=Math.acos(t.uniform(-1,1)),m=new P(Math.sin(l)*Math.cos(r),Math.sin(l)*Math.sin(r),Math.cos(l)),d=e*t.uniform(.02,.08),n=new Mi(d,16),u=m.clone().multiplyScalar(e*1);n.lookAt(m),n.translate(u.x,u.y,u.z);const g=t.uniform(.3,.7),p=new v(.36*(1-g)+.22*g,.23*(1-g)+.36*g,0),E=i.tundraMode||!1?.25:1,b=new Lt({color:i.transparentMode?new v(15135743):p,opacity:i.transparentMode?.3:E,transparent:i.transparentMode||E<1,emissive:i.transparentMode?new v(13428479).multiplyScalar(.1):657920,shininess:i.transparentMode?30:5}),h=new ge(n,b);this.lands.push(h),this.landGroup.add(h)}}addToScene(e,t){t&&this.landGroup.position.copy(t),e.add(this.landGroup)}update(e){}getObject3D(){return this.landGroup}dispose(){this.lands.forEach(e=>{e.geometry.dispose(),e.material instanceof Qe&&e.material.dispose()}),this.lands=[],this.landGroup.clear()}}function It(s,e,t){const i=e.green_patches;if(!i||i.length===0)return null;const o=t||Math.floor(Math.random()*1e6);return new kt(s,{greenPatches:i,seed:o+6e3})}function so(s,e,t){const i=t||Math.floor(Math.random()*1e6),o=new D(i+7e3),a=Math.floor(o.uniform(3,8)),r=[];for(let l=0;l<a;l++){const m=o.uniform(0,Math.PI*2),d=Math.acos(o.uniform(-1,1));r.push({position_3d:[Math.sin(d)*Math.cos(m),Math.sin(d)*Math.sin(m),Math.cos(d)],size:o.uniform(.05,.15),sides:Math.floor(o.uniform(8,16)),color:[0,0,0]})}return console.log(`🧊 Creating ${a} transparent ice formations for Icy planet with seed ${i+7e3}`),new kt(s,{greenPatches:r,seed:i+7e3,transparentMode:!0})}class no{featuresGroup;crystals=[];cracks=[];iceCaps=[];planetRadius;constructor(e,t={}){this.featuresGroup=new Oe,this.planetRadius=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);t.crystals&&t.crystals.length>0&&this.generateCrystals(t.crystals,o),t.cracks&&t.cracks.length>0&&this.generateCracks(t.cracks),t.iceCaps&&t.iceCaps.length>0&&this.generateIceCaps(t.iceCaps,o)}generateCrystals(e,t){e.forEach(i=>{const o=i.position||[0,0],a=(i.width||.05)*this.planetRadius*.8,r=(i.length||.1)*this.planetRadius*.08,l=i.angle||0,m=i.color||[172/255,215/255,230/255,1],d=this.planetRadius*.015,n=Math.max(r,d),u=new Ii(a*2,n,a*1.5,4,2,4),g=u.attributes.position,p=new P;for(let q=0;q<g.count;q++){if(p.fromBufferAttribute(g,q),Math.abs(p.y)>n*.3){const K=Math.atan2(p.z,p.x),A=Math.sqrt(p.x*p.x+p.z*p.z),F=Math.round(K/(Math.PI/3))*(Math.PI/3),L=t.uniform(.8,1.2),$=A*L;p.x=Math.cos(F)*$,p.z=Math.sin(F)*$,p.y+=t.uniform(-n*.1,n*.1)}g.setXYZ(q,p.x,p.y,p.z)}g.needsUpdate=!0,u.computeVertexNormals();const y=new Wt({color:new v(m[0],m[1],m[2]),transparent:!0,opacity:.8,metalness:0,roughness:.02,clearcoat:1,clearcoatRoughness:0,transmission:.7,ior:1.31,thickness:.5,emissive:new v(m[0],m[1],m[2]),emissiveIntensity:.02,flatShading:!1,side:Pe}),E=new ge(u,y);let b=Math.min(1,Math.max(-1,o[1]));const h=Math.pow(Math.abs(b),.3),f=Math.sign(b)*h,N=t.uniform(-.3,.3)*(1-Math.abs(f)),T=Math.min(1,Math.max(-1,f+N)),C=Math.acos(Math.abs(T)),M=Math.atan2(o[0],.001)+l,j=this.planetRadius*t.uniform(1.0005,1.001),O=j*Math.sin(C)*Math.cos(M),z=j*T,Z=j*Math.sin(C)*Math.sin(M);E.position.set(O,z,Z);const _=E.position.clone().normalize(),k=new P,V=new P;Math.abs(_.x)<.9?k.set(1,0,0):k.set(0,1,0),k.crossVectors(k,_).normalize(),V.crossVectors(_,k).normalize();const G=new ri;G.makeBasis(k,_,V),E.rotation.setFromRotationMatrix(G),E.rotateY(t.uniform(0,Math.PI*2));const ee=t.uniform(.8,1.2);E.scale.set(ee,ee,ee),this.crystals.push(E),this.featuresGroup.add(E)})}generateCracks(e){const t=new D(42);e.forEach(i=>{const o=i.angle||0,a=(i.length||1)*this.planetRadius*2,r=i.color||[80/255,80/255,80/255,.4],l=(i.width||1)*5e-4*this.planetRadius,m=t.uniform(.6,1),d=t.uniform(0,1)>.5?1:-1,n=Math.acos(m*d),u=[],g=20;for(let h=0;h<=g;h++){const f=h/g,N=Math.sin(f*Math.PI)*.1,C=o+(f-.5)*a/(this.planetRadius*Math.sin(Math.abs(n)))+N,M=this.planetRadius*1.002*Math.sin(Math.abs(n))*Math.cos(C),j=this.planetRadius*1.002*Math.cos(Math.abs(n))*d,O=this.planetRadius*1.002*Math.sin(Math.abs(n))*Math.sin(C);u.push(new P(M,j,O))}const p=new Ai(u),y=new Ni(p,g*2,l,8,!1),E=new Lt({color:new v(r[0],r[1],r[2]),transparent:!0,opacity:r[3]||.4,emissive:new v(0,0,0),shininess:5}),b=new ge(y,E);this.cracks.push(b),this.featuresGroup.add(b)})}generateIceCaps(e,t){e.forEach(i=>{const o=i.position||[0,0],a=(i.radius||.3)*this.planetRadius,r=i.color||[.678,.847,1,.8],l=Math.atan2(o[1],o[0]),m=Math.acos(Math.min(1,Math.max(-1,Math.sqrt(o[0]**2+o[1]**2)))),d=this.planetRadius*1.002*Math.sin(m)*Math.cos(l),n=this.planetRadius*1.002*Math.cos(m),u=this.planetRadius*1.002*Math.sin(m)*Math.sin(l),g=new P(d,n,u),p=g.clone().normalize(),y=new Oe,E=Math.floor(t.uniform(8,20));for(let b=0;b<E;b++){const h=t.uniform(0,Math.PI*2),f=t.uniform(0,a*.8),N=Math.cos(h)*f,T=Math.sin(h)*f,C=new P,M=new P;Math.abs(p.y)<.99?C.crossVectors(p,new P(0,1,0)).normalize():C.crossVectors(p,new P(1,0,0)).normalize(),M.crossVectors(p,C).normalize();const z=g.clone().addScaledVector(C,N).addScaledVector(M,T).normalize().multiplyScalar(this.planetRadius*t.uniform(1.002,1.008)),Z=t.uniform(a*.05,a*.15),_=t.uniform(Z*.4,Z*4),k=new Di(Z,_,6,1,!1),V=k.attributes.position,G=new P;for(let A=0;A<V.count;A++)if(G.fromBufferAttribute(V,A),G.y>.1&&G.y<_*.9){const F=Math.atan2(G.z,G.x),L=Math.sqrt(G.x*G.x+G.z*G.z),$=Math.round(F/(Math.PI/3))*(Math.PI/3),te=L*1.1;G.x=Math.cos($)*te,G.z=Math.sin($)*te,V.setXYZ(A,G.x,G.y,G.z)}V.needsUpdate=!0,k.computeVertexNormals();const ee=new Wt({color:new v(r[0],r[1],r[2]),transparent:!0,opacity:.85,metalness:0,roughness:.05,clearcoat:1,clearcoatRoughness:0,transmission:.6,ior:1.31,thickness:.8,emissive:new v(r[0],r[1],r[2]),emissiveIntensity:.03,flatShading:!0,side:Pe}),q=new ge(k,ee);q.position.copy(z),q.lookAt(0,0,0),q.rotateX(Math.PI/2),q.rotateZ(t.uniform(0,Math.PI*2));const K=t.uniform(.7,1.3);q.scale.set(K,K,K),y.add(q),this.iceCaps.push(q)}this.featuresGroup.add(y)})}addToScene(e,t){t&&this.featuresGroup.position.copy(t),e.add(this.featuresGroup)}update(){}getObject3D(){return this.featuresGroup}dispose(){this.crystals.forEach(e=>{e.geometry.dispose(),e.material instanceof Qe&&e.material.dispose()}),this.cracks.forEach(e=>{e.geometry.dispose(),e.material instanceof Qe&&e.material.dispose()}),this.iceCaps.forEach(e=>{e.geometry.dispose(),e.material instanceof Qe&&e.material.dispose()}),this.crystals=[],this.cracks=[],this.iceCaps=[],this.featuresGroup.clear()}}function Xt(s,e,t){const i=e.crystals,o=e.cracks,a=e.ice_caps;if(!i&&!o&&!a)return null;const r=t||Math.floor(Math.random()*1e6);return new no(s,{crystals:i||[],cracks:o||[],iceCaps:a||[],seed:r+9e3})}class di{snowflakeGroup;planetRadius;materials=[];particleSystems=[];trailPositions=[];trailColors=[];globalWindDirection;rng;startTime;timeSpeed;trailLength=15;particleCount;rotationSpeed;particleOpacity;windSpeedMultiplier;verticalOscillation;gustCycles;gustPhases;gustZones;burstZone;burstCycleDuration;burstDuration;burstStartOffset;constructor(e,t={}){this.snowflakeGroup=new Oe,this.planetRadius=e;const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new D(i),this.particleCount=t.particleCount||10,t.windSpeed;const o=(t.size||1)*(e*.2),a=t.opacity||1;this.globalWindDirection=this.rng.uniform(0,Math.PI*2),this.startTime=this.rng.uniform(0,1e3),this.timeSpeed=this.rng.uniform(2,4),this.rotationSpeed=this.rng.uniform(.2,.8),this.particleOpacity=this.rng.uniform(.05,.25),this.windSpeedMultiplier=this.rng.uniform(1.1,2.5),this.verticalOscillation=this.rng.uniform(.1,.4),this.gustCycles=[],this.gustPhases=[],this.gustZones=[];for(let l=0;l<this.particleCount;l++){this.gustCycles.push(this.rng.uniform(15,30)),this.gustPhases.push(this.rng.uniform(0,1));const m=this.rng.uniform(0,Math.PI*2),d=this.rng.uniform(Math.PI*.3,Math.PI*.6);this.gustZones.push({start:m,end:(m+d)%(Math.PI*2)})}this.burstZone={lat:this.rng.uniform(-Math.PI/3,Math.PI/3),lon:this.rng.uniform(0,Math.PI*2),radius:this.rng.uniform(1.2,2)},this.burstCycleDuration=this.rng.uniform(45,75),this.burstDuration=this.rng.uniform(8,15),this.burstStartOffset=this.rng.uniform(0,this.burstCycleDuration);const r=t.colors||[new v(1,1,1),new v(.9,.9,.9),new v(.7,.7,.7),new v(.5,.5,.5),new v(.3,.3,.3)];this.createSnowflakeSystem(this.particleCount,o,a,r)}createSnowflakeSystem(e,t,i,o){const a=[];for(let m=0;m<e;m++){let d,n,u,g=0;do{const h=(this.rng.uniform(-1,1)+this.rng.uniform(-1,1))*.2,f=this.rng.uniform(-1,1)*this.burstZone.radius;d=Math.max(0,Math.min(Math.PI,this.burstZone.lat+Math.PI/2+h)),n=(this.burstZone.lon+f)%(Math.PI*2);const N=Math.abs(d-(this.burstZone.lat+Math.PI/2)),T=Math.min(Math.abs(n-this.burstZone.lon),Math.PI*2-Math.abs(n-this.burstZone.lon));u=Math.max(N/.3,T/this.burstZone.radius),g++}while(u>1&&g<10);u>1&&(d=this.burstZone.lat+Math.PI/2+this.rng.uniform(-.1,.1),n=this.burstZone.lon+this.rng.uniform(-this.burstZone.radius,this.burstZone.radius));const p=this.planetRadius*this.rng.uniform(1.001,1.005),y=p*Math.sin(d)*Math.cos(n),E=p*Math.cos(d),b=p*Math.sin(d)*Math.sin(n);a.push(y,E,b)}const r=[],l=new v;for(let m=0;m<this.trailLength;m++){const d=Math.pow(1-m/(this.trailLength-1),1.5);l.setRGB(d,d,d),r.push(l.r,l.g,l.b)}for(let m=0;m<e;m++){const d=m*3,n=a[d],u=a[d+1],g=a[d+2],p=new Float32Array(this.trailLength*3);for(let h=0;h<this.trailLength;h++){const f=h*.1;p[h*3]=n+this.rng.uniform(-1,1)*f*this.planetRadius*.01,p[h*3+1]=u+this.rng.uniform(-1,1)*f*this.planetRadius*.01,p[h*3+2]=g+this.rng.uniform(-1,1)*f*this.planetRadius*.01}const y=new Me;y.setAttribute("position",new U(p,3)),y.setAttribute("color",new U(new Float32Array(r),3));const E=new Ot({vertexColors:!0,transparent:!0,opacity:this.particleOpacity,blending:De,depthTest:!0,linewidth:3}),b=new Ft(y,E);this.materials.push(E),this.particleSystems.push(b),this.trailPositions.push(p),this.trailColors.push(new Float32Array(r)),b.rnd=this.rng.uniform(0,1),b.particleIndex=m,this.snowflakeGroup.add(b)}}update(e=.016){const i=(this.startTime+Date.now()/1e3*this.timeSpeed)%1e3,a=(Date.now()/1e3+this.burstStartOffset)%this.burstCycleDuration;let r=0;if(a<this.burstDuration){const l=a/this.burstDuration;l<.2?r=l/.2:l>.8?r=(1-l)/.2:r=1}this.snowflakeGroup.visible=!0,Math.floor(a)%5===0&&a%1<.1&&console.log("❄️ Burst Debug:",{burstTime:Math.round(a),burstIntensity:Math.round(r*100)/100,cycleDuration:Math.round(this.burstCycleDuration),burstDuration:Math.round(this.burstDuration)}),this.particleSystems.forEach((l,m)=>{const d=l.geometry.getAttribute("position"),n=d.array,u=l.rnd,g=l.particleIndex,p=this.calculateTrailPath(i,g,u);for(let O=this.trailLength-1;O>0;O--){const z=O*3,Z=(O-1)*3;n[z]=n[Z],n[z+1]=n[Z+1],n[z+2]=n[Z+2]}n[0]=p.x,n[1]=p.y,n[2]=p.z,d.needsUpdate=!0;const y=Date.now()/1e3,E=this.gustCycles[m],b=this.gustPhases[m],h=(y/E+b)%1;let f=0;h<.3?f=h/.3:h<.7?f=1:f=(1-h)/.3;const N=new P(n[0],n[1],n[2]),T=Math.atan2(N.z,N.x),C=T<0?T+Math.PI*2:T,M=this.gustZones[m];let j=!1;M.start<M.end?j=C>=M.start&&C<=M.end:j=C>=M.start||C<=M.end,this.materials[m].opacity=j?this.particleOpacity*f:0})}calculateTrailPath(e,t,i){e+=10*i+t*.1;const o=this.burstZone.lon+(i-.5)*this.burstZone.radius,a=this.burstZone.lat+Math.PI/2+(i-.5)*.2,r=this.windSpeedMultiplier,l=e*r,m=o+Math.cos(this.globalWindDirection)*l,d=a+this.verticalOscillation*Math.sin(e*.5+i),n=.015*Math.sin(e*2+i*10),u=this.planetRadius*(1.005+n),g=u*Math.sin(d)*Math.cos(m),p=u*Math.cos(d),y=u*Math.sin(d)*Math.sin(m);return{x:g,y:p,z:y}}addToScene(e,t){t&&this.snowflakeGroup.position.copy(t),e.add(this.snowflakeGroup)}getObject3D(){return this.snowflakeGroup}dispose(){this.materials.forEach(e=>e.dispose()),this.particleSystems.forEach(e=>e.geometry.dispose()),this.materials=[],this.particleSystems=[],this.trailPositions=[],this.trailColors=[],this.snowflakeGroup.clear()}}function Kt(s,e,t){if(e.type!=="tundra")return null;const i=t||Math.floor(Math.random()*1e6),o=e.snow_intensity||.7,a=e.wind_strength||1,r=Math.floor(o*200+50),l=a*5;return new di(s,{particleCount:r,windSpeed:l,size:1.2,opacity:.9,seed:i+15e3})}const ne={INTENSITY:{min:.3,max:.8},GLITCH_FREQUENCY:{min:2,max:8},DISTORTION_SCALE:{min:.1,max:.5},COLOR_SHIFT:{min:.2,max:.7},TIME_SPEED:{min:.5,max:3},PULSE_AMPLITUDE:{min:.1,max:.4}};class ct{glitchSystem;material;params;startTime;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float intensity;
    uniform float distortionScale;
    
    // Función de ruido para distorsión
    float noise(vec3 p) {
      return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
    }
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Distorsión glitch procedural
      vec3 pos = position;
      float n1 = noise(pos * 3.0 + time * 2.0) - 0.5;
      float n2 = noise(pos * 6.0 + time * 1.5) - 0.5;
      
      pos += n1 * distortionScale * intensity * 0.1;
      pos += n2 * distortionScale * intensity * 0.05;
      
      // Pulsos de distorsión temporal
      float pulse = sin(time * 5.0) * 0.1 + 0.9;
      pos *= pulse;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static fragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float intensity;
    uniform float glitchFrequency;
    uniform float colorShift;
    uniform float pulseAmplitude;
    
    // Función de ruido mejorada
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    void main() {
      // Coordenadas para efectos glitch
      vec2 glitchUv = vUv + time * 0.1;
      
      // Patrones de interferencia
      float interference1 = noise(glitchUv * glitchFrequency);
      float interference2 = noise(glitchUv * glitchFrequency * 2.0 + time);
      float interference3 = noise(glitchUv * glitchFrequency * 0.5 - time * 0.5);
      
      // Combinación de interferencias
      float totalInterference = (interference1 + interference2 + interference3) / 3.0;
      
      // Distorsión cromática anómala
      vec3 baseColor = vec3(0.6, 0.2, 0.9); // Púrpura base anómalo
      
      // Desplazamiento de color tipo glitch
      float colorOffset = totalInterference * colorShift;
      vec3 glitchColor = vec3(
        baseColor.r + sin(time * 3.0 + colorOffset) * 0.3,
        baseColor.g + cos(time * 2.0 + colorOffset) * 0.4,
        baseColor.b + sin(time * 4.0 - colorOffset) * 0.2
      );
      
      // Pulsos de energía anómala
      float energyPulse = sin(time * 6.0) * pulseAmplitude + (1.0 - pulseAmplitude);
      glitchColor *= energyPulse;
      
      // Líneas de escaneo glitch
      float scanLines = sin(vUv.y * 100.0 + time * 20.0) * 0.1 + 0.9;
      glitchColor *= scanLines;
      
      // Efecto de fragmentación digital
      vec2 pixelUv = floor(vUv * 50.0) / 50.0;
      float digitalNoise = random(pixelUv + time * 0.1);
      if (digitalNoise > 0.95) {
        glitchColor = vec3(1.0, 0.0, 1.0); // Flash magenta
      }
      
      // Transparencia basada en intensidad y distancia
      float alpha = intensity * totalInterference * 0.7;
      alpha *= (1.0 - length(vUv - 0.5) * 1.5); // Fade desde el centro
      
      gl_FragColor = vec4(glitchColor, alpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);this.startTime=i%1e4/1e3,this.params={intensity:t.intensity||o.uniform(ne.INTENSITY.min,ne.INTENSITY.max),glitchFrequency:t.glitchFrequency||o.uniform(ne.GLITCH_FREQUENCY.min,ne.GLITCH_FREQUENCY.max),distortionScale:t.distortionScale||o.uniform(ne.DISTORTION_SCALE.min,ne.DISTORTION_SCALE.max),colorShift:t.colorShift||o.uniform(ne.COLOR_SHIFT.min,ne.COLOR_SHIFT.max),timeSpeed:t.timeSpeed||o.uniform(ne.TIME_SPEED.min,ne.TIME_SPEED.max),pulseAmplitude:t.pulseAmplitude||o.uniform(ne.PULSE_AMPLITUDE.min,ne.PULSE_AMPLITUDE.max),seed:i},this.material=this.createMaterial();const a=new Ue(e*1.8,32,32);this.glitchSystem=new ge(a,this.material)}createMaterial(){return new ae({vertexShader:ct.vertexShader,fragmentShader:ct.fragmentShader,uniforms:{time:{value:0},intensity:{value:this.params.intensity},glitchFrequency:{value:this.params.glitchFrequency},distortionScale:{value:this.params.distortionScale},colorShift:{value:this.params.colorShift},pulseAmplitude:{value:this.params.pulseAmplitude}},transparent:!0,blending:Re,depthWrite:!1,side:jt})}addToScene(e,t){t&&this.glitchSystem.position.copy(t),e.add(this.glitchSystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.glitchSystem.rotation.x+=e*.3,this.glitchSystem.rotation.y+=e*.2,this.glitchSystem.rotation.z+=e*.15}getObject3D(){return this.glitchSystem}dispose(){this.glitchSystem.geometry.dispose(),this.material.dispose()}}function ro(s,e,t){const i=t||Math.floor(Math.random()*1e6),o=new D(i+5e3),a={intensity:o.uniform(ne.INTENSITY.min,ne.INTENSITY.max),glitchFrequency:o.uniform(ne.GLITCH_FREQUENCY.min,ne.GLITCH_FREQUENCY.max),distortionScale:o.uniform(ne.DISTORTION_SCALE.min,ne.DISTORTION_SCALE.max),colorShift:o.uniform(ne.COLOR_SHIFT.min,ne.COLOR_SHIFT.max),timeSpeed:o.uniform(ne.TIME_SPEED.min,ne.TIME_SPEED.max),pulseAmplitude:o.uniform(ne.PULSE_AMPLITUDE.min,ne.PULSE_AMPLITUDE.max),seed:i};return new ct(s,a)}const re={PARTICLE_COUNT:{min:80,max:200},FLUX_INTENSITY:{min:.4,max:.9},QUANTUM_UNCERTAINTY:{min:.2,max:.8},PHASE_SPEED:{min:1,max:4},TIME_SPEED:{min:.8,max:2.5},ENERGY_LEVEL:{min:.3,max:.8}};class mt{quantumSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
    attribute float size;
    attribute vec3 quantumPhase;
    attribute float uncertaintyFactor;
    attribute float energyState;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vUncertainty;
    
    uniform float time;
    uniform float fluxIntensity;
    uniform float quantumUncertainty;
    uniform float phaseSpeed;
    
    // Función cuántica de probabilidad
    float quantumProbability(vec3 phase, float t) {
      float wave1 = sin(phase.x + t * phaseSpeed);
      float wave2 = cos(phase.y + t * phaseSpeed * 0.7);
      float wave3 = sin(phase.z + t * phaseSpeed * 1.3);
      
      return (wave1 + wave2 + wave3) / 3.0;
    }
    
    void main() {
      vSize = size;
      vUncertainty = uncertaintyFactor;
      
      // Posición cuántica con incertidumbre
      vec3 pos = position;
      float probability = quantumProbability(quantumPhase, time);
      
      // Principio de incertidumbre - posición fluctúa
      pos += quantumPhase * quantumUncertainty * probability * 0.1;
      
      // Túnel cuántico - partículas aparecen en posiciones inesperadas
      if (abs(probability) > 0.8) {
        pos += normalize(quantumPhase) * 0.5;
      }
      
      // Color basado en estado energético
      if (energyState > 0.7) {
        vColor = vec3(0.9, 0.3, 1.0); // Púrpura energético
      } else if (energyState > 0.4) {
        vColor = vec3(0.3, 0.8, 1.0); // Azul cuántico
      } else {
        vColor = vec3(1.0, 0.6, 0.2); // Naranja de baja energía
      }
      
      // Alpha basado en probabilidad cuántica con límites seguros
      vAlpha = clamp(abs(probability) * fluxIntensity, 0.0, 1.0);
      
      // Efecto de superposición cuántica
      float superposition = sin(time * 3.0 + length(quantumPhase)) * 0.5 + 0.5;
      superposition = clamp(superposition, 0.0, 1.0);
      vAlpha *= superposition;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      
      // Tamaño de punto seguro y limitado
      float pointSize = size * (300.0 / max(-mvPosition.z, 1.0)) * (0.5 + clamp(vAlpha, 0.0, 1.0));
      gl_PointSize = clamp(pointSize, 1.0, 100.0);
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vUncertainty;
    
    void main() {
      // Patrón cuántico en cada partícula
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      // Filtrar partículas fuera del rango válido
      if (dist > 0.5) {
        discard;
      }
      
      // Función de onda cuántica con límites seguros
      float waveFunction = 1.0 - smoothstep(0.0, 0.5, dist);
      waveFunction = clamp(waveFunction, 0.0, 1.0);
      
      // Interferencia cuántica suave
      float interference = sin(dist * 15.0) * 0.15 + 0.85;
      interference = clamp(interference, 0.0, 1.0);
      waveFunction *= interference;
      
      // Incertidumbre visual - bordes difusos con límites seguros
      float uncertaintyFactor = clamp(vUncertainty, 0.0, 1.0);
      float uncertainty = 1.0 - smoothstep(0.15, 0.45, dist * (1.0 + uncertaintyFactor * 0.5));
      uncertainty = clamp(uncertainty, 0.0, 1.0);
      
      // Color seguro
      vec3 safeColor = clamp(vColor, vec3(0.0), vec3(2.0));
      
      // Efecto de colapso de función de onda
      if (vAlpha < 0.1) {
        // Partícula en estado de colapso
        waveFunction *= 0.4;
        safeColor = clamp(safeColor * 1.1, vec3(0.0), vec3(1.5));
      }
      
      // Alpha final con límites seguros
      float finalAlpha = clamp(waveFunction * uncertainty * clamp(vAlpha, 0.0, 1.0), 0.0, 1.0);
      
      // Descartar fragmentos casi transparentes para evitar artefactos
      if (finalAlpha < 0.01) {
        discard;
      }
      
      gl_FragColor = vec4(safeColor, finalAlpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);this.startTime=i%1e4/1e3,this.params={particleCount:t.particleCount||Math.floor(o.uniform(re.PARTICLE_COUNT.min,re.PARTICLE_COUNT.max)),fluxIntensity:t.fluxIntensity||o.uniform(re.FLUX_INTENSITY.min,re.FLUX_INTENSITY.max),quantumUncertainty:t.quantumUncertainty||o.uniform(re.QUANTUM_UNCERTAINTY.min,re.QUANTUM_UNCERTAINTY.max),phaseSpeed:t.phaseSpeed||o.uniform(re.PHASE_SPEED.min,re.PHASE_SPEED.max),timeSpeed:t.timeSpeed||o.uniform(re.TIME_SPEED.min,re.TIME_SPEED.max),energyLevel:t.energyLevel||o.uniform(re.ENERGY_LEVEL.min,re.ENERGY_LEVEL.max),seed:i},this.particleCount=this.params.particleCount,this.geometry=new Me,this.material=this.createMaterial(),this.generateQuantumParticles(e),this.quantumSystem=new Be(this.geometry,this.material)}generateQuantumParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),o=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),l=this.params.seed||Math.floor(Math.random()*1e6),m=new D(l);for(let d=0;d<this.particleCount;d++){const n=e*m.uniform(1.1,2),u=m.spherePosition(n);t[d*3]=u.x,t[d*3+1]=u.y,t[d*3+2]=u.z;const g=m.uniform(0,1);r[d]=g,i[d]=1+g*2,o[d*3]=m.uniform(0,Math.PI*2),o[d*3+1]=m.uniform(0,Math.PI*2),o[d*3+2]=m.uniform(0,Math.PI*2),a[d]=m.uniform(.2,1)}this.geometry.setAttribute("position",new U(t,3)),this.geometry.setAttribute("size",new U(i,1)),this.geometry.setAttribute("quantumPhase",new U(o,3)),this.geometry.setAttribute("uncertaintyFactor",new U(a,1)),this.geometry.setAttribute("energyState",new U(r,1))}createMaterial(){return new ae({vertexShader:mt.vertexShader,fragmentShader:mt.fragmentShader,uniforms:{time:{value:0},fluxIntensity:{value:Math.min(this.params.fluxIntensity||.5,.9)},quantumUncertainty:{value:Math.min(this.params.quantumUncertainty||.5,.8)},phaseSpeed:{value:Math.min(this.params.phaseSpeed||2,4)}},transparent:!0,blending:Re,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.quantumSystem.position.copy(t),e.add(this.quantumSystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.quantumSystem.rotation.x+=e*.1*Math.sin(i),this.quantumSystem.rotation.y+=e*.15*Math.cos(i*.7),this.quantumSystem.rotation.z+=e*.08*Math.sin(i*1.3)}getObject3D(){return this.quantumSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function lo(s,e,t){const i=t||Math.floor(Math.random()*1e6),o=new D(i+6e3),a={particleCount:Math.floor(o.uniform(re.PARTICLE_COUNT.min,re.PARTICLE_COUNT.max)),fluxIntensity:o.uniform(re.FLUX_INTENSITY.min,re.FLUX_INTENSITY.max),quantumUncertainty:o.uniform(re.QUANTUM_UNCERTAINTY.min,re.QUANTUM_UNCERTAINTY.max),phaseSpeed:o.uniform(re.PHASE_SPEED.min,re.PHASE_SPEED.max),timeSpeed:o.uniform(re.TIME_SPEED.min,re.TIME_SPEED.max),energyLevel:o.uniform(re.ENERGY_LEVEL.min,re.ENERGY_LEVEL.max),seed:i};return new mt(s,a)}const le={RIFT_COUNT:{min:3,max:8},TEMPORAL_INTENSITY:{min:.5,max:1},TIME_DISTORTION:{min:.3,max:.8},RIFT_SIZE:{min:.8,max:2.5},TIME_SPEED:{min:.3,max:1.8},CHRONO_SHIFT:{min:.1,max:.6}};class dt{riftSystem;rifts=[];params;riftCount;startTime;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float timeDistortion;
    uniform float chronoShift;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Distorsión temporal en los vértices
      vec3 pos = position;
      
      // Ondas temporales que crean la grieta
      float timeWave1 = sin(time * 2.0 + pos.y * 5.0) * timeDistortion;
      float timeWave2 = cos(time * 1.5 + pos.x * 3.0) * timeDistortion * 0.7;
      
      // Crear efecto de grieta dimensional
      pos.z += timeWave1 * 0.1;
      pos.x += timeWave2 * 0.05;
      
      // Deformación temporal hacia el centro de la grieta
      float distFromCenter = length(pos.xy);
      float temporalPull = 1.0 / (1.0 + distFromCenter * 2.0);
      pos.z -= temporalPull * chronoShift * 0.2;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static fragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float temporalIntensity;
    uniform float timeDistortion;
    uniform float chronoShift;
    
    // Función de ruido temporal
    float temporalNoise(vec3 p, float t) {
      return fract(sin(dot(p + t, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
    }
    
    // Simular diferentes momentos temporales
    vec3 getTemporalColor(vec2 uv, float timeOffset) {
      float t = time + timeOffset;
      
      // Pasado (azul-púrpura)
      if (timeOffset < 0.0) {
        return vec3(0.2, 0.4, 0.9) * (1.0 + sin(t * 2.0) * 0.3);
      }
      // Presente (blanco-dorado)
      else if (timeOffset < 0.5) {
        return vec3(1.0, 0.9, 0.6) * (1.0 + cos(t * 1.5) * 0.2);
      }
      // Futuro (verde-cian)
      else {
        return vec3(0.3, 0.9, 0.7) * (1.0 + sin(t * 3.0) * 0.4);
      }
    }
    
    void main() {
      // Coordenadas de la grieta temporal
      vec2 riftUv = vUv - 0.5;
      float distFromCenter = length(riftUv);
      
      // Máscara de la grieta - más intensa en el centro
      float riftMask = 1.0 - smoothstep(0.0, 0.5, distFromCenter);
      riftMask = pow(riftMask, 0.5);
      
      // Líneas de tiempo fracturadas
      float timeLines = abs(sin(riftUv.y * 20.0 + time * 3.0)) * 0.5;
      timeLines += abs(cos(riftUv.x * 15.0 + time * 2.0)) * 0.3;
      
      // Diferentes momentos temporales visibles
      float timeFragmentation = temporalNoise(vWorldPosition, time);
      float temporalLayer;
      
      if (timeFragmentation < 0.33) {
        temporalLayer = -1.0; // Pasado
      } else if (timeFragmentation < 0.66) {
        temporalLayer = 0.0;  // Presente
      } else {
        temporalLayer = 1.0;  // Futuro
      }
      
      // Color basado en el momento temporal
      vec3 temporalColor = getTemporalColor(vUv, temporalLayer);
      
      // Efecto de borde de la grieta
      float riftEdge = smoothstep(0.1, 0.4, distFromCenter);
      riftEdge = 1.0 - riftEdge;
      
      // Distorsión cromática en los bordes
      if (riftEdge > 0.5) {
        temporalColor.r += sin(time * 4.0) * 0.3;
        temporalColor.b += cos(time * 3.0) * 0.3;
      }
      
      // Pulsos temporales
      float temporalPulse = sin(time * 5.0 + distFromCenter * 10.0) * 0.2 + 0.8;
      temporalColor *= temporalPulse;
      
      // Efecto de destello temporal
      float temporalFlash = temporalNoise(vWorldPosition * 5.0, time * 2.0);
      if (temporalFlash > 0.9) {
        temporalColor = vec3(1.0, 1.0, 1.0); // Destello blanco
      }
      
      // Combinar efectos
      vec3 finalColor = temporalColor * timeLines * temporalIntensity;
      float alpha = riftMask * temporalIntensity * 0.8;
      
      // Transparencia variable para crear profundidad
      alpha *= (0.5 + temporalPulse * 0.5);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);this.startTime=i%1e4/1e3,this.params={riftCount:t.riftCount||Math.floor(o.uniform(le.RIFT_COUNT.min,le.RIFT_COUNT.max)),temporalIntensity:t.temporalIntensity||o.uniform(le.TEMPORAL_INTENSITY.min,le.TEMPORAL_INTENSITY.max),timeDistortion:t.timeDistortion||o.uniform(le.TIME_DISTORTION.min,le.TIME_DISTORTION.max),riftSize:t.riftSize||o.uniform(le.RIFT_SIZE.min,le.RIFT_SIZE.max),timeSpeed:t.timeSpeed||o.uniform(le.TIME_SPEED.min,le.TIME_SPEED.max),chronoShift:t.chronoShift||o.uniform(le.CHRONO_SHIFT.min,le.CHRONO_SHIFT.max),seed:i},this.riftCount=this.params.riftCount,this.riftSystem=new Oe,this.generateTemporalRifts(e)}generateTemporalRifts(e){const t=this.params.seed||Math.floor(Math.random()*1e6),i=new D(t);for(let o=0;o<this.riftCount;o++){const a=this.params.riftSize*i.uniform(.8,1.5),r=this.params.riftSize*i.uniform(1.5,3),l=new zt(a,r,16,32),m=l.attributes.position;for(let p=0;p<m.count;p++){const y=m.getX(p),E=m.getY(p),b=Math.abs(E)/(r*.5),h=1-Math.pow(b,2);m.setX(p,y*h);const f=(i.random()-.5)*.1;m.setX(p,y*h+f),m.setZ(p,f*.5)}l.attributes.position.needsUpdate=!0,l.computeVertexNormals();const d=this.createMaterial(),n=new ge(l,d),u=e*i.uniform(1.2,1.8),g=i.spherePosition(u);n.position.copy(g),n.lookAt(0,0,0),n.rotateX(i.uniform(-.5,.5)),n.rotateY(i.uniform(-.5,.5)),n.rotateZ(i.uniform(-Math.PI,Math.PI)),this.rifts.push(n),this.riftSystem.add(n)}}createMaterial(){return new ae({vertexShader:dt.vertexShader,fragmentShader:dt.fragmentShader,uniforms:{time:{value:0},temporalIntensity:{value:this.params.temporalIntensity},timeDistortion:{value:this.params.timeDistortion},chronoShift:{value:this.params.chronoShift}},transparent:!0,blending:Re,depthWrite:!1,side:jt})}addToScene(e,t){t&&this.riftSystem.position.copy(t),e.add(this.riftSystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.rifts.forEach(o=>{const a=o.material;a.uniforms.time.value=i}),this.riftSystem.rotation.x+=e*.05*Math.sin(i*.3),this.riftSystem.rotation.y+=e*.08*Math.cos(i*.5),this.riftSystem.rotation.z+=e*.03*Math.sin(i*.7)}getObject3D(){return this.riftSystem}dispose(){this.rifts.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.rifts=[],this.riftSystem.clear()}}function co(s,e,t){const i=t||Math.floor(Math.random()*1e6),o=new D(i+7e3),a={riftCount:Math.floor(o.uniform(le.RIFT_COUNT.min,le.RIFT_COUNT.max)),temporalIntensity:o.uniform(le.TEMPORAL_INTENSITY.min,le.TEMPORAL_INTENSITY.max),timeDistortion:o.uniform(le.TIME_DISTORTION.min,le.TIME_DISTORTION.max),riftSize:o.uniform(le.RIFT_SIZE.min,le.RIFT_SIZE.max),timeSpeed:o.uniform(le.TIME_SPEED.min,le.TIME_SPEED.max),chronoShift:o.uniform(le.CHRONO_SHIFT.min,le.CHRONO_SHIFT.max),seed:i};return new dt(s,a)}const ce={SPHERE_COUNT:{min:2,max:6},VOID_INTENSITY:{min:.6,max:1},ABSORPTION_RATE:{min:.3,max:.8},SPHERE_SIZE:{min:.3,max:.8},TIME_SPEED:{min:.2,max:1.5},GRAVITATIONAL_PULL:{min:.1,max:.5}};class ht{voidSystem;voidSpheres=[];params;sphereCount;startTime;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vDistFromCenter;
    
    uniform float time;
    uniform float gravitationalPull;
    uniform float absorptionRate;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Distancia desde el centro de la esfera de vacío
      vDistFromCenter = length(position);
      
      // Efecto gravitacional - vertices son atraídos hacia el centro
      vec3 pos = position;
      float gravitationalEffect = gravitationalPull * (1.0 - vDistFromCenter);
      
      // Contracción hacia el centro del vacío
      pos *= 1.0 - gravitationalEffect * sin(time * 2.0) * 0.1;
      
      // Ondulación del espacio-tiempo
      float spaceTimeWave = sin(vDistFromCenter * 10.0 - time * 3.0) * 0.05;
      pos += normalize(pos) * spaceTimeWave * absorptionRate;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static fragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vDistFromCenter;
    
    uniform float time;
    uniform float voidIntensity;
    uniform float absorptionRate;
    uniform float gravitationalPull;
    
    // Función de inversión de color para efecto de antimateria
    vec3 invertColor(vec3 color) {
      return vec3(1.0) - color;
    }
    
    // Simular absorción de luz
    float lightAbsorption(float dist, float intensity) {
      return 1.0 - exp(-dist * intensity);
    }
    
    void main() {
      // Coordenadas esféricas para efectos de vacío
      float distFromCenter = vDistFromCenter;
      
      // Centro del vacío - completamente negro
      float voidCore = 1.0 - smoothstep(0.0, 0.3, distFromCenter);
      
      // Anillo de absorción - donde la materia es destruida
      float absorptionRing = smoothstep(0.2, 0.6, distFromCenter) * 
                            (1.0 - smoothstep(0.6, 1.0, distFromCenter));
      
      // Borde de distorsión - efectos visuales extraños
      float distortionEdge = smoothstep(0.7, 1.0, distFromCenter);
      
      // Color base del vacío (negro profundo con tintes púrpura)
      vec3 voidColor = vec3(0.1, 0.0, 0.2);
      
      // Efectos de absorción de luz
      if (voidCore > 0.1) {
        // Centro completamente negro
        voidColor = vec3(0.0);
      } else if (absorptionRing > 0.1) {
        // Anillo de absorción - efectos de antimateria
        float absorption = lightAbsorption(distFromCenter, absorptionRate);
        voidColor = invertColor(voidColor) * absorption;
        
        // Efectos de energía siendo absorbida
        float energySpiral = sin(distFromCenter * 20.0 + time * 5.0) * 0.5 + 0.5;
        voidColor += vec3(0.5, 0.0, 0.5) * energySpiral * 0.3;
        
        // Líneas de fuerza gravitacional
        float forceLines = abs(sin(atan(vUv.y, vUv.x) * 8.0 + time * 2.0));
        voidColor += vec3(0.3, 0.0, 0.6) * forceLines * 0.2;
      } else if (distortionEdge > 0.1) {
        // Borde de distorsión - efectos visuales extraños
        vec3 distortedColor = vec3(0.8, 0.2, 1.0);
        
        // Ondulaciones en el borde
        float edgeWave = sin(distFromCenter * 15.0 + time * 3.0) * 0.5 + 0.5;
        distortedColor *= edgeWave;
        
        // Interferencia cuántica en el borde
        float interference = fract(sin(dot(vUv, vec2(12.9898, 78.233)) + time) * 43758.5453);
        if (interference > 0.9) {
          distortedColor = vec3(1.0, 1.0, 1.0); // Destello cuántico
        }
        
        voidColor = mix(voidColor, distortedColor, distortionEdge);
      }
      
      // Pulso de vacío - el vacío "respira"
      float voidPulse = sin(time * 1.5) * 0.2 + 0.8;
      voidColor *= voidPulse;
      
      // Efectos de lente gravitacional en los bordes
      if (distFromCenter > 0.8) {
        float lensing = sin(time * 4.0 + distFromCenter * 20.0) * 0.3;
        voidColor.rgb += lensing;
      }
      
      // Alpha basada en la intensidad del vacío y distancia
      float alpha = voidIntensity;
      
      if (voidCore > 0.1) {
        alpha = 1.0; // Centro completamente opaco
      } else {
        alpha *= (absorptionRing + distortionEdge * 0.7);
      }
      
      // Efecto de horizonte de eventos
      float eventHorizon = smoothstep(0.9, 1.0, distFromCenter);
      alpha *= (1.0 - eventHorizon * 0.8);
      
      gl_FragColor = vec4(voidColor, alpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);this.startTime=i%1e4/1e3,this.params={sphereCount:t.sphereCount||Math.floor(o.uniform(ce.SPHERE_COUNT.min,ce.SPHERE_COUNT.max)),voidIntensity:t.voidIntensity||o.uniform(ce.VOID_INTENSITY.min,ce.VOID_INTENSITY.max),absorptionRate:t.absorptionRate||o.uniform(ce.ABSORPTION_RATE.min,ce.ABSORPTION_RATE.max),sphereSize:t.sphereSize||o.uniform(ce.SPHERE_SIZE.min,ce.SPHERE_SIZE.max),timeSpeed:t.timeSpeed||o.uniform(ce.TIME_SPEED.min,ce.TIME_SPEED.max),gravitationalPull:t.gravitationalPull||o.uniform(ce.GRAVITATIONAL_PULL.min,ce.GRAVITATIONAL_PULL.max),seed:i},this.sphereCount=this.params.sphereCount,this.voidSystem=new Oe,this.generateVoidSpheres(e)}generateVoidSpheres(e){const t=this.params.seed||Math.floor(Math.random()*1e6),i=new D(t);for(let o=0;o<this.sphereCount;o++){const a=this.params.sphereSize*i.uniform(.7,1.4),r=new Ue(a,32,32),l=this.createMaterial(),m=new ge(r,l),d=e*i.uniform(1.3,2.2),n=i.spherePosition(d);m.position.copy(n),m.rotation.set(i.uniform(0,Math.PI*2),i.uniform(0,Math.PI*2),i.uniform(0,Math.PI*2)),m.userData={orbitSpeed:i.uniform(.1,.3),rotationSpeed:i.uniform(.05,.15),pulsePhase:i.uniform(0,Math.PI*2),initialPosition:n.clone()},this.voidSpheres.push(m),this.voidSystem.add(m)}}createMaterial(){return new ae({vertexShader:ht.vertexShader,fragmentShader:ht.fragmentShader,uniforms:{time:{value:0},voidIntensity:{value:this.params.voidIntensity},absorptionRate:{value:this.params.absorptionRate},gravitationalPull:{value:this.params.gravitationalPull}},transparent:!0,blending:Re,depthWrite:!1,side:ni})}addToScene(e,t){t&&this.voidSystem.position.copy(t),e.add(this.voidSystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.voidSpheres.forEach((o,a)=>{const r=o.material;r.uniforms.time.value=i;const l=o.userData,m=i*l.orbitSpeed+a*Math.PI/2,d=l.initialPosition.length();o.position.x=Math.cos(m)*d,o.position.z=Math.sin(m)*d,o.position.y=l.initialPosition.y+Math.sin(i+l.pulsePhase)*.3,o.rotation.x+=e*l.rotationSpeed,o.rotation.y+=e*l.rotationSpeed*.7,o.rotation.z+=e*l.rotationSpeed*1.3;const n=1+Math.sin(i*2+l.pulsePhase)*.1;o.scale.setScalar(n)}),this.voidSystem.rotation.y+=e*.05}getObject3D(){return this.voidSystem}dispose(){this.voidSpheres.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.voidSpheres=[],this.voidSystem.clear()}}function mo(s,e,t){const i=t||Math.floor(Math.random()*1e6),o=new D(i+8e3),a={sphereCount:Math.floor(o.uniform(ce.SPHERE_COUNT.min,ce.SPHERE_COUNT.max)),voidIntensity:o.uniform(ce.VOID_INTENSITY.min,ce.VOID_INTENSITY.max),absorptionRate:o.uniform(ce.ABSORPTION_RATE.min,ce.ABSORPTION_RATE.max),sphereSize:o.uniform(ce.SPHERE_SIZE.min,ce.SPHERE_SIZE.max),timeSpeed:o.uniform(ce.TIME_SPEED.min,ce.TIME_SPEED.max),gravitationalPull:o.uniform(ce.GRAVITATIONAL_PULL.min,ce.GRAVITATIONAL_PULL.max),seed:i};return new ht(s,a)}const me={PARTICLE_COUNT:{min:60,max:150},PHASE_INTENSITY:{min:.4,max:.9},TRANSITION_SPEED:{min:1,max:4},COHERENCE_LEVEL:{min:.2,max:.7},TIME_SPEED:{min:.6,max:2.2},PHASE_STATES:{min:3,max:6}};class ut{phaseSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
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
    
    // Función de transición de fase cuántica
    float phaseTransition(float state, float t) {
      float cycle = sin(t * transitionSpeed + state * 6.28 / phaseStates);
      return 0.5 + 0.5 * cycle;
    }
    
    // Obtener posición basada en estado de fase
    vec3 getPhasePosition(vec3 basePos, float state, float t) {
      float transition = phaseTransition(state, t);
      
      // Estado sólido (compacto)
      if (state < 1.0) {
        return basePos * (0.8 + 0.2 * transition);
      }
      // Estado líquido (fluido)
      else if (state < 2.0) {
        vec3 flow = vec3(sin(t + basePos.x), cos(t + basePos.y), sin(t * 0.5 + basePos.z)) * 0.1;
        return basePos + flow * transition;
      }
      // Estado gaseoso (expansivo)
      else if (state < 3.0) {
        return basePos * (1.0 + 0.5 * transition);
      }
      // Estado plasmático (energético)
      else if (state < 4.0) {
        vec3 energy = normalize(phaseVector) * sin(t * 3.0) * 0.3;
        return basePos + energy * transition;
      }
      // Estado cuántico (incierto)
      else if (state < 5.0) {
        vec3 uncertainty = phaseVector * sin(t * 5.0 + state) * 0.4;
        return basePos + uncertainty * transition;
      }
      // Estado de antimateria (invertido)
      else {
        return -basePos * (0.5 + 0.5 * transition);
      }
    }
    
    void main() {
      vSize = size;
      vPhaseState = phaseState;
      vCoherence = coherenceFactor;
      
      // Calcular posición basada en estado de fase actual
      vec3 pos = getPhasePosition(position, phaseState, time + transitionPhase);
      
      // Coherencia cuántica - qué tan "real" es la partícula
      float coherence = coherenceFactor * coherenceLevel;
      float phaseTransitionValue = phaseTransition(phaseState, time + transitionPhase);
      
      // Color basado en estado de fase
      if (phaseState < 1.0) {
        vColor = vec3(0.8, 0.8, 1.0); // Azul sólido
      } else if (phaseState < 2.0) {
        vColor = vec3(0.3, 0.7, 1.0); // Azul líquido
      } else if (phaseState < 3.0) {
        vColor = vec3(0.9, 0.9, 0.6); // Amarillo gaseoso
      } else if (phaseState < 4.0) {
        vColor = vec3(1.0, 0.5, 0.2); // Naranja plasmático
      } else if (phaseState < 5.0) {
        vColor = vec3(0.7, 0.3, 1.0); // Púrpura cuántico
      } else {
        vColor = vec3(1.0, 0.2, 0.8); // Magenta antimateria
      }
      
      // Modular color con transición de fase
      vColor *= (0.7 + 0.3 * phaseTransitionValue);
      
      // Alpha basado en coherencia y fase
      vAlpha = coherence * phaseIntensity * phaseTransitionValue;
      
      // Efecto de materialización/desmaterialización
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
    
    // Función de patrón de interferencia cuántica
    float quantumInterference(vec2 uv, float phase) {
      float dist = length(uv);
      float wave = sin(dist * 15.0 + phase * 10.0 + time * 3.0);
      return 0.5 + 0.5 * wave;
    }
    
    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      // Forma base de la partícula
      float particle = 1.0 - smoothstep(0.0, 0.5, dist);
      
      // Patrones específicos por estado de fase
      if (vPhaseState < 1.0) {
        // Sólido - forma definida
        particle = 1.0 - smoothstep(0.0, 0.3, dist);
      } else if (vPhaseState < 2.0) {
        // Líquido - bordes suaves
        particle = 1.0 - smoothstep(0.0, 0.4, dist);
        particle *= (0.8 + 0.2 * sin(time * 2.0 + dist * 10.0));
      } else if (vPhaseState < 3.0) {
        // Gaseoso - muy difuso
        particle = 1.0 - smoothstep(0.0, 0.5, dist);
        particle *= 0.6;
      } else if (vPhaseState < 4.0) {
        // Plasmático - energético
        float energy = quantumInterference(uv, vPhaseState);
        particle *= energy;
      } else if (vPhaseState < 5.0) {
        // Cuántico - interferencia
        float interference = quantumInterference(uv, vPhaseState);
        particle *= interference;
        
        // Probabilidad cuántica
        float probability = abs(sin(time + vPhaseState));
        if (probability < 0.3) {
          particle *= 0.2; // Baja probabilidad de existencia
        }
      } else {
        // Antimateria - patrón invertido
        particle = smoothstep(0.2, 0.5, dist) - smoothstep(0.5, 0.8, dist);
      }
      
      // Efecto de coherencia cuántica
      float coherenceEffect = vCoherence;
      if (coherenceEffect < 0.3) {
        // Baja coherencia - partícula "fantasma"
        particle *= 0.4;
        
        // Efecto de parpadeo cuántico
        float flicker = step(0.8, fract(sin(time * 10.0 + vPhaseState) * 43758.5453));
        particle *= (0.3 + 0.7 * flicker);
      }
      
      // Modulación temporal para transiciones
      float temporal = sin(time * 4.0 + vPhaseState) * 0.2 + 0.8;
      particle *= temporal;
      
      // Color final con efectos de fase
      vec3 finalColor = vColor;
      
      // Destello durante transiciones de fase críticas
      if (abs(sin(time * 2.0 + vPhaseState)) > 0.9) {
        finalColor += vec3(0.5, 0.5, 0.5); // Destello blanco
      }
      
      float finalAlpha = particle * vAlpha;
      gl_FragColor = vec4(finalColor, finalAlpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);this.startTime=i%1e4/1e3,this.params={particleCount:t.particleCount||Math.floor(o.uniform(me.PARTICLE_COUNT.min,me.PARTICLE_COUNT.max)),phaseIntensity:t.phaseIntensity||o.uniform(me.PHASE_INTENSITY.min,me.PHASE_INTENSITY.max),transitionSpeed:t.transitionSpeed||o.uniform(me.TRANSITION_SPEED.min,me.TRANSITION_SPEED.max),coherenceLevel:t.coherenceLevel||o.uniform(me.COHERENCE_LEVEL.min,me.COHERENCE_LEVEL.max),timeSpeed:t.timeSpeed||o.uniform(me.TIME_SPEED.min,me.TIME_SPEED.max),phaseStates:t.phaseStates||Math.floor(o.uniform(me.PHASE_STATES.min,me.PHASE_STATES.max)),seed:i},this.particleCount=this.params.particleCount,this.geometry=new Me,this.material=this.createMaterial(),this.generatePhaseParticles(e),this.phaseSystem=new Be(this.geometry,this.material)}generatePhaseParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),o=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),m=this.params.seed||Math.floor(Math.random()*1e6),d=new D(m);for(let n=0;n<this.particleCount;n++){const u=e*d.uniform(1.1,1.9),g=d.spherePosition(u);t[n*3]=g.x,t[n*3+1]=g.y,t[n*3+2]=g.z,i[n]=d.uniform(.8,2);const p=d.spherePosition(1);o[n*3]=p.x,o[n*3+1]=p.y,o[n*3+2]=p.z,a[n]=d.uniform(.1,1),r[n]=d.uniform(0,this.params.phaseStates),l[n]=d.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new U(t,3)),this.geometry.setAttribute("size",new U(i,1)),this.geometry.setAttribute("phaseVector",new U(o,3)),this.geometry.setAttribute("coherenceFactor",new U(a,1)),this.geometry.setAttribute("phaseState",new U(r,1)),this.geometry.setAttribute("transitionPhase",new U(l,1))}createMaterial(){return new ae({vertexShader:ut.vertexShader,fragmentShader:ut.fragmentShader,uniforms:{time:{value:0},phaseIntensity:{value:this.params.phaseIntensity},transitionSpeed:{value:this.params.transitionSpeed},coherenceLevel:{value:this.params.coherenceLevel},phaseStates:{value:this.params.phaseStates}},transparent:!0,blending:Re,depthWrite:!1})}addToScene(e,t){t&&this.phaseSystem.position.copy(t),e.add(this.phaseSystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.phaseSystem.rotation.x+=e*.12*Math.cos(i*.3),this.phaseSystem.rotation.y+=e*.08*Math.sin(i*.5),this.phaseSystem.rotation.z+=e*.06*Math.cos(i*.7)}getObject3D(){return this.phaseSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function ho(s,e,t){const i=t||Math.floor(Math.random()*1e6),o=new D(i+9e3),a={particleCount:Math.floor(o.uniform(me.PARTICLE_COUNT.min,me.PARTICLE_COUNT.max)),phaseIntensity:o.uniform(me.PHASE_INTENSITY.min,me.PHASE_INTENSITY.max),transitionSpeed:o.uniform(me.TRANSITION_SPEED.min,me.TRANSITION_SPEED.max),coherenceLevel:o.uniform(me.COHERENCE_LEVEL.min,me.COHERENCE_LEVEL.max),timeSpeed:o.uniform(me.TIME_SPEED.min,me.TIME_SPEED.max),phaseStates:Math.floor(o.uniform(me.PHASE_STATES.min,me.PHASE_STATES.max)),seed:i};return new ut(s,a)}const Se={MORPH_SPEED:{min:.3,max:1.5},INTENSITY:{min:.3,max:.8},SCALE:{min:.8,max:1.5},TIME_SPEED:{min:.5,max:2}},uo={SPHERE:0,TETRAHEDRON:4,CUBE:6,OCTAHEDRON:8,DODECAHEDRON:12,ICOSAHEDRON:20};class ft{morphSystem;material;geometry;params;startTime;shapeSequence;currentShapeIndex=0;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float morphProgress;
    uniform float currentShape;
    uniform float nextShape;
    uniform float intensity;
    uniform float morphSpeed;
    
    // Función para calcular posición en diferentes formas geométricas
    vec3 getShapePosition(vec3 spherePos, float shapeType) {
      vec3 pos = normalize(spherePos);
      
      if (shapeType < 0.5) {
        // Esfera (sin cambios)
        return spherePos;
      }
      else if (shapeType < 4.5) {
        // Tetraedro (4 caras)
        vec3 tetraPos = pos;
        float d1 = abs(dot(tetraPos, normalize(vec3(1, 1, 1))));
        float d2 = abs(dot(tetraPos, normalize(vec3(-1, -1, 1))));
        float d3 = abs(dot(tetraPos, normalize(vec3(-1, 1, -1))));
        float d4 = abs(dot(tetraPos, normalize(vec3(1, -1, -1))));
        float maxDist = max(max(d1, d2), max(d3, d4));
        return pos * (length(spherePos) / maxDist);
      }
      else if (shapeType < 6.5) {
        // Cubo (6 caras)
        vec3 cubePos = pos;
        float maxAxis = max(max(abs(cubePos.x), abs(cubePos.y)), abs(cubePos.z));
        return (cubePos / maxAxis) * length(spherePos);
      }
      else if (shapeType < 8.5) {
        // Octaedro (8 caras)
        vec3 octaPos = pos;
        float octaDist = abs(octaPos.x) + abs(octaPos.y) + abs(octaPos.z);
        return (octaPos / octaDist) * length(spherePos);
      }
      else if (shapeType < 12.5) {
        // Dodecaedro (aproximación)
        vec3 dodecaPos = pos;
        float phi = (1.0 + sqrt(5.0)) / 2.0; // Golden ratio
        vec3 n1 = normalize(vec3(1, 1, 1));
        vec3 n2 = normalize(vec3(0, phi, 1.0/phi));
        vec3 n3 = normalize(vec3(1.0/phi, 0, phi));
        float d = max(max(abs(dot(dodecaPos, n1)), abs(dot(dodecaPos, n2))), abs(dot(dodecaPos, n3)));
        return (dodecaPos / d) * length(spherePos);
      }
      else {
        // Icosaedro (aproximación)
        vec3 icosaPos = pos;
        float phi = (1.0 + sqrt(5.0)) / 2.0;
        vec3 n1 = normalize(vec3(phi, 1, 0));
        vec3 n2 = normalize(vec3(1, 0, phi));
        vec3 n3 = normalize(vec3(0, phi, 1));
        float d = max(max(abs(dot(icosaPos, n1)), abs(dot(icosaPos, n2))), abs(dot(icosaPos, n3)));
        return (icosaPos / d) * length(spherePos);
      }
    }
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      
      // Obtener posiciones para forma actual y siguiente
      vec3 currentPos = getShapePosition(position, currentShape);
      vec3 nextPos = getShapePosition(position, nextShape);
      
      // Interpolar entre formas usando morphProgress
      vec3 morphedPos = mix(currentPos, nextPos, morphProgress);
      
      // Añadir ondulación sutil durante la transformación
      float ripple = sin(time * 3.0 + length(position) * 5.0) * 0.02 * morphProgress * intensity;
      morphedPos += normal * ripple;
      
      vec4 worldPosition = modelMatrix * vec4(morphedPos, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(morphedPos, 1.0);
    }
  `;static fragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float morphProgress;
    uniform float currentShape;
    uniform float nextShape;
    uniform float intensity;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    
    // Función para obtener color según la forma geométrica
    vec3 getShapeColor(float shapeType, vec3 basePos) {
      if (shapeType < 0.5) {
        // Esfera - Azul etéreo
        return vec3(0.3, 0.6, 1.0);
      }
      else if (shapeType < 4.5) {
        // Tetraedro - Verde místico
        return vec3(0.2, 0.9, 0.5);
      }
      else if (shapeType < 6.5) {
        // Cubo - Púrpura dimensional
        return vec3(0.7, 0.2, 0.9);
      }
      else if (shapeType < 8.5) {
        // Octaedro - Naranja energético
        return vec3(1.0, 0.5, 0.2);
      }
      else if (shapeType < 12.5) {
        // Dodecaedro - Cian cósmico
        return vec3(0.2, 0.8, 0.9);
      }
      else {
        // Icosaedro - Magenta alienígena
        return vec3(0.9, 0.2, 0.7);
      }
    }
    
    void main() {
      // Colores de formas actual y siguiente
      vec3 currentColor = getShapeColor(currentShape, vPosition);
      vec3 nextColor = getShapeColor(nextShape, vPosition);
      
      // Interpolar colores
      vec3 morphedColor = mix(currentColor, nextColor, morphProgress);
      
      // Iluminación básica
      vec3 lightDir = normalize(lightDirection);
      float NdotL = max(dot(vNormal, lightDir), 0.0);
      float lighting = 0.4 + 0.6 * NdotL;
      
      // Efecto de borde durante transformación
      float edgeGlow = 1.0 - abs(dot(vNormal, normalize(vWorldPosition - cameraPosition)));
      edgeGlow = pow(edgeGlow, 2.0) * morphProgress * 0.3;
      
      // Pulso de energía durante transformación
      float energyPulse = sin(time * 8.0) * 0.1 + 0.9;
      morphedColor *= energyPulse;
      
      // Añadir brillo en los bordes
      morphedColor += vec3(edgeGlow);
      
      // Color final con iluminación
      vec3 finalColor = morphedColor * lighting;
      
      // Transparencia variable - más opaco durante transformación
      float alpha = 0.6 + morphProgress * 0.3;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);this.startTime=i%1e4/1e3,this.params={morphSpeed:t.morphSpeed||o.uniform(Se.MORPH_SPEED.min,Se.MORPH_SPEED.max),intensity:t.intensity||o.uniform(Se.INTENSITY.min,Se.INTENSITY.max),scale:t.scale||o.uniform(Se.SCALE.min,Se.SCALE.max),timeSpeed:t.timeSpeed||o.uniform(Se.TIME_SPEED.min,Se.TIME_SPEED.max),seed:i},this.shapeSequence=t.shapeSequence||this.generateShapeSequence(o),this.geometry=new Ue(e*this.params.scale,64,64),this.material=this.createMaterial(),this.morphSystem=new ge(this.geometry,this.material),this.morphSystem.renderOrder=1e3}generateShapeSequence(e){const t=Object.values(uo),i=[];let o=-1;for(let a=0;a<8;a++){let r;do r=t[Math.floor(e.random()*t.length)];while(r===o&&t.length>1);i.push(r),o=r}return i}createMaterial(){return new ae({vertexShader:ft.vertexShader,fragmentShader:ft.fragmentShader,uniforms:{time:{value:0},morphProgress:{value:0},currentShape:{value:this.shapeSequence[0]},nextShape:{value:this.shapeSequence[1]},intensity:{value:this.params.intensity},morphSpeed:{value:this.params.morphSpeed},lightDirection:{value:new P(1,1,1).normalize()},lightPosition:{value:new P(0,0,0)}},transparent:!0,blending:De,depthWrite:!1,side:jt})}addToScene(e,t){t&&this.morphSystem.position.copy(t),e.add(this.morphSystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=i;const o=6/this.params.morphSpeed,a=i%o,r=o*.3;let l=0,m=!1;if(a<r?(l=a/r,m=!0):(l=0,m=!1),!m&&l===0){const n=Math.floor(i/o)%this.shapeSequence.length;if(n!==this.currentShapeIndex){this.currentShapeIndex=n;const u=(this.currentShapeIndex+1)%this.shapeSequence.length;this.material.uniforms.currentShape.value=this.shapeSequence[this.currentShapeIndex],this.material.uniforms.nextShape.value=this.shapeSequence[u]}}const d=l<.5?2*l*l:1-2*(1-l)*(1-l);this.material.uniforms.morphProgress.value=d,m||(this.morphSystem.rotation.y+=e*.1,this.morphSystem.rotation.x+=e*.05)}updateLightPosition(e){this.material.uniforms.lightPosition.value.copy(e)}updateLightDirection(e){this.material.uniforms.lightDirection.value.copy(e)}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}getObject3D(){return this.morphSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function fo(s,e,t){const i=t||Math.floor(Math.random()*1e6),o=new D(i+1e4),a={morphSpeed:o.uniform(Se.MORPH_SPEED.min,Se.MORPH_SPEED.max),intensity:o.uniform(Se.INTENSITY.min,Se.INTENSITY.max),scale:o.uniform(Se.SCALE.min,Se.SCALE.max),timeSpeed:o.uniform(Se.TIME_SPEED.min,Se.TIME_SPEED.max),seed:i};return new ft(s,a)}const de={PARTICLE_COUNT:{min:100,max:300},GRAVITY_STRENGTH:{min:.3,max:.8},ORBIT_RADIUS:{min:.8,max:1.5},WELL_SIZE:{min:.1,max:.3},TIME_SPEED:{min:.5,max:1.5},PARTICLE_SPEED:{min:.5,max:2}};class He{gravitySystem;particles;blackHole;material;blackHoleMaterial;geometry;params;particlePositions;particleVelocities;particleAges;startTime;particleCount;static particleVertexShader=`
    attribute float age;
    attribute float size;
    
    varying float vAge;
    varying vec3 vPosition;
    
    uniform float time;
    
    void main() {
      vAge = age;
      vPosition = position;
      
      // Brillo basado en la edad y proximidad al centro
      float distFromCenter = length(position);
      float brightness = (1.0 - distFromCenter * 0.5) * (1.0 - age);
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = size * brightness * (300.0 / max(-mvPosition.z, 1.0));
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static particleFragmentShader=`
    varying float vAge;
    varying vec3 vPosition;
    
    uniform float time;
    
    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      if (dist > 0.5) discard;
      
      // Color que cambia según la proximidad al centro
      float distFromCenter = length(vPosition);
      
      // Colores: azul en el exterior, blanco en el centro, naranja cerca del agujero negro
      vec3 color;
      if (distFromCenter > 1.5) {
        color = vec3(0.2, 0.4, 1.0); // Azul exterior
      } else if (distFromCenter > 0.8) {
        color = mix(vec3(1.0, 1.0, 1.0), vec3(0.2, 0.4, 1.0), (distFromCenter - 0.8) / 0.7);
      } else if (distFromCenter > 0.3) {
        color = mix(vec3(1.0, 0.6, 0.2), vec3(1.0, 1.0, 1.0), (distFromCenter - 0.3) / 0.5);
      } else {
        color = vec3(1.0, 0.3, 0.1); // Rojo/naranja cerca del agujero negro
      }
      
      // Efecto de partícula suave
      float particle = 1.0 - smoothstep(0.0, 0.5, dist);
      
      // Alpha basado en la edad y distancia
      float alpha = particle * (1.0 - vAge) * 0.8;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;static blackHoleVertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    uniform float time;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;static blackHoleFragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    uniform float time;
    
    void main() {
      // Centro completamente negro
      float distFromCenter = length(vUv - 0.5) * 2.0;
      
      if (distFromCenter < 0.3) {
        // Centro del agujero negro - completamente negro
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      } else if (distFromCenter < 0.8) {
        // Borde del horizonte de eventos - transición
        float transition = (distFromCenter - 0.3) / 0.5;
        float glow = sin(time * 2.0) * 0.1 + 0.2;
        vec3 edgeColor = vec3(0.1, 0.05, 0.2) * glow;
        gl_FragColor = vec4(edgeColor, 1.0 - transition * 0.5);
      } else {
        // Fuera del horizonte - transparente
        discard;
      }
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);this.startTime=i%1e4/1e3,this.params={particleCount:t.particleCount||Math.floor(o.uniform(de.PARTICLE_COUNT.min,de.PARTICLE_COUNT.max)),gravityStrength:t.gravityStrength||o.uniform(de.GRAVITY_STRENGTH.min,de.GRAVITY_STRENGTH.max),orbitRadius:t.orbitRadius||o.uniform(de.ORBIT_RADIUS.min,de.ORBIT_RADIUS.max),wellSize:t.wellSize||o.uniform(de.WELL_SIZE.min,de.WELL_SIZE.max),timeSpeed:t.timeSpeed||o.uniform(de.TIME_SPEED.min,de.TIME_SPEED.max),particleSpeed:t.particleSpeed||o.uniform(de.PARTICLE_SPEED.min,de.PARTICLE_SPEED.max),seed:i},this.particleCount=this.params.particleCount,this.gravitySystem=new Oe,this.initializeParticles(e,o),this.createBlackHole(e),this.gravitySystem.position.set(e*o.uniform(1.5,2.5)*(o.random()>.5?1:-1),e*o.uniform(-.5,.5),e*o.uniform(1.5,2.5)*(o.random()>.5?1:-1))}initializeParticles(e,t){this.geometry=new Me;const i=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount);for(let l=0;l<this.particleCount;l++){const m=t.uniform(.8,2.5)*this.params.orbitRadius,d=t.uniform(0,Math.PI*2),n=t.uniform(-.2,.2);i[l*3]=Math.cos(d)*m,i[l*3+1]=n,i[l*3+2]=Math.sin(d)*m;const u=Math.sqrt(this.params.gravityStrength/m)*this.params.particleSpeed;o[l*3]=-Math.sin(d)*u,o[l*3+1]=t.uniform(-.1,.1),o[l*3+2]=Math.cos(d)*u,a[l]=t.uniform(0,1),r[l]=t.uniform(1,3)}this.particlePositions=i,this.particleVelocities=o,this.particleAges=a,this.geometry.setAttribute("position",new U(i,3)),this.geometry.setAttribute("age",new U(a,1)),this.geometry.setAttribute("size",new U(r,1)),this.material=new ae({vertexShader:He.particleVertexShader,fragmentShader:He.particleFragmentShader,uniforms:{time:{value:0}},transparent:!0,blending:Re,depthWrite:!1}),this.particles=new Be(this.geometry,this.material),this.gravitySystem.add(this.particles)}createBlackHole(e){const t=new Ue(this.params.wellSize*e,32,32);this.blackHoleMaterial=new ae({vertexShader:He.blackHoleVertexShader,fragmentShader:He.blackHoleFragmentShader,uniforms:{time:{value:0}},transparent:!0,blending:De,depthWrite:!1,side:Pe}),this.blackHole=new ge(t,this.blackHoleMaterial),this.gravitySystem.add(this.blackHole)}addToScene(e,t){e.add(this.gravitySystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.blackHoleMaterial.uniforms.time.value=i;const o=e*this.params.timeSpeed*.5;for(let a=0;a<this.particleCount;a++){const r=this.particlePositions[a*3],l=this.particlePositions[a*3+1],m=this.particlePositions[a*3+2];this.particleVelocities[a*3],this.particleVelocities[a*3+1],this.particleVelocities[a*3+2];const d=Math.sqrt(r*r+l*l+m*m);if(d>.05){const n=this.params.gravityStrength/(d*d),u=-r/d*n,g=-l/d*n,p=-m/d*n;this.particleVelocities[a*3]+=u*o,this.particleVelocities[a*3+1]+=g*o*.1,this.particleVelocities[a*3+2]+=p*o,this.particlePositions[a*3]+=this.particleVelocities[a*3]*o,this.particlePositions[a*3+1]+=this.particleVelocities[a*3+1]*o,this.particlePositions[a*3+2]+=this.particleVelocities[a*3+2]*o,d<.3&&(this.particleAges[a]+=o*2),(this.particleAges[a]>1||d<.1)&&this.resetParticle(a)}else this.resetParticle(a)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.age.needsUpdate=!0,this.gravitySystem.rotation.y+=e*.1}resetParticle(e){const t=new D(Date.now()+e),i=t.uniform(2,3)*this.params.orbitRadius,o=t.uniform(0,Math.PI*2),a=t.uniform(-.3,.3);this.particlePositions[e*3]=Math.cos(o)*i,this.particlePositions[e*3+1]=a,this.particlePositions[e*3+2]=Math.sin(o)*i;const r=Math.sqrt(this.params.gravityStrength/i)*this.params.particleSpeed;this.particleVelocities[e*3]=-Math.sin(o)*r,this.particleVelocities[e*3+1]=t.uniform(-.05,.05),this.particleVelocities[e*3+2]=Math.cos(o)*r,this.particleAges[e]=0}getObject3D(){return this.gravitySystem}dispose(){this.geometry.dispose(),this.material.dispose(),this.blackHoleMaterial.dispose(),this.blackHole.geometry.dispose()}}function po(s,e,t){const i=t||Math.floor(Math.random()*1e6),o=new D(i+11e3),a={particleCount:Math.floor(o.uniform(de.PARTICLE_COUNT.min,de.PARTICLE_COUNT.max)),gravityStrength:o.uniform(de.GRAVITY_STRENGTH.min,de.GRAVITY_STRENGTH.max),orbitRadius:o.uniform(de.ORBIT_RADIUS.min,de.ORBIT_RADIUS.max),wellSize:o.uniform(de.WELL_SIZE.min,de.WELL_SIZE.max),timeSpeed:o.uniform(de.TIME_SPEED.min,de.TIME_SPEED.max),particleSpeed:o.uniform(de.PARTICLE_SPEED.min,de.PARTICLE_SPEED.max),seed:i};return new He(s,a)}class pt{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;static baseFragmentShader=`
    uniform vec3 baseColor;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float ambientStrength;
    uniform float lightIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    varying vec2 vUv;
    
    void main() {
      vec3 normal = normalize(vWorldNormal);
      
      // Usar posición de luz si está disponible, sino usar dirección
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
      }
      
      // Cálculo de iluminación Lambertiana mejorado
      float dotNL = dot(normal, lightDir);
      
      // Suavizar la transición entre día y noche con mejor gradiente
      float dayNight = smoothstep(-0.3, 0.1, dotNL);
      
      // Añadir un poco de retroiluminación (rim lighting) para evitar oscuridad total
      float rimLight = 1.0 - abs(dotNL);
      rimLight = pow(rimLight, 3.0) * 0.1;
      
      // Color base con iluminación mejorada
      vec3 finalColor = baseColor;
      
      // Aplicar iluminación con intensidad variable
      float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
      finalColor *= totalLight;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;constructor(e,t=new v(16753920)){this.baseMesh=e;const i=e.geometry;this.planetRadius=i.parameters.radius||1;const o=t instanceof v?t:new v(t);this.baseMaterial=new ae({vertexShader:pt.baseVertexShader,fragmentShader:pt.baseFragmentShader,uniforms:{baseColor:{value:o},lightDirection:{value:new P(1,1,1).normalize()},lightPosition:{value:new P(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:Pe}),this.baseMesh.material=this.baseMaterial}addEffectLayer(e,t,i=1.001,o){const a=new Ue(this.planetRadius*i,256,256),r=new ge(a,t);return r.position.copy(this.baseMesh.position),r.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:r,material:t,layerObject:o}),this.scene&&this.scene.add(r),r}createCloudBandsLayerMaterial(e){const t=`
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normal;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,i=`
      uniform float time;
      uniform float seed;
      uniform vec3 bandColor;
      uniform float numBands;
      uniform float rotationAngle;
      uniform float bandPositions[20];
      uniform float bandWidths[20];
      uniform float animationSpeed;
      uniform float turbulence;
      uniform float noiseScale;
      uniform vec3 lightDirection;
      uniform float opacity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      
      float hash(float n) {
        return fract(sin(n + seed) * 43758.5453123);
      }
      
      float noise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float n = i.x + i.y * 57.0 + 113.0 * i.z;
        return mix(
          mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
              mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
          mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
              mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
      }
      
      float fbm(vec3 p) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;
        
        for(int i = 0; i < 4; i++) {
          value += amplitude * noise(p * frequency);
          frequency *= 2.0;
          amplitude *= 0.5;
        }
        
        return value;
      }
      
      // Función para crear cortes/gaps aleatorios en las bandas
      float createBandGaps(vec3 pos, float bandIndex) {
        // Usar ángulo alrededor del planeta para determinar posición
        float angle = atan(pos.z, pos.x);
        
        // Crear múltiples gaps por banda basados en la seed
        float gapPattern = 1.0;
        
        // 3-5 gaps por banda
        for(float g = 0.0; g < 4.0; g++) {
          float gapSeed = hash(bandIndex * 100.0 + g * 17.0);
          float gapPosition = gapSeed * 6.28318; // Posición aleatoria alrededor del planeta
          float gapWidth = 0.3 + gapSeed * 0.4; // Ancho del gap entre 0.3 y 0.7 radianes
          
          // Crear transición suave para el gap
          float distToGap = abs(angle - gapPosition);
          // Manejar el wrap-around del ángulo
          distToGap = min(distToGap, 6.28318 - distToGap);
          
          if(distToGap < gapWidth) {
            float gapIntensity = smoothstep(0.0, gapWidth, distToGap);
            gapPattern *= gapIntensity;
          }
        }
        
        return gapPattern;
      }
      
      float createCloudBands(vec3 pos) {
        float bands = 0.0;
        
        float currentY = pos.y;
        float currentX = pos.x;
        
        float cosAngle = cos(rotationAngle);
        float sinAngle = sin(rotationAngle);
        float rotatedY = sinAngle * currentX + cosAngle * currentY;
        
        for(int i = 0; i < 20; i++) {
          if(float(i) >= numBands) break;
          
          float bandPosY = bandPositions[i];
          float bandWidth = bandWidths[i];
          
          float distToBand = abs(rotatedY - bandPosY);
          if(distToBand < bandWidth / 2.0) {
            float bandIntensity = 1.0 - (distToBand / (bandWidth / 2.0));
            
            float turbulenceNoise = fbm(pos * noiseScale + vec3(time * animationSpeed * 0.1));
            bandIntensity *= (0.8 + 0.4 * turbulenceNoise * turbulence);
            
            // Aplicar gaps/cortes aleatorios a la banda
            float gapMask = createBandGaps(pos, float(i));
            bandIntensity *= gapMask;
            
            bands += bandIntensity * 0.8;
          }
        }
        
        return clamp(bands, 0.0, 1.0);
      }
      
      void main() {
        vec3 pos = normalize(vPosition);
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(lightDirection);
        
        // Calcular si estamos en la parte iluminada
        float dotNL = dot(normal, lightDir);
        float visibility = smoothstep(-0.2, 0.2, dotNL);
        
        // Solo mostrar bandas en la parte iluminada
        float bands = createCloudBands(pos);
        
        // Hacer las bandas visibles en todo el planeta
        // Solo ajustar ligeramente el brillo basado en la iluminación
        float lightIntensity = max(0.3, dotNL); // Mantener mínimo 30% de visibilidad
        
        // Color de las bandas con transparencia
        vec3 color = bandColor * (0.5 + 0.5 * lightIntensity); // Ajustar brillo del color
        float alpha = bands * opacity; // No multiplicar por lightIntensity
        
        gl_FragColor = vec4(color, alpha);
      }
    `;return new ae({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new v(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new P(1,1,1).normalize()},opacity:{value:e.opacity||.4}},transparent:!0,blending:De,side:Pe,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normal;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,i=`
      uniform float time;
      uniform vec3 stormColor;
      uniform float stormIntensity;
      uniform float spiralSpeed;
      uniform float animationSpeed;
      uniform vec2 stormCenters[5];
      uniform int numStorms;
      uniform vec3 lightDirection;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      
      float createGyroSpirals(vec3 pos) {
        float storms = 0.0;
        
        for(int i = 0; i < 5; i++) {
          if(i >= numStorms) break;
          
          vec2 stormCenter = stormCenters[i];
          float distToStorm = distance(pos.xy, stormCenter);
          
          if(distToStorm < 0.4) {
            float angle = atan(pos.y - stormCenter.y, pos.x - stormCenter.x);
            float spiral = sin(angle * 8.0 + distToStorm * 20.0 - time * animationSpeed * spiralSpeed);
            
            float stormIntensityValue = (1.0 - distToStorm / 0.4) * 0.9;
            stormIntensityValue *= (0.3 + 0.7 * spiral);
            stormIntensityValue *= stormIntensity;
            
            storms += stormIntensityValue;
          }
        }
        
        return clamp(storms, 0.0, 1.0);
      }
      
      void main() {
        vec3 pos = normalize(vPosition);
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(lightDirection);
        
        // Calcular si estamos en la parte iluminada
        float dotNL = dot(normal, lightDir);
        
        // Solo mostrar tormentas en la parte iluminada
        float storms = createGyroSpirals(pos);
        
        // CRÍTICO: hacer las tormentas completamente transparentes en la parte oscura
        float lightIntensity = max(0.0, dotNL);
        lightIntensity = pow(lightIntensity, 2.0); // Caída más agresiva hacia la oscuridad
        
        // Color de las tormentas con transparencia
        vec3 color = stormColor;
        float alpha = storms * 0.6 * lightIntensity; // Transparencia basada en iluminación
        
        gl_FragColor = vec4(color, alpha);
      }
    `,o=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((a,r)=>{r<5&&(o[r*2]=a.x,o[r*2+1]=a.y)}),new ae({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new v(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:o},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new P(1,1,1).normalize()}},transparent:!0,blending:De,side:Pe,depthWrite:!1})}createMetallicSurfaceLayerMaterial(e){const t=`
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
    `,i=`
      uniform vec3 metalColor;
      uniform float metalness;
      uniform float roughness;
      uniform float fragmentationIntensity;
      uniform float opacity;
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      uniform float time;
      uniform float noiseScale;
      uniform float noiseIntensity;
      uniform float crystalScale;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      // Ruido procedural para variaciones de superficie
      float hash(vec3 p) {
        p = fract(p * vec3(443.8975, 397.2973, 491.1871));
        p += dot(p, p.yxz + 19.19);
        return fract((p.x + p.y) * p.z);
      }
      
      float noise3D(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float n = mix(
          mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
              mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
          mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
              mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
        
        return n;
      }
      
      // Función para crear grietas angulares
      float angularCracks(vec2 uv, float scale, float sharpness) {
        vec2 id = floor(uv * scale);
        vec2 f = fract(uv * scale);
        
        float d = 1.0;
        for(float x = -1.0; x <= 1.0; x++) {
          for(float y = -1.0; y <= 1.0; y++) {
            vec2 neighbor = vec2(x, y);
            vec2 point = hash(vec3(id + neighbor, 0.0)) * vec2(1.0) + neighbor;
            float dist = length(f - point);
            d = min(d, dist);
          }
        }
        
        return pow(1.0 - d, sharpness);
      }
      
      // Función para crear cristales facetados con normales perturbadas
      vec3 crystallineFacets(vec2 uv, float scale, vec3 baseNormal) {
        vec2 id = floor(uv * scale);
        vec2 f = fract(uv * scale);
        
        // Hash para determinar el tipo de cristal en cada celda
        float crystalType = hash(vec3(id, 42.0));
        
        // Crear caras cristalinas angulares
        vec3 facetNormal = baseNormal;
        
        // Determinar orientación del cristal
        float angle1 = hash(vec3(id, 123.0)) * 6.28;
        float angle2 = hash(vec3(id, 456.0)) * 3.14;
        
        // Crear diferentes tipos de cristales facetados más irregulares y pequeños
        if(crystalType < 0.25) {
          // Cristal irregular tipo 1 - formas asimétricas
          float noise1 = hash(vec3(id, 789.0));
          float noise2 = hash(vec3(id, 234.0));
          float irregular1 = sin((f.x + noise1) * 8.0) * cos((f.y + noise2) * 6.0);
          
          vec3 perturbation = vec3(
            cos(angle1 + irregular1) * 0.15,
            sin(angle1 + irregular1) * 0.15,
            irregular1 * 0.1
          );
          
          facetNormal = normalize(baseNormal + perturbation);
          
        } else if(crystalType < 0.5) {
          // Cristal irregular tipo 2 - facetas múltiples
          float facet1 = sin(f.x * 12.0 + angle1) * 0.5 + 0.5;
          float facet2 = cos(f.y * 10.0 + angle2) * 0.5 + 0.5;
          float combined = facet1 * facet2;
          
          vec3 perturbation = vec3(
            (facet1 - 0.5) * 0.2,
            (facet2 - 0.5) * 0.2,
            combined * 0.15
          );
          
          facetNormal = normalize(baseNormal + perturbation);
          
        } else if(crystalType < 0.75) {
          // Cristal irregular tipo 3 - ondulaciones complejas
          float wave1 = sin((f.x + f.y) * 15.0 + angle1);
          float wave2 = cos((f.x - f.y) * 13.0 + angle2);
          float complex = wave1 * wave2 * 0.5 + 0.5;
          
          vec3 perturbation = vec3(
            wave1 * 0.12,
            wave2 * 0.12,
            complex * 0.08
          );
          
          facetNormal = normalize(baseNormal + perturbation);
          
        } else {
          // Cristal irregular tipo 4 - ruido fractal
          float dist = length(f - vec2(0.5));
          float angleNoise = atan(f.y - 0.5, f.x - 0.5) + angle1;
          float fractal = sin(angleNoise * 7.0) * cos(dist * 20.0);
          
          vec3 perturbation = vec3(
            cos(angleNoise + fractal) * 0.18,
            sin(angleNoise + fractal) * 0.18,
            fractal * 0.1
          );
          
          facetNormal = normalize(baseNormal + perturbation);
        }
        
        return facetNormal;
      }
      
      void main() {
        vec3 baseNormal = normalize(vWorldNormal);
        
        // CRISTALES FACETADOS: Perturbar la normal para crear caras cristalinas
        vec3 normal = crystallineFacets(vUv, crystalScale, baseNormal);
        
        // Usar posición de luz si está disponible, sino usar dirección (EXACTAMENTE como en README)
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
        }
        
        // Cálculo de iluminación Lambertiana mejorado (EXACTAMENTE como en README)
        float dotNL = dot(normal, lightDir);
        
        // Suavizar la transición entre día y noche con mejor gradiente (EXACTAMENTE como en README)
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Añadir un poco de retroiluminación (rim lighting) para evitar oscuridad total (EXACTAMENTE como en README)
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Base metálica con variaciones
        vec3 color = metalColor;
        
        // Añadir ruido para variaciones sutiles
        float surfaceNoise = noise3D(vPosition * noiseScale);
        color = mix(color, color * 0.7, surfaceNoise * noiseIntensity);
        
        
        // Fragmentación angular en los bordes (reducida para dar más protagonismo a la purpurina)
        float edgeFactor = 1.0 - abs(dotNL);
        float fragmentation = angularCracks(vUv, 5.0 + fragmentationIntensity * 10.0, 2.0);
        
        // Aplicar fragmentación más suave
        if(edgeFactor > 0.8) {
          color = mix(color, color * 0.5, fragmentation * edgeFactor * 0.3);
        }
        
        // Ondas circulares sutiles en el interior
        float radialWaves = sin(length(vUv - 0.5) * 20.0 + time * 0.5) * 0.5 + 0.5;
        color = mix(color, color * 1.1, radialWaves * 0.1 * (1.0 - edgeFactor));
        
        // REFLEJO METÁLICO: Calcular reflexión especular usando la iluminación correcta del README
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 halfwayDir = normalize(lightDir + viewDir);
        
        // Especular metálico con la posición correcta de la luz
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        float specularStrength = pow(NdotH, mix(4.0, 128.0, 1.0 - roughness));
        vec3 specular = mix(vec3(0.04), color, metalness) * specularStrength;
        
        // Fresnel para bordes metálicos
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
        vec3 fresnelColor = mix(vec3(0.04), color, metalness) * fresnel;
        
        // Aplicar iluminación base con intensidad variable (EXACTAMENTE como en README)
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        vec3 finalColor = color * totalLight;
        
        // Añadir reflejos metálicos SOLO en la parte iluminada
        finalColor += (specular + fresnelColor * 0.5) * dayNight;
        
        // Añadir un toque de color oscuro para profundidad
        finalColor = mix(finalColor, finalColor * 0.5, pow(surfaceNoise, 2.0) * 0.3);
        
        gl_FragColor = vec4(finalColor, opacity);
      }
    `;return new ae({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},metalColor:{value:e.color||new v(8421504)},metalness:{value:e.metalness||.8},roughness:{value:e.roughness||.4},fragmentationIntensity:{value:e.fragmentationIntensity||.5},opacity:{value:e.opacity||.8},lightDirection:{value:new P(1,1,1).normalize()},lightPosition:{value:new P(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3},crystalScale:{value:e.crystalScale||80}},transparent:!0,blending:De,side:Pe,depthWrite:!1})}createIcyTerrainLayerMaterial(e){const t=`
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
    `,i=`
      uniform vec3 iceColor;
      uniform float iceReflectivity;
      uniform float frostDensity;
      uniform float crackIntensity;
      uniform float opacity;
      uniform float organicShapeIntensity;
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      uniform float time;
      uniform float crystalScale;
      uniform float crystalDensity;
      uniform float crystalSharpness;
      uniform float frostPattern;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      // Hash function mejorada
      float hash(vec3 p) {
        p = fract(p * vec3(443.8975, 397.2973, 491.1871));
        p += dot(p, p.yxz + 19.19);
        return fract((p.x + p.y) * p.z);
      }
      
      // Ruido 3D suave
      float noise3D(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float n = mix(
          mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
              mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
          mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
              mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
        
        return n;
      }
      
      // Grietas de hielo con profundidad real
      float iceCracks(vec2 p) {
        vec2 n = floor(p);
        vec2 f = fract(p);
        
        float minDist = 1.0;
        
        for(int i = -1; i <= 1; i++) {
          for(int j = -1; j <= 1; j++) {
            vec2 neighbor = vec2(float(i), float(j));
            vec2 point = neighbor + hash(vec3(n + neighbor, 0.0)) - f;
            float dist = length(point);
            minDist = min(minDist, dist);
          }
        }
        
        return minDist;
      }
      
      // Burbujas internas del hielo
      float iceBubbles(vec3 p) {
        float bubbles = 0.0;
        
        // Múltiples escalas de burbujas
        bubbles += smoothstep(0.8, 1.0, noise3D(p * 8.0)) * 0.6;
        bubbles += smoothstep(0.9, 1.0, noise3D(p * 16.0 + vec3(100.0))) * 0.3;
        bubbles += smoothstep(0.95, 1.0, noise3D(p * 32.0 + vec3(200.0))) * 0.1;
        
        return bubbles;
      }
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
        // Calcular dirección de luz
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Grietas principales
        float cracks = iceCracks(vUv * crackIntensity * 4.0);
        cracks = pow(cracks, 1.5);
        
        // MICROCRISTALES PROCEDURALES - cada planeta tiene su personalidad!
        float scale1 = crystalScale * 0.8;
        float scale2 = crystalScale * 1.6; 
        float scale3 = crystalScale * 3.2;
        
        float microCrystals1 = noise3D(vWorldPosition * scale1); // Cristales pequeños
        float microCrystals2 = noise3D(vWorldPosition * scale2); // Cristales diminutos  
        float microCrystals3 = noise3D(vWorldPosition * scale3); // Cristales microscópicos
        
        // Combinar escalas de cristales con densidad procedural
        float crystals = microCrystals1 * 0.6 + microCrystals2 * 0.3 + microCrystals3 * 0.1;
        crystals = smoothstep(0.3, 0.3 + crystalDensity, crystals);
        
        // Escarcha cristalina con patrón único por planeta
        float frost = noise3D(vWorldPosition * frostPattern);
        frost = smoothstep(0.6, 0.9, frost);
        
        // COLOR BASE: Hielo con microcristales
        vec3 baseIce = vec3(0.95, 0.97, 1.0);
        vec3 scratchColor = vec3(0.7, 0.8, 0.9);
        vec3 color = mix(scratchColor, baseIce, cracks);
        
        // Los microcristales añaden brillo y variación
        color = mix(color, vec3(0.98, 0.99, 1.0), crystals * 0.3);
        
        // La escarcha añade textura cristalina blanca
        color = mix(color, vec3(1.0, 1.0, 1.0), frost * 0.4);
        
        // Iluminación suave con transición gradual día/noche
        float smoothLight = ambientStrength + (lightIntensity * dayNight);
        
        // Añadir luz ambiental extra en la cara oculta para evitar corte seco
        float backLight = max(0.0, -dotNL) * 0.25; // Luz trasera suave
        float totalLight = smoothLight + backLight;
        
        vec3 finalColor = color * totalLight;
        
        // REFLEJOS DE MICROCRISTALES - esto es clave!
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 halfwayDir = normalize(lightDir + viewDir);
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        
        // Reflejo principal del hielo
        float mainSpecular = pow(NdotH, 60.0) * iceReflectivity;
        mainSpecular *= (0.2 + 0.8 * cracks);
        
        // REFLEJOS DE CRISTALES - múltiples puntos brillantes con sharpness procedural
        float sharpness1 = crystalSharpness * 0.6;
        float sharpness2 = crystalSharpness * 1.0;
        float crystalSpecular1 = pow(NdotH, sharpness1) * crystals * iceReflectivity * 0.8;
        float crystalSpecular2 = pow(NdotH, sharpness2) * crystals * iceReflectivity * 0.4;
        
        // Reflejos de escarcha - más suaves pero numerosos
        float frostSpecular = pow(NdotH, 40.0) * frost * iceReflectivity * 0.6;
        
        vec3 specular = vec3(mainSpecular + crystalSpecular1 + crystalSpecular2 + frostSpecular);
        finalColor += specular * dayNight;
        
        // Los cristales también crean pequeños destellos
        float sparkle = smoothstep(0.8, 1.0, crystals) * smoothstep(0.9, 1.0, NdotH);
        finalColor += vec3(1.0, 1.0, 1.0) * sparkle * 0.5 * dayNight;
        
        // Alpha con transición suave - visible en toda la superficie
        float smoothVisibility = smoothstep(-0.5, 0.3, dotNL); // Transición más gradual
        float alpha = (0.5 + 0.3 * cracks + 0.2 * crystals) * smoothVisibility * opacity;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;return new ae({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},iceColor:{value:e.color||new v(11591910)},iceReflectivity:{value:e.iceReflectivity||.8},frostDensity:{value:e.frostDensity||.5},crackIntensity:{value:e.crackIntensity||.4},opacity:{value:e.opacity||.7},crystalScale:{value:e.crystalScale||25},crystalDensity:{value:e.crystalDensity||.6},crystalSharpness:{value:e.crystalSharpness||150},frostPattern:{value:e.frostPattern||12},lightDirection:{value:new P(1,1,1).normalize()},lightPosition:{value:new P(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:Pe,depthWrite:!1})}addToScene(e){this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&e.add(t.mesh)}),this.effectLayers.length}update(e,t){this.effectLayers.forEach(i=>{if(i.material.uniforms.time&&(i.material.uniforms.time.value+=e),t!==void 0&&i.material.uniforms.rotationAngle&&(i.material.uniforms.rotationAngle.value=t),i.layerObject&&i.layerObject.update)try{i.layerObject.update(e,t)}catch(o){console.error(`Error updating layer ${i.name}:`,o)}i.mesh&&i.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof v?e:new v(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}createGenericLayerMaterial(e,t,i,o=!0,a=De){return i.lightDirection||(i.lightDirection={value:new P(1,1,1).normalize()}),i.lightPosition||(i.lightPosition={value:new P(0,0,0)}),new ae({vertexShader:e,fragmentShader:t,uniforms:i,transparent:o,blending:a,side:Pe,depthWrite:!1})}convertEffectToLayer(e,t,i=1.001){if(t instanceof ae){const o=t.clone();return o.transparent=!0,o.depthWrite=!1,o.uniforms.lightDirection||(o.uniforms.lightDirection={value:new P(1,1,1).normalize()}),this.addEffectLayer(e,o,i)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}getLayerMeshes(){const e={};return this.effectLayers.forEach(t=>{t.name&&t.mesh&&(e[t.name]=t.mesh)}),e}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const se={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4}};class vo{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i),a=t.numBands||Math.floor(o.uniform(se.NUM_BANDS.min,se.NUM_BANDS.max));this.params={numBands:a,bandPositions:t.bandPositions||this.generateDefaultBandPositions(a,i),bandWidths:t.bandWidths||this.generateDefaultBandWidths(a,i),rotationAngle:t.rotationAngle||o.uniform(se.ROTATION_ANGLE.min,se.ROTATION_ANGLE.max),baseColor:t.baseColor||new v(16753920),bandColor:t.bandColor||new v(16747520),animationSpeed:t.animationSpeed||o.uniform(se.ANIMATION_SPEED.min,se.ANIMATION_SPEED.max),turbulence:t.turbulence||o.uniform(se.TURBULENCE.min,se.TURBULENCE.max),noiseScale:t.noiseScale||o.uniform(se.NOISE_SCALE.min,se.NOISE_SCALE.max),opacity:t.opacity||.4,seed:i},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const i=new Array(20).fill(0),o=new D(t+12345);for(let a=0;a<e&&a<20;a++)i[a]=o.uniform(se.BAND_POSITIONS.min,se.BAND_POSITIONS.max);return i}generateDefaultBandWidths(e,t){const i=new Array(20).fill(0),o=new D(t+67890);for(let a=0;a<e&&a<20;a++)i[a]=o.uniform(se.BAND_WIDTHS.min,se.BAND_WIDTHS.max);return i}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity)}dispose(){}}function Qt(s,e,t){const i=e.cloud_bands||{},o=t||Math.floor(Math.random()*1e6),a=new D(o+4e3),r={numBands:i.num_bands||Math.floor(a.uniform(se.NUM_BANDS.min,se.NUM_BANDS.max)),bandPositions:i.positions||void 0,bandWidths:i.widths||void 0,rotationAngle:i.rotation||a.uniform(se.ROTATION_ANGLE.min,se.ROTATION_ANGLE.max),baseColor:e.base_color?new v().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new v(16753920),bandColor:new v(16777215),animationSpeed:a.uniform(se.ANIMATION_SPEED.min,se.ANIMATION_SPEED.max),turbulence:e.turbulence||a.uniform(se.TURBULENCE.min,se.TURBULENCE.max),noiseScale:a.uniform(se.NOISE_SCALE.min,se.NOISE_SCALE.max),opacity:.4,seed:o};return new vo(s,r)}const ue={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.2,max:.6}};class go{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i);this.params={stormCenters:t.stormCenters||this.generateStormCenters(i),stormColor:t.stormColor||new v(9109504),stormIntensity:t.stormIntensity||o.uniform(ue.STORM_INTENSITY.min,ue.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||o.uniform(ue.SPIRAL_SPEED.min,ue.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||o.uniform(ue.ANIMATION_SPEED.min,ue.ANIMATION_SPEED.max),opacity:t.opacity||o.uniform(ue.OPACITY.min,ue.OPACITY.max),seed:i},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new D(e+5e3),i=Math.floor(t.uniform(ue.STORM_COUNT.min,ue.STORM_COUNT.max)),o=[];for(let a=0;a<i;a++)o.push({x:t.uniform(ue.STORM_CENTERS.min,ue.STORM_CENTERS.max),y:t.uniform(ue.STORM_CENTERS.min,ue.STORM_CENTERS.max)});return o}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function Jt(s,e,t){const i=e.storms||{},o=t||Math.floor(Math.random()*1e6),a=new D(o+5e3),r={stormCenters:i.centers||void 0,stormColor:new v(9109504),stormIntensity:i.intensity||e.storm_intensity||a.uniform(ue.STORM_INTENSITY.min,ue.STORM_INTENSITY.max),spiralSpeed:i.spiral_speed||a.uniform(ue.SPIRAL_SPEED.min,ue.SPIRAL_SPEED.max),animationSpeed:a.uniform(ue.ANIMATION_SPEED.min,ue.ANIMATION_SPEED.max),opacity:a.uniform(ue.OPACITY.min,ue.OPACITY.max),seed:o};return new go(s,r)}const be={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class Ct{layerMesh;material;params;layerSystem;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    uniform float time;
    
    // Función de ruido para deformar la superficie
    float noise(vec3 p) {
      return sin(p.x * 4.0) * sin(p.y * 4.0) * sin(p.z * 4.0);
    }
    
    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;
      
      // Deformación sutil de la superficie para crear relieve rocoso
      vec3 deformed = position;
      float noiseValue = noise(position * 3.0 + time * 0.01);
      deformed += normal * noiseValue * 0.02;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
    }
  `;static fragmentShader=`
    uniform vec3 rockColor;
    uniform float roughness;
    uniform float rockDensity;
    uniform float opacity;
    uniform vec3 lightDirection;
    uniform float time;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    // Función de ruido
    float noise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float n = i.x + i.y * 57.0 + 113.0 * i.z;
      return mix(
        mix(mix(fract(sin(n) * 43758.5453), fract(sin(n + 1.0) * 43758.5453), f.x),
            mix(fract(sin(n + 57.0) * 43758.5453), fract(sin(n + 58.0) * 43758.5453), f.x), f.y),
        mix(mix(fract(sin(n + 113.0) * 43758.5453), fract(sin(n + 114.0) * 43758.5453), f.x),
            mix(fract(sin(n + 170.0) * 43758.5453), fract(sin(n + 171.0) * 43758.5453), f.x), f.y), f.z);
    }
    
    // FBM para más detalle
    float fbm(vec3 p) {
      float value = 0.0;
      float amplitude = 0.5;
      
      for(int i = 0; i < 4; i++) {
        value += amplitude * noise(p);
        p *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(lightDirection);
      
      // Textura rocosa
      float rockTexture = fbm(pos * rockDensity);
      rockTexture = pow(rockTexture, roughness);
      
      // Calcular iluminación
      float dotNL = dot(normal, lightDir);
      float visibility = smoothstep(-0.2, 0.2, dotNL);
      
      // Color final con variación rocosa
      vec3 color = rockColor * (0.7 + 0.3 * rockTexture);
      
      // Solo mostrar en la parte iluminada
      float alpha = rockTexture * visibility * opacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i),a=t.color instanceof v?t.color:t.color?new v(t.color):new v(9127187);this.params={color:a,roughness:t.roughness||o.uniform(be.ROUGHNESS.min,be.ROUGHNESS.max),rockDensity:t.rockDensity||o.uniform(be.ROCK_DENSITY.min,be.ROCK_DENSITY.max)*10,craterCount:t.craterCount||o.uniform(be.CRATER_COUNT.min,be.CRATER_COUNT.max),opacity:t.opacity||o.uniform(be.OPACITY.min,be.OPACITY.max),seed:i},this.material=new ae({vertexShader:Ct.vertexShader,fragmentShader:Ct.fragmentShader,uniforms:{time:{value:0},rockColor:{value:a},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new P(1,1,1).normalize()}},transparent:!0,side:Pe,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function yo(s,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),r=new D(a+8e3);return new Ct(s,{color:o?new v(o):new v(9127187),roughness:i.roughness||r.uniform(be.ROUGHNESS.min,be.ROUGHNESS.max),rockDensity:i.rock_density||r.uniform(be.ROCK_DENSITY.min,be.ROCK_DENSITY.max)*10,craterCount:i.crater_count||r.uniform(be.CRATER_COUNT.min,be.CRATER_COUNT.max),opacity:r.uniform(be.OPACITY.min,be.OPACITY.max),seed:a})}const B={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9},CRYSTAL_SCALE:{min:15,max:35},CRYSTAL_DENSITY:{min:.4,max:.8},CRYSTAL_SHARPNESS:{min:100,max:250},FROST_PATTERN:{min:8,max:16}};class xo{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i),a=t.color instanceof v?t.color:t.color?new v(t.color):new v(11591910);this.params={color:a,iceReflectivity:t.iceReflectivity||o.uniform(B.ICE_REFLECTIVITY.min,B.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||o.uniform(B.FROST_DENSITY.min,B.FROST_DENSITY.max),crackIntensity:t.crackIntensity||o.uniform(B.CRACK_INTENSITY.min,B.CRACK_INTENSITY.max),opacity:t.opacity||o.uniform(B.OPACITY.min,B.OPACITY.max),crystalScale:t.crystalScale||o.uniform(B.CRYSTAL_SCALE.min,B.CRYSTAL_SCALE.max),crystalDensity:t.crystalDensity||o.uniform(B.CRYSTAL_DENSITY.min,B.CRYSTAL_DENSITY.max),crystalSharpness:t.crystalSharpness||o.uniform(B.CRYSTAL_SHARPNESS.min,B.CRYSTAL_SHARPNESS.max),frostPattern:t.frostPattern||o.uniform(B.FROST_PATTERN.min,B.FROST_PATTERN.max),seed:i},this.material=this.layerSystem.createIcyTerrainLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function So(s,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),r=new D(a+6e3);return new xo(s,{color:o?new v(o):new v(11591910),iceReflectivity:i.ice_reflectivity||r.uniform(B.ICE_REFLECTIVITY.min,B.ICE_REFLECTIVITY.max),frostDensity:i.frost_density||r.uniform(B.FROST_DENSITY.min,B.FROST_DENSITY.max),crackIntensity:i.crack_intensity||r.uniform(B.CRACK_INTENSITY.min,B.CRACK_INTENSITY.max),opacity:r.uniform(B.OPACITY.min,B.OPACITY.max),crystalScale:i.crystal_scale||r.uniform(B.CRYSTAL_SCALE.min,B.CRYSTAL_SCALE.max),crystalDensity:i.crystal_density||r.uniform(B.CRYSTAL_DENSITY.min,B.CRYSTAL_DENSITY.max),crystalSharpness:i.crystal_sharpness||r.uniform(B.CRYSTAL_SHARPNESS.min,B.CRYSTAL_SHARPNESS.max),frostPattern:i.frost_pattern||r.uniform(B.FROST_PATTERN.min,B.FROST_PATTERN.max),seed:a})}const pe={METALNESS:{min:.5,max:5},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.2,max:.9},CRYSTAL_SCALE:{min:17,max:230}};class bo{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new D(i),a=t.color instanceof v?t.color:t.color?new v(t.color):new v(8421504);this.params={color:a,metalness:t.metalness||o.uniform(pe.METALNESS.min,pe.METALNESS.max),roughness:t.roughness||o.uniform(pe.ROUGHNESS.min,pe.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||o.uniform(pe.FRAGMENTATION_INTENSITY.min,pe.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||o.uniform(pe.OPACITY.min,pe.OPACITY.max),seed:i,noiseScale:t.noiseScale||8,noiseIntensity:t.noiseIntensity||.3,crystalScale:t.crystalScale||o.uniform(pe.CRYSTAL_SCALE.min,pe.CRYSTAL_SCALE.max)},this.material=this.layerSystem.createMetallicSurfaceLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function _o(s,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),r=new D(a+7e3),l=r.uniform(.8,1.2);return new bo(s,{color:o?new v(o):new v(8421504),metalness:i.metalness||r.uniform(pe.METALNESS.min,pe.METALNESS.max),roughness:i.roughness||r.uniform(pe.ROUGHNESS.min,pe.ROUGHNESS.max),fragmentationIntensity:i.fragmentation||r.uniform(pe.FRAGMENTATION_INTENSITY.min,pe.FRAGMENTATION_INTENSITY.max),opacity:r.uniform(pe.OPACITY.min,pe.OPACITY.max),seed:a,noiseScale:4*l,noiseIntensity:.3,crystalScale:r.uniform(pe.CRYSTAL_SCALE.min,pe.CRYSTAL_SCALE.max)})}class hi{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new D(i),this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||50,speed:t.speed||.5,size:t.size||1,opacity:t.opacity||.3,brightness:t.brightness||1,seed:i},this.particleCount=this.params.particleCount,this.geometry=new Me,this.createParticles(e),this.createMaterial(),this.particleSystem=new Be(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),o=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),r=e*1.3;for(let l=0;l<this.particleCount;l++){const m=this.rng.random()*Math.PI*2,d=this.rng.random()*2-1,n=this.rng.random(),u=Math.acos(d),g=r*Math.cbrt(n);t[l*3]=g*Math.sin(u)*Math.cos(m),t[l*3+1]=g*Math.sin(u)*Math.sin(m),t[l*3+2]=g*Math.cos(u),i[l]=this.params.size*(.5+this.rng.random()*.5),o[l]=this.params.speed*(.8+this.rng.random()*.4),a[l]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new U(t,3)),this.geometry.setAttribute("size",new U(i,1)),this.geometry.setAttribute("speed",new U(o,1)),this.geometry.setAttribute("phase",new U(a,1))}createMaterial(){const e=this.params.color instanceof v?this.params.color:new v().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),t=`
      attribute float size;
      attribute float speed;
      attribute float phase;
      
      varying float vOpacity;
      varying float vPhase;
      
      uniform float time;
      
      void main() {
        vPhase = phase;
        
        // Animación mucho más sutil para evitar patrones de líneas
        vec3 animatedPosition = position;
        float animOffset = time * speed * 0.02 + phase;
        animatedPosition.y += sin(animOffset + phase) * 0.1;
        animatedPosition.x += cos(animOffset * 0.7 + phase * 1.3) * 0.05;
        animatedPosition.z += sin(animOffset * 1.1 + phase * 0.8) * 0.05;
        
        // Calcular opacidad basada en la distancia al centro
        float distanceToCenter = length(position);
        vOpacity = 1.0 - smoothstep(0.0, 30.0, distanceToCenter);
        
        vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
        gl_PointSize = size * (100.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,i=`
      uniform vec3 color;
      uniform float opacity;
      uniform float brightness;
      
      varying float vOpacity;
      varying float vPhase;
      
      void main() {
        // Crear una partícula circular suave
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        
        // Gradiente suave desde el centro
        float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
        
        // Añadir un brillo extra en el centro
        float glow = exp(-dist * 4.0);
        
        // Combinar alpha con opacidad variable
        alpha *= vOpacity * opacity;
        
        // Color con brillo
        vec3 finalColor = color * brightness * (1.0 + glow * 2.0);
        
        // Añadir ligera variación de color
        finalColor += vec3(0.1, 0.1, 0.2) * glow;
        
        gl_FragColor = vec4(finalColor, alpha * (0.6 + 0.4 * glow));
      }
    `;this.material=new ae({uniforms:{time:{value:0},color:{value:e},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:t,fragmentShader:i,transparent:!0,blending:Re,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;const t=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*t}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof v?e.color:new v().setRGB(e.color[0],e.color[1],e.color[2]);this.material.uniforms.color.value=t}e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function ei(s,e,t){const i=e.streaks||e,o={color:i.color||[.95,.95,1],particleCount:i.particleCount||30,speed:i.speed||.3,size:.8,opacity:.2,brightness:.8,seed:t||Math.floor(Math.random()*1e6)};return new hi(s,o)}const Q={STAR_COUNT:{min:150,max:450},MIN_BRIGHTNESS:{min:.4,max:.7},MAX_BRIGHTNESS:{min:.8,max:1},MIN_SIZE:{min:1.2,max:1.8},MAX_SIZE:{min:3.5,max:5},DISTANCE:{min:300,max:600},TWINKLE_SPEED:{min:.002,max:.008}};class vt{starSystem;material;geometry;params;starCount;static vertexShader=`
    attribute float size;
    attribute float brightness;
    attribute float twinklePhase;
    
    uniform float time;
    uniform float twinkleSpeed;
    
    varying float vBrightness;
    varying float vTwinkle;
    
    void main() {
      vBrightness = brightness;
      
      // Parpadeo sutil de las estrellas
      vTwinkle = 0.8 + 0.2 * sin(time * twinkleSpeed + twinklePhase);
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Tamaño basado en atributo y distancia - PUNTO MEDIO
      gl_PointSize = size * (300.0 / -mvPosition.z);
    }
  `;static fragmentShader=`
    uniform vec3 starColor;
    
    varying float vBrightness;
    varying float vTwinkle;
    
    void main() {
      // Crear forma circular de estrella
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      // Gradiente circular para efecto de estrella - EQUILIBRADO
      float alpha = (1.0 - dist * 2.0) * vBrightness * vTwinkle;
      alpha = pow(alpha, 1.5); // Balance entre concentración y visibilidad
      alpha *= 1.3; // Intensidad moderada
      
      // Color de estrella con brillo variable - EQUILIBRADO
      vec3 finalColor = starColor * (0.9 + 0.2 * vTwinkle);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(e,t={}){const i=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6);console.log("🌟 StarFieldEffect - Using seed:",i,"from params:",t.seed);const o=new D(i+1e4);this.params={color:t.color||new v(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(o.uniform(Q.STAR_COUNT.min,Q.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:o.uniform(Q.MIN_BRIGHTNESS.min,Q.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:o.uniform(Q.MAX_BRIGHTNESS.min,Q.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:o.uniform(Q.MIN_SIZE.min,Q.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:o.uniform(Q.MAX_SIZE.min,Q.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:o.uniform(Q.DISTANCE.min,Q.DISTANCE.max),seed:i,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:o.uniform(Q.TWINKLE_SPEED.min,Q.TWINKLE_SPEED.max)},this.starCount=this.params.starCount,this.geometry=new Me,this.material=this.createMaterial(),this.generateStars(e),this.starSystem=new Be(this.geometry,this.material)}generateStars(e){const t=new Float32Array(this.starCount*3),i=new Float32Array(this.starCount),o=new Float32Array(this.starCount),a=new Float32Array(this.starCount),r=this.params.seed,l=new D(r+1e4);for(let m=0;m<this.starCount;m++){const d=l.uniform(0,2*Math.PI),n=l.uniform(-1,1),u=Math.acos(n),g=this.params.distance*l.uniform(.8,1.2),p=g*Math.sin(u)*Math.cos(d),y=g*Math.sin(u)*Math.sin(d),E=g*Math.cos(u);t[m*3]=p,t[m*3+1]=y,t[m*3+2]=E,i[m]=l.uniform(this.params.minSize,this.params.maxSize),o[m]=l.uniform(this.params.minBrightness,this.params.maxBrightness),a[m]=l.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new U(t,3)),this.geometry.setAttribute("size",new U(i,1)),this.geometry.setAttribute("brightness",new U(o,1)),this.geometry.setAttribute("twinklePhase",new U(a,1))}createMaterial(){const e=this.params.color instanceof v?this.params.color:new v(this.params.color);return new ae({vertexShader:vt.vertexShader,fragmentShader:vt.fragmentShader,uniforms:{time:{value:0},starColor:{value:e},twinkleSpeed:{value:this.params.twinkleSpeed}},transparent:!0,blending:Re,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.starSystem.position.copy(t),e.add(this.starSystem)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof v?e.color:new v(e.color);this.material.uniforms.starColor.value=t}e.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=e.twinkleSpeed)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Eo(s,e){const t=e!==void 0?e:Math.floor(Math.random()*1e6);console.log("🌟 createStarFieldFromPythonData - planetSeed:",e,"final seed:",t);const i=new D(t+1e4),o={color:new v(16777215),starCount:Math.floor(i.uniform(Q.STAR_COUNT.min,Q.STAR_COUNT.max)),minBrightness:i.uniform(Q.MIN_BRIGHTNESS.min,Q.MIN_BRIGHTNESS.max),maxBrightness:i.uniform(Q.MAX_BRIGHTNESS.min,Q.MAX_BRIGHTNESS.max),minSize:i.uniform(Q.MIN_SIZE.min,Q.MIN_SIZE.max),maxSize:i.uniform(Q.MAX_SIZE.min,Q.MAX_SIZE.max),distance:i.uniform(Q.DISTANCE.min,Q.DISTANCE.max),seed:t,twinkleSpeed:i.uniform(Q.TWINKLE_SPEED.min,Q.TWINKLE_SPEED.max)};return new vt(s,o)}const Ve={SIZE:{min:.12,max:.2},ROTATION_SPEED:{min:.05,max:.1},OPACITY:{min:.15,max:.35},TIME_SPEED:{min:.8,max:1.5}},wo=`
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
`,Co=`
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
`;class At{mesh;material;params;startTime;proceduralParams;constructor(e){const t=e.seed||Math.floor(Math.random()*1e6),i=new D(t);this.startTime=e.startTime||t%1e4/1e3,this.proceduralParams={size:i.uniform(Ve.SIZE.min,Ve.SIZE.max),rotationSpeed:i.uniform(Ve.ROTATION_SPEED.min,Ve.ROTATION_SPEED.max),opacity:i.uniform(Ve.OPACITY.min,Ve.OPACITY.max),timeSpeed:i.uniform(Ve.TIME_SPEED.min,Ve.TIME_SPEED.max)},this.params=e;const o=new v(e.planetColor),a=o.clone();a.multiplyScalar(1-e.hexagonData.color_darken_factor),this.material=new ae({uniforms:{time:{value:0},planetColor:{value:o},hexagonColor:{value:a},darkenFactor:{value:e.hexagonData.color_darken_factor},opacity:{value:this.proceduralParams.opacity},hexagonRadius:{value:this.proceduralParams.size},rotationSpeed:{value:this.proceduralParams.rotationSpeed},pole:{value:e.hexagonData.pole==="north"?1:-1},visibility:{value:1}},vertexShader:wo,fragmentShader:Co,transparent:!0,depthWrite:!1,side:Pe,blending:e.hexagonData.nebula_blend?Re:De});const r=this.createCurvedHexagonGeometry(e.hexagonData.pole,e.hexagonData.radius);this.mesh=new ge(r,this.material),this.mesh.scale.set(e.planetRadius,e.planetRadius,e.planetRadius),this.updateVisibility()}updateVisibility(){if(!this.params.hexagonData.enabled){this.material.uniforms.visibility.value=0;return}const t=(this.params.currentTime||0)%this.params.hexagonData.cycle_duration_years/this.params.hexagonData.cycle_duration_years,i=this.params.hexagonData.visible_duration_years/this.params.hexagonData.cycle_duration_years;if(t<i){const o=t/i;o<.1?this.material.uniforms.visibility.value=o/.1:o>.9?this.material.uniforms.visibility.value=(1-o)/.1:this.material.uniforms.visibility.value=1}else this.material.uniforms.visibility.value=0}update(e){const i=(this.startTime+Date.now()/1e3*this.proceduralParams.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.updateVisibility()}addToScene(e){e.add(this.mesh)}removeFromScene(e){e.remove(this.mesh)}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}createCurvedHexagonGeometry(e,t){const i=e==="north"?1:-1,o=64,a=1,r=new zt(a,a,o,o),l=r.attributes.position,m=new P;for(let d=0;d<l.count;d++){m.fromBufferAttribute(l,d);const n=m.x,u=m.y,g=Math.sqrt(n*n+u*u);if(g<=a/2){const y=g*Math.PI*.5,E=i*Math.cos(y)*1.02,b=Math.sin(y)*1.02;if(g>0){const h=n/g,f=u/g;m.x=h*b,m.y=E,m.z=f*b}else m.x=0,m.y=i*1.02,m.z=0}l.setXYZ(d,m.x,m.y,m.z)}return l.needsUpdate=!0,r.computeVertexNormals(),r}setEnabled(e){this.mesh.visible=e}}class ti{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new v(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new Oe,this.generateFragments()}generateFragments(){const e=new Je({color:this.params.color instanceof v?this.params.color:new v(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),o=new ge(i,e);this.positionFragment(o,t),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const a=this.params.size*(Math.random()*.5+.75);o.scale.set(a,a,a),o.userData={rotationAxis:new P(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(o),this.fragments.add(o)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],o=[];o.push(new P(0,0,0));for(let l=0;l<e;l++){const m=l/e*Math.PI*2,d=Math.random()*.5+.5,n=(Math.random()-.5)*.3;o.push(new P(Math.cos(m)*d,Math.sin(m)*d,n))}for(let l=1;l<=e;l++){const d=o[l].clone();d.z+=Math.random()*.4+.2,o.push(d)}for(const l of o)t.push(l.x,l.y,l.z);for(let l=1;l<e;l++)i.push(0,l,l+1);i.push(0,e,1);const a=o.length-e-1;for(let l=0;l<e-1;l++)i.push(a,a+l+2,a+l+1);i.push(a,a+1,a+e);for(let l=0;l<e;l++){const m=l+1,d=(l+1)%e+1,n=m+e,u=d+e;i.push(m,n,d),i.push(d,n,u)}const r=new Me;return r.setAttribute("position",new Rt(t,3)),r.setIndex(i),r.computeVertexNormals(),r}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),o=(Math.random()-.5)*this.planetRadius*.5;return new P(Math.cos(t)*i,o,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new P(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new P(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const o=t.userData;t.rotateOnAxis(o.rotationAxis,o.rotationSpeed*e*this.params.animationSpeed);const a=Math.sin(Date.now()*.001+i)*.001;t.position.y+=a*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof v?e.color:new v(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof Je&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof Je&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Qe&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Qe&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function Et(s){const e=s.replace("#",""),t=parseInt(e.substr(0,2),16)/255,i=parseInt(e.substr(2,2),16)/255,o=parseInt(e.substr(4,2),16)/255;return new v(t,i,o)}function Nt(s){return s.length>=3?new v(s[0],s[1],s[2]):new v(.5,.5,.5)}function nt(s){if(s.ocean_color){if(typeof s.ocean_color=="string")return Et(s.ocean_color);if(Array.isArray(s.ocean_color))return Nt(s.ocean_color)}if(s.planet_info?.base_color){if(typeof s.planet_info.base_color=="string")return Et(s.planet_info.base_color);if(Array.isArray(s.planet_info.base_color))return Nt(s.planet_info.base_color)}if(s.base_color){if(typeof s.base_color=="string")return Et(s.base_color);if(Array.isArray(s.base_color))return Nt(s.base_color)}const e=s.planet_info?.type||s.type||"Unknown";return To(e)}function To(s){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[s]||"#FFFFFF";return Et(t)}class gt{material;params;oceanLayerMesh;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;static fragmentShader=`
    uniform float time;
    uniform vec3 baseColor;
    
    // Configuración de ondas
    uniform float waveIntensity;
    uniform float waveSpeed;
    uniform float waveScale;
    
    // Configuración de masas terrestres
    uniform float landmassThreshold;
    uniform vec3 landmassColor;
    
    // Configuración de océano profundo
    uniform float deepOceanThreshold;
    uniform float deepOceanMultiplier;
    
    // Configuración de espuma
    uniform float foamThreshold;
    uniform vec3 foamColor;
    uniform float foamIntensity;
    
    // Color base del océano
    uniform vec3 oceanColor;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    // Función de ruido 3D
    float hash(float n) {
      return fract(sin(n) * 43758.5453123);
    }
    
    float noise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float n = i.x + i.y * 57.0 + 113.0 * i.z;
      return mix(
        mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
            mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
        mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
            mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
    }
    
    // Fractales de ruido para mayor complejidad
    float fractalNoise(vec3 p, int octaves) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for(int i = 0; i < 6; i++) {
        if(i >= octaves) break;
        value += amplitude * noise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = oceanColor;
      
      // Ondas animadas del agua - múltiples capas
      float waves1 = sin(pos.x * waveScale + time * waveSpeed) * sin(pos.z * waveScale + time * waveSpeed * 1.5);
      float waves2 = sin(pos.x * waveScale * 1.5 - time * waveSpeed * 1.8) * sin(pos.z * waveScale * 1.2 + time * waveSpeed * 2.2);
      float waves3 = sin(pos.x * waveScale * 2.0 + time * waveSpeed * 0.7) * sin(pos.z * waveScale * 2.5 - time * waveSpeed * 1.3);
      
      // Combinar ondas con diferentes intensidades
      float totalWaves = (waves1 + waves2 * 0.5 + waves3 * 0.3) * waveIntensity;
      
      // Aplicar efecto de ondas al color
      vec3 waveColor = vec3(0.0, 0.2, 0.4);
      color += waveColor * totalWaves;
      
      // Masas continentales (áreas más altas = más claras)
      float landmass = fractalNoise(pos * 3.0, 4);
      if(landmass > landmassThreshold) {
        float landIntensity = smoothstep(landmassThreshold, 0.7, landmass);
        color = mix(color, landmassColor, landIntensity);
      }
      
      // Fosas oceánicas profundas (más oscuras)
      float depth = fractalNoise(pos * 6.0 + vec3(time * 0.1), 3);
      if(depth < deepOceanThreshold) {
        color *= deepOceanMultiplier;
      }
      
      // Espuma/crestas de olas
      float foam = fractalNoise(pos * 20.0 + vec3(time * 3.0), 2);
      if(foam > foamThreshold) {
        float foamMix = smoothstep(foamThreshold, 1.0, foam) * foamIntensity;
        color = mix(color, foamColor, foamMix);
      }
      
      // Efectos de cáusticas submarinas
      float caustics = sin(pos.x * 30.0 + time * 4.0) * sin(pos.z * 25.0 + time * 3.5);
      caustics = pow(max(caustics, 0.0), 3.0);
      color += vec3(0.1, 0.3, 0.5) * caustics * 0.2;
      
      // Reflejos de superficie
      float fresnel = pow(1.0 - abs(dot(vNormal, normalize(vWorldPosition))), 2.0);
      vec3 reflectionColor = vec3(0.8, 0.9, 1.0);
      color = mix(color, reflectionColor, fresnel * 0.3);
      
      // Iluminación básica con efecto submarino
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      
      // Atenuación de luz en agua
      float waterAttenuation = 0.7 + 0.3 * lighting;
      color *= waterAttenuation;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new v(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new v(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new v(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof v?this.params.landmassColor:new v(this.params.landmassColor),t=this.params.foamColor instanceof v?this.params.foamColor:new v(this.params.foamColor),i=this.params.oceanColor instanceof v?this.params.oceanColor:new v(this.params.oceanColor);return new ae({vertexShader:gt.vertexShader,fragmentShader:gt.fragmentShader,uniforms:{time:{value:0},baseColor:{value:i},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:i}}})}apply(e){this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const i=new ge(t,this.material);i.position.copy(e.position),i.rotation.copy(e.rotation),this.oceanLayerMesh=i}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const i=e[t];if(i!==void 0&&this.material.uniforms[t])if(i instanceof v||Array.isArray(i)){const o=i instanceof v?i:new v(i);this.material.uniforms[t].value=o}else this.material.uniforms[t].value=i})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh)):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function Po(s){const e=nt(s),t=[e.r,e.g,e.b];let i=.3,o=2,a=8,r=.3,l=.2;if(s.seeds){const d=s.seeds.shape_seed,u=(g=>{let p=g;return()=>(p=(p*1664525+1013904223)%4294967296,p/4294967296)})(d);i=.2+u()*.3,o=1.5+u()*1.5,a=6+u()*6,r=.25+u()*.15,l=.15+u()*.1}const m={waveIntensity:i,waveSpeed:o,waveScale:a,landmassThreshold:r,deepOceanThreshold:l,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new v(.9,.9,1),foamIntensity:.4,oceanColor:t};return new gt(m)}class yt{mesh;material;params;static vertexShader=`
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vDisplacement;
    
    uniform float uTime;
    uniform float uWaveAmplitude;
    uniform float uNoiseScale;
    uniform float uSecondaryWaveScale;
    uniform float uPrimaryFlowSpeed;
    uniform float uSecondaryFlowSpeed;
    
    //	Simplex 3D Noise 
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    float snoise(vec3 v){ 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;

      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );

      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;

      i = mod(i, 289.0 ); 
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

      float n_ = 1.0/7.0;
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);

      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }
    
    // FBM (Fractal Brownian Motion)
    float fbm(vec3 p, int octaves, float persistence, float lacunarity) {
      float amplitude = 0.5;
      float frequency = 1.0;
      float total = 0.0;
      float normalization = 0.0;

      for (int i = 0; i < octaves; i++) {
        float noiseValue = snoise(p * frequency);
        total += noiseValue * amplitude;
        normalization += amplitude;
        amplitude *= persistence;
        frequency *= lacunarity;
      }

      return total / normalization;
    }
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      
      vec3 pos = position;
      
      // Corrientes oceánicas principales usando FBM - velocidad configurable
      float primaryFlow = fbm(
        vec3(pos.x * uNoiseScale, pos.y * uNoiseScale, pos.z * uNoiseScale + uTime * uPrimaryFlowSpeed),
        4, 0.5, 2.0
      );
      
      // Corrientes secundarias más pequeñas - movimiento contrario configurable
      float secondaryFlow = fbm(
        vec3(pos.x * uSecondaryWaveScale, pos.y * uSecondaryWaveScale, pos.z * uSecondaryWaveScale - uTime * uSecondaryFlowSpeed),
        3, 0.4, 2.5
      );
      
      // Combinar ambas corrientes
      float displacement = primaryFlow * 0.7 + secondaryFlow * 0.3;
      displacement *= uWaveAmplitude;
      
      // Aplicar desplazamiento en la dirección de la normal
      pos += normal * displacement;
      vDisplacement = displacement;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      vViewPosition = -mvPosition.xyz;
      vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vDisplacement;
    
    uniform float uTime;
    uniform float uFlowSpeed;
    uniform float uFresnelPower;
    uniform float uOpacity;
    uniform vec3 uColorDeep;
    uniform vec3 uColorShallow;
    uniform float uNoiseScale;
    uniform float uUvPatternSpeed1;
    uniform float uUvPatternSpeed2;
    
    // Simplex noise function (same as vertex shader)
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
    
    float snoise(vec3 v){ 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;
      i = mod(i, 289.0 ); 
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 1.0/7.0;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }
    
    void main() {
      vec3 viewDirection = normalize(vViewPosition);
      vec3 normal = normalize(vNormal);
      
      // Efecto Fresnel para los bordes
      float fresnel = pow(1.0 - abs(dot(viewDirection, normal)), uFresnelPower);
      
      // Patrón de flujo animado - más dinámico
      float flowPattern = snoise(vWorldPosition * uNoiseScale + vec3(uTime * uFlowSpeed, uTime * uFlowSpeed * 0.5, 0.0));
      flowPattern = (flowPattern + 1.0) * 0.5; // Normalizar a 0-1
      
      // Variación adicional basada en la posición UV - velocidades configurables
      float uvPattern = sin(vUv.x * 15.0 + uTime * uUvPatternSpeed1) * cos(vUv.y * 15.0 - uTime * uUvPatternSpeed2);
      uvPattern = (uvPattern + 1.0) * 0.5;
      
      // Combinar patrones
      float combinedPattern = flowPattern * 0.7 + uvPattern * 0.3;
      
      // Calcular opacidad basada en el desplazamiento y el fresnel
      float opacity = uOpacity;
      opacity *= (0.4 + fresnel * 0.6); // Más visible en los bordes
      opacity *= (0.6 + abs(vDisplacement) * 15.0); // Más visible donde hay olas
      opacity *= (0.5 + combinedPattern * 0.5); // Variación por el patrón de flujo
      
      // Aumentar opacidad en áreas iluminadas para mejor contraste
      float lightIntensity = max(dot(normal, vec3(0.5, 0.8, 0.3)), 0.0);
      opacity = mix(opacity, opacity * 1.3, lightIntensity * 0.5);
      
      // Color gradiente basado en la profundidad y el patrón
      vec3 color = mix(uColorDeep, uColorShallow, combinedPattern);
      
      // Añadir un brillo sutil en las crestas de las olas
      float highlight = smoothstep(0.01, 0.02, vDisplacement);
      color += vec3(0.2, 0.3, 0.4) * highlight * fresnel;
      
      // Sombreado adaptativo según la iluminación
      vec3 lightDir = normalize(vec3(0.5, 0.8, 0.3));
      float NdotL = max(dot(normal, lightDir), 0.0);
      
      // En áreas iluminadas, usar colores más oscuros para contraste
      vec3 finalColor = mix(
        vec3(0.4, 0.5, 0.6), // Color oscuro para áreas iluminadas
        vec3(0.9, 0.95, 1.0), // Color claro para áreas en sombra
        1.0 - NdotL
      );
      
      // Aplicar sombreado
      finalColor *= (0.5 + 0.5 * NdotL);
      finalColor *= (0.7 + 0.3 * fresnel);
      
      // Mezclar con color del agua, más intenso en áreas iluminadas
      float colorMix = mix(0.35, 0.55, NdotL);
      finalColor = mix(finalColor, color, colorMix);
      
      gl_FragColor = vec4(finalColor, opacity);
    }
  `;constructor(e,t={}){this.params={radius:t.radius||e*.999,detail:t.detail||128,flowSpeed:t.flowSpeed||.5,waveAmplitude:t.waveAmplitude||.02,opacity:t.opacity||.75,colorDeep:t.colorDeep||new v(4147),colorShallow:t.colorShallow||new v(26333),...t};const i=new Ue(this.params.radius,this.params.detail,this.params.detail);this.material=new ae({vertexShader:yt.vertexShader,fragmentShader:yt.fragmentShader,uniforms:{uTime:{value:0},uFlowSpeed:{value:this.params.flowSpeed},uWaveAmplitude:{value:this.params.waveAmplitude},uFresnelPower:{value:1.5},uOpacity:{value:this.params.opacity},uColorDeep:{value:this.params.colorDeep instanceof v?this.params.colorDeep:new v(this.params.colorDeep)},uColorShallow:{value:this.params.colorShallow instanceof v?this.params.colorShallow:new v(this.params.colorShallow)},uNoiseScale:{value:3},uSecondaryWaveScale:{value:6},uPrimaryFlowSpeed:{value:this.params.flowSpeed||.5},uSecondaryFlowSpeed:{value:(this.params.flowSpeed||.5)*1.6},uUvPatternSpeed1:{value:(this.params.flowSpeed||.5)*4},uUvPatternSpeed2:{value:(this.params.flowSpeed||.5)*3}},transparent:!0,depthWrite:!1,depthTest:!0,side:Pe,blending:De}),this.mesh=new ge(i,this.material),this.mesh.renderOrder=-1,console.log("🌊 FluidLayersEffect created with params:",this.params)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh),console.log("🌊 FluidLayers mesh added to scene at position:",this.mesh.position)}update(e,t){this.material.uniforms.uTime.value+=e,t!==void 0&&(this.mesh.rotation.y=t)}updateParams(e){if(this.params={...this.params,...e},e.flowSpeed!==void 0&&(this.material.uniforms.uFlowSpeed.value=e.flowSpeed,this.material.uniforms.uPrimaryFlowSpeed.value=e.flowSpeed,this.material.uniforms.uSecondaryFlowSpeed.value=e.flowSpeed*1.6,this.material.uniforms.uUvPatternSpeed1.value=e.flowSpeed*4,this.material.uniforms.uUvPatternSpeed2.value=e.flowSpeed*3),e.waveAmplitude!==void 0&&(this.material.uniforms.uWaveAmplitude.value=e.waveAmplitude),e.opacity!==void 0&&(this.material.uniforms.uOpacity.value=e.opacity),e.colorDeep){const t=e.colorDeep instanceof v?e.colorDeep:new v(e.colorDeep);this.material.uniforms.uColorDeep.value=t}if(e.colorShallow){const t=e.colorShallow instanceof v?e.colorShallow:new v(e.colorShallow);this.material.uniforms.uColorShallow.value=t}}getObject3D(){return this.mesh}dispose(){this.mesh.geometry&&this.mesh.geometry.dispose(),this.material&&this.material.dispose()}}function ii(s,e){let t=.5,i=.025,o=.75;if(e.seeds){const r=e.seeds.shape_seed||e.seeds.planet_seed,m=(d=>{let n=d;return()=>(n=(n*1664525+1013904223)%4294967296,n/4294967296)})(r);t=.05+m()*.3,i=.02+m()*.02,o=.25+m()*.6}const a={radius:s*.999,detail:128,flowSpeed:t,waveAmplitude:i*.4,opacity:o,colorDeep:new v(4147),colorShallow:new v(26333)};return new yt(s,a)}class ui{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new Oe,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,o=t*Math.cos(i),a=t*Math.sin(i),r=a*.8,l=new Me,m=new Float32Array([0,0,0,o,r,a]);l.setAttribute("position",new U(m,3));const d=new Ot({color:16776960,linewidth:5,transparent:!1});this.sunLine=new Ft(l,d),this.debugGroup.add(this.sunLine);const n=e+Math.PI,u=t*.7,g=u*Math.cos(n),p=0,y=u*Math.sin(n),E=new Ue(this.planetRadius*.15,16,16),b=new li({color:16776960,transparent:!1,opacity:1}),h=new ge(E,b);h.position.set(g,p,y),this.debugGroup.add(h),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new Me,o=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new U(o,3));const a=new Ot({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new Ft(i,a),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,o=this.params.initialAngleRotation||0,a=e-t,r=2*Math.PI/i;return(o+a*r)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,o=this.sunLine.geometry,a=o.attributes.position.array;a[3]=i*Math.cos(t),a[4]=0,a[5]=i*Math.sin(t),o.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,o=i.attributes.position.array;o[0]=-t*Math.cos(e),o[1]=0,o[2]=-t*Math.sin(e),o[3]=t*Math.cos(e),o[4]=0,o[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function Mo(s,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:s.debug?.cosmic_origin_time||s.timing?.cosmic_origin_time||s.cosmicOriginTime,rotationPeriod:s.planet_info?.rotation_period||s.rotation_period_seconds||86400,initialAngleRotation:s.debug?.initial_angle_rotation||s.timing?.initial_angle_rotation||s.initialAngleRotation||0,planetRadius:e,orbitalAngle:s.timing?.orbital_angle||0,sunAngle:s.sun_angle||s.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new ui(e,t)}const Io=!1;class Xe{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return Xe.instance||(Xe.instance=new Xe),Xe.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new lt(t,e),fromPythonData:(e,t)=>$t(t,e.atmosphere||{})}),this.registerEffect("atmosphere_clouds",{create:(e,t)=>new et(t,e),fromPythonData:(e,t)=>at(t,e.surface_elements||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new hi(t,e),fromPythonData:(e,t)=>ei(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new rt(t,e),fromPythonData:(e,t)=>ao(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new mi(t,e),fromPythonData:(e,t)=>oo(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new ti(t,e),fromPythonData:(e,t)=>new ti(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("land_masses",{create:(e,t)=>new kt(t,e),fromPythonData:(e,t)=>It(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("ocean_waves",{create:(e,t)=>new gt(e),fromPythonData:(e,t)=>Po(e)}),this.registerEffect("fluid_layers",{create:(e,t)=>new yt(t,e),fromPythonData:(e,t)=>ii(t,e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("star_field",{create:(e,t)=>new vt(t,e),fromPythonData:(e,t)=>Eo(t,e.seeds?.planet_seed||e.planet_seed)}),this.registerEffect("tundra_snowflakes",{create:(e,t)=>new di(t,e),fromPythonData:(e,t)=>Kt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("anomaly_glitch_field",{create:(e,t)=>new ct(t,e),fromPythonData:(e,t)=>ro(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("anomaly_quantum_flux",{create:(e,t)=>new mt(t,e),fromPythonData:(e,t)=>lo(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("anomaly_temporal_rift",{create:(e,t)=>new dt(t,e),fromPythonData:(e,t)=>co(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("anomaly_void_sphere",{create:(e,t)=>new ht(t,e),fromPythonData:(e,t)=>mo(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("anomaly_phase_matter",{create:(e,t)=>new ut(t,e),fromPythonData:(e,t)=>ho(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("anomaly_geometric_morph",{create:(e,t)=>new ft(t,e),fromPythonData:(e,t)=>fo(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("anomaly_gravity_well",{create:(e,t)=>new He(t,e),fromPythonData:(e,t)=>po(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new ui(t,e),fromPythonData:(e,t)=>Mo(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,o,a=0){const r=this.creators.get(e);if(!r)return console.warn(`Effect type '${e}' not registered`),null;try{const l=r.create(t,i,o);if(!l)return null;const m={id:`effect_${this.nextId++}`,type:e,effect:l,priority:a,enabled:!0};return this.effects.set(m.id,m),m}catch(l){return console.error(`Error creating effect '${e}':`,l),null}}createEffectFromPythonData(e,t,i,o,a=0){const r=this.creators.get(e);if(!r||!r.fromPythonData)return this.createEffect(e,t,i,o,a);try{const l=r.fromPythonData(t,i,o);if(!l)return null;const m={id:`effect_${this.nextId++}`,type:e,effect:l,priority:a,enabled:!0};return this.effects.set(m.id,m),m}catch(l){return console.error(`Error creating effect '${e}' from Python data:`,l),null}}createEffectsFromList(e,t,i){const o=[],a=e.sort((r,l)=>(r.priority||0)-(l.priority||0));for(const r of a){const l=this.createEffect(r.type,r.params,t,i,r.priority);l&&(l.enabled=r.enabled!==!1,o.push(l))}return o}createEffectsFromPythonPlanetData(e,t,i,o,a){const r=[];try{const l=nt(e);if(a?this.layerSystem=a:this.layerSystem=new pt(i,l),e.surface_elements){const n=e.surface_elements;if(n.effects_3d&&Array.isArray(n.effects_3d))for(const u of n.effects_3d){if(u.type==="atmospheric_streaks"){const p=ei(t,u.params,e.seeds?.shape_seed+3e3),y={id:`effect_${this.nextId++}`,type:"atmospheric_streaks",effect:p,priority:u.priority||0,enabled:!0,name:"Atmospheric Streaks"};this.effects.set(y.id,y),r.push(y),p.addToScene(o,i.position);continue}const g=this.createEffect(u.type,u.params,t,i,u.priority||0);g?(g.name=u.type.replace(/_/g," ").replace(/\b\w/g,p=>p.toUpperCase()),r.push(g),g.effect.apply&&g.effect.apply(i),g.effect.addToScene&&g.effect.addToScene(o,i.position)):console.error("❌ FALLO AL CREAR EFECTO:",u.type)}switch(console.log(`🔍 Planet surface type: "${n.type}"`),console.log(`🔍 Planet info type: "${e.planet_info?.type}"`),n.type.toLowerCase()){case"gas_giant":if(this.layerSystem){const h=Qt(this.layerSystem,{...n,base_color:l,turbulence:e.turbulence||n.turbulence},e.seeds?.shape_seed||e.seeds?.planet_seed||e.seeds?.planet_seed),f=Jt(this.layerSystem,{...n,base_color:l,storm_intensity:e.storm_intensity||n.storm_intensity},(e.seeds?.shape_seed||e.seeds?.planet_seed)+1e3),N={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:h,priority:0,enabled:!0};this.effects.set(N.id,N),r.push(N);const T={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:f,priority:1,enabled:!0};if(this.effects.set(T.id,T),r.push(T),n.polar_hexagon&&n.polar_hexagon.enabled){const C=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,M=new At({planetColor:l,hexagonData:n.polar_hexagon,planetRadius:t,currentTime:C}),j={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:M,priority:10,enabled:!0};this.effects.set(j.id,j),r.push(j),o&&M.addToScene(o)}}else console.error("❌ PlanetLayerSystem not initialized!");break;case"frozen_gas_giant":if(this.layerSystem){const h=Qt(this.layerSystem,{...n,base_color:l,turbulence:e.turbulence||n.turbulence,icy_tint:!0},e.seeds?.shape_seed||e.seeds?.planet_seed),f={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:h,priority:0,enabled:!0};if(this.effects.set(f.id,f),r.push(f),n.polar_hexagon&&n.polar_hexagon.enabled){const N=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,T=new At({planetColor:l,hexagonData:n.polar_hexagon,planetRadius:t,currentTime:N}),C={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:T,priority:10,enabled:!0};this.effects.set(C.id,C),r.push(C),o&&T.addToScene(o)}}break;case"nebulous":if(this.layerSystem){const h=Jt(this.layerSystem,{...n,base_color:l,storm_intensity:n.nebula_density||.6,color_variance:n.color_variance||.2},(e.seeds?.shape_seed||e.seeds?.planet_seed)+2e3),f={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:h,priority:0,enabled:!0};if(this.effects.set(f.id,f),r.push(f),n.polar_hexagon&&n.polar_hexagon.enabled){const N=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,T=new At({planetColor:l,hexagonData:n.polar_hexagon,planetRadius:t,currentTime:N}),C={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:T,priority:10,enabled:!0};this.effects.set(C.id,C),r.push(C),o&&T.addToScene(o)}}break;case"metallic":case"metallic_3d":if(this.layerSystem){const h=_o(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),f={id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:h,priority:0,enabled:!0};this.effects.set(f.id,f),r.push(f)}break;case"rocky":if(this.layerSystem){const h=yo(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),f={id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:h,priority:0,enabled:!0};if(this.effects.set(f.id,f),r.push(f),n.clouds&&n.clouds.length>0){const N=at(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),T={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:N,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(T.id,T),r.push(T),N.addToScene(o,i.position)}}break;case"icy":if(this.layerSystem){const h=So(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),f={id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:h,priority:0,enabled:!0};this.effects.set(f.id,f),r.push(f);const N=so(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+8e3);if(N){const C={id:`effect_${this.nextId++}`,type:"transparent_land_masses",effect:N,priority:1,enabled:!0,name:"Ice Formations"};this.effects.set(C.id,C),r.push(C),N.addToScene(o,i.position),console.log("🧊 Ice Formations (transparent LandMasses) added to Icy planet")}else console.warn("❄️ Failed to create transparent LandMasses for Icy planet");if(n.clouds&&n.clouds.length>0){const C=at(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),M={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:C,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(M.id,M),r.push(M),C.addToScene(o,i.position),console.log("☁️ Atmospheric Clouds added to Icy planet")}const T=Xt(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(T){const C={id:`effect_${this.nextId++}`,type:"icy_features",effect:T,priority:2,enabled:!0,name:"Ice Crystals & Features"};this.effects.set(C.id,C),r.push(C),T.addToScene(o,i.position),console.log("❄️ Icy Features (crystals, cracks, ice caps) added to Icy planet")}}break;case"oceanic":const u=ii(t,e);if(u){const h={id:`effect_${this.nextId++}`,type:"fluid_layers",effect:u,priority:3,enabled:!0,name:"Fluid Ocean Layers"};this.effects.set(h.id,h),r.push(h),u.addToScene(o,i.position),console.log("🌊 FluidLayers effect added for oceanic planet")}if(n.green_patches&&n.green_patches.length>0){const h=It(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(h){const f={id:`effect_${this.nextId++}`,type:"land_masses",effect:h,priority:5,enabled:!0,name:"Land Masses (Islands)"};this.effects.set(f.id,f),r.push(f),h.addToScene(o,i.position)}}if(n.clouds&&n.clouds.length>0){const h=at(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),f={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:h,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(f.id,f),r.push(f),h.addToScene(o,i.position)}break;case"tundra":if(n.green_patches&&n.green_patches.length>0){const h=It(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(h){const f={id:`effect_${this.nextId++}`,type:"land_masses",effect:h,priority:5,enabled:!0,name:"Tundra Terrain"};this.effects.set(f.id,f),r.push(f),h.addToScene(o,i.position),console.log("🏔️ Tundra terrain (LandMasses) added")}}const g=Xt(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(g){const h={id:`effect_${this.nextId++}`,type:"icy_features",effect:g,priority:6,enabled:!0,name:"Snow Patches & Ice"};this.effects.set(h.id,h),r.push(h),g.addToScene(o,i.position),console.log("❄️ Sparse ice features added to Tundra planet")}if(n.clouds&&n.clouds.length>0){const h=at(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),f={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:h,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(f.id,f),r.push(f),h.addToScene(o,i.position),console.log("☁️ Atmospheric clouds added to Tundra planet")}const p=Kt(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+15e3);if(p){const h={id:`effect_${this.nextId++}`,type:"tundra_snowflakes",effect:p,priority:20,enabled:!0,name:"Snowflakes"};this.effects.set(h.id,h),r.push(h),p.addToScene(o,i.position),console.log("❄️ Tundra snowflakes added to Tundra planet")}break;case"anomaly":console.log("🌌 DETECTED ANOMALY PLANET - Creating effects"),console.log("🌌 Planet data:",{surfaceType:n.type,planetType:e.planet_info?.type}),console.log("🎭 SHOWCASE MODE: Activating ALL anomaly effects for evaluation");const E=["anomaly_glitch_field","anomaly_quantum_flux","anomaly_temporal_rift","anomaly_void_sphere","anomaly_phase_matter","anomaly_geometric_morph","anomaly_gravity_well"],b=E.length;for(let h=0;h<b;h++){const f=E[h],N=anomalySeed+h*1e4,T=this.createEffectFromPythonData(f,{...e,seeds:{...e.seeds,planet_seed:N}},t,i,10+h);T&&(T.name=f.replace(/_/g," ").replace(/\b\w/g,C=>C.toUpperCase()),r.push(T),T.effect.addToScene&&T.effect.addToScene(o,i.position),console.log(`🎭 Added anomaly effect: ${T.name}`))}if(e.atmosphere&&e.atmosphere.type!=="None"){const h=this.createEffectFromPythonData("atmosphere",e.atmosphere,t,i,5);h&&(r.push(h),h.effect.addToScene(o,i.position),console.log("🌫️ Anomalous atmosphere added"))}break;default:if(e.planet_info?.type?.toLowerCase()==="anomaly"){console.log("🌌 DETECTED ANOMALY PLANET via planet_info.type - Creating effects"),console.log("🎭 SHOWCASE MODE (alt detection): Activating ALL anomaly effects for evaluation");const f=["anomaly_glitch_field","anomaly_quantum_flux","anomaly_temporal_rift","anomaly_void_sphere","anomaly_phase_matter","anomaly_geometric_morph","anomaly_gravity_well"],N=f.length,T=e.seeds?.planet_seed||Math.floor(Math.random()*1e6);for(let C=0;C<N;C++){const M=f[C],j=T+C*1e4,O=this.createEffectFromPythonData(M,{...e,seeds:{...e.seeds,planet_seed:j}},t,i,10+C);O&&(O.name=M.replace(/_/g," ").replace(/\b\w/g,z=>z.toUpperCase()),r.push(O),O.effect.addToScene&&O.effect.addToScene(o,i.position),console.log(`🎭 Added anomaly effect: ${O.name}`))}if(e.atmosphere&&e.atmosphere.type!=="None"){const C=this.createEffectFromPythonData("atmosphere",e.atmosphere,t,i,5);C&&(r.push(C),C.effect.addToScene(o,i.position),console.log("🌫️ Anomalous atmosphere added"))}}else if(i.material instanceof Je){const h=nt(e);i.material.color.copy(h)}break}}else if(i.material instanceof Je){const n=nt(e);i.material.color.copy(n)}const m=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),d=m==="anomaly"||e.surface_elements?.type==="anomaly";if(e.atmosphere&&!d){if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const n=$t(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(n){const u={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:n,priority:20,enabled:!0};this.effects.set(u.id,u),r.push(u),n.addToScene(o,i.position)}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const n={...e.atmosphere};m==="oceanic"&&(n.opacity=Math.min(n.opacity||.3,.15),n.width=Math.min(n.width||15,8));const u=this.createEffectFromPythonData("atmosphere",n,t,i,5);u&&(r.push(u),u.effect.addToScene(o,i.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){const n=this.createEffectFromPythonData("ring_system",e,t,i,1);n?(r.push(n),n.effect.addToScene(o,i.position)):console.warn("⚠️ Failed to create ring effect")}if(e.surface_elements?.has_fragmentation_zones){const n=this.createEffectFromPythonData("fragmentation",e,t,i,5);n&&(r.push(n),n.effect.addToScene(o,i.position))}this.layerSystem&&this.layerSystem.addToScene(o);try{const n=this.createEffectFromPythonData("star_field",e,t,i,-100);n&&n.effect&&(n.effect.addToScene(o,i.position),r.push(n),console.log("⭐ StarField added automatically using planet seed:",e.seeds?.planet_seed))}catch(n){console.warn("Could not create StarField:",n)}return r.forEach((n,u)=>{}),r.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),r}catch(l){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",l),l}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);if(i){i.enabled=t!==void 0?t:!i.enabled;const o=i.effect;if(o&&o.getObject3D){const a=o.getObject3D();a&&(a.visible=i.enabled,console.log(`🎮 Toggle effect ${i.type}: visible = ${i.enabled}`))}if(this.layerSystem){const a=this.layerSystem.getLayerMeshes(),l={cloud_bands_layer:"cloudBands",cloud_gyros_layer:"cloudGyros",metallic_surface_layer:"metallicSurface",rocky_terrain_layer:"rockyTerrain",icy_terrain_layer:"icyTerrain"}[i.type];l&&a[l]&&(a[l].visible=i.enabled)}}else console.warn(`⚠️ Effect not found: ${e}`)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(o){console.error(`Error updating effect ${i.type}:`,o)}}updateLightForAllEffects(e){this.layerSystem&&this.layerSystem.updateFromThreeLight(e);for(const t of this.effects.values())if(t.enabled&&t.effect.updateFromThreeLight)try{t.effect.updateFromThreeLight(e)}catch(i){console.error(`Error updating light for effect ${t.type}:`,i)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear(),this.nextId=1}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const je=Xe.getInstance(),qe={atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function Ao(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"atmosphere",params:{...qe.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:qe.cloud_bands,priority:0},{type:"cloud_gyros",params:qe.cloud_gyros,priority:1},{type:"atmosphere",params:{...qe.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:qe.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...qe.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const Le={log:(s,e)=>{},warn:(s,e)=>{console.warn(`[Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`[Effects] ${s}`,e||"")},debug:(s,e)=>{}};new Date().toISOString();const No=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[i,o]=w.useState([]),[a,r]=w.useState({});w.useEffect(()=>{if(!s)return;const d=l(s);r(d),o(m(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=d)},[s,e]);function l(d){const n={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(d.planet_info&&d.surface_elements?n.hasValidStructure=!0:(d.planet_info||n.missingFields.push("planet_info"),d.surface_elements||n.missingFields.push("surface_elements")),d.surface_elements?.type==="oceanic"&&(n.oceanicData={hasAbstractLands:!!d.surface_elements.abstract_lands?.length,numGreenPatches:d.surface_elements.green_patches?.length||0,numClouds:d.surface_elements.clouds?.length||0,hasDepths:d.surface_elements.depths?.enabled||!1,baseColorIsBlue:d.planet_info?.base_color==="#0000FF",greenPatchColor:d.surface_elements.green_patches?.[0]?.color,issues:[]},n.oceanicData.numGreenPatches>15&&n.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),n.oceanicData.baseColorIsBlue||n.oceanicData.issues.push(`Color base no es azul puro: ${d.planet_info?.base_color}`),n.renderingIssues=n.oceanicData.issues),d.planet_info?.base_color&&d.planet_info?.type){const g={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[d.planet_info.type];g&&d.planet_info.base_color!==g?n.colorConsistency=`Inconsistente: esperado ${g}, recibido ${d.planet_info.base_color}`:n.colorConsistency="Correcto"}return n}function m(d){const n=[];if(!d.surface_elements?.type)return["No surface type defined"];const u=d.surface_elements.type.toLowerCase();switch(u){case"oceanic":n.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":n.push("RockyTerrainEffect");break;case"icy":n.push("IcyTerrainEffect");break;case"gas giant":n.push("GasGiantBandsEffect");break;default:n.push(`Generic effect for type: ${u}`)}return d.atmosphere?.density>0&&n.push("AtmosphericEffect"),d.rings&&n.push("RingSystemEffect"),n}return t?c.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[c.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),c.jsxs("div",{style:{marginBottom:"10px"},children:[c.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,c.jsx("br",{}),c.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,c.jsx("br",{}),c.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&c.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[c.jsx("strong",{children:"🌊 Oceanic Data:"}),c.jsx("br",{}),c.jsxs("span",{style:{color:a.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",a.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),c.jsx("br",{}),"Green Patches: ",a.oceanicData?.numGreenPatches,c.jsx("br",{}),"Clouds: ",a.oceanicData?.numClouds,c.jsx("br",{}),"Has Depths: ",a.oceanicData?.hasDepths?"Yes":"No",c.jsx("br",{}),a.oceanicData?.issues?.length>0&&c.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",c.jsx("br",{}),a.oceanicData.issues.map((d,n)=>c.jsxs("div",{children:["- ",d]},n))]})]}),c.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[c.jsx("strong",{children:"🎨 Effects Applied:"}),c.jsx("br",{}),i.map((d,n)=>c.jsxs("div",{style:{color:d.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",d]},n))]}),c.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function Do(s){w.useEffect(()=>{if(s&&s.surface_elements?.type==="oceanic"){s.surface_elements.green_patches?.length>0;const e=s.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[s])}const wt=2.5,oi=()=>{const s=45*Math.PI/180;return wt/(Math.tan(s/2)*.5)},Ro=({planetName:s,containerClassName:e="",width:t=800,height:i=600,autoRotate:o=!0,enableControls:a=!0,showDebugInfo:r=!1,planetData:l,cosmicOriginTime:m,initialAngleRotation:d,onDataLoaded:n,onEffectsCreated:u,onError:g})=>{const p=w.useRef(null),y=w.useRef(null),E=w.useRef(null),b=w.useRef(null),h=w.useRef(null),f=w.useRef(null),N=w.useRef(new Ri),T=w.useRef(null),C=w.useRef(0),M=w.useRef(null),[j,O]=w.useState(!0),[z,Z]=w.useState(null),[_,k]=w.useState(null),[V,G]=w.useState([]),[ee,q]=w.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),K=w.useRef([]),A=w.useRef(0),F=w.useRef(null),L=w.useRef(null),$=Math.floor(Date.now()/1e3),[te,ye]=w.useState(0),ie=m||_?.timing?.cosmic_origin_time||Date.now()/1e3-3600,xe=$-ie+te;C.current=xe;const _e=w.useCallback(()=>{if(!p.current||!E.current||!b.current)return;const x=p.current,I=x.clientWidth||400,S=x.clientHeight||400;E.current.setSize(I,S),b.current.aspect=I/S,b.current.updateProjectionMatrix()},[]),Ce=async x=>{if(!(!h.current||!y.current||!L.current)){Le.log("Applying modular effects from API data",{planet:x.planet_info.name,type:x.planet_info.type});try{Ne();const I=nt(x);L.current.updateBaseColor(I);const S=je.createEffectsFromPythonPlanetData(x,wt,h.current,y.current,L.current);console.log(`Planet: ${x.planet_info?.name}, Effects:`,S.map(R=>R.type)),G(S),K.current=S,u&&u(S),Le.log(`Successfully applied ${S.length} modular effects`),ot()}catch(I){Le.error("Error applying modular effects",I),Ze()}}},Ee=w.useCallback(()=>{if(!p.current)return!1;try{for(;p.current.firstChild;)p.current.removeChild(p.current.firstChild);y.current=null,b.current=null,E.current=null,h.current=null,he.current=null;const x=p.current,I=x.clientWidth||t||400,S=x.clientHeight||i||400,R=new Li;R.background=new v(1297),y.current=R;const oe=new Oi(45,I/S,.1,1e4),X=oi();oe.position.set(0,0,X),oe.lookAt(0,0,0),b.current=oe;const Y=new Fi({antialias:!0,alpha:!0,powerPreference:"high-performance"});return Y.setSize(I,S),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.shadowMap.enabled=!0,Y.shadowMap.type=zi,Y.toneMapping=ji,Y.toneMappingExposure=1.2,Y.outputColorSpace=Ui,p.current.appendChild(Y.domElement),E.current=Y,tt(R,null),it(R),a&&xt(oe,Y.domElement),!0}catch(x){return console.error("Error initializing Three.js:",x),!1}},[_,l,m]),Ie=x=>{if(!x)return 0;const I=x.sun_angle||x.lighting?.sun_angle;if(I!==void 0)return I;const S=x.timing?.current_orbital_angle||x.timing?.orbital_angle;return S??0},fe=w.useRef(null),Fe=w.useRef(null),Ae=w.useRef(null),he=w.useRef(null),ze=x=>{x.castShadow=!0,x.shadow.mapSize.width=2048,x.shadow.mapSize.height=2048,x.shadow.camera.near=.5,x.shadow.camera.far=50,x.shadow.camera.left=-10,x.shadow.camera.right=10,x.shadow.camera.top=10,x.shadow.camera.bottom=-10},Ye=x=>{if(!fe.current||!y.current)return;const I=Ie(x),S=10,R=I+Math.PI,oe=Math.sin(I)*5,X=S*Math.cos(R),Y=oe,We=S*Math.sin(R);fe.current.position.set(X,Y,We),fe.current.target.position.set(0,0,0),y.current.children.includes(fe.current.target)||y.current.add(fe.current.target),Fe.current&&Fe.current.position.set(-X*.5,0,-We*.5),L.current&&fe.current&&L.current.updateFromThreeLight(fe.current),fe.current&&je.updateLightForAllEffects(fe.current)},tt=(x,I)=>{{const S=new Ht(16777215,2);S.position.set(-10,5,10),S.target.position.set(0,0,0),S.castShadow=!0,ze(S),x.add(S),x.add(S.target),fe.current=S;const R=new Ht(16777215,.05);R.position.set(8,-3,-5),x.add(R),Fe.current=R;const oe=new ki(2236996,.1);x.add(oe),setTimeout(()=>{L.current&&S&&L.current.updateFromThreeLight(S),S&&je.updateLightForAllEffects(S)},50);return}},it=x=>{const I=new Ue(wt,128,64),S=new li({color:8421504}),R=new ge(I,S);R.castShadow=!0,R.receiveShadow=!0,R.position.set(0,0,0),x.add(R),h.current=R;const oe=new v(8421504);L.current=new pt(R,oe),L.current.addToScene(x)},xt=(x,I)=>{const S=new Wi(x,I);S.enableDamping=!0,S.dampingFactor=.05;const R=oi();S.minDistance=R*.5,S.maxDistance=R*2,S.autoRotate=o,S.autoRotateSpeed=.5,S.enablePan=!0,S.enableZoom=!0,S.target.set(0,0,0),f.current=S},Ge=w.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{O(!0),Z(null),Le.log("Loading planet data from API",{planetName:s});const I=await fetch("/api/planet/rendering-data");if(!I.ok)throw new Error(`HTTP error! status: ${I.status}`);const S=await I.json();if(!S.success)throw new Error(S.error||"Failed to fetch planet data");const R=S.planet_data,oe=S.timing,X=S.rendering_data,Y={planet_info:X?.planet_info||{name:R.name,type:R.planet_type,base_color:"#808080",radius:R.diameter/15e3,orbital_radius:R.orbital_radius},surface_elements:X?.surface_elements,atmosphere:X?.atmosphere,rings:X?.rings,effects_3d:X?.effects_3d,shader_uniforms:X?.shader_uniforms,universal_actions:X?.universal_actions,timing:{cosmic_origin_time:oe.cosmic_origin_time,current_time_seconds:oe.current_time_seconds,elapsed_time:oe.elapsed_time,initial_orbital_angle:R.initial_orbital_angle,current_orbital_angle:R.current_orbital_angle,max_orbital_radius:oe.max_orbital_radius,system_max_orbital_radius:R.system_max_orbital_radius},original_planet_data:R,seeds:X?.seeds};return k(Y),M.current=Y,Le.log("API data loaded successfully",{planet:Y.planet_info.name,type:Y.planet_info.type,hasEffects:!!Y.surface_elements,fullRenderingData:X}),n&&n(Y),Y}catch(x){const I=x instanceof Error?x.message:"Unknown error";return Z(I),g&&g(I),null}finally{O(!1),window.isLoadingPlanetData=!1}}},[s,n,g]);w.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{O(!0),Z(null),Le.log("Loading planet data from API",{planetName:s});const I=await fetch("/api/planet/rendering-data");if(!I.ok)throw new Error(`HTTP error! status: ${I.status}`);const S=await I.json();if(!S.success)throw new Error(S.error||"Failed to fetch planet data");const R=S.planet_data,oe=S.timing,X=S.rendering_data,Y={planet_info:X?.planet_info||{name:R.name,type:R.planet_type,base_color:"#808080",radius:R.diameter/15e3,orbital_radius:R.orbital_radius},surface_elements:X?.surface_elements,atmosphere:X?.atmosphere,rings:X?.rings,effects_3d:X?.effects_3d,shader_uniforms:X?.shader_uniforms,universal_actions:X?.universal_actions,timing:{cosmic_origin_time:oe.cosmic_origin_time,current_time_seconds:oe.current_time_seconds,elapsed_time:oe.elapsed_time,initial_orbital_angle:R.initial_orbital_angle,current_orbital_angle:R.current_orbital_angle,max_orbital_radius:oe.max_orbital_radius,system_max_orbital_radius:R.system_max_orbital_radius},original_planet_data:R,seeds:X?.seeds};k(Y),M.current=Y,Le.log("API data loaded successfully",{planet:Y.planet_info.name,type:Y.planet_info.type,hasEffects:!!Y.surface_elements,fullRenderingData:X}),Ye(Y),he.current&&y.current&&(y.current.remove(he.current),he.current.geometry.dispose(),he.current.material.dispose(),he.current=null),await Ce(Y),n&&n(Y)}catch(x){const I=x instanceof Error?x.message:"Unknown error";Z(I),g&&g(I),Ze()}finally{O(!1),window.isLoadingPlanetData=!1}}},[s,l,m,d]);const ke=w.useCallback(()=>{if(!_||!h.current)return;const x=l?.orbital_period_seconds||365.25*24*3600,I=2*Math.PI/x,S=_.timing?.initial_orbital_angle||0,R=Date.now()/1e3,oe=0,X=m||_.timing?.cosmic_origin_time||Date.now()/1e3-3600,Y=R-X+oe,We=(S+Y*I)%(2*Math.PI),Pt=_.timing?.max_orbital_radius||100,bt=20+_.planet_info?.orbital_radius/Pt*80,fi=bt,pi=bt*Math.cos(We),vi=fi*Math.sin(We);h.current.position.x=pi,h.current.position.z=vi,h.current.position.y=0},[_,l,m]),Tt=w.useCallback(async x=>{const I=x||_;if(I&&y.current)try{Ye(I),he.current&&y.current&&(y.current.remove(he.current),he.current.geometry.dispose(),he.current.material.dispose(),he.current=null),await Ce(I)}catch(S){Le.error("Error in applyProceduralShadersFromAPI:",S),Ze()}},[_]),Ze=()=>{if(!(!y.current||!h.current)){Le.warn("Applying fallback effects for planet type:",l?.planet_type);try{Ne(),h.current.material instanceof Je&&h.current.material.color.setHex(6710886);try{const x=Ao("generic"),I=je.createEffectsFromList(x,wt,h.current);I.forEach(S=>{S.effect.addToScene&&y.current&&h.current&&S.effect.addToScene(y.current,h.current.position)}),K.current=I,G(I)}catch(x){console.warn("Could not create fallback effects, using basic material only:",x)}ot()}catch(x){Le.error("Error applying fallback effects",x)}}},Ne=()=>{je.clearAllEffects(),K.current.forEach(x=>{try{x.effect.dispose&&x.effect.dispose()}catch{}}),K.current=[],G([])},St=w.useCallback(()=>{T.current=requestAnimationFrame(St);const x=performance.now(),I=N.current.getDelta();f.current&&f.current.update();try{je.updateAllEffects(I,h.current?.rotation.y)}catch{}if(h.current&&M.current){M.current.planet_info?.name;const S=M.current.original_planet_data,R=S?.orbital_period_seconds||365.25*24*3600,oe=M.current.timing?.initial_orbital_angle||0;m||M.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const X=S?.axial_tilt||0,Y=2*Math.PI/R;(oe+C.current*Y)%(2*Math.PI);const We=M.current.timing?.max_orbital_radius||M.current.timing?.system_max_orbital_radius,Pt=S?.orbital_radius;if(!We||!Pt)return;S?.eccentricity_factor,h.current.position.set(0,0,0);const Vt=S?.rotation_period_seconds||86400,bt=2*Math.PI/Vt;h.current.rotation.y=C.current*bt%(2*Math.PI),h.current.rotation.z=X*(Math.PI/180)}if(K.current.forEach(S=>{S.effect.updateUniforms&&S.effect.updateUniforms(I)}),E.current&&y.current&&b.current){const S=performance.now();E.current.render(y.current,b.current);const R=performance.now()-S;if(x-A.current>5e3){const oe=1e3/(x-A.current);ot(),q(X=>({...X,frameRate:Math.round(oe),renderTime:Math.round(R*100)/100})),A.current=x}}},[]),ot=w.useCallback(()=>{const x=je.getStats();q(I=>({...I,activeEffects:x.activeEffects,enabledEffects:x.enabledEffects}))},[]);return w.useEffect(()=>{let x=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!x)return;const S=await Ge();if(!x)return;if(!Ee()){x&&Z("Failed to initialize 3D renderer");return}if(!x||(St(),p.current&&"ResizeObserver"in window&&(F.current=new ResizeObserver(_e),F.current.observe(p.current)),window.addEventListener("resize",_e),!x))return;S?await Tt(S):Ze()}catch(S){x&&Z(S instanceof Error?S.message:"Unknown initialization error")}})(),()=>{if(x=!1,M.current=null,T.current&&cancelAnimationFrame(T.current),F.current&&F.current.disconnect(),window.removeEventListener("resize",_e),Ne(),L.current&&(L.current.dispose(),L.current=null),f.current&&f.current.dispose(),Ae.current&&y.current&&(y.current.remove(Ae.current),Ae.current.geometry.dispose(),Ae.current.material.dispose(),Ae.current=null),he.current&&y.current&&(y.current.remove(he.current),he.current.geometry.dispose(),he.current.material.dispose(),he.current=null),E.current&&p.current)try{p.current.contains(E.current.domElement)&&p.current.removeChild(E.current.domElement),E.current.dispose()}catch{}}},[]),w.useEffect(()=>{const x=setInterval(()=>{const I=je.getStats();q(S=>({...S,activeEffects:I.activeEffects,enabledEffects:I.enabledEffects}))},1e4);return()=>clearInterval(x)},[]),w.useEffect(()=>{_&&y.current&&h.current&&ke()},[_,ke]),Do(_),c.jsxs("div",{className:`relative ${e}`,children:[r&&_&&c.jsx(No,{planetData:_,showInPage:!0,showInConsole:!0}),c.jsx("div",{ref:p,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),j&&c.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:c.jsxs("div",{className:"text-white text-center",children:[c.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),c.jsx("div",{children:"Loading planet..."})]})}),z&&c.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[c.jsx("strong",{children:"Error:"})," ",z]}),_&&!j&&c.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[c.jsx("h3",{className:"text-lg font-bold",children:_.planet_info.name}),c.jsx("p",{className:"text-sm opacity-80",children:_.planet_info.type}),c.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[V.length," effects active"]}),_.surface_elements?.description&&c.jsx("p",{className:"text-xs mt-2 opacity-60",children:_.surface_elements.description.appearance})]}),r&&c.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[c.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),c.jsxs("div",{children:["Frame Rate: ",ee.frameRate," FPS"]}),c.jsxs("div",{children:["Render Time: ",ee.renderTime,"ms"]}),c.jsxs("div",{children:["Active Effects: ",ee.activeEffects]}),c.jsxs("div",{children:["Enabled Effects: ",ee.enabledEffects]}),c.jsxs("div",{className:"mt-2",children:[c.jsx("div",{className:"font-semibold",children:"Effects:"}),V.map(x=>c.jsxs("div",{className:"ml-2",children:[x.type," (",x.enabled?"ON":"OFF",")"]},x.id))]})]})]})};class Lo extends ai.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?c.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:c.jsxs("div",{className:"text-center p-4",children:[c.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),c.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const Oo=s=>c.jsx(Lo,{children:c.jsx(Ro,{...s})}),Fo=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:o,onEffectsCreated:a,effects:r,onToggleEffect:l})=>{const m=w.useRef(null),d=w.useRef(null),[n,u]=w.useState("Aligning Stargate..."),[g,p]=w.useState(!1),[y,E]=w.useState(!1),[b,h]=w.useState(!1),[f,N]=w.useState(!0),[T,C]=w.useState(!0),[M,j]=w.useState(null),[O,z]=w.useState(null);w.useEffect(()=>{r&&l&&r.forEach(_=>{je.toggleEffect(_.id,_.enabled)})},[r]),w.useEffect(()=>{const _=document.createElement("style");return _.textContent=`
      [data-rmiz-modal-overlay="visible"] {
        background-color: rgba(0, 0, 0, 0.8) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        transition: backdrop-filter 0.3s ease-in-out !important;
      }
      
      [data-rmiz-modal-img] {
        border-radius: 1rem !important;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8) !important;
      }
      
      [data-rmiz-modal-overlay="hidden"] {
        backdrop-filter: blur(0px) !important;
        -webkit-backdrop-filter: blur(0px) !important;
        transition: backdrop-filter 0.3s ease-in-out !important;
      }
    `,document.head.appendChild(_),()=>{document.head.removeChild(_)}},[]),w.useEffect(()=>{const _=m.current;if(!_)return;const k=_.getContext("2d");if(!k)return;let V=[];const G=800;let ee,q;const K=800;let A,F=.5;function L(){const ie=_?.parentElement;if(!ie||!_)return;const xe=ie.clientWidth,_e=ie.clientHeight;_.width=Math.min(xe,K),_.height=Math.min(_e,K),ee=_.width/2,q=_.height/2}function $(){L(),V=[];for(let ie=0;ie<G;ie++)V.push({x:Math.random()*(_?.width||800),y:Math.random()*(_?.height||800),z:Math.random()*(_?.width||800),o:Math.random()});te()}function te(){!_||!k||(k.clearRect(0,0,_.width,_.height),V.forEach(ie=>{ie.z-=F,ie.z<=0&&(ie.z=_.width,ie.x=Math.random()*_.width,ie.y=Math.random()*_.height,ie.o=Math.random());const xe=_.width/ie.z,_e=(ie.x-ee)*xe+ee,Ce=(ie.y-q)*xe+q,Ee=2*xe;k.beginPath(),k.fillStyle=`rgba(255, 255, 255, ${ie.o})`,k.arc(_e,Ce,Ee,0,2*Math.PI),k.fill()}),F<60&&(F+=1),A=requestAnimationFrame(te))}$();const ye=()=>L();return window.addEventListener("resize",ye),()=>{window.removeEventListener("resize",ye),A&&cancelAnimationFrame(A)}},[]),w.useEffect(()=>{if(e&&!f){const _=new Image;_.onload=()=>{d.current&&(d.current.src=e,E(!0),h(!0))},_.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{E(!0),h(!0)},1500)},_.src=e}else(f||!e)&&setTimeout(()=>{E(!0),h(!0)},1500)},[e,f]),w.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){u("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),p(!0);const k=(K,A)=>Array.from({length:A},()=>K[Math.floor(Math.random()*K.length)]).join(""),V=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let G=0,ee=0;const q=()=>{if(G>=V.length){const A="Stargate system aligned";let F=0;u("");const L=()=>{F<A.length?(u(A.substring(0,F+1)),F++,setTimeout(L,30)):p(!1)};L();return}const K=V[G];u(k(K.chars,32)),ee++,ee>=K.iterations&&(G++,ee=0),setTimeout(q,K.duration)};q()},[]);const Z=()=>{N(!f),f||(E(!0),h(!0))};return c.jsxs("div",{className:"h-full flex flex-col",children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[c.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),T&&c.jsx("div",{className:"flex items-center gap-2",children:c.jsx("button",{onClick:Z,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${f?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:f?"2D View":"3D View"})})]}),c.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[c.jsx("canvas",{ref:m,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${b?"opacity-0":"opacity-100"}`,style:{filter:b?"blur(50px)":"none"}}),f&&y&&t&&c.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${y?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:c.jsx(Oo,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,onEffectsCreated:a,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:o,onDataLoaded:_=>{j(_)},onError:_=>{z(_),console.error("❌ Planet rendering error:",_)}})}),!f&&c.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${y?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:y&&e?c.jsx("div",{className:"w-full h-full flex items-center justify-center",children:c.jsx(bi,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:c.jsx("img",{ref:d,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):c.jsx("img",{ref:d,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),T&&c.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:f?"🌍 3D":"🖼️ 2D"})]}),c.jsxs("div",{className:"text-center mt-auto",children:[c.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${g?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[c.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[c.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:c.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),n]}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),c.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",f&&M&&c.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",M.planet_info?.type," Planet",M.atmosphere&&c.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),M.rings?.has_rings&&c.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),f&&O&&c.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},zo=({currentPlanet:s,system:e,galaxy:t,systemPlanets:i})=>{const[o,a]=w.useState(null),[r,l]=w.useState(null),[m,d]=w.useState(!1),[n,u]=w.useState(!1),[g,p]=w.useState(!0);w.useEffect(()=>{if(i&&i.length>0){const b=i.findIndex(h=>h.name.toLowerCase()===s.toLowerCase());b!==-1?(b>0?(a(i[b-1].name.toLowerCase()),d(!0)):e.index>0?(a("__prev_system__"),d(!0)):d(!1),b<i.length-1?(l(i[b+1].name.toLowerCase()),u(!0)):(l("__next_system__"),u(!0))):(d(!1),u(!1))}else d(!1),u(!1);p(!1)},[s,e.index,i]);const y=async()=>{const b=t.coordinates.join(",");if(o==="__prev_system__")try{const h=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(h.ok){const f=await h.json();if(f.system&&f.system.planets&&f.system.planets.length>0){const T=f.system.planets[f.system.planets.length-1].name.toLowerCase();st(b,e.index-1,T,f.system.planets),Dt(b,e.index-1),window.location.href=`/planet/${T}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else o&&(st(b,e.index,o,i),window.location.href=`/planet/${o}`)},E=async()=>{const b=t.coordinates.join(",");if(r==="__next_system__")try{const h=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(h.ok){const f=await h.json();if(f.system&&f.system.planets&&f.system.planets.length>0){const T=f.system.planets[0].name.toLowerCase();st(b,e.index+1,T,f.system.planets),Dt(b,e.index+1),window.location.href=`/planet/${T}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else r&&(st(b,e.index,r,i),window.location.href=`/planet/${r}`)};return g?null:c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("button",{onClick:y,disabled:!m,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${m?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:c.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),c.jsx("button",{onClick:E,disabled:!n,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${n?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:c.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},jo=({planet:s,system:e,galaxy:t,planet_url:i,version:o,image_url:a,cosmic_origin_time:r,initial_angle_rotation:l})=>{const[m]=w.useState(t.coordinates.join(",")),[d,n]=w.useState([]),u=b=>{n(b)},g=(b,h)=>{n(f=>f.map(N=>N.id===b?{...N,enabled:h}:N))};w.useEffect(()=>{document.body.setAttribute("data-coordinates",m),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),st(m,e.index,s.name,e.planets||[]),Dt(m,e.index)},[m,e.index,s.name]);const p=b=>b.replace(/_/g," "),y=b=>b.replace(/_/g," "),E=b=>b.replace(/_/g," ");return c.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[c.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),c.jsxs("div",{className:"relative z-10",children:[c.jsx(xi,{}),c.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[c.jsxs("div",{className:"text-center mb-8",children:[c.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:c.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",p(s.name),"'"]})}),c.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",y(e.name),"' - Galaxy '",E(t.name),"'"]}),c.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),c.jsx(zo,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),c.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:c.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[c.jsx("div",{className:"order-1 lg:order-1",children:c.jsx(Fo,{planetUrl:i,imageUrl:a,planet:s,cosmicOriginTime:r,initialAngleRotation:l,onEffectsCreated:u,effects:d,onToggleEffect:g})}),c.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),c.jsx("div",{className:"order-2 lg:order-2",children:c.jsx(Yi,{planet:s,system:e,galaxy:t,cosmicOriginTime:r,initialAngleRotation:l,effects:d,onToggleEffect:g})})]})}),c.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:c.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:c.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",y(e.name),"'"]})})})]}),c.jsx(gi,{version:o})]}),c.jsx(_i,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!s||!e||!t||!i){console.error("Missing required data elements");return}const o=JSON.parse(s.textContent||"{}"),a=JSON.parse(e.textContent||"{}"),r=JSON.parse(t.textContent||"{}"),l=JSON.parse(i.textContent||"{}"),m={planet:o,system:a,galaxy:r,planet_url:l.planet_url,version:l.version,image_url:l.image_url,cosmic_origin_time:l.cosmic_origin_time,initial_angle_rotation:l.initial_angle_rotation},d=document.getElementById("atlas-react-root");d&&yi.createRoot(d).render(ai.createElement(jo,m))}catch(s){console.error("Error initializing Planet React app:",s)}});
