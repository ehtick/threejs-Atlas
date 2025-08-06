import{r as f,j as s,R as Ue,V as $e,c as Ze}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Xe}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Ke,U as qe,m as se,c as Ne,a as Je}from"./atlas_Ep8Z7FyBoZ31__UNPvjgh.js";import{m as Qe,V as S,n as J,T as K,Q as Re,l as ze,o as D,R as et,p as tt,q as ot,e as je,r as He,s as U,N as at,t as $,C as h,c as Te,d as we,u as Ge,v as Ae,G as st,w as be,F as it,x as Fe,y as rt,S as nt,P as lt,W as ct,z as ht,H as dt,I as mt,D as De,A as ut,J as ft}from"./atlas_1Dg2g0OQvbuCD4lELm_Tj.js";const pt=({planet:a,system:e,galaxy:t,cosmicOriginTime:o,initialAngleRotation:i})=>{const[l,n]=f.useState(!1),r=x=>x.replace(/_/g," "),c=x=>{const p=x/86400;return p<30?`${p.toFixed(2)} days`:p<365?`${(p/30).toFixed(2)} months`:`${(p/365).toFixed(2)} years`},d=x=>{const p=x*9/5+32;return`${x.toFixed(1)}°C (${p.toFixed(1)}°F)`},v=x=>`${x.toExponential(2)} kg`,_=x=>x>=1e3?`${(x/1e3).toFixed(2)} km`:`${x.toFixed(2)} m`;return s.jsxs("div",{className:"h-full flex flex-col relative",children:[s.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),s.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[s.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),s.jsx(Ke,{type:"planet",name:a.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:a.name,className:"text-xs"})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),s.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:a.planet_type})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),s.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:a.atmosphere})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),s.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:a.life_forms})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),s.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),s.jsx("div",{className:"text-xs font-bold text-orange-300",children:v(a.mass)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),s.jsx("div",{className:"text-xs font-bold text-orange-300",children:_(a.diameter)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),s.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[a.density.toFixed(2)," kg/m³"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),s.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[a.gravity.toFixed(2)," m/s²"]})]})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),s.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.orbital_radius.toFixed(2)," AU"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),s.jsx("div",{className:"text-xs font-bold text-cyan-300",children:c(a.orbital_period_seconds)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.orbital_speed.toFixed(2)," m/s"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.axial_tilt.toFixed(2),"°"]})]})]})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),s.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),s.jsx("div",{className:"text-xs font-bold text-red-300",children:d(a.surface_temperature)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),s.jsx("div",{className:"text-xs font-bold text-red-300",children:c(a.rotation_period_seconds)})]})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",a.elements.length,")"]}),a.elements.length>4&&s.jsx("button",{onClick:()=>n(!l),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:l?"▲ Less":"▼ All"})]}),s.jsx("div",{className:"flex flex-wrap gap-1",children:(l?a.elements:a.elements.slice(0,4)).map((x,p)=>s.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:x},p))})]})]}),s.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[s.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Status:"}),s.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Planet:"}),s.jsx("div",{className:"text-white truncate font-medium",children:r(a.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"System:"}),s.jsx("div",{className:"text-white truncate font-medium",children:r(e.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"System ID:"}),s.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),s.jsx("div",{className:"text-white truncate font-medium",children:r(t.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),s.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},Oe={type:"change"},ke={type:"start"},Ye={type:"end"},xe=new et,Le=new tt,gt=Math.cos(70*ot.DEG2RAD),j=new S,I=2*Math.PI,E={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ee=1e-6;class vt extends Qe{constructor(e,t=null){super(e,t),this.state=E.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:J.ROTATE,MIDDLE:J.DOLLY,RIGHT:J.PAN},this.touches={ONE:K.ROTATE,TWO:K.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new Re,this._lastTargetPosition=new S,this._quat=new Re().setFromUnitVectors(e.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ze,this._sphericalDelta=new ze,this._scale=1,this._panOffset=new S,this._rotateStart=new D,this._rotateEnd=new D,this._rotateDelta=new D,this._panStart=new D,this._panEnd=new D,this._panDelta=new D,this._dollyStart=new D,this._dollyEnd=new D,this._dollyDelta=new D,this._dollyDirection=new S,this._mouse=new D,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xt.bind(this),this._onPointerDown=yt.bind(this),this._onPointerUp=bt.bind(this),this._onContextMenu=Mt.bind(this),this._onMouseWheel=Ct.bind(this),this._onKeyDown=St.bind(this),this._onTouchStart=Pt.bind(this),this._onTouchMove=Et.bind(this),this._onMouseDown=_t.bind(this),this._onMouseMove=wt.bind(this),this._interceptControlDown=Nt.bind(this),this._interceptControlUp=jt.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Oe),this.update(),this.state=E.NONE}update(e=null){const t=this.object.position;j.copy(t).sub(this.target),j.applyQuaternion(this._quat),this._spherical.setFromVector3(j),this.autoRotate&&this.state===E.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let o=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(o)&&isFinite(i)&&(o<-Math.PI?o+=I:o>Math.PI&&(o-=I),i<-Math.PI?i+=I:i>Math.PI&&(i-=I),o<=i?this._spherical.theta=Math.max(o,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(o+i)/2?Math.max(o,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=n!=this._spherical.radius}if(j.setFromSpherical(this._spherical),j.applyQuaternion(this._quatInverse),t.copy(this.target).add(j),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){const r=j.length();n=this._clampDistance(r*this._scale);const c=r-n;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),l=!!c}else if(this.object.isOrthographicCamera){const r=new S(this._mouse.x,this._mouse.y,0);r.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=c!==this.object.zoom;const d=new S(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(r),this.object.updateMatrixWorld(),n=j.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(xe.origin.copy(this.object.position),xe.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xe.direction))<gt?this.object.lookAt(this.target):(Le.setFromNormalAndCoplanarPoint(this.object.up,this.target),xe.intersectPlane(Le,this.target))))}else if(this.object.isOrthographicCamera){const n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Ee||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ee||this._lastTargetPosition.distanceToSquared(this.target)>Ee?(this.dispatchEvent(Oe),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?I/60*this.autoRotateSpeed*e:I/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){j.setFromMatrixColumn(t,0),j.multiplyScalar(-e),this._panOffset.add(j)}_panUp(e,t){this.screenSpacePanning===!0?j.setFromMatrixColumn(t,1):(j.setFromMatrixColumn(t,0),j.crossVectors(this.object.up,j)),j.multiplyScalar(e),this._panOffset.add(j)}_pan(e,t){const o=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;j.copy(i).sub(this.target);let l=j.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/o.clientHeight,this.object.matrix),this._panUp(2*t*l/o.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/o.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/o.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const o=this.domElement.getBoundingClientRect(),i=e-o.left,l=t-o.top,n=o.width,r=o.height;this._mouse.x=i/n*2-1,this._mouse.y=-(l/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(I*this._rotateDelta.x/t.clientHeight),this._rotateUp(I*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-I*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(o,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(o,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,l=Math.sqrt(o*o+i*i);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const o=this._getSecondPointerPosition(e),i=.5*(e.pageX+o.x),l=.5*(e.pageY+o.y);this._rotateEnd.set(i,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(I*this._rotateDelta.x/t.clientHeight),this._rotateUp(I*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(o,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,l=Math.sqrt(o*o+i*i);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const n=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(n,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new D,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,o={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(o.deltaY*=10),o}}function yt(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function xt(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function bt(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ye),this.state=E.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _t(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case J.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=E.DOLLY;break;case J.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=E.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=E.ROTATE}break;case J.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=E.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=E.PAN}break;default:this.state=E.NONE}this.state!==E.NONE&&this.dispatchEvent(ke)}function wt(a){switch(this.state){case E.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case E.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case E.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function Ct(a){this.enabled===!1||this.enableZoom===!1||this.state!==E.NONE||(a.preventDefault(),this.dispatchEvent(ke),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Ye))}function St(a){this.enabled!==!1&&this._handleKeyDown(a)}function Pt(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case K.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=E.TOUCH_ROTATE;break;case K.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=E.TOUCH_PAN;break;default:this.state=E.NONE}break;case 2:switch(this.touches.TWO){case K.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=E.TOUCH_DOLLY_PAN;break;case K.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=E.TOUCH_DOLLY_ROTATE;break;default:this.state=E.NONE}break;default:this.state=E.NONE}this.state!==E.NONE&&this.dispatchEvent(ke)}function Et(a){switch(this._trackPointer(a),this.state){case E.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case E.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case E.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case E.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=E.NONE}}function Mt(a){this.enabled!==!1&&a.preventDefault()}function Nt(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jt(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class We{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class Ce{ringSystem;material;geometry;animationId;params;planetRadius;static GRAY_VARIATIONS={dark:{baseGray:.18,variation:.04},medium:{baseGray:.25,variation:.06},light:{baseGray:.32,variation:.06},mixed:{baseGray:.25,variation:.08}};constructor(e,t){this.planetRadius=e,this.params={innerRadius:t.innerRadius||e*1.3,outerRadius:t.outerRadius||e*1.8,tiltFactor:t.tiltFactor||.2,particleCount:t.particleCount||1e3,grayVariation:t.grayVariation||"medium",ringThickness:t.ringThickness||.1,sparkleIntensity:t.sparkleIntensity||.03,brightness:t.brightness||2.2,rotationSync:t.rotationSync!==!1,...t},this.geometry=new je,this.material=this.createRingMaterial(),this.ringSystem=new He(this.geometry,this.material),this.generateRingGeometry()}createRingMaterial(){return new U({uniforms:{brightness:{value:this.params.brightness},time:{value:0}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:at})}generateRingGeometry(){let e;this.params.particleData&&this.params.particleData.length>0?e=this.processParticleData(this.params.particleData):e=this.generateProceduralRings(),this.createGeometryFromParticles(e)}processParticleData(e){const t=[],o=new We(Date.now());for(const i of e){const l=this.planetRadius/(this.params.innerRadius||200),n=i.distance*l,r=i.angle,c=Math.asin(this.params.tiltFactor||.2),d=n*Math.cos(r),v=n*Math.sin(r),_=v*Math.sin(c),x=v*Math.cos(c),p=(this.params.outerRadius-this.params.innerRadius)*(this.params.ringThickness||.4),P=o.uniform(-p*.8,p*.8),b=o.uniform(-p*.3,p*.3);t.push({x:d+b,y:_+P,z:x+o.uniform(-p*.4,p*.4),distance:n,angle:r,size:i.size||1,color:i.color||[.25,.25,.25,1]})}return t}generateProceduralRings(){const e=[],t=new We(12345),o=this.params.particleCount||1e3;for(let i=0;i<o;i++){const l=Math.pow(t.uniform(0,1),.7),n=this.params.innerRadius+(this.params.outerRadius-this.params.innerRadius)*l,r=t.uniform(0,Math.PI*2),c=n*Math.cos(r),d=n*Math.sin(r),v=Math.asin(this.params.tiltFactor||.2),_=d*Math.sin(v),x=d*Math.cos(v),p=(this.params.outerRadius-this.params.innerRadius)*(this.params.ringThickness||.1),P=t.uniform(-p,p),b=Ce.GRAY_VARIATIONS[this.params.grayVariation||"medium"],g=Math.max(.1,Math.min(.6,b.baseGray+t.uniform(-b.variation,b.variation))),w=t.uniform(.8,1.5),A=t.uniform(0,1)<(this.params.sparkleIntensity||.03)?w*t.uniform(1.2,2):w;e.push({x:c,y:_+P,z:x,distance:n,angle:r,size:A,color:[g,g,g,1]})}return e}createGeometryFromParticles(e){const t=new Float32Array(e.length*3),o=new Float32Array(e.length*3),i=new Float32Array(e.length);for(let l=0;l<e.length;l++){const n=e[l];t[l*3]=n.x,t[l*3+1]=n.y,t[l*3+2]=n.z,o[l*3]=n.color[0],o[l*3+1]=n.color[1],o[l*3+2]=n.color[2],i[l]=n.size}this.geometry.setAttribute("position",new $(t,3)),this.geometry.setAttribute("color",new $(o,3)),this.geometry.setAttribute("size",new $(i,1))}addToScene(e,t){t&&this.ringSystem.position.copy(t),this.ringSystem.renderOrder=1,e.add(this.ringSystem)}update(e,t){this.material.uniforms.time.value+=e,this.params.rotationSync&&t!==void 0&&(this.ringSystem.rotation.y=t)}updateParams(e){this.params={...this.params,...e},e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness),(e.innerRadius||e.outerRadius||e.particleCount)&&this.generateRingGeometry()}getObject3D(){return this.ringSystem}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.geometry.dispose(),this.material.dispose()}}function Tt(a,e){const t={innerRadius:a.inner_radius||e*1.3,outerRadius:a.outer_radius||e*1.8,tiltFactor:a.tilt_factor||.2,particleData:[...a.full_ring?.particles||[],...a.ontop_ring?.particles||[]],rotationSync:!0,brightness:2.2};return new Ce(e,t)}class Ve{seed;constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}random(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return this.random()*(t-e)+e}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class ie{material;params;mesh;static vertexShader=`
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
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new h(16753920),bandColor:t.bandColor||new h(16753920),stormColor:t.stormColor||new h(9109504),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,stormIntensity:t.stormIntensity||.7,noiseScale:t.noiseScale||4},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),o=new Ve(12345);for(let i=0;i<e&&i<20;i++)t[i]=o.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),o=new Ve(67890);for(let i=0;i<e&&i<20;i++)t[i]=o.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof h?this.params.baseColor:new h(this.params.baseColor),t=this.params.bandColor instanceof h?this.params.bandColor:new h(this.params.bandColor),o=this.params.stormColor instanceof h?this.params.stormColor:new h(this.params.stormColor);return new U({vertexShader:ie.vertexShader,fragmentShader:ie.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},stormColor:{value:o},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},stormIntensity:{value:this.params.stormIntensity},noiseScale:{value:this.params.noiseScale}}})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){if(this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.baseColor){const t=e.baseColor instanceof h?e.baseColor:new h(e.baseColor);this.material.uniforms.planetColor.value=t}if(e.bandColor){const t=e.bandColor instanceof h?e.bandColor:new h(e.bandColor);this.material.uniforms.bandColor.value=t}if(e.stormColor){const t=e.stormColor instanceof h?e.stormColor:new h(e.stormColor);this.material.uniforms.stormColor.value=t}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function At(a,e){const t=e.cloud_bands||{},o={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new h(e.base_color):new h(16753920),animationSpeed:1,turbulence:e.turbulence||.5,stormIntensity:e.storm_intensity||.7};return new ie(a,o)}class re{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new h(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsationSpeed||2,fresnelPower:t.fresnelPower||2},this.geometry=new Te(e*this.params.scale,64,64),this.material=this.createMaterial(),this.mesh=new we(this.geometry,this.material)}createMaterial(){const e=this.params.color instanceof h?this.params.color:new h(this.params.color);return new U({vertexShader:re.vertexShader,fragmentShader:re.fragmentShader,uniforms:{glowColor:{value:e},glowIntensity:{value:this.params.intensity},glowFalloff:{value:this.params.falloff},fresnelPower:{value:this.params.fresnelPower},time:{value:0},pulsation:{value:this.params.pulsation},pulsationSpeed:{value:this.params.pulsationSpeed}},transparent:!0,blending:Ae,side:Ge,depthWrite:!1})}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof h?e.color:new h(e.color);this.material.uniforms.glowColor.value=t}e.intensity!==void 0&&(this.material.uniforms.glowIntensity.value=e.intensity),e.falloff!==void 0&&(this.material.uniforms.glowFalloff.value=e.falloff),e.pulsation!==void 0&&(this.material.uniforms.pulsation.value=e.pulsation),e.pulsationSpeed!==void 0&&(this.material.uniforms.pulsationSpeed.value=e.pulsationSpeed)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}class ne{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new h(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new je,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new He(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),r=this.params.color instanceof h?this.params.color:new h(this.params.color);for(let c=0;c<this.particleCount;c++){const d=Math.random()*Math.PI*2,v=Math.acos(Math.random()*2-1),_=e*(1+Math.random()*.1);t[c*3]=_*Math.sin(v)*Math.cos(d),t[c*3+1]=_*Math.sin(v)*Math.sin(d),t[c*3+2]=_*Math.cos(v),o[c*3]=r.r*(.8+Math.random()*.4),o[c*3+1]=r.g*(.8+Math.random()*.4),o[c*3+2]=r.b*(.8+Math.random()*.4),i[c]=this.params.size*(Math.random()*.5+.75),l[c]=this.params.speed*(Math.random()*.8+.6),n[c]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new $(t,3)),this.geometry.setAttribute("customColor",new $(o,3)),this.geometry.setAttribute("size",new $(i,1)),this.geometry.setAttribute("speed",new $(l,1)),this.geometry.setAttribute("phase",new $(n,1))}createMaterial(){return new U({vertexShader:ne.vertexShader,fragmentShader:ne.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:Ae,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}class le{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.5,.5,.8,.3],width:t.width||15,opacity:t.opacity||.3,density:t.density||1},console.log("DenseAtmosphereEffect params:",this.params);const o=e*(1+this.params.width/100);this.geometry=new Te(o,32,32);const i=new h(this.params.color[0],this.params.color[1],this.params.color[2]);console.log("THREE.Color created:",i,"from RGB:",[this.params.color[0],this.params.color[1],this.params.color[2]]),this.material=new U({vertexShader:le.vertexShader,fragmentShader:le.fragmentShader,uniforms:{atmosphereColor:{value:i},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Ae,side:Ge,depthWrite:!1}),console.log("Material created with shader and color:",i,"opacity:",this.params.opacity),this.mesh=new we(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){console.log("Updating color to:",e.color);const t=new h(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function kt(a,e){const t=e.halo||{},o={color:t.color?new h().setRGB(t.color[0],t.color[1],t.color[2]):new h(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsation_speed||2};return new re(a,o)}function It(a,e){const t=e.streaks||{},o={color:t.color?new h().setRGB(t.color[0],t.color[1],t.color[2]):new h(16777215),particleCount:t.count||100,speed:t.speed||1,size:2,opacity:.6,turbulence:1};return new ne(a,o)}function Rt(a,e){console.log("Atmosphere data received:",e);let t=[.5,.5,.8,.15],o=15;e&&(e.color&&Array.isArray(e.color)&&(console.log("Color from API (already normalized):",e.color),t=[e.color[0],e.color[1],e.color[2],e.color[3]*.5]),e.width&&(o=e.width),console.log("Processed color:",t),console.log("Width:",o));const i={type:e?.type||"Thin",color:t,width:o,opacity:t[3],density:1};return console.log("Final params:",i),new le(a,i)}class ce{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={color:e.color||new h(7368816),roughness:e.roughness||.7,metalness:e.metalness||.9,fragmentationIntensity:e.fragmentationIntensity||.5,noiseScale:e.noiseScale||8,noiseIntensity:e.noiseIntensity||.3,edgeFragmentation:e.edgeFragmentation||1,circularWaves:e.circularWaves||1,fogPatches:e.fogPatches||1},this.material=this.createMaterial()}createMaterial(){const e=this.params.color instanceof h?this.params.color:new h(this.params.color);return new U({vertexShader:ce.vertexShader,fragmentShader:ce.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},roughness:{value:this.params.roughness},metalness:{value:this.params.metalness},fragmentationIntensity:{value:this.params.fragmentationIntensity},noiseScale:{value:this.params.noiseScale},noiseIntensity:{value:this.params.noiseIntensity},edgeFragmentation:{value:this.params.edgeFragmentation},circularWaves:{value:this.params.circularWaves},fogPatches:{value:this.params.fogPatches}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof h?e.color:new h(e.color);this.material.uniforms.baseColor.value=t}e.roughness!==void 0&&(this.material.uniforms.roughness.value=e.roughness),e.metalness!==void 0&&(this.material.uniforms.metalness.value=e.metalness),e.fragmentationIntensity!==void 0&&(this.material.uniforms.fragmentationIntensity.value=e.fragmentationIntensity),e.noiseScale!==void 0&&(this.material.uniforms.noiseScale.value=e.noiseScale),e.noiseIntensity!==void 0&&(this.material.uniforms.noiseIntensity.value=e.noiseIntensity),e.edgeFragmentation!==void 0&&(this.material.uniforms.edgeFragmentation.value=e.edgeFragmentation),e.circularWaves!==void 0&&(this.material.uniforms.circularWaves.value=e.circularWaves),e.fogPatches!==void 0&&(this.material.uniforms.fogPatches.value=e.fogPatches)}getMaterial(){return this.material}dispose(){this.material.dispose()}}class Be{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new h(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new st,this.generateFragments()}generateFragments(){const e=new be({color:this.params.color instanceof h?this.params.color:new h(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const o=this.generateFragmentGeometry(),i=new we(o,e);this.positionFragment(i,t),i.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const l=this.params.size*(Math.random()*.5+.75);i.scale.set(l,l,l),i.userData={rotationAxis:new S(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(i),this.fragments.add(i)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],o=[],i=[];i.push(new S(0,0,0));for(let r=0;r<e;r++){const c=r/e*Math.PI*2,d=Math.random()*.5+.5,v=(Math.random()-.5)*.3;i.push(new S(Math.cos(c)*d,Math.sin(c)*d,v))}for(let r=1;r<=e;r++){const d=i[r].clone();d.z+=Math.random()*.4+.2,i.push(d)}for(const r of i)t.push(r.x,r.y,r.z);for(let r=1;r<e;r++)o.push(0,r,r+1);o.push(0,e,1);const l=i.length-e-1;for(let r=0;r<e-1;r++)o.push(l,l+r+2,l+r+1);o.push(l,l+1,l+e);for(let r=0;r<e;r++){const c=r+1,d=(r+1)%e+1,v=c+e,_=d+e;o.push(c,v,d),o.push(d,v,_)}const n=new je;return n.setAttribute("position",new it(t,3)),n.setIndex(o),n.computeVertexNormals(),n}positionFragment(e,t){let o;switch(this.params.distribution){case"edge":o=this.generateEdgePosition(t);break;case"surface":o=this.generateSurfacePosition();break;case"random":default:o=this.generateRandomPosition();break}e.position.copy(o)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,o=this.planetRadius*(.95+Math.random()*.1),i=(Math.random()-.5)*this.planetRadius*.5;return new S(Math.cos(t)*o,i,Math.sin(t)*o)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),o=this.planetRadius*(1+Math.random()*.05);return new S(o*Math.sin(t)*Math.cos(e),o*Math.sin(t)*Math.sin(e),o*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;return new S(e*Math.sin(t)*Math.cos(o),e*Math.sin(t)*Math.sin(o),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,o)=>{const i=t.userData;t.rotateOnAxis(i.rotationAxis,i.rotationSpeed*e*this.params.animationSpeed);const l=Math.sin(Date.now()*.001+o)*.001;t.position.y+=l*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof h?e.color:new h(e.color);this.fragmentMeshes.forEach(o=>{o.material instanceof be&&(o.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof be&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Fe&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Fe&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class he{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new h(.8,.8,.8),cloudColor:e.cloudColor||new h(.7,.7,.7),craterColor:e.craterColor||new h(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof h?this.params.mountainColor:new h(this.params.mountainColor),t=this.params.cloudColor instanceof h?this.params.cloudColor:new h(this.params.cloudColor),o=this.params.craterColor instanceof h?this.params.craterColor:new h(this.params.craterColor),i=new Array(30).fill(new S),l=new Array(30).fill(new S),n=new Array(10).fill(new S);return this.params.mountains&&this.params.mountains.forEach((r,c)=>{c<30&&(i[c]=new S(r.position[0],r.position[1],r.angle),l[c]=new S(r.width,r.height,0))}),this.params.clouds&&this.params.clouds.forEach((r,c)=>{c<10&&(n[c]=new S(r.position[0],r.position[1],r.radius))}),new U({vertexShader:he.vertexShader,fragmentShader:he.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new h(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:i},mountainSizes:{value:l},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:n},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new S(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new S},craterColor:{value:o},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function zt(a){const e=a.surface_elements||a.surface||a;let t=[.8,.8,.8];const o=a.planet_info?.base_color||a.base_color;if(o&&typeof o=="string"){const c=o.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255]}else Array.isArray(o)&&(t=o);console.log("⛰️ Creating rocky terrain effect with color from Python:",{base_color:a.planet_info?.base_color,final_color:t});let i=[],l=[],n;if(a.seeds){const c=b=>{let g=b;return()=>(g=(g*1664525+1013904223)%4294967296,g/4294967296)},d=b=>{const g=b()*Math.PI*2,w=Math.acos(b()*2-1),M=Math.sin(w)*Math.cos(g),A=Math.sin(w)*Math.sin(g);return[M,A]},v=c(a.seeds.planet_seed),_=6+Math.floor(v()*4);for(let b=0;b<_;b++)i.push({position:d(v),width:.1+v()*.3,height:.2+v()*.6,angle:v()*Math.PI*2});const x=c(a.seeds.shape_seed+1e3),p=3+Math.floor(x()*4);for(let b=0;b<p;b++)l.push({position:d(x),radius:.08+x()*.17});const P=c(a.seeds.shape_seed+2e3);P()<.7&&(n={position:d(P),radius:.1+P()*.2}),console.log("⛰️ Generated procedural rocky terrain:",{seeds:a.seeds,mountainCount:i.length,cloudCount:l.length,hasCrater:!!n})}const r={mountains:e.mountains?.length>0?e.mountains:i,clouds:e.clouds?.length>0?e.clouds:l,crater:e.crater||n,baseTextureIntensity:.4,mountainColor:new h(t[0]*1.1,t[1]*1.1,t[2]*1.1),cloudColor:new h(t[0]*.9,t[1]*.9,t[2]*.9),craterColor:new h(t[0]*.3,t[1]*.3,t[2]*.3)};return new he(r)}class de{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new h(.675,.843,.902),crackColor:e.crackColor||new h(.2,.2,.2),iceCapColor:e.iceCapColor||new h(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof h?this.params.crystalColor:new h(this.params.crystalColor),t=this.params.crackColor instanceof h?this.params.crackColor:new h(this.params.crackColor),o=this.params.iceCapColor instanceof h?this.params.iceCapColor:new h(this.params.iceCapColor),i=new Array(50).fill(new S),l=new Array(50).fill(new S),n=new Array(12).fill(new D),r=new Array(4).fill(new S);return this.params.crystals&&this.params.crystals.forEach((c,d)=>{d<50&&(i[d]=new S(c.position[0],c.position[1],c.angle),l[d]=new S(c.length,c.width,0))}),this.params.cracks&&this.params.cracks.forEach((c,d)=>{d<12&&(n[d]=new D(c.angle,c.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((c,d)=>{d<4&&(r[d]=new S(c.position[0],c.position[1],c.radius))}),new U({vertexShader:de.vertexShader,fragmentShader:de.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new h(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:i},crystalSizes:{value:l},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:n},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:r},iceCapColor:{value:o},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Ft(a){const e=a.surface_elements||a.surface||a;let t=[.9,.95,1];const o=a.planet_info?.base_color||a.base_color;if(o&&typeof o=="string"){const c=o.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255],t=[Math.min(t[0]+.1,1),Math.min(t[1]+.15,1),Math.min(t[2]+.2,1)]}else Array.isArray(o)&&(t=o);console.log("❄️ Creating icy terrain effect with color from Python:",{base_color:a.planet_info?.base_color,final_color:t});let i=[],l=[],n=[];if(a.seeds){const c=g=>{let w=g;return()=>(w=(w*1664525+1013904223)%4294967296,w/4294967296)},d=g=>{const w=g()*Math.PI*2,M=Math.acos(g()*2-1),A=Math.sin(M)*Math.cos(w),R=Math.sin(M)*Math.sin(w);return[A,R]},v=c(a.seeds.planet_seed),_=4+Math.floor(v()*6);for(let g=0;g<_;g++)i.push({position:d(v),length:.1+v()*.2,width:.05+v()*.1,angle:v()*Math.PI*2});const x=c(a.seeds.shape_seed),p=3+Math.floor(x()*5);for(let g=0;g<p;g++)l.push({angle:x()*Math.PI*2,length:.2+x()*.6});const P=c(a.seeds.shape_seed+500),b=2+Math.floor(P()*3);for(let g=0;g<b;g++)n.push({position:d(P),radius:.15+P()*.25});console.log("❄️ Generated procedural icy terrain:",{seeds:a.seeds,crystalCount:i.length,crackCount:l.length,iceCapCount:n.length})}const r={crystals:e.crystals?.length>0?e.crystals:i,cracks:e.cracks?.length>0?e.cracks:l,iceCaps:e.ice_caps?.length>0?e.ice_caps:n,baseTextureIntensity:.3,crystalColor:new h(t[0]*.8,t[1]*.9,t[2]*1),crackColor:new h(t[0]*.3,t[1]*.3,t[2]*.4),iceCapColor:new h(t[0]*1.1,t[1]*1.1,t[2]*1)};return new de(r)}function _e(a){const e=a.replace("#",""),t=parseInt(e.substr(0,2),16)/255,o=parseInt(e.substr(2,2),16)/255,i=parseInt(e.substr(4,2),16)/255;return new h(t,o,i)}function Me(a){return a.length>=3?new h(a[0],a[1],a[2]):new h(.5,.5,.5)}function Dt(a){if(console.log("🎨 getPlanetBaseColor called with:",a),a.ocean_color){if(typeof a.ocean_color=="string")return console.log("🎨 Using ocean_color (hex):",a.ocean_color),_e(a.ocean_color);if(Array.isArray(a.ocean_color))return console.log("🎨 Using ocean_color (array):",a.ocean_color),Me(a.ocean_color)}if(a.planet_info?.base_color){if(typeof a.planet_info.base_color=="string")return console.log("🎨 Using planet_info.base_color (hex):",a.planet_info.base_color),_e(a.planet_info.base_color);if(Array.isArray(a.planet_info.base_color))return console.log("🎨 Using planet_info.base_color (array):",a.planet_info.base_color),Me(a.planet_info.base_color)}if(a.base_color){if(typeof a.base_color=="string")return console.log("🎨 Using base_color (hex):",a.base_color),_e(a.base_color);if(Array.isArray(a.base_color))return console.log("🎨 Using base_color (array):",a.base_color),Me(a.base_color)}const e=a.planet_info?.type||a.type||"Unknown",t=Ot(e);return console.log("🎨 Using fallback color for type",e,":",t),t}function Ot(a){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[a]||"#FFFFFF";return _e(t)}class me{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new h(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new h(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new h(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof h?this.params.landmassColor:new h(this.params.landmassColor),t=this.params.foamColor instanceof h?this.params.foamColor:new h(this.params.foamColor),o=this.params.oceanColor instanceof h?this.params.oceanColor:new h(this.params.oceanColor);return new U({vertexShader:me.vertexShader,fragmentShader:me.fragmentShader,uniforms:{time:{value:0},baseColor:{value:o},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:o}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const o=e[t];if(o!==void 0&&this.material.uniforms[t])if(o instanceof h||Array.isArray(o)){const i=o instanceof h?o:new h(o);this.material.uniforms[t].value=i}else this.material.uniforms[t].value=o})}getMaterial(){return this.material}dispose(){this.material.dispose()}}function Lt(a){const e=Dt(a),t=[e.r,e.g,e.b];console.log("🌊 OceanWaves using color from PlanetColorBase:",t),console.log("🌊 Creating ocean effect with color from PlanetColorBase:",{base_color:a.planet_info?.base_color||a.base_color,ocean_color:a.ocean_color,final_color:t,seeds:a.seeds,planet_type:a.planet_info?.type||a.type});let o=.3,i=2,l=8,n=.3,r=.2;if(a.seeds){const d=a.seeds.shape_seed,_=(x=>{let p=x;return()=>(p=(p*1664525+1013904223)%4294967296,p/4294967296)})(d);o=.2+_()*.3,i=1.5+_()*1.5,l=6+_()*6,n=.25+_()*.15,r=.15+_()*.1,console.log("🌊 Procedural ocean params:",{seed:d,waveIntensity:o,waveSpeed:i,waveScale:l,landmassThreshold:n,deepOceanThreshold:r})}const c={waveIntensity:o,waveSpeed:i,waveScale:l,landmassThreshold:n,deepOceanThreshold:r,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new h(.9,.9,1),foamIntensity:.4,oceanColor:t};return new me(c)}class q{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return q.instance||(q.instance=new q),q.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,o)=>new ce(e),fromPythonData:(e,t,o)=>{let i=[.4,.4,.45];const l=e.planet_info?.base_color||e.surface?.base_color;if(l&&typeof l=="string"){const n=l.replace("#","");i=[parseInt(n.substr(0,2),16)/255,parseInt(n.substr(2,2),16)/255,parseInt(n.substr(4,2),16)/255]}else Array.isArray(l)&&(i=l);return console.log("⚙️ Creating metallic effect with color from Python:",{base_color:e.planet_info?.base_color,surface_color:e.surface?.base_color,final_color:i}),new ce({color:i,roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}}),this.registerEffect("gas_giant_bands",{create:(e,t,o)=>new ie(o,e),fromPythonData:(e,t,o)=>At(o,e)}),this.registerEffect("atmospheric_halo",{create:(e,t)=>new re(t,e),fromPythonData:(e,t)=>kt(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new ne(t,e),fromPythonData:(e,t)=>It(t,e.atmosphere||{})}),this.registerEffect("dense_atmosphere",{create:(e,t)=>new le(t,e),fromPythonData:(e,t)=>Rt(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new Ce(t,e),fromPythonData:(e,t)=>Tt(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new Be(t,e),fromPythonData:(e,t)=>new Be(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,o)=>new he(e),fromPythonData:(e,t,o)=>zt(e)}),this.registerEffect("icy_terrain",{create:(e,t,o)=>new de(e),fromPythonData:(e,t,o)=>Ft(e)}),this.registerEffect("ocean_waves",{create:(e,t,o)=>new me(e),fromPythonData:(e,t,o)=>Lt(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,o,i,l=0){const n=this.creators.get(e);if(!n)return console.warn(`Effect type '${e}' not registered`),null;try{const r=n.create(t,o,i);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:l,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}':`,r),null}}createEffectFromPythonData(e,t,o,i,l=0){const n=this.creators.get(e);if(!n||!n.fromPythonData)return this.createEffect(e,t,o,i,l);try{const r=n.fromPythonData(t,o,i);if(!r)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:r,priority:l,enabled:!0};return this.effects.set(c.id,c),c}catch(r){return console.error(`Error creating effect '${e}' from Python data:`,r),null}}createEffectsFromList(e,t,o){const i=[],l=e.sort((n,r)=>(n.priority||0)-(r.priority||0));for(const n of l){const r=this.createEffect(n.type,n.params,t,o,n.priority);r&&(r.enabled=n.enabled!==!1,i.push(r))}return i}createEffectsFromPythonPlanetData(e,t,o,i){const l=[];if(console.log("🚀 PYTHON API DATA - COMPLETE DATASET:",JSON.stringify(e,null,2)),e.surface_elements){const n=e.surface_elements;if(n.effects_3d&&Array.isArray(n.effects_3d))for(const r of n.effects_3d){const c=this.createEffect(r.type,r.params,t,o,r.priority||0);c&&(l.push(c),c.effect.addToScene&&c.effect.addToScene(i,o.position))}switch(n.type){case"gas_giant":const r=this.createEffectFromPythonData("gas_giant_bands",n,t,o,0);r&&l.push(r);break;case"metallic":case"metallic_3d":const c=this.createEffectFromPythonData("metallic_surface",{...e,surface:{...e.surface,base_color:e.planet_info?.base_color||e.surface?.base_color}},t,o,0);c&&l.push(c);break;case"rocky":const d=this.createEffectFromPythonData("rocky_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,o,0);d&&(l.push(d),d.effect.apply(o));break;case"icy":const v=this.createEffectFromPythonData("icy_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,o,0);v&&(l.push(v),v.effect.apply(o));break;case"oceanic":const _=this.createEffectFromPythonData("ocean_waves",{...e,base_color:e.planet_info?.base_color,ocean_color:e.planet_info?.base_color},t,o,0);_&&(l.push(_),_.effect.apply(o));break}}if(e.atmosphere){if(e.atmosphere.halo){const n=this.createEffectFromPythonData("atmospheric_halo",e,t,o,10);n&&(l.push(n),n.effect.addToScene(i,o.position))}if(e.atmosphere.streaks){const n=this.createEffectFromPythonData("atmospheric_streaks",e,t,o,20);n&&(l.push(n),n.effect.addToScene(i,o.position))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const n=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),r={...e.atmosphere};n==="oceanic"&&(r.opacity=Math.min(r.opacity||.3,.15),r.width=Math.min(r.width||15,8),console.log("🌊 Applying subtle atmosphere for oceanic planet:",r));const c=this.createEffectFromPythonData("dense_atmosphere",r,t,o,5);c&&(l.push(c),c.effect.addToScene(i,o.position))}}if(e.rings&&e.rings.has_rings){const n=this.createEffectFromPythonData("ring_system",e,t,o,1);n&&(l.push(n),n.effect.addToScene(i,o.position))}if(e.surface_elements?.has_fragmentation_zones){const n=this.createEffectFromPythonData("fragmentation",e,t,o,5);n&&(l.push(n),n.effect.addToScene(i,o.position))}return console.log(`✅ Created ${l.length} effects for planet`),l}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const o=this.effects.get(e);o&&(o.enabled=t!==void 0?t:!o.enabled)}updateAllEffects(e,t){for(const o of this.effects.values())if(o.enabled&&o.effect.update)try{o.effect.update(e,t)}catch(i){console.error(`Error updating effect ${o.type}:`,i)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const oe=q.getInstance(),ae={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmospheric_halo:{intensity:1,falloff:2,scale:1.2,pulsation:!1},gas_giant_bands:{numBands:8,animationSpeed:1,turbulence:.5,stormIntensity:.7}};function Wt(a){const e=[];switch(a.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...ae.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmospheric_halo",params:{...ae.atmospheric_halo,color:[.6,.1,.9],scale:1.15},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"gas_giant_bands",params:ae.gas_giant_bands,priority:0},{type:"atmospheric_halo",params:{...ae.atmospheric_halo,color:[1,.6,.2],intensity:.8},priority:10});break;case"icy":e.push({type:"atmospheric_halo",params:{...ae.atmospheric_halo,color:[.5,.8,1],intensity:.6,scale:1.1},priority:10});break;default:e.push({type:"atmospheric_halo",params:{color:[.5,.5,.8],intensity:.5},priority:10});break}return e}const Y={log:(a,e)=>{console.log(`🎮 [Effects] ${a}`,e||"")},warn:(a,e)=>{console.warn(`⚠️ [Effects] ${a}`,e||"")},error:(a,e)=>{console.error(`❌ [Effects] ${a}`,e||"")},debug:(a,e)=>{}},Vt="1.0.0",Bt="Atlas Planet Effects Library";new Date().toISOString();Y.log(`Initialized ${Bt} v${Vt}`);const Ut=({planetName:a,containerClassName:e="",width:t=800,height:o=600,autoRotate:i=!0,enableControls:l=!0,showDebugInfo:n=!1,planetData:r,cosmicOriginTime:c,initialAngleRotation:d,onDataLoaded:v,onEffectsCreated:_,onError:x})=>{const p=f.useRef(null),P=f.useRef(null),b=f.useRef(null),g=f.useRef(null),w=f.useRef(null),M=f.useRef(null),A=f.useRef(new rt),R=f.useRef(null),[ue,fe]=f.useState(!0),[pe,C]=f.useState(null),[T,H]=f.useState(null),[G,L]=f.useState([]),[W,z]=f.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),k=f.useRef([]),V=f.useRef(0),B=f.useRef(null),Q=f.useCallback(()=>{if(!p.current||!b.current||!g.current)return;const m=p.current,u=m.clientWidth||400,y=m.clientHeight||400;b.current.setSize(u,y),g.current.aspect=u/y,g.current.updateProjectionMatrix(),console.log(`📐 Renderer resized to: ${u}x${y}`)},[]),ge=async m=>{if(!(!w.current||!P.current)){Y.log("Applying modular effects from API data",{planet:m.planet_info.name,type:m.planet_info.type});try{Se();const u=oe.createEffectsFromPythonPlanetData(m,1,w.current,P.current);L(u),k.current=u,_&&_(u),Y.log(`Successfully applied ${u.length} modular effects`),Pe()}catch(u){Y.error("Error applying modular effects",u),ye()}}},ve=f.useCallback(()=>{if(!p.current)return!1;try{for(;p.current.firstChild;)p.current.removeChild(p.current.firstChild);const m=p.current,u=m.clientWidth||t||400,y=m.clientHeight||o||400,F=new nt;F.background=new h(1297),P.current=F;const X=new lt(45,u/y,.1,1e3);X.position.set(0,0,5),g.current=X;const O=new ct({antialias:!0,alpha:!0,powerPreference:"high-performance"});return O.setSize(u,y),O.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.shadowMap.enabled=!0,O.shadowMap.type=ht,O.toneMapping=dt,O.toneMappingExposure=1.2,O.outputColorSpace=mt,p.current.appendChild(O.domElement),b.current=O,N(F),Z(F),l&&ee(X,O.domElement),!0}catch(m){return console.error("Error initializing Three.js:",m),!1}},[]),N=m=>{const u=new De(16777215,2);u.position.set(5,3,5),u.castShadow=!0,u.shadow.mapSize.width=2048,u.shadow.mapSize.height=2048,u.shadow.camera.near=.5,u.shadow.camera.far=50,u.shadow.camera.left=-10,u.shadow.camera.right=10,u.shadow.camera.top=10,u.shadow.camera.bottom=-10,m.add(u);const y=new De(4482815,.4);y.position.set(-5,-3,-5),m.add(y);const F=new ut(2236996,.3);if(m.add(F),n){const X=new ft(u,1);m.add(X)}},Z=m=>{const u=new Te(1,128,64),y=new be({color:8421504,metalness:.1,roughness:.8}),F=new we(u,y);F.castShadow=!0,F.receiveShadow=!0,m.add(F),w.current=F},ee=(m,u)=>{const y=new vt(m,u);y.enableDamping=!0,y.dampingFactor=.05,y.minDistance=1.5,y.maxDistance=10,y.autoRotate=i,y.autoRotateSpeed=.5,y.enablePan=!0,y.enableZoom=!0,M.current=y},te=f.useCallback(async()=>{try{fe(!0),C(null),Y.log("Loading planet data from API",{planetName:a}),console.log("🚀 Fetching procedural data from API for:",a);const m=await fetch(`/api/planet/${encodeURIComponent(a)}/rendering-data`);if(!m.ok)throw new Error(`HTTP error! status: ${m.status}`);const u=await m.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const y=u.rendering_data;H(y),Y.log("API data loaded successfully",{planet:y.planet_info.name,type:y.planet_info.type,hasEffects:!!y.surface_elements}),await ge(y),v&&v(y)}catch(m){const u=m instanceof Error?m.message:"Unknown error";console.error("Error loading planet data:",u),C(u),x&&x(u),ye()}finally{fe(!1)}},[a,r,c,d]),ye=()=>{if(!(!P.current||!w.current)){Y.warn("Applying fallback effects");try{Se();const m=Wt("generic"),u=oe.createEffectsFromList(m,1,w.current);u.forEach(y=>{y.effect.addToScene&&P.current&&w.current&&y.effect.addToScene(P.current,w.current.position)}),k.current=u,L(u),Pe()}catch(m){Y.error("Error applying fallback effects",m)}}},Se=()=>{k.current.forEach(m=>{try{m.effect.dispose&&m.effect.dispose()}catch(u){console.error("Error disposing effect:",u)}}),k.current=[],L([])},Ie=f.useCallback(()=>{R.current=requestAnimationFrame(Ie);const m=performance.now(),u=A.current.getDelta();M.current&&M.current.update();try{oe.updateAllEffects(u,w.current?.rotation.y)}catch(y){console.error("Error updating effects:",y)}if(w.current&&!l&&(w.current.rotation.y+=u*.1),k.current.forEach(y=>{y.effect.updateUniforms&&y.effect.updateUniforms(u)}),b.current&&P.current&&g.current){const y=performance.now();b.current.render(P.current,g.current);const F=performance.now()-y;if(m-V.current>5e3){const X=1e3/(m-V.current);Pe(),z(O=>({...O,frameRate:Math.round(X),renderTime:Math.round(F*100)/100})),V.current=m}}},[]),Pe=f.useCallback(()=>{const m=oe.getStats();z(u=>({...u,activeEffects:m.activeEffects,enabledEffects:m.enabledEffects}))},[]);return f.useEffect(()=>{let m=!0;return(async()=>{try{if(!m)return;if(!ve()){m&&C("Failed to initialize 3D renderer");return}if(!m||(Ie(),p.current&&"ResizeObserver"in window&&(B.current=new ResizeObserver(Q),B.current.observe(p.current)),window.addEventListener("resize",Q),!m))return;await te()}catch(y){console.error("Error during ModularPlanetRenderer initialization:",y),m&&C(y instanceof Error?y.message:"Unknown initialization error")}})(),()=>{if(m=!1,R.current&&cancelAnimationFrame(R.current),B.current&&B.current.disconnect(),window.removeEventListener("resize",Q),Se(),M.current&&M.current.dispose(),b.current&&p.current)try{p.current.contains(b.current.domElement)&&p.current.removeChild(b.current.domElement),b.current.dispose()}catch(y){console.error("Error during cleanup:",y)}}},[]),f.useEffect(()=>{r&&P.current&&w.current&&(console.log("🔄 PLANET DATA CHANGED - Reloading for:",a),te())},[a,r?.planet_type,r?.diameter,r?.elements]),f.useEffect(()=>{console.log("🌍 PLANET NAME CHANGED:",a),P.current&&w.current&&setTimeout(()=>{console.log("🔄 FORCING SHADER RELOAD for new planet:",a),te()},100)},[a]),f.useEffect(()=>{const m=setInterval(()=>{const u=oe.getStats();z(y=>({...y,activeEffects:u.activeEffects,enabledEffects:u.enabledEffects}))},1e4);return()=>clearInterval(m)},[]),s.jsxs("div",{className:`relative ${e}`,children:[s.jsx("div",{ref:p,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),ue&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:s.jsxs("div",{className:"text-white text-center",children:[s.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),s.jsx("div",{children:"Loading planet..."})]})}),pe&&s.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[s.jsx("strong",{children:"Error:"})," ",pe]}),T&&!ue&&s.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[s.jsx("h3",{className:"text-lg font-bold",children:T.planet_info.name}),s.jsx("p",{className:"text-sm opacity-80",children:T.planet_info.type}),s.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[G.length," effects active"]}),T.surface_elements?.description&&s.jsx("p",{className:"text-xs mt-2 opacity-60",children:T.surface_elements.description.appearance})]}),n&&s.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[s.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),s.jsxs("div",{children:["Frame Rate: ",W.frameRate," FPS"]}),s.jsxs("div",{children:["Render Time: ",W.renderTime,"ms"]}),s.jsxs("div",{children:["Active Effects: ",W.activeEffects]}),s.jsxs("div",{children:["Enabled Effects: ",W.enabledEffects]}),s.jsxs("div",{className:"mt-2",children:[s.jsx("div",{className:"font-semibold",children:"Effects:"}),G.map(m=>s.jsxs("div",{className:"ml-2",children:[m.type," (",m.enabled?"ON":"OFF",")"]},m.id))]})]})]})};class Ht extends Ue.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?s.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:s.jsxs("div",{className:"text-center p-4",children:[s.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),s.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const Gt=a=>s.jsx(Ht,{children:s.jsx(Ut,{...a})}),Yt=({planetUrl:a,imageUrl:e,planet:t,cosmicOriginTime:o,initialAngleRotation:i})=>{const l=f.useRef(null),n=f.useRef(null),[r,c]=f.useState("Aligning Stargate..."),[d,v]=f.useState(!1),[_,x]=f.useState(!1),[p,P]=f.useState(!1),[b,g]=f.useState(!0),[w,M]=f.useState(!0),[A,R]=f.useState(null),[ue,fe]=f.useState(null);f.useEffect(()=>{const C=document.createElement("style");return C.textContent=`
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
    `,document.head.appendChild(C),()=>{document.head.removeChild(C)}},[]),f.useEffect(()=>{const C=l.current;if(!C)return;const T=C.getContext("2d");if(!T)return;let H=[];const G=800;let L,W;const z=800;let k,V=.5;function B(){const N=C?.parentElement;if(!N||!C)return;const Z=N.clientWidth,ee=N.clientHeight;C.width=Math.min(Z,z),C.height=Math.min(ee,z),L=C.width/2,W=C.height/2}function Q(){B(),H=[];for(let N=0;N<G;N++)H.push({x:Math.random()*(C?.width||800),y:Math.random()*(C?.height||800),z:Math.random()*(C?.width||800),o:Math.random()});ge()}function ge(){!C||!T||(T.clearRect(0,0,C.width,C.height),H.forEach(N=>{N.z-=V,N.z<=0&&(N.z=C.width,N.x=Math.random()*C.width,N.y=Math.random()*C.height,N.o=Math.random());const Z=C.width/N.z,ee=(N.x-L)*Z+L,te=(N.y-W)*Z+W,ye=2*Z;T.beginPath(),T.fillStyle=`rgba(255, 255, 255, ${N.o})`,T.arc(ee,te,ye,0,2*Math.PI),T.fill()}),V<60&&(V+=1),k=requestAnimationFrame(ge))}Q();const ve=()=>B();return window.addEventListener("resize",ve),()=>{window.removeEventListener("resize",ve),k&&cancelAnimationFrame(k)}},[]),f.useEffect(()=>{if(e&&!b){console.log("Loading planet image:",e);const C=new Image;C.onload=()=>{console.log("Planet image loaded successfully"),n.current&&(n.current.src=e,x(!0),P(!0))},C.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{x(!0),P(!0)},1500)},C.src=e}else(b||!e)&&setTimeout(()=>{x(!0),P(!0)},1500)},[e,b]),f.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){c("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),v(!0);const T=(z,k)=>Array.from({length:k},()=>z[Math.floor(Math.random()*z.length)]).join(""),H=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let G=0,L=0;const W=()=>{if(G>=H.length){const k="Stargate system aligned";let V=0;c("");const B=()=>{V<k.length?(c(k.substring(0,V+1)),V++,setTimeout(B,30)):v(!1)};B();return}const z=H[G];c(T(z.chars,32)),L++,L>=z.iterations&&(G++,L=0),setTimeout(W,z.duration)};W()},[]);const pe=()=>{g(!b),b||(x(!0),P(!0))};return s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),w&&s.jsx("div",{className:"flex items-center gap-2",children:s.jsx("button",{onClick:pe,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${b?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:b?"2D View":"3D View"})})]}),s.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[s.jsx("canvas",{ref:l,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${p?"opacity-0":"opacity-100"}`,style:{filter:p?"blur(50px)":"none"}}),b&&_&&t&&s.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${_?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:s.jsx(Gt,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!0,enableControls:!0,showDebugInfo:!1,planetData:{diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements},cosmicOriginTime:o,initialAngleRotation:i,onDataLoaded:C=>{R(C),console.log("🌍 Planet data loaded:",C)},onError:C=>{fe(C),console.error("❌ Planet rendering error:",C)}})}),!b&&s.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${_?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:_&&e?s.jsx("div",{className:"w-full h-full flex items-center justify-center",children:s.jsx(qe,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:s.jsx("img",{ref:n,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):s.jsx("img",{ref:n,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),w&&s.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:b?"🌍 3D":"🖼️ 2D"})]}),s.jsxs("div",{className:"text-center mt-auto",children:[s.jsxs("a",{href:a,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${d?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[s.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[s.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),r]}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),s.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",b&&A&&s.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",A.planet_info?.type," Planet",A.atmosphere&&s.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),A.rings?.has_rings&&s.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),b&&ue&&s.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},$t=({currentPlanet:a,system:e,galaxy:t,systemPlanets:o})=>{const[i,l]=f.useState(null),[n,r]=f.useState(null),[c,d]=f.useState(!1),[v,_]=f.useState(!1),[x,p]=f.useState(!0);f.useEffect(()=>{if(o&&o.length>0){const g=o.findIndex(w=>w.name.toLowerCase()===a.toLowerCase());g!==-1?(g>0?(l(o[g-1].name.toLowerCase()),d(!0)):e.index>0?(l("__prev_system__"),d(!0)):d(!1),g<o.length-1?(r(o[g+1].name.toLowerCase()),_(!0)):(r("__next_system__"),_(!0))):(d(!1),_(!1))}else d(!1),_(!1);p(!1)},[a,e.index,o]);const P=async()=>{const g=t.coordinates.join(",");if(i==="__prev_system__")try{const w=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(w.ok){const M=await w.json();if(M.system&&M.system.planets&&M.system.planets.length>0){const R=M.system.planets[M.system.planets.length-1].name.toLowerCase();se(g,e.index-1,R,M.system.planets),Ne(g,e.index-1),window.location.href=`/planet/${R}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else i&&(se(g,e.index,i,o),window.location.href=`/planet/${i}`)},b=async()=>{const g=t.coordinates.join(",");if(n==="__next_system__")try{const w=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(w.ok){const M=await w.json();if(M.system&&M.system.planets&&M.system.planets.length>0){const R=M.system.planets[0].name.toLowerCase();se(g,e.index+1,R,M.system.planets),Ne(g,e.index+1),window.location.href=`/planet/${R}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else n&&(se(g,e.index,n,o),window.location.href=`/planet/${n}`)};return x?null:s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:P,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),s.jsx("button",{onClick:b,disabled:!v,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${v?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Zt=({planet:a,system:e,galaxy:t,planet_url:o,version:i,image_url:l,cosmic_origin_time:n,initial_angle_rotation:r})=>{const[c]=f.useState(t.coordinates.join(","));f.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",a.name.toLowerCase()),se(c,e.index,a.name,e.planets||[]),Ne(c,e.index)},[c,e.index,a.name]);const d=x=>x.replace(/_/g," "),v=x=>x.replace(/_/g," "),_=x=>x.replace(/_/g," ");return s.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[s.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),s.jsxs("div",{className:"relative z-10",children:[s.jsx(Xe,{}),s.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:s.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",d(a.name),"'"]})}),s.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",v(e.name),"' - Galaxy '",_(t.name),"'"]}),s.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),s.jsx($t,{currentPlanet:a.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),s.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:s.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[s.jsx("div",{className:"order-1 lg:order-1",children:s.jsx(Yt,{planetUrl:o,imageUrl:l,planet:a,cosmicOriginTime:n,initialAngleRotation:r})}),s.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),s.jsx("div",{className:"order-2 lg:order-2",children:s.jsx(pt,{planet:a,system:e,galaxy:t,cosmicOriginTime:n,initialAngleRotation:r})})]})}),s.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:s.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:s.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",v(e.name),"'"]})})})]}),s.jsx($e,{version:i})]}),s.jsx(Je,{currentLocation:{type:"planet",name:a.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:a.name}})]})};console.log("Atlas Planet React script loading...");document.addEventListener("DOMContentLoaded",async()=>{console.log("DOM loaded, starting Planet React app...");try{const a=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),o=document.getElementById("meta-data");if(!a||!e||!t||!o){console.error("Missing required data elements");return}const i=JSON.parse(a.textContent||"{}"),l=JSON.parse(e.textContent||"{}"),n=JSON.parse(t.textContent||"{}"),r=JSON.parse(o.textContent||"{}"),c={planet:i,system:l,galaxy:n,planet_url:r.planet_url,version:r.version,image_url:r.image_url,cosmic_origin_time:r.cosmic_origin_time,initial_angle_rotation:r.initial_angle_rotation},d=document.getElementById("atlas-react-root");d&&(Ze.createRoot(d).render(Ue.createElement(Zt,c)),console.log("Planet React app rendered successfully!"))}catch(a){console.error("Error initializing Planet React app:",a)}});
