import{r as g,j as s,R as _t,V as Ft,c as kt}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as zt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Ut,U as Yt,m as Re,c as tt,a as Gt}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as Bt,V as D,n as Ce,T as Se,Q as lt,l as ct,o as ne,R as Vt,p as Wt,q as $t,e as be,r as z,s as ee,N as we,t as $e,c as He,C as p,u as Ht,v as it,d as Me,F as xe,G as St,w as Ne,x as Zt,y as dt,L as ht,g as mt,M as wt,z as Kt,S as Xt,P as qt,W as Jt,H as Qt,I as ei,J as ti,D as ut,A as ii}from"./atlas_CjpijR7uUEfLLbDYV5ZWU.js";const oi=({effects:a,onToggleEffect:e})=>{const[t,i]=g.useState(a),[o,n]=g.useState(!1);g.useEffect(()=>{i(a)},[a]);const r=(d,l)=>{i(h=>h.map(f=>f.id===d?{...f,enabled:l}:f)),e(d,l)},c=d=>d;return t.length===0?null:s.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("div",{className:"text-xs text-gray-400",children:"3D Effects Control"}),s.jsxs("button",{onClick:()=>n(!o),className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[o?"Hide":"Show"," (",t.filter(d=>d.enabled).length,"/",t.length,")"]})]}),o&&s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:t.map(d=>s.jsxs("div",{className:"bg-white/5 rounded p-2 flex items-center justify-between",children:[s.jsxs("label",{className:"flex items-center gap-2 cursor-pointer flex-1",children:[s.jsx("input",{type:"checkbox",checked:d.enabled,onChange:l=>r(d.id,l.target.checked),className:"rounded border-gray-400 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-white/10"}),s.jsx("span",{className:`${d.enabled?"text-white":"text-gray-500"} transition-colors`,children:c(d.type)})]}),s.jsx("span",{className:`text-[10px] ${d.enabled?"text-green-400":"text-gray-600"}`,children:d.enabled?"ON":"OFF"})]},d.id))}),o&&t.length>3&&s.jsxs("div",{className:"mt-2 flex gap-2",children:[s.jsx("button",{onClick:()=>{t.forEach(d=>r(d.id,!0))},className:"text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors",children:"Enable All"}),s.jsx("button",{onClick:()=>{t.forEach(d=>r(d.id,!1))},className:"text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors",children:"Disable All"})]})]})},ai=({planet:a,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:o,effects:n,onToggleEffect:r})=>{const[c,d]=g.useState(!1),l=y=>y.replace(/_/g," "),h=y=>{const T=y/86400;return T<30?`${T.toFixed(2)} days`:T<365?`${(T/30).toFixed(2)} months`:`${(T/365).toFixed(2)} years`},f=y=>{const T=y*9/5+32;return`${y.toFixed(1)}°C (${T.toFixed(1)}°F)`},b=y=>`${y.toExponential(2)} kg`,_=y=>y>=1e3?`${(y/1e3).toFixed(2)} km`:`${y.toFixed(2)} m`;return s.jsxs("div",{className:"h-full flex flex-col relative",children:[s.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),s.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[s.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),s.jsx(Ut,{type:"planet",name:a.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:a.name,className:"text-xs"})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),s.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:a.planet_type})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),s.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:a.atmosphere})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),s.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:a.life_forms})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),s.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),s.jsx("div",{className:"text-xs font-bold text-orange-300",children:b(a.mass)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),s.jsx("div",{className:"text-xs font-bold text-orange-300",children:_(a.diameter)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),s.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[a.density.toFixed(2)," kg/m³"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),s.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[a.gravity.toFixed(2)," m/s²"]})]})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),s.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.orbital_radius.toFixed(2)," AU"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),s.jsx("div",{className:"text-xs font-bold text-cyan-300",children:h(a.orbital_period_seconds)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.orbital_speed.toFixed(2)," m/s"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.axial_tilt.toFixed(2),"°"]})]})]})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),s.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),s.jsx("div",{className:"text-xs font-bold text-red-300",children:f(a.surface_temperature)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),s.jsx("div",{className:"text-xs font-bold text-red-300",children:h(a.rotation_period_seconds)})]})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",a.elements.length,")"]}),a.elements.length>4&&s.jsx("button",{onClick:()=>d(!c),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:c?"▲ Less":"▼ All"})]}),s.jsx("div",{className:"flex flex-wrap gap-1",children:(c?a.elements:a.elements.slice(0,4)).map((y,T)=>s.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:y},T))})]})]}),s.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[s.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Status:"}),s.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Planet:"}),s.jsx("div",{className:"text-white truncate font-medium",children:l(a.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"System:"}),s.jsx("div",{className:"text-white truncate font-medium",children:l(e.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"System ID:"}),s.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),s.jsx("div",{className:"text-white truncate font-medium",children:l(t.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),s.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]}),n&&r&&s.jsx(oi,{effects:n,onToggleEffect:r})]})},ft={type:"change"},ot={type:"start"},Et={type:"end"},Ye=new Vt,pt=new Wt,si=Math.cos(70*$t.DEG2RAD),V=new D,Q=2*Math.PI,I={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Je=1e-6;class ni extends Bt{constructor(e,t=null){super(e,t),this.state=I.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ce.ROTATE,MIDDLE:Ce.DOLLY,RIGHT:Ce.PAN},this.touches={ONE:Se.ROTATE,TWO:Se.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new lt,this._lastTargetPosition=new D,this._quat=new lt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ct,this._sphericalDelta=new ct,this._scale=1,this._panOffset=new D,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new D,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=li.bind(this),this._onPointerDown=ri.bind(this),this._onPointerUp=ci.bind(this),this._onContextMenu=gi.bind(this),this._onMouseWheel=mi.bind(this),this._onKeyDown=ui.bind(this),this._onTouchStart=fi.bind(this),this._onTouchMove=pi.bind(this),this._onMouseDown=di.bind(this),this._onMouseMove=hi.bind(this),this._interceptControlDown=yi.bind(this),this._interceptControlUp=vi.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ft),this.update(),this.state=I.NONE}update(e=null){const t=this.object.position;V.copy(t).sub(this.target),V.applyQuaternion(this._quat),this._spherical.setFromVector3(V),this.autoRotate&&this.state===I.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=Q:i>Math.PI&&(i-=Q),o<-Math.PI?o+=Q:o>Math.PI&&(o-=Q),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=r!=this._spherical.radius}if(V.setFromSpherical(this._spherical),V.applyQuaternion(this._quatInverse),t.copy(this.target).add(V),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const c=V.length();r=this._clampDistance(c*this._scale);const d=c-r;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),n=!!d}else if(this.object.isOrthographicCamera){const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=d!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(c),this.object.updateMatrixWorld(),r=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Ye.origin.copy(this.object.position),Ye.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ye.direction))<si?this.object.lookAt(this.target):(pt.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ye.intersectPlane(pt,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>Je||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Je||this._lastTargetPosition.distanceToSquared(this.target)>Je?(this.dispatchEvent(ft),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Q/60*this.autoRotateSpeed*e:Q/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){V.setFromMatrixColumn(t,0),V.multiplyScalar(-e),this._panOffset.add(V)}_panUp(e,t){this.screenSpacePanning===!0?V.setFromMatrixColumn(t,1):(V.setFromMatrixColumn(t,0),V.crossVectors(this.object.up,V)),V.multiplyScalar(e),this._panOffset.add(V)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;V.copy(o).sub(this.target);let n=V.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/i.clientHeight,this.object.matrix),this._panUp(2*t*n/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,n=t-i.top,r=i.width,c=i.height;this._mouse.x=o/r*2-1,this._mouse.y=-(n/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Q*this._rotateDelta.x/t.clientHeight),this._rotateUp(Q*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,n=Math.sqrt(i*i+o*o);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._rotateEnd.set(o,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Q*this._rotateDelta.x/t.clientHeight),this._rotateUp(Q*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,n=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(r,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ri(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function li(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function ci(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Et),this.state=I.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function di(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=I.DOLLY;break;case Ce.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=I.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=I.ROTATE}break;case Ce.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=I.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=I.PAN}break;default:this.state=I.NONE}this.state!==I.NONE&&this.dispatchEvent(ot)}function hi(a){switch(this.state){case I.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case I.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case I.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function mi(a){this.enabled===!1||this.enableZoom===!1||this.state!==I.NONE||(a.preventDefault(),this.dispatchEvent(ot),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Et))}function ui(a){this.enabled!==!1&&this._handleKeyDown(a)}function fi(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=I.TOUCH_ROTATE;break;case Se.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=I.TOUCH_PAN;break;default:this.state=I.NONE}break;case 2:switch(this.touches.TWO){case Se.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=I.TOUCH_DOLLY_PAN;break;case Se.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=I.TOUCH_DOLLY_ROTATE;break;default:this.state=I.NONE}break;default:this.state=I.NONE}this.state!==I.NONE&&this.dispatchEvent(ot)}function pi(a){switch(this._trackPointer(a),this.state){case I.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case I.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case I.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case I.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=I.NONE}}function gi(a){this.enabled!==!1&&a.preventDefault()}function yi(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vi(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class gt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class Ct{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:o,ring_outer_radius:n,tilt_factor:r,planet_radius:c,shape_seed:d}=e;if(!t||!i){console.warn("No ring data provided");return}const l=[...t.particles,...i.particles],h=l.length,f=new gt(d||12345),b=new be,_=new Float32Array(h*3),y=new Float32Array(h*3),T=new Float32Array(h),N=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],S=f.choice(N);for(let w=0;w<h;w++){const B=l[w],R=this.planetRadius/(c||200),le=(d||12345)+w,j=new gt(le),me=B.distance*R,ce=B.angle,ue=me*Math.sin(ce),ae=Math.asin((r||.2)*.5),v=ue*Math.sin(ae),X=ue*Math.cos(ae),H=((n||400)-(o||200))*R*.4,se=j.uniform(-H*.8,H*.8),q=j.uniform(-H*.3,H*.3),ie=j.uniform(-.08,.08),$=me+q,J=ce+ie;_[w*3]=$*Math.cos(J),_[w*3+1]=v+se+this.planetRadius*.15,_[w*3+2]=X+j.uniform(-H*.4,H*.4),B.color[0]/255;const Y=(B.distance-(o||200))/((n||400)-(o||200)),Ae=S.baseGray,fe=S.variation,Pe=j.uniform(-fe,fe),k=Math.max(.12,Math.min(.45,Ae+Pe)),de=.8+Y*.4,he=j.uniform(.85,1.15),pe=j.uniform(0,1),Ie=pe<.03?j.uniform(1.1,1.3):1,Ze=k*de*he*Ie,oe=Math.max(.1,Math.min(.55,Ze));y[w*3]=oe,y[w*3+1]=oe,y[w*3+2]=oe;const De=.15,ge=j.uniform(.3,.7),W=pe<.1?j.uniform(1.05,1.2):1;T[w]=B.size*De*ge*W}b.setAttribute("position",new z(_,3)),b.setAttribute("color",new z(y,3)),b.setAttribute("size",new z(T,1)),this.material=new ee({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:we}),this.ringSystem=new $e(b,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,o=t.cosmicOriginTime||Date.now()/1e3,n=t.initialAngleRotation||0,c=Date.now()/1e3-o,d=2*Math.PI/i,l=(n+c*d)%(2*Math.PI);this.ringSystem.rotation.y=l}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function xi(a,e){const t={full_ring:a.full_ring,ontop_ring:a.ontop_ring,ring_inner_radius:a.ring_inner_radius,ring_outer_radius:a.ring_outer_radius,tilt_factor:a.tilt_factor,planet_radius:a.planet_radius,shape_seed:a.shape_seed};return new Ct(e,t)}class Oe{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new He(i,32,32);const o=new p(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ee({vertexShader:Oe.vertexShader,fragmentShader:Oe.fragmentShader,uniforms:{atmosphereColor:{value:o},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:it,side:Ht,depthWrite:!1}),this.mesh=new Me(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new p(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function bi(a,e){let t=[.7,.7,.7,.15],i=12;if(e){if(e.color&&Array.isArray(e.color)){const n=e.color;t=[n[0],n[1],n[2],(n[3]||.15)*.7]}e.width&&(i=e.width)}const o={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new Oe(a,o)}class U{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,i=Math.acos(this.random()*2-1);return{x:e*Math.sin(i)*Math.cos(t),y:e*Math.sin(i)*Math.sin(t),z:e*Math.cos(i)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const P={PARTICLE_COUNT:{min:50,max:200},SPEED:{min:.05,max:.5},SIZE:{min:.5,max:2},OPACITY:{min:.2,max:.5},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05}};class Le{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new U(i);this.params={color:t.color||new p(16777215),particleCount:t.particleCount||Math.floor(o.uniform(P.PARTICLE_COUNT.min,P.PARTICLE_COUNT.max)),speed:t.speed||o.uniform(P.SPEED.min,P.SPEED.max),size:t.size||o.uniform(P.SIZE.min,P.SIZE.max),opacity:t.opacity||o.uniform(P.OPACITY.min,P.OPACITY.max),turbulence:t.turbulence||o.uniform(P.TURBULENCE.min,P.TURBULENCE.max),rotationSpeed:t.rotationSpeed||o.uniform(P.ROTATION_SPEED.min,P.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||o.uniform(P.MOVEMENT_AMPLITUDE.min,P.MOVEMENT_AMPLITUDE.max),seed:i},this.particleCount=this.params.particleCount,this.geometry=new be,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new $e(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),c=this.params.color instanceof p?this.params.color:new p(this.params.color),d=this.params.seed||Math.floor(Math.random()*1e6),l=new U(d);for(let h=0;h<this.particleCount;h++){const f=l.spherePosition(e*l.uniform(1,1.1));t[h*3]=f.x,t[h*3+1]=f.y,t[h*3+2]=f.z;const b=l.colorVariation({r:c.r,g:c.g,b:c.b});i[h*3]=b.r,i[h*3+1]=b.g,i[h*3+2]=b.b,o[h]=this.params.size*l.uniform(.75,1.25),n[h]=this.params.speed*l.uniform(.6,1.4),r[h]=l.random()*Math.PI*2}this.geometry.setAttribute("position",new z(t,3)),this.geometry.setAttribute("customColor",new z(i,3)),this.geometry.setAttribute("size",new z(o,1)),this.geometry.setAttribute("speed",new z(n,1)),this.geometry.setAttribute("phase",new z(r,1))}createMaterial(){return new ee({vertexShader:Le.vertexShader,fragmentShader:Le.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:it,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value,this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function yt(a,e,t){const i=e.streaks||{},o=t||Math.floor(Math.random()*1e6),n=new U(o+3e3),r=i.count||Math.floor(n.uniform(P.PARTICLE_COUNT.min,P.PARTICLE_COUNT.max)),c=i.speed||n.uniform(P.SPEED.min,P.SPEED.max),d=n.uniform(P.SIZE.min,P.SIZE.max),l=n.uniform(P.OPACITY.min,P.OPACITY.max),h=n.uniform(P.TURBULENCE.min,P.TURBULENCE.max),f=n.uniform(P.ROTATION_SPEED.min,P.ROTATION_SPEED.max),b=n.uniform(P.MOVEMENT_AMPLITUDE.min,P.MOVEMENT_AMPLITUDE.max),_={color:i.color?new p().setRGB(i.color[0],i.color[1],i.color[2]):new p(16777215),particleCount:r,speed:c,size:d,opacity:l,turbulence:h,seed:o,rotationSpeed:f,movementAmplitude:b};return new Le(a,_)}const C={CLOUD_COUNT:{min:5,max:250},SPEED:{min:.02,max:.2},SIZE:{min:.8,max:3},OPACITY:{min:.15,max:.37},DENSITY:{min:.3,max:.8},ROTATION_SPEED:{min:.005,max:.02},MOVEMENT_AMPLITUDE:{min:.01,max:.08},PUFFINESS:{min:.5,max:2}};class Te{particleSystem;material;geometry;params;cloudCount;static vertexShader=`
    attribute float size;
    attribute vec3 customColor;
    attribute float speed;
    attribute float phase;
    attribute float density;
    attribute float puffiness;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vDensity;
    varying float vPuffiness;
    
    uniform float time;
    uniform float opacity;
    uniform float movementAmplitude;
    
    void main() {
      vColor = customColor;
      vSize = size;
      vDensity = density;
      vPuffiness = puffiness;
      
      // Movimiento de las nubes más lento y ondulante
      vec3 pos = position;
      float timeWithPhase = time * speed + phase;
      
      // Movimiento más suave para nubes
      pos.x += sin(timeWithPhase * 0.5) * movementAmplitude;
      pos.y += cos(timeWithPhase * 0.3) * (movementAmplitude * 0.7);
      pos.z += sin(timeWithPhase * 0.4) * (movementAmplitude * 0.6);
      
      // Alpha variante basado en densidad y tiempo
      float timeVariation = 0.7 + 0.3 * sin(timeWithPhase * 0.8);
      vAlpha = density * timeVariation * opacity;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * puffiness * (400.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vDensity;
    varying float vPuffiness;
    
    void main() {
      // Crear forma de nube suave y esponjosa
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      // Forma de nube más suave que partículas
      float cloud = 1.0 - smoothstep(0.0, 0.5, dist);
      
      // Añadir textura de nube con ruido
      float noise = sin(uv.x * 15.0) * cos(uv.y * 15.0);
      noise = 0.8 + 0.2 * noise;
      
      // Variación basada en densidad y esponjosidad
      float densityFactor = 0.5 + 0.5 * vDensity;
      float puffFactor = 0.7 + 0.3 * (vPuffiness / 2.0);
      
      cloud *= noise * densityFactor * puffFactor;
      
      // Gradiente radial para suavizar bordes
      float radialGrad = 1.0 - smoothstep(0.2, 0.5, dist);
      cloud *= radialGrad;
      
      gl_FragColor = vec4(vColor, cloud * vAlpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new U(i);this.params={color:t.color||new p(16777215),cloudCount:t.cloudCount||Math.floor(o.uniform(C.CLOUD_COUNT.min,C.CLOUD_COUNT.max)),speed:t.speed||o.uniform(C.SPEED.min,C.SPEED.max),size:t.size||o.uniform(C.SIZE.min,C.SIZE.max),opacity:t.opacity||o.uniform(C.OPACITY.min,C.OPACITY.max),density:t.density||o.uniform(C.DENSITY.min,C.DENSITY.max),rotationSpeed:t.rotationSpeed||o.uniform(C.ROTATION_SPEED.min,C.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||o.uniform(C.MOVEMENT_AMPLITUDE.min,C.MOVEMENT_AMPLITUDE.max),puffiness:t.puffiness||o.uniform(C.PUFFINESS.min,C.PUFFINESS.max),seed:i},this.cloudCount=this.params.cloudCount,this.geometry=new be,this.material=this.createMaterial(),this.generateClouds(e),this.particleSystem=new $e(this.geometry,this.material)}generateClouds(e){const t=new Float32Array(this.cloudCount*3),i=new Float32Array(this.cloudCount*3),o=new Float32Array(this.cloudCount),n=new Float32Array(this.cloudCount),r=new Float32Array(this.cloudCount),c=new Float32Array(this.cloudCount),d=new Float32Array(this.cloudCount),l=this.params.color instanceof p?this.params.color:new p(this.params.color),h=this.params.seed||Math.floor(Math.random()*1e6),f=new U(h),b=this.params.cloudsFromPython;for(let _=0;_<this.cloudCount;_++){let y,T,N,S=l,w=this.params.size*f.uniform(.5,1.5);if(b&&_<b.length){const R=b[_];y=R.position[0]*e,T=R.position[1]*e,N=f.uniform(-e*.2,e*.2),R.color&&(S=new p().setRGB(R.color[0],R.color[1],R.color[2])),w=R.radius*e*f.uniform(.8,1.2)}else{const R=f.uniform(0,2*Math.PI),le=f.uniform(.5*e,e);y=le*Math.cos(R)*f.uniform(.8,1.2),T=le*Math.sin(R)*f.uniform(.4,.6),N=f.uniform(-e*.3,e*.3)}t[_*3]=y,t[_*3+1]=T,t[_*3+2]=N;const B=f.colorVariation({r:S.r,g:S.g,b:S.b});i[_*3]=B.r,i[_*3+1]=B.g,i[_*3+2]=B.b,o[_]=w,n[_]=this.params.speed*f.uniform(.3,1.7),r[_]=f.random()*Math.PI*2,c[_]=this.params.density*f.uniform(.6,1.4),d[_]=this.params.puffiness*f.uniform(.7,1.3)}this.geometry.setAttribute("position",new z(t,3)),this.geometry.setAttribute("customColor",new z(i,3)),this.geometry.setAttribute("size",new z(o,1)),this.geometry.setAttribute("speed",new z(n,1)),this.geometry.setAttribute("phase",new z(r,1)),this.geometry.setAttribute("density",new z(c,1)),this.geometry.setAttribute("puffiness",new z(d,1))}createMaterial(){return new ee({vertexShader:Te.vertexShader,fragmentShader:Te.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:we,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value,this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.movementAmplitude!==void 0&&(this.material.uniforms.movementAmplitude.value=e.movementAmplitude)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qe(a,e,t){const i=e.clouds||[];if(i.length===0){const c=t||Math.floor(Math.random()*1e6),d=new U(c+4e3),l={color:new p(16777215),cloudCount:Math.floor(d.uniform(C.CLOUD_COUNT.min,C.CLOUD_COUNT.max)),speed:d.uniform(C.SPEED.min,C.SPEED.max),size:d.uniform(C.SIZE.min,C.SIZE.max),opacity:d.uniform(C.OPACITY.min,C.OPACITY.max),density:d.uniform(C.DENSITY.min,C.DENSITY.max),seed:c,rotationSpeed:d.uniform(C.ROTATION_SPEED.min,C.ROTATION_SPEED.max),movementAmplitude:d.uniform(C.MOVEMENT_AMPLITUDE.min,C.MOVEMENT_AMPLITUDE.max),puffiness:d.uniform(C.PUFFINESS.min,C.PUFFINESS.max)};return new Te(a,l)}const o=t||Math.floor(Math.random()*1e6),n=new U(o+4e3),r={color:new p(16777215),cloudCount:i.length,speed:n.uniform(C.SPEED.min,C.SPEED.max),size:n.uniform(C.SIZE.min,C.SIZE.max),opacity:n.uniform(C.OPACITY.min,C.OPACITY.max),density:n.uniform(C.DENSITY.min,C.DENSITY.max),seed:o,rotationSpeed:n.uniform(C.ROTATION_SPEED.min,C.ROTATION_SPEED.max),movementAmplitude:n.uniform(C.MOVEMENT_AMPLITUDE.min,C.MOVEMENT_AMPLITUDE.max),puffiness:n.uniform(C.PUFFINESS.min,C.PUFFINESS.max),cloudsFromPython:i};return new Te(a,r)}class Fe{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;constructor(e,t=new p(16753920)){this.baseMesh=e;const i=e.geometry;this.planetRadius=i.parameters.radius||1;const o=t instanceof p?t:new p(t);this.baseMaterial=new ee({vertexShader:Fe.baseVertexShader,fragmentShader:Fe.baseFragmentShader,uniforms:{baseColor:{value:o},lightDirection:{value:new D(1,1,1).normalize()},lightPosition:{value:new D(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:xe}),this.baseMesh.material=this.baseMaterial}addEffectLayer(e,t,i=1.001,o){const n=new He(this.planetRadius*i,256,256),r=new Me(n,t);return r.position.copy(this.baseMesh.position),r.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:r,material:t,layerObject:o}),this.scene&&this.scene.add(r),r}createCloudBandsLayerMaterial(e){const t=`
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
    `;return new ee({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new p(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new D(1,1,1).normalize()},opacity:{value:e.opacity||.4}},transparent:!0,blending:we,side:xe,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,o=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((n,r)=>{r<5&&(o[r*2]=n.x,o[r*2+1]=n.y)}),new ee({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new p(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:o},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new D(1,1,1).normalize()}},transparent:!0,blending:we,side:xe,depthWrite:!1})}createMetallicSurfaceLayerMaterial(e){const t=`
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
    `;return new ee({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},metalColor:{value:e.color||new p(8421504)},metalness:{value:e.metalness||.8},roughness:{value:e.roughness||.4},fragmentationIntensity:{value:e.fragmentationIntensity||.5},opacity:{value:e.opacity||.8},lightDirection:{value:new D(1,1,1).normalize()},lightPosition:{value:new D(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3},crystalScale:{value:e.crystalScale||80}},transparent:!0,blending:we,side:xe,depthWrite:!1})}addToScene(e){this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&e.add(t.mesh)}),this.effectLayers.length}update(e,t){this.effectLayers.forEach(i=>{if(i.material.uniforms.time&&(i.material.uniforms.time.value+=e),t!==void 0&&i.material.uniforms.rotationAngle&&(i.material.uniforms.rotationAngle.value=t),i.layerObject&&i.layerObject.update)try{i.layerObject.update(e,t)}catch(o){console.error(`Error updating layer ${i.name}:`,o)}i.mesh&&i.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof p?e:new p(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}createGenericLayerMaterial(e,t,i,o=!0,n=we){return i.lightDirection||(i.lightDirection={value:new D(1,1,1).normalize()}),i.lightPosition||(i.lightPosition={value:new D(0,0,0)}),new ee({vertexShader:e,fragmentShader:t,uniforms:i,transparent:o,blending:n,side:xe,depthWrite:!1})}convertEffectToLayer(e,t,i=1.001){if(t instanceof ee){const o=t.clone();return o.transparent=!0,o.depthWrite=!1,o.uniforms.lightDirection||(o.uniforms.lightDirection={value:new D(1,1,1).normalize()}),this.addEffectLayer(e,o,i)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}getLayerMeshes(){const e={};return this.effectLayers.forEach(t=>{t.name&&t.mesh&&(e[t.name]=t.mesh)}),e}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const L={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4}};class _i{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new U(i),n=t.numBands||Math.floor(o.uniform(L.NUM_BANDS.min,L.NUM_BANDS.max));this.params={numBands:n,bandPositions:t.bandPositions||this.generateDefaultBandPositions(n,i),bandWidths:t.bandWidths||this.generateDefaultBandWidths(n,i),rotationAngle:t.rotationAngle||o.uniform(L.ROTATION_ANGLE.min,L.ROTATION_ANGLE.max),baseColor:t.baseColor||new p(16753920),bandColor:t.bandColor||new p(16747520),animationSpeed:t.animationSpeed||o.uniform(L.ANIMATION_SPEED.min,L.ANIMATION_SPEED.max),turbulence:t.turbulence||o.uniform(L.TURBULENCE.min,L.TURBULENCE.max),noiseScale:t.noiseScale||o.uniform(L.NOISE_SCALE.min,L.NOISE_SCALE.max),opacity:t.opacity||.4,seed:i},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const i=new Array(20).fill(0),o=new U(t+12345);for(let n=0;n<e&&n<20;n++)i[n]=o.uniform(L.BAND_POSITIONS.min,L.BAND_POSITIONS.max);return i}generateDefaultBandWidths(e,t){const i=new Array(20).fill(0),o=new U(t+67890);for(let n=0;n<e&&n<20;n++)i[n]=o.uniform(L.BAND_WIDTHS.min,L.BAND_WIDTHS.max);return i}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity)}dispose(){}}function Si(a,e,t){const i=e.cloud_bands||{},o=t||Math.floor(Math.random()*1e6),n=new U(o+4e3),r={numBands:i.num_bands||Math.floor(n.uniform(L.NUM_BANDS.min,L.NUM_BANDS.max)),bandPositions:i.positions||void 0,bandWidths:i.widths||void 0,rotationAngle:i.rotation||n.uniform(L.ROTATION_ANGLE.min,L.ROTATION_ANGLE.max),baseColor:e.base_color?new p().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new p(16753920),bandColor:new p(16777215),animationSpeed:n.uniform(L.ANIMATION_SPEED.min,L.ANIMATION_SPEED.max),turbulence:e.turbulence||n.uniform(L.TURBULENCE.min,L.TURBULENCE.max),noiseScale:n.uniform(L.NOISE_SCALE.min,L.NOISE_SCALE.max),opacity:.4,seed:o};return new _i(a,r)}const F={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.2,max:.6}};class wi{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new U(i);this.params={stormCenters:t.stormCenters||this.generateStormCenters(i),stormColor:t.stormColor||new p(9109504),stormIntensity:t.stormIntensity||o.uniform(F.STORM_INTENSITY.min,F.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||o.uniform(F.SPIRAL_SPEED.min,F.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||o.uniform(F.ANIMATION_SPEED.min,F.ANIMATION_SPEED.max),opacity:t.opacity||o.uniform(F.OPACITY.min,F.OPACITY.max),seed:i},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new U(e+5e3),i=Math.floor(t.uniform(F.STORM_COUNT.min,F.STORM_COUNT.max)),o=[];for(let n=0;n<i;n++)o.push({x:t.uniform(F.STORM_CENTERS.min,F.STORM_CENTERS.max),y:t.uniform(F.STORM_CENTERS.min,F.STORM_CENTERS.max)});return o}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function Ei(a,e,t){const i=e.storms||{},o=t||Math.floor(Math.random()*1e6),n=new U(o+5e3),r={stormCenters:i.centers||void 0,stormColor:new p(9109504),stormIntensity:i.intensity||e.storm_intensity||n.uniform(F.STORM_INTENSITY.min,F.STORM_INTENSITY.max),spiralSpeed:i.spiral_speed||n.uniform(F.SPIRAL_SPEED.min,F.SPIRAL_SPEED.max),animationSpeed:n.uniform(F.ANIMATION_SPEED.min,F.ANIMATION_SPEED.max),opacity:n.uniform(F.OPACITY.min,F.OPACITY.max),seed:o};return new wi(a,r)}const Z={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class Ve{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new U(i),n=t.color instanceof p?t.color:t.color?new p(t.color):new p(9127187);this.params={color:n,roughness:t.roughness||o.uniform(Z.ROUGHNESS.min,Z.ROUGHNESS.max),rockDensity:t.rockDensity||o.uniform(Z.ROCK_DENSITY.min,Z.ROCK_DENSITY.max)*10,craterCount:t.craterCount||o.uniform(Z.CRATER_COUNT.min,Z.CRATER_COUNT.max),opacity:t.opacity||o.uniform(Z.OPACITY.min,Z.OPACITY.max),seed:i},this.material=new ee({vertexShader:Ve.vertexShader,fragmentShader:Ve.fragmentShader,uniforms:{time:{value:0},rockColor:{value:n},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new D(1,1,1).normalize()}},transparent:!0,side:xe,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Ci(a,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),r=new U(n+8e3);return new Ve(a,{color:o?new p(o):new p(9127187),roughness:i.roughness||r.uniform(Z.ROUGHNESS.min,Z.ROUGHNESS.max),rockDensity:i.rock_density||r.uniform(Z.ROCK_DENSITY.min,Z.ROCK_DENSITY.max)*10,craterCount:i.crater_count||r.uniform(Z.CRATER_COUNT.min,Z.CRATER_COUNT.max),opacity:r.uniform(Z.OPACITY.min,Z.OPACITY.max),seed:n})}const K={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9}};class We{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new U(i),n=t.color instanceof p?t.color:t.color?new p(t.color):new p(11591910);this.params={color:n,iceReflectivity:t.iceReflectivity||o.uniform(K.ICE_REFLECTIVITY.min,K.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||o.uniform(K.FROST_DENSITY.min,K.FROST_DENSITY.max),crackIntensity:t.crackIntensity||o.uniform(K.CRACK_INTENSITY.min,K.CRACK_INTENSITY.max),opacity:t.opacity||o.uniform(K.OPACITY.min,K.OPACITY.max),seed:i},this.material=new ee({vertexShader:We.vertexShader,fragmentShader:We.fragmentShader,uniforms:{time:{value:0},iceColor:{value:n},iceReflectivity:{value:this.params.iceReflectivity},frostDensity:{value:this.params.frostDensity},crackIntensity:{value:this.params.crackIntensity},opacity:{value:this.params.opacity},lightDirection:{value:new D(1,1,1).normalize()}},transparent:!0,side:xe,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Ni(a,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),r=new U(n+6e3);return new We(a,{color:o?new p(o):new p(11591910),iceReflectivity:i.ice_reflectivity||r.uniform(K.ICE_REFLECTIVITY.min,K.ICE_REFLECTIVITY.max),frostDensity:i.frost_density||r.uniform(K.FROST_DENSITY.min,K.FROST_DENSITY.max),crackIntensity:i.crack_intensity||r.uniform(K.CRACK_INTENSITY.min,K.CRACK_INTENSITY.max),opacity:r.uniform(K.OPACITY.min,K.OPACITY.max),seed:n})}const G={METALNESS:{min:.5,max:5},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.2,max:.9},CRYSTAL_SCALE:{min:17,max:230}};class Ti{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new U(i),n=t.color instanceof p?t.color:t.color?new p(t.color):new p(8421504);this.params={color:n,metalness:t.metalness||o.uniform(G.METALNESS.min,G.METALNESS.max),roughness:t.roughness||o.uniform(G.ROUGHNESS.min,G.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||o.uniform(G.FRAGMENTATION_INTENSITY.min,G.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||o.uniform(G.OPACITY.min,G.OPACITY.max),seed:i,noiseScale:t.noiseScale||8,noiseIntensity:t.noiseIntensity||.3,crystalScale:t.crystalScale||o.uniform(G.CRYSTAL_SCALE.min,G.CRYSTAL_SCALE.max)},this.material=this.layerSystem.createMetallicSurfaceLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Mi(a,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),r=new U(n+7e3),c=r.uniform(.8,1.2);return new Ti(a,{color:o?new p(o):new p(8421504),metalness:i.metalness||r.uniform(G.METALNESS.min,G.METALNESS.max),roughness:i.roughness||r.uniform(G.ROUGHNESS.min,G.ROUGHNESS.max),fragmentationIntensity:i.fragmentation||r.uniform(G.FRAGMENTATION_INTENSITY.min,G.FRAGMENTATION_INTENSITY.max),opacity:r.uniform(G.OPACITY.min,G.OPACITY.max),seed:n,noiseScale:4*c,noiseIntensity:.3,crystalScale:r.uniform(G.CRYSTAL_SCALE.min,G.CRYSTAL_SCALE.max)})}class Nt{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new U(i),this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||50,speed:t.speed||.5,size:t.size||1,opacity:t.opacity||.3,brightness:t.brightness||1,seed:i},this.particleCount=this.params.particleCount,this.geometry=new be,this.createParticles(e),this.createMaterial(),this.particleSystem=new $e(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),o=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),r=e*1.3;for(let c=0;c<this.particleCount;c++){const d=this.rng.random()*Math.PI*2,l=this.rng.random()*2-1,h=this.rng.random(),f=Math.acos(l),b=r*Math.cbrt(h);t[c*3]=b*Math.sin(f)*Math.cos(d),t[c*3+1]=b*Math.sin(f)*Math.sin(d),t[c*3+2]=b*Math.cos(f),i[c]=this.params.size*(.5+this.rng.random()*.5),o[c]=this.params.speed*(.8+this.rng.random()*.4),n[c]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new z(t,3)),this.geometry.setAttribute("size",new z(i,1)),this.geometry.setAttribute("speed",new z(o,1)),this.geometry.setAttribute("phase",new z(n,1))}createMaterial(){const e=this.params.color instanceof p?this.params.color:new p().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),t=`
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
    `;this.material=new ee({uniforms:{time:{value:0},color:{value:e},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:t,fragmentShader:i,transparent:!0,blending:it,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;const t=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*t}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof p?e.color:new p().setRGB(e.color[0],e.color[1],e.color[2]);this.material.uniforms.color.value=t}e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function vt(a,e,t){const i=e.streaks||e,o={color:i.color||[.95,.95,1],particleCount:i.particleCount||30,speed:i.speed||.3,size:.8,opacity:.2,brightness:.8,seed:t||Math.floor(Math.random()*1e6)};return new Nt(a,o)}class xt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new p(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new St,this.generateFragments()}generateFragments(){const e=new Ne({color:this.params.color instanceof p?this.params.color:new p(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),o=new Me(i,e);this.positionFragment(o,t),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const n=this.params.size*(Math.random()*.5+.75);o.scale.set(n,n,n),o.userData={rotationAxis:new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(o),this.fragments.add(o)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],o=[];o.push(new D(0,0,0));for(let c=0;c<e;c++){const d=c/e*Math.PI*2,l=Math.random()*.5+.5,h=(Math.random()-.5)*.3;o.push(new D(Math.cos(d)*l,Math.sin(d)*l,h))}for(let c=1;c<=e;c++){const l=o[c].clone();l.z+=Math.random()*.4+.2,o.push(l)}for(const c of o)t.push(c.x,c.y,c.z);for(let c=1;c<e;c++)i.push(0,c,c+1);i.push(0,e,1);const n=o.length-e-1;for(let c=0;c<e-1;c++)i.push(n,n+c+2,n+c+1);i.push(n,n+1,n+e);for(let c=0;c<e;c++){const d=c+1,l=(c+1)%e+1,h=d+e,f=l+e;i.push(d,h,l),i.push(l,h,f)}const r=new be;return r.setAttribute("position",new Zt(t,3)),r.setIndex(i),r.computeVertexNormals(),r}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),o=(Math.random()-.5)*this.planetRadius*.5;return new D(Math.cos(t)*i,o,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new D(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new D(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const o=t.userData;t.rotateOnAxis(o.rotationAxis,o.rotationSpeed*e*this.params.animationSpeed);const n=Math.sin(Date.now()*.001+i)*.001;t.position.y+=n*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof p?e.color:new p(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof Ne&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof Ne&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof dt&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof dt&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function Ge(a){const e=a.replace("#",""),t=parseInt(e.substr(0,2),16)/255,i=parseInt(e.substr(2,2),16)/255,o=parseInt(e.substr(4,2),16)/255;return new p(t,i,o)}function et(a){return a.length>=3?new p(a[0],a[1],a[2]):new p(.5,.5,.5)}function je(a){if(a.ocean_color){if(typeof a.ocean_color=="string")return Ge(a.ocean_color);if(Array.isArray(a.ocean_color))return et(a.ocean_color)}if(a.planet_info?.base_color){if(typeof a.planet_info.base_color=="string")return Ge(a.planet_info.base_color);if(Array.isArray(a.planet_info.base_color))return et(a.planet_info.base_color)}if(a.base_color){if(typeof a.base_color=="string")return Ge(a.base_color);if(Array.isArray(a.base_color))return et(a.base_color)}const e=a.planet_info?.type||a.type||"Unknown";return Ai(e)}function Ai(a){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[a]||"#FFFFFF";return Ge(t)}class ke{material;params;oceanLayerMesh;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new p(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new p(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new p(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof p?this.params.landmassColor:new p(this.params.landmassColor),t=this.params.foamColor instanceof p?this.params.foamColor:new p(this.params.foamColor),i=this.params.oceanColor instanceof p?this.params.oceanColor:new p(this.params.oceanColor);return new ee({vertexShader:ke.vertexShader,fragmentShader:ke.fragmentShader,uniforms:{time:{value:0},baseColor:{value:i},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:i}}})}apply(e){this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const i=new Me(t,this.material);i.position.copy(e.position),i.rotation.copy(e.rotation),this.oceanLayerMesh=i}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const i=e[t];if(i!==void 0&&this.material.uniforms[t])if(i instanceof p||Array.isArray(i)){const o=i instanceof p?i:new p(i);this.material.uniforms[t].value=o}else this.material.uniforms[t].value=i})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh)):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function Pi(a){const e=je(a),t=[e.r,e.g,e.b];let i=.3,o=2,n=8,r=.3,c=.2;if(a.seeds){const l=a.seeds.shape_seed,f=(b=>{let _=b;return()=>(_=(_*1664525+1013904223)%4294967296,_/4294967296)})(l);i=.2+f()*.3,o=1.5+f()*1.5,n=6+f()*6,r=.25+f()*.15,c=.15+f()*.1}const d={waveIntensity:i,waveSpeed:o,waveScale:n,landmassThreshold:r,deepOceanThreshold:c,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new p(.9,.9,1),foamIntensity:.4,oceanColor:t};return new ke(d)}class Tt{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new St,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,o=t*Math.cos(i),n=t*Math.sin(i),r=n*.8,c=new be,d=new Float32Array([0,0,0,o,r,n]);c.setAttribute("position",new z(d,3));const l=new ht({color:16776960,linewidth:5,transparent:!1});this.sunLine=new mt(c,l),this.debugGroup.add(this.sunLine);const h=e+Math.PI,f=t*.7,b=f*Math.cos(h),_=0,y=f*Math.sin(h),T=new He(this.planetRadius*.15,16,16),N=new wt({color:16776960,transparent:!1,opacity:1}),S=new Me(T,N);S.position.set(b,_,y),this.debugGroup.add(S),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new be,o=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new z(o,3));const n=new ht({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new mt(i,n),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,o=this.params.initialAngleRotation||0,n=e-t,r=2*Math.PI/i;return(o+n*r)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,o=this.sunLine.geometry,n=o.attributes.position.array;n[3]=i*Math.cos(t),n[4]=0,n[5]=i*Math.sin(t),o.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,o=i.attributes.position.array;o[0]=-t*Math.cos(e),o[1]=0,o[2]=-t*Math.sin(e),o[3]=t*Math.cos(e),o[4]=0,o[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function Ii(a,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:a.debug?.cosmic_origin_time||a.timing?.cosmic_origin_time||a.cosmicOriginTime,rotationPeriod:a.planet_info?.rotation_period||a.rotation_period_seconds||86400,initialAngleRotation:a.debug?.initial_angle_rotation||a.timing?.initial_angle_rotation||a.initialAngleRotation||0,planetRadius:e,orbitalAngle:a.timing?.orbital_angle||0,sunAngle:a.sun_angle||a.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new Tt(e,t)}const Di=!1;class Ee{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return Ee.instance||(Ee.instance=new Ee),Ee.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new Le(t,e),fromPythonData:(e,t)=>yt(t,e.atmosphere||{})}),this.registerEffect("atmosphere_clouds",{create:(e,t)=>new Te(t,e),fromPythonData:(e,t)=>Qe(t,e.surface_elements||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new Nt(t,e),fromPythonData:(e,t)=>vt(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new Oe(t,e),fromPythonData:(e,t)=>bi(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new Ct(t,e),fromPythonData:(e,t)=>xi(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new xt(t,e),fromPythonData:(e,t)=>new xt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("ocean_waves",{create:(e,t)=>new ke(e),fromPythonData:(e,t)=>Pi(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new Tt(t,e),fromPythonData:(e,t)=>Ii(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,o,n=0){const r=this.creators.get(e);if(!r)return console.warn(`Effect type '${e}' not registered`),null;try{const c=r.create(t,i,o);if(!c)return null;const d={id:`effect_${this.nextId++}`,type:e,effect:c,priority:n,enabled:!0};return this.effects.set(d.id,d),d}catch(c){return console.error(`Error creating effect '${e}':`,c),null}}createEffectFromPythonData(e,t,i,o,n=0){const r=this.creators.get(e);if(!r||!r.fromPythonData)return this.createEffect(e,t,i,o,n);try{const c=r.fromPythonData(t,i,o);if(!c)return null;const d={id:`effect_${this.nextId++}`,type:e,effect:c,priority:n,enabled:!0};return this.effects.set(d.id,d),d}catch(c){return console.error(`Error creating effect '${e}' from Python data:`,c),null}}createEffectsFromList(e,t,i){const o=[],n=e.sort((r,c)=>(r.priority||0)-(c.priority||0));for(const r of n){const c=this.createEffect(r.type,r.params,t,i,r.priority);c&&(c.enabled=r.enabled!==!1,o.push(c))}return o}createEffectsFromPythonPlanetData(e,t,i,o,n){const r=[];try{const c=je(e);if(n?this.layerSystem=n:this.layerSystem=new Fe(i,c),e.surface_elements){const d=e.surface_elements;if(d.effects_3d&&Array.isArray(d.effects_3d))for(const l of d.effects_3d){if(l.type==="atmospheric_streaks"){const f=vt(t,l.params,e.seeds?.shape_seed+3e3),b={id:`effect_${this.nextId++}`,type:"atmospheric_streaks",effect:f,priority:l.priority||0,enabled:!0,name:"Atmospheric Streaks"};this.effects.set(b.id,b),r.push(b),f.addToScene(o,i.position);continue}const h=this.createEffect(l.type,l.params,t,i,l.priority||0);h?(h.name=l.type.replace(/_/g," ").replace(/\b\w/g,f=>f.toUpperCase()),r.push(h),h.effect.apply&&h.effect.apply(i),h.effect.addToScene&&h.effect.addToScene(o,i.position)):console.error("❌ FALLO AL CREAR EFECTO:",l.type)}switch(d.type){case"gas_giant":if(this.layerSystem){const l=Si(this.layerSystem,{...d,base_color:c,turbulence:e.turbulence||d.turbulence},e.seeds?.shape_seed||e.seeds?.planet_seed||e.seeds?.planet_seed),h=Ei(this.layerSystem,{...d,base_color:c,storm_intensity:e.storm_intensity||d.storm_intensity},(e.seeds?.shape_seed||e.seeds?.planet_seed)+1e3),f={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:l,priority:0,enabled:!0};this.effects.set(f.id,f),r.push(f);const b={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:h,priority:1,enabled:!0};this.effects.set(b.id,b),r.push(b)}else console.error("❌ PlanetLayerSystem not initialized!");break;case"metallic":case"metallic_3d":if(this.layerSystem){const l=Mi(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),h={id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:l,priority:0,enabled:!0};this.effects.set(h.id,h),r.push(h)}break;case"rocky":if(this.layerSystem){const l=Ci(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),h={id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:l,priority:0,enabled:!0};if(this.effects.set(h.id,h),r.push(h),d.clouds&&d.clouds.length>0){const f=Qe(t,d,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),b={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:f,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(b.id,b),r.push(b),f.addToScene(o,i.position)}}break;case"icy":if(this.layerSystem){const l=Ni(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),h={id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:l,priority:0,enabled:!0};this.effects.set(h.id,h),r.push(h)}break;case"oceanic":if(d.clouds&&d.clouds.length>0){const l=Qe(t,d,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),h={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:l,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(h.id,h),r.push(h),l.addToScene(o,i.position)}break;default:if(i.material instanceof Ne){const l=je(e);i.material.color.copy(l)}break}}else if(i.material instanceof Ne){const d=je(e);i.material.color.copy(d)}if(e.atmosphere){if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const d=yt(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(d){const l={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:d,priority:20,enabled:!0};this.effects.set(l.id,l),r.push(l),d.addToScene(o,i.position)}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const d=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),l={...e.atmosphere};d==="oceanic"&&(l.opacity=Math.min(l.opacity||.3,.15),l.width=Math.min(l.width||15,8));const h=this.createEffectFromPythonData("atmosphere",l,t,i,5);h&&(r.push(h),h.effect.addToScene(o,i.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){const d=this.createEffectFromPythonData("ring_system",e,t,i,1);d?(r.push(d),d.effect.addToScene(o,i.position)):console.warn("⚠️ Failed to create ring effect")}if(e.surface_elements?.has_fragmentation_zones){const d=this.createEffectFromPythonData("fragmentation",e,t,i,5);d&&(r.push(d),d.effect.addToScene(o,i.position))}return this.layerSystem&&this.layerSystem.addToScene(o),r.forEach((d,l)=>{}),r.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),r}catch(c){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",c),c}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);if(i){i.enabled=t!==void 0?t:!i.enabled;const o=i.effect;if(o&&o.getObject3D){const n=o.getObject3D();n&&(n.visible=i.enabled)}if(this.layerSystem){const n=this.layerSystem.getLayerMeshes(),c={cloud_bands_layer:"cloudBands",cloud_gyros_layer:"cloudGyros",metallic_surface_layer:"metallicSurface",rocky_terrain_layer:"rockyTerrain",icy_terrain_layer:"icyTerrain"}[i.type];c&&n[c]&&(n[c].visible=i.enabled)}}else console.warn(`⚠️ Effect not found: ${e}`)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(o){console.error(`Error updating effect ${i.type}:`,o)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear(),this.nextId=1}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const ve=Ee.getInstance(),_e={atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function Ri(a){const e=[];switch(a.toLowerCase()){case"metallic":e.push({type:"atmosphere",params:{..._e.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:_e.cloud_bands,priority:0},{type:"cloud_gyros",params:_e.cloud_gyros,priority:1},{type:"atmosphere",params:{..._e.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:_e.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{..._e.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const re={log:(a,e)=>{},warn:(a,e)=>{console.warn(`[Effects] ${a}`,e||"")},error:(a,e)=>{console.error(`[Effects] ${a}`,e||"")},debug:(a,e)=>{}};new Date().toISOString();const ji=({planetData:a,showInConsole:e=!0,showInPage:t=!1})=>{const[i,o]=g.useState([]),[n,r]=g.useState({});g.useEffect(()=>{if(!a)return;const l=c(a);r(l),o(d(a)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=a,window.__DEBUG_PLANET_ANALYSIS=l)},[a,e]);function c(l){const h={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(l.planet_info&&l.surface_elements?h.hasValidStructure=!0:(l.planet_info||h.missingFields.push("planet_info"),l.surface_elements||h.missingFields.push("surface_elements")),l.surface_elements?.type==="oceanic"&&(h.oceanicData={hasAbstractLands:!!l.surface_elements.abstract_lands?.length,numGreenPatches:l.surface_elements.green_patches?.length||0,numClouds:l.surface_elements.clouds?.length||0,hasDepths:l.surface_elements.depths?.enabled||!1,baseColorIsBlue:l.planet_info?.base_color==="#0000FF",greenPatchColor:l.surface_elements.green_patches?.[0]?.color,issues:[]},h.oceanicData.numGreenPatches>15&&h.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),h.oceanicData.baseColorIsBlue||h.oceanicData.issues.push(`Color base no es azul puro: ${l.planet_info?.base_color}`),h.renderingIssues=h.oceanicData.issues),l.planet_info?.base_color&&l.planet_info?.type){const b={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[l.planet_info.type];b&&l.planet_info.base_color!==b?h.colorConsistency=`Inconsistente: esperado ${b}, recibido ${l.planet_info.base_color}`:h.colorConsistency="Correcto"}return h}function d(l){const h=[];if(!l.surface_elements?.type)return["No surface type defined"];const f=l.surface_elements.type.toLowerCase();switch(f){case"oceanic":h.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":h.push("RockyTerrainEffect");break;case"icy":h.push("IcyTerrainEffect");break;case"gas giant":h.push("GasGiantBandsEffect");break;default:h.push(`Generic effect for type: ${f}`)}return l.atmosphere?.density>0&&h.push("AtmosphericEffect"),l.rings&&h.push("RingSystemEffect"),h}return t?s.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[s.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",a.planet_info?.name]}),s.jsxs("div",{style:{marginBottom:"10px"},children:[s.jsx("strong",{children:"Type:"})," ",a.planet_info?.type,s.jsx("br",{}),s.jsx("strong",{children:"Base Color:"})," ",a.planet_info?.base_color,s.jsx("br",{}),s.jsx("strong",{children:"Radius:"})," ",a.planet_info?.radius]}),a.surface_elements?.type==="oceanic"&&s.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[s.jsx("strong",{children:"🌊 Oceanic Data:"}),s.jsx("br",{}),s.jsxs("span",{style:{color:n.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",n.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),s.jsx("br",{}),"Green Patches: ",n.oceanicData?.numGreenPatches,s.jsx("br",{}),"Clouds: ",n.oceanicData?.numClouds,s.jsx("br",{}),"Has Depths: ",n.oceanicData?.hasDepths?"Yes":"No",s.jsx("br",{}),n.oceanicData?.issues?.length>0&&s.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",s.jsx("br",{}),n.oceanicData.issues.map((l,h)=>s.jsxs("div",{children:["- ",l]},h))]})]}),s.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[s.jsx("strong",{children:"🎨 Effects Applied:"}),s.jsx("br",{}),i.map((l,h)=>s.jsxs("div",{style:{color:l.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",l]},h))]}),s.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function Oi(a){g.useEffect(()=>{if(a&&a.surface_elements?.type==="oceanic"){a.surface_elements.green_patches?.length>0;const e=a.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[a])}const Be=2.5,bt=()=>{const a=45*Math.PI/180;return Be/(Math.tan(a/2)*.5)},Li=({planetName:a,containerClassName:e="",width:t=800,height:i=600,autoRotate:o=!0,enableControls:n=!0,showDebugInfo:r=!1,planetData:c,cosmicOriginTime:d,initialAngleRotation:l,onDataLoaded:h,onEffectsCreated:f,onError:b})=>{const _=g.useRef(null),y=g.useRef(null),T=g.useRef(null),N=g.useRef(null),S=g.useRef(null),w=g.useRef(null),B=g.useRef(new Kt),R=g.useRef(null),le=g.useRef(0),j=g.useRef(null),[me,ce]=g.useState(!0),[ue,ae]=g.useState(null),[v,X]=g.useState(null),[H,se]=g.useState([]),[q,ie]=g.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),$=g.useRef([]),J=g.useRef(0),te=g.useRef(null),Y=g.useRef(null),Ae=Math.floor(Date.now()/1e3),[fe,Pe]=g.useState(0),k=d||v?.timing?.cosmic_origin_time||Date.now()/1e3-3600,de=Ae-k+fe;le.current=de;const he=g.useCallback(()=>{if(!_.current||!T.current||!N.current)return;const m=_.current,x=m.clientWidth||400,u=m.clientHeight||400;T.current.setSize(x,u),N.current.aspect=x/u,N.current.updateProjectionMatrix()},[]),pe=async m=>{if(!(!S.current||!y.current||!Y.current)){re.log("Applying modular effects from API data",{planet:m.planet_info.name,type:m.planet_info.type});try{Ke();const x=je(m);Y.current.updateBaseColor(x);const u=ve.createEffectsFromPythonPlanetData(m,Be,S.current,y.current,Y.current);console.log(`Planet: ${m.planet_info?.name}, Effects:`,u.map(E=>E.type)),se(u),$.current=u,f&&f(u),re.log(`Successfully applied ${u.length} modular effects`),Xe()}catch(x){re.error("Error applying modular effects",x),ze()}}},Ie=g.useCallback(()=>{if(!_.current)return!1;try{for(;_.current.firstChild;)_.current.removeChild(_.current.firstChild);y.current=null,N.current=null,T.current=null,S.current=null,W.current=null;const m=_.current,x=m.clientWidth||t||400,u=m.clientHeight||i||400,E=new Xt;E.background=new p(1297),y.current=E;const O=new qt(45,x/u,.1,1e4),A=bt();O.position.set(0,0,A),O.lookAt(0,0,0),N.current=O;const M=new Jt({antialias:!0,alpha:!0,powerPreference:"high-performance"});return M.setSize(x,u),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.shadowMap.enabled=!0,M.shadowMap.type=Qt,M.toneMapping=ei,M.toneMappingExposure=1.2,M.outputColorSpace=ti,_.current.appendChild(M.domElement),T.current=M,At(E,null),Pt(E),n&&It(O,M.domElement),!0}catch(m){return console.error("Error initializing Three.js:",m),!1}},[v,c,d]),Ze=m=>{if(!m)return 0;const x=m.sun_angle||m.lighting?.sun_angle;if(x!==void 0)return x;const u=m.timing?.current_orbital_angle||m.timing?.orbital_angle;return u??0},oe=g.useRef(null),De=g.useRef(null),ge=g.useRef(null),W=g.useRef(null),Mt=m=>{m.castShadow=!0,m.shadow.mapSize.width=2048,m.shadow.mapSize.height=2048,m.shadow.camera.near=.5,m.shadow.camera.far=50,m.shadow.camera.left=-10,m.shadow.camera.right=10,m.shadow.camera.top=10,m.shadow.camera.bottom=-10},at=m=>{if(!oe.current||!y.current)return;const x=Ze(m),u=10,E=x+Math.PI,O=Math.sin(x)*5,A=u*Math.cos(E),M=O,ye=u*Math.sin(E);oe.current.position.set(A,M,ye),oe.current.target.position.set(0,0,0),y.current.children.includes(oe.current.target)||y.current.add(oe.current.target),De.current&&De.current.position.set(-A*.5,0,-ye*.5),Y.current&&oe.current&&Y.current.updateFromThreeLight(oe.current)},At=(m,x)=>{{const u=new ut(16777215,2);u.position.set(-10,5,10),u.target.position.set(0,0,0),u.castShadow=!0,Mt(u),m.add(u),m.add(u.target),oe.current=u;const E=new ut(16777215,.05);E.position.set(8,-3,-5),m.add(E),De.current=E;const O=new ii(2236996,.1);m.add(O),setTimeout(()=>{Y.current&&u&&Y.current.updateFromThreeLight(u)},50);return}},Pt=m=>{const x=new He(Be,128,64),u=new wt({color:8421504}),E=new Me(x,u);E.castShadow=!0,E.receiveShadow=!0,E.position.set(0,0,0),m.add(E),S.current=E;const O=new p(8421504);Y.current=new Fe(E,O),Y.current.addToScene(m)},It=(m,x)=>{const u=new ni(m,x);u.enableDamping=!0,u.dampingFactor=.05;const E=bt();u.minDistance=E*.5,u.maxDistance=E*2,u.autoRotate=o,u.autoRotateSpeed=.5,u.enablePan=!0,u.enableZoom=!0,u.target.set(0,0,0),w.current=u},Dt=g.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{ce(!0),ae(null),re.log("Loading planet data from API",{planetName:a});const x=await fetch("/api/planet/rendering-data");if(!x.ok)throw new Error(`HTTP error! status: ${x.status}`);const u=await x.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const E=u.planet_data,O=u.timing,A=u.rendering_data,M={planet_info:A?.planet_info||{name:E.name,type:E.planet_type,base_color:"#808080",radius:E.diameter/15e3,orbital_radius:E.orbital_radius},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:O.cosmic_origin_time,current_time_seconds:O.current_time_seconds,elapsed_time:O.elapsed_time,initial_orbital_angle:E.initial_orbital_angle,current_orbital_angle:E.current_orbital_angle,max_orbital_radius:O.max_orbital_radius,system_max_orbital_radius:E.system_max_orbital_radius},original_planet_data:E,seeds:A?.seeds};return X(M),j.current=M,re.log("API data loaded successfully",{planet:M.planet_info.name,type:M.planet_info.type,hasEffects:!!M.surface_elements,fullRenderingData:A}),h&&h(M),M}catch(m){const x=m instanceof Error?m.message:"Unknown error";return ae(x),b&&b(x),null}finally{ce(!1),window.isLoadingPlanetData=!1}}},[a,h,b]);g.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{ce(!0),ae(null),re.log("Loading planet data from API",{planetName:a});const x=await fetch("/api/planet/rendering-data");if(!x.ok)throw new Error(`HTTP error! status: ${x.status}`);const u=await x.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const E=u.planet_data,O=u.timing,A=u.rendering_data,M={planet_info:A?.planet_info||{name:E.name,type:E.planet_type,base_color:"#808080",radius:E.diameter/15e3,orbital_radius:E.orbital_radius},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:O.cosmic_origin_time,current_time_seconds:O.current_time_seconds,elapsed_time:O.elapsed_time,initial_orbital_angle:E.initial_orbital_angle,current_orbital_angle:E.current_orbital_angle,max_orbital_radius:O.max_orbital_radius,system_max_orbital_radius:E.system_max_orbital_radius},original_planet_data:E,seeds:A?.seeds};X(M),j.current=M,re.log("API data loaded successfully",{planet:M.planet_info.name,type:M.planet_info.type,hasEffects:!!M.surface_elements,fullRenderingData:A}),at(M),W.current&&y.current&&(y.current.remove(W.current),W.current.geometry.dispose(),W.current.material.dispose(),W.current=null),await pe(M),h&&h(M)}catch(m){const x=m instanceof Error?m.message:"Unknown error";ae(x),b&&b(x),ze()}finally{ce(!1),window.isLoadingPlanetData=!1}}},[a,c,d,l]);const st=g.useCallback(()=>{if(!v||!S.current)return;const m=c?.orbital_period_seconds||365.25*24*3600,x=2*Math.PI/m,u=v.timing?.initial_orbital_angle||0,E=Date.now()/1e3,O=0,A=d||v.timing?.cosmic_origin_time||Date.now()/1e3-3600,M=E-A+O,ye=(u+M*x)%(2*Math.PI),qe=v.timing?.max_orbital_radius||100,Ue=20+v.planet_info?.orbital_radius/qe*80,jt=Ue,Ot=Ue*Math.cos(ye),Lt=jt*Math.sin(ye);S.current.position.x=Ot,S.current.position.z=Lt,S.current.position.y=0},[v,c,d]),Rt=g.useCallback(async m=>{const x=m||v;if(x&&y.current)try{at(x),W.current&&y.current&&(y.current.remove(W.current),W.current.geometry.dispose(),W.current.material.dispose(),W.current=null),await pe(x)}catch(u){re.error("Error in applyProceduralShadersFromAPI:",u),ze()}},[v]),ze=()=>{if(!(!y.current||!S.current)){re.warn("Applying fallback effects for planet type:",c?.planet_type);try{Ke(),S.current.material instanceof Ne&&S.current.material.color.setHex(6710886);try{const m=Ri("generic"),x=ve.createEffectsFromList(m,Be,S.current);x.forEach(u=>{u.effect.addToScene&&y.current&&S.current&&u.effect.addToScene(y.current,S.current.position)}),$.current=x,se(x)}catch(m){console.warn("Could not create fallback effects, using basic material only:",m)}Xe()}catch(m){re.error("Error applying fallback effects",m)}}},Ke=()=>{ve.clearAllEffects(),$.current.forEach(m=>{try{m.effect.dispose&&m.effect.dispose()}catch{}}),$.current=[],se([])},nt=g.useCallback(()=>{R.current=requestAnimationFrame(nt);const m=performance.now(),x=B.current.getDelta();w.current&&w.current.update();try{ve.updateAllEffects(x,S.current?.rotation.y)}catch{}if(S.current&&j.current){j.current.planet_info?.name;const u=j.current.original_planet_data,E=u?.orbital_period_seconds||365.25*24*3600,O=j.current.timing?.initial_orbital_angle||0;d||j.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const A=u?.axial_tilt||0,M=2*Math.PI/E;(O+le.current*M)%(2*Math.PI);const ye=j.current.timing?.max_orbital_radius||j.current.timing?.system_max_orbital_radius,qe=u?.orbital_radius;if(!ye||!qe)return;u?.eccentricity_factor,S.current.position.set(0,0,0);const rt=u?.rotation_period_seconds||86400,Ue=2*Math.PI/rt;S.current.rotation.y=le.current*Ue%(2*Math.PI),S.current.rotation.z=A*(Math.PI/180)}if($.current.forEach(u=>{u.effect.updateUniforms&&u.effect.updateUniforms(x)}),T.current&&y.current&&N.current){const u=performance.now();T.current.render(y.current,N.current);const E=performance.now()-u;if(m-J.current>5e3){const O=1e3/(m-J.current);Xe(),ie(A=>({...A,frameRate:Math.round(O),renderTime:Math.round(E*100)/100})),J.current=m}}},[]),Xe=g.useCallback(()=>{const m=ve.getStats();ie(x=>({...x,activeEffects:m.activeEffects,enabledEffects:m.enabledEffects}))},[]);return g.useEffect(()=>{let m=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!m)return;const u=await Dt();if(!m)return;if(!Ie()){m&&ae("Failed to initialize 3D renderer");return}if(!m||(nt(),_.current&&"ResizeObserver"in window&&(te.current=new ResizeObserver(he),te.current.observe(_.current)),window.addEventListener("resize",he),!m))return;u?await Rt(u):ze()}catch(u){m&&ae(u instanceof Error?u.message:"Unknown initialization error")}})(),()=>{if(m=!1,j.current=null,R.current&&cancelAnimationFrame(R.current),te.current&&te.current.disconnect(),window.removeEventListener("resize",he),Ke(),Y.current&&(Y.current.dispose(),Y.current=null),w.current&&w.current.dispose(),ge.current&&y.current&&(y.current.remove(ge.current),ge.current.geometry.dispose(),ge.current.material.dispose(),ge.current=null),W.current&&y.current&&(y.current.remove(W.current),W.current.geometry.dispose(),W.current.material.dispose(),W.current=null),T.current&&_.current)try{_.current.contains(T.current.domElement)&&_.current.removeChild(T.current.domElement),T.current.dispose()}catch{}}},[]),g.useEffect(()=>{const m=setInterval(()=>{const x=ve.getStats();ie(u=>({...u,activeEffects:x.activeEffects,enabledEffects:x.enabledEffects}))},1e4);return()=>clearInterval(m)},[]),g.useEffect(()=>{v&&y.current&&S.current&&st()},[v,st]),Oi(v),s.jsxs("div",{className:`relative ${e}`,children:[r&&v&&s.jsx(ji,{planetData:v,showInPage:!0,showInConsole:!0}),s.jsx("div",{ref:_,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),me&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:s.jsxs("div",{className:"text-white text-center",children:[s.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),s.jsx("div",{children:"Loading planet..."})]})}),ue&&s.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[s.jsx("strong",{children:"Error:"})," ",ue]}),v&&!me&&s.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[s.jsx("h3",{className:"text-lg font-bold",children:v.planet_info.name}),s.jsx("p",{className:"text-sm opacity-80",children:v.planet_info.type}),s.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[H.length," effects active"]}),v.surface_elements?.description&&s.jsx("p",{className:"text-xs mt-2 opacity-60",children:v.surface_elements.description.appearance})]}),r&&s.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[s.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),s.jsxs("div",{children:["Frame Rate: ",q.frameRate," FPS"]}),s.jsxs("div",{children:["Render Time: ",q.renderTime,"ms"]}),s.jsxs("div",{children:["Active Effects: ",q.activeEffects]}),s.jsxs("div",{children:["Enabled Effects: ",q.enabledEffects]}),s.jsxs("div",{className:"mt-2",children:[s.jsx("div",{className:"font-semibold",children:"Effects:"}),H.map(m=>s.jsxs("div",{className:"ml-2",children:[m.type," (",m.enabled?"ON":"OFF",")"]},m.id))]})]})]})};class Fi extends _t.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?s.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:s.jsxs("div",{className:"text-center p-4",children:[s.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),s.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const ki=a=>s.jsx(Fi,{children:s.jsx(Li,{...a})}),zi=({planetUrl:a,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:o,onEffectsCreated:n,effects:r,onToggleEffect:c})=>{const d=g.useRef(null),l=g.useRef(null),[h,f]=g.useState("Aligning Stargate..."),[b,_]=g.useState(!1),[y,T]=g.useState(!1),[N,S]=g.useState(!1),[w,B]=g.useState(!0),[R,le]=g.useState(!0),[j,me]=g.useState(null),[ce,ue]=g.useState(null);g.useEffect(()=>{r&&c&&r.forEach(v=>{ve.toggleEffect(v.id,v.enabled)})},[r]),g.useEffect(()=>{const v=document.createElement("style");return v.textContent=`
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
    `,document.head.appendChild(v),()=>{document.head.removeChild(v)}},[]),g.useEffect(()=>{const v=d.current;if(!v)return;const X=v.getContext("2d");if(!X)return;let H=[];const se=800;let q,ie;const $=800;let J,te=.5;function Y(){const k=v?.parentElement;if(!k||!v)return;const de=k.clientWidth,he=k.clientHeight;v.width=Math.min(de,$),v.height=Math.min(he,$),q=v.width/2,ie=v.height/2}function Ae(){Y(),H=[];for(let k=0;k<se;k++)H.push({x:Math.random()*(v?.width||800),y:Math.random()*(v?.height||800),z:Math.random()*(v?.width||800),o:Math.random()});fe()}function fe(){!v||!X||(X.clearRect(0,0,v.width,v.height),H.forEach(k=>{k.z-=te,k.z<=0&&(k.z=v.width,k.x=Math.random()*v.width,k.y=Math.random()*v.height,k.o=Math.random());const de=v.width/k.z,he=(k.x-q)*de+q,pe=(k.y-ie)*de+ie,Ie=2*de;X.beginPath(),X.fillStyle=`rgba(255, 255, 255, ${k.o})`,X.arc(he,pe,Ie,0,2*Math.PI),X.fill()}),te<60&&(te+=1),J=requestAnimationFrame(fe))}Ae();const Pe=()=>Y();return window.addEventListener("resize",Pe),()=>{window.removeEventListener("resize",Pe),J&&cancelAnimationFrame(J)}},[]),g.useEffect(()=>{if(e&&!w){const v=new Image;v.onload=()=>{l.current&&(l.current.src=e,T(!0),S(!0))},v.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{T(!0),S(!0)},1500)},v.src=e}else(w||!e)&&setTimeout(()=>{T(!0),S(!0)},1500)},[e,w]),g.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){f("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),_(!0);const X=($,J)=>Array.from({length:J},()=>$[Math.floor(Math.random()*$.length)]).join(""),H=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let se=0,q=0;const ie=()=>{if(se>=H.length){const J="Stargate system aligned";let te=0;f("");const Y=()=>{te<J.length?(f(J.substring(0,te+1)),te++,setTimeout(Y,30)):_(!1)};Y();return}const $=H[se];f(X($.chars,32)),q++,q>=$.iterations&&(se++,q=0),setTimeout(ie,$.duration)};ie()},[]);const ae=()=>{B(!w),w||(T(!0),S(!0))};return s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),R&&s.jsx("div",{className:"flex items-center gap-2",children:s.jsx("button",{onClick:ae,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${w?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:w?"2D View":"3D View"})})]}),s.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[s.jsx("canvas",{ref:d,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${N?"opacity-0":"opacity-100"}`,style:{filter:N?"blur(50px)":"none"}}),w&&y&&t&&s.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${y?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:s.jsx(ki,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,onEffectsCreated:n,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:o,onDataLoaded:v=>{me(v)},onError:v=>{ue(v),console.error("❌ Planet rendering error:",v)}})}),!w&&s.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${y?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:y&&e?s.jsx("div",{className:"w-full h-full flex items-center justify-center",children:s.jsx(Yt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:s.jsx("img",{ref:l,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):s.jsx("img",{ref:l,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),R&&s.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:w?"🌍 3D":"🖼️ 2D"})]}),s.jsxs("div",{className:"text-center mt-auto",children:[s.jsxs("a",{href:a,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${b?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[s.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[s.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),h]}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),s.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",w&&j&&s.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",j.planet_info?.type," Planet",j.atmosphere&&s.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),j.rings?.has_rings&&s.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),w&&ce&&s.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Ui=({currentPlanet:a,system:e,galaxy:t,systemPlanets:i})=>{const[o,n]=g.useState(null),[r,c]=g.useState(null),[d,l]=g.useState(!1),[h,f]=g.useState(!1),[b,_]=g.useState(!0);g.useEffect(()=>{if(i&&i.length>0){const N=i.findIndex(S=>S.name.toLowerCase()===a.toLowerCase());N!==-1?(N>0?(n(i[N-1].name.toLowerCase()),l(!0)):e.index>0?(n("__prev_system__"),l(!0)):l(!1),N<i.length-1?(c(i[N+1].name.toLowerCase()),f(!0)):(c("__next_system__"),f(!0))):(l(!1),f(!1))}else l(!1),f(!1);_(!1)},[a,e.index,i]);const y=async()=>{const N=t.coordinates.join(",");if(o==="__prev_system__")try{const S=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(S.ok){const w=await S.json();if(w.system&&w.system.planets&&w.system.planets.length>0){const R=w.system.planets[w.system.planets.length-1].name.toLowerCase();Re(N,e.index-1,R,w.system.planets),tt(N,e.index-1),window.location.href=`/planet/${R}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else o&&(Re(N,e.index,o,i),window.location.href=`/planet/${o}`)},T=async()=>{const N=t.coordinates.join(",");if(r==="__next_system__")try{const S=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(S.ok){const w=await S.json();if(w.system&&w.system.planets&&w.system.planets.length>0){const R=w.system.planets[0].name.toLowerCase();Re(N,e.index+1,R,w.system.planets),tt(N,e.index+1),window.location.href=`/planet/${R}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else r&&(Re(N,e.index,r,i),window.location.href=`/planet/${r}`)};return b?null:s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:y,disabled:!d,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${d?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),s.jsx("button",{onClick:T,disabled:!h,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${h?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Yi=({planet:a,system:e,galaxy:t,planet_url:i,version:o,image_url:n,cosmic_origin_time:r,initial_angle_rotation:c})=>{const[d]=g.useState(t.coordinates.join(",")),[l,h]=g.useState([]),f=N=>{h(N)},b=(N,S)=>{h(w=>w.map(B=>B.id===N?{...B,enabled:S}:B))};g.useEffect(()=>{document.body.setAttribute("data-coordinates",d),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",a.name.toLowerCase()),Re(d,e.index,a.name,e.planets||[]),tt(d,e.index)},[d,e.index,a.name]);const _=N=>N.replace(/_/g," "),y=N=>N.replace(/_/g," "),T=N=>N.replace(/_/g," ");return s.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[s.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),s.jsxs("div",{className:"relative z-10",children:[s.jsx(zt,{}),s.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:s.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",_(a.name),"'"]})}),s.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",y(e.name),"' - Galaxy '",T(t.name),"'"]}),s.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),s.jsx(Ui,{currentPlanet:a.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),s.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:s.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[s.jsx("div",{className:"order-1 lg:order-1",children:s.jsx(zi,{planetUrl:i,imageUrl:n,planet:a,cosmicOriginTime:r,initialAngleRotation:c,onEffectsCreated:f,effects:l,onToggleEffect:b})}),s.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),s.jsx("div",{className:"order-2 lg:order-2",children:s.jsx(ai,{planet:a,system:e,galaxy:t,cosmicOriginTime:r,initialAngleRotation:c,effects:l,onToggleEffect:b})})]})}),s.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:s.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:s.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",y(e.name),"'"]})})})]}),s.jsx(Ft,{version:o})]}),s.jsx(Gt,{currentLocation:{type:"planet",name:a.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:a.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const a=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!a||!e||!t||!i){console.error("Missing required data elements");return}const o=JSON.parse(a.textContent||"{}"),n=JSON.parse(e.textContent||"{}"),r=JSON.parse(t.textContent||"{}"),c=JSON.parse(i.textContent||"{}"),d={planet:o,system:n,galaxy:r,planet_url:c.planet_url,version:c.version,image_url:c.image_url,cosmic_origin_time:c.cosmic_origin_time,initial_angle_rotation:c.initial_angle_rotation},l=document.getElementById("atlas-react-root");l&&kt.createRoot(l).render(_t.createElement(Yi,d))}catch(a){console.error("Error initializing Planet React app:",a)}});
