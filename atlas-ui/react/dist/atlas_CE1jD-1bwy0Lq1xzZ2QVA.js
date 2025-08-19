import{r as T,j as d,R as Xt,V as li,c as ci}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as hi}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as di,U as mi,m as tt,c as wt,a as ui}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as fi,V as C,n as We,T as Ge,Q as Lt,l as Ot,o as Se,R as pi,p as gi,q as qt,e as Ce,r as ee,s as ue,N as Ae,t as Xe,c as ct,C as g,u as yi,v as ke,d as ve,G as Oe,w as Kt,x as At,F as we,y as Et,z as Mt,h as vi,H as xi,I as bi,J as He,B as Jt,K as Tt,O as Si,U as _i,X as wi,L as Ct,g as Pt,Y as Ei,Z as Mi,_ as Ze,M as Qt,$ as Ti,S as Ci,P as Pi,W as Ai,a0 as Ii,a1 as Ni,a2 as Di,D as zt,A as Ri}from"./atlas_BVw4Oz7k70lSX13lINg8j.js";const Li=({effects:n,onToggleEffect:e})=>{const[t,i]=T.useState(n),[s,a]=T.useState(!1);T.useEffect(()=>{i(n)},[n]);const l=(c,r)=>{i(o=>o.map(u=>u.id===c?{...u,enabled:r}:u)),e(c,r)},h=c=>c;return t.length===0?null:d.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("div",{className:"text-xs text-gray-400",children:"3D Effects Control"}),d.jsxs("button",{onClick:()=>a(!s),className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[s?"Hide":"Show"," (",t.filter(c=>c.enabled).length,"/",t.length,")"]})]}),s&&d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:t.map(c=>d.jsxs("div",{className:"bg-white/5 rounded p-2 flex items-center justify-between",children:[d.jsxs("label",{className:"flex items-center gap-2 cursor-pointer flex-1",children:[d.jsx("input",{type:"checkbox",checked:c.enabled,onChange:r=>l(c.id,r.target.checked),className:"rounded border-gray-400 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-white/10"}),d.jsx("span",{className:`${c.enabled?"text-white":"text-gray-500"} transition-colors`,children:h(c.type)})]}),d.jsx("span",{className:`text-[10px] ${c.enabled?"text-green-400":"text-gray-600"}`,children:c.enabled?"ON":"OFF"})]},c.id))}),s&&t.length>3&&d.jsxs("div",{className:"mt-2 flex gap-2",children:[d.jsx("button",{onClick:()=>{t.forEach(c=>l(c.id,!0))},className:"text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors",children:"Enable All"}),d.jsx("button",{onClick:()=>{t.forEach(c=>l(c.id,!1))},className:"text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors",children:"Disable All"})]})]})},Oi=({planet:n,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:s,effects:a,onToggleEffect:l})=>{const[h,c]=T.useState(!1),r=y=>y.replace(/_/g," "),o=y=>{const x=y/86400;return x<30?`${x.toFixed(2)} days`:x<365?`${(x/30).toFixed(2)} months`:`${(x/365).toFixed(2)} years`},u=y=>{const x=y*9/5+32;return`${y.toFixed(1)}°C (${x.toFixed(1)}°F)`},f=y=>`${y.toExponential(2)} kg`,p=y=>y>=1e3?`${(y/1e3).toFixed(2)} km`:`${y.toFixed(2)} m`;return d.jsxs("div",{className:"h-full flex flex-col relative",children:[d.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),d.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[d.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),d.jsx(di,{type:"planet",name:n.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:n.name,className:"text-xs"})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[d.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[d.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),d.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:n.planet_type})]}),d.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[d.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),d.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:n.atmosphere})]}),d.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[d.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),d.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:n.life_forms})]})]}),d.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[d.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),d.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[d.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[d.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),d.jsx("div",{className:"text-xs font-bold text-orange-300",children:f(n.mass)})]}),d.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[d.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),d.jsx("div",{className:"text-xs font-bold text-orange-300",children:p(n.diameter)})]}),d.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[d.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),d.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[n.density.toFixed(2)," kg/m³"]})]}),d.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[d.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),d.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[n.gravity.toFixed(2)," m/s²"]})]})]})]}),d.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[d.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),d.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[d.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[d.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),d.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[n.orbital_radius.toFixed(2)," AU"]})]}),d.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[d.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),d.jsx("div",{className:"text-xs font-bold text-cyan-300",children:o(n.orbital_period_seconds)})]}),d.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[d.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),d.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[n.orbital_speed.toFixed(2)," m/s"]})]}),d.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[d.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),d.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[n.axial_tilt.toFixed(2),"°"]})]})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[d.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[d.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),d.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[d.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[d.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),d.jsx("div",{className:"text-xs font-bold text-red-300",children:u(n.surface_temperature)})]}),d.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[d.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),d.jsx("div",{className:"text-xs font-bold text-red-300",children:o(n.rotation_period_seconds)})]})]})]}),d.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",n.elements.length,")"]}),n.elements.length>4&&d.jsx("button",{onClick:()=>c(!h),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:h?"▲ Less":"▼ All"})]}),d.jsx("div",{className:"flex flex-wrap gap-1",children:(h?n.elements:n.elements.slice(0,4)).map((y,x)=>d.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:y},x))})]})]}),d.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[d.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),d.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[d.jsxs("div",{className:"bg-white/5 rounded p-2",children:[d.jsx("span",{className:"text-gray-400",children:"Status:"}),d.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),d.jsxs("div",{className:"bg-white/5 rounded p-2",children:[d.jsx("span",{className:"text-gray-400",children:"Planet:"}),d.jsx("div",{className:"text-white truncate font-medium",children:r(n.name)})]}),d.jsxs("div",{className:"bg-white/5 rounded p-2",children:[d.jsx("span",{className:"text-gray-400",children:"System:"}),d.jsx("div",{className:"text-white truncate font-medium",children:r(e.name)})]}),d.jsxs("div",{className:"bg-white/5 rounded p-2",children:[d.jsx("span",{className:"text-gray-400",children:"System ID:"}),d.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),d.jsxs("div",{className:"bg-white/5 rounded p-2",children:[d.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),d.jsx("div",{className:"text-white truncate font-medium",children:r(t.name)})]}),d.jsxs("div",{className:"bg-white/5 rounded p-2",children:[d.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),d.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]}),a&&l&&d.jsx(Li,{effects:a,onToggleEffect:l})]})},Ft={type:"change"},It={type:"start"},ei={type:"end"},ut=new pi,jt=new gi,zi=Math.cos(70*qt.DEG2RAD),de=new C,xe=2*Math.PI,J={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xt=1e-6;class Fi extends fi{constructor(e,t=null){super(e,t),this.state=J.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:We.ROTATE,MIDDLE:We.DOLLY,RIGHT:We.PAN},this.touches={ONE:Ge.ROTATE,TWO:Ge.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Lt,this._lastTargetPosition=new C,this._quat=new Lt().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ot,this._sphericalDelta=new Ot,this._scale=1,this._panOffset=new C,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new C,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ki.bind(this),this._onPointerDown=ji.bind(this),this._onPointerUp=Ui.bind(this),this._onContextMenu=Zi.bind(this),this._onMouseWheel=Yi.bind(this),this._onKeyDown=Bi.bind(this),this._onTouchStart=Wi.bind(this),this._onTouchMove=Hi.bind(this),this._onMouseDown=Vi.bind(this),this._onMouseMove=Gi.bind(this),this._interceptControlDown=$i.bind(this),this._interceptControlUp=Xi.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ft),this.update(),this.state=J.NONE}update(e=null){const t=this.object.position;de.copy(t).sub(this.target),de.applyQuaternion(this._quat),this._spherical.setFromVector3(de),this.autoRotate&&this.state===J.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=xe:i>Math.PI&&(i-=xe),s<-Math.PI?s+=xe:s>Math.PI&&(s-=xe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(de.setFromSpherical(this._spherical),de.applyQuaternion(this._quatInverse),t.copy(this.target).add(de),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const h=de.length();l=this._clampDistance(h*this._scale);const c=h-l;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const h=new C(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const r=new C(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(h),this.object.updateMatrixWorld(),l=de.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(ut.origin.copy(this.object.position),ut.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ut.direction))<zi?this.object.lookAt(this.target):(jt.setFromNormalAndCoplanarPoint(this.object.up,this.target),ut.intersectPlane(jt,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>xt||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xt||this._lastTargetPosition.distanceToSquared(this.target)>xt?(this.dispatchEvent(Ft),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xe/60*this.autoRotateSpeed*e:xe/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){de.setFromMatrixColumn(t,0),de.multiplyScalar(-e),this._panOffset.add(de)}_panUp(e,t){this.screenSpacePanning===!0?de.setFromMatrixColumn(t,1):(de.setFromMatrixColumn(t,0),de.crossVectors(this.object.up,de)),de.multiplyScalar(e),this._panOffset.add(de)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;de.copy(s).sub(this.target);let a=de.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,l=i.width,h=i.height;this._mouse.x=s/l*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(xe*this._rotateDelta.x/t.clientHeight),this._rotateUp(xe*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-xe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(xe*this._rotateDelta.x/t.clientHeight),this._rotateUp(xe*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(l,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ji(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ki(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ui(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ei),this.state=J.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Vi(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=J.DOLLY;break;case We.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=J.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=J.ROTATE}break;case We.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=J.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=J.PAN}break;default:this.state=J.NONE}this.state!==J.NONE&&this.dispatchEvent(It)}function Gi(n){switch(this.state){case J.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case J.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case J.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Yi(n){this.enabled===!1||this.enableZoom===!1||this.state!==J.NONE||(n.preventDefault(),this.dispatchEvent(It),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ei))}function Bi(n){this.enabled!==!1&&this._handleKeyDown(n)}function Wi(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ge.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=J.TOUCH_ROTATE;break;case Ge.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=J.TOUCH_PAN;break;default:this.state=J.NONE}break;case 2:switch(this.touches.TWO){case Ge.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=J.TOUCH_DOLLY_PAN;break;case Ge.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=J.TOUCH_DOLLY_ROTATE;break;default:this.state=J.NONE}break;default:this.state=J.NONE}this.state!==J.NONE&&this.dispatchEvent(It)}function Hi(n){switch(this._trackPointer(n),this.state){case J.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case J.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case J.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case J.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=J.NONE}}function Zi(n){this.enabled!==!1&&n.preventDefault()}function $i(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xi(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class kt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class ti{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:s,ring_outer_radius:a,tilt_factor:l,planet_radius:h,shape_seed:c}=e;if(!t||!i){console.warn("No ring data provided");return}const r=[...t.particles,...i.particles],o=r.length,u=new kt(c||12345),f=new Ce,p=new Float32Array(o*3),y=new Float32Array(o*3),x=new Float32Array(o),w=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],v=u.choice(w);for(let m=0;m<o;m++){const b=r[m],A=this.planetRadius/(h||200),P=(c||12345)+m,E=new kt(P),L=b.distance*A,z=b.angle,R=L*Math.sin(z),G=Math.asin((l||.2)*.5),M=R*Math.sin(G),k=R*Math.cos(G),U=((a||400)-(s||200))*A*.4,Y=E.uniform(-U*.8,U*.8),Q=E.uniform(-U*.3,U*.3),Z=E.uniform(-.08,.08),q=L+Q,N=z+Z;p[m*3]=q*Math.cos(N),p[m*3+1]=M+Y+this.planetRadius*.15,p[m*3+2]=k+E.uniform(-U*.4,U*.4),b.color[0]/255;const O=(b.distance-(s||200))/((a||400)-(s||200)),$=v.baseGray,te=v.variation,me=E.uniform(-te,te),ie=Math.max(.12,Math.min(.45,$+me)),fe=.8+O*.4,ge=E.uniform(.85,1.15),be=E.uniform(0,1),ye=be<.03?E.uniform(1.1,1.3):1,Ee=ie*fe*ge*ye,le=Math.max(.1,Math.min(.55,Ee));y[m*3]=le,y[m*3+1]=le,y[m*3+2]=le;const Ie=.15,Me=E.uniform(.3,.7),ne=be<.1?E.uniform(1.05,1.2):1;x[m]=b.size*Ie*Me*ne}f.setAttribute("position",new ee(p,3)),f.setAttribute("color",new ee(y,3)),f.setAttribute("size",new ee(x,1)),this.material=new ue({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Ae}),this.ringSystem=new Xe(f,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,s=t.cosmicOriginTime||Date.now()/1e3,a=t.initialAngleRotation||0,h=Date.now()/1e3-s,c=2*Math.PI/i,r=(a+h*c)%(2*Math.PI);this.ringSystem.rotation.y=r}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function qi(n,e){const t={full_ring:n.full_ring,ontop_ring:n.ontop_ring,ring_inner_radius:n.ring_inner_radius,ring_outer_radius:n.ring_outer_radius,tilt_factor:n.tilt_factor,planet_radius:n.planet_radius,shape_seed:n.shape_seed};return new ti(e,t)}class it{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new ct(i,32,32);const s=new g(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ue({vertexShader:it.vertexShader,fragmentShader:it.fragmentShader,uniforms:{atmosphereColor:{value:s},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:ke,side:yi,depthWrite:!1}),this.mesh=new ve(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new g(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ki(n,e){let t=[.7,.7,.7,.15],i=12;if(e){if(e.color&&Array.isArray(e.color)){const a=e.color;t=[a[0],a[1],a[2],(a[3]||.15)*.7]}e.width&&(i=e.width)}const s={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new it(n,s)}class j{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,i=Math.acos(this.random()*2-1);return{x:e*Math.sin(i)*Math.cos(t),y:e*Math.sin(i)*Math.sin(t),z:e*Math.cos(i)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const B={PARTICLE_COUNT:{min:25,max:150},SPEED:{min:.05,max:.5},SIZE:{min:.3,max:1.5},OPACITY:{min:.1,max:.3},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05},TIME_SPEED:{min:.1,max:3}};class st{particleSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),s=new j(i);this.startTime=t.startTime||i%1e4/1e3,this.params={color:t.color||new g(16777215),particleCount:t.particleCount||Math.floor(s.uniform(B.PARTICLE_COUNT.min,B.PARTICLE_COUNT.max)),speed:t.speed||s.uniform(B.SPEED.min,B.SPEED.max),size:t.size||s.uniform(B.SIZE.min,B.SIZE.max),opacity:t.opacity||s.uniform(B.OPACITY.min,B.OPACITY.max),turbulence:t.turbulence||s.uniform(B.TURBULENCE.min,B.TURBULENCE.max),rotationSpeed:t.rotationSpeed||s.uniform(B.ROTATION_SPEED.min,B.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||s.uniform(B.MOVEMENT_AMPLITUDE.min,B.MOVEMENT_AMPLITUDE.max),timeSpeed:t.timeSpeed||s.uniform(B.TIME_SPEED.min,B.TIME_SPEED.max),seed:i,startTime:this.startTime},this.particleCount=this.params.particleCount,this.geometry=new Ce,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new Xe(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),s=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),h=this.params.color instanceof g?this.params.color:new g(this.params.color),c=this.params.seed||Math.floor(Math.random()*1e6),r=new j(c);for(let o=0;o<this.particleCount;o++){const u=r.spherePosition(e*r.uniform(1,1.1));t[o*3]=u.x,t[o*3+1]=u.y,t[o*3+2]=u.z;const f=r.colorVariation({r:h.r,g:h.g,b:h.b});i[o*3]=f.r,i[o*3+1]=f.g,i[o*3+2]=f.b,s[o]=this.params.size*r.uniform(.75,1.25),a[o]=this.params.speed*r.uniform(.6,1.4),l[o]=r.random()*Math.PI*2}this.geometry.setAttribute("position",new ee(t,3)),this.geometry.setAttribute("customColor",new ee(i,3)),this.geometry.setAttribute("size",new ee(s,1)),this.geometry.setAttribute("speed",new ee(a,1)),this.geometry.setAttribute("phase",new ee(l,1))}createMaterial(){return new ue({vertexShader:st.vertexShader,fragmentShader:st.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:ke,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.particleSystem.rotation.y=i*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ut(n,e,t){const i=e.streaks||{},s=t||Math.floor(Math.random()*1e6),a=new j(s+3e3),l=i.count||Math.floor(a.uniform(B.PARTICLE_COUNT.min,B.PARTICLE_COUNT.max)),h=i.speed||a.uniform(B.SPEED.min,B.SPEED.max),c=a.uniform(B.SIZE.min,B.SIZE.max),r=a.uniform(B.OPACITY.min,B.OPACITY.max),o=a.uniform(B.TURBULENCE.min,B.TURBULENCE.max),u=a.uniform(B.ROTATION_SPEED.min,B.ROTATION_SPEED.max),f=a.uniform(B.MOVEMENT_AMPLITUDE.min,B.MOVEMENT_AMPLITUDE.max),p=a.uniform(B.TIME_SPEED.min,B.TIME_SPEED.max),y={color:i.color?new g().setRGB(i.color[0],i.color[1],i.color[2]):new g(16777215),particleCount:l,speed:h,size:c,opacity:r,turbulence:o,seed:s,rotationSpeed:u,movementAmplitude:f,timeSpeed:p};return new st(n,y)}const W={CLOUD_COUNT:{min:15,max:30},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.9},DENSITY:{min:.5,max:2},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},PUFFINESS:{min:1,max:1.4},TIME_SPEED:{min:.1,max:3}};class $e{cloudSystem;material;params;cloudCount;clouds=[];startTime;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),s=new j(i);this.startTime=t.startTime||i%1e4/1e3,this.params={color:t.color||new g(16777215),cloudCount:t.cloudCount||Math.floor(s.uniform(W.CLOUD_COUNT.min,W.CLOUD_COUNT.max)),size:t.size||s.uniform(W.SIZE.min,W.SIZE.max),opacity:t.opacity||s.uniform(W.OPACITY.min,W.OPACITY.max),density:t.density||s.uniform(W.DENSITY.min,W.DENSITY.max),rotationSpeed:t.rotationSpeed||s.uniform(W.ROTATION_SPEED.min,W.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||s.uniform(W.MOVEMENT_AMPLITUDE.min,W.MOVEMENT_AMPLITUDE.max),puffiness:t.puffiness||s.uniform(W.PUFFINESS.min,W.PUFFINESS.max),timeSpeed:t.timeSpeed||s.uniform(W.TIME_SPEED.min,W.TIME_SPEED.max),seed:i,startTime:this.startTime},this.cloudCount=this.params.cloudCount,this.cloudSystem=new Oe,this.material=this.createMaterial(),this.generateClouds(e)}generateClouds(e){const t=this.params.color instanceof g?this.params.color:new g(this.params.color),i=this.params.seed||Math.floor(Math.random()*1e6),s=new j(i),a=this.params.cloudsFromPython;for(let l=0;l<this.cloudCount;l++){let h,c,r,o=t,u=this.params.size*s.uniform(.8,1.2);if(a&&l<a.length){const R=a[l];h=R.position[0]*e*1.04,c=R.position[1]*e*1.04,r=R.position[2]*e*1.04,R.color&&(o=new g().setRGB(R.color[0],R.color[1],R.color[2])),u=R.radius*e*.8}else{const R=s.uniform(0,2*Math.PI),G=s.uniform(-1,1),M=Math.acos(G),k=e*s.uniform(1.02,1.06);h=k*Math.sin(M)*Math.cos(R),c=k*Math.sin(M)*Math.sin(R),r=k*Math.cos(M)}const f=u*s.uniform(.3,.8),p=Math.max(8,Math.floor(f*15)),y=new Kt(f*2,f*2,p,p),x=new C(h,c,r);new C(0,0,0);const w=x.clone().normalize(),v=new C,m=new C;Math.abs(w.y)<.99?v.crossVectors(w,new C(0,1,0)).normalize():v.crossVectors(w,new C(1,0,0)).normalize(),m.crossVectors(w,v).normalize();const b=new At;b.makeBasis(v,m,w);const A=y.attributes.position,P=new C,E=Math.sqrt(h*h+c*c+r*r);y.applyMatrix4(b);for(let R=0;R<A.count;R++){P.fromBufferAttribute(A,R);const U=P.clone().add(x).clone().normalize().multiplyScalar(E).sub(x);A.setXYZ(R,U.x,U.y,U.z)}A.needsUpdate=!0,y.computeVertexNormals(),y.translate(h,c,r);const L=this.material.clone();L.uniforms.cloudColor.value=o,L.uniforms.density.value=this.params.density*s.uniform(.8,1.2),L.uniforms.noiseOffset.value=new Se(s.uniform(0,100),s.uniform(0,100)),L.uniforms.shapeVariation.value=s.uniform(-1,1),L.uniforms.lightDirection.value=this.material.uniforms.lightDirection.value.clone(),L.uniforms.lightPosition.value=this.material.uniforms.lightPosition.value.clone();const z=new ve(y,L);z.userData.isAtmosphericCloud=!0,z.userData.planetNormal=w.clone(),this.clouds.push(z),this.cloudSystem.add(z)}}createMaterial(){return new ue({vertexShader:$e.vertexShader,fragmentShader:$e.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},cloudColor:{value:new g(16777215)},density:{value:this.params.density},noiseOffset:{value:new Se(0,0)},shapeVariation:{value:0},lightDirection:{value:new C(1,1,1).normalize()},lightPosition:{value:new C(0,0,0)}},transparent:!0,blending:Ae,depthWrite:!1,side:we})}addToScene(e,t){t&&this.cloudSystem.position.copy(t),e.add(this.cloudSystem)}update(e,t){const s=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.clouds.forEach(a=>{const l=a.material;l.uniforms.time.value=s}),this.cloudSystem.rotation.y=s*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},this.clouds.forEach(t=>{const i=t.material;e.opacity!==void 0&&(i.uniforms.opacity.value=e.opacity),e.movementAmplitude!==void 0&&(i.uniforms.movementAmplitude.value=e.movementAmplitude)})}updateLightPosition(e){this.clouds.forEach(t=>{const i=t.material;i.uniforms.lightPosition&&i.uniforms.lightPosition.value.copy(e)})}updateLightDirection(e){this.clouds.forEach(t=>{const i=t.material;i.uniforms.lightDirection&&i.uniforms.lightDirection.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function Qe(n,e,t){const i=e.clouds||[];if(i.length===0){const h=t||Math.floor(Math.random()*1e6),c=new j(h+4e3),r={color:new g(1,1,1),cloudCount:15,size:.6,opacity:.7,density:.8,seed:h,rotationSpeed:.005,movementAmplitude:.02,puffiness:1.5,timeSpeed:c.uniform(W.TIME_SPEED.min,W.TIME_SPEED.max)};return new $e(n,r)}const s=t||Math.floor(Math.random()*1e6),a=new j(s+4e3),l={color:new g(16777215),cloudCount:i.length,size:a.uniform(W.SIZE.min,W.SIZE.max),opacity:a.uniform(W.OPACITY.min,W.OPACITY.max),density:a.uniform(W.DENSITY.min,W.DENSITY.max),seed:s,rotationSpeed:a.uniform(W.ROTATION_SPEED.min,W.ROTATION_SPEED.max),movementAmplitude:a.uniform(W.MOVEMENT_AMPLITUDE.min,W.MOVEMENT_AMPLITUDE.max),puffiness:a.uniform(W.PUFFINESS.min,W.PUFFINESS.max),timeSpeed:a.uniform(W.TIME_SPEED.min,W.TIME_SPEED.max),cloudsFromPython:i};return new $e(n,l)}class Nt{landGroup;lands=[];constructor(e,t={}){this.landGroup=new Oe;const i=t.seed||Math.floor(Math.random()*1e6),s=new j(i);t.greenPatches&&t.greenPatches.length>0?this.generateLandsFromPython(e,t.greenPatches,s,t):this.generateProceduralLands(e,s,t)}generateLandsFromPython(e,t,i,s){t.forEach((a,l)=>{let h=a.position_3d||a.position||[0,0,1];if(h.length===2){const N=i.uniform(0,Math.PI*2),F=Math.acos(i.uniform(-1,1));h=[Math.sin(F)*Math.cos(N),Math.sin(F)*Math.sin(N),Math.cos(F)]}const c=(a.size||.1)*e*1.8;Math.max(8,Math.min(a.sides||20,12));let r=new g(4881497),o=1;a.color&&Array.isArray(a.color)&&(r=new g(a.color[0],a.color[1],a.color[2]),a.color.length>3&&(o=a.color[3]));const u=Math.max(24,Math.min(64,Math.floor(c*32))),f=new C(h[0],h[1],h[2]).normalize(),p=new C,y=new C;Math.abs(f.y)<.99?p.crossVectors(f,new C(0,1,0)).normalize():p.crossVectors(f,new C(1,0,0)).normalize(),y.crossVectors(f,p).normalize();const x=2/Math.max(c*.05,1),w=(N,F)=>{let O=0,$=1,te=x,me=0;const ie=Math.min(5,Math.max(3,Math.floor(c/40)+2));for(let fe=0;fe<ie;fe++){const ge=N*te,be=F*te,ye=(Te,dt)=>{const Je=Te*12.9898+dt*78.233;return Math.sin(Je+i.uniform(0,1e3))*43758.5453%1},Ee=Math.floor(ge),le=Math.floor(be),Ie=ge-Ee,Me=be-le,ne=Te=>Te*Te*Te*(Te*(Te*6-15)+10),Ne=ne(Ie),ze=ne(Me),qe=ye(Ee,le),Ke=ye(Ee+1,le),ht=ye(Ee,le+1),Fe=ye(Ee+1,le+1),Re=qe*(1-Ne)+Ke*Ne,yt=ht*(1-Ne)+Fe*Ne,Ue=Re*(1-ze)+yt*ze;O+=Ue*$,me+=$,$*=.5,te*=2.2}return O/me},v=[],m=[],b=[],A=.35,P=new Map,E=new Map;let L=0;for(let N=0;N<=u;N++)for(let F=0;F<=u;F++){const O=(N/u-.5)*2,$=(F/u-.5)*2,te=Math.sqrt(O*O+$*$),me=w(O*2,$*2);if(1-te*.5+me*.6>A&&te<1.2){const fe=O*c,ge=$*c,ye=new C().addScaledVector(p,fe).addScaledVector(y,ge).addScaledVector(f,0);v.push(ye.x,ye.y,ye.z),b.push((O+1)*.5,($+1)*.5),P.set(`${N},${F}`,L),E.set(`${N},${F}`,me),L++}}for(let N=0;N<u;N++)for(let F=0;F<u;F++){const O=P.get(`${N},${F}`),$=P.get(`${N+1},${F}`),te=P.get(`${N},${F+1}`),me=P.get(`${N+1},${F+1}`);O!==void 0&&$!==void 0&&te!==void 0&&m.push(O,$,te),$!==void 0&&me!==void 0&&te!==void 0&&m.push($,me,te)}const z=new Ce;z.setAttribute("position",new Et(v,3)),z.setAttribute("uv",new Et(b,2)),z.setIndex(m),z.computeVertexNormals();const R=z.attributes.position,G=f.clone().multiplyScalar(e),M=new C;for(let N=0;N<R.count;N++){M.fromBufferAttribute(R,N);const O=M.clone().add(G).clone().normalize(),$=z.attributes.uv;if($){const te=$.getX(N)*2-1,me=$.getY(N)*2-1,ie=Math.sqrt(te*te+me*me),fe=w(te*2,me*2),be=Math.max(0,1-Math.pow(ie,.7))*.5+fe*.5,Ee=(Re=>Re*Re*(3-2*Re))(be),Ie=e*1.01-e,Me=c*.15,ne=Math.min(Me,Ie*.9),Ne=e*.002,ze=e+Ne,qe=e+Ne+ne,Ke=qt.lerp(ze,qe,Ee),Fe=O.multiplyScalar(Ke).sub(G);R.setXYZ(N,Fe.x,Fe.y,Fe.z)}}R.needsUpdate=!0,z.computeVertexNormals(),z.translate(G.x,G.y,G.z);const k=new Mt({color:s.transparentMode?new g(15135743):r,opacity:s.transparentMode?.3:o,transparent:s.transparentMode||o<1,emissive:s.transparentMode?new g(13428479).multiplyScalar(.1):r.clone().multiplyScalar(.05),emissiveIntensity:s.transparentMode?.05:1e-7,shininess:s.transparentMode?30:8,flatShading:!1,bumpScale:.002}),U=document.createElement("canvas");U.width=U.height=64;const Y=U.getContext("2d"),Q=Y.createImageData(64,64);for(let N=0;N<Q.data.length;N+=4){const F=i.uniform(.8,1.2),O=Math.floor(128*F);Q.data[N]=O,Q.data[N+1]=O,Q.data[N+2]=O,Q.data[N+3]=255}Y.putImageData(Q,0,0);const Z=new vi(U);Z.wrapS=Z.wrapT=xi,Z.repeat.set(2,2),k.bumpMap=Z;const q=new ve(z,k);q.castShadow=!0,q.receiveShadow=!0,this.lands.push(q),this.landGroup.add(q)})}generateProceduralLands(e,t,i){const s=Math.floor(t.uniform(5,15));for(let a=0;a<s;a++){const l=t.uniform(0,Math.PI*2),h=Math.acos(t.uniform(-1,1)),c=new C(Math.sin(h)*Math.cos(l),Math.sin(h)*Math.sin(l),Math.cos(h)),r=e*t.uniform(.02,.08),o=new bi(r,16),u=c.clone().multiplyScalar(e*1);o.lookAt(c),o.translate(u.x,u.y,u.z);const f=t.uniform(.3,.7),p=new g(.36*(1-f)+.22*f,.23*(1-f)+.36*f,0),x=i.tundraMode||!1?.25:1,w=new Mt({color:i.transparentMode?new g(15135743):p,opacity:i.transparentMode?.3:x,transparent:i.transparentMode||x<1,emissive:i.transparentMode?new g(13428479).multiplyScalar(.1):657920,shininess:i.transparentMode?30:5}),v=new ve(o,w);this.lands.push(v),this.landGroup.add(v)}}addToScene(e,t){t&&this.landGroup.position.copy(t),e.add(this.landGroup)}update(e){}getObject3D(){return this.landGroup}dispose(){this.lands.forEach(e=>{e.geometry.dispose(),e.material instanceof He&&e.material.dispose()}),this.lands=[],this.landGroup.clear()}}function bt(n,e,t){const i=e.green_patches;if(!i||i.length===0)return null;const s=t||Math.floor(Math.random()*1e6);return new Nt(n,{greenPatches:i,seed:s+6e3})}function Ji(n,e,t){const i=t||Math.floor(Math.random()*1e6),s=new j(i+7e3),a=Math.floor(s.uniform(3,8)),l=[];for(let h=0;h<a;h++){const c=s.uniform(0,Math.PI*2),r=Math.acos(s.uniform(-1,1));l.push({position_3d:[Math.sin(r)*Math.cos(c),Math.sin(r)*Math.sin(c),Math.cos(r)],size:s.uniform(.05,.15),sides:Math.floor(s.uniform(8,16)),color:[0,0,0]})}return console.log(`🧊 Creating ${a} transparent ice formations for Icy planet with seed ${i+7e3}`),new Nt(n,{greenPatches:l,seed:i+7e3,transparentMode:!0})}class Qi{featuresGroup;crystals=[];cracks=[];iceCaps=[];planetRadius;constructor(e,t={}){this.featuresGroup=new Oe,this.planetRadius=e;const i=t.seed||Math.floor(Math.random()*1e6),s=new j(i);t.crystals&&t.crystals.length>0&&this.generateCrystals(t.crystals,s),t.cracks&&t.cracks.length>0&&this.generateCracks(t.cracks),t.iceCaps&&t.iceCaps.length>0&&this.generateIceCaps(t.iceCaps,s)}generateCrystals(e,t){e.forEach(i=>{const s=i.position||[0,0],a=(i.width||.05)*this.planetRadius*.8,l=(i.length||.1)*this.planetRadius*.08,h=i.angle||0,c=i.color||[172/255,215/255,230/255,1],r=this.planetRadius*.015,o=Math.max(l,r),u=new Jt(a*2,o,a*1.5,4,2,4),f=u.attributes.position,p=new C;for(let Z=0;Z<f.count;Z++){if(p.fromBufferAttribute(f,Z),Math.abs(p.y)>o*.3){const q=Math.atan2(p.z,p.x),N=Math.sqrt(p.x*p.x+p.z*p.z),F=Math.round(q/(Math.PI/3))*(Math.PI/3),O=t.uniform(.8,1.2),$=N*O;p.x=Math.cos(F)*$,p.z=Math.sin(F)*$,p.y+=t.uniform(-o*.1,o*.1)}f.setXYZ(Z,p.x,p.y,p.z)}f.needsUpdate=!0,u.computeVertexNormals();const y=new Tt({color:new g(c[0],c[1],c[2]),transparent:!0,opacity:.8,metalness:0,roughness:.02,clearcoat:1,clearcoatRoughness:0,transmission:.7,ior:1.31,thickness:.5,emissive:new g(c[0],c[1],c[2]),emissiveIntensity:.02,flatShading:!1,side:we}),x=new ve(u,y);let w=Math.min(1,Math.max(-1,s[1]));const v=Math.pow(Math.abs(w),.3),m=Math.sign(w)*v,b=t.uniform(-.3,.3)*(1-Math.abs(m)),A=Math.min(1,Math.max(-1,m+b)),P=Math.acos(Math.abs(A)),E=Math.atan2(s[0],.001)+h,L=this.planetRadius*t.uniform(1.0005,1.001),z=L*Math.sin(P)*Math.cos(E),R=L*A,G=L*Math.sin(P)*Math.sin(E);x.position.set(z,R,G);const M=x.position.clone().normalize(),k=new C,U=new C;Math.abs(M.x)<.9?k.set(1,0,0):k.set(0,1,0),k.crossVectors(k,M).normalize(),U.crossVectors(M,k).normalize();const Y=new At;Y.makeBasis(k,M,U),x.rotation.setFromRotationMatrix(Y),x.rotateY(t.uniform(0,Math.PI*2));const Q=t.uniform(.8,1.2);x.scale.set(Q,Q,Q),this.crystals.push(x),this.featuresGroup.add(x)})}generateCracks(e){const t=new j(42);e.forEach(i=>{const s=i.angle||0,a=(i.length||1)*this.planetRadius*2,l=i.color||[80/255,80/255,80/255,.4],h=(i.width||1)*5e-4*this.planetRadius,c=t.uniform(.6,1),r=t.uniform(0,1)>.5?1:-1,o=Math.acos(c*r),u=[],f=20;for(let v=0;v<=f;v++){const m=v/f,b=Math.sin(m*Math.PI)*.1,P=s+(m-.5)*a/(this.planetRadius*Math.sin(Math.abs(o)))+b,E=this.planetRadius*1.002*Math.sin(Math.abs(o))*Math.cos(P),L=this.planetRadius*1.002*Math.cos(Math.abs(o))*r,z=this.planetRadius*1.002*Math.sin(Math.abs(o))*Math.sin(P);u.push(new C(E,L,z))}const p=new Si(u),y=new _i(p,f*2,h,8,!1),x=new Mt({color:new g(l[0],l[1],l[2]),transparent:!0,opacity:l[3]||.4,emissive:new g(0,0,0),shininess:5}),w=new ve(y,x);this.cracks.push(w),this.featuresGroup.add(w)})}generateIceCaps(e,t){e.forEach(i=>{const s=i.position||[0,0],a=(i.radius||.3)*this.planetRadius,l=i.color||[.678,.847,1,.8],h=Math.atan2(s[1],s[0]),c=Math.acos(Math.min(1,Math.max(-1,Math.sqrt(s[0]**2+s[1]**2)))),r=this.planetRadius*1.002*Math.sin(c)*Math.cos(h),o=this.planetRadius*1.002*Math.cos(c),u=this.planetRadius*1.002*Math.sin(c)*Math.sin(h),f=new C(r,o,u),p=f.clone().normalize(),y=new Oe,x=Math.floor(t.uniform(8,20));for(let w=0;w<x;w++){const v=t.uniform(0,Math.PI*2),m=t.uniform(0,a*.8),b=Math.cos(v)*m,A=Math.sin(v)*m,P=new C,E=new C;Math.abs(p.y)<.99?P.crossVectors(p,new C(0,1,0)).normalize():P.crossVectors(p,new C(1,0,0)).normalize(),E.crossVectors(p,P).normalize();const R=f.clone().addScaledVector(P,b).addScaledVector(E,A).normalize().multiplyScalar(this.planetRadius*t.uniform(1.002,1.008)),G=t.uniform(a*.05,a*.15),M=t.uniform(G*.4,G*4),k=new wi(G,M,6,1,!1),U=k.attributes.position,Y=new C;for(let N=0;N<U.count;N++)if(Y.fromBufferAttribute(U,N),Y.y>.1&&Y.y<M*.9){const F=Math.atan2(Y.z,Y.x),O=Math.sqrt(Y.x*Y.x+Y.z*Y.z),$=Math.round(F/(Math.PI/3))*(Math.PI/3),te=O*1.1;Y.x=Math.cos($)*te,Y.z=Math.sin($)*te,U.setXYZ(N,Y.x,Y.y,Y.z)}U.needsUpdate=!0,k.computeVertexNormals();const Q=new Tt({color:new g(l[0],l[1],l[2]),transparent:!0,opacity:.85,metalness:0,roughness:.05,clearcoat:1,clearcoatRoughness:0,transmission:.6,ior:1.31,thickness:.8,emissive:new g(l[0],l[1],l[2]),emissiveIntensity:.03,flatShading:!0,side:we}),Z=new ve(k,Q);Z.position.copy(R),Z.lookAt(0,0,0),Z.rotateX(Math.PI/2),Z.rotateZ(t.uniform(0,Math.PI*2));const q=t.uniform(.7,1.3);Z.scale.set(q,q,q),y.add(Z),this.iceCaps.push(Z)}this.featuresGroup.add(y)})}addToScene(e,t){t&&this.featuresGroup.position.copy(t),e.add(this.featuresGroup)}update(){}getObject3D(){return this.featuresGroup}dispose(){this.crystals.forEach(e=>{e.geometry.dispose(),e.material instanceof He&&e.material.dispose()}),this.cracks.forEach(e=>{e.geometry.dispose(),e.material instanceof He&&e.material.dispose()}),this.iceCaps.forEach(e=>{e.geometry.dispose(),e.material instanceof He&&e.material.dispose()}),this.crystals=[],this.cracks=[],this.iceCaps=[],this.featuresGroup.clear()}}function Vt(n,e,t){const i=e.crystals,s=e.cracks,a=e.ice_caps;if(!i&&!s&&!a)return null;const l=t||Math.floor(Math.random()*1e6);return new Qi(n,{crystals:i||[],cracks:s||[],iceCaps:a||[],seed:l+9e3})}class ii{snowflakeGroup;planetRadius;materials=[];particleSystems=[];trailPositions=[];trailColors=[];globalWindDirection;rng;startTime;timeSpeed;trailLength=15;particleCount;rotationSpeed;particleOpacity;windSpeedMultiplier;verticalOscillation;gustCycles;gustPhases;gustZones;burstZone;burstCycleDuration;burstDuration;burstStartOffset;constructor(e,t={}){this.snowflakeGroup=new Oe,this.planetRadius=e;const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new j(i),this.particleCount=t.particleCount||10,t.windSpeed;const s=(t.size||1)*(e*.2),a=t.opacity||1;this.globalWindDirection=this.rng.uniform(0,Math.PI*2),this.startTime=this.rng.uniform(0,1e3),this.timeSpeed=this.rng.uniform(2,4),this.rotationSpeed=this.rng.uniform(.2,.8),this.particleOpacity=this.rng.uniform(.05,.25),this.windSpeedMultiplier=this.rng.uniform(1.1,2.5),this.verticalOscillation=this.rng.uniform(.1,.4),this.gustCycles=[],this.gustPhases=[],this.gustZones=[];for(let h=0;h<this.particleCount;h++){this.gustCycles.push(this.rng.uniform(15,30)),this.gustPhases.push(this.rng.uniform(0,1));const c=this.rng.uniform(0,Math.PI*2),r=this.rng.uniform(Math.PI*.3,Math.PI*.6);this.gustZones.push({start:c,end:(c+r)%(Math.PI*2)})}this.burstZone={lat:this.rng.uniform(-Math.PI/3,Math.PI/3),lon:this.rng.uniform(0,Math.PI*2),radius:this.rng.uniform(1.2,2)},this.burstCycleDuration=this.rng.uniform(45,75),this.burstDuration=this.rng.uniform(8,15),this.burstStartOffset=this.rng.uniform(0,this.burstCycleDuration);const l=t.colors||[new g(1,1,1),new g(.9,.9,.9),new g(.7,.7,.7),new g(.5,.5,.5),new g(.3,.3,.3)];this.createSnowflakeSystem(this.particleCount,s,a,l)}createSnowflakeSystem(e,t,i,s){const a=[];for(let c=0;c<e;c++){let r,o,u,f=0;do{const v=(this.rng.uniform(-1,1)+this.rng.uniform(-1,1))*.2,m=this.rng.uniform(-1,1)*this.burstZone.radius;r=Math.max(0,Math.min(Math.PI,this.burstZone.lat+Math.PI/2+v)),o=(this.burstZone.lon+m)%(Math.PI*2);const b=Math.abs(r-(this.burstZone.lat+Math.PI/2)),A=Math.min(Math.abs(o-this.burstZone.lon),Math.PI*2-Math.abs(o-this.burstZone.lon));u=Math.max(b/.3,A/this.burstZone.radius),f++}while(u>1&&f<10);u>1&&(r=this.burstZone.lat+Math.PI/2+this.rng.uniform(-.1,.1),o=this.burstZone.lon+this.rng.uniform(-this.burstZone.radius,this.burstZone.radius));const p=this.planetRadius*this.rng.uniform(1.001,1.005),y=p*Math.sin(r)*Math.cos(o),x=p*Math.cos(r),w=p*Math.sin(r)*Math.sin(o);a.push(y,x,w)}const l=[],h=new g;for(let c=0;c<this.trailLength;c++){const r=Math.pow(1-c/(this.trailLength-1),1.5);h.setRGB(r,r,r),l.push(h.r,h.g,h.b)}for(let c=0;c<e;c++){const r=c*3,o=a[r],u=a[r+1],f=a[r+2],p=new Float32Array(this.trailLength*3);for(let v=0;v<this.trailLength;v++){const m=v*.1;p[v*3]=o+this.rng.uniform(-1,1)*m*this.planetRadius*.01,p[v*3+1]=u+this.rng.uniform(-1,1)*m*this.planetRadius*.01,p[v*3+2]=f+this.rng.uniform(-1,1)*m*this.planetRadius*.01}const y=new Ce;y.setAttribute("position",new ee(p,3)),y.setAttribute("color",new ee(new Float32Array(l),3));const x=new Ct({vertexColors:!0,transparent:!0,opacity:this.particleOpacity,blending:Ae,depthTest:!0,linewidth:3}),w=new Pt(y,x);this.materials.push(x),this.particleSystems.push(w),this.trailPositions.push(p),this.trailColors.push(new Float32Array(l)),w.rnd=this.rng.uniform(0,1),w.particleIndex=c,this.snowflakeGroup.add(w)}}update(e=.016){const i=(this.startTime+Date.now()/1e3*this.timeSpeed)%1e3,a=(Date.now()/1e3+this.burstStartOffset)%this.burstCycleDuration;let l=0;if(a<this.burstDuration){const h=a/this.burstDuration;h<.2?l=h/.2:h>.8?l=(1-h)/.2:l=1}this.snowflakeGroup.visible=!0,Math.floor(a)%5===0&&a%1<.1&&console.log("❄️ Burst Debug:",{burstTime:Math.round(a),burstIntensity:Math.round(l*100)/100,cycleDuration:Math.round(this.burstCycleDuration),burstDuration:Math.round(this.burstDuration)}),this.particleSystems.forEach((h,c)=>{const r=h.geometry.getAttribute("position"),o=r.array,u=h.rnd,f=h.particleIndex,p=this.calculateTrailPath(i,f,u);for(let z=this.trailLength-1;z>0;z--){const R=z*3,G=(z-1)*3;o[R]=o[G],o[R+1]=o[G+1],o[R+2]=o[G+2]}o[0]=p.x,o[1]=p.y,o[2]=p.z,r.needsUpdate=!0;const y=Date.now()/1e3,x=this.gustCycles[c],w=this.gustPhases[c],v=(y/x+w)%1;let m=0;v<.3?m=v/.3:v<.7?m=1:m=(1-v)/.3;const b=new C(o[0],o[1],o[2]),A=Math.atan2(b.z,b.x),P=A<0?A+Math.PI*2:A,E=this.gustZones[c];let L=!1;E.start<E.end?L=P>=E.start&&P<=E.end:L=P>=E.start||P<=E.end,this.materials[c].opacity=L?this.particleOpacity*m:0})}calculateTrailPath(e,t,i){e+=10*i+t*.1;const s=this.burstZone.lon+(i-.5)*this.burstZone.radius,a=this.burstZone.lat+Math.PI/2+(i-.5)*.2,l=this.windSpeedMultiplier,h=e*l,c=s+Math.cos(this.globalWindDirection)*h,r=a+this.verticalOscillation*Math.sin(e*.5+i),o=.015*Math.sin(e*2+i*10),u=this.planetRadius*(1.005+o),f=u*Math.sin(r)*Math.cos(c),p=u*Math.cos(r),y=u*Math.sin(r)*Math.sin(c);return{x:f,y:p,z:y}}addToScene(e,t){t&&this.snowflakeGroup.position.copy(t),e.add(this.snowflakeGroup)}getObject3D(){return this.snowflakeGroup}dispose(){this.materials.forEach(e=>e.dispose()),this.particleSystems.forEach(e=>e.geometry.dispose()),this.materials=[],this.particleSystems=[],this.trailPositions=[],this.trailColors=[],this.snowflakeGroup.clear()}}function Gt(n,e,t){if(e.type!=="tundra")return null;const i=t||Math.floor(Math.random()*1e6),s=e.snow_intensity||.7,a=e.wind_strength||1,l=Math.floor(s*200+50),h=a*5;return new ii(n,{particleCount:l,windSpeed:h,size:1.2,opacity:.9,seed:i+15e3})}const oe={PARTICLE_COUNT:{min:60,max:150},PHASE_INTENSITY:{min:.4,max:.9},TRANSITION_SPEED:{min:1,max:4},COHERENCE_LEVEL:{min:.2,max:.7},TIME_SPEED:{min:.6,max:2.2},PHASE_STATES:{min:3,max:6}};class at{phaseSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),s=new j(i);this.startTime=i%1e4/1e3,this.params={particleCount:t.particleCount||Math.floor(s.uniform(oe.PARTICLE_COUNT.min,oe.PARTICLE_COUNT.max)),phaseIntensity:t.phaseIntensity||s.uniform(oe.PHASE_INTENSITY.min,oe.PHASE_INTENSITY.max),transitionSpeed:t.transitionSpeed||s.uniform(oe.TRANSITION_SPEED.min,oe.TRANSITION_SPEED.max),coherenceLevel:t.coherenceLevel||s.uniform(oe.COHERENCE_LEVEL.min,oe.COHERENCE_LEVEL.max),timeSpeed:t.timeSpeed||s.uniform(oe.TIME_SPEED.min,oe.TIME_SPEED.max),phaseStates:t.phaseStates||Math.floor(s.uniform(oe.PHASE_STATES.min,oe.PHASE_STATES.max)),seed:i},this.particleCount=this.params.particleCount,this.geometry=new Ce,this.material=this.createMaterial(),this.generatePhaseParticles(e),this.phaseSystem=new Xe(this.geometry,this.material)}generatePhaseParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),l=new Float32Array(this.particleCount),h=new Float32Array(this.particleCount),c=this.params.seed||Math.floor(Math.random()*1e6),r=new j(c);for(let o=0;o<this.particleCount;o++){const u=e*r.uniform(1.1,1.9),f=r.spherePosition(u);t[o*3]=f.x,t[o*3+1]=f.y,t[o*3+2]=f.z,i[o]=r.uniform(.8,2);const p=r.spherePosition(1);s[o*3]=p.x,s[o*3+1]=p.y,s[o*3+2]=p.z,a[o]=r.uniform(.1,1),l[o]=r.uniform(0,this.params.phaseStates),h[o]=r.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new ee(t,3)),this.geometry.setAttribute("size",new ee(i,1)),this.geometry.setAttribute("phaseVector",new ee(s,3)),this.geometry.setAttribute("coherenceFactor",new ee(a,1)),this.geometry.setAttribute("phaseState",new ee(l,1)),this.geometry.setAttribute("transitionPhase",new ee(h,1))}createMaterial(){return new ue({vertexShader:at.vertexShader,fragmentShader:at.fragmentShader,uniforms:{time:{value:0},phaseIntensity:{value:this.params.phaseIntensity},transitionSpeed:{value:this.params.transitionSpeed},coherenceLevel:{value:this.params.coherenceLevel},phaseStates:{value:this.params.phaseStates}},transparent:!0,blending:ke,depthWrite:!1})}addToScene(e,t){t&&this.phaseSystem.position.copy(t),e.add(this.phaseSystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.phaseSystem.rotation.x+=e*.12*Math.cos(i*.3),this.phaseSystem.rotation.y+=e*.08*Math.sin(i*.5),this.phaseSystem.rotation.z+=e*.06*Math.cos(i*.7)}getObject3D(){return this.phaseSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function es(n,e,t){const i=t||Math.floor(Math.random()*1e6),s=new j(i+9e3),a={particleCount:Math.floor(s.uniform(oe.PARTICLE_COUNT.min,oe.PARTICLE_COUNT.max)),phaseIntensity:s.uniform(oe.PHASE_INTENSITY.min,oe.PHASE_INTENSITY.max),transitionSpeed:s.uniform(oe.TRANSITION_SPEED.min,oe.TRANSITION_SPEED.max),coherenceLevel:s.uniform(oe.COHERENCE_LEVEL.min,oe.COHERENCE_LEVEL.max),timeSpeed:s.uniform(oe.TIME_SPEED.min,oe.TIME_SPEED.max),phaseStates:Math.floor(s.uniform(oe.PHASE_STATES.min,oe.PHASE_STATES.max)),seed:i};return new at(n,a)}const et=new C;function _e(n,e,t,i,s,a){const l=2*Math.PI*s/4,h=Math.max(a-2*s,0),c=Math.PI/4;et.copy(e),et[i]=0,et.normalize();const r=.5*l/(l+h),o=1-et.angleTo(n)/c;return Math.sign(et[t])===1?o*r:h/(l+h)+r+r*(1-o)}class Dt extends Jt{constructor(e=1,t=1,i=1,s=2,a=.1){const l=s*2+1;if(a=Math.min(e/2,t/2,i/2,a),super(1,1,1,l,l,l),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:a},l===1)return;const h=this.toNonIndexed();this.index=null,this.attributes.position=h.attributes.position,this.attributes.normal=h.attributes.normal,this.attributes.uv=h.attributes.uv;const c=new C,r=new C,o=new C(e,t,i).divideScalar(2).subScalar(a),u=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,y=u.length/6,x=new C,w=.5/l;for(let v=0,m=0;v<u.length;v+=3,m+=2)switch(c.fromArray(u,v),r.copy(c),r.x-=Math.sign(r.x)*w,r.y-=Math.sign(r.y)*w,r.z-=Math.sign(r.z)*w,r.normalize(),u[v+0]=o.x*Math.sign(c.x)+r.x*a,u[v+1]=o.y*Math.sign(c.y)+r.y*a,u[v+2]=o.z*Math.sign(c.z)+r.z*a,f[v+0]=r.x,f[v+1]=r.y,f[v+2]=r.z,Math.floor(v/y)){case 0:x.set(1,0,0),p[m+0]=_e(x,r,"z","y",a,i),p[m+1]=1-_e(x,r,"y","z",a,t);break;case 1:x.set(-1,0,0),p[m+0]=1-_e(x,r,"z","y",a,i),p[m+1]=1-_e(x,r,"y","z",a,t);break;case 2:x.set(0,1,0),p[m+0]=1-_e(x,r,"x","z",a,e),p[m+1]=_e(x,r,"z","x",a,i);break;case 3:x.set(0,-1,0),p[m+0]=1-_e(x,r,"x","z",a,e),p[m+1]=1-_e(x,r,"z","x",a,i);break;case 4:x.set(0,0,1),p[m+0]=1-_e(x,r,"x","y",a,e),p[m+1]=1-_e(x,r,"y","x",a,t);break;case 5:x.set(0,0,-1),p[m+0]=_e(x,r,"x","y",a,e),p[m+1]=1-_e(x,r,"y","x",a,t);break}}static fromJSON(e){return new Dt(e.width,e.height,e.depth,e.segments,e.radius)}}const ce={OPACITY:{min:.5,max:.95},SIZE:{min:1,max:1},PULSE_INTERVAL:{min:3,max:6},FADE_IN_DURATION:{min:1.5,max:3},FADE_OUT_DURATION:{min:2,max:4},VISIBLE_DURATION:{min:3,max:6},CORNER_RADIUS:{min:.3,max:1.5},EMISSIVE_INTENSITY:{min:.08,max:.15},TIME_SPEED:{min:.1,max:3}};class ts{cubeGroup;cube;material;geometry;params;planetRadius;startTime;nextPulseTime;currentState;stateStartTime;rng;orbitalVisibilityFactor;particleSystem;particleGeometry;particleMaterial;particleCount=800;particlePositions;particleVelocities;particleTargets;particleOrigins;particleProgress;particleSurfacePoints;planetPosition=new C;constructor(e,t={}){this.planetRadius=e;const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new j(i),this.startTime=t.startTime||i%1e4/1e3,this.params={color:t.color||new g(16739125),opacity:t.opacity||this.rng.uniform(ce.OPACITY.min,ce.OPACITY.max),size:t.size||this.rng.uniform(ce.SIZE.min,ce.SIZE.max),seed:i,pulseInterval:t.pulseInterval||[this.rng.uniform(ce.PULSE_INTERVAL.min,ce.PULSE_INTERVAL.max),this.rng.uniform(ce.PULSE_INTERVAL.min,ce.PULSE_INTERVAL.max)],fadeInDuration:t.fadeInDuration||this.rng.uniform(ce.FADE_IN_DURATION.min,ce.FADE_IN_DURATION.max),fadeOutDuration:t.fadeOutDuration||this.rng.uniform(ce.FADE_OUT_DURATION.min,ce.FADE_OUT_DURATION.max),visibleDuration:t.visibleDuration||this.rng.uniform(ce.VISIBLE_DURATION.min,ce.VISIBLE_DURATION.max),cornerRadius:t.cornerRadius||this.rng.uniform(ce.CORNER_RADIUS.min,ce.CORNER_RADIUS.max),emissiveIntensity:t.emissiveIntensity||this.rng.uniform(ce.EMISSIVE_INTENSITY.min,ce.EMISSIVE_INTENSITY.max),startTime:this.startTime,timeSpeed:t.timeSpeed||this.rng.uniform(ce.TIME_SPEED.min,ce.TIME_SPEED.max),orbitalData:t.orbitalData,currentTime:t.currentTime||0},this.initializeStateFromAbsoluteTime(),this.orbitalVisibilityFactor=this.calculateOrbitalVisibility(),this.cubeGroup=new Oe,this.initParticleSystem();const s=e*2.35,a=s*this.params.cornerRadius*.2;this.geometry=new Dt(s,s,s,8,a),this.geometry.computeVertexNormals(),this.geometry.normalizeNormals(),this.params.color instanceof g?this.params.color:new g(this.params.color),this.material=new Tt({color:new g(.99,.99,.99),transparent:!0,opacity:0,metalness:0,roughness:0,transmission:.99,ior:1.33,thickness:1.5,clearcoat:.5,clearcoatRoughness:0,emissive:new g(.02,.02,.02),emissiveIntensity:1,side:Ei,depthWrite:!1,depthTest:!0,blending:Ae,alphaTest:0,flatShading:!1,vertexColors:!1,fog:!1}),this.cube=new ve(this.geometry,this.material),this.cube.renderOrder=999,this.cubeGroup.add(this.cube),this.cubeGroup.visible=!0}initializeStateFromAbsoluteTime(){const t=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3,i=(this.params.pulseInterval[0]+this.params.pulseInterval[1])/2,s=this.params.fadeInDuration+this.params.visibleDuration+this.params.fadeOutDuration+i,a=t%s,l=this.params.fadeInDuration,h=l+this.params.visibleDuration,c=h+this.params.fadeOutDuration;a<l?(this.currentState="fading_in",this.stateStartTime=t-a,this.nextPulseTime=t-a):a<h?(this.currentState="visible",this.stateStartTime=t-(a-l),this.nextPulseTime=t-a):a<c?(this.currentState="fading_out",this.stateStartTime=t-(a-h),this.nextPulseTime=t-a):(this.currentState="hidden",this.stateStartTime=t-(a-c),this.nextPulseTime=t+(s-a))}calculateOrbitalVisibility(){if(!this.params.orbitalData||!this.params.orbitalData.enabled)return 1;const t=(this.params.currentTime||0)%this.params.orbitalData.cycle_duration_years/this.params.orbitalData.cycle_duration_years,i=this.params.orbitalData.visible_duration_years/this.params.orbitalData.cycle_duration_years;if(t<i){const s=t/i;return s<.1?s/.1:s>.9?(1-s)/.1:1}else return 0}addToScene(e,t){t&&(this.cubeGroup.position.copy(t),this.planetPosition.copy(t)),e.add(this.cubeGroup)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3,s=i-this.stateStartTime;if(this.orbitalVisibilityFactor=this.calculateOrbitalVisibility(),this.orbitalVisibilityFactor<=.001){this.currentState="hidden",this.material.opacity=0,this.cubeGroup.visible=!1;return}switch(this.cube.rotation.x=i*.1,this.cube.rotation.y=i*.15,this.cube.rotation.z=i*.05,this.updateParticles(i),this.currentState){case"hidden":this.material.opacity=0,i>=this.nextPulseTime&&(this.currentState="fading_in",this.stateStartTime=i);break;case"fading_in":const a=Math.min(s/this.params.fadeInDuration,1),l=Math.max(0,(a-.3)/.7),h=this.smoothstep(0,1,l)*this.params.opacity*this.orbitalVisibilityFactor;this.material.opacity=h,a>=1&&(this.currentState="visible",this.stateStartTime=i);break;case"visible":this.material.opacity=this.params.opacity*this.orbitalVisibilityFactor,s>=this.params.visibleDuration&&(this.currentState="fading_out",this.stateStartTime=i);break;case"fading_out":const c=Math.min(s/this.params.fadeOutDuration,1),r=Math.min(1,c*1.3),o=(1-this.smoothstep(0,1,r))*this.params.opacity*this.orbitalVisibilityFactor;if(this.material.opacity=o,c>=1){this.currentState="hidden",this.stateStartTime=i;const u=this.rng.uniform(this.params.pulseInterval[0],this.params.pulseInterval[1]);this.nextPulseTime=i+u}break}this.cubeGroup.visible=this.material.opacity>.001}smoothstep(e,t,i){const s=Math.max(0,Math.min(1,(i-e)/(t-e)));return s*s*(3-2*s)}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof g?e.color:new g(e.color);this.material.color=t}e.opacity!==void 0&&(this.material.opacity=e.opacity)}getObject3D(){return this.cubeGroup}initParticleSystem(){this.particlePositions=new Float32Array(this.particleCount*3),this.particleVelocities=new Float32Array(this.particleCount*3),this.particleTargets=new Float32Array(this.particleCount*3),this.particleOrigins=new Float32Array(this.particleCount*3),this.particleProgress=new Float32Array(this.particleCount),this.particleSurfacePoints=new Float32Array(this.particleCount*3);const t=this.planetRadius*2.35/2;for(let i=0;i<this.particleCount;i++){const s=i*3;this.particleOrigins[s]=0,this.particleOrigins[s+1]=0,this.particleOrigins[s+2]=0,this.particlePositions[s]=0,this.particlePositions[s+1]=0,this.particlePositions[s+2]=0;const a=this.rng.uniform(0,Math.PI*2),l=Math.acos(this.rng.uniform(-1,1));this.particleSurfacePoints[s]=this.planetRadius*Math.sin(l)*Math.cos(a),this.particleSurfacePoints[s+1]=this.planetRadius*Math.sin(l)*Math.sin(a),this.particleSurfacePoints[s+2]=this.planetRadius*Math.cos(l);const h=this.rng.uniform(0,1);let c,r,o;if(h<.7){const u=Math.floor(this.rng.uniform(0,6)),f=this.rng.uniform(-.9,.9),p=this.rng.uniform(-.9,.9);switch(u){case 0:c=t,r=f*t,o=p*t;break;case 1:c=-t,r=f*t,o=p*t;break;case 2:c=f*t,r=t,o=p*t;break;case 3:c=f*t,r=-t,o=p*t;break;case 4:c=f*t,r=p*t,o=t;break;case 5:c=f*t,r=p*t,o=-t;break;default:c=0,r=0,o=0}}else{const u=Math.floor(this.rng.uniform(0,12)),f=this.rng.uniform(-.95,.95);switch(u){case 0:c=f*t,r=t,o=t;break;case 1:c=f*t,r=-t,o=t;break;case 2:c=f*t,r=t,o=-t;break;case 3:c=f*t,r=-t,o=-t;break;case 4:c=t,r=f*t,o=t;break;case 5:c=-t,r=f*t,o=t;break;case 6:c=t,r=f*t,o=-t;break;case 7:c=-t,r=f*t,o=-t;break;case 8:c=t,r=t,o=f*t;break;case 9:c=-t,r=t,o=f*t;break;case 10:c=t,r=-t,o=f*t;break;case 11:c=-t,r=-t,o=f*t;break;default:c=0,r=0,o=0}}this.particleTargets[s]=c,this.particleTargets[s+1]=r,this.particleTargets[s+2]=o,this.particleVelocities[s]=this.rng.uniform(-.3,.3),this.particleVelocities[s+1]=this.rng.uniform(-.3,.3),this.particleVelocities[s+2]=this.rng.uniform(-.3,.3),this.particleProgress[i]=0}this.particleGeometry=new Ce,this.particleGeometry.setAttribute("position",new ee(this.particlePositions,3)),this.particleMaterial=new Mi({color:new g(1,1,1),size:this.planetRadius*.015,transparent:!0,opacity:0,blending:ke,depthWrite:!1,sizeAttenuation:!0,vertexColors:!1}),this.particleSystem=new Xe(this.particleGeometry,this.particleMaterial),this.particleSystem.renderOrder=998,this.cubeGroup.add(this.particleSystem)}updateParticles(e){const t=this.particleGeometry.attributes.position.array;let i=0,s=0;switch(this.currentState){case"hidden":i=0,s=-.1;break;case"fading_in":const c=e-this.stateStartTime;s=Math.min(c/this.params.fadeInDuration,1),i=this.smoothstep(0,1,s);break;case"visible":i=1,s=1;break;case"fading_out":const r=e-this.stateStartTime;s=1-Math.min(r/this.params.fadeOutDuration,1),i=this.smoothstep(0,1,s);break}const a=e,l=this.cube.matrixWorld,h=new At().extractRotation(l);for(let c=0;c<this.particleCount;c++){const r=c*3,o=c/this.particleCount*.4,u=Math.max(-.1,Math.min(1,s*1.3-o)),f=Math.max(0,u);let p,y,x;if(f<.3){const v=f/.3,m=this.smoothstep(0,1,v),b=this.particleSurfacePoints[r],A=this.particleSurfacePoints[r+1],P=this.particleSurfacePoints[r+2];p=b*m,y=A*m,x=P*m}else{const v=(f-.3)/.7,m=this.smoothstep(0,1,v),b=new C(this.particleTargets[r],this.particleTargets[r+1],this.particleTargets[r+2]);b.applyMatrix4(h);const A=this.particleSurfacePoints[r],P=this.particleSurfacePoints[r+1],E=this.particleSurfacePoints[r+2];if(p=A+(b.x-A)*m,y=P+(b.y-P)*m,x=E+(b.z-E)*m,v<.5){const L=Math.sin(v*Math.PI*2)*this.planetRadius*.1;p*=1+L*.1,y*=1+L*.1,x*=1+L*.1}}const w=Math.sin(a*2+c*.1)*.01*this.planetRadius;t[r]=p+this.particleVelocities[r]*w,t[r+1]=y+this.particleVelocities[r+1]*w,t[r+2]=x+this.particleVelocities[r+2]*w}this.particleMaterial.opacity=i*this.orbitalVisibilityFactor,this.particleMaterial.size=this.planetRadius*.012*(.5+i)*this.orbitalVisibilityFactor,this.particleGeometry.attributes.position.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.particleGeometry.dispose(),this.particleMaterial.dispose()}}function is(n,e,t,i,s){return null}class ot{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;constructor(e,t=new g(16753920)){this.baseMesh=e;const i=e.geometry;this.planetRadius=i.parameters.radius||1;const s=t instanceof g?t:new g(t);this.baseMaterial=new ue({vertexShader:ot.baseVertexShader,fragmentShader:ot.baseFragmentShader,uniforms:{baseColor:{value:s},lightDirection:{value:new C(1,1,1).normalize()},lightPosition:{value:new C(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:we}),this.baseMesh.material=this.baseMaterial}addEffectLayer(e,t,i=1.001,s){const a=new ct(this.planetRadius*i,256,256),l=new ve(a,t);return l.position.copy(this.baseMesh.position),l.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:l,material:t,layerObject:s}),this.scene&&this.scene.add(l),l}createCloudBandsLayerMaterial(e){const t=`
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
    `;return new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new g(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new C(1,1,1).normalize()},opacity:{value:e.opacity||.4}},transparent:!0,blending:Ae,side:we,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,s=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((a,l)=>{l<5&&(s[l*2]=a.x,s[l*2+1]=a.y)}),new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new g(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:s},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new C(1,1,1).normalize()}},transparent:!0,blending:Ae,side:we,depthWrite:!1})}createMetallicSurfaceLayerMaterial(e){const t=`
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
    `;return new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},metalColor:{value:e.color||new g(8421504)},metalness:{value:e.metalness||.8},roughness:{value:e.roughness||.4},fragmentationIntensity:{value:e.fragmentationIntensity||.5},opacity:{value:e.opacity||.8},lightDirection:{value:new C(1,1,1).normalize()},lightPosition:{value:new C(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3},crystalScale:{value:e.crystalScale||80}},transparent:!0,blending:Ae,side:we,depthWrite:!1})}createIcyTerrainLayerMaterial(e){const t=`
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
    `;return new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},iceColor:{value:e.color||new g(11591910)},iceReflectivity:{value:e.iceReflectivity||.8},frostDensity:{value:e.frostDensity||.5},crackIntensity:{value:e.crackIntensity||.4},opacity:{value:e.opacity||.7},crystalScale:{value:e.crystalScale||25},crystalDensity:{value:e.crystalDensity||.6},crystalSharpness:{value:e.crystalSharpness||150},frostPattern:{value:e.frostPattern||12},lightDirection:{value:new C(1,1,1).normalize()},lightPosition:{value:new C(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:we,depthWrite:!1})}addToScene(e){this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&e.add(t.mesh)}),this.effectLayers.length}update(e,t){this.effectLayers.forEach(i=>{if(i.material.uniforms.time&&(i.material.uniforms.time.value+=e),t!==void 0&&i.material.uniforms.rotationAngle&&(i.material.uniforms.rotationAngle.value=t),i.layerObject&&i.layerObject.update)try{i.layerObject.update(e,t)}catch(s){console.error(`Error updating layer ${i.name}:`,s)}i.mesh&&i.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof g?e:new g(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}createGenericLayerMaterial(e,t,i,s=!0,a=Ae){return i.lightDirection||(i.lightDirection={value:new C(1,1,1).normalize()}),i.lightPosition||(i.lightPosition={value:new C(0,0,0)}),new ue({vertexShader:e,fragmentShader:t,uniforms:i,transparent:s,blending:a,side:we,depthWrite:!1})}convertEffectToLayer(e,t,i=1.001){if(t instanceof ue){const s=t.clone();return s.transparent=!0,s.depthWrite=!1,s.uniforms.lightDirection||(s.uniforms.lightDirection={value:new C(1,1,1).normalize()}),this.addEffectLayer(e,s,i)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}getLayerMeshes(){const e={};return this.effectLayers.forEach(t=>{t.name&&t.mesh&&(e[t.name]=t.mesh)}),e}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const ae={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4}};class ss{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),s=new j(i),a=t.numBands||Math.floor(s.uniform(ae.NUM_BANDS.min,ae.NUM_BANDS.max));this.params={numBands:a,bandPositions:t.bandPositions||this.generateDefaultBandPositions(a,i),bandWidths:t.bandWidths||this.generateDefaultBandWidths(a,i),rotationAngle:t.rotationAngle||s.uniform(ae.ROTATION_ANGLE.min,ae.ROTATION_ANGLE.max),baseColor:t.baseColor||new g(16753920),bandColor:t.bandColor||new g(16747520),animationSpeed:t.animationSpeed||s.uniform(ae.ANIMATION_SPEED.min,ae.ANIMATION_SPEED.max),turbulence:t.turbulence||s.uniform(ae.TURBULENCE.min,ae.TURBULENCE.max),noiseScale:t.noiseScale||s.uniform(ae.NOISE_SCALE.min,ae.NOISE_SCALE.max),opacity:t.opacity||.4,seed:i},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const i=new Array(20).fill(0),s=new j(t+12345);for(let a=0;a<e&&a<20;a++)i[a]=s.uniform(ae.BAND_POSITIONS.min,ae.BAND_POSITIONS.max);return i}generateDefaultBandWidths(e,t){const i=new Array(20).fill(0),s=new j(t+67890);for(let a=0;a<e&&a<20;a++)i[a]=s.uniform(ae.BAND_WIDTHS.min,ae.BAND_WIDTHS.max);return i}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity)}dispose(){}}function Yt(n,e,t){const i=e.cloud_bands||{},s=t||Math.floor(Math.random()*1e6),a=new j(s+4e3),l={numBands:i.num_bands||Math.floor(a.uniform(ae.NUM_BANDS.min,ae.NUM_BANDS.max)),bandPositions:i.positions||void 0,bandWidths:i.widths||void 0,rotationAngle:i.rotation||a.uniform(ae.ROTATION_ANGLE.min,ae.ROTATION_ANGLE.max),baseColor:e.base_color?new g().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new g(16753920),bandColor:new g(16777215),animationSpeed:a.uniform(ae.ANIMATION_SPEED.min,ae.ANIMATION_SPEED.max),turbulence:e.turbulence||a.uniform(ae.TURBULENCE.min,ae.TURBULENCE.max),noiseScale:a.uniform(ae.NOISE_SCALE.min,ae.NOISE_SCALE.max),opacity:.4,seed:s};return new ss(n,l)}const re={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.2,max:.6}};class as{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),s=new j(i);this.params={stormCenters:t.stormCenters||this.generateStormCenters(i),stormColor:t.stormColor||new g(9109504),stormIntensity:t.stormIntensity||s.uniform(re.STORM_INTENSITY.min,re.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||s.uniform(re.SPIRAL_SPEED.min,re.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||s.uniform(re.ANIMATION_SPEED.min,re.ANIMATION_SPEED.max),opacity:t.opacity||s.uniform(re.OPACITY.min,re.OPACITY.max),seed:i},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new j(e+5e3),i=Math.floor(t.uniform(re.STORM_COUNT.min,re.STORM_COUNT.max)),s=[];for(let a=0;a<i;a++)s.push({x:t.uniform(re.STORM_CENTERS.min,re.STORM_CENTERS.max),y:t.uniform(re.STORM_CENTERS.min,re.STORM_CENTERS.max)});return s}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function Bt(n,e,t){const i=e.storms||{},s=t||Math.floor(Math.random()*1e6),a=new j(s+5e3),l={stormCenters:i.centers||void 0,stormColor:new g(9109504),stormIntensity:i.intensity||e.storm_intensity||a.uniform(re.STORM_INTENSITY.min,re.STORM_INTENSITY.max),spiralSpeed:i.spiral_speed||a.uniform(re.SPIRAL_SPEED.min,re.SPIRAL_SPEED.max),animationSpeed:a.uniform(re.ANIMATION_SPEED.min,re.ANIMATION_SPEED.max),opacity:a.uniform(re.OPACITY.min,re.OPACITY.max),seed:s};return new as(n,l)}const pe={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class gt{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),s=new j(i),a=t.color instanceof g?t.color:t.color?new g(t.color):new g(9127187);this.params={color:a,roughness:t.roughness||s.uniform(pe.ROUGHNESS.min,pe.ROUGHNESS.max),rockDensity:t.rockDensity||s.uniform(pe.ROCK_DENSITY.min,pe.ROCK_DENSITY.max)*10,craterCount:t.craterCount||s.uniform(pe.CRATER_COUNT.min,pe.CRATER_COUNT.max),opacity:t.opacity||s.uniform(pe.OPACITY.min,pe.OPACITY.max),seed:i},this.material=new ue({vertexShader:gt.vertexShader,fragmentShader:gt.fragmentShader,uniforms:{time:{value:0},rockColor:{value:a},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new C(1,1,1).normalize()}},transparent:!0,side:we,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function os(n,e,t){const i=e.surface||{},s=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),l=new j(a+8e3);return new gt(n,{color:s?new g(s):new g(9127187),roughness:i.roughness||l.uniform(pe.ROUGHNESS.min,pe.ROUGHNESS.max),rockDensity:i.rock_density||l.uniform(pe.ROCK_DENSITY.min,pe.ROCK_DENSITY.max)*10,craterCount:i.crater_count||l.uniform(pe.CRATER_COUNT.min,pe.CRATER_COUNT.max),opacity:l.uniform(pe.OPACITY.min,pe.OPACITY.max),seed:a})}const H={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9},CRYSTAL_SCALE:{min:15,max:35},CRYSTAL_DENSITY:{min:.4,max:.8},CRYSTAL_SHARPNESS:{min:100,max:250},FROST_PATTERN:{min:8,max:16}};class ns{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),s=new j(i),a=t.color instanceof g?t.color:t.color?new g(t.color):new g(11591910);this.params={color:a,iceReflectivity:t.iceReflectivity||s.uniform(H.ICE_REFLECTIVITY.min,H.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||s.uniform(H.FROST_DENSITY.min,H.FROST_DENSITY.max),crackIntensity:t.crackIntensity||s.uniform(H.CRACK_INTENSITY.min,H.CRACK_INTENSITY.max),opacity:t.opacity||s.uniform(H.OPACITY.min,H.OPACITY.max),crystalScale:t.crystalScale||s.uniform(H.CRYSTAL_SCALE.min,H.CRYSTAL_SCALE.max),crystalDensity:t.crystalDensity||s.uniform(H.CRYSTAL_DENSITY.min,H.CRYSTAL_DENSITY.max),crystalSharpness:t.crystalSharpness||s.uniform(H.CRYSTAL_SHARPNESS.min,H.CRYSTAL_SHARPNESS.max),frostPattern:t.frostPattern||s.uniform(H.FROST_PATTERN.min,H.FROST_PATTERN.max),seed:i},this.material=this.layerSystem.createIcyTerrainLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function rs(n,e,t){const i=e.surface||{},s=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),l=new j(a+6e3);return new ns(n,{color:s?new g(s):new g(11591910),iceReflectivity:i.ice_reflectivity||l.uniform(H.ICE_REFLECTIVITY.min,H.ICE_REFLECTIVITY.max),frostDensity:i.frost_density||l.uniform(H.FROST_DENSITY.min,H.FROST_DENSITY.max),crackIntensity:i.crack_intensity||l.uniform(H.CRACK_INTENSITY.min,H.CRACK_INTENSITY.max),opacity:l.uniform(H.OPACITY.min,H.OPACITY.max),crystalScale:i.crystal_scale||l.uniform(H.CRYSTAL_SCALE.min,H.CRYSTAL_SCALE.max),crystalDensity:i.crystal_density||l.uniform(H.CRYSTAL_DENSITY.min,H.CRYSTAL_DENSITY.max),crystalSharpness:i.crystal_sharpness||l.uniform(H.CRYSTAL_SHARPNESS.min,H.CRYSTAL_SHARPNESS.max),frostPattern:i.frost_pattern||l.uniform(H.FROST_PATTERN.min,H.FROST_PATTERN.max),seed:a})}const he={METALNESS:{min:.5,max:5},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.2,max:.9},CRYSTAL_SCALE:{min:17,max:230}};class ls{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),s=new j(i),a=t.color instanceof g?t.color:t.color?new g(t.color):new g(8421504);this.params={color:a,metalness:t.metalness||s.uniform(he.METALNESS.min,he.METALNESS.max),roughness:t.roughness||s.uniform(he.ROUGHNESS.min,he.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||s.uniform(he.FRAGMENTATION_INTENSITY.min,he.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||s.uniform(he.OPACITY.min,he.OPACITY.max),seed:i,noiseScale:t.noiseScale||8,noiseIntensity:t.noiseIntensity||.3,crystalScale:t.crystalScale||s.uniform(he.CRYSTAL_SCALE.min,he.CRYSTAL_SCALE.max)},this.material=this.layerSystem.createMetallicSurfaceLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function cs(n,e,t){const i=e.surface||{},s=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),l=new j(a+7e3),h=l.uniform(.8,1.2);return new ls(n,{color:s?new g(s):new g(8421504),metalness:i.metalness||l.uniform(he.METALNESS.min,he.METALNESS.max),roughness:i.roughness||l.uniform(he.ROUGHNESS.min,he.ROUGHNESS.max),fragmentationIntensity:i.fragmentation||l.uniform(he.FRAGMENTATION_INTENSITY.min,he.FRAGMENTATION_INTENSITY.max),opacity:l.uniform(he.OPACITY.min,he.OPACITY.max),seed:a,noiseScale:4*h,noiseIntensity:.3,crystalScale:l.uniform(he.CRYSTAL_SCALE.min,he.CRYSTAL_SCALE.max)})}class si{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new j(i),this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||50,speed:t.speed||.5,size:t.size||1,opacity:t.opacity||.3,brightness:t.brightness||1,seed:i},this.particleCount=this.params.particleCount,this.geometry=new Ce,this.createParticles(e),this.createMaterial(),this.particleSystem=new Xe(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),s=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),l=e*1.3;for(let h=0;h<this.particleCount;h++){const c=this.rng.random()*Math.PI*2,r=this.rng.random()*2-1,o=this.rng.random(),u=Math.acos(r),f=l*Math.cbrt(o);t[h*3]=f*Math.sin(u)*Math.cos(c),t[h*3+1]=f*Math.sin(u)*Math.sin(c),t[h*3+2]=f*Math.cos(u),i[h]=this.params.size*(.5+this.rng.random()*.5),s[h]=this.params.speed*(.8+this.rng.random()*.4),a[h]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new ee(t,3)),this.geometry.setAttribute("size",new ee(i,1)),this.geometry.setAttribute("speed",new ee(s,1)),this.geometry.setAttribute("phase",new ee(a,1))}createMaterial(){const e=this.params.color instanceof g?this.params.color:new g().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),t=`
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
    `;this.material=new ue({uniforms:{time:{value:0},color:{value:e},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:t,fragmentShader:i,transparent:!0,blending:ke,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;const t=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*t}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof g?e.color:new g().setRGB(e.color[0],e.color[1],e.color[2]);this.material.uniforms.color.value=t}e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Wt(n,e,t){const i=e.streaks||e,s={color:i.color||[.95,.95,1],particleCount:i.particleCount||30,speed:i.speed||.3,size:.8,opacity:.2,brightness:.8,seed:t||Math.floor(Math.random()*1e6)};return new si(n,s)}const K={STAR_COUNT:{min:150,max:450},MIN_BRIGHTNESS:{min:.4,max:.7},MAX_BRIGHTNESS:{min:.8,max:1},MIN_SIZE:{min:1.2,max:1.8},MAX_SIZE:{min:3.5,max:5},DISTANCE:{min:300,max:600},TWINKLE_SPEED:{min:.002,max:.008}};class nt{starSystem;material;geometry;params;starCount;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6);console.log("🌟 StarFieldEffect - Using seed:",i,"from params:",t.seed);const s=new j(i+1e4);this.params={color:t.color||new g(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(s.uniform(K.STAR_COUNT.min,K.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:s.uniform(K.MIN_BRIGHTNESS.min,K.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:s.uniform(K.MAX_BRIGHTNESS.min,K.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:s.uniform(K.MIN_SIZE.min,K.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:s.uniform(K.MAX_SIZE.min,K.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:s.uniform(K.DISTANCE.min,K.DISTANCE.max),seed:i,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:s.uniform(K.TWINKLE_SPEED.min,K.TWINKLE_SPEED.max)},this.starCount=this.params.starCount,this.geometry=new Ce,this.material=this.createMaterial(),this.generateStars(e),this.starSystem=new Xe(this.geometry,this.material)}generateStars(e){const t=new Float32Array(this.starCount*3),i=new Float32Array(this.starCount),s=new Float32Array(this.starCount),a=new Float32Array(this.starCount),l=this.params.seed,h=new j(l+1e4);for(let c=0;c<this.starCount;c++){const r=h.uniform(0,2*Math.PI),o=h.uniform(-1,1),u=Math.acos(o),f=this.params.distance*h.uniform(.8,1.2),p=f*Math.sin(u)*Math.cos(r),y=f*Math.sin(u)*Math.sin(r),x=f*Math.cos(u);t[c*3]=p,t[c*3+1]=y,t[c*3+2]=x,i[c]=h.uniform(this.params.minSize,this.params.maxSize),s[c]=h.uniform(this.params.minBrightness,this.params.maxBrightness),a[c]=h.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new ee(t,3)),this.geometry.setAttribute("size",new ee(i,1)),this.geometry.setAttribute("brightness",new ee(s,1)),this.geometry.setAttribute("twinklePhase",new ee(a,1))}createMaterial(){const e=this.params.color instanceof g?this.params.color:new g(this.params.color);return new ue({vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader,uniforms:{time:{value:0},starColor:{value:e},twinkleSpeed:{value:this.params.twinkleSpeed}},transparent:!0,blending:ke,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.starSystem.position.copy(t),e.add(this.starSystem)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof g?e.color:new g(e.color);this.material.uniforms.starColor.value=t}e.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=e.twinkleSpeed)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function hs(n,e){const t=e!==void 0?e:Math.floor(Math.random()*1e6);console.log("🌟 createStarFieldFromPythonData - planetSeed:",e,"final seed:",t);const i=new j(t+1e4),s={color:new g(16777215),starCount:Math.floor(i.uniform(K.STAR_COUNT.min,K.STAR_COUNT.max)),minBrightness:i.uniform(K.MIN_BRIGHTNESS.min,K.MIN_BRIGHTNESS.max),maxBrightness:i.uniform(K.MAX_BRIGHTNESS.min,K.MAX_BRIGHTNESS.max),minSize:i.uniform(K.MIN_SIZE.min,K.MIN_SIZE.max),maxSize:i.uniform(K.MAX_SIZE.min,K.MAX_SIZE.max),distance:i.uniform(K.DISTANCE.min,K.DISTANCE.max),seed:t,twinkleSpeed:i.uniform(K.TWINKLE_SPEED.min,K.TWINKLE_SPEED.max)};return new nt(n,s)}const Le={SIZE:{min:.12,max:.2},ROTATION_SPEED:{min:.05,max:.1},OPACITY:{min:.15,max:.35},TIME_SPEED:{min:.8,max:1.5}},ds=`
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
`,ms=`
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
`;class St{mesh;material;params;startTime;proceduralParams;constructor(e){const t=e.seed||Math.floor(Math.random()*1e6),i=new j(t);this.startTime=e.startTime||t%1e4/1e3,this.proceduralParams={size:i.uniform(Le.SIZE.min,Le.SIZE.max),rotationSpeed:i.uniform(Le.ROTATION_SPEED.min,Le.ROTATION_SPEED.max),opacity:i.uniform(Le.OPACITY.min,Le.OPACITY.max),timeSpeed:i.uniform(Le.TIME_SPEED.min,Le.TIME_SPEED.max)},this.params=e;const s=new g(e.planetColor),a=s.clone();a.multiplyScalar(1-e.hexagonData.color_darken_factor),this.material=new ue({uniforms:{time:{value:0},planetColor:{value:s},hexagonColor:{value:a},darkenFactor:{value:e.hexagonData.color_darken_factor},opacity:{value:this.proceduralParams.opacity},hexagonRadius:{value:this.proceduralParams.size},rotationSpeed:{value:this.proceduralParams.rotationSpeed},pole:{value:e.hexagonData.pole==="north"?1:-1},visibility:{value:1}},vertexShader:ds,fragmentShader:ms,transparent:!0,depthWrite:!1,side:we,blending:e.hexagonData.nebula_blend?ke:Ae});const l=this.createCurvedHexagonGeometry(e.hexagonData.pole,e.hexagonData.radius);this.mesh=new ve(l,this.material),this.mesh.scale.set(e.planetRadius,e.planetRadius,e.planetRadius),this.updateVisibility()}updateVisibility(){if(!this.params.hexagonData.enabled){this.material.uniforms.visibility.value=0;return}const t=(this.params.currentTime||0)%this.params.hexagonData.cycle_duration_years/this.params.hexagonData.cycle_duration_years,i=this.params.hexagonData.visible_duration_years/this.params.hexagonData.cycle_duration_years;if(t<i){const s=t/i;s<.1?this.material.uniforms.visibility.value=s/.1:s>.9?this.material.uniforms.visibility.value=(1-s)/.1:this.material.uniforms.visibility.value=1}else this.material.uniforms.visibility.value=0}update(e){const i=(this.startTime+Date.now()/1e3*this.proceduralParams.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.updateVisibility()}addToScene(e){e.add(this.mesh)}removeFromScene(e){e.remove(this.mesh)}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}createCurvedHexagonGeometry(e,t){const i=e==="north"?1:-1,s=64,a=1,l=new Kt(a,a,s,s),h=l.attributes.position,c=new C;for(let r=0;r<h.count;r++){c.fromBufferAttribute(h,r);const o=c.x,u=c.y,f=Math.sqrt(o*o+u*u);if(f<=a/2){const y=f*Math.PI*.5,x=i*Math.cos(y)*1.02,w=Math.sin(y)*1.02;if(f>0){const v=o/f,m=u/f;c.x=v*w,c.y=x,c.z=m*w}else c.x=0,c.y=i*1.02,c.z=0}h.setXYZ(r,c.x,c.y,c.z)}return h.needsUpdate=!0,l.computeVertexNormals(),l}setEnabled(e){this.mesh.visible=e}}class Ht{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new g(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new Oe,this.generateFragments()}generateFragments(){const e=new Ze({color:this.params.color instanceof g?this.params.color:new g(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),s=new ve(i,e);this.positionFragment(s,t),s.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const a=this.params.size*(Math.random()*.5+.75);s.scale.set(a,a,a),s.userData={rotationAxis:new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(s),this.fragments.add(s)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],s=[];s.push(new C(0,0,0));for(let h=0;h<e;h++){const c=h/e*Math.PI*2,r=Math.random()*.5+.5,o=(Math.random()-.5)*.3;s.push(new C(Math.cos(c)*r,Math.sin(c)*r,o))}for(let h=1;h<=e;h++){const r=s[h].clone();r.z+=Math.random()*.4+.2,s.push(r)}for(const h of s)t.push(h.x,h.y,h.z);for(let h=1;h<e;h++)i.push(0,h,h+1);i.push(0,e,1);const a=s.length-e-1;for(let h=0;h<e-1;h++)i.push(a,a+h+2,a+h+1);i.push(a,a+1,a+e);for(let h=0;h<e;h++){const c=h+1,r=(h+1)%e+1,o=c+e,u=r+e;i.push(c,o,r),i.push(r,o,u)}const l=new Ce;return l.setAttribute("position",new Et(t,3)),l.setIndex(i),l.computeVertexNormals(),l}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),s=(Math.random()-.5)*this.planetRadius*.5;return new C(Math.cos(t)*i,s,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new C(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new C(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const s=t.userData;t.rotateOnAxis(s.rotationAxis,s.rotationSpeed*e*this.params.animationSpeed);const a=Math.sin(Date.now()*.001+i)*.001;t.position.y+=a*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof g?e.color:new g(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof Ze&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof Ze&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof He&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof He&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function ft(n){const e=n.replace("#",""),t=parseInt(e.substr(0,2),16)/255,i=parseInt(e.substr(2,2),16)/255,s=parseInt(e.substr(4,2),16)/255;return new g(t,i,s)}function _t(n){return n.length>=3?new g(n[0],n[1],n[2]):new g(.5,.5,.5)}function Ye(n){if(n.ocean_color){if(typeof n.ocean_color=="string")return ft(n.ocean_color);if(Array.isArray(n.ocean_color))return _t(n.ocean_color)}if(n.planet_info?.base_color){if(typeof n.planet_info.base_color=="string")return ft(n.planet_info.base_color);if(Array.isArray(n.planet_info.base_color))return _t(n.planet_info.base_color)}if(n.base_color){if(typeof n.base_color=="string")return ft(n.base_color);if(Array.isArray(n.base_color))return _t(n.base_color)}const e=n.planet_info?.type||n.type||"Unknown";return us(e)}function us(n){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[n]||"#FFFFFF";return ft(t)}class rt{material;params;oceanLayerMesh;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new g(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new g(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new g(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof g?this.params.landmassColor:new g(this.params.landmassColor),t=this.params.foamColor instanceof g?this.params.foamColor:new g(this.params.foamColor),i=this.params.oceanColor instanceof g?this.params.oceanColor:new g(this.params.oceanColor);return new ue({vertexShader:rt.vertexShader,fragmentShader:rt.fragmentShader,uniforms:{time:{value:0},baseColor:{value:i},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:i}}})}apply(e){this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const i=new ve(t,this.material);i.position.copy(e.position),i.rotation.copy(e.rotation),this.oceanLayerMesh=i}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const i=e[t];if(i!==void 0&&this.material.uniforms[t])if(i instanceof g||Array.isArray(i)){const s=i instanceof g?i:new g(i);this.material.uniforms[t].value=s}else this.material.uniforms[t].value=i})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh)):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function fs(n){const e=Ye(n),t=[e.r,e.g,e.b];let i=.3,s=2,a=8,l=.3,h=.2;if(n.seeds){const r=n.seeds.shape_seed,u=(f=>{let p=f;return()=>(p=(p*1664525+1013904223)%4294967296,p/4294967296)})(r);i=.2+u()*.3,s=1.5+u()*1.5,a=6+u()*6,l=.25+u()*.15,h=.15+u()*.1}const c={waveIntensity:i,waveSpeed:s,waveScale:a,landmassThreshold:l,deepOceanThreshold:h,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new g(.9,.9,1),foamIntensity:.4,oceanColor:t};return new rt(c)}class lt{mesh;material;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={radius:t.radius||e*.999,detail:t.detail||128,flowSpeed:t.flowSpeed||.5,waveAmplitude:t.waveAmplitude||.02,opacity:t.opacity||.75,colorDeep:t.colorDeep||new g(4147),colorShallow:t.colorShallow||new g(26333),...t};const i=new ct(this.params.radius,this.params.detail,this.params.detail);this.material=new ue({vertexShader:lt.vertexShader,fragmentShader:lt.fragmentShader,uniforms:{uTime:{value:0},uFlowSpeed:{value:this.params.flowSpeed},uWaveAmplitude:{value:this.params.waveAmplitude},uFresnelPower:{value:1.5},uOpacity:{value:this.params.opacity},uColorDeep:{value:this.params.colorDeep instanceof g?this.params.colorDeep:new g(this.params.colorDeep)},uColorShallow:{value:this.params.colorShallow instanceof g?this.params.colorShallow:new g(this.params.colorShallow)},uNoiseScale:{value:3},uSecondaryWaveScale:{value:6},uPrimaryFlowSpeed:{value:this.params.flowSpeed||.5},uSecondaryFlowSpeed:{value:(this.params.flowSpeed||.5)*1.6},uUvPatternSpeed1:{value:(this.params.flowSpeed||.5)*4},uUvPatternSpeed2:{value:(this.params.flowSpeed||.5)*3}},transparent:!0,depthWrite:!1,depthTest:!0,side:we,blending:Ae}),this.mesh=new ve(i,this.material),this.mesh.renderOrder=-1,console.log("🌊 FluidLayersEffect created with params:",this.params)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh),console.log("🌊 FluidLayers mesh added to scene at position:",this.mesh.position)}update(e,t){this.material.uniforms.uTime.value+=e,t!==void 0&&(this.mesh.rotation.y=t)}updateParams(e){if(this.params={...this.params,...e},e.flowSpeed!==void 0&&(this.material.uniforms.uFlowSpeed.value=e.flowSpeed,this.material.uniforms.uPrimaryFlowSpeed.value=e.flowSpeed,this.material.uniforms.uSecondaryFlowSpeed.value=e.flowSpeed*1.6,this.material.uniforms.uUvPatternSpeed1.value=e.flowSpeed*4,this.material.uniforms.uUvPatternSpeed2.value=e.flowSpeed*3),e.waveAmplitude!==void 0&&(this.material.uniforms.uWaveAmplitude.value=e.waveAmplitude),e.opacity!==void 0&&(this.material.uniforms.uOpacity.value=e.opacity),e.colorDeep){const t=e.colorDeep instanceof g?e.colorDeep:new g(e.colorDeep);this.material.uniforms.uColorDeep.value=t}if(e.colorShallow){const t=e.colorShallow instanceof g?e.colorShallow:new g(e.colorShallow);this.material.uniforms.uColorShallow.value=t}}getObject3D(){return this.mesh}dispose(){this.mesh.geometry&&this.mesh.geometry.dispose(),this.material&&this.material.dispose()}}function Zt(n,e){let t=.5,i=.025,s=.75;if(e.seeds){const l=e.seeds.shape_seed||e.seeds.planet_seed,c=(r=>{let o=r;return()=>(o=(o*1664525+1013904223)%4294967296,o/4294967296)})(l);t=.05+c()*.3,i=.02+c()*.02,s=.25+c()*.6}const a={radius:n*.999,detail:128,flowSpeed:t,waveAmplitude:i*.4,opacity:s,colorDeep:new g(4147),colorShallow:new g(26333)};return new lt(n,a)}class ai{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new Oe,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,s=t*Math.cos(i),a=t*Math.sin(i),l=a*.8,h=new Ce,c=new Float32Array([0,0,0,s,l,a]);h.setAttribute("position",new ee(c,3));const r=new Ct({color:16776960,linewidth:5,transparent:!1});this.sunLine=new Pt(h,r),this.debugGroup.add(this.sunLine);const o=e+Math.PI,u=t*.7,f=u*Math.cos(o),p=0,y=u*Math.sin(o),x=new ct(this.planetRadius*.15,16,16),w=new Qt({color:16776960,transparent:!1,opacity:1}),v=new ve(x,w);v.position.set(f,p,y),this.debugGroup.add(v),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new Ce,s=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new ee(s,3));const a=new Ct({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new Pt(i,a),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,s=this.params.initialAngleRotation||0,a=e-t,l=2*Math.PI/i;return(s+a*l)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,s=this.sunLine.geometry,a=s.attributes.position.array;a[3]=i*Math.cos(t),a[4]=0,a[5]=i*Math.sin(t),s.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,s=i.attributes.position.array;s[0]=-t*Math.cos(e),s[1]=0,s[2]=-t*Math.sin(e),s[3]=t*Math.cos(e),s[4]=0,s[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function ps(n,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:n.debug?.cosmic_origin_time||n.timing?.cosmic_origin_time||n.cosmicOriginTime,rotationPeriod:n.planet_info?.rotation_period||n.rotation_period_seconds||86400,initialAngleRotation:n.debug?.initial_angle_rotation||n.timing?.initial_angle_rotation||n.initialAngleRotation||0,planetRadius:e,orbitalAngle:n.timing?.orbital_angle||0,sunAngle:n.sun_angle||n.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new ai(e,t)}const gs=!1;class Be{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return Be.instance||(Be.instance=new Be),Be.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new st(t,e),fromPythonData:(e,t)=>Ut(t,e.atmosphere||{})}),this.registerEffect("atmosphere_clouds",{create:(e,t)=>new $e(t,e),fromPythonData:(e,t)=>Qe(t,e.surface_elements||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new si(t,e),fromPythonData:(e,t)=>Wt(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new it(t,e),fromPythonData:(e,t)=>Ki(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new ti(t,e),fromPythonData:(e,t)=>qi(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new Ht(t,e),fromPythonData:(e,t)=>new Ht(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("land_masses",{create:(e,t)=>new Nt(t,e),fromPythonData:(e,t)=>bt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("ocean_waves",{create:(e,t)=>new rt(e),fromPythonData:(e,t)=>fs(e)}),this.registerEffect("fluid_layers",{create:(e,t)=>new lt(t,e),fromPythonData:(e,t)=>Zt(t,e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("star_field",{create:(e,t)=>new nt(t,e),fromPythonData:(e,t)=>hs(t,e.seeds?.planet_seed||e.planet_seed)}),this.registerEffect("tundra_snowflakes",{create:(e,t)=>new ii(t,e),fromPythonData:(e,t)=>Gt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("anomaly_phase_matter",{create:(e,t)=>new at(t,e),fromPythonData:(e,t)=>es(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("pulsating_cube",{create:(e,t)=>new ts(t,e),fromPythonData:(e,t)=>(Ye(e),is(t,e.surface_elements||{},e.seeds?.planet_seed))}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new ai(t,e),fromPythonData:(e,t)=>ps(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,s,a=0){const l=this.creators.get(e);if(!l)return console.warn(`Effect type '${e}' not registered`),null;try{const h=l.create(t,i,s);if(!h)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:h,priority:a,enabled:!0};return this.effects.set(c.id,c),c}catch(h){return console.error(`Error creating effect '${e}':`,h),null}}createEffectFromPythonData(e,t,i,s,a=0){const l=this.creators.get(e);if(!l||!l.fromPythonData)return this.createEffect(e,t,i,s,a);try{const h=l.fromPythonData(t,i,s);if(!h)return null;const c={id:`effect_${this.nextId++}`,type:e,effect:h,priority:a,enabled:!0};return this.effects.set(c.id,c),c}catch(h){return console.error(`Error creating effect '${e}' from Python data:`,h),null}}createEffectsFromList(e,t,i){const s=[],a=e.sort((l,h)=>(l.priority||0)-(h.priority||0));for(const l of a){const h=this.createEffect(l.type,l.params,t,i,l.priority);h&&(h.enabled=l.enabled!==!1,s.push(h))}return s}createEffectsFromPythonPlanetData(e,t,i,s,a){const l=[];try{const h=Ye(e);if(a?this.layerSystem=a:this.layerSystem=new ot(i,h),e.surface_elements){const o=e.surface_elements;if(o.effects_3d&&Array.isArray(o.effects_3d))for(const u of o.effects_3d){if(u.type==="atmospheric_streaks"){const p=Wt(t,u.params,e.seeds?.shape_seed+3e3),y={id:`effect_${this.nextId++}`,type:"atmospheric_streaks",effect:p,priority:u.priority||0,enabled:!0,name:"Atmospheric Streaks"};this.effects.set(y.id,y),l.push(y),p.addToScene(s,i.position);continue}const f=this.createEffect(u.type,u.params,t,i,u.priority||0);f?(f.name=u.type.replace(/_/g," ").replace(/\b\w/g,p=>p.toUpperCase()),l.push(f),f.effect.apply&&f.effect.apply(i),f.effect.addToScene&&f.effect.addToScene(s,i.position)):console.error("❌ FALLO AL CREAR EFECTO:",u.type)}switch(console.log(`🔍 Planet surface type: "${o.type}"`),console.log(`🔍 Planet info type: "${e.planet_info?.type}"`),o.type.toLowerCase()){case"gas_giant":if(this.layerSystem){const m=Yt(this.layerSystem,{...o,base_color:h,turbulence:e.turbulence||o.turbulence},e.seeds?.shape_seed||e.seeds?.planet_seed||e.seeds?.planet_seed),b=Bt(this.layerSystem,{...o,base_color:h,storm_intensity:e.storm_intensity||o.storm_intensity},(e.seeds?.shape_seed||e.seeds?.planet_seed)+1e3),A={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:m,priority:0,enabled:!0};this.effects.set(A.id,A),l.push(A);const P={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:b,priority:1,enabled:!0};if(this.effects.set(P.id,P),l.push(P),o.polar_hexagon&&o.polar_hexagon.enabled){const E=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,L=new St({planetColor:h,hexagonData:o.polar_hexagon,planetRadius:t,currentTime:E}),z={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:L,priority:10,enabled:!0};this.effects.set(z.id,z),l.push(z),s&&L.addToScene(s)}}else console.error("❌ PlanetLayerSystem not initialized!");break;case"frozen_gas_giant":if(this.layerSystem){const m=Yt(this.layerSystem,{...o,base_color:h,turbulence:e.turbulence||o.turbulence,icy_tint:!0},e.seeds?.shape_seed||e.seeds?.planet_seed),b={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:m,priority:0,enabled:!0};if(this.effects.set(b.id,b),l.push(b),o.polar_hexagon&&o.polar_hexagon.enabled){const A=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,P=new St({planetColor:h,hexagonData:o.polar_hexagon,planetRadius:t,currentTime:A}),E={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:P,priority:10,enabled:!0};this.effects.set(E.id,E),l.push(E),s&&P.addToScene(s)}}break;case"nebulous":if(this.layerSystem){const m=Bt(this.layerSystem,{...o,base_color:h,storm_intensity:o.nebula_density||.6,color_variance:o.color_variance||.2},(e.seeds?.shape_seed||e.seeds?.planet_seed)+2e3),b={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:m,priority:0,enabled:!0};if(this.effects.set(b.id,b),l.push(b),o.polar_hexagon&&o.polar_hexagon.enabled){const A=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,P=new St({planetColor:h,hexagonData:o.polar_hexagon,planetRadius:t,currentTime:A}),E={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:P,priority:10,enabled:!0};this.effects.set(E.id,E),l.push(E),s&&P.addToScene(s)}}break;case"metallic":case"metallic_3d":if(this.layerSystem){const m=cs(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),b={id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:m,priority:0,enabled:!0};this.effects.set(b.id,b),l.push(b)}break;case"rocky":if(this.layerSystem){const m=os(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),b={id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:m,priority:0,enabled:!0};if(this.effects.set(b.id,b),l.push(b),o.clouds&&o.clouds.length>0){const A=Qe(t,o,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),P={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:A,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(P.id,P),l.push(P),A.addToScene(s,i.position)}}break;case"icy":if(this.layerSystem){const m=rs(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),b={id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:m,priority:0,enabled:!0};this.effects.set(b.id,b),l.push(b);const A=Ji(t,o,(e.seeds?.shape_seed||e.seeds?.planet_seed)+8e3);if(A){const E={id:`effect_${this.nextId++}`,type:"transparent_land_masses",effect:A,priority:1,enabled:!0,name:"Ice Formations"};this.effects.set(E.id,E),l.push(E),A.addToScene(s,i.position),console.log("🧊 Ice Formations (transparent LandMasses) added to Icy planet")}else console.warn("❄️ Failed to create transparent LandMasses for Icy planet");if(o.clouds&&o.clouds.length>0){const E=Qe(t,o,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),L={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:E,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(L.id,L),l.push(L),E.addToScene(s,i.position),console.log("☁️ Atmospheric Clouds added to Icy planet")}const P=Vt(t,o,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(P){const E={id:`effect_${this.nextId++}`,type:"icy_features",effect:P,priority:2,enabled:!0,name:"Ice Crystals & Features"};this.effects.set(E.id,E),l.push(E),P.addToScene(s,i.position),console.log("❄️ Icy Features (crystals, cracks, ice caps) added to Icy planet")}}break;case"oceanic":const u=Zt(t,e);if(u){const m={id:`effect_${this.nextId++}`,type:"fluid_layers",effect:u,priority:3,enabled:!0,name:"Fluid Ocean Layers"};this.effects.set(m.id,m),l.push(m),u.addToScene(s,i.position),console.log("🌊 FluidLayers effect added for oceanic planet")}if(o.green_patches&&o.green_patches.length>0){const m=bt(t,o,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(m){const b={id:`effect_${this.nextId++}`,type:"land_masses",effect:m,priority:5,enabled:!0,name:"Land Masses (Islands)"};this.effects.set(b.id,b),l.push(b),m.addToScene(s,i.position)}}if(o.clouds&&o.clouds.length>0){const m=Qe(t,o,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),b={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:m,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(b.id,b),l.push(b),m.addToScene(s,i.position)}break;case"tundra":if(o.green_patches&&o.green_patches.length>0){const m=bt(t,o,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(m){const b={id:`effect_${this.nextId++}`,type:"land_masses",effect:m,priority:5,enabled:!0,name:"Tundra Terrain"};this.effects.set(b.id,b),l.push(b),m.addToScene(s,i.position),console.log("🏔️ Tundra terrain (LandMasses) added")}}const f=Vt(t,o,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(f){const m={id:`effect_${this.nextId++}`,type:"icy_features",effect:f,priority:6,enabled:!0,name:"Snow Patches & Ice"};this.effects.set(m.id,m),l.push(m),f.addToScene(s,i.position),console.log("❄️ Sparse ice features added to Tundra planet")}if(o.clouds&&o.clouds.length>0){const m=Qe(t,o,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),b={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:m,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(b.id,b),l.push(b),m.addToScene(s,i.position),console.log("☁️ Atmospheric clouds added to Tundra planet")}const p=Gt(t,o,(e.seeds?.shape_seed||e.seeds?.planet_seed)+15e3);if(p){const m={id:`effect_${this.nextId++}`,type:"tundra_snowflakes",effect:p,priority:20,enabled:!0,name:"Snowflakes"};this.effects.set(m.id,m),l.push(m),p.addToScene(s,i.position),console.log("❄️ Tundra snowflakes added to Tundra planet")}break;case"anomaly":console.log("🌌 DETECTED ANOMALY PLANET - Creating effects"),console.log("🌌 Planet data:",{surfaceType:o.type,planetType:e.planet_info?.type}),console.log("🎭 SHOWCASE MODE: Activating ALL anomaly effects for evaluation");const x=["anomaly_phase_matter","pulsating_cube"],w=e.seeds?.planet_seed||Math.floor(Math.random()*1e6),v=x.length;for(let m=0;m<v;m++){const b=x[m],A=w+m*1e4,P=this.createEffectFromPythonData(b,{...e,seeds:{...e.seeds,planet_seed:A}},t,i,10+m);P&&(P.name=b.replace(/_/g," ").replace(/\b\w/g,E=>E.toUpperCase()),l.push(P),P.effect.addToScene&&P.effect.addToScene(s,i.position),console.log(`🎭 Added anomaly effect: ${P.name}`))}if(e.atmosphere&&e.atmosphere.type!=="None"){const m=this.createEffectFromPythonData("atmosphere",e.atmosphere,t,i,5);m&&(l.push(m),m.effect.addToScene(s,i.position),console.log("🌫️ Anomalous atmosphere added"))}break;default:if(e.planet_info?.type?.toLowerCase()==="anomaly"){console.log("🌌 DETECTED ANOMALY PLANET via planet_info.type - Creating effects"),console.log("🎭 SHOWCASE MODE (alt detection): Activating ALL anomaly effects for evaluation");const b=["anomaly_phase_matter","pulsating_cube"],A=e.seeds?.planet_seed||Math.floor(Math.random()*1e6),P=b.length;for(let E=0;E<P;E++){const L=b[E],z=A+E*1e4,R=this.createEffectFromPythonData(L,{...e,seeds:{...e.seeds,planet_seed:z}},t,i,10+E);R&&(R.name=L.replace(/_/g," ").replace(/\b\w/g,G=>G.toUpperCase()),l.push(R),R.effect.addToScene&&R.effect.addToScene(s,i.position),console.log(`🎭 Added anomaly effect: ${R.name}`))}if(e.atmosphere&&e.atmosphere.type!=="None"){const E=this.createEffectFromPythonData("atmosphere",e.atmosphere,t,i,5);E&&(l.push(E),E.effect.addToScene(s,i.position),console.log("🌫️ Anomalous atmosphere added"))}}else if(i.material instanceof Ze){const m=Ye(e);i.material.color.copy(m)}break}}else if(i.material instanceof Ze){const o=Ye(e);i.material.color.copy(o)}const c=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),r=c==="anomaly"||e.surface_elements?.type==="anomaly";if(e.atmosphere&&!r){if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const o=Ut(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(o){const u={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:o,priority:20,enabled:!0};this.effects.set(u.id,u),l.push(u),o.addToScene(s,i.position)}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const o={...e.atmosphere};c==="oceanic"&&(o.opacity=Math.min(o.opacity||.3,.15),o.width=Math.min(o.width||15,8));const u=this.createEffectFromPythonData("atmosphere",o,t,i,5);u&&(l.push(u),u.effect.addToScene(s,i.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){const o=this.createEffectFromPythonData("ring_system",e,t,i,1);o?(l.push(o),o.effect.addToScene(s,i.position)):console.warn("⚠️ Failed to create ring effect")}if(e.surface_elements?.has_fragmentation_zones){const o=this.createEffectFromPythonData("fragmentation",e,t,i,5);o&&(l.push(o),o.effect.addToScene(s,i.position))}this.layerSystem&&this.layerSystem.addToScene(s);try{const o=this.createEffectFromPythonData("star_field",e,t,i,-100);o&&o.effect&&(o.effect.addToScene(s,i.position),l.push(o),console.log("⭐ StarField added automatically using planet seed:",e.seeds?.planet_seed))}catch(o){console.warn("Could not create StarField:",o)}return l.forEach((o,u)=>{}),l.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),l}catch(h){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",h),h}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);if(i){i.enabled=t!==void 0?t:!i.enabled;const s=i.effect;if(s&&s.getObject3D){const a=s.getObject3D();a&&(a.visible=i.enabled,console.log(`🎮 Toggle effect ${i.type}: visible = ${i.enabled}`))}if(this.layerSystem){const a=this.layerSystem.getLayerMeshes(),h={cloud_bands_layer:"cloudBands",cloud_gyros_layer:"cloudGyros",metallic_surface_layer:"metallicSurface",rocky_terrain_layer:"rockyTerrain",icy_terrain_layer:"icyTerrain"}[i.type];h&&a[h]&&(a[h].visible=i.enabled)}}else console.warn(`⚠️ Effect not found: ${e}`)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(s){console.error(`Error updating effect ${i.type}:`,s)}}updateLightForAllEffects(e){this.layerSystem&&this.layerSystem.updateFromThreeLight(e);for(const t of this.effects.values())if(t.enabled&&t.effect.updateFromThreeLight)try{t.effect.updateFromThreeLight(e)}catch(i){console.error(`Error updating light for effect ${t.type}:`,i)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear(),this.nextId=1}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const De=Be.getInstance(),Ve={atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function ys(n){const e=[];switch(n.toLowerCase()){case"metallic":e.push({type:"atmosphere",params:{...Ve.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:Ve.cloud_bands,priority:0},{type:"cloud_gyros",params:Ve.cloud_gyros,priority:1},{type:"atmosphere",params:{...Ve.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:Ve.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...Ve.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const Pe={log:(n,e)=>{},warn:(n,e)=>{console.warn(`[Effects] ${n}`,e||"")},error:(n,e)=>{console.error(`[Effects] ${n}`,e||"")},debug:(n,e)=>{}};new Date().toISOString();const vs=({planetData:n,showInConsole:e=!0,showInPage:t=!1})=>{const[i,s]=T.useState([]),[a,l]=T.useState({});T.useEffect(()=>{if(!n)return;const r=h(n);l(r),s(c(n)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=n,window.__DEBUG_PLANET_ANALYSIS=r)},[n,e]);function h(r){const o={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(r.planet_info&&r.surface_elements?o.hasValidStructure=!0:(r.planet_info||o.missingFields.push("planet_info"),r.surface_elements||o.missingFields.push("surface_elements")),r.surface_elements?.type==="oceanic"&&(o.oceanicData={hasAbstractLands:!!r.surface_elements.abstract_lands?.length,numGreenPatches:r.surface_elements.green_patches?.length||0,numClouds:r.surface_elements.clouds?.length||0,hasDepths:r.surface_elements.depths?.enabled||!1,baseColorIsBlue:r.planet_info?.base_color==="#0000FF",greenPatchColor:r.surface_elements.green_patches?.[0]?.color,issues:[]},o.oceanicData.numGreenPatches>15&&o.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),o.oceanicData.baseColorIsBlue||o.oceanicData.issues.push(`Color base no es azul puro: ${r.planet_info?.base_color}`),o.renderingIssues=o.oceanicData.issues),r.planet_info?.base_color&&r.planet_info?.type){const f={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[r.planet_info.type];f&&r.planet_info.base_color!==f?o.colorConsistency=`Inconsistente: esperado ${f}, recibido ${r.planet_info.base_color}`:o.colorConsistency="Correcto"}return o}function c(r){const o=[];if(!r.surface_elements?.type)return["No surface type defined"];const u=r.surface_elements.type.toLowerCase();switch(u){case"oceanic":o.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":o.push("RockyTerrainEffect");break;case"icy":o.push("IcyTerrainEffect");break;case"gas giant":o.push("GasGiantBandsEffect");break;default:o.push(`Generic effect for type: ${u}`)}return r.atmosphere?.density>0&&o.push("AtmosphericEffect"),r.rings&&o.push("RingSystemEffect"),o}return t?d.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[d.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",n.planet_info?.name]}),d.jsxs("div",{style:{marginBottom:"10px"},children:[d.jsx("strong",{children:"Type:"})," ",n.planet_info?.type,d.jsx("br",{}),d.jsx("strong",{children:"Base Color:"})," ",n.planet_info?.base_color,d.jsx("br",{}),d.jsx("strong",{children:"Radius:"})," ",n.planet_info?.radius]}),n.surface_elements?.type==="oceanic"&&d.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[d.jsx("strong",{children:"🌊 Oceanic Data:"}),d.jsx("br",{}),d.jsxs("span",{style:{color:a.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",a.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),d.jsx("br",{}),"Green Patches: ",a.oceanicData?.numGreenPatches,d.jsx("br",{}),"Clouds: ",a.oceanicData?.numClouds,d.jsx("br",{}),"Has Depths: ",a.oceanicData?.hasDepths?"Yes":"No",d.jsx("br",{}),a.oceanicData?.issues?.length>0&&d.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",d.jsx("br",{}),a.oceanicData.issues.map((r,o)=>d.jsxs("div",{children:["- ",r]},o))]})]}),d.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[d.jsx("strong",{children:"🎨 Effects Applied:"}),d.jsx("br",{}),i.map((r,o)=>d.jsxs("div",{style:{color:r.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",r]},o))]}),d.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function xs(n){T.useEffect(()=>{if(n&&n.surface_elements?.type==="oceanic"){n.surface_elements.green_patches?.length>0;const e=n.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[n])}const pt=2.5,$t=()=>{const n=45*Math.PI/180;return pt/(Math.tan(n/2)*.5)},bs=({planetName:n,containerClassName:e="",width:t=800,height:i=600,autoRotate:s=!0,enableControls:a=!0,showDebugInfo:l=!1,planetData:h,cosmicOriginTime:c,initialAngleRotation:r,onDataLoaded:o,onEffectsCreated:u,onError:f})=>{const p=T.useRef(null),y=T.useRef(null),x=T.useRef(null),w=T.useRef(null),v=T.useRef(null),m=T.useRef(null),b=T.useRef(new Ti),A=T.useRef(null),P=T.useRef(0),E=T.useRef(null),[L,z]=T.useState(!0),[R,G]=T.useState(null),[M,k]=T.useState(null),[U,Y]=T.useState([]),[Q,Z]=T.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),q=T.useRef([]),N=T.useRef(0),F=T.useRef(null),O=T.useRef(null),$=Math.floor(Date.now()/1e3),[te,me]=T.useState(0),ie=c||M?.timing?.cosmic_origin_time||Date.now()/1e3-3600,fe=$-ie+te;P.current=fe;const ge=T.useCallback(()=>{if(!p.current||!x.current||!w.current)return;const S=p.current,I=S.clientWidth||400,_=S.clientHeight||400;x.current.setSize(I,_),w.current.aspect=I/_,w.current.updateProjectionMatrix()},[]),be=async S=>{if(!(!v.current||!y.current||!O.current)){Pe.log("Applying modular effects from API data",{planet:S.planet_info.name,type:S.planet_info.type});try{Te();const I=Ye(S);O.current.updateBaseColor(I);const _=De.createEffectsFromPythonPlanetData(S,pt,v.current,y.current,O.current);console.log(`Planet: ${S.planet_info?.name}, Effects:`,_.map(D=>D.type)),Y(_),q.current=_,u&&u(_),Pe.log(`Successfully applied ${_.length} modular effects`),Je()}catch(I){Pe.error("Error applying modular effects",I),Ue()}}},ye=T.useCallback(()=>{if(!p.current)return!1;try{for(;p.current.firstChild;)p.current.removeChild(p.current.firstChild);y.current=null,w.current=null,x.current=null,v.current=null,ne.current=null;const S=p.current,I=S.clientWidth||t||400,_=S.clientHeight||i||400,D=new Ci;D.background=new g(1297),y.current=D;const se=new Pi(45,I/_,.1,1e4),X=$t();se.position.set(0,0,X),se.lookAt(0,0,0),w.current=se;const V=new Ai({antialias:!0,alpha:!0,powerPreference:"high-performance"});return V.setSize(I,_),V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.shadowMap.enabled=!0,V.shadowMap.type=Ii,V.toneMapping=Ni,V.toneMappingExposure=1.2,V.outputColorSpace=Di,p.current.appendChild(V.domElement),x.current=V,qe(D,null),Ke(D),a&&ht(se,V.domElement),!0}catch(S){return console.error("Error initializing Three.js:",S),!1}},[M,h,c]),Ee=S=>{if(!S)return 0;const I=S.sun_angle||S.lighting?.sun_angle;if(I!==void 0)return I;const _=S.timing?.current_orbital_angle||S.timing?.orbital_angle;return _??0},le=T.useRef(null),Ie=T.useRef(null),Me=T.useRef(null),ne=T.useRef(null),Ne=S=>{S.castShadow=!0,S.shadow.mapSize.width=2048,S.shadow.mapSize.height=2048,S.shadow.camera.near=.5,S.shadow.camera.far=50,S.shadow.camera.left=-10,S.shadow.camera.right=10,S.shadow.camera.top=10,S.shadow.camera.bottom=-10},ze=S=>{if(!le.current||!y.current)return;const I=Ee(S),_=10,D=I+Math.PI,se=Math.sin(I)*5,X=_*Math.cos(D),V=se,je=_*Math.sin(D);le.current.position.set(X,V,je),le.current.target.position.set(0,0,0),y.current.children.includes(le.current.target)||y.current.add(le.current.target),Ie.current&&Ie.current.position.set(-X*.5,0,-je*.5),O.current&&le.current&&O.current.updateFromThreeLight(le.current),le.current&&De.updateLightForAllEffects(le.current)},qe=(S,I)=>{{const _=new zt(16777215,2);_.position.set(-10,5,10),_.target.position.set(0,0,0),_.castShadow=!0,Ne(_),S.add(_),S.add(_.target),le.current=_;const D=new zt(16777215,.05);D.position.set(8,-3,-5),S.add(D),Ie.current=D;const se=new Ri(2236996,.1);S.add(se),setTimeout(()=>{O.current&&_&&O.current.updateFromThreeLight(_),_&&De.updateLightForAllEffects(_)},50);return}},Ke=S=>{const I=new ct(pt,128,64),_=new Qt({color:8421504}),D=new ve(I,_);D.castShadow=!0,D.receiveShadow=!0,D.position.set(0,0,0),S.add(D),v.current=D;const se=new g(8421504);O.current=new ot(D,se),O.current.addToScene(S)},ht=(S,I)=>{const _=new Fi(S,I);_.enableDamping=!0,_.dampingFactor=.05;const D=$t();_.minDistance=D*.5,_.maxDistance=D*2,_.autoRotate=s,_.autoRotateSpeed=.5,_.enablePan=!0,_.enableZoom=!0,_.target.set(0,0,0),m.current=_},Fe=T.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{z(!0),G(null),Pe.log("Loading planet data from API",{planetName:n});const I=await fetch("/api/planet/rendering-data");if(!I.ok)throw new Error(`HTTP error! status: ${I.status}`);const _=await I.json();if(!_.success)throw new Error(_.error||"Failed to fetch planet data");const D=_.planet_data,se=_.timing,X=_.rendering_data,V={planet_info:X?.planet_info||{name:D.name,type:D.planet_type,base_color:"#808080",radius:D.diameter/15e3,orbital_radius:D.orbital_radius},surface_elements:X?.surface_elements,atmosphere:X?.atmosphere,rings:X?.rings,effects_3d:X?.effects_3d,shader_uniforms:X?.shader_uniforms,universal_actions:X?.universal_actions,timing:{cosmic_origin_time:se.cosmic_origin_time,current_time_seconds:se.current_time_seconds,elapsed_time:se.elapsed_time,initial_orbital_angle:D.initial_orbital_angle,current_orbital_angle:D.current_orbital_angle,max_orbital_radius:se.max_orbital_radius,system_max_orbital_radius:D.system_max_orbital_radius},original_planet_data:D,seeds:X?.seeds};return k(V),E.current=V,Pe.log("API data loaded successfully",{planet:V.planet_info.name,type:V.planet_info.type,hasEffects:!!V.surface_elements,fullRenderingData:X}),o&&o(V),V}catch(S){const I=S instanceof Error?S.message:"Unknown error";return G(I),f&&f(I),null}finally{z(!1),window.isLoadingPlanetData=!1}}},[n,o,f]);T.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{z(!0),G(null),Pe.log("Loading planet data from API",{planetName:n});const I=await fetch("/api/planet/rendering-data");if(!I.ok)throw new Error(`HTTP error! status: ${I.status}`);const _=await I.json();if(!_.success)throw new Error(_.error||"Failed to fetch planet data");const D=_.planet_data,se=_.timing,X=_.rendering_data,V={planet_info:X?.planet_info||{name:D.name,type:D.planet_type,base_color:"#808080",radius:D.diameter/15e3,orbital_radius:D.orbital_radius},surface_elements:X?.surface_elements,atmosphere:X?.atmosphere,rings:X?.rings,effects_3d:X?.effects_3d,shader_uniforms:X?.shader_uniforms,universal_actions:X?.universal_actions,timing:{cosmic_origin_time:se.cosmic_origin_time,current_time_seconds:se.current_time_seconds,elapsed_time:se.elapsed_time,initial_orbital_angle:D.initial_orbital_angle,current_orbital_angle:D.current_orbital_angle,max_orbital_radius:se.max_orbital_radius,system_max_orbital_radius:D.system_max_orbital_radius},original_planet_data:D,seeds:X?.seeds};k(V),E.current=V,Pe.log("API data loaded successfully",{planet:V.planet_info.name,type:V.planet_info.type,hasEffects:!!V.surface_elements,fullRenderingData:X}),ze(V),ne.current&&y.current&&(y.current.remove(ne.current),ne.current.geometry.dispose(),ne.current.material.dispose(),ne.current=null),await be(V),o&&o(V)}catch(S){const I=S instanceof Error?S.message:"Unknown error";G(I),f&&f(I),Ue()}finally{z(!1),window.isLoadingPlanetData=!1}}},[n,h,c,r]);const Re=T.useCallback(()=>{if(!M||!v.current)return;const S=h?.orbital_period_seconds||365.25*24*3600,I=2*Math.PI/S,_=M.timing?.initial_orbital_angle||0,D=Date.now()/1e3,se=0,X=c||M.timing?.cosmic_origin_time||Date.now()/1e3-3600,V=D-X+se,je=(_+V*I)%(2*Math.PI),vt=M.timing?.max_orbital_radius||100,mt=20+M.planet_info?.orbital_radius/vt*80,oi=mt,ni=mt*Math.cos(je),ri=oi*Math.sin(je);v.current.position.x=ni,v.current.position.z=ri,v.current.position.y=0},[M,h,c]),yt=T.useCallback(async S=>{const I=S||M;if(I&&y.current)try{ze(I),ne.current&&y.current&&(y.current.remove(ne.current),ne.current.geometry.dispose(),ne.current.material.dispose(),ne.current=null),await be(I)}catch(_){Pe.error("Error in applyProceduralShadersFromAPI:",_),Ue()}},[M]),Ue=()=>{if(!(!y.current||!v.current)){Pe.warn("Applying fallback effects for planet type:",h?.planet_type);try{Te(),v.current.material instanceof Ze&&v.current.material.color.setHex(6710886);try{const S=ys("generic"),I=De.createEffectsFromList(S,pt,v.current);I.forEach(_=>{_.effect.addToScene&&y.current&&v.current&&_.effect.addToScene(y.current,v.current.position)}),q.current=I,Y(I)}catch(S){console.warn("Could not create fallback effects, using basic material only:",S)}Je()}catch(S){Pe.error("Error applying fallback effects",S)}}},Te=()=>{De.clearAllEffects(),q.current.forEach(S=>{try{S.effect.dispose&&S.effect.dispose()}catch{}}),q.current=[],Y([])},dt=T.useCallback(()=>{A.current=requestAnimationFrame(dt);const S=performance.now(),I=b.current.getDelta();m.current&&m.current.update();try{De.updateAllEffects(I,v.current?.rotation.y)}catch{}if(v.current&&E.current){E.current.planet_info?.name;const _=E.current.original_planet_data,D=_?.orbital_period_seconds||365.25*24*3600,se=E.current.timing?.initial_orbital_angle||0;c||E.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const X=_?.axial_tilt||0,V=2*Math.PI/D;(se+P.current*V)%(2*Math.PI);const je=E.current.timing?.max_orbital_radius||E.current.timing?.system_max_orbital_radius,vt=_?.orbital_radius;if(!je||!vt)return;_?.eccentricity_factor,v.current.position.set(0,0,0);const Rt=_?.rotation_period_seconds||86400,mt=2*Math.PI/Rt;v.current.rotation.y=P.current*mt%(2*Math.PI),v.current.rotation.z=X*(Math.PI/180)}if(q.current.forEach(_=>{_.effect.updateUniforms&&_.effect.updateUniforms(I)}),x.current&&y.current&&w.current){const _=performance.now();x.current.render(y.current,w.current);const D=performance.now()-_;if(S-N.current>5e3){const se=1e3/(S-N.current);Je(),Z(X=>({...X,frameRate:Math.round(se),renderTime:Math.round(D*100)/100})),N.current=S}}},[]),Je=T.useCallback(()=>{const S=De.getStats();Z(I=>({...I,activeEffects:S.activeEffects,enabledEffects:S.enabledEffects}))},[]);return T.useEffect(()=>{let S=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!S)return;const _=await Fe();if(!S)return;if(!ye()){S&&G("Failed to initialize 3D renderer");return}if(!S||(dt(),p.current&&"ResizeObserver"in window&&(F.current=new ResizeObserver(ge),F.current.observe(p.current)),window.addEventListener("resize",ge),!S))return;_?await yt(_):Ue()}catch(_){S&&G(_ instanceof Error?_.message:"Unknown initialization error")}})(),()=>{if(S=!1,E.current=null,A.current&&cancelAnimationFrame(A.current),F.current&&F.current.disconnect(),window.removeEventListener("resize",ge),Te(),O.current&&(O.current.dispose(),O.current=null),m.current&&m.current.dispose(),Me.current&&y.current&&(y.current.remove(Me.current),Me.current.geometry.dispose(),Me.current.material.dispose(),Me.current=null),ne.current&&y.current&&(y.current.remove(ne.current),ne.current.geometry.dispose(),ne.current.material.dispose(),ne.current=null),x.current&&p.current)try{p.current.contains(x.current.domElement)&&p.current.removeChild(x.current.domElement),x.current.dispose()}catch{}}},[]),T.useEffect(()=>{const S=setInterval(()=>{const I=De.getStats();Z(_=>({..._,activeEffects:I.activeEffects,enabledEffects:I.enabledEffects}))},1e4);return()=>clearInterval(S)},[]),T.useEffect(()=>{M&&y.current&&v.current&&Re()},[M,Re]),xs(M),d.jsxs("div",{className:`relative ${e}`,children:[l&&M&&d.jsx(vs,{planetData:M,showInPage:!0,showInConsole:!0}),d.jsx("div",{ref:p,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),L&&d.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:d.jsxs("div",{className:"text-white text-center",children:[d.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),d.jsx("div",{children:"Loading planet..."})]})}),R&&d.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[d.jsx("strong",{children:"Error:"})," ",R]}),M&&!L&&d.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[d.jsx("h3",{className:"text-lg font-bold",children:M.planet_info.name}),d.jsx("p",{className:"text-sm opacity-80",children:M.planet_info.type}),d.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[U.length," effects active"]}),M.surface_elements?.description&&d.jsx("p",{className:"text-xs mt-2 opacity-60",children:M.surface_elements.description.appearance})]}),l&&d.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[d.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),d.jsxs("div",{children:["Frame Rate: ",Q.frameRate," FPS"]}),d.jsxs("div",{children:["Render Time: ",Q.renderTime,"ms"]}),d.jsxs("div",{children:["Active Effects: ",Q.activeEffects]}),d.jsxs("div",{children:["Enabled Effects: ",Q.enabledEffects]}),d.jsxs("div",{className:"mt-2",children:[d.jsx("div",{className:"font-semibold",children:"Effects:"}),U.map(S=>d.jsxs("div",{className:"ml-2",children:[S.type," (",S.enabled?"ON":"OFF",")"]},S.id))]})]})]})};class Ss extends Xt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?d.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:d.jsxs("div",{className:"text-center p-4",children:[d.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),d.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const _s=n=>d.jsx(Ss,{children:d.jsx(bs,{...n})}),ws=({planetUrl:n,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:s,onEffectsCreated:a,effects:l,onToggleEffect:h})=>{const c=T.useRef(null),r=T.useRef(null),[o,u]=T.useState("Aligning Stargate..."),[f,p]=T.useState(!1),[y,x]=T.useState(!1),[w,v]=T.useState(!1),[m,b]=T.useState(!0),[A,P]=T.useState(!0),[E,L]=T.useState(null),[z,R]=T.useState(null);T.useEffect(()=>{l&&h&&l.forEach(M=>{De.toggleEffect(M.id,M.enabled)})},[l]),T.useEffect(()=>{const M=document.createElement("style");return M.textContent=`
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
    `,document.head.appendChild(M),()=>{document.head.removeChild(M)}},[]),T.useEffect(()=>{const M=c.current;if(!M)return;const k=M.getContext("2d");if(!k)return;let U=[];const Y=800;let Q,Z;const q=800;let N,F=.5;function O(){const ie=M?.parentElement;if(!ie||!M)return;const fe=ie.clientWidth,ge=ie.clientHeight;M.width=Math.min(fe,q),M.height=Math.min(ge,q),Q=M.width/2,Z=M.height/2}function $(){O(),U=[];for(let ie=0;ie<Y;ie++)U.push({x:Math.random()*(M?.width||800),y:Math.random()*(M?.height||800),z:Math.random()*(M?.width||800),o:Math.random()});te()}function te(){!M||!k||(k.clearRect(0,0,M.width,M.height),U.forEach(ie=>{ie.z-=F,ie.z<=0&&(ie.z=M.width,ie.x=Math.random()*M.width,ie.y=Math.random()*M.height,ie.o=Math.random());const fe=M.width/ie.z,ge=(ie.x-Q)*fe+Q,be=(ie.y-Z)*fe+Z,ye=2*fe;k.beginPath(),k.fillStyle=`rgba(255, 255, 255, ${ie.o})`,k.arc(ge,be,ye,0,2*Math.PI),k.fill()}),F<60&&(F+=1),N=requestAnimationFrame(te))}$();const me=()=>O();return window.addEventListener("resize",me),()=>{window.removeEventListener("resize",me),N&&cancelAnimationFrame(N)}},[]),T.useEffect(()=>{if(e&&!m){const M=new Image;M.onload=()=>{r.current&&(r.current.src=e,x(!0),v(!0))},M.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{x(!0),v(!0)},1500)},M.src=e}else(m||!e)&&setTimeout(()=>{x(!0),v(!0)},1500)},[e,m]),T.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){u("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),p(!0);const k=(q,N)=>Array.from({length:N},()=>q[Math.floor(Math.random()*q.length)]).join(""),U=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let Y=0,Q=0;const Z=()=>{if(Y>=U.length){const N="Stargate system aligned";let F=0;u("");const O=()=>{F<N.length?(u(N.substring(0,F+1)),F++,setTimeout(O,30)):p(!1)};O();return}const q=U[Y];u(k(q.chars,32)),Q++,Q>=q.iterations&&(Y++,Q=0),setTimeout(Z,q.duration)};Z()},[]);const G=()=>{b(!m),m||(x(!0),v(!0))};return d.jsxs("div",{className:"h-full flex flex-col",children:[d.jsxs("div",{className:"flex items-center justify-between mb-3",children:[d.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),A&&d.jsx("div",{className:"flex items-center gap-2",children:d.jsx("button",{onClick:G,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${m?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:m?"2D View":"3D View"})})]}),d.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[d.jsx("canvas",{ref:c,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${w?"opacity-0":"opacity-100"}`,style:{filter:w?"blur(50px)":"none"}}),m&&y&&t&&d.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${y?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:d.jsx(_s,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,onEffectsCreated:a,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:s,onDataLoaded:M=>{L(M)},onError:M=>{R(M),console.error("❌ Planet rendering error:",M)}})}),!m&&d.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${y?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:y&&e?d.jsx("div",{className:"w-full h-full flex items-center justify-center",children:d.jsx(mi,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:d.jsx("img",{ref:r,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):d.jsx("img",{ref:r,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),A&&d.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:m?"🌍 3D":"🖼️ 2D"})]}),d.jsxs("div",{className:"text-center mt-auto",children:[d.jsxs("a",{href:n,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${f?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[d.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[d.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:d.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),o]}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),d.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",m&&E&&d.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",E.planet_info?.type," Planet",E.atmosphere&&d.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),E.rings?.has_rings&&d.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),m&&z&&d.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Es=({currentPlanet:n,system:e,galaxy:t,systemPlanets:i})=>{const[s,a]=T.useState(null),[l,h]=T.useState(null),[c,r]=T.useState(!1),[o,u]=T.useState(!1),[f,p]=T.useState(!0);T.useEffect(()=>{if(i&&i.length>0){const w=i.findIndex(v=>v.name.toLowerCase()===n.toLowerCase());w!==-1?(w>0?(a(i[w-1].name.toLowerCase()),r(!0)):e.index>0?(a("__prev_system__"),r(!0)):r(!1),w<i.length-1?(h(i[w+1].name.toLowerCase()),u(!0)):(h("__next_system__"),u(!0))):(r(!1),u(!1))}else r(!1),u(!1);p(!1)},[n,e.index,i]);const y=async()=>{const w=t.coordinates.join(",");if(s==="__prev_system__")try{const v=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(v.ok){const m=await v.json();if(m.system&&m.system.planets&&m.system.planets.length>0){const A=m.system.planets[m.system.planets.length-1].name.toLowerCase();tt(w,e.index-1,A,m.system.planets),wt(w,e.index-1),window.location.href=`/planet/${A}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else s&&(tt(w,e.index,s,i),window.location.href=`/planet/${s}`)},x=async()=>{const w=t.coordinates.join(",");if(l==="__next_system__")try{const v=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(v.ok){const m=await v.json();if(m.system&&m.system.planets&&m.system.planets.length>0){const A=m.system.planets[0].name.toLowerCase();tt(w,e.index+1,A,m.system.planets),wt(w,e.index+1),window.location.href=`/planet/${A}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else l&&(tt(w,e.index,l,i),window.location.href=`/planet/${l}`)};return f?null:d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("button",{onClick:y,disabled:!c,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${c?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:d.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),d.jsx("button",{onClick:x,disabled:!o,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${o?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:d.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Ms=({planet:n,system:e,galaxy:t,planet_url:i,version:s,image_url:a,cosmic_origin_time:l,initial_angle_rotation:h})=>{const[c]=T.useState(t.coordinates.join(",")),[r,o]=T.useState([]),u=w=>{o(w)},f=(w,v)=>{o(m=>m.map(b=>b.id===w?{...b,enabled:v}:b))};T.useEffect(()=>{document.body.setAttribute("data-coordinates",c),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",n.name.toLowerCase()),tt(c,e.index,n.name,e.planets||[]),wt(c,e.index)},[c,e.index,n.name]);const p=w=>w.replace(/_/g," "),y=w=>w.replace(/_/g," "),x=w=>w.replace(/_/g," ");return d.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[d.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),d.jsxs("div",{className:"relative z-10",children:[d.jsx(hi,{}),d.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:d.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",p(n.name),"'"]})}),d.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",y(e.name),"' - Galaxy '",x(t.name),"'"]}),d.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),d.jsx(Es,{currentPlanet:n.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),d.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:d.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[d.jsx("div",{className:"order-1 lg:order-1",children:d.jsx(ws,{planetUrl:i,imageUrl:a,planet:n,cosmicOriginTime:l,initialAngleRotation:h,onEffectsCreated:u,effects:r,onToggleEffect:f})}),d.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),d.jsx("div",{className:"order-2 lg:order-2",children:d.jsx(Oi,{planet:n,system:e,galaxy:t,cosmicOriginTime:l,initialAngleRotation:h,effects:r,onToggleEffect:f})})]})}),d.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:d.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:d.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",y(e.name),"'"]})})})]}),d.jsx(li,{version:s})]}),d.jsx(ui,{currentLocation:{type:"planet",name:n.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:n.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const n=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!n||!e||!t||!i){console.error("Missing required data elements");return}const s=JSON.parse(n.textContent||"{}"),a=JSON.parse(e.textContent||"{}"),l=JSON.parse(t.textContent||"{}"),h=JSON.parse(i.textContent||"{}"),c={planet:s,system:a,galaxy:l,planet_url:h.planet_url,version:h.version,image_url:h.image_url,cosmic_origin_time:h.cosmic_origin_time,initial_angle_rotation:h.initial_angle_rotation},r=document.getElementById("atlas-react-root");r&&ci.createRoot(r).render(Xt.createElement(Ms,c))}catch(n){console.error("Error initializing Planet React app:",n)}});
