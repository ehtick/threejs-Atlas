import{r as v,j as a,R as Rt,V as Vt,c as Wt}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as $t}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Ht,U as Zt,m as Ge,c as ut,a as Xt}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as Kt,V as T,n as Fe,T as Le,Q as xt,l as bt,o as pe,R as qt,p as Qt,q as Lt,e as Me,r as ae,s as ue,N as Oe,t as ot,c as st,C as f,u as Jt,v as at,d as Ee,G as nt,w as ei,x as ti,F as Ce,y as ft,z as _t,h as ii,H as oi,I as si,J as pt,K as ze,L as St,g as wt,M as Ot,O as ai,S as ni,P as ri,W as li,U as ci,X as di,Y as mi,D as Et,A as hi}from"./atlas_B7sErIEjvjheRK7WgW2hG.js";const ui=({effects:s,onToggleEffect:e})=>{const[t,i]=v.useState(s),[o,n]=v.useState(!1);v.useEffect(()=>{i(s)},[s]);const l=(d,r)=>{i(m=>m.map(p=>p.id===d?{...p,enabled:r}:p)),e(d,r)},c=d=>d;return t.length===0?null:a.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("div",{className:"text-xs text-gray-400",children:"3D Effects Control"}),a.jsxs("button",{onClick:()=>n(!o),className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[o?"Hide":"Show"," (",t.filter(d=>d.enabled).length,"/",t.length,")"]})]}),o&&a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:t.map(d=>a.jsxs("div",{className:"bg-white/5 rounded p-2 flex items-center justify-between",children:[a.jsxs("label",{className:"flex items-center gap-2 cursor-pointer flex-1",children:[a.jsx("input",{type:"checkbox",checked:d.enabled,onChange:r=>l(d.id,r.target.checked),className:"rounded border-gray-400 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-white/10"}),a.jsx("span",{className:`${d.enabled?"text-white":"text-gray-500"} transition-colors`,children:c(d.type)})]}),a.jsx("span",{className:`text-[10px] ${d.enabled?"text-green-400":"text-gray-600"}`,children:d.enabled?"ON":"OFF"})]},d.id))}),o&&t.length>3&&a.jsxs("div",{className:"mt-2 flex gap-2",children:[a.jsx("button",{onClick:()=>{t.forEach(d=>l(d.id,!0))},className:"text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors",children:"Enable All"}),a.jsx("button",{onClick:()=>{t.forEach(d=>l(d.id,!1))},className:"text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors",children:"Disable All"})]})]})},fi=({planet:s,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:o,effects:n,onToggleEffect:l})=>{const[c,d]=v.useState(!1),r=y=>y.replace(/_/g," "),m=y=>{const N=y/86400;return N<30?`${N.toFixed(2)} days`:N<365?`${(N/30).toFixed(2)} months`:`${(N/365).toFixed(2)} years`},p=y=>{const N=y*9/5+32;return`${y.toFixed(1)}°C (${N.toFixed(1)}°F)`},x=y=>`${y.toExponential(2)} kg`,C=y=>y>=1e3?`${(y/1e3).toFixed(2)} km`:`${y.toFixed(2)} m`;return a.jsxs("div",{className:"h-full flex flex-col relative",children:[a.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),a.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[a.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),a.jsx(Ht,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),a.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),a.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),a.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[a.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),a.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),a.jsx("div",{className:"text-xs font-bold text-orange-300",children:x(s.mass)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),a.jsx("div",{className:"text-xs font-bold text-orange-300",children:C(s.diameter)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),a.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),a.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[a.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),a.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),a.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),a.jsx("div",{className:"text-xs font-bold text-cyan-300",children:m(s.orbital_period_seconds)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),a.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),a.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[a.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),a.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),a.jsx("div",{className:"text-xs font-bold text-red-300",children:p(s.surface_temperature)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[a.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),a.jsx("div",{className:"text-xs font-bold text-red-300",children:m(s.rotation_period_seconds)})]})]})]}),a.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&a.jsx("button",{onClick:()=>d(!c),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:c?"▲ Less":"▼ All"})]}),a.jsx("div",{className:"flex flex-wrap gap-1",children:(c?s.elements:s.elements.slice(0,4)).map((y,N)=>a.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:y},N))})]})]}),a.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[a.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Status:"}),a.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Planet:"}),a.jsx("div",{className:"text-white truncate font-medium",children:r(s.name)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"System:"}),a.jsx("div",{className:"text-white truncate font-medium",children:r(e.name)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"System ID:"}),a.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),a.jsx("div",{className:"text-white truncate font-medium",children:r(t.name)})]}),a.jsxs("div",{className:"bg-white/5 rounded p-2",children:[a.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),a.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]}),n&&l&&a.jsx(ui,{effects:n,onToggleEffect:l})]})},Ct={type:"change"},gt={type:"start"},jt={type:"end"},Qe=new qt,Mt=new Qt,pi=Math.cos(70*Lt.DEG2RAD),ie=new T,fe=2*Math.PI,k={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dt=1e-6;class gi extends Kt{constructor(e,t=null){super(e,t),this.state=k.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fe.ROTATE,MIDDLE:Fe.DOLLY,RIGHT:Fe.PAN},this.touches={ONE:Le.ROTATE,TWO:Le.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new xt,this._lastTargetPosition=new T,this._quat=new xt().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bt,this._sphericalDelta=new bt,this._scale=1,this._panOffset=new T,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new T,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yi.bind(this),this._onPointerDown=vi.bind(this),this._onPointerUp=xi.bind(this),this._onContextMenu=Mi.bind(this),this._onMouseWheel=Si.bind(this),this._onKeyDown=wi.bind(this),this._onTouchStart=Ei.bind(this),this._onTouchMove=Ci.bind(this),this._onMouseDown=bi.bind(this),this._onMouseMove=_i.bind(this),this._interceptControlDown=Ti.bind(this),this._interceptControlUp=Ni.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ct),this.update(),this.state=k.NONE}update(e=null){const t=this.object.position;ie.copy(t).sub(this.target),ie.applyQuaternion(this._quat),this._spherical.setFromVector3(ie),this.autoRotate&&this.state===k.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=fe:i>Math.PI&&(i-=fe),o<-Math.PI?o+=fe:o>Math.PI&&(o-=fe),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=l!=this._spherical.radius}if(ie.setFromSpherical(this._spherical),ie.applyQuaternion(this._quatInverse),t.copy(this.target).add(ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=ie.length();l=this._clampDistance(c*this._scale);const d=c-l;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),n=!!d}else if(this.object.isOrthographicCamera){const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=d!==this.object.zoom;const r=new T(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(c),this.object.updateMatrixWorld(),l=ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(Qe.origin.copy(this.object.position),Qe.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qe.direction))<pi?this.object.lookAt(this.target):(Mt.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qe.intersectPlane(Mt,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>dt||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dt||this._lastTargetPosition.distanceToSquared(this.target)>dt?(this.dispatchEvent(Ct),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fe/60*this.autoRotateSpeed*e:fe/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ie.setFromMatrixColumn(t,0),ie.multiplyScalar(-e),this._panOffset.add(ie)}_panUp(e,t){this.screenSpacePanning===!0?ie.setFromMatrixColumn(t,1):(ie.setFromMatrixColumn(t,0),ie.crossVectors(this.object.up,ie)),ie.multiplyScalar(e),this._panOffset.add(ie)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;ie.copy(o).sub(this.target);let n=ie.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/i.clientHeight,this.object.matrix),this._panUp(2*t*n/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,n=t-i.top,l=i.width,c=i.height;this._mouse.x=o/l*2-1,this._mouse.y=-(n/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fe*this._rotateDelta.x/t.clientHeight),this._rotateUp(fe*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,n=Math.sqrt(i*i+o*o);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._rotateEnd.set(o,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fe*this._rotateDelta.x/t.clientHeight),this._rotateUp(fe*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,n=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function vi(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function yi(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function xi(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jt),this.state=k.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bi(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=k.DOLLY;break;case Fe.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=k.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=k.ROTATE}break;case Fe.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=k.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=k.PAN}break;default:this.state=k.NONE}this.state!==k.NONE&&this.dispatchEvent(gt)}function _i(s){switch(this.state){case k.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case k.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case k.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Si(s){this.enabled===!1||this.enableZoom===!1||this.state!==k.NONE||(s.preventDefault(),this.dispatchEvent(gt),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(jt))}function wi(s){this.enabled!==!1&&this._handleKeyDown(s)}function Ei(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Le.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=k.TOUCH_ROTATE;break;case Le.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=k.TOUCH_PAN;break;default:this.state=k.NONE}break;case 2:switch(this.touches.TWO){case Le.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=k.TOUCH_DOLLY_PAN;break;case Le.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=k.TOUCH_DOLLY_ROTATE;break;default:this.state=k.NONE}break;default:this.state=k.NONE}this.state!==k.NONE&&this.dispatchEvent(gt)}function Ci(s){switch(this._trackPointer(s),this.state){case k.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case k.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case k.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case k.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=k.NONE}}function Mi(s){this.enabled!==!1&&s.preventDefault()}function Ti(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ni(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Tt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class Ft{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:o,ring_outer_radius:n,tilt_factor:l,planet_radius:c,shape_seed:d}=e;if(!t||!i){console.warn("No ring data provided");return}const r=[...t.particles,...i.particles],m=r.length,p=new Tt(d||12345),x=new Me,C=new Float32Array(m*3),y=new Float32Array(m*3),N=new Float32Array(m),w=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],_=p.choice(w);for(let S=0;S<m;S++){const W=r[S],Z=this.planetRadius/(c||200),ge=(d||12345)+S,A=new Tt(ge),q=W.distance*Z,Q=W.angle,U=q*Math.sin(Q),ne=Math.asin((l||.2)*.5),g=U*Math.sin(ne),X=U*Math.cos(ne),B=((n||400)-(o||200))*Z*.4,re=A.uniform(-B*.8,B*.8),ee=A.uniform(-B*.3,B*.3),M=A.uniform(-.08,.08),P=q+ee,R=Q+M;C[S*3]=P*Math.cos(R),C[S*3+1]=g+re+this.planetRadius*.15,C[S*3+2]=X+A.uniform(-B*.4,B*.4),W.color[0]/255;const I=(W.distance-(o||200))/((n||400)-(o||200)),oe=_.baseGray,ve=_.variation,ye=A.uniform(-ve,ve),G=Math.max(.12,Math.min(.45,oe+ye)),de=.8+I*.4,te=A.uniform(.85,1.15),me=A.uniform(0,1),xe=me<.03?A.uniform(1.1,1.3):1,Te=G*de*te*xe,se=Math.max(.1,Math.min(.55,Te));y[S*3]=se,y[S*3+1]=se,y[S*3+2]=se;const be=.15,he=A.uniform(.3,.7),H=me<.1?A.uniform(1.05,1.2):1;N[S]=W.size*be*he*H}x.setAttribute("position",new ae(C,3)),x.setAttribute("color",new ae(y,3)),x.setAttribute("size",new ae(N,1)),this.material=new ue({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Oe}),this.ringSystem=new ot(x,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,o=t.cosmicOriginTime||Date.now()/1e3,n=t.initialAngleRotation||0,c=Date.now()/1e3-o,d=2*Math.PI/i,r=(n+c*d)%(2*Math.PI);this.ringSystem.rotation.y=r}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function Pi(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new Ft(e,t)}class Ve{mesh;material;geometry;params;static vertexShader=`
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
      
      
      float fresnel = pow(1.0 - abs(dot(normal, viewDir)), fresnelPower);
      
      
      vec3 color = atmosphereColor;
      
      
      float alpha = fresnel * atmosphereOpacity;
      
      gl_FragColor = vec4(color, alpha);
    }
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new st(i,32,32);const o=new f(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ue({vertexShader:Ve.vertexShader,fragmentShader:Ve.fragmentShader,uniforms:{atmosphereColor:{value:o},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:at,side:Jt,depthWrite:!1}),this.mesh=new Ee(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new f(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ai(s,e){let t=[.7,.7,.7,.15],i=12;if(e){if(e.color&&Array.isArray(e.color)){const n=e.color;t=[n[0],n[1],n[2],(n[3]||.15)*.7]}e.width&&(i=e.width)}const o={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new Ve(s,o)}class V{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,i=Math.acos(this.random()*2-1);return{x:e*Math.sin(i)*Math.cos(t),y:e*Math.sin(i)*Math.sin(t),z:e*Math.cos(i)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const F={PARTICLE_COUNT:{min:50,max:200},SPEED:{min:.05,max:.5},SIZE:{min:.5,max:2},OPACITY:{min:.2,max:.5},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05}};class We{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new V(i);this.params={color:t.color||new f(16777215),particleCount:t.particleCount||Math.floor(o.uniform(F.PARTICLE_COUNT.min,F.PARTICLE_COUNT.max)),speed:t.speed||o.uniform(F.SPEED.min,F.SPEED.max),size:t.size||o.uniform(F.SIZE.min,F.SIZE.max),opacity:t.opacity||o.uniform(F.OPACITY.min,F.OPACITY.max),turbulence:t.turbulence||o.uniform(F.TURBULENCE.min,F.TURBULENCE.max),rotationSpeed:t.rotationSpeed||o.uniform(F.ROTATION_SPEED.min,F.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||o.uniform(F.MOVEMENT_AMPLITUDE.min,F.MOVEMENT_AMPLITUDE.max),seed:i},this.particleCount=this.params.particleCount,this.geometry=new Me,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new ot(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),c=this.params.color instanceof f?this.params.color:new f(this.params.color),d=this.params.seed||Math.floor(Math.random()*1e6),r=new V(d);for(let m=0;m<this.particleCount;m++){const p=r.spherePosition(e*r.uniform(1,1.1));t[m*3]=p.x,t[m*3+1]=p.y,t[m*3+2]=p.z;const x=r.colorVariation({r:c.r,g:c.g,b:c.b});i[m*3]=x.r,i[m*3+1]=x.g,i[m*3+2]=x.b,o[m]=this.params.size*r.uniform(.75,1.25),n[m]=this.params.speed*r.uniform(.6,1.4),l[m]=r.random()*Math.PI*2}this.geometry.setAttribute("position",new ae(t,3)),this.geometry.setAttribute("customColor",new ae(i,3)),this.geometry.setAttribute("size",new ae(o,1)),this.geometry.setAttribute("speed",new ae(n,1)),this.geometry.setAttribute("phase",new ae(l,1))}createMaterial(){return new ue({vertexShader:We.vertexShader,fragmentShader:We.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:at,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value,this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Nt(s,e,t){const i=e.streaks||{},o=t||Math.floor(Math.random()*1e6),n=new V(o+3e3),l=i.count||Math.floor(n.uniform(F.PARTICLE_COUNT.min,F.PARTICLE_COUNT.max)),c=i.speed||n.uniform(F.SPEED.min,F.SPEED.max),d=n.uniform(F.SIZE.min,F.SIZE.max),r=n.uniform(F.OPACITY.min,F.OPACITY.max),m=n.uniform(F.TURBULENCE.min,F.TURBULENCE.max),p=n.uniform(F.ROTATION_SPEED.min,F.ROTATION_SPEED.max),x=n.uniform(F.MOVEMENT_AMPLITUDE.min,F.MOVEMENT_AMPLITUDE.max),C={color:i.color?new f().setRGB(i.color[0],i.color[1],i.color[2]):new f(16777215),particleCount:l,speed:c,size:d,opacity:r,turbulence:m,seed:o,rotationSpeed:p,movementAmplitude:x};return new We(s,C)}const O={CLOUD_COUNT:{min:15,max:30},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.9},DENSITY:{min:.5,max:2},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},PUFFINESS:{min:1,max:1.4},TIME_SPEED:{min:.1,max:3}};class ke{cloudSystem;material;params;cloudCount;clouds=[];startTime;static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float movementAmplitude;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      // Posición del mundo para efectos de ruido
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Movimiento sutil de las nubes
      vec3 pos = position;
      pos += sin(time * 0.1 + worldPosition.x * 0.01) * movementAmplitude * 0.1;
      pos += cos(time * 0.08 + worldPosition.z * 0.01) * movementAmplitude * 0.1;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static fragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float opacity;
    uniform vec3 cloudColor;
    uniform float density;
    uniform vec2 noiseOffset;
    uniform float shapeVariation;
    uniform vec3 lightDirection; // Del sistema PlanetLayerSystem
    uniform vec3 lightPosition; // Del sistema PlanetLayerSystem
    
    // Función de ruido Perlin simplificada para nubes
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 0.0;
      
      for (int i = 0; i < 4; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      // TÉCNICA BILLBOARD VOLUMÉTRICA CON SOFT PARTICLES
      
      // Distancia radial del centro para forma circular suave
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      
      // Máscara circular con bordes súper suaves (soft particles)
      float circularMask = 1.0 - smoothstep(0.1, 0.5, distFromCenter);
      
      // Ruido volumétrico para textura de nube realista
      vec2 noiseUv1 = vUv * 4.0 + noiseOffset + time * 0.008;
      float noise1 = fbm(noiseUv1) * 0.7;
      
      vec2 noiseUv2 = vUv * 8.0 + noiseOffset * 1.3 + time * 0.005;
      float noise2 = fbm(noiseUv2) * 0.5;
      
      vec2 noiseUv3 = vUv * 16.0 + noiseOffset * 2.1 + time * 0.003;
      float noise3 = fbm(noiseUv3) * 0.3;
      
      // Combinar múltiples octavas de ruido
      float cloudNoise = noise1 + noise2 + noise3;
      cloudNoise = smoothstep(0.2, 1.0, cloudNoise);
      
      // Aplicar máscara circular para bordes suaves
      float baseCloud = cloudNoise * circularMask * density;
      
      // Función de densidad que baja en los bordes (soft particles)
      float densityFalloff = pow(circularMask, 1.5);
      
      // Aplicar técnica de soft particles para bordes suaves
      float finalCloud = baseCloud * densityFalloff;
      
      // Gamma correction para mayor suavidad
      finalCloud = pow(finalCloud, 0.8);
      
      // Color de nube realista con variaciones naturales
      vec3 finalColor = cloudColor;
      
      // Variación de color como nubes reales (centro más blanco, bordes más grises)
      float colorVariation = 1.0 - distFromCenter * 0.3;
      finalColor *= colorVariation;
      
      // Sombreado súper sutil y realista
      float lightIntensity = dot(vNormal, normalize(vec3(0.8, 1.0, 0.6))) * 0.15 + 0.85;
      finalColor *= lightIntensity;
      
      // Transparencia con falloff natural como nubes reales
      float alpha = finalCloud * opacity;
      alpha *= (1.0 - distFromCenter * 0.5); // Más transparente en los bordes
      
      // USAR LA LUZ REAL DEL SISTEMA PERO CON NORMAL PLANETARIA
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
      }
      
      // CRÍTICO: Usar la normal planetaria, NO la normal de la superficie de la nube
      // Para determinar qué lado del PLANETA está iluminado
      vec3 planetNormal = normalize(vWorldPosition); // Normal desde centro del planeta
      float dotNL = dot(planetNormal, lightDir);
      
      // Transición suave de opacidad (de 1.0 a 0.3)
      float lightFactor = smoothstep(-0.2, 0.2, dotNL);
      alpha *= mix(0.3, 1.0, lightFactor);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new V(i);this.startTime=t.startTime||i%1e4/1e3,this.params={color:t.color||new f(16777215),cloudCount:t.cloudCount||Math.floor(o.uniform(O.CLOUD_COUNT.min,O.CLOUD_COUNT.max)),size:t.size||o.uniform(O.SIZE.min,O.SIZE.max),opacity:t.opacity||o.uniform(O.OPACITY.min,O.OPACITY.max),density:t.density||o.uniform(O.DENSITY.min,O.DENSITY.max),rotationSpeed:t.rotationSpeed||o.uniform(O.ROTATION_SPEED.min,O.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||o.uniform(O.MOVEMENT_AMPLITUDE.min,O.MOVEMENT_AMPLITUDE.max),puffiness:t.puffiness||o.uniform(O.PUFFINESS.min,O.PUFFINESS.max),timeSpeed:t.timeSpeed||o.uniform(O.TIME_SPEED.min,O.TIME_SPEED.max),seed:i,startTime:this.startTime},this.cloudCount=this.params.cloudCount,this.cloudSystem=new nt,this.material=this.createMaterial(),this.generateClouds(e)}generateClouds(e){const t=this.params.color instanceof f?this.params.color:new f(this.params.color),i=this.params.seed||Math.floor(Math.random()*1e6),o=new V(i),n=this.params.cloudsFromPython;for(let l=0;l<this.cloudCount;l++){let c,d,r,m=t,p=this.params.size*o.uniform(.8,1.2);if(n&&l<n.length){const U=n[l];c=U.position[0]*e*1.04,d=U.position[1]*e*1.04,r=U.position[2]*e*1.04,U.color&&(m=new f().setRGB(U.color[0],U.color[1],U.color[2])),p=U.radius*e*.8}else{const U=o.uniform(0,2*Math.PI),ne=o.uniform(-1,1),g=Math.acos(ne),X=e*o.uniform(1.02,1.06);c=X*Math.sin(g)*Math.cos(U),d=X*Math.sin(g)*Math.sin(U),r=X*Math.cos(g)}const x=p*o.uniform(.3,.8),C=Math.max(8,Math.floor(x*15)),y=new ei(x*2,x*2,C,C),N=new T(c,d,r);new T(0,0,0);const w=N.clone().normalize(),_=new T,S=new T;Math.abs(w.y)<.99?_.crossVectors(w,new T(0,1,0)).normalize():_.crossVectors(w,new T(1,0,0)).normalize(),S.crossVectors(w,_).normalize();const W=new ti;W.makeBasis(_,S,w);const Z=y.attributes.position,ge=new T,A=Math.sqrt(c*c+d*d+r*r);y.applyMatrix4(W);for(let U=0;U<Z.count;U++){ge.fromBufferAttribute(Z,U);const B=ge.clone().add(N).clone().normalize().multiplyScalar(A).sub(N);Z.setXYZ(U,B.x,B.y,B.z)}Z.needsUpdate=!0,y.computeVertexNormals(),y.translate(c,d,r);const q=this.material.clone();q.uniforms.cloudColor.value=m,q.uniforms.density.value=this.params.density*o.uniform(.8,1.2),q.uniforms.noiseOffset.value=new pe(o.uniform(0,100),o.uniform(0,100)),q.uniforms.shapeVariation.value=o.uniform(-1,1),q.uniforms.lightDirection.value=this.material.uniforms.lightDirection.value.clone(),q.uniforms.lightPosition.value=this.material.uniforms.lightPosition.value.clone();const Q=new Ee(y,q);Q.userData.isAtmosphericCloud=!0,Q.userData.planetNormal=w.clone(),this.clouds.push(Q),this.cloudSystem.add(Q)}}createMaterial(){return new ue({vertexShader:ke.vertexShader,fragmentShader:ke.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},cloudColor:{value:new f(16777215)},density:{value:this.params.density},noiseOffset:{value:new pe(0,0)},shapeVariation:{value:0},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)}},transparent:!0,blending:Oe,depthWrite:!1,side:Ce})}addToScene(e,t){t&&this.cloudSystem.position.copy(t),e.add(this.cloudSystem)}update(e,t){const o=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.clouds.forEach(n=>{const l=n.material;l.uniforms.time.value=o}),this.cloudSystem.rotation.y=o*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},this.clouds.forEach(t=>{const i=t.material;e.opacity!==void 0&&(i.uniforms.opacity.value=e.opacity),e.movementAmplitude!==void 0&&(i.uniforms.movementAmplitude.value=e.movementAmplitude)})}updateLightPosition(e){this.clouds.forEach(t=>{const i=t.material;i.uniforms.lightPosition&&i.uniforms.lightPosition.value.copy(e)})}updateLightDirection(e){this.clouds.forEach(t=>{const i=t.material;i.uniforms.lightDirection&&i.uniforms.lightDirection.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function mt(s,e,t){const i=e.clouds||[];if(i.length===0){const c=t||Math.floor(Math.random()*1e6),d=new V(c+4e3),r={color:new f(1,1,1),cloudCount:15,size:.6,opacity:.7,density:.8,seed:c,rotationSpeed:.005,movementAmplitude:.02,puffiness:1.5,timeSpeed:d.uniform(O.TIME_SPEED.min,O.TIME_SPEED.max)};return new ke(s,r)}const o=t||Math.floor(Math.random()*1e6),n=new V(o+4e3),l={color:new f(16777215),cloudCount:i.length,size:n.uniform(O.SIZE.min,O.SIZE.max),opacity:n.uniform(O.OPACITY.min,O.OPACITY.max),density:n.uniform(O.DENSITY.min,O.DENSITY.max),seed:o,rotationSpeed:n.uniform(O.ROTATION_SPEED.min,O.ROTATION_SPEED.max),movementAmplitude:n.uniform(O.MOVEMENT_AMPLITUDE.min,O.MOVEMENT_AMPLITUDE.max),puffiness:n.uniform(O.PUFFINESS.min,O.PUFFINESS.max),timeSpeed:n.uniform(O.TIME_SPEED.min,O.TIME_SPEED.max),cloudsFromPython:i};return new ke(s,l)}class zt{landGroup;lands=[];constructor(e,t={}){this.landGroup=new nt;const i=t.seed||Math.floor(Math.random()*1e6),o=new V(i);t.greenPatches&&t.greenPatches.length>0?this.generateLandsFromPython(e,t.greenPatches,o):this.generateProceduralLands(e,o)}generateLandsFromPython(e,t,i){t.forEach((o,n)=>{let l=o.position_3d||o.position||[0,0,1];if(l.length===2){const M=i.uniform(0,Math.PI*2),P=Math.acos(i.uniform(-1,1));l=[Math.sin(P)*Math.cos(M),Math.sin(P)*Math.sin(M),Math.cos(P)]}const c=(o.size||.1)*e*1.8;Math.max(8,Math.min(o.sides||20,12));let d=new f(4881497);o.color&&Array.isArray(o.color)&&(d=new f(o.color[0],o.color[1],o.color[2]));const r=Math.max(24,Math.min(64,Math.floor(c*32))),m=new T(l[0],l[1],l[2]).normalize(),p=new T,x=new T;Math.abs(m.y)<.99?p.crossVectors(m,new T(0,1,0)).normalize():p.crossVectors(m,new T(1,0,0)).normalize(),x.crossVectors(m,p).normalize();const C=2/Math.max(c*.05,1),y=(M,P)=>{let R=0,L=1,I=C,oe=0;const ve=Math.min(5,Math.max(3,Math.floor(c/40)+2));for(let ye=0;ye<ve;ye++){const G=M*I,de=P*I,te=(Se,De)=>{const Be=Se*12.9898+De*78.233;return Math.sin(Be+i.uniform(0,1e3))*43758.5453%1},me=Math.floor(G),xe=Math.floor(de),Te=G-me,se=de-xe,be=Se=>Se*Se*Se*(Se*(Se*6-15)+10),he=be(Te),H=be(se),Ue=te(me,xe),Ie=te(me+1,xe),Xe=te(me,xe+1),Ne=te(me+1,xe+1),Pe=Ue*(1-he)+Ie*he,rt=Xe*(1-he)+Ne*he,Ke=Pe*(1-H)+rt*H;R+=Ke*L,oe+=L,L*=.5,I*=2.2}return R/oe},N=[],w=[],_=[],S=.35,W=new Map,Z=new Map;let ge=0;for(let M=0;M<=r;M++)for(let P=0;P<=r;P++){const R=(M/r-.5)*2,L=(P/r-.5)*2,I=Math.sqrt(R*R+L*L),oe=y(R*2,L*2);if(1-I*.5+oe*.6>S&&I<1.2){const ye=R*c,G=L*c,te=new T().addScaledVector(p,ye).addScaledVector(x,G).addScaledVector(m,0);N.push(te.x,te.y,te.z),_.push((R+1)*.5,(L+1)*.5),W.set(`${M},${P}`,ge),Z.set(`${M},${P}`,oe),ge++}}for(let M=0;M<r;M++)for(let P=0;P<r;P++){const R=W.get(`${M},${P}`),L=W.get(`${M+1},${P}`),I=W.get(`${M},${P+1}`),oe=W.get(`${M+1},${P+1}`);R!==void 0&&L!==void 0&&I!==void 0&&w.push(R,L,I),L!==void 0&&oe!==void 0&&I!==void 0&&w.push(L,oe,I)}const A=new Me;A.setAttribute("position",new ft(N,3)),A.setAttribute("uv",new ft(_,2)),A.setIndex(w),A.computeVertexNormals();const q=A.attributes.position,Q=m.clone().multiplyScalar(e),U=new T;for(let M=0;M<q.count;M++){U.fromBufferAttribute(q,M);const R=U.clone().add(Q).clone().normalize(),L=A.attributes.uv;if(L){const I=L.getX(M)*2-1,oe=L.getY(M)*2-1,ve=Math.sqrt(I*I+oe*oe),ye=y(I*2,oe*2),de=Math.max(0,1-Math.pow(ve,.7))*.5+ye*.5,me=(Pe=>Pe*Pe*(3-2*Pe))(de),Te=e*1.01-e,se=c*.15,be=Math.min(se,Te*.9),he=e*.002,H=e+he,Ue=e+he+be,Ie=Lt.lerp(H,Ue,me),Ne=R.multiplyScalar(Ie).sub(Q);q.setXYZ(M,Ne.x,Ne.y,Ne.z)}}q.needsUpdate=!0,A.computeVertexNormals(),A.translate(Q.x,Q.y,Q.z);const ne=new _t({color:d,emissive:d.clone().multiplyScalar(.05),emissiveIntensity:1e-7,shininess:8,flatShading:!1,bumpScale:.002}),g=document.createElement("canvas");g.width=g.height=64;const X=g.getContext("2d"),B=X.createImageData(64,64);for(let M=0;M<B.data.length;M+=4){const P=i.uniform(.8,1.2),R=Math.floor(128*P);B.data[M]=R,B.data[M+1]=R,B.data[M+2]=R,B.data[M+3]=255}X.putImageData(B,0,0);const re=new ii(g);re.wrapS=re.wrapT=oi,re.repeat.set(2,2),ne.bumpMap=re;const ee=new Ee(A,ne);ee.castShadow=!0,ee.receiveShadow=!0,this.lands.push(ee),this.landGroup.add(ee)})}generateProceduralLands(e,t){const i=Math.floor(t.uniform(5,15));for(let o=0;o<i;o++){const n=t.uniform(0,Math.PI*2),l=Math.acos(t.uniform(-1,1)),c=new T(Math.sin(l)*Math.cos(n),Math.sin(l)*Math.sin(n),Math.cos(l)),d=e*t.uniform(.02,.08),r=new si(d,16),m=c.clone().multiplyScalar(e*1);r.lookAt(c),r.translate(m.x,m.y,m.z);const p=t.uniform(.3,.7),x=new _t({color:new f(.36*(1-p)+.22*p,.23*(1-p)+.36*p,0),emissive:657920,shininess:5}),C=new Ee(r,x);this.lands.push(C),this.landGroup.add(C)}}addToScene(e,t){t&&this.landGroup.position.copy(t),e.add(this.landGroup)}update(e){}getObject3D(){return this.landGroup}dispose(){this.lands.forEach(e=>{e.geometry.dispose(),e.material instanceof pt&&e.material.dispose()}),this.lands=[],this.landGroup.clear()}}function Pt(s,e,t){const i=e.green_patches;if(!i||i.length===0)return null;const o=t||Math.floor(Math.random()*1e6);return new zt(s,{greenPatches:i,seed:o+6e3})}class $e{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    varying vec2 vUv;
    
    void main() {
      vPosition = position;
      vNormal = normalMatrix * normal; // Transformar normal al espacio de vista
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz); // Normal en espacio mundo
      vUv = uv;
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;static baseFragmentShader=`
    uniform vec3 baseColor;
    uniform vec3 lightDirection;
    uniform vec3 lightPosition;
    uniform float ambientStrength;
    uniform float lightIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vWorldPosition;
    varying vec3 vWorldNormal;
    varying vec2 vUv;
    
    void main() {
      vec3 normal = normalize(vWorldNormal);
      
      // Usar posición de luz si está disponible, sino usar dirección
      vec3 lightDir;
      if (length(lightPosition) > 0.0) {
        lightDir = normalize(lightPosition - vWorldPosition);
      } else {
        lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
      }
      
      // Cálculo de iluminación Lambertiana mejorado
      float dotNL = dot(normal, lightDir);
      
      // Suavizar la transición entre día y noche con mejor gradiente
      float dayNight = smoothstep(-0.3, 0.1, dotNL);
      
      // Añadir un poco de retroiluminación (rim lighting) para evitar oscuridad total
      float rimLight = 1.0 - abs(dotNL);
      rimLight = pow(rimLight, 3.0) * 0.1;
      
      // Color base con iluminación mejorada
      vec3 finalColor = baseColor;
      
      // Aplicar iluminación con intensidad variable
      float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
      finalColor *= totalLight;
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;constructor(e,t=new f(16753920)){this.baseMesh=e;const i=e.geometry;this.planetRadius=i.parameters.radius||1;const o=t instanceof f?t:new f(t);this.baseMaterial=new ue({vertexShader:$e.baseVertexShader,fragmentShader:$e.baseFragmentShader,uniforms:{baseColor:{value:o},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:Ce}),this.baseMesh.material=this.baseMaterial}addEffectLayer(e,t,i=1.001,o){const n=new st(this.planetRadius*i,256,256),l=new Ee(n,t);return l.position.copy(this.baseMesh.position),l.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:l,material:t,layerObject:o}),this.scene&&this.scene.add(l),l}createCloudBandsLayerMaterial(e){const t=`
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
      uniform float opacity;
      
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
      
      // Función para crear cortes/gaps aleatorios en las bandas
      float createBandGaps(vec3 pos, float bandIndex) {
        // Usar ángulo alrededor del planeta para determinar posición
        float angle = atan(pos.z, pos.x);
        
        // Crear múltiples gaps por banda basados en la seed
        float gapPattern = 1.0;
        
        // 3-5 gaps por banda
        for(float g = 0.0; g < 4.0; g++) {
          float gapSeed = hash(bandIndex * 100.0 + g * 17.0);
          float gapPosition = gapSeed * 6.28318; // Posición aleatoria alrededor del planeta
          float gapWidth = 0.3 + gapSeed * 0.4; // Ancho del gap entre 0.3 y 0.7 radianes
          
          // Crear transición suave para el gap
          float distToGap = abs(angle - gapPosition);
          // Manejar el wrap-around del ángulo
          distToGap = min(distToGap, 6.28318 - distToGap);
          
          if(distToGap < gapWidth) {
            float gapIntensity = smoothstep(0.0, gapWidth, distToGap);
            gapPattern *= gapIntensity;
          }
        }
        
        return gapPattern;
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
            
            // Aplicar gaps/cortes aleatorios a la banda
            float gapMask = createBandGaps(pos, float(i));
            bandIntensity *= gapMask;
            
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
        
        // Hacer las bandas visibles en todo el planeta
        // Solo ajustar ligeramente el brillo basado en la iluminación
        float lightIntensity = max(0.3, dotNL); // Mantener mínimo 30% de visibilidad
        
        // Color de las bandas con transparencia
        vec3 color = bandColor * (0.5 + 0.5 * lightIntensity); // Ajustar brillo del color
        float alpha = bands * opacity; // No multiplicar por lightIntensity
        
        gl_FragColor = vec4(color, alpha);
      }
    `;return new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new f(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new T(1,1,1).normalize()},opacity:{value:e.opacity||.4}},transparent:!0,blending:Oe,side:Ce,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,o=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((n,l)=>{l<5&&(o[l*2]=n.x,o[l*2+1]=n.y)}),new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new f(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:o},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new T(1,1,1).normalize()}},transparent:!0,blending:Oe,side:Ce,depthWrite:!1})}createMetallicSurfaceLayerMaterial(e){const t=`
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normalMatrix * normal; // Transformar normal al espacio de vista
        vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz); // Normal en espacio mundo
        vUv = uv;
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,i=`
      uniform vec3 metalColor;
      uniform float metalness;
      uniform float roughness;
      uniform float fragmentationIntensity;
      uniform float opacity;
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      uniform float time;
      uniform float noiseScale;
      uniform float noiseIntensity;
      uniform float crystalScale;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
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
      
      // Función para crear grietas angulares
      float angularCracks(vec2 uv, float scale, float sharpness) {
        vec2 id = floor(uv * scale);
        vec2 f = fract(uv * scale);
        
        float d = 1.0;
        for(float x = -1.0; x <= 1.0; x++) {
          for(float y = -1.0; y <= 1.0; y++) {
            vec2 neighbor = vec2(x, y);
            vec2 point = hash(vec3(id + neighbor, 0.0)) * vec2(1.0) + neighbor;
            float dist = length(f - point);
            d = min(d, dist);
          }
        }
        
        return pow(1.0 - d, sharpness);
      }
      
      // Función para crear cristales facetados con normales perturbadas
      vec3 crystallineFacets(vec2 uv, float scale, vec3 baseNormal) {
        vec2 id = floor(uv * scale);
        vec2 f = fract(uv * scale);
        
        // Hash para determinar el tipo de cristal en cada celda
        float crystalType = hash(vec3(id, 42.0));
        
        // Crear caras cristalinas angulares
        vec3 facetNormal = baseNormal;
        
        // Determinar orientación del cristal
        float angle1 = hash(vec3(id, 123.0)) * 6.28;
        float angle2 = hash(vec3(id, 456.0)) * 3.14;
        
        // Crear diferentes tipos de cristales facetados más irregulares y pequeños
        if(crystalType < 0.25) {
          // Cristal irregular tipo 1 - formas asimétricas
          float noise1 = hash(vec3(id, 789.0));
          float noise2 = hash(vec3(id, 234.0));
          float irregular1 = sin((f.x + noise1) * 8.0) * cos((f.y + noise2) * 6.0);
          
          vec3 perturbation = vec3(
            cos(angle1 + irregular1) * 0.15,
            sin(angle1 + irregular1) * 0.15,
            irregular1 * 0.1
          );
          
          facetNormal = normalize(baseNormal + perturbation);
          
        } else if(crystalType < 0.5) {
          // Cristal irregular tipo 2 - facetas múltiples
          float facet1 = sin(f.x * 12.0 + angle1) * 0.5 + 0.5;
          float facet2 = cos(f.y * 10.0 + angle2) * 0.5 + 0.5;
          float combined = facet1 * facet2;
          
          vec3 perturbation = vec3(
            (facet1 - 0.5) * 0.2,
            (facet2 - 0.5) * 0.2,
            combined * 0.15
          );
          
          facetNormal = normalize(baseNormal + perturbation);
          
        } else if(crystalType < 0.75) {
          // Cristal irregular tipo 3 - ondulaciones complejas
          float wave1 = sin((f.x + f.y) * 15.0 + angle1);
          float wave2 = cos((f.x - f.y) * 13.0 + angle2);
          float complex = wave1 * wave2 * 0.5 + 0.5;
          
          vec3 perturbation = vec3(
            wave1 * 0.12,
            wave2 * 0.12,
            complex * 0.08
          );
          
          facetNormal = normalize(baseNormal + perturbation);
          
        } else {
          // Cristal irregular tipo 4 - ruido fractal
          float dist = length(f - vec2(0.5));
          float angleNoise = atan(f.y - 0.5, f.x - 0.5) + angle1;
          float fractal = sin(angleNoise * 7.0) * cos(dist * 20.0);
          
          vec3 perturbation = vec3(
            cos(angleNoise + fractal) * 0.18,
            sin(angleNoise + fractal) * 0.18,
            fractal * 0.1
          );
          
          facetNormal = normalize(baseNormal + perturbation);
        }
        
        return facetNormal;
      }
      
      void main() {
        vec3 baseNormal = normalize(vWorldNormal);
        
        // CRISTALES FACETADOS: Perturbar la normal para crear caras cristalinas
        vec3 normal = crystallineFacets(vUv, crystalScale, baseNormal);
        
        // Usar posición de luz si está disponible, sino usar dirección (EXACTAMENTE como en README)
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
        }
        
        // Cálculo de iluminación Lambertiana mejorado (EXACTAMENTE como en README)
        float dotNL = dot(normal, lightDir);
        
        // Suavizar la transición entre día y noche con mejor gradiente (EXACTAMENTE como en README)
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Añadir un poco de retroiluminación (rim lighting) para evitar oscuridad total (EXACTAMENTE como en README)
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Base metálica con variaciones
        vec3 color = metalColor;
        
        // Añadir ruido para variaciones sutiles
        float surfaceNoise = noise3D(vPosition * noiseScale);
        color = mix(color, color * 0.7, surfaceNoise * noiseIntensity);
        
        
        // Fragmentación angular en los bordes (reducida para dar más protagonismo a la purpurina)
        float edgeFactor = 1.0 - abs(dotNL);
        float fragmentation = angularCracks(vUv, 5.0 + fragmentationIntensity * 10.0, 2.0);
        
        // Aplicar fragmentación más suave
        if(edgeFactor > 0.8) {
          color = mix(color, color * 0.5, fragmentation * edgeFactor * 0.3);
        }
        
        // Ondas circulares sutiles en el interior
        float radialWaves = sin(length(vUv - 0.5) * 20.0 + time * 0.5) * 0.5 + 0.5;
        color = mix(color, color * 1.1, radialWaves * 0.1 * (1.0 - edgeFactor));
        
        // REFLEJO METÁLICO: Calcular reflexión especular usando la iluminación correcta del README
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 halfwayDir = normalize(lightDir + viewDir);
        
        // Especular metálico con la posición correcta de la luz
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        float specularStrength = pow(NdotH, mix(4.0, 128.0, 1.0 - roughness));
        vec3 specular = mix(vec3(0.04), color, metalness) * specularStrength;
        
        // Fresnel para bordes metálicos
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
        vec3 fresnelColor = mix(vec3(0.04), color, metalness) * fresnel;
        
        // Aplicar iluminación base con intensidad variable (EXACTAMENTE como en README)
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        vec3 finalColor = color * totalLight;
        
        // Añadir reflejos metálicos SOLO en la parte iluminada
        finalColor += (specular + fresnelColor * 0.5) * dayNight;
        
        // Añadir un toque de color oscuro para profundidad
        finalColor = mix(finalColor, finalColor * 0.5, pow(surfaceNoise, 2.0) * 0.3);
        
        gl_FragColor = vec4(finalColor, opacity);
      }
    `;return new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},metalColor:{value:e.color||new f(8421504)},metalness:{value:e.metalness||.8},roughness:{value:e.roughness||.4},fragmentationIntensity:{value:e.fragmentationIntensity||.5},opacity:{value:e.opacity||.8},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3},crystalScale:{value:e.crystalScale||80}},transparent:!0,blending:Oe,side:Ce,depthWrite:!1})}addToScene(e){this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&e.add(t.mesh)}),this.effectLayers.length}update(e,t){this.effectLayers.forEach(i=>{if(i.material.uniforms.time&&(i.material.uniforms.time.value+=e),t!==void 0&&i.material.uniforms.rotationAngle&&(i.material.uniforms.rotationAngle.value=t),i.layerObject&&i.layerObject.update)try{i.layerObject.update(e,t)}catch(o){console.error(`Error updating layer ${i.name}:`,o)}i.mesh&&i.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof f?e:new f(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}createGenericLayerMaterial(e,t,i,o=!0,n=Oe){return i.lightDirection||(i.lightDirection={value:new T(1,1,1).normalize()}),i.lightPosition||(i.lightPosition={value:new T(0,0,0)}),new ue({vertexShader:e,fragmentShader:t,uniforms:i,transparent:o,blending:n,side:Ce,depthWrite:!1})}convertEffectToLayer(e,t,i=1.001){if(t instanceof ue){const o=t.clone();return o.transparent=!0,o.depthWrite=!1,o.uniforms.lightDirection||(o.uniforms.lightDirection={value:new T(1,1,1).normalize()}),this.addEffectLayer(e,o,i)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}getLayerMeshes(){const e={};return this.effectLayers.forEach(t=>{t.name&&t.mesh&&(e[t.name]=t.mesh)}),e}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const $={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4}};class Ii{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new V(i),n=t.numBands||Math.floor(o.uniform($.NUM_BANDS.min,$.NUM_BANDS.max));this.params={numBands:n,bandPositions:t.bandPositions||this.generateDefaultBandPositions(n,i),bandWidths:t.bandWidths||this.generateDefaultBandWidths(n,i),rotationAngle:t.rotationAngle||o.uniform($.ROTATION_ANGLE.min,$.ROTATION_ANGLE.max),baseColor:t.baseColor||new f(16753920),bandColor:t.bandColor||new f(16747520),animationSpeed:t.animationSpeed||o.uniform($.ANIMATION_SPEED.min,$.ANIMATION_SPEED.max),turbulence:t.turbulence||o.uniform($.TURBULENCE.min,$.TURBULENCE.max),noiseScale:t.noiseScale||o.uniform($.NOISE_SCALE.min,$.NOISE_SCALE.max),opacity:t.opacity||.4,seed:i},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const i=new Array(20).fill(0),o=new V(t+12345);for(let n=0;n<e&&n<20;n++)i[n]=o.uniform($.BAND_POSITIONS.min,$.BAND_POSITIONS.max);return i}generateDefaultBandWidths(e,t){const i=new Array(20).fill(0),o=new V(t+67890);for(let n=0;n<e&&n<20;n++)i[n]=o.uniform($.BAND_WIDTHS.min,$.BAND_WIDTHS.max);return i}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity)}dispose(){}}function Di(s,e,t){const i=e.cloud_bands||{},o=t||Math.floor(Math.random()*1e6),n=new V(o+4e3),l={numBands:i.num_bands||Math.floor(n.uniform($.NUM_BANDS.min,$.NUM_BANDS.max)),bandPositions:i.positions||void 0,bandWidths:i.widths||void 0,rotationAngle:i.rotation||n.uniform($.ROTATION_ANGLE.min,$.ROTATION_ANGLE.max),baseColor:e.base_color?new f().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new f(16753920),bandColor:new f(16777215),animationSpeed:n.uniform($.ANIMATION_SPEED.min,$.ANIMATION_SPEED.max),turbulence:e.turbulence||n.uniform($.TURBULENCE.min,$.TURBULENCE.max),noiseScale:n.uniform($.NOISE_SCALE.min,$.NOISE_SCALE.max),opacity:.4,seed:o};return new Ii(s,l)}const K={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.2,max:.6}};class Ri{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new V(i);this.params={stormCenters:t.stormCenters||this.generateStormCenters(i),stormColor:t.stormColor||new f(9109504),stormIntensity:t.stormIntensity||o.uniform(K.STORM_INTENSITY.min,K.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||o.uniform(K.SPIRAL_SPEED.min,K.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||o.uniform(K.ANIMATION_SPEED.min,K.ANIMATION_SPEED.max),opacity:t.opacity||o.uniform(K.OPACITY.min,K.OPACITY.max),seed:i},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new V(e+5e3),i=Math.floor(t.uniform(K.STORM_COUNT.min,K.STORM_COUNT.max)),o=[];for(let n=0;n<i;n++)o.push({x:t.uniform(K.STORM_CENTERS.min,K.STORM_CENTERS.max),y:t.uniform(K.STORM_CENTERS.min,K.STORM_CENTERS.max)});return o}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function Li(s,e,t){const i=e.storms||{},o=t||Math.floor(Math.random()*1e6),n=new V(o+5e3),l={stormCenters:i.centers||void 0,stormColor:new f(9109504),stormIntensity:i.intensity||e.storm_intensity||n.uniform(K.STORM_INTENSITY.min,K.STORM_INTENSITY.max),spiralSpeed:i.spiral_speed||n.uniform(K.SPIRAL_SPEED.min,K.SPIRAL_SPEED.max),animationSpeed:n.uniform(K.ANIMATION_SPEED.min,K.ANIMATION_SPEED.max),opacity:n.uniform(K.OPACITY.min,K.OPACITY.max),seed:o};return new Ri(s,l)}const le={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class tt{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new V(i),n=t.color instanceof f?t.color:t.color?new f(t.color):new f(9127187);this.params={color:n,roughness:t.roughness||o.uniform(le.ROUGHNESS.min,le.ROUGHNESS.max),rockDensity:t.rockDensity||o.uniform(le.ROCK_DENSITY.min,le.ROCK_DENSITY.max)*10,craterCount:t.craterCount||o.uniform(le.CRATER_COUNT.min,le.CRATER_COUNT.max),opacity:t.opacity||o.uniform(le.OPACITY.min,le.OPACITY.max),seed:i},this.material=new ue({vertexShader:tt.vertexShader,fragmentShader:tt.fragmentShader,uniforms:{time:{value:0},rockColor:{value:n},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new T(1,1,1).normalize()}},transparent:!0,side:Ce,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Oi(s,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),l=new V(n+8e3);return new tt(s,{color:o?new f(o):new f(9127187),roughness:i.roughness||l.uniform(le.ROUGHNESS.min,le.ROUGHNESS.max),rockDensity:i.rock_density||l.uniform(le.ROCK_DENSITY.min,le.ROCK_DENSITY.max)*10,craterCount:i.crater_count||l.uniform(le.CRATER_COUNT.min,le.CRATER_COUNT.max),opacity:l.uniform(le.OPACITY.min,le.OPACITY.max),seed:n})}const ce={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9}};class it{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new V(i),n=t.color instanceof f?t.color:t.color?new f(t.color):new f(11591910);this.params={color:n,iceReflectivity:t.iceReflectivity||o.uniform(ce.ICE_REFLECTIVITY.min,ce.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||o.uniform(ce.FROST_DENSITY.min,ce.FROST_DENSITY.max),crackIntensity:t.crackIntensity||o.uniform(ce.CRACK_INTENSITY.min,ce.CRACK_INTENSITY.max),opacity:t.opacity||o.uniform(ce.OPACITY.min,ce.OPACITY.max),seed:i},this.material=new ue({vertexShader:it.vertexShader,fragmentShader:it.fragmentShader,uniforms:{time:{value:0},iceColor:{value:n},iceReflectivity:{value:this.params.iceReflectivity},frostDensity:{value:this.params.frostDensity},crackIntensity:{value:this.params.crackIntensity},opacity:{value:this.params.opacity},lightDirection:{value:new T(1,1,1).normalize()}},transparent:!0,side:Ce,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function ji(s,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),l=new V(n+6e3);return new it(s,{color:o?new f(o):new f(11591910),iceReflectivity:i.ice_reflectivity||l.uniform(ce.ICE_REFLECTIVITY.min,ce.ICE_REFLECTIVITY.max),frostDensity:i.frost_density||l.uniform(ce.FROST_DENSITY.min,ce.FROST_DENSITY.max),crackIntensity:i.crack_intensity||l.uniform(ce.CRACK_INTENSITY.min,ce.CRACK_INTENSITY.max),opacity:l.uniform(ce.OPACITY.min,ce.OPACITY.max),seed:n})}const J={METALNESS:{min:.5,max:5},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.2,max:.9},CRYSTAL_SCALE:{min:17,max:230}};class Fi{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new V(i),n=t.color instanceof f?t.color:t.color?new f(t.color):new f(8421504);this.params={color:n,metalness:t.metalness||o.uniform(J.METALNESS.min,J.METALNESS.max),roughness:t.roughness||o.uniform(J.ROUGHNESS.min,J.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||o.uniform(J.FRAGMENTATION_INTENSITY.min,J.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||o.uniform(J.OPACITY.min,J.OPACITY.max),seed:i,noiseScale:t.noiseScale||8,noiseIntensity:t.noiseIntensity||.3,crystalScale:t.crystalScale||o.uniform(J.CRYSTAL_SCALE.min,J.CRYSTAL_SCALE.max)},this.material=this.layerSystem.createMetallicSurfaceLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function zi(s,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),l=new V(n+7e3),c=l.uniform(.8,1.2);return new Fi(s,{color:o?new f(o):new f(8421504),metalness:i.metalness||l.uniform(J.METALNESS.min,J.METALNESS.max),roughness:i.roughness||l.uniform(J.ROUGHNESS.min,J.ROUGHNESS.max),fragmentationIntensity:i.fragmentation||l.uniform(J.FRAGMENTATION_INTENSITY.min,J.FRAGMENTATION_INTENSITY.max),opacity:l.uniform(J.OPACITY.min,J.OPACITY.max),seed:n,noiseScale:4*c,noiseIntensity:.3,crystalScale:l.uniform(J.CRYSTAL_SCALE.min,J.CRYSTAL_SCALE.max)})}class kt{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new V(i),this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||50,speed:t.speed||.5,size:t.size||1,opacity:t.opacity||.3,brightness:t.brightness||1,seed:i},this.particleCount=this.params.particleCount,this.geometry=new Me,this.createParticles(e),this.createMaterial(),this.particleSystem=new ot(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),o=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),l=e*1.3;for(let c=0;c<this.particleCount;c++){const d=this.rng.random()*Math.PI*2,r=this.rng.random()*2-1,m=this.rng.random(),p=Math.acos(r),x=l*Math.cbrt(m);t[c*3]=x*Math.sin(p)*Math.cos(d),t[c*3+1]=x*Math.sin(p)*Math.sin(d),t[c*3+2]=x*Math.cos(p),i[c]=this.params.size*(.5+this.rng.random()*.5),o[c]=this.params.speed*(.8+this.rng.random()*.4),n[c]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new ae(t,3)),this.geometry.setAttribute("size",new ae(i,1)),this.geometry.setAttribute("speed",new ae(o,1)),this.geometry.setAttribute("phase",new ae(n,1))}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),t=`
      attribute float size;
      attribute float speed;
      attribute float phase;
      
      varying float vOpacity;
      varying float vPhase;
      
      uniform float time;
      
      void main() {
        vPhase = phase;
        
        // Animación mucho más sutil para evitar patrones de líneas
        vec3 animatedPosition = position;
        float animOffset = time * speed * 0.02 + phase;
        animatedPosition.y += sin(animOffset + phase) * 0.1;
        animatedPosition.x += cos(animOffset * 0.7 + phase * 1.3) * 0.05;
        animatedPosition.z += sin(animOffset * 1.1 + phase * 0.8) * 0.05;
        
        // Calcular opacidad basada en la distancia al centro
        float distanceToCenter = length(position);
        vOpacity = 1.0 - smoothstep(0.0, 30.0, distanceToCenter);
        
        vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
        gl_PointSize = size * (100.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,i=`
      uniform vec3 color;
      uniform float opacity;
      uniform float brightness;
      
      varying float vOpacity;
      varying float vPhase;
      
      void main() {
        // Crear una partícula circular suave
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);
        
        // Gradiente suave desde el centro
        float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
        
        // Añadir un brillo extra en el centro
        float glow = exp(-dist * 4.0);
        
        // Combinar alpha con opacidad variable
        alpha *= vOpacity * opacity;
        
        // Color con brillo
        vec3 finalColor = color * brightness * (1.0 + glow * 2.0);
        
        // Añadir ligera variación de color
        finalColor += vec3(0.1, 0.1, 0.2) * glow;
        
        gl_FragColor = vec4(finalColor, alpha * (0.6 + 0.4 * glow));
      }
    `;this.material=new ue({uniforms:{time:{value:0},color:{value:e},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:t,fragmentShader:i,transparent:!0,blending:at,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;const t=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*t}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f().setRGB(e.color[0],e.color[1],e.color[2]);this.material.uniforms.color.value=t}e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function At(s,e,t){const i=e.streaks||e,o={color:i.color||[.95,.95,1],particleCount:i.particleCount||30,speed:i.speed||.3,size:.8,opacity:.2,brightness:.8,seed:t||Math.floor(Math.random()*1e6)};return new kt(s,o)}const z={STAR_COUNT:{min:150,max:450},MIN_BRIGHTNESS:{min:.4,max:.7},MAX_BRIGHTNESS:{min:.8,max:1},MIN_SIZE:{min:1.2,max:1.8},MAX_SIZE:{min:3.5,max:5},DISTANCE:{min:300,max:600},TWINKLE_SPEED:{min:.002,max:.008}};class He{starSystem;material;geometry;params;starCount;static vertexShader=`
    attribute float size;
    attribute float brightness;
    attribute float twinklePhase;
    
    uniform float time;
    uniform float twinkleSpeed;
    
    varying float vBrightness;
    varying float vTwinkle;
    
    void main() {
      vBrightness = brightness;
      
      // Parpadeo sutil de las estrellas
      vTwinkle = 0.8 + 0.2 * sin(time * twinkleSpeed + twinklePhase);
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Tamaño basado en atributo y distancia - PUNTO MEDIO
      gl_PointSize = size * (300.0 / -mvPosition.z);
    }
  `;static fragmentShader=`
    uniform vec3 starColor;
    
    varying float vBrightness;
    varying float vTwinkle;
    
    void main() {
      // Crear forma circular de estrella
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      // Gradiente circular para efecto de estrella - EQUILIBRADO
      float alpha = (1.0 - dist * 2.0) * vBrightness * vTwinkle;
      alpha = pow(alpha, 1.5); // Balance entre concentración y visibilidad
      alpha *= 1.3; // Intensidad moderada
      
      // Color de estrella con brillo variable - EQUILIBRADO
      vec3 finalColor = starColor * (0.9 + 0.2 * vTwinkle);
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(e,t={}){const i=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6);console.log("🌟 StarFieldEffect - Using seed:",i,"from params:",t.seed);const o=new V(i+1e4);this.params={color:t.color||new f(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(o.uniform(z.STAR_COUNT.min,z.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:o.uniform(z.MIN_BRIGHTNESS.min,z.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:o.uniform(z.MAX_BRIGHTNESS.min,z.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:o.uniform(z.MIN_SIZE.min,z.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:o.uniform(z.MAX_SIZE.min,z.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:o.uniform(z.DISTANCE.min,z.DISTANCE.max),seed:i,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:o.uniform(z.TWINKLE_SPEED.min,z.TWINKLE_SPEED.max)},this.starCount=this.params.starCount,this.geometry=new Me,this.material=this.createMaterial(),this.generateStars(e),this.starSystem=new ot(this.geometry,this.material)}generateStars(e){const t=new Float32Array(this.starCount*3),i=new Float32Array(this.starCount),o=new Float32Array(this.starCount),n=new Float32Array(this.starCount),l=this.params.seed,c=new V(l+1e4);for(let d=0;d<this.starCount;d++){const r=c.uniform(0,2*Math.PI),m=c.uniform(-1,1),p=Math.acos(m),x=this.params.distance*c.uniform(.8,1.2),C=x*Math.sin(p)*Math.cos(r),y=x*Math.sin(p)*Math.sin(r),N=x*Math.cos(p);t[d*3]=C,t[d*3+1]=y,t[d*3+2]=N,i[d]=c.uniform(this.params.minSize,this.params.maxSize),o[d]=c.uniform(this.params.minBrightness,this.params.maxBrightness),n[d]=c.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new ae(t,3)),this.geometry.setAttribute("size",new ae(i,1)),this.geometry.setAttribute("brightness",new ae(o,1)),this.geometry.setAttribute("twinklePhase",new ae(n,1))}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new ue({vertexShader:He.vertexShader,fragmentShader:He.fragmentShader,uniforms:{time:{value:0},starColor:{value:e},twinkleSpeed:{value:this.params.twinkleSpeed}},transparent:!0,blending:at,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.starSystem.position.copy(t),e.add(this.starSystem)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.starColor.value=t}e.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=e.twinkleSpeed)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function ki(s,e){const t=e!==void 0?e:Math.floor(Math.random()*1e6);console.log("🌟 createStarFieldFromPythonData - planetSeed:",e,"final seed:",t);const i=new V(t+1e4),o={color:new f(16777215),starCount:Math.floor(i.uniform(z.STAR_COUNT.min,z.STAR_COUNT.max)),minBrightness:i.uniform(z.MIN_BRIGHTNESS.min,z.MIN_BRIGHTNESS.max),maxBrightness:i.uniform(z.MAX_BRIGHTNESS.min,z.MAX_BRIGHTNESS.max),minSize:i.uniform(z.MIN_SIZE.min,z.MIN_SIZE.max),maxSize:i.uniform(z.MAX_SIZE.min,z.MAX_SIZE.max),distance:i.uniform(z.DISTANCE.min,z.DISTANCE.max),seed:t,twinkleSpeed:i.uniform(z.TWINKLE_SPEED.min,z.TWINKLE_SPEED.max)};return new He(s,o)}class It{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new f(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new nt,this.generateFragments()}generateFragments(){const e=new ze({color:this.params.color instanceof f?this.params.color:new f(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),o=new Ee(i,e);this.positionFragment(o,t),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const n=this.params.size*(Math.random()*.5+.75);o.scale.set(n,n,n),o.userData={rotationAxis:new T(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(o),this.fragments.add(o)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],o=[];o.push(new T(0,0,0));for(let c=0;c<e;c++){const d=c/e*Math.PI*2,r=Math.random()*.5+.5,m=(Math.random()-.5)*.3;o.push(new T(Math.cos(d)*r,Math.sin(d)*r,m))}for(let c=1;c<=e;c++){const r=o[c].clone();r.z+=Math.random()*.4+.2,o.push(r)}for(const c of o)t.push(c.x,c.y,c.z);for(let c=1;c<e;c++)i.push(0,c,c+1);i.push(0,e,1);const n=o.length-e-1;for(let c=0;c<e-1;c++)i.push(n,n+c+2,n+c+1);i.push(n,n+1,n+e);for(let c=0;c<e;c++){const d=c+1,r=(c+1)%e+1,m=d+e,p=r+e;i.push(d,m,r),i.push(r,m,p)}const l=new Me;return l.setAttribute("position",new ft(t,3)),l.setIndex(i),l.computeVertexNormals(),l}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),o=(Math.random()-.5)*this.planetRadius*.5;return new T(Math.cos(t)*i,o,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new T(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new T(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const o=t.userData;t.rotateOnAxis(o.rotationAxis,o.rotationSpeed*e*this.params.animationSpeed);const n=Math.sin(Date.now()*.001+i)*.001;t.position.y+=n*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof ze&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof ze&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof pt&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof pt&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function Je(s){const e=s.replace("#",""),t=parseInt(e.substr(0,2),16)/255,i=parseInt(e.substr(2,2),16)/255,o=parseInt(e.substr(4,2),16)/255;return new f(t,i,o)}function ht(s){return s.length>=3?new f(s[0],s[1],s[2]):new f(.5,.5,.5)}function Ye(s){if(s.ocean_color){if(typeof s.ocean_color=="string")return Je(s.ocean_color);if(Array.isArray(s.ocean_color))return ht(s.ocean_color)}if(s.planet_info?.base_color){if(typeof s.planet_info.base_color=="string")return Je(s.planet_info.base_color);if(Array.isArray(s.planet_info.base_color))return ht(s.planet_info.base_color)}if(s.base_color){if(typeof s.base_color=="string")return Je(s.base_color);if(Array.isArray(s.base_color))return ht(s.base_color)}const e=s.planet_info?.type||s.type||"Unknown";return Ui(e)}function Ui(s){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[s]||"#FFFFFF";return Je(t)}class Ze{material;params;oceanLayerMesh;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new f(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new f(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new f(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof f?this.params.landmassColor:new f(this.params.landmassColor),t=this.params.foamColor instanceof f?this.params.foamColor:new f(this.params.foamColor),i=this.params.oceanColor instanceof f?this.params.oceanColor:new f(this.params.oceanColor);return new ue({vertexShader:Ze.vertexShader,fragmentShader:Ze.fragmentShader,uniforms:{time:{value:0},baseColor:{value:i},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:i}}})}apply(e){this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const i=new Ee(t,this.material);i.position.copy(e.position),i.rotation.copy(e.rotation),this.oceanLayerMesh=i}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const i=e[t];if(i!==void 0&&this.material.uniforms[t])if(i instanceof f||Array.isArray(i)){const o=i instanceof f?i:new f(i);this.material.uniforms[t].value=o}else this.material.uniforms[t].value=i})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh)):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function Bi(s){const e=Ye(s),t=[e.r,e.g,e.b];let i=.3,o=2,n=8,l=.3,c=.2;if(s.seeds){const r=s.seeds.shape_seed,p=(x=>{let C=x;return()=>(C=(C*1664525+1013904223)%4294967296,C/4294967296)})(r);i=.2+p()*.3,o=1.5+p()*1.5,n=6+p()*6,l=.25+p()*.15,c=.15+p()*.1}const d={waveIntensity:i,waveSpeed:o,waveScale:n,landmassThreshold:l,deepOceanThreshold:c,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new f(.9,.9,1),foamIntensity:.4,oceanColor:t};return new Ze(d)}class Ut{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new nt,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,o=t*Math.cos(i),n=t*Math.sin(i),l=n*.8,c=new Me,d=new Float32Array([0,0,0,o,l,n]);c.setAttribute("position",new ae(d,3));const r=new St({color:16776960,linewidth:5,transparent:!1});this.sunLine=new wt(c,r),this.debugGroup.add(this.sunLine);const m=e+Math.PI,p=t*.7,x=p*Math.cos(m),C=0,y=p*Math.sin(m),N=new st(this.planetRadius*.15,16,16),w=new Ot({color:16776960,transparent:!1,opacity:1}),_=new Ee(N,w);_.position.set(x,C,y),this.debugGroup.add(_),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new Me,o=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new ae(o,3));const n=new St({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new wt(i,n),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,o=this.params.initialAngleRotation||0,n=e-t,l=2*Math.PI/i;return(o+n*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,o=this.sunLine.geometry,n=o.attributes.position.array;n[3]=i*Math.cos(t),n[4]=0,n[5]=i*Math.sin(t),o.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,o=i.attributes.position.array;o[0]=-t*Math.cos(e),o[1]=0,o[2]=-t*Math.sin(e),o[3]=t*Math.cos(e),o[4]=0,o[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function Gi(s,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:s.debug?.cosmic_origin_time||s.timing?.cosmic_origin_time||s.cosmicOriginTime,rotationPeriod:s.planet_info?.rotation_period||s.rotation_period_seconds||86400,initialAngleRotation:s.debug?.initial_angle_rotation||s.timing?.initial_angle_rotation||s.initialAngleRotation||0,planetRadius:e,orbitalAngle:s.timing?.orbital_angle||0,sunAngle:s.sun_angle||s.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new Ut(e,t)}const Yi=!1;class je{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return je.instance||(je.instance=new je),je.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new We(t,e),fromPythonData:(e,t)=>Nt(t,e.atmosphere||{})}),this.registerEffect("atmosphere_clouds",{create:(e,t)=>new ke(t,e),fromPythonData:(e,t)=>mt(t,e.surface_elements||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new kt(t,e),fromPythonData:(e,t)=>At(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new Ve(t,e),fromPythonData:(e,t)=>Ai(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new Ft(t,e),fromPythonData:(e,t)=>Pi(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new It(t,e),fromPythonData:(e,t)=>new It(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("land_masses",{create:(e,t)=>new zt(t,e),fromPythonData:(e,t)=>Pt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("ocean_waves",{create:(e,t)=>new Ze(e),fromPythonData:(e,t)=>Bi(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("star_field",{create:(e,t)=>new He(t,e),fromPythonData:(e,t)=>ki(t,e.seeds?.planet_seed||e.planet_seed)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new Ut(t,e),fromPythonData:(e,t)=>Gi(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,o,n=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const c=l.create(t,i,o);if(!c)return null;const d={id:`effect_${this.nextId++}`,type:e,effect:c,priority:n,enabled:!0};return this.effects.set(d.id,d),d}catch(c){return console.error(`Error creating effect '${e}':`,c),null}}createEffectFromPythonData(e,t,i,o,n=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,i,o,n);try{const c=l.fromPythonData(t,i,o);if(!c)return null;const d={id:`effect_${this.nextId++}`,type:e,effect:c,priority:n,enabled:!0};return this.effects.set(d.id,d),d}catch(c){return console.error(`Error creating effect '${e}' from Python data:`,c),null}}createEffectsFromList(e,t,i){const o=[],n=e.sort((l,c)=>(l.priority||0)-(c.priority||0));for(const l of n){const c=this.createEffect(l.type,l.params,t,i,l.priority);c&&(c.enabled=l.enabled!==!1,o.push(c))}return o}createEffectsFromPythonPlanetData(e,t,i,o,n){const l=[];try{const c=Ye(e);if(n?this.layerSystem=n:this.layerSystem=new $e(i,c),e.surface_elements){const d=e.surface_elements;if(d.effects_3d&&Array.isArray(d.effects_3d))for(const r of d.effects_3d){if(r.type==="atmospheric_streaks"){const p=At(t,r.params,e.seeds?.shape_seed+3e3),x={id:`effect_${this.nextId++}`,type:"atmospheric_streaks",effect:p,priority:r.priority||0,enabled:!0,name:"Atmospheric Streaks"};this.effects.set(x.id,x),l.push(x),p.addToScene(o,i.position);continue}const m=this.createEffect(r.type,r.params,t,i,r.priority||0);m?(m.name=r.type.replace(/_/g," ").replace(/\b\w/g,p=>p.toUpperCase()),l.push(m),m.effect.apply&&m.effect.apply(i),m.effect.addToScene&&m.effect.addToScene(o,i.position)):console.error("❌ FALLO AL CREAR EFECTO:",r.type)}switch(d.type){case"gas_giant":if(this.layerSystem){const r=Di(this.layerSystem,{...d,base_color:c,turbulence:e.turbulence||d.turbulence},e.seeds?.shape_seed||e.seeds?.planet_seed||e.seeds?.planet_seed),m=Li(this.layerSystem,{...d,base_color:c,storm_intensity:e.storm_intensity||d.storm_intensity},(e.seeds?.shape_seed||e.seeds?.planet_seed)+1e3),p={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:r,priority:0,enabled:!0};this.effects.set(p.id,p),l.push(p);const x={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:m,priority:1,enabled:!0};this.effects.set(x.id,x),l.push(x)}else console.error("❌ PlanetLayerSystem not initialized!");break;case"metallic":case"metallic_3d":if(this.layerSystem){const r=zi(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),m={id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:r,priority:0,enabled:!0};this.effects.set(m.id,m),l.push(m)}break;case"rocky":if(this.layerSystem){const r=Oi(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),m={id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:r,priority:0,enabled:!0};if(this.effects.set(m.id,m),l.push(m),d.clouds&&d.clouds.length>0){const p=mt(t,d,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),x={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:p,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(x.id,x),l.push(x),p.addToScene(o,i.position)}}break;case"icy":if(this.layerSystem){const r=ji(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),m={id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:r,priority:0,enabled:!0};this.effects.set(m.id,m),l.push(m)}break;case"oceanic":if(d.green_patches&&d.green_patches.length>0){const r=Pt(t,d,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(r){const m={id:`effect_${this.nextId++}`,type:"land_masses",effect:r,priority:5,enabled:!0,name:"Land Masses (Islands)"};this.effects.set(m.id,m),l.push(m),r.addToScene(o,i.position)}}if(d.clouds&&d.clouds.length>0){const r=mt(t,d,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),m={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:r,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(m.id,m),l.push(m),r.addToScene(o,i.position)}break;default:if(i.material instanceof ze){const r=Ye(e);i.material.color.copy(r)}break}}else if(i.material instanceof ze){const d=Ye(e);i.material.color.copy(d)}if(e.atmosphere){if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const d=Nt(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(d){const r={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:d,priority:20,enabled:!0};this.effects.set(r.id,r),l.push(r),d.addToScene(o,i.position)}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const d=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),r={...e.atmosphere};d==="oceanic"&&(r.opacity=Math.min(r.opacity||.3,.15),r.width=Math.min(r.width||15,8));const m=this.createEffectFromPythonData("atmosphere",r,t,i,5);m&&(l.push(m),m.effect.addToScene(o,i.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){const d=this.createEffectFromPythonData("ring_system",e,t,i,1);d?(l.push(d),d.effect.addToScene(o,i.position)):console.warn("⚠️ Failed to create ring effect")}if(e.surface_elements?.has_fragmentation_zones){const d=this.createEffectFromPythonData("fragmentation",e,t,i,5);d&&(l.push(d),d.effect.addToScene(o,i.position))}this.layerSystem&&this.layerSystem.addToScene(o);try{const d=this.createEffectFromPythonData("star_field",e,t,i,-100);d&&d.effect&&(d.effect.addToScene(o,i.position),l.push(d),console.log("⭐ StarField added automatically using planet seed:",e.seeds?.planet_seed))}catch(d){console.warn("Could not create StarField:",d)}return l.forEach((d,r)=>{}),l.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),l}catch(c){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",c),c}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);if(i){i.enabled=t!==void 0?t:!i.enabled;const o=i.effect;if(o&&o.getObject3D){const n=o.getObject3D();n&&(n.visible=i.enabled)}if(this.layerSystem){const n=this.layerSystem.getLayerMeshes(),c={cloud_bands_layer:"cloudBands",cloud_gyros_layer:"cloudGyros",metallic_surface_layer:"metallicSurface",rocky_terrain_layer:"rockyTerrain",icy_terrain_layer:"icyTerrain"}[i.type];c&&n[c]&&(n[c].visible=i.enabled)}}else console.warn(`⚠️ Effect not found: ${e}`)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(o){console.error(`Error updating effect ${i.type}:`,o)}}updateLightForAllEffects(e){this.layerSystem&&this.layerSystem.updateFromThreeLight(e);for(const t of this.effects.values())if(t.enabled&&t.effect.updateFromThreeLight)try{t.effect.updateFromThreeLight(e)}catch(i){console.error(`Error updating light for effect ${t.type}:`,i)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear(),this.nextId=1}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const we=je.getInstance(),Re={atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function Vi(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"atmosphere",params:{...Re.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:Re.cloud_bands,priority:0},{type:"cloud_gyros",params:Re.cloud_gyros,priority:1},{type:"atmosphere",params:{...Re.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:Re.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...Re.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const _e={log:(s,e)=>{},warn:(s,e)=>{console.warn(`[Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`[Effects] ${s}`,e||"")},debug:(s,e)=>{}};new Date().toISOString();const Wi=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[i,o]=v.useState([]),[n,l]=v.useState({});v.useEffect(()=>{if(!s)return;const r=c(s);l(r),o(d(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=r)},[s,e]);function c(r){const m={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(r.planet_info&&r.surface_elements?m.hasValidStructure=!0:(r.planet_info||m.missingFields.push("planet_info"),r.surface_elements||m.missingFields.push("surface_elements")),r.surface_elements?.type==="oceanic"&&(m.oceanicData={hasAbstractLands:!!r.surface_elements.abstract_lands?.length,numGreenPatches:r.surface_elements.green_patches?.length||0,numClouds:r.surface_elements.clouds?.length||0,hasDepths:r.surface_elements.depths?.enabled||!1,baseColorIsBlue:r.planet_info?.base_color==="#0000FF",greenPatchColor:r.surface_elements.green_patches?.[0]?.color,issues:[]},m.oceanicData.numGreenPatches>15&&m.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),m.oceanicData.baseColorIsBlue||m.oceanicData.issues.push(`Color base no es azul puro: ${r.planet_info?.base_color}`),m.renderingIssues=m.oceanicData.issues),r.planet_info?.base_color&&r.planet_info?.type){const x={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[r.planet_info.type];x&&r.planet_info.base_color!==x?m.colorConsistency=`Inconsistente: esperado ${x}, recibido ${r.planet_info.base_color}`:m.colorConsistency="Correcto"}return m}function d(r){const m=[];if(!r.surface_elements?.type)return["No surface type defined"];const p=r.surface_elements.type.toLowerCase();switch(p){case"oceanic":m.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":m.push("RockyTerrainEffect");break;case"icy":m.push("IcyTerrainEffect");break;case"gas giant":m.push("GasGiantBandsEffect");break;default:m.push(`Generic effect for type: ${p}`)}return r.atmosphere?.density>0&&m.push("AtmosphericEffect"),r.rings&&m.push("RingSystemEffect"),m}return t?a.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[a.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),a.jsxs("div",{style:{marginBottom:"10px"},children:[a.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,a.jsx("br",{}),a.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,a.jsx("br",{}),a.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&a.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[a.jsx("strong",{children:"🌊 Oceanic Data:"}),a.jsx("br",{}),a.jsxs("span",{style:{color:n.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",n.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),a.jsx("br",{}),"Green Patches: ",n.oceanicData?.numGreenPatches,a.jsx("br",{}),"Clouds: ",n.oceanicData?.numClouds,a.jsx("br",{}),"Has Depths: ",n.oceanicData?.hasDepths?"Yes":"No",a.jsx("br",{}),n.oceanicData?.issues?.length>0&&a.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",a.jsx("br",{}),n.oceanicData.issues.map((r,m)=>a.jsxs("div",{children:["- ",r]},m))]})]}),a.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[a.jsx("strong",{children:"🎨 Effects Applied:"}),a.jsx("br",{}),i.map((r,m)=>a.jsxs("div",{style:{color:r.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",r]},m))]}),a.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function $i(s){v.useEffect(()=>{if(s&&s.surface_elements?.type==="oceanic"){s.surface_elements.green_patches?.length>0;const e=s.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[s])}const et=2.5,Dt=()=>{const s=45*Math.PI/180;return et/(Math.tan(s/2)*.5)},Hi=({planetName:s,containerClassName:e="",width:t=800,height:i=600,autoRotate:o=!0,enableControls:n=!0,showDebugInfo:l=!1,planetData:c,cosmicOriginTime:d,initialAngleRotation:r,onDataLoaded:m,onEffectsCreated:p,onError:x})=>{const C=v.useRef(null),y=v.useRef(null),N=v.useRef(null),w=v.useRef(null),_=v.useRef(null),S=v.useRef(null),W=v.useRef(new ai),Z=v.useRef(null),ge=v.useRef(0),A=v.useRef(null),[q,Q]=v.useState(!0),[U,ne]=v.useState(null),[g,X]=v.useState(null),[B,re]=v.useState([]),[ee,M]=v.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),P=v.useRef([]),R=v.useRef(0),L=v.useRef(null),I=v.useRef(null),oe=Math.floor(Date.now()/1e3),[ve,ye]=v.useState(0),G=d||g?.timing?.cosmic_origin_time||Date.now()/1e3-3600,de=oe-G+ve;ge.current=de;const te=v.useCallback(()=>{if(!C.current||!N.current||!w.current)return;const h=C.current,b=h.clientWidth||400,u=h.clientHeight||400;N.current.setSize(b,u),w.current.aspect=b/u,w.current.updateProjectionMatrix()},[]),me=async h=>{if(!(!_.current||!y.current||!I.current)){_e.log("Applying modular effects from API data",{planet:h.planet_info.name,type:h.planet_info.type});try{Be();const b=Ye(h);I.current.updateBaseColor(b);const u=we.createEffectsFromPythonPlanetData(h,et,_.current,y.current,I.current);console.log(`Planet: ${h.planet_info?.name}, Effects:`,u.map(E=>E.type)),re(u),P.current=u,p&&p(u),_e.log(`Successfully applied ${u.length} modular effects`),lt()}catch(b){_e.error("Error applying modular effects",b),De()}}},xe=v.useCallback(()=>{if(!C.current)return!1;try{for(;C.current.firstChild;)C.current.removeChild(C.current.firstChild);y.current=null,w.current=null,N.current=null,_.current=null,H.current=null;const h=C.current,b=h.clientWidth||t||400,u=h.clientHeight||i||400,E=new ni;E.background=new f(1297),y.current=E;const Y=new ri(45,b/u,.1,1e4),j=Dt();Y.position.set(0,0,j),Y.lookAt(0,0,0),w.current=Y;const D=new li({antialias:!0,alpha:!0,powerPreference:"high-performance"});return D.setSize(b,u),D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.shadowMap.enabled=!0,D.shadowMap.type=ci,D.toneMapping=di,D.toneMappingExposure=1.2,D.outputColorSpace=mi,C.current.appendChild(D.domElement),N.current=D,Xe(E,null),Ne(E),n&&Pe(Y,D.domElement),!0}catch(h){return console.error("Error initializing Three.js:",h),!1}},[g,c,d]),Te=h=>{if(!h)return 0;const b=h.sun_angle||h.lighting?.sun_angle;if(b!==void 0)return b;const u=h.timing?.current_orbital_angle||h.timing?.orbital_angle;return u??0},se=v.useRef(null),be=v.useRef(null),he=v.useRef(null),H=v.useRef(null),Ue=h=>{h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=.5,h.shadow.camera.far=50,h.shadow.camera.left=-10,h.shadow.camera.right=10,h.shadow.camera.top=10,h.shadow.camera.bottom=-10},Ie=h=>{if(!se.current||!y.current)return;const b=Te(h),u=10,E=b+Math.PI,Y=Math.sin(b)*5,j=u*Math.cos(E),D=Y,Ae=u*Math.sin(E);se.current.position.set(j,D,Ae),se.current.target.position.set(0,0,0),y.current.children.includes(se.current.target)||y.current.add(se.current.target),be.current&&be.current.position.set(-j*.5,0,-Ae*.5),I.current&&se.current&&I.current.updateFromThreeLight(se.current),se.current&&we.updateLightForAllEffects(se.current)},Xe=(h,b)=>{{const u=new Et(16777215,2);u.position.set(-10,5,10),u.target.position.set(0,0,0),u.castShadow=!0,Ue(u),h.add(u),h.add(u.target),se.current=u;const E=new Et(16777215,.05);E.position.set(8,-3,-5),h.add(E),be.current=E;const Y=new hi(2236996,.1);h.add(Y),setTimeout(()=>{I.current&&u&&I.current.updateFromThreeLight(u),u&&we.updateLightForAllEffects(u)},50);return}},Ne=h=>{const b=new st(et,128,64),u=new Ot({color:8421504}),E=new Ee(b,u);E.castShadow=!0,E.receiveShadow=!0,E.position.set(0,0,0),h.add(E),_.current=E;const Y=new f(8421504);I.current=new $e(E,Y),I.current.addToScene(h)},Pe=(h,b)=>{const u=new gi(h,b);u.enableDamping=!0,u.dampingFactor=.05;const E=Dt();u.minDistance=E*.5,u.maxDistance=E*2,u.autoRotate=o,u.autoRotateSpeed=.5,u.enablePan=!0,u.enableZoom=!0,u.target.set(0,0,0),S.current=u},rt=v.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{Q(!0),ne(null),_e.log("Loading planet data from API",{planetName:s});const b=await fetch("/api/planet/rendering-data");if(!b.ok)throw new Error(`HTTP error! status: ${b.status}`);const u=await b.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const E=u.planet_data,Y=u.timing,j=u.rendering_data,D={planet_info:j?.planet_info||{name:E.name,type:E.planet_type,base_color:"#808080",radius:E.diameter/15e3,orbital_radius:E.orbital_radius},surface_elements:j?.surface_elements,atmosphere:j?.atmosphere,rings:j?.rings,effects_3d:j?.effects_3d,shader_uniforms:j?.shader_uniforms,universal_actions:j?.universal_actions,timing:{cosmic_origin_time:Y.cosmic_origin_time,current_time_seconds:Y.current_time_seconds,elapsed_time:Y.elapsed_time,initial_orbital_angle:E.initial_orbital_angle,current_orbital_angle:E.current_orbital_angle,max_orbital_radius:Y.max_orbital_radius,system_max_orbital_radius:E.system_max_orbital_radius},original_planet_data:E,seeds:j?.seeds};return X(D),A.current=D,_e.log("API data loaded successfully",{planet:D.planet_info.name,type:D.planet_info.type,hasEffects:!!D.surface_elements,fullRenderingData:j}),m&&m(D),D}catch(h){const b=h instanceof Error?h.message:"Unknown error";return ne(b),x&&x(b),null}finally{Q(!1),window.isLoadingPlanetData=!1}}},[s,m,x]);v.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{Q(!0),ne(null),_e.log("Loading planet data from API",{planetName:s});const b=await fetch("/api/planet/rendering-data");if(!b.ok)throw new Error(`HTTP error! status: ${b.status}`);const u=await b.json();if(!u.success)throw new Error(u.error||"Failed to fetch planet data");const E=u.planet_data,Y=u.timing,j=u.rendering_data,D={planet_info:j?.planet_info||{name:E.name,type:E.planet_type,base_color:"#808080",radius:E.diameter/15e3,orbital_radius:E.orbital_radius},surface_elements:j?.surface_elements,atmosphere:j?.atmosphere,rings:j?.rings,effects_3d:j?.effects_3d,shader_uniforms:j?.shader_uniforms,universal_actions:j?.universal_actions,timing:{cosmic_origin_time:Y.cosmic_origin_time,current_time_seconds:Y.current_time_seconds,elapsed_time:Y.elapsed_time,initial_orbital_angle:E.initial_orbital_angle,current_orbital_angle:E.current_orbital_angle,max_orbital_radius:Y.max_orbital_radius,system_max_orbital_radius:E.system_max_orbital_radius},original_planet_data:E,seeds:j?.seeds};X(D),A.current=D,_e.log("API data loaded successfully",{planet:D.planet_info.name,type:D.planet_info.type,hasEffects:!!D.surface_elements,fullRenderingData:j}),Ie(D),H.current&&y.current&&(y.current.remove(H.current),H.current.geometry.dispose(),H.current.material.dispose(),H.current=null),await me(D),m&&m(D)}catch(h){const b=h instanceof Error?h.message:"Unknown error";ne(b),x&&x(b),De()}finally{Q(!1),window.isLoadingPlanetData=!1}}},[s,c,d,r]);const Ke=v.useCallback(()=>{if(!g||!_.current)return;const h=c?.orbital_period_seconds||365.25*24*3600,b=2*Math.PI/h,u=g.timing?.initial_orbital_angle||0,E=Date.now()/1e3,Y=0,j=d||g.timing?.cosmic_origin_time||Date.now()/1e3-3600,D=E-j+Y,Ae=(u+D*b)%(2*Math.PI),ct=g.timing?.max_orbital_radius||100,qe=20+g.planet_info?.orbital_radius/ct*80,Bt=qe,Gt=qe*Math.cos(Ae),Yt=Bt*Math.sin(Ae);_.current.position.x=Gt,_.current.position.z=Yt,_.current.position.y=0},[g,c,d]),Se=v.useCallback(async h=>{const b=h||g;if(b&&y.current)try{Ie(b),H.current&&y.current&&(y.current.remove(H.current),H.current.geometry.dispose(),H.current.material.dispose(),H.current=null),await me(b)}catch(u){_e.error("Error in applyProceduralShadersFromAPI:",u),De()}},[g]),De=()=>{if(!(!y.current||!_.current)){_e.warn("Applying fallback effects for planet type:",c?.planet_type);try{Be(),_.current.material instanceof ze&&_.current.material.color.setHex(6710886);try{const h=Vi("generic"),b=we.createEffectsFromList(h,et,_.current);b.forEach(u=>{u.effect.addToScene&&y.current&&_.current&&u.effect.addToScene(y.current,_.current.position)}),P.current=b,re(b)}catch(h){console.warn("Could not create fallback effects, using basic material only:",h)}lt()}catch(h){_e.error("Error applying fallback effects",h)}}},Be=()=>{we.clearAllEffects(),P.current.forEach(h=>{try{h.effect.dispose&&h.effect.dispose()}catch{}}),P.current=[],re([])},vt=v.useCallback(()=>{Z.current=requestAnimationFrame(vt);const h=performance.now(),b=W.current.getDelta();S.current&&S.current.update();try{we.updateAllEffects(b,_.current?.rotation.y)}catch{}if(_.current&&A.current){A.current.planet_info?.name;const u=A.current.original_planet_data,E=u?.orbital_period_seconds||365.25*24*3600,Y=A.current.timing?.initial_orbital_angle||0;d||A.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const j=u?.axial_tilt||0,D=2*Math.PI/E;(Y+ge.current*D)%(2*Math.PI);const Ae=A.current.timing?.max_orbital_radius||A.current.timing?.system_max_orbital_radius,ct=u?.orbital_radius;if(!Ae||!ct)return;u?.eccentricity_factor,_.current.position.set(0,0,0);const yt=u?.rotation_period_seconds||86400,qe=2*Math.PI/yt;_.current.rotation.y=ge.current*qe%(2*Math.PI),_.current.rotation.z=j*(Math.PI/180)}if(P.current.forEach(u=>{u.effect.updateUniforms&&u.effect.updateUniforms(b)}),N.current&&y.current&&w.current){const u=performance.now();N.current.render(y.current,w.current);const E=performance.now()-u;if(h-R.current>5e3){const Y=1e3/(h-R.current);lt(),M(j=>({...j,frameRate:Math.round(Y),renderTime:Math.round(E*100)/100})),R.current=h}}},[]),lt=v.useCallback(()=>{const h=we.getStats();M(b=>({...b,activeEffects:h.activeEffects,enabledEffects:h.enabledEffects}))},[]);return v.useEffect(()=>{let h=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!h)return;const u=await rt();if(!h)return;if(!xe()){h&&ne("Failed to initialize 3D renderer");return}if(!h||(vt(),C.current&&"ResizeObserver"in window&&(L.current=new ResizeObserver(te),L.current.observe(C.current)),window.addEventListener("resize",te),!h))return;u?await Se(u):De()}catch(u){h&&ne(u instanceof Error?u.message:"Unknown initialization error")}})(),()=>{if(h=!1,A.current=null,Z.current&&cancelAnimationFrame(Z.current),L.current&&L.current.disconnect(),window.removeEventListener("resize",te),Be(),I.current&&(I.current.dispose(),I.current=null),S.current&&S.current.dispose(),he.current&&y.current&&(y.current.remove(he.current),he.current.geometry.dispose(),he.current.material.dispose(),he.current=null),H.current&&y.current&&(y.current.remove(H.current),H.current.geometry.dispose(),H.current.material.dispose(),H.current=null),N.current&&C.current)try{C.current.contains(N.current.domElement)&&C.current.removeChild(N.current.domElement),N.current.dispose()}catch{}}},[]),v.useEffect(()=>{const h=setInterval(()=>{const b=we.getStats();M(u=>({...u,activeEffects:b.activeEffects,enabledEffects:b.enabledEffects}))},1e4);return()=>clearInterval(h)},[]),v.useEffect(()=>{g&&y.current&&_.current&&Ke()},[g,Ke]),$i(g),a.jsxs("div",{className:`relative ${e}`,children:[l&&g&&a.jsx(Wi,{planetData:g,showInPage:!0,showInConsole:!0}),a.jsx("div",{ref:C,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),q&&a.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:a.jsxs("div",{className:"text-white text-center",children:[a.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),a.jsx("div",{children:"Loading planet..."})]})}),U&&a.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[a.jsx("strong",{children:"Error:"})," ",U]}),g&&!q&&a.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[a.jsx("h3",{className:"text-lg font-bold",children:g.planet_info.name}),a.jsx("p",{className:"text-sm opacity-80",children:g.planet_info.type}),a.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[B.length," effects active"]}),g.surface_elements?.description&&a.jsx("p",{className:"text-xs mt-2 opacity-60",children:g.surface_elements.description.appearance})]}),l&&a.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[a.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),a.jsxs("div",{children:["Frame Rate: ",ee.frameRate," FPS"]}),a.jsxs("div",{children:["Render Time: ",ee.renderTime,"ms"]}),a.jsxs("div",{children:["Active Effects: ",ee.activeEffects]}),a.jsxs("div",{children:["Enabled Effects: ",ee.enabledEffects]}),a.jsxs("div",{className:"mt-2",children:[a.jsx("div",{className:"font-semibold",children:"Effects:"}),B.map(h=>a.jsxs("div",{className:"ml-2",children:[h.type," (",h.enabled?"ON":"OFF",")"]},h.id))]})]})]})};class Zi extends Rt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?a.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:a.jsxs("div",{className:"text-center p-4",children:[a.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),a.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const Xi=s=>a.jsx(Zi,{children:a.jsx(Hi,{...s})}),Ki=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:o,onEffectsCreated:n,effects:l,onToggleEffect:c})=>{const d=v.useRef(null),r=v.useRef(null),[m,p]=v.useState("Aligning Stargate..."),[x,C]=v.useState(!1),[y,N]=v.useState(!1),[w,_]=v.useState(!1),[S,W]=v.useState(!0),[Z,ge]=v.useState(!0),[A,q]=v.useState(null),[Q,U]=v.useState(null);v.useEffect(()=>{l&&c&&l.forEach(g=>{we.toggleEffect(g.id,g.enabled)})},[l]),v.useEffect(()=>{const g=document.createElement("style");return g.textContent=`
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
    `,document.head.appendChild(g),()=>{document.head.removeChild(g)}},[]),v.useEffect(()=>{const g=d.current;if(!g)return;const X=g.getContext("2d");if(!X)return;let B=[];const re=800;let ee,M;const P=800;let R,L=.5;function I(){const G=g?.parentElement;if(!G||!g)return;const de=G.clientWidth,te=G.clientHeight;g.width=Math.min(de,P),g.height=Math.min(te,P),ee=g.width/2,M=g.height/2}function oe(){I(),B=[];for(let G=0;G<re;G++)B.push({x:Math.random()*(g?.width||800),y:Math.random()*(g?.height||800),z:Math.random()*(g?.width||800),o:Math.random()});ve()}function ve(){!g||!X||(X.clearRect(0,0,g.width,g.height),B.forEach(G=>{G.z-=L,G.z<=0&&(G.z=g.width,G.x=Math.random()*g.width,G.y=Math.random()*g.height,G.o=Math.random());const de=g.width/G.z,te=(G.x-ee)*de+ee,me=(G.y-M)*de+M,xe=2*de;X.beginPath(),X.fillStyle=`rgba(255, 255, 255, ${G.o})`,X.arc(te,me,xe,0,2*Math.PI),X.fill()}),L<60&&(L+=1),R=requestAnimationFrame(ve))}oe();const ye=()=>I();return window.addEventListener("resize",ye),()=>{window.removeEventListener("resize",ye),R&&cancelAnimationFrame(R)}},[]),v.useEffect(()=>{if(e&&!S){const g=new Image;g.onload=()=>{r.current&&(r.current.src=e,N(!0),_(!0))},g.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{N(!0),_(!0)},1500)},g.src=e}else(S||!e)&&setTimeout(()=>{N(!0),_(!0)},1500)},[e,S]),v.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){p("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),C(!0);const X=(P,R)=>Array.from({length:R},()=>P[Math.floor(Math.random()*P.length)]).join(""),B=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let re=0,ee=0;const M=()=>{if(re>=B.length){const R="Stargate system aligned";let L=0;p("");const I=()=>{L<R.length?(p(R.substring(0,L+1)),L++,setTimeout(I,30)):C(!1)};I();return}const P=B[re];p(X(P.chars,32)),ee++,ee>=P.iterations&&(re++,ee=0),setTimeout(M,P.duration)};M()},[]);const ne=()=>{W(!S),S||(N(!0),_(!0))};return a.jsxs("div",{className:"h-full flex flex-col",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),Z&&a.jsx("div",{className:"flex items-center gap-2",children:a.jsx("button",{onClick:ne,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${S?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:S?"2D View":"3D View"})})]}),a.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[a.jsx("canvas",{ref:d,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${w?"opacity-0":"opacity-100"}`,style:{filter:w?"blur(50px)":"none"}}),S&&y&&t&&a.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${y?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:a.jsx(Xi,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,onEffectsCreated:n,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:o,onDataLoaded:g=>{q(g)},onError:g=>{U(g),console.error("❌ Planet rendering error:",g)}})}),!S&&a.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${y?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:y&&e?a.jsx("div",{className:"w-full h-full flex items-center justify-center",children:a.jsx(Zt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:a.jsx("img",{ref:r,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):a.jsx("img",{ref:r,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),Z&&a.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:S?"🌍 3D":"🖼️ 2D"})]}),a.jsxs("div",{className:"text-center mt-auto",children:[a.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${x?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[a.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[a.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:a.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),m]}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),a.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",S&&A&&a.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",A.planet_info?.type," Planet",A.atmosphere&&a.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),A.rings?.has_rings&&a.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),S&&Q&&a.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},qi=({currentPlanet:s,system:e,galaxy:t,systemPlanets:i})=>{const[o,n]=v.useState(null),[l,c]=v.useState(null),[d,r]=v.useState(!1),[m,p]=v.useState(!1),[x,C]=v.useState(!0);v.useEffect(()=>{if(i&&i.length>0){const w=i.findIndex(_=>_.name.toLowerCase()===s.toLowerCase());w!==-1?(w>0?(n(i[w-1].name.toLowerCase()),r(!0)):e.index>0?(n("__prev_system__"),r(!0)):r(!1),w<i.length-1?(c(i[w+1].name.toLowerCase()),p(!0)):(c("__next_system__"),p(!0))):(r(!1),p(!1))}else r(!1),p(!1);C(!1)},[s,e.index,i]);const y=async()=>{const w=t.coordinates.join(",");if(o==="__prev_system__")try{const _=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(_.ok){const S=await _.json();if(S.system&&S.system.planets&&S.system.planets.length>0){const Z=S.system.planets[S.system.planets.length-1].name.toLowerCase();Ge(w,e.index-1,Z,S.system.planets),ut(w,e.index-1),window.location.href=`/planet/${Z}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else o&&(Ge(w,e.index,o,i),window.location.href=`/planet/${o}`)},N=async()=>{const w=t.coordinates.join(",");if(l==="__next_system__")try{const _=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(_.ok){const S=await _.json();if(S.system&&S.system.planets&&S.system.planets.length>0){const Z=S.system.planets[0].name.toLowerCase();Ge(w,e.index+1,Z,S.system.planets),ut(w,e.index+1),window.location.href=`/planet/${Z}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(Ge(w,e.index,l,i),window.location.href=`/planet/${l}`)};return x?null:a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("button",{onClick:y,disabled:!d,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${d?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:a.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),a.jsx("button",{onClick:N,disabled:!m,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${m?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:a.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Qi=({planet:s,system:e,galaxy:t,planet_url:i,version:o,image_url:n,cosmic_origin_time:l,initial_angle_rotation:c})=>{const[d]=v.useState(t.coordinates.join(",")),[r,m]=v.useState([]),p=w=>{m(w)},x=(w,_)=>{m(S=>S.map(W=>W.id===w?{...W,enabled:_}:W))};v.useEffect(()=>{document.body.setAttribute("data-coordinates",d),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),Ge(d,e.index,s.name,e.planets||[]),ut(d,e.index)},[d,e.index,s.name]);const C=w=>w.replace(/_/g," "),y=w=>w.replace(/_/g," "),N=w=>w.replace(/_/g," ");return a.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[a.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),a.jsxs("div",{className:"relative z-10",children:[a.jsx($t,{}),a.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:a.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",C(s.name),"'"]})}),a.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",y(e.name),"' - Galaxy '",N(t.name),"'"]}),a.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),a.jsx(qi,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),a.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:a.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[a.jsx("div",{className:"order-1 lg:order-1",children:a.jsx(Ki,{planetUrl:i,imageUrl:n,planet:s,cosmicOriginTime:l,initialAngleRotation:c,onEffectsCreated:p,effects:r,onToggleEffect:x})}),a.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),a.jsx("div",{className:"order-2 lg:order-2",children:a.jsx(fi,{planet:s,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:c,effects:r,onToggleEffect:x})})]})}),a.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:a.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:a.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",y(e.name),"'"]})})})]}),a.jsx(Vt,{version:o})]}),a.jsx(Xt,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!s||!e||!t||!i){console.error("Missing required data elements");return}const o=JSON.parse(s.textContent||"{}"),n=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),c=JSON.parse(i.textContent||"{}"),d={planet:o,system:n,galaxy:l,planet_url:c.planet_url,version:c.version,image_url:c.image_url,cosmic_origin_time:c.cosmic_origin_time,initial_angle_rotation:c.initial_angle_rotation},r=document.getElementById("atlas-react-root");r&&Wt.createRoot(r).render(Rt.createElement(Qi,d))}catch(s){console.error("Error initializing Planet React app:",s)}});
