import{r as p,j as a,R as _t,V as Ft,c as kt}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as zt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Ut,U as Yt,m as Ne,c as Je,a as Bt}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as Gt,V as D,n as _e,T as ve,Q as nt,l as rt,o as ae,R as Vt,p as Wt,q as $t,e as Se,r as Q,s as ee,N as ze,t as Qe,c as Ve,C as f,u as Ht,v as et,d as ge,F as pe,w as Zt,G as bt,x as be,y as Kt,z as lt,L as ct,g as dt,M as St,H as Xt,S as qt,P as Jt,W as Qt,I as ei,J as ti,K as ii,D as ht,A as oi}from"./atlas_C9iv-Mftr0ljdPynyVWic.js";const si=({planet:o,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:s})=>{const[n,l]=p.useState(!1),r=g=>g.replace(/_/g," "),c=g=>{const _=g/86400;return _<30?`${_.toFixed(2)} days`:_<365?`${(_/30).toFixed(2)} months`:`${(_/365).toFixed(2)} years`},d=g=>{const _=g*9/5+32;return`${g.toFixed(1)}°C (${_.toFixed(1)}°F)`},u=g=>`${g.toExponential(2)} kg`,v=g=>g>=1e3?`${(g/1e3).toFixed(2)} km`:`${g.toFixed(2)} m`;return a.jsxs("div",{className:"h-full flex flex-col relative",children:[a.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),a.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[a.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),a.jsx(Ut,{type:"planet",name:o.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:o.name,className:"text-xs"})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),a.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:o.planet_type})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),a.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:o.atmosphere})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),a.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:o.life_forms})]})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[a.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),a.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),a.jsx("div",{className:"text-xs font-bold text-orange-300",children:u(o.mass)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),a.jsx("div",{className:"text-xs font-bold text-orange-300",children:v(o.diameter)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),a.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[o.density.toFixed(2)," kg/m³"]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),a.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[o.gravity.toFixed(2)," m/s²"]})]})]})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[a.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),a.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),a.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.orbital_radius.toFixed(2)," AU"]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),a.jsx("div",{className:"text-xs font-bold text-cyan-300",children:c(o.orbital_period_seconds)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),a.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.orbital_speed.toFixed(2)," m/s"]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),a.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.axial_tilt.toFixed(2),"°"]})]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),a.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),a.jsx("div",{className:"text-xs font-bold text-red-300",children:d(o.surface_temperature)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),a.jsx("div",{className:"text-xs font-bold text-red-300",children:c(o.rotation_period_seconds)})]})]})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",o.elements.length,")"]}),o.elements.length>4&&a.jsx("button",{onClick:()=>l(!n),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:n?"▲ Less":"▼ All"})]}),a.jsx("div",{className:"flex flex-wrap gap-1",children:(n?o.elements:o.elements.slice(0,4)).map((g,_)=>a.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:g},_))})]})]}),a.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[a.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Status:"}),a.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Planet:"}),a.jsx("div",{className:"text-white truncate font-medium",children:r(o.name)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"System:"}),a.jsx("div",{className:"text-white truncate font-medium",children:r(e.name)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"System ID:"}),a.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),a.jsx("div",{className:"text-white truncate font-medium",children:r(t.name)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),a.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},mt={type:"change"},tt={type:"start"},wt={type:"end"},ke=new Vt,ut=new Wt,ai=Math.cos(70*$t.DEG2RAD),k=new D,J=2*Math.PI,I={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xe=1e-6;class ni extends Gt{constructor(e,t=null){super(e,t),this.state=I.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_e.ROTATE,MIDDLE:_e.DOLLY,RIGHT:_e.PAN},this.touches={ONE:ve.ROTATE,TWO:ve.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new nt,this._lastTargetPosition=new D,this._quat=new nt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rt,this._sphericalDelta=new rt,this._scale=1,this._panOffset=new D,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new D,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=li.bind(this),this._onPointerDown=ri.bind(this),this._onPointerUp=ci.bind(this),this._onContextMenu=gi.bind(this),this._onMouseWheel=mi.bind(this),this._onKeyDown=ui.bind(this),this._onTouchStart=fi.bind(this),this._onTouchMove=pi.bind(this),this._onMouseDown=di.bind(this),this._onMouseMove=hi.bind(this),this._interceptControlDown=yi.bind(this),this._interceptControlUp=vi.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mt),this.update(),this.state=I.NONE}update(e=null){const t=this.object.position;k.copy(t).sub(this.target),k.applyQuaternion(this._quat),this._spherical.setFromVector3(k),this.autoRotate&&this.state===I.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=J:i>Math.PI&&(i-=J),s<-Math.PI?s+=J:s>Math.PI&&(s-=J),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=l!=this._spherical.radius}if(k.setFromSpherical(this._spherical),k.applyQuaternion(this._quatInverse),t.copy(this.target).add(k),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const r=k.length();l=this._clampDistance(r*this._scale);const c=r-l;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),n=!!c}else if(this.object.isOrthographicCamera){const r=new D(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=c!==this.object.zoom;const d=new D(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(r),this.object.updateMatrixWorld(),l=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(ke.origin.copy(this.object.position),ke.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ke.direction))<ai?this.object.lookAt(this.target):(ut.setFromNormalAndCoplanarPoint(this.object.up,this.target),ke.intersectPlane(ut,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>Xe||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xe||this._lastTargetPosition.distanceToSquared(this.target)>Xe?(this.dispatchEvent(mt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?J/60*this.autoRotateSpeed*e:J/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){k.setFromMatrixColumn(t,0),k.multiplyScalar(-e),this._panOffset.add(k)}_panUp(e,t){this.screenSpacePanning===!0?k.setFromMatrixColumn(t,1):(k.setFromMatrixColumn(t,0),k.crossVectors(this.object.up,k)),k.multiplyScalar(e),this._panOffset.add(k)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;k.copy(s).sub(this.target);let n=k.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/i.clientHeight,this.object.matrix),this._panUp(2*t*n/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,n=t-i.top,l=i.width,r=i.height;this._mouse.x=s/l*2-1,this._mouse.y=-(n/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(J*this._rotateDelta.x/t.clientHeight),this._rotateUp(J*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(J*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-J*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(J*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-J*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,n=Math.sqrt(i*i+s*s);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._rotateEnd.set(s,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(J*this._rotateDelta.x/t.clientHeight),this._rotateUp(J*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,n=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(l,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ri(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function li(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function ci(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wt),this.state=I.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function di(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=I.DOLLY;break;case _e.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=I.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=I.ROTATE}break;case _e.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=I.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=I.PAN}break;default:this.state=I.NONE}this.state!==I.NONE&&this.dispatchEvent(tt)}function hi(o){switch(this.state){case I.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case I.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case I.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function mi(o){this.enabled===!1||this.enableZoom===!1||this.state!==I.NONE||(o.preventDefault(),this.dispatchEvent(tt),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(wt))}function ui(o){this.enabled!==!1&&this._handleKeyDown(o)}function fi(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=I.TOUCH_ROTATE;break;case ve.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=I.TOUCH_PAN;break;default:this.state=I.NONE}break;case 2:switch(this.touches.TWO){case ve.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=I.TOUCH_DOLLY_PAN;break;case ve.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=I.TOUCH_DOLLY_ROTATE;break;default:this.state=I.NONE}break;default:this.state=I.NONE}this.state!==I.NONE&&this.dispatchEvent(tt)}function pi(o){switch(this._trackPointer(o),this.state){case I.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case I.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case I.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case I.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=I.NONE}}function gi(o){this.enabled!==!1&&o.preventDefault()}function yi(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vi(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ft{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class Et{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:s,ring_outer_radius:n,tilt_factor:l,planet_radius:r,shape_seed:c}=e;if(!t||!i){console.warn("No ring data provided");return}const d=[...t.particles,...i.particles],u=d.length,v=new ft(c||12345),g=new Se,_=new Float32Array(u*3),w=new Float32Array(u*3),M=new Float32Array(u),R=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],S=v.choice(R);for(let C=0;C<u;C++){const X=d[C],q=this.planetRadius/(r||200),ce=(c||12345)+C,O=new ft(ce),de=X.distance*q,b=X.angle,H=de*Math.sin(b),Y=Math.asin((l||.2)*.5),A=H*Math.sin(Y),oe=H*Math.cos(Y),B=((n||400)-(s||200))*q*.4,Z=O.uniform(-B*.8,B*.8),K=O.uniform(-B*.3,B*.3),te=O.uniform(-.08,.08),ie=de+K,he=b+te;_[C*3]=ie*Math.cos(he),_[C*3+1]=A+Z+this.planetRadius*.15,_[C*3+2]=oe+O.uniform(-B*.4,B*.4),X.color[0]/255;const U=(X.distance-(s||200))/((n||400)-(s||200)),F=S.baseGray,ne=S.variation,ye=O.uniform(-ne,ne),we=Math.max(.12,Math.min(.45,F+ye)),Ee=.8+U*.4,Ce=O.uniform(.85,1.15),Pe=O.uniform(0,1),We=Pe<.03?O.uniform(1.1,1.3):1,$e=we*Ee*Ce*We,se=Math.max(.1,Math.min(.55,$e));w[C*3]=se,w[C*3+1]=se,w[C*3+2]=se;const Me=.15,me=O.uniform(.3,.7),z=Pe<.1?O.uniform(1.05,1.2):1;M[C]=X.size*Me*me*z}g.setAttribute("position",new Q(_,3)),g.setAttribute("color",new Q(w,3)),g.setAttribute("size",new Q(M,1)),this.material=new ee({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:ze}),this.ringSystem=new Qe(g,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,s=t.cosmicOriginTime||Date.now()/1e3,n=t.initialAngleRotation||0,r=Date.now()/1e3-s,c=2*Math.PI/i,d=(n+r*c)%(2*Math.PI);this.ringSystem.rotation.y=d}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function xi(o,e){const t={full_ring:o.full_ring,ontop_ring:o.ontop_ring,ring_inner_radius:o.ring_inner_radius,ring_outer_radius:o.ring_outer_radius,tilt_factor:o.tilt_factor,planet_radius:o.planet_radius,shape_seed:o.shape_seed};return new Et(e,t)}class Re{mesh;material;geometry;params;static vertexShader=`
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
      
      // Efecto Fresnel - opaco en bordes, transparente en el centro
      float fresnel = pow(1.0 - abs(dot(normal, viewDir)), fresnelPower);
      
      // Color de la atmósfera
      vec3 color = atmosphereColor;
      
      // Alpha con efecto fresnel
      float alpha = fresnel * atmosphereOpacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new Ve(i,32,32);const s=new f(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ee({vertexShader:Re.vertexShader,fragmentShader:Re.fragmentShader,uniforms:{atmosphereColor:{value:s},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:et,side:Ht,depthWrite:!1}),this.mesh=new ge(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new f(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function _i(o,e){console.log("🌫️ ATMOSPHERE CREATING - THIS SHOULD BE THE GLOW!",{type:"Fresnel",width:12});let t=[.7,.7,.7,.15],i=12;if(e){if(console.log("🌫️ Atmosphere received data:",e),e.color&&Array.isArray(e.color)){const n=e.color;t=[n[0],n[1],n[2],(n[3]||.15)*.7],console.log("🎨 Using API atmosphere color (Python normalized):",t)}else console.log("🎨 Using default atmosphere color (no API color found):",t);e.width&&(i=e.width)}else console.log("🎨 No atmosphere data found, using defaults:",{color:t,width:i});console.log("🌫️ Final Atmosphere params:",{color:t,width:i,planetRadius:o,opacity:t[3]});const s={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new Re(o,s)}class ${seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,i=Math.acos(this.random()*2-1);return{x:e*Math.sin(i)*Math.cos(t),y:e*Math.sin(i)*Math.sin(t),z:e*Math.cos(i)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const T={PARTICLE_COUNT:{min:50,max:200},SPEED:{min:.05,max:.5},SIZE:{min:.5,max:2},OPACITY:{min:.2,max:.5},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05}};class Le{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),s=new $(i);this.params={color:t.color||new f(16777215),particleCount:t.particleCount||Math.floor(s.uniform(T.PARTICLE_COUNT.min,T.PARTICLE_COUNT.max)),speed:t.speed||s.uniform(T.SPEED.min,T.SPEED.max),size:t.size||s.uniform(T.SIZE.min,T.SIZE.max),opacity:t.opacity||s.uniform(T.OPACITY.min,T.OPACITY.max),turbulence:t.turbulence||s.uniform(T.TURBULENCE.min,T.TURBULENCE.max),rotationSpeed:t.rotationSpeed||s.uniform(T.ROTATION_SPEED.min,T.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||s.uniform(T.MOVEMENT_AMPLITUDE.min,T.MOVEMENT_AMPLITUDE.max),seed:i},this.particleCount=this.params.particleCount,this.geometry=new Se,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new Qe(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),s=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),r=this.params.color instanceof f?this.params.color:new f(this.params.color),c=this.params.seed||Math.floor(Math.random()*1e6),d=new $(c);for(let u=0;u<this.particleCount;u++){const v=d.spherePosition(e*d.uniform(1,1.1));t[u*3]=v.x,t[u*3+1]=v.y,t[u*3+2]=v.z;const g=d.colorVariation({r:r.r,g:r.g,b:r.b});i[u*3]=g.r,i[u*3+1]=g.g,i[u*3+2]=g.b,s[u]=this.params.size*d.uniform(.75,1.25),n[u]=this.params.speed*d.uniform(.6,1.4),l[u]=d.random()*Math.PI*2}this.geometry.setAttribute("position",new Q(t,3)),this.geometry.setAttribute("customColor",new Q(i,3)),this.geometry.setAttribute("size",new Q(s,1)),this.geometry.setAttribute("speed",new Q(n,1)),this.geometry.setAttribute("phase",new Q(l,1))}createMaterial(){return new ee({vertexShader:Le.vertexShader,fragmentShader:Le.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:et,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value,this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem),console.log("🌟 AtmosphereGlow: Sistema de partículas añadido a la escena")}dispose(){this.geometry.dispose(),this.material.dispose()}}function pt(o,e,t){const i=e.streaks||{},s=t||Math.floor(Math.random()*1e6),n=new $(s+3e3),l=i.count||Math.floor(n.uniform(T.PARTICLE_COUNT.min,T.PARTICLE_COUNT.max)),r=i.speed||n.uniform(T.SPEED.min,T.SPEED.max),c=n.uniform(T.SIZE.min,T.SIZE.max),d=n.uniform(T.OPACITY.min,T.OPACITY.max),u=n.uniform(T.TURBULENCE.min,T.TURBULENCE.max),v=n.uniform(T.ROTATION_SPEED.min,T.ROTATION_SPEED.max),g=n.uniform(T.MOVEMENT_AMPLITUDE.min,T.MOVEMENT_AMPLITUDE.max);console.log(`🎲 AtmosphereGlow procedural: particles=${l}, speed=${r.toFixed(3)}, size=${c.toFixed(3)}, opacity=${d.toFixed(3)}, turbulence=${u.toFixed(3)}, rotation=${v.toFixed(3)}, amplitude=${g.toFixed(3)}`);const _={color:i.color?new f().setRGB(i.color[0],i.color[1],i.color[2]):new f(16777215),particleCount:l,speed:r,size:c,opacity:d,turbulence:u,seed:s,rotationSpeed:v,movementAmplitude:g};return new Le(o,_)}class De{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;constructor(e,t=new f(16753920)){this.baseMesh=e;const i=e.geometry;this.planetRadius=i.parameters.radius||1;const s=t instanceof f?t:new f(t);console.log("🌍 PlanetLayerSystem: Creating base material with color:",s),this.baseMaterial=new ee({vertexShader:De.baseVertexShader,fragmentShader:De.baseFragmentShader,uniforms:{baseColor:{value:s},lightDirection:{value:new D(1,1,1).normalize()},lightPosition:{value:new D(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:pe}),this.baseMesh.material=this.baseMaterial,console.log("✅ PlanetLayerSystem: Base material applied to mesh")}addEffectLayer(e,t,i=1.001,s){console.log(`🔷 PlanetLayerSystem: Adding layer "${e}" with scale ${i}`);const n=new Ve(this.planetRadius*i,64,64),l=new ge(n,t);return l.position.copy(this.baseMesh.position),l.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:l,material:t,layerObject:s}),this.scene?(this.scene.add(l),console.log(`✅ Layer "${e}" added to scene`)):console.log(`⚠️ Layer "${e}" created but scene not set yet`),l}createCloudBandsLayerMaterial(e){const t=`
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
        float alpha = bands * 0.7 * lightIntensity; // Transparencia basada en iluminación
        
        gl_FragColor = vec4(color, alpha);
      }
    `;return new ee({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new f(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new D(1,1,1).normalize()}},transparent:!0,blending:ze,side:pe,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,s=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((n,l)=>{l<5&&(s[l*2]=n.x,s[l*2+1]=n.y)}),new ee({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new f(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:s},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new D(1,1,1).normalize()}},transparent:!0,blending:ze,side:pe,depthWrite:!1})}addToScene(e){console.log("🎬 PlanetLayerSystem: Adding to scene, existing layers:",this.effectLayers.length),this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&(e.add(t.mesh),console.log(`   ➕ Added layer "${t.name}" mesh to scene`))}),this.effectLayers.length===0&&console.log("   ℹ️ No effect layers to add yet")}update(e,t){this.effectLayers.forEach(i=>{if(i.material.uniforms.time&&(i.material.uniforms.time.value+=e),t!==void 0&&i.material.uniforms.rotationAngle&&(i.material.uniforms.rotationAngle.value=t),i.layerObject&&i.layerObject.update)try{i.layerObject.update(e,t)}catch(s){console.error(`Error updating layer ${i.name}:`,s)}i.mesh&&i.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof f?e:new f(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())}),console.log("🌞 PlanetLayerSystem: Updated light position to",e)}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t),console.log("🌞 PlanetLayerSystem: Synced with Three.js DirectionalLight")}createGenericLayerMaterial(e,t,i,s=!0,n=ze){return i.lightDirection||(i.lightDirection={value:new D(1,1,1).normalize()}),i.lightPosition||(i.lightPosition={value:new D(0,0,0)}),new ee({vertexShader:e,fragmentShader:t,uniforms:i,transparent:s,blending:n,side:pe,depthWrite:!1})}convertEffectToLayer(e,t,i=1.001){if(t instanceof ee){const s=t.clone();return s.transparent=!0,s.depthWrite=!1,s.uniforms.lightDirection||(s.uniforms.lightDirection={value:new D(1,1,1).normalize()}),this.addEffectLayer(e,s,i)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const N={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4},OPACITY:{min:.5,max:.9}};class bi{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),s=new $(i),n=t.numBands||Math.floor(s.uniform(N.NUM_BANDS.min,N.NUM_BANDS.max));this.params={numBands:n,bandPositions:t.bandPositions||this.generateDefaultBandPositions(n,i),bandWidths:t.bandWidths||this.generateDefaultBandWidths(n,i),rotationAngle:t.rotationAngle||s.uniform(N.ROTATION_ANGLE.min,N.ROTATION_ANGLE.max),baseColor:t.baseColor||new f(16753920),bandColor:t.bandColor||new f(16747520),animationSpeed:t.animationSpeed||s.uniform(N.ANIMATION_SPEED.min,N.ANIMATION_SPEED.max),turbulence:t.turbulence||s.uniform(N.TURBULENCE.min,N.TURBULENCE.max),noiseScale:t.noiseScale||s.uniform(N.NOISE_SCALE.min,N.NOISE_SCALE.max),opacity:t.opacity||s.uniform(N.OPACITY.min,N.OPACITY.max),seed:i},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const i=new Array(20).fill(0),s=new $(t+12345);for(let n=0;n<e&&n<20;n++)i[n]=s.uniform(N.BAND_POSITIONS.min,N.BAND_POSITIONS.max);return i}generateDefaultBandWidths(e,t){const i=new Array(20).fill(0),s=new $(t+67890);for(let n=0;n<e&&n<20;n++)i[n]=s.uniform(N.BAND_WIDTHS.min,N.BAND_WIDTHS.max);return i}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}dispose(){}}function Si(o,e,t){const i=e.cloud_bands||{},s=t||Math.floor(Math.random()*1e6),n=new $(s+4e3),l={numBands:i.num_bands||Math.floor(n.uniform(N.NUM_BANDS.min,N.NUM_BANDS.max)),bandPositions:i.positions||void 0,bandWidths:i.widths||void 0,rotationAngle:i.rotation||n.uniform(N.ROTATION_ANGLE.min,N.ROTATION_ANGLE.max),baseColor:e.base_color?new f().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new f(16753920),bandColor:new f(16747520),animationSpeed:n.uniform(N.ANIMATION_SPEED.min,N.ANIMATION_SPEED.max),turbulence:e.turbulence||n.uniform(N.TURBULENCE.min,N.TURBULENCE.max),noiseScale:n.uniform(N.NOISE_SCALE.min,N.NOISE_SCALE.max),opacity:n.uniform(N.OPACITY.min,N.OPACITY.max),seed:s};return new bi(o,l)}const j={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:1,max:3},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.4,max:.8}};class wi{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),s=new $(i);this.params={stormCenters:t.stormCenters||this.generateStormCenters(i),stormColor:t.stormColor||new f(9109504),stormIntensity:t.stormIntensity||s.uniform(j.STORM_INTENSITY.min,j.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||s.uniform(j.SPIRAL_SPEED.min,j.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||s.uniform(j.ANIMATION_SPEED.min,j.ANIMATION_SPEED.max),opacity:t.opacity||s.uniform(j.OPACITY.min,j.OPACITY.max),seed:i},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new $(e+5e3),i=Math.floor(t.uniform(j.STORM_COUNT.min,j.STORM_COUNT.max)),s=[];for(let n=0;n<i;n++)s.push({x:t.uniform(j.STORM_CENTERS.min,j.STORM_CENTERS.max),y:t.uniform(j.STORM_CENTERS.min,j.STORM_CENTERS.max)});return s}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function Ei(o,e,t){const i=e.storms||{},s=t||Math.floor(Math.random()*1e6),n=new $(s+5e3),l={stormCenters:i.centers||void 0,stormColor:new f(9109504),stormIntensity:i.intensity||e.storm_intensity||n.uniform(j.STORM_INTENSITY.min,j.STORM_INTENSITY.max),spiralSpeed:i.spiral_speed||n.uniform(j.SPIRAL_SPEED.min,j.SPIRAL_SPEED.max),animationSpeed:n.uniform(j.ANIMATION_SPEED.min,j.ANIMATION_SPEED.max),opacity:n.uniform(j.OPACITY.min,j.OPACITY.max),seed:s};return new wi(o,l)}const G={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class Ye{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),s=new $(i),n=t.color instanceof f?t.color:t.color?new f(t.color):new f(9127187);this.params={color:n,roughness:t.roughness||s.uniform(G.ROUGHNESS.min,G.ROUGHNESS.max),rockDensity:t.rockDensity||s.uniform(G.ROCK_DENSITY.min,G.ROCK_DENSITY.max)*10,craterCount:t.craterCount||s.uniform(G.CRATER_COUNT.min,G.CRATER_COUNT.max),opacity:t.opacity||s.uniform(G.OPACITY.min,G.OPACITY.max),seed:i},this.material=new ee({vertexShader:Ye.vertexShader,fragmentShader:Ye.fragmentShader,uniforms:{time:{value:0},rockColor:{value:n},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new D(1,1,1).normalize()}},transparent:!0,side:pe,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Ci(o,e,t){const i=e.surface||{},s=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),l=new $(n+8e3);return new Ye(o,{color:s?new f(s):new f(9127187),roughness:i.roughness||l.uniform(G.ROUGHNESS.min,G.ROUGHNESS.max),rockDensity:i.rock_density||l.uniform(G.ROCK_DENSITY.min,G.ROCK_DENSITY.max)*10,craterCount:i.crater_count||l.uniform(G.CRATER_COUNT.min,G.CRATER_COUNT.max),opacity:l.uniform(G.OPACITY.min,G.OPACITY.max),seed:n})}const V={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9}};class Be{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),s=new $(i),n=t.color instanceof f?t.color:t.color?new f(t.color):new f(11591910);this.params={color:n,iceReflectivity:t.iceReflectivity||s.uniform(V.ICE_REFLECTIVITY.min,V.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||s.uniform(V.FROST_DENSITY.min,V.FROST_DENSITY.max),crackIntensity:t.crackIntensity||s.uniform(V.CRACK_INTENSITY.min,V.CRACK_INTENSITY.max),opacity:t.opacity||s.uniform(V.OPACITY.min,V.OPACITY.max),seed:i},this.material=new ee({vertexShader:Be.vertexShader,fragmentShader:Be.fragmentShader,uniforms:{time:{value:0},iceColor:{value:n},iceReflectivity:{value:this.params.iceReflectivity},frostDensity:{value:this.params.frostDensity},crackIntensity:{value:this.params.crackIntensity},opacity:{value:this.params.opacity},lightDirection:{value:new D(1,1,1).normalize()}},transparent:!0,side:pe,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Pi(o,e,t){const i=e.surface||{},s=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),l=new $(n+6e3);return new Be(o,{color:s?new f(s):new f(11591910),iceReflectivity:i.ice_reflectivity||l.uniform(V.ICE_REFLECTIVITY.min,V.ICE_REFLECTIVITY.max),frostDensity:i.frost_density||l.uniform(V.FROST_DENSITY.min,V.FROST_DENSITY.max),crackIntensity:i.crack_intensity||l.uniform(V.CRACK_INTENSITY.min,V.CRACK_INTENSITY.max),opacity:l.uniform(V.OPACITY.min,V.OPACITY.max),seed:n})}const W={METALNESS:{min:.7,max:.95},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.6,max:.9}};class Ge{layerMesh;material;params;layerSystem;static vertexShader=`
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
    uniform vec3 metalColor;
    uniform float metalness;
    uniform float roughness;
    uniform float fragmentationIntensity;
    uniform float opacity;
    uniform vec3 lightDirection;
    uniform float time;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vViewPosition;
    
    // Función de ruido para los detalles metálicos
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
    
    // Patrón de fragmentación metálica
    float fragmentation(vec3 p) {
      float scale = fragmentationIntensity * 10.0;
      vec3 cell = floor(p * scale);
      float random = fract(sin(dot(cell, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
      return random;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(lightDirection);
      vec3 viewDir = normalize(vViewPosition);
      
      // Calcular iluminación
      float dotNL = dot(normal, lightDir);
      float visibility = smoothstep(-0.2, 0.2, dotNL);
      
      // Textura metálica con fragmentación
      float frag = fragmentation(pos);
      float metalPattern = noise(pos * 20.0 + vec3(time * 0.01));
      metalPattern = mix(metalPattern, frag, fragmentationIntensity);
      
      // Reflexión metálica (aproximación)
      vec3 reflectDir = reflect(-lightDir, normal);
      float spec = pow(max(dot(viewDir, reflectDir), 0.0), 16.0 / roughness) * metalness;
      
      // Efecto Fresnel para bordes brillantes
      float fresnel = pow(1.0 - dot(viewDir, normal), 2.0) * metalness;
      
      // Color final con aspecto metálico
      vec3 color = metalColor;
      color *= (0.5 + 0.5 * metalPattern); // Variación de superficie
      color += vec3(spec * 0.5); // Añadir especular
      color += vec3(fresnel * 0.3); // Añadir fresnel
      
      // Solo mostrar en la parte iluminada
      float alpha = (0.6 + 0.4 * metalPattern) * visibility * opacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),s=new $(i),n=t.color instanceof f?t.color:t.color?new f(t.color):new f(8421504);this.params={color:n,metalness:t.metalness||s.uniform(W.METALNESS.min,W.METALNESS.max),roughness:t.roughness||s.uniform(W.ROUGHNESS.min,W.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||s.uniform(W.FRAGMENTATION_INTENSITY.min,W.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||s.uniform(W.OPACITY.min,W.OPACITY.max),seed:i},this.material=new ee({vertexShader:Ge.vertexShader,fragmentShader:Ge.fragmentShader,uniforms:{time:{value:0},metalColor:{value:n},metalness:{value:this.params.metalness},roughness:{value:this.params.roughness},fragmentationIntensity:{value:this.params.fragmentationIntensity},opacity:{value:this.params.opacity},lightDirection:{value:new D(1,1,1).normalize()}},transparent:!0,side:pe,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Mi(o,e,t){const i=e.surface||{},s=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),l=new $(n+7e3);return new Ge(o,{color:s?new f(s):new f(8421504),metalness:i.metalness||l.uniform(W.METALNESS.min,W.METALNESS.max),roughness:i.roughness||l.uniform(W.ROUGHNESS.min,W.ROUGHNESS.max),fragmentationIntensity:i.fragmentation||l.uniform(W.FRAGMENTATION_INTENSITY.min,W.FRAGMENTATION_INTENSITY.max),opacity:l.uniform(W.OPACITY.min,W.OPACITY.max),seed:n})}class Ct{particleSystem;material;geometry;params;particleCount;constructor(e,t={}){this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.8,brightness:t.brightness||1.5},this.particleCount=this.params.particleCount,this.geometry=new Se,this.createParticles(e),this.createMaterial(),this.particleSystem=new Qe(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),l=e*1.3;for(let r=0;r<this.particleCount;r++){const c=Math.random()*Math.PI*2,d=Math.random()*2-1,u=Math.random(),v=Math.acos(d),g=l*Math.cbrt(u);t[r*3]=g*Math.sin(v)*Math.cos(c),t[r*3+1]=g*Math.sin(v)*Math.sin(c),t[r*3+2]=g*Math.cos(v),i[r]=this.params.size*(.5+Math.random()*.5),s[r]=this.params.speed*(.8+Math.random()*.4),n[r]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new Q(t,3)),this.geometry.setAttribute("size",new Q(i,1)),this.geometry.setAttribute("speed",new Q(s,1)),this.geometry.setAttribute("phase",new Q(n,1))}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new Zt({color:e,size:this.params.size,opacity:this.params.opacity,transparent:!0,blending:et,sizeAttenuation:!0,vertexColors:!1}),this.material.color.multiplyScalar(this.params.brightness)}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){const t=Date.now()*.001,i=.9+.1*Math.sin(t*2);this.material.opacity=this.params.opacity*i}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f().setRGB(e.color[0],e.color[1],e.color[2]);this.material.color=t,this.material.color.multiplyScalar(this.params.brightness)}e.opacity!==void 0&&(this.material.opacity=e.opacity),e.size!==void 0&&(this.material.size=e.size)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ai(o,e){console.log("✨ AtmosphericStreaks received data:",e);const t=e.streaks||{},i={color:t.color||[.95,.95,1],particleCount:t.particleCount||100,speed:t.speed||1,size:2,opacity:.8,brightness:1.5};return console.log("✨ Final AtmosphericStreaks params:",i),new Ct(o,i)}class gt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new f(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new bt,this.generateFragments()}generateFragments(){const e=new be({color:this.params.color instanceof f?this.params.color:new f(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),s=new ge(i,e);this.positionFragment(s,t),s.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const n=this.params.size*(Math.random()*.5+.75);s.scale.set(n,n,n),s.userData={rotationAxis:new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(s),this.fragments.add(s)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],s=[];s.push(new D(0,0,0));for(let r=0;r<e;r++){const c=r/e*Math.PI*2,d=Math.random()*.5+.5,u=(Math.random()-.5)*.3;s.push(new D(Math.cos(c)*d,Math.sin(c)*d,u))}for(let r=1;r<=e;r++){const d=s[r].clone();d.z+=Math.random()*.4+.2,s.push(d)}for(const r of s)t.push(r.x,r.y,r.z);for(let r=1;r<e;r++)i.push(0,r,r+1);i.push(0,e,1);const n=s.length-e-1;for(let r=0;r<e-1;r++)i.push(n,n+r+2,n+r+1);i.push(n,n+1,n+e);for(let r=0;r<e;r++){const c=r+1,d=(r+1)%e+1,u=c+e,v=d+e;i.push(c,u,d),i.push(d,u,v)}const l=new Se;return l.setAttribute("position",new Kt(t,3)),l.setIndex(i),l.computeVertexNormals(),l}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),s=(Math.random()-.5)*this.planetRadius*.5;return new D(Math.cos(t)*i,s,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new D(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new D(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const s=t.userData;t.rotateOnAxis(s.rotationAxis,s.rotationSpeed*e*this.params.animationSpeed);const n=Math.sin(Date.now()*.001+i)*.001;t.position.y+=n*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof be&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof be&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof lt&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof lt&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function Ue(o){const e=o.replace("#",""),t=parseInt(e.substr(0,2),16)/255,i=parseInt(e.substr(2,2),16)/255,s=parseInt(e.substr(4,2),16)/255;return new f(t,i,s)}function qe(o){return o.length>=3?new f(o[0],o[1],o[2]):new f(.5,.5,.5)}function Ie(o){if(o.ocean_color){if(typeof o.ocean_color=="string")return Ue(o.ocean_color);if(Array.isArray(o.ocean_color))return qe(o.ocean_color)}if(o.planet_info?.base_color){if(typeof o.planet_info.base_color=="string")return Ue(o.planet_info.base_color);if(Array.isArray(o.planet_info.base_color))return qe(o.planet_info.base_color)}if(o.base_color){if(typeof o.base_color=="string")return Ue(o.base_color);if(Array.isArray(o.base_color))return qe(o.base_color)}const e=o.planet_info?.type||o.type||"Unknown";return Ni(e)}function Ni(o){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[o]||"#FFFFFF";return Ue(t)}class Oe{material;params;oceanLayerMesh;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new f(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new f(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new f(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof f?this.params.landmassColor:new f(this.params.landmassColor),t=this.params.foamColor instanceof f?this.params.foamColor:new f(this.params.foamColor),i=this.params.oceanColor instanceof f?this.params.oceanColor:new f(this.params.oceanColor);return new ee({vertexShader:Oe.vertexShader,fragmentShader:Oe.fragmentShader,uniforms:{time:{value:0},baseColor:{value:i},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:i}}})}apply(e){console.log("🌊 OceanWaves: Creando capa oceánica sin reemplazar material base"),this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const i=new ge(t,this.material);i.position.copy(e.position),i.rotation.copy(e.rotation),this.oceanLayerMesh=i,console.log("🌊 OceanWaves: Capa oceánica creada")}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const i=e[t];if(i!==void 0&&this.material.uniforms[t])if(i instanceof f||Array.isArray(i)){const s=i instanceof f?i:new f(i);this.material.uniforms[t].value=s}else this.material.uniforms[t].value=i})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh),console.log("🌊 OceanWaves: Capa oceánica añadida a la escena")):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function Ti(o){const e=Ie(o),t=[e.r,e.g,e.b];let i=.3,s=2,n=8,l=.3,r=.2;if(o.seeds){const d=o.seeds.shape_seed,v=(g=>{let _=g;return()=>(_=(_*1664525+1013904223)%4294967296,_/4294967296)})(d);i=.2+v()*.3,s=1.5+v()*1.5,n=6+v()*6,l=.25+v()*.15,r=.15+v()*.1}const c={waveIntensity:i,waveSpeed:s,waveScale:n,landmassThreshold:l,deepOceanThreshold:r,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new f(.9,.9,1),foamIntensity:.4,oceanColor:t};return new Oe(c)}const yt={vertexShader:`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying vec3 vViewPosition;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `,fragmentShader:`
    uniform float time;
    uniform vec3 baseColor;
    uniform float roughness;
    uniform float metalness;
    uniform float fragmentationIntensity;
    uniform float noiseScale;
    uniform float noiseIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
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
    
    // Fractales para fragmentación
    float fractal(vec3 p, int octaves) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for(int i = 0; i < octaves; i++) {
        value += amplitude * noise3D(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
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
      vec3 lightDir = normalize(vec3(1.0, 1.0, 0.5));
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
      
      // Base metálica con variaciones
      vec3 color = baseColor;
      
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
      
      // Calcular iluminación PBR
      vec3 finalColor = calculatePBR(color, metalness, roughness, normal, viewDir);
      
      // Añadir un toque de color oscuro para profundidad
      finalColor = mix(finalColor, finalColor * 0.5, pow(surfaceNoise, 2.0) * 0.3);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `};class vt{material;metallicLayerMesh;constructor(e){this.material=new ee({vertexShader:yt.vertexShader,fragmentShader:yt.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(e.color||[.5,.5,.5])},roughness:{value:e.roughness||.7},metalness:{value:e.metalness||.9},fragmentationIntensity:{value:e.fragmentationIntensity||.5},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3}}})}apply(e){console.log("🪨 MetallicSurface: Creando capa metálica sin reemplazar material base"),this.createMetallicLayer(e)}createMetallicLayer(e){const t=e.geometry.clone();t.scale(1.001,1.001,1.001);const i=new ge(t,this.material);i.position.copy(e.position),i.rotation.copy(e.rotation),this.metallicLayerMesh=i,console.log("🪨 MetallicSurface: Capa metálica creada")}update(e,t){this.material.uniforms.time.value+=e,this.metallicLayerMesh&&t!==void 0&&(this.metallicLayerMesh.rotation.y=t)}addToScene(e,t){this.metallicLayerMesh?(t&&this.metallicLayerMesh.position.copy(t),e.add(this.metallicLayerMesh),console.log("🪨 MetallicSurface: Capa metálica añadida a la escena")):console.warn("🪨 MetallicSurface: No hay capa metálica - call apply() first")}updateParams(e){e.roughness!==void 0&&(this.material.uniforms.roughness.value=e.roughness),e.metalness!==void 0&&(this.material.uniforms.metalness.value=e.metalness),e.fragmentationIntensity!==void 0&&(this.material.uniforms.fragmentationIntensity.value=e.fragmentationIntensity)}dispose(){this.material.dispose(),this.metallicLayerMesh&&(this.metallicLayerMesh.geometry&&this.metallicLayerMesh.geometry.dispose(),this.metallicLayerMesh=void 0)}}class Pt{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new bt,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,s=t*Math.cos(i),n=t*Math.sin(i),l=n*.8,r=new Se,c=new Float32Array([0,0,0,s,l,n]);r.setAttribute("position",new Q(c,3));const d=new ct({color:16776960,linewidth:5,transparent:!1});this.sunLine=new dt(r,d),this.debugGroup.add(this.sunLine);const u=e+Math.PI,v=t*.7,g=v*Math.cos(u),_=0,w=v*Math.sin(u),M=new Ve(this.planetRadius*.15,16,16),R=new St({color:16776960,transparent:!1,opacity:1}),S=new ge(M,R);S.position.set(g,_,w),this.debugGroup.add(S),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new Se,s=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new Q(s,3));const n=new ct({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new dt(i,n),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,s=this.params.initialAngleRotation||0,n=e-t,l=2*Math.PI/i;return(s+n*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,s=this.sunLine.geometry,n=s.attributes.position.array;n[3]=i*Math.cos(t),n[4]=0,n[5]=i*Math.sin(t),s.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,s=i.attributes.position.array;s[0]=-t*Math.cos(e),s[1]=0,s[2]=-t*Math.sin(e),s[3]=t*Math.cos(e),s[4]=0,s[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function Ii(o,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:o.debug?.cosmic_origin_time||o.timing?.cosmic_origin_time||o.cosmicOriginTime,rotationPeriod:o.planet_info?.rotation_period||o.rotation_period_seconds||86400,initialAngleRotation:o.debug?.initial_angle_rotation||o.timing?.initial_angle_rotation||o.initialAngleRotation||0,planetRadius:e,orbitalAngle:o.timing?.orbital_angle||0,sunAngle:o.sun_angle||o.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new Pt(e,t)}const Ri=!1;var Mt=(o=>(o.METALLIC_SURFACE="metallic_surface",o.CLOUD_BANDS="cloud_bands",o.CLOUD_GYROS="cloud_gyros",o.ATMOSPHERE="atmosphere",o.ATMOSPHERE_GLOW="atmosphere_glow",o.ATMOSPHERIC_STREAKS="atmospheric_streaks",o.RING_SYSTEM="ring_system",o.FRAGMENTATION="fragmentation",o.ROCKY_TERRAIN="rocky_terrain",o.ICY_TERRAIN="icy_terrain",o.OCEAN_WAVES="ocean_waves",o.LAVA_FLOWS="lava_flows",o.CRYSTAL_FORMATIONS="crystal_formations",o.CLOUD_LAYERS="cloud_layers",o.STORM_SYSTEMS="storm_systems",o.VOLCANIC_ACTIVITY="volcanic_activity",o.AURORA="aurora",o.MAGNETIC_FIELD="magnetic_field",o.CITY_LIGHTS="city_lights",o.BIOLUMINESCENCE="bioluminescence",o.THERMAL_EMISSIONS="thermal_emissions",o.VISUAL_DEBUG_3D="visual_debug_3d",o))(Mt||{});class xe{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return xe.instance||(xe.instance=new xe),xe.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new Le(t,e),fromPythonData:(e,t)=>pt(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new Ct(t,e),fromPythonData:(e,t)=>Ai(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new Re(t,e),fromPythonData:(e,t)=>_i(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new Et(t,e),fromPythonData:(e,t)=>xi(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new gt(t,e),fromPythonData:(e,t)=>new gt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("ocean_waves",{create:(e,t)=>new Oe(e),fromPythonData:(e,t)=>Ti(e)}),this.registerEffect("metallic_surface",{create:(e,t)=>new vt(e),fromPythonData:(e,t)=>new vt({color:e.surface?.base_color||[.5,.5,.5],roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation_intensity||.5})}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new Pt(t,e),fromPythonData:(e,t)=>Ii(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,s,n=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const r=l.create(t,i,s);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:n,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}':`,r),null}}createEffectFromPythonData(e,t,i,s,n=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,i,s,n);try{const r=l.fromPythonData(t,i,s);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:n,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}' from Python data:`,r),null}}createEffectsFromList(e,t,i){const s=[],n=e.sort((l,r)=>(l.priority||0)-(r.priority||0));for(const l of n){const r=this.createEffect(l.type,l.params,t,i,l.priority);r&&(r.enabled=l.enabled!==!1,s.push(r))}return s}createEffectsFromPythonPlanetData(e,t,i,s,n){const l=[];try{if(console.log("🌍 EffectRegistry received Python data:",e),console.log("🔍 Surface elements:",e.surface_elements),console.log("🌫️ Atmosphere:",e.atmosphere),console.log("💍 Rings:",e.rings),console.log("🪐 Planet info:",e.planet_info),n)console.log("🔄 Using existing PlanetLayerSystem"),this.layerSystem=n;else{const r=Ie(e);console.log("🎨 Creating new PlanetLayerSystem with base color:",r),this.layerSystem=new De(i,r)}if(e.surface_elements){const r=e.surface_elements;if(console.log("🏔️ Processing surface elements:",r.type,r),r.effects_3d&&Array.isArray(r.effects_3d)){console.log("🚀 ENCONTRADOS effects_3d:",r.effects_3d.length,"efectos"),console.log("🚀 LISTA COMPLETA DE effects_3d:",JSON.stringify(r.effects_3d,null,2));for(const c of r.effects_3d){console.log("🔍 PROCESANDO EFECTO:",c.type,"con params:",c.params);const d=this.createEffect(c.type,c.params,t,i,c.priority||0);d?(l.push(d),console.log("🎯 EFECTO CREADO:",c.type),d.effect.apply&&(console.log("🔄 Aplicando efecto al mesh:",c.type),d.effect.apply(i)),d.effect.addToScene&&d.effect.addToScene(s,i.position),console.log("✅ EFECTO APLICADO:",c.type)):console.error("❌ FALLO AL CREAR EFECTO:",c.type)}}else console.log("❌ NO HAY effects_3d O NO ES ARRAY:",typeof r.effects_3d,r.effects_3d);switch(console.log("🔍 Checking legacy surface type:",r.type),r.type){case"gas_giant":if(console.log("🌀 Creating Gas Giant effects with LAYER SYSTEM"),this.layerSystem){console.log("🌀 Adding cloud bands layer");const c=Si(this.layerSystem,{...r,base_color:baseColor,turbulence:e.turbulence||r.turbulence},e.seeds?.shape_seed);console.log("🌪️ Adding cloud gyros layer");const d=Ei(this.layerSystem,{...r,base_color:baseColor,storm_intensity:e.storm_intensity||r.storm_intensity},e.seeds?.shape_seed+1e3),u={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:c,priority:0,enabled:!0};this.effects.set(u.id,u),l.push(u);const v={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:d,priority:1,enabled:!0};this.effects.set(v.id,v),l.push(v),console.log("✅ Gas Giant effects added to layer system")}else console.error("❌ PlanetLayerSystem not initialized!");break;case"metallic":case"metallic_3d":if(console.log("⚙️ Creating Metallic planet with LAYER SYSTEM"),this.layerSystem){const c=Mi(this.layerSystem,e,e.seeds?.shape_seed);l.push({id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:c,priority:0,enabled:!0}),console.log("✅ Metallic surface layer added")}break;case"rocky":if(console.log("🪨 Creating Rocky planet with LAYER SYSTEM"),this.layerSystem){const c=Ci(this.layerSystem,e,e.seeds?.shape_seed);l.push({id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:c,priority:0,enabled:!0}),console.log("✅ Rocky terrain layer added")}break;case"icy":if(console.log("❄️ Creating Icy planet with LAYER SYSTEM"),this.layerSystem){const c=Pi(this.layerSystem,e,e.seeds?.shape_seed);l.push({id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:c,priority:0,enabled:!0}),console.log("✅ Icy terrain layer added")}break;case"oceanic":console.log("🌊 Oceanic planet detected - using generic rendering");break;default:if(console.log("❓ Unknown surface type:",r.type,"- applying base color"),i.material instanceof be){const c=Ie(e);i.material.color.copy(c),console.log("✅ Applied base color to planet without specific effects:",c)}break}}else if(console.log("❌ No surface_elements found in Python data - applying base color"),i.material instanceof be){const r=Ie(e);i.material.color.copy(r),console.log("✅ Applied base color to planet without surface_elements:",r)}if(e.atmosphere){if(console.log("🌫️ Applying atmospheric effects for:",e.planet_info?.type),e.atmosphere.halo&&e.atmosphere.halo.enabled!==!1){const r=this.createEffectFromPythonData(Mt.ATMOSPHERIC_HALO,e,t,i,10);r&&(l.push(r),r.effect.addToScene(s,i.position),console.log("✅ Added atmospheric halo effect"))}if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const r=pt(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(r){const c={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:r,priority:20,enabled:!0};this.effects.set(c.id,c),l.push(c),r.addToScene(s,i.position),console.log("✅ Added atmosphere glow effect")}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const r=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),c={...e.atmosphere};r==="oceanic"&&(c.opacity=Math.min(c.opacity||.3,.15),c.width=Math.min(c.width||15,8));const d=this.createEffectFromPythonData("atmosphere",c,t,i,5);d&&(l.push(d),d.effect.addToScene(s,i.position),console.log("✅ Added atmosphere effect"))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){console.log("💍 Applying ring system for:",e.planet_info?.type,"rings data:",e.rings);const r=this.createEffectFromPythonData("ring_system",e,t,i,1);r?(l.push(r),r.effect.addToScene(s,i.position),console.log("✅ Added ring system effect")):console.warn("⚠️ Failed to create ring effect")}else console.log("❌ No rings for:",e.planet_info?.type,"rings:",e.rings);if(e.surface_elements?.has_fragmentation_zones){const r=this.createEffectFromPythonData("fragmentation",e,t,i,5);r&&(l.push(r),r.effect.addToScene(s,i.position))}return this.layerSystem&&(console.log("🎬 Adding PlanetLayerSystem to scene with all layers"),this.layerSystem.addToScene(s)),console.log("📊 EffectRegistry Summary:"),console.log(`   Total effects created: ${l.length}`),l.forEach((r,c)=>{console.log(`   ${c+1}. ${r.type} (${r.enabled?"enabled":"disabled"})`)}),l.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),l}catch(r){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",r),r}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);i&&(i.enabled=t!==void 0?t:!i.enabled)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(s){console.error(`Error updating effect ${i.type}:`,s)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const Ae=xe.getInstance(),fe={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function Li(o){const e=[];switch(o.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...fe.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmosphere",params:{...fe.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:fe.cloud_bands,priority:0},{type:"cloud_gyros",params:fe.cloud_gyros,priority:1},{type:"atmosphere",params:{...fe.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:fe.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...fe.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const re={log:(o,e)=>{},warn:(o,e)=>{console.warn(`[Effects] ${o}`,e||"")},error:(o,e)=>{console.error(`[Effects] ${o}`,e||"")},debug:(o,e)=>{}};new Date().toISOString();const Di=({planetData:o,showInConsole:e=!0,showInPage:t=!1})=>{const[i,s]=p.useState([]),[n,l]=p.useState({});p.useEffect(()=>{if(!o)return;const d=r(o);l(d),s(c(o)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=o,window.__DEBUG_PLANET_ANALYSIS=d)},[o,e]);function r(d){const u={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(d.planet_info&&d.surface_elements?u.hasValidStructure=!0:(d.planet_info||u.missingFields.push("planet_info"),d.surface_elements||u.missingFields.push("surface_elements")),d.surface_elements?.type==="oceanic"&&(u.oceanicData={hasAbstractLands:!!d.surface_elements.abstract_lands?.length,numGreenPatches:d.surface_elements.green_patches?.length||0,numClouds:d.surface_elements.clouds?.length||0,hasDepths:d.surface_elements.depths?.enabled||!1,baseColorIsBlue:d.planet_info?.base_color==="#0000FF",greenPatchColor:d.surface_elements.green_patches?.[0]?.color,issues:[]},u.oceanicData.numGreenPatches>15&&u.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),u.oceanicData.baseColorIsBlue||u.oceanicData.issues.push(`Color base no es azul puro: ${d.planet_info?.base_color}`),u.renderingIssues=u.oceanicData.issues),d.planet_info?.base_color&&d.planet_info?.type){const g={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[d.planet_info.type];g&&d.planet_info.base_color!==g?u.colorConsistency=`Inconsistente: esperado ${g}, recibido ${d.planet_info.base_color}`:u.colorConsistency="Correcto"}return u}function c(d){const u=[];if(!d.surface_elements?.type)return["No surface type defined"];const v=d.surface_elements.type.toLowerCase();switch(v){case"oceanic":u.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":u.push("RockyTerrainEffect");break;case"icy":u.push("IcyTerrainEffect");break;case"gas giant":u.push("GasGiantBandsEffect");break;default:u.push(`Generic effect for type: ${v}`)}return d.atmosphere?.density>0&&u.push("AtmosphericEffect"),d.rings&&u.push("RingSystemEffect"),u}return t?a.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[a.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",o.planet_info?.name]}),a.jsxs("div",{style:{marginBottom:"10px"},children:[a.jsx("strong",{children:"Type:"})," ",o.planet_info?.type,a.jsx("br",{}),a.jsx("strong",{children:"Base Color:"})," ",o.planet_info?.base_color,a.jsx("br",{}),a.jsx("strong",{children:"Radius:"})," ",o.planet_info?.radius]}),o.surface_elements?.type==="oceanic"&&a.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[a.jsx("strong",{children:"🌊 Oceanic Data:"}),a.jsx("br",{}),a.jsxs("span",{style:{color:n.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",n.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),a.jsx("br",{}),"Green Patches: ",n.oceanicData?.numGreenPatches,a.jsx("br",{}),"Clouds: ",n.oceanicData?.numClouds,a.jsx("br",{}),"Has Depths: ",n.oceanicData?.hasDepths?"Yes":"No",a.jsx("br",{}),n.oceanicData?.issues?.length>0&&a.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",a.jsx("br",{}),n.oceanicData.issues.map((d,u)=>a.jsxs("div",{children:["- ",d]},u))]})]}),a.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[a.jsx("strong",{children:"🎨 Effects Applied:"}),a.jsx("br",{}),i.map((d,u)=>a.jsxs("div",{style:{color:d.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",d]},u))]}),a.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function Oi(o){p.useEffect(()=>{if(o&&o.surface_elements?.type==="oceanic"){o.surface_elements.green_patches?.length>0;const e=o.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[o])}const Te=2.5,xt=()=>{const o=45*Math.PI/180;return Te/(Math.tan(o/2)*.5)},ji=({planetName:o,containerClassName:e="",width:t=800,height:i=600,autoRotate:s=!0,enableControls:n=!0,showDebugInfo:l=!1,planetData:r,cosmicOriginTime:c,initialAngleRotation:d,onDataLoaded:u,onEffectsCreated:v,onError:g})=>{const _=p.useRef(null),w=p.useRef(null),M=p.useRef(null),R=p.useRef(null),S=p.useRef(null),C=p.useRef(null),X=p.useRef(new Xt),q=p.useRef(null),ce=p.useRef(0),O=p.useRef(null),[de,b]=p.useState(!0),[H,Y]=p.useState(null),[A,oe]=p.useState(null),[B,Z]=p.useState([]),[K,te]=p.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),ie=p.useRef([]),he=p.useRef(0),le=p.useRef(null),U=p.useRef(null),F=Math.floor(Date.now()/1e3),[ne,ye]=p.useState(0),we=c||A?.timing?.cosmic_origin_time||Date.now()/1e3-3600,Ee=F-we+ne;ce.current=Ee;const Ce=p.useCallback(()=>{if(!_.current||!M.current||!R.current)return;const h=_.current,y=h.clientWidth||400,m=h.clientHeight||400;M.current.setSize(y,m),R.current.aspect=y/m,R.current.updateProjectionMatrix()},[]),Pe=async h=>{if(!(!S.current||!w.current||!U.current)){re.log("Applying modular effects from API data",{planet:h.planet_info.name,type:h.planet_info.type});try{He();const y=Ie(h);U.current.updateBaseColor(y),console.log("🎨 Updated PlanetLayerSystem base color:",y);const m=Ae.createEffectsFromPythonPlanetData(h,Te,S.current,w.current,U.current);Z(m),ie.current=m,v&&v(m),re.log(`Successfully applied ${m.length} modular effects`),Ze()}catch(y){re.error("Error applying modular effects",y),je()}}},We=p.useCallback(()=>{if(!_.current)return!1;try{for(;_.current.firstChild;)_.current.removeChild(_.current.firstChild);w.current=null,R.current=null,M.current=null,S.current=null,z.current=null;const h=_.current,y=h.clientWidth||t||400,m=h.clientHeight||i||400,x=new qt;x.background=new f(1297),w.current=x;const L=new Jt(45,y/m,.1,1e4),P=xt();console.log("🎯 Camera distance for exact Pillow proportions:",P),L.position.set(0,0,P),L.lookAt(0,0,0),R.current=L;const E=new Qt({antialias:!0,alpha:!0,powerPreference:"high-performance"});return E.setSize(y,m),E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.shadowMap.enabled=!0,E.shadowMap.type=ei,E.toneMapping=ti,E.toneMappingExposure=1.2,E.outputColorSpace=ii,_.current.appendChild(E.domElement),M.current=E,Nt(x,null),Tt(x),n&&It(L,E.domElement),!0}catch(h){return console.error("Error initializing Three.js:",h),!1}},[A,r,c]),$e=h=>{if(!h)return 0;const y=h.sun_angle||h.lighting?.sun_angle;if(y!==void 0)return y;const m=h.timing?.current_orbital_angle||h.timing?.orbital_angle;return m??0},se=p.useRef(null),Me=p.useRef(null),me=p.useRef(null),z=p.useRef(null),At=h=>{h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=.5,h.shadow.camera.far=50,h.shadow.camera.left=-10,h.shadow.camera.right=10,h.shadow.camera.top=10,h.shadow.camera.bottom=-10},it=h=>{if(!se.current||!w.current)return;const y=$e(h),m=10,x=y+Math.PI,L=Math.sin(y)*5,P=m*Math.cos(x),E=L,ue=m*Math.sin(x);se.current.position.set(P,E,ue),se.current.target.position.set(0,0,0),w.current.children.includes(se.current.target)||w.current.add(se.current.target),Me.current&&Me.current.position.set(-P*.5,0,-ue*.5),U.current&&se.current&&U.current.updateFromThreeLight(se.current)},Nt=(h,y)=>{{const m=new ht(16777215,2);m.position.set(-10,5,10),m.target.position.set(0,0,0),m.castShadow=!0,At(m),h.add(m),h.add(m.target),se.current=m;const x=new ht(16777215,.05);x.position.set(8,-3,-5),h.add(x),Me.current=x;const L=new oi(2236996,.1);h.add(L),setTimeout(()=>{U.current&&m&&(U.current.updateFromThreeLight(m),console.log("🌞 Initial PlanetLayerSystem light synced"))},50);return}},Tt=h=>{console.log("🪐 Creating normalized planet with PlanetLayerSystem, radius:",Te);const y=new Ve(Te,128,64),m=new St({color:8421504}),x=new ge(y,m);x.castShadow=!0,x.receiveShadow=!0,x.position.set(0,0,0),h.add(x),S.current=x;const L=new f(8421504);U.current=new De(x,L),U.current.addToScene(h),console.log("✅ Planet created with PlanetLayerSystem - ShaderMaterial from start"),setTimeout(()=>{x.material instanceof ee?console.log("🎯 Found ShaderMaterial on planet"):console.log("🚨 PROBLEMA ENCONTRADO: Planeta usa",x.material.constructor.name)},100)},It=(h,y)=>{const m=new ni(h,y);m.enableDamping=!0,m.dampingFactor=.05;const x=xt();m.minDistance=x*.8,m.maxDistance=x*3,m.autoRotate=s,m.autoRotateSpeed=.5,m.enablePan=!0,m.enableZoom=!0,m.target.set(0,0,0),C.current=m},Rt=p.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{b(!0),Y(null),re.log("Loading planet data from API",{planetName:o});const y=await fetch("/api/planet/rendering-data");if(!y.ok)throw new Error(`HTTP error! status: ${y.status}`);const m=await y.json();if(!m.success)throw new Error(m.error||"Failed to fetch planet data");const x=m.planet_data,L=m.timing,P=m.rendering_data,E={planet_info:P?.planet_info||{name:x.name,type:x.planet_type,base_color:"#808080",radius:x.diameter/15e3},surface_elements:P?.surface_elements,atmosphere:P?.atmosphere,rings:P?.rings,effects_3d:P?.effects_3d,shader_uniforms:P?.shader_uniforms,universal_actions:P?.universal_actions,timing:{cosmic_origin_time:L.cosmic_origin_time,current_time_seconds:L.current_time_seconds,elapsed_time:L.elapsed_time,initial_orbital_angle:x.initial_orbital_angle,current_orbital_angle:x.current_orbital_angle,max_orbital_radius:L.max_orbital_radius,system_max_orbital_radius:x.system_max_orbital_radius},original_planet_data:x};return oe(E),O.current=E,re.log("API data loaded successfully",{planet:E.planet_info.name,type:E.planet_info.type,hasEffects:!!E.surface_elements,fullRenderingData:P}),console.log("🌍 Planet API Response:",m),console.log("🎨 Rendering Data:",P),console.log("🔧 Processed Data:",E),u&&u(E),E}catch(h){const y=h instanceof Error?h.message:"Unknown error";return Y(y),g&&g(y),null}finally{b(!1),window.isLoadingPlanetData=!1}}},[o,u,g]);p.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{b(!0),Y(null),re.log("Loading planet data from API",{planetName:o});const y=await fetch("/api/planet/rendering-data");if(!y.ok)throw new Error(`HTTP error! status: ${y.status}`);const m=await y.json();if(!m.success)throw new Error(m.error||"Failed to fetch planet data");const x=m.planet_data,L=m.timing,P=m.rendering_data,E={planet_info:P?.planet_info||{name:x.name,type:x.planet_type,base_color:"#808080",radius:x.diameter/15e3},surface_elements:P?.surface_elements,atmosphere:P?.atmosphere,rings:P?.rings,effects_3d:P?.effects_3d,shader_uniforms:P?.shader_uniforms,universal_actions:P?.universal_actions,timing:{cosmic_origin_time:L.cosmic_origin_time,current_time_seconds:L.current_time_seconds,elapsed_time:L.elapsed_time,initial_orbital_angle:x.initial_orbital_angle,current_orbital_angle:x.current_orbital_angle,max_orbital_radius:L.max_orbital_radius,system_max_orbital_radius:x.system_max_orbital_radius},original_planet_data:x};oe(E),O.current=E,re.log("API data loaded successfully",{planet:E.planet_info.name,type:E.planet_info.type,hasEffects:!!E.surface_elements,fullRenderingData:P}),console.log("🌍 Full Load - API Response:",m),console.log("🎨 Full Load - Rendering Data:",P),console.log("🔧 Full Load - Processed Data:",E),it(E),z.current&&w.current&&(w.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Pe(E),u&&u(E)}catch(h){const y=h instanceof Error?h.message:"Unknown error";Y(y),g&&g(y),je()}finally{b(!1),window.isLoadingPlanetData=!1}}},[o,r,c,d]);const ot=p.useCallback(()=>{if(!A||!S.current)return;const h=r?.orbital_period_seconds||365.25*24*3600,y=2*Math.PI/h,m=A.timing?.initial_orbital_angle||0,x=Date.now()/1e3,L=0,P=c||A.timing?.cosmic_origin_time||Date.now()/1e3-3600,E=x-P+L,ue=(m+E*y)%(2*Math.PI),Ke=A.timing?.max_orbital_radius||100,Fe=20+A.planet_info?.orbital_radius/Ke*80,Dt=Fe,Ot=Fe*Math.cos(ue),jt=Dt*Math.sin(ue);S.current.position.x=Ot,S.current.position.z=jt,S.current.position.y=0},[A,r,c]),Lt=p.useCallback(async h=>{const y=h||A;if(y&&w.current)try{it(y),z.current&&w.current&&(w.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Pe(y)}catch(m){re.error("Error in applyProceduralShadersFromAPI:",m),je()}},[A]),je=()=>{if(!(!w.current||!S.current)){re.warn("Applying fallback effects for planet type:",r?.planet_type);try{He(),S.current.material instanceof be&&(S.current.material.color.setHex(6710886),console.log("⚠️ Applied fallback generic color - API should provide real colors"));try{const h=Li("generic"),y=Ae.createEffectsFromList(h,Te,S.current);y.forEach(m=>{m.effect.addToScene&&w.current&&S.current&&m.effect.addToScene(w.current,S.current.position)}),ie.current=y,Z(y)}catch(h){console.warn("Could not create fallback effects, using basic material only:",h)}Ze()}catch(h){re.error("Error applying fallback effects",h)}}},He=()=>{ie.current.forEach(h=>{try{h.effect.dispose&&h.effect.dispose()}catch{}}),ie.current=[],Z([])},st=p.useCallback(()=>{q.current=requestAnimationFrame(st);const h=performance.now(),y=X.current.getDelta();C.current&&C.current.update();try{Ae.updateAllEffects(y,S.current?.rotation.y)}catch{}if(S.current&&O.current){O.current.planet_info?.name;const m=O.current.original_planet_data,x=m?.orbital_period_seconds||365.25*24*3600,L=O.current.timing?.initial_orbital_angle||0;c||O.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const P=m?.axial_tilt||0,E=2*Math.PI/x;(L+ce.current*E)%(2*Math.PI);const ue=O.current.timing?.max_orbital_radius||O.current.timing?.system_max_orbital_radius,Ke=m?.orbital_radius;if(!ue||!Ke)return;m?.eccentricity_factor,S.current.position.set(0,0,0);const at=m?.rotation_period_seconds||86400,Fe=2*Math.PI/at;S.current.rotation.y=ce.current*Fe%(2*Math.PI),S.current.rotation.z=P*(Math.PI/180)}if(ie.current.forEach(m=>{m.effect.updateUniforms&&m.effect.updateUniforms(y)}),M.current&&w.current&&R.current){const m=performance.now();M.current.render(w.current,R.current);const x=performance.now()-m;if(h-he.current>5e3){const L=1e3/(h-he.current);Ze(),te(P=>({...P,frameRate:Math.round(L),renderTime:Math.round(x*100)/100})),he.current=h}}},[]),Ze=p.useCallback(()=>{const h=Ae.getStats();te(y=>({...y,activeEffects:h.activeEffects,enabledEffects:h.enabledEffects}))},[]);return p.useEffect(()=>{let h=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!h)return;const m=await Rt();if(!h)return;if(!We()){h&&Y("Failed to initialize 3D renderer");return}if(!h||(st(),_.current&&"ResizeObserver"in window&&(le.current=new ResizeObserver(Ce),le.current.observe(_.current)),window.addEventListener("resize",Ce),!h))return;m?await Lt(m):je()}catch(m){h&&Y(m instanceof Error?m.message:"Unknown initialization error")}})(),()=>{if(h=!1,O.current=null,q.current&&cancelAnimationFrame(q.current),le.current&&le.current.disconnect(),window.removeEventListener("resize",Ce),He(),U.current&&(U.current.dispose(),U.current=null),C.current&&C.current.dispose(),me.current&&w.current&&(w.current.remove(me.current),me.current.geometry.dispose(),me.current.material.dispose(),me.current=null),z.current&&w.current&&(w.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),M.current&&_.current)try{_.current.contains(M.current.domElement)&&_.current.removeChild(M.current.domElement),M.current.dispose()}catch{}}},[]),p.useEffect(()=>{const h=setInterval(()=>{const y=Ae.getStats();te(m=>({...m,activeEffects:y.activeEffects,enabledEffects:y.enabledEffects}))},1e4);return()=>clearInterval(h)},[]),p.useEffect(()=>{A&&w.current&&S.current&&ot()},[A,ot]),Oi(A),a.jsxs("div",{className:`relative ${e}`,children:[l&&A&&a.jsx(Di,{planetData:A,showInPage:!0,showInConsole:!0}),a.jsx("div",{ref:_,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),de&&a.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:a.jsxs("div",{className:"text-white text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),a.jsx("div",{children:"Loading planet..."})]})}),H&&a.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[a.jsx("strong",{children:"Error:"})," ",H]}),A&&!de&&a.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[a.jsx("h3",{className:"text-lg font-bold",children:A.planet_info.name}),a.jsx("p",{className:"text-sm opacity-80",children:A.planet_info.type}),a.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[B.length," effects active"]}),A.surface_elements?.description&&a.jsx("p",{className:"text-xs mt-2 opacity-60",children:A.surface_elements.description.appearance})]}),l&&a.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[a.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),a.jsxs("div",{children:["Frame Rate: ",K.frameRate," FPS"]}),a.jsxs("div",{children:["Render Time: ",K.renderTime,"ms"]}),a.jsxs("div",{children:["Active Effects: ",K.activeEffects]}),a.jsxs("div",{children:["Enabled Effects: ",K.enabledEffects]}),a.jsxs("div",{className:"mt-2",children:[a.jsx("div",{className:"font-semibold",children:"Effects:"}),B.map(h=>a.jsxs("div",{className:"ml-2",children:[h.type," (",h.enabled?"ON":"OFF",")"]},h.id))]})]})]})};class Fi extends _t.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?a.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:a.jsxs("div",{className:"text-center p-4",children:[a.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),a.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const ki=o=>a.jsx(Fi,{children:a.jsx(ji,{...o})}),zi=({planetUrl:o,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:s})=>{const n=p.useRef(null),l=p.useRef(null),[r,c]=p.useState("Aligning Stargate..."),[d,u]=p.useState(!1),[v,g]=p.useState(!1),[_,w]=p.useState(!1),[M,R]=p.useState(!0),[S,C]=p.useState(!0),[X,q]=p.useState(null),[ce,O]=p.useState(null);p.useEffect(()=>{const b=document.createElement("style");return b.textContent=`
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
    `,document.head.appendChild(b),()=>{document.head.removeChild(b)}},[]),p.useEffect(()=>{const b=n.current;if(!b)return;const H=b.getContext("2d");if(!H)return;let Y=[];const A=800;let oe,B;const Z=800;let K,te=.5;function ie(){const F=b?.parentElement;if(!F||!b)return;const ne=F.clientWidth,ye=F.clientHeight;b.width=Math.min(ne,Z),b.height=Math.min(ye,Z),oe=b.width/2,B=b.height/2}function he(){ie(),Y=[];for(let F=0;F<A;F++)Y.push({x:Math.random()*(b?.width||800),y:Math.random()*(b?.height||800),z:Math.random()*(b?.width||800),o:Math.random()});le()}function le(){!b||!H||(H.clearRect(0,0,b.width,b.height),Y.forEach(F=>{F.z-=te,F.z<=0&&(F.z=b.width,F.x=Math.random()*b.width,F.y=Math.random()*b.height,F.o=Math.random());const ne=b.width/F.z,ye=(F.x-oe)*ne+oe,we=(F.y-B)*ne+B,Ee=2*ne;H.beginPath(),H.fillStyle=`rgba(255, 255, 255, ${F.o})`,H.arc(ye,we,Ee,0,2*Math.PI),H.fill()}),te<60&&(te+=1),K=requestAnimationFrame(le))}he();const U=()=>ie();return window.addEventListener("resize",U),()=>{window.removeEventListener("resize",U),K&&cancelAnimationFrame(K)}},[]),p.useEffect(()=>{if(e&&!M){const b=new Image;b.onload=()=>{l.current&&(l.current.src=e,g(!0),w(!0))},b.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{g(!0),w(!0)},1500)},b.src=e}else(M||!e)&&setTimeout(()=>{g(!0),w(!0)},1500)},[e,M]),p.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){c("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),u(!0);const H=(Z,K)=>Array.from({length:K},()=>Z[Math.floor(Math.random()*Z.length)]).join(""),Y=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let A=0,oe=0;const B=()=>{if(A>=Y.length){const K="Stargate system aligned";let te=0;c("");const ie=()=>{te<K.length?(c(K.substring(0,te+1)),te++,setTimeout(ie,30)):u(!1)};ie();return}const Z=Y[A];c(H(Z.chars,32)),oe++,oe>=Z.iterations&&(A++,oe=0),setTimeout(B,Z.duration)};B()},[]);const de=()=>{R(!M),M||(g(!0),w(!0))};return a.jsxs("div",{className:"h-full flex flex-col",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),S&&a.jsx("div",{className:"flex items-center gap-2",children:a.jsx("button",{onClick:de,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${M?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:M?"2D View":"3D View"})})]}),a.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[a.jsx("canvas",{ref:n,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${_?"opacity-0":"opacity-100"}`,style:{filter:_?"blur(50px)":"none"}}),M&&v&&t&&a.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${v?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:a.jsx(ki,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:s,onDataLoaded:b=>{q(b)},onError:b=>{O(b),console.error("❌ Planet rendering error:",b)}})}),!M&&a.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${v?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:v&&e?a.jsx("div",{className:"w-full h-full flex items-center justify-center",children:a.jsx(Yt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:a.jsx("img",{ref:l,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):a.jsx("img",{ref:l,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),S&&a.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:M?"🌍 3D":"🖼️ 2D"})]}),a.jsxs("div",{className:"text-center mt-auto",children:[a.jsxs("a",{href:o,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${d?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[a.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[a.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),r]}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),a.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",M&&X&&a.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",X.planet_info?.type," Planet",X.atmosphere&&a.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),X.rings?.has_rings&&a.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),M&&ce&&a.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Ui=({currentPlanet:o,system:e,galaxy:t,systemPlanets:i})=>{const[s,n]=p.useState(null),[l,r]=p.useState(null),[c,d]=p.useState(!1),[u,v]=p.useState(!1),[g,_]=p.useState(!0);p.useEffect(()=>{if(i&&i.length>0){const R=i.findIndex(S=>S.name.toLowerCase()===o.toLowerCase());R!==-1?(R>0?(n(i[R-1].name.toLowerCase()),d(!0)):e.index>0?(n("__prev_system__"),d(!0)):d(!1),R<i.length-1?(r(i[R+1].name.toLowerCase()),v(!0)):(r("__next_system__"),v(!0))):(d(!1),v(!1))}else d(!1),v(!1);_(!1)},[o,e.index,i]);const w=async()=>{const R=t.coordinates.join(",");if(s==="__prev_system__")try{const S=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(S.ok){const C=await S.json();if(C.system&&C.system.planets&&C.system.planets.length>0){const q=C.system.planets[C.system.planets.length-1].name.toLowerCase();Ne(R,e.index-1,q,C.system.planets),Je(R,e.index-1),window.location.href=`/planet/${q}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else s&&(Ne(R,e.index,s,i),window.location.href=`/planet/${s}`)},M=async()=>{const R=t.coordinates.join(",");if(l==="__next_system__")try{const S=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(S.ok){const C=await S.json();if(C.system&&C.system.planets&&C.system.planets.length>0){const q=C.system.planets[0].name.toLowerCase();Ne(R,e.index+1,q,C.system.planets),Je(R,e.index+1),window.location.href=`/planet/${q}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(Ne(R,e.index,l,i),window.location.href=`/planet/${l}`)};return g?null:a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("button",{onClick:w,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:a.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),a.jsx("button",{onClick:M,disabled:!u,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${u?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:a.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Yi=({planet:o,system:e,galaxy:t,planet_url:i,version:s,image_url:n,cosmic_origin_time:l,initial_angle_rotation:r})=>{const[c]=p.useState(t.coordinates.join(","));p.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",o.name.toLowerCase()),Ne(c,e.index,o.name,e.planets||[]),Je(c,e.index)},[c,e.index,o.name]);const d=g=>g.replace(/_/g," "),u=g=>g.replace(/_/g," "),v=g=>g.replace(/_/g," ");return a.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[a.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),a.jsxs("div",{className:"relative z-10",children:[a.jsx(zt,{}),a.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:a.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",d(o.name),"'"]})}),a.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",u(e.name),"' - Galaxy '",v(t.name),"'"]}),a.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),a.jsx(Ui,{currentPlanet:o.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),a.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:a.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[a.jsx("div",{className:"order-1 lg:order-1",children:a.jsx(zi,{planetUrl:i,imageUrl:n,planet:o,cosmicOriginTime:l,initialAngleRotation:r})}),a.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),a.jsx("div",{className:"order-2 lg:order-2",children:a.jsx(si,{planet:o,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:r})})]})}),a.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:a.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:a.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",u(e.name),"'"]})})})]}),a.jsx(Ft,{version:s})]}),a.jsx(Bt,{currentLocation:{type:"planet",name:o.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:o.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const o=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!o||!e||!t||!i){console.error("Missing required data elements");return}const s=JSON.parse(o.textContent||"{}"),n=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),r=JSON.parse(i.textContent||"{}"),c={planet:s,system:n,galaxy:l,planet_url:r.planet_url,version:r.version,image_url:r.image_url,cosmic_origin_time:r.cosmic_origin_time,initial_angle_rotation:r.initial_angle_rotation},d=document.getElementById("atlas-react-root");d&&kt.createRoot(d).render(_t.createElement(Yi,c))}catch(o){console.error("Error initializing Planet React app:",o)}});
