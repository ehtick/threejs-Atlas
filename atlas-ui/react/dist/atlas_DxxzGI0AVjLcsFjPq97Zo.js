import{r as g,j as i,R as Be,V as Ue,c as He}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Ye}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as $e,U as Ze,m as ie,c as Pe,a as Xe}from"./atlas_Ep8Z7FyBoZ31__UNPvjgh.js";import{m as Ke,V as E,n as Q,T as q,Q as Te,l as ke,o as F,R as qe,p as Qe,q as Je,e as Me,r as Ve,s as $,N as et,t as Y,C as u,c as _e,d as ue,u as We,v as je,G as tt,w as be,F as ot,x as Ie,y as st,z as it,H as at,M as rt,I as nt,S as lt,P as ct,W as ht,J as dt,K as ut,O as mt,D as Re,A as ft,U as pt}from"./atlas_qztAvZEx8WjDTLkWZU69P.js";const gt=({planet:s,system:e,galaxy:t,cosmicOriginTime:o,initialAngleRotation:a})=>{const[r,l]=g.useState(!1),n=v=>v.replace(/_/g," "),c=v=>{const x=v/86400;return x<30?`${x.toFixed(2)} days`:x<365?`${(x/30).toFixed(2)} months`:`${(x/365).toFixed(2)} years`},h=v=>{const x=v*9/5+32;return`${v.toFixed(1)}°C (${x.toFixed(1)}°F)`},d=v=>`${v.toExponential(2)} kg`,C=v=>v>=1e3?`${(v/1e3).toFixed(2)} km`:`${v.toFixed(2)} m`;return i.jsxs("div",{className:"h-full flex flex-col relative",children:[i.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),i.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[i.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),i.jsx($e,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),i.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),i.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),i.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),i.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),i.jsx("div",{className:"text-xs font-bold text-orange-300",children:d(s.mass)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),i.jsx("div",{className:"text-xs font-bold text-orange-300",children:C(s.diameter)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),i.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),i.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),i.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),i.jsx("div",{className:"text-xs font-bold text-cyan-300",children:c(s.orbital_period_seconds)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),i.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),i.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[i.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),i.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),i.jsx("div",{className:"text-xs font-bold text-red-300",children:h(s.surface_temperature)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[i.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),i.jsx("div",{className:"text-xs font-bold text-red-300",children:c(s.rotation_period_seconds)})]})]})]}),i.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&i.jsx("button",{onClick:()=>l(!r),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:r?"▲ Less":"▼ All"})]}),i.jsx("div",{className:"flex flex-wrap gap-1",children:(r?s.elements:s.elements.slice(0,4)).map((v,x)=>i.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:v},x))})]})]}),i.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[i.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),i.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Status:"}),i.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Planet:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(s.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"System:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(e.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"System ID:"}),i.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),i.jsx("div",{className:"text-white truncate font-medium",children:n(t.name)})]}),i.jsxs("div",{className:"bg-white/5 rounded p-2",children:[i.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),i.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},De={type:"change"},Ne={type:"start"},Ge={type:"end"},xe=new qe,ze=new Qe,yt=Math.cos(70*Je.DEG2RAD),N=new E,I=2*Math.PI,P={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Se=1e-6;class vt extends Ke{constructor(e,t=null){super(e,t),this.state=P.NONE,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Q.ROTATE,MIDDLE:Q.DOLLY,RIGHT:Q.PAN},this.touches={ONE:q.ROTATE,TWO:q.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new Te,this._lastTargetPosition=new E,this._quat=new Te().setFromUnitVectors(e.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ke,this._sphericalDelta=new ke,this._scale=1,this._panOffset=new E,this._rotateStart=new F,this._rotateEnd=new F,this._rotateDelta=new F,this._panStart=new F,this._panEnd=new F,this._panDelta=new F,this._dollyStart=new F,this._dollyEnd=new F,this._dollyDelta=new F,this._dollyDirection=new E,this._mouse=new F,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bt.bind(this),this._onPointerDown=xt.bind(this),this._onPointerUp=_t.bind(this),this._onContextMenu=jt.bind(this),this._onMouseWheel=Et.bind(this),this._onKeyDown=St.bind(this),this._onTouchStart=Pt.bind(this),this._onTouchMove=Mt.bind(this),this._onMouseDown=wt.bind(this),this._onMouseMove=Ct.bind(this),this._interceptControlDown=Nt.bind(this),this._interceptControlUp=At.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(De),this.update(),this.state=P.NONE}update(e=null){const t=this.object.position;N.copy(t).sub(this.target),N.applyQuaternion(this._quat),this._spherical.setFromVector3(N),this.autoRotate&&this.state===P.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let o=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(o)&&isFinite(a)&&(o<-Math.PI?o+=I:o>Math.PI&&(o-=I),a<-Math.PI?a+=I:a>Math.PI&&(a-=I),o<=a?this._spherical.theta=Math.max(o,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(o+a)/2?Math.max(o,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=l!=this._spherical.radius}if(N.setFromSpherical(this._spherical),N.applyQuaternion(this._quatInverse),t.copy(this.target).add(N),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const n=N.length();l=this._clampDistance(n*this._scale);const c=n-l;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const n=new E(this._mouse.x,this._mouse.y,0);n.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const h=new E(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(n),this.object.updateMatrixWorld(),l=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(xe.origin.copy(this.object.position),xe.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xe.direction))<yt?this.object.lookAt(this.target):(ze.setFromNormalAndCoplanarPoint(this.object.up,this.target),xe.intersectPlane(ze,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Se||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Se||this._lastTargetPosition.distanceToSquared(this.target)>Se?(this.dispatchEvent(De),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?I/60*this.autoRotateSpeed*e:I/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){N.setFromMatrixColumn(t,0),N.multiplyScalar(-e),this._panOffset.add(N)}_panUp(e,t){this.screenSpacePanning===!0?N.setFromMatrixColumn(t,1):(N.setFromMatrixColumn(t,0),N.crossVectors(this.object.up,N)),N.multiplyScalar(e),this._panOffset.add(N)}_pan(e,t){const o=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;N.copy(a).sub(this.target);let r=N.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/o.clientHeight,this.object.matrix),this._panUp(2*t*r/o.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/o.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/o.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const o=this.domElement.getBoundingClientRect(),a=e-o.left,r=t-o.top,l=o.width,n=o.height;this._mouse.x=a/l*2-1,this._mouse.y=-(r/n)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(I*this._rotateDelta.x/t.clientHeight),this._rotateUp(I*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(o,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(o,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(o*o+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const o=this._getSecondPointerPosition(e),a=.5*(e.pageX+o.x),r=.5*(e.pageY+o.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(I*this._rotateDelta.x/t.clientHeight),this._rotateUp(I*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(o,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,a=e.pageY-t.y,r=Math.sqrt(o*o+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,n=(e.pageY+t.y)*.5;this._updateZoomParameters(l,n)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new F,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,o={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(o.deltaY*=10),o}}function xt(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function bt(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function _t(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ge),this.state=P.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function wt(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Q.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=P.DOLLY;break;case Q.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=P.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=P.ROTATE}break;case Q.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=P.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=P.PAN}break;default:this.state=P.NONE}this.state!==P.NONE&&this.dispatchEvent(Ne)}function Ct(s){switch(this.state){case P.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case P.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case P.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Et(s){this.enabled===!1||this.enableZoom===!1||this.state!==P.NONE||(s.preventDefault(),this.dispatchEvent(Ne),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ge))}function St(s){this.enabled!==!1&&this._handleKeyDown(s)}function Pt(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case q.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=P.TOUCH_ROTATE;break;case q.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=P.TOUCH_PAN;break;default:this.state=P.NONE}break;case 2:switch(this.touches.TWO){case q.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=P.TOUCH_DOLLY_PAN;break;case q.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=P.TOUCH_DOLLY_ROTATE;break;default:this.state=P.NONE}break;default:this.state=P.NONE}this.state!==P.NONE&&this.dispatchEvent(Ne)}function Mt(s){switch(this._trackPointer(s),this.state){case P.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case P.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case P.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case P.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=P.NONE}}function jt(s){this.enabled!==!1&&s.preventDefault()}function Nt(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function At(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Fe{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class we{ringSystem;material;geometry;animationId;params;planetRadius;static GRAY_VARIATIONS={dark:{baseGray:.18,variation:.04},medium:{baseGray:.25,variation:.06},light:{baseGray:.32,variation:.06},mixed:{baseGray:.25,variation:.08}};constructor(e,t){this.planetRadius=e,this.params={innerRadius:t.innerRadius||e*1.3,outerRadius:t.outerRadius||e*1.8,tiltFactor:t.tiltFactor||.2,particleCount:t.particleCount||1e3,grayVariation:t.grayVariation||"medium",ringThickness:t.ringThickness||.1,sparkleIntensity:t.sparkleIntensity||.03,brightness:t.brightness||2.2,rotationSync:t.rotationSync!==!1,...t},this.geometry=new Me,this.material=this.createRingMaterial(),this.ringSystem=new Ve(this.geometry,this.material),this.generateRingGeometry()}createRingMaterial(){return new $({uniforms:{brightness:{value:this.params.brightness},time:{value:0}},vertexShader:`
        attribute float size;
        varying vec3 vColor;
        varying float vDistance;
        varying float vSize;
        
        void main() {
          vColor = color;
          vSize = size;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vDistance = -mvPosition.z;
          
          // Tamaño dinámico basado en distancia para mejor percepción de profundidad
          gl_PointSize = size * (300.0 / vDistance);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float brightness;
        uniform float time;
        varying vec3 vColor;
        varying float vDistance;
        varying float vSize;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float distance = length(center);
          
          if (distance > 0.5) discard;
          
          // Crear partícula circular suave con degradado
          float alpha = (1.0 - distance * 2.0);
          alpha = smoothstep(0.0, 1.0, alpha);
          
          // Efecto de resplandor sutil
          float glow = 1.0 - distance;
          glow = pow(glow, 1.5);
          
          // Color final con brillo y resplandor
          vec3 finalColor = vColor * brightness * glow;
          
          // Alpha basado en distancia para profundidad
          float depthAlpha = clamp(200.0 / vDistance, 0.3, 1.0);
          
          // Efecto de parpadeo sutil para algunas partículas
          float sparkle = vSize > 1.5 ? (0.8 + 0.2 * sin(time * 2.0 + vDistance * 0.1)) : 1.0;
          
          gl_FragColor = vec4(finalColor * sparkle, alpha * depthAlpha);
        }
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:et})}generateRingGeometry(){let e;this.params.particleData&&this.params.particleData.length>0?e=this.processParticleData(this.params.particleData):e=this.generateProceduralRings(),this.createGeometryFromParticles(e)}processParticleData(e){const t=[],o=new Fe(Date.now());for(const a of e){const r=this.planetRadius/(this.params.innerRadius||200),l=a.distance*r,n=a.angle,c=Math.asin(this.params.tiltFactor||.2),h=l*Math.cos(n),d=l*Math.sin(n),C=d*Math.sin(c),v=d*Math.cos(c),x=(this.params.outerRadius-this.params.innerRadius)*(this.params.ringThickness||.4),S=o.uniform(-x*.8,x*.8),b=o.uniform(-x*.3,x*.3);t.push({x:h+b,y:C+S,z:v+o.uniform(-x*.4,x*.4),distance:l,angle:n,size:a.size||1,color:a.color||[.25,.25,.25,1]})}return t}generateProceduralRings(){const e=[],t=new Fe(12345),o=this.params.particleCount||1e3;for(let a=0;a<o;a++){const r=Math.pow(t.uniform(0,1),.7),l=this.params.innerRadius+(this.params.outerRadius-this.params.innerRadius)*r,n=t.uniform(0,Math.PI*2),c=l*Math.cos(n),h=l*Math.sin(n),d=Math.asin(this.params.tiltFactor||.2),C=h*Math.sin(d),v=h*Math.cos(d),x=(this.params.outerRadius-this.params.innerRadius)*(this.params.ringThickness||.1),S=t.uniform(-x,x),b=we.GRAY_VARIATIONS[this.params.grayVariation||"medium"],y=Math.max(.1,Math.min(.6,b.baseGray+t.uniform(-b.variation,b.variation))),_=t.uniform(.8,1.5),T=t.uniform(0,1)<(this.params.sparkleIntensity||.03)?_*t.uniform(1.2,2):_;e.push({x:c,y:C+S,z:v,distance:l,angle:n,size:T,color:[y,y,y,1]})}return e}createGeometryFromParticles(e){const t=new Float32Array(e.length*3),o=new Float32Array(e.length*3),a=new Float32Array(e.length);for(let r=0;r<e.length;r++){const l=e[r];t[r*3]=l.x,t[r*3+1]=l.y,t[r*3+2]=l.z,o[r*3]=l.color[0],o[r*3+1]=l.color[1],o[r*3+2]=l.color[2],a[r]=l.size}this.geometry.setAttribute("position",new Y(t,3)),this.geometry.setAttribute("color",new Y(o,3)),this.geometry.setAttribute("size",new Y(a,1))}addToScene(e,t){t&&this.ringSystem.position.copy(t),this.ringSystem.renderOrder=1,e.add(this.ringSystem)}update(e,t){this.material.uniforms.time.value+=e,this.params.rotationSync&&t!==void 0&&(this.ringSystem.rotation.y=t)}updateParams(e){this.params={...this.params,...e},e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness),(e.innerRadius||e.outerRadius||e.particleCount)&&this.generateRingGeometry()}getObject3D(){return this.ringSystem}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.geometry.dispose(),this.material.dispose()}}function Tt(s,e){const t={innerRadius:s.inner_radius||e*1.3,outerRadius:s.outer_radius||e*1.8,tiltFactor:s.tilt_factor||.2,particleData:[...s.full_ring?.particles||[],...s.ontop_ring?.particles||[]],rotationSync:!0,brightness:2.2};return new we(e,t)}class Le{seed;constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}random(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return this.random()*(t-e)+e}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class ae{material;params;mesh;static vertexShader=`
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
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new u(16753920),bandColor:t.bandColor||new u(16753920),stormColor:t.stormColor||new u(9109504),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,stormIntensity:t.stormIntensity||.7,noiseScale:t.noiseScale||4},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),o=new Le(12345);for(let a=0;a<e&&a<20;a++)t[a]=o.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),o=new Le(67890);for(let a=0;a<e&&a<20;a++)t[a]=o.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof u?this.params.baseColor:new u(this.params.baseColor),t=this.params.bandColor instanceof u?this.params.bandColor:new u(this.params.bandColor),o=this.params.stormColor instanceof u?this.params.stormColor:new u(this.params.stormColor);return new $({vertexShader:ae.vertexShader,fragmentShader:ae.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},stormColor:{value:o},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},stormIntensity:{value:this.params.stormIntensity},noiseScale:{value:this.params.noiseScale}}})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){if(this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.baseColor){const t=e.baseColor instanceof u?e.baseColor:new u(e.baseColor);this.material.uniforms.planetColor.value=t}if(e.bandColor){const t=e.bandColor instanceof u?e.bandColor:new u(e.bandColor);this.material.uniforms.bandColor.value=t}if(e.stormColor){const t=e.stormColor instanceof u?e.stormColor:new u(e.stormColor);this.material.uniforms.stormColor.value=t}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function kt(s,e){const t=e.cloud_bands||{},o={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new u(e.base_color):new u(16753920),animationSpeed:1,turbulence:e.turbulence||.5,stormIntensity:e.storm_intensity||.7};return new ae(s,o)}class re{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new u(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsationSpeed||2,fresnelPower:t.fresnelPower||2},this.geometry=new _e(e*this.params.scale,64,64),this.material=this.createMaterial(),this.mesh=new ue(this.geometry,this.material)}createMaterial(){const e=this.params.color instanceof u?this.params.color:new u(this.params.color);return new $({vertexShader:re.vertexShader,fragmentShader:re.fragmentShader,uniforms:{glowColor:{value:e},glowIntensity:{value:this.params.intensity},glowFalloff:{value:this.params.falloff},fresnelPower:{value:this.params.fresnelPower},time:{value:0},pulsation:{value:this.params.pulsation},pulsationSpeed:{value:this.params.pulsationSpeed}},transparent:!0,blending:je,side:We,depthWrite:!1})}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof u?e.color:new u(e.color);this.material.uniforms.glowColor.value=t}e.intensity!==void 0&&(this.material.uniforms.glowIntensity.value=e.intensity),e.falloff!==void 0&&(this.material.uniforms.glowFalloff.value=e.falloff),e.pulsation!==void 0&&(this.material.uniforms.pulsation.value=e.pulsation),e.pulsationSpeed!==void 0&&(this.material.uniforms.pulsationSpeed.value=e.pulsationSpeed)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}class ne{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new u(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new Me,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new Ve(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),n=this.params.color instanceof u?this.params.color:new u(this.params.color);for(let c=0;c<this.particleCount;c++){const h=Math.random()*Math.PI*2,d=Math.acos(Math.random()*2-1),C=e*(1+Math.random()*.1);t[c*3]=C*Math.sin(d)*Math.cos(h),t[c*3+1]=C*Math.sin(d)*Math.sin(h),t[c*3+2]=C*Math.cos(d),o[c*3]=n.r*(.8+Math.random()*.4),o[c*3+1]=n.g*(.8+Math.random()*.4),o[c*3+2]=n.b*(.8+Math.random()*.4),a[c]=this.params.size*(Math.random()*.5+.75),r[c]=this.params.speed*(Math.random()*.8+.6),l[c]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new Y(t,3)),this.geometry.setAttribute("customColor",new Y(o,3)),this.geometry.setAttribute("size",new Y(a,1)),this.geometry.setAttribute("speed",new Y(r,1)),this.geometry.setAttribute("phase",new Y(l,1))}createMaterial(){return new $({vertexShader:ne.vertexShader,fragmentShader:ne.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:je,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}class le{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.5,.5,.8,.3],width:t.width||15,opacity:t.opacity||.3,density:t.density||1},console.log("DenseAtmosphereEffect params:",this.params);const o=e*(1+this.params.width/100);this.geometry=new _e(o,32,32);const a=new u(this.params.color[0],this.params.color[1],this.params.color[2]);console.log("THREE.Color created:",a,"from RGB:",[this.params.color[0],this.params.color[1],this.params.color[2]]),this.material=new $({vertexShader:le.vertexShader,fragmentShader:le.fragmentShader,uniforms:{atmosphereColor:{value:a},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:je,side:We,depthWrite:!1}),console.log("Material created with shader and color:",a,"opacity:",this.params.opacity),this.mesh=new ue(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){console.log("Updating color to:",e.color);const t=new u(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function It(s,e){const t=e.halo||{},o={color:t.color?new u().setRGB(t.color[0],t.color[1],t.color[2]):new u(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsation_speed||2};return new re(s,o)}function Rt(s,e){const t=e.streaks||{},o={color:t.color?new u().setRGB(t.color[0],t.color[1],t.color[2]):new u(16777215),particleCount:t.count||100,speed:t.speed||1,size:2,opacity:.6,turbulence:1};return new ne(s,o)}function Dt(s,e){console.log("Atmosphere data received:",e);let t=[.5,.5,.8,.15],o=15;e&&(e.color&&Array.isArray(e.color)&&(console.log("Color from API (already normalized):",e.color),t=[e.color[0],e.color[1],e.color[2],e.color[3]*.5]),e.width&&(o=e.width),console.log("Processed color:",t),console.log("Width:",o));const a={type:e?.type||"Thin",color:t,width:o,opacity:t[3],density:1};return console.log("Final params:",a),new le(s,a)}class ce{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={color:e.color||new u(7368816),roughness:e.roughness||.7,metalness:e.metalness||.9,fragmentationIntensity:e.fragmentationIntensity||.5,noiseScale:e.noiseScale||8,noiseIntensity:e.noiseIntensity||.3,edgeFragmentation:e.edgeFragmentation||1,circularWaves:e.circularWaves||1,fogPatches:e.fogPatches||1},this.material=this.createMaterial()}createMaterial(){const e=this.params.color instanceof u?this.params.color:new u(this.params.color);return new $({vertexShader:ce.vertexShader,fragmentShader:ce.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},roughness:{value:this.params.roughness},metalness:{value:this.params.metalness},fragmentationIntensity:{value:this.params.fragmentationIntensity},noiseScale:{value:this.params.noiseScale},noiseIntensity:{value:this.params.noiseIntensity},edgeFragmentation:{value:this.params.edgeFragmentation},circularWaves:{value:this.params.circularWaves},fogPatches:{value:this.params.fogPatches}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof u?e.color:new u(e.color);this.material.uniforms.baseColor.value=t}e.roughness!==void 0&&(this.material.uniforms.roughness.value=e.roughness),e.metalness!==void 0&&(this.material.uniforms.metalness.value=e.metalness),e.fragmentationIntensity!==void 0&&(this.material.uniforms.fragmentationIntensity.value=e.fragmentationIntensity),e.noiseScale!==void 0&&(this.material.uniforms.noiseScale.value=e.noiseScale),e.noiseIntensity!==void 0&&(this.material.uniforms.noiseIntensity.value=e.noiseIntensity),e.edgeFragmentation!==void 0&&(this.material.uniforms.edgeFragmentation.value=e.edgeFragmentation),e.circularWaves!==void 0&&(this.material.uniforms.circularWaves.value=e.circularWaves),e.fogPatches!==void 0&&(this.material.uniforms.fogPatches.value=e.fogPatches)}getMaterial(){return this.material}dispose(){this.material.dispose()}}class Oe{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new u(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new tt,this.generateFragments()}generateFragments(){const e=new be({color:this.params.color instanceof u?this.params.color:new u(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const o=this.generateFragmentGeometry(),a=new ue(o,e);this.positionFragment(a,t),a.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const r=this.params.size*(Math.random()*.5+.75);a.scale.set(r,r,r),a.userData={rotationAxis:new E(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(a),this.fragments.add(a)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],o=[],a=[];a.push(new E(0,0,0));for(let n=0;n<e;n++){const c=n/e*Math.PI*2,h=Math.random()*.5+.5,d=(Math.random()-.5)*.3;a.push(new E(Math.cos(c)*h,Math.sin(c)*h,d))}for(let n=1;n<=e;n++){const h=a[n].clone();h.z+=Math.random()*.4+.2,a.push(h)}for(const n of a)t.push(n.x,n.y,n.z);for(let n=1;n<e;n++)o.push(0,n,n+1);o.push(0,e,1);const r=a.length-e-1;for(let n=0;n<e-1;n++)o.push(r,r+n+2,r+n+1);o.push(r,r+1,r+e);for(let n=0;n<e;n++){const c=n+1,h=(n+1)%e+1,d=c+e,C=h+e;o.push(c,d,h),o.push(h,d,C)}const l=new Me;return l.setAttribute("position",new ot(t,3)),l.setIndex(o),l.computeVertexNormals(),l}positionFragment(e,t){let o;switch(this.params.distribution){case"edge":o=this.generateEdgePosition(t);break;case"surface":o=this.generateSurfacePosition();break;case"random":default:o=this.generateRandomPosition();break}e.position.copy(o)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,o=this.planetRadius*(.95+Math.random()*.1),a=(Math.random()-.5)*this.planetRadius*.5;return new E(Math.cos(t)*o,a,Math.sin(t)*o)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),o=this.planetRadius*(1+Math.random()*.05);return new E(o*Math.sin(t)*Math.cos(e),o*Math.sin(t)*Math.sin(e),o*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;return new E(e*Math.sin(t)*Math.cos(o),e*Math.sin(t)*Math.sin(o),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,o)=>{const a=t.userData;t.rotateOnAxis(a.rotationAxis,a.rotationSpeed*e*this.params.animationSpeed);const r=Math.sin(Date.now()*.001+o)*.001;t.position.y+=r*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof u?e.color:new u(e.color);this.fragmentMeshes.forEach(o=>{o.material instanceof be&&(o.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof be&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Ie&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Ie&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class he{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new u(.8,.8,.8),cloudColor:e.cloudColor||new u(.7,.7,.7),craterColor:e.craterColor||new u(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof u?this.params.mountainColor:new u(this.params.mountainColor),t=this.params.cloudColor instanceof u?this.params.cloudColor:new u(this.params.cloudColor),o=this.params.craterColor instanceof u?this.params.craterColor:new u(this.params.craterColor),a=new Array(30).fill(new E),r=new Array(30).fill(new E),l=new Array(10).fill(new E);return this.params.mountains&&this.params.mountains.forEach((n,c)=>{c<30&&(a[c]=new E(n.position[0],n.position[1],n.angle),r[c]=new E(n.width,n.height,0))}),this.params.clouds&&this.params.clouds.forEach((n,c)=>{c<10&&(l[c]=new E(n.position[0],n.position[1],n.radius))}),new $({vertexShader:he.vertexShader,fragmentShader:he.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new u(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:a},mountainSizes:{value:r},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:l},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new E(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new E},craterColor:{value:o},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function zt(s){const e=s.surface_elements||s.surface||s;let t=[.8,.8,.8];const o=s.planet_info?.base_color||s.base_color;if(o&&typeof o=="string"){const c=o.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255]}else Array.isArray(o)&&(t=o);console.log("⛰️ Creating rocky terrain effect with color from Python:",{base_color:s.planet_info?.base_color,final_color:t});let a=[],r=[],l;if(s.seeds){const c=b=>{let y=b;return()=>(y=(y*1664525+1013904223)%4294967296,y/4294967296)},h=b=>{const y=b()*Math.PI*2,_=Math.acos(b()*2-1),M=Math.sin(_)*Math.cos(y),T=Math.sin(_)*Math.sin(y);return[M,T]},d=c(s.seeds.planet_seed),C=6+Math.floor(d()*4);for(let b=0;b<C;b++)a.push({position:h(d),width:.1+d()*.3,height:.2+d()*.6,angle:d()*Math.PI*2});const v=c(s.seeds.shape_seed+1e3),x=3+Math.floor(v()*4);for(let b=0;b<x;b++)r.push({position:h(v),radius:.08+v()*.17});const S=c(s.seeds.shape_seed+2e3);S()<.7&&(l={position:h(S),radius:.1+S()*.2}),console.log("⛰️ Generated procedural rocky terrain:",{seeds:s.seeds,mountainCount:a.length,cloudCount:r.length,hasCrater:!!l})}const n={mountains:e.mountains?.length>0?e.mountains:a,clouds:e.clouds?.length>0?e.clouds:r,crater:e.crater||l,baseTextureIntensity:.4,mountainColor:new u(t[0]*1.1,t[1]*1.1,t[2]*1.1),cloudColor:new u(t[0]*.9,t[1]*.9,t[2]*.9),craterColor:new u(t[0]*.3,t[1]*.3,t[2]*.3)};return new he(n)}class de{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new u(.675,.843,.902),crackColor:e.crackColor||new u(.2,.2,.2),iceCapColor:e.iceCapColor||new u(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof u?this.params.crystalColor:new u(this.params.crystalColor),t=this.params.crackColor instanceof u?this.params.crackColor:new u(this.params.crackColor),o=this.params.iceCapColor instanceof u?this.params.iceCapColor:new u(this.params.iceCapColor),a=new Array(50).fill(new E),r=new Array(50).fill(new E),l=new Array(12).fill(new F),n=new Array(4).fill(new E);return this.params.crystals&&this.params.crystals.forEach((c,h)=>{h<50&&(a[h]=new E(c.position[0],c.position[1],c.angle),r[h]=new E(c.length,c.width,0))}),this.params.cracks&&this.params.cracks.forEach((c,h)=>{h<12&&(l[h]=new F(c.angle,c.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((c,h)=>{h<4&&(n[h]=new E(c.position[0],c.position[1],c.radius))}),new $({vertexShader:de.vertexShader,fragmentShader:de.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new u(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:a},crystalSizes:{value:r},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:l},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:n},iceCapColor:{value:o},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Ft(s){const e=s.surface_elements||s.surface||s;let t=[.9,.95,1];const o=s.planet_info?.base_color||s.base_color;if(o&&typeof o=="string"){const c=o.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255],t=[Math.min(t[0]+.1,1),Math.min(t[1]+.15,1),Math.min(t[2]+.2,1)]}else Array.isArray(o)&&(t=o);console.log("❄️ Creating icy terrain effect with color from Python:",{base_color:s.planet_info?.base_color,final_color:t});let a=[],r=[],l=[];if(s.seeds){const c=y=>{let _=y;return()=>(_=(_*1664525+1013904223)%4294967296,_/4294967296)},h=y=>{const _=y()*Math.PI*2,M=Math.acos(y()*2-1),T=Math.sin(M)*Math.cos(_),R=Math.sin(M)*Math.sin(_);return[T,R]},d=c(s.seeds.planet_seed),C=4+Math.floor(d()*6);for(let y=0;y<C;y++)a.push({position:h(d),length:.1+d()*.2,width:.05+d()*.1,angle:d()*Math.PI*2});const v=c(s.seeds.shape_seed),x=3+Math.floor(v()*5);for(let y=0;y<x;y++)r.push({angle:v()*Math.PI*2,length:.2+v()*.6});const S=c(s.seeds.shape_seed+500),b=2+Math.floor(S()*3);for(let y=0;y<b;y++)l.push({position:h(S),radius:.15+S()*.25});console.log("❄️ Generated procedural icy terrain:",{seeds:s.seeds,crystalCount:a.length,crackCount:r.length,iceCapCount:l.length})}const n={crystals:e.crystals?.length>0?e.crystals:a,cracks:e.cracks?.length>0?e.cracks:r,iceCaps:e.ice_caps?.length>0?e.ice_caps:l,baseTextureIntensity:.3,crystalColor:new u(t[0]*.8,t[1]*.9,t[2]*1),crackColor:new u(t[0]*.3,t[1]*.3,t[2]*.4),iceCapColor:new u(t[0]*1.1,t[1]*1.1,t[2]*1)};return new de(n)}class K{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return K.instance||(K.instance=new K),K.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,o)=>new ce(e),fromPythonData:(e,t,o)=>{let a=[.4,.4,.45];const r=e.planet_info?.base_color||e.surface?.base_color;if(r&&typeof r=="string"){const l=r.replace("#","");a=[parseInt(l.substr(0,2),16)/255,parseInt(l.substr(2,2),16)/255,parseInt(l.substr(4,2),16)/255]}else Array.isArray(r)&&(a=r);return console.log("⚙️ Creating metallic effect with color from Python:",{base_color:e.planet_info?.base_color,surface_color:e.surface?.base_color,final_color:a}),new ce({color:a,roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}}),this.registerEffect("gas_giant_bands",{create:(e,t,o)=>new ae(o,e),fromPythonData:(e,t,o)=>kt(o,e)}),this.registerEffect("atmospheric_halo",{create:(e,t)=>new re(t,e),fromPythonData:(e,t)=>It(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new ne(t,e),fromPythonData:(e,t)=>Rt(t,e.atmosphere||{})}),this.registerEffect("dense_atmosphere",{create:(e,t)=>new le(t,e),fromPythonData:(e,t)=>Dt(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new we(t,e),fromPythonData:(e,t)=>Tt(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new Oe(t,e),fromPythonData:(e,t)=>new Oe(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,o)=>new he(e),fromPythonData:(e,t,o)=>zt(e)}),this.registerEffect("icy_terrain",{create:(e,t,o)=>new de(e),fromPythonData:(e,t,o)=>Ft(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,o,a,r=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const n=l.create(t,o,a);if(!n)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:n,priority:r,enabled:!0};return this.effects.set(c.id,c),c}catch(n){return console.error(`Error creating effect '${e}':`,n),null}}createEffectFromPythonData(e,t,o,a,r=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,o,a,r);try{const n=l.fromPythonData(t,o,a);if(!n)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:n,priority:r,enabled:!0};return this.effects.set(c.id,c),c}catch(n){return console.error(`Error creating effect '${e}' from Python data:`,n),null}}createEffectsFromList(e,t,o){const a=[],r=e.sort((l,n)=>(l.priority||0)-(n.priority||0));for(const l of r){const n=this.createEffect(l.type,l.params,t,o,l.priority);n&&(n.enabled=l.enabled!==!1,a.push(n))}return a}createEffectsFromPythonPlanetData(e,t,o,a){const r=[];if(console.log("🚀 PYTHON API DATA - COMPLETE DATASET:",JSON.stringify(e,null,2)),e.surface_elements){const l=e.surface_elements;if(l.effects_3d&&Array.isArray(l.effects_3d))for(const n of l.effects_3d){const c=this.createEffect(n.type,n.params,t,o,n.priority||0);c&&(r.push(c),c.effect.addToScene&&c.effect.addToScene(a,o.position))}switch(l.type==="rendering_commands"&&l.commands&&(console.log("🎯 Executing rendering commands from Python"),this.executeRenderingCommands(l.commands,a,o,t)),l.type){case"gas_giant":const n=this.createEffectFromPythonData("gas_giant_bands",l,t,o,0);n&&r.push(n);break;case"metallic":case"metallic_3d":const c=this.createEffectFromPythonData("metallic_surface",{...e,surface:{...e.surface,base_color:e.planet_info?.base_color||e.surface?.base_color}},t,o,0);c&&r.push(c);break;case"rocky":const h=this.createEffectFromPythonData("rocky_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,o,0);h&&(r.push(h),h.effect.apply(o));break;case"icy":const d=this.createEffectFromPythonData("icy_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,o,0);d&&(r.push(d),d.effect.apply(o));break;case"oceanic":console.log("🚨 PROBLEM: Frontend has planet-type specific logic"),console.log("🔧 SOLUTION: Python should send specific rendering commands");break}}if(e.atmosphere){if(e.atmosphere.halo){const l=this.createEffectFromPythonData("atmospheric_halo",e,t,o,10);l&&(r.push(l),l.effect.addToScene(a,o.position))}if(e.atmosphere.streaks){const l=this.createEffectFromPythonData("atmospheric_streaks",e,t,o,20);l&&(r.push(l),l.effect.addToScene(a,o.position))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const l=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),n={...e.atmosphere};l==="oceanic"&&(n.opacity=Math.min(n.opacity||.3,.15),n.width=Math.min(n.width||15,8),console.log("🌊 Applying subtle atmosphere for oceanic planet:",n));const c=this.createEffectFromPythonData("dense_atmosphere",n,t,o,5);c&&(r.push(c),c.effect.addToScene(a,o.position))}}if(e.rings&&e.rings.has_rings){const l=this.createEffectFromPythonData("ring_system",e,t,o,1);l&&(r.push(l),l.effect.addToScene(a,o.position))}if(e.surface_elements?.has_fragmentation_zones){const l=this.createEffectFromPythonData("fragmentation",e,t,o,5);l&&(r.push(l),l.effect.addToScene(a,o.position))}return console.log(`✅ Created ${r.length} effects for planet`),r}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const o=this.effects.get(e);o&&(o.enabled=t!==void 0?t:!o.enabled)}updateAllEffects(e,t){for(const o of this.effects.values())if(o.enabled&&o.effect.update)try{o.effect.update(e,t)}catch(a){console.error(`Error updating effect ${o.type}:`,a)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}executeRenderingCommands(e,t,o,a){console.log(`🎯 Executing ${e.length} rendering commands from Python`),e.forEach((r,l)=>{try{switch(r.command){case"apply_material":this.executeApplyMaterial(r,o);break;case"create_surface_element":this.executeCreateSurfaceElement(r,t,a);break;default:console.warn(`❓ Unknown command: ${r.command}`)}}catch(n){console.error(`❌ Error executing command ${l}:`,n)}})}executeApplyMaterial(e,t){console.log("🎨 Applying material from Python command:",e);const o=e.properties;if(e.material_type==="phong"){const a=new st({color:new u(o.color),shininess:o.shininess||50,specular:new u(o.specular||"#222222"),transparent:o.transparent||!1,opacity:o.opacity||1});t.material=a,console.log("✅ Applied phong material with color:",o.color)}}executeCreateSurfaceElement(e,t,o){console.log("🔧 Creating surface element:",e.element_type,e.id);let a;switch(e.geometry.type){case"circle":a=new at(e.size*o*.1,e.geometry.segments||16);break;case"sphere":a=new _e(e.radius*o*.1,12,12);break;case"irregular_polygon":a=new it(0,.05*o,8);break;default:console.warn(`❓ Unknown geometry type: ${e.geometry.type}`);return}const r=e.color,l=new rt({color:new u(r[0],r[1],r[2]),opacity:r[3]||1,transparent:(r[3]||1)<1}),n=new ue(a,l);if(e.position){const c=this.normalizedToSphere(e.position,o*(1+(e.geometry.elevation||0)));n.position.copy(c),n.lookAt(new E(0,0,0))}t.add(n),console.log("✅ Created surface element:",e.id)}normalizedToSphere(e,t){const[o,a]=e,r=Math.acos(1-2*((a+1)/2)),l=2*Math.PI*((o+1)/2),n=t*Math.sin(r)*Math.cos(l),c=t*Math.cos(r),h=t*Math.sin(r)*Math.sin(l);return new E(n,c,h)}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const oe=K.getInstance(),se={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmospheric_halo:{intensity:1,falloff:2,scale:1.2,pulsation:!1},gas_giant_bands:{numBands:8,animationSpeed:1,turbulence:.5,stormIntensity:.7}};function Lt(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...se.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmospheric_halo",params:{...se.atmospheric_halo,color:[.6,.1,.9],scale:1.15},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"gas_giant_bands",params:se.gas_giant_bands,priority:0},{type:"atmospheric_halo",params:{...se.atmospheric_halo,color:[1,.6,.2],intensity:.8},priority:10});break;case"icy":e.push({type:"atmospheric_halo",params:{...se.atmospheric_halo,color:[.5,.8,1],intensity:.6,scale:1.1},priority:10});break;default:e.push({type:"atmospheric_halo",params:{color:[.5,.5,.8],intensity:.5},priority:10});break}return e}const H={log:(s,e)=>{console.log(`🎮 [Effects] ${s}`,e||"")},warn:(s,e)=>{console.warn(`⚠️ [Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`❌ [Effects] ${s}`,e||"")},debug:(s,e)=>{}},Ot="1.0.0",Bt="Atlas Planet Effects Library";new Date().toISOString();H.log(`Initialized ${Bt} v${Ot}`);const Vt=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[o,a]=g.useState([]),[r,l]=g.useState({});g.useEffect(()=>{if(!s)return;const h=n(s);l(h),e&&(console.group(`🔍 DEBUG: DATOS DEL PLANETA ${s.planet_info?.name||"Unknown"}`),console.log("1️⃣ INFORMACIÓN BÁSICA:",{name:s.planet_info?.name,type:s.planet_info?.type,base_color:s.planet_info?.base_color,radius:s.planet_info?.radius}),console.log("2️⃣ SEMILLAS:",s.seeds),console.log("3️⃣ ELEMENTOS DE SUPERFICIE:",s.surface_elements),s.surface_elements?.type==="oceanic"&&(console.group("🌊 DATOS OCEÁNICOS ESPECÍFICOS:"),console.log("Abstract Lands:",s.surface_elements.abstract_lands),console.log("Green Patches:",s.surface_elements.green_patches),console.log("Clouds:",s.surface_elements.clouds),console.log("Depths:",s.surface_elements.depths),console.groupEnd()),console.log("4️⃣ ATMÓSFERA:",s.atmosphere),console.log("5️⃣ ANILLOS:",s.rings),console.log("6️⃣ VIDA:",s.life_forms),K.getInstance(),console.group("🎨 EFECTOS QUE SE APLICARÍAN:"),c(s).forEach(C=>{console.log(`- ${C}`)}),console.groupEnd(),console.log("📊 ANÁLISIS:",h),console.groupEnd()),a(c(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=h,console.log("💡 Tip: Accede a los datos con window.__DEBUG_PLANET_DATA y window.__DEBUG_PLANET_ANALYSIS"))},[s,e]);function n(h){const d={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(h.planet_info&&h.surface_elements?d.hasValidStructure=!0:(h.planet_info||d.missingFields.push("planet_info"),h.surface_elements||d.missingFields.push("surface_elements")),h.surface_elements?.type==="oceanic"&&(d.oceanicData={hasAbstractLands:!!h.surface_elements.abstract_lands?.length,numGreenPatches:h.surface_elements.green_patches?.length||0,numClouds:h.surface_elements.clouds?.length||0,hasDepths:h.surface_elements.depths?.enabled||!1,baseColorIsBlue:h.planet_info?.base_color==="#0000FF",greenPatchColor:h.surface_elements.green_patches?.[0]?.color,issues:[]},d.oceanicData.numGreenPatches>15&&d.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),d.oceanicData.baseColorIsBlue||d.oceanicData.issues.push(`Color base no es azul puro: ${h.planet_info?.base_color}`),d.renderingIssues=d.oceanicData.issues),h.planet_info?.base_color&&h.planet_info?.type){const v={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[h.planet_info.type];v&&h.planet_info.base_color!==v?d.colorConsistency=`Inconsistente: esperado ${v}, recibido ${h.planet_info.base_color}`:d.colorConsistency="Correcto"}return d}function c(h){const d=[];if(!h.surface_elements?.type)return["No surface type defined"];const C=h.surface_elements.type.toLowerCase();switch(C){case"oceanic":d.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":d.push("RockyTerrainEffect");break;case"icy":d.push("IcyTerrainEffect");break;case"gas giant":d.push("GasGiantBandsEffect");break;default:d.push(`Generic effect for type: ${C}`)}return h.atmosphere?.density>0&&d.push("AtmosphericEffect"),h.rings&&d.push("RingSystemEffect"),d}return t?i.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[i.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),i.jsxs("div",{style:{marginBottom:"10px"},children:[i.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,i.jsx("br",{}),i.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,i.jsx("br",{}),i.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&i.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[i.jsx("strong",{children:"🌊 Oceanic Data:"}),i.jsx("br",{}),i.jsxs("span",{style:{color:r.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",r.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),i.jsx("br",{}),"Green Patches: ",r.oceanicData?.numGreenPatches,i.jsx("br",{}),"Clouds: ",r.oceanicData?.numClouds,i.jsx("br",{}),"Has Depths: ",r.oceanicData?.hasDepths?"Yes":"No",i.jsx("br",{}),r.oceanicData?.issues?.length>0&&i.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",i.jsx("br",{}),r.oceanicData.issues.map((h,d)=>i.jsxs("div",{children:["- ",h]},d))]})]}),i.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[i.jsx("strong",{children:"🎨 Effects Applied:"}),i.jsx("br",{}),o.map((h,d)=>i.jsxs("div",{style:{color:h.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",h]},d))]}),i.jsx("button",{onClick:()=>{console.log("Full Planet Data:",s),console.log("Analysis:",r)},style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function Wt(s){g.useEffect(()=>{if(s){if(console.group(`🔍 HOOK DEBUG: ${s.planet_info?.name}`),console.log("Planet Data:",s),s.surface_elements?.type==="oceanic"){const e=s.surface_elements.green_patches?.length>0,t=s.planet_info?.base_color;t!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",t),e&&(console.log(`📍 ${s.surface_elements.green_patches.length} parches verdes detectados`),console.log("Primer parche:",s.surface_elements.green_patches[0]))}console.groupEnd()}},[s])}const Gt=({planetName:s,containerClassName:e="",width:t=800,height:o=600,autoRotate:a=!0,enableControls:r=!0,showDebugInfo:l=!1,planetData:n,cosmicOriginTime:c,initialAngleRotation:h,onDataLoaded:d,onEffectsCreated:C,onError:v})=>{const x=g.useRef(null),S=g.useRef(null),b=g.useRef(null),y=g.useRef(null),_=g.useRef(null),M=g.useRef(null),T=g.useRef(new nt),R=g.useRef(null),[me,fe]=g.useState(!0),[pe,w]=g.useState(null),[A,G]=g.useState(null),[U,O]=g.useState([]),[B,D]=g.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),k=g.useRef([]),V=g.useRef(0),W=g.useRef(null),J=g.useCallback(()=>{if(!x.current||!b.current||!y.current)return;const m=x.current,f=m.clientWidth||400,p=m.clientHeight||400;b.current.setSize(f,p),y.current.aspect=f/p,y.current.updateProjectionMatrix(),console.log(`📐 Renderer resized to: ${f}x${p}`)},[]),ge=async m=>{if(!(!_.current||!S.current)){H.log("Applying modular effects from API data",{planet:m.planet_info.name,type:m.planet_info.type});try{Ce();const f=oe.createEffectsFromPythonPlanetData(m,1,_.current,S.current);O(f),k.current=f,C&&C(f),H.log(`Successfully applied ${f.length} modular effects`),Ee()}catch(f){H.error("Error applying modular effects",f),ve()}}},ye=g.useCallback(()=>{if(!x.current)return!1;try{for(;x.current.firstChild;)x.current.removeChild(x.current.firstChild);const m=x.current,f=m.clientWidth||t||400,p=m.clientHeight||o||400,z=new lt;z.background=new u(1297),S.current=z;const X=new ct(45,f/p,.1,1e3);X.position.set(0,0,5),y.current=X;const L=new ht({antialias:!0,alpha:!0,powerPreference:"high-performance"});return L.setSize(f,p),L.setPixelRatio(Math.min(window.devicePixelRatio,2)),L.shadowMap.enabled=!0,L.shadowMap.type=dt,L.toneMapping=ut,L.toneMappingExposure=1.2,L.outputColorSpace=mt,x.current.appendChild(L.domElement),b.current=L,j(z),Z(z),r&&ee(X,L.domElement),!0}catch(m){return console.error("Error initializing Three.js:",m),!1}},[]),j=m=>{const f=new Re(16777215,2);f.position.set(5,3,5),f.castShadow=!0,f.shadow.mapSize.width=2048,f.shadow.mapSize.height=2048,f.shadow.camera.near=.5,f.shadow.camera.far=50,f.shadow.camera.left=-10,f.shadow.camera.right=10,f.shadow.camera.top=10,f.shadow.camera.bottom=-10,m.add(f);const p=new Re(4482815,.4);p.position.set(-5,-3,-5),m.add(p);const z=new ft(2236996,.3);if(m.add(z),l){const X=new pt(f,1);m.add(X)}},Z=m=>{const f=new _e(1,128,64),p=new be({color:8421504,metalness:.1,roughness:.8}),z=new ue(f,p);z.castShadow=!0,z.receiveShadow=!0,m.add(z),_.current=z},ee=(m,f)=>{const p=new vt(m,f);p.enableDamping=!0,p.dampingFactor=.05,p.minDistance=1.5,p.maxDistance=10,p.autoRotate=a,p.autoRotateSpeed=.5,p.enablePan=!0,p.enableZoom=!0,M.current=p},te=g.useCallback(async()=>{try{fe(!0),w(null),H.log("Loading planet data from API",{planetName:s}),console.log("🚀 Fetching procedural data from API for:",s);const m=await fetch(`/api/planet/${encodeURIComponent(s)}/rendering-data`);if(!m.ok)throw new Error(`HTTP error! status: ${m.status}`);const f=await m.json();if(!f.success)throw new Error(f.error||"Failed to fetch planet data");const p=f.rendering_data;G(p),console.group(`🔍 DEBUG: Planet Data for ${p.planet_info.name}`),console.log("Full data from API:",p),p.surface_elements?.type==="oceanic"&&console.log("🌊 Oceanic specific data:",{green_patches:p.surface_elements.green_patches,abstract_lands:p.surface_elements.abstract_lands,base_color:p.planet_info.base_color}),console.groupEnd(),H.log("API data loaded successfully",{planet:p.planet_info.name,type:p.planet_info.type,hasEffects:!!p.surface_elements}),await ge(p),d&&d(p)}catch(m){const f=m instanceof Error?m.message:"Unknown error";console.error("Error loading planet data:",f),w(f),v&&v(f),ve()}finally{fe(!1)}},[s,n,c,h]),ve=()=>{if(!(!S.current||!_.current)){H.warn("Applying fallback effects");try{Ce();const m=Lt("generic"),f=oe.createEffectsFromList(m,1,_.current);f.forEach(p=>{p.effect.addToScene&&S.current&&_.current&&p.effect.addToScene(S.current,_.current.position)}),k.current=f,O(f),Ee()}catch(m){H.error("Error applying fallback effects",m)}}},Ce=()=>{k.current.forEach(m=>{try{m.effect.dispose&&m.effect.dispose()}catch(f){console.error("Error disposing effect:",f)}}),k.current=[],O([])},Ae=g.useCallback(()=>{R.current=requestAnimationFrame(Ae);const m=performance.now(),f=T.current.getDelta();M.current&&M.current.update();try{oe.updateAllEffects(f,_.current?.rotation.y)}catch(p){console.error("Error updating effects:",p)}if(_.current&&!r&&(_.current.rotation.y+=f*.1),k.current.forEach(p=>{p.effect.updateUniforms&&p.effect.updateUniforms(f)}),b.current&&S.current&&y.current){const p=performance.now();b.current.render(S.current,y.current);const z=performance.now()-p;if(m-V.current>5e3){const X=1e3/(m-V.current);Ee(),D(L=>({...L,frameRate:Math.round(X),renderTime:Math.round(z*100)/100})),V.current=m}}},[]),Ee=g.useCallback(()=>{const m=oe.getStats();D(f=>({...f,activeEffects:m.activeEffects,enabledEffects:m.enabledEffects}))},[]);return g.useEffect(()=>{let m=!0;return(async()=>{try{if(!m)return;if(!ye()){m&&w("Failed to initialize 3D renderer");return}if(!m||(Ae(),x.current&&"ResizeObserver"in window&&(W.current=new ResizeObserver(J),W.current.observe(x.current)),window.addEventListener("resize",J),!m))return;await te()}catch(p){console.error("Error during ModularPlanetRenderer initialization:",p),m&&w(p instanceof Error?p.message:"Unknown initialization error")}})(),()=>{if(m=!1,R.current&&cancelAnimationFrame(R.current),W.current&&W.current.disconnect(),window.removeEventListener("resize",J),Ce(),M.current&&M.current.dispose(),b.current&&x.current)try{x.current.contains(b.current.domElement)&&x.current.removeChild(b.current.domElement),b.current.dispose()}catch(p){console.error("Error during cleanup:",p)}}},[]),g.useEffect(()=>{n&&S.current&&_.current&&(console.log("🔄 PLANET DATA CHANGED - Reloading for:",s),te())},[s,n?.planet_type,n?.diameter,n?.elements]),g.useEffect(()=>{console.log("🌍 PLANET NAME CHANGED:",s),S.current&&_.current&&setTimeout(()=>{console.log("🔄 FORCING SHADER RELOAD for new planet:",s),te()},100)},[s]),g.useEffect(()=>{const m=setInterval(()=>{const f=oe.getStats();D(p=>({...p,activeEffects:f.activeEffects,enabledEffects:f.enabledEffects}))},1e4);return()=>clearInterval(m)},[]),Wt(A),i.jsxs("div",{className:`relative ${e}`,children:[l&&A&&i.jsx(Vt,{planetData:A,showInPage:!0,showInConsole:!0}),i.jsx("div",{ref:x,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),me&&i.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:i.jsxs("div",{className:"text-white text-center",children:[i.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),i.jsx("div",{children:"Loading planet..."})]})}),pe&&i.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[i.jsx("strong",{children:"Error:"})," ",pe]}),A&&!me&&i.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[i.jsx("h3",{className:"text-lg font-bold",children:A.planet_info.name}),i.jsx("p",{className:"text-sm opacity-80",children:A.planet_info.type}),i.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[U.length," effects active"]}),A.surface_elements?.description&&i.jsx("p",{className:"text-xs mt-2 opacity-60",children:A.surface_elements.description.appearance})]}),l&&i.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[i.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),i.jsxs("div",{children:["Frame Rate: ",B.frameRate," FPS"]}),i.jsxs("div",{children:["Render Time: ",B.renderTime,"ms"]}),i.jsxs("div",{children:["Active Effects: ",B.activeEffects]}),i.jsxs("div",{children:["Enabled Effects: ",B.enabledEffects]}),i.jsxs("div",{className:"mt-2",children:[i.jsx("div",{className:"font-semibold",children:"Effects:"}),U.map(m=>i.jsxs("div",{className:"ml-2",children:[m.type," (",m.enabled?"ON":"OFF",")"]},m.id))]})]})]})};class Ut extends Be.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?i.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:i.jsxs("div",{className:"text-center p-4",children:[i.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),i.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const Ht=s=>i.jsx(Ut,{children:i.jsx(Gt,{...s})}),Yt=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:o,initialAngleRotation:a})=>{const r=g.useRef(null),l=g.useRef(null),[n,c]=g.useState("Aligning Stargate..."),[h,d]=g.useState(!1),[C,v]=g.useState(!1),[x,S]=g.useState(!1),[b,y]=g.useState(!0),[_,M]=g.useState(!0),[T,R]=g.useState(null),[me,fe]=g.useState(null);g.useEffect(()=>{const w=document.createElement("style");return w.textContent=`
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
    `,document.head.appendChild(w),()=>{document.head.removeChild(w)}},[]),g.useEffect(()=>{const w=r.current;if(!w)return;const A=w.getContext("2d");if(!A)return;let G=[];const U=800;let O,B;const D=800;let k,V=.5;function W(){const j=w?.parentElement;if(!j||!w)return;const Z=j.clientWidth,ee=j.clientHeight;w.width=Math.min(Z,D),w.height=Math.min(ee,D),O=w.width/2,B=w.height/2}function J(){W(),G=[];for(let j=0;j<U;j++)G.push({x:Math.random()*(w?.width||800),y:Math.random()*(w?.height||800),z:Math.random()*(w?.width||800),o:Math.random()});ge()}function ge(){!w||!A||(A.clearRect(0,0,w.width,w.height),G.forEach(j=>{j.z-=V,j.z<=0&&(j.z=w.width,j.x=Math.random()*w.width,j.y=Math.random()*w.height,j.o=Math.random());const Z=w.width/j.z,ee=(j.x-O)*Z+O,te=(j.y-B)*Z+B,ve=2*Z;A.beginPath(),A.fillStyle=`rgba(255, 255, 255, ${j.o})`,A.arc(ee,te,ve,0,2*Math.PI),A.fill()}),V<60&&(V+=1),k=requestAnimationFrame(ge))}J();const ye=()=>W();return window.addEventListener("resize",ye),()=>{window.removeEventListener("resize",ye),k&&cancelAnimationFrame(k)}},[]),g.useEffect(()=>{if(e&&!b){console.log("Loading planet image:",e);const w=new Image;w.onload=()=>{console.log("Planet image loaded successfully"),l.current&&(l.current.src=e,v(!0),S(!0))},w.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{v(!0),S(!0)},1500)},w.src=e}else(b||!e)&&setTimeout(()=>{v(!0),S(!0)},1500)},[e,b]),g.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){c("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),d(!0);const A=(D,k)=>Array.from({length:k},()=>D[Math.floor(Math.random()*D.length)]).join(""),G=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let U=0,O=0;const B=()=>{if(U>=G.length){const k="Stargate system aligned";let V=0;c("");const W=()=>{V<k.length?(c(k.substring(0,V+1)),V++,setTimeout(W,30)):d(!1)};W();return}const D=G[U];c(A(D.chars,32)),O++,O>=D.iterations&&(U++,O=0),setTimeout(B,D.duration)};B()},[]);const pe=()=>{y(!b),b||(v(!0),S(!0))};return i.jsxs("div",{className:"h-full flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between mb-3",children:[i.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),_&&i.jsx("div",{className:"flex items-center gap-2",children:i.jsx("button",{onClick:pe,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${b?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:b?"2D View":"3D View"})})]}),i.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[i.jsx("canvas",{ref:r,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${x?"opacity-0":"opacity-100"}`,style:{filter:x?"blur(50px)":"none"}}),b&&C&&t&&i.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${C?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:i.jsx(Ht,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!0,enableControls:!0,showDebugInfo:!1,planetData:{diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements},cosmicOriginTime:o,initialAngleRotation:a,onDataLoaded:w=>{R(w),console.log("🌍 Planet data loaded:",w)},onError:w=>{fe(w),console.error("❌ Planet rendering error:",w)}})}),!b&&i.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${C?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:C&&e?i.jsx("div",{className:"w-full h-full flex items-center justify-center",children:i.jsx(Ze,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:i.jsx("img",{ref:l,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):i.jsx("img",{ref:l,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),_&&i.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:b?"🌍 3D":"🖼️ 2D"})]}),i.jsxs("div",{className:"text-center mt-auto",children:[i.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${h?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[i.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[i.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:i.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),n]}),i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),i.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",b&&T&&i.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",T.planet_info?.type," Planet",T.atmosphere&&i.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),T.rings?.has_rings&&i.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),b&&me&&i.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},$t=({currentPlanet:s,system:e,galaxy:t,systemPlanets:o})=>{const[a,r]=g.useState(null),[l,n]=g.useState(null),[c,h]=g.useState(!1),[d,C]=g.useState(!1),[v,x]=g.useState(!0);g.useEffect(()=>{if(o&&o.length>0){const y=o.findIndex(_=>_.name.toLowerCase()===s.toLowerCase());y!==-1?(y>0?(r(o[y-1].name.toLowerCase()),h(!0)):e.index>0?(r("__prev_system__"),h(!0)):h(!1),y<o.length-1?(n(o[y+1].name.toLowerCase()),C(!0)):(n("__next_system__"),C(!0))):(h(!1),C(!1))}else h(!1),C(!1);x(!1)},[s,e.index,o]);const S=async()=>{const y=t.coordinates.join(",");if(a==="__prev_system__")try{const _=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(_.ok){const M=await _.json();if(M.system&&M.system.planets&&M.system.planets.length>0){const R=M.system.planets[M.system.planets.length-1].name.toLowerCase();ie(y,e.index-1,R,M.system.planets),Pe(y,e.index-1),window.location.href=`/planet/${R}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else a&&(ie(y,e.index,a,o),window.location.href=`/planet/${a}`)},b=async()=>{const y=t.coordinates.join(",");if(l==="__next_system__")try{const _=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(_.ok){const M=await _.json();if(M.system&&M.system.planets&&M.system.planets.length>0){const R=M.system.planets[0].name.toLowerCase();ie(y,e.index+1,R,M.system.planets),Pe(y,e.index+1),window.location.href=`/planet/${R}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(ie(y,e.index,l,o),window.location.href=`/planet/${l}`)};return v?null:i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("button",{onClick:S,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:i.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),i.jsx("button",{onClick:b,disabled:!d,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${d?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:i.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Zt=({planet:s,system:e,galaxy:t,planet_url:o,version:a,image_url:r,cosmic_origin_time:l,initial_angle_rotation:n})=>{const[c]=g.useState(t.coordinates.join(","));g.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),ie(c,e.index,s.name,e.planets||[]),Pe(c,e.index)},[c,e.index,s.name]);const h=v=>v.replace(/_/g," "),d=v=>v.replace(/_/g," "),C=v=>v.replace(/_/g," ");return i.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[i.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),i.jsxs("div",{className:"relative z-10",children:[i.jsx(Ye,{}),i.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:i.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",h(s.name),"'"]})}),i.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",d(e.name),"' - Galaxy '",C(t.name),"'"]}),i.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),i.jsx($t,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),i.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:i.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[i.jsx("div",{className:"order-1 lg:order-1",children:i.jsx(Yt,{planetUrl:o,imageUrl:r,planet:s,cosmicOriginTime:l,initialAngleRotation:n})}),i.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),i.jsx("div",{className:"order-2 lg:order-2",children:i.jsx(gt,{planet:s,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:n})})]})}),i.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:i.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:i.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",d(e.name),"'"]})})})]}),i.jsx(Ue,{version:a})]}),i.jsx(Xe,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};console.log("Atlas Planet React script loading...");document.addEventListener("DOMContentLoaded",async()=>{console.log("DOM loaded, starting Planet React app...");try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),o=document.getElementById("meta-data");if(!s||!e||!t||!o){console.error("Missing required data elements");return}const a=JSON.parse(s.textContent||"{}"),r=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),n=JSON.parse(o.textContent||"{}"),c={planet:a,system:r,galaxy:l,planet_url:n.planet_url,version:n.version,image_url:n.image_url,cosmic_origin_time:n.cosmic_origin_time,initial_angle_rotation:n.initial_angle_rotation},h=document.getElementById("atlas-react-root");h&&(He.createRoot(h).render(Be.createElement(Zt,c)),console.log("Planet React app rendered successfully!"))}catch(s){console.error("Error initializing Planet React app:",s)}});
