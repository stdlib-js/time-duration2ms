"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(c,a){
var n=require('@stdlib/assert-is-duration-string/dist'),s=require('@stdlib/time-base-parse-duration/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function d(e){var r,i;if(!n(e))throw new TypeError(o('1h9Dy',e));return r=s(e),i=r.days*864e5,i+=r.hours*36e5,i+=r.minutes*6e4,i+=r.seconds*1e3,i+=r.milliseconds,i}a.exports=d
});var v=t();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
