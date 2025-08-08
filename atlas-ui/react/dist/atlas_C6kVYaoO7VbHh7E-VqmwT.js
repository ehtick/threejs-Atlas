import{r as p,j as s,R as gt,V as jt,c as Dt}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as It}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Tt,U as kt,m as be,c as Ze,a as Lt}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as zt,V as M,n as pe,T as ue,Q as it,l as ot,o as K,R as Ft,p as Ot,q as Bt,e as ge,r as H,s as W,N as Te,t as Ke,c as Be,C as d,u as Ut,v as Xe,d as Ee,F as Q,w as Vt,x as ie,G as yt,y as Gt,z as st,L as at,g as rt,M as Wt,H as Yt,S as Ht,P as $t,W as Zt,I as Kt,J as Xt,K as qt,D as nt,A as Jt}from"./atlas_C9iv-Mftr0ljdPynyVWic.js";const Qt=({planet:o,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:a})=>{const[n,h]=p.useState(!1),r=y=>y.replace(/_/g," "),l=y=>{const C=y/86400;return C<30?`${C.toFixed(2)} days`:C<365?`${(C/30).toFixed(2)} months`:`${(C/365).toFixed(2)} years`},c=y=>{const C=y*9/5+32;return`${y.toFixed(1)}°C (${C.toFixed(1)}°F)`},u=y=>`${y.toExponential(2)} kg`,P=y=>y>=1e3?`${(y/1e3).toFixed(2)} km`:`${y.toFixed(2)} m`;return s.jsxs("div",{className:"h-full flex flex-col relative",children:[s.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),s.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[s.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),s.jsx(Tt,{type:"planet",name:o.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:o.name,className:"text-xs"})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),s.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:o.planet_type})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),s.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:o.atmosphere})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),s.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:o.life_forms})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),s.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),s.jsx("div",{className:"text-xs font-bold text-orange-300",children:u(o.mass)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),s.jsx("div",{className:"text-xs font-bold text-orange-300",children:P(o.diameter)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),s.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[o.density.toFixed(2)," kg/m³"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),s.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[o.gravity.toFixed(2)," m/s²"]})]})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),s.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.orbital_radius.toFixed(2)," AU"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),s.jsx("div",{className:"text-xs font-bold text-cyan-300",children:l(o.orbital_period_seconds)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.orbital_speed.toFixed(2)," m/s"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[o.axial_tilt.toFixed(2),"°"]})]})]})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),s.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),s.jsx("div",{className:"text-xs font-bold text-red-300",children:c(o.surface_temperature)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),s.jsx("div",{className:"text-xs font-bold text-red-300",children:l(o.rotation_period_seconds)})]})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",o.elements.length,")"]}),o.elements.length>4&&s.jsx("button",{onClick:()=>h(!n),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:n?"▲ Less":"▼ All"})]}),s.jsx("div",{className:"flex flex-wrap gap-1",children:(n?o.elements:o.elements.slice(0,4)).map((y,C)=>s.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:y},C))})]})]}),s.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[s.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Status:"}),s.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Planet:"}),s.jsx("div",{className:"text-white truncate font-medium",children:r(o.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"System:"}),s.jsx("div",{className:"text-white truncate font-medium",children:r(e.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"System ID:"}),s.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),s.jsx("div",{className:"text-white truncate font-medium",children:r(t.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),s.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},lt={type:"change"},qe={type:"start"},vt={type:"end"},De=new Ft,ct=new Ot,ei=Math.cos(70*Bt.DEG2RAD),k=new M,Y=2*Math.PI,j={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},He=1e-6;class ti extends zt{constructor(e,t=null){super(e,t),this.state=j.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pe.ROTATE,MIDDLE:pe.DOLLY,RIGHT:pe.PAN},this.touches={ONE:ue.ROTATE,TWO:ue.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new it,this._lastTargetPosition=new M,this._quat=new it().setFromUnitVectors(e.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ot,this._sphericalDelta=new ot,this._scale=1,this._panOffset=new M,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new M,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oi.bind(this),this._onPointerDown=ii.bind(this),this._onPointerUp=si.bind(this),this._onContextMenu=hi.bind(this),this._onMouseWheel=ni.bind(this),this._onKeyDown=li.bind(this),this._onTouchStart=ci.bind(this),this._onTouchMove=di.bind(this),this._onMouseDown=ai.bind(this),this._onMouseMove=ri.bind(this),this._interceptControlDown=mi.bind(this),this._interceptControlUp=ui.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lt),this.update(),this.state=j.NONE}update(e=null){const t=this.object.position;k.copy(t).sub(this.target),k.applyQuaternion(this._quat),this._spherical.setFromVector3(k),this.autoRotate&&this.state===j.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=Y:i>Math.PI&&(i-=Y),a<-Math.PI?a+=Y:a>Math.PI&&(a-=Y),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=h!=this._spherical.radius}if(k.setFromSpherical(this._spherical),k.applyQuaternion(this._quatInverse),t.copy(this.target).add(k),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const r=k.length();h=this._clampDistance(r*this._scale);const l=r-h;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),n=!!l}else if(this.object.isOrthographicCamera){const r=new M(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=l!==this.object.zoom;const c=new M(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(r),this.object.updateMatrixWorld(),h=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(De.origin.copy(this.object.position),De.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(De.direction))<ei?this.object.lookAt(this.target):(ct.setFromNormalAndCoplanarPoint(this.object.up,this.target),De.intersectPlane(ct,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>He||8*(1-this._lastQuaternion.dot(this.object.quaternion))>He||this._lastTargetPosition.distanceToSquared(this.target)>He?(this.dispatchEvent(lt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Y/60*this.autoRotateSpeed*e:Y/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){k.setFromMatrixColumn(t,0),k.multiplyScalar(-e),this._panOffset.add(k)}_panUp(e,t){this.screenSpacePanning===!0?k.setFromMatrixColumn(t,1):(k.setFromMatrixColumn(t,0),k.crossVectors(this.object.up,k)),k.multiplyScalar(e),this._panOffset.add(k)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;k.copy(a).sub(this.target);let n=k.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/i.clientHeight,this.object.matrix),this._panUp(2*t*n/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,n=t-i.top,h=i.width,r=i.height;this._mouse.x=a/h*2-1,this._mouse.y=-(n/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Y*this._rotateDelta.x/t.clientHeight),this._rotateUp(Y*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Y*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Y*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Y*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Y*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,n=Math.sqrt(i*i+a*a);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._rotateEnd.set(a,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Y*this._rotateDelta.x/t.clientHeight),this._rotateUp(Y*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,n=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(h,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new K,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ii(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function oi(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function si(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vt),this.state=j.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ai(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=j.DOLLY;break;case pe.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=j.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=j.ROTATE}break;case pe.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=j.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=j.PAN}break;default:this.state=j.NONE}this.state!==j.NONE&&this.dispatchEvent(qe)}function ri(o){switch(this.state){case j.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case j.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case j.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function ni(o){this.enabled===!1||this.enableZoom===!1||this.state!==j.NONE||(o.preventDefault(),this.dispatchEvent(qe),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(vt))}function li(o){this.enabled!==!1&&this._handleKeyDown(o)}function ci(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=j.TOUCH_ROTATE;break;case ue.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=j.TOUCH_PAN;break;default:this.state=j.NONE}break;case 2:switch(this.touches.TWO){case ue.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=j.TOUCH_DOLLY_PAN;break;case ue.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=j.TOUCH_DOLLY_ROTATE;break;default:this.state=j.NONE}break;default:this.state=j.NONE}this.state!==j.NONE&&this.dispatchEvent(qe)}function di(o){switch(this._trackPointer(o),this.state){case j.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case j.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case j.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case j.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=j.NONE}}function hi(o){this.enabled!==!1&&o.preventDefault()}function mi(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ui(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class dt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class bt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:a,ring_outer_radius:n,tilt_factor:h,planet_radius:r,shape_seed:l}=e;if(!t||!i){console.warn("No ring data provided");return}const c=[...t.particles,...i.particles],u=c.length,P=new dt(l||12345),y=new ge,C=new Float32Array(u*3),x=new Float32Array(u*3),_=new Float32Array(u),b=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],v=P.choice(b);for(let E=0;E<u;E++){const L=c[E],F=this.planetRadius/(r||200),oe=(l||12345)+E,I=new dt(oe),se=L.distance*F,S=L.angle,U=se*Math.sin(S),O=Math.asin((h||.2)*.5),N=U*Math.sin(O),X=U*Math.cos(O),B=((n||400)-(a||200))*F*.4,V=I.uniform(-B*.8,B*.8),G=I.uniform(-B*.3,B*.3),$=I.uniform(-.08,.08),Z=se+G,ae=S+$;C[E*3]=Z*Math.cos(ae),C[E*3+1]=N+V+this.planetRadius*.15,C[E*3+2]=X+I.uniform(-B*.4,B*.4),L.color[0]/255;const me=(L.distance-(a||200))/((n||400)-(a||200)),T=v.baseGray,J=v.variation,re=I.uniform(-J,J),ye=Math.max(.12,Math.min(.45,T+re)),ne=.8+me*.4,Ae=I.uniform(.85,1.15),Re=I.uniform(0,1),Ue=Re<.03?I.uniform(1.1,1.3):1,te=ye*ne*Ae*Ue,le=Math.max(.1,Math.min(.55,te));x[E*3]=le,x[E*3+1]=le,x[E*3+2]=le;const ce=.15,z=I.uniform(.3,.7),Ve=Re<.1?I.uniform(1.05,1.2):1;_[E]=L.size*ce*z*Ve}y.setAttribute("position",new H(C,3)),y.setAttribute("color",new H(x,3)),y.setAttribute("size",new H(_,1)),this.material=new W({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Te}),this.ringSystem=new Ke(y,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,a=t.cosmicOriginTime||Date.now()/1e3,n=t.initialAngleRotation||0,r=Date.now()/1e3-a,l=2*Math.PI/i,c=(n+r*l)%(2*Math.PI);this.ringSystem.rotation.y=c}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function fi(o,e){const t={full_ring:o.full_ring,ontop_ring:o.ontop_ring,ring_inner_radius:o.ring_inner_radius,ring_outer_radius:o.ring_outer_radius,tilt_factor:o.tilt_factor,planet_radius:o.planet_radius,shape_seed:o.shape_seed};return new bt(e,t)}class _e{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new Be(i,32,32);const a=new d(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new W({vertexShader:_e.vertexShader,fragmentShader:_e.fragmentShader,uniforms:{atmosphereColor:{value:a},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Xe,side:Ut,depthWrite:!1}),this.mesh=new Ee(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new d(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function pi(o,e){console.log("🌫️ ATMOSPHERE CREATING - THIS SHOULD BE THE GLOW!",{type:"Fresnel",width:12});let t=[.7,.7,.7,.15],i=12;if(e){if(console.log("🌫️ Atmosphere received data:",e),e.color&&Array.isArray(e.color)){const n=e.color;t=[n[0],n[1],n[2],(n[3]||.15)*.7],console.log("🎨 Using API atmosphere color (Python normalized):",t)}else console.log("🎨 Using default atmosphere color (no API color found):",t);e.width&&(i=e.width)}else console.log("🎨 No atmosphere data found, using defaults:",{color:t,width:i});console.log("🌫️ Final Atmosphere params:",{color:t,width:i,planetRadius:o,opacity:t[3]});const a={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new _e(o,a)}class we{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new d(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new ge,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new Ke(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),h=new Float32Array(this.particleCount),r=this.params.color instanceof d?this.params.color:new d(this.params.color);for(let l=0;l<this.particleCount;l++){const c=Math.random()*Math.PI*2,u=Math.acos(Math.random()*2-1),P=e*(1+Math.random()*.1);t[l*3]=P*Math.sin(u)*Math.cos(c),t[l*3+1]=P*Math.sin(u)*Math.sin(c),t[l*3+2]=P*Math.cos(u),i[l*3]=r.r*(.8+Math.random()*.4),i[l*3+1]=r.g*(.8+Math.random()*.4),i[l*3+2]=r.b*(.8+Math.random()*.4),a[l]=this.params.size*(Math.random()*.5+.75),n[l]=this.params.speed*(Math.random()*.8+.6),h[l]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new H(t,3)),this.geometry.setAttribute("customColor",new H(i,3)),this.geometry.setAttribute("size",new H(a,1)),this.geometry.setAttribute("speed",new H(n,1)),this.geometry.setAttribute("phase",new H(h,1))}createMaterial(){return new W({vertexShader:we.vertexShader,fragmentShader:we.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:Xe,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function gi(o,e){console.log("✨ ATMOSPHERE GLOW CREATING - PARTICLE GLOW EFFECT!",{speed:.4,count:500});const t=e.streaks||{},i={color:t.color?new d().setRGB(t.color[0],t.color[1],t.color[2]):new d(16777215),particleCount:t.count||500,speed:t.speed||.4,size:1,opacity:0,turbulence:1};return new we(o,i)}class Le{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;constructor(e,t=new d(16753920)){this.baseMesh=e;const i=e.geometry;this.planetRadius=i.parameters.radius||1;const a=t instanceof d?t:new d(t);console.log("🌍 PlanetLayerSystem: Creating base material with color:",a),this.baseMaterial=new W({vertexShader:Le.baseVertexShader,fragmentShader:Le.baseFragmentShader,uniforms:{baseColor:{value:a},lightDirection:{value:new M(1,1,1).normalize()},ambientStrength:{value:.15}},side:Q}),this.baseMesh.material=this.baseMaterial,console.log("✅ PlanetLayerSystem: Base material applied to mesh")}addEffectLayer(e,t,i=1.001){console.log(`🔷 PlanetLayerSystem: Adding layer "${e}" with scale ${i}`);const a=new Be(this.planetRadius*i,64,64),n=new Ee(a,t);return n.position.copy(this.baseMesh.position),n.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:n,material:t}),this.scene?(this.scene.add(n),console.log(`✅ Layer "${e}" added to scene`)):console.log(`⚠️ Layer "${e}" created but scene not set yet`),n}createCloudBandsLayerMaterial(e){const t=`
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
    `;return new W({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},bandColor:{value:e.bandColor||new d(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new M(1,1,1).normalize()}},transparent:!0,blending:Te,side:Q,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,a=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((n,h)=>{h<5&&(a[h*2]=n.x,a[h*2+1]=n.y)}),new W({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new d(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:a},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new M(1,1,1).normalize()}},transparent:!0,blending:Te,side:Q,depthWrite:!1})}addToScene(e){console.log("🎬 PlanetLayerSystem: Adding to scene, existing layers:",this.effectLayers.length),this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&(e.add(t.mesh),console.log(`   ➕ Added layer "${t.name}" mesh to scene`))}),this.effectLayers.length===0&&console.log("   ℹ️ No effect layers to add yet")}update(e,t){this.effectLayers.forEach(i=>{i.material.uniforms.time&&(i.material.uniforms.time.value+=e),t!==void 0&&i.material.uniforms.rotationAngle&&(i.material.uniforms.rotationAngle.value=t),i.mesh&&i.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof d?e:new d(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.normalize())})}createGenericLayerMaterial(e,t,i,a=!0,n=Te){return i.lightDirection||(i.lightDirection={value:new M(1,1,1).normalize()}),new W({vertexShader:e,fragmentShader:t,uniforms:i,transparent:a,blending:n,side:Q,depthWrite:!1})}convertEffectToLayer(e,t,i=1.001){if(t instanceof W){const a=t.clone();return a.transparent=!0,a.depthWrite=!1,a.uniforms.lightDirection||(a.uniforms.lightDirection={value:new M(1,1,1).normalize()}),this.addEffectLayer(e,a,i)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}let ht=class{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}};class yi{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e,this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,bandColor:t.bandColor||new d(16747520),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,noiseScale:t.noiseScale||3,opacity:t.opacity||.7},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001)}generateDefaultBandPositions(e){const t=new Array(20).fill(0),i=new ht(12345);for(let a=0;a<e&&a<20;a++)t[a]=i.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),i=new ht(67890);for(let a=0;a<e&&a<20;a++)t[a]=i.uniform(.08,.15);return t}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}dispose(){}}function vi(o,e){const t=e.cloud_bands||{},i={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,bandColor:new d(16747520),animationSpeed:1,turbulence:e.turbulence||.5,noiseScale:3,opacity:.7};return new yi(o,i)}class bi{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e,this.params={stormCenters:t.stormCenters||[{x:.3,y:-.2},{x:-.4,y:.6},{x:.1,y:.8}],stormColor:t.stormColor||new d(9109504),stormIntensity:t.stormIntensity||.8,spiralSpeed:t.spiralSpeed||2,animationSpeed:t.animationSpeed||1,opacity:t.opacity||.6},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function xi(o,e){const t=e.storms||{},i={stormCenters:t.centers||[{x:.3,y:-.2},{x:-.4,y:.6},{x:.1,y:.8}],stormColor:new d(9109504),stormIntensity:t.intensity||.8,spiralSpeed:t.spiral_speed||2,animationSpeed:.2,opacity:.6};return new bi(o,i)}class ze{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.color instanceof d?t.color:t.color?new d(t.color):new d(9127187);this.params={color:i,roughness:t.roughness||1.5,rockDensity:t.rockDensity||5,craterCount:t.craterCount||0,opacity:t.opacity||.7},this.material=new W({vertexShader:ze.vertexShader,fragmentShader:ze.fragmentShader,uniforms:{time:{value:0},rockColor:{value:i},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new M(1,1,1).normalize()}},transparent:!0,side:Q,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function _i(o,e){const t=e.surface||{},i=e.planet_info?.base_color||t.base_color;return new ze(o,{color:i?new d(i):new d(9127187),roughness:t.roughness||1.5,rockDensity:t.rock_density||5,craterCount:t.crater_count||0,opacity:.7})}class Fe{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.color instanceof d?t.color:t.color?new d(t.color):new d(11591910);this.params={color:i,iceReflectivity:t.iceReflectivity||.8,frostDensity:t.frostDensity||1,crackIntensity:t.crackIntensity||1,opacity:t.opacity||.7},this.material=new W({vertexShader:Fe.vertexShader,fragmentShader:Fe.fragmentShader,uniforms:{time:{value:0},iceColor:{value:i},iceReflectivity:{value:this.params.iceReflectivity},frostDensity:{value:this.params.frostDensity},crackIntensity:{value:this.params.crackIntensity},opacity:{value:this.params.opacity},lightDirection:{value:new M(1,1,1).normalize()}},transparent:!0,side:Q,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function wi(o,e){const t=e.surface||{},i=e.planet_info?.base_color||t.base_color;return new Fe(o,{color:i?new d(i):new d(11591910),iceReflectivity:t.ice_reflectivity||.8,frostDensity:t.frost_density||1,crackIntensity:t.crack_intensity||1,opacity:.7})}class Oe{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.color instanceof d?t.color:t.color?new d(t.color):new d(8421504);this.params={color:i,metalness:t.metalness||.9,roughness:t.roughness||.3,fragmentationIntensity:t.fragmentationIntensity||.5,opacity:t.opacity||.8},this.material=new W({vertexShader:Oe.vertexShader,fragmentShader:Oe.fragmentShader,uniforms:{time:{value:0},metalColor:{value:i},metalness:{value:this.params.metalness},roughness:{value:this.params.roughness},fragmentationIntensity:{value:this.params.fragmentationIntensity},opacity:{value:this.params.opacity},lightDirection:{value:new M(1,1,1).normalize()}},transparent:!0,side:Q,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Ci(o,e){const t=e.surface||{},i=e.planet_info?.base_color||t.base_color;return new Oe(o,{color:i?new d(i):new d(8421504),metalness:t.metalness||.9,roughness:t.roughness||.3,fragmentationIntensity:t.fragmentation||.5,opacity:.8})}class mt{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class Ce{material;params;mesh;static vertexShader=`
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
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      color *= lighting;
      
      // Añadir efecto de terminador (día/noche) - CRÍTICO
      float terminator = smoothstep(-0.1, 0.1, dot(vNormal, lightDirection));
      color *= (0.3 + 0.7 * terminator);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new d(16753920),bandColor:t.bandColor||new d(16747520),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,noiseScale:t.noiseScale||3},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),i=new mt(12345);for(let a=0;a<e&&a<20;a++)t[a]=i.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),i=new mt(67890);for(let a=0;a<e&&a<20;a++)t[a]=i.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof d?this.params.baseColor:new d(this.params.baseColor),t=this.params.bandColor instanceof d?this.params.bandColor:new d(this.params.bandColor);return new W({vertexShader:Ce.vertexShader,fragmentShader:Ce.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},noiseScale:{value:this.params.noiseScale}},transparent:!1,side:Q})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}addToScene(e,t){}apply(e){e.material=this.material}dispose(){this.material.dispose()}}function Si(o,e){const t=e.cloud_bands||{},i={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new d(e.base_color):new d(16753920),bandColor:new d(16747520),animationSpeed:1,turbulence:e.turbulence||.5,noiseScale:3};return new Ce(o,i)}class Se{material;params;mesh;static vertexShader=`
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
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      color *= lighting;
      
      // Añadir efecto de terminador (día/noche) - CRÍTICO
      float terminator = smoothstep(-0.1, 0.1, dot(vNormal, lightDirection));
      color *= (0.3 + 0.7 * terminator);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;constructor(e,t={}){this.params={stormCenters:t.stormCenters||[{x:.3,y:-.2},{x:-.4,y:.6},{x:.1,y:.8}],stormColor:t.stormColor||new d(9109504),stormIntensity:t.stormIntensity||.8,spiralSpeed:t.spiralSpeed||2,animationSpeed:t.animationSpeed||1,baseColor:t.baseColor||new d(16753920)},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}createMaterial(){const e=this.params.baseColor instanceof d?this.params.baseColor:new d(this.params.baseColor),t=this.params.stormColor instanceof d?this.params.stormColor:new d(this.params.stormColor),i=new Array(10).fill(0);return this.params.stormCenters.forEach((a,n)=>{n<5&&(i[n*2]=a.x,i[n*2+1]=a.y)}),new W({vertexShader:Se.vertexShader,fragmentShader:Se.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},stormColor:{value:t},stormIntensity:{value:this.params.stormIntensity},spiralSpeed:{value:this.params.spiralSpeed},animationSpeed:{value:this.params.animationSpeed},stormCenters:{value:i},numStorms:{value:Math.min(this.params.stormCenters.length,5)}},transparent:!1,side:Q})}addToScene(e,t){}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){this.material.dispose()}}function Pi(o,e){const t=e.storms||{},i={stormCenters:t.centers||[{x:.3,y:-.2},{x:-.4,y:.6},{x:.1,y:.8}],stormColor:new d(9109504),stormIntensity:t.intensity||.8,spiralSpeed:t.spiral_speed||2,animationSpeed:.2,baseColor:e.base_color?new d(e.base_color):new d(16753920)};return new Se(o,i)}class xt{particleSystem;material;geometry;params;particleCount;constructor(e,t={}){this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.8,brightness:t.brightness||1.5},this.particleCount=this.params.particleCount,this.geometry=new ge,this.createParticles(e),this.createMaterial(),this.particleSystem=new Ke(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),h=e*1.3;for(let r=0;r<this.particleCount;r++){const l=Math.random()*Math.PI*2,c=Math.random()*2-1,u=Math.random(),P=Math.acos(c),y=h*Math.cbrt(u);t[r*3]=y*Math.sin(P)*Math.cos(l),t[r*3+1]=y*Math.sin(P)*Math.sin(l),t[r*3+2]=y*Math.cos(P),i[r]=this.params.size*(.5+Math.random()*.5),a[r]=this.params.speed*(.8+Math.random()*.4),n[r]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new H(t,3)),this.geometry.setAttribute("size",new H(i,1)),this.geometry.setAttribute("speed",new H(a,1)),this.geometry.setAttribute("phase",new H(n,1))}createMaterial(){const e=this.params.color instanceof d?this.params.color:new d().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new Vt({color:e,size:this.params.size,opacity:this.params.opacity,transparent:!0,blending:Xe,sizeAttenuation:!0,vertexColors:!1}),this.material.color.multiplyScalar(this.params.brightness)}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){const t=Date.now()*.001,i=.9+.1*Math.sin(t*2);this.material.opacity=this.params.opacity*i}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof d?e.color:new d().setRGB(e.color[0],e.color[1],e.color[2]);this.material.color=t,this.material.color.multiplyScalar(this.params.brightness)}e.opacity!==void 0&&(this.material.opacity=e.opacity),e.size!==void 0&&(this.material.size=e.size)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Mi(o,e){console.log("✨ AtmosphericStreaks received data:",e);const t=e.streaks||{},i={color:t.color||[.95,.95,1],particleCount:t.particleCount||100,speed:t.speed||1,size:2,opacity:.8,brightness:1.5};return console.log("✨ Final AtmosphericStreaks params:",i),new xt(o,i)}class ut{params;constructor(e={}){this.params=e,console.log("🔥 MetallicSurface: CONSTRUCTOR LLAMADO - pero NO hace nada")}apply(e){if(console.log("🔥 MetallicSurface.apply() LLAMADO - APLICANDO SUPERFICIE METÁLICA"),e.material instanceof ie){const t=this.params.color instanceof d?this.params.color:new d(this.params.color);e.material.color.copy(t),e.material.metalness=this.params.metalness||.95,e.material.roughness=this.params.roughness||.1,e.material.emissive.setHex(1710638),e.material.emissiveIntensity=.05,e.material.clearcoat!==void 0&&(e.material.clearcoat=this.params.clearcoat||.3,e.material.clearcoatRoughness=this.params.clearcoatRoughness||.1),e.material.reflectivity!==void 0&&(e.material.reflectivity=this.params.reflectivity||.9),e.material.needsUpdate=!0,console.log("✅ SUPERFICIE METÁLICA APLICADA:",{color:e.material.color.getHexString(),metalness:e.material.metalness,roughness:e.material.roughness,emissive:e.material.emissive.getHexString()})}else console.warn("⚠️ Material no es MeshStandardMaterial:",e.material.type)}update(e){}updateParams(e){}getMaterial(){return null}dispose(){}}class ft{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new d(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new yt,this.generateFragments()}generateFragments(){const e=new ie({color:this.params.color instanceof d?this.params.color:new d(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),a=new Ee(i,e);this.positionFragment(a,t),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const n=this.params.size*(Math.random()*.5+.75);a.scale.set(n,n,n),a.userData={rotationAxis:new M(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(a),this.fragments.add(a)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],a=[];a.push(new M(0,0,0));for(let r=0;r<e;r++){const l=r/e*Math.PI*2,c=Math.random()*.5+.5,u=(Math.random()-.5)*.3;a.push(new M(Math.cos(l)*c,Math.sin(l)*c,u))}for(let r=1;r<=e;r++){const c=a[r].clone();c.z+=Math.random()*.4+.2,a.push(c)}for(const r of a)t.push(r.x,r.y,r.z);for(let r=1;r<e;r++)i.push(0,r,r+1);i.push(0,e,1);const n=a.length-e-1;for(let r=0;r<e-1;r++)i.push(n,n+r+2,n+r+1);i.push(n,n+1,n+e);for(let r=0;r<e;r++){const l=r+1,c=(r+1)%e+1,u=l+e,P=c+e;i.push(l,u,c),i.push(c,u,P)}const h=new ge;return h.setAttribute("position",new Gt(t,3)),h.setIndex(i),h.computeVertexNormals(),h}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),a=(Math.random()-.5)*this.planetRadius*.5;return new M(Math.cos(t)*i,a,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new M(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new M(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const a=t.userData;t.rotateOnAxis(a.rotationAxis,a.rotationSpeed*e*this.params.animationSpeed);const n=Math.sin(Date.now()*.001+i)*.001;t.position.y+=n*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof d?e.color:new d(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof ie&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof ie&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof st&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof st&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class Pe{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new d(.8,.8,.8),cloudColor:e.cloudColor||new d(.7,.7,.7),craterColor:e.craterColor||new d(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof d?this.params.mountainColor:new d(this.params.mountainColor),t=this.params.cloudColor instanceof d?this.params.cloudColor:new d(this.params.cloudColor),i=this.params.craterColor instanceof d?this.params.craterColor:new d(this.params.craterColor),a=new Array(30).fill(new M),n=new Array(30).fill(new M),h=new Array(10).fill(new M);return this.params.mountains&&this.params.mountains.forEach((r,l)=>{l<30&&(a[l]=new M(r.position[0],r.position[1],r.angle),n[l]=new M(r.width,r.height,0))}),this.params.clouds&&this.params.clouds.forEach((r,l)=>{l<10&&(h[l]=new M(r.position[0],r.position[1],r.radius))}),new W({vertexShader:Pe.vertexShader,fragmentShader:Pe.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new d(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:a},mountainSizes:{value:n},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:h},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new M(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new M},craterColor:{value:i},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Ei(o){const e=o.surface_elements||o.surface||o;let t=[.8,.8,.8];const i=o.planet_info?.base_color||o.base_color;if(i&&typeof i=="string"){const l=i.replace("#","");t=[parseInt(l.substr(0,2),16)/255,parseInt(l.substr(2,2),16)/255,parseInt(l.substr(4,2),16)/255]}else Array.isArray(i)&&(t=i);let a=[],n=[],h;if(o.seeds){const l=_=>{let b=_;return()=>(b=(b*1664525+1013904223)%4294967296,b/4294967296)},c=_=>{const b=_()*Math.PI*2,v=Math.acos(_()*2-1),E=Math.sin(v)*Math.cos(b),L=Math.sin(v)*Math.sin(b);return[E,L]},u=l(o.seeds.planet_seed),P=6+Math.floor(u()*4);for(let _=0;_<P;_++)a.push({position:c(u),width:.1+u()*.3,height:.2+u()*.6,angle:u()*Math.PI*2});const y=l(o.seeds.shape_seed+1e3),C=3+Math.floor(y()*4);for(let _=0;_<C;_++)n.push({position:c(y),radius:.08+y()*.17});const x=l(o.seeds.shape_seed+2e3);x()<.7&&(h={position:c(x),radius:.1+x()*.2})}const r={mountains:e.mountains?.length>0?e.mountains:a,clouds:e.clouds?.length>0?e.clouds:n,crater:e.crater||h,baseTextureIntensity:.4,mountainColor:new d(t[0]*1.1,t[1]*1.1,t[2]*1.1),cloudColor:new d(t[0]*.9,t[1]*.9,t[2]*.9),craterColor:new d(t[0]*.3,t[1]*.3,t[2]*.3)};return new Pe(r)}class Me{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new d(.675,.843,.902),crackColor:e.crackColor||new d(.2,.2,.2),iceCapColor:e.iceCapColor||new d(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof d?this.params.crystalColor:new d(this.params.crystalColor),t=this.params.crackColor instanceof d?this.params.crackColor:new d(this.params.crackColor),i=this.params.iceCapColor instanceof d?this.params.iceCapColor:new d(this.params.iceCapColor),a=new Array(50).fill(new M),n=new Array(50).fill(new M),h=new Array(12).fill(new K),r=new Array(4).fill(new M);return this.params.crystals&&this.params.crystals.forEach((l,c)=>{c<50&&(a[c]=new M(l.position[0],l.position[1],l.angle),n[c]=new M(l.length,l.width,0))}),this.params.cracks&&this.params.cracks.forEach((l,c)=>{c<12&&(h[c]=new K(l.angle,l.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((l,c)=>{c<4&&(r[c]=new M(l.position[0],l.position[1],l.radius))}),new W({vertexShader:Me.vertexShader,fragmentShader:Me.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new d(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:a},crystalSizes:{value:n},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:h},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:r},iceCapColor:{value:i},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Ai(o){const e=o.surface_elements||o.surface||o;let t=[.9,.95,1];const i=o.planet_info?.base_color||o.base_color;if(i&&typeof i=="string"){const l=i.replace("#","");t=[parseInt(l.substr(0,2),16)/255,parseInt(l.substr(2,2),16)/255,parseInt(l.substr(4,2),16)/255],t=[Math.min(t[0]+.1,1),Math.min(t[1]+.15,1),Math.min(t[2]+.2,1)]}else Array.isArray(i)&&(t=i);let a=[],n=[],h=[];if(o.seeds){const l=b=>{let v=b;return()=>(v=(v*1664525+1013904223)%4294967296,v/4294967296)},c=b=>{const v=b()*Math.PI*2,E=Math.acos(b()*2-1),L=Math.sin(E)*Math.cos(v),F=Math.sin(E)*Math.sin(v);return[L,F]},u=l(o.seeds.planet_seed),P=4+Math.floor(u()*6);for(let b=0;b<P;b++)a.push({position:c(u),length:.1+u()*.2,width:.05+u()*.1,angle:u()*Math.PI*2});const y=l(o.seeds.shape_seed),C=3+Math.floor(y()*5);for(let b=0;b<C;b++)n.push({angle:y()*Math.PI*2,length:.2+y()*.6});const x=l(o.seeds.shape_seed+500),_=2+Math.floor(x()*3);for(let b=0;b<_;b++)h.push({position:c(x),radius:.15+x()*.25})}const r={crystals:e.crystals?.length>0?e.crystals:a,cracks:e.cracks?.length>0?e.cracks:n,iceCaps:e.ice_caps?.length>0?e.ice_caps:h,baseTextureIntensity:.3,crystalColor:new d(t[0]*.8,t[1]*.9,t[2]*1),crackColor:new d(t[0]*.3,t[1]*.3,t[2]*.4),iceCapColor:new d(t[0]*1.1,t[1]*1.1,t[2]*1)};return new Me(r)}class _t{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new yt,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,a=t*Math.cos(i),n=t*Math.sin(i),h=n*.8,r=new ge,l=new Float32Array([0,0,0,a,h,n]);r.setAttribute("position",new H(l,3));const c=new at({color:16776960,linewidth:5,transparent:!1});this.sunLine=new rt(r,c),this.debugGroup.add(this.sunLine);const u=e+Math.PI,P=t*.7,y=P*Math.cos(u),C=0,x=P*Math.sin(u),_=new Be(this.planetRadius*.15,16,16),b=new Wt({color:16776960,transparent:!1,opacity:1}),v=new Ee(_,b);v.position.set(y,C,x),this.debugGroup.add(v),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new ge,a=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new H(a,3));const n=new at({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new rt(i,n),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,a=this.params.initialAngleRotation||0,n=e-t,h=2*Math.PI/i;return(a+n*h)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,a=this.sunLine.geometry,n=a.attributes.position.array;n[3]=i*Math.cos(t),n[4]=0,n[5]=i*Math.sin(t),a.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,a=i.attributes.position.array;a[0]=-t*Math.cos(e),a[1]=0,a[2]=-t*Math.sin(e),a[3]=t*Math.cos(e),a[4]=0,a[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function Ri(o,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:o.debug?.cosmic_origin_time||o.timing?.cosmic_origin_time||o.cosmicOriginTime,rotationPeriod:o.planet_info?.rotation_period||o.rotation_period_seconds||86400,initialAngleRotation:o.debug?.initial_angle_rotation||o.timing?.initial_angle_rotation||o.initialAngleRotation||0,planetRadius:e,orbitalAngle:o.timing?.orbital_angle||0,sunAngle:o.sun_angle||o.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new _t(e,t)}function ke(o){const e=o.replace("#",""),t=parseInt(e.substr(0,2),16)/255,i=parseInt(e.substr(2,2),16)/255,a=parseInt(e.substr(4,2),16)/255;return new d(t,i,a)}function $e(o){return o.length>=3?new d(o[0],o[1],o[2]):new d(.5,.5,.5)}function Ie(o){if(o.ocean_color){if(typeof o.ocean_color=="string")return ke(o.ocean_color);if(Array.isArray(o.ocean_color))return $e(o.ocean_color)}if(o.planet_info?.base_color){if(typeof o.planet_info.base_color=="string")return ke(o.planet_info.base_color);if(Array.isArray(o.planet_info.base_color))return $e(o.planet_info.base_color)}if(o.base_color){if(typeof o.base_color=="string")return ke(o.base_color);if(Array.isArray(o.base_color))return $e(o.base_color)}const e=o.planet_info?.type||o.type||"Unknown";return Ni(e)}function Ni(o){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[o]||"#FFFFFF";return ke(t)}const ji=!1;var wt=(o=>(o.METALLIC_SURFACE="metallic_surface",o.CLOUD_BANDS="cloud_bands",o.CLOUD_GYROS="cloud_gyros",o.ATMOSPHERE="atmosphere",o.ATMOSPHERE_GLOW="atmosphere_glow",o.ATMOSPHERIC_STREAKS="atmospheric_streaks",o.RING_SYSTEM="ring_system",o.FRAGMENTATION="fragmentation",o.ROCKY_TERRAIN="rocky_terrain",o.ICY_TERRAIN="icy_terrain",o.OCEAN_WAVES="ocean_waves",o.LAVA_FLOWS="lava_flows",o.CRYSTAL_FORMATIONS="crystal_formations",o.CLOUD_LAYERS="cloud_layers",o.STORM_SYSTEMS="storm_systems",o.VOLCANIC_ACTIVITY="volcanic_activity",o.AURORA="aurora",o.MAGNETIC_FIELD="magnetic_field",o.CITY_LIGHTS="city_lights",o.BIOLUMINESCENCE="bioluminescence",o.THERMAL_EMISSIONS="thermal_emissions",o.VISUAL_DEBUG_3D="visual_debug_3d",o))(wt||{});class fe{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return fe.instance||(fe.instance=new fe),fe.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,i)=>new ut(e),fromPythonData:(e,t,i)=>{const a=Ie(e),n=[a.r,a.g,a.b];return new ut({color:n,roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}}),this.registerEffect("cloud_bands",{create:(e,t,i)=>new Ce(i,e),fromPythonData:(e,t,i)=>Si(i,e)}),this.registerEffect("cloud_gyros",{create:(e,t,i)=>new Se(i,e),fromPythonData:(e,t,i)=>Pi(i,e)}),this.registerEffect("atmosphere_glow",{create:(e,t)=>new we(t,e),fromPythonData:(e,t)=>gi(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new xt(t,e),fromPythonData:(e,t)=>Mi(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new _e(t,e),fromPythonData:(e,t)=>pi(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new bt(t,e),fromPythonData:(e,t)=>fi(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new ft(t,e),fromPythonData:(e,t)=>new ft(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,i)=>new Pe(e),fromPythonData:(e,t,i)=>Ei(e)}),this.registerEffect("icy_terrain",{create:(e,t,i)=>new Me(e),fromPythonData:(e,t,i)=>Ai(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new _t(t,e),fromPythonData:(e,t)=>Ri(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,a,n=0){const h=this.creators.get(e);if(!h)return console.warn(`Effect type '${e}' not registered`),null;try{const r=h.create(t,i,a);if(!r)return null;const l={id:`effect_${this.nextId++}`,type:e,effect:r,priority:n,enabled:!0};return this.effects.set(l.id,l),l}catch(r){return console.error(`Error creating effect '${e}':`,r),null}}createEffectFromPythonData(e,t,i,a,n=0){const h=this.creators.get(e);if(!h||!h.fromPythonData)return this.createEffect(e,t,i,a,n);try{const r=h.fromPythonData(t,i,a);if(!r)return null;const l={id:`effect_${this.nextId++}`,type:e,effect:r,priority:n,enabled:!0};return this.effects.set(l.id,l),l}catch(r){return console.error(`Error creating effect '${e}' from Python data:`,r),null}}createEffectsFromList(e,t,i){const a=[],n=e.sort((h,r)=>(h.priority||0)-(r.priority||0));for(const h of n){const r=this.createEffect(h.type,h.params,t,i,h.priority);r&&(r.enabled=h.enabled!==!1,a.push(r))}return a}createEffectsFromPythonPlanetData(e,t,i,a){const n=[];try{console.log("🌍 EffectRegistry received Python data:",e),console.log("🔍 Surface elements:",e.surface_elements),console.log("🌫️ Atmosphere:",e.atmosphere),console.log("💍 Rings:",e.rings),console.log("🪐 Planet info:",e.planet_info);const h=Ie(e);if(console.log("🎨 Creating PlanetLayerSystem with base color:",h),this.layerSystem=new Le(i,h),e.surface_elements){const r=e.surface_elements;if(console.log("🏔️ Processing surface elements:",r.type,r),r.effects_3d&&Array.isArray(r.effects_3d)){console.log("🚀 ENCONTRADOS effects_3d:",r.effects_3d.length,"efectos"),console.log("🚀 LISTA COMPLETA DE effects_3d:",JSON.stringify(r.effects_3d,null,2));for(const l of r.effects_3d){console.log("🔍 PROCESANDO EFECTO:",l.type,"con params:",l.params);const c=this.createEffect(l.type,l.params,t,i,l.priority||0);c?(n.push(c),console.log("🎯 EFECTO CREADO:",l.type,"- será manejado por el sistema de capas"),c.effect.apply&&this.layerSystem&&console.log("🔄 Intentando convertir efecto a capa:",l.type),c.effect.addToScene&&c.effect.addToScene(a,i.position),console.log("✅ EFECTO AGREGADO Y APLICADO:",l.type)):console.error("❌ FALLO AL CREAR EFECTO:",l.type)}}else console.log("❌ NO HAY effects_3d O NO ES ARRAY:",typeof r.effects_3d,r.effects_3d);switch(console.log("🔍 Checking legacy surface type:",r.type),r.type){case"gas_giant":if(console.log("🌀 Creating Gas Giant effects with LAYER SYSTEM"),this.layerSystem){console.log("🌀 Adding cloud bands layer");const l=vi(this.layerSystem,{...r,base_color:h,turbulence:e.turbulence||r.turbulence});console.log("🌪️ Adding cloud gyros layer");const c=xi(this.layerSystem,{...r,base_color:h,storm_intensity:e.storm_intensity||r.storm_intensity});n.push({id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:l,priority:0,enabled:!0}),n.push({id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:c,priority:1,enabled:!0}),console.log("✅ Gas Giant effects added to layer system")}else console.error("❌ PlanetLayerSystem not initialized!");break;case"metallic":case"metallic_3d":if(console.log("⚙️ Creating Metallic planet with LAYER SYSTEM"),this.layerSystem){const l=Ci(this.layerSystem,e);n.push({id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:l,priority:0,enabled:!0}),console.log("✅ Metallic surface layer added")}break;case"rocky":if(console.log("🪨 Creating Rocky planet with LAYER SYSTEM"),this.layerSystem){const l=_i(this.layerSystem,e);n.push({id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:l,priority:0,enabled:!0}),console.log("✅ Rocky terrain layer added")}break;case"icy":if(console.log("❄️ Creating Icy planet with LAYER SYSTEM"),this.layerSystem){const l=wi(this.layerSystem,e);n.push({id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:l,priority:0,enabled:!0}),console.log("✅ Icy terrain layer added")}break;case"oceanic":console.log("🌊 Oceanic planet detected - using generic rendering");break;default:if(console.log("❓ Unknown surface type:",r.type,"- applying base color"),i.material instanceof ie){const l=Ie(e);i.material.color.copy(l),console.log("✅ Applied base color to planet without specific effects:",l)}break}}else if(console.log("❌ No surface_elements found in Python data - applying base color"),i.material instanceof ie){const r=Ie(e);i.material.color.copy(r),console.log("✅ Applied base color to planet without surface_elements:",r)}if(e.atmosphere){if(console.log("🌫️ Applying atmospheric effects for:",e.planet_info?.type),e.atmosphere.halo&&e.atmosphere.halo.enabled!==!1){const r=this.createEffectFromPythonData(wt.ATMOSPHERIC_HALO,e,t,i,10);r&&(n.push(r),r.effect.addToScene(a,i.position),console.log("✅ Added atmospheric halo effect"))}if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const r=this.createEffectFromPythonData("atmosphere_glow",e,t,i,20);r&&(n.push(r),r.effect.addToScene(a,i.position),console.log("✅ Added atmosphere glow effect"))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const r=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),l={...e.atmosphere};r==="oceanic"&&(l.opacity=Math.min(l.opacity||.3,.15),l.width=Math.min(l.width||15,8));const c=this.createEffectFromPythonData("atmosphere",l,t,i,5);c&&(n.push(c),c.effect.addToScene(a,i.position),console.log("✅ Added atmosphere effect"))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){console.log("💍 Applying ring system for:",e.planet_info?.type,"rings data:",e.rings);const r=this.createEffectFromPythonData("ring_system",e,t,i,1);r?(n.push(r),r.effect.addToScene(a,i.position),console.log("✅ Added ring system effect")):console.warn("⚠️ Failed to create ring effect")}else console.log("❌ No rings for:",e.planet_info?.type,"rings:",e.rings);if(e.surface_elements?.has_fragmentation_zones){const r=this.createEffectFromPythonData("fragmentation",e,t,i,5);r&&(n.push(r),r.effect.addToScene(a,i.position))}return this.layerSystem&&(console.log("🎬 Adding PlanetLayerSystem to scene with all layers"),this.layerSystem.addToScene(a)),console.log("📊 EffectRegistry Summary:"),console.log(`   Total effects created: ${n.length}`),n.forEach((r,l)=>{console.log(`   ${l+1}. ${r.type} (${r.enabled?"enabled":"disabled"})`)}),n.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),n}catch(h){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",h),h}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);i&&(i.enabled=t!==void 0?t:!i.enabled)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(a){console.error(`Error updating effect ${i.type}:`,a)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const ve=fe.getInstance(),he={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function Di(o){const e=[];switch(o.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...he.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmosphere",params:{...he.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:he.cloud_bands,priority:0},{type:"cloud_gyros",params:he.cloud_gyros,priority:1},{type:"atmosphere",params:{...he.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:he.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...he.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const q={log:(o,e)=>{},warn:(o,e)=>{console.warn(`[Effects] ${o}`,e||"")},error:(o,e)=>{console.error(`[Effects] ${o}`,e||"")},debug:(o,e)=>{}};new Date().toISOString();const Ii=({planetData:o,showInConsole:e=!0,showInPage:t=!1})=>{const[i,a]=p.useState([]),[n,h]=p.useState({});p.useEffect(()=>{if(!o)return;const c=r(o);h(c),a(l(o)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=o,window.__DEBUG_PLANET_ANALYSIS=c)},[o,e]);function r(c){const u={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(c.planet_info&&c.surface_elements?u.hasValidStructure=!0:(c.planet_info||u.missingFields.push("planet_info"),c.surface_elements||u.missingFields.push("surface_elements")),c.surface_elements?.type==="oceanic"&&(u.oceanicData={hasAbstractLands:!!c.surface_elements.abstract_lands?.length,numGreenPatches:c.surface_elements.green_patches?.length||0,numClouds:c.surface_elements.clouds?.length||0,hasDepths:c.surface_elements.depths?.enabled||!1,baseColorIsBlue:c.planet_info?.base_color==="#0000FF",greenPatchColor:c.surface_elements.green_patches?.[0]?.color,issues:[]},u.oceanicData.numGreenPatches>15&&u.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),u.oceanicData.baseColorIsBlue||u.oceanicData.issues.push(`Color base no es azul puro: ${c.planet_info?.base_color}`),u.renderingIssues=u.oceanicData.issues),c.planet_info?.base_color&&c.planet_info?.type){const y={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[c.planet_info.type];y&&c.planet_info.base_color!==y?u.colorConsistency=`Inconsistente: esperado ${y}, recibido ${c.planet_info.base_color}`:u.colorConsistency="Correcto"}return u}function l(c){const u=[];if(!c.surface_elements?.type)return["No surface type defined"];const P=c.surface_elements.type.toLowerCase();switch(P){case"oceanic":u.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":u.push("RockyTerrainEffect");break;case"icy":u.push("IcyTerrainEffect");break;case"gas giant":u.push("GasGiantBandsEffect");break;default:u.push(`Generic effect for type: ${P}`)}return c.atmosphere?.density>0&&u.push("AtmosphericEffect"),c.rings&&u.push("RingSystemEffect"),u}return t?s.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[s.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",o.planet_info?.name]}),s.jsxs("div",{style:{marginBottom:"10px"},children:[s.jsx("strong",{children:"Type:"})," ",o.planet_info?.type,s.jsx("br",{}),s.jsx("strong",{children:"Base Color:"})," ",o.planet_info?.base_color,s.jsx("br",{}),s.jsx("strong",{children:"Radius:"})," ",o.planet_info?.radius]}),o.surface_elements?.type==="oceanic"&&s.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[s.jsx("strong",{children:"🌊 Oceanic Data:"}),s.jsx("br",{}),s.jsxs("span",{style:{color:n.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",n.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),s.jsx("br",{}),"Green Patches: ",n.oceanicData?.numGreenPatches,s.jsx("br",{}),"Clouds: ",n.oceanicData?.numClouds,s.jsx("br",{}),"Has Depths: ",n.oceanicData?.hasDepths?"Yes":"No",s.jsx("br",{}),n.oceanicData?.issues?.length>0&&s.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",s.jsx("br",{}),n.oceanicData.issues.map((c,u)=>s.jsxs("div",{children:["- ",c]},u))]})]}),s.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[s.jsx("strong",{children:"🎨 Effects Applied:"}),s.jsx("br",{}),i.map((c,u)=>s.jsxs("div",{style:{color:c.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",c]},u))]}),s.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function Ti(o){p.useEffect(()=>{if(o&&o.surface_elements?.type==="oceanic"){o.surface_elements.green_patches?.length>0;const e=o.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[o])}const xe=2.5,pt=()=>{const o=45*Math.PI/180;return xe/(Math.tan(o/2)*.5)},ki=({planetName:o,containerClassName:e="",width:t=800,height:i=600,autoRotate:a=!0,enableControls:n=!0,showDebugInfo:h=!1,planetData:r,cosmicOriginTime:l,initialAngleRotation:c,onDataLoaded:u,onEffectsCreated:P,onError:y})=>{const C=p.useRef(null),x=p.useRef(null),_=p.useRef(null),b=p.useRef(null),v=p.useRef(null),E=p.useRef(null),L=p.useRef(new Yt),F=p.useRef(null),oe=p.useRef(0),I=p.useRef(null),[se,S]=p.useState(!0),[U,O]=p.useState(null),[N,X]=p.useState(null),[B,V]=p.useState([]),[G,$]=p.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),Z=p.useRef([]),ae=p.useRef(0),ee=p.useRef(null),me=Math.floor(Date.now()/1e3),[T,J]=p.useState(0),re=l||N?.timing?.cosmic_origin_time||Date.now()/1e3-3600,ye=me-re+T;oe.current=ye;const ne=p.useCallback(()=>{if(!C.current||!_.current||!b.current)return;const m=C.current,g=m.clientWidth||400,f=m.clientHeight||400;_.current.setSize(g,f),b.current.aspect=g/f,b.current.updateProjectionMatrix()},[]),Ae=async m=>{if(!(!v.current||!x.current)){q.log("Applying modular effects from API data",{planet:m.planet_info.name,type:m.planet_info.type});try{Ge();const g=ve.createEffectsFromPythonPlanetData(m,xe,v.current,x.current);V(g),Z.current=g,P&&P(g),q.log(`Successfully applied ${g.length} modular effects`),We()}catch(g){q.error("Error applying modular effects",g),Ne()}}},Re=p.useCallback(()=>{if(!C.current)return!1;try{for(;C.current.firstChild;)C.current.removeChild(C.current.firstChild);x.current=null,b.current=null,_.current=null,v.current=null,z.current=null;const m=C.current,g=m.clientWidth||t||400,f=m.clientHeight||i||400,w=new Ht;w.background=new d(1297),x.current=w;const D=new $t(45,g/f,.1,1e4),R=pt();console.log("🎯 Camera distance for exact Pillow proportions:",R),D.position.set(0,0,R),D.lookAt(0,0,0),b.current=D;const A=new Zt({antialias:!0,alpha:!0,powerPreference:"high-performance"});return A.setSize(g,f),A.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.shadowMap.enabled=!0,A.shadowMap.type=Kt,A.toneMapping=Xt,A.toneMappingExposure=1.2,A.outputColorSpace=qt,C.current.appendChild(A.domElement),_.current=A,Ct(w,null),St(w),n&&Pt(D,A.domElement),!0}catch(m){return console.error("Error initializing Three.js:",m),!1}},[N,r,l]),Ue=m=>{if(!m)return 0;const g=m.sun_angle||m.lighting?.sun_angle;if(g!==void 0)return g;const f=m.timing?.current_orbital_angle||m.timing?.orbital_angle;return f??0},te=p.useRef(null),le=p.useRef(null),ce=p.useRef(null),z=p.useRef(null),Ve=m=>{m.castShadow=!0,m.shadow.mapSize.width=2048,m.shadow.mapSize.height=2048,m.shadow.camera.near=.5,m.shadow.camera.far=50,m.shadow.camera.left=-10,m.shadow.camera.right=10,m.shadow.camera.top=10,m.shadow.camera.bottom=-10},Je=m=>{if(!te.current||!x.current)return;const g=Ue(m),f=10,w=g+Math.PI,D=Math.sin(g)*5,R=f*Math.cos(w),A=D,de=f*Math.sin(w);te.current.position.set(R,A,de),te.current.target.position.set(0,0,0),x.current.children.includes(te.current.target)||x.current.add(te.current.target),le.current&&le.current.position.set(-R*.5,0,-de*.5)},Ct=(m,g)=>{{const f=new nt(16777215,2);f.position.set(-10,5,10),f.target.position.set(0,0,0),f.castShadow=!0,Ve(f),m.add(f),m.add(f.target),te.current=f;const w=new nt(16777215,.05);w.position.set(8,-3,-5),m.add(w),le.current=w;const D=new Jt(2236996,.1);m.add(D);return}},St=m=>{console.log("🪐 Creating normalized planet with fixed radius:",xe);const g=new Be(xe,128,64),f=new ie({color:8421504,metalness:.1,roughness:.8,transparent:!1,opacity:1}),w=new Ee(g,f);w.castShadow=!0,w.receiveShadow=!0,w.position.set(0,0,0),m.add(w),v.current=w,console.log("🪐 Base planet created - color will be updated when API data arrives")},Pt=(m,g)=>{const f=new ti(m,g);f.enableDamping=!0,f.dampingFactor=.05;const w=pt();f.minDistance=w*.8,f.maxDistance=w*3,f.autoRotate=a,f.autoRotateSpeed=.5,f.enablePan=!0,f.enableZoom=!0,f.target.set(0,0,0),E.current=f},Mt=p.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{S(!0),O(null),q.log("Loading planet data from API",{planetName:o});const g=await fetch("/api/planet/rendering-data");if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);const f=await g.json();if(!f.success)throw new Error(f.error||"Failed to fetch planet data");const w=f.planet_data,D=f.timing,R=f.rendering_data,A={planet_info:R?.planet_info||{name:w.name,type:w.planet_type,base_color:"#808080",radius:w.diameter/15e3},surface_elements:R?.surface_elements,atmosphere:R?.atmosphere,rings:R?.rings,effects_3d:R?.effects_3d,shader_uniforms:R?.shader_uniforms,universal_actions:R?.universal_actions,timing:{cosmic_origin_time:D.cosmic_origin_time,current_time_seconds:D.current_time_seconds,elapsed_time:D.elapsed_time,initial_orbital_angle:w.initial_orbital_angle,current_orbital_angle:w.current_orbital_angle,max_orbital_radius:D.max_orbital_radius,system_max_orbital_radius:w.system_max_orbital_radius},original_planet_data:w};return X(A),I.current=A,q.log("API data loaded successfully",{planet:A.planet_info.name,type:A.planet_info.type,hasEffects:!!A.surface_elements,fullRenderingData:R}),console.log("🌍 Planet API Response:",f),console.log("🎨 Rendering Data:",R),console.log("🔧 Processed Data:",A),u&&u(A),A}catch(m){const g=m instanceof Error?m.message:"Unknown error";return O(g),y&&y(g),null}finally{S(!1),window.isLoadingPlanetData=!1}}},[o,u,y]);p.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{S(!0),O(null),q.log("Loading planet data from API",{planetName:o});const g=await fetch("/api/planet/rendering-data");if(!g.ok)throw new Error(`HTTP error! status: ${g.status}`);const f=await g.json();if(!f.success)throw new Error(f.error||"Failed to fetch planet data");const w=f.planet_data,D=f.timing,R=f.rendering_data,A={planet_info:R?.planet_info||{name:w.name,type:w.planet_type,base_color:"#808080",radius:w.diameter/15e3},surface_elements:R?.surface_elements,atmosphere:R?.atmosphere,rings:R?.rings,effects_3d:R?.effects_3d,shader_uniforms:R?.shader_uniforms,universal_actions:R?.universal_actions,timing:{cosmic_origin_time:D.cosmic_origin_time,current_time_seconds:D.current_time_seconds,elapsed_time:D.elapsed_time,initial_orbital_angle:w.initial_orbital_angle,current_orbital_angle:w.current_orbital_angle,max_orbital_radius:D.max_orbital_radius,system_max_orbital_radius:w.system_max_orbital_radius},original_planet_data:w};X(A),I.current=A,q.log("API data loaded successfully",{planet:A.planet_info.name,type:A.planet_info.type,hasEffects:!!A.surface_elements,fullRenderingData:R}),console.log("🌍 Full Load - API Response:",f),console.log("🎨 Full Load - Rendering Data:",R),console.log("🔧 Full Load - Processed Data:",A),Je(A),z.current&&x.current&&(x.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Ae(A),u&&u(A)}catch(m){const g=m instanceof Error?m.message:"Unknown error";O(g),y&&y(g),Ne()}finally{S(!1),window.isLoadingPlanetData=!1}}},[o,r,l,c]);const Qe=p.useCallback(()=>{if(!N||!v.current)return;const m=r?.orbital_period_seconds||365.25*24*3600,g=2*Math.PI/m,f=N.timing?.initial_orbital_angle||0,w=Date.now()/1e3,D=0,R=l||N.timing?.cosmic_origin_time||Date.now()/1e3-3600,A=w-R+D,de=(f+A*g)%(2*Math.PI),Ye=N.timing?.max_orbital_radius||100,je=20+N.planet_info?.orbital_radius/Ye*80,At=je,Rt=je*Math.cos(de),Nt=At*Math.sin(de);v.current.position.x=Rt,v.current.position.z=Nt,v.current.position.y=0},[N,r,l]),Et=p.useCallback(async m=>{const g=m||N;if(g&&x.current)try{Je(g),z.current&&x.current&&(x.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),await Ae(g)}catch(f){q.error("Error in applyProceduralShadersFromAPI:",f),Ne()}},[N]),Ne=()=>{if(!(!x.current||!v.current)){q.warn("Applying fallback effects for planet type:",r?.planet_type);try{Ge(),v.current.material instanceof ie&&(v.current.material.color.setHex(6710886),console.log("⚠️ Applied fallback generic color - API should provide real colors"));try{const m=Di("generic"),g=ve.createEffectsFromList(m,xe,v.current);g.forEach(f=>{f.effect.addToScene&&x.current&&v.current&&f.effect.addToScene(x.current,v.current.position)}),Z.current=g,V(g)}catch(m){console.warn("Could not create fallback effects, using basic material only:",m)}We()}catch(m){q.error("Error applying fallback effects",m)}}},Ge=()=>{Z.current.forEach(m=>{try{m.effect.dispose&&m.effect.dispose()}catch{}}),Z.current=[],V([])},et=p.useCallback(()=>{F.current=requestAnimationFrame(et);const m=performance.now(),g=L.current.getDelta();E.current&&E.current.update();try{ve.updateAllEffects(g,v.current?.rotation.y)}catch{}if(v.current&&I.current){I.current.planet_info?.name;const f=I.current.original_planet_data,w=f?.orbital_period_seconds||365.25*24*3600,D=I.current.timing?.initial_orbital_angle||0;l||I.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const R=f?.axial_tilt||0,A=2*Math.PI/w;(D+oe.current*A)%(2*Math.PI);const de=I.current.timing?.max_orbital_radius||I.current.timing?.system_max_orbital_radius,Ye=f?.orbital_radius;if(!de||!Ye)return;f?.eccentricity_factor,v.current.position.set(0,0,0);const tt=f?.rotation_period_seconds||86400,je=2*Math.PI/tt;v.current.rotation.y=oe.current*je%(2*Math.PI),v.current.rotation.z=R*(Math.PI/180)}if(Z.current.forEach(f=>{f.effect.updateUniforms&&f.effect.updateUniforms(g)}),_.current&&x.current&&b.current){const f=performance.now();_.current.render(x.current,b.current);const w=performance.now()-f;if(m-ae.current>5e3){const D=1e3/(m-ae.current);We(),$(R=>({...R,frameRate:Math.round(D),renderTime:Math.round(w*100)/100})),ae.current=m}}},[]),We=p.useCallback(()=>{const m=ve.getStats();$(g=>({...g,activeEffects:m.activeEffects,enabledEffects:m.enabledEffects}))},[]);return p.useEffect(()=>{let m=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!m)return;const f=await Mt();if(!m)return;if(!Re()){m&&O("Failed to initialize 3D renderer");return}if(!m||(et(),C.current&&"ResizeObserver"in window&&(ee.current=new ResizeObserver(ne),ee.current.observe(C.current)),window.addEventListener("resize",ne),!m))return;f?await Et(f):Ne()}catch(f){m&&O(f instanceof Error?f.message:"Unknown initialization error")}})(),()=>{if(m=!1,I.current=null,F.current&&cancelAnimationFrame(F.current),ee.current&&ee.current.disconnect(),window.removeEventListener("resize",ne),Ge(),E.current&&E.current.dispose(),ce.current&&x.current&&(x.current.remove(ce.current),ce.current.geometry.dispose(),ce.current.material.dispose(),ce.current=null),z.current&&x.current&&(x.current.remove(z.current),z.current.geometry.dispose(),z.current.material.dispose(),z.current=null),_.current&&C.current)try{C.current.contains(_.current.domElement)&&C.current.removeChild(_.current.domElement),_.current.dispose()}catch{}}},[]),p.useEffect(()=>{const m=setInterval(()=>{const g=ve.getStats();$(f=>({...f,activeEffects:g.activeEffects,enabledEffects:g.enabledEffects}))},1e4);return()=>clearInterval(m)},[]),p.useEffect(()=>{N&&x.current&&v.current&&Qe()},[N,Qe]),Ti(N),s.jsxs("div",{className:`relative ${e}`,children:[h&&N&&s.jsx(Ii,{planetData:N,showInPage:!0,showInConsole:!0}),s.jsx("div",{ref:C,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),se&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:s.jsxs("div",{className:"text-white text-center",children:[s.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),s.jsx("div",{children:"Loading planet..."})]})}),U&&s.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[s.jsx("strong",{children:"Error:"})," ",U]}),N&&!se&&s.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[s.jsx("h3",{className:"text-lg font-bold",children:N.planet_info.name}),s.jsx("p",{className:"text-sm opacity-80",children:N.planet_info.type}),s.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[B.length," effects active"]}),N.surface_elements?.description&&s.jsx("p",{className:"text-xs mt-2 opacity-60",children:N.surface_elements.description.appearance})]}),h&&s.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[s.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),s.jsxs("div",{children:["Frame Rate: ",G.frameRate," FPS"]}),s.jsxs("div",{children:["Render Time: ",G.renderTime,"ms"]}),s.jsxs("div",{children:["Active Effects: ",G.activeEffects]}),s.jsxs("div",{children:["Enabled Effects: ",G.enabledEffects]}),s.jsxs("div",{className:"mt-2",children:[s.jsx("div",{className:"font-semibold",children:"Effects:"}),B.map(m=>s.jsxs("div",{className:"ml-2",children:[m.type," (",m.enabled?"ON":"OFF",")"]},m.id))]})]})]})};class Li extends gt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?s.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:s.jsxs("div",{className:"text-center p-4",children:[s.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),s.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const zi=o=>s.jsx(Li,{children:s.jsx(ki,{...o})}),Fi=({planetUrl:o,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:a})=>{const n=p.useRef(null),h=p.useRef(null),[r,l]=p.useState("Aligning Stargate..."),[c,u]=p.useState(!1),[P,y]=p.useState(!1),[C,x]=p.useState(!1),[_,b]=p.useState(!0),[v,E]=p.useState(!0),[L,F]=p.useState(null),[oe,I]=p.useState(null);p.useEffect(()=>{const S=document.createElement("style");return S.textContent=`
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
    `,document.head.appendChild(S),()=>{document.head.removeChild(S)}},[]),p.useEffect(()=>{const S=n.current;if(!S)return;const U=S.getContext("2d");if(!U)return;let O=[];const N=800;let X,B;const V=800;let G,$=.5;function Z(){const T=S?.parentElement;if(!T||!S)return;const J=T.clientWidth,re=T.clientHeight;S.width=Math.min(J,V),S.height=Math.min(re,V),X=S.width/2,B=S.height/2}function ae(){Z(),O=[];for(let T=0;T<N;T++)O.push({x:Math.random()*(S?.width||800),y:Math.random()*(S?.height||800),z:Math.random()*(S?.width||800),o:Math.random()});ee()}function ee(){!S||!U||(U.clearRect(0,0,S.width,S.height),O.forEach(T=>{T.z-=$,T.z<=0&&(T.z=S.width,T.x=Math.random()*S.width,T.y=Math.random()*S.height,T.o=Math.random());const J=S.width/T.z,re=(T.x-X)*J+X,ye=(T.y-B)*J+B,ne=2*J;U.beginPath(),U.fillStyle=`rgba(255, 255, 255, ${T.o})`,U.arc(re,ye,ne,0,2*Math.PI),U.fill()}),$<60&&($+=1),G=requestAnimationFrame(ee))}ae();const me=()=>Z();return window.addEventListener("resize",me),()=>{window.removeEventListener("resize",me),G&&cancelAnimationFrame(G)}},[]),p.useEffect(()=>{if(e&&!_){const S=new Image;S.onload=()=>{h.current&&(h.current.src=e,y(!0),x(!0))},S.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{y(!0),x(!0)},1500)},S.src=e}else(_||!e)&&setTimeout(()=>{y(!0),x(!0)},1500)},[e,_]),p.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){l("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),u(!0);const U=(V,G)=>Array.from({length:G},()=>V[Math.floor(Math.random()*V.length)]).join(""),O=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let N=0,X=0;const B=()=>{if(N>=O.length){const G="Stargate system aligned";let $=0;l("");const Z=()=>{$<G.length?(l(G.substring(0,$+1)),$++,setTimeout(Z,30)):u(!1)};Z();return}const V=O[N];l(U(V.chars,32)),X++,X>=V.iterations&&(N++,X=0),setTimeout(B,V.duration)};B()},[]);const se=()=>{b(!_),_||(y(!0),x(!0))};return s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),v&&s.jsx("div",{className:"flex items-center gap-2",children:s.jsx("button",{onClick:se,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${_?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:_?"2D View":"3D View"})})]}),s.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[s.jsx("canvas",{ref:n,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${C?"opacity-0":"opacity-100"}`,style:{filter:C?"blur(50px)":"none"}}),_&&P&&t&&s.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${P?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:s.jsx(zi,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:a,onDataLoaded:S=>{F(S)},onError:S=>{I(S),console.error("❌ Planet rendering error:",S)}})}),!_&&s.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${P?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:P&&e?s.jsx("div",{className:"w-full h-full flex items-center justify-center",children:s.jsx(kt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:s.jsx("img",{ref:h,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):s.jsx("img",{ref:h,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),v&&s.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:_?"🌍 3D":"🖼️ 2D"})]}),s.jsxs("div",{className:"text-center mt-auto",children:[s.jsxs("a",{href:o,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${c?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[s.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[s.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),r]}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),s.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",_&&L&&s.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",L.planet_info?.type," Planet",L.atmosphere&&s.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),L.rings?.has_rings&&s.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),_&&oe&&s.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Oi=({currentPlanet:o,system:e,galaxy:t,systemPlanets:i})=>{const[a,n]=p.useState(null),[h,r]=p.useState(null),[l,c]=p.useState(!1),[u,P]=p.useState(!1),[y,C]=p.useState(!0);p.useEffect(()=>{if(i&&i.length>0){const b=i.findIndex(v=>v.name.toLowerCase()===o.toLowerCase());b!==-1?(b>0?(n(i[b-1].name.toLowerCase()),c(!0)):e.index>0?(n("__prev_system__"),c(!0)):c(!1),b<i.length-1?(r(i[b+1].name.toLowerCase()),P(!0)):(r("__next_system__"),P(!0))):(c(!1),P(!1))}else c(!1),P(!1);C(!1)},[o,e.index,i]);const x=async()=>{const b=t.coordinates.join(",");if(a==="__prev_system__")try{const v=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(v.ok){const E=await v.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const F=E.system.planets[E.system.planets.length-1].name.toLowerCase();be(b,e.index-1,F,E.system.planets),Ze(b,e.index-1),window.location.href=`/planet/${F}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else a&&(be(b,e.index,a,i),window.location.href=`/planet/${a}`)},_=async()=>{const b=t.coordinates.join(",");if(h==="__next_system__")try{const v=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(v.ok){const E=await v.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const F=E.system.planets[0].name.toLowerCase();be(b,e.index+1,F,E.system.planets),Ze(b,e.index+1),window.location.href=`/planet/${F}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else h&&(be(b,e.index,h,i),window.location.href=`/planet/${h}`)};return y?null:s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:x,disabled:!l,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${l?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),s.jsx("button",{onClick:_,disabled:!u,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${u?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Bi=({planet:o,system:e,galaxy:t,planet_url:i,version:a,image_url:n,cosmic_origin_time:h,initial_angle_rotation:r})=>{const[l]=p.useState(t.coordinates.join(","));p.useEffect(()=>{document.body.setAttribute("data-coordinates",l),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",o.name.toLowerCase()),be(l,e.index,o.name,e.planets||[]),Ze(l,e.index)},[l,e.index,o.name]);const c=y=>y.replace(/_/g," "),u=y=>y.replace(/_/g," "),P=y=>y.replace(/_/g," ");return s.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[s.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),s.jsxs("div",{className:"relative z-10",children:[s.jsx(It,{}),s.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:s.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",c(o.name),"'"]})}),s.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",u(e.name),"' - Galaxy '",P(t.name),"'"]}),s.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),s.jsx(Oi,{currentPlanet:o.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),s.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:s.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[s.jsx("div",{className:"order-1 lg:order-1",children:s.jsx(Fi,{planetUrl:i,imageUrl:n,planet:o,cosmicOriginTime:h,initialAngleRotation:r})}),s.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),s.jsx("div",{className:"order-2 lg:order-2",children:s.jsx(Qt,{planet:o,system:e,galaxy:t,cosmicOriginTime:h,initialAngleRotation:r})})]})}),s.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:s.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:s.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",u(e.name),"'"]})})})]}),s.jsx(jt,{version:a})]}),s.jsx(Lt,{currentLocation:{type:"planet",name:o.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:o.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const o=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!o||!e||!t||!i){console.error("Missing required data elements");return}const a=JSON.parse(o.textContent||"{}"),n=JSON.parse(e.textContent||"{}"),h=JSON.parse(t.textContent||"{}"),r=JSON.parse(i.textContent||"{}"),l={planet:a,system:n,galaxy:h,planet_url:r.planet_url,version:r.version,image_url:r.image_url,cosmic_origin_time:r.cosmic_origin_time,initial_angle_rotation:r.initial_angle_rotation},c=document.getElementById("atlas-react-root");c&&Dt.createRoot(c).render(gt.createElement(Bi,l))}catch(o){console.error("Error initializing Planet React app:",o)}});
