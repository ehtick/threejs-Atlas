import{r as p,j as o,R as ct,V as Pt,c as Et}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Mt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as At,U as jt,m as be,c as Be,a as Rt}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as Nt,V as j,n as fe,T as ue,Q as Xe,l as qe,o as Z,R as Tt,p as It,q as kt,e as pe,r as Y,s as de,N as Dt,t as Ue,c as Ve,C as f,u as Ft,v as He,d as Te,F as dt,w as Lt,x as ee,G as ht,y as zt,z as Je,L as Qe,g as et,M as Ot,H as Gt,S as Bt,P as Ut,W as Vt,I as Ht,J as Yt,K as Wt,D as tt,A as $t}from"./atlas_C9iv-Mftr0ljdPynyVWic.js";const Zt=({planet:s,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:a})=>{const[l,n]=p.useState(!1),r=y=>y.replace(/_/g," "),c=y=>{const S=y/86400;return S<30?`${S.toFixed(2)} days`:S<365?`${(S/30).toFixed(2)} months`:`${(S/365).toFixed(2)} years`},d=y=>{const S=y*9/5+32;return`${y.toFixed(1)}°C (${S.toFixed(1)}°F)`},u=y=>`${y.toExponential(2)} kg`,w=y=>y>=1e3?`${(y/1e3).toFixed(2)} km`:`${y.toFixed(2)} m`;return o.jsxs("div",{className:"h-full flex flex-col relative",children:[o.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),o.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),o.jsx(At,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),o.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),o.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),o.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:u(s.mass)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:w(s.diameter)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),o.jsx("div",{className:"text-xs font-bold text-cyan-300",children:c(s.orbital_period_seconds)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),o.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:d(s.surface_temperature)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:c(s.rotation_period_seconds)})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&o.jsx("button",{onClick:()=>n(!l),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:l?"▲ Less":"▼ All"})]}),o.jsx("div",{className:"flex flex-wrap gap-1",children:(l?s.elements:s.elements.slice(0,4)).map((y,S)=>o.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:y},S))})]})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[o.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Status:"}),o.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Planet:"}),o.jsx("div",{className:"text-white truncate font-medium",children:r(s.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System:"}),o.jsx("div",{className:"text-white truncate font-medium",children:r(e.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System ID:"}),o.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),o.jsx("div",{className:"text-white truncate font-medium",children:r(t.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),o.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},st={type:"change"},Ye={type:"start"},ut={type:"end"},Re=new Tt,it=new It,Kt=Math.cos(70*kt.DEG2RAD),D=new j,H=2*Math.PI,N={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ze=1e-6;class Xt extends Nt{constructor(e,t=null){super(e,t),this.state=N.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fe.ROTATE,MIDDLE:fe.DOLLY,RIGHT:fe.PAN},this.touches={ONE:ue.ROTATE,TWO:ue.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Xe,this._lastTargetPosition=new j,this._quat=new Xe().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qe,this._sphericalDelta=new qe,this._scale=1,this._panOffset=new j,this._rotateStart=new Z,this._rotateEnd=new Z,this._rotateDelta=new Z,this._panStart=new Z,this._panEnd=new Z,this._panDelta=new Z,this._dollyStart=new Z,this._dollyEnd=new Z,this._dollyDelta=new Z,this._dollyDirection=new j,this._mouse=new Z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jt.bind(this),this._onPointerDown=qt.bind(this),this._onPointerUp=Qt.bind(this),this._onContextMenu=rs.bind(this),this._onMouseWheel=ss.bind(this),this._onKeyDown=is.bind(this),this._onTouchStart=os.bind(this),this._onTouchMove=as.bind(this),this._onMouseDown=es.bind(this),this._onMouseMove=ts.bind(this),this._interceptControlDown=ns.bind(this),this._interceptControlUp=ls.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(st),this.update(),this.state=N.NONE}update(e=null){const t=this.object.position;D.copy(t).sub(this.target),D.applyQuaternion(this._quat),this._spherical.setFromVector3(D),this.autoRotate&&this.state===N.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=H:i>Math.PI&&(i-=H),a<-Math.PI?a+=H:a>Math.PI&&(a-=H),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=n!=this._spherical.radius}if(D.setFromSpherical(this._spherical),D.applyQuaternion(this._quatInverse),t.copy(this.target).add(D),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){const r=D.length();n=this._clampDistance(r*this._scale);const c=r-n;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),l=!!c}else if(this.object.isOrthographicCamera){const r=new j(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=c!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(r),this.object.updateMatrixWorld(),n=D.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(Re.origin.copy(this.object.position),Re.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Re.direction))<Kt?this.object.lookAt(this.target):(it.setFromNormalAndCoplanarPoint(this.object.up,this.target),Re.intersectPlane(it,this.target))))}else if(this.object.isOrthographicCamera){const n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>ze||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ze||this._lastTargetPosition.distanceToSquared(this.target)>ze?(this.dispatchEvent(st),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?H/60*this.autoRotateSpeed*e:H/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){D.setFromMatrixColumn(t,0),D.multiplyScalar(-e),this._panOffset.add(D)}_panUp(e,t){this.screenSpacePanning===!0?D.setFromMatrixColumn(t,1):(D.setFromMatrixColumn(t,0),D.crossVectors(this.object.up,D)),D.multiplyScalar(e),this._panOffset.add(D)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;D.copy(a).sub(this.target);let l=D.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/i.clientHeight,this.object.matrix),this._panUp(2*t*l/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,l=t-i.top,n=i.width,r=i.height;this._mouse.x=a/n*2-1,this._mouse.y=-(l/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(H*this._rotateDelta.x/t.clientHeight),this._rotateUp(H*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(H*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-H*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(H*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-H*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(i*i+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(H*this._rotateDelta.x/t.clientHeight),this._rotateUp(H*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const n=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(n,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Z,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function qt(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Jt(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Qt(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ut),this.state=N.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function es(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=N.DOLLY;break;case fe.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=N.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=N.ROTATE}break;case fe.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=N.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=N.PAN}break;default:this.state=N.NONE}this.state!==N.NONE&&this.dispatchEvent(Ye)}function ts(s){switch(this.state){case N.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case N.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case N.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ss(s){this.enabled===!1||this.enableZoom===!1||this.state!==N.NONE||(s.preventDefault(),this.dispatchEvent(Ye),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ut))}function is(s){this.enabled!==!1&&this._handleKeyDown(s)}function os(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=N.TOUCH_ROTATE;break;case ue.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=N.TOUCH_PAN;break;default:this.state=N.NONE}break;case 2:switch(this.touches.TWO){case ue.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=N.TOUCH_DOLLY_PAN;break;case ue.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=N.TOUCH_DOLLY_ROTATE;break;default:this.state=N.NONE}break;default:this.state=N.NONE}this.state!==N.NONE&&this.dispatchEvent(Ye)}function as(s){switch(this._trackPointer(s),this.state){case N.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case N.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case N.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case N.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=N.NONE}}function rs(s){this.enabled!==!1&&s.preventDefault()}function ns(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ls(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ot{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class mt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:a,ring_outer_radius:l,tilt_factor:n,planet_radius:r,shape_seed:c}=e;if(!t||!i){console.warn("No ring data provided");return}const d=[...t.particles,...i.particles],u=d.length,w=new ot(c||12345),y=new pe,S=new Float32Array(u*3),_=new Float32Array(u*3),v=new Float32Array(u),x=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],b=w.choice(x);for(let E=0;E<u;E++){const F=d[E],z=this.planetRadius/(r||200),te=(c||12345)+E,I=new ot(te),se=F.distance*z,P=F.angle,B=se*Math.sin(P),O=Math.asin((n||.2)*.5),R=B*Math.sin(O),K=B*Math.cos(O),G=((l||400)-(a||200))*z*.4,U=I.uniform(-G*.8,G*.8),V=I.uniform(-G*.3,G*.3),W=I.uniform(-.08,.08),$=se+V,ie=P+W;S[E*3]=$*Math.cos(ie),S[E*3+1]=R+U+this.planetRadius*.15,S[E*3+2]=K+I.uniform(-G*.4,G*.4),F.color[0]/255;const he=(F.distance-(a||200))/((l||400)-(a||200)),k=b.baseGray,q=b.variation,oe=I.uniform(-q,q),ge=Math.max(.12,Math.min(.45,k+oe)),ae=.8+he*.4,Ee=I.uniform(.85,1.15),Me=I.uniform(0,1),Ie=Me<.03?I.uniform(1.1,1.3):1,Q=ge*ae*Ee*Ie,re=Math.max(.1,Math.min(.55,Q));_[E*3]=re,_[E*3+1]=re,_[E*3+2]=re;const ne=.15,L=I.uniform(.3,.7),ke=Me<.1?I.uniform(1.05,1.2):1;v[E]=F.size*ne*L*ke}y.setAttribute("position",new Y(S,3)),y.setAttribute("color",new Y(_,3)),y.setAttribute("size",new Y(v,1)),this.material=new de({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Dt}),this.ringSystem=new Ue(y,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,a=t.cosmicOriginTime||Date.now()/1e3,l=t.initialAngleRotation||0,r=Date.now()/1e3-a,c=2*Math.PI/i,d=(l+r*c)%(2*Math.PI);this.ringSystem.rotation.y=d}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function cs(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new mt(e,t)}class _e{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new Ve(i,32,32);const a=new f(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new de({vertexShader:_e.vertexShader,fragmentShader:_e.fragmentShader,uniforms:{atmosphereColor:{value:a},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:He,side:Ft,depthWrite:!1}),this.mesh=new Te(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new f(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function ds(s,e){console.log("🌫️ ATMOSPHERE CREATING - THIS SHOULD BE THE GLOW!",{type:"Fresnel",width:12});let t=[.7,.7,.7,.15],i=12;if(e){if(console.log("🌫️ Atmosphere received data:",e),e.color&&Array.isArray(e.color)){const l=e.color;t=[l[0],l[1],l[2],(l[3]||.15)*.7],console.log("🎨 Using API atmosphere color (Python normalized):",t)}else console.log("🎨 Using default atmosphere color (no API color found):",t);e.width&&(i=e.width)}else console.log("🎨 No atmosphere data found, using defaults:",{color:t,width:i});console.log("🌫️ Final Atmosphere params:",{color:t,width:i,planetRadius:s,opacity:t[3]});const a={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new _e(s,a)}class ve{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new f(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new pe,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new Ue(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),r=this.params.color instanceof f?this.params.color:new f(this.params.color);for(let c=0;c<this.particleCount;c++){const d=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1),w=e*(1+Math.random()*.1);t[c*3]=w*Math.sin(u)*Math.cos(d),t[c*3+1]=w*Math.sin(u)*Math.sin(d),t[c*3+2]=w*Math.cos(u),i[c*3]=r.r*(.8+Math.random()*.4),i[c*3+1]=r.g*(.8+Math.random()*.4),i[c*3+2]=r.b*(.8+Math.random()*.4),a[c]=this.params.size*(Math.random()*.5+.75),l[c]=this.params.speed*(Math.random()*.8+.6),n[c]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new Y(t,3)),this.geometry.setAttribute("customColor",new Y(i,3)),this.geometry.setAttribute("size",new Y(a,1)),this.geometry.setAttribute("speed",new Y(l,1)),this.geometry.setAttribute("phase",new Y(n,1))}createMaterial(){return new de({vertexShader:ve.vertexShader,fragmentShader:ve.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:He,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function hs(s,e){console.log("✨ ATMOSPHERE GLOW CREATING - PARTICLE GLOW EFFECT!",{speed:.4,count:500});const t=e.streaks||{},i={color:t.color?new f().setRGB(t.color[0],t.color[1],t.color[2]):new f(16777215),particleCount:t.count||500,speed:t.speed||.4,size:1,opacity:1,turbulence:1};return new ve(s,i)}class at{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class we{material;params;mesh;static vertexShader=`
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
    uniform float numBands;
    uniform float rotationAngle;
    uniform float bandPositions[20];
    uniform float bandWidths[20];
    uniform float animationSpeed;
    uniform float turbulence;
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
    
    // Crear bandas de nubes horizontales
    float createCloudBands(vec3 pos) {
      float bands = 0.0;
      
      // Las bandas son HORIZONTALES (latitud constante)
      float currentY = pos.y;
      float currentX = pos.x;
      
      // Aplicar rotación
      float cosAngle = cos(rotationAngle);
      float sinAngle = sin(rotationAngle);
      float rotatedY = sinAngle * currentX + cosAngle * currentY;
      
      // Verificar si estamos dentro de alguna banda horizontal
      for(int i = 0; i < 20; i++) {
        if(float(i) >= numBands) break;
        
        float bandPosY = bandPositions[i];
        float bandWidth = bandWidths[i];
        
        float distToBand = abs(rotatedY - bandPosY);
        if(distToBand < bandWidth / 2.0) {
          // Suavizar bordes de las bandas
          float bandIntensity = 1.0 - (distToBand / (bandWidth / 2.0));
          
          // Añadir turbulencia a las bandas
          float turbulenceNoise = fbm(pos * noiseScale + vec3(time * animationSpeed * 0.1));
          bandIntensity *= (0.8 + 0.4 * turbulenceNoise * turbulence);
          
          bands += bandIntensity * 0.8; // Más intensidad para que se vean mejor
        }
      }
      
      return clamp(bands, 0.0, 1.0);
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = planetColor;
      
      // Aplicar bandas horizontales
      float bands = createCloudBands(pos);
      color = mix(color, bandColor, bands);
      
      // Iluminación básica
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lightIntensity = max(dot(normalize(vNormal), lightDirection), 0.3);
      color *= lightIntensity;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new f(16753920),bandColor:t.bandColor||new f(16747520),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,noiseScale:t.noiseScale||3},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),i=new at(12345);for(let a=0;a<e&&a<20;a++)t[a]=i.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),i=new at(67890);for(let a=0;a<e&&a<20;a++)t[a]=i.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof f?this.params.baseColor:new f(this.params.baseColor),t=this.params.bandColor instanceof f?this.params.bandColor:new f(this.params.bandColor);return new de({vertexShader:we.vertexShader,fragmentShader:we.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},noiseScale:{value:this.params.noiseScale}},transparent:!1,side:dt})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){this.material.dispose()}}function us(s,e){const t=e.cloud_bands||{},i={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new f(e.base_color):new f(16753920),bandColor:new f(16747520),animationSpeed:1,turbulence:e.turbulence||.5,noiseScale:3};return new we(s,i)}class Ce{material;params;mesh;static vertexShader=`
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
    uniform vec3 baseColor;
    uniform vec3 stormColor;
    uniform float stormIntensity;
    uniform float spiralSpeed;
    uniform float animationSpeed;
    uniform vec2 stormCenters[5];
    uniform int numStorms;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    
    // Crear sistemas de tormentas espirales
    float createGyroSpirals(vec3 pos) {
      float storms = 0.0;
      
      for(int i = 0; i < 5; i++) {
        if(i >= numStorms) break;
        
        vec2 stormCenter = stormCenters[i];
        float distToStorm = distance(pos.xy, stormCenter);
        
        if(distToStorm < 0.4) { // Radio más grande para espirales más visibles
          // Crear vórtice rotatorio
          float angle = atan(pos.y - stormCenter.y, pos.x - stormCenter.x);
          float spiral = sin(angle * 8.0 + distToStorm * 20.0 - time * animationSpeed * spiralSpeed);
          
          float stormIntensityValue = (1.0 - distToStorm / 0.4) * 0.9;
          stormIntensityValue *= (0.3 + 0.7 * spiral); // Más contraste en espirales
          stormIntensityValue *= stormIntensity;
          
          storms += stormIntensityValue;
        }
      }
      
      return clamp(storms, 0.0, 1.0);
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = baseColor;
      
      // Aplicar espirales giratorias
      float storms = createGyroSpirals(pos);
      color = mix(color, stormColor, storms);
      
      // Iluminación básica
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lightIntensity = max(dot(normalize(vNormal), lightDirection), 0.3);
      color *= lightIntensity;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;constructor(e,t={}){this.params={stormCenters:t.stormCenters||[{x:.3,y:-.2},{x:-.4,y:.6},{x:.1,y:.8}],stormColor:t.stormColor||new f(9109504),stormIntensity:t.stormIntensity||.8,spiralSpeed:t.spiralSpeed||2,animationSpeed:t.animationSpeed||1,baseColor:t.baseColor||new f(16753920)},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}createMaterial(){const e=this.params.baseColor instanceof f?this.params.baseColor:new f(this.params.baseColor),t=this.params.stormColor instanceof f?this.params.stormColor:new f(this.params.stormColor),i=new Array(10).fill(0);return this.params.stormCenters.forEach((a,l)=>{l<5&&(i[l*2]=a.x,i[l*2+1]=a.y)}),new de({vertexShader:Ce.vertexShader,fragmentShader:Ce.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},stormColor:{value:t},stormIntensity:{value:this.params.stormIntensity},spiralSpeed:{value:this.params.spiralSpeed},animationSpeed:{value:this.params.animationSpeed},stormCenters:{value:i},numStorms:{value:Math.min(this.params.stormCenters.length,5)}},transparent:!1,side:dt})}addToScene(e,t){}update(e){this.material.uniforms.time.value+=e}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){this.material.dispose()}}function ms(s,e){const t=e.storms||{},i={stormCenters:t.centers||[{x:.3,y:-.2},{x:-.4,y:.6},{x:.1,y:.8}],stormColor:new f(9109504),stormIntensity:t.intensity||.8,spiralSpeed:t.spiral_speed||2,animationSpeed:1,baseColor:e.base_color?new f(e.base_color):new f(16753920)};return new Ce(s,i)}class ft{particleSystem;material;geometry;params;particleCount;constructor(e,t={}){this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.8,brightness:t.brightness||1.5},this.particleCount=this.params.particleCount,this.geometry=new pe,this.createParticles(e),this.createMaterial(),this.particleSystem=new Ue(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),n=e*1.3;for(let r=0;r<this.particleCount;r++){const c=Math.random()*Math.PI*2,d=Math.random()*2-1,u=Math.random(),w=Math.acos(d),y=n*Math.cbrt(u);t[r*3]=y*Math.sin(w)*Math.cos(c),t[r*3+1]=y*Math.sin(w)*Math.sin(c),t[r*3+2]=y*Math.cos(w),i[r]=this.params.size*(.5+Math.random()*.5),a[r]=this.params.speed*(.8+Math.random()*.4),l[r]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new Y(t,3)),this.geometry.setAttribute("size",new Y(i,1)),this.geometry.setAttribute("speed",new Y(a,1)),this.geometry.setAttribute("phase",new Y(l,1))}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new Lt({color:e,size:this.params.size,opacity:this.params.opacity,transparent:!0,blending:He,sizeAttenuation:!0,vertexColors:!1}),this.material.color.multiplyScalar(this.params.brightness)}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){const t=Date.now()*.001,i=.9+.1*Math.sin(t*2);this.material.opacity=this.params.opacity*i}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f().setRGB(e.color[0],e.color[1],e.color[2]);this.material.color=t,this.material.color.multiplyScalar(this.params.brightness)}e.opacity!==void 0&&(this.material.opacity=e.opacity),e.size!==void 0&&(this.material.size=e.size)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function fs(s,e){console.log("✨ AtmosphericStreaks received data:",e);const t=e.streaks||{},i={color:t.color||[.95,.95,1],particleCount:t.particleCount||100,speed:t.speed||1,size:2,opacity:.8,brightness:1.5};return console.log("✨ Final AtmosphericStreaks params:",i),new ft(s,i)}class rt{params;constructor(e={}){this.params=e,console.log("🔥 MetallicSurface: CONSTRUCTOR LLAMADO - pero NO hace nada")}apply(e){if(console.log("🔥 MetallicSurface.apply() LLAMADO - APLICANDO SUPERFICIE METÁLICA"),e.material instanceof ee){const t=this.params.color instanceof f?this.params.color:new f(this.params.color);e.material.color.copy(t),e.material.metalness=this.params.metalness||.95,e.material.roughness=this.params.roughness||.1,e.material.emissive.setHex(1710638),e.material.emissiveIntensity=.05,e.material.clearcoat!==void 0&&(e.material.clearcoat=this.params.clearcoat||.3,e.material.clearcoatRoughness=this.params.clearcoatRoughness||.1),e.material.reflectivity!==void 0&&(e.material.reflectivity=this.params.reflectivity||.9),e.material.needsUpdate=!0,console.log("✅ SUPERFICIE METÁLICA APLICADA:",{color:e.material.color.getHexString(),metalness:e.material.metalness,roughness:e.material.roughness,emissive:e.material.emissive.getHexString()})}else console.warn("⚠️ Material no es MeshStandardMaterial:",e.material.type)}update(e){}updateParams(e){}getMaterial(){return null}dispose(){}}class nt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new f(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new ht,this.generateFragments()}generateFragments(){const e=new ee({color:this.params.color instanceof f?this.params.color:new f(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),a=new Te(i,e);this.positionFragment(a,t),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const l=this.params.size*(Math.random()*.5+.75);a.scale.set(l,l,l),a.userData={rotationAxis:new j(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(a),this.fragments.add(a)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],a=[];a.push(new j(0,0,0));for(let r=0;r<e;r++){const c=r/e*Math.PI*2,d=Math.random()*.5+.5,u=(Math.random()-.5)*.3;a.push(new j(Math.cos(c)*d,Math.sin(c)*d,u))}for(let r=1;r<=e;r++){const d=a[r].clone();d.z+=Math.random()*.4+.2,a.push(d)}for(const r of a)t.push(r.x,r.y,r.z);for(let r=1;r<e;r++)i.push(0,r,r+1);i.push(0,e,1);const l=a.length-e-1;for(let r=0;r<e-1;r++)i.push(l,l+r+2,l+r+1);i.push(l,l+1,l+e);for(let r=0;r<e;r++){const c=r+1,d=(r+1)%e+1,u=c+e,w=d+e;i.push(c,u,d),i.push(d,u,w)}const n=new pe;return n.setAttribute("position",new zt(t,3)),n.setIndex(i),n.computeVertexNormals(),n}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),a=(Math.random()-.5)*this.planetRadius*.5;return new j(Math.cos(t)*i,a,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new j(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new j(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const a=t.userData;t.rotateOnAxis(a.rotationAxis,a.rotationSpeed*e*this.params.animationSpeed);const l=Math.sin(Date.now()*.001+i)*.001;t.position.y+=l*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof ee&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof ee&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Je&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Je&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class Se{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new f(.8,.8,.8),cloudColor:e.cloudColor||new f(.7,.7,.7),craterColor:e.craterColor||new f(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof f?this.params.mountainColor:new f(this.params.mountainColor),t=this.params.cloudColor instanceof f?this.params.cloudColor:new f(this.params.cloudColor),i=this.params.craterColor instanceof f?this.params.craterColor:new f(this.params.craterColor),a=new Array(30).fill(new j),l=new Array(30).fill(new j),n=new Array(10).fill(new j);return this.params.mountains&&this.params.mountains.forEach((r,c)=>{c<30&&(a[c]=new j(r.position[0],r.position[1],r.angle),l[c]=new j(r.width,r.height,0))}),this.params.clouds&&this.params.clouds.forEach((r,c)=>{c<10&&(n[c]=new j(r.position[0],r.position[1],r.radius))}),new de({vertexShader:Se.vertexShader,fragmentShader:Se.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:a},mountainSizes:{value:l},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:n},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new j(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new j},craterColor:{value:i},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function ps(s){const e=s.surface_elements||s.surface||s;let t=[.8,.8,.8];const i=s.planet_info?.base_color||s.base_color;if(i&&typeof i=="string"){const c=i.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255]}else Array.isArray(i)&&(t=i);let a=[],l=[],n;if(s.seeds){const c=v=>{let x=v;return()=>(x=(x*1664525+1013904223)%4294967296,x/4294967296)},d=v=>{const x=v()*Math.PI*2,b=Math.acos(v()*2-1),E=Math.sin(b)*Math.cos(x),F=Math.sin(b)*Math.sin(x);return[E,F]},u=c(s.seeds.planet_seed),w=6+Math.floor(u()*4);for(let v=0;v<w;v++)a.push({position:d(u),width:.1+u()*.3,height:.2+u()*.6,angle:u()*Math.PI*2});const y=c(s.seeds.shape_seed+1e3),S=3+Math.floor(y()*4);for(let v=0;v<S;v++)l.push({position:d(y),radius:.08+y()*.17});const _=c(s.seeds.shape_seed+2e3);_()<.7&&(n={position:d(_),radius:.1+_()*.2})}const r={mountains:e.mountains?.length>0?e.mountains:a,clouds:e.clouds?.length>0?e.clouds:l,crater:e.crater||n,baseTextureIntensity:.4,mountainColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1.1),cloudColor:new f(t[0]*.9,t[1]*.9,t[2]*.9),craterColor:new f(t[0]*.3,t[1]*.3,t[2]*.3)};return new Se(r)}class Pe{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new f(.675,.843,.902),crackColor:e.crackColor||new f(.2,.2,.2),iceCapColor:e.iceCapColor||new f(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof f?this.params.crystalColor:new f(this.params.crystalColor),t=this.params.crackColor instanceof f?this.params.crackColor:new f(this.params.crackColor),i=this.params.iceCapColor instanceof f?this.params.iceCapColor:new f(this.params.iceCapColor),a=new Array(50).fill(new j),l=new Array(50).fill(new j),n=new Array(12).fill(new Z),r=new Array(4).fill(new j);return this.params.crystals&&this.params.crystals.forEach((c,d)=>{d<50&&(a[d]=new j(c.position[0],c.position[1],c.angle),l[d]=new j(c.length,c.width,0))}),this.params.cracks&&this.params.cracks.forEach((c,d)=>{d<12&&(n[d]=new Z(c.angle,c.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((c,d)=>{d<4&&(r[d]=new j(c.position[0],c.position[1],c.radius))}),new de({vertexShader:Pe.vertexShader,fragmentShader:Pe.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:a},crystalSizes:{value:l},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:n},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:r},iceCapColor:{value:i},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function gs(s){const e=s.surface_elements||s.surface||s;let t=[.9,.95,1];const i=s.planet_info?.base_color||s.base_color;if(i&&typeof i=="string"){const c=i.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255],t=[Math.min(t[0]+.1,1),Math.min(t[1]+.15,1),Math.min(t[2]+.2,1)]}else Array.isArray(i)&&(t=i);let a=[],l=[],n=[];if(s.seeds){const c=x=>{let b=x;return()=>(b=(b*1664525+1013904223)%4294967296,b/4294967296)},d=x=>{const b=x()*Math.PI*2,E=Math.acos(x()*2-1),F=Math.sin(E)*Math.cos(b),z=Math.sin(E)*Math.sin(b);return[F,z]},u=c(s.seeds.planet_seed),w=4+Math.floor(u()*6);for(let x=0;x<w;x++)a.push({position:d(u),length:.1+u()*.2,width:.05+u()*.1,angle:u()*Math.PI*2});const y=c(s.seeds.shape_seed),S=3+Math.floor(y()*5);for(let x=0;x<S;x++)l.push({angle:y()*Math.PI*2,length:.2+y()*.6});const _=c(s.seeds.shape_seed+500),v=2+Math.floor(_()*3);for(let x=0;x<v;x++)n.push({position:d(_),radius:.15+_()*.25})}const r={crystals:e.crystals?.length>0?e.crystals:a,cracks:e.cracks?.length>0?e.cracks:l,iceCaps:e.ice_caps?.length>0?e.ice_caps:n,baseTextureIntensity:.3,crystalColor:new f(t[0]*.8,t[1]*.9,t[2]*1),crackColor:new f(t[0]*.3,t[1]*.3,t[2]*.4),iceCapColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1)};return new Pe(r)}class pt{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new ht,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,a=t*Math.cos(i),l=t*Math.sin(i),n=l*.8,r=new pe,c=new Float32Array([0,0,0,a,n,l]);r.setAttribute("position",new Y(c,3));const d=new Qe({color:16776960,linewidth:5,transparent:!1});this.sunLine=new et(r,d),this.debugGroup.add(this.sunLine);const u=e+Math.PI,w=t*.7,y=w*Math.cos(u),S=0,_=w*Math.sin(u),v=new Ve(this.planetRadius*.15,16,16),x=new Ot({color:16776960,transparent:!1,opacity:1}),b=new Te(v,x);b.position.set(y,S,_),this.debugGroup.add(b),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new pe,a=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new Y(a,3));const l=new Qe({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new et(i,l),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,a=this.params.initialAngleRotation||0,l=e-t,n=2*Math.PI/i;return(a+l*n)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,a=this.sunLine.geometry,l=a.attributes.position.array;l[3]=i*Math.cos(t),l[4]=0,l[5]=i*Math.sin(t),a.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,a=i.attributes.position.array;a[0]=-t*Math.cos(e),a[1]=0,a[2]=-t*Math.sin(e),a[3]=t*Math.cos(e),a[4]=0,a[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function ys(s,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:s.debug?.cosmic_origin_time||s.timing?.cosmic_origin_time||s.cosmicOriginTime,rotationPeriod:s.planet_info?.rotation_period||s.rotation_period_seconds||86400,initialAngleRotation:s.debug?.initial_angle_rotation||s.timing?.initial_angle_rotation||s.initialAngleRotation||0,planetRadius:e,orbitalAngle:s.timing?.orbital_angle||0,sunAngle:s.sun_angle||s.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new pt(e,t)}function Ne(s){const e=s.replace("#",""),t=parseInt(e.substr(0,2),16)/255,i=parseInt(e.substr(2,2),16)/255,a=parseInt(e.substr(4,2),16)/255;return new f(t,i,a)}function Oe(s){return s.length>=3?new f(s[0],s[1],s[2]):new f(.5,.5,.5)}function Ge(s){if(s.ocean_color){if(typeof s.ocean_color=="string")return Ne(s.ocean_color);if(Array.isArray(s.ocean_color))return Oe(s.ocean_color)}if(s.planet_info?.base_color){if(typeof s.planet_info.base_color=="string")return Ne(s.planet_info.base_color);if(Array.isArray(s.planet_info.base_color))return Oe(s.planet_info.base_color)}if(s.base_color){if(typeof s.base_color=="string")return Ne(s.base_color);if(Array.isArray(s.base_color))return Oe(s.base_color)}const e=s.planet_info?.type||s.type||"Unknown";return bs(e)}function bs(s){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[s]||"#FFFFFF";return Ne(t)}const xs=!1;var gt=(s=>(s.METALLIC_SURFACE="metallic_surface",s.CLOUD_BANDS="cloud_bands",s.CLOUD_GYROS="cloud_gyros",s.ATMOSPHERE="atmosphere",s.ATMOSPHERE_GLOW="atmosphere_glow",s.ATMOSPHERIC_STREAKS="atmospheric_streaks",s.RING_SYSTEM="ring_system",s.FRAGMENTATION="fragmentation",s.ROCKY_TERRAIN="rocky_terrain",s.ICY_TERRAIN="icy_terrain",s.OCEAN_WAVES="ocean_waves",s.LAVA_FLOWS="lava_flows",s.CRYSTAL_FORMATIONS="crystal_formations",s.CLOUD_LAYERS="cloud_layers",s.STORM_SYSTEMS="storm_systems",s.VOLCANIC_ACTIVITY="volcanic_activity",s.AURORA="aurora",s.MAGNETIC_FIELD="magnetic_field",s.CITY_LIGHTS="city_lights",s.BIOLUMINESCENCE="bioluminescence",s.THERMAL_EMISSIONS="thermal_emissions",s.VISUAL_DEBUG_3D="visual_debug_3d",s))(gt||{});class me{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return me.instance||(me.instance=new me),me.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,i)=>new rt(e),fromPythonData:(e,t,i)=>{const a=Ge(e),l=[a.r,a.g,a.b];return new rt({color:l,roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}}),this.registerEffect("cloud_bands",{create:(e,t,i)=>new we(i,e),fromPythonData:(e,t,i)=>us(i,e)}),this.registerEffect("cloud_gyros",{create:(e,t,i)=>new Ce(i,e),fromPythonData:(e,t,i)=>ms(i,e)}),this.registerEffect("atmosphere_glow",{create:(e,t)=>new ve(t,e),fromPythonData:(e,t)=>hs(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new ft(t,e),fromPythonData:(e,t)=>fs(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new _e(t,e),fromPythonData:(e,t)=>ds(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new mt(t,e),fromPythonData:(e,t)=>cs(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new nt(t,e),fromPythonData:(e,t)=>new nt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,i)=>new Se(e),fromPythonData:(e,t,i)=>ps(e)}),this.registerEffect("icy_terrain",{create:(e,t,i)=>new Pe(e),fromPythonData:(e,t,i)=>gs(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new pt(t,e),fromPythonData:(e,t)=>ys(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,a,l=0){const n=this.creators.get(e);if(!n)return console.warn(`Effect type '${e}' not registered`),null;try{const r=n.create(t,i,a);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:l,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}':`,r),null}}createEffectFromPythonData(e,t,i,a,l=0){const n=this.creators.get(e);if(!n||!n.fromPythonData)return this.createEffect(e,t,i,a,l);try{const r=n.fromPythonData(t,i,a);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:l,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}' from Python data:`,r),null}}createEffectsFromList(e,t,i){const a=[],l=e.sort((n,r)=>(n.priority||0)-(r.priority||0));for(const n of l){const r=this.createEffect(n.type,n.params,t,i,n.priority);r&&(r.enabled=n.enabled!==!1,a.push(r))}return a}createEffectsFromPythonPlanetData(e,t,i,a){const l=[];try{if(console.log("🌍 EffectRegistry received Python data:",e),console.log("🔍 Surface elements:",e.surface_elements),console.log("🌫️ Atmosphere:",e.atmosphere),console.log("💍 Rings:",e.rings),console.log("🪐 Planet info:",e.planet_info),e.surface_elements){const n=e.surface_elements;if(console.log("🏔️ Processing surface elements:",n.type,n),n.effects_3d&&Array.isArray(n.effects_3d)){console.log("🚀 ENCONTRADOS effects_3d:",n.effects_3d.length,"efectos"),console.log("🚀 LISTA COMPLETA DE effects_3d:",JSON.stringify(n.effects_3d,null,2));for(const r of n.effects_3d){console.log("🔍 PROCESANDO EFECTO:",r.type,"con params:",r.params);const c=this.createEffect(r.type,r.params,t,i,r.priority||0);c?(l.push(c),c.effect.apply?(console.log("🎯 APLICANDO EFECTO:",r.type,"al mesh"),c.effect.apply(i)):console.warn("⚠️ EFECTO SIN apply():",r.type),c.effect.addToScene&&c.effect.addToScene(a,i.position),console.log("✅ EFECTO AGREGADO Y APLICADO:",r.type)):console.error("❌ FALLO AL CREAR EFECTO:",r.type)}}else console.log("❌ NO HAY effects_3d O NO ES ARRAY:",typeof n.effects_3d,n.effects_3d);switch(console.log("🔍 Checking legacy surface type:",n.type),n.type){case"gas_giant":console.log("🌀 Creating Gas Giant cloud bands");const r=this.createEffectFromPythonData("cloud_bands",{...n,base_color:e.planet_info?.base_color||e.surface?.base_color,turbulence:e.turbulence||n.turbulence},t,i,0);r&&(l.push(r),console.log("✅ Cloud bands effect applied to mesh material")),console.log("🌪️ Creating Gas Giant spirals");const c=this.createEffectFromPythonData("cloud_gyros",{...n,base_color:e.planet_info?.base_color||e.surface?.base_color,storm_intensity:e.storm_intensity||n.storm_intensity},t,i,1);c&&(l.push(c),console.log("✅ Cloud gyros effect applied to mesh material"));break;case"metallic":case"metallic_3d":console.log("⚙️ Metallic planet detected - effects should be handled by modular effects_3d system");break;case"rocky":const d=this.createEffectFromPythonData("rocky_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,i,0);d&&(l.push(d),d.effect.apply(i));break;case"icy":const u=this.createEffectFromPythonData("icy_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,i,0);u&&(l.push(u),u.effect.apply(i));break;case"oceanic":console.log("🌊 Oceanic planet detected - using generic rendering");break;default:if(console.log("❓ Unknown surface type:",n.type,"- applying base color"),i.material instanceof ee){const w=Ge(e);i.material.color.copy(w),console.log("✅ Applied base color to planet without specific effects:",w)}break}}else if(console.log("❌ No surface_elements found in Python data - applying base color"),i.material instanceof ee){const n=Ge(e);i.material.color.copy(n),console.log("✅ Applied base color to planet without surface_elements:",n)}if(e.atmosphere){if(console.log("🌫️ Applying atmospheric effects for:",e.planet_info?.type),e.atmosphere.halo&&e.atmosphere.halo.enabled!==!1){const n=this.createEffectFromPythonData(gt.ATMOSPHERIC_HALO,e,t,i,10);n&&(l.push(n),n.effect.addToScene(a,i.position),console.log("✅ Added atmospheric halo effect"))}if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const n=this.createEffectFromPythonData("atmosphere_glow",e,t,i,20);n&&(l.push(n),n.effect.addToScene(a,i.position),console.log("✅ Added atmosphere glow effect"))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const n=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),r={...e.atmosphere};n==="oceanic"&&(r.opacity=Math.min(r.opacity||.3,.15),r.width=Math.min(r.width||15,8));const c=this.createEffectFromPythonData("atmosphere",r,t,i,5);c&&(l.push(c),c.effect.addToScene(a,i.position),console.log("✅ Added atmosphere effect"))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){console.log("💍 Applying ring system for:",e.planet_info?.type,"rings data:",e.rings);const n=this.createEffectFromPythonData("ring_system",e,t,i,1);n?(l.push(n),n.effect.addToScene(a,i.position),console.log("✅ Added ring system effect")):console.warn("⚠️ Failed to create ring effect")}else console.log("❌ No rings for:",e.planet_info?.type,"rings:",e.rings);if(e.surface_elements?.has_fragmentation_zones){const n=this.createEffectFromPythonData("fragmentation",e,t,i,5);n&&(l.push(n),n.effect.addToScene(a,i.position))}return console.log("📊 EffectRegistry Summary:"),console.log(`   Total effects created: ${l.length}`),l.forEach((n,r)=>{console.log(`   ${r+1}. ${n.type} (${n.enabled?"enabled":"disabled"})`)}),l.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),l}catch(n){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",n),n}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);i&&(i.enabled=t!==void 0?t:!i.enabled)}updateAllEffects(e,t){for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(a){console.error(`Error updating effect ${i.type}:`,a)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const ye=me.getInstance(),ce={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function _s(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...ce.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmosphere",params:{...ce.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:ce.cloud_bands,priority:0},{type:"cloud_gyros",params:ce.cloud_gyros,priority:1},{type:"atmosphere",params:{...ce.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:ce.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...ce.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const X={log:(s,e)=>{},warn:(s,e)=>{console.warn(`[Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`[Effects] ${s}`,e||"")},debug:(s,e)=>{}};new Date().toISOString();const vs=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[i,a]=p.useState([]),[l,n]=p.useState({});p.useEffect(()=>{if(!s)return;const d=r(s);n(d),a(c(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=d)},[s,e]);function r(d){const u={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(d.planet_info&&d.surface_elements?u.hasValidStructure=!0:(d.planet_info||u.missingFields.push("planet_info"),d.surface_elements||u.missingFields.push("surface_elements")),d.surface_elements?.type==="oceanic"&&(u.oceanicData={hasAbstractLands:!!d.surface_elements.abstract_lands?.length,numGreenPatches:d.surface_elements.green_patches?.length||0,numClouds:d.surface_elements.clouds?.length||0,hasDepths:d.surface_elements.depths?.enabled||!1,baseColorIsBlue:d.planet_info?.base_color==="#0000FF",greenPatchColor:d.surface_elements.green_patches?.[0]?.color,issues:[]},u.oceanicData.numGreenPatches>15&&u.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),u.oceanicData.baseColorIsBlue||u.oceanicData.issues.push(`Color base no es azul puro: ${d.planet_info?.base_color}`),u.renderingIssues=u.oceanicData.issues),d.planet_info?.base_color&&d.planet_info?.type){const y={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[d.planet_info.type];y&&d.planet_info.base_color!==y?u.colorConsistency=`Inconsistente: esperado ${y}, recibido ${d.planet_info.base_color}`:u.colorConsistency="Correcto"}return u}function c(d){const u=[];if(!d.surface_elements?.type)return["No surface type defined"];const w=d.surface_elements.type.toLowerCase();switch(w){case"oceanic":u.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":u.push("RockyTerrainEffect");break;case"icy":u.push("IcyTerrainEffect");break;case"gas giant":u.push("GasGiantBandsEffect");break;default:u.push(`Generic effect for type: ${w}`)}return d.atmosphere?.density>0&&u.push("AtmosphericEffect"),d.rings&&u.push("RingSystemEffect"),u}return t?o.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[o.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),o.jsxs("div",{style:{marginBottom:"10px"},children:[o.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,o.jsx("br",{}),o.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,o.jsx("br",{}),o.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&o.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[o.jsx("strong",{children:"🌊 Oceanic Data:"}),o.jsx("br",{}),o.jsxs("span",{style:{color:l.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",l.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),o.jsx("br",{}),"Green Patches: ",l.oceanicData?.numGreenPatches,o.jsx("br",{}),"Clouds: ",l.oceanicData?.numClouds,o.jsx("br",{}),"Has Depths: ",l.oceanicData?.hasDepths?"Yes":"No",o.jsx("br",{}),l.oceanicData?.issues?.length>0&&o.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",o.jsx("br",{}),l.oceanicData.issues.map((d,u)=>o.jsxs("div",{children:["- ",d]},u))]})]}),o.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[o.jsx("strong",{children:"🎨 Effects Applied:"}),o.jsx("br",{}),i.map((d,u)=>o.jsxs("div",{style:{color:d.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",d]},u))]}),o.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function ws(s){p.useEffect(()=>{if(s&&s.surface_elements?.type==="oceanic"){s.surface_elements.green_patches?.length>0;const e=s.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[s])}const xe=2.5,lt=()=>{const s=45*Math.PI/180;return xe/(Math.tan(s/2)*.5)},Cs=({planetName:s,containerClassName:e="",width:t=800,height:i=600,autoRotate:a=!0,enableControls:l=!0,showDebugInfo:n=!1,planetData:r,cosmicOriginTime:c,initialAngleRotation:d,onDataLoaded:u,onEffectsCreated:w,onError:y})=>{const S=p.useRef(null),_=p.useRef(null),v=p.useRef(null),x=p.useRef(null),b=p.useRef(null),E=p.useRef(null),F=p.useRef(new Gt),z=p.useRef(null),te=p.useRef(0),I=p.useRef(null),[se,P]=p.useState(!0),[B,O]=p.useState(null),[R,K]=p.useState(null),[G,U]=p.useState([]),[V,W]=p.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),$=p.useRef([]),ie=p.useRef(0),J=p.useRef(null),he=Math.floor(Date.now()/1e3),[k,q]=p.useState(0),oe=c||R?.timing?.cosmic_origin_time||Date.now()/1e3-3600,ge=he-oe+k;te.current=ge;const ae=p.useCallback(()=>{if(!S.current||!v.current||!x.current)return;const h=S.current,g=h.clientWidth||400,m=h.clientHeight||400;v.current.setSize(g,m),x.current.aspect=g/m,x.current.updateProjectionMatrix()},[]),Ee=async h=>{if(!(!b.current||!_.current)){X.log("Applying modular effects from API data",{planet:h.planet_info.name,type:h.planet_info.type});try{De();const g=ye.createEffectsFromPythonPlanetData(h,xe,b.current,_.current);U(g),$.current=g,w&&w(g),X.log(`Successfully applied ${g.length} modular effects`),Fe()}catch(g){X.error("Error applying modular effects",g),Ae()}}},Me=p.useCallback(()=>{if(!S.current)return!1;try{for(;S.current.firstChild;)S.current.removeChild(S.current.firstChild);_.current=null,x.current=null,v.current=null,b.current=null,L.current=null;const h=S.current,g=h.clientWidth||t||400,m=h.clientHeight||i||400,C=new Bt;C.background=new f(1297),_.current=C;const T=new Ut(45,g/m,.1,1e4),A=lt();console.log("🎯 Camera distance for exact Pillow proportions:",A),T.position.set(0,0,A),T.lookAt(0,0,0),x.current=T;const M=new Vt({antialias:!0,alpha:!0,powerPreference:"high-performance"});return M.setSize(g,m),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.shadowMap.enabled=!0,M.shadowMap.type=Ht,M.toneMapping=Yt,M.toneMappingExposure=1.2,M.outputColorSpace=Wt,S.current.appendChild(M.domElement),v.current=M,yt(C,null),bt(C),l&&xt(T,M.domElement),!0}catch(h){return console.error("Error initializing Three.js:",h),!1}},[R,r,c]),Ie=h=>{if(!h)return 0;const g=h.sun_angle||h.lighting?.sun_angle;if(g!==void 0)return g;const m=h.timing?.current_orbital_angle||h.timing?.orbital_angle;return m??0},Q=p.useRef(null),re=p.useRef(null),ne=p.useRef(null),L=p.useRef(null),ke=h=>{h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=.5,h.shadow.camera.far=50,h.shadow.camera.left=-10,h.shadow.camera.right=10,h.shadow.camera.top=10,h.shadow.camera.bottom=-10},We=h=>{if(!Q.current||!_.current)return;const g=Ie(h),m=10,C=g+Math.PI,T=Math.sin(g)*5,A=m*Math.cos(C),M=T,le=m*Math.sin(C);Q.current.position.set(A,M,le),Q.current.target.position.set(0,0,0),_.current.children.includes(Q.current.target)||_.current.add(Q.current.target),re.current&&re.current.position.set(-A*.5,0,-le*.5)},yt=(h,g)=>{{const m=new tt(16777215,2);m.position.set(-10,5,10),m.target.position.set(0,0,0),m.castShadow=!0,ke(m),h.add(m),h.add(m.target),Q.current=m;const C=new tt(16777215,.05);C.position.set(8,-3,-5),h.add(C),re.current=C;const T=new $t(2236996,.1);h.add(T);return}},bt=h=>{console.log("🪐 Creating normalized planet with fixed radius:",xe);const g=new Ve(xe,128,64),m=new ee({color:8421504,metalness:.1,roughness:.8,transparent:!1,opacity:1}),C=new Te(g,m);C.castShadow=!0,C.receiveShadow=!0,C.position.set(0,0,0),h.add(C),b.current=C,console.log("🪐 Base planet created - color will be updated when API data arrives")},xt=(h,g)=>{const m=new Xt(h,g);m.enableDamping=!0,m.dampingFactor=.05;const C=lt();m.minDistance=C*.8,m.maxDistance=C*3,m.autoRotate=a,m.autoRotateSpeed=.5,m.enablePan=!0,m.enableZoom=!0,m.target.set(0,0,0),E.current=m},_t=p.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{P(!0),O(null),X.log("Loading planet data from API",{planetName:s});const g=await fetch("/api/planet/rendering-data");if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);const m=await g.json();if(!m.success)throw new Error(m.error||"Failed to fetch planet data");const C=m.planet_data,T=m.timing,A=m.rendering_data,M={planet_info:A?.planet_info||{name:C.name,type:C.planet_type,base_color:"#808080",radius:C.diameter/15e3},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:T.cosmic_origin_time,current_time_seconds:T.current_time_seconds,elapsed_time:T.elapsed_time,initial_orbital_angle:C.initial_orbital_angle,current_orbital_angle:C.current_orbital_angle,max_orbital_radius:T.max_orbital_radius,system_max_orbital_radius:C.system_max_orbital_radius},original_planet_data:C};return K(M),I.current=M,X.log("API data loaded successfully",{planet:M.planet_info.name,type:M.planet_info.type,hasEffects:!!M.surface_elements,fullRenderingData:A}),console.log("🌍 Planet API Response:",m),console.log("🎨 Rendering Data:",A),console.log("🔧 Processed Data:",M),u&&u(M),M}catch(h){const g=h instanceof Error?h.message:"Unknown error";return O(g),y&&y(g),null}finally{P(!1),window.isLoadingPlanetData=!1}}},[s,u,y]);p.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{P(!0),O(null),X.log("Loading planet data from API",{planetName:s});const g=await fetch("/api/planet/rendering-data");if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);const m=await g.json();if(!m.success)throw new Error(m.error||"Failed to fetch planet data");const C=m.planet_data,T=m.timing,A=m.rendering_data,M={planet_info:A?.planet_info||{name:C.name,type:C.planet_type,base_color:"#808080",radius:C.diameter/15e3},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:T.cosmic_origin_time,current_time_seconds:T.current_time_seconds,elapsed_time:T.elapsed_time,initial_orbital_angle:C.initial_orbital_angle,current_orbital_angle:C.current_orbital_angle,max_orbital_radius:T.max_orbital_radius,system_max_orbital_radius:C.system_max_orbital_radius},original_planet_data:C};K(M),I.current=M,X.log("API data loaded successfully",{planet:M.planet_info.name,type:M.planet_info.type,hasEffects:!!M.surface_elements,fullRenderingData:A}),console.log("🌍 Full Load - API Response:",m),console.log("🎨 Full Load - Rendering Data:",A),console.log("🔧 Full Load - Processed Data:",M),We(M),L.current&&_.current&&(_.current.remove(L.current),L.current.geometry.dispose(),L.current.material.dispose(),L.current=null),await Ee(M),u&&u(M)}catch(h){const g=h instanceof Error?h.message:"Unknown error";O(g),y&&y(g),Ae()}finally{P(!1),window.isLoadingPlanetData=!1}}},[s,r,c,d]);const $e=p.useCallback(()=>{if(!R||!b.current)return;const h=r?.orbital_period_seconds||365.25*24*3600,g=2*Math.PI/h,m=R.timing?.initial_orbital_angle||0,C=Date.now()/1e3,T=0,A=c||R.timing?.cosmic_origin_time||Date.now()/1e3-3600,M=C-A+T,le=(m+M*g)%(2*Math.PI),Le=R.timing?.max_orbital_radius||100,je=20+R.planet_info?.orbital_radius/Le*80,wt=je,Ct=je*Math.cos(le),St=wt*Math.sin(le);b.current.position.x=Ct,b.current.position.z=St,b.current.position.y=0},[R,r,c]),vt=p.useCallback(async h=>{const g=h||R;if(g&&_.current)try{We(g),L.current&&_.current&&(_.current.remove(L.current),L.current.geometry.dispose(),L.current.material.dispose(),L.current=null),await Ee(g)}catch(m){X.error("Error in applyProceduralShadersFromAPI:",m),Ae()}},[R]),Ae=()=>{if(!(!_.current||!b.current)){X.warn("Applying fallback effects for planet type:",r?.planet_type);try{De(),b.current.material instanceof ee&&(b.current.material.color.setHex(6710886),console.log("⚠️ Applied fallback generic color - API should provide real colors"));try{const h=_s("generic"),g=ye.createEffectsFromList(h,xe,b.current);g.forEach(m=>{m.effect.addToScene&&_.current&&b.current&&m.effect.addToScene(_.current,b.current.position)}),$.current=g,U(g)}catch(h){console.warn("Could not create fallback effects, using basic material only:",h)}Fe()}catch(h){X.error("Error applying fallback effects",h)}}},De=()=>{$.current.forEach(h=>{try{h.effect.dispose&&h.effect.dispose()}catch{}}),$.current=[],U([])},Ze=p.useCallback(()=>{z.current=requestAnimationFrame(Ze);const h=performance.now(),g=F.current.getDelta();E.current&&E.current.update();try{ye.updateAllEffects(g,b.current?.rotation.y)}catch{}if(b.current&&I.current){I.current.planet_info?.name;const m=I.current.original_planet_data,C=m?.orbital_period_seconds||365.25*24*3600,T=I.current.timing?.initial_orbital_angle||0;c||I.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const A=m?.axial_tilt||0,M=2*Math.PI/C;(T+te.current*M)%(2*Math.PI);const le=I.current.timing?.max_orbital_radius||I.current.timing?.system_max_orbital_radius,Le=m?.orbital_radius;if(!le||!Le)return;m?.eccentricity_factor,b.current.position.set(0,0,0);const Ke=m?.rotation_period_seconds||86400,je=2*Math.PI/Ke;b.current.rotation.y=te.current*je%(2*Math.PI),b.current.rotation.z=A*(Math.PI/180)}if($.current.forEach(m=>{m.effect.updateUniforms&&m.effect.updateUniforms(g)}),v.current&&_.current&&x.current){const m=performance.now();v.current.render(_.current,x.current);const C=performance.now()-m;if(h-ie.current>5e3){const T=1e3/(h-ie.current);Fe(),W(A=>({...A,frameRate:Math.round(T),renderTime:Math.round(C*100)/100})),ie.current=h}}},[]),Fe=p.useCallback(()=>{const h=ye.getStats();W(g=>({...g,activeEffects:h.activeEffects,enabledEffects:h.enabledEffects}))},[]);return p.useEffect(()=>{let h=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!h)return;const m=await _t();if(!h)return;if(!Me()){h&&O("Failed to initialize 3D renderer");return}if(!h||(Ze(),S.current&&"ResizeObserver"in window&&(J.current=new ResizeObserver(ae),J.current.observe(S.current)),window.addEventListener("resize",ae),!h))return;m?await vt(m):Ae()}catch(m){h&&O(m instanceof Error?m.message:"Unknown initialization error")}})(),()=>{if(h=!1,I.current=null,z.current&&cancelAnimationFrame(z.current),J.current&&J.current.disconnect(),window.removeEventListener("resize",ae),De(),E.current&&E.current.dispose(),ne.current&&_.current&&(_.current.remove(ne.current),ne.current.geometry.dispose(),ne.current.material.dispose(),ne.current=null),L.current&&_.current&&(_.current.remove(L.current),L.current.geometry.dispose(),L.current.material.dispose(),L.current=null),v.current&&S.current)try{S.current.contains(v.current.domElement)&&S.current.removeChild(v.current.domElement),v.current.dispose()}catch{}}},[]),p.useEffect(()=>{const h=setInterval(()=>{const g=ye.getStats();W(m=>({...m,activeEffects:g.activeEffects,enabledEffects:g.enabledEffects}))},1e4);return()=>clearInterval(h)},[]),p.useEffect(()=>{R&&_.current&&b.current&&$e()},[R,$e]),ws(R),o.jsxs("div",{className:`relative ${e}`,children:[n&&R&&o.jsx(vs,{planetData:R,showInPage:!0,showInConsole:!0}),o.jsx("div",{ref:S,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),se&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:o.jsxs("div",{className:"text-white text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),o.jsx("div",{children:"Loading planet..."})]})}),B&&o.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[o.jsx("strong",{children:"Error:"})," ",B]}),R&&!se&&o.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[o.jsx("h3",{className:"text-lg font-bold",children:R.planet_info.name}),o.jsx("p",{className:"text-sm opacity-80",children:R.planet_info.type}),o.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[G.length," effects active"]}),R.surface_elements?.description&&o.jsx("p",{className:"text-xs mt-2 opacity-60",children:R.surface_elements.description.appearance})]}),n&&o.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[o.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),o.jsxs("div",{children:["Frame Rate: ",V.frameRate," FPS"]}),o.jsxs("div",{children:["Render Time: ",V.renderTime,"ms"]}),o.jsxs("div",{children:["Active Effects: ",V.activeEffects]}),o.jsxs("div",{children:["Enabled Effects: ",V.enabledEffects]}),o.jsxs("div",{className:"mt-2",children:[o.jsx("div",{className:"font-semibold",children:"Effects:"}),G.map(h=>o.jsxs("div",{className:"ml-2",children:[h.type," (",h.enabled?"ON":"OFF",")"]},h.id))]})]})]})};class Ss extends ct.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?o.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:o.jsxs("div",{className:"text-center p-4",children:[o.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),o.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const Ps=s=>o.jsx(Ss,{children:o.jsx(Cs,{...s})}),Es=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:a})=>{const l=p.useRef(null),n=p.useRef(null),[r,c]=p.useState("Aligning Stargate..."),[d,u]=p.useState(!1),[w,y]=p.useState(!1),[S,_]=p.useState(!1),[v,x]=p.useState(!0),[b,E]=p.useState(!0),[F,z]=p.useState(null),[te,I]=p.useState(null);p.useEffect(()=>{const P=document.createElement("style");return P.textContent=`
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
    `,document.head.appendChild(P),()=>{document.head.removeChild(P)}},[]),p.useEffect(()=>{const P=l.current;if(!P)return;const B=P.getContext("2d");if(!B)return;let O=[];const R=800;let K,G;const U=800;let V,W=.5;function $(){const k=P?.parentElement;if(!k||!P)return;const q=k.clientWidth,oe=k.clientHeight;P.width=Math.min(q,U),P.height=Math.min(oe,U),K=P.width/2,G=P.height/2}function ie(){$(),O=[];for(let k=0;k<R;k++)O.push({x:Math.random()*(P?.width||800),y:Math.random()*(P?.height||800),z:Math.random()*(P?.width||800),o:Math.random()});J()}function J(){!P||!B||(B.clearRect(0,0,P.width,P.height),O.forEach(k=>{k.z-=W,k.z<=0&&(k.z=P.width,k.x=Math.random()*P.width,k.y=Math.random()*P.height,k.o=Math.random());const q=P.width/k.z,oe=(k.x-K)*q+K,ge=(k.y-G)*q+G,ae=2*q;B.beginPath(),B.fillStyle=`rgba(255, 255, 255, ${k.o})`,B.arc(oe,ge,ae,0,2*Math.PI),B.fill()}),W<60&&(W+=1),V=requestAnimationFrame(J))}ie();const he=()=>$();return window.addEventListener("resize",he),()=>{window.removeEventListener("resize",he),V&&cancelAnimationFrame(V)}},[]),p.useEffect(()=>{if(e&&!v){const P=new Image;P.onload=()=>{n.current&&(n.current.src=e,y(!0),_(!0))},P.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{y(!0),_(!0)},1500)},P.src=e}else(v||!e)&&setTimeout(()=>{y(!0),_(!0)},1500)},[e,v]),p.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){c("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),u(!0);const B=(U,V)=>Array.from({length:V},()=>U[Math.floor(Math.random()*U.length)]).join(""),O=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let R=0,K=0;const G=()=>{if(R>=O.length){const V="Stargate system aligned";let W=0;c("");const $=()=>{W<V.length?(c(V.substring(0,W+1)),W++,setTimeout($,30)):u(!1)};$();return}const U=O[R];c(B(U.chars,32)),K++,K>=U.iterations&&(R++,K=0),setTimeout(G,U.duration)};G()},[]);const se=()=>{x(!v),v||(y(!0),_(!0))};return o.jsxs("div",{className:"h-full flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),b&&o.jsx("div",{className:"flex items-center gap-2",children:o.jsx("button",{onClick:se,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${v?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:v?"2D View":"3D View"})})]}),o.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[o.jsx("canvas",{ref:l,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${S?"opacity-0":"opacity-100"}`,style:{filter:S?"blur(50px)":"none"}}),v&&w&&t&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${w?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:o.jsx(Ps,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:a,onDataLoaded:P=>{z(P)},onError:P=>{I(P),console.error("❌ Planet rendering error:",P)}})}),!v&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${w?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:w&&e?o.jsx("div",{className:"w-full h-full flex items-center justify-center",children:o.jsx(jt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:o.jsx("img",{ref:n,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):o.jsx("img",{ref:n,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),b&&o.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:v?"🌍 3D":"🖼️ 2D"})]}),o.jsxs("div",{className:"text-center mt-auto",children:[o.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${d?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[o.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),r]}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),o.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",v&&F&&o.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",F.planet_info?.type," Planet",F.atmosphere&&o.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),F.rings?.has_rings&&o.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),v&&te&&o.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Ms=({currentPlanet:s,system:e,galaxy:t,systemPlanets:i})=>{const[a,l]=p.useState(null),[n,r]=p.useState(null),[c,d]=p.useState(!1),[u,w]=p.useState(!1),[y,S]=p.useState(!0);p.useEffect(()=>{if(i&&i.length>0){const x=i.findIndex(b=>b.name.toLowerCase()===s.toLowerCase());x!==-1?(x>0?(l(i[x-1].name.toLowerCase()),d(!0)):e.index>0?(l("__prev_system__"),d(!0)):d(!1),x<i.length-1?(r(i[x+1].name.toLowerCase()),w(!0)):(r("__next_system__"),w(!0))):(d(!1),w(!1))}else d(!1),w(!1);S(!1)},[s,e.index,i]);const _=async()=>{const x=t.coordinates.join(",");if(a==="__prev_system__")try{const b=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(b.ok){const E=await b.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const z=E.system.planets[E.system.planets.length-1].name.toLowerCase();be(x,e.index-1,z,E.system.planets),Be(x,e.index-1),window.location.href=`/planet/${z}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else a&&(be(x,e.index,a,i),window.location.href=`/planet/${a}`)},v=async()=>{const x=t.coordinates.join(",");if(n==="__next_system__")try{const b=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(b.ok){const E=await b.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const z=E.system.planets[0].name.toLowerCase();be(x,e.index+1,z,E.system.planets),Be(x,e.index+1),window.location.href=`/planet/${z}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else n&&(be(x,e.index,n,i),window.location.href=`/planet/${n}`)};return y?null:o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("button",{onClick:_,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),o.jsx("button",{onClick:v,disabled:!u,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${u?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},As=({planet:s,system:e,galaxy:t,planet_url:i,version:a,image_url:l,cosmic_origin_time:n,initial_angle_rotation:r})=>{const[c]=p.useState(t.coordinates.join(","));p.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),be(c,e.index,s.name,e.planets||[]),Be(c,e.index)},[c,e.index,s.name]);const d=y=>y.replace(/_/g," "),u=y=>y.replace(/_/g," "),w=y=>y.replace(/_/g," ");return o.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[o.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),o.jsxs("div",{className:"relative z-10",children:[o.jsx(Mt,{}),o.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:o.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",d(s.name),"'"]})}),o.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",u(e.name),"' - Galaxy '",w(t.name),"'"]}),o.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),o.jsx(Ms,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:o.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[o.jsx("div",{className:"order-1 lg:order-1",children:o.jsx(Es,{planetUrl:i,imageUrl:l,planet:s,cosmicOriginTime:n,initialAngleRotation:r})}),o.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),o.jsx("div",{className:"order-2 lg:order-2",children:o.jsx(Zt,{planet:s,system:e,galaxy:t,cosmicOriginTime:n,initialAngleRotation:r})})]})}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:o.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:o.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",u(e.name),"'"]})})})]}),o.jsx(Pt,{version:a})]}),o.jsx(Rt,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!s||!e||!t||!i){console.error("Missing required data elements");return}const a=JSON.parse(s.textContent||"{}"),l=JSON.parse(e.textContent||"{}"),n=JSON.parse(t.textContent||"{}"),r=JSON.parse(i.textContent||"{}"),c={planet:a,system:l,galaxy:n,planet_url:r.planet_url,version:r.version,image_url:r.image_url,cosmic_origin_time:r.cosmic_origin_time,initial_angle_rotation:r.initial_angle_rotation},d=document.getElementById("atlas-react-root");d&&Et.createRoot(d).render(ct.createElement(As,c))}catch(s){console.error("Error initializing Planet React app:",s)}});
