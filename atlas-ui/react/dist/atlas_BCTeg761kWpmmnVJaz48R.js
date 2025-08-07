import{r as p,j as i,R as lt,V as Ct,c as St}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Pt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Et,U as Mt,m as be,c as Ue,a as At}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as jt,V as j,n as me,T as he,Q as Xe,l as Ke,o as $,R as Rt,p as Tt,q as Nt,e as xe,r as K,s as ce,N as kt,t as ct,C as f,c as ke,d as Ee,u as dt,v as Ve,w as ee,G as ht,F as It,x as qe,L as Qe,g as Je,M as Dt,y as Ft,S as zt,P as Lt,W as Ot,z as Bt,H as Gt,I as Ut,D as et,A as Vt}from"./atlas_1cqDeRiwbO3PD6yHGobFj.js";const Wt=({planet:s,system:e,galaxy:t,cosmicOriginTime:o,initialAngleRotation:a})=>{const[c,r]=p.useState(!1),n=b=>b.replace(/_/g," "),l=b=>{const C=b/86400;return C<30?`${C.toFixed(2)} days`:C<365?`${(C/30).toFixed(2)} months`:`${(C/365).toFixed(2)} years`},d=b=>{const C=b*9/5+32;return`${b.toFixed(1)}°C (${C.toFixed(1)}°F)`},u=b=>`${b.toExponential(2)} kg`,E=b=>b>=1e3?`${(b/1e3).toFixed(2)} km`:`${b.toFixed(2)} m`;return i.jsxs("div",{className:"h-full flex flex-col relative",children:[i.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),i.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[i.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),i.jsx(Et,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),i.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),i.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),i.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),i.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),i.jsx("div",{className:"text-xs font-bold text-orange-300",children:u(s.mass)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),i.jsx("div",{className:"text-xs font-bold text-orange-300",children:E(s.diameter)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),i.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),i.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),i.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),i.jsx("div",{className:"text-xs font-bold text-cyan-300",children:l(s.orbital_period_seconds)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),i.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),i.jsx("div",{className:"text-xs font-bold text-red-300",children:d(s.surface_temperature)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),i.jsx("div",{className:"text-xs font-bold text-red-300",children:l(s.rotation_period_seconds)})]})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&i.jsx("button",{onClick:()=>r(!c),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:c?"▲ Less":"▼ All"})]}),i.jsx("div",{className:"flex flex-wrap gap-1",children:(c?s.elements:s.elements.slice(0,4)).map((b,C)=>i.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:b},C))})]})]}),i.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[i.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),i.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Status:"}),i.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Planet:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(s.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"System:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(e.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"System ID:"}),i.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(t.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),i.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},tt={type:"change"},We={type:"start"},ut={type:"end"},Te=new Rt,st=new Tt,Yt=Math.cos(70*Nt.DEG2RAD),D=new j,W=2*Math.PI,T={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oe=1e-6;class Ht extends jt{constructor(e,t=null){super(e,t),this.state=T.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:me.ROTATE,MIDDLE:me.DOLLY,RIGHT:me.PAN},this.touches={ONE:he.ROTATE,TWO:he.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Xe,this._lastTargetPosition=new j,this._quat=new Xe().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ke,this._sphericalDelta=new Ke,this._scale=1,this._panOffset=new j,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new j,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zt.bind(this),this._onPointerDown=$t.bind(this),this._onPointerUp=Xt.bind(this),this._onContextMenu=ss.bind(this),this._onMouseWheel=Qt.bind(this),this._onKeyDown=Jt.bind(this),this._onTouchStart=es.bind(this),this._onTouchMove=ts.bind(this),this._onMouseDown=Kt.bind(this),this._onMouseMove=qt.bind(this),this._interceptControlDown=os.bind(this),this._interceptControlUp=is.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tt),this.update(),this.state=T.NONE}update(e=null){const t=this.object.position;D.copy(t).sub(this.target),D.applyQuaternion(this._quat),this._spherical.setFromVector3(D),this.autoRotate&&this.state===T.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let o=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(o)&&isFinite(a)&&(o<-Math.PI?o+=W:o>Math.PI&&(o-=W),a<-Math.PI?a+=W:a>Math.PI&&(a-=W),o<=a?this._spherical.theta=Math.max(o,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(o+a)/2?Math.max(o,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=r!=this._spherical.radius}if(D.setFromSpherical(this._spherical),D.applyQuaternion(this._quatInverse),t.copy(this.target).add(D),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const n=D.length();r=this._clampDistance(n*this._scale);const l=n-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),c=!!l}else if(this.object.isOrthographicCamera){const n=new j(this._mouse.x,this._mouse.y,0);n.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=l!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(n),this.object.updateMatrixWorld(),r=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Te.origin.copy(this.object.position),Te.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Te.direction))<Yt?this.object.lookAt(this.target):(st.setFromNormalAndCoplanarPoint(this.object.up,this.target),Te.intersectPlane(st,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Oe||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oe||this._lastTargetPosition.distanceToSquared(this.target)>Oe?(this.dispatchEvent(tt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?W/60*this.autoRotateSpeed*e:W/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){D.setFromMatrixColumn(t,0),D.multiplyScalar(-e),this._panOffset.add(D)}_panUp(e,t){this.screenSpacePanning===!0?D.setFromMatrixColumn(t,1):(D.setFromMatrixColumn(t,0),D.crossVectors(this.object.up,D)),D.multiplyScalar(e),this._panOffset.add(D)}_pan(e,t){const o=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;D.copy(a).sub(this.target);let c=D.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/o.clientHeight,this.object.matrix),this._panUp(2*t*c/o.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/o.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/o.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const o=this.domElement.getBoundingClientRect(),a=e-o.left,c=t-o.top,r=o.width,n=o.height;this._mouse.x=a/r*2-1,this._mouse.y=-(c/n)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(W*this._rotateDelta.x/t.clientHeight),this._rotateUp(W*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(W*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-W*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(W*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-W*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(o,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(o,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,a=e.pageY-t.y,c=Math.sqrt(o*o+a*a);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const o=this._getSecondPointerPosition(e),a=.5*(e.pageX+o.x),c=.5*(e.pageY+o.y);this._rotateEnd.set(a,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(W*this._rotateDelta.x/t.clientHeight),this._rotateUp(W*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(o,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,a=e.pageY-t.y,c=Math.sqrt(o*o+a*a);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,n=(e.pageY+t.y)*.5;this._updateZoomParameters(r,n)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,o={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(o.deltaY*=10),o}}function $t(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Zt(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Xt(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ut),this.state=T.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Kt(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=T.DOLLY;break;case me.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=T.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=T.ROTATE}break;case me.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=T.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=T.PAN}break;default:this.state=T.NONE}this.state!==T.NONE&&this.dispatchEvent(We)}function qt(s){switch(this.state){case T.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case T.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case T.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Qt(s){this.enabled===!1||this.enableZoom===!1||this.state!==T.NONE||(s.preventDefault(),this.dispatchEvent(We),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ut))}function Jt(s){this.enabled!==!1&&this._handleKeyDown(s)}function es(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case he.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=T.TOUCH_ROTATE;break;case he.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=T.TOUCH_PAN;break;default:this.state=T.NONE}break;case 2:switch(this.touches.TWO){case he.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=T.TOUCH_DOLLY_PAN;break;case he.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=T.TOUCH_DOLLY_ROTATE;break;default:this.state=T.NONE}break;default:this.state=T.NONE}this.state!==T.NONE&&this.dispatchEvent(We)}function ts(s){switch(this._trackPointer(s),this.state){case T.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case T.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case T.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case T.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=T.NONE}}function ss(s){this.enabled!==!1&&s.preventDefault()}function os(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function is(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ot{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class mt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:o,ring_inner_radius:a,ring_outer_radius:c,tilt_factor:r,planet_radius:n,shape_seed:l}=e;if(!t||!o){console.warn("No ring data provided");return}const d=[...t.particles,...o.particles],u=d.length,E=new ot(l||12345),b=new xe,C=new Float32Array(u*3),_=new Float32Array(u*3),v=new Float32Array(u),x=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],y=E.choice(x);for(let P=0;P<u;P++){const F=d[P],L=this.planetRadius/(n||200),te=(l||12345)+P,k=new ot(te),se=F.distance*L,S=F.angle,G=se*Math.sin(S),O=Math.asin((r||.2)*.5),R=G*Math.sin(O),Z=G*Math.cos(O),B=((c||400)-(a||200))*L*.4,U=k.uniform(-B*.8,B*.8),V=k.uniform(-B*.3,B*.3),Y=k.uniform(-.08,.08),H=se+V,oe=S+Y;C[P*3]=H*Math.cos(oe),C[P*3+1]=R+U+this.planetRadius*.15,C[P*3+2]=Z+k.uniform(-B*.4,B*.4),F.color[0]/255;const de=(F.distance-(a||200))/((c||400)-(a||200)),I=y.baseGray,q=y.variation,ie=k.uniform(-q,q),fe=Math.max(.12,Math.min(.45,I+ie)),ae=.8+de*.4,Me=k.uniform(.85,1.15),Ae=k.uniform(0,1),Ie=Ae<.03?k.uniform(1.1,1.3):1,J=fe*ae*Me*Ie,ne=Math.max(.1,Math.min(.55,J));_[P*3]=ne,_[P*3+1]=ne,_[P*3+2]=ne;const re=.15,z=k.uniform(.3,.7),De=Ae<.1?k.uniform(1.05,1.2):1;v[P]=F.size*re*z*De}b.setAttribute("position",new K(C,3)),b.setAttribute("color",new K(_,3)),b.setAttribute("size",new K(v,1)),this.material=new ce({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:kt}),this.ringSystem=new ct(b,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const o=t.rotation_period_seconds||86400,a=t.cosmicOriginTime||Date.now()/1e3,c=t.initialAngleRotation||0,n=Date.now()/1e3-a,l=2*Math.PI/o,d=(c+n*l)%(2*Math.PI);this.ringSystem.rotation.y=d}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function as(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new mt(e,t)}class it{seed;constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}random(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return this.random()*(t-e)+e}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class _e{material;params;mesh;static vertexShader=`
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
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new f(16753920),bandColor:t.bandColor||new f(16753920),stormColor:t.stormColor||new f(9109504),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,stormIntensity:t.stormIntensity||.7,noiseScale:t.noiseScale||4},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),o=new it(12345);for(let a=0;a<e&&a<20;a++)t[a]=o.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),o=new it(67890);for(let a=0;a<e&&a<20;a++)t[a]=o.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof f?this.params.baseColor:new f(this.params.baseColor),t=this.params.bandColor instanceof f?this.params.bandColor:new f(this.params.bandColor),o=this.params.stormColor instanceof f?this.params.stormColor:new f(this.params.stormColor);return new ce({vertexShader:_e.vertexShader,fragmentShader:_e.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},stormColor:{value:o},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},stormIntensity:{value:this.params.stormIntensity},noiseScale:{value:this.params.noiseScale}}})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){if(this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.baseColor){const t=e.baseColor instanceof f?e.baseColor:new f(e.baseColor);this.material.uniforms.planetColor.value=t}if(e.bandColor){const t=e.bandColor instanceof f?e.bandColor:new f(e.bandColor);this.material.uniforms.bandColor.value=t}if(e.stormColor){const t=e.stormColor instanceof f?e.stormColor:new f(e.stormColor);this.material.uniforms.stormColor.value=t}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function ns(s,e){const t=e.cloud_bands||{},o={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new f(e.base_color):new f(16753920),animationSpeed:1,turbulence:e.turbulence||.5,stormIntensity:e.storm_intensity||.7};return new _e(s,o)}class ve{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new f(8947848),intensity:t.intensity||.5,falloff:t.falloff||.6,scale:t.scale||1.15,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsationSpeed||2,fresnelPower:t.fresnelPower||3},this.geometry=new ke(e*this.params.scale,64,64),this.material=this.createMaterial(),this.mesh=new Ee(this.geometry,this.material)}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new ce({vertexShader:ve.vertexShader,fragmentShader:ve.fragmentShader,uniforms:{glowColor:{value:e},glowIntensity:{value:this.params.intensity},glowFalloff:{value:this.params.falloff},fresnelPower:{value:this.params.fresnelPower},time:{value:0},pulsation:{value:this.params.pulsation},pulsationSpeed:{value:this.params.pulsationSpeed}},transparent:!0,blending:Ve,side:dt,depthWrite:!1})}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.glowColor.value=t}e.intensity!==void 0&&(this.material.uniforms.glowIntensity.value=e.intensity),e.falloff!==void 0&&(this.material.uniforms.glowFalloff.value=e.falloff),e.pulsation!==void 0&&(this.material.uniforms.pulsation.value=e.pulsation),e.pulsationSpeed!==void 0&&(this.material.uniforms.pulsationSpeed.value=e.pulsationSpeed)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function rs(s,e){const t=e.halo||{};console.log("🌟 AtmosphericHalo received data:",e);let o=new f(8947848);t.color&&Array.isArray(t.color)?(o=new f().setRGB(t.color[0],t.color[1],t.color[2]),console.log("🌟 Using specific halo color:",o)):e.color&&Array.isArray(e.color)?(o=new f().setRGB(e.color[0],e.color[1],e.color[2]),console.log("🌟 Using atmosphere color for halo:",e.color,"→",o)):console.log("🌟 Using default gray halo color (no atmosphere color found)");const a={color:o,intensity:t.intensity||.3,falloff:t.falloff||.4,scale:t.scale||1.08,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsation_speed||2};return new ve(s,a)}class we{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const o=e*(1+this.params.width/100);this.geometry=new ke(o,32,32);const a=new f(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ce({vertexShader:we.vertexShader,fragmentShader:we.fragmentShader,uniforms:{atmosphereColor:{value:a},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Ve,side:dt,depthWrite:!1}),this.mesh=new Ee(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new f(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function ls(s,e){let t=[.7,.7,.7,.15],o=12;if(e){if(console.log("🌫️ AtmosphereBrights received data:",e),e.color&&Array.isArray(e.color)){const c=e.color;t=[c[0],c[1],c[2],(c[3]||.15)*.7],console.log("🎨 Using API atmosphere color (Python normalized):",t)}else console.log("🎨 Using default atmosphere color (no API color found):",t);e.width&&(o=e.width)}else console.log("🎨 No atmosphere data found, using defaults:",{color:t,width:o});console.log("🌫️ Final AtmosphereBrights params:",{color:t,width:o,planetRadius:s,opacity:t[3]});const a={type:e?.type||"Thin",color:t,width:o,opacity:t[3],density:1};return new we(s,a)}class Ce{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new f(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new xe,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new ct(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),c=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),n=this.params.color instanceof f?this.params.color:new f(this.params.color);for(let l=0;l<this.particleCount;l++){const d=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1),E=e*(1+Math.random()*.1);t[l*3]=E*Math.sin(u)*Math.cos(d),t[l*3+1]=E*Math.sin(u)*Math.sin(d),t[l*3+2]=E*Math.cos(u),o[l*3]=n.r*(.8+Math.random()*.4),o[l*3+1]=n.g*(.8+Math.random()*.4),o[l*3+2]=n.b*(.8+Math.random()*.4),a[l]=this.params.size*(Math.random()*.5+.75),c[l]=this.params.speed*(Math.random()*.8+.6),r[l]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new K(t,3)),this.geometry.setAttribute("customColor",new K(o,3)),this.geometry.setAttribute("size",new K(a,1)),this.geometry.setAttribute("speed",new K(c,1)),this.geometry.setAttribute("phase",new K(r,1))}createMaterial(){return new ce({vertexShader:Ce.vertexShader,fragmentShader:Ce.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:Ve,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function cs(s,e){const t=e.streaks||{},o={color:t.color?new f().setRGB(t.color[0],t.color[1],t.color[2]):new f(16777215),particleCount:t.count||100,speed:t.speed||1,size:2,opacity:.6,turbulence:1};return new Ce(s,o)}class at{params;constructor(e={}){this.params=e,console.log("🔥 MetallicSurface: CONSTRUCTOR LLAMADO - pero NO hace nada")}apply(e){console.log("🔥 MetallicSurface.apply() LLAMADO - APLICANDO EFECTO REAL"),e.material instanceof ee?(e.material.color.setHex(16711680),e.material.emissive.setHex(3342336),e.material.metalness=1,e.material.roughness=0,e.material.needsUpdate=!0,console.log("✅ METALLIC SURFACE APLICADO - DEBERÍA VERSE ROJO BRILLANTE")):console.warn("⚠️ Material no es MeshStandardMaterial:",e.material.type)}update(e){}updateParams(e){}getMaterial(){return null}dispose(){}}class nt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new f(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new ht,this.generateFragments()}generateFragments(){const e=new ee({color:this.params.color instanceof f?this.params.color:new f(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const o=this.generateFragmentGeometry(),a=new Ee(o,e);this.positionFragment(a,t),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const c=this.params.size*(Math.random()*.5+.75);a.scale.set(c,c,c),a.userData={rotationAxis:new j(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(a),this.fragments.add(a)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],o=[],a=[];a.push(new j(0,0,0));for(let n=0;n<e;n++){const l=n/e*Math.PI*2,d=Math.random()*.5+.5,u=(Math.random()-.5)*.3;a.push(new j(Math.cos(l)*d,Math.sin(l)*d,u))}for(let n=1;n<=e;n++){const d=a[n].clone();d.z+=Math.random()*.4+.2,a.push(d)}for(const n of a)t.push(n.x,n.y,n.z);for(let n=1;n<e;n++)o.push(0,n,n+1);o.push(0,e,1);const c=a.length-e-1;for(let n=0;n<e-1;n++)o.push(c,c+n+2,c+n+1);o.push(c,c+1,c+e);for(let n=0;n<e;n++){const l=n+1,d=(n+1)%e+1,u=l+e,E=d+e;o.push(l,u,d),o.push(d,u,E)}const r=new xe;return r.setAttribute("position",new It(t,3)),r.setIndex(o),r.computeVertexNormals(),r}positionFragment(e,t){let o;switch(this.params.distribution){case"edge":o=this.generateEdgePosition(t);break;case"surface":o=this.generateSurfacePosition();break;case"random":default:o=this.generateRandomPosition();break}e.position.copy(o)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,o=this.planetRadius*(.95+Math.random()*.1),a=(Math.random()-.5)*this.planetRadius*.5;return new j(Math.cos(t)*o,a,Math.sin(t)*o)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),o=this.planetRadius*(1+Math.random()*.05);return new j(o*Math.sin(t)*Math.cos(e),o*Math.sin(t)*Math.sin(e),o*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;return new j(e*Math.sin(t)*Math.cos(o),e*Math.sin(t)*Math.sin(o),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,o)=>{const a=t.userData;t.rotateOnAxis(a.rotationAxis,a.rotationSpeed*e*this.params.animationSpeed);const c=Math.sin(Date.now()*.001+o)*.001;t.position.y+=c*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.fragmentMeshes.forEach(o=>{o.material instanceof ee&&(o.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof ee&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof qe&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof qe&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class Se{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new f(.8,.8,.8),cloudColor:e.cloudColor||new f(.7,.7,.7),craterColor:e.craterColor||new f(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof f?this.params.mountainColor:new f(this.params.mountainColor),t=this.params.cloudColor instanceof f?this.params.cloudColor:new f(this.params.cloudColor),o=this.params.craterColor instanceof f?this.params.craterColor:new f(this.params.craterColor),a=new Array(30).fill(new j),c=new Array(30).fill(new j),r=new Array(10).fill(new j);return this.params.mountains&&this.params.mountains.forEach((n,l)=>{l<30&&(a[l]=new j(n.position[0],n.position[1],n.angle),c[l]=new j(n.width,n.height,0))}),this.params.clouds&&this.params.clouds.forEach((n,l)=>{l<10&&(r[l]=new j(n.position[0],n.position[1],n.radius))}),new ce({vertexShader:Se.vertexShader,fragmentShader:Se.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:a},mountainSizes:{value:c},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:r},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new j(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new j},craterColor:{value:o},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function ds(s){const e=s.surface_elements||s.surface||s;let t=[.8,.8,.8];const o=s.planet_info?.base_color||s.base_color;if(o&&typeof o=="string"){const l=o.replace("#","");t=[parseInt(l.substr(0,2),16)/255,parseInt(l.substr(2,2),16)/255,parseInt(l.substr(4,2),16)/255]}else Array.isArray(o)&&(t=o);let a=[],c=[],r;if(s.seeds){const l=v=>{let x=v;return()=>(x=(x*1664525+1013904223)%4294967296,x/4294967296)},d=v=>{const x=v()*Math.PI*2,y=Math.acos(v()*2-1),P=Math.sin(y)*Math.cos(x),F=Math.sin(y)*Math.sin(x);return[P,F]},u=l(s.seeds.planet_seed),E=6+Math.floor(u()*4);for(let v=0;v<E;v++)a.push({position:d(u),width:.1+u()*.3,height:.2+u()*.6,angle:u()*Math.PI*2});const b=l(s.seeds.shape_seed+1e3),C=3+Math.floor(b()*4);for(let v=0;v<C;v++)c.push({position:d(b),radius:.08+b()*.17});const _=l(s.seeds.shape_seed+2e3);_()<.7&&(r={position:d(_),radius:.1+_()*.2})}const n={mountains:e.mountains?.length>0?e.mountains:a,clouds:e.clouds?.length>0?e.clouds:c,crater:e.crater||r,baseTextureIntensity:.4,mountainColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1.1),cloudColor:new f(t[0]*.9,t[1]*.9,t[2]*.9),craterColor:new f(t[0]*.3,t[1]*.3,t[2]*.3)};return new Se(n)}class Pe{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new f(.675,.843,.902),crackColor:e.crackColor||new f(.2,.2,.2),iceCapColor:e.iceCapColor||new f(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof f?this.params.crystalColor:new f(this.params.crystalColor),t=this.params.crackColor instanceof f?this.params.crackColor:new f(this.params.crackColor),o=this.params.iceCapColor instanceof f?this.params.iceCapColor:new f(this.params.iceCapColor),a=new Array(50).fill(new j),c=new Array(50).fill(new j),r=new Array(12).fill(new $),n=new Array(4).fill(new j);return this.params.crystals&&this.params.crystals.forEach((l,d)=>{d<50&&(a[d]=new j(l.position[0],l.position[1],l.angle),c[d]=new j(l.length,l.width,0))}),this.params.cracks&&this.params.cracks.forEach((l,d)=>{d<12&&(r[d]=new $(l.angle,l.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((l,d)=>{d<4&&(n[d]=new j(l.position[0],l.position[1],l.radius))}),new ce({vertexShader:Pe.vertexShader,fragmentShader:Pe.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:a},crystalSizes:{value:c},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:r},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:n},iceCapColor:{value:o},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function hs(s){const e=s.surface_elements||s.surface||s;let t=[.9,.95,1];const o=s.planet_info?.base_color||s.base_color;if(o&&typeof o=="string"){const l=o.replace("#","");t=[parseInt(l.substr(0,2),16)/255,parseInt(l.substr(2,2),16)/255,parseInt(l.substr(4,2),16)/255],t=[Math.min(t[0]+.1,1),Math.min(t[1]+.15,1),Math.min(t[2]+.2,1)]}else Array.isArray(o)&&(t=o);let a=[],c=[],r=[];if(s.seeds){const l=x=>{let y=x;return()=>(y=(y*1664525+1013904223)%4294967296,y/4294967296)},d=x=>{const y=x()*Math.PI*2,P=Math.acos(x()*2-1),F=Math.sin(P)*Math.cos(y),L=Math.sin(P)*Math.sin(y);return[F,L]},u=l(s.seeds.planet_seed),E=4+Math.floor(u()*6);for(let x=0;x<E;x++)a.push({position:d(u),length:.1+u()*.2,width:.05+u()*.1,angle:u()*Math.PI*2});const b=l(s.seeds.shape_seed),C=3+Math.floor(b()*5);for(let x=0;x<C;x++)c.push({angle:b()*Math.PI*2,length:.2+b()*.6});const _=l(s.seeds.shape_seed+500),v=2+Math.floor(_()*3);for(let x=0;x<v;x++)r.push({position:d(_),radius:.15+_()*.25})}const n={crystals:e.crystals?.length>0?e.crystals:a,cracks:e.cracks?.length>0?e.cracks:c,iceCaps:e.ice_caps?.length>0?e.ice_caps:r,baseTextureIntensity:.3,crystalColor:new f(t[0]*.8,t[1]*.9,t[2]*1),crackColor:new f(t[0]*.3,t[1]*.3,t[2]*.4),iceCapColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1)};return new Pe(n)}class ft{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new ht,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,o=e,a=t*Math.cos(o),c=t*Math.sin(o),r=c*.8,n=new xe,l=new Float32Array([0,0,0,a,r,c]);n.setAttribute("position",new K(l,3));const d=new Qe({color:16776960,linewidth:5,transparent:!1});this.sunLine=new Je(n,d),this.debugGroup.add(this.sunLine);const u=e+Math.PI,E=t*.7,b=E*Math.cos(u),C=0,_=E*Math.sin(u),v=new ke(this.planetRadius*.15,16,16),x=new Dt({color:16776960,transparent:!1,opacity:1}),y=new Ee(v,x);y.position.set(b,C,_),this.debugGroup.add(y),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=new xe,a=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);o.setAttribute("position",new K(a,3));const c=new Qe({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new Je(o,c),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,o=this.params.rotationPeriod||86400,a=this.params.initialAngleRotation||0,c=e-t,r=2*Math.PI/o;return(a+c*r)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),o=this.planetRadius*20,a=this.sunLine.geometry,c=a.attributes.position.array;c[3]=o*Math.cos(t),c[4]=0,c[5]=o*Math.sin(t),a.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=this.rotationLine.geometry,a=o.attributes.position.array;a[0]=-t*Math.cos(e),a[1]=0,a[2]=-t*Math.sin(e),a[3]=t*Math.cos(e),a[4]=0,a[5]=t*Math.sin(e),o.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function us(s,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:s.debug?.cosmic_origin_time||s.timing?.cosmic_origin_time||s.cosmicOriginTime,rotationPeriod:s.planet_info?.rotation_period||s.rotation_period_seconds||86400,initialAngleRotation:s.debug?.initial_angle_rotation||s.timing?.initial_angle_rotation||s.initialAngleRotation||0,planetRadius:e,orbitalAngle:s.timing?.orbital_angle||0,sunAngle:s.sun_angle||s.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new ft(e,t)}function Ne(s){const e=s.replace("#",""),t=parseInt(e.substr(0,2),16)/255,o=parseInt(e.substr(2,2),16)/255,a=parseInt(e.substr(4,2),16)/255;return new f(t,o,a)}function Be(s){return s.length>=3?new f(s[0],s[1],s[2]):new f(.5,.5,.5)}function Ge(s){if(s.ocean_color){if(typeof s.ocean_color=="string")return Ne(s.ocean_color);if(Array.isArray(s.ocean_color))return Be(s.ocean_color)}if(s.planet_info?.base_color){if(typeof s.planet_info.base_color=="string")return Ne(s.planet_info.base_color);if(Array.isArray(s.planet_info.base_color))return Be(s.planet_info.base_color)}if(s.base_color){if(typeof s.base_color=="string")return Ne(s.base_color);if(Array.isArray(s.base_color))return Be(s.base_color)}const e=s.planet_info?.type||s.type||"Unknown";return ms(e)}function ms(s){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[s]||"#FFFFFF";return Ne(t)}const fs=!1;class ue{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return ue.instance||(ue.instance=new ue),ue.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,o)=>new at(e),fromPythonData:(e,t,o)=>{const a=Ge(e),c=[a.r,a.g,a.b];return new at({color:c,roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}}),this.registerEffect("gas_giant_bands",{create:(e,t,o)=>new _e(o,e),fromPythonData:(e,t,o)=>ns(o,e)}),this.registerEffect("atmospheric_halo",{create:(e,t)=>new ve(t,e),fromPythonData:(e,t)=>rs(t,e.atmosphere||{})}),this.registerEffect("cloud_gyros",{create:(e,t)=>new Ce(t,e),fromPythonData:(e,t)=>cs(t,e.atmosphere||{})}),this.registerEffect("atmosphere_brights",{create:(e,t)=>new we(t,e),fromPythonData:(e,t)=>ls(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new mt(t,e),fromPythonData:(e,t)=>as(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new nt(t,e),fromPythonData:(e,t)=>new nt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,o)=>new Se(e),fromPythonData:(e,t,o)=>ds(e)}),this.registerEffect("icy_terrain",{create:(e,t,o)=>new Pe(e),fromPythonData:(e,t,o)=>hs(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new ft(t,e),fromPythonData:(e,t)=>us(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,o,a,c=0){const r=this.creators.get(e);if(!r)return console.warn(`Effect type '${e}' not registered`),null;try{const n=r.create(t,o,a);if(!n)return null;const l={id:`effect_${this.nextId++}`,type:e,effect:n,priority:c,enabled:!0};return this.effects.set(l.id,l),l}catch(n){return console.error(`Error creating effect '${e}':`,n),null}}createEffectFromPythonData(e,t,o,a,c=0){const r=this.creators.get(e);if(!r||!r.fromPythonData)return this.createEffect(e,t,o,a,c);try{const n=r.fromPythonData(t,o,a);if(!n)return null;const l={id:`effect_${this.nextId++}`,type:e,effect:n,priority:c,enabled:!0};return this.effects.set(l.id,l),l}catch(n){return console.error(`Error creating effect '${e}' from Python data:`,n),null}}createEffectsFromList(e,t,o){const a=[],c=e.sort((r,n)=>(r.priority||0)-(n.priority||0));for(const r of c){const n=this.createEffect(r.type,r.params,t,o,r.priority);n&&(n.enabled=r.enabled!==!1,a.push(n))}return a}createEffectsFromPythonPlanetData(e,t,o,a){const c=[];try{if(console.log("🌍 EffectRegistry received Python data:",e),console.log("🔍 Surface elements:",e.surface_elements),console.log("🌫️ Atmosphere:",e.atmosphere),console.log("💍 Rings:",e.rings),console.log("🪐 Planet info:",e.planet_info),e.surface_elements){const r=e.surface_elements;if(console.log("🏔️ Processing surface elements:",r.type,r),r.effects_3d&&Array.isArray(r.effects_3d)){console.log("✨ Applying modular 3D effects:",r.effects_3d);for(const n of r.effects_3d){const l=this.createEffect(n.type,n.params,t,o,n.priority||0);l&&(c.push(l),l.effect.addToScene&&l.effect.addToScene(a,o.position),console.log("✅ Added modular effect:",n.type))}}switch(console.log("🔍 Checking legacy surface type:",r.type),r.type){case"gas_giant":console.log("🌀 Creating Gas Giant bands effect");const n=this.createEffectFromPythonData("gas_giant_bands",{...r,base_color:e.planet_info?.base_color||e.surface?.base_color,turbulence:e.turbulence||r.turbulence,storm_intensity:e.storm_intensity||r.storm_intensity},t,o,0);n?(c.push(n),console.log("✅ Gas Giant bands effect applied to mesh material")):console.warn("⚠️ Failed to create Gas Giant effect");break;case"metallic":case"metallic_3d":console.log("⚙️ Metallic planet detected - effects should be handled by modular effects_3d system");break;case"rocky":const l=this.createEffectFromPythonData("rocky_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,o,0);l&&(c.push(l),l.effect.apply(o));break;case"icy":const d=this.createEffectFromPythonData("icy_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,o,0);d&&(c.push(d),d.effect.apply(o));break;case"oceanic":console.log("🌊 Oceanic planet detected - using generic rendering");break;default:if(console.log("❓ Unknown surface type:",r.type,"- applying base color"),o.material instanceof ee){const u=Ge(e);o.material.color.copy(u),console.log("✅ Applied base color to planet without specific effects:",u)}break}}else if(console.log("❌ No surface_elements found in Python data - applying base color"),o.material instanceof ee){const r=Ge(e);o.material.color.copy(r),console.log("✅ Applied base color to planet without surface_elements:",r)}if(e.atmosphere){if(console.log("🌫️ Applying atmospheric effects for:",e.planet_info?.type),e.atmosphere.halo&&e.atmosphere.halo.enabled!==!1){const r=this.createEffectFromPythonData("atmospheric_halo",e,t,o,10);r&&(c.push(r),r.effect.addToScene(a,o.position),console.log("✅ Added atmospheric halo effect"))}if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const r=this.createEffectFromPythonData("cloud_gyros",e,t,o,20);r&&(c.push(r),r.effect.addToScene(a,o.position),console.log("✅ Added cloud gyros effect"))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const r=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),n={...e.atmosphere};r==="oceanic"&&(n.opacity=Math.min(n.opacity||.3,.15),n.width=Math.min(n.width||15,8));const l=this.createEffectFromPythonData("atmosphere_brights",n,t,o,5);l&&(c.push(l),l.effect.addToScene(a,o.position),console.log("✅ Added atmosphere brights effect"))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){console.log("💍 Applying ring system for:",e.planet_info?.type,"rings data:",e.rings);const r=this.createEffectFromPythonData("ring_system",e,t,o,1);r?(c.push(r),r.effect.addToScene(a,o.position),console.log("✅ Added ring system effect")):console.warn("⚠️ Failed to create ring effect")}else console.log("❌ No rings for:",e.planet_info?.type,"rings:",e.rings);if(e.surface_elements?.has_fragmentation_zones){const r=this.createEffectFromPythonData("fragmentation",e,t,o,5);r&&(c.push(r),r.effect.addToScene(a,o.position))}return console.log("📊 EffectRegistry Summary:"),console.log(`   Total effects created: ${c.length}`),c.forEach((r,n)=>{console.log(`   ${n+1}. ${r.type} (${r.enabled?"enabled":"disabled"})`)}),c.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),c}catch(r){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",r),r}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const o=this.effects.get(e);o&&(o.enabled=t!==void 0?t:!o.enabled)}updateAllEffects(e,t){for(const o of this.effects.values())if(o.enabled&&o.effect.update)try{o.effect.update(e,t)}catch(a){console.error(`Error updating effect ${o.type}:`,a)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const pe=ue.getInstance(),ge={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmospheric_halo:{intensity:1,falloff:2,scale:1.2,pulsation:!1},gas_giant_bands:{numBands:8,animationSpeed:1,turbulence:.5,stormIntensity:.7}};function ps(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...ge.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmospheric_halo",params:{...ge.atmospheric_halo,color:[.6,.1,.9],scale:1.15},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"gas_giant_bands",params:ge.gas_giant_bands,priority:0},{type:"atmospheric_halo",params:{...ge.atmospheric_halo,color:[1,.6,.2],intensity:.8},priority:10});break;case"icy":e.push({type:"atmospheric_halo",params:{...ge.atmospheric_halo,color:[.5,.8,1],intensity:.6,scale:1.1},priority:10});break;default:e.push({type:"atmospheric_halo",params:{color:[.5,.5,.8],intensity:.5},priority:10});break}return e}const X={log:(s,e)=>{},warn:(s,e)=>{console.warn(`[Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`[Effects] ${s}`,e||"")},debug:(s,e)=>{}};new Date().toISOString();const gs=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[o,a]=p.useState([]),[c,r]=p.useState({});p.useEffect(()=>{if(!s)return;const d=n(s);r(d),a(l(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=d)},[s,e]);function n(d){const u={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(d.planet_info&&d.surface_elements?u.hasValidStructure=!0:(d.planet_info||u.missingFields.push("planet_info"),d.surface_elements||u.missingFields.push("surface_elements")),d.surface_elements?.type==="oceanic"&&(u.oceanicData={hasAbstractLands:!!d.surface_elements.abstract_lands?.length,numGreenPatches:d.surface_elements.green_patches?.length||0,numClouds:d.surface_elements.clouds?.length||0,hasDepths:d.surface_elements.depths?.enabled||!1,baseColorIsBlue:d.planet_info?.base_color==="#0000FF",greenPatchColor:d.surface_elements.green_patches?.[0]?.color,issues:[]},u.oceanicData.numGreenPatches>15&&u.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),u.oceanicData.baseColorIsBlue||u.oceanicData.issues.push(`Color base no es azul puro: ${d.planet_info?.base_color}`),u.renderingIssues=u.oceanicData.issues),d.planet_info?.base_color&&d.planet_info?.type){const b={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[d.planet_info.type];b&&d.planet_info.base_color!==b?u.colorConsistency=`Inconsistente: esperado ${b}, recibido ${d.planet_info.base_color}`:u.colorConsistency="Correcto"}return u}function l(d){const u=[];if(!d.surface_elements?.type)return["No surface type defined"];const E=d.surface_elements.type.toLowerCase();switch(E){case"oceanic":u.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":u.push("RockyTerrainEffect");break;case"icy":u.push("IcyTerrainEffect");break;case"gas giant":u.push("GasGiantBandsEffect");break;default:u.push(`Generic effect for type: ${E}`)}return d.atmosphere?.density>0&&u.push("AtmosphericEffect"),d.rings&&u.push("RingSystemEffect"),u}return t?i.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[i.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),i.jsxs("div",{style:{marginBottom:"10px"},children:[i.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,i.jsx("br",{}),i.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,i.jsx("br",{}),i.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&i.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[i.jsx("strong",{children:"🌊 Oceanic Data:"}),i.jsx("br",{}),i.jsxs("span",{style:{color:c.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",c.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),i.jsx("br",{}),"Green Patches: ",c.oceanicData?.numGreenPatches,i.jsx("br",{}),"Clouds: ",c.oceanicData?.numClouds,i.jsx("br",{}),"Has Depths: ",c.oceanicData?.hasDepths?"Yes":"No",i.jsx("br",{}),c.oceanicData?.issues?.length>0&&i.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",i.jsx("br",{}),c.oceanicData.issues.map((d,u)=>i.jsxs("div",{children:["- ",d]},u))]})]}),i.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[i.jsx("strong",{children:"🎨 Effects Applied:"}),i.jsx("br",{}),o.map((d,u)=>i.jsxs("div",{style:{color:d.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",d]},u))]}),i.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function bs(s){p.useEffect(()=>{if(s&&s.surface_elements?.type==="oceanic"){s.surface_elements.green_patches?.length>0;const e=s.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[s])}const ye=2.5,rt=()=>{const s=45*Math.PI/180;return ye/(Math.tan(s/2)*.5)},ys=({planetName:s,containerClassName:e="",width:t=800,height:o=600,autoRotate:a=!0,enableControls:c=!0,showDebugInfo:r=!1,planetData:n,cosmicOriginTime:l,initialAngleRotation:d,onDataLoaded:u,onEffectsCreated:E,onError:b})=>{const C=p.useRef(null),_=p.useRef(null),v=p.useRef(null),x=p.useRef(null),y=p.useRef(null),P=p.useRef(null),F=p.useRef(new Ft),L=p.useRef(null),te=p.useRef(0),k=p.useRef(null),[se,S]=p.useState(!0),[G,O]=p.useState(null),[R,Z]=p.useState(null),[B,U]=p.useState([]),[V,Y]=p.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),H=p.useRef([]),oe=p.useRef(0),Q=p.useRef(null),de=Math.floor(Date.now()/1e3),[I,q]=p.useState(0),ie=l||R?.timing?.cosmic_origin_time||Date.now()/1e3-3600,fe=de-ie+I;te.current=fe;const ae=p.useCallback(()=>{if(!C.current||!v.current||!x.current)return;const h=C.current,g=h.clientWidth||400,m=h.clientHeight||400;v.current.setSize(g,m),x.current.aspect=g/m,x.current.updateProjectionMatrix()},[]),Me=async h=>{if(!(!y.current||!_.current)){X.log("Applying modular effects from API data",{planet:h.planet_info.name,type:h.planet_info.type});try{Fe();const g=pe.createEffectsFromPythonPlanetData(h,ye,y.current,_.current);U(g),H.current=g,E&&E(g),X.log(`Successfully applied ${g.length} modular effects`),ze()}catch(g){X.error("Error applying modular effects",g),je()}}},Ae=p.useCallback(()=>{if(!C.current)return!1;try{for(;C.current.firstChild;)C.current.removeChild(C.current.firstChild);_.current=null,x.current=null,v.current=null,y.current=null,z.current=null;const h=C.current,g=h.clientWidth||t||400,m=h.clientHeight||o||400,w=new zt;w.background=new f(1297),_.current=w;const N=new Lt(45,g/m,.1,1e4),A=rt();console.log("🎯 Camera distance for exact Pillow proportions:",A),N.position.set(0,0,A),N.lookAt(0,0,0),x.current=N;const M=new Ot({antialias:!0,alpha:!0,powerPreference:"high-performance"});return M.setSize(g,m),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.shadowMap.enabled=!0,M.shadowMap.type=Bt,M.toneMapping=Gt,M.toneMappingExposure=1.2,M.outputColorSpace=Ut,C.current.appendChild(M.domElement),v.current=M,pt(w,null),gt(w),c&&bt(N,M.domElement),!0}catch(h){return console.error("Error initializing Three.js:",h),!1}},[R,n,l]),Ie=h=>{if(!h)return 0;const g=h.sun_angle||h.lighting?.sun_angle;if(g!==void 0)return g;const m=h.timing?.current_orbital_angle||h.timing?.orbital_angle;return m??0},J=p.useRef(null),ne=p.useRef(null),re=p.useRef(null),z=p.useRef(null),De=h=>{h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=.5,h.shadow.camera.far=50,h.shadow.camera.left=-10,h.shadow.camera.right=10,h.shadow.camera.top=10,h.shadow.camera.bottom=-10},Ye=h=>{if(!J.current||!_.current)return;const g=Ie(h),m=10,w=g+Math.PI,N=Math.sin(g)*5,A=m*Math.cos(w),M=N,le=m*Math.sin(w);J.current.position.set(A,M,le),J.current.target.position.set(0,0,0),_.current.children.includes(J.current.target)||_.current.add(J.current.target),ne.current&&ne.current.position.set(-A*.5,0,-le*.5)},pt=(h,g)=>{{const m=new et(16777215,2);m.position.set(-10,5,10),m.target.position.set(0,0,0),m.castShadow=!0,De(m),h.add(m),h.add(m.target),J.current=m;const w=new et(16777215,.05);w.position.set(8,-3,-5),h.add(w),ne.current=w;const N=new Vt(2236996,.1);h.add(N);return}},gt=h=>{console.log("🪐 Creating normalized planet with fixed radius:",ye);const g=new ke(ye,128,64),m=new ee({color:8421504,metalness:.1,roughness:.8,transparent:!1,opacity:1}),w=new Ee(g,m);w.castShadow=!0,w.receiveShadow=!0,w.position.set(0,0,0),h.add(w),y.current=w,console.log("🪐 Base planet created - color will be updated when API data arrives")},bt=(h,g)=>{const m=new Ht(h,g);m.enableDamping=!0,m.dampingFactor=.05;const w=rt();m.minDistance=w*.8,m.maxDistance=w*3,m.autoRotate=a,m.autoRotateSpeed=.5,m.enablePan=!0,m.enableZoom=!0,m.target.set(0,0,0),P.current=m},yt=p.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{S(!0),O(null),X.log("Loading planet data from API",{planetName:s});const g=await fetch("/api/planet/rendering-data");if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);const m=await g.json();if(!m.success)throw new Error(m.error||"Failed to fetch planet data");const w=m.planet_data,N=m.timing,A=m.rendering_data,M={planet_info:A?.planet_info||{name:w.name,type:w.planet_type,base_color:"#808080",radius:w.diameter/15e3},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:N.cosmic_origin_time,current_time_seconds:N.current_time_seconds,elapsed_time:N.elapsed_time,initial_orbital_angle:w.initial_orbital_angle,current_orbital_angle:w.current_orbital_angle,max_orbital_radius:N.max_orbital_radius,system_max_orbital_radius:w.system_max_orbital_radius},original_planet_data:w};return Z(M),k.current=M,X.log("API data loaded successfully",{planet:M.planet_info.name,type:M.planet_info.type,hasEffects:!!M.surface_elements,fullRenderingData:A}),console.log("🌍 Planet API Response:",m),console.log("🎨 Rendering Data:",A),console.log("🔧 Processed Data:",M),u&&u(M),M}catch(h){const g=h instanceof Error?h.message:"Unknown error";return O(g),b&&b(g),null}finally{S(!1),window.isLoadingPlanetData=!1}}},[s,u,b]);p.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{S(!0),O(null),X.log("Loading planet data from API",{planetName:s});const g=await fetch("/api/planet/rendering-data");if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);const m=await g.json();if(!m.success)throw new Error(m.error||"Failed to fetch planet data");const w=m.planet_data,N=m.timing,A=m.rendering_data,M={planet_info:A?.planet_info||{name:w.name,type:w.planet_type,base_color:"#808080",radius:w.diameter/15e3},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:N.cosmic_origin_time,current_time_seconds:N.current_time_seconds,elapsed_time:N.elapsed_time,initial_orbital_angle:w.initial_orbital_angle,current_orbital_angle:w.current_orbital_angle,max_orbital_radius:N.max_orbital_radius,system_max_orbital_radius:w.system_max_orbital_radius},original_planet_data:w};Z(M),k.current=M,X.log("API data loaded successfully",{planet:M.planet_info.name,type:M.planet_info.type,hasEffects:!!M.surface_elements,fullRenderingData:A}),console.log("🌍 Full Load - API Response:",m),console.log("🎨 Full Load - Rendering Data:",A),console.log("🔧 Full Load - Processed Data:",M),Ye(M),z.current&&_.current&&(_.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Me(M),u&&u(M)}catch(h){const g=h instanceof Error?h.message:"Unknown error";O(g),b&&b(g),je()}finally{S(!1),window.isLoadingPlanetData=!1}}},[s,n,l,d]);const He=p.useCallback(()=>{if(!R||!y.current)return;const h=n?.orbital_period_seconds||365.25*24*3600,g=2*Math.PI/h,m=R.timing?.initial_orbital_angle||0,w=Date.now()/1e3,N=0,A=l||R.timing?.cosmic_origin_time||Date.now()/1e3-3600,M=w-A+N,le=(m+M*g)%(2*Math.PI),Le=R.timing?.max_orbital_radius||100,Re=20+R.planet_info?.orbital_radius/Le*80,_t=Re,vt=Re*Math.cos(le),wt=_t*Math.sin(le);y.current.position.x=vt,y.current.position.z=wt,y.current.position.y=0},[R,n,l]),xt=p.useCallback(async h=>{const g=h||R;if(g&&_.current)try{Ye(g),z.current&&_.current&&(_.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Me(g)}catch(m){X.error("Error in applyProceduralShadersFromAPI:",m),je()}},[R]),je=()=>{if(!(!_.current||!y.current)){X.warn("Applying fallback effects for planet type:",n?.planet_type);try{Fe(),y.current.material instanceof ee&&(y.current.material.color.setHex(6710886),console.log("⚠️ Applied fallback generic color - API should provide real colors"));try{const h=ps("generic"),g=pe.createEffectsFromList(h,ye,y.current);g.forEach(m=>{m.effect.addToScene&&_.current&&y.current&&m.effect.addToScene(_.current,y.current.position)}),H.current=g,U(g)}catch(h){console.warn("Could not create fallback effects, using basic material only:",h)}ze()}catch(h){X.error("Error applying fallback effects",h)}}},Fe=()=>{H.current.forEach(h=>{try{h.effect.dispose&&h.effect.dispose()}catch{}}),H.current=[],U([])},$e=p.useCallback(()=>{L.current=requestAnimationFrame($e);const h=performance.now(),g=F.current.getDelta();P.current&&P.current.update();try{pe.updateAllEffects(g,y.current?.rotation.y)}catch{}if(y.current&&k.current){k.current.planet_info?.name;const m=k.current.original_planet_data,w=m?.orbital_period_seconds||365.25*24*3600,N=k.current.timing?.initial_orbital_angle||0;l||k.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const A=m?.axial_tilt||0,M=2*Math.PI/w;(N+te.current*M)%(2*Math.PI);const le=k.current.timing?.max_orbital_radius||k.current.timing?.system_max_orbital_radius,Le=m?.orbital_radius;if(!le||!Le)return;m?.eccentricity_factor,y.current.position.set(0,0,0);const Ze=m?.rotation_period_seconds||86400,Re=2*Math.PI/Ze;y.current.rotation.y=te.current*Re%(2*Math.PI),y.current.rotation.z=A*(Math.PI/180)}if(H.current.forEach(m=>{m.effect.updateUniforms&&m.effect.updateUniforms(g)}),v.current&&_.current&&x.current){const m=performance.now();v.current.render(_.current,x.current);const w=performance.now()-m;if(h-oe.current>5e3){const N=1e3/(h-oe.current);ze(),Y(A=>({...A,frameRate:Math.round(N),renderTime:Math.round(w*100)/100})),oe.current=h}}},[]),ze=p.useCallback(()=>{const h=pe.getStats();Y(g=>({...g,activeEffects:h.activeEffects,enabledEffects:h.enabledEffects}))},[]);return p.useEffect(()=>{let h=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!h)return;const m=await yt();if(!h)return;if(!Ae()){h&&O("Failed to initialize 3D renderer");return}if(!h||($e(),C.current&&"ResizeObserver"in window&&(Q.current=new ResizeObserver(ae),Q.current.observe(C.current)),window.addEventListener("resize",ae),!h))return;m?await xt(m):je()}catch(m){h&&O(m instanceof Error?m.message:"Unknown initialization error")}})(),()=>{if(h=!1,k.current=null,L.current&&cancelAnimationFrame(L.current),Q.current&&Q.current.disconnect(),window.removeEventListener("resize",ae),Fe(),P.current&&P.current.dispose(),re.current&&_.current&&(_.current.remove(re.current),re.current.geometry.dispose(),re.current.material.dispose(),re.current=null),z.current&&_.current&&(_.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),v.current&&C.current)try{C.current.contains(v.current.domElement)&&C.current.removeChild(v.current.domElement),v.current.dispose()}catch{}}},[]),p.useEffect(()=>{const h=setInterval(()=>{const g=pe.getStats();Y(m=>({...m,activeEffects:g.activeEffects,enabledEffects:g.enabledEffects}))},1e4);return()=>clearInterval(h)},[]),p.useEffect(()=>{R&&_.current&&y.current&&He()},[R,He]),bs(R),i.jsxs("div",{className:`relative ${e}`,children:[r&&R&&i.jsx(gs,{planetData:R,showInPage:!0,showInConsole:!0}),i.jsx("div",{ref:C,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),se&&i.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:i.jsxs("div",{className:"text-white text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),i.jsx("div",{children:"Loading planet..."})]})}),G&&i.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[i.jsx("strong",{children:"Error:"})," ",G]}),R&&!se&&i.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[i.jsx("h3",{className:"text-lg font-bold",children:R.planet_info.name}),i.jsx("p",{className:"text-sm opacity-80",children:R.planet_info.type}),i.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[B.length," effects active"]}),R.surface_elements?.description&&i.jsx("p",{className:"text-xs mt-2 opacity-60",children:R.surface_elements.description.appearance})]}),r&&i.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[i.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),i.jsxs("div",{children:["Frame Rate: ",V.frameRate," FPS"]}),i.jsxs("div",{children:["Render Time: ",V.renderTime,"ms"]}),i.jsxs("div",{children:["Active Effects: ",V.activeEffects]}),i.jsxs("div",{children:["Enabled Effects: ",V.enabledEffects]}),i.jsxs("div",{className:"mt-2",children:[i.jsx("div",{className:"font-semibold",children:"Effects:"}),B.map(h=>i.jsxs("div",{className:"ml-2",children:[h.type," (",h.enabled?"ON":"OFF",")"]},h.id))]})]})]})};class xs extends lt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?i.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:i.jsxs("div",{className:"text-center p-4",children:[i.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),i.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const _s=s=>i.jsx(xs,{children:i.jsx(ys,{...s})}),vs=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:o,initialAngleRotation:a})=>{const c=p.useRef(null),r=p.useRef(null),[n,l]=p.useState("Aligning Stargate..."),[d,u]=p.useState(!1),[E,b]=p.useState(!1),[C,_]=p.useState(!1),[v,x]=p.useState(!0),[y,P]=p.useState(!0),[F,L]=p.useState(null),[te,k]=p.useState(null);p.useEffect(()=>{const S=document.createElement("style");return S.textContent=`
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
    `,document.head.appendChild(S),()=>{document.head.removeChild(S)}},[]),p.useEffect(()=>{const S=c.current;if(!S)return;const G=S.getContext("2d");if(!G)return;let O=[];const R=800;let Z,B;const U=800;let V,Y=.5;function H(){const I=S?.parentElement;if(!I||!S)return;const q=I.clientWidth,ie=I.clientHeight;S.width=Math.min(q,U),S.height=Math.min(ie,U),Z=S.width/2,B=S.height/2}function oe(){H(),O=[];for(let I=0;I<R;I++)O.push({x:Math.random()*(S?.width||800),y:Math.random()*(S?.height||800),z:Math.random()*(S?.width||800),o:Math.random()});Q()}function Q(){!S||!G||(G.clearRect(0,0,S.width,S.height),O.forEach(I=>{I.z-=Y,I.z<=0&&(I.z=S.width,I.x=Math.random()*S.width,I.y=Math.random()*S.height,I.o=Math.random());const q=S.width/I.z,ie=(I.x-Z)*q+Z,fe=(I.y-B)*q+B,ae=2*q;G.beginPath(),G.fillStyle=`rgba(255, 255, 255, ${I.o})`,G.arc(ie,fe,ae,0,2*Math.PI),G.fill()}),Y<60&&(Y+=1),V=requestAnimationFrame(Q))}oe();const de=()=>H();return window.addEventListener("resize",de),()=>{window.removeEventListener("resize",de),V&&cancelAnimationFrame(V)}},[]),p.useEffect(()=>{if(e&&!v){const S=new Image;S.onload=()=>{r.current&&(r.current.src=e,b(!0),_(!0))},S.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{b(!0),_(!0)},1500)},S.src=e}else(v||!e)&&setTimeout(()=>{b(!0),_(!0)},1500)},[e,v]),p.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){l("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),u(!0);const G=(U,V)=>Array.from({length:V},()=>U[Math.floor(Math.random()*U.length)]).join(""),O=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let R=0,Z=0;const B=()=>{if(R>=O.length){const V="Stargate system aligned";let Y=0;l("");const H=()=>{Y<V.length?(l(V.substring(0,Y+1)),Y++,setTimeout(H,30)):u(!1)};H();return}const U=O[R];l(G(U.chars,32)),Z++,Z>=U.iterations&&(R++,Z=0),setTimeout(B,U.duration)};B()},[]);const se=()=>{x(!v),v||(b(!0),_(!0))};return i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-3",children:[i.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),y&&i.jsx("div",{className:"flex items-center gap-2",children:i.jsx("button",{onClick:se,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${v?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:v?"2D View":"3D View"})})]}),i.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[i.jsx("canvas",{ref:c,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${C?"opacity-0":"opacity-100"}`,style:{filter:C?"blur(50px)":"none"}}),v&&E&&t&&i.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${E?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:i.jsx(_s,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:o,initialAngleRotation:a,onDataLoaded:S=>{L(S)},onError:S=>{k(S),console.error("❌ Planet rendering error:",S)}})}),!v&&i.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${E?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:E&&e?i.jsx("div",{className:"w-full h-full flex items-center justify-center",children:i.jsx(Mt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:i.jsx("img",{ref:r,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):i.jsx("img",{ref:r,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),y&&i.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:v?"🌍 3D":"🖼️ 2D"})]}),i.jsxs("div",{className:"text-center mt-auto",children:[i.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${d?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[i.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[i.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),n]}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),i.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",v&&F&&i.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",F.planet_info?.type," Planet",F.atmosphere&&i.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),F.rings?.has_rings&&i.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),v&&te&&i.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},ws=({currentPlanet:s,system:e,galaxy:t,systemPlanets:o})=>{const[a,c]=p.useState(null),[r,n]=p.useState(null),[l,d]=p.useState(!1),[u,E]=p.useState(!1),[b,C]=p.useState(!0);p.useEffect(()=>{if(o&&o.length>0){const x=o.findIndex(y=>y.name.toLowerCase()===s.toLowerCase());x!==-1?(x>0?(c(o[x-1].name.toLowerCase()),d(!0)):e.index>0?(c("__prev_system__"),d(!0)):d(!1),x<o.length-1?(n(o[x+1].name.toLowerCase()),E(!0)):(n("__next_system__"),E(!0))):(d(!1),E(!1))}else d(!1),E(!1);C(!1)},[s,e.index,o]);const _=async()=>{const x=t.coordinates.join(",");if(a==="__prev_system__")try{const y=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(y.ok){const P=await y.json();if(P.system&&P.system.planets&&P.system.planets.length>0){const L=P.system.planets[P.system.planets.length-1].name.toLowerCase();be(x,e.index-1,L,P.system.planets),Ue(x,e.index-1),window.location.href=`/planet/${L}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else a&&(be(x,e.index,a,o),window.location.href=`/planet/${a}`)},v=async()=>{const x=t.coordinates.join(",");if(r==="__next_system__")try{const y=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(y.ok){const P=await y.json();if(P.system&&P.system.planets&&P.system.planets.length>0){const L=P.system.planets[0].name.toLowerCase();be(x,e.index+1,L,P.system.planets),Ue(x,e.index+1),window.location.href=`/planet/${L}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else r&&(be(x,e.index,r,o),window.location.href=`/planet/${r}`)};return b?null:i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("button",{onClick:_,disabled:!l,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${l?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:i.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),i.jsx("button",{onClick:v,disabled:!u,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${u?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:i.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Cs=({planet:s,system:e,galaxy:t,planet_url:o,version:a,image_url:c,cosmic_origin_time:r,initial_angle_rotation:n})=>{const[l]=p.useState(t.coordinates.join(","));p.useEffect(()=>{document.body.setAttribute("data-coordinates",l),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),be(l,e.index,s.name,e.planets||[]),Ue(l,e.index)},[l,e.index,s.name]);const d=b=>b.replace(/_/g," "),u=b=>b.replace(/_/g," "),E=b=>b.replace(/_/g," ");return i.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[i.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),i.jsxs("div",{className:"relative z-10",children:[i.jsx(Pt,{}),i.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:i.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",d(s.name),"'"]})}),i.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",u(e.name),"' - Galaxy '",E(t.name),"'"]}),i.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),i.jsx(ws,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),i.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:i.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[i.jsx("div",{className:"order-1 lg:order-1",children:i.jsx(vs,{planetUrl:o,imageUrl:c,planet:s,cosmicOriginTime:r,initialAngleRotation:n})}),i.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),i.jsx("div",{className:"order-2 lg:order-2",children:i.jsx(Wt,{planet:s,system:e,galaxy:t,cosmicOriginTime:r,initialAngleRotation:n})})]})}),i.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:i.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:i.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",u(e.name),"'"]})})})]}),i.jsx(Ct,{version:a})]}),i.jsx(At,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),o=document.getElementById("meta-data");if(!s||!e||!t||!o){console.error("Missing required data elements");return}const a=JSON.parse(s.textContent||"{}"),c=JSON.parse(e.textContent||"{}"),r=JSON.parse(t.textContent||"{}"),n=JSON.parse(o.textContent||"{}"),l={planet:a,system:c,galaxy:r,planet_url:n.planet_url,version:n.version,image_url:n.image_url,cosmic_origin_time:n.cosmic_origin_time,initial_angle_rotation:n.initial_angle_rotation},d=document.getElementById("atlas-react-root");d&&St.createRoot(d).render(lt.createElement(Cs,l))}catch(s){console.error("Error initializing Planet React app:",s)}});
