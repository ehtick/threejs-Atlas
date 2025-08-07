import{r as b,j as o,R as mt,V as Ct,c as St}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Pt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Mt,U as Et,m as Pe,c as Xe,a as jt}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as At,V as N,n as ve,T as be,Q as st,l as at,o as $,R as Nt,p as Rt,q as Tt,e as xe,r as te,s as ne,N as It,t as ft,C as f,c as ue,d as ae,u as pt,v as Je,G as gt,w as Le,F as kt,x as nt,L as Ke,g as qe,M as Fe,y as Dt,z as zt,H as Lt,I as Ft,S as Ot,P as Vt,W as Bt,J as Wt,K as Gt,O as Ut,D as rt,A as Yt}from"./atlas_ZgUbUwm-J4U4iRNwqY-vk.js";const Ht=({planet:s,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:n})=>{const[r,l]=b.useState(!1),a=y=>y.replace(/_/g," "),c=y=>{const M=y/86400;return M<30?`${M.toFixed(2)} days`:M<365?`${(M/30).toFixed(2)} months`:`${(M/365).toFixed(2)} years`},d=y=>{const M=y*9/5+32;return`${y.toFixed(1)}°C (${M.toFixed(1)}°F)`},m=y=>`${y.toExponential(2)} kg`,j=y=>y>=1e3?`${(y/1e3).toFixed(2)} km`:`${y.toFixed(2)} m`;return o.jsxs("div",{className:"h-full flex flex-col relative",children:[o.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),o.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),o.jsx(Mt,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),o.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),o.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),o.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:m(s.mass)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),o.jsx("div",{className:"text-xs font-bold text-orange-300",children:j(s.diameter)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),o.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),o.jsx("div",{className:"text-xs font-bold text-cyan-300",children:c(s.orbital_period_seconds)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),o.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[o.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),o.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:d(s.surface_temperature)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[o.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),o.jsx("div",{className:"text-xs font-bold text-red-300",children:c(s.rotation_period_seconds)})]})]})]}),o.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&o.jsx("button",{onClick:()=>l(!r),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:r?"▲ Less":"▼ All"})]}),o.jsx("div",{className:"flex flex-wrap gap-1",children:(r?s.elements:s.elements.slice(0,4)).map((y,M)=>o.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:y},M))})]})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[o.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Status:"}),o.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Planet:"}),o.jsx("div",{className:"text-white truncate font-medium",children:a(s.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System:"}),o.jsx("div",{className:"text-white truncate font-medium",children:a(e.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"System ID:"}),o.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),o.jsx("div",{className:"text-white truncate font-medium",children:a(t.name)})]}),o.jsxs("div",{className:"bg-white/5 rounded p-2",children:[o.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),o.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]})]})},lt={type:"change"},Qe={type:"start"},bt={type:"end"},ze=new Nt,ct=new Rt,$t=Math.cos(70*Tt.DEG2RAD),k=new N,U=2*Math.PI,R={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ze=1e-6;class Zt extends At{constructor(e,t=null){super(e,t),this.state=R.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ve.ROTATE,MIDDLE:ve.DOLLY,RIGHT:ve.PAN},this.touches={ONE:be.ROTATE,TWO:be.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new st,this._lastTargetPosition=new N,this._quat=new st().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new at,this._sphericalDelta=new at,this._scale=1,this._panOffset=new N,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new N,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kt.bind(this),this._onPointerDown=Xt.bind(this),this._onPointerUp=qt.bind(this),this._onContextMenu=si.bind(this),this._onMouseWheel=ei.bind(this),this._onKeyDown=ti.bind(this),this._onTouchStart=ii.bind(this),this._onTouchMove=oi.bind(this),this._onMouseDown=Jt.bind(this),this._onMouseMove=Qt.bind(this),this._interceptControlDown=ai.bind(this),this._interceptControlUp=ni.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lt),this.update(),this.state=R.NONE}update(e=null){const t=this.object.position;k.copy(t).sub(this.target),k.applyQuaternion(this._quat),this._spherical.setFromVector3(k),this.autoRotate&&this.state===R.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=U:i>Math.PI&&(i-=U),n<-Math.PI?n+=U:n>Math.PI&&(n-=U),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=l!=this._spherical.radius}if(k.setFromSpherical(this._spherical),k.applyQuaternion(this._quatInverse),t.copy(this.target).add(k),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const a=k.length();l=this._clampDistance(a*this._scale);const c=a-l;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const d=new N(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(a),this.object.updateMatrixWorld(),l=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(ze.origin.copy(this.object.position),ze.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ze.direction))<$t?this.object.lookAt(this.target):(ct.setFromNormalAndCoplanarPoint(this.object.up,this.target),ze.intersectPlane(ct,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ze||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ze||this._lastTargetPosition.distanceToSquared(this.target)>Ze?(this.dispatchEvent(lt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?U/60*this.autoRotateSpeed*e:U/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){k.setFromMatrixColumn(t,0),k.multiplyScalar(-e),this._panOffset.add(k)}_panUp(e,t){this.screenSpacePanning===!0?k.setFromMatrixColumn(t,1):(k.setFromMatrixColumn(t,0),k.crossVectors(this.object.up,k)),k.multiplyScalar(e),this._panOffset.add(k)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;k.copy(n).sub(this.target);let r=k.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,l=i.width,a=i.height;this._mouse.x=n/l*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(U*this._rotateDelta.x/t.clientHeight),this._rotateUp(U*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-U*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(U*this._rotateDelta.x/t.clientHeight),this._rotateUp(U*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(l,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Xt(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Kt(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function qt(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bt),this.state=R.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Jt(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=R.DOLLY;break;case ve.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=R.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=R.ROTATE}break;case ve.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=R.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=R.PAN}break;default:this.state=R.NONE}this.state!==R.NONE&&this.dispatchEvent(Qe)}function Qt(s){switch(this.state){case R.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case R.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case R.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ei(s){this.enabled===!1||this.enableZoom===!1||this.state!==R.NONE||(s.preventDefault(),this.dispatchEvent(Qe),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(bt))}function ti(s){this.enabled!==!1&&this._handleKeyDown(s)}function ii(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case be.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=R.TOUCH_ROTATE;break;case be.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=R.TOUCH_PAN;break;default:this.state=R.NONE}break;case 2:switch(this.touches.TWO){case be.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=R.TOUCH_DOLLY_PAN;break;case be.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=R.TOUCH_DOLLY_ROTATE;break;default:this.state=R.NONE}break;default:this.state=R.NONE}this.state!==R.NONE&&this.dispatchEvent(Qe)}function oi(s){switch(this._trackPointer(s),this.state){case R.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case R.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case R.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case R.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=R.NONE}}function si(s){this.enabled!==!1&&s.preventDefault()}function ai(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ni(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class dt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class yt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:n,ring_outer_radius:r,tilt_factor:l,planet_radius:a,shape_seed:c}=e;if(!t||!i){console.warn("No ring data provided");return}const d=[...t.particles,...i.particles],m=d.length,j=new dt(c||12345),y=new xe,M=new Float32Array(m*3),w=new Float32Array(m*3),C=new Float32Array(m),v=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],x=j.choice(v);for(let E=0;E<m;E++){const D=d[E],F=this.planetRadius/(a||200),me=(c||12345)+E,L=new dt(me),re=D.distance*F,P=D.angle,_=re*Math.sin(P),Z=Math.asin((l||.2)*.5),J=_*Math.sin(Z),Y=_*Math.cos(Z),z=((r||400)-(n||200))*F*.4,V=L.uniform(-z*.8,z*.8),O=L.uniform(-z*.3,z*.3),H=L.uniform(-.08,.08),X=re+O,le=P+H;M[E*3]=X*Math.cos(le),M[E*3+1]=J+V+this.planetRadius*.15,M[E*3+2]=Y+L.uniform(-z*.4,z*.4),D.color[0]/255;const pe=(D.distance-(n||200))/((r||400)-(n||200)),T=x.baseGray,B=x.variation,ie=L.uniform(-B,B),Q=Math.max(.12,Math.min(.45,T+ie)),I=.8+pe*.4,Oe=L.uniform(.85,1.15),_e=L.uniform(0,1),Ie=_e<.03?L.uniform(1.1,1.3):1,Ve=Q*I*Oe*Ie,we=Math.max(.1,Math.min(.55,Ve));w[E*3]=we,w[E*3+1]=we,w[E*3+2]=we;const Be=.15,We=L.uniform(.3,.7),Ge=_e<.1?L.uniform(1.05,1.2):1;C[E]=D.size*Be*We*Ge}y.setAttribute("position",new te(M,3)),y.setAttribute("color",new te(w,3)),y.setAttribute("size",new te(C,1)),this.material=new ne({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:It}),this.ringSystem=new ft(y,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,n=t.cosmicOriginTime||Date.now()/1e3,r=t.initialAngleRotation||0,a=Date.now()/1e3-n,c=2*Math.PI/i,d=(r+a*c)%(2*Math.PI);this.ringSystem.rotation.y=d}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function ri(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new yt(e,t)}class ht{seed;constructor(e){this.seed=e%2147483647,this.seed<=0&&(this.seed+=2147483646)}random(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return this.random()*(t-e)+e}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}}class Me{material;params;mesh;static vertexShader=`
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
  `;constructor(e,t={}){this.params={numBands:t.numBands||8,bandPositions:t.bandPositions||this.generateDefaultBandPositions(t.numBands||8),bandWidths:t.bandWidths||this.generateDefaultBandWidths(t.numBands||8),rotationAngle:t.rotationAngle||0,baseColor:t.baseColor||new f(16753920),bandColor:t.bandColor||new f(16753920),stormColor:t.stormColor||new f(9109504),animationSpeed:t.animationSpeed||1,turbulence:t.turbulence||.5,stormIntensity:t.stormIntensity||.7,noiseScale:t.noiseScale||4},this.mesh=e,this.material=this.createMaterial(),this.mesh.material=this.material}generateDefaultBandPositions(e){const t=new Array(20).fill(0),i=new ht(12345);for(let n=0;n<e&&n<20;n++)t[n]=i.uniform(-.8,.8);return t}generateDefaultBandWidths(e){const t=new Array(20).fill(0),i=new ht(67890);for(let n=0;n<e&&n<20;n++)t[n]=i.uniform(.08,.15);return t}createMaterial(){const e=this.params.baseColor instanceof f?this.params.baseColor:new f(this.params.baseColor),t=this.params.bandColor instanceof f?this.params.bandColor:new f(this.params.bandColor),i=this.params.stormColor instanceof f?this.params.stormColor:new f(this.params.stormColor);return new ne({vertexShader:Me.vertexShader,fragmentShader:Me.fragmentShader,uniforms:{time:{value:0},seed:{value:Math.random()*1e3},planetColor:{value:e},bandColor:{value:t},stormColor:{value:i},numBands:{value:this.params.numBands},rotationAngle:{value:this.params.rotationAngle},bandPositions:{value:this.params.bandPositions},bandWidths:{value:this.params.bandWidths},animationSpeed:{value:this.params.animationSpeed},turbulence:{value:this.params.turbulence},stormIntensity:{value:this.params.stormIntensity},noiseScale:{value:this.params.noiseScale}}})}update(e,t){this.material.uniforms.time.value+=e,t!==void 0&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){if(this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.baseColor){const t=e.baseColor instanceof f?e.baseColor:new f(e.baseColor);this.material.uniforms.planetColor.value=t}if(e.bandColor){const t=e.bandColor instanceof f?e.bandColor:new f(e.bandColor);this.material.uniforms.bandColor.value=t}if(e.stormColor){const t=e.stormColor instanceof f?e.stormColor:new f(e.stormColor);this.material.uniforms.stormColor.value=t}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function li(s,e){const t=e.cloud_bands||{},i={numBands:t.num_bands||8,bandPositions:t.positions||void 0,bandWidths:t.widths||void 0,rotationAngle:t.rotation||0,baseColor:e.base_color?new f(e.base_color):new f(16753920),animationSpeed:1,turbulence:e.turbulence||.5,stormIntensity:e.storm_intensity||.7};return new Me(s,i)}class Ee{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new f(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsationSpeed||2,fresnelPower:t.fresnelPower||2},this.geometry=new ue(e*this.params.scale,64,64),this.material=this.createMaterial(),this.mesh=new ae(this.geometry,this.material)}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new ne({vertexShader:Ee.vertexShader,fragmentShader:Ee.fragmentShader,uniforms:{glowColor:{value:e},glowIntensity:{value:this.params.intensity},glowFalloff:{value:this.params.falloff},fresnelPower:{value:this.params.fresnelPower},time:{value:0},pulsation:{value:this.params.pulsation},pulsationSpeed:{value:this.params.pulsationSpeed}},transparent:!0,blending:Je,side:pt,depthWrite:!1})}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.glowColor.value=t}e.intensity!==void 0&&(this.material.uniforms.glowIntensity.value=e.intensity),e.falloff!==void 0&&(this.material.uniforms.glowFalloff.value=e.falloff),e.pulsation!==void 0&&(this.material.uniforms.pulsation.value=e.pulsation),e.pulsationSpeed!==void 0&&(this.material.uniforms.pulsationSpeed.value=e.pulsationSpeed)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}class je{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){this.params={color:t.color||new f(16777215),particleCount:t.particleCount||100,speed:t.speed||1,size:t.size||2,opacity:t.opacity||.6,turbulence:t.turbulence||1},this.particleCount=this.params.particleCount,this.geometry=new xe,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new ft(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),n=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),a=this.params.color instanceof f?this.params.color:new f(this.params.color);for(let c=0;c<this.particleCount;c++){const d=Math.random()*Math.PI*2,m=Math.acos(Math.random()*2-1),j=e*(1+Math.random()*.1);t[c*3]=j*Math.sin(m)*Math.cos(d),t[c*3+1]=j*Math.sin(m)*Math.sin(d),t[c*3+2]=j*Math.cos(m),i[c*3]=a.r*(.8+Math.random()*.4),i[c*3+1]=a.g*(.8+Math.random()*.4),i[c*3+2]=a.b*(.8+Math.random()*.4),n[c]=this.params.size*(Math.random()*.5+.75),r[c]=this.params.speed*(Math.random()*.8+.6),l[c]=Math.random()*Math.PI*2}this.geometry.setAttribute("position",new te(t,3)),this.geometry.setAttribute("customColor",new te(i,3)),this.geometry.setAttribute("size",new te(n,1)),this.geometry.setAttribute("speed",new te(r,1)),this.geometry.setAttribute("phase",new te(l,1))}createMaterial(){return new ne({vertexShader:je.vertexShader,fragmentShader:je.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence}},transparent:!0,blending:Je,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*.1}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ae{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.5,.5,.8,.3],width:t.width||15,opacity:t.opacity||.3,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new ue(i,32,32);const n=new f(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ne({vertexShader:Ae.vertexShader,fragmentShader:Ae.fragmentShader,uniforms:{atmosphereColor:{value:n},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Je,side:pt,depthWrite:!1}),this.mesh=new ae(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new f(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function ci(s,e){const t=e.halo||{},i={color:t.color?new f().setRGB(t.color[0],t.color[1],t.color[2]):new f(4482815),intensity:t.intensity||1,falloff:t.falloff||.8,scale:t.scale||1.2,pulsation:t.pulsation||!1,pulsationSpeed:t.pulsation_speed||2};return new Ee(s,i)}function di(s,e){const t=e.streaks||{},i={color:t.color?new f().setRGB(t.color[0],t.color[1],t.color[2]):new f(16777215),particleCount:t.count||100,speed:t.speed||1,size:2,opacity:.6,turbulence:1};return new je(s,i)}function hi(s,e){let t=[.5,.5,.8,.15],i=15;e&&(e.color&&Array.isArray(e.color)&&(t=[e.color[0],e.color[1],e.color[2],e.color[3]*.5]),e.width&&(i=e.width));const n={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new Ae(s,n)}class Ne{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={color:e.color||new f(7368816),roughness:e.roughness||.7,metalness:e.metalness||.9,fragmentationIntensity:e.fragmentationIntensity||.5,noiseScale:e.noiseScale||8,noiseIntensity:e.noiseIntensity||.3,edgeFragmentation:e.edgeFragmentation||1,circularWaves:e.circularWaves||1,fogPatches:e.fogPatches||1},this.material=this.createMaterial()}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new ne({vertexShader:Ne.vertexShader,fragmentShader:Ne.fragmentShader,uniforms:{time:{value:0},baseColor:{value:e},roughness:{value:this.params.roughness},metalness:{value:this.params.metalness},fragmentationIntensity:{value:this.params.fragmentationIntensity},noiseScale:{value:this.params.noiseScale},noiseIntensity:{value:this.params.noiseIntensity},edgeFragmentation:{value:this.params.edgeFragmentation},circularWaves:{value:this.params.circularWaves},fogPatches:{value:this.params.fogPatches}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.baseColor.value=t}e.roughness!==void 0&&(this.material.uniforms.roughness.value=e.roughness),e.metalness!==void 0&&(this.material.uniforms.metalness.value=e.metalness),e.fragmentationIntensity!==void 0&&(this.material.uniforms.fragmentationIntensity.value=e.fragmentationIntensity),e.noiseScale!==void 0&&(this.material.uniforms.noiseScale.value=e.noiseScale),e.noiseIntensity!==void 0&&(this.material.uniforms.noiseIntensity.value=e.noiseIntensity),e.edgeFragmentation!==void 0&&(this.material.uniforms.edgeFragmentation.value=e.edgeFragmentation),e.circularWaves!==void 0&&(this.material.uniforms.circularWaves.value=e.circularWaves),e.fogPatches!==void 0&&(this.material.uniforms.fogPatches.value=e.fogPatches)}getMaterial(){return this.material}dispose(){this.material.dispose()}}class ut{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new f(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new gt,this.generateFragments()}generateFragments(){const e=new Le({color:this.params.color instanceof f?this.params.color:new f(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),n=new ae(i,e);this.positionFragment(n,t),n.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const r=this.params.size*(Math.random()*.5+.75);n.scale.set(r,r,r),n.userData={rotationAxis:new N(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(n),this.fragments.add(n)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],n=[];n.push(new N(0,0,0));for(let a=0;a<e;a++){const c=a/e*Math.PI*2,d=Math.random()*.5+.5,m=(Math.random()-.5)*.3;n.push(new N(Math.cos(c)*d,Math.sin(c)*d,m))}for(let a=1;a<=e;a++){const d=n[a].clone();d.z+=Math.random()*.4+.2,n.push(d)}for(const a of n)t.push(a.x,a.y,a.z);for(let a=1;a<e;a++)i.push(0,a,a+1);i.push(0,e,1);const r=n.length-e-1;for(let a=0;a<e-1;a++)i.push(r,r+a+2,r+a+1);i.push(r,r+1,r+e);for(let a=0;a<e;a++){const c=a+1,d=(a+1)%e+1,m=c+e,j=d+e;i.push(c,m,d),i.push(d,m,j)}const l=new xe;return l.setAttribute("position",new kt(t,3)),l.setIndex(i),l.computeVertexNormals(),l}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),n=(Math.random()-.5)*this.planetRadius*.5;return new N(Math.cos(t)*i,n,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new N(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new N(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const n=t.userData;t.rotateOnAxis(n.rotationAxis,n.rotationSpeed*e*this.params.animationSpeed);const r=Math.sin(Date.now()*.001+i)*.001;t.position.y+=r*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof Le&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof Le&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof nt&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof nt&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}class Re{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={mountains:e.mountains||[],clouds:e.clouds||[],crater:e.crater,mountainColor:e.mountainColor||new f(.8,.8,.8),cloudColor:e.cloudColor||new f(.7,.7,.7),craterColor:e.craterColor||new f(.1,.1,.1),baseTextureIntensity:e.baseTextureIntensity||.4,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.mountainColor instanceof f?this.params.mountainColor:new f(this.params.mountainColor),t=this.params.cloudColor instanceof f?this.params.cloudColor:new f(this.params.cloudColor),i=this.params.craterColor instanceof f?this.params.craterColor:new f(this.params.craterColor),n=new Array(30).fill(new N),r=new Array(30).fill(new N),l=new Array(10).fill(new N);return this.params.mountains&&this.params.mountains.forEach((a,c)=>{c<30&&(n[c]=new N(a.position[0],a.position[1],a.angle),r[c]=new N(a.width,a.height,0))}),this.params.clouds&&this.params.clouds.forEach((a,c)=>{c<10&&(l[c]=new N(a.position[0],a.position[1],a.radius))}),new ne({vertexShader:Re.vertexShader,fragmentShader:Re.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.5,.4,.3)},mountainCount:{value:this.params.mountains?.length||0},mountainPositions:{value:n},mountainSizes:{value:r},mountainColor:{value:e},cloudCount:{value:this.params.clouds?.length||0},cloudPositions:{value:l},cloudColor:{value:t},hasCrater:{value:!!this.params.crater},craterPosition:{value:this.params.crater?new N(this.params.crater.position[0],this.params.crater.position[1],this.params.crater.radius):new N},craterColor:{value:i},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.mountains||e.clouds||e.crater){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function ui(s){const e=s.surface_elements||s.surface||s;let t=[.8,.8,.8];const i=s.planet_info?.base_color||s.base_color;if(i&&typeof i=="string"){const c=i.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255]}else Array.isArray(i)&&(t=i);let n=[],r=[],l;if(s.seeds){const c=C=>{let v=C;return()=>(v=(v*1664525+1013904223)%4294967296,v/4294967296)},d=C=>{const v=C()*Math.PI*2,x=Math.acos(C()*2-1),E=Math.sin(x)*Math.cos(v),D=Math.sin(x)*Math.sin(v);return[E,D]},m=c(s.seeds.planet_seed),j=6+Math.floor(m()*4);for(let C=0;C<j;C++)n.push({position:d(m),width:.1+m()*.3,height:.2+m()*.6,angle:m()*Math.PI*2});const y=c(s.seeds.shape_seed+1e3),M=3+Math.floor(y()*4);for(let C=0;C<M;C++)r.push({position:d(y),radius:.08+y()*.17});const w=c(s.seeds.shape_seed+2e3);w()<.7&&(l={position:d(w),radius:.1+w()*.2})}const a={mountains:e.mountains?.length>0?e.mountains:n,clouds:e.clouds?.length>0?e.clouds:r,crater:e.crater||l,baseTextureIntensity:.4,mountainColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1.1),cloudColor:new f(t[0]*.9,t[1]*.9,t[2]*.9),craterColor:new f(t[0]*.3,t[1]*.3,t[2]*.3)};return new Re(a)}class Te{material;params;static vertexShader=`
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
  `;constructor(e={}){this.params={crystals:e.crystals||[],cracks:e.cracks||[],iceCaps:e.iceCaps||[],crystalColor:e.crystalColor||new f(.675,.843,.902),crackColor:e.crackColor||new f(.2,.2,.2),iceCapColor:e.iceCapColor||new f(.678,.847,1),baseTextureIntensity:e.baseTextureIntensity||.3,...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.crystalColor instanceof f?this.params.crystalColor:new f(this.params.crystalColor),t=this.params.crackColor instanceof f?this.params.crackColor:new f(this.params.crackColor),i=this.params.iceCapColor instanceof f?this.params.iceCapColor:new f(this.params.iceCapColor),n=new Array(50).fill(new N),r=new Array(50).fill(new N),l=new Array(12).fill(new $),a=new Array(4).fill(new N);return this.params.crystals&&this.params.crystals.forEach((c,d)=>{d<50&&(n[d]=new N(c.position[0],c.position[1],c.angle),r[d]=new N(c.length,c.width,0))}),this.params.cracks&&this.params.cracks.forEach((c,d)=>{d<12&&(l[d]=new $(c.angle,c.length))}),this.params.iceCaps&&this.params.iceCaps.forEach((c,d)=>{d<4&&(a[d]=new N(c.position[0],c.position[1],c.radius))}),new ne({vertexShader:Te.vertexShader,fragmentShader:Te.fragmentShader,uniforms:{time:{value:0},baseColor:{value:new f(.6,.8,1)},crystalCount:{value:this.params.crystals?.length||0},crystalPositions:{value:n},crystalSizes:{value:r},crystalColor:{value:e},crackCount:{value:this.params.cracks?.length||0},crackAngles:{value:l},crackColor:{value:t},iceCapCount:{value:this.params.iceCaps?.length||0},iceCapPositions:{value:a},iceCapColor:{value:i},baseTextureIntensity:{value:this.params.baseTextureIntensity}}})}apply(e){e.material=this.material}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.crystals||e.cracks||e.iceCaps){const t=this.material;this.material=this.createMaterial(),t.dispose()}}getMaterial(){return this.material}dispose(){this.material.dispose()}}function mi(s){const e=s.surface_elements||s.surface||s;let t=[.9,.95,1];const i=s.planet_info?.base_color||s.base_color;if(i&&typeof i=="string"){const c=i.replace("#","");t=[parseInt(c.substr(0,2),16)/255,parseInt(c.substr(2,2),16)/255,parseInt(c.substr(4,2),16)/255],t=[Math.min(t[0]+.1,1),Math.min(t[1]+.15,1),Math.min(t[2]+.2,1)]}else Array.isArray(i)&&(t=i);let n=[],r=[],l=[];if(s.seeds){const c=v=>{let x=v;return()=>(x=(x*1664525+1013904223)%4294967296,x/4294967296)},d=v=>{const x=v()*Math.PI*2,E=Math.acos(v()*2-1),D=Math.sin(E)*Math.cos(x),F=Math.sin(E)*Math.sin(x);return[D,F]},m=c(s.seeds.planet_seed),j=4+Math.floor(m()*6);for(let v=0;v<j;v++)n.push({position:d(m),length:.1+m()*.2,width:.05+m()*.1,angle:m()*Math.PI*2});const y=c(s.seeds.shape_seed),M=3+Math.floor(y()*5);for(let v=0;v<M;v++)r.push({angle:y()*Math.PI*2,length:.2+y()*.6});const w=c(s.seeds.shape_seed+500),C=2+Math.floor(w()*3);for(let v=0;v<C;v++)l.push({position:d(w),radius:.15+w()*.25})}const a={crystals:e.crystals?.length>0?e.crystals:n,cracks:e.cracks?.length>0?e.cracks:r,iceCaps:e.ice_caps?.length>0?e.ice_caps:l,baseTextureIntensity:.3,crystalColor:new f(t[0]*.8,t[1]*.9,t[2]*1),crackColor:new f(t[0]*.3,t[1]*.3,t[2]*.4),iceCapColor:new f(t[0]*1.1,t[1]*1.1,t[2]*1)};return new Te(a)}class vt{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new gt,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,n=t*Math.cos(i),r=t*Math.sin(i),l=r*.8,a=new xe,c=new Float32Array([0,0,0,n,l,r]);a.setAttribute("position",new te(c,3));const d=new Ke({color:16776960,linewidth:5,transparent:!1});this.sunLine=new qe(a,d),this.debugGroup.add(this.sunLine);const m=e+Math.PI,j=t*.7,y=j*Math.cos(m),M=0,w=j*Math.sin(m),C=new ue(this.planetRadius*.15,16,16),v=new Fe({color:16776960,transparent:!1,opacity:1}),x=new ae(C,v);x.position.set(y,M,w),this.debugGroup.add(x),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new xe,n=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new te(n,3));const r=new Ke({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new qe(i,r),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,n=this.params.initialAngleRotation||0,r=e-t,l=2*Math.PI/i;return(n+r*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,n=this.sunLine.geometry,r=n.attributes.position.array;r[3]=i*Math.cos(t),r[4]=0,r[5]=i*Math.sin(t),n.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,n=i.attributes.position.array;n[0]=-t*Math.cos(e),n[1]=0,n[2]=-t*Math.sin(e),n[3]=t*Math.cos(e),n[4]=0,n[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function fi(s,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:s.debug?.cosmic_origin_time||s.timing?.cosmic_origin_time||s.cosmicOriginTime,rotationPeriod:s.planet_info?.rotation_period||s.rotation_period_seconds||86400,initialAngleRotation:s.debug?.initial_angle_rotation||s.timing?.initial_angle_rotation||s.initialAngleRotation||0,planetRadius:e,orbitalAngle:s.timing?.orbital_angle||0,sunAngle:s.sun_angle||s.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new vt(e,t)}class ye{static instance;creators=new Map;effects=new Map;nextId=1;constructor(){this.registerDefaultEffects()}static getInstance(){return ye.instance||(ye.instance=new ye),ye.instance}registerDefaultEffects(){this.registerEffect("metallic_surface",{create:(e,t,i)=>new Ne(e),fromPythonData:(e,t,i)=>{let n=[.4,.4,.45];const r=e.planet_info?.base_color||e.surface?.base_color;if(r&&typeof r=="string"){const l=r.replace("#","");n=[parseInt(l.substr(0,2),16)/255,parseInt(l.substr(2,2),16)/255,parseInt(l.substr(4,2),16)/255]}else Array.isArray(r)&&(n=r);return new Ne({color:n,roughness:e.surface?.roughness||.7,metalness:e.surface?.metalness||.9,fragmentationIntensity:e.surface?.fragmentation||.5})}}),this.registerEffect("gas_giant_bands",{create:(e,t,i)=>new Me(i,e),fromPythonData:(e,t,i)=>li(i,e)}),this.registerEffect("atmospheric_halo",{create:(e,t)=>new Ee(t,e),fromPythonData:(e,t)=>ci(t,e.atmosphere||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new je(t,e),fromPythonData:(e,t)=>di(t,e.atmosphere||{})}),this.registerEffect("dense_atmosphere",{create:(e,t)=>new Ae(t,e),fromPythonData:(e,t)=>hi(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new yt(t,e),fromPythonData:(e,t)=>ri(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new ut(t,e),fromPythonData:(e,t)=>new ut(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("rocky_terrain",{create:(e,t,i)=>new Re(e),fromPythonData:(e,t,i)=>ui(e)}),this.registerEffect("icy_terrain",{create:(e,t,i)=>new Te(e),fromPythonData:(e,t,i)=>mi(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new vt(t,e),fromPythonData:(e,t)=>fi(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,n,r=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const a=l.create(t,i,n);if(!a)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:a,priority:r,enabled:!0};return this.effects.set(c.id,c),c}catch(a){return console.error(`Error creating effect '${e}':`,a),null}}createEffectFromPythonData(e,t,i,n,r=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,i,n,r);try{const a=l.fromPythonData(t,i,n);if(!a)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:a,priority:r,enabled:!0};return this.effects.set(c.id,c),c}catch(a){return console.error(`Error creating effect '${e}' from Python data:`,a),null}}createEffectsFromList(e,t,i){const n=[],r=e.sort((l,a)=>(l.priority||0)-(a.priority||0));for(const l of r){const a=this.createEffect(l.type,l.params,t,i,l.priority);a&&(a.enabled=l.enabled!==!1,n.push(a))}return n}createEffectsFromPythonPlanetData(e,t,i,n){const r=[];if(e.surface_elements){const l=e.surface_elements;if(l.effects_3d&&Array.isArray(l.effects_3d))for(const a of l.effects_3d){const c=this.createEffect(a.type,a.params,t,i,a.priority||0);c&&(r.push(c),c.effect.addToScene&&c.effect.addToScene(n,i.position))}switch(l.type==="rendering_commands"&&l.commands&&this.executeRenderingCommands(l.commands,n,i,t),l.type){case"gas_giant":const a=this.createEffectFromPythonData("gas_giant_bands",l,t,i,0);a&&r.push(a);break;case"metallic":case"metallic_3d":const c=this.createEffectFromPythonData("metallic_surface",{...e,surface:{...e.surface,base_color:e.planet_info?.base_color||e.surface?.base_color}},t,i,0);c&&r.push(c);break;case"rocky":const d=this.createEffectFromPythonData("rocky_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,i,0);d&&(r.push(d),d.effect.apply(i));break;case"icy":const m=this.createEffectFromPythonData("icy_terrain",{...e,base_color:e.planet_info?.base_color,surface:{...e.surface,base_color:e.planet_info?.base_color}},t,i,0);m&&(r.push(m),m.effect.apply(i));break}}if(e.atmosphere){if(e.atmosphere.halo){const l=this.createEffectFromPythonData("atmospheric_halo",e,t,i,10);l&&(r.push(l),l.effect.addToScene(n,i.position))}if(e.atmosphere.streaks){const l=this.createEffectFromPythonData("atmospheric_streaks",e,t,i,20);l&&(r.push(l),l.effect.addToScene(n,i.position))}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const l=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),a={...e.atmosphere};l==="oceanic"&&(a.opacity=Math.min(a.opacity||.3,.15),a.width=Math.min(a.width||15,8));const c=this.createEffectFromPythonData("dense_atmosphere",a,t,i,5);c&&(r.push(c),c.effect.addToScene(n,i.position))}}if(e.rings&&e.rings.has_rings){const l=this.createEffectFromPythonData("ring_system",e,t,i,1);l&&(r.push(l),l.effect.addToScene(n,i.position))}if(e.surface_elements?.has_fragmentation_zones){const l=this.createEffectFromPythonData("fragmentation",e,t,i,5);l&&(r.push(l),l.effect.addToScene(n,i.position))}{const l=this.createEffectFromPythonData("visual_debug_3d",e,t,i,100);l?(r.push(l),l.effect.addToScene(n,i.position)):console.error("❌ Failed to create debug effect!")}return r}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);i&&(i.enabled=t!==void 0?t:!i.enabled)}updateAllEffects(e,t){for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(n){console.error(`Error updating effect ${i.type}:`,n)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}executeRenderingCommands(e,t,i,n){e.forEach((r,l)=>{try{switch(r.command){case"apply_material":this.executeApplyMaterial(r,i);break;case"create_surface_element":this.executeCreateSurfaceElement(r,t,n);break;default:console.warn(`❓ Unknown command: ${r.command}`)}}catch(a){console.error(`❌ Error executing command ${l}:`,a)}})}executeApplyMaterial(e,t){const i=e.properties;if(e.material_type==="phong"){const n=new Dt({color:new f(i.color),shininess:i.shininess||50,specular:new f(i.specular||"#222222"),transparent:i.transparent||!1,opacity:i.opacity||1});t.material=n}}executeCreateSurfaceElement(e,t,i){let n;switch(e.geometry.type){case"circle":n=new Lt(e.size*i*.1,e.geometry.segments||16);break;case"sphere":n=new ue(e.radius*i*.1,12,12);break;case"irregular_polygon":n=new zt(0,.05*i,8);break;default:console.warn(`❓ Unknown geometry type: ${e.geometry.type}`);return}const r=e.color,l=new Fe({color:new f(r[0],r[1],r[2]),opacity:r[3]||1,transparent:(r[3]||1)<1}),a=new ae(n,l);if(e.position){const c=this.normalizedToSphere(e.position,i*(1+(e.geometry.elevation||0)));a.position.copy(c),a.lookAt(new N(0,0,0))}t.add(a)}normalizedToSphere(e,t){const[i,n]=e,r=Math.acos(1-2*((n+1)/2)),l=2*Math.PI*((i+1)/2),a=t*Math.sin(r)*Math.cos(l),c=t*Math.cos(r),d=t*Math.sin(r)*Math.sin(l);return new N(a,c,d)}clearAllEffects(){for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear()}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const Ce=ye.getInstance(),Se={metallic_surface:{roughness:.7,metalness:.9,fragmentationIntensity:.5,noiseScale:8,noiseIntensity:.3},atmospheric_halo:{intensity:1,falloff:2,scale:1.2,pulsation:!1},gas_giant_bands:{numBands:8,animationSpeed:1,turbulence:.5,stormIntensity:.7}};function pi(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"metallic_surface",params:{...Se.metallic_surface,color:[.4,.4,.45]},priority:0},{type:"atmospheric_halo",params:{...Se.atmospheric_halo,color:[.6,.1,.9],scale:1.15},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"gas_giant_bands",params:Se.gas_giant_bands,priority:0},{type:"atmospheric_halo",params:{...Se.atmospheric_halo,color:[1,.6,.2],intensity:.8},priority:10});break;case"icy":e.push({type:"atmospheric_halo",params:{...Se.atmospheric_halo,color:[.5,.8,1],intensity:.6,scale:1.1},priority:10});break;default:e.push({type:"atmospheric_halo",params:{color:[.5,.5,.8],intensity:.5},priority:10});break}return e}const se={log:(s,e)=>{},warn:(s,e)=>{console.warn(`⚠️ [Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`❌ [Effects] ${s}`,e||"")},debug:(s,e)=>{}};new Date().toISOString();const gi=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[i,n]=b.useState([]),[r,l]=b.useState({});b.useEffect(()=>{if(!s)return;const d=a(s);l(d),n(c(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=d)},[s,e]);function a(d){const m={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(d.planet_info&&d.surface_elements?m.hasValidStructure=!0:(d.planet_info||m.missingFields.push("planet_info"),d.surface_elements||m.missingFields.push("surface_elements")),d.surface_elements?.type==="oceanic"&&(m.oceanicData={hasAbstractLands:!!d.surface_elements.abstract_lands?.length,numGreenPatches:d.surface_elements.green_patches?.length||0,numClouds:d.surface_elements.clouds?.length||0,hasDepths:d.surface_elements.depths?.enabled||!1,baseColorIsBlue:d.planet_info?.base_color==="#0000FF",greenPatchColor:d.surface_elements.green_patches?.[0]?.color,issues:[]},m.oceanicData.numGreenPatches>15&&m.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),m.oceanicData.baseColorIsBlue||m.oceanicData.issues.push(`Color base no es azul puro: ${d.planet_info?.base_color}`),m.renderingIssues=m.oceanicData.issues),d.planet_info?.base_color&&d.planet_info?.type){const y={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[d.planet_info.type];y&&d.planet_info.base_color!==y?m.colorConsistency=`Inconsistente: esperado ${y}, recibido ${d.planet_info.base_color}`:m.colorConsistency="Correcto"}return m}function c(d){const m=[];if(!d.surface_elements?.type)return["No surface type defined"];const j=d.surface_elements.type.toLowerCase();switch(j){case"oceanic":m.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":m.push("RockyTerrainEffect");break;case"icy":m.push("IcyTerrainEffect");break;case"gas giant":m.push("GasGiantBandsEffect");break;default:m.push(`Generic effect for type: ${j}`)}return d.atmosphere?.density>0&&m.push("AtmosphericEffect"),d.rings&&m.push("RingSystemEffect"),m}return t?o.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[o.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),o.jsxs("div",{style:{marginBottom:"10px"},children:[o.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,o.jsx("br",{}),o.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,o.jsx("br",{}),o.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&o.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[o.jsx("strong",{children:"🌊 Oceanic Data:"}),o.jsx("br",{}),o.jsxs("span",{style:{color:r.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",r.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),o.jsx("br",{}),"Green Patches: ",r.oceanicData?.numGreenPatches,o.jsx("br",{}),"Clouds: ",r.oceanicData?.numClouds,o.jsx("br",{}),"Has Depths: ",r.oceanicData?.hasDepths?"Yes":"No",o.jsx("br",{}),r.oceanicData?.issues?.length>0&&o.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",o.jsx("br",{}),r.oceanicData.issues.map((d,m)=>o.jsxs("div",{children:["- ",d]},m))]})]}),o.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[o.jsx("strong",{children:"🎨 Effects Applied:"}),o.jsx("br",{}),i.map((d,m)=>o.jsxs("div",{style:{color:d.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",d]},m))]}),o.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function bi(s){b.useEffect(()=>{if(s&&s.surface_elements?.type==="oceanic"){s.surface_elements.green_patches?.length>0;const e=s.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[s])}const yi=({planetName:s,containerClassName:e="",width:t=800,height:i=600,autoRotate:n=!0,enableControls:r=!0,showDebugInfo:l=!1,planetData:a,cosmicOriginTime:c,initialAngleRotation:d,onDataLoaded:m,onEffectsCreated:j,onError:y})=>{const M=b.useRef(null),w=b.useRef(null),C=b.useRef(null),v=b.useRef(null),x=b.useRef(null),E=b.useRef(null),D=b.useRef(new Ft),F=b.useRef(null),[me,L]=b.useState(!0),[re,P]=b.useState(null),[_,Z]=b.useState(null),[J,Y]=b.useState([]),[z,V]=b.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),O=b.useRef([]),H=b.useRef(0),X=b.useRef(null),le=b.useCallback(()=>{if(!M.current||!C.current||!v.current)return;const h=M.current,p=h.clientWidth||400,u=h.clientHeight||400;C.current.setSize(p,u),v.current.aspect=p/u,v.current.updateProjectionMatrix()},[]),fe=async h=>{if(!(!x.current||!w.current)){se.log("Applying modular effects from API data",{planet:h.planet_info.name,type:h.planet_info.type});try{Ue();const p=Ce.createEffectsFromPythonPlanetData(h,1,x.current,w.current);Y(p),O.current=p,j&&j(p),se.log(`Successfully applied ${p.length} modular effects`),Ye()}catch(p){se.error("Error applying modular effects",p),ke()}}},pe=b.useCallback(()=>{if(console.log("🔧 initializeThreeJS called with renderingData:",{hasRenderingData:!!_,initial_orbital_angle:_?.timing?.initial_orbital_angle}),!M.current)return!1;try{for(;M.current.firstChild;)M.current.removeChild(M.current.firstChild);console.log("🔧 Clearing references..."),w.current=null,v.current=null,C.current=null,x.current=null,I.current=null,window.orbitalCalculationLogged=!1,console.log("🔧 References cleared");const h=M.current,p=h.clientWidth||t||400,u=h.clientHeight||i||400;console.log("🔧 Creating scene...");const S=new Ot;S.background=new f(1297),w.current=S,console.log("🔧 Scene created");const A=new Vt(45,p/u,.1,1e4);A.position.set(0,80,120),A.lookAt(0,0,0),v.current=A;const g=new Bt({antialias:!0,alpha:!0,powerPreference:"high-performance"});return g.setSize(p,u),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.shadowMap.enabled=!0,g.shadowMap.type=Wt,g.toneMapping=Gt,g.toneMappingExposure=1.2,g.outputColorSpace=Ut,M.current.appendChild(g.domElement),C.current=g,we(S,null),console.log("🔧 Creating base planet..."),Be(S),console.log("🔧 Base planet created. planetMeshRef.current:",!!x.current),r&&We(A,g.domElement),!0}catch(h){return console.error("Error initializing Three.js:",h),!1}},[_,a,c]),T=h=>{if(!h)return console.error("❌ calculateSunAngle: NO planetData provided!"),0;const p=h.sun_angle||h.lighting?.sun_angle;if(p!==void 0)return p;const u=h.timing?.orbital_angle;return u??(console.error("❌ CRITICAL: orbital_angle missing for planet:",h.planet_info?.name),console.error("   Full timing data:",h.timing),0)},B=b.useRef(null),ie=b.useRef(null),Q=b.useRef(null),I=b.useRef(null),Oe=h=>{h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=.5,h.shadow.camera.far=50,h.shadow.camera.left=-10,h.shadow.camera.right=10,h.shadow.camera.top=10,h.shadow.camera.bottom=-10},_e=h=>{if(!B.current||!w.current){console.error("❌ Cannot update lighting: missing light references");return}const p=T(h),u=10,S=p+Math.PI,A=Math.sin(p)*5,g=u*Math.cos(S),G=A,K=u*Math.sin(S);B.current.position.set(g,G,K),B.current.target.position.set(0,0,0),w.current.children.includes(B.current.target)||w.current.add(B.current.target),ie.current&&ie.current.position.set(-g*.5,0,-K*.5)},Ie=(h,p)=>{if(!a?.orbital_radius){console.warn("⚠️ No orbital_radius data for orbit line");return}const u=p?.timing?.max_orbital_radius;if(!u){console.warn("⚠️ No max_orbital_radius from backend, skipping orbit line");return}const g=20+a.orbital_radius/u*80;window.debugOrbitRadius=g,window.debugSystemMaxRadius=u,console.log(`✅ Orbit line created at radius: ${g.toFixed(2)} (max_system: ${u})`);const G=64,K=[];for(let ee=0;ee<=G;ee++){const W=ee/G*Math.PI*2;K.push(new N(g*Math.cos(W),0,g*Math.sin(W)))}const De=new xe().setFromPoints(K),ce=new Ke({color:7372944,transparent:!0,opacity:.4,linewidth:1}),de=new qe(De,ce);h.add(de),I.current=de},Ve=h=>{const u=new ue(3,32,32),S=new Fe({color:16777028,transparent:!1,opacity:1}),A=new ae(u,S);A.position.set(0,0,0);const g=new ue(3*1.8,16,16),G=new Fe({color:16777028,transparent:!0,opacity:.3}),K=new ae(g,G);A.add(K),h.add(A),Q.current=A},we=(h,p)=>{Ve(h);{const u=new rt(16777215,2);u.position.set(10,0,0),u.castShadow=!0,Oe(u),h.add(u),B.current=u;const S=new rt(4482815,.05);S.position.set(-5,0,0),h.add(S),ie.current=S;const A=new Yt(2236996,.1);h.add(A);return}},Be=h=>{const p=a?.diameter?a.diameter/15e3:1,u=Math.max(Math.min(p,4),1.5),S=new ue(u,128,64),A=new Le({color:8421504,metalness:.1,roughness:.8,transparent:!1,opacity:1}),g=new ae(S,A);g.castShadow=!0,g.receiveShadow=!0,g.position.set(50,0,0),h.add(g),x.current=g},We=(h,p)=>{const u=new Zt(h,p);u.enableDamping=!0,u.dampingFactor=.05,u.minDistance=20,u.maxDistance=500,u.autoRotate=n,u.autoRotateSpeed=.1,u.enablePan=!0,u.enableZoom=!0,u.target.set(0,0,0),E.current=u},Ge=b.useCallback(async()=>{if(console.log("🚀 loadPlanetDataOnly called with planetName:",s),window.isLoadingPlanetData){console.log("⚠️ Already loading planet data, skipping...");return}window.isLoadingPlanetData=!0;try{L(!0),P(null),se.log("Loading planet data from API",{planetName:s});const h="/api/planet/rendering-data";console.log("🔗 Fetching API URL:",h),console.log("⏳ Starting fetch...");const p=await fetch(h);if(console.log("📡 Fetch completed, status:",p.status),!p.ok)throw new Error(`HTTP error! status: ${p.status}`);console.log("📄 Parsing JSON...");const u=await p.json();if(console.log("✅ JSON parsed, success:",u.success),!u.success)throw new Error(u.error||"Failed to fetch planet data");const S=u.planet_data,A=u.timing,g={planet_info:{name:S.name,type:S.planet_type,base_color:"#808080",radius:S.diameter/15e3},timing:{cosmic_origin_time:A.cosmic_origin_time,current_time_seconds:A.current_time_seconds,elapsed_time:A.elapsed_time,initial_orbital_angle:S.initial_orbital_angle,current_orbital_angle:S.current_orbital_angle,max_orbital_radius:A.max_orbital_radius,system_max_orbital_radius:S.system_max_orbital_radius},original_planet_data:S};return Z(g),console.log("💾 setRenderingData called with:",{planet_info:g.planet_info,timing:g.timing,hasTimingData:!!g.timing,initial_orbital_angle:g.timing?.initial_orbital_angle}),se.log("API data loaded successfully",{planet:g.planet_info.name,type:g.planet_info.type,hasEffects:!!g.surface_elements}),m&&m(g),g}catch(h){const p=h instanceof Error?h.message:"Unknown error";return console.error("❌ Error loading planet data:",p),console.error("❌ Full error object:",h),P(p),y&&y(p),null}finally{L(!1),window.isLoadingPlanetData=!1}},[s,m,y]);b.useCallback(async()=>{if(console.log("🚀 loadPlanetData called with planetName:",s),window.isLoadingPlanetData){console.log("⚠️ Already loading planet data, skipping...");return}window.isLoadingPlanetData=!0;try{L(!0),P(null),se.log("Loading planet data from API",{planetName:s});const h="/api/planet/rendering-data";console.log("🔗 Fetching API URL:",h),console.log("⏳ Starting fetch...");const p=await fetch(h);if(console.log("📡 Fetch completed, status:",p.status),!p.ok)throw new Error(`HTTP error! status: ${p.status}`);console.log("📄 Parsing JSON...");const u=await p.json();if(console.log("✅ JSON parsed, success:",u.success),!u.success)throw new Error(u.error||"Failed to fetch planet data");const S=u.planet_data,A=u.timing,g={planet_info:{name:S.name,type:S.planet_type,base_color:"#808080",radius:S.diameter/15e3},timing:{cosmic_origin_time:A.cosmic_origin_time,current_time_seconds:A.current_time_seconds,elapsed_time:A.elapsed_time,initial_orbital_angle:S.initial_orbital_angle,current_orbital_angle:S.current_orbital_angle,max_orbital_radius:A.max_orbital_radius,system_max_orbital_radius:S.system_max_orbital_radius},original_planet_data:S};Z(g),console.log("💾 setRenderingData called with:",{planet_info:g.planet_info,timing:g.timing,hasTimingData:!!g.timing,initial_orbital_angle:g.timing?.initial_orbital_angle}),se.log("API data loaded successfully",{planet:g.planet_info.name,type:g.planet_info.type,hasEffects:!!g.surface_elements}),_e(g),I.current&&w.current&&(w.current.remove(I.current),I.current.geometry.dispose(),I.current.material.dispose(),I.current=null),Ie(w.current,g),await fe(g),m&&m(g)}catch(h){const p=h instanceof Error?h.message:"Unknown error";console.error("❌ Error loading planet data:",p),console.error("❌ Full error object:",h),P(p),y&&y(p),ke()}finally{L(!1),window.isLoadingPlanetData=!1}},[s,a,c,d]);const et=b.useCallback(()=>{if(!_||!x.current){console.log("⚠️ Cannot update planet position: missing renderingData or planetMesh");return}const h=a?.orbital_period_seconds||365.25*24*3600,p=2*Math.PI/h,u=_.timing?.initial_orbital_angle||0,S=Date.now()/1e3,A=0,g=c||_.timing?.cosmic_origin_time||Date.now()/1e3-3600,G=S-g+A,K=(u+G*p)%(2*Math.PI),De=_.timing?.max_orbital_radius||100,de=20+_.planet_info?.orbital_radius/De*80,ee=de,W=de*Math.cos(K),he=ee*Math.sin(K);if(x.current.position.x=W,x.current.position.z=he,x.current.position.y=0,v.current){const oe={x:0,y:80,z:120};v.current.position.set(W+oe.x,oe.y,he+oe.z),v.current.lookAt(W,0,he),console.log("📷 Camera updated to follow planet:",{planetPos:{x:W.toFixed(2),z:he.toFixed(2)},cameraPos:{x:(W+oe.x).toFixed(2),z:(he+oe.z).toFixed(2)}})}console.log("✅ Planet position updated with API data:",{name:_.planet_info?.name,initial_orbital_angle:u,angleOrbit:K,position:{x:W.toFixed(2),z:he.toFixed(2)},source:"API renderingData"})},[_,a,c]),xt=b.useCallback(async h=>{console.log("🎨 applyAPIDataToScene called");const p=h||_;if(!p){console.log("⚠️ No rendering data available, skipping scene application");return}if(!w.current){console.log("⚠️ No scene available, skipping scene application");return}try{console.log("🔧 Applying API data to scene:",{planet:p.planet_info.name,initial_orbital_angle:p.timing?.initial_orbital_angle,max_orbital_radius:p.timing?.max_orbital_radius}),_e(p),I.current&&w.current&&(w.current.remove(I.current),I.current.geometry.dispose(),I.current.material.dispose(),I.current=null),Ie(w.current,p),await fe(p)}catch(u){console.error("❌ Error applying API data to scene:",u),ke()}},[_]),ke=()=>{if(!(!w.current||!x.current)){se.warn("Applying fallback effects");try{Ue();const h=pi("generic"),p=Ce.createEffectsFromList(h,1,x.current);p.forEach(u=>{u.effect.addToScene&&w.current&&x.current&&u.effect.addToScene(w.current,x.current.position)}),O.current=p,Y(p),Ye()}catch(h){se.error("Error applying fallback effects",h)}}},Ue=()=>{O.current.forEach(h=>{try{h.effect.dispose&&h.effect.dispose()}catch(p){console.error("Error disposing effect:",p)}}),O.current=[],Y([])},tt=b.useCallback(()=>{F.current=requestAnimationFrame(tt);const h=performance.now(),p=D.current.getDelta();E.current&&E.current.update();try{Ce.updateAllEffects(p,x.current?.rotation.y)}catch(u){console.error("Error updating effects:",u)}if(window.orbitalCalculationLogged||(console.log("🔧 About to calculate orbital position. planetMeshRef.current:",!!x.current,"planetData:",!!a,"renderingData:",!!_),window.orbitalCalculationLogged=!0),x.current&&(a||_)){let u,S,A,g;const G=_;if(G){const q=G.original_planet_data;G.planet_info,u=q?.orbital_period_seconds||a?.orbital_period_seconds||365.25*24*3600,S=q?.initial_orbital_angle||a?.initial_orbital_angle||0,A=c||G.timing?.cosmic_origin_time||Date.now()/1e3-3600,g=q?.axial_tilt||a?.axial_tilt||0,He.toLowerCase().includes("tonnir")&&!window.planetApiDataLogged&&(console.log("🌍 PLANET - API Data vs DOM Data:",{name:q?.name||"unknown",source:"NEW_API_ENDPOINT",api_initial_orbital_angle:q?.initial_orbital_angle,dom_initial_orbital_angle:a?.initial_orbital_angle,finalInitialOrbitalAngle:S,api_orbital_radius:q?.orbital_radius,dom_orbital_radius:a?.orbital_radius,finalOrbitalRadius:oe,api_cosmic_origin_time:G.timing?.cosmic_origin_time,dom_cosmic_origin_time:c,system_max_orbital_radius:W}),window.planetApiDataLogged=!0)}else if(a)u=a.orbital_period_seconds||365.25*24*3600,S=a.initial_orbital_angle||0,A=c||Date.now()/1e3-3600,g=a.axial_tilt||0;else return;const ce=Math.floor(Date.now()/1e3)-A+0,de=2*Math.PI/u,ee=(S+ce*de)%(2*Math.PI),W=_?.timing?.system_max_orbital_radius||_?.timing?.max_orbital_radius||window.debugSystemMaxRadius||window.systemMaxOrbitalRadius;if(!W)return;const oe=_?.original_planet_data?.orbital_radius||a?.orbital_radius||1e9,ge=20+oe/W*80;if(window.debugOrbitRadius&&!window.orbitChecked){const q=Math.abs(window.debugOrbitRadius-ge);q>.01?(console.error(`❌ CRITICAL: Planet not on orbit line! Difference: ${q.toFixed(2)}`),console.log("Line radius:",window.debugOrbitRadius,"Planet radius:",ge),console.log("Max system radius - Line:",window.debugSystemMaxRadius,"Planet:",W)):console.log(`✅ Planet correctly orbiting at radius: ${ge.toFixed(2)}`),window.orbitChecked=!0}const it=ge*Math.cos(ee),ot=ge*Math.sin(ee);x.current.position.x=it,x.current.position.z=ot,x.current.position.y=0;const He=_?.planet_info?.name||a?.name||"UNKNOWN";window.planetNameLogged||(console.log("🔍 Planet name debug (FIXED):",{actualPlanetName:He,planetDataName:a?.name,renderingDataName:_?.planet_info?.name,planetType:a?.planet_type,hasRenderingData:!!_,hasPlanetData:!!a}),window.planetNameLogged=!0);const $e=He.toLowerCase();if($e.includes("tonnir")&&($e.includes("md-1420")||$e.includes("md_1420"))&&!window.tonnirLoggedInPlanet){const q=Math.floor(Date.now()/1e3);console.log("🪐 PLANET - Tonnir_MD-1420:",{name:s,orbital_radius:oe,maxOrbitalRadius:W,orbitRadius:ge,currentTime:ce,initial_orbital_angle:S,angleOrbit:ee,angleOrbitDegrees:(ee*180/Math.PI).toFixed(2),position:{x:it.toFixed(2),z:ot.toFixed(2)},cosmicOriginTime:A,realTime:q,timeElapsed:ce,source:_?"renderingData":"planetData"}),window.tonnirLoggedInPlanet=!0}const _t=a?.rotation_period_seconds||86400,wt=2*Math.PI/_t;x.current.rotation.y=ce*wt%(2*Math.PI),x.current.rotation.z=g*(Math.PI/180)}if(O.current.forEach(u=>{u.effect.updateUniforms&&u.effect.updateUniforms(p)}),C.current&&w.current&&v.current){const u=performance.now();C.current.render(w.current,v.current);const S=performance.now()-u;if(h-H.current>5e3){const A=1e3/(h-H.current);Ye(),V(g=>({...g,frameRate:Math.round(A),renderTime:Math.round(S*100)/100})),H.current=h}}},[]),Ye=b.useCallback(()=>{const h=Ce.getStats();V(p=>({...p,activeEffects:h.activeEffects,enabledEffects:h.enabledEffects}))},[]);return b.useEffect(()=>{let h=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,(async()=>{try{if(!h)return;console.log("🔄 Step 1: Loading planet data from API...");const u=await Ge();if(!h)return;if(console.log("🔄 Step 2: Initializing ThreeJS with API data..."),!pe()){h&&P("Failed to initialize 3D renderer");return}if(!h||(console.log("🔄 Step 3: Starting animation..."),tt(),M.current&&"ResizeObserver"in window&&(X.current=new ResizeObserver(le),X.current.observe(M.current)),window.addEventListener("resize",le),!h))return;console.log("🔄 Step 4: Applying API data to ThreeJS scene..."),u?await xt(u):(console.log("❌ No API data available, applying fallback"),ke())}catch(u){console.error("Error during ModularPlanetRenderer initialization:",u),h&&P(u instanceof Error?u.message:"Unknown initialization error")}})(),()=>{if(h=!1,F.current&&cancelAnimationFrame(F.current),X.current&&X.current.disconnect(),window.removeEventListener("resize",le),Ue(),E.current&&E.current.dispose(),Q.current&&w.current&&(w.current.remove(Q.current),Q.current.geometry.dispose(),Q.current.material.dispose(),Q.current=null),I.current&&w.current&&(w.current.remove(I.current),I.current.geometry.dispose(),I.current.material.dispose(),I.current=null),C.current&&M.current)try{M.current.contains(C.current.domElement)&&M.current.removeChild(C.current.domElement),C.current.dispose()}catch(u){console.error("Error during cleanup:",u)}}},[]),b.useEffect(()=>{const h=setInterval(()=>{const p=Ce.getStats();V(u=>({...u,activeEffects:p.activeEffects,enabledEffects:p.enabledEffects}))},1e4);return()=>clearInterval(h)},[]),b.useEffect(()=>{_?(console.log("🎯 renderingData updated:",{hasData:!0,initial_orbital_angle:_.timing?.initial_orbital_angle,planet_name:_.planet_info?.name,planet_type:_.planet_info?.type,max_orbital_radius:_.timing?.max_orbital_radius}),w.current&&x.current&&(console.log("🔄 Recalculating planet position with updated renderingData..."),et())):console.log("🎯 renderingData is null/undefined")},[_,et]),bi(_),o.jsxs("div",{className:`relative ${e}`,children:[l&&_&&o.jsx(gi,{planetData:_,showInPage:!0,showInConsole:!0}),o.jsx("div",{ref:M,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),me&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:o.jsxs("div",{className:"text-white text-center",children:[o.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),o.jsx("div",{children:"Loading planet..."})]})}),re&&o.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[o.jsx("strong",{children:"Error:"})," ",re]}),_&&!me&&o.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[o.jsx("h3",{className:"text-lg font-bold",children:_.planet_info.name}),o.jsx("p",{className:"text-sm opacity-80",children:_.planet_info.type}),o.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[J.length," effects active"]}),_.surface_elements?.description&&o.jsx("p",{className:"text-xs mt-2 opacity-60",children:_.surface_elements.description.appearance})]}),l&&o.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[o.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),o.jsxs("div",{children:["Frame Rate: ",z.frameRate," FPS"]}),o.jsxs("div",{children:["Render Time: ",z.renderTime,"ms"]}),o.jsxs("div",{children:["Active Effects: ",z.activeEffects]}),o.jsxs("div",{children:["Enabled Effects: ",z.enabledEffects]}),o.jsxs("div",{className:"mt-2",children:[o.jsx("div",{className:"font-semibold",children:"Effects:"}),J.map(h=>o.jsxs("div",{className:"ml-2",children:[h.type," (",h.enabled?"ON":"OFF",")"]},h.id))]})]})]})};class vi extends mt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?o.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:o.jsxs("div",{className:"text-center p-4",children:[o.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),o.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const xi=s=>o.jsx(vi,{children:o.jsx(yi,{...s})}),_i=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:n})=>{const r=b.useRef(null),l=b.useRef(null),[a,c]=b.useState("Aligning Stargate..."),[d,m]=b.useState(!1),[j,y]=b.useState(!1),[M,w]=b.useState(!1),[C,v]=b.useState(!0),[x,E]=b.useState(!0),[D,F]=b.useState(null),[me,L]=b.useState(null);b.useEffect(()=>{const P=document.createElement("style");return P.textContent=`
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
    `,document.head.appendChild(P),()=>{document.head.removeChild(P)}},[]),b.useEffect(()=>{const P=r.current;if(!P)return;const _=P.getContext("2d");if(!_)return;let Z=[];const J=800;let Y,z;const V=800;let O,H=.5;function X(){const T=P?.parentElement;if(!T||!P)return;const B=T.clientWidth,ie=T.clientHeight;P.width=Math.min(B,V),P.height=Math.min(ie,V),Y=P.width/2,z=P.height/2}function le(){X(),Z=[];for(let T=0;T<J;T++)Z.push({x:Math.random()*(P?.width||800),y:Math.random()*(P?.height||800),z:Math.random()*(P?.width||800),o:Math.random()});fe()}function fe(){!P||!_||(_.clearRect(0,0,P.width,P.height),Z.forEach(T=>{T.z-=H,T.z<=0&&(T.z=P.width,T.x=Math.random()*P.width,T.y=Math.random()*P.height,T.o=Math.random());const B=P.width/T.z,ie=(T.x-Y)*B+Y,Q=(T.y-z)*B+z,I=2*B;_.beginPath(),_.fillStyle=`rgba(255, 255, 255, ${T.o})`,_.arc(ie,Q,I,0,2*Math.PI),_.fill()}),H<60&&(H+=1),O=requestAnimationFrame(fe))}le();const pe=()=>X();return window.addEventListener("resize",pe),()=>{window.removeEventListener("resize",pe),O&&cancelAnimationFrame(O)}},[]),b.useEffect(()=>{if(e&&!C){const P=new Image;P.onload=()=>{l.current&&(l.current.src=e,y(!0),w(!0))},P.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{y(!0),w(!0)},1500)},P.src=e}else(C||!e)&&setTimeout(()=>{y(!0),w(!0)},1500)},[e,C]),b.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){c("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),m(!0);const _=(V,O)=>Array.from({length:O},()=>V[Math.floor(Math.random()*V.length)]).join(""),Z=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let J=0,Y=0;const z=()=>{if(J>=Z.length){const O="Stargate system aligned";let H=0;c("");const X=()=>{H<O.length?(c(O.substring(0,H+1)),H++,setTimeout(X,30)):m(!1)};X();return}const V=Z[J];c(_(V.chars,32)),Y++,Y>=V.iterations&&(J++,Y=0),setTimeout(z,V.duration)};z()},[]);const re=()=>{v(!C),C||(y(!0),w(!0))};return o.jsxs("div",{className:"h-full flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),x&&o.jsx("div",{className:"flex items-center gap-2",children:o.jsx("button",{onClick:re,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${C?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:C?"2D View":"3D View"})})]}),o.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[o.jsx("canvas",{ref:r,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${M?"opacity-0":"opacity-100"}`,style:{filter:M?"blur(50px)":"none"}}),C&&j&&t&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${j?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:o.jsx(xi,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:n,onDataLoaded:P=>{F(P)},onError:P=>{L(P),console.error("❌ Planet rendering error:",P)}})}),!C&&o.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${j?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:j&&e?o.jsx("div",{className:"w-full h-full flex items-center justify-center",children:o.jsx(Et,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:o.jsx("img",{ref:l,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):o.jsx("img",{ref:l,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),x&&o.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:C?"🌍 3D":"🖼️ 2D"})]}),o.jsxs("div",{className:"text-center mt-auto",children:[o.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${d?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[o.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),a]}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),o.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",C&&D&&o.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",D.planet_info?.type," Planet",D.atmosphere&&o.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),D.rings?.has_rings&&o.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),C&&me&&o.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},wi=({currentPlanet:s,system:e,galaxy:t,systemPlanets:i})=>{const[n,r]=b.useState(null),[l,a]=b.useState(null),[c,d]=b.useState(!1),[m,j]=b.useState(!1),[y,M]=b.useState(!0);b.useEffect(()=>{if(i&&i.length>0){const v=i.findIndex(x=>x.name.toLowerCase()===s.toLowerCase());v!==-1?(v>0?(r(i[v-1].name.toLowerCase()),d(!0)):e.index>0?(r("__prev_system__"),d(!0)):d(!1),v<i.length-1?(a(i[v+1].name.toLowerCase()),j(!0)):(a("__next_system__"),j(!0))):(d(!1),j(!1))}else d(!1),j(!1);M(!1)},[s,e.index,i]);const w=async()=>{const v=t.coordinates.join(",");if(n==="__prev_system__")try{const x=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(x.ok){const E=await x.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const F=E.system.planets[E.system.planets.length-1].name.toLowerCase();Pe(v,e.index-1,F,E.system.planets),Xe(v,e.index-1),window.location.href=`/planet/${F}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else n&&(Pe(v,e.index,n,i),window.location.href=`/planet/${n}`)},C=async()=>{const v=t.coordinates.join(",");if(l==="__next_system__")try{const x=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(x.ok){const E=await x.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const F=E.system.planets[0].name.toLowerCase();Pe(v,e.index+1,F,E.system.planets),Xe(v,e.index+1),window.location.href=`/planet/${F}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(Pe(v,e.index,l,i),window.location.href=`/planet/${l}`)};return y?null:o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("button",{onClick:w,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),o.jsx("button",{onClick:C,disabled:!m,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${m?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Ci=({planet:s,system:e,galaxy:t,planet_url:i,version:n,image_url:r,cosmic_origin_time:l,initial_angle_rotation:a})=>{const[c]=b.useState(t.coordinates.join(","));b.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),Pe(c,e.index,s.name,e.planets||[]),Xe(c,e.index)},[c,e.index,s.name]);const d=y=>y.replace(/_/g," "),m=y=>y.replace(/_/g," "),j=y=>y.replace(/_/g," ");return o.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[o.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),o.jsxs("div",{className:"relative z-10",children:[o.jsx(Pt,{}),o.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:o.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",d(s.name),"'"]})}),o.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",m(e.name),"' - Galaxy '",j(t.name),"'"]}),o.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),o.jsx(wi,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:o.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[o.jsx("div",{className:"order-1 lg:order-1",children:o.jsx(_i,{planetUrl:i,imageUrl:r,planet:s,cosmicOriginTime:l,initialAngleRotation:a})}),o.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),o.jsx("div",{className:"order-2 lg:order-2",children:o.jsx(Ht,{planet:s,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:a})})]})}),o.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:o.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:o.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",m(e.name),"'"]})})})]}),o.jsx(Ct,{version:n})]}),o.jsx(jt,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!s||!e||!t||!i){console.error("Missing required data elements");return}const n=JSON.parse(s.textContent||"{}"),r=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),a=JSON.parse(i.textContent||"{}"),c={planet:n,system:r,galaxy:l,planet_url:a.planet_url,version:a.version,image_url:a.image_url,cosmic_origin_time:a.cosmic_origin_time,initial_angle_rotation:a.initial_angle_rotation},d=document.getElementById("atlas-react-root");d&&St.createRoot(d).render(mt.createElement(Ci,c))}catch(s){console.error("Error initializing Planet React app:",s)}});
