(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bf85e6717e13b7495f7a0c42e9ac0894"],{SY2B:function(e,t,r){"use strict";r("ma9I");r("5DmW");r("NBAS");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r("q1tI"));var l=i(r("kVl0"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function o(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function c(e,t,r){if(t)u(e.prototype,t);if(r)u(e,r);return e}function f(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return d(e)}function s(e){s=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return s(e)}function d(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)b(e,t)}function b(e,t){b=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return b(e,t)}function y(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var v=l.default.getEarlyUsableWindowProp();var w=l.default.getTimingSummaryProp();var h=function e(t){return["window['".concat(v,"'] = window['").concat(v,"'] || {}"),"window['".concat(v,"']['").concat(t,"'] = window.performance && ")+"window.performance.now && window.performance.now()","window['".concat(w,"'] = { ")+"pageName: '".concat(t,"', nav: 'server', sufficientlyUsable: 0}")].join(";")+";"};var m=function(e){p(a,e);function a(){var e;var t;o(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++){n[i]=arguments[i]}t=f(this,(e=s(a)).call.apply(e,[this].concat(n)));y(d(t),"_didMount",false);y(d(t),"_didMarkInteractive",false);y(d(t),"_didMarkUsable",false);return t}c(a,[{key:"componentDidMount",value:function e(){var t=this.props,r=t.markFullyInteractiveOnMount,n=t.markSufficientlyUsable,i=t.pageName,a=t.fullyInteractive,o=t.sufficientlyUsable,u=t.disable;this._didMount=true;if(u){return}this._didMarkUsable=n!=="other"||o;this._didMarkInteractive=r||a;l.default.reportPageLifecycleTiming(i,{interactive:this._didMarkInteractive,usable:this._didMarkUsable})}},{key:"UNSAFE_componentWillUpdate",value:function e(t){var r=this.props,n=r.pageName,i=r.disable;if(i){return}if(!this._didMarkUsable&&t.sufficientlyUsable||!this._didMarkInteractive&&t.fullyInteractive){this._didMarkUsable=t.sufficientlyUsable;this._didMarkInteractive=t.fullyInteractive;l.default.reportPageLifecycleTiming(n,{interactive:this._didMarkInteractive,usable:this._didMarkUsable})}}},{key:"renderEarlyMarkerScript",value:function e(){var t=this.props.pageName;return n.createElement("script",{dangerouslySetInnerHTML:{__html:h(t)}})}},{key:"render",value:function e(){var t=this.props,r=t.markSufficientlyUsable,n=t.disable;if(n){return null}return!this._didMount&&r==="markup"?this.renderEarlyMarkerScript():null}}]);return a}(n.Component);y(m,"defaultProps",{markFullyInteractiveOnMount:false,markSufficientlyUsable:"other"});var k=m;t.default=k}}]);
//# sourceMappingURL=../../sourcemaps/en/bf85e6717e13b7495f7a0c42e9ac0894.4283e17895c761a23436.js.map