"use strict";var l=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var v=l(function(E,d){
var y=require('@stdlib/blas-ext-base-gnone/dist').ndarray;function w(a,r,t,s,n,u){var i,e;if(a<=0||r<=0)return-1;for(i=u,e=0;e<a;e++){if(y(r,t,n,i))return e;i+=s}return-1}d.exports=w
});var q=l(function(V,m){
var x=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),c=require('@stdlib/blas-base-layout-resolve-str/dist'),R=require('@stdlib/math-base-special-fast-max/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist'),h=v();function p(a,r,t,s,n){var u,i,e,o;if(o=c(a),o===null)throw new TypeError(f('36fFx',a));if(x(o)?(e=t,u=n,i=1):(e=r,u=1,i=n),n<R(1,e))throw new RangeError(f('36fIR',e,n));return h(r,t,s,u,i,0)}m.exports=p
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=q(),O=v();F(g,"ndarray",O);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
