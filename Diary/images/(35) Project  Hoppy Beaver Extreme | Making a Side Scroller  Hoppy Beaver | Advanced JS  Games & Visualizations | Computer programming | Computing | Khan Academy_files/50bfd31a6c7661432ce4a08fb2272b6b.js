(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["50bfd31a6c7661432ce4a08fb2272b6b"],{Lrab:function(t,n,a){"use strict";a("ma9I");a("yyme");Object.defineProperty(n,"__esModule",{value:true});n.formatTimeDisplay=e;n.formatTimeDisplayAria=o;n.getFormattedDate=c;var i18n=a("HEOz");var r=3600;function d(t,n){var a=Math.max(n-"".concat(t).length,0);return new Array(a).fill(0).join("")+t}function s(t){var n=Math.floor(t/r);var a=Math.floor(t%r/60);var e=Math.floor(t%60);return{hours:n,minutes:a,seconds:e}}function e(t){var n=s(t),a=n.hours,e=n.minutes,r=n.seconds;var o=d(e,2);var c=d(r,2);return"".concat(a?"".concat(a,":").concat(o):e,":").concat(c)}function o(t){var n=s(t),a=n.hours,e=n.minutes,r=n.seconds;var o=[];if(a){o.push(i18n.ngettext("%(num)s hour","%(num)s hours",a))}if(e){o.push(i18n.ngettext("%(num)s minute","%(num)s minutes",e))}if(r){o.push(i18n.ngettext("%(num)s second","%(num)s seconds",r))}return o.join(" ")}function c(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:new Date;var n=t.getFullYear();var a=d(t.getMonth()+1,2);var e=d(t.getDate(),2);var r=d(t.getHours(),2);var o=d(t.getMinutes(),2);var c=d(t.getSeconds(),2);var s=-Math.round(t.getTimezoneOffset()/15)*15;var u=s<0?"-":"+";var i=d(parseInt(Math.abs(s/60)),2);var v=d(Math.abs(s%60),2);var f="".concat(n,"-").concat(a,"-").concat(e);var m="".concat(r,":").concat(o,":").concat(c);var h="".concat(u).concat(i,":").concat(v);return"".concat(f,"T").concat(m).concat(h)}}}]);
//# sourceMappingURL=../../sourcemaps/en/50bfd31a6c7661432ce4a08fb2272b6b.e420b912ecd368346c18.js.map