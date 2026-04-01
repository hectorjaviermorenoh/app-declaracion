(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function o(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=o(u);fetch(u.href,d)}})();function To(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Id={exports:{}},Gs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function OS(){if(Sv)return Gs;Sv=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function o(l,u,d){var p=null;if(d!==void 0&&(p=""+d),u.key!==void 0&&(p=""+u.key),"key"in u){d={};for(var g in u)g!=="key"&&(d[g]=u[g])}else d=u;return u=d.ref,{$$typeof:n,type:l,key:p,ref:u!==void 0?u:null,props:d}}return Gs.Fragment=a,Gs.jsx=o,Gs.jsxs=o,Gs}var Nv;function kS(){return Nv||(Nv=1,Id.exports=OS()),Id.exports}var i=kS(),Pd={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function TS(){if(Ev)return xe;Ev=1;var n=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.iterator;function w(A){return A===null||typeof A!="object"?null:(A=x&&A[x]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,R={};function E(A,V,K){this.props=A,this.context=V,this.refs=R,this.updater=K||S}E.prototype.isReactComponent={},E.prototype.setState=function(A,V){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,V,"setState")},E.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function O(){}O.prototype=E.prototype;function C(A,V,K){this.props=A,this.context=V,this.refs=R,this.updater=K||S}var T=C.prototype=new O;T.constructor=C,N(T,E.prototype),T.isPureReactComponent=!0;var _=Array.isArray,M={H:null,A:null,T:null,S:null,V:null},L=Object.prototype.hasOwnProperty;function I(A,V,K,te,se,fe){return K=fe.ref,{$$typeof:n,type:A,key:V,ref:K!==void 0?K:null,props:fe}}function z(A,V){return I(A.type,V,void 0,void 0,void 0,A.props)}function Y(A){return typeof A=="object"&&A!==null&&A.$$typeof===n}function W(A){var V={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(K){return V[K]})}var oe=/\/+/g;function ne(A,V){return typeof A=="object"&&A!==null&&A.key!=null?W(""+A.key):V.toString(36)}function le(){}function J(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(le,le):(A.status="pending",A.then(function(V){A.status==="pending"&&(A.status="fulfilled",A.value=V)},function(V){A.status==="pending"&&(A.status="rejected",A.reason=V)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function ie(A,V,K,te,se){var fe=typeof A;(fe==="undefined"||fe==="boolean")&&(A=null);var me=!1;if(A===null)me=!0;else switch(fe){case"bigint":case"string":case"number":me=!0;break;case"object":switch(A.$$typeof){case n:case a:me=!0;break;case b:return me=A._init,ie(me(A._payload),V,K,te,se)}}if(me)return se=se(A),me=te===""?"."+ne(A,0):te,_(se)?(K="",me!=null&&(K=me.replace(oe,"$&/")+"/"),ie(se,V,K,"",function(Qe){return Qe})):se!=null&&(Y(se)&&(se=z(se,K+(se.key==null||A&&A.key===se.key?"":(""+se.key).replace(oe,"$&/")+"/")+me)),V.push(se)),1;me=0;var $e=te===""?".":te+":";if(_(A))for(var we=0;we<A.length;we++)te=A[we],fe=$e+ne(te,we),me+=ie(te,V,K,fe,se);else if(we=w(A),typeof we=="function")for(A=we.call(A),we=0;!(te=A.next()).done;)te=te.value,fe=$e+ne(te,we++),me+=ie(te,V,K,fe,se);else if(fe==="object"){if(typeof A.then=="function")return ie(J(A),V,K,te,se);throw V=String(A),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return me}function $(A,V,K){if(A==null)return A;var te=[],se=0;return ie(A,te,"","",function(fe){return V.call(K,fe,se++)}),te}function ee(A){if(A._status===-1){var V=A._result;V=V(),V.then(function(K){(A._status===0||A._status===-1)&&(A._status=1,A._result=K)},function(K){(A._status===0||A._status===-1)&&(A._status=2,A._result=K)}),A._status===-1&&(A._status=0,A._result=V)}if(A._status===1)return A._result.default;throw A._result}var D=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function re(){}return xe.Children={map:$,forEach:function(A,V,K){$(A,function(){V.apply(this,arguments)},K)},count:function(A){var V=0;return $(A,function(){V++}),V},toArray:function(A){return $(A,function(V){return V})||[]},only:function(A){if(!Y(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},xe.Component=E,xe.Fragment=o,xe.Profiler=u,xe.PureComponent=C,xe.StrictMode=l,xe.Suspense=h,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,xe.__COMPILER_RUNTIME={__proto__:null,c:function(A){return M.H.useMemoCache(A)}},xe.cache=function(A){return function(){return A.apply(null,arguments)}},xe.cloneElement=function(A,V,K){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var te=N({},A.props),se=A.key,fe=void 0;if(V!=null)for(me in V.ref!==void 0&&(fe=void 0),V.key!==void 0&&(se=""+V.key),V)!L.call(V,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&V.ref===void 0||(te[me]=V[me]);var me=arguments.length-2;if(me===1)te.children=K;else if(1<me){for(var $e=Array(me),we=0;we<me;we++)$e[we]=arguments[we+2];te.children=$e}return I(A.type,se,void 0,void 0,fe,te)},xe.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:d,_context:A},A},xe.createElement=function(A,V,K){var te,se={},fe=null;if(V!=null)for(te in V.key!==void 0&&(fe=""+V.key),V)L.call(V,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(se[te]=V[te]);var me=arguments.length-2;if(me===1)se.children=K;else if(1<me){for(var $e=Array(me),we=0;we<me;we++)$e[we]=arguments[we+2];se.children=$e}if(A&&A.defaultProps)for(te in me=A.defaultProps,me)se[te]===void 0&&(se[te]=me[te]);return I(A,fe,void 0,void 0,null,se)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(A){return{$$typeof:g,render:A}},xe.isValidElement=Y,xe.lazy=function(A){return{$$typeof:b,_payload:{_status:-1,_result:A},_init:ee}},xe.memo=function(A,V){return{$$typeof:v,type:A,compare:V===void 0?null:V}},xe.startTransition=function(A){var V=M.T,K={};M.T=K;try{var te=A(),se=M.S;se!==null&&se(K,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(re,D)}catch(fe){D(fe)}finally{M.T=V}},xe.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},xe.use=function(A){return M.H.use(A)},xe.useActionState=function(A,V,K){return M.H.useActionState(A,V,K)},xe.useCallback=function(A,V){return M.H.useCallback(A,V)},xe.useContext=function(A){return M.H.useContext(A)},xe.useDebugValue=function(){},xe.useDeferredValue=function(A,V){return M.H.useDeferredValue(A,V)},xe.useEffect=function(A,V,K){var te=M.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(A,V)},xe.useId=function(){return M.H.useId()},xe.useImperativeHandle=function(A,V,K){return M.H.useImperativeHandle(A,V,K)},xe.useInsertionEffect=function(A,V){return M.H.useInsertionEffect(A,V)},xe.useLayoutEffect=function(A,V){return M.H.useLayoutEffect(A,V)},xe.useMemo=function(A,V){return M.H.useMemo(A,V)},xe.useOptimistic=function(A,V){return M.H.useOptimistic(A,V)},xe.useReducer=function(A,V,K){return M.H.useReducer(A,V,K)},xe.useRef=function(A){return M.H.useRef(A)},xe.useState=function(A){return M.H.useState(A)},xe.useSyncExternalStore=function(A,V,K){return M.H.useSyncExternalStore(A,V,K)},xe.useTransition=function(){return M.H.useTransition()},xe.version="19.1.1",xe}var Cv;function Lf(){return Cv||(Cv=1,Pd.exports=TS()),Pd.exports}var m=Lf();const qe=To(m);var $d={exports:{}},qs={},Hd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function RS(){return Av||(Av=1,(function(n){function a($,ee){var D=$.length;$.push(ee);e:for(;0<D;){var re=D-1>>>1,A=$[re];if(0<u(A,ee))$[re]=ee,$[D]=A,D=re;else break e}}function o($){return $.length===0?null:$[0]}function l($){if($.length===0)return null;var ee=$[0],D=$.pop();if(D!==ee){$[0]=D;e:for(var re=0,A=$.length,V=A>>>1;re<V;){var K=2*(re+1)-1,te=$[K],se=K+1,fe=$[se];if(0>u(te,D))se<A&&0>u(fe,te)?($[re]=fe,$[se]=D,re=se):($[re]=te,$[K]=D,re=K);else if(se<A&&0>u(fe,D))$[re]=fe,$[se]=D,re=se;else break e}}return ee}function u($,ee){var D=$.sortIndex-ee.sortIndex;return D!==0?D:$.id-ee.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var p=Date,g=p.now();n.unstable_now=function(){return p.now()-g}}var h=[],v=[],b=1,x=null,w=3,S=!1,N=!1,R=!1,E=!1,O=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function _($){for(var ee=o(v);ee!==null;){if(ee.callback===null)l(v);else if(ee.startTime<=$)l(v),ee.sortIndex=ee.expirationTime,a(h,ee);else break;ee=o(v)}}function M($){if(R=!1,_($),!N)if(o(h)!==null)N=!0,L||(L=!0,ne());else{var ee=o(v);ee!==null&&ie(M,ee.startTime-$)}}var L=!1,I=-1,z=5,Y=-1;function W(){return E?!0:!(n.unstable_now()-Y<z)}function oe(){if(E=!1,L){var $=n.unstable_now();Y=$;var ee=!0;try{e:{N=!1,R&&(R=!1,C(I),I=-1),S=!0;var D=w;try{t:{for(_($),x=o(h);x!==null&&!(x.expirationTime>$&&W());){var re=x.callback;if(typeof re=="function"){x.callback=null,w=x.priorityLevel;var A=re(x.expirationTime<=$);if($=n.unstable_now(),typeof A=="function"){x.callback=A,_($),ee=!0;break t}x===o(h)&&l(h),_($)}else l(h);x=o(h)}if(x!==null)ee=!0;else{var V=o(v);V!==null&&ie(M,V.startTime-$),ee=!1}}break e}finally{x=null,w=D,S=!1}ee=void 0}}finally{ee?ne():L=!1}}}var ne;if(typeof T=="function")ne=function(){T(oe)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,J=le.port2;le.port1.onmessage=oe,ne=function(){J.postMessage(null)}}else ne=function(){O(oe,0)};function ie($,ee){I=O(function(){$(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function($){$.callback=null},n.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<$?Math.floor(1e3/$):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function($){switch(w){case 1:case 2:case 3:var ee=3;break;default:ee=w}var D=w;w=ee;try{return $()}finally{w=D}},n.unstable_requestPaint=function(){E=!0},n.unstable_runWithPriority=function($,ee){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var D=w;w=$;try{return ee()}finally{w=D}},n.unstable_scheduleCallback=function($,ee,D){var re=n.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?re+D:re):D=re,$){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=D+A,$={id:b++,callback:ee,priorityLevel:$,startTime:D,expirationTime:A,sortIndex:-1},D>re?($.sortIndex=D,a(v,$),o(h)===null&&$===o(v)&&(R?(C(I),I=-1):R=!0,ie(M,D-re))):($.sortIndex=A,a(h,$),N||S||(N=!0,L||(L=!0,ne()))),$},n.unstable_shouldYield=W,n.unstable_wrapCallback=function($){var ee=w;return function(){var D=w;w=ee;try{return $.apply(this,arguments)}finally{w=D}}}})(Gd)),Gd}var Ov;function DS(){return Ov||(Ov=1,Hd.exports=RS()),Hd.exports}var qd={exports:{}},xt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function LS(){if(kv)return xt;kv=1;var n=Lf();function a(h){var v="https://react.dev/errors/"+h;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)v+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+h+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(a(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(h,v,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:x==null?null:""+x,children:h,containerInfo:v,implementation:b}}var p=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(h,v){if(h==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,xt.createPortal=function(h,v){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(a(299));return d(h,v,null,b)},xt.flushSync=function(h){var v=p.T,b=l.p;try{if(p.T=null,l.p=2,h)return h()}finally{p.T=v,l.p=b,l.d.f()}},xt.preconnect=function(h,v){typeof h=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,l.d.C(h,v))},xt.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},xt.preinit=function(h,v){if(typeof h=="string"&&v&&typeof v.as=="string"){var b=v.as,x=g(b,v.crossOrigin),w=typeof v.integrity=="string"?v.integrity:void 0,S=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;b==="style"?l.d.S(h,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:S}):b==="script"&&l.d.X(h,{crossOrigin:x,integrity:w,fetchPriority:S,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},xt.preinitModule=function(h,v){if(typeof h=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var b=g(v.as,v.crossOrigin);l.d.M(h,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&l.d.M(h)},xt.preload=function(h,v){if(typeof h=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var b=v.as,x=g(b,v.crossOrigin);l.d.L(h,b,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},xt.preloadModule=function(h,v){if(typeof h=="string")if(v){var b=g(v.as,v.crossOrigin);l.d.m(h,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else l.d.m(h)},xt.requestFormReset=function(h){l.d.r(h)},xt.unstable_batchedUpdates=function(h,v){return h(v)},xt.useFormState=function(h,v,b){return p.H.useFormState(h,v,b)},xt.useFormStatus=function(){return p.H.useHostTransitionStatus()},xt.version="19.1.1",xt}var Tv;function _b(){if(Tv)return qd.exports;Tv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),qd.exports=LS(),qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function MS(){if(Rv)return qs;Rv=1;var n=DS(),a=Lf(),o=_b();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(l(188))}function h(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,s=t;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){r=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===r)return g(c),e;if(f===s)return g(c),t;f=f.sibling}throw Error(l(188))}if(r.return!==s.return)r=c,s=f;else{for(var y=!1,j=c.child;j;){if(j===r){y=!0,r=c,s=f;break}if(j===s){y=!0,s=c,r=f;break}j=j.sibling}if(!y){for(j=f.child;j;){if(j===r){y=!0,r=f,s=c;break}if(j===s){y=!0,s=f,r=c;break}j=j.sibling}if(!y)throw Error(l(189))}}if(r.alternate!==s)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),T=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function J(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case E:return"Profiler";case R:return"StrictMode";case M:return"Suspense";case L:return"SuspenseList";case Y:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case T:return(e.displayName||"Context")+".Provider";case C:return(e._context.displayName||"Context")+".Consumer";case _:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:J(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return J(e(t))}catch{}}return null}var ie=Array.isArray,$=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D={pending:!1,data:null,method:null,action:null},re=[],A=-1;function V(e){return{current:e}}function K(e){0>A||(e.current=re[A],re[A]=null,A--)}function te(e,t){A++,re[A]=e.current,e.current=t}var se=V(null),fe=V(null),me=V(null),$e=V(null);function we(e,t){switch(te(me,t),te(fe,e),te(se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Zg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Zg(t),e=Qg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(se),te(se,e)}function Qe(){K(se),K(fe),K(me)}function We(e){e.memoizedState!==null&&te($e,e);var t=se.current,r=Qg(t,e.type);t!==r&&(te(fe,e),te(se,r))}function Ct(e){fe.current===e&&(K(se),K(fe)),$e.current===e&&(K($e),Us._currentValue=D)}var Kt=Object.prototype.hasOwnProperty,Zt=n.unstable_scheduleCallback,Qt=n.unstable_cancelCallback,ze=n.unstable_shouldYield,_n=n.unstable_requestPaint,st=n.unstable_now,Fo=n.unstable_getCurrentPriorityLevel,Er=n.unstable_ImmediatePriority,Wt=n.unstable_UserBlockingPriority,vn=n.unstable_NormalPriority,Cr=n.unstable_LowPriority,Va=n.unstable_IdlePriority,ha=n.log,Ar=n.unstable_setDisableYieldValue,je=null,Fe=null;function At(e){if(typeof ha=="function"&&Ar(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(je,e)}catch{}}var zt=Math.clz32?Math.clz32:p0,f0=Math.log,m0=Math.LN2;function p0(e){return e>>>=0,e===0?32:31-(f0(e)/m0|0)|0}var wi=256,ji=4194304;function Ya(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Si(e,t,r){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var j=s&134217727;return j!==0?(s=j&~f,s!==0?c=Ya(s):(y&=j,y!==0?c=Ya(y):r||(r=j&~e,r!==0&&(c=Ya(r))))):(j=s&~f,j!==0?c=Ya(j):y!==0?c=Ya(y):r||(r=s&~e,r!==0&&(c=Ya(r)))),c===0?0:t!==0&&t!==c&&(t&f)===0&&(f=c&-c,r=t&-t,f>=r||f===32&&(r&4194048)!==0)?t:c}function Vo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function h0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mm(){var e=wi;return wi<<=1,(wi&4194048)===0&&(wi=256),e}function Bm(){var e=ji;return ji<<=1,(ji&62914560)===0&&(ji=4194304),e}function Oc(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Yo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function g0(e,t,r,s,c,f){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var j=e.entanglements,k=e.expirationTimes,H=e.hiddenUpdates;for(r=y&~r;0<r;){var X=31-zt(r),Q=1<<X;j[X]=0,k[X]=-1;var G=H[X];if(G!==null)for(H[X]=null,X=0;X<G.length;X++){var q=G[X];q!==null&&(q.lane&=-536870913)}r&=~Q}s!==0&&zm(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~t))}function zm(e,t,r){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-zt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|r&4194090}function _m(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var s=31-zt(r),c=1<<s;c&t|e[s]&t&&(e[s]|=t),r&=~c}}function kc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Um(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:vv(e.type))}function v0(e,t){var r=ee.p;try{return ee.p=e,t()}finally{ee.p=r}}var ga=Math.random().toString(36).slice(2),bt="__reactFiber$"+ga,Ot="__reactProps$"+ga,Or="__reactContainer$"+ga,Rc="__reactEvents$"+ga,b0="__reactListeners$"+ga,y0="__reactHandles$"+ga,Im="__reactResources$"+ga,Xo="__reactMarker$"+ga;function Dc(e){delete e[bt],delete e[Ot],delete e[Rc],delete e[b0],delete e[y0]}function kr(e){var t=e[bt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Or]||r[bt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=nv(e);e!==null;){if(r=e[bt])return r;e=nv(e)}return t}e=r,r=e.parentNode}return null}function Tr(e){if(e=e[bt]||e[Or]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ko(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Rr(e){var t=e[Im];return t||(t=e[Im]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ct(e){e[Xo]=!0}var Pm=new Set,$m={};function Xa(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for($m[e]=t,e=0;e<t.length;e++)Pm.add(t[e])}var x0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hm={},Gm={};function w0(e){return Kt.call(Gm,e)?!0:Kt.call(Hm,e)?!1:x0.test(e)?Gm[e]=!0:(Hm[e]=!0,!1)}function Ni(e,t,r){if(w0(t))if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+r)}}function Ei(e,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+r)}}function Un(e,t,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(t,r,""+s)}}var Lc,qm;function Lr(e){if(Lc===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Lc=t&&t[1]||"",qm=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lc+e+qm}var Mc=!1;function Bc(e,t){if(!e||Mc)return"";Mc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(q){var G=q}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(q){G=q}e.call(Q.prototype)}}else{try{throw Error()}catch(q){G=q}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(q){if(q&&G&&typeof q.stack=="string")return[q.stack,G.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),y=f[0],j=f[1];if(y&&j){var k=y.split(`
`),H=j.split(`
`);for(c=s=0;s<k.length&&!k[s].includes("DetermineComponentFrameRoot");)s++;for(;c<H.length&&!H[c].includes("DetermineComponentFrameRoot");)c++;if(s===k.length||c===H.length)for(s=k.length-1,c=H.length-1;1<=s&&0<=c&&k[s]!==H[c];)c--;for(;1<=s&&0<=c;s--,c--)if(k[s]!==H[c]){if(s!==1||c!==1)do if(s--,c--,0>c||k[s]!==H[c]){var X=`
`+k[s].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=s&&0<=c);break}}}finally{Mc=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Lr(r):""}function j0(e){switch(e.tag){case 26:case 27:case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 15:return Bc(e.type,!1);case 11:return Bc(e.type.render,!1);case 1:return Bc(e.type,!0);case 31:return Lr("Activity");default:return""}}function Jm(e){try{var t="";do t+=j0(e),e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function en(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function S0(e){var t=Fm(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){s=""+y,f.call(this,y)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){e._valueTracker||(e._valueTracker=S0(e))}function Vm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),s="";return e&&(s=Fm(e)?e.checked?"true":"false":e.value),e=s,e!==r?(t.setValue(e),!0):!1}function Ai(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var N0=/[\n"\\]/g;function tn(e){return e.replace(N0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zc(e,t,r,s,c,f,y,j){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+en(t)):e.value!==""+en(t)&&(e.value=""+en(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?_c(e,y,en(t)):r!=null?_c(e,y,en(r)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?e.name=""+en(j):e.removeAttribute("name")}function Ym(e,t,r,s,c,f,y,j){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||t!=null))return;r=r!=null?""+en(r):"",t=t!=null?""+en(t):r,j||t===e.value||(e.value=t),e.defaultValue=t}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=j?e.checked:!!s,e.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function _c(e,t,r){t==="number"&&Ai(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Mr(e,t,r,s){if(e=e.options,t){t={};for(var c=0;c<r.length;c++)t["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=t.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&s&&(e[r].defaultSelected=!0)}else{for(r=""+en(r),t=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Xm(e,t,r){if(t!=null&&(t=""+en(t),t!==e.value&&(e.value=t),r==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=r!=null?""+en(r):""}function Km(e,t,r,s){if(t==null){if(s!=null){if(r!=null)throw Error(l(92));if(ie(s)){if(1<s.length)throw Error(l(93));s=s[0]}r=s}r==null&&(r=""),t=r}r=en(t),e.defaultValue=r,s=e.textContent,s===r&&s!==""&&s!==null&&(e.value=s)}function Br(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var E0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zm(e,t,r){var s=t.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,r):typeof r!="number"||r===0||E0.has(t)?t==="float"?e.cssFloat=r:e[t]=(""+r).trim():e[t]=r+"px"}function Qm(e,t,r){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,r!=null){for(var s in r)!r.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in t)s=t[c],t.hasOwnProperty(c)&&r[c]!==s&&Zm(e,c,s)}else for(var f in t)t.hasOwnProperty(f)&&Zm(e,f,t[f])}function Uc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var C0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),A0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oi(e){return A0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ic=null;function Pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,_r=null;function Wm(e){var t=Tr(e);if(t&&(e=t.stateNode)){var r=e[Ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(zc(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+tn(""+t)+'"][type="radio"]'),t=0;t<r.length;t++){var s=r[t];if(s!==e&&s.form===e.form){var c=s[Ot]||null;if(!c)throw Error(l(90));zc(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<r.length;t++)s=r[t],s.form===e.form&&Vm(s)}break e;case"textarea":Xm(e,r.value,r.defaultValue);break e;case"select":t=r.value,t!=null&&Mr(e,!!r.multiple,t,!1)}}}var $c=!1;function ep(e,t,r){if($c)return e(t,r);$c=!0;try{var s=e(t);return s}finally{if($c=!1,(zr!==null||_r!==null)&&(ml(),zr&&(t=zr,e=_r,_r=zr=null,Wm(t),e)))for(t=0;t<e.length;t++)Wm(e[t])}}function Zo(e,t){var r=e.stateNode;if(r===null)return null;var s=r[Ot]||null;if(s===null)return null;r=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(In)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{Hc=!1}var va=null,Gc=null,ki=null;function tp(){if(ki)return ki;var e,t=Gc,r=t.length,s,c="value"in va?va.value:va.textContent,f=c.length;for(e=0;e<r&&t[e]===c[e];e++);var y=r-e;for(s=1;s<=y&&t[r-s]===c[f-s];s++);return ki=c.slice(e,1<s?1-s:void 0)}function Ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function np(){return!1}function kt(e){function t(r,s,c,f,y){this._reactName=r,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(r=e[j],this[j]=r?r(f):f[j]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ri:np,this.isPropagationStopped=np,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Di=kt(Ka),Wo=b({},Ka,{view:0,detail:0}),O0=kt(Wo),qc,Jc,es,Li=b({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==es&&(es&&e.type==="mousemove"?(qc=e.screenX-es.screenX,Jc=e.screenY-es.screenY):Jc=qc=0,es=e),qc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),ap=kt(Li),k0=b({},Li,{dataTransfer:0}),T0=kt(k0),R0=b({},Wo,{relatedTarget:0}),Fc=kt(R0),D0=b({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),L0=kt(D0),M0=b({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B0=kt(M0),z0=b({},Ka,{data:0}),rp=kt(z0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=I0[e])?!!t[e]:!1}function Vc(){return P0}var $0=b({},Wo,{key:function(e){if(e.key){var t=_0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?U0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(e){return e.type==="keypress"?Ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),H0=kt($0),G0=b({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=kt(G0),q0=b({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),J0=kt(q0),F0=b({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=kt(F0),Y0=b({},Li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),X0=kt(Y0),K0=b({},Ka,{newState:0,oldState:0}),Z0=kt(K0),Q0=[9,13,27,32],Yc=In&&"CompositionEvent"in window,ts=null;In&&"documentMode"in document&&(ts=document.documentMode);var W0=In&&"TextEvent"in window&&!ts,sp=In&&(!Yc||ts&&8<ts&&11>=ts),ip=" ",lp=!1;function cp(e,t){switch(e){case"keyup":return Q0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function ej(e,t){switch(e){case"compositionend":return up(t);case"keypress":return t.which!==32?null:(lp=!0,ip);case"textInput":return e=t.data,e===ip&&lp?null:e;default:return null}}function tj(e,t){if(Ur)return e==="compositionend"||!Yc&&cp(e,t)?(e=tp(),ki=Gc=va=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sp&&t.locale!=="ko"?null:t.data;default:return null}}var nj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nj[e.type]:t==="textarea"}function fp(e,t,r,s){zr?_r?_r.push(s):_r=[s]:zr=s,t=yl(t,"onChange"),0<t.length&&(r=new Di("onChange","change",null,r,s),e.push({event:r,listeners:t}))}var ns=null,as=null;function aj(e){Fg(e,0)}function Mi(e){var t=Ko(e);if(Vm(t))return e}function mp(e,t){if(e==="change")return t}var pp=!1;if(In){var Xc;if(In){var Kc="oninput"in document;if(!Kc){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),Kc=typeof hp.oninput=="function"}Xc=Kc}else Xc=!1;pp=Xc&&(!document.documentMode||9<document.documentMode)}function gp(){ns&&(ns.detachEvent("onpropertychange",vp),as=ns=null)}function vp(e){if(e.propertyName==="value"&&Mi(as)){var t=[];fp(t,as,e,Pc(e)),ep(aj,t)}}function rj(e,t,r){e==="focusin"?(gp(),ns=t,as=r,ns.attachEvent("onpropertychange",vp)):e==="focusout"&&gp()}function oj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mi(as)}function sj(e,t){if(e==="click")return Mi(t)}function ij(e,t){if(e==="input"||e==="change")return Mi(t)}function lj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:lj;function rs(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(s=0;s<r.length;s++){var c=r[s];if(!Kt.call(t,c)||!_t(e[c],t[c]))return!1}return!0}function bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yp(e,t){var r=bp(e);e=0;for(var s;r;){if(r.nodeType===3){if(s=e+r.textContent.length,e<=t&&s>=t)return{node:r,offset:t-e};e=s}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=bp(r)}}function xp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ai(e.document);t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ai(e.document)}return t}function Zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var cj=In&&"documentMode"in document&&11>=document.documentMode,Ir=null,Qc=null,os=null,Wc=!1;function jp(e,t,r){var s=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wc||Ir==null||Ir!==Ai(s)||(s=Ir,"selectionStart"in s&&Zc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),os&&rs(os,s)||(os=s,s=yl(Qc,"onSelect"),0<s.length&&(t=new Di("onSelect","select",null,t,r),e.push({event:t,listeners:s}),t.target=Ir)))}function Za(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Pr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},eu={},Sp={};In&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Qa(e){if(eu[e])return eu[e];if(!Pr[e])return e;var t=Pr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Sp)return eu[e]=t[r];return e}var Np=Qa("animationend"),Ep=Qa("animationiteration"),Cp=Qa("animationstart"),uj=Qa("transitionrun"),dj=Qa("transitionstart"),fj=Qa("transitioncancel"),Ap=Qa("transitionend"),Op=new Map,tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tu.push("scrollEnd");function bn(e,t){Op.set(e,t),Xa(t,[e])}var kp=new WeakMap;function nn(e,t){if(typeof e=="object"&&e!==null){var r=kp.get(e);return r!==void 0?r:(t={value:e,source:t,stack:Jm(t)},kp.set(e,t),t)}return{value:e,source:t,stack:Jm(t)}}var an=[],$r=0,nu=0;function Bi(){for(var e=$r,t=nu=$r=0;t<e;){var r=an[t];an[t++]=null;var s=an[t];an[t++]=null;var c=an[t];an[t++]=null;var f=an[t];if(an[t++]=null,s!==null&&c!==null){var y=s.pending;y===null?c.next=c:(c.next=y.next,y.next=c),s.pending=c}f!==0&&Tp(r,c,f)}}function zi(e,t,r,s){an[$r++]=e,an[$r++]=t,an[$r++]=r,an[$r++]=s,nu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function au(e,t,r,s){return zi(e,t,r,s),_i(e)}function Hr(e,t){return zi(e,null,null,t),_i(e)}function Tp(e,t,r){e.lanes|=r;var s=e.alternate;s!==null&&(s.lanes|=r);for(var c=!1,f=e.return;f!==null;)f.childLanes|=r,s=f.alternate,s!==null&&(s.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&t!==null&&(c=31-zt(r),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[t]:s.push(t),t.lane=r|536870912),f):null}function _i(e){if(50<Ts)throw Ts=0,cd=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Gr={};function mj(e,t,r,s){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,r,s){return new mj(e,t,r,s)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pn(e,t){var r=e.alternate;return r===null?(r=Ut(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Rp(e,t){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,t=r.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ui(e,t,r,s,c,f){var y=0;if(s=e,typeof e=="function")ru(e)&&(y=1);else if(typeof e=="string")y=hS(e,r,se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Y:return e=Ut(31,r,t,c),e.elementType=Y,e.lanes=f,e;case N:return Wa(r.children,c,f,t);case R:y=8,c|=24;break;case E:return e=Ut(12,r,t,c|2),e.elementType=E,e.lanes=f,e;case M:return e=Ut(13,r,t,c),e.elementType=M,e.lanes=f,e;case L:return e=Ut(19,r,t,c),e.elementType=L,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:case T:y=10;break e;case C:y=9;break e;case _:y=11;break e;case I:y=14;break e;case z:y=16,s=null;break e}y=29,r=Error(l(130,e===null?"null":typeof e,"")),s=null}return t=Ut(y,r,t,c),t.elementType=e,t.type=s,t.lanes=f,t}function Wa(e,t,r,s){return e=Ut(7,e,s,t),e.lanes=r,e}function ou(e,t,r){return e=Ut(6,e,null,t),e.lanes=r,e}function su(e,t,r){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qr=[],Jr=0,Ii=null,Pi=0,rn=[],on=0,er=null,$n=1,Hn="";function tr(e,t){qr[Jr++]=Pi,qr[Jr++]=Ii,Ii=e,Pi=t}function Dp(e,t,r){rn[on++]=$n,rn[on++]=Hn,rn[on++]=er,er=e;var s=$n;e=Hn;var c=32-zt(s)-1;s&=~(1<<c),r+=1;var f=32-zt(t)+c;if(30<f){var y=c-c%5;f=(s&(1<<y)-1).toString(32),s>>=y,c-=y,$n=1<<32-zt(t)+c|r<<c|s,Hn=f+e}else $n=1<<f|r<<c|s,Hn=e}function iu(e){e.return!==null&&(tr(e,1),Dp(e,1,0))}function lu(e){for(;e===Ii;)Ii=qr[--Jr],qr[Jr]=null,Pi=qr[--Jr],qr[Jr]=null;for(;e===er;)er=rn[--on],rn[on]=null,Hn=rn[--on],rn[on]=null,$n=rn[--on],rn[on]=null}var jt=null,Xe=null,Re=!1,nr=null,En=!1,cu=Error(l(519));function ar(e){var t=Error(l(418,""));throw ls(nn(t,e)),cu}function Lp(e){var t=e.stateNode,r=e.type,s=e.memoizedProps;switch(t[bt]=e,t[Ot]=s,r){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(r=0;r<Ds.length;r++)Ce(Ds[r],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),Ym(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ci(t);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),Km(t,s.value,s.defaultValue,s.children),Ci(t)}r=s.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||t.textContent===""+r||s.suppressHydrationWarning===!0||Kg(t.textContent,r)?(s.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),s.onScroll!=null&&Ce("scroll",t),s.onScrollEnd!=null&&Ce("scrollend",t),s.onClick!=null&&(t.onclick=xl),t=!0):t=!1,t||ar(e)}function Mp(e){for(jt=e.return;jt;)switch(jt.tag){case 5:case 13:En=!1;return;case 27:case 3:En=!0;return;default:jt=jt.return}}function ss(e){if(e!==jt)return!1;if(!Re)return Mp(e),Re=!0,!1;var t=e.tag,r;if((r=t!==3&&t!==27)&&((r=t===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Ed(e.type,e.memoizedProps)),r=!r),r&&Xe&&ar(e),Mp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(t===0){Xe=xn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++;e=e.nextSibling}Xe=null}}else t===27?(t=Xe,La(e.type)?(e=kd,kd=null,Xe=e):Xe=t):Xe=jt?xn(e.stateNode.nextSibling):null;return!0}function is(){Xe=jt=null,Re=!1}function Bp(){var e=nr;return e!==null&&(Dt===null?Dt=e:Dt.push.apply(Dt,e),nr=null),e}function ls(e){nr===null?nr=[e]:nr.push(e)}var uu=V(null),rr=null,Gn=null;function ba(e,t,r){te(uu,t._currentValue),t._currentValue=r}function qn(e){e._currentValue=uu.current,K(uu)}function du(e,t,r){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===r)break;e=e.return}}function fu(e,t,r,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;e:for(;f!==null;){var j=f;f=c;for(var k=0;k<t.length;k++)if(j.context===t[k]){f.lanes|=r,j=f.alternate,j!==null&&(j.lanes|=r),du(f.return,r,e),s||(y=null);break e}f=j.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(l(341));y.lanes|=r,f=y.alternate,f!==null&&(f.lanes|=r),du(y,r,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function cs(e,t,r,s){e=null;for(var c=t,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(l(387));if(y=y.memoizedProps,y!==null){var j=c.type;_t(c.pendingProps.value,y.value)||(e!==null?e.push(j):e=[j])}}else if(c===$e.current){if(y=c.alternate,y===null)throw Error(l(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Us):e=[Us])}c=c.return}e!==null&&fu(t,e,r,s),t.flags|=262144}function $i(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function or(e){rr=e,Gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yt(e){return zp(rr,e)}function Hi(e,t){return rr===null&&or(e),zp(e,t)}function zp(e,t){var r=t._currentValue;if(t={context:t,memoizedValue:r,next:null},Gn===null){if(e===null)throw Error(l(308));Gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gn=Gn.next=t;return r}var pj=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(r,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(r){return r()})}},hj=n.unstable_scheduleCallback,gj=n.unstable_NormalPriority,it={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mu(){return{controller:new pj,data:new Map,refCount:0}}function us(e){e.refCount--,e.refCount===0&&hj(gj,function(){e.controller.abort()})}var ds=null,pu=0,Fr=0,Vr=null;function vj(e,t){if(ds===null){var r=ds=[];pu=0,Fr=gd(),Vr={status:"pending",value:void 0,then:function(s){r.push(s)}}}return pu++,t.then(_p,_p),t}function _p(){if(--pu===0&&ds!==null){Vr!==null&&(Vr.status="fulfilled");var e=ds;ds=null,Fr=0,Vr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bj(e,t){var r=[],s={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var c=0;c<r.length;c++)(0,r[c])(t)},function(c){for(s.status="rejected",s.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),s}var Up=$.S;$.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&vj(e,t),Up!==null&&Up(e,t)};var sr=V(null);function hu(){var e=sr.current;return e!==null?e:He.pooledCache}function Gi(e,t){t===null?te(sr,sr.current):te(sr,t.pool)}function Ip(){var e=hu();return e===null?null:{parent:it._currentValue,pool:e}}var fs=Error(l(460)),Pp=Error(l(474)),qi=Error(l(542)),gu={then:function(){}};function $p(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ji(){}function Hp(e,t,r){switch(r=e[r],r===void 0?e.push(t):r!==t&&(t.then(Ji,Ji),t=r),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qp(e),e;default:if(typeof t.status=="string")t.then(Ji,Ji);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=s}},function(s){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,qp(e),e}throw ms=t,fs}}var ms=null;function Gp(){if(ms===null)throw Error(l(459));var e=ms;return ms=null,e}function qp(e){if(e===fs||e===qi)throw Error(l(483))}var ya=!1;function vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,t,r){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var c=s.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),s.pending=t,t=_i(e),Tp(e,null,r),t}return zi(e,s,t,r),_i(e)}function ps(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,_m(e,r)}}function yu(e,t){var r=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,r===s)){var c=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,r=r.next}while(r!==null);f===null?c=f=t:f=f.next=t}else c=f=t;r={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}var xu=!1;function hs(){if(xu){var e=Vr;if(e!==null)throw e}}function gs(e,t,r,s){xu=!1;var c=e.updateQueue;ya=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,j=c.shared.pending;if(j!==null){c.shared.pending=null;var k=j,H=k.next;k.next=null,y===null?f=H:y.next=H,y=k;var X=e.alternate;X!==null&&(X=X.updateQueue,j=X.lastBaseUpdate,j!==y&&(j===null?X.firstBaseUpdate=H:j.next=H,X.lastBaseUpdate=k))}if(f!==null){var Q=c.baseState;y=0,X=H=k=null,j=f;do{var G=j.lane&-536870913,q=G!==j.lane;if(q?(Ae&G)===G:(s&G)===G){G!==0&&G===Fr&&(xu=!0),X!==null&&(X=X.next={lane:0,tag:j.tag,payload:j.payload,callback:null,next:null});e:{var be=e,ge=j;G=t;var Ie=r;switch(ge.tag){case 1:if(be=ge.payload,typeof be=="function"){Q=be.call(Ie,Q,G);break e}Q=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=ge.payload,G=typeof be=="function"?be.call(Ie,Q,G):be,G==null)break e;Q=b({},Q,G);break e;case 2:ya=!0}}G=j.callback,G!==null&&(e.flags|=64,q&&(e.flags|=8192),q=c.callbacks,q===null?c.callbacks=[G]:q.push(G))}else q={lane:G,tag:j.tag,payload:j.payload,callback:j.callback,next:null},X===null?(H=X=q,k=Q):X=X.next=q,y|=G;if(j=j.next,j===null){if(j=c.shared.pending,j===null)break;q=j,j=q.next,q.next=null,c.lastBaseUpdate=q,c.shared.pending=null}}while(!0);X===null&&(k=Q),c.baseState=k,c.firstBaseUpdate=H,c.lastBaseUpdate=X,f===null&&(c.shared.lanes=0),ka|=y,e.lanes=y,e.memoizedState=Q}}function Jp(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Fp(e,t){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Jp(r[e],t)}var Yr=V(null),Fi=V(0);function Vp(e,t){e=Zn,te(Fi,e),te(Yr,t),Zn=e|t.baseLanes}function wu(){te(Fi,Zn),te(Yr,Yr.current)}function ju(){Zn=Fi.current,K(Yr),K(Fi)}var ja=0,Se=null,_e=null,rt=null,Vi=!1,Xr=!1,ir=!1,Yi=0,vs=0,Kr=null,yj=0;function et(){throw Error(l(321))}function Su(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!_t(e[r],t[r]))return!1;return!0}function Nu(e,t,r,s,c,f){return ja=f,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$.H=e===null||e.memoizedState===null?Th:Rh,ir=!1,f=r(s,c),ir=!1,Xr&&(f=Xp(t,r,s,c)),Yp(e),f}function Yp(e){$.H=el;var t=_e!==null&&_e.next!==null;if(ja=0,rt=_e=Se=null,Vi=!1,vs=0,Kr=null,t)throw Error(l(300));e===null||ut||(e=e.dependencies,e!==null&&$i(e)&&(ut=!0))}function Xp(e,t,r,s){Se=e;var c=0;do{if(Xr&&(Kr=null),vs=0,Xr=!1,25<=c)throw Error(l(301));if(c+=1,rt=_e=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}$.H=Cj,f=t(r,s)}while(Xr);return f}function xj(){var e=$.H,t=e.useState()[0];return t=typeof t.then=="function"?bs(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(Se.flags|=1024),t}function Eu(){var e=Yi!==0;return Yi=0,e}function Cu(e,t,r){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r}function Au(e){if(Vi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vi=!1}ja=0,rt=_e=Se=null,Xr=!1,vs=Yi=0,Kr=null}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Se.memoizedState=rt=e:rt=rt.next=e,rt}function ot(){if(_e===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=rt===null?Se.memoizedState:rt.next;if(t!==null)rt=t,_e=e;else{if(e===null)throw Se.alternate===null?Error(l(467)):Error(l(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},rt===null?Se.memoizedState=rt=e:rt=rt.next=e}return rt}function Ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bs(e){var t=vs;return vs+=1,Kr===null&&(Kr=[]),e=Hp(Kr,e,t),t=Se,(rt===null?t.memoizedState:rt.next)===null&&(t=t.alternate,$.H=t===null||t.memoizedState===null?Th:Rh),e}function Xi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bs(e);if(e.$$typeof===T)return yt(e)}throw Error(l(438,String(e)))}function ku(e){var t=null,r=Se.updateQueue;if(r!==null&&(t=r.memoCache),t==null){var s=Se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),r===null&&(r=Ou(),Se.updateQueue=r),r.memoCache=t,r=t.data[t.index],r===void 0)for(r=t.data[t.index]=Array(e),s=0;s<e;s++)r[s]=W;return t.index++,r}function Jn(e,t){return typeof t=="function"?t(e):t}function Ki(e){var t=ot();return Tu(t,_e,e)}function Tu(e,t,r){var s=e.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=r;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}t.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{t=c.next;var j=y=null,k=null,H=t,X=!1;do{var Q=H.lane&-536870913;if(Q!==H.lane?(Ae&Q)===Q:(ja&Q)===Q){var G=H.revertLane;if(G===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),Q===Fr&&(X=!0);else if((ja&G)===G){H=H.next,G===Fr&&(X=!0);continue}else Q={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},k===null?(j=k=Q,y=f):k=k.next=Q,Se.lanes|=G,ka|=G;Q=H.action,ir&&r(f,Q),f=H.hasEagerState?H.eagerState:r(f,Q)}else G={lane:Q,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},k===null?(j=k=G,y=f):k=k.next=G,Se.lanes|=Q,ka|=Q;H=H.next}while(H!==null&&H!==t);if(k===null?y=f:k.next=j,!_t(f,e.memoizedState)&&(ut=!0,X&&(r=Vr,r!==null)))throw r;e.memoizedState=f,e.baseState=y,e.baseQueue=k,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Ru(e){var t=ot(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var s=r.dispatch,c=r.pending,f=t.memoizedState;if(c!==null){r.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);_t(f,t.memoizedState)||(ut=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),r.lastRenderedState=f}return[f,s]}function Kp(e,t,r){var s=Se,c=ot(),f=Re;if(f){if(r===void 0)throw Error(l(407));r=r()}else r=t();var y=!_t((_e||c).memoizedState,r);y&&(c.memoizedState=r,ut=!0),c=c.queue;var j=Wp.bind(null,s,c,e);if(ys(2048,8,j,[e]),c.getSnapshot!==t||y||rt!==null&&rt.memoizedState.tag&1){if(s.flags|=2048,Zr(9,Zi(),Qp.bind(null,s,c,r,t),null),He===null)throw Error(l(349));f||(ja&124)!==0||Zp(s,t,r)}return r}function Zp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Se.updateQueue,t===null?(t=Ou(),Se.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Qp(e,t,r,s){t.value=r,t.getSnapshot=s,eh(t)&&th(e)}function Wp(e,t,r){return r(function(){eh(t)&&th(e)})}function eh(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!_t(e,r)}catch{return!0}}function th(e){var t=Hr(e,2);t!==null&&Gt(t,e,2)}function Du(e){var t=Tt();if(typeof e=="function"){var r=e;if(e=r(),ir){At(!0);try{r()}finally{At(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t}function nh(e,t,r,s){return e.baseState=r,Tu(e,_e,typeof s=="function"?s:Jn)}function wj(e,t,r,s,c){if(Wi(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};$.T!==null?r(!0):f.isTransition=!1,s(f),r=t.pending,r===null?(f.next=t.pending=f,ah(t,f)):(f.next=r.next,t.pending=r.next=f)}}function ah(e,t){var r=t.action,s=t.payload,c=e.state;if(t.isTransition){var f=$.T,y={};$.T=y;try{var j=r(c,s),k=$.S;k!==null&&k(y,j),rh(e,t,j)}catch(H){Lu(e,t,H)}finally{$.T=f}}else try{f=r(c,s),rh(e,t,f)}catch(H){Lu(e,t,H)}}function rh(e,t,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(s){oh(e,t,s)},function(s){return Lu(e,t,s)}):oh(e,t,r)}function oh(e,t,r){t.status="fulfilled",t.value=r,sh(t),e.state=r,t=e.pending,t!==null&&(r=t.next,r===t?e.pending=null:(r=r.next,t.next=r,ah(e,r)))}function Lu(e,t,r){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=r,sh(t),t=t.next;while(t!==s)}e.action=null}function sh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ih(e,t){return t}function lh(e,t){if(Re){var r=He.formState;if(r!==null){e:{var s=Se;if(Re){if(Xe){t:{for(var c=Xe,f=En;c.nodeType!==8;){if(!f){c=null;break t}if(c=xn(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xe=xn(c.nextSibling),s=c.data==="F!";break e}}ar(s)}s=!1}s&&(t=r[0])}}return r=Tt(),r.memoizedState=r.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ih,lastRenderedState:t},r.queue=s,r=Ah.bind(null,Se,s),s.dispatch=r,s=Du(!1),f=Uu.bind(null,Se,!1,s.queue),s=Tt(),c={state:t,dispatch:null,action:e,pending:null},s.queue=c,r=wj.bind(null,Se,c,f,r),c.dispatch=r,s.memoizedState=e,[t,r,!1]}function ch(e){var t=ot();return uh(t,_e,e)}function uh(e,t,r){if(t=Tu(e,t,ih)[0],e=Ki(Jn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=bs(t)}catch(y){throw y===fs?qi:y}else s=t;t=ot();var c=t.queue,f=c.dispatch;return r!==t.memoizedState&&(Se.flags|=2048,Zr(9,Zi(),jj.bind(null,c,r),null)),[s,f,e]}function jj(e,t){e.action=t}function dh(e){var t=ot(),r=_e;if(r!==null)return uh(t,r,e);ot(),t=t.memoizedState,r=ot();var s=r.queue.dispatch;return r.memoizedState=e,[t,s,!1]}function Zr(e,t,r,s){return e={tag:e,create:r,deps:s,inst:t,next:null},t=Se.updateQueue,t===null&&(t=Ou(),Se.updateQueue=t),r=t.lastEffect,r===null?t.lastEffect=e.next=e:(s=r.next,r.next=e,e.next=s,t.lastEffect=e),e}function Zi(){return{destroy:void 0,resource:void 0}}function fh(){return ot().memoizedState}function Qi(e,t,r,s){var c=Tt();s=s===void 0?null:s,Se.flags|=e,c.memoizedState=Zr(1|t,Zi(),r,s)}function ys(e,t,r,s){var c=ot();s=s===void 0?null:s;var f=c.memoizedState.inst;_e!==null&&s!==null&&Su(s,_e.memoizedState.deps)?c.memoizedState=Zr(t,f,r,s):(Se.flags|=e,c.memoizedState=Zr(1|t,f,r,s))}function mh(e,t){Qi(8390656,8,e,t)}function ph(e,t){ys(2048,8,e,t)}function hh(e,t){return ys(4,2,e,t)}function gh(e,t){return ys(4,4,e,t)}function vh(e,t){if(typeof t=="function"){e=e();var r=t(e);return function(){typeof r=="function"?r():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bh(e,t,r){r=r!=null?r.concat([e]):null,ys(4,4,vh.bind(null,t,e),r)}function Mu(){}function yh(e,t){var r=ot();t=t===void 0?null:t;var s=r.memoizedState;return t!==null&&Su(t,s[1])?s[0]:(r.memoizedState=[e,t],e)}function xh(e,t){var r=ot();t=t===void 0?null:t;var s=r.memoizedState;if(t!==null&&Su(t,s[1]))return s[0];if(s=e(),ir){At(!0);try{e()}finally{At(!1)}}return r.memoizedState=[s,t],s}function Bu(e,t,r){return r===void 0||(ja&1073741824)!==0?e.memoizedState=t:(e.memoizedState=r,e=Sg(),Se.lanes|=e,ka|=e,r)}function wh(e,t,r,s){return _t(r,t)?r:Yr.current!==null?(e=Bu(e,r,s),_t(e,t)||(ut=!0),e):(ja&42)===0?(ut=!0,e.memoizedState=r):(e=Sg(),Se.lanes|=e,ka|=e,t)}function jh(e,t,r,s,c){var f=ee.p;ee.p=f!==0&&8>f?f:8;var y=$.T,j={};$.T=j,Uu(e,!1,t,r);try{var k=c(),H=$.S;if(H!==null&&H(j,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var X=bj(k,s);xs(e,t,X,Ht(e))}else xs(e,t,s,Ht(e))}catch(Q){xs(e,t,{then:function(){},status:"rejected",reason:Q},Ht())}finally{ee.p=f,$.T=y}}function Sj(){}function zu(e,t,r,s){if(e.tag!==5)throw Error(l(476));var c=Sh(e).queue;jh(e,c,t,D,r===null?Sj:function(){return Nh(e),r(s)})}function Sh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:D,baseState:D,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:D},next:null};var r={};return t.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:r},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nh(e){var t=Sh(e).next.queue;xs(e,t,{},Ht())}function _u(){return yt(Us)}function Eh(){return ot().memoizedState}function Ch(){return ot().memoizedState}function Nj(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var r=Ht();e=xa(r);var s=wa(t,e,r);s!==null&&(Gt(s,t,r),ps(s,t,r)),t={cache:mu()},e.payload=t;return}t=t.return}}function Ej(e,t,r){var s=Ht();r={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Wi(e)?Oh(t,r):(r=au(e,t,r,s),r!==null&&(Gt(r,e,s),kh(r,t,s)))}function Ah(e,t,r){var s=Ht();xs(e,t,r,s)}function xs(e,t,r,s){var c={lane:s,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wi(e))Oh(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var y=t.lastRenderedState,j=f(y,r);if(c.hasEagerState=!0,c.eagerState=j,_t(j,y))return zi(e,t,c,0),He===null&&Bi(),!1}catch{}finally{}if(r=au(e,t,c,s),r!==null)return Gt(r,e,s),kh(r,t,s),!0}return!1}function Uu(e,t,r,s){if(s={lane:2,revertLane:gd(),action:s,hasEagerState:!1,eagerState:null,next:null},Wi(e)){if(t)throw Error(l(479))}else t=au(e,r,s,2),t!==null&&Gt(t,e,2)}function Wi(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Oh(e,t){Xr=Vi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function kh(e,t,r){if((r&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,r|=s,t.lanes=r,_m(e,r)}}var el={readContext:yt,use:Xi,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et},Th={readContext:yt,use:Xi,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:mh,useImperativeHandle:function(e,t,r){r=r!=null?r.concat([e]):null,Qi(4194308,4,vh.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Qi(4194308,4,e,t)},useInsertionEffect:function(e,t){Qi(4,2,e,t)},useMemo:function(e,t){var r=Tt();t=t===void 0?null:t;var s=e();if(ir){At(!0);try{e()}finally{At(!1)}}return r.memoizedState=[s,t],s},useReducer:function(e,t,r){var s=Tt();if(r!==void 0){var c=r(t);if(ir){At(!0);try{r(t)}finally{At(!1)}}}else c=t;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=Ej.bind(null,Se,e),[s.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:function(e){e=Du(e);var t=e.queue,r=Ah.bind(null,Se,t);return t.dispatch=r,[e.memoizedState,r]},useDebugValue:Mu,useDeferredValue:function(e,t){var r=Tt();return Bu(r,e,t)},useTransition:function(){var e=Du(!1);return e=jh.bind(null,Se,e.queue,!0,!1),Tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,r){var s=Se,c=Tt();if(Re){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),He===null)throw Error(l(349));(Ae&124)!==0||Zp(s,t,r)}c.memoizedState=r;var f={value:r,getSnapshot:t};return c.queue=f,mh(Wp.bind(null,s,f,e),[e]),s.flags|=2048,Zr(9,Zi(),Qp.bind(null,s,f,r,t),null),r},useId:function(){var e=Tt(),t=He.identifierPrefix;if(Re){var r=Hn,s=$n;r=(s&~(1<<32-zt(s)-1)).toString(32)+r,t="«"+t+"R"+r,r=Yi++,0<r&&(t+="H"+r.toString(32)),t+="»"}else r=yj++,t="«"+t+"r"+r.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:_u,useFormState:lh,useActionState:lh,useOptimistic:function(e){var t=Tt();t.memoizedState=t.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=r,t=Uu.bind(null,Se,!0,r),r.dispatch=t,[e,t]},useMemoCache:ku,useCacheRefresh:function(){return Tt().memoizedState=Nj.bind(null,Se)}},Rh={readContext:yt,use:Xi,useCallback:yh,useContext:yt,useEffect:ph,useImperativeHandle:bh,useInsertionEffect:hh,useLayoutEffect:gh,useMemo:xh,useReducer:Ki,useRef:fh,useState:function(){return Ki(Jn)},useDebugValue:Mu,useDeferredValue:function(e,t){var r=ot();return wh(r,_e.memoizedState,e,t)},useTransition:function(){var e=Ki(Jn)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:bs(e),t]},useSyncExternalStore:Kp,useId:Eh,useHostTransitionStatus:_u,useFormState:ch,useActionState:ch,useOptimistic:function(e,t){var r=ot();return nh(r,_e,e,t)},useMemoCache:ku,useCacheRefresh:Ch},Cj={readContext:yt,use:Xi,useCallback:yh,useContext:yt,useEffect:ph,useImperativeHandle:bh,useInsertionEffect:hh,useLayoutEffect:gh,useMemo:xh,useReducer:Ru,useRef:fh,useState:function(){return Ru(Jn)},useDebugValue:Mu,useDeferredValue:function(e,t){var r=ot();return _e===null?Bu(r,e,t):wh(r,_e.memoizedState,e,t)},useTransition:function(){var e=Ru(Jn)[0],t=ot().memoizedState;return[typeof e=="boolean"?e:bs(e),t]},useSyncExternalStore:Kp,useId:Eh,useHostTransitionStatus:_u,useFormState:dh,useActionState:dh,useOptimistic:function(e,t){var r=ot();return _e!==null?nh(r,_e,e,t):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:ku,useCacheRefresh:Ch},Qr=null,ws=0;function tl(e){var t=ws;return ws+=1,Qr===null&&(Qr=[]),Hp(Qr,e,t)}function js(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function nl(e,t){throw t.$$typeof===x?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Dh(e){var t=e._init;return t(e._payload)}function Lh(e){function t(U,B){if(e){var P=U.deletions;P===null?(U.deletions=[B],U.flags|=16):P.push(B)}}function r(U,B){if(!e)return null;for(;B!==null;)t(U,B),B=B.sibling;return null}function s(U){for(var B=new Map;U!==null;)U.key!==null?B.set(U.key,U):B.set(U.index,U),U=U.sibling;return B}function c(U,B){return U=Pn(U,B),U.index=0,U.sibling=null,U}function f(U,B,P){return U.index=P,e?(P=U.alternate,P!==null?(P=P.index,P<B?(U.flags|=67108866,B):P):(U.flags|=67108866,B)):(U.flags|=1048576,B)}function y(U){return e&&U.alternate===null&&(U.flags|=67108866),U}function j(U,B,P,Z){return B===null||B.tag!==6?(B=ou(P,U.mode,Z),B.return=U,B):(B=c(B,P),B.return=U,B)}function k(U,B,P,Z){var de=P.type;return de===N?X(U,B,P.props.children,Z,P.key):B!==null&&(B.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===z&&Dh(de)===B.type)?(B=c(B,P.props),js(B,P),B.return=U,B):(B=Ui(P.type,P.key,P.props,null,U.mode,Z),js(B,P),B.return=U,B)}function H(U,B,P,Z){return B===null||B.tag!==4||B.stateNode.containerInfo!==P.containerInfo||B.stateNode.implementation!==P.implementation?(B=su(P,U.mode,Z),B.return=U,B):(B=c(B,P.children||[]),B.return=U,B)}function X(U,B,P,Z,de){return B===null||B.tag!==7?(B=Wa(P,U.mode,Z,de),B.return=U,B):(B=c(B,P),B.return=U,B)}function Q(U,B,P){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=ou(""+B,U.mode,P),B.return=U,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return P=Ui(B.type,B.key,B.props,null,U.mode,P),js(P,B),P.return=U,P;case S:return B=su(B,U.mode,P),B.return=U,B;case z:var Z=B._init;return B=Z(B._payload),Q(U,B,P)}if(ie(B)||ne(B))return B=Wa(B,U.mode,P,null),B.return=U,B;if(typeof B.then=="function")return Q(U,tl(B),P);if(B.$$typeof===T)return Q(U,Hi(U,B),P);nl(U,B)}return null}function G(U,B,P,Z){var de=B!==null?B.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return de!==null?null:j(U,B,""+P,Z);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case w:return P.key===de?k(U,B,P,Z):null;case S:return P.key===de?H(U,B,P,Z):null;case z:return de=P._init,P=de(P._payload),G(U,B,P,Z)}if(ie(P)||ne(P))return de!==null?null:X(U,B,P,Z,null);if(typeof P.then=="function")return G(U,B,tl(P),Z);if(P.$$typeof===T)return G(U,B,Hi(U,P),Z);nl(U,P)}return null}function q(U,B,P,Z,de){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return U=U.get(P)||null,j(B,U,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case w:return U=U.get(Z.key===null?P:Z.key)||null,k(B,U,Z,de);case S:return U=U.get(Z.key===null?P:Z.key)||null,H(B,U,Z,de);case z:var Ne=Z._init;return Z=Ne(Z._payload),q(U,B,P,Z,de)}if(ie(Z)||ne(Z))return U=U.get(P)||null,X(B,U,Z,de,null);if(typeof Z.then=="function")return q(U,B,P,tl(Z),de);if(Z.$$typeof===T)return q(U,B,P,Hi(B,Z),de);nl(B,Z)}return null}function be(U,B,P,Z){for(var de=null,Ne=null,pe=B,ve=B=0,ft=null;pe!==null&&ve<P.length;ve++){pe.index>ve?(ft=pe,pe=null):ft=pe.sibling;var ke=G(U,pe,P[ve],Z);if(ke===null){pe===null&&(pe=ft);break}e&&pe&&ke.alternate===null&&t(U,pe),B=f(ke,B,ve),Ne===null?de=ke:Ne.sibling=ke,Ne=ke,pe=ft}if(ve===P.length)return r(U,pe),Re&&tr(U,ve),de;if(pe===null){for(;ve<P.length;ve++)pe=Q(U,P[ve],Z),pe!==null&&(B=f(pe,B,ve),Ne===null?de=pe:Ne.sibling=pe,Ne=pe);return Re&&tr(U,ve),de}for(pe=s(pe);ve<P.length;ve++)ft=q(pe,U,ve,P[ve],Z),ft!==null&&(e&&ft.alternate!==null&&pe.delete(ft.key===null?ve:ft.key),B=f(ft,B,ve),Ne===null?de=ft:Ne.sibling=ft,Ne=ft);return e&&pe.forEach(function(Ua){return t(U,Ua)}),Re&&tr(U,ve),de}function ge(U,B,P,Z){if(P==null)throw Error(l(151));for(var de=null,Ne=null,pe=B,ve=B=0,ft=null,ke=P.next();pe!==null&&!ke.done;ve++,ke=P.next()){pe.index>ve?(ft=pe,pe=null):ft=pe.sibling;var Ua=G(U,pe,ke.value,Z);if(Ua===null){pe===null&&(pe=ft);break}e&&pe&&Ua.alternate===null&&t(U,pe),B=f(Ua,B,ve),Ne===null?de=Ua:Ne.sibling=Ua,Ne=Ua,pe=ft}if(ke.done)return r(U,pe),Re&&tr(U,ve),de;if(pe===null){for(;!ke.done;ve++,ke=P.next())ke=Q(U,ke.value,Z),ke!==null&&(B=f(ke,B,ve),Ne===null?de=ke:Ne.sibling=ke,Ne=ke);return Re&&tr(U,ve),de}for(pe=s(pe);!ke.done;ve++,ke=P.next())ke=q(pe,U,ve,ke.value,Z),ke!==null&&(e&&ke.alternate!==null&&pe.delete(ke.key===null?ve:ke.key),B=f(ke,B,ve),Ne===null?de=ke:Ne.sibling=ke,Ne=ke);return e&&pe.forEach(function(AS){return t(U,AS)}),Re&&tr(U,ve),de}function Ie(U,B,P,Z){if(typeof P=="object"&&P!==null&&P.type===N&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case w:e:{for(var de=P.key;B!==null;){if(B.key===de){if(de=P.type,de===N){if(B.tag===7){r(U,B.sibling),Z=c(B,P.props.children),Z.return=U,U=Z;break e}}else if(B.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===z&&Dh(de)===B.type){r(U,B.sibling),Z=c(B,P.props),js(Z,P),Z.return=U,U=Z;break e}r(U,B);break}else t(U,B);B=B.sibling}P.type===N?(Z=Wa(P.props.children,U.mode,Z,P.key),Z.return=U,U=Z):(Z=Ui(P.type,P.key,P.props,null,U.mode,Z),js(Z,P),Z.return=U,U=Z)}return y(U);case S:e:{for(de=P.key;B!==null;){if(B.key===de)if(B.tag===4&&B.stateNode.containerInfo===P.containerInfo&&B.stateNode.implementation===P.implementation){r(U,B.sibling),Z=c(B,P.children||[]),Z.return=U,U=Z;break e}else{r(U,B);break}else t(U,B);B=B.sibling}Z=su(P,U.mode,Z),Z.return=U,U=Z}return y(U);case z:return de=P._init,P=de(P._payload),Ie(U,B,P,Z)}if(ie(P))return be(U,B,P,Z);if(ne(P)){if(de=ne(P),typeof de!="function")throw Error(l(150));return P=de.call(P),ge(U,B,P,Z)}if(typeof P.then=="function")return Ie(U,B,tl(P),Z);if(P.$$typeof===T)return Ie(U,B,Hi(U,P),Z);nl(U,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,B!==null&&B.tag===6?(r(U,B.sibling),Z=c(B,P),Z.return=U,U=Z):(r(U,B),Z=ou(P,U.mode,Z),Z.return=U,U=Z),y(U)):r(U,B)}return function(U,B,P,Z){try{ws=0;var de=Ie(U,B,P,Z);return Qr=null,de}catch(pe){if(pe===fs||pe===qi)throw pe;var Ne=Ut(29,pe,null,U.mode);return Ne.lanes=Z,Ne.return=U,Ne}finally{}}}var Wr=Lh(!0),Mh=Lh(!1),sn=V(null),Cn=null;function Sa(e){var t=e.alternate;te(lt,lt.current&1),te(sn,e),Cn===null&&(t===null||Yr.current!==null||t.memoizedState!==null)&&(Cn=e)}function Bh(e){if(e.tag===22){if(te(lt,lt.current),te(sn,e),Cn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Cn=e)}}else Na()}function Na(){te(lt,lt.current),te(sn,sn.current)}function Fn(e){K(sn),Cn===e&&(Cn=null),K(lt)}var lt=V(0);function al(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||Od(r)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Iu(e,t,r,s){t=e.memoizedState,r=r(s,t),r=r==null?t:b({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Pu={enqueueSetState:function(e,t,r){e=e._reactInternals;var s=Ht(),c=xa(s);c.payload=t,r!=null&&(c.callback=r),t=wa(e,c,s),t!==null&&(Gt(t,e,s),ps(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var s=Ht(),c=xa(s);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=wa(e,c,s),t!==null&&(Gt(t,e,s),ps(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ht(),s=xa(r);s.tag=2,t!=null&&(s.callback=t),t=wa(e,s,r),t!==null&&(Gt(t,e,r),ps(t,e,r))}};function zh(e,t,r,s,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,y):t.prototype&&t.prototype.isPureReactComponent?!rs(r,s)||!rs(c,f):!0}function _h(e,t,r,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,s),t.state!==e&&Pu.enqueueReplaceState(t,t.state,null)}function lr(e,t){var r=t;if("ref"in t){r={};for(var s in t)s!=="ref"&&(r[s]=t[s])}if(e=e.defaultProps){r===t&&(r=b({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}var rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Uh(e){rl(e)}function Ih(e){console.error(e)}function Ph(e){rl(e)}function ol(e,t){try{var r=e.onUncaughtError;r(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function $h(e,t,r){try{var s=e.onCaughtError;s(r.value,{componentStack:r.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $u(e,t,r){return r=xa(r),r.tag=3,r.payload={element:null},r.callback=function(){ol(e,t)},r}function Hh(e){return e=xa(e),e.tag=3,e}function Gh(e,t,r,s){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){$h(t,r,s)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){$h(t,r,s),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var j=s.stack;this.componentDidCatch(s.value,{componentStack:j!==null?j:""})})}function Aj(e,t,r,s,c){if(r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=r.alternate,t!==null&&cs(t,r,c,!0),r=sn.current,r!==null){switch(r.tag){case 13:return Cn===null?dd():r.alternate===null&&Ke===0&&(Ke=3),r.flags&=-257,r.flags|=65536,r.lanes=c,s===gu?r.flags|=16384:(t=r.updateQueue,t===null?r.updateQueue=new Set([s]):t.add(s),md(e,s,c)),!1;case 22:return r.flags|=65536,s===gu?r.flags|=16384:(t=r.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},r.updateQueue=t):(r=t.retryQueue,r===null?t.retryQueue=new Set([s]):r.add(s)),md(e,s,c)),!1}throw Error(l(435,r.tag))}return md(e,s,c),dd(),!1}if(Re)return t=sn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,s!==cu&&(e=Error(l(422),{cause:s}),ls(nn(e,r)))):(s!==cu&&(t=Error(l(423),{cause:s}),ls(nn(t,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=nn(s,r),c=$u(e.stateNode,s,c),yu(e,c),Ke!==4&&(Ke=2)),!1;var f=Error(l(520),{cause:s});if(f=nn(f,r),ks===null?ks=[f]:ks.push(f),Ke!==4&&(Ke=2),t===null)return!0;s=nn(s,r),r=t;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=$u(r.stateNode,s,e),yu(r,e),!1;case 1:if(t=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Hh(c),Gh(c,e,r,s),yu(r,c),!1}r=r.return}while(r!==null);return!1}var qh=Error(l(461)),ut=!1;function pt(e,t,r,s){t.child=e===null?Mh(t,null,r,s):Wr(t,e.child,r,s)}function Jh(e,t,r,s,c){r=r.render;var f=t.ref;if("ref"in s){var y={};for(var j in s)j!=="ref"&&(y[j]=s[j])}else y=s;return or(t),s=Nu(e,t,r,y,f,c),j=Eu(),e!==null&&!ut?(Cu(e,t,c),Vn(e,t,c)):(Re&&j&&iu(t),t.flags|=1,pt(e,t,s,c),t.child)}function Fh(e,t,r,s,c){if(e===null){var f=r.type;return typeof f=="function"&&!ru(f)&&f.defaultProps===void 0&&r.compare===null?(t.tag=15,t.type=f,Vh(e,t,f,s,c)):(e=Ui(r.type,null,s,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!Xu(e,c)){var y=f.memoizedProps;if(r=r.compare,r=r!==null?r:rs,r(y,s)&&e.ref===t.ref)return Vn(e,t,c)}return t.flags|=1,e=Pn(f,s),e.ref=t.ref,e.return=t,t.child=e}function Vh(e,t,r,s,c){if(e!==null){var f=e.memoizedProps;if(rs(f,s)&&e.ref===t.ref)if(ut=!1,t.pendingProps=s=f,Xu(e,c))(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,Vn(e,t,c)}return Hu(e,t,r,s,c)}function Yh(e,t,r){var s=t.pendingProps,c=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((t.flags&128)!==0){if(s=f!==null?f.baseLanes|r:r,e!==null){for(c=t.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;t.childLanes=f&~s}else t.childLanes=0,t.child=null;return Xh(e,t,s,r)}if((r&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gi(t,f!==null?f.cachePool:null),f!==null?Vp(t,f):wu(),Bh(t);else return t.lanes=t.childLanes=536870912,Xh(e,t,f!==null?f.baseLanes|r:r,r)}else f!==null?(Gi(t,f.cachePool),Vp(t,f),Na(),t.memoizedState=null):(e!==null&&Gi(t,null),wu(),Na());return pt(e,t,c,r),t.child}function Xh(e,t,r,s){var c=hu();return c=c===null?null:{parent:it._currentValue,pool:c},t.memoizedState={baseLanes:r,cachePool:c},e!==null&&Gi(t,null),wu(),Bh(t),e!==null&&cs(e,t,s,!0),null}function sl(e,t){var r=t.ref;if(r===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(l(284));(e===null||e.ref!==r)&&(t.flags|=4194816)}}function Hu(e,t,r,s,c){return or(t),r=Nu(e,t,r,s,void 0,c),s=Eu(),e!==null&&!ut?(Cu(e,t,c),Vn(e,t,c)):(Re&&s&&iu(t),t.flags|=1,pt(e,t,r,c),t.child)}function Kh(e,t,r,s,c,f){return or(t),t.updateQueue=null,r=Xp(t,s,r,c),Yp(e),s=Eu(),e!==null&&!ut?(Cu(e,t,f),Vn(e,t,f)):(Re&&s&&iu(t),t.flags|=1,pt(e,t,r,f),t.child)}function Zh(e,t,r,s,c){if(or(t),t.stateNode===null){var f=Gr,y=r.contextType;typeof y=="object"&&y!==null&&(f=yt(y)),f=new r(s,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Pu,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=s,f.state=t.memoizedState,f.refs={},vu(t),y=r.contextType,f.context=typeof y=="object"&&y!==null?yt(y):Gr,f.state=t.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&(Iu(t,r,y,s),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Pu.enqueueReplaceState(f,f.state,null),gs(t,s,f,c),hs(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){f=t.stateNode;var j=t.memoizedProps,k=lr(r,j);f.props=k;var H=f.context,X=r.contextType;y=Gr,typeof X=="object"&&X!==null&&(y=yt(X));var Q=r.getDerivedStateFromProps;X=typeof Q=="function"||typeof f.getSnapshotBeforeUpdate=="function",j=t.pendingProps!==j,X||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(j||H!==y)&&_h(t,f,s,y),ya=!1;var G=t.memoizedState;f.state=G,gs(t,s,f,c),hs(),H=t.memoizedState,j||G!==H||ya?(typeof Q=="function"&&(Iu(t,r,Q,s),H=t.memoizedState),(k=ya||zh(t,r,k,s,G,H,y))?(X||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=H),f.props=s,f.state=H,f.context=y,s=k):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{f=t.stateNode,bu(e,t),y=t.memoizedProps,X=lr(r,y),f.props=X,Q=t.pendingProps,G=f.context,H=r.contextType,k=Gr,typeof H=="object"&&H!==null&&(k=yt(H)),j=r.getDerivedStateFromProps,(H=typeof j=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Q||G!==k)&&_h(t,f,s,k),ya=!1,G=t.memoizedState,f.state=G,gs(t,s,f,c),hs();var q=t.memoizedState;y!==Q||G!==q||ya||e!==null&&e.dependencies!==null&&$i(e.dependencies)?(typeof j=="function"&&(Iu(t,r,j,s),q=t.memoizedState),(X=ya||zh(t,r,X,s,G,q,k)||e!==null&&e.dependencies!==null&&$i(e.dependencies))?(H||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,q,k),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,q,k)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=q),f.props=s,f.state=q,f.context=k,s=X):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),s=!1)}return f=s,sl(e,t),s=(t.flags&128)!==0,f||s?(f=t.stateNode,r=s&&typeof r.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&s?(t.child=Wr(t,e.child,null,c),t.child=Wr(t,null,r,c)):pt(e,t,r,c),t.memoizedState=f.state,e=t.child):e=Vn(e,t,c),e}function Qh(e,t,r,s){return is(),t.flags|=256,pt(e,t,r,s),t.child}var Gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(e){return{baseLanes:e,cachePool:Ip()}}function Ju(e,t,r){return e=e!==null?e.childLanes&~r:0,t&&(e|=ln),e}function Wh(e,t,r){var s=t.pendingProps,c=!1,f=(t.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(lt.current&2)!==0),y&&(c=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(c?Sa(t):Na(),Re){var j=Xe,k;if(k=j){e:{for(k=j,j=En;k.nodeType!==8;){if(!j){j=null;break e}if(k=xn(k.nextSibling),k===null){j=null;break e}}j=k}j!==null?(t.memoizedState={dehydrated:j,treeContext:er!==null?{id:$n,overflow:Hn}:null,retryLane:536870912,hydrationErrors:null},k=Ut(18,null,null,0),k.stateNode=j,k.return=t,t.child=k,jt=t,Xe=null,k=!0):k=!1}k||ar(t)}if(j=t.memoizedState,j!==null&&(j=j.dehydrated,j!==null))return Od(j)?t.lanes=32:t.lanes=536870912,null;Fn(t)}return j=s.children,s=s.fallback,c?(Na(),c=t.mode,j=il({mode:"hidden",children:j},c),s=Wa(s,c,r,null),j.return=t,s.return=t,j.sibling=s,t.child=j,c=t.child,c.memoizedState=qu(r),c.childLanes=Ju(e,y,r),t.memoizedState=Gu,s):(Sa(t),Fu(t,j))}if(k=e.memoizedState,k!==null&&(j=k.dehydrated,j!==null)){if(f)t.flags&256?(Sa(t),t.flags&=-257,t=Vu(e,t,r)):t.memoizedState!==null?(Na(),t.child=e.child,t.flags|=128,t=null):(Na(),c=s.fallback,j=t.mode,s=il({mode:"visible",children:s.children},j),c=Wa(c,j,r,null),c.flags|=2,s.return=t,c.return=t,s.sibling=c,t.child=s,Wr(t,e.child,null,r),s=t.child,s.memoizedState=qu(r),s.childLanes=Ju(e,y,r),t.memoizedState=Gu,t=c);else if(Sa(t),Od(j)){if(y=j.nextSibling&&j.nextSibling.dataset,y)var H=y.dgst;y=H,s=Error(l(419)),s.stack="",s.digest=y,ls({value:s,source:null,stack:null}),t=Vu(e,t,r)}else if(ut||cs(e,t,r,!1),y=(r&e.childLanes)!==0,ut||y){if(y=He,y!==null&&(s=r&-r,s=(s&42)!==0?1:kc(s),s=(s&(y.suspendedLanes|r))!==0?0:s,s!==0&&s!==k.retryLane))throw k.retryLane=s,Hr(e,s),Gt(y,e,s),qh;j.data==="$?"||dd(),t=Vu(e,t,r)}else j.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=k.treeContext,Xe=xn(j.nextSibling),jt=t,Re=!0,nr=null,En=!1,e!==null&&(rn[on++]=$n,rn[on++]=Hn,rn[on++]=er,$n=e.id,Hn=e.overflow,er=t),t=Fu(t,s.children),t.flags|=4096);return t}return c?(Na(),c=s.fallback,j=t.mode,k=e.child,H=k.sibling,s=Pn(k,{mode:"hidden",children:s.children}),s.subtreeFlags=k.subtreeFlags&65011712,H!==null?c=Pn(H,c):(c=Wa(c,j,r,null),c.flags|=2),c.return=t,s.return=t,s.sibling=c,t.child=s,s=c,c=t.child,j=e.child.memoizedState,j===null?j=qu(r):(k=j.cachePool,k!==null?(H=it._currentValue,k=k.parent!==H?{parent:H,pool:H}:k):k=Ip(),j={baseLanes:j.baseLanes|r,cachePool:k}),c.memoizedState=j,c.childLanes=Ju(e,y,r),t.memoizedState=Gu,s):(Sa(t),r=e.child,e=r.sibling,r=Pn(r,{mode:"visible",children:s.children}),r.return=t,r.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=r,t.memoizedState=null,r)}function Fu(e,t){return t=il({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function il(e,t){return e=Ut(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vu(e,t,r){return Wr(t,e.child,null,r),e=Fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eg(e,t,r){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),du(e.return,t,r)}function Yu(e,t,r,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:r,tailMode:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=r,f.tailMode=c)}function tg(e,t,r){var s=t.pendingProps,c=s.revealOrder,f=s.tail;if(pt(e,t,s.children,r),s=lt.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eg(e,r,t);else if(e.tag===19)eg(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(te(lt,s),c){case"forwards":for(r=t.child,c=null;r!==null;)e=r.alternate,e!==null&&al(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=t.child,t.child=null):(c=r.sibling,r.sibling=null),Yu(t,!1,c,r,f);break;case"backwards":for(r=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&al(e)===null){t.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}Yu(t,!0,r,null,f);break;case"together":Yu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ka|=t.lanes,(r&t.childLanes)===0)if(e!==null){if(cs(e,t,r,!1),(r&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=Pn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Pn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Xu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&$i(e)))}function Oj(e,t,r){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),ba(t,it,e.memoizedState.cache),is();break;case 27:case 5:We(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Sa(t),t.flags|=128,null):(r&t.child.childLanes)!==0?Wh(e,t,r):(Sa(t),e=Vn(e,t,r),e!==null?e.sibling:null);Sa(t);break;case 19:var c=(e.flags&128)!==0;if(s=(r&t.childLanes)!==0,s||(cs(e,t,r,!1),s=(r&t.childLanes)!==0),c){if(s)return tg(e,t,r);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),te(lt,lt.current),s)break;return null;case 22:case 23:return t.lanes=0,Yh(e,t,r);case 24:ba(t,it,e.memoizedState.cache)}return Vn(e,t,r)}function ng(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps)ut=!0;else{if(!Xu(e,r)&&(t.flags&128)===0)return ut=!1,Oj(e,t,r);ut=(e.flags&131072)!==0}else ut=!1,Re&&(t.flags&1048576)!==0&&Dp(t,Pi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var s=t.elementType,c=s._init;if(s=c(s._payload),t.type=s,typeof s=="function")ru(s)?(e=lr(s,e),t.tag=1,t=Zh(null,t,s,e,r)):(t.tag=0,t=Hu(null,t,s,e,r));else{if(s!=null){if(c=s.$$typeof,c===_){t.tag=11,t=Jh(null,t,s,e,r);break e}else if(c===I){t.tag=14,t=Fh(null,t,s,e,r);break e}}throw t=J(s)||s,Error(l(306,t,""))}}return t;case 0:return Hu(e,t,t.type,t.pendingProps,r);case 1:return s=t.type,c=lr(s,t.pendingProps),Zh(e,t,s,c,r);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(l(387));s=t.pendingProps;var f=t.memoizedState;c=f.element,bu(e,t),gs(t,s,null,r);var y=t.memoizedState;if(s=y.cache,ba(t,it,s),s!==f.cache&&fu(t,[it],r,!0),hs(),s=y.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=Qh(e,t,s,r);break e}else if(s!==c){c=nn(Error(l(424)),t),ls(c),t=Qh(e,t,s,r);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=xn(e.firstChild),jt=t,Re=!0,nr=null,En=!0,r=Mh(t,null,s,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(is(),s===c){t=Vn(e,t,r);break e}pt(e,t,s,r)}t=t.child}return t;case 26:return sl(e,t),e===null?(r=sv(t.type,null,t.pendingProps,null))?t.memoizedState=r:Re||(r=t.type,e=t.pendingProps,s=wl(me.current).createElement(r),s[bt]=t,s[Ot]=e,gt(s,r,e),ct(s),t.stateNode=s):t.memoizedState=sv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return We(t),e===null&&Re&&(s=t.stateNode=av(t.type,t.pendingProps,me.current),jt=t,En=!0,c=Xe,La(t.type)?(kd=c,Xe=xn(s.firstChild)):Xe=c),pt(e,t,t.pendingProps.children,r),sl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((c=s=Xe)&&(s=nS(s,t.type,t.pendingProps,En),s!==null?(t.stateNode=s,jt=t,Xe=xn(s.firstChild),En=!1,c=!0):c=!1),c||ar(t)),We(t),c=t.type,f=t.pendingProps,y=e!==null?e.memoizedProps:null,s=f.children,Ed(c,f)?s=null:y!==null&&Ed(c,y)&&(t.flags|=32),t.memoizedState!==null&&(c=Nu(e,t,xj,null,null,r),Us._currentValue=c),sl(e,t),pt(e,t,s,r),t.child;case 6:return e===null&&Re&&((e=r=Xe)&&(r=aS(r,t.pendingProps,En),r!==null?(t.stateNode=r,jt=t,Xe=null,e=!0):e=!1),e||ar(t)),null;case 13:return Wh(e,t,r);case 4:return we(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Wr(t,null,s,r):pt(e,t,s,r),t.child;case 11:return Jh(e,t,t.type,t.pendingProps,r);case 7:return pt(e,t,t.pendingProps,r),t.child;case 8:return pt(e,t,t.pendingProps.children,r),t.child;case 12:return pt(e,t,t.pendingProps.children,r),t.child;case 10:return s=t.pendingProps,ba(t,t.type,s.value),pt(e,t,s.children,r),t.child;case 9:return c=t.type._context,s=t.pendingProps.children,or(t),c=yt(c),s=s(c),t.flags|=1,pt(e,t,s,r),t.child;case 14:return Fh(e,t,t.type,t.pendingProps,r);case 15:return Vh(e,t,t.type,t.pendingProps,r);case 19:return tg(e,t,r);case 31:return s=t.pendingProps,r=t.mode,s={mode:s.mode,children:s.children},e===null?(r=il(s,r),r.ref=t.ref,t.child=r,r.return=t,t=r):(r=Pn(e.child,s),r.ref=t.ref,t.child=r,r.return=t,t=r),t;case 22:return Yh(e,t,r);case 24:return or(t),s=yt(it),e===null?(c=hu(),c===null&&(c=He,f=mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=r),c=f),t.memoizedState={parent:s,cache:c},vu(t),ba(t,it,c)):((e.lanes&r)!==0&&(bu(e,t),gs(t,null,null,r),hs()),c=e.memoizedState,f=t.memoizedState,c.parent!==s?(c={parent:s,cache:s},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),ba(t,it,s)):(s=f.cache,ba(t,it,s),s!==c.cache&&fu(t,[it],r,!0))),pt(e,t,t.pendingProps.children,r),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Yn(e){e.flags|=4}function ag(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!dv(t)){if(t=sn.current,t!==null&&((Ae&4194048)===Ae?Cn!==null:(Ae&62914560)!==Ae&&(Ae&536870912)===0||t!==Cn))throw ms=gu,Pp;e.flags|=8192}}function ll(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bm():536870912,e.lanes|=t,ao|=t)}function Ss(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,s=0;if(t)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=r,t}function kj(e,t,r){var s=t.pendingProps;switch(lu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return r=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),qn(it),Qe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ss(t)?Yn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bp())),Ve(t),null;case 26:return r=t.memoizedState,e===null?(Yn(t),r!==null?(Ve(t),ag(t,r)):(Ve(t),t.flags&=-16777217)):r?r!==e.memoizedState?(Yn(t),Ve(t),ag(t,r)):(Ve(t),t.flags&=-16777217):(e.memoizedProps!==s&&Yn(t),Ve(t),t.flags&=-16777217),null;case 27:Ct(t),r=me.current;var c=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Yn(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}e=se.current,ss(t)?Lp(t):(e=av(c,s,r),t.stateNode=e,Yn(t))}return Ve(t),null;case 5:if(Ct(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Yn(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}if(e=se.current,ss(t))Lp(t);else{switch(c=wl(me.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(r,{is:s.is}):c.createElement(r)}}e[bt]=t,e[Ot]=s;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=e;e:switch(gt(e,r,s),r){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Yn(t)}}return Ve(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&Yn(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(l(166));if(e=me.current,ss(t)){if(e=t.stateNode,r=t.memoizedProps,s=null,c=jt,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[bt]=t,e=!!(e.nodeValue===r||s!==null&&s.suppressHydrationWarning===!0||Kg(e.nodeValue,r)),e||ar(t)}else e=wl(e).createTextNode(s),e[bt]=t,t.stateNode=e}return Ve(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ss(t),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[bt]=t}else is(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),c=!1}else c=Bp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Fn(t),t):(Fn(t),null)}if(Fn(t),(t.flags&128)!==0)return t.lanes=r,t;if(r=s!==null,e=e!==null&&e.memoizedState!==null,r){s=t.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return r!==e&&r&&(t.child.flags|=8192),ll(t,t.updateQueue),Ve(t),null;case 4:return Qe(),e===null&&xd(t.stateNode.containerInfo),Ve(t),null;case 10:return qn(t.type),Ve(t),null;case 19:if(K(lt),c=t.memoizedState,c===null)return Ve(t),null;if(s=(t.flags&128)!==0,f=c.rendering,f===null)if(s)Ss(c,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=al(e),f!==null){for(t.flags|=128,Ss(c,!1),e=f.updateQueue,t.updateQueue=e,ll(t,e),t.subtreeFlags=0,e=r,r=t.child;r!==null;)Rp(r,e),r=r.sibling;return te(lt,lt.current&1|2),t.child}e=e.sibling}c.tail!==null&&st()>dl&&(t.flags|=128,s=!0,Ss(c,!1),t.lanes=4194304)}else{if(!s)if(e=al(f),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,ll(t,e),Ss(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return Ve(t),null}else 2*st()-c.renderingStartTime>dl&&r!==536870912&&(t.flags|=128,s=!0,Ss(c,!1),t.lanes=4194304);c.isBackwards?(f.sibling=t.child,t.child=f):(e=c.last,e!==null?e.sibling=f:t.child=f,c.last=f)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=st(),t.sibling=null,e=lt.current,te(lt,s?e&1|2:e&1),t):(Ve(t),null);case 22:case 23:return Fn(t),ju(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(r&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),r=t.updateQueue,r!==null&&ll(t,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==r&&(t.flags|=2048),e!==null&&K(sr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qn(it),Ve(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Tj(e,t){switch(lu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(it),Qe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ct(t),null;case 13:if(Fn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));is()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(lt),null;case 4:return Qe(),null;case 10:return qn(t.type),null;case 22:case 23:return Fn(t),ju(),e!==null&&K(sr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qn(it),null;case 25:return null;default:return null}}function rg(e,t){switch(lu(t),t.tag){case 3:qn(it),Qe();break;case 26:case 27:case 5:Ct(t);break;case 4:Qe();break;case 13:Fn(t);break;case 19:K(lt);break;case 10:qn(t.type);break;case 22:case 23:Fn(t),ju(),e!==null&&K(sr);break;case 24:qn(it)}}function Ns(e,t){try{var r=t.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var c=s.next;r=c;do{if((r.tag&e)===e){s=void 0;var f=r.create,y=r.inst;s=f(),y.destroy=s}r=r.next}while(r!==c)}}catch(j){Pe(t,t.return,j)}}function Ea(e,t,r){try{var s=t.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var y=s.inst,j=y.destroy;if(j!==void 0){y.destroy=void 0,c=t;var k=r,H=j;try{H()}catch(X){Pe(c,k,X)}}}s=s.next}while(s!==f)}}catch(X){Pe(t,t.return,X)}}function og(e){var t=e.updateQueue;if(t!==null){var r=e.stateNode;try{Fp(t,r)}catch(s){Pe(e,e.return,s)}}}function sg(e,t,r){r.props=lr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(s){Pe(e,t,s)}}function Es(e,t){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof r=="function"?e.refCleanup=r(s):r.current=s}}catch(c){Pe(e,t,c)}}function An(e,t){var r=e.ref,s=e.refCleanup;if(r!==null)if(typeof s=="function")try{s()}catch(c){Pe(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Pe(e,t,c)}else r.current=null}function ig(e){var t=e.type,r=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":r.autoFocus&&s.focus();break e;case"img":r.src?s.src=r.src:r.srcSet&&(s.srcset=r.srcSet)}}catch(c){Pe(e,e.return,c)}}function Ku(e,t,r){try{var s=e.stateNode;Zj(s,e.type,r,t),s[Ot]=t}catch(c){Pe(e,e.return,c)}}function lg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function Zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qu(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,t):(t=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,t.appendChild(e),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=xl));else if(s!==4&&(s===27&&La(e.type)&&(r=e.stateNode,t=null),e=e.child,e!==null))for(Qu(e,t,r),e=e.sibling;e!==null;)Qu(e,t,r),e=e.sibling}function cl(e,t,r){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(s!==4&&(s===27&&La(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(cl(e,t,r),e=e.sibling;e!==null;)cl(e,t,r),e=e.sibling}function cg(e){var t=e.stateNode,r=e.memoizedProps;try{for(var s=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);gt(t,s,r),t[bt]=e,t[Ot]=r}catch(f){Pe(e,e.return,f)}}var Xn=!1,tt=!1,Wu=!1,ug=typeof WeakSet=="function"?WeakSet:Set,dt=null;function Rj(e,t){if(e=e.containerInfo,Sd=Al,e=wp(e),Zc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var s=r.getSelection&&r.getSelection();if(s&&s.rangeCount!==0){r=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var y=0,j=-1,k=-1,H=0,X=0,Q=e,G=null;t:for(;;){for(var q;Q!==r||c!==0&&Q.nodeType!==3||(j=y+c),Q!==f||s!==0&&Q.nodeType!==3||(k=y+s),Q.nodeType===3&&(y+=Q.nodeValue.length),(q=Q.firstChild)!==null;)G=Q,Q=q;for(;;){if(Q===e)break t;if(G===r&&++H===c&&(j=y),G===f&&++X===s&&(k=y),(q=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=q}r=j===-1||k===-1?null:{start:j,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(Nd={focusedElem:e,selectionRange:r},Al=!1,dt=t;dt!==null;)if(t=dt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,dt=e;else for(;dt!==null;){switch(t=dt,f=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=t,c=f.memoizedProps,f=f.memoizedState,s=r.stateNode;try{var be=lr(r.type,c,r.elementType===r.type);e=s.getSnapshotBeforeUpdate(be,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ge){Pe(r,r.return,ge)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,r=e.nodeType,r===9)Ad(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ad(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,dt=e;break}dt=t.return}}function dg(e,t,r){var s=r.flags;switch(r.tag){case 0:case 11:case 15:Ca(e,r),s&4&&Ns(5,r);break;case 1:if(Ca(e,r),s&4)if(e=r.stateNode,t===null)try{e.componentDidMount()}catch(y){Pe(r,r.return,y)}else{var c=lr(r.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Pe(r,r.return,y)}}s&64&&og(r),s&512&&Es(r,r.return);break;case 3:if(Ca(e,r),s&64&&(e=r.updateQueue,e!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{Fp(e,t)}catch(y){Pe(r,r.return,y)}}break;case 27:t===null&&s&4&&cg(r);case 26:case 5:Ca(e,r),t===null&&s&4&&ig(r),s&512&&Es(r,r.return);break;case 12:Ca(e,r);break;case 13:Ca(e,r),s&4&&pg(e,r),s&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Pj.bind(null,r),rS(e,r))));break;case 22:if(s=r.memoizedState!==null||Xn,!s){t=t!==null&&t.memoizedState!==null||tt,c=Xn;var f=tt;Xn=s,(tt=t)&&!f?Aa(e,r,(r.subtreeFlags&8772)!==0):Ca(e,r),Xn=c,tt=f}break;case 30:break;default:Ca(e,r)}}function fg(e){var t=e.alternate;t!==null&&(e.alternate=null,fg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Dc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Rt=!1;function Kn(e,t,r){for(r=r.child;r!==null;)mg(e,t,r),r=r.sibling}function mg(e,t,r){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(je,r)}catch{}switch(r.tag){case 26:tt||An(r,t),Kn(e,t,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:tt||An(r,t);var s=Je,c=Rt;La(r.type)&&(Je=r.stateNode,Rt=!1),Kn(e,t,r),Ms(r.stateNode),Je=s,Rt=c;break;case 5:tt||An(r,t);case 6:if(s=Je,c=Rt,Je=null,Kn(e,t,r),Je=s,Rt=c,Je!==null)if(Rt)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(r.stateNode)}catch(f){Pe(r,t,f)}else try{Je.removeChild(r.stateNode)}catch(f){Pe(r,t,f)}break;case 18:Je!==null&&(Rt?(e=Je,tv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Hs(e)):tv(Je,r.stateNode));break;case 4:s=Je,c=Rt,Je=r.stateNode.containerInfo,Rt=!0,Kn(e,t,r),Je=s,Rt=c;break;case 0:case 11:case 14:case 15:tt||Ea(2,r,t),tt||Ea(4,r,t),Kn(e,t,r);break;case 1:tt||(An(r,t),s=r.stateNode,typeof s.componentWillUnmount=="function"&&sg(r,t,s)),Kn(e,t,r);break;case 21:Kn(e,t,r);break;case 22:tt=(s=tt)||r.memoizedState!==null,Kn(e,t,r),tt=s;break;default:Kn(e,t,r)}}function pg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hs(e)}catch(r){Pe(t,t.return,r)}}function Dj(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ug),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ug),t;default:throw Error(l(435,e.tag))}}function ed(e,t){var r=Dj(e);t.forEach(function(s){var c=$j.bind(null,e,s);r.has(s)||(r.add(s),s.then(c,c))})}function It(e,t){var r=t.deletions;if(r!==null)for(var s=0;s<r.length;s++){var c=r[s],f=e,y=t,j=y;e:for(;j!==null;){switch(j.tag){case 27:if(La(j.type)){Je=j.stateNode,Rt=!1;break e}break;case 5:Je=j.stateNode,Rt=!1;break e;case 3:case 4:Je=j.stateNode.containerInfo,Rt=!0;break e}j=j.return}if(Je===null)throw Error(l(160));mg(f,y,c),Je=null,Rt=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)hg(t,e),t=t.sibling}var yn=null;function hg(e,t){var r=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:It(t,e),Pt(e),s&4&&(Ea(3,e,e.return),Ns(3,e),Ea(5,e,e.return));break;case 1:It(t,e),Pt(e),s&512&&(tt||r===null||An(r,r.return)),s&64&&Xn&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?s:r.concat(s))));break;case 26:var c=yn;if(It(t,e),Pt(e),s&512&&(tt||r===null||An(r,r.return)),s&4){var f=r!==null?r.memoizedState:null;if(s=e.memoizedState,r===null)if(s===null)if(e.stateNode===null){e:{s=e.type,r=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Xo]||f[bt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),gt(f,s,r),f[bt]=e,ct(f),s=f;break e;case"link":var y=cv("link","href",c).get(s+(r.href||""));if(y){for(var j=0;j<y.length;j++)if(f=y[j],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(j,1);break t}}f=c.createElement(s),gt(f,s,r),c.head.appendChild(f);break;case"meta":if(y=cv("meta","content",c).get(s+(r.content||""))){for(j=0;j<y.length;j++)if(f=y[j],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(j,1);break t}}f=c.createElement(s),gt(f,s,r),c.head.appendChild(f);break;default:throw Error(l(468,s))}f[bt]=e,ct(f),s=f}e.stateNode=s}else uv(c,e.type,e.stateNode);else e.stateNode=lv(c,s,e.memoizedProps);else f!==s?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,s===null?uv(c,e.type,e.stateNode):lv(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Ku(e,e.memoizedProps,r.memoizedProps)}break;case 27:It(t,e),Pt(e),s&512&&(tt||r===null||An(r,r.return)),r!==null&&s&4&&Ku(e,e.memoizedProps,r.memoizedProps);break;case 5:if(It(t,e),Pt(e),s&512&&(tt||r===null||An(r,r.return)),e.flags&32){c=e.stateNode;try{Br(c,"")}catch(q){Pe(e,e.return,q)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Ku(e,c,r!==null?r.memoizedProps:c)),s&1024&&(Wu=!0);break;case 6:if(It(t,e),Pt(e),s&4){if(e.stateNode===null)throw Error(l(162));s=e.memoizedProps,r=e.stateNode;try{r.nodeValue=s}catch(q){Pe(e,e.return,q)}}break;case 3:if(Nl=null,c=yn,yn=jl(t.containerInfo),It(t,e),yn=c,Pt(e),s&4&&r!==null&&r.memoizedState.isDehydrated)try{Hs(t.containerInfo)}catch(q){Pe(e,e.return,q)}Wu&&(Wu=!1,gg(e));break;case 4:s=yn,yn=jl(e.stateNode.containerInfo),It(t,e),Pt(e),yn=s;break;case 12:It(t,e),Pt(e);break;case 13:It(t,e),Pt(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(sd=st()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ed(e,s)));break;case 22:c=e.memoizedState!==null;var k=r!==null&&r.memoizedState!==null,H=Xn,X=tt;if(Xn=H||c,tt=X||k,It(t,e),tt=X,Xn=H,Pt(e),s&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(r===null||k||Xn||tt||cr(e)),r=null,t=e;;){if(t.tag===5||t.tag===26){if(r===null){k=r=t;try{if(f=k.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{j=k.stateNode;var Q=k.memoizedProps.style,G=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;j.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(q){Pe(k,k.return,q)}}}else if(t.tag===6){if(r===null){k=t;try{k.stateNode.nodeValue=c?"":k.memoizedProps}catch(q){Pe(k,k.return,q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;r===t&&(r=null),t=t.return}r===t&&(r=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(r=s.retryQueue,r!==null&&(s.retryQueue=null,ed(e,r))));break;case 19:It(t,e),Pt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ed(e,s)));break;case 30:break;case 21:break;default:It(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{for(var r,s=e.return;s!==null;){if(lg(s)){r=s;break}s=s.return}if(r==null)throw Error(l(160));switch(r.tag){case 27:var c=r.stateNode,f=Zu(e);cl(e,f,c);break;case 5:var y=r.stateNode;r.flags&32&&(Br(y,""),r.flags&=-33);var j=Zu(e);cl(e,j,y);break;case 3:case 4:var k=r.stateNode.containerInfo,H=Zu(e);Qu(e,H,k);break;default:throw Error(l(161))}}catch(X){Pe(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;gg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ca(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)dg(e,t.alternate,t),t=t.sibling}function cr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ea(4,t,t.return),cr(t);break;case 1:An(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&sg(t,t.return,r),cr(t);break;case 27:Ms(t.stateNode);case 26:case 5:An(t,t.return),cr(t);break;case 22:t.memoizedState===null&&cr(t);break;case 30:cr(t);break;default:cr(t)}e=e.sibling}}function Aa(e,t,r){for(r=r&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,c=e,f=t,y=f.flags;switch(f.tag){case 0:case 11:case 15:Aa(c,f,r),Ns(4,f);break;case 1:if(Aa(c,f,r),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(H){Pe(s,s.return,H)}if(s=f,c=s.updateQueue,c!==null){var j=s.stateNode;try{var k=c.shared.hiddenCallbacks;if(k!==null)for(c.shared.hiddenCallbacks=null,c=0;c<k.length;c++)Jp(k[c],j)}catch(H){Pe(s,s.return,H)}}r&&y&64&&og(f),Es(f,f.return);break;case 27:cg(f);case 26:case 5:Aa(c,f,r),r&&s===null&&y&4&&ig(f),Es(f,f.return);break;case 12:Aa(c,f,r);break;case 13:Aa(c,f,r),r&&y&4&&pg(c,f);break;case 22:f.memoizedState===null&&Aa(c,f,r),Es(f,f.return);break;case 30:break;default:Aa(c,f,r)}t=t.sibling}}function td(e,t){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&us(r))}function nd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&us(e))}function On(e,t,r,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vg(e,t,r,s),t=t.sibling}function vg(e,t,r,s){var c=t.flags;switch(t.tag){case 0:case 11:case 15:On(e,t,r,s),c&2048&&Ns(9,t);break;case 1:On(e,t,r,s);break;case 3:On(e,t,r,s),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&us(e)));break;case 12:if(c&2048){On(e,t,r,s),e=t.stateNode;try{var f=t.memoizedProps,y=f.id,j=f.onPostCommit;typeof j=="function"&&j(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Pe(t,t.return,k)}}else On(e,t,r,s);break;case 13:On(e,t,r,s);break;case 23:break;case 22:f=t.stateNode,y=t.alternate,t.memoizedState!==null?f._visibility&2?On(e,t,r,s):Cs(e,t):f._visibility&2?On(e,t,r,s):(f._visibility|=2,eo(e,t,r,s,(t.subtreeFlags&10256)!==0)),c&2048&&td(y,t);break;case 24:On(e,t,r,s),c&2048&&nd(t.alternate,t);break;default:On(e,t,r,s)}}function eo(e,t,r,s,c){for(c=c&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var f=e,y=t,j=r,k=s,H=y.flags;switch(y.tag){case 0:case 11:case 15:eo(f,y,j,k,c),Ns(8,y);break;case 23:break;case 22:var X=y.stateNode;y.memoizedState!==null?X._visibility&2?eo(f,y,j,k,c):Cs(f,y):(X._visibility|=2,eo(f,y,j,k,c)),c&&H&2048&&td(y.alternate,y);break;case 24:eo(f,y,j,k,c),c&&H&2048&&nd(y.alternate,y);break;default:eo(f,y,j,k,c)}t=t.sibling}}function Cs(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var r=e,s=t,c=s.flags;switch(s.tag){case 22:Cs(r,s),c&2048&&td(s.alternate,s);break;case 24:Cs(r,s),c&2048&&nd(s.alternate,s);break;default:Cs(r,s)}t=t.sibling}}var As=8192;function to(e){if(e.subtreeFlags&As)for(e=e.child;e!==null;)bg(e),e=e.sibling}function bg(e){switch(e.tag){case 26:to(e),e.flags&As&&e.memoizedState!==null&&vS(yn,e.memoizedState,e.memoizedProps);break;case 5:to(e);break;case 3:case 4:var t=yn;yn=jl(e.stateNode.containerInfo),to(e),yn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=As,As=16777216,to(e),As=t):to(e));break;default:to(e)}}function yg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Os(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];dt=s,wg(s,e)}yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xg(e),e=e.sibling}function xg(e){switch(e.tag){case 0:case 11:case 15:Os(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:Os(e);break;case 12:Os(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ul(e)):Os(e);break;default:Os(e)}}function ul(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var r=0;r<t.length;r++){var s=t[r];dt=s,wg(s,e)}yg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ea(8,t,t.return),ul(t);break;case 22:r=t.stateNode,r._visibility&2&&(r._visibility&=-3,ul(t));break;default:ul(t)}e=e.sibling}}function wg(e,t){for(;dt!==null;){var r=dt;switch(r.tag){case 0:case 11:case 15:Ea(8,r,t);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var s=r.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:us(r.memoizedState.cache)}if(s=r.child,s!==null)s.return=r,dt=s;else e:for(r=e;dt!==null;){s=dt;var c=s.sibling,f=s.return;if(fg(s),s===r){dt=null;break e}if(c!==null){c.return=f,dt=c;break e}dt=f}}}var Lj={getCacheForType:function(e){var t=yt(it),r=t.data.get(e);return r===void 0&&(r=e(),t.data.set(e,r)),r}},Mj=typeof WeakMap=="function"?WeakMap:Map,Le=0,He=null,Ee=null,Ae=0,Me=0,$t=null,Oa=!1,no=!1,ad=!1,Zn=0,Ke=0,ka=0,ur=0,rd=0,ln=0,ao=0,ks=null,Dt=null,od=!1,sd=0,dl=1/0,fl=null,Ta=null,ht=0,Ra=null,ro=null,oo=0,id=0,ld=null,jg=null,Ts=0,cd=null;function Ht(){if((Le&2)!==0&&Ae!==0)return Ae&-Ae;if($.T!==null){var e=Fr;return e!==0?e:gd()}return Um()}function Sg(){ln===0&&(ln=(Ae&536870912)===0||Re?Mm():536870912);var e=sn.current;return e!==null&&(e.flags|=32),ln}function Gt(e,t,r){(e===He&&(Me===2||Me===9)||e.cancelPendingCommit!==null)&&(so(e,0),Da(e,Ae,ln,!1)),Yo(e,r),((Le&2)===0||e!==He)&&(e===He&&((Le&2)===0&&(ur|=r),Ke===4&&Da(e,Ae,ln,!1)),kn(e))}function Ng(e,t,r){if((Le&6)!==0)throw Error(l(327));var s=!r&&(t&124)===0&&(t&e.expiredLanes)===0||Vo(e,t),c=s?_j(e,t):fd(e,t,!0),f=s;do{if(c===0){no&&!s&&Da(e,t,0,!1);break}else{if(r=e.current.alternate,f&&!Bj(r)){c=fd(e,t,!1),f=!1;continue}if(c===2){if(f=t,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var j=e;c=ks;var k=j.current.memoizedState.isDehydrated;if(k&&(so(j,y).flags|=256),y=fd(j,y,!1),y!==2){if(ad&&!k){j.errorRecoveryDisabledLanes|=f,ur|=f,c=4;break e}f=Dt,Dt=c,f!==null&&(Dt===null?Dt=f:Dt.push.apply(Dt,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){so(e,0),Da(e,t,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Da(s,t,ln,!Oa);break e;case 2:Dt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(c=sd+300-st(),10<c)){if(Da(s,t,ln,!Oa),Si(s,0,!0)!==0)break e;s.timeoutHandle=Wg(Eg.bind(null,s,r,Dt,fl,od,t,ln,ur,ao,Oa,f,2,-0,0),c);break e}Eg(s,r,Dt,fl,od,t,ln,ur,ao,Oa,f,0,-0,0)}}break}while(!0);kn(e)}function Eg(e,t,r,s,c,f,y,j,k,H,X,Q,G,q){if(e.timeoutHandle=-1,Q=t.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(_s={stylesheets:null,count:0,unsuspend:gS},bg(t),Q=bS(),Q!==null)){e.cancelPendingCommit=Q(Dg.bind(null,e,t,f,r,s,c,y,j,k,X,1,G,q)),Da(e,f,y,!H);return}Dg(e,t,f,r,s,c,y,j,k)}function Bj(e){for(var t=e;;){var r=t.tag;if((r===0||r===11||r===15)&&t.flags&16384&&(r=t.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var s=0;s<r.length;s++){var c=r[s],f=c.getSnapshot;c=c.value;try{if(!_t(f(),c))return!1}catch{return!1}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,r,s){t&=~rd,t&=~ur,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var c=t;0<c;){var f=31-zt(c),y=1<<f;s[f]=-1,c&=~y}r!==0&&zm(e,r,t)}function ml(){return(Le&6)===0?(Rs(0),!1):!0}function ud(){if(Ee!==null){if(Me===0)var e=Ee.return;else e=Ee,Gn=rr=null,Au(e),Qr=null,ws=0,e=Ee;for(;e!==null;)rg(e.alternate,e),e=e.return;Ee=null}}function so(e,t){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Wj(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),ud(),He=e,Ee=r=Pn(e.current,null),Ae=t,Me=0,$t=null,Oa=!1,no=Vo(e,t),ad=!1,ao=ln=rd=ur=ka=Ke=0,Dt=ks=null,od=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var c=31-zt(s),f=1<<c;t|=e[c],s&=~f}return Zn=t,Bi(),r}function Cg(e,t){Se=null,$.H=el,t===fs||t===qi?(t=Gp(),Me=3):t===Pp?(t=Gp(),Me=4):Me=t===qh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,$t=t,Ee===null&&(Ke=1,ol(e,nn(t,e.current)))}function Ag(){var e=$.H;return $.H=el,e===null?el:e}function Og(){var e=$.A;return $.A=Lj,e}function dd(){Ke=4,Oa||(Ae&4194048)!==Ae&&sn.current!==null||(no=!0),(ka&134217727)===0&&(ur&134217727)===0||He===null||Da(He,Ae,ln,!1)}function fd(e,t,r){var s=Le;Le|=2;var c=Ag(),f=Og();(He!==e||Ae!==t)&&(fl=null,so(e,t)),t=!1;var y=Ke;e:do try{if(Me!==0&&Ee!==null){var j=Ee,k=$t;switch(Me){case 8:ud(),y=6;break e;case 3:case 2:case 9:case 6:sn.current===null&&(t=!0);var H=Me;if(Me=0,$t=null,io(e,j,k,H),r&&no){y=0;break e}break;default:H=Me,Me=0,$t=null,io(e,j,k,H)}}zj(),y=Ke;break}catch(X){Cg(e,X)}while(!0);return t&&e.shellSuspendCounter++,Gn=rr=null,Le=s,$.H=c,$.A=f,Ee===null&&(He=null,Ae=0,Bi()),y}function zj(){for(;Ee!==null;)kg(Ee)}function _j(e,t){var r=Le;Le|=2;var s=Ag(),c=Og();He!==e||Ae!==t?(fl=null,dl=st()+500,so(e,t)):no=Vo(e,t);e:do try{if(Me!==0&&Ee!==null){t=Ee;var f=$t;t:switch(Me){case 1:Me=0,$t=null,io(e,t,f,1);break;case 2:case 9:if($p(f)){Me=0,$t=null,Tg(t);break}t=function(){Me!==2&&Me!==9||He!==e||(Me=7),kn(e)},f.then(t,t);break e;case 3:Me=7;break e;case 4:Me=5;break e;case 7:$p(f)?(Me=0,$t=null,Tg(t)):(Me=0,$t=null,io(e,t,f,7));break;case 5:var y=null;switch(Ee.tag){case 26:y=Ee.memoizedState;case 5:case 27:var j=Ee;if(!y||dv(y)){Me=0,$t=null;var k=j.sibling;if(k!==null)Ee=k;else{var H=j.return;H!==null?(Ee=H,pl(H)):Ee=null}break t}}Me=0,$t=null,io(e,t,f,5);break;case 6:Me=0,$t=null,io(e,t,f,6);break;case 8:ud(),Ke=6;break e;default:throw Error(l(462))}}Uj();break}catch(X){Cg(e,X)}while(!0);return Gn=rr=null,$.H=s,$.A=c,Le=r,Ee!==null?0:(He=null,Ae=0,Bi(),Ke)}function Uj(){for(;Ee!==null&&!ze();)kg(Ee)}function kg(e){var t=ng(e.alternate,e,Zn);e.memoizedProps=e.pendingProps,t===null?pl(e):Ee=t}function Tg(e){var t=e,r=t.alternate;switch(t.tag){case 15:case 0:t=Kh(r,t,t.pendingProps,t.type,void 0,Ae);break;case 11:t=Kh(r,t,t.pendingProps,t.type.render,t.ref,Ae);break;case 5:Au(t);default:rg(r,t),t=Ee=Rp(t,Zn),t=ng(r,t,Zn)}e.memoizedProps=e.pendingProps,t===null?pl(e):Ee=t}function io(e,t,r,s){Gn=rr=null,Au(t),Qr=null,ws=0;var c=t.return;try{if(Aj(e,c,t,r,Ae)){Ke=1,ol(e,nn(r,e.current)),Ee=null;return}}catch(f){if(c!==null)throw Ee=c,f;Ke=1,ol(e,nn(r,e.current)),Ee=null;return}t.flags&32768?(Re||s===1?e=!0:no||(Ae&536870912)!==0?e=!1:(Oa=e=!0,(s===2||s===9||s===3||s===6)&&(s=sn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Rg(t,e)):pl(t)}function pl(e){var t=e;do{if((t.flags&32768)!==0){Rg(t,Oa);return}e=t.return;var r=kj(t.alternate,t,Zn);if(r!==null){Ee=r;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ke===0&&(Ke=5)}function Rg(e,t){do{var r=Tj(e.alternate,e);if(r!==null){r.flags&=32767,Ee=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=r}while(e!==null);Ke=6,Ee=null}function Dg(e,t,r,s,c,f,y,j,k){e.cancelPendingCommit=null;do hl();while(ht!==0);if((Le&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=nu,g0(e,r,f,y,j,k),e===He&&(Ee=He=null,Ae=0),ro=t,Ra=e,oo=r,id=f,ld=c,jg=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hj(vn,function(){return _g(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=$.T,$.T=null,c=ee.p,ee.p=2,y=Le,Le|=4;try{Rj(e,t,r)}finally{Le=y,ee.p=c,$.T=s}}ht=1,Lg(),Mg(),Bg()}}function Lg(){if(ht===1){ht=0;var e=Ra,t=ro,r=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||r){r=$.T,$.T=null;var s=ee.p;ee.p=2;var c=Le;Le|=4;try{hg(t,e);var f=Nd,y=wp(e.containerInfo),j=f.focusedElem,k=f.selectionRange;if(y!==j&&j&&j.ownerDocument&&xp(j.ownerDocument.documentElement,j)){if(k!==null&&Zc(j)){var H=k.start,X=k.end;if(X===void 0&&(X=H),"selectionStart"in j)j.selectionStart=H,j.selectionEnd=Math.min(X,j.value.length);else{var Q=j.ownerDocument||document,G=Q&&Q.defaultView||window;if(G.getSelection){var q=G.getSelection(),be=j.textContent.length,ge=Math.min(k.start,be),Ie=k.end===void 0?ge:Math.min(k.end,be);!q.extend&&ge>Ie&&(y=Ie,Ie=ge,ge=y);var U=yp(j,ge),B=yp(j,Ie);if(U&&B&&(q.rangeCount!==1||q.anchorNode!==U.node||q.anchorOffset!==U.offset||q.focusNode!==B.node||q.focusOffset!==B.offset)){var P=Q.createRange();P.setStart(U.node,U.offset),q.removeAllRanges(),ge>Ie?(q.addRange(P),q.extend(B.node,B.offset)):(P.setEnd(B.node,B.offset),q.addRange(P))}}}}for(Q=[],q=j;q=q.parentNode;)q.nodeType===1&&Q.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof j.focus=="function"&&j.focus(),j=0;j<Q.length;j++){var Z=Q[j];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}Al=!!Sd,Nd=Sd=null}finally{Le=c,ee.p=s,$.T=r}}e.current=t,ht=2}}function Mg(){if(ht===2){ht=0;var e=Ra,t=ro,r=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||r){r=$.T,$.T=null;var s=ee.p;ee.p=2;var c=Le;Le|=4;try{dg(e,t.alternate,t)}finally{Le=c,ee.p=s,$.T=r}}ht=3}}function Bg(){if(ht===4||ht===3){ht=0,_n();var e=Ra,t=ro,r=oo,s=jg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ht=5:(ht=0,ro=Ra=null,zg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ta=null),Tc(r),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(je,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=$.T,c=ee.p,ee.p=2,$.T=null;try{for(var f=e.onRecoverableError,y=0;y<s.length;y++){var j=s[y];f(j.value,{componentStack:j.stack})}}finally{$.T=t,ee.p=c}}(oo&3)!==0&&hl(),kn(e),c=e.pendingLanes,(r&4194090)!==0&&(c&42)!==0?e===cd?Ts++:(Ts=0,cd=e):Ts=0,Rs(0)}}function zg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,us(t)))}function hl(e){return Lg(),Mg(),Bg(),_g()}function _g(){if(ht!==5)return!1;var e=Ra,t=id;id=0;var r=Tc(oo),s=$.T,c=ee.p;try{ee.p=32>r?32:r,$.T=null,r=ld,ld=null;var f=Ra,y=oo;if(ht=0,ro=Ra=null,oo=0,(Le&6)!==0)throw Error(l(331));var j=Le;if(Le|=4,xg(f.current),vg(f,f.current,y,r),Le=j,Rs(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(je,f)}catch{}return!0}finally{ee.p=c,$.T=s,zg(e,t)}}function Ug(e,t,r){t=nn(r,t),t=$u(e.stateNode,t,2),e=wa(e,t,2),e!==null&&(Yo(e,2),kn(e))}function Pe(e,t,r){if(e.tag===3)Ug(e,e,r);else for(;t!==null;){if(t.tag===3){Ug(t,e,r);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){e=nn(r,e),r=Hh(2),s=wa(t,r,2),s!==null&&(Gh(r,s,t,e),Yo(s,2),kn(s));break}}t=t.return}}function md(e,t,r){var s=e.pingCache;if(s===null){s=e.pingCache=new Mj;var c=new Set;s.set(t,c)}else c=s.get(t),c===void 0&&(c=new Set,s.set(t,c));c.has(r)||(ad=!0,c.add(r),e=Ij.bind(null,e,t,r),t.then(e,e))}function Ij(e,t,r){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,He===e&&(Ae&r)===r&&(Ke===4||Ke===3&&(Ae&62914560)===Ae&&300>st()-sd?(Le&2)===0&&so(e,0):rd|=r,ao===Ae&&(ao=0)),kn(e)}function Ig(e,t){t===0&&(t=Bm()),e=Hr(e,t),e!==null&&(Yo(e,t),kn(e))}function Pj(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ig(e,r)}function $j(e,t){var r=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(t),Ig(e,r)}function Hj(e,t){return Zt(e,t)}var gl=null,lo=null,pd=!1,vl=!1,hd=!1,dr=0;function kn(e){e!==lo&&e.next===null&&(lo===null?gl=lo=e:lo=lo.next=e),vl=!0,pd||(pd=!0,qj())}function Rs(e,t){if(!hd&&vl){hd=!0;do for(var r=!1,s=gl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var y=s.suspendedLanes,j=s.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=c&~(y&~j),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,Gg(s,f))}else f=Ae,f=Si(s,s===He?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Vo(s,f)||(r=!0,Gg(s,f));s=s.next}while(r);hd=!1}}function Gj(){Pg()}function Pg(){vl=pd=!1;var e=0;dr!==0&&(Qj()&&(e=dr),dr=0);for(var t=st(),r=null,s=gl;s!==null;){var c=s.next,f=$g(s,t);f===0?(s.next=null,r===null?gl=c:r.next=c,c===null&&(lo=r)):(r=s,(e!==0||(f&3)!==0)&&(vl=!0)),s=c}Rs(e)}function $g(e,t){for(var r=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-zt(f),j=1<<y,k=c[y];k===-1?((j&r)===0||(j&s)!==0)&&(c[y]=h0(j,t)):k<=t&&(e.expiredLanes|=j),f&=~j}if(t=He,r=Ae,r=Si(e,e===t?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,r===0||e===t&&(Me===2||Me===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Qt(s),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Vo(e,r)){if(t=r&-r,t===e.callbackPriority)return t;switch(s!==null&&Qt(s),Tc(r)){case 2:case 8:r=Wt;break;case 32:r=vn;break;case 268435456:r=Va;break;default:r=vn}return s=Hg.bind(null,e),r=Zt(r,s),e.callbackPriority=t,e.callbackNode=r,t}return s!==null&&s!==null&&Qt(s),e.callbackPriority=2,e.callbackNode=null,2}function Hg(e,t){if(ht!==0&&ht!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(hl()&&e.callbackNode!==r)return null;var s=Ae;return s=Si(e,e===He?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Ng(e,s,t),$g(e,st()),e.callbackNode!=null&&e.callbackNode===r?Hg.bind(null,e):null)}function Gg(e,t){if(hl())return null;Ng(e,t,!0)}function qj(){eS(function(){(Le&6)!==0?Zt(Er,Gj):Pg()})}function gd(){return dr===0&&(dr=Mm()),dr}function qg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Oi(""+e)}function Jg(e,t){var r=t.ownerDocument.createElement("input");return r.name=t.name,r.value=t.value,e.id&&r.setAttribute("form",e.id),t.parentNode.insertBefore(r,t),e=new FormData(e),r.parentNode.removeChild(r),e}function Jj(e,t,r,s,c){if(t==="submit"&&r&&r.stateNode===c){var f=qg((c[Ot]||null).action),y=s.submitter;y&&(t=(t=y[Ot]||null)?qg(t.formAction):y.getAttribute("formAction"),t!==null&&(f=t,y=null));var j=new Di("action","action",null,s,c);e.push({event:j,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(dr!==0){var k=y?Jg(c,y):new FormData(c);zu(r,{pending:!0,data:k,method:c.method,action:f},null,k)}}else typeof f=="function"&&(j.preventDefault(),k=y?Jg(c,y):new FormData(c),zu(r,{pending:!0,data:k,method:c.method,action:f},f,k))},currentTarget:c}]})}}for(var vd=0;vd<tu.length;vd++){var bd=tu[vd],Fj=bd.toLowerCase(),Vj=bd[0].toUpperCase()+bd.slice(1);bn(Fj,"on"+Vj)}bn(Np,"onAnimationEnd"),bn(Ep,"onAnimationIteration"),bn(Cp,"onAnimationStart"),bn("dblclick","onDoubleClick"),bn("focusin","onFocus"),bn("focusout","onBlur"),bn(uj,"onTransitionRun"),bn(dj,"onTransitionStart"),bn(fj,"onTransitionCancel"),bn(Ap,"onTransitionEnd"),Dr("onMouseEnter",["mouseout","mouseover"]),Dr("onMouseLeave",["mouseout","mouseover"]),Dr("onPointerEnter",["pointerout","pointerover"]),Dr("onPointerLeave",["pointerout","pointerover"]),Xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yj=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ds));function Fg(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var s=e[r],c=s.event;s=s.listeners;e:{var f=void 0;if(t)for(var y=s.length-1;0<=y;y--){var j=s[y],k=j.instance,H=j.currentTarget;if(j=j.listener,k!==f&&c.isPropagationStopped())break e;f=j,c.currentTarget=H;try{f(c)}catch(X){rl(X)}c.currentTarget=null,f=k}else for(y=0;y<s.length;y++){if(j=s[y],k=j.instance,H=j.currentTarget,j=j.listener,k!==f&&c.isPropagationStopped())break e;f=j,c.currentTarget=H;try{f(c)}catch(X){rl(X)}c.currentTarget=null,f=k}}}}function Ce(e,t){var r=t[Rc];r===void 0&&(r=t[Rc]=new Set);var s=e+"__bubble";r.has(s)||(Vg(t,e,2,!1),r.add(s))}function yd(e,t,r){var s=0;t&&(s|=4),Vg(r,e,s,t)}var bl="_reactListening"+Math.random().toString(36).slice(2);function xd(e){if(!e[bl]){e[bl]=!0,Pm.forEach(function(r){r!=="selectionchange"&&(Yj.has(r)||yd(r,!1,e),yd(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bl]||(t[bl]=!0,yd("selectionchange",!1,t))}}function Vg(e,t,r,s){switch(vv(t)){case 2:var c=wS;break;case 8:c=jS;break;default:c=Md}r=c.bind(null,t,r,e),c=void 0,!Hc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(t,r,{capture:!0,passive:c}):e.addEventListener(t,r,!0):c!==void 0?e.addEventListener(t,r,{passive:c}):e.addEventListener(t,r,!1)}function wd(e,t,r,s,c){var f=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var j=s.stateNode.containerInfo;if(j===c)break;if(y===4)for(y=s.return;y!==null;){var k=y.tag;if((k===3||k===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;j!==null;){if(y=kr(j),y===null)return;if(k=y.tag,k===5||k===6||k===26||k===27){s=f=y;continue e}j=j.parentNode}}s=s.return}ep(function(){var H=f,X=Pc(r),Q=[];e:{var G=Op.get(e);if(G!==void 0){var q=Di,be=e;switch(e){case"keypress":if(Ti(r)===0)break e;case"keydown":case"keyup":q=H0;break;case"focusin":be="focus",q=Fc;break;case"focusout":be="blur",q=Fc;break;case"beforeblur":case"afterblur":q=Fc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=T0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=J0;break;case Np:case Ep:case Cp:q=L0;break;case Ap:q=V0;break;case"scroll":case"scrollend":q=O0;break;case"wheel":q=X0;break;case"copy":case"cut":case"paste":q=B0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=op;break;case"toggle":case"beforetoggle":q=Z0}var ge=(t&4)!==0,Ie=!ge&&(e==="scroll"||e==="scrollend"),U=ge?G!==null?G+"Capture":null:G;ge=[];for(var B=H,P;B!==null;){var Z=B;if(P=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||P===null||U===null||(Z=Zo(B,U),Z!=null&&ge.push(Ls(B,Z,P))),Ie)break;B=B.return}0<ge.length&&(G=new q(G,be,null,r,X),Q.push({event:G,listeners:ge}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",G&&r!==Ic&&(be=r.relatedTarget||r.fromElement)&&(kr(be)||be[Or]))break e;if((q||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,q?(be=r.relatedTarget||r.toElement,q=H,be=be?kr(be):null,be!==null&&(Ie=d(be),ge=be.tag,be!==Ie||ge!==5&&ge!==27&&ge!==6)&&(be=null)):(q=null,be=H),q!==be)){if(ge=ap,Z="onMouseLeave",U="onMouseEnter",B="mouse",(e==="pointerout"||e==="pointerover")&&(ge=op,Z="onPointerLeave",U="onPointerEnter",B="pointer"),Ie=q==null?G:Ko(q),P=be==null?G:Ko(be),G=new ge(Z,B+"leave",q,r,X),G.target=Ie,G.relatedTarget=P,Z=null,kr(X)===H&&(ge=new ge(U,B+"enter",be,r,X),ge.target=P,ge.relatedTarget=Ie,Z=ge),Ie=Z,q&&be)t:{for(ge=q,U=be,B=0,P=ge;P;P=co(P))B++;for(P=0,Z=U;Z;Z=co(Z))P++;for(;0<B-P;)ge=co(ge),B--;for(;0<P-B;)U=co(U),P--;for(;B--;){if(ge===U||U!==null&&ge===U.alternate)break t;ge=co(ge),U=co(U)}ge=null}else ge=null;q!==null&&Yg(Q,G,q,ge,!1),be!==null&&Ie!==null&&Yg(Q,Ie,be,ge,!0)}}e:{if(G=H?Ko(H):window,q=G.nodeName&&G.nodeName.toLowerCase(),q==="select"||q==="input"&&G.type==="file")var de=mp;else if(dp(G))if(pp)de=ij;else{de=oj;var Ne=rj}else q=G.nodeName,!q||q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?H&&Uc(H.elementType)&&(de=mp):de=sj;if(de&&(de=de(e,H))){fp(Q,de,r,X);break e}Ne&&Ne(e,G,H),e==="focusout"&&H&&G.type==="number"&&H.memoizedProps.value!=null&&_c(G,"number",G.value)}switch(Ne=H?Ko(H):window,e){case"focusin":(dp(Ne)||Ne.contentEditable==="true")&&(Ir=Ne,Qc=H,os=null);break;case"focusout":os=Qc=Ir=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,jp(Q,r,X);break;case"selectionchange":if(cj)break;case"keydown":case"keyup":jp(Q,r,X)}var pe;if(Yc)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ur?cp(e,r)&&(ve="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ve="onCompositionStart");ve&&(sp&&r.locale!=="ko"&&(Ur||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ur&&(pe=tp()):(va=X,Gc="value"in va?va.value:va.textContent,Ur=!0)),Ne=yl(H,ve),0<Ne.length&&(ve=new rp(ve,e,null,r,X),Q.push({event:ve,listeners:Ne}),pe?ve.data=pe:(pe=up(r),pe!==null&&(ve.data=pe)))),(pe=W0?ej(e,r):tj(e,r))&&(ve=yl(H,"onBeforeInput"),0<ve.length&&(Ne=new rp("onBeforeInput","beforeinput",null,r,X),Q.push({event:Ne,listeners:ve}),Ne.data=pe)),Jj(Q,e,H,r,X)}Fg(Q,t)})}function Ls(e,t,r){return{instance:e,listener:t,currentTarget:r}}function yl(e,t){for(var r=t+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Zo(e,r),c!=null&&s.unshift(Ls(e,c,f)),c=Zo(e,t),c!=null&&s.push(Ls(e,c,f))),e.tag===3)return s;e=e.return}return[]}function co(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yg(e,t,r,s,c){for(var f=t._reactName,y=[];r!==null&&r!==s;){var j=r,k=j.alternate,H=j.stateNode;if(j=j.tag,k!==null&&k===s)break;j!==5&&j!==26&&j!==27||H===null||(k=H,c?(H=Zo(r,f),H!=null&&y.unshift(Ls(r,H,k))):c||(H=Zo(r,f),H!=null&&y.push(Ls(r,H,k)))),r=r.return}y.length!==0&&e.push({event:t,listeners:y})}var Xj=/\r\n?/g,Kj=/\u0000|\uFFFD/g;function Xg(e){return(typeof e=="string"?e:""+e).replace(Xj,`
`).replace(Kj,"")}function Kg(e,t){return t=Xg(t),Xg(e)===t}function xl(){}function Ue(e,t,r,s,c,f){switch(r){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||Br(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&Br(e,""+s);break;case"className":Ei(e,"class",s);break;case"tabIndex":Ei(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ei(e,r,s);break;case"style":Qm(e,s,f);break;case"data":if(t!=="object"){Ei(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||r!=="href")){e.removeAttribute(r);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=Oi(""+s),e.setAttribute(r,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(t!=="input"&&Ue(e,t,"name",c.name,c,null),Ue(e,t,"formEncType",c.formEncType,c,null),Ue(e,t,"formMethod",c.formMethod,c,null),Ue(e,t,"formTarget",c.formTarget,c,null)):(Ue(e,t,"encType",c.encType,c,null),Ue(e,t,"method",c.method,c,null),Ue(e,t,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(r);break}s=Oi(""+s),e.setAttribute(r,s);break;case"onClick":s!=null&&(e.onclick=xl);break;case"onScroll":s!=null&&Ce("scroll",e);break;case"onScrollEnd":s!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(r=s.__html,r!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}r=Oi(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""+s):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":s===!0?e.setAttribute(r,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(r,s):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(r,s):e.removeAttribute(r);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(r):e.setAttribute(r,s);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Ni(e,"popover",s);break;case"xlinkActuate":Un(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Un(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Un(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Un(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Un(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Un(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Un(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Un(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Un(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ni(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=C0.get(r)||r,Ni(e,r,s))}}function jd(e,t,r,s,c,f){switch(r){case"style":Qm(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(r=s.__html,r!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=r}}break;case"children":typeof s=="string"?Br(e,s):(typeof s=="number"||typeof s=="bigint")&&Br(e,""+s);break;case"onScroll":s!=null&&Ce("scroll",e);break;case"onScrollEnd":s!=null&&Ce("scrollend",e);break;case"onClick":s!=null&&(e.onclick=xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$m.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),t=r.slice(2,c?r.length-7:void 0),f=e[Ot]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(t,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(t,s,c);break e}r in e?e[r]=s:s===!0?e.setAttribute(r,""):Ni(e,r,s)}}}function gt(e,t,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var s=!1,c=!1,f;for(f in r)if(r.hasOwnProperty(f)){var y=r[f];if(y!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ue(e,t,f,y,r,null)}}c&&Ue(e,t,"srcSet",r.srcSet,r,null),s&&Ue(e,t,"src",r.src,r,null);return;case"input":Ce("invalid",e);var j=f=y=c=null,k=null,H=null;for(s in r)if(r.hasOwnProperty(s)){var X=r[s];if(X!=null)switch(s){case"name":c=X;break;case"type":y=X;break;case"checked":k=X;break;case"defaultChecked":H=X;break;case"value":f=X;break;case"defaultValue":j=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(l(137,t));break;default:Ue(e,t,s,X,r,null)}}Ym(e,f,j,k,H,y,c,!1),Ci(e);return;case"select":Ce("invalid",e),s=y=f=null;for(c in r)if(r.hasOwnProperty(c)&&(j=r[c],j!=null))switch(c){case"value":f=j;break;case"defaultValue":y=j;break;case"multiple":s=j;default:Ue(e,t,c,j,r,null)}t=f,r=y,e.multiple=!!s,t!=null?Mr(e,!!s,t,!1):r!=null&&Mr(e,!!s,r,!0);return;case"textarea":Ce("invalid",e),f=c=s=null;for(y in r)if(r.hasOwnProperty(y)&&(j=r[y],j!=null))switch(y){case"value":s=j;break;case"defaultValue":c=j;break;case"children":f=j;break;case"dangerouslySetInnerHTML":if(j!=null)throw Error(l(91));break;default:Ue(e,t,y,j,r,null)}Km(e,s,c,f),Ci(e);return;case"option":for(k in r)if(r.hasOwnProperty(k)&&(s=r[k],s!=null))switch(k){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ue(e,t,k,s,r,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(s=0;s<Ds.length;s++)Ce(Ds[s],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in r)if(r.hasOwnProperty(H)&&(s=r[H],s!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ue(e,t,H,s,r,null)}return;default:if(Uc(t)){for(X in r)r.hasOwnProperty(X)&&(s=r[X],s!==void 0&&jd(e,t,X,s,r,void 0));return}}for(j in r)r.hasOwnProperty(j)&&(s=r[j],s!=null&&Ue(e,t,j,s,r,null))}function Zj(e,t,r,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,j=null,k=null,H=null,X=null;for(q in r){var Q=r[q];if(r.hasOwnProperty(q)&&Q!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":k=Q;default:s.hasOwnProperty(q)||Ue(e,t,q,null,s,Q)}}for(var G in s){var q=s[G];if(Q=r[G],s.hasOwnProperty(G)&&(q!=null||Q!=null))switch(G){case"type":f=q;break;case"name":c=q;break;case"checked":H=q;break;case"defaultChecked":X=q;break;case"value":y=q;break;case"defaultValue":j=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(l(137,t));break;default:q!==Q&&Ue(e,t,G,q,s,Q)}}zc(e,y,j,k,H,X,f,c);return;case"select":q=y=j=G=null;for(f in r)if(k=r[f],r.hasOwnProperty(f)&&k!=null)switch(f){case"value":break;case"multiple":q=k;default:s.hasOwnProperty(f)||Ue(e,t,f,null,s,k)}for(c in s)if(f=s[c],k=r[c],s.hasOwnProperty(c)&&(f!=null||k!=null))switch(c){case"value":G=f;break;case"defaultValue":j=f;break;case"multiple":y=f;default:f!==k&&Ue(e,t,c,f,s,k)}t=j,r=y,s=q,G!=null?Mr(e,!!r,G,!1):!!s!=!!r&&(t!=null?Mr(e,!!r,t,!0):Mr(e,!!r,r?[]:"",!1));return;case"textarea":q=G=null;for(j in r)if(c=r[j],r.hasOwnProperty(j)&&c!=null&&!s.hasOwnProperty(j))switch(j){case"value":break;case"children":break;default:Ue(e,t,j,null,s,c)}for(y in s)if(c=s[y],f=r[y],s.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":G=c;break;case"defaultValue":q=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==f&&Ue(e,t,y,c,s,f)}Xm(e,G,q);return;case"option":for(var be in r)if(G=r[be],r.hasOwnProperty(be)&&G!=null&&!s.hasOwnProperty(be))switch(be){case"selected":e.selected=!1;break;default:Ue(e,t,be,null,s,G)}for(k in s)if(G=s[k],q=r[k],s.hasOwnProperty(k)&&G!==q&&(G!=null||q!=null))switch(k){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Ue(e,t,k,G,s,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in r)G=r[ge],r.hasOwnProperty(ge)&&G!=null&&!s.hasOwnProperty(ge)&&Ue(e,t,ge,null,s,G);for(H in s)if(G=s[H],q=r[H],s.hasOwnProperty(H)&&G!==q&&(G!=null||q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(l(137,t));break;default:Ue(e,t,H,G,s,q)}return;default:if(Uc(t)){for(var Ie in r)G=r[Ie],r.hasOwnProperty(Ie)&&G!==void 0&&!s.hasOwnProperty(Ie)&&jd(e,t,Ie,void 0,s,G);for(X in s)G=s[X],q=r[X],!s.hasOwnProperty(X)||G===q||G===void 0&&q===void 0||jd(e,t,X,G,s,q);return}}for(var U in r)G=r[U],r.hasOwnProperty(U)&&G!=null&&!s.hasOwnProperty(U)&&Ue(e,t,U,null,s,G);for(Q in s)G=s[Q],q=r[Q],!s.hasOwnProperty(Q)||G===q||G==null&&q==null||Ue(e,t,Q,G,s,q)}var Sd=null,Nd=null;function wl(e){return e.nodeType===9?e:e.ownerDocument}function Zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ed(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cd=null;function Qj(){var e=window.event;return e&&e.type==="popstate"?e===Cd?!1:(Cd=e,!0):(Cd=null,!1)}var Wg=typeof setTimeout=="function"?setTimeout:void 0,Wj=typeof clearTimeout=="function"?clearTimeout:void 0,ev=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof ev<"u"?function(e){return ev.resolve(null).then(e).catch(tS)}:Wg;function tS(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function tv(e,t){var r=t,s=0,c=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<s&&8>s){r=s;var y=e.ownerDocument;if(r&1&&Ms(y.documentElement),r&2&&Ms(y.body),r&4)for(r=y.head,Ms(r),y=r.firstChild;y;){var j=y.nextSibling,k=y.nodeName;y[Xo]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&y.rel.toLowerCase()==="stylesheet"||r.removeChild(y),y=j}}if(c===0){e.removeChild(f),Hs(t);return}c--}else r==="$"||r==="$?"||r==="$!"?c++:s=r.charCodeAt(0)-48;else s=0;r=f}while(r);Hs(t)}function Ad(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var r=t;switch(t=t.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Ad(r),Dc(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function nS(e,t,r,s){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Xo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=xn(e.nextSibling),e===null)break}return null}function aS(e,t,r){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=xn(e.nextSibling),e===null))return null;return e}function Od(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function rS(e,t){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")t();else{var s=function(){t(),r.removeEventListener("DOMContentLoaded",s)};r.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var kd=null;function nv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}function av(e,t,r){switch(t=wl(r),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Ms(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Dc(e)}var cn=new Map,rv=new Set;function jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qn=ee.d;ee.d={f:oS,r:sS,D:iS,C:lS,L:cS,m:uS,X:fS,S:dS,M:mS};function oS(){var e=Qn.f(),t=ml();return e||t}function sS(e){var t=Tr(e);t!==null&&t.tag===5&&t.type==="form"?Nh(t):Qn.r(e)}var uo=typeof document>"u"?null:document;function ov(e,t,r){var s=uo;if(s&&typeof t=="string"&&t){var c=tn(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),rv.has(c)||(rv.add(c),e={rel:e,crossOrigin:r,href:t},s.querySelector(c)===null&&(t=s.createElement("link"),gt(t,"link",e),ct(t),s.head.appendChild(t)))}}function iS(e){Qn.D(e),ov("dns-prefetch",e,null)}function lS(e,t){Qn.C(e,t),ov("preconnect",e,t)}function cS(e,t,r){Qn.L(e,t,r);var s=uo;if(s&&e&&t){var c='link[rel="preload"][as="'+tn(t)+'"]';t==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+tn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+tn(r.imageSizes)+'"]')):c+='[href="'+tn(e)+'"]';var f=c;switch(t){case"style":f=fo(e);break;case"script":f=mo(e)}cn.has(f)||(e=b({rel:"preload",href:t==="image"&&r&&r.imageSrcSet?void 0:e,as:t},r),cn.set(f,e),s.querySelector(c)!==null||t==="style"&&s.querySelector(Bs(f))||t==="script"&&s.querySelector(zs(f))||(t=s.createElement("link"),gt(t,"link",e),ct(t),s.head.appendChild(t)))}}function uS(e,t){Qn.m(e,t);var r=uo;if(r&&e){var s=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+tn(s)+'"][href="'+tn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mo(e)}if(!cn.has(f)&&(e=b({rel:"modulepreload",href:e},t),cn.set(f,e),r.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(zs(f)))return}s=r.createElement("link"),gt(s,"link",e),ct(s),r.head.appendChild(s)}}}function dS(e,t,r){Qn.S(e,t,r);var s=uo;if(s&&e){var c=Rr(s).hoistableStyles,f=fo(e);t=t||"default";var y=c.get(f);if(!y){var j={loading:0,preload:null};if(y=s.querySelector(Bs(f)))j.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},r),(r=cn.get(f))&&Td(e,r);var k=y=s.createElement("link");ct(k),gt(k,"link",e),k._p=new Promise(function(H,X){k.onload=H,k.onerror=X}),k.addEventListener("load",function(){j.loading|=1}),k.addEventListener("error",function(){j.loading|=2}),j.loading|=4,Sl(y,t,s)}y={type:"stylesheet",instance:y,count:1,state:j},c.set(f,y)}}}function fS(e,t){Qn.X(e,t);var r=uo;if(r&&e){var s=Rr(r).hoistableScripts,c=mo(e),f=s.get(c);f||(f=r.querySelector(zs(c)),f||(e=b({src:e,async:!0},t),(t=cn.get(c))&&Rd(e,t),f=r.createElement("script"),ct(f),gt(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function mS(e,t){Qn.M(e,t);var r=uo;if(r&&e){var s=Rr(r).hoistableScripts,c=mo(e),f=s.get(c);f||(f=r.querySelector(zs(c)),f||(e=b({src:e,async:!0,type:"module"},t),(t=cn.get(c))&&Rd(e,t),f=r.createElement("script"),ct(f),gt(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function sv(e,t,r,s){var c=(c=me.current)?jl(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(t=fo(r.href),r=Rr(c).hoistableStyles,s=r.get(t),s||(s={type:"style",instance:null,count:0,state:null},r.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=fo(r.href);var f=Rr(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(Bs(e)))&&!f._p&&(y.instance=f,y.state.loading=5),cn.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},cn.set(e,r),f||pS(c,e,r,y.state))),t&&s===null)throw Error(l(528,""));return y}if(t&&s!==null)throw Error(l(529,""));return null;case"script":return t=r.async,r=r.src,typeof r=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=mo(r),r=Rr(c).hoistableScripts,s=r.get(t),s||(s={type:"script",instance:null,count:0,state:null},r.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function fo(e){return'href="'+tn(e)+'"'}function Bs(e){return'link[rel="stylesheet"]['+e+"]"}function iv(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function pS(e,t,r,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),gt(t,"link",r),ct(t),e.head.appendChild(t))}function mo(e){return'[src="'+tn(e)+'"]'}function zs(e){return"script[async]"+e}function lv(e,t,r){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+tn(r.href)+'"]');if(s)return t.instance=s,ct(s),s;var c=b({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),ct(s),gt(s,"style",c),Sl(s,r.precedence,e),t.instance=s;case"stylesheet":c=fo(r.href);var f=e.querySelector(Bs(c));if(f)return t.state.loading|=4,t.instance=f,ct(f),f;s=iv(r),(c=cn.get(c))&&Td(s,c),f=(e.ownerDocument||e).createElement("link"),ct(f);var y=f;return y._p=new Promise(function(j,k){y.onload=j,y.onerror=k}),gt(f,"link",s),t.state.loading|=4,Sl(f,r.precedence,e),t.instance=f;case"script":return f=mo(r.src),(c=e.querySelector(zs(f)))?(t.instance=c,ct(c),c):(s=r,(c=cn.get(f))&&(s=b({},r),Rd(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),ct(c),gt(c,"link",s),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Sl(s,r.precedence,e));return t.instance}function Sl(e,t,r){for(var s=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,y=0;y<s.length;y++){var j=s[y];if(j.dataset.precedence===t)f=j;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=r.nodeType===9?r.head:r,t.insertBefore(e,t.firstChild))}function Td(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Rd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Nl=null;function cv(e,t,r){if(Nl===null){var s=new Map,c=Nl=new Map;c.set(r,s)}else c=Nl,s=c.get(r),s||(s=new Map,c.set(r,s));if(s.has(e))return s;for(s.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var f=r[c];if(!(f[Xo]||f[bt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(t)||"";y=e+y;var j=s.get(y);j?j.push(f):s.set(y,[f])}}return s}function uv(e,t,r){e=e.ownerDocument||e,e.head.insertBefore(r,t==="title"?e.querySelector("head > title"):null)}function hS(e,t,r){if(r===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function dv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var _s=null;function gS(){}function vS(e,t,r){if(_s===null)throw Error(l(475));var s=_s;if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var c=fo(r.href),f=e.querySelector(Bs(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=El.bind(s),e.then(s,s)),t.state.loading|=4,t.instance=f,ct(f);return}f=e.ownerDocument||e,r=iv(r),(c=cn.get(c))&&Td(r,c),f=f.createElement("link"),ct(f);var y=f;y._p=new Promise(function(j,k){y.onload=j,y.onerror=k}),gt(f,"link",r),t.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(s.count++,t=El.bind(s),e.addEventListener("load",t),e.addEventListener("error",t))}}function bS(){if(_s===null)throw Error(l(475));var e=_s;return e.stylesheets&&e.count===0&&Dd(e,e.stylesheets),0<e.count?function(t){var r=setTimeout(function(){if(e.stylesheets&&Dd(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r)}}:null}function El(){if(this.count--,this.count===0){if(this.stylesheets)Dd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cl=null;function Dd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cl=new Map,t.forEach(yS,e),Cl=null,El.call(e))}function yS(e,t){if(!(t.state.loading&4)){var r=Cl.get(e);if(r)var s=r.get(null);else{r=new Map,Cl.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),s=y)}s&&r.set(null,s)}c=t.instance,y=c.getAttribute("data-precedence"),f=r.get(y)||s,f===s&&r.set(null,c),r.set(y,c),this.count++,s=El.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Us={$$typeof:T,Provider:null,Consumer:null,_currentValue:D,_currentValue2:D,_threadCount:0};function xS(e,t,r,s,c,f,y,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.hiddenUpdates=Oc(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function fv(e,t,r,s,c,f,y,j,k,H,X,Q){return e=new xS(e,t,r,y,j,k,H,Q),t=1,f===!0&&(t|=24),f=Ut(3,null,null,t),e.current=f,f.stateNode=e,t=mu(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:s,isDehydrated:r,cache:t},vu(f),e}function mv(e){return e?(e=Gr,e):Gr}function pv(e,t,r,s,c,f){c=mv(c),s.context===null?s.context=c:s.pendingContext=c,s=xa(t),s.payload={element:r},f=f===void 0?null:f,f!==null&&(s.callback=f),r=wa(e,s,t),r!==null&&(Gt(r,e,t),ps(r,e,t))}function hv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ld(e,t){hv(e,t),(e=e.alternate)&&hv(e,t)}function gv(e){if(e.tag===13){var t=Hr(e,67108864);t!==null&&Gt(t,e,67108864),Ld(e,67108864)}}var Al=!0;function wS(e,t,r,s){var c=$.T;$.T=null;var f=ee.p;try{ee.p=2,Md(e,t,r,s)}finally{ee.p=f,$.T=c}}function jS(e,t,r,s){var c=$.T;$.T=null;var f=ee.p;try{ee.p=8,Md(e,t,r,s)}finally{ee.p=f,$.T=c}}function Md(e,t,r,s){if(Al){var c=Bd(s);if(c===null)wd(e,t,s,Ol,r),bv(e,s);else if(NS(c,e,t,r,s))s.stopPropagation();else if(bv(e,s),t&4&&-1<SS.indexOf(e)){for(;c!==null;){var f=Tr(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ya(f.pendingLanes);if(y!==0){var j=f;for(j.pendingLanes|=2,j.entangledLanes|=2;y;){var k=1<<31-zt(y);j.entanglements[1]|=k,y&=~k}kn(f),(Le&6)===0&&(dl=st()+500,Rs(0))}}break;case 13:j=Hr(f,2),j!==null&&Gt(j,f,2),ml(),Ld(f,2)}if(f=Bd(s),f===null&&wd(e,t,s,Ol,r),f===c)break;c=f}c!==null&&s.stopPropagation()}else wd(e,t,s,null,r)}}function Bd(e){return e=Pc(e),zd(e)}var Ol=null;function zd(e){if(Ol=null,e=kr(e),e!==null){var t=d(e);if(t===null)e=null;else{var r=t.tag;if(r===13){if(e=p(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ol=e,null}function vv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fo()){case Er:return 2;case Wt:return 8;case vn:case Cr:return 32;case Va:return 268435456;default:return 32}default:return 32}}var _d=!1,Ma=null,Ba=null,za=null,Is=new Map,Ps=new Map,_a=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bv(e,t){switch(e){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Is.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ps.delete(t.pointerId)}}function $s(e,t,r,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:r,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},t!==null&&(t=Tr(t),t!==null&&gv(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function NS(e,t,r,s,c){switch(t){case"focusin":return Ma=$s(Ma,e,t,r,s,c),!0;case"dragenter":return Ba=$s(Ba,e,t,r,s,c),!0;case"mouseover":return za=$s(za,e,t,r,s,c),!0;case"pointerover":var f=c.pointerId;return Is.set(f,$s(Is.get(f)||null,e,t,r,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ps.set(f,$s(Ps.get(f)||null,e,t,r,s,c)),!0}return!1}function yv(e){var t=kr(e.target);if(t!==null){var r=d(t);if(r!==null){if(t=r.tag,t===13){if(t=p(r),t!==null){e.blockedOn=t,v0(e.priority,function(){if(r.tag===13){var s=Ht();s=kc(s);var c=Hr(r,s);c!==null&&Gt(c,r,s),Ld(r,s)}});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Bd(e.nativeEvent);if(r===null){r=e.nativeEvent;var s=new r.constructor(r.type,r);Ic=s,r.target.dispatchEvent(s),Ic=null}else return t=Tr(r),t!==null&&gv(t),e.blockedOn=r,!1;t.shift()}return!0}function xv(e,t,r){kl(e)&&r.delete(t)}function ES(){_d=!1,Ma!==null&&kl(Ma)&&(Ma=null),Ba!==null&&kl(Ba)&&(Ba=null),za!==null&&kl(za)&&(za=null),Is.forEach(xv),Ps.forEach(xv)}function Tl(e,t){e.blockedOn===t&&(e.blockedOn=null,_d||(_d=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,ES)))}var Rl=null;function wv(e){Rl!==e&&(Rl=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Rl===e&&(Rl=null);for(var t=0;t<e.length;t+=3){var r=e[t],s=e[t+1],c=e[t+2];if(typeof s!="function"){if(zd(s||r)===null)continue;break}var f=Tr(r);f!==null&&(e.splice(t,3),t-=3,zu(f,{pending:!0,data:c,method:r.method,action:s},s,c))}}))}function Hs(e){function t(k){return Tl(k,e)}Ma!==null&&Tl(Ma,e),Ba!==null&&Tl(Ba,e),za!==null&&Tl(za,e),Is.forEach(t),Ps.forEach(t);for(var r=0;r<_a.length;r++){var s=_a[r];s.blockedOn===e&&(s.blockedOn=null)}for(;0<_a.length&&(r=_a[0],r.blockedOn===null);)yv(r),r.blockedOn===null&&_a.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(s=0;s<r.length;s+=3){var c=r[s],f=r[s+1],y=c[Ot]||null;if(typeof f=="function")y||wv(r);else if(y){var j=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[Ot]||null)j=y.formAction;else if(zd(c)!==null)continue}else j=y.action;typeof j=="function"?r[s+1]=j:(r.splice(s,3),s-=3),wv(r)}}}function Ud(e){this._internalRoot=e}Dl.prototype.render=Ud.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var r=t.current,s=Ht();pv(r,s,e,t,null,null)},Dl.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pv(e.current,2,null,e,null,null),ml(),t[Or]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Um();e={blockedOn:null,target:e,priority:t};for(var r=0;r<_a.length&&t!==0&&t<_a[r].priority;r++);_a.splice(r,0,e),r===0&&yv(e)}};var jv=a.version;if(jv!=="19.1.1")throw Error(l(527,jv,"19.1.1"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=h(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var CS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{je=Ll.inject(CS),Fe=Ll}catch{}}return qs.createRoot=function(e,t){if(!u(e))throw Error(l(299));var r=!1,s="",c=Uh,f=Ih,y=Ph,j=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(j=t.unstable_transitionCallbacks)),t=fv(e,1,!1,null,null,r,s,c,f,y,j,null),e[Or]=t.current,xd(e),new Ud(t)},qs.hydrateRoot=function(e,t,r){if(!u(e))throw Error(l(299));var s=!1,c="",f=Uh,y=Ih,j=Ph,k=null,H=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(j=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(k=r.unstable_transitionCallbacks),r.formState!==void 0&&(H=r.formState)),t=fv(e,1,!0,t,r??null,s,c,f,y,j,k,H),t.context=mv(null),r=t.current,s=Ht(),s=kc(s),c=xa(s),c.callback=null,wa(r,c,s),r=s,t.current.lanes=r,Yo(t,r),kn(t),e[Or]=t.current,xd(e),new Dl(t)},qs.version="19.1.1",qs}var Dv;function BS(){if(Dv)return $d.exports;Dv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),$d.exports=MS(),$d.exports}var zS=BS();const _S=To(zS);/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lv="popstate";function US(n={}){function a(u,d){let{pathname:p="/",search:g="",hash:h=""}=xr(u.location.hash.substring(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),uf("",{pathname:p,search:g,hash:h},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function o(u,d){let p=u.document.querySelector("base"),g="";if(p&&p.getAttribute("href")){let h=u.location.href,v=h.indexOf("#");g=v===-1?h:h.slice(0,v)}return g+"#"+(typeof d=="string"?d:Ws(d))}function l(u,d){Nn(u.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return PS(a,o,l,n)}function Ye(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function Nn(n,a){if(!n){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function IS(){return Math.random().toString(36).substring(2,10)}function Mv(n,a){return{usr:n.state,key:n.key,idx:a}}function uf(n,a,o=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof a=="string"?xr(a):a,state:o,key:a&&a.key||l||IS()}}function Ws({pathname:n="/",search:a="",hash:o=""}){return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function xr(n){let a={};if(n){let o=n.indexOf("#");o>=0&&(a.hash=n.substring(o),n=n.substring(0,o));let l=n.indexOf("?");l>=0&&(a.search=n.substring(l),n=n.substring(0,l)),n&&(a.pathname=n)}return a}function PS(n,a,o,l={}){let{window:u=document.defaultView,v5Compat:d=!1}=l,p=u.history,g="POP",h=null,v=b();v==null&&(v=0,p.replaceState({...p.state,idx:v},""));function b(){return(p.state||{idx:null}).idx}function x(){g="POP";let E=b(),O=E==null?null:E-v;v=E,h&&h({action:g,location:R.location,delta:O})}function w(E,O){g="PUSH";let C=uf(R.location,E,O);o&&o(C,E),v=b()+1;let T=Mv(C,v),_=R.createHref(C);try{p.pushState(T,"",_)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;u.location.assign(_)}d&&h&&h({action:g,location:R.location,delta:1})}function S(E,O){g="REPLACE";let C=uf(R.location,E,O);o&&o(C,E),v=b();let T=Mv(C,v),_=R.createHref(C);p.replaceState(T,"",_),d&&h&&h({action:g,location:R.location,delta:0})}function N(E){return $S(E)}let R={get action(){return g},get location(){return n(u,p)},listen(E){if(h)throw new Error("A history only accepts one active listener");return u.addEventListener(Lv,x),h=E,()=>{u.removeEventListener(Lv,x),h=null}},createHref(E){return a(u,E)},createURL:N,encodeLocation(E){let O=N(E);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:w,replace:S,go(E){return p.go(E)}};return R}function $S(n,a=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(o,"No window.location.(origin|href) available to create URL");let l=typeof n=="string"?n:Ws(n);return l=l.replace(/ $/,"%20"),!a&&l.startsWith("//")&&(l=o+l),new URL(l,o)}function Ub(n,a,o="/"){return HS(n,a,o,!1)}function HS(n,a,o,l){let u=typeof a=="string"?xr(a):a,d=oa(u.pathname||"/",o);if(d==null)return null;let p=Ib(n);GS(p);let g=null;for(let h=0;g==null&&h<p.length;++h){let v=eN(d);g=QS(p[h],v,l)}return g}function Ib(n,a=[],o=[],l="",u=!1){let d=(p,g,h=u,v)=>{let b={relativePath:v===void 0?p.path||"":v,caseSensitive:p.caseSensitive===!0,childrenIndex:g,route:p};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(l)&&h)return;Ye(b.relativePath.startsWith(l),`Absolute route path "${b.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(l.length)}let x=na([l,b.relativePath]),w=o.concat(b);p.children&&p.children.length>0&&(Ye(p.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Ib(p.children,a,w,x,h)),!(p.path==null&&!p.index)&&a.push({path:x,score:KS(x,p.index),routesMeta:w})};return n.forEach((p,g)=>{if(p.path===""||!p.path?.includes("?"))d(p,g);else for(let h of Pb(p.path))d(p,g,!0,h)}),a}function Pb(n){let a=n.split("/");if(a.length===0)return[];let[o,...l]=a,u=o.endsWith("?"),d=o.replace(/\?$/,"");if(l.length===0)return u?[d,""]:[d];let p=Pb(l.join("/")),g=[];return g.push(...p.map(h=>h===""?d:[d,h].join("/"))),u&&g.push(...p),g.map(h=>n.startsWith("/")&&h===""?"/":h)}function GS(n){n.sort((a,o)=>a.score!==o.score?o.score-a.score:ZS(a.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var qS=/^:[\w-]+$/,JS=3,FS=2,VS=1,YS=10,XS=-2,Bv=n=>n==="*";function KS(n,a){let o=n.split("/"),l=o.length;return o.some(Bv)&&(l+=XS),a&&(l+=FS),o.filter(u=>!Bv(u)).reduce((u,d)=>u+(qS.test(d)?JS:d===""?VS:YS),l)}function ZS(n,a){return n.length===a.length&&n.slice(0,-1).every((l,u)=>l===a[u])?n[n.length-1]-a[a.length-1]:0}function QS(n,a,o=!1){let{routesMeta:l}=n,u={},d="/",p=[];for(let g=0;g<l.length;++g){let h=l[g],v=g===l.length-1,b=d==="/"?a:a.slice(d.length)||"/",x=Jl({path:h.relativePath,caseSensitive:h.caseSensitive,end:v},b),w=h.route;if(!x&&v&&o&&!l[l.length-1].route.index&&(x=Jl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},b)),!x)return null;Object.assign(u,x.params),p.push({params:u,pathname:na([d,x.pathname]),pathnameBase:rN(na([d,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(d=na([d,x.pathnameBase]))}return p}function Jl(n,a){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[o,l]=WS(n.path,n.caseSensitive,n.end),u=a.match(o);if(!u)return null;let d=u[0],p=d.replace(/(.)\/+$/,"$1"),g=u.slice(1);return{params:l.reduce((v,{paramName:b,isOptional:x},w)=>{if(b==="*"){let N=g[w]||"";p=d.slice(0,d.length-N.length).replace(/(.)\/+$/,"$1")}const S=g[w];return x&&!S?v[b]=void 0:v[b]=(S||"").replace(/%2F/g,"/"),v},{}),pathname:d,pathnameBase:p,pattern:n}}function WS(n,a=!1,o=!0){Nn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,g,h)=>(l.push({paramName:g,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(l.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),l]}function eN(n){try{return n.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Nn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),n}}function oa(n,a){if(a==="/")return n;if(!n.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,l=n.charAt(o);return l&&l!=="/"?null:n.slice(o)||"/"}function tN(n,a="/"){let{pathname:o,search:l="",hash:u=""}=typeof n=="string"?xr(n):n;return{pathname:o?o.startsWith("/")?o:nN(o,a):a,search:oN(l),hash:sN(u)}}function nN(n,a){let o=a.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function Jd(n,a,o,l){return`Cannot include a '${n}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function aN(n){return n.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function $b(n){let a=aN(n);return a.map((o,l)=>l===a.length-1?o.pathname:o.pathnameBase)}function Hb(n,a,o,l=!1){let u;typeof n=="string"?u=xr(n):(u={...n},Ye(!u.pathname||!u.pathname.includes("?"),Jd("?","pathname","search",u)),Ye(!u.pathname||!u.pathname.includes("#"),Jd("#","pathname","hash",u)),Ye(!u.search||!u.search.includes("#"),Jd("#","search","hash",u)));let d=n===""||u.pathname==="",p=d?"/":u.pathname,g;if(p==null)g=o;else{let x=a.length-1;if(!l&&p.startsWith("..")){let w=p.split("/");for(;w[0]==="..";)w.shift(),x-=1;u.pathname=w.join("/")}g=x>=0?a[x]:"/"}let h=tN(u,g),v=p&&p!=="/"&&p.endsWith("/"),b=(d||p===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(v||b)&&(h.pathname+="/"),h}var na=n=>n.join("/").replace(/\/\/+/g,"/"),rN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),oN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,sN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function iN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Gb=["POST","PUT","PATCH","DELETE"];new Set(Gb);var lN=["GET",...Gb];new Set(lN);var Ro=m.createContext(null);Ro.displayName="DataRouter";var sc=m.createContext(null);sc.displayName="DataRouterState";m.createContext(!1);var qb=m.createContext({isTransitioning:!1});qb.displayName="ViewTransition";var cN=m.createContext(new Map);cN.displayName="Fetchers";var uN=m.createContext(null);uN.displayName="Await";var Bn=m.createContext(null);Bn.displayName="Navigation";var ri=m.createContext(null);ri.displayName="Location";var ua=m.createContext({outlet:null,matches:[],isDataRoute:!1});ua.displayName="Route";var Mf=m.createContext(null);Mf.displayName="RouteError";function dN(n,{relative:a}={}){Ye(oi(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=m.useContext(Bn),{hash:u,pathname:d,search:p}=si(n,{relative:a}),g=d;return o!=="/"&&(g=d==="/"?o:na([o,d])),l.createHref({pathname:g,search:p,hash:u})}function oi(){return m.useContext(ri)!=null}function Ja(){return Ye(oi(),"useLocation() may be used only in the context of a <Router> component."),m.useContext(ri).location}var Jb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fb(n){m.useContext(Bn).static||m.useLayoutEffect(n)}function da(){let{isDataRoute:n}=m.useContext(ua);return n?NN():fN()}function fN(){Ye(oi(),"useNavigate() may be used only in the context of a <Router> component.");let n=m.useContext(Ro),{basename:a,navigator:o}=m.useContext(Bn),{matches:l}=m.useContext(ua),{pathname:u}=Ja(),d=JSON.stringify($b(l)),p=m.useRef(!1);return Fb(()=>{p.current=!0}),m.useCallback((h,v={})=>{if(Nn(p.current,Jb),!p.current)return;if(typeof h=="number"){o.go(h);return}let b=Hb(h,JSON.parse(d),u,v.relative==="path");n==null&&a!=="/"&&(b.pathname=b.pathname==="/"?a:na([a,b.pathname])),(v.replace?o.replace:o.push)(b,v.state,v)},[a,o,d,u,n])}m.createContext(null);function si(n,{relative:a}={}){let{matches:o}=m.useContext(ua),{pathname:l}=Ja(),u=JSON.stringify($b(o));return m.useMemo(()=>Hb(n,JSON.parse(u),l,a==="path"),[n,u,l,a])}function mN(n,a){return Vb(n,a)}function Vb(n,a,o,l,u){Ye(oi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=m.useContext(Bn),{matches:p}=m.useContext(ua),g=p[p.length-1],h=g?g.params:{},v=g?g.pathname:"/",b=g?g.pathnameBase:"/",x=g&&g.route;{let C=x&&x.path||"";Yb(v,!x||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let w=Ja(),S;if(a){let C=typeof a=="string"?xr(a):a;Ye(b==="/"||C.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${C.pathname}" was given in the \`location\` prop.`),S=C}else S=w;let N=S.pathname||"/",R=N;if(b!=="/"){let C=b.replace(/^\//,"").split("/");R="/"+N.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=Ub(n,{pathname:R});Nn(x||E!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Nn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=bN(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},h,C.params),pathname:na([b,d.encodeLocation?d.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?b:na([b,d.encodeLocation?d.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),p,o,l,u);return a&&O?m.createElement(ri.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},O):O}function pN(){let n=SN(),a=iN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),o=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:l},d={padding:"2px 4px",backgroundColor:l},p=null;return console.error("Error handled by React Router default ErrorBoundary:",n),p=m.createElement(m.Fragment,null,m.createElement("p",null,"💿 Hey developer 👋"),m.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",m.createElement("code",{style:d},"ErrorBoundary")," or"," ",m.createElement("code",{style:d},"errorElement")," prop on your route.")),m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},a),o?m.createElement("pre",{style:u},o):null,p)}var hN=m.createElement(pN,null),gN=class extends m.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){this.props.unstable_onError?this.props.unstable_onError(n,a):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?m.createElement(ua.Provider,{value:this.props.routeContext},m.createElement(Mf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vN({routeContext:n,match:a,children:o}){let l=m.useContext(Ro);return l&&l.static&&l.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=a.route.id),m.createElement(ua.Provider,{value:n},o)}function bN(n,a=[],o=null,l=null,u=null){if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(a.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let d=n,p=o?.errors;if(p!=null){let v=d.findIndex(b=>b.route.id&&p?.[b.route.id]!==void 0);Ye(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let g=!1,h=-1;if(o)for(let v=0;v<d.length;v++){let b=d[v];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(h=v),b.route.id){let{loaderData:x,errors:w}=o,S=b.route.loader&&!x.hasOwnProperty(b.route.id)&&(!w||w[b.route.id]===void 0);if(b.route.lazy||S){g=!0,h>=0?d=d.slice(0,h+1):d=[d[0]];break}}}return d.reduceRight((v,b,x)=>{let w,S=!1,N=null,R=null;o&&(w=p&&b.route.id?p[b.route.id]:void 0,N=b.route.errorElement||hN,g&&(h<0&&x===0?(Yb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,R=null):h===x&&(S=!0,R=b.route.hydrateFallbackElement||null)));let E=a.concat(d.slice(0,x+1)),O=()=>{let C;return w?C=N:S?C=R:b.route.Component?C=m.createElement(b.route.Component,null):b.route.element?C=b.route.element:C=v,m.createElement(vN,{match:b,routeContext:{outlet:v,matches:E,isDataRoute:o!=null},children:C})};return o&&(b.route.ErrorBoundary||b.route.errorElement||x===0)?m.createElement(gN,{location:o.location,revalidation:o.revalidation,component:N,error:w,children:O(),routeContext:{outlet:null,matches:E,isDataRoute:!0},unstable_onError:l}):O()},null)}function Bf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yN(n){let a=m.useContext(Ro);return Ye(a,Bf(n)),a}function xN(n){let a=m.useContext(sc);return Ye(a,Bf(n)),a}function wN(n){let a=m.useContext(ua);return Ye(a,Bf(n)),a}function zf(n){let a=wN(n),o=a.matches[a.matches.length-1];return Ye(o.route.id,`${n} can only be used on routes that contain a unique "id"`),o.route.id}function jN(){return zf("useRouteId")}function SN(){let n=m.useContext(Mf),a=xN("useRouteError"),o=zf("useRouteError");return n!==void 0?n:a.errors?.[o]}function NN(){let{router:n}=yN("useNavigate"),a=zf("useNavigate"),o=m.useRef(!1);return Fb(()=>{o.current=!0}),m.useCallback(async(u,d={})=>{Nn(o.current,Jb),o.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:a,...d}))},[n,a])}var zv={};function Yb(n,a,o){!a&&!zv[n]&&(zv[n]=!0,Nn(!1,o))}m.memo(EN);function EN({routes:n,future:a,state:o,unstable_onError:l}){return Vb(n,void 0,o,l,a)}function dn(n){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function CN({basename:n="/",children:a=null,location:o,navigationType:l="POP",navigator:u,static:d=!1}){Ye(!oi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=n.replace(/^\/*/,"/"),g=m.useMemo(()=>({basename:p,navigator:u,static:d,future:{}}),[p,u,d]);typeof o=="string"&&(o=xr(o));let{pathname:h="/",search:v="",hash:b="",state:x=null,key:w="default"}=o,S=m.useMemo(()=>{let N=oa(h,p);return N==null?null:{location:{pathname:N,search:v,hash:b,state:x,key:w},navigationType:l}},[p,h,v,b,x,w,l]);return Nn(S!=null,`<Router basename="${p}"> is not able to match the URL "${h}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:m.createElement(Bn.Provider,{value:g},m.createElement(ri.Provider,{children:a,value:S}))}function AN({children:n,location:a}){return mN(df(n),a)}function df(n,a=[]){let o=[];return m.Children.forEach(n,(l,u)=>{if(!m.isValidElement(l))return;let d=[...a,u];if(l.type===m.Fragment){o.push.apply(o,df(l.props.children,d));return}Ye(l.type===dn,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!l.props.index||!l.props.children,"An index route cannot have child routes.");let p={id:l.props.id||d.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(p.children=df(l.props.children,d)),o.push(p)}),o}var $l="get",Hl="application/x-www-form-urlencoded";function ic(n){return n!=null&&typeof n.tagName=="string"}function ON(n){return ic(n)&&n.tagName.toLowerCase()==="button"}function kN(n){return ic(n)&&n.tagName.toLowerCase()==="form"}function TN(n){return ic(n)&&n.tagName.toLowerCase()==="input"}function RN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function DN(n,a){return n.button===0&&(!a||a==="_self")&&!RN(n)}var Ml=null;function LN(){if(Ml===null)try{new FormData(document.createElement("form"),0),Ml=!1}catch{Ml=!0}return Ml}var MN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fd(n){return n!=null&&!MN.has(n)?(Nn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hl}"`),null):n}function BN(n,a){let o,l,u,d,p;if(kN(n)){let g=n.getAttribute("action");l=g?oa(g,a):null,o=n.getAttribute("method")||$l,u=Fd(n.getAttribute("enctype"))||Hl,d=new FormData(n)}else if(ON(n)||TN(n)&&(n.type==="submit"||n.type==="image")){let g=n.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||g.getAttribute("action");if(l=h?oa(h,a):null,o=n.getAttribute("formmethod")||g.getAttribute("method")||$l,u=Fd(n.getAttribute("formenctype"))||Fd(g.getAttribute("enctype"))||Hl,d=new FormData(g,n),!LN()){let{name:v,type:b,value:x}=n;if(b==="image"){let w=v?`${v}.`:"";d.append(`${w}x`,"0"),d.append(`${w}y`,"0")}else v&&d.append(v,x)}}else{if(ic(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=$l,l=null,u=Hl,p=n}return d&&u==="text/plain"&&(p=d,d=void 0),{action:l,method:o.toLowerCase(),encType:u,formData:d,body:p}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _f(n,a){if(n===!1||n===null||typeof n>"u")throw new Error(a)}function zN(n,a,o){let l=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return l.pathname==="/"?l.pathname=`_root.${o}`:a&&oa(l.pathname,a)==="/"?l.pathname=`${a.replace(/\/$/,"")}/_root.${o}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${o}`,l}async function _N(n,a){if(n.id in a)return a[n.id];try{let o=await import(n.module);return a[n.id]=o,o}catch(o){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function UN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function IN(n,a,o){let l=await Promise.all(n.map(async u=>{let d=a.routes[u.route.id];if(d){let p=await _N(d,o);return p.links?p.links():[]}return[]}));return GN(l.flat(1).filter(UN).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function _v(n,a,o,l,u,d){let p=(h,v)=>o[v]?h.route.id!==o[v].route.id:!0,g=(h,v)=>o[v].pathname!==h.pathname||o[v].route.path?.endsWith("*")&&o[v].params["*"]!==h.params["*"];return d==="assets"?a.filter((h,v)=>p(h,v)||g(h,v)):d==="data"?a.filter((h,v)=>{let b=l.routes[h.route.id];if(!b||!b.hasLoader)return!1;if(p(h,v)||g(h,v))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function PN(n,a,{includeHydrateFallback:o}={}){return $N(n.map(l=>{let u=a.routes[l.route.id];if(!u)return[];let d=[u.module];return u.clientActionModule&&(d=d.concat(u.clientActionModule)),u.clientLoaderModule&&(d=d.concat(u.clientLoaderModule)),o&&u.hydrateFallbackModule&&(d=d.concat(u.hydrateFallbackModule)),u.imports&&(d=d.concat(u.imports)),d}).flat(1))}function $N(n){return[...new Set(n)]}function HN(n){let a={},o=Object.keys(n).sort();for(let l of o)a[l]=n[l];return a}function GN(n,a){let o=new Set;return new Set(a),n.reduce((l,u)=>{let d=JSON.stringify(HN(u));return o.has(d)||(o.add(d),l.push({key:d,link:u})),l},[])}function Xb(){let n=m.useContext(Ro);return _f(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function qN(){let n=m.useContext(sc);return _f(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Uf=m.createContext(void 0);Uf.displayName="FrameworkContext";function Kb(){let n=m.useContext(Uf);return _f(n,"You must render this element inside a <HydratedRouter> element"),n}function JN(n,a){let o=m.useContext(Uf),[l,u]=m.useState(!1),[d,p]=m.useState(!1),{onFocus:g,onBlur:h,onMouseEnter:v,onMouseLeave:b,onTouchStart:x}=a,w=m.useRef(null);m.useEffect(()=>{if(n==="render"&&p(!0),n==="viewport"){let R=O=>{O.forEach(C=>{p(C.isIntersecting)})},E=new IntersectionObserver(R,{threshold:.5});return w.current&&E.observe(w.current),()=>{E.disconnect()}}},[n]),m.useEffect(()=>{if(l){let R=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(R)}}},[l]);let S=()=>{u(!0)},N=()=>{u(!1),p(!1)};return o?n!=="intent"?[d,w,{}]:[d,w,{onFocus:Js(g,S),onBlur:Js(h,N),onMouseEnter:Js(v,S),onMouseLeave:Js(b,N),onTouchStart:Js(x,S)}]:[!1,w,{}]}function Js(n,a){return o=>{n&&n(o),o.defaultPrevented||a(o)}}function FN({page:n,...a}){let{router:o}=Xb(),l=m.useMemo(()=>Ub(o.routes,n,o.basename),[o.routes,n,o.basename]);return l?m.createElement(YN,{page:n,matches:l,...a}):null}function VN(n){let{manifest:a,routeModules:o}=Kb(),[l,u]=m.useState([]);return m.useEffect(()=>{let d=!1;return IN(n,a,o).then(p=>{d||u(p)}),()=>{d=!0}},[n,a,o]),l}function YN({page:n,matches:a,...o}){let l=Ja(),{manifest:u,routeModules:d}=Kb(),{basename:p}=Xb(),{loaderData:g,matches:h}=qN(),v=m.useMemo(()=>_v(n,a,h,u,l,"data"),[n,a,h,u,l]),b=m.useMemo(()=>_v(n,a,h,u,l,"assets"),[n,a,h,u,l]),x=m.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let N=new Set,R=!1;if(a.forEach(O=>{let C=u.routes[O.route.id];!C||!C.hasLoader||(!v.some(T=>T.route.id===O.route.id)&&O.route.id in g&&d[O.route.id]?.shouldRevalidate||C.hasClientLoader?R=!0:N.add(O.route.id))}),N.size===0)return[];let E=zN(n,p,"data");return R&&N.size>0&&E.searchParams.set("_routes",a.filter(O=>N.has(O.route.id)).map(O=>O.route.id).join(",")),[E.pathname+E.search]},[p,g,l,u,v,a,n,d]),w=m.useMemo(()=>PN(b,u),[b,u]),S=VN(b);return m.createElement(m.Fragment,null,x.map(N=>m.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...o})),w.map(N=>m.createElement("link",{key:N,rel:"modulepreload",href:N,...o})),S.map(({key:N,link:R})=>m.createElement("link",{key:N,nonce:o.nonce,...R})))}function XN(...n){return a=>{n.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var Zb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Zb&&(window.__reactRouterVersion="7.8.2")}catch{}function KN({basename:n,children:a,window:o}){let l=m.useRef();l.current==null&&(l.current=US({window:o,v5Compat:!0}));let u=l.current,[d,p]=m.useState({action:u.action,location:u.location}),g=m.useCallback(h=>{m.startTransition(()=>p(h))},[p]);return m.useLayoutEffect(()=>u.listen(g),[u,g]),m.createElement(CN,{basename:n,children:a,location:d.location,navigationType:d.action,navigator:u})}var Qb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wn=m.forwardRef(function({onClick:a,discover:o="render",prefetch:l="none",relative:u,reloadDocument:d,replace:p,state:g,target:h,to:v,preventScrollReset:b,viewTransition:x,...w},S){let{basename:N}=m.useContext(Bn),R=typeof v=="string"&&Qb.test(v),E,O=!1;if(typeof v=="string"&&R&&(E=v,Zb))try{let Y=new URL(window.location.href),W=v.startsWith("//")?new URL(Y.protocol+v):new URL(v),oe=oa(W.pathname,N);W.origin===Y.origin&&oe!=null?v=oe+W.search+W.hash:O=!0}catch{Nn(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=dN(v,{relative:u}),[T,_,M]=JN(l,w),L=eE(v,{replace:p,state:g,target:h,preventScrollReset:b,relative:u,viewTransition:x});function I(Y){a&&a(Y),Y.defaultPrevented||L(Y)}let z=m.createElement("a",{...w,...M,href:E||C,onClick:O||d?a:I,ref:XN(S,_),target:h,"data-discover":!R&&o==="render"?"true":void 0});return T&&!R?m.createElement(m.Fragment,null,z,m.createElement(FN,{page:C})):z});wn.displayName="Link";var ZN=m.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:l="",end:u=!1,style:d,to:p,viewTransition:g,children:h,...v},b){let x=si(p,{relative:v.relative}),w=Ja(),S=m.useContext(sc),{navigator:N,basename:R}=m.useContext(Bn),E=S!=null&&oE(x)&&g===!0,O=N.encodeLocation?N.encodeLocation(x).pathname:x.pathname,C=w.pathname,T=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(C=C.toLowerCase(),T=T?T.toLowerCase():null,O=O.toLowerCase()),T&&R&&(T=oa(T,R)||T);const _=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let M=C===O||!u&&C.startsWith(O)&&C.charAt(_)==="/",L=T!=null&&(T===O||!u&&T.startsWith(O)&&T.charAt(O.length)==="/"),I={isActive:M,isPending:L,isTransitioning:E},z=M?a:void 0,Y;typeof l=="function"?Y=l(I):Y=[l,M?"active":null,L?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let W=typeof d=="function"?d(I):d;return m.createElement(wn,{...v,"aria-current":z,className:Y,ref:b,style:W,to:p,viewTransition:g},typeof h=="function"?h(I):h)});ZN.displayName="NavLink";var QN=m.forwardRef(({discover:n="render",fetcherKey:a,navigate:o,reloadDocument:l,replace:u,state:d,method:p=$l,action:g,onSubmit:h,relative:v,preventScrollReset:b,viewTransition:x,...w},S)=>{let N=aE(),R=rE(g,{relative:v}),E=p.toLowerCase()==="get"?"get":"post",O=typeof g=="string"&&Qb.test(g),C=T=>{if(h&&h(T),T.defaultPrevented)return;T.preventDefault();let _=T.nativeEvent.submitter,M=_?.getAttribute("formmethod")||p;N(_||T.currentTarget,{fetcherKey:a,method:M,navigate:o,replace:u,state:d,relative:v,preventScrollReset:b,viewTransition:x})};return m.createElement("form",{ref:S,method:E,action:R,onSubmit:l?h:C,...w,"data-discover":!O&&n==="render"?"true":void 0})});QN.displayName="Form";function WN(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wb(n){let a=m.useContext(Ro);return Ye(a,WN(n)),a}function eE(n,{target:a,replace:o,state:l,preventScrollReset:u,relative:d,viewTransition:p}={}){let g=da(),h=Ja(),v=si(n,{relative:d});return m.useCallback(b=>{if(DN(b,a)){b.preventDefault();let x=o!==void 0?o:Ws(h)===Ws(v);g(n,{replace:x,state:l,preventScrollReset:u,relative:d,viewTransition:p})}},[h,g,v,o,l,a,n,u,d,p])}var tE=0,nE=()=>`__${String(++tE)}__`;function aE(){let{router:n}=Wb("useSubmit"),{basename:a}=m.useContext(Bn),o=jN();return m.useCallback(async(l,u={})=>{let{action:d,method:p,encType:g,formData:h,body:v}=BN(l,a);if(u.navigate===!1){let b=u.fetcherKey||nE();await n.fetch(b,o,u.action||d,{preventScrollReset:u.preventScrollReset,formData:h,body:v,formMethod:u.method||p,formEncType:u.encType||g,flushSync:u.flushSync})}else await n.navigate(u.action||d,{preventScrollReset:u.preventScrollReset,formData:h,body:v,formMethod:u.method||p,formEncType:u.encType||g,replace:u.replace,state:u.state,fromRouteId:o,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,a,o])}function rE(n,{relative:a}={}){let{basename:o}=m.useContext(Bn),l=m.useContext(ua);Ye(l,"useFormAction must be used inside a RouteContext");let[u]=l.matches.slice(-1),d={...si(n||".",{relative:a})},p=Ja();if(n==null){d.search=p.search;let g=new URLSearchParams(d.search),h=g.getAll("index");if(h.some(b=>b==="")){g.delete("index"),h.filter(x=>x).forEach(x=>g.append("index",x));let b=g.toString();d.search=b?`?${b}`:""}}return(!n||n===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(d.pathname=d.pathname==="/"?o:na([o,d.pathname])),Ws(d)}function oE(n,{relative:a}={}){let o=m.useContext(qb);Ye(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Wb("useViewTransitionState"),u=si(n,{relative:a});if(!o.isTransitioning)return!1;let d=oa(o.currentLocation.pathname,l)||o.currentLocation.pathname,p=oa(o.nextLocation.pathname,l)||o.nextLocation.pathname;return Jl(u.pathname,p)!=null||Jl(u.pathname,d)!=null}var sE=_b();const mr=To(sE),ff="backends_config";function ey(){try{const n=localStorage.getItem(ff);return n&&JSON.parse(n)?.active?.url||null}catch(n){return console.error("❌ Error leyendo backend desde localStorage",n),null}}function iE(n){try{if(!n)return;const a=localStorage.getItem(ff);if(!a)return;const o=JSON.parse(a);localStorage.setItem(ff,JSON.stringify({...o,active:{...o.active,url:n}}))}catch(a){console.warn("⚠️ No se pudo sincronizar backendURLGlobal",a)}}const Uv="backends_config",ty=m.createContext();function lE({children:n}){const[a,o]=m.useState([]),[l,u]=m.useState(null),[d,p]=m.useState(!1),[g,h]=m.useState(!0);m.useEffect(()=>{const w=localStorage.getItem(Uv);if(w)try{const S=JSON.parse(w);o(S.backends||[]),u(S.active||null)}catch(S){console.error("⚠️ Error parseando backends_config",S)}p(!0),h(!1)},[]),m.useEffect(()=>{d&&localStorage.setItem(Uv,JSON.stringify({backends:a,active:l}))},[a,l,d]),m.useEffect(()=>{l?.url&&iE(l.url)},[l]);const v=(w,S,N=null)=>{if(!w?.trim()||!S?.trim())throw new Error("Alias y URL son obligatorios");if(a.some(E=>E.alias===w.trim()))throw new Error(`Ya existe un backend con alias "${w}"`);const R={id:crypto.randomUUID(),alias:w.trim(),url:S.trim().charAt(0).toLowerCase()+S.trim().slice(1),avatar:N};o(E=>[...E,R]),l||u(R)},b=w=>{o(S=>S.filter(N=>N.alias!==w)),l?.alias===w&&u(null)},x=w=>{const S=a.find(N=>N.alias===w);S&&l?.alias!==S.alias&&(localStorage.removeItem("auth_session"),u(S),setTimeout(()=>{window.location.replace(window.location.origin+window.location.pathname)},100))};return i.jsx(ty.Provider,{value:{backends:a,activeBackend:l,addBackend:v,deleteBackend:b,setActiveBackend:x,loading:g},children:n})}function lc(){return m.useContext(ty)}var Vd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Iv;function cE(){return Iv||(Iv=1,(function(n){(function(){var a={}.hasOwnProperty;function o(){for(var d="",p=0;p<arguments.length;p++){var g=arguments[p];g&&(d=u(d,l(g)))}return d}function l(d){if(typeof d=="string"||typeof d=="number")return d;if(typeof d!="object")return"";if(Array.isArray(d))return o.apply(null,d);if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]"))return d.toString();var p="";for(var g in d)a.call(d,g)&&d[g]&&(p=u(p,g));return p}function u(d,p){return p?d?d+" "+p:d+p:d}n.exports?(o.default=o,n.exports=o):window.classNames=o})()})(Vd)),Vd.exports}var uE=cE();const ce=To(uE);function mf(){return mf=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},mf.apply(null,arguments)}function ny(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}function Pv(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function dE(n){var a=fE(n,"string");return typeof a=="symbol"?a:String(a)}function fE(n,a){if(typeof n!="object"||n===null)return n;var o=n[Symbol.toPrimitive];if(o!==void 0){var l=o.call(n,a);if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}function ay(n,a,o){var l=m.useRef(n!==void 0),u=m.useState(a),d=u[0],p=u[1],g=n!==void 0,h=l.current;return l.current=g,!g&&h&&d!==a&&p(a),[g?n:d,m.useCallback(function(v){for(var b=arguments.length,x=new Array(b>1?b-1:0),w=1;w<b;w++)x[w-1]=arguments[w];o&&o.apply(void 0,[v].concat(x)),p(v)},[o])]}function cc(n,a){return Object.keys(a).reduce(function(o,l){var u,d=o,p=d[Pv(l)],g=d[l],h=ny(d,[Pv(l),l].map(dE)),v=a[l],b=ay(g,p,n[v]),x=b[0],w=b[1];return mf({},h,(u={},u[l]=x,u[v]=w,u))},n)}function pf(n,a){return pf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,l){return o.__proto__=l,o},pf(n,a)}function mE(n,a){n.prototype=Object.create(a.prototype),n.prototype.constructor=n,pf(n,a)}const pE=["xxl","xl","lg","md","sm","xs"],hE="xs",ii=m.createContext({prefixes:{},breakpoints:pE,minBreakpoint:hE}),{Consumer:XT,Provider:KT}=ii;function ue(n,a){const{prefixes:o}=m.useContext(ii);return n||o[a]||a}function ry(){const{breakpoints:n}=m.useContext(ii);return n}function oy(){const{minBreakpoint:n}=m.useContext(ii);return n}function uc(){const{dir:n}=m.useContext(ii);return n==="rtl"}function Do(n){return n&&n.ownerDocument||document}function gE(n){var a=Do(n);return a&&a.defaultView||window}function vE(n,a){return gE(n).getComputedStyle(n,a)}var bE=/([A-Z])/g;function yE(n){return n.replace(bE,"-$1").toLowerCase()}var xE=/^ms-/;function Bl(n){return yE(n).replace(xE,"-ms-")}var wE=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function jE(n){return!!(n&&wE.test(n))}function aa(n,a){var o="",l="";if(typeof a=="string")return n.style.getPropertyValue(Bl(a))||vE(n).getPropertyValue(Bl(a));Object.keys(a).forEach(function(u){var d=a[u];!d&&d!==0?n.style.removeProperty(Bl(u)):jE(u)?l+=u+"("+d+") ":o+=Bl(u)+": "+d+";"}),l&&(o+="transform: "+l+";"),n.style.cssText+=";"+o}var Yd={exports:{}},Xd,$v;function SE(){if($v)return Xd;$v=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Xd=n,Xd}var Kd,Hv;function NE(){if(Hv)return Kd;Hv=1;var n=SE();function a(){}function o(){}return o.resetWarningCache=a,Kd=function(){function l(p,g,h,v,b,x){if(x!==n){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}l.isRequired=l;function u(){return l}var d={array:l,bigint:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:u,element:l,elementType:l,instanceOf:u,node:l,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:o,resetWarningCache:a};return d.PropTypes=d,d},Kd}var Gv;function EE(){return Gv||(Gv=1,Yd.exports=NE()()),Yd.exports}var CE=EE();const Be=To(CE),qv={disabled:!1},sy=qe.createContext(null);var AE=function(a){return a.scrollTop},Xs="unmounted",$a="exited",fn="entering",ea="entered",So="exiting",fa=(function(n){mE(a,n);function a(l,u){var d;d=n.call(this,l,u)||this;var p=u,g=p&&!p.isMounting?l.enter:l.appear,h;return d.appearStatus=null,l.in?g?(h=$a,d.appearStatus=fn):h=ea:l.unmountOnExit||l.mountOnEnter?h=Xs:h=$a,d.state={status:h},d.nextCallback=null,d}a.getDerivedStateFromProps=function(u,d){var p=u.in;return p&&d.status===Xs?{status:$a}:null};var o=a.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(u){var d=null;if(u!==this.props){var p=this.state.status;this.props.in?p!==fn&&p!==ea&&(d=fn):(p===fn||p===ea)&&(d=So)}this.updateStatus(!1,d)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var u=this.props.timeout,d,p,g;return d=p=g=u,u!=null&&typeof u!="number"&&(d=u.exit,p=u.enter,g=u.appear!==void 0?u.appear:p),{exit:d,enter:p,appear:g}},o.updateStatus=function(u,d){if(u===void 0&&(u=!1),d!==null)if(this.cancelNextCallback(),d===fn){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:mr.findDOMNode(this);p&&AE(p)}this.performEnter(u)}else this.performExit();else this.props.unmountOnExit&&this.state.status===$a&&this.setState({status:Xs})},o.performEnter=function(u){var d=this,p=this.props.enter,g=this.context?this.context.isMounting:u,h=this.props.nodeRef?[g]:[mr.findDOMNode(this),g],v=h[0],b=h[1],x=this.getTimeouts(),w=g?x.appear:x.enter;if(!u&&!p||qv.disabled){this.safeSetState({status:ea},function(){d.props.onEntered(v)});return}this.props.onEnter(v,b),this.safeSetState({status:fn},function(){d.props.onEntering(v,b),d.onTransitionEnd(w,function(){d.safeSetState({status:ea},function(){d.props.onEntered(v,b)})})})},o.performExit=function(){var u=this,d=this.props.exit,p=this.getTimeouts(),g=this.props.nodeRef?void 0:mr.findDOMNode(this);if(!d||qv.disabled){this.safeSetState({status:$a},function(){u.props.onExited(g)});return}this.props.onExit(g),this.safeSetState({status:So},function(){u.props.onExiting(g),u.onTransitionEnd(p.exit,function(){u.safeSetState({status:$a},function(){u.props.onExited(g)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(u,d){d=this.setNextCallback(d),this.setState(u,d)},o.setNextCallback=function(u){var d=this,p=!0;return this.nextCallback=function(g){p&&(p=!1,d.nextCallback=null,u(g))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},o.onTransitionEnd=function(u,d){this.setNextCallback(d);var p=this.props.nodeRef?this.props.nodeRef.current:mr.findDOMNode(this),g=u==null&&!this.props.addEndListener;if(!p||g){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],v=h[0],b=h[1];this.props.addEndListener(v,b)}u!=null&&setTimeout(this.nextCallback,u)},o.render=function(){var u=this.state.status;if(u===Xs)return null;var d=this.props,p=d.children;d.in,d.mountOnEnter,d.unmountOnExit,d.appear,d.enter,d.exit,d.timeout,d.addEndListener,d.onEnter,d.onEntering,d.onEntered,d.onExit,d.onExiting,d.onExited,d.nodeRef;var g=ny(d,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return qe.createElement(sy.Provider,{value:null},typeof p=="function"?p(u,g):qe.cloneElement(qe.Children.only(p),g))},a})(qe.Component);fa.contextType=sy;fa.propTypes={};function po(){}fa.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:po,onEntering:po,onEntered:po,onExit:po,onExiting:po,onExited:po};fa.UNMOUNTED=Xs;fa.EXITED=$a;fa.ENTERING=fn;fa.ENTERED=ea;fa.EXITING=So;function iy(n){return n.code==="Escape"||n.keyCode===27}function OE(){const n=m.version.split(".");return{major:+n[0],minor:+n[1],patch:+n[2]}}function wr(n){if(!n||typeof n=="function")return null;const{major:a}=OE();return a>=19?n.props.ref:n.ref}const Lo=!!(typeof window<"u"&&window.document&&window.document.createElement);var hf=!1,gf=!1;try{var Zd={get passive(){return hf=!0},get once(){return gf=hf=!0}};Lo&&(window.addEventListener("test",Zd,Zd),window.removeEventListener("test",Zd,!0))}catch{}function If(n,a,o,l){if(l&&typeof l!="boolean"&&!gf){var u=l.once,d=l.capture,p=o;!gf&&u&&(p=o.__once||function g(h){this.removeEventListener(a,g,d),o.call(this,h)},o.__once=p),n.addEventListener(a,p,hf?l:d)}n.addEventListener(a,o,l)}function vf(n,a,o,l){var u=l&&typeof l!="boolean"?l.capture:l;n.removeEventListener(a,o,u),o.__once&&n.removeEventListener(a,o.__once,u)}function ta(n,a,o,l){return If(n,a,o,l),function(){vf(n,a,o,l)}}function kE(n,a,o,l){if(l===void 0&&(l=!0),n){var u=document.createEvent("HTMLEvents");u.initEvent(a,o,l),n.dispatchEvent(u)}}function TE(n){var a=aa(n,"transitionDuration")||"",o=a.indexOf("ms")===-1?1e3:1;return parseFloat(a)*o}function RE(n,a,o){o===void 0&&(o=5);var l=!1,u=setTimeout(function(){l||kE(n,"transitionend",!0)},a+o),d=ta(n,"transitionend",function(){l=!0},{once:!0});return function(){clearTimeout(u),d()}}function ly(n,a,o,l){o==null&&(o=TE(n)||0);var u=RE(n,o,l),d=ta(n,"transitionend",a);return function(){u(),d()}}function Jv(n,a){const o=aa(n,a)||"",l=o.indexOf("ms")===-1?1e3:1;return parseFloat(o)*l}function Pf(n,a){const o=Jv(n,"transitionDuration"),l=Jv(n,"transitionDelay"),u=ly(n,d=>{d.target===n&&(u(),a(d))},o+l)}function Fs(...n){return n.filter(a=>a!=null).reduce((a,o)=>{if(typeof o!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return a===null?o:function(...u){a.apply(this,u),o.apply(this,u)}},null)}function cy(n){n.offsetHeight}const Fv=n=>!n||typeof n=="function"?n:a=>{n.current=a};function DE(n,a){const o=Fv(n),l=Fv(a);return u=>{o&&o(u),l&&l(u)}}function Mo(n,a){return m.useMemo(()=>DE(n,a),[n,a])}function Fl(n){return n&&"setState"in n?mr.findDOMNode(n):n??null}const dc=qe.forwardRef(({onEnter:n,onEntering:a,onEntered:o,onExit:l,onExiting:u,onExited:d,addEndListener:p,children:g,childRef:h,...v},b)=>{const x=m.useRef(null),w=Mo(x,h),S=L=>{w(Fl(L))},N=L=>I=>{L&&x.current&&L(x.current,I)},R=m.useCallback(N(n),[n]),E=m.useCallback(N(a),[a]),O=m.useCallback(N(o),[o]),C=m.useCallback(N(l),[l]),T=m.useCallback(N(u),[u]),_=m.useCallback(N(d),[d]),M=m.useCallback(N(p),[p]);return i.jsx(fa,{ref:b,...v,onEnter:R,onEntered:O,onEntering:E,onExit:C,onExited:_,onExiting:T,addEndListener:M,nodeRef:x,children:typeof g=="function"?(L,I)=>g(L,{...I,ref:S}):qe.cloneElement(g,{ref:S})})});dc.displayName="TransitionWrapper";const LE={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function ME(n,a){const o=`offset${n[0].toUpperCase()}${n.slice(1)}`,l=a[o],u=LE[n];return l+parseInt(aa(a,u[0]),10)+parseInt(aa(a,u[1]),10)}const BE={[$a]:"collapse",[So]:"collapsing",[fn]:"collapsing",[ea]:"collapse show"},uy=qe.forwardRef(({onEnter:n,onEntering:a,onEntered:o,onExit:l,onExiting:u,className:d,children:p,dimension:g="height",in:h=!1,timeout:v=300,mountOnEnter:b=!1,unmountOnExit:x=!1,appear:w=!1,getDimensionValue:S=ME,...N},R)=>{const E=typeof g=="function"?g():g,O=m.useMemo(()=>Fs(L=>{L.style[E]="0"},n),[E,n]),C=m.useMemo(()=>Fs(L=>{const I=`scroll${E[0].toUpperCase()}${E.slice(1)}`;L.style[E]=`${L[I]}px`},a),[E,a]),T=m.useMemo(()=>Fs(L=>{L.style[E]=null},o),[E,o]),_=m.useMemo(()=>Fs(L=>{L.style[E]=`${S(E,L)}px`,cy(L)},l),[l,S,E]),M=m.useMemo(()=>Fs(L=>{L.style[E]=null},u),[E,u]);return i.jsx(dc,{ref:R,addEndListener:Pf,...N,"aria-expanded":N.role?h:null,onEnter:O,onEntering:C,onEntered:T,onExit:_,onExiting:M,childRef:wr(p),in:h,timeout:v,mountOnEnter:b,unmountOnExit:x,appear:w,children:(L,I)=>qe.cloneElement(p,{...I,className:ce(d,p.props.className,BE[L],E==="width"&&"collapse-horizontal")})})});uy.displayName="Collapse";function zE(n){const a=m.useRef(n);return m.useEffect(()=>{a.current=n},[n]),a}function sa(n){const a=zE(n);return m.useCallback(function(...o){return a.current&&a.current(...o)},[a])}const fc=(n=>m.forwardRef((a,o)=>i.jsx("div",{...a,ref:o,className:ce(a.className,n)})));function bf(){return m.useState(null)}function _E(n){const a=m.useRef(n);return m.useEffect(()=>{a.current=n},[n]),a}function vt(n){const a=_E(n);return m.useCallback(function(...o){return a.current&&a.current(...o)},[a])}function UE(n,a,o,l=!1){const u=vt(o);m.useEffect(()=>{const d=typeof n=="function"?n():n;return d.addEventListener(a,u,l),()=>d.removeEventListener(a,u,l)},[n])}function dy(){const n=m.useRef(!0),a=m.useRef(()=>n.current);return m.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),a.current}function fy(n){const a=m.useRef(null);return m.useEffect(()=>{a.current=n}),a.current}const IE=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",PE=typeof document<"u",Vv=PE||IE?m.useLayoutEffect:m.useEffect,$E=["as","disabled"];function HE(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function GE(n){return!n||n.trim()==="#"}function $f({tagName:n,disabled:a,href:o,target:l,rel:u,role:d,onClick:p,tabIndex:g=0,type:h}){n||(o!=null||l!=null||u!=null?n="a":n="button");const v={tagName:n};if(n==="button")return[{type:h||"button",disabled:a},v];const b=w=>{if((a||n==="a"&&GE(o))&&w.preventDefault(),a){w.stopPropagation();return}p?.(w)},x=w=>{w.key===" "&&(w.preventDefault(),b(w))};return n==="a"&&(o||(o="#"),a&&(o=void 0)),[{role:d??"button",disabled:void 0,tabIndex:a?void 0:g,href:o,target:n==="a"?l:void 0,"aria-disabled":a||void 0,rel:n==="a"?u:void 0,onClick:b,onKeyDown:x},v]}const Hf=m.forwardRef((n,a)=>{let{as:o,disabled:l}=n,u=HE(n,$E);const[d,{tagName:p}]=$f(Object.assign({tagName:o,disabled:l},u));return i.jsx(p,Object.assign({},u,d,{ref:a}))});Hf.displayName="Button";const qE=["onKeyDown"];function JE(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function FE(n){return!n||n.trim()==="#"}const Gf=m.forwardRef((n,a)=>{let{onKeyDown:o}=n,l=JE(n,qE);const[u]=$f(Object.assign({tagName:"a"},l)),d=vt(p=>{u.onKeyDown(p),o?.(p)});return FE(l.href)||l.role==="button"?i.jsx("a",Object.assign({ref:a},l,u,{onKeyDown:d})):i.jsx("a",Object.assign({ref:a},l,{onKeyDown:o}))});Gf.displayName="Anchor";const VE={[fn]:"show",[ea]:"show"},ia=m.forwardRef(({className:n,children:a,transitionClasses:o={},onEnter:l,...u},d)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...u},g=m.useCallback((h,v)=>{cy(h),l?.(h,v)},[l]);return i.jsx(dc,{ref:d,addEndListener:Pf,...p,onEnter:g,childRef:wr(a),children:(h,v)=>m.cloneElement(a,{...v,className:ce("fade",n,a.props.className,VE[h],o[h])})})});ia.displayName="Fade";const YE={"aria-label":Be.string,onClick:Be.func,variant:Be.oneOf(["white"])},mc=m.forwardRef(({className:n,variant:a,"aria-label":o="Close",...l},u)=>i.jsx("button",{ref:u,type:"button",className:ce("btn-close",a&&`btn-close-${a}`,n),"aria-label":o,...l}));mc.displayName="CloseButton";mc.propTypes=YE;const vo=m.forwardRef(({bsPrefix:n,bg:a="primary",pill:o=!1,text:l,className:u,as:d="span",...p},g)=>{const h=ue(n,"badge");return i.jsx(d,{ref:g,...p,className:ce(u,h,o&&"rounded-pill",l&&`text-${l}`,a&&`bg-${a}`)})});vo.displayName="Badge";const Oe=m.forwardRef(({as:n,bsPrefix:a,variant:o="primary",size:l,active:u=!1,disabled:d=!1,className:p,...g},h)=>{const v=ue(a,"btn"),[b,{tagName:x}]=$f({tagName:n,disabled:d,...g}),w=x;return i.jsx(w,{...b,...g,ref:h,disabled:d,className:ce(p,v,u&&"active",o&&`${v}-${o}`,l&&`${v}-${l}`,g.href&&d&&"disabled")})});Oe.displayName="Button";const qf=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"card-body"),i.jsx(o,{ref:u,className:ce(n,a),...l})));qf.displayName="CardBody";const my=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"card-footer"),i.jsx(o,{ref:u,className:ce(n,a),...l})));my.displayName="CardFooter";const Jf=m.createContext(null);Jf.displayName="CardHeaderContext";const py=m.forwardRef(({bsPrefix:n,className:a,as:o="div",...l},u)=>{const d=ue(n,"card-header"),p=m.useMemo(()=>({cardHeaderBsPrefix:d}),[d]);return i.jsx(Jf.Provider,{value:p,children:i.jsx(o,{ref:u,...l,className:ce(a,d)})})});py.displayName="CardHeader";const hy=m.forwardRef(({bsPrefix:n,className:a,variant:o,as:l="img",...u},d)=>{const p=ue(n,"card-img");return i.jsx(l,{ref:d,className:ce(o?`${p}-${o}`:p,a),...u})});hy.displayName="CardImg";const gy=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"card-img-overlay"),i.jsx(o,{ref:u,className:ce(n,a),...l})));gy.displayName="CardImgOverlay";const vy=m.forwardRef(({className:n,bsPrefix:a,as:o="a",...l},u)=>(a=ue(a,"card-link"),i.jsx(o,{ref:u,className:ce(n,a),...l})));vy.displayName="CardLink";const XE=fc("h6"),by=m.forwardRef(({className:n,bsPrefix:a,as:o=XE,...l},u)=>(a=ue(a,"card-subtitle"),i.jsx(o,{ref:u,className:ce(n,a),...l})));by.displayName="CardSubtitle";const yy=m.forwardRef(({className:n,bsPrefix:a,as:o="p",...l},u)=>(a=ue(a,"card-text"),i.jsx(o,{ref:u,className:ce(n,a),...l})));yy.displayName="CardText";const KE=fc("h5"),xy=m.forwardRef(({className:n,bsPrefix:a,as:o=KE,...l},u)=>(a=ue(a,"card-title"),i.jsx(o,{ref:u,className:ce(n,a),...l})));xy.displayName="CardTitle";const wy=m.forwardRef(({bsPrefix:n,className:a,bg:o,text:l,border:u,body:d=!1,children:p,as:g="div",...h},v)=>{const b=ue(n,"card");return i.jsx(g,{ref:v,...h,className:ce(a,b,o&&`bg-${o}`,l&&`text-${l}`,u&&`border-${u}`),children:d?i.jsx(qf,{children:p}):p})});wy.displayName="Card";const bo=Object.assign(wy,{Img:hy,Title:xy,Subtitle:by,Body:qf,Link:vy,Text:yy,Header:py,Footer:my,ImgOverlay:gy});function ZE(){const n=m.useRef(!0),a=m.useRef(()=>n.current);return m.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),a.current}function QE(n){const a=m.useRef(n);return a.current=n,a}function jy(n){const a=QE(n);m.useEffect(()=>()=>a.current(),[])}const yf=2**31-1;function Sy(n,a,o){const l=o-Date.now();n.current=l<=yf?setTimeout(a,l):setTimeout(()=>Sy(n,a,o),yf)}function Ny(){const n=ZE(),a=m.useRef();return jy(()=>clearTimeout(a.current)),m.useMemo(()=>{const o=()=>clearTimeout(a.current);function l(u,d=0){n()&&(o(),d<=yf?a.current=setTimeout(u,d):Sy(a,u,Date.now()+d))}return{set:l,clear:o,handleRef:a}},[])}function Yv(n,a){let o=0;return m.Children.map(n,l=>m.isValidElement(l)?a(l,o++):l)}function WE(n,a){let o=0;m.Children.forEach(n,l=>{m.isValidElement(l)&&a(l,o++)})}function e2(n,a){return m.Children.toArray(n).some(o=>m.isValidElement(o)&&o.type===a)}function t2({as:n,bsPrefix:a,className:o,...l}){a=ue(a,"col");const u=ry(),d=oy(),p=[],g=[];return u.forEach(h=>{const v=l[h];delete l[h];let b,x,w;typeof v=="object"&&v!=null?{span:b,offset:x,order:w}=v:b=v;const S=h!==d?`-${h}`:"";b&&p.push(b===!0?`${a}${S}`:`${a}${S}-${b}`),w!=null&&g.push(`order${S}-${w}`),x!=null&&g.push(`offset${S}-${x}`)}),[{...l,className:ce(o,...p,...g)},{as:n,bsPrefix:a,spans:p}]}const jn=m.forwardRef((n,a)=>{const[{className:o,...l},{as:u="div",bsPrefix:d,spans:p}]=t2(n);return i.jsx(u,{...l,ref:a,className:ce(o,!p.length&&d)})});jn.displayName="Col";const Bo=m.forwardRef(({bsPrefix:n,fluid:a=!1,as:o="div",className:l,...u},d)=>{const p=ue(n,"container"),g=typeof a=="string"?`-${a}`:"-fluid";return i.jsx(o,{ref:d,...u,className:ce(l,a?`${p}${g}`:p)})});Bo.displayName="Container";var n2=Function.prototype.bind.call(Function.prototype.call,[].slice);function Wn(n,a){return n2(n.querySelectorAll(a))}function Ey(n,a,o){const l=m.useRef(n!==void 0),[u,d]=m.useState(a),p=n!==void 0,g=l.current;return l.current=p,!p&&g&&u!==a&&d(a),[p?n:u,m.useCallback((...h)=>{const[v,...b]=h;let x=o?.(v,...b);return d(v),x},[o])]}function Cy(){const[,n]=m.useReducer(a=>a+1,0);return n}const pc=m.createContext(null);var Xv=Object.prototype.hasOwnProperty;function Kv(n,a,o){for(o of n.keys())if(Ks(o,a))return o}function Ks(n,a){var o,l,u;if(n===a)return!0;if(n&&a&&(o=n.constructor)===a.constructor){if(o===Date)return n.getTime()===a.getTime();if(o===RegExp)return n.toString()===a.toString();if(o===Array){if((l=n.length)===a.length)for(;l--&&Ks(n[l],a[l]););return l===-1}if(o===Set){if(n.size!==a.size)return!1;for(l of n)if(u=l,u&&typeof u=="object"&&(u=Kv(a,u),!u)||!a.has(u))return!1;return!0}if(o===Map){if(n.size!==a.size)return!1;for(l of n)if(u=l[0],u&&typeof u=="object"&&(u=Kv(a,u),!u)||!Ks(l[1],a.get(u)))return!1;return!0}if(o===ArrayBuffer)n=new Uint8Array(n),a=new Uint8Array(a);else if(o===DataView){if((l=n.byteLength)===a.byteLength)for(;l--&&n.getInt8(l)===a.getInt8(l););return l===-1}if(ArrayBuffer.isView(n)){if((l=n.byteLength)===a.byteLength)for(;l--&&n[l]===a[l];);return l===-1}if(!o||typeof n=="object"){l=0;for(o in n)if(Xv.call(n,o)&&++l&&!Xv.call(a,o)||!(o in a)||!Ks(n[o],a[o]))return!1;return Object.keys(a).length===l}}return n!==n&&a!==a}function a2(n){const a=dy();return[n[0],m.useCallback(o=>{if(a())return n[1](o)},[a,n[1]])]}var Lt="top",pn="bottom",hn="right",Mt="left",Ff="auto",li=[Lt,pn,hn,Mt],No="start",ei="end",r2="clippingParents",Ay="viewport",Vs="popper",o2="reference",Zv=li.reduce(function(n,a){return n.concat([a+"-"+No,a+"-"+ei])},[]),Oy=[].concat(li,[Ff]).reduce(function(n,a){return n.concat([a,a+"-"+No,a+"-"+ei])},[]),s2="beforeRead",i2="read",l2="afterRead",c2="beforeMain",u2="main",d2="afterMain",f2="beforeWrite",m2="write",p2="afterWrite",h2=[s2,i2,l2,c2,u2,d2,f2,m2,p2];function Rn(n){return n.split("-")[0]}function Ft(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var a=n.ownerDocument;return a&&a.defaultView||window}return n}function gr(n){var a=Ft(n).Element;return n instanceof a||n instanceof Element}function Dn(n){var a=Ft(n).HTMLElement;return n instanceof a||n instanceof HTMLElement}function Vf(n){if(typeof ShadowRoot>"u")return!1;var a=Ft(n).ShadowRoot;return n instanceof a||n instanceof ShadowRoot}var pr=Math.max,Vl=Math.min,Eo=Math.round;function xf(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function ky(){return!/^((?!chrome|android).)*safari/i.test(xf())}function Co(n,a,o){a===void 0&&(a=!1),o===void 0&&(o=!1);var l=n.getBoundingClientRect(),u=1,d=1;a&&Dn(n)&&(u=n.offsetWidth>0&&Eo(l.width)/n.offsetWidth||1,d=n.offsetHeight>0&&Eo(l.height)/n.offsetHeight||1);var p=gr(n)?Ft(n):window,g=p.visualViewport,h=!ky()&&o,v=(l.left+(h&&g?g.offsetLeft:0))/u,b=(l.top+(h&&g?g.offsetTop:0))/d,x=l.width/u,w=l.height/d;return{width:x,height:w,top:b,right:v+x,bottom:b+w,left:v,x:v,y:b}}function Yf(n){var a=Co(n),o=n.offsetWidth,l=n.offsetHeight;return Math.abs(a.width-o)<=1&&(o=a.width),Math.abs(a.height-l)<=1&&(l=a.height),{x:n.offsetLeft,y:n.offsetTop,width:o,height:l}}function Ty(n,a){var o=a.getRootNode&&a.getRootNode();if(n.contains(a))return!0;if(o&&Vf(o)){var l=a;do{if(l&&n.isSameNode(l))return!0;l=l.parentNode||l.host}while(l)}return!1}function qa(n){return n?(n.nodeName||"").toLowerCase():null}function la(n){return Ft(n).getComputedStyle(n)}function g2(n){return["table","td","th"].indexOf(qa(n))>=0}function Fa(n){return((gr(n)?n.ownerDocument:n.document)||window.document).documentElement}function hc(n){return qa(n)==="html"?n:n.assignedSlot||n.parentNode||(Vf(n)?n.host:null)||Fa(n)}function Qv(n){return!Dn(n)||la(n).position==="fixed"?null:n.offsetParent}function v2(n){var a=/firefox/i.test(xf()),o=/Trident/i.test(xf());if(o&&Dn(n)){var l=la(n);if(l.position==="fixed")return null}var u=hc(n);for(Vf(u)&&(u=u.host);Dn(u)&&["html","body"].indexOf(qa(u))<0;){var d=la(u);if(d.transform!=="none"||d.perspective!=="none"||d.contain==="paint"||["transform","perspective"].indexOf(d.willChange)!==-1||a&&d.willChange==="filter"||a&&d.filter&&d.filter!=="none")return u;u=u.parentNode}return null}function ci(n){for(var a=Ft(n),o=Qv(n);o&&g2(o)&&la(o).position==="static";)o=Qv(o);return o&&(qa(o)==="html"||qa(o)==="body"&&la(o).position==="static")?a:o||v2(n)||a}function Xf(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Zs(n,a,o){return pr(n,Vl(a,o))}function b2(n,a,o){var l=Zs(n,a,o);return l>o?o:l}function Ry(){return{top:0,right:0,bottom:0,left:0}}function Dy(n){return Object.assign({},Ry(),n)}function Ly(n,a){return a.reduce(function(o,l){return o[l]=n,o},{})}var y2=function(a,o){return a=typeof a=="function"?a(Object.assign({},o.rects,{placement:o.placement})):a,Dy(typeof a!="number"?a:Ly(a,li))};function x2(n){var a,o=n.state,l=n.name,u=n.options,d=o.elements.arrow,p=o.modifiersData.popperOffsets,g=Rn(o.placement),h=Xf(g),v=[Mt,hn].indexOf(g)>=0,b=v?"height":"width";if(!(!d||!p)){var x=y2(u.padding,o),w=Yf(d),S=h==="y"?Lt:Mt,N=h==="y"?pn:hn,R=o.rects.reference[b]+o.rects.reference[h]-p[h]-o.rects.popper[b],E=p[h]-o.rects.reference[h],O=ci(d),C=O?h==="y"?O.clientHeight||0:O.clientWidth||0:0,T=R/2-E/2,_=x[S],M=C-w[b]-x[N],L=C/2-w[b]/2+T,I=Zs(_,L,M),z=h;o.modifiersData[l]=(a={},a[z]=I,a.centerOffset=I-L,a)}}function w2(n){var a=n.state,o=n.options,l=o.element,u=l===void 0?"[data-popper-arrow]":l;u!=null&&(typeof u=="string"&&(u=a.elements.popper.querySelector(u),!u)||Ty(a.elements.popper,u)&&(a.elements.arrow=u))}const j2={name:"arrow",enabled:!0,phase:"main",fn:x2,effect:w2,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ao(n){return n.split("-")[1]}var S2={top:"auto",right:"auto",bottom:"auto",left:"auto"};function N2(n,a){var o=n.x,l=n.y,u=a.devicePixelRatio||1;return{x:Eo(o*u)/u||0,y:Eo(l*u)/u||0}}function Wv(n){var a,o=n.popper,l=n.popperRect,u=n.placement,d=n.variation,p=n.offsets,g=n.position,h=n.gpuAcceleration,v=n.adaptive,b=n.roundOffsets,x=n.isFixed,w=p.x,S=w===void 0?0:w,N=p.y,R=N===void 0?0:N,E=typeof b=="function"?b({x:S,y:R}):{x:S,y:R};S=E.x,R=E.y;var O=p.hasOwnProperty("x"),C=p.hasOwnProperty("y"),T=Mt,_=Lt,M=window;if(v){var L=ci(o),I="clientHeight",z="clientWidth";if(L===Ft(o)&&(L=Fa(o),la(L).position!=="static"&&g==="absolute"&&(I="scrollHeight",z="scrollWidth")),L=L,u===Lt||(u===Mt||u===hn)&&d===ei){_=pn;var Y=x&&L===M&&M.visualViewport?M.visualViewport.height:L[I];R-=Y-l.height,R*=h?1:-1}if(u===Mt||(u===Lt||u===pn)&&d===ei){T=hn;var W=x&&L===M&&M.visualViewport?M.visualViewport.width:L[z];S-=W-l.width,S*=h?1:-1}}var oe=Object.assign({position:g},v&&S2),ne=b===!0?N2({x:S,y:R},Ft(o)):{x:S,y:R};if(S=ne.x,R=ne.y,h){var le;return Object.assign({},oe,(le={},le[_]=C?"0":"",le[T]=O?"0":"",le.transform=(M.devicePixelRatio||1)<=1?"translate("+S+"px, "+R+"px)":"translate3d("+S+"px, "+R+"px, 0)",le))}return Object.assign({},oe,(a={},a[_]=C?R+"px":"",a[T]=O?S+"px":"",a.transform="",a))}function E2(n){var a=n.state,o=n.options,l=o.gpuAcceleration,u=l===void 0?!0:l,d=o.adaptive,p=d===void 0?!0:d,g=o.roundOffsets,h=g===void 0?!0:g,v={placement:Rn(a.placement),variation:Ao(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:u,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,Wv(Object.assign({},v,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:p,roundOffsets:h})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,Wv(Object.assign({},v,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})}const C2={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:E2,data:{}};var zl={passive:!0};function A2(n){var a=n.state,o=n.instance,l=n.options,u=l.scroll,d=u===void 0?!0:u,p=l.resize,g=p===void 0?!0:p,h=Ft(a.elements.popper),v=[].concat(a.scrollParents.reference,a.scrollParents.popper);return d&&v.forEach(function(b){b.addEventListener("scroll",o.update,zl)}),g&&h.addEventListener("resize",o.update,zl),function(){d&&v.forEach(function(b){b.removeEventListener("scroll",o.update,zl)}),g&&h.removeEventListener("resize",o.update,zl)}}const O2={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:A2,data:{}};var k2={left:"right",right:"left",bottom:"top",top:"bottom"};function Gl(n){return n.replace(/left|right|bottom|top/g,function(a){return k2[a]})}var T2={start:"end",end:"start"};function eb(n){return n.replace(/start|end/g,function(a){return T2[a]})}function Kf(n){var a=Ft(n),o=a.pageXOffset,l=a.pageYOffset;return{scrollLeft:o,scrollTop:l}}function Zf(n){return Co(Fa(n)).left+Kf(n).scrollLeft}function R2(n,a){var o=Ft(n),l=Fa(n),u=o.visualViewport,d=l.clientWidth,p=l.clientHeight,g=0,h=0;if(u){d=u.width,p=u.height;var v=ky();(v||!v&&a==="fixed")&&(g=u.offsetLeft,h=u.offsetTop)}return{width:d,height:p,x:g+Zf(n),y:h}}function D2(n){var a,o=Fa(n),l=Kf(n),u=(a=n.ownerDocument)==null?void 0:a.body,d=pr(o.scrollWidth,o.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),p=pr(o.scrollHeight,o.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0),g=-l.scrollLeft+Zf(n),h=-l.scrollTop;return la(u||o).direction==="rtl"&&(g+=pr(o.clientWidth,u?u.clientWidth:0)-d),{width:d,height:p,x:g,y:h}}function Qf(n){var a=la(n),o=a.overflow,l=a.overflowX,u=a.overflowY;return/auto|scroll|overlay|hidden/.test(o+u+l)}function My(n){return["html","body","#document"].indexOf(qa(n))>=0?n.ownerDocument.body:Dn(n)&&Qf(n)?n:My(hc(n))}function Qs(n,a){var o;a===void 0&&(a=[]);var l=My(n),u=l===((o=n.ownerDocument)==null?void 0:o.body),d=Ft(l),p=u?[d].concat(d.visualViewport||[],Qf(l)?l:[]):l,g=a.concat(p);return u?g:g.concat(Qs(hc(p)))}function wf(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function L2(n,a){var o=Co(n,!1,a==="fixed");return o.top=o.top+n.clientTop,o.left=o.left+n.clientLeft,o.bottom=o.top+n.clientHeight,o.right=o.left+n.clientWidth,o.width=n.clientWidth,o.height=n.clientHeight,o.x=o.left,o.y=o.top,o}function tb(n,a,o){return a===Ay?wf(R2(n,o)):gr(a)?L2(a,o):wf(D2(Fa(n)))}function M2(n){var a=Qs(hc(n)),o=["absolute","fixed"].indexOf(la(n).position)>=0,l=o&&Dn(n)?ci(n):n;return gr(l)?a.filter(function(u){return gr(u)&&Ty(u,l)&&qa(u)!=="body"}):[]}function B2(n,a,o,l){var u=a==="clippingParents"?M2(n):[].concat(a),d=[].concat(u,[o]),p=d[0],g=d.reduce(function(h,v){var b=tb(n,v,l);return h.top=pr(b.top,h.top),h.right=Vl(b.right,h.right),h.bottom=Vl(b.bottom,h.bottom),h.left=pr(b.left,h.left),h},tb(n,p,l));return g.width=g.right-g.left,g.height=g.bottom-g.top,g.x=g.left,g.y=g.top,g}function By(n){var a=n.reference,o=n.element,l=n.placement,u=l?Rn(l):null,d=l?Ao(l):null,p=a.x+a.width/2-o.width/2,g=a.y+a.height/2-o.height/2,h;switch(u){case Lt:h={x:p,y:a.y-o.height};break;case pn:h={x:p,y:a.y+a.height};break;case hn:h={x:a.x+a.width,y:g};break;case Mt:h={x:a.x-o.width,y:g};break;default:h={x:a.x,y:a.y}}var v=u?Xf(u):null;if(v!=null){var b=v==="y"?"height":"width";switch(d){case No:h[v]=h[v]-(a[b]/2-o[b]/2);break;case ei:h[v]=h[v]+(a[b]/2-o[b]/2);break}}return h}function ti(n,a){a===void 0&&(a={});var o=a,l=o.placement,u=l===void 0?n.placement:l,d=o.strategy,p=d===void 0?n.strategy:d,g=o.boundary,h=g===void 0?r2:g,v=o.rootBoundary,b=v===void 0?Ay:v,x=o.elementContext,w=x===void 0?Vs:x,S=o.altBoundary,N=S===void 0?!1:S,R=o.padding,E=R===void 0?0:R,O=Dy(typeof E!="number"?E:Ly(E,li)),C=w===Vs?o2:Vs,T=n.rects.popper,_=n.elements[N?C:w],M=B2(gr(_)?_:_.contextElement||Fa(n.elements.popper),h,b,p),L=Co(n.elements.reference),I=By({reference:L,element:T,placement:u}),z=wf(Object.assign({},T,I)),Y=w===Vs?z:L,W={top:M.top-Y.top+O.top,bottom:Y.bottom-M.bottom+O.bottom,left:M.left-Y.left+O.left,right:Y.right-M.right+O.right},oe=n.modifiersData.offset;if(w===Vs&&oe){var ne=oe[u];Object.keys(W).forEach(function(le){var J=[hn,pn].indexOf(le)>=0?1:-1,ie=[Lt,pn].indexOf(le)>=0?"y":"x";W[le]+=ne[ie]*J})}return W}function z2(n,a){a===void 0&&(a={});var o=a,l=o.placement,u=o.boundary,d=o.rootBoundary,p=o.padding,g=o.flipVariations,h=o.allowedAutoPlacements,v=h===void 0?Oy:h,b=Ao(l),x=b?g?Zv:Zv.filter(function(N){return Ao(N)===b}):li,w=x.filter(function(N){return v.indexOf(N)>=0});w.length===0&&(w=x);var S=w.reduce(function(N,R){return N[R]=ti(n,{placement:R,boundary:u,rootBoundary:d,padding:p})[Rn(R)],N},{});return Object.keys(S).sort(function(N,R){return S[N]-S[R]})}function _2(n){if(Rn(n)===Ff)return[];var a=Gl(n);return[eb(n),a,eb(a)]}function U2(n){var a=n.state,o=n.options,l=n.name;if(!a.modifiersData[l]._skip){for(var u=o.mainAxis,d=u===void 0?!0:u,p=o.altAxis,g=p===void 0?!0:p,h=o.fallbackPlacements,v=o.padding,b=o.boundary,x=o.rootBoundary,w=o.altBoundary,S=o.flipVariations,N=S===void 0?!0:S,R=o.allowedAutoPlacements,E=a.options.placement,O=Rn(E),C=O===E,T=h||(C||!N?[Gl(E)]:_2(E)),_=[E].concat(T).reduce(function(se,fe){return se.concat(Rn(fe)===Ff?z2(a,{placement:fe,boundary:b,rootBoundary:x,padding:v,flipVariations:N,allowedAutoPlacements:R}):fe)},[]),M=a.rects.reference,L=a.rects.popper,I=new Map,z=!0,Y=_[0],W=0;W<_.length;W++){var oe=_[W],ne=Rn(oe),le=Ao(oe)===No,J=[Lt,pn].indexOf(ne)>=0,ie=J?"width":"height",$=ti(a,{placement:oe,boundary:b,rootBoundary:x,altBoundary:w,padding:v}),ee=J?le?hn:Mt:le?pn:Lt;M[ie]>L[ie]&&(ee=Gl(ee));var D=Gl(ee),re=[];if(d&&re.push($[ne]<=0),g&&re.push($[ee]<=0,$[D]<=0),re.every(function(se){return se})){Y=oe,z=!1;break}I.set(oe,re)}if(z)for(var A=N?3:1,V=function(fe){var me=_.find(function($e){var we=I.get($e);if(we)return we.slice(0,fe).every(function(Qe){return Qe})});if(me)return Y=me,"break"},K=A;K>0;K--){var te=V(K);if(te==="break")break}a.placement!==Y&&(a.modifiersData[l]._skip=!0,a.placement=Y,a.reset=!0)}}const I2={name:"flip",enabled:!0,phase:"main",fn:U2,requiresIfExists:["offset"],data:{_skip:!1}};function nb(n,a,o){return o===void 0&&(o={x:0,y:0}),{top:n.top-a.height-o.y,right:n.right-a.width+o.x,bottom:n.bottom-a.height+o.y,left:n.left-a.width-o.x}}function ab(n){return[Lt,hn,pn,Mt].some(function(a){return n[a]>=0})}function P2(n){var a=n.state,o=n.name,l=a.rects.reference,u=a.rects.popper,d=a.modifiersData.preventOverflow,p=ti(a,{elementContext:"reference"}),g=ti(a,{altBoundary:!0}),h=nb(p,l),v=nb(g,u,d),b=ab(h),x=ab(v);a.modifiersData[o]={referenceClippingOffsets:h,popperEscapeOffsets:v,isReferenceHidden:b,hasPopperEscaped:x},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":b,"data-popper-escaped":x})}const $2={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:P2};function H2(n,a,o){var l=Rn(n),u=[Mt,Lt].indexOf(l)>=0?-1:1,d=typeof o=="function"?o(Object.assign({},a,{placement:n})):o,p=d[0],g=d[1];return p=p||0,g=(g||0)*u,[Mt,hn].indexOf(l)>=0?{x:g,y:p}:{x:p,y:g}}function G2(n){var a=n.state,o=n.options,l=n.name,u=o.offset,d=u===void 0?[0,0]:u,p=Oy.reduce(function(b,x){return b[x]=H2(x,a.rects,d),b},{}),g=p[a.placement],h=g.x,v=g.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=h,a.modifiersData.popperOffsets.y+=v),a.modifiersData[l]=p}const q2={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:G2};function J2(n){var a=n.state,o=n.name;a.modifiersData[o]=By({reference:a.rects.reference,element:a.rects.popper,placement:a.placement})}const F2={name:"popperOffsets",enabled:!0,phase:"read",fn:J2,data:{}};function V2(n){return n==="x"?"y":"x"}function Y2(n){var a=n.state,o=n.options,l=n.name,u=o.mainAxis,d=u===void 0?!0:u,p=o.altAxis,g=p===void 0?!1:p,h=o.boundary,v=o.rootBoundary,b=o.altBoundary,x=o.padding,w=o.tether,S=w===void 0?!0:w,N=o.tetherOffset,R=N===void 0?0:N,E=ti(a,{boundary:h,rootBoundary:v,padding:x,altBoundary:b}),O=Rn(a.placement),C=Ao(a.placement),T=!C,_=Xf(O),M=V2(_),L=a.modifiersData.popperOffsets,I=a.rects.reference,z=a.rects.popper,Y=typeof R=="function"?R(Object.assign({},a.rects,{placement:a.placement})):R,W=typeof Y=="number"?{mainAxis:Y,altAxis:Y}:Object.assign({mainAxis:0,altAxis:0},Y),oe=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,ne={x:0,y:0};if(L){if(d){var le,J=_==="y"?Lt:Mt,ie=_==="y"?pn:hn,$=_==="y"?"height":"width",ee=L[_],D=ee+E[J],re=ee-E[ie],A=S?-z[$]/2:0,V=C===No?I[$]:z[$],K=C===No?-z[$]:-I[$],te=a.elements.arrow,se=S&&te?Yf(te):{width:0,height:0},fe=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:Ry(),me=fe[J],$e=fe[ie],we=Zs(0,I[$],se[$]),Qe=T?I[$]/2-A-we-me-W.mainAxis:V-we-me-W.mainAxis,We=T?-I[$]/2+A+we+$e+W.mainAxis:K+we+$e+W.mainAxis,Ct=a.elements.arrow&&ci(a.elements.arrow),Kt=Ct?_==="y"?Ct.clientTop||0:Ct.clientLeft||0:0,Zt=(le=oe?.[_])!=null?le:0,Qt=ee+Qe-Zt-Kt,ze=ee+We-Zt,_n=Zs(S?Vl(D,Qt):D,ee,S?pr(re,ze):re);L[_]=_n,ne[_]=_n-ee}if(g){var st,Fo=_==="x"?Lt:Mt,Er=_==="x"?pn:hn,Wt=L[M],vn=M==="y"?"height":"width",Cr=Wt+E[Fo],Va=Wt-E[Er],ha=[Lt,Mt].indexOf(O)!==-1,Ar=(st=oe?.[M])!=null?st:0,je=ha?Cr:Wt-I[vn]-z[vn]-Ar+W.altAxis,Fe=ha?Wt+I[vn]+z[vn]-Ar-W.altAxis:Va,At=S&&ha?b2(je,Wt,Fe):Zs(S?je:Cr,Wt,S?Fe:Va);L[M]=At,ne[M]=At-Wt}a.modifiersData[l]=ne}}const X2={name:"preventOverflow",enabled:!0,phase:"main",fn:Y2,requiresIfExists:["offset"]};function K2(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function Z2(n){return n===Ft(n)||!Dn(n)?Kf(n):K2(n)}function Q2(n){var a=n.getBoundingClientRect(),o=Eo(a.width)/n.offsetWidth||1,l=Eo(a.height)/n.offsetHeight||1;return o!==1||l!==1}function W2(n,a,o){o===void 0&&(o=!1);var l=Dn(a),u=Dn(a)&&Q2(a),d=Fa(a),p=Co(n,u,o),g={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(l||!l&&!o)&&((qa(a)!=="body"||Qf(d))&&(g=Z2(a)),Dn(a)?(h=Co(a,!0),h.x+=a.clientLeft,h.y+=a.clientTop):d&&(h.x=Zf(d))),{x:p.left+g.scrollLeft-h.x,y:p.top+g.scrollTop-h.y,width:p.width,height:p.height}}function eC(n){var a=new Map,o=new Set,l=[];n.forEach(function(d){a.set(d.name,d)});function u(d){o.add(d.name);var p=[].concat(d.requires||[],d.requiresIfExists||[]);p.forEach(function(g){if(!o.has(g)){var h=a.get(g);h&&u(h)}}),l.push(d)}return n.forEach(function(d){o.has(d.name)||u(d)}),l}function tC(n){var a=eC(n);return h2.reduce(function(o,l){return o.concat(a.filter(function(u){return u.phase===l}))},[])}function nC(n){var a;return function(){return a||(a=new Promise(function(o){Promise.resolve().then(function(){a=void 0,o(n())})})),a}}function aC(n){var a=n.reduce(function(o,l){var u=o[l.name];return o[l.name]=u?Object.assign({},u,l,{options:Object.assign({},u.options,l.options),data:Object.assign({},u.data,l.data)}):l,o},{});return Object.keys(a).map(function(o){return a[o]})}var rb={placement:"bottom",modifiers:[],strategy:"absolute"};function ob(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return!a.some(function(l){return!(l&&typeof l.getBoundingClientRect=="function")})}function rC(n){n===void 0&&(n={});var a=n,o=a.defaultModifiers,l=o===void 0?[]:o,u=a.defaultOptions,d=u===void 0?rb:u;return function(g,h,v){v===void 0&&(v=d);var b={placement:"bottom",orderedModifiers:[],options:Object.assign({},rb,d),modifiersData:{},elements:{reference:g,popper:h},attributes:{},styles:{}},x=[],w=!1,S={state:b,setOptions:function(O){var C=typeof O=="function"?O(b.options):O;R(),b.options=Object.assign({},d,b.options,C),b.scrollParents={reference:gr(g)?Qs(g):g.contextElement?Qs(g.contextElement):[],popper:Qs(h)};var T=tC(aC([].concat(l,b.options.modifiers)));return b.orderedModifiers=T.filter(function(_){return _.enabled}),N(),S.update()},forceUpdate:function(){if(!w){var O=b.elements,C=O.reference,T=O.popper;if(ob(C,T)){b.rects={reference:W2(C,ci(T),b.options.strategy==="fixed"),popper:Yf(T)},b.reset=!1,b.placement=b.options.placement,b.orderedModifiers.forEach(function(W){return b.modifiersData[W.name]=Object.assign({},W.data)});for(var _=0;_<b.orderedModifiers.length;_++){if(b.reset===!0){b.reset=!1,_=-1;continue}var M=b.orderedModifiers[_],L=M.fn,I=M.options,z=I===void 0?{}:I,Y=M.name;typeof L=="function"&&(b=L({state:b,options:z,name:Y,instance:S})||b)}}}},update:nC(function(){return new Promise(function(E){S.forceUpdate(),E(b)})}),destroy:function(){R(),w=!0}};if(!ob(g,h))return S;S.setOptions(v).then(function(E){!w&&v.onFirstUpdate&&v.onFirstUpdate(E)});function N(){b.orderedModifiers.forEach(function(E){var O=E.name,C=E.options,T=C===void 0?{}:C,_=E.effect;if(typeof _=="function"){var M=_({state:b,name:O,instance:S,options:T}),L=function(){};x.push(M||L)}})}function R(){x.forEach(function(E){return E()}),x=[]}return S}}const oC=rC({defaultModifiers:[$2,F2,C2,O2,q2,I2,X2,j2]}),sC=["enabled","placement","strategy","modifiers"];function iC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const lC={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},cC={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:n})=>()=>{const{reference:a,popper:o}=n.elements;if("removeAttribute"in a){const l=(a.getAttribute("aria-describedby")||"").split(",").filter(u=>u.trim()!==o.id);l.length?a.setAttribute("aria-describedby",l.join(",")):a.removeAttribute("aria-describedby")}},fn:({state:n})=>{var a;const{popper:o,reference:l}=n.elements,u=(a=o.getAttribute("role"))==null?void 0:a.toLowerCase();if(o.id&&u==="tooltip"&&"setAttribute"in l){const d=l.getAttribute("aria-describedby");if(d&&d.split(",").indexOf(o.id)!==-1)return;l.setAttribute("aria-describedby",d?`${d},${o.id}`:o.id)}}},uC=[];function zy(n,a,o={}){let{enabled:l=!0,placement:u="bottom",strategy:d="absolute",modifiers:p=uC}=o,g=iC(o,sC);const h=m.useRef(p),v=m.useRef(),b=m.useCallback(()=>{var E;(E=v.current)==null||E.update()},[]),x=m.useCallback(()=>{var E;(E=v.current)==null||E.forceUpdate()},[]),[w,S]=a2(m.useState({placement:u,update:b,forceUpdate:x,attributes:{},styles:{popper:{},arrow:{}}})),N=m.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:E})=>{const O={},C={};Object.keys(E.elements).forEach(T=>{O[T]=E.styles[T],C[T]=E.attributes[T]}),S({state:E,styles:O,attributes:C,update:b,forceUpdate:x,placement:E.placement})}}),[b,x,S]),R=m.useMemo(()=>(Ks(h.current,p)||(h.current=p),h.current),[p]);return m.useEffect(()=>{!v.current||!l||v.current.setOptions({placement:u,strategy:d,modifiers:[...R,N,lC]})},[d,u,N,l,R]),m.useEffect(()=>{if(!(!l||n==null||a==null))return v.current=oC(n,a,Object.assign({},g,{placement:u,strategy:d,modifiers:[...R,cC,N]})),()=>{v.current!=null&&(v.current.destroy(),v.current=void 0,S(E=>Object.assign({},E,{attributes:{},styles:{popper:{}}})))}},[l,n,a]),w}function ni(n,a){if(n.contains)return n.contains(a);if(n.compareDocumentPosition)return n===a||!!(n.compareDocumentPosition(a)&16)}var Qd,sb;function dC(){if(sb)return Qd;sb=1;var n=function(){};return Qd=n,Qd}var fC=dC();const mC=To(fC),ib=()=>{};function pC(n){return n.button===0}function hC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}const ql=n=>n&&("current"in n?n.current:n),lb={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function _y(n,a=ib,{disabled:o,clickTrigger:l="click"}={}){const u=m.useRef(!1),d=m.useRef(!1),p=m.useCallback(v=>{const b=ql(n);mC(!!b,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),u.current=!b||hC(v)||!pC(v)||!!ni(b,v.target)||d.current,d.current=!1},[n]),g=vt(v=>{const b=ql(n);b&&ni(b,v.target)?d.current=!0:d.current=!1}),h=vt(v=>{u.current||a(v)});m.useEffect(()=>{var v,b;if(o||n==null)return;const x=Do(ql(n)),w=x.defaultView||window;let S=(v=w.event)!=null?v:(b=w.parent)==null?void 0:b.event,N=null;lb[l]&&(N=ta(x,lb[l],g,!0));const R=ta(x,l,p,!0),E=ta(x,l,C=>{if(C===S){S=void 0;return}h(C)});let O=[];return"ontouchstart"in x.documentElement&&(O=[].slice.call(x.body.children).map(C=>ta(C,"mousemove",ib))),()=>{N?.(),R(),E(),O.forEach(C=>C())}},[n,o,l,p,g,h])}function gC(n){const a={};return Array.isArray(n)?(n?.forEach(o=>{a[o.name]=o}),a):n||a}function vC(n={}){return Array.isArray(n)?n:Object.keys(n).map(a=>(n[a].name=a,n[a]))}function Uy({enabled:n,enableEvents:a,placement:o,flip:l,offset:u,fixed:d,containerPadding:p,arrowElement:g,popperConfig:h={}}){var v,b,x,w,S;const N=gC(h.modifiers);return Object.assign({},h,{placement:o,enabled:n,strategy:d?"fixed":h.strategy,modifiers:vC(Object.assign({},N,{eventListeners:{enabled:a,options:(v=N.eventListeners)==null?void 0:v.options},preventOverflow:Object.assign({},N.preventOverflow,{options:p?Object.assign({padding:p},(b=N.preventOverflow)==null?void 0:b.options):(x=N.preventOverflow)==null?void 0:x.options}),offset:{options:Object.assign({offset:u},(w=N.offset)==null?void 0:w.options)},arrow:Object.assign({},N.arrow,{enabled:!!g,options:Object.assign({},(S=N.arrow)==null?void 0:S.options,{element:g})}),flip:Object.assign({enabled:!!l},N.flip)}))})}const bC=["children","usePopper"];function yC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const xC=()=>{};function Iy(n={}){const a=m.useContext(pc),[o,l]=bf(),u=m.useRef(!1),{flip:d,offset:p,rootCloseEvent:g,fixed:h=!1,placement:v,popperConfig:b={},enableEventListeners:x=!0,usePopper:w=!!a}=n,S=a?.show==null?!!n.show:a.show;S&&!u.current&&(u.current=!0);const N=L=>{a?.toggle(!1,L)},{placement:R,setMenu:E,menuElement:O,toggleElement:C}=a||{},T=zy(C,O,Uy({placement:v||R||"bottom-start",enabled:w,enableEvents:x??S,offset:p,flip:d,fixed:h,arrowElement:o,popperConfig:b})),_=Object.assign({ref:E||xC,"aria-labelledby":C?.id},T.attributes.popper,{style:T.styles.popper}),M={show:S,placement:R,hasShown:u.current,toggle:a?.toggle,popper:w?T:null,arrowProps:w?Object.assign({ref:l},T.attributes.arrow,{style:T.styles.arrow}):{}};return _y(O,N,{clickTrigger:g,disabled:!S}),[_,M]}function Py(n){let{children:a,usePopper:o=!0}=n,l=yC(n,bC);const[u,d]=Iy(Object.assign({},l,{usePopper:o}));return i.jsx(i.Fragment,{children:a(u,d)})}Py.displayName="DropdownMenu";const $y={prefix:String(Math.round(Math.random()*1e10)),current:0},Hy=qe.createContext($y),wC=qe.createContext(!1);let Wd=new WeakMap;function jC(n=!1){let a=m.useContext(Hy),o=m.useRef(null);if(o.current===null&&!n){var l,u;let d=(u=qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||u===void 0||(l=u.ReactCurrentOwner)===null||l===void 0?void 0:l.current;if(d){let p=Wd.get(d);p==null?Wd.set(d,{id:a.current,state:d.memoizedState}):d.memoizedState!==p.state&&(a.current=p.id,Wd.delete(d))}o.current=++a.current}return o.current}function SC(n){let a=m.useContext(Hy),o=jC(!!n),l=`react-aria${a.prefix}`;return n||`${l}-${o}`}function NC(n){let a=qe.useId(),[o]=m.useState(OC()),l=o?"react-aria":`react-aria${$y.prefix}`;return n||`${l}-${a}`}const Gy=typeof qe.useId=="function"?NC:SC;function EC(){return!1}function CC(){return!0}function AC(n){return()=>{}}function OC(){return typeof qe.useSyncExternalStore=="function"?qe.useSyncExternalStore(AC,EC,CC):m.useContext(wC)}const qy=n=>{var a;return((a=n.getAttribute("role"))==null?void 0:a.toLowerCase())==="menu"},cb=()=>{};function Jy(){const n=Gy(),{show:a=!1,toggle:o=cb,setToggle:l,menuElement:u}=m.useContext(pc)||{},d=m.useCallback(g=>{o(!a,g)},[a,o]),p={id:n,ref:l||cb,onClick:d,"aria-expanded":!!a};return u&&qy(u)&&(p["aria-haspopup"]=!0),[p,{show:a,toggle:o}]}function Fy({children:n}){const[a,o]=Jy();return i.jsx(i.Fragment,{children:n(a,o)})}Fy.displayName="DropdownToggle";const Ln=m.createContext(null),vr=(n,a=null)=>n!=null?String(n):a||null,gc=m.createContext(null);gc.displayName="NavContext";const kC="data-rr-ui-",TC="rrUi";function zo(n){return`${kC}${n}`}function RC(n){return`${TC}${n}`}const DC=["eventKey","disabled","onClick","active","as"];function LC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Vy({key:n,href:a,active:o,disabled:l,onClick:u}){const d=m.useContext(Ln),p=m.useContext(gc),{activeKey:g}=p||{},h=vr(n,a),v=o==null&&n!=null?vr(g)===h:o;return[{onClick:vt(x=>{l||(u?.(x),d&&!x.isPropagationStopped()&&d(h,x))}),"aria-disabled":l||void 0,"aria-selected":v,[zo("dropdown-item")]:""},{isActive:v}]}const Yy=m.forwardRef((n,a)=>{let{eventKey:o,disabled:l,onClick:u,active:d,as:p=Hf}=n,g=LC(n,DC);const[h]=Vy({key:o,href:g.href,disabled:l,onClick:u,active:d});return i.jsx(p,Object.assign({},g,{ref:a},h))});Yy.displayName="DropdownItem";const Xy=m.createContext(Lo?window:void 0);Xy.Provider;function vc(){return m.useContext(Xy)}function ub(){const n=Cy(),a=m.useRef(null),o=m.useCallback(l=>{a.current=l,n()},[n]);return[a,o]}function ui({defaultShow:n,show:a,onSelect:o,onToggle:l,itemSelector:u=`* [${zo("dropdown-item")}]`,focusFirstItemOnShow:d,placement:p="bottom-start",children:g}){const h=vc(),[v,b]=Ey(a,n,l),[x,w]=ub(),S=x.current,[N,R]=ub(),E=N.current,O=fy(v),C=m.useRef(null),T=m.useRef(!1),_=m.useContext(Ln),M=m.useCallback((oe,ne,le=ne?.type)=>{b(oe,{originalEvent:ne,source:le})},[b]),L=vt((oe,ne)=>{o?.(oe,ne),M(!1,ne,"select"),ne.isPropagationStopped()||_?.(oe,ne)}),I=m.useMemo(()=>({toggle:M,placement:p,show:v,menuElement:S,toggleElement:E,setMenu:w,setToggle:R}),[M,p,v,S,E,w,R]);S&&O&&!v&&(T.current=S.contains(S.ownerDocument.activeElement));const z=vt(()=>{E&&E.focus&&E.focus()}),Y=vt(()=>{const oe=C.current;let ne=d;if(ne==null&&(ne=x.current&&qy(x.current)?"keyboard":!1),ne===!1||ne==="keyboard"&&!/^key.+$/.test(oe))return;const le=Wn(x.current,u)[0];le&&le.focus&&le.focus()});m.useEffect(()=>{v?Y():T.current&&(T.current=!1,z())},[v,T,z,Y]),m.useEffect(()=>{C.current=null});const W=(oe,ne)=>{if(!x.current)return null;const le=Wn(x.current,u);let J=le.indexOf(oe)+ne;return J=Math.max(0,Math.min(J,le.length)),le[J]};return UE(m.useCallback(()=>h.document,[h]),"keydown",oe=>{var ne,le;const{key:J}=oe,ie=oe.target,$=(ne=x.current)==null?void 0:ne.contains(ie),ee=(le=N.current)==null?void 0:le.contains(ie);if(/input|textarea/i.test(ie.tagName)&&(J===" "||J!=="Escape"&&$||J==="Escape"&&ie.type==="search")||!$&&!ee||J==="Tab"&&(!x.current||!v))return;C.current=oe.type;const re={originalEvent:oe,source:oe.type};switch(J){case"ArrowUp":{const A=W(ie,-1);A&&A.focus&&A.focus(),oe.preventDefault();return}case"ArrowDown":if(oe.preventDefault(),!v)b(!0,re);else{const A=W(ie,1);A&&A.focus&&A.focus()}return;case"Tab":If(ie.ownerDocument,"keyup",A=>{var V;(A.key==="Tab"&&!A.target||!((V=x.current)!=null&&V.contains(A.target)))&&b(!1,re)},{once:!0});break;case"Escape":J==="Escape"&&(oe.preventDefault(),oe.stopPropagation()),b(!1,re);break}}),i.jsx(Ln.Provider,{value:L,children:i.jsx(pc.Provider,{value:I,children:g})})}ui.displayName="Dropdown";ui.Menu=Py;ui.Toggle=Fy;ui.Item=Yy;const Wf=m.createContext({});Wf.displayName="DropdownContext";const Ky=m.forwardRef(({className:n,bsPrefix:a,as:o="hr",role:l="separator",...u},d)=>(a=ue(a,"dropdown-divider"),i.jsx(o,{ref:d,className:ce(n,a),role:l,...u})));Ky.displayName="DropdownDivider";const Zy=m.forwardRef(({className:n,bsPrefix:a,as:o="div",role:l="heading",...u},d)=>(a=ue(a,"dropdown-header"),i.jsx(o,{ref:d,className:ce(n,a),role:l,...u})));Zy.displayName="DropdownHeader";const Qy=m.forwardRef(({bsPrefix:n,className:a,eventKey:o,disabled:l=!1,onClick:u,active:d,as:p=Gf,...g},h)=>{const v=ue(n,"dropdown-item"),[b,x]=Vy({key:o,href:g.href,disabled:l,onClick:u,active:d});return i.jsx(p,{...g,...b,ref:h,className:ce(a,v,x.isActive&&"active",l&&"disabled")})});Qy.displayName="DropdownItem";const Wy=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},u)=>(a=ue(a,"dropdown-item-text"),i.jsx(o,{ref:u,className:ce(n,a),...l})));Wy.displayName="DropdownItemText";const MC=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",BC=typeof document<"u",em=BC||MC?m.useLayoutEffect:m.useEffect,bc=m.createContext(null);bc.displayName="InputGroupContext";const jr=m.createContext(null);jr.displayName="NavbarContext";function ex(n,a){return n}function tx(n,a,o){const l=o?"top-end":"top-start",u=o?"top-start":"top-end",d=o?"bottom-end":"bottom-start",p=o?"bottom-start":"bottom-end",g=o?"right-start":"left-start",h=o?"right-end":"left-end",v=o?"left-start":"right-start",b=o?"left-end":"right-end";let x=n?p:d;return a==="up"?x=n?u:l:a==="end"?x=n?b:v:a==="start"?x=n?h:g:a==="down-centered"?x="bottom":a==="up-centered"&&(x="top"),x}const nx=m.forwardRef(({bsPrefix:n,className:a,align:o,rootCloseEvent:l,flip:u=!0,show:d,renderOnMount:p,as:g="div",popperConfig:h,variant:v,...b},x)=>{let w=!1;const S=m.useContext(jr),N=ue(n,"dropdown-menu"),{align:R,drop:E,isRTL:O}=m.useContext(Wf);o=o||R;const C=m.useContext(bc),T=[];if(o)if(typeof o=="object"){const oe=Object.keys(o);if(oe.length){const ne=oe[0],le=o[ne];w=le==="start",T.push(`${N}-${ne}-${le}`)}}else o==="end"&&(w=!0);const _=tx(w,E,O),[M,{hasShown:L,popper:I,show:z,toggle:Y}]=Iy({flip:u,rootCloseEvent:l,show:d,usePopper:!S&&T.length===0,offset:[0,2],popperConfig:h,placement:_});if(M.ref=Mo(ex(x),M.ref),em(()=>{z&&I?.update()},[z]),!L&&!p&&!C)return null;typeof g!="string"&&(M.show=z,M.close=()=>Y?.(!1),M.align=o);let W=b.style;return I!=null&&I.placement&&(W={...b.style,...M.style},b["x-placement"]=I.placement),i.jsx(g,{...b,...M,style:W,...(T.length||S)&&{"data-bs-popper":"static"},className:ce(a,N,z&&"show",w&&`${N}-end`,v&&`${N}-${v}`,...T)})});nx.displayName="DropdownMenu";const ax=m.forwardRef(({bsPrefix:n,split:a,className:o,childBsPrefix:l,as:u=Oe,...d},p)=>{const g=ue(n,"dropdown-toggle"),h=m.useContext(pc);l!==void 0&&(d.bsPrefix=l);const[v]=Jy();return v.ref=Mo(v.ref,ex(p)),i.jsx(u,{className:ce(o,g,a&&`${g}-split`,h?.show&&"show"),...v,...d})});ax.displayName="DropdownToggle";const rx=m.forwardRef((n,a)=>{const{bsPrefix:o,drop:l="down",show:u,className:d,align:p="start",onSelect:g,onToggle:h,focusFirstItemOnShow:v,as:b="div",navbar:x,autoClose:w=!0,...S}=cc(n,{show:"onToggle"}),N=m.useContext(bc),R=ue(o,"dropdown"),E=uc(),O=I=>w===!1?I==="click":w==="inside"?I!=="rootClose":w==="outside"?I!=="select":!0,C=sa((I,z)=>{var Y;!((Y=z.originalEvent)==null||(Y=Y.target)==null)&&Y.classList.contains("dropdown-toggle")&&z.source==="mousedown"||(z.originalEvent.currentTarget===document&&(z.source!=="keydown"||z.originalEvent.key==="Escape")&&(z.source="rootClose"),O(z.source)&&h?.(I,z))}),_=tx(p==="end",l,E),M=m.useMemo(()=>({align:p,drop:l,isRTL:E}),[p,l,E]),L={down:R,"down-centered":`${R}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return i.jsx(Wf.Provider,{value:M,children:i.jsx(ui,{placement:_,show:u,onSelect:g,onToggle:C,focusFirstItemOnShow:v,itemSelector:`.${R}-item:not(.disabled):not(:disabled)`,children:N?S.children:i.jsx(b,{...S,ref:a,className:ce(d,u&&"show",L[l])})})})});rx.displayName="Dropdown";const mn=Object.assign(rx,{Toggle:ax,Menu:nx,Item:Qy,ItemText:Wy,Divider:Ky,Header:Zy}),zC={type:Be.string,tooltip:Be.bool,as:Be.elementType},yc=m.forwardRef(({as:n="div",className:a,type:o="valid",tooltip:l=!1,...u},d)=>i.jsx(n,{...u,ref:d,className:ce(a,`${o}-${l?"tooltip":"feedback"}`)}));yc.displayName="Feedback";yc.propTypes=zC;const ca=m.createContext({}),di=m.forwardRef(({id:n,bsPrefix:a,className:o,type:l="checkbox",isValid:u=!1,isInvalid:d=!1,as:p="input",...g},h)=>{const{controlId:v}=m.useContext(ca);return a=ue(a,"form-check-input"),i.jsx(p,{...g,ref:h,type:l,id:n||v,className:ce(o,a,u&&"is-valid",d&&"is-invalid")})});di.displayName="FormCheckInput";const Yl=m.forwardRef(({bsPrefix:n,className:a,htmlFor:o,...l},u)=>{const{controlId:d}=m.useContext(ca);return n=ue(n,"form-check-label"),i.jsx("label",{...l,ref:u,htmlFor:o||d,className:ce(a,n)})});Yl.displayName="FormCheckLabel";const ox=m.forwardRef(({id:n,bsPrefix:a,bsSwitchPrefix:o,inline:l=!1,reverse:u=!1,disabled:d=!1,isValid:p=!1,isInvalid:g=!1,feedbackTooltip:h=!1,feedback:v,feedbackType:b,className:x,style:w,title:S="",type:N="checkbox",label:R,children:E,as:O="input",...C},T)=>{a=ue(a,"form-check"),o=ue(o,"form-switch");const{controlId:_}=m.useContext(ca),M=m.useMemo(()=>({controlId:n||_}),[_,n]),L=!E&&R!=null&&R!==!1||e2(E,Yl),I=i.jsx(di,{...C,type:N==="switch"?"checkbox":N,ref:T,isValid:p,isInvalid:g,disabled:d,as:O});return i.jsx(ca.Provider,{value:M,children:i.jsx("div",{style:w,className:ce(x,L&&a,l&&`${a}-inline`,u&&`${a}-reverse`,N==="switch"&&o),children:E||i.jsxs(i.Fragment,{children:[I,L&&i.jsx(Yl,{title:S,children:R}),v&&i.jsx(yc,{type:b,tooltip:h,children:v})]})})})});ox.displayName="FormCheck";const Xl=Object.assign(ox,{Input:di,Label:Yl}),sx=m.forwardRef(({bsPrefix:n,type:a,size:o,htmlSize:l,id:u,className:d,isValid:p=!1,isInvalid:g=!1,plaintext:h,readOnly:v,as:b="input",...x},w)=>{const{controlId:S}=m.useContext(ca);return n=ue(n,"form-control"),i.jsx(b,{...x,type:a,size:l,ref:w,readOnly:v,id:u||S,className:ce(d,h?`${n}-plaintext`:n,o&&`${n}-${o}`,a==="color"&&`${n}-color`,p&&"is-valid",g&&"is-invalid")})});sx.displayName="FormControl";const _C=Object.assign(sx,{Feedback:yc}),ix=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"form-floating"),i.jsx(o,{ref:u,className:ce(n,a),...l})));ix.displayName="FormFloating";const tm=m.forwardRef(({controlId:n,as:a="div",...o},l)=>{const u=m.useMemo(()=>({controlId:n}),[n]);return i.jsx(ca.Provider,{value:u,children:i.jsx(a,{...o,ref:l})})});tm.displayName="FormGroup";const lx=m.forwardRef(({as:n="label",bsPrefix:a,column:o=!1,visuallyHidden:l=!1,className:u,htmlFor:d,...p},g)=>{const{controlId:h}=m.useContext(ca);a=ue(a,"form-label");let v="col-form-label";typeof o=="string"&&(v=`${v} ${v}-${o}`);const b=ce(u,a,l&&"visually-hidden",o&&v);return d=d||h,o?i.jsx(jn,{ref:g,as:"label",className:b,htmlFor:d,...p}):i.jsx(n,{ref:g,className:b,htmlFor:d,...p})});lx.displayName="FormLabel";const cx=m.forwardRef(({bsPrefix:n,className:a,id:o,...l},u)=>{const{controlId:d}=m.useContext(ca);return n=ue(n,"form-range"),i.jsx("input",{...l,type:"range",ref:u,className:ce(a,n),id:o||d})});cx.displayName="FormRange";const ux=m.forwardRef(({bsPrefix:n,size:a,htmlSize:o,className:l,isValid:u=!1,isInvalid:d=!1,id:p,...g},h)=>{const{controlId:v}=m.useContext(ca);return n=ue(n,"form-select"),i.jsx("select",{...g,size:o,ref:h,className:ce(l,n,a&&`${n}-${a}`,u&&"is-valid",d&&"is-invalid"),id:p||v})});ux.displayName="FormSelect";const dx=m.forwardRef(({bsPrefix:n,className:a,as:o="small",muted:l,...u},d)=>(n=ue(n,"form-text"),i.jsx(o,{...u,ref:d,className:ce(a,n,l&&"text-muted")})));dx.displayName="FormText";const fx=m.forwardRef((n,a)=>i.jsx(Xl,{...n,ref:a,type:"switch"}));fx.displayName="Switch";const UC=Object.assign(fx,{Input:Xl.Input,Label:Xl.Label}),mx=m.forwardRef(({bsPrefix:n,className:a,children:o,controlId:l,label:u,...d},p)=>(n=ue(n,"form-floating"),i.jsxs(tm,{ref:p,className:ce(a,n),controlId:l,...d,children:[o,i.jsx("label",{htmlFor:l,children:u})]})));mx.displayName="FloatingLabel";const IC={_ref:Be.any,validated:Be.bool,as:Be.elementType},nm=m.forwardRef(({className:n,validated:a,as:o="form",...l},u)=>i.jsx(o,{...l,ref:u,className:ce(n,a&&"was-validated")}));nm.displayName="Form";nm.propTypes=IC;const ae=Object.assign(nm,{Group:tm,Control:_C,Floating:ix,Check:Xl,Switch:UC,Label:lx,Text:dx,Range:cx,Select:ux,FloatingLabel:mx}),xc=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},u)=>(a=ue(a,"input-group-text"),i.jsx(o,{ref:u,className:ce(n,a),...l})));xc.displayName="InputGroupText";const PC=n=>i.jsx(xc,{children:i.jsx(di,{type:"checkbox",...n})}),$C=n=>i.jsx(xc,{children:i.jsx(di,{type:"radio",...n})}),px=m.forwardRef(({bsPrefix:n,size:a,hasValidation:o,className:l,as:u="div",...d},p)=>{n=ue(n,"input-group");const g=m.useMemo(()=>({}),[]);return i.jsx(bc.Provider,{value:g,children:i.jsx(u,{ref:p,...d,className:ce(l,n,a&&`${n}-${a}`,o&&"has-validation")})})});px.displayName="InputGroup";const HC=Object.assign(px,{Text:xc,Radio:$C,Checkbox:PC}),db=n=>!n||typeof n=="function"?n:a=>{n.current=a};function GC(n,a){const o=db(n),l=db(a);return u=>{o&&o(u),l&&l(u)}}function fi(n,a){return m.useMemo(()=>GC(n,a),[n,a])}const _o=m.createContext(null),qC=["as","active","eventKey"];function JC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function hx({key:n,onClick:a,active:o,id:l,role:u,disabled:d}){const p=m.useContext(Ln),g=m.useContext(gc),h=m.useContext(_o);let v=o;const b={role:u};if(g){!u&&g.role==="tablist"&&(b.role="tab");const x=g.getControllerId(n??null),w=g.getControlledId(n??null);b[zo("event-key")]=n,b.id=x||l,v=o==null&&n!=null?g.activeKey===n:o,(v||!(h!=null&&h.unmountOnExit)&&!(h!=null&&h.mountOnEnter))&&(b["aria-controls"]=w)}return b.role==="tab"&&(b["aria-selected"]=v,v||(b.tabIndex=-1),d&&(b.tabIndex=-1,b["aria-disabled"]=!0)),b.onClick=vt(x=>{d||(a?.(x),n!=null&&p&&!x.isPropagationStopped()&&p(n,x))}),[b,{isActive:v}]}const gx=m.forwardRef((n,a)=>{let{as:o=Hf,active:l,eventKey:u}=n,d=JC(n,qC);const[p,g]=hx(Object.assign({key:vr(u,d.href),active:l},d));return p[zo("active")]=g.isActive,i.jsx(o,Object.assign({},d,p,{ref:a}))});gx.displayName="NavItem";const FC=["as","onSelect","activeKey","role","onKeyDown"];function VC(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const fb=()=>{},mb=zo("event-key"),vx=m.forwardRef((n,a)=>{let{as:o="div",onSelect:l,activeKey:u,role:d,onKeyDown:p}=n,g=VC(n,FC);const h=Cy(),v=m.useRef(!1),b=m.useContext(Ln),x=m.useContext(_o);let w,S;x&&(d=d||"tablist",u=x.activeKey,w=x.getControlledId,S=x.getControllerId);const N=m.useRef(null),R=T=>{const _=N.current;if(!_)return null;const M=Wn(_,`[${mb}]:not([aria-disabled=true])`),L=_.querySelector("[aria-selected=true]");if(!L||L!==document.activeElement)return null;const I=M.indexOf(L);if(I===-1)return null;let z=I+T;return z>=M.length&&(z=0),z<0&&(z=M.length-1),M[z]},E=(T,_)=>{T!=null&&(l?.(T,_),b?.(T,_))},O=T=>{if(p?.(T),!x)return;let _;switch(T.key){case"ArrowLeft":case"ArrowUp":_=R(-1);break;case"ArrowRight":case"ArrowDown":_=R(1);break;default:return}_&&(T.preventDefault(),E(_.dataset[RC("EventKey")]||null,T),v.current=!0,h())};m.useEffect(()=>{if(N.current&&v.current){const T=N.current.querySelector(`[${mb}][aria-selected=true]`);T?.focus()}v.current=!1});const C=fi(a,N);return i.jsx(Ln.Provider,{value:E,children:i.jsx(gc.Provider,{value:{role:d,activeKey:vr(u),getControlledId:w||fb,getControllerId:S||fb},children:i.jsx(o,Object.assign({},g,{onKeyDown:O,ref:C,role:d}))})})});vx.displayName="Nav";const YC=Object.assign(vx,{Item:gx});var _l;function pb(n){if((!_l&&_l!==0||n)&&Lo){var a=document.createElement("div");a.style.position="absolute",a.style.top="-9999px",a.style.width="50px",a.style.height="50px",a.style.overflow="scroll",document.body.appendChild(a),_l=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return _l}function XC(){return m.useState(null)}function ef(n){n===void 0&&(n=Do());try{var a=n.activeElement;return!a||!a.nodeName?null:a}catch{return n.body}}function KC(n){const a=m.useRef(n);return a.current=n,a}function ZC(n){const a=KC(n);m.useEffect(()=>()=>a.current(),[])}function QC(n=document){const a=n.defaultView;return Math.abs(a.innerWidth-n.documentElement.clientWidth)}const hb=zo("modal-open");class am{constructor({ownerDocument:a,handleContainerOverflow:o=!0,isRTL:l=!1}={}){this.handleContainerOverflow=o,this.isRTL=l,this.modals=[],this.ownerDocument=a}getScrollbarWidth(){return QC(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(a){}removeModalAttributes(a){}setContainerStyle(a){const o={overflow:"hidden"},l=this.isRTL?"paddingLeft":"paddingRight",u=this.getElement();a.style={overflow:u.style.overflow,[l]:u.style[l]},a.scrollBarWidth&&(o[l]=`${parseInt(aa(u,l)||"0",10)+a.scrollBarWidth}px`),u.setAttribute(hb,""),aa(u,o)}reset(){[...this.modals].forEach(a=>this.remove(a))}removeContainerStyle(a){const o=this.getElement();o.removeAttribute(hb),Object.assign(o.style,a.style)}add(a){let o=this.modals.indexOf(a);return o!==-1||(o=this.modals.length,this.modals.push(a),this.setModalAttributes(a),o!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),o}remove(a){const o=this.modals.indexOf(a);o!==-1&&(this.modals.splice(o,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(a))}isTopModal(a){return!!this.modals.length&&this.modals[this.modals.length-1]===a}}const tf=(n,a)=>Lo?n==null?(a||Do()).body:(typeof n=="function"&&(n=n()),n&&"current"in n&&(n=n.current),n&&("nodeType"in n||n.getBoundingClientRect)?n:null):null;function jf(n,a){const o=vc(),[l,u]=m.useState(()=>tf(n,o?.document));if(!l){const d=tf(n);d&&u(d)}return m.useEffect(()=>{},[a,l]),m.useEffect(()=>{const d=tf(n);d!==l&&u(d)},[n,l]),l}function rm({children:n,in:a,onExited:o,mountOnEnter:l,unmountOnExit:u}){const d=m.useRef(null),p=m.useRef(a),g=vt(o);m.useEffect(()=>{a?p.current=!0:g(d.current)},[a,g]);const h=fi(d,wr(n)),v=m.cloneElement(n,{ref:h});return a?v:u||!p.current&&l?null:v}const WC=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function eA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function tA(n){let{onEnter:a,onEntering:o,onEntered:l,onExit:u,onExiting:d,onExited:p,addEndListener:g,children:h}=n,v=eA(n,WC);const b=m.useRef(null),x=fi(b,wr(h)),w=_=>M=>{_&&b.current&&_(b.current,M)},S=m.useCallback(w(a),[a]),N=m.useCallback(w(o),[o]),R=m.useCallback(w(l),[l]),E=m.useCallback(w(u),[u]),O=m.useCallback(w(d),[d]),C=m.useCallback(w(p),[p]),T=m.useCallback(w(g),[g]);return Object.assign({},v,{nodeRef:b},a&&{onEnter:S},o&&{onEntering:N},l&&{onEntered:R},u&&{onExit:E},d&&{onExiting:O},p&&{onExited:C},g&&{addEndListener:T},{children:typeof h=="function"?(_,M)=>h(_,Object.assign({},M,{ref:x})):m.cloneElement(h,{ref:x})})}const nA=["component"];function aA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}const rA=m.forwardRef((n,a)=>{let{component:o}=n,l=aA(n,nA);const u=tA(l);return i.jsx(o,Object.assign({ref:a},u))});function oA({in:n,onTransition:a}){const o=m.useRef(null),l=m.useRef(!0),u=vt(a);return Vv(()=>{if(!o.current)return;let d=!1;return u({in:n,element:o.current,initial:l.current,isStale:()=>d}),()=>{d=!0}},[n,u]),Vv(()=>(l.current=!1,()=>{l.current=!0}),[]),o}function sA({children:n,in:a,onExited:o,onEntered:l,transition:u}){const[d,p]=m.useState(!a);a&&d&&p(!1);const g=oA({in:!!a,onTransition:v=>{const b=()=>{v.isStale()||(v.in?l?.(v.element,v.initial):(p(!0),o?.(v.element)))};Promise.resolve(u(v)).then(b,x=>{throw v.in||p(!0),x})}}),h=fi(g,wr(n));return d&&!a?null:m.cloneElement(n,{ref:h})}function Sf(n,a,o){return n?i.jsx(rA,Object.assign({},o,{component:n})):a?i.jsx(sA,Object.assign({},o,{transition:a})):i.jsx(rm,Object.assign({},o))}const iA=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function lA(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}let nf;function cA(n){return nf||(nf=new am({ownerDocument:n?.document})),nf}function uA(n){const a=vc(),o=n||cA(a),l=m.useRef({dialog:null,backdrop:null});return Object.assign(l.current,{add:()=>o.add(l.current),remove:()=>o.remove(l.current),isTopModal:()=>o.isTopModal(l.current),setDialogRef:m.useCallback(u=>{l.current.dialog=u},[]),setBackdropRef:m.useCallback(u=>{l.current.backdrop=u},[])})}const bx=m.forwardRef((n,a)=>{let{show:o=!1,role:l="dialog",className:u,style:d,children:p,backdrop:g=!0,keyboard:h=!0,onBackdropClick:v,onEscapeKeyDown:b,transition:x,runTransition:w,backdropTransition:S,runBackdropTransition:N,autoFocus:R=!0,enforceFocus:E=!0,restoreFocus:O=!0,restoreFocusOptions:C,renderDialog:T,renderBackdrop:_=ze=>i.jsx("div",Object.assign({},ze)),manager:M,container:L,onShow:I,onHide:z=()=>{},onExit:Y,onExited:W,onExiting:oe,onEnter:ne,onEntering:le,onEntered:J}=n,ie=lA(n,iA);const $=vc(),ee=jf(L),D=uA(M),re=dy(),A=fy(o),[V,K]=m.useState(!o),te=m.useRef(null);m.useImperativeHandle(a,()=>D,[D]),Lo&&!A&&o&&(te.current=ef($?.document)),o&&V&&K(!1);const se=vt(()=>{if(D.add(),We.current=ta(document,"keydown",we),Qe.current=ta(document,"focus",()=>setTimeout(me),!0),I&&I(),R){var ze,_n;const st=ef((ze=(_n=D.dialog)==null?void 0:_n.ownerDocument)!=null?ze:$?.document);D.dialog&&st&&!ni(D.dialog,st)&&(te.current=st,D.dialog.focus())}}),fe=vt(()=>{if(D.remove(),We.current==null||We.current(),Qe.current==null||Qe.current(),O){var ze;(ze=te.current)==null||ze.focus==null||ze.focus(C),te.current=null}});m.useEffect(()=>{!o||!ee||se()},[o,ee,se]),m.useEffect(()=>{V&&fe()},[V,fe]),ZC(()=>{fe()});const me=vt(()=>{if(!E||!re()||!D.isTopModal())return;const ze=ef($?.document);D.dialog&&ze&&!ni(D.dialog,ze)&&D.dialog.focus()}),$e=vt(ze=>{ze.target===ze.currentTarget&&(v?.(ze),g===!0&&z())}),we=vt(ze=>{h&&iy(ze)&&D.isTopModal()&&(b?.(ze),ze.defaultPrevented||z())}),Qe=m.useRef(),We=m.useRef(),Ct=(...ze)=>{K(!0),W?.(...ze)};if(!ee)return null;const Kt=Object.assign({role:l,ref:D.setDialogRef,"aria-modal":l==="dialog"?!0:void 0},ie,{style:d,className:u,tabIndex:-1});let Zt=T?T(Kt):i.jsx("div",Object.assign({},Kt,{children:m.cloneElement(p,{role:"document"})}));Zt=Sf(x,w,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!o,onExit:Y,onExiting:oe,onExited:Ct,onEnter:ne,onEntering:le,onEntered:J,children:Zt});let Qt=null;return g&&(Qt=_({ref:D.setBackdropRef,onClick:$e}),Qt=Sf(S,N,{in:!!o,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Qt})),i.jsx(i.Fragment,{children:mr.createPortal(i.jsxs(i.Fragment,{children:[Qt,Zt]}),ee)})});bx.displayName="Modal";const yx=Object.assign(bx,{Manager:am});function Nf(n,a){return n.classList?!!a&&n.classList.contains(a):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+a+" ")!==-1}function dA(n,a){n.classList?n.classList.add(a):Nf(n,a)||(typeof n.className=="string"?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a))}function gb(n,a){return n.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function fA(n,a){n.classList?n.classList.remove(a):typeof n.className=="string"?n.className=gb(n.className,a):n.setAttribute("class",gb(n.className&&n.className.baseVal||"",a))}const ho={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class xx extends am{adjustAndStore(a,o,l){const u=o.style[a];o.dataset[a]=u,aa(o,{[a]:`${parseFloat(aa(o,a))+l}px`})}restore(a,o){const l=o.dataset[a];l!==void 0&&(delete o.dataset[a],aa(o,{[a]:l}))}setContainerStyle(a){super.setContainerStyle(a);const o=this.getElement();if(dA(o,"modal-open"),!a.scrollBarWidth)return;const l=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";Wn(o,ho.FIXED_CONTENT).forEach(d=>this.adjustAndStore(l,d,a.scrollBarWidth)),Wn(o,ho.STICKY_CONTENT).forEach(d=>this.adjustAndStore(u,d,-a.scrollBarWidth)),Wn(o,ho.NAVBAR_TOGGLER).forEach(d=>this.adjustAndStore(u,d,a.scrollBarWidth))}removeContainerStyle(a){super.removeContainerStyle(a);const o=this.getElement();fA(o,"modal-open");const l=this.isRTL?"paddingLeft":"paddingRight",u=this.isRTL?"marginLeft":"marginRight";Wn(o,ho.FIXED_CONTENT).forEach(d=>this.restore(l,d)),Wn(o,ho.STICKY_CONTENT).forEach(d=>this.restore(u,d)),Wn(o,ho.NAVBAR_TOGGLER).forEach(d=>this.restore(u,d))}}let af;function wx(n){return af||(af=new xx(n)),af}const jx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"modal-body"),i.jsx(o,{ref:u,className:ce(n,a),...l})));jx.displayName="ModalBody";const om=m.createContext({onHide(){}}),sm=m.forwardRef(({bsPrefix:n,className:a,contentClassName:o,centered:l,size:u,fullscreen:d,children:p,scrollable:g,...h},v)=>{n=ue(n,"modal");const b=`${n}-dialog`,x=typeof d=="string"?`${n}-fullscreen-${d}`:`${n}-fullscreen`;return i.jsx("div",{...h,ref:v,className:ce(b,a,u&&`${n}-${u}`,l&&`${b}-centered`,g&&`${b}-scrollable`,d&&x),children:i.jsx("div",{className:ce(`${n}-content`,o),children:p})})});sm.displayName="ModalDialog";const Sx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"modal-footer"),i.jsx(o,{ref:u,className:ce(n,a),...l})));Sx.displayName="ModalFooter";const im=m.forwardRef(({closeLabel:n="Close",closeVariant:a,closeButton:o=!1,onHide:l,children:u,...d},p)=>{const g=m.useContext(om),h=sa(()=>{g?.onHide(),l?.()});return i.jsxs("div",{ref:p,...d,children:[u,o&&i.jsx(mc,{"aria-label":n,variant:a,onClick:h})]})});im.displayName="AbstractModalHeader";const Nx=m.forwardRef(({bsPrefix:n,className:a,closeLabel:o="Close",closeButton:l=!1,...u},d)=>(n=ue(n,"modal-header"),i.jsx(im,{ref:d,...u,className:ce(a,n),closeLabel:o,closeButton:l})));Nx.displayName="ModalHeader";const mA=fc("h4"),Ex=m.forwardRef(({className:n,bsPrefix:a,as:o=mA,...l},u)=>(a=ue(a,"modal-title"),i.jsx(o,{ref:u,className:ce(n,a),...l})));Ex.displayName="ModalTitle";function pA(n){return i.jsx(ia,{...n,timeout:null})}function hA(n){return i.jsx(ia,{...n,timeout:null})}const Cx=m.forwardRef(({bsPrefix:n,className:a,style:o,dialogClassName:l,contentClassName:u,children:d,dialogAs:p=sm,"data-bs-theme":g,"aria-labelledby":h,"aria-describedby":v,"aria-label":b,show:x=!1,animation:w=!0,backdrop:S=!0,keyboard:N=!0,onEscapeKeyDown:R,onShow:E,onHide:O,container:C,autoFocus:T=!0,enforceFocus:_=!0,restoreFocus:M=!0,restoreFocusOptions:L,onEntered:I,onExit:z,onExiting:Y,onEnter:W,onEntering:oe,onExited:ne,backdropClassName:le,manager:J,...ie},$)=>{const[ee,D]=m.useState({}),[re,A]=m.useState(!1),V=m.useRef(!1),K=m.useRef(!1),te=m.useRef(null),[se,fe]=XC(),me=Mo($,fe),$e=sa(O),we=uc();n=ue(n,"modal");const Qe=m.useMemo(()=>({onHide:$e}),[$e]);function We(){return J||wx({isRTL:we})}function Ct(je){if(!Lo)return;const Fe=We().getScrollbarWidth()>0,At=je.scrollHeight>Do(je).documentElement.clientHeight;D({paddingRight:Fe&&!At?pb():void 0,paddingLeft:!Fe&&At?pb():void 0})}const Kt=sa(()=>{se&&Ct(se.dialog)});jy(()=>{vf(window,"resize",Kt),te.current==null||te.current()});const Zt=()=>{V.current=!0},Qt=je=>{V.current&&se&&je.target===se.dialog&&(K.current=!0),V.current=!1},ze=()=>{A(!0),te.current=ly(se.dialog,()=>{A(!1)})},_n=je=>{je.target===je.currentTarget&&ze()},st=je=>{if(S==="static"){_n(je);return}if(K.current||je.target!==je.currentTarget){K.current=!1;return}O?.()},Fo=je=>{N?R?.(je):(je.preventDefault(),S==="static"&&ze())},Er=(je,Fe)=>{je&&Ct(je),W?.(je,Fe)},Wt=je=>{te.current==null||te.current(),z?.(je)},vn=(je,Fe)=>{oe?.(je,Fe),If(window,"resize",Kt)},Cr=je=>{je&&(je.style.display=""),ne?.(je),vf(window,"resize",Kt)},Va=m.useCallback(je=>i.jsx("div",{...je,className:ce(`${n}-backdrop`,le,!w&&"show")}),[w,le,n]),ha={...o,...ee};ha.display="block";const Ar=je=>i.jsx("div",{role:"dialog",...je,style:ha,className:ce(a,n,re&&`${n}-static`,!w&&"show"),onClick:S?st:void 0,onMouseUp:Qt,"data-bs-theme":g,"aria-label":b,"aria-labelledby":h,"aria-describedby":v,children:i.jsx(p,{...ie,onMouseDown:Zt,className:l,contentClassName:u,children:d})});return i.jsx(om.Provider,{value:Qe,children:i.jsx(yx,{show:x,ref:me,backdrop:S,container:C,keyboard:!0,autoFocus:T,enforceFocus:_,restoreFocus:M,restoreFocusOptions:L,onEscapeKeyDown:Fo,onShow:E,onHide:O,onEnter:Er,onEntering:vn,onEntered:I,onExit:Wt,onExiting:Y,onExited:Cr,manager:We(),transition:w?pA:void 0,backdropTransition:w?hA:void 0,renderBackdrop:Va,renderDialog:Ar})})});Cx.displayName="Modal";const ye=Object.assign(Cx,{Body:jx,Header:Nx,Title:Ex,Footer:Sx,Dialog:sm,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),lm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"nav-item"),i.jsx(o,{ref:u,className:ce(n,a),...l})));lm.displayName="NavItem";const wc=m.forwardRef(({bsPrefix:n,className:a,as:o=Gf,active:l,eventKey:u,disabled:d=!1,...p},g)=>{n=ue(n,"nav-link");const[h,v]=hx({key:vr(u,p.href),active:l,disabled:d,...p});return i.jsx(o,{...p,...h,ref:g,disabled:d,className:ce(a,n,d&&"disabled",v.isActive&&"active")})});wc.displayName="NavLink";const Ax=m.forwardRef((n,a)=>{const{as:o="div",bsPrefix:l,variant:u,fill:d=!1,justify:p=!1,navbar:g,navbarScroll:h,className:v,activeKey:b,...x}=cc(n,{activeKey:"onSelect"}),w=ue(l,"nav");let S,N,R=!1;const E=m.useContext(jr),O=m.useContext(Jf);return E?(S=E.bsPrefix,R=g??!0):O&&({cardHeaderBsPrefix:N}=O),i.jsx(YC,{as:o,ref:a,activeKey:b,className:ce(v,{[w]:!R,[`${S}-nav`]:R,[`${S}-nav-scroll`]:R&&h,[`${N}-${u}`]:!!N,[`${w}-${u}`]:!!u,[`${w}-fill`]:d,[`${w}-justified`]:p}),...x})});Ax.displayName="Nav";const qt=Object.assign(Ax,{Item:lm,Link:wc}),Ox=m.forwardRef(({bsPrefix:n,className:a,as:o,...l},u)=>{n=ue(n,"navbar-brand");const d=o||(l.href?"a":"span");return i.jsx(d,{...l,ref:u,className:ce(a,n)})});Ox.displayName="NavbarBrand";const kx=m.forwardRef(({children:n,bsPrefix:a,...o},l)=>{a=ue(a,"navbar-collapse");const u=m.useContext(jr);return i.jsx(uy,{in:!!(u&&u.expanded),...o,children:i.jsx("div",{ref:l,className:a,children:n})})});kx.displayName="NavbarCollapse";const Tx=m.forwardRef(({bsPrefix:n,className:a,children:o,label:l="Toggle navigation",as:u="button",onClick:d,...p},g)=>{n=ue(n,"navbar-toggler");const{onToggle:h,expanded:v}=m.useContext(jr)||{},b=sa(x=>{d&&d(x),h&&h()});return u==="button"&&(p.type="button"),i.jsx(u,{...p,ref:g,onClick:b,"aria-label":l,className:ce(a,n,!v&&"collapsed"),children:o||i.jsx("span",{className:`${n}-icon`})})});Tx.displayName="NavbarToggle";const Ef=new WeakMap,vb=(n,a)=>{if(!n||!a)return;const o=Ef.get(a)||new Map;Ef.set(a,o);let l=o.get(n);return l||(l=a.matchMedia(n),l.refCount=0,o.set(l.media,l)),l};function gA(n,a=typeof window>"u"?void 0:window){const o=vb(n,a),[l,u]=m.useState(()=>o?o.matches:!1);return em(()=>{let d=vb(n,a);if(!d)return u(!1);let p=Ef.get(a);const g=()=>{u(d.matches)};return d.refCount++,d.addListener(g),g(),()=>{d.removeListener(g),d.refCount--,d.refCount<=0&&p?.delete(d.media),d=void 0}},[n]),l}function vA(n){const a=Object.keys(n);function o(g,h){return g===h?h:g?`${g} and ${h}`:h}function l(g){return a[Math.min(a.indexOf(g)+1,a.length-1)]}function u(g){const h=l(g);let v=n[h];return typeof v=="number"?v=`${v-.2}px`:v=`calc(${v} - 0.2px)`,`(max-width: ${v})`}function d(g){let h=n[g];return typeof h=="number"&&(h=`${h}px`),`(min-width: ${h})`}function p(g,h,v){let b;typeof g=="object"?(b=g,v=h,h=!0):(h=h||!0,b={[g]:h});let x=m.useMemo(()=>Object.entries(b).reduce((w,[S,N])=>((N==="up"||N===!0)&&(w=o(w,d(S))),(N==="down"||N===!0)&&(w=o(w,u(S))),w),""),[JSON.stringify(b)]);return gA(x,v)}return p}const bA=vA({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),Rx=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"offcanvas-body"),i.jsx(o,{ref:u,className:ce(n,a),...l})));Rx.displayName="OffcanvasBody";const yA={[fn]:"show",[ea]:"show"},Dx=m.forwardRef(({bsPrefix:n,className:a,children:o,in:l=!1,mountOnEnter:u=!1,unmountOnExit:d=!1,appear:p=!1,...g},h)=>(n=ue(n,"offcanvas"),i.jsx(dc,{ref:h,addEndListener:Pf,in:l,mountOnEnter:u,unmountOnExit:d,appear:p,...g,childRef:wr(o),children:(v,b)=>m.cloneElement(o,{...b,className:ce(a,o.props.className,(v===fn||v===So)&&`${n}-toggling`,yA[v])})})));Dx.displayName="OffcanvasToggling";const Lx=m.forwardRef(({bsPrefix:n,className:a,closeLabel:o="Close",closeButton:l=!1,...u},d)=>(n=ue(n,"offcanvas-header"),i.jsx(im,{ref:d,...u,className:ce(a,n),closeLabel:o,closeButton:l})));Lx.displayName="OffcanvasHeader";const xA=fc("h5"),Mx=m.forwardRef(({className:n,bsPrefix:a,as:o=xA,...l},u)=>(a=ue(a,"offcanvas-title"),i.jsx(o,{ref:u,className:ce(n,a),...l})));Mx.displayName="OffcanvasTitle";function wA(n){return i.jsx(Dx,{...n})}function jA(n){return i.jsx(ia,{...n})}const Bx=m.forwardRef(({bsPrefix:n,className:a,children:o,"aria-labelledby":l,placement:u="start",responsive:d,show:p=!1,backdrop:g=!0,keyboard:h=!0,scroll:v=!1,onEscapeKeyDown:b,onShow:x,onHide:w,container:S,autoFocus:N=!0,enforceFocus:R=!0,restoreFocus:E=!0,restoreFocusOptions:O,onEntered:C,onExit:T,onExiting:_,onEnter:M,onEntering:L,onExited:I,backdropClassName:z,manager:Y,renderStaticNode:W=!1,...oe},ne)=>{const le=m.useRef();n=ue(n,"offcanvas");const[J,ie]=m.useState(!1),$=sa(w),ee=bA(d||"xs","up");m.useEffect(()=>{ie(d?p&&!ee:p)},[p,d,ee]);const D=m.useMemo(()=>({onHide:$}),[$]);function re(){return Y||(v?(le.current||(le.current=new xx({handleContainerOverflow:!1})),le.current):wx())}const A=(se,...fe)=>{se&&(se.style.visibility="visible"),M?.(se,...fe)},V=(se,...fe)=>{se&&(se.style.visibility=""),I?.(...fe)},K=m.useCallback(se=>i.jsx("div",{...se,className:ce(`${n}-backdrop`,z)}),[z,n]),te=se=>i.jsx("div",{...se,...oe,className:ce(a,d?`${n}-${d}`:n,`${n}-${u}`),"aria-labelledby":l,children:o});return i.jsxs(i.Fragment,{children:[!J&&(d||W)&&te({}),i.jsx(om.Provider,{value:D,children:i.jsx(yx,{show:J,ref:ne,backdrop:g,container:S,keyboard:h,autoFocus:N,enforceFocus:R&&!v,restoreFocus:E,restoreFocusOptions:O,onEscapeKeyDown:b,onShow:x,onHide:$,onEnter:A,onEntering:L,onEntered:C,onExit:T,onExiting:_,onExited:V,manager:re(),transition:wA,backdropTransition:jA,renderBackdrop:K,renderDialog:te})})]})});Bx.displayName="Offcanvas";const Pa=Object.assign(Bx,{Body:Rx,Header:Lx,Title:Mx}),zx=m.forwardRef(({onHide:n,...a},o)=>{const l=m.useContext(jr),u=sa(()=>{l==null||l.onToggle==null||l.onToggle(),n?.()});return i.jsx(Pa,{ref:o,show:!!(l!=null&&l.expanded),...a,renderStaticNode:!0,onHide:u})});zx.displayName="NavbarOffcanvas";const _x=m.forwardRef(({className:n,bsPrefix:a,as:o="span",...l},u)=>(a=ue(a,"navbar-text"),i.jsx(o,{ref:u,className:ce(n,a),...l})));_x.displayName="NavbarText";const Ux=m.forwardRef((n,a)=>{const{bsPrefix:o,expand:l=!0,variant:u="light",bg:d,fixed:p,sticky:g,className:h,as:v="nav",expanded:b,onToggle:x,onSelect:w,collapseOnSelect:S=!1,...N}=cc(n,{expanded:"onToggle"}),R=ue(o,"navbar"),E=m.useCallback((...T)=>{w?.(...T),S&&b&&x?.(!1)},[w,S,b,x]);N.role===void 0&&v!=="nav"&&(N.role="navigation");let O=`${R}-expand`;typeof l=="string"&&(O=`${O}-${l}`);const C=m.useMemo(()=>({onToggle:()=>x?.(!b),bsPrefix:R,expanded:!!b,expand:l}),[R,b,l,x]);return i.jsx(jr.Provider,{value:C,children:i.jsx(Ln.Provider,{value:E,children:i.jsx(v,{ref:a,...N,className:ce(h,R,l&&O,u&&`${R}-${u}`,d&&`bg-${d}`,g&&`sticky-${g}`,p&&`fixed-${p}`)})})})});Ux.displayName="Navbar";const Ul=Object.assign(Ux,{Brand:Ox,Collapse:kx,Offcanvas:zx,Text:_x,Toggle:Tx}),Ix=m.forwardRef(({id:n,title:a,children:o,bsPrefix:l,className:u,rootCloseEvent:d,menuRole:p,disabled:g,active:h,renderMenuOnMount:v,menuVariant:b,...x},w)=>{const S=ue(void 0,"nav-item");return i.jsxs(mn,{ref:w,...x,className:ce(u,S),children:[i.jsx(mn.Toggle,{id:n,eventKey:null,active:h,disabled:g,childBsPrefix:l,as:wc,children:a}),i.jsx(mn.Menu,{role:p,renderOnMount:v,rootCloseEvent:d,variant:b,children:o})]})});Ix.displayName="NavDropdown";const un=Object.assign(Ix,{Item:mn.Item,ItemText:mn.ItemText,Divider:mn.Divider,Header:mn.Header}),SA=()=>{};function NA(n,a,{disabled:o,clickTrigger:l}={}){const u=a||SA;_y(n,u,{disabled:o,clickTrigger:l});const d=vt(p=>{iy(p)&&u(p)});m.useEffect(()=>{if(o||n==null)return;const p=Do(ql(n));let g=(p.defaultView||window).event;const h=ta(p,"keyup",v=>{if(v===g){g=void 0;return}d(v)});return()=>{h()}},[n,o,d])}const Px=m.forwardRef((n,a)=>{const{flip:o,offset:l,placement:u,containerPadding:d,popperConfig:p={},transition:g,runTransition:h}=n,[v,b]=bf(),[x,w]=bf(),S=fi(b,a),N=jf(n.container),R=jf(n.target),[E,O]=m.useState(!n.show),C=zy(R,v,Uy({placement:u,enableEvents:!!n.show,containerPadding:d||5,flip:o,offset:l,arrowElement:x,popperConfig:p}));n.show&&E&&O(!1);const T=(...oe)=>{O(!0),n.onExited&&n.onExited(...oe)},_=n.show||!E;if(NA(v,n.onHide,{disabled:!n.rootClose||n.rootCloseDisabled,clickTrigger:n.rootCloseEvent}),!_)return null;const{onExit:M,onExiting:L,onEnter:I,onEntering:z,onEntered:Y}=n;let W=n.children(Object.assign({},C.attributes.popper,{style:C.styles.popper,ref:S}),{popper:C,placement:u,show:!!n.show,arrowProps:Object.assign({},C.attributes.arrow,{style:C.styles.arrow,ref:w})});return W=Sf(g,h,{in:!!n.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:W,onExit:M,onExiting:L,onExited:T,onEnter:I,onEntering:z,onEntered:Y}),N?mr.createPortal(W,N):null});Px.displayName="Overlay";const $x=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"popover-header"),i.jsx(o,{ref:u,className:ce(n,a),...l})));$x.displayName="PopoverHeader";const cm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"popover-body"),i.jsx(o,{ref:u,className:ce(n,a),...l})));cm.displayName="PopoverBody";function Hx(n,a){let o=n;return n==="left"?o=a?"end":"start":n==="right"&&(o=a?"start":"end"),o}function Gx(n="absolute"){return{position:n,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const qx=m.forwardRef(({bsPrefix:n,placement:a="right",className:o,style:l,children:u,body:d,arrowProps:p,hasDoneInitialMeasure:g,popper:h,show:v,...b},x)=>{const w=ue(n,"popover"),S=uc(),[N]=a?.split("-")||[],R=Hx(N,S);let E=l;return v&&!g&&(E={...l,...Gx(h?.strategy)}),i.jsxs("div",{ref:x,role:"tooltip",style:E,"x-placement":N,className:ce(o,w,N&&`bs-popover-${R}`),...b,children:[i.jsx("div",{className:"popover-arrow",...p}),d?i.jsx(cm,{children:u}):u]})});qx.displayName="Popover";const EA=Object.assign(qx,{Header:$x,Body:cm,POPPER_OFFSET:[0,8]}),Jx=m.forwardRef(({bsPrefix:n,placement:a="right",className:o,style:l,children:u,arrowProps:d,hasDoneInitialMeasure:p,popper:g,show:h,...v},b)=>{n=ue(n,"tooltip");const x=uc(),[w]=a?.split("-")||[],S=Hx(w,x);let N=l;return h&&!p&&(N={...l,...Gx(g?.strategy)}),i.jsxs("div",{ref:b,style:N,role:"tooltip","x-placement":w,className:ce(o,n,`bs-tooltip-${S}`),...v,children:[i.jsx("div",{className:"tooltip-arrow",...d}),i.jsx("div",{className:`${n}-inner`,children:u})]})});Jx.displayName="Tooltip";const go=Object.assign(Jx,{TOOLTIP_OFFSET:[0,6]});function CA(n){const a=m.useRef(null),o=ue(void 0,"popover"),l=ue(void 0,"tooltip"),u=m.useMemo(()=>({name:"offset",options:{offset:()=>{if(n)return n;if(a.current){if(Nf(a.current,o))return EA.POPPER_OFFSET;if(Nf(a.current,l))return go.TOOLTIP_OFFSET}return[0,0]}}}),[n,o,l]);return[a,[u]]}function AA(n,a){const{ref:o}=n,{ref:l}=a;n.ref=o.__wrapped||(o.__wrapped=u=>o(Fl(u))),a.ref=l.__wrapped||(l.__wrapped=u=>l(Fl(u)))}const Fx=m.forwardRef(({children:n,transition:a=ia,popperConfig:o={},rootClose:l=!1,placement:u="top",show:d=!1,...p},g)=>{const h=m.useRef({}),[v,b]=m.useState(null),[x,w]=CA(p.offset),S=Mo(g,x),N=a===!0?ia:a||void 0,R=sa(E=>{b(E),o==null||o.onFirstUpdate==null||o.onFirstUpdate(E)});return em(()=>{v&&p.target&&(h.current.scheduleUpdate==null||h.current.scheduleUpdate())},[v,p.target]),m.useEffect(()=>{d||b(null)},[d]),i.jsx(Px,{...p,ref:S,popperConfig:{...o,modifiers:w.concat(o.modifiers||[]),onFirstUpdate:R},transition:N,rootClose:l,placement:u,show:d,children:(E,{arrowProps:O,popper:C,show:T})=>{var _;AA(E,O);const M=C?.placement,L=Object.assign(h.current,{state:C?.state,scheduleUpdate:C?.update,placement:M,outOfBoundaries:(C==null||(_=C.state)==null||(_=_.modifiersData.hide)==null?void 0:_.isReferenceHidden)||!1,strategy:o.strategy}),I=!!v;return typeof n=="function"?n({...E,placement:M,show:T,...!a&&T&&{className:"show"},popper:L,arrowProps:O,hasDoneInitialMeasure:I}):m.cloneElement(n,{...E,placement:M,arrowProps:O,popper:L,hasDoneInitialMeasure:I,className:ce(n.props.className,!a&&T&&"show"),style:{...n.props.style,...E.style}})}})});Fx.displayName="Overlay";function OA(n){return n&&typeof n=="object"?n:{show:n,hide:n}}function bb(n,a,o){const[l]=a,u=l.currentTarget,d=l.relatedTarget||l.nativeEvent[o];(!d||d!==u)&&!ni(u,d)&&n(...a)}Be.oneOf(["click","hover","focus"]);const Ys=({trigger:n=["hover","focus"],overlay:a,children:o,popperConfig:l={},show:u,defaultShow:d=!1,onToggle:p,delay:g,placement:h,flip:v=h&&h.indexOf("auto")!==-1,...b})=>{const x=m.useRef(null),w=Mo(x,wr(o)),S=Ny(),N=m.useRef(""),[R,E]=ay(u,d,p),O=OA(g),{onFocus:C,onBlur:T,onClick:_}=typeof o!="function"?m.Children.only(o).props:{},M=ie=>{w(Fl(ie))},L=m.useCallback(()=>{if(S.clear(),N.current="show",!O.show){E(!0);return}S.set(()=>{N.current==="show"&&E(!0)},O.show)},[O.show,E,S]),I=m.useCallback(()=>{if(S.clear(),N.current="hide",!O.hide){E(!1);return}S.set(()=>{N.current==="hide"&&E(!1)},O.hide)},[O.hide,E,S]),z=m.useCallback((...ie)=>{L(),C?.(...ie)},[L,C]),Y=m.useCallback((...ie)=>{I(),T?.(...ie)},[I,T]),W=m.useCallback((...ie)=>{E(!R),_?.(...ie)},[_,E,R]),oe=m.useCallback((...ie)=>{bb(L,ie,"fromElement")},[L]),ne=m.useCallback((...ie)=>{bb(I,ie,"toElement")},[I]),le=n==null?[]:[].concat(n),J={ref:M};return le.indexOf("click")!==-1&&(J.onClick=W),le.indexOf("focus")!==-1&&(J.onFocus=z,J.onBlur=Y),le.indexOf("hover")!==-1&&(J.onMouseOver=oe,J.onMouseOut=ne),i.jsxs(i.Fragment,{children:[typeof o=="function"?o(J):m.cloneElement(o,J),i.jsx(Fx,{...b,show:R,onHide:I,flip:v,placement:h,popperConfig:l,target:x.current,children:a})]})},br=m.forwardRef(({bsPrefix:n,className:a,as:o="div",...l},u)=>{const d=ue(n,"row"),p=ry(),g=oy(),h=`${d}-cols`,v=[];return p.forEach(b=>{const x=l[b];delete l[b];let w;x!=null&&typeof x=="object"?{cols:w}=x:w=x;const S=b!==g?`-${b}`:"";w!=null&&v.push(`${h}${S}-${w}`)}),i.jsx(o,{ref:u,...l,className:ce(a,d,...v)})});br.displayName="Row";const St=m.forwardRef(({bsPrefix:n,variant:a,animation:o="border",size:l,as:u="div",className:d,...p},g)=>{n=ue(n,"spinner");const h=`${n}-${o}`;return i.jsx(u,{ref:g,...p,className:ce(d,h,l&&`${h}-${l}`,a&&`text-${a}`)})});St.displayName="Spinner";const kA=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],TA=["activeKey","getControlledId","getControllerId"],RA=["as"];function Cf(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)>=0)continue;o[l]=n[l]}return o}function Vx(n){let{active:a,eventKey:o,mountOnEnter:l,transition:u,unmountOnExit:d,role:p="tabpanel",onEnter:g,onEntering:h,onEntered:v,onExit:b,onExiting:x,onExited:w}=n,S=Cf(n,kA);const N=m.useContext(_o);if(!N)return[Object.assign({},S,{role:p}),{eventKey:o,isActive:a,mountOnEnter:l,transition:u,unmountOnExit:d,onEnter:g,onEntering:h,onEntered:v,onExit:b,onExiting:x,onExited:w}];const{activeKey:R,getControlledId:E,getControllerId:O}=N,C=Cf(N,TA),T=vr(o);return[Object.assign({},S,{role:p,id:E(o),"aria-labelledby":O(o)}),{eventKey:o,isActive:a==null&&T!=null?vr(R)===T:a,transition:u||C.transition,mountOnEnter:l??C.mountOnEnter,unmountOnExit:d??C.unmountOnExit,onEnter:g,onEntering:h,onEntered:v,onExit:b,onExiting:x,onExited:w}]}const Yx=m.forwardRef((n,a)=>{let{as:o="div"}=n,l=Cf(n,RA);const[u,{isActive:d,onEnter:p,onEntering:g,onEntered:h,onExit:v,onExiting:b,onExited:x,mountOnEnter:w,unmountOnExit:S,transition:N=rm}]=Vx(l);return i.jsx(_o.Provider,{value:null,children:i.jsx(Ln.Provider,{value:null,children:i.jsx(N,{in:d,onEnter:p,onEntering:g,onEntered:h,onExit:v,onExiting:b,onExited:x,mountOnEnter:w,unmountOnExit:S,children:i.jsx(o,Object.assign({},u,{ref:a,hidden:!d,"aria-hidden":!d}))})})})});Yx.displayName="TabPanel";const um=n=>{const{id:a,generateChildId:o,onSelect:l,activeKey:u,defaultActiveKey:d,transition:p,mountOnEnter:g,unmountOnExit:h,children:v}=n,[b,x]=Ey(u,d,l),w=Gy(a),S=m.useMemo(()=>o||((R,E)=>w?`${w}-${E}-${R}`:null),[w,o]),N=m.useMemo(()=>({onSelect:x,activeKey:b,transition:p,mountOnEnter:g||!1,unmountOnExit:h||!1,getControlledId:R=>S(R,"tabpane"),getControllerId:R=>S(R,"tab")}),[x,b,p,g,h,S]);return i.jsx(_o.Provider,{value:N,children:i.jsx(Ln.Provider,{value:x||null,children:v})})};um.Panel=Yx;function dm(n){return typeof n=="boolean"?n?ia:rm:n}const Xx=({transition:n,...a})=>i.jsx(um,{...a,transition:dm(n)});Xx.displayName="TabContainer";const fm=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"tab-content"),i.jsx(o,{ref:u,className:ce(n,a),...l})));fm.displayName="TabContent";const mm=m.forwardRef(({bsPrefix:n,transition:a,...o},l)=>{const[{className:u,as:d="div",...p},{isActive:g,onEnter:h,onEntering:v,onEntered:b,onExit:x,onExiting:w,onExited:S,mountOnEnter:N,unmountOnExit:R,transition:E=ia}]=Vx({...o,transition:dm(a)}),O=ue(n,"tab-pane");return i.jsx(_o.Provider,{value:null,children:i.jsx(Ln.Provider,{value:null,children:i.jsx(E,{in:g,onEnter:h,onEntering:v,onEntered:b,onExit:x,onExiting:w,onExited:S,mountOnEnter:N,unmountOnExit:R,children:i.jsx(d,{...p,ref:l,className:ce(u,O,g&&"active")})})})})});mm.displayName="TabPane";const DA={eventKey:Be.oneOfType([Be.string,Be.number]),title:Be.node.isRequired,disabled:Be.bool,tabClassName:Be.string,tabAttrs:Be.object},Kx=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};Kx.propTypes=DA;const yo=Object.assign(Kx,{Container:Xx,Content:fm,Pane:mm}),mi=m.forwardRef(({bsPrefix:n,className:a,striped:o,bordered:l,borderless:u,hover:d,size:p,variant:g,responsive:h,...v},b)=>{const x=ue(n,"table"),w=ce(a,x,g&&`${x}-${g}`,p&&`${x}-${p}`,o&&`${x}-${typeof o=="string"?`striped-${o}`:"striped"}`,l&&`${x}-bordered`,u&&`${x}-borderless`,d&&`${x}-hover`),S=i.jsx("table",{...v,className:w,ref:b});if(h){let N=`${x}-responsive`;return typeof h=="string"&&(N=`${N}-${h}`),i.jsx("div",{className:N,children:S})}return S});mi.displayName="Table";function LA(n){let a;return WE(n,o=>{a==null&&(a=o.props.eventKey)}),a}function MA(n){const{title:a,eventKey:o,disabled:l,tabClassName:u,tabAttrs:d,id:p}=n.props;return a==null?null:i.jsx(lm,{as:"li",role:"presentation",children:i.jsx(wc,{as:"button",type:"button",eventKey:o,disabled:l,id:p,className:u,...d,children:a})})}const pm=n=>{const{id:a,onSelect:o,transition:l,mountOnEnter:u=!1,unmountOnExit:d=!1,variant:p="tabs",children:g,activeKey:h=LA(g),...v}=cc(n,{activeKey:"onSelect"});return i.jsxs(um,{id:a,activeKey:h,onSelect:o,transition:dm(l),mountOnEnter:u,unmountOnExit:d,children:[i.jsx(qt,{id:a,...v,role:"tablist",as:"ul",variant:p,children:Yv(g,MA)}),i.jsx(fm,{children:Yv(g,b=>{const x={...b.props};return delete x.title,delete x.disabled,delete x.tabClassName,delete x.tabAttrs,i.jsx(mm,{...x})})})]})};pm.displayName="Tabs";const BA={[fn]:"showing",[So]:"showing show"},Zx=m.forwardRef((n,a)=>i.jsx(ia,{...n,ref:a,transitionClasses:BA}));Zx.displayName="ToastFade";const Qx=m.createContext({onClose(){}}),Wx=m.forwardRef(({bsPrefix:n,closeLabel:a="Close",closeVariant:o,closeButton:l=!0,className:u,children:d,...p},g)=>{n=ue(n,"toast-header");const h=m.useContext(Qx),v=sa(b=>{h==null||h.onClose==null||h.onClose(b)});return i.jsxs("div",{ref:g,...p,className:ce(n,u),children:[d,l&&i.jsx(mc,{"aria-label":a,variant:o,onClick:v,"data-dismiss":"toast"})]})});Wx.displayName="ToastHeader";const ew=m.forwardRef(({className:n,bsPrefix:a,as:o="div",...l},u)=>(a=ue(a,"toast-body"),i.jsx(o,{ref:u,className:ce(n,a),...l})));ew.displayName="ToastBody";const tw=m.forwardRef(({bsPrefix:n,className:a,transition:o=Zx,show:l=!0,animation:u=!0,delay:d=5e3,autohide:p=!1,onClose:g,onEntered:h,onExit:v,onExiting:b,onEnter:x,onEntering:w,onExited:S,bg:N,...R},E)=>{n=ue(n,"toast");const O=m.useRef(d),C=m.useRef(g);m.useEffect(()=>{O.current=d,C.current=g},[d,g]);const T=Ny(),_=!!(p&&l),M=m.useCallback(()=>{_&&(C.current==null||C.current())},[_]);m.useEffect(()=>{T.set(M,O.current)},[T,M]);const L=m.useMemo(()=>({onClose:g}),[g]),I=!!(o&&u),z=i.jsx("div",{...R,ref:E,className:ce(n,a,N&&`bg-${N}`,!I&&(l?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return i.jsx(Qx.Provider,{value:L,children:I&&o?i.jsx(o,{in:l,onEnter:x,onEntering:w,onEntered:h,onExit:v,onExiting:b,onExited:S,unmountOnExit:!0,children:z}):z})});tw.displayName="Toast";const xo=Object.assign(tw,{Body:ew,Header:Wx}),zA={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},hm=m.forwardRef(({bsPrefix:n,position:a,containerPosition:o,className:l,as:u="div",...d},p)=>(n=ue(n,"toast-container"),i.jsx(u,{ref:p,...d,className:ce(n,a&&zA[a],o&&`position-${o}`,l)})));hm.displayName="ToastContainer";const nw=m.createContext();function _A({children:n}){const[a,o]=m.useState([]),l=m.useCallback((g,h="success",v=3e3,b="Notificación")=>{const x=crypto.randomUUID();o(w=>[...w,{id:x,message:g,variant:h,delay:v,header:b}])},[]),u=g=>{o(h=>h.filter(v=>v.id!==g))},d=g=>{switch(g){case"success":return{color:"#0f5132"};case"danger":return{color:"#842029"};case"warning":return{color:"#664d03"};case"info":return{color:"#055160"};default:return{color:"#212529"}}},p=g=>{switch(g){case"success":case"danger":case"warning":case"info":return"text-white";default:return"text-dark"}};return i.jsxs(nw.Provider,{value:{showToast:l},children:[n,i.jsx(hm,{position:"bottom-end",className:"p-3",style:{zIndex:2e3},children:a.map(g=>i.jsxs(xo,{bg:g.variant,autohide:!0,delay:g.delay,onClose:()=>u(g.id),children:[i.jsx(xo.Header,{closeButton:!0,children:i.jsx("strong",{className:"me-auto",style:d(g.variant),children:g.header})}),i.jsx(xo.Body,{className:p(g.variant),children:g.message})]},g.id))})]})}function zn(){const n=m.useContext(nw);if(!n)throw new Error("useToast debe usarse dentro de <ToastProvider>");return n}/*!
* sweetalert2 v11.23.0
* Released under the MIT License.
*/function aw(n,a,o){if(typeof n=="function"?n===a:n.has(a))return arguments.length<3?a:o;throw new TypeError("Private element is not present on this object")}function UA(n,a){if(a.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function yb(n,a){return n.get(aw(n,a))}function IA(n,a,o){UA(n,a),a.set(n,o)}function PA(n,a,o){return n.set(aw(n,a),o),o}const $A=100,he={},HA=()=>{he.previousActiveElement instanceof HTMLElement?(he.previousActiveElement.focus(),he.previousActiveElement=null):document.body&&document.body.focus()},GA=n=>new Promise(a=>{if(!n)return a();const o=window.scrollX,l=window.scrollY;he.restoreFocusTimeout=setTimeout(()=>{HA(),a()},$A),window.scrollTo(o,l)}),rw="swal2-",qA=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],F=qA.reduce((n,a)=>(n[a]=rw+a,n),{}),JA=["success","warning","info","question","error"],Kl=JA.reduce((n,a)=>(n[a]=rw+a,n),{}),ow="SweetAlert2:",gm=n=>n.charAt(0).toUpperCase()+n.slice(1),Nt=n=>{console.warn(`${ow} ${typeof n=="object"?n.join(" "):n}`)},Sr=n=>{console.error(`${ow} ${n}`)},xb=[],FA=n=>{xb.includes(n)||(xb.push(n),Nt(n))},sw=(n,a=null)=>{FA(`"${n}" is deprecated and will be removed in the next major release.${a?` Use "${a}" instead.`:""}`)},jc=n=>typeof n=="function"?n():n,vm=n=>n&&typeof n.toPromise=="function",pi=n=>vm(n)?n.toPromise():Promise.resolve(n),bm=n=>n&&Promise.resolve(n)===n,Et=()=>document.body.querySelector(`.${F.container}`),hi=n=>{const a=Et();return a?a.querySelector(n):null},Yt=n=>hi(`.${n}`),Te=()=>Yt(F.popup),Uo=()=>Yt(F.icon),VA=()=>Yt(F["icon-content"]),iw=()=>Yt(F.title),ym=()=>Yt(F["html-container"]),lw=()=>Yt(F.image),xm=()=>Yt(F["progress-steps"]),Sc=()=>Yt(F["validation-message"]),Mn=()=>hi(`.${F.actions} .${F.confirm}`),Io=()=>hi(`.${F.actions} .${F.cancel}`),Nr=()=>hi(`.${F.actions} .${F.deny}`),YA=()=>Yt(F["input-label"]),Po=()=>hi(`.${F.loader}`),gi=()=>Yt(F.actions),cw=()=>Yt(F.footer),Nc=()=>Yt(F["timer-progress-bar"]),wm=()=>Yt(F.close),XA=`
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
`,jm=()=>{const n=Te();if(!n)return[];const a=n.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),o=Array.from(a).sort((d,p)=>{const g=parseInt(d.getAttribute("tabindex")||"0"),h=parseInt(p.getAttribute("tabindex")||"0");return g>h?1:g<h?-1:0}),l=n.querySelectorAll(XA),u=Array.from(l).filter(d=>d.getAttribute("tabindex")!=="-1");return[...new Set(o.concat(u))].filter(d=>Bt(d))},Sm=()=>ra(document.body,F.shown)&&!ra(document.body,F["toast-shown"])&&!ra(document.body,F["no-backdrop"]),Ec=()=>{const n=Te();return n?ra(n,F.toast):!1},KA=()=>{const n=Te();return n?n.hasAttribute("data-loading"):!1},Xt=(n,a)=>{if(n.textContent="",a){const l=new DOMParser().parseFromString(a,"text/html"),u=l.querySelector("head");u&&Array.from(u.childNodes).forEach(p=>{n.appendChild(p)});const d=l.querySelector("body");d&&Array.from(d.childNodes).forEach(p=>{p instanceof HTMLVideoElement||p instanceof HTMLAudioElement?n.appendChild(p.cloneNode(!0)):n.appendChild(p)})}},ra=(n,a)=>{if(!a)return!1;const o=a.split(/\s+/);for(let l=0;l<o.length;l++)if(!n.classList.contains(o[l]))return!1;return!0},ZA=(n,a)=>{Array.from(n.classList).forEach(o=>{!Object.values(F).includes(o)&&!Object.values(Kl).includes(o)&&!Object.values(a.showClass||{}).includes(o)&&n.classList.remove(o)})},Vt=(n,a,o)=>{if(ZA(n,a),!a.customClass)return;const l=a.customClass[o];if(l){if(typeof l!="string"&&!l.forEach){Nt(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof l}"`);return}De(n,l)}},Cc=(n,a)=>{if(!a)return null;switch(a){case"select":case"textarea":case"file":return n.querySelector(`.${F.popup} > .${F[a]}`);case"checkbox":return n.querySelector(`.${F.popup} > .${F.checkbox} input`);case"radio":return n.querySelector(`.${F.popup} > .${F.radio} input:checked`)||n.querySelector(`.${F.popup} > .${F.radio} input:first-child`);case"range":return n.querySelector(`.${F.popup} > .${F.range} input`);default:return n.querySelector(`.${F.popup} > .${F.input}`)}},uw=n=>{if(n.focus(),n.type!=="file"){const a=n.value;n.value="",n.value=a}},dw=(n,a,o)=>{!n||!a||(typeof a=="string"&&(a=a.split(/\s+/).filter(Boolean)),a.forEach(l=>{Array.isArray(n)?n.forEach(u=>{o?u.classList.add(l):u.classList.remove(l)}):o?n.classList.add(l):n.classList.remove(l)}))},De=(n,a)=>{dw(n,a,!0)},gn=(n,a)=>{dw(n,a,!1)},Ha=(n,a)=>{const o=Array.from(n.children);for(let l=0;l<o.length;l++){const u=o[l];if(u instanceof HTMLElement&&ra(u,a))return u}},hr=(n,a,o)=>{o===`${parseInt(o)}`&&(o=parseInt(o)),o||parseInt(o)===0?n.style.setProperty(a,typeof o=="number"?`${o}px`:o):n.style.removeProperty(a)},mt=(n,a="flex")=>{n&&(n.style.display=a)},wt=n=>{n&&(n.style.display="none")},Nm=(n,a="block")=>{n&&new MutationObserver(()=>{vi(n,n.innerHTML,a)}).observe(n,{childList:!0,subtree:!0})},wb=(n,a,o,l)=>{const u=n.querySelector(a);u&&u.style.setProperty(o,l)},vi=(n,a,o="flex")=>{a?mt(n,o):wt(n)},Bt=n=>!!(n&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length)),QA=()=>!Bt(Mn())&&!Bt(Nr())&&!Bt(Io()),Af=n=>n.scrollHeight>n.clientHeight,WA=(n,a)=>{let o=n;for(;o&&o!==a;){if(Af(o))return!0;o=o.parentElement}return!1},fw=n=>{const a=window.getComputedStyle(n),o=parseFloat(a.getPropertyValue("animation-duration")||"0"),l=parseFloat(a.getPropertyValue("transition-duration")||"0");return o>0||l>0},Em=(n,a=!1)=>{const o=Nc();o&&Bt(o)&&(a&&(o.style.transition="none",o.style.width="100%"),setTimeout(()=>{o.style.transition=`width ${n/1e3}s linear`,o.style.width="0%"},10))},eO=()=>{const n=Nc();if(!n)return;const a=parseInt(window.getComputedStyle(n).width);n.style.removeProperty("transition"),n.style.width="100%";const o=parseInt(window.getComputedStyle(n).width),l=a/o*100;n.style.width=`${l}%`},tO=()=>typeof window>"u"||typeof document>"u",nO=`
 <div aria-labelledby="${F.title}" aria-describedby="${F["html-container"]}" class="${F.popup}" tabindex="-1">
   <button type="button" class="${F.close}"></button>
   <ul class="${F["progress-steps"]}"></ul>
   <div class="${F.icon}"></div>
   <img class="${F.image}" />
   <h2 class="${F.title}" id="${F.title}"></h2>
   <div class="${F["html-container"]}" id="${F["html-container"]}"></div>
   <input class="${F.input}" id="${F.input}" />
   <input type="file" class="${F.file}" />
   <div class="${F.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${F.select}" id="${F.select}"></select>
   <div class="${F.radio}"></div>
   <label class="${F.checkbox}">
     <input type="checkbox" id="${F.checkbox}" />
     <span class="${F.label}"></span>
   </label>
   <textarea class="${F.textarea}" id="${F.textarea}"></textarea>
   <div class="${F["validation-message"]}" id="${F["validation-message"]}"></div>
   <div class="${F.actions}">
     <div class="${F.loader}"></div>
     <button type="button" class="${F.confirm}"></button>
     <button type="button" class="${F.deny}"></button>
     <button type="button" class="${F.cancel}"></button>
   </div>
   <div class="${F.footer}"></div>
   <div class="${F["timer-progress-bar-container"]}">
     <div class="${F["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),aO=()=>{const n=Et();return n?(n.remove(),gn([document.documentElement,document.body],[F["no-backdrop"],F["toast-shown"],F["has-column"]]),!0):!1},fr=()=>{he.currentInstance.resetValidationMessage()},rO=()=>{const n=Te(),a=Ha(n,F.input),o=Ha(n,F.file),l=n.querySelector(`.${F.range} input`),u=n.querySelector(`.${F.range} output`),d=Ha(n,F.select),p=n.querySelector(`.${F.checkbox} input`),g=Ha(n,F.textarea);a.oninput=fr,o.onchange=fr,d.onchange=fr,p.onchange=fr,g.oninput=fr,l.oninput=()=>{fr(),u.value=l.value},l.onchange=()=>{fr(),u.value=l.value}},oO=n=>typeof n=="string"?document.querySelector(n):n,sO=n=>{const a=Te();a.setAttribute("role",n.toast?"alert":"dialog"),a.setAttribute("aria-live",n.toast?"polite":"assertive"),n.toast||a.setAttribute("aria-modal","true")},iO=n=>{window.getComputedStyle(n).direction==="rtl"&&De(Et(),F.rtl)},lO=n=>{const a=aO();if(tO()){Sr("SweetAlert2 requires document to initialize");return}const o=document.createElement("div");o.className=F.container,a&&De(o,F["no-transition"]),Xt(o,nO),o.dataset.swal2Theme=n.theme;const l=oO(n.target);l.appendChild(o),n.topLayer&&(o.setAttribute("popover",""),o.showPopover()),sO(n),iO(l),rO()},Cm=(n,a)=>{n instanceof HTMLElement?a.appendChild(n):typeof n=="object"?cO(n,a):n&&Xt(a,n)},cO=(n,a)=>{n.jquery?uO(a,n):Xt(a,n.toString())},uO=(n,a)=>{if(n.textContent="",0 in a)for(let o=0;o in a;o++)n.appendChild(a[o].cloneNode(!0));else n.appendChild(a.cloneNode(!0))},dO=(n,a)=>{const o=gi(),l=Po();!o||!l||(!a.showConfirmButton&&!a.showDenyButton&&!a.showCancelButton?wt(o):mt(o),Vt(o,a,"actions"),fO(o,l,a),Xt(l,a.loaderHtml||""),Vt(l,a,"loader"))};function fO(n,a,o){const l=Mn(),u=Nr(),d=Io();!l||!u||!d||(of(l,"confirm",o),of(u,"deny",o),of(d,"cancel",o),mO(l,u,d,o),o.reverseButtons&&(o.toast?(n.insertBefore(d,l),n.insertBefore(u,l)):(n.insertBefore(d,a),n.insertBefore(u,a),n.insertBefore(l,a))))}function mO(n,a,o,l){if(!l.buttonsStyling){gn([n,a,o],F.styled);return}De([n,a,o],F.styled),l.confirmButtonColor&&n.style.setProperty("--swal2-confirm-button-background-color",l.confirmButtonColor),l.denyButtonColor&&a.style.setProperty("--swal2-deny-button-background-color",l.denyButtonColor),l.cancelButtonColor&&o.style.setProperty("--swal2-cancel-button-background-color",l.cancelButtonColor),rf(n),rf(a),rf(o)}function rf(n){const a=window.getComputedStyle(n);if(a.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const o=a.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");n.style.setProperty("--swal2-action-button-focus-box-shadow",a.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${o}`))}function of(n,a,o){const l=gm(a);vi(n,o[`show${l}Button`],"inline-block"),Xt(n,o[`${a}ButtonText`]||""),n.setAttribute("aria-label",o[`${a}ButtonAriaLabel`]||""),n.className=F[a],Vt(n,o,`${a}Button`)}const pO=(n,a)=>{const o=wm();o&&(Xt(o,a.closeButtonHtml||""),Vt(o,a,"closeButton"),vi(o,a.showCloseButton),o.setAttribute("aria-label",a.closeButtonAriaLabel||""))},hO=(n,a)=>{const o=Et();o&&(gO(o,a.backdrop),vO(o,a.position),bO(o,a.grow),Vt(o,a,"container"))};function gO(n,a){typeof a=="string"?n.style.background=a:a||De([document.documentElement,document.body],F["no-backdrop"])}function vO(n,a){a&&(a in F?De(n,F[a]):(Nt('The "position" parameter is not valid, defaulting to "center"'),De(n,F.center)))}function bO(n,a){a&&De(n,F[`grow-${a}`])}var Ge={innerParams:new WeakMap,domCache:new WeakMap};const yO=["input","file","range","select","radio","checkbox","textarea"],xO=(n,a)=>{const o=Te();if(!o)return;const l=Ge.innerParams.get(n),u=!l||a.input!==l.input;yO.forEach(d=>{const p=Ha(o,F[d]);p&&(SO(d,a.inputAttributes),p.className=F[d],u&&wt(p))}),a.input&&(u&&wO(a),NO(a))},wO=n=>{if(!n.input)return;if(!nt[n.input]){Sr(`Unexpected type of input! Expected ${Object.keys(nt).join(" | ")}, got "${n.input}"`);return}const a=mw(n.input);if(!a)return;const o=nt[n.input](a,n);mt(a),n.inputAutoFocus&&setTimeout(()=>{uw(o)})},jO=n=>{for(let a=0;a<n.attributes.length;a++){const o=n.attributes[a].name;["id","type","value","style"].includes(o)||n.removeAttribute(o)}},SO=(n,a)=>{const o=Te();if(!o)return;const l=Cc(o,n);if(l){jO(l);for(const u in a)l.setAttribute(u,a[u])}},NO=n=>{if(!n.input)return;const a=mw(n.input);a&&Vt(a,n,"input")},Am=(n,a)=>{!n.placeholder&&a.inputPlaceholder&&(n.placeholder=a.inputPlaceholder)},bi=(n,a,o)=>{if(o.inputLabel){const l=document.createElement("label"),u=F["input-label"];l.setAttribute("for",n.id),l.className=u,typeof o.customClass=="object"&&De(l,o.customClass.inputLabel),l.innerText=o.inputLabel,a.insertAdjacentElement("beforebegin",l)}},mw=n=>{const a=Te();if(a)return Ha(a,F[n]||F.input)},Zl=(n,a)=>{["string","number"].includes(typeof a)?n.value=`${a}`:bm(a)||Nt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof a}"`)},nt={};nt.text=nt.email=nt.password=nt.number=nt.tel=nt.url=nt.search=nt.date=nt["datetime-local"]=nt.time=nt.week=nt.month=(n,a)=>(Zl(n,a.inputValue),bi(n,n,a),Am(n,a),n.type=a.input,n);nt.file=(n,a)=>(bi(n,n,a),Am(n,a),n);nt.range=(n,a)=>{const o=n.querySelector("input"),l=n.querySelector("output");return Zl(o,a.inputValue),o.type=a.input,Zl(l,a.inputValue),bi(o,n,a),n};nt.select=(n,a)=>{if(n.textContent="",a.inputPlaceholder){const o=document.createElement("option");Xt(o,a.inputPlaceholder),o.value="",o.disabled=!0,o.selected=!0,n.appendChild(o)}return bi(n,n,a),n};nt.radio=n=>(n.textContent="",n);nt.checkbox=(n,a)=>{const o=Cc(Te(),"checkbox");o.value="1",o.checked=!!a.inputValue;const l=n.querySelector("span");return Xt(l,a.inputPlaceholder||a.inputLabel),o};nt.textarea=(n,a)=>{Zl(n,a.inputValue),Am(n,a),bi(n,n,a);const o=l=>parseInt(window.getComputedStyle(l).marginLeft)+parseInt(window.getComputedStyle(l).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const l=parseInt(window.getComputedStyle(Te()).width),u=()=>{if(!document.body.contains(n))return;const d=n.offsetWidth+o(n);d>l?Te().style.width=`${d}px`:hr(Te(),"width",a.width)};new MutationObserver(u).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const EO=(n,a)=>{const o=ym();o&&(Nm(o),Vt(o,a,"htmlContainer"),a.html?(Cm(a.html,o),mt(o,"block")):a.text?(o.textContent=a.text,mt(o,"block")):wt(o),xO(n,a))},CO=(n,a)=>{const o=cw();o&&(Nm(o),vi(o,a.footer,"block"),a.footer&&Cm(a.footer,o),Vt(o,a,"footer"))},AO=(n,a)=>{const o=Ge.innerParams.get(n),l=Uo();if(!l)return;if(o&&a.icon===o.icon){Sb(l,a),jb(l,a);return}if(!a.icon&&!a.iconHtml){wt(l);return}if(a.icon&&Object.keys(Kl).indexOf(a.icon)===-1){Sr(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${a.icon}"`),wt(l);return}mt(l),Sb(l,a),jb(l,a),De(l,a.showClass&&a.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",pw)},jb=(n,a)=>{for(const[o,l]of Object.entries(Kl))a.icon!==o&&gn(n,l);De(n,a.icon&&Kl[a.icon]),TO(n,a),pw(),Vt(n,a,"icon")},pw=()=>{const n=Te();if(!n)return;const a=window.getComputedStyle(n).getPropertyValue("background-color"),o=n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let l=0;l<o.length;l++)o[l].style.backgroundColor=a},OO=n=>`
  ${n.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${n.animation?'<div class="swal2-success-fix"></div>':""}
  ${n.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,kO=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Sb=(n,a)=>{if(!a.icon&&!a.iconHtml)return;let o=n.innerHTML,l="";a.iconHtml?l=Nb(a.iconHtml):a.icon==="success"?(l=OO(a),o=o.replace(/ style=".*?"/g,"")):a.icon==="error"?l=kO:a.icon&&(l=Nb({question:"?",warning:"!",info:"i"}[a.icon])),o.trim()!==l.trim()&&Xt(n,l)},TO=(n,a)=>{if(a.iconColor){n.style.color=a.iconColor,n.style.borderColor=a.iconColor;for(const o of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])wb(n,o,"background-color",a.iconColor);wb(n,".swal2-success-ring","border-color",a.iconColor)}},Nb=n=>`<div class="${F["icon-content"]}">${n}</div>`,RO=(n,a)=>{const o=lw();if(o){if(!a.imageUrl){wt(o);return}mt(o,""),o.setAttribute("src",a.imageUrl),o.setAttribute("alt",a.imageAlt||""),hr(o,"width",a.imageWidth),hr(o,"height",a.imageHeight),o.className=F.image,Vt(o,a,"image")}};let Om=!1,hw=0,gw=0,vw=0,bw=0;const DO=n=>{n.addEventListener("mousedown",Ql),document.body.addEventListener("mousemove",Wl),n.addEventListener("mouseup",ec),n.addEventListener("touchstart",Ql),document.body.addEventListener("touchmove",Wl),n.addEventListener("touchend",ec)},LO=n=>{n.removeEventListener("mousedown",Ql),document.body.removeEventListener("mousemove",Wl),n.removeEventListener("mouseup",ec),n.removeEventListener("touchstart",Ql),document.body.removeEventListener("touchmove",Wl),n.removeEventListener("touchend",ec)},Ql=n=>{const a=Te();if(n.target===a||Uo().contains(n.target)){Om=!0;const o=yw(n);hw=o.clientX,gw=o.clientY,vw=parseInt(a.style.insetInlineStart)||0,bw=parseInt(a.style.insetBlockStart)||0,De(a,"swal2-dragging")}},Wl=n=>{const a=Te();if(Om){let{clientX:o,clientY:l}=yw(n);a.style.insetInlineStart=`${vw+(o-hw)}px`,a.style.insetBlockStart=`${bw+(l-gw)}px`}},ec=()=>{const n=Te();Om=!1,gn(n,"swal2-dragging")},yw=n=>{let a=0,o=0;return n.type.startsWith("mouse")?(a=n.clientX,o=n.clientY):n.type.startsWith("touch")&&(a=n.touches[0].clientX,o=n.touches[0].clientY),{clientX:a,clientY:o}},MO=(n,a)=>{const o=Et(),l=Te();if(!(!o||!l)){if(a.toast){hr(o,"width",a.width),l.style.width="100%";const u=Po();u&&l.insertBefore(u,Uo())}else hr(l,"width",a.width);hr(l,"padding",a.padding),a.color&&(l.style.color=a.color),a.background&&(l.style.background=a.background),wt(Sc()),BO(l,a),a.draggable&&!a.toast?(De(l,F.draggable),DO(l)):(gn(l,F.draggable),LO(l))}},BO=(n,a)=>{const o=a.showClass||{};n.className=`${F.popup} ${Bt(n)?o.popup:""}`,a.toast?(De([document.documentElement,document.body],F["toast-shown"]),De(n,F.toast)):De(n,F.modal),Vt(n,a,"popup"),typeof a.customClass=="string"&&De(n,a.customClass),a.icon&&De(n,F[`icon-${a.icon}`])},zO=(n,a)=>{const o=xm();if(!o)return;const{progressSteps:l,currentProgressStep:u}=a;if(!l||l.length===0||u===void 0){wt(o);return}mt(o),o.textContent="",u>=l.length&&Nt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),l.forEach((d,p)=>{const g=_O(d);if(o.appendChild(g),p===u&&De(g,F["active-progress-step"]),p!==l.length-1){const h=UO(a);o.appendChild(h)}})},_O=n=>{const a=document.createElement("li");return De(a,F["progress-step"]),Xt(a,n),a},UO=n=>{const a=document.createElement("li");return De(a,F["progress-step-line"]),n.progressStepsDistance&&hr(a,"width",n.progressStepsDistance),a},IO=(n,a)=>{const o=iw();o&&(Nm(o),vi(o,a.title||a.titleText,"block"),a.title&&Cm(a.title,o),a.titleText&&(o.innerText=a.titleText),Vt(o,a,"title"))},xw=(n,a)=>{MO(n,a),hO(n,a),zO(n,a),AO(n,a),RO(n,a),IO(n,a),pO(n,a),EO(n,a),dO(n,a),CO(n,a);const o=Te();typeof a.didRender=="function"&&o&&a.didRender(o),he.eventEmitter.emit("didRender",o)},PO=()=>Bt(Te()),ww=()=>{var n;return(n=Mn())===null||n===void 0?void 0:n.click()},$O=()=>{var n;return(n=Nr())===null||n===void 0?void 0:n.click()},HO=()=>{var n;return(n=Io())===null||n===void 0?void 0:n.click()},$o=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),jw=n=>{n.keydownTarget&&n.keydownHandlerAdded&&(n.keydownTarget.removeEventListener("keydown",n.keydownHandler,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!1)},GO=(n,a,o)=>{jw(n),a.toast||(n.keydownHandler=l=>JO(a,l,o),n.keydownTarget=a.keydownListenerCapture?window:Te(),n.keydownListenerCapture=a.keydownListenerCapture,n.keydownTarget.addEventListener("keydown",n.keydownHandler,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!0)},Of=(n,a)=>{var o;const l=jm();if(l.length){n=n+a,n===-2&&(n=l.length-1),n===l.length?n=0:n===-1&&(n=l.length-1),l[n].focus();return}(o=Te())===null||o===void 0||o.focus()},Sw=["ArrowRight","ArrowDown"],qO=["ArrowLeft","ArrowUp"],JO=(n,a,o)=>{n&&(a.isComposing||a.keyCode===229||(n.stopKeydownPropagation&&a.stopPropagation(),a.key==="Enter"?FO(a,n):a.key==="Tab"?VO(a):[...Sw,...qO].includes(a.key)?YO(a.key):a.key==="Escape"&&XO(a,n,o)))},FO=(n,a)=>{if(!jc(a.allowEnterKey))return;const o=Cc(Te(),a.input);if(n.target&&o&&n.target instanceof HTMLElement&&n.target.outerHTML===o.outerHTML){if(["textarea","file"].includes(a.input))return;ww(),n.preventDefault()}},VO=n=>{const a=n.target,o=jm();let l=-1;for(let u=0;u<o.length;u++)if(a===o[u]){l=u;break}n.shiftKey?Of(l,-1):Of(l,1),n.stopPropagation(),n.preventDefault()},YO=n=>{const a=gi(),o=Mn(),l=Nr(),u=Io();if(!a||!o||!l||!u)return;const d=[o,l,u];if(document.activeElement instanceof HTMLElement&&!d.includes(document.activeElement))return;const p=Sw.includes(n)?"nextElementSibling":"previousElementSibling";let g=document.activeElement;if(g){for(let h=0;h<a.children.length;h++){if(g=g[p],!g)return;if(g instanceof HTMLButtonElement&&Bt(g))break}g instanceof HTMLButtonElement&&g.focus()}},XO=(n,a,o)=>{n.preventDefault(),jc(a.allowEscapeKey)&&o($o.esc)};var Oo={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const KO=()=>{const n=Et();Array.from(document.body.children).forEach(o=>{o.contains(n)||(o.hasAttribute("aria-hidden")&&o.setAttribute("data-previous-aria-hidden",o.getAttribute("aria-hidden")||""),o.setAttribute("aria-hidden","true"))})},Nw=()=>{Array.from(document.body.children).forEach(a=>{a.hasAttribute("data-previous-aria-hidden")?(a.setAttribute("aria-hidden",a.getAttribute("data-previous-aria-hidden")||""),a.removeAttribute("data-previous-aria-hidden")):a.removeAttribute("aria-hidden")})},Ew=typeof window<"u"&&!!window.GestureEvent,ZO=()=>{if(Ew&&!ra(document.body,F.iosfix)){const n=document.body.scrollTop;document.body.style.top=`${n*-1}px`,De(document.body,F.iosfix),QO()}},QO=()=>{const n=Et();if(!n)return;let a;n.ontouchstart=o=>{a=WO(o)},n.ontouchmove=o=>{a&&(o.preventDefault(),o.stopPropagation())}},WO=n=>{const a=n.target,o=Et(),l=ym();return!o||!l||e1(n)||t1(n)?!1:a===o||!Af(o)&&a instanceof HTMLElement&&!WA(a,l)&&a.tagName!=="INPUT"&&a.tagName!=="TEXTAREA"&&!(Af(l)&&l.contains(a))},e1=n=>n.touches&&n.touches.length&&n.touches[0].touchType==="stylus",t1=n=>n.touches&&n.touches.length>1,n1=()=>{if(ra(document.body,F.iosfix)){const n=parseInt(document.body.style.top,10);gn(document.body,F.iosfix),document.body.style.top="",document.body.scrollTop=n*-1}},a1=()=>{const n=document.createElement("div");n.className=F["scrollbar-measure"],document.body.appendChild(n);const a=n.getBoundingClientRect().width-n.clientWidth;return document.body.removeChild(n),a};let wo=null;const r1=n=>{wo===null&&(document.body.scrollHeight>window.innerHeight||n==="scroll")&&(wo=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${wo+a1()}px`)},o1=()=>{wo!==null&&(document.body.style.paddingRight=`${wo}px`,wo=null)};function Cw(n,a,o,l){Ec()?Eb(n,l):(GA(o).then(()=>Eb(n,l)),jw(he)),Ew?(a.setAttribute("style","display:none !important"),a.removeAttribute("class"),a.innerHTML=""):a.remove(),Sm()&&(o1(),n1(),Nw()),s1()}function s1(){gn([document.documentElement,document.body],[F.shown,F["height-auto"],F["no-backdrop"],F["toast-shown"]])}function Ga(n){n=l1(n);const a=Oo.swalPromiseResolve.get(this),o=i1(this);this.isAwaitingPromise?n.isDismissed||(yi(this),a(n)):o&&a(n)}const i1=n=>{const a=Te();if(!a)return!1;const o=Ge.innerParams.get(n);if(!o||ra(a,o.hideClass.popup))return!1;gn(a,o.showClass.popup),De(a,o.hideClass.popup);const l=Et();return gn(l,o.showClass.backdrop),De(l,o.hideClass.backdrop),c1(n,a,o),!0};function Aw(n){const a=Oo.swalPromiseReject.get(this);yi(this),a&&a(n)}const yi=n=>{n.isAwaitingPromise&&(delete n.isAwaitingPromise,Ge.innerParams.get(n)||n._destroy())},l1=n=>typeof n>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},n),c1=(n,a,o)=>{var l;const u=Et(),d=fw(a);typeof o.willClose=="function"&&o.willClose(a),(l=he.eventEmitter)===null||l===void 0||l.emit("willClose",a),d?u1(n,a,u,o.returnFocus,o.didClose):Cw(n,u,o.returnFocus,o.didClose)},u1=(n,a,o,l,u)=>{he.swalCloseEventFinishedCallback=Cw.bind(null,n,o,l,u);const d=function(p){if(p.target===a){var g;(g=he.swalCloseEventFinishedCallback)===null||g===void 0||g.call(he),delete he.swalCloseEventFinishedCallback,a.removeEventListener("animationend",d),a.removeEventListener("transitionend",d)}};a.addEventListener("animationend",d),a.addEventListener("transitionend",d)},Eb=(n,a)=>{setTimeout(()=>{var o;typeof a=="function"&&a.bind(n.params)(),(o=he.eventEmitter)===null||o===void 0||o.emit("didClose"),n._destroy&&n._destroy()})},ko=n=>{let a=Te();if(a||new oc,a=Te(),!a)return;const o=Po();Ec()?wt(Uo()):d1(a,n),mt(o),a.setAttribute("data-loading","true"),a.setAttribute("aria-busy","true"),a.focus()},d1=(n,a)=>{const o=gi(),l=Po();!o||!l||(!a&&Bt(Mn())&&(a=Mn()),mt(o),a&&(wt(a),l.setAttribute("data-button-to-replace",a.className),o.insertBefore(l,a)),De([n,o],F.loading))},f1=(n,a)=>{a.input==="select"||a.input==="radio"?v1(n,a):["text","email","number","tel","textarea"].some(o=>o===a.input)&&(vm(a.inputValue)||bm(a.inputValue))&&(ko(Mn()),b1(n,a))},m1=(n,a)=>{const o=n.getInput();if(!o)return null;switch(a.input){case"checkbox":return p1(o);case"radio":return h1(o);case"file":return g1(o);default:return a.inputAutoTrim?o.value.trim():o.value}},p1=n=>n.checked?1:0,h1=n=>n.checked?n.value:null,g1=n=>n.files&&n.files.length?n.getAttribute("multiple")!==null?n.files:n.files[0]:null,v1=(n,a)=>{const o=Te();if(!o)return;const l=u=>{a.input==="select"?y1(o,tc(u),a):a.input==="radio"&&x1(o,tc(u),a)};vm(a.inputOptions)||bm(a.inputOptions)?(ko(Mn()),pi(a.inputOptions).then(u=>{n.hideLoading(),l(u)})):typeof a.inputOptions=="object"?l(a.inputOptions):Sr(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof a.inputOptions}`)},b1=(n,a)=>{const o=n.getInput();o&&(wt(o),pi(a.inputValue).then(l=>{o.value=a.input==="number"?`${parseFloat(l)||0}`:`${l}`,mt(o),o.focus(),n.hideLoading()}).catch(l=>{Sr(`Error in inputValue promise: ${l}`),o.value="",mt(o),o.focus(),n.hideLoading()}))};function y1(n,a,o){const l=Ha(n,F.select);if(!l)return;const u=(d,p,g)=>{const h=document.createElement("option");h.value=g,Xt(h,p),h.selected=Ow(g,o.inputValue),d.appendChild(h)};a.forEach(d=>{const p=d[0],g=d[1];if(Array.isArray(g)){const h=document.createElement("optgroup");h.label=p,h.disabled=!1,l.appendChild(h),g.forEach(v=>u(h,v[1],v[0]))}else u(l,g,p)}),l.focus()}function x1(n,a,o){const l=Ha(n,F.radio);if(!l)return;a.forEach(d=>{const p=d[0],g=d[1],h=document.createElement("input"),v=document.createElement("label");h.type="radio",h.name=F.radio,h.value=p,Ow(p,o.inputValue)&&(h.checked=!0);const b=document.createElement("span");Xt(b,g),b.className=F.label,v.appendChild(h),v.appendChild(b),l.appendChild(v)});const u=l.querySelectorAll("input");u.length&&u[0].focus()}const tc=n=>{const a=[];return n instanceof Map?n.forEach((o,l)=>{let u=o;typeof u=="object"&&(u=tc(u)),a.push([l,u])}):Object.keys(n).forEach(o=>{let l=n[o];typeof l=="object"&&(l=tc(l)),a.push([o,l])}),a},Ow=(n,a)=>!!a&&a.toString()===n.toString(),w1=n=>{const a=Ge.innerParams.get(n);n.disableButtons(),a.input?kw(n,"confirm"):Tm(n,!0)},j1=n=>{const a=Ge.innerParams.get(n);n.disableButtons(),a.returnInputValueOnDeny?kw(n,"deny"):km(n,!1)},S1=(n,a)=>{n.disableButtons(),a($o.cancel)},kw=(n,a)=>{const o=Ge.innerParams.get(n);if(!o.input){Sr(`The "input" parameter is needed to be set when using returnInputValueOn${gm(a)}`);return}const l=n.getInput(),u=m1(n,o);o.inputValidator?N1(n,u,a):l&&!l.checkValidity()?(n.enableButtons(),n.showValidationMessage(o.validationMessage||l.validationMessage)):a==="deny"?km(n,u):Tm(n,u)},N1=(n,a,o)=>{const l=Ge.innerParams.get(n);n.disableInput(),Promise.resolve().then(()=>pi(l.inputValidator(a,l.validationMessage))).then(d=>{n.enableButtons(),n.enableInput(),d?n.showValidationMessage(d):o==="deny"?km(n,a):Tm(n,a)})},km=(n,a)=>{const o=Ge.innerParams.get(n||void 0);o.showLoaderOnDeny&&ko(Nr()),o.preDeny?(n.isAwaitingPromise=!0,Promise.resolve().then(()=>pi(o.preDeny(a,o.validationMessage))).then(u=>{u===!1?(n.hideLoading(),yi(n)):n.close({isDenied:!0,value:typeof u>"u"?a:u})}).catch(u=>Tw(n||void 0,u))):n.close({isDenied:!0,value:a})},Cb=(n,a)=>{n.close({isConfirmed:!0,value:a})},Tw=(n,a)=>{n.rejectPromise(a)},Tm=(n,a)=>{const o=Ge.innerParams.get(n||void 0);o.showLoaderOnConfirm&&ko(),o.preConfirm?(n.resetValidationMessage(),n.isAwaitingPromise=!0,Promise.resolve().then(()=>pi(o.preConfirm(a,o.validationMessage))).then(u=>{Bt(Sc())||u===!1?(n.hideLoading(),yi(n)):Cb(n,typeof u>"u"?a:u)}).catch(u=>Tw(n||void 0,u))):Cb(n,a)};function nc(){const n=Ge.innerParams.get(this);if(!n)return;const a=Ge.domCache.get(this);wt(a.loader),Ec()?n.icon&&mt(Uo()):E1(a),gn([a.popup,a.actions],F.loading),a.popup.removeAttribute("aria-busy"),a.popup.removeAttribute("data-loading"),a.confirmButton.disabled=!1,a.denyButton.disabled=!1,a.cancelButton.disabled=!1}const E1=n=>{const a=n.popup.getElementsByClassName(n.loader.getAttribute("data-button-to-replace"));a.length?mt(a[0],"inline-block"):QA()&&wt(n.actions)};function Rw(){const n=Ge.innerParams.get(this),a=Ge.domCache.get(this);return a?Cc(a.popup,n.input):null}function Dw(n,a,o){const l=Ge.domCache.get(n);a.forEach(u=>{l[u].disabled=o})}function Lw(n,a){const o=Te();if(!(!o||!n))if(n.type==="radio"){const l=o.querySelectorAll(`[name="${F.radio}"]`);for(let u=0;u<l.length;u++)l[u].disabled=a}else n.disabled=a}function Mw(){Dw(this,["confirmButton","denyButton","cancelButton"],!1)}function Bw(){Dw(this,["confirmButton","denyButton","cancelButton"],!0)}function zw(){Lw(this.getInput(),!1)}function _w(){Lw(this.getInput(),!0)}function Uw(n){const a=Ge.domCache.get(this),o=Ge.innerParams.get(this);Xt(a.validationMessage,n),a.validationMessage.className=F["validation-message"],o.customClass&&o.customClass.validationMessage&&De(a.validationMessage,o.customClass.validationMessage),mt(a.validationMessage);const l=this.getInput();l&&(l.setAttribute("aria-invalid","true"),l.setAttribute("aria-describedby",F["validation-message"]),uw(l),De(l,F.inputerror))}function Iw(){const n=Ge.domCache.get(this);n.validationMessage&&wt(n.validationMessage);const a=this.getInput();a&&(a.removeAttribute("aria-invalid"),a.removeAttribute("aria-describedby"),gn(a,F.inputerror))}const jo={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},C1=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],A1={allowEnterKey:void 0},O1=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Pw=n=>Object.prototype.hasOwnProperty.call(jo,n),$w=n=>C1.indexOf(n)!==-1,Hw=n=>A1[n],k1=n=>{Pw(n)||Nt(`Unknown parameter "${n}"`)},T1=n=>{O1.includes(n)&&Nt(`The parameter "${n}" is incompatible with toasts`)},R1=n=>{const a=Hw(n);a&&sw(n,a)},Gw=n=>{n.backdrop===!1&&n.allowOutsideClick&&Nt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),n.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(n.theme)&&Nt(`Invalid theme "${n.theme}"`);for(const a in n)k1(a),n.toast&&T1(a),R1(a)};function qw(n){const a=Et(),o=Te(),l=Ge.innerParams.get(this);if(!o||ra(o,l.hideClass.popup)){Nt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const u=D1(n),d=Object.assign({},l,u);Gw(d),a.dataset.swal2Theme=d.theme,xw(this,d),Ge.innerParams.set(this,d),Object.defineProperties(this,{params:{value:Object.assign({},this.params,n),writable:!1,enumerable:!0}})}const D1=n=>{const a={};return Object.keys(n).forEach(o=>{$w(o)?a[o]=n[o]:Nt(`Invalid parameter to update: ${o}`)}),a};function Jw(){const n=Ge.domCache.get(this),a=Ge.innerParams.get(this);if(!a){Fw(this);return}n.popup&&he.swalCloseEventFinishedCallback&&(he.swalCloseEventFinishedCallback(),delete he.swalCloseEventFinishedCallback),typeof a.didDestroy=="function"&&a.didDestroy(),he.eventEmitter.emit("didDestroy"),L1(this)}const L1=n=>{Fw(n),delete n.params,delete he.keydownHandler,delete he.keydownTarget,delete he.currentInstance},Fw=n=>{n.isAwaitingPromise?(sf(Ge,n),n.isAwaitingPromise=!0):(sf(Oo,n),sf(Ge,n),delete n.isAwaitingPromise,delete n.disableButtons,delete n.enableButtons,delete n.getInput,delete n.disableInput,delete n.enableInput,delete n.hideLoading,delete n.disableLoading,delete n.showValidationMessage,delete n.resetValidationMessage,delete n.close,delete n.closePopup,delete n.closeModal,delete n.closeToast,delete n.rejectPromise,delete n.update,delete n._destroy)},sf=(n,a)=>{for(const o in n)n[o].delete(a)};var M1=Object.freeze({__proto__:null,_destroy:Jw,close:Ga,closeModal:Ga,closePopup:Ga,closeToast:Ga,disableButtons:Bw,disableInput:_w,disableLoading:nc,enableButtons:Mw,enableInput:zw,getInput:Rw,handleAwaitingPromise:yi,hideLoading:nc,rejectPromise:Aw,resetValidationMessage:Iw,showValidationMessage:Uw,update:qw});const B1=(n,a,o)=>{n.toast?z1(n,a,o):(U1(a),I1(a),P1(n,a,o))},z1=(n,a,o)=>{a.popup.onclick=()=>{n&&(_1(n)||n.timer||n.input)||o($o.close)}},_1=n=>!!(n.showConfirmButton||n.showDenyButton||n.showCancelButton||n.showCloseButton);let ac=!1;const U1=n=>{n.popup.onmousedown=()=>{n.container.onmouseup=function(a){n.container.onmouseup=()=>{},a.target===n.container&&(ac=!0)}}},I1=n=>{n.container.onmousedown=a=>{a.target===n.container&&a.preventDefault(),n.popup.onmouseup=function(o){n.popup.onmouseup=()=>{},(o.target===n.popup||o.target instanceof HTMLElement&&n.popup.contains(o.target))&&(ac=!0)}}},P1=(n,a,o)=>{a.container.onclick=l=>{if(ac){ac=!1;return}l.target===a.container&&jc(n.allowOutsideClick)&&o($o.backdrop)}},$1=n=>typeof n=="object"&&n.jquery,Ab=n=>n instanceof Element||$1(n),H1=n=>{const a={};return typeof n[0]=="object"&&!Ab(n[0])?Object.assign(a,n[0]):["title","html","icon"].forEach((o,l)=>{const u=n[l];typeof u=="string"||Ab(u)?a[o]=u:u!==void 0&&Sr(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof u}`)}),a};function G1(...n){return new this(...n)}function q1(n){class a extends this{_main(l,u){return super._main(l,Object.assign({},n,u))}}return a}const J1=()=>he.timeout&&he.timeout.getTimerLeft(),Vw=()=>{if(he.timeout)return eO(),he.timeout.stop()},Yw=()=>{if(he.timeout){const n=he.timeout.start();return Em(n),n}},F1=()=>{const n=he.timeout;return n&&(n.running?Vw():Yw())},V1=n=>{if(he.timeout){const a=he.timeout.increase(n);return Em(a,!0),a}},Y1=()=>!!(he.timeout&&he.timeout.isRunning());let Ob=!1;const kf={};function X1(n="data-swal-template"){kf[n]=this,Ob||(document.body.addEventListener("click",K1),Ob=!0)}const K1=n=>{for(let a=n.target;a&&a!==document;a=a.parentNode)for(const o in kf){const l=a.getAttribute(o);if(l){kf[o].fire({template:l});return}}};class Z1{constructor(){this.events={}}_getHandlersByEventName(a){return typeof this.events[a]>"u"&&(this.events[a]=[]),this.events[a]}on(a,o){const l=this._getHandlersByEventName(a);l.includes(o)||l.push(o)}once(a,o){const l=(...u)=>{this.removeListener(a,l),o.apply(this,u)};this.on(a,l)}emit(a,...o){this._getHandlersByEventName(a).forEach(l=>{try{l.apply(this,o)}catch(u){console.error(u)}})}removeListener(a,o){const l=this._getHandlersByEventName(a),u=l.indexOf(o);u>-1&&l.splice(u,1)}removeAllListeners(a){this.events[a]!==void 0&&(this.events[a].length=0)}reset(){this.events={}}}he.eventEmitter=new Z1;const Q1=(n,a)=>{he.eventEmitter.on(n,a)},W1=(n,a)=>{he.eventEmitter.once(n,a)},ek=(n,a)=>{if(!n){he.eventEmitter.reset();return}a?he.eventEmitter.removeListener(n,a):he.eventEmitter.removeAllListeners(n)};var tk=Object.freeze({__proto__:null,argsToParams:H1,bindClickHandler:X1,clickCancel:HO,clickConfirm:ww,clickDeny:$O,enableLoading:ko,fire:G1,getActions:gi,getCancelButton:Io,getCloseButton:wm,getConfirmButton:Mn,getContainer:Et,getDenyButton:Nr,getFocusableElements:jm,getFooter:cw,getHtmlContainer:ym,getIcon:Uo,getIconContent:VA,getImage:lw,getInputLabel:YA,getLoader:Po,getPopup:Te,getProgressSteps:xm,getTimerLeft:J1,getTimerProgressBar:Nc,getTitle:iw,getValidationMessage:Sc,increaseTimer:V1,isDeprecatedParameter:Hw,isLoading:KA,isTimerRunning:Y1,isUpdatableParameter:$w,isValidParameter:Pw,isVisible:PO,mixin:q1,off:ek,on:Q1,once:W1,resumeTimer:Yw,showLoading:ko,stopTimer:Vw,toggleTimer:F1});class nk{constructor(a,o){this.callback=a,this.remaining=o,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(a){const o=this.running;return o&&this.stop(),this.remaining+=a,o&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Xw=["swal-title","swal-html","swal-footer"],ak=n=>{const a=typeof n.template=="string"?document.querySelector(n.template):n.template;if(!a)return{};const o=a.content;return dk(o),Object.assign(rk(o),ok(o),sk(o),ik(o),lk(o),ck(o),uk(o,Xw))},rk=n=>{const a={};return Array.from(n.querySelectorAll("swal-param")).forEach(l=>{yr(l,["name","value"]);const u=l.getAttribute("name"),d=l.getAttribute("value");!u||!d||(typeof jo[u]=="boolean"?a[u]=d!=="false":typeof jo[u]=="object"?a[u]=JSON.parse(d):a[u]=d)}),a},ok=n=>{const a={};return Array.from(n.querySelectorAll("swal-function-param")).forEach(l=>{const u=l.getAttribute("name"),d=l.getAttribute("value");!u||!d||(a[u]=new Function(`return ${d}`)())}),a},sk=n=>{const a={};return Array.from(n.querySelectorAll("swal-button")).forEach(l=>{yr(l,["type","color","aria-label"]);const u=l.getAttribute("type");!u||!["confirm","cancel","deny"].includes(u)||(a[`${u}ButtonText`]=l.innerHTML,a[`show${gm(u)}Button`]=!0,l.hasAttribute("color")&&(a[`${u}ButtonColor`]=l.getAttribute("color")),l.hasAttribute("aria-label")&&(a[`${u}ButtonAriaLabel`]=l.getAttribute("aria-label")))}),a},ik=n=>{const a={},o=n.querySelector("swal-image");return o&&(yr(o,["src","width","height","alt"]),o.hasAttribute("src")&&(a.imageUrl=o.getAttribute("src")||void 0),o.hasAttribute("width")&&(a.imageWidth=o.getAttribute("width")||void 0),o.hasAttribute("height")&&(a.imageHeight=o.getAttribute("height")||void 0),o.hasAttribute("alt")&&(a.imageAlt=o.getAttribute("alt")||void 0)),a},lk=n=>{const a={},o=n.querySelector("swal-icon");return o&&(yr(o,["type","color"]),o.hasAttribute("type")&&(a.icon=o.getAttribute("type")),o.hasAttribute("color")&&(a.iconColor=o.getAttribute("color")),a.iconHtml=o.innerHTML),a},ck=n=>{const a={},o=n.querySelector("swal-input");o&&(yr(o,["type","label","placeholder","value"]),a.input=o.getAttribute("type")||"text",o.hasAttribute("label")&&(a.inputLabel=o.getAttribute("label")),o.hasAttribute("placeholder")&&(a.inputPlaceholder=o.getAttribute("placeholder")),o.hasAttribute("value")&&(a.inputValue=o.getAttribute("value")));const l=Array.from(n.querySelectorAll("swal-input-option"));return l.length&&(a.inputOptions={},l.forEach(u=>{yr(u,["value"]);const d=u.getAttribute("value");if(!d)return;const p=u.innerHTML;a.inputOptions[d]=p})),a},uk=(n,a)=>{const o={};for(const l in a){const u=a[l],d=n.querySelector(u);d&&(yr(d,[]),o[u.replace(/^swal-/,"")]=d.innerHTML.trim())}return o},dk=n=>{const a=Xw.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(n.children).forEach(o=>{const l=o.tagName.toLowerCase();a.includes(l)||Nt(`Unrecognized element <${l}>`)})},yr=(n,a)=>{Array.from(n.attributes).forEach(o=>{a.indexOf(o.name)===-1&&Nt([`Unrecognized attribute "${o.name}" on <${n.tagName.toLowerCase()}>.`,`${a.length?`Allowed attributes are: ${a.join(", ")}`:"To set the value, use HTML within the element."}`])})},Kw=10,fk=n=>{const a=Et(),o=Te();typeof n.willOpen=="function"&&n.willOpen(o),he.eventEmitter.emit("willOpen",o);const u=window.getComputedStyle(document.body).overflowY;hk(a,o,n),setTimeout(()=>{mk(a,o)},Kw),Sm()&&(pk(a,n.scrollbarPadding,u),KO()),!Ec()&&!he.previousActiveElement&&(he.previousActiveElement=document.activeElement),typeof n.didOpen=="function"&&setTimeout(()=>n.didOpen(o)),he.eventEmitter.emit("didOpen",o),gn(a,F["no-transition"])},rc=n=>{const a=Te();if(n.target!==a)return;const o=Et();a.removeEventListener("animationend",rc),a.removeEventListener("transitionend",rc),o.style.overflowY="auto"},mk=(n,a)=>{fw(a)?(n.style.overflowY="hidden",a.addEventListener("animationend",rc),a.addEventListener("transitionend",rc)):n.style.overflowY="auto"},pk=(n,a,o)=>{ZO(),a&&o!=="hidden"&&r1(o),setTimeout(()=>{n.scrollTop=0})},hk=(n,a,o)=>{De(n,o.showClass.backdrop),o.animation?(a.style.setProperty("opacity","0","important"),mt(a,"grid"),setTimeout(()=>{De(a,o.showClass.popup),a.style.removeProperty("opacity")},Kw)):mt(a,"grid"),De([document.documentElement,document.body],F.shown),o.heightAuto&&o.backdrop&&!o.toast&&De([document.documentElement,document.body],F["height-auto"])};var kb={email:(n,a)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(n)?Promise.resolve():Promise.resolve(a||"Invalid email address"),url:(n,a)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(n)?Promise.resolve():Promise.resolve(a||"Invalid URL")};function gk(n){n.inputValidator||(n.input==="email"&&(n.inputValidator=kb.email),n.input==="url"&&(n.inputValidator=kb.url))}function vk(n){(!n.target||typeof n.target=="string"&&!document.querySelector(n.target)||typeof n.target!="string"&&!n.target.appendChild)&&(Nt('Target parameter is not valid, defaulting to "body"'),n.target="body")}function bk(n){gk(n),n.showLoaderOnConfirm&&!n.preConfirm&&Nt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),vk(n),typeof n.title=="string"&&(n.title=n.title.split(`
`).join("<br />")),lO(n)}let Tn;var Il=new WeakMap;class at{constructor(...a){if(IA(this,Il,void 0),typeof window>"u")return;Tn=this;const o=Object.freeze(this.constructor.argsToParams(a));this.params=o,this.isAwaitingPromise=!1,PA(Il,this,this._main(Tn.params))}_main(a,o={}){if(Gw(Object.assign({},o,a)),he.currentInstance){const d=Oo.swalPromiseResolve.get(he.currentInstance),{isAwaitingPromise:p}=he.currentInstance;he.currentInstance._destroy(),p||d({isDismissed:!0}),Sm()&&Nw()}he.currentInstance=Tn;const l=xk(a,o);bk(l),Object.freeze(l),he.timeout&&(he.timeout.stop(),delete he.timeout),clearTimeout(he.restoreFocusTimeout);const u=wk(Tn);return xw(Tn,l),Ge.innerParams.set(Tn,l),yk(Tn,u,l)}then(a){return yb(Il,this).then(a)}finally(a){return yb(Il,this).finally(a)}}const yk=(n,a,o)=>new Promise((l,u)=>{const d=p=>{n.close({isDismissed:!0,dismiss:p})};Oo.swalPromiseResolve.set(n,l),Oo.swalPromiseReject.set(n,u),a.confirmButton.onclick=()=>{w1(n)},a.denyButton.onclick=()=>{j1(n)},a.cancelButton.onclick=()=>{S1(n,d)},a.closeButton.onclick=()=>{d($o.close)},B1(o,a,d),GO(he,o,d),f1(n,o),fk(o),jk(he,o,d),Sk(a,o),setTimeout(()=>{a.container.scrollTop=0})}),xk=(n,a)=>{const o=ak(n),l=Object.assign({},jo,a,o,n);return l.showClass=Object.assign({},jo.showClass,l.showClass),l.hideClass=Object.assign({},jo.hideClass,l.hideClass),l.animation===!1&&(l.showClass={backdrop:"swal2-noanimation"},l.hideClass={}),l},wk=n=>{const a={popup:Te(),container:Et(),actions:gi(),confirmButton:Mn(),denyButton:Nr(),cancelButton:Io(),loader:Po(),closeButton:wm(),validationMessage:Sc(),progressSteps:xm()};return Ge.domCache.set(n,a),a},jk=(n,a,o)=>{const l=Nc();wt(l),a.timer&&(n.timeout=new nk(()=>{o("timer"),delete n.timeout},a.timer),a.timerProgressBar&&(mt(l),Vt(l,a,"timerProgressBar"),setTimeout(()=>{n.timeout&&n.timeout.running&&Em(a.timer)})))},Sk=(n,a)=>{if(!a.toast){if(!jc(a.allowEnterKey)){sw("allowEnterKey"),Ck();return}Nk(n)||Ek(n,a)||Of(-1,1)}},Nk=n=>{const a=Array.from(n.popup.querySelectorAll("[autofocus]"));for(const o of a)if(o instanceof HTMLElement&&Bt(o))return o.focus(),!0;return!1},Ek=(n,a)=>a.focusDeny&&Bt(n.denyButton)?(n.denyButton.focus(),!0):a.focusCancel&&Bt(n.cancelButton)?(n.cancelButton.focus(),!0):a.focusConfirm&&Bt(n.confirmButton)?(n.confirmButton.focus(),!0):!1,Ck=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};at.prototype.disableButtons=Bw;at.prototype.enableButtons=Mw;at.prototype.getInput=Rw;at.prototype.disableInput=_w;at.prototype.enableInput=zw;at.prototype.hideLoading=nc;at.prototype.disableLoading=nc;at.prototype.showValidationMessage=Uw;at.prototype.resetValidationMessage=Iw;at.prototype.close=Ga;at.prototype.closePopup=Ga;at.prototype.closeModal=Ga;at.prototype.closeToast=Ga;at.prototype.rejectPromise=Aw;at.prototype.update=qw;at.prototype._destroy=Jw;Object.assign(at,tk);Object.keys(M1).forEach(n=>{at[n]=function(...a){return Tn&&Tn[n]?Tn[n](...a):null}});at.DismissReason=$o;at.version="11.23.0";const oc=at;oc.default=oc;typeof document<"u"&&(function(n,a){var o=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(o),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=a);else try{o.innerHTML=a}catch{o.innerText=a}})(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');async function Zw({titulo:n="¿Estás seguro?",mensaje:a="Confirma para continuar.",icono:o="warning",textoConfirmar:l="Sí, continuar",textoCancelar:u="Cancelar"}){return(await oc.fire({title:n,text:a,icon:o,showCancelButton:!0,confirmButtonText:l,cancelButtonText:u,reverseButtons:!0,confirmButtonColor:"#0d6efd",cancelButtonColor:"#6c757d",returnFocus:!1,heightAuto:!1,backdrop:!0,didOpen:()=>{const p=document.querySelector('.modal.show[aria-hidden="true"]');p&&p.removeAttribute("aria-hidden")},willClose:()=>{document.querySelector(".modal.show")}})).isConfirmed}const Pl="auth_session";function Ak(n){for(n=n.replace(/-/g,"+").replace(/_/g,"/");n.length%4;)n+="=";return atob(n)}const Qw=m.createContext(null);function Ok({children:n}){const{activeBackend:a}=lc(),o=a?.url||null,l=da(),{showToast:u}=zn(),[d,p]=m.useState(!0),[g,h]=m.useState(null),[v,b]=m.useState(null),[x,w]=m.useState(!1),S=qe.useRef(o);m.useEffect(()=>{S.current=o},[o]);const N=m.useCallback(()=>{localStorage.removeItem(Pl),h(null),b(null),w(!1),window.location.pathname!=="/"&&l("/",{replace:!0}),u("👋 Sesión cerrada correctamente","info",3e3,"Autenticación")},[l,u]),R=m.useCallback((T,_)=>{if(!T)return;const M={token:T,user:_||null,backendUrl:S.current,timestamp:Date.now()};localStorage.setItem(Pl,JSON.stringify(M))},[]),E=m.useCallback(async(T,_=()=>{})=>{const M=(I,z="danger")=>{console.log(I),u(I,z,1e4,"Autenticación"),N(),_()},L=S.current;if(!L){if(console.log("Validando backend en login:",L),!await Zw({titulo:"Backend no configurado",mensaje:"No hay un backend activo para realizar la autenticación. Dirígete a la opción «Más», en la parte superior derecha, o al menú hamburguesa y selecciona «Configurar Backend».",textoConfirmar:"✅ Abrir Administración de Backends",textoCancelar:"❌ Cancelar",icono:"info"})){u("❌ Operación cancelada por el usuario","warning",4e3,"Autenticación"),_();return}window.dispatchEvent(new CustomEvent("backend:open-config")),_();return}try{const z=await(await fetch(L,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accion:"googleLogin",googleToken:T})})).json();if(!z||z.status!=="ok"||!z.token||!z.user){M(z.mensaje||"❌ Error de autenticación desde el backend");return}const{token:Y,user:W}=z;u(`👋 Bienvenido ${W.nombre}`,"success",3e3,"Autenticación"),h(Y),b(W),w(!0),R(Y,W),_()}catch(I){console.error("Error en login (intercambio de token):",I),M("❌ Error de conexión con el backend")}},[u,N,R]);m.useEffect(()=>{const T=localStorage.getItem(Pl);if(T)try{const _=JSON.parse(T);_.token&&(h(_.token),b(_.user||null),w(!0))}catch(_){console.error("Error parseando sesión guardada:",_),localStorage.removeItem(Pl)}p(!1)},[]);const O=m.useCallback(async()=>{const T=S.current;if(!g||!T)return!1;try{const M=await(await fetch(`${a.url}?accion=ping&token=${g}`)).json();return M&&(M.status==="ok"||M.autorizado)?(b(L=>({...L,correo:M.correo,nombre:M.nombre,picture:M.picture,rol:M.rol,permisos:M.permisos})),w(!0),!0):(x&&console.log(M.mensaje||"⚠️ Tu sesión ha expirado."),N(),!1)}catch(_){return console.log("auth184 (verifyToken)",_.message),u("⚠️ Error de conexión. No se pudo verificar la sesión.","warning",4e3,"Autenticación"),N(),!1}},[g,a,N,u,x]);m.useEffect(()=>{g&&!x&&O()},[g,x,O]),m.useEffect(()=>{if(!g)return;const T=setInterval(async()=>{await O()||(console.warn("⚠️ Token expirado. Cerrando sesión automáticamente..."),N())},300*1e3);return()=>clearInterval(T)},[g,O,N]),m.useEffect(()=>{g&&a?.url&&O()},[a?.url,g,O]),m.useEffect(()=>{if(!g)return;const T=()=>{try{const M=g.split(".")[0];if(!M){N();return}const L=Ak(M);JSON.parse(L).exp*1e3<Date.now()&&(console.log("⚠️ Token expirado localmente. Cerrando sesión..."),N())}catch(M){console.error("Error verificando expiración local del token propio:",M),N()}},_=setInterval(T,60*1e3);return T(),()=>clearInterval(_)},[g,N,u]),m.useEffect(()=>{function T(_){const M=_?.detail?.message||"⚠️ Tu sesión ha expirado. Inicia sesión nuevamente.";console.warn("🟡 Evento auth:required recibido:",M),x&&N()}return window.addEventListener("auth:required",T),()=>window.removeEventListener("auth:required",T)},[x,N,u]);const C={authToken:g,user:v,authenticated:x,loading:d,login:E,logout:N,verifyToken:O};return i.jsx(Qw.Provider,{value:C,children:n})}function Ac(){return m.useContext(Qw)}const kk="auth_session";class Rm extends Error{constructor(a="Autenticación requerida"){super(a),this.name="AuthRequiredError"}}function Ho(){try{return JSON.parse(localStorage.getItem(kk))?.token||null}catch{return null}}function Dm(n){console.warn("notifyAuthRequired:",n);try{window.dispatchEvent(new CustomEvent("auth:required",{detail:{message:n}}))}catch(a){console.error("Error dispatching auth:required",a)}}async function Ww(n){if(!n.ok)throw new Error(`Error HTTP ${n.status}: ${n.statusText}`);const a=await n.json();if(a.status==="token_invalido"||a.autorizado===!1&&a.motivo==="token_invalido"){const o=a.mensaje||"Token inválido o sesión expirada";throw Dm(o),new Rm(o)}if(a.status==="sin_permiso"){const o=a.mensaje||"No tiene permiso para realizar esta acción";throw console.warn("⛔ Acción bloqueada por permisos:",o),new Error(o)}if(a.status&&!["ok","exists","error_validacion","error_campos","archivo_existente"].includes(a.status))throw new Error(a.mensaje||"Error en respuesta del servidor");return a}async function Sn(n,a={}){const o=ey();if(!o)throw new Error("Backend no configurado");const l=Ho();if(!l)throw Dm("No hay token en localStorage"),new Rm("No hay token de sesión");const u=new URLSearchParams({accion:n,...a,token:l});try{const d=await fetch(`${o}?${u.toString()}`,{credentials:"omit"});return await Ww(d,n)}catch(d){throw console.error(`❌ apiGet [${n}]`,d),d}}async function Ze(n,a={}){const o=ey();if(!o)throw new Error("Backend no configurado");const l=Ho();if(!l)throw Dm("No hay token en localStorage"),new Rm("No hay token de sesión");const u={accion:n,...a,token:l};try{const d=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u),credentials:"omit"});if(n==="generarBackupZIP"){if(!d.ok)throw new Error(`Error HTTP ${d.status}: ${d.statusText}`);const p=await d.json();if(p.status==="ok"&&p.base64){const g=atob(p.base64),h=new Array(g.length);for(let x=0;x<g.length;x++)h[x]=g.charCodeAt(x);const v=new Uint8Array(h),b=new Blob([v],{type:p.mimeType||"application/zip"});return{status:"ok",mensaje:p.mensaje,blob:b,nombreArchivo:p.nombreArchivo}}return p}return await Ww(d,n)}catch(d){throw console.error(`❌ apiPost [${n}]`,d),d}}const e0=m.createContext(null),lf=new Date().getFullYear()-1;function Tk({children:n}){const{showToast:a}=zn(),[o,l]=m.useState([]),[u,d]=m.useState(!1),p=m.useCallback(async O=>{d(!0);try{const C=await Sn("obtenerArchivosPorAnio",{anio:O});return C&&C.status==="ok"?C.archivos||[]:C.archivos||[]}catch(C){return console.error("❌ Error al obtener archivos por año:",C.message),[]}finally{d(!1)}},[]),g=m.useCallback(async()=>{d(!0);try{const O=await Sn("obtenerProductos");if(O&&O.status==="ok")return O.data||[]}catch(O){return console.error("❌ Error al obtener productos",O.message),[]}finally{d(!1)}},[]),h=m.useCallback(async()=>{d(!0);try{const C=(await Sn("obtenerProductos")).data||[],T=await p(String(lf)),M=C.map(L=>{const I=T.find(z=>String(z.productoId)===String(L.id)&&String(z.anio)===String(lf))||null;return{...L,tieneArchivo:!!I,archivoInfo:I}}).sort((L,I)=>!L.tieneArchivo&&I.tieneArchivo?-1:L.tieneArchivo&&!I.tieneArchivo?1:0);l(M)}catch(O){console.error("❌ Error refreshProductos:",O.message)}finally{d(!1)}},[p]),v=m.useCallback(async O=>{d(!0);try{const C=await Ze("actualizarProducto",O);return C.status==="ok"?(await h(),{ok:!0,mensaje:C.mensaje||"Producto actualizado correctamente",datos:C.producto}):{ok:!1,mensaje:C?.mensaje||"No se pudo actualizar el producto"}}catch(C){return console.error("❌ actualizarProducto:",C.message),{ok:!1,mensaje:"Error al actualizar el producto"}}finally{d(!1)}},[h]),b=O=>new Promise((C,T)=>{const _=new FileReader;_.readAsDataURL(O),_.onload=()=>C(_.result.split(",")[1]),_.onerror=M=>T(M)}),x=m.useCallback(async({nombre:O,descripcion:C,entidad:T,tipo:_})=>{d(!0);try{const M=await Ze("agregarProducto",{nombre:O,descripcion:C,entidad:T,tipo:_});return M.status==="ok"?(await h(),{ok:!0,mensaje:"✅ Producto agregado con éxito",data:M}):{ok:!1,mensaje:M.mensaje||"Error al agregar producto",data:M}}catch(M){return console.error("❌ agregarProducto:",M.message),{ok:!1,mensaje:"Error al agregar producto"}}finally{d(!1)}},[h]),w=m.useCallback(async O=>{d(!0);try{const C=await Ze("eliminarProducto",{id:O});return C.status==="ok"?(a("✅ Producto eliminado correctamente","success",3e3,"ProductosContext"),await h()):a(`❌ Error al eliminar: ${C.mensaje||"sin detalle"}`,"error",3e3,"ProductosContext"),{ok:!1,mensaje:C.mensaje||"❌ Error al eliminar producto",data:C}}catch(C){return a("❌ Error eliminando producto","error",3e3,"ProductosContext"),console.error("❌ eliminarProducto:",C.message),{ok:!1,mensaje:"❌ Error al eliminar producto"}}finally{d(!1)}},[h,a]),S=m.useCallback(async(O,C,T,_=!1,M="")=>{if(!T)return{ok:!1,mensaje:"Seleccione un archivo"};d(!0);try{const L=await b(T),I={anio:C,productosId:O,usarExistente:_,nombreProducto:M,archivo:{nombre:T.name,base64:L,tipo:T.type}},z=await Ze("subirArchivoProducto",I);return z.status==="error_validacion"&&(console.log("data",z),a(`${z.message}`,"info",15e3,"ProductosContext")),z.status==="ok"?(await h(),{ok:!0,mensaje:"Archivo subido correctamente",data:z}):z.status==="archivo_existente"?{ok:!1,mensaje:z.message||"⚠️ Ya existe un archivo para este producto"}:z.status==="exists"?{ok:!1,existe:!0,mensaje:z.message||"⚠️ Ya existe un archivo con este nombre. ¿Desea usar el existente?",data:z}:{ok:!1,mensaje:z.mensaje||"Error al subir archivo",data:z}}catch(L){const I=L.message.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor de Google.":"Error al conectar con el servidor.";return a(`❌ ${I}`,"error",15e3,"ProductosContext"),{ok:!1,mensaje:I}}finally{d(!1)}},[h]),N=m.useCallback(async(O,C,T,_=!1,M="",L=!1,I=!1)=>{if(!T)return{ok:!1,mensaje:"Seleccione un archivo para reemplazar"};d(!0);try{const z=await b(T),Y={productoId:O,anio:String(C),replaceOnlyThis:_,nombreProducto:M,usarExistente:L,forzarTodosLosAnios:I,archivo:{nombre:T.name,base64:z,tipo:T.type}},W=await Ze("remplazarArchivoProducto",Y);return W.status==="archivo_usado_en_otros_anios"?{ok:!1,requiereConfirmacion:!0,anios:W.aniosDetectados||[],mensaje:W.message||"El archivo también está siendo usado en otros años.",data:W}:W.status==="ok"?(await h(),{ok:!0,mensaje:W.mensaje||"Archivo reemplazado correctamente",data:W}):W.status==="exists"?{ok:!1,existe:!0,mensaje:W.message||"⚠️ Ya existe un archivo con este nombre. ¿Desea usar el existente?",data:W}:{ok:!1,mensaje:W.message||"No se pudo reemplazar el archivo",data:W}}catch(z){const Y=z.message?.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor.":"Error al conectar con el servidor.";return a(`❌ ${Y}`,"error",15e3,"ProductosContext"),{ok:!1,mensaje:Y}}finally{d(!1)}},[h,a]);m.useEffect(()=>{Ho()&&h()},[h]);const R=m.useCallback(async O=>{try{const C=await Ze("eliminarRegistroProducto",{id:O});if(C?.status==="ok"){const{eliminado:T}=C;return a(`✅ ${C.mensaje}`,"success",3e3,"ProductoContext"),{ok:!0,eliminado:T}}return a(`❌ ${C?.mensaje||"No se pudo eliminar el registro"}`,"error",3e3,"ProductoContext"),{ok:!1}}catch(C){return console.error(C),a("❌ Error eliminando registro","error",3e3,"ProductoContext"),{ok:!1}}finally{}},[a]),E=m.useCallback(async O=>{try{const C=await Ze("editarRegistroProducto",O);return C?.status==="ok"?(a(`✅ ${C.mensaje}`,"success",3e3,"ProductosContext"),{ok:!0,registro:C.registro}):(a(`❌ ${C?.mensaje||"No se pudo editar el registro"}`,"error",3e3,"ProductosContext"),{ok:!1})}catch(C){return console.error(C),a("❌ Error editando el registro","error",3e3,"ProductosContext"),{ok:!1}}finally{}},[a]);return i.jsx(e0.Provider,{value:{registroProductos:o,getProductos:g,refreshProductos:h,anioAnterior:lf,subirArchivo:S,remplaceArchivo:N,fetchArchivosPorAnio:p,addProducto:x,updateProducto:v,deleteProducto:w,deleteRegistroProducto:R,editRegistroProducto:E,loading:u},children:n})}function xi(){const n=m.useContext(e0);if(!n)throw new Error("useProductos debe usarse dentro de <ProductosProvider>");return n}const t0=m.createContext();function Rk({children:n}){const{showToast:a}=zn(),[o,l]=m.useState(!1),u=m.useCallback(async v=>{l(!0);try{const b=await Sn("obtenerFacturasPorAnio",{anio:v});return b&&b.status==="ok"?b.data||[]:b.data||[]}catch(b){return console.error("❌ Error al obtener facturas por año:",b.message),[]}finally{l(!1)}},[]),d=v=>new Promise((b,x)=>{const w=new FileReader;w.readAsDataURL(v),w.onload=()=>b(w.result.split(",")[1]),w.onerror=S=>x(S)}),p=m.useCallback(async({anio:v,entidad:b,descripcion:x,valor:w,metodoPago:S,file:N})=>{if(!N)return{ok:!1,mensaje:"Debe seleccionar un archivo context linea 36"};l(!0);try{const R=await d(N),E={anio:v,entidad:b,descripcion:x,valor:w,metodoPago:S,archivo:{nombre:N.name,base64:R,tipo:N.type}},O=await Ze("subirArchivoFacturas",E);return O.status==="error_validacion"&&(console.log("data",O),a(`${O.message}`,"info",15e3,"FacturasContext")),O.status==="ok"?{ok:!0,mensaje:O.message||"Factura subida correctamente",data:O}:{ok:!1,mensaje:O.message||"Error al subir la factura",data:O}}catch(R){const E=R.message.includes("500")?"Error 500: El archivo es demasiado pesado para el servidor de Google.":"Error al conectar con el servidor.";return a(`❌ ${E}`,"error",15e3,"FacturasContext"),{ok:!1,mensaje:E}}finally{l(!1)}},[a]),g=m.useCallback(async v=>{l(!0);try{const b=await Ze("actualizarFactura",v);return b.status==="ok"?{ok:!0,mensaje:b.mensaje||"Factura actualizada correctamente",datos:b.datos}:{ok:!1,mensaje:b.mensaje||"No se pudo actualizar la factura"}}catch(b){return console.error("❌ actualizarFactura:",b.message),{ok:!1,mensaje:"Error al actualizar la factura"}}finally{l(!1)}},[]),h=m.useCallback(async v=>{l(!0);try{const b=await Ze("eliminarFactura",{registroId:v});return b.status==="ok"?{ok:!0,mensaje:b.mensaje||"Factura eliminada correctamente",datos:b.datos}:{ok:!1,mensaje:b.mensaje||"Error al eliminar la factura"}}catch(b){return console.error("❌ eliminarFactura:",b.message),{ok:!1,mensaje:"Error al eliminar la factura"}}finally{l(!1)}},[]);return i.jsx(t0.Provider,{value:{loading:o,fetchFacturasPorAnio:u,subirFactura:p,updateFactura:g,deleteFactura:h},children:n})}function Lm(){return m.useContext(t0)}const n0=m.createContext(null);function Dk({children:n}){const{showToast:a}=zn(),[o,l]=m.useState([]),[u,d]=m.useState([]),[p,g]=m.useState(!1),h=m.useCallback(async()=>{g(!0);try{const N=await Sn("obtenerDatosTributarios");if(N.status==="ok"){const R=(N.data||[]).sort((E,O)=>E.orden-O.orden);return l(R),d(JSON.parse(JSON.stringify(R))),{ok:!0}}return a(N.mensaje||"Error al obtener datos","error"),{ok:!1}}catch(N){return console.error("❌ obtenerDatosTributarios error:",N),a("Error de conexión al cargar datos","error"),{ok:!1}}finally{g(!1)}},[a]),v=m.useCallback(async()=>{g(!0);try{const N=await Ze("actualizarDatosTributarios",{data:o});return N.status==="ok"?(d(JSON.parse(JSON.stringify(o))),a("✅ Todos los cambios han sido guardados","success"),{ok:!0}):(a("❌ "+N.mensaje,"error"),{ok:!1})}catch{return a("❌ Error al sincronizar con el servidor","error"),{ok:!1}}finally{g(!1)}},[o,a]),b=m.useCallback(()=>{l(JSON.parse(JSON.stringify(u))),a("Cambios descartados","info")},[u,a]),x=m.useMemo(()=>JSON.stringify(o)!==JSON.stringify(u),[o,u]),w=m.useMemo(()=>o.filter(N=>N.importante===!0||N.importante===1).length,[o]),S=m.useCallback(()=>{l([]),d([])},[]);return i.jsx(n0.Provider,{value:{datos:o,setDatos:l,loading:p,getDatos:h,saveChanges:v,discardChanges:b,isDirty:x,conteoImportantes:w,clearDatos:S},children:n})}const a0=()=>{const n=m.useContext(n0);if(!n)throw new Error("useDatosTributarios debe usarse dentro de DatosTributariosProvider");return n},r0=m.createContext(null);function Lk({children:n}){const{showToast:a}=zn(),[o,l]=m.useState([]),[u,d]=m.useState(!1),p=m.useCallback(async()=>{d(!0);try{const h=await Sn("obtenerLogs");h.status==="ok"?l(h.logs||[]):a(h.mensaje||"⚠️ No se pudieron cargar los logs.","warning",4e3,"LogsAdmin")}catch(h){console.error("❌ obtenerLogs error:",h),a("❌ Error de conexión al cargar logs.","danger",4e3,"LogsAdmin")}finally{d(!1)}},[a]),g=m.useCallback(async()=>{d(!0);try{const h=await Ze("limpiarLogsAntiguos");h.status==="ok"?(a(h.mensaje||"🧹 Logs limpiados correctamente","success",3e3,"LogsAdmin"),await p()):a(h.mensaje||"⚠️ No se pudo limpiar logs","warning",4e3,"LogsAdmin")}catch(h){console.error("❌ clearLogs error:",h),a("❌ Error al limpiar logs","danger",4e3,"LogsAdmin")}finally{d(!1)}},[a,p]);return i.jsx(r0.Provider,{value:{logs:o,loading:u,getDatos:p,clearDatos:g},children:n})}function Mk(){const n=m.useContext(r0);if(!n)throw new Error("useLogsAdmin debe usarse dentro de <LogsAdminProvider>");return n}const o0=m.createContext(),Bk=({children:n})=>{const{showToast:a}=zn(),[o,l]=m.useState([]),[u,d]=m.useState(!1),[p,g]=m.useState([]),[h,v]=m.useState(!1),b=m.useCallback(async()=>{try{const E=await Sn("obtenerRoles");E.status==="ok"?(g(E.data||[]),v(!1)):(g([]),v(!0),console.warn(E.mensaje,"UsuariosAdmin"))}catch(E){console.error("❌ Error al cargar roles:",E),g([]),v(!0),a("❌ Error de conexión al obtener roles.","danger",4e3,"UsuariosAdmin")}},[a]),x=m.useCallback(async()=>{d(!0);try{const E=await Sn("obtenerUsuarios");E.status==="ok"?l(E.datos||[]):console.warn(E.mensaje,"UsuariosAdmin")}catch(E){console.error("❌ obtenerUsuarios error:",E)}finally{d(!1)}},[]),w=async E=>{if(!E?.correo||!E?.nombre||!E?.rol)return a("⚠️ Todos los campos son obligatorios (correo, nombre, rol).","warning",4e3,"UsuariosAdmin");d(!0);try{const O={correo:E.correo,nombre:E.nombre,rol:E.rol},C=await Ze("agregarUsuario",O);C.status==="ok"?(l(C.datos||[]),a(C.mensaje||"✅ Usuario creado correctamente.","success",2e3,"UsuariosAdmin")):a(C.mensaje||"⚠️ No se pudo crear el usuario.","warning",4e3,"UsuariosAdmin")}catch(O){console.error("❌ agregarUsuario error:",O);const C=O.mensaje||O.message||"Error inesperado al procesar la solicitud";a(C,"danger",5e3,"UsuariosAdmin")}finally{d(!1)}},S=async(E,O)=>{d(!0);try{const C={correo:E,...O},T=await Ze("actualizarUsuario",C);T.status==="ok"?(l(T.datos||[]),a(T.mensaje||`✅ Usuario "${E}" actualizado correctamente.`,"success",2e3,"UsuariosAdmin")):a(T.mensaje||`⚠️ No se pudo actualizar el usuario "${E}".`,"warning",4e3,"UsuariosAdmin")}catch(C){console.error("❌ actualizarUsuario error:",C),a(`❌ Error de conexión al actualizar usuario "${E}".`,"danger",4e3,"UsuariosAdmin")}finally{d(!1)}},N=async(E,O,C)=>{d(!0);try{const _=await Ze("toggleUsuarioActivo",{correo:E,activo:O,nombre:C});_.status==="ok"?(l(_.datos||[]),console.log("nombre",C),a(_.mensaje||`🔁 Estado de "${E}" actualizado.`,"success",2e3,"UsuariosAdmin")):a(_.mensaje||`⚠️ No se pudo cambiar el estado de "${E}".`,"warning",4e3,"UsuariosAdmin")}catch(T){console.error("❌ toggleUsuarioActivo error:",T),a(`❌ Error al cambiar el estado de "${E}".`,"danger",4e3,"UsuariosAdmin")}finally{d(!1)}},R=async E=>{d(!0);try{const C=await Ze("eliminarUsuario",{correo:E});C.status==="ok"?(l(C.datos||[]),a(C.mensaje||`🗑️ Usuario "${E}" eliminado correctamente.`,"success",3e3,"UsuariosAdmin")):a(C.mensaje||`⚠️ No se pudo eliminar el usuario "${E}".`,"warning",4e3,"UsuariosAdmin")}catch(O){console.error("❌ eliminarUsuario error:",O),a(`❌ Error al eliminar el usuario "${E}" "${O}".`,"danger",1e4,"UsuariosAdmin")}finally{d(!1)}};return m.useEffect(()=>{Ho()&&(b(),x())},[b,x]),i.jsx(o0.Provider,{value:{usuarios:o,rolesDisponibles:p,rolesErrorPermisos:h,loading:u,getDatos:x,addDato:w,updateDato:S,toggleActivo:N,deleteDato:R},children:n})},zk=()=>m.useContext(o0),s0=m.createContext(),_k=({children:n})=>{const{showToast:a}=zn(),[o,l]=m.useState(null),[u,d]=m.useState(null),[p,g]=m.useState(!1),h=m.useCallback(async()=>{g(!0);try{const w=await Sn("obtenerConfig");w.status==="ok"&&(l(w.datos||w.data||{}),d(w.version||{}))}catch(w){console.error("❌ obtenerConfig error:",w),a("❌ Error al obtener configuración del servidor","danger",4e3,"ConfigAdmin")}finally{g(!1)}},[a]),v=async w=>{g(!0);try{const S=await Ze("actualizarConfig",w);S.status==="ok"?(l(S.datos||w),a(S.mensaje||"✅ Configuración actualizada correctamente","success",2e3,"ConfigAdmin")):a(S.mensaje||"⚠️ No se pudo actualizar la configuración","warning",4e3,"ConfigAdmin")}catch(S){console.error("❌ actualizarConfig error:",S),a("❌ Error de conexión con el servidor al actualizar configuración","danger",4e3,"ConfigAdmin")}finally{g(!1)}},b=async(w,S=!1)=>{g(!0);try{const N=await Ze("inicializarSistemaForzado",{confirmar:w,borrarCarpetas:S});return N.status==="ok"?a(N.mensaje||"✅ Sistema reinicializado correctamente","success",3e3,"ConfigAdmin"):N.status==="sin_permiso"?a(N.mensaje||"⛔ No tiene permisos para reinicializar","warning",4e3,"ConfigAdmin"):a(N.mensaje||"⚠️ Error al reinicializar el sistema","warning",4e3,"ConfigAdmin"),N}catch(N){return console.error("❌ reinicializarSistemaForzado error:",N),a(`❌ Reinicializar Sistema ${N}`,"danger",2e4,"ConfigAdmin"),{status:"error",mensaje:N.message}}finally{g(!1)}},x=async()=>{g(!0);try{const w=await Ze("generarBackupZIP",{});if(w.status==="ok"&&w.blob){a("✅ Backup generado correctamente","success",3e3,"ConfigAdmin"),console.log(w.blob);const S=URL.createObjectURL(w.blob),N=document.createElement("a");N.href=S,N.download=w.nombreArchivo||"Backup_Declaracion.zip",document.body.appendChild(N),N.click(),document.body.removeChild(N),URL.revokeObjectURL(S)}else a(w.mensaje||"⚠️ No se pudo generar el backup","warning",4e3,"ConfigAdmin")}catch(w){console.error("❌ generarBackup error:",w),a("❌ Error al generar el backup","danger",4e3,"ConfigAdmin")}finally{g(!1)}};return m.useEffect(()=>{Ho()&&h()},[h]),i.jsx(s0.Provider,{value:{config:o,loading:p,getConfig:h,versionBackend:u,updateConfig:v,reinicializarSistemaForzado:b,generarBackup:x},children:n})},Uk=()=>m.useContext(s0),i0=m.createContext(),Ik=({children:n})=>{const{showToast:a}=zn(),[o,l]=m.useState([]),[u,d]=m.useState([]),[p,g]=m.useState(!1),h=m.useCallback(async()=>{try{const S=await Sn("listarFuncionesLogicaNegocio");S.status==="ok"&&d(S.datos||[])}catch(S){console.error("❌ Error al Cargar Funciones",S),a("❌ Error al Cargar Funciones","danger",4e3,"RolesAdmin")}},[a]),v=m.useCallback(async()=>{g(!0);try{const S=await Sn("obtenerRoles");S.status==="ok"?l(S.data||[]):a(S.mensaje||"⚠️ No se pudieron cargar los roles.","warning",4e3,"RolesAdmin")}catch(S){console.error("❌ obtenerRoles error:",S),a("❌ Error de conexión con el servidor al cargar roles.","danger",4e3,"RolesAdmin")}finally{g(!1)}},[a]),b=async(S,N)=>{if(!S)return a("⚠️ Debe ingresar un nombre para el rol","warning",4e3,"AdminRoles");g(!0);try{const E=await Ze("agregarRol",{rol:S,permisos:N||[]});E.status==="ok"?(a(E.mensaje||"✅ Rol creado correctamente.","success",2e3,"RolesAdmin"),l(E.datos||[])):a(E.mensaje||"⚠️ No se pudo crear el rol.","warning",4e3,"RolesAdmin")}catch(R){console.error("❌ agregarRol error:",R),a("❌ Error de conexión con el servidor al crear el rol.","danger",4e3,"RolesAdmin")}finally{g(!1)}},x=async(S,N)=>{g(!0);try{const E=await Ze("actualizarRol",{rol:S,permisos:N});E.status==="ok"?(a(E.mensaje||`✅ Rol "${S}" actualizado correctamente.`,"success",2e3,"RolesAdmin"),l(E.datos||[])):a(E.mensaje||`⚠️ No se pudo actualizar el rol "${S}".`,"warning",4e3,"RolesAdmin")}catch(R){console.error("❌ actualizarRol error:",R),a(`❌ Error de conexión con el servidor al actualizar el rol "${S}".`,"danger",4e3,"RolesAdmin")}finally{g(!1)}},w=async S=>{if(g(!0),S==="administrador")return a("⚠️ No se puede eliminar el rol administrador","warning",4e3,"RolesAdmin");try{const R=await Ze("eliminarRol",{rol:S});R.status==="ok"?(a(R.mensaje,"success",3e3,"RolesAdmin"),l(R.datos||[])):a(R.mensaje,"warning",4e3,"RolesAdmin")}catch(N){console.error("❌ eliminarRol error:",N),a(`❌ Error al eliminar el rol: ${N?.message||N.toString()}`,"danger",8e3,"RolesAdmin")}finally{g(!1)}};return m.useEffect(()=>{Ho()&&h()},[h]),i.jsx(i0.Provider,{value:{roles:o,funcionesDisponibles:u,loading:p,getDatos:v,addDato:b,updateDato:x,deleteDato:w},children:n})},Pk=()=>m.useContext(i0);function l0({children:n}){return i.jsx(Lk,{children:i.jsx(Bk,{children:i.jsx(_k,{children:i.jsx(Ik,{children:n})})})})}const Ia="/appdeclaracion/assets/defaultAvatarImg-CF5KfDzf.png";function $k({show:n,onHide:a,onConfirm:o,loading:l}){const[u,d]=m.useState(""),[p,g]=m.useState(!1),h=()=>{o(u,p),d(""),g(!1)};return i.jsxs(ye,{show:n,onHide:a,centered:!0,children:[i.jsx(ye.Header,{closeButton:!0,children:i.jsx(ye.Title,{children:"⚠️ Reinicializar Proyecto"})}),i.jsxs(ye.Body,{children:[i.jsxs("p",{children:["Esta acción ",i.jsx("strong",{children:"eliminará todos los datos"})," y reiniciará la aplicación."]}),i.jsxs("p",{children:["Para confirmar, escriba ",i.jsx("strong",{children:"INICIALIZAR"}),":"]}),i.jsxs(ae,{children:[i.jsx(ae.Group,{children:i.jsx(ae.Control,{type:"text",placeholder:"INICIALIZAR",value:u,onChange:v=>d(v.target.value)})}),i.jsx(ae.Check,{type:"checkbox",label:"Borrar también las carpetas de archivos",checked:p,onChange:v=>g(v.target.checked),className:"mt-2 modal-reinit-checkbox"})]})]}),i.jsxs(ye.Footer,{children:[i.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),i.jsx(Oe,{variant:"danger",disabled:u!=="INICIALIZAR",onClick:h,children:l?i.jsxs(i.Fragment,{children:[i.jsx(St,{as:"span",animation:"border",size:"sm"})," Inicializando..."]}):"Reinicializar"})]})]})}const Go=({show:n})=>n?i.jsxs("div",{className:"loading-overlay",children:[i.jsx(St,{animation:"border",variant:"light"}),i.jsx("span",{className:"loading-text",children:"Procesando..."})]}):null;var Hk=["color","size","title","className"];function Tf(){return Tf=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Tf.apply(null,arguments)}function Gk(n,a){if(n==null)return{};var o,l,u=qk(n,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(l=0;l<d.length;l++)o=d[l],a.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(u[o]=n[o])}return u}function qk(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}var c0=m.forwardRef(function(n,a){var o=n.color,l=o===void 0?"currentColor":o,u=n.size,d=u===void 0?"1em":u,p=n.title,g=p===void 0?null:p,h=n.className,v=h===void 0?"":h,b=Gk(n,Hk);return qe.createElement("svg",Tf({ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:d,height:d,fill:l,className:["bi","bi-bell",v].filter(Boolean).join(" ")},b),g?qe.createElement("title",null,g):null,qe.createElement("path",{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"}))});c0.propTypes={color:Be.string,size:Be.oneOfType([Be.string,Be.number]),title:Be.string,className:Be.string};var Jk=["color","size","title","className"];function Rf(){return Rf=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)({}).hasOwnProperty.call(o,l)&&(n[l]=o[l])}return n},Rf.apply(null,arguments)}function Fk(n,a){if(n==null)return{};var o,l,u=Vk(n,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);for(l=0;l<d.length;l++)o=d[l],a.indexOf(o)===-1&&{}.propertyIsEnumerable.call(n,o)&&(u[o]=n[o])}return u}function Vk(n,a){if(n==null)return{};var o={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(a.indexOf(l)!==-1)continue;o[l]=n[l]}return o}var Df=m.forwardRef(function(n,a){var o=n.color,l=o===void 0?"currentColor":o,u=n.size,d=u===void 0?"1em":u,p=n.title,g=p===void 0?null:p,h=n.className,v=h===void 0?"":h,b=Fk(n,Jk);return qe.createElement("svg",Rf({ref:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:d,height:d,fill:l,className:["bi","bi-box-arrow-right",v].filter(Boolean).join(" ")},b),g?qe.createElement("title",null,g):null,qe.createElement("path",{fillRule:"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"}),qe.createElement("path",{fillRule:"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"}))});Df.propTypes={color:Be.string,size:Be.oneOfType([Be.string,Be.number]),title:Be.string,className:Be.string};function ma(){const{user:n}=Ac();return{puede:o=>n?n.permisos==="*"||n.permisos?.includes("*")?!0:n.permisos?.includes(o):!1}}const u0=({isOpen:n,onClose:a})=>n?i.jsx("div",{className:"tutorial-modal-overlay",onClick:a,children:i.jsxs("div",{className:"tutorial-modal-content",onClick:o=>o.stopPropagation(),children:[i.jsx("button",{className:"close-button",onClick:a,"aria-label":"Cerrar tutorial",children:"×"}),i.jsx("div",{className:"video-container",children:i.jsx("iframe",{src:"https://player.vimeo.com/video/1177499805?h=88dc37414d&badge=0&autopause=0&autoplay=1",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Video Tutorial AppDeclaración"})}),i.jsx("div",{className:"modal-footer-text",children:i.jsx("p",{children:"Descubre cómo gestionar tus documentos con AppDeclaración"})})]})}):null;function Yk({onOpenBackend:n}){const{puede:a}=ma(),o=a("obtenerDatosTributarios"),{activeBackend:l}=lc(),{getDatos:u,clearDatos:d,conteoImportantes:p}=a0(),[g,h]=m.useState(!1),{user:v,logout:b}=Ac(),[x,w]=m.useState(!1),[S,N]=m.useState(!1),[R,E]=m.useState(!1),O=da(),C=Ja(),T=()=>N(!1);m.useEffect(()=>{o?u():d()},[o,u]);const _=()=>{C.pathname==="/datos-tributarios"?u():O("/datos-tributarios")};m.useEffect(()=>{const I=setTimeout(()=>{w(!0)},1e4);return()=>clearTimeout(I)},[]);const M=x&&v?.picture||Ia,L=!!v;return i.jsx(i.Fragment,{children:i.jsxs("div",{className:"navbar-return-container sticky-top",children:[i.jsx(Ul,{bg:"light",expand:"lg",className:"shadow-sm mb-3 sticky-top navbar-nav-principal",children:i.jsxs(Bo,{fluid:!0,children:[i.jsxs("div",{className:"backend-circle-Brand",children:[l&&i.jsx("div",{className:"backend-circle ms-2",title:`Backend: ${l.alias}`,onClick:n,children:l.alias.slice(0,2).toUpperCase()}),i.jsxs("div",{className:"grupNavTex text-center",children:[i.jsx(Ul.Brand,{className:"app-brand",as:wn,to:"/",children:"AppDeclaración"}),l?.alias&&i.jsx("h6",{className:"backend-alias mb-0",title:l.alias,children:l.alias})]})]}),i.jsx("div",{className:"contCamp",children:i.jsxs("div",{className:"d-flex align-items-center position-relative",children:[i.jsxs("div",{className:`position-relative d-flex align-items-center me-3 notificacion-wrapper ${o?"":"opacity-50"}`,style:{cursor:o?"pointer":"not-allowed",filter:o?"none":"grayscale(1)"},onClick:o?_:void 0,title:o?"":"No tienes permisos para ver datos tributarios",children:[i.jsx(c0,{size:22}),o&&p>0&&i.jsx("span",{className:"badge-notificacion pulse-animation",children:p})]}),i.jsx(Ul.Toggle,{onClick:()=>N(!0),"aria-controls":"offcanvasNavbar-expand-lg"})]})}),i.jsxs(Ul.Offcanvas,{show:S,onHide:T,id:"offcanvasNavbar-expand-lg","aria-labelledby":"offcanvasNavbarLabel-expand-lg",placement:"end",children:[i.jsx(Pa.Header,{closeButton:!0,className:"offcanvas-header-user",children:L?i.jsxs("div",{className:"offcanvas-user-header",children:[i.jsx("img",{src:M,alt:"avatar",className:"offcanvas-user-avatar user-avatar",loading:"lazy",onError:I=>{I.target.src!==Ia&&(I.target.src=Ia)}},M),i.jsxs("div",{className:"offcanvas-user-info",children:[i.jsx("div",{className:"offcanvas-user-name",children:v.nombre||"Usuario"}),i.jsx("div",{className:"offcanvas-user-email",children:v.correo})]})]}):i.jsx(Pa.Title,{id:"offcanvasNavbarLabel-expand-lg",children:"Menú"})}),i.jsx(Pa.Body,{children:i.jsxs(qt,{className:"justify-content-end flex-grow-1 pe-3",children:[i.jsx(Ys,{placement:"bottom",animation:!1,overlay:i.jsx(go,{children:"Ver Productos"}),children:i.jsxs(qt.Link,{onClick:()=>{N(!1),O("/productos")},children:[i.jsx("span",{className:"icon-Verproductos"}),i.jsx("span",{className:"ms-2 d-lg-none",children:"Ver Productos"})," "]})}),i.jsx(Ys,{placement:"bottom",animation:!1,overlay:i.jsx(go,{children:"Add Facturas"}),children:i.jsxs(qt.Link,{onClick:()=>{N(!1),O("/facturas")},children:[i.jsx("span",{className:"icon-AddFacturas"}),i.jsx("span",{className:"ms-2 d-lg-none",children:"Facturas"})]})}),i.jsx(Ys,{placement:"bottom",animation:!1,overlay:i.jsx(go,{children:"Contador"}),children:i.jsxs(qt.Link,{onClick:()=>{N(!1),O("/contador")},children:[i.jsx("span",{className:"icon-Contador"}),i.jsx("span",{className:"ms-2 d-lg-none",children:"Contador"})]})}),L&&i.jsx(Ys,{placement:"bottom",animation:!1,overlay:i.jsx(go,{children:"Usuario Activo"}),children:i.jsx("div",{className:"navbar-session-Dropdown-desktop d-flex align-items-center ms-3",children:i.jsxs(mn,{align:"end",children:[i.jsx(mn.Toggle,{as:"div",id:"userDropdown",className:"cursor-pointer",style:{display:"flex",alignItems:"center"},children:i.jsx("img",{src:M,alt:"avatar",width:34,height:34,className:"rounded-circle user-avatar",loading:"lazy",onError:I=>{I.target.src!==Ia&&(I.target.src=Ia)}},M)}),i.jsxs(mn.Menu,{className:"p-3 text-center",children:[i.jsx("img",{src:M,alt:"avatar",className:"rounded-circle mb-2 user-avatar-lg",loading:"lazy",onError:I=>{I.target.src!==Ia&&(I.target.src=Ia)}},M),i.jsx("div",{className:"fw-bold",children:v.nombre||"Usuario desconocido"}),i.jsx("div",{className:"text-muted small mb-2",children:v.correo}),i.jsx(mn.Divider,{}),i.jsxs(mn.Item,{onClick:()=>{b(),O("/")},className:" text-danger text-center fw-semibold d-flex align-items-center justify-content-center gap-1",children:[i.jsx(Df,{size:16})," Cerrar sesión"]})]})]})})}),i.jsx(Ys,{placement:"bottom",animation:!1,overlay:i.jsx(go,{children:"Más"}),children:i.jsxs(un,{title:i.jsx("span",{className:"icon-menu-kebab"}),id:"nav-dropdown",className:"Navbar-NavDropdown-Mas-Desktop",children:[i.jsx(un.Item,{onClick:()=>N(!1),as:wn,to:"/admin",children:"Admin & Config"}),i.jsx(un.Divider,{}),i.jsx(un.Item,{onClick:n,children:"Adicionar Backend"}),i.jsx(un.Divider,{}),i.jsx(un.Item,{onClick:()=>E(!0),children:"Guía de uso"}),i.jsx(un.Divider,{}),i.jsx(un.Item,{onClick:()=>N(!1),as:wn,to:"/backend-setup",children:"Configurar Backend"}),i.jsx(un.Divider,{}),i.jsx(un.Item,{onClick:()=>N(!1),as:wn,to:"/donaciones",children:"Donaciones"}),i.jsx(un.Divider,{}),i.jsx(un.Item,{onClick:()=>N(!1),as:wn,to:"/acerca-de",children:"Acerca de"})]})}),i.jsxs(qt.Link,{className:"Navbar-NavLink-Mas nav-link-more",onClick:()=>{N(!1),h(!0)},children:[i.jsx("span",{children:"Más"}),i.jsx("span",{className:"arrow",children:"›"})]})]})}),v&&i.jsx("div",{className:"offcanvas-logout-mobile romeo",children:i.jsxs("button",{className:"offcanvas-logout-btn julieta",onClick:()=>{N(!1),b(),O("/")},children:[i.jsx(Df,{size:18}),i.jsx("span",{children:"Cerrar sesión"})]})})]})]})},"lg"),i.jsxs(Pa,{placement:"end",show:g,onHide:()=>h(!1),children:[i.jsx(Pa.Header,{closeButton:!0,children:i.jsx(Pa.Title,{style:{cursor:"pointer"},onClick:()=>{h(!1),N(!0)},children:"← Más opciones"})}),i.jsx(Pa.Body,{children:i.jsxs(qt,{className:"flex-column",children:[i.jsx(qt.Link,{onClick:()=>{h(!1),O("/admin")},children:"Admin & Config"}),i.jsx(qt.Link,{onClick:()=>{N(!1),n()},children:"Adicionar Backend"}),i.jsx(qt.Link,{onClick:()=>{h(!1),E(!0)},children:"Guía de uso"}),i.jsx(qt.Link,{onClick:()=>{h(!1),O("/backend-setup")},children:"Configurar Backend"}),i.jsx(qt.Link,{onClick:()=>{h(!1),O("/donaciones")},children:"Donaciones"}),i.jsx(qt.Link,{onClick:()=>{h(!1),O("/acerca-de")},children:"Acerca de"})]})})]}),i.jsx(u0,{isOpen:R,onClose:()=>E(!1)})]})})}function pa({show:n,onHide:a,title:o="Confirmar acción",message:l="¿Deseas continuar con esta operación?",confirmLabel:u="Confirmar",confirmVariant:d="primary",onConfirm:p}){const[g,h]=m.useState(!1),[v,b]=m.useState(!1),x=async()=>{p&&(b(!0),await p(),b(!1),h(!1),a())};return i.jsxs(i.Fragment,{children:[i.jsxs(ye,{show:n,onHide:a,centered:!0,children:[i.jsx(ye.Header,{closeButton:!0,children:i.jsx(ye.Title,{children:o})}),i.jsxs(ye.Body,{children:[typeof l=="string"?i.jsx("p",{children:l}):l,i.jsx(ae.Check,{type:"switch",id:"confirm-action-switch",label:g?"Confirmado (acción habilitada)":"Desactivado",checked:g,onChange:w=>h(w.target.checked)})]}),i.jsxs(ye.Footer,{children:[i.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),i.jsx(Oe,{variant:d,onClick:x,disabled:!g||v,children:v?i.jsxs(i.Fragment,{children:[i.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Guardando..."]}):u})]})]}),i.jsx(Go,{show:v})]})}const Xk=({show:n,onHide:a})=>{const{backends:o,activeBackend:l,addBackend:u,deleteBackend:d,setActiveBackend:p}=lc(),[g,h]=m.useState(null),{showToast:v}=zn(),[b,x]=m.useState(""),[w,S]=m.useState(""),[N,R]=m.useState(!1),E=()=>{try{u(b,w),v(`✅ Backend "${b}" agregado`,"success",3e3),x(""),S(""),R(!1)}catch(C){v(`❌ ${C.message}`,"danger",3e3)}},O=C=>{d(C),h(null),v(`✅ Backend "${C}" eliminado`,"success",3e3)};return i.jsxs(i.Fragment,{children:[i.jsxs(ye,{show:n,onHide:a,centered:!0,className:"BackendConfigModal",children:[i.jsx(ye.Header,{closeButton:!0,children:i.jsx(ye.Title,{children:"Adicionar Backends (URL del Worker)"})}),i.jsxs(ye.Body,{children:[o.length===0?i.jsx("p",{children:"No hay backends configurados."}):i.jsx("div",{className:"backend-list-container",children:i.jsx("ul",{className:"list-group",children:o.map(C=>i.jsxs("li",{className:`list-group-item d-flex justify-content-between align-items-center ${l?.alias===C.alias?"active":""}`,children:[i.jsx("span",{children:C.alias}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsx(Oe,{size:"sm",variant:"success",onClick:()=>p(C.alias),children:"Usar"}),i.jsx(Oe,{size:"sm",variant:"danger",onClick:()=>h(C.alias),children:"Eliminar"})]})]},C.alias))})}),i.jsx("hr",{}),i.jsx("h6",{style:{cursor:"pointer",color:"#0d6efd"},onClick:()=>R(C=>!C),children:N?"➖ Cancelar":"➕ Agregar nuevo Backend"}),N&&i.jsxs(ae,{children:[i.jsxs(ae.Group,{className:"mb-2",children:[i.jsx(ae.Label,{children:"Alias"}),i.jsx(ae.Control,{type:"text",placeholder:"Ej: Cliente1",value:b,onChange:C=>x(C.target.value)})]}),i.jsxs(ae.Group,{className:"mb-2",children:[i.jsx(ae.Label,{children:"URL"}),i.jsx(ae.Control,{type:"text",placeholder:"http://localhost:8080",value:w,onChange:C=>S(C.target.value)})]}),i.jsx(Oe,{variant:"primary",onClick:E,children:"Guardar"})]})]})]}),i.jsx(pa,{show:g,onHide:()=>h(!1),title:"Eliminar Usuario",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar el backend ",i.jsx("strong",{children:g}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>O(g)})]})};function Kk(){const[n,a]=m.useState(null),[o,l]=m.useState(!1);m.useEffect(()=>{const d=p=>{p.preventDefault(),a(p),l(!0)};return window.addEventListener("beforeinstallprompt",d),()=>{window.removeEventListener("beforeinstallprompt",d)}},[]);const u=async()=>{if(!n)return;n.prompt(),(await n.userChoice).outcome==="accepted"?console.log("✅ Usuario aceptó instalar"):console.log("❌ Usuario canceló instalación"),a(null),l(!1)};return o?i.jsx("div",{style:Tb.container,children:i.jsx("button",{style:Tb.button,onClick:u,children:"📲 Agregar a pantalla de inicio"})}):null}const Tb={container:{position:"fixed",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:9999},button:{backgroundColor:"#0d6efd",color:"#fff",border:"none",padding:"12px 18px",borderRadius:"8px",fontSize:"16px",cursor:"pointer",boxShadow:"0 4px 8px rgba(0,0,0,0.2)"}};function Zk(){const[n,a]=m.useState(!1);return m.useEffect(()=>{const o=/iphone|ipad|ipod/i.test(navigator.userAgent),l=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),u=window.navigator.standalone===!0||window.matchMedia("(display-mode: standalone)").matches;o&&l&&!u&&a(!0)},[]),n?i.jsx("div",{style:cf.overlay,children:i.jsxs("div",{style:cf.modal,children:[i.jsx("h4",{children:"📲 Instalar App"}),i.jsxs("p",{children:["Para agregar esta app a tu iPhone:",i.jsx("br",{}),i.jsx("strong",{children:"1."})," Toca ",i.jsx("b",{children:"Compartir"})," ⬆️",i.jsx("br",{}),i.jsx("strong",{children:"2."})," Selecciona ",i.jsx("b",{children:"Agregar a pantalla de inicio"})]}),i.jsx("button",{onClick:()=>a(!1),style:cf.button,children:"Entendido"})]})}):null}const cf={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.6)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},modal:{backgroundColor:"#fff",padding:"20px",borderRadius:"12px",maxWidth:"320px",textAlign:"center"},button:{marginTop:"15px",padding:"10px 16px",border:"none",borderRadius:"8px",backgroundColor:"#0d6efd",color:"#fff",cursor:"pointer"}};function Qk(){const{login:n,authenticated:a,loading:o}=Ac(),{activeBackend:l}=lc(),u=da(),[d,p]=m.useState(!1),[g,h]=m.useState(!1),[v,b]=m.useState(!1);return m.useEffect(()=>{if(!o){if(a&&!l&&!g){h(!0),window.dispatchEvent(new CustomEvent("backend:open-config"));return}a&&l&&u("/productos",{replace:!0})}},[a,o,l,g,u]),m.useEffect(()=>{if(o||a||d)return;const x=document.getElementById("googleLoginDiv");if(!x)return;const w=setInterval(()=>{window.google?.accounts?.id&&(clearInterval(w),window.googleInitialized||(window.google.accounts.id.initialize({client_id:"648554486893-4b33o1cei2rfhv8ehn917ovf60h1u9q4.apps.googleusercontent.com",callback:S=>{const N=S.credential;p(!0),n(N,()=>{p(!1)})}}),window.googleInitialized=!0),x.innerHTML="",window.google.accounts.id.renderButton(x,{theme:"filled_blue",size:"large",shape:"pill",text:"signin_with",width:240}))},300);return()=>clearInterval(w)},[n,o,a,d]),o?i.jsx("div",{className:"home-wrapper",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"spinner-border text-primary mb-3",role:"status"}),i.jsx("p",{className:"text-secondary",children:"Verificando sesión..."})]})}):a?null:d&&!a?i.jsx("div",{className:"home-wrapper",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"spinner-border text-success mb-3",role:"status"}),i.jsx("p",{className:"text-success",children:"Iniciando sesión, un momento..."})]})}):i.jsxs("div",{className:"home-wrapper d-flex flex-column align-items-center",children:[i.jsxs("div",{className:"card shadow-lg p-4 text-center",style:{maxWidth:400,borderRadius:"20px"},children:[i.jsx("h3",{className:"mb-3 fw-bold",children:"Bienvenido"}),i.jsx("p",{className:"text-muted mb-4",children:"Inicia sesión con tu cuenta de Google para gestionar tus documentos."}),i.jsx("div",{id:"googleLoginDiv",className:"d-flex justify-content-center mb-3"}),i.jsxs("div",{className:"bg-light p-3 rounded-3 mt-2",children:[i.jsx("p",{className:"small text-secondary mb-2",children:"¿Quieres ver cómo funciona?"}),i.jsxs("div",{className:"d-flex flex-column gap-2",children:[i.jsxs("button",{onClick:()=>b(!0),className:"btn btn-sm btn-link text-decoration-none fw-bold",children:[i.jsx("i",{className:"bi bi-play-circle-fill me-1"})," Ver Demo de la App"]}),i.jsx(wn,{to:"/backend-setup",className:"text-primary fw-bold text-decoration-none small",children:"Guía: Configurar mi Backend →"})]})]}),i.jsx("hr",{className:"mt-4 mb-3"}),i.jsxs("div",{className:"legal-links",style:{fontSize:"0.85rem"},children:[i.jsx(wn,{to:"/privacidad",className:"text-decoration-none text-secondary mx-2",children:"Privacidad"}),i.jsx("span",{className:"text-muted",children:"|"}),i.jsx(wn,{to:"/terminos",className:"text-decoration-none text-secondary mx-2",children:"Términos"})]})]}),i.jsx("div",{className:"mt-4 text-center text-white-50",children:i.jsx("small",{children:"AppDeclaración: Gestión descentralizada de documentos tributarios."})}),i.jsx(u0,{isOpen:v,onClose:()=>b(!1)})]})}function qo({errors:n}){return!n||Object.keys(n).length===0?null:i.jsx("div",{className:"form-error-list",children:Object.values(n).map((a,o)=>i.jsx("div",{className:"error-item",children:a},o))})}const Rb={anio:n=>!n||!n.toString().trim()?"El año es obligatorio.":/^\d{4}$/.test(n)?"":"El año debe tener 4 dígitos.",entidad:n=>!n||!n.trim()?"El campo Entidad es obligatorio.":"",descripcion:n=>n&&n.length>100?"La descripción no debe superar los 50 caracteres.":"",valor:n=>{if(n==null||n==="")return"El valor es obligatorio.";const a=String(n).replace(/\D/g,"");return/^\d+$/.test(a)?"":"El valor debe ser un número entero sin decimales."},metodoPago:n=>!n||n.trim()===""?"Debe seleccionar un método de pago.":"",archivo:n=>n?"":"Debe seleccionar un archivo.",nombre:n=>!n||!n.trim()?"El nombre del producto es obligatorio.":/^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre no puede contener caracteres especiales.",nombreProducto:n=>!n||!n.trim()?"El nombre del producto es obligatorio.":/^[a-zA-Z0-9ÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre no puede contener caracteres especiales.",entidadProducto:n=>!n||!n.trim()?"La entidad del producto es obligatoria.":"",tipo:n=>n?/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El tipo solo debe contener letras.":"",correo:n=>!n||!n.trim()?"El correo es obligatorio.":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)?"":"El correo no es válido.",nombreUsuario:n=>!n||!n.trim()?"El nombre es obligatorio.":n.length>50?"El nombre no debe superar los 50 caracteres.":/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?"":"El nombre solo puede contener letras.",rol:n=>!n||n.trim()===""?"Debe seleccionar un rol.":"",rolNombre:n=>!n||!n.trim()?"El nombre del rol es obligatorio.":/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(n)?n.trim().length<3?"El nombre del rol debe tener al menos 3 caracteres.":n.trim().length>30?"El nombre del rol no debe superar los 30 caracteres.":"":"El nombre del rol solo puede contener letras.",rolPermisos:n=>!n||n.length===0?"Debe seleccionar al menos un permiso.":""};function Jt(n=""){if(!n)return"";const a=n.toLowerCase().trim().replace(/\s+/g," ");return a.charAt(0).toUpperCase()+a.slice(1)}function Jo(){const[n,a]=m.useState({}),o=m.useCallback((p,g)=>{const h=Rb[p];if(!h)return;const v=h(g);a(b=>{const x={...b};return v?x[p]=v:delete x[p],x})},[]),l=m.useCallback(p=>{const g={};for(const[h,v]of Object.entries(p)){const b=Rb[h];if(!b)continue;const x=b(v);x&&(g[h]=x)}return a(g),Object.keys(g).length===0},[]),u=m.useCallback(p=>{a(g=>{const h={...g};return delete h[p],h})},[]),d=m.useCallback(()=>a({}),[]);return{errors:n,validateField:o,validateForm:l,clearError:u,clearErrors:d}}function Wk({show:n,onHide:a,productoAEditar:o}){const{addProducto:l,updateProducto:u}=xi(),{errors:d,validateField:p,validateForm:g,clearError:h,clearErrors:v}=Jo(),[b,x]=m.useState({nombre:"",descripcion:"",entidadProducto:"",tipo:""}),[w,S]=m.useState(!1),[N,R]=m.useState(!1),[E,O]=m.useState(""),[C,T]=m.useState("success"),_=L=>{const{name:I,value:z}=L.target;x(Y=>({...Y,[I]:z})),p(I,z),h(I)};m.useEffect(()=>{n&&o?x({nombre:o.nombre||"",descripcion:o.descripcion||"",entidadProducto:o.entidad||"",tipo:o.tipo||""}):n&&!o&&(x({nombre:"",descripcion:"",entidadProducto:"",tipo:""}),v())},[o,n]);const M=async L=>{if(L.preventDefault(),v(),!!g(b)){S(!0);try{const I={nombre:Jt(b.nombre),descripcion:b.descripcion?Jt(b.descripcion):"",entidad:Jt(b.entidadProducto),tipo:b.tipo?Jt(b.tipo):""};let z;if(o?z=await u({...I,id:o.id}):z=await l(I),z.ok)T("success"),O(z.mensaje),R(!0),a();else throw new Error(z.mensaje||"Error en la operación")}catch(I){T("danger"),O(`❌ ${I.message}`),R(!0),console.error(I)}finally{S(!1)}}};return i.jsxs(i.Fragment,{children:[i.jsxs(ye,{show:n,onHide:a,centered:!0,children:[i.jsx(ye.Header,{closeButton:!0,children:i.jsx(ye.Title,{children:o?"Editar Producto":"Adicionar Producto"})}),i.jsxs(ye.Body,{children:[i.jsx(qo,{errors:d}),i.jsxs(ae,{onSubmit:M,children:[i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{children:"Nombre *"}),i.jsx(ae.Control,{type:"text",name:"nombre",value:b.nombre,onChange:_,onBlur:L=>p("nombre",L.target.value),placeholder:"Ej: Tarjeta 6992, Cta 1108"})]}),i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{children:"Descripción"}),i.jsx(ae.Control,{type:"text",name:"descripcion",value:b.descripcion,onChange:_,onBlur:L=>p("descripcion",L.target.value),placeholder:"Ej: Extracto bancario, póliza, certificado"})]}),i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{children:"Entidad *"}),i.jsx(ae.Control,{type:"text",name:"entidadProducto",value:b.entidadProducto,onChange:_,onBlur:L=>p("entidadProducto",L.target.value),placeholder:"Ej: Banco de Bogotá, Sura, Ecopetrol"})]}),i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{children:"Tipo"}),i.jsx(ae.Control,{type:"text",name:"tipo",value:b.tipo,onChange:_,onBlur:L=>p("tipo",L.target.value),placeholder:"Ej: Salud, Deuda, Certificado"})]}),i.jsx(Oe,{type:"submit",variant:"primary",disabled:w,children:w?i.jsxs(i.Fragment,{children:[i.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),i.jsx("span",{className:"ms-2",children:"Procesando..."})]}):o?"Guardar Cambios":"Guardar Producto"})]}),i.jsx(Go,{show:w})]})]}),i.jsx(hm,{position:"bottom-end",className:"p-3",children:i.jsxs(xo,{bg:C,show:N,autohide:!0,delay:3e3,onClose:()=>R(!1),children:[i.jsx(xo.Header,{children:i.jsx("strong",{className:"me-auto",children:"Productos"})}),i.jsx(xo.Body,{className:"text-white",children:E})]})})]})}function eT({show:n,onClose:a,onConfirm:o,title:l,anioDefault:u}){const{errors:d,validateField:p,validateForm:g,clearErrors:h,clearError:v}=Jo(),b=String(new Date().getFullYear()-1),[x,w]=m.useState(!1),[S,N]=m.useState(""),[R,E]=m.useState(!1),[O,C]=m.useState(null),[T,_]=m.useState(!1);m.useEffect(()=>{n&&(h(),N(u||b),E(!1),C(null),_(!1),w(!1))},[n,u,b,h]);const M=async()=>{if(h(),!!g({anio:S,archivo:O})){w(!0);try{await o(S,l==="Remplazar archivo"?!1:R,O,T)}catch(z){console.log("Error en el modal:",z)}finally{w(!1)}}};return i.jsxs(ye,{show:n,onHide:a,centered:!0,children:[i.jsx(ye.Header,{closeButton:!0,children:i.jsx(ye.Title,{children:l==="Remplazar archivo"?"Reemplazar archivo":"Subir archivo"})}),i.jsxs(ye.Body,{children:[i.jsx(qo,{errors:d}),i.jsxs(ae,{children:[i.jsxs(ae.Group,{children:[i.jsx(ae.Label,{children:"Año"}),i.jsx(ae.Control,{type:"number",placeholder:`Ejm: ${new Date().getFullYear()-1}`,value:S,onChange:L=>{N(L.target.value),v("anio")},onBlur:L=>p("anio",L.target.value),disabled:l==="Remplazar archivo"})]}),i.jsxs(ae.Group,{className:"mt-3",children:[i.jsx(ae.Label,{children:"Archivo"}),i.jsx(ae.Control,{type:"file",onChange:L=>{C(L.target.files[0]),p("archivo",L.target.files[0])}})]}),l!=="Remplazar archivo"&&i.jsx(ae.Group,{className:"mt-3",children:i.jsx(ae.Check,{type:"checkbox",label:"Este archivo aplica a varios productos",checked:R,onChange:L=>E(L.target.checked)})}),l==="Remplazar archivo"&&i.jsx(ae.Group,{className:"mt-3 UploadModal-replaceOnly",children:i.jsx(ae.Check,{type:"checkbox",label:"Reemplazar solo en este producto",checked:T,onChange:L=>_(L.target.checked)})})]})]}),i.jsxs(ye.Footer,{children:[i.jsx(Oe,{variant:"secondary",onClick:a,disabled:x,children:"Cancelar"}),i.jsx(Oe,{variant:"primary",onClick:M,disabled:x,children:x?i.jsxs(i.Fragment,{children:[i.jsx(St,{size:"sm"})," Procesando..."]}):l==="Remplazar archivo"?"Reemplazar":"Cargar archivo"})]})]})}function tT({show:n,onClose:a,onConfirm:o,productos:l=[],productoOrigen:u,loading:d}){const[p,g]=m.useState([]);m.useEffect(()=>{n&&g(u?[u.id]:[])},[n,u]);const h=(b,x)=>{x!==u?.id&&(b.target.checked?g(w=>[...w,x]):g(w=>w.filter(S=>S!==x)))},v=()=>{if(p.length===0){alert("Debe seleccionar al menos un producto");return}o(p)};return i.jsxs(ye,{show:n,onHide:a,centered:!0,children:[i.jsx(ye.Header,{closeButton:!0,children:i.jsx(ye.Title,{children:"Seleccionar Productos"})}),i.jsx(ye.Body,{children:i.jsx(ae,{children:l.filter(b=>!b.tieneArchivo||b.id===u?.id).map(b=>i.jsx(ae.Check,{type:"checkbox",label:`${b.entidad} - ${b.nombre}`,checked:p.includes(b.id)||b.id===u?.id,disabled:b.id===u?.id,onChange:x=>h(x,b.id),className:"mb-2"},b.id))})}),i.jsxs(ye.Footer,{children:[i.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),i.jsx(Oe,{variant:"primary",onClick:v,children:d?i.jsxs(i.Fragment,{children:[i.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Procesando..."]}):"Cargar archivo"})]})]})}const nT=()=>i.jsx(jn,{xs:12,md:6,lg:4,className:"mb-3",children:i.jsx(bo,{className:"producto-card-skeleton",children:i.jsxs(bo.Body,{children:[i.jsx("div",{className:"skeleton-edit-btn"}),i.jsx("div",{className:"skeleton-close-btn"}),i.jsx("div",{className:"skeleton-placeholder skeleton-title"}),i.jsx("div",{className:"skeleton-placeholder skeleton-text"}),i.jsx("div",{className:"skeleton-placeholder skeleton-text short"}),i.jsx("div",{className:"skeleton-placeholder skeleton-button"})]})})});function aT(){const n=window.innerWidth<2e3,{puede:a}=ma(),o=a("subirArchivoProducto"),l=a("remplaceArchivo"),u=a("eliminarProducto"),d=a("agregarProducto"),p=a("actualizarProducto"),{registroProductos:g,loading:h,anioAnterior:v,refreshProductos:b,subirArchivo:x,remplaceArchivo:w,deleteProducto:S}=xi(),{showToast:N}=zn(),[R]=m.useState({top:80,left:null,right:20}),[E,O]=m.useState(!1),[C,T]=m.useState(!1),[_,M]=m.useState(!1),[L,I]=m.useState(!1),[z,Y]=m.useState(null),[W,oe]=m.useState(null),[ne,le]=m.useState(null),[J,ie]=m.useState(""),[$,ee]=m.useState("");m.useEffect(()=>{const K=localStorage.getItem("btnAddProductoPos");K&&R(JSON.parse(K))},[R]),m.useEffect(()=>{b()},[b]);const D=K=>{Y(K),le(null),ie(""),T(!0)};async function re({tipo:K,productoIds:te,anio:se,file:fe,replaceOnlyThis:me=!1,nombreProducto:$e="",usarExistente:we=!1,forzarTodosLosAnios:Qe=!1}){let We;if(K==="reemplazar"?We=await w(te[0],se,fe,me,$e,we,Qe):We=await x(te,se,fe,we),We.existe){if(!await Zw({titulo:"Archivo existente",mensaje:We.mensaje,textoConfirmar:"✅ Usar archivo existente",textoCancelar:"❌ Cancelar"})){N("❌ Operación cancelada por el usuario","warning",3e3,"Productos");return}K==="reemplazar"?We=await w(te[0],se,fe,me,$e,!0,Qe):We=await x(te,se,fe,!0)}N(We.mensaje,We.ok?"success":"danger",1e4,"Productos")}const A=async(K,te,se,fe)=>{if(le(se),ie(K),te){oe(z),M(!0),T(!1);return}z.tieneArchivo?await re({tipo:"reemplazar",productoIds:[z.id],anio:K,file:se,replaceOnlyThis:fe,nombreProducto:z.nombre}):await re({tipo:"subir",productoIds:[z.id],anio:K,file:se}),T(!1)},V=async K=>{!ne||!J||(await re({tipo:"subir",productoIds:K,anio:J,file:ne}),M(!1))};return i.jsx(i.Fragment,{children:i.jsxs(Bo,{className:"productos-page",children:[i.jsx("div",{className:"productos-container",children:i.jsx("h2",{className:"mb-4",children:"Productos"})}),i.jsx(br,{children:h?Array.from({length:6}).map((K,te)=>i.jsx(nT,{},`skeleton-${te}`)):g.map(K=>i.jsx(jn,{xs:12,md:6,lg:4,className:"mb-3",children:i.jsx(bo,{className:`producto-card ${K.tieneArchivo?"producto-ok":""}`,children:i.jsxs(bo.Body,{children:[i.jsxs("div",{className:"position-absolute top-0 end-0 m-2 d-flex gap-2 align-items-center",children:[i.jsx("button",{type:"button",className:"editicon accion-icon",disabled:!p||K.tieneArchivo,onClick:()=>{p&&(Y(K),O(!0))},title:K.tieneArchivo?"No se puede editar un producto con archivo vinculado":p?"Editar producto":"No tienes permisos para editar",style:{opacity:!p||K.tieneArchivo?.3:1,cursor:!p||K.tieneArchivo?"not-allowed":"pointer"},children:i.jsx("i",{className:"bi bi-pencil-square"})}),i.jsx("button",{type:"button",className:"editicon accion-icon text-danger",disabled:!u,style:u?{}:{opacity:.3,cursor:"not-allowed"},onClick:()=>{u&&(Y(K),I(!0))},children:i.jsx("i",{className:"bi bi-x-circle"})})]}),i.jsxs(bo.Title,{className:"producto-title-t",children:[K.entidad," ",K.nombre]}),i.jsx(bo.Text,{children:K.descripcion}),K.tieneArchivo?i.jsxs(i.Fragment,{children:[i.jsx("p",{className:"mb-2",children:i.jsxs("small",{children:["Archivo (",K.archivoInfo?.anio,"):"," ",i.jsx("a",{href:K.archivoInfo?.link,target:"_blank",rel:"noopener noreferrer",children:K.archivoInfo?.nombreArchivo||"Ver archivo"})]})}),i.jsx(Oe,{variant:"warning",size:"sm",disabled:!l,title:l?"":"No tienes permisos para remplazar",onClick:()=>{ee("Remplazar archivo"),D(K)},children:"Modificar archivo"})]}):i.jsx(Oe,{variant:"primary",size:"sm",disabled:!o,title:o?"":"No tienes permisos para subir archivos",onClick:()=>{ee("Subir Archivo"),D(K)},children:"Subir Archivo"})]})})},K.id))}),n&&i.jsx("button",{className:"fab-subir",disabled:!d,title:d?"":"No tienes permisos para agregar productos",style:d?{}:{opacity:.3,cursor:"not-allowed"},onClick:()=>O(!0),children:i.jsx("i",{className:"bi bi-plus-lg"})}),i.jsx(eT,{show:C,onClose:()=>T(!1),onConfirm:A,title:$,anioDefault:$==="Remplazar archivo"?v:""}),i.jsx(tT,{show:_,onClose:()=>M(!1),onConfirm:V,productoOrigen:W,productos:g,loading:h}),i.jsx(Wk,{show:E,onHide:()=>{O(!1),Y(null)},productoAEditar:z,onProductoAgregado:()=>{O(!1),Y(null)}}),i.jsx(pa,{show:L,onHide:()=>I(!1),title:"Eliminar Producto",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar el producto"," ",i.jsx("strong",{children:z?.nombre}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>S(z.id)})]})})}const rT=()=>i.jsxs("div",{className:"dato-tributario-skeleton",children:[i.jsx("div",{className:"card mb-3 border-0 shadow-sm bg-light",children:i.jsxs("div",{className:"card-body p-2 row g-2",children:[i.jsx("div",{className:"col-5",children:i.jsx("div",{className:"skeleton-input"})}),i.jsx("div",{className:"col-5",children:i.jsx("div",{className:"skeleton-input"})}),i.jsx("div",{className:"col-2",children:i.jsx("div",{className:"skeleton-btn"})})]})}),i.jsx("div",{className:"list-group",children:[1,2,3,4,5].map(n=>i.jsxs("div",{className:"skeleton-fila",children:[i.jsxs("div",{className:"skeleton-controls",children:[i.jsx("div",{className:"skeleton-icon-sm"}),i.jsx("div",{className:"skeleton-text-xs"}),i.jsx("div",{className:"skeleton-icon-sm"})]}),i.jsx("div",{className:"skeleton-label-box",children:i.jsx("div",{className:"skeleton-bar",style:{width:"60%"}})}),i.jsx("div",{className:"skeleton-valor-box",children:i.jsx("div",{className:"skeleton-bar",style:{width:"90%"}})}),i.jsxs("div",{className:"skeleton-actions",children:[i.jsx("div",{className:"skeleton-icon"}),i.jsx("div",{className:"skeleton-icon"}),i.jsx("div",{className:"skeleton-icon"})]})]},n))})]});function oT(){const{puede:n}=ma(),a=n("obtenerDatosTributarios"),{datos:o,setDatos:l,getDatos:u,saveChanges:d,isDirty:p,discardChanges:g,loading:h}=a0(),[v,b]=m.useState(null),[x,w]=m.useState({label:"",valor:""}),[S,N]=m.useState(null),[R,E]=m.useState(!1);m.useEffect(()=>{a&&u()},[u,a]);const O=L=>{l(I=>I.map(z=>z.id===L?{...z,importante:!z.importante}:z))},C=(L,I)=>{const z=[...o],Y=L+I;Y<0||Y>=z.length||([z[L],z[Y]]=[z[Y],z[L]],l(z.map((W,oe)=>({...W,orden:oe+1}))))},T=(L,I,z)=>{l(Y=>Y.map(W=>W.id===L?{...W,[I]:z}:W))},_=()=>{l(L=>L.filter(I=>I.id!==S).map((I,z)=>({...I,orden:z+1})))},M=()=>{if(!x.label.trim())return;const L={id:`new_${Date.now()}`,label:x.label.charAt(0).toUpperCase()+x.label.slice(1),valor:x.valor,orden:o.length+1,importante:!1};l([...o,L]),w({label:"",valor:""})};return i.jsxs("div",{className:"datos-tributarios container mt-4",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4 sticky-header-custom border-bottom shadow-sm px-3 rounded bg-white",children:[i.jsxs("div",{children:[i.jsx("h2",{className:"m-0 h4",children:"📊 Datos Tributarios"}),p&&i.jsx("small",{className:"text-danger fw-bold pulse-animation",children:"⚠️ Cambios pendientes"})]}),i.jsxs("div",{className:"d-flex gap-2",children:[p&&i.jsx("button",{className:"btn btn-sm btn-outline-secondary",onClick:g,children:"Descartar"}),i.jsx("button",{className:`btn btn-sm ${p?"btn-success":"btn-secondary"}`,disabled:!p||h,onClick:d,children:h?"...":"💾 Guardar"})]})]}),h&&o.length===0?i.jsx(rT,{}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"card mb-3 border-0 shadow-sm bg-light",children:i.jsxs("div",{className:"card-body p-2 row g-2",children:[i.jsx("div",{className:"col-5",children:i.jsx("input",{className:"form-control form-control-sm",placeholder:"Etiqueta",value:x.label,onChange:L=>w({...x,label:L.target.value})})}),i.jsx("div",{className:"col-5",children:i.jsx("input",{className:"form-control form-control-sm",placeholder:"Valor",value:x.valor,onChange:L=>w({...x,valor:L.target.value})})}),i.jsx("div",{className:"col-2",children:i.jsx("button",{className:"btn btn-sm btn-primary w-100",onClick:M,children:"+"})})]})}),i.jsxs("div",{className:"list-group shadow-sm rounded",children:[o.map((L,I)=>i.jsxs("div",{className:`fila ${L.importante?"resaltado":""}`,children:[i.jsxs("div",{className:"btn-subir-bajar align-items-center",children:[i.jsx("i",{className:`bi bi-chevron-up ${I===0?"text-muted":"text-primary"}`,onClick:()=>C(I,-1)}),i.jsx("span",{className:"small fw-bold",children:L.orden}),i.jsx("i",{className:`bi bi-chevron-down ${I===o.length-1?"text-muted":"text-primary"}`,onClick:()=>C(I,1)})]}),i.jsx("div",{className:"fila-label",children:v===L.id?i.jsx("input",{className:"form-control form-control-sm",value:L.label,onChange:z=>T(L.id,"label",z.target.value)}):L.label}),i.jsx("div",{className:"fila-valor",children:v===L.id?i.jsx("textarea",{className:"form-control form-control-sm",value:L.valor,onChange:z=>T(L.id,"valor",z.target.value)}):L.valor.toString().startsWith("http")?i.jsx("a",{href:L.valor,target:"_blank",rel:"noreferrer",children:"Ver Link"}):L.valor}),i.jsxs("div",{className:"acciones",children:[i.jsx("i",{className:`bi ${L.importante?"bi-bookmark-star-fill text-danger":"bi-bookmark-star text-secondary"} accion-icon`,title:"Marcar como importante",onClick:()=>O(L.id)}),i.jsx("i",{className:`bi ${v===L.id?"bi-check-circle-fill text-success":"bi-pencil-square text-primary"} accion-icon`,title:"Editar",onClick:()=>b(v===L.id?null:L.id)}),i.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{N(L.id),E(!0)}})]})]},L.id)),!h&&o.length===0&&i.jsx("div",{className:"text-center p-5 text-muted bg-white border rounded",children:"No hay datos tributarios registrados."})]})]}),i.jsx(pa,{show:R,onHide:()=>E(!1),title:"Eliminar dato tributario",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar el registro"," ","?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:_}),i.jsx(Go,{show:h&&o.length>0})]})}function sT({show:n,onHide:a,registro:o,onUpdated:l}){const{editRegistroProducto:u}=xi(),{errors:d,validateField:p,validateForm:g,clearError:h,clearErrors:v}=Jo(),[b,x]=m.useState(!1),[w,S]=m.useState({entidad:"",nombreProducto:"",descripcion:"",tipo:""});m.useEffect(()=>{o&&n&&S({entidad:o.entidad||"",nombreProducto:o.nombreProducto||"",descripcion:o.descripcion||"",tipo:o.tipo||""})},[o,n]);const N=O=>{const{name:C,value:T}=O.target;S(_=>({..._,[C]:T})),p(C,T),h(C)},R=async O=>{if(O.preventDefault(),v(),!!g(w)){x(!0);try{if(!o?.registroId)return;const T={registroId:o.registroId,nombreProducto:Jt(w.nombreProducto),descripcion:Jt(w.descripcion),entidad:Jt(w.entidad),tipo:Jt(w.tipo)},_=await u(T);if(_.ok&&(l(_.registro),a()),!_.ok)throw new Error("Error al guardar registro producto")}catch(T){console.log(T)}finally{x(!1)}}},E=()=>{o&&S({entidad:o.entidad||"",nombreProducto:o.nombreProducto||"",descripcion:o.descripcion||"",tipo:o.tipo||""}),v(),a()};return i.jsxs(ye,{show:n,onHide:a,backdrop:"static",centered:!0,children:[i.jsx(ye.Header,{closeButton:!0,children:i.jsx(ye.Title,{children:"✏️ Editar registro añocxxxx"})}),i.jsxs(ye.Body,{children:[i.jsx(qo,{errors:d}),i.jsxs(ae,{children:[i.jsxs(ae.Group,{className:"mb-2",children:[i.jsx(ae.Label,{children:"Entidad"}),i.jsx(ae.Control,{name:"entidad",value:w.entidad,onChange:N,onBlur:O=>p("entidad",O.target.value),placeholder:"Ej: Banco de Bogotá, Sura, Ecopetrol"})]}),i.jsxs(ae.Group,{className:"mb-2",children:[i.jsx(ae.Label,{children:"Nombre del producto"}),i.jsx(ae.Control,{name:"nombreProducto",value:w.nombreProducto,onChange:N,onBlur:O=>p("nombreProducto",O.target.value),placeholder:"Ej: Tarjeta 6992, Cta 1108"})]}),i.jsxs(ae.Group,{className:"mb-2",children:[i.jsx(ae.Label,{children:"Tipo"}),i.jsx(ae.Control,{name:"tipo",value:w.tipo,onChange:N,onBlur:O=>p("tipo",O.target.value),placeholder:"Ej: Salud, Deuda, Certificado"})]}),i.jsxs(ae.Group,{className:"mb-2",children:[i.jsx(ae.Label,{children:"Descripción"}),i.jsx(ae.Control,{as:"textarea",rows:3,name:"descripcion",value:w.descripcion,onChange:N,onBlur:O=>p("descripcion",O.target.value),placeholder:"Ej: Extracto bancario, póliza, certificado"})]})]})]}),i.jsxs(ye.Footer,{children:[i.jsx(Oe,{variant:"secondary",onClick:E,disabled:b,children:"Cancelar"}),i.jsx(Oe,{variant:"primary",onClick:R,disabled:b,children:b?i.jsxs(i.Fragment,{children:[i.jsx(St,{size:"sm"})," Guardando..."]}):"Guardar cambios"})]})]})}const Db=({isMobile:n})=>n?i.jsx("div",{className:"archivo-card skeleton-card-contador",children:i.jsxs("div",{className:"accordion-header d-flex align-items-center p-3",children:[i.jsx("div",{className:"skeleton-circle me-3"}),i.jsxs("div",{className:"flex-grow-1",children:[i.jsx("div",{className:"skeleton-bar mb-2",style:{width:"60%"}}),i.jsx("div",{className:"skeleton-bar",style:{width:"40%"}})]}),i.jsx("div",{className:"skeleton-bar",style:{width:"15px",height:"15px"}})]})}):i.jsxs("tr",{className:"contador-skeleton-row",children:[i.jsx("td",{className:"icono",children:i.jsx("div",{className:"skeleton-circle"})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"80%"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"60%"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"90%"}})}),i.jsx("td",{className:"acciones",children:i.jsx("div",{className:"skeleton-bar",style:{width:"40px"}})})]});function iT(){const{puede:n}=ma(),a=n("editarRegistroProducto"),o=n("eliminarRegistroProducto"),l=window.innerWidth<768,{loading:u,fetchArchivosPorAnio:d,deleteRegistroProducto:p}=xi(),[g,h]=m.useState(null),[v,b]=m.useState(!1),[x,w]=m.useState(!1),S=da(),N=new Date().getFullYear(),[R,E]=m.useState(N-1),[O,C]=m.useState([]),[T,_]=m.useState(!0),[M,L]=m.useState({entidad:"",nombreProducto:"",tipo:""}),[I,z]=m.useState(null),Y=D=>{z(I===D?null:D)},W=m.useCallback(async D=>{try{const re=await d(D);C(re||[])}catch(re){console.error("❌ Error cargando archivos:",re)}},[d]);m.useEffect(()=>{L({entidad:"",nombreProducto:"",tipo:""}),W(R),_(!1)},[R,W,S]);const oe=D=>{if(!D)return"📄";switch(D.split(".").pop().toLowerCase()){case"pdf":return i.jsx("span",{className:"icon-pdf"});case"doc":return i.jsx("span",{className:"icon-microsoftword"});case"docx":return i.jsx("span",{className:"icon-microsoftword"});case"xls":return i.jsx("span",{className:"icon-excel"});case"xlsx":return i.jsx("span",{className:"icon-excel"});case"ppt":case"pptx":return"📽️";case"jpg":return i.jsx("span",{className:"icon-jpg"});case"jpeg":return i.jsx("span",{className:"icon-JPEG"});case"png":return i.jsx("span",{className:"icon-png"});case"gif":return"🖼️";case"txt":return i.jsx("span",{className:"icon-texto"});case"zip":case"rar":return"🗜️";default:return"📄"}},ne=D=>(D||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""),le=O.filter(D=>{const re=ne(D.entidad),A=ne(D.nombreProducto),V=ne(D.tipo);return(M.entidad?re===M.entidad:!0)&&(M.nombreProducto?A===M.nombreProducto:!0)&&(M.tipo?V===M.tipo:!0)}).sort((D,re)=>ne(D.entidad).localeCompare(ne(re.entidad))),J=[...new Map(O.map(D=>[ne(D.entidad),{value:ne(D.entidad),label:(D.entidad||"").trim()}])).values()],ie=[...new Map(le.map(D=>[ne(D.nombreProducto),{value:ne(D.nombreProducto),label:(D.nombreProducto||"").trim()}])).values()],$=[...new Map(le.map(D=>[ne(D.tipo),{value:ne(D.tipo),label:(D.tipo||"").trim()}])).values()];if(T)return i.jsx("div",{className:"text-center p-5",children:i.jsx("p",{children:"Verificando sesión..."})});const ee=async()=>{if(!g)return;(await p(g.registroId)).ok&&C(re=>re.filter(A=>A.registroId!==g.registroId)),w(!1),h(null)};return i.jsxs("div",{className:"contador-container",children:[i.jsxs("div",{className:"container mt-4",children:[i.jsxs("h2",{className:"mb-3",children:["📂 Archivos del año ",R]}),i.jsxs("div",{className:"mb-3",children:[i.jsx("label",{children:"Año:"}),i.jsx("select",{value:R,onChange:D=>E(D.target.value),className:"form-select w-auto d-inline ms-2",children:Array.from({length:15}).map((D,re)=>{const A=N-re;return i.jsx("option",{value:A,children:A},A)})})]}),l?i.jsx("div",{className:"accordion-mobile",children:u?Array.from({length:6}).map((D,re)=>i.jsx(Db,{isMobile:!0},`skel-m-${re}`)):le.length===0?i.jsx("p",{className:"text-center p-4",children:"No hay archivos para este año."}):le.map((D,re)=>i.jsxs("div",{className:"archivo-card",children:[i.jsxs("div",{className:"accordion-header",onClick:()=>Y(re),children:[i.jsx("span",{className:"icono",children:oe(D.nombreArchivo)}),i.jsxs("div",{className:"ms-2 flex-grow-1",children:[i.jsx("div",{className:"fw-bold",children:D.entidad}),i.jsx("div",{className:"text-muted small",children:D.nombreProducto})]}),i.jsx("span",{className:"arrow",children:I===re?"▲":"▼"})]}),I===re&&i.jsxs("div",{className:"accordion-body",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Entidad:"})," ",D.entidad]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Producto:"})," ",D.nombreProducto]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Tipo:"})," ",D.tipo]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Descripción:"})," ",D.descripcion||"-"]}),i.jsxs("div",{className:"acciones",children:[i.jsx("i",{className:`bi bi-pencil-square accion-icon ${a?"":"disabled-icon"}`,title:a?"Editar":"No tienes permisos para editar",onClick:A=>{a&&(A.stopPropagation(),h(D),b(!0))}}),i.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${o?"":"disabled-icon"}`,title:o?"Eliminar":"No tienes permisos para eliminar",onClick:A=>{o&&(A.stopPropagation(),h(D),w(!0))}})]}),i.jsx("button",{className:"btn btn-primary btn-sm w-100 mt-2",onClick:()=>window.open(D.link,"_blank"),children:"📄 Abrir archivo1"})]})]},D.registroId))}):i.jsx("div",{className:"table-responsive archivos-por-anio",children:i.jsxs("table",{className:"table table-bordered table-hover",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{className:"thicon"}),i.jsxs("th",{children:["Entidad",i.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:u,value:M.entidad,onChange:D=>L({...M,entidad:D.target.value}),children:[i.jsx("option",{value:"",children:"Todas"}),!u&&J.map(D=>i.jsx("option",{value:D.value,children:D.label},D.value))]})]}),i.jsxs("th",{children:["Nombre del producto",i.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:u,value:M.nombreProducto,onChange:D=>L({...M,nombreProducto:D.target.value}),children:[i.jsx("option",{value:"",children:"Todos"}),!u&&ie.map(D=>i.jsx("option",{value:D.value,children:D.label},D.value))]})]}),i.jsxs("th",{children:["Tipo",i.jsxs("select",{className:"form-select form-select-sm mt-1",disabled:u,value:M.tipo,onChange:D=>L({...M,tipo:D.target.value}),children:[i.jsx("option",{value:"",children:"Todos"}),!u&&$.map(D=>i.jsx("option",{value:D.value,children:D.label},D.value))]})]}),i.jsx("th",{children:"Descripción"}),i.jsx("th",{className:"th-acciones"})]})}),i.jsx("tbody",{children:u?Array.from({length:8}).map((D,re)=>i.jsx(Db,{isMobile:!1},`skel-d-${re}`)):le.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:"6",className:"text-center p-4",children:"No hay archivos para este año."})}):le.map(D=>i.jsxs("tr",{onClick:()=>window.open(D.link,"_blank"),children:[i.jsx("td",{className:"icono",children:oe(D.nombreArchivo)}),i.jsx("td",{children:D.entidad||"-"}),i.jsx("td",{children:D.nombreProducto}),i.jsx("td",{children:D.tipo||"-"}),i.jsx("td",{children:D.descripcion||"-"}),i.jsxs("td",{className:"acciones",children:[i.jsx("i",{className:`bi bi-pencil-square accion-icon ${a?"":"disabled-icon"}`,title:a?"Editar":"No tienes permisos para editar",onClick:re=>{a&&(re.stopPropagation(),h(D),b(!0))}}),i.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${o?"":"disabled-icon"}`,title:o?"Eliminar":"No tienes permisos para eliminar",onClick:re=>{o&&(re.stopPropagation(),h(D),w(!0))}})]})]},D.registroId))})]})})]}),i.jsx(pa,{show:x,onHide:()=>w(!1),title:"Eliminar registro",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar el producto nombre"," ",i.jsx("strong",{children:g?.nombreProducto})," entidad"," ",i.jsx("strong",{children:g?.entidad}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:ee}),i.jsx(sT,{show:v,onHide:()=>b(!1),registro:g,onUpdated:D=>{C(re=>re.map(A=>A.registroId===D.registroId?{...A,...D}:A))}})]})}function lT({onClose:n,onSaved:a}){const{subirFactura:o}=Lm(),{getProductos:l}=xi(),{errors:u,validateField:d,validateForm:p,clearErrors:g,clearError:h}=Jo(),[v,b]=m.useState(!1),[x,w]=m.useState(!0),[S,N]=m.useState({anio:new Date().getFullYear(),entidad:"",descripcion:"",valor:"",metodoPago:"",archivo:null}),[R,E]=m.useState([]),O=z=>{const{name:Y,value:W}=z.target;N(oe=>({...oe,[Y]:W})),d(Y,W)},C=z=>{const Y=z.target.files[0];N(W=>({...W,archivo:Y})),d("archivo",Y)},T=z=>z.toLowerCase().split(" ").map(Y=>Y.charAt(0).toUpperCase()+Y.slice(1)).join(" "),_=z=>z?new Intl.NumberFormat("es-CO").format(z):"";m.useEffect(()=>{async function z(){w(!0);const Y=await l(),oe=(Y?.data||Y||[]).filter(ne=>ne.nombre?.toLowerCase().startsWith("tarjeta")).map(ne=>{const le=T(ne.nombre),J=ne.entidad?T(ne.entidad):"";return J?`${J} - ${le}`:le});E(oe),w(!1)}z()},[l]);const M=["Tarjeta Débito","Tarjeta Crédito","Transferencia","Efectivo","Bre-B","Nequi","Daviplata"],L=Array.from(new Set([...M,...R])).sort((z,Y)=>{const W=z.toLowerCase().startsWith("tarjeta"),oe=Y.toLowerCase().startsWith("tarjeta");return W&&!oe?-1:!W&&oe?1:z.localeCompare(Y)}),I=async()=>{if(g(),!p(S))return;b(!0);const Y={...S,entidad:Jt(S.entidad),descripcion:S.descripcion?Jt(S.descripcion):"",metodoPago:Jt(S.metodoPago),file:S.archivo},W=await o(Y);b(!1),W.ok?(a?.(),n()):console.log("respuesta facturas",W)};return i.jsxs("div",{className:"Add-Factura-Modal",children:[i.jsx("div",{className:"modal-backdrop",children:i.jsxs("div",{className:"modal-content",children:[i.jsx("h4",{children:"Subir factura"}),i.jsx(qo,{errors:u}),i.jsx("label",{children:"Archivo de la Factura"}),i.jsxs("div",{className:"d-flex flex-column gap-2",children:[i.jsx("input",{type:"file",id:"fileInput",accept:"image/*,application/pdf",className:"d-none",onChange:C}),S.archivo?i.jsxs("div",{className:"alert alert-success d-flex justify-content-between align-items-center p-2 mb-0",children:[i.jsxs("small",{className:"text-truncate",children:["✅ ",S.archivo.name]}),i.jsx("button",{className:"btn btn-sm btn-link text-danger",onClick:()=>N(z=>({...z,archivo:null})),children:"Cambiar"})]}):i.jsxs("button",{type:"button",className:"btn btn-outline-info w-100 d-flex align-items-center justify-content-center gap-2",onClick:()=>document.getElementById("fileInput").click(),children:[i.jsx("i",{className:"bi bi-camera"}),"Escanear o Seleccionar Archivo"]})]}),i.jsx("label",{children:"Año"}),i.jsx("input",{list:"listaAnios",className:"form-control",name:"anio",value:S.anio,onChange:z=>{O(z),h("anio")},onBlur:z=>d("anio",z.target.value)}),i.jsx("datalist",{id:"listaAnios",children:Array.from({length:10}).map((z,Y)=>{const W=new Date().getFullYear()-Y;return i.jsx("option",{value:W},W)})}),i.jsx("label",{children:"Entidad"}),i.jsx("input",{className:"form-control",name:"entidad",onChange:z=>{O(z),h("entidad")},onBlur:z=>d("entidad",z.target.value)}),i.jsx("label",{children:"Descripción"}),i.jsx("input",{className:"form-control",name:"descripcion",onChange:z=>{O(z),h("descripcion")},onBlur:z=>d("descripcion",z.target.value)}),i.jsx("label",{children:"Valor (COP)"}),i.jsx("input",{type:"text",className:"form-control",name:"valor",value:S.valor?_(S.valor):"",onChange:z=>{const Y=z.target.value.replace(/\D/g,"");N(W=>({...W,valor:Y})),d("valor",Y),h("valor")},onBlur:()=>d("valor",S.valor)}),i.jsx("label",{children:"Método de Pago"}),i.jsx("select",{className:"form-control",name:"metodoPago",value:S.metodoPago,disabled:x,onChange:z=>{O(z),h("metodoPago")},onBlur:z=>d("metodoPago",z.target.value),children:x?i.jsx("option",{children:"Cargando..."}):i.jsxs(i.Fragment,{children:[i.jsx("option",{value:"",children:"Seleccione..."}),L.map(z=>i.jsx("option",{value:z,children:z},z))]})}),i.jsxs("div",{className:"mt-3 d-flex gap-2",children:[i.jsx("button",{className:"btn btn-primary",onClick:I,children:v?i.jsxs(i.Fragment,{children:[i.jsx(St,{as:"span",animation:"border",size:"sm"})," Guardando..."]}):"Subir"}),i.jsx("button",{className:"btn btn-secondary",onClick:n,children:"Cancelar"})]})]})}),i.jsx(Go,{show:v})]})}function cT({show:n,onHide:a,factura:o,onUpdated:l}){const{updateFactura:u}=Lm(),[d,p]=m.useState(!1),[g,h]=m.useState({entidad:"",descripcion:"",valor:"",metodoPago:"",registroId:""});m.useEffect(()=>{o&&h({registroId:o.registroId,entidad:o.entidad,descripcion:o.descripcion,valor:o.valor,metodoPago:o.metodoPago})},[o]);const v=x=>{const{name:w,value:S}=x.target;h(N=>({...N,[w]:S}))},b=async()=>{p(!0);const x=await u(g);x.ok?(p(!1),l(),a()):alert(x.mensaje||"Error al actualizar la factura")};return o?i.jsx("div",{className:"edit-factura-modal",children:i.jsxs(ye,{show:n,onHide:a,centered:!0,children:[i.jsx(ye.Header,{closeButton:!0,children:i.jsx(ye.Title,{children:"✏️ Editar factura"})}),i.jsx(ye.Body,{children:i.jsxs(ae,{children:[i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{children:"Entidad"}),i.jsx(ae.Control,{type:"text",name:"entidad",value:g.entidad,onChange:v,placeholder:"Entidad"})]}),i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{children:"Descripción"}),i.jsx(ae.Control,{type:"text",name:"descripcion",value:g.descripcion,onChange:v,placeholder:"Descripción"})]}),i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{children:"Valor"}),i.jsx(ae.Control,{type:"number",name:"valor",value:g.valor,onChange:v,placeholder:"Ej: 25000"})]}),i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{children:"Método de pago"}),i.jsx(ae.Control,{type:"text",name:"metodoPago",value:g.metodoPago,onChange:v,placeholder:"Ej: Nequi, Daviplata, Tarjeta Crédito"})]})]})}),i.jsxs(ye.Footer,{children:[i.jsx(Oe,{variant:"secondary",onClick:a,children:"Cancelar"}),i.jsx(Oe,{variant:"primary",onClick:b,children:d?i.jsxs(i.Fragment,{children:[i.jsx(St,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ","Guardando..."]}):"Guardar cambios "})]})]})}):null}const Lb=({isMobile:n})=>n?i.jsxs("div",{className:"factura-card skeleton-card-mobile",children:[i.jsxs("div",{className:"card-top",children:[i.jsx("div",{className:"skeleton-bar",style:{width:"40%"}}),i.jsx("div",{className:"skeleton-bar",style:{width:"30%"}})]}),i.jsx("div",{className:"skeleton-bar mt-3",style:{width:"90%"}}),i.jsxs("div",{className:"acciones-mobile mt-3",children:[i.jsx("div",{className:"skeleton-square"}),i.jsx("div",{className:"skeleton-circle"})]})]}):i.jsxs("tr",{className:"factura-skeleton-row",children:[i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"250px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"80px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"100px"}})}),i.jsx("td",{className:"acciones",children:i.jsx("div",{className:"skeleton-bar",style:{width:"40px"}})})]});function uT(){const{puede:n}=ma(),a=n("obtenerFacturasPorAnio"),o=n("subirArchivoFacturas"),l=n("actualizarFactura"),u=n("eliminarFactura"),d=window.innerWidth<768,p=new Date().getFullYear(),{loading:g,fetchFacturasPorAnio:h,deleteFactura:v}=Lm(),[b,x]=m.useState(p),[w,S]=m.useState([]),[N,R]=m.useState(!1),[E,O]=m.useState(""),[C,T]=m.useState(""),[_,M]=m.useState(!1),[L,I]=m.useState(null),[z,Y]=m.useState(!1);m.useEffect(()=>{if(!a){S([]);return}h(b).then(S)},[b,h,a]);const W=m.useMemo(()=>w.filter(D=>!E||D.entidad===E).filter(D=>!C||D.metodoPago===C).reduce((D,re)=>D+Number(re.valor||0),0),[w,E,C]),oe=m.useMemo(()=>w.filter(D=>!E||D.entidad===E).filter(D=>!C||D.metodoPago===C),[w,E,C]),ne=D=>new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(D),le=D=>{window.open(D.link,"_blank")},J=async()=>{if(!L)return;(await v(L.registroId)).ok&&S(re=>re.filter(A=>A.registroId!==L.registroId)),M(!1),I(null)},ie=[...new Set(w.map(D=>D.entidad))],$=[...new Set(w.map(D=>D.metodoPago))],ee=()=>{h(b).then(S)};return i.jsxs("div",{className:"container mt-4 facturas-container",children:[i.jsxs("div",{className:"header-flex",children:[i.jsxs("h2",{children:["🧾 Facturas ",b]}),i.jsxs("div",{className:"d-flex align-items-center gap-3",children:[i.jsxs("strong",{children:["Total: ",ne(W)]}),!d&&i.jsx("button",{disabled:!o,className:"btn btn-primary",onClick:()=>R(!0),children:"➕ Subir factura"})]})]}),a?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"filtros d-flex gap-2 my-3",children:[i.jsx("select",{className:"form-select w-auto",value:b,onChange:D=>x(D.target.value),children:Array.from({length:10}).map((D,re)=>{const A=p-re;return i.jsx("option",{children:A},A)})}),i.jsxs("select",{className:"form-select w-auto",value:E,onChange:D=>O(D.target.value),children:[i.jsx("option",{value:"",children:"Todas las entidades"}),ie.map(D=>i.jsx("option",{value:D,children:D},D))]}),i.jsxs("select",{className:"form-select w-auto",value:C,onChange:D=>T(D.target.value),children:[i.jsx("option",{value:"",children:"Todos los métodos"}),$.map(D=>i.jsx("option",{value:D,children:D},D))]})]}),g?d?i.jsx("div",{className:"facturas-mobile",children:Array.from({length:5}).map((D,re)=>i.jsx(Lb,{isMobile:!0},re))}):i.jsx("div",{className:"table-responsive facturas-por-anio",children:i.jsxs("table",{className:"table table-bordered",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"Entidad"}),i.jsx("th",{children:"Descripción"}),i.jsx("th",{children:"Valor"}),i.jsx("th",{children:"Método"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:Array.from({length:5}).map((D,re)=>i.jsx(Lb,{isMobile:!1},re))})]})}):oe.length===0?i.jsx("div",{className:"Facturas-Loading-CargandoFacturas",children:i.jsx("p",{children:"No hay facturas con esos filtros."})}):i.jsxs(i.Fragment,{children:[!d&&i.jsx("div",{className:"table-responsive facturas-por-anio",children:i.jsxs("table",{className:"table table-bordered table-hover",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"Entidad"}),i.jsx("th",{children:"Descripción"}),i.jsx("th",{children:"Valor"}),i.jsx("th",{children:"Método"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:oe.map(D=>i.jsxs("tr",{children:[i.jsx("td",{onClick:()=>le(D),children:D.entidad}),i.jsx("td",{onClick:()=>le(D),children:D.descripcion}),i.jsx("td",{onClick:()=>le(D),children:ne(D.valor)}),i.jsx("td",{onClick:()=>le(D),children:D.metodoPago}),i.jsxs("td",{className:"acciones",children:[i.jsx("i",{className:`bi bi-pencil-square accion-icon ${l?"":"disabled-icon"}`,title:l?"Editar":"No tienes permisos para editar",onClick:()=>{l&&(I(D),Y(!0))}}),i.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${u?"":"disabled-icon"}`,title:u?"Eliminar":"No tienes permisos para eliminar",onClick:()=>{u&&(I(D),M(!0))}})]})]},D.registroId))})]})}),d&&i.jsx("div",{className:"facturas-mobile",children:oe.map(D=>i.jsxs("div",{className:"factura-card",onClick:()=>le(D),children:[i.jsxs("div",{className:"card-top",children:[i.jsx("div",{className:"entidad",children:D.entidad}),i.jsx("div",{className:"valor",children:ne(D.valor)})]}),i.jsx("div",{className:"descripcion",children:D.descripcion}),i.jsxs("div",{className:"acciones-mobile",children:[i.jsx("i",{className:`bi bi-pencil-square accion-icon ${l?"":"disabled-icon"}`,title:l?"Editar":"No tienes permisos para editar",onClick:re=>{re.stopPropagation(),l&&(I(D),Y(!0))}}),i.jsx("i",{className:`bi bi-x-circle accion-icon text-danger ${u?"":"disabled-icon"}`,title:u?"Eliminar":"No tienes permisos para eliminar",onClick:re=>{re.stopPropagation(),u&&(I(D),M(!0))}})]})]},D.registroId))})]})]}):i.jsx("div",{className:"Facturas-Loading-CargandoFacturas",children:i.jsx("p",{children:"No tienes permisos para visualizar facturas."})}),d&&o&&i.jsx("button",{className:"fab-subir",onClick:()=>R(!0),children:i.jsx("i",{className:"bi bi-plus-lg"})}),N&&o&&i.jsx(lT,{onClose:()=>R(!1),onSaved:ee}),i.jsx(pa,{show:_,onHide:()=>M(!1),title:"Eliminar factura",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar la factura de"," ",i.jsx("strong",{children:L?.entidad})," por"," ",i.jsx("strong",{children:ne(L?.valor||0)}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:J}),i.jsx(cT,{show:z,factura:L,onHide:()=>Y(!1),onUpdated:ee})]})}const dT=()=>{const n=da();return i.jsxs("div",{className:"legal-container",children:[i.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),i.jsx("h1",{children:"Política de Privacidad"}),i.jsx("p",{children:"Última actualización: 20 de enero de 2026"}),i.jsxs("p",{children:["Esta Política de Privacidad describe cómo ",i.jsx("strong",{children:"AppDeclaración"})," recopila, utiliza y protege su información al utilizar nuestro servicio de autenticación a través de Google."]}),i.jsxs("div",{class:"highlight",children:[i.jsx("strong",{children:"Nota importante sobre la arquitectura:"})," Esta aplicación es una herramienta descentralizada. Los datos que usted genera se almacenan exclusivamente en su propia cuenta de Google Drive a través de su implementación personal de Google Apps Script. Nosotros no tenemos acceso a sus archivos ni a su información privada."]}),i.jsx("h2",{children:"1. Información que recopilamos"}),i.jsx("p",{children:"Nuestra aplicación utiliza los servicios de Google OAuth para la autenticación. Al iniciar sesión, solicitamos acceso a:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Dirección de correo electrónico:"})," Para identificar su cuenta y gestionar los permisos de acceso."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Información básica de perfil (Nombre y foto):"})," Para personalizar su experiencia dentro de la interfaz."]})]}),i.jsx("h2",{children:"1.1 Información que NO recopilamos"}),i.jsx("p",{children:"AppDeclaración no recopila, almacena ni procesa:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Contraseñas de Google."}),i.jsx("li",{children:"Contenido de correos electrónicos."}),i.jsx("li",{children:"Archivos personales fuera del entorno creado por la aplicación."}),i.jsx("li",{children:"Información bancaria, financiera o datos de pago."})]}),i.jsx("h2",{children:"2. Uso de la información"}),i.jsx("p",{children:"La información obtenida a través de Google se utiliza únicamente para:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Validar su identidad y permitir el acceso a las funciones del backend."}),i.jsx("li",{children:"Registrar logs de auditoría de inicio de sesión (almacenados en su propio Google Drive)."}),i.jsx("li",{children:"Garantizar que el sistema de permisos y roles funcione correctamente."})]}),i.jsx("h2",{children:"3. Almacenamiento de datos"}),i.jsxs("p",{children:["Todos los datos operativos (usuarios, logs, configuraciones y archivos) se almacenan en archivos JSON dentro de la infraestructura de ",i.jsx("strong",{children:"Google Drive del usuario"}),". Esta aplicación no posee una base de datos centralizada y los desarrolladores no pueden ver, editar ni eliminar sus datos."]}),i.jsx("h2",{children:"4. Intercambio de datos con terceros"}),i.jsxs("p",{children:[i.jsx("strong",{children:"No vendemos, alquilamos ni compartimos"})," su información personal con terceros."]}),i.jsx("p",{children:"El frontend de la aplicación puede estar alojado en plataformas como GitHub Pages, las cuales únicamente sirven contenido estático y no tienen acceso a información personal, datos de autenticación ni archivos del usuario."}),i.jsx("p",{children:"Los datos solo fluyen entre su navegador, el frontend alojado en GitHub y su backend personal en Google Apps Script."}),i.jsx("h2",{children:"5. Seguridad"}),i.jsx("p",{children:"La seguridad de su información se apoya en los protocolos y estándares de seguridad proporcionados por Google. Al utilizar OAuth 2.0, la aplicación no conoce, no solicita ni almacena su contraseña de Google en ningún momento."}),i.jsx("h2",{children:"6. Sus Derechos"}),i.jsxs("p",{children:["Usted puede revocar el acceso de esta aplicación a su cuenta de Google en cualquier momento a través de la configuración de seguridad de su cuenta de Google en: ",i.jsx("a",{href:"https://myaccount.google.com/permissions",target:"_blank",children:"Google - Aplicaciones con acceso a tu cuenta"}),"."]}),i.jsx("h2",{children:"7. Cambios a esta Política de Privacidad"}),i.jsx("p",{children:"Esta Política de Privacidad puede actualizarse ocasionalmente para reflejar mejoras técnicas o cambios normativos. Cualquier modificación será publicada en esta misma página con la fecha de última actualización correspondiente."}),i.jsx("h2",{children:"8. Contacto"}),i.jsxs("p",{children:["Si tiene preguntas sobre esta política, puede contactarnos en: ",i.jsx("strong",{children:"hectorjaviermorenoh@gmail.com"})]})]})},fT=()=>{const n=da();return i.jsxs("div",{className:"terminos-container",children:[i.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),i.jsx("h1",{children:"Términos y Condiciones de Uso"}),i.jsx("p",{children:"Última actualización: 20 de enero de 2026"}),i.jsxs("div",{class:"notice",children:[i.jsx("strong",{children:"Aviso Importante sobre la Arquitectura del Servicio:"}),i.jsx("br",{}),"AppDeclaración es una aplicación descentralizada. El frontend es centralizado, pero el backend, el procesamiento de datos y el almacenamiento se ejecutan de forma privada dentro de la cuenta personal de Google del usuario, mediante Google Apps Script y Google Drive."]}),i.jsx("h2",{children:"1. Aceptación de los Términos"}),i.jsx("p",{children:"Al acceder, instalar o utilizar AppDeclaración, usted acepta quedar legalmente vinculado a los presentes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, debe abstenerse de utilizar la aplicación."}),i.jsx("h2",{children:"2. Descripción del Servicio"}),i.jsx("p",{children:"AppDeclaración es una herramienta de organización documental y gestión tributaria personal, orientada a facilitar la preparación y el control de información relacionada con declaraciones de renta y soportes fiscales."}),i.jsx("p",{children:"La aplicación permite, entre otras funciones:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Registrar y clasificar entidades emisoras de certificados y documentos tributarios."}),i.jsx("li",{children:"Organizar automáticamente archivos y fotografías en carpetas estructuradas por año gravable y categoría."}),i.jsx("li",{children:"Gestionar datos fiscales básicos como NIT, nombres e identificaciones."}),i.jsx("li",{children:"Administrar accesos mediante tokens y roles definidos por el propio usuario."}),i.jsx("li",{children:"Generar respaldos completos (backups) en formato ZIP de la información almacenada."})]}),i.jsxs("p",{children:["El software se entrega ",i.jsx("strong",{children:"“tal cual”"})," y su funcionamiento depende de que el usuario mantenga una cuenta de Google activa y correctamente configurada."]}),i.jsx("h2",{children:"3. Responsabilidad del Usuario"}),i.jsx("p",{children:"El usuario acepta y reconoce que es el único y exclusivo responsable de:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"La correcta instalación, despliegue y mantenimiento del backend en su cuenta de Google Apps Script."}),i.jsx("li",{children:"La integridad, disponibilidad y confidencialidad de los archivos y carpetas generados en su Google Drive."}),i.jsx("li",{children:"La veracidad y exactitud de la información tributaria ingresada."}),i.jsx("li",{children:"El cumplimiento de las leyes tributarias y fiscales aplicables en su jurisdicción."})]}),i.jsxs("div",{class:"warning",children:[i.jsx("h2",{children:"4. Integridad del Código y Seguridad del Script"}),i.jsx("p",{children:"Para garantizar la seguridad de su información y el correcto funcionamiento del sistema, el usuario se compromete a cumplir las siguientes normas de seguridad técnica:"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Origen Oficial:"})," El código de Backend (Google Apps Script) debe ser obtenido exclusivamente desde la aplicación oficial de ",i.jsx("strong",{children:"AppDeclaración"}),". No utilice códigos proporcionados por terceros, foros o fuentes no oficiales."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Prohibición de Alteración:"})," El usuario no debe modificar, editar ni alterar el código fuente proporcionado para el backend. Cualquier cambio manual puede introducir fallos de seguridad, pérdida de datos o comportamientos imprevistos."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Ejecución por el Propietario:"})," El despliegue y ejecución del script en el entorno de Google Apps Script debe ser realizado personalmente por el dueño de la cuenta de Google. No permita que terceros accedan a su entorno de desarrollo para pegar o ejecutar códigos en su nombre."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Prevención de Código Malicioso:"}),' El uso de versiones modificadas o "clones" de la aplicación representa un riesgo crítico de seguridad. El desarrollador original no se hace responsable de las consecuencias derivadas del uso de código alterado o distribuido por canales ajenos a la aplicación oficial.']})]})]}),i.jsx("h2",{children:"5. Seguridad de la Cuenta de Google"}),i.jsx("p",{children:"Dado que AppDeclaración opera íntegramente sobre la infraestructura personal del usuario, este reconoce que:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Es plenamente responsable de la seguridad de su cuenta de Google."}),i.jsx("li",{children:"Debe proteger sus credenciales de acceso y no compartirlas con terceros."}),i.jsxs("li",{children:["Se recomienda de forma expresa habilitar mecanismos de seguridad adicionales, como la ",i.jsx("strong",{children:"autenticación en dos pasos (2FA)"}),"."]}),i.jsx("li",{children:"Cualquier acceso no autorizado derivado de una configuración insegura de la cuenta es responsabilidad exclusiva del usuario."})]}),i.jsx("p",{children:"El desarrollador no tiene acceso, control ni visibilidad sobre las credenciales, datos o archivos almacenados en la cuenta del usuario."}),i.jsx("h2",{children:"6. Privacidad y Datos"}),i.jsx("p",{children:"AppDeclaración no utiliza bases de datos centralizadas ni almacena información en servidores controlados por el desarrollador. Toda la información reside exclusivamente en archivos locales del Google Drive del usuario, tales como:"}),i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("code",{children:"productos.json"})}),i.jsx("li",{children:i.jsx("code",{children:"bddatos.json"})}),i.jsx("li",{children:i.jsx("code",{children:"facturas.json"})}),i.jsx("li",{children:"y otros archivos generados por la aplicación"})]}),i.jsx("h2",{children:"7. Limitación de Responsabilidad"}),i.jsx("p",{children:"Bajo ninguna circunstancia el desarrollador será responsable por:"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Pérdida, corrupción o eliminación de datos almacenados en la cuenta del usuario."}),i.jsxs("li",{children:["Errores derivados de información incorrecta o ",i.jsx("strong",{children:"código de backend modificado"})," por el usuario."]}),i.jsx("li",{children:"Interrupciones del servicio ocasionadas por cambios, fallos o políticas de Google Cloud, Google Drive, Apps Script o GitHub."}),i.jsx("li",{children:"Daños directos o indirectos derivados del uso o imposibilidad de uso de la aplicación."})]}),i.jsx("h2",{children:"8. Modificaciones del Servicio"}),i.jsx("p",{children:"El desarrollador podrá actualizar el frontend para mejoras o correcciones. La actualización del backend desplegado en la cuenta del usuario es responsabilidad exclusiva de este último."}),i.jsx("h2",{children:"9. Propiedad Intelectual"}),i.jsxs("p",{children:["El código fuente, diseño y concepto de AppDeclaración son propiedad de ",i.jsx("strong",{children:"Hector Javier Moreno"}),". Se concede una licencia de uso personal, no exclusiva, no transferible y revocable."]}),i.jsx("h2",{children:"10. Terminación"}),i.jsx("p",{children:"El usuario puede dejar de utilizar el servicio en cualquier momento eliminando el script de su cuenta de Google y revocando los permisos OAuth. El desarrollador no puede cancelar ni eliminar cuentas del usuario, dado que la infraestructura es completamente privada."}),i.jsx("h2",{children:"11. Uso Gratuito y Donaciones de Carácter Simbólico"}),i.jsxs("p",{children:["AppDeclaración es una herramienta de uso ",i.jsx("strong",{children:"totalmente gratuito"}),". El acceso, instalación y utilización de la aplicación no implican ningún costo para el usuario."]}),i.jsxs("p",{children:["De manera opcional, el usuario podrá realizar una ",i.jsx("strong",{children:"donación voluntaria y de carácter simbólico"}),", como un gesto de buena voluntad si considera que la aplicación le ha resultado útil o le ha ayudado a resolver una necesidad puntual."]}),i.jsx("p",{children:"Estas donaciones tienen un sentido meramente simbólico —por ejemplo, el valor de un café— y no constituyen en ningún caso un pago por el uso del software."}),i.jsxs("ul",{children:[i.jsx("li",{children:"La donación es completamente voluntaria y no obligatoria."}),i.jsx("li",{children:"No existe un monto mínimo ni máximo establecido."}),i.jsx("li",{children:"La donación no otorga derechos adicionales, funcionalidades extra ni soporte preferencial."}),i.jsx("li",{children:"La no realización de una donación no limita ni condiciona el uso de la aplicación."})]}),i.jsx("p",{children:"En caso de que el usuario decida realizar una donación, podrá hacerlo a través del enlace de donaciones en la aplicación."}),i.jsx("h2",{children:"12. Contacto"}),i.jsxs("p",{children:["Para consultas relacionadas con estos términos, puede contactar a:",i.jsx("br",{}),i.jsx("strong",{children:"hectorjaviermorenoh@gmail.com"})]}),i.jsx("h2",{children:"13. Legislación Aplicable"}),i.jsx("p",{children:"Estos Términos y Condiciones se rigen por la legislación vigente en la República de Colombia. Cualquier controversia será resuelta conforme a las normas aplicables en dicha jurisdicción."}),i.jsx("div",{class:"footer",children:"© 2026 AppDeclaración. Todos los derechos reservados."})]})};function mT(){const n=da();return i.jsx("div",{className:"acerca-de-container container my-5 animate__animated animate__fadeIn",children:i.jsx("div",{className:"row justify-content-center",children:i.jsxs("div",{className:"col-md-10 col-lg-8",children:[i.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),i.jsxs("div",{className:"card shadow-sm p-4 p-md-5",children:[i.jsxs("header",{className:"text-center mb-3",children:[i.jsx("h1",{className:"fw-bold text-primary",children:"AppDeclaración"}),i.jsx("p",{className:"lead text-muted",children:"Tu asistente personal para la organización tributaria"})]}),i.jsxs("section",{className:"mb-3",children:[i.jsx("h4",{className:"fw-bold border-bottom pb-2 mb-3",children:"¿Qué es AppDeclaración?"}),i.jsx("p",{children:"Es una solución tecnológica diseñada para eliminar el estrés de la temporada de impuestos. Su propósito principal es ayudarte a recopilar, organizar y visualizar los certificados y facturas necesarios para tu declaración de renta de forma eficiente y centralizada."})]}),i.jsxs("section",{className:"mb-3",children:[i.jsx("h4",{className:"fw-bold border-bottom pb-2 mb-3",children:"Características Principales"}),i.jsxs("div",{className:"row g-4",children:[i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex align-items-start",children:[i.jsx("div",{className:"badge bg-primary-soft text-primary p-3 me-3",children:i.jsx("i",{className:"bi bi-folder-check fs-4"})}),i.jsxs("div",{children:[i.jsx("h6",{className:"fw-bold mb-1",children:"Organización Inteligente"}),i.jsx("p",{className:"small text-muted",children:"Archivos organizados automáticamente por año gravable y categorías."})]})]})}),i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex align-items-start",children:[i.jsx("div",{className:"badge bg-success-soft text-success p-3 me-3",children:i.jsx("i",{className:"bi bi-shield-lock fs-4"})}),i.jsxs("div",{children:[i.jsx("h6",{className:"fw-bold mb-1",children:"Privacidad Total"}),i.jsx("p",{className:"small text-muted",children:"Los datos nunca salen de tu cuenta de Google. Tú eres el único dueño."})]})]})}),i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex align-items-start",children:[i.jsx("div",{className:"badge bg-info-soft text-info p-3 me-3",children:i.jsx("i",{className:"bi bi-camera fs-4"})}),i.jsxs("div",{children:[i.jsx("h6",{className:"fw-bold mb-1",children:"Soportes y Facturas"}),i.jsx("p",{className:"small text-muted",children:"Sube archivos o toma fotos de tus facturas de compra al instante."})]})]})}),i.jsx("div",{className:"col-md-6",children:i.jsxs("div",{className:"d-flex align-items-start",children:[i.jsx("div",{className:"badge bg-warning-soft text-warning p-3 me-3",children:i.jsx("i",{className:"bi bi-file-zip fs-4"})}),i.jsxs("div",{children:[i.jsx("h6",{className:"fw-bold mb-1",children:"Backup Seguro"}),i.jsx("p",{className:"small text-muted",children:"Exporta toda tu información en un archivo ZIP con un solo clic."})]})]})})]})]}),i.jsxs("section",{className:"bg-light p-2 rounded mb-3",children:[i.jsx("h4",{className:"fw-bold mb-3",children:"Arquitectura Descentralizada"}),i.jsxs("p",{className:"mb-0",children:["A diferencia de otras aplicaciones, ",i.jsx("strong",{children:"AppDeclaración"})," no utiliza bases de datos centrales. Funciona mediante un modelo donde el frontend se conecta directamente a tu propio backend en",i.jsx("strong",{children:" Google Apps Script"}),". Esto garantiza que tus datos tributarios residan siempre dentro de tu espacio personal de ",i.jsx("strong",{children:"Google Drive"}),"."]})]}),i.jsxs("footer",{className:"text-center mt-3 pt-4 border-top",children:[i.jsxs("p",{className:"mb-1 text-muted",children:["Desarrollado por ",i.jsx("strong",{children:"Hector Javier Moreno"})]}),i.jsxs("div",{className:"mt-3",children:[i.jsx("p",{className:"small mb-2",children:"Si esta herramienta te ha sido útil, puedes apoyar su mantenimiento:"}),i.jsxs(wn,{to:"/donaciones",className:"btn btn-warning fw-bold",children:[i.jsx("i",{className:"bi bi-cup-hot me-2"}),"Invítame un café"]})]})]})]})]})})})}const pT="/appdeclaracion/assets/qr_nequi-BBArSa2A.png";function hT(){const n=da(),[a,o]=m.useState(!1),l="3103434753",u=()=>{navigator.clipboard.writeText(l),o(!0),setTimeout(()=>o(!1),2e3)};return i.jsx("div",{className:"donaciones-container container my-5 animate__animated animate__fadeIn",children:i.jsx("div",{className:"row justify-content-center",children:i.jsxs("div",{className:"col-md-9 col-lg-7",children:[i.jsxs("button",{className:"btn btn-outline-secondary btn-sm mb-4",onClick:()=>n(-1),children:[i.jsx("i",{className:"bi bi-arrow-left me-2"}),"Volver"]}),i.jsxs("div",{className:"card shadow-lg border-0 p-4 p-md-5 text-center",children:[i.jsxs("header",{className:"mb-3 text-center",children:[i.jsx("div",{className:"badge bg-warning-soft text-warning p-3 mb-3 fs-4 rounded-circle",children:i.jsx("i",{className:"bi bi-cup-hot-fill"})}),i.jsx("h1",{className:"fw-bold text-dark",children:"¿Te gustaría invitarme un café?"}),i.jsxs("p",{className:"lead text-muted mx-auto",style:{maxWidth:"500px"},children:["AppDeclaración es y seguirá siendo una herramienta ",i.jsx("strong",{children:"totalmente gratuita"}),". Si te ha sido útil, cualquier aporte voluntario es bienvenido para apoyar su mantenimiento."]})]}),i.jsxs("div",{className:"row g-4 align-items-center mb-5",children:[i.jsxs("div",{className:"col-md-6 border-end-md",children:[i.jsx("div",{className:"qr-wrapper p-3 bg-white border rounded-4 shadow-sm mx-auto",style:{maxWidth:"250px"},children:i.jsx("img",{src:pT,alt:"Código QR Nequi para donaciones",className:"img-fluid rounded-3"})}),i.jsx("div",{className:"small text-muted mt-2",children:"Escanea desde tu app Nequi"})]}),i.jsxs("div",{className:"col-md-6 text-md-start px-md-4",children:[i.jsx("h6",{className:"text-uppercase fw-bold text-secondary mb-3 small",children:"Medios en Colombia"}),i.jsxs("div",{className:"d-flex align-items-center mb-3",children:[i.jsx("span",{className:"badge bg-nequi me-2",children:"Nequi"}),i.jsx("span",{className:"badge bg-breb",children:"Bre-B"})]}),i.jsxs("div",{className:"info-cuenta p-3 border rounded-3 bg-white shadow-sm mb-3",children:[i.jsx("div",{className:"small text-muted mb-1",children:"Número de cuenta / Celular"}),i.jsx("div",{className:"h4 fw-bold mb-1 text-dark letter-spacing-1",children:l}),i.jsx("div",{className:"small text-primary fw-medium",children:"A nombre de: Hector Javier Moreno"})]}),i.jsxs("button",{className:`btn ${a?"btn-success":"btn-outline-dark"} w-100 fw-bold`,onClick:u,children:[i.jsx("i",{className:`bi ${a?"bi-check-all":"bi-clipboard"} me-2`}),a?"¡Copiado!":"Copiar número"]})]})]}),i.jsxs("div",{className:"disclaimer p-3 rounded-3 text-center mx-auto",style:{maxWidth:"600px"},children:[i.jsx("i",{className:"bi bi-rocket-takeoff me-2"}),"Tu apoyo es un reconocimiento al tiempo que ",i.jsx("strong",{children:"AppDeclaración"})," te ha ahorrado en la recopilación de tus documentos. ",i.jsx("strong",{children:"¡Gracias por valorar este desarrollo!"})]})]})]})})})}const d0=({isOpen:n,onClose:a,titulo:o,codigo:l})=>{const[u,d]=m.useState(!1),p=()=>{navigator.clipboard.writeText(l),d(!0),setTimeout(()=>{d(!1)},2e3)};return n?i.jsx("div",{className:"modal-backend-overlay",onClick:a,children:i.jsxs("div",{className:"modal-backend",onClick:g=>g.stopPropagation(),children:[i.jsx("h2",{children:o}),i.jsx("pre",{children:i.jsx("code",{children:l})}),i.jsxs("div",{className:"modal-botones",children:[i.jsx("button",{onClick:p,children:"Copiar código"}),i.jsx("button",{onClick:a,children:"Cerrar"})]}),u&&i.jsx("p",{className:"mensaje-copiado",children:"Script copiado correctamente"})]})}):null},gT=`/******************************
 * Version
 ******************************/
 const VERSION = "2408262028PM";

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
    } catch (e) {
      Logger.log("Nota: No se pudo aplicar el color en v3: " + e.message);
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

  } catch (e) {
    Logger.log("❌ Error en inicialización: " + e.message);
    throw e;
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

  } catch (e) {
    return { autorizado: false, mensaje: "Error al validar token: " + e.message };
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
    return { status: "error", mensaje: "❌ Error al generar backup: " + err.message };
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
    if (!archivos.hasNext()) throw new Error(\`Archivo no encontrado: \${nombreArchivo}\`);
    const archivo = archivos.next();
    archivo.setContent(JSON.stringify(contenido, null, 2));
  } catch (err) {
    Logger.log(\`❌ Error al guardar \${nombreArchivo}: \${err.message}\`);
    registrarLog("guardarJSON", "sistema", { archivo: nombreArchivo, error: err.message });
    return false;
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

    } catch (e) {
      registrarLog("error_limpieza_drive", correoEjecutor, { fileId, anio, error: e.message });
      return { borrado: false, motivo: "Error en Drive: " + e.message };
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
  } catch (error) {
    // Si falla la captura, devolvemos un objeto para que el caller lo maneje
    throw new Error('Error al capturar payload: ' + error.message);
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
  lock.waitLock(30000); // hasta 30s esperando

  try {
    let logs = leerJSON(JSON_LOGS);
    const nuevoLog = {
      // fecha: new Date().toISOString(),
      fecha: Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss"),
      accion,
      usuario: usuario || "desconocido",
      detalle: detalle || {}
    };
    logs.push(nuevoLog);
    guardarJSON(JSON_LOGS, logs);
    return nuevoLog; // opcional, para debug

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

  // 🗑️ Borrar solo subcarpetas
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
        // 1. Si llegó aquí, el token es válido.

        // 2. Generar un NUEVO token de sesión con 8 horas más de vida
        const nuevoTokenPropio = generarTokenPropio(usuario);

        // 3. Devolver el nuevo token y los datos de usuario
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
        // return respuestaJSON({status: "ok", data: leerJSON(JSON_PRODUCTOS)});
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

  try {
    const configActual = leerJSON(JSON_CONFIGURACION) || {};
    const correoEjecutor = usuario?.correo || "sistema";

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
    manejarError(err, "actualizarConfig", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar la configuración.",
      detalle: err,
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

  try {
    const roles = leerJSON(JSON_ROLES) || [];
    // const nuevoRol = normalizarTexto(data?.rol || "").trim();
    const nuevoRol = data?.rol;
    const permisosIniciales = Array.isArray(data?.permisos)
      ? data.permisos
      : [];
    const correoUsuario = usuario?.correo || "sistema";

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

    registrarLog("agregarRol", correoUsuario, \`Rol creado: \${nuevoRol}\`);

    return respuestaJSON({
      status: "ok",
      mensaje: \`✅ Rol "\${nuevoRol}" creado correctamente.\`,
      datos: roles,
    });
  } catch (err) {
    manejarError(err, "agregarRol", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al crear el rol. Intenta nuevamente o contacta al administrador.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function actualizarRol(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const roles = leerJSON(JSON_ROLES) || [];
    const { rol, permisos } = data;
    const correoUsuario = usuario?.correo || "sistema";

    if (!rol)
      return respuestaJSON({
        status: "error",
        mensaje: "⚠️ El nombre del rol es obligatorio.",
      });

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

    registrarLog("actualizarRol", correoUsuario, \`Permisos actualizados para el rol: \${rol}\`);

    return respuestaJSON({
      status: "ok",
      mensaje: \`✅ Permisos actualizados correctamente para el rol "\${rol}".\`,
      datos: roles,
    });
  } catch (err) {
    manejarError(err, "actualizarRol", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error interno al actualizar el rol. Intenta nuevamente o contacta al administrador.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarRol(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const { rol } = data;
    const correoUsuario = usuario?.correo || "sistema";

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

    registrarLog("eliminarRol", correoUsuario, \`Rol eliminado: \${rol}\`);
    return respuestaJSON({
      status: "ok",
      mensaje: \`🗑️ Rol "\${rol}" eliminado correctamente.\`,
      datos: nuevosRoles,
    });
  } catch (err) {
    manejarError(err, "eliminarRol", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Ocurrió un error interno al intentar eliminar el rol. Intenta nuevamente o contacta al administrador",
      detalle: err,
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

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, nombre, rol } = data;
    const correoEjecutor = usuario?.correo || "sistema";

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
    } catch (e) {
      const errorMsg = e.message.toLowerCase();

      if (errorMsg.includes("no tiene una cuenta de google") ||
          errorMsg.includes("does not have a google account")) {
        return respuestaJSON({
          status: "error",
          mensaje: \`❌ El correo "\${correo}" no está vinculado a una cuenta de Google válida.\`
        });
      }

      throw new Error("Error al asignar carpeta: " + e.message);

    }

    // 2️⃣ TIEMPO DE ESPERA (Crucial para propagación de permisos)
    Utilities.sleep(5000); // Aumentamos a 2 segundos por seguridad

    // 3️⃣ PROTECCIÓN: Quitar acceso a los JSON
    // const archivosProtegidos = [
    //   JSON_CONFIGURACION, JSON_USUARIOS, JSON_ROLES,
    //   JSON_PRODUCTOS, JSON_BDD_DATOS, JSON_BDD_FACTURAS,
    //   JSON_LOGS, JSON_DATOS_TRIBUTARIOS
    // ];

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
        } catch (e) {
          return respuestaJSON({
            status: "error",
            mensaje: \`❌ Error de seguridad: No se pudo restringir el acceso al archivo "\${nombreArchivo}".\`,
            detalle: e.message
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
    manejarError(err, "agregarUsuario", usuario?.correo);
    return respuestaJSON({ status: "error", mensaje: "❌ Error al crear el usuario.", detalle: err.message });
  } finally {
    lock.releaseLock();
  }
}
function actualizarUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, nombre, rol } = data;
    const correoEjecutor = usuario?.correo || "sistema";

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
    manejarError(err, "actualizarUsuario", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar usuario.",
      detalle: err,
    });
  } finally {
    lock.releaseLock();
  }
}
function toggleUsuarioActivo(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo, activo, nombre } = data;
    const correoEjecutor = usuario?.correo || "sistema";
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
        } catch(e) {
          Drive.Permissions.insert({
            'role': 'reader',
            'type': 'user',
            'value': correo
          }, carpetaId, { 'sendNotificationEmail': false });
        }
        driveStatus = "Permisos activados.";
      } catch (e) {
        driveStatus = "Ya tenía permisos o error: " + e.message;
      }

      Utilities.sleep(5000);
      const carpeta = DriveApp.getFolderById(carpetaId);

      // const archivosProtegidos = [JSON_CONFIGURACION, JSON_USUARIOS, JSON_ROLES, JSON_PRODUCTOS, JSON_BDD_DATOS, JSON_BDD_FACTURAS, JSON_LOGS, JSON_DATOS_TRIBUTARIOS];

      let archivosOcultados = 0;

      ARCHIVOS_PROTEGIDOS.forEach(n => {
        const file = carpeta.getFilesByName(n);
        if (file.hasNext()) {
          const f = file.next();
          try { f.removeViewer(correo); } catch(e){}
        }
        archivosOcultados++;
      });
      // driveStatus += " Archivos protegidos.";
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
      } catch (e) {
        driveStatus = "Error crítico al revocar: " + e.message;
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
    manejarError(err, "toggleUsuarioActivo", usuario?.correo);
    return respuestaJSON({ status: "error", detalle: err.message });
  } finally {
    lock.releaseLock();
  }
}
function eliminarUsuario(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const usuarios = leerJSON(JSON_USUARIOS) || [];
    const { correo } = data;
    const correoEjecutor = usuario?.correo || "sistema";

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
    } catch (e) {
      // Registramos el error pero no detenemos la eliminación del JSON
      console.warn(\`Aviso al quitar permisos de Drive: \${e.message}\`);
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
    manejarError(err, "eliminarUsuario", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al eliminar usuario.",
      detalle: String(err.message || err)
    });
  } finally {
    lock.releaseLock();
  }
}
// Productos
function agregarProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let productos = leerJSON(JSON_PRODUCTOS);
    const correoEjecutor = usuario?.correo || "sistema";
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
      resultados
      });
  } finally {
    lock.releaseLock();
  }
}
function actualizarProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let productos = leerJSON(JSON_PRODUCTOS) || [];
    const correoEjecutor = usuario?.correo || "sistema";

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
    manejarError(err, "actualizarProducto", usuario?.correo);
    return respuestaJSON({
      status: "error",
      mensaje: "❌ Error al actualizar el producto.",
      detalle: err.message
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarProducto(id, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {

    let productos = leerJSON(JSON_PRODUCTOS);
    const correoEjecutor = usuario?.correo || "sistema";

    const eliminado = productos.find(p => p.id === id);

    let nuevos = productos.filter(p => p.id !== id);
    guardarJSON(JSON_PRODUCTOS, nuevos);

    // ✅ Registrar log
    registrarLog("eliminarProducto", correoEjecutor, {
      productoEliminado: eliminado || id
    });
    return respuestaJSON({ status: "ok", mensaje: "Producto eliminado", productos: nuevos });

  } finally {
    lock.releaseLock();
  }
}
// Archivos
function subirArchivoProducto(e, isMultipart, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {

    let config = leerJSON(JSON_CONFIGURACION);
    let bddatos = leerJSON(JSON_BDD_DATOS);
    let productos = leerJSON(JSON_PRODUCTOS);

    const correoEjecutor = usuario?.correo || "sistema";

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

    // Si viene como string separado por comas, convertir a array
    if (typeof productosId === "string") {
      productosId = productosId.split(",");
    }

    productosId = productosId.map(p => String(p));

    // *****************************************************
    // obtener nombres de los productos que se quieren subir
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
    // *****************************************************


    // --- Validar extensión y tamaño ---
    const validacion = validarArchivo(archivoBlob, config);

    // if (!validacion.ok) {
    //   return respuestaJSON({ success: false, message: validacion.mensaje });
    // }

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
  } catch (error) {
    // ⚠️ Capturar cualquier error inesperado
    return respuestaJSON({
      success: false,
      status: "error_interno",
      message: "⚠️ Error interno al subir el archivo linea 998: " + error.message,
      stack: error.stack ? error.stack.substring(0, 500) : undefined, // útil para depuración
    });

  } finally {
    lock.releaseLock();
  }
}
function subirArchivoFacturas(e, isMultipart, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000); // espera hasta 30s si otro proceso lo está usando

  try {

    let config = leerJSON(JSON_CONFIGURACION);
    const correoEjecutor = usuario?.correo || "sistema";

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
    // if (!validacion.ok) {
    //   return respuestaJSON({ success: false, message: validacion.mensaje });
    // }

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

  } finally {
    lock.releaseLock();
  }
}
function remplazarArchivoProducto(e, isMultipart, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let config = leerJSON(JSON_CONFIGURACION);
    let bddatos = leerJSON(JSON_BDD_DATOS);
    const correoEjecutor = usuario?.correo || "sistema";

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

  } catch (error) {
    return respuestaJSON({
      success: false,
      status: "error_interno",
      message: "⚠️ Error interno: " + error.message
    });
  } finally {
    lock.releaseLock();
  }
}
function eliminarRegistroProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const correoEjecutor = usuario?.correo || "sistema";
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

  } catch (e) {
    return respuestaJSON({
      status: "error",
      mensaje: "Error interno: " + (e.message || e)
    });
  } finally {
    lock.releaseLock();
  }
}
function editarRegistroProducto(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const correoEjecutor = usuario?.correo || "sistema";
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

    // 🔹 Crear el objeto editado
    // const registroEditado = {
    //   ...registroActual,
    //   entidad: data.entidad ?? registroActual.entidad,
    //   nombreProducto: data.nombreProducto ?? registroActual.nombreProducto,
    //   descripcion: data.descripcion ?? registroActual.descripcion,
    //   tipo: data.tipo ?? registroActual.tipo,
    //   anio: data.anio ?? registroActual.anio,
    //   fileId: nuevoFileId,
    //   link: nuevoLink,
    //   fechaEdicion: new Date().toISOString()
    // };

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

  } catch (e) {
    return respuestaJSON({ status: "error", mensaje: e.message });
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

  } catch (error) {
    return respuestaJSON({
      status: "error",
      mensaje: "Error al obtener productos",
      detalle: error.message || "No se pudo leer el archivo JSON_PRODUCTOS"
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

  try {
    let bddatos = leerJSON(JSON_BDD_FACTURAS);
    const correoEjecutor = usuario?.correo || "sistema";
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

  } catch (error) {
    return respuestaJSON({ status: "error", mensaje: "Error: " + error.message });
  } finally {
    lock.releaseLock();
  }
}
function eliminarFactura(data, usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let bddatos = leerJSON(JSON_BDD_FACTURAS);
    const correoEjecutor = usuario?.correo || "sistema";

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

    registrarLog("actualizarDatosTributarios", usuario?.correo || "sistema", {
      resumen: huboCambios ? "Se detectaron cambios en la estructura o valores" : "Sincronización sin cambios",
      detalles: huboCambios ? cambios : "Ninguno",
      totalRegistros: nuevosDatos.length
    });

    return respuestaJSON({
      status: "ok",
      mensaje: "Datos actualizados",
      cambiosDetectados: huboCambios
    });

  } catch (error) {
    return respuestaJSON({ status: "error", mensaje: error.message });
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

  } catch (error) {
    // 🚨 Si hubo un problema al leer el archivo
    return respuestaJSON({
      status: "error",
      mensaje: "Error al obtener logs",
      detalle: error.message || "No se pudo leer el archivo de logs"
    });

  } finally {
    lock.releaseLock();
  }
}
function limpiarLogsAntiguos(usuario) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    let logs = leerJSON(JSON_LOGS) || [];
    const correoEjecutor = usuario?.correo || "sistema";

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

  } catch (error) {
    return manejarError(error, "limpiarLogsAntiguos", correoEjecutor);
  } finally {
    lock.releaseLock();
  }
}

/******************************
 * FIN BACKEND
 ******************************/


`,vT="/appdeclaracion/assets/imgBackend1-DKTzNuOW.jpg",bT="/appdeclaracion/assets/imgBackend2-BmEfbyIy.jpg",yT="/appdeclaracion/assets/imgBackend3-BuAMQh4j.jpg",xT="/appdeclaracion/assets/imgBackend4-BQKsFeS5.jpg",wT="/appdeclaracion/assets/imgBackend5-DIk2EPdD.jpg",jT="/appdeclaracion/assets/imgBackend6-9M-3FINV.jpg",ST="/appdeclaracion/assets/imgBackend7-bBPCHXKZ.jpg",NT="/appdeclaracion/assets/imgBackend8-BASDq0js.jpg",ET="/appdeclaracion/assets/imgBackend9-DcAxGF_g.jpg",CT=()=>{const[n,a]=m.useState(!1),o=()=>{window.open("https://script.google.com/home/","_blank")},l=[{img:vT,descripcion:"Ingrese a la consola de Google Apps Script para comenzar con la configuración:",puntos:["Escriba https://script.google.com/home/ en su navegador.","O haga clic en el botón 'Abrir Apps Script' de arriba."]},{img:bT,descripcion:"Inicie un nuevo proyecto desde el panel principal:",puntos:["Haga clic en el botón 'Nuevo proyecto' ubicado en la parte superior izquierda."]},{img:yT,descripcion:"Configure el código base del backend:",puntos:["Cambie el nombre del proyecto a 'AppDeclaracion' haciendo doble click encima del nombre .","Ubique el archivo Codigo.gs y elimine todo su contenido.","Pegue el código proporcionado por AppDeclaracion el cual puede ver y copiar en el siguiente botón."]},{img:xT,descripcion:"Habilite los servicios necesarios de Google:",puntos:["En el panel izquierdo, haga clic en el símbolo '+' en Servicios para agregar un Drive.","Busque y seleccione 'Drive API'.","Seleccione la versión v3 y haga clic en 'Añadir'."]},{img:wT,descripcion:"Inicie el proceso de publicación:",puntos:["Haga clic en el botón azul 'Implementar' (arriba a la derecha).","Seleccione 'Nueva implementación'.","Haga clic en el icono de engranaje y elija 'Aplicación web'."]},{img:jT,descripcion:"Configure los parámetros de acceso de la aplicación:",puntos:["Descripción: 'Versión inicial'.","Ejecutar como: 'Yo'.","Quién tiene acceso: 'Cualquier usuario' (esto es vital para la conexión).","Haga clic en el botón 'Implementar'."]},{img:ST,descripcion:"Autorice los permisos de seguridad de Google:",puntos:["Haga clic en 'Autorizar acceso'.","Seleccione su cuenta de Google.","Haga clic en 'Advanced' y luego en 'Go to AppDeclaracion (unsafe)'.","Permita todos los accesos y copie la URL generada (URL de la aplicación web) en un archivo de texto para utilizarla posteriormente en el worker."]},{img:NT,descripcion:"Ejecute la configuración inicial de la base de datos:",puntos:["En la barra de herramientas superior, seleccione la función 'inicializarSistema'.","Haga clic en el botón 'Ejecutar'.","Espere a que el registro de ejecución finalice correctamente.","En el logo de Apps Script Superior Izquierdo de colores hacer click para regresar al administrador de proyectos"]},{img:ET,descripcion:"Active el acceso programático final:",puntos:["En el panel izquierdo hacer click en el icono de engranaje de configuración.","Hacer click en 'API de Google Apps Script' el cual se debe encontrar desactivado","Hacer click en la parte derecha en el botón Switch o deslizante","Finalizado este paso y copiada la URL ya podemos cerrar Apps Script y pasar a la pestaña del Worker"]}];return i.jsxs("div",{className:"crear-backend",children:[i.jsx("h1",{children:"Crear Backend en Apps Script"}),i.jsx("div",{className:"video-container",children:i.jsx("iframe",{src:"https://www.youtube.com/embed/TU_VIDEO_AQUI",title:"Tutorial Backend Apps Script",allowFullScreen:!0})}),i.jsx("div",{className:"boton-container",children:i.jsx("button",{onClick:o,children:"Abrir Apps Script"})}),i.jsx("div",{className:"pasos-container",children:l.map((u,d)=>i.jsxs("div",{className:"paso",children:[i.jsx("img",{src:u.img,alt:`Paso ${d+1}`}),i.jsxs("div",{className:"paso-contenido",children:[i.jsxs("strong",{children:["Paso ",d+1,":"]}),i.jsx("p",{children:u.descripcion}),u.puntos&&i.jsx("ul",{children:u.puntos.map((p,g)=>i.jsx("li",{children:p},g))})]}),d===2&&i.jsx("div",{className:"boton-container",children:i.jsx("button",{onClick:()=>a(!0),children:"Ver código del Backend"})})]},d))}),i.jsx(d0,{isOpen:n,onClose:()=>a(!1),titulo:"Código Backend Apps Script",codigo:gT})]})},AT=`export default {
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
`,OT="/appdeclaracion/assets/imgWorker1-BbRj9dV6.jpg",kT="/appdeclaracion/assets/imgWorker2-B1O4zeoz.jpg",TT="/appdeclaracion/assets/imgWorker3-DjEJpYX-.jpg",RT="/appdeclaracion/assets/imgWorker4-DduT_u6i.jpg",DT="/appdeclaracion/assets/imgWorker5-Cl7Sh9J-.jpg",LT="/appdeclaracion/assets/imgWorker6-BA4bYmy9.jpg",MT="/appdeclaracion/assets/imgWorker7-XiHcWVpt.jpg",BT=()=>{const[n,a]=m.useState(!1),o=()=>{window.open("https://dash.cloudflare.com/","_blank")},l=[{img:OT,descripcion:'Ingrese a la consola de Cloudflare escribiendo en el navegador https://dash.cloudflare.com/login o haciendo clic en el botón "Abrir Cloudflare". Luego:',puntos:["Haga clic en 'Continue with Google'","Seleccione su cuenta de Google","Haga clic en 'Continuar' para ingresar al panel."]},{img:kT,descripcion:"Dentro del panel de Cloudflare ubique el menú lateral izquierdo:",puntos:["Busque la sección 'Compute'","Haga clic en 'Workers & Pages'","Luego haga clic en el botón 'Create application'"]},{img:TT,descripcion:"En la pantalla de creación de la aplicación ubique la opción 'Start with hello world!' y haga clic en ella.",puntos:["Esto generará un Worker base que posteriormente será modificado con el código de AppDeclaracion el cual puede ver y copiar en el siguiente botón."]},{img:RT,descripcion:"En el campo 'Worker name' elimine el contenido existente y escriba:",puntos:["appdeclaracion","Luego haga clic en el botón 'Deploy' para crear el Worker."]},{img:DT,descripcion:"Una vez creado el Worker aparecerá una pantalla de confirmación.",puntos:["En esta pantalla haga clic en el botón 'Edit code' para abrir el editor del Worker."]},{img:LT,descripcion:"Dentro del editor ubique el archivo worker.js, elimine el código existente y pegue el proporcionado por AppDeclaracion. Luego, busque la línea 'const destino' y:",puntos:["Reemplace la URL entre comillas por la generada en Apps Script.","Asegúrese que inicie con https:// y termine en /exec.","Copie la URL pública del Worker que aparece en la parte superior derecha (esta es la que compartirá con los usuarios).","Haga clic en 'Deploy' y luego en el enlace 'appdeclaracion' para regresar."]},{img:MT,descripcion:"Al regresar al panel principal diríjase nuevamente a 'Workers & Pages':",puntos:["Verifique que aparezca el Worker llamado 'appdeclaracion'.","Esto confirma que el Worker fue creado y desplegado correctamente.","Finalizado este paso y copiada la URL que debe registrarse en la sección 'Configuración de Backends'. Es la misma dirección que deberá proporcionarle a su contador. Una vez que él le informe su correo electrónico, usted podrá registrarlo como nuevo usuario con los roles y permisos adecuados. Recuerde que tanto usted como el contador deben agregar esta URL del Worker en sus respectivos paneles de AppDeclaración para que el sistema funcione correctamente."]}];return i.jsxs("div",{className:"crear-backend",children:[i.jsx("h1",{children:"Crear worker"}),i.jsx("div",{className:"video-container",children:i.jsx("iframe",{src:"https://www.youtube.com/embed/TU_VIDEO_AQUI",title:"Tutorial Backend Workwe CloudFlare",allowFullScreen:!0})}),i.jsx("div",{className:"boton-container",children:i.jsx("button",{onClick:o,children:"Abrir CloudFlare"})}),i.jsx("div",{className:"pasos-container",children:l.map((u,d)=>i.jsxs("div",{className:"paso",children:[i.jsx("img",{src:u.img,alt:`Paso ${d+1}`}),i.jsxs("div",{className:"paso-contenido",children:[i.jsxs("strong",{children:["Paso ",d+1,":"]}),i.jsx("p",{children:u.descripcion}),u.puntos&&i.jsx("ul",{children:u.puntos.map((p,g)=>i.jsx("li",{children:p},g))})]}),d===2&&i.jsx("div",{className:"boton-container",children:i.jsx("button",{onClick:()=>a(!0),children:"Ver código del Worker"})})]},d))}),i.jsx(d0,{isOpen:n,onClose:()=>a(!1),titulo:"Código Cloudflare Worker",codigo:AT})]})},zT=()=>{const[n,a]=m.useState("appsScript");return i.jsxs(Bo,{fluid:!0,className:"p-3",children:[i.jsx(br,{children:i.jsx(jn,{children:i.jsx("h3",{className:"mb-4 text-center fw-bold",children:"⚙️ Configuración Backend"})})}),i.jsx(br,{children:i.jsxs(jn,{children:[i.jsxs(pm,{activeKey:n,onSelect:o=>a(o),id:"admin-tabs",className:"mb-3",justify:!0,children:[i.jsx(yo,{eventKey:"appsScript",title:"🧱 Apps Script"}),i.jsx(yo,{eventKey:"worker",title:"🏰 Worker"})]}),n==="appsScript"&&i.jsx(CT,{}),n==="worker"&&i.jsx(BT,{})]})})]})};function ai(){return i.jsx("div",{className:"p-4 text-danger fw-bold",children:"❌ No tienes permiso para realizar esta acción."})}const Mb=({isMobile:n})=>n?i.jsxs("div",{className:"usuario-card skeleton-card-usuario",children:[i.jsxs("div",{className:"card-header d-flex align-items-center",children:[i.jsx("div",{className:"skeleton-bar",style:{width:"50%"}}),i.jsx("div",{className:"skeleton-badge ms-2"})]}),i.jsxs("div",{className:"card-body",children:[i.jsx("div",{className:"skeleton-bar mb-2",style:{width:"30%"}}),i.jsx("div",{className:"skeleton-bar mb-3",style:{width:"80%"}}),i.jsx("div",{className:"skeleton-switch mb-3"}),i.jsxs("div",{className:"d-flex gap-2",children:[i.jsx("div",{className:"skeleton-button-lg"}),i.jsx("div",{className:"skeleton-button-lg"})]})]})]}):i.jsxs("tr",{className:"usuario-skeleton-row",children:[i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"85%"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-badge"})}),i.jsx("td",{className:"text-center",children:i.jsx("div",{className:"skeleton-switch"})}),i.jsx("td",{className:"text-center",children:i.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[i.jsx("div",{className:"skeleton-button"}),i.jsx("div",{className:"skeleton-button"})]})})]}),_T=()=>{const{usuarios:n,rolesDisponibles:a,rolesErrorPermisos:o,getDatos:l,addDato:u,updateDato:d,toggleActivo:p,deleteDato:g,loading:h}=zk(),{errors:v,validateField:b,validateForm:x,clearErrors:w,clearError:S}=Jo(),{user:N}=Ac(),[R,E]=m.useState(!1),[O,C]=m.useState(null),[T,_]=m.useState({correo:"",nombreUsuario:"",rol:""}),[M,L]=m.useState(null),[I,z]=m.useState(!1),{puede:Y}=ma(),W=Y("getUsuarios");m.useEffect(()=>{W&&l()},[l,W]);const oe=async()=>{if(w(),!x({correo:T.correo,nombreUsuario:T.nombreUsuario,rol:T.rol}))return;const ie={correo:T.correo.toLowerCase(),nombre:Jt(T.nombreUsuario),rol:T.rol};O?await d(O.correo,ie):await u(ie),E(!1),C(null),_({correo:"",nombreUsuario:"",rol:""})},ne=J=>{C(J),_({correo:J.correo,nombreUsuario:J.nombre,rol:J.rol}),E(!0)},le=async J=>{await p(J.correo,!J.activo,J.nombre)};return W?i.jsxs("div",{className:"usuarios-admin p-3",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsx("h4",{className:"fw-bold mb-0",children:"👥 Administración de Usuarios"}),i.jsx(Oe,{onClick:()=>E(!0),variant:"primary",size:"sm",disabled:h,children:"➕ Crear Usuario"})]}),!h&&n.length===0?i.jsx("div",{className:"text-center text-muted py-4",children:"No hay usuarios registrados."}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"table-responsive shadow-sm rounded d-none d-md-block",children:i.jsxs(mi,{hover:!0,className:"align-middle mb-0",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"Correo"}),i.jsx("th",{children:"Nombre"}),i.jsx("th",{children:"Rol"}),i.jsx("th",{className:"text-center",children:"Estado"}),i.jsx("th",{className:"text-center",children:"Acciones"})]})}),i.jsx("tbody",{children:h?Array.from({length:5}).map((J,ie)=>i.jsx(Mb,{isMobile:!1},`skel-table-${ie}`)):n.map((J,ie)=>i.jsxs("tr",{children:[i.jsx("td",{children:J.correo}),i.jsx("td",{children:J.nombre}),i.jsx("td",{children:i.jsx(vo,{bg:J.rol==="administrador"?"warning":J.rol==="contador"?"info":"secondary",text:J.rol==="administrador"?"dark":"white",className:"px-2 py-1 text-capitalize",children:J.rol})}),i.jsx("td",{className:"text-center",children:i.jsx(ae.Check,{type:"switch",checked:J.activo,onChange:()=>le(J),label:i.jsx("span",{className:J.activo?"text-success":"text-danger",children:J.activo?"Activo":"Inactivo"})})}),i.jsx("td",{className:"text-center","data-label":"Acciones",children:i.jsx("div",{className:"ico-edit-elim",children:N?.correo===J.correo?i.jsx(vo,{bg:"light",text:"dark",className:"border shadow-sm",children:"Tu sesión"}):J.nombre.toLowerCase()==="administrador"?i.jsxs(vo,{bg:"dark",text:"white",className:"shadow-sm",children:[i.jsx("i",{className:"bi bi-shield-lock-fill me-1"})," Restringido"]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>ne(J)}),i.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{L(J),z(!0)}})]})})})]},ie))})]})}),i.jsx("div",{className:"usuarios-cards d-md-none",children:h?Array.from({length:4}).map((J,ie)=>i.jsx(Mb,{isMobile:!0},`skel-card-${ie}`)):n.map((J,ie)=>i.jsxs("div",{className:"usuario-card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("strong",{children:J.nombre}),i.jsx(vo,{bg:J.rol==="administrador"?"warning":"info",text:J.rol==="administrador"?"dark":"white",className:"ms-2",children:J.rol})]}),i.jsxs("div",{className:"card-body",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Correo:"}),i.jsx("br",{})," ",J.correo]}),i.jsx(ae.Check,{type:"switch",id:`switch-mobile-${J.correo}`,checked:J.activo,onChange:()=>le(J),label:J.activo?"Activo":"Inactivo"}),i.jsxs("div",{className:"d-flex gap-2 mt-3",children:[i.jsx("span",{className:"label-edit-elim-span",children:"Acciones:"}),i.jsx("div",{className:"ico-edit-elim",children:N?.correo===J.correo?i.jsx("span",{className:"text-muted small fw-bold",children:"Sesión activa"}):J.nombre.toLowerCase()==="administrador"?i.jsxs("span",{className:"text-danger small fw-bold span-i-restri",children:[i.jsx("i",{className:"bi bi-shield-lock-fill me-1"})," Restringido"]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>ne(J)}),i.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{L(J),z(!0)}})]})})]})]})]},ie))})]}),i.jsxs(ye,{show:R,centered:!0,onHide:()=>E(!1),children:[i.jsx(ye.Header,{closeButton:!0,children:i.jsx(ye.Title,{children:O?"Editar Usuario":"Nuevo Usuario"})}),i.jsxs(ye.Body,{children:[i.jsx(qo,{errors:v}),i.jsxs(ae,{children:[i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{children:"Correo"}),i.jsx(ae.Control,{type:"email",value:T.correo,onChange:J=>{const ie=J.target.value.toLowerCase();_({...T,correo:ie}),S("correo")},onBlur:J=>b("correo",J.target.value),disabled:O})]}),i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{children:"Nombre completo"}),i.jsx(ae.Control,{type:"text",value:T.nombreUsuario,onChange:J=>{_({...T,nombreUsuario:J.target.value}),S("nombreUsuario")},onBlur:J=>b("nombreUsuario",J.target.value)})]}),i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{children:"Rol"}),o?i.jsx("div",{className:"alert alert-warning py-2 small",children:"⚠️ No tienes permiso para ver roles."}):i.jsxs(ae.Select,{value:T.rol,onChange:J=>{_({...T,rol:J.target.value}),S("rol")},onBlur:J=>b("rol",J.target.value),children:[i.jsx("option",{value:"",children:"Seleccionar rol..."}),a.map((J,ie)=>i.jsx("option",{value:J.rol,children:J.rol},ie))]})]})]})]}),i.jsxs(ye.Footer,{children:[i.jsx(Oe,{variant:"secondary",onClick:()=>E(!1),children:"Cancelar"}),i.jsx(Oe,{variant:"success",onClick:oe,disabled:h,children:h?i.jsxs(i.Fragment,{children:[i.jsx(St,{size:"sm",animation:"border"})," Guardando..."]}):"💾 Guardar"})]}),i.jsx(Go,{show:h})]}),i.jsx(pa,{show:I,onHide:()=>z(!1),title:"Eliminar Usuario",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar al usuario ",i.jsx("strong",{children:M?.correo}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>g(M?.correo)})]}):i.jsx(ai,{})},UT=()=>i.jsxs("tr",{className:"rol-skeleton-row",children:[i.jsx("td",{"data-label":"Rol",children:i.jsx("div",{className:"d-flex align-items-center",children:i.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})})}),i.jsx("td",{"data-label":"Permisos",children:i.jsxs("div",{className:"d-flex flex-column gap-2",children:[i.jsx("div",{className:"skeleton-bar",style:{width:"90%"}}),i.jsx("div",{className:"skeleton-bar",style:{width:"70%"}})]})}),i.jsx("td",{className:"td-acciones text-center","data-label":"Acciones",children:i.jsxs("div",{className:"d-flex justify-content-center gap-2",children:[i.jsx("div",{className:"skeleton-btn-rect"}),i.jsx("div",{className:"skeleton-btn-rect"})]})})]}),IT=()=>{const{roles:n,funcionesDisponibles:a,getDatos:o,addDato:l,updateDato:u,deleteDato:d,loading:p}=Pk(),{errors:g,validateField:h,validateForm:v,clearErrors:b,clearError:x}=Jo(),[w,S]=m.useState(!1),[N,R]=m.useState(""),[E,O]=m.useState([]),[C,T]=m.useState(null),[_,M]=m.useState(null),[L,I]=m.useState(!1),{puede:z}=ma(),Y=z("getRoles");m.useEffect(()=>{Y&&o()},[o,Y]);const W=async()=>{b();const J={rolPermisos:E};if(C||(J.rolNombre=N),!v(J))return;const $=Jt(N);C?await u(C.rol,E):await l($,E),S(!1),R(""),O([]),T(null)},oe=J=>{T(J),R(J.rol),O((J.permisos||[]).map(ie=>ie.trim())),S(!0)},ne=J=>{const ie=E.includes(J)?E.filter($=>$!==J):[...E,J];O(ie),h("rolPermisos",ie)},le=()=>{const J=E.length===a.length?[]:a;O(J),h("rolPermisos",J)};return Y?i.jsxs("div",{className:"roles-admin-container p-3",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[i.jsx("h4",{className:"fw-bold mb-0",children:"Administración de Roles"}),i.jsx(Oe,{onClick:()=>{T(null),R(""),O([]),S(!0)},variant:"primary",disabled:p,children:"➕ Nuevo Rol"})]}),i.jsx("div",{className:"table-responsive shadow-sm rounded",children:i.jsxs(mi,{striped:!0,bordered:!0,hover:!0,className:"align-middle mb-0",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"Rol"}),i.jsx("th",{children:"Permisos"}),i.jsx("th",{className:"text-center",children:"Acciones"})]})}),i.jsx("tbody",{children:p?Array.from({length:5}).map((J,ie)=>i.jsx(UT,{},`rol-skel-${ie}`)):n.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:"3",className:"text-center py-4 text-muted",children:"No hay roles definidos."})}):n.map((J,ie)=>i.jsxs("tr",{children:[i.jsxs("td",{"data-label":"Rol",children:[i.jsx("strong",{children:J.rol}),J.rol==="administrador"&&i.jsx(vo,{bg:"warning",text:"dark",className:"ms-2",children:"Protegido"})]}),i.jsx("td",{"data-label":"Permisos",children:i.jsx("div",{className:"text-muted small text-break",children:J.permisos?.includes("*")?"Todos los permisos":J.permisos?.join(", ")||"—"})}),i.jsx("td",{className:"td-acciones text-center","data-label":"Acciones",children:i.jsxs("div",{className:"ico-edit-elim",children:[i.jsx("i",{className:"bi bi-pencil-square accion-icon",title:"Editar",onClick:()=>oe(J)}),J.rol!=="administrador"&&i.jsx("i",{className:"bi bi-x-circle accion-icon text-danger",title:"Eliminar",onClick:()=>{M(J.rol),I(!0)}})]})})]},ie))})]})}),i.jsxs(ye,{show:w,onHide:()=>S(!1),size:"lg",centered:!0,children:[i.jsx(ye.Header,{closeButton:!0,children:i.jsx(ye.Title,{children:C?`Editar Permisos: ${C.rol}`:"Crear Nuevo Rol"})}),i.jsxs(ye.Body,{children:[i.jsx(qo,{errors:g}),!C&&i.jsxs(ae.Group,{className:"mb-3",children:[i.jsx(ae.Label,{className:"fw-bold",children:"Nombre del Rol"}),i.jsx(ae.Control,{type:"text",value:N,onChange:J=>{R(J.target.value),x("rolNombre")},onBlur:J=>h("rolNombre",J.target.value),placeholder:"Ejemplo: Contador, Revisor, Supervisor..."})]}),i.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-2",children:[i.jsxs(ae.Label,{className:"fw-bold mb-0",children:["Permisos del Rol (",E.length,")"]}),i.jsx(Oe,{size:"sm",variant:"outline-primary",onClick:le,children:E.length===a.length?"Deseleccionar todos":"Seleccionar todos"})]}),i.jsx("div",{className:"p-3 bg-light border rounded",style:{maxHeight:"350px",overflowY:"auto"},children:i.jsx("div",{className:"row",children:a.map(J=>i.jsx("div",{className:"col-md-6 col-lg-4 mb-2",children:i.jsx(ae.Check,{type:"checkbox",id:`perm-${J}`,label:i.jsx("span",{className:"small",children:J}),checked:E.includes(J),onChange:()=>ne(J)})},J))})})]}),i.jsxs(ye.Footer,{children:[i.jsx(Oe,{variant:"secondary",onClick:()=>S(!1),children:"Cancelar"}),i.jsx(Oe,{variant:"success",onClick:W,disabled:p,children:p?i.jsxs(i.Fragment,{children:[i.jsx(St,{size:"sm",animation:"border",className:"me-2"}),"Guardando..."]}):"💾 Guardar"})]}),i.jsx(Go,{show:p})]}),i.jsx(pa,{show:L,onHide:()=>I(!1),title:"Eliminar Rol",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar el rol ",i.jsx("strong",{children:_}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:()=>d(_)})]}):i.jsx(ai,{})},Bb=({isTable:n=!1})=>n?i.jsxs("tr",{className:"log-skeleton-row",children:[i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"140px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"100px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar",style:{width:"120px"}})}),i.jsx("td",{children:i.jsx("div",{className:"skeleton-bar-rect"})})]}):i.jsxs("div",{className:"log-skeleton-card",children:[i.jsxs("div",{className:"log-header-skeleton",children:[i.jsx("div",{className:"skeleton-bar",style:{width:"40%"}}),i.jsx("div",{className:"skeleton-bar",style:{width:"30%"}})]}),i.jsxs("div",{className:"log-body-skeleton",children:[i.jsx("div",{className:"skeleton-bar mb-3",style:{width:"60%"}}),i.jsx("div",{className:"skeleton-bar-rect"})]})]});function PT(){const{puede:n}=ma(),a=n("getLogs"),{logs:o,getDatos:l,clearDatos:u,loading:d}=Mk(),[p,g]=m.useState(!1);return m.useEffect(()=>{a&&l()},[l,a]),a?i.jsxs("div",{className:"p-4",children:[i.jsx("h2",{className:"mb-4",children:"📜 Administración de Logs"}),i.jsx("div",{className:"d-flex justify-content-end mb-3",children:i.jsx(Oe,{variant:"danger",onClick:()=>g(!0),disabled:d,children:"🧹 Limpiar Logs Antiguos"})}),i.jsxs(mi,{striped:!0,bordered:!0,hover:!0,size:"sm",responsive:!0,className:"logs-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Fecha"}),i.jsx("th",{children:"Acción"}),i.jsx("th",{children:"Usuario"}),i.jsx("th",{children:"Detalle"})]})}),i.jsx("tbody",{children:d?Array.from({length:8}).map((h,v)=>i.jsx(Bb,{isTable:!0},`table-skel-${v}`)):o.length>0?o.map((h,v)=>i.jsxs("tr",{children:[i.jsx("td",{children:h.fecha}),i.jsx("td",{children:h.accion}),i.jsx("td",{children:h.usuario}),i.jsx("td",{children:i.jsx("pre",{className:"bg-light p-2 rounded small mb-0",children:JSON.stringify(h.detalle,null,2)})})]},v)):i.jsx("tr",{children:i.jsx("td",{colSpan:4,className:"text-center text-muted",children:"No hay logs disponibles"})})})]}),i.jsx("div",{className:"logs-cards",children:d?Array.from({length:4}).map((h,v)=>i.jsx(Bb,{isTable:!1},`card-skel-${v}`)):o.length>0?o.map((h,v)=>i.jsxs("div",{className:"log-card",children:[i.jsxs("div",{className:"log-header",children:[i.jsx("h6",{children:h.accion}),i.jsx("span",{children:h.fecha})]}),i.jsxs("div",{className:"log-body",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Usuario:"})," ",h.usuario]}),i.jsx("pre",{children:JSON.stringify(h.detalle,null,2)})]})]},v)):i.jsx("p",{className:"text-center text-muted",children:"No hay logs disponibles"})}),i.jsx(pa,{show:p,onHide:()=>g(!1),title:"🧹 Limpiar Logs Antiguos",message:i.jsxs(i.Fragment,{children:["Esta acción eliminará todos los logs antiguos y conservará solo los"," ",i.jsx("strong",{children:"10 más recientes"}),".",i.jsx("p",{className:"text-danger fw-semibold mt-2",children:"⚠️ Esta operación no se puede deshacer."})]}),confirmLabel:"Limpiar Logs",confirmVariant:"danger",onConfirm:u})]}):i.jsx(ai,{})}const $T=()=>i.jsxs("div",{className:"config-skeleton-container",children:[i.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[i.jsx("div",{className:"skeleton-title mb-3",style:{width:"200px"}}),i.jsxs("div",{className:"row gy-3",children:[i.jsxs("div",{className:"col-12 col-md-5",children:[i.jsx("div",{className:"skeleton-label mb-2"}),i.jsx("div",{className:"skeleton-input mb-3"}),i.jsx("div",{className:"skeleton-btn",style:{width:"180px"}})]}),i.jsxs("div",{className:"col-12 col-md-5",children:[i.jsx("div",{className:"skeleton-label mb-2"}),i.jsx("div",{className:"skeleton-input mb-3"}),i.jsx("div",{className:"skeleton-label mb-2"}),i.jsx("div",{className:"skeleton-input mb-1"}),i.jsx("div",{className:"skeleton-text",style:{width:"120px"}})]}),i.jsx("div",{className:"col-12 col-md-2",children:i.jsx("div",{className:"skeleton-btn h-100",style:{minHeight:"38px"}})})]})]}),i.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[i.jsxs("div",{className:"d-flex justify-content-between mb-3",children:[i.jsx("div",{className:"skeleton-title",style:{width:"250px"}}),i.jsx("div",{className:"skeleton-input",style:{width:"200px"}})]}),i.jsx("div",{className:"skeleton-table",children:[1,2,3,4].map(n=>i.jsxs("div",{className:"skeleton-table-row d-flex justify-content-between p-2 border-bottom",children:[i.jsx("div",{className:"skeleton-bar",style:{width:"40px"}}),i.jsx("div",{className:"skeleton-btn",style:{width:"80px",height:"25px"}})]},n))}),i.jsx("div",{className:"text-end mt-3",children:i.jsx("div",{className:"skeleton-btn d-inline-block",style:{width:"150px"}})})]})]}),HT=()=>{const{config:n,getConfig:a,versionBackend:o,updateConfig:l,generarBackup:u,reinicializarSistemaForzado:d,loading:p}=Uk(),[g,h]=m.useState(""),[v,b]=m.useState(""),[x,w]=m.useState([]),[S,N]=m.useState(""),[R,E]=m.useState(!1),[O,C]=m.useState(""),[T,_]=m.useState(!1),[M]=m.useState("v142026128"),{puede:L}=ma(),I=L("getConfig"),[z,Y]=m.useState(!1),[W,oe]=m.useState(!1),[ne,le]=m.useState(!1);m.useEffect(()=>{I&&a()},[a,I]),m.useEffect(()=>{n&&!ne&&(h(n.TAMANO_MAX_MB||10),b(n.TOKEN_EXP_MINUTOS||60),w(n.TIPOS_PERMITIDOS||[]))},[n,ne]);const J=()=>{const A=S.trim().toLowerCase();if(A){if(x.includes(A))return alert("⚠️ Esa extensión ya está permitida.");w([...x,A]),N("")}},ie=A=>{C(A),E(!0)},$=()=>{w(x.filter(A=>A!==O)),E(!1),C("")},ee=A=>{const V=A.target.value;V>45?h(45):h(V)},D=async()=>{le(!0);try{await l({CARPETA_PRINCIPAL:n.CARPETA_PRINCIPAL,TAMANO_MAX_MB:Number(g),TOKEN_EXP_MINUTOS:Number(v),TIPOS_PERMITIDOS:x})}finally{le(!1)}},re=async()=>{Y(!0);try{await u()}finally{Y(!1)}};return I?i.jsxs("div",{className:"config-admin-page container py-3",children:[i.jsx("h3",{className:"fw-bold mb-4 text-primary",children:"⚙️ Administración de Configuración"}),!I&&i.jsx(ai,{}),p&&!n?i.jsx($T,{}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[i.jsx("h5",{className:"fw-bold mb-3",children:"🔧 Configuración General"}),i.jsxs(br,{className:"gy-3",children:[i.jsxs(jn,{xs:12,md:5,children:[i.jsxs(ae.Group,{children:[i.jsx(ae.Label,{className:"fw-semibold",children:"📁 Carpeta Principal"}),i.jsx(ae.Control,{type:"text",value:n.CARPETA_PRINCIPAL||"",readOnly:!0,plaintext:!0}),i.jsxs(ae.Text,{muted:!0,children:[i.jsxs("p",{children:["Versión Backend: ",i.jsx("span",{className:"version-backend",children:`${o}`})]}),i.jsxs("p",{children:["Versión FrontEnd: ",i.jsx("span",{className:"version-frontEnd",children:M})]})]})]}),i.jsx(Oe,{variant:"danger",className:"btn-CAP-inicializarproyecto",onClick:()=>_(!0),disabled:W,children:W?i.jsxs(i.Fragment,{children:[i.jsx(St,{as:"span",animation:"border",size:"sm"})," Procesando..."]}):"⚠️ Reinicializar Proyecto"})]}),i.jsxs(jn,{xs:12,md:5,children:[i.jsxs(ae.Group,{children:[i.jsx(ae.Label,{className:"fw-semibold",children:"📦 Tamaño máximo permitido 45 (MB)"}),i.jsx(ae.Control,{type:"number",min:1,max:45,value:g,onChange:ee})]}),i.jsxs(ae.Group,{children:[i.jsx(ae.Label,{className:"fw-semibold",children:"🔑 Expiración Token (Min)"}),i.jsx(ae.Control,{type:"number",min:1,value:v,onChange:A=>b(A.target.value)}),i.jsx(ae.Text,{muted:!0,children:"Duración de la sesión activa."})]})]}),i.jsx(jn,{xs:12,md:2,className:"d-grid",children:i.jsx(Oe,{variant:"primary",onClick:re,disabled:z,children:z?i.jsxs(i.Fragment,{children:[i.jsx(St,{as:"span",animation:"border",size:"sm"})," Generando..."]}):"🗄️ Generar Backup"})})]})]}),i.jsxs("div",{className:"card shadow-sm p-3 mb-4",children:[i.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap mb-3",children:[i.jsx("h5",{className:"fw-bold mb-2 mb-md-0",children:"🧩 Tipos de archivo permitidos"}),i.jsxs(HC,{style:{maxWidth:260},children:[i.jsx(ae.Control,{type:"text",placeholder:"Ej: pdf",value:S,onChange:A=>N(A.target.value)}),i.jsx(Oe,{onClick:J,children:"➕"})]})]}),i.jsxs(mi,{bordered:!0,hover:!0,responsive:!0,className:"small shadow-inner-sm",children:[i.jsx("thead",{className:"table-light",children:i.jsxs("tr",{children:[i.jsx("th",{children:"Extensión"}),i.jsx("th",{className:"text-center",children:"Acciones"})]})}),i.jsxs("tbody",{children:[x.map((A,V)=>i.jsxs("tr",{children:[i.jsx("td",{className:"fw-semibold",children:A}),i.jsx("td",{className:"text-center",children:i.jsx(Oe,{size:"sm",variant:"outline-danger",onClick:()=>ie(A),children:"🗑️ Eliminar"})})]},V)),x.length===0&&i.jsx("tr",{children:i.jsx("td",{colSpan:2,className:"text-center text-muted py-3",children:"No hay extensiones configuradas."})})]})]}),i.jsx("div",{className:"text-end mt-3",children:i.jsx(Oe,{variant:"success",className:"btn-CAP-guardar",onClick:D,disabled:ne,children:ne?i.jsxs(i.Fragment,{children:[i.jsx(St,{as:"span",animation:"border",size:"sm"})," Guardando..."]}):i.jsxs("div",{className:"btn-CAP-guardar-iconText",children:[i.jsx("span",{className:"icon-disk"}),i.jsx("span",{children:"Guardar Cambios"})]})})})]})]}),i.jsx(pa,{show:R,onHide:()=>E(!1),title:"Eliminar tipo de archivo",message:i.jsxs(i.Fragment,{children:["¿Seguro que deseas eliminar ",i.jsx("strong",{children:O}),"?"]}),confirmLabel:"Eliminar",confirmVariant:"danger",onConfirm:$}),i.jsx($k,{show:T,onHide:()=>_(!1),onConfirm:async(A,V)=>{if(A==="INICIALIZAR"){oe(!0);try{const K=await d(A,V);console.log("reinicialización del sistema",K.mensaje,K.ok)}finally{oe(!1),_(!1)}}},loading:p})]}):i.jsx(ai,{})};function GT(){const[n,a]=m.useState("usuarios");return i.jsx(l0,{children:i.jsxs(Bo,{fluid:!0,className:"p-3",children:[i.jsx(br,{children:i.jsx(jn,{children:i.jsx("h3",{className:"mb-4 text-center fw-bold",children:"⚙️ Panel de Administración"})})}),i.jsx(br,{children:i.jsxs(jn,{children:[i.jsxs(pm,{activeKey:n,onSelect:o=>a(o),id:"admin-tabs",className:"mb-3",justify:!0,children:[i.jsx(yo,{eventKey:"usuarios",title:"👥 Usuarios"}),i.jsx(yo,{eventKey:"roles",title:"🧩 Roles"}),i.jsx(yo,{eventKey:"config",title:"⚙️ Configuración"}),i.jsx(yo,{eventKey:"logs",title:"📜 Logs"})]}),n==="usuarios"&&i.jsx(_T,{}),n==="roles"&&i.jsx(IT,{}),n==="config"&&i.jsx(HT,{}),n==="logs"&&i.jsx(PT,{})]})})]})})}function qT(){const[n,a]=m.useState(!1);return m.useEffect(()=>{const o=()=>a(!0);return window.addEventListener("backend:open-config",o),()=>{window.removeEventListener("backend:open-config",o)}},[]),i.jsxs(i.Fragment,{children:[i.jsx(Yk,{onOpenBackend:()=>a(!0)}),i.jsx(Xk,{show:n,onHide:()=>a(!1)}),i.jsx(Bo,{className:"mt-4",children:i.jsxs(AN,{children:[i.jsx(dn,{path:"/",element:i.jsx(Qk,{})}),i.jsx(dn,{path:"/productos",element:i.jsx(aT,{})}),i.jsx(dn,{path:"/datos-tributarios",element:i.jsx(oT,{})}),i.jsx(dn,{path:"/contador",element:i.jsx(iT,{})}),i.jsx(dn,{path:"/facturas",element:i.jsx(uT,{})}),i.jsx(dn,{path:"/admin",element:i.jsx(GT,{})}),i.jsx(dn,{path:"/privacidad",element:i.jsx(dT,{})}),i.jsx(dn,{path:"/terminos",element:i.jsx(fT,{})}),i.jsx(dn,{path:"/acerca-de",element:i.jsx(mT,{})}),i.jsx(dn,{path:"/donaciones",element:i.jsx(hT,{})}),i.jsx(dn,{path:"/backend-setup",element:i.jsx(zT,{})})]})}),i.jsx(Kk,{}),i.jsx(Zk,{})]})}const JT="modulepreload",FT=function(n){return"/appdeclaracion/"+n},zb={},VT=function(a,o,l){let u=Promise.resolve();if(o&&o.length>0){let v=function(b){return Promise.all(b.map(x=>Promise.resolve(x).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};var p=v;document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),h=g?.nonce||g?.getAttribute("nonce");u=v(o.map(b=>{if(b=FT(b),b in zb)return;zb[b]=!0;const x=b.endsWith(".css"),w=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${b}"]${w}`))return;const S=document.createElement("link");if(S.rel=x?"stylesheet":JT,x||(S.as="script"),S.crossOrigin="",S.href=b,h&&S.setAttribute("nonce",h),document.head.appendChild(S),x)return new Promise((N,R)=>{S.addEventListener("load",N),S.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${b}`)))})}))}function d(g){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=g,window.dispatchEvent(h),!h.defaultPrevented)throw g}return u.then(g=>{for(const h of g||[])h.status==="rejected"&&d(h.reason);return a().catch(d)})};function YT(n={}){const{immediate:a=!1,onNeedRefresh:o,onOfflineReady:l,onRegistered:u,onRegisteredSW:d,onRegisterError:p}=n;let g,h;const v=async(x=!0)=>{await h};async function b(){if("serviceWorker"in navigator){if(g=await VT(async()=>{const{Workbox:x}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:x}},[]).then(({Workbox:x})=>new x("/appdeclaracion/sw.js",{scope:"/appdeclaracion/",type:"classic"})).catch(x=>{p?.(x)}),!g)return;g.addEventListener("activated",x=>{(x.isUpdate||x.isExternal)&&window.location.reload()}),g.addEventListener("installed",x=>{x.isUpdate||l?.()}),g.register({immediate:a}).then(x=>{d?d("/appdeclaracion/sw.js",x):u?.(x)}).catch(x=>{p?.(x)})}}return h=b(),v}YT({immediate:!0});_S.createRoot(document.getElementById("root")).render(i.jsx(qe.StrictMode,{children:i.jsx(KN,{children:i.jsx(_A,{children:i.jsx(lE,{children:i.jsx(Ok,{children:i.jsx(Rk,{children:i.jsx(Tk,{children:i.jsx(Dk,{children:i.jsx(l0,{children:i.jsx(qT,{})})})})})})})})})}));
