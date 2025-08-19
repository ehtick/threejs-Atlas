import{r as C,j as l,R as Bt,V as io,c as ao}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as so}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as no,U as ro,m as qe,c as bt,a as lo}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as co,V as P,n as Ve,T as ke,Q as Pt,l as At,o as be,R as ho,p as mo,q as Wt,e as Ce,r as ie,s as me,N as Ne,t as st,c as nt,C as f,u as uo,v as We,d as ye,G as ze,w as Ht,x as $t,F as Se,y as St,z as _t,h as fo,H as po,I as go,J as Ye,B as vo,K as Nt,O as yo,U as xo,X as bo,L as wt,g as Et,Y as Ge,M as Zt,Z as So,S as _o,P as wo,W as Eo,_ as Mo,$ as Co,a0 as To,D as It,A as Po}from"./atlas_szUVpFw09u2PxOIMlgYA5.js";const Ao=({effects:s,onToggleEffect:e})=>{const[t,o]=C.useState(s),[i,a]=C.useState(!1);C.useEffect(()=>{o(s)},[s]);const r=(d,h)=>{o(n=>n.map(u=>u.id===d?{...u,enabled:h}:u)),e(d,h)},c=d=>d;return t.length===0?null:l.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("div",{className:"text-xs text-gray-400",children:"3D Effects Control"}),l.jsxs("button",{onClick:()=>a(!i),className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[i?"Hide":"Show"," (",t.filter(d=>d.enabled).length,"/",t.length,")"]})]}),i&&l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:t.map(d=>l.jsxs("div",{className:"bg-white/5 rounded p-2 flex items-center justify-between",children:[l.jsxs("label",{className:"flex items-center gap-2 cursor-pointer flex-1",children:[l.jsx("input",{type:"checkbox",checked:d.enabled,onChange:h=>r(d.id,h.target.checked),className:"rounded border-gray-400 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-white/10"}),l.jsx("span",{className:`${d.enabled?"text-white":"text-gray-500"} transition-colors`,children:c(d.type)})]}),l.jsx("span",{className:`text-[10px] ${d.enabled?"text-green-400":"text-gray-600"}`,children:d.enabled?"ON":"OFF"})]},d.id))}),i&&t.length>3&&l.jsxs("div",{className:"mt-2 flex gap-2",children:[l.jsx("button",{onClick:()=>{t.forEach(d=>r(d.id,!0))},className:"text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors",children:"Enable All"}),l.jsx("button",{onClick:()=>{t.forEach(d=>r(d.id,!1))},className:"text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors",children:"Disable All"})]})]})},No=({planet:s,system:e,galaxy:t,cosmicOriginTime:o,initialAngleRotation:i,effects:a,onToggleEffect:r})=>{const[c,d]=C.useState(!1),h=v=>v.replace(/_/g," "),n=v=>{const M=v/86400;return M<30?`${M.toFixed(2)} days`:M<365?`${(M/30).toFixed(2)} months`:`${(M/365).toFixed(2)} years`},u=v=>{const M=v*9/5+32;return`${v.toFixed(1)}°C (${M.toFixed(1)}°F)`},p=v=>`${v.toExponential(2)} kg`,g=v=>v>=1e3?`${(v/1e3).toFixed(2)} km`:`${v.toFixed(2)} m`;return l.jsxs("div",{className:"h-full flex flex-col relative",children:[l.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),l.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[l.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),l.jsx(no,{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name,className:"text-xs"})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[l.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),l.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:s.planet_type})]}),l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[l.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),l.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:s.atmosphere})]}),l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[l.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),l.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:s.life_forms})]})]}),l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[l.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),l.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),l.jsx("div",{className:"text-xs font-bold text-orange-300",children:p(s.mass)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),l.jsx("div",{className:"text-xs font-bold text-orange-300",children:g(s.diameter)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),l.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.density.toFixed(2)," kg/m³"]})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),l.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[s.gravity.toFixed(2)," m/s²"]})]})]})]}),l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[l.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),l.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),l.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_radius.toFixed(2)," AU"]})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),l.jsx("div",{className:"text-xs font-bold text-cyan-300",children:n(s.orbital_period_seconds)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),l.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.orbital_speed.toFixed(2)," m/s"]})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),l.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[s.axial_tilt.toFixed(2),"°"]})]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[l.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),l.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),l.jsx("div",{className:"text-xs font-bold text-red-300",children:u(s.surface_temperature)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[l.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),l.jsx("div",{className:"text-xs font-bold text-red-300",children:n(s.rotation_period_seconds)})]})]})]}),l.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",s.elements.length,")"]}),s.elements.length>4&&l.jsx("button",{onClick:()=>d(!c),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:c?"▲ Less":"▼ All"})]}),l.jsx("div",{className:"flex flex-wrap gap-1",children:(c?s.elements:s.elements.slice(0,4)).map((v,M)=>l.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:v},M))})]})]}),l.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[l.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),l.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"Status:"}),l.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"Planet:"}),l.jsx("div",{className:"text-white truncate font-medium",children:h(s.name)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"System:"}),l.jsx("div",{className:"text-white truncate font-medium",children:h(e.name)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"System ID:"}),l.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),l.jsx("div",{className:"text-white truncate font-medium",children:h(t.name)})]}),l.jsxs("div",{className:"bg-white/5 rounded p-2",children:[l.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),l.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]}),a&&r&&l.jsx(Ao,{effects:a,onToggleEffect:r})]})},Dt={type:"change"},Mt={type:"start"},Xt={type:"end"},dt=new ho,Rt=new mo,Io=Math.cos(70*Wt.DEG2RAD),de=new P,ve=2*Math.PI,J={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gt=1e-6;class Do extends co{constructor(e,t=null){super(e,t),this.state=J.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ve.ROTATE,MIDDLE:Ve.DOLLY,RIGHT:Ve.PAN},this.touches={ONE:ke.ROTATE,TWO:ke.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Pt,this._lastTargetPosition=new P,this._quat=new Pt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new At,this._sphericalDelta=new At,this._scale=1,this._panOffset=new P,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new P,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lo.bind(this),this._onPointerDown=Ro.bind(this),this._onPointerUp=Oo.bind(this),this._onContextMenu=Yo.bind(this),this._onMouseWheel=Fo.bind(this),this._onKeyDown=ko.bind(this),this._onTouchStart=Uo.bind(this),this._onTouchMove=Vo.bind(this),this._onMouseDown=zo.bind(this),this._onMouseMove=jo.bind(this),this._interceptControlDown=Go.bind(this),this._interceptControlUp=Bo.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dt),this.update(),this.state=J.NONE}update(e=null){const t=this.object.position;de.copy(t).sub(this.target),de.applyQuaternion(this._quat),this._spherical.setFromVector3(de),this.autoRotate&&this.state===J.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let o=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(o)&&isFinite(i)&&(o<-Math.PI?o+=ve:o>Math.PI&&(o-=ve),i<-Math.PI?i+=ve:i>Math.PI&&(i-=ve),o<=i?this._spherical.theta=Math.max(o,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(o+i)/2?Math.max(o,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(de.setFromSpherical(this._spherical),de.applyQuaternion(this._quatInverse),t.copy(this.target).add(de),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const c=de.length();r=this._clampDistance(c*this._scale);const d=c-r;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const h=new P(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(c),this.object.updateMatrixWorld(),r=de.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(dt.origin.copy(this.object.position),dt.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dt.direction))<Io?this.object.lookAt(this.target):(Rt.setFromNormalAndCoplanarPoint(this.object.up,this.target),dt.intersectPlane(Rt,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>gt||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gt||this._lastTargetPosition.distanceToSquared(this.target)>gt?(this.dispatchEvent(Dt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ve/60*this.autoRotateSpeed*e:ve/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){de.setFromMatrixColumn(t,0),de.multiplyScalar(-e),this._panOffset.add(de)}_panUp(e,t){this.screenSpacePanning===!0?de.setFromMatrixColumn(t,1):(de.setFromMatrixColumn(t,0),de.crossVectors(this.object.up,de)),de.multiplyScalar(e),this._panOffset.add(de)}_pan(e,t){const o=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;de.copy(i).sub(this.target);let a=de.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/o.clientHeight,this.object.matrix),this._panUp(2*t*a/o.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/o.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/o.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const o=this.domElement.getBoundingClientRect(),i=e-o.left,a=t-o.top,r=o.width,c=o.height;this._mouse.x=i/r*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ve*this._rotateDelta.x/t.clientHeight),this._rotateUp(ve*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(o,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(o,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(o*o+i*i);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const o=this._getSecondPointerPosition(e),i=.5*(e.pageX+o.x),a=.5*(e.pageY+o.y);this._rotateEnd.set(i,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ve*this._rotateDelta.x/t.clientHeight),this._rotateUp(ve*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),o=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(o,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),o=e.pageX-t.x,i=e.pageY-t.y,a=Math.sqrt(o*o+i*i);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(r,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,o={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:o.deltaY*=16;break;case 2:o.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(o.deltaY*=10),o}}function Ro(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Lo(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Oo(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xt),this.state=J.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function zo(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=J.DOLLY;break;case Ve.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=J.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=J.ROTATE}break;case Ve.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=J.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=J.PAN}break;default:this.state=J.NONE}this.state!==J.NONE&&this.dispatchEvent(Mt)}function jo(s){switch(this.state){case J.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case J.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case J.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Fo(s){this.enabled===!1||this.enableZoom===!1||this.state!==J.NONE||(s.preventDefault(),this.dispatchEvent(Mt),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Xt))}function ko(s){this.enabled!==!1&&this._handleKeyDown(s)}function Uo(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=J.TOUCH_ROTATE;break;case ke.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=J.TOUCH_PAN;break;default:this.state=J.NONE}break;case 2:switch(this.touches.TWO){case ke.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=J.TOUCH_DOLLY_PAN;break;case ke.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=J.TOUCH_DOLLY_ROTATE;break;default:this.state=J.NONE}break;default:this.state=J.NONE}this.state!==J.NONE&&this.dispatchEvent(Mt)}function Vo(s){switch(this._trackPointer(s),this.state){case J.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case J.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case J.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case J.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=J.NONE}}function Yo(s){this.enabled!==!1&&s.preventDefault()}function Go(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bo(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Lt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class qt{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:o,ring_inner_radius:i,ring_outer_radius:a,tilt_factor:r,planet_radius:c,shape_seed:d}=e;if(!t||!o){console.warn("No ring data provided");return}const h=[...t.particles,...o.particles],n=h.length,u=new Lt(d||12345),p=new Ce,g=new Float32Array(n*3),v=new Float32Array(n*3),M=new Float32Array(n),E=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],b=u.choice(E);for(let m=0;m<n;m++){const _=h[m],N=this.planetRadius/(c||200),T=(d||12345)+m,S=new Lt(T),j=_.distance*N,O=_.angle,R=j*Math.sin(O),Y=Math.asin((r||.2)*.5),w=R*Math.sin(Y),F=R*Math.cos(Y),k=((a||400)-(i||200))*N*.4,G=S.uniform(-k*.8,k*.8),Q=S.uniform(-k*.3,k*.3),$=S.uniform(-.08,.08),q=j+Q,I=O+$;g[m*3]=q*Math.cos(I),g[m*3+1]=w+G+this.planetRadius*.15,g[m*3+2]=F+S.uniform(-k*.4,k*.4),_.color[0]/255;const L=(_.distance-(i||200))/((a||400)-(i||200)),Z=b.baseGray,ee=b.variation,he=S.uniform(-ee,ee),te=Math.max(.12,Math.min(.45,Z+he)),ue=.8+L*.4,pe=S.uniform(.85,1.15),xe=S.uniform(0,1),ge=xe<.03?S.uniform(1.1,1.3):1,_e=te*ue*pe*ge,le=Math.max(.1,Math.min(.55,_e));v[m*3]=le,v[m*3+1]=le,v[m*3+2]=le;const Te=.15,we=S.uniform(.3,.7),ne=xe<.1?S.uniform(1.05,1.2):1;M[m]=_.size*Te*we*ne}p.setAttribute("position",new ie(g,3)),p.setAttribute("color",new ie(v,3)),p.setAttribute("size",new ie(M,1)),this.material=new me({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Ne}),this.ringSystem=new st(p,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const o=t.rotation_period_seconds||86400,i=t.cosmicOriginTime||Date.now()/1e3,a=t.initialAngleRotation||0,c=Date.now()/1e3-i,d=2*Math.PI/o,h=(a+c*d)%(2*Math.PI);this.ringSystem.rotation.y=h}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function Wo(s,e){const t={full_ring:s.full_ring,ontop_ring:s.ontop_ring,ring_inner_radius:s.ring_inner_radius,ring_outer_radius:s.ring_outer_radius,tilt_factor:s.tilt_factor,planet_radius:s.planet_radius,shape_seed:s.shape_seed};return new qt(e,t)}class Je{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const o=e*(1+this.params.width/100);this.geometry=new nt(o,32,32);const i=new f(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new me({vertexShader:Je.vertexShader,fragmentShader:Je.fragmentShader,uniforms:{atmosphereColor:{value:i},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:We,side:uo,depthWrite:!1}),this.mesh=new ye(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new f(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ho(s,e){let t=[.7,.7,.7,.15],o=12;if(e){if(e.color&&Array.isArray(e.color)){const a=e.color;t=[a[0],a[1],a[2],(a[3]||.15)*.7]}e.width&&(o=e.width)}const i={type:e?.type||"Thin",color:t,width:o,opacity:t[3],density:1};return new Je(s,i)}class V{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,o=Math.acos(this.random()*2-1);return{x:e*Math.sin(o)*Math.cos(t),y:e*Math.sin(o)*Math.sin(t),z:e*Math.cos(o)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const B={PARTICLE_COUNT:{min:25,max:150},SPEED:{min:.05,max:.5},SIZE:{min:.3,max:1.5},OPACITY:{min:.1,max:.3},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05},TIME_SPEED:{min:.1,max:3}};class Qe{particleSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6),i=new V(o);this.startTime=t.startTime||o%1e4/1e3,this.params={color:t.color||new f(16777215),particleCount:t.particleCount||Math.floor(i.uniform(B.PARTICLE_COUNT.min,B.PARTICLE_COUNT.max)),speed:t.speed||i.uniform(B.SPEED.min,B.SPEED.max),size:t.size||i.uniform(B.SIZE.min,B.SIZE.max),opacity:t.opacity||i.uniform(B.OPACITY.min,B.OPACITY.max),turbulence:t.turbulence||i.uniform(B.TURBULENCE.min,B.TURBULENCE.max),rotationSpeed:t.rotationSpeed||i.uniform(B.ROTATION_SPEED.min,B.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||i.uniform(B.MOVEMENT_AMPLITUDE.min,B.MOVEMENT_AMPLITUDE.max),timeSpeed:t.timeSpeed||i.uniform(B.TIME_SPEED.min,B.TIME_SPEED.max),seed:o,startTime:this.startTime},this.particleCount=this.params.particleCount,this.geometry=new Ce,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new st(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),c=this.params.color instanceof f?this.params.color:new f(this.params.color),d=this.params.seed||Math.floor(Math.random()*1e6),h=new V(d);for(let n=0;n<this.particleCount;n++){const u=h.spherePosition(e*h.uniform(1,1.1));t[n*3]=u.x,t[n*3+1]=u.y,t[n*3+2]=u.z;const p=h.colorVariation({r:c.r,g:c.g,b:c.b});o[n*3]=p.r,o[n*3+1]=p.g,o[n*3+2]=p.b,i[n]=this.params.size*h.uniform(.75,1.25),a[n]=this.params.speed*h.uniform(.6,1.4),r[n]=h.random()*Math.PI*2}this.geometry.setAttribute("position",new ie(t,3)),this.geometry.setAttribute("customColor",new ie(o,3)),this.geometry.setAttribute("size",new ie(i,1)),this.geometry.setAttribute("speed",new ie(a,1)),this.geometry.setAttribute("phase",new ie(r,1))}createMaterial(){return new me({vertexShader:Qe.vertexShader,fragmentShader:Qe.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:We,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){const o=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=o,this.particleSystem.rotation.y=o*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ot(s,e,t){const o=e.streaks||{},i=t||Math.floor(Math.random()*1e6),a=new V(i+3e3),r=o.count||Math.floor(a.uniform(B.PARTICLE_COUNT.min,B.PARTICLE_COUNT.max)),c=o.speed||a.uniform(B.SPEED.min,B.SPEED.max),d=a.uniform(B.SIZE.min,B.SIZE.max),h=a.uniform(B.OPACITY.min,B.OPACITY.max),n=a.uniform(B.TURBULENCE.min,B.TURBULENCE.max),u=a.uniform(B.ROTATION_SPEED.min,B.ROTATION_SPEED.max),p=a.uniform(B.MOVEMENT_AMPLITUDE.min,B.MOVEMENT_AMPLITUDE.max),g=a.uniform(B.TIME_SPEED.min,B.TIME_SPEED.max),v={color:o.color?new f().setRGB(o.color[0],o.color[1],o.color[2]):new f(16777215),particleCount:r,speed:c,size:d,opacity:h,turbulence:n,seed:i,rotationSpeed:u,movementAmplitude:p,timeSpeed:g};return new Qe(s,v)}const W={CLOUD_COUNT:{min:15,max:30},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.9},DENSITY:{min:.5,max:2},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},PUFFINESS:{min:1,max:1.4},TIME_SPEED:{min:.1,max:3}};class Be{cloudSystem;material;params;cloudCount;clouds=[];startTime;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6),i=new V(o);this.startTime=t.startTime||o%1e4/1e3,this.params={color:t.color||new f(16777215),cloudCount:t.cloudCount||Math.floor(i.uniform(W.CLOUD_COUNT.min,W.CLOUD_COUNT.max)),size:t.size||i.uniform(W.SIZE.min,W.SIZE.max),opacity:t.opacity||i.uniform(W.OPACITY.min,W.OPACITY.max),density:t.density||i.uniform(W.DENSITY.min,W.DENSITY.max),rotationSpeed:t.rotationSpeed||i.uniform(W.ROTATION_SPEED.min,W.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||i.uniform(W.MOVEMENT_AMPLITUDE.min,W.MOVEMENT_AMPLITUDE.max),puffiness:t.puffiness||i.uniform(W.PUFFINESS.min,W.PUFFINESS.max),timeSpeed:t.timeSpeed||i.uniform(W.TIME_SPEED.min,W.TIME_SPEED.max),seed:o,startTime:this.startTime},this.cloudCount=this.params.cloudCount,this.cloudSystem=new ze,this.material=this.createMaterial(),this.generateClouds(e)}generateClouds(e){const t=this.params.color instanceof f?this.params.color:new f(this.params.color),o=this.params.seed||Math.floor(Math.random()*1e6),i=new V(o),a=this.params.cloudsFromPython;for(let r=0;r<this.cloudCount;r++){let c,d,h,n=t,u=this.params.size*i.uniform(.8,1.2);if(a&&r<a.length){const R=a[r];c=R.position[0]*e*1.04,d=R.position[1]*e*1.04,h=R.position[2]*e*1.04,R.color&&(n=new f().setRGB(R.color[0],R.color[1],R.color[2])),u=R.radius*e*.8}else{const R=i.uniform(0,2*Math.PI),Y=i.uniform(-1,1),w=Math.acos(Y),F=e*i.uniform(1.02,1.06);c=F*Math.sin(w)*Math.cos(R),d=F*Math.sin(w)*Math.sin(R),h=F*Math.cos(w)}const p=u*i.uniform(.3,.8),g=Math.max(8,Math.floor(p*15)),v=new Ht(p*2,p*2,g,g),M=new P(c,d,h);new P(0,0,0);const E=M.clone().normalize(),b=new P,m=new P;Math.abs(E.y)<.99?b.crossVectors(E,new P(0,1,0)).normalize():b.crossVectors(E,new P(1,0,0)).normalize(),m.crossVectors(E,b).normalize();const _=new $t;_.makeBasis(b,m,E);const N=v.attributes.position,T=new P,S=Math.sqrt(c*c+d*d+h*h);v.applyMatrix4(_);for(let R=0;R<N.count;R++){T.fromBufferAttribute(N,R);const k=T.clone().add(M).clone().normalize().multiplyScalar(S).sub(M);N.setXYZ(R,k.x,k.y,k.z)}N.needsUpdate=!0,v.computeVertexNormals(),v.translate(c,d,h);const j=this.material.clone();j.uniforms.cloudColor.value=n,j.uniforms.density.value=this.params.density*i.uniform(.8,1.2),j.uniforms.noiseOffset.value=new be(i.uniform(0,100),i.uniform(0,100)),j.uniforms.shapeVariation.value=i.uniform(-1,1),j.uniforms.lightDirection.value=this.material.uniforms.lightDirection.value.clone(),j.uniforms.lightPosition.value=this.material.uniforms.lightPosition.value.clone();const O=new ye(v,j);O.userData.isAtmosphericCloud=!0,O.userData.planetNormal=E.clone(),this.clouds.push(O),this.cloudSystem.add(O)}}createMaterial(){return new me({vertexShader:Be.vertexShader,fragmentShader:Be.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},cloudColor:{value:new f(16777215)},density:{value:this.params.density},noiseOffset:{value:new be(0,0)},shapeVariation:{value:0},lightDirection:{value:new P(1,1,1).normalize()},lightPosition:{value:new P(0,0,0)}},transparent:!0,blending:Ne,depthWrite:!1,side:Se})}addToScene(e,t){t&&this.cloudSystem.position.copy(t),e.add(this.cloudSystem)}update(e,t){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.clouds.forEach(a=>{const r=a.material;r.uniforms.time.value=i}),this.cloudSystem.rotation.y=i*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},this.clouds.forEach(t=>{const o=t.material;e.opacity!==void 0&&(o.uniforms.opacity.value=e.opacity),e.movementAmplitude!==void 0&&(o.uniforms.movementAmplitude.value=e.movementAmplitude)})}updateLightPosition(e){this.clouds.forEach(t=>{const o=t.material;o.uniforms.lightPosition&&o.uniforms.lightPosition.value.copy(e)})}updateLightDirection(e){this.clouds.forEach(t=>{const o=t.material;o.uniforms.lightDirection&&o.uniforms.lightDirection.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function Xe(s,e,t){const o=e.clouds||[];if(o.length===0){const c=t||Math.floor(Math.random()*1e6),d=new V(c+4e3),h={color:new f(1,1,1),cloudCount:15,size:.6,opacity:.7,density:.8,seed:c,rotationSpeed:.005,movementAmplitude:.02,puffiness:1.5,timeSpeed:d.uniform(W.TIME_SPEED.min,W.TIME_SPEED.max)};return new Be(s,h)}const i=t||Math.floor(Math.random()*1e6),a=new V(i+4e3),r={color:new f(16777215),cloudCount:o.length,size:a.uniform(W.SIZE.min,W.SIZE.max),opacity:a.uniform(W.OPACITY.min,W.OPACITY.max),density:a.uniform(W.DENSITY.min,W.DENSITY.max),seed:i,rotationSpeed:a.uniform(W.ROTATION_SPEED.min,W.ROTATION_SPEED.max),movementAmplitude:a.uniform(W.MOVEMENT_AMPLITUDE.min,W.MOVEMENT_AMPLITUDE.max),puffiness:a.uniform(W.PUFFINESS.min,W.PUFFINESS.max),timeSpeed:a.uniform(W.TIME_SPEED.min,W.TIME_SPEED.max),cloudsFromPython:o};return new Be(s,r)}class Ct{landGroup;lands=[];constructor(e,t={}){this.landGroup=new ze;const o=t.seed||Math.floor(Math.random()*1e6),i=new V(o);t.greenPatches&&t.greenPatches.length>0?this.generateLandsFromPython(e,t.greenPatches,i,t):this.generateProceduralLands(e,i,t)}generateLandsFromPython(e,t,o,i){t.forEach((a,r)=>{let c=a.position_3d||a.position||[0,0,1];if(c.length===2){const I=o.uniform(0,Math.PI*2),z=Math.acos(o.uniform(-1,1));c=[Math.sin(z)*Math.cos(I),Math.sin(z)*Math.sin(I),Math.cos(z)]}const d=(a.size||.1)*e*1.8;Math.max(8,Math.min(a.sides||20,12));let h=new f(4881497),n=1;a.color&&Array.isArray(a.color)&&(h=new f(a.color[0],a.color[1],a.color[2]),a.color.length>3&&(n=a.color[3]));const u=Math.max(24,Math.min(64,Math.floor(d*32))),p=new P(c[0],c[1],c[2]).normalize(),g=new P,v=new P;Math.abs(p.y)<.99?g.crossVectors(p,new P(0,1,0)).normalize():g.crossVectors(p,new P(1,0,0)).normalize(),v.crossVectors(p,g).normalize();const M=2/Math.max(d*.05,1),E=(I,z)=>{let L=0,Z=1,ee=M,he=0;const te=Math.min(5,Math.max(3,Math.floor(d/40)+2));for(let ue=0;ue<te;ue++){const pe=I*ee,xe=z*ee,ge=(Ee,lt)=>{const Ze=Ee*12.9898+lt*78.233;return Math.sin(Ze+o.uniform(0,1e3))*43758.5453%1},_e=Math.floor(pe),le=Math.floor(xe),Te=pe-_e,we=xe-le,ne=Ee=>Ee*Ee*Ee*(Ee*(Ee*6-15)+10),Pe=ne(Te),Re=ne(we),He=ge(_e,le),$e=ge(_e+1,le),rt=ge(_e,le+1),Le=ge(_e+1,le+1),Ie=He*(1-Pe)+$e*Pe,ft=rt*(1-Pe)+Le*Pe,je=Ie*(1-Re)+ft*Re;L+=je*Z,he+=Z,Z*=.5,ee*=2.2}return L/he},b=[],m=[],_=[],N=.35,T=new Map,S=new Map;let j=0;for(let I=0;I<=u;I++)for(let z=0;z<=u;z++){const L=(I/u-.5)*2,Z=(z/u-.5)*2,ee=Math.sqrt(L*L+Z*Z),he=E(L*2,Z*2);if(1-ee*.5+he*.6>N&&ee<1.2){const ue=L*d,pe=Z*d,ge=new P().addScaledVector(g,ue).addScaledVector(v,pe).addScaledVector(p,0);b.push(ge.x,ge.y,ge.z),_.push((L+1)*.5,(Z+1)*.5),T.set(`${I},${z}`,j),S.set(`${I},${z}`,he),j++}}for(let I=0;I<u;I++)for(let z=0;z<u;z++){const L=T.get(`${I},${z}`),Z=T.get(`${I+1},${z}`),ee=T.get(`${I},${z+1}`),he=T.get(`${I+1},${z+1}`);L!==void 0&&Z!==void 0&&ee!==void 0&&m.push(L,Z,ee),Z!==void 0&&he!==void 0&&ee!==void 0&&m.push(Z,he,ee)}const O=new Ce;O.setAttribute("position",new St(b,3)),O.setAttribute("uv",new St(_,2)),O.setIndex(m),O.computeVertexNormals();const R=O.attributes.position,Y=p.clone().multiplyScalar(e),w=new P;for(let I=0;I<R.count;I++){w.fromBufferAttribute(R,I);const L=w.clone().add(Y).clone().normalize(),Z=O.attributes.uv;if(Z){const ee=Z.getX(I)*2-1,he=Z.getY(I)*2-1,te=Math.sqrt(ee*ee+he*he),ue=E(ee*2,he*2),xe=Math.max(0,1-Math.pow(te,.7))*.5+ue*.5,_e=(Ie=>Ie*Ie*(3-2*Ie))(xe),Te=e*1.01-e,we=d*.15,ne=Math.min(we,Te*.9),Pe=e*.002,Re=e+Pe,He=e+Pe+ne,$e=Wt.lerp(Re,He,_e),Le=L.multiplyScalar($e).sub(Y);R.setXYZ(I,Le.x,Le.y,Le.z)}}R.needsUpdate=!0,O.computeVertexNormals(),O.translate(Y.x,Y.y,Y.z);const F=new _t({color:i.transparentMode?new f(15135743):h,opacity:i.transparentMode?.3:n,transparent:i.transparentMode||n<1,emissive:i.transparentMode?new f(13428479).multiplyScalar(.1):h.clone().multiplyScalar(.05),emissiveIntensity:i.transparentMode?.05:1e-7,shininess:i.transparentMode?30:8,flatShading:!1,bumpScale:.002}),k=document.createElement("canvas");k.width=k.height=64;const G=k.getContext("2d"),Q=G.createImageData(64,64);for(let I=0;I<Q.data.length;I+=4){const z=o.uniform(.8,1.2),L=Math.floor(128*z);Q.data[I]=L,Q.data[I+1]=L,Q.data[I+2]=L,Q.data[I+3]=255}G.putImageData(Q,0,0);const $=new fo(k);$.wrapS=$.wrapT=po,$.repeat.set(2,2),F.bumpMap=$;const q=new ye(O,F);q.castShadow=!0,q.receiveShadow=!0,this.lands.push(q),this.landGroup.add(q)})}generateProceduralLands(e,t,o){const i=Math.floor(t.uniform(5,15));for(let a=0;a<i;a++){const r=t.uniform(0,Math.PI*2),c=Math.acos(t.uniform(-1,1)),d=new P(Math.sin(c)*Math.cos(r),Math.sin(c)*Math.sin(r),Math.cos(c)),h=e*t.uniform(.02,.08),n=new go(h,16),u=d.clone().multiplyScalar(e*1);n.lookAt(d),n.translate(u.x,u.y,u.z);const p=t.uniform(.3,.7),g=new f(.36*(1-p)+.22*p,.23*(1-p)+.36*p,0),M=o.tundraMode||!1?.25:1,E=new _t({color:o.transparentMode?new f(15135743):g,opacity:o.transparentMode?.3:M,transparent:o.transparentMode||M<1,emissive:o.transparentMode?new f(13428479).multiplyScalar(.1):657920,shininess:o.transparentMode?30:5}),b=new ye(n,E);this.lands.push(b),this.landGroup.add(b)}}addToScene(e,t){t&&this.landGroup.position.copy(t),e.add(this.landGroup)}update(e){}getObject3D(){return this.landGroup}dispose(){this.lands.forEach(e=>{e.geometry.dispose(),e.material instanceof Ye&&e.material.dispose()}),this.lands=[],this.landGroup.clear()}}function vt(s,e,t){const o=e.green_patches;if(!o||o.length===0)return null;const i=t||Math.floor(Math.random()*1e6);return new Ct(s,{greenPatches:o,seed:i+6e3})}function $o(s,e,t){const o=t||Math.floor(Math.random()*1e6),i=new V(o+7e3),a=Math.floor(i.uniform(3,8)),r=[];for(let c=0;c<a;c++){const d=i.uniform(0,Math.PI*2),h=Math.acos(i.uniform(-1,1));r.push({position_3d:[Math.sin(h)*Math.cos(d),Math.sin(h)*Math.sin(d),Math.cos(h)],size:i.uniform(.05,.15),sides:Math.floor(i.uniform(8,16)),color:[0,0,0]})}return console.log(`🧊 Creating ${a} transparent ice formations for Icy planet with seed ${o+7e3}`),new Ct(s,{greenPatches:r,seed:o+7e3,transparentMode:!0})}class Zo{featuresGroup;crystals=[];cracks=[];iceCaps=[];planetRadius;constructor(e,t={}){this.featuresGroup=new ze,this.planetRadius=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new V(o);t.crystals&&t.crystals.length>0&&this.generateCrystals(t.crystals,i),t.cracks&&t.cracks.length>0&&this.generateCracks(t.cracks),t.iceCaps&&t.iceCaps.length>0&&this.generateIceCaps(t.iceCaps,i)}generateCrystals(e,t){e.forEach(o=>{const i=o.position||[0,0],a=(o.width||.05)*this.planetRadius*.8,r=(o.length||.1)*this.planetRadius*.08,c=o.angle||0,d=o.color||[172/255,215/255,230/255,1],h=this.planetRadius*.015,n=Math.max(r,h),u=new vo(a*2,n,a*1.5,4,2,4),p=u.attributes.position,g=new P;for(let $=0;$<p.count;$++){if(g.fromBufferAttribute(p,$),Math.abs(g.y)>n*.3){const q=Math.atan2(g.z,g.x),I=Math.sqrt(g.x*g.x+g.z*g.z),z=Math.round(q/(Math.PI/3))*(Math.PI/3),L=t.uniform(.8,1.2),Z=I*L;g.x=Math.cos(z)*Z,g.z=Math.sin(z)*Z,g.y+=t.uniform(-n*.1,n*.1)}p.setXYZ($,g.x,g.y,g.z)}p.needsUpdate=!0,u.computeVertexNormals();const v=new Nt({color:new f(d[0],d[1],d[2]),transparent:!0,opacity:.8,metalness:0,roughness:.02,clearcoat:1,clearcoatRoughness:0,transmission:.7,ior:1.31,thickness:.5,emissive:new f(d[0],d[1],d[2]),emissiveIntensity:.02,flatShading:!1,side:Se}),M=new ye(u,v);let E=Math.min(1,Math.max(-1,i[1]));const b=Math.pow(Math.abs(E),.3),m=Math.sign(E)*b,_=t.uniform(-.3,.3)*(1-Math.abs(m)),N=Math.min(1,Math.max(-1,m+_)),T=Math.acos(Math.abs(N)),S=Math.atan2(i[0],.001)+c,j=this.planetRadius*t.uniform(1.0005,1.001),O=j*Math.sin(T)*Math.cos(S),R=j*N,Y=j*Math.sin(T)*Math.sin(S);M.position.set(O,R,Y);const w=M.position.clone().normalize(),F=new P,k=new P;Math.abs(w.x)<.9?F.set(1,0,0):F.set(0,1,0),F.crossVectors(F,w).normalize(),k.crossVectors(w,F).normalize();const G=new $t;G.makeBasis(F,w,k),M.rotation.setFromRotationMatrix(G),M.rotateY(t.uniform(0,Math.PI*2));const Q=t.uniform(.8,1.2);M.scale.set(Q,Q,Q),this.crystals.push(M),this.featuresGroup.add(M)})}generateCracks(e){const t=new V(42);e.forEach(o=>{const i=o.angle||0,a=(o.length||1)*this.planetRadius*2,r=o.color||[80/255,80/255,80/255,.4],c=(o.width||1)*5e-4*this.planetRadius,d=t.uniform(.6,1),h=t.uniform(0,1)>.5?1:-1,n=Math.acos(d*h),u=[],p=20;for(let b=0;b<=p;b++){const m=b/p,_=Math.sin(m*Math.PI)*.1,T=i+(m-.5)*a/(this.planetRadius*Math.sin(Math.abs(n)))+_,S=this.planetRadius*1.002*Math.sin(Math.abs(n))*Math.cos(T),j=this.planetRadius*1.002*Math.cos(Math.abs(n))*h,O=this.planetRadius*1.002*Math.sin(Math.abs(n))*Math.sin(T);u.push(new P(S,j,O))}const g=new yo(u),v=new xo(g,p*2,c,8,!1),M=new _t({color:new f(r[0],r[1],r[2]),transparent:!0,opacity:r[3]||.4,emissive:new f(0,0,0),shininess:5}),E=new ye(v,M);this.cracks.push(E),this.featuresGroup.add(E)})}generateIceCaps(e,t){e.forEach(o=>{const i=o.position||[0,0],a=(o.radius||.3)*this.planetRadius,r=o.color||[.678,.847,1,.8],c=Math.atan2(i[1],i[0]),d=Math.acos(Math.min(1,Math.max(-1,Math.sqrt(i[0]**2+i[1]**2)))),h=this.planetRadius*1.002*Math.sin(d)*Math.cos(c),n=this.planetRadius*1.002*Math.cos(d),u=this.planetRadius*1.002*Math.sin(d)*Math.sin(c),p=new P(h,n,u),g=p.clone().normalize(),v=new ze,M=Math.floor(t.uniform(8,20));for(let E=0;E<M;E++){const b=t.uniform(0,Math.PI*2),m=t.uniform(0,a*.8),_=Math.cos(b)*m,N=Math.sin(b)*m,T=new P,S=new P;Math.abs(g.y)<.99?T.crossVectors(g,new P(0,1,0)).normalize():T.crossVectors(g,new P(1,0,0)).normalize(),S.crossVectors(g,T).normalize();const R=p.clone().addScaledVector(T,_).addScaledVector(S,N).normalize().multiplyScalar(this.planetRadius*t.uniform(1.002,1.008)),Y=t.uniform(a*.05,a*.15),w=t.uniform(Y*.4,Y*4),F=new bo(Y,w,6,1,!1),k=F.attributes.position,G=new P;for(let I=0;I<k.count;I++)if(G.fromBufferAttribute(k,I),G.y>.1&&G.y<w*.9){const z=Math.atan2(G.z,G.x),L=Math.sqrt(G.x*G.x+G.z*G.z),Z=Math.round(z/(Math.PI/3))*(Math.PI/3),ee=L*1.1;G.x=Math.cos(Z)*ee,G.z=Math.sin(Z)*ee,k.setXYZ(I,G.x,G.y,G.z)}k.needsUpdate=!0,F.computeVertexNormals();const Q=new Nt({color:new f(r[0],r[1],r[2]),transparent:!0,opacity:.85,metalness:0,roughness:.05,clearcoat:1,clearcoatRoughness:0,transmission:.6,ior:1.31,thickness:.8,emissive:new f(r[0],r[1],r[2]),emissiveIntensity:.03,flatShading:!0,side:Se}),$=new ye(F,Q);$.position.copy(R),$.lookAt(0,0,0),$.rotateX(Math.PI/2),$.rotateZ(t.uniform(0,Math.PI*2));const q=t.uniform(.7,1.3);$.scale.set(q,q,q),v.add($),this.iceCaps.push($)}this.featuresGroup.add(v)})}addToScene(e,t){t&&this.featuresGroup.position.copy(t),e.add(this.featuresGroup)}update(){}getObject3D(){return this.featuresGroup}dispose(){this.crystals.forEach(e=>{e.geometry.dispose(),e.material instanceof Ye&&e.material.dispose()}),this.cracks.forEach(e=>{e.geometry.dispose(),e.material instanceof Ye&&e.material.dispose()}),this.iceCaps.forEach(e=>{e.geometry.dispose(),e.material instanceof Ye&&e.material.dispose()}),this.crystals=[],this.cracks=[],this.iceCaps=[],this.featuresGroup.clear()}}function zt(s,e,t){const o=e.crystals,i=e.cracks,a=e.ice_caps;if(!o&&!i&&!a)return null;const r=t||Math.floor(Math.random()*1e6);return new Zo(s,{crystals:o||[],cracks:i||[],iceCaps:a||[],seed:r+9e3})}class Kt{snowflakeGroup;planetRadius;materials=[];particleSystems=[];trailPositions=[];trailColors=[];globalWindDirection;rng;startTime;timeSpeed;trailLength=15;particleCount;rotationSpeed;particleOpacity;windSpeedMultiplier;verticalOscillation;gustCycles;gustPhases;gustZones;burstZone;burstCycleDuration;burstDuration;burstStartOffset;constructor(e,t={}){this.snowflakeGroup=new ze,this.planetRadius=e;const o=t.seed||Math.floor(Math.random()*1e6);this.rng=new V(o),this.particleCount=t.particleCount||10,t.windSpeed;const i=(t.size||1)*(e*.2),a=t.opacity||1;this.globalWindDirection=this.rng.uniform(0,Math.PI*2),this.startTime=this.rng.uniform(0,1e3),this.timeSpeed=this.rng.uniform(2,4),this.rotationSpeed=this.rng.uniform(.2,.8),this.particleOpacity=this.rng.uniform(.05,.25),this.windSpeedMultiplier=this.rng.uniform(1.1,2.5),this.verticalOscillation=this.rng.uniform(.1,.4),this.gustCycles=[],this.gustPhases=[],this.gustZones=[];for(let c=0;c<this.particleCount;c++){this.gustCycles.push(this.rng.uniform(15,30)),this.gustPhases.push(this.rng.uniform(0,1));const d=this.rng.uniform(0,Math.PI*2),h=this.rng.uniform(Math.PI*.3,Math.PI*.6);this.gustZones.push({start:d,end:(d+h)%(Math.PI*2)})}this.burstZone={lat:this.rng.uniform(-Math.PI/3,Math.PI/3),lon:this.rng.uniform(0,Math.PI*2),radius:this.rng.uniform(1.2,2)},this.burstCycleDuration=this.rng.uniform(45,75),this.burstDuration=this.rng.uniform(8,15),this.burstStartOffset=this.rng.uniform(0,this.burstCycleDuration);const r=t.colors||[new f(1,1,1),new f(.9,.9,.9),new f(.7,.7,.7),new f(.5,.5,.5),new f(.3,.3,.3)];this.createSnowflakeSystem(this.particleCount,i,a,r)}createSnowflakeSystem(e,t,o,i){const a=[];for(let d=0;d<e;d++){let h,n,u,p=0;do{const b=(this.rng.uniform(-1,1)+this.rng.uniform(-1,1))*.2,m=this.rng.uniform(-1,1)*this.burstZone.radius;h=Math.max(0,Math.min(Math.PI,this.burstZone.lat+Math.PI/2+b)),n=(this.burstZone.lon+m)%(Math.PI*2);const _=Math.abs(h-(this.burstZone.lat+Math.PI/2)),N=Math.min(Math.abs(n-this.burstZone.lon),Math.PI*2-Math.abs(n-this.burstZone.lon));u=Math.max(_/.3,N/this.burstZone.radius),p++}while(u>1&&p<10);u>1&&(h=this.burstZone.lat+Math.PI/2+this.rng.uniform(-.1,.1),n=this.burstZone.lon+this.rng.uniform(-this.burstZone.radius,this.burstZone.radius));const g=this.planetRadius*this.rng.uniform(1.001,1.005),v=g*Math.sin(h)*Math.cos(n),M=g*Math.cos(h),E=g*Math.sin(h)*Math.sin(n);a.push(v,M,E)}const r=[],c=new f;for(let d=0;d<this.trailLength;d++){const h=Math.pow(1-d/(this.trailLength-1),1.5);c.setRGB(h,h,h),r.push(c.r,c.g,c.b)}for(let d=0;d<e;d++){const h=d*3,n=a[h],u=a[h+1],p=a[h+2],g=new Float32Array(this.trailLength*3);for(let b=0;b<this.trailLength;b++){const m=b*.1;g[b*3]=n+this.rng.uniform(-1,1)*m*this.planetRadius*.01,g[b*3+1]=u+this.rng.uniform(-1,1)*m*this.planetRadius*.01,g[b*3+2]=p+this.rng.uniform(-1,1)*m*this.planetRadius*.01}const v=new Ce;v.setAttribute("position",new ie(g,3)),v.setAttribute("color",new ie(new Float32Array(r),3));const M=new wt({vertexColors:!0,transparent:!0,opacity:this.particleOpacity,blending:Ne,depthTest:!0,linewidth:3}),E=new Et(v,M);this.materials.push(M),this.particleSystems.push(E),this.trailPositions.push(g),this.trailColors.push(new Float32Array(r)),E.rnd=this.rng.uniform(0,1),E.particleIndex=d,this.snowflakeGroup.add(E)}}update(e=.016){const o=(this.startTime+Date.now()/1e3*this.timeSpeed)%1e3,a=(Date.now()/1e3+this.burstStartOffset)%this.burstCycleDuration;let r=0;if(a<this.burstDuration){const c=a/this.burstDuration;c<.2?r=c/.2:c>.8?r=(1-c)/.2:r=1}this.snowflakeGroup.visible=!0,Math.floor(a)%5===0&&a%1<.1&&console.log("❄️ Burst Debug:",{burstTime:Math.round(a),burstIntensity:Math.round(r*100)/100,cycleDuration:Math.round(this.burstCycleDuration),burstDuration:Math.round(this.burstDuration)}),this.particleSystems.forEach((c,d)=>{const h=c.geometry.getAttribute("position"),n=h.array,u=c.rnd,p=c.particleIndex,g=this.calculateTrailPath(o,p,u);for(let O=this.trailLength-1;O>0;O--){const R=O*3,Y=(O-1)*3;n[R]=n[Y],n[R+1]=n[Y+1],n[R+2]=n[Y+2]}n[0]=g.x,n[1]=g.y,n[2]=g.z,h.needsUpdate=!0;const v=Date.now()/1e3,M=this.gustCycles[d],E=this.gustPhases[d],b=(v/M+E)%1;let m=0;b<.3?m=b/.3:b<.7?m=1:m=(1-b)/.3;const _=new P(n[0],n[1],n[2]),N=Math.atan2(_.z,_.x),T=N<0?N+Math.PI*2:N,S=this.gustZones[d];let j=!1;S.start<S.end?j=T>=S.start&&T<=S.end:j=T>=S.start||T<=S.end,this.materials[d].opacity=j?this.particleOpacity*m:0})}calculateTrailPath(e,t,o){e+=10*o+t*.1;const i=this.burstZone.lon+(o-.5)*this.burstZone.radius,a=this.burstZone.lat+Math.PI/2+(o-.5)*.2,r=this.windSpeedMultiplier,c=e*r,d=i+Math.cos(this.globalWindDirection)*c,h=a+this.verticalOscillation*Math.sin(e*.5+o),n=.015*Math.sin(e*2+o*10),u=this.planetRadius*(1.005+n),p=u*Math.sin(h)*Math.cos(d),g=u*Math.cos(h),v=u*Math.sin(h)*Math.sin(d);return{x:p,y:g,z:v}}addToScene(e,t){t&&this.snowflakeGroup.position.copy(t),e.add(this.snowflakeGroup)}getObject3D(){return this.snowflakeGroup}dispose(){this.materials.forEach(e=>e.dispose()),this.particleSystems.forEach(e=>e.geometry.dispose()),this.materials=[],this.particleSystems=[],this.trailPositions=[],this.trailColors=[],this.snowflakeGroup.clear()}}function jt(s,e,t){if(e.type!=="tundra")return null;const o=t||Math.floor(Math.random()*1e6),i=e.snow_intensity||.7,a=e.wind_strength||1,r=Math.floor(i*200+50),c=a*5;return new Kt(s,{particleCount:r,windSpeed:c,size:1.2,opacity:.9,seed:o+15e3})}const se={PARTICLE_COUNT:{min:60,max:150},PHASE_INTENSITY:{min:.4,max:.9},TRANSITION_SPEED:{min:1,max:4},COHERENCE_LEVEL:{min:.2,max:.7},TIME_SPEED:{min:.6,max:2.2},PHASE_STATES:{min:3,max:6}};class et{phaseSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6),i=new V(o);this.startTime=o%1e4/1e3,this.params={particleCount:t.particleCount||Math.floor(i.uniform(se.PARTICLE_COUNT.min,se.PARTICLE_COUNT.max)),phaseIntensity:t.phaseIntensity||i.uniform(se.PHASE_INTENSITY.min,se.PHASE_INTENSITY.max),transitionSpeed:t.transitionSpeed||i.uniform(se.TRANSITION_SPEED.min,se.TRANSITION_SPEED.max),coherenceLevel:t.coherenceLevel||i.uniform(se.COHERENCE_LEVEL.min,se.COHERENCE_LEVEL.max),timeSpeed:t.timeSpeed||i.uniform(se.TIME_SPEED.min,se.TIME_SPEED.max),phaseStates:t.phaseStates||Math.floor(i.uniform(se.PHASE_STATES.min,se.PHASE_STATES.max)),seed:o},this.particleCount=this.params.particleCount,this.geometry=new Ce,this.material=this.createMaterial(),this.generatePhaseParticles(e),this.phaseSystem=new st(this.geometry,this.material)}generatePhaseParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),i=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),r=new Float32Array(this.particleCount),c=new Float32Array(this.particleCount),d=this.params.seed||Math.floor(Math.random()*1e6),h=new V(d);for(let n=0;n<this.particleCount;n++){const u=e*h.uniform(1.1,1.9),p=h.spherePosition(u);t[n*3]=p.x,t[n*3+1]=p.y,t[n*3+2]=p.z,o[n]=h.uniform(.8,2);const g=h.spherePosition(1);i[n*3]=g.x,i[n*3+1]=g.y,i[n*3+2]=g.z,a[n]=h.uniform(.1,1),r[n]=h.uniform(0,this.params.phaseStates),c[n]=h.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new ie(t,3)),this.geometry.setAttribute("size",new ie(o,1)),this.geometry.setAttribute("phaseVector",new ie(i,3)),this.geometry.setAttribute("coherenceFactor",new ie(a,1)),this.geometry.setAttribute("phaseState",new ie(r,1)),this.geometry.setAttribute("transitionPhase",new ie(c,1))}createMaterial(){return new me({vertexShader:et.vertexShader,fragmentShader:et.fragmentShader,uniforms:{time:{value:0},phaseIntensity:{value:this.params.phaseIntensity},transitionSpeed:{value:this.params.transitionSpeed},coherenceLevel:{value:this.params.coherenceLevel},phaseStates:{value:this.params.phaseStates}},transparent:!0,blending:We,depthWrite:!1})}addToScene(e,t){t&&this.phaseSystem.position.copy(t),e.add(this.phaseSystem)}update(e){const o=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=o,this.phaseSystem.rotation.x+=e*.12*Math.cos(o*.3),this.phaseSystem.rotation.y+=e*.08*Math.sin(o*.5),this.phaseSystem.rotation.z+=e*.06*Math.cos(o*.7)}getObject3D(){return this.phaseSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Xo(s,e,t){const o=t||Math.floor(Math.random()*1e6),i=new V(o+9e3),a={particleCount:Math.floor(i.uniform(se.PARTICLE_COUNT.min,se.PARTICLE_COUNT.max)),phaseIntensity:i.uniform(se.PHASE_INTENSITY.min,se.PHASE_INTENSITY.max),transitionSpeed:i.uniform(se.TRANSITION_SPEED.min,se.TRANSITION_SPEED.max),coherenceLevel:i.uniform(se.COHERENCE_LEVEL.min,se.COHERENCE_LEVEL.max),timeSpeed:i.uniform(se.TIME_SPEED.min,se.TIME_SPEED.max),phaseStates:Math.floor(i.uniform(se.PHASE_STATES.min,se.PHASE_STATES.max)),seed:o};return new et(s,a)}class tt{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;constructor(e,t=new f(16753920)){this.baseMesh=e;const o=e.geometry;this.planetRadius=o.parameters.radius||1;const i=t instanceof f?t:new f(t);this.baseMaterial=new me({vertexShader:tt.baseVertexShader,fragmentShader:tt.baseFragmentShader,uniforms:{baseColor:{value:i},lightDirection:{value:new P(1,1,1).normalize()},lightPosition:{value:new P(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:Se}),this.baseMesh.material=this.baseMaterial}addEffectLayer(e,t,o=1.001,i){const a=new nt(this.planetRadius*o,256,256),r=new ye(a,t);return r.position.copy(this.baseMesh.position),r.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:r,material:t,layerObject:i}),this.scene&&this.scene.add(r),r}createCloudBandsLayerMaterial(e){const t=`
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
    `;return new me({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new f(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new P(1,1,1).normalize()},opacity:{value:e.opacity||.4}},transparent:!0,blending:Ne,side:Se,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,i=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((a,r)=>{r<5&&(i[r*2]=a.x,i[r*2+1]=a.y)}),new me({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new f(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:i},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new P(1,1,1).normalize()}},transparent:!0,blending:Ne,side:Se,depthWrite:!1})}createMetallicSurfaceLayerMaterial(e){const t=`
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
    `;return new me({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},metalColor:{value:e.color||new f(8421504)},metalness:{value:e.metalness||.8},roughness:{value:e.roughness||.4},fragmentationIntensity:{value:e.fragmentationIntensity||.5},opacity:{value:e.opacity||.8},lightDirection:{value:new P(1,1,1).normalize()},lightPosition:{value:new P(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3},crystalScale:{value:e.crystalScale||80}},transparent:!0,blending:Ne,side:Se,depthWrite:!1})}createIcyTerrainLayerMaterial(e){const t=`
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
    `;return new me({vertexShader:t,fragmentShader:o,uniforms:{time:{value:0},iceColor:{value:e.color||new f(11591910)},iceReflectivity:{value:e.iceReflectivity||.8},frostDensity:{value:e.frostDensity||.5},crackIntensity:{value:e.crackIntensity||.4},opacity:{value:e.opacity||.7},crystalScale:{value:e.crystalScale||25},crystalDensity:{value:e.crystalDensity||.6},crystalSharpness:{value:e.crystalSharpness||150},frostPattern:{value:e.frostPattern||12},lightDirection:{value:new P(1,1,1).normalize()},lightPosition:{value:new P(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:Se,depthWrite:!1})}addToScene(e){this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&e.add(t.mesh)}),this.effectLayers.length}update(e,t){this.effectLayers.forEach(o=>{if(o.material.uniforms.time&&(o.material.uniforms.time.value+=e),t!==void 0&&o.material.uniforms.rotationAngle&&(o.material.uniforms.rotationAngle.value=t),o.layerObject&&o.layerObject.update)try{o.layerObject.update(e,t)}catch(i){console.error(`Error updating layer ${o.name}:`,i)}o.mesh&&o.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof f?e:new f(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}createGenericLayerMaterial(e,t,o,i=!0,a=Ne){return o.lightDirection||(o.lightDirection={value:new P(1,1,1).normalize()}),o.lightPosition||(o.lightPosition={value:new P(0,0,0)}),new me({vertexShader:e,fragmentShader:t,uniforms:o,transparent:i,blending:a,side:Se,depthWrite:!1})}convertEffectToLayer(e,t,o=1.001){if(t instanceof me){const i=t.clone();return i.transparent=!0,i.depthWrite=!1,i.uniforms.lightDirection||(i.uniforms.lightDirection={value:new P(1,1,1).normalize()}),this.addEffectLayer(e,i,o)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}getLayerMeshes(){const e={};return this.effectLayers.forEach(t=>{t.name&&t.mesh&&(e[t.name]=t.mesh)}),e}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const ae={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4}};class qo{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new V(o),a=t.numBands||Math.floor(i.uniform(ae.NUM_BANDS.min,ae.NUM_BANDS.max));this.params={numBands:a,bandPositions:t.bandPositions||this.generateDefaultBandPositions(a,o),bandWidths:t.bandWidths||this.generateDefaultBandWidths(a,o),rotationAngle:t.rotationAngle||i.uniform(ae.ROTATION_ANGLE.min,ae.ROTATION_ANGLE.max),baseColor:t.baseColor||new f(16753920),bandColor:t.bandColor||new f(16747520),animationSpeed:t.animationSpeed||i.uniform(ae.ANIMATION_SPEED.min,ae.ANIMATION_SPEED.max),turbulence:t.turbulence||i.uniform(ae.TURBULENCE.min,ae.TURBULENCE.max),noiseScale:t.noiseScale||i.uniform(ae.NOISE_SCALE.min,ae.NOISE_SCALE.max),opacity:t.opacity||.4,seed:o},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const o=new Array(20).fill(0),i=new V(t+12345);for(let a=0;a<e&&a<20;a++)o[a]=i.uniform(ae.BAND_POSITIONS.min,ae.BAND_POSITIONS.max);return o}generateDefaultBandWidths(e,t){const o=new Array(20).fill(0),i=new V(t+67890);for(let a=0;a<e&&a<20;a++)o[a]=i.uniform(ae.BAND_WIDTHS.min,ae.BAND_WIDTHS.max);return o}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity)}dispose(){}}function Ft(s,e,t){const o=e.cloud_bands||{},i=t||Math.floor(Math.random()*1e6),a=new V(i+4e3),r={numBands:o.num_bands||Math.floor(a.uniform(ae.NUM_BANDS.min,ae.NUM_BANDS.max)),bandPositions:o.positions||void 0,bandWidths:o.widths||void 0,rotationAngle:o.rotation||a.uniform(ae.ROTATION_ANGLE.min,ae.ROTATION_ANGLE.max),baseColor:e.base_color?new f().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new f(16753920),bandColor:new f(16777215),animationSpeed:a.uniform(ae.ANIMATION_SPEED.min,ae.ANIMATION_SPEED.max),turbulence:e.turbulence||a.uniform(ae.TURBULENCE.min,ae.TURBULENCE.max),noiseScale:a.uniform(ae.NOISE_SCALE.min,ae.NOISE_SCALE.max),opacity:.4,seed:i};return new qo(s,r)}const re={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.2,max:.6}};class Ko{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new V(o);this.params={stormCenters:t.stormCenters||this.generateStormCenters(o),stormColor:t.stormColor||new f(9109504),stormIntensity:t.stormIntensity||i.uniform(re.STORM_INTENSITY.min,re.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||i.uniform(re.SPIRAL_SPEED.min,re.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||i.uniform(re.ANIMATION_SPEED.min,re.ANIMATION_SPEED.max),opacity:t.opacity||i.uniform(re.OPACITY.min,re.OPACITY.max),seed:o},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new V(e+5e3),o=Math.floor(t.uniform(re.STORM_COUNT.min,re.STORM_COUNT.max)),i=[];for(let a=0;a<o;a++)i.push({x:t.uniform(re.STORM_CENTERS.min,re.STORM_CENTERS.max),y:t.uniform(re.STORM_CENTERS.min,re.STORM_CENTERS.max)});return i}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function kt(s,e,t){const o=e.storms||{},i=t||Math.floor(Math.random()*1e6),a=new V(i+5e3),r={stormCenters:o.centers||void 0,stormColor:new f(9109504),stormIntensity:o.intensity||e.storm_intensity||a.uniform(re.STORM_INTENSITY.min,re.STORM_INTENSITY.max),spiralSpeed:o.spiral_speed||a.uniform(re.SPIRAL_SPEED.min,re.SPIRAL_SPEED.max),animationSpeed:a.uniform(re.ANIMATION_SPEED.min,re.ANIMATION_SPEED.max),opacity:a.uniform(re.OPACITY.min,re.OPACITY.max),seed:i};return new Ko(s,r)}const fe={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class ut{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new V(o),a=t.color instanceof f?t.color:t.color?new f(t.color):new f(9127187);this.params={color:a,roughness:t.roughness||i.uniform(fe.ROUGHNESS.min,fe.ROUGHNESS.max),rockDensity:t.rockDensity||i.uniform(fe.ROCK_DENSITY.min,fe.ROCK_DENSITY.max)*10,craterCount:t.craterCount||i.uniform(fe.CRATER_COUNT.min,fe.CRATER_COUNT.max),opacity:t.opacity||i.uniform(fe.OPACITY.min,fe.OPACITY.max),seed:o},this.material=new me({vertexShader:ut.vertexShader,fragmentShader:ut.fragmentShader,uniforms:{time:{value:0},rockColor:{value:a},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new P(1,1,1).normalize()}},transparent:!0,side:Se,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function Jo(s,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,a=t||Math.floor(Math.random()*1e6),r=new V(a+8e3);return new ut(s,{color:i?new f(i):new f(9127187),roughness:o.roughness||r.uniform(fe.ROUGHNESS.min,fe.ROUGHNESS.max),rockDensity:o.rock_density||r.uniform(fe.ROCK_DENSITY.min,fe.ROCK_DENSITY.max)*10,craterCount:o.crater_count||r.uniform(fe.CRATER_COUNT.min,fe.CRATER_COUNT.max),opacity:r.uniform(fe.OPACITY.min,fe.OPACITY.max),seed:a})}const H={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9},CRYSTAL_SCALE:{min:15,max:35},CRYSTAL_DENSITY:{min:.4,max:.8},CRYSTAL_SHARPNESS:{min:100,max:250},FROST_PATTERN:{min:8,max:16}};class Qo{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new V(o),a=t.color instanceof f?t.color:t.color?new f(t.color):new f(11591910);this.params={color:a,iceReflectivity:t.iceReflectivity||i.uniform(H.ICE_REFLECTIVITY.min,H.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||i.uniform(H.FROST_DENSITY.min,H.FROST_DENSITY.max),crackIntensity:t.crackIntensity||i.uniform(H.CRACK_INTENSITY.min,H.CRACK_INTENSITY.max),opacity:t.opacity||i.uniform(H.OPACITY.min,H.OPACITY.max),crystalScale:t.crystalScale||i.uniform(H.CRYSTAL_SCALE.min,H.CRYSTAL_SCALE.max),crystalDensity:t.crystalDensity||i.uniform(H.CRYSTAL_DENSITY.min,H.CRYSTAL_DENSITY.max),crystalSharpness:t.crystalSharpness||i.uniform(H.CRYSTAL_SHARPNESS.min,H.CRYSTAL_SHARPNESS.max),frostPattern:t.frostPattern||i.uniform(H.FROST_PATTERN.min,H.FROST_PATTERN.max),seed:o},this.material=this.layerSystem.createIcyTerrainLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function ei(s,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,a=t||Math.floor(Math.random()*1e6),r=new V(a+6e3);return new Qo(s,{color:i?new f(i):new f(11591910),iceReflectivity:o.ice_reflectivity||r.uniform(H.ICE_REFLECTIVITY.min,H.ICE_REFLECTIVITY.max),frostDensity:o.frost_density||r.uniform(H.FROST_DENSITY.min,H.FROST_DENSITY.max),crackIntensity:o.crack_intensity||r.uniform(H.CRACK_INTENSITY.min,H.CRACK_INTENSITY.max),opacity:r.uniform(H.OPACITY.min,H.OPACITY.max),crystalScale:o.crystal_scale||r.uniform(H.CRYSTAL_SCALE.min,H.CRYSTAL_SCALE.max),crystalDensity:o.crystal_density||r.uniform(H.CRYSTAL_DENSITY.min,H.CRYSTAL_DENSITY.max),crystalSharpness:o.crystal_sharpness||r.uniform(H.CRYSTAL_SHARPNESS.min,H.CRYSTAL_SHARPNESS.max),frostPattern:o.frost_pattern||r.uniform(H.FROST_PATTERN.min,H.FROST_PATTERN.max),seed:a})}const ce={METALNESS:{min:.5,max:5},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.2,max:.9},CRYSTAL_SCALE:{min:17,max:230}};class ti{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const o=t.seed||Math.floor(Math.random()*1e6),i=new V(o),a=t.color instanceof f?t.color:t.color?new f(t.color):new f(8421504);this.params={color:a,metalness:t.metalness||i.uniform(ce.METALNESS.min,ce.METALNESS.max),roughness:t.roughness||i.uniform(ce.ROUGHNESS.min,ce.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||i.uniform(ce.FRAGMENTATION_INTENSITY.min,ce.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||i.uniform(ce.OPACITY.min,ce.OPACITY.max),seed:o,noiseScale:t.noiseScale||8,noiseIntensity:t.noiseIntensity||.3,crystalScale:t.crystalScale||i.uniform(ce.CRYSTAL_SCALE.min,ce.CRYSTAL_SCALE.max)},this.material=this.layerSystem.createMetallicSurfaceLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function oi(s,e,t){const o=e.surface||{},i=e.planet_info?.base_color||o.base_color,a=t||Math.floor(Math.random()*1e6),r=new V(a+7e3),c=r.uniform(.8,1.2);return new ti(s,{color:i?new f(i):new f(8421504),metalness:o.metalness||r.uniform(ce.METALNESS.min,ce.METALNESS.max),roughness:o.roughness||r.uniform(ce.ROUGHNESS.min,ce.ROUGHNESS.max),fragmentationIntensity:o.fragmentation||r.uniform(ce.FRAGMENTATION_INTENSITY.min,ce.FRAGMENTATION_INTENSITY.max),opacity:r.uniform(ce.OPACITY.min,ce.OPACITY.max),seed:a,noiseScale:4*c,noiseIntensity:.3,crystalScale:r.uniform(ce.CRYSTAL_SCALE.min,ce.CRYSTAL_SCALE.max)})}class Jt{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(e,t={}){const o=t.seed||Math.floor(Math.random()*1e6);this.rng=new V(o),this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||50,speed:t.speed||.5,size:t.size||1,opacity:t.opacity||.3,brightness:t.brightness||1,seed:o},this.particleCount=this.params.particleCount,this.geometry=new Ce,this.createParticles(e),this.createMaterial(),this.particleSystem=new st(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),i=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),r=e*1.3;for(let c=0;c<this.particleCount;c++){const d=this.rng.random()*Math.PI*2,h=this.rng.random()*2-1,n=this.rng.random(),u=Math.acos(h),p=r*Math.cbrt(n);t[c*3]=p*Math.sin(u)*Math.cos(d),t[c*3+1]=p*Math.sin(u)*Math.sin(d),t[c*3+2]=p*Math.cos(u),o[c]=this.params.size*(.5+this.rng.random()*.5),i[c]=this.params.speed*(.8+this.rng.random()*.4),a[c]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new ie(t,3)),this.geometry.setAttribute("size",new ie(o,1)),this.geometry.setAttribute("speed",new ie(i,1)),this.geometry.setAttribute("phase",new ie(a,1))}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),t=`
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
    `;this.material=new me({uniforms:{time:{value:0},color:{value:e},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:t,fragmentShader:o,transparent:!0,blending:We,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;const t=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*t}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f().setRGB(e.color[0],e.color[1],e.color[2]);this.material.uniforms.color.value=t}e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ut(s,e,t){const o=e.streaks||e,i={color:o.color||[.95,.95,1],particleCount:o.particleCount||30,speed:o.speed||.3,size:.8,opacity:.2,brightness:.8,seed:t||Math.floor(Math.random()*1e6)};return new Jt(s,i)}const K={STAR_COUNT:{min:150,max:450},MIN_BRIGHTNESS:{min:.4,max:.7},MAX_BRIGHTNESS:{min:.8,max:1},MIN_SIZE:{min:1.2,max:1.8},MAX_SIZE:{min:3.5,max:5},DISTANCE:{min:300,max:600},TWINKLE_SPEED:{min:.002,max:.008}};class ot{starSystem;material;geometry;params;starCount;static vertexShader=`
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
  `;constructor(e,t={}){const o=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6);console.log("🌟 StarFieldEffect - Using seed:",o,"from params:",t.seed);const i=new V(o+1e4);this.params={color:t.color||new f(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(i.uniform(K.STAR_COUNT.min,K.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:i.uniform(K.MIN_BRIGHTNESS.min,K.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:i.uniform(K.MAX_BRIGHTNESS.min,K.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:i.uniform(K.MIN_SIZE.min,K.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:i.uniform(K.MAX_SIZE.min,K.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:i.uniform(K.DISTANCE.min,K.DISTANCE.max),seed:o,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:i.uniform(K.TWINKLE_SPEED.min,K.TWINKLE_SPEED.max)},this.starCount=this.params.starCount,this.geometry=new Ce,this.material=this.createMaterial(),this.generateStars(e),this.starSystem=new st(this.geometry,this.material)}generateStars(e){const t=new Float32Array(this.starCount*3),o=new Float32Array(this.starCount),i=new Float32Array(this.starCount),a=new Float32Array(this.starCount),r=this.params.seed,c=new V(r+1e4);for(let d=0;d<this.starCount;d++){const h=c.uniform(0,2*Math.PI),n=c.uniform(-1,1),u=Math.acos(n),p=this.params.distance*c.uniform(.8,1.2),g=p*Math.sin(u)*Math.cos(h),v=p*Math.sin(u)*Math.sin(h),M=p*Math.cos(u);t[d*3]=g,t[d*3+1]=v,t[d*3+2]=M,o[d]=c.uniform(this.params.minSize,this.params.maxSize),i[d]=c.uniform(this.params.minBrightness,this.params.maxBrightness),a[d]=c.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new ie(t,3)),this.geometry.setAttribute("size",new ie(o,1)),this.geometry.setAttribute("brightness",new ie(i,1)),this.geometry.setAttribute("twinklePhase",new ie(a,1))}createMaterial(){const e=this.params.color instanceof f?this.params.color:new f(this.params.color);return new me({vertexShader:ot.vertexShader,fragmentShader:ot.fragmentShader,uniforms:{time:{value:0},starColor:{value:e},twinkleSpeed:{value:this.params.twinkleSpeed}},transparent:!0,blending:We,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.starSystem.position.copy(t),e.add(this.starSystem)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof f?e.color:new f(e.color);this.material.uniforms.starColor.value=t}e.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=e.twinkleSpeed)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function ii(s,e){const t=e!==void 0?e:Math.floor(Math.random()*1e6);console.log("🌟 createStarFieldFromPythonData - planetSeed:",e,"final seed:",t);const o=new V(t+1e4),i={color:new f(16777215),starCount:Math.floor(o.uniform(K.STAR_COUNT.min,K.STAR_COUNT.max)),minBrightness:o.uniform(K.MIN_BRIGHTNESS.min,K.MIN_BRIGHTNESS.max),maxBrightness:o.uniform(K.MAX_BRIGHTNESS.min,K.MAX_BRIGHTNESS.max),minSize:o.uniform(K.MIN_SIZE.min,K.MIN_SIZE.max),maxSize:o.uniform(K.MAX_SIZE.min,K.MAX_SIZE.max),distance:o.uniform(K.DISTANCE.min,K.DISTANCE.max),seed:t,twinkleSpeed:o.uniform(K.TWINKLE_SPEED.min,K.TWINKLE_SPEED.max)};return new ot(s,i)}const De={SIZE:{min:.12,max:.2},ROTATION_SPEED:{min:.05,max:.1},OPACITY:{min:.15,max:.35},TIME_SPEED:{min:.8,max:1.5}},ai=`
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
`,si=`
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
`;class yt{mesh;material;params;startTime;proceduralParams;constructor(e){const t=e.seed||Math.floor(Math.random()*1e6),o=new V(t);this.startTime=e.startTime||t%1e4/1e3,this.proceduralParams={size:o.uniform(De.SIZE.min,De.SIZE.max),rotationSpeed:o.uniform(De.ROTATION_SPEED.min,De.ROTATION_SPEED.max),opacity:o.uniform(De.OPACITY.min,De.OPACITY.max),timeSpeed:o.uniform(De.TIME_SPEED.min,De.TIME_SPEED.max)},this.params=e;const i=new f(e.planetColor),a=i.clone();a.multiplyScalar(1-e.hexagonData.color_darken_factor),this.material=new me({uniforms:{time:{value:0},planetColor:{value:i},hexagonColor:{value:a},darkenFactor:{value:e.hexagonData.color_darken_factor},opacity:{value:this.proceduralParams.opacity},hexagonRadius:{value:this.proceduralParams.size},rotationSpeed:{value:this.proceduralParams.rotationSpeed},pole:{value:e.hexagonData.pole==="north"?1:-1},visibility:{value:1}},vertexShader:ai,fragmentShader:si,transparent:!0,depthWrite:!1,side:Se,blending:e.hexagonData.nebula_blend?We:Ne});const r=this.createCurvedHexagonGeometry(e.hexagonData.pole,e.hexagonData.radius);this.mesh=new ye(r,this.material),this.mesh.scale.set(e.planetRadius,e.planetRadius,e.planetRadius),this.updateVisibility()}updateVisibility(){if(!this.params.hexagonData.enabled){this.material.uniforms.visibility.value=0;return}const t=(this.params.currentTime||0)%this.params.hexagonData.cycle_duration_years/this.params.hexagonData.cycle_duration_years,o=this.params.hexagonData.visible_duration_years/this.params.hexagonData.cycle_duration_years;if(t<o){const i=t/o;i<.1?this.material.uniforms.visibility.value=i/.1:i>.9?this.material.uniforms.visibility.value=(1-i)/.1:this.material.uniforms.visibility.value=1}else this.material.uniforms.visibility.value=0}update(e){const o=(this.startTime+Date.now()/1e3*this.proceduralParams.timeSpeed)%1e3;this.material.uniforms.time.value=o,this.updateVisibility()}addToScene(e){e.add(this.mesh)}removeFromScene(e){e.remove(this.mesh)}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}createCurvedHexagonGeometry(e,t){const o=e==="north"?1:-1,i=64,a=1,r=new Ht(a,a,i,i),c=r.attributes.position,d=new P;for(let h=0;h<c.count;h++){d.fromBufferAttribute(c,h);const n=d.x,u=d.y,p=Math.sqrt(n*n+u*u);if(p<=a/2){const v=p*Math.PI*.5,M=o*Math.cos(v)*1.02,E=Math.sin(v)*1.02;if(p>0){const b=n/p,m=u/p;d.x=b*E,d.y=M,d.z=m*E}else d.x=0,d.y=o*1.02,d.z=0}c.setXYZ(h,d.x,d.y,d.z)}return c.needsUpdate=!0,r.computeVertexNormals(),r}setEnabled(e){this.mesh.visible=e}}class Vt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new f(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new ze,this.generateFragments()}generateFragments(){const e=new Ge({color:this.params.color instanceof f?this.params.color:new f(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const o=this.generateFragmentGeometry(),i=new ye(o,e);this.positionFragment(i,t),i.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const a=this.params.size*(Math.random()*.5+.75);i.scale.set(a,a,a),i.userData={rotationAxis:new P(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(i),this.fragments.add(i)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],o=[],i=[];i.push(new P(0,0,0));for(let c=0;c<e;c++){const d=c/e*Math.PI*2,h=Math.random()*.5+.5,n=(Math.random()-.5)*.3;i.push(new P(Math.cos(d)*h,Math.sin(d)*h,n))}for(let c=1;c<=e;c++){const h=i[c].clone();h.z+=Math.random()*.4+.2,i.push(h)}for(const c of i)t.push(c.x,c.y,c.z);for(let c=1;c<e;c++)o.push(0,c,c+1);o.push(0,e,1);const a=i.length-e-1;for(let c=0;c<e-1;c++)o.push(a,a+c+2,a+c+1);o.push(a,a+1,a+e);for(let c=0;c<e;c++){const d=c+1,h=(c+1)%e+1,n=d+e,u=h+e;o.push(d,n,h),o.push(h,n,u)}const r=new Ce;return r.setAttribute("position",new St(t,3)),r.setIndex(o),r.computeVertexNormals(),r}positionFragment(e,t){let o;switch(this.params.distribution){case"edge":o=this.generateEdgePosition(t);break;case"surface":o=this.generateSurfacePosition();break;case"random":default:o=this.generateRandomPosition();break}e.position.copy(o)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,o=this.planetRadius*(.95+Math.random()*.1),i=(Math.random()-.5)*this.planetRadius*.5;return new P(Math.cos(t)*o,i,Math.sin(t)*o)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),o=this.planetRadius*(1+Math.random()*.05);return new P(o*Math.sin(t)*Math.cos(e),o*Math.sin(t)*Math.sin(e),o*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,o=Math.random()*Math.PI*2;return new P(e*Math.sin(t)*Math.cos(o),e*Math.sin(t)*Math.sin(o),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,o)=>{const i=t.userData;t.rotateOnAxis(i.rotationAxis,i.rotationSpeed*e*this.params.animationSpeed);const a=Math.sin(Date.now()*.001+o)*.001;t.position.y+=a*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof f?e.color:new f(e.color);this.fragmentMeshes.forEach(o=>{o.material instanceof Ge&&(o.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof Ge&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Ye&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof Ye&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function ht(s){const e=s.replace("#",""),t=parseInt(e.substr(0,2),16)/255,o=parseInt(e.substr(2,2),16)/255,i=parseInt(e.substr(4,2),16)/255;return new f(t,o,i)}function xt(s){return s.length>=3?new f(s[0],s[1],s[2]):new f(.5,.5,.5)}function Ke(s){if(s.ocean_color){if(typeof s.ocean_color=="string")return ht(s.ocean_color);if(Array.isArray(s.ocean_color))return xt(s.ocean_color)}if(s.planet_info?.base_color){if(typeof s.planet_info.base_color=="string")return ht(s.planet_info.base_color);if(Array.isArray(s.planet_info.base_color))return xt(s.planet_info.base_color)}if(s.base_color){if(typeof s.base_color=="string")return ht(s.base_color);if(Array.isArray(s.base_color))return xt(s.base_color)}const e=s.planet_info?.type||s.type||"Unknown";return ni(e)}function ni(s){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[s]||"#FFFFFF";return ht(t)}class it{material;params;oceanLayerMesh;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new f(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new f(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new f(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof f?this.params.landmassColor:new f(this.params.landmassColor),t=this.params.foamColor instanceof f?this.params.foamColor:new f(this.params.foamColor),o=this.params.oceanColor instanceof f?this.params.oceanColor:new f(this.params.oceanColor);return new me({vertexShader:it.vertexShader,fragmentShader:it.fragmentShader,uniforms:{time:{value:0},baseColor:{value:o},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:o}}})}apply(e){this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const o=new ye(t,this.material);o.position.copy(e.position),o.rotation.copy(e.rotation),this.oceanLayerMesh=o}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const o=e[t];if(o!==void 0&&this.material.uniforms[t])if(o instanceof f||Array.isArray(o)){const i=o instanceof f?o:new f(o);this.material.uniforms[t].value=i}else this.material.uniforms[t].value=o})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh)):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function ri(s){const e=Ke(s),t=[e.r,e.g,e.b];let o=.3,i=2,a=8,r=.3,c=.2;if(s.seeds){const h=s.seeds.shape_seed,u=(p=>{let g=p;return()=>(g=(g*1664525+1013904223)%4294967296,g/4294967296)})(h);o=.2+u()*.3,i=1.5+u()*1.5,a=6+u()*6,r=.25+u()*.15,c=.15+u()*.1}const d={waveIntensity:o,waveSpeed:i,waveScale:a,landmassThreshold:r,deepOceanThreshold:c,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new f(.9,.9,1),foamIntensity:.4,oceanColor:t};return new it(d)}class at{mesh;material;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={radius:t.radius||e*.999,detail:t.detail||128,flowSpeed:t.flowSpeed||.5,waveAmplitude:t.waveAmplitude||.02,opacity:t.opacity||.75,colorDeep:t.colorDeep||new f(4147),colorShallow:t.colorShallow||new f(26333),...t};const o=new nt(this.params.radius,this.params.detail,this.params.detail);this.material=new me({vertexShader:at.vertexShader,fragmentShader:at.fragmentShader,uniforms:{uTime:{value:0},uFlowSpeed:{value:this.params.flowSpeed},uWaveAmplitude:{value:this.params.waveAmplitude},uFresnelPower:{value:1.5},uOpacity:{value:this.params.opacity},uColorDeep:{value:this.params.colorDeep instanceof f?this.params.colorDeep:new f(this.params.colorDeep)},uColorShallow:{value:this.params.colorShallow instanceof f?this.params.colorShallow:new f(this.params.colorShallow)},uNoiseScale:{value:3},uSecondaryWaveScale:{value:6},uPrimaryFlowSpeed:{value:this.params.flowSpeed||.5},uSecondaryFlowSpeed:{value:(this.params.flowSpeed||.5)*1.6},uUvPatternSpeed1:{value:(this.params.flowSpeed||.5)*4},uUvPatternSpeed2:{value:(this.params.flowSpeed||.5)*3}},transparent:!0,depthWrite:!1,depthTest:!0,side:Se,blending:Ne}),this.mesh=new ye(o,this.material),this.mesh.renderOrder=-1,console.log("🌊 FluidLayersEffect created with params:",this.params)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh),console.log("🌊 FluidLayers mesh added to scene at position:",this.mesh.position)}update(e,t){this.material.uniforms.uTime.value+=e,t!==void 0&&(this.mesh.rotation.y=t)}updateParams(e){if(this.params={...this.params,...e},e.flowSpeed!==void 0&&(this.material.uniforms.uFlowSpeed.value=e.flowSpeed,this.material.uniforms.uPrimaryFlowSpeed.value=e.flowSpeed,this.material.uniforms.uSecondaryFlowSpeed.value=e.flowSpeed*1.6,this.material.uniforms.uUvPatternSpeed1.value=e.flowSpeed*4,this.material.uniforms.uUvPatternSpeed2.value=e.flowSpeed*3),e.waveAmplitude!==void 0&&(this.material.uniforms.uWaveAmplitude.value=e.waveAmplitude),e.opacity!==void 0&&(this.material.uniforms.uOpacity.value=e.opacity),e.colorDeep){const t=e.colorDeep instanceof f?e.colorDeep:new f(e.colorDeep);this.material.uniforms.uColorDeep.value=t}if(e.colorShallow){const t=e.colorShallow instanceof f?e.colorShallow:new f(e.colorShallow);this.material.uniforms.uColorShallow.value=t}}getObject3D(){return this.mesh}dispose(){this.mesh.geometry&&this.mesh.geometry.dispose(),this.material&&this.material.dispose()}}function Yt(s,e){let t=.5,o=.025,i=.75;if(e.seeds){const r=e.seeds.shape_seed||e.seeds.planet_seed,d=(h=>{let n=h;return()=>(n=(n*1664525+1013904223)%4294967296,n/4294967296)})(r);t=.05+d()*.3,o=.02+d()*.02,i=.25+d()*.6}const a={radius:s*.999,detail:128,flowSpeed:t,waveAmplitude:o*.4,opacity:i,colorDeep:new f(4147),colorShallow:new f(26333)};return new at(s,a)}class Qt{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new ze,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,o=e,i=t*Math.cos(o),a=t*Math.sin(o),r=a*.8,c=new Ce,d=new Float32Array([0,0,0,i,r,a]);c.setAttribute("position",new ie(d,3));const h=new wt({color:16776960,linewidth:5,transparent:!1});this.sunLine=new Et(c,h),this.debugGroup.add(this.sunLine);const n=e+Math.PI,u=t*.7,p=u*Math.cos(n),g=0,v=u*Math.sin(n),M=new nt(this.planetRadius*.15,16,16),E=new Zt({color:16776960,transparent:!1,opacity:1}),b=new ye(M,E);b.position.set(p,g,v),this.debugGroup.add(b),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=new Ce,i=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);o.setAttribute("position",new ie(i,3));const a=new wt({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new Et(o,a),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,o=this.params.rotationPeriod||86400,i=this.params.initialAngleRotation||0,a=e-t,r=2*Math.PI/o;return(i+a*r)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),o=this.planetRadius*20,i=this.sunLine.geometry,a=i.attributes.position.array;a[3]=o*Math.cos(t),a[4]=0,a[5]=o*Math.sin(t),i.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,o=this.rotationLine.geometry,i=o.attributes.position.array;i[0]=-t*Math.cos(e),i[1]=0,i[2]=-t*Math.sin(e),i[3]=t*Math.cos(e),i[4]=0,i[5]=t*Math.sin(e),o.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function li(s,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:s.debug?.cosmic_origin_time||s.timing?.cosmic_origin_time||s.cosmicOriginTime,rotationPeriod:s.planet_info?.rotation_period||s.rotation_period_seconds||86400,initialAngleRotation:s.debug?.initial_angle_rotation||s.timing?.initial_angle_rotation||s.initialAngleRotation||0,planetRadius:e,orbitalAngle:s.timing?.orbital_angle||0,sunAngle:s.sun_angle||s.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new Qt(e,t)}const ci=!1;class Ue{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return Ue.instance||(Ue.instance=new Ue),Ue.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new Qe(t,e),fromPythonData:(e,t)=>Ot(t,e.atmosphere||{})}),this.registerEffect("atmosphere_clouds",{create:(e,t)=>new Be(t,e),fromPythonData:(e,t)=>Xe(t,e.surface_elements||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new Jt(t,e),fromPythonData:(e,t)=>Ut(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new Je(t,e),fromPythonData:(e,t)=>Ho(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new qt(t,e),fromPythonData:(e,t)=>Wo(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new Vt(t,e),fromPythonData:(e,t)=>new Vt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("land_masses",{create:(e,t)=>new Ct(t,e),fromPythonData:(e,t)=>vt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("ocean_waves",{create:(e,t)=>new it(e),fromPythonData:(e,t)=>ri(e)}),this.registerEffect("fluid_layers",{create:(e,t)=>new at(t,e),fromPythonData:(e,t)=>Yt(t,e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("star_field",{create:(e,t)=>new ot(t,e),fromPythonData:(e,t)=>ii(t,e.seeds?.planet_seed||e.planet_seed)}),this.registerEffect("tundra_snowflakes",{create:(e,t)=>new Kt(t,e),fromPythonData:(e,t)=>jt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("anomaly_phase_matter",{create:(e,t)=>new et(t,e),fromPythonData:(e,t)=>Xo(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new Qt(t,e),fromPythonData:(e,t)=>li(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,o,i,a=0){const r=this.creators.get(e);if(!r)return console.warn(`Effect type '${e}' not registered`),null;try{const c=r.create(t,o,i);if(!c)return null;const d={id:`effect_${this.nextId++}`,type:e,effect:c,priority:a,enabled:!0};return this.effects.set(d.id,d),d}catch(c){return console.error(`Error creating effect '${e}':`,c),null}}createEffectFromPythonData(e,t,o,i,a=0){const r=this.creators.get(e);if(!r||!r.fromPythonData)return this.createEffect(e,t,o,i,a);try{const c=r.fromPythonData(t,o,i);if(!c)return null;const d={id:`effect_${this.nextId++}`,type:e,effect:c,priority:a,enabled:!0};return this.effects.set(d.id,d),d}catch(c){return console.error(`Error creating effect '${e}' from Python data:`,c),null}}createEffectsFromList(e,t,o){const i=[],a=e.sort((r,c)=>(r.priority||0)-(c.priority||0));for(const r of a){const c=this.createEffect(r.type,r.params,t,o,r.priority);c&&(c.enabled=r.enabled!==!1,i.push(c))}return i}createEffectsFromPythonPlanetData(e,t,o,i,a){const r=[];try{const c=Ke(e);if(a?this.layerSystem=a:this.layerSystem=new tt(o,c),e.surface_elements){const n=e.surface_elements;if(n.effects_3d&&Array.isArray(n.effects_3d))for(const u of n.effects_3d){if(u.type==="atmospheric_streaks"){const g=Ut(t,u.params,e.seeds?.shape_seed+3e3),v={id:`effect_${this.nextId++}`,type:"atmospheric_streaks",effect:g,priority:u.priority||0,enabled:!0,name:"Atmospheric Streaks"};this.effects.set(v.id,v),r.push(v),g.addToScene(i,o.position);continue}const p=this.createEffect(u.type,u.params,t,o,u.priority||0);p?(p.name=u.type.replace(/_/g," ").replace(/\b\w/g,g=>g.toUpperCase()),r.push(p),p.effect.apply&&p.effect.apply(o),p.effect.addToScene&&p.effect.addToScene(i,o.position)):console.error("❌ FALLO AL CREAR EFECTO:",u.type)}switch(console.log(`🔍 Planet surface type: "${n.type}"`),console.log(`🔍 Planet info type: "${e.planet_info?.type}"`),n.type.toLowerCase()){case"gas_giant":if(this.layerSystem){const m=Ft(this.layerSystem,{...n,base_color:c,turbulence:e.turbulence||n.turbulence},e.seeds?.shape_seed||e.seeds?.planet_seed||e.seeds?.planet_seed),_=kt(this.layerSystem,{...n,base_color:c,storm_intensity:e.storm_intensity||n.storm_intensity},(e.seeds?.shape_seed||e.seeds?.planet_seed)+1e3),N={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:m,priority:0,enabled:!0};this.effects.set(N.id,N),r.push(N);const T={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:_,priority:1,enabled:!0};if(this.effects.set(T.id,T),r.push(T),n.polar_hexagon&&n.polar_hexagon.enabled){const S=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,j=new yt({planetColor:c,hexagonData:n.polar_hexagon,planetRadius:t,currentTime:S}),O={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:j,priority:10,enabled:!0};this.effects.set(O.id,O),r.push(O),i&&j.addToScene(i)}}else console.error("❌ PlanetLayerSystem not initialized!");break;case"frozen_gas_giant":if(this.layerSystem){const m=Ft(this.layerSystem,{...n,base_color:c,turbulence:e.turbulence||n.turbulence,icy_tint:!0},e.seeds?.shape_seed||e.seeds?.planet_seed),_={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:m,priority:0,enabled:!0};if(this.effects.set(_.id,_),r.push(_),n.polar_hexagon&&n.polar_hexagon.enabled){const N=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,T=new yt({planetColor:c,hexagonData:n.polar_hexagon,planetRadius:t,currentTime:N}),S={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:T,priority:10,enabled:!0};this.effects.set(S.id,S),r.push(S),i&&T.addToScene(i)}}break;case"nebulous":if(this.layerSystem){const m=kt(this.layerSystem,{...n,base_color:c,storm_intensity:n.nebula_density||.6,color_variance:n.color_variance||.2},(e.seeds?.shape_seed||e.seeds?.planet_seed)+2e3),_={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:m,priority:0,enabled:!0};if(this.effects.set(_.id,_),r.push(_),n.polar_hexagon&&n.polar_hexagon.enabled){const N=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,T=new yt({planetColor:c,hexagonData:n.polar_hexagon,planetRadius:t,currentTime:N}),S={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:T,priority:10,enabled:!0};this.effects.set(S.id,S),r.push(S),i&&T.addToScene(i)}}break;case"metallic":case"metallic_3d":if(this.layerSystem){const m=oi(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),_={id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:m,priority:0,enabled:!0};this.effects.set(_.id,_),r.push(_)}break;case"rocky":if(this.layerSystem){const m=Jo(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),_={id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:m,priority:0,enabled:!0};if(this.effects.set(_.id,_),r.push(_),n.clouds&&n.clouds.length>0){const N=Xe(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),T={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:N,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(T.id,T),r.push(T),N.addToScene(i,o.position)}}break;case"icy":if(this.layerSystem){const m=ei(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),_={id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:m,priority:0,enabled:!0};this.effects.set(_.id,_),r.push(_);const N=$o(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+8e3);if(N){const S={id:`effect_${this.nextId++}`,type:"transparent_land_masses",effect:N,priority:1,enabled:!0,name:"Ice Formations"};this.effects.set(S.id,S),r.push(S),N.addToScene(i,o.position),console.log("🧊 Ice Formations (transparent LandMasses) added to Icy planet")}else console.warn("❄️ Failed to create transparent LandMasses for Icy planet");if(n.clouds&&n.clouds.length>0){const S=Xe(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),j={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:S,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(j.id,j),r.push(j),S.addToScene(i,o.position),console.log("☁️ Atmospheric Clouds added to Icy planet")}const T=zt(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(T){const S={id:`effect_${this.nextId++}`,type:"icy_features",effect:T,priority:2,enabled:!0,name:"Ice Crystals & Features"};this.effects.set(S.id,S),r.push(S),T.addToScene(i,o.position),console.log("❄️ Icy Features (crystals, cracks, ice caps) added to Icy planet")}}break;case"oceanic":const u=Yt(t,e);if(u){const m={id:`effect_${this.nextId++}`,type:"fluid_layers",effect:u,priority:3,enabled:!0,name:"Fluid Ocean Layers"};this.effects.set(m.id,m),r.push(m),u.addToScene(i,o.position),console.log("🌊 FluidLayers effect added for oceanic planet")}if(n.green_patches&&n.green_patches.length>0){const m=vt(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(m){const _={id:`effect_${this.nextId++}`,type:"land_masses",effect:m,priority:5,enabled:!0,name:"Land Masses (Islands)"};this.effects.set(_.id,_),r.push(_),m.addToScene(i,o.position)}}if(n.clouds&&n.clouds.length>0){const m=Xe(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),_={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:m,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(_.id,_),r.push(_),m.addToScene(i,o.position)}break;case"tundra":if(n.green_patches&&n.green_patches.length>0){const m=vt(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(m){const _={id:`effect_${this.nextId++}`,type:"land_masses",effect:m,priority:5,enabled:!0,name:"Tundra Terrain"};this.effects.set(_.id,_),r.push(_),m.addToScene(i,o.position),console.log("🏔️ Tundra terrain (LandMasses) added")}}const p=zt(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(p){const m={id:`effect_${this.nextId++}`,type:"icy_features",effect:p,priority:6,enabled:!0,name:"Snow Patches & Ice"};this.effects.set(m.id,m),r.push(m),p.addToScene(i,o.position),console.log("❄️ Sparse ice features added to Tundra planet")}if(n.clouds&&n.clouds.length>0){const m=Xe(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),_={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:m,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(_.id,_),r.push(_),m.addToScene(i,o.position),console.log("☁️ Atmospheric clouds added to Tundra planet")}const g=jt(t,n,(e.seeds?.shape_seed||e.seeds?.planet_seed)+15e3);if(g){const m={id:`effect_${this.nextId++}`,type:"tundra_snowflakes",effect:g,priority:20,enabled:!0,name:"Snowflakes"};this.effects.set(m.id,m),r.push(m),g.addToScene(i,o.position),console.log("❄️ Tundra snowflakes added to Tundra planet")}break;case"anomaly":console.log("🌌 DETECTED ANOMALY PLANET - Creating effects"),console.log("🌌 Planet data:",{surfaceType:n.type,planetType:e.planet_info?.type}),console.log("🎭 SHOWCASE MODE: Activating ALL anomaly effects for evaluation");const M=["anomaly_phase_matter"],E=e.seeds?.planet_seed||Math.floor(Math.random()*1e6),b=M.length;for(let m=0;m<b;m++){const _=M[m],N=E+m*1e4,T=this.createEffectFromPythonData(_,{...e,seeds:{...e.seeds,planet_seed:N}},t,o,10+m);T&&(T.name=_.replace(/_/g," ").replace(/\b\w/g,S=>S.toUpperCase()),r.push(T),T.effect.addToScene&&T.effect.addToScene(i,o.position),console.log(`🎭 Added anomaly effect: ${T.name}`))}if(e.atmosphere&&e.atmosphere.type!=="None"){const m=this.createEffectFromPythonData("atmosphere",e.atmosphere,t,o,5);m&&(r.push(m),m.effect.addToScene(i,o.position),console.log("🌫️ Anomalous atmosphere added"))}break;default:if(e.planet_info?.type?.toLowerCase()==="anomaly"){console.log("🌌 DETECTED ANOMALY PLANET via planet_info.type - Creating effects"),console.log("🎭 SHOWCASE MODE (alt detection): Activating ALL anomaly effects for evaluation");const _=["anomaly_phase_matter"],N=e.seeds?.planet_seed||Math.floor(Math.random()*1e6),T=_.length;for(let S=0;S<T;S++){const j=_[S],O=N+S*1e4,R=this.createEffectFromPythonData(j,{...e,seeds:{...e.seeds,planet_seed:O}},t,o,10+S);R&&(R.name=j.replace(/_/g," ").replace(/\b\w/g,Y=>Y.toUpperCase()),r.push(R),R.effect.addToScene&&R.effect.addToScene(i,o.position),console.log(`🎭 Added anomaly effect: ${R.name}`))}if(e.atmosphere&&e.atmosphere.type!=="None"){const S=this.createEffectFromPythonData("atmosphere",e.atmosphere,t,o,5);S&&(r.push(S),S.effect.addToScene(i,o.position),console.log("🌫️ Anomalous atmosphere added"))}}else if(o.material instanceof Ge){const m=Ke(e);o.material.color.copy(m)}break}}else if(o.material instanceof Ge){const n=Ke(e);o.material.color.copy(n)}const d=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),h=d==="anomaly"||e.surface_elements?.type==="anomaly";if(e.atmosphere&&!h){if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const n=Ot(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(n){const u={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:n,priority:20,enabled:!0};this.effects.set(u.id,u),r.push(u),n.addToScene(i,o.position)}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const n={...e.atmosphere};d==="oceanic"&&(n.opacity=Math.min(n.opacity||.3,.15),n.width=Math.min(n.width||15,8));const u=this.createEffectFromPythonData("atmosphere",n,t,o,5);u&&(r.push(u),u.effect.addToScene(i,o.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){const n=this.createEffectFromPythonData("ring_system",e,t,o,1);n?(r.push(n),n.effect.addToScene(i,o.position)):console.warn("⚠️ Failed to create ring effect")}if(e.surface_elements?.has_fragmentation_zones){const n=this.createEffectFromPythonData("fragmentation",e,t,o,5);n&&(r.push(n),n.effect.addToScene(i,o.position))}this.layerSystem&&this.layerSystem.addToScene(i);try{const n=this.createEffectFromPythonData("star_field",e,t,o,-100);n&&n.effect&&(n.effect.addToScene(i,o.position),r.push(n),console.log("⭐ StarField added automatically using planet seed:",e.seeds?.planet_seed))}catch(n){console.warn("Could not create StarField:",n)}return r.forEach((n,u)=>{}),r.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),r}catch(c){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",c),c}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const o=this.effects.get(e);if(o){o.enabled=t!==void 0?t:!o.enabled;const i=o.effect;if(i&&i.getObject3D){const a=i.getObject3D();a&&(a.visible=o.enabled,console.log(`🎮 Toggle effect ${o.type}: visible = ${o.enabled}`))}if(this.layerSystem){const a=this.layerSystem.getLayerMeshes(),c={cloud_bands_layer:"cloudBands",cloud_gyros_layer:"cloudGyros",metallic_surface_layer:"metallicSurface",rocky_terrain_layer:"rockyTerrain",icy_terrain_layer:"icyTerrain"}[o.type];c&&a[c]&&(a[c].visible=o.enabled)}}else console.warn(`⚠️ Effect not found: ${e}`)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const o of this.effects.values())if(o.enabled&&o.effect.update)try{o.effect.update(e,t)}catch(i){console.error(`Error updating effect ${o.type}:`,i)}}updateLightForAllEffects(e){this.layerSystem&&this.layerSystem.updateFromThreeLight(e);for(const t of this.effects.values())if(t.enabled&&t.effect.updateFromThreeLight)try{t.effect.updateFromThreeLight(e)}catch(o){console.error(`Error updating light for effect ${t.type}:`,o)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear(),this.nextId=1}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const Ae=Ue.getInstance(),Fe={atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function di(s){const e=[];switch(s.toLowerCase()){case"metallic":e.push({type:"atmosphere",params:{...Fe.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:Fe.cloud_bands,priority:0},{type:"cloud_gyros",params:Fe.cloud_gyros,priority:1},{type:"atmosphere",params:{...Fe.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:Fe.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...Fe.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const Me={log:(s,e)=>{},warn:(s,e)=>{console.warn(`[Effects] ${s}`,e||"")},error:(s,e)=>{console.error(`[Effects] ${s}`,e||"")},debug:(s,e)=>{}};new Date().toISOString();const hi=({planetData:s,showInConsole:e=!0,showInPage:t=!1})=>{const[o,i]=C.useState([]),[a,r]=C.useState({});C.useEffect(()=>{if(!s)return;const h=c(s);r(h),i(d(s)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=s,window.__DEBUG_PLANET_ANALYSIS=h)},[s,e]);function c(h){const n={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(h.planet_info&&h.surface_elements?n.hasValidStructure=!0:(h.planet_info||n.missingFields.push("planet_info"),h.surface_elements||n.missingFields.push("surface_elements")),h.surface_elements?.type==="oceanic"&&(n.oceanicData={hasAbstractLands:!!h.surface_elements.abstract_lands?.length,numGreenPatches:h.surface_elements.green_patches?.length||0,numClouds:h.surface_elements.clouds?.length||0,hasDepths:h.surface_elements.depths?.enabled||!1,baseColorIsBlue:h.planet_info?.base_color==="#0000FF",greenPatchColor:h.surface_elements.green_patches?.[0]?.color,issues:[]},n.oceanicData.numGreenPatches>15&&n.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),n.oceanicData.baseColorIsBlue||n.oceanicData.issues.push(`Color base no es azul puro: ${h.planet_info?.base_color}`),n.renderingIssues=n.oceanicData.issues),h.planet_info?.base_color&&h.planet_info?.type){const p={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[h.planet_info.type];p&&h.planet_info.base_color!==p?n.colorConsistency=`Inconsistente: esperado ${p}, recibido ${h.planet_info.base_color}`:n.colorConsistency="Correcto"}return n}function d(h){const n=[];if(!h.surface_elements?.type)return["No surface type defined"];const u=h.surface_elements.type.toLowerCase();switch(u){case"oceanic":n.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":n.push("RockyTerrainEffect");break;case"icy":n.push("IcyTerrainEffect");break;case"gas giant":n.push("GasGiantBandsEffect");break;default:n.push(`Generic effect for type: ${u}`)}return h.atmosphere?.density>0&&n.push("AtmosphericEffect"),h.rings&&n.push("RingSystemEffect"),n}return t?l.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[l.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",s.planet_info?.name]}),l.jsxs("div",{style:{marginBottom:"10px"},children:[l.jsx("strong",{children:"Type:"})," ",s.planet_info?.type,l.jsx("br",{}),l.jsx("strong",{children:"Base Color:"})," ",s.planet_info?.base_color,l.jsx("br",{}),l.jsx("strong",{children:"Radius:"})," ",s.planet_info?.radius]}),s.surface_elements?.type==="oceanic"&&l.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[l.jsx("strong",{children:"🌊 Oceanic Data:"}),l.jsx("br",{}),l.jsxs("span",{style:{color:a.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",a.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),l.jsx("br",{}),"Green Patches: ",a.oceanicData?.numGreenPatches,l.jsx("br",{}),"Clouds: ",a.oceanicData?.numClouds,l.jsx("br",{}),"Has Depths: ",a.oceanicData?.hasDepths?"Yes":"No",l.jsx("br",{}),a.oceanicData?.issues?.length>0&&l.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",l.jsx("br",{}),a.oceanicData.issues.map((h,n)=>l.jsxs("div",{children:["- ",h]},n))]})]}),l.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[l.jsx("strong",{children:"🎨 Effects Applied:"}),l.jsx("br",{}),o.map((h,n)=>l.jsxs("div",{style:{color:h.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",h]},n))]}),l.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function mi(s){C.useEffect(()=>{if(s&&s.surface_elements?.type==="oceanic"){s.surface_elements.green_patches?.length>0;const e=s.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[s])}const mt=2.5,Gt=()=>{const s=45*Math.PI/180;return mt/(Math.tan(s/2)*.5)},ui=({planetName:s,containerClassName:e="",width:t=800,height:o=600,autoRotate:i=!0,enableControls:a=!0,showDebugInfo:r=!1,planetData:c,cosmicOriginTime:d,initialAngleRotation:h,onDataLoaded:n,onEffectsCreated:u,onError:p})=>{const g=C.useRef(null),v=C.useRef(null),M=C.useRef(null),E=C.useRef(null),b=C.useRef(null),m=C.useRef(null),_=C.useRef(new So),N=C.useRef(null),T=C.useRef(0),S=C.useRef(null),[j,O]=C.useState(!0),[R,Y]=C.useState(null),[w,F]=C.useState(null),[k,G]=C.useState([]),[Q,$]=C.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),q=C.useRef([]),I=C.useRef(0),z=C.useRef(null),L=C.useRef(null),Z=Math.floor(Date.now()/1e3),[ee,he]=C.useState(0),te=d||w?.timing?.cosmic_origin_time||Date.now()/1e3-3600,ue=Z-te+ee;T.current=ue;const pe=C.useCallback(()=>{if(!g.current||!M.current||!E.current)return;const y=g.current,A=y.clientWidth||400,x=y.clientHeight||400;M.current.setSize(A,x),E.current.aspect=A/x,E.current.updateProjectionMatrix()},[]),xe=async y=>{if(!(!b.current||!v.current||!L.current)){Me.log("Applying modular effects from API data",{planet:y.planet_info.name,type:y.planet_info.type});try{Ee();const A=Ke(y);L.current.updateBaseColor(A);const x=Ae.createEffectsFromPythonPlanetData(y,mt,b.current,v.current,L.current);console.log(`Planet: ${y.planet_info?.name}, Effects:`,x.map(D=>D.type)),G(x),q.current=x,u&&u(x),Me.log(`Successfully applied ${x.length} modular effects`),Ze()}catch(A){Me.error("Error applying modular effects",A),je()}}},ge=C.useCallback(()=>{if(!g.current)return!1;try{for(;g.current.firstChild;)g.current.removeChild(g.current.firstChild);v.current=null,E.current=null,M.current=null,b.current=null,ne.current=null;const y=g.current,A=y.clientWidth||t||400,x=y.clientHeight||o||400,D=new _o;D.background=new f(1297),v.current=D;const oe=new wo(45,A/x,.1,1e4),X=Gt();oe.position.set(0,0,X),oe.lookAt(0,0,0),E.current=oe;const U=new Eo({antialias:!0,alpha:!0,powerPreference:"high-performance"});return U.setSize(A,x),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.shadowMap.enabled=!0,U.shadowMap.type=Mo,U.toneMapping=Co,U.toneMappingExposure=1.2,U.outputColorSpace=To,g.current.appendChild(U.domElement),M.current=U,He(D,null),$e(D),a&&rt(oe,U.domElement),!0}catch(y){return console.error("Error initializing Three.js:",y),!1}},[w,c,d]),_e=y=>{if(!y)return 0;const A=y.sun_angle||y.lighting?.sun_angle;if(A!==void 0)return A;const x=y.timing?.current_orbital_angle||y.timing?.orbital_angle;return x??0},le=C.useRef(null),Te=C.useRef(null),we=C.useRef(null),ne=C.useRef(null),Pe=y=>{y.castShadow=!0,y.shadow.mapSize.width=2048,y.shadow.mapSize.height=2048,y.shadow.camera.near=.5,y.shadow.camera.far=50,y.shadow.camera.left=-10,y.shadow.camera.right=10,y.shadow.camera.top=10,y.shadow.camera.bottom=-10},Re=y=>{if(!le.current||!v.current)return;const A=_e(y),x=10,D=A+Math.PI,oe=Math.sin(A)*5,X=x*Math.cos(D),U=oe,Oe=x*Math.sin(D);le.current.position.set(X,U,Oe),le.current.target.position.set(0,0,0),v.current.children.includes(le.current.target)||v.current.add(le.current.target),Te.current&&Te.current.position.set(-X*.5,0,-Oe*.5),L.current&&le.current&&L.current.updateFromThreeLight(le.current),le.current&&Ae.updateLightForAllEffects(le.current)},He=(y,A)=>{{const x=new It(16777215,2);x.position.set(-10,5,10),x.target.position.set(0,0,0),x.castShadow=!0,Pe(x),y.add(x),y.add(x.target),le.current=x;const D=new It(16777215,.05);D.position.set(8,-3,-5),y.add(D),Te.current=D;const oe=new Po(2236996,.1);y.add(oe),setTimeout(()=>{L.current&&x&&L.current.updateFromThreeLight(x),x&&Ae.updateLightForAllEffects(x)},50);return}},$e=y=>{const A=new nt(mt,128,64),x=new Zt({color:8421504}),D=new ye(A,x);D.castShadow=!0,D.receiveShadow=!0,D.position.set(0,0,0),y.add(D),b.current=D;const oe=new f(8421504);L.current=new tt(D,oe),L.current.addToScene(y)},rt=(y,A)=>{const x=new Do(y,A);x.enableDamping=!0,x.dampingFactor=.05;const D=Gt();x.minDistance=D*.5,x.maxDistance=D*2,x.autoRotate=i,x.autoRotateSpeed=.5,x.enablePan=!0,x.enableZoom=!0,x.target.set(0,0,0),m.current=x},Le=C.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{O(!0),Y(null),Me.log("Loading planet data from API",{planetName:s});const A=await fetch("/api/planet/rendering-data");if(!A.ok)throw new Error(`HTTP error! status: ${A.status}`);const x=await A.json();if(!x.success)throw new Error(x.error||"Failed to fetch planet data");const D=x.planet_data,oe=x.timing,X=x.rendering_data,U={planet_info:X?.planet_info||{name:D.name,type:D.planet_type,base_color:"#808080",radius:D.diameter/15e3,orbital_radius:D.orbital_radius},surface_elements:X?.surface_elements,atmosphere:X?.atmosphere,rings:X?.rings,effects_3d:X?.effects_3d,shader_uniforms:X?.shader_uniforms,universal_actions:X?.universal_actions,timing:{cosmic_origin_time:oe.cosmic_origin_time,current_time_seconds:oe.current_time_seconds,elapsed_time:oe.elapsed_time,initial_orbital_angle:D.initial_orbital_angle,current_orbital_angle:D.current_orbital_angle,max_orbital_radius:oe.max_orbital_radius,system_max_orbital_radius:D.system_max_orbital_radius},original_planet_data:D,seeds:X?.seeds};return F(U),S.current=U,Me.log("API data loaded successfully",{planet:U.planet_info.name,type:U.planet_info.type,hasEffects:!!U.surface_elements,fullRenderingData:X}),n&&n(U),U}catch(y){const A=y instanceof Error?y.message:"Unknown error";return Y(A),p&&p(A),null}finally{O(!1),window.isLoadingPlanetData=!1}}},[s,n,p]);C.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{O(!0),Y(null),Me.log("Loading planet data from API",{planetName:s});const A=await fetch("/api/planet/rendering-data");if(!A.ok)throw new Error(`HTTP error! status: ${A.status}`);const x=await A.json();if(!x.success)throw new Error(x.error||"Failed to fetch planet data");const D=x.planet_data,oe=x.timing,X=x.rendering_data,U={planet_info:X?.planet_info||{name:D.name,type:D.planet_type,base_color:"#808080",radius:D.diameter/15e3,orbital_radius:D.orbital_radius},surface_elements:X?.surface_elements,atmosphere:X?.atmosphere,rings:X?.rings,effects_3d:X?.effects_3d,shader_uniforms:X?.shader_uniforms,universal_actions:X?.universal_actions,timing:{cosmic_origin_time:oe.cosmic_origin_time,current_time_seconds:oe.current_time_seconds,elapsed_time:oe.elapsed_time,initial_orbital_angle:D.initial_orbital_angle,current_orbital_angle:D.current_orbital_angle,max_orbital_radius:oe.max_orbital_radius,system_max_orbital_radius:D.system_max_orbital_radius},original_planet_data:D,seeds:X?.seeds};F(U),S.current=U,Me.log("API data loaded successfully",{planet:U.planet_info.name,type:U.planet_info.type,hasEffects:!!U.surface_elements,fullRenderingData:X}),Re(U),ne.current&&v.current&&(v.current.remove(ne.current),ne.current.geometry.dispose(),ne.current.material.dispose(),ne.current=null),await xe(U),n&&n(U)}catch(y){const A=y instanceof Error?y.message:"Unknown error";Y(A),p&&p(A),je()}finally{O(!1),window.isLoadingPlanetData=!1}}},[s,c,d,h]);const Ie=C.useCallback(()=>{if(!w||!b.current)return;const y=c?.orbital_period_seconds||365.25*24*3600,A=2*Math.PI/y,x=w.timing?.initial_orbital_angle||0,D=Date.now()/1e3,oe=0,X=d||w.timing?.cosmic_origin_time||Date.now()/1e3-3600,U=D-X+oe,Oe=(x+U*A)%(2*Math.PI),pt=w.timing?.max_orbital_radius||100,ct=20+w.planet_info?.orbital_radius/pt*80,eo=ct,to=ct*Math.cos(Oe),oo=eo*Math.sin(Oe);b.current.position.x=to,b.current.position.z=oo,b.current.position.y=0},[w,c,d]),ft=C.useCallback(async y=>{const A=y||w;if(A&&v.current)try{Re(A),ne.current&&v.current&&(v.current.remove(ne.current),ne.current.geometry.dispose(),ne.current.material.dispose(),ne.current=null),await xe(A)}catch(x){Me.error("Error in applyProceduralShadersFromAPI:",x),je()}},[w]),je=()=>{if(!(!v.current||!b.current)){Me.warn("Applying fallback effects for planet type:",c?.planet_type);try{Ee(),b.current.material instanceof Ge&&b.current.material.color.setHex(6710886);try{const y=di("generic"),A=Ae.createEffectsFromList(y,mt,b.current);A.forEach(x=>{x.effect.addToScene&&v.current&&b.current&&x.effect.addToScene(v.current,b.current.position)}),q.current=A,G(A)}catch(y){console.warn("Could not create fallback effects, using basic material only:",y)}Ze()}catch(y){Me.error("Error applying fallback effects",y)}}},Ee=()=>{Ae.clearAllEffects(),q.current.forEach(y=>{try{y.effect.dispose&&y.effect.dispose()}catch{}}),q.current=[],G([])},lt=C.useCallback(()=>{N.current=requestAnimationFrame(lt);const y=performance.now(),A=_.current.getDelta();m.current&&m.current.update();try{Ae.updateAllEffects(A,b.current?.rotation.y)}catch{}if(b.current&&S.current){S.current.planet_info?.name;const x=S.current.original_planet_data,D=x?.orbital_period_seconds||365.25*24*3600,oe=S.current.timing?.initial_orbital_angle||0;d||S.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const X=x?.axial_tilt||0,U=2*Math.PI/D;(oe+T.current*U)%(2*Math.PI);const Oe=S.current.timing?.max_orbital_radius||S.current.timing?.system_max_orbital_radius,pt=x?.orbital_radius;if(!Oe||!pt)return;x?.eccentricity_factor,b.current.position.set(0,0,0);const Tt=x?.rotation_period_seconds||86400,ct=2*Math.PI/Tt;b.current.rotation.y=T.current*ct%(2*Math.PI),b.current.rotation.z=X*(Math.PI/180)}if(q.current.forEach(x=>{x.effect.updateUniforms&&x.effect.updateUniforms(A)}),M.current&&v.current&&E.current){const x=performance.now();M.current.render(v.current,E.current);const D=performance.now()-x;if(y-I.current>5e3){const oe=1e3/(y-I.current);Ze(),$(X=>({...X,frameRate:Math.round(oe),renderTime:Math.round(D*100)/100})),I.current=y}}},[]),Ze=C.useCallback(()=>{const y=Ae.getStats();$(A=>({...A,activeEffects:y.activeEffects,enabledEffects:y.enabledEffects}))},[]);return C.useEffect(()=>{let y=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!y)return;const x=await Le();if(!y)return;if(!ge()){y&&Y("Failed to initialize 3D renderer");return}if(!y||(lt(),g.current&&"ResizeObserver"in window&&(z.current=new ResizeObserver(pe),z.current.observe(g.current)),window.addEventListener("resize",pe),!y))return;x?await ft(x):je()}catch(x){y&&Y(x instanceof Error?x.message:"Unknown initialization error")}})(),()=>{if(y=!1,S.current=null,N.current&&cancelAnimationFrame(N.current),z.current&&z.current.disconnect(),window.removeEventListener("resize",pe),Ee(),L.current&&(L.current.dispose(),L.current=null),m.current&&m.current.dispose(),we.current&&v.current&&(v.current.remove(we.current),we.current.geometry.dispose(),we.current.material.dispose(),we.current=null),ne.current&&v.current&&(v.current.remove(ne.current),ne.current.geometry.dispose(),ne.current.material.dispose(),ne.current=null),M.current&&g.current)try{g.current.contains(M.current.domElement)&&g.current.removeChild(M.current.domElement),M.current.dispose()}catch{}}},[]),C.useEffect(()=>{const y=setInterval(()=>{const A=Ae.getStats();$(x=>({...x,activeEffects:A.activeEffects,enabledEffects:A.enabledEffects}))},1e4);return()=>clearInterval(y)},[]),C.useEffect(()=>{w&&v.current&&b.current&&Ie()},[w,Ie]),mi(w),l.jsxs("div",{className:`relative ${e}`,children:[r&&w&&l.jsx(hi,{planetData:w,showInPage:!0,showInConsole:!0}),l.jsx("div",{ref:g,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),j&&l.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:l.jsxs("div",{className:"text-white text-center",children:[l.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),l.jsx("div",{children:"Loading planet..."})]})}),R&&l.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[l.jsx("strong",{children:"Error:"})," ",R]}),w&&!j&&l.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[l.jsx("h3",{className:"text-lg font-bold",children:w.planet_info.name}),l.jsx("p",{className:"text-sm opacity-80",children:w.planet_info.type}),l.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[k.length," effects active"]}),w.surface_elements?.description&&l.jsx("p",{className:"text-xs mt-2 opacity-60",children:w.surface_elements.description.appearance})]}),r&&l.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[l.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),l.jsxs("div",{children:["Frame Rate: ",Q.frameRate," FPS"]}),l.jsxs("div",{children:["Render Time: ",Q.renderTime,"ms"]}),l.jsxs("div",{children:["Active Effects: ",Q.activeEffects]}),l.jsxs("div",{children:["Enabled Effects: ",Q.enabledEffects]}),l.jsxs("div",{className:"mt-2",children:[l.jsx("div",{className:"font-semibold",children:"Effects:"}),k.map(y=>l.jsxs("div",{className:"ml-2",children:[y.type," (",y.enabled?"ON":"OFF",")"]},y.id))]})]})]})};class fi extends Bt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?l.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:l.jsxs("div",{className:"text-center p-4",children:[l.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),l.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const pi=s=>l.jsx(fi,{children:l.jsx(ui,{...s})}),gi=({planetUrl:s,imageUrl:e,planet:t,cosmicOriginTime:o,initialAngleRotation:i,onEffectsCreated:a,effects:r,onToggleEffect:c})=>{const d=C.useRef(null),h=C.useRef(null),[n,u]=C.useState("Aligning Stargate..."),[p,g]=C.useState(!1),[v,M]=C.useState(!1),[E,b]=C.useState(!1),[m,_]=C.useState(!0),[N,T]=C.useState(!0),[S,j]=C.useState(null),[O,R]=C.useState(null);C.useEffect(()=>{r&&c&&r.forEach(w=>{Ae.toggleEffect(w.id,w.enabled)})},[r]),C.useEffect(()=>{const w=document.createElement("style");return w.textContent=`
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
    `,document.head.appendChild(w),()=>{document.head.removeChild(w)}},[]),C.useEffect(()=>{const w=d.current;if(!w)return;const F=w.getContext("2d");if(!F)return;let k=[];const G=800;let Q,$;const q=800;let I,z=.5;function L(){const te=w?.parentElement;if(!te||!w)return;const ue=te.clientWidth,pe=te.clientHeight;w.width=Math.min(ue,q),w.height=Math.min(pe,q),Q=w.width/2,$=w.height/2}function Z(){L(),k=[];for(let te=0;te<G;te++)k.push({x:Math.random()*(w?.width||800),y:Math.random()*(w?.height||800),z:Math.random()*(w?.width||800),o:Math.random()});ee()}function ee(){!w||!F||(F.clearRect(0,0,w.width,w.height),k.forEach(te=>{te.z-=z,te.z<=0&&(te.z=w.width,te.x=Math.random()*w.width,te.y=Math.random()*w.height,te.o=Math.random());const ue=w.width/te.z,pe=(te.x-Q)*ue+Q,xe=(te.y-$)*ue+$,ge=2*ue;F.beginPath(),F.fillStyle=`rgba(255, 255, 255, ${te.o})`,F.arc(pe,xe,ge,0,2*Math.PI),F.fill()}),z<60&&(z+=1),I=requestAnimationFrame(ee))}Z();const he=()=>L();return window.addEventListener("resize",he),()=>{window.removeEventListener("resize",he),I&&cancelAnimationFrame(I)}},[]),C.useEffect(()=>{if(e&&!m){const w=new Image;w.onload=()=>{h.current&&(h.current.src=e,M(!0),b(!0))},w.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{M(!0),b(!0)},1500)},w.src=e}else(m||!e)&&setTimeout(()=>{M(!0),b(!0)},1500)},[e,m]),C.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){u("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),g(!0);const F=(q,I)=>Array.from({length:I},()=>q[Math.floor(Math.random()*q.length)]).join(""),k=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let G=0,Q=0;const $=()=>{if(G>=k.length){const I="Stargate system aligned";let z=0;u("");const L=()=>{z<I.length?(u(I.substring(0,z+1)),z++,setTimeout(L,30)):g(!1)};L();return}const q=k[G];u(F(q.chars,32)),Q++,Q>=q.iterations&&(G++,Q=0),setTimeout($,q.duration)};$()},[]);const Y=()=>{_(!m),m||(M(!0),b(!0))};return l.jsxs("div",{className:"h-full flex flex-col",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),N&&l.jsx("div",{className:"flex items-center gap-2",children:l.jsx("button",{onClick:Y,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${m?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:m?"2D View":"3D View"})})]}),l.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[l.jsx("canvas",{ref:d,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${E?"opacity-0":"opacity-100"}`,style:{filter:E?"blur(50px)":"none"}}),m&&v&&t&&l.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${v?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:l.jsx(pi,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,onEffectsCreated:a,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:o,initialAngleRotation:i,onDataLoaded:w=>{j(w)},onError:w=>{R(w),console.error("❌ Planet rendering error:",w)}})}),!m&&l.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${v?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:v&&e?l.jsx("div",{className:"w-full h-full flex items-center justify-center",children:l.jsx(ro,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:l.jsx("img",{ref:h,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):l.jsx("img",{ref:h,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),N&&l.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:m?"🌍 3D":"🖼️ 2D"})]}),l.jsxs("div",{className:"text-center mt-auto",children:[l.jsxs("a",{href:s,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${p?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[l.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[l.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:l.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),n]}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),l.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",m&&S&&l.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",S.planet_info?.type," Planet",S.atmosphere&&l.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),S.rings?.has_rings&&l.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),m&&O&&l.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},vi=({currentPlanet:s,system:e,galaxy:t,systemPlanets:o})=>{const[i,a]=C.useState(null),[r,c]=C.useState(null),[d,h]=C.useState(!1),[n,u]=C.useState(!1),[p,g]=C.useState(!0);C.useEffect(()=>{if(o&&o.length>0){const E=o.findIndex(b=>b.name.toLowerCase()===s.toLowerCase());E!==-1?(E>0?(a(o[E-1].name.toLowerCase()),h(!0)):e.index>0?(a("__prev_system__"),h(!0)):h(!1),E<o.length-1?(c(o[E+1].name.toLowerCase()),u(!0)):(c("__next_system__"),u(!0))):(h(!1),u(!1))}else h(!1),u(!1);g(!1)},[s,e.index,o]);const v=async()=>{const E=t.coordinates.join(",");if(i==="__prev_system__")try{const b=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(b.ok){const m=await b.json();if(m.system&&m.system.planets&&m.system.planets.length>0){const N=m.system.planets[m.system.planets.length-1].name.toLowerCase();qe(E,e.index-1,N,m.system.planets),bt(E,e.index-1),window.location.href=`/planet/${N}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else i&&(qe(E,e.index,i,o),window.location.href=`/planet/${i}`)},M=async()=>{const E=t.coordinates.join(",");if(r==="__next_system__")try{const b=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(b.ok){const m=await b.json();if(m.system&&m.system.planets&&m.system.planets.length>0){const N=m.system.planets[0].name.toLowerCase();qe(E,e.index+1,N,m.system.planets),bt(E,e.index+1),window.location.href=`/planet/${N}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else r&&(qe(E,e.index,r,o),window.location.href=`/planet/${r}`)};return p?null:l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("button",{onClick:v,disabled:!d,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${d?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),l.jsx("button",{onClick:M,disabled:!n,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${n?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:l.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},yi=({planet:s,system:e,galaxy:t,planet_url:o,version:i,image_url:a,cosmic_origin_time:r,initial_angle_rotation:c})=>{const[d]=C.useState(t.coordinates.join(",")),[h,n]=C.useState([]),u=E=>{n(E)},p=(E,b)=>{n(m=>m.map(_=>_.id===E?{..._,enabled:b}:_))};C.useEffect(()=>{document.body.setAttribute("data-coordinates",d),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",s.name.toLowerCase()),qe(d,e.index,s.name,e.planets||[]),bt(d,e.index)},[d,e.index,s.name]);const g=E=>E.replace(/_/g," "),v=E=>E.replace(/_/g," "),M=E=>E.replace(/_/g," ");return l.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[l.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),l.jsxs("div",{className:"relative z-10",children:[l.jsx(so,{}),l.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:l.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",g(s.name),"'"]})}),l.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",v(e.name),"' - Galaxy '",M(t.name),"'"]}),l.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),l.jsx(vi,{currentPlanet:s.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),l.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:l.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[l.jsx("div",{className:"order-1 lg:order-1",children:l.jsx(gi,{planetUrl:o,imageUrl:a,planet:s,cosmicOriginTime:r,initialAngleRotation:c,onEffectsCreated:u,effects:h,onToggleEffect:p})}),l.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),l.jsx("div",{className:"order-2 lg:order-2",children:l.jsx(No,{planet:s,system:e,galaxy:t,cosmicOriginTime:r,initialAngleRotation:c,effects:h,onToggleEffect:p})})]})}),l.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:l.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:l.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",v(e.name),"'"]})})})]}),l.jsx(io,{version:i})]}),l.jsx(lo,{currentLocation:{type:"planet",name:s.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:s.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const s=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),o=document.getElementById("meta-data");if(!s||!e||!t||!o){console.error("Missing required data elements");return}const i=JSON.parse(s.textContent||"{}"),a=JSON.parse(e.textContent||"{}"),r=JSON.parse(t.textContent||"{}"),c=JSON.parse(o.textContent||"{}"),d={planet:i,system:a,galaxy:r,planet_url:c.planet_url,version:c.version,image_url:c.image_url,cosmic_origin_time:c.cosmic_origin_time,initial_angle_rotation:c.initial_angle_rotation},h=document.getElementById("atlas-react-root");h&&ao.createRoot(h).render(Bt.createElement(yi,d))}catch(s){console.error("Error initializing Planet React app:",s)}});
