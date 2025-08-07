import{r as b,j as o,R as xt,V as Ot,c as Vt}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Bt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Gt,U as Wt,m as Ie,c as et,a as Ut}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as Yt,V as R,n as Pe,T as we,Q as dt,l as ht,o as q,R as Ht,p as $t,q as Zt,e as Se,r as le,s as pe,N as Xt,t as _t,C as p,c as oe,d as ee,u as vt,v as ot,G as wt,w as Ye,F as Kt,x as ut,L as tt,g as it,M as ye,y as qt,z as Jt,H as Qt,I as ei,S as ti,P as ii,W as oi,J as si,K as ai,O as ni,D as mt,A as ri,U as li}from"./atlas_D-Xa_K3lZWFFGxEPqpc_C.js";const ci=({planet:s,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:n})=>{const[r,c]=b.useState(!1),a=x=>x.replace(/_/g," "),l=x=>{const S=x/86400;return S<30?`${S.toFixed(2)} days`:S<365?`${(S/30).toFixed(2)} months`:`${(S/365).toFixed(2)} years`},h=x=>{const S=x*9/5+32;return`${x.toFixed(1)}°C (${S.toFixed(1)}°F)`},f=x=>`${x.toExponential(2)} kg`,j=x=>x>=1e3?`${(x/1e3).toFixed(2)} km`:`${x.toFixed(2)} m`;return o.jsxs("div",{className:"h-full flex flex-col relative",children:[o.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),o.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),o.jsx(Gt,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),o.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),o.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),o.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:f(s.mass)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:j(s.diameter)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),o.jsx("div",{className:"text-xs font-bold text-cyan-300",children:l(s.orbital_period_seconds)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),o.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:h(s.surface_temperature)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:l(s.rotation_period_seconds)})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&o.jsx("button",{onClick:()=>c(!r),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:r?"▲ Less":"▼ All"})]}),o.jsx("div",{className:"flex flex-wrap gap-1",children:(r?s.elements:s.elements.slice(0,4)).map((x,S)=>o.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:x},S))})]})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[o.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Status:"}),o.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Planet:"}),o.jsx("div",{className:"text-white truncate font-medium",children:a(s.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System:"}),o.jsx("div",{className:"text-white truncate font-medium",children:a(e.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System ID:"}),o.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),o.jsx("div",{className:"text-white truncate font-medium",children:a(t.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),o.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},ft={type:"change"},st={type:"start"},Ct={type:"end"},Ue=new Ht,pt=new $t,di=Math.cos(70*Zt.DEG2RAD),z=new R,$=2*Math.PI,T={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qe=1e-6;class hi extends Yt{constructor(e,t=null){super(e,t),this.state=T.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pe.ROTATE,MIDDLE:Pe.DOLLY,RIGHT:Pe.PAN},this.touches={ONE:we.ROTATE,TWO:we.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new dt,this._lastTargetPosition=new R,this._quat=new dt().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ht,this._sphericalDelta=new ht,this._scale=1,this._panOffset=new R,this._rotateStart=new q,this._rotateEnd=new q,this._rotateDelta=new q,this._panStart=new q,this._panEnd=new q,this._panDelta=new q,this._dollyStart=new q,this._dollyEnd=new q,this._dollyDelta=new q,this._dollyDirection=new R,this._mouse=new q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mi.bind(this),this._onPointerDown=ui.bind(this),this._onPointerUp=fi.bind(this),this._onContextMenu=vi.bind(this),this._onMouseWheel=bi.bind(this),this._onKeyDown=yi.bind(this),this._onTouchStart=xi.bind(this),this._onTouchMove=_i.bind(this),this._onMouseDown=pi.bind(this),this._onMouseMove=gi.bind(this),this._interceptControlDown=wi.bind(this),this._interceptControlUp=Ci.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ft),this.update(),this.state=T.NONE}update(e=null){const t=this.object.position;z.copy(t).sub(this.target),z.applyQuaternion(this._quat),this._spherical.setFromVector3(z),this.autoRotate&&this.state===T.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=$:i>Math.PI&&(i-=$),n<-Math.PI?n+=$:n>Math.PI&&(n-=$),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=c!=this._spherical.radius}if(z.setFromSpherical(this._spherical),z.applyQuaternion(this._quatInverse),t.copy(this.target).add(z),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const a=z.length();c=this._clampDistance(a*this._scale);const l=a-c;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new R(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),c=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Ue.origin.copy(this.object.position),Ue.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ue.direction))<di?this.object.lookAt(this.target):(pt.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ue.intersectPlane(pt,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qe||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qe||this._lastTargetPosition.distanceToSquared(this.target)>Qe?(this.dispatchEvent(ft),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$/60*this.autoRotateSpeed*e:$/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){z.setFromMatrixColumn(t,0),z.multiplyScalar(-e),this._panOffset.add(z)}_panUp(e,t){this.screenSpacePanning===!0?z.setFromMatrixColumn(t,1):(z.setFromMatrixColumn(t,0),z.crossVectors(this.object.up,z)),z.multiplyScalar(e),this._panOffset.add(z)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;z.copy(n).sub(this.target);let r=z.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,c=i.width,a=i.height;this._mouse.x=n/c*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($*this._rotateDelta.x/t.clientHeight),this._rotateUp($*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($*this._rotateDelta.x/t.clientHeight),this._rotateUp($*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(c,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new q,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ui(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function mi(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function fi(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ct),this.state=T.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pi(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=T.DOLLY;break;case Pe.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=T.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=T.ROTATE}break;case Pe.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=T.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=T.PAN}break;default:this.state=T.NONE}this.state!==T.NONE&&this.dispatchEvent(st)}function gi(s){switch(this.state){case T.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case T.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case T.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function bi(s){this.enabled===!1||this.enableZoom===!1||this.state!==T.NONE||(s.preventDefault(),this.dispatchEvent(st),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ct))}function yi(s){this.enabled!==!1&&this._handleKeyDown(s)}function xi(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case we.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=T.TOUCH_ROTATE;break;case we.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=T.TOUCH_PAN;break;default:this.state=T.NONE}break;case 2:switch(this.touches.TWO){case we.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=T.TOUCH_DOLLY_PAN;break;case we.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=T.TOUCH_DOLLY_ROTATE;break;default:this.state=T.NONE}break;default:this.state=T.NONE}this.state!==T.NONE&&this.dispatchEvent(st)}function _i(s){switch(this._trackPointer(s),this.state){case T.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case T.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case T.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case T.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=T.NONE}}function vi(s){this.enabled!==!1&&s.preventDefault()}function wi(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ci(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class gt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class Pt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:n,ring_outer_radius:r,tilt_factor:c,planet_radius:a,shape_seed:l}=e;if(!t||!i){console.warn("No ring data provided");return}const h=[...t.particles,...i.particles],f=h.length,j=new gt(l||12345),x=new Se,S=new Float32Array(f*3),v=new Float32Array(f*3),P=new Float32Array(f),C=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],_=j.choice(C);for(let E=0;E<f;E++){const F=h[E],V=this.planetRadius/(a||200),se=(l||12345)+E,W=new gt(se),ce=F.distance*V,A=F.angle,D=ce*Math.sin(A),M=Math.asin((c||.2)*.5),ae=D*Math.sin(M),J=D*Math.cos(M),O=((r||400)-(n||200))*V*.4,B=W.uniform(-O*.8,O*.8),H=W.uniform(-O*.3,O*.3),U=W.uniform(-.08,.08),te=ce+H,ue=A+U;S[E*3]=te*Math.cos(ue),S[E*3+1]=ae+B+this.planetRadius*.15,S[E*3+2]=J+W.uniform(-O*.4,O*.4),F.color[0]/255;const xe=(F.distance-(n||200))/((r||400)-(n||200)),I=_.baseGray,ne=_.variation,ge=W.uniform(-ne,ne),be=Math.max(.12,Math.min(.45,I+ge)),_e=.8+xe*.4,He=W.uniform(.85,1.15),Be=W.uniform(0,1),me=Be<.03?W.uniform(1.1,1.3):1,Ee=be*_e*He*me,re=Math.max(.1,Math.min(.55,Ee));v[E*3]=re,v[E*3+1]=re,v[E*3+2]=re;const k=.15,$e=W.uniform(.3,.7),Ge=Be<.1?W.uniform(1.05,1.2):1;P[E]=F.size*k*$e*Ge}x.setAttribute("position",new le(S,3)),x.setAttribute("color",new le(v,3)),x.setAttribute("size",new le(P,1)),this.material=new pe({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Xt}),this.ringSystem=new _t(x,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,n=t.cosmicOriginTime||Date.now()/1e3,r=t.initialAngleRotation||0,a=Date.now()/1e3-n,l=2*Math.PI/i,h=(r+a*l)%(2*Math.PI);this.ringSystem.rotation.y=h}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function Pi(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new Pt(e,t)}class bt{seed;constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}random(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return this.random()*(t-e)+e}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class De{material;params;mesh;static vertexShader=`
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
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new p(16753920),bandColor:t.bandColor||new p(16753920),stormColor:t.stormColor||new p(9109504),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,stormIntensity:t.stormIntensity||.7,noiseScale:t.noiseScale||4},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),i=new bt(12345);for(let n=0;n<e&&n<20;n++)t[n]=i.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),i=new bt(67890);for(let n=0;n<e&&n<20;n++)t[n]=i.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof p?this.params.baseColor:new p(this.params.baseColor),t=this.params.bandColor instanceof p?this.params.bandColor:new p(this.params.bandColor),i=this.params.stormColor instanceof p?this.params.stormColor:new p(this.params.stormColor);return new pe({vertexShader:De.vertexShader,fragmentShader:De.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},stormColor:{value:i},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},stormIntensity:{value:this.params.stormIntensity},noiseScale:{value:this.params.noiseScale}}})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){if(this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.baseColor){const t=e.baseColor instanceof p?e.baseColor:new p(e.baseColor);this.material.uniforms.planetColor.value=t}if(e.bandColor){const t=e.bandColor instanceof p?e.bandColor:new p(e.bandColor);this.material.uniforms.bandColor.value=t}if(e.stormColor){const t=e.stormColor instanceof p?e.stormColor:new p(e.stormColor);this.material.uniforms.stormColor.value=t}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Si(s,e){const t=e.cloud_bands||{},i={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new p(e.base_color):new p(16753920),animationSpeed:1,turbulence:e.turbulence||.5,stormIntensity:e.storm_intensity||.7};return new De(s,i)}class ke{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new p(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsationSpeed||2,fresnelPower:t.fresnelPower||2},this.geometry=new oe(e*this.params.scale,64,64),this.material=this.createMaterial(),this.mesh=new ee(this.geometry,this.material)}createMaterial(){const e=this.params.color instanceof p?this.params.color:new p(this.params.color);return new pe({vertexShader:ke.vertexShader,fragmentShader:ke.fragmentShader,uniforms:{glowColor:{value:e},glowIntensity:{value:this.params.intensity},glowFalloff:{value:this.params.falloff},fresnelPower:{value:this.params.fresnelPower},time:{value:0},pulsation:{value:this.params.pulsation},pulsationSpeed:{value:this.params.pulsationSpeed}},transparent:!0,blending:ot,side:vt,depthWrite:!1})}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof p?e.color:new p(e.color);this.material.uniforms.glowColor.value=t}e.intensity!==void 0&&(this.material.uniforms.glowIntensity.value=e.intensity),e.falloff!==void 0&&(this.material.uniforms.glowFalloff.value=e.falloff),e.pulsation!==void 0&&(this.material.uniforms.pulsation.value=e.pulsation),e.pulsationSpeed!==void 0&&(this.material.uniforms.pulsationSpeed.value=e.pulsationSpeed)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}class Le{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new p(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new Se,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new _t(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),n=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),c=new Float32Array(this.particleCount),a=this.params.color instanceof p?this.params.color:new p(this.params.color);for(let l=0;l<this.particleCount;l++){const h=Math.random()*Math.PI*2,f=Math.acos(Math.random()*2-1),j=e*(1+Math.random()*.1);t[l*3]=j*Math.sin(f)*Math.cos(h),t[l*3+1]=j*Math.sin(f)*Math.sin(h),t[l*3+2]=j*Math.cos(f),i[l*3]=a.r*(.8+Math.random()*.4),i[l*3+1]=a.g*(.8+Math.random()*.4),i[l*3+2]=a.b*(.8+Math.random()*.4),n[l]=this.params.size*(Math.random()*.5+.75),r[l]=this.params.speed*(Math.random()*.8+.6),c[l]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new le(t,3)),this.geometry.setAttribute("customColor",new le(i,3)),this.geometry.setAttribute("size",new le(n,1)),this.geometry.setAttribute("speed",new le(r,1)),this.geometry.setAttribute("phase",new le(c,1))}createMaterial(){return new pe({vertexShader:Le.vertexShader,fragmentShader:Le.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:ot,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}class ze{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.5,.5,.8,.3],width:t.width||15,opacity:t.opacity||.3,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new oe(i,32,32);const n=new p(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new pe({vertexShader:ze.vertexShader,fragmentShader:ze.fragmentShader,uniforms:{atmosphereColor:{value:n},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:ot,side:vt,depthWrite:!1}),this.mesh=new ee(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new p(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function Mi(s,e){const t=e.halo||{},i={color:t.color?new p().setRGB(t.color[0],t.color[1],t.color[2]):new p(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsation_speed||2};return new ke(s,i)}function Ei(s,e){const t=e.streaks||{},i={color:t.color?new p().setRGB(t.color[0],t.color[1],t.color[2]):new p(16777215),particleCount:t.count||100,speed:t.speed||1,size:2,opacity:.6,turbulence:1};return new Le(s,i)}function Ai(s,e){let t=[.5,.5,.8,.15],i=15;e&&(e.color&&Array.isArray(e.color)&&(t=[e.color[0],e.color[1],e.color[2],e.color[3]*.5]),e.width&&(i=e.width));const n={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new ze(s,n)}class Fe{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={color:e.color||new p(7368816),roughness:e.roughness||.7,metalness:e.metalness||.9,fragmentationIntensity:e.fragmentationIntensity||.5,noiseScale:e.noiseScale||8,noiseIntensity:e.noiseIntensity||.3,edgeFragmentation:e.edgeFragmentation||1,circularWaves:e.circularWaves||1,fogPatches:e.fogPatches||1},this.material=this.createMaterial()}createMaterial(){const e=this.params.color instanceof p?this.params.color:new p(this.params.color);return new pe({vertexShader:Fe.vertexShader,fragmentShader:Fe.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},roughness:{value:this.params.roughness},metalness:{value:this.params.metalness},fragmentationIntensity:{value:this.params.fragmentationIntensity},noiseScale:{value:this.params.noiseScale},noiseIntensity:{value:this.params.noiseIntensity},edgeFragmentation:{value:this.params.edgeFragmentation},circularWaves:{value:this.params.circularWaves},fogPatches:{value:this.params.fogPatches}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof p?e.color:new p(e.color);this.material.uniforms.baseColor.value=t}e.roughness!==void 0&&(this.material.uniforms.roughness.value=e.roughness),e.metalness!==void 0&&(this.material.uniforms.metalness.value=e.metalness),e.fragmentationIntensity!==void 0&&(this.material.uniforms.fragmentationIntensity.value=e.fragmentationIntensity),e.noiseScale!==void 0&&(this.material.uniforms.noiseScale.value=e.noiseScale),e.noiseIntensity!==void 0&&(this.material.uniforms.noiseIntensity.value=e.noiseIntensity),e.edgeFragmentation!==void 0&&(this.material.uniforms.edgeFragmentation.value=e.edgeFragmentation),e.circularWaves!==void 0&&(this.material.uniforms.circularWaves.value=e.circularWaves),e.fogPatches!==void 0&&(this.material.uniforms.fogPatches.value=e.fogPatches)}getMaterial(){return this.material}dispose(){this.material.dispose()}}class yt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new p(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new wt,this.generateFragments()}generateFragments(){const e=new Ye({color:this.params.color instanceof p?this.params.color:new p(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),n=new ee(i,e);this.positionFragment(n,t),n.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const r=this.params.size*(Math.random()*.5+.75);n.scale.set(r,r,r),n.userData={rotationAxis:new R(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(n),this.fragments.add(n)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],n=[];n.push(new R(0,0,0));for(let a=0;a<e;a++){const l=a/e*Math.PI*2,h=Math.random()*.5+.5,f=(Math.random()-.5)*.3;n.push(new R(Math.cos(l)*h,Math.sin(l)*h,f))}for(let a=1;a<=e;a++){const h=n[a].clone();h.z+=Math.random()*.4+.2,n.push(h)}for(const a of n)t.push(a.x,a.y,a.z);for(let a=1;a<e;a++)i.push(0,a,a+1);i.push(0,e,1);const r=n.length-e-1;for(let a=0;a<e-1;a++)i.push(r,r+a+2,r+a+1);i.push(r,r+1,r+e);for(let a=0;a<e;a++){const l=a+1,h=(a+1)%e+1,f=l+e,j=h+e;i.push(l,f,h),i.push(h,f,j)}const c=new Se;return c.setAttribute("position",new Kt(t,3)),c.setIndex(i),c.computeVertexNormals(),c}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),n=(Math.random()-.5)*this.planetRadius*.5;return new R(Math.cos(t)*i,n,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new R(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new R(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const n=t.userData;t.rotateOnAxis(n.rotationAxis,n.rotationSpeed*e*this.params.animationSpeed);const r=Math.sin(Date.now()*.001+i)*.001;t.position.y+=r*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof p?e.color:new p(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof Ye&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof Ye&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof ut&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof ut&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class Oe{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new p(.8,.8,.8),cloudColor:e.cloudColor||new p(.7,.7,.7),craterColor:e.craterColor||new p(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof p?this.params.mountainColor:new p(this.params.mountainColor),t=this.params.cloudColor instanceof p?this.params.cloudColor:new p(this.params.cloudColor),i=this.params.craterColor instanceof p?this.params.craterColor:new p(this.params.craterColor),n=new Array(30).fill(new R),r=new Array(30).fill(new R),c=new Array(10).fill(new R);return this.params.mountains&&this.params.mountains.forEach((a,l)=>{l<30&&(n[l]=new R(a.position[0],a.position[1],a.angle),r[l]=new R(a.width,a.height,0))}),this.params.clouds&&this.params.clouds.forEach((a,l)=>{l<10&&(c[l]=new R(a.position[0],a.position[1],a.radius))}),new pe({vertexShader:Oe.vertexShader,fragmentShader:Oe.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new p(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:n},mountainSizes:{value:r},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:c},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new R(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new R},craterColor:{value:i},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function ji(s){const e=s.surface_elements||s.surface||s;let t=[.8,.8,.8];const i=s.planet_info?.base_color||s.base_color;if(i&&typeof i=="string"){const l=i.replace("#","");t=[parseInt(l.substr(0,2),16)/255,parseInt(l.substr(2,2),16)/255,parseInt(l.substr(4,2),16)/255]}else Array.isArray(i)&&(t=i);let n=[],r=[],c;if(s.seeds){const l=P=>{let C=P;return()=>(C=(C*1664525+1013904223)%4294967296,C/4294967296)},h=P=>{const C=P()*Math.PI*2,_=Math.acos(P()*2-1),E=Math.sin(_)*Math.cos(C),F=Math.sin(_)*Math.sin(C);return[E,F]},f=l(s.seeds.planet_seed),j=6+Math.floor(f()*4);for(let P=0;P<j;P++)n.push({position:h(f),width:.1+f()*.3,height:.2+f()*.6,angle:f()*Math.PI*2});const x=l(s.seeds.shape_seed+1e3),S=3+Math.floor(x()*4);for(let P=0;P<S;P++)r.push({position:h(x),radius:.08+x()*.17});const v=l(s.seeds.shape_seed+2e3);v()<.7&&(c={position:h(v),radius:.1+v()*.2})}const a={mountains:e.mountains?.length>0?e.mountains:n,clouds:e.clouds?.length>0?e.clouds:r,crater:e.crater||c,baseTextureIntensity:.4,mountainColor:new p(t[0]*1.1,t[1]*1.1,t[2]*1.1),cloudColor:new p(t[0]*.9,t[1]*.9,t[2]*.9),craterColor:new p(t[0]*.3,t[1]*.3,t[2]*.3)};return new Oe(a)}class Ve{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new p(.675,.843,.902),crackColor:e.crackColor||new p(.2,.2,.2),iceCapColor:e.iceCapColor||new p(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof p?this.params.crystalColor:new p(this.params.crystalColor),t=this.params.crackColor instanceof p?this.params.crackColor:new p(this.params.crackColor),i=this.params.iceCapColor instanceof p?this.params.iceCapColor:new p(this.params.iceCapColor),n=new Array(50).fill(new R),r=new Array(50).fill(new R),c=new Array(12).fill(new q),a=new Array(4).fill(new R);return this.params.crystals&&this.params.crystals.forEach((l,h)=>{h<50&&(n[h]=new R(l.position[0],l.position[1],l.angle),r[h]=new R(l.length,l.width,0))}),this.params.cracks&&this.params.cracks.forEach((l,h)=>{h<12&&(c[h]=new q(l.angle,l.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((l,h)=>{h<4&&(a[h]=new R(l.position[0],l.position[1],l.radius))}),new pe({vertexShader:Ve.vertexShader,fragmentShader:Ve.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new p(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:n},crystalSizes:{value:r},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:c},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:a},iceCapColor:{value:i},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Ri(s){const e=s.surface_elements||s.surface||s;let t=[.9,.95,1];const i=s.planet_info?.base_color||s.base_color;if(i&&typeof i=="string"){const l=i.replace("#","");t=[parseInt(l.substr(0,2),16)/255,parseInt(l.substr(2,2),16)/255,parseInt(l.substr(4,2),16)/255],t=[Math.min(t[0]+.1,1),Math.min(t[1]+.15,1),Math.min(t[2]+.2,1)]}else Array.isArray(i)&&(t=i);let n=[],r=[],c=[];if(s.seeds){const l=C=>{let _=C;return()=>(_=(_*1664525+1013904223)%4294967296,_/4294967296)},h=C=>{const _=C()*Math.PI*2,E=Math.acos(C()*2-1),F=Math.sin(E)*Math.cos(_),V=Math.sin(E)*Math.sin(_);return[F,V]},f=l(s.seeds.planet_seed),j=4+Math.floor(f()*6);for(let C=0;C<j;C++)n.push({position:h(f),length:.1+f()*.2,width:.05+f()*.1,angle:f()*Math.PI*2});const x=l(s.seeds.shape_seed),S=3+Math.floor(x()*5);for(let C=0;C<S;C++)r.push({angle:x()*Math.PI*2,length:.2+x()*.6});const v=l(s.seeds.shape_seed+500),P=2+Math.floor(v()*3);for(let C=0;C<P;C++)c.push({position:h(v),radius:.15+v()*.25})}const a={crystals:e.crystals?.length>0?e.crystals:n,cracks:e.cracks?.length>0?e.cracks:r,iceCaps:e.ice_caps?.length>0?e.ice_caps:c,baseTextureIntensity:.3,crystalColor:new p(t[0]*.8,t[1]*.9,t[2]*1),crackColor:new p(t[0]*.3,t[1]*.3,t[2]*.4),iceCapColor:new p(t[0]*1.1,t[1]*1.1,t[2]*1)};return new Ve(a)}class St{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new wt,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,n=t*Math.cos(i),r=t*Math.sin(i),c=r*.8,a=new Se,l=new Float32Array([0,0,0,n,c,r]);a.setAttribute("position",new le(l,3));const h=new tt({color:16776960,linewidth:5,transparent:!1});this.sunLine=new it(a,h),this.debugGroup.add(this.sunLine);const f=e+Math.PI,j=t*.7,x=j*Math.cos(f),S=0,v=j*Math.sin(f),P=new oe(this.planetRadius*.15,16,16),C=new ye({color:16776960,transparent:!1,opacity:1}),_=new ee(P,C);_.position.set(x,S,v),this.debugGroup.add(_),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new Se,n=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new le(n,3));const r=new tt({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new it(i,r),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,n=this.params.initialAngleRotation||0,r=e-t,c=2*Math.PI/i;return(n+r*c)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,n=this.sunLine.geometry,r=n.attributes.position.array;r[3]=i*Math.cos(t),r[4]=0,r[5]=i*Math.sin(t),n.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,n=i.attributes.position.array;n[0]=-t*Math.cos(e),n[1]=0,n[2]=-t*Math.sin(e),n[3]=t*Math.cos(e),n[4]=0,n[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function Ni(s,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:s.debug?.cosmic_origin_time||s.timing?.cosmic_origin_time||s.cosmicOriginTime,rotationPeriod:s.planet_info?.rotation_period||s.rotation_period_seconds||86400,initialAngleRotation:s.debug?.initial_angle_rotation||s.timing?.initial_angle_rotation||s.initialAngleRotation||0,planetRadius:e,orbitalAngle:s.timing?.orbital_angle||0,sunAngle:s.sun_angle||s.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new St(e,t)}class Ce{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return Ce.instance||(Ce.instance=new Ce),Ce.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,i)=>new Fe(e),fromPythonData:(e,t,i)=>{let n=[.4,.4,.45];const r=e.planet_info?.base_color||e.surface?.base_color;if(r&&typeof r=="string"){const c=r.replace("#","");n=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255]}else Array.isArray(r)&&(n=r);return new Fe({color:n,roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}}),this.registerEffect("gas_giant_bands",{create:(e,t,i)=>new De(i,e),fromPythonData:(e,t,i)=>Si(i,e)}),this.registerEffect("atmospheric_halo",{create:(e,t)=>new ke(t,e),fromPythonData:(e,t)=>Mi(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new Le(t,e),fromPythonData:(e,t)=>Ei(t,e.atmosphere||{})}),this.registerEffect("dense_atmosphere",{create:(e,t)=>new ze(t,e),fromPythonData:(e,t)=>Ai(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new Pt(t,e),fromPythonData:(e,t)=>Pi(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new yt(t,e),fromPythonData:(e,t)=>new yt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,i)=>new Oe(e),fromPythonData:(e,t,i)=>ji(e)}),this.registerEffect("icy_terrain",{create:(e,t,i)=>new Ve(e),fromPythonData:(e,t,i)=>Ri(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new St(t,e),fromPythonData:(e,t)=>Ni(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,n,r=0){const c=this.creators.get(e);if(!c)return console.warn(`Effect type '${e}' not registered`),null;try{const a=c.create(t,i,n);if(!a)return null;const l={id:`effect_${this.nextId++}`,type:e,effect:a,priority:r,enabled:!0};return this.effects.set(l.id,l),l}catch(a){return console.error(`Error creating effect '${e}':`,a),null}}createEffectFromPythonData(e,t,i,n,r=0){const c=this.creators.get(e);if(!c||!c.fromPythonData)return this.createEffect(e,t,i,n,r);try{const a=c.fromPythonData(t,i,n);if(!a)return null;const l={id:`effect_${this.nextId++}`,type:e,effect:a,priority:r,enabled:!0};return this.effects.set(l.id,l),l}catch(a){return console.error(`Error creating effect '${e}' from Python data:`,a),null}}createEffectsFromList(e,t,i){const n=[],r=e.sort((c,a)=>(c.priority||0)-(a.priority||0));for(const c of r){const a=this.createEffect(c.type,c.params,t,i,c.priority);a&&(a.enabled=c.enabled!==!1,n.push(a))}return n}createEffectsFromPythonPlanetData(e,t,i,n){const r=[];if(e.surface_elements){const c=e.surface_elements;if(c.effects_3d&&Array.isArray(c.effects_3d))for(const a of c.effects_3d){const l=this.createEffect(a.type,a.params,t,i,a.priority||0);l&&(r.push(l),l.effect.addToScene&&l.effect.addToScene(n,i.position))}switch(c.type==="rendering_commands"&&c.commands&&this.executeRenderingCommands(c.commands,n,i,t),c.type){case"gas_giant":const a=this.createEffectFromPythonData("gas_giant_bands",c,t,i,0);a&&r.push(a);break;case"metallic":case"metallic_3d":const l=this.createEffectFromPythonData("metallic_surface",{...e,surface:{...e.surface,base_color:e.planet_info?.base_color||e.surface?.base_color}},t,i,0);l&&r.push(l);break;case"rocky":const h=this.createEffectFromPythonData("rocky_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,i,0);h&&(r.push(h),h.effect.apply(i));break;case"icy":const f=this.createEffectFromPythonData("icy_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,i,0);f&&(r.push(f),f.effect.apply(i));break}}if(e.atmosphere){if(e.atmosphere.halo){const c=this.createEffectFromPythonData("atmospheric_halo",e,t,i,10);c&&(r.push(c),c.effect.addToScene(n,i.position))}if(e.atmosphere.streaks){const c=this.createEffectFromPythonData("atmospheric_streaks",e,t,i,20);c&&(r.push(c),c.effect.addToScene(n,i.position))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const c=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),a={...e.atmosphere};c==="oceanic"&&(a.opacity=Math.min(a.opacity||.3,.15),a.width=Math.min(a.width||15,8));const l=this.createEffectFromPythonData("dense_atmosphere",a,t,i,5);l&&(r.push(l),l.effect.addToScene(n,i.position))}}if(e.rings&&e.rings.has_rings){const c=this.createEffectFromPythonData("ring_system",e,t,i,1);c&&(r.push(c),c.effect.addToScene(n,i.position))}if(e.surface_elements?.has_fragmentation_zones){const c=this.createEffectFromPythonData("fragmentation",e,t,i,5);c&&(r.push(c),c.effect.addToScene(n,i.position))}{const c=this.createEffectFromPythonData("visual_debug_3d",e,t,i,100);c?(r.push(c),c.effect.addToScene(n,i.position)):console.error("❌ Failed to create debug effect!")}return r}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);i&&(i.enabled=t!==void 0?t:!i.enabled)}updateAllEffects(e,t){for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(n){console.error(`Error updating effect ${i.type}:`,n)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}executeRenderingCommands(e,t,i,n){e.forEach((r,c)=>{try{switch(r.command){case"apply_material":this.executeApplyMaterial(r,i);break;case"create_surface_element":this.executeCreateSurfaceElement(r,t,n);break;default:console.warn(`❓ Unknown command: ${r.command}`)}}catch(a){console.error(`❌ Error executing command ${c}:`,a)}})}executeApplyMaterial(e,t){const i=e.properties;if(e.material_type==="phong"){const n=new qt({color:new p(i.color),shininess:i.shininess||50,specular:new p(i.specular||"#222222"),transparent:i.transparent||!1,opacity:i.opacity||1});t.material=n}}executeCreateSurfaceElement(e,t,i){let n;switch(e.geometry.type){case"circle":n=new Qt(e.size*i*.1,e.geometry.segments||16);break;case"sphere":n=new oe(e.radius*i*.1,12,12);break;case"irregular_polygon":n=new Jt(0,.05*i,8);break;default:console.warn(`❓ Unknown geometry type: ${e.geometry.type}`);return}const r=e.color,c=new ye({color:new p(r[0],r[1],r[2]),opacity:r[3]||1,transparent:(r[3]||1)<1}),a=new ee(n,c);if(e.position){const l=this.normalizedToSphere(e.position,i*(1+(e.geometry.elevation||0)));a.position.copy(l),a.lookAt(new R(0,0,0))}t.add(a)}normalizedToSphere(e,t){const[i,n]=e,r=Math.acos(1-2*((n+1)/2)),c=2*Math.PI*((i+1)/2),a=t*Math.sin(r)*Math.cos(c),l=t*Math.cos(r),h=t*Math.sin(r)*Math.sin(c);return new R(a,l,h)}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const Ne=Ce.getInstance(),Te={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmospheric_halo:{intensity:1,falloff:2,scale:1.2,pulsation:!1},gas_giant_bands:{numBands:8,animationSpeed:1,turbulence:.5,stormIntensity:.7}};function Ti(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...Te.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmospheric_halo",params:{...Te.atmospheric_halo,color:[.6,.1,.9],scale:1.15},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"gas_giant_bands",params:Te.gas_giant_bands,priority:0},{type:"atmospheric_halo",params:{...Te.atmospheric_halo,color:[1,.6,.2],intensity:.8},priority:10});break;case"icy":e.push({type:"atmospheric_halo",params:{...Te.atmospheric_halo,color:[.5,.8,1],intensity:.6,scale:1.1},priority:10});break;default:e.push({type:"atmospheric_halo",params:{color:[.5,.5,.8],intensity:.5},priority:10});break}return e}const he={log:(s,e)=>{},warn:(s,e)=>{console.warn(`⚠️ [Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`❌ [Effects] ${s}`,e||"")},debug:(s,e)=>{}};new Date().toISOString();const Ii=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[i,n]=b.useState([]),[r,c]=b.useState({});b.useEffect(()=>{if(!s)return;const h=a(s);c(h),n(l(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=h)},[s,e]);function a(h){const f={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(h.planet_info&&h.surface_elements?f.hasValidStructure=!0:(h.planet_info||f.missingFields.push("planet_info"),h.surface_elements||f.missingFields.push("surface_elements")),h.surface_elements?.type==="oceanic"&&(f.oceanicData={hasAbstractLands:!!h.surface_elements.abstract_lands?.length,numGreenPatches:h.surface_elements.green_patches?.length||0,numClouds:h.surface_elements.clouds?.length||0,hasDepths:h.surface_elements.depths?.enabled||!1,baseColorIsBlue:h.planet_info?.base_color==="#0000FF",greenPatchColor:h.surface_elements.green_patches?.[0]?.color,issues:[]},f.oceanicData.numGreenPatches>15&&f.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),f.oceanicData.baseColorIsBlue||f.oceanicData.issues.push(`Color base no es azul puro: ${h.planet_info?.base_color}`),f.renderingIssues=f.oceanicData.issues),h.planet_info?.base_color&&h.planet_info?.type){const x={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[h.planet_info.type];x&&h.planet_info.base_color!==x?f.colorConsistency=`Inconsistente: esperado ${x}, recibido ${h.planet_info.base_color}`:f.colorConsistency="Correcto"}return f}function l(h){const f=[];if(!h.surface_elements?.type)return["No surface type defined"];const j=h.surface_elements.type.toLowerCase();switch(j){case"oceanic":f.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":f.push("RockyTerrainEffect");break;case"icy":f.push("IcyTerrainEffect");break;case"gas giant":f.push("GasGiantBandsEffect");break;default:f.push(`Generic effect for type: ${j}`)}return h.atmosphere?.density>0&&f.push("AtmosphericEffect"),h.rings&&f.push("RingSystemEffect"),f}return t?o.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[o.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),o.jsxs("div",{style:{marginBottom:"10px"},children:[o.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,o.jsx("br",{}),o.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,o.jsx("br",{}),o.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&o.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[o.jsx("strong",{children:"🌊 Oceanic Data:"}),o.jsx("br",{}),o.jsxs("span",{style:{color:r.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",r.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),o.jsx("br",{}),"Green Patches: ",r.oceanicData?.numGreenPatches,o.jsx("br",{}),"Clouds: ",r.oceanicData?.numClouds,o.jsx("br",{}),"Has Depths: ",r.oceanicData?.hasDepths?"Yes":"No",o.jsx("br",{}),r.oceanicData?.issues?.length>0&&o.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",o.jsx("br",{}),r.oceanicData.issues.map((h,f)=>o.jsxs("div",{children:["- ",h]},f))]})]}),o.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[o.jsx("strong",{children:"🎨 Effects Applied:"}),o.jsx("br",{}),i.map((h,f)=>o.jsxs("div",{style:{color:h.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",h]},f))]}),o.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function Di(s){b.useEffect(()=>{if(s&&s.surface_elements?.type==="oceanic"){s.surface_elements.green_patches?.length>0;const e=s.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[s])}const ki=({planetName:s,containerClassName:e="",width:t=800,height:i=600,autoRotate:n=!0,enableControls:r=!0,showDebugInfo:c=!1,planetData:a,cosmicOriginTime:l,initialAngleRotation:h,onDataLoaded:f,onEffectsCreated:j,onError:x})=>{const S=b.useRef(null),v=b.useRef(null),P=b.useRef(null),C=b.useRef(null),_=b.useRef(null),E=b.useRef(null),F=b.useRef(new ei),V=b.useRef(null),se=b.useRef(0),[W,ce]=b.useState(!0),[A,D]=b.useState(null),[M,ae]=b.useState(null),[J,O]=b.useState([]),[B,H]=b.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),U=b.useRef([]),te=b.useRef(0),ue=b.useRef(null),Me=Math.floor(Date.now()/1e3),[xe,I]=b.useState(0),ne=l||M?.timing?.cosmic_origin_time||Date.now()/1e3-3600,ge=Me-ne+xe;se.current=ge;const be=b.useCallback(()=>{if(!S.current||!P.current||!C.current)return;const d=S.current,m=d.clientWidth||400,u=d.clientHeight||400;P.current.setSize(m,u),C.current.aspect=m/u,C.current.updateProjectionMatrix()},[]),_e=async d=>{if(!(!_.current||!v.current)){he.log("Applying modular effects from API data",{planet:d.planet_info.name,type:d.planet_info.type});try{Ze();const m=Ne.createEffectsFromPythonPlanetData(d,1,_.current,v.current);O(m),U.current=m,j&&j(m),he.log(`Successfully applied ${m.length} modular effects`),Xe()}catch(m){he.error("Error applying modular effects",m),We()}}},He=b.useCallback(()=>{if(console.log("🔧 initializeThreeJS called with renderingData:",{hasRenderingData:!!M,initial_orbital_angle:M?.timing?.initial_orbital_angle}),!S.current)return!1;try{for(;S.current.firstChild;)S.current.removeChild(S.current.firstChild);console.log("🔧 Clearing references..."),v.current=null,C.current=null,P.current=null,_.current=null,k.current=null,window.orbitalCalculationLogged=!1,console.log("🔧 References cleared");const d=S.current,m=d.clientWidth||t||400,u=d.clientHeight||i||400;console.log("🔧 Creating scene...");const y=new ti;y.background=new p(1297),v.current=y,console.log("🔧 Scene created");const w=new ii(45,m/u,.1,1e4);w.position.set(0,80,120),w.lookAt(0,0,0),C.current=w;const g=new oi({antialias:!0,alpha:!0,powerPreference:"high-performance"});return g.setSize(m,u),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.shadowMap.enabled=!0,g.shadowMap.type=si,g.toneMapping=ai,g.toneMappingExposure=1.2,g.outputColorSpace=ni,S.current.appendChild(g.domElement),P.current=g,Et(y,null),console.log("🔧 Creating base planet..."),At(y),console.log("🔧 Base planet created. planetMeshRef.current:",!!_.current),r&&jt(w,g.domElement),!0}catch(d){return console.error("Error initializing Three.js:",d),!1}},[M,a,l]),Be=d=>{if(!d)return console.error("❌ calculateSunAngle: NO planetData provided!"),0;const m=d.sun_angle||d.lighting?.sun_angle;if(m!==void 0)return m;const u=d.timing?.current_orbital_angle||d.timing?.orbital_angle;return u??(console.error("❌ CRITICAL: orbital_angle missing for planet:",d.planet_info?.name),console.error("   Full timing data:",d.timing),0)},me=b.useRef(null),Ee=b.useRef(null),re=b.useRef(null),k=b.useRef(null),$e=d=>{d.castShadow=!0,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,d.shadow.camera.near=.5,d.shadow.camera.far=50,d.shadow.camera.left=-10,d.shadow.camera.right=10,d.shadow.camera.top=10,d.shadow.camera.bottom=-10},Ge=d=>{if(!me.current||!v.current){console.error("❌ Cannot update lighting: missing light references");return}const m=Be(d),u=10,y=m+Math.PI,w=Math.sin(m)*5,g=u*Math.cos(y),N=w,L=u*Math.sin(y);me.current.position.set(g,N,L),me.current.target.position.set(0,0,0),v.current.children.includes(me.current.target)||v.current.add(me.current.target),Ee.current&&Ee.current.position.set(-g*.5,0,-L*.5)},at=(d,m)=>{if(!a?.orbital_radius){console.warn("⚠️ No orbital_radius data for orbit line");return}const u=m?.timing?.max_orbital_radius;if(!u){console.warn("⚠️ No max_orbital_radius from backend, skipping orbit line");return}const g=20+a.orbital_radius/u*80;window.debugOrbitRadius=g,window.debugSystemMaxRadius=u,console.log(`✅ Orbit line created at radius: ${g.toFixed(2)} (max_system: ${u})`);const N=64,L=[];for(let X=0;X<=N;X++){const ie=X/N*Math.PI*2;L.push(new R(g*Math.cos(ie),0,g*Math.sin(ie)))}const G=new Se().setFromPoints(L),Z=new tt({color:7372944,transparent:!0,opacity:.4,linewidth:1}),Y=new it(G,Z);d.add(Y),k.current=Y},Mt=d=>{const u=new oe(3,32,32),y=new ye({color:16777028,transparent:!1,opacity:1}),w=new ee(u,y);w.position.set(0,0,0);const g=new oe(3*1.8,16,16),N=new ye({color:16777028,transparent:!0,opacity:.3}),L=new ee(g,N);w.add(L),d.add(w),re.current=w},Et=(d,m)=>{Mt(d);{const u=new mt(16777215,2);u.position.set(10,0,0),u.castShadow=!0,$e(u),d.add(u),me.current=u;const y=new mt(4482815,.05);y.position.set(-5,0,0),d.add(y),Ee.current=y;const w=new ri(2236996,.1);d.add(w);return}},At=d=>{const m=a?.diameter?a.diameter/15e3:1,u=Math.max(Math.min(m,4),1.5),y=new oe(u,128,64),w=new Ye({color:8421504,metalness:.1,roughness:.8,transparent:!1,opacity:1}),g=new ee(y,w);g.castShadow=!0,g.receiveShadow=!0,g.position.set(50,0,0),d.add(g),_.current=g},jt=(d,m)=>{const u=new hi(d,m);u.enableDamping=!0,u.dampingFactor=.05,u.minDistance=50,u.maxDistance=800,u.autoRotate=n,u.autoRotateSpeed=.1,u.enablePan=!0,u.enableZoom=!0,u.target.set(0,0,0),E.current=u},Rt=b.useCallback(async()=>{if(console.log("🚀 loadPlanetDataOnly called with planetName:",s),window.isLoadingPlanetData){console.log("⚠️ Already loading planet data, skipping...");return}window.isLoadingPlanetData=!0;try{ce(!0),D(null),he.log("Loading planet data from API",{planetName:s});const d="/api/planet/rendering-data";console.log("🔗 Fetching API URL:",d),console.log("⏳ Starting fetch...");const m=await fetch(d);if(console.log("📡 Fetch completed, status:",m.status),!m.ok)throw new Error(`HTTP error! status: ${m.status}`);console.log("📄 Parsing JSON...");const u=await m.json();if(console.log("✅ JSON parsed, success:",u.success),!u.success)throw new Error(u.error||"Failed to fetch planet data");const y=u.planet_data,w=u.timing,g={planet_info:{name:y.name,type:y.planet_type,base_color:"#808080",radius:y.diameter/15e3},timing:{cosmic_origin_time:w.cosmic_origin_time,current_time_seconds:w.current_time_seconds,elapsed_time:w.elapsed_time,initial_orbital_angle:y.initial_orbital_angle,current_orbital_angle:y.current_orbital_angle,max_orbital_radius:w.max_orbital_radius,system_max_orbital_radius:y.system_max_orbital_radius},original_planet_data:y};return ae(g),console.log("💾 setRenderingData called with:",{planet_info:g.planet_info,timing:g.timing,hasTimingData:!!g.timing,initial_orbital_angle:g.timing?.initial_orbital_angle}),he.log("API data loaded successfully",{planet:g.planet_info.name,type:g.planet_info.type,hasEffects:!!g.surface_elements}),f&&f(g),g}catch(d){const m=d instanceof Error?d.message:"Unknown error";return console.error("❌ Error loading planet data:",m),console.error("❌ Full error object:",d),D(m),x&&x(m),null}finally{ce(!1),window.isLoadingPlanetData=!1}},[s,f,x]);b.useCallback(async()=>{if(console.log("🚀 loadPlanetData called with planetName:",s),window.isLoadingPlanetData){console.log("⚠️ Already loading planet data, skipping...");return}window.isLoadingPlanetData=!0;try{ce(!0),D(null),he.log("Loading planet data from API",{planetName:s});const d="/api/planet/rendering-data";console.log("🔗 Fetching API URL:",d),console.log("⏳ Starting fetch...");const m=await fetch(d);if(console.log("📡 Fetch completed, status:",m.status),!m.ok)throw new Error(`HTTP error! status: ${m.status}`);console.log("📄 Parsing JSON...");const u=await m.json();if(console.log("✅ JSON parsed, success:",u.success),!u.success)throw new Error(u.error||"Failed to fetch planet data");const y=u.planet_data,w=u.timing,g={planet_info:{name:y.name,type:y.planet_type,base_color:"#808080",radius:y.diameter/15e3},timing:{cosmic_origin_time:w.cosmic_origin_time,current_time_seconds:w.current_time_seconds,elapsed_time:w.elapsed_time,initial_orbital_angle:y.initial_orbital_angle,current_orbital_angle:y.current_orbital_angle,max_orbital_radius:w.max_orbital_radius,system_max_orbital_radius:y.system_max_orbital_radius},original_planet_data:y};ae(g),console.log("💾 setRenderingData called with:",{planet_info:g.planet_info,timing:g.timing,hasTimingData:!!g.timing,initial_orbital_angle:g.timing?.initial_orbital_angle}),he.log("API data loaded successfully",{planet:g.planet_info.name,type:g.planet_info.type,hasEffects:!!g.surface_elements}),Ge(g),k.current&&v.current&&(v.current.remove(k.current),k.current.geometry.dispose(),k.current.material.dispose(),k.current=null),at(v.current,g),await _e(g),f&&f(g)}catch(d){const m=d instanceof Error?d.message:"Unknown error";console.error("❌ Error loading planet data:",m),console.error("❌ Full error object:",d),D(m),x&&x(m),We()}finally{ce(!1),window.isLoadingPlanetData=!1}},[s,a,l,h]);const nt=b.useCallback(()=>{if(!M||!_.current){console.log("⚠️ Cannot update planet position: missing renderingData or planetMesh");return}const d=a?.orbital_period_seconds||365.25*24*3600,m=2*Math.PI/d,u=M.timing?.initial_orbital_angle||0,y=Date.now()/1e3,w=0,g=l||M.timing?.cosmic_origin_time||Date.now()/1e3-3600,N=y-g+w,L=(u+N*m)%(2*Math.PI),G=M.timing?.max_orbital_radius||100,Y=20+M.planet_info?.orbital_radius/G*80,X=Y,ie=Y*Math.cos(L),Q=X*Math.sin(L);_.current.position.x=ie,_.current.position.z=Q,_.current.position.y=0,console.log("✅ Planet position updated with API data:",{name:M.planet_info?.name,initial_orbital_angle:u,angleOrbit:L,position:{x:ie.toFixed(2),z:Q.toFixed(2)},source:"API renderingData"})},[M,a,l]),Nt=b.useCallback(async d=>{console.log("🎨 applyAPIDataToScene called");const m=d||M;if(!m){console.log("⚠️ No rendering data available, skipping scene application");return}if(!v.current){console.log("⚠️ No scene available, skipping scene application");return}try{console.log("🔧 Applying API data to scene:",{planet:m.planet_info.name,initial_orbital_angle:m.timing?.initial_orbital_angle,max_orbital_radius:m.timing?.max_orbital_radius}),Ge(m),k.current&&v.current&&(v.current.remove(k.current),k.current.geometry.dispose(),k.current.material.dispose(),k.current=null),at(v.current,m),window.comparedAPIs||(Tt(),window.comparedAPIs=!0),window.systemPlanetsData&&It(v.current),await _e(m)}catch(u){console.error("❌ Error applying API data to scene:",u),We()}},[M]),We=()=>{if(!(!v.current||!_.current)){he.warn("Applying fallback effects");try{Ze();const d=Ti("generic"),m=Ne.createEffectsFromList(d,1,_.current);m.forEach(u=>{u.effect.addToScene&&v.current&&_.current&&u.effect.addToScene(v.current,_.current.position)}),U.current=m,O(m),Xe()}catch(d){he.error("Error applying fallback effects",d)}}},Ze=()=>{U.current.forEach(d=>{try{d.effect.dispose&&d.effect.dispose()}catch(m){console.error("Error disposing effect:",m)}}),U.current=[],O([])},Tt=async()=>{try{console.log("🔍 COMPARING Planet API vs System API...");const m=await(await fetch("/api/planet/rendering-data")).json(),y=await(await fetch("/api/system/rendering-data")).json();if(m.success&&y.success){const w=y.system_data.planets.find(G=>G.name.toLowerCase()===s.toLowerCase()),g={endpoint:"/api/planet/rendering-data",initial_orbital_angle:m.planet_data?.initial_orbital_angle,orbital_radius:m.planet_data?.orbital_radius,cosmic_origin_time:m.timing?.cosmic_origin_time},N={endpoint:"/api/system/rendering-data",initial_orbital_angle:w?.initial_orbital_angle,orbital_radius:w?.orbital_radius,cosmic_origin_time:y.system_data?.timing?.cosmic_origin_time},L={angle_diff:Math.abs((m.planet_data?.initial_orbital_angle||0)-(w?.initial_orbital_angle||0)),radius_diff:Math.abs((m.planet_data?.orbital_radius||0)-(w?.orbital_radius||0)),time_diff:Math.abs((m.timing?.cosmic_origin_time||0)-(y.system_data?.timing?.cosmic_origin_time||0))};console.log("🎯 API COMPARISON for",s),console.log("📊 Planet API:",g),console.log("🌌 System API:",N),console.log("⚖️ Differences:",L),window.systemPlanetsData=y.system_data.planets,window.systemTimingData=y.system_data.timing}}catch(d){console.error("❌ Error comparing APIs:",d)}},It=d=>{const m=window.systemPlanetsData,u=window.systemTimingData;if(!m||!u)return;console.log("🌟 Drawing ALL planets for comparison with System view:",m.length),m.forEach((w,g)=>{if(w.name.toLowerCase()===s.toLowerCase())return;const N=new oe(2,16,16),L=new li({color:g%2===0?4473924:6710886}),G=new ee(N,L),X=20+w.orbital_radius/u.max_orbital_radius*80,Q=Math.floor(Date.now()/1e3)-u.cosmic_origin_time,de=2*Math.PI/w.orbital_period_seconds,ve=(w.initial_orbital_angle+Q*de)%(2*Math.PI),Ae=X*Math.cos(ve),fe=X*Math.sin(ve);G.position.set(Ae,0,fe),G.name=`comparison-planet-${w.name}`,d.add(G),console.log(`🪐 Added comparison planet ${w.name} at (${Ae.toFixed(2)}, 0, ${fe.toFixed(2)})`)});const y=m.find(w=>w.name.toLowerCase().includes("tonnir"));if(y){const g=2*Math.PI/y.orbital_period_seconds,N=(y.initial_orbital_angle+1240487644*g)%(2*Math.PI),Z=20+y.orbital_radius/u.max_orbital_radius*80,Y=Z*Math.cos(N),X=Z*Math.sin(N),ie=new oe(3,16,16),Q=new ye({color:16711680}),de=new ee(ie,Q);de.position.set(Y,0,X),de.name="SYSTEM-EXACT-POSITION",d.add(de),console.log("🔴 SYSTEM EXACT MARKER placed at:",{name:y.name,systemCurrentTime:1240487644,systemAngleOrbit:(N*180/Math.PI).toFixed(2)+"°",systemPosition:{x:Y.toFixed(2),z:X.toFixed(2)}})}},rt=b.useCallback(()=>{V.current=requestAnimationFrame(rt);const d=performance.now(),m=F.current.getDelta();E.current&&E.current.update();try{Ne.updateAllEffects(m,_.current?.rotation.y)}catch(u){console.error("Error updating effects:",u)}if(window.orbitalCalculationLogged||(console.log("🔧 About to calculate orbital position. planetMeshRef.current:",!!_.current,"planetData:",!!a,"renderingData:",!!M),window.orbitalCalculationLogged=!0),_.current&&(a||M)){let u,y,w,g;const N=M;if(N){const K=N.original_planet_data;N.planet_info,u=K?.orbital_period_seconds||a?.orbital_period_seconds||365.25*24*3600,y=N.timing?.initial_orbital_angle||K?.initial_orbital_angle||a?.initial_orbital_angle||0,fe.toLowerCase().includes("tonnir")&&!window.orbitalAngleSourceLogged&&(console.log("🔍 ORBITAL ANGLE SOURCE DEBUG:",{"dataToUse.timing?.initial_orbital_angle":N.timing?.initial_orbital_angle,"apiData?.initial_orbital_angle":K?.initial_orbital_angle,"planetData?.initial_orbital_angle":a?.initial_orbital_angle,finalInitialOrbitalAngle:y,"dataToUse.timing full":N.timing,"apiData full":K}),window.orbitalAngleSourceLogged=!0),w=l||N.timing?.cosmic_origin_time||Date.now()/1e3-3600,g=K?.axial_tilt||a?.axial_tilt||0,actualPlanetName.toLowerCase().includes("tonnir")&&!window.planetApiDataLogged&&(console.log("🌍 PLANET - API Data vs DOM Data:",{name:K?.name||"unknown",source:"NEW_API_ENDPOINT",api_initial_orbital_angle:K?.initial_orbital_angle,dom_initial_orbital_angle:a?.initial_orbital_angle,finalInitialOrbitalAngle:y,api_orbital_radius:K?.orbital_radius,dom_orbital_radius:a?.orbital_radius,finalOrbitalRadius:Y,api_cosmic_origin_time:N.timing?.cosmic_origin_time,dom_cosmic_origin_time:l,system_max_orbital_radius:Z}),window.planetApiDataLogged=!0)}else if(a)u=a.orbital_period_seconds||365.25*24*3600,y=a.initial_orbital_angle||0,w=l||Date.now()/1e3-3600,g=a.axial_tilt||0;else return;const L=2*Math.PI/u;N&&fe.toLowerCase().includes("tonnir")&&!window.orbitalAngleDebugged&&(console.log("🔍 DEBUGGING initial_orbital_angle:",{from_timing:N.timing?.initial_orbital_angle,from_apiData:apiData?.initial_orbital_angle,from_planetData:a?.initial_orbital_angle,currentUsed:y}),window.orbitalAngleDebugged=!0);const G=(y+se.current*L)%(2*Math.PI),Z=N.timing?.max_orbital_radius||N.timing?.system_max_orbital_radius,Y=apiData?.orbital_radius||a?.orbital_radius;if(!Z||!Y)return;const X=Y/Z,ie=80,Q=20+X*ie,de=apiData?.eccentricity_factor||a?.eccentricity_factor||.1,ve=Q,Ae=ve*Math.sqrt(1-de*de);if(window.debugOrbitRadius&&!window.orbitChecked){const K=Math.abs(window.debugOrbitRadius-Q);K>.01?(console.error(`❌ CRITICAL: Planet not on orbit line! Difference: ${K.toFixed(2)}`),console.log("Line radius:",window.debugOrbitRadius,"Planet radius:",Q),console.log("Max system radius - Line:",window.debugSystemMaxRadius,"Planet:",Z)):console.log(`✅ Planet correctly orbiting at radius: ${Q.toFixed(2)}`),window.orbitChecked=!0}const fe=N?.planet_info?.name||a?.name||s,je=ve*Math.cos(G),Re=Ae*Math.sin(G);if(_.current.position.x=je,_.current.position.z=Re,_.current.position.y=0,fe.toLowerCase().includes("tonnir")&&!window.debugMarkersAdded&&v.current){const K=new oe(4,16,16),Lt=new ye({color:65280}),qe=new ee(K,Lt);qe.position.set(je,5,Re),qe.name="PLANET-VIEW-CALCULATED-POSITION",v.current.add(qe);const lt=1.14,ct=99.07,zt=new oe(5,16,16),Ft=new ye({color:16711680}),Je=new ee(zt,Ft);Je.position.set(lt,8,ct),Je.name="SYSTEM-VIEW-POSITION",v.current.add(Je),console.log("🟢 PLANET VIEW CALCULATED MARKER placed at:",{planetCurrentTime:se.current,planetAngleOrbit:(G*180/Math.PI).toFixed(2)+"°",calculatedPosition:{x:je.toFixed(2),z:Re.toFixed(2)},actualPlanetPosition:{x:"1.14",z:"99.07"}}),console.log("🔴 SYSTEM VIEW MARKER placed at:",{systemPosition:{x:lt.toFixed(2),z:ct.toFixed(2)},source:"From System view logged values"}),window.debugMarkersAdded=!0}E.current&&E.current.target.set(0,0,0);const Ke=fe.toLowerCase();Ke.includes("tonnir")&&(Ke.includes("md-1420")||Ke.includes("md_1420"))&&(window.tonnirLoggedInPlanet||(console.log("🔍 DETAILED CALCULATION COMPARISON:",{name:fe,"=== INPUT VALUES ===":"---",orbital_radius:Y,system_max_orbital_radius:Z,initial_orbital_angle:y,orbital_period_seconds:u,currentTimeRef:se.current,cosmic_origin_time:w,"=== INTERMEDIATE CALCULATIONS ===":"---",relativeOrbitRadius:(Y/Z).toFixed(6),scaleFactor:ie,orbitRadius:Q.toFixed(6),angleVelocityOrbit:L.toFixed(10),angleOrbit:G.toFixed(6),angleOrbitDegrees:(G*180/Math.PI).toFixed(2),eccentricity:de,semiMajorAxis:ve.toFixed(6),semiMinorAxis:Ae.toFixed(6),"=== POSITION RESULTS ===":"---",calculatedPosition:{x:je.toFixed(6),z:Re.toFixed(6)},expectedSystemPosition:{x:"1.14",z:"99.07"},calculationError:{x:Math.abs(je-1.14).toFixed(4),z:Math.abs(Re-99.07).toFixed(4)},"=== SYSTEM VIEW COMPARISON ===":"---",systemViewCurrentTime:"1240487644",ourCurrentTimeRef:se.current}),window.tonnirLoggedInPlanet=!0));const Dt=a?.rotation_period_seconds||86400,kt=2*Math.PI/Dt;_.current.rotation.y=se.current*kt%(2*Math.PI),_.current.rotation.z=g*(Math.PI/180)}if(U.current.forEach(u=>{u.effect.updateUniforms&&u.effect.updateUniforms(m)}),P.current&&v.current&&C.current){const u=performance.now();P.current.render(v.current,C.current);const y=performance.now()-u;if(d-te.current>5e3){const w=1e3/(d-te.current);Xe(),H(g=>({...g,frameRate:Math.round(w),renderTime:Math.round(y*100)/100})),te.current=d}}},[]),Xe=b.useCallback(()=>{const d=Ne.getStats();H(m=>({...m,activeEffects:d.activeEffects,enabledEffects:d.enabledEffects}))},[]);return b.useEffect(()=>{let d=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,(async()=>{try{if(!d)return;console.log("🔄 Step 1: Loading planet data from API...");const u=await Rt();if(!d)return;if(console.log("🔄 Step 2: Initializing ThreeJS with API data..."),!He()){d&&D("Failed to initialize 3D renderer");return}if(!d||(console.log("🔄 Step 3: Starting animation..."),rt(),S.current&&"ResizeObserver"in window&&(ue.current=new ResizeObserver(be),ue.current.observe(S.current)),window.addEventListener("resize",be),!d))return;console.log("🔄 Step 4: Applying API data to ThreeJS scene..."),u?await Nt(u):(console.log("❌ No API data available, applying fallback"),We())}catch(u){console.error("Error during ModularPlanetRenderer initialization:",u),d&&D(u instanceof Error?u.message:"Unknown initialization error")}})(),()=>{if(d=!1,V.current&&cancelAnimationFrame(V.current),ue.current&&ue.current.disconnect(),window.removeEventListener("resize",be),Ze(),E.current&&E.current.dispose(),re.current&&v.current&&(v.current.remove(re.current),re.current.geometry.dispose(),re.current.material.dispose(),re.current=null),k.current&&v.current&&(v.current.remove(k.current),k.current.geometry.dispose(),k.current.material.dispose(),k.current=null),P.current&&S.current)try{S.current.contains(P.current.domElement)&&S.current.removeChild(P.current.domElement),P.current.dispose()}catch(u){console.error("Error during cleanup:",u)}}},[]),b.useEffect(()=>{const d=setInterval(()=>{const m=Ne.getStats();H(u=>({...u,activeEffects:m.activeEffects,enabledEffects:m.enabledEffects}))},1e4);return()=>clearInterval(d)},[]),b.useEffect(()=>{M?(console.log("🎯 renderingData updated:",{hasData:!0,initial_orbital_angle:M.timing?.initial_orbital_angle,planet_name:M.planet_info?.name,planet_type:M.planet_info?.type,max_orbital_radius:M.timing?.max_orbital_radius}),v.current&&_.current&&(console.log("🔄 Recalculating planet position with updated renderingData..."),nt())):console.log("🎯 renderingData is null/undefined")},[M,nt]),Di(M),o.jsxs("div",{className:`relative ${e}`,children:[c&&M&&o.jsx(Ii,{planetData:M,showInPage:!0,showInConsole:!0}),o.jsx("div",{ref:S,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),W&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:o.jsxs("div",{className:"text-white text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),o.jsx("div",{children:"Loading planet..."})]})}),A&&o.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[o.jsx("strong",{children:"Error:"})," ",A]}),M&&!W&&o.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[o.jsx("h3",{className:"text-lg font-bold",children:M.planet_info.name}),o.jsx("p",{className:"text-sm opacity-80",children:M.planet_info.type}),o.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[J.length," effects active"]}),M.surface_elements?.description&&o.jsx("p",{className:"text-xs mt-2 opacity-60",children:M.surface_elements.description.appearance})]}),c&&o.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[o.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),o.jsxs("div",{children:["Frame Rate: ",B.frameRate," FPS"]}),o.jsxs("div",{children:["Render Time: ",B.renderTime,"ms"]}),o.jsxs("div",{children:["Active Effects: ",B.activeEffects]}),o.jsxs("div",{children:["Enabled Effects: ",B.enabledEffects]}),o.jsxs("div",{className:"mt-2",children:[o.jsx("div",{className:"font-semibold",children:"Effects:"}),J.map(d=>o.jsxs("div",{className:"ml-2",children:[d.type," (",d.enabled?"ON":"OFF",")"]},d.id))]})]})]})};class Li extends xt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?o.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:o.jsxs("div",{className:"text-center p-4",children:[o.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),o.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const zi=s=>o.jsx(Li,{children:o.jsx(ki,{...s})}),Fi=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:n})=>{const r=b.useRef(null),c=b.useRef(null),[a,l]=b.useState("Aligning Stargate..."),[h,f]=b.useState(!1),[j,x]=b.useState(!1),[S,v]=b.useState(!1),[P,C]=b.useState(!0),[_,E]=b.useState(!0),[F,V]=b.useState(null),[se,W]=b.useState(null);b.useEffect(()=>{const A=document.createElement("style");return A.textContent=`
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
    `,document.head.appendChild(A),()=>{document.head.removeChild(A)}},[]),b.useEffect(()=>{const A=r.current;if(!A)return;const D=A.getContext("2d");if(!D)return;let M=[];const ae=800;let J,O;const B=800;let H,U=.5;function te(){const I=A?.parentElement;if(!I||!A)return;const ne=I.clientWidth,ge=I.clientHeight;A.width=Math.min(ne,B),A.height=Math.min(ge,B),J=A.width/2,O=A.height/2}function ue(){te(),M=[];for(let I=0;I<ae;I++)M.push({x:Math.random()*(A?.width||800),y:Math.random()*(A?.height||800),z:Math.random()*(A?.width||800),o:Math.random()});Me()}function Me(){!A||!D||(D.clearRect(0,0,A.width,A.height),M.forEach(I=>{I.z-=U,I.z<=0&&(I.z=A.width,I.x=Math.random()*A.width,I.y=Math.random()*A.height,I.o=Math.random());const ne=A.width/I.z,ge=(I.x-J)*ne+J,be=(I.y-O)*ne+O,_e=2*ne;D.beginPath(),D.fillStyle=`rgba(255, 255, 255, ${I.o})`,D.arc(ge,be,_e,0,2*Math.PI),D.fill()}),U<60&&(U+=1),H=requestAnimationFrame(Me))}ue();const xe=()=>te();return window.addEventListener("resize",xe),()=>{window.removeEventListener("resize",xe),H&&cancelAnimationFrame(H)}},[]),b.useEffect(()=>{if(e&&!P){const A=new Image;A.onload=()=>{c.current&&(c.current.src=e,x(!0),v(!0))},A.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{x(!0),v(!0)},1500)},A.src=e}else(P||!e)&&setTimeout(()=>{x(!0),v(!0)},1500)},[e,P]),b.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){l("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),f(!0);const D=(B,H)=>Array.from({length:H},()=>B[Math.floor(Math.random()*B.length)]).join(""),M=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let ae=0,J=0;const O=()=>{if(ae>=M.length){const H="Stargate system aligned";let U=0;l("");const te=()=>{U<H.length?(l(H.substring(0,U+1)),U++,setTimeout(te,30)):f(!1)};te();return}const B=M[ae];l(D(B.chars,32)),J++,J>=B.iterations&&(ae++,J=0),setTimeout(O,B.duration)};O()},[]);const ce=()=>{C(!P),P||(x(!0),v(!0))};return o.jsxs("div",{className:"h-full flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),_&&o.jsx("div",{className:"flex items-center gap-2",children:o.jsx("button",{onClick:ce,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${P?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:P?"2D View":"3D View"})})]}),o.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[o.jsx("canvas",{ref:r,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${S?"opacity-0":"opacity-100"}`,style:{filter:S?"blur(50px)":"none"}}),P&&j&&t&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${j?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:o.jsx(zi,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:n,onDataLoaded:A=>{V(A)},onError:A=>{W(A),console.error("❌ Planet rendering error:",A)}})}),!P&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${j?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:j&&e?o.jsx("div",{className:"w-full h-full flex items-center justify-center",children:o.jsx(Wt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:o.jsx("img",{ref:c,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):o.jsx("img",{ref:c,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),_&&o.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:P?"🌍 3D":"🖼️ 2D"})]}),o.jsxs("div",{className:"text-center mt-auto",children:[o.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${h?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[o.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),a]}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),o.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",P&&F&&o.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",F.planet_info?.type," Planet",F.atmosphere&&o.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),F.rings?.has_rings&&o.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),P&&se&&o.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Oi=({currentPlanet:s,system:e,galaxy:t,systemPlanets:i})=>{const[n,r]=b.useState(null),[c,a]=b.useState(null),[l,h]=b.useState(!1),[f,j]=b.useState(!1),[x,S]=b.useState(!0);b.useEffect(()=>{if(i&&i.length>0){const C=i.findIndex(_=>_.name.toLowerCase()===s.toLowerCase());C!==-1?(C>0?(r(i[C-1].name.toLowerCase()),h(!0)):e.index>0?(r("__prev_system__"),h(!0)):h(!1),C<i.length-1?(a(i[C+1].name.toLowerCase()),j(!0)):(a("__next_system__"),j(!0))):(h(!1),j(!1))}else h(!1),j(!1);S(!1)},[s,e.index,i]);const v=async()=>{const C=t.coordinates.join(",");if(n==="__prev_system__")try{const _=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(_.ok){const E=await _.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const V=E.system.planets[E.system.planets.length-1].name.toLowerCase();Ie(C,e.index-1,V,E.system.planets),et(C,e.index-1),window.location.href=`/planet/${V}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else n&&(Ie(C,e.index,n,i),window.location.href=`/planet/${n}`)},P=async()=>{const C=t.coordinates.join(",");if(c==="__next_system__")try{const _=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(_.ok){const E=await _.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const V=E.system.planets[0].name.toLowerCase();Ie(C,e.index+1,V,E.system.planets),et(C,e.index+1),window.location.href=`/planet/${V}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else c&&(Ie(C,e.index,c,i),window.location.href=`/planet/${c}`)};return x?null:o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("button",{onClick:v,disabled:!l,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${l?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),o.jsx("button",{onClick:P,disabled:!f,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${f?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Vi=({planet:s,system:e,galaxy:t,planet_url:i,version:n,image_url:r,cosmic_origin_time:c,initial_angle_rotation:a})=>{const[l]=b.useState(t.coordinates.join(","));b.useEffect(()=>{document.body.setAttribute("data-coordinates",l),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),Ie(l,e.index,s.name,e.planets||[]),et(l,e.index)},[l,e.index,s.name]);const h=x=>x.replace(/_/g," "),f=x=>x.replace(/_/g," "),j=x=>x.replace(/_/g," ");return o.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[o.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),o.jsxs("div",{className:"relative z-10",children:[o.jsx(Bt,{}),o.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:o.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",h(s.name),"'"]})}),o.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",f(e.name),"' - Galaxy '",j(t.name),"'"]}),o.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),o.jsx(Oi,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:o.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[o.jsx("div",{className:"order-1 lg:order-1",children:o.jsx(Fi,{planetUrl:i,imageUrl:r,planet:s,cosmicOriginTime:c,initialAngleRotation:a})}),o.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),o.jsx("div",{className:"order-2 lg:order-2",children:o.jsx(ci,{planet:s,system:e,galaxy:t,cosmicOriginTime:c,initialAngleRotation:a})})]})}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:o.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:o.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",f(e.name),"'"]})})})]}),o.jsx(Ot,{version:n})]}),o.jsx(Ut,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!s||!e||!t||!i){console.error("Missing required data elements");return}const n=JSON.parse(s.textContent||"{}"),r=JSON.parse(e.textContent||"{}"),c=JSON.parse(t.textContent||"{}"),a=JSON.parse(i.textContent||"{}"),l={planet:n,system:r,galaxy:c,planet_url:a.planet_url,version:a.version,image_url:a.image_url,cosmic_origin_time:a.cosmic_origin_time,initial_angle_rotation:a.initial_angle_rotation},h=document.getElementById("atlas-react-root");h&&Vt.createRoot(h).render(xt.createElement(Vi,l))}catch(s){console.error("Error initializing Planet React app:",s)}});
