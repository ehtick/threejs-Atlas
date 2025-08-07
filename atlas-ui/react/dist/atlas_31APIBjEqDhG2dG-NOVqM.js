import{r as p,j as i,R as lt,V as Ct,c as St}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Pt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Et,U as Mt,m as be,c as We,a as At}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as jt,V as j,n as me,T as he,Q as Ke,l as qe,o as $,R as Nt,p as Rt,q as Tt,e as ve,r as K,s as ee,N as kt,t as ct,C as f,c as Ie,d as Me,u as dt,v as Ue,G as ht,w as ce,F as It,x as Qe,L as Je,g as et,M as Ft,y as Dt,S as zt,P as Lt,W as Ot,z as Bt,H as Gt,I as Vt,D as tt,A as Wt}from"./atlas_1cqDeRiwbO3PD6yHGobFj.js";const Ut=({planet:o,system:e,galaxy:t,cosmicOriginTime:s,initialAngleRotation:a})=>{const[c,l]=p.useState(!1),r=b=>b.replace(/_/g," "),n=b=>{const C=b/86400;return C<30?`${C.toFixed(2)} days`:C<365?`${(C/30).toFixed(2)} months`:`${(C/365).toFixed(2)} years`},d=b=>{const C=b*9/5+32;return`${b.toFixed(1)}°C (${C.toFixed(1)}°F)`},u=b=>`${b.toExponential(2)} kg`,P=b=>b>=1e3?`${(b/1e3).toFixed(2)} km`:`${b.toFixed(2)} m`;return i.jsxs("div",{className:"h-full flex flex-col relative",children:[i.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),i.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[i.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),i.jsx(Et,{type:"planet",name:o.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:o.name,className:"text-xs"})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),i.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:o.planet_type})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),i.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:o.atmosphere})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),i.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:o.life_forms})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),i.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),i.jsx("div",{className:"text-xs font-bold text-orange-300",children:u(o.mass)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),i.jsx("div",{className:"text-xs font-bold text-orange-300",children:P(o.diameter)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),i.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[o.density.toFixed(2)," kg/m³"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),i.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[o.gravity.toFixed(2)," m/s²"]})]})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),i.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.orbital_radius.toFixed(2)," AU"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),i.jsx("div",{className:"text-xs font-bold text-cyan-300",children:n(o.orbital_period_seconds)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.orbital_speed.toFixed(2)," m/s"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.axial_tilt.toFixed(2),"°"]})]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),i.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),i.jsx("div",{className:"text-xs font-bold text-red-300",children:d(o.surface_temperature)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),i.jsx("div",{className:"text-xs font-bold text-red-300",children:n(o.rotation_period_seconds)})]})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",o.elements.length,")"]}),o.elements.length>4&&i.jsx("button",{onClick:()=>l(!c),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:c?"▲ Less":"▼ All"})]}),i.jsx("div",{className:"flex flex-wrap gap-1",children:(c?o.elements:o.elements.slice(0,4)).map((b,C)=>i.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:b},C))})]})]}),i.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[i.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),i.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Status:"}),i.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Planet:"}),i.jsx("div",{className:"text-white truncate font-medium",children:r(o.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"System:"}),i.jsx("div",{className:"text-white truncate font-medium",children:r(e.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"System ID:"}),i.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),i.jsx("div",{className:"text-white truncate font-medium",children:r(t.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),i.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},ot={type:"change"},He={type:"start"},ut={type:"end"},Te=new Nt,st=new Rt,Ht=Math.cos(70*Tt.DEG2RAD),F=new j,U=2*Math.PI,R={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Be=1e-6;class Yt extends jt{constructor(e,t=null){super(e,t),this.state=R.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:me.ROTATE,MIDDLE:me.DOLLY,RIGHT:me.PAN},this.touches={ONE:he.ROTATE,TWO:he.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Ke,this._lastTargetPosition=new j,this._quat=new Ke().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qe,this._sphericalDelta=new qe,this._scale=1,this._panOffset=new j,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new j,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zt.bind(this),this._onPointerDown=$t.bind(this),this._onPointerUp=Xt.bind(this),this._onContextMenu=oo.bind(this),this._onMouseWheel=Qt.bind(this),this._onKeyDown=Jt.bind(this),this._onTouchStart=eo.bind(this),this._onTouchMove=to.bind(this),this._onMouseDown=Kt.bind(this),this._onMouseMove=qt.bind(this),this._interceptControlDown=so.bind(this),this._interceptControlUp=io.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ot),this.update(),this.state=R.NONE}update(e=null){const t=this.object.position;F.copy(t).sub(this.target),F.applyQuaternion(this._quat),this._spherical.setFromVector3(F),this.autoRotate&&this.state===R.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=U:s>Math.PI&&(s-=U),a<-Math.PI?a+=U:a>Math.PI&&(a-=U),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=l!=this._spherical.radius}if(F.setFromSpherical(this._spherical),F.applyQuaternion(this._quatInverse),t.copy(this.target).add(F),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const r=F.length();l=this._clampDistance(r*this._scale);const n=r-l;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),c=!!n}else if(this.object.isOrthographicCamera){const r=new j(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=n!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(r),this.object.updateMatrixWorld(),l=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Te.origin.copy(this.object.position),Te.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Te.direction))<Ht?this.object.lookAt(this.target):(st.setFromNormalAndCoplanarPoint(this.object.up,this.target),Te.intersectPlane(st,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Be||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Be||this._lastTargetPosition.distanceToSquared(this.target)>Be?(this.dispatchEvent(ot),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?U/60*this.autoRotateSpeed*e:U/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){F.setFromMatrixColumn(t,0),F.multiplyScalar(-e),this._panOffset.add(F)}_panUp(e,t){this.screenSpacePanning===!0?F.setFromMatrixColumn(t,1):(F.setFromMatrixColumn(t,0),F.crossVectors(this.object.up,F)),F.multiplyScalar(e),this._panOffset.add(F)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;F.copy(a).sub(this.target);let c=F.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*t*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,c=t-s.top,l=s.width,r=s.height;this._mouse.x=a/l*2-1,this._mouse.y=-(c/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(U*this._rotateDelta.x/t.clientHeight),this._rotateUp(U*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,c=Math.sqrt(s*s+a*a);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(a,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(U*this._rotateDelta.x/t.clientHeight),this._rotateUp(U*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,c=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(l,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function $t(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function Zt(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function Xt(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ut),this.state=R.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Kt(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=R.DOLLY;break;case me.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=R.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=R.ROTATE}break;case me.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=R.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=R.PAN}break;default:this.state=R.NONE}this.state!==R.NONE&&this.dispatchEvent(He)}function qt(o){switch(this.state){case R.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case R.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case R.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function Qt(o){this.enabled===!1||this.enableZoom===!1||this.state!==R.NONE||(o.preventDefault(),this.dispatchEvent(He),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(ut))}function Jt(o){this.enabled!==!1&&this._handleKeyDown(o)}function eo(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case he.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=R.TOUCH_ROTATE;break;case he.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=R.TOUCH_PAN;break;default:this.state=R.NONE}break;case 2:switch(this.touches.TWO){case he.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=R.TOUCH_DOLLY_PAN;break;case he.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=R.TOUCH_DOLLY_ROTATE;break;default:this.state=R.NONE}break;default:this.state=R.NONE}this.state!==R.NONE&&this.dispatchEvent(He)}function to(o){switch(this._trackPointer(o),this.state){case R.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case R.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case R.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case R.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=R.NONE}}function oo(o){this.enabled!==!1&&o.preventDefault()}function so(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function io(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class it{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class mt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:s,ring_inner_radius:a,ring_outer_radius:c,tilt_factor:l,planet_radius:r,shape_seed:n}=e;if(!t||!s){console.warn("No ring data provided");return}const d=[...t.particles,...s.particles],u=d.length,P=new it(n||12345),b=new ve,C=new Float32Array(u*3),x=new Float32Array(u*3),_=new Float32Array(u),v=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],y=P.choice(v);for(let E=0;E<u;E++){const D=d[E],L=this.planetRadius/(r||200),te=(n||12345)+E,k=new it(te),oe=D.distance*L,S=D.angle,G=oe*Math.sin(S),O=Math.asin((l||.2)*.5),N=G*Math.sin(O),Z=G*Math.cos(O),B=((c||400)-(a||200))*L*.4,V=k.uniform(-B*.8,B*.8),W=k.uniform(-B*.3,B*.3),H=k.uniform(-.08,.08),Y=oe+W,se=S+H;C[E*3]=Y*Math.cos(se),C[E*3+1]=N+V+this.planetRadius*.15,C[E*3+2]=Z+k.uniform(-B*.4,B*.4),D.color[0]/255;const de=(D.distance-(a||200))/((c||400)-(a||200)),I=y.baseGray,q=y.variation,ie=k.uniform(-q,q),fe=Math.max(.12,Math.min(.45,I+ie)),ae=.8+de*.4,Ae=k.uniform(.85,1.15),je=k.uniform(0,1),Fe=je<.03?k.uniform(1.1,1.3):1,J=fe*ae*Ae*Fe,re=Math.max(.1,Math.min(.55,J));x[E*3]=re,x[E*3+1]=re,x[E*3+2]=re;const ne=.15,z=k.uniform(.3,.7),De=je<.1?k.uniform(1.05,1.2):1;_[E]=D.size*ne*z*De}b.setAttribute("position",new K(C,3)),b.setAttribute("color",new K(x,3)),b.setAttribute("size",new K(_,1)),this.material=new ee({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:kt}),this.ringSystem=new ct(b,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const s=t.rotation_period_seconds||86400,a=t.cosmicOriginTime||Date.now()/1e3,c=t.initialAngleRotation||0,r=Date.now()/1e3-a,n=2*Math.PI/s,d=(c+r*n)%(2*Math.PI);this.ringSystem.rotation.y=d}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function ao(o,e){const t={full_ring:o.full_ring,ontop_ring:o.ontop_ring,ring_inner_radius:o.ring_inner_radius,ring_outer_radius:o.ring_outer_radius,tilt_factor:o.tilt_factor,planet_radius:o.planet_radius,shape_seed:o.shape_seed};return new mt(e,t)}class at{seed;constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}random(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return this.random()*(t-e)+e}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class xe{material;params;mesh;static vertexShader=`
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
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new f(16753920),bandColor:t.bandColor||new f(16753920),stormColor:t.stormColor||new f(9109504),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,stormIntensity:t.stormIntensity||.7,noiseScale:t.noiseScale||4},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),s=new at(12345);for(let a=0;a<e&&a<20;a++)t[a]=s.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),s=new at(67890);for(let a=0;a<e&&a<20;a++)t[a]=s.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof f?this.params.baseColor:new f(this.params.baseColor),t=this.params.bandColor instanceof f?this.params.bandColor:new f(this.params.bandColor),s=this.params.stormColor instanceof f?this.params.stormColor:new f(this.params.stormColor);return new ee({vertexShader:xe.vertexShader,fragmentShader:xe.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},stormColor:{value:s},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},stormIntensity:{value:this.params.stormIntensity},noiseScale:{value:this.params.noiseScale}}})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){if(this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.baseColor){const t=e.baseColor instanceof f?e.baseColor:new f(e.baseColor);this.material.uniforms.planetColor.value=t}if(e.bandColor){const t=e.bandColor instanceof f?e.bandColor:new f(e.bandColor);this.material.uniforms.bandColor.value=t}if(e.stormColor){const t=e.stormColor instanceof f?e.stormColor:new f(e.stormColor);this.material.uniforms.stormColor.value=t}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function ro(o,e){const t=e.cloud_bands||{},s={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new f(e.base_color):new f(16753920),animationSpeed:1,turbulence:e.turbulence||.5,stormIntensity:e.storm_intensity||.7};return new xe(o,s)}class _e{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new f(8947848),intensity:t.intensity||.5,falloff:t.falloff||.6,scale:t.scale||1.15,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsationSpeed||2,fresnelPower:t.fresnelPower||3},this.geometry=new Ie(e*this.params.scale,64,64),this.material=this.createMaterial(),this.mesh=new Me(this.geometry,this.material)}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new ee({vertexShader:_e.vertexShader,fragmentShader:_e.fragmentShader,uniforms:{glowColor:{value:e},glowIntensity:{value:this.params.intensity},glowFalloff:{value:this.params.falloff},fresnelPower:{value:this.params.fresnelPower},time:{value:0},pulsation:{value:this.params.pulsation},pulsationSpeed:{value:this.params.pulsationSpeed}},transparent:!0,blending:Ue,side:dt,depthWrite:!1})}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.glowColor.value=t}e.intensity!==void 0&&(this.material.uniforms.glowIntensity.value=e.intensity),e.falloff!==void 0&&(this.material.uniforms.glowFalloff.value=e.falloff),e.pulsation!==void 0&&(this.material.uniforms.pulsation.value=e.pulsation),e.pulsationSpeed!==void 0&&(this.material.uniforms.pulsationSpeed.value=e.pulsationSpeed)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function no(o,e){const t=e.halo||{};console.log("🌟 AtmosphericHalo received data:",e);let s=new f(8947848);t.color&&Array.isArray(t.color)?(s=new f().setRGB(t.color[0],t.color[1],t.color[2]),console.log("🌟 Using specific halo color:",s)):e.color&&Array.isArray(e.color)?(s=new f().setRGB(e.color[0],e.color[1],e.color[2]),console.log("🌟 Using atmosphere color for halo:",e.color,"→",s)):console.log("🌟 Using default gray halo color (no atmosphere color found)");const a={color:s,intensity:t.intensity||.3,falloff:t.falloff||.4,scale:t.scale||1.08,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsation_speed||2};return new _e(o,a)}class we{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const s=e*(1+this.params.width/100);this.geometry=new Ie(s,32,32);const a=new f(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ee({vertexShader:we.vertexShader,fragmentShader:we.fragmentShader,uniforms:{atmosphereColor:{value:a},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Ue,side:dt,depthWrite:!1}),this.mesh=new Me(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new f(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function lo(o,e){let t=[.7,.7,.7,.15],s=12;if(e){if(console.log("🌫️ AtmosphereBrights received data:",e),e.color&&Array.isArray(e.color)){const c=e.color;t=[c[0],c[1],c[2],(c[3]||.15)*.7],console.log("🎨 Using API atmosphere color (Python normalized):",t)}else console.log("🎨 Using default atmosphere color (no API color found):",t);e.width&&(s=e.width)}else console.log("🎨 No atmosphere data found, using defaults:",{color:t,width:s});console.log("🌫️ Final AtmosphereBrights params:",{color:t,width:s,planetRadius:o,opacity:t[3]});const a={type:e?.type||"Thin",color:t,width:s,opacity:t[3],density:1};return new we(o,a)}class Ce{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new f(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new ve,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new ct(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),s=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),c=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),r=this.params.color instanceof f?this.params.color:new f(this.params.color);for(let n=0;n<this.particleCount;n++){const d=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1),P=e*(1+Math.random()*.1);t[n*3]=P*Math.sin(u)*Math.cos(d),t[n*3+1]=P*Math.sin(u)*Math.sin(d),t[n*3+2]=P*Math.cos(u),s[n*3]=r.r*(.8+Math.random()*.4),s[n*3+1]=r.g*(.8+Math.random()*.4),s[n*3+2]=r.b*(.8+Math.random()*.4),a[n]=this.params.size*(Math.random()*.5+.75),c[n]=this.params.speed*(Math.random()*.8+.6),l[n]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new K(t,3)),this.geometry.setAttribute("customColor",new K(s,3)),this.geometry.setAttribute("size",new K(a,1)),this.geometry.setAttribute("speed",new K(c,1)),this.geometry.setAttribute("phase",new K(l,1))}createMaterial(){return new ee({vertexShader:Ce.vertexShader,fragmentShader:Ce.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:Ue,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function co(o,e){const t=e.streaks||{},s={color:t.color?new f().setRGB(t.color[0],t.color[1],t.color[2]):new f(16777215),particleCount:t.count||100,speed:t.speed||1,size:2,opacity:.6,turbulence:1};return new Ce(o,s)}class Se{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={color:e.color||new f(7368816),roughness:e.roughness||.7,metalness:e.metalness||.9,fragmentationIntensity:e.fragmentationIntensity||.5,noiseScale:e.noiseScale||8,noiseIntensity:e.noiseIntensity||.3,edgeFragmentation:e.edgeFragmentation||1,circularWaves:e.circularWaves||1,fogPatches:e.fogPatches||1},this.material=this.createMaterial()}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new ee({vertexShader:Se.vertexShader,fragmentShader:Se.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},roughness:{value:this.params.roughness},metalness:{value:this.params.metalness},fragmentationIntensity:{value:this.params.fragmentationIntensity},noiseScale:{value:this.params.noiseScale},noiseIntensity:{value:this.params.noiseIntensity},edgeFragmentation:{value:this.params.edgeFragmentation},circularWaves:{value:this.params.circularWaves},fogPatches:{value:this.params.fogPatches}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.baseColor.value=t}e.roughness!==void 0&&(this.material.uniforms.roughness.value=e.roughness),e.metalness!==void 0&&(this.material.uniforms.metalness.value=e.metalness),e.fragmentationIntensity!==void 0&&(this.material.uniforms.fragmentationIntensity.value=e.fragmentationIntensity),e.noiseScale!==void 0&&(this.material.uniforms.noiseScale.value=e.noiseScale),e.noiseIntensity!==void 0&&(this.material.uniforms.noiseIntensity.value=e.noiseIntensity),e.edgeFragmentation!==void 0&&(this.material.uniforms.edgeFragmentation.value=e.edgeFragmentation),e.circularWaves!==void 0&&(this.material.uniforms.circularWaves.value=e.circularWaves),e.fogPatches!==void 0&&(this.material.uniforms.fogPatches.value=e.fogPatches)}getMaterial(){return this.material}dispose(){this.material.dispose()}}class rt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new f(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new ht,this.generateFragments()}generateFragments(){const e=new ce({color:this.params.color instanceof f?this.params.color:new f(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const s=this.generateFragmentGeometry(),a=new Me(s,e);this.positionFragment(a,t),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const c=this.params.size*(Math.random()*.5+.75);a.scale.set(c,c,c),a.userData={rotationAxis:new j(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(a),this.fragments.add(a)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],s=[],a=[];a.push(new j(0,0,0));for(let r=0;r<e;r++){const n=r/e*Math.PI*2,d=Math.random()*.5+.5,u=(Math.random()-.5)*.3;a.push(new j(Math.cos(n)*d,Math.sin(n)*d,u))}for(let r=1;r<=e;r++){const d=a[r].clone();d.z+=Math.random()*.4+.2,a.push(d)}for(const r of a)t.push(r.x,r.y,r.z);for(let r=1;r<e;r++)s.push(0,r,r+1);s.push(0,e,1);const c=a.length-e-1;for(let r=0;r<e-1;r++)s.push(c,c+r+2,c+r+1);s.push(c,c+1,c+e);for(let r=0;r<e;r++){const n=r+1,d=(r+1)%e+1,u=n+e,P=d+e;s.push(n,u,d),s.push(d,u,P)}const l=new ve;return l.setAttribute("position",new It(t,3)),l.setIndex(s),l.computeVertexNormals(),l}positionFragment(e,t){let s;switch(this.params.distribution){case"edge":s=this.generateEdgePosition(t);break;case"surface":s=this.generateSurfacePosition();break;case"random":default:s=this.generateRandomPosition();break}e.position.copy(s)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,s=this.planetRadius*(.95+Math.random()*.1),a=(Math.random()-.5)*this.planetRadius*.5;return new j(Math.cos(t)*s,a,Math.sin(t)*s)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),s=this.planetRadius*(1+Math.random()*.05);return new j(s*Math.sin(t)*Math.cos(e),s*Math.sin(t)*Math.sin(e),s*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,s=Math.random()*Math.PI*2;return new j(e*Math.sin(t)*Math.cos(s),e*Math.sin(t)*Math.sin(s),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,s)=>{const a=t.userData;t.rotateOnAxis(a.rotationAxis,a.rotationSpeed*e*this.params.animationSpeed);const c=Math.sin(Date.now()*.001+s)*.001;t.position.y+=c*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.fragmentMeshes.forEach(s=>{s.material instanceof ce&&(s.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof ce&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Qe&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Qe&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class Pe{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new f(.8,.8,.8),cloudColor:e.cloudColor||new f(.7,.7,.7),craterColor:e.craterColor||new f(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof f?this.params.mountainColor:new f(this.params.mountainColor),t=this.params.cloudColor instanceof f?this.params.cloudColor:new f(this.params.cloudColor),s=this.params.craterColor instanceof f?this.params.craterColor:new f(this.params.craterColor),a=new Array(30).fill(new j),c=new Array(30).fill(new j),l=new Array(10).fill(new j);return this.params.mountains&&this.params.mountains.forEach((r,n)=>{n<30&&(a[n]=new j(r.position[0],r.position[1],r.angle),c[n]=new j(r.width,r.height,0))}),this.params.clouds&&this.params.clouds.forEach((r,n)=>{n<10&&(l[n]=new j(r.position[0],r.position[1],r.radius))}),new ee({vertexShader:Pe.vertexShader,fragmentShader:Pe.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:a},mountainSizes:{value:c},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:l},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new j(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new j},craterColor:{value:s},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function ho(o){const e=o.surface_elements||o.surface||o;let t=[.8,.8,.8];const s=o.planet_info?.base_color||o.base_color;if(s&&typeof s=="string"){const n=s.replace("#","");t=[parseInt(n.substr(0,2),16)/255,parseInt(n.substr(2,2),16)/255,parseInt(n.substr(4,2),16)/255]}else Array.isArray(s)&&(t=s);let a=[],c=[],l;if(o.seeds){const n=_=>{let v=_;return()=>(v=(v*1664525+1013904223)%4294967296,v/4294967296)},d=_=>{const v=_()*Math.PI*2,y=Math.acos(_()*2-1),E=Math.sin(y)*Math.cos(v),D=Math.sin(y)*Math.sin(v);return[E,D]},u=n(o.seeds.planet_seed),P=6+Math.floor(u()*4);for(let _=0;_<P;_++)a.push({position:d(u),width:.1+u()*.3,height:.2+u()*.6,angle:u()*Math.PI*2});const b=n(o.seeds.shape_seed+1e3),C=3+Math.floor(b()*4);for(let _=0;_<C;_++)c.push({position:d(b),radius:.08+b()*.17});const x=n(o.seeds.shape_seed+2e3);x()<.7&&(l={position:d(x),radius:.1+x()*.2})}const r={mountains:e.mountains?.length>0?e.mountains:a,clouds:e.clouds?.length>0?e.clouds:c,crater:e.crater||l,baseTextureIntensity:.4,mountainColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1.1),cloudColor:new f(t[0]*.9,t[1]*.9,t[2]*.9),craterColor:new f(t[0]*.3,t[1]*.3,t[2]*.3)};return new Pe(r)}class Ee{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new f(.675,.843,.902),crackColor:e.crackColor||new f(.2,.2,.2),iceCapColor:e.iceCapColor||new f(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof f?this.params.crystalColor:new f(this.params.crystalColor),t=this.params.crackColor instanceof f?this.params.crackColor:new f(this.params.crackColor),s=this.params.iceCapColor instanceof f?this.params.iceCapColor:new f(this.params.iceCapColor),a=new Array(50).fill(new j),c=new Array(50).fill(new j),l=new Array(12).fill(new $),r=new Array(4).fill(new j);return this.params.crystals&&this.params.crystals.forEach((n,d)=>{d<50&&(a[d]=new j(n.position[0],n.position[1],n.angle),c[d]=new j(n.length,n.width,0))}),this.params.cracks&&this.params.cracks.forEach((n,d)=>{d<12&&(l[d]=new $(n.angle,n.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((n,d)=>{d<4&&(r[d]=new j(n.position[0],n.position[1],n.radius))}),new ee({vertexShader:Ee.vertexShader,fragmentShader:Ee.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:a},crystalSizes:{value:c},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:l},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:r},iceCapColor:{value:s},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function uo(o){const e=o.surface_elements||o.surface||o;let t=[.9,.95,1];const s=o.planet_info?.base_color||o.base_color;if(s&&typeof s=="string"){const n=s.replace("#","");t=[parseInt(n.substr(0,2),16)/255,parseInt(n.substr(2,2),16)/255,parseInt(n.substr(4,2),16)/255],t=[Math.min(t[0]+.1,1),Math.min(t[1]+.15,1),Math.min(t[2]+.2,1)]}else Array.isArray(s)&&(t=s);let a=[],c=[],l=[];if(o.seeds){const n=v=>{let y=v;return()=>(y=(y*1664525+1013904223)%4294967296,y/4294967296)},d=v=>{const y=v()*Math.PI*2,E=Math.acos(v()*2-1),D=Math.sin(E)*Math.cos(y),L=Math.sin(E)*Math.sin(y);return[D,L]},u=n(o.seeds.planet_seed),P=4+Math.floor(u()*6);for(let v=0;v<P;v++)a.push({position:d(u),length:.1+u()*.2,width:.05+u()*.1,angle:u()*Math.PI*2});const b=n(o.seeds.shape_seed),C=3+Math.floor(b()*5);for(let v=0;v<C;v++)c.push({angle:b()*Math.PI*2,length:.2+b()*.6});const x=n(o.seeds.shape_seed+500),_=2+Math.floor(x()*3);for(let v=0;v<_;v++)l.push({position:d(x),radius:.15+x()*.25})}const r={crystals:e.crystals?.length>0?e.crystals:a,cracks:e.cracks?.length>0?e.cracks:c,iceCaps:e.ice_caps?.length>0?e.ice_caps:l,baseTextureIntensity:.3,crystalColor:new f(t[0]*.8,t[1]*.9,t[2]*1),crackColor:new f(t[0]*.3,t[1]*.3,t[2]*.4),iceCapColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1)};return new Ee(r)}class ft{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new ht,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,s=e,a=t*Math.cos(s),c=t*Math.sin(s),l=c*.8,r=new ve,n=new Float32Array([0,0,0,a,l,c]);r.setAttribute("position",new K(n,3));const d=new Je({color:16776960,linewidth:5,transparent:!1});this.sunLine=new et(r,d),this.debugGroup.add(this.sunLine);const u=e+Math.PI,P=t*.7,b=P*Math.cos(u),C=0,x=P*Math.sin(u),_=new Ie(this.planetRadius*.15,16,16),v=new Ft({color:16776960,transparent:!1,opacity:1}),y=new Me(_,v);y.position.set(b,C,x),this.debugGroup.add(y),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,s=new ve,a=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);s.setAttribute("position",new K(a,3));const c=new Je({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new et(s,c),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,s=this.params.rotationPeriod||86400,a=this.params.initialAngleRotation||0,c=e-t,l=2*Math.PI/s;return(a+c*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),s=this.planetRadius*20,a=this.sunLine.geometry,c=a.attributes.position.array;c[3]=s*Math.cos(t),c[4]=0,c[5]=s*Math.sin(t),a.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,s=this.rotationLine.geometry,a=s.attributes.position.array;a[0]=-t*Math.cos(e),a[1]=0,a[2]=-t*Math.sin(e),a[3]=t*Math.cos(e),a[4]=0,a[5]=t*Math.sin(e),s.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function mo(o,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:o.debug?.cosmic_origin_time||o.timing?.cosmic_origin_time||o.cosmicOriginTime,rotationPeriod:o.planet_info?.rotation_period||o.rotation_period_seconds||86400,initialAngleRotation:o.debug?.initial_angle_rotation||o.timing?.initial_angle_rotation||o.initialAngleRotation||0,planetRadius:e,orbitalAngle:o.timing?.orbital_angle||0,sunAngle:o.sun_angle||o.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new ft(e,t)}function ke(o){const e=o.replace("#",""),t=parseInt(e.substr(0,2),16)/255,s=parseInt(e.substr(2,2),16)/255,a=parseInt(e.substr(4,2),16)/255;return new f(t,s,a)}function Ge(o){return o.length>=3?new f(o[0],o[1],o[2]):new f(.5,.5,.5)}function Ve(o){if(o.ocean_color){if(typeof o.ocean_color=="string")return ke(o.ocean_color);if(Array.isArray(o.ocean_color))return Ge(o.ocean_color)}if(o.planet_info?.base_color){if(typeof o.planet_info.base_color=="string")return ke(o.planet_info.base_color);if(Array.isArray(o.planet_info.base_color))return Ge(o.planet_info.base_color)}if(o.base_color){if(typeof o.base_color=="string")return ke(o.base_color);if(Array.isArray(o.base_color))return Ge(o.base_color)}const e=o.planet_info?.type||o.type||"Unknown";return fo(e)}function fo(o){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[o]||"#FFFFFF";return ke(t)}const po=!1;class ue{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return ue.instance||(ue.instance=new ue),ue.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,s)=>new Se(e),fromPythonData:(e,t,s)=>{const a=Ve(e),c=[a.r,a.g,a.b];return new Se({color:c,roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}}),this.registerEffect("gas_giant_bands",{create:(e,t,s)=>new xe(s,e),fromPythonData:(e,t,s)=>ro(s,e)}),this.registerEffect("atmospheric_halo",{create:(e,t)=>new _e(t,e),fromPythonData:(e,t)=>no(t,e.atmosphere||{})}),this.registerEffect("cloud_gyros",{create:(e,t)=>new Ce(t,e),fromPythonData:(e,t)=>co(t,e.atmosphere||{})}),this.registerEffect("atmosphere_brights",{create:(e,t)=>new we(t,e),fromPythonData:(e,t)=>lo(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new mt(t,e),fromPythonData:(e,t)=>ao(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new rt(t,e),fromPythonData:(e,t)=>new rt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,s)=>new Pe(e),fromPythonData:(e,t,s)=>ho(e)}),this.registerEffect("icy_terrain",{create:(e,t,s)=>new Ee(e),fromPythonData:(e,t,s)=>uo(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new ft(t,e),fromPythonData:(e,t)=>mo(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,s,a,c=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const r=l.create(t,s,a);if(!r)return null;const n={id:`effect_${this.nextId++}`,type:e,effect:r,priority:c,enabled:!0};return this.effects.set(n.id,n),n}catch(r){return console.error(`Error creating effect '${e}':`,r),null}}createEffectFromPythonData(e,t,s,a,c=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,s,a,c);try{const r=l.fromPythonData(t,s,a);if(!r)return null;const n={id:`effect_${this.nextId++}`,type:e,effect:r,priority:c,enabled:!0};return this.effects.set(n.id,n),n}catch(r){return console.error(`Error creating effect '${e}' from Python data:`,r),null}}createEffectsFromList(e,t,s){const a=[],c=e.sort((l,r)=>(l.priority||0)-(r.priority||0));for(const l of c){const r=this.createEffect(l.type,l.params,t,s,l.priority);r&&(r.enabled=l.enabled!==!1,a.push(r))}return a}createEffectsFromPythonPlanetData(e,t,s,a){const c=[];try{if(console.log("🌍 EffectRegistry received Python data:",e),console.log("🔍 Surface elements:",e.surface_elements),console.log("🌫️ Atmosphere:",e.atmosphere),console.log("💍 Rings:",e.rings),console.log("🪐 Planet info:",e.planet_info),e.surface_elements){const l=e.surface_elements;if(console.log("🏔️ Processing surface elements:",l.type,l),l.effects_3d&&Array.isArray(l.effects_3d)){console.log("✨ Applying modular 3D effects:",l.effects_3d);for(const r of l.effects_3d){const n=this.createEffect(r.type,r.params,t,s,r.priority||0);n&&(c.push(n),n.effect.addToScene&&n.effect.addToScene(a,s.position),console.log("✅ Added modular effect:",r.type))}}switch(console.log("🔍 Checking legacy surface type:",l.type),l.type){case"gas_giant":console.log("🌀 Creating Gas Giant bands effect");const r=this.createEffectFromPythonData("gas_giant_bands",{...l,base_color:e.planet_info?.base_color||e.surface?.base_color,turbulence:e.turbulence||l.turbulence,storm_intensity:e.storm_intensity||l.storm_intensity},t,s,0);r?(c.push(r),console.log("✅ Gas Giant bands effect applied to mesh material")):console.warn("⚠️ Failed to create Gas Giant effect");break;case"metallic":case"metallic_3d":console.log("⚙️ Creating Metallic surface effect");const n=this.createEffectFromPythonData("metallic_surface",{...e,surface:{...e.surface,base_color:e.planet_info?.base_color||e.surface?.base_color}},t,s,0);n?(c.push(n),n.effect.addToScene?(n.effect.addToScene(a,s.position),console.log("✅ Added Metallic surface to scene")):n.effect.apply&&(n.effect.apply(s),console.log("✅ Applied Metallic surface to mesh"))):console.warn("⚠️ Failed to create Metallic effect");break;case"rocky":const d=this.createEffectFromPythonData("rocky_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,s,0);d&&(c.push(d),d.effect.apply(s));break;case"icy":const u=this.createEffectFromPythonData("icy_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,s,0);u&&(c.push(u),u.effect.apply(s));break;case"oceanic":console.log("🌊 Oceanic planet detected - using generic rendering");break;default:if(console.log("❓ Unknown surface type:",l.type,"- applying base color"),s.material instanceof ce){const P=Ve(e);s.material.color.copy(P),console.log("✅ Applied base color to planet without specific effects:",P)}break}}else if(console.log("❌ No surface_elements found in Python data - applying base color"),s.material instanceof ce){const l=Ve(e);s.material.color.copy(l),console.log("✅ Applied base color to planet without surface_elements:",l)}if(e.atmosphere){if(console.log("🌫️ Applying atmospheric effects for:",e.planet_info?.type),e.atmosphere.halo&&e.atmosphere.halo.enabled!==!1){const l=this.createEffectFromPythonData("atmospheric_halo",e,t,s,10);l&&(c.push(l),l.effect.addToScene(a,s.position),console.log("✅ Added atmospheric halo effect"))}if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const l=this.createEffectFromPythonData("cloud_gyros",e,t,s,20);l&&(c.push(l),l.effect.addToScene(a,s.position),console.log("✅ Added cloud gyros effect"))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const l=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),r={...e.atmosphere};l==="oceanic"&&(r.opacity=Math.min(r.opacity||.3,.15),r.width=Math.min(r.width||15,8));const n=this.createEffectFromPythonData("atmosphere_brights",r,t,s,5);n&&(c.push(n),n.effect.addToScene(a,s.position),console.log("✅ Added atmosphere brights effect"))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){console.log("💍 Applying ring system for:",e.planet_info?.type,"rings data:",e.rings);const l=this.createEffectFromPythonData("ring_system",e,t,s,1);l?(c.push(l),l.effect.addToScene(a,s.position),console.log("✅ Added ring system effect")):console.warn("⚠️ Failed to create ring effect")}else console.log("❌ No rings for:",e.planet_info?.type,"rings:",e.rings);if(e.surface_elements?.has_fragmentation_zones){const l=this.createEffectFromPythonData("fragmentation",e,t,s,5);l&&(c.push(l),l.effect.addToScene(a,s.position))}return console.log("📊 EffectRegistry Summary:"),console.log(`   Total effects created: ${c.length}`),c.forEach((l,r)=>{console.log(`   ${r+1}. ${l.type} (${l.enabled?"enabled":"disabled"})`)}),c.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),c}catch(l){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",l),l}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const s=this.effects.get(e);s&&(s.enabled=t!==void 0?t:!s.enabled)}updateAllEffects(e,t){for(const s of this.effects.values())if(s.enabled&&s.effect.update)try{s.effect.update(e,t)}catch(a){console.error(`Error updating effect ${s.type}:`,a)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const pe=ue.getInstance(),ge={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmospheric_halo:{intensity:1,falloff:2,scale:1.2,pulsation:!1},gas_giant_bands:{numBands:8,animationSpeed:1,turbulence:.5,stormIntensity:.7}};function go(o){const e=[];switch(o.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...ge.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmospheric_halo",params:{...ge.atmospheric_halo,color:[.6,.1,.9],scale:1.15},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"gas_giant_bands",params:ge.gas_giant_bands,priority:0},{type:"atmospheric_halo",params:{...ge.atmospheric_halo,color:[1,.6,.2],intensity:.8},priority:10});break;case"icy":e.push({type:"atmospheric_halo",params:{...ge.atmospheric_halo,color:[.5,.8,1],intensity:.6,scale:1.1},priority:10});break;default:e.push({type:"atmospheric_halo",params:{color:[.5,.5,.8],intensity:.5},priority:10});break}return e}const X={log:(o,e)=>{},warn:(o,e)=>{console.warn(`[Effects] ${o}`,e||"")},error:(o,e)=>{console.error(`[Effects] ${o}`,e||"")},debug:(o,e)=>{}};new Date().toISOString();const bo=({planetData:o,showInConsole:e=!0,showInPage:t=!1})=>{const[s,a]=p.useState([]),[c,l]=p.useState({});p.useEffect(()=>{if(!o)return;const d=r(o);l(d),a(n(o)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=o,window.__DEBUG_PLANET_ANALYSIS=d)},[o,e]);function r(d){const u={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(d.planet_info&&d.surface_elements?u.hasValidStructure=!0:(d.planet_info||u.missingFields.push("planet_info"),d.surface_elements||u.missingFields.push("surface_elements")),d.surface_elements?.type==="oceanic"&&(u.oceanicData={hasAbstractLands:!!d.surface_elements.abstract_lands?.length,numGreenPatches:d.surface_elements.green_patches?.length||0,numClouds:d.surface_elements.clouds?.length||0,hasDepths:d.surface_elements.depths?.enabled||!1,baseColorIsBlue:d.planet_info?.base_color==="#0000FF",greenPatchColor:d.surface_elements.green_patches?.[0]?.color,issues:[]},u.oceanicData.numGreenPatches>15&&u.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),u.oceanicData.baseColorIsBlue||u.oceanicData.issues.push(`Color base no es azul puro: ${d.planet_info?.base_color}`),u.renderingIssues=u.oceanicData.issues),d.planet_info?.base_color&&d.planet_info?.type){const b={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[d.planet_info.type];b&&d.planet_info.base_color!==b?u.colorConsistency=`Inconsistente: esperado ${b}, recibido ${d.planet_info.base_color}`:u.colorConsistency="Correcto"}return u}function n(d){const u=[];if(!d.surface_elements?.type)return["No surface type defined"];const P=d.surface_elements.type.toLowerCase();switch(P){case"oceanic":u.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":u.push("RockyTerrainEffect");break;case"icy":u.push("IcyTerrainEffect");break;case"gas giant":u.push("GasGiantBandsEffect");break;default:u.push(`Generic effect for type: ${P}`)}return d.atmosphere?.density>0&&u.push("AtmosphericEffect"),d.rings&&u.push("RingSystemEffect"),u}return t?i.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[i.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",o.planet_info?.name]}),i.jsxs("div",{style:{marginBottom:"10px"},children:[i.jsx("strong",{children:"Type:"})," ",o.planet_info?.type,i.jsx("br",{}),i.jsx("strong",{children:"Base Color:"})," ",o.planet_info?.base_color,i.jsx("br",{}),i.jsx("strong",{children:"Radius:"})," ",o.planet_info?.radius]}),o.surface_elements?.type==="oceanic"&&i.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[i.jsx("strong",{children:"🌊 Oceanic Data:"}),i.jsx("br",{}),i.jsxs("span",{style:{color:c.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",c.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),i.jsx("br",{}),"Green Patches: ",c.oceanicData?.numGreenPatches,i.jsx("br",{}),"Clouds: ",c.oceanicData?.numClouds,i.jsx("br",{}),"Has Depths: ",c.oceanicData?.hasDepths?"Yes":"No",i.jsx("br",{}),c.oceanicData?.issues?.length>0&&i.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",i.jsx("br",{}),c.oceanicData.issues.map((d,u)=>i.jsxs("div",{children:["- ",d]},u))]})]}),i.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[i.jsx("strong",{children:"🎨 Effects Applied:"}),i.jsx("br",{}),s.map((d,u)=>i.jsxs("div",{style:{color:d.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",d]},u))]}),i.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function yo(o){p.useEffect(()=>{if(o&&o.surface_elements?.type==="oceanic"){o.surface_elements.green_patches?.length>0;const e=o.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[o])}const ye=2.5,nt=()=>{const o=45*Math.PI/180;return ye/(Math.tan(o/2)*.5)},vo=({planetName:o,containerClassName:e="",width:t=800,height:s=600,autoRotate:a=!0,enableControls:c=!0,showDebugInfo:l=!1,planetData:r,cosmicOriginTime:n,initialAngleRotation:d,onDataLoaded:u,onEffectsCreated:P,onError:b})=>{const C=p.useRef(null),x=p.useRef(null),_=p.useRef(null),v=p.useRef(null),y=p.useRef(null),E=p.useRef(null),D=p.useRef(new Dt),L=p.useRef(null),te=p.useRef(0),k=p.useRef(null),[oe,S]=p.useState(!0),[G,O]=p.useState(null),[N,Z]=p.useState(null),[B,V]=p.useState([]),[W,H]=p.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),Y=p.useRef([]),se=p.useRef(0),Q=p.useRef(null),de=Math.floor(Date.now()/1e3),[I,q]=p.useState(0),ie=n||N?.timing?.cosmic_origin_time||Date.now()/1e3-3600,fe=de-ie+I;te.current=fe;const ae=p.useCallback(()=>{if(!C.current||!_.current||!v.current)return;const h=C.current,g=h.clientWidth||400,m=h.clientHeight||400;_.current.setSize(g,m),v.current.aspect=g/m,v.current.updateProjectionMatrix()},[]),Ae=async h=>{if(!(!y.current||!x.current)){X.log("Applying modular effects from API data",{planet:h.planet_info.name,type:h.planet_info.type});try{ze();const g=pe.createEffectsFromPythonPlanetData(h,ye,y.current,x.current);V(g),Y.current=g,P&&P(g),X.log(`Successfully applied ${g.length} modular effects`),Le()}catch(g){X.error("Error applying modular effects",g),Ne()}}},je=p.useCallback(()=>{if(!C.current)return!1;try{for(;C.current.firstChild;)C.current.removeChild(C.current.firstChild);x.current=null,v.current=null,_.current=null,y.current=null,z.current=null;const h=C.current,g=h.clientWidth||t||400,m=h.clientHeight||s||400,w=new zt;w.background=new f(1297),x.current=w;const T=new Lt(45,g/m,.1,1e4),A=nt();console.log("🎯 Camera distance for exact Pillow proportions:",A),T.position.set(0,0,A),T.lookAt(0,0,0),v.current=T;const M=new Ot({antialias:!0,alpha:!0,powerPreference:"high-performance"});return M.setSize(g,m),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.shadowMap.enabled=!0,M.shadowMap.type=Bt,M.toneMapping=Gt,M.toneMappingExposure=1.2,M.outputColorSpace=Vt,C.current.appendChild(M.domElement),_.current=M,pt(w,null),gt(w),c&&bt(T,M.domElement),!0}catch(h){return console.error("Error initializing Three.js:",h),!1}},[N,r,n]),Fe=h=>{if(!h)return 0;const g=h.sun_angle||h.lighting?.sun_angle;if(g!==void 0)return g;const m=h.timing?.current_orbital_angle||h.timing?.orbital_angle;return m??0},J=p.useRef(null),re=p.useRef(null),ne=p.useRef(null),z=p.useRef(null),De=h=>{h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=.5,h.shadow.camera.far=50,h.shadow.camera.left=-10,h.shadow.camera.right=10,h.shadow.camera.top=10,h.shadow.camera.bottom=-10},Ye=h=>{if(!J.current||!x.current)return;const g=Fe(h),m=10,w=g+Math.PI,T=Math.sin(g)*5,A=m*Math.cos(w),M=T,le=m*Math.sin(w);J.current.position.set(A,M,le),J.current.target.position.set(0,0,0),x.current.children.includes(J.current.target)||x.current.add(J.current.target),re.current&&re.current.position.set(-A*.5,0,-le*.5)},pt=(h,g)=>{{const m=new tt(16777215,2);m.position.set(-10,5,10),m.target.position.set(0,0,0),m.castShadow=!0,De(m),h.add(m),h.add(m.target),J.current=m;const w=new tt(16777215,.05);w.position.set(8,-3,-5),h.add(w),re.current=w;const T=new Wt(2236996,.1);h.add(T);return}},gt=h=>{console.log("🪐 Creating normalized planet with fixed radius:",ye);const g=new Ie(ye,128,64),m=new ce({color:8421504,metalness:.1,roughness:.8,transparent:!1,opacity:1}),w=new Me(g,m);w.castShadow=!0,w.receiveShadow=!0,w.position.set(0,0,0),h.add(w),y.current=w,console.log("🪐 Base planet created - color will be updated when API data arrives")},bt=(h,g)=>{const m=new Yt(h,g);m.enableDamping=!0,m.dampingFactor=.05;const w=nt();m.minDistance=w*.8,m.maxDistance=w*3,m.autoRotate=a,m.autoRotateSpeed=.5,m.enablePan=!0,m.enableZoom=!0,m.target.set(0,0,0),E.current=m},yt=p.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{S(!0),O(null),X.log("Loading planet data from API",{planetName:o});const g=await fetch("/api/planet/rendering-data");if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);const m=await g.json();if(!m.success)throw new Error(m.error||"Failed to fetch planet data");const w=m.planet_data,T=m.timing,A=m.rendering_data,M={planet_info:A?.planet_info||{name:w.name,type:w.planet_type,base_color:"#808080",radius:w.diameter/15e3},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:T.cosmic_origin_time,current_time_seconds:T.current_time_seconds,elapsed_time:T.elapsed_time,initial_orbital_angle:w.initial_orbital_angle,current_orbital_angle:w.current_orbital_angle,max_orbital_radius:T.max_orbital_radius,system_max_orbital_radius:w.system_max_orbital_radius},original_planet_data:w};return Z(M),k.current=M,X.log("API data loaded successfully",{planet:M.planet_info.name,type:M.planet_info.type,hasEffects:!!M.surface_elements,fullRenderingData:A}),console.log("🌍 Planet API Response:",m),console.log("🎨 Rendering Data:",A),console.log("🔧 Processed Data:",M),u&&u(M),M}catch(h){const g=h instanceof Error?h.message:"Unknown error";return O(g),b&&b(g),null}finally{S(!1),window.isLoadingPlanetData=!1}}},[o,u,b]);p.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{S(!0),O(null),X.log("Loading planet data from API",{planetName:o});const g=await fetch("/api/planet/rendering-data");if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);const m=await g.json();if(!m.success)throw new Error(m.error||"Failed to fetch planet data");const w=m.planet_data,T=m.timing,A=m.rendering_data,M={planet_info:A?.planet_info||{name:w.name,type:w.planet_type,base_color:"#808080",radius:w.diameter/15e3},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:T.cosmic_origin_time,current_time_seconds:T.current_time_seconds,elapsed_time:T.elapsed_time,initial_orbital_angle:w.initial_orbital_angle,current_orbital_angle:w.current_orbital_angle,max_orbital_radius:T.max_orbital_radius,system_max_orbital_radius:w.system_max_orbital_radius},original_planet_data:w};Z(M),k.current=M,X.log("API data loaded successfully",{planet:M.planet_info.name,type:M.planet_info.type,hasEffects:!!M.surface_elements,fullRenderingData:A}),console.log("🌍 Full Load - API Response:",m),console.log("🎨 Full Load - Rendering Data:",A),console.log("🔧 Full Load - Processed Data:",M),Ye(M),z.current&&x.current&&(x.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Ae(M),u&&u(M)}catch(h){const g=h instanceof Error?h.message:"Unknown error";O(g),b&&b(g),Ne()}finally{S(!1),window.isLoadingPlanetData=!1}}},[o,r,n,d]);const $e=p.useCallback(()=>{if(!N||!y.current)return;const h=r?.orbital_period_seconds||365.25*24*3600,g=2*Math.PI/h,m=N.timing?.initial_orbital_angle||0,w=Date.now()/1e3,T=0,A=n||N.timing?.cosmic_origin_time||Date.now()/1e3-3600,M=w-A+T,le=(m+M*g)%(2*Math.PI),Oe=N.timing?.max_orbital_radius||100,Re=20+N.planet_info?.orbital_radius/Oe*80,xt=Re,_t=Re*Math.cos(le),wt=xt*Math.sin(le);y.current.position.x=_t,y.current.position.z=wt,y.current.position.y=0},[N,r,n]),vt=p.useCallback(async h=>{const g=h||N;if(g&&x.current)try{Ye(g),z.current&&x.current&&(x.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Ae(g)}catch(m){X.error("Error in applyProceduralShadersFromAPI:",m),Ne()}},[N]),Ne=()=>{if(!(!x.current||!y.current)){X.warn("Applying fallback effects for planet type:",r?.planet_type);try{ze(),y.current.material instanceof ce&&(y.current.material.color.setHex(6710886),console.log("⚠️ Applied fallback generic color - API should provide real colors"));try{const h=go("generic"),g=pe.createEffectsFromList(h,ye,y.current);g.forEach(m=>{m.effect.addToScene&&x.current&&y.current&&m.effect.addToScene(x.current,y.current.position)}),Y.current=g,V(g)}catch(h){console.warn("Could not create fallback effects, using basic material only:",h)}Le()}catch(h){X.error("Error applying fallback effects",h)}}},ze=()=>{Y.current.forEach(h=>{try{h.effect.dispose&&h.effect.dispose()}catch{}}),Y.current=[],V([])},Ze=p.useCallback(()=>{L.current=requestAnimationFrame(Ze);const h=performance.now(),g=D.current.getDelta();E.current&&E.current.update();try{pe.updateAllEffects(g,y.current?.rotation.y)}catch{}if(y.current&&k.current){k.current.planet_info?.name;const m=k.current.original_planet_data,w=m?.orbital_period_seconds||365.25*24*3600,T=k.current.timing?.initial_orbital_angle||0;n||k.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const A=m?.axial_tilt||0,M=2*Math.PI/w;(T+te.current*M)%(2*Math.PI);const le=k.current.timing?.max_orbital_radius||k.current.timing?.system_max_orbital_radius,Oe=m?.orbital_radius;if(!le||!Oe)return;m?.eccentricity_factor,y.current.position.set(0,0,0);const Xe=m?.rotation_period_seconds||86400,Re=2*Math.PI/Xe;y.current.rotation.y=te.current*Re%(2*Math.PI),y.current.rotation.z=A*(Math.PI/180)}if(Y.current.forEach(m=>{m.effect.updateUniforms&&m.effect.updateUniforms(g)}),_.current&&x.current&&v.current){const m=performance.now();_.current.render(x.current,v.current);const w=performance.now()-m;if(h-se.current>5e3){const T=1e3/(h-se.current);Le(),H(A=>({...A,frameRate:Math.round(T),renderTime:Math.round(w*100)/100})),se.current=h}}},[]),Le=p.useCallback(()=>{const h=pe.getStats();H(g=>({...g,activeEffects:h.activeEffects,enabledEffects:h.enabledEffects}))},[]);return p.useEffect(()=>{let h=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!h)return;const m=await yt();if(!h)return;if(!je()){h&&O("Failed to initialize 3D renderer");return}if(!h||(Ze(),C.current&&"ResizeObserver"in window&&(Q.current=new ResizeObserver(ae),Q.current.observe(C.current)),window.addEventListener("resize",ae),!h))return;m?await vt(m):Ne()}catch(m){h&&O(m instanceof Error?m.message:"Unknown initialization error")}})(),()=>{if(h=!1,k.current=null,L.current&&cancelAnimationFrame(L.current),Q.current&&Q.current.disconnect(),window.removeEventListener("resize",ae),ze(),E.current&&E.current.dispose(),ne.current&&x.current&&(x.current.remove(ne.current),ne.current.geometry.dispose(),ne.current.material.dispose(),ne.current=null),z.current&&x.current&&(x.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),_.current&&C.current)try{C.current.contains(_.current.domElement)&&C.current.removeChild(_.current.domElement),_.current.dispose()}catch{}}},[]),p.useEffect(()=>{const h=setInterval(()=>{const g=pe.getStats();H(m=>({...m,activeEffects:g.activeEffects,enabledEffects:g.enabledEffects}))},1e4);return()=>clearInterval(h)},[]),p.useEffect(()=>{N&&x.current&&y.current&&$e()},[N,$e]),yo(N),i.jsxs("div",{className:`relative ${e}`,children:[l&&N&&i.jsx(bo,{planetData:N,showInPage:!0,showInConsole:!0}),i.jsx("div",{ref:C,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),oe&&i.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:i.jsxs("div",{className:"text-white text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),i.jsx("div",{children:"Loading planet..."})]})}),G&&i.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[i.jsx("strong",{children:"Error:"})," ",G]}),N&&!oe&&i.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[i.jsx("h3",{className:"text-lg font-bold",children:N.planet_info.name}),i.jsx("p",{className:"text-sm opacity-80",children:N.planet_info.type}),i.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[B.length," effects active"]}),N.surface_elements?.description&&i.jsx("p",{className:"text-xs mt-2 opacity-60",children:N.surface_elements.description.appearance})]}),l&&i.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[i.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),i.jsxs("div",{children:["Frame Rate: ",W.frameRate," FPS"]}),i.jsxs("div",{children:["Render Time: ",W.renderTime,"ms"]}),i.jsxs("div",{children:["Active Effects: ",W.activeEffects]}),i.jsxs("div",{children:["Enabled Effects: ",W.enabledEffects]}),i.jsxs("div",{className:"mt-2",children:[i.jsx("div",{className:"font-semibold",children:"Effects:"}),B.map(h=>i.jsxs("div",{className:"ml-2",children:[h.type," (",h.enabled?"ON":"OFF",")"]},h.id))]})]})]})};class xo extends lt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?i.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:i.jsxs("div",{className:"text-center p-4",children:[i.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),i.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const _o=o=>i.jsx(xo,{children:i.jsx(vo,{...o})}),wo=({planetUrl:o,imageUrl:e,planet:t,cosmicOriginTime:s,initialAngleRotation:a})=>{const c=p.useRef(null),l=p.useRef(null),[r,n]=p.useState("Aligning Stargate..."),[d,u]=p.useState(!1),[P,b]=p.useState(!1),[C,x]=p.useState(!1),[_,v]=p.useState(!0),[y,E]=p.useState(!0),[D,L]=p.useState(null),[te,k]=p.useState(null);p.useEffect(()=>{const S=document.createElement("style");return S.textContent=`
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
    `,document.head.appendChild(S),()=>{document.head.removeChild(S)}},[]),p.useEffect(()=>{const S=c.current;if(!S)return;const G=S.getContext("2d");if(!G)return;let O=[];const N=800;let Z,B;const V=800;let W,H=.5;function Y(){const I=S?.parentElement;if(!I||!S)return;const q=I.clientWidth,ie=I.clientHeight;S.width=Math.min(q,V),S.height=Math.min(ie,V),Z=S.width/2,B=S.height/2}function se(){Y(),O=[];for(let I=0;I<N;I++)O.push({x:Math.random()*(S?.width||800),y:Math.random()*(S?.height||800),z:Math.random()*(S?.width||800),o:Math.random()});Q()}function Q(){!S||!G||(G.clearRect(0,0,S.width,S.height),O.forEach(I=>{I.z-=H,I.z<=0&&(I.z=S.width,I.x=Math.random()*S.width,I.y=Math.random()*S.height,I.o=Math.random());const q=S.width/I.z,ie=(I.x-Z)*q+Z,fe=(I.y-B)*q+B,ae=2*q;G.beginPath(),G.fillStyle=`rgba(255, 255, 255, ${I.o})`,G.arc(ie,fe,ae,0,2*Math.PI),G.fill()}),H<60&&(H+=1),W=requestAnimationFrame(Q))}se();const de=()=>Y();return window.addEventListener("resize",de),()=>{window.removeEventListener("resize",de),W&&cancelAnimationFrame(W)}},[]),p.useEffect(()=>{if(e&&!_){const S=new Image;S.onload=()=>{l.current&&(l.current.src=e,b(!0),x(!0))},S.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{b(!0),x(!0)},1500)},S.src=e}else(_||!e)&&setTimeout(()=>{b(!0),x(!0)},1500)},[e,_]),p.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){n("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),u(!0);const G=(V,W)=>Array.from({length:W},()=>V[Math.floor(Math.random()*V.length)]).join(""),O=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let N=0,Z=0;const B=()=>{if(N>=O.length){const W="Stargate system aligned";let H=0;n("");const Y=()=>{H<W.length?(n(W.substring(0,H+1)),H++,setTimeout(Y,30)):u(!1)};Y();return}const V=O[N];n(G(V.chars,32)),Z++,Z>=V.iterations&&(N++,Z=0),setTimeout(B,V.duration)};B()},[]);const oe=()=>{v(!_),_||(b(!0),x(!0))};return i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-3",children:[i.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),y&&i.jsx("div",{className:"flex items-center gap-2",children:i.jsx("button",{onClick:oe,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${_?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:_?"2D View":"3D View"})})]}),i.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[i.jsx("canvas",{ref:c,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${C?"opacity-0":"opacity-100"}`,style:{filter:C?"blur(50px)":"none"}}),_&&P&&t&&i.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${P?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:i.jsx(_o,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:s,initialAngleRotation:a,onDataLoaded:S=>{L(S)},onError:S=>{k(S),console.error("❌ Planet rendering error:",S)}})}),!_&&i.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${P?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:P&&e?i.jsx("div",{className:"w-full h-full flex items-center justify-center",children:i.jsx(Mt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:i.jsx("img",{ref:l,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):i.jsx("img",{ref:l,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),y&&i.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:_?"🌍 3D":"🖼️ 2D"})]}),i.jsxs("div",{className:"text-center mt-auto",children:[i.jsxs("a",{href:o,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${d?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[i.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[i.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),r]}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),i.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",_&&D&&i.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",D.planet_info?.type," Planet",D.atmosphere&&i.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),D.rings?.has_rings&&i.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),_&&te&&i.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Co=({currentPlanet:o,system:e,galaxy:t,systemPlanets:s})=>{const[a,c]=p.useState(null),[l,r]=p.useState(null),[n,d]=p.useState(!1),[u,P]=p.useState(!1),[b,C]=p.useState(!0);p.useEffect(()=>{if(s&&s.length>0){const v=s.findIndex(y=>y.name.toLowerCase()===o.toLowerCase());v!==-1?(v>0?(c(s[v-1].name.toLowerCase()),d(!0)):e.index>0?(c("__prev_system__"),d(!0)):d(!1),v<s.length-1?(r(s[v+1].name.toLowerCase()),P(!0)):(r("__next_system__"),P(!0))):(d(!1),P(!1))}else d(!1),P(!1);C(!1)},[o,e.index,s]);const x=async()=>{const v=t.coordinates.join(",");if(a==="__prev_system__")try{const y=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(y.ok){const E=await y.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const L=E.system.planets[E.system.planets.length-1].name.toLowerCase();be(v,e.index-1,L,E.system.planets),We(v,e.index-1),window.location.href=`/planet/${L}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else a&&(be(v,e.index,a,s),window.location.href=`/planet/${a}`)},_=async()=>{const v=t.coordinates.join(",");if(l==="__next_system__")try{const y=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(y.ok){const E=await y.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const L=E.system.planets[0].name.toLowerCase();be(v,e.index+1,L,E.system.planets),We(v,e.index+1),window.location.href=`/planet/${L}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(be(v,e.index,l,s),window.location.href=`/planet/${l}`)};return b?null:i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("button",{onClick:x,disabled:!n,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${n?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:i.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),i.jsx("button",{onClick:_,disabled:!u,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${u?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:i.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},So=({planet:o,system:e,galaxy:t,planet_url:s,version:a,image_url:c,cosmic_origin_time:l,initial_angle_rotation:r})=>{const[n]=p.useState(t.coordinates.join(","));p.useEffect(()=>{document.body.setAttribute("data-coordinates",n),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",o.name.toLowerCase()),be(n,e.index,o.name,e.planets||[]),We(n,e.index)},[n,e.index,o.name]);const d=b=>b.replace(/_/g," "),u=b=>b.replace(/_/g," "),P=b=>b.replace(/_/g," ");return i.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[i.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),i.jsxs("div",{className:"relative z-10",children:[i.jsx(Pt,{}),i.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:i.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",d(o.name),"'"]})}),i.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",u(e.name),"' - Galaxy '",P(t.name),"'"]}),i.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),i.jsx(Co,{currentPlanet:o.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),i.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:i.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[i.jsx("div",{className:"order-1 lg:order-1",children:i.jsx(wo,{planetUrl:s,imageUrl:c,planet:o,cosmicOriginTime:l,initialAngleRotation:r})}),i.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),i.jsx("div",{className:"order-2 lg:order-2",children:i.jsx(Ut,{planet:o,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:r})})]})}),i.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:i.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:i.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",u(e.name),"'"]})})})]}),i.jsx(Ct,{version:a})]}),i.jsx(At,{currentLocation:{type:"planet",name:o.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:o.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const o=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),s=document.getElementById("meta-data");if(!o||!e||!t||!s){console.error("Missing required data elements");return}const a=JSON.parse(o.textContent||"{}"),c=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),r=JSON.parse(s.textContent||"{}"),n={planet:a,system:c,galaxy:l,planet_url:r.planet_url,version:r.version,image_url:r.image_url,cosmic_origin_time:r.cosmic_origin_time,initial_angle_rotation:r.initial_angle_rotation},d=document.getElementById("atlas-react-root");d&&St.createRoot(d).render(lt.createElement(So,n))}catch(o){console.error("Error initializing Planet React app:",o)}});
