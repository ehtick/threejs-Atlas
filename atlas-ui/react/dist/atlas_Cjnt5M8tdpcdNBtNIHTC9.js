import{r as g,j as i,R as ut,V as Rt,c as Tt}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as kt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as It,U as Ft,m as Se,c as He,a as Dt}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as zt,V as j,n as be,T as ge,Q as st,l as it,o as Z,R as Lt,p as Ot,q as Gt,e as ve,r as K,s as se,N as Bt,t as mt,C as f,c as de,d as oe,u as ft,v as Xe,G as pt,w as Pe,F as Vt,x as at,L as $e,g as Ze,M as Oe,y as Wt,z as Ut,H as Yt,I as Ht,S as $t,P as Zt,W as Xt,J as Kt,K as qt,O as Qt,D as nt,A as Jt}from"./atlas_ZgUbUwm-J4U4iRNwqY-vk.js";const eo=({planet:s,system:e,galaxy:t,cosmicOriginTime:o,initialAngleRotation:a})=>{const[r,l]=g.useState(!1),n=b=>b.replace(/_/g," "),c=b=>{const C=b/86400;return C<30?`${C.toFixed(2)} days`:C<365?`${(C/30).toFixed(2)} months`:`${(C/365).toFixed(2)} years`},h=b=>{const C=b*9/5+32;return`${b.toFixed(1)}°C (${C.toFixed(1)}°F)`},m=b=>`${b.toExponential(2)} kg`,E=b=>b>=1e3?`${(b/1e3).toFixed(2)} km`:`${b.toFixed(2)} m`;return i.jsxs("div",{className:"h-full flex flex-col relative",children:[i.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),i.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[i.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),i.jsx(It,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),i.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),i.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),i.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),i.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),i.jsx("div",{className:"text-xs font-bold text-orange-300",children:m(s.mass)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),i.jsx("div",{className:"text-xs font-bold text-orange-300",children:E(s.diameter)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),i.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),i.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),i.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),i.jsx("div",{className:"text-xs font-bold text-cyan-300",children:c(s.orbital_period_seconds)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),i.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),i.jsx("div",{className:"text-xs font-bold text-red-300",children:h(s.surface_temperature)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),i.jsx("div",{className:"text-xs font-bold text-red-300",children:c(s.rotation_period_seconds)})]})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&i.jsx("button",{onClick:()=>l(!r),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:r?"▲ Less":"▼ All"})]}),i.jsx("div",{className:"flex flex-wrap gap-1",children:(r?s.elements:s.elements.slice(0,4)).map((b,C)=>i.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:b},C))})]})]}),i.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[i.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),i.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Status:"}),i.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Planet:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(s.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"System:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(e.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"System ID:"}),i.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(t.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),i.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},rt={type:"change"},Ke={type:"start"},gt={type:"end"},ze=new Lt,lt=new Ot,to=Math.cos(70*Gt.DEG2RAD),D=new j,U=2*Math.PI,T={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ue=1e-6;class oo extends zt{constructor(e,t=null){super(e,t),this.state=T.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:be.ROTATE,MIDDLE:be.DOLLY,RIGHT:be.PAN},this.touches={ONE:ge.ROTATE,TWO:ge.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new st,this._lastTargetPosition=new j,this._quat=new st().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new it,this._sphericalDelta=new it,this._scale=1,this._panOffset=new j,this._rotateStart=new Z,this._rotateEnd=new Z,this._rotateDelta=new Z,this._panStart=new Z,this._panEnd=new Z,this._panDelta=new Z,this._dollyStart=new Z,this._dollyEnd=new Z,this._dollyDelta=new Z,this._dollyDirection=new j,this._mouse=new Z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=io.bind(this),this._onPointerDown=so.bind(this),this._onPointerUp=ao.bind(this),this._onContextMenu=mo.bind(this),this._onMouseWheel=lo.bind(this),this._onKeyDown=co.bind(this),this._onTouchStart=ho.bind(this),this._onTouchMove=uo.bind(this),this._onMouseDown=no.bind(this),this._onMouseMove=ro.bind(this),this._interceptControlDown=fo.bind(this),this._interceptControlUp=po.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rt),this.update(),this.state=T.NONE}update(e=null){const t=this.object.position;D.copy(t).sub(this.target),D.applyQuaternion(this._quat),this._spherical.setFromVector3(D),this.autoRotate&&this.state===T.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let o=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(o)&&isFinite(a)&&(o<-Math.PI?o+=U:o>Math.PI&&(o-=U),a<-Math.PI?a+=U:a>Math.PI&&(a-=U),o<=a?this._spherical.theta=Math.max(o,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(o+a)/2?Math.max(o,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=l!=this._spherical.radius}if(D.setFromSpherical(this._spherical),D.applyQuaternion(this._quatInverse),t.copy(this.target).add(D),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const n=D.length();l=this._clampDistance(n*this._scale);const c=n-l;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const n=new j(this._mouse.x,this._mouse.y,0);n.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const h=new j(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(n),this.object.updateMatrixWorld(),l=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(ze.origin.copy(this.object.position),ze.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ze.direction))<to?this.object.lookAt(this.target):(lt.setFromNormalAndCoplanarPoint(this.object.up,this.target),ze.intersectPlane(lt,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ue||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ue||this._lastTargetPosition.distanceToSquared(this.target)>Ue?(this.dispatchEvent(rt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?U/60*this.autoRotateSpeed*e:U/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){D.setFromMatrixColumn(t,0),D.multiplyScalar(-e),this._panOffset.add(D)}_panUp(e,t){this.screenSpacePanning===!0?D.setFromMatrixColumn(t,1):(D.setFromMatrixColumn(t,0),D.crossVectors(this.object.up,D)),D.multiplyScalar(e),this._panOffset.add(D)}_pan(e,t){const o=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;D.copy(a).sub(this.target);let r=D.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/o.clientHeight,this.object.matrix),this._panUp(2*t*r/o.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/o.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/o.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const o=this.domElement.getBoundingClientRect(),a=e-o.left,r=t-o.top,l=o.width,n=o.height;this._mouse.x=a/l*2-1,this._mouse.y=-(r/n)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(U*this._rotateDelta.x/t.clientHeight),this._rotateUp(U*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(o,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(o,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(o*o+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const o=this._getSecondPointerPosition(e),a=.5*(e.pageX+o.x),r=.5*(e.pageY+o.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(U*this._rotateDelta.x/t.clientHeight),this._rotateUp(U*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(o,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(o*o+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,n=(e.pageY+t.y)*.5;this._updateZoomParameters(l,n)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Z,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,o={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(o.deltaY*=10),o}}function so(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function io(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ao(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gt),this.state=T.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function no(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=T.DOLLY;break;case be.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=T.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=T.ROTATE}break;case be.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=T.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=T.PAN}break;default:this.state=T.NONE}this.state!==T.NONE&&this.dispatchEvent(Ke)}function ro(s){switch(this.state){case T.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case T.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case T.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function lo(s){this.enabled===!1||this.enableZoom===!1||this.state!==T.NONE||(s.preventDefault(),this.dispatchEvent(Ke),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(gt))}function co(s){this.enabled!==!1&&this._handleKeyDown(s)}function ho(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=T.TOUCH_ROTATE;break;case ge.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=T.TOUCH_PAN;break;default:this.state=T.NONE}break;case 2:switch(this.touches.TWO){case ge.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=T.TOUCH_DOLLY_PAN;break;case ge.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=T.TOUCH_DOLLY_ROTATE;break;default:this.state=T.NONE}break;default:this.state=T.NONE}this.state!==T.NONE&&this.dispatchEvent(Ke)}function uo(s){switch(this._trackPointer(s),this.state){case T.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case T.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case T.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case T.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=T.NONE}}function mo(s){this.enabled!==!1&&s.preventDefault()}function fo(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function po(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ct{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class yt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:o,ring_inner_radius:a,ring_outer_radius:r,tilt_factor:l,planet_radius:n,shape_seed:c}=e;if(!t||!o){console.warn("No ring data provided");return}const h=[...t.particles,...o.particles],m=h.length,E=new ct(c||12345),b=new ve,C=new Float32Array(m*3),_=new Float32Array(m*3),w=new Float32Array(m),x=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],y=E.choice(x);for(let M=0;M<m;M++){const z=h[M],L=this.planetRadius/(n||200),ie=(c||12345)+M,k=new ct(ie),ae=z.distance*L,S=z.angle,B=ae*Math.sin(S),O=Math.asin((l||.2)*.5),R=B*Math.sin(O),X=B*Math.cos(O),G=((r||400)-(a||200))*L*.4,V=k.uniform(-G*.8,G*.8),W=k.uniform(-G*.3,G*.3),Y=k.uniform(-.08,.08),H=ae+W,ne=S+Y;C[M*3]=H*Math.cos(ne),C[M*3+1]=R+V+this.planetRadius*.15,C[M*3+2]=X+k.uniform(-G*.4,G*.4),z.color[0]/255;const he=(z.distance-(a||200))/((r||400)-(a||200)),I=y.baseGray,q=y.variation,re=k.uniform(-q,q),xe=Math.max(.12,Math.min(.45,I+re)),le=.8+he*.4,ke=k.uniform(.85,1.15),Ie=k.uniform(0,1),Ge=Ie<.03?k.uniform(1.1,1.3):1,ee=xe*le*ke*Ge,ce=Math.max(.1,Math.min(.55,ee));_[M*3]=ce,_[M*3+1]=ce,_[M*3+2]=ce;const te=.15,F=k.uniform(.3,.7),Be=Ie<.1?k.uniform(1.05,1.2):1;w[M]=z.size*te*F*Be}b.setAttribute("position",new K(C,3)),b.setAttribute("color",new K(_,3)),b.setAttribute("size",new K(w,1)),this.material=new se({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Bt}),this.ringSystem=new mt(b,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const o=t.rotation_period_seconds||86400,a=t.cosmicOriginTime||Date.now()/1e3,r=t.initialAngleRotation||0,n=Date.now()/1e3-a,c=2*Math.PI/o,h=(r+n*c)%(2*Math.PI);this.ringSystem.rotation.y=h}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function go(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new yt(e,t)}class dt{seed;constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}random(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return this.random()*(t-e)+e}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class Me{material;params;mesh;static vertexShader=`
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
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new f(16753920),bandColor:t.bandColor||new f(16753920),stormColor:t.stormColor||new f(9109504),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,stormIntensity:t.stormIntensity||.7,noiseScale:t.noiseScale||4},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),o=new dt(12345);for(let a=0;a<e&&a<20;a++)t[a]=o.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),o=new dt(67890);for(let a=0;a<e&&a<20;a++)t[a]=o.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof f?this.params.baseColor:new f(this.params.baseColor),t=this.params.bandColor instanceof f?this.params.bandColor:new f(this.params.bandColor),o=this.params.stormColor instanceof f?this.params.stormColor:new f(this.params.stormColor);return new se({vertexShader:Me.vertexShader,fragmentShader:Me.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},stormColor:{value:o},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},stormIntensity:{value:this.params.stormIntensity},noiseScale:{value:this.params.noiseScale}}})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){if(this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.baseColor){const t=e.baseColor instanceof f?e.baseColor:new f(e.baseColor);this.material.uniforms.planetColor.value=t}if(e.bandColor){const t=e.bandColor instanceof f?e.bandColor:new f(e.bandColor);this.material.uniforms.bandColor.value=t}if(e.stormColor){const t=e.stormColor instanceof f?e.stormColor:new f(e.stormColor);this.material.uniforms.stormColor.value=t}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function yo(s,e){const t=e.cloud_bands||{},o={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new f(e.base_color):new f(16753920),animationSpeed:1,turbulence:e.turbulence||.5,stormIntensity:e.storm_intensity||.7};return new Me(s,o)}class Ee{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new f(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsationSpeed||2,fresnelPower:t.fresnelPower||2},this.geometry=new de(e*this.params.scale,64,64),this.material=this.createMaterial(),this.mesh=new oe(this.geometry,this.material)}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new se({vertexShader:Ee.vertexShader,fragmentShader:Ee.fragmentShader,uniforms:{glowColor:{value:e},glowIntensity:{value:this.params.intensity},glowFalloff:{value:this.params.falloff},fresnelPower:{value:this.params.fresnelPower},time:{value:0},pulsation:{value:this.params.pulsation},pulsationSpeed:{value:this.params.pulsationSpeed}},transparent:!0,blending:Xe,side:ft,depthWrite:!1})}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.glowColor.value=t}e.intensity!==void 0&&(this.material.uniforms.glowIntensity.value=e.intensity),e.falloff!==void 0&&(this.material.uniforms.glowFalloff.value=e.falloff),e.pulsation!==void 0&&(this.material.uniforms.pulsation.value=e.pulsation),e.pulsationSpeed!==void 0&&(this.material.uniforms.pulsationSpeed.value=e.pulsationSpeed)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ae{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new f(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new ve,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new mt(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),n=this.params.color instanceof f?this.params.color:new f(this.params.color);for(let c=0;c<this.particleCount;c++){const h=Math.random()*Math.PI*2,m=Math.acos(Math.random()*2-1),E=e*(1+Math.random()*.1);t[c*3]=E*Math.sin(m)*Math.cos(h),t[c*3+1]=E*Math.sin(m)*Math.sin(h),t[c*3+2]=E*Math.cos(m),o[c*3]=n.r*(.8+Math.random()*.4),o[c*3+1]=n.g*(.8+Math.random()*.4),o[c*3+2]=n.b*(.8+Math.random()*.4),a[c]=this.params.size*(Math.random()*.5+.75),r[c]=this.params.speed*(Math.random()*.8+.6),l[c]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new K(t,3)),this.geometry.setAttribute("customColor",new K(o,3)),this.geometry.setAttribute("size",new K(a,1)),this.geometry.setAttribute("speed",new K(r,1)),this.geometry.setAttribute("phase",new K(l,1))}createMaterial(){return new se({vertexShader:Ae.vertexShader,fragmentShader:Ae.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:Xe,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}class je{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.5,.5,.8,.3],width:t.width||15,opacity:t.opacity||.3,density:t.density||1};const o=e*(1+this.params.width/100);this.geometry=new de(o,32,32);const a=new f(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new se({vertexShader:je.vertexShader,fragmentShader:je.fragmentShader,uniforms:{atmosphereColor:{value:a},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Xe,side:ft,depthWrite:!1}),this.mesh=new oe(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new f(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function bo(s,e){const t=e.halo||{},o={color:t.color?new f().setRGB(t.color[0],t.color[1],t.color[2]):new f(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsation_speed||2};return new Ee(s,o)}function vo(s,e){const t=e.streaks||{},o={color:t.color?new f().setRGB(t.color[0],t.color[1],t.color[2]):new f(16777215),particleCount:t.count||100,speed:t.speed||1,size:2,opacity:.6,turbulence:1};return new Ae(s,o)}function xo(s,e){let t=[.5,.5,.8,.15],o=15;e&&(e.color&&Array.isArray(e.color)&&(t=[e.color[0],e.color[1],e.color[2],e.color[3]*.5]),e.width&&(o=e.width));const a={type:e?.type||"Thin",color:t,width:o,opacity:t[3],density:1};return new je(s,a)}class Ne{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={color:e.color||new f(7368816),roughness:e.roughness||.7,metalness:e.metalness||.9,fragmentationIntensity:e.fragmentationIntensity||.5,noiseScale:e.noiseScale||8,noiseIntensity:e.noiseIntensity||.3,edgeFragmentation:e.edgeFragmentation||1,circularWaves:e.circularWaves||1,fogPatches:e.fogPatches||1},this.material=this.createMaterial()}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new se({vertexShader:Ne.vertexShader,fragmentShader:Ne.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},roughness:{value:this.params.roughness},metalness:{value:this.params.metalness},fragmentationIntensity:{value:this.params.fragmentationIntensity},noiseScale:{value:this.params.noiseScale},noiseIntensity:{value:this.params.noiseIntensity},edgeFragmentation:{value:this.params.edgeFragmentation},circularWaves:{value:this.params.circularWaves},fogPatches:{value:this.params.fogPatches}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.baseColor.value=t}e.roughness!==void 0&&(this.material.uniforms.roughness.value=e.roughness),e.metalness!==void 0&&(this.material.uniforms.metalness.value=e.metalness),e.fragmentationIntensity!==void 0&&(this.material.uniforms.fragmentationIntensity.value=e.fragmentationIntensity),e.noiseScale!==void 0&&(this.material.uniforms.noiseScale.value=e.noiseScale),e.noiseIntensity!==void 0&&(this.material.uniforms.noiseIntensity.value=e.noiseIntensity),e.edgeFragmentation!==void 0&&(this.material.uniforms.edgeFragmentation.value=e.edgeFragmentation),e.circularWaves!==void 0&&(this.material.uniforms.circularWaves.value=e.circularWaves),e.fogPatches!==void 0&&(this.material.uniforms.fogPatches.value=e.fogPatches)}getMaterial(){return this.material}dispose(){this.material.dispose()}}class ht{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new f(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new pt,this.generateFragments()}generateFragments(){const e=new Pe({color:this.params.color instanceof f?this.params.color:new f(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const o=this.generateFragmentGeometry(),a=new oe(o,e);this.positionFragment(a,t),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const r=this.params.size*(Math.random()*.5+.75);a.scale.set(r,r,r),a.userData={rotationAxis:new j(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(a),this.fragments.add(a)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],o=[],a=[];a.push(new j(0,0,0));for(let n=0;n<e;n++){const c=n/e*Math.PI*2,h=Math.random()*.5+.5,m=(Math.random()-.5)*.3;a.push(new j(Math.cos(c)*h,Math.sin(c)*h,m))}for(let n=1;n<=e;n++){const h=a[n].clone();h.z+=Math.random()*.4+.2,a.push(h)}for(const n of a)t.push(n.x,n.y,n.z);for(let n=1;n<e;n++)o.push(0,n,n+1);o.push(0,e,1);const r=a.length-e-1;for(let n=0;n<e-1;n++)o.push(r,r+n+2,r+n+1);o.push(r,r+1,r+e);for(let n=0;n<e;n++){const c=n+1,h=(n+1)%e+1,m=c+e,E=h+e;o.push(c,m,h),o.push(h,m,E)}const l=new ve;return l.setAttribute("position",new Vt(t,3)),l.setIndex(o),l.computeVertexNormals(),l}positionFragment(e,t){let o;switch(this.params.distribution){case"edge":o=this.generateEdgePosition(t);break;case"surface":o=this.generateSurfacePosition();break;case"random":default:o=this.generateRandomPosition();break}e.position.copy(o)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,o=this.planetRadius*(.95+Math.random()*.1),a=(Math.random()-.5)*this.planetRadius*.5;return new j(Math.cos(t)*o,a,Math.sin(t)*o)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),o=this.planetRadius*(1+Math.random()*.05);return new j(o*Math.sin(t)*Math.cos(e),o*Math.sin(t)*Math.sin(e),o*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;return new j(e*Math.sin(t)*Math.cos(o),e*Math.sin(t)*Math.sin(o),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,o)=>{const a=t.userData;t.rotateOnAxis(a.rotationAxis,a.rotationSpeed*e*this.params.animationSpeed);const r=Math.sin(Date.now()*.001+o)*.001;t.position.y+=r*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.fragmentMeshes.forEach(o=>{o.material instanceof Pe&&(o.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof Pe&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof at&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof at&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class Re{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new f(.8,.8,.8),cloudColor:e.cloudColor||new f(.7,.7,.7),craterColor:e.craterColor||new f(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof f?this.params.mountainColor:new f(this.params.mountainColor),t=this.params.cloudColor instanceof f?this.params.cloudColor:new f(this.params.cloudColor),o=this.params.craterColor instanceof f?this.params.craterColor:new f(this.params.craterColor),a=new Array(30).fill(new j),r=new Array(30).fill(new j),l=new Array(10).fill(new j);return this.params.mountains&&this.params.mountains.forEach((n,c)=>{c<30&&(a[c]=new j(n.position[0],n.position[1],n.angle),r[c]=new j(n.width,n.height,0))}),this.params.clouds&&this.params.clouds.forEach((n,c)=>{c<10&&(l[c]=new j(n.position[0],n.position[1],n.radius))}),new se({vertexShader:Re.vertexShader,fragmentShader:Re.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:a},mountainSizes:{value:r},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:l},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new j(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new j},craterColor:{value:o},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function _o(s){const e=s.surface_elements||s.surface||s;let t=[.8,.8,.8];const o=s.planet_info?.base_color||s.base_color;if(o&&typeof o=="string"){const c=o.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255]}else Array.isArray(o)&&(t=o);let a=[],r=[],l;if(s.seeds){const c=w=>{let x=w;return()=>(x=(x*1664525+1013904223)%4294967296,x/4294967296)},h=w=>{const x=w()*Math.PI*2,y=Math.acos(w()*2-1),M=Math.sin(y)*Math.cos(x),z=Math.sin(y)*Math.sin(x);return[M,z]},m=c(s.seeds.planet_seed),E=6+Math.floor(m()*4);for(let w=0;w<E;w++)a.push({position:h(m),width:.1+m()*.3,height:.2+m()*.6,angle:m()*Math.PI*2});const b=c(s.seeds.shape_seed+1e3),C=3+Math.floor(b()*4);for(let w=0;w<C;w++)r.push({position:h(b),radius:.08+b()*.17});const _=c(s.seeds.shape_seed+2e3);_()<.7&&(l={position:h(_),radius:.1+_()*.2})}const n={mountains:e.mountains?.length>0?e.mountains:a,clouds:e.clouds?.length>0?e.clouds:r,crater:e.crater||l,baseTextureIntensity:.4,mountainColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1.1),cloudColor:new f(t[0]*.9,t[1]*.9,t[2]*.9),craterColor:new f(t[0]*.3,t[1]*.3,t[2]*.3)};return new Re(n)}class Te{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new f(.675,.843,.902),crackColor:e.crackColor||new f(.2,.2,.2),iceCapColor:e.iceCapColor||new f(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof f?this.params.crystalColor:new f(this.params.crystalColor),t=this.params.crackColor instanceof f?this.params.crackColor:new f(this.params.crackColor),o=this.params.iceCapColor instanceof f?this.params.iceCapColor:new f(this.params.iceCapColor),a=new Array(50).fill(new j),r=new Array(50).fill(new j),l=new Array(12).fill(new Z),n=new Array(4).fill(new j);return this.params.crystals&&this.params.crystals.forEach((c,h)=>{h<50&&(a[h]=new j(c.position[0],c.position[1],c.angle),r[h]=new j(c.length,c.width,0))}),this.params.cracks&&this.params.cracks.forEach((c,h)=>{h<12&&(l[h]=new Z(c.angle,c.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((c,h)=>{h<4&&(n[h]=new j(c.position[0],c.position[1],c.radius))}),new se({vertexShader:Te.vertexShader,fragmentShader:Te.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:a},crystalSizes:{value:r},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:l},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:n},iceCapColor:{value:o},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function wo(s){const e=s.surface_elements||s.surface||s;let t=[.9,.95,1];const o=s.planet_info?.base_color||s.base_color;if(o&&typeof o=="string"){const c=o.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255],t=[Math.min(t[0]+.1,1),Math.min(t[1]+.15,1),Math.min(t[2]+.2,1)]}else Array.isArray(o)&&(t=o);let a=[],r=[],l=[];if(s.seeds){const c=x=>{let y=x;return()=>(y=(y*1664525+1013904223)%4294967296,y/4294967296)},h=x=>{const y=x()*Math.PI*2,M=Math.acos(x()*2-1),z=Math.sin(M)*Math.cos(y),L=Math.sin(M)*Math.sin(y);return[z,L]},m=c(s.seeds.planet_seed),E=4+Math.floor(m()*6);for(let x=0;x<E;x++)a.push({position:h(m),length:.1+m()*.2,width:.05+m()*.1,angle:m()*Math.PI*2});const b=c(s.seeds.shape_seed),C=3+Math.floor(b()*5);for(let x=0;x<C;x++)r.push({angle:b()*Math.PI*2,length:.2+b()*.6});const _=c(s.seeds.shape_seed+500),w=2+Math.floor(_()*3);for(let x=0;x<w;x++)l.push({position:h(_),radius:.15+_()*.25})}const n={crystals:e.crystals?.length>0?e.crystals:a,cracks:e.cracks?.length>0?e.cracks:r,iceCaps:e.ice_caps?.length>0?e.ice_caps:l,baseTextureIntensity:.3,crystalColor:new f(t[0]*.8,t[1]*.9,t[2]*1),crackColor:new f(t[0]*.3,t[1]*.3,t[2]*.4),iceCapColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1)};return new Te(n)}class bt{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new pt,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,o=e,a=t*Math.cos(o),r=t*Math.sin(o),l=r*.8,n=new ve,c=new Float32Array([0,0,0,a,l,r]);n.setAttribute("position",new K(c,3));const h=new $e({color:16776960,linewidth:5,transparent:!1});this.sunLine=new Ze(n,h),this.debugGroup.add(this.sunLine);const m=e+Math.PI,E=t*.7,b=E*Math.cos(m),C=0,_=E*Math.sin(m),w=new de(this.planetRadius*.15,16,16),x=new Oe({color:16776960,transparent:!1,opacity:1}),y=new oe(w,x);y.position.set(b,C,_),this.debugGroup.add(y),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=new ve,a=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);o.setAttribute("position",new K(a,3));const r=new $e({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new Ze(o,r),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,o=this.params.rotationPeriod||86400,a=this.params.initialAngleRotation||0,r=e-t,l=2*Math.PI/o;return(a+r*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),o=this.planetRadius*20,a=this.sunLine.geometry,r=a.attributes.position.array;r[3]=o*Math.cos(t),r[4]=0,r[5]=o*Math.sin(t),a.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=this.rotationLine.geometry,a=o.attributes.position.array;a[0]=-t*Math.cos(e),a[1]=0,a[2]=-t*Math.sin(e),a[3]=t*Math.cos(e),a[4]=0,a[5]=t*Math.sin(e),o.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function Co(s,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:s.debug?.cosmic_origin_time||s.timing?.cosmic_origin_time||s.cosmicOriginTime,rotationPeriod:s.planet_info?.rotation_period||s.rotation_period_seconds||86400,initialAngleRotation:s.debug?.initial_angle_rotation||s.timing?.initial_angle_rotation||s.initialAngleRotation||0,planetRadius:e,orbitalAngle:s.timing?.orbital_angle||0,sunAngle:s.sun_angle||s.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new bt(e,t)}function Le(s){const e=s.replace("#",""),t=parseInt(e.substr(0,2),16)/255,o=parseInt(e.substr(2,2),16)/255,a=parseInt(e.substr(4,2),16)/255;return new f(t,o,a)}function Ye(s){return s.length>=3?new f(s[0],s[1],s[2]):new f(.5,.5,.5)}function vt(s){if(s.ocean_color){if(typeof s.ocean_color=="string")return Le(s.ocean_color);if(Array.isArray(s.ocean_color))return Ye(s.ocean_color)}if(s.planet_info?.base_color){if(typeof s.planet_info.base_color=="string")return Le(s.planet_info.base_color);if(Array.isArray(s.planet_info.base_color))return Ye(s.planet_info.base_color)}if(s.base_color){if(typeof s.base_color=="string")return Le(s.base_color);if(Array.isArray(s.base_color))return Ye(s.base_color)}const e=s.planet_info?.type||s.type||"Unknown";return So(e)}function So(s){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[s]||"#FFFFFF";return Le(t)}class ye{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return ye.instance||(ye.instance=new ye),ye.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,o)=>new Ne(e),fromPythonData:(e,t,o)=>{const a=vt(e),r=[a.r,a.g,a.b];return new Ne({color:r,roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}}),this.registerEffect("gas_giant_bands",{create:(e,t,o)=>new Me(o,e),fromPythonData:(e,t,o)=>yo(o,e)}),this.registerEffect("atmospheric_halo",{create:(e,t)=>new Ee(t,e),fromPythonData:(e,t)=>bo(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new Ae(t,e),fromPythonData:(e,t)=>vo(t,e.atmosphere||{})}),this.registerEffect("dense_atmosphere",{create:(e,t)=>new je(t,e),fromPythonData:(e,t)=>xo(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new yt(t,e),fromPythonData:(e,t)=>go(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new ht(t,e),fromPythonData:(e,t)=>new ht(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,o)=>new Re(e),fromPythonData:(e,t,o)=>_o(e)}),this.registerEffect("icy_terrain",{create:(e,t,o)=>new Te(e),fromPythonData:(e,t,o)=>wo(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new bt(t,e),fromPythonData:(e,t)=>Co(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,o,a,r=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const n=l.create(t,o,a);if(!n)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:n,priority:r,enabled:!0};return this.effects.set(c.id,c),c}catch(n){return console.error(`Error creating effect '${e}':`,n),null}}createEffectFromPythonData(e,t,o,a,r=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,o,a,r);try{const n=l.fromPythonData(t,o,a);if(!n)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:n,priority:r,enabled:!0};return this.effects.set(c.id,c),c}catch(n){return console.error(`Error creating effect '${e}' from Python data:`,n),null}}createEffectsFromList(e,t,o){const a=[],r=e.sort((l,n)=>(l.priority||0)-(n.priority||0));for(const l of r){const n=this.createEffect(l.type,l.params,t,o,l.priority);n&&(n.enabled=l.enabled!==!1,a.push(n))}return a}createEffectsFromPythonPlanetData(e,t,o,a){const r=[];if(console.log("🌍 EffectRegistry received Python data:",e),console.log("🔍 Surface elements:",e.surface_elements),console.log("🌫️ Atmosphere:",e.atmosphere),console.log("💍 Rings:",e.rings),console.log("🪐 Planet info:",e.planet_info),e.surface_elements){const l=e.surface_elements;if(console.log("🏔️ Processing surface elements:",l.type,l),l.effects_3d&&Array.isArray(l.effects_3d)){console.log("✨ Applying modular 3D effects:",l.effects_3d);for(const n of l.effects_3d){const c=this.createEffect(n.type,n.params,t,o,n.priority||0);c&&(r.push(c),c.effect.addToScene&&c.effect.addToScene(a,o.position),console.log("✅ Added modular effect:",n.type))}}switch(l.type==="rendering_commands"&&l.commands&&(console.log("🎨 Executing rendering commands:",l.commands),this.executeRenderingCommands(l.commands,a,o,t)),console.log("🔍 Checking legacy surface type:",l.type),l.type){case"gas_giant":console.log("🌀 Creating Gas Giant bands effect");const n=this.createEffectFromPythonData("gas_giant_bands",l,t,o,0);n?(r.push(n),n.effect.addToScene?(n.effect.addToScene(a,o.position),console.log("✅ Added Gas Giant bands to scene")):n.effect.apply&&(n.effect.apply(o),console.log("✅ Applied Gas Giant bands to mesh"))):console.warn("⚠️ Failed to create Gas Giant effect");break;case"metallic":case"metallic_3d":console.log("⚙️ Creating Metallic surface effect");const c=this.createEffectFromPythonData("metallic_surface",{...e,surface:{...e.surface,base_color:e.planet_info?.base_color||e.surface?.base_color}},t,o,0);c?(r.push(c),c.effect.addToScene?(c.effect.addToScene(a,o.position),console.log("✅ Added Metallic surface to scene")):c.effect.apply&&(c.effect.apply(o),console.log("✅ Applied Metallic surface to mesh"))):console.warn("⚠️ Failed to create Metallic effect");break;case"rocky":const h=this.createEffectFromPythonData("rocky_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,o,0);h&&(r.push(h),h.effect.apply(o));break;case"icy":const m=this.createEffectFromPythonData("icy_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,o,0);m&&(r.push(m),m.effect.apply(o));break;case"oceanic":console.log("🌊 Oceanic planet detected - using generic rendering");break;default:console.log("❓ Unknown surface type:",l.type,"- trying generic effects");break}}else console.log("❌ No surface_elements found in Python data");if(e.atmosphere){if(console.log("🌫️ Applying atmospheric effects for:",e.planet_info?.type),e.atmosphere.halo||e.atmosphere.type!=="None"){const l=this.createEffectFromPythonData("atmospheric_halo",e,t,o,10);l&&(r.push(l),l.effect.addToScene(a,o.position),console.log("✅ Added atmospheric halo effect"))}if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const l=this.createEffectFromPythonData("atmospheric_streaks",e,t,o,20);l&&(r.push(l),l.effect.addToScene(a,o.position),console.log("✅ Added atmospheric streaks effect"))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const l=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),n={...e.atmosphere};l==="oceanic"&&(n.opacity=Math.min(n.opacity||.3,.15),n.width=Math.min(n.width||15,8));const c=this.createEffectFromPythonData("dense_atmosphere",n,t,o,5);c&&(r.push(c),c.effect.addToScene(a,o.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){console.log("💍 Applying ring system for:",e.planet_info?.type,"rings data:",e.rings);const l=this.createEffectFromPythonData("ring_system",e,t,o,1);l?(r.push(l),l.effect.addToScene(a,o.position),console.log("✅ Added ring system effect")):console.warn("⚠️ Failed to create ring effect")}else console.log("❌ No rings for:",e.planet_info?.type,"rings:",e.rings);if(e.surface_elements?.has_fragmentation_zones){const l=this.createEffectFromPythonData("fragmentation",e,t,o,5);l&&(r.push(l),l.effect.addToScene(a,o.position))}{const l=this.createEffectFromPythonData("visual_debug_3d",e,t,o,100);l?(r.push(l),l.effect.addToScene(a,o.position)):console.error(" Failed to create debug effect!")}return console.log("📊 EffectRegistry Summary:"),console.log(`   Total effects created: ${r.length}`),r.forEach((l,n)=>{console.log(`   ${n+1}. ${l.type} (${l.enabled?"enabled":"disabled"})`)}),r.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),r}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const o=this.effects.get(e);o&&(o.enabled=t!==void 0?t:!o.enabled)}updateAllEffects(e,t){for(const o of this.effects.values())if(o.enabled&&o.effect.update)try{o.effect.update(e,t)}catch(a){console.error(`Error updating effect ${o.type}:`,a)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}executeRenderingCommands(e,t,o,a){e.forEach((r,l)=>{try{switch(r.command){case"apply_material":this.executeApplyMaterial(r,o);break;case"create_surface_element":this.executeCreateSurfaceElement(r,t,a);break;default:console.warn(` Unknown command: ${r.command}`)}}catch(n){console.error(` Error executing command ${l}:`,n)}})}executeApplyMaterial(e,t){const o=e.properties;if(e.material_type==="phong"){const a=new Wt({color:new f(o.color),shininess:o.shininess||50,specular:new f(o.specular||"#222222"),transparent:o.transparent||!1,opacity:o.opacity||1});t.material=a}}executeCreateSurfaceElement(e,t,o){let a;switch(e.geometry.type){case"circle":a=new Yt(e.size*o*.1,e.geometry.segments||16);break;case"sphere":a=new de(e.radius*o*.1,12,12);break;case"irregular_polygon":a=new Ut(0,.05*o,8);break;default:console.warn(` Unknown geometry type: ${e.geometry.type}`);return}const r=e.color,l=new Oe({color:new f(r[0],r[1],r[2]),opacity:r[3]||1,transparent:(r[3]||1)<1}),n=new oe(a,l);if(e.position){const c=this.normalizedToSphere(e.position,o*(1+(e.geometry.elevation||0)));n.position.copy(c),n.lookAt(new j(0,0,0))}t.add(n)}normalizedToSphere(e,t){const[o,a]=e,r=Math.acos(1-2*((a+1)/2)),l=2*Math.PI*((o+1)/2),n=t*Math.sin(r)*Math.cos(l),c=t*Math.cos(r),h=t*Math.sin(r)*Math.sin(l);return new j(n,c,h)}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const we=ye.getInstance(),Ce={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmospheric_halo:{intensity:1,falloff:2,scale:1.2,pulsation:!1},gas_giant_bands:{numBands:8,animationSpeed:1,turbulence:.5,stormIntensity:.7}};function Po(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...Ce.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmospheric_halo",params:{...Ce.atmospheric_halo,color:[.6,.1,.9],scale:1.15},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"gas_giant_bands",params:Ce.gas_giant_bands,priority:0},{type:"atmospheric_halo",params:{...Ce.atmospheric_halo,color:[1,.6,.2],intensity:.8},priority:10});break;case"icy":e.push({type:"atmospheric_halo",params:{...Ce.atmospheric_halo,color:[.5,.8,1],intensity:.6,scale:1.1},priority:10});break;default:e.push({type:"atmospheric_halo",params:{color:[.5,.5,.8],intensity:.5},priority:10});break}return e}const Q={log:(s,e)=>{},warn:(s,e)=>{console.warn(`[Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`[Effects] ${s}`,e||"")},debug:(s,e)=>{}};new Date().toISOString();const Mo=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[o,a]=g.useState([]),[r,l]=g.useState({});g.useEffect(()=>{if(!s)return;const h=n(s);l(h),a(c(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=h)},[s,e]);function n(h){const m={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(h.planet_info&&h.surface_elements?m.hasValidStructure=!0:(h.planet_info||m.missingFields.push("planet_info"),h.surface_elements||m.missingFields.push("surface_elements")),h.surface_elements?.type==="oceanic"&&(m.oceanicData={hasAbstractLands:!!h.surface_elements.abstract_lands?.length,numGreenPatches:h.surface_elements.green_patches?.length||0,numClouds:h.surface_elements.clouds?.length||0,hasDepths:h.surface_elements.depths?.enabled||!1,baseColorIsBlue:h.planet_info?.base_color==="#0000FF",greenPatchColor:h.surface_elements.green_patches?.[0]?.color,issues:[]},m.oceanicData.numGreenPatches>15&&m.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),m.oceanicData.baseColorIsBlue||m.oceanicData.issues.push(`Color base no es azul puro: ${h.planet_info?.base_color}`),m.renderingIssues=m.oceanicData.issues),h.planet_info?.base_color&&h.planet_info?.type){const b={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[h.planet_info.type];b&&h.planet_info.base_color!==b?m.colorConsistency=`Inconsistente: esperado ${b}, recibido ${h.planet_info.base_color}`:m.colorConsistency="Correcto"}return m}function c(h){const m=[];if(!h.surface_elements?.type)return["No surface type defined"];const E=h.surface_elements.type.toLowerCase();switch(E){case"oceanic":m.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":m.push("RockyTerrainEffect");break;case"icy":m.push("IcyTerrainEffect");break;case"gas giant":m.push("GasGiantBandsEffect");break;default:m.push(`Generic effect for type: ${E}`)}return h.atmosphere?.density>0&&m.push("AtmosphericEffect"),h.rings&&m.push("RingSystemEffect"),m}return t?i.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[i.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),i.jsxs("div",{style:{marginBottom:"10px"},children:[i.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,i.jsx("br",{}),i.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,i.jsx("br",{}),i.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&i.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[i.jsx("strong",{children:"🌊 Oceanic Data:"}),i.jsx("br",{}),i.jsxs("span",{style:{color:r.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",r.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),i.jsx("br",{}),"Green Patches: ",r.oceanicData?.numGreenPatches,i.jsx("br",{}),"Clouds: ",r.oceanicData?.numClouds,i.jsx("br",{}),"Has Depths: ",r.oceanicData?.hasDepths?"Yes":"No",i.jsx("br",{}),r.oceanicData?.issues?.length>0&&i.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",i.jsx("br",{}),r.oceanicData.issues.map((h,m)=>i.jsxs("div",{children:["- ",h]},m))]})]}),i.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[i.jsx("strong",{children:"🎨 Effects Applied:"}),i.jsx("br",{}),o.map((h,m)=>i.jsxs("div",{style:{color:h.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",h]},m))]}),i.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function Eo(s){g.useEffect(()=>{if(s&&s.surface_elements?.type==="oceanic"){s.surface_elements.green_patches?.length>0;const e=s.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[s])}const Ao=({planetName:s,containerClassName:e="",width:t=800,height:o=600,autoRotate:a=!0,enableControls:r=!0,showDebugInfo:l=!1,planetData:n,cosmicOriginTime:c,initialAngleRotation:h,onDataLoaded:m,onEffectsCreated:E,onError:b})=>{const C=g.useRef(null),_=g.useRef(null),w=g.useRef(null),x=g.useRef(null),y=g.useRef(null),M=g.useRef(null),z=g.useRef(new Ht),L=g.useRef(null),ie=g.useRef(0),k=g.useRef(null),[ae,S]=g.useState(!0),[B,O]=g.useState(null),[R,X]=g.useState(null),[G,V]=g.useState([]),[W,Y]=g.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),H=g.useRef([]),ne=g.useRef(0),J=g.useRef(null),he=Math.floor(Date.now()/1e3),[I,q]=g.useState(0),re=c||R?.timing?.cosmic_origin_time||Date.now()/1e3-3600,xe=he-re+I;ie.current=xe;const le=g.useCallback(()=>{if(!C.current||!w.current||!x.current)return;const d=C.current,p=d.clientWidth||400,u=d.clientHeight||400;w.current.setSize(p,u),x.current.aspect=p/u,x.current.updateProjectionMatrix()},[]),ke=async d=>{if(!(!y.current||!_.current)){Q.log("Applying modular effects from API data",{planet:d.planet_info.name,type:d.planet_info.type});try{Ve();const p=we.createEffectsFromPythonPlanetData(d,1,y.current,_.current);V(p),H.current=p,E&&E(p),Q.log(`Successfully applied ${p.length} modular effects`),We()}catch(p){Q.error("Error applying modular effects",p),Fe()}}},Ie=g.useCallback(()=>{if(!C.current)return!1;try{for(;C.current.firstChild;)C.current.removeChild(C.current.firstChild);_.current=null,x.current=null,w.current=null,y.current=null,F.current=null;const d=C.current,p=d.clientWidth||t||400,u=d.clientHeight||o||400,P=new $t;P.background=new f(1297),_.current=P;const A=new Zt(45,p/u,.1,1e4);A.position.set(0,80,120),A.lookAt(0,0,0),x.current=A;const v=new Xt({antialias:!0,alpha:!0,powerPreference:"high-performance"});return v.setSize(p,u),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.shadowMap.enabled=!0,v.shadowMap.type=Kt,v.toneMapping=qt,v.toneMappingExposure=1.2,v.outputColorSpace=Qt,C.current.appendChild(v.domElement),w.current=v,_t(P,null),wt(P),r&&Ct(A,v.domElement),!0}catch(d){return console.error("Error initializing Three.js:",d),!1}},[R,n,c]),Ge=d=>{if(!d)return 0;const p=d.sun_angle||d.lighting?.sun_angle;if(p!==void 0)return p;const u=d.timing?.current_orbital_angle||d.timing?.orbital_angle;return u??0},ee=g.useRef(null),ce=g.useRef(null),te=g.useRef(null),F=g.useRef(null),Be=d=>{d.castShadow=!0,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,d.shadow.camera.near=.5,d.shadow.camera.far=50,d.shadow.camera.left=-10,d.shadow.camera.right=10,d.shadow.camera.top=10,d.shadow.camera.bottom=-10},qe=d=>{if(!ee.current||!_.current)return;const p=Ge(d),u=10,P=p+Math.PI,A=Math.sin(p)*5,v=u*Math.cos(P),N=A,$=u*Math.sin(P);ee.current.position.set(v,N,$),ee.current.target.position.set(0,0,0),_.current.children.includes(ee.current.target)||_.current.add(ee.current.target),ce.current&&ce.current.position.set(-v*.5,0,-$*.5)},Qe=(d,p)=>{if(!n?.orbital_radius)return;const u=p?.timing?.max_orbital_radius;if(!u)return;const v=20+n.orbital_radius/u*80,N=64,$=[];for(let fe=0;fe<=N;fe++){const pe=fe/N*Math.PI*2;$.push(new j(v*Math.cos(pe),0,v*Math.sin(pe)))}const ue=new ve().setFromPoints($),_e=new $e({color:7372944,transparent:!0,opacity:.4,linewidth:1}),me=new Ze(ue,_e);d.add(me),F.current=me},xt=d=>{const u=new de(3,32,32),P=new Oe({color:16777028,transparent:!1,opacity:1}),A=new oe(u,P);A.position.set(0,0,0);const v=new de(3*1.8,16,16),N=new Oe({color:16777028,transparent:!0,opacity:.3}),$=new oe(v,N);A.add($),d.add(A),te.current=A},_t=(d,p)=>{xt(d);{const u=new nt(16777215,2);u.position.set(10,0,0),u.castShadow=!0,Be(u),d.add(u),ee.current=u;const P=new nt(4482815,.05);P.position.set(-5,0,0),d.add(P),ce.current=P;const A=new Jt(2236996,.1);d.add(A);return}},wt=d=>{const p=n?.diameter?n.diameter/15e3:1,u=Math.max(Math.min(p,4),1.5),P=new de(u,128,64),A=new Pe({color:8421504,metalness:.1,roughness:.8,transparent:!1,opacity:1}),v=new oe(P,A);v.castShadow=!0,v.receiveShadow=!0,v.position.set(50,0,0),d.add(v),y.current=v,console.log("🪐 Base planet created - color will be updated when API data arrives")},Je=d=>{if(!y.current||!d)return;const p=y.current.material,u=p.color;if(Math.abs(u.r-.5)<.01&&Math.abs(u.g-.5)<.01&&Math.abs(u.b-.5)<.01){const A=vt(d);p.color.copy(A),console.log("🎨 Applied fallback color from centralized system:",{apiColor:d.planet_info?.base_color,appliedColor:A,planetType:d.planet_info?.type})}else console.log("🎨 Material already modified by effects, skipping base color");d.surface_elements?.metalness!==void 0&&(p.metalness=d.surface_elements.metalness),d.surface_elements?.roughness!==void 0&&(p.roughness=d.surface_elements.roughness)},Ct=(d,p)=>{const u=new oo(d,p);u.enableDamping=!0,u.dampingFactor=.05,u.minDistance=50,u.maxDistance=800,u.autoRotate=a,u.autoRotateSpeed=.1,u.enablePan=!0,u.enableZoom=!0,u.target.set(0,0,0),M.current=u},St=g.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{S(!0),O(null),Q.log("Loading planet data from API",{planetName:s});const p=await fetch("/api/planet/rendering-data");if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);const u=await p.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const P=u.planet_data,A=u.timing,v=u.rendering_data,N={planet_info:v?.planet_info||{name:P.name,type:P.planet_type,base_color:"#808080",radius:P.diameter/15e3},surface_elements:v?.surface_elements,atmosphere:v?.atmosphere,rings:v?.rings,effects_3d:v?.effects_3d,shader_uniforms:v?.shader_uniforms,universal_actions:v?.universal_actions,timing:{cosmic_origin_time:A.cosmic_origin_time,current_time_seconds:A.current_time_seconds,elapsed_time:A.elapsed_time,initial_orbital_angle:P.initial_orbital_angle,current_orbital_angle:P.current_orbital_angle,max_orbital_radius:A.max_orbital_radius,system_max_orbital_radius:P.system_max_orbital_radius},original_planet_data:P};return X(N),k.current=N,Q.log("API data loaded successfully",{planet:N.planet_info.name,type:N.planet_info.type,hasEffects:!!N.surface_elements,fullRenderingData:v}),console.log("🌍 Planet API Response:",u),console.log("🎨 Rendering Data:",v),console.log("🔧 Processed Data:",N),m&&m(N),N}catch(d){const p=d instanceof Error?d.message:"Unknown error";return O(p),b&&b(p),null}finally{S(!1),window.isLoadingPlanetData=!1}}},[s,m,b]);g.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{S(!0),O(null),Q.log("Loading planet data from API",{planetName:s});const p=await fetch("/api/planet/rendering-data");if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);const u=await p.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const P=u.planet_data,A=u.timing,v=u.rendering_data,N={planet_info:v?.planet_info||{name:P.name,type:P.planet_type,base_color:"#808080",radius:P.diameter/15e3},surface_elements:v?.surface_elements,atmosphere:v?.atmosphere,rings:v?.rings,effects_3d:v?.effects_3d,shader_uniforms:v?.shader_uniforms,universal_actions:v?.universal_actions,timing:{cosmic_origin_time:A.cosmic_origin_time,current_time_seconds:A.current_time_seconds,elapsed_time:A.elapsed_time,initial_orbital_angle:P.initial_orbital_angle,current_orbital_angle:P.current_orbital_angle,max_orbital_radius:A.max_orbital_radius,system_max_orbital_radius:P.system_max_orbital_radius},original_planet_data:P};X(N),k.current=N,Q.log("API data loaded successfully",{planet:N.planet_info.name,type:N.planet_info.type,hasEffects:!!N.surface_elements,fullRenderingData:v}),console.log("🌍 Full Load - API Response:",u),console.log("🎨 Full Load - Rendering Data:",v),console.log("🔧 Full Load - Processed Data:",N),qe(N),F.current&&_.current&&(_.current.remove(F.current),F.current.geometry.dispose(),F.current.material.dispose(),F.current=null),Qe(_.current,N),await ke(N),Je(N),m&&m(N)}catch(d){const p=d instanceof Error?d.message:"Unknown error";O(p),b&&b(p),Fe()}finally{S(!1),window.isLoadingPlanetData=!1}}},[s,n,c,h]);const et=g.useCallback(()=>{if(!R||!y.current)return;const d=n?.orbital_period_seconds||365.25*24*3600,p=2*Math.PI/d,u=R.timing?.initial_orbital_angle||0,P=Date.now()/1e3,A=0,v=c||R.timing?.cosmic_origin_time||Date.now()/1e3-3600,N=P-v+A,$=(u+N*p)%(2*Math.PI),ue=R.timing?.max_orbital_radius||100,me=20+R.planet_info?.orbital_radius/ue*80,fe=me,pe=me*Math.cos($),De=fe*Math.sin($);y.current.position.x=pe,y.current.position.z=De,y.current.position.y=0},[R,n,c]),Pt=g.useCallback(async d=>{const p=d||R;if(p&&_.current)try{qe(p),F.current&&_.current&&(_.current.remove(F.current),F.current.geometry.dispose(),F.current.material.dispose(),F.current=null),Qe(_.current,p),await ke(p),Je(p)}catch{Fe()}},[R]),Fe=()=>{if(!(!_.current||!y.current)){Q.warn("Applying fallback effects for planet type:",n?.planet_type);try{Ve(),y.current.material instanceof Pe&&(y.current.material.color.setHex(6710886),console.log("⚠️ Applied fallback generic color - API should provide real colors"));try{const d=Po("generic"),p=we.createEffectsFromList(d,1,y.current);p.forEach(u=>{u.effect.addToScene&&_.current&&y.current&&u.effect.addToScene(_.current,y.current.position)}),H.current=p,V(p)}catch(d){console.warn("Could not create fallback effects, using basic material only:",d)}We()}catch(d){Q.error("Error applying fallback effects",d)}}},Ve=()=>{H.current.forEach(d=>{try{d.effect.dispose&&d.effect.dispose()}catch{}}),H.current=[],V([])},tt=g.useCallback(()=>{L.current=requestAnimationFrame(tt);const d=performance.now(),p=z.current.getDelta();M.current&&M.current.update();try{we.updateAllEffects(p,y.current?.rotation.y)}catch{}if(y.current&&k.current){k.current.planet_info?.name;const u=k.current.original_planet_data,P=u?.orbital_period_seconds||365.25*24*3600,A=k.current.timing?.initial_orbital_angle||0;c||k.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const v=u?.axial_tilt||0,N=2*Math.PI/P,$=(A+ie.current*N)%(2*Math.PI),ue=k.current.timing?.max_orbital_radius||k.current.timing?.system_max_orbital_radius,_e=u?.orbital_radius;if(!ue||!_e)return;const pe=20+_e/ue*80,De=u?.eccentricity_factor||.1,ot=pe,Mt=ot*Math.sqrt(1-De*De),Et=ot*Math.cos($),At=Mt*Math.sin($);y.current.position.x=Et,y.current.position.z=At,y.current.position.y=0,M.current&&M.current.target.set(0,0,0);const jt=u?.rotation_period_seconds||86400,Nt=2*Math.PI/jt;y.current.rotation.y=ie.current*Nt%(2*Math.PI),y.current.rotation.z=v*(Math.PI/180)}if(H.current.forEach(u=>{u.effect.updateUniforms&&u.effect.updateUniforms(p)}),w.current&&_.current&&x.current){const u=performance.now();w.current.render(_.current,x.current);const P=performance.now()-u;if(d-ne.current>5e3){const A=1e3/(d-ne.current);We(),Y(v=>({...v,frameRate:Math.round(A),renderTime:Math.round(P*100)/100})),ne.current=d}}},[]),We=g.useCallback(()=>{const d=we.getStats();Y(p=>({...p,activeEffects:d.activeEffects,enabledEffects:d.enabledEffects}))},[]);return g.useEffect(()=>{let d=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!d)return;const u=await St();if(!d)return;if(!Ie()){d&&O("Failed to initialize 3D renderer");return}if(!d||(tt(),C.current&&"ResizeObserver"in window&&(J.current=new ResizeObserver(le),J.current.observe(C.current)),window.addEventListener("resize",le),!d))return;u?await Pt(u):Fe()}catch(u){d&&O(u instanceof Error?u.message:"Unknown initialization error")}})(),()=>{if(d=!1,k.current=null,L.current&&cancelAnimationFrame(L.current),J.current&&J.current.disconnect(),window.removeEventListener("resize",le),Ve(),M.current&&M.current.dispose(),te.current&&_.current&&(_.current.remove(te.current),te.current.geometry.dispose(),te.current.material.dispose(),te.current=null),F.current&&_.current&&(_.current.remove(F.current),F.current.geometry.dispose(),F.current.material.dispose(),F.current=null),w.current&&C.current)try{C.current.contains(w.current.domElement)&&C.current.removeChild(w.current.domElement),w.current.dispose()}catch{}}},[]),g.useEffect(()=>{const d=setInterval(()=>{const p=we.getStats();Y(u=>({...u,activeEffects:p.activeEffects,enabledEffects:p.enabledEffects}))},1e4);return()=>clearInterval(d)},[]),g.useEffect(()=>{R&&_.current&&y.current&&et()},[R,et]),Eo(R),i.jsxs("div",{className:`relative ${e}`,children:[l&&R&&i.jsx(Mo,{planetData:R,showInPage:!0,showInConsole:!0}),i.jsx("div",{ref:C,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),ae&&i.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:i.jsxs("div",{className:"text-white text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),i.jsx("div",{children:"Loading planet..."})]})}),B&&i.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[i.jsx("strong",{children:"Error:"})," ",B]}),R&&!ae&&i.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[i.jsx("h3",{className:"text-lg font-bold",children:R.planet_info.name}),i.jsx("p",{className:"text-sm opacity-80",children:R.planet_info.type}),i.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[G.length," effects active"]}),R.surface_elements?.description&&i.jsx("p",{className:"text-xs mt-2 opacity-60",children:R.surface_elements.description.appearance})]}),l&&i.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[i.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),i.jsxs("div",{children:["Frame Rate: ",W.frameRate," FPS"]}),i.jsxs("div",{children:["Render Time: ",W.renderTime,"ms"]}),i.jsxs("div",{children:["Active Effects: ",W.activeEffects]}),i.jsxs("div",{children:["Enabled Effects: ",W.enabledEffects]}),i.jsxs("div",{className:"mt-2",children:[i.jsx("div",{className:"font-semibold",children:"Effects:"}),G.map(d=>i.jsxs("div",{className:"ml-2",children:[d.type," (",d.enabled?"ON":"OFF",")"]},d.id))]})]})]})};class jo extends ut.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?i.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:i.jsxs("div",{className:"text-center p-4",children:[i.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),i.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const No=s=>i.jsx(jo,{children:i.jsx(Ao,{...s})}),Ro=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:o,initialAngleRotation:a})=>{const r=g.useRef(null),l=g.useRef(null),[n,c]=g.useState("Aligning Stargate..."),[h,m]=g.useState(!1),[E,b]=g.useState(!1),[C,_]=g.useState(!1),[w,x]=g.useState(!0),[y,M]=g.useState(!0),[z,L]=g.useState(null),[ie,k]=g.useState(null);g.useEffect(()=>{const S=document.createElement("style");return S.textContent=`
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
    `,document.head.appendChild(S),()=>{document.head.removeChild(S)}},[]),g.useEffect(()=>{const S=r.current;if(!S)return;const B=S.getContext("2d");if(!B)return;let O=[];const R=800;let X,G;const V=800;let W,Y=.5;function H(){const I=S?.parentElement;if(!I||!S)return;const q=I.clientWidth,re=I.clientHeight;S.width=Math.min(q,V),S.height=Math.min(re,V),X=S.width/2,G=S.height/2}function ne(){H(),O=[];for(let I=0;I<R;I++)O.push({x:Math.random()*(S?.width||800),y:Math.random()*(S?.height||800),z:Math.random()*(S?.width||800),o:Math.random()});J()}function J(){!S||!B||(B.clearRect(0,0,S.width,S.height),O.forEach(I=>{I.z-=Y,I.z<=0&&(I.z=S.width,I.x=Math.random()*S.width,I.y=Math.random()*S.height,I.o=Math.random());const q=S.width/I.z,re=(I.x-X)*q+X,xe=(I.y-G)*q+G,le=2*q;B.beginPath(),B.fillStyle=`rgba(255, 255, 255, ${I.o})`,B.arc(re,xe,le,0,2*Math.PI),B.fill()}),Y<60&&(Y+=1),W=requestAnimationFrame(J))}ne();const he=()=>H();return window.addEventListener("resize",he),()=>{window.removeEventListener("resize",he),W&&cancelAnimationFrame(W)}},[]),g.useEffect(()=>{if(e&&!w){const S=new Image;S.onload=()=>{l.current&&(l.current.src=e,b(!0),_(!0))},S.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{b(!0),_(!0)},1500)},S.src=e}else(w||!e)&&setTimeout(()=>{b(!0),_(!0)},1500)},[e,w]),g.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){c("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),m(!0);const B=(V,W)=>Array.from({length:W},()=>V[Math.floor(Math.random()*V.length)]).join(""),O=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let R=0,X=0;const G=()=>{if(R>=O.length){const W="Stargate system aligned";let Y=0;c("");const H=()=>{Y<W.length?(c(W.substring(0,Y+1)),Y++,setTimeout(H,30)):m(!1)};H();return}const V=O[R];c(B(V.chars,32)),X++,X>=V.iterations&&(R++,X=0),setTimeout(G,V.duration)};G()},[]);const ae=()=>{x(!w),w||(b(!0),_(!0))};return i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-3",children:[i.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),y&&i.jsx("div",{className:"flex items-center gap-2",children:i.jsx("button",{onClick:ae,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${w?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:w?"2D View":"3D View"})})]}),i.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[i.jsx("canvas",{ref:r,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${C?"opacity-0":"opacity-100"}`,style:{filter:C?"blur(50px)":"none"}}),w&&E&&t&&i.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${E?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:i.jsx(No,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:o,initialAngleRotation:a,onDataLoaded:S=>{L(S)},onError:S=>{k(S),console.error("❌ Planet rendering error:",S)}})}),!w&&i.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${E?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:E&&e?i.jsx("div",{className:"w-full h-full flex items-center justify-center",children:i.jsx(Ft,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:i.jsx("img",{ref:l,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):i.jsx("img",{ref:l,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),y&&i.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:w?"🌍 3D":"🖼️ 2D"})]}),i.jsxs("div",{className:"text-center mt-auto",children:[i.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${h?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[i.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[i.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),n]}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),i.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",w&&z&&i.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",z.planet_info?.type," Planet",z.atmosphere&&i.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),z.rings?.has_rings&&i.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),w&&ie&&i.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},To=({currentPlanet:s,system:e,galaxy:t,systemPlanets:o})=>{const[a,r]=g.useState(null),[l,n]=g.useState(null),[c,h]=g.useState(!1),[m,E]=g.useState(!1),[b,C]=g.useState(!0);g.useEffect(()=>{if(o&&o.length>0){const x=o.findIndex(y=>y.name.toLowerCase()===s.toLowerCase());x!==-1?(x>0?(r(o[x-1].name.toLowerCase()),h(!0)):e.index>0?(r("__prev_system__"),h(!0)):h(!1),x<o.length-1?(n(o[x+1].name.toLowerCase()),E(!0)):(n("__next_system__"),E(!0))):(h(!1),E(!1))}else h(!1),E(!1);C(!1)},[s,e.index,o]);const _=async()=>{const x=t.coordinates.join(",");if(a==="__prev_system__")try{const y=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(y.ok){const M=await y.json();if(M.system&&M.system.planets&&M.system.planets.length>0){const L=M.system.planets[M.system.planets.length-1].name.toLowerCase();Se(x,e.index-1,L,M.system.planets),He(x,e.index-1),window.location.href=`/planet/${L}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else a&&(Se(x,e.index,a,o),window.location.href=`/planet/${a}`)},w=async()=>{const x=t.coordinates.join(",");if(l==="__next_system__")try{const y=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(y.ok){const M=await y.json();if(M.system&&M.system.planets&&M.system.planets.length>0){const L=M.system.planets[0].name.toLowerCase();Se(x,e.index+1,L,M.system.planets),He(x,e.index+1),window.location.href=`/planet/${L}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(Se(x,e.index,l,o),window.location.href=`/planet/${l}`)};return b?null:i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("button",{onClick:_,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:i.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),i.jsx("button",{onClick:w,disabled:!m,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${m?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:i.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},ko=({planet:s,system:e,galaxy:t,planet_url:o,version:a,image_url:r,cosmic_origin_time:l,initial_angle_rotation:n})=>{const[c]=g.useState(t.coordinates.join(","));g.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),Se(c,e.index,s.name,e.planets||[]),He(c,e.index)},[c,e.index,s.name]);const h=b=>b.replace(/_/g," "),m=b=>b.replace(/_/g," "),E=b=>b.replace(/_/g," ");return i.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[i.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),i.jsxs("div",{className:"relative z-10",children:[i.jsx(kt,{}),i.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:i.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",h(s.name),"'"]})}),i.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",m(e.name),"' - Galaxy '",E(t.name),"'"]}),i.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),i.jsx(To,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),i.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:i.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[i.jsx("div",{className:"order-1 lg:order-1",children:i.jsx(Ro,{planetUrl:o,imageUrl:r,planet:s,cosmicOriginTime:l,initialAngleRotation:n})}),i.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),i.jsx("div",{className:"order-2 lg:order-2",children:i.jsx(eo,{planet:s,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:n})})]})}),i.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:i.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:i.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",m(e.name),"'"]})})})]}),i.jsx(Rt,{version:a})]}),i.jsx(Dt,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),o=document.getElementById("meta-data");if(!s||!e||!t||!o){console.error("Missing required data elements");return}const a=JSON.parse(s.textContent||"{}"),r=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),n=JSON.parse(o.textContent||"{}"),c={planet:a,system:r,galaxy:l,planet_url:n.planet_url,version:n.version,image_url:n.image_url,cosmic_origin_time:n.cosmic_origin_time,initial_angle_rotation:n.initial_angle_rotation},h=document.getElementById("atlas-react-root");h&&Tt.createRoot(h).render(ut.createElement(ko,c))}catch(s){console.error("Error initializing Planet React app:",s)}});
