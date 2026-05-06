(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function o(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=o(u);fetch(u.href,d)}})();function Ro(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Pd={exports:{}},Js={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function kS(){if(Cv)return Js;Cv=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(l,u,d){var p=null;if(d!==void 0&&(p=""+d),u.key!==void 0&&(p=""+u.key),"key"in u){d={};for(var g in u)g!=="key"&&(d[g]=u[g])}else d=u;return u=d.ref,{$$typeof:n,type:l,key:p,ref:u!==void 0?u:null,props:d}}return Js.Fragment=a,Js.jsx=o,Js.jsxs=o,Js}var Av;function TS(){return Av||(Av=1,Pd.exports=kS()),Pd.exports}var s=TS(),$d={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function RS(){if(Ov)return xe;Ov=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.iterator;function w(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,k={};function E(A,I,ne){this.props=A,this.context=I,this.refs=k,this.updater=ne||S}E.prototype.isReactComponent={},E.prototype.setState=function(A,I){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,I,"setState")},E.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function O(){}O.prototype=E.prototype;function N(A,I,ne){this.props=A,this.context=I,this.refs=k,this.updater=ne||S}var D=N.prototype=new O;D.constructor=N,C(D,E.prototype),D.isPureReactComponent=!0;var L=Array.isArray,z={H:null,A:null,T:null,S:null,V:null},_=Object.prototype.hasOwnProperty;function M(A,I,ne,te,se,pe){return ne=pe.ref,{$$typeof:n,type:A,key:I,ref:ne!==void 0?ne:null,props:pe}}function R(A,I){return M(A.type,I,void 0,void 0,void 0,A.props)}function q(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function Q(A){var I={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(ne){return I[ne]})}var re=/\/+/g;function oe(A,I){return typeof A=="object"&&A!==null&&A.key!=null?Q(""+A.key):I.toString(36)}function ie(){}function J(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ie,ie):(A.status="pending",A.then(function(I){A.status==="pending"&&(A.status="fulfilled",A.value=I)},function(I){A.status==="pending"&&(A.status="rejected",A.reason=I)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function le(A,I,ne,te,se){var pe=typeof A;(pe==="undefined"||pe==="boolean")&&(A=null);var fe=!1;if(A===null)fe=!0;else switch(pe){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(A.$$typeof){case n:case a:fe=!0;break;case b:return fe=A._init,le(fe(A._payload),I,ne,te,se)}}if(fe)return se=se(A),fe=te===""?"."+oe(A,0):te,L(se)?(ne="",fe!=null&&(ne=fe.replace(re,"$&/")+"/"),le(se,I,ne,"",function(Pe){return Pe})):se!=null&&(q(se)&&(se=R(se,ne+(se.key==null||A&&A.key===se.key?"":(""+se.key).replace(re,"$&/")+"/")+fe)),I.push(se)),1;fe=0;var He=te===""?".":te+":";if(L(A))for(var we=0;we<A.length;we++)te=A[we],pe=He+oe(te,we),fe+=le(te,I,ne,pe,se);else if(we=w(A),typeof we=="function")for(A=we.call(A),we=0;!(te=A.next()).done;)te=te.value,pe=He+oe(te,we++),fe+=le(te,I,ne,pe,se);else if(pe==="object"){if(typeof A.then=="function")return le(J(A),I,ne,te,se);throw I=String(A),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return fe}function $(A,I,ne){if(A==null)return A;var te=[],se=0;return le(A,te,"","",function(pe){return I.call(ne,pe,se++)}),te}function ee(A){if(A._status===-1){var I=A._result;I=I(),I.then(function(ne){(A._status===0||A._status===-1)&&(A._status=1,A._result=ne)},function(ne){(A._status===0||A._status===-1)&&(A._status=2,A._result=ne)}),A._status===-1&&(A._status=0,A._result=I)}if(A._status===1)return A._result.default;throw A._result}var Y=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function V(){}return xe.Children={map:$,forEach:function(A,I,ne){$(A,function(){I.apply(this,arguments)},ne)},count:function(A){var I=0;return $(A,function(){I++}),I},toArray:function(A){return $(A,function(I){return I})||[]},only:function(A){if(!q(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},xe.Component=E,xe.Fragment=o,xe.Profiler=u,xe.PureComponent=N,xe.StrictMode=l,xe.Suspense=h,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,xe.__COMPILER_RUNTIME={__proto__:null,c:function(A){return z.H.useMemoCache(A)}},xe.cache=function(A){return function(){return A.apply(null,arguments)}},xe.cloneElement=function(A,I,ne){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var te=C({},A.props),se=A.key,pe=void 0;if(I!=null)for(fe in I.ref!==void 0&&(pe=void 0),I.key!==void 0&&(se=""+I.key),I)!_.call(I,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&I.ref===void 0||(te[fe]=I[fe]);var fe=arguments.length-2;if(fe===1)te.children=ne;else if(1<fe){for(var He=Array(fe),we=0;we<fe;we++)He[we]=arguments[we+2];te.children=He}return M(A.type,se,void 0,void 0,pe,te)},xe.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:d,_context:A},A},xe.createElement=function(A,I,ne){var te,se={},pe=null;if(I!=null)for(te in I.key!==void 0&&(pe=""+I.key),I)_.call(I,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(se[te]=I[te]);var fe=arguments.length-2;if(fe===1)se.children=ne;else if(1<fe){for(var He=Array(fe),we=0;we<fe;we++)He[we]=arguments[we+2];se.children=He}if(A&&A.defaultProps)for(te in fe=A.defaultProps,fe)se[te]===void 0&&(se[te]=fe[te]);return M(A,pe,void 0,void 0,null,se)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(A){return{$$typeof:g,render:A}},xe.isValidElement=q,xe.lazy=function(A){return{$$typeof:b,_payload:{_status:-1,_result:A},_init:ee}},xe.memo=function(A,I){return{$$typeof:v,type:A,compare:I===void 0?null:I}},xe.startTransition=function(A){var I=z.T,ne={};z.T=ne;try{var te=A(),se=z.S;se!==null&&se(ne,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(V,Y)}catch(pe){Y(pe)}finally{z.T=I}},xe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},xe.use=function(A){return z.H.use(A)},xe.useActionState=function(A,I,ne){return z.H.useActionState(A,I,ne)},xe.useCallback=function(A,I){return z.H.useCallback(A,I)},xe.useContext=function(A){return z.H.useContext(A)},xe.useDebugValue=function(){},xe.useDeferredValue=function(A,I){return z.H.useDeferredValue(A,I)},xe.useEffect=function(A,I,ne){var te=z.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(A,I)},xe.useId=function(){return z.H.useId()},xe.useImperativeHandle=function(A,I,ne){return z.H.useImperativeHandle(A,I,ne)},xe.useInsertionEffect=function(A,I){return z.H.useInsertionEffect(A,I)},xe.useLayoutEffect=function(A,I){return z.H.useLayoutEffect(A,I)},xe.useMemo=function(A,I){return z.H.useMemo(A,I)},xe.useOptimistic=function(A,I){return z.H.useOptimistic(A,I)},xe.useReducer=function(A,I,ne){return z.H.useReducer(A,I,ne)},xe.useRef=function(A){return z.H.useRef(A)},xe.useState=function(A){return z.H.useState(A)},xe.useSyncExternalStore=function(A,I,ne){return z.H.useSyncExternalStore(A,I,ne)},xe.useTransition=function(){return z.H.useTransition()},xe.version="19.1.1",xe}var kv;function Mf(){return kv||(kv=1,$d.exports=RS()),$d.exports}var m=Mf();const Fe=Ro(m);var Hd={exports:{}},Fs={},Gd={exports:{}},qd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function DS(){return Tv||(Tv=1,(function(n){function a($,ee){var Y=$.length;$.push(ee);e:for(;0<Y;){var V=Y-1>>>1,A=$[V];if(0<u(A,ee))$[V]=ee,$[Y]=A,Y=V;else break e}}function o($){return $.length===0?null:$[0]}function l($){if($.length===0)return null;var ee=$[0],Y=$.pop();if(Y!==ee){$[0]=Y;e:for(var V=0,A=$.length,I=A>>>1;V<I;){var ne=2*(V+1)-1,te=$[ne],se=ne+1,pe=$[se];if(0>u(te,Y))se<A&&0>u(pe,te)?($[V]=pe,$[se]=Y,V=se):($[V]=te,$[ne]=Y,V=ne);else if(se<A&&0>u(pe,Y))$[V]=pe,$[se]=Y,V=se;else break e}}return ee}function u($,ee){var Y=$.sortIndex-ee.sortIndex;return Y!==0?Y:$.id-ee.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();n.unstable_now=function(){return p.now()-g}}var h=[],v=[],b=1,x=null,w=3,S=!1,C=!1,k=!1,E=!1,O=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L($){for(var ee=o(v);ee!==null;){if(ee.callback===null)l(v);else if(ee.startTime<=$)l(v),ee.sortIndex=ee.expirationTime,a(h,ee);else break;ee=o(v)}}function z($){if(k=!1,L($),!C)if(o(h)!==null)C=!0,_||(_=!0,oe());else{var ee=o(v);ee!==null&&le(z,ee.startTime-$)}}var _=!1,M=-1,R=5,q=-1;function Q(){return E?!0:!(n.unstable_now()-q<R)}function re(){if(E=!1,_){var $=n.unstable_now();q=$;var ee=!0;try{e:{C=!1,k&&(k=!1,N(M),M=-1),S=!0;var Y=w;try{t:{for(L($),x=o(h);x!==null&&!(x.expirationTime>$&&Q());){var V=x.callback;if(typeof V=="function"){x.callback=null,w=x.priorityLevel;var A=V(x.expirationTime<=$);if($=n.unstable_now(),typeof A=="function"){x.callback=A,L($),ee=!0;break t}x===o(h)&&l(h),L($)}else l(h);x=o(h)}if(x!==null)ee=!0;else{var I=o(v);I!==null&&le(z,I.startTime-$),ee=!1}}break e}finally{x=null,w=Y,S=!1}ee=void 0}}finally{ee?oe():_=!1}}}var oe;if(typeof D=="function")oe=function(){D(re)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,J=ie.port2;ie.port1.onmessage=re,oe=function(){J.postMessage(null)}}else oe=function(){O(re,0)};function le($,ee){M=O(function(){$(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function($){$.callback=null},n.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function($){switch(w){case 1:case 2:case 3:var ee=3;break;default:ee=w}var Y=w;w=ee;try{return $()}finally{w=Y}},n.unstable_requestPaint=function(){E=!0},n.unstable_runWithPriority=function($,ee){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Y=w;w=$;try{return ee()}finally{w=Y}},n.unstable_scheduleCallback=function($,ee,Y){var V=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?V+Y:V):Y=V,$){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=Y+A,$={id:b++,callback:ee,priorityLevel:$,startTime:Y,expirationTime:A,sortIndex:-1},Y>V?($.sortIndex=Y,a(v,$),o(h)===null&&$===o(v)&&(k?(N(M),M=-1):k=!0,le(z,Y-V))):($.sortIndex=A,a(h,$),C||S||(C=!0,_||(_=!0,oe()))),$},n.unstable_shouldYield=Q,n.unstable_wrapCallback=function($){var ee=w;return function(){var Y=w;w=ee;try{return $.apply(this,arguments)}finally{w=Y}}}})(qd)),qd}var Rv;function LS(){return Rv||(Rv=1,Gd.exports=DS()),Gd.exports}var Jd={exports:{}},xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function MS(){if(Dv)return xt;Dv=1;var n=Mf();function a(h){var v="https://react.dev/errors/"+h;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)v+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+h+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(h,v,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:x==null?null:""+x,children:h,containerInfo:v,implementation:b}}var p=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(h,v){if(h==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,xt.createPortal=function(h,v){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(a(299));return d(h,v,null,b)},xt.flushSync=function(h){var v=p.T,b=l.p;try{if(p.T=null,l.p=2,h)return h()}finally{p.T=v,l.p=b,l.d.f()}},xt.preconnect=function(h,v){typeof h=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,l.d.C(h,v))},xt.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},xt.preinit=function(h,v){if(typeof h=="string"&&v&&typeof v.as=="string"){var b=v.as,x=g(b,v.crossOrigin),w=typeof v.integrity=="string"?v.integrity:void 0,S=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;b==="style"?l.d.S(h,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:S}):b==="script"&&l.d.X(h,{crossOrigin:x,integrity:w,fetchPriority:S,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},xt.preinitModule=function(h,v){if(typeof h=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var b=g(v.as,v.crossOrigin);l.d.M(h,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&l.d.M(h)},xt.preload=function(h,v){if(typeof h=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var b=v.as,x=g(b,v.crossOrigin);l.d.L(h,b,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},xt.preloadModule=function(h,v){if(typeof h=="string")if(v){var b=g(v.as,v.crossOrigin);l.d.m(h,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else l.d.m(h)},xt.requestFormReset=function(h){l.d.r(h)},xt.unstable_batchedUpdates=function(h,v){return h(v)},xt.useFormState=function(h,v,b){return p.H.useFormState(h,v,b)},xt.useFormStatus=function(){return p.H.useHostTransitionStatus()},xt.version="19.1.1",xt}var Lv;function Pb(){if(Lv)return Jd.exports;Lv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Jd.exports=MS(),Jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function BS(){if(Mv)return Fs;Mv=1;var n=LS(),a=Mf(),o=Pb();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(l(188))}function h(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,i=t;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){if(i=c.return,i!==null){r=i;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===r)return g(c),e;if(f===i)return g(c),t;f=f.sibling}throw Error(l(188))}if(r.return!==i.return)r=c,i=f;else{for(var y=!1,j=c.child;j;){if(j===r){y=!0,r=c,i=f;break}if(j===i){y=!0,i=c,r=f;break}j=j.sibling}if(!y){for(j=f.child;j;){if(j===r){y=!0,r=f,i=c;break}if(j===i){y=!0,i=f,r=c;break}j=j.sibling}if(!y)throw Error(l(189))}}if(r.alternate!==i)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case E:return"Profiler";case k:return"StrictMode";case z:return"Suspense";case _:return"SuspenseList";case q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case D:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case L:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}var le=Array.isArray,$=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},V=[],A=-1;function I(e){return{current:e}}function ne(e){0>A||(e.current=V[A],V[A]=null,A--)}function te(e,t){A++,V[A]=e.current,e.current=t}var se=I(null),pe=I(null),fe=I(null),He=I(null);function we(e,t){switch(te(fe,t),te(pe,e),te(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ev(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ev(t),e=tv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(se),te(se,e)}function Pe(){ne(se),ne(pe),ne(fe)}function Bt(e){e.memoizedState!==null&&te(He,e);var t=se.current,r=tv(t,e.type);t!==r&&(te(pe,e),te(se,r))}function zt(e){pe.current===e&&(ne(se),ne(pe)),He.current===e&&(ne(He),Ps._currentValue=Y)}var Zt=Object.prototype.hasOwnProperty,Kt=n.unstable_scheduleCallback,Qt=n.unstable_cancelCallback,ze=n.unstable_shouldYield,$n=n.unstable_requestPaint,ot=n.unstable_now,Yo=n.unstable_getCurrentPriorityLevel,Cr=n.unstable_ImmediatePriority,Wt=n.unstable_UserBlockingPriority,xn=n.unstable_NormalPriority,Ar=n.unstable_LowPriority,Ya=n.unstable_IdlePriority,va=n.log,Or=n.unstable_setDisableYieldValue,je=null,Ye=null;function Ct(e){if(typeof va=="function"&&Or(e),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(je,e)}catch{}}var _t=Math.clz32?Math.clz32:h0,m0=Math.log,p0=Math.LN2;function h0(e){return e>>>=0,e===0?32:31-(m0(e)/p0|0)|0}var Si=256,Ei=4194304;function Xa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ni(e,t,r){var i=e.pendingLanes;if(i===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var j=i&134217727;return j!==0?(i=j&~f,i!==0?c=Xa(i):(y&=j,y!==0?c=Xa(y):r||(r=j&~e,r!==0&&(c=Xa(r))))):(j=i&~f,j!==0?c=Xa(j):y!==0?c=Xa(y):r||(r=i&~e,r!==0&&(c=Xa(r)))),c===0?0:t!==0&&t!==c&&(t&f)===0&&(f=c&-c,r=t&-t,f>=r||f===32&&(r&4194048)!==0)?t:c}function Xo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function g0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _m(){var e=Si;return Si<<=1,(Si&4194048)===0&&(Si=256),e}function Um(){var e=Ei;return Ei<<=1,(Ei&62914560)===0&&(Ei=4194304),e}function kc(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Zo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function v0(e,t,r,i,c,f){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var j=e.entanglements,T=e.expirationTimes,H=e.hiddenUpdates;for(r=y&~r;0<r;){var Z=31-_t(r),W=1<<Z;j[Z]=0,T[Z]=-1;var G=H[Z];if(G!==null)for(H[Z]=null,Z=0;Z<G.length;Z++){var F=G[Z];F!==null&&(F.lane&=-536870913)}r&=~W}i!==0&&Im(e,i,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~t))}function Im(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-_t(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|r&4194090}function Pm(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-_t(r),c=1<<i;c&t|e[i]&t&&(e[i]|=t),r&=~c}}function Tc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $m(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:xv(e.type))}function b0(e,t){var r=ee.p;try{return ee.p=e,t()}finally{ee.p=r}}var ba=Math.random().toString(36).slice(2),bt="__reactFiber$"+ba,At="__reactProps$"+ba,kr="__reactContainer$"+ba,Dc="__reactEvents$"+ba,y0="__reactListeners$"+ba,x0="__reactHandles$"+ba,Hm="__reactResources$"+ba,Ko="__reactMarker$"+ba;function Lc(e){delete e[bt],delete e[At],delete e[Dc],delete e[y0],delete e[x0]}function Tr(e){var t=e[bt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[kr]||r[bt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ov(e);e!==null;){if(r=e[bt])return r;e=ov(e)}return t}e=r,r=e.parentNode}return null}function Rr(e){if(e=e[bt]||e[kr]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Qo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Dr(e){var t=e[Hm];return t||(t=e[Hm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[Ko]=!0}var Gm=new Set,qm={};function Za(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(qm[e]=t,e=0;e<t.length;e++)Gm.add(t[e])}var w0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jm={},Fm={};function j0(e){return Zt.call(Fm,e)?!0:Zt.call(Jm,e)?!1:w0.test(e)?Fm[e]=!0:(Jm[e]=!0,!1)}function Ci(e,t,r){if(j0(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function Ai(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function Hn(e,t,r,i){if(i===null)e.removeAttribute(r);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+i)}}var Mc,Vm;function Mr(e){if(Mc===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Mc=t&&t[1]||"",Vm=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mc+e+Vm}var Bc=!1;function zc(e,t){if(!e||Bc)return"";Bc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(F){var G=F}Reflect.construct(e,[],W)}else{try{W.call()}catch(F){G=F}e.call(W.prototype)}}else{try{throw Error()}catch(F){G=F}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(F){if(F&&G&&typeof F.stack=="string")return[F.stack,G.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=i.DetermineComponentFrameRoot(),y=f[0],j=f[1];if(y&&j){var T=y.split(`
`),H=j.split(`
`);for(c=i=0;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;for(;c<H.length&&!H[c].includes("DetermineComponentFrameRoot");)c++;if(i===T.length||c===H.length)for(i=T.length-1,c=H.length-1;1<=i&&0<=c&&T[i]!==H[c];)c--;for(;1<=i&&0<=c;i--,c--)if(T[i]!==H[c]){if(i!==1||c!==1)do if(i--,c--,0>c||T[i]!==H[c]){var Z=`
`+T[i].replace(" at new "," at ");return e.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",e.displayName)),Z}while(1<=i&&0<=c);break}}}finally{Bc=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Mr(r):""}function S0(e){switch(e.tag){case 26:case 27:case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 15:return zc(e.type,!1);case 11:return zc(e.type.render,!1);case 1:return zc(e.type,!0);case 31:return Mr("Activity");default:return""}}function Ym(e){try{var t="";do t+=S0(e),e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function en(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function E0(e){var t=Xm(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){i=""+y,f.call(this,y)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(y){i=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oi(e){e._valueTracker||(e._valueTracker=E0(e))}function Zm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=Xm(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var N0=/[\n"\\]/g;function tn(e){return e.replace(N0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function _c(e,t,r,i,c,f,y,j){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+en(t)):e.value!==""+en(t)&&(e.value=""+en(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?Uc(e,y,en(t)):r!=null?Uc(e,y,en(r)):i!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?e.name=""+en(j):e.removeAttribute("name")}function Km(e,t,r,i,c,f,y,j){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||t!=null))return;r=r!=null?""+en(r):"",t=t!=null?""+en(t):r,j||t===e.value||(e.value=t),e.defaultValue=t}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=j?e.checked:!!i,e.defaultChecked=!!i,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function Uc(e,t,r){t==="number"&&ki(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Br(e,t,r,i){if(e=e.options,t){t={};for(var c=0;c<r.length;c++)t["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=t.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&i&&(e[r].defaultSelected=!0)}else{for(r=""+en(r),t=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,i&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Qm(e,t,r){if(t!=null&&(t=""+en(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+en(r):""}function Wm(e,t,r,i){if(t==null){if(i!=null){if(r!=null)throw Error(l(92));if(le(i)){if(1<i.length)throw Error(l(93));i=i[0]}r=i}r==null&&(r=""),t=r}r=en(t),e.defaultValue=r,i=e.textContent,i===r&&i!==""&&i!==null&&(e.value=i)}function zr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var C0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ep(e,t,r){var i=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,r):typeof r!="number"||r===0||C0.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function tp(e,t,r){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,r!=null){for(var i in r)!r.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var c in t)i=t[c],t.hasOwnProperty(c)&&r[c]!==i&&ep(e,c,i)}else for(var f in t)t.hasOwnProperty(f)&&ep(e,f,t[f])}function Ic(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var A0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ti(e){return O0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Pc=null;function $c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,Ur=null;function np(e){var t=Rr(e);if(t&&(e=t.stateNode)){var r=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(_c(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+tn(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var c=i[At]||null;if(!c)throw Error(l(90));_c(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<r.length;t++)i=r[t],i.form===e.form&&Zm(i)}break e;case"textarea":Qm(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&Br(e,!!r.multiple,t,!1)}}}var Hc=!1;function ap(e,t,r){if(Hc)return e(t,r);Hc=!0;try{var i=e(t);return i}finally{if(Hc=!1,(_r!==null||Ur!==null)&&(hl(),_r&&(t=_r,e=Ur,Ur=_r=null,np(t),e)))for(t=0;t<e.length;t++)np(e[t])}}function Wo(e,t){var r=e.stateNode;if(r===null)return null;var i=r[At]||null;if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=!1;if(Gn)try{var es={};Object.defineProperty(es,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{Gc=!1}var ya=null,qc=null,Ri=null;function rp(){if(Ri)return Ri;var e,t=qc,r=t.length,i,c="value"in ya?ya.value:ya.textContent,f=c.length;for(e=0;e<r&&t[e]===c[e];e++);var y=r-e;for(i=1;i<=y&&t[r-i]===c[f-i];i++);return Ri=c.slice(e,1<i?1-i:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function op(){return!1}function Ot(e){function t(r,i,c,f,y){this._reactName=r,this._targetInst=c,this.type=i,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(r=e[j],this[j]=r?r(f):f[j]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Li:op,this.isPropagationStopped=op,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mi=Ot(Ka),ts=b({},Ka,{view:0,detail:0}),k0=Ot(ts),Jc,Fc,ns,Bi=b({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ns&&(ns&&e.type==="mousemove"?(Jc=e.screenX-ns.screenX,Fc=e.screenY-ns.screenY):Fc=Jc=0,ns=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:Fc}}),sp=Ot(Bi),T0=b({},Bi,{dataTransfer:0}),R0=Ot(T0),D0=b({},ts,{relatedTarget:0}),Vc=Ot(D0),L0=b({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=Ot(L0),B0=b({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z0=Ot(B0),_0=b({},Ka,{data:0}),ip=Ot(_0),U0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=P0[e])?!!t[e]:!1}function Yc(){return $0}var H0=b({},ts,{key:function(e){if(e.key){var t=U0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?I0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G0=Ot(H0),q0=b({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=Ot(q0),J0=b({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),F0=Ot(J0),V0=b({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y0=Ot(V0),X0=b({},Bi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=Ot(X0),K0=b({},Ka,{newState:0,oldState:0}),Q0=Ot(K0),W0=[9,13,27,32],Xc=Gn&&"CompositionEvent"in window,as=null;Gn&&"documentMode"in document&&(as=document.documentMode);var ej=Gn&&"TextEvent"in window&&!as,cp=Gn&&(!Xc||as&&8<as&&11>=as),up=" ",dp=!1;function fp(e,t){switch(e){case"keyup":return W0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function tj(e,t){switch(e){case"compositionend":return mp(t);case"keypress":return t.which!==32?null:(dp=!0,up);case"textInput":return e=t.data,e===up&&dp?null:e;default:return null}}function nj(e,t){if(Ir)return e==="compositionend"||!Xc&&fp(e,t)?(e=rp(),Ri=qc=ya=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cp&&t.locale!=="ko"?null:t.data;default:return null}}var aj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!aj[e.type]:t==="textarea"}function hp(e,t,r,i){_r?Ur?Ur.push(i):Ur=[i]:_r=i,t=wl(t,"onChange"),0<t.length&&(r=new Mi("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var rs=null,os=null;function rj(e){Xg(e,0)}function zi(e){var t=Qo(e);if(Zm(t))return e}function gp(e,t){if(e==="change")return t}var vp=!1;if(Gn){var Zc;if(Gn){var Kc="oninput"in document;if(!Kc){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),Kc=typeof bp.oninput=="function"}Zc=Kc}else Zc=!1;vp=Zc&&(!document.documentMode||9<document.documentMode)}function yp(){rs&&(rs.detachEvent("onpropertychange",xp),os=rs=null)}function xp(e){if(e.propertyName==="value"&&zi(os)){var t=[];hp(t,os,e,$c(e)),ap(rj,t)}}function oj(e,t,r){e==="focusin"?(yp(),rs=t,os=r,rs.attachEvent("onpropertychange",xp)):e==="focusout"&&yp()}function sj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(os)}function ij(e,t){if(e==="click")return zi(t)}function lj(e,t){if(e==="input"||e==="change")return zi(t)}function cj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:cj;function ss(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var c=r[i];if(!Zt.call(t,c)||!Ut(e[c],t[c]))return!1}return!0}function wp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jp(e,t){var r=wp(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=wp(r)}}function Sp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ki(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ki(e.document)}return t}function Qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var uj=Gn&&"documentMode"in document&&11>=document.documentMode,Pr=null,Wc=null,is=null,eu=!1;function Np(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;eu||Pr==null||Pr!==ki(i)||(i=Pr,"selectionStart"in i&&Qc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),is&&ss(is,i)||(is=i,i=wl(Wc,"onSelect"),0<i.length&&(t=new Mi("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Pr)))}function Qa(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var $r={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},tu={},Cp={};Gn&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function Wa(e){if(tu[e])return tu[e];if(!$r[e])return e;var t=$r[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Cp)return tu[e]=t[r];return e}var Ap=Wa("animationend"),Op=Wa("animationiteration"),kp=Wa("animationstart"),dj=Wa("transitionrun"),fj=Wa("transitionstart"),mj=Wa("transitioncancel"),Tp=Wa("transitionend"),Rp=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function wn(e,t){Rp.set(e,t),Za(t,[e])}var Dp=new WeakMap;function nn(e,t){if(typeof e=="object"&&e!==null){var r=Dp.get(e);return r!==void 0?r:(t={value:e,source:t,stack:Ym(t)},Dp.set(e,t),t)}return{value:e,source:t,stack:Ym(t)}}var an=[],Hr=0,au=0;function _i(){for(var e=Hr,t=au=Hr=0;t<e;){var r=an[t];an[t++]=null;var i=an[t];an[t++]=null;var c=an[t];an[t++]=null;var f=an[t];if(an[t++]=null,i!==null&&c!==null){var y=i.pending;y===null?c.next=c:(c.next=y.next,y.next=c),i.pending=c}f!==0&&Lp(r,c,f)}}function Ui(e,t,r,i){an[Hr++]=e,an[Hr++]=t,an[Hr++]=r,an[Hr++]=i,au|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ru(e,t,r,i){return Ui(e,t,r,i),Ii(e)}function Gr(e,t){return Ui(e,null,null,t),Ii(e)}function Lp(e,t,r){e.lanes|=r;var i=e.alternate;i!==null&&(i.lanes|=r);for(var c=!1,f=e.return;f!==null;)f.childLanes|=r,i=f.alternate,i!==null&&(i.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&t!==null&&(c=31-_t(r),e=f.hiddenUpdates,i=e[c],i===null?e[c]=[t]:i.push(t),t.lane=r|536870912),f):null}function Ii(e){if(50<Ds)throw Ds=0,ud=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var qr={};function pj(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,r,i){return new pj(e,t,r,i)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qn(e,t){var r=e.alternate;return r===null?(r=It(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Mp(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pi(e,t,r,i,c,f){var y=0;if(i=e,typeof e=="function")ou(e)&&(y=1);else if(typeof e=="string")y=gS(e,r,se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case q:return e=It(31,r,t,c),e.elementType=q,e.lanes=f,e;case C:return er(r.children,c,f,t);case k:y=8,c|=24;break;case E:return e=It(12,r,t,c|2),e.elementType=E,e.lanes=f,e;case z:return e=It(13,r,t,c),e.elementType=z,e.lanes=f,e;case _:return e=It(19,r,t,c),e.elementType=_,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:case D:y=10;break e;case N:y=9;break e;case L:y=11;break e;case M:y=14;break e;case R:y=16,i=null;break e}y=29,r=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=It(y,r,t,c),t.elementType=e,t.type=i,t.lanes=f,t}function er(e,t,r,i){return e=It(7,e,i,t),e.lanes=r,e}function su(e,t,r){return e=It(6,e,null,t),e.lanes=r,e}function iu(e,t,r){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jr=[],Fr=0,$i=null,Hi=0,rn=[],on=0,tr=null,Jn=1,Fn="";function nr(e,t){Jr[Fr++]=Hi,Jr[Fr++]=$i,$i=e,Hi=t}function Bp(e,t,r){rn[on++]=Jn,rn[on++]=Fn,rn[on++]=tr,tr=e;var i=Jn;e=Fn;var c=32-_t(i)-1;i&=~(1<<c),r+=1;var f=32-_t(t)+c;if(30<f){var y=c-c%5;f=(i&(1<<y)-1).toString(32),i>>=y,c-=y,Jn=1<<32-_t(t)+c|r<<c|i,Fn=f+e}else Jn=1<<f|r<<c|i,Fn=e}function lu(e){e.return!==null&&(nr(e,1),Bp(e,1,0))}function cu(e){for(;e===$i;)$i=Jr[--Fr],Jr[Fr]=null,Hi=Jr[--Fr],Jr[Fr]=null;for(;e===tr;)tr=rn[--on],rn[on]=null,Fn=rn[--on],rn[on]=null,Jn=rn[--on],rn[on]=null}var jt=null,Ze=null,Re=!1,ar=null,An=!1,uu=Error(l(519));function rr(e){var t=Error(l(418,""));throw us(nn(t,e)),uu}function zp(e){var t=e.stateNode,r=e.type,i=e.memoizedProps;switch(t[bt]=e,t[At]=i,r){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(r=0;r<Ms.length;r++)Ce(Ms[r],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),Km(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Oi(t);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),Wm(t,i.value,i.defaultValue,i.children),Oi(t)}r=i.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||i.suppressHydrationWarning===!0||Wg(t.textContent,r)?(i.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),i.onScroll!=null&&Ce("scroll",t),i.onScrollEnd!=null&&Ce("scrollend",t),i.onClick!=null&&(t.onclick=jl),t=!0):t=!1,t||rr(e)}function _p(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 13:An=!1;return;case 27:case 3:An=!0;return;default:jt=jt.return}}function ls(e){if(e!==jt)return!1;if(!Re)return _p(e),Re=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Cd(e.type,e.memoizedProps)),r=!r),r&&Ze&&rr(e),_p(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(t===0){Ze=Sn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++;e=e.nextSibling}Ze=null}}else t===27?(t=Ze,Ba(e.type)?(e=Td,Td=null,Ze=e):Ze=t):Ze=jt?Sn(e.stateNode.nextSibling):null;return!0}function cs(){Ze=jt=null,Re=!1}function Up(){var e=ar;return e!==null&&(Rt===null?Rt=e:Rt.push.apply(Rt,e),ar=null),e}function us(e){ar===null?ar=[e]:ar.push(e)}var du=I(null),or=null,Vn=null;function xa(e,t,r){te(du,t._currentValue),t._currentValue=r}function Yn(e){e._currentValue=du.current,ne(du)}function fu(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function mu(e,t,r,i){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;e:for(;f!==null;){var j=f;f=c;for(var T=0;T<t.length;T++)if(j.context===t[T]){f.lanes|=r,j=f.alternate,j!==null&&(j.lanes|=r),fu(f.return,r,e),i||(y=null);break e}f=j.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(l(341));y.lanes|=r,f=y.alternate,f!==null&&(f.lanes|=r),fu(y,r,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function ds(e,t,r,i){e=null;for(var c=t,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(l(387));if(y=y.memoizedProps,y!==null){var j=c.type;Ut(c.pendingProps.value,y.value)||(e!==null?e.push(j):e=[j])}}else if(c===He.current){if(y=c.alternate,y===null)throw Error(l(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ps):e=[Ps])}c=c.return}e!==null&&mu(t,e,r,i),t.flags|=262144}function Gi(e){for(e=e.firstContext;e!==null;){if(!Ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){or=e,Vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yt(e){return Ip(or,e)}function qi(e,t){return or===null&&sr(e),Ip(e,t)}function Ip(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},Vn===null){if(e===null)throw Error(l(308));Vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vn=Vn.next=t;return r}var hj=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},gj=n.unstable_scheduleCallback,vj=n.unstable_NormalPriority,st={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pu(){return{controller:new hj,data:new Map,refCount:0}}function fs(e){e.refCount--,e.refCount===0&&gj(vj,function(){e.controller.abort()})}var ms=null,hu=0,Vr=0,Yr=null;function bj(e,t){if(ms===null){var r=ms=[];hu=0,Vr=vd(),Yr={status:"pending",value:void 0,then:function(i){r.push(i)}}}return hu++,t.then(Pp,Pp),t}function Pp(){if(--hu===0&&ms!==null){Yr!==null&&(Yr.status="fulfilled");var e=ms;ms=null,Vr=0,Yr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yj(e,t){var r=[],i={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var c=0;c<r.length;c++)(0,r[c])(t)},function(c){for(i.status="rejected",i.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),i}var $p=$.S;$.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&bj(e,t),$p!==null&&$p(e,t)};var ir=I(null);function gu(){var e=ir.current;return e!==null?e:Ge.pooledCache}function Ji(e,t){t===null?te(ir,ir.current):te(ir,t.pool)}function Hp(){var e=gu();return e===null?null:{parent:st._currentValue,pool:e}}var ps=Error(l(460)),Gp=Error(l(474)),Fi=Error(l(542)),vu={then:function(){}};function qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vi(){}function Jp(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(Vi,Vi),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vp(e),e;default:if(typeof t.status=="string")t.then(Vi,Vi);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=i}},function(i){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vp(e),e}throw hs=t,ps}}var hs=null;function Fp(){if(hs===null)throw Error(l(459));var e=hs;return hs=null,e}function Vp(e){if(e===ps||e===Fi)throw Error(l(483))}var wa=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Le&2)!==0){var c=i.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),i.pending=t,t=Ii(e),Lp(e,null,r),t}return Ui(e,i,t,r),Ii(e)}function gs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Pm(e,r)}}function xu(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var c=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,r=r.next}while(r!==null);f===null?c=f=t:f=f.next=t}else c=f=t;r={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:i.shared,callbacks:i.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var wu=!1;function vs(){if(wu){var e=Yr;if(e!==null)throw e}}function bs(e,t,r,i){wu=!1;var c=e.updateQueue;wa=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,j=c.shared.pending;if(j!==null){c.shared.pending=null;var T=j,H=T.next;T.next=null,y===null?f=H:y.next=H,y=T;var Z=e.alternate;Z!==null&&(Z=Z.updateQueue,j=Z.lastBaseUpdate,j!==y&&(j===null?Z.firstBaseUpdate=H:j.next=H,Z.lastBaseUpdate=T))}if(f!==null){var W=c.baseState;y=0,Z=H=T=null,j=f;do{var G=j.lane&-536870913,F=G!==j.lane;if(F?(Ae&G)===G:(i&G)===G){G!==0&&G===Vr&&(wu=!0),Z!==null&&(Z=Z.next={lane:0,tag:j.tag,payload:j.payload,callback:null,next:null});e:{var be=e,ge=j;G=t;var Ie=r;switch(ge.tag){case 1:if(be=ge.payload,typeof be=="function"){W=be.call(Ie,W,G);break e}W=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=ge.payload,G=typeof be=="function"?be.call(Ie,W,G):be,G==null)break e;W=b({},W,G);break e;case 2:wa=!0}}G=j.callback,G!==null&&(e.flags|=64,F&&(e.flags|=8192),F=c.callbacks,F===null?c.callbacks=[G]:F.push(G))}else F={lane:G,tag:j.tag,payload:j.payload,callback:j.callback,next:null},Z===null?(H=Z=F,T=W):Z=Z.next=F,y|=G;if(j=j.next,j===null){if(j=c.shared.pending,j===null)break;F=j,j=F.next,F.next=null,c.lastBaseUpdate=F,c.shared.pending=null}}while(!0);Z===null&&(T=W),c.baseState=T,c.firstBaseUpdate=H,c.lastBaseUpdate=Z,f===null&&(c.shared.lanes=0),Ra|=y,e.lanes=y,e.memoizedState=W}}function Yp(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Xp(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Yp(r[e],t)}var Xr=I(null),Yi=I(0);function Zp(e,t){e=ta,te(Yi,e),te(Xr,t),ta=e|t.baseLanes}function ju(){te(Yi,ta),te(Xr,Xr.current)}function Su(){ta=Yi.current,ne(Xr),ne(Yi)}var Ea=0,Se=null,_e=null,at=null,Xi=!1,Zr=!1,lr=!1,Zi=0,ys=0,Kr=null,xj=0;function We(){throw Error(l(321))}function Eu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ut(e[r],t[r]))return!1;return!0}function Nu(e,t,r,i,c,f){return Ea=f,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$.H=e===null||e.memoizedState===null?Lh:Mh,lr=!1,f=r(i,c),lr=!1,Zr&&(f=Qp(t,r,i,c)),Kp(e),f}function Kp(e){$.H=nl;var t=_e!==null&&_e.next!==null;if(Ea=0,at=_e=Se=null,Xi=!1,ys=0,Kr=null,t)throw Error(l(300));e===null||ct||(e=e.dependencies,e!==null&&Gi(e)&&(ct=!0))}function Qp(e,t,r,i){Se=e;var c=0;do{if(Zr&&(Kr=null),ys=0,Zr=!1,25<=c)throw Error(l(301));if(c+=1,at=_e=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}$.H=Aj,f=t(r,i)}while(Zr);return f}function wj(){var e=$.H,t=e.useState()[0];return t=typeof t.then=="function"?xs(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(Se.flags|=1024),t}function Cu(){var e=Zi!==0;return Zi=0,e}function Au(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Ou(e){if(Xi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Xi=!1}Ea=0,at=_e=Se=null,Zr=!1,ys=Zi=0,Kr=null}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Se.memoizedState=at=e:at=at.next=e,at}function rt(){if(_e===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=at===null?Se.memoizedState:at.next;if(t!==null)at=t,_e=e;else{if(e===null)throw Se.alternate===null?Error(l(467)):Error(l(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},at===null?Se.memoizedState=at=e:at=at.next=e}return at}function ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xs(e){var t=ys;return ys+=1,Kr===null&&(Kr=[]),e=Jp(Kr,e,t),t=Se,(at===null?t.memoizedState:at.next)===null&&(t=t.alternate,$.H=t===null||t.memoizedState===null?Lh:Mh),e}function Ki(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xs(e);if(e.$$typeof===D)return yt(e)}throw Error(l(438,String(e)))}function Tu(e){var t=null,r=Se.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var i=Se.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=ku(),Se.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),i=0;i<e;i++)r[i]=Q;return t.index++,r}function Xn(e,t){return typeof t=="function"?t(e):t}function Qi(e){var t=rt();return Ru(t,_e,e)}function Ru(e,t,r){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=r;var c=e.baseQueue,f=i.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}t.baseQueue=c=f,i.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{t=c.next;var j=y=null,T=null,H=t,Z=!1;do{var W=H.lane&-536870913;if(W!==H.lane?(Ae&W)===W:(Ea&W)===W){var G=H.revertLane;if(G===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),W===Vr&&(Z=!0);else if((Ea&G)===G){H=H.next,G===Vr&&(Z=!0);continue}else W={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},T===null?(j=T=W,y=f):T=T.next=W,Se.lanes|=G,Ra|=G;W=H.action,lr&&r(f,W),f=H.hasEagerState?H.eagerState:r(f,W)}else G={lane:W,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},T===null?(j=T=G,y=f):T=T.next=G,Se.lanes|=W,Ra|=W;H=H.next}while(H!==null&&H!==t);if(T===null?y=f:T.next=j,!Ut(f,e.memoizedState)&&(ct=!0,Z&&(r=Yr,r!==null)))throw r;e.memoizedState=f,e.baseState=y,e.baseQueue=T,i.lastRenderedState=f}return c===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Du(e){var t=rt(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var i=r.dispatch,c=r.pending,f=t.memoizedState;if(c!==null){r.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);Ut(f,t.memoizedState)||(ct=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),r.lastRenderedState=f}return[f,i]}function Wp(e,t,r){var i=Se,c=rt(),f=Re;if(f){if(r===void 0)throw Error(l(407));r=r()}else r=t();var y=!Ut((_e||c).memoizedState,r);y&&(c.memoizedState=r,ct=!0),c=c.queue;var j=nh.bind(null,i,c,e);if(ws(2048,8,j,[e]),c.getSnapshot!==t||y||at!==null&&at.memoizedState.tag&1){if(i.flags|=2048,Qr(9,Wi(),th.bind(null,i,c,r,t),null),Ge===null)throw Error(l(349));f||(Ea&124)!==0||eh(i,t,r)}return r}function eh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Se.updateQueue,t===null?(t=ku(),Se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function th(e,t,r,i){t.value=r,t.getSnapshot=i,ah(t)&&rh(e)}function nh(e,t,r){return r(function(){ah(t)&&rh(e)})}function ah(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ut(e,r)}catch{return!0}}function rh(e){var t=Gr(e,2);t!==null&&qt(t,e,2)}function Lu(e){var t=kt();if(typeof e=="function"){var r=e;if(e=r(),lr){Ct(!0);try{r()}finally{Ct(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t}function oh(e,t,r,i){return e.baseState=r,Ru(e,_e,typeof i=="function"?i:Xn)}function jj(e,t,r,i,c){if(tl(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};$.T!==null?r(!0):f.isTransition=!1,i(f),r=t.pending,r===null?(f.next=t.pending=f,sh(t,f)):(f.next=r.next,t.pending=r.next=f)}}function sh(e,t){var r=t.action,i=t.payload,c=e.state;if(t.isTransition){var f=$.T,y={};$.T=y;try{var j=r(c,i),T=$.S;T!==null&&T(y,j),ih(e,t,j)}catch(H){Mu(e,t,H)}finally{$.T=f}}else try{f=r(c,i),ih(e,t,f)}catch(H){Mu(e,t,H)}}function ih(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(i){lh(e,t,i)},function(i){return Mu(e,t,i)}):lh(e,t,r)}function lh(e,t,r){t.status="fulfilled",t.value=r,ch(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,sh(e,r)))}function Mu(e,t,r){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=r,ch(t),t=t.next;while(t!==i)}e.action=null}function ch(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uh(e,t){return t}function dh(e,t){if(Re){var r=Ge.formState;if(r!==null){e:{var i=Se;if(Re){if(Ze){t:{for(var c=Ze,f=An;c.nodeType!==8;){if(!f){c=null;break t}if(c=Sn(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=Sn(c.nextSibling),i=c.data==="F!";break e}}rr(i)}i=!1}i&&(t=r[0])}}return r=kt(),r.memoizedState=r.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uh,lastRenderedState:t},r.queue=i,r=Th.bind(null,Se,i),i.dispatch=r,i=Lu(!1),f=Iu.bind(null,Se,!1,i.queue),i=kt(),c={state:t,dispatch:null,action:e,pending:null},i.queue=c,r=jj.bind(null,Se,c,f,r),c.dispatch=r,i.memoizedState=e,[t,r,!1]}function fh(e){var t=rt();return mh(t,_e,e)}function mh(e,t,r){if(t=Ru(e,t,uh)[0],e=Qi(Xn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=xs(t)}catch(y){throw y===ps?Fi:y}else i=t;t=rt();var c=t.queue,f=c.dispatch;return r!==t.memoizedState&&(Se.flags|=2048,Qr(9,Wi(),Sj.bind(null,c,r),null)),[i,f,e]}function Sj(e,t){e.action=t}function ph(e){var t=rt(),r=_e;if(r!==null)return mh(t,r,e);rt(),t=t.memoizedState,r=rt();var i=r.queue.dispatch;return r.memoizedState=e,[t,i,!1]}function Qr(e,t,r,i){return e={tag:e,create:r,deps:i,inst:t,next:null},t=Se.updateQueue,t===null&&(t=ku(),Se.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e),e}function Wi(){return{destroy:void 0,resource:void 0}}function hh(){return rt().memoizedState}function el(e,t,r,i){var c=kt();i=i===void 0?null:i,Se.flags|=e,c.memoizedState=Qr(1|t,Wi(),r,i)}function ws(e,t,r,i){var c=rt();i=i===void 0?null:i;var f=c.memoizedState.inst;_e!==null&&i!==null&&Eu(i,_e.memoizedState.deps)?c.memoizedState=Qr(t,f,r,i):(Se.flags|=e,c.memoizedState=Qr(1|t,f,r,i))}function gh(e,t){el(8390656,8,e,t)}function vh(e,t){ws(2048,8,e,t)}function bh(e,t){return ws(4,2,e,t)}function yh(e,t){return ws(4,4,e,t)}function xh(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wh(e,t,r){r=r!=null?r.concat([e]):null,ws(4,4,xh.bind(null,t,e),r)}function Bu(){}function jh(e,t){var r=rt();t=t===void 0?null:t;var i=r.memoizedState;return t!==null&&Eu(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function Sh(e,t){var r=rt();t=t===void 0?null:t;var i=r.memoizedState;if(t!==null&&Eu(t,i[1]))return i[0];if(i=e(),lr){Ct(!0);try{e()}finally{Ct(!1)}}return r.memoizedState=[i,t],i}function zu(e,t,r){return r===void 0||(Ea&1073741824)!==0?e.memoizedState=t:(e.memoizedState=r,e=Cg(),Se.lanes|=e,Ra|=e,r)}function Eh(e,t,r,i){return Ut(r,t)?r:Xr.current!==null?(e=zu(e,r,i),Ut(e,t)||(ct=!0),e):(Ea&42)===0?(ct=!0,e.memoizedState=r):(e=Cg(),Se.lanes|=e,Ra|=e,t)}function Nh(e,t,r,i,c){var f=ee.p;ee.p=f!==0&&8>f?f:8;var y=$.T,j={};$.T=j,Iu(e,!1,t,r);try{var T=c(),H=$.S;if(H!==null&&H(j,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var Z=yj(T,i);js(e,t,Z,Gt(e))}else js(e,t,i,Gt(e))}catch(W){js(e,t,{then:function(){},status:"rejected",reason:W},Gt())}finally{ee.p=f,$.T=y}}function Ej(){}function _u(e,t,r,i){if(e.tag!==5)throw Error(l(476));var c=Ch(e).queue;Nh(e,c,t,Y,r===null?Ej:function(){return Ah(e),r(i)})}function Ch(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:Y},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ah(e){var t=Ch(e).next.queue;js(e,t,{},Gt())}function Uu(){return yt(Ps)}function Oh(){return rt().memoizedState}function kh(){return rt().memoizedState}function Nj(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=Gt();e=ja(r);var i=Sa(t,e,r);i!==null&&(qt(i,t,r),gs(i,t,r)),t={cache:pu()},e.payload=t;return}t=t.return}}function Cj(e,t,r){var i=Gt();r={lane:i,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},tl(e)?Rh(t,r):(r=ru(e,t,r,i),r!==null&&(qt(r,e,i),Dh(r,t,i)))}function Th(e,t,r){var i=Gt();js(e,t,r,i)}function js(e,t,r,i){var c={lane:i,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(tl(e))Rh(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var y=t.lastRenderedState,j=f(y,r);if(c.hasEagerState=!0,c.eagerState=j,Ut(j,y))return Ui(e,t,c,0),Ge===null&&_i(),!1}catch{}finally{}if(r=ru(e,t,c,i),r!==null)return qt(r,e,i),Dh(r,t,i),!0}return!1}function Iu(e,t,r,i){if(i={lane:2,revertLane:vd(),action:i,hasEagerState:!1,eagerState:null,next:null},tl(e)){if(t)throw Error(l(479))}else t=ru(e,r,i,2),t!==null&&qt(t,e,2)}function tl(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Rh(e,t){Zr=Xi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Dh(e,t,r){if((r&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Pm(e,r)}}var nl={readContext:yt,use:Ki,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We},Lh={readContext:yt,use:Ki,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:gh,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,el(4194308,4,xh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return el(4194308,4,e,t)},useInsertionEffect:function(e,t){el(4,2,e,t)},useMemo:function(e,t){var r=kt();t=t===void 0?null:t;var i=e();if(lr){Ct(!0);try{e()}finally{Ct(!1)}}return r.memoizedState=[i,t],i},useReducer:function(e,t,r){var i=kt();if(r!==void 0){var c=r(t);if(lr){Ct(!0);try{r(t)}finally{Ct(!1)}}}else c=t;return i.memoizedState=i.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},i.queue=e,e=e.dispatch=Cj.bind(null,Se,e),[i.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:function(e){e=Lu(e);var t=e.queue,r=Th.bind(null,Se,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:Bu,useDeferredValue:function(e,t){var r=kt();return zu(r,e,t)},useTransition:function(){var e=Lu(!1);return e=Nh.bind(null,Se,e.queue,!0,!1),kt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var i=Se,c=kt();if(Re){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),Ge===null)throw Error(l(349));(Ae&124)!==0||eh(i,t,r)}c.memoizedState=r;var f={value:r,getSnapshot:t};return c.queue=f,gh(nh.bind(null,i,f,e),[e]),i.flags|=2048,Qr(9,Wi(),th.bind(null,i,f,r,t),null),r},useId:function(){var e=kt(),t=Ge.identifierPrefix;if(Re){var r=Fn,i=Jn;r=(i&~(1<<32-_t(i)-1)).toString(32)+r,t="«"+t+"R"+r,r=Zi++,0<r&&(t+="H"+r.toString(32)),t+="»"}else r=xj++,t="«"+t+"r"+r.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Uu,useFormState:dh,useActionState:dh,useOptimistic:function(e){var t=kt();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=Iu.bind(null,Se,!0,r),r.dispatch=t,[e,t]},useMemoCache:Tu,useCacheRefresh:function(){return kt().memoizedState=Nj.bind(null,Se)}},Mh={readContext:yt,use:Ki,useCallback:jh,useContext:yt,useEffect:vh,useImperativeHandle:wh,useInsertionEffect:bh,useLayoutEffect:yh,useMemo:Sh,useReducer:Qi,useRef:hh,useState:function(){return Qi(Xn)},useDebugValue:Bu,useDeferredValue:function(e,t){var r=rt();return Eh(r,_e.memoizedState,e,t)},useTransition:function(){var e=Qi(Xn)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:xs(e),t]},useSyncExternalStore:Wp,useId:Oh,useHostTransitionStatus:Uu,useFormState:fh,useActionState:fh,useOptimistic:function(e,t){var r=rt();return oh(r,_e,e,t)},useMemoCache:Tu,useCacheRefresh:kh},Aj={readContext:yt,use:Ki,useCallback:jh,useContext:yt,useEffect:vh,useImperativeHandle:wh,useInsertionEffect:bh,useLayoutEffect:yh,useMemo:Sh,useReducer:Du,useRef:hh,useState:function(){return Du(Xn)},useDebugValue:Bu,useDeferredValue:function(e,t){var r=rt();return _e===null?zu(r,e,t):Eh(r,_e.memoizedState,e,t)},useTransition:function(){var e=Du(Xn)[0],t=rt().memoizedState;return[typeof e=="boolean"?e:xs(e),t]},useSyncExternalStore:Wp,useId:Oh,useHostTransitionStatus:Uu,useFormState:ph,useActionState:ph,useOptimistic:function(e,t){var r=rt();return _e!==null?oh(r,_e,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:kh},Wr=null,Ss=0;function al(e){var t=Ss;return Ss+=1,Wr===null&&(Wr=[]),Jp(Wr,e,t)}function Es(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function rl(e,t){throw t.$$typeof===x?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Bh(e){var t=e._init;return t(e._payload)}function zh(e){function t(U,B){if(e){var P=U.deletions;P===null?(U.deletions=[B],U.flags|=16):P.push(B)}}function r(U,B){if(!e)return null;for(;B!==null;)t(U,B),B=B.sibling;return null}function i(U){for(var B=new Map;U!==null;)U.key!==null?B.set(U.key,U):B.set(U.index,U),U=U.sibling;return B}function c(U,B){return U=qn(U,B),U.index=0,U.sibling=null,U}function f(U,B,P){return U.index=P,e?(P=U.alternate,P!==null?(P=P.index,P<B?(U.flags|=67108866,B):P):(U.flags|=67108866,B)):(U.flags|=1048576,B)}function y(U){return e&&U.alternate===null&&(U.flags|=67108866),U}function j(U,B,P,K){return B===null||B.tag!==6?(B=su(P,U.mode,K),B.return=U,B):(B=c(B,P),B.return=U,B)}function T(U,B,P,K){var de=P.type;return de===C?Z(U,B,P.props.children,K,P.key):B!==null&&(B.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===R&&Bh(de)===B.type)?(B=c(B,P.props),Es(B,P),B.return=U,B):(B=Pi(P.type,P.key,P.props,null,U.mode,K),Es(B,P),B.return=U,B)}function H(U,B,P,K){return B===null||B.tag!==4||B.stateNode.containerInfo!==P.containerInfo||B.stateNode.implementation!==P.implementation?(B=iu(P,U.mode,K),B.return=U,B):(B=c(B,P.children||[]),B.return=U,B)}function Z(U,B,P,K,de){return B===null||B.tag!==7?(B=er(P,U.mode,K,de),B.return=U,B):(B=c(B,P),B.return=U,B)}function W(U,B,P){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=su(""+B,U.mode,P),B.return=U,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return P=Pi(B.type,B.key,B.props,null,U.mode,P),Es(P,B),P.return=U,P;case S:return B=iu(B,U.mode,P),B.return=U,B;case R:var K=B._init;return B=K(B._payload),W(U,B,P)}if(le(B)||oe(B))return B=er(B,U.mode,P,null),B.return=U,B;if(typeof B.then=="function")return W(U,al(B),P);if(B.$$typeof===D)return W(U,qi(U,B),P);rl(U,B)}return null}function G(U,B,P,K){var de=B!==null?B.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return de!==null?null:j(U,B,""+P,K);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case w:return P.key===de?T(U,B,P,K):null;case S:return P.key===de?H(U,B,P,K):null;case R:return de=P._init,P=de(P._payload),G(U,B,P,K)}if(le(P)||oe(P))return de!==null?null:Z(U,B,P,K,null);if(typeof P.then=="function")return G(U,B,al(P),K);if(P.$$typeof===D)return G(U,B,qi(U,P),K);rl(U,P)}return null}function F(U,B,P,K,de){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return U=U.get(P)||null,j(B,U,""+K,de);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case w:return U=U.get(K.key===null?P:K.key)||null,T(B,U,K,de);case S:return U=U.get(K.key===null?P:K.key)||null,H(B,U,K,de);case R:var Ee=K._init;return K=Ee(K._payload),F(U,B,P,K,de)}if(le(K)||oe(K))return U=U.get(P)||null,Z(B,U,K,de,null);if(typeof K.then=="function")return F(U,B,P,al(K),de);if(K.$$typeof===D)return F(U,B,P,qi(B,K),de);rl(B,K)}return null}function be(U,B,P,K){for(var de=null,Ee=null,me=B,ve=B=0,dt=null;me!==null&&ve<P.length;ve++){me.index>ve?(dt=me,me=null):dt=me.sibling;var ke=G(U,me,P[ve],K);if(ke===null){me===null&&(me=dt);break}e&&me&&ke.alternate===null&&t(U,me),B=f(ke,B,ve),Ee===null?de=ke:Ee.sibling=ke,Ee=ke,me=dt}if(ve===P.length)return r(U,me),Re&&nr(U,ve),de;if(me===null){for(;ve<P.length;ve++)me=W(U,P[ve],K),me!==null&&(B=f(me,B,ve),Ee===null?de=me:Ee.sibling=me,Ee=me);return Re&&nr(U,ve),de}for(me=i(me);ve<P.length;ve++)dt=F(me,U,ve,P[ve],K),dt!==null&&(e&&dt.alternate!==null&&me.delete(dt.key===null?ve:dt.key),B=f(dt,B,ve),Ee===null?de=dt:Ee.sibling=dt,Ee=dt);return e&&me.forEach(function(Pa){return t(U,Pa)}),Re&&nr(U,ve),de}function ge(U,B,P,K){if(P==null)throw Error(l(151));for(var de=null,Ee=null,me=B,ve=B=0,dt=null,ke=P.next();me!==null&&!ke.done;ve++,ke=P.next()){me.index>ve?(dt=me,me=null):dt=me.sibling;var Pa=G(U,me,ke.value,K);if(Pa===null){me===null&&(me=dt);break}e&&me&&Pa.alternate===null&&t(U,me),B=f(Pa,B,ve),Ee===null?de=Pa:Ee.sibling=Pa,Ee=Pa,me=dt}if(ke.done)return r(U,me),Re&&nr(U,ve),de;if(me===null){for(;!ke.done;ve++,ke=P.next())ke=W(U,ke.value,K),ke!==null&&(B=f(ke,B,ve),Ee===null?de=ke:Ee.sibling=ke,Ee=ke);return Re&&nr(U,ve),de}for(me=i(me);!ke.done;ve++,ke=P.next())ke=F(me,U,ve,ke.value,K),ke!==null&&(e&&ke.alternate!==null&&me.delete(ke.key===null?ve:ke.key),B=f(ke,B,ve),Ee===null?de=ke:Ee.sibling=ke,Ee=ke);return e&&me.forEach(function(OS){return t(U,OS)}),Re&&nr(U,ve),de}function Ie(U,B,P,K){if(typeof P=="object"&&P!==null&&P.type===C&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case w:e:{for(var de=P.key;B!==null;){if(B.key===de){if(de=P.type,de===C){if(B.tag===7){r(U,B.sibling),K=c(B,P.props.children),K.return=U,U=K;break e}}else if(B.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===R&&Bh(de)===B.type){r(U,B.sibling),K=c(B,P.props),Es(K,P),K.return=U,U=K;break e}r(U,B);break}else t(U,B);B=B.sibling}P.type===C?(K=er(P.props.children,U.mode,K,P.key),K.return=U,U=K):(K=Pi(P.type,P.key,P.props,null,U.mode,K),Es(K,P),K.return=U,U=K)}return y(U);case S:e:{for(de=P.key;B!==null;){if(B.key===de)if(B.tag===4&&B.stateNode.containerInfo===P.containerInfo&&B.stateNode.implementation===P.implementation){r(U,B.sibling),K=c(B,P.children||[]),K.return=U,U=K;break e}else{r(U,B);break}else t(U,B);B=B.sibling}K=iu(P,U.mode,K),K.return=U,U=K}return y(U);case R:return de=P._init,P=de(P._payload),Ie(U,B,P,K)}if(le(P))return be(U,B,P,K);if(oe(P)){if(de=oe(P),typeof de!="function")throw Error(l(150));return P=de.call(P),ge(U,B,P,K)}if(typeof P.then=="function")return Ie(U,B,al(P),K);if(P.$$typeof===D)return Ie(U,B,qi(U,P),K);rl(U,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,B!==null&&B.tag===6?(r(U,B.sibling),K=c(B,P),K.return=U,U=K):(r(U,B),K=su(P,U.mode,K),K.return=U,U=K),y(U)):r(U,B)}return function(U,B,P,K){try{Ss=0;var de=Ie(U,B,P,K);return Wr=null,de}catch(me){if(me===ps||me===Fi)throw me;var Ee=It(29,me,null,U.mode);return Ee.lanes=K,Ee.return=U,Ee}finally{}}}var eo=zh(!0),_h=zh(!1),sn=I(null),On=null;function Na(e){var t=e.alternate;te(it,it.current&1),te(sn,e),On===null&&(t===null||Xr.current!==null||t.memoizedState!==null)&&(On=e)}function Uh(e){if(e.tag===22){if(te(it,it.current),te(sn,e),On===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(On=e)}}else Ca()}function Ca(){te(it,it.current),te(sn,sn.current)}function Zn(e){ne(sn),On===e&&(On=null),ne(it)}var it=I(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||kd(r)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Pu(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:b({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var $u={enqueueSetState:function(e,t,r){e=e._reactInternals;var i=Gt(),c=ja(i);c.payload=t,r!=null&&(c.callback=r),t=Sa(e,c,i),t!==null&&(qt(t,e,i),gs(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=Gt(),c=ja(i);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=Sa(e,c,i),t!==null&&(qt(t,e,i),gs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Gt(),i=ja(r);i.tag=2,t!=null&&(i.callback=t),t=Sa(e,i,r),t!==null&&(qt(t,e,r),gs(t,e,r))}};function Ih(e,t,r,i,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,f,y):t.prototype&&t.prototype.isPureReactComponent?!ss(r,i)||!ss(c,f):!0}function Ph(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&$u.enqueueReplaceState(t,t.state,null)}function cr(e,t){var r=t;if("ref"in t){r={};for(var i in t)i!=="ref"&&(r[i]=t[i])}if(e=e.defaultProps){r===t&&(r=b({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}var sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $h(e){sl(e)}function Hh(e){console.error(e)}function Gh(e){sl(e)}function il(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function qh(e,t,r){try{var i=e.onCaughtError;i(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Hu(e,t,r){return r=ja(r),r.tag=3,r.payload={element:null},r.callback=function(){il(e,t)},r}function Jh(e){return e=ja(e),e.tag=3,e}function Fh(e,t,r,i){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;e.payload=function(){return c(f)},e.callback=function(){qh(t,r,i)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){qh(t,r,i),typeof c!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var j=i.stack;this.componentDidCatch(i.value,{componentStack:j!==null?j:""})})}function Oj(e,t,r,i,c){if(r.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=r.alternate,t!==null&&ds(t,r,c,!0),r=sn.current,r!==null){switch(r.tag){case 13:return On===null?fd():r.alternate===null&&Ke===0&&(Ke=3),r.flags&=-257,r.flags|=65536,r.lanes=c,i===vu?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([i]):t.add(i),pd(e,i,c)),!1;case 22:return r.flags|=65536,i===vu?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([i]):r.add(i)),pd(e,i,c)),!1}throw Error(l(435,r.tag))}return pd(e,i,c),fd(),!1}if(Re)return t=sn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,i!==uu&&(e=Error(l(422),{cause:i}),us(nn(e,r)))):(i!==uu&&(t=Error(l(423),{cause:i}),us(nn(t,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,i=nn(i,r),c=Hu(e.stateNode,i,c),xu(e,c),Ke!==4&&(Ke=2)),!1;var f=Error(l(520),{cause:i});if(f=nn(f,r),Rs===null?Rs=[f]:Rs.push(f),Ke!==4&&(Ke=2),t===null)return!0;i=nn(i,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=Hu(r.stateNode,i,e),xu(r,e),!1;case 1:if(t=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Da===null||!Da.has(f))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Jh(c),Fh(c,e,r,i),xu(r,c),!1}r=r.return}while(r!==null);return!1}var Vh=Error(l(461)),ct=!1;function mt(e,t,r,i){t.child=e===null?_h(t,null,r,i):eo(t,e.child,r,i)}function Yh(e,t,r,i,c){r=r.render;var f=t.ref;if("ref"in i){var y={};for(var j in i)j!=="ref"&&(y[j]=i[j])}else y=i;return sr(t),i=Nu(e,t,r,y,f,c),j=Cu(),e!==null&&!ct?(Au(e,t,c),Kn(e,t,c)):(Re&&j&&lu(t),t.flags|=1,mt(e,t,i,c),t.child)}function Xh(e,t,r,i,c){if(e===null){var f=r.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=f,Zh(e,t,f,i,c)):(e=Pi(r.type,null,i,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!Zu(e,c)){var y=f.memoizedProps;if(r=r.compare,r=r!==null?r:ss,r(y,i)&&e.ref===t.ref)return Kn(e,t,c)}return t.flags|=1,e=qn(f,i),e.ref=t.ref,e.return=t,t.child=e}function Zh(e,t,r,i,c){if(e!==null){var f=e.memoizedProps;if(ss(f,i)&&e.ref===t.ref)if(ct=!1,t.pendingProps=i=f,Zu(e,c))(e.flags&131072)!==0&&(ct=!0);else return t.lanes=e.lanes,Kn(e,t,c)}return Gu(e,t,r,i,c)}function Kh(e,t,r){var i=t.pendingProps,c=i.children,f=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=f!==null?f.baseLanes|r:r,e!==null){for(c=t.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;t.childLanes=f&~i}else t.childLanes=0,t.child=null;return Qh(e,t,i,r)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ji(t,f!==null?f.cachePool:null),f!==null?Zp(t,f):ju(),Uh(t);else return t.lanes=t.childLanes=536870912,Qh(e,t,f!==null?f.baseLanes|r:r,r)}else f!==null?(Ji(t,f.cachePool),Zp(t,f),Ca(),t.memoizedState=null):(e!==null&&Ji(t,null),ju(),Ca());return mt(e,t,c,r),t.child}function Qh(e,t,r,i){var c=gu();return c=c===null?null:{parent:st._currentValue,pool:c},t.memoizedState={baseLanes:r,cachePool:c},e!==null&&Ji(t,null),ju(),Uh(t),e!==null&&ds(e,t,i,!0),null}function ll(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(l(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function Gu(e,t,r,i,c){return sr(t),r=Nu(e,t,r,i,void 0,c),i=Cu(),e!==null&&!ct?(Au(e,t,c),Kn(e,t,c)):(Re&&i&&lu(t),t.flags|=1,mt(e,t,r,c),t.child)}function Wh(e,t,r,i,c,f){return sr(t),t.updateQueue=null,r=Qp(t,i,r,c),Kp(e),i=Cu(),e!==null&&!ct?(Au(e,t,f),Kn(e,t,f)):(Re&&i&&lu(t),t.flags|=1,mt(e,t,r,f),t.child)}function eg(e,t,r,i,c){if(sr(t),t.stateNode===null){var f=qr,y=r.contextType;typeof y=="object"&&y!==null&&(f=yt(y)),f=new r(i,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$u,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=i,f.state=t.memoizedState,f.refs={},bu(t),y=r.contextType,f.context=typeof y=="object"&&y!==null?yt(y):qr,f.state=t.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Pu(t,r,y,i),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&$u.enqueueReplaceState(f,f.state,null),bs(t,i,f,c),vs(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){f=t.stateNode;var j=t.memoizedProps,T=cr(r,j);f.props=T;var H=f.context,Z=r.contextType;y=qr,typeof Z=="object"&&Z!==null&&(y=yt(Z));var W=r.getDerivedStateFromProps;Z=typeof W=="function"||typeof f.getSnapshotBeforeUpdate=="function",j=t.pendingProps!==j,Z||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(j||H!==y)&&Ph(t,f,i,y),wa=!1;var G=t.memoizedState;f.state=G,bs(t,i,f,c),vs(),H=t.memoizedState,j||G!==H||wa?(typeof W=="function"&&(Pu(t,r,W,i),H=t.memoizedState),(T=wa||Ih(t,r,T,i,G,H,y))?(Z||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=H),f.props=i,f.state=H,f.context=y,i=T):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{f=t.stateNode,yu(e,t),y=t.memoizedProps,Z=cr(r,y),f.props=Z,W=t.pendingProps,G=f.context,H=r.contextType,T=qr,typeof H=="object"&&H!==null&&(T=yt(H)),j=r.getDerivedStateFromProps,(H=typeof j=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==W||G!==T)&&Ph(t,f,i,T),wa=!1,G=t.memoizedState,f.state=G,bs(t,i,f,c),vs();var F=t.memoizedState;y!==W||G!==F||wa||e!==null&&e.dependencies!==null&&Gi(e.dependencies)?(typeof j=="function"&&(Pu(t,r,j,i),F=t.memoizedState),(Z=wa||Ih(t,r,Z,i,G,F,T)||e!==null&&e.dependencies!==null&&Gi(e.dependencies))?(H||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(i,F,T),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(i,F,T)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=F),f.props=i,f.state=F,f.context=T,i=Z):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),i=!1)}return f=i,ll(e,t),i=(t.flags&128)!==0,f||i?(f=t.stateNode,r=i&&typeof r.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&i?(t.child=eo(t,e.child,null,c),t.child=eo(t,null,r,c)):mt(e,t,r,c),t.memoizedState=f.state,e=t.child):e=Kn(e,t,c),e}function tg(e,t,r,i){return cs(),t.flags|=256,mt(e,t,r,i),t.child}var qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ju(e){return{baseLanes:e,cachePool:Hp()}}function Fu(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=ln),e}function ng(e,t,r){var i=t.pendingProps,c=!1,f=(t.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(it.current&2)!==0),y&&(c=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(c?Na(t):Ca(),Re){var j=Ze,T;if(T=j){e:{for(T=j,j=An;T.nodeType!==8;){if(!j){j=null;break e}if(T=Sn(T.nextSibling),T===null){j=null;break e}}j=T}j!==null?(t.memoizedState={dehydrated:j,treeContext:tr!==null?{id:Jn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},T=It(18,null,null,0),T.stateNode=j,T.return=t,t.child=T,jt=t,Ze=null,T=!0):T=!1}T||rr(t)}if(j=t.memoizedState,j!==null&&(j=j.dehydrated,j!==null))return kd(j)?t.lanes=32:t.lanes=536870912,null;Zn(t)}return j=i.children,i=i.fallback,c?(Ca(),c=t.mode,j=cl({mode:"hidden",children:j},c),i=er(i,c,r,null),j.return=t,i.return=t,j.sibling=i,t.child=j,c=t.child,c.memoizedState=Ju(r),c.childLanes=Fu(e,y,r),t.memoizedState=qu,i):(Na(t),Vu(t,j))}if(T=e.memoizedState,T!==null&&(j=T.dehydrated,j!==null)){if(f)t.flags&256?(Na(t),t.flags&=-257,t=Yu(e,t,r)):t.memoizedState!==null?(Ca(),t.child=e.child,t.flags|=128,t=null):(Ca(),c=i.fallback,j=t.mode,i=cl({mode:"visible",children:i.children},j),c=er(c,j,r,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,eo(t,e.child,null,r),i=t.child,i.memoizedState=Ju(r),i.childLanes=Fu(e,y,r),t.memoizedState=qu,t=c);else if(Na(t),kd(j)){if(y=j.nextSibling&&j.nextSibling.dataset,y)var H=y.dgst;y=H,i=Error(l(419)),i.stack="",i.digest=y,us({value:i,source:null,stack:null}),t=Yu(e,t,r)}else if(ct||ds(e,t,r,!1),y=(r&e.childLanes)!==0,ct||y){if(y=Ge,y!==null&&(i=r&-r,i=(i&42)!==0?1:Tc(i),i=(i&(y.suspendedLanes|r))!==0?0:i,i!==0&&i!==T.retryLane))throw T.retryLane=i,Gr(e,i),qt(y,e,i),Vh;j.data==="$?"||fd(),t=Yu(e,t,r)}else j.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,Ze=Sn(j.nextSibling),jt=t,Re=!0,ar=null,An=!1,e!==null&&(rn[on++]=Jn,rn[on++]=Fn,rn[on++]=tr,Jn=e.id,Fn=e.overflow,tr=t),t=Vu(t,i.children),t.flags|=4096);return t}return c?(Ca(),c=i.fallback,j=t.mode,T=e.child,H=T.sibling,i=qn(T,{mode:"hidden",children:i.children}),i.subtreeFlags=T.subtreeFlags&65011712,H!==null?c=qn(H,c):(c=er(c,j,r,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,i=c,c=t.child,j=e.child.memoizedState,j===null?j=Ju(r):(T=j.cachePool,T!==null?(H=st._currentValue,T=T.parent!==H?{parent:H,pool:H}:T):T=Hp(),j={baseLanes:j.baseLanes|r,cachePool:T}),c.memoizedState=j,c.childLanes=Fu(e,y,r),t.memoizedState=qu,i):(Na(t),r=e.child,e=r.sibling,r=qn(r,{mode:"visible",children:i.children}),r.return=t,r.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=r,t.memoizedState=null,r)}function Vu(e,t){return t=cl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function cl(e,t){return e=It(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Yu(e,t,r){return eo(t,e.child,null,r),e=Vu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ag(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),fu(e.return,t,r)}function Xu(e,t,r,i,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=i,f.tail=r,f.tailMode=c)}function rg(e,t,r){var i=t.pendingProps,c=i.revealOrder,f=i.tail;if(mt(e,t,i.children,r),i=it.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,r,t);else if(e.tag===19)ag(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(te(it,i),c){case"forwards":for(r=t.child,c=null;r!==null;)e=r.alternate,e!==null&&ol(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=t.child,t.child=null):(c=r.sibling,r.sibling=null),Xu(t,!1,c,r,f);break;case"backwards":for(r=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ol(e)===null){t.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}Xu(t,!0,r,null,f);break;case"together":Xu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ra|=t.lanes,(r&t.childLanes)===0)if(e!==null){if(ds(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=qn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=qn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Zu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gi(e)))}function kj(e,t,r){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),xa(t,st,e.memoizedState.cache),cs();break;case 27:case 5:Bt(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:xa(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Na(t),t.flags|=128,null):(r&t.child.childLanes)!==0?ng(e,t,r):(Na(t),e=Kn(e,t,r),e!==null?e.sibling:null);Na(t);break;case 19:var c=(e.flags&128)!==0;if(i=(r&t.childLanes)!==0,i||(ds(e,t,r,!1),i=(r&t.childLanes)!==0),c){if(i)return rg(e,t,r);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),te(it,it.current),i)break;return null;case 22:case 23:return t.lanes=0,Kh(e,t,r);case 24:xa(t,st,e.memoizedState.cache)}return Kn(e,t,r)}function og(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)ct=!0;else{if(!Zu(e,r)&&(t.flags&128)===0)return ct=!1,kj(e,t,r);ct=(e.flags&131072)!==0}else ct=!1,Re&&(t.flags&1048576)!==0&&Bp(t,Hi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,c=i._init;if(i=c(i._payload),t.type=i,typeof i=="function")ou(i)?(e=cr(i,e),t.tag=1,t=eg(null,t,i,e,r)):(t.tag=0,t=Gu(null,t,i,e,r));else{if(i!=null){if(c=i.$$typeof,c===L){t.tag=11,t=Yh(null,t,i,e,r);break e}else if(c===M){t.tag=14,t=Xh(null,t,i,e,r);break e}}throw t=J(i)||i,Error(l(306,t,""))}}return t;case 0:return Gu(e,t,t.type,t.pendingProps,r);case 1:return i=t.type,c=cr(i,t.pendingProps),eg(e,t,i,c,r);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var f=t.memoizedState;c=f.element,yu(e,t),bs(t,i,null,r);var y=t.memoizedState;if(i=y.cache,xa(t,st,i),i!==f.cache&&mu(t,[st],r,!0),vs(),i=y.element,f.isDehydrated)if(f={element:i,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=tg(e,t,i,r);break e}else if(i!==c){c=nn(Error(l(424)),t),us(c),t=tg(e,t,i,r);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=Sn(e.firstChild),jt=t,Re=!0,ar=null,An=!0,r=_h(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(cs(),i===c){t=Kn(e,t,r);break e}mt(e,t,i,r)}t=t.child}return t;case 26:return ll(e,t),e===null?(r=cv(t.type,null,t.pendingProps,null))?t.memoizedState=r:Re||(r=t.type,e=t.pendingProps,i=Sl(fe.current).createElement(r),i[bt]=t,i[At]=e,ht(i,r,e),lt(i),t.stateNode=i):t.memoizedState=cv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bt(t),e===null&&Re&&(i=t.stateNode=sv(t.type,t.pendingProps,fe.current),jt=t,An=!0,c=Ze,Ba(t.type)?(Td=c,Ze=Sn(i.firstChild)):Ze=c),mt(e,t,t.pendingProps.children,r),ll(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((c=i=Ze)&&(i=aS(i,t.type,t.pendingProps,An),i!==null?(t.stateNode=i,jt=t,Ze=Sn(i.firstChild),An=!1,c=!0):c=!1),c||rr(t)),Bt(t),c=t.type,f=t.pendingProps,y=e!==null?e.memoizedProps:null,i=f.children,Cd(c,f)?i=null:y!==null&&Cd(c,y)&&(t.flags|=32),t.memoizedState!==null&&(c=Nu(e,t,wj,null,null,r),Ps._currentValue=c),ll(e,t),mt(e,t,i,r),t.child;case 6:return e===null&&Re&&((e=r=Ze)&&(r=rS(r,t.pendingProps,An),r!==null?(t.stateNode=r,jt=t,Ze=null,e=!0):e=!1),e||rr(t)),null;case 13:return ng(e,t,r);case 4:return we(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=eo(t,null,i,r):mt(e,t,i,r),t.child;case 11:return Yh(e,t,t.type,t.pendingProps,r);case 7:return mt(e,t,t.pendingProps,r),t.child;case 8:return mt(e,t,t.pendingProps.children,r),t.child;case 12:return mt(e,t,t.pendingProps.children,r),t.child;case 10:return i=t.pendingProps,xa(t,t.type,i.value),mt(e,t,i.children,r),t.child;case 9:return c=t.type._context,i=t.pendingProps.children,sr(t),c=yt(c),i=i(c),t.flags|=1,mt(e,t,i,r),t.child;case 14:return Xh(e,t,t.type,t.pendingProps,r);case 15:return Zh(e,t,t.type,t.pendingProps,r);case 19:return rg(e,t,r);case 31:return i=t.pendingProps,r=t.mode,i={mode:i.mode,children:i.children},e===null?(r=cl(i,r),r.ref=t.ref,t.child=r,r.return=t,t=r):(r=qn(e.child,i),r.ref=t.ref,t.child=r,r.return=t,t=r),t;case 22:return Kh(e,t,r);case 24:return sr(t),i=yt(st),e===null?(c=gu(),c===null&&(c=Ge,f=pu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=r),c=f),t.memoizedState={parent:i,cache:c},bu(t),xa(t,st,c)):((e.lanes&r)!==0&&(yu(e,t),bs(t,null,null,r),vs()),c=e.memoizedState,f=t.memoizedState,c.parent!==i?(c={parent:i,cache:i},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),xa(t,st,i)):(i=f.cache,xa(t,st,i),i!==c.cache&&mu(t,[st],r,!0))),mt(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Qn(e){e.flags|=4}function sg(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pv(t)){if(t=sn.current,t!==null&&((Ae&4194048)===Ae?On!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||t!==On))throw hs=vu,Gp;e.flags|=8192}}function ul(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Um():536870912,e.lanes|=t,ro|=t)}function Ns(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function Tj(e,t,r){var i=t.pendingProps;switch(cu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return Xe(t),null;case 3:return r=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Yn(st),Pe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ls(t)?Qn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Up())),Xe(t),null;case 26:return r=t.memoizedState,e===null?(Qn(t),r!==null?(Xe(t),sg(t,r)):(Xe(t),t.flags&=-16777217)):r?r!==e.memoizedState?(Qn(t),Xe(t),sg(t,r)):(Xe(t),t.flags&=-16777217):(e.memoizedProps!==i&&Qn(t),Xe(t),t.flags&=-16777217),null;case 27:zt(t),r=fe.current;var c=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Qn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Xe(t),null}e=se.current,ls(t)?zp(t):(e=sv(c,i,r),t.stateNode=e,Qn(t))}return Xe(t),null;case 5:if(zt(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Qn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Xe(t),null}if(e=se.current,ls(t))zp(t);else{switch(c=Sl(fe.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?c.createElement("select",{is:i.is}):c.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?c.createElement(r,{is:i.is}):c.createElement(r)}}e[bt]=t,e[At]=i;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=e;e:switch(ht(e,r,i),r){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Qn(t)}}return Xe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Qn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=fe.current,ls(t)){if(e=t.stateNode,r=t.memoizedProps,i=null,c=jt,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}e[bt]=t,e=!!(e.nodeValue===r||i!==null&&i.suppressHydrationWarning===!0||Wg(e.nodeValue,r)),e||rr(t)}else e=Sl(e).createTextNode(i),e[bt]=t,t.stateNode=e}return Xe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ls(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[bt]=t}else cs(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),c=!1}else c=Up(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Zn(t),t):(Zn(t),null)}if(Zn(t),(t.flags&128)!==0)return t.lanes=r,t;if(r=i!==null,e=e!==null&&e.memoizedState!==null,r){i=t.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool);var f=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(f=i.memoizedState.cachePool.pool),f!==c&&(i.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),ul(t,t.updateQueue),Xe(t),null;case 4:return Pe(),e===null&&wd(t.stateNode.containerInfo),Xe(t),null;case 10:return Yn(t.type),Xe(t),null;case 19:if(ne(it),c=t.memoizedState,c===null)return Xe(t),null;if(i=(t.flags&128)!==0,f=c.rendering,f===null)if(i)Ns(c,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=ol(e),f!==null){for(t.flags|=128,Ns(c,!1),e=f.updateQueue,t.updateQueue=e,ul(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)Mp(r,e),r=r.sibling;return te(it,it.current&1|2),t.child}e=e.sibling}c.tail!==null&&ot()>ml&&(t.flags|=128,i=!0,Ns(c,!1),t.lanes=4194304)}else{if(!i)if(e=ol(f),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ul(t,e),Ns(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return Xe(t),null}else 2*ot()-c.renderingStartTime>ml&&r!==536870912&&(t.flags|=128,i=!0,Ns(c,!1),t.lanes=4194304);c.isBackwards?(f.sibling=t.child,t.child=f):(e=c.last,e!==null?e.sibling=f:t.child=f,c.last=f)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=ot(),t.sibling=null,e=it.current,te(it,i?e&1|2:e&1),t):(Xe(t),null);case 22:case 23:return Zn(t),Su(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(r&536870912)!==0&&(t.flags&128)===0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),r=t.updateQueue,r!==null&&ul(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==r&&(t.flags|=2048),e!==null&&ne(ir),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Yn(st),Xe(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Rj(e,t){switch(cu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(st),Pe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return zt(t),null;case 13:if(Zn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));cs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(it),null;case 4:return Pe(),null;case 10:return Yn(t.type),null;case 22:case 23:return Zn(t),Su(),e!==null&&ne(ir),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yn(st),null;case 25:return null;default:return null}}function ig(e,t){switch(cu(t),t.tag){case 3:Yn(st),Pe();break;case 26:case 27:case 5:zt(t);break;case 4:Pe();break;case 13:Zn(t);break;case 19:ne(it);break;case 10:Yn(t.type);break;case 22:case 23:Zn(t),Su(),e!==null&&ne(ir);break;case 24:Yn(st)}}function Cs(e,t){try{var r=t.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var c=i.next;r=c;do{if((r.tag&e)===e){i=void 0;var f=r.create,y=r.inst;i=f(),y.destroy=i}r=r.next}while(r!==c)}}catch(j){$e(t,t.return,j)}}function Aa(e,t,r){try{var i=t.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var f=c.next;i=f;do{if((i.tag&e)===e){var y=i.inst,j=y.destroy;if(j!==void 0){y.destroy=void 0,c=t;var T=r,H=j;try{H()}catch(Z){$e(c,T,Z)}}}i=i.next}while(i!==f)}}catch(Z){$e(t,t.return,Z)}}function lg(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{Xp(t,r)}catch(i){$e(e,e.return,i)}}}function cg(e,t,r){r.props=cr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(i){$e(e,t,i)}}function As(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof r=="function"?e.refCleanup=r(i):r.current=i}}catch(c){$e(e,t,c)}}function kn(e,t){var r=e.ref,i=e.refCleanup;if(r!==null)if(typeof i=="function")try{i()}catch(c){$e(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){$e(e,t,c)}else r.current=null}function ug(e){var t=e.type,r=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&i.focus();break e;case"img":r.src?i.src=r.src:r.srcSet&&(i.srcset=r.srcSet)}}catch(c){$e(e,e.return,c)}}function Ku(e,t,r){try{var i=e.stateNode;Qj(i,e.type,r,t),i[At]=t}catch(c){$e(e,e.return,c)}}function dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function Qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wu(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=jl));else if(i!==4&&(i===27&&Ba(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(Wu(e,t,r),e=e.sibling;e!==null;)Wu(e,t,r),e=e.sibling}function dl(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(i===27&&Ba(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(dl(e,t,r),e=e.sibling;e!==null;)dl(e,t,r),e=e.sibling}function fg(e){var t=e.stateNode,r=e.memoizedProps;try{for(var i=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);ht(t,i,r),t[bt]=e,t[At]=r}catch(f){$e(e,e.return,f)}}var Wn=!1,et=!1,ed=!1,mg=typeof WeakSet=="function"?WeakSet:Set,ut=null;function Dj(e,t){if(e=e.containerInfo,Ed=kl,e=Ep(e),Qc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var c=i.anchorOffset,f=i.focusNode;i=i.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var y=0,j=-1,T=-1,H=0,Z=0,W=e,G=null;t:for(;;){for(var F;W!==r||c!==0&&W.nodeType!==3||(j=y+c),W!==f||i!==0&&W.nodeType!==3||(T=y+i),W.nodeType===3&&(y+=W.nodeValue.length),(F=W.firstChild)!==null;)G=W,W=F;for(;;){if(W===e)break t;if(G===r&&++H===c&&(j=y),G===f&&++Z===i&&(T=y),(F=W.nextSibling)!==null)break;W=G,G=W.parentNode}W=F}r=j===-1||T===-1?null:{start:j,end:T}}else r=null}r=r||{start:0,end:0}}else r=null;for(Nd={focusedElem:e,selectionRange:r},kl=!1,ut=t;ut!==null;)if(t=ut,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ut=e;else for(;ut!==null;){switch(t=ut,f=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=t,c=f.memoizedProps,f=f.memoizedState,i=r.stateNode;try{var be=cr(r.type,c,r.elementType===r.type);e=i.getSnapshotBeforeUpdate(be,f),i.__reactInternalSnapshotBeforeUpdate=e}catch(ge){$e(r,r.return,ge)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)Od(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Od(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,ut=e;break}ut=t.return}}function pg(e,t,r){var i=r.flags;switch(r.tag){case 0:case 11:case 15:Oa(e,r),i&4&&Cs(5,r);break;case 1:if(Oa(e,r),i&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(y){$e(r,r.return,y)}else{var c=cr(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){$e(r,r.return,y)}}i&64&&lg(r),i&512&&As(r,r.return);break;case 3:if(Oa(e,r),i&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{Xp(e,t)}catch(y){$e(r,r.return,y)}}break;case 27:t===null&&i&4&&fg(r);case 26:case 5:Oa(e,r),t===null&&i&4&&ug(r),i&512&&As(r,r.return);break;case 12:Oa(e,r);break;case 13:Oa(e,r),i&4&&vg(e,r),i&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=$j.bind(null,r),oS(e,r))));break;case 22:if(i=r.memoizedState!==null||Wn,!i){t=t!==null&&t.memoizedState!==null||et,c=Wn;var f=et;Wn=i,(et=t)&&!f?ka(e,r,(r.subtreeFlags&8772)!==0):Oa(e,r),Wn=c,et=f}break;case 30:break;default:Oa(e,r)}}function hg(e){var t=e.alternate;t!==null&&(e.alternate=null,hg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Lc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Tt=!1;function ea(e,t,r){for(r=r.child;r!==null;)gg(e,t,r),r=r.sibling}function gg(e,t,r){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(je,r)}catch{}switch(r.tag){case 26:et||kn(r,t),ea(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:et||kn(r,t);var i=Je,c=Tt;Ba(r.type)&&(Je=r.stateNode,Tt=!1),ea(e,t,r),zs(r.stateNode),Je=i,Tt=c;break;case 5:et||kn(r,t);case 6:if(i=Je,c=Tt,Je=null,ea(e,t,r),Je=i,Tt=c,Je!==null)if(Tt)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(r.stateNode)}catch(f){$e(r,t,f)}else try{Je.removeChild(r.stateNode)}catch(f){$e(r,t,f)}break;case 18:Je!==null&&(Tt?(e=Je,rv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),qs(e)):rv(Je,r.stateNode));break;case 4:i=Je,c=Tt,Je=r.stateNode.containerInfo,Tt=!0,ea(e,t,r),Je=i,Tt=c;break;case 0:case 11:case 14:case 15:et||Aa(2,r,t),et||Aa(4,r,t),ea(e,t,r);break;case 1:et||(kn(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"&&cg(r,t,i)),ea(e,t,r);break;case 21:ea(e,t,r);break;case 22:et=(i=et)||r.memoizedState!==null,ea(e,t,r),et=i;break;default:ea(e,t,r)}}function vg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qs(e)}catch(r){$e(t,t.return,r)}}function Lj(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mg),t;default:throw Error(l(435,e.tag))}}function td(e,t){var r=Lj(e);t.forEach(function(i){var c=Hj.bind(null,e,i);r.has(i)||(r.add(i),i.then(c,c))})}function Pt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var c=r[i],f=e,y=t,j=y;e:for(;j!==null;){switch(j.tag){case 27:if(Ba(j.type)){Je=j.stateNode,Tt=!1;break e}break;case 5:Je=j.stateNode,Tt=!1;break e;case 3:case 4:Je=j.stateNode.containerInfo,Tt=!0;break e}j=j.return}if(Je===null)throw Error(l(160));gg(f,y,c),Je=null,Tt=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)bg(t,e),t=t.sibling}var jn=null;function bg(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pt(t,e),$t(e),i&4&&(Aa(3,e,e.return),Cs(3,e),Aa(5,e,e.return));break;case 1:Pt(t,e),$t(e),i&512&&(et||r===null||kn(r,r.return)),i&64&&Wn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?i:r.concat(i))));break;case 26:var c=jn;if(Pt(t,e),$t(e),i&512&&(et||r===null||kn(r,r.return)),i&4){var f=r!==null?r.memoizedState:null;if(i=e.memoizedState,r===null)if(i===null)if(e.stateNode===null){e:{i=e.type,r=e.memoizedProps,c=c.ownerDocument||c;t:switch(i){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ko]||f[bt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(i),c.head.insertBefore(f,c.querySelector("head > title"))),ht(f,i,r),f[bt]=e,lt(f),i=f;break e;case"link":var y=fv("link","href",c).get(i+(r.href||""));if(y){for(var j=0;j<y.length;j++)if(f=y[j],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(j,1);break t}}f=c.createElement(i),ht(f,i,r),c.head.appendChild(f);break;case"meta":if(y=fv("meta","content",c).get(i+(r.content||""))){for(j=0;j<y.length;j++)if(f=y[j],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(j,1);break t}}f=c.createElement(i),ht(f,i,r),c.head.appendChild(f);break;default:throw Error(l(468,i))}f[bt]=e,lt(f),i=f}e.stateNode=i}else mv(c,e.type,e.stateNode);else e.stateNode=dv(c,i,e.memoizedProps);else f!==i?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,i===null?mv(c,e.type,e.stateNode):dv(c,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ku(e,e.memoizedProps,r.memoizedProps)}break;case 27:Pt(t,e),$t(e),i&512&&(et||r===null||kn(r,r.return)),r!==null&&i&4&&Ku(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Pt(t,e),$t(e),i&512&&(et||r===null||kn(r,r.return)),e.flags&32){c=e.stateNode;try{zr(c,"")}catch(F){$e(e,e.return,F)}}i&4&&e.stateNode!=null&&(c=e.memoizedProps,Ku(e,c,r!==null?r.memoizedProps:c)),i&1024&&(ed=!0);break;case 6:if(Pt(t,e),$t(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,r=e.stateNode;try{r.nodeValue=i}catch(F){$e(e,e.return,F)}}break;case 3:if(Cl=null,c=jn,jn=El(t.containerInfo),Pt(t,e),jn=c,$t(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{qs(t.containerInfo)}catch(F){$e(e,e.return,F)}ed&&(ed=!1,yg(e));break;case 4:i=jn,jn=El(e.stateNode.containerInfo),Pt(t,e),$t(e),jn=i;break;case 12:Pt(t,e),$t(e);break;case 13:Pt(t,e),$t(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(id=ot()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,td(e,i)));break;case 22:c=e.memoizedState!==null;var T=r!==null&&r.memoizedState!==null,H=Wn,Z=et;if(Wn=H||c,et=Z||T,Pt(t,e),et=Z,Wn=H,$t(e),i&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(r===null||T||Wn||et||ur(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){T=r=t;try{if(f=T.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{j=T.stateNode;var W=T.memoizedProps.style,G=W!=null&&W.hasOwnProperty("display")?W.display:null;j.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(F){$e(T,T.return,F)}}}else if(t.tag===6){if(r===null){T=t;try{T.stateNode.nodeValue=c?"":T.memoizedProps}catch(F){$e(T,T.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(r=i.retryQueue,r!==null&&(i.retryQueue=null,td(e,r))));break;case 19:Pt(t,e),$t(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,td(e,i)));break;case 30:break;case 21:break;default:Pt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{for(var r,i=e.return;i!==null;){if(dg(i)){r=i;break}i=i.return}if(r==null)throw Error(l(160));switch(r.tag){case 27:var c=r.stateNode,f=Qu(e);dl(e,f,c);break;case 5:var y=r.stateNode;r.flags&32&&(zr(y,""),r.flags&=-33);var j=Qu(e);dl(e,j,y);break;case 3:case 4:var T=r.stateNode.containerInfo,H=Qu(e);Wu(e,H,T);break;default:throw Error(l(161))}}catch(Z){$e(e,e.return,Z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Oa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pg(e,t.alternate,t),t=t.sibling}function ur(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Aa(4,t,t.return),ur(t);break;case 1:kn(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&cg(t,t.return,r),ur(t);break;case 27:zs(t.stateNode);case 26:case 5:kn(t,t.return),ur(t);break;case 22:t.memoizedState===null&&ur(t);break;case 30:ur(t);break;default:ur(t)}e=e.sibling}}function ka(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,c=e,f=t,y=f.flags;switch(f.tag){case 0:case 11:case 15:ka(c,f,r),Cs(4,f);break;case 1:if(ka(c,f,r),i=f,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(H){$e(i,i.return,H)}if(i=f,c=i.updateQueue,c!==null){var j=i.stateNode;try{var T=c.shared.hiddenCallbacks;if(T!==null)for(c.shared.hiddenCallbacks=null,c=0;c<T.length;c++)Yp(T[c],j)}catch(H){$e(i,i.return,H)}}r&&y&64&&lg(f),As(f,f.return);break;case 27:fg(f);case 26:case 5:ka(c,f,r),r&&i===null&&y&4&&ug(f),As(f,f.return);break;case 12:ka(c,f,r);break;case 13:ka(c,f,r),r&&y&4&&vg(c,f);break;case 22:f.memoizedState===null&&ka(c,f,r),As(f,f.return);break;case 30:break;default:ka(c,f,r)}t=t.sibling}}function nd(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&fs(r))}function ad(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fs(e))}function Tn(e,t,r,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xg(e,t,r,i),t=t.sibling}function xg(e,t,r,i){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Tn(e,t,r,i),c&2048&&Cs(9,t);break;case 1:Tn(e,t,r,i);break;case 3:Tn(e,t,r,i),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fs(e)));break;case 12:if(c&2048){Tn(e,t,r,i),e=t.stateNode;try{var f=t.memoizedProps,y=f.id,j=f.onPostCommit;typeof j=="function"&&j(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){$e(t,t.return,T)}}else Tn(e,t,r,i);break;case 13:Tn(e,t,r,i);break;case 23:break;case 22:f=t.stateNode,y=t.alternate,t.memoizedState!==null?f._visibility&2?Tn(e,t,r,i):Os(e,t):f._visibility&2?Tn(e,t,r,i):(f._visibility|=2,to(e,t,r,i,(t.subtreeFlags&10256)!==0)),c&2048&&nd(y,t);break;case 24:Tn(e,t,r,i),c&2048&&ad(t.alternate,t);break;default:Tn(e,t,r,i)}}function to(e,t,r,i,c){for(c=c&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var f=e,y=t,j=r,T=i,H=y.flags;switch(y.tag){case 0:case 11:case 15:to(f,y,j,T,c),Cs(8,y);break;case 23:break;case 22:var Z=y.stateNode;y.memoizedState!==null?Z._visibility&2?to(f,y,j,T,c):Os(f,y):(Z._visibility|=2,to(f,y,j,T,c)),c&&H&2048&&nd(y.alternate,y);break;case 24:to(f,y,j,T,c),c&&H&2048&&ad(y.alternate,y);break;default:to(f,y,j,T,c)}t=t.sibling}}function Os(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,i=t,c=i.flags;switch(i.tag){case 22:Os(r,i),c&2048&&nd(i.alternate,i);break;case 24:Os(r,i),c&2048&&ad(i.alternate,i);break;default:Os(r,i)}t=t.sibling}}var ks=8192;function no(e){if(e.subtreeFlags&ks)for(e=e.child;e!==null;)wg(e),e=e.sibling}function wg(e){switch(e.tag){case 26:no(e),e.flags&ks&&e.memoizedState!==null&&bS(jn,e.memoizedState,e.memoizedProps);break;case 5:no(e);break;case 3:case 4:var t=jn;jn=El(e.stateNode.containerInfo),no(e),jn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ks,ks=16777216,no(e),ks=t):no(e));break;default:no(e)}}function jg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];ut=i,Eg(i,e)}jg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sg(e),e=e.sibling}function Sg(e){switch(e.tag){case 0:case 11:case 15:Ts(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:Ts(e);break;case 12:Ts(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,fl(e)):Ts(e);break;default:Ts(e)}}function fl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];ut=i,Eg(i,e)}jg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Aa(8,t,t.return),fl(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,fl(t));break;default:fl(t)}e=e.sibling}}function Eg(e,t){for(;ut!==null;){var r=ut;switch(r.tag){case 0:case 11:case 15:Aa(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var i=r.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:fs(r.memoizedState.cache)}if(i=r.child,i!==null)i.return=r,ut=i;else e:for(r=e;ut!==null;){i=ut;var c=i.sibling,f=i.return;if(hg(i),i===r){ut=null;break e}if(c!==null){c.return=f,ut=c;break e}ut=f}}}var Mj={getCacheForType:function(e){var t=yt(st),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r}},Bj=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ge=null,Ne=null,Ae=0,Me=0,Ht=null,Ta=!1,ao=!1,rd=!1,ta=0,Ke=0,Ra=0,dr=0,od=0,ln=0,ro=0,Rs=null,Rt=null,sd=!1,id=0,ml=1/0,pl=null,Da=null,pt=0,La=null,oo=null,so=0,ld=0,cd=null,Ng=null,Ds=0,ud=null;function Gt(){if((Le&2)!==0&&Ae!==0)return Ae&-Ae;if($.T!==null){var e=Vr;return e!==0?e:vd()}return $m()}function Cg(){ln===0&&(ln=(Ae&536870912)===0||Re?_m():536870912);var e=sn.current;return e!==null&&(e.flags|=32),ln}function qt(e,t,r){(e===Ge&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(io(e,0),Ma(e,Ae,ln,!1)),Zo(e,r),((Le&2)===0||e!==Ge)&&(e===Ge&&((Le&2)===0&&(dr|=r),Ke===4&&Ma(e,Ae,ln,!1)),Rn(e))}function Ag(e,t,r){if((Le&6)!==0)throw Error(l(327));var i=!r&&(t&124)===0&&(t&e.expiredLanes)===0||Xo(e,t),c=i?Uj(e,t):md(e,t,!0),f=i;do{if(c===0){ao&&!i&&Ma(e,t,0,!1);break}else{if(r=e.current.alternate,f&&!zj(r)){c=md(e,t,!1),f=!1;continue}if(c===2){if(f=t,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var j=e;c=Rs;var T=j.current.memoizedState.isDehydrated;if(T&&(io(j,y).flags|=256),y=md(j,y,!1),y!==2){if(rd&&!T){j.errorRecoveryDisabledLanes|=f,dr|=f,c=4;break e}f=Rt,Rt=c,f!==null&&(Rt===null?Rt=f:Rt.push.apply(Rt,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){io(e,0),Ma(e,t,0,!0);break}e:{switch(i=e,f=c,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Ma(i,t,ln,!Ta);break e;case 2:Rt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(c=id+300-ot(),10<c)){if(Ma(i,t,ln,!Ta),Ni(i,0,!0)!==0)break e;i.timeoutHandle=nv(Og.bind(null,i,r,Rt,pl,sd,t,ln,dr,ro,Ta,f,2,-0,0),c);break e}Og(i,r,Rt,pl,sd,t,ln,dr,ro,Ta,f,0,-0,0)}}break}while(!0);Rn(e)}function Og(e,t,r,i,c,f,y,j,T,H,Z,W,G,F){if(e.timeoutHandle=-1,W=t.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(Is={stylesheets:null,count:0,unsuspend:vS},wg(t),W=yS(),W!==null)){e.cancelPendingCommit=W(Bg.bind(null,e,t,f,r,i,c,y,j,T,Z,1,G,F)),Ma(e,f,y,!H);return}Bg(e,t,f,r,i,c,y,j,T)}function zj(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var i=0;i<r.length;i++){var c=r[i],f=c.getSnapshot;c=c.value;try{if(!Ut(f(),c))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ma(e,t,r,i){t&=~od,t&=~dr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var c=t;0<c;){var f=31-_t(c),y=1<<f;i[f]=-1,c&=~y}r!==0&&Im(e,r,t)}function hl(){return(Le&6)===0?(Ls(0),!1):!0}function dd(){if(Ne!==null){if(Me===0)var e=Ne.return;else e=Ne,Vn=or=null,Ou(e),Wr=null,Ss=0,e=Ne;for(;e!==null;)ig(e.alternate,e),e=e.return;Ne=null}}function io(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,eS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),dd(),Ge=e,Ne=r=qn(e.current,null),Ae=t,Me=0,Ht=null,Ta=!1,ao=Xo(e,t),rd=!1,ro=ln=od=dr=Ra=Ke=0,Rt=Rs=null,sd=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var c=31-_t(i),f=1<<c;t|=e[c],i&=~f}return ta=t,_i(),r}function kg(e,t){Se=null,$.H=nl,t===ps||t===Fi?(t=Fp(),Me=3):t===Gp?(t=Fp(),Me=4):Me=t===Vh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ht=t,Ne===null&&(Ke=1,il(e,nn(t,e.current)))}function Tg(){var e=$.H;return $.H=nl,e===null?nl:e}function Rg(){var e=$.A;return $.A=Mj,e}function fd(){Ke=4,Ta||(Ae&4194048)!==Ae&&sn.current!==null||(ao=!0),(Ra&134217727)===0&&(dr&134217727)===0||Ge===null||Ma(Ge,Ae,ln,!1)}function md(e,t,r){var i=Le;Le|=2;var c=Tg(),f=Rg();(Ge!==e||Ae!==t)&&(pl=null,io(e,t)),t=!1;var y=Ke;e:do try{if(Me!==0&&Ne!==null){var j=Ne,T=Ht;switch(Me){case 8:dd(),y=6;break e;case 3:case 2:case 9:case 6:sn.current===null&&(t=!0);var H=Me;if(Me=0,Ht=null,lo(e,j,T,H),r&&ao){y=0;break e}break;default:H=Me,Me=0,Ht=null,lo(e,j,T,H)}}_j(),y=Ke;break}catch(Z){kg(e,Z)}while(!0);return t&&e.shellSuspendCounter++,Vn=or=null,Le=i,$.H=c,$.A=f,Ne===null&&(Ge=null,Ae=0,_i()),y}function _j(){for(;Ne!==null;)Dg(Ne)}function Uj(e,t){var r=Le;Le|=2;var i=Tg(),c=Rg();Ge!==e||Ae!==t?(pl=null,ml=ot()+500,io(e,t)):ao=Xo(e,t);e:do try{if(Me!==0&&Ne!==null){t=Ne;var f=Ht;t:switch(Me){case 1:Me=0,Ht=null,lo(e,t,f,1);break;case 2:case 9:if(qp(f)){Me=0,Ht=null,Lg(t);break}t=function(){Me!==2&&Me!==9||Ge!==e||(Me=7),Rn(e)},f.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:qp(f)?(Me=0,Ht=null,Lg(t)):(Me=0,Ht=null,lo(e,t,f,7));break;case 5:var y=null;switch(Ne.tag){case 26:y=Ne.memoizedState;case 5:case 27:var j=Ne;if(!y||pv(y)){Me=0,Ht=null;var T=j.sibling;if(T!==null)Ne=T;else{var H=j.return;H!==null?(Ne=H,gl(H)):Ne=null}break t}}Me=0,Ht=null,lo(e,t,f,5);break;case 6:Me=0,Ht=null,lo(e,t,f,6);break;case 8:dd(),Ke=6;break e;default:throw Error(l(462))}}Ij();break}catch(Z){kg(e,Z)}while(!0);return Vn=or=null,$.H=i,$.A=c,Le=r,Ne!==null?0:(Ge=null,Ae=0,_i(),Ke)}function Ij(){for(;Ne!==null&&!ze();)Dg(Ne)}function Dg(e){var t=og(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?gl(e):Ne=t}function Lg(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=Wh(r,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=Wh(r,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:Ou(t);default:ig(r,t),t=Ne=Mp(t,ta),t=og(r,t,ta)}e.memoizedProps=e.pendingProps,t===null?gl(e):Ne=t}function lo(e,t,r,i){Vn=or=null,Ou(t),Wr=null,Ss=0;var c=t.return;try{if(Oj(e,c,t,r,Ae)){Ke=1,il(e,nn(r,e.current)),Ne=null;return}}catch(f){if(c!==null)throw Ne=c,f;Ke=1,il(e,nn(r,e.current)),Ne=null;return}t.flags&32768?(Re||i===1?e=!0:ao||(Ae&536870912)!==0?e=!1:(Ta=e=!0,(i===2||i===9||i===3||i===6)&&(i=sn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Mg(t,e)):gl(t)}function gl(e){var t=e;do{if((t.flags&32768)!==0){Mg(t,Ta);return}e=t.return;var r=Tj(t.alternate,t,ta);if(r!==null){Ne=r;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Ke===0&&(Ke=5)}function Mg(e,t){do{var r=Rj(e.alternate,e);if(r!==null){r.flags&=32767,Ne=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=r}while(e!==null);Ke=6,Ne=null}function Bg(e,t,r,i,c,f,y,j,T){e.cancelPendingCommit=null;do vl();while(pt!==0);if((Le&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=au,v0(e,r,f,y,j,T),e===Ge&&(Ne=Ge=null,Ae=0),oo=t,La=e,so=r,ld=f,cd=c,Ng=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gj(xn,function(){return Pg(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=$.T,$.T=null,c=ee.p,ee.p=2,y=Le,Le|=4;try{Dj(e,t,r)}finally{Le=y,ee.p=c,$.T=i}}pt=1,zg(),_g(),Ug()}}function zg(){if(pt===1){pt=0;var e=La,t=oo,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=$.T,$.T=null;var i=ee.p;ee.p=2;var c=Le;Le|=4;try{bg(t,e);var f=Nd,y=Ep(e.containerInfo),j=f.focusedElem,T=f.selectionRange;if(y!==j&&j&&j.ownerDocument&&Sp(j.ownerDocument.documentElement,j)){if(T!==null&&Qc(j)){var H=T.start,Z=T.end;if(Z===void 0&&(Z=H),"selectionStart"in j)j.selectionStart=H,j.selectionEnd=Math.min(Z,j.value.length);else{var W=j.ownerDocument||document,G=W&&W.defaultView||window;if(G.getSelection){var F=G.getSelection(),be=j.textContent.length,ge=Math.min(T.start,be),Ie=T.end===void 0?ge:Math.min(T.end,be);!F.extend&&ge>Ie&&(y=Ie,Ie=ge,ge=y);var U=jp(j,ge),B=jp(j,Ie);if(U&&B&&(F.rangeCount!==1||F.anchorNode!==U.node||F.anchorOffset!==U.offset||F.focusNode!==B.node||F.focusOffset!==B.offset)){var P=W.createRange();P.setStart(U.node,U.offset),F.removeAllRanges(),ge>Ie?(F.addRange(P),F.extend(B.node,B.offset)):(P.setEnd(B.node,B.offset),F.addRange(P))}}}}for(W=[],F=j;F=F.parentNode;)F.nodeType===1&&W.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof j.focus=="function"&&j.focus(),j=0;j<W.length;j++){var K=W[j];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}kl=!!Ed,Nd=Ed=null}finally{Le=c,ee.p=i,$.T=r}}e.current=t,pt=2}}function _g(){if(pt===2){pt=0;var e=La,t=oo,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=$.T,$.T=null;var i=ee.p;ee.p=2;var c=Le;Le|=4;try{pg(e,t.alternate,t)}finally{Le=c,ee.p=i,$.T=r}}pt=3}}function Ug(){if(pt===4||pt===3){pt=0,$n();var e=La,t=oo,r=so,i=Ng;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pt=5:(pt=0,oo=La=null,Ig(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Da=null),Rc(r),t=t.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(je,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=$.T,c=ee.p,ee.p=2,$.T=null;try{for(var f=e.onRecoverableError,y=0;y<i.length;y++){var j=i[y];f(j.value,{componentStack:j.stack})}}finally{$.T=t,ee.p=c}}(so&3)!==0&&vl(),Rn(e),c=e.pendingLanes,(r&4194090)!==0&&(c&42)!==0?e===ud?Ds++:(Ds=0,ud=e):Ds=0,Ls(0)}}function Ig(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fs(t)))}function vl(e){return zg(),_g(),Ug(),Pg()}function Pg(){if(pt!==5)return!1;var e=La,t=ld;ld=0;var r=Rc(so),i=$.T,c=ee.p;try{ee.p=32>r?32:r,$.T=null,r=cd,cd=null;var f=La,y=so;if(pt=0,oo=La=null,so=0,(Le&6)!==0)throw Error(l(331));var j=Le;if(Le|=4,Sg(f.current),xg(f,f.current,y,r),Le=j,Ls(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(je,f)}catch{}return!0}finally{ee.p=c,$.T=i,Ig(e,t)}}function $g(e,t,r){t=nn(r,t),t=Hu(e.stateNode,t,2),e=Sa(e,t,2),e!==null&&(Zo(e,2),Rn(e))}function $e(e,t,r){if(e.tag===3)$g(e,e,r);else for(;t!==null;){if(t.tag===3){$g(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Da===null||!Da.has(i))){e=nn(r,e),r=Jh(2),i=Sa(t,r,2),i!==null&&(Fh(r,i,t,e),Zo(i,2),Rn(i));break}}t=t.return}}function pd(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new Bj;var c=new Set;i.set(t,c)}else c=i.get(t),c===void 0&&(c=new Set,i.set(t,c));c.has(r)||(rd=!0,c.add(r),e=Pj.bind(null,e,t,r),t.then(e,e))}function Pj(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ge===e&&(Ae&r)===r&&(Ke===4||Ke===3&&(Ae&62914560)===Ae&&300>ot()-id?(Le&2)===0&&io(e,0):od|=r,ro===Ae&&(ro=0)),Rn(e)}function Hg(e,t){t===0&&(t=Um()),e=Gr(e,t),e!==null&&(Zo(e,t),Rn(e))}function $j(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Hg(e,r)}function Hj(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),Hg(e,r)}function Gj(e,t){return Kt(e,t)}var bl=null,co=null,hd=!1,yl=!1,gd=!1,fr=0;function Rn(e){e!==co&&e.next===null&&(co===null?bl=co=e:co=co.next=e),yl=!0,hd||(hd=!0,Jj())}function Ls(e,t){if(!gd&&yl){gd=!0;do for(var r=!1,i=bl;i!==null;){if(e!==0){var c=i.pendingLanes;if(c===0)var f=0;else{var y=i.suspendedLanes,j=i.pingedLanes;f=(1<<31-_t(42|e)+1)-1,f&=c&~(y&~j),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,Fg(i,f))}else f=Ae,f=Ni(i,i===Ge?f:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(f&3)===0||Xo(i,f)||(r=!0,Fg(i,f));i=i.next}while(r);gd=!1}}function qj(){Gg()}function Gg(){yl=hd=!1;var e=0;fr!==0&&(Wj()&&(e=fr),fr=0);for(var t=ot(),r=null,i=bl;i!==null;){var c=i.next,f=qg(i,t);f===0?(i.next=null,r===null?bl=c:r.next=c,c===null&&(co=r)):(r=i,(e!==0||(f&3)!==0)&&(yl=!0)),i=c}Ls(e)}function qg(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-_t(f),j=1<<y,T=c[y];T===-1?((j&r)===0||(j&i)!==0)&&(c[y]=g0(j,t)):T<=t&&(e.expiredLanes|=j),f&=~j}if(t=Ge,r=Ae,r=Ni(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,r===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Qt(i),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Xo(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(i!==null&&Qt(i),Rc(r)){case 2:case 8:r=Wt;break;case 32:r=xn;break;case 268435456:r=Ya;break;default:r=xn}return i=Jg.bind(null,e),r=Kt(r,i),e.callbackPriority=t,e.callbackNode=r,t}return i!==null&&i!==null&&Qt(i),e.callbackPriority=2,e.callbackNode=null,2}function Jg(e,t){if(pt!==0&&pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(vl()&&e.callbackNode!==r)return null;var i=Ae;return i=Ni(e,e===Ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ag(e,i,t),qg(e,ot()),e.callbackNode!=null&&e.callbackNode===r?Jg.bind(null,e):null)}function Fg(e,t){if(vl())return null;Ag(e,t,!0)}function Jj(){tS(function(){(Le&6)!==0?Kt(Cr,qj):Gg()})}function vd(){return fr===0&&(fr=_m()),fr}function Vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ti(""+e)}function Yg(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function Fj(e,t,r,i,c){if(t==="submit"&&r&&r.stateNode===c){var f=Vg((c[At]||null).action),y=i.submitter;y&&(t=(t=y[At]||null)?Vg(t.formAction):y.getAttribute("formAction"),t!==null&&(f=t,y=null));var j=new Mi("action","action",null,i,c);e.push({event:j,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(fr!==0){var T=y?Yg(c,y):new FormData(c);_u(r,{pending:!0,data:T,method:c.method,action:f},null,T)}}else typeof f=="function"&&(j.preventDefault(),T=y?Yg(c,y):new FormData(c),_u(r,{pending:!0,data:T,method:c.method,action:f},f,T))},currentTarget:c}]})}}for(var bd=0;bd<nu.length;bd++){var yd=nu[bd],Vj=yd.toLowerCase(),Yj=yd[0].toUpperCase()+yd.slice(1);wn(Vj,"on"+Yj)}wn(Ap,"onAnimationEnd"),wn(Op,"onAnimationIteration"),wn(kp,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(dj,"onTransitionRun"),wn(fj,"onTransitionStart"),wn(mj,"onTransitionCancel"),wn(Tp,"onTransitionEnd"),Lr("onMouseEnter",["mouseout","mouseover"]),Lr("onMouseLeave",["mouseout","mouseover"]),Lr("onPointerEnter",["pointerout","pointerover"]),Lr("onPointerLeave",["pointerout","pointerover"]),Za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Za("onBeforeInput",["compositionend","keypress","textInput","paste"]),Za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xj=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ms));function Xg(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],c=i.event;i=i.listeners;e:{var f=void 0;if(t)for(var y=i.length-1;0<=y;y--){var j=i[y],T=j.instance,H=j.currentTarget;if(j=j.listener,T!==f&&c.isPropagationStopped())break e;f=j,c.currentTarget=H;try{f(c)}catch(Z){sl(Z)}c.currentTarget=null,f=T}else for(y=0;y<i.length;y++){if(j=i[y],T=j.instance,H=j.currentTarget,j=j.listener,T!==f&&c.isPropagationStopped())break e;f=j,c.currentTarget=H;try{f(c)}catch(Z){sl(Z)}c.currentTarget=null,f=T}}}}function Ce(e,t){var r=t[Dc];r===void 0&&(r=t[Dc]=new Set);var i=e+"__bubble";r.has(i)||(Zg(t,e,2,!1),r.add(i))}function xd(e,t,r){var i=0;t&&(i|=4),Zg(r,e,i,t)}var xl="_reactListening"+Math.random().toString(36).slice(2);function wd(e){if(!e[xl]){e[xl]=!0,Gm.forEach(function(r){r!=="selectionchange"&&(Xj.has(r)||xd(r,!1,e),xd(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xl]||(t[xl]=!0,xd("selectionchange",!1,t))}}function Zg(e,t,r,i){switch(xv(t)){case 2:var c=jS;break;case 8:c=SS;break;default:c=Bd}r=c.bind(null,t,r,e),c=void 0,!Gc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),i?c!==void 0?e.addEventListener(t,r,{capture:!0,passive:c}):e.addEventListener(t,r,!0):c!==void 0?e.addEventListener(t,r,{passive:c}):e.addEventListener(t,r,!1)}function jd(e,t,r,i,c){var f=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var y=i.tag;if(y===3||y===4){var j=i.stateNode.containerInfo;if(j===c)break;if(y===4)for(y=i.return;y!==null;){var T=y.tag;if((T===3||T===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;j!==null;){if(y=Tr(j),y===null)return;if(T=y.tag,T===5||T===6||T===26||T===27){i=f=y;continue e}j=j.parentNode}}i=i.return}ap(function(){var H=f,Z=$c(r),W=[];e:{var G=Rp.get(e);if(G!==void 0){var F=Mi,be=e;switch(e){case"keypress":if(Di(r)===0)break e;case"keydown":case"keyup":F=G0;break;case"focusin":be="focus",F=Vc;break;case"focusout":be="blur",F=Vc;break;case"beforeblur":case"afterblur":F=Vc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=R0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=F0;break;case Ap:case Op:case kp:F=M0;break;case Tp:F=Y0;break;case"scroll":case"scrollend":F=k0;break;case"wheel":F=Z0;break;case"copy":case"cut":case"paste":F=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=lp;break;case"toggle":case"beforetoggle":F=Q0}var ge=(t&4)!==0,Ie=!ge&&(e==="scroll"||e==="scrollend"),U=ge?G!==null?G+"Capture":null:G;ge=[];for(var B=H,P;B!==null;){var K=B;if(P=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||P===null||U===null||(K=Wo(B,U),K!=null&&ge.push(Bs(B,K,P))),Ie)break;B=B.return}0<ge.length&&(G=new F(G,be,null,r,Z),W.push({event:G,listeners:ge}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",G&&r!==Pc&&(be=r.relatedTarget||r.fromElement)&&(Tr(be)||be[kr]))break e;if((F||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,F?(be=r.relatedTarget||r.toElement,F=H,be=be?Tr(be):null,be!==null&&(Ie=d(be),ge=be.tag,be!==Ie||ge!==5&&ge!==27&&ge!==6)&&(be=null)):(F=null,be=H),F!==be)){if(ge=sp,K="onMouseLeave",U="onMouseEnter",B="mouse",(e==="pointerout"||e==="pointerover")&&(ge=lp,K="onPointerLeave",U="onPointerEnter",B="pointer"),Ie=F==null?G:Qo(F),P=be==null?G:Qo(be),G=new ge(K,B+"leave",F,r,Z),G.target=Ie,G.relatedTarget=P,K=null,Tr(Z)===H&&(ge=new ge(U,B+"enter",be,r,Z),ge.target=P,ge.relatedTarget=Ie,K=ge),Ie=K,F&&be)t:{for(ge=F,U=be,B=0,P=ge;P;P=uo(P))B++;for(P=0,K=U;K;K=uo(K))P++;for(;0<B-P;)ge=uo(ge),B--;for(;0<P-B;)U=uo(U),P--;for(;B--;){if(ge===U||U!==null&&ge===U.alternate)break t;ge=uo(ge),U=uo(U)}ge=null}else ge=null;F!==null&&Kg(W,G,F,ge,!1),be!==null&&Ie!==null&&Kg(W,Ie,be,ge,!0)}}e:{if(G=H?Qo(H):window,F=G.nodeName&&G.nodeName.toLowerCase(),F==="select"||F==="input"&&G.type==="file")var de=gp;else if(pp(G))if(vp)de=lj;else{de=sj;var Ee=oj}else F=G.nodeName,!F||F.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?H&&Ic(H.elementType)&&(de=gp):de=ij;if(de&&(de=de(e,H))){hp(W,de,r,Z);break e}Ee&&Ee(e,G,H),e==="focusout"&&H&&G.type==="number"&&H.memoizedProps.value!=null&&Uc(G,"number",G.value)}switch(Ee=H?Qo(H):window,e){case"focusin":(pp(Ee)||Ee.contentEditable==="true")&&(Pr=Ee,Wc=H,is=null);break;case"focusout":is=Wc=Pr=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Np(W,r,Z);break;case"selectionchange":if(uj)break;case"keydown":case"keyup":Np(W,r,Z)}var me;if(Xc)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ir?fp(e,r)&&(ve="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ve="onCompositionStart");ve&&(cp&&r.locale!=="ko"&&(Ir||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ir&&(me=rp()):(ya=Z,qc="value"in ya?ya.value:ya.textContent,Ir=!0)),Ee=wl(H,ve),0<Ee.length&&(ve=new ip(ve,e,null,r,Z),W.push({event:ve,listeners:Ee}),me?ve.data=me:(me=mp(r),me!==null&&(ve.data=me)))),(me=ej?tj(e,r):nj(e,r))&&(ve=wl(H,"onBeforeInput"),0<ve.length&&(Ee=new ip("onBeforeInput","beforeinput",null,r,Z),W.push({event:Ee,listeners:ve}),Ee.data=me)),Fj(W,e,H,r,Z)}Xg(W,t)})}function Bs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function wl(e,t){for(var r=t+"Capture",i=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Wo(e,r),c!=null&&i.unshift(Bs(e,c,f)),c=Wo(e,t),c!=null&&i.push(Bs(e,c,f))),e.tag===3)return i;e=e.return}return[]}function uo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kg(e,t,r,i,c){for(var f=t._reactName,y=[];r!==null&&r!==i;){var j=r,T=j.alternate,H=j.stateNode;if(j=j.tag,T!==null&&T===i)break;j!==5&&j!==26&&j!==27||H===null||(T=H,c?(H=Wo(r,f),H!=null&&y.unshift(Bs(r,H,T))):c||(H=Wo(r,f),H!=null&&y.push(Bs(r,H,T)))),r=r.return}y.length!==0&&e.push({event:t,listeners:y})}var Zj=/\r\n?/g,Kj=/\u0000|\uFFFD/g;function Qg(e){return(typeof e=="string"?e:""+e).replace(Zj,`
`).replace(Kj,"")}function Wg(e,t){return t=Qg(t),Qg(e)===t}function jl(){}function Ue(e,t,r,i,c,f){switch(r){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||zr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&zr(e,""+i);break;case"className":Ai(e,"class",i);break;case"tabIndex":Ai(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ai(e,r,i);break;case"style":tp(e,i,f);break;case"data":if(t!=="object"){Ai(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(r);break}i=Ti(""+i),e.setAttribute(r,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(t!=="input"&&Ue(e,t,"name",c.name,c,null),Ue(e,t,"formEncType",c.formEncType,c,null),Ue(e,t,"formMethod",c.formMethod,c,null),Ue(e,t,"formTarget",c.formTarget,c,null)):(Ue(e,t,"encType",c.encType,c,null),Ue(e,t,"method",c.method,c,null),Ue(e,t,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(r);break}i=Ti(""+i),e.setAttribute(r,i);break;case"onClick":i!=null&&(e.onclick=jl);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(r=i.__html,r!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}r=Ti(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,""+i):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":i===!0?e.setAttribute(r,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(r,i):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(r,i):e.removeAttribute(r);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(r):e.setAttribute(r,i);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Ci(e,"popover",i);break;case"xlinkActuate":Hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Hn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Hn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Hn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Hn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ci(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=A0.get(r)||r,Ci(e,r,i))}}function Sd(e,t,r,i,c,f){switch(r){case"style":tp(e,i,f);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(r=i.__html,r!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"children":typeof i=="string"?zr(e,i):(typeof i=="number"||typeof i=="bigint")&&zr(e,""+i);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"onClick":i!=null&&(e.onclick=jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qm.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),t=r.slice(2,c?r.length-7:void 0),f=e[At]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(t,f,c),typeof i=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,i,c);break e}r in e?e[r]=i:i===!0?e.setAttribute(r,""):Ci(e,r,i)}}}function ht(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var i=!1,c=!1,f;for(f in r)if(r.hasOwnProperty(f)){var y=r[f];if(y!=null)switch(f){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ue(e,t,f,y,r,null)}}c&&Ue(e,t,"srcSet",r.srcSet,r,null),i&&Ue(e,t,"src",r.src,r,null);return;case"input":Ce("invalid",e);var j=f=y=c=null,T=null,H=null;for(i in r)if(r.hasOwnProperty(i)){var Z=r[i];if(Z!=null)switch(i){case"name":c=Z;break;case"type":y=Z;break;case"checked":T=Z;break;case"defaultChecked":H=Z;break;case"value":f=Z;break;case"defaultValue":j=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(l(137,t));break;default:Ue(e,t,i,Z,r,null)}}Km(e,f,j,T,H,y,c,!1),Oi(e);return;case"select":Ce("invalid",e),i=y=f=null;for(c in r)if(r.hasOwnProperty(c)&&(j=r[c],j!=null))switch(c){case"value":f=j;break;case"defaultValue":y=j;break;case"multiple":i=j;default:Ue(e,t,c,j,r,null)}t=f,r=y,e.multiple=!!i,t!=null?Br(e,!!i,t,!1):r!=null&&Br(e,!!i,r,!0);return;case"textarea":Ce("invalid",e),f=c=i=null;for(y in r)if(r.hasOwnProperty(y)&&(j=r[y],j!=null))switch(y){case"value":i=j;break;case"defaultValue":c=j;break;case"children":f=j;break;case"dangerouslySetInnerHTML":if(j!=null)throw Error(l(91));break;default:Ue(e,t,y,j,r,null)}Wm(e,i,c,f),Oi(e);return;case"option":for(T in r)if(r.hasOwnProperty(T)&&(i=r[T],i!=null))switch(T){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ue(e,t,T,i,r,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(i=0;i<Ms.length;i++)Ce(Ms[i],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in r)if(r.hasOwnProperty(H)&&(i=r[H],i!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ue(e,t,H,i,r,null)}return;default:if(Ic(t)){for(Z in r)r.hasOwnProperty(Z)&&(i=r[Z],i!==void 0&&Sd(e,t,Z,i,r,void 0));return}}for(j in r)r.hasOwnProperty(j)&&(i=r[j],i!=null&&Ue(e,t,j,i,r,null))}function Qj(e,t,r,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,j=null,T=null,H=null,Z=null;for(F in r){var W=r[F];if(r.hasOwnProperty(F)&&W!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":T=W;default:i.hasOwnProperty(F)||Ue(e,t,F,null,i,W)}}for(var G in i){var F=i[G];if(W=r[G],i.hasOwnProperty(G)&&(F!=null||W!=null))switch(G){case"type":f=F;break;case"name":c=F;break;case"checked":H=F;break;case"defaultChecked":Z=F;break;case"value":y=F;break;case"defaultValue":j=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(l(137,t));break;default:F!==W&&Ue(e,t,G,F,i,W)}}_c(e,y,j,T,H,Z,f,c);return;case"select":F=y=j=G=null;for(f in r)if(T=r[f],r.hasOwnProperty(f)&&T!=null)switch(f){case"value":break;case"multiple":F=T;default:i.hasOwnProperty(f)||Ue(e,t,f,null,i,T)}for(c in i)if(f=i[c],T=r[c],i.hasOwnProperty(c)&&(f!=null||T!=null))switch(c){case"value":G=f;break;case"defaultValue":j=f;break;case"multiple":y=f;default:f!==T&&Ue(e,t,c,f,i,T)}t=j,r=y,i=F,G!=null?Br(e,!!r,G,!1):!!i!=!!r&&(t!=null?Br(e,!!r,t,!0):Br(e,!!r,r?[]:"",!1));return;case"textarea":F=G=null;for(j in r)if(c=r[j],r.hasOwnProperty(j)&&c!=null&&!i.hasOwnProperty(j))switch(j){case"value":break;case"children":break;default:Ue(e,t,j,null,i,c)}for(y in i)if(c=i[y],f=r[y],i.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":G=c;break;case"defaultValue":F=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==f&&Ue(e,t,y,c,i,f)}Qm(e,G,F);return;case"option":for(var be in r)if(G=r[be],r.hasOwnProperty(be)&&G!=null&&!i.hasOwnProperty(be))switch(be){case"selected":e.selected=!1;break;default:Ue(e,t,be,null,i,G)}for(T in i)if(G=i[T],F=r[T],i.hasOwnProperty(T)&&G!==F&&(G!=null||F!=null))switch(T){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Ue(e,t,T,G,i,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in r)G=r[ge],r.hasOwnProperty(ge)&&G!=null&&!i.hasOwnProperty(ge)&&Ue(e,t,ge,null,i,G);for(H in i)if(G=i[H],F=r[H],i.hasOwnProperty(H)&&G!==F&&(G!=null||F!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(l(137,t));break;default:Ue(e,t,H,G,i,F)}return;default:if(Ic(t)){for(var Ie in r)G=r[Ie],r.hasOwnProperty(Ie)&&G!==void 0&&!i.hasOwnProperty(Ie)&&Sd(e,t,Ie,void 0,i,G);for(Z in i)G=i[Z],F=r[Z],!i.hasOwnProperty(Z)||G===F||G===void 0&&F===void 0||Sd(e,t,Z,G,i,F);return}}for(var U in r)G=r[U],r.hasOwnProperty(U)&&G!=null&&!i.hasOwnProperty(U)&&Ue(e,t,U,null,i,G);for(W in i)G=i[W],F=r[W],!i.hasOwnProperty(W)||G===F||G==null&&F==null||Ue(e,t,W,G,i,F)}var Ed=null,Nd=null;function Sl(e){return e.nodeType===9?e:e.ownerDocument}function ev(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Cd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ad=null;function Wj(){var e=window.event;return e&&e.type==="popstate"?e===Ad?!1:(Ad=e,!0):(Ad=null,!1)}var nv=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(e){return av.resolve(null).then(e).catch(nS)}:nv;function nS(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function rv(e,t){var r=t,i=0,c=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<i&&8>i){r=i;var y=e.ownerDocument;if(r&1&&zs(y.documentElement),r&2&&zs(y.body),r&4)for(r=y.head,zs(r),y=r.firstChild;y;){var j=y.nextSibling,T=y.nodeName;y[Ko]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&y.rel.toLowerCase()==="stylesheet"||r.removeChild(y),y=j}}if(c===0){e.removeChild(f),qs(t);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:i=r.charCodeAt(0)-48;else i=0;r=f}while(r);qs(t)}function Od(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Od(r),Lc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function aS(e,t,r,i){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Ko])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Sn(e.nextSibling),e===null)break}return null}function rS(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Sn(e.nextSibling),e===null))return null;return e}function kd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function oS(e,t){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")t();else{var i=function(){t(),r.removeEventListener("DOMContentLoaded",i)};r.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Td=null;function ov(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}function sv(e,t,r){switch(t=Sl(r),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function zs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Lc(e)}var cn=new Map,iv=new Set;function El(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=ee.d;ee.d={f:sS,r:iS,D:lS,C:cS,L:uS,m:dS,X:mS,S:fS,M:pS};function sS(){var e=na.f(),t=hl();return e||t}function iS(e){var t=Rr(e);t!==null&&t.tag===5&&t.type==="form"?Ah(t):na.r(e)}var fo=typeof document>"u"?null:document;function lv(e,t,r){var i=fo;if(i&&typeof t=="string"&&t){var c=tn(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),iv.has(c)||(iv.add(c),e={rel:e,crossOrigin:r,href:t},i.querySelector(c)===null&&(t=i.createElement("link"),ht(t,"link",e),lt(t),i.head.appendChild(t)))}}function lS(e){na.D(e),lv("dns-prefetch",e,null)}function cS(e,t){na.C(e,t),lv("preconnect",e,t)}function uS(e,t,r){na.L(e,t,r);var i=fo;if(i&&e&&t){var c='link[rel="preload"][as="'+tn(t)+'"]';t==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+tn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+tn(r.imageSizes)+'"]')):c+='[href="'+tn(e)+'"]';var f=c;switch(t){case"style":f=mo(e);break;case"script":f=po(e)}cn.has(f)||(e=b({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),cn.set(f,e),i.querySelector(c)!==null||t==="style"&&i.querySelector(_s(f))||t==="script"&&i.querySelector(Us(f))||(t=i.createElement("link"),ht(t,"link",e),lt(t),i.head.appendChild(t)))}}function dS(e,t){na.m(e,t);var r=fo;if(r&&e){var i=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+tn(i)+'"][href="'+tn(e)+'"]',f=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=po(e)}if(!cn.has(f)&&(e=b({rel:"modulepreload",href:e},t),cn.set(f,e),r.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Us(f)))return}i=r.createElement("link"),ht(i,"link",e),lt(i),r.head.appendChild(i)}}}function fS(e,t,r){na.S(e,t,r);var i=fo;if(i&&e){var c=Dr(i).hoistableStyles,f=mo(e);t=t||"default";var y=c.get(f);if(!y){var j={loading:0,preload:null};if(y=i.querySelector(_s(f)))j.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},r),(r=cn.get(f))&&Rd(e,r);var T=y=i.createElement("link");lt(T),ht(T,"link",e),T._p=new Promise(function(H,Z){T.onload=H,T.onerror=Z}),T.addEventListener("load",function(){j.loading|=1}),T.addEventListener("error",function(){j.loading|=2}),j.loading|=4,Nl(y,t,i)}y={type:"stylesheet",instance:y,count:1,state:j},c.set(f,y)}}}function mS(e,t){na.X(e,t);var r=fo;if(r&&e){var i=Dr(r).hoistableScripts,c=po(e),f=i.get(c);f||(f=r.querySelector(Us(c)),f||(e=b({src:e,async:!0},t),(t=cn.get(c))&&Dd(e,t),f=r.createElement("script"),lt(f),ht(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},i.set(c,f))}}function pS(e,t){na.M(e,t);var r=fo;if(r&&e){var i=Dr(r).hoistableScripts,c=po(e),f=i.get(c);f||(f=r.querySelector(Us(c)),f||(e=b({src:e,async:!0,type:"module"},t),(t=cn.get(c))&&Dd(e,t),f=r.createElement("script"),lt(f),ht(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},i.set(c,f))}}function cv(e,t,r,i){var c=(c=fe.current)?El(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=mo(r.href),r=Dr(c).hoistableStyles,i=r.get(t),i||(i={type:"style",instance:null,count:0,state:null},r.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=mo(r.href);var f=Dr(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(_s(e)))&&!f._p&&(y.instance=f,y.state.loading=5),cn.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},cn.set(e,r),f||hS(c,e,r,y.state))),t&&i===null)throw Error(l(528,""));return y}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=po(r),r=Dr(c).hoistableScripts,i=r.get(t),i||(i={type:"script",instance:null,count:0,state:null},r.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function mo(e){return'href="'+tn(e)+'"'}function _s(e){return'link[rel="stylesheet"]['+e+"]"}function uv(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function hS(e,t,r,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ht(t,"link",r),lt(t),e.head.appendChild(t))}function po(e){return'[src="'+tn(e)+'"]'}function Us(e){return"script[async]"+e}function dv(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+tn(r.href)+'"]');if(i)return t.instance=i,lt(i),i;var c=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),lt(i),ht(i,"style",c),Nl(i,r.precedence,e),t.instance=i;case"stylesheet":c=mo(r.href);var f=e.querySelector(_s(c));if(f)return t.state.loading|=4,t.instance=f,lt(f),f;i=uv(r),(c=cn.get(c))&&Rd(i,c),f=(e.ownerDocument||e).createElement("link"),lt(f);var y=f;return y._p=new Promise(function(j,T){y.onload=j,y.onerror=T}),ht(f,"link",i),t.state.loading|=4,Nl(f,r.precedence,e),t.instance=f;case"script":return f=po(r.src),(c=e.querySelector(Us(f)))?(t.instance=c,lt(c),c):(i=r,(c=cn.get(f))&&(i=b({},r),Dd(i,c)),e=e.ownerDocument||e,c=e.createElement("script"),lt(c),ht(c,"link",i),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Nl(i,r.precedence,e));return t.instance}function Nl(e,t,r){for(var i=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,f=c,y=0;y<i.length;y++){var j=i[y];if(j.dataset.precedence===t)f=j;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function Rd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Dd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cl=null;function fv(e,t,r){if(Cl===null){var i=new Map,c=Cl=new Map;c.set(r,i)}else c=Cl,i=c.get(r),i||(i=new Map,c.set(r,i));if(i.has(e))return i;for(i.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var f=r[c];if(!(f[Ko]||f[bt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(t)||"";y=e+y;var j=i.get(y);j?j.push(f):i.set(y,[f])}}return i}function mv(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function gS(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Is=null;function vS(){}function bS(e,t,r){if(Is===null)throw Error(l(475));var i=Is;if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var c=mo(r.href),f=e.querySelector(_s(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Al.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=f,lt(f);return}f=e.ownerDocument||e,r=uv(r),(c=cn.get(c))&&Rd(r,c),f=f.createElement("link"),lt(f);var y=f;y._p=new Promise(function(j,T){y.onload=j,y.onerror=T}),ht(f,"link",r),t.instance=f}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Al.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function yS(){if(Is===null)throw Error(l(475));var e=Is;return e.stylesheets&&e.count===0&&Ld(e,e.stylesheets),0<e.count?function(t){var r=setTimeout(function(){if(e.stylesheets&&Ld(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Al(){if(this.count--,this.count===0){if(this.stylesheets)Ld(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ol=null;function Ld(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ol=new Map,t.forEach(xS,e),Ol=null,Al.call(e))}function xS(e,t){if(!(t.state.loading&4)){var r=Ol.get(e);if(r)var i=r.get(null);else{r=new Map,Ol.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),i=y)}i&&r.set(null,i)}c=t.instance,y=c.getAttribute("data-precedence"),f=r.get(y)||i,f===i&&r.set(null,c),r.set(y,c),this.count++,i=Al.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Ps={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function wS(e,t,r,i,c,f,y,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.hiddenUpdates=kc(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function hv(e,t,r,i,c,f,y,j,T,H,Z,W){return e=new wS(e,t,r,y,j,T,H,W),t=1,f===!0&&(t|=24),f=It(3,null,null,t),e.current=f,f.stateNode=e,t=pu(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:i,isDehydrated:r,cache:t},bu(f),e}function gv(e){return e?(e=qr,e):qr}function vv(e,t,r,i,c,f){c=gv(c),i.context===null?i.context=c:i.pendingContext=c,i=ja(t),i.payload={element:r},f=f===void 0?null:f,f!==null&&(i.callback=f),r=Sa(e,i,t),r!==null&&(qt(r,e,t),gs(r,e,t))}function bv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Md(e,t){bv(e,t),(e=e.alternate)&&bv(e,t)}function yv(e){if(e.tag===13){var t=Gr(e,67108864);t!==null&&qt(t,e,67108864),Md(e,67108864)}}var kl=!0;function jS(e,t,r,i){var c=$.T;$.T=null;var f=ee.p;try{ee.p=2,Bd(e,t,r,i)}finally{ee.p=f,$.T=c}}function SS(e,t,r,i){var c=$.T;$.T=null;var f=ee.p;try{ee.p=8,Bd(e,t,r,i)}finally{ee.p=f,$.T=c}}function Bd(e,t,r,i){if(kl){var c=zd(i);if(c===null)jd(e,t,i,Tl,r),wv(e,i);else if(NS(c,e,t,r,i))i.stopPropagation();else if(wv(e,i),t&4&&-1<ES.indexOf(e)){for(;c!==null;){var f=Rr(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Xa(f.pendingLanes);if(y!==0){var j=f;for(j.pendingLanes|=2,j.entangledLanes|=2;y;){var T=1<<31-_t(y);j.entanglements[1]|=T,y&=~T}Rn(f),(Le&6)===0&&(ml=ot()+500,Ls(0))}}break;case 13:j=Gr(f,2),j!==null&&qt(j,f,2),hl(),Md(f,2)}if(f=zd(i),f===null&&jd(e,t,i,Tl,r),f===c)break;c=f}c!==null&&i.stopPropagation()}else jd(e,t,i,null,r)}}function zd(e){return e=$c(e),_d(e)}var Tl=null;function _d(e){if(Tl=null,e=Tr(e),e!==null){var t=d(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=p(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Tl=e,null}function xv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Yo()){case Cr:return 2;case Wt:return 8;case xn:case Ar:return 32;case Ya:return 268435456;default:return 32}default:return 32}}var Ud=!1,za=null,_a=null,Ua=null,$s=new Map,Hs=new Map,Ia=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wv(e,t){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":$s.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hs.delete(t.pointerId)}}function Gs(e,t,r,i,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:f,targetContainers:[c]},t!==null&&(t=Rr(t),t!==null&&yv(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function NS(e,t,r,i,c){switch(t){case"focusin":return za=Gs(za,e,t,r,i,c),!0;case"dragenter":return _a=Gs(_a,e,t,r,i,c),!0;case"mouseover":return Ua=Gs(Ua,e,t,r,i,c),!0;case"pointerover":var f=c.pointerId;return $s.set(f,Gs($s.get(f)||null,e,t,r,i,c)),!0;case"gotpointercapture":return f=c.pointerId,Hs.set(f,Gs(Hs.get(f)||null,e,t,r,i,c)),!0}return!1}function jv(e){var t=Tr(e.target);if(t!==null){var r=d(t);if(r!==null){if(t=r.tag,t===13){if(t=p(r),t!==null){e.blockedOn=t,b0(e.priority,function(){if(r.tag===13){var i=Gt();i=Tc(i);var c=Gr(r,i);c!==null&&qt(c,r,i),Md(r,i)}});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=zd(e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Pc=i,r.target.dispatchEvent(i),Pc=null}else return t=Rr(r),t!==null&&yv(t),e.blockedOn=r,!1;t.shift()}return!0}function Sv(e,t,r){Rl(e)&&r.delete(t)}function CS(){Ud=!1,za!==null&&Rl(za)&&(za=null),_a!==null&&Rl(_a)&&(_a=null),Ua!==null&&Rl(Ua)&&(Ua=null),$s.forEach(Sv),Hs.forEach(Sv)}function Dl(e,t){e.blockedOn===t&&(e.blockedOn=null,Ud||(Ud=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,CS)))}var Ll=null;function Ev(e){Ll!==e&&(Ll=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ll===e&&(Ll=null);for(var t=0;t<e.length;t+=3){var r=e[t],i=e[t+1],c=e[t+2];if(typeof i!="function"){if(_d(i||r)===null)continue;break}var f=Rr(r);f!==null&&(e.splice(t,3),t-=3,_u(f,{pending:!0,data:c,method:r.method,action:i},i,c))}}))}function qs(e){function t(T){return Dl(T,e)}za!==null&&Dl(za,e),_a!==null&&Dl(_a,e),Ua!==null&&Dl(Ua,e),$s.forEach(t),Hs.forEach(t);for(var r=0;r<Ia.length;r++){var i=Ia[r];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ia.length&&(r=Ia[0],r.blockedOn===null);)jv(r),r.blockedOn===null&&Ia.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(i=0;i<r.length;i+=3){var c=r[i],f=r[i+1],y=c[At]||null;if(typeof f=="function")y||Ev(r);else if(y){var j=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[At]||null)j=y.formAction;else if(_d(c)!==null)continue}else j=y.action;typeof j=="function"?r[i+1]=j:(r.splice(i,3),i-=3),Ev(r)}}}function Id(e){this._internalRoot=e}Ml.prototype.render=Id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var r=t.current,i=Gt();vv(r,i,e,t,null,null)},Ml.prototype.unmount=Id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vv(e.current,2,null,e,null,null),hl(),t[kr]=null}};function Ml(e){this._internalRoot=e}Ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=$m();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ia.length&&t!==0&&t<Ia[r].priority;r++);Ia.splice(r,0,e),r===0&&jv(e)}};var Nv=a.version;if(Nv!=="19.1.1")throw Error(l(527,Nv,"19.1.1"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=h(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var AS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{je=Bl.inject(AS),Ye=Bl}catch{}}return Fs.createRoot=function(e,t){if(!u(e))throw Error(l(299));var r=!1,i="",c=$h,f=Hh,y=Gh,j=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(j=t.unstable_transitionCallbacks)),t=hv(e,1,!1,null,null,r,i,c,f,y,j,null),e[kr]=t.current,wd(e),new Id(t)},Fs.hydrateRoot=function(e,t,r){if(!u(e))throw Error(l(299));var i=!1,c="",f=$h,y=Hh,j=Gh,T=null,H=null;return r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(j=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks),r.formState!==void 0&&(H=r.formState)),t=hv(e,1,!0,t,r??null,i,c,f,y,j,T,H),t.context=gv(null),r=t.current,i=Gt(),i=Tc(i),c=ja(i),c.callback=null,Sa(r,c,i),r=i,t.current.lanes=r,Zo(t,r),Rn(t),e[kr]=t.current,wd(e),new Ml(t)},Fs.version="19.1.1",Fs}var Bv;function zS(){if(Bv)return Hd.exports;Bv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),Hd.exports=BS(),Hd.exports}var _S=zS();const US=Ro(_S);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zv="popstate";function IS(n={}){function a(u,d){let{pathname:p="/",search:g="",hash:h=""}=wr(u.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),df("",{pathname:p,search:g,hash:h},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(u,d){let p=u.document.querySelector("base"),g="";if(p&&p.getAttribute("href")){let h=u.location.href,v=h.indexOf("#");g=v===-1?h:h.slice(0,v)}return g+"#"+(typeof d=="string"?d:ni(d))}function l(u,d){hn(u.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return $S(a,o,l,n)}function Ve(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function hn(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function PS(){return Math.random().toString(36).substring(2,10)}function _v(n,a){return{usr:n.state,key:n.key,idx:a}}function df(n,a,o=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?wr(a):a,state:o,key:a&&a.key||l||PS()}}function ni({pathname:n="/",search:a="",hash:o=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function wr(n){let a={};if(n){let o=n.indexOf("#");o>=0&&(a.hash=n.substring(o),n=n.substring(0,o));let l=n.indexOf("?");l>=0&&(a.search=n.substring(l),n=n.substring(0,l)),n&&(a.pathname=n)}return a}function $S(n,a,o,l={}){let{window:u=document.defaultView,v5Compat:d=!1}=l,p=u.history,g="POP",h=null,v=b();v==null&&(v=0,p.replaceState({...p.state,idx:v},""));function b(){return(p.state||{idx:null}).idx}function x(){g="POP";let E=b(),O=E==null?null:E-v;v=E,h&&h({action:g,location:k.location,delta:O})}function w(E,O){g="PUSH";let N=df(k.location,E,O);o&&o(N,E),v=b()+1;let D=_v(N,v),L=k.createHref(N);try{p.pushState(D,"",L)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;u.location.assign(L)}d&&h&&h({action:g,location:k.location,delta:1})}function S(E,O){g="REPLACE";let N=df(k.location,E,O);o&&o(N,E),v=b();let D=_v(N,v),L=k.createHref(N);p.replaceState(D,"",L),d&&h&&h({action:g,location:k.location,delta:0})}function C(E){return HS(E)}let k={get action(){return g},get location(){return n(u,p)},listen(E){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(zv,x),h=E,()=>{u.removeEventListener(zv,x),h=null}},createHref(E){return a(u,E)},createURL:C,encodeLocation(E){let O=C(E);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:w,replace:S,go(E){return p.go(E)}};return k}function HS(n,a=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ve(o,"No window.location.(origin|href) available to create URL");let l=typeof n=="string"?n:ni(n);return l=l.replace(/ $/,"%20"),!a&&l.startsWith("//")&&(l=o+l),new URL(l,o)}function $b(n,a,o="/"){return GS(n,a,o,!1)}function GS(n,a,o,l){let u=typeof a=="string"?wr(a):a,d=ca(u.pathname||"/",o);if(d==null)return null;let p=Hb(n);qS(p);let g=null;for(let h=0;g==null&&h<p.length;++h){let v=tE(d);g=WS(p[h],v,l)}return g}function Hb(n,a=[],o=[],l="",u=!1){let d=(p,g,h=u,v)=>{let b={relativePath:v===void 0?p.path||"":v,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(l)&&h)return;Ve(b.relativePath.startsWith(l),`Absolute route path "${b.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(l.length)}let x=sa([l,b.relativePath]),w=o.concat(b);p.children&&p.children.length>0&&(Ve(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Hb(p.children,a,w,x,h)),!(p.path==null&&!p.index)&&a.push({path:x,score:KS(x,p.index),routesMeta:w})};return n.forEach((p,g)=>{if(p.path===""||!p.path?.includes("?"))d(p,g);else for(let h of Gb(p.path))d(p,g,!0,h)}),a}function Gb(n){let a=n.split("/");if(a.length===0)return[];let[o,...l]=a,u=o.endsWith("?"),d=o.replace(/\?$/,"");if(l.length===0)return u?[d,""]:[d];let p=Gb(l.join("/")),g=[];return g.push(...p.map(h=>h===""?d:[d,h].join("/"))),u&&g.push(...p),g.map(h=>n.startsWith("/")&&h===""?"/":h)}function qS(n){n.sort((a,o)=>a.score!==o.score?o.score-a.score:QS(a.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var JS=/^:[\w-]+$/,FS=3,VS=2,YS=1,XS=10,ZS=-2,Uv=n=>n==="*";function KS(n,a){let o=n.split("/"),l=o.length;return o.some(Uv)&&(l+=ZS),a&&(l+=VS),o.filter(u=>!Uv(u)).reduce((u,d)=>u+(JS.test(d)?FS:d===""?YS:XS),l)}function QS(n,a){return n.length===a.length&&n.slice(0,-1).every((l,u)=>l===a[u])?n[n.length-1]-a[a.length-1]:0}function WS(n,a,o=!1){let{routesMeta:l}=n,u={},d="/",p=[];for(let g=0;g<l.length;++g){let h=l[g],v=g===l.length-1,b=d==="/"?a:a.slice(d.length)||"/",x=Vl({path:h.relativePath,caseSensitive:h.caseSensitive,end:v},b),w=h.route;if(!x&&v&&o&&!l[l.length-1].route.index&&(x=Vl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},b)),!x)return null;Object.assign(u,x.params),p.push({params:u,pathname:sa([d,x.pathname]),pathnameBase:oE(sa([d,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(d=sa([d,x.pathnameBase]))}return p}function Vl(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,l]=eE(n.path,n.caseSensitive,n.end),u=a.match(o);if(!u)return null;let d=u[0],p=d.replace(/(.)\/+$/,"$1"),g=u.slice(1);return{params:l.reduce((v,{paramName:b,isOptional:x},w)=>{if(b==="*"){let C=g[w]||"";p=d.slice(0,d.length-C.length).replace(/(.)\/+$/,"$1")}const S=g[w];return x&&!S?v[b]=void 0:v[b]=(S||"").replace(/%2F/g,"/"),v},{}),pathname:d,pathnameBase:p,pattern:n}}function eE(n,a=!1,o=!0){hn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,h)=>(l.push({paramName:g,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(l.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),l]}function tE(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return hn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function ca(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,l=n.charAt(o);return l&&l!=="/"?null:n.slice(o)||"/"}function nE(n,a="/"){let{pathname:o,search:l="",hash:u=""}=typeof n=="string"?wr(n):n;return{pathname:o?o.startsWith("/")?o:aE(o,a):a,search:sE(l),hash:iE(u)}}function aE(n,a){let o=a.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function Fd(n,a,o,l){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rE(n){return n.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function Bf(n){let a=rE(n);return a.map((o,l)=>l===a.length-1?o.pathname:o.pathnameBase)}function zf(n,a,o,l=!1){let u;typeof n=="string"?u=wr(n):(u={...n},Ve(!u.pathname||!u.pathname.includes("?"),Fd("?","pathname","search",u)),Ve(!u.pathname||!u.pathname.includes("#"),Fd("#","pathname","hash",u)),Ve(!u.search||!u.search.includes("#"),Fd("#","search","hash",u)));let d=n===""||u.pathname==="",p=d?"/":u.pathname,g;if(p==null)g=o;else{let x=a.length-1;if(!l&&p.startsWith("..")){let w=p.split("/");for(;w[0]==="..";)w.shift(),x-=1;u.pathname=w.join("/")}g=x>=0?a[x]:"/"}let h=nE(u,g),v=p&&p!=="/"&&p.endsWith("/"),b=(d||p===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(v||b)&&(h.pathname+="/"),h}var sa=n=>n.join("/").replace(/\/\/+/g,"/"),oE=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),sE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,iE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function lE(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var qb=["POST","PUT","PATCH","DELETE"];new Set(qb);var cE=["GET",...qb];new Set(cE);var Do=m.createContext(null);Do.displayName="DataRouter";var lc=m.createContext(null);lc.displayName="DataRouterState";m.createContext(!1);var Jb=m.createContext({isTransitioning:!1});Jb.displayName="ViewTransition";var uE=m.createContext(new Map);uE.displayName="Fetchers";var dE=m.createContext(null);dE.displayName="Await";var Cn=m.createContext(null);Cn.displayName="Navigation";var ii=m.createContext(null);ii.displayName="Location";var _n=m.createContext({outlet:null,matches:[],isDataRoute:!1});_n.displayName="Route";var _f=m.createContext(null);_f.displayName="RouteError";function fE(n,{relative:a}={}){Ve(Lo(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=m.useContext(Cn),{hash:u,pathname:d,search:p}=li(n,{relative:a}),g=d;return o!=="/"&&(g=d==="/"?o:sa([o,d])),l.createHref({pathname:g,search:p,hash:u})}function Lo(){return m.useContext(ii)!=null}function Un(){return Ve(Lo(),"useLocation() may be used only in the context of a <Router> component."),m.useContext(ii).location}var Fb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vb(n){m.useContext(Cn).static||m.useLayoutEffect(n)}function In(){let{isDataRoute:n}=m.useContext(_n);return n?NE():mE()}function mE(){Ve(Lo(),"useNavigate() may be used only in the context of a <Router> component.");let n=m.useContext(Do),{basename:a,navigator:o}=m.useContext(Cn),{matches:l}=m.useContext(_n),{pathname:u}=Un(),d=JSON.stringify(Bf(l)),p=m.useRef(!1);return Vb(()=>{p.current=!0}),m.useCallback((h,v={})=>{if(hn(p.current,Fb),!p.current)return;if(typeof h=="number"){o.go(h);return}let b=zf(h,JSON.parse(d),u,v.relative==="path");n==null&&a!=="/"&&(b.pathname=b.pathname==="/"?a:sa([a,b.pathname])),(v.replace?o.replace:o.push)(b,v.state,v)},[a,o,d,u,n])}m.createContext(null);function li(n,{relative:a}={}){let{matches:o}=m.useContext(_n),{pathname:l}=Un(),u=JSON.stringify(Bf(o));return m.useMemo(()=>zf(n,JSON.parse(u),l,a==="path"),[n,u,l,a])}function pE(n,a){return Yb(n,a)}function Yb(n,a,o,l,u){Ve(Lo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=m.useContext(Cn),{matches:p}=m.useContext(_n),g=p[p.length-1],h=g?g.params:{},v=g?g.pathname:"/",b=g?g.pathnameBase:"/",x=g&&g.route;{let N=x&&x.path||"";Xb(v,!x||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let w=Un(),S;if(a){let N=typeof a=="string"?wr(a):a;Ve(b==="/"||N.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${N.pathname}" was given in the \`location\` prop.`),S=N}else S=w;let C=S.pathname||"/",k=C;if(b!=="/"){let N=b.replace(/^\//,"").split("/");k="/"+C.replace(/^\//,"").split("/").slice(N.length).join("/")}let E=$b(n,{pathname:k});hn(x||E!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),hn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=yE(E&&E.map(N=>Object.assign({},N,{params:Object.assign({},h,N.params),pathname:sa([b,d.encodeLocation?d.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?b:sa([b,d.encodeLocation?d.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),p,o,l,u);return a&&O?m.createElement(ii.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},O):O}function hE(){let n=EE(),a=lE(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:l},d={padding:"2px 4px",backgroundColor:l},p=null;return console.error("Error handled by React Router default ErrorBoundary:",n),p=m.createElement(m.Fragment,null,m.createElement("p",null,"💿 Hey developer 👋"),m.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",m.createElement("code",{style:d},"ErrorBoundary")," or"," ",m.createElement("code",{style:d},"errorElement")," prop on your route.")),m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},a),o?m.createElement("pre",{style:u},o):null,p)}var gE=m.createElement(hE,null),vE=class extends m.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.unstable_onError?this.props.unstable_onError(n,a):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?m.createElement(_n.Provider,{value:this.props.routeContext},m.createElement(_f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bE({routeContext:n,match:a,children:o}){let l=m.useContext(Do);return l&&l.static&&l.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=a.route.id),m.createElement(_n.Provider,{value:n},o)}function yE(n,a=[],o=null,l=null,u=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let d=n,p=o?.errors;if(p!=null){let v=d.findIndex(b=>b.route.id&&p?.[b.route.id]!==void 0);Ve(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let g=!1,h=-1;if(o)for(let v=0;v<d.length;v++){let b=d[v];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(h=v),b.route.id){let{loaderData:x,errors:w}=o,S=b.route.loader&&!x.hasOwnProperty(b.route.id)&&(!w||w[b.route.id]===void 0);if(b.route.lazy||S){g=!0,h>=0?d=d.slice(0,h+1):d=[d[0]];break}}}return d.reduceRight((v,b,x)=>{let w,S=!1,C=null,k=null;o&&(w=p&&b.route.id?p[b.route.id]:void 0,C=b.route.errorElement||gE,g&&(h<0&&x===0?(Xb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):h===x&&(S=!0,k=b.route.hydrateFallbackElement||null)));let E=a.concat(d.slice(0,x+1)),O=()=>{let N;return w?N=C:S?N=k:b.route.Component?N=m.createElement(b.route.Component,null):b.route.element?N=b.route.element:N=v,m.createElement(bE,{match:b,routeContext:{outlet:v,matches:E,isDataRoute:o!=null},children:N})};return o&&(b.route.ErrorBoundary||b.route.errorElement||x===0)?m.createElement(vE,{location:o.location,revalidation:o.revalidation,component:C,error:w,children:O(),routeContext:{outlet:null,matches:E,isDataRoute:!0},unstable_onError:l}):O()},null)}function Uf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xE(n){let a=m.useContext(Do);return Ve(a,Uf(n)),a}function wE(n){let a=m.useContext(lc);return Ve(a,Uf(n)),a}function jE(n){let a=m.useContext(_n);return Ve(a,Uf(n)),a}function If(n){let a=jE(n),o=a.matches[a.matches.length-1];return Ve(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function SE(){return If("useRouteId")}function EE(){let n=m.useContext(_f),a=wE("useRouteError"),o=If("useRouteError");return n!==void 0?n:a.errors?.[o]}function NE(){let{router:n}=xE("useNavigate"),a=If("useNavigate"),o=m.useRef(!1);return Vb(()=>{o.current=!0}),m.useCallback(async(u,d={})=>{hn(o.current,Fb),o.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:a,...d}))},[n,a])}var Iv={};function Xb(n,a,o){!a&&!Iv[n]&&(Iv[n]=!0,hn(!1,o))}m.memo(CE);function CE({routes:n,future:a,state:o,unstable_onError:l}){return Yb(n,void 0,o,l,a)}function AE({to:n,replace:a,state:o,relative:l}){Ve(Lo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=m.useContext(Cn);hn(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=m.useContext(_n),{pathname:p}=Un(),g=In(),h=zf(n,Bf(d),p,l==="path"),v=JSON.stringify(h);return m.useEffect(()=>{g(JSON.parse(v),{replace:a,state:o,relative:l})},[g,v,l,a,o]),null}function dn(n){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function OE({basename:n="/",children:a=null,location:o,navigationType:l="POP",navigator:u,static:d=!1}){Ve(!Lo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=n.replace(/^\/*/,"/"),g=m.useMemo(()=>({basename:p,navigator:u,static:d,future:{}}),[p,u,d]);typeof o=="string"&&(o=wr(o));let{pathname:h="/",search:v="",hash:b="",state:x=null,key:w="default"}=o,S=m.useMemo(()=>{let C=ca(h,p);return C==null?null:{location:{pathname:C,search:v,hash:b,state:x,key:w},navigationType:l}},[p,h,v,b,x,w,l]);return hn(S!=null,`<Router basename="${p}"> is not able to match the URL "${h}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:m.createElement(Cn.Provider,{value:g},m.createElement(ii.Provider,{children:a,value:S}))}function kE({children:n,location:a}){return pE(ff(n),a)}function ff(n,a=[]){let o=[];return m.Children.forEach(n,(l,u)=>{if(!m.isValidElement(l))return;let d=[...a,u];if(l.type===m.Fragment){o.push.apply(o,ff(l.props.children,d));return}Ve(l.type===dn,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!l.props.index||!l.props.children,"An index route cannot have child routes.");let p={id:l.props.id||d.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(p.children=ff(l.props.children,d)),o.push(p)}),o}var Gl="get",ql="application/x-www-form-urlencoded";function cc(n){return n!=null&&typeof n.tagName=="string"}function TE(n){return cc(n)&&n.tagName.toLowerCase()==="button"}function RE(n){return cc(n)&&n.tagName.toLowerCase()==="form"}function DE(n){return cc(n)&&n.tagName.toLowerCase()==="input"}function LE(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ME(n,a){return n.button===0&&(!a||a==="_self")&&!LE(n)}var zl=null;function BE(){if(zl===null)try{new FormData(document.createElement("form"),0),zl=!1}catch{zl=!0}return zl}var zE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vd(n){return n!=null&&!zE.has(n)?(hn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ql}"`),null):n}function _E(n,a){let o,l,u,d,p;if(RE(n)){let g=n.getAttribute("action");l=g?ca(g,a):null,o=n.getAttribute("method")||Gl,u=Vd(n.getAttribute("enctype"))||ql,d=new FormData(n)}else if(TE(n)||DE(n)&&(n.type==="submit"||n.type==="image")){let g=n.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||g.getAttribute("action");if(l=h?ca(h,a):null,o=n.getAttribute("formmethod")||g.getAttribute("method")||Gl,u=Vd(n.getAttribute("formenctype"))||Vd(g.getAttribute("enctype"))||ql,d=new FormData(g,n),!BE()){let{name:v,type:b,value:x}=n;if(b==="image"){let w=v?`${v}.`:"";d.append(`${w}x`,"0"),d.append(`${w}y`,"0")}else v&&d.append(v,x)}}else{if(cc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Gl,l=null,u=ql,p=n}return d&&u==="text/plain"&&(p=d,d=void 0),{action:l,method:o.toLowerCase(),encType:u,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pf(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function UE(n,a,o){let l=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return l.pathname==="/"?l.pathname=`_root.${o}`:a&&ca(l.pathname,a)==="/"?l.pathname=`${a.replace(/\/$/,"")}/_root.${o}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${o}`,l}async function IE(n,a){if(n.id in a)return a[n.id];try{let o=await import(n.module);return a[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function PE(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function $E(n,a,o){let l=await Promise.all(n.map(async u=>{let d=a.routes[u.route.id];if(d){let p=await IE(d,o);return p.links?p.links():[]}return[]}));return JE(l.flat(1).filter(PE).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Pv(n,a,o,l,u,d){let p=(h,v)=>o[v]?h.route.id!==o[v].route.id:!0,g=(h,v)=>o[v].pathname!==h.pathname||o[v].route.path?.endsWith("*")&&o[v].params["*"]!==h.params["*"];return d==="assets"?a.filter((h,v)=>p(h,v)||g(h,v)):d==="data"?a.filter((h,v)=>{let b=l.routes[h.route.id];if(!b||!b.hasLoader)return!1;if(p(h,v)||g(h,v))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function HE(n,a,{includeHydrateFallback:o}={}){return GE(n.map(l=>{let u=a.routes[l.route.id];if(!u)return[];let d=[u.module];return u.clientActionModule&&(d=d.concat(u.clientActionModule)),u.clientLoaderModule&&(d=d.concat(u.clientLoaderModule)),o&&u.hydrateFallbackModule&&(d=d.concat(u.hydrateFallbackModule)),u.imports&&(d=d.concat(u.imports)),d}).flat(1))}function GE(n){return[...new Set(n)]}function qE(n){let a={},o=Object.keys(n).sort();for(let l of o)a[l]=n[l];return a}function JE(n,a){let o=new Set;return new Set(a),n.reduce((l,u)=>{let d=JSON.stringify(qE(u));return o.has(d)||(o.add(d),l.push({key:d,link:u})),l},[])}function Zb(){let n=m.useContext(Do);return Pf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function FE(){let n=m.useContext(lc);return Pf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var $f=m.createContext(void 0);$f.displayName="FrameworkContext";function Kb(){let n=m.useContext($f);return Pf(n,"You must render this element inside a <HydratedRouter> element"),n}function VE(n,a){let o=m.useContext($f),[l,u]=m.useState(!1),[d,p]=m.useState(!1),{onFocus:g,onBlur:h,onMouseEnter:v,onMouseLeave:b,onTouchStart:x}=a,w=m.useRef(null);m.useEffect(()=>{if(n==="render"&&p(!0),n==="viewport"){let k=O=>{O.forEach(N=>{p(N.isIntersecting)})},E=new IntersectionObserver(k,{threshold:.5});return w.current&&E.observe(w.current),()=>{E.disconnect()}}},[n]),m.useEffect(()=>{if(l){let k=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(k)}}},[l]);let S=()=>{u(!0)},C=()=>{u(!1),p(!1)};return o?n!=="intent"?[d,w,{}]:[d,w,{onFocus:Vs(g,S),onBlur:Vs(h,C),onMouseEnter:Vs(v,S),onMouseLeave:Vs(b,C),onTouchStart:Vs(x,S)}]:[!1,w,{}]}function Vs(n,a){return o=>{n&&n(o),o.defaultPrevented||a(o)}}function YE({page:n,...a}){let{router:o}=Zb(),l=m.useMemo(()=>$b(o.routes,n,o.basename),[o.routes,n,o.basename]);return l?m.createElement(ZE,{page:n,matches:l,...a}):null}function XE(n){let{manifest:a,routeModules:o}=Kb(),[l,u]=m.useState([]);return m.useEffect(()=>{let d=!1;return $E(n,a,o).then(p=>{d||u(p)}),()=>{d=!0}},[n,a,o]),l}function ZE({page:n,matches:a,...o}){let l=Un(),{manifest:u,routeModules:d}=Kb(),{basename:p}=Zb(),{loaderData:g,matches:h}=FE(),v=m.useMemo(()=>Pv(n,a,h,u,l,"data"),[n,a,h,u,l]),b=m.useMemo(()=>Pv(n,a,h,u,l,"assets"),[n,a,h,u,l]),x=m.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let C=new Set,k=!1;if(a.forEach(O=>{let N=u.routes[O.route.id];!N||!N.hasLoader||(!v.some(D=>D.route.id===O.route.id)&&O.route.id in g&&d[O.route.id]?.shouldRevalidate||N.hasClientLoader?k=!0:C.add(O.route.id))}),C.size===0)return[];let E=UE(n,p,"data");return k&&C.size>0&&E.searchParams.set("_routes",a.filter(O=>C.has(O.route.id)).map(O=>O.route.id).join(",")),[E.pathname+E.search]},[p,g,l,u,v,a,n,d]),w=m.useMemo(()=>HE(b,u),[b,u]),S=XE(b);return m.createElement(m.Fragment,null,x.map(C=>m.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...o})),w.map(C=>m.createElement("link",{key:C,rel:"modulepreload",href:C,...o})),S.map(({key:C,link:k})=>m.createElement("link",{key:C,nonce:o.nonce,...k})))}function KE(...n){return a=>{n.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var Qb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Qb&&(window.__reactRouterVersion="7.8.2")}catch{}function QE({basename:n,children:a,window:o}){let l=m.useRef();l.current==null&&(l.current=IS({window:o,v5Compat:!0}));let u=l.current,[d,p]=m.useState({action:u.action,location:u.location}),g=m.useCallback(h=>{m.startTransition(()=>p(h))},[p]);return m.useLayoutEffect(()=>u.listen(g),[u,g]),m.createElement(OE,{basename:n,children:a,location:d.location,navigationType:d.action,navigator:u})}var Wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,En=m.forwardRef(function({onClick:a,discover:o="render",prefetch:l="none",relative:u,reloadDocument:d,replace:p,state:g,target:h,to:v,preventScrollReset:b,viewTransition:x,...w},S){let{basename:C}=m.useContext(Cn),k=typeof v=="string"&&Wb.test(v),E,O=!1;if(typeof v=="string"&&k&&(E=v,Qb))try{let q=new URL(window.location.href),Q=v.startsWith("//")?new URL(q.protocol+v):new URL(v),re=ca(Q.pathname,C);Q.origin===q.origin&&re!=null?v=re+Q.search+Q.hash:O=!0}catch{hn(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=fE(v,{relative:u}),[D,L,z]=VE(l,w),_=nN(v,{replace:p,state:g,target:h,preventScrollReset:b,relative:u,viewTransition:x});function M(q){a&&a(q),q.defaultPrevented||_(q)}let R=m.createElement("a",{...w,...z,href:E||N,onClick:O||d?a:M,ref:KE(S,L),target:h,"data-discover":!k&&o==="render"?"true":void 0});return D&&!k?m.createElement(m.Fragment,null,R,m.createElement(YE,{page:N})):R});En.displayName="Link";var WE=m.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:l="",end:u=!1,style:d,to:p,viewTransition:g,children:h,...v},b){let x=li(p,{relative:v.relative}),w=Un(),S=m.useContext(lc),{navigator:C,basename:k}=m.useContext(Cn),E=S!=null&&iN(x)&&g===!0,O=C.encodeLocation?C.encodeLocation(x).pathname:x.pathname,N=w.pathname,D=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(N=N.toLowerCase(),D=D?D.toLowerCase():null,O=O.toLowerCase()),D&&k&&(D=ca(D,k)||D);const L=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let z=N===O||!u&&N.startsWith(O)&&N.charAt(L)==="/",_=D!=null&&(D===O||!u&&D.startsWith(O)&&D.charAt(O.length)==="/"),M={isActive:z,isPending:_,isTransitioning:E},R=z?a:void 0,q;typeof l=="function"?q=l(M):q=[l,z?"active":null,_?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let Q=typeof d=="function"?d(M):d;return m.createElement(En,{...v,"aria-current":R,className:q,ref:b,style:Q,to:p,viewTransition:g},typeof h=="function"?h(M):h)});WE.displayName="NavLink";var eN=m.forwardRef(({discover:n="render",fetcherKey:a,navigate:o,reloadDocument:l,replace:u,state:d,method:p=Gl,action:g,onSubmit:h,relative:v,preventScrollReset:b,viewTransition:x,...w},S)=>{let C=oN(),k=sN(g,{relative:v}),E=p.toLowerCase()==="get"?"get":"post",O=typeof g=="string"&&Wb.test(g),N=D=>{if(h&&h(D),D.defaultPrevented)return;D.preventDefault();let L=D.nativeEvent.submitter,z=L?.getAttribute("formmethod")||p;C(L||D.currentTarget,{fetcherKey:a,method:z,navigate:o,replace:u,state:d,relative:v,preventScrollReset:b,viewTransition:x})};return m.createElement("form",{ref:S,method:E,action:k,onSubmit:l?h:N,...w,"data-discover":!O&&n==="render"?"true":void 0})});eN.displayName="Form";function tN(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ey(n){let a=m.useContext(Do);return Ve(a,tN(n)),a}function nN(n,{target:a,replace:o,state:l,preventScrollReset:u,relative:d,viewTransition:p}={}){let g=In(),h=Un(),v=li(n,{relative:d});return m.useCallback(b=>{if(ME(b,a)){b.preventDefault();let x=o!==void 0?o:ni(h)===ni(v);g(n,{replace:x,state:l,preventScrollReset:u,relative:d,viewTransition:p})}},[h,g,v,o,l,a,n,u,d,p])}var aN=0,rN=()=>`__${String(++aN)}__`;function oN(){let{router:n}=ey("useSubmit"),{basename:a}=m.useContext(Cn),o=SE();return m.useCallback(async(l,u={})=>{let{action:d,method:p,encType:g,formData:h,body:v}=_E(l,a);if(u.navigate===!1){let b=u.fetcherKey||rN();await n.fetch(b,o,u.action||d,{preventScrollReset:u.preventScrollReset,formData:h,body:v,formMethod:u.method||p,formEncType:u.encType||g,flushSync:u.flushSync})}else await n.navigate(u.action||d,{preventScrollReset:u.preventScrollReset,formData:h,body:v,formMethod:u.method||p,formEncType:u.encType||g,replace:u.replace,state:u.state,fromRouteId:o,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,a,o])}function sN(n,{relative:a}={}){let{basename:o}=m.useContext(Cn),l=m.useContext(_n);Ve(l,"useFormAction must be used inside a RouteContext");let[u]=l.matches.slice(-1),d={...li(n||".",{relative:a})},p=Un();if(n==null){d.search=p.search;let g=new URLSearchParams(d.search),h=g.getAll("index");if(h.some(b=>b==="")){g.delete("index"),h.filter(x=>x).forEach(x=>g.append("index",x));let b=g.toString();d.search=b?`?${b}`:""}}return(!n||n===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(d.pathname=d.pathname==="/"?o:sa([o,d.pathname])),ni(d)}function iN(n,{relative:a}={}){let o=m.useContext(Jb);Ve(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=ey("useViewTransitionState"),u=li(n,{relative:a});if(!o.isTransitioning)return!1;let d=ca(o.currentLocation.pathname,l)||o.currentLocation.pathname,p=ca(o.nextLocation.pathname,l)||o.nextLocation.pathname;return Vl(u.pathname,p)!=null||Vl(u.pathname,d)!=null}var lN=Pb();const pr=Ro(lN),mf="backends_config";function ty(){try{const n=localStorage.getItem(mf);return n&&JSON.parse(n)?.active?.url||null}catch(n){return console.error("❌ Error leyendo backend desde localStorage",n),null}}function cN(n){try{if(!n)return;const a=localStorage.getItem(mf);if(!a)return;const o=JSON.parse(a);localStorage.setItem(mf,JSON.stringify({...o,active:{...o.active,url:n}}))}catch(a){console.warn("⚠️ No se pudo sincronizar backendURLGlobal",a)}}const $v="backends_config",ny=m.createContext();function uN({children:n}){const[a,o]=m.useState([]),[l,u]=m.useState(null),[d,p]=m.useState(!1),[g,h]=m.useState(!0);m.useEffect(()=>{const w=localStorage.getItem($v);if(w)try{const S=JSON.parse(w);o(S.backends||[]),u(S.active||null)}catch(S){console.error("⚠️ Error parseando backends_config",S)}p(!0),h(!1)},[]),m.useEffect(()=>{d&&localStorage.setItem($v,JSON.stringify({backends:a,active:l}))},[a,l,d]),m.useEffect(()=>{l?.url&&cN(l.url)},[l]);const v=(w,S,C=null)=>{if(!w?.trim()||!S?.trim())throw new Error("Alias y URL son obligatorios");if(a.some(E=>E.alias===w.trim()))throw new Error(`Ya existe un backend con alias "${w}"`);const k={id:crypto.randomUUID(),alias:w.trim(),url:S.trim().charAt(0).toLowerCase()+S.trim().slice(1),avatar:C};o(E=>[...E,k]),l||u(k)},b=w=>{o(S=>S.filter(C=>C.alias!==w)),l?.alias===w&&u(null)},x=w=>{const S=a.find(C=>C.alias===w);S&&l?.alias!==S.alias&&(localStorage.removeItem("auth_session"),u(S),setTimeout(()=>{window.location.replace(window.location.origin+window.location.pathname)},100))};return s.jsx(ny.Provider,{value:{backends:a,activeBackend:l,addBackend:v,deleteBackend:b,setActiveBackend:x,loading:g},children:n})}function uc(){return m.useContext(ny)}var Yd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Hv;function dN(){return Hv||(Hv=1,(function(n){(function(){var a={}.hasOwnProperty;function o(){for(var d="",p=0;p<arguments.length;p++){var g=arguments[p];g&&(d=u(d,l(g)))}return d}function l(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return o.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var p="";for(var g in d)a.call(d,g)&&d[g]&&(p=u(p,g));return p}function u(d,p){return p?d?d+" "+p:d+p:d}n.exports?(o.default=o,n.exports=o):window.classNames=o})()})(Yd)),Yd.exports}var fN=dN();const ce=Ro(fN);function pf(){return pf=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},pf.apply(null,arguments)}function ay(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}function Gv(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function mN(n){var a=pN(n,"string");return typeof a=="symbol"?a:String(a)}function pN(n,a){if(typeof n!="object"||n===null)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,a);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function ry(n,a,o){var l=m.useRef(n!==void 0),u=m.useState(a),d=u[0],p=u[1],g=n!==void 0,h=l.current;return l.current=g,!g&&h&&d!==a&&p(a),[g?n:d,m.useCallback(function(v){for(var b=arguments.length,x=new Array(b>1?b-1:0),w=1;w<b;w++)x[w-1]=arguments[w];o&&o.apply(void 0,[v].concat(x)),p(v)},[o])]}function dc(n,a){return Object.keys(a).reduce(function(o,l){var u,d=o,p=d[Gv(l)],g=d[l],h=ay(d,[Gv(l),l].map(mN)),v=a[l],b=ry(g,p,n[v]),x=b[0],w=b[1];return pf({},h,(u={},u[l]=x,u[v]=w,u))},n)}function hf(n,a){return hf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},hf(n,a)}function hN(n,a){n.prototype=Object.create(a.prototype),n.prototype.constructor=n,hf(n,a)}const gN=["xxl","xl","lg","md","sm","xs"],vN="xs",ci=m.createContext({prefixes:{},breakpoints:gN,minBreakpoint:vN}),{Consumer:KT,Provider:QT}=ci;function ue(n,a){const{prefixes:o}=m.useContext(ci);return n||o[a]||a}function oy(){const{breakpoints:n}=m.useContext(ci);return n}function sy(){const{minBreakpoint:n}=m.useContext(ci);return n}function fc(){const{dir:n}=m.useContext(ci);return n==="rtl"}function Mo(n){return n&&n.ownerDocument||document}function bN(n){var a=Mo(n);return a&&a.defaultView||window}function yN(n,a){return bN(n).getComputedStyle(n,a)}var xN=/([A-Z])/g;function wN(n){return n.replace(xN,"-$1").toLowerCase()}var jN=/^ms-/;function _l(n){return wN(n).replace(jN,"-ms-")}var SN=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function EN(n){return!!(n&&SN.test(n))}function ia(n,a){var o="",l="";if(typeof a=="string")return n.style.getPropertyValue(_l(a))||yN(n).getPropertyValue(_l(a));Object.keys(a).forEach(function(u){var d=a[u];!d&&d!==0?n.style.removeProperty(_l(u)):EN(u)?l+=u+"("+d+") ":o+=_l(u)+": "+d+";"}),l&&(o+="transform: "+l+";"),n.style.cssText+=";"+o}var Xd={exports:{}},Zd,qv;function NN(){if(qv)return Zd;qv=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Zd=n,Zd}var Kd,Jv;function CN(){if(Jv)return Kd;Jv=1;var n=NN();function a(){}function o(){}return o.resetWarningCache=a,Kd=function(){function l(p,g,h,v,b,x){if(x!==n){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}l.isRequired=l;function u(){return l}var d={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:u,element:l,elementType:l,instanceOf:u,node:l,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:o,resetWarningCache:a};return d.PropTypes=d,d},Kd}var Fv;function AN(){return Fv||(Fv=1,Xd.exports=CN()()),Xd.exports}var ON=AN();const Be=Ro(ON),Vv={disabled:!1},iy=Fe.createContext(null);var kN=function(a){return a.scrollTop},Qs="unmounted",Ga="exited",fn="entering",ra="entered",Eo="exiting",pa=(function(n){hN(a,n);function a(l,u){var d;d=n.call(this,l,u)||this;var p=u,g=p&&!p.isMounting?l.enter:l.appear,h;return d.appearStatus=null,l.in?g?(h=Ga,d.appearStatus=fn):h=ra:l.unmountOnExit||l.mountOnEnter?h=Qs:h=Ga,d.state={status:h},d.nextCallback=null,d}a.getDerivedStateFromProps=function(u,d){var p=u.in;return p&&d.status===Qs?{status:Ga}:null};var o=a.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(u){var d=null;if(u!==this.props){var p=this.state.status;this.props.in?p!==fn&&p!==ra&&(d=fn):(p===fn||p===ra)&&(d=Eo)}this.updateStatus(!1,d)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var u=this.props.timeout,d,p,g;return d=p=g=u,u!=null&&typeof u!="number"&&(d=u.exit,p=u.enter,g=u.appear!==void 0?u.appear:p),{exit:d,enter:p,appear:g}},o.updateStatus=function(u,d){if(u===void 0&&(u=!1),d!==null)if(this.cancelNextCallback(),d===fn){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:pr.findDOMNode(this);p&&kN(p)}this.performEnter(u)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ga&&this.setState({status:Qs})},o.performEnter=function(u){var d=this,p=this.props.enter,g=this.context?this.context.isMounting:u,h=this.props.nodeRef?[g]:[pr.findDOMNode(this),g],v=h[0],b=h[1],x=this.getTimeouts(),w=g?x.appear:x.enter;if(!u&&!p||Vv.disabled){this.safeSetState({status:ra},function(){d.props.onEntered(v)});return}this.props.onEnter(v,b),this.safeSetState({status:fn},function(){d.props.onEntering(v,b),d.onTransitionEnd(w,function(){d.safeSetState({status:ra},function(){d.props.onEntered(v,b)})})})},o.performExit=function(){var u=this,d=this.props.exit,p=this.getTimeouts(),g=this.props.nodeRef?void 0:pr.findDOMNode(this);if(!d||Vv.disabled){this.safeSetState({status:Ga},function(){u.props.onExited(g)});return}this.props.onExit(g),this.safeSetState({status:Eo},function(){u.props.onExiting(g),u.onTransitionEnd(p.exit,function(){u.safeSetState({status:Ga},function(){u.props.onExited(g)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(u,d){d=this.setNextCallback(d),this.setState(u,d)},o.setNextCallback=function(u){var d=this,p=!0;return this.nextCallback=function(g){p&&(p=!1,d.nextCallback=null,u(g))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},o.onTransitionEnd=function(u,d){this.setNextCallback(d);var p=this.props.nodeRef?this.props.nodeRef.current:pr.findDOMNode(this),g=u==null&&!this.props.addEndListener;if(!p||g){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],v=h[0],b=h[1];this.props.addEndListener(v,b)}u!=null&&setTimeout(this.nextCallback,u)},o.render=function(){var u=this.state.status;if(u===Qs)return null;var d=this.props,p=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var g=ay(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Fe.createElement(iy.Provider,{value:null},typeof p=="function"?p(u,g):Fe.cloneElement(Fe.Children.only(p),g))},a})(Fe.Component);pa.contextType=iy;pa.propTypes={};function ho(){}pa.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ho,onEntering:ho,onEntered:ho,onExit:ho,onExiting:ho,onExited:ho};pa.UNMOUNTED=Qs;pa.EXITED=Ga;pa.ENTERING=fn;pa.ENTERED=ra;pa.EXITING=Eo;function ly(n){return n.code==="Escape"||n.keyCode===27}function TN(){const n=m.version.split(".");return{major:+n[0],minor:+n[1],patch:+n[2]}}function jr(n){if(!n||typeof n=="function")return null;const{major:a}=TN();return a>=19?n.props.ref:n.ref}const Bo=!!(typeof window<"u"&&window.document&&window.document.createElement);var gf=!1,vf=!1;try{var Qd={get passive(){return gf=!0},get once(){return vf=gf=!0}};Bo&&(window.addEventListener("test",Qd,Qd),window.removeEventListener("test",Qd,!0))}catch{}function Hf(n,a,o,l){if(l&&typeof l!="boolean"&&!vf){var u=l.once,d=l.capture,p=o;!vf&&u&&(p=o.__once||function g(h){this.removeEventListener(a,g,d),o.call(this,h)},o.__once=p),n.addEventListener(a,p,gf?l:d)}n.addEventListener(a,o,l)}function bf(n,a,o,l){var u=l&&typeof l!="boolean"?l.capture:l;n.removeEventListener(a,o,u),o.__once&&n.removeEventListener(a,o.__once,u)}function oa(n,a,o,l){return Hf(n,a,o,l),function(){bf(n,a,o,l)}}function RN(n,a,o,l){if(l===void 0&&(l=!0),n){var u=document.createEvent("HTMLEvents");u.initEvent(a,o,l),n.dispatchEvent(u)}}function DN(n){var a=ia(n,"transitionDuration")||"",o=a.indexOf("ms")===-1?1e3:1;return parseFloat(a)*o}function LN(n,a,o){o===void 0&&(o=5);var l=!1,u=setTimeout(function(){l||RN(n,"transitionend",!0)},a+o),d=oa(n,"transitionend",function(){l=!0},{once:!0});return function(){clearTimeout(u),d()}}function cy(n,a,o,l){o==null&&(o=DN(n)||0);var u=LN(n,o,l),d=oa(n,"transitionend",a);return function(){u(),d()}}function Yv(n,a){const o=ia(n,a)||"",l=o.indexOf("ms")===-1?1e3:1;return parseFloat(o)*l}function Gf(n,a){const o=Yv(n,"transitionDuration"),l=Yv(n,"transitionDelay"),u=cy(n,d=>{d.target===n&&(u(),a(d))},o+l)}function Ys(...n){return n.filter(a=>a!=null).reduce((a,o)=>{if(typeof o!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return a===null?o:function(...u){a.apply(this,u),o.apply(this,u)}},null)}function uy(n){n.offsetHeight}const Xv=n=>!n||typeof n=="function"?n:a=>{n.current=a};function MN(n,a){const o=Xv(n),l=Xv(a);return u=>{o&&o(u),l&&l(u)}}function zo(n,a){return m.useMemo(()=>MN(n,a),[n,a])}function Yl(n){return n&&"setState"in n?pr.findDOMNode(n):n??null}const mc=Fe.forwardRef(({onEnter:n,onEntering:a,onEntered:o,onExit:l,onExiting:u,onExited:d,addEndListener:p,children:g,childRef:h,...v},b)=>{const x=m.useRef(null),w=zo(x,h),S=_=>{w(Yl(_))},C=_=>M=>{_&&x.current&&_(x.current,M)},k=m.useCallback(C(n),[n]),E=m.useCallback(C(a),[a]),O=m.useCallback(C(o),[o]),N=m.useCallback(C(l),[l]),D=m.useCallback(C(u),[u]),L=m.useCallback(C(d),[d]),z=m.useCallback(C(p),[p]);return s.jsx(pa,{ref:b,...v,onEnter:k,onEntered:O,onEntering:E,onExit:N,onExited:L,onExiting:D,addEndListener:z,nodeRef:x,children:typeof g=="function"?(_,M)=>g(_,{...M,ref:S}):Fe.cloneElement(g,{ref:S})})});mc.displayName="TransitionWrapper";const BN={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function zN(n,a){const o=`offset${n[0].toUpperCase()}${n.slice(1)}`,l=a[o],u=BN[n];return l+parseInt(ia(a,u[0]),10)+parseInt(ia(a,u[1]),10)}const _N={[Ga]:"collapse",[Eo]:"collapsing",[fn]:"collapsing",[ra]:"collapse show"},dy=Fe.forwardRef(({onEnter:n,onEntering:a,onEntered:o,onExit:l,onExiting:u,className:d,children:p,dimension:g="height",in:h=!1,timeout:v=300,mountOnEnter:b=!1,unmountOnExit:x=!1,appear:w=!1,getDimensionValue:S=zN,...C},k)=>{const E=typeof g=="function"?g():g,O=m.useMemo(()=>Ys(_=>{_.style[E]="0"},n),[E,n]),N=m.useMemo(()=>Ys(_=>{const M=`scroll${E[0].toUpperCase()}${E.slice(1)}`;_.style[E]=`${_[M]}px`},a),[E,a]),D=m.useMemo(()=>Ys(_=>{_.style[E]=null},o),[E,o]),L=m.useMemo(()=>Ys(_=>{_.style[E]=`${S(E,_)}px`,uy(_)},l),[l,S,E]),z=m.useMemo(()=>Ys(_=>{_.style[E]=null},u),[E,u]);return s.jsx(mc,{ref:k,addEndListener:Gf,...C,"aria-expanded":C.role?h:null,onEnter:O,onEntering:N,onEntered:D,onExit:L,onExiting:z,childRef:jr(p),in:h,timeout:v,mountOnEnter:b,unmountOnExit:x,appear:w,children:(_,M)=>Fe.cloneElement(p,{...M,className:ce(d,p.props.className,_N[_],E==="width"&&"collapse-horizontal")})})});dy.displayName="Collapse";function UN(n){const a=m.useRef(n);return m.useEffect(()=>{a.current=n},[n]),a}function ua(n){const a=UN(n);return m.useCallback(function(...o){return a.current&&a.current(...o)},[a])}const pc=(n=>m.forwardRef((a,o)=>s.jsx("div",{...a,ref:o,className:ce(a.className,n)})));function yf(){return m.useState(null)}function IN(n){const a=m.useRef(n);return m.useEffect(()=>{a.current=n},[n]),a}function gt(n){const a=IN(n);return m.useCallback(function(...o){return a.current&&a.current(...o)},[a])}function PN(n,a,o,l=!1){const u=gt(o);m.useEffect(()=>{const d=typeof n=="function"?n():n;return d.addEventListener(a,u,l),()=>d.removeEventListener(a,u,l)},[n])}function fy(){const n=m.useRef(!0),a=m.useRef(()=>n.current);return m.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),a.current}function my(n){const a=m.useRef(null);return m.useEffect(()=>{a.current=n}),a.current}const $N=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",HN=typeof document<"u",Zv=HN||$N?m.useLayoutEffect:m.useEffect,GN=["as","disabled"];function qN(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function JN(n){return!n||n.trim()==="#"}function qf({tagName:n,disabled:a,href:o,target:l,rel:u,role:d,onClick:p,tabIndex:g=0,type:h}){n||(o!=null||l!=null||u!=null?n="a":n="button");const v={tagName:n};if(n==="button")return[{type:h||"button",disabled:a},v];const b=w=>{if((a||n==="a"&&JN(o))&&w.preventDefault(),a){w.stopPropagation();return}p?.(w)},x=w=>{w.key===" "&&(w.preventDefault(),b(w))};return n==="a"&&(o||(o="#"),a&&(o=void 0)),[{role:d??"button",disabled:void 0,tabIndex:a?void 0:g,href:o,target:n==="a"?l:void 0,"aria-disabled":a||void 0,rel:n==="a"?u:void 0,onClick:b,onKeyDown:x},v]}const Jf=m.forwardRef((n,a)=>{let{as:o,disabled:l}=n,u=qN(n,GN);const[d,{tagName:p}]=qf(Object.assign({tagName:o,disabled:l},u));return s.jsx(p,Object.assign({},u,d,{ref:a}))});Jf.displayName="Button";const FN=["onKeyDown"];function VN(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function YN(n){return!n||n.trim()==="#"}const Ff=m.forwardRef((n,a)=>{let{onKeyDown:o}=n,l=VN(n,FN);const[u]=qf(Object.assign({tagName:"a"},l)),d=gt(p=>{u.onKeyDown(p),o?.(p)});return YN(l.href)||l.role==="button"?s.jsx("a",Object.assign({ref:a},l,u,{onKeyDown:d})):s.jsx("a",Object.assign({ref:a},l,{onKeyDown:o}))});Ff.displayName="Anchor";const XN={[fn]:"show",[ra]:"show"},da=m.forwardRef(({className:n,children:a,transitionClasses:o={},onEnter:l,...u},d)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...u},g=m.useCallback((h,v)=>{uy(h),l?.(h,v)},[l]);return s.jsx(mc,{ref:d,addEndListener:Gf,...p,onEnter:g,childRef:jr(a),children:(h,v)=>m.cloneElement(a,{...v,className:ce("fade",n,a.props.className,XN[h],o[h])})})});da.displayName="Fade";const ZN={"aria-label":Be.string,onClick:Be.func,variant:Be.oneOf(["white"])},hc=m.forwardRef(({className:n,variant:a,"aria-label":o="Close",...l},u)=>s.jsx("button",{ref:u,type:"button",className:ce("btn-close",a&&`btn-close-${a}`,n),"aria-label":o,...l}));hc.displayName="CloseButton";hc.propTypes=ZN;const bo=m.forwardRef(({bsPrefix:n,bg:a="primary",pill:o=!1,text:l,className:u,as:d="span",...p},g)=>{const h=ue(n,"badge");return s.jsx(d,{ref:g,...p,className:ce(u,h,o&&"rounded-pill",l&&`text-${l}`,a&&`bg-${a}`)})});bo.displayName="Badge";const Oe=m.forwardRef(({as:n,bsPrefix:a,variant:o="primary",size:l,active:u=!1,disabled:d=!1,className:p,...g},h)=>{const v=ue(a,"btn"),[b,{tagName:x}]=qf({tagName:n,disabled:d,...g}),w=x;return s.jsx(w,{...b,...g,ref:h,disabled:d,className:ce(p,v,u&&"active",o&&`${v}-${o}`,l&&`${v}-${l}`,g.href&&d&&"disabled")})});Oe.displayName="Button";const Vf=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"card-body"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Vf.displayName="CardBody";const py=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"card-footer"),s.jsx(o,{ref:u,className:ce(n,a),...l})));py.displayName="CardFooter";const Yf=m.createContext(null);Yf.displayName="CardHeaderContext";const hy=m.forwardRef(({bsPrefix:n,className:a,as:o="div",...l},u)=>{const d=ue(n,"card-header"),p=m.useMemo(()=>({cardHeaderBsPrefix:d}),[d]);return s.jsx(Yf.Provider,{value:p,children:s.jsx(o,{ref:u,...l,className:ce(a,d)})})});hy.displayName="CardHeader";const gy=m.forwardRef(({bsPrefix:n,className:a,variant:o,as:l="img",...u},d)=>{const p=ue(n,"card-img");return s.jsx(l,{ref:d,className:ce(o?`${p}-${o}`:p,a),...u})});gy.displayName="CardImg";const vy=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"card-img-overlay"),s.jsx(o,{ref:u,className:ce(n,a),...l})));vy.displayName="CardImgOverlay";const by=m.forwardRef(({className:n,bsPrefix:a,as:o="a",...l},u)=>(a=ue(a,"card-link"),s.jsx(o,{ref:u,className:ce(n,a),...l})));by.displayName="CardLink";const KN=pc("h6"),yy=m.forwardRef(({className:n,bsPrefix:a,as:o=KN,...l},u)=>(a=ue(a,"card-subtitle"),s.jsx(o,{ref:u,className:ce(n,a),...l})));yy.displayName="CardSubtitle";const xy=m.forwardRef(({className:n,bsPrefix:a,as:o="p",...l},u)=>(a=ue(a,"card-text"),s.jsx(o,{ref:u,className:ce(n,a),...l})));xy.displayName="CardText";const QN=pc("h5"),wy=m.forwardRef(({className:n,bsPrefix:a,as:o=QN,...l},u)=>(a=ue(a,"card-title"),s.jsx(o,{ref:u,className:ce(n,a),...l})));wy.displayName="CardTitle";const jy=m.forwardRef(({bsPrefix:n,className:a,bg:o,text:l,border:u,body:d=!1,children:p,as:g="div",...h},v)=>{const b=ue(n,"card");return s.jsx(g,{ref:v,...h,className:ce(a,b,o&&`bg-${o}`,l&&`text-${l}`,u&&`border-${u}`),children:d?s.jsx(Vf,{children:p}):p})});jy.displayName="Card";const yo=Object.assign(jy,{Img:gy,Title:wy,Subtitle:yy,Body:Vf,Link:by,Text:xy,Header:hy,Footer:py,ImgOverlay:vy});function WN(){const n=m.useRef(!0),a=m.useRef(()=>n.current);return m.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),a.current}function e2(n){const a=m.useRef(n);return a.current=n,a}function Sy(n){const a=e2(n);m.useEffect(()=>()=>a.current(),[])}const xf=2**31-1;function Ey(n,a,o){const l=o-Date.now();n.current=l<=xf?setTimeout(a,l):setTimeout(()=>Ey(n,a,o),xf)}function Ny(){const n=WN(),a=m.useRef();return Sy(()=>clearTimeout(a.current)),m.useMemo(()=>{const o=()=>clearTimeout(a.current);function l(u,d=0){n()&&(o(),d<=xf?a.current=setTimeout(u,d):Ey(a,u,Date.now()+d))}return{set:l,clear:o,handleRef:a}},[])}function Kv(n,a){let o=0;return m.Children.map(n,l=>m.isValidElement(l)?a(l,o++):l)}function t2(n,a){let o=0;m.Children.forEach(n,l=>{m.isValidElement(l)&&a(l,o++)})}function n2(n,a){return m.Children.toArray(n).some(o=>m.isValidElement(o)&&o.type===a)}function a2({as:n,bsPrefix:a,className:o,...l}){a=ue(a,"col");const u=oy(),d=sy(),p=[],g=[];return u.forEach(h=>{const v=l[h];delete l[h];let b,x,w;typeof v=="object"&&v!=null?{span:b,offset:x,order:w}=v:b=v;const S=h!==d?`-${h}`:"";b&&p.push(b===!0?`${a}${S}`:`${a}${S}-${b}`),w!=null&&g.push(`order${S}-${w}`),x!=null&&g.push(`offset${S}-${x}`)}),[{...l,className:ce(o,...p,...g)},{as:n,bsPrefix:a,spans:p}]}const Nn=m.forwardRef((n,a)=>{const[{className:o,...l},{as:u="div",bsPrefix:d,spans:p}]=a2(n);return s.jsx(u,{...l,ref:a,className:ce(o,!p.length&&d)})});Nn.displayName="Col";const _o=m.forwardRef(({bsPrefix:n,fluid:a=!1,as:o="div",className:l,...u},d)=>{const p=ue(n,"container"),g=typeof a=="string"?`-${a}`:"-fluid";return s.jsx(o,{ref:d,...u,className:ce(l,a?`${p}${g}`:p)})});_o.displayName="Container";var r2=Function.prototype.bind.call(Function.prototype.call,[].slice);function aa(n,a){return r2(n.querySelectorAll(a))}function Cy(n,a,o){const l=m.useRef(n!==void 0),[u,d]=m.useState(a),p=n!==void 0,g=l.current;return l.current=p,!p&&g&&u!==a&&d(a),[p?n:u,m.useCallback((...h)=>{const[v,...b]=h;let x=o?.(v,...b);return d(v),x},[o])]}function Ay(){const[,n]=m.useReducer(a=>a+1,0);return n}const gc=m.createContext(null);var Qv=Object.prototype.hasOwnProperty;function Wv(n,a,o){for(o of n.keys())if(Ws(o,a))return o}function Ws(n,a){var o,l,u;if(n===a)return!0;if(n&&a&&(o=n.constructor)===a.constructor){if(o===Date)return n.getTime()===a.getTime();if(o===RegExp)return n.toString()===a.toString();if(o===Array){if((l=n.length)===a.length)for(;l--&&Ws(n[l],a[l]););return l===-1}if(o===Set){if(n.size!==a.size)return!1;for(l of n)if(u=l,u&&typeof u=="object"&&(u=Wv(a,u),!u)||!a.has(u))return!1;return!0}if(o===Map){if(n.size!==a.size)return!1;for(l of n)if(u=l[0],u&&typeof u=="object"&&(u=Wv(a,u),!u)||!Ws(l[1],a.get(u)))return!1;return!0}if(o===ArrayBuffer)n=new Uint8Array(n),a=new Uint8Array(a);else if(o===DataView){if((l=n.byteLength)===a.byteLength)for(;l--&&n.getInt8(l)===a.getInt8(l););return l===-1}if(ArrayBuffer.isView(n)){if((l=n.byteLength)===a.byteLength)for(;l--&&n[l]===a[l];);return l===-1}if(!o||typeof n=="object"){l=0;for(o in n)if(Qv.call(n,o)&&++l&&!Qv.call(a,o)||!(o in a)||!Ws(n[o],a[o]))return!1;return Object.keys(a).length===l}}return n!==n&&a!==a}function o2(n){const a=fy();return[n[0],m.useCallback(o=>{if(a())return n[1](o)},[a,n[1]])]}var Dt="top",gn="bottom",vn="right",Lt="left",Xf="auto",ui=[Dt,gn,vn,Lt],No="start",ai="end",s2="clippingParents",Oy="viewport",Xs="popper",i2="reference",eb=ui.reduce(function(n,a){return n.concat([a+"-"+No,a+"-"+ai])},[]),ky=[].concat(ui,[Xf]).reduce(function(n,a){return n.concat([a,a+"-"+No,a+"-"+ai])},[]),l2="beforeRead",c2="read",u2="afterRead",d2="beforeMain",f2="main",m2="afterMain",p2="beforeWrite",h2="write",g2="afterWrite",v2=[l2,c2,u2,d2,f2,m2,p2,h2,g2];function Ln(n){return n.split("-")[0]}function Ft(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var a=n.ownerDocument;return a&&a.defaultView||window}return n}function vr(n){var a=Ft(n).Element;return n instanceof a||n instanceof Element}function Mn(n){var a=Ft(n).HTMLElement;return n instanceof a||n instanceof HTMLElement}function Zf(n){if(typeof ShadowRoot>"u")return!1;var a=Ft(n).ShadowRoot;return n instanceof a||n instanceof ShadowRoot}var hr=Math.max,Xl=Math.min,Co=Math.round;function wf(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function Ty(){return!/^((?!chrome|android).)*safari/i.test(wf())}function Ao(n,a,o){a===void 0&&(a=!1),o===void 0&&(o=!1);var l=n.getBoundingClientRect(),u=1,d=1;a&&Mn(n)&&(u=n.offsetWidth>0&&Co(l.width)/n.offsetWidth||1,d=n.offsetHeight>0&&Co(l.height)/n.offsetHeight||1);var p=vr(n)?Ft(n):window,g=p.visualViewport,h=!Ty()&&o,v=(l.left+(h&&g?g.offsetLeft:0))/u,b=(l.top+(h&&g?g.offsetTop:0))/d,x=l.width/u,w=l.height/d;return{width:x,height:w,top:b,right:v+x,bottom:b+w,left:v,x:v,y:b}}function Kf(n){var a=Ao(n),o=n.offsetWidth,l=n.offsetHeight;return Math.abs(a.width-o)<=1&&(o=a.width),Math.abs(a.height-l)<=1&&(l=a.height),{x:n.offsetLeft,y:n.offsetTop,width:o,height:l}}function Ry(n,a){var o=a.getRootNode&&a.getRootNode();if(n.contains(a))return!0;if(o&&Zf(o)){var l=a;do{if(l&&n.isSameNode(l))return!0;l=l.parentNode||l.host}while(l)}return!1}function Fa(n){return n?(n.nodeName||"").toLowerCase():null}function fa(n){return Ft(n).getComputedStyle(n)}function b2(n){return["table","td","th"].indexOf(Fa(n))>=0}function Va(n){return((vr(n)?n.ownerDocument:n.document)||window.document).documentElement}function vc(n){return Fa(n)==="html"?n:n.assignedSlot||n.parentNode||(Zf(n)?n.host:null)||Va(n)}function tb(n){return!Mn(n)||fa(n).position==="fixed"?null:n.offsetParent}function y2(n){var a=/firefox/i.test(wf()),o=/Trident/i.test(wf());if(o&&Mn(n)){var l=fa(n);if(l.position==="fixed")return null}var u=vc(n);for(Zf(u)&&(u=u.host);Mn(u)&&["html","body"].indexOf(Fa(u))<0;){var d=fa(u);if(d.transform!=="none"||d.perspective!=="none"||d.contain==="paint"||["transform","perspective"].indexOf(d.willChange)!==-1||a&&d.willChange==="filter"||a&&d.filter&&d.filter!=="none")return u;u=u.parentNode}return null}function di(n){for(var a=Ft(n),o=tb(n);o&&b2(o)&&fa(o).position==="static";)o=tb(o);return o&&(Fa(o)==="html"||Fa(o)==="body"&&fa(o).position==="static")?a:o||y2(n)||a}function Qf(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function ei(n,a,o){return hr(n,Xl(a,o))}function x2(n,a,o){var l=ei(n,a,o);return l>o?o:l}function Dy(){return{top:0,right:0,bottom:0,left:0}}function Ly(n){return Object.assign({},Dy(),n)}function My(n,a){return a.reduce(function(o,l){return o[l]=n,o},{})}var w2=function(a,o){return a=typeof a=="function"?a(Object.assign({},o.rects,{placement:o.placement})):a,Ly(typeof a!="number"?a:My(a,ui))};function j2(n){var a,o=n.state,l=n.name,u=n.options,d=o.elements.arrow,p=o.modifiersData.popperOffsets,g=Ln(o.placement),h=Qf(g),v=[Lt,vn].indexOf(g)>=0,b=v?"height":"width";if(!(!d||!p)){var x=w2(u.padding,o),w=Kf(d),S=h==="y"?Dt:Lt,C=h==="y"?gn:vn,k=o.rects.reference[b]+o.rects.reference[h]-p[h]-o.rects.popper[b],E=p[h]-o.rects.reference[h],O=di(d),N=O?h==="y"?O.clientHeight||0:O.clientWidth||0:0,D=k/2-E/2,L=x[S],z=N-w[b]-x[C],_=N/2-w[b]/2+D,M=ei(L,_,z),R=h;o.modifiersData[l]=(a={},a[R]=M,a.centerOffset=M-_,a)}}function S2(n){var a=n.state,o=n.options,l=o.element,u=l===void 0?"[data-popper-arrow]":l;u!=null&&(typeof u=="string"&&(u=a.elements.popper.querySelector(u),!u)||Ry(a.elements.popper,u)&&(a.elements.arrow=u))}const E2={name:"arrow",enabled:!0,phase:"main",fn:j2,effect:S2,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Oo(n){return n.split("-")[1]}var N2={top:"auto",right:"auto",bottom:"auto",left:"auto"};function C2(n,a){var o=n.x,l=n.y,u=a.devicePixelRatio||1;return{x:Co(o*u)/u||0,y:Co(l*u)/u||0}}function nb(n){var a,o=n.popper,l=n.popperRect,u=n.placement,d=n.variation,p=n.offsets,g=n.position,h=n.gpuAcceleration,v=n.adaptive,b=n.roundOffsets,x=n.isFixed,w=p.x,S=w===void 0?0:w,C=p.y,k=C===void 0?0:C,E=typeof b=="function"?b({x:S,y:k}):{x:S,y:k};S=E.x,k=E.y;var O=p.hasOwnProperty("x"),N=p.hasOwnProperty("y"),D=Lt,L=Dt,z=window;if(v){var _=di(o),M="clientHeight",R="clientWidth";if(_===Ft(o)&&(_=Va(o),fa(_).position!=="static"&&g==="absolute"&&(M="scrollHeight",R="scrollWidth")),_=_,u===Dt||(u===Lt||u===vn)&&d===ai){L=gn;var q=x&&_===z&&z.visualViewport?z.visualViewport.height:_[M];k-=q-l.height,k*=h?1:-1}if(u===Lt||(u===Dt||u===gn)&&d===ai){D=vn;var Q=x&&_===z&&z.visualViewport?z.visualViewport.width:_[R];S-=Q-l.width,S*=h?1:-1}}var re=Object.assign({position:g},v&&N2),oe=b===!0?C2({x:S,y:k},Ft(o)):{x:S,y:k};if(S=oe.x,k=oe.y,h){var ie;return Object.assign({},re,(ie={},ie[L]=N?"0":"",ie[D]=O?"0":"",ie.transform=(z.devicePixelRatio||1)<=1?"translate("+S+"px, "+k+"px)":"translate3d("+S+"px, "+k+"px, 0)",ie))}return Object.assign({},re,(a={},a[L]=N?k+"px":"",a[D]=O?S+"px":"",a.transform="",a))}function A2(n){var a=n.state,o=n.options,l=o.gpuAcceleration,u=l===void 0?!0:l,d=o.adaptive,p=d===void 0?!0:d,g=o.roundOffsets,h=g===void 0?!0:g,v={placement:Ln(a.placement),variation:Oo(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:u,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,nb(Object.assign({},v,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:p,roundOffsets:h})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,nb(Object.assign({},v,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})}const O2={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:A2,data:{}};var Ul={passive:!0};function k2(n){var a=n.state,o=n.instance,l=n.options,u=l.scroll,d=u===void 0?!0:u,p=l.resize,g=p===void 0?!0:p,h=Ft(a.elements.popper),v=[].concat(a.scrollParents.reference,a.scrollParents.popper);return d&&v.forEach(function(b){b.addEventListener("scroll",o.update,Ul)}),g&&h.addEventListener("resize",o.update,Ul),function(){d&&v.forEach(function(b){b.removeEventListener("scroll",o.update,Ul)}),g&&h.removeEventListener("resize",o.update,Ul)}}const T2={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:k2,data:{}};var R2={left:"right",right:"left",bottom:"top",top:"bottom"};function Jl(n){return n.replace(/left|right|bottom|top/g,function(a){return R2[a]})}var D2={start:"end",end:"start"};function ab(n){return n.replace(/start|end/g,function(a){return D2[a]})}function Wf(n){var a=Ft(n),o=a.pageXOffset,l=a.pageYOffset;return{scrollLeft:o,scrollTop:l}}function em(n){return Ao(Va(n)).left+Wf(n).scrollLeft}function L2(n,a){var o=Ft(n),l=Va(n),u=o.visualViewport,d=l.clientWidth,p=l.clientHeight,g=0,h=0;if(u){d=u.width,p=u.height;var v=Ty();(v||!v&&a==="fixed")&&(g=u.offsetLeft,h=u.offsetTop)}return{width:d,height:p,x:g+em(n),y:h}}function M2(n){var a,o=Va(n),l=Wf(n),u=(a=n.ownerDocument)==null?void 0:a.body,d=hr(o.scrollWidth,o.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),p=hr(o.scrollHeight,o.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),g=-l.scrollLeft+em(n),h=-l.scrollTop;return fa(u||o).direction==="rtl"&&(g+=hr(o.clientWidth,u?u.clientWidth:0)-d),{width:d,height:p,x:g,y:h}}function tm(n){var a=fa(n),o=a.overflow,l=a.overflowX,u=a.overflowY;return/auto|scroll|overlay|hidden/.test(o+u+l)}function By(n){return["html","body","#document"].indexOf(Fa(n))>=0?n.ownerDocument.body:Mn(n)&&tm(n)?n:By(vc(n))}function ti(n,a){var o;a===void 0&&(a=[]);var l=By(n),u=l===((o=n.ownerDocument)==null?void 0:o.body),d=Ft(l),p=u?[d].concat(d.visualViewport||[],tm(l)?l:[]):l,g=a.concat(p);return u?g:g.concat(ti(vc(p)))}function jf(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function B2(n,a){var o=Ao(n,!1,a==="fixed");return o.top=o.top+n.clientTop,o.left=o.left+n.clientLeft,o.bottom=o.top+n.clientHeight,o.right=o.left+n.clientWidth,o.width=n.clientWidth,o.height=n.clientHeight,o.x=o.left,o.y=o.top,o}function rb(n,a,o){return a===Oy?jf(L2(n,o)):vr(a)?B2(a,o):jf(M2(Va(n)))}function z2(n){var a=ti(vc(n)),o=["absolute","fixed"].indexOf(fa(n).position)>=0,l=o&&Mn(n)?di(n):n;return vr(l)?a.filter(function(u){return vr(u)&&Ry(u,l)&&Fa(u)!=="body"}):[]}function _2(n,a,o,l){var u=a==="clippingParents"?z2(n):[].concat(a),d=[].concat(u,[o]),p=d[0],g=d.reduce(function(h,v){var b=rb(n,v,l);return h.top=hr(b.top,h.top),h.right=Xl(b.right,h.right),h.bottom=Xl(b.bottom,h.bottom),h.left=hr(b.left,h.left),h},rb(n,p,l));return g.width=g.right-g.left,g.height=g.bottom-g.top,g.x=g.left,g.y=g.top,g}function zy(n){var a=n.reference,o=n.element,l=n.placement,u=l?Ln(l):null,d=l?Oo(l):null,p=a.x+a.width/2-o.width/2,g=a.y+a.height/2-o.height/2,h;switch(u){case Dt:h={x:p,y:a.y-o.height};break;case gn:h={x:p,y:a.y+a.height};break;case vn:h={x:a.x+a.width,y:g};break;case Lt:h={x:a.x-o.width,y:g};break;default:h={x:a.x,y:a.y}}var v=u?Qf(u):null;if(v!=null){var b=v==="y"?"height":"width";switch(d){case No:h[v]=h[v]-(a[b]/2-o[b]/2);break;case ai:h[v]=h[v]+(a[b]/2-o[b]/2);break}}return h}function ri(n,a){a===void 0&&(a={});var o=a,l=o.placement,u=l===void 0?n.placement:l,d=o.strategy,p=d===void 0?n.strategy:d,g=o.boundary,h=g===void 0?s2:g,v=o.rootBoundary,b=v===void 0?Oy:v,x=o.elementContext,w=x===void 0?Xs:x,S=o.altBoundary,C=S===void 0?!1:S,k=o.padding,E=k===void 0?0:k,O=Ly(typeof E!="number"?E:My(E,ui)),N=w===Xs?i2:Xs,D=n.rects.popper,L=n.elements[C?N:w],z=_2(vr(L)?L:L.contextElement||Va(n.elements.popper),h,b,p),_=Ao(n.elements.reference),M=zy({reference:_,element:D,placement:u}),R=jf(Object.assign({},D,M)),q=w===Xs?R:_,Q={top:z.top-q.top+O.top,bottom:q.bottom-z.bottom+O.bottom,left:z.left-q.left+O.left,right:q.right-z.right+O.right},re=n.modifiersData.offset;if(w===Xs&&re){var oe=re[u];Object.keys(Q).forEach(function(ie){var J=[vn,gn].indexOf(ie)>=0?1:-1,le=[Dt,gn].indexOf(ie)>=0?"y":"x";Q[ie]+=oe[le]*J})}return Q}function U2(n,a){a===void 0&&(a={});var o=a,l=o.placement,u=o.boundary,d=o.rootBoundary,p=o.padding,g=o.flipVariations,h=o.allowedAutoPlacements,v=h===void 0?ky:h,b=Oo(l),x=b?g?eb:eb.filter(function(C){return Oo(C)===b}):ui,w=x.filter(function(C){return v.indexOf(C)>=0});w.length===0&&(w=x);var S=w.reduce(function(C,k){return C[k]=ri(n,{placement:k,boundary:u,rootBoundary:d,padding:p})[Ln(k)],C},{});return Object.keys(S).sort(function(C,k){return S[C]-S[k]})}function I2(n){if(Ln(n)===Xf)return[];var a=Jl(n);return[ab(n),a,ab(a)]}function P2(n){var a=n.state,o=n.options,l=n.name;if(!a.modifiersData[l]._skip){for(var u=o.mainAxis,d=u===void 0?!0:u,p=o.altAxis,g=p===void 0?!0:p,h=o.fallbackPlacements,v=o.padding,b=o.boundary,x=o.rootBoundary,w=o.altBoundary,S=o.flipVariations,C=S===void 0?!0:S,k=o.allowedAutoPlacements,E=a.options.placement,O=Ln(E),N=O===E,D=h||(N||!C?[Jl(E)]:I2(E)),L=[E].concat(D).reduce(function(se,pe){return se.concat(Ln(pe)===Xf?U2(a,{placement:pe,boundary:b,rootBoundary:x,padding:v,flipVariations:C,allowedAutoPlacements:k}):pe)},[]),z=a.rects.reference,_=a.rects.popper,M=new Map,R=!0,q=L[0],Q=0;Q<L.length;Q++){var re=L[Q],oe=Ln(re),ie=Oo(re)===No,J=[Dt,gn].indexOf(oe)>=0,le=J?"width":"height",$=ri(a,{placement:re,boundary:b,rootBoundary:x,altBoundary:w,padding:v}),ee=J?ie?vn:Lt:ie?gn:Dt;z[le]>_[le]&&(ee=Jl(ee));var Y=Jl(ee),V=[];if(d&&V.push($[oe]<=0),g&&V.push($[ee]<=0,$[Y]<=0),V.every(function(se){return se})){q=re,R=!1;break}M.set(re,V)}if(R)for(var A=C?3:1,I=function(pe){var fe=L.find(function(He){var we=M.get(He);if(we)return we.slice(0,pe).every(function(Pe){return Pe})});if(fe)return q=fe,"break"},ne=A;ne>0;ne--){var te=I(ne);if(te==="break")break}a.placement!==q&&(a.modifiersData[l]._skip=!0,a.placement=q,a.reset=!0)}}const $2={name:"flip",enabled:!0,phase:"main",fn:P2,requiresIfExists:["offset"],data:{_skip:!1}};function ob(n,a,o){return o===void 0&&(o={x:0,y:0}),{top:n.top-a.height-o.y,right:n.right-a.width+o.x,bottom:n.bottom-a.height+o.y,left:n.left-a.width-o.x}}function sb(n){return[Dt,vn,gn,Lt].some(function(a){return n[a]>=0})}function H2(n){var a=n.state,o=n.name,l=a.rects.reference,u=a.rects.popper,d=a.modifiersData.preventOverflow,p=ri(a,{elementContext:"reference"}),g=ri(a,{altBoundary:!0}),h=ob(p,l),v=ob(g,u,d),b=sb(h),x=sb(v);a.modifiersData[o]={referenceClippingOffsets:h,popperEscapeOffsets:v,isReferenceHidden:b,hasPopperEscaped:x},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":b,"data-popper-escaped":x})}const G2={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:H2};function q2(n,a,o){var l=Ln(n),u=[Lt,Dt].indexOf(l)>=0?-1:1,d=typeof o=="function"?o(Object.assign({},a,{placement:n})):o,p=d[0],g=d[1];return p=p||0,g=(g||0)*u,[Lt,vn].indexOf(l)>=0?{x:g,y:p}:{x:p,y:g}}function J2(n){var a=n.state,o=n.options,l=n.name,u=o.offset,d=u===void 0?[0,0]:u,p=ky.reduce(function(b,x){return b[x]=q2(x,a.rects,d),b},{}),g=p[a.placement],h=g.x,v=g.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=h,a.modifiersData.popperOffsets.y+=v),a.modifiersData[l]=p}const F2={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:J2};function V2(n){var a=n.state,o=n.name;a.modifiersData[o]=zy({reference:a.rects.reference,element:a.rects.popper,placement:a.placement})}const Y2={name:"popperOffsets",enabled:!0,phase:"read",fn:V2,data:{}};function X2(n){return n==="x"?"y":"x"}function Z2(n){var a=n.state,o=n.options,l=n.name,u=o.mainAxis,d=u===void 0?!0:u,p=o.altAxis,g=p===void 0?!1:p,h=o.boundary,v=o.rootBoundary,b=o.altBoundary,x=o.padding,w=o.tether,S=w===void 0?!0:w,C=o.tetherOffset,k=C===void 0?0:C,E=ri(a,{boundary:h,rootBoundary:v,padding:x,altBoundary:b}),O=Ln(a.placement),N=Oo(a.placement),D=!N,L=Qf(O),z=X2(L),_=a.modifiersData.popperOffsets,M=a.rects.reference,R=a.rects.popper,q=typeof k=="function"?k(Object.assign({},a.rects,{placement:a.placement})):k,Q=typeof q=="number"?{mainAxis:q,altAxis:q}:Object.assign({mainAxis:0,altAxis:0},q),re=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,oe={x:0,y:0};if(_){if(d){var ie,J=L==="y"?Dt:Lt,le=L==="y"?gn:vn,$=L==="y"?"height":"width",ee=_[L],Y=ee+E[J],V=ee-E[le],A=S?-R[$]/2:0,I=N===No?M[$]:R[$],ne=N===No?-R[$]:-M[$],te=a.elements.arrow,se=S&&te?Kf(te):{width:0,height:0},pe=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:Dy(),fe=pe[J],He=pe[le],we=ei(0,M[$],se[$]),Pe=D?M[$]/2-A-we-fe-Q.mainAxis:I-we-fe-Q.mainAxis,Bt=D?-M[$]/2+A+we+He+Q.mainAxis:ne+we+He+Q.mainAxis,zt=a.elements.arrow&&di(a.elements.arrow),Zt=zt?L==="y"?zt.clientTop||0:zt.clientLeft||0:0,Kt=(ie=re?.[L])!=null?ie:0,Qt=ee+Pe-Kt-Zt,ze=ee+Bt-Kt,$n=ei(S?Xl(Y,Qt):Y,ee,S?hr(V,ze):V);_[L]=$n,oe[L]=$n-ee}if(g){var ot,Yo=L==="x"?Dt:Lt,Cr=L==="x"?gn:vn,Wt=_[z],xn=z==="y"?"height":"width",Ar=Wt+E[Yo],Ya=Wt-E[Cr],va=[Dt,Lt].indexOf(O)!==-1,Or=(ot=re?.[z])!=null?ot:0,je=va?Ar:Wt-M[xn]-R[xn]-Or+Q.altAxis,Ye=va?Wt+M[xn]+R[xn]-Or-Q.altAxis:Ya,Ct=S&&va?x2(je,Wt,Ye):ei(S?je:Ar,Wt,S?Ye:Ya);_[z]=Ct,oe[z]=Ct-Wt}a.modifiersData[l]=oe}}const K2={name:"preventOverflow",enabled:!0,phase:"main",fn:Z2,requiresIfExists:["offset"]};function Q2(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function W2(n){return n===Ft(n)||!Mn(n)?Wf(n):Q2(n)}function eC(n){var a=n.getBoundingClientRect(),o=Co(a.width)/n.offsetWidth||1,l=Co(a.height)/n.offsetHeight||1;return o!==1||l!==1}function tC(n,a,o){o===void 0&&(o=!1);var l=Mn(a),u=Mn(a)&&eC(a),d=Va(a),p=Ao(n,u,o),g={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(l||!l&&!o)&&((Fa(a)!=="body"||tm(d))&&(g=W2(a)),Mn(a)?(h=Ao(a,!0),h.x+=a.clientLeft,h.y+=a.clientTop):d&&(h.x=em(d))),{x:p.left+g.scrollLeft-h.x,y:p.top+g.scrollTop-h.y,width:p.width,height:p.height}}function nC(n){var a=new Map,o=new Set,l=[];n.forEach(function(d){a.set(d.name,d)});function u(d){o.add(d.name);var p=[].concat(d.requires||[],d.requiresIfExists||[]);p.forEach(function(g){if(!o.has(g)){var h=a.get(g);h&&u(h)}}),l.push(d)}return n.forEach(function(d){o.has(d.name)||u(d)}),l}function aC(n){var a=nC(n);return v2.reduce(function(o,l){return o.concat(a.filter(function(u){return u.phase===l}))},[])}function rC(n){var a;return function(){return a||(a=new Promise(function(o){Promise.resolve().then(function(){a=void 0,o(n())})})),a}}function oC(n){var a=n.reduce(function(o,l){var u=o[l.name];return o[l.name]=u?Object.assign({},u,l,{options:Object.assign({},u.options,l.options),data:Object.assign({},u.data,l.data)}):l,o},{});return Object.keys(a).map(function(o){return a[o]})}var ib={placement:"bottom",modifiers:[],strategy:"absolute"};function lb(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return!a.some(function(l){return!(l&&typeof l.getBoundingClientRect=="function")})}function sC(n){n===void 0&&(n={});var a=n,o=a.defaultModifiers,l=o===void 0?[]:o,u=a.defaultOptions,d=u===void 0?ib:u;return function(g,h,v){v===void 0&&(v=d);var b={placement:"bottom",orderedModifiers:[],options:Object.assign({},ib,d),modifiersData:{},elements:{reference:g,popper:h},attributes:{},styles:{}},x=[],w=!1,S={state:b,setOptions:function(O){var N=typeof O=="function"?O(b.options):O;k(),b.options=Object.assign({},d,b.options,N),b.scrollParents={reference:vr(g)?ti(g):g.contextElement?ti(g.contextElement):[],popper:ti(h)};var D=aC(oC([].concat(l,b.options.modifiers)));return b.orderedModifiers=D.filter(function(L){return L.enabled}),C(),S.update()},forceUpdate:function(){if(!w){var O=b.elements,N=O.reference,D=O.popper;if(lb(N,D)){b.rects={reference:tC(N,di(D),b.options.strategy==="fixed"),popper:Kf(D)},b.reset=!1,b.placement=b.options.placement,b.orderedModifiers.forEach(function(Q){return b.modifiersData[Q.name]=Object.assign({},Q.data)});for(var L=0;L<b.orderedModifiers.length;L++){if(b.reset===!0){b.reset=!1,L=-1;continue}var z=b.orderedModifiers[L],_=z.fn,M=z.options,R=M===void 0?{}:M,q=z.name;typeof _=="function"&&(b=_({state:b,options:R,name:q,instance:S})||b)}}}},update:rC(function(){return new Promise(function(E){S.forceUpdate(),E(b)})}),destroy:function(){k(),w=!0}};if(!lb(g,h))return S;S.setOptions(v).then(function(E){!w&&v.onFirstUpdate&&v.onFirstUpdate(E)});function C(){b.orderedModifiers.forEach(function(E){var O=E.name,N=E.options,D=N===void 0?{}:N,L=E.effect;if(typeof L=="function"){var z=L({state:b,name:O,instance:S,options:D}),_=function(){};x.push(z||_)}})}function k(){x.forEach(function(E){return E()}),x=[]}return S}}const iC=sC({defaultModifiers:[G2,Y2,O2,T2,F2,$2,K2,E2]}),lC=["enabled","placement","strategy","modifiers"];function cC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const uC={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},dC={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:n})=>()=>{const{reference:a,popper:o}=n.elements;if("removeAttribute"in a){const l=(a.getAttribute("aria-describedby")||"").split(",").filter(u=>u.trim()!==o.id);l.length?a.setAttribute("aria-describedby",l.join(",")):a.removeAttribute("aria-describedby")}},fn:({state:n})=>{var a;const{popper:o,reference:l}=n.elements,u=(a=o.getAttribute("role"))==null?void 0:a.toLowerCase();if(o.id&&u==="tooltip"&&"setAttribute"in l){const d=l.getAttribute("aria-describedby");if(d&&d.split(",").indexOf(o.id)!==-1)return;l.setAttribute("aria-describedby",d?`${d},${o.id}`:o.id)}}},fC=[];function _y(n,a,o={}){let{enabled:l=!0,placement:u="bottom",strategy:d="absolute",modifiers:p=fC}=o,g=cC(o,lC);const h=m.useRef(p),v=m.useRef(),b=m.useCallback(()=>{var E;(E=v.current)==null||E.update()},[]),x=m.useCallback(()=>{var E;(E=v.current)==null||E.forceUpdate()},[]),[w,S]=o2(m.useState({placement:u,update:b,forceUpdate:x,attributes:{},styles:{popper:{},arrow:{}}})),C=m.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:E})=>{const O={},N={};Object.keys(E.elements).forEach(D=>{O[D]=E.styles[D],N[D]=E.attributes[D]}),S({state:E,styles:O,attributes:N,update:b,forceUpdate:x,placement:E.placement})}}),[b,x,S]),k=m.useMemo(()=>(Ws(h.current,p)||(h.current=p),h.current),[p]);return m.useEffect(()=>{!v.current||!l||v.current.setOptions({placement:u,strategy:d,modifiers:[...k,C,uC]})},[d,u,C,l,k]),m.useEffect(()=>{if(!(!l||n==null||a==null))return v.current=iC(n,a,Object.assign({},g,{placement:u,strategy:d,modifiers:[...k,dC,C]})),()=>{v.current!=null&&(v.current.destroy(),v.current=void 0,S(E=>Object.assign({},E,{attributes:{},styles:{popper:{}}})))}},[l,n,a]),w}function oi(n,a){if(n.contains)return n.contains(a);if(n.compareDocumentPosition)return n===a||!!(n.compareDocumentPosition(a)&16)}var Wd,cb;function mC(){if(cb)return Wd;cb=1;var n=function(){};return Wd=n,Wd}var pC=mC();const hC=Ro(pC),ub=()=>{};function gC(n){return n.button===0}function vC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}const Fl=n=>n&&("current"in n?n.current:n),db={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function Uy(n,a=ub,{disabled:o,clickTrigger:l="click"}={}){const u=m.useRef(!1),d=m.useRef(!1),p=m.useCallback(v=>{const b=Fl(n);hC(!!b,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),u.current=!b||vC(v)||!gC(v)||!!oi(b,v.target)||d.current,d.current=!1},[n]),g=gt(v=>{const b=Fl(n);b&&oi(b,v.target)?d.current=!0:d.current=!1}),h=gt(v=>{u.current||a(v)});m.useEffect(()=>{var v,b;if(o||n==null)return;const x=Mo(Fl(n)),w=x.defaultView||window;let S=(v=w.event)!=null?v:(b=w.parent)==null?void 0:b.event,C=null;db[l]&&(C=oa(x,db[l],g,!0));const k=oa(x,l,p,!0),E=oa(x,l,N=>{if(N===S){S=void 0;return}h(N)});let O=[];return"ontouchstart"in x.documentElement&&(O=[].slice.call(x.body.children).map(N=>oa(N,"mousemove",ub))),()=>{C?.(),k(),E(),O.forEach(N=>N())}},[n,o,l,p,g,h])}function bC(n){const a={};return Array.isArray(n)?(n?.forEach(o=>{a[o.name]=o}),a):n||a}function yC(n={}){return Array.isArray(n)?n:Object.keys(n).map(a=>(n[a].name=a,n[a]))}function Iy({enabled:n,enableEvents:a,placement:o,flip:l,offset:u,fixed:d,containerPadding:p,arrowElement:g,popperConfig:h={}}){var v,b,x,w,S;const C=bC(h.modifiers);return Object.assign({},h,{placement:o,enabled:n,strategy:d?"fixed":h.strategy,modifiers:yC(Object.assign({},C,{eventListeners:{enabled:a,options:(v=C.eventListeners)==null?void 0:v.options},preventOverflow:Object.assign({},C.preventOverflow,{options:p?Object.assign({padding:p},(b=C.preventOverflow)==null?void 0:b.options):(x=C.preventOverflow)==null?void 0:x.options}),offset:{options:Object.assign({offset:u},(w=C.offset)==null?void 0:w.options)},arrow:Object.assign({},C.arrow,{enabled:!!g,options:Object.assign({},(S=C.arrow)==null?void 0:S.options,{element:g})}),flip:Object.assign({enabled:!!l},C.flip)}))})}const xC=["children","usePopper"];function wC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const jC=()=>{};function Py(n={}){const a=m.useContext(gc),[o,l]=yf(),u=m.useRef(!1),{flip:d,offset:p,rootCloseEvent:g,fixed:h=!1,placement:v,popperConfig:b={},enableEventListeners:x=!0,usePopper:w=!!a}=n,S=a?.show==null?!!n.show:a.show;S&&!u.current&&(u.current=!0);const C=_=>{a?.toggle(!1,_)},{placement:k,setMenu:E,menuElement:O,toggleElement:N}=a||{},D=_y(N,O,Iy({placement:v||k||"bottom-start",enabled:w,enableEvents:x??S,offset:p,flip:d,fixed:h,arrowElement:o,popperConfig:b})),L=Object.assign({ref:E||jC,"aria-labelledby":N?.id},D.attributes.popper,{style:D.styles.popper}),z={show:S,placement:k,hasShown:u.current,toggle:a?.toggle,popper:w?D:null,arrowProps:w?Object.assign({ref:l},D.attributes.arrow,{style:D.styles.arrow}):{}};return Uy(O,C,{clickTrigger:g,disabled:!S}),[L,z]}function $y(n){let{children:a,usePopper:o=!0}=n,l=wC(n,xC);const[u,d]=Py(Object.assign({},l,{usePopper:o}));return s.jsx(s.Fragment,{children:a(u,d)})}$y.displayName="DropdownMenu";const Hy={prefix:String(Math.round(Math.random()*1e10)),current:0},Gy=Fe.createContext(Hy),SC=Fe.createContext(!1);let ef=new WeakMap;function EC(n=!1){let a=m.useContext(Gy),o=m.useRef(null);if(o.current===null&&!n){var l,u;let d=(u=Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||u===void 0||(l=u.ReactCurrentOwner)===null||l===void 0?void 0:l.current;if(d){let p=ef.get(d);p==null?ef.set(d,{id:a.current,state:d.memoizedState}):d.memoizedState!==p.state&&(a.current=p.id,ef.delete(d))}o.current=++a.current}return o.current}function NC(n){let a=m.useContext(Gy),o=EC(!!n),l=`react-aria${a.prefix}`;return n||`${l}-${o}`}function CC(n){let a=Fe.useId(),[o]=m.useState(TC()),l=o?"react-aria":`react-aria${Hy.prefix}`;return n||`${l}-${a}`}const qy=typeof Fe.useId=="function"?CC:NC;function AC(){return!1}function OC(){return!0}function kC(n){return()=>{}}function TC(){return typeof Fe.useSyncExternalStore=="function"?Fe.useSyncExternalStore(kC,AC,OC):m.useContext(SC)}const Jy=n=>{var a;return((a=n.getAttribute("role"))==null?void 0:a.toLowerCase())==="menu"},fb=()=>{};function Fy(){const n=qy(),{show:a=!1,toggle:o=fb,setToggle:l,menuElement:u}=m.useContext(gc)||{},d=m.useCallback(g=>{o(!a,g)},[a,o]),p={id:n,ref:l||fb,onClick:d,"aria-expanded":!!a};return u&&Jy(u)&&(p["aria-haspopup"]=!0),[p,{show:a,toggle:o}]}function Vy({children:n}){const[a,o]=Fy();return s.jsx(s.Fragment,{children:n(a,o)})}Vy.displayName="DropdownToggle";const Bn=m.createContext(null),br=(n,a=null)=>n!=null?String(n):a||null,bc=m.createContext(null);bc.displayName="NavContext";const RC="data-rr-ui-",DC="rrUi";function Uo(n){return`${RC}${n}`}function LC(n){return`${DC}${n}`}const MC=["eventKey","disabled","onClick","active","as"];function BC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Yy({key:n,href:a,active:o,disabled:l,onClick:u}){const d=m.useContext(Bn),p=m.useContext(bc),{activeKey:g}=p||{},h=br(n,a),v=o==null&&n!=null?br(g)===h:o;return[{onClick:gt(x=>{l||(u?.(x),d&&!x.isPropagationStopped()&&d(h,x))}),"aria-disabled":l||void 0,"aria-selected":v,[Uo("dropdown-item")]:""},{isActive:v}]}const Xy=m.forwardRef((n,a)=>{let{eventKey:o,disabled:l,onClick:u,active:d,as:p=Jf}=n,g=BC(n,MC);const[h]=Yy({key:o,href:g.href,disabled:l,onClick:u,active:d});return s.jsx(p,Object.assign({},g,{ref:a},h))});Xy.displayName="DropdownItem";const Zy=m.createContext(Bo?window:void 0);Zy.Provider;function yc(){return m.useContext(Zy)}function mb(){const n=Ay(),a=m.useRef(null),o=m.useCallback(l=>{a.current=l,n()},[n]);return[a,o]}function fi({defaultShow:n,show:a,onSelect:o,onToggle:l,itemSelector:u=`* [${Uo("dropdown-item")}]`,focusFirstItemOnShow:d,placement:p="bottom-start",children:g}){const h=yc(),[v,b]=Cy(a,n,l),[x,w]=mb(),S=x.current,[C,k]=mb(),E=C.current,O=my(v),N=m.useRef(null),D=m.useRef(!1),L=m.useContext(Bn),z=m.useCallback((re,oe,ie=oe?.type)=>{b(re,{originalEvent:oe,source:ie})},[b]),_=gt((re,oe)=>{o?.(re,oe),z(!1,oe,"select"),oe.isPropagationStopped()||L?.(re,oe)}),M=m.useMemo(()=>({toggle:z,placement:p,show:v,menuElement:S,toggleElement:E,setMenu:w,setToggle:k}),[z,p,v,S,E,w,k]);S&&O&&!v&&(D.current=S.contains(S.ownerDocument.activeElement));const R=gt(()=>{E&&E.focus&&E.focus()}),q=gt(()=>{const re=N.current;let oe=d;if(oe==null&&(oe=x.current&&Jy(x.current)?"keyboard":!1),oe===!1||oe==="keyboard"&&!/^key.+$/.test(re))return;const ie=aa(x.current,u)[0];ie&&ie.focus&&ie.focus()});m.useEffect(()=>{v?q():D.current&&(D.current=!1,R())},[v,D,R,q]),m.useEffect(()=>{N.current=null});const Q=(re,oe)=>{if(!x.current)return null;const ie=aa(x.current,u);let J=ie.indexOf(re)+oe;return J=Math.max(0,Math.min(J,ie.length)),ie[J]};return PN(m.useCallback(()=>h.document,[h]),"keydown",re=>{var oe,ie;const{key:J}=re,le=re.target,$=(oe=x.current)==null?void 0:oe.contains(le),ee=(ie=C.current)==null?void 0:ie.contains(le);if(/input|textarea/i.test(le.tagName)&&(J===" "||J!=="Escape"&&$||J==="Escape"&&le.type==="search")||!$&&!ee||J==="Tab"&&(!x.current||!v))return;N.current=re.type;const V={originalEvent:re,source:re.type};switch(J){case"ArrowUp":{const A=Q(le,-1);A&&A.focus&&A.focus(),re.preventDefault();return}case"ArrowDown":if(re.preventDefault(),!v)b(!0,V);else{const A=Q(le,1);A&&A.focus&&A.focus()}return;case"Tab":Hf(le.ownerDocument,"keyup",A=>{var I;(A.key==="Tab"&&!A.target||!((I=x.current)!=null&&I.contains(A.target)))&&b(!1,V)},{once:!0});break;case"Escape":J==="Escape"&&(re.preventDefault(),re.stopPropagation()),b(!1,V);break}}),s.jsx(Bn.Provider,{value:_,children:s.jsx(gc.Provider,{value:M,children:g})})}fi.displayName="Dropdown";fi.Menu=$y;fi.Toggle=Vy;fi.Item=Xy;const nm=m.createContext({});nm.displayName="DropdownContext";const Ky=m.forwardRef(({className:n,bsPrefix:a,as:o="hr",role:l="separator",...u},d)=>(a=ue(a,"dropdown-divider"),s.jsx(o,{ref:d,className:ce(n,a),role:l,...u})));Ky.displayName="DropdownDivider";const Qy=m.forwardRef(({className:n,bsPrefix:a,as:o="div",role:l="heading",...u},d)=>(a=ue(a,"dropdown-header"),s.jsx(o,{ref:d,className:ce(n,a),role:l,...u})));Qy.displayName="DropdownHeader";const Wy=m.forwardRef(({bsPrefix:n,className:a,eventKey:o,disabled:l=!1,onClick:u,active:d,as:p=Ff,...g},h)=>{const v=ue(n,"dropdown-item"),[b,x]=Yy({key:o,href:g.href,disabled:l,onClick:u,active:d});return s.jsx(p,{...g,...b,ref:h,className:ce(a,v,x.isActive&&"active",l&&"disabled")})});Wy.displayName="DropdownItem";const ex=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},u)=>(a=ue(a,"dropdown-item-text"),s.jsx(o,{ref:u,className:ce(n,a),...l})));ex.displayName="DropdownItemText";const zC=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",_C=typeof document<"u",am=_C||zC?m.useLayoutEffect:m.useEffect,xc=m.createContext(null);xc.displayName="InputGroupContext";const Sr=m.createContext(null);Sr.displayName="NavbarContext";function tx(n,a){return n}function nx(n,a,o){const l=o?"top-end":"top-start",u=o?"top-start":"top-end",d=o?"bottom-end":"bottom-start",p=o?"bottom-start":"bottom-end",g=o?"right-start":"left-start",h=o?"right-end":"left-end",v=o?"left-start":"right-start",b=o?"left-end":"right-end";let x=n?p:d;return a==="up"?x=n?u:l:a==="end"?x=n?b:v:a==="start"?x=n?h:g:a==="down-centered"?x="bottom":a==="up-centered"&&(x="top"),x}const ax=m.forwardRef(({bsPrefix:n,className:a,align:o,rootCloseEvent:l,flip:u=!0,show:d,renderOnMount:p,as:g="div",popperConfig:h,variant:v,...b},x)=>{let w=!1;const S=m.useContext(Sr),C=ue(n,"dropdown-menu"),{align:k,drop:E,isRTL:O}=m.useContext(nm);o=o||k;const N=m.useContext(xc),D=[];if(o)if(typeof o=="object"){const re=Object.keys(o);if(re.length){const oe=re[0],ie=o[oe];w=ie==="start",D.push(`${C}-${oe}-${ie}`)}}else o==="end"&&(w=!0);const L=nx(w,E,O),[z,{hasShown:_,popper:M,show:R,toggle:q}]=Py({flip:u,rootCloseEvent:l,show:d,usePopper:!S&&D.length===0,offset:[0,2],popperConfig:h,placement:L});if(z.ref=zo(tx(x),z.ref),am(()=>{R&&M?.update()},[R]),!_&&!p&&!N)return null;typeof g!="string"&&(z.show=R,z.close=()=>q?.(!1),z.align=o);let Q=b.style;return M!=null&&M.placement&&(Q={...b.style,...z.style},b["x-placement"]=M.placement),s.jsx(g,{...b,...z,style:Q,...(D.length||S)&&{"data-bs-popper":"static"},className:ce(a,C,R&&"show",w&&`${C}-end`,v&&`${C}-${v}`,...D)})});ax.displayName="DropdownMenu";const rx=m.forwardRef(({bsPrefix:n,split:a,className:o,childBsPrefix:l,as:u=Oe,...d},p)=>{const g=ue(n,"dropdown-toggle"),h=m.useContext(gc);l!==void 0&&(d.bsPrefix=l);const[v]=Fy();return v.ref=zo(v.ref,tx(p)),s.jsx(u,{className:ce(o,g,a&&`${g}-split`,h?.show&&"show"),...v,...d})});rx.displayName="DropdownToggle";const ox=m.forwardRef((n,a)=>{const{bsPrefix:o,drop:l="down",show:u,className:d,align:p="start",onSelect:g,onToggle:h,focusFirstItemOnShow:v,as:b="div",navbar:x,autoClose:w=!0,...S}=dc(n,{show:"onToggle"}),C=m.useContext(xc),k=ue(o,"dropdown"),E=fc(),O=M=>w===!1?M==="click":w==="inside"?M!=="rootClose":w==="outside"?M!=="select":!0,N=ua((M,R)=>{var q;!((q=R.originalEvent)==null||(q=q.target)==null)&&q.classList.contains("dropdown-toggle")&&R.source==="mousedown"||(R.originalEvent.currentTarget===document&&(R.source!=="keydown"||R.originalEvent.key==="Escape")&&(R.source="rootClose"),O(R.source)&&h?.(M,R))}),L=nx(p==="end",l,E),z=m.useMemo(()=>({align:p,drop:l,isRTL:E}),[p,l,E]),_={down:k,"down-centered":`${k}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return s.jsx(nm.Provider,{value:z,children:s.jsx(fi,{placement:L,show:u,onSelect:g,onToggle:N,focusFirstItemOnShow:v,itemSelector:`.${k}-item:not(.disabled):not(:disabled)`,children:C?S.children:s.jsx(b,{...S,ref:a,className:ce(d,u&&"show",_[l])})})})});ox.displayName="Dropdown";const mn=Object.assign(ox,{Toggle:rx,Menu:ax,Item:Wy,ItemText:ex,Divider:Ky,Header:Qy}),UC={type:Be.string,tooltip:Be.bool,as:Be.elementType},wc=m.forwardRef(({as:n="div",className:a,type:o="valid",tooltip:l=!1,...u},d)=>s.jsx(n,{...u,ref:d,className:ce(a,`${o}-${l?"tooltip":"feedback"}`)}));wc.displayName="Feedback";wc.propTypes=UC;const ma=m.createContext({}),mi=m.forwardRef(({id:n,bsPrefix:a,className:o,type:l="checkbox",isValid:u=!1,isInvalid:d=!1,as:p="input",...g},h)=>{const{controlId:v}=m.useContext(ma);return a=ue(a,"form-check-input"),s.jsx(p,{...g,ref:h,type:l,id:n||v,className:ce(o,a,u&&"is-valid",d&&"is-invalid")})});mi.displayName="FormCheckInput";const Zl=m.forwardRef(({bsPrefix:n,className:a,htmlFor:o,...l},u)=>{const{controlId:d}=m.useContext(ma);return n=ue(n,"form-check-label"),s.jsx("label",{...l,ref:u,htmlFor:o||d,className:ce(a,n)})});Zl.displayName="FormCheckLabel";const sx=m.forwardRef(({id:n,bsPrefix:a,bsSwitchPrefix:o,inline:l=!1,reverse:u=!1,disabled:d=!1,isValid:p=!1,isInvalid:g=!1,feedbackTooltip:h=!1,feedback:v,feedbackType:b,className:x,style:w,title:S="",type:C="checkbox",label:k,children:E,as:O="input",...N},D)=>{a=ue(a,"form-check"),o=ue(o,"form-switch");const{controlId:L}=m.useContext(ma),z=m.useMemo(()=>({controlId:n||L}),[L,n]),_=!E&&k!=null&&k!==!1||n2(E,Zl),M=s.jsx(mi,{...N,type:C==="switch"?"checkbox":C,ref:D,isValid:p,isInvalid:g,disabled:d,as:O});return s.jsx(ma.Provider,{value:z,children:s.jsx("div",{style:w,className:ce(x,_&&a,l&&`${a}-inline`,u&&`${a}-reverse`,C==="switch"&&o),children:E||s.jsxs(s.Fragment,{children:[M,_&&s.jsx(Zl,{title:S,children:k}),v&&s.jsx(wc,{type:b,tooltip:h,children:v})]})})})});sx.displayName="FormCheck";const Kl=Object.assign(sx,{Input:mi,Label:Zl}),ix=m.forwardRef(({bsPrefix:n,type:a,size:o,htmlSize:l,id:u,className:d,isValid:p=!1,isInvalid:g=!1,plaintext:h,readOnly:v,as:b="input",...x},w)=>{const{controlId:S}=m.useContext(ma);return n=ue(n,"form-control"),s.jsx(b,{...x,type:a,size:l,ref:w,readOnly:v,id:u||S,className:ce(d,h?`${n}-plaintext`:n,o&&`${n}-${o}`,a==="color"&&`${n}-color`,p&&"is-valid",g&&"is-invalid")})});ix.displayName="FormControl";const IC=Object.assign(ix,{Feedback:wc}),lx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"form-floating"),s.jsx(o,{ref:u,className:ce(n,a),...l})));lx.displayName="FormFloating";const rm=m.forwardRef(({controlId:n,as:a="div",...o},l)=>{const u=m.useMemo(()=>({controlId:n}),[n]);return s.jsx(ma.Provider,{value:u,children:s.jsx(a,{...o,ref:l})})});rm.displayName="FormGroup";const cx=m.forwardRef(({as:n="label",bsPrefix:a,column:o=!1,visuallyHidden:l=!1,className:u,htmlFor:d,...p},g)=>{const{controlId:h}=m.useContext(ma);a=ue(a,"form-label");let v="col-form-label";typeof o=="string"&&(v=`${v} ${v}-${o}`);const b=ce(u,a,l&&"visually-hidden",o&&v);return d=d||h,o?s.jsx(Nn,{ref:g,as:"label",className:b,htmlFor:d,...p}):s.jsx(n,{ref:g,className:b,htmlFor:d,...p})});cx.displayName="FormLabel";const ux=m.forwardRef(({bsPrefix:n,className:a,id:o,...l},u)=>{const{controlId:d}=m.useContext(ma);return n=ue(n,"form-range"),s.jsx("input",{...l,type:"range",ref:u,className:ce(a,n),id:o||d})});ux.displayName="FormRange";const dx=m.forwardRef(({bsPrefix:n,size:a,htmlSize:o,className:l,isValid:u=!1,isInvalid:d=!1,id:p,...g},h)=>{const{controlId:v}=m.useContext(ma);return n=ue(n,"form-select"),s.jsx("select",{...g,size:o,ref:h,className:ce(l,n,a&&`${n}-${a}`,u&&"is-valid",d&&"is-invalid"),id:p||v})});dx.displayName="FormSelect";const fx=m.forwardRef(({bsPrefix:n,className:a,as:o="small",muted:l,...u},d)=>(n=ue(n,"form-text"),s.jsx(o,{...u,ref:d,className:ce(a,n,l&&"text-muted")})));fx.displayName="FormText";const mx=m.forwardRef((n,a)=>s.jsx(Kl,{...n,ref:a,type:"switch"}));mx.displayName="Switch";const PC=Object.assign(mx,{Input:Kl.Input,Label:Kl.Label}),px=m.forwardRef(({bsPrefix:n,className:a,children:o,controlId:l,label:u,...d},p)=>(n=ue(n,"form-floating"),s.jsxs(rm,{ref:p,className:ce(a,n),controlId:l,...d,children:[o,s.jsx("label",{htmlFor:l,children:u})]})));px.displayName="FloatingLabel";const $C={_ref:Be.any,validated:Be.bool,as:Be.elementType},om=m.forwardRef(({className:n,validated:a,as:o="form",...l},u)=>s.jsx(o,{...l,ref:u,className:ce(n,a&&"was-validated")}));om.displayName="Form";om.propTypes=$C;const ae=Object.assign(om,{Group:rm,Control:IC,Floating:lx,Check:Kl,Switch:PC,Label:cx,Text:fx,Range:ux,Select:dx,FloatingLabel:px}),jc=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},u)=>(a=ue(a,"input-group-text"),s.jsx(o,{ref:u,className:ce(n,a),...l})));jc.displayName="InputGroupText";const HC=n=>s.jsx(jc,{children:s.jsx(mi,{type:"checkbox",...n})}),GC=n=>s.jsx(jc,{children:s.jsx(mi,{type:"radio",...n})}),hx=m.forwardRef(({bsPrefix:n,size:a,hasValidation:o,className:l,as:u="div",...d},p)=>{n=ue(n,"input-group");const g=m.useMemo(()=>({}),[]);return s.jsx(xc.Provider,{value:g,children:s.jsx(u,{ref:p,...d,className:ce(l,n,a&&`${n}-${a}`,o&&"has-validation")})})});hx.displayName="InputGroup";const qC=Object.assign(hx,{Text:jc,Radio:GC,Checkbox:HC}),pb=n=>!n||typeof n=="function"?n:a=>{n.current=a};function JC(n,a){const o=pb(n),l=pb(a);return u=>{o&&o(u),l&&l(u)}}function pi(n,a){return m.useMemo(()=>JC(n,a),[n,a])}const Io=m.createContext(null),FC=["as","active","eventKey"];function VC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function gx({key:n,onClick:a,active:o,id:l,role:u,disabled:d}){const p=m.useContext(Bn),g=m.useContext(bc),h=m.useContext(Io);let v=o;const b={role:u};if(g){!u&&g.role==="tablist"&&(b.role="tab");const x=g.getControllerId(n??null),w=g.getControlledId(n??null);b[Uo("event-key")]=n,b.id=x||l,v=o==null&&n!=null?g.activeKey===n:o,(v||!(h!=null&&h.unmountOnExit)&&!(h!=null&&h.mountOnEnter))&&(b["aria-controls"]=w)}return b.role==="tab"&&(b["aria-selected"]=v,v||(b.tabIndex=-1),d&&(b.tabIndex=-1,b["aria-disabled"]=!0)),b.onClick=gt(x=>{d||(a?.(x),n!=null&&p&&!x.isPropagationStopped()&&p(n,x))}),[b,{isActive:v}]}const vx=m.forwardRef((n,a)=>{let{as:o=Jf,active:l,eventKey:u}=n,d=VC(n,FC);const[p,g]=gx(Object.assign({key:br(u,d.href),active:l},d));return p[Uo("active")]=g.isActive,s.jsx(o,Object.assign({},d,p,{ref:a}))});vx.displayName="NavItem";const YC=["as","onSelect","activeKey","role","onKeyDown"];function XC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const hb=()=>{},gb=Uo("event-key"),bx=m.forwardRef((n,a)=>{let{as:o="div",onSelect:l,activeKey:u,role:d,onKeyDown:p}=n,g=XC(n,YC);const h=Ay(),v=m.useRef(!1),b=m.useContext(Bn),x=m.useContext(Io);let w,S;x&&(d=d||"tablist",u=x.activeKey,w=x.getControlledId,S=x.getControllerId);const C=m.useRef(null),k=D=>{const L=C.current;if(!L)return null;const z=aa(L,`[${gb}]:not([aria-disabled=true])`),_=L.querySelector("[aria-selected=true]");if(!_||_!==document.activeElement)return null;const M=z.indexOf(_);if(M===-1)return null;let R=M+D;return R>=z.length&&(R=0),R<0&&(R=z.length-1),z[R]},E=(D,L)=>{D!=null&&(l?.(D,L),b?.(D,L))},O=D=>{if(p?.(D),!x)return;let L;switch(D.key){case"ArrowLeft":case"ArrowUp":L=k(-1);break;case"ArrowRight":case"ArrowDown":L=k(1);break;default:return}L&&(D.preventDefault(),E(L.dataset[LC("EventKey")]||null,D),v.current=!0,h())};m.useEffect(()=>{if(C.current&&v.current){const D=C.current.querySelector(`[${gb}][aria-selected=true]`);D?.focus()}v.current=!1});const N=pi(a,C);return s.jsx(Bn.Provider,{value:E,children:s.jsx(bc.Provider,{value:{role:d,activeKey:br(u),getControlledId:w||hb,getControllerId:S||hb},children:s.jsx(o,Object.assign({},g,{onKeyDown:O,ref:N,role:d}))})})});bx.displayName="Nav";const ZC=Object.assign(bx,{Item:vx});var Il;function vb(n){if((!Il&&Il!==0||n)&&Bo){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),Il=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return Il}function KC(){return m.useState(null)}function tf(n){n===void 0&&(n=Mo());try{var a=n.activeElement;return!a||!a.nodeName?null:a}catch{return n.body}}function QC(n){const a=m.useRef(n);return a.current=n,a}function WC(n){const a=QC(n);m.useEffect(()=>()=>a.current(),[])}function eA(n=document){const a=n.defaultView;return Math.abs(a.innerWidth-n.documentElement.clientWidth)}const bb=Uo("modal-open");class sm{constructor({ownerDocument:a,handleContainerOverflow:o=!0,isRTL:l=!1}={}){this.handleContainerOverflow=o,this.isRTL=l,this.modals=[],this.ownerDocument=a}getScrollbarWidth(){return eA(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(a){}removeModalAttributes(a){}setContainerStyle(a){const o={overflow:"hidden"},l=this.isRTL?"paddingLeft":"paddingRight",u=this.getElement();a.style={overflow:u.style.overflow,[l]:u.style[l]},a.scrollBarWidth&&(o[l]=`${parseInt(ia(u,l)||"0",10)+a.scrollBarWidth}px`),u.setAttribute(bb,""),ia(u,o)}reset(){[...this.modals].forEach(a=>this.remove(a))}removeContainerStyle(a){const o=this.getElement();o.removeAttribute(bb),Object.assign(o.style,a.style)}add(a){let o=this.modals.indexOf(a);return o!==-1||(o=this.modals.length,this.modals.push(a),this.setModalAttributes(a),o!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),o}remove(a){const o=this.modals.indexOf(a);o!==-1&&(this.modals.splice(o,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(a))}isTopModal(a){return!!this.modals.length&&this.modals[this.modals.length-1]===a}}const nf=(n,a)=>Bo?n==null?(a||Mo()).body:(typeof n=="function"&&(n=n()),n&&"current"in n&&(n=n.current),n&&("nodeType"in n||n.getBoundingClientRect)?n:null):null;function Sf(n,a){const o=yc(),[l,u]=m.useState(()=>nf(n,o?.document));if(!l){const d=nf(n);d&&u(d)}return m.useEffect(()=>{},[a,l]),m.useEffect(()=>{const d=nf(n);d!==l&&u(d)},[n,l]),l}function im({children:n,in:a,onExited:o,mountOnEnter:l,unmountOnExit:u}){const d=m.useRef(null),p=m.useRef(a),g=gt(o);m.useEffect(()=>{a?p.current=!0:g(d.current)},[a,g]);const h=pi(d,jr(n)),v=m.cloneElement(n,{ref:h});return a?v:u||!p.current&&l?null:v}const tA=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function nA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function aA(n){let{onEnter:a,onEntering:o,onEntered:l,onExit:u,onExiting:d,onExited:p,addEndListener:g,children:h}=n,v=nA(n,tA);const b=m.useRef(null),x=pi(b,jr(h)),w=L=>z=>{L&&b.current&&L(b.current,z)},S=m.useCallback(w(a),[a]),C=m.useCallback(w(o),[o]),k=m.useCallback(w(l),[l]),E=m.useCallback(w(u),[u]),O=m.useCallback(w(d),[d]),N=m.useCallback(w(p),[p]),D=m.useCallback(w(g),[g]);return Object.assign({},v,{nodeRef:b},a&&{onEnter:S},o&&{onEntering:C},l&&{onEntered:k},u&&{onExit:E},d&&{onExiting:O},p&&{onExited:N},g&&{addEndListener:D},{children:typeof h=="function"?(L,z)=>h(L,Object.assign({},z,{ref:x})):m.cloneElement(h,{ref:x})})}const rA=["component"];function oA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const sA=m.forwardRef((n,a)=>{let{component:o}=n,l=oA(n,rA);const u=aA(l);return s.jsx(o,Object.assign({ref:a},u))});function iA({in:n,onTransition:a}){const o=m.useRef(null),l=m.useRef(!0),u=gt(a);return Zv(()=>{if(!o.current)return;let d=!1;return u({in:n,element:o.current,initial:l.current,isStale:()=>d}),()=>{d=!0}},[n,u]),Zv(()=>(l.current=!1,()=>{l.current=!0}),[]),o}function lA({children:n,in:a,onExited:o,onEntered:l,transition:u}){const[d,p]=m.useState(!a);a&&d&&p(!1);const g=iA({in:!!a,onTransition:v=>{const b=()=>{v.isStale()||(v.in?l?.(v.element,v.initial):(p(!0),o?.(v.element)))};Promise.resolve(u(v)).then(b,x=>{throw v.in||p(!0),x})}}),h=pi(g,jr(n));return d&&!a?null:m.cloneElement(n,{ref:h})}function Ef(n,a,o){return n?s.jsx(sA,Object.assign({},o,{component:n})):a?s.jsx(lA,Object.assign({},o,{transition:a})):s.jsx(im,Object.assign({},o))}const cA=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function uA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}let af;function dA(n){return af||(af=new sm({ownerDocument:n?.document})),af}function fA(n){const a=yc(),o=n||dA(a),l=m.useRef({dialog:null,backdrop:null});return Object.assign(l.current,{add:()=>o.add(l.current),remove:()=>o.remove(l.current),isTopModal:()=>o.isTopModal(l.current),setDialogRef:m.useCallback(u=>{l.current.dialog=u},[]),setBackdropRef:m.useCallback(u=>{l.current.backdrop=u},[])})}const yx=m.forwardRef((n,a)=>{let{show:o=!1,role:l="dialog",className:u,style:d,children:p,backdrop:g=!0,keyboard:h=!0,onBackdropClick:v,onEscapeKeyDown:b,transition:x,runTransition:w,backdropTransition:S,runBackdropTransition:C,autoFocus:k=!0,enforceFocus:E=!0,restoreFocus:O=!0,restoreFocusOptions:N,renderDialog:D,renderBackdrop:L=ze=>s.jsx("div",Object.assign({},ze)),manager:z,container:_,onShow:M,onHide:R=()=>{},onExit:q,onExited:Q,onExiting:re,onEnter:oe,onEntering:ie,onEntered:J}=n,le=uA(n,cA);const $=yc(),ee=Sf(_),Y=fA(z),V=fy(),A=my(o),[I,ne]=m.useState(!o),te=m.useRef(null);m.useImperativeHandle(a,()=>Y,[Y]),Bo&&!A&&o&&(te.current=tf($?.document)),o&&I&&ne(!1);const se=gt(()=>{if(Y.add(),Bt.current=oa(document,"keydown",we),Pe.current=oa(document,"focus",()=>setTimeout(fe),!0),M&&M(),k){var ze,$n;const ot=tf((ze=($n=Y.dialog)==null?void 0:$n.ownerDocument)!=null?ze:$?.document);Y.dialog&&ot&&!oi(Y.dialog,ot)&&(te.current=ot,Y.dialog.focus())}}),pe=gt(()=>{if(Y.remove(),Bt.current==null||Bt.current(),Pe.current==null||Pe.current(),O){var ze;(ze=te.current)==null||ze.focus==null||ze.focus(N),te.current=null}});m.useEffect(()=>{!o||!ee||se()},[o,ee,se]),m.useEffect(()=>{I&&pe()},[I,pe]),WC(()=>{pe()});const fe=gt(()=>{if(!E||!V()||!Y.isTopModal())return;const ze=tf($?.document);Y.dialog&&ze&&!oi(Y.dialog,ze)&&Y.dialog.focus()}),He=gt(ze=>{ze.target===ze.currentTarget&&(v?.(ze),g===!0&&R())}),we=gt(ze=>{h&&ly(ze)&&Y.isTopModal()&&(b?.(ze),ze.defaultPrevented||R())}),Pe=m.useRef(),Bt=m.useRef(),zt=(...ze)=>{ne(!0),Q?.(...ze)};if(!ee)return null;const Zt=Object.assign({role:l,ref:Y.setDialogRef,"aria-modal":l==="dialog"?!0:void 0},le,{style:d,className:u,tabIndex:-1});let Kt=D?D(Zt):s.jsx("div",Object.assign({},Zt,{children:m.cloneElement(p,{role:"document"})}));Kt=Ef(x,w,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!o,onExit:q,onExiting:re,onExited:zt,onEnter:oe,onEntering:ie,onEntered:J,children:Kt});let Qt=null;return g&&(Qt=L({ref:Y.setBackdropRef,onClick:He}),Qt=Ef(S,C,{in:!!o,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Qt})),s.jsx(s.Fragment,{children:pr.createPortal(s.jsxs(s.Fragment,{children:[Qt,Kt]}),ee)})});yx.displayName="Modal";const xx=Object.assign(yx,{Manager:sm});function Nf(n,a){return n.classList?!!a&&n.classList.contains(a):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+a+" ")!==-1}function mA(n,a){n.classList?n.classList.add(a):Nf(n,a)||(typeof n.className=="string"?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a))}function yb(n,a){return n.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function pA(n,a){n.classList?n.classList.remove(a):typeof n.className=="string"?n.className=yb(n.className,a):n.setAttribute("class",yb(n.className&&n.className.baseVal||"",a))}const go={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class wx extends sm{adjustAndStore(a,o,l){const u=o.style[a];o.dataset[a]=u,ia(o,{[a]:`${parseFloat(ia(o,a))+l}px`})}restore(a,o){const l=o.dataset[a];l!==void 0&&(delete o.dataset[a],ia(o,{[a]:l}))}setContainerStyle(a){super.setContainerStyle(a);const o=this.getElement();if(mA(o,"modal-open"),!a.scrollBarWidth)return;const l=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";aa(o,go.FIXED_CONTENT).forEach(d=>this.adjustAndStore(l,d,a.scrollBarWidth)),aa(o,go.STICKY_CONTENT).forEach(d=>this.adjustAndStore(u,d,-a.scrollBarWidth)),aa(o,go.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(u,d,a.scrollBarWidth))}removeContainerStyle(a){super.removeContainerStyle(a);const o=this.getElement();pA(o,"modal-open");const l=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";aa(o,go.FIXED_CONTENT).forEach(d=>this.restore(l,d)),aa(o,go.STICKY_CONTENT).forEach(d=>this.restore(u,d)),aa(o,go.NAVBAR_TOGGLER).forEach(d=>this.restore(u,d))}}let rf;function jx(n){return rf||(rf=new wx(n)),rf}const Sx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"modal-body"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Sx.displayName="ModalBody";const lm=m.createContext({onHide(){}}),cm=m.forwardRef(({bsPrefix:n,className:a,contentClassName:o,centered:l,size:u,fullscreen:d,children:p,scrollable:g,...h},v)=>{n=ue(n,"modal");const b=`${n}-dialog`,x=typeof d=="string"?`${n}-fullscreen-${d}`:`${n}-fullscreen`;return s.jsx("div",{...h,ref:v,className:ce(b,a,u&&`${n}-${u}`,l&&`${b}-centered`,g&&`${b}-scrollable`,d&&x),children:s.jsx("div",{className:ce(`${n}-content`,o),children:p})})});cm.displayName="ModalDialog";const Ex=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"modal-footer"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Ex.displayName="ModalFooter";const um=m.forwardRef(({closeLabel:n="Close",closeVariant:a,closeButton:o=!1,onHide:l,children:u,...d},p)=>{const g=m.useContext(lm),h=ua(()=>{g?.onHide(),l?.()});return s.jsxs("div",{ref:p,...d,children:[u,o&&s.jsx(hc,{"aria-label":n,variant:a,onClick:h})]})});um.displayName="AbstractModalHeader";const Nx=m.forwardRef(({bsPrefix:n,className:a,closeLabel:o="Close",closeButton:l=!1,...u},d)=>(n=ue(n,"modal-header"),s.jsx(um,{ref:d,...u,className:ce(a,n),closeLabel:o,closeButton:l})));Nx.displayName="ModalHeader";const hA=pc("h4"),Cx=m.forwardRef(({className:n,bsPrefix:a,as:o=hA,...l},u)=>(a=ue(a,"modal-title"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Cx.displayName="ModalTitle";function gA(n){return s.jsx(da,{...n,timeout:null})}function vA(n){return s.jsx(da,{...n,timeout:null})}const Ax=m.forwardRef(({bsPrefix:n,className:a,style:o,dialogClassName:l,contentClassName:u,children:d,dialogAs:p=cm,"data-bs-theme":g,"aria-labelledby":h,"aria-describedby":v,"aria-label":b,show:x=!1,animation:w=!0,backdrop:S=!0,keyboard:C=!0,onEscapeKeyDown:k,onShow:E,onHide:O,container:N,autoFocus:D=!0,enforceFocus:L=!0,restoreFocus:z=!0,restoreFocusOptions:_,onEntered:M,onExit:R,onExiting:q,onEnter:Q,onEntering:re,onExited:oe,backdropClassName:ie,manager:J,...le},$)=>{const[ee,Y]=m.useState({}),[V,A]=m.useState(!1),I=m.useRef(!1),ne=m.useRef(!1),te=m.useRef(null),[se,pe]=KC(),fe=zo($,pe),He=ua(O),we=fc();n=ue(n,"modal");const Pe=m.useMemo(()=>({onHide:He}),[He]);function Bt(){return J||jx({isRTL:we})}function zt(je){if(!Bo)return;const Ye=Bt().getScrollbarWidth()>0,Ct=je.scrollHeight>Mo(je).documentElement.clientHeight;Y({paddingRight:Ye&&!Ct?vb():void 0,paddingLeft:!Ye&&Ct?vb():void 0})}const Zt=ua(()=>{se&&zt(se.dialog)});Sy(()=>{bf(window,"resize",Zt),te.current==null||te.current()});const Kt=()=>{I.current=!0},Qt=je=>{I.current&&se&&je.target===se.dialog&&(ne.current=!0),I.current=!1},ze=()=>{A(!0),te.current=cy(se.dialog,()=>{A(!1)})},$n=je=>{je.target===je.currentTarget&&ze()},ot=je=>{if(S==="static"){$n(je);return}if(ne.current||je.target!==je.currentTarget){ne.current=!1;return}O?.()},Yo=je=>{C?k?.(je):(je.preventDefault(),S==="static"&&ze())},Cr=(je,Ye)=>{je&&zt(je),Q?.(je,Ye)},Wt=je=>{te.current==null||te.current(),R?.(je)},xn=(je,Ye)=>{re?.(je,Ye),Hf(window,"resize",Zt)},Ar=je=>{je&&(je.style.display=""),oe?.(je),bf(window,"resize",Zt)},Ya=m.useCallback(je=>s.jsx("div",{...je,className:ce(`${n}-backdrop`,ie,!w&&"show")}),[w,ie,n]),va={...o,...ee};va.display="block";const Or=je=>s.jsx("div",{role:"dialog",...je,style:va,className:ce(a,n,V&&`${n}-static`,!w&&"show"),onClick:S?ot:void 0,onMouseUp:Qt,"data-bs-theme":g,"aria-label":b,"aria-labelledby":h,"aria-describedby":v,children:s.jsx(p,{...le,onMouseDown:Kt,className:l,contentClassName:u,children:d})});return s.jsx(lm.Provider,{value:Pe,children:s.jsx(xx,{show:x,ref:fe,backdrop:S,container:N,keyboard:!0,autoFocus:D,enforceFocus:L,restoreFocus:z,restoreFocusOptions:_,onEscapeKeyDown:Yo,onShow:E,onHide:O,onEnter:Cr,onEntering:xn,onEntered:M,onExit:Wt,onExiting:q,onExited:Ar,manager:Bt(),transition:w?gA:void 0,backdropTransition:w?vA:void 0,renderBackdrop:Ya,renderDialog:Or})})});Ax.displayName="Modal";const ye=Object.assign(Ax,{Body:Sx,Header:Nx,Title:Cx,Footer:Ex,Dialog:cm,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),dm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"nav-item"),s.jsx(o,{ref:u,className:ce(n,a),...l})));dm.displayName="NavItem";const Sc=m.forwardRef(({bsPrefix:n,className:a,as:o=Ff,active:l,eventKey:u,disabled:d=!1,...p},g)=>{n=ue(n,"nav-link");const[h,v]=gx({key:br(u,p.href),active:l,disabled:d,...p});return s.jsx(o,{...p,...h,ref:g,disabled:d,className:ce(a,n,d&&"disabled",v.isActive&&"active")})});Sc.displayName="NavLink";const Ox=m.forwardRef((n,a)=>{const{as:o="div",bsPrefix:l,variant:u,fill:d=!1,justify:p=!1,navbar:g,navbarScroll:h,className:v,activeKey:b,...x}=dc(n,{activeKey:"onSelect"}),w=ue(l,"nav");let S,C,k=!1;const E=m.useContext(Sr),O=m.useContext(Yf);return E?(S=E.bsPrefix,k=g??!0):O&&({cardHeaderBsPrefix:C}=O),s.jsx(ZC,{as:o,ref:a,activeKey:b,className:ce(v,{[w]:!k,[`${S}-nav`]:k,[`${S}-nav-scroll`]:k&&h,[`${C}-${u}`]:!!C,[`${w}-${u}`]:!!u,[`${w}-fill`]:d,[`${w}-justified`]:p}),...x})});Ox.displayName="Nav";const Jt=Object.assign(Ox,{Item:dm,Link:Sc}),kx=m.forwardRef(({bsPrefix:n,className:a,as:o,...l},u)=>{n=ue(n,"navbar-brand");const d=o||(l.href?"a":"span");return s.jsx(d,{...l,ref:u,className:ce(a,n)})});kx.displayName="NavbarBrand";const Tx=m.forwardRef(({children:n,bsPrefix:a,...o},l)=>{a=ue(a,"navbar-collapse");const u=m.useContext(Sr);return s.jsx(dy,{in:!!(u&&u.expanded),...o,children:s.jsx("div",{ref:l,className:a,children:n})})});Tx.displayName="NavbarCollapse";const Rx=m.forwardRef(({bsPrefix:n,className:a,children:o,label:l="Toggle navigation",as:u="button",onClick:d,...p},g)=>{n=ue(n,"navbar-toggler");const{onToggle:h,expanded:v}=m.useContext(Sr)||{},b=ua(x=>{d&&d(x),h&&h()});return u==="button"&&(p.type="button"),s.jsx(u,{...p,ref:g,onClick:b,"aria-label":l,className:ce(a,n,!v&&"collapsed"),children:o||s.jsx("span",{className:`${n}-icon`})})});Rx.displayName="NavbarToggle";const Cf=new WeakMap,xb=(n,a)=>{if(!n||!a)return;const o=Cf.get(a)||new Map;Cf.set(a,o);let l=o.get(n);return l||(l=a.matchMedia(n),l.refCount=0,o.set(l.media,l)),l};function bA(n,a=typeof window>"u"?void 0:window){const o=xb(n,a),[l,u]=m.useState(()=>o?o.matches:!1);return am(()=>{let d=xb(n,a);if(!d)return u(!1);let p=Cf.get(a);const g=()=>{u(d.matches)};return d.refCount++,d.addListener(g),g(),()=>{d.removeListener(g),d.refCount--,d.refCount<=0&&p?.delete(d.media),d=void 0}},[n]),l}function yA(n){const a=Object.keys(n);function o(g,h){return g===h?h:g?`${g} and ${h}`:h}function l(g){return a[Math.min(a.indexOf(g)+1,a.length-1)]}function u(g){const h=l(g);let v=n[h];return typeof v=="number"?v=`${v-.2}px`:v=`calc(${v} - 0.2px)`,`(max-width: ${v})`}function d(g){let h=n[g];return typeof h=="number"&&(h=`${h}px`),`(min-width: ${h})`}function p(g,h,v){let b;typeof g=="object"?(b=g,v=h,h=!0):(h=h||!0,b={[g]:h});let x=m.useMemo(()=>Object.entries(b).reduce((w,[S,C])=>((C==="up"||C===!0)&&(w=o(w,d(S))),(C==="down"||C===!0)&&(w=o(w,u(S))),w),""),[JSON.stringify(b)]);return bA(x,v)}return p}const xA=yA({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Dx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"offcanvas-body"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Dx.displayName="OffcanvasBody";const wA={[fn]:"show",[ra]:"show"},Lx=m.forwardRef(({bsPrefix:n,className:a,children:o,in:l=!1,mountOnEnter:u=!1,unmountOnExit:d=!1,appear:p=!1,...g},h)=>(n=ue(n,"offcanvas"),s.jsx(mc,{ref:h,addEndListener:Gf,in:l,mountOnEnter:u,unmountOnExit:d,appear:p,...g,childRef:jr(o),children:(v,b)=>m.cloneElement(o,{...b,className:ce(a,o.props.className,(v===fn||v===Eo)&&`${n}-toggling`,wA[v])})})));Lx.displayName="OffcanvasToggling";const Mx=m.forwardRef(({bsPrefix:n,className:a,closeLabel:o="Close",closeButton:l=!1,...u},d)=>(n=ue(n,"offcanvas-header"),s.jsx(um,{ref:d,...u,className:ce(a,n),closeLabel:o,closeButton:l})));Mx.displayName="OffcanvasHeader";const jA=pc("h5"),Bx=m.forwardRef(({className:n,bsPrefix:a,as:o=jA,...l},u)=>(a=ue(a,"offcanvas-title"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Bx.displayName="OffcanvasTitle";function SA(n){return s.jsx(Lx,{...n})}function EA(n){return s.jsx(da,{...n})}const zx=m.forwardRef(({bsPrefix:n,className:a,children:o,"aria-labelledby":l,placement:u="start",responsive:d,show:p=!1,backdrop:g=!0,keyboard:h=!0,scroll:v=!1,onEscapeKeyDown:b,onShow:x,onHide:w,container:S,autoFocus:C=!0,enforceFocus:k=!0,restoreFocus:E=!0,restoreFocusOptions:O,onEntered:N,onExit:D,onExiting:L,onEnter:z,onEntering:_,onExited:M,backdropClassName:R,manager:q,renderStaticNode:Q=!1,...re},oe)=>{const ie=m.useRef();n=ue(n,"offcanvas");const[J,le]=m.useState(!1),$=ua(w),ee=xA(d||"xs","up");m.useEffect(()=>{le(d?p&&!ee:p)},[p,d,ee]);const Y=m.useMemo(()=>({onHide:$}),[$]);function V(){return q||(v?(ie.current||(ie.current=new wx({handleContainerOverflow:!1})),ie.current):jx())}const A=(se,...pe)=>{se&&(se.style.visibility="visible"),z?.(se,...pe)},I=(se,...pe)=>{se&&(se.style.visibility=""),M?.(...pe)},ne=m.useCallback(se=>s.jsx("div",{...se,className:ce(`${n}-backdrop`,R)}),[R,n]),te=se=>s.jsx("div",{...se,...re,className:ce(a,d?`${n}-${d}`:n,`${n}-${u}`),"aria-labelledby":l,children:o});return s.jsxs(s.Fragment,{children:[!J&&(d||Q)&&te({}),s.jsx(lm.Provider,{value:Y,children:s.jsx(xx,{show:J,ref:oe,backdrop:g,container:S,keyboard:h,autoFocus:C,enforceFocus:k&&!v,restoreFocus:E,restoreFocusOptions:O,onEscapeKeyDown:b,onShow:x,onHide:$,onEnter:A,onEntering:_,onEntered:N,onExit:D,onExiting:L,onExited:I,manager:V(),transition:SA,backdropTransition:EA,renderBackdrop:ne,renderDialog:te})})]})});zx.displayName="Offcanvas";const Ha=Object.assign(zx,{Body:Dx,Header:Mx,Title:Bx}),_x=m.forwardRef(({onHide:n,...a},o)=>{const l=m.useContext(Sr),u=ua(()=>{l==null||l.onToggle==null||l.onToggle(),n?.()});return s.jsx(Ha,{ref:o,show:!!(l!=null&&l.expanded),...a,renderStaticNode:!0,onHide:u})});_x.displayName="NavbarOffcanvas";const Ux=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},u)=>(a=ue(a,"navbar-text"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Ux.displayName="NavbarText";const Ix=m.forwardRef((n,a)=>{const{bsPrefix:o,expand:l=!0,variant:u="light",bg:d,fixed:p,sticky:g,className:h,as:v="nav",expanded:b,onToggle:x,onSelect:w,collapseOnSelect:S=!1,...C}=dc(n,{expanded:"onToggle"}),k=ue(o,"navbar"),E=m.useCallback((...D)=>{w?.(...D),S&&b&&x?.(!1)},[w,S,b,x]);C.role===void 0&&v!=="nav"&&(C.role="navigation");let O=`${k}-expand`;typeof l=="string"&&(O=`${O}-${l}`);const N=m.useMemo(()=>({onToggle:()=>x?.(!b),bsPrefix:k,expanded:!!b,expand:l}),[k,b,l,x]);return s.jsx(Sr.Provider,{value:N,children:s.jsx(Bn.Provider,{value:E,children:s.jsx(v,{ref:a,...C,className:ce(h,k,l&&O,u&&`${k}-${u}`,d&&`bg-${d}`,g&&`sticky-${g}`,p&&`fixed-${p}`)})})})});Ix.displayName="Navbar";const Pl=Object.assign(Ix,{Brand:kx,Collapse:Tx,Offcanvas:_x,Text:Ux,Toggle:Rx}),Px=m.forwardRef(({id:n,title:a,children:o,bsPrefix:l,className:u,rootCloseEvent:d,menuRole:p,disabled:g,active:h,renderMenuOnMount:v,menuVariant:b,...x},w)=>{const S=ue(void 0,"nav-item");return s.jsxs(mn,{ref:w,...x,className:ce(u,S),children:[s.jsx(mn.Toggle,{id:n,eventKey:null,active:h,disabled:g,childBsPrefix:l,as:Sc,children:a}),s.jsx(mn.Menu,{role:p,renderOnMount:v,rootCloseEvent:d,variant:b,children:o})]})});Px.displayName="NavDropdown";const un=Object.assign(Px,{Item:mn.Item,ItemText:mn.ItemText,Divider:mn.Divider,Header:mn.Header}),NA=()=>{};function CA(n,a,{disabled:o,clickTrigger:l}={}){const u=a||NA;Uy(n,u,{disabled:o,clickTrigger:l});const d=gt(p=>{ly(p)&&u(p)});m.useEffect(()=>{if(o||n==null)return;const p=Mo(Fl(n));let g=(p.defaultView||window).event;const h=oa(p,"keyup",v=>{if(v===g){g=void 0;return}d(v)});return()=>{h()}},[n,o,d])}const $x=m.forwardRef((n,a)=>{const{flip:o,offset:l,placement:u,containerPadding:d,popperConfig:p={},transition:g,runTransition:h}=n,[v,b]=yf(),[x,w]=yf(),S=pi(b,a),C=Sf(n.container),k=Sf(n.target),[E,O]=m.useState(!n.show),N=_y(k,v,Iy({placement:u,enableEvents:!!n.show,containerPadding:d||5,flip:o,offset:l,arrowElement:x,popperConfig:p}));n.show&&E&&O(!1);const D=(...re)=>{O(!0),n.onExited&&n.onExited(...re)},L=n.show||!E;if(CA(v,n.onHide,{disabled:!n.rootClose||n.rootCloseDisabled,clickTrigger:n.rootCloseEvent}),!L)return null;const{onExit:z,onExiting:_,onEnter:M,onEntering:R,onEntered:q}=n;let Q=n.children(Object.assign({},N.attributes.popper,{style:N.styles.popper,ref:S}),{popper:N,placement:u,show:!!n.show,arrowProps:Object.assign({},N.attributes.arrow,{style:N.styles.arrow,ref:w})});return Q=Ef(g,h,{in:!!n.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Q,onExit:z,onExiting:_,onExited:D,onEnter:M,onEntering:R,onEntered:q}),C?pr.createPortal(Q,C):null});$x.displayName="Overlay";const Hx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"popover-header"),s.jsx(o,{ref:u,className:ce(n,a),...l})));Hx.displayName="PopoverHeader";const fm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"popover-body"),s.jsx(o,{ref:u,className:ce(n,a),...l})));fm.displayName="PopoverBody";function Gx(n,a){let o=n;return n==="left"?o=a?"end":"start":n==="right"&&(o=a?"start":"end"),o}function qx(n="absolute"){return{position:n,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const Jx=m.forwardRef(({bsPrefix:n,placement:a="right",className:o,style:l,children:u,body:d,arrowProps:p,hasDoneInitialMeasure:g,popper:h,show:v,...b},x)=>{const w=ue(n,"popover"),S=fc(),[C]=a?.split("-")||[],k=Gx(C,S);let E=l;return v&&!g&&(E={...l,...qx(h?.strategy)}),s.jsxs("div",{ref:x,role:"tooltip",style:E,"x-placement":C,className:ce(o,w,C&&`bs-popover-${k}`),...b,children:[s.jsx("div",{className:"popover-arrow",...p}),d?s.jsx(fm,{children:u}):u]})});Jx.displayName="Popover";const AA=Object.assign(Jx,{Header:Hx,Body:fm,POPPER_OFFSET:[0,8]}),Fx=m.forwardRef(({bsPrefix:n,placement:a="right",className:o,style:l,children:u,arrowProps:d,hasDoneInitialMeasure:p,popper:g,show:h,...v},b)=>{n=ue(n,"tooltip");const x=fc(),[w]=a?.split("-")||[],S=Gx(w,x);let C=l;return h&&!p&&(C={...l,...qx(g?.strategy)}),s.jsxs("div",{ref:b,style:C,role:"tooltip","x-placement":w,className:ce(o,n,`bs-tooltip-${S}`),...v,children:[s.jsx("div",{className:"tooltip-arrow",...d}),s.jsx("div",{className:`${n}-inner`,children:u})]})});Fx.displayName="Tooltip";const vo=Object.assign(Fx,{TOOLTIP_OFFSET:[0,6]});function OA(n){const a=m.useRef(null),o=ue(void 0,"popover"),l=ue(void 0,"tooltip"),u=m.useMemo(()=>({name:"offset",options:{offset:()=>{if(n)return n;if(a.current){if(Nf(a.current,o))return AA.POPPER_OFFSET;if(Nf(a.current,l))return vo.TOOLTIP_OFFSET}return[0,0]}}}),[n,o,l]);return[a,[u]]}function kA(n,a){const{ref:o}=n,{ref:l}=a;n.ref=o.__wrapped||(o.__wrapped=u=>o(Yl(u))),a.ref=l.__wrapped||(l.__wrapped=u=>l(Yl(u)))}const Vx=m.forwardRef(({children:n,transition:a=da,popperConfig:o={},rootClose:l=!1,placement:u="top",show:d=!1,...p},g)=>{const h=m.useRef({}),[v,b]=m.useState(null),[x,w]=OA(p.offset),S=zo(g,x),C=a===!0?da:a||void 0,k=ua(E=>{b(E),o==null||o.onFirstUpdate==null||o.onFirstUpdate(E)});return am(()=>{v&&p.target&&(h.current.scheduleUpdate==null||h.current.scheduleUpdate())},[v,p.target]),m.useEffect(()=>{d||b(null)},[d]),s.jsx($x,{...p,ref:S,popperConfig:{...o,modifiers:w.concat(o.modifiers||[]),onFirstUpdate:k},transition:C,rootClose:l,placement:u,show:d,children:(E,{arrowProps:O,popper:N,show:D})=>{var L;kA(E,O);const z=N?.placement,_=Object.assign(h.current,{state:N?.state,scheduleUpdate:N?.update,placement:z,outOfBoundaries:(N==null||(L=N.state)==null||(L=L.modifiersData.hide)==null?void 0:L.isReferenceHidden)||!1,strategy:o.strategy}),M=!!v;return typeof n=="function"?n({...E,placement:z,show:D,...!a&&D&&{className:"show"},popper:_,arrowProps:O,hasDoneInitialMeasure:M}):m.cloneElement(n,{...E,placement:z,arrowProps:O,popper:_,hasDoneInitialMeasure:M,className:ce(n.props.className,!a&&D&&"show"),style:{...n.props.style,...E.style}})}})});Vx.displayName="Overlay";function TA(n){return n&&typeof n=="object"?n:{show:n,hide:n}}function wb(n,a,o){const[l]=a,u=l.currentTarget,d=l.relatedTarget||l.nativeEvent[o];(!d||d!==u)&&!oi(u,d)&&n(...a)}Be.oneOf(["click","hover","focus"]);const Zs=({trigger:n=["hover","focus"],overlay:a,children:o,popperConfig:l={},show:u,defaultShow:d=!1,onToggle:p,delay:g,placement:h,flip:v=h&&h.indexOf("auto")!==-1,...b})=>{const x=m.useRef(null),w=zo(x,jr(o)),S=Ny(),C=m.useRef(""),[k,E]=ry(u,d,p),O=TA(g),{onFocus:N,onBlur:D,onClick:L}=typeof o!="function"?m.Children.only(o).props:{},z=le=>{w(Yl(le))},_=m.useCallback(()=>{if(S.clear(),C.current="show",!O.show){E(!0);return}S.set(()=>{C.current==="show"&&E(!0)},O.show)},[O.show,E,S]),M=m.useCallback(()=>{if(S.clear(),C.current="hide",!O.hide){E(!1);return}S.set(()=>{C.current==="hide"&&E(!1)},O.hide)},[O.hide,E,S]),R=m.useCallback((...le)=>{_(),N?.(...le)},[_,N]),q=m.useCallback((...le)=>{M(),D?.(...le)},[M,D]),Q=m.useCallback((...le)=>{E(!k),L?.(...le)},[L,E,k]),re=m.useCallback((...le)=>{wb(_,le,"fromElement")},[_]),oe=m.useCallback((...le)=>{wb(M,le,"toElement")},[M]),ie=n==null?[]:[].concat(n),J={ref:z};return ie.indexOf("click")!==-1&&(J.onClick=Q),ie.indexOf("focus")!==-1&&(J.onFocus=R,J.onBlur=q),ie.indexOf("hover")!==-1&&(J.onMouseOver=re,J.onMouseOut=oe),s.jsxs(s.Fragment,{children:[typeof o=="function"?o(J):m.cloneElement(o,J),s.jsx(Vx,{...b,show:k,onHide:M,flip:v,placement:h,popperConfig:l,target:x.current,children:a})]})},yr=m.forwardRef(({bsPrefix:n,className:a,as:o="div",...l},u)=>{const d=ue(n,"row"),p=oy(),g=sy(),h=`${d}-cols`,v=[];return p.forEach(b=>{const x=l[b];delete l[b];let w;x!=null&&typeof x=="object"?{cols:w}=x:w=x;const S=b!==g?`-${b}`:"";w!=null&&v.push(`${h}${S}-${w}`)}),s.jsx(o,{ref:u,...l,className:ce(a,d,...v)})});yr.displayName="Row";const St=m.forwardRef(({bsPrefix:n,variant:a,animation:o="border",size:l,as:u="div",className:d,...p},g)=>{n=ue(n,"spinner");const h=`${n}-${o}`;return s.jsx(u,{ref:g,...p,className:ce(d,h,l&&`${h}-${l}`,a&&`text-${a}`)})});St.displayName="Spinner";const RA=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],DA=["activeKey","getControlledId","getControllerId"],LA=["as"];function Af(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Yx(n){let{active:a,eventKey:o,mountOnEnter:l,transition:u,unmountOnExit:d,role:p="tabpanel",onEnter:g,onEntering:h,onEntered:v,onExit:b,onExiting:x,onExited:w}=n,S=Af(n,RA);const C=m.useContext(Io);if(!C)return[Object.assign({},S,{role:p}),{eventKey:o,isActive:a,mountOnEnter:l,transition:u,unmountOnExit:d,onEnter:g,onEntering:h,onEntered:v,onExit:b,onExiting:x,onExited:w}];const{activeKey:k,getControlledId:E,getControllerId:O}=C,N=Af(C,DA),D=br(o);return[Object.assign({},S,{role:p,id:E(o),"aria-labelledby":O(o)}),{eventKey:o,isActive:a==null&&D!=null?br(k)===D:a,transition:u||N.transition,mountOnEnter:l??N.mountOnEnter,unmountOnExit:d??N.unmountOnExit,onEnter:g,onEntering:h,onEntered:v,onExit:b,onExiting:x,onExited:w}]}const Xx=m.forwardRef((n,a)=>{let{as:o="div"}=n,l=Af(n,LA);const[u,{isActive:d,onEnter:p,onEntering:g,onEntered:h,onExit:v,onExiting:b,onExited:x,mountOnEnter:w,unmountOnExit:S,transition:C=im}]=Yx(l);return s.jsx(Io.Provider,{value:null,children:s.jsx(Bn.Provider,{value:null,children:s.jsx(C,{in:d,onEnter:p,onEntering:g,onEntered:h,onExit:v,onExiting:b,onExited:x,mountOnEnter:w,unmountOnExit:S,children:s.jsx(o,Object.assign({},u,{ref:a,hidden:!d,"aria-hidden":!d}))})})})});Xx.displayName="TabPanel";const mm=n=>{const{id:a,generateChildId:o,onSelect:l,activeKey:u,defaultActiveKey:d,transition:p,mountOnEnter:g,unmountOnExit:h,children:v}=n,[b,x]=Cy(u,d,l),w=qy(a),S=m.useMemo(()=>o||((k,E)=>w?`${w}-${E}-${k}`:null),[w,o]),C=m.useMemo(()=>({onSelect:x,activeKey:b,transition:p,mountOnEnter:g||!1,unmountOnExit:h||!1,getControlledId:k=>S(k,"tabpane"),getControllerId:k=>S(k,"tab")}),[x,b,p,g,h,S]);return s.jsx(Io.Provider,{value:C,children:s.jsx(Bn.Provider,{value:x||null,children:v})})};mm.Panel=Xx;function pm(n){return typeof n=="boolean"?n?da:im:n}const Zx=({transition:n,...a})=>s.jsx(mm,{...a,transition:pm(n)});Zx.displayName="TabContainer";const hm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"tab-content"),s.jsx(o,{ref:u,className:ce(n,a),...l})));hm.displayName="TabContent";const gm=m.forwardRef(({bsPrefix:n,transition:a,...o},l)=>{const[{className:u,as:d="div",...p},{isActive:g,onEnter:h,onEntering:v,onEntered:b,onExit:x,onExiting:w,onExited:S,mountOnEnter:C,unmountOnExit:k,transition:E=da}]=Yx({...o,transition:pm(a)}),O=ue(n,"tab-pane");return s.jsx(Io.Provider,{value:null,children:s.jsx(Bn.Provider,{value:null,children:s.jsx(E,{in:g,onEnter:h,onEntering:v,onEntered:b,onExit:x,onExiting:w,onExited:S,mountOnEnter:C,unmountOnExit:k,children:s.jsx(d,{...p,ref:l,className:ce(u,O,g&&"active")})})})})});gm.displayName="TabPane";const MA={eventKey:Be.oneOfType([Be.string,Be.number]),title:Be.node.isRequired,disabled:Be.bool,tabClassName:Be.string,tabAttrs:Be.object},Kx=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};Kx.propTypes=MA;const xo=Object.assign(Kx,{Container:Zx,Content:hm,Pane:gm}),hi=m.forwardRef(({bsPrefix:n,className:a,striped:o,bordered:l,borderless:u,hover:d,size:p,variant:g,responsive:h,...v},b)=>{const x=ue(n,"table"),w=ce(a,x,g&&`${x}-${g}`,p&&`${x}-${p}`,o&&`${x}-${typeof o=="string"?`striped-${o}`:"striped"}`,l&&`${x}-bordered`,u&&`${x}-borderless`,d&&`${x}-hover`),S=s.jsx("table",{...v,className:w,ref:b});if(h){let C=`${x}-responsive`;return typeof h=="string"&&(C=`${C}-${h}`),s.jsx("div",{className:C,children:S})}return S});hi.displayName="Table";function BA(n){let a;return t2(n,o=>{a==null&&(a=o.props.eventKey)}),a}function zA(n){const{title:a,eventKey:o,disabled:l,tabClassName:u,tabAttrs:d,id:p}=n.props;return a==null?null:s.jsx(dm,{as:"li",role:"presentation",children:s.jsx(Sc,{as:"button",type:"button",eventKey:o,disabled:l,id:p,className:u,...d,children:a})})}const vm=n=>{const{id:a,onSelect:o,transition:l,mountOnEnter:u=!1,unmountOnExit:d=!1,variant:p="tabs",children:g,activeKey:h=BA(g),...v}=dc(n,{activeKey:"onSelect"});return s.jsxs(mm,{id:a,activeKey:h,onSelect:o,transition:pm(l),mountOnEnter:u,unmountOnExit:d,children:[s.jsx(Jt,{id:a,...v,role:"tablist",as:"ul",variant:p,children:Kv(g,zA)}),s.jsx(hm,{children:Kv(g,b=>{const x={...b.props};return delete x.title,delete x.disabled,delete x.tabClassName,delete x.tabAttrs,s.jsx(gm,{...x})})})]})};vm.displayName="Tabs";const _A={[fn]:"showing",[Eo]:"showing show"},Qx=m.forwardRef((n,a)=>s.jsx(da,{...n,ref:a,transitionClasses:_A}));Qx.displayName="ToastFade";const Wx=m.createContext({onClose(){}}),ew=m.forwardRef(({bsPrefix:n,closeLabel:a="Close",closeVariant:o,closeButton:l=!0,className:u,children:d,...p},g)=>{n=ue(n,"toast-header");const h=m.useContext(Wx),v=ua(b=>{h==null||h.onClose==null||h.onClose(b)});return s.jsxs("div",{ref:g,...p,className:ce(n,u),children:[d,l&&s.jsx(hc,{"aria-label":a,variant:o,onClick:v,"data-dismiss":"toast"})]})});ew.displayName="ToastHeader";const tw=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"toast-body"),s.jsx(o,{ref:u,className:ce(n,a),...l})));tw.displayName="ToastBody";const nw=m.forwardRef(({bsPrefix:n,className:a,transition:o=Qx,show:l=!0,animation:u=!0,delay:d=5e3,autohide:p=!1,onClose:g,onEntered:h,onExit:v,onExiting:b,onEnter:x,onEntering:w,onExited:S,bg:C,...k},E)=>{n=ue(n,"toast");const O=m.useRef(d),N=m.useRef(g);m.useEffect(()=>{O.current=d,N.current=g},[d,g]);const D=Ny(),L=!!(p&&l),z=m.useCallback(()=>{L&&(N.current==null||N.current())},[L]);m.useEffect(()=>{D.set(z,O.current)},[D,z]);const _=m.useMemo(()=>({onClose:g}),[g]),M=!!(o&&u),R=s.jsx("div",{...k,ref:E,className:ce(n,a,C&&`bg-${C}`,!M&&(l?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return s.jsx(Wx.Provider,{value:_,children:M&&o?s.jsx(o,{in:l,onEnter:x,onEntering:w,onEntered:h,onExit:v,onExiting:b,onExited:S,unmountOnExit:!0,children:R}):R})});nw.displayName="Toast";const wo=Object.assign(nw,{Body:tw,Header:ew}),UA={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},bm=m.forwardRef(({bsPrefix:n,position:a,containerPosition:o,className:l,as:u="div",...d},p)=>(n=ue(n,"toast-container"),s.jsx(u,{ref:p,...d,className:ce(n,a&&UA[a],o&&`position-${o}`,l)})));bm.displayName="ToastContainer";const aw=m.createContext();function IA({children:n}){const[a,o]=m.useState([]),l=m.useCallback((g,h="success",v=3e3,b="Notificación")=>{const x=crypto.randomUUID();o(w=>[...w,{id:x,message:g,variant:h,delay:v,header:b}])},[]),u=g=>{o(h=>h.filter(v=>v.id!==g))},d=g=>{switch(g){case"success":return{color:"#0f5132"};case"danger":return{color:"#842029"};case"warning":return{color:"#664d03"};case"info":return{color:"#055160"};default:return{color:"#212529"}}},p=g=>{switch(g){case"success":case"danger":case"warning":case"info":return"text-white";default:return"text-dark"}};return s.jsxs(aw.Provider,{value:{showToast:l},children:[n,s.jsx(bm,{position:"bottom-end",className:"p-3",style:{zIndex:2e3},children:a.map(g=>s.jsxs(wo,{bg:g.variant,autohide:!0,delay:g.delay,onClose:()=>u(g.id),children:[s.jsx(wo.Header,{closeButton:!0,children:s.jsx("strong",{className:"me-auto",style:d(g.variant),children:g.header})}),s.jsx(wo.Body,{className:p(g.variant),children:g.message})]},g.id))})]})}function Pn(){const n=m.useContext(aw);if(!n)throw new Error("useToast debe usarse dentro de <ToastProvider>");return n}/*!
* sweetalert2 v11.23.0
* Released under the MIT License.
*/function rw(n,a,o){if(typeof n=="function"?n===a:n.has(a))return arguments.length<3?a:o;throw new TypeError("Private element is not present on this object")}function PA(n,a){if(a.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function jb(n,a){return n.get(rw(n,a))}function $A(n,a,o){PA(n,a),a.set(n,o)}function HA(n,a,o){return n.set(rw(n,a),o),o}const GA=100,he={},qA=()=>{he.previousActiveElement instanceof HTMLElement?(he.previousActiveElement.focus(),he.previousActiveElement=null):document.body&&document.body.focus()},JA=n=>new Promise(a=>{if(!n)return a();const o=window.scrollX,l=window.scrollY;he.restoreFocusTimeout=setTimeout(()=>{qA(),a()},GA),window.scrollTo(o,l)}),ow="swal2-",FA=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],X=FA.reduce((n,a)=>(n[a]=ow+a,n),{}),VA=["success","warning","info","question","error"],Ql=VA.reduce((n,a)=>(n[a]=ow+a,n),{}),sw="SweetAlert2:",ym=n=>n.charAt(0).toUpperCase()+n.slice(1),Et=n=>{console.warn(`${sw} ${typeof n=="object"?n.join(" "):n}`)},Er=n=>{console.error(`${sw} ${n}`)},Sb=[],YA=n=>{Sb.includes(n)||(Sb.push(n),Et(n))},iw=(n,a=null)=>{YA(`"${n}" is deprecated and will be removed in the next major release.${a?` Use "${a}" instead.`:""}`)},Ec=n=>typeof n=="function"?n():n,xm=n=>n&&typeof n.toPromise=="function",gi=n=>xm(n)?n.toPromise():Promise.resolve(n),wm=n=>n&&Promise.resolve(n)===n,Nt=()=>document.body.querySelector(`.${X.container}`),vi=n=>{const a=Nt();return a?a.querySelector(n):null},Yt=n=>vi(`.${n}`),Te=()=>Yt(X.popup),Po=()=>Yt(X.icon),XA=()=>Yt(X["icon-content"]),lw=()=>Yt(X.title),jm=()=>Yt(X["html-container"]),cw=()=>Yt(X.image),Sm=()=>Yt(X["progress-steps"]),Nc=()=>Yt(X["validation-message"]),zn=()=>vi(`.${X.actions} .${X.confirm}`),$o=()=>vi(`.${X.actions} .${X.cancel}`),Nr=()=>vi(`.${X.actions} .${X.deny}`),ZA=()=>Yt(X["input-label"]),Ho=()=>vi(`.${X.loader}`),bi=()=>Yt(X.actions),uw=()=>Yt(X.footer),Cc=()=>Yt(X["timer-progress-bar"]),Em=()=>Yt(X.close),KA=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Nm=()=>{const n=Te();if(!n)return[];const a=n.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),o=Array.from(a).sort((d,p)=>{const g=parseInt(d.getAttribute("tabindex")||"0"),h=parseInt(p.getAttribute("tabindex")||"0");return g>h?1:g<h?-1:0}),l=n.querySelectorAll(KA),u=Array.from(l).filter(d=>d.getAttribute("tabindex")!=="-1");return[...new Set(o.concat(u))].filter(d=>Mt(d))},Cm=()=>la(document.body,X.shown)&&!la(document.body,X["toast-shown"])&&!la(document.body,X["no-backdrop"]),Ac=()=>{const n=Te();return n?la(n,X.toast):!1},QA=()=>{const n=Te();return n?n.hasAttribute("data-loading"):!1},Xt=(n,a)=>{if(n.textContent="",a){const l=new DOMParser().parseFromString(a,"text/html"),u=l.querySelector("head");u&&Array.from(u.childNodes).forEach(p=>{n.appendChild(p)});const d=l.querySelector("body");d&&Array.from(d.childNodes).forEach(p=>{p instanceof HTMLVideoElement||p instanceof HTMLAudioElement?n.appendChild(p.cloneNode(!0)):n.appendChild(p)})}},la=(n,a)=>{if(!a)return!1;const o=a.split(/\s+/);for(let l=0;l<o.length;l++)if(!n.classList.contains(o[l]))return!1;return!0},WA=(n,a)=>{Array.from(n.classList).forEach(o=>{!Object.values(X).includes(o)&&!Object.values(Ql).includes(o)&&!Object.values(a.showClass||{}).includes(o)&&n.classList.remove(o)})},Vt=(n,a,o)=>{if(WA(n,a),!a.customClass)return;const l=a.customClass[o];if(l){if(typeof l!="string"&&!l.forEach){Et(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof l}"`);return}De(n,l)}},Oc=(n,a)=>{if(!a)return null;switch(a){case"select":case"textarea":case"file":return n.querySelector(`.${X.popup} > .${X[a]}`);case"checkbox":return n.querySelector(`.${X.popup} > .${X.checkbox} input`);case"radio":return n.querySelector(`.${X.popup} > .${X.radio} input:checked`)||n.querySelector(`.${X.popup} > .${X.radio} input:first-child`);case"range":return n.querySelector(`.${X.popup} > .${X.range} input`);default:return n.querySelector(`.${X.popup} > .${X.input}`)}},dw=n=>{if(n.focus(),n.type!=="file"){const a=n.value;n.value="",n.value=a}},fw=(n,a,o)=>{!n||!a||(typeof a=="string"&&(a=a.split(/\s+/).filter(Boolean)),a.forEach(l=>{Array.isArray(n)?n.forEach(u=>{o?u.classList.add(l):u.classList.remove(l)}):o?n.classList.add(l):n.classList.remove(l)}))},De=(n,a)=>{fw(n,a,!0)},bn=(n,a)=>{fw(n,a,!1)},qa=(n,a)=>{const o=Array.from(n.children);for(let l=0;l<o.length;l++){const u=o[l];if(u instanceof HTMLElement&&la(u,a))return u}},gr=(n,a,o)=>{o===`${parseInt(o)}`&&(o=parseInt(o)),o||parseInt(o)===0?n.style.setProperty(a,typeof o=="number"?`${o}px`:o):n.style.removeProperty(a)},ft=(n,a="flex")=>{n&&(n.style.display=a)},wt=n=>{n&&(n.style.display="none")},Am=(n,a="block")=>{n&&new MutationObserver(()=>{yi(n,n.innerHTML,a)}).observe(n,{childList:!0,subtree:!0})},Eb=(n,a,o,l)=>{const u=n.querySelector(a);u&&u.style.setProperty(o,l)},yi=(n,a,o="flex")=>{a?ft(n,o):wt(n)},Mt=n=>!!(n&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length)),eO=()=>!Mt(zn())&&!Mt(Nr())&&!Mt($o()),Of=n=>n.scrollHeight>n.clientHeight,tO=(n,a)=>{let o=n;for(;o&&o!==a;){if(Of(o))return!0;o=o.parentElement}return!1},mw=n=>{const a=window.getComputedStyle(n),o=parseFloat(a.getPropertyValue("animation-duration")||"0"),l=parseFloat(a.getPropertyValue("transition-duration")||"0");return o>0||l>0},Om=(n,a=!1)=>{const o=Cc();o&&Mt(o)&&(a&&(o.style.transition="none",o.style.width="100%"),setTimeout(()=>{o.style.transition=`width ${n/1e3}s linear`,o.style.width="0%"},10))},nO=()=>{const n=Cc();if(!n)return;const a=parseInt(window.getComputedStyle(n).width);n.style.removeProperty("transition"),n.style.width="100%";const o=parseInt(window.getComputedStyle(n).width),l=a/o*100;n.style.width=`${l}%`},aO=()=>typeof window>"u"||typeof document>"u",rO=`
 <div aria-labelledby="${X.title}" aria-describedby="${X["html-container"]}" class="${X.popup}" tabindex="-1">
   <button type="button" class="${X.close}"></button>
   <ul class="${X["progress-steps"]}"></ul>
   <div class="${X.icon}"></div>
   <img class="${X.image}" />
   <h2 class="${X.title}" id="${X.title}"></h2>
   <div class="${X["html-container"]}" id="${X["html-container"]}"></div>
   <input class="${X.input}" id="${X.input}" />
   <input type="file" class="${X.file}" />
   <div class="${X.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${X.select}" id="${X.select}"></select>
   <div class="${X.radio}"></div>
   <label class="${X.checkbox}">
     <input type="checkbox" id="${X.checkbox}" />
     <span class="${X.label}"></span>
   </label>
   <textarea class="${X.textarea}" id="${X.textarea}"></textarea>
   <div class="${X["validation-message"]}" id="${X["validation-message"]}"></div>
   <div class="${X.actions}">
     <div class="${X.loader}"></div>
     <button type="button" class="${X.confirm}"></button>
     <button type="button" class="${X.deny}"></button>
     <button type="button" class="${X.cancel}"></button>
   </div>
   <div class="${X.footer}"></div>
   <div class="${X["timer-progress-bar-container"]}">
     <div class="${X["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),oO=()=>{const n=Nt();return n?(n.remove(),bn([document.documentElement,document.body],[X["no-backdrop"],X["toast-shown"],X["has-column"]]),!0):!1},mr=()=>{he.currentInstance.resetValidationMessage()},sO=()=>{const n=Te(),a=qa(n,X.input),o=qa(n,X.file),l=n.querySelector(`.${X.range} input`),u=n.querySelector(`.${X.range} output`),d=qa(n,X.select),p=n.querySelector(`.${X.checkbox} input`),g=qa(n,X.textarea);a.oninput=mr,o.onchange=mr,d.onchange=mr,p.onchange=mr,g.oninput=mr,l.oninput=()=>{mr(),u.value=l.value},l.onchange=()=>{mr(),u.value=l.value}},iO=n=>typeof n=="string"?document.querySelector(n):n,lO=n=>{const a=Te();a.setAttribute("role",n.toast?"alert":"dialog"),a.setAttribute("aria-live",n.toast?"polite":"assertive"),n.toast||a.setAttribute("aria-modal","true")},cO=n=>{window.getComputedStyle(n).direction==="rtl"&&De(Nt(),X.rtl)},uO=n=>{const a=oO();if(aO()){Er("SweetAlert2 requires document to initialize");return}const o=document.createElement("div");o.className=X.container,a&&De(o,X["no-transition"]),Xt(o,rO),o.dataset.swal2Theme=n.theme;const l=iO(n.target);l.appendChild(o),n.topLayer&&(o.setAttribute("popover",""),o.showPopover()),lO(n),cO(l),sO()},km=(n,a)=>{n instanceof HTMLElement?a.appendChild(n):typeof n=="object"?dO(n,a):n&&Xt(a,n)},dO=(n,a)=>{n.jquery?fO(a,n):Xt(a,n.toString())},fO=(n,a)=>{if(n.textContent="",0 in a)for(let o=0;o in a;o++)n.appendChild(a[o].cloneNode(!0));else n.appendChild(a.cloneNode(!0))},mO=(n,a)=>{const o=bi(),l=Ho();!o||!l||(!a.showConfirmButton&&!a.showDenyButton&&!a.showCancelButton?wt(o):ft(o),Vt(o,a,"actions"),pO(o,l,a),Xt(l,a.loaderHtml||""),Vt(l,a,"loader"))};function pO(n,a,o){const l=zn(),u=Nr(),d=$o();!l||!u||!d||(sf(l,"confirm",o),sf(u,"deny",o),sf(d,"cancel",o),hO(l,u,d,o),o.reverseButtons&&(o.toast?(n.insertBefore(d,l),n.insertBefore(u,l)):(n.insertBefore(d,a),n.insertBefore(u,a),n.insertBefore(l,a))))}function hO(n,a,o,l){if(!l.buttonsStyling){bn([n,a,o],X.styled);return}De([n,a,o],X.styled),l.confirmButtonColor&&n.style.setProperty("--swal2-confirm-button-background-color",l.confirmButtonColor),l.denyButtonColor&&a.style.setProperty("--swal2-deny-button-background-color",l.denyButtonColor),l.cancelButtonColor&&o.style.setProperty("--swal2-cancel-button-background-color",l.cancelButtonColor),of(n),of(a),of(o)}function of(n){const a=window.getComputedStyle(n);if(a.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const o=a.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");n.style.setProperty("--swal2-action-button-focus-box-shadow",a.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${o}`))}function sf(n,a,o){const l=ym(a);yi(n,o[`show${l}Button`],"inline-block"),Xt(n,o[`${a}ButtonText`]||""),n.setAttribute("aria-label",o[`${a}ButtonAriaLabel`]||""),n.className=X[a],Vt(n,o,`${a}Button`)}const gO=(n,a)=>{const o=Em();o&&(Xt(o,a.closeButtonHtml||""),Vt(o,a,"closeButton"),yi(o,a.showCloseButton),o.setAttribute("aria-label",a.closeButtonAriaLabel||""))},vO=(n,a)=>{const o=Nt();o&&(bO(o,a.backdrop),yO(o,a.position),xO(o,a.grow),Vt(o,a,"container"))};function bO(n,a){typeof a=="string"?n.style.background=a:a||De([document.documentElement,document.body],X["no-backdrop"])}function yO(n,a){a&&(a in X?De(n,X[a]):(Et('The "position" parameter is not valid, defaulting to "center"'),De(n,X.center)))}function xO(n,a){a&&De(n,X[`grow-${a}`])}var qe={innerParams:new WeakMap,domCache:new WeakMap};const wO=["input","file","range","select","radio","checkbox","textarea"],jO=(n,a)=>{const o=Te();if(!o)return;const l=qe.innerParams.get(n),u=!l||a.input!==l.input;wO.forEach(d=>{const p=qa(o,X[d]);p&&(NO(d,a.inputAttributes),p.className=X[d],u&&wt(p))}),a.input&&(u&&SO(a),CO(a))},SO=n=>{if(!n.input)return;if(!tt[n.input]){Er(`Unexpected type of input! Expected ${Object.keys(tt).join(" | ")}, got "${n.input}"`);return}const a=pw(n.input);if(!a)return;const o=tt[n.input](a,n);ft(a),n.inputAutoFocus&&setTimeout(()=>{dw(o)})},EO=n=>{for(let a=0;a<n.attributes.length;a++){const o=n.attributes[a].name;["id","type","value","style"].includes(o)||n.removeAttribute(o)}},NO=(n,a)=>{const o=Te();if(!o)return;const l=Oc(o,n);if(l){EO(l);for(const u in a)l.setAttribute(u,a[u])}},CO=n=>{if(!n.input)return;const a=pw(n.input);a&&Vt(a,n,"input")},Tm=(n,a)=>{!n.placeholder&&a.inputPlaceholder&&(n.placeholder=a.inputPlaceholder)},xi=(n,a,o)=>{if(o.inputLabel){const l=document.createElement("label"),u=X["input-label"];l.setAttribute("for",n.id),l.className=u,typeof o.customClass=="object"&&De(l,o.customClass.inputLabel),l.innerText=o.inputLabel,a.insertAdjacentElement("beforebegin",l)}},pw=n=>{const a=Te();if(a)return qa(a,X[n]||X.input)},Wl=(n,a)=>{["string","number"].includes(typeof a)?n.value=`${a}`:wm(a)||Et(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof a}"`)},tt={};tt.text=tt.email=tt.password=tt.number=tt.tel=tt.url=tt.search=tt.date=tt["datetime-local"]=tt.time=tt.week=tt.month=(n,a)=>(Wl(n,a.inputValue),xi(n,n,a),Tm(n,a),n.type=a.input,n);tt.file=(n,a)=>(xi(n,n,a),Tm(n,a),n);tt.range=(n,a)=>{const o=n.querySelector("input"),l=n.querySelector("output");return Wl(o,a.inputValue),o.type=a.input,Wl(l,a.inputValue),xi(o,n,a),n};tt.select=(n,a)=>{if(n.textContent="",a.inputPlaceholder){const o=document.createElement("option");Xt(o,a.inputPlaceholder),o.value="",o.disabled=!0,o.selected=!0,n.appendChild(o)}return xi(n,n,a),n};tt.radio=n=>(n.textContent="",n);tt.checkbox=(n,a)=>{const o=Oc(Te(),"checkbox");o.value="1",o.checked=!!a.inputValue;const l=n.querySelector("span");return Xt(l,a.inputPlaceholder||a.inputLabel),o};tt.textarea=(n,a)=>{Wl(n,a.inputValue),Tm(n,a),xi(n,n,a);const o=l=>parseInt(window.getComputedStyle(l).marginLeft)+parseInt(window.getComputedStyle(l).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const l=parseInt(window.getComputedStyle(Te()).width),u=()=>{if(!document.body.contains(n))return;const d=n.offsetWidth+o(n);d>l?Te().style.width=`${d}px`:gr(Te(),"width",a.width)};new MutationObserver(u).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const AO=(n,a)=>{const o=jm();o&&(Am(o),Vt(o,a,"htmlContainer"),a.html?(km(a.html,o),ft(o,"block")):a.text?(o.textContent=a.text,ft(o,"block")):wt(o),jO(n,a))},OO=(n,a)=>{const o=uw();o&&(Am(o),yi(o,a.footer,"block"),a.footer&&km(a.footer,o),Vt(o,a,"footer"))},kO=(n,a)=>{const o=qe.innerParams.get(n),l=Po();if(!l)return;if(o&&a.icon===o.icon){Cb(l,a),Nb(l,a);return}if(!a.icon&&!a.iconHtml){wt(l);return}if(a.icon&&Object.keys(Ql).indexOf(a.icon)===-1){Er(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${a.icon}"`),wt(l);return}ft(l),Cb(l,a),Nb(l,a),De(l,a.showClass&&a.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",hw)},Nb=(n,a)=>{for(const[o,l]of Object.entries(Ql))a.icon!==o&&bn(n,l);De(n,a.icon&&Ql[a.icon]),DO(n,a),hw(),Vt(n,a,"icon")},hw=()=>{const n=Te();if(!n)return;const a=window.getComputedStyle(n).getPropertyValue("background-color"),o=n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let l=0;l<o.length;l++)o[l].style.backgroundColor=a},TO=n=>`
  ${n.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${n.animation?'<div class="swal2-success-fix"></div>':""}
  ${n.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,RO=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Cb=(n,a)=>{if(!a.icon&&!a.iconHtml)return;let o=n.innerHTML,l="";a.iconHtml?l=Ab(a.iconHtml):a.icon==="success"?(l=TO(a),o=o.replace(/ style=".*?"/g,"")):a.icon==="error"?l=RO:a.icon&&(l=Ab({question:"?",warning:"!",info:"i"}[a.icon])),o.trim()!==l.trim()&&Xt(n,l)},DO=(n,a)=>{if(a.iconColor){n.style.color=a.iconColor,n.style.borderColor=a.iconColor;for(const o of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Eb(n,o,"background-color",a.iconColor);Eb(n,".swal2-success-ring","border-color",a.iconColor)}},Ab=n=>`<div class="${X["icon-content"]}">${n}</div>`,LO=(n,a)=>{const o=cw();if(o){if(!a.imageUrl){wt(o);return}ft(o,""),o.setAttribute("src",a.imageUrl),o.setAttribute("alt",a.imageAlt||""),gr(o,"width",a.imageWidth),gr(o,"height",a.imageHeight),o.className=X.image,Vt(o,a,"image")}};let Rm=!1,gw=0,vw=0,bw=0,yw=0;const MO=n=>{n.addEventListener("mousedown",ec),document.body.addEventListener("mousemove",tc),n.addEventListener("mouseup",nc),n.addEventListener("touchstart",ec),document.body.addEventListener("touchmove",tc),n.addEventListener("touchend",nc)},BO=n=>{n.removeEventListener("mousedown",ec),document.body.removeEventListener("mousemove",tc),n.removeEventListener("mouseup",nc),n.removeEventListener("touchstart",ec),document.body.removeEventListener("touchmove",tc),n.removeEventListener("touchend",nc)},ec=n=>{const a=Te();if(n.target===a||Po().contains(n.target)){Rm=!0;const o=xw(n);gw=o.clientX,vw=o.clientY,bw=parseInt(a.style.insetInlineStart)||0,yw=parseInt(a.style.insetBlockStart)||0,De(a,"swal2-dragging")}},tc=n=>{const a=Te();if(Rm){let{clientX:o,clientY:l}=xw(n);a.style.insetInlineStart=`${bw+(o-gw)}px`,a.style.insetBlockStart=`${yw+(l-vw)}px`}},nc=()=>{const n=Te();Rm=!1,bn(n,"swal2-dragging")},xw=n=>{let a=0,o=0;return n.type.startsWith("mouse")?(a=n.clientX,o=n.clientY):n.type.startsWith("touch")&&(a=n.touches[0].clientX,o=n.touches[0].clientY),{clientX:a,clientY:o}},zO=(n,a)=>{const o=Nt(),l=Te();if(!(!o||!l)){if(a.toast){gr(o,"width",a.width),l.style.width="100%";const u=Ho();u&&l.insertBefore(u,Po())}else gr(l,"width",a.width);gr(l,"padding",a.padding),a.color&&(l.style.color=a.color),a.background&&(l.style.background=a.background),wt(Nc()),_O(l,a),a.draggable&&!a.toast?(De(l,X.draggable),MO(l)):(bn(l,X.draggable),BO(l))}},_O=(n,a)=>{const o=a.showClass||{};n.className=`${X.popup} ${Mt(n)?o.popup:""}`,a.toast?(De([document.documentElement,document.body],X["toast-shown"]),De(n,X.toast)):De(n,X.modal),Vt(n,a,"popup"),typeof a.customClass=="string"&&De(n,a.customClass),a.icon&&De(n,X[`icon-${a.icon}`])},UO=(n,a)=>{const o=Sm();if(!o)return;const{progressSteps:l,currentProgressStep:u}=a;if(!l||l.length===0||u===void 0){wt(o);return}ft(o),o.textContent="",u>=l.length&&Et("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),l.forEach((d,p)=>{const g=IO(d);if(o.appendChild(g),p===u&&De(g,X["active-progress-step"]),p!==l.length-1){const h=PO(a);o.appendChild(h)}})},IO=n=>{const a=document.createElement("li");return De(a,X["progress-step"]),Xt(a,n),a},PO=n=>{const a=document.createElement("li");return De(a,X["progress-step-line"]),n.progressStepsDistance&&gr(a,"width",n.progressStepsDistance),a},$O=(n,a)=>{const o=lw();o&&(Am(o),yi(o,a.title||a.titleText,"block"),a.title&&km(a.title,o),a.titleText&&(o.innerText=a.titleText),Vt(o,a,"title"))},ww=(n,a)=>{zO(n,a),vO(n,a),UO(n,a),kO(n,a),LO(n,a),$O(n,a),gO(n,a),AO(n,a),mO(n,a),OO(n,a);const o=Te();typeof a.didRender=="function"&&o&&a.didRender(o),he.eventEmitter.emit("didRender",o)},HO=()=>Mt(Te()),jw=()=>{var n;return(n=zn())===null||n===void 0?void 0:n.click()},GO=()=>{var n;return(n=Nr())===null||n===void 0?void 0:n.click()},qO=()=>{var n;return(n=$o())===null||n===void 0?void 0:n.click()},Go=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Sw=n=>{n.keydownTarget&&n.keydownHandlerAdded&&(n.keydownTarget.removeEventListener("keydown",n.keydownHandler,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!1)},JO=(n,a,o)=>{Sw(n),a.toast||(n.keydownHandler=l=>VO(a,l,o),n.keydownTarget=a.keydownListenerCapture?window:Te(),n.keydownListenerCapture=a.keydownListenerCapture,n.keydownTarget.addEventListener("keydown",n.keydownHandler,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!0)},kf=(n,a)=>{var o;const l=Nm();if(l.length){n=n+a,n===-2&&(n=l.length-1),n===l.length?n=0:n===-1&&(n=l.length-1),l[n].focus();return}(o=Te())===null||o===void 0||o.focus()},Ew=["ArrowRight","ArrowDown"],FO=["ArrowLeft","ArrowUp"],VO=(n,a,o)=>{n&&(a.isComposing||a.keyCode===229||(n.stopKeydownPropagation&&a.stopPropagation(),a.key==="Enter"?YO(a,n):a.key==="Tab"?XO(a):[...Ew,...FO].includes(a.key)?ZO(a.key):a.key==="Escape"&&KO(a,n,o)))},YO=(n,a)=>{if(!Ec(a.allowEnterKey))return;const o=Oc(Te(),a.input);if(n.target&&o&&n.target instanceof HTMLElement&&n.target.outerHTML===o.outerHTML){if(["textarea","file"].includes(a.input))return;jw(),n.preventDefault()}},XO=n=>{const a=n.target,o=Nm();let l=-1;for(let u=0;u<o.length;u++)if(a===o[u]){l=u;break}n.shiftKey?kf(l,-1):kf(l,1),n.stopPropagation(),n.preventDefault()},ZO=n=>{const a=bi(),o=zn(),l=Nr(),u=$o();if(!a||!o||!l||!u)return;const d=[o,l,u];if(document.activeElement instanceof HTMLElement&&!d.includes(document.activeElement))return;const p=Ew.includes(n)?"nextElementSibling":"previousElementSibling";let g=document.activeElement;if(g){for(let h=0;h<a.children.length;h++){if(g=g[p],!g)return;if(g instanceof HTMLButtonElement&&Mt(g))break}g instanceof HTMLButtonElement&&g.focus()}},KO=(n,a,o)=>{n.preventDefault(),Ec(a.allowEscapeKey)&&o(Go.esc)};var ko={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const QO=()=>{const n=Nt();Array.from(document.body.children).forEach(o=>{o.contains(n)||(o.hasAttribute("aria-hidden")&&o.setAttribute("data-previous-aria-hidden",o.getAttribute("aria-hidden")||""),o.setAttribute("aria-hidden","true"))})},Nw=()=>{Array.from(document.body.children).forEach(a=>{a.hasAttribute("data-previous-aria-hidden")?(a.setAttribute("aria-hidden",a.getAttribute("data-previous-aria-hidden")||""),a.removeAttribute("data-previous-aria-hidden")):a.removeAttribute("aria-hidden")})},Cw=typeof window<"u"&&!!window.GestureEvent,WO=()=>{if(Cw&&!la(document.body,X.iosfix)){const n=document.body.scrollTop;document.body.style.top=`${n*-1}px`,De(document.body,X.iosfix),e1()}},e1=()=>{const n=Nt();if(!n)return;let a;n.ontouchstart=o=>{a=t1(o)},n.ontouchmove=o=>{a&&(o.preventDefault(),o.stopPropagation())}},t1=n=>{const a=n.target,o=Nt(),l=jm();return!o||!l||n1(n)||a1(n)?!1:a===o||!Of(o)&&a instanceof HTMLElement&&!tO(a,l)&&a.tagName!=="INPUT"&&a.tagName!=="TEXTAREA"&&!(Of(l)&&l.contains(a))},n1=n=>n.touches&&n.touches.length&&n.touches[0].touchType==="stylus",a1=n=>n.touches&&n.touches.length>1,r1=()=>{if(la(document.body,X.iosfix)){const n=parseInt(document.body.style.top,10);bn(document.body,X.iosfix),document.body.style.top="",document.body.scrollTop=n*-1}},o1=()=>{const n=document.createElement("div");n.className=X["scrollbar-measure"],document.body.appendChild(n);const a=n.getBoundingClientRect().width-n.clientWidth;return document.body.removeChild(n),a};let jo=null;const s1=n=>{jo===null&&(document.body.scrollHeight>window.innerHeight||n==="scroll")&&(jo=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${jo+o1()}px`)},i1=()=>{jo!==null&&(document.body.style.paddingRight=`${jo}px`,jo=null)};function Aw(n,a,o,l){Ac()?Ob(n,l):(JA(o).then(()=>Ob(n,l)),Sw(he)),Cw?(a.setAttribute("style","display:none !important"),a.removeAttribute("class"),a.innerHTML=""):a.remove(),Cm()&&(i1(),r1(),Nw()),l1()}function l1(){bn([document.documentElement,document.body],[X.shown,X["height-auto"],X["no-backdrop"],X["toast-shown"]])}function Ja(n){n=u1(n);const a=ko.swalPromiseResolve.get(this),o=c1(this);this.isAwaitingPromise?n.isDismissed||(wi(this),a(n)):o&&a(n)}const c1=n=>{const a=Te();if(!a)return!1;const o=qe.innerParams.get(n);if(!o||la(a,o.hideClass.popup))return!1;bn(a,o.showClass.popup),De(a,o.hideClass.popup);const l=Nt();return bn(l,o.showClass.backdrop),De(l,o.hideClass.backdrop),d1(n,a,o),!0};function Ow(n){const a=ko.swalPromiseReject.get(this);wi(this),a&&a(n)}const wi=n=>{n.isAwaitingPromise&&(delete n.isAwaitingPromise,qe.innerParams.get(n)||n._destroy())},u1=n=>typeof n>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},n),d1=(n,a,o)=>{var l;const u=Nt(),d=mw(a);typeof o.willClose=="function"&&o.willClose(a),(l=he.eventEmitter)===null||l===void 0||l.emit("willClose",a),d?f1(n,a,u,o.returnFocus,o.didClose):Aw(n,u,o.returnFocus,o.didClose)},f1=(n,a,o,l,u)=>{he.swalCloseEventFinishedCallback=Aw.bind(null,n,o,l,u);const d=function(p){if(p.target===a){var g;(g=he.swalCloseEventFinishedCallback)===null||g===void 0||g.call(he),delete he.swalCloseEventFinishedCallback,a.removeEventListener("animationend",d),a.removeEventListener("transitionend",d)}};a.addEventListener("animationend",d),a.addEventListener("transitionend",d)},Ob=(n,a)=>{setTimeout(()=>{var o;typeof a=="function"&&a.bind(n.params)(),(o=he.eventEmitter)===null||o===void 0||o.emit("didClose"),n._destroy&&n._destroy()})},To=n=>{let a=Te();if(a||new ic,a=Te(),!a)return;const o=Ho();Ac()?wt(Po()):m1(a,n),ft(o),a.setAttribute("data-loading","true"),a.setAttribute("aria-busy","true"),a.focus()},m1=(n,a)=>{const o=bi(),l=Ho();!o||!l||(!a&&Mt(zn())&&(a=zn()),ft(o),a&&(wt(a),l.setAttribute("data-button-to-replace",a.className),o.insertBefore(l,a)),De([n,o],X.loading))},p1=(n,a)=>{a.input==="select"||a.input==="radio"?y1(n,a):["text","email","number","tel","textarea"].some(o=>o===a.input)&&(xm(a.inputValue)||wm(a.inputValue))&&(To(zn()),x1(n,a))},h1=(n,a)=>{const o=n.getInput();if(!o)return null;switch(a.input){case"checkbox":return g1(o);case"radio":return v1(o);case"file":return b1(o);default:return a.inputAutoTrim?o.value.trim():o.value}},g1=n=>n.checked?1:0,v1=n=>n.checked?n.value:null,b1=n=>n.files&&n.files.length?n.getAttribute("multiple")!==null?n.files:n.files[0]:null,y1=(n,a)=>{const o=Te();if(!o)return;const l=u=>{a.input==="select"?w1(o,ac(u),a):a.input==="radio"&&j1(o,ac(u),a)};xm(a.inputOptions)||wm(a.inputOptions)?(To(zn()),gi(a.inputOptions).then(u=>{n.hideLoading(),l(u)})):typeof a.inputOptions=="object"?l(a.inputOptions):Er(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof a.inputOptions}`)},x1=(n,a)=>{const o=n.getInput();o&&(wt(o),gi(a.inputValue).then(l=>{o.value=a.input==="number"?`${parseFloat(l)||0}`:`${l}`,ft(o),o.focus(),n.hideLoading()}).catch(l=>{Er(`Error in inputValue promise: ${l}`),o.value="",ft(o),o.focus(),n.hideLoading()}))};function w1(n,a,o){const l=qa(n,X.select);if(!l)return;const u=(d,p,g)=>{const h=document.createElement("option");h.value=g,Xt(h,p),h.selected=kw(g,o.inputValue),d.appendChild(h)};a.forEach(d=>{const p=d[0],g=d[1];if(Array.isArray(g)){const h=document.createElement("optgroup");h.label=p,h.disabled=!1,l.appendChild(h),g.forEach(v=>u(h,v[1],v[0]))}else u(l,g,p)}),l.focus()}function j1(n,a,o){const l=qa(n,X.radio);if(!l)return;a.forEach(d=>{const p=d[0],g=d[1],h=document.createElement("input"),v=document.createElement("label");h.type="radio",h.name=X.radio,h.value=p,kw(p,o.inputValue)&&(h.checked=!0);const b=document.createElement("span");Xt(b,g),b.className=X.label,v.appendChild(h),v.appendChild(b),l.appendChild(v)});const u=l.querySelectorAll("input");u.length&&u[0].focus()}const ac=n=>{const a=[];return n instanceof Map?n.forEach((o,l)=>{let u=o;typeof u=="object"&&(u=ac(u)),a.push([l,u])}):Object.keys(n).forEach(o=>{let l=n[o];typeof l=="object"&&(l=ac(l)),a.push([o,l])}),a},kw=(n,a)=>!!a&&a.toString()===n.toString(),S1=n=>{const a=qe.innerParams.get(n);n.disableButtons(),a.input?Tw(n,"confirm"):Lm(n,!0)},E1=n=>{const a=qe.innerParams.get(n);n.disableButtons(),a.returnInputValueOnDeny?Tw(n,"deny"):Dm(n,!1)},N1=(n,a)=>{n.disableButtons(),a(Go.cancel)},Tw=(n,a)=>{const o=qe.innerParams.get(n);if(!o.input){Er(`The "input" parameter is needed to be set when using returnInputValueOn${ym(a)}`);return}const l=n.getInput(),u=h1(n,o);o.inputValidator?C1(n,u,a):l&&!l.checkValidity()?(n.enableButtons(),n.showValidationMessage(o.validationMessage||l.validationMessage)):a==="deny"?Dm(n,u):Lm(n,u)},C1=(n,a,o)=>{const l=qe.innerParams.get(n);n.disableInput(),Promise.resolve().then(()=>gi(l.inputValidator(a,l.validationMessage))).then(d=>{n.enableButtons(),n.enableInput(),d?n.showValidationMessage(d):o==="deny"?Dm(n,a):Lm(n,a)})},Dm=(n,a)=>{const o=qe.innerParams.get(n||void 0);o.showLoaderOnDeny&&To(Nr()),o.preDeny?(n.isAwaitingPromise=!0,Promise.resolve().then(()=>gi(o.preDeny(a,o.validationMessage))).then(u=>{u===!1?(n.hideLoading(),wi(n)):n.close({isDenied:!0,value:typeof u>"u"?a:u})}).catch(u=>Rw(n||void 0,u))):n.close({isDenied:!0,value:a})},kb=(n,a)=>{n.close({isConfirmed:!0,value:a})},Rw=(n,a)=>{n.rejectPromise(a)},Lm=(n,a)=>{const o=qe.innerParams.get(n||void 0);o.showLoaderOnConfirm&&To(),o.preConfirm?(n.resetValidationMessage(),n.isAwaitingPromise=!0,Promise.resolve().then(()=>gi(o.preConfirm(a,o.validationMessage))).then(u=>{Mt(Nc())||u===!1?(n.hideLoading(),wi(n)):kb(n,typeof u>"u"?a:u)}).catch(u=>Rw(n||void 0,u))):kb(n,a)};function rc(){const n=qe.innerParams.get(this);if(!n)return;const a=qe.domCache.get(this);wt(a.loader),Ac()?n.icon&&ft(Po()):A1(a),bn([a.popup,a.actions],X.loading),a.popup.removeAttribute("aria-busy"),a.popup.removeAttribute("data-loading"),a.confirmButton.disabled=!1,a.denyButton.disabled=!1,a.cancelButton.disabled=!1}const A1=n=>{const a=n.popup.getElementsByClassName(n.loader.getAttribute("data-button-to-replace"));a.length?ft(a[0],"inline-block"):eO()&&wt(n.actions)};function Dw(){const n=qe.innerParams.get(this),a=qe.domCache.get(this);return a?Oc(a.popup,n.input):null}function Lw(n,a,o){const l=qe.domCache.get(n);a.forEach(u=>{l[u].disabled=o})}function Mw(n,a){const o=Te();if(!(!o||!n))if(n.type==="radio"){const l=o.querySelectorAll(`[name="${X.radio}"]`);for(let u=0;u<l.length;u++)l[u].disabled=a}else n.disabled=a}function Bw(){Lw(this,["confirmButton","denyButton","cancelButton"],!1)}function zw(){Lw(this,["confirmButton","denyButton","cancelButton"],!0)}function _w(){Mw(this.getInput(),!1)}function Uw(){Mw(this.getInput(),!0)}function Iw(n){const a=qe.domCache.get(this),o=qe.innerParams.get(this);Xt(a.validationMessage,n),a.validationMessage.className=X["validation-message"],o.customClass&&o.customClass.validationMessage&&De(a.validationMessage,o.customClass.validationMessage),ft(a.validationMessage);const l=this.getInput();l&&(l.setAttribute("aria-invalid","true"),l.setAttribute("aria-describedby",X["validation-message"]),dw(l),De(l,X.inputerror))}function Pw(){const n=qe.domCache.get(this);n.validationMessage&&wt(n.validationMessage);const a=this.getInput();a&&(a.removeAttribute("aria-invalid"),a.removeAttribute("aria-describedby"),bn(a,X.inputerror))}const So={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},O1=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],k1={allowEnterKey:void 0},T1=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],$w=n=>Object.prototype.hasOwnProperty.call(So,n),Hw=n=>O1.indexOf(n)!==-1,Gw=n=>k1[n],R1=n=>{$w(n)||Et(`Unknown parameter "${n}"`)},D1=n=>{T1.includes(n)&&Et(`The parameter "${n}" is incompatible with toasts`)},L1=n=>{const a=Gw(n);a&&iw(n,a)},qw=n=>{n.backdrop===!1&&n.allowOutsideClick&&Et('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),n.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(n.theme)&&Et(`Invalid theme "${n.theme}"`);for(const a in n)R1(a),n.toast&&D1(a),L1(a)};function Jw(n){const a=Nt(),o=Te(),l=qe.innerParams.get(this);if(!o||la(o,l.hideClass.popup)){Et("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const u=M1(n),d=Object.assign({},l,u);qw(d),a.dataset.swal2Theme=d.theme,ww(this,d),qe.innerParams.set(this,d),Object.defineProperties(this,{params:{value:Object.assign({},this.params,n),writable:!1,enumerable:!0}})}const M1=n=>{const a={};return Object.keys(n).forEach(o=>{Hw(o)?a[o]=n[o]:Et(`Invalid parameter to update: ${o}`)}),a};function Fw(){const n=qe.domCache.get(this),a=qe.innerParams.get(this);if(!a){Vw(this);return}n.popup&&he.swalCloseEventFinishedCallback&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback),typeof a.didDestroy=="function"&&a.didDestroy(),he.eventEmitter.emit("didDestroy"),B1(this)}const B1=n=>{Vw(n),delete n.params,delete he.keydownHandler,delete he.keydownTarget,delete he.currentInstance},Vw=n=>{n.isAwaitingPromise?(lf(qe,n),n.isAwaitingPromise=!0):(lf(ko,n),lf(qe,n),delete n.isAwaitingPromise,delete n.disableButtons,delete n.enableButtons,delete n.getInput,delete n.disableInput,delete n.enableInput,delete n.hideLoading,delete n.disableLoading,delete n.showValidationMessage,delete n.resetValidationMessage,delete n.close,delete n.closePopup,delete n.closeModal,delete n.closeToast,delete n.rejectPromise,delete n.update,delete n._destroy)},lf=(n,a)=>{for(const o in n)n[o].delete(a)};var z1=Object.freeze({__proto__:null,_destroy:Fw,close:Ja,closeModal:Ja,closePopup:Ja,closeToast:Ja,disableButtons:zw,disableInput:Uw,disableLoading:rc,enableButtons:Bw,enableInput:_w,getInput:Dw,handleAwaitingPromise:wi,hideLoading:rc,rejectPromise:Ow,resetValidationMessage:Pw,showValidationMessage:Iw,update:Jw});const _1=(n,a,o)=>{n.toast?U1(n,a,o):(P1(a),$1(a),H1(n,a,o))},U1=(n,a,o)=>{a.popup.onclick=()=>{n&&(I1(n)||n.timer||n.input)||o(Go.close)}},I1=n=>!!(n.showConfirmButton||n.showDenyButton||n.showCancelButton||n.showCloseButton);let oc=!1;const P1=n=>{n.popup.onmousedown=()=>{n.container.onmouseup=function(a){n.container.onmouseup=()=>{},a.target===n.container&&(oc=!0)}}},$1=n=>{n.container.onmousedown=a=>{a.target===n.container&&a.preventDefault(),n.popup.onmouseup=function(o){n.popup.onmouseup=()=>{},(o.target===n.popup||o.target instanceof HTMLElement&&n.popup.contains(o.target))&&(oc=!0)}}},H1=(n,a,o)=>{a.container.onclick=l=>{if(oc){oc=!1;return}l.target===a.container&&Ec(n.allowOutsideClick)&&o(Go.backdrop)}},G1=n=>typeof n=="object"&&n.jquery,Tb=n=>n instanceof Element||G1(n),q1=n=>{const a={};return typeof n[0]=="object"&&!Tb(n[0])?Object.assign(a,n[0]):["title","html","icon"].forEach((o,l)=>{const u=n[l];typeof u=="string"||Tb(u)?a[o]=u:u!==void 0&&Er(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof u}`)}),a};function J1(...n){return new this(...n)}function F1(n){class a extends this{_main(l,u){return super._main(l,Object.assign({},n,u))}}return a}const V1=()=>he.timeout&&he.timeout.getTimerLeft(),Yw=()=>{if(he.timeout)return nO(),he.timeout.stop()},Xw=()=>{if(he.timeout){const n=he.timeout.start();return Om(n),n}},Y1=()=>{const n=he.timeout;return n&&(n.running?Yw():Xw())},X1=n=>{if(he.timeout){const a=he.timeout.increase(n);return Om(a,!0),a}},Z1=()=>!!(he.timeout&&he.timeout.isRunning());let Rb=!1;const Tf={};function K1(n="data-swal-template"){Tf[n]=this,Rb||(document.body.addEventListener("click",Q1),Rb=!0)}const Q1=n=>{for(let a=n.target;a&&a!==document;a=a.parentNode)for(const o in Tf){const l=a.getAttribute(o);if(l){Tf[o].fire({template:l});return}}};class W1{constructor(){this.events={}}_getHandlersByEventName(a){return typeof this.events[a]>"u"&&(this.events[a]=[]),this.events[a]}on(a,o){const l=this._getHandlersByEventName(a);l.includes(o)||l.push(o)}once(a,o){const l=(...u)=>{this.removeListener(a,l),o.apply(this,u)};this.on(a,l)}emit(a,...o){this._getHandlersByEventName(a).forEach(l=>{try{l.apply(this,o)}catch(u){console.error(u)}})}removeListener(a,o){const l=this._getHandlersByEventName(a),u=l.indexOf(o);u>-1&&l.splice(u,1)}removeAllListeners(a){this.events[a]!==void 0&&(this.events[a].length=0)}reset(){this.events={}}}he.eventEmitter=new W1;const ek=(n,a)=>{he.eventEmitter.on(n,a)},tk=(n,a)=>{he.eventEmitter.once(n,a)},nk=(n,a)=>{if(!n){he.eventEmitter.reset();return}a?he.eventEmitter.removeListener(n,a):he.eventEmitter.removeAllListeners(n)};var ak=Object.freeze({__proto__:null,argsToParams:q1,bindClickHandler:K1,clickCancel:qO,clickConfirm:jw,clickDeny:GO,enableLoading:To,fire:J1,getActions:bi,getCancelButton:$o,getCloseButton:Em,getConfirmButton:zn,getContainer:Nt,getDenyButton:Nr,getFocusableElements:Nm,getFooter:uw,getHtmlContainer:jm,getIcon:Po,getIconContent:XA,getImage:cw,getInputLabel:ZA,getLoader:Ho,getPopup:Te,getProgressSteps:Sm,getTimerLeft:V1,getTimerProgressBar:Cc,getTitle:lw,getValidationMessage:Nc,increaseTimer:X1,isDeprecatedParameter:Gw,isLoading:QA,isTimerRunning:Z1,isUpdatableParameter:Hw,isValidParameter:$w,isVisible:HO,mixin:F1,off:nk,on:ek,once:tk,resumeTimer:Xw,showLoading:To,stopTimer:Yw,toggleTimer:Y1});class rk{constructor(a,o){this.callback=a,this.remaining=o,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(a){const o=this.running;return o&&this.stop(),this.remaining+=a,o&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Zw=["swal-title","swal-html","swal-footer"],ok=n=>{const a=typeof n.template=="string"?document.querySelector(n.template):n.template;if(!a)return{};const o=a.content;return mk(o),Object.assign(sk(o),ik(o),lk(o),ck(o),uk(o),dk(o),fk(o,Zw))},sk=n=>{const a={};return Array.from(n.querySelectorAll("swal-param")).forEach(l=>{xr(l,["name","value"]);const u=l.getAttribute("name"),d=l.getAttribute("value");!u||!d||(typeof So[u]=="boolean"?a[u]=d!=="false":typeof So[u]=="object"?a[u]=JSON.parse(d):a[u]=d)}),a},ik=n=>{const a={};return Array.from(n.querySelectorAll("swal-function-param")).forEach(l=>{const u=l.getAttribute("name"),d=l.getAttribute("value");!u||!d||(a[u]=new Function(`return ${d}`)())}),a},lk=n=>{const a={};return Array.from(n.querySelectorAll("swal-button")).forEach(l=>{xr(l,["type","color","aria-label"]);const u=l.getAttribute("type");!u||!["confirm","cancel","deny"].includes(u)||(a[`${u}ButtonText`]=l.innerHTML,a[`show${ym(u)}Button`]=!0,l.hasAttribute("color")&&(a[`${u}ButtonColor`]=l.getAttribute("color")),l.hasAttribute("aria-label")&&(a[`${u}ButtonAriaLabel`]=l.getAttribute("aria-label")))}),a},ck=n=>{const a={},o=n.querySelector("swal-image");return o&&(xr(o,["src","width","height","alt"]),o.hasAttribute("src")&&(a.imageUrl=o.getAttribute("src")||void 0),o.hasAttribute("width")&&(a.imageWidth=o.getAttribute("width")||void 0),o.hasAttribute("height")&&(a.imageHeight=o.getAttribute("height")||void 0),o.hasAttribute("alt")&&(a.imageAlt=o.getAttribute("alt")||void 0)),a},uk=n=>{const a={},o=n.querySelector("swal-icon");return o&&(xr(o,["type","color"]),o.hasAttribute("type")&&(a.icon=o.getAttribute("type")),o.hasAttribute("color")&&(a.iconColor=o.getAttribute("color")),a.iconHtml=o.innerHTML),a},dk=n=>{const a={},o=n.querySelector("swal-input");o&&(xr(o,["type","label","placeholder","value"]),a.input=o.getAttribute("type")||"text",o.hasAttribute("label")&&(a.inputLabel=o.getAttribute("label")),o.hasAttribute("placeholder")&&(a.inputPlaceholder=o.getAttribute("placeholder")),o.hasAttribute("value")&&(a.inputValue=o.getAttribute("value")));const l=Array.from(n.querySelectorAll("swal-input-option"));return l.length&&(a.inputOptions={},l.forEach(u=>{xr(u,["value"]);const d=u.getAttribute("value");if(!d)return;const p=u.innerHTML;a.inputOptions[d]=p})),a},fk=(n,a)=>{const o={};for(const l in a){const u=a[l],d=n.querySelector(u);d&&(xr(d,[]),o[u.replace(/^swal-/,"")]=d.innerHTML.trim())}return o},mk=n=>{const a=Zw.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(n.children).forEach(o=>{const l=o.tagName.toLowerCase();a.includes(l)||Et(`Unrecognized element <${l}>`)})},xr=(n,a)=>{Array.from(n.attributes).forEach(o=>{a.indexOf(o.name)===-1&&Et([`Unrecognized attribute "${o.name}" on <${n.tagName.toLowerCase()}>.`,`${a.length?`Allowed attributes are: ${a.join(", ")}`:"To set the value, use HTML within the element."}`])})},Kw=10,pk=n=>{const a=Nt(),o=Te();typeof n.willOpen=="function"&&n.willOpen(o),he.eventEmitter.emit("willOpen",o);const u=window.getComputedStyle(document.body).overflowY;vk(a,o,n),setTimeout(()=>{hk(a,o)},Kw),Cm()&&(gk(a,n.scrollbarPadding,u),QO()),!Ac()&&!he.previousActiveElement&&(he.previousActiveElement=document.activeElement),typeof n.didOpen=="function"&&setTimeout(()=>n.didOpen(o)),he.eventEmitter.emit("didOpen",o),bn(a,X["no-transition"])},sc=n=>{const a=Te();if(n.target!==a)return;const o=Nt();a.removeEventListener("animationend",sc),a.removeEventListener("transitionend",sc),o.style.overflowY="auto"},hk=(n,a)=>{mw(a)?(n.style.overflowY="hidden",a.addEventListener("animationend",sc),a.addEventListener("transitionend",sc)):n.style.overflowY="auto"},gk=(n,a,o)=>{WO(),a&&o!=="hidden"&&s1(o),setTimeout(()=>{n.scrollTop=0})},vk=(n,a,o)=>{De(n,o.showClass.backdrop),o.animation?(a.style.setProperty("opacity","0","important"),ft(a,"grid"),setTimeout(()=>{De(a,o.showClass.popup),a.style.removeProperty("opacity")},Kw)):ft(a,"grid"),De([document.documentElement,document.body],X.shown),o.heightAuto&&o.backdrop&&!o.toast&&De([document.documentElement,document.body],X["height-auto"])};var Db={email:(n,a)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(n)?Promise.resolve():Promise.resolve(a||"Invalid email address"),url:(n,a)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(n)?Promise.resolve():Promise.resolve(a||"Invalid URL")};function bk(n){n.inputValidator||(n.input==="email"&&(n.inputValidator=Db.email),n.input==="url"&&(n.inputValidator=Db.url))}function yk(n){(!n.target||typeof n.target=="string"&&!document.querySelector(n.target)||typeof n.target!="string"&&!n.target.appendChild)&&(Et('Target parameter is not valid, defaulting to "body"'),n.target="body")}function xk(n){bk(n),n.showLoaderOnConfirm&&!n.preConfirm&&Et(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),yk(n),typeof n.title=="string"&&(n.title=n.title.split(`
`).join("<br />")),uO(n)}let Dn;var $l=new WeakMap;class nt{constructor(...a){if($A(this,$l,void 0),typeof window>"u")return;Dn=this;const o=Object.freeze(this.constructor.argsToParams(a));this.params=o,this.isAwaitingPromise=!1,HA($l,this,this._main(Dn.params))}_main(a,o={}){if(qw(Object.assign({},o,a)),he.currentInstance){const d=ko.swalPromiseResolve.get(he.currentInstance),{isAwaitingPromise:p}=he.currentInstance;he.currentInstance._destroy(),p||d({isDismissed:!0}),Cm()&&Nw()}he.currentInstance=Dn;const l=jk(a,o);xk(l),Object.freeze(l),he.timeout&&(he.timeout.stop(),delete he.timeout),clearTimeout(he.restoreFocusTimeout);const u=Sk(Dn);return ww(Dn,l),qe.innerParams.set(Dn,l),wk(Dn,u,l)}then(a){return jb($l,this).then(a)}finally(a){return jb($l,this).finally(a)}}const wk=(n,a,o)=>new Promise((l,u)=>{const d=p=>{n.close({isDismissed:!0,dismiss:p})};ko.swalPromiseResolve.set(n,l),ko.swalPromiseReject.set(n,u),a.confirmButton.onclick=()=>{S1(n)},a.denyButton.onclick=()=>{E1(n)},a.cancelButton.onclick=()=>{N1(n,d)},a.closeButton.onclick=()=>{d(Go.close)},_1(o,a,d),JO(he,o,d),p1(n,o),pk(o),Ek(he,o,d),Nk(a,o),setTimeout(()=>{a.container.scrollTop=0})}),jk=(n,a)=>{const o=ok(n),l=Object.assign({},So,a,o,n);return l.showClass=Object.assign({},So.showClass,l.showClass),l.hideClass=Object.assign({},So.hideClass,l.hideClass),l.animation===!1&&(l.showClass={backdrop:"swal2-noanimation"},l.hideClass={}),l},Sk=n=>{const a={popup:Te(),container:Nt(),actions:bi(),confirmButton:zn(),denyButton:Nr(),cancelButton:$o(),loader:Ho(),closeButton:Em(),validationMessage:Nc(),progressSteps:Sm()};return qe.domCache.set(n,a),a},Ek=(n,a,o)=>{const l=Cc();wt(l),a.timer&&(n.timeout=new rk(()=>{o("timer"),delete n.timeout},a.timer),a.timerProgressBar&&(ft(l),Vt(l,a,"timerProgressBar"),setTimeout(()=>{n.timeout&&n.timeout.running&&Om(a.timer)})))},Nk=(n,a)=>{if(!a.toast){if(!Ec(a.allowEnterKey)){iw("allowEnterKey"),Ok();return}Ck(n)||Ak(n,a)||kf(-1,1)}},Ck=n=>{const a=Array.from(n.popup.querySelectorAll("[autofocus]"));for(const o of a)if(o instanceof HTMLElement&&Mt(o))return o.focus(),!0;return!1},Ak=(n,a)=>a.focusDeny&&Mt(n.denyButton)?(n.denyButton.focus(),!0):a.focusCancel&&Mt(n.cancelButton)?(n.cancelButton.focus(),!0):a.focusConfirm&&Mt(n.confirmButton)?(n.confirmButton.focus(),!0):!1,Ok=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};nt.prototype.disableButtons=zw;nt.prototype.enableButtons=Bw;nt.prototype.getInput=Dw;nt.prototype.disableInput=Uw;nt.prototype.enableInput=_w;nt.prototype.hideLoading=rc;nt.prototype.disableLoading=rc;nt.prototype.showValidationMessage=Iw;nt.prototype.resetValidationMessage=Pw;nt.prototype.close=Ja;nt.prototype.closePopup=Ja;nt.prototype.closeModal=Ja;nt.prototype.closeToast=Ja;nt.prototype.rejectPromise=Ow;nt.prototype.update=Jw;nt.prototype._destroy=Fw;Object.assign(nt,ak);Object.keys(z1).forEach(n=>{nt[n]=function(...a){return Dn&&Dn[n]?Dn[n](...a):null}});nt.DismissReason=Go;nt.version="11.23.0";const ic=nt;ic.default=ic;typeof document<"u"&&(function(n,a){var o=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(o),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=a);else try{o.innerHTML=a}catch{o.innerText=a}})(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');async function Qw({titulo:n="¿Estás seguro?",mensaje:a="Confirma para continuar.",icono:o="warning",textoConfirmar:l="Sí, continuar",textoCancelar:u="Cancelar"}){return(await ic.fire({title:n,text:a,icon:o,showCancelButton:!0,confirmButtonText:l,cancelButtonText:u,reverseButtons:!0,confirmButtonColor:"#0d6efd",cancelButtonColor:"#6c757d",returnFocus:!1,heightAuto:!1,backdrop:!0,didOpen:()=>{const p=document.querySelector('.modal.show[aria-hidden="true"]');p&&p.removeAttribute("aria-hidden")},willClose:()=>{document.querySelector(".modal.show")}})).isConfirmed}const Hl="auth_session";function kk(n){for(n=n.replace(/-/g,"+").replace(/_/g,"/");n.length%4;)n+="=";return atob(n)}const Ww=m.createContext(null);function Tk({children:n}){const{activeBackend:a}=uc(),o=a?.url||null,l=In(),{showToast:u}=Pn(),[d,p]=m.useState(!0),[g,h]=m.useState(null),[v,b]=m.useState(null),[x,w]=m.useState(!1),S=m.useRef(x),C=m.useRef(o);m.useEffect(()=>{C.current=o},[o]);const k=m.useCallback(()=>{localStorage.removeItem(Hl),h(null),b(null),w(!1),window.google?.accounts?.id&&window.google.accounts.id.disableAutoSelect(),window.googleInitialized=!1,window.location.pathname!=="/"&&l("/",{replace:!0}),u("👋 Sesión cerrada correctamente","info",3e3,"Autenticación")},[l,u]),E=m.useCallback(async()=>{const D=C.current;if(!g||!D)return!1;try{const z=await(await fetch(`${D}?accion=ping&token=${g}`)).json();return z&&(z.status==="ok"||z.autorizado)?(b(_=>({..._,correo:z.correo,nombre:z.nombre,picture:z.picture,rol:z.rol,permisos:z.permisos})),w(!0),!0):(x&&console.log(z.mensaje||"⚠️ Tu sesión ha expirado."),k(),!1)}catch(L){return console.log("auth_verify_err:",L.message),u("⚠️ Error de conexión. No se pudo verificar la sesión.","warning",4e3,"Autenticación"),k(),!1}},[g,k,u,x]),O=m.useCallback(async(D,L=()=>{})=>{const z=(M,R="danger")=>{u(M,R,1e4,"Autenticación"),k(),L()},_=C.current;if(!_){if(!await Qw({titulo:"Backend no configurado",mensaje:"No hay un backend activo para realizar la autenticación. Dirígete a la opción «Más», en la parte superior derecha, o al menú hamburguesa y selecciona «Configurar Backend».",textoConfirmar:"✅ Abrir Administración de Backends",textoCancelar:"❌ Cancelar",icono:"info"})){u("❌ Operación cancelada por el usuario","warning",4e3,"Autenticación"),L();return}window.dispatchEvent(new CustomEvent("backend:open-config")),L();return}try{const R=await(await fetch(_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accion:"googleLogin",googleToken:D})})).json();if(!R||R.status!=="ok"||!R.token||!R.user){z(R.mensaje||"❌ Error de autenticación desde el backend");return}u(`👋 Bienvenido ${R.user.nombre}`,"success",3e3,"Autenticación"),h(R.token),b(R.user),w(!0),localStorage.setItem(Hl,JSON.stringify({token:R.token,user:R.user,backendUrl:C.current,timestamp:Date.now()})),L()}catch(M){console.error("Error en login (intercambio de token):",M),z("❌ Error de conexión con el backend")}},[u,k]);m.useEffect(()=>{const D=localStorage.getItem(Hl);if(D)try{const L=JSON.parse(D);L.token&&(h(L.token),b(L.user||null),w(!0))}catch(L){console.error("Error parseando sesión guardada:",L),localStorage.removeItem(Hl)}p(!1)},[]),m.useEffect(()=>{S.current=x},[x]),m.useEffect(()=>{if(!g||!o)return;S.current||E();const D=setInterval(E,300*1e3),L=setInterval(()=>{try{const z=g.split(".")[0],_=kk(z);JSON.parse(_).exp*1e3<Date.now()&&(console.warn("⚠️ Token expirado localmente."),k())}catch(z){console.error("Error verificando expiración local del token propio:",z),k()}},60*1e3);return()=>{clearInterval(D),clearInterval(L)}},[g,o,E,k]),m.useEffect(()=>{function D(L){const z=L?.detail?.message||"⚠️ Tu sesión ha expirado. Inicia sesión nuevamente.";console.warn("🟡 Evento auth:required recibido:",z),x&&k()}return window.addEventListener("auth:required",D),()=>window.removeEventListener("auth:required",D)},[x,k]);const N={authToken:g,user:v,authenticated:x,loading:d,login:O,logout:k,verifyToken:E};return s.jsx(Ww.Provider,{value:N,children:n})}function ji(){return m.useContext(Ww)}const Rk="auth_session";class Mm extends Error{constructor(a="Autenticación requerida"){super(a),this.name="AuthRequiredError"}}function qo(){try{return JSON.parse(localStorage.getItem(Rk))?.token||null}catch{return null}}function Bm(n){console.warn("notifyAuthRequired:",n);try{window.dispatchEvent(new CustomEvent("auth:required",{detail:{message:n}}))}catch(a){console.error("Error dispatching auth:required",a)}}async function e0(n){if(!n.ok)throw new Error(`Error HTTP ${n.status}: ${n.statusText}`);const a=await n.json();if(a.status==="token_invalido"||a.autorizado===!1&&a.motivo==="token_invalido"){const o=a.mensaje||"Token inválido o sesión expirada";throw Bm(o),new Mm(o)}if(a.status==="sin_permiso"){const o=a.mensaje||"No tiene permiso para realizar esta acción";throw console.warn("⛔ Acción bloqueada por permisos:",o),new Error(o)}if(a.status&&!["ok","exists","error_validacion","error_campos","archivo_existente"].includes(a.status))throw new Error(a.mensaje||"Error en respuesta del servidor");return a}async function pn(n,a={}){const o=ty();if(!o)throw new Error("Backend no configurado");const l=qo();if(!l)throw Bm("No hay token en localStorage"),new Mm("No hay token de sesión");const u=new URLSearchParams({accion:n,...a,token:l});try{const d=await fetch(`${o}?${u.toString()}`,{credentials:"omit"});return await e0(d,n)}catch(d){throw console.error(`❌ apiGet [${n}]`,d),d}}async function Qe(n,a={}){const o=ty();if(!o)throw new Error("Backend no configurado");const l=qo();if(!l)throw Bm("No hay token en localStorage"),new Mm("No hay token de sesión");const u={accion:n,...a,token:l};try{const d=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u),credentials:"omit"});if(n==="generarBackupZIP"){if(!d.ok)throw new Error(`Error HTTP ${d.status}: ${d.statusText}`);const p=await d.json();if(p.status==="ok"&&p.base64){const g=atob(p.base64),h=new Array(g.length);for(let x=0;x<g.length;x++)h[x]=g.charCodeAt(x);const v=new Uint8Array(h),b=new Blob([v],{type:p.mimeType||"application/zip"});return{status:"ok",mensaje:p.mensaje,blob:b,nombreArchivo:p.nombreArchivo}}return p}return await e0(d,n)}catch(d){throw console.error(`❌ apiPost [${n}]`,d),d}}const t0=m.createContext(null),cf=new Date().getFullYear()-1;function Dk({children:n}){const{showToast:a}=Pn(),[o,l]=m.useState([]),[u,d]=m.useState(!1),p=m.useCallback(async O=>{try{const N=await pn("obtenerArchivosPorAnio",{anio:O});return N&&N.status==="ok"?N.archivos||[]:N.archivos||[]}catch(N){return console.error("❌ Error al obtener archivos por año:",N.message),[]}finally{}},[]),g=m.useCallback(async()=>{d(!0);try{const O=await pn("obtenerProductos");if(O&&O.status==="ok")return O.data||[]}catch(O){return console.error("❌ Error al obtener productos",O.message),[]}finally{d(!1)}},[]),h=m.useCallback(async()=>{try{d(!0);const[O,N]=await Promise.all([pn("obtenerProductos"),pn("obtenerArchivosPorAnio",{anio:String(cf)})]),D=O?.data||[],L=N?.archivos||[],_=[...D.map(M=>{const R=L.find(q=>String(q.productoId)===String(M.id)&&String(q.anio)===String(cf))||null;return{...M,tieneArchivo:!!R,archivoInfo:R}})].sort((M,R)=>!M.tieneArchivo&&R.tieneArchivo?-1:M.tieneArchivo&&!R.tieneArchivo?1:0);l(_)}catch(O){console.error("❌ Error refreshProductos:",O.message)}finally{d(!1)}},[]),v=m.useCallback(async O=>{d(!0);try{const N=await Qe("actualizarProducto",O);return N.status==="ok"?(await h(),{ok:!0,mensaje:N.mensaje||"Producto actualizado correctamente",datos:N.producto}):{ok:!1,mensaje:N?.mensaje||"No se pudo actualizar el producto"}}catch(N){return console.error("❌ actualizarProducto:",N.message),{ok:!1,mensaje:"Error al actualizar el producto"}}finally{d(!1)}},[h]),b=O=>new Promise((N,D)=>{const L=new FileReader;L.readAsDataURL(O),L.onload=()=>N(L.result.split(",")[1]),L.onerror=z=>D(z)}),x=m.useCallback(async({nombre:O,descripcion:N,entidad:D,tipo:L})=>{d(!0);try{const z=await Qe("agregarProducto",{nombre:O,descripcion:N,entidad:D,tipo:L});return z.status==="ok"?(await h(),{ok:!0,mensaje:"✅ Producto agregado con éxito",data:z}):{ok:!1,mensaje:z.mensaje||"Error al agregar producto",data:z}}catch(z){return console.error("❌ agregarProducto:",z.message),{ok:!1,mensaje:"Error al agregar producto"}}finally{d(!1)}},[h]),w=m.useCallback(async O=>{d(!0);try{const N=await Qe("eliminarProducto",{id:O});return N.status==="ok"?(a("✅ Producto eliminado correctamente","success",3e3,"ProductosContext"),await h()):a(`❌ Error al eliminar: ${N.mensaje||"sin detalle"}`,"error",3e3,"ProductosContext"),{ok:!1,mensaje:N.mensaje||"❌ Error al eliminar producto",data:N}}catch(N){return a("❌ Error eliminando producto","error",3e3,"ProductosContext"),console.error("❌ eliminarProducto:",N.message),{ok:!1,mensaje:"❌ Error al eliminar producto"}}finally{d(!1)}},[h,a]),S=m.useCallback(async(O,N,D,L=!1,z="")=>{if(!D)return{ok:!1,mensaje:"Seleccione un archivo"};d(!0);try{const _=await b(D),M={anio:N,productosId:O,usarExistente:L,nombreProducto:z,archivo:{nombre:D.name,base64:_,tipo:D.type}},R=await Qe("subirArchivoProducto",M);return R.status==="error_validacion"&&(console.log("data",R),a(`${R.message}`,"info",15e3,"ProductosContext")),R.status==="ok"?(await h(),{ok:!0,mensaje:"Archivo subido correctamente",data:R}):R.status==="archivo_existente"?{ok:!1,mensaje:R.message||"⚠️ Ya existe un archivo para este producto"}:R.status==="exists"?{ok:!1,existe:!0,mensaje:R.message||"⚠️ Ya existe un archivo con este nombre. ¿Desea usar el existente?",data:R}:{ok:!1,mensaje:R.mensaje||"Error al subir archivo",data:R}}catch(_){const M=_.message.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor de Google.":"Error al conectar con el servidor.";return a(`❌ ${M}`,"error",15e3,"ProductosContext"),{ok:!1,mensaje:M}}finally{d(!1)}},[h]),C=m.useCallback(async(O,N,D,L=!1,z="",_=!1,M=!1)=>{if(!D)return{ok:!1,mensaje:"Seleccione un archivo para reemplazar"};d(!0);try{const R=await b(D),q={productoId:O,anio:String(N),replaceOnlyThis:L,nombreProducto:z,usarExistente:_,forzarTodosLosAnios:M,archivo:{nombre:D.name,base64:R,tipo:D.type}},Q=await Qe("remplazarArchivoProducto",q);return Q.status==="archivo_usado_en_otros_anios"?{ok:!1,requiereConfirmacion:!0,anios:Q.aniosDetectados||[],mensaje:Q.message||"El archivo también está siendo usado en otros años.",data:Q}:Q.status==="ok"?(await h(),{ok:!0,mensaje:Q.mensaje||"Archivo reemplazado correctamente",data:Q}):Q.status==="exists"?{ok:!1,existe:!0,mensaje:Q.message||"⚠️ Ya existe un archivo con este nombre. ¿Desea usar el existente?",data:Q}:{ok:!1,mensaje:Q.message||"No se pudo reemplazar el archivo",data:Q}}catch(R){const q=R.message?.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor.":"Error al conectar con el servidor.";return a(`❌ ${q}`,"error",15e3,"ProductosContext"),{ok:!1,mensaje:q}}finally{d(!1)}},[h,a]),k=m.useCallback(async O=>{try{const N=await Qe("eliminarRegistroProducto",{id:O});if(N?.status==="ok"){const{eliminado:D}=N;return a(`✅ ${N.mensaje}`,"success",3e3,"ProductoContext"),{ok:!0,eliminado:D}}return a(`❌ ${N?.mensaje||"No se pudo eliminar el registro"}`,"error",3e3,"ProductoContext"),{ok:!1}}catch(N){return console.error(N),a("❌ Error eliminando registro","error",3e3,"ProductoContext"),{ok:!1}}finally{}},[a]),E=m.useCallback(async O=>{try{const N=await Qe("editarRegistroProducto",O);return N?.status==="ok"?(a(`✅ ${N.mensaje}`,"success",3e3,"ProductosContext"),{ok:!0,registro:N.registro}):(a(`❌ ${N?.mensaje||"No se pudo editar el registro"}`,"error",3e3,"ProductosContext"),{ok:!1})}catch(N){return console.error(N),a("❌ Error editando el registro","error",3e3,"ProductosContext"),{ok:!1}}finally{}},[a]);return s.jsx(t0.Provider,{value:{registroProductos:o,getProductos:g,refreshProductos:h,anioAnterior:cf,subirArchivo:S,remplaceArchivo:C,fetchArchivosPorAnio:p,addProducto:x,updateProducto:v,deleteProducto:w,deleteRegistroProducto:k,editRegistroProducto:E,loading:u},children:n})}function Jo(){const n=m.useContext(t0);if(!n)throw new Error("useProductos debe usarse dentro de <ProductosProvider>");return n}const n0=m.createContext();function Lk({children:n}){const{showToast:a}=Pn(),[o,l]=m.useState(!1),u=m.useCallback(async v=>{l(!0);try{const b=await pn("obtenerFacturasPorAnio",{anio:v});return b&&b.status==="ok"?b.data||[]:b.data||[]}catch(b){return console.error("❌ Error al obtener facturas por año:",b.message),[]}finally{l(!1)}},[]),d=v=>new Promise((b,x)=>{const w=new FileReader;w.readAsDataURL(v),w.onload=()=>b(w.result.split(",")[1]),w.onerror=S=>x(S)}),p=m.useCallback(async({anio:v,entidad:b,descripcion:x,valor:w,metodoPago:S,file:C})=>{if(!C)return{ok:!1,mensaje:"Debe seleccionar un archivo context linea 36"};l(!0);try{const k=await d(C),E={anio:v,entidad:b,descripcion:x,valor:w,metodoPago:S,archivo:{nombre:C.name,base64:k,tipo:C.type}},O=await Qe("subirArchivoFacturas",E);return O.status==="error_validacion"&&(console.log("data",O),a(`${O.message}`,"info",15e3,"FacturasContext")),O.status==="ok"?{ok:!0,mensaje:O.message||"Factura subida correctamente",data:O}:{ok:!1,mensaje:O.message||"Error al subir la factura",data:O}}catch(k){const E=k.message.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor de Google.":"Error al conectar con el servidor.";return a(`❌ ${E}`,"error",15e3,"FacturasContext"),{ok:!1,mensaje:E}}finally{l(!1)}},[a]),g=m.useCallback(async v=>{l(!0);try{const b=await Qe("actualizarFactura",v);return b.status==="ok"?{ok:!0,mensaje:b.mensaje||"Factura actualizada correctamente",datos:b.datos}:{ok:!1,mensaje:b.mensaje||"No se pudo actualizar la factura"}}catch(b){return console.error("❌ actualizarFactura:",b.message),{ok:!1,mensaje:"Error al actualizar la factura"}}finally{l(!1)}},[]),h=m.useCallback(async v=>{l(!0);try{const b=await Qe("eliminarFactura",{registroId:v});return b.status==="ok"?{ok:!0,mensaje:b.mensaje||"Factura eliminada correctamente",datos:b.datos}:{ok:!1,mensaje:b.mensaje||"Error al eliminar la factura"}}catch(b){return console.error("❌ eliminarFactura:",b.message),{ok:!1,mensaje:"Error al eliminar la factura"}}finally{l(!1)}},[]);return s.jsx(n0.Provider,{value:{loading:o,fetchFacturasPorAnio:u,subirFactura:p,updateFactura:g,deleteFactura:h},children:n})}function zm(){return m.useContext(n0)}const a0=m.createContext(null);function Mk({children:n}){const{showToast:a}=Pn(),[o,l]=m.useState([]),[u,d]=m.useState([]),[p,g]=m.useState(!1),h=m.useCallback(async()=>{g(!0);try{const C=await pn("obtenerDatosTributarios");if(C.status==="ok"){const k=(C.data||[]).sort((E,O)=>E.orden-O.orden);return l(k),d(JSON.parse(JSON.stringify(k))),{ok:!0}}return a(C.mensaje||"Error al obtener datos","error"),{ok:!1}}catch(C){return console.error("❌ obtenerDatosTributarios error:",C),a("Error de conexión al cargar datos","error"),{ok:!1}}finally{g(!1)}},[a]),v=m.useCallback(async()=>{g(!0);try{const C=await Qe("actualizarDatosTributarios",{data:o});return C.status==="ok"?(d(JSON.parse(JSON.stringify(o))),a("✅ Todos los cambios han sido guardados","success"),{ok:!0}):(a("❌ "+C.mensaje,"error"),{ok:!1})}catch{return a("❌ Error al sincronizar con el servidor","error"),{ok:!1}}finally{g(!1)}},[o,a]),b=m.useCallback(()=>{l(JSON.parse(JSON.stringify(u))),a("Cambios descartados","info")},[u,a]),x=m.useMemo(()=>JSON.stringify(o)!==JSON.stringify(u),[o,u]),w=m.useMemo(()=>o.filter(C=>C.importante===!0||C.importante===1).length,[o]),S=m.useCallback(()=>{l([]),d([])},[]);return s.jsx(a0.Provider,{value:{datos:o,setDatos:l,loading:p,getDatos:h,saveChanges:v,discardChanges:b,isDirty:x,conteoImportantes:w,clearDatos:S},children:n})}const r0=()=>{const n=m.useContext(a0);if(!n)throw new Error("useDatosTributarios debe usarse dentro de DatosTributariosProvider");return n},o0=m.createContext(null);function Bk({children:n}){const{showToast:a}=Pn(),[o,l]=m.useState([]),[u,d]=m.useState(!1),p=m.useCallback(async()=>{d(!0);try{const h=await pn("obtenerLogs");h.status==="ok"?l(h.logs||[]):a(h.mensaje||"⚠️ No se pudieron cargar los logs.","warning",4e3,"LogsAdmin")}catch(h){console.error("❌ obtenerLogs error:",h),a("❌ Error de conexión al cargar logs.","danger",4e3,"LogsAdmin")}finally{d(!1)}},[a]),g=m.useCallback(async()=>{d(!0);try{const h=await Qe("limpiarLogsAntiguos");h.status==="ok"?(a(h.mensaje||"🧹 Logs limpiados correctamente","success",3e3,"LogsAdmin"),await p()):a(h.mensaje||"⚠️ No se pudo limpiar logs","warning",4e3,"LogsAdmin")}catch(h){console.error("❌ clearLogs error:",h),a("❌ Error al limpiar logs","danger",4e3,"LogsAdmin")}finally{d(!1)}},[a,p]);return s.jsx(o0.Provider,{value:{logs:o,loading:u,getDatos:p,clearDatos:g},children:n})}function zk(){const n=m.useContext(o0);if(!n)throw new Error("useLogsAdmin debe usarse dentro de <LogsAdminProvider>");return n}const s0=m.createContext(),_k=({children:n})=>{const{showToast:a}=Pn(),[o,l]=m.useState([]),[u,d]=m.useState(!1),[p,g]=m.useState([]),[h,v]=m.useState(!1),b=m.useCallback(async()=>{try{const E=await pn("obtenerRoles");E.status==="ok"?(g(E.data||[]),v(!1)):(g([]),v(!0),console.warn(E.mensaje,"UsuariosAdmin"))}catch(E){console.error("❌ Error al cargar roles:",E),g([]),v(!0),a("❌ Error de conexión al obtener roles.","danger",4e3,"UsuariosAdmin")}},[a]),x=m.useCallback(async()=>{d(!0);try{const E=await pn("obtenerUsuarios");E.status==="ok"?l(E.datos||[]):console.warn(E.mensaje,"UsuariosAdmin")}catch(E){console.error("❌ obtenerUsuarios error:",E)}finally{d(!1)}},[]),w=async E=>{if(!E?.correo||!E?.nombre||!E?.rol)return a("⚠️ Todos los campos son obligatorios (correo, nombre, rol).","warning",4e3,"UsuariosAdmin");d(!0);try{const O={correo:E.correo,nombre:E.nombre,rol:E.rol},N=await Qe("agregarUsuario",O);N.status==="ok"?(l(N.datos||[]),a(N.mensaje||"✅ Usuario creado correctamente.","success",2e3,"UsuariosAdmin")):a(N.mensaje||"⚠️ No se pudo crear el usuario.","warning",4e3,"UsuariosAdmin")}catch(O){console.error("❌ agregarUsuario error:",O);const N=O.mensaje||O.message||"Error inesperado al procesar la solicitud";a(N,"danger",5e3,"UsuariosAdmin")}finally{d(!1)}},S=async(E,O)=>{d(!0);try{const N={correo:E,...O},D=await Qe("actualizarUsuario",N);D.status==="ok"?(l(D.datos||[]),a(D.mensaje||`✅ Usuario "${E}" actualizado correctamente.`,"success",2e3,"UsuariosAdmin")):a(D.mensaje||`⚠️ No se pudo actualizar el usuario "${E}".`,"warning",4e3,"UsuariosAdmin")}catch(N){console.error("❌ actualizarUsuario error:",N),a(`❌ Error de conexión al actualizar usuario "${E}".`,"danger",4e3,"UsuariosAdmin")}finally{d(!1)}},C=async(E,O,N)=>{d(!0);try{const L=await Qe("toggleUsuarioActivo",{correo:E,activo:O,nombre:N});L.status==="ok"?(l(L.datos||[]),console.log("nombre",N),a(L.mensaje||`🔁 Estado de "${E}" actualizado.`,"success",2e3,"UsuariosAdmin")):a(L.mensaje||`⚠️ No se pudo cambiar el estado de "${E}".`,"warning",4e3,"UsuariosAdmin")}catch(D){console.error("❌ toggleUsuarioActivo error:",D),a(`❌ Error al cambiar el estado de "${E}".`,"danger",4e3,"UsuariosAdmin")}finally{d(!1)}},k=async E=>{d(!0);try{const N=await Qe("eliminarUsuario",{correo:E});N.status==="ok"?(l(N.datos||[]),a(N.mensaje||`🗑️ Usuario "${E}" eliminado correctamente.`,"success",3e3,"UsuariosAdmin")):a(N.mensaje||`⚠️ No se pudo eliminar el usuario "${E}".`,"warning",4e3,"UsuariosAdmin")}catch(O){console.error("❌ eliminarUsuario error:",O),a(`❌ Error al eliminar el usuario "${E}" "${O}".`,"danger",1e4,"UsuariosAdmin")}finally{d(!1)}};return m.useEffect(()=>{qo()&&(b(),x())},[b,x]),s.jsx(s0.Provider,{value:{usuarios:o,rolesDisponibles:p,rolesErrorPermisos:h,loading:u,getDatos:x,addDato:w,updateDato:S,toggleActivo:C,deleteDato:k},children:n})},Uk=()=>m.useContext(s0),i0=m.createContext(),Ik=({children:n})=>{const{showToast:a}=Pn(),[o,l]=m.useState(null),[u,d]=m.useState(null),[p,g]=m.useState(!1),h=m.useCallback(async()=>{g(!0);try{const w=await pn("obtenerConfig");w.status==="ok"&&(l(w.datos||w.data||{}),d(w.version||{}))}catch(w){console.error("❌ obtenerConfig error:",w),a("❌ Error al obtener configuración del servidor","danger",4e3,"ConfigAdmin")}finally{g(!1)}},[a]),v=async w=>{g(!0);try{const S=await Qe("actualizarConfig",w);S.status==="ok"?(l(S.datos||w),a(S.mensaje||"✅ Configuración actualizada correctamente","success",2e3,"ConfigAdmin")):a(S.mensaje||"⚠️ No se pudo actualizar la configuración","warning",4e3,"ConfigAdmin")}catch(S){console.error("❌ actualizarConfig error:",S),a("❌ Error de conexión con el servidor al actualizar configuración","danger",4e3,"ConfigAdmin")}finally{g(!1)}},b=async(w,S=!1)=>{g(!0);try{const C=await Qe("inicializarSistemaForzado",{confirmar:w,borrarCarpetas:S});return C.status==="ok"?a(C.mensaje||"✅ Sistema reinicializado correctamente","success",3e3,"ConfigAdmin"):C.status==="sin_permiso"?a(C.mensaje||"⛔ No tiene permisos para reinicializar","warning",4e3,"ConfigAdmin"):a(C.mensaje||"⚠️ Error al reinicializar el sistema","warning",4e3,"ConfigAdmin"),C}catch(C){return console.error("❌ reinicializarSistemaForzado error:",C),a(`❌ Reinicializar Sistema ${C}`,"danger",2e4,"ConfigAdmin"),{status:"error",mensaje:C.message}}finally{g(!1)}},x=async()=>{g(!0);try{const w=await Qe("generarBackupZIP",{});if(w.status==="ok"&&w.blob){a("✅ Backup generado correctamente","success",3e3,"ConfigAdmin"),console.log(w.blob);const S=URL.createObjectURL(w.blob),C=document.createElement("a");C.href=S,C.download=w.nombreArchivo||"Backup_Declaracion.zip",document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(S)}else a(w.mensaje||"⚠️ No se pudo generar el backup","warning",4e3,"ConfigAdmin")}catch(w){console.error("❌ generarBackup error:",w),a("❌ Error al generar el backup","danger",4e3,"ConfigAdmin")}finally{g(!1)}};return m.useEffect(()=>{qo()&&h()},[h]),s.jsx(i0.Provider,{value:{config:o,loading:p,getConfig:h,versionBackend:u,updateConfig:v,reinicializarSistemaForzado:b,generarBackup:x},children:n})},Pk=()=>m.useContext(i0),l0=m.createContext(),$k=({children:n})=>{const{showToast:a}=Pn(),[o,l]=m.useState([]),[u,d]=m.useState([]),[p,g]=m.useState(!1),h=m.useCallback(async()=>{try{const S=await pn("listarFuncionesLogicaNegocio");S.status==="ok"&&d(S.datos||[])}catch(S){console.error("❌ Error al Cargar Funciones",S),a("❌ Error al Cargar Funciones","danger",4e3,"RolesAdmin")}},[a]),v=m.useCallback(async()=>{g(!0);try{const S=await pn("obtenerRoles");S.status==="ok"?l(S.data||[]):a(S.mensaje||"⚠️ No se pudieron cargar los roles.","warning",4e3,"RolesAdmin")}catch(S){console.error("❌ obtenerRoles error:",S),a("❌ Error de conexión con el servidor al cargar roles.","danger",4e3,"RolesAdmin")}finally{g(!1)}},[a]),b=async(S,C)=>{if(!S)return a("⚠️ Debe ingresar un nombre para el rol","warning",4e3,"AdminRoles");g(!0);try{const E=await Qe("agregarRol",{rol:S,permisos:C||[]});E.status==="ok"?(a(E.mensaje||"✅ Rol creado correctamente.","success",2e3,"RolesAdmin"),l(E.datos||[])):a(E.mensaje||"⚠️ No se pudo crear el rol.","warning",4e3,"RolesAdmin")}catch(k){console.error("❌ agregarRol error:",k),a("❌ Error de conexión con el servidor al crear el rol.","danger",4e3,"RolesAdmin")}finally{g(!1)}},x=async(S,C)=>{g(!0);try{const E=await Qe("actualizarRol",{rol:S,permisos:C});E.status==="ok"?(a(E.mensaje||`✅ Rol "${S}" actualizado correctamente.`,"success",2e3,"RolesAdmin"),l(E.datos||[])):a(E.mensaje||`⚠️ No se pudo actualizar el rol "${S}".`,"warning",4e3,"RolesAdmin")}catch(k){console.error("❌ actualizarRol error:",k),a(`❌ Error de conexión con el servidor al actualizar el rol "${S}".`,"danger",4e3,"RolesAdmin")}finally{g(!1)}},w=async S=>{if(g(!0),S==="administrador")return a("⚠️ No se puede eliminar el rol administrador","warning",4e3,"RolesAdmin");try{const k=await Qe("eliminarRol",{rol:S});k.status==="ok"?(a(k.mensaje,"success",3e3,"RolesAdmin"),l(k.datos||[])):a(k.mensaje,"warning",4e3,"RolesAdmin")}catch(C){console.error("❌ eliminarRol error:",C),a(`❌ Error al eliminar el rol: ${C?.message||C.toString()}`,"danger",8e3,"RolesAdmin")}finally{g(!1)}};return m.useEffect(()=>{qo()&&h()},[h]),s.jsx(l0.Provider,{value:{roles:o,funcionesDisponibles:u,loading:p,getDatos:v,addDato:b,updateDato:x,deleteDato:w},children:n})},Hk=()=>m.useContext(l0);function c0({children:n}){return s.jsx(Bk,{children:s.jsx(_k,{children:s.jsx(Ik,{children:s.jsx($k,{children:n})})})})}const $a="/appdeclaracion/assets/defaultAvatarImg-CF5KfDzf.png",yn=({show:n})=>n?s.jsxs("div",{className:"loading-overlay",children:[s.jsx(St,{animation:"border",variant:"light"}),s.jsx("span",{className:"loading-text",children:"Procesando..."})]}):null;function Gk({show:n,onHide:a,onConfirm:o,loading:l}){const[u,d]=m.useState(""),[p,g]=m.useState(!1),h=()=>{o(u,p),d(""),g(!1)};return s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:"⚠️ Reinicializar Proyecto"})}),s.jsxs(ye.Body,{children:[s.jsxs("p",{children:["Esta acción ",s.jsx("strong",{children:"eliminará todos los datos"})," y reiniciará la aplicación."]}),s.jsxs("p",{children:["Para confirmar, escriba ",s.jsx("strong",{children:"INICIALIZAR"}),":"]}),s.jsxs(ae,{children:[s.jsx(ae.Group,{children:s.jsx(ae.Control,{type:"text",placeholder:"INICIALIZAR",value:u,onChange:v=>d(v.target.value)})}),s.jsx(ae.Check,{type:"checkbox",label:"Borrar también las carpetas de archivos",checked:p,onChange:v=>g(v.target.checked),className:"mt-2 modal-reinit-checkbox"})]}),s.jsx(yn,{show:l})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),s.jsx(Oe,{variant:"danger",disabled:u!=="INICIALIZAR",onClick:h,children:l?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm"})," Inicializando..."]}):"Reinicializar"})]})]})}var qk=["color","size","title","className"];function Rf(){return Rf=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Rf.apply(null,arguments)}function Jk(n,a){if(n==null)return{};var o,l,u=Fk(n,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(l=0;l<d.length;l++)o=d[l],a.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(u[o]=n[o])}return u}function Fk(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}var u0=m.forwardRef(function(n,a){var o=n.color,l=o===void 0?"currentColor":o,u=n.size,d=u===void 0?"1em":u,p=n.title,g=p===void 0?null:p,h=n.className,v=h===void 0?"":h,b=Jk(n,qk);return Fe.createElement("svg",Rf({ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:d,height:d,fill:l,className:["bi","bi-bell",v].filter(Boolean).join(" ")},b),g?Fe.createElement("title",null,g):null,Fe.createElement("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"}))});u0.propTypes={color:Be.string,size:Be.oneOfType([Be.string,Be.number]),title:Be.string,className:Be.string};var Vk=["color","size","title","className"];function Df(){return Df=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Df.apply(null,arguments)}function Yk(n,a){if(n==null)return{};var o,l,u=Xk(n,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(l=0;l<d.length;l++)o=d[l],a.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(u[o]=n[o])}return u}function Xk(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}var Lf=m.forwardRef(function(n,a){var o=n.color,l=o===void 0?"currentColor":o,u=n.size,d=u===void 0?"1em":u,p=n.title,g=p===void 0?null:p,h=n.className,v=h===void 0?"":h,b=Yk(n,Vk);return Fe.createElement("svg",Df({ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:d,height:d,fill:l,className:["bi","bi-box-arrow-right",v].filter(Boolean).join(" ")},b),g?Fe.createElement("title",null,g):null,Fe.createElement("path",{fillRule:"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"}),Fe.createElement("path",{fillRule:"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"}))});Lf.propTypes={color:Be.string,size:Be.oneOfType([Be.string,Be.number]),title:Be.string,className:Be.string};function ha(){const{user:n}=ji();return{puede:o=>n?n.permisos==="*"||n.permisos?.includes("*")?!0:n.permisos?.includes(o):!1}}const d0=({isOpen:n,onClose:a})=>n?s.jsx("div",{className:"tutorial-modal-overlay",onClick:a,children:s.jsxs("div",{className:"tutorial-modal-content",onClick:o=>o.stopPropagation(),children:[s.jsx("button",{className:"close-x-btn",onClick:a,"aria-label":"Cerrar",children:"×"}),s.jsx("div",{className:"modal-body",children:s.jsx("div",{className:"video-aspect-ratio",children:s.jsx("iframe",{src:"https://player.vimeo.com/video/1183915319?h=07f3253b51&badge=0&autopause=0&autoplay=1",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Video Tutorial AppDeclaración"})})})]})}):null;function Zk({onOpenBackend:n}){const{puede:a}=ha(),o=a("obtenerDatosTributarios"),{activeBackend:l}=uc(),{getDatos:u,clearDatos:d,conteoImportantes:p}=r0(),[g,h]=m.useState(!1),{user:v,authenticated:b,logout:x}=ji(),[w,S]=m.useState(!1),[C,k]=m.useState(!1),[E,O]=m.useState(!1),N=In(),D=Un(),L=()=>k(!1);m.useEffect(()=>{o?u():d()},[o,u,d]);const z=()=>{D.pathname==="/datos-tributarios"?u():N("/datos-tributarios")};m.useEffect(()=>{const q=setTimeout(()=>{S(!0)},1e4);return()=>clearTimeout(q)},[]);const _=w&&v?.picture||$a,M=!!v,R=!!(b&&v);return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"navbar-return-container sticky-top",children:[s.jsx(Pl,{bg:"light",expand:"lg",className:"shadow-sm mb-3 sticky-top navbar-nav-principal",children:s.jsxs(_o,{fluid:!0,children:[s.jsxs("div",{className:"backend-circle-Brand",children:[l&&s.jsx("div",{className:"backend-circle ms-2",title:`Backend: ${l.alias}`,onClick:n,children:l.alias.slice(0,2).toUpperCase()}),s.jsxs("div",{className:"grupNavTex text-center",children:[s.jsx(Pl.Brand,{className:"app-brand",as:En,to:"/",children:"AppDeclaración"}),l?.alias&&s.jsx("h6",{className:"backend-alias mb-0",title:l.alias,children:l.alias})]})]}),s.jsx("div",{className:"contCamp",children:s.jsxs("div",{className:"d-flex align-items-center position-relative",children:[s.jsxs("div",{className:`position-relative d-flex align-items-center me-3 notificacion-wrapper ${o?"":"opacity-50"}`,style:{cursor:o?"pointer":"not-allowed",filter:o?"none":"grayscale(1)"},onClick:o&&R?z:void 0,title:R?o?"":"No tienes permisos para ver datos tributarios":"Inicia sesión para ver datos tributarios",children:[s.jsx(u0,{size:22}),o&&p>0&&s.jsx("span",{className:"badge-notificacion pulse-animation",children:p})]}),s.jsx(Pl.Toggle,{onClick:()=>k(!0),"aria-controls":"offcanvasNavbar-expand-lg"})]})}),s.jsxs(Pl.Offcanvas,{show:C,onHide:L,id:"offcanvasNavbar-expand-lg","aria-labelledby":"offcanvasNavbarLabel-expand-lg",placement:"end",children:[s.jsx(Ha.Header,{closeButton:!0,className:"offcanvas-header-user",children:M?s.jsxs("div",{className:"offcanvas-user-header",children:[s.jsx("img",{src:_,alt:"avatar",className:"offcanvas-user-avatar user-avatar",loading:"lazy",onError:q=>{q.target.src!==$a&&(q.target.src=$a)}},_),s.jsxs("div",{className:"offcanvas-user-info",children:[s.jsx("div",{className:"offcanvas-user-name",children:v.nombre||"Usuario"}),s.jsx("div",{className:"offcanvas-user-email",children:v.correo})]})]}):s.jsx(Ha.Title,{id:"offcanvasNavbarLabel-expand-lg",children:"Menú"})}),s.jsx(Ha.Body,{children:s.jsxs(Jt,{className:"justify-content-end flex-grow-1 pe-3",children:[s.jsx(Zs,{placement:"bottom",animation:!1,overlay:s.jsx(vo,{children:"Ver Productos"}),children:s.jsxs(Jt.Link,{onClick:()=>{R&&(k(!1),N("/productos"))},disabled:!R,style:R?{}:{opacity:.5,cursor:"not-allowed"},title:R?"":"Inicia sesión para ver productos",children:[s.jsx("span",{className:"icon-Verproductos"}),s.jsx("span",{className:"ms-2 d-lg-none",children:"Ver Productos"})," "]})}),s.jsx(Zs,{placement:"bottom",animation:!1,overlay:s.jsx(vo,{children:"Add Facturas"}),children:s.jsxs(Jt.Link,{onClick:()=>{R&&(k(!1),N("/facturas"))},disabled:!R,style:R?{}:{opacity:.5,cursor:"not-allowed"},title:R?"":"Inicia sesión para ver facturas",children:[s.jsx("span",{className:"icon-AddFacturas"}),s.jsx("span",{className:"ms-2 d-lg-none",children:"Facturas"})]})}),s.jsx(Zs,{placement:"bottom",animation:!1,overlay:s.jsx(vo,{children:"Contador"}),children:s.jsxs(Jt.Link,{onClick:()=>{R&&(k(!1),N("/contador"))},disabled:!R,style:R?{}:{opacity:.5,cursor:"not-allowed"},title:R?"":"Inicia sesión para ver contador",children:[s.jsx("span",{className:"icon-Contador"}),s.jsx("span",{className:"ms-2 d-lg-none",children:"Contador"})]})}),M&&s.jsx(Zs,{placement:"bottom",animation:!1,overlay:s.jsx(vo,{children:"Usuario Activo"}),children:s.jsx("div",{className:"navbar-session-Dropdown-desktop d-flex align-items-center ms-3",children:s.jsxs(mn,{align:"end",children:[s.jsx(mn.Toggle,{as:"div",id:"userDropdown",className:"cursor-pointer",style:{display:"flex",alignItems:"center"},children:s.jsx("img",{src:_,alt:"avatar",width:34,height:34,className:"rounded-circle user-avatar",loading:"lazy",onError:q=>{q.target.src!==$a&&(q.target.src=$a)}},_)}),s.jsxs(mn.Menu,{className:"p-3 text-center",children:[s.jsx("img",{src:_,alt:"avatar",className:"rounded-circle mb-2 user-avatar-lg",loading:"lazy",onError:q=>{q.target.src!==$a&&(q.target.src=$a)}},_),s.jsx("div",{className:"fw-bold",children:v.nombre||"Usuario desconocido"}),s.jsx("div",{className:"text-muted small mb-2",children:v.correo}),s.jsx(mn.Divider,{}),s.jsxs(mn.Item,{onClick:()=>{x(),N("/")},className:" text-danger text-center fw-semibold d-flex align-items-center justify-content-center gap-1",children:[s.jsx(Lf,{size:16})," Cerrar sesión"]})]})]})})}),s.jsx(Zs,{placement:"bottom",animation:!1,overlay:s.jsx(vo,{children:"Más"}),children:s.jsxs(un,{title:s.jsx("span",{className:"icon-menu-kebab"}),id:"nav-dropdown",className:"Navbar-NavDropdown-Mas-Desktop",children:[s.jsx(un.Item,{onClick:()=>k(!1),as:En,to:"/admin",children:"Admin & Config"}),s.jsx(un.Divider,{}),s.jsx(un.Item,{onClick:n,children:"Adicionar Backend"}),s.jsx(un.Divider,{}),s.jsx(un.Item,{onClick:()=>O(!0),children:"Guía de uso"}),s.jsx(un.Divider,{}),s.jsx(un.Item,{onClick:()=>k(!1),as:En,to:"/backend-setup",children:"Configurar Backend"}),s.jsx(un.Divider,{}),s.jsx(un.Item,{onClick:()=>k(!1),as:En,to:"/donaciones",children:"Donaciones"}),s.jsx(un.Divider,{}),s.jsx(un.Item,{onClick:()=>k(!1),as:En,to:"/acerca-de",children:"Acerca de"})]})}),s.jsxs(Jt.Link,{className:"Navbar-NavLink-Mas nav-link-more",onClick:()=>{k(!1),h(!0)},children:[s.jsx("span",{children:"Más"}),s.jsx("span",{className:"arrow",children:"›"})]})]})}),v&&s.jsx("div",{className:"offcanvas-logout-mobile romeo",children:s.jsxs("button",{className:"offcanvas-logout-btn julieta",onClick:()=>{k(!1),x(),N("/")},children:[s.jsx(Lf,{size:18}),s.jsx("span",{children:"Cerrar sesión"})]})})]})]})},"lg"),s.jsxs(Ha,{placement:"end",show:g,onHide:()=>h(!1),children:[s.jsx(Ha.Header,{closeButton:!0,children:s.jsx(Ha.Title,{style:{cursor:"pointer"},onClick:()=>{h(!1),k(!0)},children:"← Más opciones"})}),s.jsx(Ha.Body,{children:s.jsxs(Jt,{className:"flex-column",children:[s.jsx(Jt.Link,{onClick:()=>{R&&(h(!1),N("/admin"))},disabled:!R,style:R?{}:{opacity:.5,cursor:"not-allowed"},title:R?"":"Inicia sesión para entrar a Admin",children:"Admin & Config"}),s.jsx(Jt.Link,{onClick:()=>{k(!1),n()},children:"Adicionar Backend"}),s.jsx(Jt.Link,{onClick:()=>{h(!1),O(!0)},children:"Guía de uso"}),s.jsx(Jt.Link,{onClick:()=>{h(!1),N("/backend-setup")},children:"Configurar Backend"}),s.jsx(Jt.Link,{onClick:()=>{h(!1),N("/donaciones")},children:"Donaciones"}),s.jsx(Jt.Link,{onClick:()=>{h(!1),N("/acerca-de")},children:"Acerca de"})]})})]}),s.jsx(d0,{isOpen:E,onClose:()=>O(!1)})]})})}function ga({show:n,onHide:a,title:o="Confirmar acción",message:l="¿Deseas continuar con esta operación?",confirmLabel:u="Confirmar",confirmVariant:d="primary",onConfirm:p}){const[g,h]=m.useState(!1),[v,b]=m.useState(!1),x=async()=>{p&&(b(!0),await p(),b(!1),h(!1),a())};return s.jsx(s.Fragment,{children:s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:o})}),s.jsxs(ye.Body,{children:[typeof l=="string"?s.jsx("p",{children:l}):l,s.jsx(ae.Check,{type:"switch",id:"confirm-action-switch",label:g?"Confirmado (acción habilitada)":"Desactivado",checked:g,onChange:w=>h(w.target.checked)}),s.jsx(yn,{show:v})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),s.jsx(Oe,{variant:d,onClick:x,disabled:!g||v,children:v?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Guardando..."]}):u})]})]})})}const Lb={anio:n=>!n||!n.toString().trim()?"El año es obligatorio.":/^\d{4}$/.test(n)?"":"El año debe tener 4 dígitos.",entidad:n=>!n||!n.trim()?"El campo Entidad es obligatorio.":"",descripcion:n=>n&&n.length>100?"La descripción no debe superar los 50 caracteres.":"",valor:n=>{if(n==null||n==="")return"El valor es obligatorio.";const a=String(n).replace(/\D/g,"");return/^\d+$/.test(a)?"":"El valor debe ser un número entero sin decimales."},metodoPago:n=>!n||n.trim()===""?"Debe seleccionar un método de pago.":"",archivo:n=>n?"":"Debe seleccionar un archivo.",nombre:n=>!n||!n.trim()?"El nombre del producto es obligatorio.":/^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre no puede contener caracteres especiales.",nombreProducto:n=>!n||!n.trim()?"El nombre del producto es obligatorio.":/^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre no puede contener caracteres especiales.",entidadProducto:n=>!n||!n.trim()?"La entidad del producto es obligatoria.":"",tipo:n=>n?/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El tipo solo debe contener letras.":"",correo:n=>!n||!n.trim()?"El correo es obligatorio.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)?"":"El correo no es válido.",nombreUsuario:n=>!n||!n.trim()?"El nombre es obligatorio.":n.length>50?"El nombre no debe superar los 50 caracteres.":/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre solo puede contener letras.",rol:n=>!n||n.trim()===""?"Debe seleccionar un rol.":"",rolNombre:n=>!n||!n.trim()?"El nombre del rol es obligatorio.":/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?n.trim().length<3?"El nombre del rol debe tener al menos 3 caracteres.":n.trim().length>30?"El nombre del rol no debe superar los 30 caracteres.":"":"El nombre del rol solo puede contener letras.",rolPermisos:n=>!n||n.length===0?"Debe seleccionar al menos un permiso.":""};function vt(n=""){if(!n)return"";const a=n.toLowerCase().trim().replace(/\s+/g," ");return a.charAt(0).toUpperCase()+a.slice(1)}const Kk=({show:n,onHide:a})=>{const{backends:o,activeBackend:l,addBackend:u,deleteBackend:d,setActiveBackend:p}=uc(),[g,h]=m.useState(null),{showToast:v}=Pn(),[b,x]=m.useState(""),[w,S]=m.useState(""),[C,k]=m.useState(!1),E=()=>{const N=vt(b),D=w.trim();if(!N||!D){v("❌ Alias y URL son obligatorios","danger",3e3);return}try{u(N,D),v(`✅ Backend "${N}" agregado`,"success",3e3),x(""),S(""),k(!1)}catch(L){v(`❌ ${L.message}`,"danger",3e3)}},O=N=>{d(N),h(null),v(`✅ Backend "${N}" eliminado`,"success",3e3)};return s.jsxs(s.Fragment,{children:[s.jsxs(ye,{show:n,onHide:a,centered:!0,className:"BackendConfigModal",children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:"Adicionar Backends (URL del Worker)"})}),s.jsxs(ye.Body,{children:[o.length===0?s.jsx("p",{children:"No hay backends configurados."}):s.jsx("div",{className:"backend-list-container",children:s.jsx("ul",{className:"list-group",children:o.map(N=>s.jsxs("li",{className:`list-group-item d-flex justify-content-between align-items-center ${l?.alias===N.alias?"active":""}`,children:[s.jsx("span",{children:N.alias}),s.jsxs("div",{className:"d-flex gap-2",children:[s.jsx(Oe,{size:"sm",variant:"success",onClick:()=>p(N.alias),children:"Usar"}),s.jsx(Oe,{size:"sm",variant:"danger",onClick:()=>h(N.alias),children:"Eliminar"})]})]},N.alias))})}),s.jsx("hr",{}),s.jsx("h6",{style:{cursor:"pointer",color:"#0d6efd"},onClick:()=>k(N=>!N),children:C?"➖ Cancelar":"➕ Agregar nuevo Backend"}),C&&s.jsxs(ae,{children:[s.jsxs(ae.Group,{className:"mb-2",children:[s.jsx(ae.Label,{children:"Alias"}),s.jsx(ae.Control,{type:"text",placeholder:"Ej: Cliente1",value:b,onChange:N=>x(N.target.value)})]}),s.jsxs(ae.Group,{className:"mb-2",children:[s.jsx(ae.Label,{children:"URL"}),s.jsx(ae.Control,{type:"text",placeholder:"https://appdeclaracion.usuario.workers.dev/",value:w,onChange:N=>S(N.target.value)})]}),s.jsx(Oe,{variant:"primary",onClick:E,children:"Guardar"})]})]})]}),s.jsx(ga,{show:g,onHide:()=>h(!1),title:"Eliminar Usuario",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar el backend ",s.jsx("strong",{children:g}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>O(g)})]})};function Qk(){const[n,a]=m.useState(null),[o,l]=m.useState(!1);m.useEffect(()=>{const d=p=>{p.preventDefault(),a(p),l(!0)};return window.addEventListener("beforeinstallprompt",d),()=>{window.removeEventListener("beforeinstallprompt",d)}},[]);const u=async()=>{if(!n)return;n.prompt(),(await n.userChoice).outcome==="accepted"?console.log("✅ Usuario aceptó instalar"):console.log("❌ Usuario canceló instalación"),a(null),l(!1)};return o?s.jsx("div",{style:Mb.container,children:s.jsx("button",{style:Mb.button,onClick:u,children:"📲 Agregar a pantalla de inicio"})}):null}const Mb={container:{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:9999},button:{backgroundColor:"#0d6efd",color:"#fff",border:"none",padding:"12px 18px",borderRadius:"8px",fontSize:"16px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0,0,0,0.2)"}};function Wk(){const[n,a]=m.useState(!1);return m.useEffect(()=>{const o=/iphone|ipad|ipod/i.test(navigator.userAgent),l=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),u=window.navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches;o&&l&&!u&&a(!0)},[]),n?s.jsx("div",{style:uf.overlay,children:s.jsxs("div",{style:uf.modal,children:[s.jsx("h4",{children:"📲 Instalar App"}),s.jsxs("p",{children:["Para agregar esta app a tu iPhone:",s.jsx("br",{}),s.jsx("strong",{children:"1."})," Toca ",s.jsx("b",{children:"Compartir"})," ⬆️",s.jsx("br",{}),s.jsx("strong",{children:"2."})," Selecciona ",s.jsx("b",{children:"Agregar a pantalla de inicio"})]}),s.jsx("button",{onClick:()=>a(!1),style:uf.button,children:"Entendido"})]})}):null}const uf={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},modal:{backgroundColor:"#fff",padding:"20px",borderRadius:"12px",maxWidth:"320px",textAlign:"center"},button:{marginTop:"15px",padding:"10px 16px",border:"none",borderRadius:"8px",backgroundColor:"#0d6efd",color:"#fff",cursor:"pointer"}};function eT(){const{login:n,authenticated:a,loading:o}=ji(),{activeBackend:l}=uc(),u=In(),[d,p]=m.useState(!1),[g,h]=m.useState(!1),[v,b]=m.useState(!1);return m.useEffect(()=>{if(!o){if(a&&!l&&!g){h(!0),window.dispatchEvent(new CustomEvent("backend:open-config"));return}a&&l&&u("/productos",{replace:!0})}},[a,o,l,g,u]),m.useEffect(()=>{if(o||a||d)return;const x=document.getElementById("googleLoginDiv");if(!x)return;const w=setInterval(()=>{window.google?.accounts?.id&&(clearInterval(w),window.googleInitialized||(window.google.accounts.id.initialize({client_id:"648554486893-4b33o1cei2rfhv8ehn917ovf60h1u9q4.apps.googleusercontent.com",callback:S=>{if(d)return;const C=S.credential,k=Date.now();p(!0),n(C,()=>{const E=Date.now()-k;setTimeout(()=>{p(!1)},Math.max(0,500-E))})}}),window.googleInitialized=!0),x.innerHTML="",window.google.accounts.id.renderButton(x,{theme:"filled_blue",size:"large",shape:"pill",text:"signin_with",width:240}))},300);return()=>clearInterval(w)},[n,o,a,d]),o?s.jsx("div",{className:"home-wrapper",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"spinner-border text-primary mb-3",role:"status"}),s.jsx("p",{className:"text-secondary",children:"Verificando sesión..."})]})}):a?null:d&&!a?s.jsx("div",{className:"home-wrapper",children:s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"spinner-border text-success mb-3",role:"status"}),s.jsx("p",{className:"text-success",children:"Iniciando sesión, un momento..."})]})}):s.jsxs("div",{className:"home-wrapper d-flex flex-column align-items-center",children:[s.jsxs("div",{className:"card shadow-lg p-4 text-center",style:{maxWidth:400,borderRadius:"20px"},children:[s.jsx("h3",{className:"mb-3 fw-bold",children:"Bienvenido"}),s.jsx("p",{className:"text-muted mb-4",children:"Inicia sesión con tu cuenta de Google para gestionar tus documentos."}),s.jsx("div",{id:"googleLoginDiv",className:"d-flex justify-content-center mb-3"}),s.jsxs("div",{className:`bg-light p-3 rounded-3 mt-2 ${l?"":"backend-attention"}`,children:[s.jsx("p",{className:"small text-secondary mb-2",children:"¿Quieres ver cómo funciona?"}),s.jsxs("div",{className:"d-flex flex-column gap-2",children:[s.jsxs("button",{onClick:()=>b(!0),className:"btn btn-sm btn-link text-decoration-none fw-bold",children:[s.jsx("i",{className:"bi bi-play-circle-fill me-1"})," Ver Demo de la App"]}),s.jsx(En,{to:"/backend-setup",className:"text-primary fw-bold text-decoration-none small",children:"Guía: Configurar mi Backend →"})]})]}),s.jsx("hr",{className:"mt-4 mb-3"}),s.jsxs("div",{className:"legal-links",style:{fontSize:"0.85rem"},children:[s.jsx(En,{to:"/privacidad",className:"text-decoration-none text-secondary mx-2",children:"Privacidad"}),s.jsx("span",{className:"text-muted",children:"|"}),s.jsx(En,{to:"/terminos",className:"text-decoration-none text-secondary mx-2",children:"Términos"})]})]}),s.jsx("div",{className:"mt-4 text-center text-white-50",children:s.jsx("small",{children:"AppDeclaración: Gestión descentralizada de documentos tributarios."})}),s.jsx(d0,{isOpen:v,onClose:()=>b(!1)})]})}function Fo({errors:n}){return!n||Object.keys(n).length===0?null:s.jsx("div",{className:"form-error-list",children:Object.values(n).map((a,o)=>s.jsx("div",{className:"error-item",children:a},o))})}function Vo(){const[n,a]=m.useState({}),o=m.useCallback((p,g)=>{const h=Lb[p];if(!h)return;const v=h(g);a(b=>{const x={...b};return v?x[p]=v:delete x[p],x})},[]),l=m.useCallback(p=>{const g={};for(const[h,v]of Object.entries(p)){const b=Lb[h];if(!b)continue;const x=b(v);x&&(g[h]=x)}return a(g),Object.keys(g).length===0},[]),u=m.useCallback(p=>{a(g=>{const h={...g};return delete h[p],h})},[]),d=m.useCallback(()=>a({}),[]);return{errors:n,validateField:o,validateForm:l,clearError:u,clearErrors:d}}function tT({show:n,onHide:a,productoAEditar:o}){const{addProducto:l,updateProducto:u}=Jo(),{errors:d,validateField:p,validateForm:g,clearError:h,clearErrors:v}=Vo(),[b,x]=m.useState({nombre:"",descripcion:"",entidadProducto:"",tipo:""}),[w,S]=m.useState(!1),[C,k]=m.useState(!1),[E,O]=m.useState(""),[N,D]=m.useState("success"),L=_=>{const{name:M,value:R}=_.target;x(q=>({...q,[M]:R})),p(M,R),h(M)};m.useEffect(()=>{n&&o?x({nombre:o.nombre||"",descripcion:o.descripcion||"",entidadProducto:o.entidad||"",tipo:o.tipo||""}):n&&!o&&(x({nombre:"",descripcion:"",entidadProducto:"",tipo:""}),v())},[o,n]);const z=async _=>{if(_.preventDefault(),v(),!!g(b)){S(!0);try{const M={nombre:vt(b.nombre),descripcion:b.descripcion?vt(b.descripcion):"",entidad:vt(b.entidadProducto),tipo:b.tipo?vt(b.tipo):""};let R;if(o?R=await u({...M,id:o.id}):R=await l(M),R.ok)D("success"),O(R.mensaje),k(!0),a();else throw new Error(R.mensaje||"Error en la operación")}catch(M){D("danger"),O(`❌ ${M.message}`),k(!0),console.error(M)}finally{S(!1)}}};return s.jsxs(s.Fragment,{children:[s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:o?"Editar Producto":"Adicionar Producto"})}),s.jsxs(ye.Body,{children:[s.jsx(Fo,{errors:d}),s.jsxs(ae,{onSubmit:z,children:[s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{children:"Nombre *"}),s.jsx(ae.Control,{type:"text",name:"nombre",value:b.nombre,onChange:L,onBlur:_=>p("nombre",_.target.value),placeholder:"Ej: Tarjeta 6992, Cta 1108"})]}),s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{children:"Descripción"}),s.jsx(ae.Control,{type:"text",name:"descripcion",value:b.descripcion,onChange:L,onBlur:_=>p("descripcion",_.target.value),placeholder:"Ej: Extracto bancario, póliza, certificado"})]}),s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{children:"Entidad *"}),s.jsx(ae.Control,{type:"text",name:"entidadProducto",value:b.entidadProducto,onChange:L,onBlur:_=>p("entidadProducto",_.target.value),placeholder:"Ej: Banco de Bogotá, Sura, Ecopetrol"})]}),s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{children:"Tipo"}),s.jsx(ae.Control,{type:"text",name:"tipo",value:b.tipo,onChange:L,onBlur:_=>p("tipo",_.target.value),placeholder:"Ej: Salud, Deuda, Certificado"})]}),s.jsx(Oe,{type:"submit",variant:"primary",disabled:w,children:w?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),s.jsx("span",{className:"ms-2",children:"Procesando..."})]}):o?"Guardar Cambios":"Guardar Producto"})]}),s.jsx(yn,{show:w})]})]}),s.jsx(bm,{position:"bottom-end",className:"p-3",children:s.jsxs(wo,{bg:N,show:C,autohide:!0,delay:3e3,onClose:()=>k(!1),children:[s.jsx(wo.Header,{children:s.jsx("strong",{className:"me-auto",children:"Productos"})}),s.jsx(wo.Body,{className:"text-white",children:E})]})})]})}function nT({show:n,onClose:a,onConfirm:o,title:l,anioDefault:u}){const{errors:d,validateField:p,validateForm:g,clearErrors:h,clearError:v}=Vo(),b=String(new Date().getFullYear()-1),[x,w]=m.useState(!1),[S,C]=m.useState(""),[k,E]=m.useState(!1),[O,N]=m.useState(null),[D,L]=m.useState(!1);m.useEffect(()=>{n&&(h(),C(u||b),E(!1),N(null),L(!1),w(!1))},[n,u,b,h]);const z=async()=>{if(h(),!!g({anio:S,archivo:O})){w(!0);try{await o(S,l==="Remplazar archivo"?!1:k,O,D)}catch(R){console.log("Error en el modal:",R)}finally{w(!1)}}};return s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:l==="Remplazar archivo"?"Reemplazar archivo":"Subir archivo"})}),s.jsxs(ye.Body,{children:[s.jsx(Fo,{errors:d}),s.jsxs(ae,{children:[s.jsxs(ae.Group,{children:[s.jsx(ae.Label,{children:"Año"}),s.jsx(ae.Control,{type:"number",placeholder:`Ejm: ${new Date().getFullYear()-1}`,value:S,onChange:_=>{C(_.target.value),v("anio")},onBlur:_=>p("anio",_.target.value),disabled:l==="Remplazar archivo"})]}),s.jsxs(ae.Group,{className:"mt-3",children:[s.jsx(ae.Label,{children:"Archivo"}),s.jsx(ae.Control,{type:"file",onChange:_=>{N(_.target.files[0]),p("archivo",_.target.files[0])}})]}),l!=="Remplazar archivo"&&s.jsx(ae.Group,{className:"mt-3",children:s.jsx(ae.Check,{type:"checkbox",label:"Este archivo aplica a varios productos",checked:k,onChange:_=>E(_.target.checked)})}),l==="Remplazar archivo"&&s.jsx(ae.Group,{className:"mt-3 UploadModal-replaceOnly",children:s.jsx(ae.Check,{type:"checkbox",label:"Reemplazar solo en este producto",checked:D,onChange:_=>L(_.target.checked)})})]}),s.jsx(yn,{show:x})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:a,disabled:x,children:"Cancelar"}),s.jsx(Oe,{variant:"primary",onClick:z,disabled:x,children:x?s.jsxs(s.Fragment,{children:[s.jsx(St,{size:"sm"})," Procesando..."]}):l==="Remplazar archivo"?"Reemplazar":"Cargar archivo"})]})]})}function aT({show:n,onClose:a,onConfirm:o,productos:l=[],productoOrigen:u,loading:d}){const[p,g]=m.useState([]);m.useEffect(()=>{n&&g(u?[u.id]:[])},[n,u]);const h=(b,x)=>{x!==u?.id&&(b.target.checked?g(w=>[...w,x]):g(w=>w.filter(S=>S!==x)))},v=()=>{if(p.length===0){alert("Debe seleccionar al menos un producto");return}o(p)};return s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:"Seleccionar Productos"})}),s.jsxs(ye.Body,{children:[s.jsx(ae,{children:l.filter(b=>!b.tieneArchivo||b.id===u?.id).map(b=>s.jsx(ae.Check,{type:"checkbox",label:`${b.entidad} - ${b.nombre}`,checked:p.includes(b.id)||b.id===u?.id,disabled:b.id===u?.id,onChange:x=>h(x,b.id),className:"mb-2"},b.id))}),s.jsx(yn,{show:d})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),s.jsx(Oe,{variant:"primary",onClick:v,children:d?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Procesando..."]}):"Cargar archivo"})]})]})}const rT=()=>s.jsx(Nn,{xs:12,md:6,lg:4,className:"mb-3",children:s.jsx(yo,{className:"producto-card-skeleton",children:s.jsxs(yo.Body,{children:[s.jsx("div",{className:"skeleton-edit-btn"}),s.jsx("div",{className:"skeleton-close-btn"}),s.jsx("div",{className:"skeleton-placeholder skeleton-title"}),s.jsx("div",{className:"skeleton-placeholder skeleton-text"}),s.jsx("div",{className:"skeleton-placeholder skeleton-text short"}),s.jsx("div",{className:"skeleton-placeholder skeleton-button"})]})})});function oT(){const n=window.innerWidth<2e3,{puede:a}=ha(),o=a("subirArchivoProducto"),l=a("remplaceArchivo"),u=a("eliminarProducto"),d=a("agregarProducto"),p=a("actualizarProducto"),{registroProductos:g,loading:h,anioAnterior:v,refreshProductos:b,subirArchivo:x,remplaceArchivo:w,deleteProducto:S}=Jo(),{showToast:C}=Pn(),[k,E]=m.useState(!1),[O,N]=m.useState(!1),[D,L]=m.useState(!1),[z,_]=m.useState(!1),[M,R]=m.useState(null),[q,Q]=m.useState(null),[re,oe]=m.useState(null),[ie,J]=m.useState(""),[le,$]=m.useState("");m.useEffect(()=>{qo()&&b()},[]);const ee=I=>{R(I),oe(null),J(""),N(!0)};async function Y({tipo:I,productoIds:ne,anio:te,file:se,replaceOnlyThis:pe=!1,nombreProducto:fe="",usarExistente:He=!1,forzarTodosLosAnios:we=!1}){let Pe;if(I==="reemplazar"?Pe=await w(ne[0],te,se,pe,fe,He,we):Pe=await x(ne,te,se,He),Pe.existe){if(!await Qw({titulo:"Archivo existente",mensaje:Pe.mensaje,textoConfirmar:"✅ Usar archivo existente",textoCancelar:"❌ Cancelar"})){C("❌ Operación cancelada por el usuario","warning",3e3,"Productos");return}I==="reemplazar"?Pe=await w(ne[0],te,se,pe,fe,!0,we):Pe=await x(ne,te,se,!0)}C(Pe.mensaje,Pe.ok?"success":"danger",1e4,"Productos")}const V=async(I,ne,te,se)=>{if(oe(te),J(I),ne){Q(M),L(!0),N(!1);return}M.tieneArchivo?await Y({tipo:"reemplazar",productoIds:[M.id],anio:I,file:te,replaceOnlyThis:se,nombreProducto:M.nombre}):await Y({tipo:"subir",productoIds:[M.id],anio:I,file:te}),N(!1)},A=async I=>{!re||!ie||(await Y({tipo:"subir",productoIds:I,anio:ie,file:re}),L(!1))};return s.jsx(s.Fragment,{children:s.jsxs(_o,{className:"productos-page",children:[s.jsx("div",{className:"productos-container",children:s.jsx("h2",{className:"mb-4",children:"Productos"})}),s.jsx(yr,{children:h?Array.from({length:6}).map((I,ne)=>s.jsx(rT,{},`skeleton-${ne}`)):g.map(I=>s.jsx(Nn,{xs:12,md:6,lg:4,className:"mb-3",children:s.jsx(yo,{className:`producto-card ${I.tieneArchivo?"producto-ok":""}`,children:s.jsxs(yo.Body,{children:[s.jsxs("div",{className:"position-absolute top-0 end-0 m-2 d-flex gap-2 align-items-center",children:[s.jsx("button",{type:"button",className:"editicon accion-icon",disabled:!p||I.tieneArchivo,onClick:()=>{p&&(R(I),E(!0))},title:I.tieneArchivo?"No se puede editar un producto con archivo vinculado":p?"Editar producto":"No tienes permisos para editar",style:{opacity:!p||I.tieneArchivo?.3:1,cursor:!p||I.tieneArchivo?"not-allowed":"pointer"},children:s.jsx("i",{className:"bi bi-pencil-square"})}),s.jsx("button",{type:"button",className:"editicon accion-icon text-danger",disabled:!u,style:u?{}:{opacity:.3,cursor:"not-allowed"},onClick:()=>{u&&(R(I),_(!0))},children:s.jsx("i",{className:"bi bi-x-circle"})})]}),s.jsxs(yo.Title,{className:"producto-title-t",children:[I.entidad," ",I.nombre]}),s.jsx(yo.Text,{children:I.descripcion}),I.tieneArchivo?s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"mb-2",children:s.jsxs("small",{children:["Archivo (",I.archivoInfo?.anio,"):"," ",s.jsx("a",{href:I.archivoInfo?.link,target:"_blank",rel:"noopener noreferrer",children:I.archivoInfo?.nombreArchivo||"Ver archivo"})]})}),s.jsx(Oe,{variant:"warning",size:"sm",disabled:!l,title:l?"":"No tienes permisos para remplazar",onClick:()=>{$("Remplazar archivo"),ee(I)},children:"Modificar archivo"})]}):s.jsx(Oe,{variant:"primary",size:"sm",disabled:!o,title:o?"":"No tienes permisos para subir archivos",onClick:()=>{$("Subir Archivo"),ee(I)},children:"Subir Archivo"})]})})},I.id))}),n&&s.jsx("button",{className:"fab-subir",disabled:!d,title:d?"":"No tienes permisos para agregar productos",style:d?{}:{opacity:.3,cursor:"not-allowed"},onClick:()=>E(!0),children:s.jsx("i",{className:"bi bi-plus-lg"})}),s.jsx(nT,{show:O,onClose:()=>N(!1),onConfirm:V,title:le,anioDefault:le==="Remplazar archivo"?v:""}),s.jsx(aT,{show:D,onClose:()=>L(!1),onConfirm:A,productoOrigen:q,productos:g,loading:h}),s.jsx(tT,{show:k,onHide:()=>{E(!1),R(null)},productoAEditar:M,onProductoAgregado:()=>{E(!1),R(null)}}),s.jsx(ga,{show:z,onHide:()=>_(!1),title:"Eliminar Producto",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar el producto"," ",s.jsx("strong",{children:M?.nombre}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>S(M.id)})]})})}const sT=()=>s.jsxs("div",{className:"dato-tributario-skeleton",children:[s.jsx("div",{className:"card mb-3 border-0 shadow-sm bg-light",children:s.jsxs("div",{className:"card-body p-2 row g-2",children:[s.jsx("div",{className:"col-5",children:s.jsx("div",{className:"skeleton-input"})}),s.jsx("div",{className:"col-5",children:s.jsx("div",{className:"skeleton-input"})}),s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"skeleton-btn"})})]})}),s.jsx("div",{className:"list-group",children:[1,2,3,4,5].map(n=>s.jsxs("div",{className:"skeleton-fila",children:[s.jsxs("div",{className:"skeleton-controls",children:[s.jsx("div",{className:"skeleton-icon-sm"}),s.jsx("div",{className:"skeleton-text-xs"}),s.jsx("div",{className:"skeleton-icon-sm"})]}),s.jsx("div",{className:"skeleton-label-box",children:s.jsx("div",{className:"skeleton-bar",style:{width:"60%"}})}),s.jsx("div",{className:"skeleton-valor-box",children:s.jsx("div",{className:"skeleton-bar",style:{width:"90%"}})}),s.jsxs("div",{className:"skeleton-actions",children:[s.jsx("div",{className:"skeleton-icon"}),s.jsx("div",{className:"skeleton-icon"}),s.jsx("div",{className:"skeleton-icon"})]})]},n))})]});function iT(){const{puede:n}=ha(),a=n("obtenerDatosTributarios"),{datos:o,setDatos:l,getDatos:u,saveChanges:d,isDirty:p,discardChanges:g,loading:h}=r0(),[v,b]=m.useState(null),[x,w]=m.useState({label:"",valor:""}),[S,C]=m.useState(null),[k,E]=m.useState(!1);m.useEffect(()=>{a&&u()},[u,a]);const O=M=>{l(R=>R.map(q=>q.id===M?{...q,importante:!q.importante}:q))},N=(M,R)=>{const q=[...o],Q=M+R;Q<0||Q>=q.length||([q[M],q[Q]]=[q[Q],q[M]],l(q.map((re,oe)=>({...re,orden:oe+1}))))},D=(M,R,q)=>{l(Q=>Q.map(re=>re.id===M?{...re,[R]:q}:re))},L=()=>{l(M=>M.filter(R=>R.id!==S).map((R,q)=>({...R,orden:q+1})))},z=()=>{if(!x.label.trim())return;const M={id:`new_${Date.now()}`,label:x.label.charAt(0).toUpperCase()+x.label.slice(1),valor:x.valor,orden:o.length+1,importante:!1};l([...o,M]),w({label:"",valor:""})},_=M=>{const R=/^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/.*)?$/i,q=M.toString().trim();if(R.test(q)){const Q=q.startsWith("http")?q:`https://${q}`;return s.jsx("a",{href:Q,target:"_blank",rel:"noreferrer",children:"Ver Link"})}return M};return s.jsxs("div",{className:"datos-tributarios container mt-4",children:[s.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4 sticky-header-custom border-bottom shadow-sm px-3 rounded bg-white",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"m-0 h4",children:"📊 Datos Tributarios"}),p&&s.jsx("small",{className:"text-danger fw-bold pulse-animation",children:"⚠️ Cambios pendientes"})]}),s.jsxs("div",{className:"d-flex gap-2",children:[p&&s.jsx("button",{className:"btn btn-sm btn-outline-secondary",onClick:g,children:"Descartar"}),s.jsx("button",{className:`btn btn-sm ${p?"btn-success":"btn-secondary"}`,disabled:!p||h,onClick:d,children:h?"...":"💾 Guardar"})]})]}),h&&o.length===0?s.jsx(sT,{}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"card mb-3 border-0 shadow-sm bg-light",children:s.jsxs("div",{className:"card-body p-2 row g-2",children:[s.jsx("div",{className:"col-5",children:s.jsx("input",{className:"form-control form-control-sm",placeholder:"Etiqueta",value:x.label,onChange:M=>w({...x,label:M.target.value})})}),s.jsx("div",{className:"col-5",children:s.jsx("input",{className:"form-control form-control-sm",placeholder:"Valor",value:x.valor,onChange:M=>w({...x,valor:M.target.value})})}),s.jsx("div",{className:"col-2",children:s.jsx("button",{className:"btn btn-sm btn-primary w-100",onClick:z,children:"+"})})]})}),s.jsxs("div",{className:"list-group shadow-sm rounded",children:[o.map((M,R)=>s.jsxs("div",{className:`fila ${M.importante?"resaltado":""}`,children:[s.jsxs("div",{className:"btn-subir-bajar align-items-center",children:[s.jsx("i",{className:`bi bi-chevron-up ${R===0?"text-muted":"text-primary"}`,onClick:()=>N(R,-1)}),s.jsx("span",{className:"small fw-bold",children:M.orden}),s.jsx("i",{className:`bi bi-chevron-down ${R===o.length-1?"text-muted":"text-primary"}`,onClick:()=>N(R,1)})]}),s.jsx("div",{className:"fila-label",children:v===M.id?s.jsx("input",{className:"form-control form-control-sm",value:M.label,onChange:q=>D(M.id,"label",q.target.value)}):M.label}),s.jsx("div",{className:"fila-valor",children:v===M.id?s.jsx("textarea",{className:"form-control form-control-sm",value:M.valor,onChange:q=>D(M.id,"valor",q.target.value)}):_(M.valor)}),s.jsxs("div",{className:"acciones",children:[s.jsx("i",{className:`bi ${M.importante?"bi-bookmark-star-fill text-danger":"bi-bookmark-star text-secondary"} accion-icon`,title:"Marcar como importante",onClick:()=>O(M.id)}),s.jsx("i",{className:`bi ${v===M.id?"bi-check-circle-fill text-success":"bi-pencil-square text-primary"} accion-icon`,title:"Editar",onClick:()=>b(v===M.id?null:M.id)}),s.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{C(M.id),E(!0)}})]})]},M.id)),!h&&o.length===0&&s.jsx("div",{className:"text-center p-5 text-muted bg-white border rounded",children:"No hay datos tributarios registrados."})]})]}),s.jsx(ga,{show:k,onHide:()=>E(!1),title:"Eliminar dato tributario",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar el registro"," ","?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:L}),s.jsx(yn,{show:h&&o.length>0})]})}function lT({show:n,onHide:a,registro:o,onUpdated:l}){const{editRegistroProducto:u}=Jo(),{errors:d,validateField:p,validateForm:g,clearError:h,clearErrors:v}=Vo(),[b,x]=m.useState(!1),[w,S]=m.useState({entidad:"",nombreProducto:"",descripcion:"",tipo:""});m.useEffect(()=>{o&&n&&S({entidad:o.entidad||"",nombreProducto:o.nombreProducto||"",descripcion:o.descripcion||"",tipo:o.tipo||""})},[o,n]);const C=O=>{const{name:N,value:D}=O.target;S(L=>({...L,[N]:D})),p(N,D),h(N)},k=async O=>{if(O.preventDefault(),v(),!!g(w)){x(!0);try{if(!o?.registroId)return;const D={registroId:o.registroId,nombreProducto:vt(w.nombreProducto),descripcion:vt(w.descripcion),entidad:vt(w.entidad),tipo:vt(w.tipo)},L=await u(D);if(L.ok&&(l(L.registro),a()),!L.ok)throw new Error("Error al guardar registro producto")}catch(D){console.log(D)}finally{x(!1)}}},E=()=>{o&&S({entidad:o.entidad||"",nombreProducto:o.nombreProducto||"",descripcion:o.descripcion||"",tipo:o.tipo||""}),v(),a()};return s.jsxs(ye,{show:n,onHide:a,backdrop:"static",centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:"✏️ Editar registro año"})}),s.jsxs(ye.Body,{children:[s.jsx(Fo,{errors:d}),s.jsxs(ae,{children:[s.jsxs(ae.Group,{className:"mb-2",children:[s.jsx(ae.Label,{children:"Entidad"}),s.jsx(ae.Control,{name:"entidad",value:w.entidad,onChange:C,onBlur:O=>p("entidad",O.target.value),placeholder:"Ej: Banco de Bogotá, Sura, Ecopetrol"})]}),s.jsxs(ae.Group,{className:"mb-2",children:[s.jsx(ae.Label,{children:"Nombre del producto"}),s.jsx(ae.Control,{name:"nombreProducto",value:w.nombreProducto,onChange:C,onBlur:O=>p("nombreProducto",O.target.value),placeholder:"Ej: Tarjeta 6992, Cta 1108"})]}),s.jsxs(ae.Group,{className:"mb-2",children:[s.jsx(ae.Label,{children:"Tipo"}),s.jsx(ae.Control,{name:"tipo",value:w.tipo,onChange:C,onBlur:O=>p("tipo",O.target.value),placeholder:"Ej: Salud, Deuda, Certificado"})]}),s.jsxs(ae.Group,{className:"mb-2",children:[s.jsx(ae.Label,{children:"Descripción"}),s.jsx(ae.Control,{as:"textarea",rows:3,name:"descripcion",value:w.descripcion,onChange:C,onBlur:O=>p("descripcion",O.target.value),placeholder:"Ej: Extracto bancario, póliza, certificado"})]})]}),s.jsx(yn,{show:b})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:E,disabled:b,children:"Cancelar"}),s.jsx(Oe,{variant:"primary",onClick:k,disabled:b,children:b?s.jsxs(s.Fragment,{children:[s.jsx(St,{size:"sm"})," Guardando..."]}):"Guardar cambios"})]})]})}const Bb=({isMobile:n})=>n?s.jsx("div",{className:"archivo-card skeleton-card-contador",children:s.jsxs("div",{className:"accordion-header d-flex align-items-center p-3",children:[s.jsx("div",{className:"skeleton-circle me-3"}),s.jsxs("div",{className:"flex-grow-1",children:[s.jsx("div",{className:"skeleton-bar mb-2",style:{width:"60%"}}),s.jsx("div",{className:"skeleton-bar",style:{width:"40%"}})]}),s.jsx("div",{className:"skeleton-bar",style:{width:"15px",height:"15px"}})]})}):s.jsxs("tr",{className:"contador-skeleton-row",children:[s.jsx("td",{className:"icono",children:s.jsx("div",{className:"skeleton-circle"})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"80%"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"60%"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"90%"}})}),s.jsx("td",{className:"acciones",children:s.jsx("div",{className:"skeleton-bar",style:{width:"40px"}})})]});function cT(){const{puede:n}=ha(),a=n("editarRegistroProducto"),o=n("eliminarRegistroProducto"),l=window.innerWidth<768,{fetchArchivosPorAnio:u,deleteRegistroProducto:d}=Jo(),[p,g]=m.useState(!1),[h,v]=m.useState(null),[b,x]=m.useState(!1),[w,S]=m.useState(!1),C=In(),k=new Date().getFullYear(),[E,O]=m.useState(k-1),[N,D]=m.useState([]),[L,z]=m.useState(!0),[_,M]=m.useState({entidad:"",nombreProducto:"",tipo:""}),[R,q]=m.useState(null),Q=V=>{q(R===V?null:V)},re=m.useCallback(async V=>{try{g(!0);const A=await u(V);D(A||[])}catch(A){console.error("❌ Error cargando archivos:",A)}finally{g(!1)}},[u]);m.useEffect(()=>{M({entidad:"",nombreProducto:"",tipo:""}),re(E),z(!1)},[E,re,C]);const oe=V=>{if(!V)return"📄";switch(V.split(".").pop().toLowerCase()){case"pdf":return s.jsx("span",{className:"icon-pdf"});case"doc":return s.jsx("span",{className:"icon-microsoftword"});case"docx":return s.jsx("span",{className:"icon-microsoftword"});case"xls":return s.jsx("span",{className:"icon-excel"});case"xlsx":return s.jsx("span",{className:"icon-excel"});case"ppt":case"pptx":return"📽️";case"jpg":return s.jsx("span",{className:"icon-jpg"});case"jpeg":return s.jsx("span",{className:"icon-JPEG"});case"png":return s.jsx("span",{className:"icon-png"});case"gif":return"🖼️";case"txt":return s.jsx("span",{className:"icon-texto"});case"zip":case"rar":return"🗜️";default:return"📄"}},ie=V=>(V||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),J=N.filter(V=>{const A=ie(V.entidad),I=ie(V.nombreProducto),ne=ie(V.tipo);return(_.entidad?A===_.entidad:!0)&&(_.nombreProducto?I===_.nombreProducto:!0)&&(_.tipo?ne===_.tipo:!0)}).sort((V,A)=>ie(V.entidad).localeCompare(ie(A.entidad))),le=[...new Map(N.map(V=>[ie(V.entidad),{value:ie(V.entidad),label:(V.entidad||"").trim()}])).values()],$=[...new Map(J.map(V=>[ie(V.nombreProducto),{value:ie(V.nombreProducto),label:(V.nombreProducto||"").trim()}])).values()],ee=[...new Map(J.map(V=>[ie(V.tipo),{value:ie(V.tipo),label:(V.tipo||"").trim()}])).values()];if(L)return s.jsx("div",{className:"text-center p-5",children:s.jsx("p",{children:"Verificando sesión..."})});const Y=async()=>{if(!h)return;(await d(h.registroId)).ok&&D(A=>A.filter(I=>I.registroId!==h.registroId)),S(!1),v(null)};return s.jsxs("div",{className:"contador-container",children:[s.jsxs("div",{className:"container mt-4",children:[s.jsxs("h2",{className:"mb-3",children:["📂 Archivos del año ",E]}),s.jsxs("div",{className:"mb-3",children:[s.jsx("label",{children:"Año:"}),s.jsx("select",{value:E,onChange:V=>O(V.target.value),className:"form-select w-auto d-inline ms-2",children:Array.from({length:15}).map((V,A)=>{const I=k-A;return s.jsx("option",{value:I,children:I},I)})})]}),l?s.jsx("div",{className:"accordion-mobile",children:p?Array.from({length:6}).map((V,A)=>s.jsx(Bb,{isMobile:!0},`skel-m-${A}`)):J.length===0?s.jsx("p",{className:"text-center p-4",children:"No hay archivos para este año."}):J.map((V,A)=>s.jsxs("div",{className:"archivo-card",children:[s.jsxs("div",{className:"accordion-header",onClick:()=>Q(A),children:[s.jsx("span",{className:"icono",children:oe(V.nombreArchivo)}),s.jsxs("div",{className:"ms-2 flex-grow-1",children:[s.jsx("div",{className:"fw-bold",children:V.entidad}),s.jsx("div",{className:"text-muted small",children:V.nombreProducto})]}),s.jsx("span",{className:"arrow",children:R===A?"▲":"▼"})]}),R===A&&s.jsxs("div",{className:"accordion-body",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Entidad:"})," ",V.entidad]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Producto:"})," ",V.nombreProducto]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Tipo:"})," ",V.tipo]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Descripción:"})," ",V.descripcion||"-"]}),s.jsxs("div",{className:"acciones",children:[s.jsx("i",{className:`bi bi-pencil-square accion-icon ${a?"":"disabled-icon"}`,title:a?"Editar":"No tienes permisos para editar",onClick:I=>{a&&(I.stopPropagation(),v(V),x(!0))}}),s.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${o?"":"disabled-icon"}`,title:o?"Eliminar":"No tienes permisos para eliminar",onClick:I=>{o&&(I.stopPropagation(),v(V),S(!0))}})]}),s.jsx("button",{className:"btn btn-primary btn-sm w-100 mt-2",onClick:()=>window.open(V.link,"_blank"),children:"📄 Abrir archivo1"})]})]},V.registroId))}):s.jsx("div",{className:"table-responsive archivos-por-anio",children:s.jsxs("table",{className:"table table-bordered table-hover",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{className:"thicon"}),s.jsxs("th",{children:["Entidad",s.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:p,value:_.entidad,onChange:V=>M({..._,entidad:V.target.value}),children:[s.jsx("option",{value:"",children:"Todas"}),!p&&le.map(V=>s.jsx("option",{value:V.value,children:V.label},V.value))]})]}),s.jsxs("th",{children:["Nombre del producto",s.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:p,value:_.nombreProducto,onChange:V=>M({..._,nombreProducto:V.target.value}),children:[s.jsx("option",{value:"",children:"Todos"}),!p&&$.map(V=>s.jsx("option",{value:V.value,children:V.label},V.value))]})]}),s.jsxs("th",{children:["Tipo",s.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:p,value:_.tipo,onChange:V=>M({..._,tipo:V.target.value}),children:[s.jsx("option",{value:"",children:"Todos"}),!p&&ee.map(V=>s.jsx("option",{value:V.value,children:V.label},V.value))]})]}),s.jsx("th",{children:"Descripción"}),s.jsx("th",{className:"th-acciones"})]})}),s.jsx("tbody",{children:p?Array.from({length:8}).map((V,A)=>s.jsx(Bb,{isMobile:!1},`skel-d-${A}`)):J.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"6",className:"text-center p-4",children:"No hay archivos para este año."})}):J.map(V=>s.jsxs("tr",{onClick:()=>window.open(V.link,"_blank"),children:[s.jsx("td",{className:"icono",children:oe(V.nombreArchivo)}),s.jsx("td",{children:V.entidad||"-"}),s.jsx("td",{children:V.nombreProducto}),s.jsx("td",{children:V.tipo||"-"}),s.jsx("td",{children:V.descripcion||"-"}),s.jsxs("td",{className:"acciones",children:[s.jsx("i",{className:`bi bi-pencil-square accion-icon ${a?"":"disabled-icon"}`,title:a?"Editar":"No tienes permisos para editar",onClick:A=>{a&&(A.stopPropagation(),v(V),x(!0))}}),s.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${o?"":"disabled-icon"}`,title:o?"Eliminar":"No tienes permisos para eliminar",onClick:A=>{o&&(A.stopPropagation(),v(V),S(!0))}})]})]},V.registroId))})]})})]}),s.jsx(ga,{show:w,onHide:()=>S(!1),title:"Eliminar registro",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar el producto nombre"," ",s.jsx("strong",{children:h?.nombreProducto})," entidad"," ",s.jsx("strong",{children:h?.entidad}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:Y}),s.jsx(lT,{show:b,onHide:()=>x(!1),registro:h,onUpdated:V=>{D(A=>A.map(I=>I.registroId===V.registroId?{...I,...V}:I))}})]})}function uT({onClose:n,onSaved:a}){const{subirFactura:o}=zm(),{getProductos:l}=Jo(),{errors:u,validateField:d,validateForm:p,clearErrors:g,clearError:h}=Vo(),[v,b]=m.useState(!1),[x,w]=m.useState(!0),[S,C]=m.useState({anio:new Date().getFullYear(),entidad:"",descripcion:"",valor:"",metodoPago:"",archivo:null}),[k,E]=m.useState([]),O=R=>{const{name:q,value:Q}=R.target;C(re=>({...re,[q]:Q})),d(q,Q)},N=R=>{const q=R.target.files[0];C(Q=>({...Q,archivo:q})),d("archivo",q)},D=R=>R.toLowerCase().split(" ").map(q=>q.charAt(0).toUpperCase()+q.slice(1)).join(" "),L=R=>R?new Intl.NumberFormat("es-CO").format(R):"";m.useEffect(()=>{async function R(){w(!0);const q=await l(),re=(q?.data||q||[]).filter(oe=>oe.nombre?.toLowerCase().startsWith("tarjeta")).map(oe=>{const ie=D(oe.nombre),J=oe.entidad?D(oe.entidad):"";return J?`${J} - ${ie}`:ie});E(re),w(!1)}R()},[l]);const z=["Tarjeta Débito","Tarjeta Crédito","Transferencia","Efectivo","Bre-B","Nequi","Daviplata"],_=Array.from(new Set([...z,...k])).sort((R,q)=>{const Q=R.toLowerCase().startsWith("tarjeta"),re=q.toLowerCase().startsWith("tarjeta");return Q&&!re?-1:!Q&&re?1:R.localeCompare(q)}),M=async()=>{if(g(),!p(S))return;b(!0);const q={...S,entidad:vt(S.entidad),descripcion:S.descripcion?vt(S.descripcion):"",metodoPago:vt(S.metodoPago),file:S.archivo},Q=await o(q);b(!1),Q.ok?(a?.(),n()):console.log("respuesta facturas",Q)};return s.jsx("div",{className:"Add-Factura-Modal",children:s.jsx("div",{className:"modal-backdrop",children:s.jsxs("div",{className:"modal-content",children:[s.jsx("h4",{children:"Subir factura"}),s.jsx(Fo,{errors:u}),s.jsx("label",{children:"Archivo de la Factura"}),s.jsxs("div",{className:"d-flex flex-column gap-2",children:[s.jsx("input",{type:"file",id:"fileInput",accept:"image/*,application/pdf",className:"d-none",onChange:N}),S.archivo?s.jsxs("div",{className:"alert alert-success d-flex justify-content-between align-items-center p-2 mb-0",children:[s.jsxs("small",{className:"text-truncate",children:["✅ ",S.archivo.name]}),s.jsx("button",{className:"btn btn-sm btn-link text-danger",onClick:()=>C(R=>({...R,archivo:null})),children:"Cambiar"})]}):s.jsxs("button",{type:"button",className:"btn btn-outline-info w-100 d-flex align-items-center justify-content-center gap-2",onClick:()=>document.getElementById("fileInput").click(),children:[s.jsx("i",{className:"bi bi-camera"}),"Escanear o Seleccionar Archivo"]})]}),s.jsx("label",{children:"Año"}),s.jsx("input",{list:"listaAnios",className:"form-control",name:"anio",value:S.anio,onChange:R=>{O(R),h("anio")},onBlur:R=>d("anio",R.target.value)}),s.jsx("datalist",{id:"listaAnios",children:Array.from({length:10}).map((R,q)=>{const Q=new Date().getFullYear()-q;return s.jsx("option",{value:Q},Q)})}),s.jsx("label",{children:"Entidad"}),s.jsx("input",{className:"form-control",name:"entidad",onChange:R=>{O(R),h("entidad")},onBlur:R=>d("entidad",R.target.value)}),s.jsx("label",{children:"Descripción"}),s.jsx("input",{className:"form-control",name:"descripcion",onChange:R=>{O(R),h("descripcion")},onBlur:R=>d("descripcion",R.target.value)}),s.jsx("label",{children:"Valor (COP)"}),s.jsx("input",{type:"text",className:"form-control",name:"valor",value:S.valor?L(S.valor):"",onChange:R=>{const q=R.target.value.replace(/\D/g,"");C(Q=>({...Q,valor:q})),d("valor",q),h("valor")},onBlur:()=>d("valor",S.valor)}),s.jsx("label",{children:"Método de Pago"}),s.jsx("select",{className:"form-control",name:"metodoPago",value:S.metodoPago,disabled:x,onChange:R=>{O(R),h("metodoPago")},onBlur:R=>d("metodoPago",R.target.value),children:x?s.jsx("option",{children:"Cargando..."}):s.jsxs(s.Fragment,{children:[s.jsx("option",{value:"",children:"Seleccione..."}),_.map(R=>s.jsx("option",{value:R,children:R},R))]})}),s.jsxs("div",{className:"mt-3 d-flex gap-2",children:[s.jsx("button",{className:"btn btn-primary",onClick:M,children:v?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm"})," Guardando..."]}):"Subir"}),s.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Cancelar"})]}),s.jsx(yn,{show:v})]})})})}function dT({show:n,onHide:a,factura:o,onUpdated:l}){const{updateFactura:u}=zm(),{getProductos:d}=Jo(),[p,g]=m.useState(!1),[h,v]=m.useState(!0),[b,x]=m.useState([]),[w,S]=m.useState({entidad:"",descripcion:"",valor:"",metodoPago:"",registroId:""}),C=L=>L.toLowerCase().split(" ").map(z=>z.charAt(0).toUpperCase()+z.slice(1)).join(" "),k=L=>L?new Intl.NumberFormat("es-CO").format(L):"",E=["Tarjeta Débito","Tarjeta Crédito","Transferencia","Efectivo","Bre-B","Nequi","Daviplata"];m.useEffect(()=>{o&&S({registroId:o.registroId,entidad:o.entidad||"",descripcion:o.descripcion||"",valor:o.valor||"",metodoPago:o.metodoPago||""})},[o]),m.useEffect(()=>{async function L(){v(!0);try{const z=await d(),M=(z?.data||z||[]).filter(R=>R.nombre?.toLowerCase().startsWith("tarjeta")).map(R=>{const q=C(R.nombre),Q=R.entidad?C(R.entidad):"";return Q?`${Q} - ${q}`:q});x(M)}catch(z){console.error("Error cargando métodos:",z)}finally{v(!1)}}n&&L()},[d,n]);const O=Array.from(new Set([...E,...b,w.metodoPago])).filter(Boolean).sort((L,z)=>{const _=L.toLowerCase().startsWith("tarjeta"),M=z.toLowerCase().startsWith("tarjeta");return _&&!M?-1:!_&&M?1:L.localeCompare(z)}),N=L=>{const{name:z,value:_}=L.target;if(z==="valor"){const M=_.replace(/\D/g,"");S(R=>({...R,[z]:M}))}else S(M=>({...M,[z]:_}))},D=async()=>{g(!0);const L={...w,entidad:vt(w.entidad),descripcion:w.descripcion?vt(w.descripcion):"",metodoPago:vt(w.metodoPago)},z=await u(L);z.ok?(g(!1),l(),a()):(g(!1),alert(z.mensaje||"Error al actualizar la factura"))};return o?s.jsx("div",{className:"edit-factura-modal",children:s.jsxs(ye,{show:n,onHide:a,centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:"✏️ Editar factura"})}),s.jsxs(ye.Body,{children:[s.jsxs(ae,{children:[s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{children:"Entidad"}),s.jsx(ae.Control,{type:"text",name:"entidad",value:w.entidad,onChange:N})]}),s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{children:"Descripción"}),s.jsx(ae.Control,{type:"text",name:"descripcion",value:w.descripcion,onChange:N})]}),s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{children:"Valor (COP)"}),s.jsx(ae.Control,{type:"text",name:"valor",placeholder:"Ej: 25.000",value:w.valor?k(w.valor):"",onChange:N})]}),s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{children:"Método de pago"}),s.jsx(ae.Select,{name:"metodoPago",value:w.metodoPago||"",onChange:N,disabled:h,children:h?s.jsx("option",{children:"Cargando métodos..."}):s.jsxs(s.Fragment,{children:[s.jsx("option",{value:"",children:"Seleccione..."}),O.map(L=>s.jsx("option",{value:L,children:L},L))]})})]})]}),s.jsx(yn,{show:p})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),s.jsx(Oe,{variant:"primary",onClick:D,disabled:p,children:p?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Guardando..."]}):"Guardar cambios"})]})]})}):null}const zb=({isMobile:n})=>n?s.jsxs("div",{className:"factura-card skeleton-card-mobile",children:[s.jsxs("div",{className:"card-top",children:[s.jsx("div",{className:"skeleton-bar",style:{width:"40%"}}),s.jsx("div",{className:"skeleton-bar",style:{width:"30%"}})]}),s.jsx("div",{className:"skeleton-bar mt-3",style:{width:"90%"}}),s.jsxs("div",{className:"acciones-mobile mt-3",children:[s.jsx("div",{className:"skeleton-square"}),s.jsx("div",{className:"skeleton-circle"})]})]}):s.jsxs("tr",{className:"factura-skeleton-row",children:[s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"250px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"80px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"100px"}})}),s.jsx("td",{className:"acciones",children:s.jsx("div",{className:"skeleton-bar",style:{width:"40px"}})})]});function fT(){const{puede:n}=ha(),a=n("obtenerFacturasPorAnio"),o=n("subirArchivoFacturas"),l=n("actualizarFactura"),u=n("eliminarFactura"),d=window.innerWidth<768,p=new Date().getFullYear(),{loading:g,fetchFacturasPorAnio:h,deleteFactura:v}=zm(),[b,x]=m.useState(p),[w,S]=m.useState([]),[C,k]=m.useState(!1),[E,O]=m.useState(""),[N,D]=m.useState(""),[L,z]=m.useState(!1),[_,M]=m.useState(null),[R,q]=m.useState(!1);m.useEffect(()=>{if(!a){S([]);return}h(b).then(S)},[b,h,a]);const Q=m.useMemo(()=>w.filter(Y=>!E||Y.entidad===E).filter(Y=>!N||Y.metodoPago===N).reduce((Y,V)=>Y+Number(V.valor||0),0),[w,E,N]),re=m.useMemo(()=>w.filter(Y=>!E||Y.entidad===E).filter(Y=>!N||Y.metodoPago===N),[w,E,N]),oe=Y=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(Y),ie=Y=>{window.open(Y.link,"_blank")},J=async()=>{if(!_)return;(await v(_.registroId)).ok&&S(V=>V.filter(A=>A.registroId!==_.registroId)),z(!1),M(null)},le=[...new Set(w.map(Y=>Y.entidad))],$=[...new Set(w.map(Y=>Y.metodoPago))],ee=()=>{h(b).then(S)};return s.jsxs("div",{className:"container mt-4 facturas-container",children:[s.jsxs("div",{className:"header-flex",children:[s.jsxs("h2",{children:["🧾 Facturas ",b]}),s.jsxs("div",{className:"d-flex align-items-center gap-3",children:[s.jsxs("strong",{children:["Total: ",oe(Q)]}),!d&&s.jsx("button",{disabled:!o,className:"btn btn-primary",onClick:()=>k(!0),children:"➕ Subir factura"})]})]}),a?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"filtros d-flex gap-2 my-3",children:[s.jsx("select",{className:"form-select w-auto",value:b,onChange:Y=>x(Y.target.value),children:Array.from({length:10}).map((Y,V)=>{const A=p-V;return s.jsx("option",{children:A},A)})}),s.jsxs("select",{className:"form-select w-auto",value:E,onChange:Y=>O(Y.target.value),children:[s.jsx("option",{value:"",children:"Todas las entidades"}),le.map(Y=>s.jsx("option",{value:Y,children:Y},Y))]}),s.jsxs("select",{className:"form-select w-auto",value:N,onChange:Y=>D(Y.target.value),children:[s.jsx("option",{value:"",children:"Todos los métodos"}),$.map(Y=>s.jsx("option",{value:Y,children:Y},Y))]})]}),g?d?s.jsx("div",{className:"facturas-mobile",children:Array.from({length:5}).map((Y,V)=>s.jsx(zb,{isMobile:!0},V))}):s.jsx("div",{className:"table-responsive facturas-por-anio",children:s.jsxs("table",{className:"table table-bordered",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Entidad"}),s.jsx("th",{children:"Descripción"}),s.jsx("th",{children:"Valor"}),s.jsx("th",{children:"Método"}),s.jsx("th",{})]})}),s.jsx("tbody",{children:Array.from({length:5}).map((Y,V)=>s.jsx(zb,{isMobile:!1},V))})]})}):re.length===0?s.jsx("div",{className:"Facturas-Loading-CargandoFacturas",children:s.jsx("p",{children:"No hay facturas con esos filtros."})}):s.jsxs(s.Fragment,{children:[!d&&s.jsx("div",{className:"table-responsive facturas-por-anio",children:s.jsxs("table",{className:"table table-bordered table-hover",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Entidad"}),s.jsx("th",{children:"Descripción"}),s.jsx("th",{children:"Valor"}),s.jsx("th",{children:"Método"}),s.jsx("th",{})]})}),s.jsx("tbody",{children:re.map(Y=>s.jsxs("tr",{children:[s.jsx("td",{onClick:()=>ie(Y),children:Y.entidad}),s.jsx("td",{onClick:()=>ie(Y),children:Y.descripcion}),s.jsx("td",{onClick:()=>ie(Y),children:oe(Y.valor)}),s.jsx("td",{onClick:()=>ie(Y),children:Y.metodoPago}),s.jsxs("td",{className:"acciones",children:[s.jsx("i",{className:`bi bi-pencil-square accion-icon ${l?"":"disabled-icon"}`,title:l?"Editar":"No tienes permisos para editar",onClick:()=>{l&&(M(Y),q(!0))}}),s.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${u?"":"disabled-icon"}`,title:u?"Eliminar":"No tienes permisos para eliminar",onClick:()=>{u&&(M(Y),z(!0))}})]})]},Y.registroId))})]})}),d&&s.jsx("div",{className:"facturas-mobile",children:re.map(Y=>s.jsxs("div",{className:"factura-card",onClick:()=>ie(Y),children:[s.jsxs("div",{className:"card-top",children:[s.jsx("div",{className:"entidad",children:Y.entidad}),s.jsx("div",{className:"valor",children:oe(Y.valor)})]}),s.jsx("div",{className:"descripcion",children:Y.descripcion}),s.jsxs("div",{className:"acciones-mobile",children:[s.jsx("i",{className:`bi bi-pencil-square accion-icon ${l?"":"disabled-icon"}`,title:l?"Editar":"No tienes permisos para editar",onClick:V=>{V.stopPropagation(),l&&(M(Y),q(!0))}}),s.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${u?"":"disabled-icon"}`,title:u?"Eliminar":"No tienes permisos para eliminar",onClick:V=>{V.stopPropagation(),u&&(M(Y),z(!0))}})]})]},Y.registroId))})]})]}):s.jsx("div",{className:"Facturas-Loading-CargandoFacturas",children:s.jsx("p",{children:"No tienes permisos para visualizar facturas."})}),d&&o&&s.jsx("button",{className:"fab-subir",onClick:()=>k(!0),children:s.jsx("i",{className:"bi bi-plus-lg"})}),C&&o&&s.jsx(uT,{onClose:()=>k(!1),onSaved:ee}),s.jsx(ga,{show:L,onHide:()=>z(!1),title:"Eliminar factura",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar la factura de"," ",s.jsx("strong",{children:_?.entidad})," por"," ",s.jsx("strong",{children:oe(_?.valor||0)}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:J}),s.jsx(dT,{show:R,factura:_,onHide:()=>q(!1),onUpdated:ee})]})}const mT=()=>{const n=In();return s.jsxs("div",{className:"legal-container",children:[s.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[s.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),s.jsx("h1",{children:"Política de Privacidad"}),s.jsx("p",{children:"Última actualización: 20 de enero de 2026"}),s.jsxs("p",{children:["Esta Política de Privacidad describe cómo ",s.jsx("strong",{children:"AppDeclaración"})," recopila, utiliza y protege su información al utilizar nuestro servicio de autenticación a través de Google."]}),s.jsxs("div",{class:"highlight",children:[s.jsx("strong",{children:"Nota importante sobre la arquitectura:"})," Esta aplicación es una herramienta descentralizada. Los datos que usted genera se almacenan exclusivamente en su propia cuenta de Google Drive a través de su implementación personal de Google Apps Script. Nosotros no tenemos acceso a sus archivos ni a su información privada."]}),s.jsx("h2",{children:"1. Información que recopilamos"}),s.jsx("p",{children:"Nuestra aplicación utiliza los servicios de Google OAuth para la autenticación. Al iniciar sesión, solicitamos acceso a:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Dirección de correo electrónico:"})," Para identificar su cuenta y gestionar los permisos de acceso."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Información básica de perfil (Nombre y foto):"})," Para personalizar su experiencia dentro de la interfaz."]})]}),s.jsx("h2",{children:"1.1 Información que NO recopilamos"}),s.jsx("p",{children:"AppDeclaración no recopila, almacena ni procesa:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Contraseñas de Google."}),s.jsx("li",{children:"Contenido de correos electrónicos."}),s.jsx("li",{children:"Archivos personales fuera del entorno creado por la aplicación."}),s.jsx("li",{children:"Información bancaria, financiera o datos de pago."})]}),s.jsx("h2",{children:"2. Uso de la información"}),s.jsx("p",{children:"La información obtenida a través de Google se utiliza únicamente para:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Validar su identidad y permitir el acceso a las funciones del backend."}),s.jsx("li",{children:"Registrar logs de auditoría de inicio de sesión (almacenados en su propio Google Drive)."}),s.jsx("li",{children:"Garantizar que el sistema de permisos y roles funcione correctamente."})]}),s.jsx("h2",{children:"3. Almacenamiento de datos"}),s.jsxs("p",{children:["Todos los datos operativos (usuarios, logs, configuraciones y archivos) se almacenan en archivos JSON dentro de la infraestructura de ",s.jsx("strong",{children:"Google Drive del usuario"}),". Esta aplicación no posee una base de datos centralizada y los desarrolladores no pueden ver, editar ni eliminar sus datos."]}),s.jsx("h2",{children:"4. Intercambio de datos con terceros"}),s.jsxs("p",{children:[s.jsx("strong",{children:"No vendemos, alquilamos ni compartimos"})," su información personal con terceros."]}),s.jsx("p",{children:"El frontend de la aplicación puede estar alojado en plataformas como GitHub Pages, las cuales únicamente sirven contenido estático y no tienen acceso a información personal, datos de autenticación ni archivos del usuario."}),s.jsx("p",{children:"Los datos solo fluyen entre su navegador, el frontend alojado en GitHub y su backend personal en Google Apps Script."}),s.jsx("h2",{children:"5. Seguridad"}),s.jsx("p",{children:"La seguridad de su información se apoya en los protocolos y estándares de seguridad proporcionados por Google. Al utilizar OAuth 2.0, la aplicación no conoce, no solicita ni almacena su contraseña de Google en ningún momento."}),s.jsx("h2",{children:"6. Sus Derechos"}),s.jsxs("p",{children:["Usted puede revocar el acceso de esta aplicación a su cuenta de Google en cualquier momento a través de la configuración de seguridad de su cuenta de Google en: ",s.jsx("a",{href:"https://myaccount.google.com/permissions",target:"_blank",children:"Google - Aplicaciones con acceso a tu cuenta"}),"."]}),s.jsx("h2",{children:"7. Cambios a esta Política de Privacidad"}),s.jsx("p",{children:"Esta Política de Privacidad puede actualizarse ocasionalmente para reflejar mejoras técnicas o cambios normativos. Cualquier modificación será publicada en esta misma página con la fecha de última actualización correspondiente."}),s.jsx("h2",{children:"8. Contacto"}),s.jsxs("p",{children:["Si tiene preguntas sobre esta política, puede contactarnos en: ",s.jsx("strong",{children:"hectorjaviermorenoh@gmail.com"})]})]})},pT=()=>{const n=In();return s.jsxs("div",{className:"terminos-container",children:[s.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[s.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),s.jsx("h1",{children:"Términos y Condiciones de Uso"}),s.jsx("p",{children:"Última actualización: 20 de enero de 2026"}),s.jsxs("div",{class:"notice",children:[s.jsx("strong",{children:"Aviso Importante sobre la Arquitectura del Servicio:"}),s.jsx("br",{}),"AppDeclaración es una aplicación descentralizada. El frontend es centralizado, pero el backend, el procesamiento de datos y el almacenamiento se ejecutan de forma privada dentro de la cuenta personal de Google del usuario, mediante Google Apps Script y Google Drive."]}),s.jsx("h2",{children:"1. Aceptación de los Términos"}),s.jsx("p",{children:"Al acceder, instalar o utilizar AppDeclaración, usted acepta quedar legalmente vinculado a los presentes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, debe abstenerse de utilizar la aplicación."}),s.jsx("h2",{children:"2. Descripción del Servicio"}),s.jsx("p",{children:"AppDeclaración es una herramienta de organización documental y gestión tributaria personal, orientada a facilitar la preparación y el control de información relacionada con declaraciones de renta y soportes fiscales."}),s.jsx("p",{children:"La aplicación permite, entre otras funciones:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Registrar y clasificar entidades emisoras de certificados y documentos tributarios."}),s.jsx("li",{children:"Organizar automáticamente archivos y fotografías en carpetas estructuradas por año gravable y categoría."}),s.jsx("li",{children:"Gestionar datos fiscales básicos como NIT, nombres e identificaciones."}),s.jsx("li",{children:"Administrar accesos mediante tokens y roles definidos por el propio usuario."}),s.jsx("li",{children:"Generar respaldos completos (backups) en formato ZIP de la información almacenada."})]}),s.jsxs("p",{children:["El software se entrega ",s.jsx("strong",{children:"“tal cual”"})," y su funcionamiento depende de que el usuario mantenga una cuenta de Google activa y correctamente configurada."]}),s.jsx("h2",{children:"3. Responsabilidad del Usuario"}),s.jsx("p",{children:"El usuario acepta y reconoce que es el único y exclusivo responsable de:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"La correcta instalación, despliegue y mantenimiento del backend en su cuenta de Google Apps Script."}),s.jsx("li",{children:"La integridad, disponibilidad y confidencialidad de los archivos y carpetas generados en su Google Drive."}),s.jsx("li",{children:"La veracidad y exactitud de la información tributaria ingresada."}),s.jsx("li",{children:"El cumplimiento de las leyes tributarias y fiscales aplicables en su jurisdicción."})]}),s.jsxs("div",{class:"warning",children:[s.jsx("h2",{children:"4. Integridad del Código y Seguridad del Script"}),s.jsx("p",{children:"Para garantizar la seguridad de su información y el correcto funcionamiento del sistema, el usuario se compromete a cumplir las siguientes normas de seguridad técnica:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Origen Oficial:"})," El código de Backend (Google Apps Script) debe ser obtenido exclusivamente desde la aplicación oficial de ",s.jsx("strong",{children:"AppDeclaración"}),". No utilice códigos proporcionados por terceros, foros o fuentes no oficiales."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Prohibición de Alteración:"})," El usuario no debe modificar, editar ni alterar el código fuente proporcionado para el backend. Cualquier cambio manual puede introducir fallos de seguridad, pérdida de datos o comportamientos imprevistos."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Ejecución por el Propietario:"})," El despliegue y ejecución del script en el entorno de Google Apps Script debe ser realizado personalmente por el dueño de la cuenta de Google. No permita que terceros accedan a su entorno de desarrollo para pegar o ejecutar códigos en su nombre."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Prevención de Código Malicioso:"}),' El uso de versiones modificadas o "clones" de la aplicación representa un riesgo crítico de seguridad. El desarrollador original no se hace responsable de las consecuencias derivadas del uso de código alterado o distribuido por canales ajenos a la aplicación oficial.']})]})]}),s.jsx("h2",{children:"5. Seguridad de la Cuenta de Google"}),s.jsx("p",{children:"Dado que AppDeclaración opera íntegramente sobre la infraestructura personal del usuario, este reconoce que:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Es plenamente responsable de la seguridad de su cuenta de Google."}),s.jsx("li",{children:"Debe proteger sus credenciales de acceso y no compartirlas con terceros."}),s.jsxs("li",{children:["Se recomienda de forma expresa habilitar mecanismos de seguridad adicionales, como la ",s.jsx("strong",{children:"autenticación en dos pasos (2FA)"}),"."]}),s.jsx("li",{children:"Cualquier acceso no autorizado derivado de una configuración insegura de la cuenta es responsabilidad exclusiva del usuario."})]}),s.jsx("p",{children:"El desarrollador no tiene acceso, control ni visibilidad sobre las credenciales, datos o archivos almacenados en la cuenta del usuario."}),s.jsx("h2",{children:"6. Privacidad y Datos"}),s.jsx("p",{children:"AppDeclaración no utiliza bases de datos centralizadas ni almacena información en servidores controlados por el desarrollador. Toda la información reside exclusivamente en archivos locales del Google Drive del usuario, tales como:"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("code",{children:"productos.json"})}),s.jsx("li",{children:s.jsx("code",{children:"bddatos.json"})}),s.jsx("li",{children:s.jsx("code",{children:"facturas.json"})}),s.jsx("li",{children:"y otros archivos generados por la aplicación"})]}),s.jsx("h2",{children:"7. Limitación de Responsabilidad"}),s.jsx("p",{children:"Bajo ninguna circunstancia el desarrollador será responsable por:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Pérdida, corrupción o eliminación de datos almacenados en la cuenta del usuario."}),s.jsxs("li",{children:["Errores derivados de información incorrecta o ",s.jsx("strong",{children:"código de backend modificado"})," por el usuario."]}),s.jsx("li",{children:"Interrupciones del servicio ocasionadas por cambios, fallos o políticas de Google Cloud, Google Drive, Apps Script o GitHub."}),s.jsx("li",{children:"Daños directos o indirectos derivados del uso o imposibilidad de uso de la aplicación."})]}),s.jsx("h2",{children:"8. Modificaciones del Servicio"}),s.jsx("p",{children:"El desarrollador podrá actualizar el frontend para mejoras o correcciones. La actualización del backend desplegado en la cuenta del usuario es responsabilidad exclusiva de este último."}),s.jsx("h2",{children:"9. Propiedad Intelectual"}),s.jsxs("p",{children:["El código fuente, diseño y concepto de AppDeclaración son propiedad de ",s.jsx("strong",{children:"Hector Javier Moreno"}),". Se concede una licencia de uso personal, no exclusiva, no transferible y revocable."]}),s.jsx("h2",{children:"10. Terminación"}),s.jsx("p",{children:"El usuario puede dejar de utilizar el servicio en cualquier momento eliminando el script de su cuenta de Google y revocando los permisos OAuth. El desarrollador no puede cancelar ni eliminar cuentas del usuario, dado que la infraestructura es completamente privada."}),s.jsx("h2",{children:"11. Uso Gratuito y Donaciones de Carácter Simbólico"}),s.jsxs("p",{children:["AppDeclaración es una herramienta de uso ",s.jsx("strong",{children:"totalmente gratuito"}),". El acceso, instalación y utilización de la aplicación no implican ningún costo para el usuario."]}),s.jsxs("p",{children:["De manera opcional, el usuario podrá realizar una ",s.jsx("strong",{children:"donación voluntaria y de carácter simbólico"}),", como un gesto de buena voluntad si considera que la aplicación le ha resultado útil o le ha ayudado a resolver una necesidad puntual."]}),s.jsx("p",{children:"Estas donaciones tienen un sentido meramente simbólico —por ejemplo, el valor de un café— y no constituyen en ningún caso un pago por el uso del software."}),s.jsxs("ul",{children:[s.jsx("li",{children:"La donación es completamente voluntaria y no obligatoria."}),s.jsx("li",{children:"No existe un monto mínimo ni máximo establecido."}),s.jsx("li",{children:"La donación no otorga derechos adicionales, funcionalidades extra ni soporte preferencial."}),s.jsx("li",{children:"La no realización de una donación no limita ni condiciona el uso de la aplicación."})]}),s.jsx("p",{children:"En caso de que el usuario decida realizar una donación, podrá hacerlo a través del enlace de donaciones en la aplicación."}),s.jsx("h2",{children:"12. Contacto"}),s.jsxs("p",{children:["Para consultas relacionadas con estos términos, puede contactar a:",s.jsx("br",{}),s.jsx("strong",{children:"hectorjaviermorenoh@gmail.com"})]}),s.jsx("h2",{children:"13. Legislación Aplicable"}),s.jsx("p",{children:"Estos Términos y Condiciones se rigen por la legislación vigente en la República de Colombia. Cualquier controversia será resuelta conforme a las normas aplicables en dicha jurisdicción."}),s.jsx("div",{class:"footer",children:"© 2026 AppDeclaración. Todos los derechos reservados."})]})};function hT(){const n=In();return s.jsx("div",{className:"acerca-de-container container my-5 animate__animated animate__fadeIn",children:s.jsx("div",{className:"row justify-content-center",children:s.jsxs("div",{className:"col-md-10 col-lg-8",children:[s.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[s.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),s.jsxs("div",{className:"card shadow-sm p-4 p-md-5",children:[s.jsxs("header",{className:"text-center mb-3",children:[s.jsx("h1",{className:"fw-bold text-primary",children:"AppDeclaración"}),s.jsx("p",{className:"lead text-muted",children:"Tu asistente personal para la organización tributaria"})]}),s.jsxs("section",{className:"mb-3",children:[s.jsx("h4",{className:"fw-bold border-bottom pb-2 mb-3",children:"¿Qué es AppDeclaración?"}),s.jsx("p",{children:"Es una solución tecnológica diseñada para eliminar el estrés de la temporada de impuestos. Su propósito principal es ayudarte a recopilar, organizar y visualizar los certificados y facturas necesarios para tu declaración de renta de forma eficiente y centralizada."})]}),s.jsxs("section",{className:"mb-3",children:[s.jsx("h4",{className:"fw-bold border-bottom pb-2 mb-3",children:"Características Principales"}),s.jsxs("div",{className:"row g-4",children:[s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"badge bg-primary-soft text-primary p-3 me-3",children:s.jsx("i",{className:"bi bi-folder-check fs-4"})}),s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold mb-1",children:"Organización Inteligente"}),s.jsx("p",{className:"small text-muted",children:"Archivos organizados automáticamente por año gravable y categorías."})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"badge bg-success-soft text-success p-3 me-3",children:s.jsx("i",{className:"bi bi-shield-lock fs-4"})}),s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold mb-1",children:"Privacidad Total"}),s.jsx("p",{className:"small text-muted",children:"Los datos nunca salen de tu cuenta de Google. Tú eres el único dueño."})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"badge bg-info-soft text-info p-3 me-3",children:s.jsx("i",{className:"bi bi-camera fs-4"})}),s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold mb-1",children:"Soportes y Facturas"}),s.jsx("p",{className:"small text-muted",children:"Sube archivos o toma fotos de tus facturas de compra al instante."})]})]})}),s.jsx("div",{className:"col-md-6",children:s.jsxs("div",{className:"d-flex align-items-start",children:[s.jsx("div",{className:"badge bg-warning-soft text-warning p-3 me-3",children:s.jsx("i",{className:"bi bi-file-zip fs-4"})}),s.jsxs("div",{children:[s.jsx("h6",{className:"fw-bold mb-1",children:"Backup Seguro"}),s.jsx("p",{className:"small text-muted",children:"Exporta toda tu información en un archivo ZIP con un solo clic."})]})]})})]})]}),s.jsxs("section",{className:"bg-light p-2 rounded mb-3",children:[s.jsx("h4",{className:"fw-bold mb-3",children:"Arquitectura Descentralizada"}),s.jsxs("p",{className:"mb-0",children:["A diferencia de otras aplicaciones, ",s.jsx("strong",{children:"AppDeclaración"})," no utiliza bases de datos centrales. Funciona mediante un modelo donde el frontend se conecta directamente a tu propio backend en",s.jsx("strong",{children:" Google Apps Script"}),". Esto garantiza que tus datos tributarios residan siempre dentro de tu espacio personal de ",s.jsx("strong",{children:"Google Drive"}),"."]})]}),s.jsxs("footer",{className:"text-center mt-3 pt-4 border-top",children:[s.jsxs("p",{className:"mb-1 text-muted",children:["Desarrollado por ",s.jsx("strong",{children:"Hector Javier Moreno"})]}),s.jsxs("div",{className:"mt-3",children:[s.jsx("p",{className:"small mb-2",children:"Si esta herramienta te ha sido útil, puedes apoyar su mantenimiento:"}),s.jsxs(En,{to:"/donaciones",className:"btn btn-warning fw-bold",children:[s.jsx("i",{className:"bi bi-cup-hot me-2"}),"Invítame un café"]})]})]})]})]})})})}const gT="/appdeclaracion/assets/qr_nequi-BBArSa2A.png";function vT(){const n=In(),[a,o]=m.useState(!1),l="3103434753",u=()=>{navigator.clipboard.writeText(l),o(!0),setTimeout(()=>o(!1),2e3)};return s.jsx("div",{className:"donaciones-container container my-5 animate__animated animate__fadeIn",children:s.jsx("div",{className:"row justify-content-center",children:s.jsxs("div",{className:"col-md-9 col-lg-7",children:[s.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[s.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),s.jsxs("div",{className:"card shadow-lg border-0 p-4 p-md-5 text-center",children:[s.jsxs("header",{className:"mb-3 text-center",children:[s.jsx("div",{className:"badge bg-warning-soft text-warning p-3 mb-3 fs-4 rounded-circle",children:s.jsx("i",{className:"bi bi-cup-hot-fill"})}),s.jsx("h1",{className:"fw-bold text-dark",children:"¿Te gustaría invitarme un café?"}),s.jsxs("p",{className:"lead text-muted mx-auto",style:{maxWidth:"500px"},children:["AppDeclaración es y seguirá siendo una herramienta ",s.jsx("strong",{children:"totalmente gratuita"}),". Si te ha sido útil, cualquier aporte voluntario es bienvenido para apoyar su mantenimiento."]})]}),s.jsxs("div",{className:"row g-4 align-items-center mb-5",children:[s.jsxs("div",{className:"col-md-6 border-end-md",children:[s.jsx("div",{className:"qr-wrapper p-3 bg-white border rounded-4 shadow-sm mx-auto",style:{maxWidth:"250px"},children:s.jsx("img",{src:gT,alt:"Código QR Nequi para donaciones",className:"img-fluid rounded-3"})}),s.jsx("div",{className:"small text-muted mt-2",children:"Escanea desde tu app Nequi"})]}),s.jsxs("div",{className:"col-md-6 text-md-start px-md-4",children:[s.jsx("h6",{className:"text-uppercase fw-bold text-secondary mb-3 small",children:"Medios en Colombia"}),s.jsxs("div",{className:"d-flex align-items-center mb-3",children:[s.jsx("span",{className:"badge bg-nequi me-2",children:"Nequi"}),s.jsx("span",{className:"badge bg-breb",children:"Bre-B"})]}),s.jsxs("div",{className:"info-cuenta p-3 border rounded-3 bg-white shadow-sm mb-3",children:[s.jsx("div",{className:"small text-muted mb-1",children:"Número de cuenta / Celular"}),s.jsx("div",{className:"h4 fw-bold mb-1 text-dark letter-spacing-1",children:l}),s.jsx("div",{className:"small text-primary fw-medium",children:"A nombre de: Hector Javier Moreno"})]}),s.jsxs("button",{className:`btn ${a?"btn-success":"btn-outline-dark"} w-100 fw-bold`,onClick:u,children:[s.jsx("i",{className:`bi ${a?"bi-check-all":"bi-clipboard"} me-2`}),a?"¡Copiado!":"Copiar número"]})]})]}),s.jsxs("div",{className:"disclaimer p-3 rounded-3 text-center mx-auto",style:{maxWidth:"600px"},children:[s.jsx("i",{className:"bi bi-rocket-takeoff me-2"}),"Tu apoyo es un reconocimiento al tiempo que ",s.jsx("strong",{children:"AppDeclaración"})," te ha ahorrado en la recopilación de tus documentos. ",s.jsx("strong",{children:"¡Gracias por valorar este desarrollo!"})]})]})]})})})}const f0=({isOpen:n,onClose:a,titulo:o,codigo:l})=>{const[u,d]=m.useState(!1),p=()=>{navigator.clipboard.writeText(l),d(!0),setTimeout(()=>{d(!1)},2e3)};return n?s.jsx("div",{className:"modal-backend-overlay",onClick:a,children:s.jsxs("div",{className:"modal-backend",onClick:g=>g.stopPropagation(),children:[s.jsx("h2",{children:o}),s.jsx("pre",{children:s.jsx("code",{children:l})}),s.jsxs("div",{className:"modal-botones",children:[s.jsx("button",{onClick:p,children:"Copiar código"}),s.jsx("button",{onClick:a,children:"Cerrar"})]}),u&&s.jsx("p",{className:"mensaje-copiado",children:"Script copiado correctamente"})]})}):null},bT=`/******************************
 * Version
 ******************************/
 const VERSION = "0605261315PM";

/******************************
 * CONFIGURACIÓN INICIAL
 ******************************/
const CARPETA_PRINCIPAL = "declaracion";
const JSON_CONFIGURACION = "configuracion.json";
const JSON_USUARIOS = "usuarios.json";
const JSON_ROLES = "roles.json";
const JSON_PRODUCTOS = "productos.json";
const JSON_BDD_DATOS = "bddatos.json";
const JSON_BDD_FACTURAS = "bddatosFacturas.json";
const JSON_LOGS = "logs.json";
const JSON_DATOS_TRIBUTARIOS = "datosTributarios.json";
const URL_PRODUCCION = "https://appdeclaracion.github.io/appdeclaracion";

/******************************
 * CONSTANTE DE CONFIGURACIONES INICIALES
 ******************************/
const CONFIG_INICIAL = {
  CARPETA_PRINCIPAL: "",
  TAMANO_MAX_MB: 10,
  TIPOS_PERMITIDOS: ["pdf", "jpg", "jpeg", "png", "docx", "txt", "xlsx"],
  TOKEN_EXP_MINUTOS: 60 // Valor por defecto (1 hora)
};

const DATOS_TRIBUTARIOS_INICIALES = [
  { id: "nit", label: "Número de Identificación Tributaria (NIT)", valor: "", orden: 1 },
  { id: "primerApellido", label: "Primer apellido", valor: "", orden: 2 },
  { id: "segundoApellido", label: "Segundo apellido", valor: "", orden: 3 },
  { id: "primerNombre", label: "Primer nombre", valor: "", orden: 4 },
  { id: "otrosNombres", label: "Otros nombres", valor: "", orden: 5 },
  { id: "codigoDireccionSeccional", label: "Código Dirección Seccional", valor: "", orden: 6 },
  { id: "codigoActividadEconomica", label: "Cód. Actividad económica", valor: "", orden: 7 }
];

const ROLES_INICIALES = [
  {
    "rol": "administrador",
    "permisos": [
      "*"
    ]
  },
  {
    "rol": "Contador",
    "permisos": [
      "obtenerDatosTributarios",
      "obtenerProductosPorArchivo",
      "subirArchivoProducto",
      "remplazarArchivoProducto",
      "subirArchivoFacturas",
      "agregarProducto",
      "actualizarProducto",
      "eliminarProducto",
      "actualizarDatosTributarios",
      "obtenerFacturasPorAnio",
      "actualizarFactura",
      "eliminarFactura",
    ]
  },
  {
    "rol": "Declarante",
    "permisos": [
      "obtenerDatosTributarios",
      "obtenerProductosPorArchivo",
      "subirArchivoProducto",
      "remplazarArchivoProducto",
      "subirArchivoFacturas",
      "agregarProducto",
      "actualizarProducto",
      "eliminarProducto",
      "actualizarDatosTributarios",
      "obtenerFacturasPorAnio",
      "actualizarFactura",
      "eliminarFactura",
    ]
  }
];

/******************************
 * 🔐 CONFIGURACIÓN DE PERMISOS Y VALIDACIÓN
 ******************************/
// 🧩 Funciones expuestas al frontend (de lógica del negocio)
const FUNCIONES_LOGICA_NEGOCIO = [
  // --- BLOQUE: USUARIOS ---
  "obtenerUsuarios",
  "agregarUsuario",
  "actualizarUsuario",
  "eliminarUsuario",

  // --- BLOQUE: ROLES ---
  "obtenerRoles",
  "agregarRol",
  "actualizarRol",
  "eliminarRol",

  // --- BLOQUE: PRODUCTOS ---
  "obtenerProductosPorArchivo",
  "agregarProducto",
  "actualizarProducto",
  "eliminarProducto",
  "subirArchivoProducto",
  "remplazarArchivoProducto",
  "editarRegistroProducto",
  "eliminarRegistroProducto",

  // --- BLOQUE: FACTURACIÓN ---
  "obtenerFacturasPorAnio",
  "subirArchivoFacturas",
  "actualizarFactura",
  "eliminarFactura",

  // --- BLOQUE: CONFIGURACIÓN Y TRIBUTOS ---
  "obtenerConfig",
  "actualizarConfig",
  "obtenerDatosTributarios",
  "actualizarDatosTributarios",

  // --- BLOQUE: SISTEMA Y LOGS ---
  "obtenerLogs",
  "limpiarLogsAntiguos",
  "generarBackupZIP",
  "inicializarSistemaForzado",
];

// ⚙️ Funciones generales internas — permitidas a todos los usuarios autenticados
const FUNCIONES_GENERALES = [
  "ping",
  "toggleUsuarioActivo",
  "obtenerArchivosPorAnio",
  "listarFuncionesLogicaNegocio",
  "obtenerProductos",
];

// PROTECCIÓN: Quitar acceso a los JSON al crear usuario o toggleUsuario
const ARCHIVOS_PROTEGIDOS = [JSON_CONFIGURACION, JSON_USUARIOS, JSON_ROLES, JSON_PRODUCTOS, JSON_BDD_DATOS, JSON_BDD_FACTURAS, JSON_LOGS, JSON_DATOS_TRIBUTARIOS];

/******************************
 * FUNCIÓN DE INICIALIZACIÓN SISTEMA DESDE APPS SCRIPT Y CREACION DE CARPETAS Y ARCHIVOS INICIALES
 ******************************/
function inicializarSistema() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const correoAdmin = Session.getActiveUser().getEmail();

    // 1️⃣ Crear carpeta principal con nombre aleatorio para independencia total
    // Usamos el prefijo definido para que cada usuario tenga su carpeta única
    const nombreUnico = \`\${CARPETA_PRINCIPAL}_\${correoAdmin.split("@")[0].replace(/[^a-zA-Z]/g, "").substring(0, 4).toUpperCase()}\`;

    // 🔍 VALIDACIÓN: Buscar si la carpeta ya existe
    const carpetasExistentes = DriveApp.getRootFolder().getFoldersByName(nombreUnico);


    if (carpetasExistentes.hasNext()) {
      const carpetaExistente = carpetasExistentes.next();
      const idExistente = carpetaExistente.getId();

      Logger.log("⚠️ El sistema ya estaba inicializado. Carpeta encontrada: " + nombreUnico);

      return {
        status: "existente",
        mensaje: "El sistema ya se encuentra inicializado para este usuario.",
        id: idExistente,
        nombre: nombreUnico
      };
    }

    // 2️⃣ Si no existe, proceder con la creación (Paso original)
    const carpetaPrincipal = DriveApp.getRootFolder().createFolder(nombreUnico);
    const carpetaPrincipalId = carpetaPrincipal.getId();

    // 🎨 CAMBIO DE COLOR CARPETA (Drive API v3)
    // Nota: Drive no permite cualquier hex arbitrario, usamos el verde más cercano al #198754
    try {
      // En v3 se usa Drive.Files.update
      Drive.Files.update({
        "folderColorRgb": "#198754"
      }, carpetaPrincipalId);
    } catch (err) {
      Logger.log("Nota: No se pudo aplicar el color en v3: " + err.message);
    }


    // 2️⃣ Construir configuración con el ID REAL
    const configInicialConId = {
      ...CONFIG_INICIAL,
      CARPETA_PRINCIPAL: nombreUnico,
      CARPETA_PRINCIPAL_ID: carpetaPrincipalId
    };

    // 3️⃣ Guardar configuración
    guardarORecrearJSON(carpetaPrincipal, JSON_CONFIGURACION, configInicialConId);

    // 4️⃣ Crear archivos base
    const archivosAInicializar = [
      { nombre: JSON_USUARIOS, datos: [{ correo: correoAdmin, nombre: "Administrador", rol: "administrador", activo: true }] },
      { nombre: JSON_PRODUCTOS, datos: [] },
      { nombre: JSON_BDD_DATOS, datos: [] },
      { nombre: JSON_BDD_FACTURAS, datos: [] },
      { nombre: JSON_LOGS, datos: [] },
      { nombre: JSON_DATOS_TRIBUTARIOS, datos: DATOS_TRIBUTARIOS_INICIALES },
      { nombre: JSON_ROLES, datos: ROLES_INICIALES }
    ];

    archivosAInicializar.forEach(item => {
      crearArchivoJSONSiNoExiste(carpetaPrincipal, item.nombre, item.datos);
    });

    // 5️⃣ AUTO-PROTECCIÓN (Opcional)
    // Si el administrador es el mismo dueño del script, no hace falta ocultárselos a él mismo,
    // pero si inicializas para otro, aquí podrías llamar a la lógica de ocultar.

    Logger.log("✅ Sistema inicializado correctamente con ID: " + carpetaPrincipalId);

    return { status: "ok", id: carpetaPrincipalId, nombre: nombreUnico };

  } catch (err) {
    Logger.log("❌ Error en inicialización: " + err.message);
    throw err;
  } finally {
    lock.releaseLock();
  }
}
/******************************
 * FUNCIÓN DE INICIALIZACIÓN SISTEMA FORZADO Y BORRADO DE CARPETAS
 ******************************/
function inicializarSistemaForzado(correoAdmin, borrarCarpetas) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = correoAdmin?.correo || "sistema";

  try {
    // 1️⃣ Leer configuración actual
    const config = leerJSON(JSON_CONFIGURACION);

    const usuariosActuales = leerJSON(JSON_USUARIOS) || [];
    const propietario = usuariosActuales[0];

    if (correoEjecutor !== propietario.correo) {
      throw new Error("Solo el propietario del sistema puede reinicializarlo");
    }

    if (usuariosActuales.length === 0) {
      throw new Error("usuarios.json está vacío. No se puede determinar el propietario.");
    }

    if (!config.CARPETA_PRINCIPAL_ID) {
      throw new Error("CARPETA_PRINCIPAL_ID no está definido en configuracion.json");
    }

    // 2️⃣ Obtener carpeta por ID (NO por nombre)
    const carpetaPrincipal = DriveApp.getFolderById(config.CARPETA_PRINCIPAL_ID);

    // 3️⃣ Limpieza controlada
    let resultadoLimpieza = null;
    if (borrarCarpetas) {
      resultadoLimpieza = limpiarCarpetas(); // devuelve objeto {mensaje: "..."}
    }

    // 4️⃣ Reescribir configuración (manteniendo ID)
    guardarORecrearJSON(carpetaPrincipal, JSON_CONFIGURACION, {
      ...CONFIG_INICIAL,
      CARPETA_PRINCIPAL: config?.CARPETA_PRINCIPAL || \`\${CARPETA_PRINCIPAL}_\${Math.random().toString(36).substring(2, 7).toUpperCase()}\`,
      CARPETA_PRINCIPAL_ID: carpetaPrincipal.getId()
    });

    guardarORecrearJSON(carpetaPrincipal, JSON_USUARIOS, [
      {
        ...propietario,
        activo: true
      }
    ]);

    // 6️⃣ Vaciar datos
    guardarORecrearJSON(carpetaPrincipal, JSON_PRODUCTOS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_BDD_DATOS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_BDD_FACTURAS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_LOGS, []);
    guardarORecrearJSON(carpetaPrincipal, JSON_DATOS_TRIBUTARIOS, DATOS_TRIBUTARIOS_INICIALES);
    guardarORecrearJSON(carpetaPrincipal, JSON_ROLES, ROLES_INICIALES);

    // 7️⃣ Registrar log
    registrarLog("inicializarSistemaForzado", correoEjecutor, {
      mensaje: "🔁 Sistema reinicializado forzadamente",
      correoAdmin: correoAdmin?.correo,
      borrarCarpetas,
      limpieza: resultadoLimpieza?.mensaje || "Sin borrar carpetas",
      fecha: new Date().toISOString()
    });

    return {
      status: "ok",
      mensaje: "✅ Sistema reinicializado correctamente",
      correo: correoAdmin?.correo,
      limpieza: resultadoLimpieza?.mensaje || "Sin borrar carpetas"
    };

  } catch (err) {
    registrarLog("ERROR_inicializarSistemaForzado", correoEjecutor, {
      mensaje: err.message,
      stack: err.stack
    });
    throw err;

  } finally {
    lock.releaseLock();
  }
}
/******************************
 * 🔒 FUNCIONES DE SEGURIDAD
 ******************************/
function obtenerConfigCentral() {

  const cache = CacheService.getScriptCache();
  let config = cache.get("CONFIG_CENTRAL");

  if (config) {
    return JSON.parse(config);
  }

  try {
    const response = UrlFetchApp.fetch(\`\${URL_PRODUCCION}/entity_index.json\`);
    config = response.getContentText();

    cache.put("CONFIG_CENTRAL", config, 21600);

    return JSON.parse(config);

  } catch (err) {

    return {
      idCliente: "fallback",
      llave: "fallback_key"
    };

  }
}

function verificarTokenYAutorizar(token) {

  const configCentral = obtenerConfigCentral();
  const CLIENT_ID = configCentral.idCliente;

  const tokenInfoUrl = 'https://oauth2.googleapis.com/tokeninfo?id_token=' + token;

  try {
    const response = UrlFetchApp.fetch(tokenInfoUrl, { method: 'GET', muteHttpExceptions: true });
    const tokenPayload = JSON.parse(response.getContentText());

    // 🚩 Fallo: Token inválido o expirado
    if (tokenPayload.error) {
      registrarLog("LOGIN_FALLIDO", "sistema", { mensaje: "Token de Google inválido o expirado", error: tokenPayload.error });
      return { autorizado: false, mensaje: "Token inválido o expirado" };
    }

    // 🚩 Fallo: El Client ID no coincide
    if (tokenPayload.aud !== CLIENT_ID) {
      registrarLog("LOGIN_FALLIDO", tokenPayload.email || "sistema", { mensaje: "ID de cliente incorrecto (aud mismatch)", aud: tokenPayload.aud });
      return { autorizado: false, mensaje: "ID de cliente incorrecto" };
    }

    const userEmail = tokenPayload.email;
    const userNombre = tokenPayload.name;
    const userPicture = tokenPayload.picture;
    const usuarios = leerJSON(JSON_USUARIOS);
    const roles = leerJSON(JSON_ROLES);

    const usuario = usuarios.find(u => u.correo === userEmail && u.activo);

    // 🚩 Fallo: Usuario no existe en el sistema o está inactivo
    if (!usuario) {
      registrarLog("LOGIN_FALLIDO", userEmail, { mensaje: "Usuario no registrado o inactivo en la base de datos" });
      return { autorizado: false, mensaje: "Usuario no registrado o inactivo" };
    }

    const rol = roles.find(r => r.rol === usuario.rol);

    // 🚩 Fallo: El rol asignado no existe en la configuración
    if (!rol) {
      registrarLog("LOGIN_FALLIDO", userEmail, { mensaje: "Rol no definido para el usuario", rolAsignado: usuario.rol });
      return { autorizado: false, mensaje: "Rol no definido para el usuario" };
    }

    return {
      autorizado: true,
      correo: userEmail,
      nombre: userNombre,
      picture: userPicture,
      rol: usuario.rol,
      permisos: rol.permisos
    };

  } catch (err) {
    // 🚩 Fallo: Error de conexión o excepción del sistema
    registrarLog("LOGIN_ERROR_SISTEMA", "sistema", { mensaje: "Error excepcional en verificarTokenYAutorizar", error: err.message });
    return { autorizado: false, mensaje: "Error al verificar token: " + err.message };
  }
}
function validarPermiso(usuario, accion) {
  // 🚫 Usuario no autenticado
  if (!usuario || !usuario.autorizado) return false;

  // 🟢 Permitir funciones generales a todos los roles autenticados
  if (FUNCIONES_GENERALES.includes(accion)) return true;

  // 👑 Rol administrador o wildcard "*" = acceso total
  if (usuario.rol === "administrador") return true;
  if (usuario.permisos && usuario.permisos.includes("*")) return true;

  // 🧩 Validar acción dentro de las funciones de lógica del negocio
  if (FUNCIONES_LOGICA_NEGOCIO.includes(accion)) {
    const tienePermiso = usuario.permisos && usuario.permisos.includes(accion);

    if (!tienePermiso) {
      registrarLog("PERMISO_DENEGADO", usuario.correo, {
        rol: usuario.rol,
        accionIntentada: accion,
        // permisosDisponibles: usuario.permisos
      });
    }

    return tienePermiso;
  }

  // ⚠️ Si la acción no está registrada en ninguna lista, la denegamos
  registrarLog("PERMISO_DESCONOCIDO", usuario.correo, { accion });
  return false;
}
/**
 * 🔑 GENERA un token de sesión propio (JWT-like)
 * Este token se genera DESPUÉS de que Google valida al usuario.
 */
function generarTokenPropio(usuarioInfo) {

  const configCentral = obtenerConfigCentral();
  const ZEICHENSCHLUESSEL = configCentral.llave;

  // 1. Leer la configuración actual de Drive
  const config = leerJSON(JSON_CONFIGURACION) || {};
  // 2. Obtener los minutos o usar 60 por defecto si no existe
  const minutosExp = config.TOKEN_EXP_MINUTOS || 60;

  const payload = {
    // Info del usuario (verificada por Google)
    correo: usuarioInfo.correo,
    rol: usuarioInfo.rol,
    nombre: usuarioInfo.nombre,
    picture: usuarioInfo.picture,
    permisos: usuarioInfo.permisos,

    // 💡 Tiempos de vida (iat = issued at, exp = expiration)
    iat: Math.floor(Date.now() / 1000),
    // exp: Math.floor(Date.now() / 1000) + (1 * 60) // 👈 Válido por 3 minutos
    // exp: Math.floor(Date.now() / 1000) + (8 * 60 * 60) // 👈 Válido por 8 horas
    // exp: Math.floor(Date.now() / 1000) + (30 * 60) // 👈 Válido por 1 horas
    exp: Math.floor(Date.now() / 1000) + (minutosExp * 60)
  };

  // Codificamos el payload (String -> Byte[] -> Base64WebSafe)
  const payloadStr = JSON.stringify(payload);
  const payloadB64 = Utilities.base64EncodeWebSafe(payloadStr, Utilities.Charset.UTF_8); // ✅ CORREGIDO 1

  // Creamos la firma
  // computeHmacSha256Signature necesita el payloadB64 como String, lo cual es correcto
  const signature = Utilities.computeHmacSha256Signature(payloadB64, ZEICHENSCHLUESSEL);

  // Codificamos la firma (Byte[] -> Base64WebSafe)
  const signatureB64 = Utilities.base64EncodeWebSafe(signature); // ✅ CORREGIDO 2

  // Formato: [payload].[signature]
  return payloadB64 + "." + signatureB64;
}
/**
 * 🔐 VALIDA un token de sesión propio
 * Se usará en CADA petición (doGet/doPost) excepto en el login.
 */
function verificarTokenPropio(token) {

  const configCentral = obtenerConfigCentral();
  const ZEICHENSCHLUESSEL = configCentral.llave;

  if (!token) {
    return { autorizado: false, mensaje: "No se proporcionó token" };
  }

  try {
    const parts = token.split('.');
    if (parts.length !== 2) {
      return { autorizado: false, mensaje: "Token malformado" };
    }

    const [payloadB64, signatureB64] = parts;

    // 1. Verificar la firma
    const signature = Utilities.base64DecodeWebSafe(signatureB64);
    const expectedSignature = Utilities.computeHmacSha256Signature(payloadB64, ZEICHENSCHLUESSEL);

    // Comparación segura de los bytes de la firma
    if (signature.length !== expectedSignature.length || !signature.every((byte, i) => byte === expectedSignature[i])) {
      return { autorizado: false, mensaje: "Firma de token inválida" };
    }

    // 2. Decodificar payload
    const payloadStr = Utilities.newBlob(Utilities.base64DecodeWebSafe(payloadB64)).getDataAsString();
    const payload = JSON.parse(payloadStr);

    // 3. Verificar expiración
    if (payload.exp * 1000 < Date.now()) {
      return { autorizado: false, mensaje: "Token expirado" };
    }

    // ✅ Si todo está ok, devolvemos el payload del usuario
    return { autorizado: true, ...payload };

  } catch (err) {
    return {
      autorizado: false,
      mensaje: "Error al validar token: " + err.message };
  }
}
/**
 * 📞 MANEJA EL INTERCAMBIO DE TOKEN
 * El cliente llama a esta función con el token de Google.
 * Esta función devuelve un token propio.
 */
function handleGoogleLogin(data) {
  const { googleToken } = data;

  // 🚩 Fallo: No se recibió el token en la petición
  if (!googleToken) {
    registrarLog("LOGIN_FALLIDO", "sistema", { mensaje: "No se recibió el token de Google en el payload" });
    return respuestaJSON({ status: "error", mensaje: "No se recibió el token de Google (googleToken)" });
  }

  // 1. Validar el token de Google y buscar usuario (función que YA TENÍAS)
  const infoUsuarioGoogle = verificarTokenYAutorizar(googleToken);

  if (!infoUsuarioGoogle.autorizado) {
    // Si el token de Google es inválido o el usuario no está en usuarios.json
    return respuestaJSON(infoUsuarioGoogle);
  }

  // 2. Si es válido, generar nuestro propio token de sesión
  const tokenPropio = generarTokenPropio(infoUsuarioGoogle);

  // ✅ LOG POSITIVO: Registrar solamente el correo
  // registrarLog("LOGIN_EXITOSO", infoUsuarioGoogle.correo);

  registrarLog("LOGIN_EXITOSO", infoUsuarioGoogle.correo, {
    rol: infoUsuarioGoogle.rol,
    nombre: infoUsuarioGoogle.nombre,
  });


  // 3. Devolver el token propio y la info del usuario al cliente
  return respuestaJSON({
    status: "ok",
    token: tokenPropio, // 👈 Nuestro token
    user: {            // 👈 Info del usuario para el AuthContext
      correo: infoUsuarioGoogle.correo,
      nombre: infoUsuarioGoogle.nombre,
      picture: infoUsuarioGoogle.picture,
      rol: infoUsuarioGoogle.rol,
      permisos: infoUsuarioGoogle.permisos
    }
  });
}
/******************************
 * MANEJO CENTRALIZADO DE ERRORES
 ******************************/
function manejarError(err, contexto, usuario) {
  const mensaje = err && err.message ? err.message : "Error desconocido";

  const detalle = {
    contexto: contexto,
    usuario: usuario || "desconocido",
    mensaje: mensaje,
    stack: err && err.stack ? err.stack : null,
    fecha: new Date().toISOString()
  };

  // Guardar en logs.json
  registrarLog("ERROR", usuario || "desconocido", detalle);

  return respuestaJSON({
    status: "error",
    codigo: "E_INTERNO",
    mensaje: mensaje,
    contexto: contexto
  });
}
function generarBackupZIP(usuario) {
  try {
    const carpetaPrincipal = obtenerOCrearCarpetaRaiz();
    const fecha = new Date();

    const nombreZip = \`Backup_Declaracion_\${fecha.getFullYear()}-\${fecha.getMonth() + 1}-\${fecha.getDate()}_\${fecha.getHours()}-\${fecha.getMinutes()}.zip\`;

    const blobs = [];

    // Archivos raíz
    const archivos = carpetaPrincipal.getFiles();
    while (archivos.hasNext()) {
      blobs.push(archivos.next().getBlob());
    }

    // Subcarpetas (mantener estructura)
    const carpetas = carpetaPrincipal.getFolders();
    while (carpetas.hasNext()) {
      const carpeta = carpetas.next();
      const subArchivos = carpeta.getFiles();
      while (subArchivos.hasNext()) {
        const archivo = subArchivos.next();
        blobs.push(
          archivo.getBlob().setName(\`\${carpeta.getName()}/\${archivo.getName()}\`)
        );
      }
    }

    const blobZip = Utilities.zip(blobs, nombreZip);

    // ⭐ Solo lo enviamos al frontend → NO guardar en Drive
    const base64Data = Utilities.base64Encode(blobZip.getBytes());

    registrarLog("backup", usuario.correo, \`Se generó un backup descargado por el usuario\`);

    return {
      status: "ok",
      base64: base64Data,
      mimeType: blobZip.getContentType(),
      nombreArchivo: nombreZip,
      mensaje: "✅ Backup generado con éxito"
    };

  } catch (err) {
    return {
      status: "error",
      mensaje: "❌ Error al generar backup: " + err.message
    };
  }
}
/******************************
 * FUNCIONES AUXILIARES
 ******************************/
function obtenerOCrearCarpetaRaiz() {
  const root = DriveApp.getRootFolder();
  let nombreCarpeta;

  // 1. Obtener email de forma segura
  // Intentamos EffectiveUser si ActiveUser falla
  const correo = Session.getActiveUser().getEmail() || Session.getEffectiveUser().getEmail();

  const prefijoUsuario = correo.split("@")[0]
                            .replace(/[^a-zA-Z]/g, "")
                            .substring(0, 4)
                            .toUpperCase();

  nombreCarpeta = \`\${CARPETA_PRINCIPAL}_\${prefijoUsuario}\`.trim();

  Logger.log("Buscando carpeta: '" + nombreCarpeta + "'");

  // 2. Buscar en la raíz
  const carpetas = root.getFoldersByName(nombreCarpeta);
  let carpetaDestino;

  if (carpetas.hasNext()) {
    carpetaDestino = carpetas.next();
    Logger.log("✅ Carpeta encontrada: " + carpetaDestino.getId());
  } else {
    // 3. Crear usando el objeto root directamente
    carpetaDestino = root.createFolder(nombreCarpeta);
    Logger.log("🆕 Carpeta creada: " + nombreCarpeta);
  }

  return carpetaDestino;
}
function obtenerOCrearCarpetaEn(carpetaPadre, nombre) {
  let carpetas = carpetaPadre.getFoldersByName(nombre);
  return carpetas.hasNext() ? carpetas.next() : carpetaPadre.createFolder(nombre);
}
function crearArchivoJSONSiNoExiste(carpeta, nombreArchivo, contenidoInicial) {
  const archivos = carpeta.getFilesByName(nombreArchivo);
  if (!archivos.hasNext()) {
    carpeta.createFile(nombreArchivo, JSON.stringify(contenidoInicial, null, 2), MimeType.PLAIN_TEXT);
    Logger.log(\`📄 Archivo creado: \${nombreArchivo}\`);
  } else {
    Logger.log(\`ℹ️ Archivo ya existe: \${nombreArchivo}\`);
  }
}
function guardarJSON(nombreArchivo, contenido) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s

  try {
    const carpeta = obtenerOCrearCarpetaRaiz();
    const archivos = carpeta.getFilesByName(nombreArchivo);

    if (!archivos.hasNext()) {
      throw new Error(\`Archivo no encontrado: \${nombreArchivo}\`);
    };

    const archivo = archivos.next();
    archivo.setContent(JSON.stringify(contenido, null, 2));

    return true;

  } catch (err) {
    manejarError(err, "guardarJSON", "sistema");

    registrarLog("guardarJSON", "sistema", {
      archivo: nombreArchivo,
      error: err.message,
      contexto: "Fallo crítico al escribir JSON"
    });

    throw new Error(\`Error crítico al guardar datos: \${err.message}\`);

  } finally {
    lock.releaseLock();
  }

}
function leerJSON(nombreArchivo) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // 🔒 Lock aplicado

  try {
    const carpeta = obtenerOCrearCarpetaRaiz();
    const archivos = carpeta.getFilesByName(nombreArchivo);
    if (!archivos.hasNext()) throw new Error(\`Archivo no encontrado: \${nombreArchivo}\`);
    const archivo = archivos.next();

    return JSON.parse(archivo.getBlob().getDataAsString());

  } finally {
    lock.releaseLock();
  }
}
function respuestaJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
function guardarORecrearJSON(carpeta, nombreArchivo, contenidoInicial) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {
    const archivos = carpeta.getFilesByName(nombreArchivo);
    if (archivos.hasNext()) {
      const archivo = archivos.next();
      archivo.setContent(JSON.stringify(contenidoInicial, null, 2));
    } else {
      carpeta.createFile(nombreArchivo, JSON.stringify(contenidoInicial, null, 2), MimeType.PLAIN_TEXT);
    }
  } finally {
    lock.releaseLock();
  }
}
function normalizarTexto(texto) {
  if (!texto) return "";
  return texto
    .toString()
    .trim()                        // quitar espacios inicio/fin
    .toLowerCase()                 // todo a minúsculas
    .normalize("NFD")              // separar letras de tildes (á -> a + ́)
    .replace(/[\\u0300-\\u036f]/g, "") // quitar tildes y diacríticos
    .replace(/\\s+/g, " ")          // múltiples espacios → uno
    .replace(/\\./g, "");           // quitar puntos
}
function normalizarNombreArchivo(nombreOriginal) {
  // Elimina la extensión del archivo
  let nombreBase = nombreOriginal.replace(/\\.[^/.]+$/, "");

  // Convierte todo a minúsculas y reemplaza caracteres no alfanuméricos por espacios
  nombreBase = nombreBase.toLowerCase().replace(/[^a-z0-9]+/gi, " ").trim();

  // Divide en palabras y capitaliza cada una
  let nombrePascal = nombreBase
    .split(" ")
    .filter(Boolean) // elimina espacios dobles
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");

  return nombrePascal;
}
function verificarArchivoDuplicado(carpetaDestino, nombreArchivo) {
  const archivos = carpetaDestino.getFilesByName(nombreArchivo);
  return archivos.hasNext() ? archivos.next() : null;
}
function verificarYEliminarArchivoDrive(fileId, nombreArchivo, anio, bddatos, correoEjecutor) {
  if (!fileId) return { borrado: false, motivo: "Sin ID de archivo" };

  const sigueEnUsoPorId = bddatos.some(r => r.fileId === fileId);
  const sigueEnUsoPorNombreYAnio = bddatos.some(r => r.nombreArchivo === nombreArchivo && r.anio === anio);

  if (!sigueEnUsoPorId && !sigueEnUsoPorNombreYAnio) {
    try {
      const archivoPrincipal = DriveApp.getFileById(fileId);
      archivoPrincipal.setTrashed(true);

      const carpetaAnio = obtenerCarpeta(anio);

      if (carpetaAnio && nombreArchivo) {
        const archivosEnCarpeta = carpetaAnio.getFilesByName(nombreArchivo);

        while (archivosEnCarpeta.hasNext()) {
          const fichero = archivosEnCarpeta.next();
          if (fichero.getId() !== fileId) {
            fichero.setTrashed(true);
          }
        }
      }

      return { borrado: true, motivo: \`Limpieza completada para el año \${anio}.\` };

    } catch (err) {
      registrarLog("error_limpieza_drive", correoEjecutor, { fileId, anio, error: err.message });
      return { borrado: false, motivo: "Error en Drive: " + err.message };
    }
  }

  return { borrado: false, motivo: "Archivo conservado por uso en el año " + anio };
}
function validarArchivo(archivoBlob, config) {
  let extension = archivoBlob.getName().split(".").pop().toLowerCase();
  let tamanoMB = archivoBlob.getBytes().length / (1024 * 1024);

  if (!config.TIPOS_PERMITIDOS.includes(extension)) {
    return { ok: false, mensaje: "❌ Tipo de archivo no permitido" };
  }
  if (tamanoMB > config.TAMANO_MAX_MB) {
    return { ok: false, mensaje: \`❌ Tamaño máximo permitido: \${config.TAMANO_MAX_MB} MB\` };
  }

  return { ok: true, extension };
}
function guardarArchivoEnDrive(archivoBlob, anio, subcarpeta, usarExistente) {
  const nombrePascal = normalizarNombreArchivo(archivoBlob.getName());
  const extension = archivoBlob.getName().split(".").pop().toLowerCase();
  const nuevoNombre = \`\${nombrePascal}.\${extension}\`;

  const carpetaPrincipal = obtenerOCrearCarpetaRaiz();
  const carpetaAnio = obtenerOCrearCarpetaEn(carpetaPrincipal, anio);
  const carpetaDestino = subcarpeta
    ? obtenerOCrearCarpetaEn(carpetaAnio, subcarpeta)
    : carpetaAnio;

  const existente = verificarArchivoDuplicado(carpetaDestino, nuevoNombre);

  if (existente && !usarExistente) {
    return {
      ok: false,
      status: "exists",
      mensaje: "⚠️ Ya existe un archivo con este nombre",
      idArchivo: existente.getId(),
      link: existente.getUrl(),
      nombreArchivo: nuevoNombre,
    };
  }

  const file = existente && usarExistente
    ? existente
    : carpetaDestino.createFile(archivoBlob);

  if (!existente || !usarExistente) file.setName(nuevoNombre);

  return {
    ok: true,
    file,
    nuevoNombre,
    link: file.getUrl(),
  };
}
function capturarPayload(e, isMultipart) {
  try {
    return {
      parametros: e.parameter || null,
      postData: e.postData ? e.postData.contents : null,
      isMultipart: !!isMultipart
    };
  } catch (err) {
    // Si falla la captura, devolvemos un objeto para que el caller lo maneje
    throw new Error('Error al capturar payload: ' + err.message);
  }
}
function obtenerPayloadArchivo(e, isMultipart, camposEsperados) {
  const payload = { debug: capturarPayload(e, isMultipart) };

  if (isMultipart) {
    payload.archivoBlob = e.files.archivo;
    camposEsperados.forEach(campo => {
      payload[campo] = e.parameter[campo] || "";
    });
  } else {
    const data = JSON.parse(e.postData.contents);
    if (!data.archivo) throw new Error("❌ No se envió archivo");
    payload.archivoBlob = Utilities.newBlob(
      Utilities.base64Decode(data.archivo.base64),
      data.archivo.tipo || MimeType.BINARY,
      data.archivo.nombre
    );
    camposEsperados.forEach(campo => {
      payload[campo] = data[campo] || "";
    });
  }

  return payload;
}
function registrarLog(accion, usuario, detalle) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let logs = leerJSON(JSON_LOGS);
    const nuevoLog = {
      // fecha: new Date().toISOString(),
      fecha: Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss"),
      accion,
      usuario: usuario || "sistema",
      detalle: detalle || {}
    };
    logs.push(nuevoLog);
    guardarJSON(JSON_LOGS, logs);

    return nuevoLog;

  } finally {
    lock.releaseLock();
  }
}
function limpiarCarpetas() {
  const config = leerJSON(JSON_CONFIGURACION);

  if (!config?.CARPETA_PRINCIPAL_ID) {
    throw new Error("CARPETA_PRINCIPAL_ID no definido en configuracion.json");
  }

  const carpetaPrincipal = DriveApp.getFolderById(config.CARPETA_PRINCIPAL_ID);
  const subcarpetas = carpetaPrincipal.getFolders();

  while (subcarpetas.hasNext()) {
    subcarpetas.next().setTrashed(true);
  }

  return { mensaje: "🗑️ Carpetas borradas correctamente" };
}
/******************************
 * MÉTODO DOGET
 ******************************/
function doGet(e) {
  try {
    const accion = e.parameter.accion;

    if (
      !FUNCIONES_GENERALES.includes(accion) &&
      !FUNCIONES_LOGICA_NEGOCIO.includes(accion)
    ) {
      return respuestaJSON({ status: "error", mensaje: "Acción inválida" });
    }

    const token = e.parameter.token;
    let usuario; // Variable para guardar el usuario validado

    // --- 1. AUTENTICACIÓN (NUEVO) ---
    // Todas las acciones GET requieren un token propio válido
    if (!token) {
      return respuestaJSON({ autorizado: false, mensaje: "Token de sesión requerido" });
    }

    usuario = verificarTokenPropio(token);

    if (!usuario.autorizado) {
      return respuestaJSON({ autorizado: false, mensaje: usuario.mensaje });
    }

    // --- 2. AUTORIZACIÓN (PERMISOS) ---
    if (!validarPermiso(usuario, accion)) {
      return respuestaJSON({ autorizado: false, mensaje: "No tienes permiso para ejecutar " + accion });
    }

    // --- 3. SWITCH DE ACCIONES ---
    switch (accion) {

      case "ping":

        // Generar un NUEVO token de sesión con 8 horas más de vida
        const nuevoTokenPropio = generarTokenPropio(usuario);

        // Devolver el nuevo token y los datos de usuario
        return respuestaJSON({
          status: "ok",
          mensaje: "Token de sesión renovado",
          autorizado: true,
          token: nuevoTokenPropio, // 👈 NUEVO TOKEN
          ...usuario
        });

      case "obtenerConfig":
        return obtenerConfig();
      case "listarFuncionesLogicaNegocio":
        return listarFuncionesLogicaNegocio();
      case "obtenerUsuarios":
        return obtenerUsuarios();
      case "obtenerRoles":
        return obtenerRoles();
      case "obtenerProductos":
        return obtenerProductos();
      case "obtenerDatosTributarios":
        return obtenerDatosTributarios();
      case "obtenerLogs":
        return obtenerLogs();
      case "obtenerArchivosPorAnio":
        const anio = e.parameter.anio;
        if (!anio) {
          return respuestaJSON({ status: "error", mensaje: "Debe enviar un año" });
        }
        return obtenerArchivosPorAnio(anio);
      case "obtenerFacturasPorAnio":
        const anioF = e.parameter.anio;
        if (!anioF) {
          return respuestaJSON({ status: "error", mensaje: "Debe enviar un año" });
        }
        return obtenerFacturasPorAnio(anioF);
      case "obtenerProductosPorArchivo":
        const archivoId = e.parameter.archivoId;
        if (!archivoId) {
          return respuestaJSON({ status: "error", mensaje: "Debe enviar archivoId" });
        }
        return obtenerProductosPorArchivo(archivoId);
      default:
        return respuestaJSON({ status: "error", mensaje: "Acción no soportada" });
    }

  } catch (err) {
    const correo = (e && e.parameter && e.parameter.correo) || "desconocido";
    return manejarError(err, "doGet", correo);
  }
}
/******************************
 * MÉTODO DOPOST
 ******************************/
function doPost(e) {
  try {
    let accion = "";
    let data = {};
    const isMultipart = e.files && Object.keys(e.files).length > 0;

    // --- 1. PARSEO DE REQUEST (Sin cambios) ---
    if (isMultipart) {
      accion = e.parameter.accion || "";
      data = e.parameter;
    } else if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        return respuestaJSON({
          success: false,
          status: "error_json",
          mensaje: "❌ Error al parsear el cuerpo JSON: " + err.message,
        });
      }
      accion = data.accion || "";
    } else {
      return respuestaJSON({
        success: false,
        status: "sin_datos",
        mensaje: "❌ No se recibió ni JSON ni archivos en la solicitud",
        parametros: e.parameter || null,
      });
    }

    if (!accion || typeof accion !== "string") {
      return respuestaJSON({
        status: "error",
        success: false,
        mensaje: "Acción requerida",
      });
    }

    accion = accion.trim();

    if (
      accion !== "googleLogin" &&
      !FUNCIONES_GENERALES.includes(accion) &&
      !FUNCIONES_LOGICA_NEGOCIO.includes(accion)
    ) {
      return respuestaJSON({
        status: "error",
        success: false,
        mensaje: "Acción inválida",
      });
    }

    // --- 2. AUTENTICACIÓN Y AUTORIZACIÓN (NUEVO) ---
    let usuario; // Variable para guardar el usuario validado

    // La acción 'googleLogin' es pública (no requiere token previo)
    // Todas las demás acciones SÍ requieren un token propio
    if (accion !== "googleLogin") {
      const token = e.parameter.token || data.token;
      if (!token) {
        return respuestaJSON({
          autorizado: false,
          success: false,
          status: "sin_token",
          mensaje: "Token de sesión requerido",
        });
      }

      usuario = verificarTokenPropio(token); // 👈 USA EL NUEVO VALIDADOR

      if (!usuario.autorizado) {
        return respuestaJSON({
          autorizado: false,
          success: false,
          status: "token_invalido",
          mensaje: usuario.mensaje || "Token inválido o expirado",
        });
      }

      // Validar permisos (como antes, pero con el 'usuario' del token)
      if (!validarPermiso(usuario, accion)) {
        return respuestaJSON({
          autorizado: false,
          success: false,
          status: "sin_permiso",
          mensaje: "No tienes permiso para ejecutar " + accion,
        });
      }
    }

    // --- 3. SWITCH DE ACCIONES ---
    // Ahora 'usuario' está disponible para todas las funciones que lo necesiten
    switch (accion) {
      case "googleLogin":
        return handleGoogleLogin(data);

      case "inicializarSistemaForzado":
        const confirmar = data.confirmar;
        const borrarCarpetas = data.borrarCarpetas === true || data.borrarCarpetas === "true";

        if (confirmar !== "INICIALIZAR") {
          return respuestaJSON({ status: "error", mensaje: "⚠️ Confirmación inválida, escriba INICIALIZAR" });
        }

        if (usuario.rol !== "administrador") {
          return respuestaJSON({
            status: "sin_permiso",
            mensaje: "Solo el rol administrador puede reinicializar el sistema",
          });
        }

        const resultado = inicializarSistemaForzado(usuario, borrarCarpetas);

        return respuestaJSON({ ...resultado });

      case "subirArchivoProducto":
        return subirArchivoProducto(e, isMultipart, usuario);
      case "remplazarArchivoProducto":
        return remplazarArchivoProducto(e, isMultipart, usuario);
      case "subirArchivoFacturas":
        return subirArchivoFacturas(e, isMultipart, usuario);
      case "actualizarConfig":
        return actualizarConfig(data, usuario);
      case "generarBackupZIP":
        return respuestaJSON(generarBackupZIP(usuario));
      case "limpiarLogsAntiguos":
        return limpiarLogsAntiguos(usuario);
      case "agregarRol":
        return agregarRol(data, usuario);
      case "actualizarRol":
        return actualizarRol(data, usuario);
      case "eliminarRol":
        return eliminarRol(data, usuario);
      case "agregarUsuario":
        return agregarUsuario(data, usuario);
      case "toggleUsuarioActivo":
        return toggleUsuarioActivo(data, usuario);
      case "actualizarUsuario":
        return actualizarUsuario(data, usuario);
      case "eliminarUsuario":
        return eliminarUsuario(data, usuario);
      case "agregarProducto":
        return agregarProducto(data, usuario);
      case "actualizarProducto":
        return actualizarProducto(data, usuario);
      case "eliminarProducto":
        return eliminarProducto(data.id, usuario);
      case "eliminarRegistroProducto":
        return eliminarRegistroProducto(data, usuario);
      case "editarRegistroProducto":
        return editarRegistroProducto(data, usuario);
      case "inicializarSistema":
        return inicializarSistemaSeguro(data, usuario);
      case "actualizarDatosTributarios":
        return actualizarDatosTributarios(data, usuario);
      case "actualizarFactura":
        return actualizarFactura(data, usuario);
      case "eliminarFactura":
        return eliminarFactura(data, usuario);
      default:
        return respuestaJSON({ status: "error", mensaje: "Acción no soportada" });
    }

  } catch (err) {
    const correo = (e && e.parameter && e.parameter.correo) || "desconocido";
    return manejarError(err, "doPost", correo);
  }
}
/******************************
 * FUNCIONES DE LOGICA DEL NEGOCIO
 ******************************/
function listarFuncionesLogicaNegocio() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    if (!FUNCIONES_LOGICA_NEGOCIO || !Array.isArray(FUNCIONES_LOGICA_NEGOCIO)) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se encontraron funciones de lógica de negocio definidas.",
        datos: [],
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "📘 Funciones de lógica de negocio obtenidas correctamente.",
      datos: FUNCIONES_LOGICA_NEGOCIO,
    });

  } catch (err) {
    manejarError(err, "listarFuncionesLogicaNegocio");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al obtener las funciones de lógica de negocio.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
/******************************
 * 🔧 CRUD DE CONFIGURACIÓN (versión final)
 ******************************/
function obtenerConfig() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const config = leerJSON(JSON_CONFIGURACION);

    return respuestaJSON({
      status: "ok",
      mensaje: "⚙️ Configuración obtenida correctamente.",
      version: VERSION,
      datos: config,
    });
  } catch (err) {
    manejarError(err, "obtenerConfig");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al obtener la configuración.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function actualizarConfig(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const configActual = leerJSON(JSON_CONFIGURACION) || {};

    const nuevaConfig = {
      ...configActual,
      TAMANO_MAX_MB: data.TAMANO_MAX_MB ?? configActual.TAMANO_MAX_MB,
      TIPOS_PERMITIDOS: Array.isArray(data.TIPOS_PERMITIDOS)
        ? data.TIPOS_PERMITIDOS
        : configActual.TIPOS_PERMITIDOS,
      TOKEN_EXP_MINUTOS: Number(data.TOKEN_EXP_MINUTOS) || configActual.TOKEN_EXP_MINUTOS,
    };

    guardarJSON(JSON_CONFIGURACION, nuevaConfig);
    registrarLog("actualizarConfig", correoEjecutor, {
      mensaje: "Configuración actualizada",
      nuevaConfig,
    });

    return respuestaJSON({
      status: "ok",
      mensaje: "✅ Configuración actualizada correctamente.",
      datos: nuevaConfig,
    });
  } catch (err) {
    manejarError(err, "actualizarConfig", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar la configuración.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
/******************************
 * 🔧 CRUD DE ROLES (versión final, integrada con doPost y token)
 ******************************/
function obtenerRoles() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const roles = leerJSON(JSON_ROLES) || [];

    if (!roles.length) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se encontraron roles registrados en el sistema.",
        data: [],
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "📘 Roles obtenidos correctamente.",
      data: roles,
    });
  } catch (err) {
    manejarError(err, "obtenerRoles");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al obtener los roles. Intenta nuevamente o contacta al administrador.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function agregarRol(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const roles = leerJSON(JSON_ROLES) || [];
    // const nuevoRol = normalizarTexto(data?.rol || "").trim();
    const nuevoRol = data?.rol;
    const permisosIniciales = Array.isArray(data?.permisos)
      ? data.permisos
      : [];

    if (!nuevoRol)
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ El nombre del rol es obligatorio.",
      });

    // Validar duplicado
    if (roles.some((r) => r.rol.toLowerCase() === nuevoRol.toLowerCase()))
      return respuestaJSON({
        status: "error",
        mensaje: \`⚠️ Ya existe un rol con el nombre "\${nuevoRol}".\`,
      });

    // Crear nuevo rol con permisos iniciales
    const nuevo = { rol: nuevoRol, permisos: permisosIniciales };
    roles.push(nuevo);
    guardarJSON(JSON_ROLES, roles);

    registrarLog("agregarRol", correoEjecutor, \`Rol creado: \${nuevoRol}\`);

    return respuestaJSON({
      status: "ok",
      mensaje: \`✅ Rol "\${nuevoRol}" creado correctamente.\`,
      datos: roles,
    });
  } catch (err) {
    manejarError(err, "agregarRol", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al crear el rol. Intenta nuevamente o contacta al administrador.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function actualizarRol(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const roles = leerJSON(JSON_ROLES) || [];
    const { rol, permisos } = data;

    if (!rol) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ El nombre del rol es obligatorio.",
      });
    }

    const index = roles.findIndex((r) => r.rol === rol);
    if (index === -1)
      return respuestaJSON({
        status: "error",
        mensaje: \`⚠️ El rol "\${rol}" no existe en el sistema.\`,
      });

    // El rol administrador conserva permisos totales
    if (rol === "administrador") {
      roles[index].permisos = ["*"];
    } else {
      roles[index].permisos = Array.isArray(permisos) ? permisos : [];
    }

    guardarJSON(JSON_ROLES, roles);

    registrarLog("actualizarRol", correoEjecutor, \`Permisos actualizados para el rol: \${rol}\`);

    return respuestaJSON({
      status: "ok",
      mensaje: \`✅ Permisos actualizados correctamente para el rol "\${rol}".\`,
      datos: roles,
    });
  } catch (err) {
    manejarError(err, "actualizarRol", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al actualizar el rol. Intenta nuevamente o contacta al administrador.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarRol(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const { rol } = data;

    if (!rol)
      return respuestaJSON({
        status: "error",
        mensaje: "El nombre del rol es obligatorio",
      });

    if (rol === "administrador")
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se puede eliminar el rol administrador.",
      });

    const roles = leerJSON(JSON_ROLES) || [];
    const usuarios = leerJSON(JSON_USUARIOS) || [];

    // Verificar si el rol está asignado a algún usuario
    const enUso = usuarios.some((u) => u.rol === rol);
    if (enUso)
      return respuestaJSON({
        status: "error",
        mensaje: \`⚠️ No se puede eliminar el rol "\${rol}" porque tiene usuarios asignados.\`,
      });

    const nuevosRoles = roles.filter((r) => r.rol !== rol);
    guardarJSON(JSON_ROLES, nuevosRoles);

    registrarLog("eliminarRol", correoEjecutor, \`Rol eliminado: \${rol}\`);
    return respuestaJSON({
      status: "ok",
      mensaje: \`🗑️ Rol "\${rol}" eliminado correctamente.\`,
      datos: nuevosRoles,
    });
  } catch (err) {
    manejarError(err, "eliminarRol", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Ocurrió un error interno al intentar eliminar el rol. Intenta nuevamente o contacta al administrador",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
// Usuarios
function obtenerUsuarios() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];

    if (!usuarios.length) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ No se encontraron usuarios registrados.",
        datos: [],
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "📋 Usuarios obtenidos correctamente.",
      datos: usuarios,
    });
  } catch (err) {
    manejarError(err, "obtenerUsuarios");
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al obtener la lista de usuarios.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function agregarUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, nombre, rol } = data;

    if (!correo || !nombre || !rol) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ Campos obligatorios faltantes." });
    }

    if (usuarios.some(u => u.correo.toLowerCase() === correo.toLowerCase())) {
      return respuestaJSON({ status: "error", mensaje: \`⚠️ El usuario "\${correo}" ya existe.\` });
    }

    const config = leerJSON(JSON_CONFIGURACION);
    const carpetaId = config.CARPETA_PRINCIPAL_ID;
    const carpeta = DriveApp.getFolderById(carpetaId);

    // 1️⃣ Otorgar permiso de LECTOR a la CARPETA (Silencioso v3)
    try {
      Drive.Permissions.create({
        'role': 'reader',
        'type': 'user',
        'emailAddress': correo
      }, carpetaId, { 'sendNotificationEmail': false });
    } catch (err) {
      const errorMsg = err.message.toLowerCase();

      if (errorMsg.includes("no tiene una cuenta de google") ||
          errorMsg.includes("does not have a google account")) {
        return respuestaJSON({
          status: "error",
          mensaje: \`❌ El correo "\${correo}" no está vinculado a una cuenta de Google válida.\`
        });
      }

      throw new Error("Error al asignar carpeta: " + err.message);

    }

    // 2️⃣ TIEMPO DE ESPERA (Crucial para propagación de permisos)
    Utilities.sleep(5000); // Aumentamos a 2 segundos por seguridad

    // 3️⃣ PROTECCIÓN: Quitar acceso a los JSON

    ARCHIVOS_PROTEGIDOS.forEach(nombreArchivo => {
      const archivos = carpeta.getFilesByName(nombreArchivo);
      while (archivos.hasNext()) { // Usamos while por si hay duplicados
        const archivo = archivos.next();
        const archivoId = archivo.getId();

        try {
          // MÉTODO DEFINITIVO:
          // Intentamos remover al usuario usando DriveApp (más sencillo para 'readers')
          // Si no funciona, usamos el borrado por lista de permisos.
          archivo.removeViewer(correo);

          // Refuerzo con API Avanzada
          const permissions = Drive.Permissions.list(archivoId).permissions;
          permissions.forEach(p => {
            if (p.emailAddress?.toLowerCase() === correo.toLowerCase()) {
              Drive.Permissions.delete(archivoId, p.id);
            }
          });
        } catch (err) {
          return respuestaJSON({
            status: "error",
            mensaje: \`❌ Error de seguridad: No se pudo restringir el acceso al archivo "\${nombreArchivo}".\`,
            detalle: err.message
          });

        }
      }
    });

    // 4️⃣ Guardar en base de datos
    const nuevoUsuario = { correo, nombre, rol, activo: true };
    usuarios.push(nuevoUsuario);
    guardarJSON(JSON_USUARIOS, usuarios);

    registrarLog("agregarUsuario", correoEjecutor, { usuarioCreado: correo, rol, nivel: "reader" });

    return respuestaJSON({
      status: "ok",
      mensaje: \`✅ Usuario "\${correo}" creado como lector. Archivos protegidos.\`,
      datos: usuarios,
    });

  } catch (err) {
    manejarError(err, "agregarUsuario", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al crear el usuario.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function actualizarUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, nombre, rol } = data;

    const index = usuarios.findIndex((u) => u.correo === correo);
    if (index === -1)
      return respuestaJSON({
        status: "error",
        mensaje: \`⚠️ No se encontró el usuario con correo "\${correo}".\`,
      });

    usuarios[index].nombre = nombre || usuarios[index].nombre;
    usuarios[index].rol = rol || usuarios[index].rol;

    if (nombre === "Administrador") {
      return respuestaJSON({ status: "error", mensaje: "🚫 No se puede Modificar Administrador." });
    }

    guardarJSON(JSON_USUARIOS, usuarios);
    registrarLog("actualizarUsuario", correoEjecutor, \`Usuario actualizado: \${correo}\`);

    return respuestaJSON({
      status: "ok",
      mensaje: \`✅ Usuario "\${correo}" actualizado correctamente.\`,
      datos: usuarios,
    });
  } catch (err) {
    manejarError(err, "actualizarUsuario", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar usuario.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function toggleUsuarioActivo(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, activo, nombre } = data;
    let driveStatus = "";

    const index = usuarios.findIndex((u) => u.correo.toLowerCase() === correo.toLowerCase());
    if (index === -1) return respuestaJSON({ status: "error", mensaje: "Usuario no encontrado." });

    if (nombre === "Administrador") {
      return respuestaJSON({ status: "error", mensaje: "🚫 No se puede activar o desactivar Administrador." });
    }

    // 1️⃣ Actualizar estado en el JSON
    usuarios[index].activo = Boolean(activo);
    guardarJSON(JSON_USUARIOS, usuarios);

    const config = leerJSON(JSON_CONFIGURACION);
    const carpetaId = config?.CARPETA_PRINCIPAL_ID;

    if (activo === true) {
      // --- LÓGICA DE ACTIVACIÓN ---
      try {
        // Intentar crear con v3, si falla intentar v2
        try {
          Drive.Permissions.create({
            'role': 'reader',
            'type': 'user',
            'emailAddress': correo
          }, carpetaId, { 'sendNotificationEmail': false });
        } catch(err) {
          Drive.Permissions.insert({
            'role': 'reader',
            'type': 'user',
            'value': correo
          }, carpetaId, { 'sendNotificationEmail': false });
        }
        driveStatus = "Permisos activados.";
      } catch (err) {
        driveStatus = "Ya tenía permisos o error: " + err.message;
      }

      Utilities.sleep(5000);
      const carpeta = DriveApp.getFolderById(carpetaId);

      let archivosOcultados = 0;

      ARCHIVOS_PROTEGIDOS.forEach(n => {
        const file = carpeta.getFilesByName(n);
        if (file.hasNext()) {
          const f = file.next();
          try {
            f.removeViewer(correo);
          }
          catch (err){

          }
        }
        archivosOcultados++;
      });

      driveStatus += \` Se protegieron \${archivosOcultados} archivos.\`;

    } else {
      // --- LÓGICA DE DESACTIVACIÓN (Corrección de .delete vs .remove) ---
      try {
        // Intentamos listar los permisos (v2 usa 'items', v3 usa 'permissions')
        const response = Drive.Permissions.list(carpetaId);
        const listaPermisos = response.permissions || response.items || [];

        const permiso = listaPermisos.find(p =>
          (p.emailAddress && p.emailAddress.toLowerCase() === correo.toLowerCase()) ||
          (p.value && p.value.toLowerCase() === correo.toLowerCase())
        );

        if (permiso) {
          // Intentar borrar con método v3 (.delete) o v2 (.remove)
          if (Drive.Permissions.remove) {
            Drive.Permissions.remove(carpetaId, permiso.id); // v2
            driveStatus = "Permiso revocado (v2).";
          } else {
            Drive.Permissions.delete(carpetaId, permiso.id); // v3
            driveStatus = "Permiso revocado (v3).";
          }
        } else {
          // Plan B: DriveApp si no se encuentra en la lista
          const carpeta = DriveApp.getFolderById(carpetaId);
          carpeta.removeViewer(correo);
          carpeta.removeEditor(correo);
          driveStatus = "Revocado mediante DriveApp.";
        }
      } catch (err) {
        driveStatus = "Error crítico al revocar: " + err.message;
      }
    }

    registrarLog("toggleUsuarioActivo", correoEjecutor, {
      usuarioAfectado: correo,
      nuevoEstado: activo ? "Activado" : "Desactivado",
      resultadoDrive: driveStatus
    });

    return respuestaJSON({
      status: "ok",
      mensaje: \`Usuario \${activo ? "activado" : "desactivado"}.\`,
      detalleDrive: driveStatus,
      datos: usuarios
    });

  } catch (err) {
    manejarError(err, "toggleUsuarioActivo", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al cambiar el estado del usuario.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo } = data;

    // 1️⃣ Validaciones previas
    if (correo?.toLowerCase() === correoEjecutor.toLowerCase()) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ No puedes eliminar tu propio usuario" });
    }

    if (!correo) {
      return respuestaJSON({ status: "error", mensaje: "⚠️ Debe especificar el correo." });
    }

    const usuarioAEliminar = usuarios.find((u) => u.correo.toLowerCase() === correo.toLowerCase());
    if (!usuarioAEliminar) {
      return respuestaJSON({ status: "error", mensaje: \`⚠️ No se encontró el usuario "\${correo}".\` });
    }

    if (usuarioAEliminar.rol === "administrador") {
      return respuestaJSON({ status: "error", mensaje: "🚫 No se puede eliminar administradores." });
    }

    // 2️⃣ Obtener el ID de la carpeta desde la configuración (Más seguro que buscar por nombre)
    const config = leerJSON(JSON_CONFIGURACION);
    const carpetaId = config?.CARPETA_PRINCIPAL_ID;

    if (!carpetaId) {
      throw new Error("No se pudo obtener el ID de la carpeta principal desde la configuración.");
    }

    // 3️⃣ ELIMINAR PERMISOS EN DRIVE (Lógica Robusta v3)
    try {
      // Listamos los permisos de la carpeta para encontrar el ID del permiso del usuario
      const response = Drive.Permissions.list(carpetaId);
      const permissions = response.permissions;

      const permiso = permissions.find(p => p.emailAddress?.toLowerCase() === correo.toLowerCase());

      if (permiso) {
        // Eliminamos el permiso específico
        Drive.Permissions.delete(carpetaId, permiso.id);
        console.log(\`✅ Permiso revocado en Drive para: \${correo}\`);
      } else {
        // Si no aparece en la lista, intentamos el método tradicional por si acaso
        const carpeta = DriveApp.getFolderById(carpetaId);
        carpeta.removeViewer(correo);
        carpeta.removeEditor(correo);
      }
    } catch (err) {
      // Registramos el error pero no detenemos la eliminación del JSON
      console.warn(\`Aviso al quitar permisos de Drive: \${err.message}\`);
    }

    // 4️⃣ Actualizar base de datos JSON
    const nuevosUsuarios = usuarios.filter((u) => u.correo.toLowerCase() !== correo.toLowerCase());
    guardarJSON(JSON_USUARIOS, nuevosUsuarios);

    registrarLog("eliminarUsuario", correoEjecutor, \`Usuario eliminado: \${correo}\`);

    return respuestaJSON({
      status: "ok",
      mensaje: \`🗑️ Usuario "\${correo}" eliminado y permisos de carpeta revocados.\`,
      datos: nuevosUsuarios,
    });

  } catch (err) {
    manejarError(err, "eliminarUsuario", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al eliminar usuario.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
// Productos
function agregarProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let productos = leerJSON(JSON_PRODUCTOS);
    let resultados = [];

    // Si llega un solo producto, lo convertimos a array
    let listaProductos = data.productos || [data];

    listaProductos.forEach(p => {
      const yaExiste = productos.some(u => normalizarTexto(u.nombre) === normalizarTexto(p.nombre));
      if (yaExiste) {
        resultados.push({ nombre: p.nombre, status: "error", mensaje: "⚠️ Ya existe este producto" });
        return;
      }

      const nuevoProd = {
        id: "prod" + new Date().getTime() + Math.floor(Math.random() * 1000),
        nombre: p.nombre,
        descripcion: p.descripcion || "",
        entidad: p.entidad || "",
        tipo: p.tipo || ""
      };
      productos.push(nuevoProd);
      resultados.push({ nombre: p.nombre, status: "ok", mensaje: "Producto agregado", id: nuevoProd.id });

      registrarLog("agregarProducto", correoEjecutor, { producto: nuevoProd });
    });

    guardarJSON(JSON_PRODUCTOS, productos);

    return respuestaJSON({
      status: "ok",
      resultados,
      datos: productos
    });

  } catch (err) {
    manejarError(err, "agregarProducto", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al procesar los productos.",
      detalle: err.message || String(err)
    });
  } finally {
    lock.releaseLock();
  }
}
function actualizarProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let productos = leerJSON(JSON_PRODUCTOS) || [];

    const { id, nombre, descripcion, entidad, tipo } = data;

    if (!id) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ El ID del producto es obligatorio."
      });
    }

    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ Producto no encontrado."
      });
    }

    // 🚫 Validar que no exista otro producto con el mismo nombre
    if (nombre) {
      const existeDuplicado = productos.some(p =>
        p.id !== id &&
        normalizarTexto(p.nombre) === normalizarTexto(nombre)
      );

      if (existeDuplicado) {
        return respuestaJSON({
          status: "error",
          mensaje: "⚠️ Ya existe otro producto con ese nombre."
        });
      }
    }

    // 🛠 Actualización parcial (solo si vienen campos)
    productos[index].nombre = nombre ?? productos[index].nombre;
    productos[index].descripcion = descripcion ?? productos[index].descripcion;
    productos[index].entidad = entidad ?? productos[index].entidad;
    productos[index].tipo = tipo ?? productos[index].tipo;

    guardarJSON(JSON_PRODUCTOS, productos);

    registrarLog("actualizarProducto", correoEjecutor, {
      productoActualizado: productos[index]
    });

    return respuestaJSON({
      status: "ok",
      mensaje: "✅ Producto actualizado correctamente.",
      producto: productos[index]
    });

  } catch (err) {
    manejarError(err, "actualizarProducto", correoEjecutor);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar el producto.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarProducto(id, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let productos = leerJSON(JSON_PRODUCTOS);

    const eliminado = productos.find(p => p.id === id);

    let nuevos = productos.filter(p => p.id !== id);
    guardarJSON(JSON_PRODUCTOS, nuevos);

    // ✅ Registrar log
    registrarLog("eliminarProducto", correoEjecutor, {
      productoEliminado: eliminado || id
    });
    return respuestaJSON({
      status: "ok",
      mensaje: "Producto eliminado",
      productos: nuevos
    });

  } catch (err) {
    manejarError(err, "eliminarProducto", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al intentar eliminar el producto.",
      detalle: err.message || String(err)
    });

  } finally {
    lock.releaseLock();
  }
}
// Archivos
function subirArchivoProducto(e, isMultipart, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let config = leerJSON(JSON_CONFIGURACION);
    let bddatos = leerJSON(JSON_BDD_DATOS);
    let productos = leerJSON(JSON_PRODUCTOS);


    // 👀 Capturamos el payload que llegó
    const camposEsperados = ["anio", "productosId"];
    const payload = obtenerPayloadArchivo(e, isMultipart, camposEsperados);

    const archivoBlob = payload.archivoBlob;
    const anio = payload.anio;
    let productosId = payload.productosId || [];

    const debugPayload = payload.debug;

    if (!archivoBlob || productosId.length === 0 || !anio) {
      return respuestaJSON({
        success: false,
        message: "❌ Faltan campos obligatorios",
        debug: debugPayload,
      });
    }

    if (typeof productosId === "string") {
      productosId = productosId.split(",");
    }

    productosId = productosId.map(p => String(p));

    // 🔎 buscar duplicados
    const nombresProductos = productos
      .filter(p => productosId.includes(String(p.id)))
      .map(p => p.nombre);

    // 🔎 buscar duplicados
    const registrosExistentes = bddatos.filter(r =>
      r.anio === anio &&
      (
        productosId.includes(String(r.productoId)) ||
        nombresProductos.includes(r.nombreProducto)
      )
    );

    if (registrosExistentes.length > 0) {

      const productosDuplicados = [
        ...new Set(
          registrosExistentes
            .map(r => r.nombreProducto)
            .filter(Boolean)
        )
      ];

      return respuestaJSON({
        success: true,
        status: "archivo_existente",
        existe: true,
        message: \`⚠️ Ya existe archivo para \${productosDuplicados.join(", ")} en el año \${anio}\`,
        registros: registrosExistentes,
        debug: debugPayload
      });

    }

    // --- Validar extensión y tamaño ---
    const validacion = validarArchivo(archivoBlob, config);

    if (!validacion.ok) {
      return respuestaJSON({
        success: false,
        status: "error_validacion", // Añadimos un status para identificarlo fácilmente
        message: validacion.mensaje, // Esto traerá "❌ Tamaño máximo permitido..." o "❌ Tipo de archivo..."
        debug: debugPayload
      });
    }

    const extension = validacion.extension;

    // --- Guardar en Drive ---
    const usarExistente = isMultipart
        ? e.parameter.usarExistente === "true"
        : (JSON.parse(e.postData.contents).usarExistente === true);

    const resultadoDrive = guardarArchivoEnDrive(archivoBlob, anio, null, usarExistente);

    if (!resultadoDrive.ok) {
        return respuestaJSON({
            success: true,
            status: resultadoDrive.status,
            message: resultadoDrive.mensaje,
            idArchivo: resultadoDrive.idArchivo,
            link: resultadoDrive.link,
            nombreArchivo: resultadoDrive.nombreArchivo,
            productosAsociados: productosId,
            debug: debugPayload
        });
    }

    const file = resultadoDrive.file;

    // --- Registrar en base de datos ---
    productosId.forEach(pid => {
      let prod = productos.find(p => p.id === pid);
      if (prod) {
        let registro = {
        registroId: "reg" + new Date().getTime() + "_" + pid,
        fileId: file.getId(),       // 👈 ahora explícito
        productoId: pid,
        nombreProducto: prod.nombre,
        descripcion: prod.descripcion || "",
        entidad: prod.entidad || "",
        tipo: prod.tipo || "",
        anio,
        nombreArchivo: resultadoDrive.nuevoNombre,
        link: resultadoDrive.link,
        fecha: new Date().toISOString()
      };
        bddatos.push(registro);
      }
    });

    guardarJSON(JSON_BDD_DATOS, bddatos);


    // ✅ Registrar log con nombres de productos
    const productosAfectados = productosId.map(pid => {
      const p = productos.find(x => x.id === pid);
      return p ? \`\${p.nombre} (\${p.entidad || "sin entidad"})\` : pid;
    });

    registrarLog("subirArchivoProducto", correoEjecutor, {
      archivo: archivoBlob.getName(),
      productos: productosAfectados,
      productosId,
      anio,
      nombreArchivoFinal: resultadoDrive.nuevoNombre || file.getName(),
      link: file.getUrl()
    });

    return respuestaJSON({
      success: true,
      status: "ok",
      message: "📂 Archivo subido correctamente",
      idArchivo: file.getId(),          // 👈 ID en Drive
      link: file.getUrl(),              // 👈 Enlace de Drive
      productosAsociados: productosId,
      debug: debugPayload, // 👈 siempre devolvemos lo que entró
    });
  } catch (err) {
    manejarError(err, "subirArchivoProducto", correoEjecutor);

    return respuestaJSON({
      success: false,
      status: "error_interno",
      message: "⚠️ Error crítico al procesar la subida.",
      detalle: err.message || String(err),
      stack: err.stack ? err.stack.substring(0, 500) : undefined,
    });

  } finally {
    lock.releaseLock();
  }
}
function subirArchivoFacturas(e, isMultipart, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let config = leerJSON(JSON_CONFIGURACION);

    // 👀 Capturamos el payload que llegó
    const camposEsperados = ["anio", "entidad", "descripcion", "valor", "metodoPago"];
    const payload = obtenerPayloadArchivo(e, isMultipart, camposEsperados);

    const archivoBlob = payload.archivoBlob;
    const anio = payload.anio;
    const entidad = payload.entidad;
    const descripcion = payload.descripcion;
    const valor = payload.valor;
    const metodoPago = payload.metodoPago;

    const debugPayload = payload.debug;

    if (!archivoBlob || !anio) {
      return respuestaJSON({
        success: false,
        message: "❌ Faltan campos obligatorios (archivo o año)",
        debug: debugPayload,
      });
    }

    // --- Validar extensión y tamaño ---
    const validacion = validarArchivo(archivoBlob, config);

    // MODIFICACIÓN AQUÍ:
    if (!validacion.ok) {
      return respuestaJSON({
        success: false,
        status: "error_validacion", // Añadimos un status para identificarlo fácilmente
        message: validacion.mensaje, // Esto traerá "❌ Tamaño máximo permitido..." o "❌ Tipo de archivo..."
        debug: debugPayload
      });
    }

    const extension = validacion.extension;

    // --- Guardar en Drive ---
     const usarExistente = isMultipart
        ? e.parameter.usarExistente === "true"
        : (JSON.parse(e.postData.contents).usarExistente === true);

    const resultadoDrive = guardarArchivoEnDrive(archivoBlob, anio, "facturas", usarExistente);

    if (!resultadoDrive.ok) {
        return respuestaJSON({
            success: true,
            status: resultadoDrive.status,
            message: resultadoDrive.mensaje,
            idArchivo: resultadoDrive.idArchivo,
            link: resultadoDrive.link,
            nombreArchivo: resultadoDrive.nombreArchivo,
            debug: debugPayload
        });
    }

    const file = resultadoDrive.file;


    // --- Registrar en base de datos ---
    let bddatos = leerJSON(JSON_BDD_FACTURAS);


    const registro = {
      registroId: "fac" + new Date().getTime() + Math.round(Math.random() * 10000),
      fileId: file.getId(),
      anio,
      entidad,
      descripcion,
      valor: Number(valor),   // 👈 convertir a número
      metodoPago,
      nombreArchivo: resultadoDrive.nuevoNombre,
      link: resultadoDrive.link,
      fecha: new Date().toISOString(),
    };

    bddatos.push(registro);
    guardarJSON(JSON_BDD_FACTURAS, bddatos);

    // ✅ Registrar log
    registrarLog("subirArchivoFacturas", correoEjecutor, {
      archivo: archivoBlob.getName(),
      anio,
      entidad,
      valor,
      metodoPago,
    });

    return respuestaJSON({
      success: true,
      status: "ok",
      message: "📂 Factura subida correctamente",
      idArchivo: file.getId(),
      link: file.getUrl(),
      debug: debugPayload,
    });

  } catch (err) {
    manejarError(err, "subirArchivoFacturas", correoEjecutor);

    return respuestaJSON({
      success: false,
      status: "error_interno",
      message: "❌ Error crítico al procesar la factura.",
      detalle: err.message || String(err)
    });

  } finally {
    lock.releaseLock();
  }
}
function remplazarArchivoProducto(e, isMultipart, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let config = leerJSON(JSON_CONFIGURACION);
    let bddatos = leerJSON(JSON_BDD_DATOS);

    const camposEsperados = ["productoId", "anio", "replaceOnlyThis"];
    const payload = obtenerPayloadArchivo(e, isMultipart, camposEsperados);

    const archivoBlob = payload.archivoBlob;
    const productoId = payload.productoId;
    const anio = payload.anio;
    const replaceOnlyThis = payload.replaceOnlyThis === true || payload.replaceOnlyThis === "true";
    const debugPayload = payload.debug;

    if (!archivoBlob || !productoId || !anio) {
      return respuestaJSON({
        success: false,
        status: "error_campos",
        message: "❌ Faltan campos obligatorios",
        debug: debugPayload
      });
    }

    let registroBase = bddatos.find(r => r.productoId === productoId && r.anio === anio);

    if (!registroBase) {
      return respuestaJSON({
        status: "error",
        message: "❌ No existe archivo para ese producto y año",
        debug: debugPayload
      });
    }

    let registrosRelacionados = [];
    if (replaceOnlyThis) {
      registrosRelacionados = [registroBase];
    } else {
      registrosRelacionados = bddatos.filter(
        r => r.fileId === registroBase.fileId && r.anio === anio
      );
    }

    if (registrosRelacionados.length === 0) {
      return respuestaJSON({
        status: "error",
        message: "⚠️ No se encontraron registros relacionados",
        debug: debugPayload
      });
    }

    const validacion = validarArchivo(archivoBlob, config);
    if (!validacion.ok) {
      return respuestaJSON({
        success: false,
        status: "error_validacion",
        message: validacion.mensaje,
        debug: debugPayload
      });
    }

    // --- Datos archivo anterior (antes de actualizar) ---
    const oldFileId = registroBase.fileId;
    const oldFileName = registroBase.nombreArchivo || "(desconocido)";

    const usarExistente = isMultipart
      ? e.parameter.usarExistente === "true"
      : (JSON.parse(e.postData.contents).usarExistente === true);

    const resultadoDrive = guardarArchivoEnDrive(archivoBlob, anio, null, usarExistente);

    if (!resultadoDrive.ok) {
      return respuestaJSON({
        success: true,
        status: resultadoDrive.status,
        message: resultadoDrive.mensaje,
        idArchivo: resultadoDrive.idArchivo,
        link: resultadoDrive.link,
        nombreArchivo: resultadoDrive.nombreArchivo,
        debug: debugPayload
      });
    }

    const file = resultadoDrive.file;

    // --- Actualizar registros en la variable bddatos ---
    registrosRelacionados.forEach(r => {
      r.fileId = file.getId();
      r.nombreArchivo = resultadoDrive.nuevoNombre || file.getName();
      r.link = resultadoDrive.link || file.getUrl();
      r.fecha = new Date().toISOString();
    });

    // --- IMPLEMENTACIÓN DE FUNCIÓN AUXILIAR ---
    // Se pasa la variable 'bddatos' YA actualizada para que la validación sea correcta.
    const resultadoLimpieza = verificarYEliminarArchivoDrive(
      oldFileId,
      oldFileName,
      anio,
      bddatos,
      correoEjecutor
    );

    // Persistir cambios
    guardarJSON(JSON_BDD_DATOS, bddatos);

    // --- Log y Respuesta ---
    const productosAfectados = registrosRelacionados.map(r => {
      return r.nombreProducto ? \`\${r.nombreProducto} (\${r.entidad || "sin entidad"})\` : r.productoId;
    });

    registrarLog("remplazarArchivoProducto", correoEjecutor, {
      nuevoFileId: file.getId(),
      nuevoNombre: file.getName(),
      productosAfectados,
      anio,
      replaceOnlyThis,
      archivoBorrado: resultadoLimpieza.borrado ? oldFileName : "no borrado",
      motivoLimpieza: resultadoLimpieza.motivo,
      linkNuevoArchivo: file.getUrl()
    });

    return respuestaJSON({
      success: true,
      status: "ok",
      message: \`Archivo reemplazado. \${resultadoLimpieza.motivo}\`,
      archivoId: file.getId(),
      registros: registrosRelacionados,
      debug: debugPayload
    });

  } catch (err) {
    manejarError(err, "remplazarArchivoProducto", correoEjecutor)

    return respuestaJSON({
      success: false,
      status: "error_interno",
      message: "❌ Error crítico al reemplazar el archivo.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarRegistroProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const registroId = data.id;

    if (!registroId) {
      return respuestaJSON({ status: "error", mensaje: "ID de registro no proporcionado" });
    }

    // 1. Leer la base de datos
    const datos = leerJSON(JSON_BDD_DATOS) || [];

    // 2. Buscar el registro que queremos eliminar
    const index = datos.findIndex(r => r.registroId === registroId);
    if (index === -1) {
      return respuestaJSON({ status: "error", mensaje: "Registro no encontrado" });
    }

    // Guardamos los datos necesarios antes de borrar el registro de la lista
    const { fileId, nombreArchivo, anio, productoId } = datos[index];

    // 3. CAMBIO IMPORTANTE: Eliminar el registro del JSON primero (en memoria)
    // Esto permite que la función auxiliar vea la base de datos SIN este registro.
    datos.splice(index, 1);

    // 4. ADICIÓN: Llamar a la función auxiliar para gestionar Drive de forma inteligente
    // Esta función borrará el ID y buscará "clones" manuales solo si nadie más los usa.
    const resultadoDrive = verificarYEliminarArchivoDrive(
      fileId,
      nombreArchivo,
      anio,
      datos,
      correoEjecutor
    );

    // 5. Guardar la base de datos actualizada
    guardarJSON(JSON_BDD_DATOS, datos);

    // 6. Registrar la acción en los logs
    registrarLog("eliminarRegistroProducto", correoEjecutor, {
      registroId,
      productoId,
      anio,
      fileId,
      nombreArchivo,
      archivoEliminadoEnDrive: resultadoDrive.borrado,
      detalleDrive: resultadoDrive.motivo
    });

    // 7. Respuesta al frontend
    return respuestaJSON({
      status: "ok",
      mensaje: "Registro eliminado correctamente. " + resultadoDrive.motivo,
      eliminado: {
        registroId,
        nombreArchivo,
        archivoEliminado: resultadoDrive.borrado
      }
    });

  } catch (err) {
    manejarError(err, "eliminarRegistroProducto", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al eliminar el registro.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function editarRegistroProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    const registroId = data.registroId;

    if (!registroId) {
      return respuestaJSON({ status: "error", mensaje: "ID de registro no proporcionado" });
    }

    const datos = leerJSON(JSON_BDD_DATOS);
    const index = datos.findIndex(r => r.registroId === registroId);

    if (index === -1) {
      return respuestaJSON({ status: "error", mensaje: "Registro no encontrado" });
    }

    let registroActual = { ...datos[index] }; // Clonamos para mantener el estado "antes"
    const fileIdAnterior = registroActual.fileId;

    let nuevoFileId = fileIdAnterior;
    let nuevoLink = registroActual.link;
    let huboCambioDeArchivo = false;

    // --- LÓGICA DE RE-VINCULACIÓN ---
    try {
      const carpetaRaizUsuario = obtenerOCrearCarpetaRaiz();
      const anioBusqueda = String(data.anio || registroActual.anio);
      const subcarpetasAnio = carpetaRaizUsuario.getFoldersByName(anioBusqueda);

      if (subcarpetasAnio.hasNext()) {
        const carpetaAño = subcarpetasAnio.next();
        const archivosCandidatos = carpetaAño.getFilesByName(registroActual.nombreArchivo);

        if (archivosCandidatos.hasNext()) {
          const archivoEncontrado = archivosCandidatos.next();
          nuevoFileId = archivoEncontrado.getId();
          nuevoLink = archivoEncontrado.getUrl();

          if (nuevoFileId !== fileIdAnterior) {
            huboCambioDeArchivo = true;
          }
        }
      }
    } catch (err) {
      // Si falla la búsqueda, mantenemos los datos que ya teníamos
    }

    const registroEditado = {
      ...registroActual,
      entidad: data.entidad ?? registroActual.entidad,
      nombreProducto: data.nombreProducto ?? registroActual.nombreProducto,
      descripcion: data.descripcion ?? registroActual.descripcion,
      tipo: data.tipo ?? registroActual.tipo,
      anio: data.anio ?? registroActual.anio,
      fileId: nuevoFileId,
      link: nuevoLink
    };


    // Reemplazar en la base de datos
    datos[index] = registroEditado;
    guardarJSON(JSON_BDD_DATOS, datos);

    // --- LÓGICA DE LOG PERSONALIZADA ---
    let infoLog = {
      registroId,
      antes: registroActual,
      despues: registroEditado
    };

    // Solo añadimos los detalles de link si hubo un cambio real de ID
    if (huboCambioDeArchivo) {
      infoLog.cambioLink = {
        mensaje: "Se detectó y vinculó una copia nueva del archivo",
        idAnterior: fileIdAnterior,
        idNuevo: nuevoFileId
      };
    }

    registrarLog("editarRegistroProducto", correoEjecutor, infoLog);

    return respuestaJSON({
      status: "ok",
      mensaje: huboCambioDeArchivo
        ? "Registro editado y archivo re-vinculado."
        : "Registro editado correctamente.",
      registro: registroEditado
    });

  } catch (err) {
    manejarError(err, "editarRegistroProducto", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error crítico al editar el registro.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function obtenerArchivosPorAnio(anio) {
  const bddatos = leerJSON(JSON_BDD_DATOS);
  const productos = leerJSON(JSON_PRODUCTOS);

  // Filtrar registros por año
  const registros = bddatos.filter(r => r.anio === anio);

  // Enriquecer con info del producto (entidad, tipo, descripcion)
  const resultado = registros.map(r => {
    const prod = productos.find(p => p.id === r.productoId) || {};
    return {
      idArchivo: r.id,
      registroId: r.registroId,            // 👈 nuevo campo con el ID real en Drive
      productoId: r.productoId,
      nombreProducto: r.nombreProducto,
      entidad: r.entidad || "",
      tipo: r.tipo || "",
      descripcion: r.descripcion || "",
      anio: r.anio,
      nombreArchivo: r.nombreArchivo,
      link: r.link,
      fecha: r.fecha
    };
  });

  return respuestaJSON({ status: "ok", anio, archivos: resultado });

}
function obtenerProductos() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const productos = leerJSON(JSON_PRODUCTOS);

    // 🧩 Si el archivo está vacío o no hay productos
    if (!productos || productos.length === 0) {
      return respuestaJSON({
        status: "ok",
        mensaje: "No hay productos para mostrar",
        data: []
      });
    }

    return respuestaJSON({
      status: "ok",
      mensaje: "Productos obtenidos correctamente",
      data: productos
    });

  } catch (err) {
    return respuestaJSON({
      status: "error",
      mensaje: "Error al obtener productos",
      detalle: err.message || "No se pudo leer el archivo JSON_PRODUCTOS"
    });

  } finally {
    lock.releaseLock();
  }
}
function obtenerFacturasPorAnio(anio) {
  let data = leerJSON(JSON_BDD_FACTURAS);

  const filtrado = data.filter(f => String(f.anio) === String(anio));

  return respuestaJSON({
    status: "ok",
    data: filtrado,
  });
}
function actualizarFactura(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let bddatos = leerJSON(JSON_BDD_FACTURAS);
    const registroId = data.registroId;

    if (!registroId) {
      return respuestaJSON({ status: "error", mensaje: "❌ Se requiere el registroId." });
    }

    const index = bddatos.findIndex(f => f.registroId === registroId);
    if (index === -1) {
      return respuestaJSON({ status: "error", mensaje: "❌ Factura no encontrada." });
    }

    // 1. Guardar estado anterior para el log
    const registroActual = { ...bddatos[index] };
    const fileIdAnterior = registroActual.fileId;

    let nuevoFileId = fileIdAnterior;
    let nuevoLink = registroActual.link;
    let huboCambioDeArchivo = false;

    // 2. Lógica de re-vinculación (Raíz > Año > facturas > Archivo)
    try {
      const carpetaRaizUsuario = obtenerOCrearCarpetaRaiz();
      const anioBusqueda = String(registroActual.anio);
      const subcarpetasAnio = carpetaRaizUsuario.getFoldersByName(anioBusqueda);

      if (subcarpetasAnio.hasNext()) {
        const carpetaAño = subcarpetasAnio.next();
        // Buscar la subcarpeta "facturas"
        const subcarpetasFacturas = carpetaAño.getFoldersByName("facturas");

        if (subcarpetasFacturas.hasNext()) {
          const carpetaFacturas = subcarpetasFacturas.next();
          const archivos = carpetaFacturas.getFilesByName(registroActual.nombreArchivo);

          if (archivos.hasNext()) {
            const archivoEncontrado = archivos.next();
            nuevoFileId = archivoEncontrado.getId();
            nuevoLink = archivoEncontrado.getUrl();

            if (nuevoFileId !== fileIdAnterior) {
              huboCambioDeArchivo = true;
            }
          }
        }
      }
    } catch (err) {
      // Si hay error en Drive, mantenemos lo que tenemos
    }

    // 3. Actualizar campos en el objeto
    const registroEditado = {
      ...registroActual,
      entidad: data.entidad ?? registroActual.entidad,
      descripcion: data.descripcion ?? registroActual.descripcion,
      valor: data.valor !== undefined ? Number(data.valor) : registroActual.valor,
      metodoPago: data.metodoPago ?? registroActual.metodoPago,
      fileId: nuevoFileId,
      link: nuevoLink
    };

    bddatos[index] = registroEditado;
    guardarJSON(JSON_BDD_FACTURAS, bddatos);

    // 4. Lógica de Log
    let infoLog = {
      registroId,
      antes: registroActual,
      despues: registroEditado
    };

    if (huboCambioDeArchivo) {
      infoLog.cambioLink = {
        mensaje: "Link de factura actualizado (nueva copia detectada en subcarpeta facturas)",
        idAnterior: fileIdAnterior,
        idNuevo: nuevoFileId
      };
    }

    registrarLog("actualizarFactura", correoEjecutor, infoLog);

    return respuestaJSON({
      status: "ok",
      mensaje: huboCambioDeArchivo
        ? "✅ Factura y link actualizados correctamente."
        : "✅ Factura actualizada correctamente.",
      datos: registroEditado
    });

  } catch (err) {
    manejarError(err, "actualizarFactura", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error crítico al actualizar la factura.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarFactura(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let bddatos = leerJSON(JSON_BDD_FACTURAS);
    const { registroId } = data;

    if (!registroId) {
      return respuestaJSON({
        status: "error",
        mensaje: "❌ Se requiere el registroId para eliminar la factura."
      });
    }

    const factura = bddatos.find(f => f.registroId === registroId);
    if (!factura) {
      return respuestaJSON({
        status: "error",
        mensaje: \`❌ No se encontró la factura con ID \${registroId}.\`
      });
    }

    // --- 1. Eliminar archivo en Drive ---
    try {
      const archivo = DriveApp.getFileById(factura.fileId);
      archivo.setTrashed(true);
    } catch (_) {
      // Si no existe, no se cae
    }

    // --- 2. Eliminar registro ---
    const nuevos = bddatos.filter(f => f.registroId !== registroId);
    guardarJSON(JSON_BDD_FACTURAS, nuevos);

    registrarLog("eliminarFactura", correoEjecutor, { registroId });

    return respuestaJSON({
      status: "ok",
      mensaje: "🗑️ Factura eliminada correctamente.",
      datos: factura
    });

  } catch (err) {
    manejarError(err, "eliminarFactura", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "Error al eliminar factura: ",
      detalle: err.message || String(err),
    });

  } finally {
    lock.releaseLock();
  }
}
function obtenerProductosPorArchivo(fileId) {
  const bddatos = leerJSON(JSON_BDD_DATOS);
  const productos = leerJSON(JSON_PRODUCTOS);

  // Filtrar registros por fileId
  const registros = bddatos.filter(r => r.fileId === fileId);

  if (registros.length === 0) {
    return respuestaJSON({ status: "error", mensaje: "❌ No hay productos asociados a este archivo" });
  }

  const resultado = registros.map(r => {
    const prod = productos.find(p => p.id === r.productoId) || {};
    return {
      productoId: r.productoId,
      nombreProducto: prod.nombre || r.nombreProducto,
      descripcion: prod.descripcion || "",
      entidad: prod.entidad || "",
      tipo: prod.tipo || "",
      anio: r.anio,
      nombreArchivo: r.nombreArchivo,
      link: r.link,
      fecha: r.fecha
    };
  });

  return respuestaJSON({ status: "ok", fileId, productos: resultado });
}
function obtenerDatosTributarios() {
  let datos = leerJSON(JSON_DATOS_TRIBUTARIOS);

  // ⚡ Normalizar: asignar orden único si falta
  let maxOrden = datos.reduce((max, d) => Math.max(max, d.orden || 0), 0);
  datos.forEach((d) => {
    if (d.orden === undefined) {
      maxOrden++;
      d.orden = maxOrden;
    }
  });

  // Guardar de nuevo si hubo cambios
  guardarJSON(JSON_DATOS_TRIBUTARIOS, datos);

  // Ordenar siempre por orden
  datos.sort((a, b) => (a.orden || 0) - (b.orden || 0));

  return respuestaJSON({ status: "ok", data: datos });
}
function actualizarDatosTributarios(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    // 1. Normalización de datos recibidos
    let nuevosDatos = data;
    if (!Array.isArray(data) && data && Array.isArray(data.data)) {
      nuevosDatos = data.data;
    } else if (!Array.isArray(data) && typeof data === 'object') {
       nuevosDatos = Object.values(data).filter(item => typeof item === 'object');
    }

    if (!Array.isArray(nuevosDatos)) {
      throw new Error("Formato de datos inválido");
    }

    // 2. Obtener los datos que están guardados actualmente en el servidor
    const datosActuales = leerJSON(JSON_DATOS_TRIBUTARIOS) || [];

    // 3. Detectar CAMBIOS (Diferencias entre el estado viejo y el nuevo)
    const cambios = {
      agregados: [],
      eliminados: [],
      modificados: []
    };

    // --- Detectar Agregados y Modificados ---
    nuevosDatos.forEach(nuevo => {
      const anterior = datosActuales.find(old => old.id === nuevo.id);

      if (!anterior) {
        // No existía el ID: Es nuevo
        cambios.agregados.push({ id: nuevo.id, label: nuevo.label, valor: nuevo.valor });
      } else {
        // Existía: Comparamos si cambió el valor o el label
        if (anterior.valor !== nuevo.valor || anterior.label !== nuevo.label) {
          cambios.modificados.push({
            campo: nuevo.label || nuevo.id,
            de: anterior.valor,
            a: nuevo.valor
          });
        }
      }
    });

    // --- Detectar Eliminados ---
    datosActuales.forEach(anterior => {
      const existeEnNuevos = nuevosDatos.find(n => n.id === anterior.id);
      if (!existeEnNuevos) {
        // Estaba antes pero ya no: Fue eliminado
        cambios.eliminados.push({ id: anterior.id, label: anterior.label });
      }
    });

    // 4. Guardar los nuevos datos
    guardarJSON(JSON_DATOS_TRIBUTARIOS, nuevosDatos);

    // 5. Registrar Log Detallado
    // Solo registramos si realmente hubo algún tipo de movimiento
    const huboCambios = cambios.agregados.length > 0 ||
                         cambios.eliminados.length > 0 ||
                         cambios.modificados.length > 0;

    registrarLog("actualizarDatosTributarios", correoEjecutor || "sistema", {
      resumen: huboCambios ? "Se detectaron cambios en la estructura o valores" : "Sincronización sin cambios",
      detalles: huboCambios ? cambios : "Ninguno",
      totalRegistros: nuevosDatos.length
    });

    return respuestaJSON({
      status: "ok",
      mensaje: "Datos actualizados",
      cambiosDetectados: huboCambios
    });

  } catch (err) {
    manejarError(err, "actualizarDatosTributarios", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar datos tributarios.",
      detalle: err.message || String(err),
    });
  } finally {
    lock.releaseLock();
  }
}
function obtenerLogs() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // Espera hasta 30s si otro proceso usa el recurso

  try {
    const logs = leerJSON(JSON_LOGS);

    // 🧩 Si el archivo está vacío o no hay logs
    if (!logs || logs.length === 0) {
      return respuestaJSON({
        status: "ok",
        mensaje: "No hay logs para mostrar",
        logs: []
      });
    }

    // ✅ Ordenar: el más reciente primero
    const logsOrdenados = [...logs].reverse();

    return respuestaJSON({
      status: "ok",
      mensaje: "Logs obtenidos correctamente",
      logs: logsOrdenados
    });

  } catch (err) {
    // 🚨 Si hubo un problema al leer el archivo
    return respuestaJSON({
      status: "error",
      mensaje: "Error al obtener logs",
      detalle: err.message || "No se pudo leer el archivo de logs"
    });

  } finally {
    lock.releaseLock();
  }
}
function limpiarLogsAntiguos(usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  const correoEjecutor = usuario?.correo || "sistema";

  try {
    let logs = leerJSON(JSON_LOGS) || [];

    // Si hay 10 o menos, no hacer nada
    if (logs.length <= 10) {
      return respuestaJSON({
        status: "ok",
        mensaje: "No se eliminaron logs. Hay 10 o menos registros.",
        total: logs.length
      });
    }

    // 🔥 CONSERVAR LOS ÚLTIMOS 10 (los de abajo)
    const logsConservados = logs.slice(-10);
    const eliminados = logs.length - logsConservados.length;

    guardarJSON(JSON_LOGS, logsConservados);

    registrarLog("limpiarLogsAntiguos", correoEjecutor, {
      eliminados,
      totalFinal: logsConservados.length
    });

    return respuestaJSON({
      status: "ok",
      mensaje: \`🧹 \${eliminados} logs eliminados, se conservaron los últimos 10.\`,
      totalFinal: logsConservados.length
    });

  } catch (err) {
    manejarError(err, "limpiarLogsAntiguos", correoEjecutor);

    return respuestaJSON({
      status: "error",
      mensaje: "❌ Falló el mantenimiento de logs.",
      detalle: err.message || String(err),
    })
  } finally {
    lock.releaseLock();
  }
}

/******************************
 * FIN BACKEND
 ******************************/


`,yT="/appdeclaracion/assets/imgBackend1-DSJ-bLa1.webp",xT="/appdeclaracion/assets/imgBackend2-Cqt62vUJ.webp",wT="/appdeclaracion/assets/imgBackend3-DaVLght5.webp",jT="/appdeclaracion/assets/imgBackend4-B-5yDjcs.webp",ST="/appdeclaracion/assets/imgBackend5-DVl6r9fh.webp",ET="/appdeclaracion/assets/imgBackend6-B2Xs4tWE.webp",NT="/appdeclaracion/assets/imgBackend7-N9ASCtVG.webp",CT="/appdeclaracion/assets/imgBackend8-BwprXXyy.webp",AT="/appdeclaracion/assets/imgBackend9-D3jD8_Vx.webp",OT=()=>{const[n,a]=m.useState(!1),o=()=>{window.open("https://script.google.com/home/","_blank")},l=[{img:yT,descripcion:"Ingrese a la consola de Google Apps Script para comenzar con la configuración:",puntos:["Escriba https://script.google.com/home/ en su navegador.","O haga clic en el botón 'Abrir Apps Script' de arriba."]},{img:xT,descripcion:"Inicie un nuevo proyecto desde el panel principal:",puntos:["Haga clic en el botón 'Nuevo proyecto' ubicado en la parte superior izquierda."]},{img:wT,descripcion:"Configure el código base del backend:",puntos:["Cambie el nombre del proyecto a 'AppDeclaracion' haciendo doble click encima del nombre .","Ubique el archivo Codigo.gs y elimine todo su contenido.","Pegue el código proporcionado por AppDeclaracion el cual puede ver y copiar en el siguiente botón."]},{img:jT,descripcion:"Habilite los servicios necesarios de Google:",puntos:["En el panel izquierdo, haga clic en el símbolo '+' en Servicios para agregar un Drive.","Busque y seleccione 'Drive API'.","Seleccione la versión v3 y haga clic en 'Añadir'."]},{img:ST,descripcion:"Inicie el proceso de publicación:",puntos:["Haga clic en el botón azul 'Implementar' (arriba a la derecha).","Seleccione 'Nueva implementación'.","Haga clic en el icono de engranaje y elija 'Aplicación web'."]},{img:ET,descripcion:"Configure los parámetros de acceso de la aplicación:",puntos:["Descripción: 'Versión inicial'.","Ejecutar como: 'Yo'.","Quién tiene acceso: 'Cualquier usuario' (esto es vital para la conexión).","Haga clic en el botón 'Implementar'."]},{img:NT,descripcion:"Autorice los permisos de seguridad de Google:",puntos:["Haga clic en 'Autorizar acceso'.","Seleccione su cuenta de Google.","Haga clic en 'Advanced' y luego en 'Go to AppDeclaracion (unsafe)'.","Permita todos los accesos y copie la URL generada (URL de la aplicación web) en un archivo de texto para utilizarla posteriormente en el worker."]},{img:CT,descripcion:"Ejecute la configuración inicial de la base de datos:",puntos:["En la barra de herramientas superior, seleccione la función 'inicializarSistema'.","Haga clic en el botón 'Ejecutar'.","Espere a que el registro de ejecución finalice correctamente.","En el logo de Apps Script Superior Izquierdo de colores hacer click para regresar al administrador de proyectos"]},{img:AT,descripcion:"Active el acceso programático final:",puntos:["En el panel izquierdo hacer click en el icono de engranaje de configuración.","Hacer click en 'API de Google Apps Script' el cual se debe encontrar desactivado","Hacer click en la parte derecha en el botón Switch o deslizante","Finalizado este paso y copiada la URL ya podemos cerrar Apps Script y pasar a la pestaña del Worker"]}];return s.jsxs("div",{className:"crear-backend",children:[s.jsx("h1",{children:"Crear Backend en Apps Script"}),s.jsx("div",{className:"video-container",children:s.jsx("iframe",{src:"https://player.vimeo.com/video/1182426720?h=ddeac77678&badge=0&autopause=0&player_id=0&app_id=58479",title:"Tutorial Backend Apps Script",allowFullScreen:!0,allow:"autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",referrerPolicy:"strict-origin-when-cross-origin",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),s.jsx("div",{className:"boton-container",children:s.jsx("button",{onClick:o,children:"Abrir Apps Script"})}),s.jsx("div",{className:"pasos-container",children:l.map((u,d)=>s.jsxs("div",{className:"paso",children:[s.jsx("img",{src:u.img,alt:`Paso ${d+1}`}),s.jsxs("div",{className:"paso-contenido",children:[s.jsxs("strong",{children:["Paso ",d+1,":"]}),s.jsx("p",{children:u.descripcion}),u.puntos&&s.jsx("ul",{children:u.puntos.map((p,g)=>s.jsx("li",{children:p},g))})]}),d===2&&s.jsx("div",{className:"boton-container",children:s.jsx("button",{onClick:()=>a(!0),children:"Ver código del Backend"})})]},d))}),s.jsx(f0,{isOpen:n,onClose:()=>a(!1),titulo:"Código Backend Apps Script",codigo:bT})]})},kT=`export default {
  async fetch(request) {
    // ⚡ Manejo de preflight CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "*"
        }
      });
    }

    const destino =
      "https://script.google.com/macros/s/AKfycbx9YLF8p2FHnMGK88Hw4JKibeUu69V-BO_bQpoHFG1Z5VAf5F-ecjaXJ4-rN9D-_rzO/exec";

    try {

      // ✅ Bloque para reenviar token y tipo de contenido
      const headers = new Headers();
      headers.set("Content-Type", "application/json");

      // 🧠 Si el frontend envía un Authorization: Bearer <token>, lo reenviamos
      const authHeader = request.headers.get("Authorization");
      if (authHeader) {
        headers.set("Authorization", authHeader);
      }
      //******************************************** */
      let response;

      if (request.method === "POST") {
        // 🚀 reenviar con body
        const body = await request.text();
        response = await fetch(destino, {
          method: "POST",
          headers, // 👈 usa los headers creados arriba
          body,
        });

      } else if (request.method === "GET") {
        // 🚀 reenviar querystring
        const url = new URL(request.url);
        response = await fetch(\`\${destino}?\${url.searchParams.toString()}\`, {
          method: "GET",
          headers, // 👈 usa los headers creados arriba
        });
      } else {
        return new Response("Método no permitido", { status: 405 });
      }

      const content = await response.text();

      const contentType = response.headers.get("Content-Type") || "application/json";

      return new Response(content, {
        status: response.status,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "*",
          "Content-Type": contentType,
        },
      });

    } catch (err) {
      return new Response(
        JSON.stringify({
          success: false,
          message: \`❌ Worker error: \${err.message}\`
        }),
        {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      );
    }
  }
};
`,TT="/appdeclaracion/assets/imgWorker1-DsxzgBXq.webp",RT="/appdeclaracion/assets/imgWorker2-BG05QrIG.webp",DT="/appdeclaracion/assets/imgWorker3-ByEQQa3f.webp",LT="/appdeclaracion/assets/imgWorker4-vNF1IGvm.webp",MT="/appdeclaracion/assets/imgWorker5-BMmv7aUK.webp",BT="/appdeclaracion/assets/imgWorker6-FbMqyreq.webp",zT="/appdeclaracion/assets/imgWorker7-DYrg8XBA.webp",_T=()=>{const[n,a]=m.useState(!1),o=()=>{window.open("https://dash.cloudflare.com/","_blank")},l=[{img:TT,descripcion:'Ingrese a la consola de Cloudflare escribiendo en el navegador https://dash.cloudflare.com/login o haciendo clic en el botón "Abrir Cloudflare". Luego:',puntos:["Haga clic en 'Continue with Google'","Seleccione su cuenta de Google","Haga clic en 'Continuar' para ingresar al panel."]},{img:RT,descripcion:"Dentro del panel de Cloudflare ubique el menú lateral izquierdo:",puntos:["Busque la sección 'Compute'","Haga clic en 'Workers & Pages'","Luego haga clic en el botón 'Create application'"]},{img:DT,descripcion:"En la pantalla de creación de la aplicación ubique la opción 'Start with hello world!' y haga clic en ella.",puntos:["Esto generará un Worker base que posteriormente será modificado con el código de AppDeclaracion el cual puede ver y copiar en el siguiente botón."]},{img:LT,descripcion:"En el campo 'Worker name' elimine el contenido existente y escriba:",puntos:["appdeclaracion","Luego haga clic en el botón 'Deploy' para crear el Worker."]},{img:MT,descripcion:"Una vez creado el Worker aparecerá una pantalla de confirmación.",puntos:["En esta pantalla haga clic en el botón 'Edit code' para abrir el editor del Worker."]},{img:BT,descripcion:"Dentro del editor ubique el archivo worker.js, elimine el código existente y pegue el proporcionado por AppDeclaracion. Luego, busque la línea 'const destino' y:",puntos:["Reemplace la URL entre comillas por la generada en Apps Script.","Asegúrese que inicie con https:// y termine en /exec.","Copie la URL pública del Worker que aparece en la parte superior derecha (esta es la que compartirá con los usuarios).","Haga clic en 'Deploy' y luego en el enlace 'appdeclaracion' para regresar."]},{img:zT,descripcion:"Al regresar al panel principal diríjase nuevamente a 'Workers & Pages':",puntos:["Verifique que aparezca el Worker llamado 'appdeclaracion'.","Esto confirma que el Worker fue creado y desplegado correctamente.","Finalizado este paso y copiada la URL que debe registrarse en la sección 'Configuración de Backends'. Es la misma dirección que deberá proporcionarle a su contador. Una vez que él le informe su correo electrónico, usted podrá registrarlo como nuevo usuario con los roles y permisos adecuados. Recuerde que tanto usted como el contador deben agregar esta URL del Worker en sus respectivos paneles de AppDeclaración para que el sistema funcione correctamente."]}];return s.jsxs("div",{className:"crear-backend",children:[s.jsx("h1",{children:"Crear worker"}),s.jsx("div",{className:"video-container",children:s.jsx("iframe",{src:"https://player.vimeo.com/video/1182429387?h=02f60cfc57&badge=0&autopause=0&player_id=0&app_id=58479",title:"Tutorial Backend Workwe CloudFlare",allowFullScreen:!0,allow:"autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",referrerPolicy:"strict-origin-when-cross-origin",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),s.jsx("div",{className:"boton-container",children:s.jsx("button",{onClick:o,children:"Abrir CloudFlare"})}),s.jsx("div",{className:"pasos-container",children:l.map((u,d)=>s.jsxs("div",{className:"paso",children:[s.jsx("img",{src:u.img,alt:`Paso ${d+1}`}),s.jsxs("div",{className:"paso-contenido",children:[s.jsxs("strong",{children:["Paso ",d+1,":"]}),s.jsx("p",{children:u.descripcion}),u.puntos&&s.jsx("ul",{children:u.puntos.map((p,g)=>s.jsx("li",{children:p},g))})]}),d===2&&s.jsx("div",{className:"boton-container",children:s.jsx("button",{onClick:()=>a(!0),children:"Ver código del Worker"})})]},d))}),s.jsx(f0,{isOpen:n,onClose:()=>a(!1),titulo:"Código Cloudflare Worker",codigo:kT})]})},UT=()=>{const[n,a]=m.useState("appsScript");return s.jsxs(_o,{fluid:!0,className:"p-3",children:[s.jsx(yr,{children:s.jsx(Nn,{children:s.jsx("h3",{className:"mb-4 text-center fw-bold",children:"⚙️ Configuración Backend"})})}),s.jsx(yr,{children:s.jsxs(Nn,{children:[s.jsxs(vm,{activeKey:n,onSelect:o=>a(o),id:"admin-tabs",className:"mb-3",justify:!0,children:[s.jsx(xo,{eventKey:"appsScript",title:"🧱 Apps Script"}),s.jsx(xo,{eventKey:"worker",title:"🏰 Worker"})]}),n==="appsScript"&&s.jsx(OT,{}),n==="worker"&&s.jsx(_T,{})]})})]})};function si(){return s.jsx("div",{className:"p-4 text-danger fw-bold",children:"❌ No tienes permiso para realizar esta acción."})}const _b=({isMobile:n})=>n?s.jsxs("div",{className:"usuario-card skeleton-card-usuario",children:[s.jsxs("div",{className:"card-header d-flex align-items-center",children:[s.jsx("div",{className:"skeleton-bar",style:{width:"50%"}}),s.jsx("div",{className:"skeleton-badge ms-2"})]}),s.jsxs("div",{className:"card-body",children:[s.jsx("div",{className:"skeleton-bar mb-2",style:{width:"30%"}}),s.jsx("div",{className:"skeleton-bar mb-3",style:{width:"80%"}}),s.jsx("div",{className:"skeleton-switch mb-3"}),s.jsxs("div",{className:"d-flex gap-2",children:[s.jsx("div",{className:"skeleton-button-lg"}),s.jsx("div",{className:"skeleton-button-lg"})]})]})]}):s.jsxs("tr",{className:"usuario-skeleton-row",children:[s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"85%"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-badge"})}),s.jsx("td",{className:"text-center",children:s.jsx("div",{className:"skeleton-switch"})}),s.jsx("td",{className:"text-center",children:s.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[s.jsx("div",{className:"skeleton-button"}),s.jsx("div",{className:"skeleton-button"})]})})]}),IT=()=>{const{usuarios:n,rolesDisponibles:a,rolesErrorPermisos:o,getDatos:l,addDato:u,updateDato:d,toggleActivo:p,deleteDato:g,loading:h}=Uk(),{errors:v,validateField:b,validateForm:x,clearErrors:w,clearError:S}=Vo(),{user:C}=ji(),[k,E]=m.useState(!1),[O,N]=m.useState(null),[D,L]=m.useState({correo:"",nombreUsuario:"",rol:""}),[z,_]=m.useState(null),[M,R]=m.useState(!1),{puede:q}=ha(),Q=q("getUsuarios");m.useEffect(()=>{Q&&l()},[l,Q]);const re=async()=>{if(w(),!x({correo:D.correo,nombreUsuario:D.nombreUsuario,rol:D.rol}))return;const le={correo:D.correo.toLowerCase(),nombre:vt(D.nombreUsuario),rol:D.rol};O?await d(O.correo,le):await u(le),E(!1),N(null),L({correo:"",nombreUsuario:"",rol:""})},oe=J=>{N(J),L({correo:J.correo,nombreUsuario:J.nombre,rol:J.rol}),E(!0)},ie=async J=>{await p(J.correo,!J.activo,J.nombre)};return Q?s.jsxs("div",{className:"usuarios-admin p-3",children:[s.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[s.jsx("h4",{className:"fw-bold mb-0",children:"👥 Administración de Usuarios"}),s.jsx(Oe,{onClick:()=>E(!0),variant:"primary",size:"sm",disabled:h,children:"➕ Crear Usuario"})]}),!h&&n.length===0?s.jsx("div",{className:"text-center text-muted py-4",children:"No hay usuarios registrados."}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"table-responsive shadow-sm rounded d-none d-md-block",children:s.jsxs(hi,{hover:!0,className:"align-middle mb-0",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Correo"}),s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Rol"}),s.jsx("th",{className:"text-center",children:"Estado"}),s.jsx("th",{className:"text-center",children:"Acciones"})]})}),s.jsx("tbody",{children:h?Array.from({length:5}).map((J,le)=>s.jsx(_b,{isMobile:!1},`skel-table-${le}`)):n.map((J,le)=>s.jsxs("tr",{children:[s.jsx("td",{children:J.correo}),s.jsx("td",{children:J.nombre}),s.jsx("td",{children:s.jsx(bo,{bg:J.rol==="administrador"?"warning":J.rol==="contador"?"info":"secondary",text:J.rol==="administrador"?"dark":"white",className:"px-2 py-1 text-capitalize",children:J.rol})}),s.jsx("td",{className:"text-center",children:s.jsx(ae.Check,{type:"switch",checked:J.activo,onChange:()=>ie(J),label:s.jsx("span",{className:J.activo?"text-success":"text-danger",children:J.activo?"Activo":"Inactivo"})})}),s.jsx("td",{className:"text-center","data-label":"Acciones",children:s.jsx("div",{className:"ico-edit-elim",children:C?.correo===J.correo?s.jsx(bo,{bg:"light",text:"dark",className:"border shadow-sm",children:"Tu sesión"}):J.nombre.toLowerCase()==="administrador"?s.jsxs(bo,{bg:"dark",text:"white",className:"shadow-sm",children:[s.jsx("i",{className:"bi bi-shield-lock-fill me-1"})," Restringido"]}):s.jsxs(s.Fragment,{children:[s.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>oe(J)}),s.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{_(J),R(!0)}})]})})})]},le))})]})}),s.jsx("div",{className:"usuarios-cards d-md-none",children:h?Array.from({length:4}).map((J,le)=>s.jsx(_b,{isMobile:!0},`skel-card-${le}`)):n.map((J,le)=>s.jsxs("div",{className:"usuario-card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("strong",{children:J.nombre}),s.jsx(bo,{bg:J.rol==="administrador"?"warning":"info",text:J.rol==="administrador"?"dark":"white",className:"ms-2",children:J.rol})]}),s.jsxs("div",{className:"card-body",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Correo:"}),s.jsx("br",{})," ",J.correo]}),s.jsx(ae.Check,{type:"switch",id:`switch-mobile-${J.correo}`,checked:J.activo,onChange:()=>ie(J),label:J.activo?"Activo":"Inactivo"}),s.jsxs("div",{className:"d-flex gap-2 mt-3",children:[s.jsx("span",{className:"label-edit-elim-span",children:"Acciones:"}),s.jsx("div",{className:"ico-edit-elim",children:C?.correo===J.correo?s.jsx("span",{className:"text-muted small fw-bold",children:"Sesión activa"}):J.nombre.toLowerCase()==="administrador"?s.jsxs("span",{className:"text-danger small fw-bold span-i-restri",children:[s.jsx("i",{className:"bi bi-shield-lock-fill me-1"})," Restringido"]}):s.jsxs(s.Fragment,{children:[s.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>oe(J)}),s.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{_(J),R(!0)}})]})})]})]})]},le))})]}),s.jsxs(ye,{show:k,centered:!0,onHide:()=>E(!1),children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:O?"Editar Usuario":"Nuevo Usuario"})}),s.jsxs(ye.Body,{children:[s.jsx(Fo,{errors:v}),s.jsxs(ae,{children:[s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{children:"Correo"}),s.jsx(ae.Control,{type:"email",value:D.correo,onChange:J=>{const le=J.target.value.toLowerCase();L({...D,correo:le}),S("correo")},onBlur:J=>b("correo",J.target.value),disabled:O})]}),s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{children:"Nombre completo"}),s.jsx(ae.Control,{type:"text",value:D.nombreUsuario,onChange:J=>{L({...D,nombreUsuario:J.target.value}),S("nombreUsuario")},onBlur:J=>b("nombreUsuario",J.target.value)})]}),s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{children:"Rol"}),o?s.jsx("div",{className:"alert alert-warning py-2 small",children:"⚠️ No tienes permiso para ver roles."}):s.jsxs(ae.Select,{value:D.rol,onChange:J=>{L({...D,rol:J.target.value}),S("rol")},onBlur:J=>b("rol",J.target.value),children:[s.jsx("option",{value:"",children:"Seleccionar rol..."}),a.map((J,le)=>s.jsx("option",{value:J.rol,children:J.rol},le))]})]})]})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:()=>E(!1),children:"Cancelar"}),s.jsx(Oe,{variant:"success",onClick:re,disabled:h,children:h?s.jsxs(s.Fragment,{children:[s.jsx(St,{size:"sm",animation:"border"})," Guardando..."]}):"💾 Guardar"})]}),s.jsx(yn,{show:h})]}),s.jsx(ga,{show:M,onHide:()=>R(!1),title:"Eliminar Usuario",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar al usuario ",s.jsx("strong",{children:z?.correo}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>g(z?.correo)})]}):s.jsx(si,{})},PT=()=>s.jsxs("tr",{className:"rol-skeleton-row",children:[s.jsx("td",{"data-label":"Rol",children:s.jsx("div",{className:"d-flex align-items-center",children:s.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})})}),s.jsx("td",{"data-label":"Permisos",children:s.jsxs("div",{className:"d-flex flex-column gap-2",children:[s.jsx("div",{className:"skeleton-bar",style:{width:"90%"}}),s.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})]})}),s.jsx("td",{className:"td-acciones text-center","data-label":"Acciones",children:s.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[s.jsx("div",{className:"skeleton-btn-rect"}),s.jsx("div",{className:"skeleton-btn-rect"})]})})]}),$T=()=>{const{roles:n,funcionesDisponibles:a,getDatos:o,addDato:l,updateDato:u,deleteDato:d,loading:p}=Hk(),{errors:g,validateField:h,validateForm:v,clearErrors:b,clearError:x}=Vo(),[w,S]=m.useState(!1),[C,k]=m.useState(""),[E,O]=m.useState([]),[N,D]=m.useState(null),[L,z]=m.useState(null),[_,M]=m.useState(!1),{puede:R}=ha(),q=R("getRoles");m.useEffect(()=>{q&&o()},[o,q]);const Q=async()=>{b();const J={rolPermisos:E};if(N||(J.rolNombre=C),!v(J))return;const $=vt(C);N?await u(N.rol,E):await l($,E),S(!1),k(""),O([]),D(null)},re=J=>{D(J),k(J.rol),O((J.permisos||[]).map(le=>le.trim())),S(!0)},oe=J=>{const le=E.includes(J)?E.filter($=>$!==J):[...E,J];O(le),h("rolPermisos",le)},ie=()=>{const J=E.length===a.length?[]:a;O(J),h("rolPermisos",J)};return q?s.jsxs("div",{className:"roles-admin-container p-3",children:[s.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[s.jsx("h4",{className:"fw-bold mb-0",children:"Administración de Roles"}),s.jsx(Oe,{onClick:()=>{D(null),k(""),O([]),S(!0)},variant:"primary",disabled:p,children:"➕ Nuevo Rol"})]}),s.jsx("div",{className:"table-responsive shadow-sm rounded",children:s.jsxs(hi,{striped:!0,bordered:!0,hover:!0,className:"align-middle mb-0",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Rol"}),s.jsx("th",{children:"Permisos"}),s.jsx("th",{className:"text-center",children:"Acciones"})]})}),s.jsx("tbody",{children:p?Array.from({length:5}).map((J,le)=>s.jsx(PT,{},`rol-skel-${le}`)):n.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:"3",className:"text-center py-4 text-muted",children:"No hay roles definidos."})}):n.map((J,le)=>s.jsxs("tr",{children:[s.jsxs("td",{"data-label":"Rol",children:[s.jsx("strong",{children:J.rol}),J.rol==="administrador"&&s.jsx(bo,{bg:"warning",text:"dark",className:"ms-2",children:"Protegido"})]}),s.jsx("td",{"data-label":"Permisos",children:s.jsx("div",{className:"text-muted small text-break",children:J.permisos?.includes("*")?"Todos los permisos":J.permisos?.join(", ")||"—"})}),s.jsx("td",{className:"td-acciones text-center","data-label":"Acciones",children:s.jsxs("div",{className:"ico-edit-elim",children:[s.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>re(J)}),J.rol!=="administrador"&&s.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{z(J.rol),M(!0)}})]})})]},le))})]})}),s.jsxs(ye,{show:w,onHide:()=>S(!1),size:"lg",centered:!0,children:[s.jsx(ye.Header,{closeButton:!0,children:s.jsx(ye.Title,{children:N?`Editar Permisos: ${N.rol}`:"Crear Nuevo Rol"})}),s.jsxs(ye.Body,{children:[s.jsx(Fo,{errors:g}),!N&&s.jsxs(ae.Group,{className:"mb-3",children:[s.jsx(ae.Label,{className:"fw-bold",children:"Nombre del Rol"}),s.jsx(ae.Control,{type:"text",value:C,onChange:J=>{k(J.target.value),x("rolNombre")},onBlur:J=>h("rolNombre",J.target.value),placeholder:"Ejemplo: Contador, Revisor, Supervisor..."})]}),s.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[s.jsxs(ae.Label,{className:"fw-bold mb-0",children:["Permisos del Rol (",E.length,")"]}),s.jsx(Oe,{size:"sm",variant:"outline-primary",onClick:ie,children:E.length===a.length?"Deseleccionar todos":"Seleccionar todos"})]}),s.jsx("div",{className:"p-3 bg-light border rounded",style:{maxHeight:"350px",overflowY:"auto"},children:s.jsx("div",{className:"row",children:a.map(J=>s.jsx("div",{className:"col-md-6 col-lg-4 mb-2",children:s.jsx(ae.Check,{type:"checkbox",id:`perm-${J}`,label:s.jsx("span",{className:"small",children:J}),checked:E.includes(J),onChange:()=>oe(J)})},J))})})]}),s.jsxs(ye.Footer,{children:[s.jsx(Oe,{variant:"secondary",onClick:()=>S(!1),children:"Cancelar"}),s.jsx(Oe,{variant:"success",onClick:Q,disabled:p,children:p?s.jsxs(s.Fragment,{children:[s.jsx(St,{size:"sm",animation:"border",className:"me-2"}),"Guardando..."]}):"💾 Guardar"})]}),s.jsx(yn,{show:p})]}),s.jsx(ga,{show:_,onHide:()=>M(!1),title:"Eliminar Rol",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar el rol ",s.jsx("strong",{children:L}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>d(L)})]}):s.jsx(si,{})},Ub=({isTable:n=!1})=>n?s.jsxs("tr",{className:"log-skeleton-row",children:[s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"140px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"100px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})}),s.jsx("td",{children:s.jsx("div",{className:"skeleton-bar-rect"})})]}):s.jsxs("div",{className:"log-skeleton-card",children:[s.jsxs("div",{className:"log-header-skeleton",children:[s.jsx("div",{className:"skeleton-bar",style:{width:"40%"}}),s.jsx("div",{className:"skeleton-bar",style:{width:"30%"}})]}),s.jsxs("div",{className:"log-body-skeleton",children:[s.jsx("div",{className:"skeleton-bar mb-3",style:{width:"60%"}}),s.jsx("div",{className:"skeleton-bar-rect"})]})]});function HT(){const{puede:n}=ha(),a=n("getLogs"),{logs:o,getDatos:l,clearDatos:u,loading:d}=zk(),[p,g]=m.useState(!1);return m.useEffect(()=>{a&&l()},[l,a]),a?s.jsxs("div",{className:"p-4",children:[s.jsx("h2",{className:"mb-4",children:"📜 Administración de Logs"}),s.jsx("div",{className:"d-flex justify-content-end mb-3",children:s.jsx(Oe,{variant:"danger",onClick:()=>g(!0),disabled:d,children:"🧹 Limpiar Logs Antiguos"})}),s.jsxs(hi,{striped:!0,bordered:!0,hover:!0,size:"sm",responsive:!0,className:"logs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Acción"}),s.jsx("th",{children:"Usuario"}),s.jsx("th",{children:"Detalle"})]})}),s.jsx("tbody",{children:d?Array.from({length:8}).map((h,v)=>s.jsx(Ub,{isTable:!0},`table-skel-${v}`)):o.length>0?o.map((h,v)=>s.jsxs("tr",{children:[s.jsx("td",{children:h.fecha}),s.jsx("td",{children:h.accion}),s.jsx("td",{children:h.usuario}),s.jsx("td",{children:s.jsx("pre",{className:"bg-light p-2 rounded small mb-0",children:JSON.stringify(h.detalle,null,2)})})]},v)):s.jsx("tr",{children:s.jsx("td",{colSpan:4,className:"text-center text-muted",children:"No hay logs disponibles"})})})]}),s.jsx("div",{className:"logs-cards",children:d?Array.from({length:4}).map((h,v)=>s.jsx(Ub,{isTable:!1},`card-skel-${v}`)):o.length>0?o.map((h,v)=>s.jsxs("div",{className:"log-card",children:[s.jsxs("div",{className:"log-header",children:[s.jsx("h6",{children:h.accion}),s.jsx("span",{children:h.fecha})]}),s.jsxs("div",{className:"log-body",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Usuario:"})," ",h.usuario]}),s.jsx("pre",{children:JSON.stringify(h.detalle,null,2)})]})]},v)):s.jsx("p",{className:"text-center text-muted",children:"No hay logs disponibles"})}),s.jsx(ga,{show:p,onHide:()=>g(!1),title:"🧹 Limpiar Logs Antiguos",message:s.jsxs(s.Fragment,{children:["Esta acción eliminará todos los logs antiguos y conservará solo los"," ",s.jsx("strong",{children:"10 más recientes"}),".",s.jsx("p",{className:"text-danger fw-semibold mt-2",children:"⚠️ Esta operación no se puede deshacer."})]}),confirmLabel:"Limpiar Logs",confirmVariant:"danger",onConfirm:u})]}):s.jsx(si,{})}const GT=()=>s.jsxs("div",{className:"config-skeleton-container",children:[s.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[s.jsx("div",{className:"skeleton-title mb-3",style:{width:"200px"}}),s.jsxs("div",{className:"row gy-3",children:[s.jsxs("div",{className:"col-12 col-md-5",children:[s.jsx("div",{className:"skeleton-label mb-2"}),s.jsx("div",{className:"skeleton-input mb-3"}),s.jsx("div",{className:"skeleton-btn",style:{width:"180px"}})]}),s.jsxs("div",{className:"col-12 col-md-5",children:[s.jsx("div",{className:"skeleton-label mb-2"}),s.jsx("div",{className:"skeleton-input mb-3"}),s.jsx("div",{className:"skeleton-label mb-2"}),s.jsx("div",{className:"skeleton-input mb-1"}),s.jsx("div",{className:"skeleton-text",style:{width:"120px"}})]}),s.jsx("div",{className:"col-12 col-md-2",children:s.jsx("div",{className:"skeleton-btn h-100",style:{minHeight:"38px"}})})]})]}),s.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[s.jsxs("div",{className:"d-flex justify-content-between mb-3",children:[s.jsx("div",{className:"skeleton-title",style:{width:"250px"}}),s.jsx("div",{className:"skeleton-input",style:{width:"200px"}})]}),s.jsx("div",{className:"skeleton-table",children:[1,2,3,4].map(n=>s.jsxs("div",{className:"skeleton-table-row d-flex justify-content-between p-2 border-bottom",children:[s.jsx("div",{className:"skeleton-bar",style:{width:"40px"}}),s.jsx("div",{className:"skeleton-btn",style:{width:"80px",height:"25px"}})]},n))}),s.jsx("div",{className:"text-end mt-3",children:s.jsx("div",{className:"skeleton-btn d-inline-block",style:{width:"150px"}})})]})]}),qT=()=>{const{config:n,getConfig:a,versionBackend:o,updateConfig:l,generarBackup:u,reinicializarSistemaForzado:d,loading:p}=Pk(),[g,h]=m.useState(""),[v,b]=m.useState(""),[x,w]=m.useState([]),[S,C]=m.useState(""),[k,E]=m.useState(!1),[O,N]=m.useState(""),[D,L]=m.useState(!1),[z]=m.useState("v6520261612"),{puede:_}=ha(),M=_("getConfig"),[R,q]=m.useState(!1),[Q,re]=m.useState(!1),[oe,ie]=m.useState(!1);m.useEffect(()=>{M&&a()},[a,M]),m.useEffect(()=>{n&&!oe&&(h(n.TAMANO_MAX_MB||10),b(n.TOKEN_EXP_MINUTOS||60),w(n.TIPOS_PERMITIDOS||[]))},[n,oe]);const J=()=>{const A=S.trim().toLowerCase();if(A){if(x.includes(A))return alert("⚠️ Esa extensión ya está permitida.");w([...x,A]),C("")}},le=A=>{N(A),E(!0)},$=()=>{w(x.filter(A=>A!==O)),E(!1),N("")},ee=A=>{const I=A.target.value;I>45?h(45):h(I)},Y=async()=>{ie(!0);try{await l({CARPETA_PRINCIPAL:n.CARPETA_PRINCIPAL,TAMANO_MAX_MB:Number(g),TOKEN_EXP_MINUTOS:Number(v),TIPOS_PERMITIDOS:x})}finally{ie(!1)}},V=async()=>{q(!0);try{await u()}finally{q(!1)}};return M?s.jsxs("div",{className:"config-admin-page container py-3",children:[s.jsx("h3",{className:"fw-bold mb-4 text-primary",children:"⚙️ Administración de Configuración"}),!M&&s.jsx(si,{}),p&&!n?s.jsx(GT,{}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[s.jsx("h5",{className:"fw-bold mb-3",children:"🔧 Configuración General"}),s.jsxs(yr,{className:"gy-3",children:[s.jsxs(Nn,{xs:12,md:5,children:[s.jsxs(ae.Group,{children:[s.jsx(ae.Label,{className:"fw-semibold",children:"📁 Carpeta Principal"}),s.jsx(ae.Control,{type:"text",value:n.CARPETA_PRINCIPAL||"",readOnly:!0,plaintext:!0}),s.jsxs(ae.Text,{muted:!0,children:[s.jsxs("p",{children:["Versión Backend: ",s.jsx("span",{className:"version-backend",children:`${o}`})]}),s.jsxs("p",{children:["Versión FrontEnd: ",s.jsx("span",{className:"version-frontEnd",children:z})]})]})]}),s.jsx(Oe,{variant:"danger",className:"btn-CAP-inicializarproyecto",onClick:()=>L(!0),disabled:Q,children:Q?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm"})," Procesando..."]}):"⚠️ Reinicializar Proyecto"})]}),s.jsxs(Nn,{xs:12,md:5,children:[s.jsxs(ae.Group,{children:[s.jsx(ae.Label,{className:"fw-semibold",children:"📦 Tamaño máximo permitido 45 (MB)"}),s.jsx(ae.Control,{type:"number",min:1,max:45,value:g,onChange:ee})]}),s.jsxs(ae.Group,{children:[s.jsx(ae.Label,{className:"fw-semibold",children:"🔑 Expiración Token (Min)"}),s.jsx(ae.Control,{type:"number",min:1,value:v,onChange:A=>b(A.target.value)}),s.jsx(ae.Text,{muted:!0,children:"Duración de la sesión activa."})]})]}),s.jsx(Nn,{xs:12,md:2,className:"d-grid",children:s.jsx(Oe,{variant:"primary",onClick:V,disabled:R,children:R?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm"})," Generando..."]}):"🗄️ Generar Backup"})})]})]}),s.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[s.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap mb-3",children:[s.jsx("h5",{className:"fw-bold mb-2 mb-md-0",children:"🧩 Tipos de archivo permitidos"}),s.jsxs(qC,{style:{maxWidth:260},children:[s.jsx(ae.Control,{type:"text",placeholder:"Ej: pdf",value:S,onChange:A=>C(A.target.value)}),s.jsx(Oe,{onClick:J,children:"➕"})]})]}),s.jsxs(hi,{bordered:!0,hover:!0,responsive:!0,className:"small shadow-inner-sm",children:[s.jsx("thead",{className:"table-light",children:s.jsxs("tr",{children:[s.jsx("th",{children:"Extensión"}),s.jsx("th",{className:"text-center",children:"Acciones"})]})}),s.jsxs("tbody",{children:[x.map((A,I)=>s.jsxs("tr",{children:[s.jsx("td",{className:"fw-semibold",children:A}),s.jsx("td",{className:"text-center",children:s.jsx(Oe,{size:"sm",variant:"outline-danger",onClick:()=>le(A),children:"🗑️ Eliminar"})})]},I)),x.length===0&&s.jsx("tr",{children:s.jsx("td",{colSpan:2,className:"text-center text-muted py-3",children:"No hay extensiones configuradas."})})]})]}),s.jsx("div",{className:"text-end mt-3",children:s.jsx(Oe,{variant:"success",className:"btn-CAP-guardar",onClick:Y,disabled:oe,children:oe?s.jsxs(s.Fragment,{children:[s.jsx(St,{as:"span",animation:"border",size:"sm"})," Guardando..."]}):s.jsxs("div",{className:"btn-CAP-guardar-iconText",children:[s.jsx("span",{className:"icon-disk"}),s.jsx("span",{children:"Guardar Cambios"})]})})})]})]}),s.jsx(ga,{show:k,onHide:()=>E(!1),title:"Eliminar tipo de archivo",message:s.jsxs(s.Fragment,{children:["¿Seguro que deseas eliminar ",s.jsx("strong",{children:O}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:$}),s.jsx(Gk,{show:D,onHide:()=>L(!1),onConfirm:async(A,I)=>{if(A==="INICIALIZAR"){re(!0);try{const ne=await d(A,I);console.log("reinicialización del sistema",ne.mensaje,ne.ok)}finally{re(!1),L(!1)}}},loading:p}),s.jsx(yn,{show:oe||R||Q})]}):s.jsx(si,{})};function JT(){const[n,a]=m.useState("usuarios");return s.jsx(c0,{children:s.jsxs(_o,{fluid:!0,className:"p-3",children:[s.jsx(yr,{children:s.jsx(Nn,{children:s.jsx("h3",{className:"mb-4 text-center fw-bold",children:"⚙️ Panel de Administración"})})}),s.jsx(yr,{children:s.jsxs(Nn,{children:[s.jsxs(vm,{activeKey:n,onSelect:o=>a(o),id:"admin-tabs",className:"mb-3",justify:!0,children:[s.jsx(xo,{eventKey:"usuarios",title:"👥 Usuarios"}),s.jsx(xo,{eventKey:"roles",title:"🧩 Roles"}),s.jsx(xo,{eventKey:"config",title:"⚙️ Configuración"}),s.jsx(xo,{eventKey:"logs",title:"📜 Logs"})]}),n==="usuarios"&&s.jsx(IT,{}),n==="roles"&&s.jsx($T,{}),n==="config"&&s.jsx(qT,{}),n==="logs"&&s.jsx(HT,{})]})})]})})}function Ks({children:n}){const{authenticated:a,loading:o}=ji(),l=Un();return o?null:a?n:s.jsx(AE,{to:"/",replace:!0,state:{from:l}})}function FT(){const[n,a]=m.useState(!1);return m.useEffect(()=>{const o=()=>a(!0);return window.addEventListener("backend:open-config",o),()=>{window.removeEventListener("backend:open-config",o)}},[]),s.jsxs(s.Fragment,{children:[s.jsx(Zk,{onOpenBackend:()=>a(!0)}),s.jsx(Kk,{show:n,onHide:()=>a(!1)}),s.jsx(_o,{className:"mt-4",children:s.jsxs(kE,{children:[s.jsx(dn,{path:"/",element:s.jsx(eT,{})}),s.jsx(dn,{path:"/productos",element:s.jsx(Ks,{children:s.jsx(oT,{})})}),s.jsx(dn,{path:"/datos-tributarios",element:s.jsx(Ks,{children:s.jsx(iT,{})})}),s.jsx(dn,{path:"/contador",element:s.jsx(Ks,{children:s.jsx(cT,{})})}),s.jsx(dn,{path:"/facturas",element:s.jsx(Ks,{children:s.jsx(fT,{})})}),s.jsx(dn,{path:"/admin",element:s.jsx(Ks,{children:s.jsx(JT,{})})}),s.jsx(dn,{path:"/privacidad",element:s.jsx(mT,{})}),s.jsx(dn,{path:"/terminos",element:s.jsx(pT,{})}),s.jsx(dn,{path:"/acerca-de",element:s.jsx(hT,{})}),s.jsx(dn,{path:"/donaciones",element:s.jsx(vT,{})}),s.jsx(dn,{path:"/backend-setup",element:s.jsx(UT,{})})]})}),s.jsx(Qk,{}),s.jsx(Wk,{})]})}const VT="modulepreload",YT=function(n){return"/appdeclaracion/"+n},Ib={},XT=function(a,o,l){let u=Promise.resolve();if(o&&o.length>0){let v=function(b){return Promise.all(b.map(x=>Promise.resolve(x).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};var p=v;document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),h=g?.nonce||g?.getAttribute("nonce");u=v(o.map(b=>{if(b=YT(b),b in Ib)return;Ib[b]=!0;const x=b.endsWith(".css"),w=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${b}"]${w}`))return;const S=document.createElement("link");if(S.rel=x?"stylesheet":VT,x||(S.as="script"),S.crossOrigin="",S.href=b,h&&S.setAttribute("nonce",h),document.head.appendChild(S),x)return new Promise((C,k)=>{S.addEventListener("load",C),S.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${b}`)))})}))}function d(g){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=g,window.dispatchEvent(h),!h.defaultPrevented)throw g}return u.then(g=>{for(const h of g||[])h.status==="rejected"&&d(h.reason);return a().catch(d)})};function ZT(n={}){const{immediate:a=!1,onNeedRefresh:o,onOfflineReady:l,onRegistered:u,onRegisteredSW:d,onRegisterError:p}=n;let g,h;const v=async(x=!0)=>{await h};async function b(){if("serviceWorker"in navigator){if(g=await XT(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:x}},[]).then(({Workbox:x})=>new x("/appdeclaracion/sw.js",{scope:"/appdeclaracion/",type:"classic"})).catch(x=>{p?.(x)}),!g)return;g.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),g.addEventListener("installed",x=>{x.isUpdate||l?.()}),g.register({immediate:a}).then(x=>{d?d("/appdeclaracion/sw.js",x):u?.(x)}).catch(x=>{p?.(x)})}}return h=b(),v}ZT({immediate:!0});US.createRoot(document.getElementById("root")).render(s.jsx(Fe.StrictMode,{children:s.jsx(QE,{children:s.jsx(IA,{children:s.jsx(uN,{children:s.jsx(Tk,{children:s.jsx(Lk,{children:s.jsx(Dk,{children:s.jsx(Mk,{children:s.jsx(c0,{children:s.jsx(FT,{})})})})})})})})})}));
