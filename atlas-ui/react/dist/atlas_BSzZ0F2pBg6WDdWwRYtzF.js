import{r as f,j as o,R as vt,V as Lt,c as Ot}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Ft}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as kt,U as zt,m as Te,c as qe,a as Ut}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as Yt,V as D,n as xe,T as ye,Q as at,l as nt,o as ae,R as Bt,p as Gt,q as Vt,e as _e,r as J,s as ie,N as Ae,t as Qe,c as Ge,C as p,u as Wt,v as Je,d as we,F as fe,G as xt,w as be,x as Ht,y as rt,L as lt,g as ct,M as bt,z as $t,S as Zt,P as Kt,W as Xt,H as qt,I as Qt,J as Jt,D as ht,A as ei}from"./atlas_CjpijR7uUEfLLbDYV5ZWU.js";const ti=({effects:s,onToggleEffect:e})=>{const[t,i]=f.useState(s),[a,n]=f.useState(!1);f.useEffect(()=>{i(s)},[s]);const r=(h,l)=>{i(d=>d.map(g=>g.id===h?{...g,enabled:l}:g)),e(h,l)},c=h=>h.replace(/_/g," ").replace(/\b\w/g,l=>l.toUpperCase()).replace("Layer","").replace("Effect","").trim();return t.length===0?null:o.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsx("div",{className:"text-xs text-gray-400",children:"3D Effects Control"}),o.jsxs("button",{onClick:()=>n(!a),className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[a?"Hide":"Show"," (",t.filter(h=>h.enabled).length,"/",t.length,")"]})]}),a&&o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:t.map(h=>o.jsxs("div",{className:"bg-white/5 rounded p-2 flex items-center justify-between",children:[o.jsxs("label",{className:"flex items-center gap-2 cursor-pointer flex-1",children:[o.jsx("input",{type:"checkbox",checked:h.enabled,onChange:l=>r(h.id,l.target.checked),className:"rounded border-gray-400 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-white/10"}),o.jsx("span",{className:`${h.enabled?"text-white":"text-gray-500"} transition-colors`,children:c(h.type)})]}),o.jsx("span",{className:`text-[10px] ${h.enabled?"text-green-400":"text-gray-600"}`,children:h.enabled?"ON":"OFF"})]},h.id))}),a&&t.length>3&&o.jsxs("div",{className:"mt-2 flex gap-2",children:[o.jsx("button",{onClick:()=>{t.forEach(h=>r(h.id,!0))},className:"text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors",children:"Enable All"}),o.jsx("button",{onClick:()=>{t.forEach(h=>r(h.id,!1))},className:"text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors",children:"Disable All"})]})]})},ii=({planet:s,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:a,effects:n,onToggleEffect:r})=>{const[c,h]=f.useState(!1),l=v=>v.replace(/_/g," "),d=v=>{const _=v/86400;return _<30?`${_.toFixed(2)} days`:_<365?`${(_/30).toFixed(2)} months`:`${(_/365).toFixed(2)} years`},g=v=>{const _=v*9/5+32;return`${v.toFixed(1)}°C (${_.toFixed(1)}°F)`},x=v=>`${v.toExponential(2)} kg`,E=v=>v>=1e3?`${(v/1e3).toFixed(2)} km`:`${v.toFixed(2)} m`;return o.jsxs("div",{className:"h-full flex flex-col relative",children:[o.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),o.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),o.jsx(kt,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),o.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),o.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),o.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:x(s.mass)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:E(s.diameter)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),o.jsx("div",{className:"text-xs font-bold text-cyan-300",children:d(s.orbital_period_seconds)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),o.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:g(s.surface_temperature)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:d(s.rotation_period_seconds)})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&o.jsx("button",{onClick:()=>h(!c),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:c?"▲ Less":"▼ All"})]}),o.jsx("div",{className:"flex flex-wrap gap-1",children:(c?s.elements:s.elements.slice(0,4)).map((v,_)=>o.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:v},_))})]})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[o.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Status:"}),o.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Planet:"}),o.jsx("div",{className:"text-white truncate font-medium",children:l(s.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System:"}),o.jsx("div",{className:"text-white truncate font-medium",children:l(e.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System ID:"}),o.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),o.jsx("div",{className:"text-white truncate font-medium",children:l(t.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),o.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]}),n&&r&&o.jsx(ti,{effects:n,onToggleEffect:r})]})},dt={type:"change"},et={type:"start"},_t={type:"end"},ke=new Bt,mt=new Gt,si=Math.cos(70*Vt.DEG2RAD),k=new D,Q=2*Math.PI,A={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ke=1e-6;class oi extends Yt{constructor(e,t=null){super(e,t),this.state=A.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xe.ROTATE,MIDDLE:xe.DOLLY,RIGHT:xe.PAN},this.touches={ONE:ye.ROTATE,TWO:ye.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new at,this._lastTargetPosition=new D,this._quat=new at().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nt,this._sphericalDelta=new nt,this._scale=1,this._panOffset=new D,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new D,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ni.bind(this),this._onPointerDown=ai.bind(this),this._onPointerUp=ri.bind(this),this._onContextMenu=fi.bind(this),this._onMouseWheel=hi.bind(this),this._onKeyDown=di.bind(this),this._onTouchStart=mi.bind(this),this._onTouchMove=ui.bind(this),this._onMouseDown=li.bind(this),this._onMouseMove=ci.bind(this),this._interceptControlDown=pi.bind(this),this._interceptControlUp=gi.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dt),this.update(),this.state=A.NONE}update(e=null){const t=this.object.position;k.copy(t).sub(this.target),k.applyQuaternion(this._quat),this._spherical.setFromVector3(k),this.autoRotate&&this.state===A.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=Q:i>Math.PI&&(i-=Q),a<-Math.PI?a+=Q:a>Math.PI&&(a-=Q),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=r!=this._spherical.radius}if(k.setFromSpherical(this._spherical),k.applyQuaternion(this._quatInverse),t.copy(this.target).add(k),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const c=k.length();r=this._clampDistance(c*this._scale);const h=c-r;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),n=!!h}else if(this.object.isOrthographicCamera){const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=h!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(c),this.object.updateMatrixWorld(),r=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ke.origin.copy(this.object.position),ke.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ke.direction))<si?this.object.lookAt(this.target):(mt.setFromNormalAndCoplanarPoint(this.object.up,this.target),ke.intersectPlane(mt,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>Ke||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ke||this._lastTargetPosition.distanceToSquared(this.target)>Ke?(this.dispatchEvent(dt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Q/60*this.autoRotateSpeed*e:Q/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){k.setFromMatrixColumn(t,0),k.multiplyScalar(-e),this._panOffset.add(k)}_panUp(e,t){this.screenSpacePanning===!0?k.setFromMatrixColumn(t,1):(k.setFromMatrixColumn(t,0),k.crossVectors(this.object.up,k)),k.multiplyScalar(e),this._panOffset.add(k)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;k.copy(a).sub(this.target);let n=k.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/i.clientHeight,this.object.matrix),this._panUp(2*t*n/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,n=t-i.top,r=i.width,c=i.height;this._mouse.x=a/r*2-1,this._mouse.y=-(n/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Q*this._rotateDelta.x/t.clientHeight),this._rotateUp(Q*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,n=Math.sqrt(i*i+a*a);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._rotateEnd.set(a,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Q*this._rotateDelta.x/t.clientHeight),this._rotateUp(Q*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,n=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(r,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ai(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function ni(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ri(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_t),this.state=A.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function li(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=A.DOLLY;break;case xe.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=A.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=A.ROTATE}break;case xe.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=A.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=A.PAN}break;default:this.state=A.NONE}this.state!==A.NONE&&this.dispatchEvent(et)}function ci(s){switch(this.state){case A.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case A.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case A.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function hi(s){this.enabled===!1||this.enableZoom===!1||this.state!==A.NONE||(s.preventDefault(),this.dispatchEvent(et),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(_t))}function di(s){this.enabled!==!1&&this._handleKeyDown(s)}function mi(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=A.TOUCH_ROTATE;break;case ye.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=A.TOUCH_PAN;break;default:this.state=A.NONE}break;case 2:switch(this.touches.TWO){case ye.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=A.TOUCH_DOLLY_PAN;break;case ye.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=A.TOUCH_DOLLY_ROTATE;break;default:this.state=A.NONE}break;default:this.state=A.NONE}this.state!==A.NONE&&this.dispatchEvent(et)}function ui(s){switch(this._trackPointer(s),this.state){case A.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case A.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case A.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case A.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=A.NONE}}function fi(s){this.enabled!==!1&&s.preventDefault()}function pi(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gi(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ut{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class wt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:a,ring_outer_radius:n,tilt_factor:r,planet_radius:c,shape_seed:h}=e;if(!t||!i){console.warn("No ring data provided");return}const l=[...t.particles,...i.particles],d=l.length,g=new ut(h||12345),x=new _e,E=new Float32Array(d*3),v=new Float32Array(d*3),_=new Float32Array(d),I=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],S=g.choice(I);for(let N=0;N<d;N++){const X=l[N],q=this.planetRadius/(c||200),ce=(h||12345)+N,L=new ut(ce),he=X.distance*q,w=X.angle,$=he*Math.sin(w),B=Math.asin((r||.2)*.5),P=$*Math.sin(B),se=$*Math.cos(B),G=((n||400)-(a||200))*q*.4,Z=L.uniform(-G*.8,G*.8),K=L.uniform(-G*.3,G*.3),ee=L.uniform(-.08,.08),te=he+K,de=w+ee;E[N*3]=te*Math.cos(de),E[N*3+1]=P+Z+this.planetRadius*.15,E[N*3+2]=se+L.uniform(-G*.4,G*.4),X.color[0]/255;const U=(X.distance-(a||200))/((n||400)-(a||200)),F=S.baseGray,ne=S.variation,pe=L.uniform(-ne,ne),Se=Math.max(.12,Math.min(.45,F+pe)),Ee=.8+U*.4,Ce=L.uniform(.85,1.15),Ne=L.uniform(0,1),Ve=Ne<.03?L.uniform(1.1,1.3):1,We=Se*Ee*Ce*Ve,oe=Math.max(.1,Math.min(.55,We));v[N*3]=oe,v[N*3+1]=oe,v[N*3+2]=oe;const Me=.15,me=L.uniform(.3,.7),z=Ne<.1?L.uniform(1.05,1.2):1;_[N]=X.size*Me*me*z}x.setAttribute("position",new J(E,3)),x.setAttribute("color",new J(v,3)),x.setAttribute("size",new J(_,1)),this.material=new ie({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Ae}),this.ringSystem=new Qe(x,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,a=t.cosmicOriginTime||Date.now()/1e3,n=t.initialAngleRotation||0,c=Date.now()/1e3-a,h=2*Math.PI/i,l=(n+c*h)%(2*Math.PI);this.ringSystem.rotation.y=l}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function yi(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new wt(e,t)}class Re{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new Ge(i,32,32);const a=new p(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ie({vertexShader:Re.vertexShader,fragmentShader:Re.fragmentShader,uniforms:{atmosphereColor:{value:a},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Je,side:Wt,depthWrite:!1}),this.mesh=new we(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new p(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function vi(s,e){let t=[.7,.7,.7,.15],i=12;if(e){if(e.color&&Array.isArray(e.color)){const n=e.color;t=[n[0],n[1],n[2],(n[3]||.15)*.7]}e.width&&(i=e.width)}const a={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new Re(s,a)}class Y{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,i=Math.acos(this.random()*2-1);return{x:e*Math.sin(i)*Math.cos(t),y:e*Math.sin(i)*Math.sin(t),z:e*Math.cos(i)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const T={PARTICLE_COUNT:{min:50,max:200},SPEED:{min:.05,max:.5},SIZE:{min:.5,max:2},OPACITY:{min:.2,max:.5},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05}};class De{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),a=new Y(i);this.params={color:t.color||new p(16777215),particleCount:t.particleCount||Math.floor(a.uniform(T.PARTICLE_COUNT.min,T.PARTICLE_COUNT.max)),speed:t.speed||a.uniform(T.SPEED.min,T.SPEED.max),size:t.size||a.uniform(T.SIZE.min,T.SIZE.max),opacity:t.opacity||a.uniform(T.OPACITY.min,T.OPACITY.max),turbulence:t.turbulence||a.uniform(T.TURBULENCE.min,T.TURBULENCE.max),rotationSpeed:t.rotationSpeed||a.uniform(T.ROTATION_SPEED.min,T.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||a.uniform(T.MOVEMENT_AMPLITUDE.min,T.MOVEMENT_AMPLITUDE.max),seed:i},this.particleCount=this.params.particleCount,this.geometry=new _e,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new Qe(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),c=this.params.color instanceof p?this.params.color:new p(this.params.color),h=this.params.seed||Math.floor(Math.random()*1e6),l=new Y(h);for(let d=0;d<this.particleCount;d++){const g=l.spherePosition(e*l.uniform(1,1.1));t[d*3]=g.x,t[d*3+1]=g.y,t[d*3+2]=g.z;const x=l.colorVariation({r:c.r,g:c.g,b:c.b});i[d*3]=x.r,i[d*3+1]=x.g,i[d*3+2]=x.b,a[d]=this.params.size*l.uniform(.75,1.25),n[d]=this.params.speed*l.uniform(.6,1.4),r[d]=l.random()*Math.PI*2}this.geometry.setAttribute("position",new J(t,3)),this.geometry.setAttribute("customColor",new J(i,3)),this.geometry.setAttribute("size",new J(a,1)),this.geometry.setAttribute("speed",new J(n,1)),this.geometry.setAttribute("phase",new J(r,1))}createMaterial(){return new ie({vertexShader:De.vertexShader,fragmentShader:De.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:Je,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value,this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function ft(s,e,t){const i=e.streaks||{},a=t||Math.floor(Math.random()*1e6),n=new Y(a+3e3),r=i.count||Math.floor(n.uniform(T.PARTICLE_COUNT.min,T.PARTICLE_COUNT.max)),c=i.speed||n.uniform(T.SPEED.min,T.SPEED.max),h=n.uniform(T.SIZE.min,T.SIZE.max),l=n.uniform(T.OPACITY.min,T.OPACITY.max),d=n.uniform(T.TURBULENCE.min,T.TURBULENCE.max),g=n.uniform(T.ROTATION_SPEED.min,T.ROTATION_SPEED.max),x=n.uniform(T.MOVEMENT_AMPLITUDE.min,T.MOVEMENT_AMPLITUDE.max),E={color:i.color?new p().setRGB(i.color[0],i.color[1],i.color[2]):new p(16777215),particleCount:r,speed:c,size:h,opacity:l,turbulence:d,seed:a,rotationSpeed:g,movementAmplitude:x};return new De(s,E)}class je{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;constructor(e,t=new p(16753920)){this.baseMesh=e;const i=e.geometry;this.planetRadius=i.parameters.radius||1;const a=t instanceof p?t:new p(t);this.baseMaterial=new ie({vertexShader:je.baseVertexShader,fragmentShader:je.baseFragmentShader,uniforms:{baseColor:{value:a},lightDirection:{value:new D(1,1,1).normalize()},lightPosition:{value:new D(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:fe}),this.baseMesh.material=this.baseMaterial}addEffectLayer(e,t,i=1.001,a){const n=new Ge(this.planetRadius*i,64,64),r=new we(n,t);return r.position.copy(this.baseMesh.position),r.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:r,material:t,layerObject:a}),this.scene&&this.scene.add(r),r}createCloudBandsLayerMaterial(e){const t=`
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
        
        // CRÍTICO: hacer las bandas completamente transparentes en la parte oscura
        float lightIntensity = max(0.0, dotNL);
        lightIntensity = pow(lightIntensity, 2.0); // Caída más agresiva hacia la oscuridad
        
        // Color de las bandas con transparencia
        vec3 color = bandColor;
        float alpha = bands * opacity * lightIntensity; // Usar opacity del parámetro
        
        gl_FragColor = vec4(color, alpha);
      }
    `;return new ie({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new p(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new D(1,1,1).normalize()},opacity:{value:e.opacity||.4}},transparent:!0,blending:Ae,side:fe,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,a=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((n,r)=>{r<5&&(a[r*2]=n.x,a[r*2+1]=n.y)}),new ie({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new p(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:a},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new D(1,1,1).normalize()}},transparent:!0,blending:Ae,side:fe,depthWrite:!1})}createMetallicSurfaceLayerMaterial(e){const t=`
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vViewPosition;
      
      void main() {
        vPosition = position;
        vNormal = normal;
        vUv = uv;
        
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `,i=`
      uniform vec3 metalColor;
      uniform float metalness;
      uniform float roughness;
      uniform float fragmentationIntensity;
      uniform float opacity;
      uniform vec3 lightDirection;
      uniform float time;
      uniform float noiseScale;
      uniform float noiseIntensity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vViewPosition;
      
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
      
      // PBR básico
      vec3 calculatePBR(vec3 albedo, float metallic, float rough, vec3 normal, vec3 viewDir) {
        vec3 lightDir = normalize(lightDirection);
        vec3 halfwayDir = normalize(lightDir + viewDir);
        
        // Difuso
        float NdotL = max(dot(normal, lightDir), 0.0);
        vec3 diffuse = albedo * (1.0 - metallic) * NdotL;
        
        // Especular simplificado
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        float specularStrength = pow(NdotH, mix(4.0, 128.0, 1.0 - rough));
        vec3 specular = mix(vec3(0.04), albedo, metallic) * specularStrength;
        
        // Fresnel para bordes metálicos
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
        vec3 fresnelColor = mix(vec3(0.04), albedo, metallic) * fresnel;
        
        return diffuse + specular + fresnelColor * 0.5;
      }
      
      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        vec3 lightDir = normalize(lightDirection);
        
        // Calcular si estamos en la parte iluminada (como CloudBands)
        float dotNL = dot(normal, lightDir);
        float visibility = smoothstep(-0.2, 0.2, dotNL);
        
        // Base metálica con variaciones
        vec3 color = metalColor;
        
        // Añadir ruido para variaciones sutiles
        float surfaceNoise = noise3D(vPosition * noiseScale);
        color = mix(color, color * 0.7, surfaceNoise * noiseIntensity);
        
        // Fragmentación angular en los bordes
        float edgeFactor = 1.0 - abs(dot(normal, viewDir));
        float fragmentation = angularCracks(vUv, 5.0 + fragmentationIntensity * 10.0, 2.0);
        
        // Aplicar fragmentación más fuerte en los bordes
        if(edgeFactor > 0.7) {
          color = mix(color, color * 0.3, fragmentation * edgeFactor);
          
          // Añadir grietas más pronunciadas
          float cracks = angularCracks(vUv * 2.0, 8.0, 4.0);
          color = mix(color, color * 0.2, cracks * edgeFactor * 0.5);
        }
        
        // Ondas circulares sutiles en el interior
        float radialWaves = sin(length(vUv - 0.5) * 20.0 + time * 0.5) * 0.5 + 0.5;
        color = mix(color, color * 1.1, radialWaves * 0.1 * (1.0 - edgeFactor));
        
        // Calcular iluminación PBR completa
        vec3 finalColor = calculatePBR(color, metalness, roughness, normal, viewDir);
        
        // Añadir un toque de color oscuro para profundidad
        finalColor = mix(finalColor, finalColor * 0.5, pow(surfaceNoise, 2.0) * 0.3);
        
        // CRÍTICO: usar la misma lógica que CloudBands para transparencia
        float lightIntensity = max(0.0, dotNL);
        lightIntensity = pow(lightIntensity, 1.5); // Caída suave hacia la oscuridad
        
        float alpha = opacity * lightIntensity;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;return new ie({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},metalColor:{value:e.color||new p(8421504)},metalness:{value:e.metalness||.8},roughness:{value:e.roughness||.4},fragmentationIntensity:{value:e.fragmentationIntensity||.5},opacity:{value:e.opacity||.8},lightDirection:{value:new D(1,1,1).normalize()},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3}},transparent:!0,blending:Ae,side:fe,depthWrite:!1})}addToScene(e){this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&e.add(t.mesh)}),this.effectLayers.length}update(e,t){this.effectLayers.forEach(i=>{if(i.material.uniforms.time&&(i.material.uniforms.time.value+=e),t!==void 0&&i.material.uniforms.rotationAngle&&(i.material.uniforms.rotationAngle.value=t),i.layerObject&&i.layerObject.update)try{i.layerObject.update(e,t)}catch(a){console.error(`Error updating layer ${i.name}:`,a)}i.mesh&&i.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof p?e:new p(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}createGenericLayerMaterial(e,t,i,a=!0,n=Ae){return i.lightDirection||(i.lightDirection={value:new D(1,1,1).normalize()}),i.lightPosition||(i.lightPosition={value:new D(0,0,0)}),new ie({vertexShader:e,fragmentShader:t,uniforms:i,transparent:a,blending:n,side:fe,depthWrite:!1})}convertEffectToLayer(e,t,i=1.001){if(t instanceof ie){const a=t.clone();return a.transparent=!0,a.depthWrite=!1,a.uniforms.lightDirection||(a.uniforms.lightDirection={value:new D(1,1,1).normalize()}),this.addEffectLayer(e,a,i)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const j={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4}};class xi{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),a=new Y(i),n=t.numBands||Math.floor(a.uniform(j.NUM_BANDS.min,j.NUM_BANDS.max));this.params={numBands:n,bandPositions:t.bandPositions||this.generateDefaultBandPositions(n,i),bandWidths:t.bandWidths||this.generateDefaultBandWidths(n,i),rotationAngle:t.rotationAngle||a.uniform(j.ROTATION_ANGLE.min,j.ROTATION_ANGLE.max),baseColor:t.baseColor||new p(16753920),bandColor:t.bandColor||new p(16747520),animationSpeed:t.animationSpeed||a.uniform(j.ANIMATION_SPEED.min,j.ANIMATION_SPEED.max),turbulence:t.turbulence||a.uniform(j.TURBULENCE.min,j.TURBULENCE.max),noiseScale:t.noiseScale||a.uniform(j.NOISE_SCALE.min,j.NOISE_SCALE.max),opacity:t.opacity||.4,seed:i},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const i=new Array(20).fill(0),a=new Y(t+12345);for(let n=0;n<e&&n<20;n++)i[n]=a.uniform(j.BAND_POSITIONS.min,j.BAND_POSITIONS.max);return i}generateDefaultBandWidths(e,t){const i=new Array(20).fill(0),a=new Y(t+67890);for(let n=0;n<e&&n<20;n++)i[n]=a.uniform(j.BAND_WIDTHS.min,j.BAND_WIDTHS.max);return i}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity)}dispose(){}}function bi(s,e,t){const i=e.cloud_bands||{},a=t||Math.floor(Math.random()*1e6),n=new Y(a+4e3),r={numBands:i.num_bands||Math.floor(n.uniform(j.NUM_BANDS.min,j.NUM_BANDS.max)),bandPositions:i.positions||void 0,bandWidths:i.widths||void 0,rotationAngle:i.rotation||n.uniform(j.ROTATION_ANGLE.min,j.ROTATION_ANGLE.max),baseColor:e.base_color?new p().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new p(16753920),bandColor:new p(16777215),animationSpeed:n.uniform(j.ANIMATION_SPEED.min,j.ANIMATION_SPEED.max),turbulence:e.turbulence||n.uniform(j.TURBULENCE.min,j.TURBULENCE.max),noiseScale:n.uniform(j.NOISE_SCALE.min,j.NOISE_SCALE.max),opacity:.4,seed:a};return new xi(s,r)}const O={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.2,max:.6}};class _i{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),a=new Y(i);this.params={stormCenters:t.stormCenters||this.generateStormCenters(i),stormColor:t.stormColor||new p(9109504),stormIntensity:t.stormIntensity||a.uniform(O.STORM_INTENSITY.min,O.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||a.uniform(O.SPIRAL_SPEED.min,O.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||a.uniform(O.ANIMATION_SPEED.min,O.ANIMATION_SPEED.max),opacity:t.opacity||a.uniform(O.OPACITY.min,O.OPACITY.max),seed:i},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new Y(e+5e3),i=Math.floor(t.uniform(O.STORM_COUNT.min,O.STORM_COUNT.max)),a=[];for(let n=0;n<i;n++)a.push({x:t.uniform(O.STORM_CENTERS.min,O.STORM_CENTERS.max),y:t.uniform(O.STORM_CENTERS.min,O.STORM_CENTERS.max)});return a}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function wi(s,e,t){const i=e.storms||{},a=t||Math.floor(Math.random()*1e6),n=new Y(a+5e3),r={stormCenters:i.centers||void 0,stormColor:new p(9109504),stormIntensity:i.intensity||e.storm_intensity||n.uniform(O.STORM_INTENSITY.min,O.STORM_INTENSITY.max),spiralSpeed:i.spiral_speed||n.uniform(O.SPIRAL_SPEED.min,O.SPIRAL_SPEED.max),animationSpeed:n.uniform(O.ANIMATION_SPEED.min,O.ANIMATION_SPEED.max),opacity:n.uniform(O.OPACITY.min,O.OPACITY.max),seed:a};return new _i(s,r)}const V={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class Ye{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),a=new Y(i),n=t.color instanceof p?t.color:t.color?new p(t.color):new p(9127187);this.params={color:n,roughness:t.roughness||a.uniform(V.ROUGHNESS.min,V.ROUGHNESS.max),rockDensity:t.rockDensity||a.uniform(V.ROCK_DENSITY.min,V.ROCK_DENSITY.max)*10,craterCount:t.craterCount||a.uniform(V.CRATER_COUNT.min,V.CRATER_COUNT.max),opacity:t.opacity||a.uniform(V.OPACITY.min,V.OPACITY.max),seed:i},this.material=new ie({vertexShader:Ye.vertexShader,fragmentShader:Ye.fragmentShader,uniforms:{time:{value:0},rockColor:{value:n},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new D(1,1,1).normalize()}},transparent:!0,side:fe,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Si(s,e,t){const i=e.surface||{},a=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),r=new Y(n+8e3);return new Ye(s,{color:a?new p(a):new p(9127187),roughness:i.roughness||r.uniform(V.ROUGHNESS.min,V.ROUGHNESS.max),rockDensity:i.rock_density||r.uniform(V.ROCK_DENSITY.min,V.ROCK_DENSITY.max)*10,craterCount:i.crater_count||r.uniform(V.CRATER_COUNT.min,V.CRATER_COUNT.max),opacity:r.uniform(V.OPACITY.min,V.OPACITY.max),seed:n})}const W={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9}};class Be{layerMesh;material;params;layerSystem;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vViewPosition;
    
    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    uniform vec3 iceColor;
    uniform float iceReflectivity;
    uniform float frostDensity;
    uniform float crackIntensity;
    uniform float opacity;
    uniform vec3 lightDirection;
    uniform float time;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vViewPosition;
    
    // Función de ruido para las grietas de hielo
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    // Patrón de grietas Voronoi
    float voronoi(vec2 p) {
      vec2 n = floor(p);
      vec2 f = fract(p);
      
      float minDist = 1.0;
      
      for(int i = -1; i <= 1; i++) {
        for(int j = -1; j <= 1; j++) {
          vec2 neighbor = vec2(float(i), float(j));
          vec2 point = neighbor + noise(n + neighbor) - f;
          float dist = length(point);
          minDist = min(minDist, dist);
        }
      }
      
      return minDist;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(lightDirection);
      vec3 viewDir = normalize(vViewPosition);
      
      // Calcular iluminación
      float dotNL = dot(normal, lightDir);
      float visibility = smoothstep(-0.2, 0.2, dotNL);
      
      // Textura de hielo con grietas
      float cracks = voronoi(vUv * crackIntensity * 10.0);
      cracks = pow(cracks, 2.0);
      
      // Escarcha
      float frost = noise(vUv * frostDensity * 50.0);
      frost = smoothstep(0.3, 0.7, frost);
      
      // Reflejo especular para simular hielo brillante
      vec3 reflectDir = reflect(-lightDir, normal);
      float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0) * iceReflectivity;
      
      // Color final
      vec3 color = iceColor;
      color = mix(color, vec3(1.0), frost * 0.3); // Añadir escarcha blanca
      color = mix(color * 0.7, color, cracks); // Oscurecer las grietas
      color += vec3(spec); // Añadir brillo especular
      
      // Solo mostrar en la parte iluminada
      float alpha = (0.5 + 0.5 * cracks) * visibility * opacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),a=new Y(i),n=t.color instanceof p?t.color:t.color?new p(t.color):new p(11591910);this.params={color:n,iceReflectivity:t.iceReflectivity||a.uniform(W.ICE_REFLECTIVITY.min,W.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||a.uniform(W.FROST_DENSITY.min,W.FROST_DENSITY.max),crackIntensity:t.crackIntensity||a.uniform(W.CRACK_INTENSITY.min,W.CRACK_INTENSITY.max),opacity:t.opacity||a.uniform(W.OPACITY.min,W.OPACITY.max),seed:i},this.material=new ie({vertexShader:Be.vertexShader,fragmentShader:Be.fragmentShader,uniforms:{time:{value:0},iceColor:{value:n},iceReflectivity:{value:this.params.iceReflectivity},frostDensity:{value:this.params.frostDensity},crackIntensity:{value:this.params.crackIntensity},opacity:{value:this.params.opacity},lightDirection:{value:new D(1,1,1).normalize()}},transparent:!0,side:fe,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Ei(s,e,t){const i=e.surface||{},a=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),r=new Y(n+6e3);return new Be(s,{color:a?new p(a):new p(11591910),iceReflectivity:i.ice_reflectivity||r.uniform(W.ICE_REFLECTIVITY.min,W.ICE_REFLECTIVITY.max),frostDensity:i.frost_density||r.uniform(W.FROST_DENSITY.min,W.FROST_DENSITY.max),crackIntensity:i.crack_intensity||r.uniform(W.CRACK_INTENSITY.min,W.CRACK_INTENSITY.max),opacity:r.uniform(W.OPACITY.min,W.OPACITY.max),seed:n})}const H={METALNESS:{min:.7,max:.95},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.6,max:.9}};class Ci{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),a=new Y(i),n=t.color instanceof p?t.color:t.color?new p(t.color):new p(8421504);this.params={color:n,metalness:t.metalness||a.uniform(H.METALNESS.min,H.METALNESS.max),roughness:t.roughness||a.uniform(H.ROUGHNESS.min,H.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||a.uniform(H.FRAGMENTATION_INTENSITY.min,H.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||a.uniform(H.OPACITY.min,H.OPACITY.max),seed:i,noiseScale:t.noiseScale||8,noiseIntensity:t.noiseIntensity||.3},this.material=this.layerSystem.createMetallicSurfaceLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Ni(s,e,t){const i=e.surface||{},a=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),r=new Y(n+7e3);return new Ci(s,{color:a?new p(a):new p(8421504),metalness:i.metalness||r.uniform(H.METALNESS.min,H.METALNESS.max),roughness:i.roughness||r.uniform(H.ROUGHNESS.min,H.ROUGHNESS.max),fragmentationIntensity:i.fragmentation||r.uniform(H.FRAGMENTATION_INTENSITY.min,H.FRAGMENTATION_INTENSITY.max),opacity:r.uniform(H.OPACITY.min,H.OPACITY.max),seed:n,noiseScale:8,noiseIntensity:.3})}class St{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new Y(i),this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.8,brightness:t.brightness||1.5,seed:i},this.particleCount=this.params.particleCount,this.geometry=new _e,this.createParticles(e),this.createMaterial(),this.particleSystem=new Qe(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),r=e*1.3;for(let c=0;c<this.particleCount;c++){const h=this.rng.random()*Math.PI*2,l=this.rng.random()*2-1,d=this.rng.random(),g=Math.acos(l),x=r*Math.cbrt(d);t[c*3]=x*Math.sin(g)*Math.cos(h),t[c*3+1]=x*Math.sin(g)*Math.sin(h),t[c*3+2]=x*Math.cos(g),i[c]=this.params.size*(.5+this.rng.random()*.5),a[c]=this.params.speed*(.8+this.rng.random()*.4),n[c]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new J(t,3)),this.geometry.setAttribute("size",new J(i,1)),this.geometry.setAttribute("speed",new J(a,1)),this.geometry.setAttribute("phase",new J(n,1))}createMaterial(){const e=this.params.color instanceof p?this.params.color:new p().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),t=`
      attribute float size;
      attribute float speed;
      attribute float phase;
      
      varying float vOpacity;
      varying float vPhase;
      
      uniform float time;
      
      void main() {
        vPhase = phase;
        
        // Animación sutil de las estelas
        vec3 animatedPosition = position;
        float animOffset = time * speed * 0.1 + phase;
        animatedPosition.y += sin(animOffset) * 0.5;
        animatedPosition.x += cos(animOffset * 0.7) * 0.3;
        
        // Calcular opacidad basada en la distancia al centro
        float distanceToCenter = length(position);
        vOpacity = 1.0 - smoothstep(0.0, 30.0, distanceToCenter);
        
        vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
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
    `;this.material=new ie({uniforms:{time:{value:0},color:{value:e},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:t,fragmentShader:i,transparent:!0,blending:Je,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;const t=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*t}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof p?e.color:new p().setRGB(e.color[0],e.color[1],e.color[2]);this.material.uniforms.color.value=t}e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function pt(s,e,t){const i=e.streaks||e,a={color:i.color||[.95,.95,1],particleCount:i.particleCount||100,speed:i.speed||1,size:2,opacity:.8,brightness:1.5,seed:t||Math.floor(Math.random()*1e6)};return new St(s,a)}class gt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new p(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new xt,this.generateFragments()}generateFragments(){const e=new be({color:this.params.color instanceof p?this.params.color:new p(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),a=new we(i,e);this.positionFragment(a,t),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const n=this.params.size*(Math.random()*.5+.75);a.scale.set(n,n,n),a.userData={rotationAxis:new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(a),this.fragments.add(a)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],a=[];a.push(new D(0,0,0));for(let c=0;c<e;c++){const h=c/e*Math.PI*2,l=Math.random()*.5+.5,d=(Math.random()-.5)*.3;a.push(new D(Math.cos(h)*l,Math.sin(h)*l,d))}for(let c=1;c<=e;c++){const l=a[c].clone();l.z+=Math.random()*.4+.2,a.push(l)}for(const c of a)t.push(c.x,c.y,c.z);for(let c=1;c<e;c++)i.push(0,c,c+1);i.push(0,e,1);const n=a.length-e-1;for(let c=0;c<e-1;c++)i.push(n,n+c+2,n+c+1);i.push(n,n+1,n+e);for(let c=0;c<e;c++){const h=c+1,l=(c+1)%e+1,d=h+e,g=l+e;i.push(h,d,l),i.push(l,d,g)}const r=new _e;return r.setAttribute("position",new Ht(t,3)),r.setIndex(i),r.computeVertexNormals(),r}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),a=(Math.random()-.5)*this.planetRadius*.5;return new D(Math.cos(t)*i,a,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new D(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new D(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const a=t.userData;t.rotateOnAxis(a.rotationAxis,a.rotationSpeed*e*this.params.animationSpeed);const n=Math.sin(Date.now()*.001+i)*.001;t.position.y+=n*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof p?e.color:new p(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof be&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof be&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof rt&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof rt&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function ze(s){const e=s.replace("#",""),t=parseInt(e.substr(0,2),16)/255,i=parseInt(e.substr(2,2),16)/255,a=parseInt(e.substr(4,2),16)/255;return new p(t,i,a)}function Xe(s){return s.length>=3?new p(s[0],s[1],s[2]):new p(.5,.5,.5)}function Ie(s){if(s.ocean_color){if(typeof s.ocean_color=="string")return ze(s.ocean_color);if(Array.isArray(s.ocean_color))return Xe(s.ocean_color)}if(s.planet_info?.base_color){if(typeof s.planet_info.base_color=="string")return ze(s.planet_info.base_color);if(Array.isArray(s.planet_info.base_color))return Xe(s.planet_info.base_color)}if(s.base_color){if(typeof s.base_color=="string")return ze(s.base_color);if(Array.isArray(s.base_color))return Xe(s.base_color)}const e=s.planet_info?.type||s.type||"Unknown";return Mi(e)}function Mi(s){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[s]||"#FFFFFF";return ze(t)}class Le{material;params;oceanLayerMesh;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new p(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new p(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new p(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof p?this.params.landmassColor:new p(this.params.landmassColor),t=this.params.foamColor instanceof p?this.params.foamColor:new p(this.params.foamColor),i=this.params.oceanColor instanceof p?this.params.oceanColor:new p(this.params.oceanColor);return new ie({vertexShader:Le.vertexShader,fragmentShader:Le.fragmentShader,uniforms:{time:{value:0},baseColor:{value:i},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:i}}})}apply(e){this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const i=new we(t,this.material);i.position.copy(e.position),i.rotation.copy(e.rotation),this.oceanLayerMesh=i}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const i=e[t];if(i!==void 0&&this.material.uniforms[t])if(i instanceof p||Array.isArray(i)){const a=i instanceof p?i:new p(i);this.material.uniforms[t].value=a}else this.material.uniforms[t].value=i})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh)):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function Pi(s){const e=Ie(s),t=[e.r,e.g,e.b];let i=.3,a=2,n=8,r=.3,c=.2;if(s.seeds){const l=s.seeds.shape_seed,g=(x=>{let E=x;return()=>(E=(E*1664525+1013904223)%4294967296,E/4294967296)})(l);i=.2+g()*.3,a=1.5+g()*1.5,n=6+g()*6,r=.25+g()*.15,c=.15+g()*.1}const h={waveIntensity:i,waveSpeed:a,waveScale:n,landmassThreshold:r,deepOceanThreshold:c,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new p(.9,.9,1),foamIntensity:.4,oceanColor:t};return new Le(h)}class Et{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new xt,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,a=t*Math.cos(i),n=t*Math.sin(i),r=n*.8,c=new _e,h=new Float32Array([0,0,0,a,r,n]);c.setAttribute("position",new J(h,3));const l=new lt({color:16776960,linewidth:5,transparent:!1});this.sunLine=new ct(c,l),this.debugGroup.add(this.sunLine);const d=e+Math.PI,g=t*.7,x=g*Math.cos(d),E=0,v=g*Math.sin(d),_=new Ge(this.planetRadius*.15,16,16),I=new bt({color:16776960,transparent:!1,opacity:1}),S=new we(_,I);S.position.set(x,E,v),this.debugGroup.add(S),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new _e,a=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new J(a,3));const n=new lt({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new ct(i,n),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,a=this.params.initialAngleRotation||0,n=e-t,r=2*Math.PI/i;return(a+n*r)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,a=this.sunLine.geometry,n=a.attributes.position.array;n[3]=i*Math.cos(t),n[4]=0,n[5]=i*Math.sin(t),a.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,a=i.attributes.position.array;a[0]=-t*Math.cos(e),a[1]=0,a[2]=-t*Math.sin(e),a[3]=t*Math.cos(e),a[4]=0,a[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function Ti(s,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:s.debug?.cosmic_origin_time||s.timing?.cosmic_origin_time||s.cosmicOriginTime,rotationPeriod:s.planet_info?.rotation_period||s.rotation_period_seconds||86400,initialAngleRotation:s.debug?.initial_angle_rotation||s.timing?.initial_angle_rotation||s.initialAngleRotation||0,planetRadius:e,orbitalAngle:s.timing?.orbital_angle||0,sunAngle:s.sun_angle||s.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new Et(e,t)}const Ai=!1;var Ct=(s=>(s.CLOUD_BANDS="cloud_bands",s.CLOUD_GYROS="cloud_gyros",s.ATMOSPHERE="atmosphere",s.ATMOSPHERE_GLOW="atmosphere_glow",s.ATMOSPHERIC_STREAKS="atmospheric_streaks",s.RING_SYSTEM="ring_system",s.FRAGMENTATION="fragmentation",s.ROCKY_TERRAIN="rocky_terrain",s.ICY_TERRAIN="icy_terrain",s.OCEAN_WAVES="ocean_waves",s.LAVA_FLOWS="lava_flows",s.CRYSTAL_FORMATIONS="crystal_formations",s.CLOUD_LAYERS="cloud_layers",s.STORM_SYSTEMS="storm_systems",s.VOLCANIC_ACTIVITY="volcanic_activity",s.AURORA="aurora",s.MAGNETIC_FIELD="magnetic_field",s.CITY_LIGHTS="city_lights",s.BIOLUMINESCENCE="bioluminescence",s.THERMAL_EMISSIONS="thermal_emissions",s.VISUAL_DEBUG_3D="visual_debug_3d",s))(Ct||{});class ve{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return ve.instance||(ve.instance=new ve),ve.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new De(t,e),fromPythonData:(e,t)=>ft(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new St(t,e),fromPythonData:(e,t)=>pt(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new Re(t,e),fromPythonData:(e,t)=>vi(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new wt(t,e),fromPythonData:(e,t)=>yi(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new gt(t,e),fromPythonData:(e,t)=>new gt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("ocean_waves",{create:(e,t)=>new Le(e),fromPythonData:(e,t)=>Pi(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new Et(t,e),fromPythonData:(e,t)=>Ti(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,a,n=0){const r=this.creators.get(e);if(!r)return console.warn(`Effect type '${e}' not registered`),null;try{const c=r.create(t,i,a);if(!c)return null;const h={id:`effect_${this.nextId++}`,type:e,effect:c,priority:n,enabled:!0};return this.effects.set(h.id,h),h}catch(c){return console.error(`Error creating effect '${e}':`,c),null}}createEffectFromPythonData(e,t,i,a,n=0){const r=this.creators.get(e);if(!r||!r.fromPythonData)return this.createEffect(e,t,i,a,n);try{const c=r.fromPythonData(t,i,a);if(!c)return null;const h={id:`effect_${this.nextId++}`,type:e,effect:c,priority:n,enabled:!0};return this.effects.set(h.id,h),h}catch(c){return console.error(`Error creating effect '${e}' from Python data:`,c),null}}createEffectsFromList(e,t,i){const a=[],n=e.sort((r,c)=>(r.priority||0)-(c.priority||0));for(const r of n){const c=this.createEffect(r.type,r.params,t,i,r.priority);c&&(c.enabled=r.enabled!==!1,a.push(c))}return a}createEffectsFromPythonPlanetData(e,t,i,a,n){const r=[];try{const c=Ie(e);if(n?this.layerSystem=n:this.layerSystem=new je(i,c),e.surface_elements){const h=e.surface_elements;if(h.effects_3d&&Array.isArray(h.effects_3d))for(const l of h.effects_3d){if(l.type==="atmospheric_streaks"){const g=pt(t,l.params,e.seeds?.shape_seed+3e3),x={id:`effect_${this.nextId++}`,type:"atmospheric_streaks",effect:g,priority:l.priority||0,enabled:!0,name:"Atmospheric Streaks"};r.push(x),g.addToScene(a,i.position);continue}const d=this.createEffect(l.type,l.params,t,i,l.priority||0);d?(d.name=l.type.replace(/_/g," ").replace(/\b\w/g,g=>g.toUpperCase()),r.push(d),d.effect.apply&&d.effect.apply(i),d.effect.addToScene&&d.effect.addToScene(a,i.position)):console.error("❌ FALLO AL CREAR EFECTO:",l.type)}switch(h.type){case"gas_giant":if(this.layerSystem){const l=bi(this.layerSystem,{...h,base_color:c,turbulence:e.turbulence||h.turbulence},e.seeds?.shape_seed||e.seeds?.planet_seed||e.seeds?.planet_seed),d=wi(this.layerSystem,{...h,base_color:c,storm_intensity:e.storm_intensity||h.storm_intensity},(e.seeds?.shape_seed||e.seeds?.planet_seed)+1e3),g={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:l,priority:0,enabled:!0};this.effects.set(g.id,g),r.push(g);const x={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:d,priority:1,enabled:!0};this.effects.set(x.id,x),r.push(x)}else console.error("❌ PlanetLayerSystem not initialized!");break;case"metallic":case"metallic_3d":if(this.layerSystem){const l=Ni(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed);r.push({id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:l,priority:0,enabled:!0})}break;case"rocky":if(this.layerSystem){const l=Si(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed);r.push({id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:l,priority:0,enabled:!0})}break;case"icy":if(this.layerSystem){const l=Ei(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed);r.push({id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:l,priority:0,enabled:!0})}break;case"oceanic":break;default:if(i.material instanceof be){const l=Ie(e);i.material.color.copy(l)}break}}else if(i.material instanceof be){const h=Ie(e);i.material.color.copy(h)}if(e.atmosphere){if(e.atmosphere.halo&&e.atmosphere.halo.enabled!==!1){const h=this.createEffectFromPythonData(Ct.ATMOSPHERIC_HALO,e,t,i,10);h&&(r.push(h),h.effect.addToScene(a,i.position))}if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const h=ft(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(h){const l={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:h,priority:20,enabled:!0};this.effects.set(l.id,l),r.push(l),h.addToScene(a,i.position)}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const h=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),l={...e.atmosphere};h==="oceanic"&&(l.opacity=Math.min(l.opacity||.3,.15),l.width=Math.min(l.width||15,8));const d=this.createEffectFromPythonData("atmosphere",l,t,i,5);d&&(r.push(d),d.effect.addToScene(a,i.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){const h=this.createEffectFromPythonData("ring_system",e,t,i,1);h?(r.push(h),h.effect.addToScene(a,i.position)):console.warn("⚠️ Failed to create ring effect")}if(e.surface_elements?.has_fragmentation_zones){const h=this.createEffectFromPythonData("fragmentation",e,t,i,5);h&&(r.push(h),h.effect.addToScene(a,i.position))}return this.layerSystem&&this.layerSystem.addToScene(a),r.forEach((h,l)=>{}),r.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),r}catch(c){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",c),c}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);i&&(i.enabled=t!==void 0?t:!i.enabled)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(a){console.error(`Error updating effect ${i.type}:`,a)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const Pe=ve.getInstance(),ge={atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function Ii(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"atmosphere",params:{...ge.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:ge.cloud_bands,priority:0},{type:"cloud_gyros",params:ge.cloud_gyros,priority:1},{type:"atmosphere",params:{...ge.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:ge.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...ge.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const re={log:(s,e)=>{},warn:(s,e)=>{console.warn(`[Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`[Effects] ${s}`,e||"")},debug:(s,e)=>{}};new Date().toISOString();const Ri=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[i,a]=f.useState([]),[n,r]=f.useState({});f.useEffect(()=>{if(!s)return;const l=c(s);r(l),a(h(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=l)},[s,e]);function c(l){const d={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(l.planet_info&&l.surface_elements?d.hasValidStructure=!0:(l.planet_info||d.missingFields.push("planet_info"),l.surface_elements||d.missingFields.push("surface_elements")),l.surface_elements?.type==="oceanic"&&(d.oceanicData={hasAbstractLands:!!l.surface_elements.abstract_lands?.length,numGreenPatches:l.surface_elements.green_patches?.length||0,numClouds:l.surface_elements.clouds?.length||0,hasDepths:l.surface_elements.depths?.enabled||!1,baseColorIsBlue:l.planet_info?.base_color==="#0000FF",greenPatchColor:l.surface_elements.green_patches?.[0]?.color,issues:[]},d.oceanicData.numGreenPatches>15&&d.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),d.oceanicData.baseColorIsBlue||d.oceanicData.issues.push(`Color base no es azul puro: ${l.planet_info?.base_color}`),d.renderingIssues=d.oceanicData.issues),l.planet_info?.base_color&&l.planet_info?.type){const x={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[l.planet_info.type];x&&l.planet_info.base_color!==x?d.colorConsistency=`Inconsistente: esperado ${x}, recibido ${l.planet_info.base_color}`:d.colorConsistency="Correcto"}return d}function h(l){const d=[];if(!l.surface_elements?.type)return["No surface type defined"];const g=l.surface_elements.type.toLowerCase();switch(g){case"oceanic":d.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":d.push("RockyTerrainEffect");break;case"icy":d.push("IcyTerrainEffect");break;case"gas giant":d.push("GasGiantBandsEffect");break;default:d.push(`Generic effect for type: ${g}`)}return l.atmosphere?.density>0&&d.push("AtmosphericEffect"),l.rings&&d.push("RingSystemEffect"),d}return t?o.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[o.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),o.jsxs("div",{style:{marginBottom:"10px"},children:[o.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,o.jsx("br",{}),o.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,o.jsx("br",{}),o.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&o.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[o.jsx("strong",{children:"🌊 Oceanic Data:"}),o.jsx("br",{}),o.jsxs("span",{style:{color:n.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",n.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),o.jsx("br",{}),"Green Patches: ",n.oceanicData?.numGreenPatches,o.jsx("br",{}),"Clouds: ",n.oceanicData?.numClouds,o.jsx("br",{}),"Has Depths: ",n.oceanicData?.hasDepths?"Yes":"No",o.jsx("br",{}),n.oceanicData?.issues?.length>0&&o.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",o.jsx("br",{}),n.oceanicData.issues.map((l,d)=>o.jsxs("div",{children:["- ",l]},d))]})]}),o.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[o.jsx("strong",{children:"🎨 Effects Applied:"}),o.jsx("br",{}),i.map((l,d)=>o.jsxs("div",{style:{color:l.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",l]},d))]}),o.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function Di(s){f.useEffect(()=>{if(s&&s.surface_elements?.type==="oceanic"){s.surface_elements.green_patches?.length>0;const e=s.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[s])}const Ue=2.5,yt=()=>{const s=45*Math.PI/180;return Ue/(Math.tan(s/2)*.5)},ji=({planetName:s,containerClassName:e="",width:t=800,height:i=600,autoRotate:a=!0,enableControls:n=!0,showDebugInfo:r=!1,planetData:c,cosmicOriginTime:h,initialAngleRotation:l,onDataLoaded:d,onEffectsCreated:g,onError:x})=>{const E=f.useRef(null),v=f.useRef(null),_=f.useRef(null),I=f.useRef(null),S=f.useRef(null),N=f.useRef(null),X=f.useRef(new $t),q=f.useRef(null),ce=f.useRef(0),L=f.useRef(null),[he,w]=f.useState(!0),[$,B]=f.useState(null),[P,se]=f.useState(null),[G,Z]=f.useState([]),[K,ee]=f.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),te=f.useRef([]),de=f.useRef(0),le=f.useRef(null),U=f.useRef(null),F=Math.floor(Date.now()/1e3),[ne,pe]=f.useState(0),Se=h||P?.timing?.cosmic_origin_time||Date.now()/1e3-3600,Ee=F-Se+ne;ce.current=Ee;const Ce=f.useCallback(()=>{if(!E.current||!_.current||!I.current)return;const m=E.current,y=m.clientWidth||400,u=m.clientHeight||400;_.current.setSize(y,u),I.current.aspect=y/u,I.current.updateProjectionMatrix()},[]),Ne=async m=>{if(!(!S.current||!v.current||!U.current)){re.log("Applying modular effects from API data",{planet:m.planet_info.name,type:m.planet_info.type});try{He();const y=Ie(m);U.current.updateBaseColor(y);const u=Pe.createEffectsFromPythonPlanetData(m,Ue,S.current,v.current,U.current);console.log(`Planet: ${m.planet_info?.name}, Effects:`,u.map(b=>b.type)),Z(u),te.current=u,g&&g(u),re.log(`Successfully applied ${u.length} modular effects`),$e()}catch(y){re.error("Error applying modular effects",y),Oe()}}},Ve=f.useCallback(()=>{if(!E.current)return!1;try{for(;E.current.firstChild;)E.current.removeChild(E.current.firstChild);v.current=null,I.current=null,_.current=null,S.current=null,z.current=null;const m=E.current,y=m.clientWidth||t||400,u=m.clientHeight||i||400,b=new Zt;b.background=new p(1297),v.current=b;const R=new Kt(45,y/u,.1,1e4),M=yt();R.position.set(0,0,M),R.lookAt(0,0,0),I.current=R;const C=new Xt({antialias:!0,alpha:!0,powerPreference:"high-performance"});return C.setSize(y,u),C.setPixelRatio(Math.min(window.devicePixelRatio,2)),C.shadowMap.enabled=!0,C.shadowMap.type=qt,C.toneMapping=Qt,C.toneMappingExposure=1.2,C.outputColorSpace=Jt,E.current.appendChild(C.domElement),_.current=C,Mt(b,null),Pt(b),n&&Tt(R,C.domElement),!0}catch(m){return console.error("Error initializing Three.js:",m),!1}},[P,c,h]),We=m=>{if(!m)return 0;const y=m.sun_angle||m.lighting?.sun_angle;if(y!==void 0)return y;const u=m.timing?.current_orbital_angle||m.timing?.orbital_angle;return u??0},oe=f.useRef(null),Me=f.useRef(null),me=f.useRef(null),z=f.useRef(null),Nt=m=>{m.castShadow=!0,m.shadow.mapSize.width=2048,m.shadow.mapSize.height=2048,m.shadow.camera.near=.5,m.shadow.camera.far=50,m.shadow.camera.left=-10,m.shadow.camera.right=10,m.shadow.camera.top=10,m.shadow.camera.bottom=-10},tt=m=>{if(!oe.current||!v.current)return;const y=We(m),u=10,b=y+Math.PI,R=Math.sin(y)*5,M=u*Math.cos(b),C=R,ue=u*Math.sin(b);oe.current.position.set(M,C,ue),oe.current.target.position.set(0,0,0),v.current.children.includes(oe.current.target)||v.current.add(oe.current.target),Me.current&&Me.current.position.set(-M*.5,0,-ue*.5),U.current&&oe.current&&U.current.updateFromThreeLight(oe.current)},Mt=(m,y)=>{{const u=new ht(16777215,2);u.position.set(-10,5,10),u.target.position.set(0,0,0),u.castShadow=!0,Nt(u),m.add(u),m.add(u.target),oe.current=u;const b=new ht(16777215,.05);b.position.set(8,-3,-5),m.add(b),Me.current=b;const R=new ei(2236996,.1);m.add(R),setTimeout(()=>{U.current&&u&&U.current.updateFromThreeLight(u)},50);return}},Pt=m=>{const y=new Ge(Ue,128,64),u=new bt({color:8421504}),b=new we(y,u);b.castShadow=!0,b.receiveShadow=!0,b.position.set(0,0,0),m.add(b),S.current=b;const R=new p(8421504);U.current=new je(b,R),U.current.addToScene(m)},Tt=(m,y)=>{const u=new oi(m,y);u.enableDamping=!0,u.dampingFactor=.05;const b=yt();u.minDistance=b*.8,u.maxDistance=b*3,u.autoRotate=a,u.autoRotateSpeed=.5,u.enablePan=!0,u.enableZoom=!0,u.target.set(0,0,0),N.current=u},At=f.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{w(!0),B(null),re.log("Loading planet data from API",{planetName:s});const y=await fetch("/api/planet/rendering-data");if(!y.ok)throw new Error(`HTTP error! status: ${y.status}`);const u=await y.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const b=u.planet_data,R=u.timing,M=u.rendering_data,C={planet_info:M?.planet_info||{name:b.name,type:b.planet_type,base_color:"#808080",radius:b.diameter/15e3,orbital_radius:b.orbital_radius},surface_elements:M?.surface_elements,atmosphere:M?.atmosphere,rings:M?.rings,effects_3d:M?.effects_3d,shader_uniforms:M?.shader_uniforms,universal_actions:M?.universal_actions,timing:{cosmic_origin_time:R.cosmic_origin_time,current_time_seconds:R.current_time_seconds,elapsed_time:R.elapsed_time,initial_orbital_angle:b.initial_orbital_angle,current_orbital_angle:b.current_orbital_angle,max_orbital_radius:R.max_orbital_radius,system_max_orbital_radius:b.system_max_orbital_radius},original_planet_data:b,seeds:M?.seeds};return se(C),L.current=C,re.log("API data loaded successfully",{planet:C.planet_info.name,type:C.planet_info.type,hasEffects:!!C.surface_elements,fullRenderingData:M}),d&&d(C),C}catch(m){const y=m instanceof Error?m.message:"Unknown error";return B(y),x&&x(y),null}finally{w(!1),window.isLoadingPlanetData=!1}}},[s,d,x]);f.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{w(!0),B(null),re.log("Loading planet data from API",{planetName:s});const y=await fetch("/api/planet/rendering-data");if(!y.ok)throw new Error(`HTTP error! status: ${y.status}`);const u=await y.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const b=u.planet_data,R=u.timing,M=u.rendering_data,C={planet_info:M?.planet_info||{name:b.name,type:b.planet_type,base_color:"#808080",radius:b.diameter/15e3,orbital_radius:b.orbital_radius},surface_elements:M?.surface_elements,atmosphere:M?.atmosphere,rings:M?.rings,effects_3d:M?.effects_3d,shader_uniforms:M?.shader_uniforms,universal_actions:M?.universal_actions,timing:{cosmic_origin_time:R.cosmic_origin_time,current_time_seconds:R.current_time_seconds,elapsed_time:R.elapsed_time,initial_orbital_angle:b.initial_orbital_angle,current_orbital_angle:b.current_orbital_angle,max_orbital_radius:R.max_orbital_radius,system_max_orbital_radius:b.system_max_orbital_radius},original_planet_data:b,seeds:M?.seeds};se(C),L.current=C,re.log("API data loaded successfully",{planet:C.planet_info.name,type:C.planet_info.type,hasEffects:!!C.surface_elements,fullRenderingData:M}),tt(C),z.current&&v.current&&(v.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Ne(C),d&&d(C)}catch(m){const y=m instanceof Error?m.message:"Unknown error";B(y),x&&x(y),Oe()}finally{w(!1),window.isLoadingPlanetData=!1}}},[s,c,h,l]);const it=f.useCallback(()=>{if(!P||!S.current)return;const m=c?.orbital_period_seconds||365.25*24*3600,y=2*Math.PI/m,u=P.timing?.initial_orbital_angle||0,b=Date.now()/1e3,R=0,M=h||P.timing?.cosmic_origin_time||Date.now()/1e3-3600,C=b-M+R,ue=(u+C*y)%(2*Math.PI),Ze=P.timing?.max_orbital_radius||100,Fe=20+P.planet_info?.orbital_radius/Ze*80,Rt=Fe,Dt=Fe*Math.cos(ue),jt=Rt*Math.sin(ue);S.current.position.x=Dt,S.current.position.z=jt,S.current.position.y=0},[P,c,h]),It=f.useCallback(async m=>{const y=m||P;if(y&&v.current)try{tt(y),z.current&&v.current&&(v.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Ne(y)}catch(u){re.error("Error in applyProceduralShadersFromAPI:",u),Oe()}},[P]),Oe=()=>{if(!(!v.current||!S.current)){re.warn("Applying fallback effects for planet type:",c?.planet_type);try{He(),S.current.material instanceof be&&S.current.material.color.setHex(6710886);try{const m=Ii("generic"),y=Pe.createEffectsFromList(m,Ue,S.current);y.forEach(u=>{u.effect.addToScene&&v.current&&S.current&&u.effect.addToScene(v.current,S.current.position)}),te.current=y,Z(y)}catch(m){console.warn("Could not create fallback effects, using basic material only:",m)}$e()}catch(m){re.error("Error applying fallback effects",m)}}},He=()=>{te.current.forEach(m=>{try{m.effect.dispose&&m.effect.dispose()}catch{}}),te.current=[],Z([])},st=f.useCallback(()=>{q.current=requestAnimationFrame(st);const m=performance.now(),y=X.current.getDelta();N.current&&N.current.update();try{Pe.updateAllEffects(y,S.current?.rotation.y)}catch{}if(S.current&&L.current){L.current.planet_info?.name;const u=L.current.original_planet_data,b=u?.orbital_period_seconds||365.25*24*3600,R=L.current.timing?.initial_orbital_angle||0;h||L.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const M=u?.axial_tilt||0,C=2*Math.PI/b;(R+ce.current*C)%(2*Math.PI);const ue=L.current.timing?.max_orbital_radius||L.current.timing?.system_max_orbital_radius,Ze=u?.orbital_radius;if(!ue||!Ze)return;u?.eccentricity_factor,S.current.position.set(0,0,0);const ot=u?.rotation_period_seconds||86400,Fe=2*Math.PI/ot;S.current.rotation.y=ce.current*Fe%(2*Math.PI),S.current.rotation.z=M*(Math.PI/180)}if(te.current.forEach(u=>{u.effect.updateUniforms&&u.effect.updateUniforms(y)}),_.current&&v.current&&I.current){const u=performance.now();_.current.render(v.current,I.current);const b=performance.now()-u;if(m-de.current>5e3){const R=1e3/(m-de.current);$e(),ee(M=>({...M,frameRate:Math.round(R),renderTime:Math.round(b*100)/100})),de.current=m}}},[]),$e=f.useCallback(()=>{const m=Pe.getStats();ee(y=>({...y,activeEffects:m.activeEffects,enabledEffects:m.enabledEffects}))},[]);return f.useEffect(()=>{let m=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!m)return;const u=await At();if(!m)return;if(!Ve()){m&&B("Failed to initialize 3D renderer");return}if(!m||(st(),E.current&&"ResizeObserver"in window&&(le.current=new ResizeObserver(Ce),le.current.observe(E.current)),window.addEventListener("resize",Ce),!m))return;u?await It(u):Oe()}catch(u){m&&B(u instanceof Error?u.message:"Unknown initialization error")}})(),()=>{if(m=!1,L.current=null,q.current&&cancelAnimationFrame(q.current),le.current&&le.current.disconnect(),window.removeEventListener("resize",Ce),He(),U.current&&(U.current.dispose(),U.current=null),N.current&&N.current.dispose(),me.current&&v.current&&(v.current.remove(me.current),me.current.geometry.dispose(),me.current.material.dispose(),me.current=null),z.current&&v.current&&(v.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),_.current&&E.current)try{E.current.contains(_.current.domElement)&&E.current.removeChild(_.current.domElement),_.current.dispose()}catch{}}},[]),f.useEffect(()=>{const m=setInterval(()=>{const y=Pe.getStats();ee(u=>({...u,activeEffects:y.activeEffects,enabledEffects:y.enabledEffects}))},1e4);return()=>clearInterval(m)},[]),f.useEffect(()=>{P&&v.current&&S.current&&it()},[P,it]),Di(P),o.jsxs("div",{className:`relative ${e}`,children:[r&&P&&o.jsx(Ri,{planetData:P,showInPage:!0,showInConsole:!0}),o.jsx("div",{ref:E,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),he&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:o.jsxs("div",{className:"text-white text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),o.jsx("div",{children:"Loading planet..."})]})}),$&&o.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[o.jsx("strong",{children:"Error:"})," ",$]}),P&&!he&&o.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[o.jsx("h3",{className:"text-lg font-bold",children:P.planet_info.name}),o.jsx("p",{className:"text-sm opacity-80",children:P.planet_info.type}),o.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[G.length," effects active"]}),P.surface_elements?.description&&o.jsx("p",{className:"text-xs mt-2 opacity-60",children:P.surface_elements.description.appearance})]}),r&&o.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[o.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),o.jsxs("div",{children:["Frame Rate: ",K.frameRate," FPS"]}),o.jsxs("div",{children:["Render Time: ",K.renderTime,"ms"]}),o.jsxs("div",{children:["Active Effects: ",K.activeEffects]}),o.jsxs("div",{children:["Enabled Effects: ",K.enabledEffects]}),o.jsxs("div",{className:"mt-2",children:[o.jsx("div",{className:"font-semibold",children:"Effects:"}),G.map(m=>o.jsxs("div",{className:"ml-2",children:[m.type," (",m.enabled?"ON":"OFF",")"]},m.id))]})]})]})};class Li extends vt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?o.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:o.jsxs("div",{className:"text-center p-4",children:[o.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),o.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const Oi=s=>o.jsx(Li,{children:o.jsx(ji,{...s})}),Fi=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:a})=>{const n=f.useRef(null),r=f.useRef(null),[c,h]=f.useState("Aligning Stargate..."),[l,d]=f.useState(!1),[g,x]=f.useState(!1),[E,v]=f.useState(!1),[_,I]=f.useState(!0),[S,N]=f.useState(!0),[X,q]=f.useState(null),[ce,L]=f.useState(null);f.useEffect(()=>{const w=document.createElement("style");return w.textContent=`
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
    `,document.head.appendChild(w),()=>{document.head.removeChild(w)}},[]),f.useEffect(()=>{const w=n.current;if(!w)return;const $=w.getContext("2d");if(!$)return;let B=[];const P=800;let se,G;const Z=800;let K,ee=.5;function te(){const F=w?.parentElement;if(!F||!w)return;const ne=F.clientWidth,pe=F.clientHeight;w.width=Math.min(ne,Z),w.height=Math.min(pe,Z),se=w.width/2,G=w.height/2}function de(){te(),B=[];for(let F=0;F<P;F++)B.push({x:Math.random()*(w?.width||800),y:Math.random()*(w?.height||800),z:Math.random()*(w?.width||800),o:Math.random()});le()}function le(){!w||!$||($.clearRect(0,0,w.width,w.height),B.forEach(F=>{F.z-=ee,F.z<=0&&(F.z=w.width,F.x=Math.random()*w.width,F.y=Math.random()*w.height,F.o=Math.random());const ne=w.width/F.z,pe=(F.x-se)*ne+se,Se=(F.y-G)*ne+G,Ee=2*ne;$.beginPath(),$.fillStyle=`rgba(255, 255, 255, ${F.o})`,$.arc(pe,Se,Ee,0,2*Math.PI),$.fill()}),ee<60&&(ee+=1),K=requestAnimationFrame(le))}de();const U=()=>te();return window.addEventListener("resize",U),()=>{window.removeEventListener("resize",U),K&&cancelAnimationFrame(K)}},[]),f.useEffect(()=>{if(e&&!_){const w=new Image;w.onload=()=>{r.current&&(r.current.src=e,x(!0),v(!0))},w.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{x(!0),v(!0)},1500)},w.src=e}else(_||!e)&&setTimeout(()=>{x(!0),v(!0)},1500)},[e,_]),f.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){h("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),d(!0);const $=(Z,K)=>Array.from({length:K},()=>Z[Math.floor(Math.random()*Z.length)]).join(""),B=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let P=0,se=0;const G=()=>{if(P>=B.length){const K="Stargate system aligned";let ee=0;h("");const te=()=>{ee<K.length?(h(K.substring(0,ee+1)),ee++,setTimeout(te,30)):d(!1)};te();return}const Z=B[P];h($(Z.chars,32)),se++,se>=Z.iterations&&(P++,se=0),setTimeout(G,Z.duration)};G()},[]);const he=()=>{I(!_),_||(x(!0),v(!0))};return o.jsxs("div",{className:"h-full flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),S&&o.jsx("div",{className:"flex items-center gap-2",children:o.jsx("button",{onClick:he,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${_?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:_?"2D View":"3D View"})})]}),o.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[o.jsx("canvas",{ref:n,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${E?"opacity-0":"opacity-100"}`,style:{filter:E?"blur(50px)":"none"}}),_&&g&&t&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${g?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:o.jsx(Oi,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:a,onDataLoaded:w=>{q(w)},onError:w=>{L(w),console.error("❌ Planet rendering error:",w)}})}),!_&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${g?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:g&&e?o.jsx("div",{className:"w-full h-full flex items-center justify-center",children:o.jsx(zt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:o.jsx("img",{ref:r,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):o.jsx("img",{ref:r,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),S&&o.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:_?"🌍 3D":"🖼️ 2D"})]}),o.jsxs("div",{className:"text-center mt-auto",children:[o.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${l?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[o.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),c]}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),o.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",_&&X&&o.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",X.planet_info?.type," Planet",X.atmosphere&&o.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),X.rings?.has_rings&&o.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),_&&ce&&o.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},ki=({currentPlanet:s,system:e,galaxy:t,systemPlanets:i})=>{const[a,n]=f.useState(null),[r,c]=f.useState(null),[h,l]=f.useState(!1),[d,g]=f.useState(!1),[x,E]=f.useState(!0);f.useEffect(()=>{if(i&&i.length>0){const I=i.findIndex(S=>S.name.toLowerCase()===s.toLowerCase());I!==-1?(I>0?(n(i[I-1].name.toLowerCase()),l(!0)):e.index>0?(n("__prev_system__"),l(!0)):l(!1),I<i.length-1?(c(i[I+1].name.toLowerCase()),g(!0)):(c("__next_system__"),g(!0))):(l(!1),g(!1))}else l(!1),g(!1);E(!1)},[s,e.index,i]);const v=async()=>{const I=t.coordinates.join(",");if(a==="__prev_system__")try{const S=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(S.ok){const N=await S.json();if(N.system&&N.system.planets&&N.system.planets.length>0){const q=N.system.planets[N.system.planets.length-1].name.toLowerCase();Te(I,e.index-1,q,N.system.planets),qe(I,e.index-1),window.location.href=`/planet/${q}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else a&&(Te(I,e.index,a,i),window.location.href=`/planet/${a}`)},_=async()=>{const I=t.coordinates.join(",");if(r==="__next_system__")try{const S=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(S.ok){const N=await S.json();if(N.system&&N.system.planets&&N.system.planets.length>0){const q=N.system.planets[0].name.toLowerCase();Te(I,e.index+1,q,N.system.planets),qe(I,e.index+1),window.location.href=`/planet/${q}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else r&&(Te(I,e.index,r,i),window.location.href=`/planet/${r}`)};return x?null:o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("button",{onClick:v,disabled:!h,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${h?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),o.jsx("button",{onClick:_,disabled:!d,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${d?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},zi=({planet:s,system:e,galaxy:t,planet_url:i,version:a,image_url:n,cosmic_origin_time:r,initial_angle_rotation:c})=>{const[h]=f.useState(t.coordinates.join(","));f.useEffect(()=>{document.body.setAttribute("data-coordinates",h),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),Te(h,e.index,s.name,e.planets||[]),qe(h,e.index)},[h,e.index,s.name]);const l=x=>x.replace(/_/g," "),d=x=>x.replace(/_/g," "),g=x=>x.replace(/_/g," ");return o.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[o.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),o.jsxs("div",{className:"relative z-10",children:[o.jsx(Ft,{}),o.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:o.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",l(s.name),"'"]})}),o.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",d(e.name),"' - Galaxy '",g(t.name),"'"]}),o.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),o.jsx(ki,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:o.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[o.jsx("div",{className:"order-1 lg:order-1",children:o.jsx(Fi,{planetUrl:i,imageUrl:n,planet:s,cosmicOriginTime:r,initialAngleRotation:c})}),o.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),o.jsx("div",{className:"order-2 lg:order-2",children:o.jsx(ii,{planet:s,system:e,galaxy:t,cosmicOriginTime:r,initialAngleRotation:c})})]})}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:o.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:o.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",d(e.name),"'"]})})})]}),o.jsx(Lt,{version:a})]}),o.jsx(Ut,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!s||!e||!t||!i){console.error("Missing required data elements");return}const a=JSON.parse(s.textContent||"{}"),n=JSON.parse(e.textContent||"{}"),r=JSON.parse(t.textContent||"{}"),c=JSON.parse(i.textContent||"{}"),h={planet:a,system:n,galaxy:r,planet_url:c.planet_url,version:c.version,image_url:c.image_url,cosmic_origin_time:c.cosmic_origin_time,initial_angle_rotation:c.initial_angle_rotation},l=document.getElementById("atlas-react-root");l&&Ot.createRoot(l).render(vt.createElement(zi,h))}catch(s){console.error("Error initializing Planet React app:",s)}});
