"use strict";var v=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=v(function(b,f){
var g=require('@stdlib/blas-ext-base-gnone/dist').ndarray;function y(a,r,t,s,n,u){var i,e;if(a<=0||r<=0)return-1;for(i=u,e=0;e<a;e++){if(g(r,t,n,i))return e;i+=s}return-1}f.exports=y
});var m=v(function(E,l){
var w=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),x=require('@stdlib/blas-base-assert-is-layout/dist'),c=require('@stdlib/math-base-special-fast-max/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),R=o();function h(a,r,t,s,n){var u,i,e;if(!x(a))throw new TypeError(d('nullFx',a));if(w(a)?(e=t,u=n,i=1):(e=r,u=1,i=n),n<c(1,e))throw new RangeError(d('nullIR',e,n));return R(r,t,s,u,i,0)}l.exports=h
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=m(),F=o();p(q,"ndarray",F);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
