import{r as N,j as h,R as Qt,V as ui,c as fi}from"./atlas_bDOTfl6YifhEgi64OZoGp.js";import{H as pi}from"./atlas_DAPSgiEQDbHKEp53GoVrV.js";import{S as gi,U as vi,m as ot,c as Ct,a as yi}from"./atlas_HOF5V4Y7Q3DW-IYNsZLlc.js";import{m as xi,V as T,n as Ze,T as Be,Q as zt,l as Ft,o as we,R as bi,p as Si,q as Jt,e as Ie,r as te,s as ue,N as Te,t as Qe,c as ht,C as m,u as _i,v as We,d as be,G as Fe,w as ei,x as At,F as _e,y as Tt,z as Mt,h as Ei,H as wi,I as Ci,J as qe,B as ti,K as Pt,O as Ti,U as Mi,X as Pi,L as Nt,g as It,Y as Ni,Z as Ii,_ as Xe,M as ii,$ as Ai,S as Ri,P as Di,W as Li,a0 as Oi,a1 as zi,a2 as Fi,D as jt,A as ji}from"./atlas_BVw4Oz7k70lSX13lINg8j.js";const ki=({effects:r,onToggleEffect:e})=>{const[t,i]=N.useState(r),[o,a]=N.useState(!1);N.useEffect(()=>{i(r)},[r]);const n=(d,l)=>{i(s=>s.map(u=>u.id===d?{...u,enabled:l}:u)),e(d,l)},c=d=>d;return t.length===0?null:h.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("div",{className:"text-xs text-gray-400",children:"3D Effects Control"}),h.jsxs("button",{onClick:()=>a(!o),className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[o?"Hide":"Show"," (",t.filter(d=>d.enabled).length,"/",t.length,")"]})]}),o&&h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:t.map(d=>h.jsxs("div",{className:"bg-white/5 rounded p-2 flex items-center justify-between",children:[h.jsxs("label",{className:"flex items-center gap-2 cursor-pointer flex-1",children:[h.jsx("input",{type:"checkbox",checked:d.enabled,onChange:l=>n(d.id,l.target.checked),className:"rounded border-gray-400 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 bg-white/10"}),h.jsx("span",{className:`${d.enabled?"text-white":"text-gray-500"} transition-colors`,children:c(d.type)})]}),h.jsx("span",{className:`text-[10px] ${d.enabled?"text-green-400":"text-gray-600"}`,children:d.enabled?"ON":"OFF"})]},d.id))}),o&&t.length>3&&h.jsxs("div",{className:"mt-2 flex gap-2",children:[h.jsx("button",{onClick:()=>{t.forEach(d=>n(d.id,!0))},className:"text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-colors",children:"Enable All"}),h.jsx("button",{onClick:()=>{t.forEach(d=>n(d.id,!1))},className:"text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors",children:"Disable All"})]})]})},Ui=({planet:r,system:e,galaxy:t,cosmicOriginTime:i,initialAngleRotation:o,effects:a,onToggleEffect:n})=>{const[c,d]=N.useState(!1),l=v=>v.replace(/_/g," "),s=v=>{const b=v/86400;return b<30?`${b.toFixed(2)} days`:b<365?`${(b/30).toFixed(2)} months`:`${(b/365).toFixed(2)} years`},u=v=>{const b=v*9/5+32;return`${v.toFixed(1)}°C (${b.toFixed(1)}°F)`},f=v=>`${v.toExponential(2)} kg`,p=v=>v>=1e3?`${(v/1e3).toFixed(2)} km`:`${v.toFixed(2)} m`;return h.jsxs("div",{className:"h-full flex flex-col relative",children:[h.jsx("div",{className:"absolute top-0 right-0 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] px-1.5 py-0.5 rounded z-10",children:"VISITED"}),h.jsxs("div",{className:"flex items-center justify-between mb-3 pr-16",children:[h.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Information"}),h.jsx(gi,{type:"planet",name:r.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:r.name,className:"text-xs"})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-3",children:[h.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-blue-500/30",children:[h.jsx("div",{className:"text-xs text-gray-200",children:"Type"}),h.jsx("div",{className:"text-sm font-bold text-blue-300 capitalize",children:r.planet_type})]}),h.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-purple-500/30",children:[h.jsx("div",{className:"text-xs text-gray-200",children:"Atmosphere"}),h.jsx("div",{className:"text-sm font-bold text-purple-300 capitalize",children:r.atmosphere})]}),h.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-green-500/30",children:[h.jsx("div",{className:"text-xs text-gray-200",children:"Life Forms"}),h.jsx("div",{className:"text-sm font-bold text-green-300 capitalize",children:r.life_forms})]})]}),h.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-orange-500/30 mb-3",children:[h.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Physical Properties"}),h.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[h.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[h.jsx("div",{className:"text-xs text-gray-300",children:"Mass"}),h.jsx("div",{className:"text-xs font-bold text-orange-300",children:f(r.mass)})]}),h.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[h.jsx("div",{className:"text-xs text-gray-300",children:"Diameter"}),h.jsx("div",{className:"text-xs font-bold text-orange-300",children:p(r.diameter)})]}),h.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[h.jsx("div",{className:"text-xs text-gray-300",children:"Density"}),h.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[r.density.toFixed(2)," kg/m³"]})]}),h.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-orange-500/20",children:[h.jsx("div",{className:"text-xs text-gray-300",children:"Gravity"}),h.jsxs("div",{className:"text-xs font-bold text-orange-300",children:[r.gravity.toFixed(2)," m/s²"]})]})]})]}),h.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-cyan-500/30 mb-3",children:[h.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Orbital Properties"}),h.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-1",children:[h.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[h.jsx("div",{className:"text-xs text-gray-300",children:"Radius"}),h.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[r.orbital_radius.toFixed(2)," AU"]})]}),h.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[h.jsx("div",{className:"text-xs text-gray-300",children:"Period"}),h.jsx("div",{className:"text-xs font-bold text-cyan-300",children:s(r.orbital_period_seconds)})]}),h.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[h.jsx("div",{className:"text-xs text-gray-300",children:"Speed"}),h.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[r.orbital_speed.toFixed(2)," m/s"]})]}),h.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-cyan-500/20",children:[h.jsx("div",{className:"text-xs text-gray-300",children:"Tilt"}),h.jsxs("div",{className:"text-xs font-bold text-cyan-300",children:[r.axial_tilt.toFixed(2),"°"]})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[h.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-red-500/30",children:[h.jsx("div",{className:"text-xs text-gray-200 mb-2",children:"Surface Conditions"}),h.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[h.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[h.jsx("div",{className:"text-xs text-gray-300",children:"Temperature"}),h.jsx("div",{className:"text-xs font-bold text-red-300",children:u(r.surface_temperature)})]}),h.jsxs("div",{className:"bg-white/5 rounded p-1.5 border border-red-500/20",children:[h.jsx("div",{className:"text-xs text-gray-300",children:"Rotation"}),h.jsx("div",{className:"text-xs font-bold text-red-300",children:s(r.rotation_period_seconds)})]})]})]}),h.jsxs("div",{className:"bg-white/10 rounded-lg p-2 border border-yellow-500/30",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsxs("div",{className:"text-xs text-gray-200",children:["Elements (",r.elements.length,")"]}),r.elements.length>4&&h.jsx("button",{onClick:()=>d(!c),className:"text-xs text-yellow-400 hover:text-yellow-300 transition-colors duration-300",children:c?"▲ Less":"▼ All"})]}),h.jsx("div",{className:"flex flex-wrap gap-1",children:(c?r.elements:r.elements.slice(0,4)).map((v,b)=>h.jsx("span",{className:"text-xs bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded border border-yellow-500/30",children:v},b))})]})]}),h.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10",children:[h.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"Technical Data"}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs",children:[h.jsxs("div",{className:"bg-white/5 rounded p-2",children:[h.jsx("span",{className:"text-gray-400",children:"Status:"}),h.jsx("div",{className:"text-green-400 font-medium",children:"Visited"})]}),h.jsxs("div",{className:"bg-white/5 rounded p-2",children:[h.jsx("span",{className:"text-gray-400",children:"Planet:"}),h.jsx("div",{className:"text-white truncate font-medium",children:l(r.name)})]}),h.jsxs("div",{className:"bg-white/5 rounded p-2",children:[h.jsx("span",{className:"text-gray-400",children:"System:"}),h.jsx("div",{className:"text-white truncate font-medium",children:l(e.name)})]}),h.jsxs("div",{className:"bg-white/5 rounded p-2",children:[h.jsx("span",{className:"text-gray-400",children:"System ID:"}),h.jsxs("div",{className:"text-white font-medium",children:["#",e.index+1]})]}),h.jsxs("div",{className:"bg-white/5 rounded p-2",children:[h.jsx("span",{className:"text-gray-400",children:"Galaxy:"}),h.jsx("div",{className:"text-white truncate font-medium",children:l(t.name)})]}),h.jsxs("div",{className:"bg-white/5 rounded p-2",children:[h.jsx("span",{className:"text-gray-400",children:"Coordinates:"}),h.jsx("div",{className:"text-white font-medium",children:t.coordinates.join(", ")})]})]})]}),a&&n&&h.jsx(ki,{effects:a,onToggleEffect:n})]})},kt={type:"change"},Rt={type:"start"},oi={type:"end"},pt=new bi,Ut=new Si,Vi=Math.cos(70*Jt.DEG2RAD),fe=new T,Se=2*Math.PI,J={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_t=1e-6;class Wi extends xi{constructor(e,t=null){super(e,t),this.state=J.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ze.ROTATE,MIDDLE:Ze.DOLLY,RIGHT:Ze.PAN},this.touches={ONE:Be.ROTATE,TWO:Be.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new zt,this._lastTargetPosition=new T,this._quat=new zt().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ft,this._sphericalDelta=new Ft,this._scale=1,this._panOffset=new T,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new T,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gi.bind(this),this._onPointerDown=Yi.bind(this),this._onPointerUp=Bi.bind(this),this._onContextMenu=Qi.bind(this),this._onMouseWheel=Zi.bind(this),this._onKeyDown=qi.bind(this),this._onTouchStart=Xi.bind(this),this._onTouchMove=Ki.bind(this),this._onMouseDown=Hi.bind(this),this._onMouseMove=$i.bind(this),this._interceptControlDown=Ji.bind(this),this._interceptControlUp=eo.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kt),this.update(),this.state=J.NONE}update(e=null){const t=this.object.position;fe.copy(t).sub(this.target),fe.applyQuaternion(this._quat),this._spherical.setFromVector3(fe),this.autoRotate&&this.state===J.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=Se:i>Math.PI&&(i-=Se),o<-Math.PI?o+=Se:o>Math.PI&&(o-=Se),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=n!=this._spherical.radius}if(fe.setFromSpherical(this._spherical),fe.applyQuaternion(this._quatInverse),t.copy(this.target).add(fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){const c=fe.length();n=this._clampDistance(c*this._scale);const d=c-n;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),a=!!d}else if(this.object.isOrthographicCamera){const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=d!==this.object.zoom;const l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(c),this.object.updateMatrixWorld(),n=fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(pt.origin.copy(this.object.position),pt.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pt.direction))<Vi?this.object.lookAt(this.target):(Ut.setFromNormalAndCoplanarPoint(this.object.up,this.target),pt.intersectPlane(Ut,this.target))))}else if(this.object.isOrthographicCamera){const n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>_t||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_t||this._lastTargetPosition.distanceToSquared(this.target)>_t?(this.dispatchEvent(kt),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Se/60*this.autoRotateSpeed*e:Se/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){fe.setFromMatrixColumn(t,0),fe.multiplyScalar(-e),this._panOffset.add(fe)}_panUp(e,t){this.screenSpacePanning===!0?fe.setFromMatrixColumn(t,1):(fe.setFromMatrixColumn(t,0),fe.crossVectors(this.object.up,fe)),fe.multiplyScalar(e),this._panOffset.add(fe)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;fe.copy(o).sub(this.target);let a=fe.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=e-i.left,a=t-i.top,n=i.width,c=i.height;this._mouse.x=o/n*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Se*this._rotateDelta.x/t.clientHeight),this._rotateUp(Se*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Se*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Se*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Se*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Se*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),o=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Se*this._rotateDelta.x/t.clientHeight),this._rotateUp(Se*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const n=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(n,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Yi(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function Gi(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Bi(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(oi),this.state=J.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hi(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=J.DOLLY;break;case Ze.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=J.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=J.ROTATE}break;case Ze.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=J.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=J.PAN}break;default:this.state=J.NONE}this.state!==J.NONE&&this.dispatchEvent(Rt)}function $i(r){switch(this.state){case J.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case J.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case J.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Zi(r){this.enabled===!1||this.enableZoom===!1||this.state!==J.NONE||(r.preventDefault(),this.dispatchEvent(Rt),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(oi))}function qi(r){this.enabled!==!1&&this._handleKeyDown(r)}function Xi(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=J.TOUCH_ROTATE;break;case Be.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=J.TOUCH_PAN;break;default:this.state=J.NONE}break;case 2:switch(this.touches.TWO){case Be.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=J.TOUCH_DOLLY_PAN;break;case Be.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=J.TOUCH_DOLLY_ROTATE;break;default:this.state=J.NONE}break;default:this.state=J.NONE}this.state!==J.NONE&&this.dispatchEvent(Rt)}function Ki(r){switch(this._trackPointer(r),this.state){case J.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case J.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case J.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case J.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=J.NONE}}function Qi(r){this.enabled!==!1&&r.preventDefault()}function Ji(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eo(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Vt{seed;constructor(e){this.seed=e}next(){return this.seed=this.seed*16807%2147483647,(this.seed-1)/2147483646}uniform(e,t){return e+(t-e)*this.next()}choice(e){return e[Math.floor(this.next()*e.length)]}}class ai{ringSystem;material;params;planetRadius;constructor(e,t){this.planetRadius=e,this.params=t,this.createRingSystemFromAPI(t)}createRingSystemFromAPI(e){const{full_ring:t,ontop_ring:i,ring_inner_radius:o,ring_outer_radius:a,tilt_factor:n,planet_radius:c,shape_seed:d}=e;if(!t||!i){console.warn("No ring data provided");return}const l=[...t.particles,...i.particles],s=l.length,u=new Vt(d||12345),f=new Ie,p=new Float32Array(s*3),v=new Float32Array(s*3),b=new Float32Array(s),C=[{baseGray:.18,variation:.04,name:"dark"},{baseGray:.25,variation:.06,name:"medium"},{baseGray:.32,variation:.06,name:"light"},{baseGray:.25,variation:.08,name:"mixed"}],y=u.choice(C);for(let x=0;x<s;x++){const O=l[x],g=this.planetRadius/(c||200),S=(d||12345)+x,M=new Vt(S),I=O.distance*g,P=O.angle,D=I*Math.sin(P),U=Math.asin((n||.2)*.5),w=D*Math.sin(U),V=D*Math.cos(U),W=((a||400)-(o||200))*g*.4,G=M.uniform(-W*.8,W*.8),ee=M.uniform(-W*.3,W*.3),Z=M.uniform(-.08,.08),K=I+ee,R=P+Z;p[x*3]=K*Math.cos(R),p[x*3+1]=w+G+this.planetRadius*.15,p[x*3+2]=V+M.uniform(-W*.4,W*.4),O.color[0]/255;const z=(O.distance-(o||200))/((a||400)-(o||200)),q=y.baseGray,ie=y.variation,pe=M.uniform(-ie,ie),oe=Math.max(.12,Math.min(.45,q+pe)),ge=.8+z*.4,ye=M.uniform(.85,1.15),Ee=M.uniform(0,1),xe=Ee<.03?M.uniform(1.1,1.3):1,Me=oe*ge*ye*xe,he=Math.max(.1,Math.min(.55,Me));v[x*3]=he,v[x*3+1]=he,v[x*3+2]=he;const Re=.15,Pe=M.uniform(.3,.7),le=Ee<.1?M.uniform(1.05,1.2):1;b[x]=O.size*Re*Pe*le}f.setAttribute("position",new te(p,3)),f.setAttribute("color",new te(v,3)),f.setAttribute("size",new te(b,1)),this.material=new ue({uniforms:{brightness:{value:2.2}},vertexShader:`
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
      `,transparent:!0,vertexColors:!0,depthWrite:!1,blending:Te}),this.ringSystem=new Qe(f,this.material),this.ringSystem.position.set(0,0,0),this.ringSystem.renderOrder=1}addToScene(e,t){this.ringSystem&&(t?this.ringSystem.position.copy(t):this.ringSystem.position.set(0,0,0),e.add(this.ringSystem))}update(e,t){if(!this.ringSystem||!t)return;const i=t.rotation_period_seconds||86400,o=t.cosmicOriginTime||Date.now()/1e3,a=t.initialAngleRotation||0,c=Date.now()/1e3-o,d=2*Math.PI/i,l=(a+c*d)%(2*Math.PI);this.ringSystem.rotation.y=l}getObject3D(){return this.ringSystem}dispose(){this.material&&this.material.dispose()}}function to(r,e){const t={full_ring:r.full_ring,ontop_ring:r.ontop_ring,ring_inner_radius:r.ring_inner_radius,ring_outer_radius:r.ring_outer_radius,tilt_factor:r.tilt_factor,planet_radius:r.planet_radius,shape_seed:r.shape_seed};return new ai(e,t)}class at{mesh;material;geometry;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={type:t.type||"Thin",color:t.color||[.7,.7,.7,.2],width:t.width||12,opacity:t.opacity||.2,density:t.density||1};const i=e*(1+this.params.width/100);this.geometry=new ht(i,32,32);const o=new m(this.params.color[0],this.params.color[1],this.params.color[2]);this.material=new ue({vertexShader:at.vertexShader,fragmentShader:at.fragmentShader,uniforms:{atmosphereColor:{value:o},atmosphereOpacity:{value:this.params.opacity},fresnelPower:{value:2}},transparent:!0,blending:We,side:_i,depthWrite:!1}),this.mesh=new be(this.geometry,this.material)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh)}update(e){}updateParams(e){if(this.params={...this.params,...e},e.color){const t=new m(e.color[0],e.color[1],e.color[2]);this.material.uniforms.atmosphereColor.value=t}e.opacity!==void 0&&(this.material.uniforms.atmosphereOpacity.value=e.opacity),e.density!==void 0&&(this.material.uniforms.atmosphereOpacity.value=(this.params.opacity||.3)*e.density)}getObject3D(){return this.mesh}dispose(){this.geometry.dispose(),this.material.dispose()}}function io(r,e){let t=[.7,.7,.7,.15],i=12;if(e){if(e.color&&Array.isArray(e.color)){const a=e.color;t=[a[0],a[1],a[2],(a[3]||.15)*.7]}e.width&&(i=e.width)}const o={type:e?.type||"Thin",color:t,width:i,opacity:t[3],density:1};return new at(r,o)}class k{seed;constructor(e){this.seed=e}random(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}uniform(e,t){return e+this.random()*(t-e)}randint(e,t){return Math.floor(this.random()*(t-e+1))+e}spherePosition(e){const t=this.random()*Math.PI*2,i=Math.acos(this.random()*2-1);return{x:e*Math.sin(i)*Math.cos(t),y:e*Math.sin(i)*Math.sin(t),z:e*Math.cos(i)}}colorVariation(e,t=.4){return{r:e.r*(.8+this.random()*t),g:e.g*(.8+this.random()*t),b:e.b*(.8+this.random()*t)}}}const B={PARTICLE_COUNT:{min:25,max:150},SPEED:{min:.05,max:.5},SIZE:{min:.3,max:1.5},OPACITY:{min:.1,max:.3},TURBULENCE:{min:.1,max:.5},ROTATION_SPEED:{min:.01,max:.05},MOVEMENT_AMPLITUDE:{min:.005,max:.05},TIME_SPEED:{min:.1,max:3}};class st{particleSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i);this.startTime=t.startTime||i%1e4/1e3,this.params={color:t.color||new m(16777215),particleCount:t.particleCount||Math.floor(o.uniform(B.PARTICLE_COUNT.min,B.PARTICLE_COUNT.max)),speed:t.speed||o.uniform(B.SPEED.min,B.SPEED.max),size:t.size||o.uniform(B.SIZE.min,B.SIZE.max),opacity:t.opacity||o.uniform(B.OPACITY.min,B.OPACITY.max),turbulence:t.turbulence||o.uniform(B.TURBULENCE.min,B.TURBULENCE.max),rotationSpeed:t.rotationSpeed||o.uniform(B.ROTATION_SPEED.min,B.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||o.uniform(B.MOVEMENT_AMPLITUDE.min,B.MOVEMENT_AMPLITUDE.max),timeSpeed:t.timeSpeed||o.uniform(B.TIME_SPEED.min,B.TIME_SPEED.max),seed:i,startTime:this.startTime},this.particleCount=this.params.particleCount,this.geometry=new Ie,this.material=this.createMaterial(),this.generateParticles(e),this.particleSystem=new Qe(this.geometry,this.material)}generateParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),c=this.params.color instanceof m?this.params.color:new m(this.params.color),d=this.params.seed||Math.floor(Math.random()*1e6),l=new k(d);for(let s=0;s<this.particleCount;s++){const u=l.spherePosition(e*l.uniform(1,1.1));t[s*3]=u.x,t[s*3+1]=u.y,t[s*3+2]=u.z;const f=l.colorVariation({r:c.r,g:c.g,b:c.b});i[s*3]=f.r,i[s*3+1]=f.g,i[s*3+2]=f.b,o[s]=this.params.size*l.uniform(.75,1.25),a[s]=this.params.speed*l.uniform(.6,1.4),n[s]=l.random()*Math.PI*2}this.geometry.setAttribute("position",new te(t,3)),this.geometry.setAttribute("customColor",new te(i,3)),this.geometry.setAttribute("size",new te(o,1)),this.geometry.setAttribute("speed",new te(a,1)),this.geometry.setAttribute("phase",new te(n,1))}createMaterial(){return new ue({vertexShader:st.vertexShader,fragmentShader:st.fragmentShader,uniforms:{time:{value:0},turbulence:{value:this.params.turbulence},movementAmplitude:{value:this.params.movementAmplitude}},transparent:!0,blending:We,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.particleSystem.rotation.y=i*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function Wt(r,e,t){const i=e.streaks||{},o=t||Math.floor(Math.random()*1e6),a=new k(o+3e3),n=i.count||Math.floor(a.uniform(B.PARTICLE_COUNT.min,B.PARTICLE_COUNT.max)),c=i.speed||a.uniform(B.SPEED.min,B.SPEED.max),d=a.uniform(B.SIZE.min,B.SIZE.max),l=a.uniform(B.OPACITY.min,B.OPACITY.max),s=a.uniform(B.TURBULENCE.min,B.TURBULENCE.max),u=a.uniform(B.ROTATION_SPEED.min,B.ROTATION_SPEED.max),f=a.uniform(B.MOVEMENT_AMPLITUDE.min,B.MOVEMENT_AMPLITUDE.max),p=a.uniform(B.TIME_SPEED.min,B.TIME_SPEED.max),v={color:i.color?new m().setRGB(i.color[0],i.color[1],i.color[2]):new m(16777215),particleCount:n,speed:c,size:d,opacity:l,turbulence:s,seed:o,rotationSpeed:u,movementAmplitude:f,timeSpeed:p};return new st(r,v)}const H={CLOUD_COUNT:{min:15,max:30},SIZE:{min:3.8,max:5.5},OPACITY:{min:.4,max:.9},DENSITY:{min:.5,max:2},ROTATION_SPEED:{min:.002,max:.008},MOVEMENT_AMPLITUDE:{min:.003,max:.02},PUFFINESS:{min:1,max:1.4},TIME_SPEED:{min:.1,max:3}};class Ke{cloudSystem;material;params;cloudCount;clouds=[];startTime;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i);this.startTime=t.startTime||i%1e4/1e3,this.params={color:t.color||new m(16777215),cloudCount:t.cloudCount||Math.floor(o.uniform(H.CLOUD_COUNT.min,H.CLOUD_COUNT.max)),size:t.size||o.uniform(H.SIZE.min,H.SIZE.max),opacity:t.opacity||o.uniform(H.OPACITY.min,H.OPACITY.max),density:t.density||o.uniform(H.DENSITY.min,H.DENSITY.max),rotationSpeed:t.rotationSpeed||o.uniform(H.ROTATION_SPEED.min,H.ROTATION_SPEED.max),movementAmplitude:t.movementAmplitude||o.uniform(H.MOVEMENT_AMPLITUDE.min,H.MOVEMENT_AMPLITUDE.max),puffiness:t.puffiness||o.uniform(H.PUFFINESS.min,H.PUFFINESS.max),timeSpeed:t.timeSpeed||o.uniform(H.TIME_SPEED.min,H.TIME_SPEED.max),seed:i,startTime:this.startTime},this.cloudCount=this.params.cloudCount,this.cloudSystem=new Fe,this.material=this.createMaterial(),this.generateClouds(e)}generateClouds(e){const t=this.params.color instanceof m?this.params.color:new m(this.params.color),i=this.params.seed||Math.floor(Math.random()*1e6),o=new k(i),a=this.params.cloudsFromPython;for(let n=0;n<this.cloudCount;n++){let c,d,l,s=t,u=this.params.size*o.uniform(.8,1.2);if(a&&n<a.length){const D=a[n];c=D.position[0]*e*1.04,d=D.position[1]*e*1.04,l=D.position[2]*e*1.04,D.color&&(s=new m().setRGB(D.color[0],D.color[1],D.color[2])),u=D.radius*e*.8}else{const D=o.uniform(0,2*Math.PI),U=o.uniform(-1,1),w=Math.acos(U),V=e*o.uniform(1.02,1.06);c=V*Math.sin(w)*Math.cos(D),d=V*Math.sin(w)*Math.sin(D),l=V*Math.cos(w)}const f=u*o.uniform(.3,.8),p=Math.max(8,Math.floor(f*15)),v=new ei(f*2,f*2,p,p),b=new T(c,d,l);new T(0,0,0);const C=b.clone().normalize(),y=new T,x=new T;Math.abs(C.y)<.99?y.crossVectors(C,new T(0,1,0)).normalize():y.crossVectors(C,new T(1,0,0)).normalize(),x.crossVectors(C,y).normalize();const O=new At;O.makeBasis(y,x,C);const g=v.attributes.position,S=new T,M=Math.sqrt(c*c+d*d+l*l);v.applyMatrix4(O);for(let D=0;D<g.count;D++){S.fromBufferAttribute(g,D);const W=S.clone().add(b).clone().normalize().multiplyScalar(M).sub(b);g.setXYZ(D,W.x,W.y,W.z)}g.needsUpdate=!0,v.computeVertexNormals(),v.translate(c,d,l);const I=this.material.clone();I.uniforms.cloudColor.value=s,I.uniforms.density.value=this.params.density*o.uniform(.8,1.2),I.uniforms.noiseOffset.value=new we(o.uniform(0,100),o.uniform(0,100)),I.uniforms.shapeVariation.value=o.uniform(-1,1),I.uniforms.lightDirection.value=this.material.uniforms.lightDirection.value.clone(),I.uniforms.lightPosition.value=this.material.uniforms.lightPosition.value.clone();const P=new be(v,I);P.userData.isAtmosphericCloud=!0,P.userData.planetNormal=C.clone(),this.clouds.push(P),this.cloudSystem.add(P)}}createMaterial(){return new ue({vertexShader:Ke.vertexShader,fragmentShader:Ke.fragmentShader,uniforms:{time:{value:0},opacity:{value:this.params.opacity},movementAmplitude:{value:this.params.movementAmplitude},cloudColor:{value:new m(16777215)},density:{value:this.params.density},noiseOffset:{value:new we(0,0)},shapeVariation:{value:0},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)}},transparent:!0,blending:Te,depthWrite:!1,side:_e})}addToScene(e,t){t&&this.cloudSystem.position.copy(t),e.add(this.cloudSystem)}update(e,t){const o=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.clouds.forEach(a=>{const n=a.material;n.uniforms.time.value=o}),this.cloudSystem.rotation.y=o*this.params.rotationSpeed}updateParams(e){this.params={...this.params,...e},this.clouds.forEach(t=>{const i=t.material;e.opacity!==void 0&&(i.uniforms.opacity.value=e.opacity),e.movementAmplitude!==void 0&&(i.uniforms.movementAmplitude.value=e.movementAmplitude)})}updateLightPosition(e){this.clouds.forEach(t=>{const i=t.material;i.uniforms.lightPosition&&i.uniforms.lightPosition.value.copy(e)})}updateLightDirection(e){this.clouds.forEach(t=>{const i=t.material;i.uniforms.lightDirection&&i.uniforms.lightDirection.value.copy(e)})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}getObject3D(){return this.cloudSystem}dispose(){this.clouds.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.clouds=[],this.cloudSystem.clear()}}function Ve(r,e,t){const i=e.clouds||[];if(i.length===0){const c=t||Math.floor(Math.random()*1e6),d=new k(c+4e3),l={color:new m(1,1,1),cloudCount:15,size:.6,opacity:.7,density:.8,seed:c,rotationSpeed:.005,movementAmplitude:.02,puffiness:1.5,timeSpeed:d.uniform(H.TIME_SPEED.min,H.TIME_SPEED.max)};return new Ke(r,l)}const o=t||Math.floor(Math.random()*1e6),a=new k(o+4e3),n={color:new m(16777215),cloudCount:i.length,size:a.uniform(H.SIZE.min,H.SIZE.max),opacity:a.uniform(H.OPACITY.min,H.OPACITY.max),density:a.uniform(H.DENSITY.min,H.DENSITY.max),seed:o,rotationSpeed:a.uniform(H.ROTATION_SPEED.min,H.ROTATION_SPEED.max),movementAmplitude:a.uniform(H.MOVEMENT_AMPLITUDE.min,H.MOVEMENT_AMPLITUDE.max),puffiness:a.uniform(H.PUFFINESS.min,H.PUFFINESS.max),timeSpeed:a.uniform(H.TIME_SPEED.min,H.TIME_SPEED.max),cloudsFromPython:i};return new Ke(r,n)}class Dt{landGroup;lands=[];constructor(e,t={}){this.landGroup=new Fe;const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i);t.greenPatches&&t.greenPatches.length>0?this.generateLandsFromPython(e,t.greenPatches,o,t):this.generateProceduralLands(e,o,t)}generateLandsFromPython(e,t,i,o){t.forEach((a,n)=>{let c=a.position_3d||a.position||[0,0,1];if(c.length===2){const R=i.uniform(0,Math.PI*2),F=Math.acos(i.uniform(-1,1));c=[Math.sin(F)*Math.cos(R),Math.sin(F)*Math.sin(R),Math.cos(F)]}const d=(a.size||.1)*e*1.8;Math.max(8,Math.min(a.sides||20,12));let l=new m(4881497),s=1;a.color&&Array.isArray(a.color)&&(l=new m(a.color[0],a.color[1],a.color[2]),a.color.length>3&&(s=a.color[3]));const u=Math.max(24,Math.min(64,Math.floor(d*32))),f=new T(c[0],c[1],c[2]).normalize(),p=new T,v=new T;Math.abs(f.y)<.99?p.crossVectors(f,new T(0,1,0)).normalize():p.crossVectors(f,new T(1,0,0)).normalize(),v.crossVectors(f,p).normalize();const b=2/Math.max(d*.05,1),C=(R,F)=>{let z=0,q=1,ie=b,pe=0;const oe=Math.min(5,Math.max(3,Math.floor(d/40)+2));for(let ge=0;ge<oe;ge++){const ye=R*ie,Ee=F*ie,xe=(Ne,ut)=>{const tt=Ne*12.9898+ut*78.233;return Math.sin(tt+i.uniform(0,1e3))*43758.5453%1},Me=Math.floor(ye),he=Math.floor(Ee),Re=ye-Me,Pe=Ee-he,le=Ne=>Ne*Ne*Ne*(Ne*(Ne*6-15)+10),De=le(Re),je=le(Pe),Je=xe(Me,he),et=xe(Me+1,he),mt=xe(Me,he+1),ke=xe(Me+1,he+1),Oe=Je*(1-De)+et*De,bt=mt*(1-De)+ke*De,Ye=Oe*(1-je)+bt*je;z+=Ye*q,pe+=q,q*=.5,ie*=2.2}return z/pe},y=[],x=[],O=[],g=.35,S=new Map,M=new Map;let I=0;for(let R=0;R<=u;R++)for(let F=0;F<=u;F++){const z=(R/u-.5)*2,q=(F/u-.5)*2,ie=Math.sqrt(z*z+q*q),pe=C(z*2,q*2);if(1-ie*.5+pe*.6>g&&ie<1.2){const ge=z*d,ye=q*d,xe=new T().addScaledVector(p,ge).addScaledVector(v,ye).addScaledVector(f,0);y.push(xe.x,xe.y,xe.z),O.push((z+1)*.5,(q+1)*.5),S.set(`${R},${F}`,I),M.set(`${R},${F}`,pe),I++}}for(let R=0;R<u;R++)for(let F=0;F<u;F++){const z=S.get(`${R},${F}`),q=S.get(`${R+1},${F}`),ie=S.get(`${R},${F+1}`),pe=S.get(`${R+1},${F+1}`);z!==void 0&&q!==void 0&&ie!==void 0&&x.push(z,q,ie),q!==void 0&&pe!==void 0&&ie!==void 0&&x.push(q,pe,ie)}const P=new Ie;P.setAttribute("position",new Tt(y,3)),P.setAttribute("uv",new Tt(O,2)),P.setIndex(x),P.computeVertexNormals();const D=P.attributes.position,U=f.clone().multiplyScalar(e),w=new T;for(let R=0;R<D.count;R++){w.fromBufferAttribute(D,R);const z=w.clone().add(U).clone().normalize(),q=P.attributes.uv;if(q){const ie=q.getX(R)*2-1,pe=q.getY(R)*2-1,oe=Math.sqrt(ie*ie+pe*pe),ge=C(ie*2,pe*2),Ee=Math.max(0,1-Math.pow(oe,.7))*.5+ge*.5,Me=(Oe=>Oe*Oe*(3-2*Oe))(Ee),Re=e*1.01-e,Pe=d*.15,le=Math.min(Pe,Re*.9),De=e*.002,je=e+De,Je=e+De+le,et=Jt.lerp(je,Je,Me),ke=z.multiplyScalar(et).sub(U);D.setXYZ(R,ke.x,ke.y,ke.z)}}D.needsUpdate=!0,P.computeVertexNormals(),P.translate(U.x,U.y,U.z);const V=new Mt({color:o.transparentMode?new m(15135743):l,opacity:o.transparentMode?.3:s,transparent:o.transparentMode||s<1,emissive:o.transparentMode?new m(13428479).multiplyScalar(.1):l.clone().multiplyScalar(.05),emissiveIntensity:o.transparentMode?.05:1e-7,shininess:o.transparentMode?30:8,flatShading:!1,bumpScale:.002}),W=document.createElement("canvas");W.width=W.height=64;const G=W.getContext("2d"),ee=G.createImageData(64,64);for(let R=0;R<ee.data.length;R+=4){const F=i.uniform(.8,1.2),z=Math.floor(128*F);ee.data[R]=z,ee.data[R+1]=z,ee.data[R+2]=z,ee.data[R+3]=255}G.putImageData(ee,0,0);const Z=new Ei(W);Z.wrapS=Z.wrapT=wi,Z.repeat.set(2,2),V.bumpMap=Z;const K=new be(P,V);K.castShadow=!0,K.receiveShadow=!0,this.lands.push(K),this.landGroup.add(K)})}generateProceduralLands(e,t,i){const o=Math.floor(t.uniform(5,15));for(let a=0;a<o;a++){const n=t.uniform(0,Math.PI*2),c=Math.acos(t.uniform(-1,1)),d=new T(Math.sin(c)*Math.cos(n),Math.sin(c)*Math.sin(n),Math.cos(c)),l=e*t.uniform(.02,.08),s=new Ci(l,16),u=d.clone().multiplyScalar(e*1);s.lookAt(d),s.translate(u.x,u.y,u.z);const f=t.uniform(.3,.7),p=new m(.36*(1-f)+.22*f,.23*(1-f)+.36*f,0),b=i.tundraMode||!1?.25:1,C=new Mt({color:i.transparentMode?new m(15135743):p,opacity:i.transparentMode?.3:b,transparent:i.transparentMode||b<1,emissive:i.transparentMode?new m(13428479).multiplyScalar(.1):657920,shininess:i.transparentMode?30:5}),y=new be(s,C);this.lands.push(y),this.landGroup.add(y)}}addToScene(e,t){t&&this.landGroup.position.copy(t),e.add(this.landGroup)}update(e){}getObject3D(){return this.landGroup}dispose(){this.lands.forEach(e=>{e.geometry.dispose(),e.material instanceof qe&&e.material.dispose()}),this.lands=[],this.landGroup.clear()}}function gt(r,e,t){const i=e.green_patches;if(!i||i.length===0)return null;const o=t||Math.floor(Math.random()*1e6);return new Dt(r,{greenPatches:i,seed:o+6e3})}function oo(r,e,t){const i=t||Math.floor(Math.random()*1e6),o=new k(i+7e3),a=Math.floor(o.uniform(3,8)),n=[];for(let c=0;c<a;c++){const d=o.uniform(0,Math.PI*2),l=Math.acos(o.uniform(-1,1));n.push({position_3d:[Math.sin(l)*Math.cos(d),Math.sin(l)*Math.sin(d),Math.cos(l)],size:o.uniform(.05,.15),sides:Math.floor(o.uniform(8,16)),color:[0,0,0]})}return console.log(`🧊 Creating ${a} transparent ice formations for Icy planet with seed ${i+7e3}`),new Dt(r,{greenPatches:n,seed:i+7e3,transparentMode:!0})}class ao{featuresGroup;crystals=[];cracks=[];iceCaps=[];planetRadius;constructor(e,t={}){this.featuresGroup=new Fe,this.planetRadius=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i);t.crystals&&t.crystals.length>0&&this.generateCrystals(t.crystals,o),t.cracks&&t.cracks.length>0&&this.generateCracks(t.cracks),t.iceCaps&&t.iceCaps.length>0&&this.generateIceCaps(t.iceCaps,o)}generateCrystals(e,t){e.forEach(i=>{const o=i.position||[0,0],a=(i.width||.05)*this.planetRadius*.8,n=(i.length||.1)*this.planetRadius*.08,c=i.angle||0,d=i.color||[172/255,215/255,230/255,1],l=this.planetRadius*.015,s=Math.max(n,l),u=new ti(a*2,s,a*1.5,4,2,4),f=u.attributes.position,p=new T;for(let Z=0;Z<f.count;Z++){if(p.fromBufferAttribute(f,Z),Math.abs(p.y)>s*.3){const K=Math.atan2(p.z,p.x),R=Math.sqrt(p.x*p.x+p.z*p.z),F=Math.round(K/(Math.PI/3))*(Math.PI/3),z=t.uniform(.8,1.2),q=R*z;p.x=Math.cos(F)*q,p.z=Math.sin(F)*q,p.y+=t.uniform(-s*.1,s*.1)}f.setXYZ(Z,p.x,p.y,p.z)}f.needsUpdate=!0,u.computeVertexNormals();const v=new Pt({color:new m(d[0],d[1],d[2]),transparent:!0,opacity:.8,metalness:0,roughness:.02,clearcoat:1,clearcoatRoughness:0,transmission:.7,ior:1.31,thickness:.5,emissive:new m(d[0],d[1],d[2]),emissiveIntensity:.02,flatShading:!1,side:_e}),b=new be(u,v);let C=Math.min(1,Math.max(-1,o[1]));const y=Math.pow(Math.abs(C),.3),x=Math.sign(C)*y,O=t.uniform(-.3,.3)*(1-Math.abs(x)),g=Math.min(1,Math.max(-1,x+O)),S=Math.acos(Math.abs(g)),M=Math.atan2(o[0],.001)+c,I=this.planetRadius*t.uniform(1.0005,1.001),P=I*Math.sin(S)*Math.cos(M),D=I*g,U=I*Math.sin(S)*Math.sin(M);b.position.set(P,D,U);const w=b.position.clone().normalize(),V=new T,W=new T;Math.abs(w.x)<.9?V.set(1,0,0):V.set(0,1,0),V.crossVectors(V,w).normalize(),W.crossVectors(w,V).normalize();const G=new At;G.makeBasis(V,w,W),b.rotation.setFromRotationMatrix(G),b.rotateY(t.uniform(0,Math.PI*2));const ee=t.uniform(.8,1.2);b.scale.set(ee,ee,ee),this.crystals.push(b),this.featuresGroup.add(b)})}generateCracks(e){const t=new k(42);e.forEach(i=>{const o=i.angle||0,a=(i.length||1)*this.planetRadius*2,n=i.color||[80/255,80/255,80/255,.4],c=(i.width||1)*5e-4*this.planetRadius,d=t.uniform(.6,1),l=t.uniform(0,1)>.5?1:-1,s=Math.acos(d*l),u=[],f=20;for(let y=0;y<=f;y++){const x=y/f,O=Math.sin(x*Math.PI)*.1,S=o+(x-.5)*a/(this.planetRadius*Math.sin(Math.abs(s)))+O,M=this.planetRadius*1.002*Math.sin(Math.abs(s))*Math.cos(S),I=this.planetRadius*1.002*Math.cos(Math.abs(s))*l,P=this.planetRadius*1.002*Math.sin(Math.abs(s))*Math.sin(S);u.push(new T(M,I,P))}const p=new Ti(u),v=new Mi(p,f*2,c,8,!1),b=new Mt({color:new m(n[0],n[1],n[2]),transparent:!0,opacity:n[3]||.4,emissive:new m(0,0,0),shininess:5}),C=new be(v,b);this.cracks.push(C),this.featuresGroup.add(C)})}generateIceCaps(e,t){e.forEach(i=>{const o=i.position||[0,0],a=(i.radius||.3)*this.planetRadius,n=i.color||[.678,.847,1,.8],c=Math.atan2(o[1],o[0]),d=Math.acos(Math.min(1,Math.max(-1,Math.sqrt(o[0]**2+o[1]**2)))),l=this.planetRadius*1.002*Math.sin(d)*Math.cos(c),s=this.planetRadius*1.002*Math.cos(d),u=this.planetRadius*1.002*Math.sin(d)*Math.sin(c),f=new T(l,s,u),p=f.clone().normalize(),v=new Fe,b=Math.floor(t.uniform(8,20));for(let C=0;C<b;C++){const y=t.uniform(0,Math.PI*2),x=t.uniform(0,a*.8),O=Math.cos(y)*x,g=Math.sin(y)*x,S=new T,M=new T;Math.abs(p.y)<.99?S.crossVectors(p,new T(0,1,0)).normalize():S.crossVectors(p,new T(1,0,0)).normalize(),M.crossVectors(p,S).normalize();const D=f.clone().addScaledVector(S,O).addScaledVector(M,g).normalize().multiplyScalar(this.planetRadius*t.uniform(1.002,1.008)),U=t.uniform(a*.05,a*.15),w=t.uniform(U*.4,U*4),V=new Pi(U,w,6,1,!1),W=V.attributes.position,G=new T;for(let R=0;R<W.count;R++)if(G.fromBufferAttribute(W,R),G.y>.1&&G.y<w*.9){const F=Math.atan2(G.z,G.x),z=Math.sqrt(G.x*G.x+G.z*G.z),q=Math.round(F/(Math.PI/3))*(Math.PI/3),ie=z*1.1;G.x=Math.cos(q)*ie,G.z=Math.sin(q)*ie,W.setXYZ(R,G.x,G.y,G.z)}W.needsUpdate=!0,V.computeVertexNormals();const ee=new Pt({color:new m(n[0],n[1],n[2]),transparent:!0,opacity:.85,metalness:0,roughness:.05,clearcoat:1,clearcoatRoughness:0,transmission:.6,ior:1.31,thickness:.8,emissive:new m(n[0],n[1],n[2]),emissiveIntensity:.03,flatShading:!0,side:_e}),Z=new be(V,ee);Z.position.copy(D),Z.lookAt(0,0,0),Z.rotateX(Math.PI/2),Z.rotateZ(t.uniform(0,Math.PI*2));const K=t.uniform(.7,1.3);Z.scale.set(K,K,K),v.add(Z),this.iceCaps.push(Z)}this.featuresGroup.add(v)})}addToScene(e,t){t&&this.featuresGroup.position.copy(t),e.add(this.featuresGroup)}update(){}getObject3D(){return this.featuresGroup}dispose(){this.crystals.forEach(e=>{e.geometry.dispose(),e.material instanceof qe&&e.material.dispose()}),this.cracks.forEach(e=>{e.geometry.dispose(),e.material instanceof qe&&e.material.dispose()}),this.iceCaps.forEach(e=>{e.geometry.dispose(),e.material instanceof qe&&e.material.dispose()}),this.crystals=[],this.cracks=[],this.iceCaps=[],this.featuresGroup.clear()}}function Yt(r,e,t){const i=e.crystals,o=e.cracks,a=e.ice_caps;if(!i&&!o&&!a)return null;const n=t||Math.floor(Math.random()*1e6);return new ao(r,{crystals:i||[],cracks:o||[],iceCaps:a||[],seed:n+9e3})}class si{snowflakeGroup;planetRadius;materials=[];particleSystems=[];trailPositions=[];trailColors=[];globalWindDirection;rng;startTime;timeSpeed;trailLength=15;particleCount;rotationSpeed;particleOpacity;windSpeedMultiplier;verticalOscillation;gustCycles;gustPhases;gustZones;burstZone;burstCycleDuration;burstDuration;burstStartOffset;constructor(e,t={}){this.snowflakeGroup=new Fe,this.planetRadius=e;const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new k(i),this.particleCount=t.particleCount||10,t.windSpeed;const o=(t.size||1)*(e*.2),a=t.opacity||1;this.globalWindDirection=this.rng.uniform(0,Math.PI*2),this.startTime=this.rng.uniform(0,1e3),this.timeSpeed=this.rng.uniform(2,4),this.rotationSpeed=this.rng.uniform(.2,.8),this.particleOpacity=this.rng.uniform(.05,.25),this.windSpeedMultiplier=this.rng.uniform(1.1,2.5),this.verticalOscillation=this.rng.uniform(.1,.4),this.gustCycles=[],this.gustPhases=[],this.gustZones=[];for(let c=0;c<this.particleCount;c++){this.gustCycles.push(this.rng.uniform(15,30)),this.gustPhases.push(this.rng.uniform(0,1));const d=this.rng.uniform(0,Math.PI*2),l=this.rng.uniform(Math.PI*.3,Math.PI*.6);this.gustZones.push({start:d,end:(d+l)%(Math.PI*2)})}this.burstZone={lat:this.rng.uniform(-Math.PI/3,Math.PI/3),lon:this.rng.uniform(0,Math.PI*2),radius:this.rng.uniform(1.2,2)},this.burstCycleDuration=this.rng.uniform(45,75),this.burstDuration=this.rng.uniform(8,15),this.burstStartOffset=this.rng.uniform(0,this.burstCycleDuration);const n=t.colors||[new m(1,1,1),new m(.9,.9,.9),new m(.7,.7,.7),new m(.5,.5,.5),new m(.3,.3,.3)];this.createSnowflakeSystem(this.particleCount,o,a,n)}createSnowflakeSystem(e,t,i,o){const a=[];for(let d=0;d<e;d++){let l,s,u,f=0;do{const y=(this.rng.uniform(-1,1)+this.rng.uniform(-1,1))*.2,x=this.rng.uniform(-1,1)*this.burstZone.radius;l=Math.max(0,Math.min(Math.PI,this.burstZone.lat+Math.PI/2+y)),s=(this.burstZone.lon+x)%(Math.PI*2);const O=Math.abs(l-(this.burstZone.lat+Math.PI/2)),g=Math.min(Math.abs(s-this.burstZone.lon),Math.PI*2-Math.abs(s-this.burstZone.lon));u=Math.max(O/.3,g/this.burstZone.radius),f++}while(u>1&&f<10);u>1&&(l=this.burstZone.lat+Math.PI/2+this.rng.uniform(-.1,.1),s=this.burstZone.lon+this.rng.uniform(-this.burstZone.radius,this.burstZone.radius));const p=this.planetRadius*this.rng.uniform(1.001,1.005),v=p*Math.sin(l)*Math.cos(s),b=p*Math.cos(l),C=p*Math.sin(l)*Math.sin(s);a.push(v,b,C)}const n=[],c=new m;for(let d=0;d<this.trailLength;d++){const l=Math.pow(1-d/(this.trailLength-1),1.5);c.setRGB(l,l,l),n.push(c.r,c.g,c.b)}for(let d=0;d<e;d++){const l=d*3,s=a[l],u=a[l+1],f=a[l+2],p=new Float32Array(this.trailLength*3);for(let y=0;y<this.trailLength;y++){const x=y*.1;p[y*3]=s+this.rng.uniform(-1,1)*x*this.planetRadius*.01,p[y*3+1]=u+this.rng.uniform(-1,1)*x*this.planetRadius*.01,p[y*3+2]=f+this.rng.uniform(-1,1)*x*this.planetRadius*.01}const v=new Ie;v.setAttribute("position",new te(p,3)),v.setAttribute("color",new te(new Float32Array(n),3));const b=new Nt({vertexColors:!0,transparent:!0,opacity:this.particleOpacity,blending:Te,depthTest:!0,linewidth:3}),C=new It(v,b);this.materials.push(b),this.particleSystems.push(C),this.trailPositions.push(p),this.trailColors.push(new Float32Array(n)),C.rnd=this.rng.uniform(0,1),C.particleIndex=d,this.snowflakeGroup.add(C)}}update(e=.016){const i=(this.startTime+Date.now()/1e3*this.timeSpeed)%1e3,a=(Date.now()/1e3+this.burstStartOffset)%this.burstCycleDuration;let n=0;if(a<this.burstDuration){const c=a/this.burstDuration;c<.2?n=c/.2:c>.8?n=(1-c)/.2:n=1}this.snowflakeGroup.visible=!0,Math.floor(a)%5===0&&a%1<.1&&console.log("❄️ Burst Debug:",{burstTime:Math.round(a),burstIntensity:Math.round(n*100)/100,cycleDuration:Math.round(this.burstCycleDuration),burstDuration:Math.round(this.burstDuration)}),this.particleSystems.forEach((c,d)=>{const l=c.geometry.getAttribute("position"),s=l.array,u=c.rnd,f=c.particleIndex,p=this.calculateTrailPath(i,f,u);for(let P=this.trailLength-1;P>0;P--){const D=P*3,U=(P-1)*3;s[D]=s[U],s[D+1]=s[U+1],s[D+2]=s[U+2]}s[0]=p.x,s[1]=p.y,s[2]=p.z,l.needsUpdate=!0;const v=Date.now()/1e3,b=this.gustCycles[d],C=this.gustPhases[d],y=(v/b+C)%1;let x=0;y<.3?x=y/.3:y<.7?x=1:x=(1-y)/.3;const O=new T(s[0],s[1],s[2]),g=Math.atan2(O.z,O.x),S=g<0?g+Math.PI*2:g,M=this.gustZones[d];let I=!1;M.start<M.end?I=S>=M.start&&S<=M.end:I=S>=M.start||S<=M.end,this.materials[d].opacity=I?this.particleOpacity*x:0})}calculateTrailPath(e,t,i){e+=10*i+t*.1;const o=this.burstZone.lon+(i-.5)*this.burstZone.radius,a=this.burstZone.lat+Math.PI/2+(i-.5)*.2,n=this.windSpeedMultiplier,c=e*n,d=o+Math.cos(this.globalWindDirection)*c,l=a+this.verticalOscillation*Math.sin(e*.5+i),s=.015*Math.sin(e*2+i*10),u=this.planetRadius*(1.005+s),f=u*Math.sin(l)*Math.cos(d),p=u*Math.cos(l),v=u*Math.sin(l)*Math.sin(d);return{x:f,y:p,z:v}}addToScene(e,t){t&&this.snowflakeGroup.position.copy(t),e.add(this.snowflakeGroup)}getObject3D(){return this.snowflakeGroup}dispose(){this.materials.forEach(e=>e.dispose()),this.particleSystems.forEach(e=>e.geometry.dispose()),this.materials=[],this.particleSystems=[],this.trailPositions=[],this.trailColors=[],this.snowflakeGroup.clear()}}function Gt(r,e,t){if(e.type!=="tundra")return null;const i=t||Math.floor(Math.random()*1e6),o=e.snow_intensity||.7,a=e.wind_strength||1,n=Math.floor(o*200+50),c=a*5;return new si(r,{particleCount:n,windSpeed:c,size:1.2,opacity:.9,seed:i+15e3})}const re={PARTICLE_COUNT:{min:60,max:150},PHASE_INTENSITY:{min:.4,max:.9},TRANSITION_SPEED:{min:1,max:4},COHERENCE_LEVEL:{min:.2,max:.7},TIME_SPEED:{min:.6,max:2.2},PHASE_STATES:{min:3,max:6}};class nt{phaseSystem;material;geometry;params;particleCount;startTime;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i);this.startTime=i%1e4/1e3,this.params={particleCount:t.particleCount||Math.floor(o.uniform(re.PARTICLE_COUNT.min,re.PARTICLE_COUNT.max)),phaseIntensity:t.phaseIntensity||o.uniform(re.PHASE_INTENSITY.min,re.PHASE_INTENSITY.max),transitionSpeed:t.transitionSpeed||o.uniform(re.TRANSITION_SPEED.min,re.TRANSITION_SPEED.max),coherenceLevel:t.coherenceLevel||o.uniform(re.COHERENCE_LEVEL.min,re.COHERENCE_LEVEL.max),timeSpeed:t.timeSpeed||o.uniform(re.TIME_SPEED.min,re.TIME_SPEED.max),phaseStates:t.phaseStates||Math.floor(o.uniform(re.PHASE_STATES.min,re.PHASE_STATES.max)),seed:i},this.particleCount=this.params.particleCount,this.geometry=new Ie,this.material=this.createMaterial(),this.generatePhaseParticles(e),this.phaseSystem=new Qe(this.geometry,this.material)}generatePhaseParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),o=new Float32Array(this.particleCount*3),a=new Float32Array(this.particleCount),n=new Float32Array(this.particleCount),c=new Float32Array(this.particleCount),d=this.params.seed||Math.floor(Math.random()*1e6),l=new k(d);for(let s=0;s<this.particleCount;s++){const u=e*l.uniform(1.1,1.9),f=l.spherePosition(u);t[s*3]=f.x,t[s*3+1]=f.y,t[s*3+2]=f.z,i[s]=l.uniform(.8,2);const p=l.spherePosition(1);o[s*3]=p.x,o[s*3+1]=p.y,o[s*3+2]=p.z,a[s]=l.uniform(.1,1),n[s]=l.uniform(0,this.params.phaseStates),c[s]=l.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new te(t,3)),this.geometry.setAttribute("size",new te(i,1)),this.geometry.setAttribute("phaseVector",new te(o,3)),this.geometry.setAttribute("coherenceFactor",new te(a,1)),this.geometry.setAttribute("phaseState",new te(n,1)),this.geometry.setAttribute("transitionPhase",new te(c,1))}createMaterial(){return new ue({vertexShader:nt.vertexShader,fragmentShader:nt.fragmentShader,uniforms:{time:{value:0},phaseIntensity:{value:this.params.phaseIntensity},transitionSpeed:{value:this.params.transitionSpeed},coherenceLevel:{value:this.params.coherenceLevel},phaseStates:{value:this.params.phaseStates}},transparent:!0,blending:We,depthWrite:!1})}addToScene(e,t){t&&this.phaseSystem.position.copy(t),e.add(this.phaseSystem)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.phaseSystem.rotation.x+=e*.12*Math.cos(i*.3),this.phaseSystem.rotation.y+=e*.08*Math.sin(i*.5),this.phaseSystem.rotation.z+=e*.06*Math.cos(i*.7)}getObject3D(){return this.phaseSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function so(r,e,t){const i=t||Math.floor(Math.random()*1e6),o=new k(i+9e3),a={particleCount:Math.floor(o.uniform(re.PARTICLE_COUNT.min,re.PARTICLE_COUNT.max)),phaseIntensity:o.uniform(re.PHASE_INTENSITY.min,re.PHASE_INTENSITY.max),transitionSpeed:o.uniform(re.TRANSITION_SPEED.min,re.TRANSITION_SPEED.max),coherenceLevel:o.uniform(re.COHERENCE_LEVEL.min,re.COHERENCE_LEVEL.max),timeSpeed:o.uniform(re.TIME_SPEED.min,re.TIME_SPEED.max),phaseStates:Math.floor(o.uniform(re.PHASE_STATES.min,re.PHASE_STATES.max)),seed:i};return new nt(r,a)}const it=new T;function Ce(r,e,t,i,o,a){const n=2*Math.PI*o/4,c=Math.max(a-2*o,0),d=Math.PI/4;it.copy(e),it[i]=0,it.normalize();const l=.5*n/(n+c),s=1-it.angleTo(r)/d;return Math.sign(it[t])===1?s*l:c/(n+c)+l+l*(1-s)}class Lt extends ti{constructor(e=1,t=1,i=1,o=2,a=.1){const n=o*2+1;if(a=Math.min(e/2,t/2,i/2,a),super(1,1,1,n,n,n),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:o,radius:a},n===1)return;const c=this.toNonIndexed();this.index=null,this.attributes.position=c.attributes.position,this.attributes.normal=c.attributes.normal,this.attributes.uv=c.attributes.uv;const d=new T,l=new T,s=new T(e,t,i).divideScalar(2).subScalar(a),u=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,v=u.length/6,b=new T,C=.5/n;for(let y=0,x=0;y<u.length;y+=3,x+=2)switch(d.fromArray(u,y),l.copy(d),l.x-=Math.sign(l.x)*C,l.y-=Math.sign(l.y)*C,l.z-=Math.sign(l.z)*C,l.normalize(),u[y+0]=s.x*Math.sign(d.x)+l.x*a,u[y+1]=s.y*Math.sign(d.y)+l.y*a,u[y+2]=s.z*Math.sign(d.z)+l.z*a,f[y+0]=l.x,f[y+1]=l.y,f[y+2]=l.z,Math.floor(y/v)){case 0:b.set(1,0,0),p[x+0]=Ce(b,l,"z","y",a,i),p[x+1]=1-Ce(b,l,"y","z",a,t);break;case 1:b.set(-1,0,0),p[x+0]=1-Ce(b,l,"z","y",a,i),p[x+1]=1-Ce(b,l,"y","z",a,t);break;case 2:b.set(0,1,0),p[x+0]=1-Ce(b,l,"x","z",a,e),p[x+1]=Ce(b,l,"z","x",a,i);break;case 3:b.set(0,-1,0),p[x+0]=1-Ce(b,l,"x","z",a,e),p[x+1]=1-Ce(b,l,"z","x",a,i);break;case 4:b.set(0,0,1),p[x+0]=1-Ce(b,l,"x","y",a,e),p[x+1]=1-Ce(b,l,"y","x",a,t);break;case 5:b.set(0,0,-1),p[x+0]=Ce(b,l,"x","y",a,e),p[x+1]=1-Ce(b,l,"y","x",a,t);break}}static fromJSON(e){return new Lt(e.width,e.height,e.depth,e.segments,e.radius)}}const j={OPACITY:{min:.5,max:.95},SIZE:{min:1,max:1},PULSE_INTERVAL:{min:3,max:6},FADE_IN_DURATION:{min:1.5,max:3},FADE_OUT_DURATION:{min:2,max:4},VISIBLE_DURATION:{min:3,max:6},CORNER_RADIUS:{min:.3,max:1.5},EMISSIVE_INTENSITY:{min:.08,max:.15},TIME_SPEED:{min:.1,max:3}};class ni{cubeGroup;cube;material;geometry;params;planetRadius;startTime;nextPulseTime;currentState;stateStartTime;rng;orbitalVisibilityFactor;particleSystem;particleGeometry;particleMaterial;particleCount=800;particlePositions;particleVelocities;particleTargets;particleOrigins;particleProgress;particleSurfacePoints;planetPosition=new T;constructor(e,t={}){this.planetRadius=e;const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new k(i),this.startTime=t.startTime||i%1e4/1e3,this.params={color:t.color||new m(16739125),opacity:t.opacity||this.rng.uniform(j.OPACITY.min,j.OPACITY.max),size:t.size||this.rng.uniform(j.SIZE.min,j.SIZE.max),seed:i,pulseInterval:t.pulseInterval||[this.rng.uniform(j.PULSE_INTERVAL.min,j.PULSE_INTERVAL.max),this.rng.uniform(j.PULSE_INTERVAL.min,j.PULSE_INTERVAL.max)],fadeInDuration:t.fadeInDuration||this.rng.uniform(j.FADE_IN_DURATION.min,j.FADE_IN_DURATION.max),fadeOutDuration:t.fadeOutDuration||this.rng.uniform(j.FADE_OUT_DURATION.min,j.FADE_OUT_DURATION.max),visibleDuration:t.visibleDuration||this.rng.uniform(j.VISIBLE_DURATION.min,j.VISIBLE_DURATION.max),cornerRadius:t.cornerRadius||this.rng.uniform(j.CORNER_RADIUS.min,j.CORNER_RADIUS.max),emissiveIntensity:t.emissiveIntensity||this.rng.uniform(j.EMISSIVE_INTENSITY.min,j.EMISSIVE_INTENSITY.max),startTime:this.startTime,timeSpeed:t.timeSpeed||this.rng.uniform(j.TIME_SPEED.min,j.TIME_SPEED.max),orbitalData:t.orbitalData,currentTime:t.currentTime||0},this.initializeStateFromAbsoluteTime(),this.orbitalVisibilityFactor=this.calculateOrbitalVisibility(),this.cubeGroup=new Fe,this.initParticleSystem();const o=e*2.35,a=o*this.params.cornerRadius*.2;this.geometry=new Lt(o,o,o,8,a),this.geometry.computeVertexNormals(),this.geometry.normalizeNormals(),this.params.color instanceof m?this.params.color:new m(this.params.color),this.material=new Pt({color:new m(.99,.99,.99),transparent:!0,opacity:0,metalness:0,roughness:0,transmission:.99,ior:1.33,thickness:1.5,clearcoat:.5,clearcoatRoughness:0,emissive:new m(.02,.02,.02),emissiveIntensity:1,side:Ni,depthWrite:!1,depthTest:!0,blending:Te,alphaTest:0,flatShading:!1,vertexColors:!1,fog:!1}),this.cube=new be(this.geometry,this.material),this.cube.renderOrder=999,this.cubeGroup.add(this.cube),this.cubeGroup.visible=!0}initializeStateFromAbsoluteTime(){const t=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3,i=(this.params.pulseInterval[0]+this.params.pulseInterval[1])/2,o=this.params.fadeInDuration+this.params.visibleDuration+this.params.fadeOutDuration+i,a=t%o,n=this.params.fadeInDuration,c=n+this.params.visibleDuration,d=c+this.params.fadeOutDuration;a<n?(this.currentState="fading_in",this.stateStartTime=t-a,this.nextPulseTime=t-a):a<c?(this.currentState="visible",this.stateStartTime=t-(a-n),this.nextPulseTime=t-a):a<d?(this.currentState="fading_out",this.stateStartTime=t-(a-c),this.nextPulseTime=t-a):(this.currentState="hidden",this.stateStartTime=t-(a-d),this.nextPulseTime=t+(o-a))}calculateOrbitalVisibility(){if(!this.params.orbitalData||!this.params.orbitalData.enabled)return 1;const t=(this.params.currentTime||0)%this.params.orbitalData.cycle_duration_years/this.params.orbitalData.cycle_duration_years,i=this.params.orbitalData.visible_duration_years/this.params.orbitalData.cycle_duration_years;if(t<i){const o=t/i;return o<.1?o/.1:o>.9?(1-o)/.1:1}else return 0}addToScene(e,t){t&&(this.cubeGroup.position.copy(t),this.planetPosition.copy(t)),e.add(this.cubeGroup)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3,o=i-this.stateStartTime;if(this.orbitalVisibilityFactor=this.calculateOrbitalVisibility(),this.orbitalVisibilityFactor<=.001){this.currentState="hidden",this.material.opacity=0,this.cubeGroup.visible=!1;return}switch(this.cube.rotation.x=i*.1,this.cube.rotation.y=i*.15,this.cube.rotation.z=i*.05,this.updateParticles(i),this.currentState){case"hidden":this.material.opacity=0,i>=this.nextPulseTime&&(this.currentState="fading_in",this.stateStartTime=i);break;case"fading_in":const a=Math.min(o/this.params.fadeInDuration,1),n=Math.max(0,(a-.3)/.7),c=this.smoothstep(0,1,n)*this.params.opacity*this.orbitalVisibilityFactor;this.material.opacity=c,a>=1&&(this.currentState="visible",this.stateStartTime=i);break;case"visible":this.material.opacity=this.params.opacity*this.orbitalVisibilityFactor,o>=this.params.visibleDuration&&(this.currentState="fading_out",this.stateStartTime=i);break;case"fading_out":const d=Math.min(o/this.params.fadeOutDuration,1),l=Math.min(1,d*1.3),s=(1-this.smoothstep(0,1,l))*this.params.opacity*this.orbitalVisibilityFactor;if(this.material.opacity=s,d>=1){this.currentState="hidden",this.stateStartTime=i;const u=this.rng.uniform(this.params.pulseInterval[0],this.params.pulseInterval[1]);this.nextPulseTime=i+u}break}this.cubeGroup.visible=this.material.opacity>.001}smoothstep(e,t,i){const o=Math.max(0,Math.min(1,(i-e)/(t-e)));return o*o*(3-2*o)}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof m?e.color:new m(e.color);this.material.color=t}e.opacity!==void 0&&(this.material.opacity=e.opacity)}getObject3D(){return this.cubeGroup}initParticleSystem(){this.particlePositions=new Float32Array(this.particleCount*3),this.particleVelocities=new Float32Array(this.particleCount*3),this.particleTargets=new Float32Array(this.particleCount*3),this.particleOrigins=new Float32Array(this.particleCount*3),this.particleProgress=new Float32Array(this.particleCount),this.particleSurfacePoints=new Float32Array(this.particleCount*3);const t=this.planetRadius*2.35/2;for(let i=0;i<this.particleCount;i++){const o=i*3;this.particleOrigins[o]=0,this.particleOrigins[o+1]=0,this.particleOrigins[o+2]=0,this.particlePositions[o]=0,this.particlePositions[o+1]=0,this.particlePositions[o+2]=0;const a=this.rng.uniform(0,Math.PI*2),n=Math.acos(this.rng.uniform(-1,1));this.particleSurfacePoints[o]=this.planetRadius*Math.sin(n)*Math.cos(a),this.particleSurfacePoints[o+1]=this.planetRadius*Math.sin(n)*Math.sin(a),this.particleSurfacePoints[o+2]=this.planetRadius*Math.cos(n);const c=this.rng.uniform(0,1);let d,l,s;if(c<.7){const u=Math.floor(this.rng.uniform(0,6)),f=this.rng.uniform(-.9,.9),p=this.rng.uniform(-.9,.9);switch(u){case 0:d=t,l=f*t,s=p*t;break;case 1:d=-t,l=f*t,s=p*t;break;case 2:d=f*t,l=t,s=p*t;break;case 3:d=f*t,l=-t,s=p*t;break;case 4:d=f*t,l=p*t,s=t;break;case 5:d=f*t,l=p*t,s=-t;break;default:d=0,l=0,s=0}}else{const u=Math.floor(this.rng.uniform(0,12)),f=this.rng.uniform(-.95,.95);switch(u){case 0:d=f*t,l=t,s=t;break;case 1:d=f*t,l=-t,s=t;break;case 2:d=f*t,l=t,s=-t;break;case 3:d=f*t,l=-t,s=-t;break;case 4:d=t,l=f*t,s=t;break;case 5:d=-t,l=f*t,s=t;break;case 6:d=t,l=f*t,s=-t;break;case 7:d=-t,l=f*t,s=-t;break;case 8:d=t,l=t,s=f*t;break;case 9:d=-t,l=t,s=f*t;break;case 10:d=t,l=-t,s=f*t;break;case 11:d=-t,l=-t,s=f*t;break;default:d=0,l=0,s=0}}this.particleTargets[o]=d,this.particleTargets[o+1]=l,this.particleTargets[o+2]=s,this.particleVelocities[o]=this.rng.uniform(-.3,.3),this.particleVelocities[o+1]=this.rng.uniform(-.3,.3),this.particleVelocities[o+2]=this.rng.uniform(-.3,.3),this.particleProgress[i]=0}this.particleGeometry=new Ie,this.particleGeometry.setAttribute("position",new te(this.particlePositions,3)),this.particleMaterial=new Ii({color:new m(1,1,1),size:this.planetRadius*.015,transparent:!0,opacity:0,blending:We,depthWrite:!1,sizeAttenuation:!0,vertexColors:!1}),this.particleSystem=new Qe(this.particleGeometry,this.particleMaterial),this.particleSystem.renderOrder=998,this.cubeGroup.add(this.particleSystem)}updateParticles(e){const t=this.particleGeometry.attributes.position.array;let i=0,o=0;switch(this.currentState){case"hidden":i=0,o=-.1;break;case"fading_in":const d=e-this.stateStartTime;o=Math.min(d/this.params.fadeInDuration,1),i=this.smoothstep(0,1,o);break;case"visible":i=1,o=1;break;case"fading_out":const l=e-this.stateStartTime;o=1-Math.min(l/this.params.fadeOutDuration,1),i=this.smoothstep(0,1,o);break}const a=e,n=this.cube.matrixWorld,c=new At().extractRotation(n);for(let d=0;d<this.particleCount;d++){const l=d*3,s=d/this.particleCount*.4,u=Math.max(-.1,Math.min(1,o*1.3-s)),f=Math.max(0,u);let p,v,b;if(f<.3){const y=f/.3,x=this.smoothstep(0,1,y),O=this.particleSurfacePoints[l],g=this.particleSurfacePoints[l+1],S=this.particleSurfacePoints[l+2];p=O*x,v=g*x,b=S*x}else{const y=(f-.3)/.7,x=this.smoothstep(0,1,y),O=new T(this.particleTargets[l],this.particleTargets[l+1],this.particleTargets[l+2]);O.applyMatrix4(c);const g=this.particleSurfacePoints[l],S=this.particleSurfacePoints[l+1],M=this.particleSurfacePoints[l+2];if(p=g+(O.x-g)*x,v=S+(O.y-S)*x,b=M+(O.z-M)*x,y<.5){const I=Math.sin(y*Math.PI*2)*this.planetRadius*.1;p*=1+I*.1,v*=1+I*.1,b*=1+I*.1}}const C=Math.sin(a*2+d*.1)*.01*this.planetRadius;t[l]=p+this.particleVelocities[l]*C,t[l+1]=v+this.particleVelocities[l+1]*C,t[l+2]=b+this.particleVelocities[l+2]*C}this.particleMaterial.opacity=i*this.orbitalVisibilityFactor,this.particleMaterial.size=this.planetRadius*.012*(.5+i)*this.orbitalVisibilityFactor,this.particleGeometry.attributes.position.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.particleGeometry.dispose(),this.particleMaterial.dispose()}}function no(r,e,t,i,o){const a=o?.surface_elements?.pulsating_cube;if(!a?.enabled)return null;const n=t||Math.floor(Math.random()*1e6),c=new k(n+4e3),d=c.uniform(j.TIME_SPEED.min,j.TIME_SPEED.max),l=n%1e4/1e3,s=o?.timing?.elapsed_time?o.timing.elapsed_time/(365.25*24*3600):0,u={color:i||new m(16739125),opacity:c.uniform(j.OPACITY.min,j.OPACITY.max),size:c.uniform(j.SIZE.min,j.SIZE.max),seed:n,pulseInterval:[c.uniform(j.PULSE_INTERVAL.min,j.PULSE_INTERVAL.max),c.uniform(j.PULSE_INTERVAL.min,j.PULSE_INTERVAL.max)],fadeInDuration:c.uniform(j.FADE_IN_DURATION.min,j.FADE_IN_DURATION.max),fadeOutDuration:c.uniform(j.FADE_OUT_DURATION.min,j.FADE_OUT_DURATION.max),visibleDuration:c.uniform(j.VISIBLE_DURATION.min,j.VISIBLE_DURATION.max),cornerRadius:c.uniform(j.CORNER_RADIUS.min,j.CORNER_RADIUS.max),emissiveIntensity:c.uniform(j.EMISSIVE_INTENSITY.min,j.EMISSIVE_INTENSITY.max),startTime:l,timeSpeed:d,orbitalData:a,currentTime:s};return new ni(r,u)}class rt{baseMesh;baseMaterial;effectLayers=[];scene;planetRadius;static baseVertexShader=`
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
  `;constructor(e,t=new m(16753920)){this.baseMesh=e;const i=e.geometry;this.planetRadius=i.parameters.radius||1;const o=t instanceof m?t:new m(t);this.baseMaterial=new ue({vertexShader:rt.baseVertexShader,fragmentShader:rt.baseFragmentShader,uniforms:{baseColor:{value:o},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},side:_e}),this.baseMesh.material=this.baseMaterial}addEffectLayer(e,t,i=1.001,o){const a=new ht(this.planetRadius*i,256,256),n=new be(a,t);return n.position.copy(this.baseMesh.position),n.rotation.copy(this.baseMesh.rotation),this.effectLayers.push({name:e,mesh:n,material:t,layerObject:o}),this.scene&&this.scene.add(n),n}createCloudBandsLayerMaterial(e){const t=`
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
    `;return new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seed:{value:e.seed||Math.random()*1e3},bandColor:{value:e.bandColor||new m(16747520)},numBands:{value:e.numBands||8},rotationAngle:{value:e.rotationAngle||0},bandPositions:{value:e.bandPositions||new Array(20).fill(0)},bandWidths:{value:e.bandWidths||new Array(20).fill(.1)},animationSpeed:{value:e.animationSpeed||1},turbulence:{value:e.turbulence||.5},noiseScale:{value:e.noiseScale||3},lightDirection:{value:new T(1,1,1).normalize()},opacity:{value:e.opacity||.4}},transparent:!0,blending:Te,side:_e,depthWrite:!1})}createCloudGyrosLayerMaterial(e){const t=`
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
    `,o=new Array(10).fill(0);return e.stormCenters&&e.stormCenters.forEach((a,n)=>{n<5&&(o[n*2]=a.x,o[n*2+1]=a.y)}),new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},stormColor:{value:e.stormColor||new m(9109504)},stormIntensity:{value:e.stormIntensity||.8},spiralSpeed:{value:e.spiralSpeed||2},animationSpeed:{value:e.animationSpeed||1},stormCenters:{value:o},numStorms:{value:e.stormCenters?Math.min(e.stormCenters.length,5):3},lightDirection:{value:new T(1,1,1).normalize()}},transparent:!0,blending:Te,side:_e,depthWrite:!1})}createMetallicSurfaceLayerMaterial(e){const t=`
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
    `;return new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},metalColor:{value:e.color||new m(8421504)},metalness:{value:e.metalness||.8},roughness:{value:e.roughness||.4},fragmentationIntensity:{value:e.fragmentationIntensity||.5},opacity:{value:e.opacity||.8},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85},noiseScale:{value:e.noiseScale||8},noiseIntensity:{value:e.noiseIntensity||.3},crystalScale:{value:e.crystalScale||80}},transparent:!0,blending:Te,side:_e,depthWrite:!1})}createIcyTerrainLayerMaterial(e){const t=`
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
    `;return new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},iceColor:{value:e.color||new m(11591910)},iceReflectivity:{value:e.iceReflectivity||.8},frostDensity:{value:e.frostDensity||.5},crackIntensity:{value:e.crackIntensity||.4},opacity:{value:e.opacity||.7},crystalScale:{value:e.crystalScale||25},crystalDensity:{value:e.crystalDensity||.6},crystalSharpness:{value:e.crystalSharpness||150},frostPattern:{value:e.frostPattern||12},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,side:_e,depthWrite:!1})}createAquiferWaterLayerMaterial(e){const t=`
      uniform float time;
      uniform float waveHeight;
      uniform float waveFrequency;
      uniform float waveSpeed;
      uniform float seedOffset;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      varying float vWaveHeight;
      
      // Función de ruido determinista simple (como AtmosphereClouds)
      float random(vec3 st) {
        return fract(sin(dot(st.xyz, vec3(12.9898, 78.233, 54.321))) * 43758.5453123);
      }
      
      float noise(vec3 st) {
        vec3 i = floor(st);
        vec3 f = fract(st);
        
        // Interpolación suave
        f = f * f * (3.0 - 2.0 * f);
        
        // Obtener valores en los vértices del cubo
        float a = random(i);
        float b = random(i + vec3(1.0, 0.0, 0.0));
        float c = random(i + vec3(0.0, 1.0, 0.0));
        float d = random(i + vec3(1.0, 1.0, 0.0));
        float e = random(i + vec3(0.0, 0.0, 1.0));
        float f2 = random(i + vec3(1.0, 0.0, 1.0));
        float g = random(i + vec3(0.0, 1.0, 1.0));
        float h = random(i + vec3(1.0, 1.0, 1.0));
        
        // Interpolación trilineal
        return mix(
          mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
          mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
          f.z
        );
      }
      
      void main() {
        vPosition = position;
        vUv = uv;
        
        // Usar la posición 3D normalizada para ondas esféricas continuas
        vec3 spherePos = normalize(position);
        
        // Crear ondas usando ruido 3D basado en la posición esférica
        float waveValue = 0.0;
        
        // Añadir offset de seed para que cada planeta tenga ondas únicas
        vec3 seedOffset3D = vec3(seedOffset, seedOffset * 0.7, seedOffset * 1.3);
        
        // Ondas principales usando posición 3D para continuidad (velocidades más lentas)
        // Convertir ruido de [0,1] a [-1,1] para ondas bidireccionales
        waveValue += (noise(spherePos * waveFrequency + seedOffset3D + vec3(time * waveSpeed * 0.3)) * 2.0 - 1.0) * 0.5;
        waveValue += (noise(spherePos * waveFrequency * 2.0 + seedOffset3D * 1.5 + vec3(time * waveSpeed * 0.5)) * 2.0 - 1.0) * 0.3;
        waveValue += (noise(spherePos * waveFrequency * 4.0 + seedOffset3D * 2.0 + vec3(time * waveSpeed * 0.2)) * 2.0 - 1.0) * 0.2;
        
        vWaveHeight = waveValue * waveHeight;
        
        // Deformar vértices en la dirección normal
        vec3 newPosition = position + normal * vWaveHeight;
        
        // Calcular nueva normal (aproximada) con perturbación suave
        vec3 modifiedNormal = normalize(normal + vec3(waveValue * 0.05, waveValue * 0.05, 0.0));
        vNormal = normalMatrix * modifiedNormal;
        vWorldNormal = normalize((modelMatrix * vec4(modifiedNormal, 0.0)).xyz);
        
        vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
        vWorldPosition = worldPos.xyz;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,i=`
      uniform float time;
      uniform vec3 waterColor;
      uniform vec3 deepWaterColor;
      uniform vec3 foamColor;
      uniform float specularIntensity;
      uniform float transparency;
      uniform float roughness;
      
      // Uniformes de luz (EXACTAMENTE como MetallicSurfaceLayer)
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      varying float vWaveHeight;
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
        // Usar posición de luz si está disponible, sino usar dirección (EXACTAMENTE como MetallicSurfaceLayer)
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        // Cálculo de iluminación (EXACTAMENTE como MetallicSurfaceLayer)
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Rim lighting (EXACTAMENTE como MetallicSurfaceLayer)
        float rimLight = 1.0 - abs(dotNL);
        rimLight = pow(rimLight, 3.0) * 0.1;
        
        // Color base del agua con variación por profundidad
        float depth = 1.0 - abs(vWaveHeight) * 2.0;
        vec3 baseColor = mix(deepWaterColor, waterColor, depth);
        
        // Espuma en las crestas
        float foamFactor = smoothstep(0.2, 0.4, vWaveHeight);
        baseColor = mix(baseColor, foamColor, foamFactor * 0.3);
        
        // Calcular especular (EXACTAMENTE como MetallicSurfaceLayer)
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);
        vec3 halfwayDir = normalize(lightDir + viewDir);
        float NdotH = max(dot(normal, halfwayDir), 0.0);
        float specularStrength = pow(NdotH, mix(4.0, 128.0, 1.0 - roughness)) * specularIntensity;
        
        // Aplicar iluminación (EXACTAMENTE como MetallicSurfaceLayer)
        float totalLight = ambientStrength + (lightIntensity * dayNight) + rimLight;
        vec3 finalColor = baseColor * totalLight;
        
        // Añadir especular SOLO en la parte iluminada
        finalColor += vec3(1.0, 1.0, 1.0) * specularStrength * dayNight;
        
        gl_FragColor = vec4(finalColor, transparency);
      }
    `,o=e.waterColor instanceof m?e.waterColor:new m(e.waterColor||3050379),a=e.deepWaterColor instanceof m?e.deepWaterColor:new m(e.deepWaterColor||13158),n=e.foamColor instanceof m?e.foamColor:new m(e.foamColor||16777215);return new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seedOffset:{value:(e.seed||0)%100},waveHeight:{value:e.waveHeight||.08},waveFrequency:{value:e.waveFrequency||3},waveSpeed:{value:e.waveSpeed||.5},waterColor:{value:o},deepWaterColor:{value:a},foamColor:{value:n},specularIntensity:{value:e.specularIntensity||3},transparency:{value:e.transparency||.6},roughness:{value:e.roughness||.1},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,blending:Te,side:_e,depthWrite:!1})}createOceanCurrentsLayerMaterial(e){const t=`
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      void main() {
        vPosition = position;
        vNormal = normalize(normalMatrix * normal);
        vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
        vUv = uv;
        
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,i=`
      uniform float time;
      uniform vec3 currentColor;
      uniform vec3 deepCurrentColor;
      uniform float currentIntensity;
      uniform float currentScale;
      uniform float currentSpeed;
      uniform float secondaryCurrentIntensity;
      uniform float secondaryCurrentScale;
      uniform float secondaryCurrentSpeed;
      uniform float opacity;
      uniform float seedOffset;
      
      // Uniformes de luz (EXACTAMENTE como otros efectos)
      uniform vec3 lightDirection;
      uniform vec3 lightPosition;
      uniform float ambientStrength;
      uniform float lightIntensity;
      
      varying vec3 vPosition;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying vec2 vUv;
      
      // Función de ruido determinista simple
      float random(vec3 st) {
        return fract(sin(dot(st.xyz, vec3(12.9898, 78.233, 54.321))) * 43758.5453123);
      }
      
      float noise(vec3 st) {
        vec3 i = floor(st);
        vec3 f = fract(st);
        
        // Interpolación suave
        f = f * f * (3.0 - 2.0 * f);
        
        // Obtener valores en los vértices del cubo
        float a = random(i);
        float b = random(i + vec3(1.0, 0.0, 0.0));
        float c = random(i + vec3(0.0, 1.0, 0.0));
        float d = random(i + vec3(1.0, 1.0, 0.0));
        float e = random(i + vec3(0.0, 0.0, 1.0));
        float f2 = random(i + vec3(1.0, 0.0, 1.0));
        float g = random(i + vec3(0.0, 1.0, 1.0));
        float h = random(i + vec3(1.0, 1.0, 1.0));
        
        // Interpolación trilineal
        return mix(
          mix(mix(a, b, f.x), mix(c, d, f.x), f.y),
          mix(mix(e, f2, f.x), mix(g, h, f.x), f.y),
          f.z
        );
      }
      
      // Ruido fractal para patrones orgánicos
      float fbm(vec3 p) {
        float value = 0.0;
        float amplitude = 0.5;
        
        for (int i = 0; i < 4; i++) {
          value += amplitude * noise(p);
          p *= 2.0;
          amplitude *= 0.5;
        }
        
        return value;
      }
      
      void main() {
        vec3 normal = normalize(vWorldNormal);
        
        // Usar posición de luz (EXACTAMENTE como otros efectos)
        vec3 lightDir;
        if (length(lightPosition) > 0.0) {
          lightDir = normalize(lightPosition - vWorldPosition);
        } else {
          lightDir = normalize(-lightDirection);
        }
        
        // Cálculo de iluminación básico
        float dotNL = dot(normal, lightDir);
        float dayNight = smoothstep(-0.3, 0.1, dotNL);
        
        // Usar la posición 3D normalizada para patrones esféricos continuos
        vec3 spherePos = normalize(vPosition);
        
        // Añadir offset de seed para que cada planeta tenga corrientes únicas
        vec3 seedOffset3D = vec3(seedOffset, seedOffset * 0.7, seedOffset * 1.3);
        
        // Corrientes principales - patrones largos y serpenteantes
        float currentPattern = 0.0;
        
        // Corrientes primarias - grandes y lentas (como la Corriente del Golfo)
        currentPattern += fbm(spherePos * currentScale + seedOffset3D + vec3(time * currentSpeed * 0.1)) * currentIntensity;
        
        // Corrientes secundarias - más pequeñas y rápidas
        currentPattern += fbm(spherePos * secondaryCurrentScale + seedOffset3D * 1.5 + vec3(time * secondaryCurrentSpeed * 0.15)) * secondaryCurrentIntensity;
        
        // Corrientes terciarias - detalles finos
        currentPattern += fbm(spherePos * currentScale * 3.0 + seedOffset3D * 2.0 + vec3(time * currentSpeed * 0.05)) * 0.2;
        
        // Convertir ruido a rango apropiado para corrientes
        currentPattern = (currentPattern * 2.0 - 1.0) * 0.5 + 0.5;
        currentPattern = smoothstep(0.3, 0.7, currentPattern); // Hacer patrones más definidos
        
        // Mezclar colores basado en la intensidad de las corrientes
        vec3 baseColor = mix(deepCurrentColor, currentColor, currentPattern);
        
        // Aplicar iluminación sutil (las corrientes son cambios de albedo, no elevación)
        float totalLight = ambientStrength + (lightIntensity * dayNight * 0.3); // Menos contraste de luz
        vec3 finalColor = baseColor * totalLight;
        
        // Alpha basado en la intensidad de las corrientes y opacidad general
        // Las corrientes oceánicas son cambios de albedo, deberían ser visibles en toda la superficie
        float alpha = currentPattern * opacity;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,o=e.currentColor instanceof m?e.currentColor:new m(e.currentColor||4889486),a=e.deepCurrentColor instanceof m?e.deepCurrentColor:new m(e.deepCurrentColor||2973010);return new ue({vertexShader:t,fragmentShader:i,uniforms:{time:{value:0},seedOffset:{value:(e.seed||0)%100},currentIntensity:{value:e.currentIntensity||.5},currentScale:{value:e.currentScale||2},currentSpeed:{value:e.currentSpeed||.2},secondaryCurrentIntensity:{value:e.secondaryCurrentIntensity||.3},secondaryCurrentScale:{value:e.secondaryCurrentScale||3},secondaryCurrentSpeed:{value:e.secondaryCurrentSpeed||.15},currentColor:{value:o},deepCurrentColor:{value:a},opacity:{value:e.opacity||.25},lightDirection:{value:new T(1,1,1).normalize()},lightPosition:{value:new T(0,0,0)},ambientStrength:{value:.15},lightIntensity:{value:.85}},transparent:!0,blending:Te,side:_e,depthWrite:!1})}addToScene(e){this.scene=e,this.effectLayers.forEach(t=>{t.mesh&&e.add(t.mesh)}),this.effectLayers.length}update(e,t){this.effectLayers.forEach(i=>{if(i.material.uniforms.time&&(i.material.uniforms.time.value+=e),t!==void 0&&i.material.uniforms.rotationAngle&&(i.material.uniforms.rotationAngle.value=t),i.layerObject&&i.layerObject.update)try{i.layerObject.update(e,t)}catch(o){console.error(`Error updating layer ${i.name}:`,o)}i.mesh&&i.mesh.rotation.copy(this.baseMesh.rotation)})}updateBaseColor(e){const t=e instanceof m?e:new m(e);this.baseMaterial.uniforms.baseColor.value=t}updateLightDirection(e){this.baseMaterial.uniforms.lightDirection.value=e.clone().normalize(),this.effectLayers.forEach(t=>{t.material.uniforms.lightDirection&&(t.material.uniforms.lightDirection.value=e.clone().normalize())})}updateLightPosition(e){this.baseMaterial.uniforms.lightPosition.value=e.clone(),this.effectLayers.forEach(t=>{t.material.uniforms.lightPosition&&(t.material.uniforms.lightPosition.value=e.clone())})}updateFromThreeLight(e){this.updateLightPosition(e.position);const t=e.target.position.clone().sub(e.position).normalize();this.updateLightDirection(t)}createGenericLayerMaterial(e,t,i,o=!0,a=Te){return i.lightDirection||(i.lightDirection={value:new T(1,1,1).normalize()}),i.lightPosition||(i.lightPosition={value:new T(0,0,0)}),new ue({vertexShader:e,fragmentShader:t,uniforms:i,transparent:o,blending:a,side:_e,depthWrite:!1})}convertEffectToLayer(e,t,i=1.001){if(t instanceof ue){const o=t.clone();return o.transparent=!0,o.depthWrite=!1,o.uniforms.lightDirection||(o.uniforms.lightDirection={value:new T(1,1,1).normalize()}),this.addEffectLayer(e,o,i)}return console.warn(`Cannot convert non-shader material to layer: ${e}`),null}getNextScaleFactor(){return 1.001+this.effectLayers.length*.001}getLayerMeshes(){const e={};return this.effectLayers.forEach(t=>{t.name&&t.mesh&&(e[t.name]=t.mesh)}),e}dispose(){this.baseMaterial.dispose(),this.effectLayers.forEach(e=>{e.mesh&&(e.mesh.geometry.dispose(),this.scene&&this.scene.remove(e.mesh)),e.material.dispose()}),this.effectLayers=[]}}const ne={NUM_BANDS:{min:6,max:12},BAND_POSITIONS:{min:-.8,max:.8},BAND_WIDTHS:{min:.08,max:.15},ROTATION_ANGLE:{min:0,max:Math.PI*2},ANIMATION_SPEED:{min:.5,max:2},TURBULENCE:{min:.3,max:.8},NOISE_SCALE:{min:2,max:4}};class ro{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i),a=t.numBands||Math.floor(o.uniform(ne.NUM_BANDS.min,ne.NUM_BANDS.max));this.params={numBands:a,bandPositions:t.bandPositions||this.generateDefaultBandPositions(a,i),bandWidths:t.bandWidths||this.generateDefaultBandWidths(a,i),rotationAngle:t.rotationAngle||o.uniform(ne.ROTATION_ANGLE.min,ne.ROTATION_ANGLE.max),baseColor:t.baseColor||new m(16753920),bandColor:t.bandColor||new m(16747520),animationSpeed:t.animationSpeed||o.uniform(ne.ANIMATION_SPEED.min,ne.ANIMATION_SPEED.max),turbulence:t.turbulence||o.uniform(ne.TURBULENCE.min,ne.TURBULENCE.max),noiseScale:t.noiseScale||o.uniform(ne.NOISE_SCALE.min,ne.NOISE_SCALE.max),opacity:t.opacity||.4,seed:i},this.material=this.layerSystem.createCloudBandsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudBands",this.material,1.001,this)}generateDefaultBandPositions(e,t){const i=new Array(20).fill(0),o=new k(t+12345);for(let a=0;a<e&&a<20;a++)i[a]=o.uniform(ne.BAND_POSITIONS.min,ne.BAND_POSITIONS.max);return i}generateDefaultBandWidths(e,t){const i=new Array(20).fill(0),o=new k(t+67890);for(let a=0;a<e&&a<20;a++)i[a]=o.uniform(ne.BAND_WIDTHS.min,ne.BAND_WIDTHS.max);return i}update(e,t){this.material.uniforms.time&&(this.material.uniforms.time.value+=e),t!==void 0&&this.material.uniforms.rotationAngle&&(this.material.uniforms.rotationAngle.value=t)}updateParams(e){this.params={...this.params,...e},e.numBands!==void 0&&(this.material.uniforms.numBands.value=e.numBands),e.bandPositions&&(this.material.uniforms.bandPositions.value=e.bandPositions),e.bandWidths&&(this.material.uniforms.bandWidths.value=e.bandWidths),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed),e.turbulence!==void 0&&(this.material.uniforms.turbulence.value=e.turbulence),e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity)}dispose(){}}function Bt(r,e,t){const i=e.cloud_bands||{},o=t||Math.floor(Math.random()*1e6),a=new k(o+4e3),n={numBands:i.num_bands||Math.floor(a.uniform(ne.NUM_BANDS.min,ne.NUM_BANDS.max)),bandPositions:i.positions||void 0,bandWidths:i.widths||void 0,rotationAngle:i.rotation||a.uniform(ne.ROTATION_ANGLE.min,ne.ROTATION_ANGLE.max),baseColor:e.base_color?new m().setRGB(e.base_color.r||e.base_color[0],e.base_color.g||e.base_color[1],e.base_color.b||e.base_color[2]):new m(16753920),bandColor:new m(16777215),animationSpeed:a.uniform(ne.ANIMATION_SPEED.min,ne.ANIMATION_SPEED.max),turbulence:e.turbulence||a.uniform(ne.TURBULENCE.min,ne.TURBULENCE.max),noiseScale:a.uniform(ne.NOISE_SCALE.min,ne.NOISE_SCALE.max),opacity:.4,seed:o};return new ro(r,n)}const de={STORM_COUNT:{min:2,max:5},STORM_CENTERS:{min:-.8,max:.8},STORM_INTENSITY:{min:.5,max:1},SPIRAL_SPEED:{min:.5,max:1.5},ANIMATION_SPEED:{min:.1,max:.5},OPACITY:{min:.2,max:.6}};class lo{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i);this.params={stormCenters:t.stormCenters||this.generateStormCenters(i),stormColor:t.stormColor||new m(9109504),stormIntensity:t.stormIntensity||o.uniform(de.STORM_INTENSITY.min,de.STORM_INTENSITY.max),spiralSpeed:t.spiralSpeed||o.uniform(de.SPIRAL_SPEED.min,de.SPIRAL_SPEED.max),animationSpeed:t.animationSpeed||o.uniform(de.ANIMATION_SPEED.min,de.ANIMATION_SPEED.max),opacity:t.opacity||o.uniform(de.OPACITY.min,de.OPACITY.max),seed:i},this.material=this.layerSystem.createCloudGyrosLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("cloudGyros",this.material,1.002,this)}generateStormCenters(e){const t=new k(e+5e3),i=Math.floor(t.uniform(de.STORM_COUNT.min,de.STORM_COUNT.max)),o=[];for(let a=0;a<i;a++)o.push({x:t.uniform(de.STORM_CENTERS.min,de.STORM_CENTERS.max),y:t.uniform(de.STORM_CENTERS.min,de.STORM_CENTERS.max)});return o}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}updateParams(e){this.params={...this.params,...e},e.stormIntensity!==void 0&&(this.material.uniforms.stormIntensity.value=e.stormIntensity),e.spiralSpeed!==void 0&&(this.material.uniforms.spiralSpeed.value=e.spiralSpeed),e.animationSpeed!==void 0&&(this.material.uniforms.animationSpeed.value=e.animationSpeed)}dispose(){}}function Ht(r,e,t){const i=e.storms||{},o=t||Math.floor(Math.random()*1e6),a=new k(o+5e3),n={stormCenters:i.centers||void 0,stormColor:new m(9109504),stormIntensity:i.intensity||e.storm_intensity||a.uniform(de.STORM_INTENSITY.min,de.STORM_INTENSITY.max),spiralSpeed:i.spiral_speed||a.uniform(de.SPIRAL_SPEED.min,de.SPIRAL_SPEED.max),animationSpeed:a.uniform(de.ANIMATION_SPEED.min,de.ANIMATION_SPEED.max),opacity:a.uniform(de.OPACITY.min,de.OPACITY.max),seed:o};return new lo(r,n)}const ve={ROUGHNESS:{min:.6,max:.9},ROCK_DENSITY:{min:.4,max:.8},CRATER_COUNT:{min:.2,max:.6},OPACITY:{min:.7,max:.95}};class xt{layerMesh;material;params;layerSystem;static vertexShader=`
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
  `;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i),a=t.color instanceof m?t.color:t.color?new m(t.color):new m(9127187);this.params={color:a,roughness:t.roughness||o.uniform(ve.ROUGHNESS.min,ve.ROUGHNESS.max),rockDensity:t.rockDensity||o.uniform(ve.ROCK_DENSITY.min,ve.ROCK_DENSITY.max)*10,craterCount:t.craterCount||o.uniform(ve.CRATER_COUNT.min,ve.CRATER_COUNT.max),opacity:t.opacity||o.uniform(ve.OPACITY.min,ve.OPACITY.max),seed:i},this.material=new ue({vertexShader:xt.vertexShader,fragmentShader:xt.fragmentShader,uniforms:{time:{value:0},rockColor:{value:a},roughness:{value:this.params.roughness},rockDensity:{value:this.params.rockDensity},opacity:{value:this.params.opacity},lightDirection:{value:new T(1,1,1).normalize()}},transparent:!0,side:_e,depthWrite:!1}),this.layerMesh=this.layerSystem.addEffectLayer("rockyTerrain",this.material,this.layerSystem.getNextScaleFactor())}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function co(r,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),n=new k(a+8e3);return new xt(r,{color:o?new m(o):new m(9127187),roughness:i.roughness||n.uniform(ve.ROUGHNESS.min,ve.ROUGHNESS.max),rockDensity:i.rock_density||n.uniform(ve.ROCK_DENSITY.min,ve.ROCK_DENSITY.max)*10,craterCount:i.crater_count||n.uniform(ve.CRATER_COUNT.min,ve.CRATER_COUNT.max),opacity:n.uniform(ve.OPACITY.min,ve.OPACITY.max),seed:a})}const $={ICE_REFLECTIVITY:{min:.7,max:.95},FROST_DENSITY:{min:.3,max:.8},CRACK_INTENSITY:{min:.2,max:.7},OPACITY:{min:.6,max:.9},CRYSTAL_SCALE:{min:15,max:35},CRYSTAL_DENSITY:{min:.4,max:.8},CRYSTAL_SHARPNESS:{min:100,max:250},FROST_PATTERN:{min:8,max:16}};class ho{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i),a=t.color instanceof m?t.color:t.color?new m(t.color):new m(11591910);this.params={color:a,iceReflectivity:t.iceReflectivity||o.uniform($.ICE_REFLECTIVITY.min,$.ICE_REFLECTIVITY.max),frostDensity:t.frostDensity||o.uniform($.FROST_DENSITY.min,$.FROST_DENSITY.max),crackIntensity:t.crackIntensity||o.uniform($.CRACK_INTENSITY.min,$.CRACK_INTENSITY.max),opacity:t.opacity||o.uniform($.OPACITY.min,$.OPACITY.max),crystalScale:t.crystalScale||o.uniform($.CRYSTAL_SCALE.min,$.CRYSTAL_SCALE.max),crystalDensity:t.crystalDensity||o.uniform($.CRYSTAL_DENSITY.min,$.CRYSTAL_DENSITY.max),crystalSharpness:t.crystalSharpness||o.uniform($.CRYSTAL_SHARPNESS.min,$.CRYSTAL_SHARPNESS.max),frostPattern:t.frostPattern||o.uniform($.FROST_PATTERN.min,$.FROST_PATTERN.max),seed:i},this.material=this.layerSystem.createIcyTerrainLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("icyTerrain",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function mo(r,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),n=new k(a+6e3);return new ho(r,{color:o?new m(o):new m(11591910),iceReflectivity:i.ice_reflectivity||n.uniform($.ICE_REFLECTIVITY.min,$.ICE_REFLECTIVITY.max),frostDensity:i.frost_density||n.uniform($.FROST_DENSITY.min,$.FROST_DENSITY.max),crackIntensity:i.crack_intensity||n.uniform($.CRACK_INTENSITY.min,$.CRACK_INTENSITY.max),opacity:n.uniform($.OPACITY.min,$.OPACITY.max),crystalScale:i.crystal_scale||n.uniform($.CRYSTAL_SCALE.min,$.CRYSTAL_SCALE.max),crystalDensity:i.crystal_density||n.uniform($.CRYSTAL_DENSITY.min,$.CRYSTAL_DENSITY.max),crystalSharpness:i.crystal_sharpness||n.uniform($.CRYSTAL_SHARPNESS.min,$.CRYSTAL_SHARPNESS.max),frostPattern:i.frost_pattern||n.uniform($.FROST_PATTERN.min,$.FROST_PATTERN.max),seed:a})}const me={METALNESS:{min:.5,max:5},ROUGHNESS:{min:.1,max:.6},FRAGMENTATION_INTENSITY:{min:.3,max:.8},OPACITY:{min:.2,max:.9},CRYSTAL_SCALE:{min:17,max:230}};class uo{layerMesh;material;params;layerSystem;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i),a=t.color instanceof m?t.color:t.color?new m(t.color):new m(8421504);this.params={color:a,metalness:t.metalness||o.uniform(me.METALNESS.min,me.METALNESS.max),roughness:t.roughness||o.uniform(me.ROUGHNESS.min,me.ROUGHNESS.max),fragmentationIntensity:t.fragmentationIntensity||o.uniform(me.FRAGMENTATION_INTENSITY.min,me.FRAGMENTATION_INTENSITY.max),opacity:t.opacity||o.uniform(me.OPACITY.min,me.OPACITY.max),seed:i,noiseScale:t.noiseScale||8,noiseIntensity:t.noiseIntensity||.3,crystalScale:t.crystalScale||o.uniform(me.CRYSTAL_SCALE.min,me.CRYSTAL_SCALE.max)},this.material=this.layerSystem.createMetallicSurfaceLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("metallicSurface",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){this.material.uniforms.time&&(this.material.uniforms.time.value+=e)}dispose(){}}function fo(r,e,t){const i=e.surface||{},o=e.planet_info?.base_color||i.base_color,a=t||Math.floor(Math.random()*1e6),n=new k(a+7e3),c=n.uniform(.8,1.2);return new uo(r,{color:o?new m(o):new m(8421504),metalness:i.metalness||n.uniform(me.METALNESS.min,me.METALNESS.max),roughness:i.roughness||n.uniform(me.ROUGHNESS.min,me.ROUGHNESS.max),fragmentationIntensity:i.fragmentation||n.uniform(me.FRAGMENTATION_INTENSITY.min,me.FRAGMENTATION_INTENSITY.max),opacity:n.uniform(me.OPACITY.min,me.OPACITY.max),seed:a,noiseScale:4*c,noiseIntensity:.3,crystalScale:n.uniform(me.CRYSTAL_SCALE.min,me.CRYSTAL_SCALE.max)})}class ri{particleSystem;material;geometry;params;particleCount;time=0;rng;constructor(e,t={}){const i=t.seed||Math.floor(Math.random()*1e6);this.rng=new k(i),this.params={color:t.color||[.95,.95,1],particleCount:t.particleCount||50,speed:t.speed||.5,size:t.size||1,opacity:t.opacity||.3,brightness:t.brightness||1,seed:i},this.particleCount=this.params.particleCount,this.geometry=new Ie,this.createParticles(e),this.createMaterial(),this.particleSystem=new Qe(this.geometry,this.material)}createParticles(e){const t=new Float32Array(this.particleCount*3),i=new Float32Array(this.particleCount),o=new Float32Array(this.particleCount),a=new Float32Array(this.particleCount),n=e*1.3;for(let c=0;c<this.particleCount;c++){const d=this.rng.random()*Math.PI*2,l=this.rng.random()*2-1,s=this.rng.random(),u=Math.acos(l),f=n*Math.cbrt(s);t[c*3]=f*Math.sin(u)*Math.cos(d),t[c*3+1]=f*Math.sin(u)*Math.sin(d),t[c*3+2]=f*Math.cos(u),i[c]=this.params.size*(.5+this.rng.random()*.5),o[c]=this.params.speed*(.8+this.rng.random()*.4),a[c]=this.rng.random()*Math.PI*2}this.geometry.setAttribute("position",new te(t,3)),this.geometry.setAttribute("size",new te(i,1)),this.geometry.setAttribute("speed",new te(o,1)),this.geometry.setAttribute("phase",new te(a,1))}createMaterial(){const e=this.params.color instanceof m?this.params.color:new m().setRGB(this.params.color[0],this.params.color[1],this.params.color[2]),t=`
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
    `;this.material=new ue({uniforms:{time:{value:0},color:{value:e},opacity:{value:this.params.opacity},brightness:{value:this.params.brightness}},vertexShader:t,fragmentShader:i,transparent:!0,blending:We,depthWrite:!1})}addToScene(e,t){t&&this.particleSystem.position.copy(t),e.add(this.particleSystem)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;const t=.9+.1*Math.sin(this.time*2);this.material.uniforms.opacity.value=this.params.opacity*t}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof m?e.color:new m().setRGB(e.color[0],e.color[1],e.color[2]);this.material.uniforms.color.value=t}e.opacity!==void 0&&(this.material.uniforms.opacity.value=e.opacity),e.brightness!==void 0&&(this.material.uniforms.brightness.value=e.brightness)}getObject3D(){return this.particleSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function $t(r,e,t){const i=e.streaks||e,o={color:i.color||[.95,.95,1],particleCount:i.particleCount||30,speed:i.speed||.3,size:.8,opacity:.2,brightness:.8,seed:t||Math.floor(Math.random()*1e6)};return new ri(r,o)}const Q={STAR_COUNT:{min:150,max:450},MIN_BRIGHTNESS:{min:.4,max:.7},MAX_BRIGHTNESS:{min:.8,max:1},MIN_SIZE:{min:1.2,max:1.8},MAX_SIZE:{min:3.5,max:5},DISTANCE:{min:300,max:600},TWINKLE_SPEED:{min:.002,max:.008}};class lt{starSystem;material;geometry;params;starCount;static vertexShader=`
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
  `;constructor(e,t={}){const i=t.seed!==void 0?t.seed:Math.floor(Math.random()*1e6);console.log("🌟 StarFieldEffect - Using seed:",i,"from params:",t.seed);const o=new k(i+1e4);this.params={color:t.color||new m(16777215),starCount:t.starCount!==void 0?t.starCount:Math.floor(o.uniform(Q.STAR_COUNT.min,Q.STAR_COUNT.max)),minBrightness:t.minBrightness!==void 0?t.minBrightness:o.uniform(Q.MIN_BRIGHTNESS.min,Q.MIN_BRIGHTNESS.max),maxBrightness:t.maxBrightness!==void 0?t.maxBrightness:o.uniform(Q.MAX_BRIGHTNESS.min,Q.MAX_BRIGHTNESS.max),minSize:t.minSize!==void 0?t.minSize:o.uniform(Q.MIN_SIZE.min,Q.MIN_SIZE.max),maxSize:t.maxSize!==void 0?t.maxSize:o.uniform(Q.MAX_SIZE.min,Q.MAX_SIZE.max),distance:t.distance!==void 0?t.distance:o.uniform(Q.DISTANCE.min,Q.DISTANCE.max),seed:i,twinkleSpeed:t.twinkleSpeed!==void 0?t.twinkleSpeed:o.uniform(Q.TWINKLE_SPEED.min,Q.TWINKLE_SPEED.max)},this.starCount=this.params.starCount,this.geometry=new Ie,this.material=this.createMaterial(),this.generateStars(e),this.starSystem=new Qe(this.geometry,this.material)}generateStars(e){const t=new Float32Array(this.starCount*3),i=new Float32Array(this.starCount),o=new Float32Array(this.starCount),a=new Float32Array(this.starCount),n=this.params.seed,c=new k(n+1e4);for(let d=0;d<this.starCount;d++){const l=c.uniform(0,2*Math.PI),s=c.uniform(-1,1),u=Math.acos(s),f=this.params.distance*c.uniform(.8,1.2),p=f*Math.sin(u)*Math.cos(l),v=f*Math.sin(u)*Math.sin(l),b=f*Math.cos(u);t[d*3]=p,t[d*3+1]=v,t[d*3+2]=b,i[d]=c.uniform(this.params.minSize,this.params.maxSize),o[d]=c.uniform(this.params.minBrightness,this.params.maxBrightness),a[d]=c.uniform(0,Math.PI*2)}this.geometry.setAttribute("position",new te(t,3)),this.geometry.setAttribute("size",new te(i,1)),this.geometry.setAttribute("brightness",new te(o,1)),this.geometry.setAttribute("twinklePhase",new te(a,1))}createMaterial(){const e=this.params.color instanceof m?this.params.color:new m(this.params.color);return new ue({vertexShader:lt.vertexShader,fragmentShader:lt.fragmentShader,uniforms:{time:{value:0},starColor:{value:e},twinkleSpeed:{value:this.params.twinkleSpeed}},transparent:!0,blending:We,depthWrite:!1,vertexColors:!1})}addToScene(e,t){t&&this.starSystem.position.copy(t),e.add(this.starSystem)}update(e){this.material.uniforms.time.value+=e}updateParams(e){if(this.params={...this.params,...e},e.color!==void 0){const t=e.color instanceof m?e.color:new m(e.color);this.material.uniforms.starColor.value=t}e.twinkleSpeed!==void 0&&(this.material.uniforms.twinkleSpeed.value=e.twinkleSpeed)}getObject3D(){return this.starSystem}dispose(){this.geometry.dispose(),this.material.dispose()}}function po(r,e){const t=e!==void 0?e:Math.floor(Math.random()*1e6);console.log("🌟 createStarFieldFromPythonData - planetSeed:",e,"final seed:",t);const i=new k(t+1e4),o={color:new m(16777215),starCount:Math.floor(i.uniform(Q.STAR_COUNT.min,Q.STAR_COUNT.max)),minBrightness:i.uniform(Q.MIN_BRIGHTNESS.min,Q.MIN_BRIGHTNESS.max),maxBrightness:i.uniform(Q.MAX_BRIGHTNESS.min,Q.MAX_BRIGHTNESS.max),minSize:i.uniform(Q.MIN_SIZE.min,Q.MIN_SIZE.max),maxSize:i.uniform(Q.MAX_SIZE.min,Q.MAX_SIZE.max),distance:i.uniform(Q.DISTANCE.min,Q.DISTANCE.max),seed:t,twinkleSpeed:i.uniform(Q.TWINKLE_SPEED.min,Q.TWINKLE_SPEED.max)};return new lt(r,o)}const ze={SIZE:{min:.12,max:.2},ROTATION_SPEED:{min:.05,max:.1},OPACITY:{min:.15,max:.35},TIME_SPEED:{min:.8,max:1.5}},go=`
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
`,vo=`
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
`;class Et{mesh;material;params;startTime;proceduralParams;constructor(e){const t=e.seed||Math.floor(Math.random()*1e6),i=new k(t);this.startTime=e.startTime||t%1e4/1e3,this.proceduralParams={size:i.uniform(ze.SIZE.min,ze.SIZE.max),rotationSpeed:i.uniform(ze.ROTATION_SPEED.min,ze.ROTATION_SPEED.max),opacity:i.uniform(ze.OPACITY.min,ze.OPACITY.max),timeSpeed:i.uniform(ze.TIME_SPEED.min,ze.TIME_SPEED.max)},this.params=e;const o=new m(e.planetColor),a=o.clone();a.multiplyScalar(1-e.hexagonData.color_darken_factor),this.material=new ue({uniforms:{time:{value:0},planetColor:{value:o},hexagonColor:{value:a},darkenFactor:{value:e.hexagonData.color_darken_factor},opacity:{value:this.proceduralParams.opacity},hexagonRadius:{value:this.proceduralParams.size},rotationSpeed:{value:this.proceduralParams.rotationSpeed},pole:{value:e.hexagonData.pole==="north"?1:-1},visibility:{value:1}},vertexShader:go,fragmentShader:vo,transparent:!0,depthWrite:!1,side:_e,blending:e.hexagonData.nebula_blend?We:Te});const n=this.createCurvedHexagonGeometry(e.hexagonData.pole,e.hexagonData.radius);this.mesh=new be(n,this.material),this.mesh.scale.set(e.planetRadius,e.planetRadius,e.planetRadius),this.updateVisibility()}updateVisibility(){if(!this.params.hexagonData.enabled){this.material.uniforms.visibility.value=0;return}const t=(this.params.currentTime||0)%this.params.hexagonData.cycle_duration_years/this.params.hexagonData.cycle_duration_years,i=this.params.hexagonData.visible_duration_years/this.params.hexagonData.cycle_duration_years;if(t<i){const o=t/i;o<.1?this.material.uniforms.visibility.value=o/.1:o>.9?this.material.uniforms.visibility.value=(1-o)/.1:this.material.uniforms.visibility.value=1}else this.material.uniforms.visibility.value=0}update(e){const i=(this.startTime+Date.now()/1e3*this.proceduralParams.timeSpeed)%1e3;this.material.uniforms.time.value=i,this.updateVisibility()}addToScene(e){e.add(this.mesh)}removeFromScene(e){e.remove(this.mesh)}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}createCurvedHexagonGeometry(e,t){const i=e==="north"?1:-1,o=64,a=1,n=new ei(a,a,o,o),c=n.attributes.position,d=new T;for(let l=0;l<c.count;l++){d.fromBufferAttribute(c,l);const s=d.x,u=d.y,f=Math.sqrt(s*s+u*u);if(f<=a/2){const v=f*Math.PI*.5,b=i*Math.cos(v)*1.02,C=Math.sin(v)*1.02;if(f>0){const y=s/f,x=u/f;d.x=y*C,d.y=b,d.z=x*C}else d.x=0,d.y=i*1.02,d.z=0}c.setXYZ(l,d.x,d.y,d.z)}return c.needsUpdate=!0,n.computeVertexNormals(),n}setEnabled(e){this.mesh.visible=e}}class Zt{fragments;fragmentMeshes=[];params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={fragmentCount:t.fragmentCount||20,color:t.color||new m(4473924),size:t.size||.05,distribution:t.distribution||"edge",animationSpeed:t.animationSpeed||1,rotationSpeed:t.rotationSpeed||.1,metalness:t.metalness||.9,roughness:t.roughness||.6},this.fragments=new Fe,this.generateFragments()}generateFragments(){const e=new Xe({color:this.params.color instanceof m?this.params.color:new m(this.params.color),metalness:this.params.metalness,roughness:this.params.roughness});for(let t=0;t<this.params.fragmentCount;t++){const i=this.generateFragmentGeometry(),o=new be(i,e);this.positionFragment(o,t),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI);const a=this.params.size*(Math.random()*.5+.75);o.scale.set(a,a,a),o.userData={rotationAxis:new T(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),rotationSpeed:(Math.random()-.5)*this.params.rotationSpeed},this.fragmentMeshes.push(o),this.fragments.add(o)}}generateFragmentGeometry(){const e=Math.floor(Math.random()*4)+3,t=[],i=[],o=[];o.push(new T(0,0,0));for(let c=0;c<e;c++){const d=c/e*Math.PI*2,l=Math.random()*.5+.5,s=(Math.random()-.5)*.3;o.push(new T(Math.cos(d)*l,Math.sin(d)*l,s))}for(let c=1;c<=e;c++){const l=o[c].clone();l.z+=Math.random()*.4+.2,o.push(l)}for(const c of o)t.push(c.x,c.y,c.z);for(let c=1;c<e;c++)i.push(0,c,c+1);i.push(0,e,1);const a=o.length-e-1;for(let c=0;c<e-1;c++)i.push(a,a+c+2,a+c+1);i.push(a,a+1,a+e);for(let c=0;c<e;c++){const d=c+1,l=(c+1)%e+1,s=d+e,u=l+e;i.push(d,s,l),i.push(l,s,u)}const n=new Ie;return n.setAttribute("position",new Tt(t,3)),n.setIndex(i),n.computeVertexNormals(),n}positionFragment(e,t){let i;switch(this.params.distribution){case"edge":i=this.generateEdgePosition(t);break;case"surface":i=this.generateSurfacePosition();break;case"random":default:i=this.generateRandomPosition();break}e.position.copy(i)}generateEdgePosition(e){const t=e/this.params.fragmentCount*Math.PI*2,i=this.planetRadius*(.95+Math.random()*.1),o=(Math.random()-.5)*this.planetRadius*.5;return new T(Math.cos(t)*i,o,Math.sin(t)*i)}generateSurfacePosition(){const e=Math.random()*Math.PI*2,t=Math.acos(Math.random()*2-1),i=this.planetRadius*(1+Math.random()*.05);return new T(i*Math.sin(t)*Math.cos(e),i*Math.sin(t)*Math.sin(e),i*Math.cos(t))}generateRandomPosition(){const e=this.planetRadius*(.8+Math.random()*.4),t=Math.random()*Math.PI*2,i=Math.random()*Math.PI*2;return new T(e*Math.sin(t)*Math.cos(i),e*Math.sin(t)*Math.sin(i),e*Math.cos(t))}addToScene(e,t){t&&this.fragments.position.copy(t),e.add(this.fragments)}update(e){this.fragmentMeshes.forEach((t,i)=>{const o=t.userData;t.rotateOnAxis(o.rotationAxis,o.rotationSpeed*e*this.params.animationSpeed);const a=Math.sin(Date.now()*.001+i)*.001;t.position.y+=a*e}),this.fragments.rotation.y+=e*.01*this.params.animationSpeed}updateParams(e){if(this.params={...this.params,...e},e.color){const t=e.color instanceof m?e.color:new m(e.color);this.fragmentMeshes.forEach(i=>{i.material instanceof Xe&&(i.material.color=t)})}(e.metalness!==void 0||e.roughness!==void 0)&&this.fragmentMeshes.forEach(t=>{t.material instanceof Xe&&(e.metalness!==void 0&&(t.material.metalness=e.metalness),e.roughness!==void 0&&(t.material.roughness=e.roughness))}),(e.size!==void 0||e.fragmentCount!==void 0)&&this.regenerateFragments()}regenerateFragments(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof qe&&e.material.dispose()}),this.fragments.clear(),this.fragmentMeshes=[],this.generateFragments()}getObject3D(){return this.fragments}getFragmentMeshes(){return[...this.fragmentMeshes]}dispose(){this.fragmentMeshes.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material instanceof qe&&e.material.dispose()}),this.fragmentMeshes=[],this.fragments.clear()}}function vt(r){const e=r.replace("#",""),t=parseInt(e.substr(0,2),16)/255,i=parseInt(e.substr(2,2),16)/255,o=parseInt(e.substr(4,2),16)/255;return new m(t,i,o)}function wt(r){return r.length>=3?new m(r[0],r[1],r[2]):new m(.5,.5,.5)}function He(r){if(r.ocean_color){if(typeof r.ocean_color=="string")return vt(r.ocean_color);if(Array.isArray(r.ocean_color))return wt(r.ocean_color)}if(r.planet_info?.base_color){if(typeof r.planet_info.base_color=="string")return vt(r.planet_info.base_color);if(Array.isArray(r.planet_info.base_color))return wt(r.planet_info.base_color)}if(r.base_color){if(typeof r.base_color=="string")return vt(r.base_color);if(Array.isArray(r.base_color))return wt(r.base_color)}const e=r.planet_info?.type||r.type||"Unknown";return yo(e)}function yo(r){const t={"Gas Giant":"#FFA500",Anomaly:"#FFFFFF",Rocky:"#808080",Icy:"#ADD8E6",Oceanic:"#0000FF",Desert:"#FFD700",Lava:"#FF0000",Arid:"#800000",Swamp:"#008000",Tundra:"#F0F8FF",Forest:"#006400",Savannah:"#F4A460",Cave:"#D1D1D1",Crystalline:"#00FFFF",Metallic:"#C0C0C0",Toxic:"#800080",Radioactive:"#00FF00",Magma:"#FF4500","Molten Core":"#FF8C00",Carbon:"#090909",Diamond:"#87CEFA","Super Earth":"#90EE90","Sub Earth":"#006400","Frozen Gas Giant":"#ADD8E6",Nebulous:"#FFC0CB",Aquifer:"#00FFFF",Exotic:"#FF00FF"}[r]||"#FFFFFF";return vt(t)}class ct{material;params;oceanLayerMesh;static vertexShader=`
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
  `;constructor(e={}){this.params={waveIntensity:e.waveIntensity||.3,waveSpeed:e.waveSpeed||2,waveScale:e.waveScale||8,landmassThreshold:e.landmassThreshold||.3,landmassColor:e.landmassColor||new m(.4,.6,.2),deepOceanThreshold:e.deepOceanThreshold||.2,deepOceanMultiplier:e.deepOceanMultiplier||.5,foamThreshold:e.foamThreshold||.8,foamColor:e.foamColor||new m(.9,.9,1),foamIntensity:e.foamIntensity||.4,oceanColor:e.oceanColor||new m(.1,.3,.6),...e},this.material=this.createMaterial()}createMaterial(){const e=this.params.landmassColor instanceof m?this.params.landmassColor:new m(this.params.landmassColor),t=this.params.foamColor instanceof m?this.params.foamColor:new m(this.params.foamColor),i=this.params.oceanColor instanceof m?this.params.oceanColor:new m(this.params.oceanColor);return new ue({vertexShader:ct.vertexShader,fragmentShader:ct.fragmentShader,uniforms:{time:{value:0},baseColor:{value:i},waveIntensity:{value:this.params.waveIntensity},waveSpeed:{value:this.params.waveSpeed},waveScale:{value:this.params.waveScale},landmassThreshold:{value:this.params.landmassThreshold},landmassColor:{value:e},deepOceanThreshold:{value:this.params.deepOceanThreshold},deepOceanMultiplier:{value:this.params.deepOceanMultiplier},foamThreshold:{value:this.params.foamThreshold},foamColor:{value:t},foamIntensity:{value:this.params.foamIntensity},oceanColor:{value:i}}})}apply(e){this.createOceanLayer(e)}createOceanLayer(e){const t=e.geometry.clone();t.scale(1.002,1.002,1.002);const i=new be(t,this.material);i.position.copy(e.position),i.rotation.copy(e.rotation),this.oceanLayerMesh=i}update(e,t){this.material.uniforms.time.value+=e,this.oceanLayerMesh&&t!==void 0&&(this.oceanLayerMesh.rotation.y=t)}updateParams(e){this.params={...this.params,...e},Object.keys(e).forEach(t=>{const i=e[t];if(i!==void 0&&this.material.uniforms[t])if(i instanceof m||Array.isArray(i)){const o=i instanceof m?i:new m(i);this.material.uniforms[t].value=o}else this.material.uniforms[t].value=i})}addToScene(e,t){this.oceanLayerMesh?(t&&this.oceanLayerMesh.position.copy(t),e.add(this.oceanLayerMesh)):console.warn("🌊 OceanWaves: No hay capa oceánica para añadir - call apply() first")}getMaterial(){return this.material}dispose(){this.material.dispose(),this.oceanLayerMesh&&(this.oceanLayerMesh.geometry&&this.oceanLayerMesh.geometry.dispose(),this.oceanLayerMesh=void 0)}}function xo(r){const e=He(r),t=[e.r,e.g,e.b];let i=.3,o=2,a=8,n=.3,c=.2;if(r.seeds){const l=r.seeds.shape_seed,u=(f=>{let p=f;return()=>(p=(p*1664525+1013904223)%4294967296,p/4294967296)})(l);i=.2+u()*.3,o=1.5+u()*1.5,a=6+u()*6,n=.25+u()*.15,c=.15+u()*.1}const d={waveIntensity:i,waveSpeed:o,waveScale:a,landmassThreshold:n,deepOceanThreshold:c,deepOceanMultiplier:.5,foamThreshold:.8,foamColor:new m(.9,.9,1),foamIntensity:.4,oceanColor:t};return new ct(d)}class dt{mesh;material;params;static vertexShader=`
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
  `;constructor(e,t={}){this.params={radius:t.radius||e*.999,detail:t.detail||128,flowSpeed:t.flowSpeed||.5,waveAmplitude:t.waveAmplitude||.02,opacity:t.opacity||.75,colorDeep:t.colorDeep||new m(4147),colorShallow:t.colorShallow||new m(26333),...t};const i=new ht(this.params.radius,this.params.detail,this.params.detail);this.material=new ue({vertexShader:dt.vertexShader,fragmentShader:dt.fragmentShader,uniforms:{uTime:{value:0},uFlowSpeed:{value:this.params.flowSpeed},uWaveAmplitude:{value:this.params.waveAmplitude},uFresnelPower:{value:1.5},uOpacity:{value:this.params.opacity},uColorDeep:{value:this.params.colorDeep instanceof m?this.params.colorDeep:new m(this.params.colorDeep)},uColorShallow:{value:this.params.colorShallow instanceof m?this.params.colorShallow:new m(this.params.colorShallow)},uNoiseScale:{value:3},uSecondaryWaveScale:{value:6},uPrimaryFlowSpeed:{value:this.params.flowSpeed||.5},uSecondaryFlowSpeed:{value:(this.params.flowSpeed||.5)*1.6},uUvPatternSpeed1:{value:(this.params.flowSpeed||.5)*4},uUvPatternSpeed2:{value:(this.params.flowSpeed||.5)*3}},transparent:!0,depthWrite:!1,depthTest:!0,side:_e,blending:Te}),this.mesh=new be(i,this.material),this.mesh.renderOrder=-1,console.log("🌊 FluidLayersEffect created with params:",this.params)}addToScene(e,t){t&&this.mesh.position.copy(t),e.add(this.mesh),console.log("🌊 FluidLayers mesh added to scene at position:",this.mesh.position)}update(e,t){this.material.uniforms.uTime.value+=e,t!==void 0&&(this.mesh.rotation.y=t)}updateParams(e){if(this.params={...this.params,...e},e.flowSpeed!==void 0&&(this.material.uniforms.uFlowSpeed.value=e.flowSpeed,this.material.uniforms.uPrimaryFlowSpeed.value=e.flowSpeed,this.material.uniforms.uSecondaryFlowSpeed.value=e.flowSpeed*1.6,this.material.uniforms.uUvPatternSpeed1.value=e.flowSpeed*4,this.material.uniforms.uUvPatternSpeed2.value=e.flowSpeed*3),e.waveAmplitude!==void 0&&(this.material.uniforms.uWaveAmplitude.value=e.waveAmplitude),e.opacity!==void 0&&(this.material.uniforms.uOpacity.value=e.opacity),e.colorDeep){const t=e.colorDeep instanceof m?e.colorDeep:new m(e.colorDeep);this.material.uniforms.uColorDeep.value=t}if(e.colorShallow){const t=e.colorShallow instanceof m?e.colorShallow:new m(e.colorShallow);this.material.uniforms.uColorShallow.value=t}}getObject3D(){return this.mesh}dispose(){this.mesh.geometry&&this.mesh.geometry.dispose(),this.material&&this.material.dispose()}}function qt(r,e){let t=.5,i=.025,o=.75;if(e.seeds){const n=e.seeds.shape_seed||e.seeds.planet_seed,d=(l=>{let s=l;return()=>(s=(s*1664525+1013904223)%4294967296,s/4294967296)})(n);t=.05+d()*.3,i=.02+d()*.02,o=.25+d()*.6}const a={radius:r*.999,detail:128,flowSpeed:t,waveAmplitude:i*.4,opacity:o,colorDeep:new m(4147),colorShallow:new m(26333)};return new dt(r,a)}const ce={WAVE_HEIGHT:{min:.05,max:.12},WAVE_FREQUENCY:{min:2,max:5},WAVE_SPEED:{min:.2,max:.8},SPECULAR_INTENSITY:{min:2,max:6},TRANSPARENCY:{min:.2,max:.5},TIME_SPEED:{min:.1,max:1}};class li{layerMesh;material;params;layerSystem;startTime;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i);this.startTime=t.startTime||i%1e4/1e3;const a=t.waterColor instanceof m?t.waterColor:t.waterColor?new m(t.waterColor):new m(3050379),n=t.deepWaterColor instanceof m?t.deepWaterColor:t.deepWaterColor?new m(t.deepWaterColor):new m(13158),c=t.foamColor instanceof m?t.foamColor:t.foamColor?new m(t.foamColor):new m(16777215);this.params={waterColor:a,deepWaterColor:n,foamColor:c,waveHeight:t.waveHeight||o.uniform(ce.WAVE_HEIGHT.min,ce.WAVE_HEIGHT.max),waveFrequency:t.waveFrequency||o.uniform(ce.WAVE_FREQUENCY.min,ce.WAVE_FREQUENCY.max),waveSpeed:t.waveSpeed||o.uniform(ce.WAVE_SPEED.min,ce.WAVE_SPEED.max),secondaryWaveHeight:t.secondaryWaveHeight||o.uniform(ce.WAVE_HEIGHT.min*.6,ce.WAVE_HEIGHT.max*.6),secondaryWaveFrequency:t.secondaryWaveFrequency||o.uniform(ce.WAVE_FREQUENCY.min*1.2,ce.WAVE_FREQUENCY.max*1.2),secondaryWaveSpeed:t.secondaryWaveSpeed||o.uniform(ce.WAVE_SPEED.min*1.1,ce.WAVE_SPEED.max*1.1),distortionScale:t.distortionScale||3,distortionSpeed:t.distortionSpeed||.5,specularIntensity:t.specularIntensity||o.uniform(ce.SPECULAR_INTENSITY.min,ce.SPECULAR_INTENSITY.max),reflectivity:t.reflectivity||.3,transparency:t.transparency||o.uniform(ce.TRANSPARENCY.min,ce.TRANSPARENCY.max),roughness:t.roughness||.1,metalness:t.metalness||.2,normalScale:t.normalScale||.05,normalSpeed:t.normalSpeed||.5,seed:i,startTime:this.startTime,timeSpeed:t.timeSpeed||o.uniform(ce.TIME_SPEED.min,ce.TIME_SPEED.max)},this.material=this.layerSystem.createAquiferWaterLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("aquiferWater",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%1e3;this.material.uniforms.time&&(this.material.uniforms.time.value=i)}dispose(){}}function Xt(r,e,t){const i=e.planet_info||{},o=i.base_color?typeof i.base_color=="string"?new m(i.base_color):new m().fromArray(i.base_color):new m(4886754),a={h:0,s:0,l:0};o.getHSL(a);const n=new m().setHSL(a.h,Math.min(1,a.s*1.2),Math.min(1,a.l*.8)),c=new m().setHSL(a.h,Math.min(1,a.s*1.3),Math.max(0,a.l*.4)),d=12345,l=new k(d+5e3),s={waterColor:n,deepWaterColor:c,foamColor:new m(.9,.95,1),specularIntensity:l.uniform(ce.SPECULAR_INTENSITY.min,ce.SPECULAR_INTENSITY.max),reflectivity:.3,transparency:l.uniform(ce.TRANSPARENCY.min,ce.TRANSPARENCY.max),roughness:.05,metalness:.1,normalScale:.02,normalSpeed:.6,seed:d};return new li(r,s)}const se={CURRENT_INTENSITY:{min:.3,max:.8},CURRENT_SCALE:{min:1,max:3},CURRENT_SPEED:{min:.1,max:.4},OPACITY:{min:.15,max:.35},TIME_SPEED:{min:.05,max:.2}};class bo{layerMesh;material;params;layerSystem;startTime;constructor(e,t={}){this.layerSystem=e;const i=t.seed||Math.floor(Math.random()*1e6),o=new k(i);this.startTime=t.startTime||i%1e4/1e3;const a=t.currentColor instanceof m?t.currentColor:t.currentColor?new m(t.currentColor):new m(4889486),n=t.deepCurrentColor instanceof m?t.deepCurrentColor:t.deepCurrentColor?new m(t.deepCurrentColor):new m(2973010);this.params={currentColor:a,deepCurrentColor:n,currentIntensity:t.currentIntensity||o.uniform(se.CURRENT_INTENSITY.min,se.CURRENT_INTENSITY.max),currentScale:t.currentScale||o.uniform(se.CURRENT_SCALE.min,se.CURRENT_SCALE.max),currentSpeed:t.currentSpeed||o.uniform(se.CURRENT_SPEED.min,se.CURRENT_SPEED.max),secondaryCurrentIntensity:t.secondaryCurrentIntensity||o.uniform(se.CURRENT_INTENSITY.min*.6,se.CURRENT_INTENSITY.max*.6),secondaryCurrentScale:t.secondaryCurrentScale||o.uniform(se.CURRENT_SCALE.min*1.5,se.CURRENT_SCALE.max*1.5),secondaryCurrentSpeed:t.secondaryCurrentSpeed||o.uniform(se.CURRENT_SPEED.min*.7,se.CURRENT_SPEED.max*.7),opacity:t.opacity||o.uniform(se.OPACITY.min,se.OPACITY.max),transparency:t.transparency||.8,seed:i,startTime:this.startTime,timeSpeed:t.timeSpeed||o.uniform(se.TIME_SPEED.min,se.TIME_SPEED.max)},this.material=this.layerSystem.createOceanCurrentsLayerMaterial(this.params),this.layerMesh=this.layerSystem.addEffectLayer("oceanCurrents",this.material,this.layerSystem.getNextScaleFactor(),this)}update(e){const i=(this.startTime+Date.now()/1e3*this.params.timeSpeed)%2e3;this.material.uniforms.time&&(this.material.uniforms.time.value=i)}dispose(){}}function So(r,e,t){e.planet_info;const i=e.surface_elements||{},o=12345,a=new k(o+6e3);let n=new m(4889486),c=new m(2973010);i.ocean_currents&&i.ocean_currents.current_color&&(n=new m().fromArray(i.ocean_currents.current_color)),i.ocean_currents&&i.ocean_currents.deep_current_color&&(c=new m().fromArray(i.ocean_currents.deep_current_color));const d={currentColor:n,deepCurrentColor:c,currentIntensity:i.ocean_currents?.intensity||a.uniform(se.CURRENT_INTENSITY.min,se.CURRENT_INTENSITY.max),currentScale:i.ocean_currents?.scale||a.uniform(se.CURRENT_SCALE.min,se.CURRENT_SCALE.max),currentSpeed:i.ocean_currents?.speed||a.uniform(se.CURRENT_SPEED.min,se.CURRENT_SPEED.max),opacity:i.ocean_currents?.opacity||a.uniform(se.OPACITY.min,se.OPACITY.max),transparency:.8,seed:o};return new bo(r,d)}class ci{sunLine=null;rotationLine=null;debugGroup;params;planetRadius;constructor(e,t={}){this.planetRadius=e,this.params={showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0,planetRadius:e,...t},this.debugGroup=new Fe,this.createDebugElements()}createDebugElements(){this.params.showSunLine&&this.createSunLine(),this.params.showRotationLine&&this.createRotationLine()}createSunLine(){const e=this.calculateSunAngle(),t=this.planetRadius*3,i=e,o=t*Math.cos(i),a=t*Math.sin(i),n=a*.8,c=new Ie,d=new Float32Array([0,0,0,o,n,a]);c.setAttribute("position",new te(d,3));const l=new Nt({color:16776960,linewidth:5,transparent:!1});this.sunLine=new It(c,l),this.debugGroup.add(this.sunLine);const s=e+Math.PI,u=t*.7,f=u*Math.cos(s),p=0,v=u*Math.sin(s),b=new ht(this.planetRadius*.15,16,16),C=new ii({color:16776960,transparent:!1,opacity:1}),y=new be(b,C);y.position.set(f,p,v),this.debugGroup.add(y),this.createTestSpheres()}createTestSpheres(){}createRotationLine(){const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=new Ie,o=new Float32Array([-t*Math.cos(e),0,-t*Math.sin(e),t*Math.cos(e),0,t*Math.sin(e)]);i.setAttribute("position",new te(o,3));const a=new Nt({color:9079434,linewidth:2,transparent:!1});this.rotationLine=new It(i,a),this.debugGroup.add(this.rotationLine)}calculateSunAngle(){return this.params.sunAngle!==void 0?this.params.sunAngle:this.params.orbitalAngle||0}calculateCurrentRotation(){const e=this.params.currentTime||Date.now()/1e3,t=this.params.cosmicOriginTime||e-3600,i=this.params.rotationPeriod||86400,o=this.params.initialAngleRotation||0,a=e-t,n=2*Math.PI/i;return(o+a*n)%(2*Math.PI)}update(e,t){t&&(this.params={...this.params,...t}),this.sunLine&&this.params.showSunLine&&this.updateSunLine(),this.rotationLine&&this.params.showRotationLine&&this.updateRotationLine()}updateSunLine(){if(!this.sunLine)return;const t=this.calculateSunAngle(),i=this.planetRadius*20,o=this.sunLine.geometry,a=o.attributes.position.array;a[3]=i*Math.cos(t),a[4]=0,a[5]=i*Math.sin(t),o.attributes.position.needsUpdate=!0}updateRotationLine(){if(!this.rotationLine)return;const e=this.calculateCurrentRotation(),t=this.planetRadius*25,i=this.rotationLine.geometry,o=i.attributes.position.array;o[0]=-t*Math.cos(e),o[1]=0,o[2]=-t*Math.sin(e),o[3]=t*Math.cos(e),o[4]=0,o[5]=t*Math.sin(e),i.attributes.position.needsUpdate=!0}addToScene(e,t){t&&this.debugGroup.position.copy(t),e.add(this.debugGroup)}getDebugInfo(){const e=this.calculateCurrentRotation(),t=this.calculateSunAngle();return{"Current Time":new Date().toISOString(),"Planet Rotation":`${(e*180/Math.PI).toFixed(2)}°`,"Sun Angle":`${(t*180/Math.PI).toFixed(2)}°`,"Rotation Period":`${this.params.rotationPeriod}s`,"Cosmic Origin":new Date((this.params.cosmicOriginTime||0)*1e3).toISOString()}}toggleSunLine(e){this.sunLine&&(this.sunLine.visible=e)}toggleRotationLine(e){this.rotationLine&&(this.rotationLine.visible=e)}getObject3D(){return this.debugGroup}dispose(){this.debugGroup.clear(),this.sunLine&&(this.sunLine.geometry.dispose(),this.sunLine.material.dispose()),this.rotationLine&&(this.rotationLine.geometry.dispose(),this.rotationLine.material.dispose())}}function _o(r,e){const t={currentTime:Date.now()/1e3,cosmicOriginTime:r.debug?.cosmic_origin_time||r.timing?.cosmic_origin_time||r.cosmicOriginTime,rotationPeriod:r.planet_info?.rotation_period||r.rotation_period_seconds||86400,initialAngleRotation:r.debug?.initial_angle_rotation||r.timing?.initial_angle_rotation||r.initialAngleRotation||0,planetRadius:e,orbitalAngle:r.timing?.orbital_angle||0,sunAngle:r.sun_angle||r.lighting?.sun_angle,showSunLine:!0,showRotationLine:!0,showRotationInfo:!0,showTimeInfo:!0};return new ci(e,t)}const Eo=!1;class $e{static instance;creators=new Map;effects=new Map;nextId=1;layerSystem;constructor(){this.registerDefaultEffects()}static getInstance(){return $e.instance||($e.instance=new $e),$e.instance}registerDefaultEffects(){this.registerEffect("atmosphere_glow",{create:(e,t)=>new st(t,e),fromPythonData:(e,t)=>Wt(t,e.atmosphere||{})}),this.registerEffect("atmosphere_clouds",{create:(e,t)=>new Ke(t,e),fromPythonData:(e,t)=>Ve(t,e.surface_elements||{})}),this.registerEffect("atmospheric_streaks",{create:(e,t)=>new ri(t,e),fromPythonData:(e,t)=>$t(t,e.atmosphere||{})}),this.registerEffect("atmosphere",{create:(e,t)=>new at(t,e),fromPythonData:(e,t)=>io(t,e)}),this.registerEffect("ring_system",{create:(e,t)=>new ai(t,e),fromPythonData:(e,t)=>to(e.rings||{},t)}),this.registerEffect("fragmentation",{create:(e,t)=>new Zt(t,e),fromPythonData:(e,t)=>new Zt(t,{color:e.surface?.fragment_color||[.3,.3,.3],fragmentCount:e.surface?.fragment_count||20})}),this.registerEffect("land_masses",{create:(e,t)=>new Dt(t,e),fromPythonData:(e,t)=>gt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("ocean_waves",{create:(e,t)=>new ct(e),fromPythonData:(e,t)=>xo(e)}),this.registerEffect("aquifer_water",{create:(e,t,i)=>new li(i,e),fromPythonData:(e,t,i)=>Xt(i,e)}),this.registerEffect("fluid_layers",{create:(e,t)=>new dt(t,e),fromPythonData:(e,t)=>qt(t,e)}),this.registerEffect("lava_flows",{create:(e,t)=>(console.warn("Lava flows effect not implemented yet"),null)}),this.registerEffect("crystal_formations",{create:(e,t)=>(console.warn("Crystal formations effect not implemented yet"),null)}),this.registerEffect("star_field",{create:(e,t)=>new lt(t,e),fromPythonData:(e,t)=>po(t,e.seeds?.planet_seed||e.planet_seed)}),this.registerEffect("tundra_snowflakes",{create:(e,t)=>new si(t,e),fromPythonData:(e,t)=>Gt(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("anomaly_phase_matter",{create:(e,t)=>new nt(t,e),fromPythonData:(e,t)=>so(t,e.surface_elements||{},e.seeds?.planet_seed)}),this.registerEffect("pulsating_cube",{create:(e,t)=>new ni(t,e),fromPythonData:(e,t)=>{const i=He(e);return no(t,e.surface_elements||{},e.seeds?.planet_seed,i,e)}}),this.registerEffect("visual_debug_3d",{create:(e,t)=>new ci(t,e),fromPythonData:(e,t)=>_o(e,t)})}registerEffect(e,t){this.creators.set(e,t)}createEffect(e,t,i,o,a=0){const n=this.creators.get(e);if(!n)return console.warn(`Effect type '${e}' not registered`),null;try{const c=n.create(t,i,o);if(!c)return null;const d={id:`effect_${this.nextId++}`,type:e,effect:c,priority:a,enabled:!0};return this.effects.set(d.id,d),d}catch(c){return console.error(`Error creating effect '${e}':`,c),null}}createEffectFromPythonData(e,t,i,o,a=0){const n=this.creators.get(e);if(!n||!n.fromPythonData)return this.createEffect(e,t,i,o,a);try{const c=n.fromPythonData(t,i,o);if(!c)return null;const d={id:`effect_${this.nextId++}`,type:e,effect:c,priority:a,enabled:!0};return this.effects.set(d.id,d),d}catch(c){return console.error(`Error creating effect '${e}' from Python data:`,c),null}}createEffectsFromList(e,t,i){const o=[],a=e.sort((n,c)=>(n.priority||0)-(c.priority||0));for(const n of a){const c=this.createEffect(n.type,n.params,t,i,n.priority);c&&(c.enabled=n.enabled!==!1,o.push(c))}return o}createEffectsFromPythonPlanetData(e,t,i,o,a){const n=[];try{const c=He(e);if(a?this.layerSystem=a:this.layerSystem=new rt(i,c),e.surface_elements){const s=e.surface_elements;if(s.effects_3d&&Array.isArray(s.effects_3d))for(const u of s.effects_3d){if(u.type==="atmospheric_streaks"){const p=$t(t,u.params,e.seeds?.shape_seed+3e3),v={id:`effect_${this.nextId++}`,type:"atmospheric_streaks",effect:p,priority:u.priority||0,enabled:!0,name:"Atmospheric Streaks"};this.effects.set(v.id,v),n.push(v),p.addToScene(o,i.position);continue}const f=this.createEffect(u.type,u.params,t,i,u.priority||0);f?(f.name=u.type.replace(/_/g," ").replace(/\b\w/g,p=>p.toUpperCase()),n.push(f),f.effect.apply&&f.effect.apply(i),f.effect.addToScene&&f.effect.addToScene(o,i.position)):console.error("❌ FALLO AL CREAR EFECTO:",u.type)}switch(console.log(`🔍 Planet surface type: "${s.type}"`),console.log(`🔍 Planet info type: "${e.planet_info?.type}"`),s.type.toLowerCase()){case"gas_giant":if(this.layerSystem){const g=Bt(this.layerSystem,{...s,base_color:c,turbulence:e.turbulence||s.turbulence},e.seeds?.shape_seed||e.seeds?.planet_seed||e.seeds?.planet_seed),S=Ht(this.layerSystem,{...s,base_color:c,storm_intensity:e.storm_intensity||s.storm_intensity},(e.seeds?.shape_seed||e.seeds?.planet_seed)+1e3),M={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:g,priority:0,enabled:!0};this.effects.set(M.id,M),n.push(M);const I={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:S,priority:1,enabled:!0};if(this.effects.set(I.id,I),n.push(I),s.polar_hexagon&&s.polar_hexagon.enabled){const P=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,D=new Et({planetColor:c,hexagonData:s.polar_hexagon,planetRadius:t,currentTime:P}),U={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:D,priority:10,enabled:!0};this.effects.set(U.id,U),n.push(U),o&&D.addToScene(o)}}else console.error("❌ PlanetLayerSystem not initialized!");break;case"frozen_gas_giant":if(this.layerSystem){const g=Bt(this.layerSystem,{...s,base_color:c,turbulence:e.turbulence||s.turbulence,icy_tint:!0},e.seeds?.shape_seed||e.seeds?.planet_seed),S={id:`effect_${this.nextId++}`,type:"cloud_bands_layer",effect:g,priority:0,enabled:!0};if(this.effects.set(S.id,S),n.push(S),s.polar_hexagon&&s.polar_hexagon.enabled){const M=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,I=new Et({planetColor:c,hexagonData:s.polar_hexagon,planetRadius:t,currentTime:M}),P={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:I,priority:10,enabled:!0};this.effects.set(P.id,P),n.push(P),o&&I.addToScene(o)}}break;case"aquifer":console.log("🌊 Processing Aquifer planet with surface data:",s),console.log("🌊 Surface.clouds:",s.clouds);const u=Xt(this.layerSystem,e);if(u){const g={id:`effect_${this.nextId++}`,type:"aquifer_water",effect:u,priority:2,enabled:!0,name:"Aquifer Water Surface"};this.effects.set(g.id,g),n.push(g),console.log("🌊 AquiferWater effect added for aquifer planet")}const f=So(this.layerSystem,e);if(f){const g={id:`effect_${this.nextId++}`,type:"ocean_currents",effect:f,priority:1,enabled:!0,name:"Ocean Currents"};this.effects.set(g.id,g),n.push(g),console.log("🌊 Ocean Currents effect added for aquifer planet")}if(s.clouds&&s.clouds.length>0){const g=Ve(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),S={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:g,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(S.id,S),n.push(S),g.addToScene(o,i.position),console.log("☁️ Atmospheric Clouds added to Aquifer planet")}if(s.land_masses&&s.land_masses.length>0){const g=gt(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+7e3);if(g){const S={id:`effect_${this.nextId++}`,type:"land_masses",effect:g,priority:3,enabled:!0,name:"Emergent Land Masses"};this.effects.set(S.id,S),n.push(S),g.addToScene(o,i.position)}}if(s.atmosphere_clouds&&s.atmosphere_clouds.length>0){const g=Ve(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+8e3);if(g){const S={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:g,priority:4,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(S.id,S),n.push(S),g.addToScene(o,i.position)}}break;case"nebulous":if(this.layerSystem){const g=Ht(this.layerSystem,{...s,base_color:c,storm_intensity:s.nebula_density||.6,color_variance:s.color_variance||.2},(e.seeds?.shape_seed||e.seeds?.planet_seed)+2e3),S={id:`effect_${this.nextId++}`,type:"cloud_gyros_layer",effect:g,priority:0,enabled:!0};if(this.effects.set(S.id,S),n.push(S),s.polar_hexagon&&s.polar_hexagon.enabled){const M=e.timing?.elapsed_time?e.timing.elapsed_time/31557600:0,I=new Et({planetColor:c,hexagonData:s.polar_hexagon,planetRadius:t,currentTime:M}),P={id:`effect_${this.nextId++}`,type:"polar_hexagon",effect:I,priority:10,enabled:!0};this.effects.set(P.id,P),n.push(P),o&&I.addToScene(o)}}break;case"metallic":case"metallic_3d":if(this.layerSystem){const g=fo(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),S={id:`effect_${this.nextId++}`,type:"metallic_surface_layer",effect:g,priority:0,enabled:!0};this.effects.set(S.id,S),n.push(S)}break;case"rocky":if(this.layerSystem){const g=co(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),S={id:`effect_${this.nextId++}`,type:"rocky_terrain_layer",effect:g,priority:0,enabled:!0};if(this.effects.set(S.id,S),n.push(S),s.clouds&&s.clouds.length>0){const M=Ve(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),I={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:M,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(I.id,I),n.push(I),M.addToScene(o,i.position)}}break;case"icy":if(this.layerSystem){const g=mo(this.layerSystem,e,e.seeds?.shape_seed||e.seeds?.planet_seed),S={id:`effect_${this.nextId++}`,type:"icy_terrain_layer",effect:g,priority:0,enabled:!0};this.effects.set(S.id,S),n.push(S);const M=oo(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+8e3);if(M){const P={id:`effect_${this.nextId++}`,type:"transparent_land_masses",effect:M,priority:1,enabled:!0,name:"Ice Formations"};this.effects.set(P.id,P),n.push(P),M.addToScene(o,i.position),console.log("🧊 Ice Formations (transparent LandMasses) added to Icy planet")}else console.warn("❄️ Failed to create transparent LandMasses for Icy planet");if(s.clouds&&s.clouds.length>0){const P=Ve(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),D={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:P,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(D.id,D),n.push(D),P.addToScene(o,i.position),console.log("☁️ Atmospheric Clouds added to Icy planet")}const I=Yt(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(I){const P={id:`effect_${this.nextId++}`,type:"icy_features",effect:I,priority:2,enabled:!0,name:"Ice Crystals & Features"};this.effects.set(P.id,P),n.push(P),I.addToScene(o,i.position),console.log("❄️ Icy Features (crystals, cracks, ice caps) added to Icy planet")}}break;case"oceanic":const p=qt(t,e);if(p){const g={id:`effect_${this.nextId++}`,type:"fluid_layers",effect:p,priority:3,enabled:!0,name:"Fluid Ocean Layers"};this.effects.set(g.id,g),n.push(g),p.addToScene(o,i.position),console.log("🌊 FluidLayers effect added for oceanic planet")}if(s.green_patches&&s.green_patches.length>0){const g=gt(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(g){const S={id:`effect_${this.nextId++}`,type:"land_masses",effect:g,priority:5,enabled:!0,name:"Land Masses (Islands)"};this.effects.set(S.id,S),n.push(S),g.addToScene(o,i.position)}}if(s.clouds&&s.clouds.length>0){const g=Ve(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),S={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:g,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(S.id,S),n.push(S),g.addToScene(o,i.position)}break;case"tundra":if(s.green_patches&&s.green_patches.length>0){const g=gt(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+6e3);if(g){const S={id:`effect_${this.nextId++}`,type:"land_masses",effect:g,priority:5,enabled:!0,name:"Tundra Terrain"};this.effects.set(S.id,S),n.push(S),g.addToScene(o,i.position),console.log("🏔️ Tundra terrain (LandMasses) added")}}const v=Yt(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+9e3);if(v){const g={id:`effect_${this.nextId++}`,type:"icy_features",effect:v,priority:6,enabled:!0,name:"Snow Patches & Ice"};this.effects.set(g.id,g),n.push(g),v.addToScene(o,i.position),console.log("❄️ Sparse ice features added to Tundra planet")}if(s.clouds&&s.clouds.length>0){const g=Ve(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+4e3),S={id:`effect_${this.nextId++}`,type:"atmosphere_clouds",effect:g,priority:15,enabled:!0,name:"Atmospheric Clouds"};this.effects.set(S.id,S),n.push(S),g.addToScene(o,i.position),console.log("☁️ Atmospheric clouds added to Tundra planet")}const b=Gt(t,s,(e.seeds?.shape_seed||e.seeds?.planet_seed)+15e3);if(b){const g={id:`effect_${this.nextId++}`,type:"tundra_snowflakes",effect:b,priority:20,enabled:!0,name:"Snowflakes"};this.effects.set(g.id,g),n.push(g),b.addToScene(o,i.position),console.log("❄️ Tundra snowflakes added to Tundra planet")}break;case"anomaly":console.log("🌌 DETECTED ANOMALY PLANET - Creating effects"),console.log("🌌 Planet data:",{surfaceType:s.type,planetType:e.planet_info?.type}),console.log("🎭 SHOWCASE MODE: Activating ALL anomaly effects for evaluation");const y=["anomaly_phase_matter","pulsating_cube"],x=e.seeds?.planet_seed||Math.floor(Math.random()*1e6),O=y.length;for(let g=0;g<O;g++){const S=y[g],M=x+g*1e4,I=this.createEffectFromPythonData(S,{...e,seeds:{...e.seeds,planet_seed:M}},t,i,10+g);I&&(I.name=S.replace(/_/g," ").replace(/\b\w/g,P=>P.toUpperCase()),n.push(I),I.effect.addToScene&&I.effect.addToScene(o,i.position),console.log(`🎭 Added anomaly effect: ${I.name}`))}if(e.atmosphere&&e.atmosphere.type!=="None"){const g=this.createEffectFromPythonData("atmosphere",e.atmosphere,t,i,5);g&&(n.push(g),g.effect.addToScene(o,i.position),console.log("🌫️ Anomalous atmosphere added"))}break;default:if(e.planet_info?.type?.toLowerCase()==="anomaly"){console.log("🌌 DETECTED ANOMALY PLANET via planet_info.type - Creating effects"),console.log("🎭 SHOWCASE MODE (alt detection): Activating ALL anomaly effects for evaluation");const S=["anomaly_phase_matter","pulsating_cube"],M=e.seeds?.planet_seed||Math.floor(Math.random()*1e6),I=S.length;for(let P=0;P<I;P++){const D=S[P],U=M+P*1e4,w=this.createEffectFromPythonData(D,{...e,seeds:{...e.seeds,planet_seed:U}},t,i,10+P);w&&(w.name=D.replace(/_/g," ").replace(/\b\w/g,V=>V.toUpperCase()),n.push(w),w.effect.addToScene&&w.effect.addToScene(o,i.position),console.log(`🎭 Added anomaly effect: ${w.name}`))}if(e.atmosphere&&e.atmosphere.type!=="None"){const P=this.createEffectFromPythonData("atmosphere",e.atmosphere,t,i,5);P&&(n.push(P),P.effect.addToScene(o,i.position),console.log("🌫️ Anomalous atmosphere added"))}}else if(i.material instanceof Xe){const g=He(e);i.material.color.copy(g)}break}}else if(i.material instanceof Xe){const s=He(e);i.material.color.copy(s)}const d=e.planet_info?.type?.toLowerCase()||e.surface_elements?.type?.toLowerCase(),l=d==="anomaly"||e.surface_elements?.type==="anomaly";if(e.atmosphere&&!l){if(e.atmosphere.streaks||["Gas Giant","Frozen Gas Giant"].includes(e.planet_info?.type)){const s=Wt(t,e.atmosphere||{},e.seeds?.shape_seed+2e3);if(s){const u={id:`effect_${this.nextId++}`,type:"atmosphere_glow",effect:s,priority:20,enabled:!0};this.effects.set(u.id,u),n.push(u),s.addToScene(o,i.position)}}if(e.atmosphere.type&&e.atmosphere.type!=="None"){const s={...e.atmosphere};d==="oceanic"&&(s.opacity=Math.min(s.opacity||.3,.15),s.width=Math.min(s.width||15,8));const u=this.createEffectFromPythonData("atmosphere",s,t,i,5);u&&(n.push(u),u.effect.addToScene(o,i.position))}}if(e.rings&&e.rings.has_rings||["Gas Giant","Frozen Gas Giant","Super Earth"].includes(e.planet_info?.type)){const s=this.createEffectFromPythonData("ring_system",e,t,i,1);s?(n.push(s),s.effect.addToScene(o,i.position)):console.warn("⚠️ Failed to create ring effect")}if(e.surface_elements?.has_fragmentation_zones){const s=this.createEffectFromPythonData("fragmentation",e,t,i,5);s&&(n.push(s),s.effect.addToScene(o,i.position))}this.layerSystem&&this.layerSystem.addToScene(o);try{const s=this.createEffectFromPythonData("star_field",e,t,i,-100);s&&s.effect&&(s.effect.addToScene(o,i.position),n.push(s),console.log("⭐ StarField added automatically using planet seed:",e.seeds?.planet_seed))}catch(s){console.warn("Could not create StarField:",s)}return n.forEach((s,u)=>{}),n.length===0&&console.warn("⚠️ NO EFFECTS WERE CREATED! Check the data structure and conditions."),n}catch(c){throw console.error("Error in EffectRegistry.createEffectsFromPythonPlanetData:",c),c}}getEffect(e){return this.effects.get(e)||null}getEffectsByType(e){return Array.from(this.effects.values()).filter(t=>t.type===e)}getAllEffects(){return Array.from(this.effects.values())}toggleEffect(e,t){const i=this.effects.get(e);if(i){i.enabled=t!==void 0?t:!i.enabled;const o=i.effect;if(o&&o.getObject3D){const a=o.getObject3D();a&&(a.visible=i.enabled,console.log(`🎮 Toggle effect ${i.type}: visible = ${i.enabled}`))}if(this.layerSystem){const a=this.layerSystem.getLayerMeshes(),c={cloud_bands_layer:"cloudBands",cloud_gyros_layer:"cloudGyros",metallic_surface_layer:"metallicSurface",rocky_terrain_layer:"rockyTerrain",icy_terrain_layer:"icyTerrain",aquifer_water:"aquiferWater",ocean_currents:"oceanCurrents"}[i.type];c&&a[c]&&(a[c].visible=i.enabled)}}else console.warn(`⚠️ Effect not found: ${e}`)}updateAllEffects(e,t){this.layerSystem&&this.layerSystem.update(e,t);for(const i of this.effects.values())if(i.enabled&&i.effect.update)try{i.effect.update(e,t)}catch(o){console.error(`Error updating effect ${i.type}:`,o)}}updateLightForAllEffects(e){console.log("🔆 updateLightForAllEffects called with light position:",e.position),this.layerSystem&&this.layerSystem.updateFromThreeLight(e),console.log("🔆 Checking",this.effects.size,"effects for light updates");for(const t of this.effects.values())if(console.log(`🔆 Effect ${t.type}, enabled: ${t.enabled}, hasUpdateFromThreeLight: ${!!t.effect.updateFromThreeLight}`),t.enabled&&t.effect.updateFromThreeLight)try{console.log(`🔆 Updating light for effect: ${t.type}`),t.effect.updateFromThreeLight(e)}catch(i){console.error(`Error updating light for effect ${t.type}:`,i)}}removeEffect(e){const t=this.effects.get(e);t&&(t.effect.dispose&&t.effect.dispose(),this.effects.delete(e))}clearAllEffects(){this.layerSystem&&(this.layerSystem.dispose(),this.layerSystem=void 0);for(const e of this.effects.values())e.effect.dispose&&e.effect.dispose();this.effects.clear(),this.nextId=1}getStats(){const e=Array.from(this.effects.values());return{registeredTypes:this.creators.size,activeEffects:e.length,enabledEffects:e.filter(t=>t.enabled).length}}getAvailableEffectTypes(){return Array.from(this.creators.keys())}}const Le=$e.getInstance(),Ge={atmosphere:{type:"Thin",width:12,opacity:.2,density:1},cloud_bands:{numBands:8,animationSpeed:1,turbulence:.5},cloud_gyros:{stormIntensity:.8,spiralSpeed:2,animationSpeed:1},atmosphere_glow:{particleCount:500,speed:.4,size:1,opacity:1}};function wo(r){const e=[];switch(r.toLowerCase()){case"metallic":e.push({type:"atmosphere",params:{...Ge.atmosphere,color:[.6,.1,.9,.2]},priority:10},{type:"atmospheric_streaks",params:{color:[.95,.95,1],particleCount:100},priority:20});break;case"gas giant":e.push({type:"cloud_bands",params:Ge.cloud_bands,priority:0},{type:"cloud_gyros",params:Ge.cloud_gyros,priority:1},{type:"atmosphere",params:{...Ge.atmosphere,color:[1,.6,.2,.2]},priority:10},{type:"atmosphere_glow",params:Ge.atmosphere_glow,priority:20});break;case"icy":e.push({type:"atmosphere",params:{...Ge.atmosphere,color:[.5,.8,1,.15]},priority:10});break;default:e.push({type:"atmosphere",params:{color:[.5,.5,.8,.15]},priority:10});break}return e}const Ae={log:(r,e)=>{},warn:(r,e)=>{console.warn(`[Effects] ${r}`,e||"")},error:(r,e)=>{console.error(`[Effects] ${r}`,e||"")},debug:(r,e)=>{}};new Date().toISOString();const Co=({planetData:r,showInConsole:e=!0,showInPage:t=!1})=>{const[i,o]=N.useState([]),[a,n]=N.useState({});N.useEffect(()=>{if(!r)return;const l=c(r);n(l),o(d(r)),typeof window<"u"&&(window.__DEBUG_PLANET_DATA=r,window.__DEBUG_PLANET_ANALYSIS=l)},[r,e]);function c(l){const s={hasValidStructure:!1,missingFields:[],dataIntegrity:"unknown",renderingIssues:[],colorConsistency:"unknown"};if(l.planet_info&&l.surface_elements?s.hasValidStructure=!0:(l.planet_info||s.missingFields.push("planet_info"),l.surface_elements||s.missingFields.push("surface_elements")),l.surface_elements?.type==="oceanic"&&(s.oceanicData={hasAbstractLands:!!l.surface_elements.abstract_lands?.length,numGreenPatches:l.surface_elements.green_patches?.length||0,numClouds:l.surface_elements.clouds?.length||0,hasDepths:l.surface_elements.depths?.enabled||!1,baseColorIsBlue:l.planet_info?.base_color==="#0000FF",greenPatchColor:l.surface_elements.green_patches?.[0]?.color,issues:[]},s.oceanicData.numGreenPatches>15&&s.oceanicData.issues.push("Muchos parches verdes pueden ocultar el océano azul"),s.oceanicData.baseColorIsBlue||s.oceanicData.issues.push(`Color base no es azul puro: ${l.planet_info?.base_color}`),s.renderingIssues=s.oceanicData.issues),l.planet_info?.base_color&&l.planet_info?.type){const f={Oceanic:"#0000FF",Rocky:"#808080",Icy:"#ADD8E6",Desert:"#FFD700",Lava:"#FF0000"}[l.planet_info.type];f&&l.planet_info.base_color!==f?s.colorConsistency=`Inconsistente: esperado ${f}, recibido ${l.planet_info.base_color}`:s.colorConsistency="Correcto"}return s}function d(l){const s=[];if(!l.surface_elements?.type)return["No surface type defined"];const u=l.surface_elements.type.toLowerCase();switch(u){case"oceanic":s.push("OceanWavesEffect (PROBLEMA: ignora green_patches de Python)");break;case"rocky":s.push("RockyTerrainEffect");break;case"icy":s.push("IcyTerrainEffect");break;case"gas giant":s.push("GasGiantBandsEffect");break;default:s.push(`Generic effect for type: ${u}`)}return l.atmosphere?.density>0&&s.push("AtmosphericEffect"),l.rings&&s.push("RingSystemEffect"),s}return t?h.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.9)",color:"#00ff00",padding:"10px",borderRadius:"5px",fontFamily:"monospace",fontSize:"12px",maxWidth:"400px",maxHeight:"600px",overflow:"auto",zIndex:1e4,border:"1px solid #00ff00"},children:[h.jsxs("h3",{style:{margin:"0 0 10px 0",color:"#00ff00"},children:["🔍 Planet Debug: ",r.planet_info?.name]}),h.jsxs("div",{style:{marginBottom:"10px"},children:[h.jsx("strong",{children:"Type:"})," ",r.planet_info?.type,h.jsx("br",{}),h.jsx("strong",{children:"Base Color:"})," ",r.planet_info?.base_color,h.jsx("br",{}),h.jsx("strong",{children:"Radius:"})," ",r.planet_info?.radius]}),r.surface_elements?.type==="oceanic"&&h.jsxs("div",{style:{marginBottom:"10px",borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[h.jsx("strong",{children:"🌊 Oceanic Data:"}),h.jsx("br",{}),h.jsxs("span",{style:{color:a.oceanicData?.baseColorIsBlue?"#00ff00":"#ff0000"},children:["Base Color: ",a.oceanicData?.baseColorIsBlue?"✓ Blue":"✗ Not Blue"]}),h.jsx("br",{}),"Green Patches: ",a.oceanicData?.numGreenPatches,h.jsx("br",{}),"Clouds: ",a.oceanicData?.numClouds,h.jsx("br",{}),"Has Depths: ",a.oceanicData?.hasDepths?"Yes":"No",h.jsx("br",{}),a.oceanicData?.issues?.length>0&&h.jsxs("div",{style:{color:"#ffaa00",marginTop:"5px"},children:["⚠️ Issues:",h.jsx("br",{}),a.oceanicData.issues.map((l,s)=>h.jsxs("div",{children:["- ",l]},s))]})]}),h.jsxs("div",{style:{borderTop:"1px solid #00ff00",paddingTop:"10px"},children:[h.jsx("strong",{children:"🎨 Effects Applied:"}),h.jsx("br",{}),i.map((l,s)=>h.jsxs("div",{style:{color:l.includes("PROBLEMA")?"#ff0000":"#00ff00"},children:["- ",l]},s))]}),h.jsx("button",{style:{marginTop:"10px",background:"#00ff00",color:"#000",border:"none",padding:"5px 10px",cursor:"pointer",borderRadius:"3px"},children:"Log to Console"})]}):null};function To(r){N.useEffect(()=>{if(r&&r.surface_elements?.type==="oceanic"){r.surface_elements.green_patches?.length>0;const e=r.planet_info?.base_color;e!=="#0000FF"&&console.warn("⚠️ Planeta oceánico sin color azul base!",e)}},[r])}const yt=2.5,Kt=()=>{const r=45*Math.PI/180;return yt/(Math.tan(r/2)*.5)},Mo=({planetName:r,containerClassName:e="",width:t=800,height:i=600,autoRotate:o=!0,enableControls:a=!0,showDebugInfo:n=!1,planetData:c,cosmicOriginTime:d,initialAngleRotation:l,onDataLoaded:s,onEffectsCreated:u,onError:f})=>{const p=N.useRef(null),v=N.useRef(null),b=N.useRef(null),C=N.useRef(null),y=N.useRef(null),x=N.useRef(null),O=N.useRef(new Ai),g=N.useRef(null),S=N.useRef(0),M=N.useRef(null),[I,P]=N.useState(!0),[D,U]=N.useState(null),[w,V]=N.useState(null),[W,G]=N.useState([]),[ee,Z]=N.useState({activeEffects:0,enabledEffects:0,frameRate:0,renderTime:0}),K=N.useRef([]),R=N.useRef(0),F=N.useRef(null),z=N.useRef(null),q=Math.floor(Date.now()/1e3),[ie,pe]=N.useState(0),oe=d||w?.timing?.cosmic_origin_time||Date.now()/1e3-3600,ge=q-oe+ie;S.current=ge;const ye=N.useCallback(()=>{if(!p.current||!b.current||!C.current)return;const _=p.current,A=_.clientWidth||400,E=_.clientHeight||400;b.current.setSize(A,E),C.current.aspect=A/E,C.current.updateProjectionMatrix()},[]),Ee=async _=>{if(!(!y.current||!v.current||!z.current)){Ae.log("Applying modular effects from API data",{planet:_.planet_info.name,type:_.planet_info.type});try{Ne();const A=He(_);z.current.updateBaseColor(A);const E=Le.createEffectsFromPythonPlanetData(_,yt,y.current,v.current,z.current);console.log(`Planet: ${_.planet_info?.name}, Effects:`,E.map(L=>L.type)),G(E),K.current=E,u&&u(E),Ae.log(`Successfully applied ${E.length} modular effects`),tt()}catch(A){Ae.error("Error applying modular effects",A),Ye()}}},xe=N.useCallback(()=>{if(!p.current)return!1;try{for(;p.current.firstChild;)p.current.removeChild(p.current.firstChild);v.current=null,C.current=null,b.current=null,y.current=null,le.current=null;const _=p.current,A=_.clientWidth||t||400,E=_.clientHeight||i||400,L=new Ri;L.background=new m(1297),v.current=L;const ae=new Di(45,A/E,.1,1e4),X=Kt();ae.position.set(0,0,X),ae.lookAt(0,0,0),C.current=ae;const Y=new Li({antialias:!0,alpha:!0,powerPreference:"high-performance"});return Y.setSize(A,E),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.shadowMap.enabled=!0,Y.shadowMap.type=Oi,Y.toneMapping=zi,Y.toneMappingExposure=1.2,Y.outputColorSpace=Fi,p.current.appendChild(Y.domElement),b.current=Y,Je(L,null),et(L),a&&mt(ae,Y.domElement),!0}catch(_){return console.error("Error initializing Three.js:",_),!1}},[w,c,d]),Me=_=>{if(!_)return 0;const A=_.sun_angle||_.lighting?.sun_angle;if(A!==void 0)return A;const E=_.timing?.current_orbital_angle||_.timing?.orbital_angle;return E??0},he=N.useRef(null),Re=N.useRef(null),Pe=N.useRef(null),le=N.useRef(null),De=_=>{_.castShadow=!0,_.shadow.mapSize.width=2048,_.shadow.mapSize.height=2048,_.shadow.camera.near=.5,_.shadow.camera.far=50,_.shadow.camera.left=-10,_.shadow.camera.right=10,_.shadow.camera.top=10,_.shadow.camera.bottom=-10},je=_=>{if(!he.current||!v.current)return;const A=Me(_),E=10,L=A+Math.PI,ae=Math.sin(A)*5,X=E*Math.cos(L),Y=ae,Ue=E*Math.sin(L);he.current.position.set(X,Y,Ue),he.current.target.position.set(0,0,0),v.current.children.includes(he.current.target)||v.current.add(he.current.target),Re.current&&Re.current.position.set(-X*.5,0,-Ue*.5),z.current&&he.current&&z.current.updateFromThreeLight(he.current),he.current&&Le.updateLightForAllEffects(he.current)},Je=(_,A)=>{{const E=new jt(16777215,2);E.position.set(-10,5,10),E.target.position.set(0,0,0),E.castShadow=!0,De(E),_.add(E),_.add(E.target),he.current=E;const L=new jt(16777215,.05);L.position.set(8,-3,-5),_.add(L),Re.current=L;const ae=new ji(2236996,.1);_.add(ae),setTimeout(()=>{z.current&&E&&z.current.updateFromThreeLight(E),E&&Le.updateLightForAllEffects(E)},50);return}},et=_=>{const A=new ht(yt,128,64),E=new ii({color:8421504}),L=new be(A,E);L.castShadow=!0,L.receiveShadow=!0,L.position.set(0,0,0),_.add(L),y.current=L;const ae=new m(8421504);z.current=new rt(L,ae),z.current.addToScene(_)},mt=(_,A)=>{const E=new Wi(_,A);E.enableDamping=!0,E.dampingFactor=.05;const L=Kt();E.minDistance=L*.5,E.maxDistance=L*2,E.autoRotate=o,E.autoRotateSpeed=.5,E.enablePan=!0,E.enableZoom=!0,E.target.set(0,0,0),x.current=E},ke=N.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{P(!0),U(null),Ae.log("Loading planet data from API",{planetName:r});const A=await fetch("/api/planet/rendering-data");if(!A.ok)throw new Error(`HTTP error! status: ${A.status}`);const E=await A.json();if(!E.success)throw new Error(E.error||"Failed to fetch planet data");const L=E.planet_data,ae=E.timing,X=E.rendering_data,Y={planet_info:X?.planet_info||{name:L.name,type:L.planet_type,base_color:"#808080",radius:L.diameter/15e3,orbital_radius:L.orbital_radius},surface_elements:X?.surface_elements,atmosphere:X?.atmosphere,rings:X?.rings,effects_3d:X?.effects_3d,shader_uniforms:X?.shader_uniforms,universal_actions:X?.universal_actions,timing:{cosmic_origin_time:ae.cosmic_origin_time,current_time_seconds:ae.current_time_seconds,elapsed_time:ae.elapsed_time,initial_orbital_angle:L.initial_orbital_angle,current_orbital_angle:L.current_orbital_angle,max_orbital_radius:ae.max_orbital_radius,system_max_orbital_radius:L.system_max_orbital_radius},original_planet_data:L,seeds:X?.seeds};return V(Y),M.current=Y,Ae.log("API data loaded successfully",{planet:Y.planet_info.name,type:Y.planet_info.type,hasEffects:!!Y.surface_elements,fullRenderingData:X}),s&&s(Y),Y}catch(_){const A=_ instanceof Error?_.message:"Unknown error";return U(A),f&&f(A),null}finally{P(!1),window.isLoadingPlanetData=!1}}},[r,s,f]);N.useCallback(async()=>{if(!window.isLoadingPlanetData){window.isLoadingPlanetData=!0;try{P(!0),U(null),Ae.log("Loading planet data from API",{planetName:r});const A=await fetch("/api/planet/rendering-data");if(!A.ok)throw new Error(`HTTP error! status: ${A.status}`);const E=await A.json();if(!E.success)throw new Error(E.error||"Failed to fetch planet data");const L=E.planet_data,ae=E.timing,X=E.rendering_data,Y={planet_info:X?.planet_info||{name:L.name,type:L.planet_type,base_color:"#808080",radius:L.diameter/15e3,orbital_radius:L.orbital_radius},surface_elements:X?.surface_elements,atmosphere:X?.atmosphere,rings:X?.rings,effects_3d:X?.effects_3d,shader_uniforms:X?.shader_uniforms,universal_actions:X?.universal_actions,timing:{cosmic_origin_time:ae.cosmic_origin_time,current_time_seconds:ae.current_time_seconds,elapsed_time:ae.elapsed_time,initial_orbital_angle:L.initial_orbital_angle,current_orbital_angle:L.current_orbital_angle,max_orbital_radius:ae.max_orbital_radius,system_max_orbital_radius:L.system_max_orbital_radius},original_planet_data:L,seeds:X?.seeds};V(Y),M.current=Y,Ae.log("API data loaded successfully",{planet:Y.planet_info.name,type:Y.planet_info.type,hasEffects:!!Y.surface_elements,fullRenderingData:X}),je(Y),le.current&&v.current&&(v.current.remove(le.current),le.current.geometry.dispose(),le.current.material.dispose(),le.current=null),await Ee(Y),s&&s(Y)}catch(_){const A=_ instanceof Error?_.message:"Unknown error";U(A),f&&f(A),Ye()}finally{P(!1),window.isLoadingPlanetData=!1}}},[r,c,d,l]);const Oe=N.useCallback(()=>{if(!w||!y.current)return;const _=c?.orbital_period_seconds||365.25*24*3600,A=2*Math.PI/_,E=w.timing?.initial_orbital_angle||0,L=Date.now()/1e3,ae=0,X=d||w.timing?.cosmic_origin_time||Date.now()/1e3-3600,Y=L-X+ae,Ue=(E+Y*A)%(2*Math.PI),St=w.timing?.max_orbital_radius||100,ft=20+w.planet_info?.orbital_radius/St*80,di=ft,hi=ft*Math.cos(Ue),mi=di*Math.sin(Ue);y.current.position.x=hi,y.current.position.z=mi,y.current.position.y=0},[w,c,d]),bt=N.useCallback(async _=>{const A=_||w;if(A&&v.current)try{je(A),le.current&&v.current&&(v.current.remove(le.current),le.current.geometry.dispose(),le.current.material.dispose(),le.current=null),await Ee(A)}catch(E){Ae.error("Error in applyProceduralShadersFromAPI:",E),Ye()}},[w]),Ye=()=>{if(!(!v.current||!y.current)){Ae.warn("Applying fallback effects for planet type:",c?.planet_type);try{Ne(),y.current.material instanceof Xe&&y.current.material.color.setHex(6710886);try{const _=wo("generic"),A=Le.createEffectsFromList(_,yt,y.current);A.forEach(E=>{E.effect.addToScene&&v.current&&y.current&&E.effect.addToScene(v.current,y.current.position)}),K.current=A,G(A)}catch(_){console.warn("Could not create fallback effects, using basic material only:",_)}tt()}catch(_){Ae.error("Error applying fallback effects",_)}}},Ne=()=>{Le.clearAllEffects(),K.current.forEach(_=>{try{_.effect.dispose&&_.effect.dispose()}catch{}}),K.current=[],G([])},ut=N.useCallback(()=>{g.current=requestAnimationFrame(ut);const _=performance.now(),A=O.current.getDelta();x.current&&x.current.update();try{Le.updateAllEffects(A,y.current?.rotation.y)}catch{}if(y.current&&M.current){M.current.planet_info?.name;const E=M.current.original_planet_data,L=E?.orbital_period_seconds||365.25*24*3600,ae=M.current.timing?.initial_orbital_angle||0;d||M.current.timing?.cosmic_origin_time||Date.now()/1e3-3600;const X=E?.axial_tilt||0,Y=2*Math.PI/L;(ae+S.current*Y)%(2*Math.PI);const Ue=M.current.timing?.max_orbital_radius||M.current.timing?.system_max_orbital_radius,St=E?.orbital_radius;if(!Ue||!St)return;E?.eccentricity_factor,y.current.position.set(0,0,0);const Ot=E?.rotation_period_seconds||86400,ft=2*Math.PI/Ot;y.current.rotation.y=S.current*ft%(2*Math.PI),y.current.rotation.z=X*(Math.PI/180)}if(K.current.forEach(E=>{E.effect.updateUniforms&&E.effect.updateUniforms(A)}),b.current&&v.current&&C.current){const E=performance.now();b.current.render(v.current,C.current);const L=performance.now()-E;if(_-R.current>5e3){const ae=1e3/(_-R.current);tt(),Z(X=>({...X,frameRate:Math.round(ae),renderTime:Math.round(L*100)/100})),R.current=_}}},[]),tt=N.useCallback(()=>{const _=Le.getStats();Z(A=>({...A,activeEffects:_.activeEffects,enabledEffects:_.enabledEffects}))},[]);return N.useEffect(()=>{let _=!0;return window.tonnirLoggedInPlanet=!1,window.orbitChecked=!1,window.debugOrbitRadius=null,window.debugSystemMaxRadius=null,window.planetNameLogged=!1,window.timingDataLogged=!1,window.isLoadingPlanetData=!1,window.orbitalAngleSourceLogged=!1,window.orbitalAngleDebugged=!1,window.positionDebugged=!1,window.animationLoopDebugged=!1,(async()=>{try{if(!_)return;const E=await ke();if(!_)return;if(!xe()){_&&U("Failed to initialize 3D renderer");return}if(!_||(ut(),p.current&&"ResizeObserver"in window&&(F.current=new ResizeObserver(ye),F.current.observe(p.current)),window.addEventListener("resize",ye),!_))return;E?await bt(E):Ye()}catch(E){_&&U(E instanceof Error?E.message:"Unknown initialization error")}})(),()=>{if(_=!1,M.current=null,g.current&&cancelAnimationFrame(g.current),F.current&&F.current.disconnect(),window.removeEventListener("resize",ye),Ne(),z.current&&(z.current.dispose(),z.current=null),x.current&&x.current.dispose(),Pe.current&&v.current&&(v.current.remove(Pe.current),Pe.current.geometry.dispose(),Pe.current.material.dispose(),Pe.current=null),le.current&&v.current&&(v.current.remove(le.current),le.current.geometry.dispose(),le.current.material.dispose(),le.current=null),b.current&&p.current)try{p.current.contains(b.current.domElement)&&p.current.removeChild(b.current.domElement),b.current.dispose()}catch{}}},[]),N.useEffect(()=>{const _=setInterval(()=>{const A=Le.getStats();Z(E=>({...E,activeEffects:A.activeEffects,enabledEffects:A.enabledEffects}))},1e4);return()=>clearInterval(_)},[]),N.useEffect(()=>{w&&v.current&&y.current&&Oe()},[w,Oe]),To(w),h.jsxs("div",{className:`relative ${e}`,children:[n&&w&&h.jsx(Co,{planetData:w,showInPage:!0,showInConsole:!0}),h.jsx("div",{ref:p,className:"w-full h-full",style:{minHeight:"300px",aspectRatio:"1"}}),I&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:h.jsxs("div",{className:"text-white text-center",children:[h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"}),h.jsx("div",{children:"Loading planet..."})]})}),D&&h.jsxs("div",{className:"absolute top-0 left-0 right-0 p-2 bg-red-500 text-white text-sm",children:[h.jsx("strong",{children:"Error:"})," ",D]}),w&&!I&&h.jsxs("div",{className:"absolute bottom-0 left-0 p-4 text-white bg-black bg-opacity-50 max-w-xs",children:[h.jsx("h3",{className:"text-lg font-bold",children:w.planet_info.name}),h.jsx("p",{className:"text-sm opacity-80",children:w.planet_info.type}),h.jsxs("p",{className:"text-xs mt-1 opacity-60",children:[W.length," effects active"]}),w.surface_elements?.description&&h.jsx("p",{className:"text-xs mt-2 opacity-60",children:w.surface_elements.description.appearance})]}),n&&h.jsxs("div",{className:"absolute top-0 right-0 p-4 text-white bg-black bg-opacity-70 text-xs font-mono",children:[h.jsx("h4",{className:"font-bold mb-2",children:"Debug Info"}),h.jsxs("div",{children:["Frame Rate: ",ee.frameRate," FPS"]}),h.jsxs("div",{children:["Render Time: ",ee.renderTime,"ms"]}),h.jsxs("div",{children:["Active Effects: ",ee.activeEffects]}),h.jsxs("div",{children:["Enabled Effects: ",ee.enabledEffects]}),h.jsxs("div",{className:"mt-2",children:[h.jsx("div",{className:"font-semibold",children:"Effects:"}),W.map(_=>h.jsxs("div",{className:"ml-2",children:[_.type," (",_.enabled?"ON":"OFF",")"]},_.id))]})]})]})};class Po extends Qt.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return console.error("🚨 ErrorBoundary caught error:",e),console.error("🚨 Error stack:",e.stack),{hasError:!0,error:e.message}}componentDidCatch(e,t){console.error("🚨 componentDidCatch:",e,t)}render(){return this.state.hasError?h.jsx("div",{className:"flex items-center justify-center w-full h-full bg-gray-900/50 rounded",children:h.jsxs("div",{className:"text-center p-4",children:[h.jsx("div",{className:"text-red-400 text-sm mb-2",children:"3D Renderer Error"}),h.jsx("div",{className:"text-xs text-gray-400",children:this.state.error})]})}):this.props.children}}const No=r=>h.jsx(Po,{children:h.jsx(Mo,{...r})}),Io=({planetUrl:r,imageUrl:e,planet:t,cosmicOriginTime:i,initialAngleRotation:o,onEffectsCreated:a,effects:n,onToggleEffect:c})=>{const d=N.useRef(null),l=N.useRef(null),[s,u]=N.useState("Aligning Stargate..."),[f,p]=N.useState(!1),[v,b]=N.useState(!1),[C,y]=N.useState(!1),[x,O]=N.useState(!0),[g,S]=N.useState(!0),[M,I]=N.useState(null),[P,D]=N.useState(null);N.useEffect(()=>{n&&c&&n.forEach(w=>{Le.toggleEffect(w.id,w.enabled)})},[n]),N.useEffect(()=>{const w=document.createElement("style");return w.textContent=`
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
    `,document.head.appendChild(w),()=>{document.head.removeChild(w)}},[]),N.useEffect(()=>{const w=d.current;if(!w)return;const V=w.getContext("2d");if(!V)return;let W=[];const G=800;let ee,Z;const K=800;let R,F=.5;function z(){const oe=w?.parentElement;if(!oe||!w)return;const ge=oe.clientWidth,ye=oe.clientHeight;w.width=Math.min(ge,K),w.height=Math.min(ye,K),ee=w.width/2,Z=w.height/2}function q(){z(),W=[];for(let oe=0;oe<G;oe++)W.push({x:Math.random()*(w?.width||800),y:Math.random()*(w?.height||800),z:Math.random()*(w?.width||800),o:Math.random()});ie()}function ie(){!w||!V||(V.clearRect(0,0,w.width,w.height),W.forEach(oe=>{oe.z-=F,oe.z<=0&&(oe.z=w.width,oe.x=Math.random()*w.width,oe.y=Math.random()*w.height,oe.o=Math.random());const ge=w.width/oe.z,ye=(oe.x-ee)*ge+ee,Ee=(oe.y-Z)*ge+Z,xe=2*ge;V.beginPath(),V.fillStyle=`rgba(255, 255, 255, ${oe.o})`,V.arc(ye,Ee,xe,0,2*Math.PI),V.fill()}),F<60&&(F+=1),R=requestAnimationFrame(ie))}q();const pe=()=>z();return window.addEventListener("resize",pe),()=>{window.removeEventListener("resize",pe),R&&cancelAnimationFrame(R)}},[]),N.useEffect(()=>{if(e&&!x){const w=new Image;w.onload=()=>{l.current&&(l.current.src=e,b(!0),y(!0))},w.onerror=()=>{console.error("Failed to load planet image:",e),setTimeout(()=>{b(!0),y(!0)},1500)},w.src=e}else(x||!e)&&setTimeout(()=>{b(!0),y(!0)},1500)},[e,x]),N.useEffect(()=>{if(sessionStorage.getItem("stargateAnimationShown")){u("Stargate system aligned");return}sessionStorage.setItem("stargateAnimationShown","true"),p(!0);const V=(K,R)=>Array.from({length:R},()=>K[Math.floor(Math.random()*K.length)]).join(""),W=[{chars:"01",duration:40,iterations:20},{chars:"0123456789",duration:25,iterations:30},{chars:"0123456789ABCDEF",duration:20,iterations:40},{chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:\\'\",.<>?/`~",duration:10,iterations:100}];let G=0,ee=0;const Z=()=>{if(G>=W.length){const R="Stargate system aligned";let F=0;u("");const z=()=>{F<R.length?(u(R.substring(0,F+1)),F++,setTimeout(z,30)):p(!1)};z();return}const K=W[G];u(V(K.chars,32)),ee++,ee>=K.iterations&&(G++,ee=0),setTimeout(Z,K.duration)};Z()},[]);const U=()=>{O(!x),x||(b(!0),y(!0))};return h.jsxs("div",{className:"h-full flex flex-col",children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Planet Visualization"}),g&&h.jsx("div",{className:"flex items-center gap-2",children:h.jsx("button",{onClick:U,className:`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${x?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-gray-600 text-gray-200 hover:bg-gray-500"}`,children:x?"2D View":"3D View"})})]}),h.jsxs("div",{className:"relative w-full max-w-80 sm:max-w-96 aspect-square mx-auto bg-black/50 flex justify-center items-center rounded-xl overflow-hidden border-2 border-blue-400/30 mb-4",children:[h.jsx("canvas",{ref:d,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ${C?"opacity-0":"opacity-100"}`,style:{filter:C?"blur(50px)":"none"}}),x&&v&&t&&h.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${v?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:h.jsx(No,{planetName:t.name,containerClassName:"w-full h-full",autoRotate:!1,enableControls:!0,showDebugInfo:!1,onEffectsCreated:a,planetData:{name:t.name,diameter:t.diameter,density:t.density,gravity:t.gravity,mass:t.mass,orbital_radius:t.orbital_radius,orbital_period_seconds:t.orbital_period_seconds,rotation_period_seconds:t.rotation_period_seconds,surface_temperature:t.surface_temperature,axial_tilt:t.axial_tilt,planet_type:t.planet_type,atmosphere:t.atmosphere,elements:t.elements,initial_orbital_angle:t.initial_orbital_angle||0},cosmicOriginTime:i,initialAngleRotation:o,onDataLoaded:w=>{I(w)},onError:w=>{D(w),console.error("❌ Planet rendering error:",w)}})}),!x&&h.jsx("div",{className:`absolute inset-0 w-full h-full transition-all duration-500 ${v?"opacity-100 blur-0":"opacity-0 blur-[25px]"}`,children:v&&e?h.jsx("div",{className:"w-full h-full flex items-center justify-center",children:h.jsx(vi,{zoomMargin:20,classDialog:"backdrop-blur-3xl",children:h.jsx("img",{ref:l,className:"max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-blue-500/20",src:e,alt:"Planet visualization",style:{width:"100%",height:"100%",objectFit:"contain",backgroundColor:"transparent"}})})}):h.jsx("img",{ref:l,className:"w-full h-full object-cover",src:"/static/images/placeholder-min.jpg",alt:"Planet visualization"})}),g&&h.jsx("div",{className:"absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs",children:x?"🌍 3D":"🖼️ 2D"})]}),h.jsxs("div",{className:"text-center mt-auto",children:[h.jsxs("a",{href:r,className:`inline-block px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-gray-200 font-medium text-sm rounded-lg border border-slate-600 hover:border-slate-500 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${f?"animate-pulse":""}`,style:{boxShadow:"0 2px 8px rgba(0, 0, 0, 0.3)"},children:[h.jsxs("span",{className:"relative z-10 font-mono flex items-center gap-2",children:[h.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:h.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6s.792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95a1 1 0 001.715 1.029zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 14c-.304 0-.792-.193-1.264-.979a1 1 0 00-1.715 1.029C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 00-1.715-1.029C10.792 13.807 10.304 14 10 14z",clipRule:"evenodd"})}),s]}),h.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),h.jsxs("div",{className:"mt-2 text-xs text-gray-500 text-center",children:["Gateway to the stars",x&&M&&h.jsxs("div",{className:"ml-2 text-blue-400 mt-1",children:["• ",M.planet_info?.type," Planet",M.atmosphere&&h.jsx("span",{className:"text-purple-400",children:" • Atmosphere"}),M.rings?.has_rings&&h.jsx("span",{className:"text-yellow-400",children:" • Rings"})]}),x&&P&&h.jsx("div",{className:"ml-2 text-red-400 mt-1",children:"• Rendering Error"})]})]})]})},Ao=({currentPlanet:r,system:e,galaxy:t,systemPlanets:i})=>{const[o,a]=N.useState(null),[n,c]=N.useState(null),[d,l]=N.useState(!1),[s,u]=N.useState(!1),[f,p]=N.useState(!0);N.useEffect(()=>{if(i&&i.length>0){const C=i.findIndex(y=>y.name.toLowerCase()===r.toLowerCase());C!==-1?(C>0?(a(i[C-1].name.toLowerCase()),l(!0)):e.index>0?(a("__prev_system__"),l(!0)):l(!1),C<i.length-1?(c(i[C+1].name.toLowerCase()),u(!0)):(c("__next_system__"),u(!0))):(l(!1),u(!1))}else l(!1),u(!1);p(!1)},[r,e.index,i]);const v=async()=>{const C=t.coordinates.join(",");if(o==="__prev_system__")try{const y=await fetch(`/system/${e.index-1}`,{headers:{Accept:"application/json"}});if(y.ok){const x=await y.json();if(x.system&&x.system.planets&&x.system.planets.length>0){const g=x.system.planets[x.system.planets.length-1].name.toLowerCase();ot(C,e.index-1,g,x.system.planets),Ct(C,e.index-1),window.location.href=`/planet/${g}`;return}}window.location.href=`/system/${e.index-1}`}catch{window.location.href=`/system/${e.index-1}`}else o&&(ot(C,e.index,o,i),window.location.href=`/planet/${o}`)},b=async()=>{const C=t.coordinates.join(",");if(n==="__next_system__")try{const y=await fetch(`/system/${e.index+1}`,{headers:{Accept:"application/json"}});if(y.ok){const x=await y.json();if(x.system&&x.system.planets&&x.system.planets.length>0){const g=x.system.planets[0].name.toLowerCase();ot(C,e.index+1,g,x.system.planets),Ct(C,e.index+1),window.location.href=`/planet/${g}`;return}}window.location.href=`/system/${e.index+1}`}catch{window.location.href=`/system/${e.index+1}`}else n&&(ot(C,e.index,n,i),window.location.href=`/planet/${n}`)};return f?null:h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("button",{onClick:v,disabled:!d,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${d?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:h.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),h.jsx("button",{onClick:b,disabled:!s,className:`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all duration-200 ${s?"bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-300":"bg-white/5 border border-white/10 text-gray-600 cursor-not-allowed"}`,children:h.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},Ro=({planet:r,system:e,galaxy:t,planet_url:i,version:o,image_url:a,cosmic_origin_time:n,initial_angle_rotation:c})=>{const[d]=N.useState(t.coordinates.join(",")),[l,s]=N.useState([]),u=C=>{s(C)},f=(C,y)=>{s(x=>x.map(O=>O.id===C?{...O,enabled:y}:O))};N.useEffect(()=>{document.body.setAttribute("data-coordinates",d),document.body.setAttribute("data-system-index",e.index.toString()),document.body.setAttribute("data-planet-name",r.name.toLowerCase()),ot(d,e.index,r.name,e.planets||[]),Ct(d,e.index)},[d,e.index,r.name]);const p=C=>C.replace(/_/g," "),v=C=>C.replace(/_/g," "),b=C=>C.replace(/_/g," ");return h.jsxs("div",{className:"w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-auto",children:[h.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),h.jsxs("div",{className:"relative z-10",children:[h.jsx(pi,{}),h.jsxs("div",{className:"w-full px-2 sm:px-4 lg:px-6 py-4 sm:py-8",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx("div",{className:"flex items-center justify-center gap-4 mb-4",children:h.jsxs("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:["Planet '",p(r.name),"'"]})}),h.jsxs("p",{className:"text-lg sm:text-xl text-gray-300",children:["in System '",v(e.name),"' - Galaxy '",b(t.name),"'"]}),h.jsxs("p",{className:"text-sm sm:text-base text-gray-400",children:["Coordinates ",t.coordinates.join(", ")]})]}),h.jsx(Ao,{currentPlanet:r.name,system:e,galaxy:t,systemPlanets:e.planets||[]}),h.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6",children:h.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-8 relative",children:[h.jsx("div",{className:"order-1 lg:order-1",children:h.jsx(Io,{planetUrl:i,imageUrl:a,planet:r,cosmicOriginTime:n,initialAngleRotation:c,onEffectsCreated:u,effects:l,onToggleEffect:f})}),h.jsx("div",{className:"hidden lg:block absolute left-[416px] top-0 bottom-0 w-1 rounded-full bg-white/10 -translate-x-1.5"}),h.jsx("div",{className:"order-2 lg:order-2",children:h.jsx(Ui,{planet:r,system:e,galaxy:t,cosmicOriginTime:n,initialAngleRotation:c,effects:l,onToggleEffect:f})})]})}),h.jsx("div",{className:"bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 mb-8 shadow-2xl p-4 sm:p-6 text-center",children:h.jsx("button",{onClick:()=>window.location.href=`/system/${e.index}`,className:"w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm",children:h.jsxs("span",{className:"text-base sm:text-lg",children:["← Back to System '",v(e.name),"'"]})})})]}),h.jsx(ui,{version:o})]}),h.jsx(yi,{currentLocation:{type:"planet",name:r.name,coordinates:t.coordinates.join(","),systemIndex:e.index,planetName:r.name}})]})};document.addEventListener("DOMContentLoaded",async()=>{try{const r=document.getElementById("planet-data"),e=document.getElementById("system-data"),t=document.getElementById("galaxy-data"),i=document.getElementById("meta-data");if(!r||!e||!t||!i){console.error("Missing required data elements");return}const o=JSON.parse(r.textContent||"{}"),a=JSON.parse(e.textContent||"{}"),n=JSON.parse(t.textContent||"{}"),c=JSON.parse(i.textContent||"{}"),d={planet:o,system:a,galaxy:n,planet_url:c.planet_url,version:c.version,image_url:c.image_url,cosmic_origin_time:c.cosmic_origin_time,initial_angle_rotation:c.initial_angle_rotation},l=document.getElementById("atlas-react-root");l&&fi.createRoot(l).render(Qt.createElement(Ro,d))}catch(r){console.error("Error initializing Planet React app:",r)}});
