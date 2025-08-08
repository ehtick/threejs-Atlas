import{r as f,j as n,R as yt,V as It,c as Dt}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Ot}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Lt,U as jt,m as Ae,c as qe,a as Ft}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as kt,V as O,n as Se,T as xe,Q as nt,l as at,o as ie,R as zt,p as Ut,q as Yt,e as we,r as J,s as se,N as je,t as Je,c as Ge,C as y,u as Gt,v as Qe,d as Te,F as ye,w as Bt,G as _t,x as _e,y as Vt,z as rt,L as lt,g as ct,M as $t,H as Wt,S as Ht,P as Zt,W as Kt,I as Xt,J as qt,K as Jt,D as ht,A as Qt}from"./atlas_C9iv-Mftr0ljdPynyVWic.js";const ei=({planet:s,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:o})=>{const[a,l]=f.useState(!1),r=g=>g.replace(/_/g," "),c=g=>{const S=g/86400;return S<30?`${S.toFixed(2)} days`:S<365?`${(S/30).toFixed(2)} months`:`${(S/365).toFixed(2)} years`},h=g=>{const S=g*9/5+32;return`${g.toFixed(1)}°C (${S.toFixed(1)}°F)`},m=g=>`${g.toExponential(2)} kg`,_=g=>g>=1e3?`${(g/1e3).toFixed(2)} km`:`${g.toFixed(2)} m`;return n.jsxs("div",{className:"h-full flex flex-col relative",children:[n.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),n.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[n.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),n.jsx(Lt,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),n.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),n.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),n.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[n.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),n.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),n.jsx("div",{className:"text-xs font-bold text-orange-300",children:m(s.mass)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),n.jsx("div",{className:"text-xs font-bold text-orange-300",children:_(s.diameter)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),n.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),n.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[n.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),n.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),n.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),n.jsx("div",{className:"text-xs font-bold text-cyan-300",children:c(s.orbital_period_seconds)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),n.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),n.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),n.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),n.jsx("div",{className:"text-xs font-bold text-red-300",children:h(s.surface_temperature)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),n.jsx("div",{className:"text-xs font-bold text-red-300",children:c(s.rotation_period_seconds)})]})]})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&n.jsx("button",{onClick:()=>l(!a),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:a?"▲ Less":"▼ All"})]}),n.jsx("div",{className:"flex flex-wrap gap-1",children:(a?s.elements:s.elements.slice(0,4)).map((g,S)=>n.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:g},S))})]})]}),n.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[n.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Status:"}),n.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Planet:"}),n.jsx("div",{className:"text-white truncate font-medium",children:r(s.name)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"System:"}),n.jsx("div",{className:"text-white truncate font-medium",children:r(e.name)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"System ID:"}),n.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),n.jsx("div",{className:"text-white truncate font-medium",children:r(t.name)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),n.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},dt={type:"change"},et={type:"start"},bt={type:"end"},Le=new zt,mt=new Ut,ti=Math.cos(70*Yt.DEG2RAD),k=new O,q=2*Math.PI,R={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ze=1e-6;class ii extends kt{constructor(e,t=null){super(e,t),this.state=R.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Se.ROTATE,MIDDLE:Se.DOLLY,RIGHT:Se.PAN},this.touches={ONE:xe.ROTATE,TWO:xe.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new nt,this._lastTargetPosition=new O,this._quat=new nt().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new at,this._sphericalDelta=new at,this._scale=1,this._panOffset=new O,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new O,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oi.bind(this),this._onPointerDown=si.bind(this),this._onPointerUp=ni.bind(this),this._onContextMenu=mi.bind(this),this._onMouseWheel=li.bind(this),this._onKeyDown=ci.bind(this),this._onTouchStart=hi.bind(this),this._onTouchMove=di.bind(this),this._onMouseDown=ai.bind(this),this._onMouseMove=ri.bind(this),this._interceptControlDown=ui.bind(this),this._interceptControlUp=fi.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dt),this.update(),this.state=R.NONE}update(e=null){const t=this.object.position;k.copy(t).sub(this.target),k.applyQuaternion(this._quat),this._spherical.setFromVector3(k),this.autoRotate&&this.state===R.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=q:i>Math.PI&&(i-=q),o<-Math.PI?o+=q:o>Math.PI&&(o-=q),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(k.setFromSpherical(this._spherical),k.applyQuaternion(this._quatInverse),t.copy(this.target).add(k),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const r=k.length();l=this._clampDistance(r*this._scale);const c=r-l;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const r=new O(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const h=new O(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(r),this.object.updateMatrixWorld(),l=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Le.origin.copy(this.object.position),Le.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Le.direction))<ti?this.object.lookAt(this.target):(mt.setFromNormalAndCoplanarPoint(this.object.up,this.target),Le.intersectPlane(mt,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ze||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ze||this._lastTargetPosition.distanceToSquared(this.target)>Ze?(this.dispatchEvent(dt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?q/60*this.autoRotateSpeed*e:q/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){k.setFromMatrixColumn(t,0),k.multiplyScalar(-e),this._panOffset.add(k)}_panUp(e,t){this.screenSpacePanning===!0?k.setFromMatrixColumn(t,1):(k.setFromMatrixColumn(t,0),k.crossVectors(this.object.up,k)),k.multiplyScalar(e),this._panOffset.add(k)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;k.copy(o).sub(this.target);let a=k.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,l=i.width,r=i.height;this._mouse.x=o/l*2-1,this._mouse.y=-(a/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(q*this._rotateDelta.x/t.clientHeight),this._rotateUp(q*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(q*this._rotateDelta.x/t.clientHeight),this._rotateUp(q*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(l,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function si(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function oi(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ni(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bt),this.state=R.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ai(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=R.DOLLY;break;case Se.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=R.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=R.ROTATE}break;case Se.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=R.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=R.PAN}break;default:this.state=R.NONE}this.state!==R.NONE&&this.dispatchEvent(et)}function ri(s){switch(this.state){case R.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case R.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case R.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function li(s){this.enabled===!1||this.enableZoom===!1||this.state!==R.NONE||(s.preventDefault(),this.dispatchEvent(et),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(bt))}function ci(s){this.enabled!==!1&&this._handleKeyDown(s)}function hi(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=R.TOUCH_ROTATE;break;case xe.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=R.TOUCH_PAN;break;default:this.state=R.NONE}break;case 2:switch(this.touches.TWO){case xe.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=R.TOUCH_DOLLY_PAN;break;case xe.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=R.TOUCH_DOLLY_ROTATE;break;default:this.state=R.NONE}break;default:this.state=R.NONE}this.state!==R.NONE&&this.dispatchEvent(et)}function di(s){switch(this._trackPointer(s),this.state){case R.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case R.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case R.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case R.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=R.NONE}}function mi(s){this.enabled!==!1&&s.preventDefault()}function ui(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fi(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ut{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class xt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:o,ring_outer_radius:a,tilt_factor:l,planet_radius:r,shape_seed:c}=e;if(!t||!i){console.warn("No ring data provided");return}const h=[...t.particles,...i.particles],m=h.length,_=new ut(c||12345),g=new we,S=new Float32Array(m*3),w=new Float32Array(m*3),N=new Float32Array(m),I=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],v=_.choice(I);for(let C=0;C<m;C++){const K=h[C],X=this.planetRadius/(r||200),le=(c||12345)+C,L=new ut(le),ce=K.distance*X,x=K.angle,W=ce*Math.sin(x),U=Math.asin((l||.2)*.5),P=W*Math.sin(U),te=W*Math.cos(U),Y=((a||400)-(o||200))*X*.4,H=L.uniform(-Y*.8,Y*.8),Z=L.uniform(-Y*.3,Y*.3),Q=L.uniform(-.08,.08),ee=ce+Z,he=x+Q;S[C*3]=ee*Math.cos(he),S[C*3+1]=P+H+this.planetRadius*.15,S[C*3+2]=te+L.uniform(-Y*.4,Y*.4),K.color[0]/255;const be=(K.distance-(o||200))/((a||400)-(o||200)),F=v.baseGray,ne=v.variation,de=L.uniform(-ne,ne),Ee=Math.max(.12,Math.min(.45,F+de)),me=.8+be*.4,Re=L.uniform(.85,1.15),Ie=L.uniform(0,1),Be=Ie<.03?L.uniform(1.1,1.3):1,re=Ee*me*Re*Be,ue=Math.max(.1,Math.min(.55,re));w[C*3]=ue,w[C*3+1]=ue,w[C*3+2]=ue;const fe=.15,z=L.uniform(.3,.7),Ve=Ie<.1?L.uniform(1.05,1.2):1;N[C]=K.size*fe*z*Ve}g.setAttribute("position",new J(S,3)),g.setAttribute("color",new J(w,3)),g.setAttribute("size",new J(N,1)),this.material=new se({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:je}),this.ringSystem=new Je(g,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,o=t.cosmicOriginTime||Date.now()/1e3,a=t.initialAngleRotation||0,r=Date.now()/1e3-o,c=2*Math.PI/i,h=(a+r*c)%(2*Math.PI);this.ringSystem.rotation.y=h}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function pi(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new xt(e,t)}class Pe{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new Ge(i,32,32);const o=new y(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new se({vertexShader:Pe.vertexShader,fragmentShader:Pe.fragmentShader,uniforms:{atmosphereColor:{value:o},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Qe,side:Gt,depthWrite:!1}),this.mesh=new Te(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new y(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function gi(s,e){console.log("🌫️ ATMOSPHERE CREATING - THIS SHOULD BE THE GLOW!",{type:"Fresnel",width:12});let t=[.7,.7,.7,.15],i=12;if(e){if(console.log("🌫️ Atmosphere received data:",e),e.color&&Array.isArray(e.color)){const a=e.color;t=[a[0],a[1],a[2],(a[3]||.15)*.7],console.log("🎨 Using API atmosphere color (Python normalized):",t)}else console.log("🎨 Using default atmosphere color (no API color found):",t);e.width&&(i=e.width)}else console.log("🎨 No atmosphere data found, using defaults:",{color:t,width:i});console.log("🌫️ Final Atmosphere params:",{color:t,width:i,planetRadius:s,opacity:t[3]});const o={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new Pe(s,o)}class ${seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,i=Math.acos(this.random()*2-1);return{x:e*Math.sin(i)*Math.cos(t),y:e*Math.sin(i)*Math.sin(t),z:e*Math.cos(i)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const T={PARTICLE_COUNT:{min:50,max:200},SPEED:{min:.05,max:.5},SIZE:{min:.5,max:2},OPACITY:{min:.2,max:.5},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05}};class Me{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new $(i);this.params={color:t.color||new y(16777215),particleCount:t.particleCount||Math.floor(o.uniform(T.PARTICLE_COUNT.min,T.PARTICLE_COUNT.max)),speed:t.speed||o.uniform(T.SPEED.min,T.SPEED.max),size:t.size||o.uniform(T.SIZE.min,T.SIZE.max),opacity:t.opacity||o.uniform(T.OPACITY.min,T.OPACITY.max),turbulence:t.turbulence||o.uniform(T.TURBULENCE.min,T.TURBULENCE.max),rotationSpeed:t.rotationSpeed||o.uniform(T.ROTATION_SPEED.min,T.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||o.uniform(T.MOVEMENT_AMPLITUDE.min,T.MOVEMENT_AMPLITUDE.max),seed:i},this.particleCount=this.params.particleCount,this.geometry=new we,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new Je(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),r=this.params.color instanceof y?this.params.color:new y(this.params.color),c=this.params.seed||Math.floor(Math.random()*1e6),h=new $(c);for(let m=0;m<this.particleCount;m++){const _=h.spherePosition(e*h.uniform(1,1.1));t[m*3]=_.x,t[m*3+1]=_.y,t[m*3+2]=_.z;const g=h.colorVariation({r:r.r,g:r.g,b:r.b});i[m*3]=g.r,i[m*3+1]=g.g,i[m*3+2]=g.b,o[m]=this.params.size*h.uniform(.75,1.25),a[m]=this.params.speed*h.uniform(.6,1.4),l[m]=h.random()*Math.PI*2}this.geometry.setAttribute("position",new J(t,3)),this.geometry.setAttribute("customColor",new J(i,3)),this.geometry.setAttribute("size",new J(o,1)),this.geometry.setAttribute("speed",new J(a,1)),this.geometry.setAttribute("phase",new J(l,1))}createMaterial(){return new se({vertexShader:Me.vertexShader,fragmentShader:Me.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:Qe,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){const t=this.material.uniforms.time.value;this.material.uniforms.time.value+=e,console.log(`✨ AtmosphereGlow time: ${t} → ${this.material.uniforms.time.value}`),this.particleSystem.rotation.y+=e*this.params.rotationSpeed,console.log(`🌀 AtmosphereGlow rotation.y: ${this.particleSystem.rotation.y}`)}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function ft(s,e,t){const i=e.streaks||{},o=t||Math.floor(Math.random()*1e6),a=new $(o+3e3),l=i.count||Math.floor(a.uniform(T.PARTICLE_COUNT.min,T.PARTICLE_COUNT.max)),r=i.speed||a.uniform(T.SPEED.min,T.SPEED.max),c=a.uniform(T.SIZE.min,T.SIZE.max),h=a.uniform(T.OPACITY.min,T.OPACITY.max),m=a.uniform(T.TURBULENCE.min,T.TURBULENCE.max),_=a.uniform(T.ROTATION_SPEED.min,T.ROTATION_SPEED.max),g=a.uniform(T.MOVEMENT_AMPLITUDE.min,T.MOVEMENT_AMPLITUDE.max);console.log(`🎲 AtmosphereGlow procedural: particles=${l}, speed=${r.toFixed(3)}, size=${c.toFixed(3)}, opacity=${h.toFixed(3)}, turbulence=${m.toFixed(3)}, rotation=${_.toFixed(3)}, amplitude=${g.toFixed(3)}`);const S={color:i.color?new y().setRGB(i.color[0],i.color[1],i.color[2]):new y(16777215),particleCount:l,speed:r,size:c,opacity:h,turbulence:m,seed:o,rotationSpeed:_,movementAmplitude:g};return new Me(s,S)}class ke{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;
    
    void main() {
      vPosition = position;
      vNormal = normal;
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;static baseFragmentShader=`
    uniform vec3 baseColor;
    uniform vec3 lightDirection;
    uniform float ambientStrength;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec2 vUv;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(lightDirection);
      
      // Cálculo de iluminación Lambertiana
      float dotNL = dot(normal, lightDir);
      
      // Suavizar la transición entre día y noche
      float dayNight = smoothstep(-0.2, 0.2, dotNL);
      
      // Color base con iluminación
      vec3 finalColor = baseColor;
      
      // Aplicar iluminación: oscuro en la parte trasera, iluminado en la frontal
      finalColor *= ambientStrength + (1.0 - ambientStrength) * dayNight;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;constructor(e,t=new y(16753920)){this.baseMesh=e;const i=e.geometry;this.planetRadius=i.parameters.radius||1;const o=t instanceof y?t:new y(t);console.log("🌍 PlanetLayerSystem: Creating base material with color:",o),this.baseMaterial=new se({vertexShader:ke.baseVertexShader,fragmentShader:ke.baseFragmentShader,uniforms:{baseColor:{value:o},lightDirection:{value:new O(1,1,1).normalize()},ambientStrength:{value:.15}},side:ye}),this.baseMesh.material=this.baseMaterial,console.log("✅ PlanetLayerSystem: Base material applied to mesh")}addEffectLayer(e,t,i=1.001,o){console.log(`🔷 PlanetLayerSystem: Adding layer "${e}" with scale ${i}`);const a=new Ge(this.planetRadius*i,64,64),l=new Te(a,t);return l.position.copy(this.baseMesh.position),l.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:l,material:t,layerObject:o}),this.scene?(this.scene.add(l),console.log(`✅ Layer "${e}" added to scene`)):console.log(`⚠️ Layer "${e}" created but scene not set yet`),l}createCloudBandsLayerMaterial(e){const t=`
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
    `;return new se({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new y(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new O(1,1,1).normalize()}},transparent:!0,blending:je,side:ye,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,o=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((a,l)=>{l<5&&(o[l*2]=a.x,o[l*2+1]=a.y)}),new se({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new y(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:o},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new O(1,1,1).normalize()}},transparent:!0,blending:je,side:ye,depthWrite:!1})}addToScene(e){console.log("🎬 PlanetLayerSystem: Adding to scene, existing layers:",this.effectLayers.length),this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&(e.add(t.mesh),console.log(`   ➕ Added layer "${t.name}" mesh to scene`))}),this.effectLayers.length===0&&console.log("   ℹ️ No effect layers to add yet")}update(e,t){this.effectLayers.length>0&&console.log(`🔄 PlanetLayerSystem updating ${this.effectLayers.length} layers, deltaTime: ${e}`),this.effectLayers.forEach(i=>{if(i.material.uniforms.time){const o=i.material.uniforms.time.value;i.material.uniforms.time.value+=e,console.log(`   ⏰ Layer "${i.name}" time: ${o} → ${i.material.uniforms.time.value}`)}if(t!==void 0&&i.material.uniforms.rotationAngle&&(i.material.uniforms.rotationAngle.value=t),i.layerObject&&i.layerObject.update)try{i.layerObject.update(e,t)}catch(o){console.error(`Error updating layer ${i.name}:`,o)}i.mesh&&i.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof y?e:new y(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.normalize())})}createGenericLayerMaterial(e,t,i,o=!0,a=je){return i.lightDirection||(i.lightDirection={value:new O(1,1,1).normalize()}),new se({vertexShader:e,fragmentShader:t,uniforms:i,transparent:o,blending:a,side:ye,depthWrite:!1})}convertEffectToLayer(e,t,i=1.001){if(t instanceof se){const o=t.clone();return o.transparent=!0,o.depthWrite=!1,o.uniforms.lightDirection||(o.uniforms.lightDirection={value:new O(1,1,1).normalize()}),this.addEffectLayer(e,o,i)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const M={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4},OPACITY:{min:.5,max:.9}};class yi{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new $(i),a=t.numBands||Math.floor(o.uniform(M.NUM_BANDS.min,M.NUM_BANDS.max));this.params={numBands:a,bandPositions:t.bandPositions||this.generateDefaultBandPositions(a,i),bandWidths:t.bandWidths||this.generateDefaultBandWidths(a,i),rotationAngle:t.rotationAngle||o.uniform(M.ROTATION_ANGLE.min,M.ROTATION_ANGLE.max),baseColor:t.baseColor||new y(16753920),bandColor:t.bandColor||new y(16747520),animationSpeed:t.animationSpeed||o.uniform(M.ANIMATION_SPEED.min,M.ANIMATION_SPEED.max),turbulence:t.turbulence||o.uniform(M.TURBULENCE.min,M.TURBULENCE.max),noiseScale:t.noiseScale||o.uniform(M.NOISE_SCALE.min,M.NOISE_SCALE.max),opacity:t.opacity||o.uniform(M.OPACITY.min,M.OPACITY.max),seed:i},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const i=new Array(20).fill(0),o=new $(t+12345);for(let a=0;a<e&&a<20;a++)i[a]=o.uniform(M.BAND_POSITIONS.min,M.BAND_POSITIONS.max);return i}generateDefaultBandWidths(e,t){const i=new Array(20).fill(0),o=new $(t+67890);for(let a=0;a<e&&a<20;a++)i[a]=o.uniform(M.BAND_WIDTHS.min,M.BAND_WIDTHS.max);return i}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}dispose(){}}function _i(s,e,t){const i=e.cloud_bands||{},o=t||Math.floor(Math.random()*1e6),a=new $(o+4e3),l={numBands:i.num_bands||Math.floor(a.uniform(M.NUM_BANDS.min,M.NUM_BANDS.max)),bandPositions:i.positions||void 0,bandWidths:i.widths||void 0,rotationAngle:i.rotation||a.uniform(M.ROTATION_ANGLE.min,M.ROTATION_ANGLE.max),baseColor:e.base_color?new y().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new y(16753920),bandColor:new y(16747520),animationSpeed:a.uniform(M.ANIMATION_SPEED.min,M.ANIMATION_SPEED.max),turbulence:e.turbulence||a.uniform(M.TURBULENCE.min,M.TURBULENCE.max),noiseScale:a.uniform(M.NOISE_SCALE.min,M.NOISE_SCALE.max),opacity:a.uniform(M.OPACITY.min,M.OPACITY.max),seed:o};return new yi(s,l)}const j={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:1,max:3},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.4,max:.8}};class bi{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new $(i);this.params={stormCenters:t.stormCenters||this.generateStormCenters(i),stormColor:t.stormColor||new y(9109504),stormIntensity:t.stormIntensity||o.uniform(j.STORM_INTENSITY.min,j.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||o.uniform(j.SPIRAL_SPEED.min,j.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||o.uniform(j.ANIMATION_SPEED.min,j.ANIMATION_SPEED.max),opacity:t.opacity||o.uniform(j.OPACITY.min,j.OPACITY.max),seed:i},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new $(e+5e3),i=Math.floor(t.uniform(j.STORM_COUNT.min,j.STORM_COUNT.max)),o=[];for(let a=0;a<i;a++)o.push({x:t.uniform(j.STORM_CENTERS.min,j.STORM_CENTERS.max),y:t.uniform(j.STORM_CENTERS.min,j.STORM_CENTERS.max)});return o}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function xi(s,e,t){const i=e.storms||{},o=t||Math.floor(Math.random()*1e6),a=new $(o+5e3),l={stormCenters:i.centers||void 0,stormColor:new y(9109504),stormIntensity:i.intensity||e.storm_intensity||a.uniform(j.STORM_INTENSITY.min,j.STORM_INTENSITY.max),spiralSpeed:i.spiral_speed||a.uniform(j.SPIRAL_SPEED.min,j.SPIRAL_SPEED.max),animationSpeed:a.uniform(j.ANIMATION_SPEED.min,j.ANIMATION_SPEED.max),opacity:a.uniform(j.OPACITY.min,j.OPACITY.max),seed:o};return new bi(s,l)}const G={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class ze{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new $(i),a=t.color instanceof y?t.color:t.color?new y(t.color):new y(9127187);this.params={color:a,roughness:t.roughness||o.uniform(G.ROUGHNESS.min,G.ROUGHNESS.max),rockDensity:t.rockDensity||o.uniform(G.ROCK_DENSITY.min,G.ROCK_DENSITY.max)*10,craterCount:t.craterCount||o.uniform(G.CRATER_COUNT.min,G.CRATER_COUNT.max),opacity:t.opacity||o.uniform(G.OPACITY.min,G.OPACITY.max),seed:i},this.material=new se({vertexShader:ze.vertexShader,fragmentShader:ze.fragmentShader,uniforms:{time:{value:0},rockColor:{value:a},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new O(1,1,1).normalize()}},transparent:!0,side:ye,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function vi(s,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),l=new $(a+8e3);return new ze(s,{color:o?new y(o):new y(9127187),roughness:i.roughness||l.uniform(G.ROUGHNESS.min,G.ROUGHNESS.max),rockDensity:i.rock_density||l.uniform(G.ROCK_DENSITY.min,G.ROCK_DENSITY.max)*10,craterCount:i.crater_count||l.uniform(G.CRATER_COUNT.min,G.CRATER_COUNT.max),opacity:l.uniform(G.OPACITY.min,G.OPACITY.max),seed:a})}const B={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9}};class Ue{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new $(i),a=t.color instanceof y?t.color:t.color?new y(t.color):new y(11591910);this.params={color:a,iceReflectivity:t.iceReflectivity||o.uniform(B.ICE_REFLECTIVITY.min,B.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||o.uniform(B.FROST_DENSITY.min,B.FROST_DENSITY.max),crackIntensity:t.crackIntensity||o.uniform(B.CRACK_INTENSITY.min,B.CRACK_INTENSITY.max),opacity:t.opacity||o.uniform(B.OPACITY.min,B.OPACITY.max),seed:i},this.material=new se({vertexShader:Ue.vertexShader,fragmentShader:Ue.fragmentShader,uniforms:{time:{value:0},iceColor:{value:a},iceReflectivity:{value:this.params.iceReflectivity},frostDensity:{value:this.params.frostDensity},crackIntensity:{value:this.params.crackIntensity},opacity:{value:this.params.opacity},lightDirection:{value:new O(1,1,1).normalize()}},transparent:!0,side:ye,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Si(s,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),l=new $(a+6e3);return new Ue(s,{color:o?new y(o):new y(11591910),iceReflectivity:i.ice_reflectivity||l.uniform(B.ICE_REFLECTIVITY.min,B.ICE_REFLECTIVITY.max),frostDensity:i.frost_density||l.uniform(B.FROST_DENSITY.min,B.FROST_DENSITY.max),crackIntensity:i.crack_intensity||l.uniform(B.CRACK_INTENSITY.min,B.CRACK_INTENSITY.max),opacity:l.uniform(B.OPACITY.min,B.OPACITY.max),seed:a})}const V={METALNESS:{min:.7,max:.95},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.6,max:.9}};class Ye{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new $(i),a=t.color instanceof y?t.color:t.color?new y(t.color):new y(8421504);this.params={color:a,metalness:t.metalness||o.uniform(V.METALNESS.min,V.METALNESS.max),roughness:t.roughness||o.uniform(V.ROUGHNESS.min,V.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||o.uniform(V.FRAGMENTATION_INTENSITY.min,V.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||o.uniform(V.OPACITY.min,V.OPACITY.max),seed:i},this.material=new se({vertexShader:Ye.vertexShader,fragmentShader:Ye.fragmentShader,uniforms:{time:{value:0},metalColor:{value:a},metalness:{value:this.params.metalness},roughness:{value:this.params.roughness},fragmentationIntensity:{value:this.params.fragmentationIntensity},opacity:{value:this.params.opacity},lightDirection:{value:new O(1,1,1).normalize()}},transparent:!0,side:ye,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function wi(s,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),l=new $(a+7e3);return new Ye(s,{color:o?new y(o):new y(8421504),metalness:i.metalness||l.uniform(V.METALNESS.min,V.METALNESS.max),roughness:i.roughness||l.uniform(V.ROUGHNESS.min,V.ROUGHNESS.max),fragmentationIntensity:i.fragmentation||l.uniform(V.FRAGMENTATION_INTENSITY.min,V.FRAGMENTATION_INTENSITY.max),opacity:l.uniform(V.OPACITY.min,V.OPACITY.max),seed:a})}class vt{particleSystem;material;geometry;params;particleCount;constructor(e,t={}){this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.8,brightness:t.brightness||1.5},this.particleCount=this.params.particleCount,this.geometry=new we,this.createParticles(e),this.createMaterial(),this.particleSystem=new Je(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),o=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),l=e*1.3;for(let r=0;r<this.particleCount;r++){const c=Math.random()*Math.PI*2,h=Math.random()*2-1,m=Math.random(),_=Math.acos(h),g=l*Math.cbrt(m);t[r*3]=g*Math.sin(_)*Math.cos(c),t[r*3+1]=g*Math.sin(_)*Math.sin(c),t[r*3+2]=g*Math.cos(_),i[r]=this.params.size*(.5+Math.random()*.5),o[r]=this.params.speed*(.8+Math.random()*.4),a[r]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new J(t,3)),this.geometry.setAttribute("size",new J(i,1)),this.geometry.setAttribute("speed",new J(o,1)),this.geometry.setAttribute("phase",new J(a,1))}createMaterial(){const e=this.params.color instanceof y?this.params.color:new y().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new Bt({color:e,size:this.params.size,opacity:this.params.opacity,transparent:!0,blending:Qe,sizeAttenuation:!0,vertexColors:!1}),this.material.color.multiplyScalar(this.params.brightness)}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){const t=Date.now()*.001,i=.9+.1*Math.sin(t*2);this.material.opacity=this.params.opacity*i}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof y?e.color:new y().setRGB(e.color[0],e.color[1],e.color[2]);this.material.color=t,this.material.color.multiplyScalar(this.params.brightness)}e.opacity!==void 0&&(this.material.opacity=e.opacity),e.size!==void 0&&(this.material.size=e.size)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ei(s,e){console.log("✨ AtmosphericStreaks received data:",e);const t=e.streaks||{},i={color:t.color||[.95,.95,1],particleCount:t.particleCount||100,speed:t.speed||1,size:2,opacity:.8,brightness:1.5};return console.log("✨ Final AtmosphericStreaks params:",i),new vt(s,i)}class pt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new y(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new _t,this.generateFragments()}generateFragments(){const e=new _e({color:this.params.color instanceof y?this.params.color:new y(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),o=new Te(i,e);this.positionFragment(o,t),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const a=this.params.size*(Math.random()*.5+.75);o.scale.set(a,a,a),o.userData={rotationAxis:new O(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(o),this.fragments.add(o)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],o=[];o.push(new O(0,0,0));for(let r=0;r<e;r++){const c=r/e*Math.PI*2,h=Math.random()*.5+.5,m=(Math.random()-.5)*.3;o.push(new O(Math.cos(c)*h,Math.sin(c)*h,m))}for(let r=1;r<=e;r++){const h=o[r].clone();h.z+=Math.random()*.4+.2,o.push(h)}for(const r of o)t.push(r.x,r.y,r.z);for(let r=1;r<e;r++)i.push(0,r,r+1);i.push(0,e,1);const a=o.length-e-1;for(let r=0;r<e-1;r++)i.push(a,a+r+2,a+r+1);i.push(a,a+1,a+e);for(let r=0;r<e;r++){const c=r+1,h=(r+1)%e+1,m=c+e,_=h+e;i.push(c,m,h),i.push(h,m,_)}const l=new we;return l.setAttribute("position",new Vt(t,3)),l.setIndex(i),l.computeVertexNormals(),l}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),o=(Math.random()-.5)*this.planetRadius*.5;return new O(Math.cos(t)*i,o,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new O(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new O(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const o=t.userData;t.rotateOnAxis(o.rotationAxis,o.rotationSpeed*e*this.params.animationSpeed);const a=Math.sin(Date.now()*.001+i)*.001;t.position.y+=a*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof y?e.color:new y(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof _e&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof _e&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof rt&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof rt&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class St{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new _t,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,o=t*Math.cos(i),a=t*Math.sin(i),l=a*.8,r=new we,c=new Float32Array([0,0,0,o,l,a]);r.setAttribute("position",new J(c,3));const h=new lt({color:16776960,linewidth:5,transparent:!1});this.sunLine=new ct(r,h),this.debugGroup.add(this.sunLine);const m=e+Math.PI,_=t*.7,g=_*Math.cos(m),S=0,w=_*Math.sin(m),N=new Ge(this.planetRadius*.15,16,16),I=new $t({color:16776960,transparent:!1,opacity:1}),v=new Te(N,I);v.position.set(g,S,w),this.debugGroup.add(v),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new we,o=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new J(o,3));const a=new lt({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new ct(i,a),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,o=this.params.initialAngleRotation||0,a=e-t,l=2*Math.PI/i;return(o+a*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,o=this.sunLine.geometry,a=o.attributes.position.array;a[3]=i*Math.cos(t),a[4]=0,a[5]=i*Math.sin(t),o.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,o=i.attributes.position.array;o[0]=-t*Math.cos(e),o[1]=0,o[2]=-t*Math.sin(e),o[3]=t*Math.cos(e),o[4]=0,o[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function Ci(s,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:s.debug?.cosmic_origin_time||s.timing?.cosmic_origin_time||s.cosmicOriginTime,rotationPeriod:s.planet_info?.rotation_period||s.rotation_period_seconds||86400,initialAngleRotation:s.debug?.initial_angle_rotation||s.timing?.initial_angle_rotation||s.initialAngleRotation||0,planetRadius:e,orbitalAngle:s.timing?.orbital_angle||0,sunAngle:s.sun_angle||s.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new St(e,t)}function Fe(s){const e=s.replace("#",""),t=parseInt(e.substr(0,2),16)/255,i=parseInt(e.substr(2,2),16)/255,o=parseInt(e.substr(4,2),16)/255;return new y(t,i,o)}function Ke(s){return s.length>=3?new y(s[0],s[1],s[2]):new y(.5,.5,.5)}function Xe(s){if(s.ocean_color){if(typeof s.ocean_color=="string")return Fe(s.ocean_color);if(Array.isArray(s.ocean_color))return Ke(s.ocean_color)}if(s.planet_info?.base_color){if(typeof s.planet_info.base_color=="string")return Fe(s.planet_info.base_color);if(Array.isArray(s.planet_info.base_color))return Ke(s.planet_info.base_color)}if(s.base_color){if(typeof s.base_color=="string")return Fe(s.base_color);if(Array.isArray(s.base_color))return Ke(s.base_color)}const e=s.planet_info?.type||s.type||"Unknown";return Ai(e)}function Ai(s){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[s]||"#FFFFFF";return Fe(t)}const Ni=!1;var wt=(s=>(s.METALLIC_SURFACE="metallic_surface",s.CLOUD_BANDS="cloud_bands",s.CLOUD_GYROS="cloud_gyros",s.ATMOSPHERE="atmosphere",s.ATMOSPHERE_GLOW="atmosphere_glow",s.ATMOSPHERIC_STREAKS="atmospheric_streaks",s.RING_SYSTEM="ring_system",s.FRAGMENTATION="fragmentation",s.ROCKY_TERRAIN="rocky_terrain",s.ICY_TERRAIN="icy_terrain",s.OCEAN_WAVES="ocean_waves",s.LAVA_FLOWS="lava_flows",s.CRYSTAL_FORMATIONS="crystal_formations",s.CLOUD_LAYERS="cloud_layers",s.STORM_SYSTEMS="storm_systems",s.VOLCANIC_ACTIVITY="volcanic_activity",s.AURORA="aurora",s.MAGNETIC_FIELD="magnetic_field",s.CITY_LIGHTS="city_lights",s.BIOLUMINESCENCE="bioluminescence",s.THERMAL_EMISSIONS="thermal_emissions",s.VISUAL_DEBUG_3D="visual_debug_3d",s))(wt||{});class ve{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return ve.instance||(ve.instance=new ve),ve.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new Me(t,e),fromPythonData:(e,t)=>ft(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new vt(t,e),fromPythonData:(e,t)=>Ei(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new Pe(t,e),fromPythonData:(e,t)=>gi(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new xt(t,e),fromPythonData:(e,t)=>pi(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new pt(t,e),fromPythonData:(e,t)=>new pt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new St(t,e),fromPythonData:(e,t)=>Ci(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,o,a=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const r=l.create(t,i,o);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:a,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}':`,r),null}}createEffectFromPythonData(e,t,i,o,a=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,i,o,a);try{const r=l.fromPythonData(t,i,o);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:a,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}' from Python data:`,r),null}}createEffectsFromList(e,t,i){const o=[],a=e.sort((l,r)=>(l.priority||0)-(r.priority||0));for(const l of a){const r=this.createEffect(l.type,l.params,t,i,l.priority);r&&(r.enabled=l.enabled!==!1,o.push(r))}return o}createEffectsFromPythonPlanetData(e,t,i,o){const a=[];try{console.log("🌍 EffectRegistry received Python data:",e),console.log("🔍 Surface elements:",e.surface_elements),console.log("🌫️ Atmosphere:",e.atmosphere),console.log("💍 Rings:",e.rings),console.log("🪐 Planet info:",e.planet_info);const l=Xe(e);if(console.log("🎨 Creating PlanetLayerSystem with base color:",l),this.layerSystem=new ke(i,l),e.surface_elements){const r=e.surface_elements;if(console.log("🏔️ Processing surface elements:",r.type,r),r.effects_3d&&Array.isArray(r.effects_3d)){console.log("🚀 ENCONTRADOS effects_3d:",r.effects_3d.length,"efectos"),console.log("🚀 LISTA COMPLETA DE effects_3d:",JSON.stringify(r.effects_3d,null,2));for(const c of r.effects_3d){console.log("🔍 PROCESANDO EFECTO:",c.type,"con params:",c.params);const h=this.createEffect(c.type,c.params,t,i,c.priority||0);h?(a.push(h),console.log("🎯 EFECTO CREADO:",c.type,"- será manejado por el sistema de capas"),h.effect.apply&&this.layerSystem&&console.log("🔄 Intentando convertir efecto a capa:",c.type),h.effect.addToScene&&h.effect.addToScene(o,i.position),console.log("✅ EFECTO AGREGADO Y APLICADO:",c.type)):console.error("❌ FALLO AL CREAR EFECTO:",c.type)}}else console.log("❌ NO HAY effects_3d O NO ES ARRAY:",typeof r.effects_3d,r.effects_3d);switch(console.log("🔍 Checking legacy surface type:",r.type),r.type){case"gas_giant":if(console.log("🌀 Creating Gas Giant effects with LAYER SYSTEM"),this.layerSystem){console.log("🌀 Adding cloud bands layer");const c=_i(this.layerSystem,{...r,base_color:l,turbulence:e.turbulence||r.turbulence},e.seeds?.shape_seed);console.log("🌪️ Adding cloud gyros layer");const h=xi(this.layerSystem,{...r,base_color:l,storm_intensity:e.storm_intensity||r.storm_intensity},e.seeds?.shape_seed+1e3),m={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:c,priority:0,enabled:!0};this.effects.set(m.id,m),a.push(m);const _={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:h,priority:1,enabled:!0};this.effects.set(_.id,_),a.push(_),console.log("✅ Gas Giant effects added to layer system")}else console.error("❌ PlanetLayerSystem not initialized!");break;case"metallic":case"metallic_3d":if(console.log("⚙️ Creating Metallic planet with LAYER SYSTEM"),this.layerSystem){const c=wi(this.layerSystem,e,e.seeds?.shape_seed);a.push({id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:c,priority:0,enabled:!0}),console.log("✅ Metallic surface layer added")}break;case"rocky":if(console.log("🪨 Creating Rocky planet with LAYER SYSTEM"),this.layerSystem){const c=vi(this.layerSystem,e,e.seeds?.shape_seed);a.push({id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:c,priority:0,enabled:!0}),console.log("✅ Rocky terrain layer added")}break;case"icy":if(console.log("❄️ Creating Icy planet with LAYER SYSTEM"),this.layerSystem){const c=Si(this.layerSystem,e,e.seeds?.shape_seed);a.push({id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:c,priority:0,enabled:!0}),console.log("✅ Icy terrain layer added")}break;case"oceanic":console.log("🌊 Oceanic planet detected - using generic rendering");break;default:if(console.log("❓ Unknown surface type:",r.type,"- applying base color"),i.material instanceof _e){const c=Xe(e);i.material.color.copy(c),console.log("✅ Applied base color to planet without specific effects:",c)}break}}else if(console.log("❌ No surface_elements found in Python data - applying base color"),i.material instanceof _e){const r=Xe(e);i.material.color.copy(r),console.log("✅ Applied base color to planet without surface_elements:",r)}if(e.atmosphere){if(console.log("🌫️ Applying atmospheric effects for:",e.planet_info?.type),e.atmosphere.halo&&e.atmosphere.halo.enabled!==!1){const r=this.createEffectFromPythonData(wt.ATMOSPHERIC_HALO,e,t,i,10);r&&(a.push(r),r.effect.addToScene(o,i.position),console.log("✅ Added atmospheric halo effect"))}if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const r=ft(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(r){const c={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:r,priority:20,enabled:!0};this.effects.set(c.id,c),a.push(c),r.addToScene(o,i.position),console.log("✅ Added atmosphere glow effect")}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const r=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),c={...e.atmosphere};r==="oceanic"&&(c.opacity=Math.min(c.opacity||.3,.15),c.width=Math.min(c.width||15,8));const h=this.createEffectFromPythonData("atmosphere",c,t,i,5);h&&(a.push(h),h.effect.addToScene(o,i.position),console.log("✅ Added atmosphere effect"))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){console.log("💍 Applying ring system for:",e.planet_info?.type,"rings data:",e.rings);const r=this.createEffectFromPythonData("ring_system",e,t,i,1);r?(a.push(r),r.effect.addToScene(o,i.position),console.log("✅ Added ring system effect")):console.warn("⚠️ Failed to create ring effect")}else console.log("❌ No rings for:",e.planet_info?.type,"rings:",e.rings);if(e.surface_elements?.has_fragmentation_zones){const r=this.createEffectFromPythonData("fragmentation",e,t,i,5);r&&(a.push(r),r.effect.addToScene(o,i.position))}return this.layerSystem&&(console.log("🎬 Adding PlanetLayerSystem to scene with all layers"),this.layerSystem.addToScene(o)),console.log("📊 EffectRegistry Summary:"),console.log(`   Total effects created: ${a.length}`),a.forEach((r,c)=>{console.log(`   ${c+1}. ${r.type} (${r.enabled?"enabled":"disabled"})`)}),a.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),a}catch(l){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",l),l}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);i&&(i.enabled=t!==void 0?t:!i.enabled)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.type==="atmosphere_glow"&&console.log(`🔄 Updating AtmosphereGlow with deltaTime: ${e}`),i.effect.update(e,t)}catch(o){console.error(`Error updating effect ${i.type}:`,o)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const Ce=ve.getInstance(),ge={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function Pi(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...ge.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmosphere",params:{...ge.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:ge.cloud_bands,priority:0},{type:"cloud_gyros",params:ge.cloud_gyros,priority:1},{type:"atmosphere",params:{...ge.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:ge.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...ge.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const oe={log:(s,e)=>{},warn:(s,e)=>{console.warn(`[Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`[Effects] ${s}`,e||"")},debug:(s,e)=>{}};new Date().toISOString();const Mi=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[i,o]=f.useState([]),[a,l]=f.useState({});f.useEffect(()=>{if(!s)return;const h=r(s);l(h),o(c(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=h)},[s,e]);function r(h){const m={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(h.planet_info&&h.surface_elements?m.hasValidStructure=!0:(h.planet_info||m.missingFields.push("planet_info"),h.surface_elements||m.missingFields.push("surface_elements")),h.surface_elements?.type==="oceanic"&&(m.oceanicData={hasAbstractLands:!!h.surface_elements.abstract_lands?.length,numGreenPatches:h.surface_elements.green_patches?.length||0,numClouds:h.surface_elements.clouds?.length||0,hasDepths:h.surface_elements.depths?.enabled||!1,baseColorIsBlue:h.planet_info?.base_color==="#0000FF",greenPatchColor:h.surface_elements.green_patches?.[0]?.color,issues:[]},m.oceanicData.numGreenPatches>15&&m.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),m.oceanicData.baseColorIsBlue||m.oceanicData.issues.push(`Color base no es azul puro: ${h.planet_info?.base_color}`),m.renderingIssues=m.oceanicData.issues),h.planet_info?.base_color&&h.planet_info?.type){const g={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[h.planet_info.type];g&&h.planet_info.base_color!==g?m.colorConsistency=`Inconsistente: esperado ${g}, recibido ${h.planet_info.base_color}`:m.colorConsistency="Correcto"}return m}function c(h){const m=[];if(!h.surface_elements?.type)return["No surface type defined"];const _=h.surface_elements.type.toLowerCase();switch(_){case"oceanic":m.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":m.push("RockyTerrainEffect");break;case"icy":m.push("IcyTerrainEffect");break;case"gas giant":m.push("GasGiantBandsEffect");break;default:m.push(`Generic effect for type: ${_}`)}return h.atmosphere?.density>0&&m.push("AtmosphericEffect"),h.rings&&m.push("RingSystemEffect"),m}return t?n.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[n.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),n.jsxs("div",{style:{marginBottom:"10px"},children:[n.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,n.jsx("br",{}),n.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,n.jsx("br",{}),n.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&n.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[n.jsx("strong",{children:"🌊 Oceanic Data:"}),n.jsx("br",{}),n.jsxs("span",{style:{color:a.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",a.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),n.jsx("br",{}),"Green Patches: ",a.oceanicData?.numGreenPatches,n.jsx("br",{}),"Clouds: ",a.oceanicData?.numClouds,n.jsx("br",{}),"Has Depths: ",a.oceanicData?.hasDepths?"Yes":"No",n.jsx("br",{}),a.oceanicData?.issues?.length>0&&n.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",n.jsx("br",{}),a.oceanicData.issues.map((h,m)=>n.jsxs("div",{children:["- ",h]},m))]})]}),n.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[n.jsx("strong",{children:"🎨 Effects Applied:"}),n.jsx("br",{}),i.map((h,m)=>n.jsxs("div",{style:{color:h.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",h]},m))]}),n.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function Ti(s){f.useEffect(()=>{if(s&&s.surface_elements?.type==="oceanic"){s.surface_elements.green_patches?.length>0;const e=s.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[s])}const Ne=2.5,gt=()=>{const s=45*Math.PI/180;return Ne/(Math.tan(s/2)*.5)},Ri=({planetName:s,containerClassName:e="",width:t=800,height:i=600,autoRotate:o=!0,enableControls:a=!0,showDebugInfo:l=!1,planetData:r,cosmicOriginTime:c,initialAngleRotation:h,onDataLoaded:m,onEffectsCreated:_,onError:g})=>{const S=f.useRef(null),w=f.useRef(null),N=f.useRef(null),I=f.useRef(null),v=f.useRef(null),C=f.useRef(null),K=f.useRef(new Wt),X=f.useRef(null),le=f.useRef(0),L=f.useRef(null),[ce,x]=f.useState(!0),[W,U]=f.useState(null),[P,te]=f.useState(null),[Y,H]=f.useState([]),[Z,Q]=f.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),ee=f.useRef([]),he=f.useRef(0),ae=f.useRef(null),be=Math.floor(Date.now()/1e3),[F,ne]=f.useState(0),de=c||P?.timing?.cosmic_origin_time||Date.now()/1e3-3600,Ee=be-de+F;le.current=Ee;const me=f.useCallback(()=>{if(!S.current||!N.current||!I.current)return;const d=S.current,p=d.clientWidth||400,u=d.clientHeight||400;N.current.setSize(p,u),I.current.aspect=p/u,I.current.updateProjectionMatrix()},[]),Re=async d=>{if(!(!v.current||!w.current)){oe.log("Applying modular effects from API data",{planet:d.planet_info.name,type:d.planet_info.type});try{$e();const p=Ce.createEffectsFromPythonPlanetData(d,Ne,v.current,w.current);H(p),ee.current=p,_&&_(p),oe.log(`Successfully applied ${p.length} modular effects`),We()}catch(p){oe.error("Error applying modular effects",p),De()}}},Ie=f.useCallback(()=>{if(!S.current)return!1;try{for(;S.current.firstChild;)S.current.removeChild(S.current.firstChild);w.current=null,I.current=null,N.current=null,v.current=null,z.current=null;const d=S.current,p=d.clientWidth||t||400,u=d.clientHeight||i||400,b=new Ht;b.background=new y(1297),w.current=b;const D=new Zt(45,p/u,.1,1e4),A=gt();console.log("🎯 Camera distance for exact Pillow proportions:",A),D.position.set(0,0,A),D.lookAt(0,0,0),I.current=D;const E=new Kt({antialias:!0,alpha:!0,powerPreference:"high-performance"});return E.setSize(p,u),E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.shadowMap.enabled=!0,E.shadowMap.type=Xt,E.toneMapping=qt,E.toneMappingExposure=1.2,E.outputColorSpace=Jt,S.current.appendChild(E.domElement),N.current=E,Et(b,null),Ct(b),a&&At(D,E.domElement),!0}catch(d){return console.error("Error initializing Three.js:",d),!1}},[P,r,c]),Be=d=>{if(!d)return 0;const p=d.sun_angle||d.lighting?.sun_angle;if(p!==void 0)return p;const u=d.timing?.current_orbital_angle||d.timing?.orbital_angle;return u??0},re=f.useRef(null),ue=f.useRef(null),fe=f.useRef(null),z=f.useRef(null),Ve=d=>{d.castShadow=!0,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,d.shadow.camera.near=.5,d.shadow.camera.far=50,d.shadow.camera.left=-10,d.shadow.camera.right=10,d.shadow.camera.top=10,d.shadow.camera.bottom=-10},tt=d=>{if(!re.current||!w.current)return;const p=Be(d),u=10,b=p+Math.PI,D=Math.sin(p)*5,A=u*Math.cos(b),E=D,pe=u*Math.sin(b);re.current.position.set(A,E,pe),re.current.target.position.set(0,0,0),w.current.children.includes(re.current.target)||w.current.add(re.current.target),ue.current&&ue.current.position.set(-A*.5,0,-pe*.5)},Et=(d,p)=>{{const u=new ht(16777215,2);u.position.set(-10,5,10),u.target.position.set(0,0,0),u.castShadow=!0,Ve(u),d.add(u),d.add(u.target),re.current=u;const b=new ht(16777215,.05);b.position.set(8,-3,-5),d.add(b),ue.current=b;const D=new Qt(2236996,.1);d.add(D);return}},Ct=d=>{console.log("🪐 Creating normalized planet with fixed radius:",Ne);const p=new Ge(Ne,128,64),u=new _e({color:8421504,metalness:.1,roughness:.8,transparent:!1,opacity:1}),b=new Te(p,u);b.castShadow=!0,b.receiveShadow=!0,b.position.set(0,0,0),d.add(b),v.current=b,console.log("🪐 Base planet created - color will be updated when API data arrives")},At=(d,p)=>{const u=new ii(d,p);u.enableDamping=!0,u.dampingFactor=.05;const b=gt();u.minDistance=b*.8,u.maxDistance=b*3,u.autoRotate=o,u.autoRotateSpeed=.5,u.enablePan=!0,u.enableZoom=!0,u.target.set(0,0,0),C.current=u},Nt=f.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{x(!0),U(null),oe.log("Loading planet data from API",{planetName:s});const p=await fetch("/api/planet/rendering-data");if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);const u=await p.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const b=u.planet_data,D=u.timing,A=u.rendering_data,E={planet_info:A?.planet_info||{name:b.name,type:b.planet_type,base_color:"#808080",radius:b.diameter/15e3},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:D.cosmic_origin_time,current_time_seconds:D.current_time_seconds,elapsed_time:D.elapsed_time,initial_orbital_angle:b.initial_orbital_angle,current_orbital_angle:b.current_orbital_angle,max_orbital_radius:D.max_orbital_radius,system_max_orbital_radius:b.system_max_orbital_radius},original_planet_data:b};return te(E),L.current=E,oe.log("API data loaded successfully",{planet:E.planet_info.name,type:E.planet_info.type,hasEffects:!!E.surface_elements,fullRenderingData:A}),console.log("🌍 Planet API Response:",u),console.log("🎨 Rendering Data:",A),console.log("🔧 Processed Data:",E),m&&m(E),E}catch(d){const p=d instanceof Error?d.message:"Unknown error";return U(p),g&&g(p),null}finally{x(!1),window.isLoadingPlanetData=!1}}},[s,m,g]);f.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{x(!0),U(null),oe.log("Loading planet data from API",{planetName:s});const p=await fetch("/api/planet/rendering-data");if(!p.ok)throw new Error(`HTTP error! status: ${p.status}`);const u=await p.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const b=u.planet_data,D=u.timing,A=u.rendering_data,E={planet_info:A?.planet_info||{name:b.name,type:b.planet_type,base_color:"#808080",radius:b.diameter/15e3},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:D.cosmic_origin_time,current_time_seconds:D.current_time_seconds,elapsed_time:D.elapsed_time,initial_orbital_angle:b.initial_orbital_angle,current_orbital_angle:b.current_orbital_angle,max_orbital_radius:D.max_orbital_radius,system_max_orbital_radius:b.system_max_orbital_radius},original_planet_data:b};te(E),L.current=E,oe.log("API data loaded successfully",{planet:E.planet_info.name,type:E.planet_info.type,hasEffects:!!E.surface_elements,fullRenderingData:A}),console.log("🌍 Full Load - API Response:",u),console.log("🎨 Full Load - Rendering Data:",A),console.log("🔧 Full Load - Processed Data:",E),tt(E),z.current&&w.current&&(w.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Re(E),m&&m(E)}catch(d){const p=d instanceof Error?d.message:"Unknown error";U(p),g&&g(p),De()}finally{x(!1),window.isLoadingPlanetData=!1}}},[s,r,c,h]);const it=f.useCallback(()=>{if(!P||!v.current)return;const d=r?.orbital_period_seconds||365.25*24*3600,p=2*Math.PI/d,u=P.timing?.initial_orbital_angle||0,b=Date.now()/1e3,D=0,A=c||P.timing?.cosmic_origin_time||Date.now()/1e3-3600,E=b-A+D,pe=(u+E*p)%(2*Math.PI),He=P.timing?.max_orbital_radius||100,Oe=20+P.planet_info?.orbital_radius/He*80,Mt=Oe,Tt=Oe*Math.cos(pe),Rt=Mt*Math.sin(pe);v.current.position.x=Tt,v.current.position.z=Rt,v.current.position.y=0},[P,r,c]),Pt=f.useCallback(async d=>{const p=d||P;if(p&&w.current)try{tt(p),z.current&&w.current&&(w.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Re(p)}catch(u){oe.error("Error in applyProceduralShadersFromAPI:",u),De()}},[P]),De=()=>{if(!(!w.current||!v.current)){oe.warn("Applying fallback effects for planet type:",r?.planet_type);try{$e(),v.current.material instanceof _e&&(v.current.material.color.setHex(6710886),console.log("⚠️ Applied fallback generic color - API should provide real colors"));try{const d=Pi("generic"),p=Ce.createEffectsFromList(d,Ne,v.current);p.forEach(u=>{u.effect.addToScene&&w.current&&v.current&&u.effect.addToScene(w.current,v.current.position)}),ee.current=p,H(p)}catch(d){console.warn("Could not create fallback effects, using basic material only:",d)}We()}catch(d){oe.error("Error applying fallback effects",d)}}},$e=()=>{ee.current.forEach(d=>{try{d.effect.dispose&&d.effect.dispose()}catch{}}),ee.current=[],H([])},st=f.useCallback(()=>{X.current=requestAnimationFrame(st);const d=performance.now(),p=K.current.getDelta();C.current&&C.current.update();try{Ce.updateAllEffects(p,v.current?.rotation.y)}catch{}if(v.current&&L.current){L.current.planet_info?.name;const u=L.current.original_planet_data,b=u?.orbital_period_seconds||365.25*24*3600,D=L.current.timing?.initial_orbital_angle||0;c||L.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const A=u?.axial_tilt||0,E=2*Math.PI/b;(D+le.current*E)%(2*Math.PI);const pe=L.current.timing?.max_orbital_radius||L.current.timing?.system_max_orbital_radius,He=u?.orbital_radius;if(!pe||!He)return;u?.eccentricity_factor,v.current.position.set(0,0,0);const ot=u?.rotation_period_seconds||86400,Oe=2*Math.PI/ot;v.current.rotation.y=le.current*Oe%(2*Math.PI),v.current.rotation.z=A*(Math.PI/180)}if(ee.current.forEach(u=>{u.effect.updateUniforms&&u.effect.updateUniforms(p)}),N.current&&w.current&&I.current){const u=performance.now();N.current.render(w.current,I.current);const b=performance.now()-u;if(d-he.current>5e3){const D=1e3/(d-he.current);We(),Q(A=>({...A,frameRate:Math.round(D),renderTime:Math.round(b*100)/100})),he.current=d}}},[]),We=f.useCallback(()=>{const d=Ce.getStats();Q(p=>({...p,activeEffects:d.activeEffects,enabledEffects:d.enabledEffects}))},[]);return f.useEffect(()=>{let d=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!d)return;const u=await Nt();if(!d)return;if(!Ie()){d&&U("Failed to initialize 3D renderer");return}if(!d||(st(),S.current&&"ResizeObserver"in window&&(ae.current=new ResizeObserver(me),ae.current.observe(S.current)),window.addEventListener("resize",me),!d))return;u?await Pt(u):De()}catch(u){d&&U(u instanceof Error?u.message:"Unknown initialization error")}})(),()=>{if(d=!1,L.current=null,X.current&&cancelAnimationFrame(X.current),ae.current&&ae.current.disconnect(),window.removeEventListener("resize",me),$e(),C.current&&C.current.dispose(),fe.current&&w.current&&(w.current.remove(fe.current),fe.current.geometry.dispose(),fe.current.material.dispose(),fe.current=null),z.current&&w.current&&(w.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),N.current&&S.current)try{S.current.contains(N.current.domElement)&&S.current.removeChild(N.current.domElement),N.current.dispose()}catch{}}},[]),f.useEffect(()=>{const d=setInterval(()=>{const p=Ce.getStats();Q(u=>({...u,activeEffects:p.activeEffects,enabledEffects:p.enabledEffects}))},1e4);return()=>clearInterval(d)},[]),f.useEffect(()=>{P&&w.current&&v.current&&it()},[P,it]),Ti(P),n.jsxs("div",{className:`relative ${e}`,children:[l&&P&&n.jsx(Mi,{planetData:P,showInPage:!0,showInConsole:!0}),n.jsx("div",{ref:S,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),ce&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:n.jsxs("div",{className:"text-white text-center",children:[n.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),n.jsx("div",{children:"Loading planet..."})]})}),W&&n.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[n.jsx("strong",{children:"Error:"})," ",W]}),P&&!ce&&n.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[n.jsx("h3",{className:"text-lg font-bold",children:P.planet_info.name}),n.jsx("p",{className:"text-sm opacity-80",children:P.planet_info.type}),n.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[Y.length," effects active"]}),P.surface_elements?.description&&n.jsx("p",{className:"text-xs mt-2 opacity-60",children:P.surface_elements.description.appearance})]}),l&&n.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[n.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),n.jsxs("div",{children:["Frame Rate: ",Z.frameRate," FPS"]}),n.jsxs("div",{children:["Render Time: ",Z.renderTime,"ms"]}),n.jsxs("div",{children:["Active Effects: ",Z.activeEffects]}),n.jsxs("div",{children:["Enabled Effects: ",Z.enabledEffects]}),n.jsxs("div",{className:"mt-2",children:[n.jsx("div",{className:"font-semibold",children:"Effects:"}),Y.map(d=>n.jsxs("div",{className:"ml-2",children:[d.type," (",d.enabled?"ON":"OFF",")"]},d.id))]})]})]})};class Ii extends yt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?n.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:n.jsxs("div",{className:"text-center p-4",children:[n.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),n.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const Di=s=>n.jsx(Ii,{children:n.jsx(Ri,{...s})}),Oi=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:o})=>{const a=f.useRef(null),l=f.useRef(null),[r,c]=f.useState("Aligning Stargate..."),[h,m]=f.useState(!1),[_,g]=f.useState(!1),[S,w]=f.useState(!1),[N,I]=f.useState(!0),[v,C]=f.useState(!0),[K,X]=f.useState(null),[le,L]=f.useState(null);f.useEffect(()=>{const x=document.createElement("style");return x.textContent=`
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
    `,document.head.appendChild(x),()=>{document.head.removeChild(x)}},[]),f.useEffect(()=>{const x=a.current;if(!x)return;const W=x.getContext("2d");if(!W)return;let U=[];const P=800;let te,Y;const H=800;let Z,Q=.5;function ee(){const F=x?.parentElement;if(!F||!x)return;const ne=F.clientWidth,de=F.clientHeight;x.width=Math.min(ne,H),x.height=Math.min(de,H),te=x.width/2,Y=x.height/2}function he(){ee(),U=[];for(let F=0;F<P;F++)U.push({x:Math.random()*(x?.width||800),y:Math.random()*(x?.height||800),z:Math.random()*(x?.width||800),o:Math.random()});ae()}function ae(){!x||!W||(W.clearRect(0,0,x.width,x.height),U.forEach(F=>{F.z-=Q,F.z<=0&&(F.z=x.width,F.x=Math.random()*x.width,F.y=Math.random()*x.height,F.o=Math.random());const ne=x.width/F.z,de=(F.x-te)*ne+te,Ee=(F.y-Y)*ne+Y,me=2*ne;W.beginPath(),W.fillStyle=`rgba(255, 255, 255, ${F.o})`,W.arc(de,Ee,me,0,2*Math.PI),W.fill()}),Q<60&&(Q+=1),Z=requestAnimationFrame(ae))}he();const be=()=>ee();return window.addEventListener("resize",be),()=>{window.removeEventListener("resize",be),Z&&cancelAnimationFrame(Z)}},[]),f.useEffect(()=>{if(e&&!N){const x=new Image;x.onload=()=>{l.current&&(l.current.src=e,g(!0),w(!0))},x.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{g(!0),w(!0)},1500)},x.src=e}else(N||!e)&&setTimeout(()=>{g(!0),w(!0)},1500)},[e,N]),f.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){c("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),m(!0);const W=(H,Z)=>Array.from({length:Z},()=>H[Math.floor(Math.random()*H.length)]).join(""),U=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let P=0,te=0;const Y=()=>{if(P>=U.length){const Z="Stargate system aligned";let Q=0;c("");const ee=()=>{Q<Z.length?(c(Z.substring(0,Q+1)),Q++,setTimeout(ee,30)):m(!1)};ee();return}const H=U[P];c(W(H.chars,32)),te++,te>=H.iterations&&(P++,te=0),setTimeout(Y,H.duration)};Y()},[]);const ce=()=>{I(!N),N||(g(!0),w(!0))};return n.jsxs("div",{className:"h-full flex flex-col",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),v&&n.jsx("div",{className:"flex items-center gap-2",children:n.jsx("button",{onClick:ce,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${N?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:N?"2D View":"3D View"})})]}),n.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[n.jsx("canvas",{ref:a,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${S?"opacity-0":"opacity-100"}`,style:{filter:S?"blur(50px)":"none"}}),N&&_&&t&&n.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${_?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:n.jsx(Di,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:o,onDataLoaded:x=>{X(x)},onError:x=>{L(x),console.error("❌ Planet rendering error:",x)}})}),!N&&n.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${_?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:_&&e?n.jsx("div",{className:"w-full h-full flex items-center justify-center",children:n.jsx(jt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:n.jsx("img",{ref:l,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):n.jsx("img",{ref:l,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),v&&n.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:N?"🌍 3D":"🖼️ 2D"})]}),n.jsxs("div",{className:"text-center mt-auto",children:[n.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${h?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[n.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[n.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),r]}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),n.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",N&&K&&n.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",K.planet_info?.type," Planet",K.atmosphere&&n.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),K.rings?.has_rings&&n.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),N&&le&&n.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Li=({currentPlanet:s,system:e,galaxy:t,systemPlanets:i})=>{const[o,a]=f.useState(null),[l,r]=f.useState(null),[c,h]=f.useState(!1),[m,_]=f.useState(!1),[g,S]=f.useState(!0);f.useEffect(()=>{if(i&&i.length>0){const I=i.findIndex(v=>v.name.toLowerCase()===s.toLowerCase());I!==-1?(I>0?(a(i[I-1].name.toLowerCase()),h(!0)):e.index>0?(a("__prev_system__"),h(!0)):h(!1),I<i.length-1?(r(i[I+1].name.toLowerCase()),_(!0)):(r("__next_system__"),_(!0))):(h(!1),_(!1))}else h(!1),_(!1);S(!1)},[s,e.index,i]);const w=async()=>{const I=t.coordinates.join(",");if(o==="__prev_system__")try{const v=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(v.ok){const C=await v.json();if(C.system&&C.system.planets&&C.system.planets.length>0){const X=C.system.planets[C.system.planets.length-1].name.toLowerCase();Ae(I,e.index-1,X,C.system.planets),qe(I,e.index-1),window.location.href=`/planet/${X}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else o&&(Ae(I,e.index,o,i),window.location.href=`/planet/${o}`)},N=async()=>{const I=t.coordinates.join(",");if(l==="__next_system__")try{const v=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(v.ok){const C=await v.json();if(C.system&&C.system.planets&&C.system.planets.length>0){const X=C.system.planets[0].name.toLowerCase();Ae(I,e.index+1,X,C.system.planets),qe(I,e.index+1),window.location.href=`/planet/${X}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(Ae(I,e.index,l,i),window.location.href=`/planet/${l}`)};return g?null:n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:w,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),n.jsx("button",{onClick:N,disabled:!m,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${m?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},ji=({planet:s,system:e,galaxy:t,planet_url:i,version:o,image_url:a,cosmic_origin_time:l,initial_angle_rotation:r})=>{const[c]=f.useState(t.coordinates.join(","));f.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),Ae(c,e.index,s.name,e.planets||[]),qe(c,e.index)},[c,e.index,s.name]);const h=g=>g.replace(/_/g," "),m=g=>g.replace(/_/g," "),_=g=>g.replace(/_/g," ");return n.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[n.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),n.jsxs("div",{className:"relative z-10",children:[n.jsx(Ot,{}),n.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:n.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",h(s.name),"'"]})}),n.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",m(e.name),"' - Galaxy '",_(t.name),"'"]}),n.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),n.jsx(Li,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),n.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:n.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[n.jsx("div",{className:"order-1 lg:order-1",children:n.jsx(Oi,{planetUrl:i,imageUrl:a,planet:s,cosmicOriginTime:l,initialAngleRotation:r})}),n.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),n.jsx("div",{className:"order-2 lg:order-2",children:n.jsx(ei,{planet:s,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:r})})]})}),n.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:n.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:n.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",m(e.name),"'"]})})})]}),n.jsx(It,{version:o})]}),n.jsx(Ft,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!s||!e||!t||!i){console.error("Missing required data elements");return}const o=JSON.parse(s.textContent||"{}"),a=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),r=JSON.parse(i.textContent||"{}"),c={planet:o,system:a,galaxy:l,planet_url:r.planet_url,version:r.version,image_url:r.image_url,cosmic_origin_time:r.cosmic_origin_time,initial_angle_rotation:r.initial_angle_rotation},h=document.getElementById("atlas-react-root");h&&Dt.createRoot(h).render(yt.createElement(ji,c))}catch(s){console.error("Error initializing Planet React app:",s)}});
