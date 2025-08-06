import{r as p,j as a,R as $e,V as at,c as st}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as it}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as rt,U as nt,m as ce,c as De,a as lt}from"./atlas_Ep8Z7FyBoZ31__UNPvjgh.js";import{m as ct,V as S,n as ae,T as te,Q as Oe,l as Ve,o as O,R as dt,p as ht,q as mt,e as Ae,r as Ze,s as G,N as ut,t as X,C as h,c as ze,d as Se,u as ft,v as Ke,w as pt,x as gt,G as vt,y as de,F as yt,z as Te,H as xt,S as bt,P as wt,W as _t,I as Ct,J as St,K as Pt,D as We,A as Et,O as Mt,U as Nt}from"./atlas_CLFvmuIFO6dQpgSV6iv6Q.js";const jt=({planet:s,system:e,galaxy:t,cosmicOriginTime:o,initialAngleRotation:i})=>{const[l,n]=p.useState(!1),r=x=>x.replace(/_/g," "),c=x=>{const g=x/86400;return g<30?`${g.toFixed(2)} days`:g<365?`${(g/30).toFixed(2)} months`:`${(g/365).toFixed(2)} years`},f=x=>{const g=x*9/5+32;return`${x.toFixed(1)}°C (${g.toFixed(1)}°F)`},w=x=>`${x.toExponential(2)} kg`,_=x=>x>=1e3?`${(x/1e3).toFixed(2)} km`:`${x.toFixed(2)} m`;return a.jsxs("div",{className:"h-full flex flex-col relative",children:[a.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),a.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[a.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),a.jsx(rt,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),a.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),a.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),a.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[a.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),a.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),a.jsx("div",{className:"text-xs font-bold text-orange-300",children:w(s.mass)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),a.jsx("div",{className:"text-xs font-bold text-orange-300",children:_(s.diameter)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),a.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),a.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[a.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),a.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),a.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),a.jsx("div",{className:"text-xs font-bold text-cyan-300",children:c(s.orbital_period_seconds)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),a.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),a.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),a.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),a.jsx("div",{className:"text-xs font-bold text-red-300",children:f(s.surface_temperature)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),a.jsx("div",{className:"text-xs font-bold text-red-300",children:c(s.rotation_period_seconds)})]})]})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&a.jsx("button",{onClick:()=>n(!l),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:l?"▲ Less":"▼ All"})]}),a.jsx("div",{className:"flex flex-wrap gap-1",children:(l?s.elements:s.elements.slice(0,4)).map((x,g)=>a.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:x},g))})]})]}),a.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[a.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Status:"}),a.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Planet:"}),a.jsx("div",{className:"text-white truncate font-medium",children:r(s.name)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"System:"}),a.jsx("div",{className:"text-white truncate font-medium",children:r(e.name)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"System ID:"}),a.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),a.jsx("div",{className:"text-white truncate font-medium",children:r(t.name)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),a.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},Be={type:"change"},Re={type:"start"},Xe={type:"end"},Ce=new dt,Ue=new ht,Dt=Math.cos(70*mt.DEG2RAD),R=new S,I=2*Math.PI,E={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},je=1e-6;class Tt extends ct{constructor(e,t=null){super(e,t),this.state=E.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ae.ROTATE,MIDDLE:ae.DOLLY,RIGHT:ae.PAN},this.touches={ONE:te.ROTATE,TWO:te.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new Oe,this._lastTargetPosition=new S,this._quat=new Oe().setFromUnitVectors(e.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ve,this._sphericalDelta=new Ve,this._scale=1,this._panOffset=new S,this._rotateStart=new O,this._rotateEnd=new O,this._rotateDelta=new O,this._panStart=new O,this._panEnd=new O,this._panDelta=new O,this._dollyStart=new O,this._dollyEnd=new O,this._dollyDelta=new O,this._dollyDirection=new S,this._mouse=new O,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zt.bind(this),this._onPointerDown=At.bind(this),this._onPointerUp=Rt.bind(this),this._onContextMenu=Wt.bind(this),this._onMouseWheel=Ft.bind(this),this._onKeyDown=Lt.bind(this),this._onTouchStart=Ot.bind(this),this._onTouchMove=Vt.bind(this),this._onMouseDown=kt.bind(this),this._onMouseMove=It.bind(this),this._interceptControlDown=Bt.bind(this),this._interceptControlUp=Ut.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Be),this.update(),this.state=E.NONE}update(e=null){const t=this.object.position;R.copy(t).sub(this.target),R.applyQuaternion(this._quat),this._spherical.setFromVector3(R),this.autoRotate&&this.state===E.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let o=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(o)&&isFinite(i)&&(o<-Math.PI?o+=I:o>Math.PI&&(o-=I),i<-Math.PI?i+=I:i>Math.PI&&(i-=I),o<=i?this._spherical.theta=Math.max(o,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(o+i)/2?Math.max(o,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=n!=this._spherical.radius}if(R.setFromSpherical(this._spherical),R.applyQuaternion(this._quatInverse),t.copy(this.target).add(R),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){const r=R.length();n=this._clampDistance(r*this._scale);const c=r-n;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),l=!!c}else if(this.object.isOrthographicCamera){const r=new S(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=c!==this.object.zoom;const f=new S(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(r),this.object.updateMatrixWorld(),n=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(Ce.origin.copy(this.object.position),Ce.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ce.direction))<Dt?this.object.lookAt(this.target):(Ue.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ce.intersectPlane(Ue,this.target))))}else if(this.object.isOrthographicCamera){const n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>je||8*(1-this._lastQuaternion.dot(this.object.quaternion))>je||this._lastTargetPosition.distanceToSquared(this.target)>je?(this.dispatchEvent(Be),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?I/60*this.autoRotateSpeed*e:I/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){R.setFromMatrixColumn(t,0),R.multiplyScalar(-e),this._panOffset.add(R)}_panUp(e,t){this.screenSpacePanning===!0?R.setFromMatrixColumn(t,1):(R.setFromMatrixColumn(t,0),R.crossVectors(this.object.up,R)),R.multiplyScalar(e),this._panOffset.add(R)}_pan(e,t){const o=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;R.copy(i).sub(this.target);let l=R.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/o.clientHeight,this.object.matrix),this._panUp(2*t*l/o.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/o.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/o.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const o=this.domElement.getBoundingClientRect(),i=e-o.left,l=t-o.top,n=o.width,r=o.height;this._mouse.x=i/n*2-1,this._mouse.y=-(l/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(I*this._rotateDelta.x/t.clientHeight),this._rotateUp(I*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(o,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(o,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,l=Math.sqrt(o*o+i*i);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const o=this._getSecondPointerPosition(e),i=.5*(e.pageX+o.x),l=.5*(e.pageY+o.y);this._rotateEnd.set(i,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(I*this._rotateDelta.x/t.clientHeight),this._rotateUp(I*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(o,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,l=Math.sqrt(o*o+i*i);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const n=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(n,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new O,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,o={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(o.deltaY*=10),o}}function At(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function zt(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Rt(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xe),this.state=E.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kt(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=E.DOLLY;break;case ae.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=E.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=E.ROTATE}break;case ae.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=E.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=E.PAN}break;default:this.state=E.NONE}this.state!==E.NONE&&this.dispatchEvent(Re)}function It(s){switch(this.state){case E.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case E.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case E.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Ft(s){this.enabled===!1||this.enableZoom===!1||this.state!==E.NONE||(s.preventDefault(),this.dispatchEvent(Re),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Xe))}function Lt(s){this.enabled!==!1&&this._handleKeyDown(s)}function Ot(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case te.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=E.TOUCH_ROTATE;break;case te.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=E.TOUCH_PAN;break;default:this.state=E.NONE}break;case 2:switch(this.touches.TWO){case te.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=E.TOUCH_DOLLY_PAN;break;case te.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=E.TOUCH_DOLLY_ROTATE;break;default:this.state=E.NONE}break;default:this.state=E.NONE}this.state!==E.NONE&&this.dispatchEvent(Re)}function Vt(s){switch(this._trackPointer(s),this.state){case E.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case E.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case E.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case E.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=E.NONE}}function Wt(s){this.enabled!==!1&&s.preventDefault()}function Bt(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ut(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class He{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class Pe{ringSystem;material;geometry;animationId;params;planetRadius;static GRAY_VARIATIONS={dark:{baseGray:.18,variation:.04},medium:{baseGray:.25,variation:.06},light:{baseGray:.32,variation:.06},mixed:{baseGray:.25,variation:.08}};constructor(e,t){this.planetRadius=e,this.params={innerRadius:t.innerRadius||e*1.3,outerRadius:t.outerRadius||e*1.8,tiltFactor:t.tiltFactor||.2,particleCount:t.particleCount||1e3,grayVariation:t.grayVariation||"medium",ringThickness:t.ringThickness||.1,sparkleIntensity:t.sparkleIntensity||.03,brightness:t.brightness||2.2,rotationSync:t.rotationSync!==!1,...t},this.geometry=new Ae,this.material=this.createRingMaterial(),this.ringSystem=new Ze(this.geometry,this.material),this.generateRingGeometry()}createRingMaterial(){return new G({uniforms:{brightness:{value:this.params.brightness},time:{value:0}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:ut})}generateRingGeometry(){let e;this.params.particleData&&this.params.particleData.length>0?e=this.processParticleData(this.params.particleData):e=this.generateProceduralRings(),this.createGeometryFromParticles(e)}processParticleData(e){const t=[],o=new He(Date.now());for(const i of e){const l=this.planetRadius/(this.params.innerRadius||200),n=i.distance*l,r=i.angle,c=Math.asin(this.params.tiltFactor||.2),f=n*Math.cos(r),w=n*Math.sin(r),_=w*Math.sin(c),x=w*Math.cos(c),g=(this.params.outerRadius-this.params.innerRadius)*(this.params.ringThickness||.4),T=o.uniform(-g*.8,g*.8),C=o.uniform(-g*.3,g*.3);t.push({x:f+C,y:_+T,z:x+o.uniform(-g*.4,g*.4),distance:n,angle:r,size:i.size||1,color:i.color||[.25,.25,.25,1]})}return t}generateProceduralRings(){const e=[],t=new He(12345),o=this.params.particleCount||1e3;for(let i=0;i<o;i++){const l=Math.pow(t.uniform(0,1),.7),n=this.params.innerRadius+(this.params.outerRadius-this.params.innerRadius)*l,r=t.uniform(0,Math.PI*2),c=n*Math.cos(r),f=n*Math.sin(r),w=Math.asin(this.params.tiltFactor||.2),_=f*Math.sin(w),x=f*Math.cos(w),g=(this.params.outerRadius-this.params.innerRadius)*(this.params.ringThickness||.1),T=t.uniform(-g,g),C=Pe.GRAY_VARIATIONS[this.params.grayVariation||"medium"],M=Math.max(.1,Math.min(.6,C.baseGray+t.uniform(-C.variation,C.variation))),y=t.uniform(.8,1.5),H=t.uniform(0,1)<(this.params.sparkleIntensity||.03)?y*t.uniform(1.2,2):y;e.push({x:c,y:_+T,z:x,distance:n,angle:r,size:H,color:[M,M,M,1]})}return e}createGeometryFromParticles(e){const t=new Float32Array(e.length*3),o=new Float32Array(e.length*3),i=new Float32Array(e.length);for(let l=0;l<e.length;l++){const n=e[l];t[l*3]=n.x,t[l*3+1]=n.y,t[l*3+2]=n.z,o[l*3]=n.color[0],o[l*3+1]=n.color[1],o[l*3+2]=n.color[2],i[l]=n.size}this.geometry.setAttribute("position",new X(t,3)),this.geometry.setAttribute("color",new X(o,3)),this.geometry.setAttribute("size",new X(i,1))}addToScene(e,t){t&&this.ringSystem.position.copy(t),this.ringSystem.renderOrder=1,e.add(this.ringSystem)}update(e,t){this.material.uniforms.time.value+=e,this.params.rotationSync&&t!==void 0&&(this.ringSystem.rotation.y=t)}updateParams(e){this.params={...this.params,...e},e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness),(e.innerRadius||e.outerRadius||e.particleCount)&&this.generateRingGeometry()}getObject3D(){return this.ringSystem}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.geometry.dispose(),this.material.dispose()}}function Ht(s,e){const t={innerRadius:s.inner_radius||e*1.3,outerRadius:s.outer_radius||e*1.8,tiltFactor:s.tilt_factor||.2,particleData:[...s.full_ring?.particles||[],...s.ontop_ring?.particles||[]],rotationSync:!0,brightness:2.2};return new Pe(e,t)}class Ge{seed;constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}random(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return this.random()*(t-e)+e}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class he{material;params;mesh;static vertexShader=`
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
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new h(16753920),bandColor:t.bandColor||new h(16753920),stormColor:t.stormColor||new h(9109504),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,stormIntensity:t.stormIntensity||.7,noiseScale:t.noiseScale||4},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),o=new Ge(12345);for(let i=0;i<e&&i<20;i++)t[i]=o.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),o=new Ge(67890);for(let i=0;i<e&&i<20;i++)t[i]=o.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof h?this.params.baseColor:new h(this.params.baseColor),t=this.params.bandColor instanceof h?this.params.bandColor:new h(this.params.bandColor),o=this.params.stormColor instanceof h?this.params.stormColor:new h(this.params.stormColor);return new G({vertexShader:he.vertexShader,fragmentShader:he.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},stormColor:{value:o},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},stormIntensity:{value:this.params.stormIntensity},noiseScale:{value:this.params.noiseScale}}})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){if(this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.baseColor){const t=e.baseColor instanceof h?e.baseColor:new h(e.baseColor);this.material.uniforms.planetColor.value=t}if(e.bandColor){const t=e.bandColor instanceof h?e.bandColor:new h(e.bandColor);this.material.uniforms.bandColor.value=t}if(e.stormColor){const t=e.stormColor instanceof h?e.stormColor:new h(e.stormColor);this.material.uniforms.stormColor.value=t}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Gt(s,e){const t=e.cloud_bands||{},o={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new h(e.base_color):new h(16753920),animationSpeed:1,turbulence:e.turbulence||.5,stormIntensity:e.storm_intensity||.7};return new he(s,o)}class me{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new h(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsationSpeed||2,fresnelPower:t.fresnelPower||2},this.geometry=new ze(e*this.params.scale,64,64),this.material=this.createMaterial(),this.mesh=new Se(this.geometry,this.material)}createMaterial(){const e=this.params.color instanceof h?this.params.color:new h(this.params.color);return new G({vertexShader:me.vertexShader,fragmentShader:me.fragmentShader,uniforms:{glowColor:{value:e},glowIntensity:{value:this.params.intensity},glowFalloff:{value:this.params.falloff},fresnelPower:{value:this.params.fresnelPower},time:{value:0},pulsation:{value:this.params.pulsation},pulsationSpeed:{value:this.params.pulsationSpeed}},transparent:!0,blending:Ke,side:ft,depthWrite:!1})}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof h?e.color:new h(e.color);this.material.uniforms.glowColor.value=t}e.intensity!==void 0&&(this.material.uniforms.glowIntensity.value=e.intensity),e.falloff!==void 0&&(this.material.uniforms.glowFalloff.value=e.falloff),e.pulsation!==void 0&&(this.material.uniforms.pulsation.value=e.pulsation),e.pulsationSpeed!==void 0&&(this.material.uniforms.pulsationSpeed.value=e.pulsationSpeed)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}class ue{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new h(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new Ae,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new Ze(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),r=this.params.color instanceof h?this.params.color:new h(this.params.color);for(let c=0;c<this.particleCount;c++){const f=Math.random()*Math.PI*2,w=Math.acos(Math.random()*2-1),_=e*(1+Math.random()*.1);t[c*3]=_*Math.sin(w)*Math.cos(f),t[c*3+1]=_*Math.sin(w)*Math.sin(f),t[c*3+2]=_*Math.cos(w),o[c*3]=r.r*(.8+Math.random()*.4),o[c*3+1]=r.g*(.8+Math.random()*.4),o[c*3+2]=r.b*(.8+Math.random()*.4),i[c]=this.params.size*(Math.random()*.5+.75),l[c]=this.params.speed*(Math.random()*.8+.6),n[c]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new X(t,3)),this.geometry.setAttribute("customColor",new X(o,3)),this.geometry.setAttribute("size",new X(i,1)),this.geometry.setAttribute("speed",new X(l,1)),this.geometry.setAttribute("phase",new X(n,1))}createMaterial(){return new G({vertexShader:ue.vertexShader,fragmentShader:ue.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:Ke,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}class qe{mesh;material;geometry;params;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.5,.5,.8,.3],width:t.width||15,opacity:t.opacity||.3,density:t.density||1};const o=e+this.params.width/200;this.geometry=new ze(o,32,32),this.material=new pt({color:new h(this.params.color[0],this.params.color[1],this.params.color[2]),transparent:!0,opacity:this.params.opacity*this.params.density,side:gt}),this.mesh=new Se(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.mesh.rotation.y+=e*.05}updateParams(e){this.params={...this.params,...e},e.color&&this.material.color.setRGB(e.color[0],e.color[1],e.color[2]),(e.opacity!==void 0||e.density!==void 0)&&(this.material.opacity=(e.opacity||this.params.opacity)*(e.density||this.params.density))}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function Yt(s,e){const t=e.halo||{},o={color:t.color?new h().setRGB(t.color[0],t.color[1],t.color[2]):new h(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsation_speed||2};return new me(s,o)}function $t(s,e){const t=e.streaks||{},o={color:t.color?new h().setRGB(t.color[0],t.color[1],t.color[2]):new h(16777215),particleCount:t.count||100,speed:t.speed||1,size:2,opacity:.6,turbulence:1};return new ue(s,o)}function Zt(s,e){const t={type:e.type||"Thin",color:e.color||[.5,.5,.8,.3],width:e.width||15,opacity:e.color?.[3]||.3,density:1};return new qe(s,t)}class fe{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={color:e.color||new h(7368816),roughness:e.roughness||.7,metalness:e.metalness||.9,fragmentationIntensity:e.fragmentationIntensity||.5,noiseScale:e.noiseScale||8,noiseIntensity:e.noiseIntensity||.3,edgeFragmentation:e.edgeFragmentation||1,circularWaves:e.circularWaves||1,fogPatches:e.fogPatches||1},this.material=this.createMaterial()}createMaterial(){const e=this.params.color instanceof h?this.params.color:new h(this.params.color);return new G({vertexShader:fe.vertexShader,fragmentShader:fe.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},roughness:{value:this.params.roughness},metalness:{value:this.params.metalness},fragmentationIntensity:{value:this.params.fragmentationIntensity},noiseScale:{value:this.params.noiseScale},noiseIntensity:{value:this.params.noiseIntensity},edgeFragmentation:{value:this.params.edgeFragmentation},circularWaves:{value:this.params.circularWaves},fogPatches:{value:this.params.fogPatches}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof h?e.color:new h(e.color);this.material.uniforms.baseColor.value=t}e.roughness!==void 0&&(this.material.uniforms.roughness.value=e.roughness),e.metalness!==void 0&&(this.material.uniforms.metalness.value=e.metalness),e.fragmentationIntensity!==void 0&&(this.material.uniforms.fragmentationIntensity.value=e.fragmentationIntensity),e.noiseScale!==void 0&&(this.material.uniforms.noiseScale.value=e.noiseScale),e.noiseIntensity!==void 0&&(this.material.uniforms.noiseIntensity.value=e.noiseIntensity),e.edgeFragmentation!==void 0&&(this.material.uniforms.edgeFragmentation.value=e.edgeFragmentation),e.circularWaves!==void 0&&(this.material.uniforms.circularWaves.value=e.circularWaves),e.fogPatches!==void 0&&(this.material.uniforms.fogPatches.value=e.fogPatches)}getMaterial(){return this.material}dispose(){this.material.dispose()}}class Ye{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new h(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new vt,this.generateFragments()}generateFragments(){const e=new de({color:this.params.color instanceof h?this.params.color:new h(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const o=this.generateFragmentGeometry(),i=new Se(o,e);this.positionFragment(i,t),i.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const l=this.params.size*(Math.random()*.5+.75);i.scale.set(l,l,l),i.userData={rotationAxis:new S(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(i),this.fragments.add(i)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],o=[],i=[];i.push(new S(0,0,0));for(let r=0;r<e;r++){const c=r/e*Math.PI*2,f=Math.random()*.5+.5,w=(Math.random()-.5)*.3;i.push(new S(Math.cos(c)*f,Math.sin(c)*f,w))}for(let r=1;r<=e;r++){const f=i[r].clone();f.z+=Math.random()*.4+.2,i.push(f)}for(const r of i)t.push(r.x,r.y,r.z);for(let r=1;r<e;r++)o.push(0,r,r+1);o.push(0,e,1);const l=i.length-e-1;for(let r=0;r<e-1;r++)o.push(l,l+r+2,l+r+1);o.push(l,l+1,l+e);for(let r=0;r<e;r++){const c=r+1,f=(r+1)%e+1,w=c+e,_=f+e;o.push(c,w,f),o.push(f,w,_)}const n=new Ae;return n.setAttribute("position",new yt(t,3)),n.setIndex(o),n.computeVertexNormals(),n}positionFragment(e,t){let o;switch(this.params.distribution){case"edge":o=this.generateEdgePosition(t);break;case"surface":o=this.generateSurfacePosition();break;case"random":default:o=this.generateRandomPosition();break}e.position.copy(o)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,o=this.planetRadius*(.95+Math.random()*.1),i=(Math.random()-.5)*this.planetRadius*.5;return new S(Math.cos(t)*o,i,Math.sin(t)*o)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),o=this.planetRadius*(1+Math.random()*.05);return new S(o*Math.sin(t)*Math.cos(e),o*Math.sin(t)*Math.sin(e),o*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;return new S(e*Math.sin(t)*Math.cos(o),e*Math.sin(t)*Math.sin(o),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,o)=>{const i=t.userData;t.rotateOnAxis(i.rotationAxis,i.rotationSpeed*e*this.params.animationSpeed);const l=Math.sin(Date.now()*.001+o)*.001;t.position.y+=l*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof h?e.color:new h(e.color);this.fragmentMeshes.forEach(o=>{o.material instanceof de&&(o.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof de&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Te&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Te&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class pe{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new h(.8,.8,.8),cloudColor:e.cloudColor||new h(.7,.7,.7),craterColor:e.craterColor||new h(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof h?this.params.mountainColor:new h(this.params.mountainColor),t=this.params.cloudColor instanceof h?this.params.cloudColor:new h(this.params.cloudColor),o=this.params.craterColor instanceof h?this.params.craterColor:new h(this.params.craterColor),i=new Array(30).fill(new S),l=new Array(30).fill(new S),n=new Array(10).fill(new S);return this.params.mountains&&this.params.mountains.forEach((r,c)=>{c<30&&(i[c]=new S(r.position[0],r.position[1],r.angle),l[c]=new S(r.width,r.height,0))}),this.params.clouds&&this.params.clouds.forEach((r,c)=>{c<10&&(n[c]=new S(r.position[0],r.position[1],r.radius))}),new G({vertexShader:pe.vertexShader,fragmentShader:pe.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new h(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:i},mountainSizes:{value:l},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:n},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new S(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new S},craterColor:{value:o},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Kt(s){const e={mountains:s.mountains||[],clouds:s.clouds||[],crater:s.crater,baseTextureIntensity:.4};return new pe(e)}class ge{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new h(.675,.843,.902),crackColor:e.crackColor||new h(.2,.2,.2),iceCapColor:e.iceCapColor||new h(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof h?this.params.crystalColor:new h(this.params.crystalColor),t=this.params.crackColor instanceof h?this.params.crackColor:new h(this.params.crackColor),o=this.params.iceCapColor instanceof h?this.params.iceCapColor:new h(this.params.iceCapColor),i=new Array(50).fill(new S),l=new Array(50).fill(new S),n=new Array(12).fill(new O),r=new Array(4).fill(new S);return this.params.crystals&&this.params.crystals.forEach((c,f)=>{f<50&&(i[f]=new S(c.position[0],c.position[1],c.angle),l[f]=new S(c.length,c.width,0))}),this.params.cracks&&this.params.cracks.forEach((c,f)=>{f<12&&(n[f]=new O(c.angle,c.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((c,f)=>{f<4&&(r[f]=new S(c.position[0],c.position[1],c.radius))}),new G({vertexShader:ge.vertexShader,fragmentShader:ge.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new h(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:i},crystalSizes:{value:l},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:n},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:r},iceCapColor:{value:o},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Xt(s){const e={crystals:s.crystals||[],cracks:s.cracks||[],iceCaps:s.ice_caps||[],baseTextureIntensity:.3};return new ge(e)}class ve{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new h(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new h(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new h(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof h?this.params.landmassColor:new h(this.params.landmassColor),t=this.params.foamColor instanceof h?this.params.foamColor:new h(this.params.foamColor),o=this.params.oceanColor instanceof h?this.params.oceanColor:new h(this.params.oceanColor);return new G({vertexShader:ve.vertexShader,fragmentShader:ve.fragmentShader,uniforms:{time:{value:0},baseColor:{value:o},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:o}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const o=e[t];if(o!==void 0&&this.material.uniforms[t])if(o instanceof h||Array.isArray(o)){const i=o instanceof h?o:new h(o);this.material.uniforms[t].value=i}else this.material.uniforms[t].value=o})}getMaterial(){return this.material}dispose(){this.material.dispose()}}function qt(s){const e={waveIntensity:s.wave_intensity||.3,waveSpeed:s.wave_speed||2,oceanColor:s.ocean_color||[.1,.3,.6]};return new ve(e)}class oe{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return oe.instance||(oe.instance=new oe),oe.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,o)=>new fe(e),fromPythonData:(e,t,o)=>new fe({color:e.surface?.base_color||[.4,.4,.45],roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}),this.registerEffect("gas_giant_bands",{create:(e,t,o)=>new he(o,e),fromPythonData:(e,t,o)=>Gt(o,e)}),this.registerEffect("atmospheric_halo",{create:(e,t)=>new me(t,e),fromPythonData:(e,t)=>Yt(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new ue(t,e),fromPythonData:(e,t)=>$t(t,e.atmosphere||{})}),this.registerEffect("dense_atmosphere",{create:(e,t)=>new qe(t,e),fromPythonData:(e,t)=>Zt(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new Pe(t,e),fromPythonData:(e,t)=>Ht(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new Ye(t,e),fromPythonData:(e,t)=>new Ye(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,o)=>new pe(e),fromPythonData:(e,t,o)=>Kt(e.surface||{})}),this.registerEffect("icy_terrain",{create:(e,t,o)=>new ge(e),fromPythonData:(e,t,o)=>Xt(e.surface||{})}),this.registerEffect("ocean_waves",{create:(e,t,o)=>new ve(e),fromPythonData:(e,t,o)=>qt(e.surface||{})}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,o,i,l=0){const n=this.creators.get(e);if(!n)return console.warn(`Effect type '${e}' not registered`),null;try{const r=n.create(t,o,i);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:l,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}':`,r),null}}createEffectFromPythonData(e,t,o,i,l=0){const n=this.creators.get(e);if(!n||!n.fromPythonData)return this.createEffect(e,t,o,i,l);try{const r=n.fromPythonData(t,o,i);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:l,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}' from Python data:`,r),null}}createEffectsFromList(e,t,o){const i=[],l=e.sort((n,r)=>(n.priority||0)-(r.priority||0));for(const n of l){const r=this.createEffect(n.type,n.params,t,o,n.priority);r&&(r.enabled=n.enabled!==!1,i.push(r))}return i}createEffectsFromPythonPlanetData(e,t,o,i){const l=[];if(console.log("🎮 Creating effects from Python data:",e),e.surface_elements){const n=e.surface_elements;if(n.effects_3d&&Array.isArray(n.effects_3d))for(const r of n.effects_3d){const c=this.createEffect(r.type,r.params,t,o,r.priority||0);c&&(l.push(c),c.effect.addToScene&&c.effect.addToScene(i,o.position))}switch(n.type){case"gas_giant":const r=this.createEffectFromPythonData("gas_giant_bands",n,t,o,0);r&&l.push(r);break;case"metallic":case"metallic_3d":const c=this.createEffectFromPythonData("metallic_surface",e,t,o,0);c&&l.push(c);break;case"rocky":const f=this.createEffectFromPythonData("rocky_terrain",e,t,o,0);f&&(l.push(f),f.effect.apply(o));break;case"icy":const w=this.createEffectFromPythonData("icy_terrain",e,t,o,0);w&&(l.push(w),w.effect.apply(o));break;case"oceanic":const _=this.createEffectFromPythonData("ocean_waves",e,t,o,0);_&&(l.push(_),_.effect.apply(o));break}}if(e.atmosphere){if(e.atmosphere.halo){const n=this.createEffectFromPythonData("atmospheric_halo",e,t,o,10);n&&(l.push(n),n.effect.addToScene(i,o.position))}if(e.atmosphere.streaks){const n=this.createEffectFromPythonData("atmospheric_streaks",e,t,o,20);n&&(l.push(n),n.effect.addToScene(i,o.position))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const n=this.createEffectFromPythonData("dense_atmosphere",e.atmosphere,t,o,5);n&&(l.push(n),n.effect.addToScene(i,o.position))}}if(e.rings&&e.rings.has_rings){const n=this.createEffectFromPythonData("ring_system",e,t,o,1);n&&(l.push(n),n.effect.addToScene(i,o.position))}if(e.surface_elements?.has_fragmentation_zones){const n=this.createEffectFromPythonData("fragmentation",e,t,o,5);n&&(l.push(n),n.effect.addToScene(i,o.position))}return console.log(`✅ Created ${l.length} effects for planet`),l}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const o=this.effects.get(e);o&&(o.enabled=t!==void 0?t:!o.enabled)}updateAllEffects(e,t){for(const o of this.effects.values())if(o.enabled&&o.effect.update)try{o.effect.update(e,t)}catch(i){console.error(`Error updating effect ${o.type}:`,i)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const le=oe.getInstance(),Jt=({planetName:s,containerClassName:e="",width:t=800,height:o=600,autoRotate:i=!0,enableControls:l=!0,showDebugInfo:n=!1,planetData:r,cosmicOriginTime:c,initialAngleRotation:f,onDataLoaded:w,onEffectsCreated:_,onError:x})=>{const g=p.useRef(null),T=p.useRef(),C=p.useRef(),M=p.useRef(),y=p.useRef(),A=p.useRef(),H=p.useRef(new xt),V=p.useRef(),[ye,xe]=p.useState(!0),[be,v]=p.useState(null),[k,Y]=p.useState(null),[$,W]=p.useState([]),[B,F]=p.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),L=p.useRef([]),U=p.useRef(0),Z=p.useRef(),J=p.useRef(),Q=p.useCallback(()=>{if(!g.current||!C.current||!M.current)return;const d=g.current,m=d.clientWidth||400,u=d.clientHeight||400;C.current.setSize(m,u),M.current.aspect=m/u,M.current.updateProjectionMatrix(),console.log(`📐 Renderer resized to: ${m}x${u}`)},[]),we=async d=>{if(!y.current)return;const m=d.planet_info.type.toLowerCase(),u=d.seeds,P=d.surface_elements;console.log("🔥 DEBUGGING PROCEDURAL SHADER APPLICATION"),console.log("  🌍 Planet Name:",d.planet_info.name),console.log("  📊 Planet Type:",m),console.log("  🌱 Seeds:",u),console.log("  🏗️ Surface Elements:",P),m==="oceanic"&&(console.log("  🌊 OCEANIC DATA DETAILS:"),console.log("    🟢 Green Patches:",P?.green_patches?.length||0),console.log("    ☁️ Clouds:",P?.clouds?.length||0),P?.green_patches?.[0]&&console.log("    📍 First Patch:",P.green_patches[0])),m==="gas giant"&&(console.log("  🌪️ GAS GIANT DATA DETAILS:"),console.log("    🌀 Cloud Bands:",P?.cloud_bands),console.log("    ⛈️ Storms:",P?.storms?.length||0));const j=`
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vWorldPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,{fragmentShader:N,uniforms:K}=z(d);if(y.current.material){const ee=y.current.material;console.log("🧼 Disposing old material for new planet"),ee instanceof Te&&ee.dispose()}const _e=new G({vertexShader:j,fragmentShader:N,uniforms:K,transparent:!0,side:Nt});y.current.material=_e,console.log("✅ NEW Procedural shader applied for",m,"planet:",d.planet_info.name)},z=d=>{const m=new h(d.planet_info.base_color),u=parseFloat(d.seeds.shape_seed)*.001,P=parseFloat(d.seeds?.shape_seed||"0")*.001%1;console.log("🎨 UNIVERSAL SHADER for",d.planet_info.name),console.log("  seed:",u,"hash:",P,"color:",m),console.log("  🚀 BACKEND DATA:",d.surface_elements);const j=d.surface_elements||{},N=[];if(j.green_patches&&j.green_patches.slice(0,10).forEach((b,D)=>{const re=parseFloat(d.seeds?.shape_seed||"0")+D,ne=Math.abs(Math.sin(re*100))*.3,ot=[b.color[0]*(1+ne*.5),b.color[1]*(1.1+ne*.3),b.color[2]*(.9+ne*.2),.85];N.push({type:"patch",position:b.position,size:b.size*1.1,color:ot})}),j.clouds&&j.clouds.slice(0,5).forEach((b,D)=>{const re=parseFloat(d.seeds?.shape_seed||"0")+D*10,ne=.3+Math.abs(Math.sin(re))*.3;N.push({type:"cloud",position:b.position,size:b.radius*1.3,color:[.96,.96,.98,ne]})}),j.crystals&&j.crystals.slice(0,10).forEach(b=>{N.push({type:"crystal",position:b.position,size:b.width,color:b.color})}),j.cloud_bands){const b=j.cloud_bands;for(let D=0;D<b.num_bands&&D<10;D++)b.widths[D]>0&&N.push({type:"band",position:[0,b.positions[D]],size:b.widths[D],color:[1.2,1.2,1.2,.6]})}j.storms&&j.storms.forEach(b=>{N.push({type:"storm",position:b.position,size:b.radius,color:[.545,0,0,.8]})}),console.log("🌌 RENDERABLE ELEMENTS extracted from backend:",N.length),N.forEach((b,D)=>{console.log(`  ${D}: ${b.type} at [${b.position[0]}, ${b.position[1]}] size=${b.size}`)});const K=20,_e=new Array(K).fill(0),ee=new Array(K*2).fill(0),Le=new Array(K).fill(0),ie=new Array(K*4).fill(0);N.slice(0,K).forEach((b,D)=>{const re={patch:1,cloud:2,crystal:3,band:4,storm:5};_e[D]=re[b.type]||0,ee[D*2]=b.position[0],ee[D*2+1]=b.position[1],Le[D]=b.size,ie[D*4]=b.color[0],ie[D*4+1]=b.color[1],ie[D*4+2]=b.color[2],ie[D*4+3]=b.color[3]||1});const tt={time:{value:0},seed:{value:u},planetHash:{value:P},baseColor:{value:m},planetRadius:{value:1},numElements:{value:Math.min(N.length,K)},elementTypes:{value:_e},elementPositions:{value:ee},elementSizes:{value:Le},elementColors:{value:ie}};return Je(tt)},q=p.useCallback(()=>{if(!g.current)return!1;try{for(;g.current.firstChild;)g.current.removeChild(g.current.firstChild);const d=g.current,m=d.clientWidth||t||400,u=d.clientHeight||o||400,P=new bt;P.background=new h(1297),T.current=P;const j=new wt(45,m/u,.1,1e3);j.position.set(0,0,5),M.current=j;const N=new _t({antialias:!0,alpha:!0,powerPreference:"high-performance"});return N.setSize(m,u),N.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.shadowMap.enabled=!0,N.shadowMap.type=Ct,N.toneMapping=St,N.toneMappingExposure=1.2,N.outputColorSpace=Pt,g.current.appendChild(N.domElement),C.current=N,se(P),Ee(P),l&&Me(j,N.domElement),!0}catch(d){return console.error("Error initializing Three.js:",d),!1}},[]),se=d=>{const m=new We(16777215,2);m.position.set(5,3,5),m.castShadow=!0,m.shadow.mapSize.width=2048,m.shadow.mapSize.height=2048,m.shadow.camera.near=.5,m.shadow.camera.far=50,m.shadow.camera.left=-10,m.shadow.camera.right=10,m.shadow.camera.top=10,m.shadow.camera.bottom=-10,d.add(m);const u=new We(4482815,.4);u.position.set(-5,-3,-5),d.add(u);const P=new Et(2236996,.3);if(d.add(P),n){const j=new Mt(m,1);d.add(j)}},Ee=d=>{const m=new ze(1,128,64),u=new de({color:8421504,metalness:.1,roughness:.8}),P=new Se(m,u);P.castShadow=!0,P.receiveShadow=!0,d.add(P),y.current=P},Me=(d,m)=>{const u=new Tt(d,m);u.enableDamping=!0,u.dampingFactor=.05,u.minDistance=1.5,u.maxDistance=10,u.autoRotate=i,u.autoRotateSpeed=.5,u.enablePan=!0,u.enableZoom=!0,A.current=u},Je=d=>({fragmentShader:`
      uniform float time;
      uniform float seed;
      uniform float planetHash;
      uniform vec3 baseColor;
      uniform int numElements;
      uniform int elementTypes[20];     // 1=patch, 2=cloud, 3=crystal, 4=band, 5=storm
      uniform float elementPositions[40]; // x,y pairs
      uniform float elementSizes[20];
      uniform float elementColors[80];  // r,g,b,a quads
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      // Función para convertir posición 3D a coordenadas de superficie sin distorsión
      vec3 get3DCoords(vec3 pos, vec2 elementPos) {
        // Convertir la posición del elemento de [-1,1] a ángulos esféricos
        float theta = elementPos.x * 3.14159; // Longitud
        float phi = (elementPos.y + 1.0) * 1.5708; // Latitud (0 a PI)
        
        // Crear vector 3D desde los ángulos
        vec3 elementDir = vec3(
          sin(phi) * cos(theta),
          cos(phi),
          sin(phi) * sin(theta)
        );
        
        return elementDir;
      }
      
      // Función de distancia geodésica en la esfera (sin distorsión en polos)
      float sphericalDistance(vec3 pos1, vec3 pos2) {
        // Normalizar las posiciones para trabajar en la superficie de la esfera
        vec3 p1 = normalize(pos1);
        vec3 p2 = normalize(pos2);
        
        // Calcular distancia angular usando dot product
        float angle = acos(clamp(dot(p1, p2), -1.0, 1.0));
        
        // Convertir a distancia en el rango [0,1]
        return angle / 3.14159;
      }
      
      void main() {
        // Color base del planeta
        vec3 color = baseColor;
        
        // Usar posición 3D normalizada directamente (sin UV mapping)
        vec3 normalPos = normalize(vPosition);
        
        // Variación procedural oceánica base suave
        vec3 depthPos = vPosition * 3.0 + vec3(seed);
        float depthNoise = fract(sin(dot(depthPos, vec3(17.123, 89.456, 43.789))) * 12758.5);
        color = mix(color, color * 0.95, depthNoise * 0.08); // Variación muy sutil
        
        // Renderizar TODOS los elementos que envíe el backend
        for(int i = 0; i < 20; i++) {
          if(i >= numElements) break;
          
          int elementType = elementTypes[i];
          vec2 elementPos = vec2(elementPositions[i*2], elementPositions[i*2+1]);
          float elementSize = elementSizes[i];
          vec4 elementColor = vec4(
            elementColors[i*4],
            elementColors[i*4+1], 
            elementColors[i*4+2],
            elementColors[i*4+3]
          );
          
          if(elementType == 0) continue; // Skip empty
          
          if(elementType == 4) { // Band - bandas horizontales
            // Las bandas usan latitud directamente
            float bandLatitude = elementPos.y;
            float currentLatitude = normalPos.y;
            
            float distToBand = abs(currentLatitude - bandLatitude);
            float influence = smoothstep(elementSize, elementSize * 0.3, distToBand);
            
            if(influence > 0.0) {
              // Añadir variación longitudinal suave
              float bandVariation = sin(atan(normalPos.z, normalPos.x) * 3.0 + seed) * 0.1 + 0.9;
              color = mix(color, elementColor.rgb, influence * elementColor.a * bandVariation);
            }
          } else {
            // Elementos puntuales usando distancia esférica 3D
            vec3 elementDir = get3DCoords(normalPos, elementPos);
            float dist = sphericalDistance(normalPos, elementDir);
            
            // Ajustar el tamaño del elemento para compensar la proyección esférica
            float adjustedSize = elementSize * 0.5;
            float influence = smoothstep(adjustedSize, adjustedSize * 0.3, dist);
            
            if(influence > 0.0) {
              // Diferentes formas según tipo
              if(elementType == 1) { // Patch - continentes/islas suaves
                // Usar coordenadas 3D para evitar distorsión y cortes
                vec3 coastPos = normalPos * 15.0 + vec3(planetHash * 1000.0);
                float coastalNoise = fract(sin(dot(coastPos, vec3(12.9898,78.233,37.719))) * 43758.5);
                
                // Bordes suaves pero definidos para continentes
                float landInfluence = smoothstep(0.0, 0.7, influence);
                landInfluence *= coastalNoise * 0.2 + 0.8;
                
                color = mix(color, elementColor.rgb, landInfluence * elementColor.a);
              } else if(elementType == 2) { // Cloud - difuso suavizado
                // Nubes usando coordenadas 3D sin animación
                vec3 cloudPos = normalPos * 8.0 + vec3(planetHash * 500.0);
                float cloudPattern = fract(sin(dot(cloudPos, vec3(12.9898,78.233,37.719))) * 43758.5);
                
                // Nubes más suaves
                float cloudInfluence = smoothstep(0.0, 0.9, influence);
                cloudInfluence *= cloudPattern * 0.15 + 0.85;
                color = mix(color, elementColor.rgb, cloudInfluence * elementColor.a * 0.5);
              } else if(elementType == 3) { // Crystal - angular
                // Usar distancia esférica para los cristales
                float crystalPattern = abs(sin(dist * 30.0 + planetHash * 10.0));
                float crystalInfluence = influence * crystalPattern;
                color = mix(color, elementColor.rgb, crystalInfluence * elementColor.a);
              } else if(elementType == 5) { // Storm - swirl
                // Tormentas sin animación temporal para evitar flickering
                float swirl = sin(dist * 20.0 + planetHash * 5.0) * influence;
                color = mix(color, elementColor.rgb, abs(swirl) * elementColor.a);
              }
            }
          }
        }
        
        // Variación procedural usando posición 3D normalizada (sin distorsión)
        vec3 noisePos = normalPos * 5.0 + vec3(seed + planetHash);
        float noise1 = fract(sin(dot(noisePos, vec3(12.9898, 78.233, 37.719))) * 43758.5);
        float noise2 = fract(sin(dot(noisePos * 1.7, vec3(35.9898, 46.233, 91.123))) * 23758.5);
        float smoothNoise = mix(noise1, noise2, 0.5);
        color = mix(color, color * 1.03, smoothNoise * 0.15); // Variación sutil pero visible
        
        // Iluminación realista
        float lighting = dot(vNormal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
        color *= lighting;
        
        // Fresnel effect sutil para el borde (más realista que un falloff)
        float fresnel = pow(1.0 - abs(dot(vNormal, normalize(vPosition))), 2.0);
        color = mix(color, color * 0.7, fresnel * 0.3); // Oscurecer sutilmente en los bordes
        
        gl_FragColor = vec4(color, 1.0);
      }
    `,uniforms:d}),Ne=p.useCallback(async()=>{try{xe(!0),v(null),console.log("🌐 UNIVERSAL RENDERING: Frontend is agnostic, always use API for:",s),console.log("  🚀 Backend will provide ALL rendering data, frontend just renders it"),console.log("🚀 Fetching procedural data from API for:",s);const d=await fetch(`/api/planet/${encodeURIComponent(s)}/rendering-data`);if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);const m=await d.json();if(!m.success)throw new Error(m.error||"Failed to fetch planet data");const u=m.rendering_data;Y(u),console.log("🔥 API DATA LOADED - FULL DEBUG:"),console.log("  🌍 Planet:",u.planet_info.name,"- Type:",u.planet_info.type),console.log("  🌱 Seeds:",u.seeds),console.log("  🏗️ Surface Elements Full:",JSON.stringify(u.surface_elements,null,2)),u.surface_elements?.green_patches&&(console.log("  🟢 Green Patches Count:",u.surface_elements.green_patches.length),u.surface_elements.green_patches.slice(0,3).forEach((P,j)=>{console.log(`    Patch ${j}:`,P.position,"size:",P.size,"color:",P.color)})),u.surface_elements?.cloud_bands&&console.log("  🌪️ Cloud Bands:",u.surface_elements.cloud_bands),console.log("🎨 Applying procedural shaders using JSON data for:",u.planet_info.type),await we(u),u.surface_elements?.effects_3d&&await Qe(u),w&&w(u)}catch(d){const m=d instanceof Error?d.message:"Unknown error";console.error("Error loading planet data:",m),v(m),x&&x(m),ke()}finally{xe(!1)}},[s,r,c,f]),Qe=async d=>{if(!(!T.current||!y.current))try{if(Ie(),y.current.material instanceof de){const u=new h(d.planet_info.base_color);y.current.material.color=u,y.current.material.needsUpdate=!0}const m=le.createEffectsFromPythonPlanetData(d,1,y.current,T.current);W(m),L.current=m,_&&_(m),et()}catch(m){console.error("Error creating effects:",m),ke()}},ke=()=>{if(!(!T.current||!y.current)){console.log("⚠️ Applying fallback effects");try{const d=le.createEffect("atmospheric_halo",{color:[.5,.5,.8],intensity:.5,falloff:2,scale:1.1},1,y.current);d&&d.effect.addToScene&&(d.effect.addToScene(T.current,y.current.position),L.current=[d],W([d]))}catch(d){console.error("Error applying fallback effects:",d)}}},Ie=()=>{L.current.forEach(d=>{try{d.effect.dispose&&d.effect.dispose()}catch(m){console.error("Error disposing effect:",m)}}),L.current=[],W([])},Fe=p.useCallback(()=>{V.current=requestAnimationFrame(Fe);const d=performance.now(),m=H.current.getDelta();A.current&&A.current.update();try{le.updateAllEffects(m,y.current?.rotation.y)}catch(u){console.error("Error updating effects:",u)}if(y.current&&!l&&(y.current.rotation.y+=m*.1),y.current?.material instanceof G){const u=y.current.material;u.uniforms.time&&(u.uniforms.time.value+=m)}if(C.current&&T.current&&M.current){const u=performance.now();C.current.render(T.current,M.current);const P=performance.now()-u;if(d-U.current>5e3){const j=1e3/(d-U.current);F(N=>({...N,frameRate:Math.round(j),renderTime:Math.round(P*100)/100})),U.current=d}}},[]),et=p.useCallback(()=>{const d=le.getStats();F(m=>({...m,activeEffects:d.activeEffects,enabledEffects:d.enabledEffects}))},[]);return p.useEffect(()=>{let d=!0;return(async()=>{try{if(!d)return;if(!q()){d&&v("Failed to initialize 3D renderer");return}if(!d||(Fe(),g.current&&"ResizeObserver"in window&&(J.current=new ResizeObserver(Q),J.current.observe(g.current)),window.addEventListener("resize",Q),!d))return;await Ne()}catch(u){console.error("Error during ModularPlanetRenderer initialization:",u),d&&v(u instanceof Error?u.message:"Unknown initialization error")}})(),()=>{if(d=!1,V.current&&cancelAnimationFrame(V.current),J.current&&J.current.disconnect(),window.removeEventListener("resize",Q),Ie(),Z.current&&Z.current.dispose(),A.current&&A.current.dispose(),C.current&&g.current)try{g.current.contains(C.current.domElement)&&g.current.removeChild(C.current.domElement),C.current.dispose()}catch(u){console.error("Error during cleanup:",u)}}},[]),p.useEffect(()=>{r&&T.current&&y.current&&(console.log("🔄 PLANET DATA CHANGED - Reloading for:",s),Ne())},[s,r?.planet_type,r?.diameter,r?.elements]),p.useEffect(()=>{console.log("🌍 PLANET NAME CHANGED:",s),T.current&&y.current&&setTimeout(()=>{console.log("🔄 FORCING SHADER RELOAD for new planet:",s),Ne()},100)},[s]),p.useEffect(()=>{const d=setInterval(()=>{const m=le.getStats();F(u=>({...u,activeEffects:m.activeEffects,enabledEffects:m.enabledEffects}))},1e4);return()=>clearInterval(d)},[]),a.jsxs("div",{className:`relative ${e}`,children:[a.jsx("div",{ref:g,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),ye&&a.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:a.jsxs("div",{className:"text-white text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),a.jsx("div",{children:"Loading planet..."})]})}),be&&a.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[a.jsx("strong",{children:"Error:"})," ",be]}),k&&!ye&&a.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[a.jsx("h3",{className:"text-lg font-bold",children:k.planet_info.name}),a.jsx("p",{className:"text-sm opacity-80",children:k.planet_info.type}),a.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[$.length," effects active"]}),k.surface_elements?.description&&a.jsx("p",{className:"text-xs mt-2 opacity-60",children:k.surface_elements.description.appearance})]}),n&&a.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[a.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),a.jsxs("div",{children:["Frame Rate: ",B.frameRate," FPS"]}),a.jsxs("div",{children:["Render Time: ",B.renderTime,"ms"]}),a.jsxs("div",{children:["Active Effects: ",B.activeEffects]}),a.jsxs("div",{children:["Enabled Effects: ",B.enabledEffects]}),a.jsxs("div",{className:"mt-2",children:[a.jsx("div",{className:"font-semibold",children:"Effects:"}),$.map((d,m)=>a.jsxs("div",{className:"ml-2",children:[d.type," (",d.enabled?"ON":"OFF",")"]},d.id))]})]})]})};class Qt extends $e.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?a.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:a.jsxs("div",{className:"text-center p-4",children:[a.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),a.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const eo=s=>a.jsx(Qt,{children:a.jsx(Jt,{...s})}),to=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:o,initialAngleRotation:i})=>{const l=p.useRef(null),n=p.useRef(null),[r,c]=p.useState("Aligning Stargate..."),[f,w]=p.useState(!1),[_,x]=p.useState(!1),[g,T]=p.useState(!1),[C,M]=p.useState(!0),[y,A]=p.useState(!0),[H,V]=p.useState(null),[ye,xe]=p.useState(null);p.useEffect(()=>{const v=document.createElement("style");return v.textContent=`
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
    `,document.head.appendChild(v),()=>{document.head.removeChild(v)}},[]),p.useEffect(()=>{const v=l.current;if(!v)return;const k=v.getContext("2d");if(!k)return;let Y=[];const $=800;let W,B;const F=800;let L,U=.5;function Z(){const z=v?.parentElement;if(!z||!v)return;const q=z.clientWidth,se=z.clientHeight;v.width=Math.min(q,F),v.height=Math.min(se,F),W=v.width/2,B=v.height/2}function J(){Z(),Y=[];for(let z=0;z<$;z++)Y.push({x:Math.random()*(v?.width||800),y:Math.random()*(v?.height||800),z:Math.random()*(v?.width||800),o:Math.random()});Q()}function Q(){!v||!k||(k.clearRect(0,0,v.width,v.height),Y.forEach(z=>{z.z-=U,z.z<=0&&(z.z=v.width,z.x=Math.random()*v.width,z.y=Math.random()*v.height,z.o=Math.random());const q=v.width/z.z,se=(z.x-W)*q+W,Ee=(z.y-B)*q+B,Me=2*q;k.beginPath(),k.fillStyle=`rgba(255, 255, 255, ${z.o})`,k.arc(se,Ee,Me,0,2*Math.PI),k.fill()}),U<60&&(U+=1),L=requestAnimationFrame(Q))}J();const we=()=>Z();return window.addEventListener("resize",we),()=>{window.removeEventListener("resize",we),L&&cancelAnimationFrame(L)}},[]),p.useEffect(()=>{if(e&&!C){console.log("Loading planet image:",e);const v=new Image;v.onload=()=>{console.log("Planet image loaded successfully"),n.current&&(n.current.src=e,x(!0),T(!0))},v.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{x(!0),T(!0)},1500)},v.src=e}else(C||!e)&&setTimeout(()=>{x(!0),T(!0)},1500)},[e,C]),p.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){c("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),w(!0);const k=(F,L)=>Array.from({length:L},()=>F[Math.floor(Math.random()*F.length)]).join(""),Y=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let $=0,W=0;const B=()=>{if($>=Y.length){const L="Stargate system aligned";let U=0;c("");const Z=()=>{U<L.length?(c(L.substring(0,U+1)),U++,setTimeout(Z,30)):w(!1)};Z();return}const F=Y[$];c(k(F.chars,32)),W++,W>=F.iterations&&($++,W=0),setTimeout(B,F.duration)};B()},[]);const be=()=>{M(!C),C||(x(!0),T(!0))};return a.jsxs("div",{className:"h-full flex flex-col",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),y&&a.jsx("div",{className:"flex items-center gap-2",children:a.jsx("button",{onClick:be,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${C?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:C?"2D View":"3D View"})})]}),a.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[a.jsx("canvas",{ref:l,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${g?"opacity-0":"opacity-100"}`,style:{filter:g?"blur(50px)":"none"}}),C&&_&&t&&a.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${_?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:a.jsx(eo,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!0,enableControls:!0,showDebugInfo:!1,planetData:{diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements},cosmicOriginTime:o,initialAngleRotation:i,onDataLoaded:v=>{V(v),console.log("🌍 Planet data loaded:",v)},onError:v=>{xe(v),console.error("❌ Planet rendering error:",v)}})}),!C&&a.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${_?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:_&&e?a.jsx("div",{className:"w-full h-full flex items-center justify-center",children:a.jsx(nt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:a.jsx("img",{ref:n,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):a.jsx("img",{ref:n,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),y&&a.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:C?"🌍 3D":"🖼️ 2D"})]}),a.jsxs("div",{className:"text-center mt-auto",children:[a.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${f?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[a.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[a.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),r]}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),a.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",C&&H&&a.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",H.planet_info?.type," Planet",H.atmosphere&&a.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),H.rings?.has_rings&&a.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),C&&ye&&a.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},oo=({currentPlanet:s,system:e,galaxy:t,systemPlanets:o})=>{const[i,l]=p.useState(null),[n,r]=p.useState(null),[c,f]=p.useState(!1),[w,_]=p.useState(!1),[x,g]=p.useState(!0);p.useEffect(()=>{if(o&&o.length>0){const M=o.findIndex(y=>y.name.toLowerCase()===s.toLowerCase());M!==-1?(M>0?(l(o[M-1].name.toLowerCase()),f(!0)):e.index>0?(l("__prev_system__"),f(!0)):f(!1),M<o.length-1?(r(o[M+1].name.toLowerCase()),_(!0)):(r("__next_system__"),_(!0))):(f(!1),_(!1))}else f(!1),_(!1);g(!1)},[s,e.index,o]);const T=async()=>{const M=t.coordinates.join(",");if(i==="__prev_system__")try{const y=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(y.ok){const A=await y.json();if(A.system&&A.system.planets&&A.system.planets.length>0){const V=A.system.planets[A.system.planets.length-1].name.toLowerCase();ce(M,e.index-1,V,A.system.planets),De(M,e.index-1),window.location.href=`/planet/${V}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else i&&(ce(M,e.index,i,o),window.location.href=`/planet/${i}`)},C=async()=>{const M=t.coordinates.join(",");if(n==="__next_system__")try{const y=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(y.ok){const A=await y.json();if(A.system&&A.system.planets&&A.system.planets.length>0){const V=A.system.planets[0].name.toLowerCase();ce(M,e.index+1,V,A.system.planets),De(M,e.index+1),window.location.href=`/planet/${V}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else n&&(ce(M,e.index,n,o),window.location.href=`/planet/${n}`)};return x?null:a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("button",{onClick:T,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:a.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),a.jsx("button",{onClick:C,disabled:!w,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${w?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:a.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},ao=({planet:s,system:e,galaxy:t,planet_url:o,version:i,image_url:l,cosmic_origin_time:n,initial_angle_rotation:r})=>{const[c]=p.useState(t.coordinates.join(","));p.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),ce(c,e.index,s.name,e.planets||[]),De(c,e.index)},[c,e.index,s.name]);const f=x=>x.replace(/_/g," "),w=x=>x.replace(/_/g," "),_=x=>x.replace(/_/g," ");return a.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[a.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),a.jsxs("div",{className:"relative z-10",children:[a.jsx(it,{}),a.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:a.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",f(s.name),"'"]})}),a.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",w(e.name),"' - Galaxy '",_(t.name),"'"]}),a.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),a.jsx(oo,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),a.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:a.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[a.jsx("div",{className:"order-1 lg:order-1",children:a.jsx(to,{planetUrl:o,imageUrl:l,planet:s,cosmicOriginTime:n,initialAngleRotation:r})}),a.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),a.jsx("div",{className:"order-2 lg:order-2",children:a.jsx(jt,{planet:s,system:e,galaxy:t,cosmicOriginTime:n,initialAngleRotation:r})})]})}),a.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:a.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:a.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",w(e.name),"'"]})})})]}),a.jsx(at,{version:i})]}),a.jsx(lt,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};console.log("Atlas Planet React script loading...");document.addEventListener("DOMContentLoaded",async()=>{console.log("DOM loaded, starting Planet React app...");try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),o=document.getElementById("meta-data");if(!s||!e||!t||!o){console.error("Missing required data elements");return}const i=JSON.parse(s.textContent||"{}"),l=JSON.parse(e.textContent||"{}"),n=JSON.parse(t.textContent||"{}"),r=JSON.parse(o.textContent||"{}"),c={planet:i,system:l,galaxy:n,planet_url:r.planet_url,version:r.version,image_url:r.image_url,cosmic_origin_time:r.cosmic_origin_time,initial_angle_rotation:r.initial_angle_rotation},f=document.getElementById("atlas-react-root");f&&(st.createRoot(f).render($e.createElement(ao,c)),console.log("Planet React app rendered successfully!"))}catch(s){console.error("Error initializing Planet React app:",s)}});
