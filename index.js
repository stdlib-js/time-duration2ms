// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,l=r.__lookupGetter__,u=r.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,a){var c,s,f,d;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((s="value"in a)&&(l.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=a.value,e.__proto__=c):e[t]=a.value),f="get"in a,d="set"in a,s&&(f||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&o&&o.call(e,t,a.get),d&&i&&i.call(e,t,a.set),e};function c(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function s(e){return"string"==typeof e}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return f&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString,y=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",m=d()?function(e){var t,r,n,o,i;if(null==e)return p.call(e);r=e[b],i=b,t=null!=(o=e)&&y.call(o,i);try{e[b]=void 0}catch(t){return p.call(e)}return n=p.call(e),t?e[b]=r:delete e[b],n}:function(e){return p.call(e)},_=String.prototype.valueOf,g=d();function v(e){return"object"==typeof e&&(e instanceof String||(g?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object String]"===m(e)))}function h(e){return s(e)||v(e)}c(h,"isPrimitive",s),c(h,"isObject",v);var j=/^(?:\d+d)?(?:\d+h)?(?:\d+m)?(?:\d+s)?(?:\d+ms)?$/i,S=/(\d+)([a-z]+)/gi,w={d:"days",h:"hours",m:"minutes",s:"seconds",ms:"milliseconds"};return function(e){var t,r,n;if(!s(n=e)||!j.test(n))throw new TypeError(function(){var e,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}("invalid argument. Must provide a valid duration string. Value: `%s`.",e));return t=function(e){var t,r,n;if(r={days:0,hours:0,minutes:0,seconds:0,milliseconds:0},0===e.length)return r;for(e=function(e){return e.toLowerCase()}(e),t=S.exec(e);t;)(n=w[t[2]])&&(r[n]=parseInt(t[1],10)),t=S.exec(e);return r}(e),r=864e5*t.days,r+=36e5*t.hours,r+=6e4*t.minutes,r+=1e3*t.seconds,r+=t.milliseconds}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).duration2ms=t();
//# sourceMappingURL=index.js.map
