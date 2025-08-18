import{r as w,j as n,R as Ft,V as qt,c as Kt}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Jt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as Qt,U as eo,m as He,c as vt,a as to}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as oo,V as M,n as ke,T as ze,Q as St,l as wt,o as ye,R as io,p as so,q as kt,e as Ne,r as de,s as ue,N as Ae,t as tt,c as ot,C as u,u as ao,v as ht,d as xe,G as Le,w as no,x as Ut,F as we,y as ct,z as yt,h as ro,H as lo,I as co,J as Ue,B as ho,K as Et,O as mo,U as uo,X as fo,Y as po,Z as Ge,L as Mt,g as Ct,M as Gt,_ as go,S as vo,P as yo,W as xo,$ as bo,a0 as _o,a1 as So,D as Tt,A as wo}from"./atlas_CQyY8KCuwnbMb08uncIH5.js";const Eo=({effects:s,onToggleEffect:e})=>{const[t,o]=w.useState(s),[i,a]=w.useState(!1);w.useEffect(()=>{o(s)},[s]);const l=(r,d)=>{o(h=>h.map(p=>p.id===r?{...p,enabled:d}:p)),e(r,d)},c=r=>r;return t.length===0?null:n.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("div",{className:"text-xs text-gray-400",children:"3D Effects Control"}),n.jsxs("button",{onClick:()=>a(!i),className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[i?"Hide":"Show"," (",t.filter(r=>r.enabled).length,"/",t.length,")"]})]}),i&&n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:t.map(r=>n.jsxs("div",{className:"bg-white/5 rounded p-2 flex items-center justify-between",children:[n.jsxs("label",{className:"flex items-center gap-2 cursor-pointer flex-1",children:[n.jsx("input",{type:"checkbox",checked:r.enabled,onChange:d=>l(r.id,d.target.checked),className:"rounded border-gray-400 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-white/10"}),n.jsx("span",{className:`${r.enabled?"text-white":"text-gray-500"} transition-colors`,children:c(r.type)})]}),n.jsx("span",{className:`text-[10px] ${r.enabled?"text-green-400":"text-gray-600"}`,children:r.enabled?"ON":"OFF"})]},r.id))}),i&&t.length>3&&n.jsxs("div",{className:"mt-2 flex gap-2",children:[n.jsx("button",{onClick:()=>{t.forEach(r=>l(r.id,!0))},className:"text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors",children:"Enable All"}),n.jsx("button",{onClick:()=>{t.forEach(r=>l(r.id,!1))},className:"text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors",children:"Disable All"})]})]})},Mo=({planet:s,system:e,galaxy:t,cosmicOriginTime:o,initialAngleRotation:i,effects:a,onToggleEffect:l})=>{const[c,r]=w.useState(!1),d=g=>g.replace(/_/g," "),h=g=>{const _=g/86400;return _<30?`${_.toFixed(2)} days`:_<365?`${(_/30).toFixed(2)} months`:`${(_/365).toFixed(2)} years`},p=g=>{const _=g*9/5+32;return`${g.toFixed(1)}°C (${_.toFixed(1)}°F)`},m=g=>`${g.toExponential(2)} kg`,f=g=>g>=1e3?`${(g/1e3).toFixed(2)} km`:`${g.toFixed(2)} m`;return n.jsxs("div",{className:"h-full flex flex-col relative",children:[n.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),n.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[n.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),n.jsx(Qt,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),n.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),n.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),n.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[n.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),n.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),n.jsx("div",{className:"text-xs font-bold text-orange-300",children:m(s.mass)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),n.jsx("div",{className:"text-xs font-bold text-orange-300",children:f(s.diameter)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),n.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),n.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[n.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),n.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),n.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),n.jsx("div",{className:"text-xs font-bold text-cyan-300",children:h(s.orbital_period_seconds)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),n.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),n.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),n.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),n.jsx("div",{className:"text-xs font-bold text-red-300",children:p(s.surface_temperature)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),n.jsx("div",{className:"text-xs font-bold text-red-300",children:h(s.rotation_period_seconds)})]})]})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&n.jsx("button",{onClick:()=>r(!c),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:c?"▲ Less":"▼ All"})]}),n.jsx("div",{className:"flex flex-wrap gap-1",children:(c?s.elements:s.elements.slice(0,4)).map((g,_)=>n.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:g},_))})]})]}),n.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[n.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Status:"}),n.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Planet:"}),n.jsx("div",{className:"text-white truncate font-medium",children:d(s.name)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"System:"}),n.jsx("div",{className:"text-white truncate font-medium",children:d(e.name)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"System ID:"}),n.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),n.jsx("div",{className:"text-white truncate font-medium",children:d(t.name)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),n.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]}),a&&l&&n.jsx(Eo,{effects:a,onToggleEffect:l})]})},Nt={type:"change"},xt={type:"start"},Yt={type:"end"},nt=new io,Pt=new so,Co=Math.cos(70*kt.DEG2RAD),le=new M,ge=2*Math.PI,Z={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ft=1e-6;class To extends oo{constructor(e,t=null){super(e,t),this.state=Z.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ke.ROTATE,MIDDLE:ke.DOLLY,RIGHT:ke.PAN},this.touches={ONE:ze.ROTATE,TWO:ze.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new St,this._lastTargetPosition=new M,this._quat=new St().setFromUnitVectors(e.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wt,this._sphericalDelta=new wt,this._scale=1,this._panOffset=new M,this._rotateStart=new ye,this._rotateEnd=new ye,this._rotateDelta=new ye,this._panStart=new ye,this._panEnd=new ye,this._panDelta=new ye,this._dollyStart=new ye,this._dollyEnd=new ye,this._dollyDelta=new ye,this._dollyDirection=new M,this._mouse=new ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Po.bind(this),this._onPointerDown=No.bind(this),this._onPointerUp=Ao.bind(this),this._onContextMenu=zo.bind(this),this._onMouseWheel=Do.bind(this),this._onKeyDown=Lo.bind(this),this._onTouchStart=Oo.bind(this),this._onTouchMove=jo.bind(this),this._onMouseDown=Io.bind(this),this._onMouseMove=Ro.bind(this),this._interceptControlDown=Fo.bind(this),this._interceptControlUp=ko.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nt),this.update(),this.state=Z.NONE}update(e=null){const t=this.object.position;le.copy(t).sub(this.target),le.applyQuaternion(this._quat),this._spherical.setFromVector3(le),this.autoRotate&&this.state===Z.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let o=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(o)&&isFinite(i)&&(o<-Math.PI?o+=ge:o>Math.PI&&(o-=ge),i<-Math.PI?i+=ge:i>Math.PI&&(i-=ge),o<=i?this._spherical.theta=Math.max(o,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(o+i)/2?Math.max(o,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(le.setFromSpherical(this._spherical),le.applyQuaternion(this._quatInverse),t.copy(this.target).add(le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=le.length();l=this._clampDistance(c*this._scale);const r=c-l;this.object.position.addScaledVector(this._dollyDirection,r),this.object.updateMatrixWorld(),a=!!r}else if(this.object.isOrthographicCamera){const c=new M(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=r!==this.object.zoom;const d=new M(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),l=le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(nt.origin.copy(this.object.position),nt.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nt.direction))<Co?this.object.lookAt(this.target):(Pt.setFromNormalAndCoplanarPoint(this.object.up,this.target),nt.intersectPlane(Pt,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>ft||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ft||this._lastTargetPosition.distanceToSquared(this.target)>ft?(this.dispatchEvent(Nt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ge/60*this.autoRotateSpeed*e:ge/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){le.setFromMatrixColumn(t,0),le.multiplyScalar(-e),this._panOffset.add(le)}_panUp(e,t){this.screenSpacePanning===!0?le.setFromMatrixColumn(t,1):(le.setFromMatrixColumn(t,0),le.crossVectors(this.object.up,le)),le.multiplyScalar(e),this._panOffset.add(le)}_pan(e,t){const o=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;le.copy(i).sub(this.target);let a=le.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/o.clientHeight,this.object.matrix),this._panUp(2*t*a/o.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/o.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/o.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const o=this.domElement.getBoundingClientRect(),i=e-o.left,a=t-o.top,l=o.width,c=o.height;this._mouse.x=i/l*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ge*this._rotateDelta.x/t.clientHeight),this._rotateUp(ge*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ge*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(o,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(o,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(o*o+i*i);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const o=this._getSecondPointerPosition(e),i=.5*(e.pageX+o.x),a=.5*(e.pageY+o.y);this._rotateEnd.set(i,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ge*this._rotateDelta.x/t.clientHeight),this._rotateUp(ge*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(o,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(o*o+i*i);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,o={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(o.deltaY*=10),o}}function No(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Po(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Ao(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yt),this.state=Z.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Io(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Z.DOLLY;break;case ke.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Z.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Z.ROTATE}break;case ke.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Z.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Z.PAN}break;default:this.state=Z.NONE}this.state!==Z.NONE&&this.dispatchEvent(xt)}function Ro(s){switch(this.state){case Z.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Z.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Z.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Do(s){this.enabled===!1||this.enableZoom===!1||this.state!==Z.NONE||(s.preventDefault(),this.dispatchEvent(xt),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Yt))}function Lo(s){this.enabled!==!1&&this._handleKeyDown(s)}function Oo(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Z.TOUCH_ROTATE;break;case ze.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Z.TOUCH_PAN;break;default:this.state=Z.NONE}break;case 2:switch(this.touches.TWO){case ze.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Z.TOUCH_DOLLY_PAN;break;case ze.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Z.TOUCH_DOLLY_ROTATE;break;default:this.state=Z.NONE}break;default:this.state=Z.NONE}this.state!==Z.NONE&&this.dispatchEvent(xt)}function jo(s){switch(this._trackPointer(s),this.state){case Z.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Z.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Z.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Z.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Z.NONE}}function zo(s){this.enabled!==!1&&s.preventDefault()}function Fo(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ko(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class At{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class Bt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:o,ring_inner_radius:i,ring_outer_radius:a,tilt_factor:l,planet_radius:c,shape_seed:r}=e;if(!t||!o){console.warn("No ring data provided");return}const d=[...t.particles,...o.particles],h=d.length,p=new At(r||12345),m=new Ne,f=new Float32Array(h*3),g=new Float32Array(h*3),_=new Float32Array(h),b=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],S=p.choice(b);for(let E=0;E<h;E++){const X=d[E],V=this.planetRadius/(c||200),K=(r||12345)+E,I=new At(K),oe=X.distance*V,Y=X.angle,R=oe*Math.sin(Y),J=Math.asin((l||.2)*.5),x=R*Math.sin(J),D=R*Math.cos(J),L=((a||400)-(i||200))*V*.4,j=I.uniform(-L*.8,L*.8),q=I.uniform(-L*.3,L*.3),k=I.uniform(-.08,.08),W=oe+q,T=Y+k;f[E*3]=W*Math.cos(T),f[E*3+1]=x+j+this.planetRadius*.15,f[E*3+2]=D+I.uniform(-L*.4,L*.4),X.color[0]/255;const P=(X.distance-(i||200))/((a||400)-(i||200)),U=S.baseGray,Q=S.variation,ce=I.uniform(-Q,Q),ee=Math.max(.12,Math.min(.45,U+ce)),he=.8+P*.4,fe=I.uniform(.85,1.15),ve=I.uniform(0,1),pe=ve<.03?I.uniform(1.1,1.3):1,be=ee*he*fe*pe,ne=Math.max(.1,Math.min(.55,be));g[E*3]=ne,g[E*3+1]=ne,g[E*3+2]=ne;const Me=.15,_e=I.uniform(.3,.7),se=ve<.1?I.uniform(1.05,1.2):1;_[E]=X.size*Me*_e*se}m.setAttribute("position",new de(f,3)),m.setAttribute("color",new de(g,3)),m.setAttribute("size",new de(_,1)),this.material=new ue({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Ae}),this.ringSystem=new tt(m,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const o=t.rotation_period_seconds||86400,i=t.cosmicOriginTime||Date.now()/1e3,a=t.initialAngleRotation||0,c=Date.now()/1e3-i,r=2*Math.PI/o,d=(a+c*r)%(2*Math.PI);this.ringSystem.rotation.y=d}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function Uo(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new Bt(e,t)}class Xe{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const o=e*(1+this.params.width/100);this.geometry=new ot(o,32,32);const i=new u(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ue({vertexShader:Xe.vertexShader,fragmentShader:Xe.fragmentShader,uniforms:{atmosphereColor:{value:i},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:ht,side:ao,depthWrite:!1}),this.mesh=new xe(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new u(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function Go(s,e){let t=[.7,.7,.7,.15],o=12;if(e){if(e.color&&Array.isArray(e.color)){const a=e.color;t=[a[0],a[1],a[2],(a[3]||.15)*.7]}e.width&&(o=e.width)}const i={type:e?.type||"Thin",color:t,width:o,opacity:t[3],density:1};return new Xe(s,i)}class B{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,o=Math.acos(this.random()*2-1);return{x:e*Math.sin(o)*Math.cos(t),y:e*Math.sin(o)*Math.sin(t),z:e*Math.cos(o)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const $={PARTICLE_COUNT:{min:50,max:200},SPEED:{min:.05,max:.5},SIZE:{min:.5,max:2},OPACITY:{min:.2,max:.5},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05}};class qe{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6),i=new B(o);this.params={color:t.color||new u(16777215),particleCount:t.particleCount||Math.floor(i.uniform($.PARTICLE_COUNT.min,$.PARTICLE_COUNT.max)),speed:t.speed||i.uniform($.SPEED.min,$.SPEED.max),size:t.size||i.uniform($.SIZE.min,$.SIZE.max),opacity:t.opacity||i.uniform($.OPACITY.min,$.OPACITY.max),turbulence:t.turbulence||i.uniform($.TURBULENCE.min,$.TURBULENCE.max),rotationSpeed:t.rotationSpeed||i.uniform($.ROTATION_SPEED.min,$.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||i.uniform($.MOVEMENT_AMPLITUDE.min,$.MOVEMENT_AMPLITUDE.max),seed:o},this.particleCount=this.params.particleCount,this.geometry=new Ne,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new tt(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),c=this.params.color instanceof u?this.params.color:new u(this.params.color),r=this.params.seed||Math.floor(Math.random()*1e6),d=new B(r);for(let h=0;h<this.particleCount;h++){const p=d.spherePosition(e*d.uniform(1,1.1));t[h*3]=p.x,t[h*3+1]=p.y,t[h*3+2]=p.z;const m=d.colorVariation({r:c.r,g:c.g,b:c.b});o[h*3]=m.r,o[h*3+1]=m.g,o[h*3+2]=m.b,i[h]=this.params.size*d.uniform(.75,1.25),a[h]=this.params.speed*d.uniform(.6,1.4),l[h]=d.random()*Math.PI*2}this.geometry.setAttribute("position",new de(t,3)),this.geometry.setAttribute("customColor",new de(o,3)),this.geometry.setAttribute("size",new de(i,1)),this.geometry.setAttribute("speed",new de(a,1)),this.geometry.setAttribute("phase",new de(l,1))}createMaterial(){return new ue({vertexShader:qe.vertexShader,fragmentShader:qe.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:ht,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value,this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function It(s,e,t){const o=e.streaks||{},i=t||Math.floor(Math.random()*1e6),a=new B(i+3e3),l=o.count||Math.floor(a.uniform($.PARTICLE_COUNT.min,$.PARTICLE_COUNT.max)),c=o.speed||a.uniform($.SPEED.min,$.SPEED.max),r=a.uniform($.SIZE.min,$.SIZE.max),d=a.uniform($.OPACITY.min,$.OPACITY.max),h=a.uniform($.TURBULENCE.min,$.TURBULENCE.max),p=a.uniform($.ROTATION_SPEED.min,$.ROTATION_SPEED.max),m=a.uniform($.MOVEMENT_AMPLITUDE.min,$.MOVEMENT_AMPLITUDE.max),f={color:o.color?new u().setRGB(o.color[0],o.color[1],o.color[2]):new u(16777215),particleCount:l,speed:c,size:r,opacity:d,turbulence:h,seed:i,rotationSpeed:p,movementAmplitude:m};return new qe(s,f)}const z={CLOUD_COUNT:{min:15,max:30},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.9},DENSITY:{min:.5,max:2},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},PUFFINESS:{min:1,max:1.4},TIME_SPEED:{min:.1,max:3}};class Ye{cloudSystem;material;params;cloudCount;clouds=[];startTime;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6),i=new B(o);this.startTime=t.startTime||o%1e4/1e3,this.params={color:t.color||new u(16777215),cloudCount:t.cloudCount||Math.floor(i.uniform(z.CLOUD_COUNT.min,z.CLOUD_COUNT.max)),size:t.size||i.uniform(z.SIZE.min,z.SIZE.max),opacity:t.opacity||i.uniform(z.OPACITY.min,z.OPACITY.max),density:t.density||i.uniform(z.DENSITY.min,z.DENSITY.max),rotationSpeed:t.rotationSpeed||i.uniform(z.ROTATION_SPEED.min,z.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||i.uniform(z.MOVEMENT_AMPLITUDE.min,z.MOVEMENT_AMPLITUDE.max),puffiness:t.puffiness||i.uniform(z.PUFFINESS.min,z.PUFFINESS.max),timeSpeed:t.timeSpeed||i.uniform(z.TIME_SPEED.min,z.TIME_SPEED.max),seed:o,startTime:this.startTime},this.cloudCount=this.params.cloudCount,this.cloudSystem=new Le,this.material=this.createMaterial(),this.generateClouds(e)}generateClouds(e){const t=this.params.color instanceof u?this.params.color:new u(this.params.color),o=this.params.seed||Math.floor(Math.random()*1e6),i=new B(o),a=this.params.cloudsFromPython;for(let l=0;l<this.cloudCount;l++){let c,r,d,h=t,p=this.params.size*i.uniform(.8,1.2);if(a&&l<a.length){const R=a[l];c=R.position[0]*e*1.04,r=R.position[1]*e*1.04,d=R.position[2]*e*1.04,R.color&&(h=new u().setRGB(R.color[0],R.color[1],R.color[2])),p=R.radius*e*.8}else{const R=i.uniform(0,2*Math.PI),J=i.uniform(-1,1),x=Math.acos(J),D=e*i.uniform(1.02,1.06);c=D*Math.sin(x)*Math.cos(R),r=D*Math.sin(x)*Math.sin(R),d=D*Math.cos(x)}const m=p*i.uniform(.3,.8),f=Math.max(8,Math.floor(m*15)),g=new no(m*2,m*2,f,f),_=new M(c,r,d);new M(0,0,0);const b=_.clone().normalize(),S=new M,E=new M;Math.abs(b.y)<.99?S.crossVectors(b,new M(0,1,0)).normalize():S.crossVectors(b,new M(1,0,0)).normalize(),E.crossVectors(b,S).normalize();const X=new Ut;X.makeBasis(S,E,b);const V=g.attributes.position,K=new M,I=Math.sqrt(c*c+r*r+d*d);g.applyMatrix4(X);for(let R=0;R<V.count;R++){K.fromBufferAttribute(V,R);const L=K.clone().add(_).clone().normalize().multiplyScalar(I).sub(_);V.setXYZ(R,L.x,L.y,L.z)}V.needsUpdate=!0,g.computeVertexNormals(),g.translate(c,r,d);const oe=this.material.clone();oe.uniforms.cloudColor.value=h,oe.uniforms.density.value=this.params.density*i.uniform(.8,1.2),oe.uniforms.noiseOffset.value=new ye(i.uniform(0,100),i.uniform(0,100)),oe.uniforms.shapeVariation.value=i.uniform(-1,1),oe.uniforms.lightDirection.value=this.material.uniforms.lightDirection.value.clone(),oe.uniforms.lightPosition.value=this.material.uniforms.lightPosition.value.clone();const Y=new xe(g,oe);Y.userData.isAtmosphericCloud=!0,Y.userData.planetNormal=b.clone(),this.clouds.push(Y),this.cloudSystem.add(Y)}}createMaterial(){return new ue({vertexShader:Ye.vertexShader,fragmentShader:Ye.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},cloudColor:{value:new u(16777215)},density:{value:this.params.density},noiseOffset:{value:new ye(0,0)},shapeVariation:{value:0},lightDirection:{value:new M(1,1,1).normalize()},lightPosition:{value:new M(0,0,0)}},transparent:!0,blending:Ae,depthWrite:!1,side:we})}addToScene(e,t){t&&this.cloudSystem.position.copy(t),e.add(this.cloudSystem)}update(e,t){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.clouds.forEach(a=>{const l=a.material;l.uniforms.time.value=i}),this.cloudSystem.rotation.y=i*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},this.clouds.forEach(t=>{const o=t.material;e.opacity!==void 0&&(o.uniforms.opacity.value=e.opacity),e.movementAmplitude!==void 0&&(o.uniforms.movementAmplitude.value=e.movementAmplitude)})}updateLightPosition(e){this.clouds.forEach(t=>{const o=t.material;o.uniforms.lightPosition&&o.uniforms.lightPosition.value.copy(e)})}updateLightDirection(e){this.clouds.forEach(t=>{const o=t.material;o.uniforms.lightDirection&&o.uniforms.lightDirection.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function $e(s,e,t){const o=e.clouds||[];if(o.length===0){const c=t||Math.floor(Math.random()*1e6),r=new B(c+4e3),d={color:new u(1,1,1),cloudCount:15,size:.6,opacity:.7,density:.8,seed:c,rotationSpeed:.005,movementAmplitude:.02,puffiness:1.5,timeSpeed:r.uniform(z.TIME_SPEED.min,z.TIME_SPEED.max)};return new Ye(s,d)}const i=t||Math.floor(Math.random()*1e6),a=new B(i+4e3),l={color:new u(16777215),cloudCount:o.length,size:a.uniform(z.SIZE.min,z.SIZE.max),opacity:a.uniform(z.OPACITY.min,z.OPACITY.max),density:a.uniform(z.DENSITY.min,z.DENSITY.max),seed:i,rotationSpeed:a.uniform(z.ROTATION_SPEED.min,z.ROTATION_SPEED.max),movementAmplitude:a.uniform(z.MOVEMENT_AMPLITUDE.min,z.MOVEMENT_AMPLITUDE.max),puffiness:a.uniform(z.PUFFINESS.min,z.PUFFINESS.max),timeSpeed:a.uniform(z.TIME_SPEED.min,z.TIME_SPEED.max),cloudsFromPython:o};return new Ye(s,l)}class bt{landGroup;lands=[];constructor(e,t={}){this.landGroup=new Le;const o=t.seed||Math.floor(Math.random()*1e6),i=new B(o);t.greenPatches&&t.greenPatches.length>0?this.generateLandsFromPython(e,t.greenPatches,i,t):this.generateProceduralLands(e,i,t)}generateLandsFromPython(e,t,o,i){t.forEach((a,l)=>{let c=a.position_3d||a.position||[0,0,1];if(c.length===2){const T=o.uniform(0,Math.PI*2),A=Math.acos(o.uniform(-1,1));c=[Math.sin(A)*Math.cos(T),Math.sin(A)*Math.sin(T),Math.cos(A)]}const r=(a.size||.1)*e*1.8;Math.max(8,Math.min(a.sides||20,12));let d=new u(4881497),h=1;a.color&&Array.isArray(a.color)&&(d=new u(a.color[0],a.color[1],a.color[2]),a.color.length>3&&(h=a.color[3]));const p=Math.max(24,Math.min(64,Math.floor(r*32))),m=new M(c[0],c[1],c[2]).normalize(),f=new M,g=new M;Math.abs(m.y)<.99?f.crossVectors(m,new M(0,1,0)).normalize():f.crossVectors(m,new M(1,0,0)).normalize(),g.crossVectors(m,f).normalize();const _=2/Math.max(r*.05,1),b=(T,A)=>{let P=0,U=1,Q=_,ce=0;const ee=Math.min(5,Math.max(3,Math.floor(r/40)+2));for(let he=0;he<ee;he++){const fe=T*Q,ve=A*Q,pe=(Se,st)=>{const We=Se*12.9898+st*78.233;return Math.sin(We+o.uniform(0,1e3))*43758.5453%1},be=Math.floor(fe),ne=Math.floor(ve),Me=fe-be,_e=ve-ne,se=Se=>Se*Se*Se*(Se*(Se*6-15)+10),Ce=se(Me),Ie=se(_e),Be=pe(be,ne),Ve=pe(be+1,ne),it=pe(be,ne+1),Re=pe(be+1,ne+1),Pe=Be*(1-Ce)+Ve*Ce,mt=it*(1-Ce)+Re*Ce,Oe=Pe*(1-Ie)+mt*Ie;P+=Oe*U,ce+=U,U*=.5,Q*=2.2}return P/ce},S=[],E=[],X=[],V=.35,K=new Map,I=new Map;let oe=0;for(let T=0;T<=p;T++)for(let A=0;A<=p;A++){const P=(T/p-.5)*2,U=(A/p-.5)*2,Q=Math.sqrt(P*P+U*U),ce=b(P*2,U*2);if(1-Q*.5+ce*.6>V&&Q<1.2){const he=P*r,fe=U*r,pe=new M().addScaledVector(f,he).addScaledVector(g,fe).addScaledVector(m,0);S.push(pe.x,pe.y,pe.z),X.push((P+1)*.5,(U+1)*.5),K.set(`${T},${A}`,oe),I.set(`${T},${A}`,ce),oe++}}for(let T=0;T<p;T++)for(let A=0;A<p;A++){const P=K.get(`${T},${A}`),U=K.get(`${T+1},${A}`),Q=K.get(`${T},${A+1}`),ce=K.get(`${T+1},${A+1}`);P!==void 0&&U!==void 0&&Q!==void 0&&E.push(P,U,Q),U!==void 0&&ce!==void 0&&Q!==void 0&&E.push(U,ce,Q)}const Y=new Ne;Y.setAttribute("position",new ct(S,3)),Y.setAttribute("uv",new ct(X,2)),Y.setIndex(E),Y.computeVertexNormals();const R=Y.attributes.position,J=m.clone().multiplyScalar(e),x=new M;for(let T=0;T<R.count;T++){x.fromBufferAttribute(R,T);const P=x.clone().add(J).clone().normalize(),U=Y.attributes.uv;if(U){const Q=U.getX(T)*2-1,ce=U.getY(T)*2-1,ee=Math.sqrt(Q*Q+ce*ce),he=b(Q*2,ce*2),ve=Math.max(0,1-Math.pow(ee,.7))*.5+he*.5,be=(Pe=>Pe*Pe*(3-2*Pe))(ve),Me=e*1.01-e,_e=r*.15,se=Math.min(_e,Me*.9),Ce=e*.002,Ie=e+Ce,Be=e+Ce+se,Ve=kt.lerp(Ie,Be,be),Re=P.multiplyScalar(Ve).sub(J);R.setXYZ(T,Re.x,Re.y,Re.z)}}R.needsUpdate=!0,Y.computeVertexNormals(),Y.translate(J.x,J.y,J.z);const D=new yt({color:i.transparentMode?new u(15135743):d,opacity:i.transparentMode?.3:h,transparent:i.transparentMode||h<1,emissive:i.transparentMode?new u(13428479).multiplyScalar(.1):d.clone().multiplyScalar(.05),emissiveIntensity:i.transparentMode?.05:1e-7,shininess:i.transparentMode?30:8,flatShading:!1,bumpScale:.002}),L=document.createElement("canvas");L.width=L.height=64;const j=L.getContext("2d"),q=j.createImageData(64,64);for(let T=0;T<q.data.length;T+=4){const A=o.uniform(.8,1.2),P=Math.floor(128*A);q.data[T]=P,q.data[T+1]=P,q.data[T+2]=P,q.data[T+3]=255}j.putImageData(q,0,0);const k=new ro(L);k.wrapS=k.wrapT=lo,k.repeat.set(2,2),D.bumpMap=k;const W=new xe(Y,D);W.castShadow=!0,W.receiveShadow=!0,this.lands.push(W),this.landGroup.add(W)})}generateProceduralLands(e,t,o){const i=Math.floor(t.uniform(5,15));for(let a=0;a<i;a++){const l=t.uniform(0,Math.PI*2),c=Math.acos(t.uniform(-1,1)),r=new M(Math.sin(c)*Math.cos(l),Math.sin(c)*Math.sin(l),Math.cos(c)),d=e*t.uniform(.02,.08),h=new co(d,16),p=r.clone().multiplyScalar(e*1);h.lookAt(r),h.translate(p.x,p.y,p.z);const m=t.uniform(.3,.7),f=new u(.36*(1-m)+.22*m,.23*(1-m)+.36*m,0),_=o.tundraMode||!1?.25:1,b=new yt({color:o.transparentMode?new u(15135743):f,opacity:o.transparentMode?.3:_,transparent:o.transparentMode||_<1,emissive:o.transparentMode?new u(13428479).multiplyScalar(.1):657920,shininess:o.transparentMode?30:5}),S=new xe(h,b);this.lands.push(S),this.landGroup.add(S)}}addToScene(e,t){t&&this.landGroup.position.copy(t),e.add(this.landGroup)}update(e){}getObject3D(){return this.landGroup}dispose(){this.lands.forEach(e=>{e.geometry.dispose(),e.material instanceof Ue&&e.material.dispose()}),this.lands=[],this.landGroup.clear()}}function pt(s,e,t){const o=e.green_patches;if(!o||o.length===0)return null;const i=t||Math.floor(Math.random()*1e6);return new bt(s,{greenPatches:o,seed:i+6e3})}function Yo(s,e,t){const o=t||Math.floor(Math.random()*1e6),i=new B(o+7e3),a=Math.floor(i.uniform(3,8)),l=[];for(let c=0;c<a;c++){const r=i.uniform(0,Math.PI*2),d=Math.acos(i.uniform(-1,1));l.push({position_3d:[Math.sin(d)*Math.cos(r),Math.sin(d)*Math.sin(r),Math.cos(d)],size:i.uniform(.05,.15),sides:Math.floor(i.uniform(8,16)),color:[0,0,0]})}return console.log(`🧊 Creating ${a} transparent ice formations for Icy planet with seed ${o+7e3}`),new bt(s,{greenPatches:l,seed:o+7e3,transparentMode:!0})}class Bo{featuresGroup;crystals=[];cracks=[];iceCaps=[];planetRadius;constructor(e,t={}){this.featuresGroup=new Le,this.planetRadius=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new B(o);t.crystals&&t.crystals.length>0&&this.generateCrystals(t.crystals,i),t.cracks&&t.cracks.length>0&&this.generateCracks(t.cracks),t.iceCaps&&t.iceCaps.length>0&&this.generateIceCaps(t.iceCaps,i)}generateCrystals(e,t){e.forEach(o=>{const i=o.position||[0,0],a=(o.width||.05)*this.planetRadius*.8,l=(o.length||.1)*this.planetRadius*.08,c=o.angle||0,r=o.color||[172/255,215/255,230/255,1],d=this.planetRadius*.015,h=Math.max(l,d),p=new ho(a*2,h,a*1.5,4,2,4),m=p.attributes.position,f=new M;for(let k=0;k<m.count;k++){if(f.fromBufferAttribute(m,k),Math.abs(f.y)>h*.3){const W=Math.atan2(f.z,f.x),T=Math.sqrt(f.x*f.x+f.z*f.z),A=Math.round(W/(Math.PI/3))*(Math.PI/3),P=t.uniform(.8,1.2),U=T*P;f.x=Math.cos(A)*U,f.z=Math.sin(A)*U,f.y+=t.uniform(-h*.1,h*.1)}m.setXYZ(k,f.x,f.y,f.z)}m.needsUpdate=!0,p.computeVertexNormals();const g=new Et({color:new u(r[0],r[1],r[2]),transparent:!0,opacity:.8,metalness:0,roughness:.02,clearcoat:1,clearcoatRoughness:0,transmission:.7,ior:1.31,thickness:.5,emissive:new u(r[0],r[1],r[2]),emissiveIntensity:.02,flatShading:!1,side:we}),_=new xe(p,g);let b=Math.min(1,Math.max(-1,i[1]));const S=Math.pow(Math.abs(b),.3),E=Math.sign(b)*S,X=t.uniform(-.3,.3)*(1-Math.abs(E)),V=Math.min(1,Math.max(-1,E+X)),K=Math.acos(Math.abs(V)),I=Math.atan2(i[0],.001)+c,oe=this.planetRadius*t.uniform(1.0005,1.001),Y=oe*Math.sin(K)*Math.cos(I),R=oe*V,J=oe*Math.sin(K)*Math.sin(I);_.position.set(Y,R,J);const x=_.position.clone().normalize(),D=new M,L=new M;Math.abs(x.x)<.9?D.set(1,0,0):D.set(0,1,0),D.crossVectors(D,x).normalize(),L.crossVectors(x,D).normalize();const j=new Ut;j.makeBasis(D,x,L),_.rotation.setFromRotationMatrix(j),_.rotateY(t.uniform(0,Math.PI*2));const q=t.uniform(.8,1.2);_.scale.set(q,q,q),this.crystals.push(_),this.featuresGroup.add(_)})}generateCracks(e){const t=new B(42);e.forEach(o=>{const i=o.angle||0,a=(o.length||1)*this.planetRadius*2,l=o.color||[80/255,80/255,80/255,.4],c=(o.width||1)*5e-4*this.planetRadius,r=t.uniform(.6,1),d=t.uniform(0,1)>.5?1:-1,h=Math.acos(r*d),p=[],m=20;for(let S=0;S<=m;S++){const E=S/m,X=Math.sin(E*Math.PI)*.1,K=i+(E-.5)*a/(this.planetRadius*Math.sin(Math.abs(h)))+X,I=this.planetRadius*1.002*Math.sin(Math.abs(h))*Math.cos(K),oe=this.planetRadius*1.002*Math.cos(Math.abs(h))*d,Y=this.planetRadius*1.002*Math.sin(Math.abs(h))*Math.sin(K);p.push(new M(I,oe,Y))}const f=new mo(p),g=new uo(f,m*2,c,8,!1),_=new yt({color:new u(l[0],l[1],l[2]),transparent:!0,opacity:l[3]||.4,emissive:new u(0,0,0),shininess:5}),b=new xe(g,_);this.cracks.push(b),this.featuresGroup.add(b)})}generateIceCaps(e,t){e.forEach(o=>{const i=o.position||[0,0],a=(o.radius||.3)*this.planetRadius,l=o.color||[.678,.847,1,.8],c=Math.atan2(i[1],i[0]),r=Math.acos(Math.min(1,Math.max(-1,Math.sqrt(i[0]**2+i[1]**2)))),d=this.planetRadius*1.002*Math.sin(r)*Math.cos(c),h=this.planetRadius*1.002*Math.cos(r),p=this.planetRadius*1.002*Math.sin(r)*Math.sin(c),m=new M(d,h,p),f=m.clone().normalize(),g=new Le,_=Math.floor(t.uniform(8,20));for(let b=0;b<_;b++){const S=t.uniform(0,Math.PI*2),E=t.uniform(0,a*.8),X=Math.cos(S)*E,V=Math.sin(S)*E,K=new M,I=new M;Math.abs(f.y)<.99?K.crossVectors(f,new M(0,1,0)).normalize():K.crossVectors(f,new M(1,0,0)).normalize(),I.crossVectors(f,K).normalize();const R=m.clone().addScaledVector(K,X).addScaledVector(I,V).normalize().multiplyScalar(this.planetRadius*t.uniform(1.002,1.008)),J=t.uniform(a*.05,a*.15),x=t.uniform(J*.4,J*4),D=new fo(J,x,6,1,!1),L=D.attributes.position,j=new M;for(let T=0;T<L.count;T++)if(j.fromBufferAttribute(L,T),j.y>.1&&j.y<x*.9){const A=Math.atan2(j.z,j.x),P=Math.sqrt(j.x*j.x+j.z*j.z),U=Math.round(A/(Math.PI/3))*(Math.PI/3),Q=P*1.1;j.x=Math.cos(U)*Q,j.z=Math.sin(U)*Q,L.setXYZ(T,j.x,j.y,j.z)}L.needsUpdate=!0,D.computeVertexNormals();const q=new Et({color:new u(l[0],l[1],l[2]),transparent:!0,opacity:.85,metalness:0,roughness:.05,clearcoat:1,clearcoatRoughness:0,transmission:.6,ior:1.31,thickness:.8,emissive:new u(l[0],l[1],l[2]),emissiveIntensity:.03,flatShading:!0,side:we}),k=new xe(D,q);k.position.copy(R),k.lookAt(0,0,0),k.rotateX(Math.PI/2),k.rotateZ(t.uniform(0,Math.PI*2));const W=t.uniform(.7,1.3);k.scale.set(W,W,W),g.add(k),this.iceCaps.push(k)}this.featuresGroup.add(g)})}addToScene(e,t){t&&this.featuresGroup.position.copy(t),e.add(this.featuresGroup)}update(){}getObject3D(){return this.featuresGroup}dispose(){this.crystals.forEach(e=>{e.geometry.dispose(),e.material instanceof Ue&&e.material.dispose()}),this.cracks.forEach(e=>{e.geometry.dispose(),e.material instanceof Ue&&e.material.dispose()}),this.iceCaps.forEach(e=>{e.geometry.dispose(),e.material instanceof Ue&&e.material.dispose()}),this.crystals=[],this.cracks=[],this.iceCaps=[],this.featuresGroup.clear()}}function Rt(s,e,t){const o=e.crystals,i=e.cracks,a=e.ice_caps;if(!o&&!i&&!a)return null;const l=t||Math.floor(Math.random()*1e6);return new Bo(s,{crystals:o||[],cracks:i||[],iceCaps:a||[],seed:l+9e3})}class Vt{snowflakeGroup;planetRadius;materials=[];particleSystems=[];originalPositions=[];windSpeed;globalWindDirection;rng;constructor(e,t={}){this.snowflakeGroup=new Le,this.planetRadius=e;const o=t.seed||Math.floor(Math.random()*1e6);this.rng=new B(o);const i=t.particleCount||1e3;this.windSpeed=t.windSpeed||3;const a=(t.size||1)*(e*.05),l=t.opacity||1;this.globalWindDirection=this.rng.uniform(0,Math.PI*2);const c=t.colors||[new u(.9,.9,.9),new u(.7,.7,.7),new u(.5,.5,.5),new u(.3,.3,.3),new u(.1,.1,.1)];this.createSnowflakeSystem(i,a,l,c)}createSnowflakeSystem(e,t,o,i){const a=new Ne,l=[];for(let r=0;r<e;r++){const d=Math.acos(this.rng.uniform(-1,1)),h=this.rng.uniform(0,Math.PI*2),p=this.planetRadius*this.rng.uniform(1.1,1.3),m=p*Math.sin(d)*Math.cos(h),f=p*Math.cos(d),g=p*Math.sin(d)*Math.sin(h);l.push(m,f,g)}a.setAttribute("position",new ct(l,3));const c=[t*2,t*1.8,t*1.6,t*1.4,t*2.2];for(let r=0;r<i.length;r++){const d=new po({size:c[r],color:i[r],transparent:!0,opacity:o,blending:Ae,depthTest:!0,sizeAttenuation:!1});this.materials.push(d);const h=a.clone(),p=new tt(h,d);this.originalPositions[r]=new Float32Array(l),this.particleSystems.push(p),this.snowflakeGroup.add(p)}}update(e=.016){const t=Date.now()/1e3;this.particleSystems.forEach((o,i)=>{const a=o.geometry.getAttribute("position"),l=a.array,c=this.originalPositions[i],r=l.length/3;for(let d=0;d<r;d++){const h=d*3,p=c[h],m=c[h+1],f=c[h+2],g=this.windSpeed*.3*(.8+d%5*.1),_=Math.cos(this.globalWindDirection)*g*t,b=Math.sin(this.globalWindDirection)*g*t,S=Math.sin(t*.8+d*.1)*this.planetRadius*.01;l[h]=p+_,l[h+1]=m+S,l[h+2]=f+b}a.needsUpdate=!0})}addToScene(e,t){t&&this.snowflakeGroup.position.copy(t),e.add(this.snowflakeGroup)}getObject3D(){return this.snowflakeGroup}dispose(){this.materials.forEach(e=>e.dispose()),this.particleSystems.forEach(e=>e.geometry.dispose()),this.materials=[],this.particleSystems=[],this.originalPositions=[],this.snowflakeGroup.clear()}}function Dt(s,e,t){if(e.type!=="tundra")return null;const o=t||Math.floor(Math.random()*1e6),i=e.snow_intensity||.7,a=e.wind_strength||1,l=Math.floor(i*800+200),c=a*5;return new Vt(s,{particleCount:l,windSpeed:c,size:1.2,opacity:.9,seed:o+15e3})}class Ke{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;constructor(e,t=new u(16753920)){this.baseMesh=e;const o=e.geometry;this.planetRadius=o.parameters.radius||1;const i=t instanceof u?t:new u(t);this.baseMaterial=new ue({vertexShader:Ke.baseVertexShader,fragmentShader:Ke.baseFragmentShader,uniforms:{baseColor:{value:i},lightDirection:{value:new M(1,1,1).normalize()},lightPosition:{value:new M(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:we}),this.baseMesh.material=this.baseMaterial}addEffectLayer(e,t,o=1.001,i){const a=new ot(this.planetRadius*o,256,256),l=new xe(a,t);return l.position.copy(this.baseMesh.position),l.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:l,material:t,layerObject:i}),this.scene&&this.scene.add(l),l}createCloudBandsLayerMaterial(e){const t=`
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normal;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,o=`
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
    `;return new ue({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new u(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new M(1,1,1).normalize()},opacity:{value:e.opacity||.4}},transparent:!0,blending:Ae,side:we,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normal;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,o=`
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
    `,i=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((a,l)=>{l<5&&(i[l*2]=a.x,i[l*2+1]=a.y)}),new ue({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new u(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:i},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new M(1,1,1).normalize()}},transparent:!0,blending:Ae,side:we,depthWrite:!1})}createMetallicSurfaceLayerMaterial(e){const t=`
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
    `,o=`
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
    `;return new ue({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},metalColor:{value:e.color||new u(8421504)},metalness:{value:e.metalness||.8},roughness:{value:e.roughness||.4},fragmentationIntensity:{value:e.fragmentationIntensity||.5},opacity:{value:e.opacity||.8},lightDirection:{value:new M(1,1,1).normalize()},lightPosition:{value:new M(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3},crystalScale:{value:e.crystalScale||80}},transparent:!0,blending:Ae,side:we,depthWrite:!1})}createIcyTerrainLayerMaterial(e){const t=`
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
    `,o=`
      uniform vec3 iceColor;
      uniform float iceReflectivity;
      uniform float frostDensity;
      uniform float crackIntensity;
      uniform float opacity;
      uniform float organicShapeIntensity;
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      uniform float time;
      uniform float crystalScale;
      uniform float crystalDensity;
      uniform float crystalSharpness;
      uniform float frostPattern;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      // Hash function mejorada
      float hash(vec3 p) {
        p = fract(p * vec3(443.8975, 397.2973, 491.1871));
        p += dot(p, p.yxz + 19.19);
        return fract((p.x + p.y) * p.z);
      }
      
      // Ruido 3D suave
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
      
      // Grietas de hielo con profundidad real
      float iceCracks(vec2 p) {
        vec2 n = floor(p);
        vec2 f = fract(p);
        
        float minDist = 1.0;
        
        for(int i = -1; i <= 1; i++) {
          for(int j = -1; j <= 1; j++) {
            vec2 neighbor = vec2(float(i), float(j));
            vec2 point = neighbor + hash(vec3(n + neighbor, 0.0)) - f;
            float dist = length(point);
            minDist = min(minDist, dist);
          }
        }
        
        return minDist;
      }
      
      // Burbujas internas del hielo
      float iceBubbles(vec3 p) {
        float bubbles = 0.0;
        
        // Múltiples escalas de burbujas
        bubbles += smoothstep(0.8, 1.0, noise3D(p * 8.0)) * 0.6;
        bubbles += smoothstep(0.9, 1.0, noise3D(p * 16.0 + vec3(100.0))) * 0.3;
        bubbles += smoothstep(0.95, 1.0, noise3D(p * 32.0 + vec3(200.0))) * 0.1;
        
        return bubbles;
      }
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
        // Calcular dirección de luz
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Grietas principales
        float cracks = iceCracks(vUv * crackIntensity * 4.0);
        cracks = pow(cracks, 1.5);
        
        // MICROCRISTALES PROCEDURALES - cada planeta tiene su personalidad!
        float scale1 = crystalScale * 0.8;
        float scale2 = crystalScale * 1.6; 
        float scale3 = crystalScale * 3.2;
        
        float microCrystals1 = noise3D(vWorldPosition * scale1); // Cristales pequeños
        float microCrystals2 = noise3D(vWorldPosition * scale2); // Cristales diminutos  
        float microCrystals3 = noise3D(vWorldPosition * scale3); // Cristales microscópicos
        
        // Combinar escalas de cristales con densidad procedural
        float crystals = microCrystals1 * 0.6 + microCrystals2 * 0.3 + microCrystals3 * 0.1;
        crystals = smoothstep(0.3, 0.3 + crystalDensity, crystals);
        
        // Escarcha cristalina con patrón único por planeta
        float frost = noise3D(vWorldPosition * frostPattern);
        frost = smoothstep(0.6, 0.9, frost);
        
        // COLOR BASE: Hielo con microcristales
        vec3 baseIce = vec3(0.95, 0.97, 1.0);
        vec3 scratchColor = vec3(0.7, 0.8, 0.9);
        vec3 color = mix(scratchColor, baseIce, cracks);
        
        // Los microcristales añaden brillo y variación
        color = mix(color, vec3(0.98, 0.99, 1.0), crystals * 0.3);
        
        // La escarcha añade textura cristalina blanca
        color = mix(color, vec3(1.0, 1.0, 1.0), frost * 0.4);
        
        // Iluminación suave con transición gradual día/noche
        float smoothLight = ambientStrength + (lightIntensity * dayNight);
        
        // Añadir luz ambiental extra en la cara oculta para evitar corte seco
        float backLight = max(0.0, -dotNL) * 0.25; // Luz trasera suave
        float totalLight = smoothLight + backLight;
        
        vec3 finalColor = color * totalLight;
        
        // REFLEJOS DE MICROCRISTALES - esto es clave!
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 halfwayDir = normalize(lightDir + viewDir);
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        
        // Reflejo principal del hielo
        float mainSpecular = pow(NdotH, 60.0) * iceReflectivity;
        mainSpecular *= (0.2 + 0.8 * cracks);
        
        // REFLEJOS DE CRISTALES - múltiples puntos brillantes con sharpness procedural
        float sharpness1 = crystalSharpness * 0.6;
        float sharpness2 = crystalSharpness * 1.0;
        float crystalSpecular1 = pow(NdotH, sharpness1) * crystals * iceReflectivity * 0.8;
        float crystalSpecular2 = pow(NdotH, sharpness2) * crystals * iceReflectivity * 0.4;
        
        // Reflejos de escarcha - más suaves pero numerosos
        float frostSpecular = pow(NdotH, 40.0) * frost * iceReflectivity * 0.6;
        
        vec3 specular = vec3(mainSpecular + crystalSpecular1 + crystalSpecular2 + frostSpecular);
        finalColor += specular * dayNight;
        
        // Los cristales también crean pequeños destellos
        float sparkle = smoothstep(0.8, 1.0, crystals) * smoothstep(0.9, 1.0, NdotH);
        finalColor += vec3(1.0, 1.0, 1.0) * sparkle * 0.5 * dayNight;
        
        // Alpha con transición suave - visible en toda la superficie
        float smoothVisibility = smoothstep(-0.5, 0.3, dotNL); // Transición más gradual
        float alpha = (0.5 + 0.3 * cracks + 0.2 * crystals) * smoothVisibility * opacity;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;return new ue({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},iceColor:{value:e.color||new u(11591910)},iceReflectivity:{value:e.iceReflectivity||.8},frostDensity:{value:e.frostDensity||.5},crackIntensity:{value:e.crackIntensity||.4},opacity:{value:e.opacity||.7},crystalScale:{value:e.crystalScale||25},crystalDensity:{value:e.crystalDensity||.6},crystalSharpness:{value:e.crystalSharpness||150},frostPattern:{value:e.frostPattern||12},lightDirection:{value:new M(1,1,1).normalize()},lightPosition:{value:new M(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:we,depthWrite:!1})}addToScene(e){this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&e.add(t.mesh)}),this.effectLayers.length}update(e,t){this.effectLayers.forEach(o=>{if(o.material.uniforms.time&&(o.material.uniforms.time.value+=e),t!==void 0&&o.material.uniforms.rotationAngle&&(o.material.uniforms.rotationAngle.value=t),o.layerObject&&o.layerObject.update)try{o.layerObject.update(e,t)}catch(i){console.error(`Error updating layer ${o.name}:`,i)}o.mesh&&o.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof u?e:new u(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}createGenericLayerMaterial(e,t,o,i=!0,a=Ae){return o.lightDirection||(o.lightDirection={value:new M(1,1,1).normalize()}),o.lightPosition||(o.lightPosition={value:new M(0,0,0)}),new ue({vertexShader:e,fragmentShader:t,uniforms:o,transparent:i,blending:a,side:we,depthWrite:!1})}convertEffectToLayer(e,t,o=1.001){if(t instanceof ue){const i=t.clone();return i.transparent=!0,i.depthWrite=!1,i.uniforms.lightDirection||(i.uniforms.lightDirection={value:new M(1,1,1).normalize()}),this.addEffectLayer(e,i,o)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}getLayerMeshes(){const e={};return this.effectLayers.forEach(t=>{t.name&&t.mesh&&(e[t.name]=t.mesh)}),e}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const ie={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4}};class Vo{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new B(o),a=t.numBands||Math.floor(i.uniform(ie.NUM_BANDS.min,ie.NUM_BANDS.max));this.params={numBands:a,bandPositions:t.bandPositions||this.generateDefaultBandPositions(a,o),bandWidths:t.bandWidths||this.generateDefaultBandWidths(a,o),rotationAngle:t.rotationAngle||i.uniform(ie.ROTATION_ANGLE.min,ie.ROTATION_ANGLE.max),baseColor:t.baseColor||new u(16753920),bandColor:t.bandColor||new u(16747520),animationSpeed:t.animationSpeed||i.uniform(ie.ANIMATION_SPEED.min,ie.ANIMATION_SPEED.max),turbulence:t.turbulence||i.uniform(ie.TURBULENCE.min,ie.TURBULENCE.max),noiseScale:t.noiseScale||i.uniform(ie.NOISE_SCALE.min,ie.NOISE_SCALE.max),opacity:t.opacity||.4,seed:o},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const o=new Array(20).fill(0),i=new B(t+12345);for(let a=0;a<e&&a<20;a++)o[a]=i.uniform(ie.BAND_POSITIONS.min,ie.BAND_POSITIONS.max);return o}generateDefaultBandWidths(e,t){const o=new Array(20).fill(0),i=new B(t+67890);for(let a=0;a<e&&a<20;a++)o[a]=i.uniform(ie.BAND_WIDTHS.min,ie.BAND_WIDTHS.max);return o}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity)}dispose(){}}function Wo(s,e,t){const o=e.cloud_bands||{},i=t||Math.floor(Math.random()*1e6),a=new B(i+4e3),l={numBands:o.num_bands||Math.floor(a.uniform(ie.NUM_BANDS.min,ie.NUM_BANDS.max)),bandPositions:o.positions||void 0,bandWidths:o.widths||void 0,rotationAngle:o.rotation||a.uniform(ie.ROTATION_ANGLE.min,ie.ROTATION_ANGLE.max),baseColor:e.base_color?new u().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new u(16753920),bandColor:new u(16777215),animationSpeed:a.uniform(ie.ANIMATION_SPEED.min,ie.ANIMATION_SPEED.max),turbulence:e.turbulence||a.uniform(ie.TURBULENCE.min,ie.TURBULENCE.max),noiseScale:a.uniform(ie.NOISE_SCALE.min,ie.NOISE_SCALE.max),opacity:.4,seed:i};return new Vo(s,l)}const ae={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.2,max:.6}};class $o{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new B(o);this.params={stormCenters:t.stormCenters||this.generateStormCenters(o),stormColor:t.stormColor||new u(9109504),stormIntensity:t.stormIntensity||i.uniform(ae.STORM_INTENSITY.min,ae.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||i.uniform(ae.SPIRAL_SPEED.min,ae.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||i.uniform(ae.ANIMATION_SPEED.min,ae.ANIMATION_SPEED.max),opacity:t.opacity||i.uniform(ae.OPACITY.min,ae.OPACITY.max),seed:o},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new B(e+5e3),o=Math.floor(t.uniform(ae.STORM_COUNT.min,ae.STORM_COUNT.max)),i=[];for(let a=0;a<o;a++)i.push({x:t.uniform(ae.STORM_CENTERS.min,ae.STORM_CENTERS.max),y:t.uniform(ae.STORM_CENTERS.min,ae.STORM_CENTERS.max)});return i}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function Ho(s,e,t){const o=e.storms||{},i=t||Math.floor(Math.random()*1e6),a=new B(i+5e3),l={stormCenters:o.centers||void 0,stormColor:new u(9109504),stormIntensity:o.intensity||e.storm_intensity||a.uniform(ae.STORM_INTENSITY.min,ae.STORM_INTENSITY.max),spiralSpeed:o.spiral_speed||a.uniform(ae.SPIRAL_SPEED.min,ae.SPIRAL_SPEED.max),animationSpeed:a.uniform(ae.ANIMATION_SPEED.min,ae.ANIMATION_SPEED.max),opacity:a.uniform(ae.OPACITY.min,ae.OPACITY.max),seed:i};return new $o(s,l)}const me={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class dt{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new B(o),a=t.color instanceof u?t.color:t.color?new u(t.color):new u(9127187);this.params={color:a,roughness:t.roughness||i.uniform(me.ROUGHNESS.min,me.ROUGHNESS.max),rockDensity:t.rockDensity||i.uniform(me.ROCK_DENSITY.min,me.ROCK_DENSITY.max)*10,craterCount:t.craterCount||i.uniform(me.CRATER_COUNT.min,me.CRATER_COUNT.max),opacity:t.opacity||i.uniform(me.OPACITY.min,me.OPACITY.max),seed:o},this.material=new ue({vertexShader:dt.vertexShader,fragmentShader:dt.fragmentShader,uniforms:{time:{value:0},rockColor:{value:a},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new M(1,1,1).normalize()}},transparent:!0,side:we,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Zo(s,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,a=t||Math.floor(Math.random()*1e6),l=new B(a+8e3);return new dt(s,{color:i?new u(i):new u(9127187),roughness:o.roughness||l.uniform(me.ROUGHNESS.min,me.ROUGHNESS.max),rockDensity:o.rock_density||l.uniform(me.ROCK_DENSITY.min,me.ROCK_DENSITY.max)*10,craterCount:o.crater_count||l.uniform(me.CRATER_COUNT.min,me.CRATER_COUNT.max),opacity:l.uniform(me.OPACITY.min,me.OPACITY.max),seed:a})}const F={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9},CRYSTAL_SCALE:{min:15,max:35},CRYSTAL_DENSITY:{min:.4,max:.8},CRYSTAL_SHARPNESS:{min:100,max:250},FROST_PATTERN:{min:8,max:16}};class Xo{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new B(o),a=t.color instanceof u?t.color:t.color?new u(t.color):new u(11591910);this.params={color:a,iceReflectivity:t.iceReflectivity||i.uniform(F.ICE_REFLECTIVITY.min,F.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||i.uniform(F.FROST_DENSITY.min,F.FROST_DENSITY.max),crackIntensity:t.crackIntensity||i.uniform(F.CRACK_INTENSITY.min,F.CRACK_INTENSITY.max),opacity:t.opacity||i.uniform(F.OPACITY.min,F.OPACITY.max),crystalScale:t.crystalScale||i.uniform(F.CRYSTAL_SCALE.min,F.CRYSTAL_SCALE.max),crystalDensity:t.crystalDensity||i.uniform(F.CRYSTAL_DENSITY.min,F.CRYSTAL_DENSITY.max),crystalSharpness:t.crystalSharpness||i.uniform(F.CRYSTAL_SHARPNESS.min,F.CRYSTAL_SHARPNESS.max),frostPattern:t.frostPattern||i.uniform(F.FROST_PATTERN.min,F.FROST_PATTERN.max),seed:o},this.material=this.layerSystem.createIcyTerrainLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function qo(s,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,a=t||Math.floor(Math.random()*1e6),l=new B(a+6e3);return new Xo(s,{color:i?new u(i):new u(11591910),iceReflectivity:o.ice_reflectivity||l.uniform(F.ICE_REFLECTIVITY.min,F.ICE_REFLECTIVITY.max),frostDensity:o.frost_density||l.uniform(F.FROST_DENSITY.min,F.FROST_DENSITY.max),crackIntensity:o.crack_intensity||l.uniform(F.CRACK_INTENSITY.min,F.CRACK_INTENSITY.max),opacity:l.uniform(F.OPACITY.min,F.OPACITY.max),crystalScale:o.crystal_scale||l.uniform(F.CRYSTAL_SCALE.min,F.CRYSTAL_SCALE.max),crystalDensity:o.crystal_density||l.uniform(F.CRYSTAL_DENSITY.min,F.CRYSTAL_DENSITY.max),crystalSharpness:o.crystal_sharpness||l.uniform(F.CRYSTAL_SHARPNESS.min,F.CRYSTAL_SHARPNESS.max),frostPattern:o.frost_pattern||l.uniform(F.FROST_PATTERN.min,F.FROST_PATTERN.max),seed:a})}const re={METALNESS:{min:.5,max:5},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.2,max:.9},CRYSTAL_SCALE:{min:17,max:230}};class Ko{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new B(o),a=t.color instanceof u?t.color:t.color?new u(t.color):new u(8421504);this.params={color:a,metalness:t.metalness||i.uniform(re.METALNESS.min,re.METALNESS.max),roughness:t.roughness||i.uniform(re.ROUGHNESS.min,re.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||i.uniform(re.FRAGMENTATION_INTENSITY.min,re.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||i.uniform(re.OPACITY.min,re.OPACITY.max),seed:o,noiseScale:t.noiseScale||8,noiseIntensity:t.noiseIntensity||.3,crystalScale:t.crystalScale||i.uniform(re.CRYSTAL_SCALE.min,re.CRYSTAL_SCALE.max)},this.material=this.layerSystem.createMetallicSurfaceLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Jo(s,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,a=t||Math.floor(Math.random()*1e6),l=new B(a+7e3),c=l.uniform(.8,1.2);return new Ko(s,{color:i?new u(i):new u(8421504),metalness:o.metalness||l.uniform(re.METALNESS.min,re.METALNESS.max),roughness:o.roughness||l.uniform(re.ROUGHNESS.min,re.ROUGHNESS.max),fragmentationIntensity:o.fragmentation||l.uniform(re.FRAGMENTATION_INTENSITY.min,re.FRAGMENTATION_INTENSITY.max),opacity:l.uniform(re.OPACITY.min,re.OPACITY.max),seed:a,noiseScale:4*c,noiseIntensity:.3,crystalScale:l.uniform(re.CRYSTAL_SCALE.min,re.CRYSTAL_SCALE.max)})}class Wt{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6);this.rng=new B(o),this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||50,speed:t.speed||.5,size:t.size||1,opacity:t.opacity||.3,brightness:t.brightness||1,seed:o},this.particleCount=this.params.particleCount,this.geometry=new Ne,this.createParticles(e),this.createMaterial(),this.particleSystem=new tt(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),i=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),l=e*1.3;for(let c=0;c<this.particleCount;c++){const r=this.rng.random()*Math.PI*2,d=this.rng.random()*2-1,h=this.rng.random(),p=Math.acos(d),m=l*Math.cbrt(h);t[c*3]=m*Math.sin(p)*Math.cos(r),t[c*3+1]=m*Math.sin(p)*Math.sin(r),t[c*3+2]=m*Math.cos(p),o[c]=this.params.size*(.5+this.rng.random()*.5),i[c]=this.params.speed*(.8+this.rng.random()*.4),a[c]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new de(t,3)),this.geometry.setAttribute("size",new de(o,1)),this.geometry.setAttribute("speed",new de(i,1)),this.geometry.setAttribute("phase",new de(a,1))}createMaterial(){const e=this.params.color instanceof u?this.params.color:new u().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),t=`
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
    `,o=`
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
    `;this.material=new ue({uniforms:{time:{value:0},color:{value:e},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:t,fragmentShader:o,transparent:!0,blending:ht,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;const t=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*t}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof u?e.color:new u().setRGB(e.color[0],e.color[1],e.color[2]);this.material.uniforms.color.value=t}e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Lt(s,e,t){const o=e.streaks||e,i={color:o.color||[.95,.95,1],particleCount:o.particleCount||30,speed:o.speed||.3,size:.8,opacity:.2,brightness:.8,seed:t||Math.floor(Math.random()*1e6)};return new Wt(s,i)}const H={STAR_COUNT:{min:150,max:450},MIN_BRIGHTNESS:{min:.4,max:.7},MAX_BRIGHTNESS:{min:.8,max:1},MIN_SIZE:{min:1.2,max:1.8},MAX_SIZE:{min:3.5,max:5},DISTANCE:{min:300,max:600},TWINKLE_SPEED:{min:.002,max:.008}};class Je{starSystem;material;geometry;params;starCount;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6);console.log("🌟 StarFieldEffect - Using seed:",o,"from params:",t.seed);const i=new B(o+1e4);this.params={color:t.color||new u(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(i.uniform(H.STAR_COUNT.min,H.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:i.uniform(H.MIN_BRIGHTNESS.min,H.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:i.uniform(H.MAX_BRIGHTNESS.min,H.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:i.uniform(H.MIN_SIZE.min,H.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:i.uniform(H.MAX_SIZE.min,H.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:i.uniform(H.DISTANCE.min,H.DISTANCE.max),seed:o,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:i.uniform(H.TWINKLE_SPEED.min,H.TWINKLE_SPEED.max)},this.starCount=this.params.starCount,this.geometry=new Ne,this.material=this.createMaterial(),this.generateStars(e),this.starSystem=new tt(this.geometry,this.material)}generateStars(e){const t=new Float32Array(this.starCount*3),o=new Float32Array(this.starCount),i=new Float32Array(this.starCount),a=new Float32Array(this.starCount),l=this.params.seed,c=new B(l+1e4);for(let r=0;r<this.starCount;r++){const d=c.uniform(0,2*Math.PI),h=c.uniform(-1,1),p=Math.acos(h),m=this.params.distance*c.uniform(.8,1.2),f=m*Math.sin(p)*Math.cos(d),g=m*Math.sin(p)*Math.sin(d),_=m*Math.cos(p);t[r*3]=f,t[r*3+1]=g,t[r*3+2]=_,o[r]=c.uniform(this.params.minSize,this.params.maxSize),i[r]=c.uniform(this.params.minBrightness,this.params.maxBrightness),a[r]=c.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new de(t,3)),this.geometry.setAttribute("size",new de(o,1)),this.geometry.setAttribute("brightness",new de(i,1)),this.geometry.setAttribute("twinklePhase",new de(a,1))}createMaterial(){const e=this.params.color instanceof u?this.params.color:new u(this.params.color);return new ue({vertexShader:Je.vertexShader,fragmentShader:Je.fragmentShader,uniforms:{time:{value:0},starColor:{value:e},twinkleSpeed:{value:this.params.twinkleSpeed}},transparent:!0,blending:ht,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.starSystem.position.copy(t),e.add(this.starSystem)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof u?e.color:new u(e.color);this.material.uniforms.starColor.value=t}e.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=e.twinkleSpeed)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qo(s,e){const t=e!==void 0?e:Math.floor(Math.random()*1e6);console.log("🌟 createStarFieldFromPythonData - planetSeed:",e,"final seed:",t);const o=new B(t+1e4),i={color:new u(16777215),starCount:Math.floor(o.uniform(H.STAR_COUNT.min,H.STAR_COUNT.max)),minBrightness:o.uniform(H.MIN_BRIGHTNESS.min,H.MIN_BRIGHTNESS.max),maxBrightness:o.uniform(H.MAX_BRIGHTNESS.min,H.MAX_BRIGHTNESS.max),minSize:o.uniform(H.MIN_SIZE.min,H.MIN_SIZE.max),maxSize:o.uniform(H.MAX_SIZE.min,H.MAX_SIZE.max),distance:o.uniform(H.DISTANCE.min,H.DISTANCE.max),seed:t,twinkleSpeed:o.uniform(H.TWINKLE_SPEED.min,H.TWINKLE_SPEED.max)};return new Je(s,i)}class Ot{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new u(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new Le,this.generateFragments()}generateFragments(){const e=new Ge({color:this.params.color instanceof u?this.params.color:new u(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const o=this.generateFragmentGeometry(),i=new xe(o,e);this.positionFragment(i,t),i.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const a=this.params.size*(Math.random()*.5+.75);i.scale.set(a,a,a),i.userData={rotationAxis:new M(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(i),this.fragments.add(i)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],o=[],i=[];i.push(new M(0,0,0));for(let c=0;c<e;c++){const r=c/e*Math.PI*2,d=Math.random()*.5+.5,h=(Math.random()-.5)*.3;i.push(new M(Math.cos(r)*d,Math.sin(r)*d,h))}for(let c=1;c<=e;c++){const d=i[c].clone();d.z+=Math.random()*.4+.2,i.push(d)}for(const c of i)t.push(c.x,c.y,c.z);for(let c=1;c<e;c++)o.push(0,c,c+1);o.push(0,e,1);const a=i.length-e-1;for(let c=0;c<e-1;c++)o.push(a,a+c+2,a+c+1);o.push(a,a+1,a+e);for(let c=0;c<e;c++){const r=c+1,d=(c+1)%e+1,h=r+e,p=d+e;o.push(r,h,d),o.push(d,h,p)}const l=new Ne;return l.setAttribute("position",new ct(t,3)),l.setIndex(o),l.computeVertexNormals(),l}positionFragment(e,t){let o;switch(this.params.distribution){case"edge":o=this.generateEdgePosition(t);break;case"surface":o=this.generateSurfacePosition();break;case"random":default:o=this.generateRandomPosition();break}e.position.copy(o)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,o=this.planetRadius*(.95+Math.random()*.1),i=(Math.random()-.5)*this.planetRadius*.5;return new M(Math.cos(t)*o,i,Math.sin(t)*o)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),o=this.planetRadius*(1+Math.random()*.05);return new M(o*Math.sin(t)*Math.cos(e),o*Math.sin(t)*Math.sin(e),o*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;return new M(e*Math.sin(t)*Math.cos(o),e*Math.sin(t)*Math.sin(o),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,o)=>{const i=t.userData;t.rotateOnAxis(i.rotationAxis,i.rotationSpeed*e*this.params.animationSpeed);const a=Math.sin(Date.now()*.001+o)*.001;t.position.y+=a*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof u?e.color:new u(e.color);this.fragmentMeshes.forEach(o=>{o.material instanceof Ge&&(o.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof Ge&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Ue&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Ue&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function rt(s){const e=s.replace("#",""),t=parseInt(e.substr(0,2),16)/255,o=parseInt(e.substr(2,2),16)/255,i=parseInt(e.substr(4,2),16)/255;return new u(t,o,i)}function gt(s){return s.length>=3?new u(s[0],s[1],s[2]):new u(.5,.5,.5)}function Ze(s){if(s.ocean_color){if(typeof s.ocean_color=="string")return rt(s.ocean_color);if(Array.isArray(s.ocean_color))return gt(s.ocean_color)}if(s.planet_info?.base_color){if(typeof s.planet_info.base_color=="string")return rt(s.planet_info.base_color);if(Array.isArray(s.planet_info.base_color))return gt(s.planet_info.base_color)}if(s.base_color){if(typeof s.base_color=="string")return rt(s.base_color);if(Array.isArray(s.base_color))return gt(s.base_color)}const e=s.planet_info?.type||s.type||"Unknown";return ei(e)}function ei(s){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[s]||"#FFFFFF";return rt(t)}class Qe{material;params;oceanLayerMesh;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new u(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new u(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new u(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof u?this.params.landmassColor:new u(this.params.landmassColor),t=this.params.foamColor instanceof u?this.params.foamColor:new u(this.params.foamColor),o=this.params.oceanColor instanceof u?this.params.oceanColor:new u(this.params.oceanColor);return new ue({vertexShader:Qe.vertexShader,fragmentShader:Qe.fragmentShader,uniforms:{time:{value:0},baseColor:{value:o},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:o}}})}apply(e){this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const o=new xe(t,this.material);o.position.copy(e.position),o.rotation.copy(e.rotation),this.oceanLayerMesh=o}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const o=e[t];if(o!==void 0&&this.material.uniforms[t])if(o instanceof u||Array.isArray(o)){const i=o instanceof u?o:new u(o);this.material.uniforms[t].value=i}else this.material.uniforms[t].value=o})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh)):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function ti(s){const e=Ze(s),t=[e.r,e.g,e.b];let o=.3,i=2,a=8,l=.3,c=.2;if(s.seeds){const d=s.seeds.shape_seed,p=(m=>{let f=m;return()=>(f=(f*1664525+1013904223)%4294967296,f/4294967296)})(d);o=.2+p()*.3,i=1.5+p()*1.5,a=6+p()*6,l=.25+p()*.15,c=.15+p()*.1}const r={waveIntensity:o,waveSpeed:i,waveScale:a,landmassThreshold:l,deepOceanThreshold:c,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new u(.9,.9,1),foamIntensity:.4,oceanColor:t};return new Qe(r)}class et{mesh;material;params;static vertexShader=`
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vDisplacement;
    
    uniform float uTime;
    uniform float uWaveAmplitude;
    uniform float uNoiseScale;
    uniform float uSecondaryWaveScale;
    uniform float uPrimaryFlowSpeed;
    uniform float uSecondaryFlowSpeed;
    
    //	Simplex 3D Noise 
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    float snoise(vec3 v){ 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;

      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );

      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;

      i = mod(i, 289.0 ); 
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

      float n_ = 1.0/7.0;
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);

      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }
    
    // FBM (Fractal Brownian Motion)
    float fbm(vec3 p, int octaves, float persistence, float lacunarity) {
      float amplitude = 0.5;
      float frequency = 1.0;
      float total = 0.0;
      float normalization = 0.0;

      for (int i = 0; i < octaves; i++) {
        float noiseValue = snoise(p * frequency);
        total += noiseValue * amplitude;
        normalization += amplitude;
        amplitude *= persistence;
        frequency *= lacunarity;
      }

      return total / normalization;
    }
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      
      vec3 pos = position;
      
      // Corrientes oceánicas principales usando FBM - velocidad configurable
      float primaryFlow = fbm(
        vec3(pos.x * uNoiseScale, pos.y * uNoiseScale, pos.z * uNoiseScale + uTime * uPrimaryFlowSpeed),
        4, 0.5, 2.0
      );
      
      // Corrientes secundarias más pequeñas - movimiento contrario configurable
      float secondaryFlow = fbm(
        vec3(pos.x * uSecondaryWaveScale, pos.y * uSecondaryWaveScale, pos.z * uSecondaryWaveScale - uTime * uSecondaryFlowSpeed),
        3, 0.4, 2.5
      );
      
      // Combinar ambas corrientes
      float displacement = primaryFlow * 0.7 + secondaryFlow * 0.3;
      displacement *= uWaveAmplitude;
      
      // Aplicar desplazamiento en la dirección de la normal
      pos += normal * displacement;
      vDisplacement = displacement;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      vViewPosition = -mvPosition.xyz;
      vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    varying float vDisplacement;
    
    uniform float uTime;
    uniform float uFlowSpeed;
    uniform float uFresnelPower;
    uniform float uOpacity;
    uniform vec3 uColorDeep;
    uniform vec3 uColorShallow;
    uniform float uNoiseScale;
    uniform float uUvPatternSpeed1;
    uniform float uUvPatternSpeed2;
    
    // Simplex noise function (same as vertex shader)
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
    
    float snoise(vec3 v){ 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;
      i = mod(i, 289.0 ); 
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 1.0/7.0;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }
    
    void main() {
      vec3 viewDirection = normalize(vViewPosition);
      vec3 normal = normalize(vNormal);
      
      // Efecto Fresnel para los bordes
      float fresnel = pow(1.0 - abs(dot(viewDirection, normal)), uFresnelPower);
      
      // Patrón de flujo animado - más dinámico
      float flowPattern = snoise(vWorldPosition * uNoiseScale + vec3(uTime * uFlowSpeed, uTime * uFlowSpeed * 0.5, 0.0));
      flowPattern = (flowPattern + 1.0) * 0.5; // Normalizar a 0-1
      
      // Variación adicional basada en la posición UV - velocidades configurables
      float uvPattern = sin(vUv.x * 15.0 + uTime * uUvPatternSpeed1) * cos(vUv.y * 15.0 - uTime * uUvPatternSpeed2);
      uvPattern = (uvPattern + 1.0) * 0.5;
      
      // Combinar patrones
      float combinedPattern = flowPattern * 0.7 + uvPattern * 0.3;
      
      // Calcular opacidad basada en el desplazamiento y el fresnel
      float opacity = uOpacity;
      opacity *= (0.4 + fresnel * 0.6); // Más visible en los bordes
      opacity *= (0.6 + abs(vDisplacement) * 15.0); // Más visible donde hay olas
      opacity *= (0.5 + combinedPattern * 0.5); // Variación por el patrón de flujo
      
      // Aumentar opacidad en áreas iluminadas para mejor contraste
      float lightIntensity = max(dot(normal, vec3(0.5, 0.8, 0.3)), 0.0);
      opacity = mix(opacity, opacity * 1.3, lightIntensity * 0.5);
      
      // Color gradiente basado en la profundidad y el patrón
      vec3 color = mix(uColorDeep, uColorShallow, combinedPattern);
      
      // Añadir un brillo sutil en las crestas de las olas
      float highlight = smoothstep(0.01, 0.02, vDisplacement);
      color += vec3(0.2, 0.3, 0.4) * highlight * fresnel;
      
      // Sombreado adaptativo según la iluminación
      vec3 lightDir = normalize(vec3(0.5, 0.8, 0.3));
      float NdotL = max(dot(normal, lightDir), 0.0);
      
      // En áreas iluminadas, usar colores más oscuros para contraste
      vec3 finalColor = mix(
        vec3(0.4, 0.5, 0.6), // Color oscuro para áreas iluminadas
        vec3(0.9, 0.95, 1.0), // Color claro para áreas en sombra
        1.0 - NdotL
      );
      
      // Aplicar sombreado
      finalColor *= (0.5 + 0.5 * NdotL);
      finalColor *= (0.7 + 0.3 * fresnel);
      
      // Mezclar con color del agua, más intenso en áreas iluminadas
      float colorMix = mix(0.35, 0.55, NdotL);
      finalColor = mix(finalColor, color, colorMix);
      
      gl_FragColor = vec4(finalColor, opacity);
    }
  `;constructor(e,t={}){this.params={radius:t.radius||e*.999,detail:t.detail||128,flowSpeed:t.flowSpeed||.5,waveAmplitude:t.waveAmplitude||.02,opacity:t.opacity||.75,colorDeep:t.colorDeep||new u(4147),colorShallow:t.colorShallow||new u(26333),...t};const o=new ot(this.params.radius,this.params.detail,this.params.detail);this.material=new ue({vertexShader:et.vertexShader,fragmentShader:et.fragmentShader,uniforms:{uTime:{value:0},uFlowSpeed:{value:this.params.flowSpeed},uWaveAmplitude:{value:this.params.waveAmplitude},uFresnelPower:{value:1.5},uOpacity:{value:this.params.opacity},uColorDeep:{value:this.params.colorDeep instanceof u?this.params.colorDeep:new u(this.params.colorDeep)},uColorShallow:{value:this.params.colorShallow instanceof u?this.params.colorShallow:new u(this.params.colorShallow)},uNoiseScale:{value:3},uSecondaryWaveScale:{value:6},uPrimaryFlowSpeed:{value:this.params.flowSpeed||.5},uSecondaryFlowSpeed:{value:(this.params.flowSpeed||.5)*1.6},uUvPatternSpeed1:{value:(this.params.flowSpeed||.5)*4},uUvPatternSpeed2:{value:(this.params.flowSpeed||.5)*3}},transparent:!0,depthWrite:!1,depthTest:!0,side:we,blending:Ae}),this.mesh=new xe(o,this.material),this.mesh.renderOrder=-1,console.log("🌊 FluidLayersEffect created with params:",this.params)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh),console.log("🌊 FluidLayers mesh added to scene at position:",this.mesh.position)}update(e,t){this.material.uniforms.uTime.value+=e,t!==void 0&&(this.mesh.rotation.y=t)}updateParams(e){if(this.params={...this.params,...e},e.flowSpeed!==void 0&&(this.material.uniforms.uFlowSpeed.value=e.flowSpeed,this.material.uniforms.uPrimaryFlowSpeed.value=e.flowSpeed,this.material.uniforms.uSecondaryFlowSpeed.value=e.flowSpeed*1.6,this.material.uniforms.uUvPatternSpeed1.value=e.flowSpeed*4,this.material.uniforms.uUvPatternSpeed2.value=e.flowSpeed*3),e.waveAmplitude!==void 0&&(this.material.uniforms.uWaveAmplitude.value=e.waveAmplitude),e.opacity!==void 0&&(this.material.uniforms.uOpacity.value=e.opacity),e.colorDeep){const t=e.colorDeep instanceof u?e.colorDeep:new u(e.colorDeep);this.material.uniforms.uColorDeep.value=t}if(e.colorShallow){const t=e.colorShallow instanceof u?e.colorShallow:new u(e.colorShallow);this.material.uniforms.uColorShallow.value=t}}getObject3D(){return this.mesh}dispose(){this.mesh.geometry&&this.mesh.geometry.dispose(),this.material&&this.material.dispose()}}function jt(s,e){let t=.5,o=.025,i=.75;if(e.seeds){const l=e.seeds.shape_seed||e.seeds.planet_seed,r=(d=>{let h=d;return()=>(h=(h*1664525+1013904223)%4294967296,h/4294967296)})(l);t=.05+r()*.3,o=.02+r()*.02,i=.25+r()*.6}const a={radius:s*.999,detail:128,flowSpeed:t,waveAmplitude:o*.4,opacity:i,colorDeep:new u(4147),colorShallow:new u(26333)};return new et(s,a)}class $t{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new Le,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,o=e,i=t*Math.cos(o),a=t*Math.sin(o),l=a*.8,c=new Ne,r=new Float32Array([0,0,0,i,l,a]);c.setAttribute("position",new de(r,3));const d=new Mt({color:16776960,linewidth:5,transparent:!1});this.sunLine=new Ct(c,d),this.debugGroup.add(this.sunLine);const h=e+Math.PI,p=t*.7,m=p*Math.cos(h),f=0,g=p*Math.sin(h),_=new ot(this.planetRadius*.15,16,16),b=new Gt({color:16776960,transparent:!1,opacity:1}),S=new xe(_,b);S.position.set(m,f,g),this.debugGroup.add(S),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=new Ne,i=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);o.setAttribute("position",new de(i,3));const a=new Mt({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new Ct(o,a),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,o=this.params.rotationPeriod||86400,i=this.params.initialAngleRotation||0,a=e-t,l=2*Math.PI/o;return(i+a*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),o=this.planetRadius*20,i=this.sunLine.geometry,a=i.attributes.position.array;a[3]=o*Math.cos(t),a[4]=0,a[5]=o*Math.sin(t),i.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=this.rotationLine.geometry,i=o.attributes.position.array;i[0]=-t*Math.cos(e),i[1]=0,i[2]=-t*Math.sin(e),i[3]=t*Math.cos(e),i[4]=0,i[5]=t*Math.sin(e),o.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function oi(s,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:s.debug?.cosmic_origin_time||s.timing?.cosmic_origin_time||s.cosmicOriginTime,rotationPeriod:s.planet_info?.rotation_period||s.rotation_period_seconds||86400,initialAngleRotation:s.debug?.initial_angle_rotation||s.timing?.initial_angle_rotation||s.initialAngleRotation||0,planetRadius:e,orbitalAngle:s.timing?.orbital_angle||0,sunAngle:s.sun_angle||s.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new $t(e,t)}const ii=!1;class Fe{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return Fe.instance||(Fe.instance=new Fe),Fe.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new qe(t,e),fromPythonData:(e,t)=>It(t,e.atmosphere||{})}),this.registerEffect("atmosphere_clouds",{create:(e,t)=>new Ye(t,e),fromPythonData:(e,t)=>$e(t,e.surface_elements||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new Wt(t,e),fromPythonData:(e,t)=>Lt(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new Xe(t,e),fromPythonData:(e,t)=>Go(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new Bt(t,e),fromPythonData:(e,t)=>Uo(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new Ot(t,e),fromPythonData:(e,t)=>new Ot(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("land_masses",{create:(e,t)=>new bt(t,e),fromPythonData:(e,t)=>pt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("ocean_waves",{create:(e,t)=>new Qe(e),fromPythonData:(e,t)=>ti(e)}),this.registerEffect("fluid_layers",{create:(e,t)=>new et(t,e),fromPythonData:(e,t)=>jt(t,e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("star_field",{create:(e,t)=>new Je(t,e),fromPythonData:(e,t)=>Qo(t,e.seeds?.planet_seed||e.planet_seed)}),this.registerEffect("tundra_snowflakes",{create:(e,t)=>new Vt(t,e),fromPythonData:(e,t)=>Dt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new $t(t,e),fromPythonData:(e,t)=>oi(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,o,i,a=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const c=l.create(t,o,i);if(!c)return null;const r={id:`effect_${this.nextId++}`,type:e,effect:c,priority:a,enabled:!0};return this.effects.set(r.id,r),r}catch(c){return console.error(`Error creating effect '${e}':`,c),null}}createEffectFromPythonData(e,t,o,i,a=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,o,i,a);try{const c=l.fromPythonData(t,o,i);if(!c)return null;const r={id:`effect_${this.nextId++}`,type:e,effect:c,priority:a,enabled:!0};return this.effects.set(r.id,r),r}catch(c){return console.error(`Error creating effect '${e}' from Python data:`,c),null}}createEffectsFromList(e,t,o){const i=[],a=e.sort((l,c)=>(l.priority||0)-(c.priority||0));for(const l of a){const c=this.createEffect(l.type,l.params,t,o,l.priority);c&&(c.enabled=l.enabled!==!1,i.push(c))}return i}createEffectsFromPythonPlanetData(e,t,o,i,a){const l=[];try{const c=Ze(e);if(a?this.layerSystem=a:this.layerSystem=new Ke(o,c),e.surface_elements){const r=e.surface_elements;if(r.effects_3d&&Array.isArray(r.effects_3d))for(const d of r.effects_3d){if(d.type==="atmospheric_streaks"){const p=Lt(t,d.params,e.seeds?.shape_seed+3e3),m={id:`effect_${this.nextId++}`,type:"atmospheric_streaks",effect:p,priority:d.priority||0,enabled:!0,name:"Atmospheric Streaks"};this.effects.set(m.id,m),l.push(m),p.addToScene(i,o.position);continue}const h=this.createEffect(d.type,d.params,t,o,d.priority||0);h?(h.name=d.type.replace(/_/g," ").replace(/\b\w/g,p=>p.toUpperCase()),l.push(h),h.effect.apply&&h.effect.apply(o),h.effect.addToScene&&h.effect.addToScene(i,o.position)):console.error("❌ FALLO AL CREAR EFECTO:",d.type)}switch(r.type){case"gas_giant":if(this.layerSystem){const m=Wo(this.layerSystem,{...r,base_color:c,turbulence:e.turbulence||r.turbulence},e.seeds?.shape_seed||e.seeds?.planet_seed||e.seeds?.planet_seed),f=Ho(this.layerSystem,{...r,base_color:c,storm_intensity:e.storm_intensity||r.storm_intensity},(e.seeds?.shape_seed||e.seeds?.planet_seed)+1e3),g={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:m,priority:0,enabled:!0};this.effects.set(g.id,g),l.push(g);const _={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:f,priority:1,enabled:!0};this.effects.set(_.id,_),l.push(_)}else console.error("❌ PlanetLayerSystem not initialized!");break;case"metallic":case"metallic_3d":if(this.layerSystem){const m=Jo(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),f={id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:m,priority:0,enabled:!0};this.effects.set(f.id,f),l.push(f)}break;case"rocky":if(this.layerSystem){const m=Zo(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),f={id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:m,priority:0,enabled:!0};if(this.effects.set(f.id,f),l.push(f),r.clouds&&r.clouds.length>0){const g=$e(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),_={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:g,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(_.id,_),l.push(_),g.addToScene(i,o.position)}}break;case"icy":if(this.layerSystem){const m=qo(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),f={id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:m,priority:0,enabled:!0};this.effects.set(f.id,f),l.push(f);const g=Yo(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+8e3);if(g){const b={id:`effect_${this.nextId++}`,type:"transparent_land_masses",effect:g,priority:1,enabled:!0,name:"Ice Formations"};this.effects.set(b.id,b),l.push(b),g.addToScene(i,o.position),console.log("🧊 Ice Formations (transparent LandMasses) added to Icy planet")}else console.warn("❄️ Failed to create transparent LandMasses for Icy planet");if(r.clouds&&r.clouds.length>0){const b=$e(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),S={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:b,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(S.id,S),l.push(S),b.addToScene(i,o.position),console.log("☁️ Atmospheric Clouds added to Icy planet")}const _=Rt(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(_){const b={id:`effect_${this.nextId++}`,type:"icy_features",effect:_,priority:2,enabled:!0,name:"Ice Crystals & Features"};this.effects.set(b.id,b),l.push(b),_.addToScene(i,o.position),console.log("❄️ Icy Features (crystals, cracks, ice caps) added to Icy planet")}}break;case"oceanic":const d=jt(t,e);if(d){const m={id:`effect_${this.nextId++}`,type:"fluid_layers",effect:d,priority:3,enabled:!0,name:"Fluid Ocean Layers"};this.effects.set(m.id,m),l.push(m),d.addToScene(i,o.position),console.log("🌊 FluidLayers effect added for oceanic planet")}if(r.green_patches&&r.green_patches.length>0){const m=pt(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(m){const f={id:`effect_${this.nextId++}`,type:"land_masses",effect:m,priority:5,enabled:!0,name:"Land Masses (Islands)"};this.effects.set(f.id,f),l.push(f),m.addToScene(i,o.position)}}if(r.clouds&&r.clouds.length>0){const m=$e(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),f={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:m,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(f.id,f),l.push(f),m.addToScene(i,o.position)}break;case"tundra":if(r.green_patches&&r.green_patches.length>0){const m=pt(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(m){const f={id:`effect_${this.nextId++}`,type:"land_masses",effect:m,priority:5,enabled:!0,name:"Tundra Terrain"};this.effects.set(f.id,f),l.push(f),m.addToScene(i,o.position),console.log("🏔️ Tundra terrain (LandMasses) added")}}const h=Rt(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(h){const m={id:`effect_${this.nextId++}`,type:"icy_features",effect:h,priority:6,enabled:!0,name:"Snow Patches & Ice"};this.effects.set(m.id,m),l.push(m),h.addToScene(i,o.position),console.log("❄️ Sparse ice features added to Tundra planet")}if(r.clouds&&r.clouds.length>0){const m=$e(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),f={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:m,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(f.id,f),l.push(f),m.addToScene(i,o.position),console.log("☁️ Atmospheric clouds added to Tundra planet")}const p=Dt(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+15e3);if(p){const m={id:`effect_${this.nextId++}`,type:"tundra_snowflakes",effect:p,priority:20,enabled:!0,name:"Snowflakes"};this.effects.set(m.id,m),l.push(m),p.addToScene(i,o.position),console.log("❄️ Tundra snowflakes added to Tundra planet")}break;default:if(o.material instanceof Ge){const m=Ze(e);o.material.color.copy(m)}break}}else if(o.material instanceof Ge){const r=Ze(e);o.material.color.copy(r)}if(e.atmosphere){if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const r=It(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(r){const d={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:r,priority:20,enabled:!0};this.effects.set(d.id,d),l.push(d),r.addToScene(i,o.position)}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const r=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),d={...e.atmosphere};r==="oceanic"&&(d.opacity=Math.min(d.opacity||.3,.15),d.width=Math.min(d.width||15,8));const h=this.createEffectFromPythonData("atmosphere",d,t,o,5);h&&(l.push(h),h.effect.addToScene(i,o.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){const r=this.createEffectFromPythonData("ring_system",e,t,o,1);r?(l.push(r),r.effect.addToScene(i,o.position)):console.warn("⚠️ Failed to create ring effect")}if(e.surface_elements?.has_fragmentation_zones){const r=this.createEffectFromPythonData("fragmentation",e,t,o,5);r&&(l.push(r),r.effect.addToScene(i,o.position))}this.layerSystem&&this.layerSystem.addToScene(i);try{const r=this.createEffectFromPythonData("star_field",e,t,o,-100);r&&r.effect&&(r.effect.addToScene(i,o.position),l.push(r),console.log("⭐ StarField added automatically using planet seed:",e.seeds?.planet_seed))}catch(r){console.warn("Could not create StarField:",r)}return l.forEach((r,d)=>{}),l.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),l}catch(c){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",c),c}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const o=this.effects.get(e);if(o){o.enabled=t!==void 0?t:!o.enabled;const i=o.effect;if(i&&i.getObject3D){const a=i.getObject3D();a&&(a.visible=o.enabled,console.log(`🎮 Toggle effect ${o.type}: visible = ${o.enabled}`))}if(this.layerSystem){const a=this.layerSystem.getLayerMeshes(),c={cloud_bands_layer:"cloudBands",cloud_gyros_layer:"cloudGyros",metallic_surface_layer:"metallicSurface",rocky_terrain_layer:"rockyTerrain",icy_terrain_layer:"icyTerrain"}[o.type];c&&a[c]&&(a[c].visible=o.enabled)}}else console.warn(`⚠️ Effect not found: ${e}`)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const o of this.effects.values())if(o.enabled&&o.effect.update)try{o.effect.update(e,t)}catch(i){console.error(`Error updating effect ${o.type}:`,i)}}updateLightForAllEffects(e){this.layerSystem&&this.layerSystem.updateFromThreeLight(e);for(const t of this.effects.values())if(t.enabled&&t.effect.updateFromThreeLight)try{t.effect.updateFromThreeLight(e)}catch(o){console.error(`Error updating light for effect ${t.type}:`,o)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear(),this.nextId=1}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const Te=Fe.getInstance(),je={atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function si(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"atmosphere",params:{...je.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:je.cloud_bands,priority:0},{type:"cloud_gyros",params:je.cloud_gyros,priority:1},{type:"atmosphere",params:{...je.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:je.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...je.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const Ee={log:(s,e)=>{},warn:(s,e)=>{console.warn(`[Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`[Effects] ${s}`,e||"")},debug:(s,e)=>{}};new Date().toISOString();const ai=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[o,i]=w.useState([]),[a,l]=w.useState({});w.useEffect(()=>{if(!s)return;const d=c(s);l(d),i(r(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=d)},[s,e]);function c(d){const h={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(d.planet_info&&d.surface_elements?h.hasValidStructure=!0:(d.planet_info||h.missingFields.push("planet_info"),d.surface_elements||h.missingFields.push("surface_elements")),d.surface_elements?.type==="oceanic"&&(h.oceanicData={hasAbstractLands:!!d.surface_elements.abstract_lands?.length,numGreenPatches:d.surface_elements.green_patches?.length||0,numClouds:d.surface_elements.clouds?.length||0,hasDepths:d.surface_elements.depths?.enabled||!1,baseColorIsBlue:d.planet_info?.base_color==="#0000FF",greenPatchColor:d.surface_elements.green_patches?.[0]?.color,issues:[]},h.oceanicData.numGreenPatches>15&&h.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),h.oceanicData.baseColorIsBlue||h.oceanicData.issues.push(`Color base no es azul puro: ${d.planet_info?.base_color}`),h.renderingIssues=h.oceanicData.issues),d.planet_info?.base_color&&d.planet_info?.type){const m={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[d.planet_info.type];m&&d.planet_info.base_color!==m?h.colorConsistency=`Inconsistente: esperado ${m}, recibido ${d.planet_info.base_color}`:h.colorConsistency="Correcto"}return h}function r(d){const h=[];if(!d.surface_elements?.type)return["No surface type defined"];const p=d.surface_elements.type.toLowerCase();switch(p){case"oceanic":h.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":h.push("RockyTerrainEffect");break;case"icy":h.push("IcyTerrainEffect");break;case"gas giant":h.push("GasGiantBandsEffect");break;default:h.push(`Generic effect for type: ${p}`)}return d.atmosphere?.density>0&&h.push("AtmosphericEffect"),d.rings&&h.push("RingSystemEffect"),h}return t?n.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[n.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),n.jsxs("div",{style:{marginBottom:"10px"},children:[n.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,n.jsx("br",{}),n.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,n.jsx("br",{}),n.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&n.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[n.jsx("strong",{children:"🌊 Oceanic Data:"}),n.jsx("br",{}),n.jsxs("span",{style:{color:a.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",a.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),n.jsx("br",{}),"Green Patches: ",a.oceanicData?.numGreenPatches,n.jsx("br",{}),"Clouds: ",a.oceanicData?.numClouds,n.jsx("br",{}),"Has Depths: ",a.oceanicData?.hasDepths?"Yes":"No",n.jsx("br",{}),a.oceanicData?.issues?.length>0&&n.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",n.jsx("br",{}),a.oceanicData.issues.map((d,h)=>n.jsxs("div",{children:["- ",d]},h))]})]}),n.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[n.jsx("strong",{children:"🎨 Effects Applied:"}),n.jsx("br",{}),o.map((d,h)=>n.jsxs("div",{style:{color:d.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",d]},h))]}),n.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function ni(s){w.useEffect(()=>{if(s&&s.surface_elements?.type==="oceanic"){s.surface_elements.green_patches?.length>0;const e=s.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[s])}const lt=2.5,zt=()=>{const s=45*Math.PI/180;return lt/(Math.tan(s/2)*.5)},ri=({planetName:s,containerClassName:e="",width:t=800,height:o=600,autoRotate:i=!0,enableControls:a=!0,showDebugInfo:l=!1,planetData:c,cosmicOriginTime:r,initialAngleRotation:d,onDataLoaded:h,onEffectsCreated:p,onError:m})=>{const f=w.useRef(null),g=w.useRef(null),_=w.useRef(null),b=w.useRef(null),S=w.useRef(null),E=w.useRef(null),X=w.useRef(new go),V=w.useRef(null),K=w.useRef(0),I=w.useRef(null),[oe,Y]=w.useState(!0),[R,J]=w.useState(null),[x,D]=w.useState(null),[L,j]=w.useState([]),[q,k]=w.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),W=w.useRef([]),T=w.useRef(0),A=w.useRef(null),P=w.useRef(null),U=Math.floor(Date.now()/1e3),[Q,ce]=w.useState(0),ee=r||x?.timing?.cosmic_origin_time||Date.now()/1e3-3600,he=U-ee+Q;K.current=he;const fe=w.useCallback(()=>{if(!f.current||!_.current||!b.current)return;const v=f.current,C=v.clientWidth||400,y=v.clientHeight||400;_.current.setSize(C,y),b.current.aspect=C/y,b.current.updateProjectionMatrix()},[]),ve=async v=>{if(!(!S.current||!g.current||!P.current)){Ee.log("Applying modular effects from API data",{planet:v.planet_info.name,type:v.planet_info.type});try{Se();const C=Ze(v);P.current.updateBaseColor(C);const y=Te.createEffectsFromPythonPlanetData(v,lt,S.current,g.current,P.current);console.log(`Planet: ${v.planet_info?.name}, Effects:`,y.map(N=>N.type)),j(y),W.current=y,p&&p(y),Ee.log(`Successfully applied ${y.length} modular effects`),We()}catch(C){Ee.error("Error applying modular effects",C),Oe()}}},pe=w.useCallback(()=>{if(!f.current)return!1;try{for(;f.current.firstChild;)f.current.removeChild(f.current.firstChild);g.current=null,b.current=null,_.current=null,S.current=null,se.current=null;const v=f.current,C=v.clientWidth||t||400,y=v.clientHeight||o||400,N=new vo;N.background=new u(1297),g.current=N;const te=new yo(45,C/y,.1,1e4),G=zt();te.position.set(0,0,G),te.lookAt(0,0,0),b.current=te;const O=new xo({antialias:!0,alpha:!0,powerPreference:"high-performance"});return O.setSize(C,y),O.setPixelRatio(Math.min(window.devicePixelRatio,2)),O.shadowMap.enabled=!0,O.shadowMap.type=bo,O.toneMapping=_o,O.toneMappingExposure=1.2,O.outputColorSpace=So,f.current.appendChild(O.domElement),_.current=O,Be(N,null),Ve(N),a&&it(te,O.domElement),!0}catch(v){return console.error("Error initializing Three.js:",v),!1}},[x,c,r]),be=v=>{if(!v)return 0;const C=v.sun_angle||v.lighting?.sun_angle;if(C!==void 0)return C;const y=v.timing?.current_orbital_angle||v.timing?.orbital_angle;return y??0},ne=w.useRef(null),Me=w.useRef(null),_e=w.useRef(null),se=w.useRef(null),Ce=v=>{v.castShadow=!0,v.shadow.mapSize.width=2048,v.shadow.mapSize.height=2048,v.shadow.camera.near=.5,v.shadow.camera.far=50,v.shadow.camera.left=-10,v.shadow.camera.right=10,v.shadow.camera.top=10,v.shadow.camera.bottom=-10},Ie=v=>{if(!ne.current||!g.current)return;const C=be(v),y=10,N=C+Math.PI,te=Math.sin(C)*5,G=y*Math.cos(N),O=te,De=y*Math.sin(N);ne.current.position.set(G,O,De),ne.current.target.position.set(0,0,0),g.current.children.includes(ne.current.target)||g.current.add(ne.current.target),Me.current&&Me.current.position.set(-G*.5,0,-De*.5),P.current&&ne.current&&P.current.updateFromThreeLight(ne.current),ne.current&&Te.updateLightForAllEffects(ne.current)},Be=(v,C)=>{{const y=new Tt(16777215,2);y.position.set(-10,5,10),y.target.position.set(0,0,0),y.castShadow=!0,Ce(y),v.add(y),v.add(y.target),ne.current=y;const N=new Tt(16777215,.05);N.position.set(8,-3,-5),v.add(N),Me.current=N;const te=new wo(2236996,.1);v.add(te),setTimeout(()=>{P.current&&y&&P.current.updateFromThreeLight(y),y&&Te.updateLightForAllEffects(y)},50);return}},Ve=v=>{const C=new ot(lt,128,64),y=new Gt({color:8421504}),N=new xe(C,y);N.castShadow=!0,N.receiveShadow=!0,N.position.set(0,0,0),v.add(N),S.current=N;const te=new u(8421504);P.current=new Ke(N,te),P.current.addToScene(v)},it=(v,C)=>{const y=new To(v,C);y.enableDamping=!0,y.dampingFactor=.05;const N=zt();y.minDistance=N*.5,y.maxDistance=N*2,y.autoRotate=i,y.autoRotateSpeed=.5,y.enablePan=!0,y.enableZoom=!0,y.target.set(0,0,0),E.current=y},Re=w.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{Y(!0),J(null),Ee.log("Loading planet data from API",{planetName:s});const C=await fetch("/api/planet/rendering-data");if(!C.ok)throw new Error(`HTTP error! status: ${C.status}`);const y=await C.json();if(!y.success)throw new Error(y.error||"Failed to fetch planet data");const N=y.planet_data,te=y.timing,G=y.rendering_data,O={planet_info:G?.planet_info||{name:N.name,type:N.planet_type,base_color:"#808080",radius:N.diameter/15e3,orbital_radius:N.orbital_radius},surface_elements:G?.surface_elements,atmosphere:G?.atmosphere,rings:G?.rings,effects_3d:G?.effects_3d,shader_uniforms:G?.shader_uniforms,universal_actions:G?.universal_actions,timing:{cosmic_origin_time:te.cosmic_origin_time,current_time_seconds:te.current_time_seconds,elapsed_time:te.elapsed_time,initial_orbital_angle:N.initial_orbital_angle,current_orbital_angle:N.current_orbital_angle,max_orbital_radius:te.max_orbital_radius,system_max_orbital_radius:N.system_max_orbital_radius},original_planet_data:N,seeds:G?.seeds};return D(O),I.current=O,Ee.log("API data loaded successfully",{planet:O.planet_info.name,type:O.planet_info.type,hasEffects:!!O.surface_elements,fullRenderingData:G}),h&&h(O),O}catch(v){const C=v instanceof Error?v.message:"Unknown error";return J(C),m&&m(C),null}finally{Y(!1),window.isLoadingPlanetData=!1}}},[s,h,m]);w.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{Y(!0),J(null),Ee.log("Loading planet data from API",{planetName:s});const C=await fetch("/api/planet/rendering-data");if(!C.ok)throw new Error(`HTTP error! status: ${C.status}`);const y=await C.json();if(!y.success)throw new Error(y.error||"Failed to fetch planet data");const N=y.planet_data,te=y.timing,G=y.rendering_data,O={planet_info:G?.planet_info||{name:N.name,type:N.planet_type,base_color:"#808080",radius:N.diameter/15e3,orbital_radius:N.orbital_radius},surface_elements:G?.surface_elements,atmosphere:G?.atmosphere,rings:G?.rings,effects_3d:G?.effects_3d,shader_uniforms:G?.shader_uniforms,universal_actions:G?.universal_actions,timing:{cosmic_origin_time:te.cosmic_origin_time,current_time_seconds:te.current_time_seconds,elapsed_time:te.elapsed_time,initial_orbital_angle:N.initial_orbital_angle,current_orbital_angle:N.current_orbital_angle,max_orbital_radius:te.max_orbital_radius,system_max_orbital_radius:N.system_max_orbital_radius},original_planet_data:N,seeds:G?.seeds};D(O),I.current=O,Ee.log("API data loaded successfully",{planet:O.planet_info.name,type:O.planet_info.type,hasEffects:!!O.surface_elements,fullRenderingData:G}),Ie(O),se.current&&g.current&&(g.current.remove(se.current),se.current.geometry.dispose(),se.current.material.dispose(),se.current=null),await ve(O),h&&h(O)}catch(v){const C=v instanceof Error?v.message:"Unknown error";J(C),m&&m(C),Oe()}finally{Y(!1),window.isLoadingPlanetData=!1}}},[s,c,r,d]);const Pe=w.useCallback(()=>{if(!x||!S.current)return;const v=c?.orbital_period_seconds||365.25*24*3600,C=2*Math.PI/v,y=x.timing?.initial_orbital_angle||0,N=Date.now()/1e3,te=0,G=r||x.timing?.cosmic_origin_time||Date.now()/1e3-3600,O=N-G+te,De=(y+O*C)%(2*Math.PI),ut=x.timing?.max_orbital_radius||100,at=20+x.planet_info?.orbital_radius/ut*80,Ht=at,Zt=at*Math.cos(De),Xt=Ht*Math.sin(De);S.current.position.x=Zt,S.current.position.z=Xt,S.current.position.y=0},[x,c,r]),mt=w.useCallback(async v=>{const C=v||x;if(C&&g.current)try{Ie(C),se.current&&g.current&&(g.current.remove(se.current),se.current.geometry.dispose(),se.current.material.dispose(),se.current=null),await ve(C)}catch(y){Ee.error("Error in applyProceduralShadersFromAPI:",y),Oe()}},[x]),Oe=()=>{if(!(!g.current||!S.current)){Ee.warn("Applying fallback effects for planet type:",c?.planet_type);try{Se(),S.current.material instanceof Ge&&S.current.material.color.setHex(6710886);try{const v=si("generic"),C=Te.createEffectsFromList(v,lt,S.current);C.forEach(y=>{y.effect.addToScene&&g.current&&S.current&&y.effect.addToScene(g.current,S.current.position)}),W.current=C,j(C)}catch(v){console.warn("Could not create fallback effects, using basic material only:",v)}We()}catch(v){Ee.error("Error applying fallback effects",v)}}},Se=()=>{Te.clearAllEffects(),W.current.forEach(v=>{try{v.effect.dispose&&v.effect.dispose()}catch{}}),W.current=[],j([])},st=w.useCallback(()=>{V.current=requestAnimationFrame(st);const v=performance.now(),C=X.current.getDelta();E.current&&E.current.update();try{Te.updateAllEffects(C,S.current?.rotation.y)}catch{}if(S.current&&I.current){I.current.planet_info?.name;const y=I.current.original_planet_data,N=y?.orbital_period_seconds||365.25*24*3600,te=I.current.timing?.initial_orbital_angle||0;r||I.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const G=y?.axial_tilt||0,O=2*Math.PI/N;(te+K.current*O)%(2*Math.PI);const De=I.current.timing?.max_orbital_radius||I.current.timing?.system_max_orbital_radius,ut=y?.orbital_radius;if(!De||!ut)return;y?.eccentricity_factor,S.current.position.set(0,0,0);const _t=y?.rotation_period_seconds||86400,at=2*Math.PI/_t;S.current.rotation.y=K.current*at%(2*Math.PI),S.current.rotation.z=G*(Math.PI/180)}if(W.current.forEach(y=>{y.effect.updateUniforms&&y.effect.updateUniforms(C)}),_.current&&g.current&&b.current){const y=performance.now();_.current.render(g.current,b.current);const N=performance.now()-y;if(v-T.current>5e3){const te=1e3/(v-T.current);We(),k(G=>({...G,frameRate:Math.round(te),renderTime:Math.round(N*100)/100})),T.current=v}}},[]),We=w.useCallback(()=>{const v=Te.getStats();k(C=>({...C,activeEffects:v.activeEffects,enabledEffects:v.enabledEffects}))},[]);return w.useEffect(()=>{let v=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!v)return;const y=await Re();if(!v)return;if(!pe()){v&&J("Failed to initialize 3D renderer");return}if(!v||(st(),f.current&&"ResizeObserver"in window&&(A.current=new ResizeObserver(fe),A.current.observe(f.current)),window.addEventListener("resize",fe),!v))return;y?await mt(y):Oe()}catch(y){v&&J(y instanceof Error?y.message:"Unknown initialization error")}})(),()=>{if(v=!1,I.current=null,V.current&&cancelAnimationFrame(V.current),A.current&&A.current.disconnect(),window.removeEventListener("resize",fe),Se(),P.current&&(P.current.dispose(),P.current=null),E.current&&E.current.dispose(),_e.current&&g.current&&(g.current.remove(_e.current),_e.current.geometry.dispose(),_e.current.material.dispose(),_e.current=null),se.current&&g.current&&(g.current.remove(se.current),se.current.geometry.dispose(),se.current.material.dispose(),se.current=null),_.current&&f.current)try{f.current.contains(_.current.domElement)&&f.current.removeChild(_.current.domElement),_.current.dispose()}catch{}}},[]),w.useEffect(()=>{const v=setInterval(()=>{const C=Te.getStats();k(y=>({...y,activeEffects:C.activeEffects,enabledEffects:C.enabledEffects}))},1e4);return()=>clearInterval(v)},[]),w.useEffect(()=>{x&&g.current&&S.current&&Pe()},[x,Pe]),ni(x),n.jsxs("div",{className:`relative ${e}`,children:[l&&x&&n.jsx(ai,{planetData:x,showInPage:!0,showInConsole:!0}),n.jsx("div",{ref:f,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),oe&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:n.jsxs("div",{className:"text-white text-center",children:[n.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),n.jsx("div",{children:"Loading planet..."})]})}),R&&n.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[n.jsx("strong",{children:"Error:"})," ",R]}),x&&!oe&&n.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[n.jsx("h3",{className:"text-lg font-bold",children:x.planet_info.name}),n.jsx("p",{className:"text-sm opacity-80",children:x.planet_info.type}),n.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[L.length," effects active"]}),x.surface_elements?.description&&n.jsx("p",{className:"text-xs mt-2 opacity-60",children:x.surface_elements.description.appearance})]}),l&&n.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[n.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),n.jsxs("div",{children:["Frame Rate: ",q.frameRate," FPS"]}),n.jsxs("div",{children:["Render Time: ",q.renderTime,"ms"]}),n.jsxs("div",{children:["Active Effects: ",q.activeEffects]}),n.jsxs("div",{children:["Enabled Effects: ",q.enabledEffects]}),n.jsxs("div",{className:"mt-2",children:[n.jsx("div",{className:"font-semibold",children:"Effects:"}),L.map(v=>n.jsxs("div",{className:"ml-2",children:[v.type," (",v.enabled?"ON":"OFF",")"]},v.id))]})]})]})};class li extends Ft.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?n.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:n.jsxs("div",{className:"text-center p-4",children:[n.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),n.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const ci=s=>n.jsx(li,{children:n.jsx(ri,{...s})}),di=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:o,initialAngleRotation:i,onEffectsCreated:a,effects:l,onToggleEffect:c})=>{const r=w.useRef(null),d=w.useRef(null),[h,p]=w.useState("Aligning Stargate..."),[m,f]=w.useState(!1),[g,_]=w.useState(!1),[b,S]=w.useState(!1),[E,X]=w.useState(!0),[V,K]=w.useState(!0),[I,oe]=w.useState(null),[Y,R]=w.useState(null);w.useEffect(()=>{l&&c&&l.forEach(x=>{Te.toggleEffect(x.id,x.enabled)})},[l]),w.useEffect(()=>{const x=document.createElement("style");return x.textContent=`
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
    `,document.head.appendChild(x),()=>{document.head.removeChild(x)}},[]),w.useEffect(()=>{const x=r.current;if(!x)return;const D=x.getContext("2d");if(!D)return;let L=[];const j=800;let q,k;const W=800;let T,A=.5;function P(){const ee=x?.parentElement;if(!ee||!x)return;const he=ee.clientWidth,fe=ee.clientHeight;x.width=Math.min(he,W),x.height=Math.min(fe,W),q=x.width/2,k=x.height/2}function U(){P(),L=[];for(let ee=0;ee<j;ee++)L.push({x:Math.random()*(x?.width||800),y:Math.random()*(x?.height||800),z:Math.random()*(x?.width||800),o:Math.random()});Q()}function Q(){!x||!D||(D.clearRect(0,0,x.width,x.height),L.forEach(ee=>{ee.z-=A,ee.z<=0&&(ee.z=x.width,ee.x=Math.random()*x.width,ee.y=Math.random()*x.height,ee.o=Math.random());const he=x.width/ee.z,fe=(ee.x-q)*he+q,ve=(ee.y-k)*he+k,pe=2*he;D.beginPath(),D.fillStyle=`rgba(255, 255, 255, ${ee.o})`,D.arc(fe,ve,pe,0,2*Math.PI),D.fill()}),A<60&&(A+=1),T=requestAnimationFrame(Q))}U();const ce=()=>P();return window.addEventListener("resize",ce),()=>{window.removeEventListener("resize",ce),T&&cancelAnimationFrame(T)}},[]),w.useEffect(()=>{if(e&&!E){const x=new Image;x.onload=()=>{d.current&&(d.current.src=e,_(!0),S(!0))},x.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{_(!0),S(!0)},1500)},x.src=e}else(E||!e)&&setTimeout(()=>{_(!0),S(!0)},1500)},[e,E]),w.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){p("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),f(!0);const D=(W,T)=>Array.from({length:T},()=>W[Math.floor(Math.random()*W.length)]).join(""),L=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let j=0,q=0;const k=()=>{if(j>=L.length){const T="Stargate system aligned";let A=0;p("");const P=()=>{A<T.length?(p(T.substring(0,A+1)),A++,setTimeout(P,30)):f(!1)};P();return}const W=L[j];p(D(W.chars,32)),q++,q>=W.iterations&&(j++,q=0),setTimeout(k,W.duration)};k()},[]);const J=()=>{X(!E),E||(_(!0),S(!0))};return n.jsxs("div",{className:"h-full flex flex-col",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),V&&n.jsx("div",{className:"flex items-center gap-2",children:n.jsx("button",{onClick:J,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${E?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:E?"2D View":"3D View"})})]}),n.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[n.jsx("canvas",{ref:r,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${b?"opacity-0":"opacity-100"}`,style:{filter:b?"blur(50px)":"none"}}),E&&g&&t&&n.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${g?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:n.jsx(ci,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,onEffectsCreated:a,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:o,initialAngleRotation:i,onDataLoaded:x=>{oe(x)},onError:x=>{R(x),console.error("❌ Planet rendering error:",x)}})}),!E&&n.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${g?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:g&&e?n.jsx("div",{className:"w-full h-full flex items-center justify-center",children:n.jsx(eo,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:n.jsx("img",{ref:d,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):n.jsx("img",{ref:d,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),V&&n.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:E?"🌍 3D":"🖼️ 2D"})]}),n.jsxs("div",{className:"text-center mt-auto",children:[n.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${m?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[n.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[n.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),h]}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),n.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",E&&I&&n.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",I.planet_info?.type," Planet",I.atmosphere&&n.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),I.rings?.has_rings&&n.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),E&&Y&&n.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},hi=({currentPlanet:s,system:e,galaxy:t,systemPlanets:o})=>{const[i,a]=w.useState(null),[l,c]=w.useState(null),[r,d]=w.useState(!1),[h,p]=w.useState(!1),[m,f]=w.useState(!0);w.useEffect(()=>{if(o&&o.length>0){const b=o.findIndex(S=>S.name.toLowerCase()===s.toLowerCase());b!==-1?(b>0?(a(o[b-1].name.toLowerCase()),d(!0)):e.index>0?(a("__prev_system__"),d(!0)):d(!1),b<o.length-1?(c(o[b+1].name.toLowerCase()),p(!0)):(c("__next_system__"),p(!0))):(d(!1),p(!1))}else d(!1),p(!1);f(!1)},[s,e.index,o]);const g=async()=>{const b=t.coordinates.join(",");if(i==="__prev_system__")try{const S=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(S.ok){const E=await S.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const V=E.system.planets[E.system.planets.length-1].name.toLowerCase();He(b,e.index-1,V,E.system.planets),vt(b,e.index-1),window.location.href=`/planet/${V}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else i&&(He(b,e.index,i,o),window.location.href=`/planet/${i}`)},_=async()=>{const b=t.coordinates.join(",");if(l==="__next_system__")try{const S=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(S.ok){const E=await S.json();if(E.system&&E.system.planets&&E.system.planets.length>0){const V=E.system.planets[0].name.toLowerCase();He(b,e.index+1,V,E.system.planets),vt(b,e.index+1),window.location.href=`/planet/${V}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(He(b,e.index,l,o),window.location.href=`/planet/${l}`)};return m?null:n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:g,disabled:!r,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${r?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),n.jsx("button",{onClick:_,disabled:!h,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${h?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},mi=({planet:s,system:e,galaxy:t,planet_url:o,version:i,image_url:a,cosmic_origin_time:l,initial_angle_rotation:c})=>{const[r]=w.useState(t.coordinates.join(",")),[d,h]=w.useState([]),p=b=>{h(b)},m=(b,S)=>{h(E=>E.map(X=>X.id===b?{...X,enabled:S}:X))};w.useEffect(()=>{document.body.setAttribute("data-coordinates",r),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),He(r,e.index,s.name,e.planets||[]),vt(r,e.index)},[r,e.index,s.name]);const f=b=>b.replace(/_/g," "),g=b=>b.replace(/_/g," "),_=b=>b.replace(/_/g," ");return n.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[n.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),n.jsxs("div",{className:"relative z-10",children:[n.jsx(Jt,{}),n.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:n.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",f(s.name),"'"]})}),n.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",g(e.name),"' - Galaxy '",_(t.name),"'"]}),n.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),n.jsx(hi,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),n.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:n.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[n.jsx("div",{className:"order-1 lg:order-1",children:n.jsx(di,{planetUrl:o,imageUrl:a,planet:s,cosmicOriginTime:l,initialAngleRotation:c,onEffectsCreated:p,effects:d,onToggleEffect:m})}),n.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),n.jsx("div",{className:"order-2 lg:order-2",children:n.jsx(Mo,{planet:s,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:c,effects:d,onToggleEffect:m})})]})}),n.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:n.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:n.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",g(e.name),"'"]})})})]}),n.jsx(qt,{version:i})]}),n.jsx(to,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),o=document.getElementById("meta-data");if(!s||!e||!t||!o){console.error("Missing required data elements");return}const i=JSON.parse(s.textContent||"{}"),a=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),c=JSON.parse(o.textContent||"{}"),r={planet:i,system:a,galaxy:l,planet_url:c.planet_url,version:c.version,image_url:c.image_url,cosmic_origin_time:c.cosmic_origin_time,initial_angle_rotation:c.initial_angle_rotation},d=document.getElementById("atlas-react-root");d&&Kt.createRoot(d).render(Ft.createElement(mi,r))}catch(s){console.error("Error initializing Planet React app:",s)}});
