import{r as C,j as l,R as Zt,V as co,c as ho}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as mo}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as uo,U as fo,m as et,c as wt,a as po}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as go,V as T,n as Be,T as Ve,Q as Rt,l as Lt,o as Se,R as vo,p as yo,q as Xt,e as Ie,r as se,s as ue,N as Pe,t as lt,c as ct,C as f,u as xo,v as Ze,d as ye,G as Oe,w as qt,x as Kt,F as we,y as Et,z as Mt,h as bo,H as So,I as _o,J as We,B as Jt,K as Ct,O as wo,U as Eo,X as Mo,L as Tt,g as Pt,Y as Co,Z as He,M as Qt,_ as To,S as Po,P as Io,W as No,$ as Ao,a0 as Do,a1 as Ro,D as Ot,A as Lo}from"./atlas_BBvg3trlEj92w4KqSeMf8.js";const Oo=({effects:a,onToggleEffect:e})=>{const[t,o]=C.useState(a),[i,s]=C.useState(!1);C.useEffect(()=>{o(a)},[a]);const r=(h,d)=>{o(n=>n.map(u=>u.id===h?{...u,enabled:d}:u)),e(h,d)},c=h=>h;return t.length===0?null:l.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("div",{className:"text-xs text-gray-400",children:"3D Effects Control"}),l.jsxs("button",{onClick:()=>s(!i),className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[i?"Hide":"Show"," (",t.filter(h=>h.enabled).length,"/",t.length,")"]})]}),i&&l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:t.map(h=>l.jsxs("div",{className:"bg-white/5 rounded p-2 flex items-center justify-between",children:[l.jsxs("label",{className:"flex items-center gap-2 cursor-pointer flex-1",children:[l.jsx("input",{type:"checkbox",checked:h.enabled,onChange:d=>r(h.id,d.target.checked),className:"rounded border-gray-400 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-white/10"}),l.jsx("span",{className:`${h.enabled?"text-white":"text-gray-500"} transition-colors`,children:c(h.type)})]}),l.jsx("span",{className:`text-[10px] ${h.enabled?"text-green-400":"text-gray-600"}`,children:h.enabled?"ON":"OFF"})]},h.id))}),i&&t.length>3&&l.jsxs("div",{className:"mt-2 flex gap-2",children:[l.jsx("button",{onClick:()=>{t.forEach(h=>r(h.id,!0))},className:"text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors",children:"Enable All"}),l.jsx("button",{onClick:()=>{t.forEach(h=>r(h.id,!1))},className:"text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors",children:"Disable All"})]})]})},zo=({planet:a,system:e,galaxy:t,cosmicOriginTime:o,initialAngleRotation:i,effects:s,onToggleEffect:r})=>{const[c,h]=C.useState(!1),d=v=>v.replace(/_/g," "),n=v=>{const x=v/86400;return x<30?`${x.toFixed(2)} days`:x<365?`${(x/30).toFixed(2)} months`:`${(x/365).toFixed(2)} years`},u=v=>{const x=v*9/5+32;return`${v.toFixed(1)}°C (${x.toFixed(1)}°F)`},g=v=>`${v.toExponential(2)} kg`,p=v=>v>=1e3?`${(v/1e3).toFixed(2)} km`:`${v.toFixed(2)} m`;return l.jsxs("div",{className:"h-full flex flex-col relative",children:[l.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),l.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[l.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),l.jsx(uo,{type:"planet",name:a.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:a.name,className:"text-xs"})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[l.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),l.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:a.planet_type})]}),l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[l.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),l.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:a.atmosphere})]}),l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[l.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),l.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:a.life_forms})]})]}),l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[l.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),l.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),l.jsx("div",{className:"text-xs font-bold text-orange-300",children:g(a.mass)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),l.jsx("div",{className:"text-xs font-bold text-orange-300",children:p(a.diameter)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),l.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[a.density.toFixed(2)," kg/m³"]})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),l.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[a.gravity.toFixed(2)," m/s²"]})]})]})]}),l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[l.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),l.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),l.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.orbital_radius.toFixed(2)," AU"]})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),l.jsx("div",{className:"text-xs font-bold text-cyan-300",children:n(a.orbital_period_seconds)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),l.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.orbital_speed.toFixed(2)," m/s"]})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),l.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[a.axial_tilt.toFixed(2),"°"]})]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[l.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),l.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),l.jsx("div",{className:"text-xs font-bold text-red-300",children:u(a.surface_temperature)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),l.jsx("div",{className:"text-xs font-bold text-red-300",children:n(a.rotation_period_seconds)})]})]})]}),l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",a.elements.length,")"]}),a.elements.length>4&&l.jsx("button",{onClick:()=>h(!c),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:c?"▲ Less":"▼ All"})]}),l.jsx("div",{className:"flex flex-wrap gap-1",children:(c?a.elements:a.elements.slice(0,4)).map((v,x)=>l.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:v},x))})]})]}),l.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[l.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),l.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"Status:"}),l.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"Planet:"}),l.jsx("div",{className:"text-white truncate font-medium",children:d(a.name)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"System:"}),l.jsx("div",{className:"text-white truncate font-medium",children:d(e.name)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"System ID:"}),l.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),l.jsx("div",{className:"text-white truncate font-medium",children:d(t.name)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),l.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]}),s&&r&&l.jsx(Oo,{effects:s,onToggleEffect:r})]})},zt={type:"change"},It={type:"start"},eo={type:"end"},ut=new vo,Ft=new yo,Fo=Math.cos(70*Xt.DEG2RAD),he=new T,xe=2*Math.PI,Q={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xt=1e-6;class jo extends go{constructor(e,t=null){super(e,t),this.state=Q.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Be.ROTATE,MIDDLE:Be.DOLLY,RIGHT:Be.PAN},this.touches={ONE:Ve.ROTATE,TWO:Ve.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Rt,this._lastTargetPosition=new T,this._quat=new Rt().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lt,this._sphericalDelta=new Lt,this._scale=1,this._panOffset=new T,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new T,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Uo.bind(this),this._onPointerDown=ko.bind(this),this._onPointerUp=Vo.bind(this),this._onContextMenu=Zo.bind(this),this._onMouseWheel=Bo.bind(this),this._onKeyDown=Wo.bind(this),this._onTouchStart=Ho.bind(this),this._onTouchMove=$o.bind(this),this._onMouseDown=Yo.bind(this),this._onMouseMove=Go.bind(this),this._interceptControlDown=Xo.bind(this),this._interceptControlUp=qo.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zt),this.update(),this.state=Q.NONE}update(e=null){const t=this.object.position;he.copy(t).sub(this.target),he.applyQuaternion(this._quat),this._spherical.setFromVector3(he),this.autoRotate&&this.state===Q.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let o=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(o)&&isFinite(i)&&(o<-Math.PI?o+=xe:o>Math.PI&&(o-=xe),i<-Math.PI?i+=xe:i>Math.PI&&(i-=xe),o<=i?this._spherical.theta=Math.max(o,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(o+i)/2?Math.max(o,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(he.setFromSpherical(this._spherical),he.applyQuaternion(this._quatInverse),t.copy(this.target).add(he),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const c=he.length();r=this._clampDistance(c*this._scale);const h=c-r;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),s=!!h}else if(this.object.isOrthographicCamera){const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=h!==this.object.zoom;const d=new T(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(c),this.object.updateMatrixWorld(),r=he.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ut.origin.copy(this.object.position),ut.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ut.direction))<Fo?this.object.lookAt(this.target):(Ft.setFromNormalAndCoplanarPoint(this.object.up,this.target),ut.intersectPlane(Ft,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>xt||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xt||this._lastTargetPosition.distanceToSquared(this.target)>xt?(this.dispatchEvent(zt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xe/60*this.autoRotateSpeed*e:xe/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){he.setFromMatrixColumn(t,0),he.multiplyScalar(-e),this._panOffset.add(he)}_panUp(e,t){this.screenSpacePanning===!0?he.setFromMatrixColumn(t,1):(he.setFromMatrixColumn(t,0),he.crossVectors(this.object.up,he)),he.multiplyScalar(e),this._panOffset.add(he)}_pan(e,t){const o=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;he.copy(i).sub(this.target);let s=he.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/o.clientHeight,this.object.matrix),this._panUp(2*t*s/o.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/o.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/o.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const o=this.domElement.getBoundingClientRect(),i=e-o.left,s=t-o.top,r=o.width,c=o.height;this._mouse.x=i/r*2-1,this._mouse.y=-(s/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(xe*this._rotateDelta.x/t.clientHeight),this._rotateUp(xe*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(o,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(o,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(o*o+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const o=this._getSecondPointerPosition(e),i=.5*(e.pageX+o.x),s=.5*(e.pageY+o.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(xe*this._rotateDelta.x/t.clientHeight),this._rotateUp(xe*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(o,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(o*o+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(r,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,o={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(o.deltaY*=10),o}}function ko(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function Uo(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function Vo(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(eo),this.state=Q.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Yo(a){let e;switch(a.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=Q.DOLLY;break;case Be.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Q.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Q.ROTATE}break;case Be.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=Q.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=Q.PAN}break;default:this.state=Q.NONE}this.state!==Q.NONE&&this.dispatchEvent(It)}function Go(a){switch(this.state){case Q.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case Q.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case Q.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function Bo(a){this.enabled===!1||this.enableZoom===!1||this.state!==Q.NONE||(a.preventDefault(),this.dispatchEvent(It),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(eo))}function Wo(a){this.enabled!==!1&&this._handleKeyDown(a)}function Ho(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=Q.TOUCH_ROTATE;break;case Ve.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=Q.TOUCH_PAN;break;default:this.state=Q.NONE}break;case 2:switch(this.touches.TWO){case Ve.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=Q.TOUCH_DOLLY_PAN;break;case Ve.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=Q.TOUCH_DOLLY_ROTATE;break;default:this.state=Q.NONE}break;default:this.state=Q.NONE}this.state!==Q.NONE&&this.dispatchEvent(It)}function $o(a){switch(this._trackPointer(a),this.state){case Q.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case Q.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case Q.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case Q.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=Q.NONE}}function Zo(a){this.enabled!==!1&&a.preventDefault()}function Xo(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qo(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class jt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class to{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:o,ring_inner_radius:i,ring_outer_radius:s,tilt_factor:r,planet_radius:c,shape_seed:h}=e;if(!t||!o){console.warn("No ring data provided");return}const d=[...t.particles,...o.particles],n=d.length,u=new jt(h||12345),g=new Ie,p=new Float32Array(n*3),v=new Float32Array(n*3),x=new Float32Array(n),w=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],y=u.choice(w);for(let m=0;m<n;m++){const E=d[m],N=this.planetRadius/(c||200),P=(h||12345)+m,_=new jt(P),F=E.distance*N,O=E.angle,R=F*Math.sin(O),G=Math.asin((r||.2)*.5),M=R*Math.sin(G),U=R*Math.cos(G),V=((s||400)-(i||200))*N*.4,B=_.uniform(-V*.8,V*.8),ee=_.uniform(-V*.3,V*.3),Z=_.uniform(-.08,.08),K=F+ee,A=O+Z;p[m*3]=K*Math.cos(A),p[m*3+1]=M+B+this.planetRadius*.15,p[m*3+2]=U+_.uniform(-V*.4,V*.4),E.color[0]/255;const L=(E.distance-(i||200))/((s||400)-(i||200)),X=y.baseGray,te=y.variation,me=_.uniform(-te,te),oe=Math.max(.12,Math.min(.45,X+me)),fe=.8+L*.4,ge=_.uniform(.85,1.15),be=_.uniform(0,1),ve=be<.03?_.uniform(1.1,1.3):1,Ee=oe*fe*ge*ve,ce=Math.max(.1,Math.min(.55,Ee));v[m*3]=ce,v[m*3+1]=ce,v[m*3+2]=ce;const Ne=.15,Me=_.uniform(.3,.7),re=be<.1?_.uniform(1.05,1.2):1;x[m]=E.size*Ne*Me*re}g.setAttribute("position",new se(p,3)),g.setAttribute("color",new se(v,3)),g.setAttribute("size",new se(x,1)),this.material=new ue({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Pe}),this.ringSystem=new lt(g,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const o=t.rotation_period_seconds||86400,i=t.cosmicOriginTime||Date.now()/1e3,s=t.initialAngleRotation||0,c=Date.now()/1e3-i,h=2*Math.PI/o,d=(s+c*h)%(2*Math.PI);this.ringSystem.rotation.y=d}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function Ko(a,e){const t={full_ring:a.full_ring,ontop_ring:a.ontop_ring,ring_inner_radius:a.ring_inner_radius,ring_outer_radius:a.ring_outer_radius,tilt_factor:a.tilt_factor,planet_radius:a.planet_radius,shape_seed:a.shape_seed};return new to(e,t)}class tt{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const o=e*(1+this.params.width/100);this.geometry=new ct(o,32,32);const i=new f(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ue({vertexShader:tt.vertexShader,fragmentShader:tt.fragmentShader,uniforms:{atmosphereColor:{value:i},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:Ze,side:xo,depthWrite:!1}),this.mesh=new ye(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new f(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function Jo(a,e){let t=[.7,.7,.7,.15],o=12;if(e){if(e.color&&Array.isArray(e.color)){const s=e.color;t=[s[0],s[1],s[2],(s[3]||.15)*.7]}e.width&&(o=e.width)}const i={type:e?.type||"Thin",color:t,width:o,opacity:t[3],density:1};return new tt(a,i)}class k{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,o=Math.acos(this.random()*2-1);return{x:e*Math.sin(o)*Math.cos(t),y:e*Math.sin(o)*Math.sin(t),z:e*Math.cos(o)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const W={PARTICLE_COUNT:{min:25,max:150},SPEED:{min:.05,max:.5},SIZE:{min:.3,max:1.5},OPACITY:{min:.1,max:.3},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05},TIME_SPEED:{min:.1,max:3}};class ot{particleSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6),i=new k(o);this.startTime=t.startTime||o%1e4/1e3,this.params={color:t.color||new f(16777215),particleCount:t.particleCount||Math.floor(i.uniform(W.PARTICLE_COUNT.min,W.PARTICLE_COUNT.max)),speed:t.speed||i.uniform(W.SPEED.min,W.SPEED.max),size:t.size||i.uniform(W.SIZE.min,W.SIZE.max),opacity:t.opacity||i.uniform(W.OPACITY.min,W.OPACITY.max),turbulence:t.turbulence||i.uniform(W.TURBULENCE.min,W.TURBULENCE.max),rotationSpeed:t.rotationSpeed||i.uniform(W.ROTATION_SPEED.min,W.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||i.uniform(W.MOVEMENT_AMPLITUDE.min,W.MOVEMENT_AMPLITUDE.max),timeSpeed:t.timeSpeed||i.uniform(W.TIME_SPEED.min,W.TIME_SPEED.max),seed:o,startTime:this.startTime},this.particleCount=this.params.particleCount,this.geometry=new Ie,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new lt(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),c=this.params.color instanceof f?this.params.color:new f(this.params.color),h=this.params.seed||Math.floor(Math.random()*1e6),d=new k(h);for(let n=0;n<this.particleCount;n++){const u=d.spherePosition(e*d.uniform(1,1.1));t[n*3]=u.x,t[n*3+1]=u.y,t[n*3+2]=u.z;const g=d.colorVariation({r:c.r,g:c.g,b:c.b});o[n*3]=g.r,o[n*3+1]=g.g,o[n*3+2]=g.b,i[n]=this.params.size*d.uniform(.75,1.25),s[n]=this.params.speed*d.uniform(.6,1.4),r[n]=d.random()*Math.PI*2}this.geometry.setAttribute("position",new se(t,3)),this.geometry.setAttribute("customColor",new se(o,3)),this.geometry.setAttribute("size",new se(i,1)),this.geometry.setAttribute("speed",new se(s,1)),this.geometry.setAttribute("phase",new se(r,1))}createMaterial(){return new ue({vertexShader:ot.vertexShader,fragmentShader:ot.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:Ze,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){const o=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=o,this.particleSystem.rotation.y=o*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function kt(a,e,t){const o=e.streaks||{},i=t||Math.floor(Math.random()*1e6),s=new k(i+3e3),r=o.count||Math.floor(s.uniform(W.PARTICLE_COUNT.min,W.PARTICLE_COUNT.max)),c=o.speed||s.uniform(W.SPEED.min,W.SPEED.max),h=s.uniform(W.SIZE.min,W.SIZE.max),d=s.uniform(W.OPACITY.min,W.OPACITY.max),n=s.uniform(W.TURBULENCE.min,W.TURBULENCE.max),u=s.uniform(W.ROTATION_SPEED.min,W.ROTATION_SPEED.max),g=s.uniform(W.MOVEMENT_AMPLITUDE.min,W.MOVEMENT_AMPLITUDE.max),p=s.uniform(W.TIME_SPEED.min,W.TIME_SPEED.max),v={color:o.color?new f().setRGB(o.color[0],o.color[1],o.color[2]):new f(16777215),particleCount:r,speed:c,size:h,opacity:d,turbulence:n,seed:i,rotationSpeed:u,movementAmplitude:g,timeSpeed:p};return new ot(a,v)}const H={CLOUD_COUNT:{min:15,max:30},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.9},DENSITY:{min:.5,max:2},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},PUFFINESS:{min:1,max:1.4},TIME_SPEED:{min:.1,max:3}};class $e{cloudSystem;material;params;cloudCount;clouds=[];startTime;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6),i=new k(o);this.startTime=t.startTime||o%1e4/1e3,this.params={color:t.color||new f(16777215),cloudCount:t.cloudCount||Math.floor(i.uniform(H.CLOUD_COUNT.min,H.CLOUD_COUNT.max)),size:t.size||i.uniform(H.SIZE.min,H.SIZE.max),opacity:t.opacity||i.uniform(H.OPACITY.min,H.OPACITY.max),density:t.density||i.uniform(H.DENSITY.min,H.DENSITY.max),rotationSpeed:t.rotationSpeed||i.uniform(H.ROTATION_SPEED.min,H.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||i.uniform(H.MOVEMENT_AMPLITUDE.min,H.MOVEMENT_AMPLITUDE.max),puffiness:t.puffiness||i.uniform(H.PUFFINESS.min,H.PUFFINESS.max),timeSpeed:t.timeSpeed||i.uniform(H.TIME_SPEED.min,H.TIME_SPEED.max),seed:o,startTime:this.startTime},this.cloudCount=this.params.cloudCount,this.cloudSystem=new Oe,this.material=this.createMaterial(),this.generateClouds(e)}generateClouds(e){const t=this.params.color instanceof f?this.params.color:new f(this.params.color),o=this.params.seed||Math.floor(Math.random()*1e6),i=new k(o),s=this.params.cloudsFromPython;for(let r=0;r<this.cloudCount;r++){let c,h,d,n=t,u=this.params.size*i.uniform(.8,1.2);if(s&&r<s.length){const R=s[r];c=R.position[0]*e*1.04,h=R.position[1]*e*1.04,d=R.position[2]*e*1.04,R.color&&(n=new f().setRGB(R.color[0],R.color[1],R.color[2])),u=R.radius*e*.8}else{const R=i.uniform(0,2*Math.PI),G=i.uniform(-1,1),M=Math.acos(G),U=e*i.uniform(1.02,1.06);c=U*Math.sin(M)*Math.cos(R),h=U*Math.sin(M)*Math.sin(R),d=U*Math.cos(M)}const g=u*i.uniform(.3,.8),p=Math.max(8,Math.floor(g*15)),v=new qt(g*2,g*2,p,p),x=new T(c,h,d);new T(0,0,0);const w=x.clone().normalize(),y=new T,m=new T;Math.abs(w.y)<.99?y.crossVectors(w,new T(0,1,0)).normalize():y.crossVectors(w,new T(1,0,0)).normalize(),m.crossVectors(w,y).normalize();const E=new Kt;E.makeBasis(y,m,w);const N=v.attributes.position,P=new T,_=Math.sqrt(c*c+h*h+d*d);v.applyMatrix4(E);for(let R=0;R<N.count;R++){P.fromBufferAttribute(N,R);const V=P.clone().add(x).clone().normalize().multiplyScalar(_).sub(x);N.setXYZ(R,V.x,V.y,V.z)}N.needsUpdate=!0,v.computeVertexNormals(),v.translate(c,h,d);const F=this.material.clone();F.uniforms.cloudColor.value=n,F.uniforms.density.value=this.params.density*i.uniform(.8,1.2),F.uniforms.noiseOffset.value=new Se(i.uniform(0,100),i.uniform(0,100)),F.uniforms.shapeVariation.value=i.uniform(-1,1),F.uniforms.lightDirection.value=this.material.uniforms.lightDirection.value.clone(),F.uniforms.lightPosition.value=this.material.uniforms.lightPosition.value.clone();const O=new ye(v,F);O.userData.isAtmosphericCloud=!0,O.userData.planetNormal=w.clone(),this.clouds.push(O),this.cloudSystem.add(O)}}createMaterial(){return new ue({vertexShader:$e.vertexShader,fragmentShader:$e.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},cloudColor:{value:new f(16777215)},density:{value:this.params.density},noiseOffset:{value:new Se(0,0)},shapeVariation:{value:0},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)}},transparent:!0,blending:Pe,depthWrite:!1,side:we})}addToScene(e,t){t&&this.cloudSystem.position.copy(t),e.add(this.cloudSystem)}update(e,t){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.clouds.forEach(s=>{const r=s.material;r.uniforms.time.value=i}),this.cloudSystem.rotation.y=i*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},this.clouds.forEach(t=>{const o=t.material;e.opacity!==void 0&&(o.uniforms.opacity.value=e.opacity),e.movementAmplitude!==void 0&&(o.uniforms.movementAmplitude.value=e.movementAmplitude)})}updateLightPosition(e){this.clouds.forEach(t=>{const o=t.material;o.uniforms.lightPosition&&o.uniforms.lightPosition.value.copy(e)})}updateLightDirection(e){this.clouds.forEach(t=>{const o=t.material;o.uniforms.lightDirection&&o.uniforms.lightDirection.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function Je(a,e,t){const o=e.clouds||[];if(o.length===0){const c=t||Math.floor(Math.random()*1e6),h=new k(c+4e3),d={color:new f(1,1,1),cloudCount:15,size:.6,opacity:.7,density:.8,seed:c,rotationSpeed:.005,movementAmplitude:.02,puffiness:1.5,timeSpeed:h.uniform(H.TIME_SPEED.min,H.TIME_SPEED.max)};return new $e(a,d)}const i=t||Math.floor(Math.random()*1e6),s=new k(i+4e3),r={color:new f(16777215),cloudCount:o.length,size:s.uniform(H.SIZE.min,H.SIZE.max),opacity:s.uniform(H.OPACITY.min,H.OPACITY.max),density:s.uniform(H.DENSITY.min,H.DENSITY.max),seed:i,rotationSpeed:s.uniform(H.ROTATION_SPEED.min,H.ROTATION_SPEED.max),movementAmplitude:s.uniform(H.MOVEMENT_AMPLITUDE.min,H.MOVEMENT_AMPLITUDE.max),puffiness:s.uniform(H.PUFFINESS.min,H.PUFFINESS.max),timeSpeed:s.uniform(H.TIME_SPEED.min,H.TIME_SPEED.max),cloudsFromPython:o};return new $e(a,r)}class Nt{landGroup;lands=[];constructor(e,t={}){this.landGroup=new Oe;const o=t.seed||Math.floor(Math.random()*1e6),i=new k(o);t.greenPatches&&t.greenPatches.length>0?this.generateLandsFromPython(e,t.greenPatches,i,t):this.generateProceduralLands(e,i,t)}generateLandsFromPython(e,t,o,i){t.forEach((s,r)=>{let c=s.position_3d||s.position||[0,0,1];if(c.length===2){const A=o.uniform(0,Math.PI*2),z=Math.acos(o.uniform(-1,1));c=[Math.sin(z)*Math.cos(A),Math.sin(z)*Math.sin(A),Math.cos(z)]}const h=(s.size||.1)*e*1.8;Math.max(8,Math.min(s.sides||20,12));let d=new f(4881497),n=1;s.color&&Array.isArray(s.color)&&(d=new f(s.color[0],s.color[1],s.color[2]),s.color.length>3&&(n=s.color[3]));const u=Math.max(24,Math.min(64,Math.floor(h*32))),g=new T(c[0],c[1],c[2]).normalize(),p=new T,v=new T;Math.abs(g.y)<.99?p.crossVectors(g,new T(0,1,0)).normalize():p.crossVectors(g,new T(1,0,0)).normalize(),v.crossVectors(g,p).normalize();const x=2/Math.max(h*.05,1),w=(A,z)=>{let L=0,X=1,te=x,me=0;const oe=Math.min(5,Math.max(3,Math.floor(h/40)+2));for(let fe=0;fe<oe;fe++){const ge=A*te,be=z*te,ve=(Ce,ht)=>{const Ke=Ce*12.9898+ht*78.233;return Math.sin(Ke+o.uniform(0,1e3))*43758.5453%1},Ee=Math.floor(ge),ce=Math.floor(be),Ne=ge-Ee,Me=be-ce,re=Ce=>Ce*Ce*Ce*(Ce*(Ce*6-15)+10),Ae=re(Ne),ze=re(Me),Xe=ve(Ee,ce),qe=ve(Ee+1,ce),dt=ve(Ee,ce+1),Fe=ve(Ee+1,ce+1),Re=Xe*(1-Ae)+qe*Ae,vt=dt*(1-Ae)+Fe*Ae,ke=Re*(1-ze)+vt*ze;L+=ke*X,me+=X,X*=.5,te*=2.2}return L/me},y=[],m=[],E=[],N=.35,P=new Map,_=new Map;let F=0;for(let A=0;A<=u;A++)for(let z=0;z<=u;z++){const L=(A/u-.5)*2,X=(z/u-.5)*2,te=Math.sqrt(L*L+X*X),me=w(L*2,X*2);if(1-te*.5+me*.6>N&&te<1.2){const fe=L*h,ge=X*h,ve=new T().addScaledVector(p,fe).addScaledVector(v,ge).addScaledVector(g,0);y.push(ve.x,ve.y,ve.z),E.push((L+1)*.5,(X+1)*.5),P.set(`${A},${z}`,F),_.set(`${A},${z}`,me),F++}}for(let A=0;A<u;A++)for(let z=0;z<u;z++){const L=P.get(`${A},${z}`),X=P.get(`${A+1},${z}`),te=P.get(`${A},${z+1}`),me=P.get(`${A+1},${z+1}`);L!==void 0&&X!==void 0&&te!==void 0&&m.push(L,X,te),X!==void 0&&me!==void 0&&te!==void 0&&m.push(X,me,te)}const O=new Ie;O.setAttribute("position",new Et(y,3)),O.setAttribute("uv",new Et(E,2)),O.setIndex(m),O.computeVertexNormals();const R=O.attributes.position,G=g.clone().multiplyScalar(e),M=new T;for(let A=0;A<R.count;A++){M.fromBufferAttribute(R,A);const L=M.clone().add(G).clone().normalize(),X=O.attributes.uv;if(X){const te=X.getX(A)*2-1,me=X.getY(A)*2-1,oe=Math.sqrt(te*te+me*me),fe=w(te*2,me*2),be=Math.max(0,1-Math.pow(oe,.7))*.5+fe*.5,Ee=(Re=>Re*Re*(3-2*Re))(be),Ne=e*1.01-e,Me=h*.15,re=Math.min(Me,Ne*.9),Ae=e*.002,ze=e+Ae,Xe=e+Ae+re,qe=Xt.lerp(ze,Xe,Ee),Fe=L.multiplyScalar(qe).sub(G);R.setXYZ(A,Fe.x,Fe.y,Fe.z)}}R.needsUpdate=!0,O.computeVertexNormals(),O.translate(G.x,G.y,G.z);const U=new Mt({color:i.transparentMode?new f(15135743):d,opacity:i.transparentMode?.3:n,transparent:i.transparentMode||n<1,emissive:i.transparentMode?new f(13428479).multiplyScalar(.1):d.clone().multiplyScalar(.05),emissiveIntensity:i.transparentMode?.05:1e-7,shininess:i.transparentMode?30:8,flatShading:!1,bumpScale:.002}),V=document.createElement("canvas");V.width=V.height=64;const B=V.getContext("2d"),ee=B.createImageData(64,64);for(let A=0;A<ee.data.length;A+=4){const z=o.uniform(.8,1.2),L=Math.floor(128*z);ee.data[A]=L,ee.data[A+1]=L,ee.data[A+2]=L,ee.data[A+3]=255}B.putImageData(ee,0,0);const Z=new bo(V);Z.wrapS=Z.wrapT=So,Z.repeat.set(2,2),U.bumpMap=Z;const K=new ye(O,U);K.castShadow=!0,K.receiveShadow=!0,this.lands.push(K),this.landGroup.add(K)})}generateProceduralLands(e,t,o){const i=Math.floor(t.uniform(5,15));for(let s=0;s<i;s++){const r=t.uniform(0,Math.PI*2),c=Math.acos(t.uniform(-1,1)),h=new T(Math.sin(c)*Math.cos(r),Math.sin(c)*Math.sin(r),Math.cos(c)),d=e*t.uniform(.02,.08),n=new _o(d,16),u=h.clone().multiplyScalar(e*1);n.lookAt(h),n.translate(u.x,u.y,u.z);const g=t.uniform(.3,.7),p=new f(.36*(1-g)+.22*g,.23*(1-g)+.36*g,0),x=o.tundraMode||!1?.25:1,w=new Mt({color:o.transparentMode?new f(15135743):p,opacity:o.transparentMode?.3:x,transparent:o.transparentMode||x<1,emissive:o.transparentMode?new f(13428479).multiplyScalar(.1):657920,shininess:o.transparentMode?30:5}),y=new ye(n,w);this.lands.push(y),this.landGroup.add(y)}}addToScene(e,t){t&&this.landGroup.position.copy(t),e.add(this.landGroup)}update(e){}getObject3D(){return this.landGroup}dispose(){this.lands.forEach(e=>{e.geometry.dispose(),e.material instanceof We&&e.material.dispose()}),this.lands=[],this.landGroup.clear()}}function bt(a,e,t){const o=e.green_patches;if(!o||o.length===0)return null;const i=t||Math.floor(Math.random()*1e6);return new Nt(a,{greenPatches:o,seed:i+6e3})}function Qo(a,e,t){const o=t||Math.floor(Math.random()*1e6),i=new k(o+7e3),s=Math.floor(i.uniform(3,8)),r=[];for(let c=0;c<s;c++){const h=i.uniform(0,Math.PI*2),d=Math.acos(i.uniform(-1,1));r.push({position_3d:[Math.sin(d)*Math.cos(h),Math.sin(d)*Math.sin(h),Math.cos(d)],size:i.uniform(.05,.15),sides:Math.floor(i.uniform(8,16)),color:[0,0,0]})}return console.log(`🧊 Creating ${s} transparent ice formations for Icy planet with seed ${o+7e3}`),new Nt(a,{greenPatches:r,seed:o+7e3,transparentMode:!0})}class ei{featuresGroup;crystals=[];cracks=[];iceCaps=[];planetRadius;constructor(e,t={}){this.featuresGroup=new Oe,this.planetRadius=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new k(o);t.crystals&&t.crystals.length>0&&this.generateCrystals(t.crystals,i),t.cracks&&t.cracks.length>0&&this.generateCracks(t.cracks),t.iceCaps&&t.iceCaps.length>0&&this.generateIceCaps(t.iceCaps,i)}generateCrystals(e,t){e.forEach(o=>{const i=o.position||[0,0],s=(o.width||.05)*this.planetRadius*.8,r=(o.length||.1)*this.planetRadius*.08,c=o.angle||0,h=o.color||[172/255,215/255,230/255,1],d=this.planetRadius*.015,n=Math.max(r,d),u=new Jt(s*2,n,s*1.5,4,2,4),g=u.attributes.position,p=new T;for(let Z=0;Z<g.count;Z++){if(p.fromBufferAttribute(g,Z),Math.abs(p.y)>n*.3){const K=Math.atan2(p.z,p.x),A=Math.sqrt(p.x*p.x+p.z*p.z),z=Math.round(K/(Math.PI/3))*(Math.PI/3),L=t.uniform(.8,1.2),X=A*L;p.x=Math.cos(z)*X,p.z=Math.sin(z)*X,p.y+=t.uniform(-n*.1,n*.1)}g.setXYZ(Z,p.x,p.y,p.z)}g.needsUpdate=!0,u.computeVertexNormals();const v=new Ct({color:new f(h[0],h[1],h[2]),transparent:!0,opacity:.8,metalness:0,roughness:.02,clearcoat:1,clearcoatRoughness:0,transmission:.7,ior:1.31,thickness:.5,emissive:new f(h[0],h[1],h[2]),emissiveIntensity:.02,flatShading:!1,side:we}),x=new ye(u,v);let w=Math.min(1,Math.max(-1,i[1]));const y=Math.pow(Math.abs(w),.3),m=Math.sign(w)*y,E=t.uniform(-.3,.3)*(1-Math.abs(m)),N=Math.min(1,Math.max(-1,m+E)),P=Math.acos(Math.abs(N)),_=Math.atan2(i[0],.001)+c,F=this.planetRadius*t.uniform(1.0005,1.001),O=F*Math.sin(P)*Math.cos(_),R=F*N,G=F*Math.sin(P)*Math.sin(_);x.position.set(O,R,G);const M=x.position.clone().normalize(),U=new T,V=new T;Math.abs(M.x)<.9?U.set(1,0,0):U.set(0,1,0),U.crossVectors(U,M).normalize(),V.crossVectors(M,U).normalize();const B=new Kt;B.makeBasis(U,M,V),x.rotation.setFromRotationMatrix(B),x.rotateY(t.uniform(0,Math.PI*2));const ee=t.uniform(.8,1.2);x.scale.set(ee,ee,ee),this.crystals.push(x),this.featuresGroup.add(x)})}generateCracks(e){const t=new k(42);e.forEach(o=>{const i=o.angle||0,s=(o.length||1)*this.planetRadius*2,r=o.color||[80/255,80/255,80/255,.4],c=(o.width||1)*5e-4*this.planetRadius,h=t.uniform(.6,1),d=t.uniform(0,1)>.5?1:-1,n=Math.acos(h*d),u=[],g=20;for(let y=0;y<=g;y++){const m=y/g,E=Math.sin(m*Math.PI)*.1,P=i+(m-.5)*s/(this.planetRadius*Math.sin(Math.abs(n)))+E,_=this.planetRadius*1.002*Math.sin(Math.abs(n))*Math.cos(P),F=this.planetRadius*1.002*Math.cos(Math.abs(n))*d,O=this.planetRadius*1.002*Math.sin(Math.abs(n))*Math.sin(P);u.push(new T(_,F,O))}const p=new wo(u),v=new Eo(p,g*2,c,8,!1),x=new Mt({color:new f(r[0],r[1],r[2]),transparent:!0,opacity:r[3]||.4,emissive:new f(0,0,0),shininess:5}),w=new ye(v,x);this.cracks.push(w),this.featuresGroup.add(w)})}generateIceCaps(e,t){e.forEach(o=>{const i=o.position||[0,0],s=(o.radius||.3)*this.planetRadius,r=o.color||[.678,.847,1,.8],c=Math.atan2(i[1],i[0]),h=Math.acos(Math.min(1,Math.max(-1,Math.sqrt(i[0]**2+i[1]**2)))),d=this.planetRadius*1.002*Math.sin(h)*Math.cos(c),n=this.planetRadius*1.002*Math.cos(h),u=this.planetRadius*1.002*Math.sin(h)*Math.sin(c),g=new T(d,n,u),p=g.clone().normalize(),v=new Oe,x=Math.floor(t.uniform(8,20));for(let w=0;w<x;w++){const y=t.uniform(0,Math.PI*2),m=t.uniform(0,s*.8),E=Math.cos(y)*m,N=Math.sin(y)*m,P=new T,_=new T;Math.abs(p.y)<.99?P.crossVectors(p,new T(0,1,0)).normalize():P.crossVectors(p,new T(1,0,0)).normalize(),_.crossVectors(p,P).normalize();const R=g.clone().addScaledVector(P,E).addScaledVector(_,N).normalize().multiplyScalar(this.planetRadius*t.uniform(1.002,1.008)),G=t.uniform(s*.05,s*.15),M=t.uniform(G*.4,G*4),U=new Mo(G,M,6,1,!1),V=U.attributes.position,B=new T;for(let A=0;A<V.count;A++)if(B.fromBufferAttribute(V,A),B.y>.1&&B.y<M*.9){const z=Math.atan2(B.z,B.x),L=Math.sqrt(B.x*B.x+B.z*B.z),X=Math.round(z/(Math.PI/3))*(Math.PI/3),te=L*1.1;B.x=Math.cos(X)*te,B.z=Math.sin(X)*te,V.setXYZ(A,B.x,B.y,B.z)}V.needsUpdate=!0,U.computeVertexNormals();const ee=new Ct({color:new f(r[0],r[1],r[2]),transparent:!0,opacity:.85,metalness:0,roughness:.05,clearcoat:1,clearcoatRoughness:0,transmission:.6,ior:1.31,thickness:.8,emissive:new f(r[0],r[1],r[2]),emissiveIntensity:.03,flatShading:!0,side:we}),Z=new ye(U,ee);Z.position.copy(R),Z.lookAt(0,0,0),Z.rotateX(Math.PI/2),Z.rotateZ(t.uniform(0,Math.PI*2));const K=t.uniform(.7,1.3);Z.scale.set(K,K,K),v.add(Z),this.iceCaps.push(Z)}this.featuresGroup.add(v)})}addToScene(e,t){t&&this.featuresGroup.position.copy(t),e.add(this.featuresGroup)}update(){}getObject3D(){return this.featuresGroup}dispose(){this.crystals.forEach(e=>{e.geometry.dispose(),e.material instanceof We&&e.material.dispose()}),this.cracks.forEach(e=>{e.geometry.dispose(),e.material instanceof We&&e.material.dispose()}),this.iceCaps.forEach(e=>{e.geometry.dispose(),e.material instanceof We&&e.material.dispose()}),this.crystals=[],this.cracks=[],this.iceCaps=[],this.featuresGroup.clear()}}function Ut(a,e,t){const o=e.crystals,i=e.cracks,s=e.ice_caps;if(!o&&!i&&!s)return null;const r=t||Math.floor(Math.random()*1e6);return new ei(a,{crystals:o||[],cracks:i||[],iceCaps:s||[],seed:r+9e3})}class oo{snowflakeGroup;planetRadius;materials=[];particleSystems=[];trailPositions=[];trailColors=[];globalWindDirection;rng;startTime;timeSpeed;trailLength=15;particleCount;rotationSpeed;particleOpacity;windSpeedMultiplier;verticalOscillation;gustCycles;gustPhases;gustZones;burstZone;burstCycleDuration;burstDuration;burstStartOffset;constructor(e,t={}){this.snowflakeGroup=new Oe,this.planetRadius=e;const o=t.seed||Math.floor(Math.random()*1e6);this.rng=new k(o),this.particleCount=t.particleCount||10,t.windSpeed;const i=(t.size||1)*(e*.2),s=t.opacity||1;this.globalWindDirection=this.rng.uniform(0,Math.PI*2),this.startTime=this.rng.uniform(0,1e3),this.timeSpeed=this.rng.uniform(2,4),this.rotationSpeed=this.rng.uniform(.2,.8),this.particleOpacity=this.rng.uniform(.05,.25),this.windSpeedMultiplier=this.rng.uniform(1.1,2.5),this.verticalOscillation=this.rng.uniform(.1,.4),this.gustCycles=[],this.gustPhases=[],this.gustZones=[];for(let c=0;c<this.particleCount;c++){this.gustCycles.push(this.rng.uniform(15,30)),this.gustPhases.push(this.rng.uniform(0,1));const h=this.rng.uniform(0,Math.PI*2),d=this.rng.uniform(Math.PI*.3,Math.PI*.6);this.gustZones.push({start:h,end:(h+d)%(Math.PI*2)})}this.burstZone={lat:this.rng.uniform(-Math.PI/3,Math.PI/3),lon:this.rng.uniform(0,Math.PI*2),radius:this.rng.uniform(1.2,2)},this.burstCycleDuration=this.rng.uniform(45,75),this.burstDuration=this.rng.uniform(8,15),this.burstStartOffset=this.rng.uniform(0,this.burstCycleDuration);const r=t.colors||[new f(1,1,1),new f(.9,.9,.9),new f(.7,.7,.7),new f(.5,.5,.5),new f(.3,.3,.3)];this.createSnowflakeSystem(this.particleCount,i,s,r)}createSnowflakeSystem(e,t,o,i){const s=[];for(let h=0;h<e;h++){let d,n,u,g=0;do{const y=(this.rng.uniform(-1,1)+this.rng.uniform(-1,1))*.2,m=this.rng.uniform(-1,1)*this.burstZone.radius;d=Math.max(0,Math.min(Math.PI,this.burstZone.lat+Math.PI/2+y)),n=(this.burstZone.lon+m)%(Math.PI*2);const E=Math.abs(d-(this.burstZone.lat+Math.PI/2)),N=Math.min(Math.abs(n-this.burstZone.lon),Math.PI*2-Math.abs(n-this.burstZone.lon));u=Math.max(E/.3,N/this.burstZone.radius),g++}while(u>1&&g<10);u>1&&(d=this.burstZone.lat+Math.PI/2+this.rng.uniform(-.1,.1),n=this.burstZone.lon+this.rng.uniform(-this.burstZone.radius,this.burstZone.radius));const p=this.planetRadius*this.rng.uniform(1.001,1.005),v=p*Math.sin(d)*Math.cos(n),x=p*Math.cos(d),w=p*Math.sin(d)*Math.sin(n);s.push(v,x,w)}const r=[],c=new f;for(let h=0;h<this.trailLength;h++){const d=Math.pow(1-h/(this.trailLength-1),1.5);c.setRGB(d,d,d),r.push(c.r,c.g,c.b)}for(let h=0;h<e;h++){const d=h*3,n=s[d],u=s[d+1],g=s[d+2],p=new Float32Array(this.trailLength*3);for(let y=0;y<this.trailLength;y++){const m=y*.1;p[y*3]=n+this.rng.uniform(-1,1)*m*this.planetRadius*.01,p[y*3+1]=u+this.rng.uniform(-1,1)*m*this.planetRadius*.01,p[y*3+2]=g+this.rng.uniform(-1,1)*m*this.planetRadius*.01}const v=new Ie;v.setAttribute("position",new se(p,3)),v.setAttribute("color",new se(new Float32Array(r),3));const x=new Tt({vertexColors:!0,transparent:!0,opacity:this.particleOpacity,blending:Pe,depthTest:!0,linewidth:3}),w=new Pt(v,x);this.materials.push(x),this.particleSystems.push(w),this.trailPositions.push(p),this.trailColors.push(new Float32Array(r)),w.rnd=this.rng.uniform(0,1),w.particleIndex=h,this.snowflakeGroup.add(w)}}update(e=.016){const o=(this.startTime+Date.now()/1e3*this.timeSpeed)%1e3,s=(Date.now()/1e3+this.burstStartOffset)%this.burstCycleDuration;let r=0;if(s<this.burstDuration){const c=s/this.burstDuration;c<.2?r=c/.2:c>.8?r=(1-c)/.2:r=1}this.snowflakeGroup.visible=!0,Math.floor(s)%5===0&&s%1<.1&&console.log("❄️ Burst Debug:",{burstTime:Math.round(s),burstIntensity:Math.round(r*100)/100,cycleDuration:Math.round(this.burstCycleDuration),burstDuration:Math.round(this.burstDuration)}),this.particleSystems.forEach((c,h)=>{const d=c.geometry.getAttribute("position"),n=d.array,u=c.rnd,g=c.particleIndex,p=this.calculateTrailPath(o,g,u);for(let O=this.trailLength-1;O>0;O--){const R=O*3,G=(O-1)*3;n[R]=n[G],n[R+1]=n[G+1],n[R+2]=n[G+2]}n[0]=p.x,n[1]=p.y,n[2]=p.z,d.needsUpdate=!0;const v=Date.now()/1e3,x=this.gustCycles[h],w=this.gustPhases[h],y=(v/x+w)%1;let m=0;y<.3?m=y/.3:y<.7?m=1:m=(1-y)/.3;const E=new T(n[0],n[1],n[2]),N=Math.atan2(E.z,E.x),P=N<0?N+Math.PI*2:N,_=this.gustZones[h];let F=!1;_.start<_.end?F=P>=_.start&&P<=_.end:F=P>=_.start||P<=_.end,this.materials[h].opacity=F?this.particleOpacity*m:0})}calculateTrailPath(e,t,o){e+=10*o+t*.1;const i=this.burstZone.lon+(o-.5)*this.burstZone.radius,s=this.burstZone.lat+Math.PI/2+(o-.5)*.2,r=this.windSpeedMultiplier,c=e*r,h=i+Math.cos(this.globalWindDirection)*c,d=s+this.verticalOscillation*Math.sin(e*.5+o),n=.015*Math.sin(e*2+o*10),u=this.planetRadius*(1.005+n),g=u*Math.sin(d)*Math.cos(h),p=u*Math.cos(d),v=u*Math.sin(d)*Math.sin(h);return{x:g,y:p,z:v}}addToScene(e,t){t&&this.snowflakeGroup.position.copy(t),e.add(this.snowflakeGroup)}getObject3D(){return this.snowflakeGroup}dispose(){this.materials.forEach(e=>e.dispose()),this.particleSystems.forEach(e=>e.geometry.dispose()),this.materials=[],this.particleSystems=[],this.trailPositions=[],this.trailColors=[],this.snowflakeGroup.clear()}}function Vt(a,e,t){if(e.type!=="tundra")return null;const o=t||Math.floor(Math.random()*1e6),i=e.snow_intensity||.7,s=e.wind_strength||1,r=Math.floor(i*200+50),c=s*5;return new oo(a,{particleCount:r,windSpeed:c,size:1.2,opacity:.9,seed:o+15e3})}const ne={PARTICLE_COUNT:{min:60,max:150},PHASE_INTENSITY:{min:.4,max:.9},TRANSITION_SPEED:{min:1,max:4},COHERENCE_LEVEL:{min:.2,max:.7},TIME_SPEED:{min:.6,max:2.2},PHASE_STATES:{min:3,max:6}};class it{phaseSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
    attribute float size;
    attribute vec3 phaseVector;
    attribute float coherenceFactor;
    attribute float phaseState;
    attribute float transitionPhase;
    
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vPhaseState;
    varying float vCoherence;
    
    uniform float time;
    uniform float phaseIntensity;
    uniform float transitionSpeed;
    uniform float coherenceLevel;
    uniform float phaseStates;
    
    // Función de transición de fase cuántica
    float phaseTransition(float state, float t) {
      float cycle = sin(t * transitionSpeed + state * 6.28 / phaseStates);
      return 0.5 + 0.5 * cycle;
    }
    
    // Obtener posición basada en estado de fase
    vec3 getPhasePosition(vec3 basePos, float state, float t) {
      float transition = phaseTransition(state, t);
      
      // Estado sólido (compacto)
      if (state < 1.0) {
        return basePos * (0.8 + 0.2 * transition);
      }
      // Estado líquido (fluido)
      else if (state < 2.0) {
        vec3 flow = vec3(sin(t + basePos.x), cos(t + basePos.y), sin(t * 0.5 + basePos.z)) * 0.1;
        return basePos + flow * transition;
      }
      // Estado gaseoso (expansivo)
      else if (state < 3.0) {
        return basePos * (1.0 + 0.5 * transition);
      }
      // Estado plasmático (energético)
      else if (state < 4.0) {
        vec3 energy = normalize(phaseVector) * sin(t * 3.0) * 0.3;
        return basePos + energy * transition;
      }
      // Estado cuántico (incierto)
      else if (state < 5.0) {
        vec3 uncertainty = phaseVector * sin(t * 5.0 + state) * 0.4;
        return basePos + uncertainty * transition;
      }
      // Estado de antimateria (invertido)
      else {
        return -basePos * (0.5 + 0.5 * transition);
      }
    }
    
    void main() {
      vSize = size;
      vPhaseState = phaseState;
      vCoherence = coherenceFactor;
      
      // Calcular posición basada en estado de fase actual
      vec3 pos = getPhasePosition(position, phaseState, time + transitionPhase);
      
      // Coherencia cuántica - qué tan "real" es la partícula
      float coherence = coherenceFactor * coherenceLevel;
      float phaseTransitionValue = phaseTransition(phaseState, time + transitionPhase);
      
      // Color basado en estado de fase
      if (phaseState < 1.0) {
        vColor = vec3(0.8, 0.8, 1.0); // Azul sólido
      } else if (phaseState < 2.0) {
        vColor = vec3(0.3, 0.7, 1.0); // Azul líquido
      } else if (phaseState < 3.0) {
        vColor = vec3(0.9, 0.9, 0.6); // Amarillo gaseoso
      } else if (phaseState < 4.0) {
        vColor = vec3(1.0, 0.5, 0.2); // Naranja plasmático
      } else if (phaseState < 5.0) {
        vColor = vec3(0.7, 0.3, 1.0); // Púrpura cuántico
      } else {
        vColor = vec3(1.0, 0.2, 0.8); // Magenta antimateria
      }
      
      // Modular color con transición de fase
      vColor *= (0.7 + 0.3 * phaseTransitionValue);
      
      // Alpha basado en coherencia y fase
      vAlpha = coherence * phaseIntensity * phaseTransitionValue;
      
      // Efecto de materialización/desmaterialización
      float materialization = abs(sin(time * 2.0 + phaseState)) * 0.5 + 0.5;
      vAlpha *= materialization;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = size * (300.0 / -mvPosition.z) * (0.5 + coherence);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;static fragmentShader=`
    varying vec3 vColor;
    varying float vAlpha;
    varying float vSize;
    varying float vPhaseState;
    varying float vCoherence;
    
    uniform float time;
    
    // Función de patrón de interferencia cuántica
    float quantumInterference(vec2 uv, float phase) {
      float dist = length(uv);
      float wave = sin(dist * 15.0 + phase * 10.0 + time * 3.0);
      return 0.5 + 0.5 * wave;
    }
    
    void main() {
      vec2 uv = gl_PointCoord - 0.5;
      float dist = length(uv);
      
      // Forma base de la partícula
      float particle = 1.0 - smoothstep(0.0, 0.5, dist);
      
      // Patrones específicos por estado de fase
      if (vPhaseState < 1.0) {
        // Sólido - forma definida
        particle = 1.0 - smoothstep(0.0, 0.3, dist);
      } else if (vPhaseState < 2.0) {
        // Líquido - bordes suaves
        particle = 1.0 - smoothstep(0.0, 0.4, dist);
        particle *= (0.8 + 0.2 * sin(time * 2.0 + dist * 10.0));
      } else if (vPhaseState < 3.0) {
        // Gaseoso - muy difuso
        particle = 1.0 - smoothstep(0.0, 0.5, dist);
        particle *= 0.6;
      } else if (vPhaseState < 4.0) {
        // Plasmático - energético
        float energy = quantumInterference(uv, vPhaseState);
        particle *= energy;
      } else if (vPhaseState < 5.0) {
        // Cuántico - interferencia
        float interference = quantumInterference(uv, vPhaseState);
        particle *= interference;
        
        // Probabilidad cuántica
        float probability = abs(sin(time + vPhaseState));
        if (probability < 0.3) {
          particle *= 0.2; // Baja probabilidad de existencia
        }
      } else {
        // Antimateria - patrón invertido
        particle = smoothstep(0.2, 0.5, dist) - smoothstep(0.5, 0.8, dist);
      }
      
      // Efecto de coherencia cuántica
      float coherenceEffect = vCoherence;
      if (coherenceEffect < 0.3) {
        // Baja coherencia - partícula "fantasma"
        particle *= 0.4;
        
        // Efecto de parpadeo cuántico
        float flicker = step(0.8, fract(sin(time * 10.0 + vPhaseState) * 43758.5453));
        particle *= (0.3 + 0.7 * flicker);
      }
      
      // Modulación temporal para transiciones
      float temporal = sin(time * 4.0 + vPhaseState) * 0.2 + 0.8;
      particle *= temporal;
      
      // Color final con efectos de fase
      vec3 finalColor = vColor;
      
      // Destello durante transiciones de fase críticas
      if (abs(sin(time * 2.0 + vPhaseState)) > 0.9) {
        finalColor += vec3(0.5, 0.5, 0.5); // Destello blanco
      }
      
      float finalAlpha = particle * vAlpha;
      gl_FragColor = vec4(finalColor, finalAlpha);
    }
  `;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6),i=new k(o);this.startTime=o%1e4/1e3,this.params={particleCount:t.particleCount||Math.floor(i.uniform(ne.PARTICLE_COUNT.min,ne.PARTICLE_COUNT.max)),phaseIntensity:t.phaseIntensity||i.uniform(ne.PHASE_INTENSITY.min,ne.PHASE_INTENSITY.max),transitionSpeed:t.transitionSpeed||i.uniform(ne.TRANSITION_SPEED.min,ne.TRANSITION_SPEED.max),coherenceLevel:t.coherenceLevel||i.uniform(ne.COHERENCE_LEVEL.min,ne.COHERENCE_LEVEL.max),timeSpeed:t.timeSpeed||i.uniform(ne.TIME_SPEED.min,ne.TIME_SPEED.max),phaseStates:t.phaseStates||Math.floor(i.uniform(ne.PHASE_STATES.min,ne.PHASE_STATES.max)),seed:o},this.particleCount=this.params.particleCount,this.geometry=new Ie,this.material=this.createMaterial(),this.generatePhaseParticles(e),this.phaseSystem=new lt(this.geometry,this.material)}generatePhaseParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),i=new Float32Array(this.particleCount*3),s=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),c=new Float32Array(this.particleCount),h=this.params.seed||Math.floor(Math.random()*1e6),d=new k(h);for(let n=0;n<this.particleCount;n++){const u=e*d.uniform(1.1,1.9),g=d.spherePosition(u);t[n*3]=g.x,t[n*3+1]=g.y,t[n*3+2]=g.z,o[n]=d.uniform(.8,2);const p=d.spherePosition(1);i[n*3]=p.x,i[n*3+1]=p.y,i[n*3+2]=p.z,s[n]=d.uniform(.1,1),r[n]=d.uniform(0,this.params.phaseStates),c[n]=d.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new se(t,3)),this.geometry.setAttribute("size",new se(o,1)),this.geometry.setAttribute("phaseVector",new se(i,3)),this.geometry.setAttribute("coherenceFactor",new se(s,1)),this.geometry.setAttribute("phaseState",new se(r,1)),this.geometry.setAttribute("transitionPhase",new se(c,1))}createMaterial(){return new ue({vertexShader:it.vertexShader,fragmentShader:it.fragmentShader,uniforms:{time:{value:0},phaseIntensity:{value:this.params.phaseIntensity},transitionSpeed:{value:this.params.transitionSpeed},coherenceLevel:{value:this.params.coherenceLevel},phaseStates:{value:this.params.phaseStates}},transparent:!0,blending:Ze,depthWrite:!1})}addToScene(e,t){t&&this.phaseSystem.position.copy(t),e.add(this.phaseSystem)}update(e){const o=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=o,this.phaseSystem.rotation.x+=e*.12*Math.cos(o*.3),this.phaseSystem.rotation.y+=e*.08*Math.sin(o*.5),this.phaseSystem.rotation.z+=e*.06*Math.cos(o*.7)}getObject3D(){return this.phaseSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function ti(a,e,t){const o=t||Math.floor(Math.random()*1e6),i=new k(o+9e3),s={particleCount:Math.floor(i.uniform(ne.PARTICLE_COUNT.min,ne.PARTICLE_COUNT.max)),phaseIntensity:i.uniform(ne.PHASE_INTENSITY.min,ne.PHASE_INTENSITY.max),transitionSpeed:i.uniform(ne.TRANSITION_SPEED.min,ne.TRANSITION_SPEED.max),coherenceLevel:i.uniform(ne.COHERENCE_LEVEL.min,ne.COHERENCE_LEVEL.max),timeSpeed:i.uniform(ne.TIME_SPEED.min,ne.TIME_SPEED.max),phaseStates:Math.floor(i.uniform(ne.PHASE_STATES.min,ne.PHASE_STATES.max)),seed:o};return new it(a,s)}const Qe=new T;function _e(a,e,t,o,i,s){const r=2*Math.PI*i/4,c=Math.max(s-2*i,0),h=Math.PI/4;Qe.copy(e),Qe[o]=0,Qe.normalize();const d=.5*r/(r+c),n=1-Qe.angleTo(a)/h;return Math.sign(Qe[t])===1?n*d:c/(r+c)+d+d*(1-n)}class At extends Jt{constructor(e=1,t=1,o=1,i=2,s=.1){const r=i*2+1;if(s=Math.min(e/2,t/2,o/2,s),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:o,segments:i,radius:s},r===1)return;const c=this.toNonIndexed();this.index=null,this.attributes.position=c.attributes.position,this.attributes.normal=c.attributes.normal,this.attributes.uv=c.attributes.uv;const h=new T,d=new T,n=new T(e,t,o).divideScalar(2).subScalar(s),u=this.attributes.position.array,g=this.attributes.normal.array,p=this.attributes.uv.array,v=u.length/6,x=new T,w=.5/r;for(let y=0,m=0;y<u.length;y+=3,m+=2)switch(h.fromArray(u,y),d.copy(h),d.x-=Math.sign(d.x)*w,d.y-=Math.sign(d.y)*w,d.z-=Math.sign(d.z)*w,d.normalize(),u[y+0]=n.x*Math.sign(h.x)+d.x*s,u[y+1]=n.y*Math.sign(h.y)+d.y*s,u[y+2]=n.z*Math.sign(h.z)+d.z*s,g[y+0]=d.x,g[y+1]=d.y,g[y+2]=d.z,Math.floor(y/v)){case 0:x.set(1,0,0),p[m+0]=_e(x,d,"z","y",s,o),p[m+1]=1-_e(x,d,"y","z",s,t);break;case 1:x.set(-1,0,0),p[m+0]=1-_e(x,d,"z","y",s,o),p[m+1]=1-_e(x,d,"y","z",s,t);break;case 2:x.set(0,1,0),p[m+0]=1-_e(x,d,"x","z",s,e),p[m+1]=_e(x,d,"z","x",s,o);break;case 3:x.set(0,-1,0),p[m+0]=1-_e(x,d,"x","z",s,e),p[m+1]=1-_e(x,d,"z","x",s,o);break;case 4:x.set(0,0,1),p[m+0]=1-_e(x,d,"x","y",s,e),p[m+1]=1-_e(x,d,"y","x",s,t);break;case 5:x.set(0,0,-1),p[m+0]=_e(x,d,"x","y",s,e),p[m+1]=1-_e(x,d,"y","x",s,t);break}}static fromJSON(e){return new At(e.width,e.height,e.depth,e.segments,e.radius)}}const j={OPACITY:{min:.8,max:.95},SIZE:{min:1,max:1},PULSE_INTERVAL:{min:3,max:6},FADE_IN_DURATION:{min:1.5,max:3},FADE_OUT_DURATION:{min:2,max:4},VISIBLE_DURATION:{min:3,max:6},CORNER_RADIUS:{min:.3,max:.5},EMISSIVE_INTENSITY:{min:.08,max:.15}};class io{cubeGroup;cube;material;geometry;params;planetRadius;startTime;nextPulseTime;currentState;stateStartTime;rng;constructor(e,t={}){this.planetRadius=e;const o=t.seed||Math.floor(Math.random()*1e6);this.rng=new k(o),this.startTime=Date.now()/1e3,this.currentState="hidden",this.stateStartTime=this.startTime,this.params={color:t.color||new f(16739125),opacity:t.opacity||this.rng.uniform(j.OPACITY.min,j.OPACITY.max),size:t.size||this.rng.uniform(j.SIZE.min,j.SIZE.max),seed:o,pulseInterval:t.pulseInterval||[this.rng.uniform(j.PULSE_INTERVAL.min,j.PULSE_INTERVAL.max),this.rng.uniform(j.PULSE_INTERVAL.min,j.PULSE_INTERVAL.max)],fadeInDuration:t.fadeInDuration||this.rng.uniform(j.FADE_IN_DURATION.min,j.FADE_IN_DURATION.max),fadeOutDuration:t.fadeOutDuration||this.rng.uniform(j.FADE_OUT_DURATION.min,j.FADE_OUT_DURATION.max),visibleDuration:t.visibleDuration||this.rng.uniform(j.VISIBLE_DURATION.min,j.VISIBLE_DURATION.max),cornerRadius:t.cornerRadius||this.rng.uniform(j.CORNER_RADIUS.min,j.CORNER_RADIUS.max),emissiveIntensity:t.emissiveIntensity||this.rng.uniform(j.EMISSIVE_INTENSITY.min,j.EMISSIVE_INTENSITY.max)},this.nextPulseTime=this.startTime+this.rng.uniform(this.params.pulseInterval[0],this.params.pulseInterval[1]),this.cubeGroup=new Oe;const i=e*2.35,s=i*this.params.cornerRadius*.2;this.geometry=new At(i,i,i,8,s),this.geometry.computeVertexNormals(),this.geometry.normalizeNormals(),this.params.color instanceof f?this.params.color:new f(this.params.color),this.material=new Ct({color:new f(1,1,1),transparent:!0,opacity:0,metalness:0,roughness:0,ior:1.52,thickness:.5,transmission:.98,clearcoat:1,clearcoatRoughness:0,emissive:new f(0,0,0),emissiveIntensity:0,side:Co,depthWrite:!0,depthTest:!0,blending:Pe,flatShading:!1,vertexColors:!1,fog:!0}),this.cube=new ye(this.geometry,this.material),this.cubeGroup.add(this.cube),this.cubeGroup.visible=!0,console.log(`🔲 PulsatingCube: Initial state: hidden, next pulse in ${(this.nextPulseTime-this.startTime).toFixed(1)}s`)}addToScene(e,t){t&&this.cubeGroup.position.copy(t),e.add(this.cubeGroup)}update(e){const t=Date.now()/1e3,o=t-this.stateStartTime;this.cube.rotation.x+=e*.1,this.cube.rotation.y+=e*.15,this.cube.rotation.z+=e*.05;const i=this.nextPulseTime-t;switch(i>0&&i<1&&console.log(`🔲 PulsatingCube: Next pulse in ${i.toFixed(1)}s`),this.currentState){case"hidden":this.material.opacity=0,t>=this.nextPulseTime&&(console.log("🔲 PulsatingCube: Starting fade in!"),this.currentState="fading_in",this.stateStartTime=t);break;case"fading_in":const s=Math.min(o/this.params.fadeInDuration,1),r=this.smoothstep(0,1,s)*this.params.opacity;this.material.opacity=r,s>=1&&(console.log("🔲 PulsatingCube: Now fully visible!"),this.currentState="visible",this.stateStartTime=t);break;case"visible":this.material.opacity=this.params.opacity,o>=this.params.visibleDuration&&(this.currentState="fading_out",this.stateStartTime=t);break;case"fading_out":const c=Math.min(o/this.params.fadeOutDuration,1),h=(1-this.smoothstep(0,1,c))*this.params.opacity;if(this.material.opacity=h,c>=1){this.currentState="hidden",this.stateStartTime=t;const d=this.rng.uniform(this.params.pulseInterval[0],this.params.pulseInterval[1]);this.nextPulseTime=t+d}break}}smoothstep(e,t,o){const i=Math.max(0,Math.min(1,(o-e)/(t-e)));return i*i*(3-2*i)}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof f?e.color:new f(e.color);this.material.color=t}e.opacity!==void 0&&(this.material.opacity=e.opacity)}getObject3D(){return this.cubeGroup}dispose(){this.geometry.dispose(),this.material.dispose()}}function oi(a,e,t,o){const i=t||Math.floor(Math.random()*1e6),s=new k(i+4e3),r={color:o||new f(16739125),opacity:s.uniform(j.OPACITY.min,j.OPACITY.max),size:s.uniform(j.SIZE.min,j.SIZE.max),seed:i,pulseInterval:[s.uniform(j.PULSE_INTERVAL.min,j.PULSE_INTERVAL.max),s.uniform(j.PULSE_INTERVAL.min,j.PULSE_INTERVAL.max)],fadeInDuration:s.uniform(j.FADE_IN_DURATION.min,j.FADE_IN_DURATION.max),fadeOutDuration:s.uniform(j.FADE_OUT_DURATION.min,j.FADE_OUT_DURATION.max),visibleDuration:s.uniform(j.VISIBLE_DURATION.min,j.VISIBLE_DURATION.max),cornerRadius:s.uniform(j.CORNER_RADIUS.min,j.CORNER_RADIUS.max),emissiveIntensity:s.uniform(j.EMISSIVE_INTENSITY.min,j.EMISSIVE_INTENSITY.max)};return new io(a,r)}class st{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;constructor(e,t=new f(16753920)){this.baseMesh=e;const o=e.geometry;this.planetRadius=o.parameters.radius||1;const i=t instanceof f?t:new f(t);this.baseMaterial=new ue({vertexShader:st.baseVertexShader,fragmentShader:st.baseFragmentShader,uniforms:{baseColor:{value:i},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:we}),this.baseMesh.material=this.baseMaterial}addEffectLayer(e,t,o=1.001,i){const s=new ct(this.planetRadius*o,256,256),r=new ye(s,t);return r.position.copy(this.baseMesh.position),r.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:r,material:t,layerObject:i}),this.scene&&this.scene.add(r),r}createCloudBandsLayerMaterial(e){const t=`
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
    `;return new ue({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new f(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new T(1,1,1).normalize()},opacity:{value:e.opacity||.4}},transparent:!0,blending:Pe,side:we,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,i=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((s,r)=>{r<5&&(i[r*2]=s.x,i[r*2+1]=s.y)}),new ue({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new f(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:i},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new T(1,1,1).normalize()}},transparent:!0,blending:Pe,side:we,depthWrite:!1})}createMetallicSurfaceLayerMaterial(e){const t=`
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
    `;return new ue({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},metalColor:{value:e.color||new f(8421504)},metalness:{value:e.metalness||.8},roughness:{value:e.roughness||.4},fragmentationIntensity:{value:e.fragmentationIntensity||.5},opacity:{value:e.opacity||.8},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3},crystalScale:{value:e.crystalScale||80}},transparent:!0,blending:Pe,side:we,depthWrite:!1})}createIcyTerrainLayerMaterial(e){const t=`
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
    `;return new ue({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},iceColor:{value:e.color||new f(11591910)},iceReflectivity:{value:e.iceReflectivity||.8},frostDensity:{value:e.frostDensity||.5},crackIntensity:{value:e.crackIntensity||.4},opacity:{value:e.opacity||.7},crystalScale:{value:e.crystalScale||25},crystalDensity:{value:e.crystalDensity||.6},crystalSharpness:{value:e.crystalSharpness||150},frostPattern:{value:e.frostPattern||12},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:we,depthWrite:!1})}addToScene(e){this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&e.add(t.mesh)}),this.effectLayers.length}update(e,t){this.effectLayers.forEach(o=>{if(o.material.uniforms.time&&(o.material.uniforms.time.value+=e),t!==void 0&&o.material.uniforms.rotationAngle&&(o.material.uniforms.rotationAngle.value=t),o.layerObject&&o.layerObject.update)try{o.layerObject.update(e,t)}catch(i){console.error(`Error updating layer ${o.name}:`,i)}o.mesh&&o.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof f?e:new f(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}createGenericLayerMaterial(e,t,o,i=!0,s=Pe){return o.lightDirection||(o.lightDirection={value:new T(1,1,1).normalize()}),o.lightPosition||(o.lightPosition={value:new T(0,0,0)}),new ue({vertexShader:e,fragmentShader:t,uniforms:o,transparent:i,blending:s,side:we,depthWrite:!1})}convertEffectToLayer(e,t,o=1.001){if(t instanceof ue){const i=t.clone();return i.transparent=!0,i.depthWrite=!1,i.uniforms.lightDirection||(i.uniforms.lightDirection={value:new T(1,1,1).normalize()}),this.addEffectLayer(e,i,o)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}getLayerMeshes(){const e={};return this.effectLayers.forEach(t=>{t.name&&t.mesh&&(e[t.name]=t.mesh)}),e}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const ae={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4}};class ii{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new k(o),s=t.numBands||Math.floor(i.uniform(ae.NUM_BANDS.min,ae.NUM_BANDS.max));this.params={numBands:s,bandPositions:t.bandPositions||this.generateDefaultBandPositions(s,o),bandWidths:t.bandWidths||this.generateDefaultBandWidths(s,o),rotationAngle:t.rotationAngle||i.uniform(ae.ROTATION_ANGLE.min,ae.ROTATION_ANGLE.max),baseColor:t.baseColor||new f(16753920),bandColor:t.bandColor||new f(16747520),animationSpeed:t.animationSpeed||i.uniform(ae.ANIMATION_SPEED.min,ae.ANIMATION_SPEED.max),turbulence:t.turbulence||i.uniform(ae.TURBULENCE.min,ae.TURBULENCE.max),noiseScale:t.noiseScale||i.uniform(ae.NOISE_SCALE.min,ae.NOISE_SCALE.max),opacity:t.opacity||.4,seed:o},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const o=new Array(20).fill(0),i=new k(t+12345);for(let s=0;s<e&&s<20;s++)o[s]=i.uniform(ae.BAND_POSITIONS.min,ae.BAND_POSITIONS.max);return o}generateDefaultBandWidths(e,t){const o=new Array(20).fill(0),i=new k(t+67890);for(let s=0;s<e&&s<20;s++)o[s]=i.uniform(ae.BAND_WIDTHS.min,ae.BAND_WIDTHS.max);return o}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity)}dispose(){}}function Yt(a,e,t){const o=e.cloud_bands||{},i=t||Math.floor(Math.random()*1e6),s=new k(i+4e3),r={numBands:o.num_bands||Math.floor(s.uniform(ae.NUM_BANDS.min,ae.NUM_BANDS.max)),bandPositions:o.positions||void 0,bandWidths:o.widths||void 0,rotationAngle:o.rotation||s.uniform(ae.ROTATION_ANGLE.min,ae.ROTATION_ANGLE.max),baseColor:e.base_color?new f().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new f(16753920),bandColor:new f(16777215),animationSpeed:s.uniform(ae.ANIMATION_SPEED.min,ae.ANIMATION_SPEED.max),turbulence:e.turbulence||s.uniform(ae.TURBULENCE.min,ae.TURBULENCE.max),noiseScale:s.uniform(ae.NOISE_SCALE.min,ae.NOISE_SCALE.max),opacity:.4,seed:i};return new ii(a,r)}const le={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.2,max:.6}};class si{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new k(o);this.params={stormCenters:t.stormCenters||this.generateStormCenters(o),stormColor:t.stormColor||new f(9109504),stormIntensity:t.stormIntensity||i.uniform(le.STORM_INTENSITY.min,le.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||i.uniform(le.SPIRAL_SPEED.min,le.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||i.uniform(le.ANIMATION_SPEED.min,le.ANIMATION_SPEED.max),opacity:t.opacity||i.uniform(le.OPACITY.min,le.OPACITY.max),seed:o},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new k(e+5e3),o=Math.floor(t.uniform(le.STORM_COUNT.min,le.STORM_COUNT.max)),i=[];for(let s=0;s<o;s++)i.push({x:t.uniform(le.STORM_CENTERS.min,le.STORM_CENTERS.max),y:t.uniform(le.STORM_CENTERS.min,le.STORM_CENTERS.max)});return i}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function Gt(a,e,t){const o=e.storms||{},i=t||Math.floor(Math.random()*1e6),s=new k(i+5e3),r={stormCenters:o.centers||void 0,stormColor:new f(9109504),stormIntensity:o.intensity||e.storm_intensity||s.uniform(le.STORM_INTENSITY.min,le.STORM_INTENSITY.max),spiralSpeed:o.spiral_speed||s.uniform(le.SPIRAL_SPEED.min,le.SPIRAL_SPEED.max),animationSpeed:s.uniform(le.ANIMATION_SPEED.min,le.ANIMATION_SPEED.max),opacity:s.uniform(le.OPACITY.min,le.OPACITY.max),seed:i};return new si(a,r)}const pe={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class gt{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new k(o),s=t.color instanceof f?t.color:t.color?new f(t.color):new f(9127187);this.params={color:s,roughness:t.roughness||i.uniform(pe.ROUGHNESS.min,pe.ROUGHNESS.max),rockDensity:t.rockDensity||i.uniform(pe.ROCK_DENSITY.min,pe.ROCK_DENSITY.max)*10,craterCount:t.craterCount||i.uniform(pe.CRATER_COUNT.min,pe.CRATER_COUNT.max),opacity:t.opacity||i.uniform(pe.OPACITY.min,pe.OPACITY.max),seed:o},this.material=new ue({vertexShader:gt.vertexShader,fragmentShader:gt.fragmentShader,uniforms:{time:{value:0},rockColor:{value:s},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new T(1,1,1).normalize()}},transparent:!0,side:we,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function ai(a,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,s=t||Math.floor(Math.random()*1e6),r=new k(s+8e3);return new gt(a,{color:i?new f(i):new f(9127187),roughness:o.roughness||r.uniform(pe.ROUGHNESS.min,pe.ROUGHNESS.max),rockDensity:o.rock_density||r.uniform(pe.ROCK_DENSITY.min,pe.ROCK_DENSITY.max)*10,craterCount:o.crater_count||r.uniform(pe.CRATER_COUNT.min,pe.CRATER_COUNT.max),opacity:r.uniform(pe.OPACITY.min,pe.OPACITY.max),seed:s})}const $={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9},CRYSTAL_SCALE:{min:15,max:35},CRYSTAL_DENSITY:{min:.4,max:.8},CRYSTAL_SHARPNESS:{min:100,max:250},FROST_PATTERN:{min:8,max:16}};class ni{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new k(o),s=t.color instanceof f?t.color:t.color?new f(t.color):new f(11591910);this.params={color:s,iceReflectivity:t.iceReflectivity||i.uniform($.ICE_REFLECTIVITY.min,$.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||i.uniform($.FROST_DENSITY.min,$.FROST_DENSITY.max),crackIntensity:t.crackIntensity||i.uniform($.CRACK_INTENSITY.min,$.CRACK_INTENSITY.max),opacity:t.opacity||i.uniform($.OPACITY.min,$.OPACITY.max),crystalScale:t.crystalScale||i.uniform($.CRYSTAL_SCALE.min,$.CRYSTAL_SCALE.max),crystalDensity:t.crystalDensity||i.uniform($.CRYSTAL_DENSITY.min,$.CRYSTAL_DENSITY.max),crystalSharpness:t.crystalSharpness||i.uniform($.CRYSTAL_SHARPNESS.min,$.CRYSTAL_SHARPNESS.max),frostPattern:t.frostPattern||i.uniform($.FROST_PATTERN.min,$.FROST_PATTERN.max),seed:o},this.material=this.layerSystem.createIcyTerrainLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function ri(a,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,s=t||Math.floor(Math.random()*1e6),r=new k(s+6e3);return new ni(a,{color:i?new f(i):new f(11591910),iceReflectivity:o.ice_reflectivity||r.uniform($.ICE_REFLECTIVITY.min,$.ICE_REFLECTIVITY.max),frostDensity:o.frost_density||r.uniform($.FROST_DENSITY.min,$.FROST_DENSITY.max),crackIntensity:o.crack_intensity||r.uniform($.CRACK_INTENSITY.min,$.CRACK_INTENSITY.max),opacity:r.uniform($.OPACITY.min,$.OPACITY.max),crystalScale:o.crystal_scale||r.uniform($.CRYSTAL_SCALE.min,$.CRYSTAL_SCALE.max),crystalDensity:o.crystal_density||r.uniform($.CRYSTAL_DENSITY.min,$.CRYSTAL_DENSITY.max),crystalSharpness:o.crystal_sharpness||r.uniform($.CRYSTAL_SHARPNESS.min,$.CRYSTAL_SHARPNESS.max),frostPattern:o.frost_pattern||r.uniform($.FROST_PATTERN.min,$.FROST_PATTERN.max),seed:s})}const de={METALNESS:{min:.5,max:5},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.2,max:.9},CRYSTAL_SCALE:{min:17,max:230}};class li{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new k(o),s=t.color instanceof f?t.color:t.color?new f(t.color):new f(8421504);this.params={color:s,metalness:t.metalness||i.uniform(de.METALNESS.min,de.METALNESS.max),roughness:t.roughness||i.uniform(de.ROUGHNESS.min,de.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||i.uniform(de.FRAGMENTATION_INTENSITY.min,de.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||i.uniform(de.OPACITY.min,de.OPACITY.max),seed:o,noiseScale:t.noiseScale||8,noiseIntensity:t.noiseIntensity||.3,crystalScale:t.crystalScale||i.uniform(de.CRYSTAL_SCALE.min,de.CRYSTAL_SCALE.max)},this.material=this.layerSystem.createMetallicSurfaceLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function ci(a,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,s=t||Math.floor(Math.random()*1e6),r=new k(s+7e3),c=r.uniform(.8,1.2);return new li(a,{color:i?new f(i):new f(8421504),metalness:o.metalness||r.uniform(de.METALNESS.min,de.METALNESS.max),roughness:o.roughness||r.uniform(de.ROUGHNESS.min,de.ROUGHNESS.max),fragmentationIntensity:o.fragmentation||r.uniform(de.FRAGMENTATION_INTENSITY.min,de.FRAGMENTATION_INTENSITY.max),opacity:r.uniform(de.OPACITY.min,de.OPACITY.max),seed:s,noiseScale:4*c,noiseIntensity:.3,crystalScale:r.uniform(de.CRYSTAL_SCALE.min,de.CRYSTAL_SCALE.max)})}class so{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6);this.rng=new k(o),this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||50,speed:t.speed||.5,size:t.size||1,opacity:t.opacity||.3,brightness:t.brightness||1,seed:o},this.particleCount=this.params.particleCount,this.geometry=new Ie,this.createParticles(e),this.createMaterial(),this.particleSystem=new lt(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),i=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount),r=e*1.3;for(let c=0;c<this.particleCount;c++){const h=this.rng.random()*Math.PI*2,d=this.rng.random()*2-1,n=this.rng.random(),u=Math.acos(d),g=r*Math.cbrt(n);t[c*3]=g*Math.sin(u)*Math.cos(h),t[c*3+1]=g*Math.sin(u)*Math.sin(h),t[c*3+2]=g*Math.cos(u),o[c]=this.params.size*(.5+this.rng.random()*.5),i[c]=this.params.speed*(.8+this.rng.random()*.4),s[c]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new se(t,3)),this.geometry.setAttribute("size",new se(o,1)),this.geometry.setAttribute("speed",new se(i,1)),this.geometry.setAttribute("phase",new se(s,1))}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),t=`
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
    `;this.material=new ue({uniforms:{time:{value:0},color:{value:e},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:t,fragmentShader:o,transparent:!0,blending:Ze,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;const t=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*t}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f().setRGB(e.color[0],e.color[1],e.color[2]);this.material.uniforms.color.value=t}e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Bt(a,e,t){const o=e.streaks||e,i={color:o.color||[.95,.95,1],particleCount:o.particleCount||30,speed:o.speed||.3,size:.8,opacity:.2,brightness:.8,seed:t||Math.floor(Math.random()*1e6)};return new so(a,i)}const J={STAR_COUNT:{min:150,max:450},MIN_BRIGHTNESS:{min:.4,max:.7},MAX_BRIGHTNESS:{min:.8,max:1},MIN_SIZE:{min:1.2,max:1.8},MAX_SIZE:{min:3.5,max:5},DISTANCE:{min:300,max:600},TWINKLE_SPEED:{min:.002,max:.008}};class at{starSystem;material;geometry;params;starCount;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6);console.log("🌟 StarFieldEffect - Using seed:",o,"from params:",t.seed);const i=new k(o+1e4);this.params={color:t.color||new f(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(i.uniform(J.STAR_COUNT.min,J.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:i.uniform(J.MIN_BRIGHTNESS.min,J.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:i.uniform(J.MAX_BRIGHTNESS.min,J.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:i.uniform(J.MIN_SIZE.min,J.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:i.uniform(J.MAX_SIZE.min,J.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:i.uniform(J.DISTANCE.min,J.DISTANCE.max),seed:o,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:i.uniform(J.TWINKLE_SPEED.min,J.TWINKLE_SPEED.max)},this.starCount=this.params.starCount,this.geometry=new Ie,this.material=this.createMaterial(),this.generateStars(e),this.starSystem=new lt(this.geometry,this.material)}generateStars(e){const t=new Float32Array(this.starCount*3),o=new Float32Array(this.starCount),i=new Float32Array(this.starCount),s=new Float32Array(this.starCount),r=this.params.seed,c=new k(r+1e4);for(let h=0;h<this.starCount;h++){const d=c.uniform(0,2*Math.PI),n=c.uniform(-1,1),u=Math.acos(n),g=this.params.distance*c.uniform(.8,1.2),p=g*Math.sin(u)*Math.cos(d),v=g*Math.sin(u)*Math.sin(d),x=g*Math.cos(u);t[h*3]=p,t[h*3+1]=v,t[h*3+2]=x,o[h]=c.uniform(this.params.minSize,this.params.maxSize),i[h]=c.uniform(this.params.minBrightness,this.params.maxBrightness),s[h]=c.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new se(t,3)),this.geometry.setAttribute("size",new se(o,1)),this.geometry.setAttribute("brightness",new se(i,1)),this.geometry.setAttribute("twinklePhase",new se(s,1))}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new ue({vertexShader:at.vertexShader,fragmentShader:at.fragmentShader,uniforms:{time:{value:0},starColor:{value:e},twinkleSpeed:{value:this.params.twinkleSpeed}},transparent:!0,blending:Ze,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.starSystem.position.copy(t),e.add(this.starSystem)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.starColor.value=t}e.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=e.twinkleSpeed)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function di(a,e){const t=e!==void 0?e:Math.floor(Math.random()*1e6);console.log("🌟 createStarFieldFromPythonData - planetSeed:",e,"final seed:",t);const o=new k(t+1e4),i={color:new f(16777215),starCount:Math.floor(o.uniform(J.STAR_COUNT.min,J.STAR_COUNT.max)),minBrightness:o.uniform(J.MIN_BRIGHTNESS.min,J.MIN_BRIGHTNESS.max),maxBrightness:o.uniform(J.MAX_BRIGHTNESS.min,J.MAX_BRIGHTNESS.max),minSize:o.uniform(J.MIN_SIZE.min,J.MIN_SIZE.max),maxSize:o.uniform(J.MAX_SIZE.min,J.MAX_SIZE.max),distance:o.uniform(J.DISTANCE.min,J.DISTANCE.max),seed:t,twinkleSpeed:o.uniform(J.TWINKLE_SPEED.min,J.TWINKLE_SPEED.max)};return new at(a,i)}const Le={SIZE:{min:.12,max:.2},ROTATION_SPEED:{min:.05,max:.1},OPACITY:{min:.15,max:.35},TIME_SPEED:{min:.8,max:1.5}},hi=`
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    
    // World position for curved surface calculations
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,mi=`
  uniform float time;
  uniform vec3 planetColor;
  uniform vec3 hexagonColor;
  uniform float darkenFactor;
  uniform float opacity;
  uniform float hexagonRadius;
  uniform float rotationSpeed;
  uniform float pole;
  uniform float visibility;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  
  #define PI 3.14159265359
  
  // Convert UV to polar coordinates
  vec2 toPolar(vec2 uv) {
    vec2 centered = uv - 0.5;
    float r = length(centered);
    float theta = atan(centered.y, centered.x);
    return vec2(r, theta);
  }
  
  // Create hexagon shape
  float hexagon(vec2 p, float radius) {
    const vec3 k = vec3(-0.866025404, 0.5, 0.577350269);
    p = abs(p);
    p -= 2.0 * min(dot(k.xy, p), 0.0) * k.xy;
    p -= vec2(clamp(p.x, -k.z * radius, k.z * radius), radius);
    return length(p) * sign(p.y);
  }
  
  void main() {
    // Convert to polar coordinates centered at pole
    vec2 polar = toPolar(vUv);
    
    // Rotate hexagon slowly
    float rotation = time * rotationSpeed;
    vec2 rotatedUV = vUv - 0.5;
    float cosR = cos(rotation);
    float sinR = sin(rotation);
    rotatedUV = vec2(
      rotatedUV.x * cosR - rotatedUV.y * sinR,
      rotatedUV.x * sinR + rotatedUV.y * cosR
    );
    
    // Create hexagon shape distance field
    float hex = hexagon(rotatedUV, hexagonRadius);
    
    // HOLLOW HEXAGON: Only show the edges/lines
    float lineWidth = 0.03; // Thick lines like Saturn
    float hexagonEdge = abs(hex); // Distance to hexagon edge
    
    // Only render if we're close to the hexagon edge
    if (hexagonEdge > lineWidth) {
      discard; // Not on hexagon edge, don't render
    }
    
    // Only show if we're inside the hexagon area (not outside)
    if (hex > lineWidth) {
      discard; // Outside hexagon completely
    }
    
    // Calculate line intensity based on distance to edge
    float edgeIntensity = 1.0 - smoothstep(0.0, lineWidth, hexagonEdge);
    
    // Calculate hexagon color (darker than planet)
    vec3 finalColor = planetColor * (1.0 - darkenFactor);
    
    // Make lines more prominent
    finalColor *= 0.6; // Darker for contrast
    
    // Apply edge intensity and 25% opacity (75% transparent)
    float finalOpacity = opacity * visibility * edgeIntensity * 0.25;
    
    // Add subtle glow for Saturn-like effect
    finalColor += vec3(0.1) * edgeIntensity;
    
    gl_FragColor = vec4(finalColor, finalOpacity);
  }
`;class St{mesh;material;params;startTime;proceduralParams;constructor(e){const t=e.seed||Math.floor(Math.random()*1e6),o=new k(t);this.startTime=e.startTime||t%1e4/1e3,this.proceduralParams={size:o.uniform(Le.SIZE.min,Le.SIZE.max),rotationSpeed:o.uniform(Le.ROTATION_SPEED.min,Le.ROTATION_SPEED.max),opacity:o.uniform(Le.OPACITY.min,Le.OPACITY.max),timeSpeed:o.uniform(Le.TIME_SPEED.min,Le.TIME_SPEED.max)},this.params=e;const i=new f(e.planetColor),s=i.clone();s.multiplyScalar(1-e.hexagonData.color_darken_factor),this.material=new ue({uniforms:{time:{value:0},planetColor:{value:i},hexagonColor:{value:s},darkenFactor:{value:e.hexagonData.color_darken_factor},opacity:{value:this.proceduralParams.opacity},hexagonRadius:{value:this.proceduralParams.size},rotationSpeed:{value:this.proceduralParams.rotationSpeed},pole:{value:e.hexagonData.pole==="north"?1:-1},visibility:{value:1}},vertexShader:hi,fragmentShader:mi,transparent:!0,depthWrite:!1,side:we,blending:e.hexagonData.nebula_blend?Ze:Pe});const r=this.createCurvedHexagonGeometry(e.hexagonData.pole,e.hexagonData.radius);this.mesh=new ye(r,this.material),this.mesh.scale.set(e.planetRadius,e.planetRadius,e.planetRadius),this.updateVisibility()}updateVisibility(){if(!this.params.hexagonData.enabled){this.material.uniforms.visibility.value=0;return}const t=(this.params.currentTime||0)%this.params.hexagonData.cycle_duration_years/this.params.hexagonData.cycle_duration_years,o=this.params.hexagonData.visible_duration_years/this.params.hexagonData.cycle_duration_years;if(t<o){const i=t/o;i<.1?this.material.uniforms.visibility.value=i/.1:i>.9?this.material.uniforms.visibility.value=(1-i)/.1:this.material.uniforms.visibility.value=1}else this.material.uniforms.visibility.value=0}update(e){const o=(this.startTime+Date.now()/1e3*this.proceduralParams.timeSpeed)%1e3;this.material.uniforms.time.value=o,this.updateVisibility()}addToScene(e){e.add(this.mesh)}removeFromScene(e){e.remove(this.mesh)}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}createCurvedHexagonGeometry(e,t){const o=e==="north"?1:-1,i=64,s=1,r=new qt(s,s,i,i),c=r.attributes.position,h=new T;for(let d=0;d<c.count;d++){h.fromBufferAttribute(c,d);const n=h.x,u=h.y,g=Math.sqrt(n*n+u*u);if(g<=s/2){const v=g*Math.PI*.5,x=o*Math.cos(v)*1.02,w=Math.sin(v)*1.02;if(g>0){const y=n/g,m=u/g;h.x=y*w,h.y=x,h.z=m*w}else h.x=0,h.y=o*1.02,h.z=0}c.setXYZ(d,h.x,h.y,h.z)}return c.needsUpdate=!0,r.computeVertexNormals(),r}setEnabled(e){this.mesh.visible=e}}class Wt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new f(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new Oe,this.generateFragments()}generateFragments(){const e=new He({color:this.params.color instanceof f?this.params.color:new f(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const o=this.generateFragmentGeometry(),i=new ye(o,e);this.positionFragment(i,t),i.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const s=this.params.size*(Math.random()*.5+.75);i.scale.set(s,s,s),i.userData={rotationAxis:new T(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(i),this.fragments.add(i)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],o=[],i=[];i.push(new T(0,0,0));for(let c=0;c<e;c++){const h=c/e*Math.PI*2,d=Math.random()*.5+.5,n=(Math.random()-.5)*.3;i.push(new T(Math.cos(h)*d,Math.sin(h)*d,n))}for(let c=1;c<=e;c++){const d=i[c].clone();d.z+=Math.random()*.4+.2,i.push(d)}for(const c of i)t.push(c.x,c.y,c.z);for(let c=1;c<e;c++)o.push(0,c,c+1);o.push(0,e,1);const s=i.length-e-1;for(let c=0;c<e-1;c++)o.push(s,s+c+2,s+c+1);o.push(s,s+1,s+e);for(let c=0;c<e;c++){const h=c+1,d=(c+1)%e+1,n=h+e,u=d+e;o.push(h,n,d),o.push(d,n,u)}const r=new Ie;return r.setAttribute("position",new Et(t,3)),r.setIndex(o),r.computeVertexNormals(),r}positionFragment(e,t){let o;switch(this.params.distribution){case"edge":o=this.generateEdgePosition(t);break;case"surface":o=this.generateSurfacePosition();break;case"random":default:o=this.generateRandomPosition();break}e.position.copy(o)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,o=this.planetRadius*(.95+Math.random()*.1),i=(Math.random()-.5)*this.planetRadius*.5;return new T(Math.cos(t)*o,i,Math.sin(t)*o)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),o=this.planetRadius*(1+Math.random()*.05);return new T(o*Math.sin(t)*Math.cos(e),o*Math.sin(t)*Math.sin(e),o*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;return new T(e*Math.sin(t)*Math.cos(o),e*Math.sin(t)*Math.sin(o),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,o)=>{const i=t.userData;t.rotateOnAxis(i.rotationAxis,i.rotationSpeed*e*this.params.animationSpeed);const s=Math.sin(Date.now()*.001+o)*.001;t.position.y+=s*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.fragmentMeshes.forEach(o=>{o.material instanceof He&&(o.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof He&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof We&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof We&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function ft(a){const e=a.replace("#",""),t=parseInt(e.substr(0,2),16)/255,o=parseInt(e.substr(2,2),16)/255,i=parseInt(e.substr(4,2),16)/255;return new f(t,o,i)}function _t(a){return a.length>=3?new f(a[0],a[1],a[2]):new f(.5,.5,.5)}function Ye(a){if(a.ocean_color){if(typeof a.ocean_color=="string")return ft(a.ocean_color);if(Array.isArray(a.ocean_color))return _t(a.ocean_color)}if(a.planet_info?.base_color){if(typeof a.planet_info.base_color=="string")return ft(a.planet_info.base_color);if(Array.isArray(a.planet_info.base_color))return _t(a.planet_info.base_color)}if(a.base_color){if(typeof a.base_color=="string")return ft(a.base_color);if(Array.isArray(a.base_color))return _t(a.base_color)}const e=a.planet_info?.type||a.type||"Unknown";return ui(e)}function ui(a){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[a]||"#FFFFFF";return ft(t)}class nt{material;params;oceanLayerMesh;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new f(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new f(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new f(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof f?this.params.landmassColor:new f(this.params.landmassColor),t=this.params.foamColor instanceof f?this.params.foamColor:new f(this.params.foamColor),o=this.params.oceanColor instanceof f?this.params.oceanColor:new f(this.params.oceanColor);return new ue({vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader,uniforms:{time:{value:0},baseColor:{value:o},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:o}}})}apply(e){this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const o=new ye(t,this.material);o.position.copy(e.position),o.rotation.copy(e.rotation),this.oceanLayerMesh=o}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const o=e[t];if(o!==void 0&&this.material.uniforms[t])if(o instanceof f||Array.isArray(o)){const i=o instanceof f?o:new f(o);this.material.uniforms[t].value=i}else this.material.uniforms[t].value=o})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh)):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function fi(a){const e=Ye(a),t=[e.r,e.g,e.b];let o=.3,i=2,s=8,r=.3,c=.2;if(a.seeds){const d=a.seeds.shape_seed,u=(g=>{let p=g;return()=>(p=(p*1664525+1013904223)%4294967296,p/4294967296)})(d);o=.2+u()*.3,i=1.5+u()*1.5,s=6+u()*6,r=.25+u()*.15,c=.15+u()*.1}const h={waveIntensity:o,waveSpeed:i,waveScale:s,landmassThreshold:r,deepOceanThreshold:c,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new f(.9,.9,1),foamIntensity:.4,oceanColor:t};return new nt(h)}class rt{mesh;material;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={radius:t.radius||e*.999,detail:t.detail||128,flowSpeed:t.flowSpeed||.5,waveAmplitude:t.waveAmplitude||.02,opacity:t.opacity||.75,colorDeep:t.colorDeep||new f(4147),colorShallow:t.colorShallow||new f(26333),...t};const o=new ct(this.params.radius,this.params.detail,this.params.detail);this.material=new ue({vertexShader:rt.vertexShader,fragmentShader:rt.fragmentShader,uniforms:{uTime:{value:0},uFlowSpeed:{value:this.params.flowSpeed},uWaveAmplitude:{value:this.params.waveAmplitude},uFresnelPower:{value:1.5},uOpacity:{value:this.params.opacity},uColorDeep:{value:this.params.colorDeep instanceof f?this.params.colorDeep:new f(this.params.colorDeep)},uColorShallow:{value:this.params.colorShallow instanceof f?this.params.colorShallow:new f(this.params.colorShallow)},uNoiseScale:{value:3},uSecondaryWaveScale:{value:6},uPrimaryFlowSpeed:{value:this.params.flowSpeed||.5},uSecondaryFlowSpeed:{value:(this.params.flowSpeed||.5)*1.6},uUvPatternSpeed1:{value:(this.params.flowSpeed||.5)*4},uUvPatternSpeed2:{value:(this.params.flowSpeed||.5)*3}},transparent:!0,depthWrite:!1,depthTest:!0,side:we,blending:Pe}),this.mesh=new ye(o,this.material),this.mesh.renderOrder=-1,console.log("🌊 FluidLayersEffect created with params:",this.params)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh),console.log("🌊 FluidLayers mesh added to scene at position:",this.mesh.position)}update(e,t){this.material.uniforms.uTime.value+=e,t!==void 0&&(this.mesh.rotation.y=t)}updateParams(e){if(this.params={...this.params,...e},e.flowSpeed!==void 0&&(this.material.uniforms.uFlowSpeed.value=e.flowSpeed,this.material.uniforms.uPrimaryFlowSpeed.value=e.flowSpeed,this.material.uniforms.uSecondaryFlowSpeed.value=e.flowSpeed*1.6,this.material.uniforms.uUvPatternSpeed1.value=e.flowSpeed*4,this.material.uniforms.uUvPatternSpeed2.value=e.flowSpeed*3),e.waveAmplitude!==void 0&&(this.material.uniforms.uWaveAmplitude.value=e.waveAmplitude),e.opacity!==void 0&&(this.material.uniforms.uOpacity.value=e.opacity),e.colorDeep){const t=e.colorDeep instanceof f?e.colorDeep:new f(e.colorDeep);this.material.uniforms.uColorDeep.value=t}if(e.colorShallow){const t=e.colorShallow instanceof f?e.colorShallow:new f(e.colorShallow);this.material.uniforms.uColorShallow.value=t}}getObject3D(){return this.mesh}dispose(){this.mesh.geometry&&this.mesh.geometry.dispose(),this.material&&this.material.dispose()}}function Ht(a,e){let t=.5,o=.025,i=.75;if(e.seeds){const r=e.seeds.shape_seed||e.seeds.planet_seed,h=(d=>{let n=d;return()=>(n=(n*1664525+1013904223)%4294967296,n/4294967296)})(r);t=.05+h()*.3,o=.02+h()*.02,i=.25+h()*.6}const s={radius:a*.999,detail:128,flowSpeed:t,waveAmplitude:o*.4,opacity:i,colorDeep:new f(4147),colorShallow:new f(26333)};return new rt(a,s)}class ao{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new Oe,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,o=e,i=t*Math.cos(o),s=t*Math.sin(o),r=s*.8,c=new Ie,h=new Float32Array([0,0,0,i,r,s]);c.setAttribute("position",new se(h,3));const d=new Tt({color:16776960,linewidth:5,transparent:!1});this.sunLine=new Pt(c,d),this.debugGroup.add(this.sunLine);const n=e+Math.PI,u=t*.7,g=u*Math.cos(n),p=0,v=u*Math.sin(n),x=new ct(this.planetRadius*.15,16,16),w=new Qt({color:16776960,transparent:!1,opacity:1}),y=new ye(x,w);y.position.set(g,p,v),this.debugGroup.add(y),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=new Ie,i=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);o.setAttribute("position",new se(i,3));const s=new Tt({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new Pt(o,s),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,o=this.params.rotationPeriod||86400,i=this.params.initialAngleRotation||0,s=e-t,r=2*Math.PI/o;return(i+s*r)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),o=this.planetRadius*20,i=this.sunLine.geometry,s=i.attributes.position.array;s[3]=o*Math.cos(t),s[4]=0,s[5]=o*Math.sin(t),i.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=this.rotationLine.geometry,i=o.attributes.position.array;i[0]=-t*Math.cos(e),i[1]=0,i[2]=-t*Math.sin(e),i[3]=t*Math.cos(e),i[4]=0,i[5]=t*Math.sin(e),o.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function pi(a,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:a.debug?.cosmic_origin_time||a.timing?.cosmic_origin_time||a.cosmicOriginTime,rotationPeriod:a.planet_info?.rotation_period||a.rotation_period_seconds||86400,initialAngleRotation:a.debug?.initial_angle_rotation||a.timing?.initial_angle_rotation||a.initialAngleRotation||0,planetRadius:e,orbitalAngle:a.timing?.orbital_angle||0,sunAngle:a.sun_angle||a.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new ao(e,t)}const gi=!1;class Ge{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return Ge.instance||(Ge.instance=new Ge),Ge.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new ot(t,e),fromPythonData:(e,t)=>kt(t,e.atmosphere||{})}),this.registerEffect("atmosphere_clouds",{create:(e,t)=>new $e(t,e),fromPythonData:(e,t)=>Je(t,e.surface_elements||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new so(t,e),fromPythonData:(e,t)=>Bt(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new tt(t,e),fromPythonData:(e,t)=>Jo(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new to(t,e),fromPythonData:(e,t)=>Ko(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new Wt(t,e),fromPythonData:(e,t)=>new Wt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("land_masses",{create:(e,t)=>new Nt(t,e),fromPythonData:(e,t)=>bt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("ocean_waves",{create:(e,t)=>new nt(e),fromPythonData:(e,t)=>fi(e)}),this.registerEffect("fluid_layers",{create:(e,t)=>new rt(t,e),fromPythonData:(e,t)=>Ht(t,e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("star_field",{create:(e,t)=>new at(t,e),fromPythonData:(e,t)=>di(t,e.seeds?.planet_seed||e.planet_seed)}),this.registerEffect("tundra_snowflakes",{create:(e,t)=>new oo(t,e),fromPythonData:(e,t)=>Vt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("anomaly_phase_matter",{create:(e,t)=>new it(t,e),fromPythonData:(e,t)=>ti(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("pulsating_cube",{create:(e,t)=>new io(t,e),fromPythonData:(e,t)=>{const o=Ye(e);return oi(t,e.surface_elements||{},e.seeds?.planet_seed,o)}}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new ao(t,e),fromPythonData:(e,t)=>pi(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,o,i,s=0){const r=this.creators.get(e);if(!r)return console.warn(`Effect type '${e}' not registered`),null;try{const c=r.create(t,o,i);if(!c)return null;const h={id:`effect_${this.nextId++}`,type:e,effect:c,priority:s,enabled:!0};return this.effects.set(h.id,h),h}catch(c){return console.error(`Error creating effect '${e}':`,c),null}}createEffectFromPythonData(e,t,o,i,s=0){const r=this.creators.get(e);if(!r||!r.fromPythonData)return this.createEffect(e,t,o,i,s);try{const c=r.fromPythonData(t,o,i);if(!c)return null;const h={id:`effect_${this.nextId++}`,type:e,effect:c,priority:s,enabled:!0};return this.effects.set(h.id,h),h}catch(c){return console.error(`Error creating effect '${e}' from Python data:`,c),null}}createEffectsFromList(e,t,o){const i=[],s=e.sort((r,c)=>(r.priority||0)-(c.priority||0));for(const r of s){const c=this.createEffect(r.type,r.params,t,o,r.priority);c&&(c.enabled=r.enabled!==!1,i.push(c))}return i}createEffectsFromPythonPlanetData(e,t,o,i,s){const r=[];try{const c=Ye(e);if(s?this.layerSystem=s:this.layerSystem=new st(o,c),e.surface_elements){const n=e.surface_elements;if(n.effects_3d&&Array.isArray(n.effects_3d))for(const u of n.effects_3d){if(u.type==="atmospheric_streaks"){const p=Bt(t,u.params,e.seeds?.shape_seed+3e3),v={id:`effect_${this.nextId++}`,type:"atmospheric_streaks",effect:p,priority:u.priority||0,enabled:!0,name:"Atmospheric Streaks"};this.effects.set(v.id,v),r.push(v),p.addToScene(i,o.position);continue}const g=this.createEffect(u.type,u.params,t,o,u.priority||0);g?(g.name=u.type.replace(/_/g," ").replace(/\b\w/g,p=>p.toUpperCase()),r.push(g),g.effect.apply&&g.effect.apply(o),g.effect.addToScene&&g.effect.addToScene(i,o.position)):console.error("❌ FALLO AL CREAR EFECTO:",u.type)}switch(console.log(`🔍 Planet surface type: "${n.type}"`),console.log(`🔍 Planet info type: "${e.planet_info?.type}"`),n.type.toLowerCase()){case"gas_giant":if(this.layerSystem){const m=Yt(this.layerSystem,{...n,base_color:c,turbulence:e.turbulence||n.turbulence},e.seeds?.shape_seed||e.seeds?.planet_seed||e.seeds?.planet_seed),E=Gt(this.layerSystem,{...n,base_color:c,storm_intensity:e.storm_intensity||n.storm_intensity},(e.seeds?.shape_seed||e.seeds?.planet_seed)+1e3),N={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:m,priority:0,enabled:!0};this.effects.set(N.id,N),r.push(N);const P={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:E,priority:1,enabled:!0};if(this.effects.set(P.id,P),r.push(P),n.polar_hexagon&&n.polar_hexagon.enabled){const _=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,F=new St({planetColor:c,hexagonData:n.polar_hexagon,planetRadius:t,currentTime:_}),O={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:F,priority:10,enabled:!0};this.effects.set(O.id,O),r.push(O),i&&F.addToScene(i)}}else console.error("❌ PlanetLayerSystem not initialized!");break;case"frozen_gas_giant":if(this.layerSystem){const m=Yt(this.layerSystem,{...n,base_color:c,turbulence:e.turbulence||n.turbulence,icy_tint:!0},e.seeds?.shape_seed||e.seeds?.planet_seed),E={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:m,priority:0,enabled:!0};if(this.effects.set(E.id,E),r.push(E),n.polar_hexagon&&n.polar_hexagon.enabled){const N=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,P=new St({planetColor:c,hexagonData:n.polar_hexagon,planetRadius:t,currentTime:N}),_={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:P,priority:10,enabled:!0};this.effects.set(_.id,_),r.push(_),i&&P.addToScene(i)}}break;case"nebulous":if(this.layerSystem){const m=Gt(this.layerSystem,{...n,base_color:c,storm_intensity:n.nebula_density||.6,color_variance:n.color_variance||.2},(e.seeds?.shape_seed||e.seeds?.planet_seed)+2e3),E={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:m,priority:0,enabled:!0};if(this.effects.set(E.id,E),r.push(E),n.polar_hexagon&&n.polar_hexagon.enabled){const N=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,P=new St({planetColor:c,hexagonData:n.polar_hexagon,planetRadius:t,currentTime:N}),_={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:P,priority:10,enabled:!0};this.effects.set(_.id,_),r.push(_),i&&P.addToScene(i)}}break;case"metallic":case"metallic_3d":if(this.layerSystem){const m=ci(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),E={id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:m,priority:0,enabled:!0};this.effects.set(E.id,E),r.push(E)}break;case"rocky":if(this.layerSystem){const m=ai(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),E={id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:m,priority:0,enabled:!0};if(this.effects.set(E.id,E),r.push(E),n.clouds&&n.clouds.length>0){const N=Je(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),P={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:N,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(P.id,P),r.push(P),N.addToScene(i,o.position)}}break;case"icy":if(this.layerSystem){const m=ri(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),E={id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:m,priority:0,enabled:!0};this.effects.set(E.id,E),r.push(E);const N=Qo(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+8e3);if(N){const _={id:`effect_${this.nextId++}`,type:"transparent_land_masses",effect:N,priority:1,enabled:!0,name:"Ice Formations"};this.effects.set(_.id,_),r.push(_),N.addToScene(i,o.position),console.log("🧊 Ice Formations (transparent LandMasses) added to Icy planet")}else console.warn("❄️ Failed to create transparent LandMasses for Icy planet");if(n.clouds&&n.clouds.length>0){const _=Je(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),F={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:_,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(F.id,F),r.push(F),_.addToScene(i,o.position),console.log("☁️ Atmospheric Clouds added to Icy planet")}const P=Ut(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(P){const _={id:`effect_${this.nextId++}`,type:"icy_features",effect:P,priority:2,enabled:!0,name:"Ice Crystals & Features"};this.effects.set(_.id,_),r.push(_),P.addToScene(i,o.position),console.log("❄️ Icy Features (crystals, cracks, ice caps) added to Icy planet")}}break;case"oceanic":const u=Ht(t,e);if(u){const m={id:`effect_${this.nextId++}`,type:"fluid_layers",effect:u,priority:3,enabled:!0,name:"Fluid Ocean Layers"};this.effects.set(m.id,m),r.push(m),u.addToScene(i,o.position),console.log("🌊 FluidLayers effect added for oceanic planet")}if(n.green_patches&&n.green_patches.length>0){const m=bt(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(m){const E={id:`effect_${this.nextId++}`,type:"land_masses",effect:m,priority:5,enabled:!0,name:"Land Masses (Islands)"};this.effects.set(E.id,E),r.push(E),m.addToScene(i,o.position)}}if(n.clouds&&n.clouds.length>0){const m=Je(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),E={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:m,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(E.id,E),r.push(E),m.addToScene(i,o.position)}break;case"tundra":if(n.green_patches&&n.green_patches.length>0){const m=bt(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(m){const E={id:`effect_${this.nextId++}`,type:"land_masses",effect:m,priority:5,enabled:!0,name:"Tundra Terrain"};this.effects.set(E.id,E),r.push(E),m.addToScene(i,o.position),console.log("🏔️ Tundra terrain (LandMasses) added")}}const g=Ut(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(g){const m={id:`effect_${this.nextId++}`,type:"icy_features",effect:g,priority:6,enabled:!0,name:"Snow Patches & Ice"};this.effects.set(m.id,m),r.push(m),g.addToScene(i,o.position),console.log("❄️ Sparse ice features added to Tundra planet")}if(n.clouds&&n.clouds.length>0){const m=Je(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),E={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:m,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(E.id,E),r.push(E),m.addToScene(i,o.position),console.log("☁️ Atmospheric clouds added to Tundra planet")}const p=Vt(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+15e3);if(p){const m={id:`effect_${this.nextId++}`,type:"tundra_snowflakes",effect:p,priority:20,enabled:!0,name:"Snowflakes"};this.effects.set(m.id,m),r.push(m),p.addToScene(i,o.position),console.log("❄️ Tundra snowflakes added to Tundra planet")}break;case"anomaly":console.log("🌌 DETECTED ANOMALY PLANET - Creating effects"),console.log("🌌 Planet data:",{surfaceType:n.type,planetType:e.planet_info?.type}),console.log("🎭 SHOWCASE MODE: Activating ALL anomaly effects for evaluation");const x=["anomaly_phase_matter","pulsating_cube"],w=e.seeds?.planet_seed||Math.floor(Math.random()*1e6),y=x.length;for(let m=0;m<y;m++){const E=x[m],N=w+m*1e4,P=this.createEffectFromPythonData(E,{...e,seeds:{...e.seeds,planet_seed:N}},t,o,10+m);P&&(P.name=E.replace(/_/g," ").replace(/\b\w/g,_=>_.toUpperCase()),r.push(P),P.effect.addToScene&&P.effect.addToScene(i,o.position),console.log(`🎭 Added anomaly effect: ${P.name}`))}if(e.atmosphere&&e.atmosphere.type!=="None"){const m=this.createEffectFromPythonData("atmosphere",e.atmosphere,t,o,5);m&&(r.push(m),m.effect.addToScene(i,o.position),console.log("🌫️ Anomalous atmosphere added"))}break;default:if(e.planet_info?.type?.toLowerCase()==="anomaly"){console.log("🌌 DETECTED ANOMALY PLANET via planet_info.type - Creating effects"),console.log("🎭 SHOWCASE MODE (alt detection): Activating ALL anomaly effects for evaluation");const E=["anomaly_phase_matter","pulsating_cube"],N=e.seeds?.planet_seed||Math.floor(Math.random()*1e6),P=E.length;for(let _=0;_<P;_++){const F=E[_],O=N+_*1e4,R=this.createEffectFromPythonData(F,{...e,seeds:{...e.seeds,planet_seed:O}},t,o,10+_);R&&(R.name=F.replace(/_/g," ").replace(/\b\w/g,G=>G.toUpperCase()),r.push(R),R.effect.addToScene&&R.effect.addToScene(i,o.position),console.log(`🎭 Added anomaly effect: ${R.name}`))}if(e.atmosphere&&e.atmosphere.type!=="None"){const _=this.createEffectFromPythonData("atmosphere",e.atmosphere,t,o,5);_&&(r.push(_),_.effect.addToScene(i,o.position),console.log("🌫️ Anomalous atmosphere added"))}}else if(o.material instanceof He){const m=Ye(e);o.material.color.copy(m)}break}}else if(o.material instanceof He){const n=Ye(e);o.material.color.copy(n)}const h=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),d=h==="anomaly"||e.surface_elements?.type==="anomaly";if(e.atmosphere&&!d){if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const n=kt(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(n){const u={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:n,priority:20,enabled:!0};this.effects.set(u.id,u),r.push(u),n.addToScene(i,o.position)}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const n={...e.atmosphere};h==="oceanic"&&(n.opacity=Math.min(n.opacity||.3,.15),n.width=Math.min(n.width||15,8));const u=this.createEffectFromPythonData("atmosphere",n,t,o,5);u&&(r.push(u),u.effect.addToScene(i,o.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){const n=this.createEffectFromPythonData("ring_system",e,t,o,1);n?(r.push(n),n.effect.addToScene(i,o.position)):console.warn("⚠️ Failed to create ring effect")}if(e.surface_elements?.has_fragmentation_zones){const n=this.createEffectFromPythonData("fragmentation",e,t,o,5);n&&(r.push(n),n.effect.addToScene(i,o.position))}this.layerSystem&&this.layerSystem.addToScene(i);try{const n=this.createEffectFromPythonData("star_field",e,t,o,-100);n&&n.effect&&(n.effect.addToScene(i,o.position),r.push(n),console.log("⭐ StarField added automatically using planet seed:",e.seeds?.planet_seed))}catch(n){console.warn("Could not create StarField:",n)}return r.forEach((n,u)=>{}),r.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),r}catch(c){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",c),c}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const o=this.effects.get(e);if(o){o.enabled=t!==void 0?t:!o.enabled;const i=o.effect;if(i&&i.getObject3D){const s=i.getObject3D();s&&(s.visible=o.enabled,console.log(`🎮 Toggle effect ${o.type}: visible = ${o.enabled}`))}if(this.layerSystem){const s=this.layerSystem.getLayerMeshes(),c={cloud_bands_layer:"cloudBands",cloud_gyros_layer:"cloudGyros",metallic_surface_layer:"metallicSurface",rocky_terrain_layer:"rockyTerrain",icy_terrain_layer:"icyTerrain"}[o.type];c&&s[c]&&(s[c].visible=o.enabled)}}else console.warn(`⚠️ Effect not found: ${e}`)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const o of this.effects.values())if(o.enabled&&o.effect.update)try{o.effect.update(e,t)}catch(i){console.error(`Error updating effect ${o.type}:`,i)}}updateLightForAllEffects(e){this.layerSystem&&this.layerSystem.updateFromThreeLight(e);for(const t of this.effects.values())if(t.enabled&&t.effect.updateFromThreeLight)try{t.effect.updateFromThreeLight(e)}catch(o){console.error(`Error updating light for effect ${t.type}:`,o)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear(),this.nextId=1}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const De=Ge.getInstance(),Ue={atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function vi(a){const e=[];switch(a.toLowerCase()){case"metallic":e.push({type:"atmosphere",params:{...Ue.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:Ue.cloud_bands,priority:0},{type:"cloud_gyros",params:Ue.cloud_gyros,priority:1},{type:"atmosphere",params:{...Ue.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:Ue.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...Ue.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const Te={log:(a,e)=>{},warn:(a,e)=>{console.warn(`[Effects] ${a}`,e||"")},error:(a,e)=>{console.error(`[Effects] ${a}`,e||"")},debug:(a,e)=>{}};new Date().toISOString();const yi=({planetData:a,showInConsole:e=!0,showInPage:t=!1})=>{const[o,i]=C.useState([]),[s,r]=C.useState({});C.useEffect(()=>{if(!a)return;const d=c(a);r(d),i(h(a)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=a,window.__DEBUG_PLANET_ANALYSIS=d)},[a,e]);function c(d){const n={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(d.planet_info&&d.surface_elements?n.hasValidStructure=!0:(d.planet_info||n.missingFields.push("planet_info"),d.surface_elements||n.missingFields.push("surface_elements")),d.surface_elements?.type==="oceanic"&&(n.oceanicData={hasAbstractLands:!!d.surface_elements.abstract_lands?.length,numGreenPatches:d.surface_elements.green_patches?.length||0,numClouds:d.surface_elements.clouds?.length||0,hasDepths:d.surface_elements.depths?.enabled||!1,baseColorIsBlue:d.planet_info?.base_color==="#0000FF",greenPatchColor:d.surface_elements.green_patches?.[0]?.color,issues:[]},n.oceanicData.numGreenPatches>15&&n.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),n.oceanicData.baseColorIsBlue||n.oceanicData.issues.push(`Color base no es azul puro: ${d.planet_info?.base_color}`),n.renderingIssues=n.oceanicData.issues),d.planet_info?.base_color&&d.planet_info?.type){const g={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[d.planet_info.type];g&&d.planet_info.base_color!==g?n.colorConsistency=`Inconsistente: esperado ${g}, recibido ${d.planet_info.base_color}`:n.colorConsistency="Correcto"}return n}function h(d){const n=[];if(!d.surface_elements?.type)return["No surface type defined"];const u=d.surface_elements.type.toLowerCase();switch(u){case"oceanic":n.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":n.push("RockyTerrainEffect");break;case"icy":n.push("IcyTerrainEffect");break;case"gas giant":n.push("GasGiantBandsEffect");break;default:n.push(`Generic effect for type: ${u}`)}return d.atmosphere?.density>0&&n.push("AtmosphericEffect"),d.rings&&n.push("RingSystemEffect"),n}return t?l.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[l.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",a.planet_info?.name]}),l.jsxs("div",{style:{marginBottom:"10px"},children:[l.jsx("strong",{children:"Type:"})," ",a.planet_info?.type,l.jsx("br",{}),l.jsx("strong",{children:"Base Color:"})," ",a.planet_info?.base_color,l.jsx("br",{}),l.jsx("strong",{children:"Radius:"})," ",a.planet_info?.radius]}),a.surface_elements?.type==="oceanic"&&l.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[l.jsx("strong",{children:"🌊 Oceanic Data:"}),l.jsx("br",{}),l.jsxs("span",{style:{color:s.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",s.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),l.jsx("br",{}),"Green Patches: ",s.oceanicData?.numGreenPatches,l.jsx("br",{}),"Clouds: ",s.oceanicData?.numClouds,l.jsx("br",{}),"Has Depths: ",s.oceanicData?.hasDepths?"Yes":"No",l.jsx("br",{}),s.oceanicData?.issues?.length>0&&l.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",l.jsx("br",{}),s.oceanicData.issues.map((d,n)=>l.jsxs("div",{children:["- ",d]},n))]})]}),l.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[l.jsx("strong",{children:"🎨 Effects Applied:"}),l.jsx("br",{}),o.map((d,n)=>l.jsxs("div",{style:{color:d.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",d]},n))]}),l.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function xi(a){C.useEffect(()=>{if(a&&a.surface_elements?.type==="oceanic"){a.surface_elements.green_patches?.length>0;const e=a.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[a])}const pt=2.5,$t=()=>{const a=45*Math.PI/180;return pt/(Math.tan(a/2)*.5)},bi=({planetName:a,containerClassName:e="",width:t=800,height:o=600,autoRotate:i=!0,enableControls:s=!0,showDebugInfo:r=!1,planetData:c,cosmicOriginTime:h,initialAngleRotation:d,onDataLoaded:n,onEffectsCreated:u,onError:g})=>{const p=C.useRef(null),v=C.useRef(null),x=C.useRef(null),w=C.useRef(null),y=C.useRef(null),m=C.useRef(null),E=C.useRef(new To),N=C.useRef(null),P=C.useRef(0),_=C.useRef(null),[F,O]=C.useState(!0),[R,G]=C.useState(null),[M,U]=C.useState(null),[V,B]=C.useState([]),[ee,Z]=C.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),K=C.useRef([]),A=C.useRef(0),z=C.useRef(null),L=C.useRef(null),X=Math.floor(Date.now()/1e3),[te,me]=C.useState(0),oe=h||M?.timing?.cosmic_origin_time||Date.now()/1e3-3600,fe=X-oe+te;P.current=fe;const ge=C.useCallback(()=>{if(!p.current||!x.current||!w.current)return;const b=p.current,I=b.clientWidth||400,S=b.clientHeight||400;x.current.setSize(I,S),w.current.aspect=I/S,w.current.updateProjectionMatrix()},[]),be=async b=>{if(!(!y.current||!v.current||!L.current)){Te.log("Applying modular effects from API data",{planet:b.planet_info.name,type:b.planet_info.type});try{Ce();const I=Ye(b);L.current.updateBaseColor(I);const S=De.createEffectsFromPythonPlanetData(b,pt,y.current,v.current,L.current);console.log(`Planet: ${b.planet_info?.name}, Effects:`,S.map(D=>D.type)),B(S),K.current=S,u&&u(S),Te.log(`Successfully applied ${S.length} modular effects`),Ke()}catch(I){Te.error("Error applying modular effects",I),ke()}}},ve=C.useCallback(()=>{if(!p.current)return!1;try{for(;p.current.firstChild;)p.current.removeChild(p.current.firstChild);v.current=null,w.current=null,x.current=null,y.current=null,re.current=null;const b=p.current,I=b.clientWidth||t||400,S=b.clientHeight||o||400,D=new Po;D.background=new f(1297),v.current=D;const ie=new Io(45,I/S,.1,1e4),q=$t();ie.position.set(0,0,q),ie.lookAt(0,0,0),w.current=ie;const Y=new No({antialias:!0,alpha:!0,powerPreference:"high-performance"});return Y.setSize(I,S),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.shadowMap.enabled=!0,Y.shadowMap.type=Ao,Y.toneMapping=Do,Y.toneMappingExposure=1.2,Y.outputColorSpace=Ro,p.current.appendChild(Y.domElement),x.current=Y,Xe(D,null),qe(D),s&&dt(ie,Y.domElement),!0}catch(b){return console.error("Error initializing Three.js:",b),!1}},[M,c,h]),Ee=b=>{if(!b)return 0;const I=b.sun_angle||b.lighting?.sun_angle;if(I!==void 0)return I;const S=b.timing?.current_orbital_angle||b.timing?.orbital_angle;return S??0},ce=C.useRef(null),Ne=C.useRef(null),Me=C.useRef(null),re=C.useRef(null),Ae=b=>{b.castShadow=!0,b.shadow.mapSize.width=2048,b.shadow.mapSize.height=2048,b.shadow.camera.near=.5,b.shadow.camera.far=50,b.shadow.camera.left=-10,b.shadow.camera.right=10,b.shadow.camera.top=10,b.shadow.camera.bottom=-10},ze=b=>{if(!ce.current||!v.current)return;const I=Ee(b),S=10,D=I+Math.PI,ie=Math.sin(I)*5,q=S*Math.cos(D),Y=ie,je=S*Math.sin(D);ce.current.position.set(q,Y,je),ce.current.target.position.set(0,0,0),v.current.children.includes(ce.current.target)||v.current.add(ce.current.target),Ne.current&&Ne.current.position.set(-q*.5,0,-je*.5),L.current&&ce.current&&L.current.updateFromThreeLight(ce.current),ce.current&&De.updateLightForAllEffects(ce.current)},Xe=(b,I)=>{{const S=new Ot(16777215,2);S.position.set(-10,5,10),S.target.position.set(0,0,0),S.castShadow=!0,Ae(S),b.add(S),b.add(S.target),ce.current=S;const D=new Ot(16777215,.05);D.position.set(8,-3,-5),b.add(D),Ne.current=D;const ie=new Lo(2236996,.1);b.add(ie),setTimeout(()=>{L.current&&S&&L.current.updateFromThreeLight(S),S&&De.updateLightForAllEffects(S)},50);return}},qe=b=>{const I=new ct(pt,128,64),S=new Qt({color:8421504}),D=new ye(I,S);D.castShadow=!0,D.receiveShadow=!0,D.position.set(0,0,0),b.add(D),y.current=D;const ie=new f(8421504);L.current=new st(D,ie),L.current.addToScene(b)},dt=(b,I)=>{const S=new jo(b,I);S.enableDamping=!0,S.dampingFactor=.05;const D=$t();S.minDistance=D*.5,S.maxDistance=D*2,S.autoRotate=i,S.autoRotateSpeed=.5,S.enablePan=!0,S.enableZoom=!0,S.target.set(0,0,0),m.current=S},Fe=C.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{O(!0),G(null),Te.log("Loading planet data from API",{planetName:a});const I=await fetch("/api/planet/rendering-data");if(!I.ok)throw new Error(`HTTP error! status: ${I.status}`);const S=await I.json();if(!S.success)throw new Error(S.error||"Failed to fetch planet data");const D=S.planet_data,ie=S.timing,q=S.rendering_data,Y={planet_info:q?.planet_info||{name:D.name,type:D.planet_type,base_color:"#808080",radius:D.diameter/15e3,orbital_radius:D.orbital_radius},surface_elements:q?.surface_elements,atmosphere:q?.atmosphere,rings:q?.rings,effects_3d:q?.effects_3d,shader_uniforms:q?.shader_uniforms,universal_actions:q?.universal_actions,timing:{cosmic_origin_time:ie.cosmic_origin_time,current_time_seconds:ie.current_time_seconds,elapsed_time:ie.elapsed_time,initial_orbital_angle:D.initial_orbital_angle,current_orbital_angle:D.current_orbital_angle,max_orbital_radius:ie.max_orbital_radius,system_max_orbital_radius:D.system_max_orbital_radius},original_planet_data:D,seeds:q?.seeds};return U(Y),_.current=Y,Te.log("API data loaded successfully",{planet:Y.planet_info.name,type:Y.planet_info.type,hasEffects:!!Y.surface_elements,fullRenderingData:q}),n&&n(Y),Y}catch(b){const I=b instanceof Error?b.message:"Unknown error";return G(I),g&&g(I),null}finally{O(!1),window.isLoadingPlanetData=!1}}},[a,n,g]);C.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{O(!0),G(null),Te.log("Loading planet data from API",{planetName:a});const I=await fetch("/api/planet/rendering-data");if(!I.ok)throw new Error(`HTTP error! status: ${I.status}`);const S=await I.json();if(!S.success)throw new Error(S.error||"Failed to fetch planet data");const D=S.planet_data,ie=S.timing,q=S.rendering_data,Y={planet_info:q?.planet_info||{name:D.name,type:D.planet_type,base_color:"#808080",radius:D.diameter/15e3,orbital_radius:D.orbital_radius},surface_elements:q?.surface_elements,atmosphere:q?.atmosphere,rings:q?.rings,effects_3d:q?.effects_3d,shader_uniforms:q?.shader_uniforms,universal_actions:q?.universal_actions,timing:{cosmic_origin_time:ie.cosmic_origin_time,current_time_seconds:ie.current_time_seconds,elapsed_time:ie.elapsed_time,initial_orbital_angle:D.initial_orbital_angle,current_orbital_angle:D.current_orbital_angle,max_orbital_radius:ie.max_orbital_radius,system_max_orbital_radius:D.system_max_orbital_radius},original_planet_data:D,seeds:q?.seeds};U(Y),_.current=Y,Te.log("API data loaded successfully",{planet:Y.planet_info.name,type:Y.planet_info.type,hasEffects:!!Y.surface_elements,fullRenderingData:q}),ze(Y),re.current&&v.current&&(v.current.remove(re.current),re.current.geometry.dispose(),re.current.material.dispose(),re.current=null),await be(Y),n&&n(Y)}catch(b){const I=b instanceof Error?b.message:"Unknown error";G(I),g&&g(I),ke()}finally{O(!1),window.isLoadingPlanetData=!1}}},[a,c,h,d]);const Re=C.useCallback(()=>{if(!M||!y.current)return;const b=c?.orbital_period_seconds||365.25*24*3600,I=2*Math.PI/b,S=M.timing?.initial_orbital_angle||0,D=Date.now()/1e3,ie=0,q=h||M.timing?.cosmic_origin_time||Date.now()/1e3-3600,Y=D-q+ie,je=(S+Y*I)%(2*Math.PI),yt=M.timing?.max_orbital_radius||100,mt=20+M.planet_info?.orbital_radius/yt*80,no=mt,ro=mt*Math.cos(je),lo=no*Math.sin(je);y.current.position.x=ro,y.current.position.z=lo,y.current.position.y=0},[M,c,h]),vt=C.useCallback(async b=>{const I=b||M;if(I&&v.current)try{ze(I),re.current&&v.current&&(v.current.remove(re.current),re.current.geometry.dispose(),re.current.material.dispose(),re.current=null),await be(I)}catch(S){Te.error("Error in applyProceduralShadersFromAPI:",S),ke()}},[M]),ke=()=>{if(!(!v.current||!y.current)){Te.warn("Applying fallback effects for planet type:",c?.planet_type);try{Ce(),y.current.material instanceof He&&y.current.material.color.setHex(6710886);try{const b=vi("generic"),I=De.createEffectsFromList(b,pt,y.current);I.forEach(S=>{S.effect.addToScene&&v.current&&y.current&&S.effect.addToScene(v.current,y.current.position)}),K.current=I,B(I)}catch(b){console.warn("Could not create fallback effects, using basic material only:",b)}Ke()}catch(b){Te.error("Error applying fallback effects",b)}}},Ce=()=>{De.clearAllEffects(),K.current.forEach(b=>{try{b.effect.dispose&&b.effect.dispose()}catch{}}),K.current=[],B([])},ht=C.useCallback(()=>{N.current=requestAnimationFrame(ht);const b=performance.now(),I=E.current.getDelta();m.current&&m.current.update();try{De.updateAllEffects(I,y.current?.rotation.y)}catch{}if(y.current&&_.current){_.current.planet_info?.name;const S=_.current.original_planet_data,D=S?.orbital_period_seconds||365.25*24*3600,ie=_.current.timing?.initial_orbital_angle||0;h||_.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const q=S?.axial_tilt||0,Y=2*Math.PI/D;(ie+P.current*Y)%(2*Math.PI);const je=_.current.timing?.max_orbital_radius||_.current.timing?.system_max_orbital_radius,yt=S?.orbital_radius;if(!je||!yt)return;S?.eccentricity_factor,y.current.position.set(0,0,0);const Dt=S?.rotation_period_seconds||86400,mt=2*Math.PI/Dt;y.current.rotation.y=P.current*mt%(2*Math.PI),y.current.rotation.z=q*(Math.PI/180)}if(K.current.forEach(S=>{S.effect.updateUniforms&&S.effect.updateUniforms(I)}),x.current&&v.current&&w.current){const S=performance.now();x.current.render(v.current,w.current);const D=performance.now()-S;if(b-A.current>5e3){const ie=1e3/(b-A.current);Ke(),Z(q=>({...q,frameRate:Math.round(ie),renderTime:Math.round(D*100)/100})),A.current=b}}},[]),Ke=C.useCallback(()=>{const b=De.getStats();Z(I=>({...I,activeEffects:b.activeEffects,enabledEffects:b.enabledEffects}))},[]);return C.useEffect(()=>{let b=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!b)return;const S=await Fe();if(!b)return;if(!ve()){b&&G("Failed to initialize 3D renderer");return}if(!b||(ht(),p.current&&"ResizeObserver"in window&&(z.current=new ResizeObserver(ge),z.current.observe(p.current)),window.addEventListener("resize",ge),!b))return;S?await vt(S):ke()}catch(S){b&&G(S instanceof Error?S.message:"Unknown initialization error")}})(),()=>{if(b=!1,_.current=null,N.current&&cancelAnimationFrame(N.current),z.current&&z.current.disconnect(),window.removeEventListener("resize",ge),Ce(),L.current&&(L.current.dispose(),L.current=null),m.current&&m.current.dispose(),Me.current&&v.current&&(v.current.remove(Me.current),Me.current.geometry.dispose(),Me.current.material.dispose(),Me.current=null),re.current&&v.current&&(v.current.remove(re.current),re.current.geometry.dispose(),re.current.material.dispose(),re.current=null),x.current&&p.current)try{p.current.contains(x.current.domElement)&&p.current.removeChild(x.current.domElement),x.current.dispose()}catch{}}},[]),C.useEffect(()=>{const b=setInterval(()=>{const I=De.getStats();Z(S=>({...S,activeEffects:I.activeEffects,enabledEffects:I.enabledEffects}))},1e4);return()=>clearInterval(b)},[]),C.useEffect(()=>{M&&v.current&&y.current&&Re()},[M,Re]),xi(M),l.jsxs("div",{className:`relative ${e}`,children:[r&&M&&l.jsx(yi,{planetData:M,showInPage:!0,showInConsole:!0}),l.jsx("div",{ref:p,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),F&&l.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:l.jsxs("div",{className:"text-white text-center",children:[l.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),l.jsx("div",{children:"Loading planet..."})]})}),R&&l.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[l.jsx("strong",{children:"Error:"})," ",R]}),M&&!F&&l.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[l.jsx("h3",{className:"text-lg font-bold",children:M.planet_info.name}),l.jsx("p",{className:"text-sm opacity-80",children:M.planet_info.type}),l.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[V.length," effects active"]}),M.surface_elements?.description&&l.jsx("p",{className:"text-xs mt-2 opacity-60",children:M.surface_elements.description.appearance})]}),r&&l.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[l.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),l.jsxs("div",{children:["Frame Rate: ",ee.frameRate," FPS"]}),l.jsxs("div",{children:["Render Time: ",ee.renderTime,"ms"]}),l.jsxs("div",{children:["Active Effects: ",ee.activeEffects]}),l.jsxs("div",{children:["Enabled Effects: ",ee.enabledEffects]}),l.jsxs("div",{className:"mt-2",children:[l.jsx("div",{className:"font-semibold",children:"Effects:"}),V.map(b=>l.jsxs("div",{className:"ml-2",children:[b.type," (",b.enabled?"ON":"OFF",")"]},b.id))]})]})]})};class Si extends Zt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?l.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:l.jsxs("div",{className:"text-center p-4",children:[l.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),l.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const _i=a=>l.jsx(Si,{children:l.jsx(bi,{...a})}),wi=({planetUrl:a,imageUrl:e,planet:t,cosmicOriginTime:o,initialAngleRotation:i,onEffectsCreated:s,effects:r,onToggleEffect:c})=>{const h=C.useRef(null),d=C.useRef(null),[n,u]=C.useState("Aligning Stargate..."),[g,p]=C.useState(!1),[v,x]=C.useState(!1),[w,y]=C.useState(!1),[m,E]=C.useState(!0),[N,P]=C.useState(!0),[_,F]=C.useState(null),[O,R]=C.useState(null);C.useEffect(()=>{r&&c&&r.forEach(M=>{De.toggleEffect(M.id,M.enabled)})},[r]),C.useEffect(()=>{const M=document.createElement("style");return M.textContent=`
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
    `,document.head.appendChild(M),()=>{document.head.removeChild(M)}},[]),C.useEffect(()=>{const M=h.current;if(!M)return;const U=M.getContext("2d");if(!U)return;let V=[];const B=800;let ee,Z;const K=800;let A,z=.5;function L(){const oe=M?.parentElement;if(!oe||!M)return;const fe=oe.clientWidth,ge=oe.clientHeight;M.width=Math.min(fe,K),M.height=Math.min(ge,K),ee=M.width/2,Z=M.height/2}function X(){L(),V=[];for(let oe=0;oe<B;oe++)V.push({x:Math.random()*(M?.width||800),y:Math.random()*(M?.height||800),z:Math.random()*(M?.width||800),o:Math.random()});te()}function te(){!M||!U||(U.clearRect(0,0,M.width,M.height),V.forEach(oe=>{oe.z-=z,oe.z<=0&&(oe.z=M.width,oe.x=Math.random()*M.width,oe.y=Math.random()*M.height,oe.o=Math.random());const fe=M.width/oe.z,ge=(oe.x-ee)*fe+ee,be=(oe.y-Z)*fe+Z,ve=2*fe;U.beginPath(),U.fillStyle=`rgba(255, 255, 255, ${oe.o})`,U.arc(ge,be,ve,0,2*Math.PI),U.fill()}),z<60&&(z+=1),A=requestAnimationFrame(te))}X();const me=()=>L();return window.addEventListener("resize",me),()=>{window.removeEventListener("resize",me),A&&cancelAnimationFrame(A)}},[]),C.useEffect(()=>{if(e&&!m){const M=new Image;M.onload=()=>{d.current&&(d.current.src=e,x(!0),y(!0))},M.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{x(!0),y(!0)},1500)},M.src=e}else(m||!e)&&setTimeout(()=>{x(!0),y(!0)},1500)},[e,m]),C.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){u("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),p(!0);const U=(K,A)=>Array.from({length:A},()=>K[Math.floor(Math.random()*K.length)]).join(""),V=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let B=0,ee=0;const Z=()=>{if(B>=V.length){const A="Stargate system aligned";let z=0;u("");const L=()=>{z<A.length?(u(A.substring(0,z+1)),z++,setTimeout(L,30)):p(!1)};L();return}const K=V[B];u(U(K.chars,32)),ee++,ee>=K.iterations&&(B++,ee=0),setTimeout(Z,K.duration)};Z()},[]);const G=()=>{E(!m),m||(x(!0),y(!0))};return l.jsxs("div",{className:"h-full flex flex-col",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),N&&l.jsx("div",{className:"flex items-center gap-2",children:l.jsx("button",{onClick:G,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${m?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:m?"2D View":"3D View"})})]}),l.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[l.jsx("canvas",{ref:h,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${w?"opacity-0":"opacity-100"}`,style:{filter:w?"blur(50px)":"none"}}),m&&v&&t&&l.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${v?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:l.jsx(_i,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,onEffectsCreated:s,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:o,initialAngleRotation:i,onDataLoaded:M=>{F(M)},onError:M=>{R(M),console.error("❌ Planet rendering error:",M)}})}),!m&&l.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${v?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:v&&e?l.jsx("div",{className:"w-full h-full flex items-center justify-center",children:l.jsx(fo,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:l.jsx("img",{ref:d,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):l.jsx("img",{ref:d,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),N&&l.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:m?"🌍 3D":"🖼️ 2D"})]}),l.jsxs("div",{className:"text-center mt-auto",children:[l.jsxs("a",{href:a,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${g?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[l.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[l.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:l.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),n]}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),l.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",m&&_&&l.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",_.planet_info?.type," Planet",_.atmosphere&&l.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),_.rings?.has_rings&&l.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),m&&O&&l.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Ei=({currentPlanet:a,system:e,galaxy:t,systemPlanets:o})=>{const[i,s]=C.useState(null),[r,c]=C.useState(null),[h,d]=C.useState(!1),[n,u]=C.useState(!1),[g,p]=C.useState(!0);C.useEffect(()=>{if(o&&o.length>0){const w=o.findIndex(y=>y.name.toLowerCase()===a.toLowerCase());w!==-1?(w>0?(s(o[w-1].name.toLowerCase()),d(!0)):e.index>0?(s("__prev_system__"),d(!0)):d(!1),w<o.length-1?(c(o[w+1].name.toLowerCase()),u(!0)):(c("__next_system__"),u(!0))):(d(!1),u(!1))}else d(!1),u(!1);p(!1)},[a,e.index,o]);const v=async()=>{const w=t.coordinates.join(",");if(i==="__prev_system__")try{const y=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(y.ok){const m=await y.json();if(m.system&&m.system.planets&&m.system.planets.length>0){const N=m.system.planets[m.system.planets.length-1].name.toLowerCase();et(w,e.index-1,N,m.system.planets),wt(w,e.index-1),window.location.href=`/planet/${N}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else i&&(et(w,e.index,i,o),window.location.href=`/planet/${i}`)},x=async()=>{const w=t.coordinates.join(",");if(r==="__next_system__")try{const y=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(y.ok){const m=await y.json();if(m.system&&m.system.planets&&m.system.planets.length>0){const N=m.system.planets[0].name.toLowerCase();et(w,e.index+1,N,m.system.planets),wt(w,e.index+1),window.location.href=`/planet/${N}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else r&&(et(w,e.index,r,o),window.location.href=`/planet/${r}`)};return g?null:l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("button",{onClick:v,disabled:!h,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${h?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),l.jsx("button",{onClick:x,disabled:!n,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${n?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Mi=({planet:a,system:e,galaxy:t,planet_url:o,version:i,image_url:s,cosmic_origin_time:r,initial_angle_rotation:c})=>{const[h]=C.useState(t.coordinates.join(",")),[d,n]=C.useState([]),u=w=>{n(w)},g=(w,y)=>{n(m=>m.map(E=>E.id===w?{...E,enabled:y}:E))};C.useEffect(()=>{document.body.setAttribute("data-coordinates",h),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",a.name.toLowerCase()),et(h,e.index,a.name,e.planets||[]),wt(h,e.index)},[h,e.index,a.name]);const p=w=>w.replace(/_/g," "),v=w=>w.replace(/_/g," "),x=w=>w.replace(/_/g," ");return l.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[l.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),l.jsxs("div",{className:"relative z-10",children:[l.jsx(mo,{}),l.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:l.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",p(a.name),"'"]})}),l.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",v(e.name),"' - Galaxy '",x(t.name),"'"]}),l.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),l.jsx(Ei,{currentPlanet:a.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),l.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:l.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[l.jsx("div",{className:"order-1 lg:order-1",children:l.jsx(wi,{planetUrl:o,imageUrl:s,planet:a,cosmicOriginTime:r,initialAngleRotation:c,onEffectsCreated:u,effects:d,onToggleEffect:g})}),l.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),l.jsx("div",{className:"order-2 lg:order-2",children:l.jsx(zo,{planet:a,system:e,galaxy:t,cosmicOriginTime:r,initialAngleRotation:c,effects:d,onToggleEffect:g})})]})}),l.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:l.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:l.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",v(e.name),"'"]})})})]}),l.jsx(co,{version:i})]}),l.jsx(po,{currentLocation:{type:"planet",name:a.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:a.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const a=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),o=document.getElementById("meta-data");if(!a||!e||!t||!o){console.error("Missing required data elements");return}const i=JSON.parse(a.textContent||"{}"),s=JSON.parse(e.textContent||"{}"),r=JSON.parse(t.textContent||"{}"),c=JSON.parse(o.textContent||"{}"),h={planet:i,system:s,galaxy:r,planet_url:c.planet_url,version:c.version,image_url:c.image_url,cosmic_origin_time:c.cosmic_origin_time,initial_angle_rotation:c.initial_angle_rotation},d=document.getElementById("atlas-react-root");d&&ho.createRoot(d).render(Zt.createElement(Mi,h))}catch(a){console.error("Error initializing Planet React app:",a)}});
