import{r as p,j as o,R as Le,V as Ge,c as Ze}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as $e}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Xe,U as Ke,m as ae,c as _e,a as qe}from"./atlas_Ep8Z7FyBoZ31__UNPvjgh.js";import{m as Qe,V as C,n as Q,T as K,Q as Te,l as De,o as F,R as Je,p as et,q as tt,e as Ce,r as We,s as B,N as at,t as Z,C as h,c as Se,d as ge,u as ot,v as Ve,w as it,x as st,G as rt,y as oe,F as nt,z as Ae,H as lt,S as ct,P as ht,W as dt,I as mt,J as ut,K as ft,D as ke,A as pt,O as gt}from"./atlas_DELrrmMsPA1bSV9heiGLk.js";const vt=({planet:i,system:e,galaxy:t,cosmicOriginTime:a,initialAngleRotation:r})=>{const[l,n]=p.useState(!1),s=b=>b.replace(/_/g," "),c=b=>{const g=b/86400;return g<30?`${g.toFixed(2)} days`:g<365?`${(g/30).toFixed(2)} months`:`${(g/365).toFixed(2)} years`},f=b=>{const g=b*9/5+32;return`${b.toFixed(1)}°C (${g.toFixed(1)}°F)`},y=b=>`${b.toExponential(2)} kg`,w=b=>b>=1e3?`${(b/1e3).toFixed(2)} km`:`${b.toFixed(2)} m`;return o.jsxs("div",{className:"h-full flex flex-col relative",children:[o.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),o.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),o.jsx(Xe,{type:"planet",name:i.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:i.name,className:"text-xs"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),o.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:i.planet_type})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),o.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:i.atmosphere})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),o.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:i.life_forms})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:y(i.mass)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:w(i.diameter)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[i.density.toFixed(2)," kg/m³"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[i.gravity.toFixed(2)," m/s²"]})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[i.orbital_radius.toFixed(2)," AU"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),o.jsx("div",{className:"text-xs font-bold text-cyan-300",children:c(i.orbital_period_seconds)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[i.orbital_speed.toFixed(2)," m/s"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[i.axial_tilt.toFixed(2),"°"]})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),o.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:f(i.surface_temperature)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:c(i.rotation_period_seconds)})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",i.elements.length,")"]}),i.elements.length>4&&o.jsx("button",{onClick:()=>n(!l),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:l?"▲ Less":"▼ All"})]}),o.jsx("div",{className:"flex flex-wrap gap-1",children:(l?i.elements:i.elements.slice(0,4)).map((b,g)=>o.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:b},g))})]})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[o.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Status:"}),o.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Planet:"}),o.jsx("div",{className:"text-white truncate font-medium",children:s(i.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System:"}),o.jsx("div",{className:"text-white truncate font-medium",children:s(e.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System ID:"}),o.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),o.jsx("div",{className:"text-white truncate font-medium",children:s(t.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),o.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},ze={type:"change"},Pe={type:"start"},Be={type:"end"},pe=new Je,Re=new et,yt=Math.cos(70*tt.DEG2RAD),T=new C,k=2*Math.PI,S={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},we=1e-6;class xt extends Qe{constructor(e,t=null){super(e,t),this.state=S.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Q.ROTATE,MIDDLE:Q.DOLLY,RIGHT:Q.PAN},this.touches={ONE:K.ROTATE,TWO:K.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Te,this._lastTargetPosition=new C,this._quat=new Te().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new De,this._sphericalDelta=new De,this._scale=1,this._panOffset=new C,this._rotateStart=new F,this._rotateEnd=new F,this._rotateDelta=new F,this._panStart=new F,this._panEnd=new F,this._panDelta=new F,this._dollyStart=new F,this._dollyEnd=new F,this._dollyDelta=new F,this._dollyDirection=new C,this._mouse=new F,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wt.bind(this),this._onPointerDown=bt.bind(this),this._onPointerUp=_t.bind(this),this._onContextMenu=Nt.bind(this),this._onMouseWheel=Pt.bind(this),this._onKeyDown=Et.bind(this),this._onTouchStart=Mt.bind(this),this._onTouchMove=jt.bind(this),this._onMouseDown=Ct.bind(this),this._onMouseMove=St.bind(this),this._interceptControlDown=Tt.bind(this),this._interceptControlUp=Dt.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ze),this.update(),this.state=S.NONE}update(e=null){const t=this.object.position;T.copy(t).sub(this.target),T.applyQuaternion(this._quat),this._spherical.setFromVector3(T),this.autoRotate&&this.state===S.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(a)&&isFinite(r)&&(a<-Math.PI?a+=k:a>Math.PI&&(a-=k),r<-Math.PI?r+=k:r>Math.PI&&(r-=k),a<=r?this._spherical.theta=Math.max(a,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+r)/2?Math.max(a,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=n!=this._spherical.radius}if(T.setFromSpherical(this._spherical),T.applyQuaternion(this._quatInverse),t.copy(this.target).add(T),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){const s=T.length();n=this._clampDistance(s*this._scale);const c=s-n;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),l=!!c}else if(this.object.isOrthographicCamera){const s=new C(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=c!==this.object.zoom;const f=new C(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(s),this.object.updateMatrixWorld(),n=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(pe.origin.copy(this.object.position),pe.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pe.direction))<yt?this.object.lookAt(this.target):(Re.setFromNormalAndCoplanarPoint(this.object.up,this.target),pe.intersectPlane(Re,this.target))))}else if(this.object.isOrthographicCamera){const n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>we||8*(1-this._lastQuaternion.dot(this.object.quaternion))>we||this._lastTargetPosition.distanceToSquared(this.target)>we?(this.dispatchEvent(ze),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?k/60*this.autoRotateSpeed*e:k/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){T.setFromMatrixColumn(t,0),T.multiplyScalar(-e),this._panOffset.add(T)}_panUp(e,t){this.screenSpacePanning===!0?T.setFromMatrixColumn(t,1):(T.setFromMatrixColumn(t,0),T.crossVectors(this.object.up,T)),T.multiplyScalar(e),this._panOffset.add(T)}_pan(e,t){const a=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;T.copy(r).sub(this.target);let l=T.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/a.clientHeight,this.object.matrix),this._panUp(2*t*l/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),r=e-a.left,l=t-a.top,n=a.width,s=a.height;this._mouse.x=r/n*2-1,this._mouse.y=-(l/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(k*this._rotateDelta.x/t.clientHeight),this._rotateUp(k*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(k*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-k*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(k*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-k*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(a,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(a,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,r=e.pageY-t.y,l=Math.sqrt(a*a+r*r);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),r=.5*(e.pageX+a.x),l=.5*(e.pageY+a.y);this._rotateEnd.set(r,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(k*this._rotateDelta.x/t.clientHeight),this._rotateUp(k*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(a,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,r=e.pageY-t.y,l=Math.sqrt(a*a+r*r);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const n=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(n,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new F,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function bt(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function wt(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function _t(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Be),this.state=S.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ct(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Q.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=S.DOLLY;break;case Q.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=S.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=S.ROTATE}break;case Q.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=S.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=S.PAN}break;default:this.state=S.NONE}this.state!==S.NONE&&this.dispatchEvent(Pe)}function St(i){switch(this.state){case S.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case S.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case S.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Pt(i){this.enabled===!1||this.enableZoom===!1||this.state!==S.NONE||(i.preventDefault(),this.dispatchEvent(Pe),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Be))}function Et(i){this.enabled!==!1&&this._handleKeyDown(i)}function Mt(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case K.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=S.TOUCH_ROTATE;break;case K.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=S.TOUCH_PAN;break;default:this.state=S.NONE}break;case 2:switch(this.touches.TWO){case K.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=S.TOUCH_DOLLY_PAN;break;case K.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=S.TOUCH_DOLLY_ROTATE;break;default:this.state=S.NONE}break;default:this.state=S.NONE}this.state!==S.NONE&&this.dispatchEvent(Pe)}function jt(i){switch(this._trackPointer(i),this.state){case S.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case S.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case S.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case S.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=S.NONE}}function Nt(i){this.enabled!==!1&&i.preventDefault()}function Tt(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Dt(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ie{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class ve{ringSystem;material;geometry;animationId;params;planetRadius;static GRAY_VARIATIONS={dark:{baseGray:.18,variation:.04},medium:{baseGray:.25,variation:.06},light:{baseGray:.32,variation:.06},mixed:{baseGray:.25,variation:.08}};constructor(e,t){this.planetRadius=e,this.params={innerRadius:t.innerRadius||e*1.3,outerRadius:t.outerRadius||e*1.8,tiltFactor:t.tiltFactor||.2,particleCount:t.particleCount||1e3,grayVariation:t.grayVariation||"medium",ringThickness:t.ringThickness||.1,sparkleIntensity:t.sparkleIntensity||.03,brightness:t.brightness||2.2,rotationSync:t.rotationSync!==!1,...t},this.geometry=new Ce,this.material=this.createRingMaterial(),this.ringSystem=new We(this.geometry,this.material),this.generateRingGeometry()}createRingMaterial(){return new B({uniforms:{brightness:{value:this.params.brightness},time:{value:0}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:at})}generateRingGeometry(){let e;this.params.particleData&&this.params.particleData.length>0?e=this.processParticleData(this.params.particleData):e=this.generateProceduralRings(),this.createGeometryFromParticles(e)}processParticleData(e){const t=[],a=new Ie(Date.now());for(const r of e){const l=this.planetRadius/(this.params.innerRadius||200),n=r.distance*l,s=r.angle,c=Math.asin(this.params.tiltFactor||.2),f=n*Math.cos(s),y=n*Math.sin(s),w=y*Math.sin(c),b=y*Math.cos(c),g=(this.params.outerRadius-this.params.innerRadius)*(this.params.ringThickness||.4),N=a.uniform(-g*.8,g*.8),_=a.uniform(-g*.3,g*.3);t.push({x:f+_,y:w+N,z:b+a.uniform(-g*.4,g*.4),distance:n,angle:s,size:r.size||1,color:r.color||[.25,.25,.25,1]})}return t}generateProceduralRings(){const e=[],t=new Ie(12345),a=this.params.particleCount||1e3;for(let r=0;r<a;r++){const l=Math.pow(t.uniform(0,1),.7),n=this.params.innerRadius+(this.params.outerRadius-this.params.innerRadius)*l,s=t.uniform(0,Math.PI*2),c=n*Math.cos(s),f=n*Math.sin(s),y=Math.asin(this.params.tiltFactor||.2),w=f*Math.sin(y),b=f*Math.cos(y),g=(this.params.outerRadius-this.params.innerRadius)*(this.params.ringThickness||.1),N=t.uniform(-g,g),_=ve.GRAY_VARIATIONS[this.params.grayVariation||"medium"],P=Math.max(.1,Math.min(.6,_.baseGray+t.uniform(-_.variation,_.variation))),x=t.uniform(.8,1.5),H=t.uniform(0,1)<(this.params.sparkleIntensity||.03)?x*t.uniform(1.2,2):x;e.push({x:c,y:w+N,z:b,distance:n,angle:s,size:H,color:[P,P,P,1]})}return e}createGeometryFromParticles(e){const t=new Float32Array(e.length*3),a=new Float32Array(e.length*3),r=new Float32Array(e.length);for(let l=0;l<e.length;l++){const n=e[l];t[l*3]=n.x,t[l*3+1]=n.y,t[l*3+2]=n.z,a[l*3]=n.color[0],a[l*3+1]=n.color[1],a[l*3+2]=n.color[2],r[l]=n.size}this.geometry.setAttribute("position",new Z(t,3)),this.geometry.setAttribute("color",new Z(a,3)),this.geometry.setAttribute("size",new Z(r,1))}addToScene(e,t){t&&this.ringSystem.position.copy(t),this.ringSystem.renderOrder=1,e.add(this.ringSystem)}update(e,t){this.material.uniforms.time.value+=e,this.params.rotationSync&&t!==void 0&&(this.ringSystem.rotation.y=t)}updateParams(e){this.params={...this.params,...e},e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness),(e.innerRadius||e.outerRadius||e.particleCount)&&this.generateRingGeometry()}getObject3D(){return this.ringSystem}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.geometry.dispose(),this.material.dispose()}}function At(i,e){const t={innerRadius:i.inner_radius||e*1.3,outerRadius:i.outer_radius||e*1.8,tiltFactor:i.tilt_factor||.2,particleData:[...i.full_ring?.particles||[],...i.ontop_ring?.particles||[]],rotationSync:!0,brightness:2.2};return new ve(e,t)}class Fe{seed;constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}random(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return this.random()*(t-e)+e}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class ie{material;params;mesh;static vertexShader=`
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
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new h(16753920),bandColor:t.bandColor||new h(16753920),stormColor:t.stormColor||new h(9109504),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,stormIntensity:t.stormIntensity||.7,noiseScale:t.noiseScale||4},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),a=new Fe(12345);for(let r=0;r<e&&r<20;r++)t[r]=a.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),a=new Fe(67890);for(let r=0;r<e&&r<20;r++)t[r]=a.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof h?this.params.baseColor:new h(this.params.baseColor),t=this.params.bandColor instanceof h?this.params.bandColor:new h(this.params.bandColor),a=this.params.stormColor instanceof h?this.params.stormColor:new h(this.params.stormColor);return new B({vertexShader:ie.vertexShader,fragmentShader:ie.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},stormColor:{value:a},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},stormIntensity:{value:this.params.stormIntensity},noiseScale:{value:this.params.noiseScale}}})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){if(this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.baseColor){const t=e.baseColor instanceof h?e.baseColor:new h(e.baseColor);this.material.uniforms.planetColor.value=t}if(e.bandColor){const t=e.bandColor instanceof h?e.bandColor:new h(e.bandColor);this.material.uniforms.bandColor.value=t}if(e.stormColor){const t=e.stormColor instanceof h?e.stormColor:new h(e.stormColor);this.material.uniforms.stormColor.value=t}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function kt(i,e){const t=e.cloud_bands||{},a={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new h(e.base_color):new h(16753920),animationSpeed:1,turbulence:e.turbulence||.5,stormIntensity:e.storm_intensity||.7};return new ie(i,a)}class se{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new h(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsationSpeed||2,fresnelPower:t.fresnelPower||2},this.geometry=new Se(e*this.params.scale,64,64),this.material=this.createMaterial(),this.mesh=new ge(this.geometry,this.material)}createMaterial(){const e=this.params.color instanceof h?this.params.color:new h(this.params.color);return new B({vertexShader:se.vertexShader,fragmentShader:se.fragmentShader,uniforms:{glowColor:{value:e},glowIntensity:{value:this.params.intensity},glowFalloff:{value:this.params.falloff},fresnelPower:{value:this.params.fresnelPower},time:{value:0},pulsation:{value:this.params.pulsation},pulsationSpeed:{value:this.params.pulsationSpeed}},transparent:!0,blending:Ve,side:ot,depthWrite:!1})}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof h?e.color:new h(e.color);this.material.uniforms.glowColor.value=t}e.intensity!==void 0&&(this.material.uniforms.glowIntensity.value=e.intensity),e.falloff!==void 0&&(this.material.uniforms.glowFalloff.value=e.falloff),e.pulsation!==void 0&&(this.material.uniforms.pulsation.value=e.pulsation),e.pulsationSpeed!==void 0&&(this.material.uniforms.pulsationSpeed.value=e.pulsationSpeed)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}class re{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new h(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new Ce,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new We(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount*3),r=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),s=this.params.color instanceof h?this.params.color:new h(this.params.color);for(let c=0;c<this.particleCount;c++){const f=Math.random()*Math.PI*2,y=Math.acos(Math.random()*2-1),w=e*(1+Math.random()*.1);t[c*3]=w*Math.sin(y)*Math.cos(f),t[c*3+1]=w*Math.sin(y)*Math.sin(f),t[c*3+2]=w*Math.cos(y),a[c*3]=s.r*(.8+Math.random()*.4),a[c*3+1]=s.g*(.8+Math.random()*.4),a[c*3+2]=s.b*(.8+Math.random()*.4),r[c]=this.params.size*(Math.random()*.5+.75),l[c]=this.params.speed*(Math.random()*.8+.6),n[c]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new Z(t,3)),this.geometry.setAttribute("customColor",new Z(a,3)),this.geometry.setAttribute("size",new Z(r,1)),this.geometry.setAttribute("speed",new Z(l,1)),this.geometry.setAttribute("phase",new Z(n,1))}createMaterial(){return new B({vertexShader:re.vertexShader,fragmentShader:re.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:Ve,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}class He{mesh;material;geometry;params;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.5,.5,.8,.3],width:t.width||15,opacity:t.opacity||.3,density:t.density||1};const a=e+this.params.width/200;this.geometry=new Se(a,32,32),this.material=new it({color:new h(this.params.color[0],this.params.color[1],this.params.color[2]),transparent:!0,opacity:this.params.opacity*this.params.density,side:st}),this.mesh=new ge(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.mesh.rotation.y+=e*.05}updateParams(e){this.params={...this.params,...e},e.color&&this.material.color.setRGB(e.color[0],e.color[1],e.color[2]),(e.opacity!==void 0||e.density!==void 0)&&(this.material.opacity=(e.opacity||this.params.opacity)*(e.density||this.params.density))}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function zt(i,e){const t=e.halo||{},a={color:t.color?new h().setRGB(t.color[0],t.color[1],t.color[2]):new h(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsation_speed||2};return new se(i,a)}function Rt(i,e){const t=e.streaks||{},a={color:t.color?new h().setRGB(t.color[0],t.color[1],t.color[2]):new h(16777215),particleCount:t.count||100,speed:t.speed||1,size:2,opacity:.6,turbulence:1};return new re(i,a)}function It(i,e){const t={type:e.type||"Thin",color:e.color||[.5,.5,.8,.3],width:e.width||15,opacity:e.color?.[3]||.3,density:1};return new He(i,t)}class ne{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={color:e.color||new h(7368816),roughness:e.roughness||.7,metalness:e.metalness||.9,fragmentationIntensity:e.fragmentationIntensity||.5,noiseScale:e.noiseScale||8,noiseIntensity:e.noiseIntensity||.3,edgeFragmentation:e.edgeFragmentation||1,circularWaves:e.circularWaves||1,fogPatches:e.fogPatches||1},this.material=this.createMaterial()}createMaterial(){const e=this.params.color instanceof h?this.params.color:new h(this.params.color);return new B({vertexShader:ne.vertexShader,fragmentShader:ne.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},roughness:{value:this.params.roughness},metalness:{value:this.params.metalness},fragmentationIntensity:{value:this.params.fragmentationIntensity},noiseScale:{value:this.params.noiseScale},noiseIntensity:{value:this.params.noiseIntensity},edgeFragmentation:{value:this.params.edgeFragmentation},circularWaves:{value:this.params.circularWaves},fogPatches:{value:this.params.fogPatches}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof h?e.color:new h(e.color);this.material.uniforms.baseColor.value=t}e.roughness!==void 0&&(this.material.uniforms.roughness.value=e.roughness),e.metalness!==void 0&&(this.material.uniforms.metalness.value=e.metalness),e.fragmentationIntensity!==void 0&&(this.material.uniforms.fragmentationIntensity.value=e.fragmentationIntensity),e.noiseScale!==void 0&&(this.material.uniforms.noiseScale.value=e.noiseScale),e.noiseIntensity!==void 0&&(this.material.uniforms.noiseIntensity.value=e.noiseIntensity),e.edgeFragmentation!==void 0&&(this.material.uniforms.edgeFragmentation.value=e.edgeFragmentation),e.circularWaves!==void 0&&(this.material.uniforms.circularWaves.value=e.circularWaves),e.fogPatches!==void 0&&(this.material.uniforms.fogPatches.value=e.fogPatches)}getMaterial(){return this.material}dispose(){this.material.dispose()}}class Oe{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new h(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new rt,this.generateFragments()}generateFragments(){const e=new oe({color:this.params.color instanceof h?this.params.color:new h(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const a=this.generateFragmentGeometry(),r=new ge(a,e);this.positionFragment(r,t),r.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const l=this.params.size*(Math.random()*.5+.75);r.scale.set(l,l,l),r.userData={rotationAxis:new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(r),this.fragments.add(r)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],a=[],r=[];r.push(new C(0,0,0));for(let s=0;s<e;s++){const c=s/e*Math.PI*2,f=Math.random()*.5+.5,y=(Math.random()-.5)*.3;r.push(new C(Math.cos(c)*f,Math.sin(c)*f,y))}for(let s=1;s<=e;s++){const f=r[s].clone();f.z+=Math.random()*.4+.2,r.push(f)}for(const s of r)t.push(s.x,s.y,s.z);for(let s=1;s<e;s++)a.push(0,s,s+1);a.push(0,e,1);const l=r.length-e-1;for(let s=0;s<e-1;s++)a.push(l,l+s+2,l+s+1);a.push(l,l+1,l+e);for(let s=0;s<e;s++){const c=s+1,f=(s+1)%e+1,y=c+e,w=f+e;a.push(c,y,f),a.push(f,y,w)}const n=new Ce;return n.setAttribute("position",new nt(t,3)),n.setIndex(a),n.computeVertexNormals(),n}positionFragment(e,t){let a;switch(this.params.distribution){case"edge":a=this.generateEdgePosition(t);break;case"surface":a=this.generateSurfacePosition();break;case"random":default:a=this.generateRandomPosition();break}e.position.copy(a)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,a=this.planetRadius*(.95+Math.random()*.1),r=(Math.random()-.5)*this.planetRadius*.5;return new C(Math.cos(t)*a,r,Math.sin(t)*a)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),a=this.planetRadius*(1+Math.random()*.05);return new C(a*Math.sin(t)*Math.cos(e),a*Math.sin(t)*Math.sin(e),a*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,a=Math.random()*Math.PI*2;return new C(e*Math.sin(t)*Math.cos(a),e*Math.sin(t)*Math.sin(a),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,a)=>{const r=t.userData;t.rotateOnAxis(r.rotationAxis,r.rotationSpeed*e*this.params.animationSpeed);const l=Math.sin(Date.now()*.001+a)*.001;t.position.y+=l*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof h?e.color:new h(e.color);this.fragmentMeshes.forEach(a=>{a.material instanceof oe&&(a.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof oe&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Ae&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Ae&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class le{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new h(.8,.8,.8),cloudColor:e.cloudColor||new h(.7,.7,.7),craterColor:e.craterColor||new h(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof h?this.params.mountainColor:new h(this.params.mountainColor),t=this.params.cloudColor instanceof h?this.params.cloudColor:new h(this.params.cloudColor),a=this.params.craterColor instanceof h?this.params.craterColor:new h(this.params.craterColor),r=new Array(30).fill(new C),l=new Array(30).fill(new C),n=new Array(10).fill(new C);return this.params.mountains&&this.params.mountains.forEach((s,c)=>{c<30&&(r[c]=new C(s.position[0],s.position[1],s.angle),l[c]=new C(s.width,s.height,0))}),this.params.clouds&&this.params.clouds.forEach((s,c)=>{c<10&&(n[c]=new C(s.position[0],s.position[1],s.radius))}),new B({vertexShader:le.vertexShader,fragmentShader:le.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new h(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:r},mountainSizes:{value:l},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:n},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new C(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new C},craterColor:{value:a},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Ft(i){const e={mountains:i.mountains||[],clouds:i.clouds||[],crater:i.crater,baseTextureIntensity:.4};return new le(e)}class ce{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new h(.675,.843,.902),crackColor:e.crackColor||new h(.2,.2,.2),iceCapColor:e.iceCapColor||new h(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof h?this.params.crystalColor:new h(this.params.crystalColor),t=this.params.crackColor instanceof h?this.params.crackColor:new h(this.params.crackColor),a=this.params.iceCapColor instanceof h?this.params.iceCapColor:new h(this.params.iceCapColor),r=new Array(50).fill(new C),l=new Array(50).fill(new C),n=new Array(12).fill(new F),s=new Array(4).fill(new C);return this.params.crystals&&this.params.crystals.forEach((c,f)=>{f<50&&(r[f]=new C(c.position[0],c.position[1],c.angle),l[f]=new C(c.length,c.width,0))}),this.params.cracks&&this.params.cracks.forEach((c,f)=>{f<12&&(n[f]=new F(c.angle,c.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((c,f)=>{f<4&&(s[f]=new C(c.position[0],c.position[1],c.radius))}),new B({vertexShader:ce.vertexShader,fragmentShader:ce.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new h(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:r},crystalSizes:{value:l},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:n},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:s},iceCapColor:{value:a},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Ot(i){const e={crystals:i.crystals||[],cracks:i.cracks||[],iceCaps:i.ice_caps||[],baseTextureIntensity:.3};return new ce(e)}class he{material;params;static vertexShader=`
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
    
    // Configuración de ondas
    uniform float waveIntensity;
    uniform float waveSpeed;
    uniform float waveScale;
    
    // Configuración de masas terrestres
    uniform float landmassThreshold;
    uniform vec3 landmassColor;
    
    // Configuración de océano profundo
    uniform float deepOceanThreshold;
    uniform float deepOceanMultiplier;
    
    // Configuración de espuma
    uniform float foamThreshold;
    uniform vec3 foamColor;
    uniform float foamIntensity;
    
    // Color base del océano
    uniform vec3 oceanColor;
    
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
    
    // Fractales de ruido para mayor complejidad
    float fractalNoise(vec3 p, int octaves) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for(int i = 0; i < 6; i++) {
        if(i >= octaves) break;
        value += amplitude * noise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      
      return value;
    }
    
    void main() {
      vec3 pos = normalize(vPosition);
      vec3 color = oceanColor;
      
      // Ondas animadas del agua - múltiples capas
      float waves1 = sin(pos.x * waveScale + time * waveSpeed) * sin(pos.z * waveScale + time * waveSpeed * 1.5);
      float waves2 = sin(pos.x * waveScale * 1.5 - time * waveSpeed * 1.8) * sin(pos.z * waveScale * 1.2 + time * waveSpeed * 2.2);
      float waves3 = sin(pos.x * waveScale * 2.0 + time * waveSpeed * 0.7) * sin(pos.z * waveScale * 2.5 - time * waveSpeed * 1.3);
      
      // Combinar ondas con diferentes intensidades
      float totalWaves = (waves1 + waves2 * 0.5 + waves3 * 0.3) * waveIntensity;
      
      // Aplicar efecto de ondas al color
      vec3 waveColor = vec3(0.0, 0.2, 0.4);
      color += waveColor * totalWaves;
      
      // Masas continentales (áreas más altas = más claras)
      float landmass = fractalNoise(pos * 3.0, 4);
      if(landmass > landmassThreshold) {
        float landIntensity = smoothstep(landmassThreshold, 0.7, landmass);
        color = mix(color, landmassColor, landIntensity);
      }
      
      // Fosas oceánicas profundas (más oscuras)
      float depth = fractalNoise(pos * 6.0 + vec3(time * 0.1), 3);
      if(depth < deepOceanThreshold) {
        color *= deepOceanMultiplier;
      }
      
      // Espuma/crestas de olas
      float foam = fractalNoise(pos * 20.0 + vec3(time * 3.0), 2);
      if(foam > foamThreshold) {
        float foamMix = smoothstep(foamThreshold, 1.0, foam) * foamIntensity;
        color = mix(color, foamColor, foamMix);
      }
      
      // Efectos de cáusticas submarinas
      float caustics = sin(pos.x * 30.0 + time * 4.0) * sin(pos.z * 25.0 + time * 3.5);
      caustics = pow(max(caustics, 0.0), 3.0);
      color += vec3(0.1, 0.3, 0.5) * caustics * 0.2;
      
      // Reflejos de superficie
      float fresnel = pow(1.0 - abs(dot(vNormal, normalize(vWorldPosition))), 2.0);
      vec3 reflectionColor = vec3(0.8, 0.9, 1.0);
      color = mix(color, reflectionColor, fresnel * 0.3);
      
      // Iluminación básica con efecto submarino
      vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
      float lighting = dot(vNormal, lightDirection) * 0.5 + 0.5;
      
      // Atenuación de luz en agua
      float waterAttenuation = 0.7 + 0.3 * lighting;
      color *= waterAttenuation;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new h(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new h(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new h(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof h?this.params.landmassColor:new h(this.params.landmassColor),t=this.params.foamColor instanceof h?this.params.foamColor:new h(this.params.foamColor),a=this.params.oceanColor instanceof h?this.params.oceanColor:new h(this.params.oceanColor);return new B({vertexShader:he.vertexShader,fragmentShader:he.fragmentShader,uniforms:{time:{value:0},baseColor:{value:a},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:a}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const a=e[t];if(a!==void 0&&this.material.uniforms[t])if(a instanceof h||Array.isArray(a)){const r=a instanceof h?a:new h(a);this.material.uniforms[t].value=r}else this.material.uniforms[t].value=a})}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Lt(i){const e={waveIntensity:i.wave_intensity||.3,waveSpeed:i.wave_speed||2,oceanColor:i.ocean_color||[.1,.3,.6]};return new he(e)}class q{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return q.instance||(q.instance=new q),q.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,a)=>new ne(e),fromPythonData:(e,t,a)=>new ne({color:e.surface?.base_color||[.4,.4,.45],roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}),this.registerEffect("gas_giant_bands",{create:(e,t,a)=>new ie(a,e),fromPythonData:(e,t,a)=>kt(a,e)}),this.registerEffect("atmospheric_halo",{create:(e,t)=>new se(t,e),fromPythonData:(e,t)=>zt(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new re(t,e),fromPythonData:(e,t)=>Rt(t,e.atmosphere||{})}),this.registerEffect("dense_atmosphere",{create:(e,t)=>new He(t,e),fromPythonData:(e,t)=>It(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new ve(t,e),fromPythonData:(e,t)=>At(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new Oe(t,e),fromPythonData:(e,t)=>new Oe(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,a)=>new le(e),fromPythonData:(e,t,a)=>Ft(e.surface||{})}),this.registerEffect("icy_terrain",{create:(e,t,a)=>new ce(e),fromPythonData:(e,t,a)=>Ot(e.surface||{})}),this.registerEffect("ocean_waves",{create:(e,t,a)=>new he(e),fromPythonData:(e,t,a)=>Lt(e.surface||{})}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,a,r,l=0){const n=this.creators.get(e);if(!n)return console.warn(`Effect type '${e}' not registered`),null;try{const s=n.create(t,a,r);if(!s)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:s,priority:l,enabled:!0};return this.effects.set(c.id,c),c}catch(s){return console.error(`Error creating effect '${e}':`,s),null}}createEffectFromPythonData(e,t,a,r,l=0){const n=this.creators.get(e);if(!n||!n.fromPythonData)return this.createEffect(e,t,a,r,l);try{const s=n.fromPythonData(t,a,r);if(!s)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:s,priority:l,enabled:!0};return this.effects.set(c.id,c),c}catch(s){return console.error(`Error creating effect '${e}' from Python data:`,s),null}}createEffectsFromList(e,t,a){const r=[],l=e.sort((n,s)=>(n.priority||0)-(s.priority||0));for(const n of l){const s=this.createEffect(n.type,n.params,t,a,n.priority);s&&(s.enabled=n.enabled!==!1,r.push(s))}return r}createEffectsFromPythonPlanetData(e,t,a,r){const l=[];if(console.log("🎮 Creating effects from Python data:",e),e.surface_elements){const n=e.surface_elements;if(n.effects_3d&&Array.isArray(n.effects_3d))for(const s of n.effects_3d){const c=this.createEffect(s.type,s.params,t,a,s.priority||0);c&&(l.push(c),c.effect.addToScene&&c.effect.addToScene(r,a.position))}switch(n.type){case"gas_giant":const s=this.createEffectFromPythonData("gas_giant_bands",n,t,a,0);s&&l.push(s);break;case"metallic":case"metallic_3d":const c=this.createEffectFromPythonData("metallic_surface",e,t,a,0);c&&l.push(c);break;case"rocky":const f=this.createEffectFromPythonData("rocky_terrain",e,t,a,0);f&&(l.push(f),f.effect.apply(a));break;case"icy":const y=this.createEffectFromPythonData("icy_terrain",e,t,a,0);y&&(l.push(y),y.effect.apply(a));break;case"oceanic":const w=this.createEffectFromPythonData("ocean_waves",e,t,a,0);w&&(l.push(w),w.effect.apply(a));break}}if(e.atmosphere){if(e.atmosphere.halo){const n=this.createEffectFromPythonData("atmospheric_halo",e,t,a,10);n&&(l.push(n),n.effect.addToScene(r,a.position))}if(e.atmosphere.streaks){const n=this.createEffectFromPythonData("atmospheric_streaks",e,t,a,20);n&&(l.push(n),n.effect.addToScene(r,a.position))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const n=this.createEffectFromPythonData("dense_atmosphere",e.atmosphere,t,a,5);n&&(l.push(n),n.effect.addToScene(r,a.position))}}if(e.rings&&e.rings.has_rings){const n=this.createEffectFromPythonData("ring_system",e,t,a,1);n&&(l.push(n),n.effect.addToScene(r,a.position))}if(e.surface_elements?.has_fragmentation_zones){const n=this.createEffectFromPythonData("fragmentation",e,t,a,5);n&&(l.push(n),n.effect.addToScene(r,a.position))}return console.log(`✅ Created ${l.length} effects for planet`),l}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const a=this.effects.get(e);a&&(a.enabled=t!==void 0?t:!a.enabled)}updateAllEffects(e,t){for(const a of this.effects.values())if(a.enabled&&a.effect.update)try{a.effect.update(e,t)}catch(r){console.error(`Error updating effect ${a.type}:`,r)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const te=q.getInstance(),Wt=({planetName:i,containerClassName:e="",width:t=800,height:a=600,autoRotate:r=!0,enableControls:l=!0,showDebugInfo:n=!1,planetData:s,cosmicOriginTime:c,initialAngleRotation:f,onDataLoaded:y,onEffectsCreated:w,onError:b})=>{const g=p.useRef(null),N=p.useRef(),_=p.useRef(),P=p.useRef(),x=p.useRef(),j=p.useRef(),H=p.useRef(new lt),O=p.useRef(),[de,J]=p.useState(!0),[me,v]=p.useState(null),[D,U]=p.useState(null),[Y,L]=p.useState([]),[W,z]=p.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),R=p.useRef([]),V=p.useRef(0),G=p.useRef(),X=p.useRef(),ue=d=>({"gas giant":"#4A90E2",rocky:"#8B4513",icy:"#E0F7FF",oceanic:"#006BB3",desert:"#D2B48C",lava:"#FF4500",metallic:"#C0C0C0",toxic:"#9ACD32",crystalline:"#FF69B4"})[d.toLowerCase()]||"#808080",fe=d=>{const m=[];switch(d.toLowerCase()){case"gas giant":m.push({type:"gas_giant_bands",params:{band_count:5+Math.floor(Math.random()*3),colors:["#4A90E2","#6BA3D6","#87CEEB"]},priority:0});break;case"metallic":m.push({type:"metallic_surface",params:{color:[.7,.7,.8],roughness:.3,metalness:.9},priority:0});break;case"rocky":m.push({type:"rocky_terrain",params:{color:[.5,.3,.2],roughness:.9,crater_density:.3},priority:0});break;case"icy":m.push({type:"icy_terrain",params:{color:[.9,.95,1],roughness:.1,ice_thickness:.5},priority:0});break;case"oceanic":m.push({type:"ocean_waves",params:{color:[0,.4,.8],wave_height:.02,wave_speed:1},priority:0});break}return m},M=p.useCallback(()=>{if(!g.current||!_.current||!P.current)return;const d=g.current,m=d.clientWidth||400,u=d.clientHeight||400;_.current.setSize(m,u),P.current.aspect=m/u,P.current.updateProjectionMatrix(),console.log(`📐 Renderer resized to: ${m}x${u}`)},[]),$=async(d,m)=>{if(!x.current)return;console.log("🎨 Creating shader material with uniforms:",d);const u=`
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,E=`
      uniform float time;
      uniform vec3 baseColor;
      uniform float planetRadius;
      uniform float surfaceDetail;
      uniform float atmosphericHaze;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vec3 color = baseColor;
        
        // Aplicar variaciones basadas en los uniforms de la API
        float surface = sin(vPosition.x * surfaceDetail) * cos(vPosition.y * surfaceDetail) * sin(vPosition.z * surfaceDetail);
        color = mix(color, color * 1.3, surface * 0.3);
        
        // Efecto atmosférico
        float fresnel = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
        color = mix(color, vec3(0.5, 0.7, 1.0), fresnel * atmosphericHaze);
        
        // Iluminación básica
        float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
        color *= lighting;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `,I={time:{value:0},baseColor:{value:new h(m.planet_info.base_color)},planetRadius:{value:m.planet_info.radius||1},surfaceDetail:{value:d.surfaceDetail||5},atmosphericHaze:{value:d.atmosphericHaze||.1},...d},A=new B({vertexShader:u,fragmentShader:E,uniforms:I});x.current.material=A,console.log("✅ Shader material applied with API uniforms")},ee=p.useCallback(()=>{if(!g.current)return!1;try{for(;g.current.firstChild;)g.current.removeChild(g.current.firstChild);const d=g.current,m=d.clientWidth||t||400,u=d.clientHeight||a||400,E=new ct;E.background=new h(1297),N.current=E;const I=new ht(45,m/u,.1,1e3);I.position.set(0,0,5),P.current=I;const A=new dt({antialias:!0,alpha:!0,powerPreference:"high-performance"});return A.setSize(m,u),A.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.shadowMap.enabled=!0,A.shadowMap.type=mt,A.toneMapping=ut,A.toneMappingExposure=1.2,A.outputColorSpace=ft,g.current.appendChild(A.domElement),_.current=A,ye(E),xe(E),l&&Ue(I,A.domElement),!0}catch(d){return console.error("Error initializing Three.js:",d),!1}},[]),ye=d=>{const m=new ke(16777215,2);m.position.set(5,3,5),m.castShadow=!0,m.shadow.mapSize.width=2048,m.shadow.mapSize.height=2048,m.shadow.camera.near=.5,m.shadow.camera.far=50,m.shadow.camera.left=-10,m.shadow.camera.right=10,m.shadow.camera.top=10,m.shadow.camera.bottom=-10,d.add(m);const u=new ke(4482815,.4);u.position.set(-5,-3,-5),d.add(u);const E=new pt(2236996,.3);if(d.add(E),n){const I=new gt(m,1);d.add(I)}},xe=d=>{const m=new Se(1,128,64),u=new oe({color:8421504,metalness:.1,roughness:.8}),E=new ge(m,u);E.castShadow=!0,E.receiveShadow=!0,d.add(E),x.current=E},Ue=(d,m)=>{const u=new xt(d,m);u.enableDamping=!0,u.dampingFactor=.05,u.minDistance=1.5,u.maxDistance=10,u.autoRotate=r,u.autoRotateSpeed=.5,u.enablePan=!0,u.enableZoom=!0,j.current=u},Ee=p.useCallback(async()=>{try{if(J(!0),v(null),s){const E={planet_info:{name:i,type:s.planet_type,base_color:ue(s.planet_type),radius:s.diameter/2},surface_elements:{type:s.planet_type.toLowerCase(),elements:s.elements,effects_3d:fe(s.planet_type)},atmosphere:s.atmosphere!=="None"?{type:s.atmosphere,halo:!0,color:[.5,.7,1,.3]}:null,timing:{cosmic_origin_time:c,initial_angle_rotation:f}};U(E),await be(E),y&&y(E),J(!1);return}const d=await fetch(`/api/planet/${encodeURIComponent(i)}/rendering-data`);if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);const m=await d.json();if(!m.success)throw new Error(m.error||"Failed to fetch planet data");const u=m.rendering_data;if(U(u),console.log("🌍 API data loaded:",u),u.shader_uniforms){if(console.log("🎨 Applying shader uniforms from API:",u.shader_uniforms),x.current?.material instanceof B){const E=x.current.material;Object.keys(u.shader_uniforms).forEach(I=>{E.uniforms[I]&&(E.uniforms[I].value=u.shader_uniforms[I])}),E.needsUpdate=!0,console.log("✅ Shader uniforms applied to planet material")}else console.log("🔄 Creating ShaderMaterial with API uniforms"),await $(u.shader_uniforms,u);await be(u)}else console.log("🔧 Using Modular Effects for API data (no shader_uniforms found)"),await be(u);y&&y(u)}catch(d){const m=d instanceof Error?d.message:"Unknown error";console.error("Error loading planet data:",m),v(m),b&&b(m),Me()}finally{J(!1)}},[i,s,c,f]),be=async d=>{if(!(!N.current||!x.current))try{if(je(),x.current.material instanceof oe){const u=new h(d.planet_info.base_color);x.current.material.color=u,x.current.material.needsUpdate=!0}const m=te.createEffectsFromPythonPlanetData(d,1,x.current,N.current);L(m),R.current=m,w&&w(m),Ye()}catch(m){console.error("Error creating effects:",m),Me()}},Me=()=>{if(!(!N.current||!x.current)){console.log("⚠️ Applying fallback effects");try{const d=te.createEffect("atmospheric_halo",{color:[.5,.5,.8],intensity:.5,falloff:2,scale:1.1},1,x.current);d&&d.effect.addToScene&&(d.effect.addToScene(N.current,x.current.position),R.current=[d],L([d]))}catch(d){console.error("Error applying fallback effects:",d)}}},je=()=>{R.current.forEach(d=>{try{d.effect.dispose&&d.effect.dispose()}catch(m){console.error("Error disposing effect:",m)}}),R.current=[],L([])},Ne=p.useCallback(()=>{O.current=requestAnimationFrame(Ne);const d=performance.now(),m=H.current.getDelta();j.current&&j.current.update();try{te.updateAllEffects(m,x.current?.rotation.y)}catch(u){console.error("Error updating effects:",u)}if(x.current&&!l&&(x.current.rotation.y+=m*.1),x.current?.material instanceof B){const u=x.current.material;u.uniforms.time&&(u.uniforms.time.value+=m)}if(_.current&&N.current&&P.current){const u=performance.now();_.current.render(N.current,P.current);const E=performance.now()-u;if(d-V.current>5e3){const I=1e3/(d-V.current);z(A=>({...A,frameRate:Math.round(I),renderTime:Math.round(E*100)/100})),V.current=d}}},[]),Ye=p.useCallback(()=>{const d=te.getStats();z(m=>({...m,activeEffects:d.activeEffects,enabledEffects:d.enabledEffects}))},[]);return p.useEffect(()=>{let d=!0;return(async()=>{try{if(!d)return;if(!ee()){d&&v("Failed to initialize 3D renderer");return}if(!d||(Ne(),g.current&&"ResizeObserver"in window&&(X.current=new ResizeObserver(M),X.current.observe(g.current)),window.addEventListener("resize",M),!d))return;await Ee()}catch(u){console.error("Error during ModularPlanetRenderer initialization:",u),d&&v(u instanceof Error?u.message:"Unknown initialization error")}})(),()=>{if(d=!1,O.current&&cancelAnimationFrame(O.current),X.current&&X.current.disconnect(),window.removeEventListener("resize",M),je(),G.current&&G.current.dispose(),j.current&&j.current.dispose(),_.current&&g.current)try{g.current.contains(_.current.domElement)&&g.current.removeChild(_.current.domElement),_.current.dispose()}catch(u){console.error("Error during cleanup:",u)}}},[]),p.useEffect(()=>{s&&N.current&&x.current&&Ee()},[i,s?.planet_type]),p.useEffect(()=>{const d=setInterval(()=>{const m=te.getStats();z(u=>({...u,activeEffects:m.activeEffects,enabledEffects:m.enabledEffects}))},1e4);return()=>clearInterval(d)},[]),o.jsxs("div",{className:`relative ${e}`,children:[o.jsx("div",{ref:g,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),de&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:o.jsxs("div",{className:"text-white text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),o.jsx("div",{children:"Loading planet..."})]})}),me&&o.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[o.jsx("strong",{children:"Error:"})," ",me]}),D&&!de&&o.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[o.jsx("h3",{className:"text-lg font-bold",children:D.planet_info.name}),o.jsx("p",{className:"text-sm opacity-80",children:D.planet_info.type}),o.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[Y.length," effects active"]}),D.surface_elements?.description&&o.jsx("p",{className:"text-xs mt-2 opacity-60",children:D.surface_elements.description.appearance})]}),n&&o.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[o.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),o.jsxs("div",{children:["Frame Rate: ",W.frameRate," FPS"]}),o.jsxs("div",{children:["Render Time: ",W.renderTime,"ms"]}),o.jsxs("div",{children:["Active Effects: ",W.activeEffects]}),o.jsxs("div",{children:["Enabled Effects: ",W.enabledEffects]}),o.jsxs("div",{className:"mt-2",children:[o.jsx("div",{className:"font-semibold",children:"Effects:"}),Y.map((d,m)=>o.jsxs("div",{className:"ml-2",children:[d.type," (",d.enabled?"ON":"OFF",")"]},d.id))]})]})]})};class Vt extends Le.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?o.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:o.jsxs("div",{className:"text-center p-4",children:[o.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),o.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const Bt=i=>o.jsx(Vt,{children:o.jsx(Wt,{...i})}),Ht=({planetUrl:i,imageUrl:e,planet:t,cosmicOriginTime:a,initialAngleRotation:r})=>{const l=p.useRef(null),n=p.useRef(null),[s,c]=p.useState("Aligning Stargate..."),[f,y]=p.useState(!1),[w,b]=p.useState(!1),[g,N]=p.useState(!1),[_,P]=p.useState(!0),[x,j]=p.useState(!0),[H,O]=p.useState(null),[de,J]=p.useState(null);p.useEffect(()=>{const v=document.createElement("style");return v.textContent=`
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
    `,document.head.appendChild(v),()=>{document.head.removeChild(v)}},[]),p.useEffect(()=>{const v=l.current;if(!v)return;const D=v.getContext("2d");if(!D)return;let U=[];const Y=800;let L,W;const z=800;let R,V=.5;function G(){const M=v?.parentElement;if(!M||!v)return;const $=M.clientWidth,ee=M.clientHeight;v.width=Math.min($,z),v.height=Math.min(ee,z),L=v.width/2,W=v.height/2}function X(){G(),U=[];for(let M=0;M<Y;M++)U.push({x:Math.random()*(v?.width||800),y:Math.random()*(v?.height||800),z:Math.random()*(v?.width||800),o:Math.random()});ue()}function ue(){!v||!D||(D.clearRect(0,0,v.width,v.height),U.forEach(M=>{M.z-=V,M.z<=0&&(M.z=v.width,M.x=Math.random()*v.width,M.y=Math.random()*v.height,M.o=Math.random());const $=v.width/M.z,ee=(M.x-L)*$+L,ye=(M.y-W)*$+W,xe=2*$;D.beginPath(),D.fillStyle=`rgba(255, 255, 255, ${M.o})`,D.arc(ee,ye,xe,0,2*Math.PI),D.fill()}),V<60&&(V+=1),R=requestAnimationFrame(ue))}X();const fe=()=>G();return window.addEventListener("resize",fe),()=>{window.removeEventListener("resize",fe),R&&cancelAnimationFrame(R)}},[]),p.useEffect(()=>{if(e&&!_){console.log("Loading planet image:",e);const v=new Image;v.onload=()=>{console.log("Planet image loaded successfully"),n.current&&(n.current.src=e,b(!0),N(!0))},v.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{b(!0),N(!0)},1500)},v.src=e}else(_||!e)&&setTimeout(()=>{b(!0),N(!0)},1500)},[e,_]),p.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){c("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),y(!0);const D=(z,R)=>Array.from({length:R},()=>z[Math.floor(Math.random()*z.length)]).join(""),U=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let Y=0,L=0;const W=()=>{if(Y>=U.length){const R="Stargate system aligned";let V=0;c("");const G=()=>{V<R.length?(c(R.substring(0,V+1)),V++,setTimeout(G,30)):y(!1)};G();return}const z=U[Y];c(D(z.chars,32)),L++,L>=z.iterations&&(Y++,L=0),setTimeout(W,z.duration)};W()},[]);const me=()=>{P(!_),_||(b(!0),N(!0))};return o.jsxs("div",{className:"h-full flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),x&&o.jsx("div",{className:"flex items-center gap-2",children:o.jsx("button",{onClick:me,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${_?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:_?"2D View":"3D View"})})]}),o.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[o.jsx("canvas",{ref:l,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${g?"opacity-0":"opacity-100"}`,style:{filter:g?"blur(50px)":"none"}}),_&&w&&t&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${w?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:o.jsx(Bt,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!0,enableControls:!0,showDebugInfo:!1,planetData:{diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements},cosmicOriginTime:a,initialAngleRotation:r,onDataLoaded:v=>{O(v),console.log("🌍 Planet data loaded:",v)},onError:v=>{J(v),console.error("❌ Planet rendering error:",v)}})}),!_&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${w?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:w&&e?o.jsx("div",{className:"w-full h-full flex items-center justify-center",children:o.jsx(Ke,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:o.jsx("img",{ref:n,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):o.jsx("img",{ref:n,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),x&&o.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:_?"🌍 3D":"🖼️ 2D"})]}),o.jsxs("div",{className:"text-center mt-auto",children:[o.jsxs("a",{href:i,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${f?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[o.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),s]}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),o.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",_&&H&&o.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",H.planet_info?.type," Planet",H.atmosphere&&o.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),H.rings?.has_rings&&o.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),_&&de&&o.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Ut=({currentPlanet:i,system:e,galaxy:t,systemPlanets:a})=>{const[r,l]=p.useState(null),[n,s]=p.useState(null),[c,f]=p.useState(!1),[y,w]=p.useState(!1),[b,g]=p.useState(!0);p.useEffect(()=>{if(a&&a.length>0){const P=a.findIndex(x=>x.name.toLowerCase()===i.toLowerCase());P!==-1?(P>0?(l(a[P-1].name.toLowerCase()),f(!0)):e.index>0?(l("__prev_system__"),f(!0)):f(!1),P<a.length-1?(s(a[P+1].name.toLowerCase()),w(!0)):(s("__next_system__"),w(!0))):(f(!1),w(!1))}else f(!1),w(!1);g(!1)},[i,e.index,a]);const N=async()=>{const P=t.coordinates.join(",");if(r==="__prev_system__")try{const x=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(x.ok){const j=await x.json();if(j.system&&j.system.planets&&j.system.planets.length>0){const O=j.system.planets[j.system.planets.length-1].name.toLowerCase();ae(P,e.index-1,O,j.system.planets),_e(P,e.index-1),window.location.href=`/planet/${O}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else r&&(ae(P,e.index,r,a),window.location.href=`/planet/${r}`)},_=async()=>{const P=t.coordinates.join(",");if(n==="__next_system__")try{const x=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(x.ok){const j=await x.json();if(j.system&&j.system.planets&&j.system.planets.length>0){const O=j.system.planets[0].name.toLowerCase();ae(P,e.index+1,O,j.system.planets),_e(P,e.index+1),window.location.href=`/planet/${O}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else n&&(ae(P,e.index,n,a),window.location.href=`/planet/${n}`)};return b?null:o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("button",{onClick:N,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),o.jsx("button",{onClick:_,disabled:!y,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${y?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Yt=({planet:i,system:e,galaxy:t,planet_url:a,version:r,image_url:l,cosmic_origin_time:n,initial_angle_rotation:s})=>{const[c]=p.useState(t.coordinates.join(","));p.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",i.name.toLowerCase()),ae(c,e.index,i.name,e.planets||[]),_e(c,e.index)},[c,e.index,i.name]);const f=b=>b.replace(/_/g," "),y=b=>b.replace(/_/g," "),w=b=>b.replace(/_/g," ");return o.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[o.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),o.jsxs("div",{className:"relative z-10",children:[o.jsx($e,{}),o.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:o.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",f(i.name),"'"]})}),o.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",y(e.name),"' - Galaxy '",w(t.name),"'"]}),o.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),o.jsx(Ut,{currentPlanet:i.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:o.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[o.jsx("div",{className:"order-1 lg:order-1",children:o.jsx(Ht,{planetUrl:a,imageUrl:l,planet:i,cosmicOriginTime:n,initialAngleRotation:s})}),o.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),o.jsx("div",{className:"order-2 lg:order-2",children:o.jsx(vt,{planet:i,system:e,galaxy:t,cosmicOriginTime:n,initialAngleRotation:s})})]})}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:o.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:o.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",y(e.name),"'"]})})})]}),o.jsx(Ge,{version:r})]}),o.jsx(qe,{currentLocation:{type:"planet",name:i.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:i.name}})]})};console.log("Atlas Planet React script loading...");document.addEventListener("DOMContentLoaded",async()=>{console.log("DOM loaded, starting Planet React app...");try{const i=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),a=document.getElementById("meta-data");if(!i||!e||!t||!a){console.error("Missing required data elements");return}const r=JSON.parse(i.textContent||"{}"),l=JSON.parse(e.textContent||"{}"),n=JSON.parse(t.textContent||"{}"),s=JSON.parse(a.textContent||"{}"),c={planet:r,system:l,galaxy:n,planet_url:s.planet_url,version:s.version,image_url:s.image_url,cosmic_origin_time:s.cosmic_origin_time,initial_angle_rotation:s.initial_angle_rotation},f=document.getElementById("atlas-react-root");f&&(Ze.createRoot(f).render(Le.createElement(Yt,c)),console.log("Planet React app rendered successfully!"))}catch(i){console.error("Error initializing Planet React app:",i)}});
