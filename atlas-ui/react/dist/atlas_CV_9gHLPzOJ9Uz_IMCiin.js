import{r as y,j as s,R as Pt,V as Zt,c as $t}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Xt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Kt,U as qt,m as je,c as rt,a as Qt}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as Jt,V as N,n as Te,T as Me,Q as pt,l as gt,o as ie,R as ei,p as ti,q as ii,e as Ee,r as q,s as te,N as we,t as qe,c as Qe,C as u,u as oi,v as Je,d as fe,G as Ye,w as It,x as ct,F as ve,y as vt,z as yt,H as lt,I as Ae,J as ai,L as xt,g as bt,M as Rt,K as si,S as ni,P as ri,W as li,O as ci,U as di,X as mi,D as _t,A as hi}from"./atlas_DAMzSiAdSpY5YRy2mAVrx.js";const ui=({effects:a,onToggleEffect:e})=>{const[t,i]=y.useState(a),[o,n]=y.useState(!1);y.useEffect(()=>{i(a)},[a]);const l=(c,r)=>{i(m=>m.map(h=>h.id===c?{...h,enabled:r}:h)),e(c,r)},d=c=>c;return t.length===0?null:s.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsx("div",{className:"text-xs text-gray-400",children:"3D Effects Control"}),s.jsxs("button",{onClick:()=>n(!o),className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[o?"Hide":"Show"," (",t.filter(c=>c.enabled).length,"/",t.length,")"]})]}),o&&s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:t.map(c=>s.jsxs("div",{className:"bg-white/5 rounded p-2 flex items-center justify-between",children:[s.jsxs("label",{className:"flex items-center gap-2 cursor-pointer flex-1",children:[s.jsx("input",{type:"checkbox",checked:c.enabled,onChange:r=>l(c.id,r.target.checked),className:"rounded border-gray-400 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-white/10"}),s.jsx("span",{className:`${c.enabled?"text-white":"text-gray-500"} transition-colors`,children:d(c.type)})]}),s.jsx("span",{className:`text-[10px] ${c.enabled?"text-green-400":"text-gray-600"}`,children:c.enabled?"ON":"OFF"})]},c.id))}),o&&t.length>3&&s.jsxs("div",{className:"mt-2 flex gap-2",children:[s.jsx("button",{onClick:()=>{t.forEach(c=>l(c.id,!0))},className:"text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors",children:"Enable All"}),s.jsx("button",{onClick:()=>{t.forEach(c=>l(c.id,!1))},className:"text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors",children:"Disable All"})]})]})},fi=({planet:a,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:o,effects:n,onToggleEffect:l})=>{const[d,c]=y.useState(!1),r=v=>v.replace(/_/g," "),m=v=>{const w=v/86400;return w<30?`${w.toFixed(2)} days`:w<365?`${(w/30).toFixed(2)} months`:`${(w/365).toFixed(2)} years`},h=v=>{const w=v*9/5+32;return`${v.toFixed(1)}°C (${w.toFixed(1)}°F)`},g=v=>`${v.toExponential(2)} kg`,S=v=>v>=1e3?`${(v/1e3).toFixed(2)} km`:`${v.toFixed(2)} m`;return s.jsxs("div",{className:"h-full flex flex-col relative",children:[s.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),s.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[s.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),s.jsx(Kt,{type:"planet",name:a.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:a.name,className:"text-xs"})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),s.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:a.planet_type})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),s.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:a.atmosphere})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),s.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:a.life_forms})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),s.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),s.jsx("div",{className:"text-xs font-bold text-orange-300",children:g(a.mass)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),s.jsx("div",{className:"text-xs font-bold text-orange-300",children:S(a.diameter)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),s.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[a.density.toFixed(2)," kg/m³"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),s.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[a.gravity.toFixed(2)," m/s²"]})]})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),s.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.orbital_radius.toFixed(2)," AU"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),s.jsx("div",{className:"text-xs font-bold text-cyan-300",children:m(a.orbital_period_seconds)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.orbital_speed.toFixed(2)," m/s"]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),s.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.axial_tilt.toFixed(2),"°"]})]})]})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[s.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),s.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),s.jsx("div",{className:"text-xs font-bold text-red-300",children:h(a.surface_temperature)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[s.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),s.jsx("div",{className:"text-xs font-bold text-red-300",children:m(a.rotation_period_seconds)})]})]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",a.elements.length,")"]}),a.elements.length>4&&s.jsx("button",{onClick:()=>c(!d),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:d?"▲ Less":"▼ All"})]}),s.jsx("div",{className:"flex flex-wrap gap-1",children:(d?a.elements:a.elements.slice(0,4)).map((v,w)=>s.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:v},w))})]})]}),s.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[s.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),s.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Status:"}),s.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Planet:"}),s.jsx("div",{className:"text-white truncate font-medium",children:r(a.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"System:"}),s.jsx("div",{className:"text-white truncate font-medium",children:r(e.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"System ID:"}),s.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),s.jsx("div",{className:"text-white truncate font-medium",children:r(t.name)})]}),s.jsxs("div",{className:"bg-white/5 rounded p-2",children:[s.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),s.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]}),n&&l&&s.jsx(ui,{effects:n,onToggleEffect:l})]})},St={type:"change"},dt={type:"start"},Dt={type:"end"},He=new ei,wt=new ti,pi=Math.cos(70*ii.DEG2RAD),$=new N,re=2*Math.PI,L={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},at=1e-6;class gi extends Jt{constructor(e,t=null){super(e,t),this.state=L.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Te.ROTATE,MIDDLE:Te.DOLLY,RIGHT:Te.PAN},this.touches={ONE:Me.ROTATE,TWO:Me.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new pt,this._lastTargetPosition=new N,this._quat=new pt().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gt,this._sphericalDelta=new gt,this._scale=1,this._panOffset=new N,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new N,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yi.bind(this),this._onPointerDown=vi.bind(this),this._onPointerUp=xi.bind(this),this._onContextMenu=Mi.bind(this),this._onMouseWheel=Si.bind(this),this._onKeyDown=wi.bind(this),this._onTouchStart=Ei.bind(this),this._onTouchMove=Ci.bind(this),this._onMouseDown=bi.bind(this),this._onMouseMove=_i.bind(this),this._interceptControlDown=Ni.bind(this),this._interceptControlUp=Ti.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(St),this.update(),this.state=L.NONE}update(e=null){const t=this.object.position;$.copy(t).sub(this.target),$.applyQuaternion(this._quat),this._spherical.setFromVector3($),this.autoRotate&&this.state===L.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=re:i>Math.PI&&(i-=re),o<-Math.PI?o+=re:o>Math.PI&&(o-=re),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=l!=this._spherical.radius}if($.setFromSpherical(this._spherical),$.applyQuaternion(this._quatInverse),t.copy(this.target).add($),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const d=$.length();l=this._clampDistance(d*this._scale);const c=d-l;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),n=!!c}else if(this.object.isOrthographicCamera){const d=new N(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=c!==this.object.zoom;const r=new N(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(d),this.object.updateMatrixWorld(),l=$.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(He.origin.copy(this.object.position),He.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(He.direction))<pi?this.object.lookAt(this.target):(wt.setFromNormalAndCoplanarPoint(this.object.up,this.target),He.intersectPlane(wt,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,n||this._lastPosition.distanceToSquared(this.object.position)>at||8*(1-this._lastQuaternion.dot(this.object.quaternion))>at||this._lastTargetPosition.distanceToSquared(this.target)>at?(this.dispatchEvent(St),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?re/60*this.autoRotateSpeed*e:re/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$.setFromMatrixColumn(t,0),$.multiplyScalar(-e),this._panOffset.add($)}_panUp(e,t){this.screenSpacePanning===!0?$.setFromMatrixColumn(t,1):($.setFromMatrixColumn(t,0),$.crossVectors(this.object.up,$)),$.multiplyScalar(e),this._panOffset.add($)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;$.copy(o).sub(this.target);let n=$.length();n*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*n/i.clientHeight,this.object.matrix),this._panUp(2*t*n/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,n=t-i.top,l=i.width,d=i.height;this._mouse.x=o/l*2-1,this._mouse.y=-(n/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(re*this._rotateDelta.x/t.clientHeight),this._rotateUp(re*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(re*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-re*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(re*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-re*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,n=Math.sqrt(i*i+o*o);this._dollyStart.set(0,n)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),n=.5*(e.pageY+i.y);this._rotateEnd.set(o,n)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(re*this._rotateDelta.x/t.clientHeight),this._rotateUp(re*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,n=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,n),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(l,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function vi(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function yi(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function xi(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dt),this.state=L.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bi(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=L.DOLLY;break;case Te.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=L.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=L.ROTATE}break;case Te.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=L.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=L.PAN}break;default:this.state=L.NONE}this.state!==L.NONE&&this.dispatchEvent(dt)}function _i(a){switch(this.state){case L.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case L.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case L.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function Si(a){this.enabled===!1||this.enableZoom===!1||this.state!==L.NONE||(a.preventDefault(),this.dispatchEvent(dt),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Dt))}function wi(a){this.enabled!==!1&&this._handleKeyDown(a)}function Ei(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=L.TOUCH_ROTATE;break;case Me.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=L.TOUCH_PAN;break;default:this.state=L.NONE}break;case 2:switch(this.touches.TWO){case Me.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=L.TOUCH_DOLLY_PAN;break;case Me.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=L.TOUCH_DOLLY_ROTATE;break;default:this.state=L.NONE}break;default:this.state=L.NONE}this.state!==L.NONE&&this.dispatchEvent(dt)}function Ci(a){switch(this._trackPointer(a),this.state){case L.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case L.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case L.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case L.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=L.NONE}}function Mi(a){this.enabled!==!1&&a.preventDefault()}function Ni(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ti(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Et{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class Ot{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:o,ring_outer_radius:n,tilt_factor:l,planet_radius:d,shape_seed:c}=e;if(!t||!i){console.warn("No ring data provided");return}const r=[...t.particles,...i.particles],m=r.length,h=new Et(c||12345),g=new Ee,S=new Float32Array(m*3),v=new Float32Array(m*3),w=new Float32Array(m),_=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],E=h.choice(_);for(let b=0;b<m;b++){const I=r[b],R=this.planetRadius/(d||200),ce=(c||12345)+b,P=new Et(ce),oe=I.distance*R,X=I.angle,k=oe*Math.sin(X),ae=Math.asin((l||.2)*.5),x=k*Math.sin(ae),Z=k*Math.cos(ae),V=((n||400)-(o||200))*R*.4,he=P.uniform(-V*.8,V*.8),se=P.uniform(-V*.3,V*.3),de=P.uniform(-.08,.08),Q=oe+se,ne=X+de;S[b*3]=Q*Math.cos(ne),S[b*3+1]=x+he+this.planetRadius*.15,S[b*3+2]=Z+P.uniform(-V*.4,V*.4),I.color[0]/255;const W=(I.distance-(o||200))/((n||400)-(o||200)),Re=E.baseGray,ye=E.variation,De=P.uniform(-ye,ye),Y=Math.max(.12,Math.min(.45,Re+De)),pe=.8+W*.4,ge=P.uniform(.85,1.15),xe=P.uniform(0,1),Oe=xe<.03?P.uniform(1.1,1.3):1,et=Y*pe*ge*Oe,me=Math.max(.1,Math.min(.55,et));v[b*3]=me,v[b*3+1]=me,v[b*3+2]=me;const Le=.15,be=P.uniform(.3,.7),K=xe<.1?P.uniform(1.05,1.2):1;w[b]=I.size*Le*be*K}g.setAttribute("position",new q(S,3)),g.setAttribute("color",new q(v,3)),g.setAttribute("size",new q(w,1)),this.material=new te({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:we}),this.ringSystem=new qe(g,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,o=t.cosmicOriginTime||Date.now()/1e3,n=t.initialAngleRotation||0,d=Date.now()/1e3-o,c=2*Math.PI/i,r=(n+d*c)%(2*Math.PI);this.ringSystem.rotation.y=r}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function Ai(a,e){const t={full_ring:a.full_ring,ontop_ring:a.ontop_ring,ring_inner_radius:a.ring_inner_radius,ring_outer_radius:a.ring_outer_radius,tilt_factor:a.tilt_factor,planet_radius:a.planet_radius,shape_seed:a.shape_seed};return new Ot(e,t)}class ze{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new Qe(i,32,32);const o=new u(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new te({vertexShader:ze.vertexShader,fragmentShader:ze.fragmentShader,uniforms:{atmosphereColor:{value:o},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Je,side:oi,depthWrite:!1}),this.mesh=new fe(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new u(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function Pi(a,e){let t=[.7,.7,.7,.15],i=12;if(e){if(e.color&&Array.isArray(e.color)){const n=e.color;t=[n[0],n[1],n[2],(n[3]||.15)*.7]}e.width&&(i=e.width)}const o={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new ze(a,o)}class j{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,i=Math.acos(this.random()*2-1);return{x:e*Math.sin(i)*Math.cos(t),y:e*Math.sin(i)*Math.sin(t),z:e*Math.cos(i)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const D={PARTICLE_COUNT:{min:50,max:200},SPEED:{min:.05,max:.5},SIZE:{min:.5,max:2},OPACITY:{min:.2,max:.5},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05}};class ke{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new j(i);this.params={color:t.color||new u(16777215),particleCount:t.particleCount||Math.floor(o.uniform(D.PARTICLE_COUNT.min,D.PARTICLE_COUNT.max)),speed:t.speed||o.uniform(D.SPEED.min,D.SPEED.max),size:t.size||o.uniform(D.SIZE.min,D.SIZE.max),opacity:t.opacity||o.uniform(D.OPACITY.min,D.OPACITY.max),turbulence:t.turbulence||o.uniform(D.TURBULENCE.min,D.TURBULENCE.max),rotationSpeed:t.rotationSpeed||o.uniform(D.ROTATION_SPEED.min,D.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||o.uniform(D.MOVEMENT_AMPLITUDE.min,D.MOVEMENT_AMPLITUDE.max),seed:i},this.particleCount=this.params.particleCount,this.geometry=new Ee,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new qe(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),d=this.params.color instanceof u?this.params.color:new u(this.params.color),c=this.params.seed||Math.floor(Math.random()*1e6),r=new j(c);for(let m=0;m<this.particleCount;m++){const h=r.spherePosition(e*r.uniform(1,1.1));t[m*3]=h.x,t[m*3+1]=h.y,t[m*3+2]=h.z;const g=r.colorVariation({r:d.r,g:d.g,b:d.b});i[m*3]=g.r,i[m*3+1]=g.g,i[m*3+2]=g.b,o[m]=this.params.size*r.uniform(.75,1.25),n[m]=this.params.speed*r.uniform(.6,1.4),l[m]=r.random()*Math.PI*2}this.geometry.setAttribute("position",new q(t,3)),this.geometry.setAttribute("customColor",new q(i,3)),this.geometry.setAttribute("size",new q(o,1)),this.geometry.setAttribute("speed",new q(n,1)),this.geometry.setAttribute("phase",new q(l,1))}createMaterial(){return new te({vertexShader:ke.vertexShader,fragmentShader:ke.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:Je,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value,this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ct(a,e,t){const i=e.streaks||{},o=t||Math.floor(Math.random()*1e6),n=new j(o+3e3),l=i.count||Math.floor(n.uniform(D.PARTICLE_COUNT.min,D.PARTICLE_COUNT.max)),d=i.speed||n.uniform(D.SPEED.min,D.SPEED.max),c=n.uniform(D.SIZE.min,D.SIZE.max),r=n.uniform(D.OPACITY.min,D.OPACITY.max),m=n.uniform(D.TURBULENCE.min,D.TURBULENCE.max),h=n.uniform(D.ROTATION_SPEED.min,D.ROTATION_SPEED.max),g=n.uniform(D.MOVEMENT_AMPLITUDE.min,D.MOVEMENT_AMPLITUDE.max),S={color:i.color?new u().setRGB(i.color[0],i.color[1],i.color[2]):new u(16777215),particleCount:l,speed:d,size:c,opacity:r,turbulence:m,seed:o,rotationSpeed:h,movementAmplitude:g};return new ke(a,S)}const z={CLOUD_COUNT:{min:15,max:30},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.9},DENSITY:{min:.5,max:2},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},PUFFINESS:{min:1,max:1.4}};class Pe{cloudSystem;material;params;cloudCount;clouds=[];static vertexShader=`
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
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new j(i);this.params={color:t.color||new u(16777215),cloudCount:t.cloudCount||Math.floor(o.uniform(z.CLOUD_COUNT.min,z.CLOUD_COUNT.max)),size:t.size||o.uniform(z.SIZE.min,z.SIZE.max),opacity:t.opacity||o.uniform(z.OPACITY.min,z.OPACITY.max),density:t.density||o.uniform(z.DENSITY.min,z.DENSITY.max),rotationSpeed:t.rotationSpeed||o.uniform(z.ROTATION_SPEED.min,z.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||o.uniform(z.MOVEMENT_AMPLITUDE.min,z.MOVEMENT_AMPLITUDE.max),puffiness:t.puffiness||o.uniform(z.PUFFINESS.min,z.PUFFINESS.max),seed:i},this.cloudCount=this.params.cloudCount,this.cloudSystem=new Ye,this.material=this.createMaterial(),this.generateClouds(e)}generateClouds(e){const t=this.params.color instanceof u?this.params.color:new u(this.params.color),i=this.params.seed||Math.floor(Math.random()*1e6),o=new j(i),n=this.params.cloudsFromPython;for(let l=0;l<this.cloudCount;l++){let d,c,r,m=t,h=this.params.size*o.uniform(.8,1.2);if(n&&l<n.length){const k=n[l];d=k.position[0]*e*1.04,c=k.position[1]*e*1.04,r=k.position[2]*e*1.04,k.color&&(m=new u().setRGB(k.color[0],k.color[1],k.color[2])),h=k.radius*e*.8}else{const k=o.uniform(0,2*Math.PI),ae=o.uniform(-1,1),x=Math.acos(ae),Z=e*o.uniform(1.02,1.06);d=Z*Math.sin(x)*Math.cos(k),c=Z*Math.sin(x)*Math.sin(k),r=Z*Math.cos(x)}const g=h*o.uniform(.3,.8),S=Math.max(8,Math.floor(g*15)),v=new It(g*2,g*2,S,S),w=new N(d,c,r);new N(0,0,0);const _=w.clone().normalize(),E=new N,b=new N;Math.abs(_.y)<.99?E.crossVectors(_,new N(0,1,0)).normalize():E.crossVectors(_,new N(1,0,0)).normalize(),b.crossVectors(_,E).normalize();const I=new ct;I.makeBasis(E,b,_);const R=v.attributes.position,ce=new N,P=Math.sqrt(d*d+c*c+r*r);v.applyMatrix4(I);for(let k=0;k<R.count;k++){ce.fromBufferAttribute(R,k);const V=ce.clone().add(w).clone().normalize().multiplyScalar(P).sub(w);R.setXYZ(k,V.x,V.y,V.z)}R.needsUpdate=!0,v.computeVertexNormals(),v.translate(d,c,r);const oe=this.material.clone();oe.uniforms.cloudColor.value=m,oe.uniforms.density.value=this.params.density*o.uniform(.8,1.2),oe.uniforms.noiseOffset.value=new ie(o.uniform(0,100),o.uniform(0,100)),oe.uniforms.shapeVariation.value=o.uniform(-1,1);const X=new fe(v,oe);X.userData.isAtmosphericCloud=!0,X.userData.planetNormal=_.clone(),this.clouds.push(X),this.cloudSystem.add(X)}}createMaterial(){return new te({vertexShader:Pe.vertexShader,fragmentShader:Pe.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},cloudColor:{value:new u(16777215)},density:{value:this.params.density},noiseOffset:{value:new ie(0,0)},shapeVariation:{value:0}},transparent:!0,blending:we,depthWrite:!1,side:ve})}addToScene(e,t){t&&this.cloudSystem.position.copy(t),e.add(this.cloudSystem)}update(e,t){this.clouds.forEach(i=>{const o=i.material;o.uniforms.time.value+=e}),this.cloudSystem.rotation.y+=e*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},this.clouds.forEach(t=>{const i=t.material;e.opacity!==void 0&&(i.uniforms.opacity.value=e.opacity),e.movementAmplitude!==void 0&&(i.uniforms.movementAmplitude.value=e.movementAmplitude)})}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function st(a,e,t){const i=e.clouds||[];if(i.length===0){const d=t||Math.floor(Math.random()*1e6),c={color:new u(1,1,1),cloudCount:15,size:.6,opacity:.7,density:.8,seed:d,rotationSpeed:.005,movementAmplitude:.02,puffiness:1.5};return new Pe(a,c)}const o=t||Math.floor(Math.random()*1e6),n=new j(o+4e3),l={color:new u(16777215),cloudCount:i.length,size:n.uniform(z.SIZE.min,z.SIZE.max),opacity:n.uniform(z.OPACITY.min,z.OPACITY.max),density:n.uniform(z.DENSITY.min,z.DENSITY.max),seed:o,rotationSpeed:n.uniform(z.ROTATION_SPEED.min,z.ROTATION_SPEED.max),movementAmplitude:n.uniform(z.MOVEMENT_AMPLITUDE.min,z.MOVEMENT_AMPLITUDE.max),puffiness:n.uniform(z.PUFFINESS.min,z.PUFFINESS.max),cloudsFromPython:i};return new Pe(a,l)}const B={LAND_COUNT:{min:3,max:8},SIZE:{min:.3,max:.8},OPACITY:{min:.8,max:1},DENSITY:{min:.7,max:1},ROTATION_SPEED:{min:0,max:1e-4},ROUGHNESS:{min:.3,max:.7},ELEVATION:{min:.001,max:.005}};class Ie{landSystem;material;params;landCount;lands=[];static vertexShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float elevation;
    
    void main() {
      vPosition = position;
      vNormal = normalize(normalMatrix * normal);
      vUv = uv;
      
      // Posición del mundo para efectos
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      
      // Elevar ligeramente sobre la superficie
      vec3 pos = position;
      vec3 surfaceNormal = normalize(pos);
      pos += surfaceNormal * elevation;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;static fragmentShader=`
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    uniform float time;
    uniform float opacity;
    uniform vec3 landColor;
    uniform float density;
    uniform vec2 noiseOffset;
    uniform float roughness;
    
    // Función de ruido Perlin simplificada para terreno
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
      
      for (int i = 0; i < 5; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }
    
    void main() {
      // TÉCNICA DE MASAS DE TIERRA CON BORDES IRREGULARES
      
      // Distancia radial del centro para forma irregular
      vec2 center = vec2(0.5);
      float distFromCenter = length(vUv - center);
      
      // Forma base con bordes irregulares usando ruido
      vec2 noiseUv = vUv * 3.0 + noiseOffset;
      float shapeNoise = fbm(noiseUv);
      
      // Crear forma irregular de continente
      float threshold = 0.4 + shapeNoise * roughness;
      float landMask = 1.0 - smoothstep(threshold - 0.1, threshold, distFromCenter);
      
      // Añadir variación de terreno dentro del continente
      vec2 terrainUv = vUv * 10.0 + noiseOffset * 2.0;
      float terrainDetail = fbm(terrainUv) * 0.3;
      
      // Aplicar máscara de continente
      float finalLand = landMask * density;
      
      // Color de tierra con variaciones naturales
      vec3 finalColor = landColor;
      
      // Variación de color para terreno (más claro en elevaciones, más oscuro en valles)
      float colorVariation = 0.8 + terrainDetail * 0.4;
      finalColor *= colorVariation;
      
      // Sombreado sutil basado en la normal
      float lightIntensity = dot(vNormal, normalize(vec3(0.5, 1.0, 0.3))) * 0.2 + 0.8;
      finalColor *= lightIntensity;
      
      // Bordes más oscuros para definición
      float edgeDarkening = 1.0 - pow(1.0 - landMask, 3.0) * 0.3;
      finalColor *= edgeDarkening;
      
      // Transparencia con bordes suaves
      float alpha = finalLand * opacity;
      
      // Descarte de fragmentos muy transparentes para optimización
      if (alpha < 0.01) discard;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new j(i);this.params={color:t.color||new u(26169),landCount:t.landCount||Math.floor(o.uniform(B.LAND_COUNT.min,B.LAND_COUNT.max)),size:t.size||o.uniform(B.SIZE.min,B.SIZE.max),opacity:t.opacity||o.uniform(B.OPACITY.min,B.OPACITY.max),density:t.density||o.uniform(B.DENSITY.min,B.DENSITY.max),rotationSpeed:t.rotationSpeed||o.uniform(B.ROTATION_SPEED.min,B.ROTATION_SPEED.max),roughness:t.roughness||o.uniform(B.ROUGHNESS.min,B.ROUGHNESS.max),elevation:t.elevation||o.uniform(B.ELEVATION.min,B.ELEVATION.max),seed:i},this.landCount=this.params.landCount,this.landSystem=new Ye,this.material=this.createMaterial(),this.generateLands(e)}generateLands(e){const t=this.params.color instanceof u?this.params.color:new u(this.params.color),i=this.params.seed||Math.floor(Math.random()*1e6),o=new j(i),n=this.params.landsFromPython;if(n&&n.length>0)n.forEach((l,d)=>{let c=t;l.color&&(c=new u().setRGB(l.color[0],l.color[1],l.color[2]));const r=o.uniform(l.points_min||40,l.points_max||60);for(let m=0;m<r;m++){const h=o.uniform(0,2*Math.PI),g=Math.acos(o.uniform(-1,1)),S=e*1.001,v=S*Math.sin(g)*Math.cos(h),w=S*Math.sin(g)*Math.sin(h),_=S*Math.cos(g),E=o.uniform(.05,.15)*e;this.createLandPiece(v,w,_,E,c,e,o)}});else for(let l=0;l<this.landCount;l++){const d=o.uniform(0,2*Math.PI),c=Math.acos(o.uniform(-1,1)),r=e*1.001,m=r*Math.sin(c)*Math.cos(d),h=r*Math.sin(c)*Math.sin(d),g=r*Math.cos(c),S=this.params.size*e*o.uniform(.8,1.2),v=o.uniform(.8,1.2),w=t.clone().multiplyScalar(v);this.createLandPiece(m,h,g,S,w,e,o)}}createLandPiece(e,t,i,o,n,l,d){const c=Math.max(16,Math.floor(o*.5)),r=new It(o*2,o*2,c,c),m=new N(e,t,i),h=m.clone().normalize(),g=new N,S=new N;Math.abs(h.y)<.99?g.crossVectors(h,new N(0,1,0)).normalize():g.crossVectors(h,new N(1,0,0)).normalize(),S.crossVectors(h,g).normalize();const v=new ct;v.makeBasis(g,S,h),r.applyMatrix4(v);const w=r.attributes.position,_=new N,E=Math.sqrt(e*e+t*t+i*i);for(let R=0;R<w.count;R++){_.fromBufferAttribute(w,R);const X=_.clone().add(m).clone().normalize().multiplyScalar(E).sub(m);w.setXYZ(R,X.x,X.y,X.z)}w.needsUpdate=!0,r.computeVertexNormals(),r.translate(e,t,i);const b=this.material.clone();b.uniforms.landColor.value=n,b.uniforms.density.value=this.params.density*d.uniform(.9,1.1),b.uniforms.roughness.value=this.params.roughness,b.uniforms.elevation.value=this.params.elevation*l,b.uniforms.noiseOffset.value=new ie(d.uniform(0,100),d.uniform(0,100));const I=new fe(r,b);I.userData.isContinentLand=!0,I.userData.planetNormal=h.clone(),this.lands.push(I),this.landSystem.add(I)}createMaterial(){return new te({vertexShader:Ie.vertexShader,fragmentShader:Ie.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},elevation:{value:this.params.elevation},landColor:{value:new u(26169)},density:{value:this.params.density},roughness:{value:this.params.roughness},noiseOffset:{value:new ie(0,0)}},transparent:!0,blending:we,depthWrite:!0,side:ve})}addToScene(e,t){t&&this.landSystem.position.copy(t),e.add(this.landSystem)}update(e,t){this.lands.forEach(i=>{const o=i.material;o.uniforms.time.value+=e}),this.params.rotationSpeed&&this.params.rotationSpeed>0&&(this.landSystem.rotation.y+=e*this.params.rotationSpeed)}updateParams(e){this.params={...this.params,...e},this.lands.forEach(t=>{const i=t.material;e.opacity!==void 0&&(i.uniforms.opacity.value=e.opacity),e.elevation!==void 0&&(i.uniforms.elevation.value=e.elevation),e.roughness!==void 0&&(i.uniforms.roughness.value=e.roughness)})}getObject3D(){return this.landSystem}dispose(){this.lands.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.lands=[],this.landSystem.clear()}}function Ii(a,e,t){const i=e.abstract_lands||[];if(i.length===0){const d=t||Math.floor(Math.random()*1e6),c={color:new u(2263842),landCount:5,size:.4,opacity:.95,density:.9,seed:d,rotationSpeed:0,roughness:.5,elevation:.002};return new Ie(a,c)}const o=t||Math.floor(Math.random()*1e6),n=new j(o+5e3),l={color:new u(26169),landCount:i.length,size:n.uniform(B.SIZE.min,B.SIZE.max),opacity:.9,density:n.uniform(B.DENSITY.min,B.DENSITY.max),seed:o,rotationSpeed:0,roughness:n.uniform(B.ROUGHNESS.min,B.ROUGHNESS.max),elevation:n.uniform(B.ELEVATION.min,B.ELEVATION.max),landsFromPython:i};return new Ie(a,l)}class Lt{landGroup;lands=[];constructor(e,t={}){this.landGroup=new Ye;const i=t.seed||Math.floor(Math.random()*1e6),o=new j(i);t.greenPatches&&t.greenPatches.length>0?this.generateLandsFromPython(e,t.greenPatches,o):this.generateProceduralLands(e,o)}generateLandsFromPython(e,t,i){t.forEach((o,n)=>{const l=o.position||[0,0,1],d=(o.size||.1)*e,c=o.sides||20;let r=new u(4881497);o.color&&Array.isArray(o.color)&&(r=new u(o.color[0],o.color[1],o.color[2]));const m=new vt(d,c),h=new N(l[0],l[1],l[2]).normalize(),g=h.multiplyScalar(e*1.001),S=new ct,v=new N(0,1,0);Math.abs(h.y)>.99&&v.set(0,0,1),S.lookAt(new N(0,0,0),h,v),m.applyMatrix4(S);const w=m.attributes.position,_=new N;for(let I=0;I<w.count;I++){_.fromBufferAttribute(w,I);const R=_.length();if(R>0){const ce=.8+i.uniform(0,.4);_.normalize().multiplyScalar(R*ce),w.setXYZ(I,_.x,_.y,_.z)}}w.needsUpdate=!0,m.computeVertexNormals(),m.translate(g.x,g.y,g.z);const E=new yt({color:r,emissive:r.clone().multiplyScalar(.2),emissiveIntensity:.3,shininess:5,flatShading:!0}),b=new fe(m,E);b.castShadow=!0,b.receiveShadow=!0,this.lands.push(b),this.landGroup.add(b)})}generateProceduralLands(e,t){const i=Math.floor(t.uniform(5,15));for(let o=0;o<i;o++){const n=t.uniform(0,Math.PI*2),l=Math.acos(t.uniform(-1,1)),d=new N(Math.sin(l)*Math.cos(n),Math.sin(l)*Math.sin(n),Math.cos(l)),c=e*t.uniform(.02,.08),r=new vt(c,16),m=d.clone().multiplyScalar(e*1.001);r.lookAt(d),r.translate(m.x,m.y,m.z);const h=t.uniform(.3,.7),g=new yt({color:new u(.36*(1-h)+.22*h,.23*(1-h)+.36*h,0),emissive:657920,shininess:5}),S=new fe(r,g);this.lands.push(S),this.landGroup.add(S)}}addToScene(e,t){t&&this.landGroup.position.copy(t),e.add(this.landGroup)}update(e){}getObject3D(){return this.landGroup}dispose(){this.lands.forEach(e=>{e.geometry.dispose(),e.material instanceof lt&&e.material.dispose()}),this.lands=[],this.landGroup.clear()}}function Mt(a,e,t){const i=e.green_patches;if(!i||i.length===0)return null;const o=t||Math.floor(Math.random()*1e6);return new Lt(a,{greenPatches:i,seed:o+6e3})}class Ue{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;constructor(e,t=new u(16753920)){this.baseMesh=e;const i=e.geometry;this.planetRadius=i.parameters.radius||1;const o=t instanceof u?t:new u(t);this.baseMaterial=new te({vertexShader:Ue.baseVertexShader,fragmentShader:Ue.baseFragmentShader,uniforms:{baseColor:{value:o},lightDirection:{value:new N(1,1,1).normalize()},lightPosition:{value:new N(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:ve}),this.baseMesh.material=this.baseMaterial}addEffectLayer(e,t,i=1.001,o){const n=new Qe(this.planetRadius*i,256,256),l=new fe(n,t);return l.position.copy(this.baseMesh.position),l.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:l,material:t,layerObject:o}),this.scene&&this.scene.add(l),l}createCloudBandsLayerMaterial(e){const t=`
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
    `;return new te({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new u(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new N(1,1,1).normalize()},opacity:{value:e.opacity||.4}},transparent:!0,blending:we,side:ve,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,o=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((n,l)=>{l<5&&(o[l*2]=n.x,o[l*2+1]=n.y)}),new te({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new u(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:o},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new N(1,1,1).normalize()}},transparent:!0,blending:we,side:ve,depthWrite:!1})}createMetallicSurfaceLayerMaterial(e){const t=`
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
    `;return new te({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},metalColor:{value:e.color||new u(8421504)},metalness:{value:e.metalness||.8},roughness:{value:e.roughness||.4},fragmentationIntensity:{value:e.fragmentationIntensity||.5},opacity:{value:e.opacity||.8},lightDirection:{value:new N(1,1,1).normalize()},lightPosition:{value:new N(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3},crystalScale:{value:e.crystalScale||80}},transparent:!0,blending:we,side:ve,depthWrite:!1})}addToScene(e){this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&e.add(t.mesh)}),this.effectLayers.length}update(e,t){this.effectLayers.forEach(i=>{if(i.material.uniforms.time&&(i.material.uniforms.time.value+=e),t!==void 0&&i.material.uniforms.rotationAngle&&(i.material.uniforms.rotationAngle.value=t),i.layerObject&&i.layerObject.update)try{i.layerObject.update(e,t)}catch(o){console.error(`Error updating layer ${i.name}:`,o)}i.mesh&&i.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof u?e:new u(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}createGenericLayerMaterial(e,t,i,o=!0,n=we){return i.lightDirection||(i.lightDirection={value:new N(1,1,1).normalize()}),i.lightPosition||(i.lightPosition={value:new N(0,0,0)}),new te({vertexShader:e,fragmentShader:t,uniforms:i,transparent:o,blending:n,side:ve,depthWrite:!1})}convertEffectToLayer(e,t,i=1.001){if(t instanceof te){const o=t.clone();return o.transparent=!0,o.depthWrite=!1,o.uniforms.lightDirection||(o.uniforms.lightDirection={value:new N(1,1,1).normalize()}),this.addEffectLayer(e,o,i)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}getLayerMeshes(){const e={};return this.effectLayers.forEach(t=>{t.name&&t.mesh&&(e[t.name]=t.mesh)}),e}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const U={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4}};class Ri{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new j(i),n=t.numBands||Math.floor(o.uniform(U.NUM_BANDS.min,U.NUM_BANDS.max));this.params={numBands:n,bandPositions:t.bandPositions||this.generateDefaultBandPositions(n,i),bandWidths:t.bandWidths||this.generateDefaultBandWidths(n,i),rotationAngle:t.rotationAngle||o.uniform(U.ROTATION_ANGLE.min,U.ROTATION_ANGLE.max),baseColor:t.baseColor||new u(16753920),bandColor:t.bandColor||new u(16747520),animationSpeed:t.animationSpeed||o.uniform(U.ANIMATION_SPEED.min,U.ANIMATION_SPEED.max),turbulence:t.turbulence||o.uniform(U.TURBULENCE.min,U.TURBULENCE.max),noiseScale:t.noiseScale||o.uniform(U.NOISE_SCALE.min,U.NOISE_SCALE.max),opacity:t.opacity||.4,seed:i},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const i=new Array(20).fill(0),o=new j(t+12345);for(let n=0;n<e&&n<20;n++)i[n]=o.uniform(U.BAND_POSITIONS.min,U.BAND_POSITIONS.max);return i}generateDefaultBandWidths(e,t){const i=new Array(20).fill(0),o=new j(t+67890);for(let n=0;n<e&&n<20;n++)i[n]=o.uniform(U.BAND_WIDTHS.min,U.BAND_WIDTHS.max);return i}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity)}dispose(){}}function Di(a,e,t){const i=e.cloud_bands||{},o=t||Math.floor(Math.random()*1e6),n=new j(o+4e3),l={numBands:i.num_bands||Math.floor(n.uniform(U.NUM_BANDS.min,U.NUM_BANDS.max)),bandPositions:i.positions||void 0,bandWidths:i.widths||void 0,rotationAngle:i.rotation||n.uniform(U.ROTATION_ANGLE.min,U.ROTATION_ANGLE.max),baseColor:e.base_color?new u().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new u(16753920),bandColor:new u(16777215),animationSpeed:n.uniform(U.ANIMATION_SPEED.min,U.ANIMATION_SPEED.max),turbulence:e.turbulence||n.uniform(U.TURBULENCE.min,U.TURBULENCE.max),noiseScale:n.uniform(U.NOISE_SCALE.min,U.NOISE_SCALE.max),opacity:.4,seed:o};return new Ri(a,l)}const G={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.2,max:.6}};class Oi{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new j(i);this.params={stormCenters:t.stormCenters||this.generateStormCenters(i),stormColor:t.stormColor||new u(9109504),stormIntensity:t.stormIntensity||o.uniform(G.STORM_INTENSITY.min,G.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||o.uniform(G.SPIRAL_SPEED.min,G.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||o.uniform(G.ANIMATION_SPEED.min,G.ANIMATION_SPEED.max),opacity:t.opacity||o.uniform(G.OPACITY.min,G.OPACITY.max),seed:i},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new j(e+5e3),i=Math.floor(t.uniform(G.STORM_COUNT.min,G.STORM_COUNT.max)),o=[];for(let n=0;n<i;n++)o.push({x:t.uniform(G.STORM_CENTERS.min,G.STORM_CENTERS.max),y:t.uniform(G.STORM_CENTERS.min,G.STORM_CENTERS.max)});return o}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function Li(a,e,t){const i=e.storms||{},o=t||Math.floor(Math.random()*1e6),n=new j(o+5e3),l={stormCenters:i.centers||void 0,stormColor:new u(9109504),stormIntensity:i.intensity||e.storm_intensity||n.uniform(G.STORM_INTENSITY.min,G.STORM_INTENSITY.max),spiralSpeed:i.spiral_speed||n.uniform(G.SPIRAL_SPEED.min,G.SPIRAL_SPEED.max),animationSpeed:n.uniform(G.ANIMATION_SPEED.min,G.ANIMATION_SPEED.max),opacity:n.uniform(G.OPACITY.min,G.OPACITY.max),seed:o};return new Oi(a,l)}const J={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class Xe{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new j(i),n=t.color instanceof u?t.color:t.color?new u(t.color):new u(9127187);this.params={color:n,roughness:t.roughness||o.uniform(J.ROUGHNESS.min,J.ROUGHNESS.max),rockDensity:t.rockDensity||o.uniform(J.ROCK_DENSITY.min,J.ROCK_DENSITY.max)*10,craterCount:t.craterCount||o.uniform(J.CRATER_COUNT.min,J.CRATER_COUNT.max),opacity:t.opacity||o.uniform(J.OPACITY.min,J.OPACITY.max),seed:i},this.material=new te({vertexShader:Xe.vertexShader,fragmentShader:Xe.fragmentShader,uniforms:{time:{value:0},rockColor:{value:n},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new N(1,1,1).normalize()}},transparent:!0,side:ve,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function ji(a,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),l=new j(n+8e3);return new Xe(a,{color:o?new u(o):new u(9127187),roughness:i.roughness||l.uniform(J.ROUGHNESS.min,J.ROUGHNESS.max),rockDensity:i.rock_density||l.uniform(J.ROCK_DENSITY.min,J.ROCK_DENSITY.max)*10,craterCount:i.crater_count||l.uniform(J.CRATER_COUNT.min,J.CRATER_COUNT.max),opacity:l.uniform(J.OPACITY.min,J.OPACITY.max),seed:n})}const ee={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9}};class Ke{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new j(i),n=t.color instanceof u?t.color:t.color?new u(t.color):new u(11591910);this.params={color:n,iceReflectivity:t.iceReflectivity||o.uniform(ee.ICE_REFLECTIVITY.min,ee.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||o.uniform(ee.FROST_DENSITY.min,ee.FROST_DENSITY.max),crackIntensity:t.crackIntensity||o.uniform(ee.CRACK_INTENSITY.min,ee.CRACK_INTENSITY.max),opacity:t.opacity||o.uniform(ee.OPACITY.min,ee.OPACITY.max),seed:i},this.material=new te({vertexShader:Ke.vertexShader,fragmentShader:Ke.fragmentShader,uniforms:{time:{value:0},iceColor:{value:n},iceReflectivity:{value:this.params.iceReflectivity},frostDensity:{value:this.params.frostDensity},crackIntensity:{value:this.params.crackIntensity},opacity:{value:this.params.opacity},lightDirection:{value:new N(1,1,1).normalize()}},transparent:!0,side:ve,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Fi(a,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),l=new j(n+6e3);return new Ke(a,{color:o?new u(o):new u(11591910),iceReflectivity:i.ice_reflectivity||l.uniform(ee.ICE_REFLECTIVITY.min,ee.ICE_REFLECTIVITY.max),frostDensity:i.frost_density||l.uniform(ee.FROST_DENSITY.min,ee.FROST_DENSITY.max),crackIntensity:i.crack_intensity||l.uniform(ee.CRACK_INTENSITY.min,ee.CRACK_INTENSITY.max),opacity:l.uniform(ee.OPACITY.min,ee.OPACITY.max),seed:n})}const H={METALNESS:{min:.5,max:5},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.2,max:.9},CRYSTAL_SCALE:{min:17,max:230}};class zi{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new j(i),n=t.color instanceof u?t.color:t.color?new u(t.color):new u(8421504);this.params={color:n,metalness:t.metalness||o.uniform(H.METALNESS.min,H.METALNESS.max),roughness:t.roughness||o.uniform(H.ROUGHNESS.min,H.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||o.uniform(H.FRAGMENTATION_INTENSITY.min,H.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||o.uniform(H.OPACITY.min,H.OPACITY.max),seed:i,noiseScale:t.noiseScale||8,noiseIntensity:t.noiseIntensity||.3,crystalScale:t.crystalScale||o.uniform(H.CRYSTAL_SCALE.min,H.CRYSTAL_SCALE.max)},this.material=this.layerSystem.createMetallicSurfaceLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function ki(a,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,n=t||Math.floor(Math.random()*1e6),l=new j(n+7e3),d=l.uniform(.8,1.2);return new zi(a,{color:o?new u(o):new u(8421504),metalness:i.metalness||l.uniform(H.METALNESS.min,H.METALNESS.max),roughness:i.roughness||l.uniform(H.ROUGHNESS.min,H.ROUGHNESS.max),fragmentationIntensity:i.fragmentation||l.uniform(H.FRAGMENTATION_INTENSITY.min,H.FRAGMENTATION_INTENSITY.max),opacity:l.uniform(H.OPACITY.min,H.OPACITY.max),seed:n,noiseScale:4*d,noiseIntensity:.3,crystalScale:l.uniform(H.CRYSTAL_SCALE.min,H.CRYSTAL_SCALE.max)})}class jt{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new j(i),this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||50,speed:t.speed||.5,size:t.size||1,opacity:t.opacity||.3,brightness:t.brightness||1,seed:i},this.particleCount=this.params.particleCount,this.geometry=new Ee,this.createParticles(e),this.createMaterial(),this.particleSystem=new qe(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),o=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),l=e*1.3;for(let d=0;d<this.particleCount;d++){const c=this.rng.random()*Math.PI*2,r=this.rng.random()*2-1,m=this.rng.random(),h=Math.acos(r),g=l*Math.cbrt(m);t[d*3]=g*Math.sin(h)*Math.cos(c),t[d*3+1]=g*Math.sin(h)*Math.sin(c),t[d*3+2]=g*Math.cos(h),i[d]=this.params.size*(.5+this.rng.random()*.5),o[d]=this.params.speed*(.8+this.rng.random()*.4),n[d]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new q(t,3)),this.geometry.setAttribute("size",new q(i,1)),this.geometry.setAttribute("speed",new q(o,1)),this.geometry.setAttribute("phase",new q(n,1))}createMaterial(){const e=this.params.color instanceof u?this.params.color:new u().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),t=`
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
    `;this.material=new te({uniforms:{time:{value:0},color:{value:e},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:t,fragmentShader:i,transparent:!0,blending:Je,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;const t=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*t}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof u?e.color:new u().setRGB(e.color[0],e.color[1],e.color[2]);this.material.uniforms.color.value=t}e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Nt(a,e,t){const i=e.streaks||e,o={color:i.color||[.95,.95,1],particleCount:i.particleCount||30,speed:i.speed||.3,size:.8,opacity:.2,brightness:.8,seed:t||Math.floor(Math.random()*1e6)};return new jt(a,o)}const O={STAR_COUNT:{min:150,max:450},MIN_BRIGHTNESS:{min:.4,max:.7},MAX_BRIGHTNESS:{min:.8,max:1},MIN_SIZE:{min:1.2,max:1.8},MAX_SIZE:{min:3.5,max:5},DISTANCE:{min:300,max:600},TWINKLE_SPEED:{min:.002,max:.008}};class Be{starSystem;material;geometry;params;starCount;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6);console.log("🌟 StarFieldEffect - Using seed:",i,"from params:",t.seed);const o=new j(i+1e4);this.params={color:t.color||new u(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(o.uniform(O.STAR_COUNT.min,O.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:o.uniform(O.MIN_BRIGHTNESS.min,O.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:o.uniform(O.MAX_BRIGHTNESS.min,O.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:o.uniform(O.MIN_SIZE.min,O.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:o.uniform(O.MAX_SIZE.min,O.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:o.uniform(O.DISTANCE.min,O.DISTANCE.max),seed:i,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:o.uniform(O.TWINKLE_SPEED.min,O.TWINKLE_SPEED.max)},this.starCount=this.params.starCount,this.geometry=new Ee,this.material=this.createMaterial(),this.generateStars(e),this.starSystem=new qe(this.geometry,this.material)}generateStars(e){const t=new Float32Array(this.starCount*3),i=new Float32Array(this.starCount),o=new Float32Array(this.starCount),n=new Float32Array(this.starCount),l=this.params.seed,d=new j(l+1e4);for(let c=0;c<this.starCount;c++){const r=d.uniform(0,2*Math.PI),m=d.uniform(-1,1),h=Math.acos(m),g=this.params.distance*d.uniform(.8,1.2),S=g*Math.sin(h)*Math.cos(r),v=g*Math.sin(h)*Math.sin(r),w=g*Math.cos(h);t[c*3]=S,t[c*3+1]=v,t[c*3+2]=w,i[c]=d.uniform(this.params.minSize,this.params.maxSize),o[c]=d.uniform(this.params.minBrightness,this.params.maxBrightness),n[c]=d.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new q(t,3)),this.geometry.setAttribute("size",new q(i,1)),this.geometry.setAttribute("brightness",new q(o,1)),this.geometry.setAttribute("twinklePhase",new q(n,1))}createMaterial(){const e=this.params.color instanceof u?this.params.color:new u(this.params.color);return new te({vertexShader:Be.vertexShader,fragmentShader:Be.fragmentShader,uniforms:{time:{value:0},starColor:{value:e},twinkleSpeed:{value:this.params.twinkleSpeed}},transparent:!0,blending:Je,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.starSystem.position.copy(t),e.add(this.starSystem)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof u?e.color:new u(e.color);this.material.uniforms.starColor.value=t}e.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=e.twinkleSpeed)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ui(a,e){const t=e!==void 0?e:Math.floor(Math.random()*1e6);console.log("🌟 createStarFieldFromPythonData - planetSeed:",e,"final seed:",t);const i=new j(t+1e4),o={color:new u(16777215),starCount:Math.floor(i.uniform(O.STAR_COUNT.min,O.STAR_COUNT.max)),minBrightness:i.uniform(O.MIN_BRIGHTNESS.min,O.MIN_BRIGHTNESS.max),maxBrightness:i.uniform(O.MAX_BRIGHTNESS.min,O.MAX_BRIGHTNESS.max),minSize:i.uniform(O.MIN_SIZE.min,O.MIN_SIZE.max),maxSize:i.uniform(O.MAX_SIZE.min,O.MAX_SIZE.max),distance:i.uniform(O.DISTANCE.min,O.DISTANCE.max),seed:t,twinkleSpeed:i.uniform(O.TWINKLE_SPEED.min,O.TWINKLE_SPEED.max)};return new Be(a,o)}class Tt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new u(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new Ye,this.generateFragments()}generateFragments(){const e=new Ae({color:this.params.color instanceof u?this.params.color:new u(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),o=new fe(i,e);this.positionFragment(o,t),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const n=this.params.size*(Math.random()*.5+.75);o.scale.set(n,n,n),o.userData={rotationAxis:new N(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(o),this.fragments.add(o)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],o=[];o.push(new N(0,0,0));for(let d=0;d<e;d++){const c=d/e*Math.PI*2,r=Math.random()*.5+.5,m=(Math.random()-.5)*.3;o.push(new N(Math.cos(c)*r,Math.sin(c)*r,m))}for(let d=1;d<=e;d++){const r=o[d].clone();r.z+=Math.random()*.4+.2,o.push(r)}for(const d of o)t.push(d.x,d.y,d.z);for(let d=1;d<e;d++)i.push(0,d,d+1);i.push(0,e,1);const n=o.length-e-1;for(let d=0;d<e-1;d++)i.push(n,n+d+2,n+d+1);i.push(n,n+1,n+e);for(let d=0;d<e;d++){const c=d+1,r=(d+1)%e+1,m=c+e,h=r+e;i.push(c,m,r),i.push(r,m,h)}const l=new Ee;return l.setAttribute("position",new ai(t,3)),l.setIndex(i),l.computeVertexNormals(),l}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),o=(Math.random()-.5)*this.planetRadius*.5;return new N(Math.cos(t)*i,o,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new N(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new N(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const o=t.userData;t.rotateOnAxis(o.rotationAxis,o.rotationSpeed*e*this.params.animationSpeed);const n=Math.sin(Date.now()*.001+i)*.001;t.position.y+=n*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof u?e.color:new u(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof Ae&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof Ae&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof lt&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof lt&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function Ze(a){const e=a.replace("#",""),t=parseInt(e.substr(0,2),16)/255,i=parseInt(e.substr(2,2),16)/255,o=parseInt(e.substr(4,2),16)/255;return new u(t,i,o)}function nt(a){return a.length>=3?new u(a[0],a[1],a[2]):new u(.5,.5,.5)}function Fe(a){if(a.ocean_color){if(typeof a.ocean_color=="string")return Ze(a.ocean_color);if(Array.isArray(a.ocean_color))return nt(a.ocean_color)}if(a.planet_info?.base_color){if(typeof a.planet_info.base_color=="string")return Ze(a.planet_info.base_color);if(Array.isArray(a.planet_info.base_color))return nt(a.planet_info.base_color)}if(a.base_color){if(typeof a.base_color=="string")return Ze(a.base_color);if(Array.isArray(a.base_color))return nt(a.base_color)}const e=a.planet_info?.type||a.type||"Unknown";return Bi(e)}function Bi(a){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[a]||"#FFFFFF";return Ze(t)}class Ge{material;params;oceanLayerMesh;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new u(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new u(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new u(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof u?this.params.landmassColor:new u(this.params.landmassColor),t=this.params.foamColor instanceof u?this.params.foamColor:new u(this.params.foamColor),i=this.params.oceanColor instanceof u?this.params.oceanColor:new u(this.params.oceanColor);return new te({vertexShader:Ge.vertexShader,fragmentShader:Ge.fragmentShader,uniforms:{time:{value:0},baseColor:{value:i},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:i}}})}apply(e){this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const i=new fe(t,this.material);i.position.copy(e.position),i.rotation.copy(e.rotation),this.oceanLayerMesh=i}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const i=e[t];if(i!==void 0&&this.material.uniforms[t])if(i instanceof u||Array.isArray(i)){const o=i instanceof u?i:new u(i);this.material.uniforms[t].value=o}else this.material.uniforms[t].value=i})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh)):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function Gi(a){const e=Fe(a),t=[e.r,e.g,e.b];let i=.3,o=2,n=8,l=.3,d=.2;if(a.seeds){const r=a.seeds.shape_seed,h=(g=>{let S=g;return()=>(S=(S*1664525+1013904223)%4294967296,S/4294967296)})(r);i=.2+h()*.3,o=1.5+h()*1.5,n=6+h()*6,l=.25+h()*.15,d=.15+h()*.1}const c={waveIntensity:i,waveSpeed:o,waveScale:n,landmassThreshold:l,deepOceanThreshold:d,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new u(.9,.9,1),foamIntensity:.4,oceanColor:t};return new Ge(c)}class Ft{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new Ye,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,o=t*Math.cos(i),n=t*Math.sin(i),l=n*.8,d=new Ee,c=new Float32Array([0,0,0,o,l,n]);d.setAttribute("position",new q(c,3));const r=new xt({color:16776960,linewidth:5,transparent:!1});this.sunLine=new bt(d,r),this.debugGroup.add(this.sunLine);const m=e+Math.PI,h=t*.7,g=h*Math.cos(m),S=0,v=h*Math.sin(m),w=new Qe(this.planetRadius*.15,16,16),_=new Rt({color:16776960,transparent:!1,opacity:1}),E=new fe(w,_);E.position.set(g,S,v),this.debugGroup.add(E),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new Ee,o=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new q(o,3));const n=new xt({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new bt(i,n),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,o=this.params.initialAngleRotation||0,n=e-t,l=2*Math.PI/i;return(o+n*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,o=this.sunLine.geometry,n=o.attributes.position.array;n[3]=i*Math.cos(t),n[4]=0,n[5]=i*Math.sin(t),o.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,o=i.attributes.position.array;o[0]=-t*Math.cos(e),o[1]=0,o[2]=-t*Math.sin(e),o[3]=t*Math.cos(e),o[4]=0,o[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function Yi(a,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:a.debug?.cosmic_origin_time||a.timing?.cosmic_origin_time||a.cosmicOriginTime,rotationPeriod:a.planet_info?.rotation_period||a.rotation_period_seconds||86400,initialAngleRotation:a.debug?.initial_angle_rotation||a.timing?.initial_angle_rotation||a.initialAngleRotation||0,planetRadius:e,orbitalAngle:a.timing?.orbital_angle||0,sunAngle:a.sun_angle||a.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new Ft(e,t)}const Vi=!1;class Ne{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return Ne.instance||(Ne.instance=new Ne),Ne.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new ke(t,e),fromPythonData:(e,t)=>Ct(t,e.atmosphere||{})}),this.registerEffect("atmosphere_clouds",{create:(e,t)=>new Pe(t,e),fromPythonData:(e,t)=>st(t,e.surface_elements||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new jt(t,e),fromPythonData:(e,t)=>Nt(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new ze(t,e),fromPythonData:(e,t)=>Pi(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new Ot(t,e),fromPythonData:(e,t)=>Ai(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new Tt(t,e),fromPythonData:(e,t)=>new Tt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("continent_lands",{create:(e,t)=>new Ie(t,e),fromPythonData:(e,t)=>Ii(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("land_masses",{create:(e,t)=>new Lt(t,e),fromPythonData:(e,t)=>Mt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("ocean_waves",{create:(e,t)=>new Ge(e),fromPythonData:(e,t)=>Gi(e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("star_field",{create:(e,t)=>new Be(t,e),fromPythonData:(e,t)=>Ui(t,e.seeds?.planet_seed||e.planet_seed)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new Ft(t,e),fromPythonData:(e,t)=>Yi(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,o,n=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const d=l.create(t,i,o);if(!d)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:d,priority:n,enabled:!0};return this.effects.set(c.id,c),c}catch(d){return console.error(`Error creating effect '${e}':`,d),null}}createEffectFromPythonData(e,t,i,o,n=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,i,o,n);try{const d=l.fromPythonData(t,i,o);if(!d)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:d,priority:n,enabled:!0};return this.effects.set(c.id,c),c}catch(d){return console.error(`Error creating effect '${e}' from Python data:`,d),null}}createEffectsFromList(e,t,i){const o=[],n=e.sort((l,d)=>(l.priority||0)-(d.priority||0));for(const l of n){const d=this.createEffect(l.type,l.params,t,i,l.priority);d&&(d.enabled=l.enabled!==!1,o.push(d))}return o}createEffectsFromPythonPlanetData(e,t,i,o,n){const l=[];try{const d=Fe(e);if(n?this.layerSystem=n:this.layerSystem=new Ue(i,d),e.surface_elements){const c=e.surface_elements;if(c.effects_3d&&Array.isArray(c.effects_3d))for(const r of c.effects_3d){if(r.type==="atmospheric_streaks"){const h=Nt(t,r.params,e.seeds?.shape_seed+3e3),g={id:`effect_${this.nextId++}`,type:"atmospheric_streaks",effect:h,priority:r.priority||0,enabled:!0,name:"Atmospheric Streaks"};this.effects.set(g.id,g),l.push(g),h.addToScene(o,i.position);continue}const m=this.createEffect(r.type,r.params,t,i,r.priority||0);m?(m.name=r.type.replace(/_/g," ").replace(/\b\w/g,h=>h.toUpperCase()),l.push(m),m.effect.apply&&m.effect.apply(i),m.effect.addToScene&&m.effect.addToScene(o,i.position)):console.error("❌ FALLO AL CREAR EFECTO:",r.type)}switch(c.type){case"gas_giant":if(this.layerSystem){const r=Di(this.layerSystem,{...c,base_color:d,turbulence:e.turbulence||c.turbulence},e.seeds?.shape_seed||e.seeds?.planet_seed||e.seeds?.planet_seed),m=Li(this.layerSystem,{...c,base_color:d,storm_intensity:e.storm_intensity||c.storm_intensity},(e.seeds?.shape_seed||e.seeds?.planet_seed)+1e3),h={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:r,priority:0,enabled:!0};this.effects.set(h.id,h),l.push(h);const g={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:m,priority:1,enabled:!0};this.effects.set(g.id,g),l.push(g)}else console.error("❌ PlanetLayerSystem not initialized!");break;case"metallic":case"metallic_3d":if(this.layerSystem){const r=ki(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),m={id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:r,priority:0,enabled:!0};this.effects.set(m.id,m),l.push(m)}break;case"rocky":if(this.layerSystem){const r=ji(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),m={id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:r,priority:0,enabled:!0};if(this.effects.set(m.id,m),l.push(m),c.clouds&&c.clouds.length>0){const h=st(t,c,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),g={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:h,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(g.id,g),l.push(g),h.addToScene(o,i.position)}}break;case"icy":if(this.layerSystem){const r=Fi(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),m={id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:r,priority:0,enabled:!0};this.effects.set(m.id,m),l.push(m)}break;case"oceanic":if(c.green_patches&&c.green_patches.length>0){const r=Mt(t,c,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(r){const m={id:`effect_${this.nextId++}`,type:"land_masses",effect:r,priority:5,enabled:!0,name:"Land Masses (Islands)"};this.effects.set(m.id,m),l.push(m),r.addToScene(o,i.position)}}if(c.clouds&&c.clouds.length>0){const r=st(t,c,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),m={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:r,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(m.id,m),l.push(m),r.addToScene(o,i.position)}break;default:if(i.material instanceof Ae){const r=Fe(e);i.material.color.copy(r)}break}}else if(i.material instanceof Ae){const c=Fe(e);i.material.color.copy(c)}if(e.atmosphere){if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const c=Ct(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(c){const r={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:c,priority:20,enabled:!0};this.effects.set(r.id,r),l.push(r),c.addToScene(o,i.position)}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const c=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),r={...e.atmosphere};c==="oceanic"&&(r.opacity=Math.min(r.opacity||.3,.15),r.width=Math.min(r.width||15,8));const m=this.createEffectFromPythonData("atmosphere",r,t,i,5);m&&(l.push(m),m.effect.addToScene(o,i.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){const c=this.createEffectFromPythonData("ring_system",e,t,i,1);c?(l.push(c),c.effect.addToScene(o,i.position)):console.warn("⚠️ Failed to create ring effect")}if(e.surface_elements?.has_fragmentation_zones){const c=this.createEffectFromPythonData("fragmentation",e,t,i,5);c&&(l.push(c),c.effect.addToScene(o,i.position))}this.layerSystem&&this.layerSystem.addToScene(o);try{const c=this.createEffectFromPythonData("star_field",e,t,i,-100);c&&c.effect&&(c.effect.addToScene(o,i.position),l.push(c),console.log("⭐ StarField added automatically using planet seed:",e.seeds?.planet_seed))}catch(c){console.warn("Could not create StarField:",c)}return l.forEach((c,r)=>{}),l.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),l}catch(d){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",d),d}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);if(i){i.enabled=t!==void 0?t:!i.enabled;const o=i.effect;if(o&&o.getObject3D){const n=o.getObject3D();n&&(n.visible=i.enabled)}if(this.layerSystem){const n=this.layerSystem.getLayerMeshes(),d={cloud_bands_layer:"cloudBands",cloud_gyros_layer:"cloudGyros",metallic_surface_layer:"metallicSurface",rocky_terrain_layer:"rockyTerrain",icy_terrain_layer:"icyTerrain"}[i.type];d&&n[d]&&(n[d].visible=i.enabled)}}else console.warn(`⚠️ Effect not found: ${e}`)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(o){console.error(`Error updating effect ${i.type}:`,o)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear(),this.nextId=1}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const Se=Ne.getInstance(),Ce={atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function Wi(a){const e=[];switch(a.toLowerCase()){case"metallic":e.push({type:"atmosphere",params:{...Ce.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:Ce.cloud_bands,priority:0},{type:"cloud_gyros",params:Ce.cloud_gyros,priority:1},{type:"atmosphere",params:{...Ce.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:Ce.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...Ce.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const ue={log:(a,e)=>{},warn:(a,e)=>{console.warn(`[Effects] ${a}`,e||"")},error:(a,e)=>{console.error(`[Effects] ${a}`,e||"")},debug:(a,e)=>{}};new Date().toISOString();const Hi=({planetData:a,showInConsole:e=!0,showInPage:t=!1})=>{const[i,o]=y.useState([]),[n,l]=y.useState({});y.useEffect(()=>{if(!a)return;const r=d(a);l(r),o(c(a)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=a,window.__DEBUG_PLANET_ANALYSIS=r)},[a,e]);function d(r){const m={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(r.planet_info&&r.surface_elements?m.hasValidStructure=!0:(r.planet_info||m.missingFields.push("planet_info"),r.surface_elements||m.missingFields.push("surface_elements")),r.surface_elements?.type==="oceanic"&&(m.oceanicData={hasAbstractLands:!!r.surface_elements.abstract_lands?.length,numGreenPatches:r.surface_elements.green_patches?.length||0,numClouds:r.surface_elements.clouds?.length||0,hasDepths:r.surface_elements.depths?.enabled||!1,baseColorIsBlue:r.planet_info?.base_color==="#0000FF",greenPatchColor:r.surface_elements.green_patches?.[0]?.color,issues:[]},m.oceanicData.numGreenPatches>15&&m.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),m.oceanicData.baseColorIsBlue||m.oceanicData.issues.push(`Color base no es azul puro: ${r.planet_info?.base_color}`),m.renderingIssues=m.oceanicData.issues),r.planet_info?.base_color&&r.planet_info?.type){const g={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[r.planet_info.type];g&&r.planet_info.base_color!==g?m.colorConsistency=`Inconsistente: esperado ${g}, recibido ${r.planet_info.base_color}`:m.colorConsistency="Correcto"}return m}function c(r){const m=[];if(!r.surface_elements?.type)return["No surface type defined"];const h=r.surface_elements.type.toLowerCase();switch(h){case"oceanic":m.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":m.push("RockyTerrainEffect");break;case"icy":m.push("IcyTerrainEffect");break;case"gas giant":m.push("GasGiantBandsEffect");break;default:m.push(`Generic effect for type: ${h}`)}return r.atmosphere?.density>0&&m.push("AtmosphericEffect"),r.rings&&m.push("RingSystemEffect"),m}return t?s.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[s.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",a.planet_info?.name]}),s.jsxs("div",{style:{marginBottom:"10px"},children:[s.jsx("strong",{children:"Type:"})," ",a.planet_info?.type,s.jsx("br",{}),s.jsx("strong",{children:"Base Color:"})," ",a.planet_info?.base_color,s.jsx("br",{}),s.jsx("strong",{children:"Radius:"})," ",a.planet_info?.radius]}),a.surface_elements?.type==="oceanic"&&s.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[s.jsx("strong",{children:"🌊 Oceanic Data:"}),s.jsx("br",{}),s.jsxs("span",{style:{color:n.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",n.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),s.jsx("br",{}),"Green Patches: ",n.oceanicData?.numGreenPatches,s.jsx("br",{}),"Clouds: ",n.oceanicData?.numClouds,s.jsx("br",{}),"Has Depths: ",n.oceanicData?.hasDepths?"Yes":"No",s.jsx("br",{}),n.oceanicData?.issues?.length>0&&s.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",s.jsx("br",{}),n.oceanicData.issues.map((r,m)=>s.jsxs("div",{children:["- ",r]},m))]})]}),s.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[s.jsx("strong",{children:"🎨 Effects Applied:"}),s.jsx("br",{}),i.map((r,m)=>s.jsxs("div",{style:{color:r.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",r]},m))]}),s.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function Zi(a){y.useEffect(()=>{if(a&&a.surface_elements?.type==="oceanic"){a.surface_elements.green_patches?.length>0;const e=a.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[a])}const $e=2.5,At=()=>{const a=45*Math.PI/180;return $e/(Math.tan(a/2)*.5)},$i=({planetName:a,containerClassName:e="",width:t=800,height:i=600,autoRotate:o=!0,enableControls:n=!0,showDebugInfo:l=!1,planetData:d,cosmicOriginTime:c,initialAngleRotation:r,onDataLoaded:m,onEffectsCreated:h,onError:g})=>{const S=y.useRef(null),v=y.useRef(null),w=y.useRef(null),_=y.useRef(null),E=y.useRef(null),b=y.useRef(null),I=y.useRef(new si),R=y.useRef(null),ce=y.useRef(0),P=y.useRef(null),[oe,X]=y.useState(!0),[k,ae]=y.useState(null),[x,Z]=y.useState(null),[V,he]=y.useState([]),[se,de]=y.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),Q=y.useRef([]),ne=y.useRef(0),le=y.useRef(null),W=y.useRef(null),Re=Math.floor(Date.now()/1e3),[ye,De]=y.useState(0),Y=c||x?.timing?.cosmic_origin_time||Date.now()/1e3-3600,pe=Re-Y+ye;ce.current=pe;const ge=y.useCallback(()=>{if(!S.current||!w.current||!_.current)return;const f=S.current,C=f.clientWidth||400,p=f.clientHeight||400;w.current.setSize(C,p),_.current.aspect=C/p,_.current.updateProjectionMatrix()},[]),xe=async f=>{if(!(!E.current||!v.current||!W.current)){ue.log("Applying modular effects from API data",{planet:f.planet_info.name,type:f.planet_info.type});try{tt();const C=Fe(f);W.current.updateBaseColor(C);const p=Se.createEffectsFromPythonPlanetData(f,$e,E.current,v.current,W.current);console.log(`Planet: ${f.planet_info?.name}, Effects:`,p.map(M=>M.type)),he(p),Q.current=p,h&&h(p),ue.log(`Successfully applied ${p.length} modular effects`),it()}catch(C){ue.error("Error applying modular effects",C),Ve()}}},Oe=y.useCallback(()=>{if(!S.current)return!1;try{for(;S.current.firstChild;)S.current.removeChild(S.current.firstChild);v.current=null,_.current=null,w.current=null,E.current=null,K.current=null;const f=S.current,C=f.clientWidth||t||400,p=f.clientHeight||i||400,M=new ni;M.background=new u(1297),v.current=M;const F=new ri(45,C/p,.1,1e4),A=At();F.position.set(0,0,A),F.lookAt(0,0,0),_.current=F;const T=new li({antialias:!0,alpha:!0,powerPreference:"high-performance"});return T.setSize(C,p),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),T.shadowMap.enabled=!0,T.shadowMap.type=ci,T.toneMapping=di,T.toneMappingExposure=1.2,T.outputColorSpace=mi,S.current.appendChild(T.domElement),w.current=T,kt(M,null),Ut(M),n&&Bt(F,T.domElement),!0}catch(f){return console.error("Error initializing Three.js:",f),!1}},[x,d,c]),et=f=>{if(!f)return 0;const C=f.sun_angle||f.lighting?.sun_angle;if(C!==void 0)return C;const p=f.timing?.current_orbital_angle||f.timing?.orbital_angle;return p??0},me=y.useRef(null),Le=y.useRef(null),be=y.useRef(null),K=y.useRef(null),zt=f=>{f.castShadow=!0,f.shadow.mapSize.width=2048,f.shadow.mapSize.height=2048,f.shadow.camera.near=.5,f.shadow.camera.far=50,f.shadow.camera.left=-10,f.shadow.camera.right=10,f.shadow.camera.top=10,f.shadow.camera.bottom=-10},mt=f=>{if(!me.current||!v.current)return;const C=et(f),p=10,M=C+Math.PI,F=Math.sin(C)*5,A=p*Math.cos(M),T=F,_e=p*Math.sin(M);me.current.position.set(A,T,_e),me.current.target.position.set(0,0,0),v.current.children.includes(me.current.target)||v.current.add(me.current.target),Le.current&&Le.current.position.set(-A*.5,0,-_e*.5),W.current&&me.current&&W.current.updateFromThreeLight(me.current)},kt=(f,C)=>{{const p=new _t(16777215,2);p.position.set(-10,5,10),p.target.position.set(0,0,0),p.castShadow=!0,zt(p),f.add(p),f.add(p.target),me.current=p;const M=new _t(16777215,.05);M.position.set(8,-3,-5),f.add(M),Le.current=M;const F=new hi(2236996,.1);f.add(F),setTimeout(()=>{W.current&&p&&W.current.updateFromThreeLight(p)},50);return}},Ut=f=>{const C=new Qe($e,128,64),p=new Rt({color:8421504}),M=new fe(C,p);M.castShadow=!0,M.receiveShadow=!0,M.position.set(0,0,0),f.add(M),E.current=M;const F=new u(8421504);W.current=new Ue(M,F),W.current.addToScene(f)},Bt=(f,C)=>{const p=new gi(f,C);p.enableDamping=!0,p.dampingFactor=.05;const M=At();p.minDistance=M*.5,p.maxDistance=M*2,p.autoRotate=o,p.autoRotateSpeed=.5,p.enablePan=!0,p.enableZoom=!0,p.target.set(0,0,0),b.current=p},Gt=y.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{X(!0),ae(null),ue.log("Loading planet data from API",{planetName:a});const C=await fetch("/api/planet/rendering-data");if(!C.ok)throw new Error(`HTTP error! status: ${C.status}`);const p=await C.json();if(!p.success)throw new Error(p.error||"Failed to fetch planet data");const M=p.planet_data,F=p.timing,A=p.rendering_data,T={planet_info:A?.planet_info||{name:M.name,type:M.planet_type,base_color:"#808080",radius:M.diameter/15e3,orbital_radius:M.orbital_radius},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:F.cosmic_origin_time,current_time_seconds:F.current_time_seconds,elapsed_time:F.elapsed_time,initial_orbital_angle:M.initial_orbital_angle,current_orbital_angle:M.current_orbital_angle,max_orbital_radius:F.max_orbital_radius,system_max_orbital_radius:M.system_max_orbital_radius},original_planet_data:M,seeds:A?.seeds};return Z(T),P.current=T,ue.log("API data loaded successfully",{planet:T.planet_info.name,type:T.planet_info.type,hasEffects:!!T.surface_elements,fullRenderingData:A}),m&&m(T),T}catch(f){const C=f instanceof Error?f.message:"Unknown error";return ae(C),g&&g(C),null}finally{X(!1),window.isLoadingPlanetData=!1}}},[a,m,g]);y.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{X(!0),ae(null),ue.log("Loading planet data from API",{planetName:a});const C=await fetch("/api/planet/rendering-data");if(!C.ok)throw new Error(`HTTP error! status: ${C.status}`);const p=await C.json();if(!p.success)throw new Error(p.error||"Failed to fetch planet data");const M=p.planet_data,F=p.timing,A=p.rendering_data,T={planet_info:A?.planet_info||{name:M.name,type:M.planet_type,base_color:"#808080",radius:M.diameter/15e3,orbital_radius:M.orbital_radius},surface_elements:A?.surface_elements,atmosphere:A?.atmosphere,rings:A?.rings,effects_3d:A?.effects_3d,shader_uniforms:A?.shader_uniforms,universal_actions:A?.universal_actions,timing:{cosmic_origin_time:F.cosmic_origin_time,current_time_seconds:F.current_time_seconds,elapsed_time:F.elapsed_time,initial_orbital_angle:M.initial_orbital_angle,current_orbital_angle:M.current_orbital_angle,max_orbital_radius:F.max_orbital_radius,system_max_orbital_radius:M.system_max_orbital_radius},original_planet_data:M,seeds:A?.seeds};Z(T),P.current=T,ue.log("API data loaded successfully",{planet:T.planet_info.name,type:T.planet_info.type,hasEffects:!!T.surface_elements,fullRenderingData:A}),mt(T),K.current&&v.current&&(v.current.remove(K.current),K.current.geometry.dispose(),K.current.material.dispose(),K.current=null),await xe(T),m&&m(T)}catch(f){const C=f instanceof Error?f.message:"Unknown error";ae(C),g&&g(C),Ve()}finally{X(!1),window.isLoadingPlanetData=!1}}},[a,d,c,r]);const ht=y.useCallback(()=>{if(!x||!E.current)return;const f=d?.orbital_period_seconds||365.25*24*3600,C=2*Math.PI/f,p=x.timing?.initial_orbital_angle||0,M=Date.now()/1e3,F=0,A=c||x.timing?.cosmic_origin_time||Date.now()/1e3-3600,T=M-A+F,_e=(p+T*C)%(2*Math.PI),ot=x.timing?.max_orbital_radius||100,We=20+x.planet_info?.orbital_radius/ot*80,Vt=We,Wt=We*Math.cos(_e),Ht=Vt*Math.sin(_e);E.current.position.x=Wt,E.current.position.z=Ht,E.current.position.y=0},[x,d,c]),Yt=y.useCallback(async f=>{const C=f||x;if(C&&v.current)try{mt(C),K.current&&v.current&&(v.current.remove(K.current),K.current.geometry.dispose(),K.current.material.dispose(),K.current=null),await xe(C)}catch(p){ue.error("Error in applyProceduralShadersFromAPI:",p),Ve()}},[x]),Ve=()=>{if(!(!v.current||!E.current)){ue.warn("Applying fallback effects for planet type:",d?.planet_type);try{tt(),E.current.material instanceof Ae&&E.current.material.color.setHex(6710886);try{const f=Wi("generic"),C=Se.createEffectsFromList(f,$e,E.current);C.forEach(p=>{p.effect.addToScene&&v.current&&E.current&&p.effect.addToScene(v.current,E.current.position)}),Q.current=C,he(C)}catch(f){console.warn("Could not create fallback effects, using basic material only:",f)}it()}catch(f){ue.error("Error applying fallback effects",f)}}},tt=()=>{Se.clearAllEffects(),Q.current.forEach(f=>{try{f.effect.dispose&&f.effect.dispose()}catch{}}),Q.current=[],he([])},ut=y.useCallback(()=>{R.current=requestAnimationFrame(ut);const f=performance.now(),C=I.current.getDelta();b.current&&b.current.update();try{Se.updateAllEffects(C,E.current?.rotation.y)}catch{}if(E.current&&P.current){P.current.planet_info?.name;const p=P.current.original_planet_data,M=p?.orbital_period_seconds||365.25*24*3600,F=P.current.timing?.initial_orbital_angle||0;c||P.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const A=p?.axial_tilt||0,T=2*Math.PI/M;(F+ce.current*T)%(2*Math.PI);const _e=P.current.timing?.max_orbital_radius||P.current.timing?.system_max_orbital_radius,ot=p?.orbital_radius;if(!_e||!ot)return;p?.eccentricity_factor,E.current.position.set(0,0,0);const ft=p?.rotation_period_seconds||86400,We=2*Math.PI/ft;E.current.rotation.y=ce.current*We%(2*Math.PI),E.current.rotation.z=A*(Math.PI/180)}if(Q.current.forEach(p=>{p.effect.updateUniforms&&p.effect.updateUniforms(C)}),w.current&&v.current&&_.current){const p=performance.now();w.current.render(v.current,_.current);const M=performance.now()-p;if(f-ne.current>5e3){const F=1e3/(f-ne.current);it(),de(A=>({...A,frameRate:Math.round(F),renderTime:Math.round(M*100)/100})),ne.current=f}}},[]),it=y.useCallback(()=>{const f=Se.getStats();de(C=>({...C,activeEffects:f.activeEffects,enabledEffects:f.enabledEffects}))},[]);return y.useEffect(()=>{let f=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!f)return;const p=await Gt();if(!f)return;if(!Oe()){f&&ae("Failed to initialize 3D renderer");return}if(!f||(ut(),S.current&&"ResizeObserver"in window&&(le.current=new ResizeObserver(ge),le.current.observe(S.current)),window.addEventListener("resize",ge),!f))return;p?await Yt(p):Ve()}catch(p){f&&ae(p instanceof Error?p.message:"Unknown initialization error")}})(),()=>{if(f=!1,P.current=null,R.current&&cancelAnimationFrame(R.current),le.current&&le.current.disconnect(),window.removeEventListener("resize",ge),tt(),W.current&&(W.current.dispose(),W.current=null),b.current&&b.current.dispose(),be.current&&v.current&&(v.current.remove(be.current),be.current.geometry.dispose(),be.current.material.dispose(),be.current=null),K.current&&v.current&&(v.current.remove(K.current),K.current.geometry.dispose(),K.current.material.dispose(),K.current=null),w.current&&S.current)try{S.current.contains(w.current.domElement)&&S.current.removeChild(w.current.domElement),w.current.dispose()}catch{}}},[]),y.useEffect(()=>{const f=setInterval(()=>{const C=Se.getStats();de(p=>({...p,activeEffects:C.activeEffects,enabledEffects:C.enabledEffects}))},1e4);return()=>clearInterval(f)},[]),y.useEffect(()=>{x&&v.current&&E.current&&ht()},[x,ht]),Zi(x),s.jsxs("div",{className:`relative ${e}`,children:[l&&x&&s.jsx(Hi,{planetData:x,showInPage:!0,showInConsole:!0}),s.jsx("div",{ref:S,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),oe&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:s.jsxs("div",{className:"text-white text-center",children:[s.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),s.jsx("div",{children:"Loading planet..."})]})}),k&&s.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[s.jsx("strong",{children:"Error:"})," ",k]}),x&&!oe&&s.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[s.jsx("h3",{className:"text-lg font-bold",children:x.planet_info.name}),s.jsx("p",{className:"text-sm opacity-80",children:x.planet_info.type}),s.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[V.length," effects active"]}),x.surface_elements?.description&&s.jsx("p",{className:"text-xs mt-2 opacity-60",children:x.surface_elements.description.appearance})]}),l&&s.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[s.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),s.jsxs("div",{children:["Frame Rate: ",se.frameRate," FPS"]}),s.jsxs("div",{children:["Render Time: ",se.renderTime,"ms"]}),s.jsxs("div",{children:["Active Effects: ",se.activeEffects]}),s.jsxs("div",{children:["Enabled Effects: ",se.enabledEffects]}),s.jsxs("div",{className:"mt-2",children:[s.jsx("div",{className:"font-semibold",children:"Effects:"}),V.map(f=>s.jsxs("div",{className:"ml-2",children:[f.type," (",f.enabled?"ON":"OFF",")"]},f.id))]})]})]})};class Xi extends Pt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?s.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:s.jsxs("div",{className:"text-center p-4",children:[s.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),s.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const Ki=a=>s.jsx(Xi,{children:s.jsx($i,{...a})}),qi=({planetUrl:a,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:o,onEffectsCreated:n,effects:l,onToggleEffect:d})=>{const c=y.useRef(null),r=y.useRef(null),[m,h]=y.useState("Aligning Stargate..."),[g,S]=y.useState(!1),[v,w]=y.useState(!1),[_,E]=y.useState(!1),[b,I]=y.useState(!0),[R,ce]=y.useState(!0),[P,oe]=y.useState(null),[X,k]=y.useState(null);y.useEffect(()=>{l&&d&&l.forEach(x=>{Se.toggleEffect(x.id,x.enabled)})},[l]),y.useEffect(()=>{const x=document.createElement("style");return x.textContent=`
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
    `,document.head.appendChild(x),()=>{document.head.removeChild(x)}},[]),y.useEffect(()=>{const x=c.current;if(!x)return;const Z=x.getContext("2d");if(!Z)return;let V=[];const he=800;let se,de;const Q=800;let ne,le=.5;function W(){const Y=x?.parentElement;if(!Y||!x)return;const pe=Y.clientWidth,ge=Y.clientHeight;x.width=Math.min(pe,Q),x.height=Math.min(ge,Q),se=x.width/2,de=x.height/2}function Re(){W(),V=[];for(let Y=0;Y<he;Y++)V.push({x:Math.random()*(x?.width||800),y:Math.random()*(x?.height||800),z:Math.random()*(x?.width||800),o:Math.random()});ye()}function ye(){!x||!Z||(Z.clearRect(0,0,x.width,x.height),V.forEach(Y=>{Y.z-=le,Y.z<=0&&(Y.z=x.width,Y.x=Math.random()*x.width,Y.y=Math.random()*x.height,Y.o=Math.random());const pe=x.width/Y.z,ge=(Y.x-se)*pe+se,xe=(Y.y-de)*pe+de,Oe=2*pe;Z.beginPath(),Z.fillStyle=`rgba(255, 255, 255, ${Y.o})`,Z.arc(ge,xe,Oe,0,2*Math.PI),Z.fill()}),le<60&&(le+=1),ne=requestAnimationFrame(ye))}Re();const De=()=>W();return window.addEventListener("resize",De),()=>{window.removeEventListener("resize",De),ne&&cancelAnimationFrame(ne)}},[]),y.useEffect(()=>{if(e&&!b){const x=new Image;x.onload=()=>{r.current&&(r.current.src=e,w(!0),E(!0))},x.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{w(!0),E(!0)},1500)},x.src=e}else(b||!e)&&setTimeout(()=>{w(!0),E(!0)},1500)},[e,b]),y.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){h("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),S(!0);const Z=(Q,ne)=>Array.from({length:ne},()=>Q[Math.floor(Math.random()*Q.length)]).join(""),V=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let he=0,se=0;const de=()=>{if(he>=V.length){const ne="Stargate system aligned";let le=0;h("");const W=()=>{le<ne.length?(h(ne.substring(0,le+1)),le++,setTimeout(W,30)):S(!1)};W();return}const Q=V[he];h(Z(Q.chars,32)),se++,se>=Q.iterations&&(he++,se=0),setTimeout(de,Q.duration)};de()},[]);const ae=()=>{I(!b),b||(w(!0),E(!0))};return s.jsxs("div",{className:"h-full flex flex-col",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),R&&s.jsx("div",{className:"flex items-center gap-2",children:s.jsx("button",{onClick:ae,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${b?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:b?"2D View":"3D View"})})]}),s.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[s.jsx("canvas",{ref:c,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${_?"opacity-0":"opacity-100"}`,style:{filter:_?"blur(50px)":"none"}}),b&&v&&t&&s.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${v?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:s.jsx(Ki,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,onEffectsCreated:n,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:o,onDataLoaded:x=>{oe(x)},onError:x=>{k(x),console.error("❌ Planet rendering error:",x)}})}),!b&&s.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${v?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:v&&e?s.jsx("div",{className:"w-full h-full flex items-center justify-center",children:s.jsx(qt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:s.jsx("img",{ref:r,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):s.jsx("img",{ref:r,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),R&&s.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:b?"🌍 3D":"🖼️ 2D"})]}),s.jsxs("div",{className:"text-center mt-auto",children:[s.jsxs("a",{href:a,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${g?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[s.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[s.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:s.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),m]}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),s.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",b&&P&&s.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",P.planet_info?.type," Planet",P.atmosphere&&s.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),P.rings?.has_rings&&s.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),b&&X&&s.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Qi=({currentPlanet:a,system:e,galaxy:t,systemPlanets:i})=>{const[o,n]=y.useState(null),[l,d]=y.useState(null),[c,r]=y.useState(!1),[m,h]=y.useState(!1),[g,S]=y.useState(!0);y.useEffect(()=>{if(i&&i.length>0){const _=i.findIndex(E=>E.name.toLowerCase()===a.toLowerCase());_!==-1?(_>0?(n(i[_-1].name.toLowerCase()),r(!0)):e.index>0?(n("__prev_system__"),r(!0)):r(!1),_<i.length-1?(d(i[_+1].name.toLowerCase()),h(!0)):(d("__next_system__"),h(!0))):(r(!1),h(!1))}else r(!1),h(!1);S(!1)},[a,e.index,i]);const v=async()=>{const _=t.coordinates.join(",");if(o==="__prev_system__")try{const E=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(E.ok){const b=await E.json();if(b.system&&b.system.planets&&b.system.planets.length>0){const R=b.system.planets[b.system.planets.length-1].name.toLowerCase();je(_,e.index-1,R,b.system.planets),rt(_,e.index-1),window.location.href=`/planet/${R}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else o&&(je(_,e.index,o,i),window.location.href=`/planet/${o}`)},w=async()=>{const _=t.coordinates.join(",");if(l==="__next_system__")try{const E=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(E.ok){const b=await E.json();if(b.system&&b.system.planets&&b.system.planets.length>0){const R=b.system.planets[0].name.toLowerCase();je(_,e.index+1,R,b.system.planets),rt(_,e.index+1),window.location.href=`/planet/${R}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(je(_,e.index,l,i),window.location.href=`/planet/${l}`)};return g?null:s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("button",{onClick:v,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),s.jsx("button",{onClick:w,disabled:!m,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${m?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:s.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Ji=({planet:a,system:e,galaxy:t,planet_url:i,version:o,image_url:n,cosmic_origin_time:l,initial_angle_rotation:d})=>{const[c]=y.useState(t.coordinates.join(",")),[r,m]=y.useState([]),h=_=>{m(_)},g=(_,E)=>{m(b=>b.map(I=>I.id===_?{...I,enabled:E}:I))};y.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",a.name.toLowerCase()),je(c,e.index,a.name,e.planets||[]),rt(c,e.index)},[c,e.index,a.name]);const S=_=>_.replace(/_/g," "),v=_=>_.replace(/_/g," "),w=_=>_.replace(/_/g," ");return s.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[s.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),s.jsxs("div",{className:"relative z-10",children:[s.jsx(Xt,{}),s.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[s.jsxs("div",{className:"text-center mb-8",children:[s.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:s.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",S(a.name),"'"]})}),s.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",v(e.name),"' - Galaxy '",w(t.name),"'"]}),s.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),s.jsx(Qi,{currentPlanet:a.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),s.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:s.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[s.jsx("div",{className:"order-1 lg:order-1",children:s.jsx(qi,{planetUrl:i,imageUrl:n,planet:a,cosmicOriginTime:l,initialAngleRotation:d,onEffectsCreated:h,effects:r,onToggleEffect:g})}),s.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),s.jsx("div",{className:"order-2 lg:order-2",children:s.jsx(fi,{planet:a,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:d,effects:r,onToggleEffect:g})})]})}),s.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:s.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:s.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",v(e.name),"'"]})})})]}),s.jsx(Zt,{version:o})]}),s.jsx(Qt,{currentLocation:{type:"planet",name:a.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:a.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const a=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!a||!e||!t||!i){console.error("Missing required data elements");return}const o=JSON.parse(a.textContent||"{}"),n=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),d=JSON.parse(i.textContent||"{}"),c={planet:o,system:n,galaxy:l,planet_url:d.planet_url,version:d.version,image_url:d.image_url,cosmic_origin_time:d.cosmic_origin_time,initial_angle_rotation:d.initial_angle_rotation},r=document.getElementById("atlas-react-root");r&&$t.createRoot(r).render(Pt.createElement(Ji,c))}catch(a){console.error("Error initializing Planet React app:",a)}});
