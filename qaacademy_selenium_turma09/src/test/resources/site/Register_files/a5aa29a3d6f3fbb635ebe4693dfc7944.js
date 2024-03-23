(function(){'use strict';function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var fa=ea(this);function q(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
q("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+e++,g)}function c(g,f){this.g=g;da(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:ca(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}var ha="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ia;
function na(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}q("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});q("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
q("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});
q("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});q("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var t=this||self;function oa(a){a:{var b=["CLOSURE_FLAGS"];for(var c=t,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}a=b&&b[a];return null!=a?a:!1};var pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var qa=oa(610401301),ra=oa(188588736);var u,sa=t.navigator;u=sa?sa.userAgentData||null:null;function ta(a){return qa?u?u.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}function x(a){var b;a:{if(b=t.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function y(){return qa?!!u&&0<u.brands.length:!1}function ua(){return y()?ta("Chromium"):(x("Chrome")||x("CriOS"))&&!(y()?0:x("Edge"))||x("Silk")};var ya=y()?!1:x("Trident")||x("MSIE");function za(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b};function Aa(a){a=void 0===a?document:a;return a.createElement("img")};function Ba(a,b,c){var d=!1;d=void 0===d?!1:d;a.google_image_requests||(a.google_image_requests=[]);var e=Aa(a.document);if(c){var g=function(){if(c){var f=a.google_image_requests,h=pa(f,e);0<=h&&Array.prototype.splice.call(f,h,1)}e.removeEventListener&&e.removeEventListener("load",g,!1);e.removeEventListener&&e.removeEventListener("error",g,!1)};e.addEventListener&&e.addEventListener("load",g,!1);e.addEventListener&&e.addEventListener("error",g,!1)}d&&(e.attributionSrc="");e.src=b;a.google_image_requests.push(e)}
;function Ca(a){t.setTimeout(function(){throw a;},0)};!x("Android")||ua();ua();x("Safari")&&(ua()||(y()?0:x("Coast"))||(y()?0:x("Opera"))||(y()?0:x("Edge"))||(y()?ta("Microsoft Edge"):x("Edg/"))||y()&&ta("Opera"));var Da={},z=null;
function Ea(a){var b;void 0===b&&(b=0);if(!z){z={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var g=c.concat(d[e].split(""));Da[e]=g;for(var f=0;f<g.length;f++){var h=g[f];void 0===z[h]&&(z[h]=f)}}}b=Da[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=g=0;g<a.length-2;g+=3){var l=a[g],n=a[g+1];h=a[g+2];f=b[l>>2];l=b[(l&3)<<4|n>>4];n=b[(n&15)<<2|h>>6];h=b[h&63];c[e++]=f+l+n+h}f=0;h=d;switch(a.length-g){case 2:f=
a[g+1],h=b[(f&15)<<2]||d;case 1:a=a[g],c[e]=b[a>>2]+b[(a&3)<<4|f>>4]+h+d}return c.join("")};var Fa,Ga="function"===typeof String.prototype.B,Ha="undefined"!==typeof TextEncoder;var Ia="undefined"!==typeof Uint8Array,Ja=!ya&&"function"===typeof btoa;var Ka=0,La=0,Ma;function Na(){this.g=[]}Na.prototype.length=function(){return this.g.length};Na.prototype.end=function(){var a=this.g;this.g=[];return a};function A(a,b){for(;127<b;)a.g.push(b&127|128),b>>>=7;a.g.push(b)}function Oa(a,b){if(0<=b)A(a,b);else{for(var c=0;9>c;c++)a.g.push(b&127|128),b>>=7;a.g.push(1)}}function Pa(a,b){a.g.push(b>>>0&255);a.g.push(b>>>8&255);a.g.push(b>>>16&255);a.g.push(b>>>24&255)};function Qa(){this.j=[];this.i=0;this.g=new Na}function B(a,b){0!==b.length&&(a.j.push(b),a.i+=b.length)};function C(a,b){this.g=a;this.v=b};function D(a){return Array.prototype.slice.call(a)};function Ra(a){return"function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():a}var F=Ra(),Sa=Ra("2ex");var Ta=F?function(a,b){a[F]|=b}:function(a,b){void 0!==a.g?a.g|=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})},Ua=F?function(a,b){a[F]&=~b}:function(a,b){void 0!==a.g&&(a.g&=~b)};function G(a,b,c){return c?a|b:a&~b}
var H=F?function(a){return a[F]|0}:function(a){return a.g|0},I=F?function(a){return a[F]}:function(a){return a.g},J=F?function(a,b){a[F]=b;return a}:function(a,b){void 0!==a.g?a.g=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a};function Va(a,b){J(b,(a|0)&-14591)}function Wa(a,b){J(b,(a|34)&-14557)}function Xa(a){a=a>>14&1023;return 0===a?536870912:a};var K={},Ya={};function Za(a){return!(!a||"object"!==typeof a||a.g!==Ya)}function $a(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}function L(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=H(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;J(a,d|1);return!0}var ab,bb=[];J(bb,55);ab=Object.freeze(bb);function M(a){if(a&2)throw Error();}Object.freeze(new function(){});Object.freeze(new function(){});var cb;function db(a){a=Error(a);za(a,"warning");return a};function eb(a){if(!Number.isFinite(a))throw db("enum");return a|0}function fb(a){if("number"!==typeof a)throw db("int32");if(!Number.isFinite(a))throw db("int32");return a|0}function gb(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}function N(a){if(null!=a&&"string"!==typeof a)throw Error();return a};var O,hb,ib;function jb(a){switch(typeof a){case "boolean":return hb||(hb=[0,void 0,!0]);case "number":return 0<a?void 0:0===a?ib||(ib=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function Q(a,b,c){null==a&&(a=O);O=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=H(a);if(d&2048)throw Error();if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var g=e-1;if($a(c[g])){d|=256;b=g-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}J(a,d);return a};function lb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(L(a,void 0,0))return}else if(Ia&&null!=a&&a instanceof Uint8Array){if(Ja){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Ea(a);return a}}return a};function mb(a,b,c){a=D(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var g in e)b[g]=c(e[g])}return a}function nb(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=L(a,void 0,0)?void 0:e&&H(a)&2?a:ob(a,b,c,void 0!==d,e);else if($a(a)){var g={},f;for(f in a)g[f]=nb(a[f],b,c,d,e);a=g}else a=b(a,d);return a}}function ob(a,b,c,d,e){var g=d||c?H(a):0;d=d?!!(g&32):void 0;a=D(a);for(var f=0;f<a.length;f++)a[f]=nb(a[f],b,c,d,e);c&&c(g,a);return a}
function pb(a){return a.l===K?a.toJSON():lb(a)};function qb(a,b,c){c=void 0===c?Wa:c;if(null!=a){if(Ia&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=H(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?J(a,(d|34)&-12293):ob(a,qb,d&4?Wa:c,!0,!0)}a.l===K&&(c=a.h,d=I(c),a=d&2?a:rb(a,c,d,!0));return a}}function rb(a,b,c,d){a=a.constructor;O=b=sb(b,c,d);b=new a(b);O=void 0;return b}function sb(a,b,c){var d=c||b&2?Wa:Va,e=!!(b&32);a=mb(a,b,function(g){return qb(g,e,d)});Ta(a,32|(c?2:0));return a};function tb(a,b,c,d){b=d+(+!!(b&512)-1);if(!(0>b||b>=a.length||b>=c))return a[b]}function ub(a,b,c,d){if(-1===c)return null;var e=Xa(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var g=a.length;if(d&&b&256&&(d=a[g-1][c],null!=d)){if(tb(a,b,e,c)&&null!=Sa){var f;a=null!=(f=cb)?f:cb={};f=a[Sa]||0;4<=f||(a[Sa]=f+1,f=Error(),za(f,"incident"),Ca(f))}return d}return tb(a,b,e,c)}}function R(a,b,c){a=a.h;var d=I(a);M(d);S(a,d,b,c)}
function S(a,b,c,d,e){var g=Xa(b);if(c>=g||e){var f=b;if(b&256)e=a[a.length-1];else{if(null==d)return f;e=a[g+(+!!(b&512)-1)]={};f|=256}e[c]=d;c<g&&(a[c+(+!!(b&512)-1)]=void 0);f!==b&&J(a,f);return f}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}function vb(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function T(a,b,c,d){a=a.h;var e=I(a);M(e);for(var g=e,f=0,h=0;h<c.length;h++){var l=c[h];null!=ub(a,g,l)&&(0!==f&&(g=S(a,g,f)),f=l)}(c=f)&&c!==b&&null!=d&&(e=S(a,e,c));S(a,e,b,d)}
function wb(a,b,c,d,e,g,f){var h=!!(2&b),l=h?1:2,n=1===l;l=2===l;g=!!g;f&&(f=!h);h=ub(a,b,d,e);h=Array.isArray(h)?h:ab;var k=H(h),p=!!(4&k);if(!p){var m=k;0===m&&(m=U(m,b,g));m=G(m,1,!0);k=h;var v=b,E;(E=!!(2&m))&&(v=G(v,2,!0));for(var va=!E,wa=!0,aa=0,xa=0;aa<k.length;aa++){var w=k[aa];var ba=c;if(null==w||"object"!==typeof w||w.l!==K)if(Array.isArray(w)){var kb=H(w),P=kb;0===P&&(P|=v&32);P|=v&2;P!==kb&&J(w,P);w=new ba(w)}else w=void 0;w instanceof c&&(E||(ba=!!(H(w.h)&2),va&&(va=!ba),wa&&(wa=ba)),
k[xa++]=w)}xa<aa&&(k.length=xa);m=G(m,4,!0);m=G(m,16,wa);m=G(m,8,va);J(k,m);E&&Object.freeze(k);k=m}c=!!(8&k)||n&&!h.length;if(f&&!c){vb(k)&&(h=D(h),k=U(k,b,g),b=S(a,b,d,h,e));f=h;c=k;for(k=0;k<f.length;k++)m=f[k],v=m.h,E=I(v),v=E&2?rb(m,v,E,!1):m,m!==v&&(f[k]=v);c=G(c,8,!0);c=G(c,16,!f.length);J(f,c);k=c}vb(k)||(f=k,n?k=G(k,!h.length||16&k&&(!p||32&k)?2:2048,!0):g||(k=G(k,32,!1)),k!==f&&J(h,k),n&&Object.freeze(h));l&&vb(k)&&(h=D(h),k=U(k,b,g),J(h,k),S(a,b,d,h,e));return h}
function xb(a,b){a=a.h;var c=I(a);return wb(a,c,yb,b,void 0,!1,!(2&c))}function zb(a,b,c){var d=a.h,e=I(d);M(e);if(null==c)return S(d,e,b),a;for(var g=H(c),f=g,h=!!(2&g)||!!(2048&g),l=h||Object.isFrozen(c),n=!0,k=!0,p=0;p<c.length;p++){var m=c[p];h||(m=!!(H(m.h)&2),n&&(n=!m),k&&(k=m))}h||(g=G(g,5,!0),g=G(g,8,n),g=G(g,16,k));l&&g!==f&&(c=D(c),f=0,g=U(g,e,!0));g!==f&&J(c,g);S(d,e,b,c);return a}function U(a,b,c){a=G(a,2,!!(2&b));a=G(a,32,!!(32&b)&&c);return a=G(a,2048,!1)};function V(a,b,c){this.h=Q(a,b,c)}V.prototype.toJSON=function(){return Ab(this,ob(this.h,pb,void 0,void 0,!1),!0)};V.prototype.l=K;V.prototype.toString=function(){return Ab(this,this.h,!1).toString()};
function Ab(a,b,c){var d=ra?void 0:a.constructor.u;var e=I(c?a.h:b);a=b.length;if(!a)return b;var g;if($a(c=b[a-1])){a:{var f=c;var h={},l=!1,n;for(n in f){var k=f[n];if(Array.isArray(k)){var p=k;if(L(k,d,+n)||Za(k)&&0===k.size)k=null;k!=p&&(l=!0)}null!=k?h[n]=k:l=!0}if(l){for(var m in h){f=h;break a}f=null}}f!=c&&(g=!0);a--}for(n=+!!(e&512)-1;0<a;a--){m=a-1;c=b[m];m-=n;if(!(null==c||L(c,d,m)||Za(c)&&0===c.size))break;var v=!0}if(!g&&!v)return b;b=Array.prototype.slice.call(b,0,a);f&&b.push(f);return b}
;var Bb=Symbol();function Cb(a,b,c){a[b]=c}var Db=Symbol();function Eb(a){var b=a[Db];if(!b){var c=Fb(a);b=function(d,e){return Gb(d,e,c)};a[Db]=b}return b}var Hb=Symbol();function Ib(a){return a.g}function Jb(a,b){var c,d,e=a.g;return function(g,f,h){return e(g,f,h,d||(d=Fb(b).g),c||(c=Eb(b)))}}
function Fb(a){var b=a[Hb];if(b)return b;b=a[Hb]={};var c=Ib,d=Jb;var e=void 0===e?Cb:e;b.g=jb(a[0]);var g=0,f=a[++g];f&&f.constructor===Object&&(b.A=f,f=a[++g],"function"===typeof f&&(b.j=f,b.i=a[++g],f=a[++g]));for(var h={};Array.isArray(f)&&"number"===typeof f[0]&&0<f[0];){for(var l=0;l<f.length;l++)h[f[l]]=f;f=a[++g]}for(l=1;void 0!==f;){"number"===typeof f&&(l+=f,f=a[++g]);var n=void 0;if(f instanceof C)var k=f;else k=Kb,g--;if(k.v){f=a[++g];n=a;var p=g;"function"==typeof f&&(f=f(),n[p]=f);n=
f}f=a[++g];p=l+1;"number"===typeof f&&0>f&&(p-=f,f=a[++g]);for(;l<p;l++){var m=h[l];e(b,l,n?d(k,n,m):c(k,m))}}Lb in a&&Bb in a&&Hb in a&&(a.length=0);return b}var Lb=Symbol();function Mb(a,b){var c=a[b];if(c)return c;if(c=a.A)if(c=c[b]){c=Array.isArray(c)?c[0]instanceof C?c:[Nb,c]:[c,void 0];var d=c[0].g;if(c=c[1]){var e=Eb(c),g=Fb(c).g;c=(c=a.i)?c(g,e):function(f,h,l){return d(f,h,l,g,e)}}else c=d;return a[b]=c}}
function Gb(a,b,c){for(var d=I(a),e=+!!(d&512)-1,g=a.length,f=g+(d&256?-1:0),h=d&512?1:0;h<f;h++){var l=a[h];if(null!=l){var n=h-e,k=Mb(c,n);k&&k(b,l,n)}}if(d&256){a=a[g-1];for(var p in a)d=+p,Number.isNaN(d)||(e=a[p],null!=e&&(g=Mb(c,d))&&g(b,e,d))}}
function Ob(a,b,c){b=null==b||"string"===typeof b?b:void 0;if(null!=b){var d=!1;d=void 0===d?!1:d;if(Ha){if(d&&(Ga?!b.B():/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b)))throw Error("Found an unpaired surrogate");b=(Fa||(Fa=new TextEncoder)).encode(b)}else{for(var e=0,g=new Uint8Array(3*b.length),f=0;f<b.length;f++){var h=b.charCodeAt(f);if(128>h)g[e++]=h;else{if(2048>h)g[e++]=h>>6|192;else{if(55296<=h&&57343>=h){if(56319>=h&&f<b.length){var l=b.charCodeAt(++f);
if(56320<=l&&57343>=l){h=1024*(h-55296)+l-56320+65536;g[e++]=h>>18|240;g[e++]=h>>12&63|128;g[e++]=h>>6&63|128;g[e++]=h&63|128;continue}else f--}if(d)throw Error("Found an unpaired surrogate");h=65533}g[e++]=h>>12|224;g[e++]=h>>6&63|128}g[e++]=h&63|128}}b=e===g.length?g:g.subarray(0,e)}A(a.g,8*c+2);A(a.g,b.length);B(a,a.g.end());B(a,b)}}
function Pb(a,b,c,d,e){b=b instanceof V?b.h:Array.isArray(b)?Q(b,d[0],d[1]):void 0;if(null!=b){A(a.g,8*c+2);c=a.g.end();B(a,c);c.push(a.i);e(b,a);e=c.pop();for(e=a.i+a.g.length()-e;127<e;)c.push(e&127|128),e>>>=7,a.i++;c.push(e);a.i++}}
var Qb=new C(function(a,b,c){b=null==b||"number"===typeof b?b:"NaN"===b||"Infinity"===b||"-Infinity"===b?Number(b):void 0;null!=b&&(A(a.g,8*c+1),a=a.g,c=Ma||(Ma=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),Ka=c.getUint32(0,!0),La=c.getUint32(4,!0),Pa(a,Ka),Pa(a,La))},!1),Rb=new C(function(a,b,c){b=gb(b);null!=b&&null!=b&&(A(a.g,8*c),Oa(a.g,b))},!1),Sb=new C(Ob,!1),Tb=new C(Ob,!1),Nb=new C(Pb,!0),Kb=new C(Pb,!0),Ub;
Ub=new C(function(a,b,c,d,e){if(Array.isArray(b))for(var g=0;g<b.length;g++)Pb(a,b[g],c,d,e)},!0);var Vb=new C(function(a,b,c){b=gb(b);null!=b&&(b=parseInt(b,10),A(a.g,8*c),Oa(a.g,b))},!1);function yb(a){this.h=Q(a)}na(yb,V);var Wb=[1,2,3],Xb=[4,5],Yb=[0,Wb,Xb,Vb,-1,Tb,Qb,Tb,Rb];function Zb(a){this.h=Q(a)}na(Zb,V);Zb.u=[1];Zb.prototype.g=function(a){return function(){var b=new Qa;Gb(this.h,b,Fb(a));B(b,b.g.end());for(var c=new Uint8Array(b.i),d=b.j,e=d.length,g=0,f=0;f<e;f++){var h=d[f];c.set(h,g);g+=h.length}b.j=[c];return c}}([0,Ub,Yb,Sb,1,Sb,Rb]);function $b(a){this.h=Q(a)}na($b,V);$b.prototype.setData=function(a,b){var c=yb,d=this.h,e=I(d);M(e);d=wb(d,e,c,2,!1,!0);b=null!=b?b:new c;if("number"!==typeof a||0>a||a>d.length)throw Error();void 0!=a?d.splice(a,1,b):d.push(b);H(b.h)&2?Ua(d,8):Ua(d,16);return this};$b.u=[1,2];function ac(a){this.i=a;this.data=[];this.g=[]}ac.prototype.setData=function(a,b,c){this.i.includes(c)&&this.data.push({key:a,value:b,channel:c})};function bc(a){return a.data.some(function(b){return 1===b.channel})}ac.prototype.setAttribute=function(a,b){this.g.push({key:a,value:b})};
function cc(a,b,c,d){var e=new yb;"string"===typeof a?T(e,3,Wb,N(a)):d?T(e,1,Wb,null==a?a:eb(a)):T(e,2,Wb,null==a?a:eb(a));if("number"===typeof b){if(null==b)a=b;else{if("number"!==typeof b)throw Error("Value of float/double field must be a number, found "+typeof b+": "+b);a=b}T(e,4,Xb,a)}else T(e,5,Xb,N(b));c&&R(e,6,null==c?c:fb(c));return e};function W(){this.g=new ac([]);this.D=Date.now();this.i=[];this.s=this.m=!1;this.o=100}
W.prototype.init=function(a,b,c,d,e,g){var f=this;this.g=new ac(b);this.G=a;this.C=e;this.F=c;if(d){b=a=NaN;d=r(d);for(c=d.next();!c.done;c=d.next())e=r(c.value),c=e.next().value,e=e.next().value,6===c?a=Number(e):5===c?b=Number(e):this.g.setAttribute(c,e);!isNaN(a)&&0<=a?this.o=a:isNaN(b)||(this.m=!0,setInterval(this.j.bind(this),b),setTimeout(function(){dc(f,"timeout")},3E5),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&dc(f,"document_hidden")}),window.addEventListener("beforeunload",
function(){dc(f,"beforeunload")}))}if(g){g=r(g);for(a=g.next();!a.done;a=g.next())d=r(a.value),a=d.next().value,b=d.next().value,d=d.next().value,this.setData(a,b,d);"complete"===document.readyState?this.send():window.addEventListener("load",function(){f.send()})}};W.prototype.getBaseTime=function(){return this.D};W.prototype.setData=function(a,b,c){this.g.setData(a,b,c);this.i[c]?this.i[c]++:this.i[c]=1};W.prototype.setAttribute=function(a,b){this.g.setAttribute(a,b)};
W.prototype.send=function(a){var b=this;if(!this.m){var c=bc(this.g)?0:this.o;a=null!=a?a:c;0<a?setTimeout(function(){return void b.j()},a):this.j()}};
W.prototype.j=function(){if(0<this.g.data.length){var a=this.G,b=this.C,c=this.F,d=this.g,e=[];var g=r(d.g);for(var f=g.next();!f.done;f=g.next())f=f.value,e.push(cc(f.key,f.value,void 0,!0));g=[];d=r(d.data);for(f=d.next();!f.done;f=d.next())f=f.value,g.push(cc(f.key,f.value,f.channel,!1));d=new $b;e=zb(d,1,e);g=zb(e,2,g);e=new Zb;g=xb(g,1).concat(xb(g,2));e=zb(e,1,g);a&&R(e,2,N(a));c&&R(e,4,N(c));b&&R(e,5,null==b?b:fb(b));a="https://pagead2.googlesyndication.com/pagead/gen_204?id=mys&d="+Ea(e.g()).replace(/\//g,
"_").replace(/\+/g,"-");b=window;var h=void 0===h?!1:h;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Ba(b,a,void 0===h?!1:h);this.g.data=[]}};function dc(a,b){a.s||(a.g.setData(32,b,4),a.i.forEach(function(c,d){a.g.setData(31,c,d)}),a.j(),a.s=!0)}
if(!window.mys||!window.mys.pingback){var ec=new W,X=["mys","pingback"],Y=t;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===ec?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=ec};}).call(this);
