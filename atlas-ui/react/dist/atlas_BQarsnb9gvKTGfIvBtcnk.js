import{r as g,j as i,R as ht,V as jt,c as At}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Nt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Rt,U as Tt,m as Se,c as Ue,a as kt}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as Dt,V as A,n as be,T as ge,Q as tt,l as st,o as Z,R as It,p as zt,q as Lt,e as ve,r as K,s as ie,N as Ft,t as dt,C as f,c as he,d as se,u as ut,v as $e,G as mt,w as Pe,F as Ot,x as it,L as Ye,g as He,M as Fe,y as Vt,z as Bt,H as Wt,I as Gt,S as Ut,P as Yt,W as Ht,J as $t,K as Zt,O as Xt,D as ot,A as Kt}from"./atlas_ZgUbUwm-J4U4iRNwqY-vk.js";const qt=({planet:o,system:e,galaxy:t,cosmicOriginTime:s,initialAngleRotation:a})=>{const[r,l]=g.useState(!1),n=y=>y.replace(/_/g," "),c=y=>{const C=y/86400;return C<30?`${C.toFixed(2)} days`:C<365?`${(C/30).toFixed(2)} months`:`${(C/365).toFixed(2)} years`},h=y=>{const C=y*9/5+32;return`${y.toFixed(1)}°C (${C.toFixed(1)}°F)`},m=y=>`${y.toExponential(2)} kg`,j=y=>y>=1e3?`${(y/1e3).toFixed(2)} km`:`${y.toFixed(2)} m`;return i.jsxs("div",{className:"h-full flex flex-col relative",children:[i.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),i.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[i.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),i.jsx(Rt,{type:"planet",name:o.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:o.name,className:"text-xs"})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),i.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:o.planet_type})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),i.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:o.atmosphere})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),i.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:o.life_forms})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),i.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),i.jsx("div",{className:"text-xs font-bold text-orange-300",children:m(o.mass)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),i.jsx("div",{className:"text-xs font-bold text-orange-300",children:j(o.diameter)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),i.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[o.density.toFixed(2)," kg/m³"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),i.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[o.gravity.toFixed(2)," m/s²"]})]})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),i.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.orbital_radius.toFixed(2)," AU"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),i.jsx("div",{className:"text-xs font-bold text-cyan-300",children:c(o.orbital_period_seconds)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.orbital_speed.toFixed(2)," m/s"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.axial_tilt.toFixed(2),"°"]})]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),i.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),i.jsx("div",{className:"text-xs font-bold text-red-300",children:h(o.surface_temperature)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),i.jsx("div",{className:"text-xs font-bold text-red-300",children:c(o.rotation_period_seconds)})]})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",o.elements.length,")"]}),o.elements.length>4&&i.jsx("button",{onClick:()=>l(!r),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:r?"▲ Less":"▼ All"})]}),i.jsx("div",{className:"flex flex-wrap gap-1",children:(r?o.elements:o.elements.slice(0,4)).map((y,C)=>i.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:y},C))})]})]}),i.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[i.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),i.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Status:"}),i.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Planet:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(o.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"System:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(e.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"System ID:"}),i.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(t.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),i.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},at={type:"change"},Ze={type:"start"},ft={type:"end"},Le=new It,nt=new zt,Qt=Math.cos(70*Lt.DEG2RAD),z=new A,U=2*Math.PI,T={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ge=1e-6;class Jt extends Dt{constructor(e,t=null){super(e,t),this.state=T.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:be.ROTATE,MIDDLE:be.DOLLY,RIGHT:be.PAN},this.touches={ONE:ge.ROTATE,TWO:ge.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new tt,this._lastTargetPosition=new A,this._quat=new tt().setFromUnitVectors(e.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new st,this._sphericalDelta=new st,this._scale=1,this._panOffset=new A,this._rotateStart=new Z,this._rotateEnd=new Z,this._rotateDelta=new Z,this._panStart=new Z,this._panEnd=new Z,this._panDelta=new Z,this._dollyStart=new Z,this._dollyEnd=new Z,this._dollyDelta=new Z,this._dollyDirection=new A,this._mouse=new Z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ts.bind(this),this._onPointerDown=es.bind(this),this._onPointerUp=ss.bind(this),this._onContextMenu=cs.bind(this),this._onMouseWheel=as.bind(this),this._onKeyDown=ns.bind(this),this._onTouchStart=rs.bind(this),this._onTouchMove=ls.bind(this),this._onMouseDown=is.bind(this),this._onMouseMove=os.bind(this),this._interceptControlDown=hs.bind(this),this._interceptControlUp=ds.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(at),this.update(),this.state=T.NONE}update(e=null){const t=this.object.position;z.copy(t).sub(this.target),z.applyQuaternion(this._quat),this._spherical.setFromVector3(z),this.autoRotate&&this.state===T.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=U:s>Math.PI&&(s-=U),a<-Math.PI?a+=U:a>Math.PI&&(a-=U),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=l!=this._spherical.radius}if(z.setFromSpherical(this._spherical),z.applyQuaternion(this._quatInverse),t.copy(this.target).add(z),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const n=z.length();l=this._clampDistance(n*this._scale);const c=n-l;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const n=new A(this._mouse.x,this._mouse.y,0);n.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const h=new A(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(n),this.object.updateMatrixWorld(),l=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Le.origin.copy(this.object.position),Le.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Le.direction))<Qt?this.object.lookAt(this.target):(nt.setFromNormalAndCoplanarPoint(this.object.up,this.target),Le.intersectPlane(nt,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ge||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ge||this._lastTargetPosition.distanceToSquared(this.target)>Ge?(this.dispatchEvent(at),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?U/60*this.autoRotateSpeed*e:U/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){z.setFromMatrixColumn(t,0),z.multiplyScalar(-e),this._panOffset.add(z)}_panUp(e,t){this.screenSpacePanning===!0?z.setFromMatrixColumn(t,1):(z.setFromMatrixColumn(t,0),z.crossVectors(this.object.up,z)),z.multiplyScalar(e),this._panOffset.add(z)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;z.copy(a).sub(this.target);let r=z.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/s.clientHeight,this.object.matrix),this._panUp(2*t*r/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,r=t-s.top,l=s.width,n=s.height;this._mouse.x=a/l*2-1,this._mouse.y=-(r/n)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(U*this._rotateDelta.x/t.clientHeight),this._rotateUp(U*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(s*s+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),r=.5*(e.pageY+s.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(U*this._rotateDelta.x/t.clientHeight),this._rotateUp(U*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,n=(e.pageY+t.y)*.5;this._updateZoomParameters(l,n)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Z,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function es(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function ts(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function ss(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ft),this.state=T.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function is(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=T.DOLLY;break;case be.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=T.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=T.ROTATE}break;case be.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=T.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=T.PAN}break;default:this.state=T.NONE}this.state!==T.NONE&&this.dispatchEvent(Ze)}function os(o){switch(this.state){case T.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case T.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case T.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function as(o){this.enabled===!1||this.enableZoom===!1||this.state!==T.NONE||(o.preventDefault(),this.dispatchEvent(Ze),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(ft))}function ns(o){this.enabled!==!1&&this._handleKeyDown(o)}function rs(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=T.TOUCH_ROTATE;break;case ge.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=T.TOUCH_PAN;break;default:this.state=T.NONE}break;case 2:switch(this.touches.TWO){case ge.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=T.TOUCH_DOLLY_PAN;break;case ge.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=T.TOUCH_DOLLY_ROTATE;break;default:this.state=T.NONE}break;default:this.state=T.NONE}this.state!==T.NONE&&this.dispatchEvent(Ze)}function ls(o){switch(this._trackPointer(o),this.state){case T.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case T.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case T.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case T.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=T.NONE}}function cs(o){this.enabled!==!1&&o.preventDefault()}function hs(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ds(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class rt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class pt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:s,ring_inner_radius:a,ring_outer_radius:r,tilt_factor:l,planet_radius:n,shape_seed:c}=e;if(!t||!s){console.warn("No ring data provided");return}const h=[...t.particles,...s.particles],m=h.length,j=new rt(c||12345),y=new ve,C=new Float32Array(m*3),x=new Float32Array(m*3),w=new Float32Array(m),v=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],b=j.choice(v);for(let M=0;M<m;M++){const L=h[M],F=this.planetRadius/(n||200),oe=(c||12345)+M,k=new rt(oe),ae=L.distance*F,S=L.angle,B=ae*Math.sin(S),O=Math.asin((l||.2)*.5),R=B*Math.sin(O),X=B*Math.cos(O),V=((r||400)-(a||200))*F*.4,W=k.uniform(-V*.8,V*.8),G=k.uniform(-V*.3,V*.3),Y=k.uniform(-.08,.08),H=ae+G,ne=S+Y;C[M*3]=H*Math.cos(ne),C[M*3+1]=R+W+this.planetRadius*.15,C[M*3+2]=X+k.uniform(-V*.4,V*.4),L.color[0]/255;const de=(L.distance-(a||200))/((r||400)-(a||200)),D=b.baseGray,q=b.variation,re=k.uniform(-q,q),xe=Math.max(.12,Math.min(.45,D+re)),le=.8+de*.4,ke=k.uniform(.85,1.15),De=k.uniform(0,1),Oe=De<.03?k.uniform(1.1,1.3):1,ee=xe*le*ke*Oe,ce=Math.max(.1,Math.min(.55,ee));x[M*3]=ce,x[M*3+1]=ce,x[M*3+2]=ce;const te=.15,I=k.uniform(.3,.7),Ve=De<.1?k.uniform(1.05,1.2):1;w[M]=L.size*te*I*Ve}y.setAttribute("position",new K(C,3)),y.setAttribute("color",new K(x,3)),y.setAttribute("size",new K(w,1)),this.material=new ie({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Ft}),this.ringSystem=new dt(y,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const s=t.rotation_period_seconds||86400,a=t.cosmicOriginTime||Date.now()/1e3,r=t.initialAngleRotation||0,n=Date.now()/1e3-a,c=2*Math.PI/s,h=(r+n*c)%(2*Math.PI);this.ringSystem.rotation.y=h}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function us(o,e){const t={full_ring:o.full_ring,ontop_ring:o.ontop_ring,ring_inner_radius:o.ring_inner_radius,ring_outer_radius:o.ring_outer_radius,tilt_factor:o.tilt_factor,planet_radius:o.planet_radius,shape_seed:o.shape_seed};return new pt(e,t)}class lt{seed;constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}random(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return this.random()*(t-e)+e}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class Me{material;params;mesh;static vertexShader=`
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
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new f(16753920),bandColor:t.bandColor||new f(16753920),stormColor:t.stormColor||new f(9109504),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,stormIntensity:t.stormIntensity||.7,noiseScale:t.noiseScale||4},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),s=new lt(12345);for(let a=0;a<e&&a<20;a++)t[a]=s.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),s=new lt(67890);for(let a=0;a<e&&a<20;a++)t[a]=s.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof f?this.params.baseColor:new f(this.params.baseColor),t=this.params.bandColor instanceof f?this.params.bandColor:new f(this.params.bandColor),s=this.params.stormColor instanceof f?this.params.stormColor:new f(this.params.stormColor);return new ie({vertexShader:Me.vertexShader,fragmentShader:Me.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},stormColor:{value:s},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},stormIntensity:{value:this.params.stormIntensity},noiseScale:{value:this.params.noiseScale}}})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){if(this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.baseColor){const t=e.baseColor instanceof f?e.baseColor:new f(e.baseColor);this.material.uniforms.planetColor.value=t}if(e.bandColor){const t=e.bandColor instanceof f?e.bandColor:new f(e.bandColor);this.material.uniforms.bandColor.value=t}if(e.stormColor){const t=e.stormColor instanceof f?e.stormColor:new f(e.stormColor);this.material.uniforms.stormColor.value=t}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function ms(o,e){const t=e.cloud_bands||{},s={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new f(e.base_color):new f(16753920),animationSpeed:1,turbulence:e.turbulence||.5,stormIntensity:e.storm_intensity||.7};return new Me(o,s)}class Ee{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new f(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsationSpeed||2,fresnelPower:t.fresnelPower||2},this.geometry=new he(e*this.params.scale,64,64),this.material=this.createMaterial(),this.mesh=new se(this.geometry,this.material)}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new ie({vertexShader:Ee.vertexShader,fragmentShader:Ee.fragmentShader,uniforms:{glowColor:{value:e},glowIntensity:{value:this.params.intensity},glowFalloff:{value:this.params.falloff},fresnelPower:{value:this.params.fresnelPower},time:{value:0},pulsation:{value:this.params.pulsation},pulsationSpeed:{value:this.params.pulsationSpeed}},transparent:!0,blending:$e,side:ut,depthWrite:!1})}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.glowColor.value=t}e.intensity!==void 0&&(this.material.uniforms.glowIntensity.value=e.intensity),e.falloff!==void 0&&(this.material.uniforms.glowFalloff.value=e.falloff),e.pulsation!==void 0&&(this.material.uniforms.pulsation.value=e.pulsation),e.pulsationSpeed!==void 0&&(this.material.uniforms.pulsationSpeed.value=e.pulsationSpeed)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}class je{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new f(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new ve,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new dt(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),s=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),n=this.params.color instanceof f?this.params.color:new f(this.params.color);for(let c=0;c<this.particleCount;c++){const h=Math.random()*Math.PI*2,m=Math.acos(Math.random()*2-1),j=e*(1+Math.random()*.1);t[c*3]=j*Math.sin(m)*Math.cos(h),t[c*3+1]=j*Math.sin(m)*Math.sin(h),t[c*3+2]=j*Math.cos(m),s[c*3]=n.r*(.8+Math.random()*.4),s[c*3+1]=n.g*(.8+Math.random()*.4),s[c*3+2]=n.b*(.8+Math.random()*.4),a[c]=this.params.size*(Math.random()*.5+.75),r[c]=this.params.speed*(Math.random()*.8+.6),l[c]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new K(t,3)),this.geometry.setAttribute("customColor",new K(s,3)),this.geometry.setAttribute("size",new K(a,1)),this.geometry.setAttribute("speed",new K(r,1)),this.geometry.setAttribute("phase",new K(l,1))}createMaterial(){return new ie({vertexShader:je.vertexShader,fragmentShader:je.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:$e,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ae{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.5,.5,.8,.3],width:t.width||15,opacity:t.opacity||.3,density:t.density||1};const s=e*(1+this.params.width/100);this.geometry=new he(s,32,32);const a=new f(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ie({vertexShader:Ae.vertexShader,fragmentShader:Ae.fragmentShader,uniforms:{atmosphereColor:{value:a},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:$e,side:ut,depthWrite:!1}),this.mesh=new se(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new f(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function fs(o,e){const t=e.halo||{},s={color:t.color?new f().setRGB(t.color[0],t.color[1],t.color[2]):new f(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsation_speed||2};return new Ee(o,s)}function ps(o,e){const t=e.streaks||{},s={color:t.color?new f().setRGB(t.color[0],t.color[1],t.color[2]):new f(16777215),particleCount:t.count||100,speed:t.speed||1,size:2,opacity:.6,turbulence:1};return new je(o,s)}function gs(o,e){let t=[.5,.5,.8,.15],s=15;e&&(e.color&&Array.isArray(e.color)&&(t=[e.color[0],e.color[1],e.color[2],e.color[3]*.5]),e.width&&(s=e.width));const a={type:e?.type||"Thin",color:t,width:s,opacity:t[3],density:1};return new Ae(o,a)}class Ne{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={color:e.color||new f(7368816),roughness:e.roughness||.7,metalness:e.metalness||.9,fragmentationIntensity:e.fragmentationIntensity||.5,noiseScale:e.noiseScale||8,noiseIntensity:e.noiseIntensity||.3,edgeFragmentation:e.edgeFragmentation||1,circularWaves:e.circularWaves||1,fogPatches:e.fogPatches||1},this.material=this.createMaterial()}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new ie({vertexShader:Ne.vertexShader,fragmentShader:Ne.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},roughness:{value:this.params.roughness},metalness:{value:this.params.metalness},fragmentationIntensity:{value:this.params.fragmentationIntensity},noiseScale:{value:this.params.noiseScale},noiseIntensity:{value:this.params.noiseIntensity},edgeFragmentation:{value:this.params.edgeFragmentation},circularWaves:{value:this.params.circularWaves},fogPatches:{value:this.params.fogPatches}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.baseColor.value=t}e.roughness!==void 0&&(this.material.uniforms.roughness.value=e.roughness),e.metalness!==void 0&&(this.material.uniforms.metalness.value=e.metalness),e.fragmentationIntensity!==void 0&&(this.material.uniforms.fragmentationIntensity.value=e.fragmentationIntensity),e.noiseScale!==void 0&&(this.material.uniforms.noiseScale.value=e.noiseScale),e.noiseIntensity!==void 0&&(this.material.uniforms.noiseIntensity.value=e.noiseIntensity),e.edgeFragmentation!==void 0&&(this.material.uniforms.edgeFragmentation.value=e.edgeFragmentation),e.circularWaves!==void 0&&(this.material.uniforms.circularWaves.value=e.circularWaves),e.fogPatches!==void 0&&(this.material.uniforms.fogPatches.value=e.fogPatches)}getMaterial(){return this.material}dispose(){this.material.dispose()}}class ct{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new f(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new mt,this.generateFragments()}generateFragments(){const e=new Pe({color:this.params.color instanceof f?this.params.color:new f(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const s=this.generateFragmentGeometry(),a=new se(s,e);this.positionFragment(a,t),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const r=this.params.size*(Math.random()*.5+.75);a.scale.set(r,r,r),a.userData={rotationAxis:new A(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(a),this.fragments.add(a)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],s=[],a=[];a.push(new A(0,0,0));for(let n=0;n<e;n++){const c=n/e*Math.PI*2,h=Math.random()*.5+.5,m=(Math.random()-.5)*.3;a.push(new A(Math.cos(c)*h,Math.sin(c)*h,m))}for(let n=1;n<=e;n++){const h=a[n].clone();h.z+=Math.random()*.4+.2,a.push(h)}for(const n of a)t.push(n.x,n.y,n.z);for(let n=1;n<e;n++)s.push(0,n,n+1);s.push(0,e,1);const r=a.length-e-1;for(let n=0;n<e-1;n++)s.push(r,r+n+2,r+n+1);s.push(r,r+1,r+e);for(let n=0;n<e;n++){const c=n+1,h=(n+1)%e+1,m=c+e,j=h+e;s.push(c,m,h),s.push(h,m,j)}const l=new ve;return l.setAttribute("position",new Ot(t,3)),l.setIndex(s),l.computeVertexNormals(),l}positionFragment(e,t){let s;switch(this.params.distribution){case"edge":s=this.generateEdgePosition(t);break;case"surface":s=this.generateSurfacePosition();break;case"random":default:s=this.generateRandomPosition();break}e.position.copy(s)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,s=this.planetRadius*(.95+Math.random()*.1),a=(Math.random()-.5)*this.planetRadius*.5;return new A(Math.cos(t)*s,a,Math.sin(t)*s)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),s=this.planetRadius*(1+Math.random()*.05);return new A(s*Math.sin(t)*Math.cos(e),s*Math.sin(t)*Math.sin(e),s*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,s=Math.random()*Math.PI*2;return new A(e*Math.sin(t)*Math.cos(s),e*Math.sin(t)*Math.sin(s),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,s)=>{const a=t.userData;t.rotateOnAxis(a.rotationAxis,a.rotationSpeed*e*this.params.animationSpeed);const r=Math.sin(Date.now()*.001+s)*.001;t.position.y+=r*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.fragmentMeshes.forEach(s=>{s.material instanceof Pe&&(s.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof Pe&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof it&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof it&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class Re{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new f(.8,.8,.8),cloudColor:e.cloudColor||new f(.7,.7,.7),craterColor:e.craterColor||new f(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof f?this.params.mountainColor:new f(this.params.mountainColor),t=this.params.cloudColor instanceof f?this.params.cloudColor:new f(this.params.cloudColor),s=this.params.craterColor instanceof f?this.params.craterColor:new f(this.params.craterColor),a=new Array(30).fill(new A),r=new Array(30).fill(new A),l=new Array(10).fill(new A);return this.params.mountains&&this.params.mountains.forEach((n,c)=>{c<30&&(a[c]=new A(n.position[0],n.position[1],n.angle),r[c]=new A(n.width,n.height,0))}),this.params.clouds&&this.params.clouds.forEach((n,c)=>{c<10&&(l[c]=new A(n.position[0],n.position[1],n.radius))}),new ie({vertexShader:Re.vertexShader,fragmentShader:Re.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:a},mountainSizes:{value:r},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:l},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new A(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new A},craterColor:{value:s},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function ys(o){const e=o.surface_elements||o.surface||o;let t=[.8,.8,.8];const s=o.planet_info?.base_color||o.base_color;if(s&&typeof s=="string"){const c=s.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255]}else Array.isArray(s)&&(t=s);let a=[],r=[],l;if(o.seeds){const c=w=>{let v=w;return()=>(v=(v*1664525+1013904223)%4294967296,v/4294967296)},h=w=>{const v=w()*Math.PI*2,b=Math.acos(w()*2-1),M=Math.sin(b)*Math.cos(v),L=Math.sin(b)*Math.sin(v);return[M,L]},m=c(o.seeds.planet_seed),j=6+Math.floor(m()*4);for(let w=0;w<j;w++)a.push({position:h(m),width:.1+m()*.3,height:.2+m()*.6,angle:m()*Math.PI*2});const y=c(o.seeds.shape_seed+1e3),C=3+Math.floor(y()*4);for(let w=0;w<C;w++)r.push({position:h(y),radius:.08+y()*.17});const x=c(o.seeds.shape_seed+2e3);x()<.7&&(l={position:h(x),radius:.1+x()*.2})}const n={mountains:e.mountains?.length>0?e.mountains:a,clouds:e.clouds?.length>0?e.clouds:r,crater:e.crater||l,baseTextureIntensity:.4,mountainColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1.1),cloudColor:new f(t[0]*.9,t[1]*.9,t[2]*.9),craterColor:new f(t[0]*.3,t[1]*.3,t[2]*.3)};return new Re(n)}class Te{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new f(.675,.843,.902),crackColor:e.crackColor||new f(.2,.2,.2),iceCapColor:e.iceCapColor||new f(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof f?this.params.crystalColor:new f(this.params.crystalColor),t=this.params.crackColor instanceof f?this.params.crackColor:new f(this.params.crackColor),s=this.params.iceCapColor instanceof f?this.params.iceCapColor:new f(this.params.iceCapColor),a=new Array(50).fill(new A),r=new Array(50).fill(new A),l=new Array(12).fill(new Z),n=new Array(4).fill(new A);return this.params.crystals&&this.params.crystals.forEach((c,h)=>{h<50&&(a[h]=new A(c.position[0],c.position[1],c.angle),r[h]=new A(c.length,c.width,0))}),this.params.cracks&&this.params.cracks.forEach((c,h)=>{h<12&&(l[h]=new Z(c.angle,c.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((c,h)=>{h<4&&(n[h]=new A(c.position[0],c.position[1],c.radius))}),new ie({vertexShader:Te.vertexShader,fragmentShader:Te.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:a},crystalSizes:{value:r},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:l},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:n},iceCapColor:{value:s},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function bs(o){const e=o.surface_elements||o.surface||o;let t=[.9,.95,1];const s=o.planet_info?.base_color||o.base_color;if(s&&typeof s=="string"){const c=s.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255],t=[Math.min(t[0]+.1,1),Math.min(t[1]+.15,1),Math.min(t[2]+.2,1)]}else Array.isArray(s)&&(t=s);let a=[],r=[],l=[];if(o.seeds){const c=v=>{let b=v;return()=>(b=(b*1664525+1013904223)%4294967296,b/4294967296)},h=v=>{const b=v()*Math.PI*2,M=Math.acos(v()*2-1),L=Math.sin(M)*Math.cos(b),F=Math.sin(M)*Math.sin(b);return[L,F]},m=c(o.seeds.planet_seed),j=4+Math.floor(m()*6);for(let v=0;v<j;v++)a.push({position:h(m),length:.1+m()*.2,width:.05+m()*.1,angle:m()*Math.PI*2});const y=c(o.seeds.shape_seed),C=3+Math.floor(y()*5);for(let v=0;v<C;v++)r.push({angle:y()*Math.PI*2,length:.2+y()*.6});const x=c(o.seeds.shape_seed+500),w=2+Math.floor(x()*3);for(let v=0;v<w;v++)l.push({position:h(x),radius:.15+x()*.25})}const n={crystals:e.crystals?.length>0?e.crystals:a,cracks:e.cracks?.length>0?e.cracks:r,iceCaps:e.ice_caps?.length>0?e.ice_caps:l,baseTextureIntensity:.3,crystalColor:new f(t[0]*.8,t[1]*.9,t[2]*1),crackColor:new f(t[0]*.3,t[1]*.3,t[2]*.4),iceCapColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1)};return new Te(n)}class gt{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new mt,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,s=e,a=t*Math.cos(s),r=t*Math.sin(s),l=r*.8,n=new ve,c=new Float32Array([0,0,0,a,l,r]);n.setAttribute("position",new K(c,3));const h=new Ye({color:16776960,linewidth:5,transparent:!1});this.sunLine=new He(n,h),this.debugGroup.add(this.sunLine);const m=e+Math.PI,j=t*.7,y=j*Math.cos(m),C=0,x=j*Math.sin(m),w=new he(this.planetRadius*.15,16,16),v=new Fe({color:16776960,transparent:!1,opacity:1}),b=new se(w,v);b.position.set(y,C,x),this.debugGroup.add(b),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,s=new ve,a=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);s.setAttribute("position",new K(a,3));const r=new Ye({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new He(s,r),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,s=this.params.rotationPeriod||86400,a=this.params.initialAngleRotation||0,r=e-t,l=2*Math.PI/s;return(a+r*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),s=this.planetRadius*20,a=this.sunLine.geometry,r=a.attributes.position.array;r[3]=s*Math.cos(t),r[4]=0,r[5]=s*Math.sin(t),a.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,s=this.rotationLine.geometry,a=s.attributes.position.array;a[0]=-t*Math.cos(e),a[1]=0,a[2]=-t*Math.sin(e),a[3]=t*Math.cos(e),a[4]=0,a[5]=t*Math.sin(e),s.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function vs(o,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:o.debug?.cosmic_origin_time||o.timing?.cosmic_origin_time||o.cosmicOriginTime,rotationPeriod:o.planet_info?.rotation_period||o.rotation_period_seconds||86400,initialAngleRotation:o.debug?.initial_angle_rotation||o.timing?.initial_angle_rotation||o.initialAngleRotation||0,planetRadius:e,orbitalAngle:o.timing?.orbital_angle||0,sunAngle:o.sun_angle||o.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new gt(e,t)}class ye{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return ye.instance||(ye.instance=new ye),ye.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,s)=>new Ne(e),fromPythonData:(e,t,s)=>{let a=[.4,.4,.45];const r=e.planet_info?.base_color||e.surface?.base_color;if(r&&typeof r=="string"){const l=r.replace("#","");a=[parseInt(l.substr(0,2),16)/255,parseInt(l.substr(2,2),16)/255,parseInt(l.substr(4,2),16)/255]}else Array.isArray(r)&&(a=r);return new Ne({color:a,roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}}),this.registerEffect("gas_giant_bands",{create:(e,t,s)=>new Me(s,e),fromPythonData:(e,t,s)=>ms(s,e)}),this.registerEffect("atmospheric_halo",{create:(e,t)=>new Ee(t,e),fromPythonData:(e,t)=>fs(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new je(t,e),fromPythonData:(e,t)=>ps(t,e.atmosphere||{})}),this.registerEffect("dense_atmosphere",{create:(e,t)=>new Ae(t,e),fromPythonData:(e,t)=>gs(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new pt(t,e),fromPythonData:(e,t)=>us(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new ct(t,e),fromPythonData:(e,t)=>new ct(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,s)=>new Re(e),fromPythonData:(e,t,s)=>ys(e)}),this.registerEffect("icy_terrain",{create:(e,t,s)=>new Te(e),fromPythonData:(e,t,s)=>bs(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new gt(t,e),fromPythonData:(e,t)=>vs(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,s,a,r=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const n=l.create(t,s,a);if(!n)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:n,priority:r,enabled:!0};return this.effects.set(c.id,c),c}catch(n){return console.error(`Error creating effect '${e}':`,n),null}}createEffectFromPythonData(e,t,s,a,r=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,s,a,r);try{const n=l.fromPythonData(t,s,a);if(!n)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:n,priority:r,enabled:!0};return this.effects.set(c.id,c),c}catch(n){return console.error(`Error creating effect '${e}' from Python data:`,n),null}}createEffectsFromList(e,t,s){const a=[],r=e.sort((l,n)=>(l.priority||0)-(n.priority||0));for(const l of r){const n=this.createEffect(l.type,l.params,t,s,l.priority);n&&(n.enabled=l.enabled!==!1,a.push(n))}return a}createEffectsFromPythonPlanetData(e,t,s,a){const r=[];if(e.surface_elements){const l=e.surface_elements;if(l.effects_3d&&Array.isArray(l.effects_3d))for(const n of l.effects_3d){const c=this.createEffect(n.type,n.params,t,s,n.priority||0);c&&(r.push(c),c.effect.addToScene&&c.effect.addToScene(a,s.position))}switch(l.type==="rendering_commands"&&l.commands&&this.executeRenderingCommands(l.commands,a,s,t),l.type){case"gas_giant":const n=this.createEffectFromPythonData("gas_giant_bands",l,t,s,0);n&&r.push(n);break;case"metallic":case"metallic_3d":const c=this.createEffectFromPythonData("metallic_surface",{...e,surface:{...e.surface,base_color:e.planet_info?.base_color||e.surface?.base_color}},t,s,0);c&&r.push(c);break;case"rocky":const h=this.createEffectFromPythonData("rocky_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,s,0);h&&(r.push(h),h.effect.apply(s));break;case"icy":const m=this.createEffectFromPythonData("icy_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,s,0);m&&(r.push(m),m.effect.apply(s));break}}if(e.atmosphere){if(e.atmosphere.halo){const l=this.createEffectFromPythonData("atmospheric_halo",e,t,s,10);l&&(r.push(l),l.effect.addToScene(a,s.position))}if(e.atmosphere.streaks){const l=this.createEffectFromPythonData("atmospheric_streaks",e,t,s,20);l&&(r.push(l),l.effect.addToScene(a,s.position))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const l=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),n={...e.atmosphere};l==="oceanic"&&(n.opacity=Math.min(n.opacity||.3,.15),n.width=Math.min(n.width||15,8));const c=this.createEffectFromPythonData("dense_atmosphere",n,t,s,5);c&&(r.push(c),c.effect.addToScene(a,s.position))}}if(e.rings&&e.rings.has_rings){const l=this.createEffectFromPythonData("ring_system",e,t,s,1);l&&(r.push(l),l.effect.addToScene(a,s.position))}if(e.surface_elements?.has_fragmentation_zones){const l=this.createEffectFromPythonData("fragmentation",e,t,s,5);l&&(r.push(l),l.effect.addToScene(a,s.position))}{const l=this.createEffectFromPythonData("visual_debug_3d",e,t,s,100);l?(r.push(l),l.effect.addToScene(a,s.position)):console.error(" Failed to create debug effect!")}return r}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const s=this.effects.get(e);s&&(s.enabled=t!==void 0?t:!s.enabled)}updateAllEffects(e,t){for(const s of this.effects.values())if(s.enabled&&s.effect.update)try{s.effect.update(e,t)}catch(a){console.error(`Error updating effect ${s.type}:`,a)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}executeRenderingCommands(e,t,s,a){e.forEach((r,l)=>{try{switch(r.command){case"apply_material":this.executeApplyMaterial(r,s);break;case"create_surface_element":this.executeCreateSurfaceElement(r,t,a);break;default:console.warn(` Unknown command: ${r.command}`)}}catch(n){console.error(` Error executing command ${l}:`,n)}})}executeApplyMaterial(e,t){const s=e.properties;if(e.material_type==="phong"){const a=new Vt({color:new f(s.color),shininess:s.shininess||50,specular:new f(s.specular||"#222222"),transparent:s.transparent||!1,opacity:s.opacity||1});t.material=a}}executeCreateSurfaceElement(e,t,s){let a;switch(e.geometry.type){case"circle":a=new Wt(e.size*s*.1,e.geometry.segments||16);break;case"sphere":a=new he(e.radius*s*.1,12,12);break;case"irregular_polygon":a=new Bt(0,.05*s,8);break;default:console.warn(` Unknown geometry type: ${e.geometry.type}`);return}const r=e.color,l=new Fe({color:new f(r[0],r[1],r[2]),opacity:r[3]||1,transparent:(r[3]||1)<1}),n=new se(a,l);if(e.position){const c=this.normalizedToSphere(e.position,s*(1+(e.geometry.elevation||0)));n.position.copy(c),n.lookAt(new A(0,0,0))}t.add(n)}normalizedToSphere(e,t){const[s,a]=e,r=Math.acos(1-2*((a+1)/2)),l=2*Math.PI*((s+1)/2),n=t*Math.sin(r)*Math.cos(l),c=t*Math.cos(r),h=t*Math.sin(r)*Math.sin(l);return new A(n,c,h)}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const we=ye.getInstance(),Ce={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmospheric_halo:{intensity:1,falloff:2,scale:1.2,pulsation:!1},gas_giant_bands:{numBands:8,animationSpeed:1,turbulence:.5,stormIntensity:.7}};function xs(o){const e=[];switch(o.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...Ce.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmospheric_halo",params:{...Ce.atmospheric_halo,color:[.6,.1,.9],scale:1.15},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"gas_giant_bands",params:Ce.gas_giant_bands,priority:0},{type:"atmospheric_halo",params:{...Ce.atmospheric_halo,color:[1,.6,.2],intensity:.8},priority:10});break;case"icy":e.push({type:"atmospheric_halo",params:{...Ce.atmospheric_halo,color:[.5,.8,1],intensity:.6,scale:1.1},priority:10});break;default:e.push({type:"atmospheric_halo",params:{color:[.5,.5,.8],intensity:.5},priority:10});break}return e}const Q={log:(o,e)=>{},warn:(o,e)=>{console.warn(`[Effects] ${o}`,e||"")},error:(o,e)=>{console.error(`[Effects] ${o}`,e||"")},debug:(o,e)=>{}};new Date().toISOString();const _s=({planetData:o,showInConsole:e=!0,showInPage:t=!1})=>{const[s,a]=g.useState([]),[r,l]=g.useState({});g.useEffect(()=>{if(!o)return;const h=n(o);l(h),a(c(o)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=o,window.__DEBUG_PLANET_ANALYSIS=h)},[o,e]);function n(h){const m={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(h.planet_info&&h.surface_elements?m.hasValidStructure=!0:(h.planet_info||m.missingFields.push("planet_info"),h.surface_elements||m.missingFields.push("surface_elements")),h.surface_elements?.type==="oceanic"&&(m.oceanicData={hasAbstractLands:!!h.surface_elements.abstract_lands?.length,numGreenPatches:h.surface_elements.green_patches?.length||0,numClouds:h.surface_elements.clouds?.length||0,hasDepths:h.surface_elements.depths?.enabled||!1,baseColorIsBlue:h.planet_info?.base_color==="#0000FF",greenPatchColor:h.surface_elements.green_patches?.[0]?.color,issues:[]},m.oceanicData.numGreenPatches>15&&m.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),m.oceanicData.baseColorIsBlue||m.oceanicData.issues.push(`Color base no es azul puro: ${h.planet_info?.base_color}`),m.renderingIssues=m.oceanicData.issues),h.planet_info?.base_color&&h.planet_info?.type){const y={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[h.planet_info.type];y&&h.planet_info.base_color!==y?m.colorConsistency=`Inconsistente: esperado ${y}, recibido ${h.planet_info.base_color}`:m.colorConsistency="Correcto"}return m}function c(h){const m=[];if(!h.surface_elements?.type)return["No surface type defined"];const j=h.surface_elements.type.toLowerCase();switch(j){case"oceanic":m.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":m.push("RockyTerrainEffect");break;case"icy":m.push("IcyTerrainEffect");break;case"gas giant":m.push("GasGiantBandsEffect");break;default:m.push(`Generic effect for type: ${j}`)}return h.atmosphere?.density>0&&m.push("AtmosphericEffect"),h.rings&&m.push("RingSystemEffect"),m}return t?i.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[i.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",o.planet_info?.name]}),i.jsxs("div",{style:{marginBottom:"10px"},children:[i.jsx("strong",{children:"Type:"})," ",o.planet_info?.type,i.jsx("br",{}),i.jsx("strong",{children:"Base Color:"})," ",o.planet_info?.base_color,i.jsx("br",{}),i.jsx("strong",{children:"Radius:"})," ",o.planet_info?.radius]}),o.surface_elements?.type==="oceanic"&&i.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[i.jsx("strong",{children:"🌊 Oceanic Data:"}),i.jsx("br",{}),i.jsxs("span",{style:{color:r.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",r.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),i.jsx("br",{}),"Green Patches: ",r.oceanicData?.numGreenPatches,i.jsx("br",{}),"Clouds: ",r.oceanicData?.numClouds,i.jsx("br",{}),"Has Depths: ",r.oceanicData?.hasDepths?"Yes":"No",i.jsx("br",{}),r.oceanicData?.issues?.length>0&&i.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",i.jsx("br",{}),r.oceanicData.issues.map((h,m)=>i.jsxs("div",{children:["- ",h]},m))]})]}),i.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[i.jsx("strong",{children:"🎨 Effects Applied:"}),i.jsx("br",{}),s.map((h,m)=>i.jsxs("div",{style:{color:h.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",h]},m))]}),i.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function ws(o){g.useEffect(()=>{if(o&&o.surface_elements?.type==="oceanic"){o.surface_elements.green_patches?.length>0;const e=o.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[o])}const Cs=({planetName:o,containerClassName:e="",width:t=800,height:s=600,autoRotate:a=!0,enableControls:r=!0,showDebugInfo:l=!1,planetData:n,cosmicOriginTime:c,initialAngleRotation:h,onDataLoaded:m,onEffectsCreated:j,onError:y})=>{const C=g.useRef(null),x=g.useRef(null),w=g.useRef(null),v=g.useRef(null),b=g.useRef(null),M=g.useRef(null),L=g.useRef(new Gt),F=g.useRef(null),oe=g.useRef(0),k=g.useRef(null),[ae,S]=g.useState(!0),[B,O]=g.useState(null),[R,X]=g.useState(null),[V,W]=g.useState([]),[G,Y]=g.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),H=g.useRef([]),ne=g.useRef(0),J=g.useRef(null),de=Math.floor(Date.now()/1e3),[D,q]=g.useState(0),re=c||R?.timing?.cosmic_origin_time||Date.now()/1e3-3600,xe=de-re+D;oe.current=xe;const le=g.useCallback(()=>{if(!C.current||!w.current||!v.current)return;const d=C.current,p=d.clientWidth||400,u=d.clientHeight||400;w.current.setSize(p,u),v.current.aspect=p/u,v.current.updateProjectionMatrix()},[]),ke=async d=>{if(!(!b.current||!x.current)){Q.log("Applying modular effects from API data",{planet:d.planet_info.name,type:d.planet_info.type});try{Be();const p=we.createEffectsFromPythonPlanetData(d,1,b.current,x.current);W(p),H.current=p,j&&j(p),Q.log(`Successfully applied ${p.length} modular effects`),We()}catch(p){Q.error("Error applying modular effects",p),Ie()}}},De=g.useCallback(()=>{if(!C.current)return!1;try{for(;C.current.firstChild;)C.current.removeChild(C.current.firstChild);x.current=null,v.current=null,w.current=null,b.current=null,I.current=null;const d=C.current,p=d.clientWidth||t||400,u=d.clientHeight||s||400,P=new Ut;P.background=new f(1297),x.current=P;const N=new Yt(45,p/u,.1,1e4);N.position.set(0,80,120),N.lookAt(0,0,0),v.current=N;const _=new Ht({antialias:!0,alpha:!0,powerPreference:"high-performance"});return _.setSize(p,u),_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.shadowMap.enabled=!0,_.shadowMap.type=$t,_.toneMapping=Zt,_.toneMappingExposure=1.2,_.outputColorSpace=Xt,C.current.appendChild(_.domElement),w.current=_,bt(P,null),vt(P),r&&xt(N,_.domElement),!0}catch(d){return console.error("Error initializing Three.js:",d),!1}},[R,n,c]),Oe=d=>{if(!d)return 0;const p=d.sun_angle||d.lighting?.sun_angle;if(p!==void 0)return p;const u=d.timing?.current_orbital_angle||d.timing?.orbital_angle;return u??0},ee=g.useRef(null),ce=g.useRef(null),te=g.useRef(null),I=g.useRef(null),Ve=d=>{d.castShadow=!0,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,d.shadow.camera.near=.5,d.shadow.camera.far=50,d.shadow.camera.left=-10,d.shadow.camera.right=10,d.shadow.camera.top=10,d.shadow.camera.bottom=-10},Xe=d=>{if(!ee.current||!x.current)return;const p=Oe(d),u=10,P=p+Math.PI,N=Math.sin(p)*5,_=u*Math.cos(P),E=N,$=u*Math.sin(P);ee.current.position.set(_,E,$),ee.current.target.position.set(0,0,0),x.current.children.includes(ee.current.target)||x.current.add(ee.current.target),ce.current&&ce.current.position.set(-_*.5,0,-$*.5)},Ke=(d,p)=>{if(!n?.orbital_radius)return;const u=p?.timing?.max_orbital_radius;if(!u)return;const _=20+n.orbital_radius/u*80,E=64,$=[];for(let fe=0;fe<=E;fe++){const pe=fe/E*Math.PI*2;$.push(new A(_*Math.cos(pe),0,_*Math.sin(pe)))}const ue=new ve().setFromPoints($),_e=new Ye({color:7372944,transparent:!0,opacity:.4,linewidth:1}),me=new He(ue,_e);d.add(me),I.current=me},yt=d=>{const u=new he(3,32,32),P=new Fe({color:16777028,transparent:!1,opacity:1}),N=new se(u,P);N.position.set(0,0,0);const _=new he(3*1.8,16,16),E=new Fe({color:16777028,transparent:!0,opacity:.3}),$=new se(_,E);N.add($),d.add(N),te.current=N},bt=(d,p)=>{yt(d);{const u=new ot(16777215,2);u.position.set(10,0,0),u.castShadow=!0,Ve(u),d.add(u),ee.current=u;const P=new ot(4482815,.05);P.position.set(-5,0,0),d.add(P),ce.current=P;const N=new Kt(2236996,.1);d.add(N);return}},qe=d=>{const p=(d||"").toLowerCase();return{"gas giant":4886754,rocky:9127187,icy:14743551,oceanic:27571,desert:13808780,lava:16729344,metallic:12632256,toxic:10145074,crystalline:16738740,anomaly:16711935,arid:13808780,swamp:5597999,tundra:11584734,forest:2263842,savannah:14329120,cave:3092271,radioactive:3329330,magma:16737095,carbon:1842204,diamond:15132410}[p]||8421504},vt=d=>{const p=n?.diameter?n.diameter/15e3:1,u=Math.max(Math.min(p,4),1.5),P=qe(n?.planet_type),N=new he(u,128,64),_=new Pe({color:P,metalness:n?.planet_type?.toLowerCase().includes("metallic")?.8:.1,roughness:n?.planet_type?.toLowerCase().includes("icy")?.1:.8,transparent:!1,opacity:1}),E=new se(N,_);E.castShadow=!0,E.receiveShadow=!0,E.position.set(50,0,0),d.add(E),b.current=E,console.log("🎨 Created base planet with color:",P.toString(16),"for type:",n?.planet_type)},xt=(d,p)=>{const u=new Jt(d,p);u.enableDamping=!0,u.dampingFactor=.05,u.minDistance=50,u.maxDistance=800,u.autoRotate=a,u.autoRotateSpeed=.1,u.enablePan=!0,u.enableZoom=!0,u.target.set(0,0,0),M.current=u},_t=g.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{S(!0),O(null),Q.log("Loading planet data from API",{planetName:o});const p=await fetch("/api/planet/rendering-data");if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);const u=await p.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const P=u.planet_data,N=u.timing,_=u.rendering_data,E={planet_info:_?.planet_info||{name:P.name,type:P.planet_type,base_color:"#808080",radius:P.diameter/15e3},surface_elements:_?.surface_elements,atmosphere:_?.atmosphere,rings:_?.rings,effects_3d:_?.effects_3d,shader_uniforms:_?.shader_uniforms,universal_actions:_?.universal_actions,timing:{cosmic_origin_time:N.cosmic_origin_time,current_time_seconds:N.current_time_seconds,elapsed_time:N.elapsed_time,initial_orbital_angle:P.initial_orbital_angle,current_orbital_angle:P.current_orbital_angle,max_orbital_radius:N.max_orbital_radius,system_max_orbital_radius:P.system_max_orbital_radius},original_planet_data:P};return X(E),k.current=E,Q.log("API data loaded successfully",{planet:E.planet_info.name,type:E.planet_info.type,hasEffects:!!E.surface_elements,fullRenderingData:_}),console.log("🌍 Planet API Response:",u),console.log("🎨 Rendering Data:",_),console.log("🔧 Processed Data:",E),m&&m(E),E}catch(d){const p=d instanceof Error?d.message:"Unknown error";return O(p),y&&y(p),null}finally{S(!1),window.isLoadingPlanetData=!1}}},[o,m,y]);g.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{S(!0),O(null),Q.log("Loading planet data from API",{planetName:o});const p=await fetch("/api/planet/rendering-data");if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);const u=await p.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const P=u.planet_data,N=u.timing,_=u.rendering_data,E={planet_info:_?.planet_info||{name:P.name,type:P.planet_type,base_color:"#808080",radius:P.diameter/15e3},surface_elements:_?.surface_elements,atmosphere:_?.atmosphere,rings:_?.rings,effects_3d:_?.effects_3d,shader_uniforms:_?.shader_uniforms,universal_actions:_?.universal_actions,timing:{cosmic_origin_time:N.cosmic_origin_time,current_time_seconds:N.current_time_seconds,elapsed_time:N.elapsed_time,initial_orbital_angle:P.initial_orbital_angle,current_orbital_angle:P.current_orbital_angle,max_orbital_radius:N.max_orbital_radius,system_max_orbital_radius:P.system_max_orbital_radius},original_planet_data:P};X(E),k.current=E,Q.log("API data loaded successfully",{planet:E.planet_info.name,type:E.planet_info.type,hasEffects:!!E.surface_elements,fullRenderingData:_}),console.log("🌍 Full Load - API Response:",u),console.log("🎨 Full Load - Rendering Data:",_),console.log("🔧 Full Load - Processed Data:",E),Xe(E),I.current&&x.current&&(x.current.remove(I.current),I.current.geometry.dispose(),I.current.material.dispose(),I.current=null),Ke(x.current,E),await ke(E),m&&m(E)}catch(d){const p=d instanceof Error?d.message:"Unknown error";O(p),y&&y(p),Ie()}finally{S(!1),window.isLoadingPlanetData=!1}}},[o,n,c,h]);const Qe=g.useCallback(()=>{if(!R||!b.current)return;const d=n?.orbital_period_seconds||365.25*24*3600,p=2*Math.PI/d,u=R.timing?.initial_orbital_angle||0,P=Date.now()/1e3,N=0,_=c||R.timing?.cosmic_origin_time||Date.now()/1e3-3600,E=P-_+N,$=(u+E*p)%(2*Math.PI),ue=R.timing?.max_orbital_radius||100,me=20+R.planet_info?.orbital_radius/ue*80,fe=me,pe=me*Math.cos($),ze=fe*Math.sin($);b.current.position.x=pe,b.current.position.z=ze,b.current.position.y=0},[R,n,c]),wt=g.useCallback(async d=>{const p=d||R;if(p&&x.current)try{Xe(p),I.current&&x.current&&(x.current.remove(I.current),I.current.geometry.dispose(),I.current.material.dispose(),I.current=null),Ke(x.current,p),await ke(p)}catch{Ie()}},[R]),Ie=()=>{if(!(!x.current||!b.current)){Q.warn("Applying fallback effects for planet type:",n?.planet_type);try{if(Be(),b.current.material instanceof Pe){const d=qe(n?.planet_type);b.current.material.color.setHex(d),console.log("🎨 Applied fallback color:",d.toString(16),"to planet mesh")}try{const d=xs("generic"),p=we.createEffectsFromList(d,1,b.current);p.forEach(u=>{u.effect.addToScene&&x.current&&b.current&&u.effect.addToScene(x.current,b.current.position)}),H.current=p,W(p)}catch(d){console.warn("Could not create fallback effects, using basic material only:",d)}We()}catch(d){Q.error("Error applying fallback effects",d)}}},Be=()=>{H.current.forEach(d=>{try{d.effect.dispose&&d.effect.dispose()}catch{}}),H.current=[],W([])},Je=g.useCallback(()=>{F.current=requestAnimationFrame(Je);const d=performance.now(),p=L.current.getDelta();M.current&&M.current.update();try{we.updateAllEffects(p,b.current?.rotation.y)}catch{}if(b.current&&k.current){k.current.planet_info?.name;const u=k.current.original_planet_data,P=u?.orbital_period_seconds||365.25*24*3600,N=k.current.timing?.initial_orbital_angle||0;c||k.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const _=u?.axial_tilt||0,E=2*Math.PI/P,$=(N+oe.current*E)%(2*Math.PI),ue=k.current.timing?.max_orbital_radius||k.current.timing?.system_max_orbital_radius,_e=u?.orbital_radius;if(!ue||!_e)return;const pe=20+_e/ue*80,ze=u?.eccentricity_factor||.1,et=pe,Ct=et*Math.sqrt(1-ze*ze),St=et*Math.cos($),Pt=Ct*Math.sin($);b.current.position.x=St,b.current.position.z=Pt,b.current.position.y=0,M.current&&M.current.target.set(0,0,0);const Mt=u?.rotation_period_seconds||86400,Et=2*Math.PI/Mt;b.current.rotation.y=oe.current*Et%(2*Math.PI),b.current.rotation.z=_*(Math.PI/180)}if(H.current.forEach(u=>{u.effect.updateUniforms&&u.effect.updateUniforms(p)}),w.current&&x.current&&v.current){const u=performance.now();w.current.render(x.current,v.current);const P=performance.now()-u;if(d-ne.current>5e3){const N=1e3/(d-ne.current);We(),Y(_=>({..._,frameRate:Math.round(N),renderTime:Math.round(P*100)/100})),ne.current=d}}},[]),We=g.useCallback(()=>{const d=we.getStats();Y(p=>({...p,activeEffects:d.activeEffects,enabledEffects:d.enabledEffects}))},[]);return g.useEffect(()=>{let d=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!d)return;const u=await _t();if(!d)return;if(!De()){d&&O("Failed to initialize 3D renderer");return}if(!d||(Je(),C.current&&"ResizeObserver"in window&&(J.current=new ResizeObserver(le),J.current.observe(C.current)),window.addEventListener("resize",le),!d))return;u?await wt(u):Ie()}catch(u){d&&O(u instanceof Error?u.message:"Unknown initialization error")}})(),()=>{if(d=!1,k.current=null,F.current&&cancelAnimationFrame(F.current),J.current&&J.current.disconnect(),window.removeEventListener("resize",le),Be(),M.current&&M.current.dispose(),te.current&&x.current&&(x.current.remove(te.current),te.current.geometry.dispose(),te.current.material.dispose(),te.current=null),I.current&&x.current&&(x.current.remove(I.current),I.current.geometry.dispose(),I.current.material.dispose(),I.current=null),w.current&&C.current)try{C.current.contains(w.current.domElement)&&C.current.removeChild(w.current.domElement),w.current.dispose()}catch{}}},[]),g.useEffect(()=>{const d=setInterval(()=>{const p=we.getStats();Y(u=>({...u,activeEffects:p.activeEffects,enabledEffects:p.enabledEffects}))},1e4);return()=>clearInterval(d)},[]),g.useEffect(()=>{R&&x.current&&b.current&&Qe()},[R,Qe]),ws(R),i.jsxs("div",{className:`relative ${e}`,children:[l&&R&&i.jsx(_s,{planetData:R,showInPage:!0,showInConsole:!0}),i.jsx("div",{ref:C,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),ae&&i.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:i.jsxs("div",{className:"text-white text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),i.jsx("div",{children:"Loading planet..."})]})}),B&&i.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[i.jsx("strong",{children:"Error:"})," ",B]}),R&&!ae&&i.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[i.jsx("h3",{className:"text-lg font-bold",children:R.planet_info.name}),i.jsx("p",{className:"text-sm opacity-80",children:R.planet_info.type}),i.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[V.length," effects active"]}),R.surface_elements?.description&&i.jsx("p",{className:"text-xs mt-2 opacity-60",children:R.surface_elements.description.appearance})]}),l&&i.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[i.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),i.jsxs("div",{children:["Frame Rate: ",G.frameRate," FPS"]}),i.jsxs("div",{children:["Render Time: ",G.renderTime,"ms"]}),i.jsxs("div",{children:["Active Effects: ",G.activeEffects]}),i.jsxs("div",{children:["Enabled Effects: ",G.enabledEffects]}),i.jsxs("div",{className:"mt-2",children:[i.jsx("div",{className:"font-semibold",children:"Effects:"}),V.map(d=>i.jsxs("div",{className:"ml-2",children:[d.type," (",d.enabled?"ON":"OFF",")"]},d.id))]})]})]})};class Ss extends ht.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?i.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:i.jsxs("div",{className:"text-center p-4",children:[i.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),i.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const Ps=o=>i.jsx(Ss,{children:i.jsx(Cs,{...o})}),Ms=({planetUrl:o,imageUrl:e,planet:t,cosmicOriginTime:s,initialAngleRotation:a})=>{const r=g.useRef(null),l=g.useRef(null),[n,c]=g.useState("Aligning Stargate..."),[h,m]=g.useState(!1),[j,y]=g.useState(!1),[C,x]=g.useState(!1),[w,v]=g.useState(!0),[b,M]=g.useState(!0),[L,F]=g.useState(null),[oe,k]=g.useState(null);g.useEffect(()=>{const S=document.createElement("style");return S.textContent=`
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
    `,document.head.appendChild(S),()=>{document.head.removeChild(S)}},[]),g.useEffect(()=>{const S=r.current;if(!S)return;const B=S.getContext("2d");if(!B)return;let O=[];const R=800;let X,V;const W=800;let G,Y=.5;function H(){const D=S?.parentElement;if(!D||!S)return;const q=D.clientWidth,re=D.clientHeight;S.width=Math.min(q,W),S.height=Math.min(re,W),X=S.width/2,V=S.height/2}function ne(){H(),O=[];for(let D=0;D<R;D++)O.push({x:Math.random()*(S?.width||800),y:Math.random()*(S?.height||800),z:Math.random()*(S?.width||800),o:Math.random()});J()}function J(){!S||!B||(B.clearRect(0,0,S.width,S.height),O.forEach(D=>{D.z-=Y,D.z<=0&&(D.z=S.width,D.x=Math.random()*S.width,D.y=Math.random()*S.height,D.o=Math.random());const q=S.width/D.z,re=(D.x-X)*q+X,xe=(D.y-V)*q+V,le=2*q;B.beginPath(),B.fillStyle=`rgba(255, 255, 255, ${D.o})`,B.arc(re,xe,le,0,2*Math.PI),B.fill()}),Y<60&&(Y+=1),G=requestAnimationFrame(J))}ne();const de=()=>H();return window.addEventListener("resize",de),()=>{window.removeEventListener("resize",de),G&&cancelAnimationFrame(G)}},[]),g.useEffect(()=>{if(e&&!w){const S=new Image;S.onload=()=>{l.current&&(l.current.src=e,y(!0),x(!0))},S.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{y(!0),x(!0)},1500)},S.src=e}else(w||!e)&&setTimeout(()=>{y(!0),x(!0)},1500)},[e,w]),g.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){c("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),m(!0);const B=(W,G)=>Array.from({length:G},()=>W[Math.floor(Math.random()*W.length)]).join(""),O=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let R=0,X=0;const V=()=>{if(R>=O.length){const G="Stargate system aligned";let Y=0;c("");const H=()=>{Y<G.length?(c(G.substring(0,Y+1)),Y++,setTimeout(H,30)):m(!1)};H();return}const W=O[R];c(B(W.chars,32)),X++,X>=W.iterations&&(R++,X=0),setTimeout(V,W.duration)};V()},[]);const ae=()=>{v(!w),w||(y(!0),x(!0))};return i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-3",children:[i.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),b&&i.jsx("div",{className:"flex items-center gap-2",children:i.jsx("button",{onClick:ae,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${w?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:w?"2D View":"3D View"})})]}),i.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[i.jsx("canvas",{ref:r,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${C?"opacity-0":"opacity-100"}`,style:{filter:C?"blur(50px)":"none"}}),w&&j&&t&&i.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${j?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:i.jsx(Ps,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:s,initialAngleRotation:a,onDataLoaded:S=>{F(S)},onError:S=>{k(S),console.error("❌ Planet rendering error:",S)}})}),!w&&i.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${j?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:j&&e?i.jsx("div",{className:"w-full h-full flex items-center justify-center",children:i.jsx(Tt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:i.jsx("img",{ref:l,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):i.jsx("img",{ref:l,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),b&&i.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:w?"🌍 3D":"🖼️ 2D"})]}),i.jsxs("div",{className:"text-center mt-auto",children:[i.jsxs("a",{href:o,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${h?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[i.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[i.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),n]}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),i.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",w&&L&&i.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",L.planet_info?.type," Planet",L.atmosphere&&i.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),L.rings?.has_rings&&i.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),w&&oe&&i.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Es=({currentPlanet:o,system:e,galaxy:t,systemPlanets:s})=>{const[a,r]=g.useState(null),[l,n]=g.useState(null),[c,h]=g.useState(!1),[m,j]=g.useState(!1),[y,C]=g.useState(!0);g.useEffect(()=>{if(s&&s.length>0){const v=s.findIndex(b=>b.name.toLowerCase()===o.toLowerCase());v!==-1?(v>0?(r(s[v-1].name.toLowerCase()),h(!0)):e.index>0?(r("__prev_system__"),h(!0)):h(!1),v<s.length-1?(n(s[v+1].name.toLowerCase()),j(!0)):(n("__next_system__"),j(!0))):(h(!1),j(!1))}else h(!1),j(!1);C(!1)},[o,e.index,s]);const x=async()=>{const v=t.coordinates.join(",");if(a==="__prev_system__")try{const b=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(b.ok){const M=await b.json();if(M.system&&M.system.planets&&M.system.planets.length>0){const F=M.system.planets[M.system.planets.length-1].name.toLowerCase();Se(v,e.index-1,F,M.system.planets),Ue(v,e.index-1),window.location.href=`/planet/${F}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else a&&(Se(v,e.index,a,s),window.location.href=`/planet/${a}`)},w=async()=>{const v=t.coordinates.join(",");if(l==="__next_system__")try{const b=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(b.ok){const M=await b.json();if(M.system&&M.system.planets&&M.system.planets.length>0){const F=M.system.planets[0].name.toLowerCase();Se(v,e.index+1,F,M.system.planets),Ue(v,e.index+1),window.location.href=`/planet/${F}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(Se(v,e.index,l,s),window.location.href=`/planet/${l}`)};return y?null:i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("button",{onClick:x,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:i.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),i.jsx("button",{onClick:w,disabled:!m,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${m?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:i.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},js=({planet:o,system:e,galaxy:t,planet_url:s,version:a,image_url:r,cosmic_origin_time:l,initial_angle_rotation:n})=>{const[c]=g.useState(t.coordinates.join(","));g.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",o.name.toLowerCase()),Se(c,e.index,o.name,e.planets||[]),Ue(c,e.index)},[c,e.index,o.name]);const h=y=>y.replace(/_/g," "),m=y=>y.replace(/_/g," "),j=y=>y.replace(/_/g," ");return i.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[i.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),i.jsxs("div",{className:"relative z-10",children:[i.jsx(Nt,{}),i.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:i.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",h(o.name),"'"]})}),i.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",m(e.name),"' - Galaxy '",j(t.name),"'"]}),i.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),i.jsx(Es,{currentPlanet:o.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),i.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:i.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[i.jsx("div",{className:"order-1 lg:order-1",children:i.jsx(Ms,{planetUrl:s,imageUrl:r,planet:o,cosmicOriginTime:l,initialAngleRotation:n})}),i.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),i.jsx("div",{className:"order-2 lg:order-2",children:i.jsx(qt,{planet:o,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:n})})]})}),i.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:i.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:i.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",m(e.name),"'"]})})})]}),i.jsx(jt,{version:a})]}),i.jsx(kt,{currentLocation:{type:"planet",name:o.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:o.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const o=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),s=document.getElementById("meta-data");if(!o||!e||!t||!s){console.error("Missing required data elements");return}const a=JSON.parse(o.textContent||"{}"),r=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),n=JSON.parse(s.textContent||"{}"),c={planet:a,system:r,galaxy:l,planet_url:n.planet_url,version:n.version,image_url:n.image_url,cosmic_origin_time:n.cosmic_origin_time,initial_angle_rotation:n.initial_angle_rotation},h=document.getElementById("atlas-react-root");h&&At.createRoot(h).render(ht.createElement(js,c))}catch(o){console.error("Error initializing Planet React app:",o)}});
