(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edbc5d54268b08a4ec7471dac2f58b98"],{vMxJ:function(e,t,n){"use strict";n("ma9I");n("zKZe");n("3KgV");n("NBAS");Object.defineProperty(t,"__esModule",{value:true});t.withConversionContext=g;Object.defineProperty(t,"enums",{enumerable:true,get:function e(){return r.enums}});t.default=void 0;var u=i(n("q1tI"));var a=o(n("ZpD3"));var r=n("O6wL");var f=n("FxTa");function o(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};if(r.get||r.set){Object.defineProperty(t,n,r)}else{t[n]=e[n]}}}}t.default=e;return t}}function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};return c.apply(this,arguments)}function l(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}function s(e,t,n){if(t)p(e.prototype,t);if(n)p(e,n);return e}function v(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return y(e)}function b(e){b=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return b(e)}function y(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function d(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)h(e,t)}function h(e,t){h=Object.setPrototypeOf||function e(t,n){t.__proto__=n;return t};return h(e,t)}function O(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var w=u.createContext(Object.freeze({}));var m=function(e){d(i,e);function i(){var e;var n;l(this,i);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++){r[o]=arguments[o]}n=v(this,(e=b(i)).call.apply(e,[this].concat(r)));O(y(n),"getMarkConversionFunc",function(t){return function(e){a.default.markConversion(e.id,e.extra,t).then(function(){n.props.onMarkConversion(e,t)})}});return n}s(i,[{key:"render",value:function e(){var n=this;var t=this.props,r=t.children,o=t.learningTimeInfo;return u.createElement(w.Consumer,null,function(e){var t=o?(0,f.updateLearningTimeInfo)(e,o):e;return u.createElement(w.Provider,{value:t},typeof r==="function"?r(n.getMarkConversionFunc(t)):r)})}}]);return i}(u.Component);t.default=m;O(m,"defaultProps",{onMarkConversion:function e(t,n){}});function g(n,r){return function(e){d(t,e);function t(){l(this,t);return v(this,b(t).apply(this,arguments))}s(t,[{key:"render",value:function e(){var t=this;return u.createElement(m,{learningTimeInfo:typeof r==="function"?r(this.props):r},function(e){return u.createElement(n,c({},t.props,{markConversion:e}))})}}]);return t}(u.Component)}}}]);
//# sourceMappingURL=../../sourcemaps/en/edbc5d54268b08a4ec7471dac2f58b98.34028230b23ed401ac3b.js.map