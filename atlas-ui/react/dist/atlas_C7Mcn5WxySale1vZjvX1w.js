import{r as b,j as n,R as jt,V as Ht,c as Zt}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as Xt}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as qt,U as Kt,m as Ye,c as pt,a as Qt}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as Jt,V as M,n as ze,T as Oe,Q as _t,l as St,o as ve,R as eo,p as to,q as zt,e as Ne,r as le,s as he,N as Ie,t as lt,c as Qe,C as h,u as oo,v as ct,d as ye,G as Ue,w as io,x as Ft,F as _e,y as gt,z as vt,h as ao,H as so,I as no,J as Fe,B as ro,K as wt,O as lo,U as co,X as mo,Y as ke,L as Et,g as Mt,M as kt,Z as ho,S as uo,P as fo,W as po,_ as go,$ as vo,a0 as yo,D as Ct,A as xo}from"./atlas_szUVpFw09u2PxOIMlgYA5.js";const bo=({effects:a,onToggleEffect:e})=>{const[t,o]=b.useState(a),[i,s]=b.useState(!1);b.useEffect(()=>{o(a)},[a]);const l=(r,d)=>{o(m=>m.map(u=>u.id===r?{...u,enabled:d}:u)),e(r,d)},c=r=>r;return t.length===0?null:n.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsx("div",{className:"text-xs text-gray-400",children:"3D Effects Control"}),n.jsxs("button",{onClick:()=>s(!i),className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[i?"Hide":"Show"," (",t.filter(r=>r.enabled).length,"/",t.length,")"]})]}),i&&n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:t.map(r=>n.jsxs("div",{className:"bg-white/5 rounded p-2 flex items-center justify-between",children:[n.jsxs("label",{className:"flex items-center gap-2 cursor-pointer flex-1",children:[n.jsx("input",{type:"checkbox",checked:r.enabled,onChange:d=>l(r.id,d.target.checked),className:"rounded border-gray-400 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-white/10"}),n.jsx("span",{className:`${r.enabled?"text-white":"text-gray-500"} transition-colors`,children:c(r.type)})]}),n.jsx("span",{className:`text-[10px] ${r.enabled?"text-green-400":"text-gray-600"}`,children:r.enabled?"ON":"OFF"})]},r.id))}),i&&t.length>3&&n.jsxs("div",{className:"mt-2 flex gap-2",children:[n.jsx("button",{onClick:()=>{t.forEach(r=>l(r.id,!0))},className:"text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors",children:"Enable All"}),n.jsx("button",{onClick:()=>{t.forEach(r=>l(r.id,!1))},className:"text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors",children:"Disable All"})]})]})},_o=({planet:a,system:e,galaxy:t,cosmicOriginTime:o,initialAngleRotation:i,effects:s,onToggleEffect:l})=>{const[c,r]=b.useState(!1),d=f=>f.replace(/_/g," "),m=f=>{const _=f/86400;return _<30?`${_.toFixed(2)} days`:_<365?`${(_/30).toFixed(2)} months`:`${(_/365).toFixed(2)} years`},u=f=>{const _=f*9/5+32;return`${f.toFixed(1)}°C (${_.toFixed(1)}°F)`},y=f=>`${f.toExponential(2)} kg`,v=f=>f>=1e3?`${(f/1e3).toFixed(2)} km`:`${f.toFixed(2)} m`;return n.jsxs("div",{className:"h-full flex flex-col relative",children:[n.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),n.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[n.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),n.jsx(qt,{type:"planet",name:a.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:a.name,className:"text-xs"})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),n.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:a.planet_type})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),n.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:a.atmosphere})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),n.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:a.life_forms})]})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[n.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),n.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),n.jsx("div",{className:"text-xs font-bold text-orange-300",children:y(a.mass)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),n.jsx("div",{className:"text-xs font-bold text-orange-300",children:v(a.diameter)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),n.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[a.density.toFixed(2)," kg/m³"]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),n.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[a.gravity.toFixed(2)," m/s²"]})]})]})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[n.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),n.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),n.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.orbital_radius.toFixed(2)," AU"]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),n.jsx("div",{className:"text-xs font-bold text-cyan-300",children:m(a.orbital_period_seconds)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),n.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.orbital_speed.toFixed(2)," m/s"]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),n.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.axial_tilt.toFixed(2),"°"]})]})]})]}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[n.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),n.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),n.jsx("div",{className:"text-xs font-bold text-red-300",children:u(a.surface_temperature)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[n.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),n.jsx("div",{className:"text-xs font-bold text-red-300",children:m(a.rotation_period_seconds)})]})]})]}),n.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[n.jsxs("div",{className:"flex items-center justify-between mb-2",children:[n.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",a.elements.length,")"]}),a.elements.length>4&&n.jsx("button",{onClick:()=>r(!c),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:c?"▲ Less":"▼ All"})]}),n.jsx("div",{className:"flex flex-wrap gap-1",children:(c?a.elements:a.elements.slice(0,4)).map((f,_)=>n.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:f},_))})]})]}),n.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[n.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),n.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Status:"}),n.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Planet:"}),n.jsx("div",{className:"text-white truncate font-medium",children:d(a.name)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"System:"}),n.jsx("div",{className:"text-white truncate font-medium",children:d(e.name)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"System ID:"}),n.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),n.jsx("div",{className:"text-white truncate font-medium",children:d(t.name)})]}),n.jsxs("div",{className:"bg-white/5 rounded p-2",children:[n.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),n.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]}),s&&l&&n.jsx(bo,{effects:s,onToggleEffect:l})]})},Nt={type:"change"},yt={type:"start"},Ut={type:"end"},it=new eo,Tt=new to,So=Math.cos(70*zt.DEG2RAD),se=new M,pe=2*Math.PI,$={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ut=1e-6;class wo extends Jt{constructor(e,t=null){super(e,t),this.state=$.NONE,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ze.ROTATE,MIDDLE:ze.DOLLY,RIGHT:ze.PAN},this.touches={ONE:Oe.ROTATE,TWO:Oe.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new M,this._lastQuaternion=new _t,this._lastTargetPosition=new M,this._quat=new _t().setFromUnitVectors(e.up,new M(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new St,this._sphericalDelta=new St,this._scale=1,this._panOffset=new M,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new M,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Mo.bind(this),this._onPointerDown=Eo.bind(this),this._onPointerUp=Co.bind(this),this._onContextMenu=Ro.bind(this),this._onMouseWheel=Po.bind(this),this._onKeyDown=Ao.bind(this),this._onTouchStart=Io.bind(this),this._onTouchMove=Do.bind(this),this._onMouseDown=No.bind(this),this._onMouseMove=To.bind(this),this._interceptControlDown=Lo.bind(this),this._interceptControlUp=Oo.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nt),this.update(),this.state=$.NONE}update(e=null){const t=this.object.position;se.copy(t).sub(this.target),se.applyQuaternion(this._quat),this._spherical.setFromVector3(se),this.autoRotate&&this.state===$.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let o=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(o)&&isFinite(i)&&(o<-Math.PI?o+=pe:o>Math.PI&&(o-=pe),i<-Math.PI?i+=pe:i>Math.PI&&(i-=pe),o<=i?this._spherical.theta=Math.max(o,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(o+i)/2?Math.max(o,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=l!=this._spherical.radius}if(se.setFromSpherical(this._spherical),se.applyQuaternion(this._quatInverse),t.copy(this.target).add(se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=se.length();l=this._clampDistance(c*this._scale);const r=c-l;this.object.position.addScaledVector(this._dollyDirection,r),this.object.updateMatrixWorld(),s=!!r}else if(this.object.isOrthographicCamera){const c=new M(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=r!==this.object.zoom;const d=new M(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),l=se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(it.origin.copy(this.object.position),it.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(it.direction))<So?this.object.lookAt(this.target):(Tt.setFromNormalAndCoplanarPoint(this.object.up,this.target),it.intersectPlane(Tt,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ut||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ut||this._lastTargetPosition.distanceToSquared(this.target)>ut?(this.dispatchEvent(Nt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pe/60*this.autoRotateSpeed*e:pe/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){se.setFromMatrixColumn(t,0),se.multiplyScalar(-e),this._panOffset.add(se)}_panUp(e,t){this.screenSpacePanning===!0?se.setFromMatrixColumn(t,1):(se.setFromMatrixColumn(t,0),se.crossVectors(this.object.up,se)),se.multiplyScalar(e),this._panOffset.add(se)}_pan(e,t){const o=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;se.copy(i).sub(this.target);let s=se.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/o.clientHeight,this.object.matrix),this._panUp(2*t*s/o.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/o.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/o.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const o=this.domElement.getBoundingClientRect(),i=e-o.left,s=t-o.top,l=o.width,c=o.height;this._mouse.x=i/l*2-1,this._mouse.y=-(s/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pe*this._rotateDelta.x/t.clientHeight),this._rotateUp(pe*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(o,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(o,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(o*o+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const o=this._getSecondPointerPosition(e),i=.5*(e.pageX+o.x),s=.5*(e.pageY+o.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pe*this._rotateDelta.x/t.clientHeight),this._rotateUp(pe*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(o,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(o*o+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,o={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(o.deltaY*=10),o}}function Eo(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function Mo(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function Co(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ut),this.state=$.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function No(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=$.DOLLY;break;case ze.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=$.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=$.ROTATE}break;case ze.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=$.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=$.PAN}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(yt)}function To(a){switch(this.state){case $.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case $.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case $.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function Po(a){this.enabled===!1||this.enableZoom===!1||this.state!==$.NONE||(a.preventDefault(),this.dispatchEvent(yt),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(Ut))}function Ao(a){this.enabled!==!1&&this._handleKeyDown(a)}function Io(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case Oe.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=$.TOUCH_ROTATE;break;case Oe.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=$.TOUCH_PAN;break;default:this.state=$.NONE}break;case 2:switch(this.touches.TWO){case Oe.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=$.TOUCH_DOLLY_PAN;break;case Oe.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=$.TOUCH_DOLLY_ROTATE;break;default:this.state=$.NONE}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(yt)}function Do(a){switch(this._trackPointer(a),this.state){case $.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case $.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case $.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case $.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=$.NONE}}function Ro(a){this.enabled!==!1&&a.preventDefault()}function Lo(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Oo(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Pt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class Gt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:o,ring_inner_radius:i,ring_outer_radius:s,tilt_factor:l,planet_radius:c,shape_seed:r}=e;if(!t||!o){console.warn("No ring data provided");return}const d=[...t.particles,...o.particles],m=d.length,u=new Pt(r||12345),y=new Ne,v=new Float32Array(m*3),f=new Float32Array(m*3),_=new Float32Array(m),E=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],S=u.choice(E);for(let w=0;w<m;w++){const Z=d[w],z=this.planetRadius/(c||200),ne=(r||12345)+w,I=new Pt(ne),L=Z.distance*z,ee=Z.angle,R=L*Math.sin(ee),K=Math.asin((l||.2)*.5),x=R*Math.sin(K),k=R*Math.cos(K),U=((s||400)-(i||200))*z*.4,D=I.uniform(-U*.8,U*.8),te=I.uniform(-U*.3,U*.3),B=I.uniform(-.08,.08),N=L+te,P=ee+B;v[w*3]=N*Math.cos(P),v[w*3+1]=x+D+this.planetRadius*.15,v[w*3+2]=k+I.uniform(-U*.4,U*.4),Z.color[0]/255;const A=(Z.distance-(i||200))/((s||400)-(i||200)),Q=S.baseGray,oe=S.variation,Se=I.uniform(-oe,oe),V=Math.max(.12,Math.min(.45,Q+Se)),ue=.8+A*.4,fe=I.uniform(.85,1.15),ce=I.uniform(0,1),ge=ce<.03?I.uniform(1.1,1.3):1,we=V*ue*fe*ge,re=Math.max(.1,Math.min(.55,we));f[w*3]=re,f[w*3+1]=re,f[w*3+2]=re;const Me=.15,xe=I.uniform(.3,.7),X=ce<.1?I.uniform(1.05,1.2):1;_[w]=Z.size*Me*xe*X}y.setAttribute("position",new le(v,3)),y.setAttribute("color",new le(f,3)),y.setAttribute("size",new le(_,1)),this.material=new he({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Ie}),this.ringSystem=new lt(y,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const o=t.rotation_period_seconds||86400,i=t.cosmicOriginTime||Date.now()/1e3,s=t.initialAngleRotation||0,c=Date.now()/1e3-i,r=2*Math.PI/o,d=(s+c*r)%(2*Math.PI);this.ringSystem.rotation.y=d}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function jo(a,e){const t={full_ring:a.full_ring,ontop_ring:a.ontop_ring,ring_inner_radius:a.ring_inner_radius,ring_outer_radius:a.ring_outer_radius,tilt_factor:a.tilt_factor,planet_radius:a.planet_radius,shape_seed:a.shape_seed};return new Gt(e,t)}class $e{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const o=e*(1+this.params.width/100);this.geometry=new Qe(o,32,32);const i=new h(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new he({vertexShader:$e.vertexShader,fragmentShader:$e.fragmentShader,uniforms:{atmosphereColor:{value:i},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:ct,side:oo,depthWrite:!1}),this.mesh=new ye(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new h(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function zo(a,e){let t=[.7,.7,.7,.15],o=12;if(e){if(e.color&&Array.isArray(e.color)){const s=e.color;t=[s[0],s[1],s[2],(s[3]||.15)*.7]}e.width&&(o=e.width)}const i={type:e?.type||"Thin",color:t,width:o,opacity:t[3],density:1};return new $e(a,i)}class H{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,o=Math.acos(this.random()*2-1);return{x:e*Math.sin(o)*Math.cos(t),y:e*Math.sin(o)*Math.sin(t),z:e*Math.cos(o)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const Y={PARTICLE_COUNT:{min:50,max:200},SPEED:{min:.05,max:.5},SIZE:{min:.5,max:2},OPACITY:{min:.2,max:.5},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05}};class He{particleSystem;material;geometry;params;particleCount;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6),i=new H(o);this.params={color:t.color||new h(16777215),particleCount:t.particleCount||Math.floor(i.uniform(Y.PARTICLE_COUNT.min,Y.PARTICLE_COUNT.max)),speed:t.speed||i.uniform(Y.SPEED.min,Y.SPEED.max),size:t.size||i.uniform(Y.SIZE.min,Y.SIZE.max),opacity:t.opacity||i.uniform(Y.OPACITY.min,Y.OPACITY.max),turbulence:t.turbulence||i.uniform(Y.TURBULENCE.min,Y.TURBULENCE.max),rotationSpeed:t.rotationSpeed||i.uniform(Y.ROTATION_SPEED.min,Y.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||i.uniform(Y.MOVEMENT_AMPLITUDE.min,Y.MOVEMENT_AMPLITUDE.max),seed:o},this.particleCount=this.params.particleCount,this.geometry=new Ne,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new lt(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),c=this.params.color instanceof h?this.params.color:new h(this.params.color),r=this.params.seed||Math.floor(Math.random()*1e6),d=new H(r);for(let m=0;m<this.particleCount;m++){const u=d.spherePosition(e*d.uniform(1,1.1));t[m*3]=u.x,t[m*3+1]=u.y,t[m*3+2]=u.z;const y=d.colorVariation({r:c.r,g:c.g,b:c.b});o[m*3]=y.r,o[m*3+1]=y.g,o[m*3+2]=y.b,i[m]=this.params.size*d.uniform(.75,1.25),s[m]=this.params.speed*d.uniform(.6,1.4),l[m]=d.random()*Math.PI*2}this.geometry.setAttribute("position",new le(t,3)),this.geometry.setAttribute("customColor",new le(o,3)),this.geometry.setAttribute("size",new le(i,1)),this.geometry.setAttribute("speed",new le(s,1)),this.geometry.setAttribute("phase",new le(l,1))}createMaterial(){return new he({vertexShader:He.vertexShader,fragmentShader:He.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:ct,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.material.uniforms.time.value,this.material.uniforms.time.value+=e,this.particleSystem.rotation.y+=e*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function At(a,e,t){const o=e.streaks||{},i=t||Math.floor(Math.random()*1e6),s=new H(i+3e3),l=o.count||Math.floor(s.uniform(Y.PARTICLE_COUNT.min,Y.PARTICLE_COUNT.max)),c=o.speed||s.uniform(Y.SPEED.min,Y.SPEED.max),r=s.uniform(Y.SIZE.min,Y.SIZE.max),d=s.uniform(Y.OPACITY.min,Y.OPACITY.max),m=s.uniform(Y.TURBULENCE.min,Y.TURBULENCE.max),u=s.uniform(Y.ROTATION_SPEED.min,Y.ROTATION_SPEED.max),y=s.uniform(Y.MOVEMENT_AMPLITUDE.min,Y.MOVEMENT_AMPLITUDE.max),v={color:o.color?new h().setRGB(o.color[0],o.color[1],o.color[2]):new h(16777215),particleCount:l,speed:c,size:r,opacity:d,turbulence:m,seed:i,rotationSpeed:u,movementAmplitude:y};return new He(a,v)}const F={CLOUD_COUNT:{min:15,max:30},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.9},DENSITY:{min:.5,max:2},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},PUFFINESS:{min:1,max:1.4},TIME_SPEED:{min:.1,max:3}};class Ge{cloudSystem;material;params;cloudCount;clouds=[];startTime;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6),i=new H(o);this.startTime=t.startTime||o%1e4/1e3,this.params={color:t.color||new h(16777215),cloudCount:t.cloudCount||Math.floor(i.uniform(F.CLOUD_COUNT.min,F.CLOUD_COUNT.max)),size:t.size||i.uniform(F.SIZE.min,F.SIZE.max),opacity:t.opacity||i.uniform(F.OPACITY.min,F.OPACITY.max),density:t.density||i.uniform(F.DENSITY.min,F.DENSITY.max),rotationSpeed:t.rotationSpeed||i.uniform(F.ROTATION_SPEED.min,F.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||i.uniform(F.MOVEMENT_AMPLITUDE.min,F.MOVEMENT_AMPLITUDE.max),puffiness:t.puffiness||i.uniform(F.PUFFINESS.min,F.PUFFINESS.max),timeSpeed:t.timeSpeed||i.uniform(F.TIME_SPEED.min,F.TIME_SPEED.max),seed:o,startTime:this.startTime},this.cloudCount=this.params.cloudCount,this.cloudSystem=new Ue,this.material=this.createMaterial(),this.generateClouds(e)}generateClouds(e){const t=this.params.color instanceof h?this.params.color:new h(this.params.color),o=this.params.seed||Math.floor(Math.random()*1e6),i=new H(o),s=this.params.cloudsFromPython;for(let l=0;l<this.cloudCount;l++){let c,r,d,m=t,u=this.params.size*i.uniform(.8,1.2);if(s&&l<s.length){const R=s[l];c=R.position[0]*e*1.04,r=R.position[1]*e*1.04,d=R.position[2]*e*1.04,R.color&&(m=new h().setRGB(R.color[0],R.color[1],R.color[2])),u=R.radius*e*.8}else{const R=i.uniform(0,2*Math.PI),K=i.uniform(-1,1),x=Math.acos(K),k=e*i.uniform(1.02,1.06);c=k*Math.sin(x)*Math.cos(R),r=k*Math.sin(x)*Math.sin(R),d=k*Math.cos(x)}const y=u*i.uniform(.3,.8),v=Math.max(8,Math.floor(y*15)),f=new io(y*2,y*2,v,v),_=new M(c,r,d);new M(0,0,0);const E=_.clone().normalize(),S=new M,w=new M;Math.abs(E.y)<.99?S.crossVectors(E,new M(0,1,0)).normalize():S.crossVectors(E,new M(1,0,0)).normalize(),w.crossVectors(E,S).normalize();const Z=new Ft;Z.makeBasis(S,w,E);const z=f.attributes.position,ne=new M,I=Math.sqrt(c*c+r*r+d*d);f.applyMatrix4(Z);for(let R=0;R<z.count;R++){ne.fromBufferAttribute(z,R);const U=ne.clone().add(_).clone().normalize().multiplyScalar(I).sub(_);z.setXYZ(R,U.x,U.y,U.z)}z.needsUpdate=!0,f.computeVertexNormals(),f.translate(c,r,d);const L=this.material.clone();L.uniforms.cloudColor.value=m,L.uniforms.density.value=this.params.density*i.uniform(.8,1.2),L.uniforms.noiseOffset.value=new ve(i.uniform(0,100),i.uniform(0,100)),L.uniforms.shapeVariation.value=i.uniform(-1,1),L.uniforms.lightDirection.value=this.material.uniforms.lightDirection.value.clone(),L.uniforms.lightPosition.value=this.material.uniforms.lightPosition.value.clone();const ee=new ye(f,L);ee.userData.isAtmosphericCloud=!0,ee.userData.planetNormal=E.clone(),this.clouds.push(ee),this.cloudSystem.add(ee)}}createMaterial(){return new he({vertexShader:Ge.vertexShader,fragmentShader:Ge.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},cloudColor:{value:new h(16777215)},density:{value:this.params.density},noiseOffset:{value:new ve(0,0)},shapeVariation:{value:0},lightDirection:{value:new M(1,1,1).normalize()},lightPosition:{value:new M(0,0,0)}},transparent:!0,blending:Ie,depthWrite:!1,side:_e})}addToScene(e,t){t&&this.cloudSystem.position.copy(t),e.add(this.cloudSystem)}update(e,t){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.clouds.forEach(s=>{const l=s.material;l.uniforms.time.value=i}),this.cloudSystem.rotation.y=i*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},this.clouds.forEach(t=>{const o=t.material;e.opacity!==void 0&&(o.uniforms.opacity.value=e.opacity),e.movementAmplitude!==void 0&&(o.uniforms.movementAmplitude.value=e.movementAmplitude)})}updateLightPosition(e){this.clouds.forEach(t=>{const o=t.material;o.uniforms.lightPosition&&o.uniforms.lightPosition.value.copy(e)})}updateLightDirection(e){this.clouds.forEach(t=>{const o=t.material;o.uniforms.lightDirection&&o.uniforms.lightDirection.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function at(a,e,t){const o=e.clouds||[];if(o.length===0){const c=t||Math.floor(Math.random()*1e6),r=new H(c+4e3),d={color:new h(1,1,1),cloudCount:15,size:.6,opacity:.7,density:.8,seed:c,rotationSpeed:.005,movementAmplitude:.02,puffiness:1.5,timeSpeed:r.uniform(F.TIME_SPEED.min,F.TIME_SPEED.max)};return new Ge(a,d)}const i=t||Math.floor(Math.random()*1e6),s=new H(i+4e3),l={color:new h(16777215),cloudCount:o.length,size:s.uniform(F.SIZE.min,F.SIZE.max),opacity:s.uniform(F.OPACITY.min,F.OPACITY.max),density:s.uniform(F.DENSITY.min,F.DENSITY.max),seed:i,rotationSpeed:s.uniform(F.ROTATION_SPEED.min,F.ROTATION_SPEED.max),movementAmplitude:s.uniform(F.MOVEMENT_AMPLITUDE.min,F.MOVEMENT_AMPLITUDE.max),puffiness:s.uniform(F.PUFFINESS.min,F.PUFFINESS.max),timeSpeed:s.uniform(F.TIME_SPEED.min,F.TIME_SPEED.max),cloudsFromPython:o};return new Ge(a,l)}class xt{landGroup;lands=[];constructor(e,t={}){this.landGroup=new Ue;const o=t.seed||Math.floor(Math.random()*1e6),i=new H(o);t.greenPatches&&t.greenPatches.length>0?this.generateLandsFromPython(e,t.greenPatches,i,t):this.generateProceduralLands(e,i,t)}generateLandsFromPython(e,t,o,i){t.forEach((s,l)=>{let c=s.position_3d||s.position||[0,0,1];if(c.length===2){const N=o.uniform(0,Math.PI*2),P=Math.acos(o.uniform(-1,1));c=[Math.sin(P)*Math.cos(N),Math.sin(P)*Math.sin(N),Math.cos(P)]}const r=(s.size||.1)*e*1.8;Math.max(8,Math.min(s.sides||20,12));let d=new h(4881497);s.color&&Array.isArray(s.color)&&(d=new h(s.color[0],s.color[1],s.color[2]));const m=Math.max(24,Math.min(64,Math.floor(r*32))),u=new M(c[0],c[1],c[2]).normalize(),y=new M,v=new M;Math.abs(u.y)<.99?y.crossVectors(u,new M(0,1,0)).normalize():y.crossVectors(u,new M(1,0,0)).normalize(),v.crossVectors(u,y).normalize();const f=2/Math.max(r*.05,1),_=(N,P)=>{let O=0,A=1,Q=f,oe=0;const Se=Math.min(5,Math.max(3,Math.floor(r/40)+2));for(let V=0;V<Se;V++){const ue=N*Q,fe=P*Q,ce=(be,Ve)=>{const tt=be*12.9898+Ve*78.233;return Math.sin(tt+o.uniform(0,1e3))*43758.5453%1},ge=Math.floor(ue),we=Math.floor(fe),re=ue-ge,Me=fe-we,xe=be=>be*be*be*(be*(be*6-15)+10),X=xe(re),De=xe(Me),Re=ce(ge,we),Be=ce(ge+1,we),Je=ce(ge,we+1),Te=ce(ge+1,we+1),Pe=Re*(1-X)+Be*X,et=Je*(1-X)+Te*X,dt=Pe*(1-De)+et*De;O+=dt*A,oe+=A,A*=.5,Q*=2.2}return O/oe},E=[],S=[],w=[],Z=.35,z=new Map,ne=new Map;let I=0;for(let N=0;N<=m;N++)for(let P=0;P<=m;P++){const O=(N/m-.5)*2,A=(P/m-.5)*2,Q=Math.sqrt(O*O+A*A),oe=_(O*2,A*2);if(1-Q*.5+oe*.6>Z&&Q<1.2){const V=O*r,ue=A*r,ce=new M().addScaledVector(y,V).addScaledVector(v,ue).addScaledVector(u,0);E.push(ce.x,ce.y,ce.z),w.push((O+1)*.5,(A+1)*.5),z.set(`${N},${P}`,I),ne.set(`${N},${P}`,oe),I++}}for(let N=0;N<m;N++)for(let P=0;P<m;P++){const O=z.get(`${N},${P}`),A=z.get(`${N+1},${P}`),Q=z.get(`${N},${P+1}`),oe=z.get(`${N+1},${P+1}`);O!==void 0&&A!==void 0&&Q!==void 0&&S.push(O,A,Q),A!==void 0&&oe!==void 0&&Q!==void 0&&S.push(A,oe,Q)}const L=new Ne;L.setAttribute("position",new gt(E,3)),L.setAttribute("uv",new gt(w,2)),L.setIndex(S),L.computeVertexNormals();const ee=L.attributes.position,R=u.clone().multiplyScalar(e),K=new M;for(let N=0;N<ee.count;N++){K.fromBufferAttribute(ee,N);const O=K.clone().add(R).clone().normalize(),A=L.attributes.uv;if(A){const Q=A.getX(N)*2-1,oe=A.getY(N)*2-1,Se=Math.sqrt(Q*Q+oe*oe),V=_(Q*2,oe*2),fe=Math.max(0,1-Math.pow(Se,.7))*.5+V*.5,ge=(Pe=>Pe*Pe*(3-2*Pe))(fe),re=e*1.01-e,Me=r*.15,xe=Math.min(Me,re*.9),X=e*.002,De=e+X,Re=e+X+xe,Be=zt.lerp(De,Re,ge),Te=O.multiplyScalar(Be).sub(R);ee.setXYZ(N,Te.x,Te.y,Te.z)}}ee.needsUpdate=!0,L.computeVertexNormals(),L.translate(R.x,R.y,R.z);const x=new vt({color:i.transparentMode?new h(15135743):d,opacity:i.transparentMode?.3:1,transparent:!!i.transparentMode,emissive:i.transparentMode?new h(13428479).multiplyScalar(.1):d.clone().multiplyScalar(.05),emissiveIntensity:i.transparentMode?.05:1e-7,shininess:i.transparentMode?30:8,flatShading:!1,bumpScale:.002}),k=document.createElement("canvas");k.width=k.height=64;const U=k.getContext("2d"),D=U.createImageData(64,64);for(let N=0;N<D.data.length;N+=4){const P=o.uniform(.8,1.2),O=Math.floor(128*P);D.data[N]=O,D.data[N+1]=O,D.data[N+2]=O,D.data[N+3]=255}U.putImageData(D,0,0);const te=new ao(k);te.wrapS=te.wrapT=so,te.repeat.set(2,2),x.bumpMap=te;const B=new ye(L,x);B.castShadow=!0,B.receiveShadow=!0,this.lands.push(B),this.landGroup.add(B)})}generateProceduralLands(e,t,o){const i=Math.floor(t.uniform(5,15));for(let s=0;s<i;s++){const l=t.uniform(0,Math.PI*2),c=Math.acos(t.uniform(-1,1)),r=new M(Math.sin(c)*Math.cos(l),Math.sin(c)*Math.sin(l),Math.cos(c)),d=e*t.uniform(.02,.08),m=new no(d,16),u=r.clone().multiplyScalar(e*1);m.lookAt(r),m.translate(u.x,u.y,u.z);const y=t.uniform(.3,.7),v=new h(.36*(1-y)+.22*y,.23*(1-y)+.36*y,0),f=new vt({color:o.transparentMode?new h(15135743):v,opacity:o.transparentMode?.3:1,transparent:!!o.transparentMode,emissive:o.transparentMode?new h(13428479).multiplyScalar(.1):657920,shininess:o.transparentMode?30:5}),_=new ye(m,f);this.lands.push(_),this.landGroup.add(_)}}addToScene(e,t){t&&this.landGroup.position.copy(t),e.add(this.landGroup)}update(e){}getObject3D(){return this.landGroup}dispose(){this.lands.forEach(e=>{e.geometry.dispose(),e.material instanceof Fe&&e.material.dispose()}),this.lands=[],this.landGroup.clear()}}function It(a,e,t){const o=e.green_patches;if(!o||o.length===0)return null;const i=t||Math.floor(Math.random()*1e6);return new xt(a,{greenPatches:o,seed:i+6e3})}function Fo(a,e,t){const o=t||Math.floor(Math.random()*1e6),i=new H(o+7e3),s=Math.floor(i.uniform(3,8)),l=[];for(let c=0;c<s;c++){const r=i.uniform(0,Math.PI*2),d=Math.acos(i.uniform(-1,1));l.push({position_3d:[Math.sin(d)*Math.cos(r),Math.sin(d)*Math.sin(r),Math.cos(d)],size:i.uniform(.05,.15),sides:Math.floor(i.uniform(8,16)),color:[0,0,0]})}return console.log(`🧊 Creating ${s} transparent ice formations for Icy planet with seed ${o+7e3}`),new xt(a,{greenPatches:l,seed:o+7e3,transparentMode:!0})}class ko{featuresGroup;crystals=[];cracks=[];iceCaps=[];planetRadius;constructor(e,t={}){this.featuresGroup=new Ue,this.planetRadius=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new H(o);t.crystals&&t.crystals.length>0&&this.generateCrystals(t.crystals,i),t.cracks&&t.cracks.length>0&&this.generateCracks(t.cracks),t.iceCaps&&t.iceCaps.length>0&&this.generateIceCaps(t.iceCaps,i)}generateCrystals(e,t){e.forEach(o=>{const i=o.position||[0,0],s=(o.width||.05)*this.planetRadius*.8,l=(o.length||.1)*this.planetRadius*.08,c=o.angle||0,r=o.color||[172/255,215/255,230/255,1],d=this.planetRadius*.015,m=Math.max(l,d),u=new ro(s*2,m,s*1.5,4,2,4),y=u.attributes.position,v=new M;for(let x=0;x<y.count;x++){if(v.fromBufferAttribute(y,x),Math.abs(v.y)>m*.3){const k=Math.atan2(v.z,v.x),U=Math.sqrt(v.x*v.x+v.z*v.z),D=Math.round(k/(Math.PI/3))*(Math.PI/3),te=t.uniform(.8,1.2),B=U*te;v.x=Math.cos(D)*B,v.z=Math.sin(D)*B,v.y+=t.uniform(-m*.1,m*.1)}y.setXYZ(x,v.x,v.y,v.z)}y.needsUpdate=!0,u.computeVertexNormals();const f=new wt({color:new h(r[0],r[1],r[2]),transparent:!0,opacity:.8,metalness:0,roughness:.02,clearcoat:1,clearcoatRoughness:0,transmission:.7,ior:1.31,thickness:.5,emissive:new h(r[0],r[1],r[2]),emissiveIntensity:.02,flatShading:!1,side:_e}),_=new ye(u,f),E=Math.acos(Math.min(1,Math.max(-1,i[1]))),S=Math.atan2(i[0],.001)+c,w=this.planetRadius*t.uniform(1.0005,1.001),Z=w*Math.sin(E)*Math.cos(S),z=w*i[1],ne=w*Math.sin(E)*Math.sin(S);_.position.set(Z,z,ne);const I=_.position.clone().normalize(),L=new M,ee=new M;Math.abs(I.x)<.9?L.set(1,0,0):L.set(0,1,0),L.crossVectors(L,I).normalize(),ee.crossVectors(I,L).normalize();const R=new Ft;R.makeBasis(L,I,ee),_.rotation.setFromRotationMatrix(R),_.rotateY(t.uniform(0,Math.PI*2));const K=t.uniform(.8,1.2);_.scale.set(K,K,K),this.crystals.push(_),this.featuresGroup.add(_)})}generateCracks(e){e.forEach(t=>{const o=t.angle||0,i=(t.length||1)*this.planetRadius*2,s=t.color||[80/255,80/255,80/255,.4],l=(t.width||1)*5e-4*this.planetRadius,c=[],r=20;for(let v=0;v<=r;v++){const f=v/r,_=Math.sin(f*Math.PI)*.1,E=Math.PI/2+o,S=(f-.5)*i/this.planetRadius+_,w=this.planetRadius*1.002*Math.sin(E)*Math.cos(S),Z=this.planetRadius*1.002*Math.cos(E),z=this.planetRadius*1.002*Math.sin(E)*Math.sin(S);c.push(new M(w,Z,z))}const d=new lo(c),m=new co(d,r*2,l,8,!1),u=new vt({color:new h(s[0],s[1],s[2]),transparent:!0,opacity:s[3]||.4,emissive:new h(0,0,0),shininess:5}),y=new ye(m,u);this.cracks.push(y),this.featuresGroup.add(y)})}generateIceCaps(e,t){e.forEach(o=>{const i=o.position||[0,0],s=(o.radius||.3)*this.planetRadius,l=o.color||[.678,.847,1,.8],c=Math.atan2(i[1],i[0]),r=Math.acos(Math.min(1,Math.max(-1,Math.sqrt(i[0]**2+i[1]**2)))),d=this.planetRadius*1.002*Math.sin(r)*Math.cos(c),m=this.planetRadius*1.002*Math.cos(r),u=this.planetRadius*1.002*Math.sin(r)*Math.sin(c),y=new M(d,m,u),v=y.clone().normalize(),f=new Ue,_=Math.floor(t.uniform(8,20));for(let E=0;E<_;E++){const S=t.uniform(0,Math.PI*2),w=t.uniform(0,s*.8),Z=Math.cos(S)*w,z=Math.sin(S)*w,ne=new M,I=new M;Math.abs(v.y)<.99?ne.crossVectors(v,new M(0,1,0)).normalize():ne.crossVectors(v,new M(1,0,0)).normalize(),I.crossVectors(v,ne).normalize();const R=y.clone().addScaledVector(ne,Z).addScaledVector(I,z).normalize().multiplyScalar(this.planetRadius*t.uniform(1.002,1.008)),K=t.uniform(s*.05,s*.15),x=t.uniform(K*.4,K*4),k=new mo(K,x,6,1,!1),U=k.attributes.position,D=new M;for(let P=0;P<U.count;P++)if(D.fromBufferAttribute(U,P),D.y>.1&&D.y<x*.9){const O=Math.atan2(D.z,D.x),A=Math.sqrt(D.x*D.x+D.z*D.z),Q=Math.round(O/(Math.PI/3))*(Math.PI/3),oe=A*1.1;D.x=Math.cos(Q)*oe,D.z=Math.sin(Q)*oe,U.setXYZ(P,D.x,D.y,D.z)}U.needsUpdate=!0,k.computeVertexNormals();const te=new wt({color:new h(l[0],l[1],l[2]),transparent:!0,opacity:.85,metalness:0,roughness:.05,clearcoat:1,clearcoatRoughness:0,transmission:.6,ior:1.31,thickness:.8,emissive:new h(l[0],l[1],l[2]),emissiveIntensity:.03,flatShading:!0,side:_e}),B=new ye(k,te);B.position.copy(R),B.lookAt(0,0,0),B.rotateX(Math.PI/2),B.rotateZ(t.uniform(0,Math.PI*2));const N=t.uniform(.7,1.3);B.scale.set(N,N,N),f.add(B),this.iceCaps.push(B)}this.featuresGroup.add(f)})}addToScene(e,t){t&&this.featuresGroup.position.copy(t),e.add(this.featuresGroup)}update(){}getObject3D(){return this.featuresGroup}dispose(){this.crystals.forEach(e=>{e.geometry.dispose(),e.material instanceof Fe&&e.material.dispose()}),this.cracks.forEach(e=>{e.geometry.dispose(),e.material instanceof Fe&&e.material.dispose()}),this.iceCaps.forEach(e=>{e.geometry.dispose(),e.material instanceof Fe&&e.material.dispose()}),this.crystals=[],this.cracks=[],this.iceCaps=[],this.featuresGroup.clear()}}function Uo(a,e,t){const o=e.crystals,i=e.cracks,s=e.ice_caps;if(!o&&!i&&!s)return null;const l=t||Math.floor(Math.random()*1e6);return new ko(a,{crystals:o||[],cracks:i||[],iceCaps:s||[],seed:l+9e3})}class Ze{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;constructor(e,t=new h(16753920)){this.baseMesh=e;const o=e.geometry;this.planetRadius=o.parameters.radius||1;const i=t instanceof h?t:new h(t);this.baseMaterial=new he({vertexShader:Ze.baseVertexShader,fragmentShader:Ze.baseFragmentShader,uniforms:{baseColor:{value:i},lightDirection:{value:new M(1,1,1).normalize()},lightPosition:{value:new M(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:_e}),this.baseMesh.material=this.baseMaterial}addEffectLayer(e,t,o=1.001,i){const s=new Qe(this.planetRadius*o,256,256),l=new ye(s,t);return l.position.copy(this.baseMesh.position),l.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:l,material:t,layerObject:i}),this.scene&&this.scene.add(l),l}createCloudBandsLayerMaterial(e){const t=`
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
    `;return new he({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new h(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new M(1,1,1).normalize()},opacity:{value:e.opacity||.4}},transparent:!0,blending:Ie,side:_e,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,i=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((s,l)=>{l<5&&(i[l*2]=s.x,i[l*2+1]=s.y)}),new he({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new h(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:i},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new M(1,1,1).normalize()}},transparent:!0,blending:Ie,side:_e,depthWrite:!1})}createMetallicSurfaceLayerMaterial(e){const t=`
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
    `;return new he({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},metalColor:{value:e.color||new h(8421504)},metalness:{value:e.metalness||.8},roughness:{value:e.roughness||.4},fragmentationIntensity:{value:e.fragmentationIntensity||.5},opacity:{value:e.opacity||.8},lightDirection:{value:new M(1,1,1).normalize()},lightPosition:{value:new M(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3},crystalScale:{value:e.crystalScale||80}},transparent:!0,blending:Ie,side:_e,depthWrite:!1})}createIcyTerrainLayerMaterial(e){const t=`
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
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
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
        vec3 normal = normalize(vWorldNormal);
        
        // Usar posición de luz si está disponible, sino usar dirección (IGUAL que MetallicSurface)
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection); // Negativo porque lightDirection apunta hacia la luz
        }
        
        // Cálculo de iluminación Lambertiana mejorado (IGUAL que MetallicSurface)
        float dotNL = dot(normal, lightDir);
        
        // Suavizar la transición entre día y noche con mejor gradiente (IGUAL que MetallicSurface)
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Añadir un poco de retroiluminación (rim lighting) para evitar oscuridad total (IGUAL que MetallicSurface)
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Textura de hielo con grietas
        float cracks = voronoi(vUv * crackIntensity * 10.0);
        cracks = pow(cracks, 2.0);
        
        // Escarcha
        float frost = noise(vUv * frostDensity * 50.0);
        frost = smoothstep(0.3, 0.7, frost);
        
        // Color base del hielo
        vec3 color = iceColor;
        color = mix(color, vec3(1.0), frost * 0.3); // Añadir escarcha blanca
        color = mix(color * 0.7, color, cracks); // Oscurecer las grietas
        
        // Aplicar iluminación base con intensidad variable (EXACTAMENTE como MetallicSurface)
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        vec3 finalColor = color * totalLight;
        
        // Reflejo especular para simular hielo brillante - SOLO en la parte iluminada
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 halfwayDir = normalize(lightDir + viewDir);
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        float specularStrength = pow(NdotH, 32.0);
        vec3 specular = vec3(specularStrength * iceReflectivity);
        
        // Añadir reflejos especulares SOLO en la parte iluminada (como MetallicSurface)
        finalColor += specular * dayNight;
        
        // Solo mostrar en la parte iluminada (usar dayNight en lugar de visibility manual)
        float alpha = (0.5 + 0.5 * cracks) * dayNight * opacity;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;return new he({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},iceColor:{value:e.color||new h(11591910)},iceReflectivity:{value:e.iceReflectivity||.8},frostDensity:{value:e.frostDensity||.5},crackIntensity:{value:e.crackIntensity||.4},opacity:{value:e.opacity||.7},lightDirection:{value:new M(1,1,1).normalize()},lightPosition:{value:new M(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:_e,depthWrite:!1})}addToScene(e){this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&e.add(t.mesh)}),this.effectLayers.length}update(e,t){this.effectLayers.forEach(o=>{if(o.material.uniforms.time&&(o.material.uniforms.time.value+=e),t!==void 0&&o.material.uniforms.rotationAngle&&(o.material.uniforms.rotationAngle.value=t),o.layerObject&&o.layerObject.update)try{o.layerObject.update(e,t)}catch(i){console.error(`Error updating layer ${o.name}:`,i)}o.mesh&&o.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof h?e:new h(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}createGenericLayerMaterial(e,t,o,i=!0,s=Ie){return o.lightDirection||(o.lightDirection={value:new M(1,1,1).normalize()}),o.lightPosition||(o.lightPosition={value:new M(0,0,0)}),new he({vertexShader:e,fragmentShader:t,uniforms:o,transparent:i,blending:s,side:_e,depthWrite:!1})}convertEffectToLayer(e,t,o=1.001){if(t instanceof he){const i=t.clone();return i.transparent=!0,i.depthWrite=!1,i.uniforms.lightDirection||(i.uniforms.lightDirection={value:new M(1,1,1).normalize()}),this.addEffectLayer(e,i,o)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}getLayerMeshes(){const e={};return this.effectLayers.forEach(t=>{t.name&&t.mesh&&(e[t.name]=t.mesh)}),e}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const J={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4}};class Go{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new H(o),s=t.numBands||Math.floor(i.uniform(J.NUM_BANDS.min,J.NUM_BANDS.max));this.params={numBands:s,bandPositions:t.bandPositions||this.generateDefaultBandPositions(s,o),bandWidths:t.bandWidths||this.generateDefaultBandWidths(s,o),rotationAngle:t.rotationAngle||i.uniform(J.ROTATION_ANGLE.min,J.ROTATION_ANGLE.max),baseColor:t.baseColor||new h(16753920),bandColor:t.bandColor||new h(16747520),animationSpeed:t.animationSpeed||i.uniform(J.ANIMATION_SPEED.min,J.ANIMATION_SPEED.max),turbulence:t.turbulence||i.uniform(J.TURBULENCE.min,J.TURBULENCE.max),noiseScale:t.noiseScale||i.uniform(J.NOISE_SCALE.min,J.NOISE_SCALE.max),opacity:t.opacity||.4,seed:o},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const o=new Array(20).fill(0),i=new H(t+12345);for(let s=0;s<e&&s<20;s++)o[s]=i.uniform(J.BAND_POSITIONS.min,J.BAND_POSITIONS.max);return o}generateDefaultBandWidths(e,t){const o=new Array(20).fill(0),i=new H(t+67890);for(let s=0;s<e&&s<20;s++)o[s]=i.uniform(J.BAND_WIDTHS.min,J.BAND_WIDTHS.max);return o}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity)}dispose(){}}function Bo(a,e,t){const o=e.cloud_bands||{},i=t||Math.floor(Math.random()*1e6),s=new H(i+4e3),l={numBands:o.num_bands||Math.floor(s.uniform(J.NUM_BANDS.min,J.NUM_BANDS.max)),bandPositions:o.positions||void 0,bandWidths:o.widths||void 0,rotationAngle:o.rotation||s.uniform(J.ROTATION_ANGLE.min,J.ROTATION_ANGLE.max),baseColor:e.base_color?new h().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new h(16753920),bandColor:new h(16777215),animationSpeed:s.uniform(J.ANIMATION_SPEED.min,J.ANIMATION_SPEED.max),turbulence:e.turbulence||s.uniform(J.TURBULENCE.min,J.TURBULENCE.max),noiseScale:s.uniform(J.NOISE_SCALE.min,J.NOISE_SCALE.max),opacity:.4,seed:i};return new Go(a,l)}const ie={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.2,max:.6}};class Vo{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new H(o);this.params={stormCenters:t.stormCenters||this.generateStormCenters(o),stormColor:t.stormColor||new h(9109504),stormIntensity:t.stormIntensity||i.uniform(ie.STORM_INTENSITY.min,ie.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||i.uniform(ie.SPIRAL_SPEED.min,ie.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||i.uniform(ie.ANIMATION_SPEED.min,ie.ANIMATION_SPEED.max),opacity:t.opacity||i.uniform(ie.OPACITY.min,ie.OPACITY.max),seed:o},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new H(e+5e3),o=Math.floor(t.uniform(ie.STORM_COUNT.min,ie.STORM_COUNT.max)),i=[];for(let s=0;s<o;s++)i.push({x:t.uniform(ie.STORM_CENTERS.min,ie.STORM_CENTERS.max),y:t.uniform(ie.STORM_CENTERS.min,ie.STORM_CENTERS.max)});return i}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function Yo(a,e,t){const o=e.storms||{},i=t||Math.floor(Math.random()*1e6),s=new H(i+5e3),l={stormCenters:o.centers||void 0,stormColor:new h(9109504),stormIntensity:o.intensity||e.storm_intensity||s.uniform(ie.STORM_INTENSITY.min,ie.STORM_INTENSITY.max),spiralSpeed:o.spiral_speed||s.uniform(ie.SPIRAL_SPEED.min,ie.SPIRAL_SPEED.max),animationSpeed:s.uniform(ie.ANIMATION_SPEED.min,ie.ANIMATION_SPEED.max),opacity:s.uniform(ie.OPACITY.min,ie.OPACITY.max),seed:i};return new Vo(a,l)}const de={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class rt{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new H(o),s=t.color instanceof h?t.color:t.color?new h(t.color):new h(9127187);this.params={color:s,roughness:t.roughness||i.uniform(de.ROUGHNESS.min,de.ROUGHNESS.max),rockDensity:t.rockDensity||i.uniform(de.ROCK_DENSITY.min,de.ROCK_DENSITY.max)*10,craterCount:t.craterCount||i.uniform(de.CRATER_COUNT.min,de.CRATER_COUNT.max),opacity:t.opacity||i.uniform(de.OPACITY.min,de.OPACITY.max),seed:o},this.material=new he({vertexShader:rt.vertexShader,fragmentShader:rt.fragmentShader,uniforms:{time:{value:0},rockColor:{value:s},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new M(1,1,1).normalize()}},transparent:!0,side:_e,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Wo(a,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,s=t||Math.floor(Math.random()*1e6),l=new H(s+8e3);return new rt(a,{color:i?new h(i):new h(9127187),roughness:o.roughness||l.uniform(de.ROUGHNESS.min,de.ROUGHNESS.max),rockDensity:o.rock_density||l.uniform(de.ROCK_DENSITY.min,de.ROCK_DENSITY.max)*10,craterCount:o.crater_count||l.uniform(de.CRATER_COUNT.min,de.CRATER_COUNT.max),opacity:l.uniform(de.OPACITY.min,de.OPACITY.max),seed:s})}const me={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9}};class $o{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new H(o),s=t.color instanceof h?t.color:t.color?new h(t.color):new h(11591910);this.params={color:s,iceReflectivity:t.iceReflectivity||i.uniform(me.ICE_REFLECTIVITY.min,me.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||i.uniform(me.FROST_DENSITY.min,me.FROST_DENSITY.max),crackIntensity:t.crackIntensity||i.uniform(me.CRACK_INTENSITY.min,me.CRACK_INTENSITY.max),opacity:t.opacity||i.uniform(me.OPACITY.min,me.OPACITY.max),seed:o},this.material=this.layerSystem.createIcyTerrainLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Ho(a,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,s=t||Math.floor(Math.random()*1e6),l=new H(s+6e3);return new $o(a,{color:i?new h(i):new h(11591910),iceReflectivity:o.ice_reflectivity||l.uniform(me.ICE_REFLECTIVITY.min,me.ICE_REFLECTIVITY.max),frostDensity:o.frost_density||l.uniform(me.FROST_DENSITY.min,me.FROST_DENSITY.max),crackIntensity:o.crack_intensity||l.uniform(me.CRACK_INTENSITY.min,me.CRACK_INTENSITY.max),opacity:l.uniform(me.OPACITY.min,me.OPACITY.max),seed:s})}const ae={METALNESS:{min:.5,max:5},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.2,max:.9},CRYSTAL_SCALE:{min:17,max:230}};class Zo{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new H(o),s=t.color instanceof h?t.color:t.color?new h(t.color):new h(8421504);this.params={color:s,metalness:t.metalness||i.uniform(ae.METALNESS.min,ae.METALNESS.max),roughness:t.roughness||i.uniform(ae.ROUGHNESS.min,ae.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||i.uniform(ae.FRAGMENTATION_INTENSITY.min,ae.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||i.uniform(ae.OPACITY.min,ae.OPACITY.max),seed:o,noiseScale:t.noiseScale||8,noiseIntensity:t.noiseIntensity||.3,crystalScale:t.crystalScale||i.uniform(ae.CRYSTAL_SCALE.min,ae.CRYSTAL_SCALE.max)},this.material=this.layerSystem.createMetallicSurfaceLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Xo(a,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,s=t||Math.floor(Math.random()*1e6),l=new H(s+7e3),c=l.uniform(.8,1.2);return new Zo(a,{color:i?new h(i):new h(8421504),metalness:o.metalness||l.uniform(ae.METALNESS.min,ae.METALNESS.max),roughness:o.roughness||l.uniform(ae.ROUGHNESS.min,ae.ROUGHNESS.max),fragmentationIntensity:o.fragmentation||l.uniform(ae.FRAGMENTATION_INTENSITY.min,ae.FRAGMENTATION_INTENSITY.max),opacity:l.uniform(ae.OPACITY.min,ae.OPACITY.max),seed:s,noiseScale:4*c,noiseIntensity:.3,crystalScale:l.uniform(ae.CRYSTAL_SCALE.min,ae.CRYSTAL_SCALE.max)})}class Bt{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6);this.rng=new H(o),this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||50,speed:t.speed||.5,size:t.size||1,opacity:t.opacity||.3,brightness:t.brightness||1,seed:o},this.particleCount=this.params.particleCount,this.geometry=new Ne,this.createParticles(e),this.createMaterial(),this.particleSystem=new lt(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),i=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount),l=e*1.3;for(let c=0;c<this.particleCount;c++){const r=this.rng.random()*Math.PI*2,d=this.rng.random()*2-1,m=this.rng.random(),u=Math.acos(d),y=l*Math.cbrt(m);t[c*3]=y*Math.sin(u)*Math.cos(r),t[c*3+1]=y*Math.sin(u)*Math.sin(r),t[c*3+2]=y*Math.cos(u),o[c]=this.params.size*(.5+this.rng.random()*.5),i[c]=this.params.speed*(.8+this.rng.random()*.4),s[c]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new le(t,3)),this.geometry.setAttribute("size",new le(o,1)),this.geometry.setAttribute("speed",new le(i,1)),this.geometry.setAttribute("phase",new le(s,1))}createMaterial(){const e=this.params.color instanceof h?this.params.color:new h().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),t=`
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
    `;this.material=new he({uniforms:{time:{value:0},color:{value:e},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:t,fragmentShader:o,transparent:!0,blending:ct,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;const t=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*t}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof h?e.color:new h().setRGB(e.color[0],e.color[1],e.color[2]);this.material.uniforms.color.value=t}e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Dt(a,e,t){const o=e.streaks||e,i={color:o.color||[.95,.95,1],particleCount:o.particleCount||30,speed:o.speed||.3,size:.8,opacity:.2,brightness:.8,seed:t||Math.floor(Math.random()*1e6)};return new Bt(a,i)}const W={STAR_COUNT:{min:150,max:450},MIN_BRIGHTNESS:{min:.4,max:.7},MAX_BRIGHTNESS:{min:.8,max:1},MIN_SIZE:{min:1.2,max:1.8},MAX_SIZE:{min:3.5,max:5},DISTANCE:{min:300,max:600},TWINKLE_SPEED:{min:.002,max:.008}};class Xe{starSystem;material;geometry;params;starCount;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6);console.log("🌟 StarFieldEffect - Using seed:",o,"from params:",t.seed);const i=new H(o+1e4);this.params={color:t.color||new h(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(i.uniform(W.STAR_COUNT.min,W.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:i.uniform(W.MIN_BRIGHTNESS.min,W.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:i.uniform(W.MAX_BRIGHTNESS.min,W.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:i.uniform(W.MIN_SIZE.min,W.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:i.uniform(W.MAX_SIZE.min,W.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:i.uniform(W.DISTANCE.min,W.DISTANCE.max),seed:o,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:i.uniform(W.TWINKLE_SPEED.min,W.TWINKLE_SPEED.max)},this.starCount=this.params.starCount,this.geometry=new Ne,this.material=this.createMaterial(),this.generateStars(e),this.starSystem=new lt(this.geometry,this.material)}generateStars(e){const t=new Float32Array(this.starCount*3),o=new Float32Array(this.starCount),i=new Float32Array(this.starCount),s=new Float32Array(this.starCount),l=this.params.seed,c=new H(l+1e4);for(let r=0;r<this.starCount;r++){const d=c.uniform(0,2*Math.PI),m=c.uniform(-1,1),u=Math.acos(m),y=this.params.distance*c.uniform(.8,1.2),v=y*Math.sin(u)*Math.cos(d),f=y*Math.sin(u)*Math.sin(d),_=y*Math.cos(u);t[r*3]=v,t[r*3+1]=f,t[r*3+2]=_,o[r]=c.uniform(this.params.minSize,this.params.maxSize),i[r]=c.uniform(this.params.minBrightness,this.params.maxBrightness),s[r]=c.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new le(t,3)),this.geometry.setAttribute("size",new le(o,1)),this.geometry.setAttribute("brightness",new le(i,1)),this.geometry.setAttribute("twinklePhase",new le(s,1))}createMaterial(){const e=this.params.color instanceof h?this.params.color:new h(this.params.color);return new he({vertexShader:Xe.vertexShader,fragmentShader:Xe.fragmentShader,uniforms:{time:{value:0},starColor:{value:e},twinkleSpeed:{value:this.params.twinkleSpeed}},transparent:!0,blending:ct,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.starSystem.position.copy(t),e.add(this.starSystem)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof h?e.color:new h(e.color);this.material.uniforms.starColor.value=t}e.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=e.twinkleSpeed)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function qo(a,e){const t=e!==void 0?e:Math.floor(Math.random()*1e6);console.log("🌟 createStarFieldFromPythonData - planetSeed:",e,"final seed:",t);const o=new H(t+1e4),i={color:new h(16777215),starCount:Math.floor(o.uniform(W.STAR_COUNT.min,W.STAR_COUNT.max)),minBrightness:o.uniform(W.MIN_BRIGHTNESS.min,W.MIN_BRIGHTNESS.max),maxBrightness:o.uniform(W.MAX_BRIGHTNESS.min,W.MAX_BRIGHTNESS.max),minSize:o.uniform(W.MIN_SIZE.min,W.MIN_SIZE.max),maxSize:o.uniform(W.MAX_SIZE.min,W.MAX_SIZE.max),distance:o.uniform(W.DISTANCE.min,W.DISTANCE.max),seed:t,twinkleSpeed:o.uniform(W.TWINKLE_SPEED.min,W.TWINKLE_SPEED.max)};return new Xe(a,i)}class Rt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new h(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new Ue,this.generateFragments()}generateFragments(){const e=new ke({color:this.params.color instanceof h?this.params.color:new h(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const o=this.generateFragmentGeometry(),i=new ye(o,e);this.positionFragment(i,t),i.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const s=this.params.size*(Math.random()*.5+.75);i.scale.set(s,s,s),i.userData={rotationAxis:new M(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(i),this.fragments.add(i)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],o=[],i=[];i.push(new M(0,0,0));for(let c=0;c<e;c++){const r=c/e*Math.PI*2,d=Math.random()*.5+.5,m=(Math.random()-.5)*.3;i.push(new M(Math.cos(r)*d,Math.sin(r)*d,m))}for(let c=1;c<=e;c++){const d=i[c].clone();d.z+=Math.random()*.4+.2,i.push(d)}for(const c of i)t.push(c.x,c.y,c.z);for(let c=1;c<e;c++)o.push(0,c,c+1);o.push(0,e,1);const s=i.length-e-1;for(let c=0;c<e-1;c++)o.push(s,s+c+2,s+c+1);o.push(s,s+1,s+e);for(let c=0;c<e;c++){const r=c+1,d=(c+1)%e+1,m=r+e,u=d+e;o.push(r,m,d),o.push(d,m,u)}const l=new Ne;return l.setAttribute("position",new gt(t,3)),l.setIndex(o),l.computeVertexNormals(),l}positionFragment(e,t){let o;switch(this.params.distribution){case"edge":o=this.generateEdgePosition(t);break;case"surface":o=this.generateSurfacePosition();break;case"random":default:o=this.generateRandomPosition();break}e.position.copy(o)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,o=this.planetRadius*(.95+Math.random()*.1),i=(Math.random()-.5)*this.planetRadius*.5;return new M(Math.cos(t)*o,i,Math.sin(t)*o)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),o=this.planetRadius*(1+Math.random()*.05);return new M(o*Math.sin(t)*Math.cos(e),o*Math.sin(t)*Math.sin(e),o*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;return new M(e*Math.sin(t)*Math.cos(o),e*Math.sin(t)*Math.sin(o),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,o)=>{const i=t.userData;t.rotateOnAxis(i.rotationAxis,i.rotationSpeed*e*this.params.animationSpeed);const s=Math.sin(Date.now()*.001+o)*.001;t.position.y+=s*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof h?e.color:new h(e.color);this.fragmentMeshes.forEach(o=>{o.material instanceof ke&&(o.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof ke&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Fe&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Fe&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function st(a){const e=a.replace("#",""),t=parseInt(e.substr(0,2),16)/255,o=parseInt(e.substr(2,2),16)/255,i=parseInt(e.substr(4,2),16)/255;return new h(t,o,i)}function ft(a){return a.length>=3?new h(a[0],a[1],a[2]):new h(.5,.5,.5)}function We(a){if(a.ocean_color){if(typeof a.ocean_color=="string")return st(a.ocean_color);if(Array.isArray(a.ocean_color))return ft(a.ocean_color)}if(a.planet_info?.base_color){if(typeof a.planet_info.base_color=="string")return st(a.planet_info.base_color);if(Array.isArray(a.planet_info.base_color))return ft(a.planet_info.base_color)}if(a.base_color){if(typeof a.base_color=="string")return st(a.base_color);if(Array.isArray(a.base_color))return ft(a.base_color)}const e=a.planet_info?.type||a.type||"Unknown";return Ko(e)}function Ko(a){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[a]||"#FFFFFF";return st(t)}class qe{material;params;oceanLayerMesh;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new h(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new h(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new h(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof h?this.params.landmassColor:new h(this.params.landmassColor),t=this.params.foamColor instanceof h?this.params.foamColor:new h(this.params.foamColor),o=this.params.oceanColor instanceof h?this.params.oceanColor:new h(this.params.oceanColor);return new he({vertexShader:qe.vertexShader,fragmentShader:qe.fragmentShader,uniforms:{time:{value:0},baseColor:{value:o},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:o}}})}apply(e){this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const o=new ye(t,this.material);o.position.copy(e.position),o.rotation.copy(e.rotation),this.oceanLayerMesh=o}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const o=e[t];if(o!==void 0&&this.material.uniforms[t])if(o instanceof h||Array.isArray(o)){const i=o instanceof h?o:new h(o);this.material.uniforms[t].value=i}else this.material.uniforms[t].value=o})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh)):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function Qo(a){const e=We(a),t=[e.r,e.g,e.b];let o=.3,i=2,s=8,l=.3,c=.2;if(a.seeds){const d=a.seeds.shape_seed,u=(y=>{let v=y;return()=>(v=(v*1664525+1013904223)%4294967296,v/4294967296)})(d);o=.2+u()*.3,i=1.5+u()*1.5,s=6+u()*6,l=.25+u()*.15,c=.15+u()*.1}const r={waveIntensity:o,waveSpeed:i,waveScale:s,landmassThreshold:l,deepOceanThreshold:c,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new h(.9,.9,1),foamIntensity:.4,oceanColor:t};return new qe(r)}class Ke{mesh;material;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={radius:t.radius||e*.999,detail:t.detail||128,flowSpeed:t.flowSpeed||.5,waveAmplitude:t.waveAmplitude||.02,opacity:t.opacity||.75,colorDeep:t.colorDeep||new h(4147),colorShallow:t.colorShallow||new h(26333),...t};const o=new Qe(this.params.radius,this.params.detail,this.params.detail);this.material=new he({vertexShader:Ke.vertexShader,fragmentShader:Ke.fragmentShader,uniforms:{uTime:{value:0},uFlowSpeed:{value:this.params.flowSpeed},uWaveAmplitude:{value:this.params.waveAmplitude},uFresnelPower:{value:1.5},uOpacity:{value:this.params.opacity},uColorDeep:{value:this.params.colorDeep instanceof h?this.params.colorDeep:new h(this.params.colorDeep)},uColorShallow:{value:this.params.colorShallow instanceof h?this.params.colorShallow:new h(this.params.colorShallow)},uNoiseScale:{value:3},uSecondaryWaveScale:{value:6},uPrimaryFlowSpeed:{value:this.params.flowSpeed||.5},uSecondaryFlowSpeed:{value:(this.params.flowSpeed||.5)*1.6},uUvPatternSpeed1:{value:(this.params.flowSpeed||.5)*4},uUvPatternSpeed2:{value:(this.params.flowSpeed||.5)*3}},transparent:!0,depthWrite:!1,depthTest:!0,side:_e,blending:Ie}),this.mesh=new ye(o,this.material),this.mesh.renderOrder=-1,console.log("🌊 FluidLayersEffect created with params:",this.params)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh),console.log("🌊 FluidLayers mesh added to scene at position:",this.mesh.position)}update(e,t){this.material.uniforms.uTime.value+=e,t!==void 0&&(this.mesh.rotation.y=t)}updateParams(e){if(this.params={...this.params,...e},e.flowSpeed!==void 0&&(this.material.uniforms.uFlowSpeed.value=e.flowSpeed,this.material.uniforms.uPrimaryFlowSpeed.value=e.flowSpeed,this.material.uniforms.uSecondaryFlowSpeed.value=e.flowSpeed*1.6,this.material.uniforms.uUvPatternSpeed1.value=e.flowSpeed*4,this.material.uniforms.uUvPatternSpeed2.value=e.flowSpeed*3),e.waveAmplitude!==void 0&&(this.material.uniforms.uWaveAmplitude.value=e.waveAmplitude),e.opacity!==void 0&&(this.material.uniforms.uOpacity.value=e.opacity),e.colorDeep){const t=e.colorDeep instanceof h?e.colorDeep:new h(e.colorDeep);this.material.uniforms.uColorDeep.value=t}if(e.colorShallow){const t=e.colorShallow instanceof h?e.colorShallow:new h(e.colorShallow);this.material.uniforms.uColorShallow.value=t}}getObject3D(){return this.mesh}dispose(){this.mesh.geometry&&this.mesh.geometry.dispose(),this.material&&this.material.dispose()}}function Lt(a,e){let t=.5,o=.025,i=.75;if(e.seeds){const l=e.seeds.shape_seed||e.seeds.planet_seed,r=(d=>{let m=d;return()=>(m=(m*1664525+1013904223)%4294967296,m/4294967296)})(l);t=.05+r()*.3,o=.02+r()*.02,i=.25+r()*.6}const s={radius:a*.999,detail:128,flowSpeed:t,waveAmplitude:o*.4,opacity:i,colorDeep:new h(4147),colorShallow:new h(26333)};return new Ke(a,s)}class Vt{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new Ue,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,o=e,i=t*Math.cos(o),s=t*Math.sin(o),l=s*.8,c=new Ne,r=new Float32Array([0,0,0,i,l,s]);c.setAttribute("position",new le(r,3));const d=new Et({color:16776960,linewidth:5,transparent:!1});this.sunLine=new Mt(c,d),this.debugGroup.add(this.sunLine);const m=e+Math.PI,u=t*.7,y=u*Math.cos(m),v=0,f=u*Math.sin(m),_=new Qe(this.planetRadius*.15,16,16),E=new kt({color:16776960,transparent:!1,opacity:1}),S=new ye(_,E);S.position.set(y,v,f),this.debugGroup.add(S),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=new Ne,i=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);o.setAttribute("position",new le(i,3));const s=new Et({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new Mt(o,s),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,o=this.params.rotationPeriod||86400,i=this.params.initialAngleRotation||0,s=e-t,l=2*Math.PI/o;return(i+s*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),o=this.planetRadius*20,i=this.sunLine.geometry,s=i.attributes.position.array;s[3]=o*Math.cos(t),s[4]=0,s[5]=o*Math.sin(t),i.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=this.rotationLine.geometry,i=o.attributes.position.array;i[0]=-t*Math.cos(e),i[1]=0,i[2]=-t*Math.sin(e),i[3]=t*Math.cos(e),i[4]=0,i[5]=t*Math.sin(e),o.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function Jo(a,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:a.debug?.cosmic_origin_time||a.timing?.cosmic_origin_time||a.cosmicOriginTime,rotationPeriod:a.planet_info?.rotation_period||a.rotation_period_seconds||86400,initialAngleRotation:a.debug?.initial_angle_rotation||a.timing?.initial_angle_rotation||a.initialAngleRotation||0,planetRadius:e,orbitalAngle:a.timing?.orbital_angle||0,sunAngle:a.sun_angle||a.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new Vt(e,t)}const ei=!1;class je{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return je.instance||(je.instance=new je),je.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new He(t,e),fromPythonData:(e,t)=>At(t,e.atmosphere||{})}),this.registerEffect("atmosphere_clouds",{create:(e,t)=>new Ge(t,e),fromPythonData:(e,t)=>at(t,e.surface_elements||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new Bt(t,e),fromPythonData:(e,t)=>Dt(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new $e(t,e),fromPythonData:(e,t)=>zo(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new Gt(t,e),fromPythonData:(e,t)=>jo(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new Rt(t,e),fromPythonData:(e,t)=>new Rt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("land_masses",{create:(e,t)=>new xt(t,e),fromPythonData:(e,t)=>It(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("ocean_waves",{create:(e,t)=>new qe(e),fromPythonData:(e,t)=>Qo(e)}),this.registerEffect("fluid_layers",{create:(e,t)=>new Ke(t,e),fromPythonData:(e,t)=>Lt(t,e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("star_field",{create:(e,t)=>new Xe(t,e),fromPythonData:(e,t)=>qo(t,e.seeds?.planet_seed||e.planet_seed)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new Vt(t,e),fromPythonData:(e,t)=>Jo(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,o,i,s=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const c=l.create(t,o,i);if(!c)return null;const r={id:`effect_${this.nextId++}`,type:e,effect:c,priority:s,enabled:!0};return this.effects.set(r.id,r),r}catch(c){return console.error(`Error creating effect '${e}':`,c),null}}createEffectFromPythonData(e,t,o,i,s=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,o,i,s);try{const c=l.fromPythonData(t,o,i);if(!c)return null;const r={id:`effect_${this.nextId++}`,type:e,effect:c,priority:s,enabled:!0};return this.effects.set(r.id,r),r}catch(c){return console.error(`Error creating effect '${e}' from Python data:`,c),null}}createEffectsFromList(e,t,o){const i=[],s=e.sort((l,c)=>(l.priority||0)-(c.priority||0));for(const l of s){const c=this.createEffect(l.type,l.params,t,o,l.priority);c&&(c.enabled=l.enabled!==!1,i.push(c))}return i}createEffectsFromPythonPlanetData(e,t,o,i,s){const l=[];try{const c=We(e);if(s?this.layerSystem=s:this.layerSystem=new Ze(o,c),e.surface_elements){const r=e.surface_elements;if(r.effects_3d&&Array.isArray(r.effects_3d))for(const d of r.effects_3d){if(d.type==="atmospheric_streaks"){const u=Dt(t,d.params,e.seeds?.shape_seed+3e3),y={id:`effect_${this.nextId++}`,type:"atmospheric_streaks",effect:u,priority:d.priority||0,enabled:!0,name:"Atmospheric Streaks"};this.effects.set(y.id,y),l.push(y),u.addToScene(i,o.position);continue}const m=this.createEffect(d.type,d.params,t,o,d.priority||0);m?(m.name=d.type.replace(/_/g," ").replace(/\b\w/g,u=>u.toUpperCase()),l.push(m),m.effect.apply&&m.effect.apply(o),m.effect.addToScene&&m.effect.addToScene(i,o.position)):console.error("❌ FALLO AL CREAR EFECTO:",d.type)}switch(r.type){case"gas_giant":if(this.layerSystem){const m=Bo(this.layerSystem,{...r,base_color:c,turbulence:e.turbulence||r.turbulence},e.seeds?.shape_seed||e.seeds?.planet_seed||e.seeds?.planet_seed),u=Yo(this.layerSystem,{...r,base_color:c,storm_intensity:e.storm_intensity||r.storm_intensity},(e.seeds?.shape_seed||e.seeds?.planet_seed)+1e3),y={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:m,priority:0,enabled:!0};this.effects.set(y.id,y),l.push(y);const v={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:u,priority:1,enabled:!0};this.effects.set(v.id,v),l.push(v)}else console.error("❌ PlanetLayerSystem not initialized!");break;case"metallic":case"metallic_3d":if(this.layerSystem){const m=Xo(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),u={id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:m,priority:0,enabled:!0};this.effects.set(u.id,u),l.push(u)}break;case"rocky":if(this.layerSystem){const m=Wo(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),u={id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:m,priority:0,enabled:!0};if(this.effects.set(u.id,u),l.push(u),r.clouds&&r.clouds.length>0){const y=at(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),v={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:y,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(v.id,v),l.push(v),y.addToScene(i,o.position)}}break;case"icy":if(this.layerSystem){const m=Ho(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),u={id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:m,priority:0,enabled:!0};this.effects.set(u.id,u),l.push(u);const y=Fo(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+8e3);if(y){const f={id:`effect_${this.nextId++}`,type:"transparent_land_masses",effect:y,priority:1,enabled:!0,name:"Ice Formations"};this.effects.set(f.id,f),l.push(f),y.addToScene(i,o.position),console.log("🧊 Ice Formations (transparent LandMasses) added to Icy planet")}else console.warn("❄️ Failed to create transparent LandMasses for Icy planet");if(r.clouds&&r.clouds.length>0){const f=at(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),_={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:f,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(_.id,_),l.push(_),f.addToScene(i,o.position),console.log("☁️ Atmospheric Clouds added to Icy planet")}const v=Uo(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(v){const f={id:`effect_${this.nextId++}`,type:"icy_features",effect:v,priority:2,enabled:!0,name:"Ice Crystals & Features"};this.effects.set(f.id,f),l.push(f),v.addToScene(i,o.position),console.log("❄️ Icy Features (crystals, cracks, ice caps) added to Icy planet")}}break;case"oceanic":const d=Lt(t,e);if(d){const m={id:`effect_${this.nextId++}`,type:"fluid_layers",effect:d,priority:3,enabled:!0,name:"Fluid Ocean Layers"};this.effects.set(m.id,m),l.push(m),d.addToScene(i,o.position),console.log("🌊 FluidLayers effect added for oceanic planet")}if(r.green_patches&&r.green_patches.length>0){const m=It(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(m){const u={id:`effect_${this.nextId++}`,type:"land_masses",effect:m,priority:5,enabled:!0,name:"Land Masses (Islands)"};this.effects.set(u.id,u),l.push(u),m.addToScene(i,o.position)}}if(r.clouds&&r.clouds.length>0){const m=at(t,r,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),u={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:m,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(u.id,u),l.push(u),m.addToScene(i,o.position)}break;default:if(o.material instanceof ke){const m=We(e);o.material.color.copy(m)}break}}else if(o.material instanceof ke){const r=We(e);o.material.color.copy(r)}if(e.atmosphere){if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const r=At(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(r){const d={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:r,priority:20,enabled:!0};this.effects.set(d.id,d),l.push(d),r.addToScene(i,o.position)}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const r=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),d={...e.atmosphere};r==="oceanic"&&(d.opacity=Math.min(d.opacity||.3,.15),d.width=Math.min(d.width||15,8));const m=this.createEffectFromPythonData("atmosphere",d,t,o,5);m&&(l.push(m),m.effect.addToScene(i,o.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){const r=this.createEffectFromPythonData("ring_system",e,t,o,1);r?(l.push(r),r.effect.addToScene(i,o.position)):console.warn("⚠️ Failed to create ring effect")}if(e.surface_elements?.has_fragmentation_zones){const r=this.createEffectFromPythonData("fragmentation",e,t,o,5);r&&(l.push(r),r.effect.addToScene(i,o.position))}this.layerSystem&&this.layerSystem.addToScene(i);try{const r=this.createEffectFromPythonData("star_field",e,t,o,-100);r&&r.effect&&(r.effect.addToScene(i,o.position),l.push(r),console.log("⭐ StarField added automatically using planet seed:",e.seeds?.planet_seed))}catch(r){console.warn("Could not create StarField:",r)}return l.forEach((r,d)=>{}),l.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),l}catch(c){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",c),c}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const o=this.effects.get(e);if(o){o.enabled=t!==void 0?t:!o.enabled;const i=o.effect;if(i&&i.getObject3D){const s=i.getObject3D();s&&(s.visible=o.enabled,console.log(`🎮 Toggle effect ${o.type}: visible = ${o.enabled}`))}if(this.layerSystem){const s=this.layerSystem.getLayerMeshes(),c={cloud_bands_layer:"cloudBands",cloud_gyros_layer:"cloudGyros",metallic_surface_layer:"metallicSurface",rocky_terrain_layer:"rockyTerrain",icy_terrain_layer:"icyTerrain"}[o.type];c&&s[c]&&(s[c].visible=o.enabled)}}else console.warn(`⚠️ Effect not found: ${e}`)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const o of this.effects.values())if(o.enabled&&o.effect.update)try{o.effect.update(e,t)}catch(i){console.error(`Error updating effect ${o.type}:`,i)}}updateLightForAllEffects(e){this.layerSystem&&this.layerSystem.updateFromThreeLight(e);for(const t of this.effects.values())if(t.enabled&&t.effect.updateFromThreeLight)try{t.effect.updateFromThreeLight(e)}catch(o){console.error(`Error updating light for effect ${t.type}:`,o)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear(),this.nextId=1}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const Ce=je.getInstance(),Le={atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function ti(a){const e=[];switch(a.toLowerCase()){case"metallic":e.push({type:"atmosphere",params:{...Le.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:Le.cloud_bands,priority:0},{type:"cloud_gyros",params:Le.cloud_gyros,priority:1},{type:"atmosphere",params:{...Le.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:Le.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...Le.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const Ee={log:(a,e)=>{},warn:(a,e)=>{console.warn(`[Effects] ${a}`,e||"")},error:(a,e)=>{console.error(`[Effects] ${a}`,e||"")},debug:(a,e)=>{}};new Date().toISOString();const oi=({planetData:a,showInConsole:e=!0,showInPage:t=!1})=>{const[o,i]=b.useState([]),[s,l]=b.useState({});b.useEffect(()=>{if(!a)return;const d=c(a);l(d),i(r(a)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=a,window.__DEBUG_PLANET_ANALYSIS=d)},[a,e]);function c(d){const m={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(d.planet_info&&d.surface_elements?m.hasValidStructure=!0:(d.planet_info||m.missingFields.push("planet_info"),d.surface_elements||m.missingFields.push("surface_elements")),d.surface_elements?.type==="oceanic"&&(m.oceanicData={hasAbstractLands:!!d.surface_elements.abstract_lands?.length,numGreenPatches:d.surface_elements.green_patches?.length||0,numClouds:d.surface_elements.clouds?.length||0,hasDepths:d.surface_elements.depths?.enabled||!1,baseColorIsBlue:d.planet_info?.base_color==="#0000FF",greenPatchColor:d.surface_elements.green_patches?.[0]?.color,issues:[]},m.oceanicData.numGreenPatches>15&&m.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),m.oceanicData.baseColorIsBlue||m.oceanicData.issues.push(`Color base no es azul puro: ${d.planet_info?.base_color}`),m.renderingIssues=m.oceanicData.issues),d.planet_info?.base_color&&d.planet_info?.type){const y={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[d.planet_info.type];y&&d.planet_info.base_color!==y?m.colorConsistency=`Inconsistente: esperado ${y}, recibido ${d.planet_info.base_color}`:m.colorConsistency="Correcto"}return m}function r(d){const m=[];if(!d.surface_elements?.type)return["No surface type defined"];const u=d.surface_elements.type.toLowerCase();switch(u){case"oceanic":m.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":m.push("RockyTerrainEffect");break;case"icy":m.push("IcyTerrainEffect");break;case"gas giant":m.push("GasGiantBandsEffect");break;default:m.push(`Generic effect for type: ${u}`)}return d.atmosphere?.density>0&&m.push("AtmosphericEffect"),d.rings&&m.push("RingSystemEffect"),m}return t?n.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[n.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",a.planet_info?.name]}),n.jsxs("div",{style:{marginBottom:"10px"},children:[n.jsx("strong",{children:"Type:"})," ",a.planet_info?.type,n.jsx("br",{}),n.jsx("strong",{children:"Base Color:"})," ",a.planet_info?.base_color,n.jsx("br",{}),n.jsx("strong",{children:"Radius:"})," ",a.planet_info?.radius]}),a.surface_elements?.type==="oceanic"&&n.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[n.jsx("strong",{children:"🌊 Oceanic Data:"}),n.jsx("br",{}),n.jsxs("span",{style:{color:s.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",s.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),n.jsx("br",{}),"Green Patches: ",s.oceanicData?.numGreenPatches,n.jsx("br",{}),"Clouds: ",s.oceanicData?.numClouds,n.jsx("br",{}),"Has Depths: ",s.oceanicData?.hasDepths?"Yes":"No",n.jsx("br",{}),s.oceanicData?.issues?.length>0&&n.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",n.jsx("br",{}),s.oceanicData.issues.map((d,m)=>n.jsxs("div",{children:["- ",d]},m))]})]}),n.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[n.jsx("strong",{children:"🎨 Effects Applied:"}),n.jsx("br",{}),o.map((d,m)=>n.jsxs("div",{style:{color:d.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",d]},m))]}),n.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function ii(a){b.useEffect(()=>{if(a&&a.surface_elements?.type==="oceanic"){a.surface_elements.green_patches?.length>0;const e=a.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[a])}const nt=2.5,Ot=()=>{const a=45*Math.PI/180;return nt/(Math.tan(a/2)*.5)},ai=({planetName:a,containerClassName:e="",width:t=800,height:o=600,autoRotate:i=!0,enableControls:s=!0,showDebugInfo:l=!1,planetData:c,cosmicOriginTime:r,initialAngleRotation:d,onDataLoaded:m,onEffectsCreated:u,onError:y})=>{const v=b.useRef(null),f=b.useRef(null),_=b.useRef(null),E=b.useRef(null),S=b.useRef(null),w=b.useRef(null),Z=b.useRef(new ho),z=b.useRef(null),ne=b.useRef(0),I=b.useRef(null),[L,ee]=b.useState(!0),[R,K]=b.useState(null),[x,k]=b.useState(null),[U,D]=b.useState([]),[te,B]=b.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),N=b.useRef([]),P=b.useRef(0),O=b.useRef(null),A=b.useRef(null),Q=Math.floor(Date.now()/1e3),[oe,Se]=b.useState(0),V=r||x?.timing?.cosmic_origin_time||Date.now()/1e3-3600,ue=Q-V+oe;ne.current=ue;const fe=b.useCallback(()=>{if(!v.current||!_.current||!E.current)return;const p=v.current,C=p.clientWidth||400,g=p.clientHeight||400;_.current.setSize(C,g),E.current.aspect=C/g,E.current.updateProjectionMatrix()},[]),ce=async p=>{if(!(!S.current||!f.current||!A.current)){Ee.log("Applying modular effects from API data",{planet:p.planet_info.name,type:p.planet_info.type});try{Ve();const C=We(p);A.current.updateBaseColor(C);const g=Ce.createEffectsFromPythonPlanetData(p,nt,S.current,f.current,A.current);console.log(`Planet: ${p.planet_info?.name}, Effects:`,g.map(T=>T.type)),D(g),N.current=g,u&&u(g),Ee.log(`Successfully applied ${g.length} modular effects`),mt()}catch(C){Ee.error("Error applying modular effects",C),be()}}},ge=b.useCallback(()=>{if(!v.current)return!1;try{for(;v.current.firstChild;)v.current.removeChild(v.current.firstChild);f.current=null,E.current=null,_.current=null,S.current=null,X.current=null;const p=v.current,C=p.clientWidth||t||400,g=p.clientHeight||o||400,T=new uo;T.background=new h(1297),f.current=T;const q=new fo(45,C/g,.1,1e4),G=Ot();q.position.set(0,0,G),q.lookAt(0,0,0),E.current=q;const j=new po({antialias:!0,alpha:!0,powerPreference:"high-performance"});return j.setSize(C,g),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.shadowMap.enabled=!0,j.shadowMap.type=go,j.toneMapping=vo,j.toneMappingExposure=1.2,j.outputColorSpace=yo,v.current.appendChild(j.domElement),_.current=j,Be(T,null),Je(T),s&&Te(q,j.domElement),!0}catch(p){return console.error("Error initializing Three.js:",p),!1}},[x,c,r]),we=p=>{if(!p)return 0;const C=p.sun_angle||p.lighting?.sun_angle;if(C!==void 0)return C;const g=p.timing?.current_orbital_angle||p.timing?.orbital_angle;return g??0},re=b.useRef(null),Me=b.useRef(null),xe=b.useRef(null),X=b.useRef(null),De=p=>{p.castShadow=!0,p.shadow.mapSize.width=2048,p.shadow.mapSize.height=2048,p.shadow.camera.near=.5,p.shadow.camera.far=50,p.shadow.camera.left=-10,p.shadow.camera.right=10,p.shadow.camera.top=10,p.shadow.camera.bottom=-10},Re=p=>{if(!re.current||!f.current)return;const C=we(p),g=10,T=C+Math.PI,q=Math.sin(C)*5,G=g*Math.cos(T),j=q,Ae=g*Math.sin(T);re.current.position.set(G,j,Ae),re.current.target.position.set(0,0,0),f.current.children.includes(re.current.target)||f.current.add(re.current.target),Me.current&&Me.current.position.set(-G*.5,0,-Ae*.5),A.current&&re.current&&A.current.updateFromThreeLight(re.current),re.current&&Ce.updateLightForAllEffects(re.current)},Be=(p,C)=>{{const g=new Ct(16777215,2);g.position.set(-10,5,10),g.target.position.set(0,0,0),g.castShadow=!0,De(g),p.add(g),p.add(g.target),re.current=g;const T=new Ct(16777215,.05);T.position.set(8,-3,-5),p.add(T),Me.current=T;const q=new xo(2236996,.1);p.add(q),setTimeout(()=>{A.current&&g&&A.current.updateFromThreeLight(g),g&&Ce.updateLightForAllEffects(g)},50);return}},Je=p=>{const C=new Qe(nt,128,64),g=new kt({color:8421504}),T=new ye(C,g);T.castShadow=!0,T.receiveShadow=!0,T.position.set(0,0,0),p.add(T),S.current=T;const q=new h(8421504);A.current=new Ze(T,q),A.current.addToScene(p)},Te=(p,C)=>{const g=new wo(p,C);g.enableDamping=!0,g.dampingFactor=.05;const T=Ot();g.minDistance=T*.5,g.maxDistance=T*2,g.autoRotate=i,g.autoRotateSpeed=.5,g.enablePan=!0,g.enableZoom=!0,g.target.set(0,0,0),w.current=g},Pe=b.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{ee(!0),K(null),Ee.log("Loading planet data from API",{planetName:a});const C=await fetch("/api/planet/rendering-data");if(!C.ok)throw new Error(`HTTP error! status: ${C.status}`);const g=await C.json();if(!g.success)throw new Error(g.error||"Failed to fetch planet data");const T=g.planet_data,q=g.timing,G=g.rendering_data,j={planet_info:G?.planet_info||{name:T.name,type:T.planet_type,base_color:"#808080",radius:T.diameter/15e3,orbital_radius:T.orbital_radius},surface_elements:G?.surface_elements,atmosphere:G?.atmosphere,rings:G?.rings,effects_3d:G?.effects_3d,shader_uniforms:G?.shader_uniforms,universal_actions:G?.universal_actions,timing:{cosmic_origin_time:q.cosmic_origin_time,current_time_seconds:q.current_time_seconds,elapsed_time:q.elapsed_time,initial_orbital_angle:T.initial_orbital_angle,current_orbital_angle:T.current_orbital_angle,max_orbital_radius:q.max_orbital_radius,system_max_orbital_radius:T.system_max_orbital_radius},original_planet_data:T,seeds:G?.seeds};return k(j),I.current=j,Ee.log("API data loaded successfully",{planet:j.planet_info.name,type:j.planet_info.type,hasEffects:!!j.surface_elements,fullRenderingData:G}),m&&m(j),j}catch(p){const C=p instanceof Error?p.message:"Unknown error";return K(C),y&&y(C),null}finally{ee(!1),window.isLoadingPlanetData=!1}}},[a,m,y]);b.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{ee(!0),K(null),Ee.log("Loading planet data from API",{planetName:a});const C=await fetch("/api/planet/rendering-data");if(!C.ok)throw new Error(`HTTP error! status: ${C.status}`);const g=await C.json();if(!g.success)throw new Error(g.error||"Failed to fetch planet data");const T=g.planet_data,q=g.timing,G=g.rendering_data,j={planet_info:G?.planet_info||{name:T.name,type:T.planet_type,base_color:"#808080",radius:T.diameter/15e3,orbital_radius:T.orbital_radius},surface_elements:G?.surface_elements,atmosphere:G?.atmosphere,rings:G?.rings,effects_3d:G?.effects_3d,shader_uniforms:G?.shader_uniforms,universal_actions:G?.universal_actions,timing:{cosmic_origin_time:q.cosmic_origin_time,current_time_seconds:q.current_time_seconds,elapsed_time:q.elapsed_time,initial_orbital_angle:T.initial_orbital_angle,current_orbital_angle:T.current_orbital_angle,max_orbital_radius:q.max_orbital_radius,system_max_orbital_radius:T.system_max_orbital_radius},original_planet_data:T,seeds:G?.seeds};k(j),I.current=j,Ee.log("API data loaded successfully",{planet:j.planet_info.name,type:j.planet_info.type,hasEffects:!!j.surface_elements,fullRenderingData:G}),Re(j),X.current&&f.current&&(f.current.remove(X.current),X.current.geometry.dispose(),X.current.material.dispose(),X.current=null),await ce(j),m&&m(j)}catch(p){const C=p instanceof Error?p.message:"Unknown error";K(C),y&&y(C),be()}finally{ee(!1),window.isLoadingPlanetData=!1}}},[a,c,r,d]);const et=b.useCallback(()=>{if(!x||!S.current)return;const p=c?.orbital_period_seconds||365.25*24*3600,C=2*Math.PI/p,g=x.timing?.initial_orbital_angle||0,T=Date.now()/1e3,q=0,G=r||x.timing?.cosmic_origin_time||Date.now()/1e3-3600,j=T-G+q,Ae=(g+j*C)%(2*Math.PI),ht=x.timing?.max_orbital_radius||100,ot=20+x.planet_info?.orbital_radius/ht*80,Yt=ot,Wt=ot*Math.cos(Ae),$t=Yt*Math.sin(Ae);S.current.position.x=Wt,S.current.position.z=$t,S.current.position.y=0},[x,c,r]),dt=b.useCallback(async p=>{const C=p||x;if(C&&f.current)try{Re(C),X.current&&f.current&&(f.current.remove(X.current),X.current.geometry.dispose(),X.current.material.dispose(),X.current=null),await ce(C)}catch(g){Ee.error("Error in applyProceduralShadersFromAPI:",g),be()}},[x]),be=()=>{if(!(!f.current||!S.current)){Ee.warn("Applying fallback effects for planet type:",c?.planet_type);try{Ve(),S.current.material instanceof ke&&S.current.material.color.setHex(6710886);try{const p=ti("generic"),C=Ce.createEffectsFromList(p,nt,S.current);C.forEach(g=>{g.effect.addToScene&&f.current&&S.current&&g.effect.addToScene(f.current,S.current.position)}),N.current=C,D(C)}catch(p){console.warn("Could not create fallback effects, using basic material only:",p)}mt()}catch(p){Ee.error("Error applying fallback effects",p)}}},Ve=()=>{Ce.clearAllEffects(),N.current.forEach(p=>{try{p.effect.dispose&&p.effect.dispose()}catch{}}),N.current=[],D([])},tt=b.useCallback(()=>{z.current=requestAnimationFrame(tt);const p=performance.now(),C=Z.current.getDelta();w.current&&w.current.update();try{Ce.updateAllEffects(C,S.current?.rotation.y)}catch{}if(S.current&&I.current){I.current.planet_info?.name;const g=I.current.original_planet_data,T=g?.orbital_period_seconds||365.25*24*3600,q=I.current.timing?.initial_orbital_angle||0;r||I.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const G=g?.axial_tilt||0,j=2*Math.PI/T;(q+ne.current*j)%(2*Math.PI);const Ae=I.current.timing?.max_orbital_radius||I.current.timing?.system_max_orbital_radius,ht=g?.orbital_radius;if(!Ae||!ht)return;g?.eccentricity_factor,S.current.position.set(0,0,0);const bt=g?.rotation_period_seconds||86400,ot=2*Math.PI/bt;S.current.rotation.y=ne.current*ot%(2*Math.PI),S.current.rotation.z=G*(Math.PI/180)}if(N.current.forEach(g=>{g.effect.updateUniforms&&g.effect.updateUniforms(C)}),_.current&&f.current&&E.current){const g=performance.now();_.current.render(f.current,E.current);const T=performance.now()-g;if(p-P.current>5e3){const q=1e3/(p-P.current);mt(),B(G=>({...G,frameRate:Math.round(q),renderTime:Math.round(T*100)/100})),P.current=p}}},[]),mt=b.useCallback(()=>{const p=Ce.getStats();B(C=>({...C,activeEffects:p.activeEffects,enabledEffects:p.enabledEffects}))},[]);return b.useEffect(()=>{let p=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!p)return;const g=await Pe();if(!p)return;if(!ge()){p&&K("Failed to initialize 3D renderer");return}if(!p||(tt(),v.current&&"ResizeObserver"in window&&(O.current=new ResizeObserver(fe),O.current.observe(v.current)),window.addEventListener("resize",fe),!p))return;g?await dt(g):be()}catch(g){p&&K(g instanceof Error?g.message:"Unknown initialization error")}})(),()=>{if(p=!1,I.current=null,z.current&&cancelAnimationFrame(z.current),O.current&&O.current.disconnect(),window.removeEventListener("resize",fe),Ve(),A.current&&(A.current.dispose(),A.current=null),w.current&&w.current.dispose(),xe.current&&f.current&&(f.current.remove(xe.current),xe.current.geometry.dispose(),xe.current.material.dispose(),xe.current=null),X.current&&f.current&&(f.current.remove(X.current),X.current.geometry.dispose(),X.current.material.dispose(),X.current=null),_.current&&v.current)try{v.current.contains(_.current.domElement)&&v.current.removeChild(_.current.domElement),_.current.dispose()}catch{}}},[]),b.useEffect(()=>{const p=setInterval(()=>{const C=Ce.getStats();B(g=>({...g,activeEffects:C.activeEffects,enabledEffects:C.enabledEffects}))},1e4);return()=>clearInterval(p)},[]),b.useEffect(()=>{x&&f.current&&S.current&&et()},[x,et]),ii(x),n.jsxs("div",{className:`relative ${e}`,children:[l&&x&&n.jsx(oi,{planetData:x,showInPage:!0,showInConsole:!0}),n.jsx("div",{ref:v,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),L&&n.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:n.jsxs("div",{className:"text-white text-center",children:[n.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),n.jsx("div",{children:"Loading planet..."})]})}),R&&n.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[n.jsx("strong",{children:"Error:"})," ",R]}),x&&!L&&n.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[n.jsx("h3",{className:"text-lg font-bold",children:x.planet_info.name}),n.jsx("p",{className:"text-sm opacity-80",children:x.planet_info.type}),n.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[U.length," effects active"]}),x.surface_elements?.description&&n.jsx("p",{className:"text-xs mt-2 opacity-60",children:x.surface_elements.description.appearance})]}),l&&n.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[n.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),n.jsxs("div",{children:["Frame Rate: ",te.frameRate," FPS"]}),n.jsxs("div",{children:["Render Time: ",te.renderTime,"ms"]}),n.jsxs("div",{children:["Active Effects: ",te.activeEffects]}),n.jsxs("div",{children:["Enabled Effects: ",te.enabledEffects]}),n.jsxs("div",{className:"mt-2",children:[n.jsx("div",{className:"font-semibold",children:"Effects:"}),U.map(p=>n.jsxs("div",{className:"ml-2",children:[p.type," (",p.enabled?"ON":"OFF",")"]},p.id))]})]})]})};class si extends jt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?n.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:n.jsxs("div",{className:"text-center p-4",children:[n.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),n.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const ni=a=>n.jsx(si,{children:n.jsx(ai,{...a})}),ri=({planetUrl:a,imageUrl:e,planet:t,cosmicOriginTime:o,initialAngleRotation:i,onEffectsCreated:s,effects:l,onToggleEffect:c})=>{const r=b.useRef(null),d=b.useRef(null),[m,u]=b.useState("Aligning Stargate..."),[y,v]=b.useState(!1),[f,_]=b.useState(!1),[E,S]=b.useState(!1),[w,Z]=b.useState(!0),[z,ne]=b.useState(!0),[I,L]=b.useState(null),[ee,R]=b.useState(null);b.useEffect(()=>{l&&c&&l.forEach(x=>{Ce.toggleEffect(x.id,x.enabled)})},[l]),b.useEffect(()=>{const x=document.createElement("style");return x.textContent=`
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
    `,document.head.appendChild(x),()=>{document.head.removeChild(x)}},[]),b.useEffect(()=>{const x=r.current;if(!x)return;const k=x.getContext("2d");if(!k)return;let U=[];const D=800;let te,B;const N=800;let P,O=.5;function A(){const V=x?.parentElement;if(!V||!x)return;const ue=V.clientWidth,fe=V.clientHeight;x.width=Math.min(ue,N),x.height=Math.min(fe,N),te=x.width/2,B=x.height/2}function Q(){A(),U=[];for(let V=0;V<D;V++)U.push({x:Math.random()*(x?.width||800),y:Math.random()*(x?.height||800),z:Math.random()*(x?.width||800),o:Math.random()});oe()}function oe(){!x||!k||(k.clearRect(0,0,x.width,x.height),U.forEach(V=>{V.z-=O,V.z<=0&&(V.z=x.width,V.x=Math.random()*x.width,V.y=Math.random()*x.height,V.o=Math.random());const ue=x.width/V.z,fe=(V.x-te)*ue+te,ce=(V.y-B)*ue+B,ge=2*ue;k.beginPath(),k.fillStyle=`rgba(255, 255, 255, ${V.o})`,k.arc(fe,ce,ge,0,2*Math.PI),k.fill()}),O<60&&(O+=1),P=requestAnimationFrame(oe))}Q();const Se=()=>A();return window.addEventListener("resize",Se),()=>{window.removeEventListener("resize",Se),P&&cancelAnimationFrame(P)}},[]),b.useEffect(()=>{if(e&&!w){const x=new Image;x.onload=()=>{d.current&&(d.current.src=e,_(!0),S(!0))},x.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{_(!0),S(!0)},1500)},x.src=e}else(w||!e)&&setTimeout(()=>{_(!0),S(!0)},1500)},[e,w]),b.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){u("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),v(!0);const k=(N,P)=>Array.from({length:P},()=>N[Math.floor(Math.random()*N.length)]).join(""),U=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let D=0,te=0;const B=()=>{if(D>=U.length){const P="Stargate system aligned";let O=0;u("");const A=()=>{O<P.length?(u(P.substring(0,O+1)),O++,setTimeout(A,30)):v(!1)};A();return}const N=U[D];u(k(N.chars,32)),te++,te>=N.iterations&&(D++,te=0),setTimeout(B,N.duration)};B()},[]);const K=()=>{Z(!w),w||(_(!0),S(!0))};return n.jsxs("div",{className:"h-full flex flex-col",children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),z&&n.jsx("div",{className:"flex items-center gap-2",children:n.jsx("button",{onClick:K,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${w?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:w?"2D View":"3D View"})})]}),n.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[n.jsx("canvas",{ref:r,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${E?"opacity-0":"opacity-100"}`,style:{filter:E?"blur(50px)":"none"}}),w&&f&&t&&n.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${f?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:n.jsx(ni,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,onEffectsCreated:s,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:o,initialAngleRotation:i,onDataLoaded:x=>{L(x)},onError:x=>{R(x),console.error("❌ Planet rendering error:",x)}})}),!w&&n.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${f?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:f&&e?n.jsx("div",{className:"w-full h-full flex items-center justify-center",children:n.jsx(Kt,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:n.jsx("img",{ref:d,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):n.jsx("img",{ref:d,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),z&&n.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:w?"🌍 3D":"🖼️ 2D"})]}),n.jsxs("div",{className:"text-center mt-auto",children:[n.jsxs("a",{href:a,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${y?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[n.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[n.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:n.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),m]}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),n.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",w&&I&&n.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",I.planet_info?.type," Planet",I.atmosphere&&n.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),I.rings?.has_rings&&n.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),w&&ee&&n.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},li=({currentPlanet:a,system:e,galaxy:t,systemPlanets:o})=>{const[i,s]=b.useState(null),[l,c]=b.useState(null),[r,d]=b.useState(!1),[m,u]=b.useState(!1),[y,v]=b.useState(!0);b.useEffect(()=>{if(o&&o.length>0){const E=o.findIndex(S=>S.name.toLowerCase()===a.toLowerCase());E!==-1?(E>0?(s(o[E-1].name.toLowerCase()),d(!0)):e.index>0?(s("__prev_system__"),d(!0)):d(!1),E<o.length-1?(c(o[E+1].name.toLowerCase()),u(!0)):(c("__next_system__"),u(!0))):(d(!1),u(!1))}else d(!1),u(!1);v(!1)},[a,e.index,o]);const f=async()=>{const E=t.coordinates.join(",");if(i==="__prev_system__")try{const S=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(S.ok){const w=await S.json();if(w.system&&w.system.planets&&w.system.planets.length>0){const z=w.system.planets[w.system.planets.length-1].name.toLowerCase();Ye(E,e.index-1,z,w.system.planets),pt(E,e.index-1),window.location.href=`/planet/${z}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else i&&(Ye(E,e.index,i,o),window.location.href=`/planet/${i}`)},_=async()=>{const E=t.coordinates.join(",");if(l==="__next_system__")try{const S=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(S.ok){const w=await S.json();if(w.system&&w.system.planets&&w.system.planets.length>0){const z=w.system.planets[0].name.toLowerCase();Ye(E,e.index+1,z,w.system.planets),pt(E,e.index+1),window.location.href=`/planet/${z}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(Ye(E,e.index,l,o),window.location.href=`/planet/${l}`)};return y?null:n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("button",{onClick:f,disabled:!r,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${r?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),n.jsx("button",{onClick:_,disabled:!m,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${m?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:n.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},ci=({planet:a,system:e,galaxy:t,planet_url:o,version:i,image_url:s,cosmic_origin_time:l,initial_angle_rotation:c})=>{const[r]=b.useState(t.coordinates.join(",")),[d,m]=b.useState([]),u=E=>{m(E)},y=(E,S)=>{m(w=>w.map(Z=>Z.id===E?{...Z,enabled:S}:Z))};b.useEffect(()=>{document.body.setAttribute("data-coordinates",r),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",a.name.toLowerCase()),Ye(r,e.index,a.name,e.planets||[]),pt(r,e.index)},[r,e.index,a.name]);const v=E=>E.replace(/_/g," "),f=E=>E.replace(/_/g," "),_=E=>E.replace(/_/g," ");return n.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[n.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),n.jsxs("div",{className:"relative z-10",children:[n.jsx(Xt,{}),n.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[n.jsxs("div",{className:"text-center mb-8",children:[n.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:n.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",v(a.name),"'"]})}),n.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",f(e.name),"' - Galaxy '",_(t.name),"'"]}),n.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),n.jsx(li,{currentPlanet:a.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),n.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:n.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[n.jsx("div",{className:"order-1 lg:order-1",children:n.jsx(ri,{planetUrl:o,imageUrl:s,planet:a,cosmicOriginTime:l,initialAngleRotation:c,onEffectsCreated:u,effects:d,onToggleEffect:y})}),n.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),n.jsx("div",{className:"order-2 lg:order-2",children:n.jsx(_o,{planet:a,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:c,effects:d,onToggleEffect:y})})]})}),n.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:n.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:n.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",f(e.name),"'"]})})})]}),n.jsx(Ht,{version:i})]}),n.jsx(Qt,{currentLocation:{type:"planet",name:a.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:a.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const a=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),o=document.getElementById("meta-data");if(!a||!e||!t||!o){console.error("Missing required data elements");return}const i=JSON.parse(a.textContent||"{}"),s=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),c=JSON.parse(o.textContent||"{}"),r={planet:i,system:s,galaxy:l,planet_url:c.planet_url,version:c.version,image_url:c.image_url,cosmic_origin_time:c.cosmic_origin_time,initial_angle_rotation:c.initial_angle_rotation},d=document.getElementById("atlas-react-root");d&&Zt.createRoot(d).render(jt.createElement(ci,r))}catch(a){console.error("Error initializing Planet React app:",a)}});
