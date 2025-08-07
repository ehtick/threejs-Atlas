import{r as p,j as o,R as ot,V as mt,c as ft}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as pt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as gt,U as yt,m as ye,c as Fe,a as vt}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as bt,V as M,n as he,T as le,Q as Ze,l as Xe,o as U,R as xt,p as _t,q as wt,e as de,r as K,s as ee,N as Ct,t as it,C as m,c as ae,d as J,u as at,v as Ve,G as rt,w as je,F as St,x as Ke,L as Oe,g as Be,M as Ne,y as Pt,z as Mt,H as Et,I as jt,S as Nt,P as At,W as Tt,J as Rt,K as kt,O as It,D as qe,A as Dt}from"./atlas_ZgUbUwm-J4U4iRNwqY-vk.js";const zt=({planet:i,system:e,galaxy:t,cosmicOriginTime:s,initialAngleRotation:a})=>{const[n,l]=p.useState(!1),r=g=>g.replace(/_/g," "),c=g=>{const _=g/86400;return _<30?`${_.toFixed(2)} days`:_<365?`${(_/30).toFixed(2)} months`:`${(_/365).toFixed(2)} years`},h=g=>{const _=g*9/5+32;return`${g.toFixed(1)}°C (${_.toFixed(1)}°F)`},u=g=>`${g.toExponential(2)} kg`,P=g=>g>=1e3?`${(g/1e3).toFixed(2)} km`:`${g.toFixed(2)} m`;return o.jsxs("div",{className:"h-full flex flex-col relative",children:[o.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),o.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),o.jsx(gt,{type:"planet",name:i.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:i.name,className:"text-xs"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),o.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:i.planet_type})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),o.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:i.atmosphere})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),o.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:i.life_forms})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:u(i.mass)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:P(i.diameter)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[i.density.toFixed(2)," kg/m³"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[i.gravity.toFixed(2)," m/s²"]})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[i.orbital_radius.toFixed(2)," AU"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),o.jsx("div",{className:"text-xs font-bold text-cyan-300",children:c(i.orbital_period_seconds)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[i.orbital_speed.toFixed(2)," m/s"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[i.axial_tilt.toFixed(2),"°"]})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),o.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:h(i.surface_temperature)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:c(i.rotation_period_seconds)})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",i.elements.length,")"]}),i.elements.length>4&&o.jsx("button",{onClick:()=>l(!n),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:n?"▲ Less":"▼ All"})]}),o.jsx("div",{className:"flex flex-wrap gap-1",children:(n?i.elements:i.elements.slice(0,4)).map((g,_)=>o.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:g},_))})]})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[o.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Status:"}),o.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Planet:"}),o.jsx("div",{className:"text-white truncate font-medium",children:r(i.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System:"}),o.jsx("div",{className:"text-white truncate font-medium",children:r(e.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System ID:"}),o.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),o.jsx("div",{className:"text-white truncate font-medium",children:r(t.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),o.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},Qe={type:"change"},We={type:"start"},nt={type:"end"},Ee=new xt,Je=new _t,Lt=Math.cos(70*wt.DEG2RAD),k=new M,V=2*Math.PI,j={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Le=1e-6;class Ft extends bt{constructor(e,t=null){super(e,t),this.state=j.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:he.ROTATE,MIDDLE:he.DOLLY,RIGHT:he.PAN},this.touches={ONE:le.ROTATE,TWO:le.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new Ze,this._lastTargetPosition=new M,this._quat=new Ze().setFromUnitVectors(e.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xe,this._sphericalDelta=new Xe,this._scale=1,this._panOffset=new M,this._rotateStart=new U,this._rotateEnd=new U,this._rotateDelta=new U,this._panStart=new U,this._panEnd=new U,this._panDelta=new U,this._dollyStart=new U,this._dollyEnd=new U,this._dollyDelta=new U,this._dollyDirection=new M,this._mouse=new U,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bt.bind(this),this._onPointerDown=Ot.bind(this),this._onPointerUp=Vt.bind(this),this._onContextMenu=Zt.bind(this),this._onMouseWheel=Ut.bind(this),this._onKeyDown=Yt.bind(this),this._onTouchStart=Ht.bind(this),this._onTouchMove=$t.bind(this),this._onMouseDown=Wt.bind(this),this._onMouseMove=Gt.bind(this),this._interceptControlDown=Xt.bind(this),this._interceptControlUp=Kt.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qe),this.update(),this.state=j.NONE}update(e=null){const t=this.object.position;k.copy(t).sub(this.target),k.applyQuaternion(this._quat),this._spherical.setFromVector3(k),this.autoRotate&&this.state===j.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=V:s>Math.PI&&(s-=V),a<-Math.PI?a+=V:a>Math.PI&&(a-=V),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=l!=this._spherical.radius}if(k.setFromSpherical(this._spherical),k.applyQuaternion(this._quatInverse),t.copy(this.target).add(k),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const r=k.length();l=this._clampDistance(r*this._scale);const c=r-l;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),n=!!c}else if(this.object.isOrthographicCamera){const r=new M(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=c!==this.object.zoom;const h=new M(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(r),this.object.updateMatrixWorld(),l=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Ee.origin.copy(this.object.position),Ee.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ee.direction))<Lt?this.object.lookAt(this.target):(Je.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ee.intersectPlane(Je,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>Le||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Le||this._lastTargetPosition.distanceToSquared(this.target)>Le?(this.dispatchEvent(Qe),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?V/60*this.autoRotateSpeed*e:V/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){k.setFromMatrixColumn(t,0),k.multiplyScalar(-e),this._panOffset.add(k)}_panUp(e,t){this.screenSpacePanning===!0?k.setFromMatrixColumn(t,1):(k.setFromMatrixColumn(t,0),k.crossVectors(this.object.up,k)),k.multiplyScalar(e),this._panOffset.add(k)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;k.copy(a).sub(this.target);let n=k.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/s.clientHeight,this.object.matrix),this._panUp(2*t*n/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,n=t-s.top,l=s.width,r=s.height;this._mouse.x=a/l*2-1,this._mouse.y=-(n/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(V*this._rotateDelta.x/t.clientHeight),this._rotateUp(V*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,n=Math.sqrt(s*s+a*a);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),n=.5*(e.pageY+s.y);this._rotateEnd.set(a,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(V*this._rotateDelta.x/t.clientHeight),this._rotateUp(V*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,n=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(l,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new U,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Ot(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Bt(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Vt(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nt),this.state=j.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Wt(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=j.DOLLY;break;case he.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=j.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=j.ROTATE}break;case he.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=j.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=j.PAN}break;default:this.state=j.NONE}this.state!==j.NONE&&this.dispatchEvent(We)}function Gt(i){switch(this.state){case j.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case j.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case j.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ut(i){this.enabled===!1||this.enableZoom===!1||this.state!==j.NONE||(i.preventDefault(),this.dispatchEvent(We),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(nt))}function Yt(i){this.enabled!==!1&&this._handleKeyDown(i)}function Ht(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case le.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=j.TOUCH_ROTATE;break;case le.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=j.TOUCH_PAN;break;default:this.state=j.NONE}break;case 2:switch(this.touches.TWO){case le.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=j.TOUCH_DOLLY_PAN;break;case le.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=j.TOUCH_DOLLY_ROTATE;break;default:this.state=j.NONE}break;default:this.state=j.NONE}this.state!==j.NONE&&this.dispatchEvent(We)}function $t(i){switch(this._trackPointer(i),this.state){case j.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case j.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case j.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case j.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=j.NONE}}function Zt(i){this.enabled!==!1&&i.preventDefault()}function Xt(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kt(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class et{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class lt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:s,ring_inner_radius:a,ring_outer_radius:n,tilt_factor:l,planet_radius:r,shape_seed:c}=e;if(!t||!s){console.warn("No ring data provided");return}const h=[...t.particles,...s.particles],u=h.length,P=new et(c||12345),g=new de,_=new Float32Array(u*3),C=new Float32Array(u*3),x=new Float32Array(u),v=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],b=P.choice(v);for(let S=0;S<u;S++){const I=h[S],z=this.planetRadius/(r||200),re=(c||12345)+S,F=new et(re),te=I.distance*z,w=I.angle,N=te*Math.sin(w),H=Math.asin((l||.2)*.5),$=N*Math.sin(H),W=N*Math.cos(H),D=((n||400)-(a||200))*z*.4,O=F.uniform(-D*.8,D*.8),L=F.uniform(-D*.3,D*.3),G=F.uniform(-.08,.08),Y=te+L,se=w+G;_[S*3]=Y*Math.cos(se),_[S*3+1]=$+O+this.planetRadius*.15,_[S*3+2]=W+F.uniform(-D*.4,D*.4),I.color[0]/255;const ne=(I.distance-(a||200))/((n||400)-(a||200)),T=b.baseGray,B=b.variation,q=F.uniform(-B,B),Z=Math.max(.12,Math.min(.45,T+q)),X=.8+ne*.4,Ae=F.uniform(.85,1.15),Pe=F.uniform(0,1),Te=Pe<.03?F.uniform(1.1,1.3):1,Re=Z*X*Ae*Te,me=Math.max(.1,Math.min(.55,Re));C[S*3]=me,C[S*3+1]=me,C[S*3+2]=me;const ke=.15,Ie=F.uniform(.3,.7),fe=Pe<.1?F.uniform(1.05,1.2):1;x[S]=I.size*ke*Ie*fe}g.setAttribute("position",new K(_,3)),g.setAttribute("color",new K(C,3)),g.setAttribute("size",new K(x,1)),this.material=new ee({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Ct}),this.ringSystem=new it(g,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const s=t.rotation_period_seconds||86400,a=t.cosmicOriginTime||Date.now()/1e3,n=t.initialAngleRotation||0,r=Date.now()/1e3-a,c=2*Math.PI/s,h=(n+r*c)%(2*Math.PI);this.ringSystem.rotation.y=h}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function qt(i,e){const t={full_ring:i.full_ring,ontop_ring:i.ontop_ring,ring_inner_radius:i.ring_inner_radius,ring_outer_radius:i.ring_outer_radius,tilt_factor:i.tilt_factor,planet_radius:i.planet_radius,shape_seed:i.shape_seed};return new lt(e,t)}class tt{seed;constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}random(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return this.random()*(t-e)+e}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class ve{material;params;mesh;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;static fragmentShader=`
    uniform float time;
    uniform float seed;
    uniform vec3 planetColor;
    uniform vec3 bandColor;
    uniform vec3 stormColor;
    uniform float numBands;
    uniform float rotationAngle;
    uniform float bandPositions[20]; // Máximo 20 bandas como en Pillow
    uniform float bandWidths[20];
    uniform float animationSpeed;
    uniform float turbulence;
    uniform float stormIntensity;
    uniform float noiseScale;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    // Hash function para generar números pseudo-aleatorios
    float hash(float n) {
      return fract(sin(n + seed) * 43758.5453123);
    }
    
    // Función de ruido simple
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
    
    // Ruido fractal para más detalle
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
    
    // Crear bandas de nubes EXACTAMENTE como en Pillow
    float createCloudBands(vec3 pos) {
      float bands = 0.0;
      
      // Las bandas son HORIZONTALES (latitud constante) de polo norte a sur
      // pos.y ya está normalizado de -1 (polo sur) a +1 (polo norte)
      float currentY = pos.y;
      float currentX = pos.x; // Para rotación
      
      // Aplicar rotación EXACTAMENTE como en Pillow
      float cosAngle = cos(rotationAngle);
      float sinAngle = sin(rotationAngle);
      
      // Rotación en coordenadas normalizadas
      float rotatedY = sinAngle * currentX + cosAngle * currentY;
      
      // Verificar si estamos dentro de alguna banda horizontal
      for(int i = 0; i < 20; i++) {
        if(float(i) >= numBands) break;
        
        float bandPosY = bandPositions[i]; // Ya normalizado entre -1 y 1
        float bandWidth = bandWidths[i];   // Ya normalizado
        
        // Verificar si rotatedY está dentro de esta banda
        float distToBand = abs(rotatedY - bandPosY);
        if(distToBand < bandWidth / 2.0) {
          // Suavizar bordes de las bandas
          float bandIntensity = 1.0 - (distToBand / (bandWidth / 2.0));
          
          // Añadir turbulencia a las bandas
          float turbulenceNoise = fbm(pos * noiseScale + vec3(time * animationSpeed * 0.1));
          bandIntensity *= (0.8 + 0.4 * turbulenceNoise * turbulence);
          
          bands += bandIntensity * 0.6;
        }
      }
      
      return clamp(bands, 0.0, 1.0);
    }
    
    // Crear sistemas de tormentas
    float createStorms(vec3 pos) {
      float storms = 0.0;
      
      // Tormentas rotatorias en zonas específicas
      vec2 stormCenters[3];
      stormCenters[0] = vec2(0.3, -0.2);
      stormCenters[1] = vec2(-0.4, 0.6);
      stormCenters[2] = vec2(0.1, 0.8);
      
      for(int i = 0; i < 3; i++) {
        vec2 stormCenter = stormCenters[i];
        float distToStorm = distance(pos.xy, stormCenter);
        
        if(distToStorm < 0.3) {
          // Crear vórtice rotatorio
          float angle = atan(pos.y - stormCenter.y, pos.x - stormCenter.x);
          float spiral = sin(angle * 8.0 + distToStorm * 20.0 - time * animationSpeed * 2.0);
          
          float stormIntensityValue = (1.0 - distToStorm / 0.3) * 0.8;
          stormIntensityValue *= (0.5 + 0.5 * spiral);
          stormIntensityValue *= stormIntensity;
          
          storms += stormIntensityValue;
        }
      }
      
      return clamp(storms, 0.0, 1.0);
    }
    
    // Crear variaciones de turbulencia atmosférica
    float createAtmosphericTurbulence(vec3 pos) {
      // Múltiples capas de ruido para crear turbulencia compleja
      float noise1 = fbm(pos * 3.0 + vec3(time * animationSpeed * 0.05));
      float noise2 = fbm(pos * 6.0 + vec3(time * animationSpeed * 0.1, time * animationSpeed * 0.05, 0.0));
      float noise3 = fbm(pos * 12.0 + vec3(0.0, time * animationSpeed * 0.2, time * animationSpeed * 0.1));
      
      return (noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2) * turbulence;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = planetColor;
      
      // Usar EXACTAS bandas de nubes de Pillow
      float bands = createCloudBands(pos);
      
      // Aplicar bandas naranjas EXACTAMENTE como en Pillow (255, 165, 0, 1)
      vec3 finalBandColor = bandColor * 1.2;
      color = mix(color, finalBandColor, bands * 0.8);
      
      // Añadir variación de tormentas (rojas) en ciertas zonas - como Pillow
      float storms = createStorms(pos);
      color = mix(color, stormColor, storms * 0.6);
      
      // Añadir turbulencia atmosférica general
      float atmosphericTurbulence = createAtmosphericTurbulence(pos);
      color = mix(color, color * 1.2, atmosphericTurbulence * 0.3);
      
      // Iluminación básica
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      color *= lighting;
      
      // Añadir efecto de terminador (día/noche)
      float terminator = smoothstep(-0.1, 0.1, dot(vNormal, lightDirection));
      color *= (0.3 + 0.7 * terminator);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new m(16753920),bandColor:t.bandColor||new m(16753920),stormColor:t.stormColor||new m(9109504),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,stormIntensity:t.stormIntensity||.7,noiseScale:t.noiseScale||4},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),s=new tt(12345);for(let a=0;a<e&&a<20;a++)t[a]=s.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),s=new tt(67890);for(let a=0;a<e&&a<20;a++)t[a]=s.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof m?this.params.baseColor:new m(this.params.baseColor),t=this.params.bandColor instanceof m?this.params.bandColor:new m(this.params.bandColor),s=this.params.stormColor instanceof m?this.params.stormColor:new m(this.params.stormColor);return new ee({vertexShader:ve.vertexShader,fragmentShader:ve.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},stormColor:{value:s},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},stormIntensity:{value:this.params.stormIntensity},noiseScale:{value:this.params.noiseScale}}})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){if(this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.baseColor){const t=e.baseColor instanceof m?e.baseColor:new m(e.baseColor);this.material.uniforms.planetColor.value=t}if(e.bandColor){const t=e.bandColor instanceof m?e.bandColor:new m(e.bandColor);this.material.uniforms.bandColor.value=t}if(e.stormColor){const t=e.stormColor instanceof m?e.stormColor:new m(e.stormColor);this.material.uniforms.stormColor.value=t}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Qt(i,e){const t=e.cloud_bands||{},s={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new m(e.base_color):new m(16753920),animationSpeed:1,turbulence:e.turbulence||.5,stormIntensity:e.storm_intensity||.7};return new ve(i,s)}class be{mesh;material;geometry;params;static vertexShader=`
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    uniform vec3 glowColor;
    uniform float glowIntensity;
    uniform float glowFalloff;
    uniform float fresnelPower;
    uniform float time;
    uniform bool pulsation;
    uniform float pulsationSpeed;
    
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // Efecto Fresnel para el halo
      float fresnel = pow(1.0 - abs(dot(normal, viewDir)), fresnelPower);
      
      // Pulsación opcional
      float pulse = pulsation ? 
        (0.8 + 0.2 * sin(time * pulsationSpeed)) : 1.0;
      
      // Color del halo con gradiente
      vec3 color = glowColor * glowIntensity * fresnel * pulse;
      
      // Añadir variación de color en los bordes
      color += glowColor * 0.5 * pow(fresnel, 3.0);
      
      // Gradiente radial adicional
      float radialGradient = 1.0 - length(vWorldPosition.xz) * 0.1;
      color *= max(0.5, radialGradient);
      
      // Alpha con suavizado
      float alpha = fresnel * glowFalloff * pulse;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(e,t={}){this.params={color:t.color||new m(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsationSpeed||2,fresnelPower:t.fresnelPower||2},this.geometry=new ae(e*this.params.scale,64,64),this.material=this.createMaterial(),this.mesh=new J(this.geometry,this.material)}createMaterial(){const e=this.params.color instanceof m?this.params.color:new m(this.params.color);return new ee({vertexShader:be.vertexShader,fragmentShader:be.fragmentShader,uniforms:{glowColor:{value:e},glowIntensity:{value:this.params.intensity},glowFalloff:{value:this.params.falloff},fresnelPower:{value:this.params.fresnelPower},time:{value:0},pulsation:{value:this.params.pulsation},pulsationSpeed:{value:this.params.pulsationSpeed}},transparent:!0,blending:Ve,side:at,depthWrite:!1})}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof m?e.color:new m(e.color);this.material.uniforms.glowColor.value=t}e.intensity!==void 0&&(this.material.uniforms.glowIntensity.value=e.intensity),e.falloff!==void 0&&(this.material.uniforms.glowFalloff.value=e.falloff),e.pulsation!==void 0&&(this.material.uniforms.pulsation.value=e.pulsation),e.pulsationSpeed!==void 0&&(this.material.uniforms.pulsationSpeed.value=e.pulsationSpeed)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}class xe{particleSystem;material;geometry;params;particleCount;static vertexShader=`
    attribute float size;
    attribute vec3 customColor;
    attribute float speed;
    attribute float phase;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    
    uniform float time;
    uniform float turbulence;
    
    void main() {
      vColor = customColor;
      vSize = size;
      
      // Movimiento de las partículas con turbulencia
      vec3 pos = position;
      float timeWithPhase = time * speed + phase;
      
      pos.x += sin(timeWithPhase) * 0.1 * turbulence;
      pos.y += cos(timeWithPhase * 0.7) * 0.05 * turbulence;
      pos.z += sin(timeWithPhase * 0.5) * 0.08 * turbulence;
      
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
  `;constructor(e,t={}){this.params={color:t.color||new m(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new de,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new it(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),s=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),r=this.params.color instanceof m?this.params.color:new m(this.params.color);for(let c=0;c<this.particleCount;c++){const h=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1),P=e*(1+Math.random()*.1);t[c*3]=P*Math.sin(u)*Math.cos(h),t[c*3+1]=P*Math.sin(u)*Math.sin(h),t[c*3+2]=P*Math.cos(u),s[c*3]=r.r*(.8+Math.random()*.4),s[c*3+1]=r.g*(.8+Math.random()*.4),s[c*3+2]=r.b*(.8+Math.random()*.4),a[c]=this.params.size*(Math.random()*.5+.75),n[c]=this.params.speed*(Math.random()*.8+.6),l[c]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new K(t,3)),this.geometry.setAttribute("customColor",new K(s,3)),this.geometry.setAttribute("size",new K(a,1)),this.geometry.setAttribute("speed",new K(n,1)),this.geometry.setAttribute("phase",new K(l,1))}createMaterial(){return new ee({vertexShader:xe.vertexShader,fragmentShader:xe.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:Ve,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}class _e{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.5,.5,.8,.3],width:t.width||15,opacity:t.opacity||.3,density:t.density||1};const s=e*(1+this.params.width/100);this.geometry=new ae(s,32,32);const a=new m(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ee({vertexShader:_e.vertexShader,fragmentShader:_e.fragmentShader,uniforms:{atmosphereColor:{value:a},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Ve,side:at,depthWrite:!1}),this.mesh=new J(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new m(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function Jt(i,e){const t=e.halo||{},s={color:t.color?new m().setRGB(t.color[0],t.color[1],t.color[2]):new m(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsation_speed||2};return new be(i,s)}function es(i,e){const t=e.streaks||{},s={color:t.color?new m().setRGB(t.color[0],t.color[1],t.color[2]):new m(16777215),particleCount:t.count||100,speed:t.speed||1,size:2,opacity:.6,turbulence:1};return new xe(i,s)}function ts(i,e){let t=[.5,.5,.8,.15],s=15;e&&(e.color&&Array.isArray(e.color)&&(t=[e.color[0],e.color[1],e.color[2],e.color[3]*.5]),e.width&&(s=e.width));const a={type:e?.type||"Thin",color:t,width:s,opacity:t[3],density:1};return new _e(i,a)}class we{material;params;static vertexShader=`
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
  `;static fragmentShader=`
    uniform float time;
    uniform vec3 baseColor;
    uniform float roughness;
    uniform float metalness;
    uniform float fragmentationIntensity;
    uniform float noiseScale;
    uniform float noiseIntensity;
    uniform float edgeFragmentation;
    uniform float circularWaves;
    uniform float fogPatches;
    
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
          vec2 point = vec2(hash(vec3(id + neighbor, 0.0)), hash(vec3(id + neighbor, 1.0)));
          float dist = length(f - point);
          d = min(d, dist);
        }
      }
      
      return pow(1.0 - d, sharpness);
    }
    
    // PBR mejorado con más realismo
    vec3 calculatePBR(vec3 albedo, float metallic, float rough, vec3 normal, vec3 viewDir) {
      vec3 lightDir = normalize(vec3(1.0, 1.0, 0.5));
      vec3 halfwayDir = normalize(lightDir + viewDir);
      
      float NdotL = max(dot(normal, lightDir), 0.0);
      float NdotV = max(dot(normal, viewDir), 0.0);
      float NdotH = max(dot(normal, halfwayDir), 0.0);
      float VdotH = max(dot(viewDir, halfwayDir), 0.0);
      
      // Difuso Lambert
      vec3 diffuse = albedo * (1.0 - metallic) * NdotL / 3.14159;
      
      // Especular Cook-Torrance simplificado
      float alpha = rough * rough;
      float alpha2 = alpha * alpha;
      
      // Distribution (GGX)
      float denom = NdotH * NdotH * (alpha2 - 1.0) + 1.0;
      float D = alpha2 / (3.14159 * denom * denom);
      
      // Geometry (Schlick-GGX simplificado)
      float k = (rough + 1.0) * (rough + 1.0) / 8.0;
      float G1L = NdotL / (NdotL * (1.0 - k) + k);
      float G1V = NdotV / (NdotV * (1.0 - k) + k);
      float G = G1L * G1V;
      
      // Fresnel (Schlick)
      vec3 F0 = mix(vec3(0.04), albedo, metallic);
      vec3 F = F0 + (1.0 - F0) * pow(1.0 - VdotH, 5.0);
      
      // Especular final
      vec3 specular = (D * G * F) / max(4.0 * NdotL * NdotV, 0.001);
      
      // Fresnel para bordes metálicos
      float fresnel = pow(1.0 - NdotV, 2.0);
      vec3 fresnelColor = F0 * fresnel * metallic;
      
      return diffuse + specular + fresnelColor * 0.5;
    }
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // Base metálica con variaciones
      vec3 color = baseColor;
      
      // Añadir ruido para variaciones sutiles de superficie
      float surfaceNoise = noise3D(vPosition * noiseScale);
      color = mix(color, color * 0.7, surfaceNoise * noiseIntensity);
      
      // Factor de borde para efectos en los bordes
      float edgeFactor = 1.0 - abs(dot(normal, viewDir));
      
      // Fragmentación angular en los bordes
      if(edgeFactor > 0.6) {
        float fragmentation = angularCracks(vUv, 5.0 + fragmentationIntensity * 10.0, 2.0);
        color = mix(color, color * 0.3, fragmentation * edgeFactor * edgeFragmentation);
        
        // Añadir grietas más pronunciadas
        float cracks = angularCracks(vUv * 2.0, 8.0, 4.0);
        color = mix(color, color * 0.2, cracks * edgeFactor * 0.5 * edgeFragmentation);
      }
      
      // Ondas circulares sutiles en el interior
      if(circularWaves > 0.0) {
        float radialWaves = sin(length(vUv - 0.5) * 20.0 + time * 0.5) * 0.5 + 0.5;
        color = mix(color, color * 1.1, radialWaves * 0.1 * (1.0 - edgeFactor) * circularWaves);
      }
      
      // Manchas de neblina grisácea
      if(fogPatches > 0.0) {
        float fogNoise = fractal(vPosition * 3.0 + vec3(time * 0.1), 3);
        float fogMask = smoothstep(0.4, 0.6, fogNoise);
        color = mix(color, color * 1.2, fogMask * 0.2 * fogPatches);
      }
      
      // Calcular iluminación PBR
      vec3 finalColor = calculatePBR(color, metalness, roughness, normal, viewDir);
      
      // Añadir un toque de color oscuro para profundidad
      finalColor = mix(finalColor, finalColor * 0.5, pow(surfaceNoise, 2.0) * 0.3);
      
      // Efecto de terminador (transición día/noche)
      vec3 lightDir = normalize(vec3(1.0, 1.0, 0.5));
      float terminator = smoothstep(-0.2, 0.2, dot(normal, lightDir));
      finalColor *= (0.2 + 0.8 * terminator);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;constructor(e={}){this.params={color:e.color||new m(7368816),roughness:e.roughness||.7,metalness:e.metalness||.9,fragmentationIntensity:e.fragmentationIntensity||.5,noiseScale:e.noiseScale||8,noiseIntensity:e.noiseIntensity||.3,edgeFragmentation:e.edgeFragmentation||1,circularWaves:e.circularWaves||1,fogPatches:e.fogPatches||1},this.material=this.createMaterial()}createMaterial(){const e=this.params.color instanceof m?this.params.color:new m(this.params.color);return new ee({vertexShader:we.vertexShader,fragmentShader:we.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},roughness:{value:this.params.roughness},metalness:{value:this.params.metalness},fragmentationIntensity:{value:this.params.fragmentationIntensity},noiseScale:{value:this.params.noiseScale},noiseIntensity:{value:this.params.noiseIntensity},edgeFragmentation:{value:this.params.edgeFragmentation},circularWaves:{value:this.params.circularWaves},fogPatches:{value:this.params.fogPatches}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof m?e.color:new m(e.color);this.material.uniforms.baseColor.value=t}e.roughness!==void 0&&(this.material.uniforms.roughness.value=e.roughness),e.metalness!==void 0&&(this.material.uniforms.metalness.value=e.metalness),e.fragmentationIntensity!==void 0&&(this.material.uniforms.fragmentationIntensity.value=e.fragmentationIntensity),e.noiseScale!==void 0&&(this.material.uniforms.noiseScale.value=e.noiseScale),e.noiseIntensity!==void 0&&(this.material.uniforms.noiseIntensity.value=e.noiseIntensity),e.edgeFragmentation!==void 0&&(this.material.uniforms.edgeFragmentation.value=e.edgeFragmentation),e.circularWaves!==void 0&&(this.material.uniforms.circularWaves.value=e.circularWaves),e.fogPatches!==void 0&&(this.material.uniforms.fogPatches.value=e.fogPatches)}getMaterial(){return this.material}dispose(){this.material.dispose()}}class st{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new m(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new rt,this.generateFragments()}generateFragments(){const e=new je({color:this.params.color instanceof m?this.params.color:new m(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const s=this.generateFragmentGeometry(),a=new J(s,e);this.positionFragment(a,t),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const n=this.params.size*(Math.random()*.5+.75);a.scale.set(n,n,n),a.userData={rotationAxis:new M(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(a),this.fragments.add(a)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],s=[],a=[];a.push(new M(0,0,0));for(let r=0;r<e;r++){const c=r/e*Math.PI*2,h=Math.random()*.5+.5,u=(Math.random()-.5)*.3;a.push(new M(Math.cos(c)*h,Math.sin(c)*h,u))}for(let r=1;r<=e;r++){const h=a[r].clone();h.z+=Math.random()*.4+.2,a.push(h)}for(const r of a)t.push(r.x,r.y,r.z);for(let r=1;r<e;r++)s.push(0,r,r+1);s.push(0,e,1);const n=a.length-e-1;for(let r=0;r<e-1;r++)s.push(n,n+r+2,n+r+1);s.push(n,n+1,n+e);for(let r=0;r<e;r++){const c=r+1,h=(r+1)%e+1,u=c+e,P=h+e;s.push(c,u,h),s.push(h,u,P)}const l=new de;return l.setAttribute("position",new St(t,3)),l.setIndex(s),l.computeVertexNormals(),l}positionFragment(e,t){let s;switch(this.params.distribution){case"edge":s=this.generateEdgePosition(t);break;case"surface":s=this.generateSurfacePosition();break;case"random":default:s=this.generateRandomPosition();break}e.position.copy(s)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,s=this.planetRadius*(.95+Math.random()*.1),a=(Math.random()-.5)*this.planetRadius*.5;return new M(Math.cos(t)*s,a,Math.sin(t)*s)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),s=this.planetRadius*(1+Math.random()*.05);return new M(s*Math.sin(t)*Math.cos(e),s*Math.sin(t)*Math.sin(e),s*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,s=Math.random()*Math.PI*2;return new M(e*Math.sin(t)*Math.cos(s),e*Math.sin(t)*Math.sin(s),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,s)=>{const a=t.userData;t.rotateOnAxis(a.rotationAxis,a.rotationSpeed*e*this.params.animationSpeed);const n=Math.sin(Date.now()*.001+s)*.001;t.position.y+=n*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof m?e.color:new m(e.color);this.fragmentMeshes.forEach(s=>{s.material instanceof je&&(s.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof je&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Ke&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Ke&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class Ce{material;params;static vertexShader=`
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
    
    // Configuración de montañas
    uniform int mountainCount;
    uniform vec3 mountainPositions[30];  // [x, y, angle]
    uniform vec3 mountainSizes[30];      // [width, height, 0]
    uniform vec3 mountainColor;
    
    // Configuración de nubes
    uniform int cloudCount;
    uniform vec3 cloudPositions[10];     // [x, y, radius]
    uniform vec3 cloudColor;
    
    // Configuración de cráter
    uniform bool hasCrater;
    uniform vec3 craterPosition;         // [x, y, radius]
    uniform vec3 craterColor;
    
    // Configuración general
    uniform float baseTextureIntensity;
    
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
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = baseColor;
      
      // Textura base de terreno rocoso
      float landBase = noise(pos * 3.0) * baseTextureIntensity;
      color = mix(color, vec3(0.149, 0.149, 0.149), landBase * 0.3);
      
      // Variaciones de superficie más claras
      float landHighlight = noise(pos * 5.0) * baseTextureIntensity;
      color = mix(color, vec3(0.314, 0.314, 0.314), landHighlight * 0.1);
      
      // Renderizar montañas
      for(int i = 0; i < 30; i++) {
        if(i >= mountainCount) break;
        
        vec3 mountainPos = mountainPositions[i]; // [x, y, angle]
        vec3 mountainSize = mountainSizes[i];    // [width, height, 0]
        
        // Distancia al centro de la montaña
        float distToMountain = distance(pos.xy, mountainPos.xy);
        
        // Crear pico triangular de montaña
        if(distToMountain < mountainSize.x) {
          // Calcular altura basada en distancia - forma triangular
          float normalizedDist = distToMountain / mountainSize.x;
          float mountainHeight = (1.0 - normalizedDist) * mountainSize.y;
          
          if(mountainHeight > 0.0) {
            float mountainIntensity = mountainHeight * 2.0;
            color = mix(color, mountainColor, mountainIntensity * 0.9);
          }
        }
      }
      
      // Renderizar nubes
      for(int i = 0; i < 10; i++) {
        if(i >= cloudCount) break;
        
        vec3 cloudPos = cloudPositions[i]; // [x, y, radius]
        
        float distToCloud = distance(pos.xy, cloudPos.xy);
        
        if(distToCloud < cloudPos.z) {
          float cloudIntensity = 1.0 - (distToCloud / cloudPos.z);
          cloudIntensity = smoothstep(0.0, 1.0, cloudIntensity);
          
          color = mix(color, cloudColor, cloudIntensity * 0.8);
        }
      }
      
      // Renderizar cráter
      if(hasCrater) {
        float distToCrater = distance(pos.xy, craterPosition.xy);
        
        if(distToCrater < craterPosition.z) {
          float craterIntensity = 1.0 - (distToCrater / craterPosition.z);
          craterIntensity = smoothstep(0.0, 1.0, craterIntensity);
          
          // Efecto de borde para el cráter
          float rimEffect = 1.0 - abs(craterIntensity - 0.8) / 0.2;
          if(craterIntensity > 0.6 && craterIntensity < 1.0) {
            rimEffect = max(rimEffect, 0.0);
          } else {
            rimEffect = 0.0;
          }
          
          vec3 rimColor = vec3(0.4, 0.4, 0.4); // Color del borde más claro
          
          color = mix(color, craterColor, craterIntensity * 0.9);
          color = mix(color, rimColor, rimEffect * 0.5);
        }
      }
      
      // Iluminación básica
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      color *= lighting;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new m(.8,.8,.8),cloudColor:e.cloudColor||new m(.7,.7,.7),craterColor:e.craterColor||new m(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof m?this.params.mountainColor:new m(this.params.mountainColor),t=this.params.cloudColor instanceof m?this.params.cloudColor:new m(this.params.cloudColor),s=this.params.craterColor instanceof m?this.params.craterColor:new m(this.params.craterColor),a=new Array(30).fill(new M),n=new Array(30).fill(new M),l=new Array(10).fill(new M);return this.params.mountains&&this.params.mountains.forEach((r,c)=>{c<30&&(a[c]=new M(r.position[0],r.position[1],r.angle),n[c]=new M(r.width,r.height,0))}),this.params.clouds&&this.params.clouds.forEach((r,c)=>{c<10&&(l[c]=new M(r.position[0],r.position[1],r.radius))}),new ee({vertexShader:Ce.vertexShader,fragmentShader:Ce.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new m(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:a},mountainSizes:{value:n},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:l},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new M(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new M},craterColor:{value:s},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function ss(i){const e=i.surface_elements||i.surface||i;let t=[.8,.8,.8];const s=i.planet_info?.base_color||i.base_color;if(s&&typeof s=="string"){const c=s.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255]}else Array.isArray(s)&&(t=s);let a=[],n=[],l;if(i.seeds){const c=x=>{let v=x;return()=>(v=(v*1664525+1013904223)%4294967296,v/4294967296)},h=x=>{const v=x()*Math.PI*2,b=Math.acos(x()*2-1),S=Math.sin(b)*Math.cos(v),I=Math.sin(b)*Math.sin(v);return[S,I]},u=c(i.seeds.planet_seed),P=6+Math.floor(u()*4);for(let x=0;x<P;x++)a.push({position:h(u),width:.1+u()*.3,height:.2+u()*.6,angle:u()*Math.PI*2});const g=c(i.seeds.shape_seed+1e3),_=3+Math.floor(g()*4);for(let x=0;x<_;x++)n.push({position:h(g),radius:.08+g()*.17});const C=c(i.seeds.shape_seed+2e3);C()<.7&&(l={position:h(C),radius:.1+C()*.2})}const r={mountains:e.mountains?.length>0?e.mountains:a,clouds:e.clouds?.length>0?e.clouds:n,crater:e.crater||l,baseTextureIntensity:.4,mountainColor:new m(t[0]*1.1,t[1]*1.1,t[2]*1.1),cloudColor:new m(t[0]*.9,t[1]*.9,t[2]*.9),craterColor:new m(t[0]*.3,t[1]*.3,t[2]*.3)};return new Ce(r)}class Se{material;params;static vertexShader=`
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
    
    // Configuración de cristales
    uniform int crystalCount;
    uniform vec3 crystalPositions[50];   // [x, y, angle]
    uniform vec3 crystalSizes[50];       // [length, width, 0]
    uniform vec3 crystalColor;
    
    // Configuración de grietas
    uniform int crackCount;
    uniform vec2 crackAngles[12];        // [angle, length]
    uniform vec3 crackColor;
    
    // Configuración de casquetes polares
    uniform int iceCapCount;
    uniform vec3 iceCapPositions[4];     // [x, y, radius]
    uniform vec3 iceCapColor;
    
    // Configuración general
    uniform float baseTextureIntensity;
    
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
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = baseColor;
      
      // Textura base de terreno helado
      // Áreas azul-gris más sutiles
      float landBase = noise(pos * 2.0) * baseTextureIntensity;
      color = mix(color, vec3(0.494, 0.663, 0.839), landBase * 0.2);
      
      // Variaciones de superficie más claras y sutiles
      float landHighlight = noise(pos * 4.0) * baseTextureIntensity;
      color = mix(color, vec3(0.318, 0.416, 0.569), landHighlight * 0.02);
      
      // Renderizar cristales
      for(int i = 0; i < 50; i++) {
        if(i >= crystalCount) break;
        
        vec3 crystalPos = crystalPositions[i]; // [x, y, angle]
        vec3 crystalSize = crystalSizes[i];    // [length, width, 0]
        
        // Calcular distancia al centro del cristal
        float distToCrystal = distance(pos.xy, crystalPos.xy);
        
        // Crear forma de cristal usando longitud y ancho
        float crystalRadius = max(crystalSize.x, crystalSize.y);
        
        if(distToCrystal < crystalRadius) {
          // Crear forma rectangular de cristal con rotación
          float angle = crystalPos.z; // ángulo de rotación
          vec2 rotatedPos = pos.xy - crystalPos.xy;
          
          // Rotar la posición para alinear con la orientación del cristal
          float cosA = cos(angle);
          float sinA = sin(angle);
          vec2 aligned = vec2(
            rotatedPos.x * cosA + rotatedPos.y * sinA,
            -rotatedPos.x * sinA + rotatedPos.y * cosA
          );
          
          // Verificar si está dentro del rectángulo del cristal
          if(abs(aligned.x) < crystalSize.x && abs(aligned.y) < crystalSize.y) {
            float crystalIntensity = 1.0 - max(abs(aligned.x)/crystalSize.x, abs(aligned.y)/crystalSize.y);
            color = mix(color, crystalColor, crystalIntensity * 0.8);
          }
        }
      }
      
      // Renderizar grietas
      for(int i = 0; i < 12; i++) {
        if(i >= crackCount) break;
        
        vec2 crackData = crackAngles[i]; // [angle, length]
        
        float crackAngle = crackData.x;
        float crackLength = crackData.y;
        
        // Crear línea de grieta desde el centro hacia afuera
        vec2 crackDir = vec2(cos(crackAngle), sin(crackAngle));
        
        // Distancia desde la línea de grieta
        float distAlongCrack = dot(pos.xy, crackDir);
        float distFromCrack = abs(dot(pos.xy, vec2(-crackDir.y, crackDir.x)));
        
        // Verificar si estamos en la línea de grieta
        if(distFromCrack < 0.015 && abs(distAlongCrack) < crackLength * 0.5) {
          float crackIntensity = 1.0 - (distFromCrack / 0.015);
          color = mix(color, crackColor, crackIntensity * 0.6);
        }
      }
      
      // Renderizar casquetes polares
      for(int i = 0; i < 4; i++) {
        if(i >= iceCapCount) break;
        
        vec3 iceCapPos = iceCapPositions[i]; // [x, y, radius]
        
        float distToIceCap = distance(pos.xy, iceCapPos.xy);
        
        if(distToIceCap < iceCapPos.z) {
          float iceCapIntensity = 1.0 - (distToIceCap / iceCapPos.z);
          // Degradado suave
          iceCapIntensity = smoothstep(0.0, 1.0, iceCapIntensity);
          
          color = mix(color, iceCapColor, iceCapIntensity * 0.9);
        }
      }
      
      // Brillo helado sutil
      float iceShimmer = sin(time * 2.0 + pos.x * 20.0) * sin(time * 1.5 + pos.y * 15.0);
      color += vec3(0.1, 0.15, 0.2) * iceShimmer * 0.1;
      
      // Iluminación básica
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      color *= lighting;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new m(.675,.843,.902),crackColor:e.crackColor||new m(.2,.2,.2),iceCapColor:e.iceCapColor||new m(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof m?this.params.crystalColor:new m(this.params.crystalColor),t=this.params.crackColor instanceof m?this.params.crackColor:new m(this.params.crackColor),s=this.params.iceCapColor instanceof m?this.params.iceCapColor:new m(this.params.iceCapColor),a=new Array(50).fill(new M),n=new Array(50).fill(new M),l=new Array(12).fill(new U),r=new Array(4).fill(new M);return this.params.crystals&&this.params.crystals.forEach((c,h)=>{h<50&&(a[h]=new M(c.position[0],c.position[1],c.angle),n[h]=new M(c.length,c.width,0))}),this.params.cracks&&this.params.cracks.forEach((c,h)=>{h<12&&(l[h]=new U(c.angle,c.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((c,h)=>{h<4&&(r[h]=new M(c.position[0],c.position[1],c.radius))}),new ee({vertexShader:Se.vertexShader,fragmentShader:Se.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new m(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:a},crystalSizes:{value:n},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:l},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:r},iceCapColor:{value:s},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function os(i){const e=i.surface_elements||i.surface||i;let t=[.9,.95,1];const s=i.planet_info?.base_color||i.base_color;if(s&&typeof s=="string"){const c=s.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255],t=[Math.min(t[0]+.1,1),Math.min(t[1]+.15,1),Math.min(t[2]+.2,1)]}else Array.isArray(s)&&(t=s);let a=[],n=[],l=[];if(i.seeds){const c=v=>{let b=v;return()=>(b=(b*1664525+1013904223)%4294967296,b/4294967296)},h=v=>{const b=v()*Math.PI*2,S=Math.acos(v()*2-1),I=Math.sin(S)*Math.cos(b),z=Math.sin(S)*Math.sin(b);return[I,z]},u=c(i.seeds.planet_seed),P=4+Math.floor(u()*6);for(let v=0;v<P;v++)a.push({position:h(u),length:.1+u()*.2,width:.05+u()*.1,angle:u()*Math.PI*2});const g=c(i.seeds.shape_seed),_=3+Math.floor(g()*5);for(let v=0;v<_;v++)n.push({angle:g()*Math.PI*2,length:.2+g()*.6});const C=c(i.seeds.shape_seed+500),x=2+Math.floor(C()*3);for(let v=0;v<x;v++)l.push({position:h(C),radius:.15+C()*.25})}const r={crystals:e.crystals?.length>0?e.crystals:a,cracks:e.cracks?.length>0?e.cracks:n,iceCaps:e.ice_caps?.length>0?e.ice_caps:l,baseTextureIntensity:.3,crystalColor:new m(t[0]*.8,t[1]*.9,t[2]*1),crackColor:new m(t[0]*.3,t[1]*.3,t[2]*.4),iceCapColor:new m(t[0]*1.1,t[1]*1.1,t[2]*1)};return new Se(r)}class ct{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new rt,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,s=e,a=t*Math.cos(s),n=t*Math.sin(s),l=n*.8,r=new de,c=new Float32Array([0,0,0,a,l,n]);r.setAttribute("position",new K(c,3));const h=new Oe({color:16776960,linewidth:5,transparent:!1});this.sunLine=new Be(r,h),this.debugGroup.add(this.sunLine);const u=e+Math.PI,P=t*.7,g=P*Math.cos(u),_=0,C=P*Math.sin(u),x=new ae(this.planetRadius*.15,16,16),v=new Ne({color:16776960,transparent:!1,opacity:1}),b=new J(x,v);b.position.set(g,_,C),this.debugGroup.add(b),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,s=new de,a=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);s.setAttribute("position",new K(a,3));const n=new Oe({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new Be(s,n),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,s=this.params.rotationPeriod||86400,a=this.params.initialAngleRotation||0,n=e-t,l=2*Math.PI/s;return(a+n*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),s=this.planetRadius*20,a=this.sunLine.geometry,n=a.attributes.position.array;n[3]=s*Math.cos(t),n[4]=0,n[5]=s*Math.sin(t),a.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,s=this.rotationLine.geometry,a=s.attributes.position.array;a[0]=-t*Math.cos(e),a[1]=0,a[2]=-t*Math.sin(e),a[3]=t*Math.cos(e),a[4]=0,a[5]=t*Math.sin(e),s.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function is(i,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:i.debug?.cosmic_origin_time||i.timing?.cosmic_origin_time||i.cosmicOriginTime,rotationPeriod:i.planet_info?.rotation_period||i.rotation_period_seconds||86400,initialAngleRotation:i.debug?.initial_angle_rotation||i.timing?.initial_angle_rotation||i.initialAngleRotation||0,planetRadius:e,orbitalAngle:i.timing?.orbital_angle||0,sunAngle:i.sun_angle||i.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new ct(e,t)}class ce{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return ce.instance||(ce.instance=new ce),ce.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,s)=>new we(e),fromPythonData:(e,t,s)=>{let a=[.4,.4,.45];const n=e.planet_info?.base_color||e.surface?.base_color;if(n&&typeof n=="string"){const l=n.replace("#","");a=[parseInt(l.substr(0,2),16)/255,parseInt(l.substr(2,2),16)/255,parseInt(l.substr(4,2),16)/255]}else Array.isArray(n)&&(a=n);return new we({color:a,roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}}),this.registerEffect("gas_giant_bands",{create:(e,t,s)=>new ve(s,e),fromPythonData:(e,t,s)=>Qt(s,e)}),this.registerEffect("atmospheric_halo",{create:(e,t)=>new be(t,e),fromPythonData:(e,t)=>Jt(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new xe(t,e),fromPythonData:(e,t)=>es(t,e.atmosphere||{})}),this.registerEffect("dense_atmosphere",{create:(e,t)=>new _e(t,e),fromPythonData:(e,t)=>ts(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new lt(t,e),fromPythonData:(e,t)=>qt(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new st(t,e),fromPythonData:(e,t)=>new st(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,s)=>new Ce(e),fromPythonData:(e,t,s)=>ss(e)}),this.registerEffect("icy_terrain",{create:(e,t,s)=>new Se(e),fromPythonData:(e,t,s)=>os(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new ct(t,e),fromPythonData:(e,t)=>is(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,s,a,n=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const r=l.create(t,s,a);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:n,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}':`,r),null}}createEffectFromPythonData(e,t,s,a,n=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,s,a,n);try{const r=l.fromPythonData(t,s,a);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:n,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}' from Python data:`,r),null}}createEffectsFromList(e,t,s){const a=[],n=e.sort((l,r)=>(l.priority||0)-(r.priority||0));for(const l of n){const r=this.createEffect(l.type,l.params,t,s,l.priority);r&&(r.enabled=l.enabled!==!1,a.push(r))}return a}createEffectsFromPythonPlanetData(e,t,s,a){const n=[];if(e.surface_elements){const l=e.surface_elements;if(l.effects_3d&&Array.isArray(l.effects_3d))for(const r of l.effects_3d){const c=this.createEffect(r.type,r.params,t,s,r.priority||0);c&&(n.push(c),c.effect.addToScene&&c.effect.addToScene(a,s.position))}switch(l.type==="rendering_commands"&&l.commands&&this.executeRenderingCommands(l.commands,a,s,t),l.type){case"gas_giant":const r=this.createEffectFromPythonData("gas_giant_bands",l,t,s,0);r&&n.push(r);break;case"metallic":case"metallic_3d":const c=this.createEffectFromPythonData("metallic_surface",{...e,surface:{...e.surface,base_color:e.planet_info?.base_color||e.surface?.base_color}},t,s,0);c&&n.push(c);break;case"rocky":const h=this.createEffectFromPythonData("rocky_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,s,0);h&&(n.push(h),h.effect.apply(s));break;case"icy":const u=this.createEffectFromPythonData("icy_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,s,0);u&&(n.push(u),u.effect.apply(s));break}}if(e.atmosphere){if(e.atmosphere.halo){const l=this.createEffectFromPythonData("atmospheric_halo",e,t,s,10);l&&(n.push(l),l.effect.addToScene(a,s.position))}if(e.atmosphere.streaks){const l=this.createEffectFromPythonData("atmospheric_streaks",e,t,s,20);l&&(n.push(l),l.effect.addToScene(a,s.position))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const l=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),r={...e.atmosphere};l==="oceanic"&&(r.opacity=Math.min(r.opacity||.3,.15),r.width=Math.min(r.width||15,8));const c=this.createEffectFromPythonData("dense_atmosphere",r,t,s,5);c&&(n.push(c),c.effect.addToScene(a,s.position))}}if(e.rings&&e.rings.has_rings){const l=this.createEffectFromPythonData("ring_system",e,t,s,1);l&&(n.push(l),l.effect.addToScene(a,s.position))}if(e.surface_elements?.has_fragmentation_zones){const l=this.createEffectFromPythonData("fragmentation",e,t,s,5);l&&(n.push(l),l.effect.addToScene(a,s.position))}{const l=this.createEffectFromPythonData("visual_debug_3d",e,t,s,100);l?(n.push(l),l.effect.addToScene(a,s.position)):console.error("❌ Failed to create debug effect!")}return n}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const s=this.effects.get(e);s&&(s.enabled=t!==void 0?t:!s.enabled)}updateAllEffects(e,t){for(const s of this.effects.values())if(s.enabled&&s.effect.update)try{s.effect.update(e,t)}catch(a){console.error(`Error updating effect ${s.type}:`,a)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}executeRenderingCommands(e,t,s,a){e.forEach((n,l)=>{try{switch(n.command){case"apply_material":this.executeApplyMaterial(n,s);break;case"create_surface_element":this.executeCreateSurfaceElement(n,t,a);break;default:console.warn(`❓ Unknown command: ${n.command}`)}}catch(r){console.error(`❌ Error executing command ${l}:`,r)}})}executeApplyMaterial(e,t){const s=e.properties;if(e.material_type==="phong"){const a=new Pt({color:new m(s.color),shininess:s.shininess||50,specular:new m(s.specular||"#222222"),transparent:s.transparent||!1,opacity:s.opacity||1});t.material=a}}executeCreateSurfaceElement(e,t,s){let a;switch(e.geometry.type){case"circle":a=new Et(e.size*s*.1,e.geometry.segments||16);break;case"sphere":a=new ae(e.radius*s*.1,12,12);break;case"irregular_polygon":a=new Mt(0,.05*s,8);break;default:console.warn(`❓ Unknown geometry type: ${e.geometry.type}`);return}const n=e.color,l=new Ne({color:new m(n[0],n[1],n[2]),opacity:n[3]||1,transparent:(n[3]||1)<1}),r=new J(a,l);if(e.position){const c=this.normalizedToSphere(e.position,s*(1+(e.geometry.elevation||0)));r.position.copy(c),r.lookAt(new M(0,0,0))}t.add(r)}normalizedToSphere(e,t){const[s,a]=e,n=Math.acos(1-2*((a+1)/2)),l=2*Math.PI*((s+1)/2),r=t*Math.sin(n)*Math.cos(l),c=t*Math.cos(n),h=t*Math.sin(n)*Math.sin(l);return new M(r,c,h)}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const pe=ce.getInstance(),ge={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmospheric_halo:{intensity:1,falloff:2,scale:1.2,pulsation:!1},gas_giant_bands:{numBands:8,animationSpeed:1,turbulence:.5,stormIntensity:.7}};function as(i){const e=[];switch(i.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...ge.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmospheric_halo",params:{...ge.atmospheric_halo,color:[.6,.1,.9],scale:1.15},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"gas_giant_bands",params:ge.gas_giant_bands,priority:0},{type:"atmospheric_halo",params:{...ge.atmospheric_halo,color:[1,.6,.2],intensity:.8},priority:10});break;case"icy":e.push({type:"atmospheric_halo",params:{...ge.atmospheric_halo,color:[.5,.8,1],intensity:.6,scale:1.1},priority:10});break;default:e.push({type:"atmospheric_halo",params:{color:[.5,.5,.8],intensity:.5},priority:10});break}return e}const ie={log:(i,e)=>{},warn:(i,e)=>{console.warn(`⚠️ [Effects] ${i}`,e||"")},error:(i,e)=>{console.error(`❌ [Effects] ${i}`,e||"")},debug:(i,e)=>{}};new Date().toISOString();const rs=({planetData:i,showInConsole:e=!0,showInPage:t=!1})=>{const[s,a]=p.useState([]),[n,l]=p.useState({});p.useEffect(()=>{if(!i)return;const h=r(i);l(h),a(c(i)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=i,window.__DEBUG_PLANET_ANALYSIS=h)},[i,e]);function r(h){const u={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(h.planet_info&&h.surface_elements?u.hasValidStructure=!0:(h.planet_info||u.missingFields.push("planet_info"),h.surface_elements||u.missingFields.push("surface_elements")),h.surface_elements?.type==="oceanic"&&(u.oceanicData={hasAbstractLands:!!h.surface_elements.abstract_lands?.length,numGreenPatches:h.surface_elements.green_patches?.length||0,numClouds:h.surface_elements.clouds?.length||0,hasDepths:h.surface_elements.depths?.enabled||!1,baseColorIsBlue:h.planet_info?.base_color==="#0000FF",greenPatchColor:h.surface_elements.green_patches?.[0]?.color,issues:[]},u.oceanicData.numGreenPatches>15&&u.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),u.oceanicData.baseColorIsBlue||u.oceanicData.issues.push(`Color base no es azul puro: ${h.planet_info?.base_color}`),u.renderingIssues=u.oceanicData.issues),h.planet_info?.base_color&&h.planet_info?.type){const g={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[h.planet_info.type];g&&h.planet_info.base_color!==g?u.colorConsistency=`Inconsistente: esperado ${g}, recibido ${h.planet_info.base_color}`:u.colorConsistency="Correcto"}return u}function c(h){const u=[];if(!h.surface_elements?.type)return["No surface type defined"];const P=h.surface_elements.type.toLowerCase();switch(P){case"oceanic":u.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":u.push("RockyTerrainEffect");break;case"icy":u.push("IcyTerrainEffect");break;case"gas giant":u.push("GasGiantBandsEffect");break;default:u.push(`Generic effect for type: ${P}`)}return h.atmosphere?.density>0&&u.push("AtmosphericEffect"),h.rings&&u.push("RingSystemEffect"),u}return t?o.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[o.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",i.planet_info?.name]}),o.jsxs("div",{style:{marginBottom:"10px"},children:[o.jsx("strong",{children:"Type:"})," ",i.planet_info?.type,o.jsx("br",{}),o.jsx("strong",{children:"Base Color:"})," ",i.planet_info?.base_color,o.jsx("br",{}),o.jsx("strong",{children:"Radius:"})," ",i.planet_info?.radius]}),i.surface_elements?.type==="oceanic"&&o.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[o.jsx("strong",{children:"🌊 Oceanic Data:"}),o.jsx("br",{}),o.jsxs("span",{style:{color:n.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",n.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),o.jsx("br",{}),"Green Patches: ",n.oceanicData?.numGreenPatches,o.jsx("br",{}),"Clouds: ",n.oceanicData?.numClouds,o.jsx("br",{}),"Has Depths: ",n.oceanicData?.hasDepths?"Yes":"No",o.jsx("br",{}),n.oceanicData?.issues?.length>0&&o.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",o.jsx("br",{}),n.oceanicData.issues.map((h,u)=>o.jsxs("div",{children:["- ",h]},u))]})]}),o.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[o.jsx("strong",{children:"🎨 Effects Applied:"}),o.jsx("br",{}),s.map((h,u)=>o.jsxs("div",{style:{color:h.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",h]},u))]}),o.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function ns(i){p.useEffect(()=>{if(i&&i.surface_elements?.type==="oceanic"){i.surface_elements.green_patches?.length>0;const e=i.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[i])}const ls=({planetName:i,containerClassName:e="",width:t=800,height:s=600,autoRotate:a=!0,enableControls:n=!0,showDebugInfo:l=!1,planetData:r,cosmicOriginTime:c,initialAngleRotation:h,onDataLoaded:u,onEffectsCreated:P,onError:g})=>{const _=p.useRef(null),C=p.useRef(null),x=p.useRef(null),v=p.useRef(null),b=p.useRef(null),S=p.useRef(null),I=p.useRef(new jt),z=p.useRef(null),[re,F]=p.useState(!0),[te,w]=p.useState(null),[N,H]=p.useState(null),[$,W]=p.useState([]),[D,O]=p.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),L=p.useRef([]),G=p.useRef(0),Y=p.useRef(null),se=p.useCallback(()=>{if(!_.current||!x.current||!v.current)return;const d=_.current,y=d.clientWidth||400,f=d.clientHeight||400;x.current.setSize(y,f),v.current.aspect=y/f,v.current.updateProjectionMatrix()},[]),ue=async d=>{if(!(!b.current||!C.current)){ie.log("Applying modular effects from API data",{planet:d.planet_info.name,type:d.planet_info.type});try{De();const y=pe.createEffectsFromPythonPlanetData(d,1,b.current,C.current);W(y),L.current=y,P&&P(y),ie.log(`Successfully applied ${y.length} modular effects`),ze()}catch(y){ie.error("Error applying modular effects",y),Ge()}}},ne=p.useCallback(()=>{if(!_.current)return!1;try{for(;_.current.firstChild;)_.current.removeChild(_.current.firstChild);const d=_.current,y=d.clientWidth||t||400,f=d.clientHeight||s||400,E=new Nt;E.background=new m(1297),C.current=E;const R=new At(45,y/f,.1,1e4);R.position.set(0,80,120),R.lookAt(0,0,0),v.current=R;const A=new Tt({antialias:!0,alpha:!0,powerPreference:"high-performance"});return A.setSize(y,f),A.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.shadowMap.enabled=!0,A.shadowMap.type=Rt,A.toneMapping=kt,A.toneMappingExposure=1.2,A.outputColorSpace=It,_.current.appendChild(A.domElement),x.current=A,me(E,null),ke(E),n&&Ie(R,A.domElement),!0}catch(d){return console.error("Error initializing Three.js:",d),!1}},[]),T=d=>{if(!d)return console.error("❌ calculateSunAngle: NO planetData provided!"),0;const y=d.sun_angle||d.lighting?.sun_angle;if(y!==void 0)return y;const f=d.timing?.orbital_angle;return f??(console.error("❌ CRITICAL: orbital_angle missing for planet:",d.planet_info?.name),console.error("   Full timing data:",d.timing),0)},B=p.useRef(null),q=p.useRef(null),Z=p.useRef(null),X=p.useRef(null),Ae=d=>{d.castShadow=!0,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,d.shadow.camera.near=.5,d.shadow.camera.far=50,d.shadow.camera.left=-10,d.shadow.camera.right=10,d.shadow.camera.top=10,d.shadow.camera.bottom=-10},Pe=d=>{if(!B.current||!C.current){console.error("❌ Cannot update lighting: missing light references");return}const y=T(d),f=10,E=y+Math.PI,R=Math.sin(y)*5,A=f*Math.cos(E),oe=R,Q=f*Math.sin(E);B.current.position.set(A,oe,Q),B.current.target.position.set(0,0,0),C.current.children.includes(B.current.target)||C.current.add(B.current.target),q.current&&q.current.position.set(-A*.5,0,-Q*.5)},Te=d=>{const E=[];for(let Q=0;Q<=64;Q++){const Me=Q/64*Math.PI*2;E.push(new M(3*Math.cos(Me),0,3*Math.sin(Me)))}const R=new de().setFromPoints(E),A=new Oe({color:7372944,transparent:!0,opacity:.4,linewidth:1}),oe=new Be(R,A);d.add(oe),X.current=oe},Re=d=>{const f=new ae(.3,32,32),E=new Ne({color:16777028,transparent:!1,opacity:1}),R=new J(f,E);R.position.set(0,0,0);const A=new ae(.3*1.8,16,16),oe=new Ne({color:16777028,transparent:!0,opacity:.3}),Q=new J(A,oe);R.add(Q),d.add(R),Z.current=R},me=(d,y)=>{Re(d),Te(d);{const f=new qe(16777215,2);f.position.set(10,0,0),f.castShadow=!0,Ae(f),d.add(f),B.current=f;const E=new qe(4482815,.05);E.position.set(-5,0,0),d.add(E),q.current=E;const R=new Dt(2236996,.1);d.add(R);return}},ke=d=>{const y=new ae(1,128,64),f=new je({color:8421504,metalness:.1,roughness:.8,transparent:!1,opacity:1}),E=new J(y,f);E.castShadow=!0,E.receiveShadow=!0,E.position.set(3,0,0),d.add(E),b.current=E},Ie=(d,y)=>{const f=new Ft(d,y);f.enableDamping=!0,f.dampingFactor=.05,f.minDistance=1.5,f.maxDistance=10,f.autoRotate=a,f.autoRotateSpeed=.1,f.enablePan=!0,f.enableZoom=!0,S.current=f},fe=p.useCallback(async()=>{try{F(!0),w(null),ie.log("Loading planet data from API",{planetName:i});const d=await fetch(`/api/planet/${encodeURIComponent(i)}/rendering-data`);if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);const y=await d.json();if(!y.success)throw new Error(y.error||"Failed to fetch planet data");const f=y.rendering_data;H(f),ie.log("API data loaded successfully",{planet:f.planet_info.name,type:f.planet_info.type,hasEffects:!!f.surface_elements}),Pe(f),await ue(f),u&&u(f)}catch(d){const y=d instanceof Error?d.message:"Unknown error";console.error("Error loading planet data:",y),w(y),g&&g(y),Ge()}finally{F(!1)}},[i,r,c,h]),Ge=()=>{if(!(!C.current||!b.current)){ie.warn("Applying fallback effects");try{De();const d=as("generic"),y=pe.createEffectsFromList(d,1,b.current);y.forEach(f=>{f.effect.addToScene&&C.current&&b.current&&f.effect.addToScene(C.current,b.current.position)}),L.current=y,W(y),ze()}catch(d){ie.error("Error applying fallback effects",d)}}},De=()=>{L.current.forEach(d=>{try{d.effect.dispose&&d.effect.dispose()}catch(y){console.error("Error disposing effect:",y)}}),L.current=[],W([])},Ue=p.useCallback(()=>{z.current=requestAnimationFrame(Ue);const d=performance.now(),y=I.current.getDelta();S.current&&S.current.update();try{pe.updateAllEffects(y,b.current?.rotation.y)}catch(f){console.error("Error updating effects:",f)}if(b.current&&(r||N)){let f,E,R,A;if(N)N.planet_info,f=r?.orbital_period_seconds||365.25*24*3600,E=r?.initial_orbital_angle||0,R=c||N.timing?.cosmic_origin_time||Date.now()/1e3-3600,A=r?.axial_tilt||0;else if(r)f=r.orbital_period_seconds||365.25*24*3600,E=r.initial_orbital_angle||0,R=c||Date.now()/1e3-3600,A=r.axial_tilt||0;else return;const Me=Math.floor(Date.now()/1e3)-R+0,ht=2*Math.PI/f,Ye=(E+Me*ht)%(2*Math.PI),He=3,$e=He*Math.cos(Ye),dt=He*Math.sin(Ye);(!window.planetPositionCalculated||Math.abs(b.current.position.x-$e)>.1)&&(b.current.position.x=$e,b.current.position.z=dt,b.current.position.y=0,window.planetPositionCalculated=!0);const ut=h||0;b.current.rotation.y=ut,b.current.rotation.z=A*(Math.PI/180)}if(L.current.forEach(f=>{f.effect.updateUniforms&&f.effect.updateUniforms(y)}),x.current&&C.current&&v.current){const f=performance.now();x.current.render(C.current,v.current);const E=performance.now()-f;if(d-G.current>5e3){const R=1e3/(d-G.current);ze(),O(A=>({...A,frameRate:Math.round(R),renderTime:Math.round(E*100)/100})),G.current=d}}},[]),ze=p.useCallback(()=>{const d=pe.getStats();O(y=>({...y,activeEffects:d.activeEffects,enabledEffects:d.enabledEffects}))},[]);return p.useEffect(()=>{let d=!0;return(async()=>{try{if(!d)return;if(!ne()){d&&w("Failed to initialize 3D renderer");return}if(!d||(Ue(),_.current&&"ResizeObserver"in window&&(Y.current=new ResizeObserver(se),Y.current.observe(_.current)),window.addEventListener("resize",se),!d))return;await fe()}catch(f){console.error("Error during ModularPlanetRenderer initialization:",f),d&&w(f instanceof Error?f.message:"Unknown initialization error")}})(),()=>{if(d=!1,z.current&&cancelAnimationFrame(z.current),Y.current&&Y.current.disconnect(),window.removeEventListener("resize",se),De(),S.current&&S.current.dispose(),Z.current&&C.current&&(C.current.remove(Z.current),Z.current.geometry.dispose(),Z.current.material.dispose(),Z.current=null),X.current&&C.current&&(C.current.remove(X.current),X.current.geometry.dispose(),X.current.material.dispose(),X.current=null),x.current&&_.current)try{_.current.contains(x.current.domElement)&&_.current.removeChild(x.current.domElement),x.current.dispose()}catch(f){console.error("Error during cleanup:",f)}}},[]),p.useEffect(()=>{r&&C.current&&b.current&&fe()},[i,r?.planet_type,r?.diameter,r?.elements]),p.useEffect(()=>{C.current&&b.current&&setTimeout(()=>{fe()},100)},[i]),p.useEffect(()=>{const d=setInterval(()=>{const y=pe.getStats();O(f=>({...f,activeEffects:y.activeEffects,enabledEffects:y.enabledEffects}))},1e4);return()=>clearInterval(d)},[]),ns(N),o.jsxs("div",{className:`relative ${e}`,children:[l&&N&&o.jsx(rs,{planetData:N,showInPage:!0,showInConsole:!0}),o.jsx("div",{ref:_,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),re&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:o.jsxs("div",{className:"text-white text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),o.jsx("div",{children:"Loading planet..."})]})}),te&&o.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[o.jsx("strong",{children:"Error:"})," ",te]}),N&&!re&&o.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[o.jsx("h3",{className:"text-lg font-bold",children:N.planet_info.name}),o.jsx("p",{className:"text-sm opacity-80",children:N.planet_info.type}),o.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[$.length," effects active"]}),N.surface_elements?.description&&o.jsx("p",{className:"text-xs mt-2 opacity-60",children:N.surface_elements.description.appearance})]}),l&&o.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[o.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),o.jsxs("div",{children:["Frame Rate: ",D.frameRate," FPS"]}),o.jsxs("div",{children:["Render Time: ",D.renderTime,"ms"]}),o.jsxs("div",{children:["Active Effects: ",D.activeEffects]}),o.jsxs("div",{children:["Enabled Effects: ",D.enabledEffects]}),o.jsxs("div",{className:"mt-2",children:[o.jsx("div",{className:"font-semibold",children:"Effects:"}),$.map(d=>o.jsxs("div",{className:"ml-2",children:[d.type," (",d.enabled?"ON":"OFF",")"]},d.id))]})]})]})};class cs extends ot.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?o.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:o.jsxs("div",{className:"text-center p-4",children:[o.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),o.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const hs=i=>o.jsx(cs,{children:o.jsx(ls,{...i})}),ds=({planetUrl:i,imageUrl:e,planet:t,cosmicOriginTime:s,initialAngleRotation:a})=>{const n=p.useRef(null),l=p.useRef(null),[r,c]=p.useState("Aligning Stargate..."),[h,u]=p.useState(!1),[P,g]=p.useState(!1),[_,C]=p.useState(!1),[x,v]=p.useState(!0),[b,S]=p.useState(!0),[I,z]=p.useState(null),[re,F]=p.useState(null);p.useEffect(()=>{const w=document.createElement("style");return w.textContent=`
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
    `,document.head.appendChild(w),()=>{document.head.removeChild(w)}},[]),p.useEffect(()=>{const w=n.current;if(!w)return;const N=w.getContext("2d");if(!N)return;let H=[];const $=800;let W,D;const O=800;let L,G=.5;function Y(){const T=w?.parentElement;if(!T||!w)return;const B=T.clientWidth,q=T.clientHeight;w.width=Math.min(B,O),w.height=Math.min(q,O),W=w.width/2,D=w.height/2}function se(){Y(),H=[];for(let T=0;T<$;T++)H.push({x:Math.random()*(w?.width||800),y:Math.random()*(w?.height||800),z:Math.random()*(w?.width||800),o:Math.random()});ue()}function ue(){!w||!N||(N.clearRect(0,0,w.width,w.height),H.forEach(T=>{T.z-=G,T.z<=0&&(T.z=w.width,T.x=Math.random()*w.width,T.y=Math.random()*w.height,T.o=Math.random());const B=w.width/T.z,q=(T.x-W)*B+W,Z=(T.y-D)*B+D,X=2*B;N.beginPath(),N.fillStyle=`rgba(255, 255, 255, ${T.o})`,N.arc(q,Z,X,0,2*Math.PI),N.fill()}),G<60&&(G+=1),L=requestAnimationFrame(ue))}se();const ne=()=>Y();return window.addEventListener("resize",ne),()=>{window.removeEventListener("resize",ne),L&&cancelAnimationFrame(L)}},[]),p.useEffect(()=>{if(e&&!x){const w=new Image;w.onload=()=>{l.current&&(l.current.src=e,g(!0),C(!0))},w.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{g(!0),C(!0)},1500)},w.src=e}else(x||!e)&&setTimeout(()=>{g(!0),C(!0)},1500)},[e,x]),p.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){c("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),u(!0);const N=(O,L)=>Array.from({length:L},()=>O[Math.floor(Math.random()*O.length)]).join(""),H=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let $=0,W=0;const D=()=>{if($>=H.length){const L="Stargate system aligned";let G=0;c("");const Y=()=>{G<L.length?(c(L.substring(0,G+1)),G++,setTimeout(Y,30)):u(!1)};Y();return}const O=H[$];c(N(O.chars,32)),W++,W>=O.iterations&&($++,W=0),setTimeout(D,O.duration)};D()},[]);const te=()=>{v(!x),x||(g(!0),C(!0))};return o.jsxs("div",{className:"h-full flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),b&&o.jsx("div",{className:"flex items-center gap-2",children:o.jsx("button",{onClick:te,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${x?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:x?"2D View":"3D View"})})]}),o.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[o.jsx("canvas",{ref:n,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${_?"opacity-0":"opacity-100"}`,style:{filter:_?"blur(50px)":"none"}}),x&&P&&t&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${P?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:o.jsx(hs,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:s,initialAngleRotation:a,onDataLoaded:w=>{z(w)},onError:w=>{F(w),console.error("❌ Planet rendering error:",w)}})}),!x&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${P?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:P&&e?o.jsx("div",{className:"w-full h-full flex items-center justify-center",children:o.jsx(yt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:o.jsx("img",{ref:l,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):o.jsx("img",{ref:l,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),b&&o.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:x?"🌍 3D":"🖼️ 2D"})]}),o.jsxs("div",{className:"text-center mt-auto",children:[o.jsxs("a",{href:i,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${h?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[o.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),r]}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),o.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",x&&I&&o.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",I.planet_info?.type," Planet",I.atmosphere&&o.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),I.rings?.has_rings&&o.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),x&&re&&o.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},us=({currentPlanet:i,system:e,galaxy:t,systemPlanets:s})=>{const[a,n]=p.useState(null),[l,r]=p.useState(null),[c,h]=p.useState(!1),[u,P]=p.useState(!1),[g,_]=p.useState(!0);p.useEffect(()=>{if(s&&s.length>0){const v=s.findIndex(b=>b.name.toLowerCase()===i.toLowerCase());v!==-1?(v>0?(n(s[v-1].name.toLowerCase()),h(!0)):e.index>0?(n("__prev_system__"),h(!0)):h(!1),v<s.length-1?(r(s[v+1].name.toLowerCase()),P(!0)):(r("__next_system__"),P(!0))):(h(!1),P(!1))}else h(!1),P(!1);_(!1)},[i,e.index,s]);const C=async()=>{const v=t.coordinates.join(",");if(a==="__prev_system__")try{const b=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(b.ok){const S=await b.json();if(S.system&&S.system.planets&&S.system.planets.length>0){const z=S.system.planets[S.system.planets.length-1].name.toLowerCase();ye(v,e.index-1,z,S.system.planets),Fe(v,e.index-1),window.location.href=`/planet/${z}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else a&&(ye(v,e.index,a,s),window.location.href=`/planet/${a}`)},x=async()=>{const v=t.coordinates.join(",");if(l==="__next_system__")try{const b=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(b.ok){const S=await b.json();if(S.system&&S.system.planets&&S.system.planets.length>0){const z=S.system.planets[0].name.toLowerCase();ye(v,e.index+1,z,S.system.planets),Fe(v,e.index+1),window.location.href=`/planet/${z}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(ye(v,e.index,l,s),window.location.href=`/planet/${l}`)};return g?null:o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("button",{onClick:C,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),o.jsx("button",{onClick:x,disabled:!u,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${u?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},ms=({planet:i,system:e,galaxy:t,planet_url:s,version:a,image_url:n,cosmic_origin_time:l,initial_angle_rotation:r})=>{const[c]=p.useState(t.coordinates.join(","));p.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",i.name.toLowerCase()),ye(c,e.index,i.name,e.planets||[]),Fe(c,e.index)},[c,e.index,i.name]);const h=g=>g.replace(/_/g," "),u=g=>g.replace(/_/g," "),P=g=>g.replace(/_/g," ");return o.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[o.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),o.jsxs("div",{className:"relative z-10",children:[o.jsx(pt,{}),o.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:o.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",h(i.name),"'"]})}),o.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",u(e.name),"' - Galaxy '",P(t.name),"'"]}),o.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),o.jsx(us,{currentPlanet:i.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:o.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[o.jsx("div",{className:"order-1 lg:order-1",children:o.jsx(ds,{planetUrl:s,imageUrl:n,planet:i,cosmicOriginTime:l,initialAngleRotation:r})}),o.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),o.jsx("div",{className:"order-2 lg:order-2",children:o.jsx(zt,{planet:i,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:r})})]})}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:o.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:o.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",u(e.name),"'"]})})})]}),o.jsx(mt,{version:a})]}),o.jsx(vt,{currentLocation:{type:"planet",name:i.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:i.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const i=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),s=document.getElementById("meta-data");if(!i||!e||!t||!s){console.error("Missing required data elements");return}const a=JSON.parse(i.textContent||"{}"),n=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),r=JSON.parse(s.textContent||"{}"),c={planet:a,system:n,galaxy:l,planet_url:r.planet_url,version:r.version,image_url:r.image_url,cosmic_origin_time:r.cosmic_origin_time,initial_angle_rotation:r.initial_angle_rotation},h=document.getElementById("atlas-react-root");h&&ft.createRoot(h).render(ot.createElement(ms,c))}catch(i){console.error("Error initializing Planet React app:",i)}});
