(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1db38be75b2368b13f6ca9418c418553"],{UUh3:function(e,t,r){"use strict";var i18n=r("HEOz");var n={All:i18n._("All types"),Video:i18n._("Videos"),Practice:i18n._("Practice"),Article:i18n._("Articles")};var o=["Video","Exercise","Article","Scratchpad"];var i=function e(t){if(t==="Scratchpad"||t==="Exercise"){return"Practice"}return t};var a=function e(t,r){if(!t||t==="All"){return true}else if(t==="Practice"){return r.kind==="Exercise"||r.kind==="Scratchpad"}else{return r.kind===t}};e.exports={FILTER_LABELS:n,FILTERABLE_KINDS:o,filterKeyForKind:i,applyFilterToItem:a}},sLXg:function(e,t,r){"use strict";r("pNMO");r("ma9I");r("TeQF");r("2B1R");r("zKZe");r("5DmW");r("NBAS");r("FZtP");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var v=n(r("q1tI"));function n(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function b(){b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};return b.apply(this,arguments)}function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function a(e,t,r){if(t)o(e.prototype,t);if(r)o(e,r);return e}function l(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return c(e)}function u(e){u=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return u(e)}function c(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function s(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)p(e,t)}function p(e,t){p=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return p(e,t)}function f(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};var n=Object.keys(r);if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(e){d(t,e,r[e])})}return t}function d(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var m=r("mR6N"),y=m.StyleSheet,h=m.css;var g=r("ZpD3");var O=r("UUh3"),j=O.applyFilterToItem;var P=r("6OHE");var S=r("yNU9"),C=S.Spacer,k=S.CompressedSeparator,w=S.Separator,E=S.NarrowSeparator;var I=function e(t,r,n,o){var i=t.kind;var a=r.kind;if(a==="ClassesDashboard"){return v.createElement(C,{key:n})}if(o){return v.createElement(k,{key:n})}if(i==="PartnershipDescription"||a==="PartnershipDescription"){return null}if(i==="SubjectUpsellShelf"||a==="SubjectUpsellShelf"||i==="KhanKidsUpsell"||a==="KhanKidsUpsell"){return null}if(i==="BrowseProjects"&&a==="BrowseProjects"){return null}if(i==="FloatingSidebar"){return v.createElement("div",{className:"contents_beginSticky",key:n})}if((i==="ContentList"||i==="InterspersedQuiz")&&a!=="ContentList"&&a!=="InterspersedQuiz"){return v.createElement(w,{key:n,extraClasses:"contents_endSticky"})}if(i==="PracticeModule"&&a!=="PracticeModule"){return v.createElement(w,{key:n,extraClasses:"contents_endSticky"})}if(a==="TabFooter"||a==="PartnershipDescription"||i==="BrowseProjects"||a==="BrowseProjects"){return v.createElement(w,{key:n})}if(i==="ConceptTags"||a==="ConceptTags"||i==="BrowseProjects"||a==="BrowseProjects"||i==="ContentCarousel"&&a==="ContentCarousel"||i==="ContentCarousel"&&a==="SubjectIntro"||i==="ContentCarousel"&&a==="SubjectExperienceUpsell"||i==="QuickLinks"&&a==="ContentCarousel"||i==="QuickLinks"&&a==="SubjectIntro"||i==="QuickLinks"&&a==="SubjectExperienceUpsell"||i==="ResearchFeaturedContent"||i==="ResearchPeople"||i==="SubjectIntro"&&a==="ContentCarousel"||i==="SubjectIntro"&&a==="QuickLinks"||i==="SubjectIntro"&&a==="SubjectIntro"||i==="SubjectIntro"&&a==="SubjectExperienceUpsell"||i==="SubjectExperienceUpsell"&&a==="ContentCarousel"||i==="SubjectExperienceUpsell"&&a==="QuickLinks"||i==="SubjectExperienceUpsell"&&a==="SubjectIntro"||i==="SubjectExperienceUpsell"&&a==="SubjectExperienceUpsell"||i==="TableOfContentsRow"&&a==="ContentCarousel"){return v.createElement(E,{alignment:"center",key:n})}if(a==="ContentList"||a==="InterspersedQuiz"){return v.createElement(E,{alignment:"right",key:n})}return null};var L=function e(t,r){if(!r){return t}else{return f({userInfo:r[t.kind]},t)}};var F=function(e){s(o,e);function o(){var e;var a;i(this,o);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}a=l(this,(e=u(o)).call.apply(e,[this].concat(r)));d(c(a),"state",{contentFilterKey:null});d(c(a),"handleFilterChange",function(e){if(e!==a.state.contentFilterKey){if(e==="Video"){g.markConversion("topic_page_filter_video")}else if(e==="Practice"){g.markConversion("topic_page_filter_practice")}else if(e==="Article"){g.markConversion("topic_page_filter_article")}else{g.markConversion("topic_page_filter_all")}a.setState({contentFilterKey:e})}});d(c(a),"applyFilterToModuleAndProps",function(e,t){var r=a.state.contentFilterKey;if(e.kind==="ContentList"&&r){var n=t.contentItems.filter(function(e){return j(r,e)});if(!n.length){return null}else{return f({},t,{contentItems:n})}}return t});d(c(a),"applyInterModuleFilters",function(e,n){var o={};var i=[];e.forEach(function(e,t){var r=a.applyFilterToModuleAndProps(e,n[t]);if(r){i.push({module:e,moduleProps:r})}else if(e.kind==="ContentList"){o[n[t].slug]=1}});var t=a.state.contentFilterKey;if(t){i=i.map(function(e){var t=e.module,r=e.moduleProps;if(t.kind==="FloatingSidebar"){return{module:t,moduleProps:f({},r,{links:r.links.filter(function(e){var t=e.slug;return!o[t]})})}}else{return{module:t,moduleProps:r}}})}return i});return a}a(o,[{key:"render",value:function e(){var c=this;var t=this.props,r=t.backgroundColor,s=t.moduleComponents,p=t.compact,f=t.domain,n=t.modules,d=t.titleTag,o=t.userInfo,m=t.useOldColors;var i=this.applyInterModuleFilters(n,n.map(function(e){return L(e,o)}));var a={_prevModule:null,moduleList:[]};var l=function e(t,r,n){var o=r.module,i=r.moduleProps;var a=!!n&&t._prevModule&&I(t._prevModule,o,"separator"+n,p);var l=s[o.kind];var u=v.createElement(l,b({},i,{domain:f,key:n,titleTag:d,useOldColors:m,onComponentInteractive:c.props.onComponentInteractive}));return{_prevModule:o,moduleList:t.moduleList.concat(a||null,u)}};var u=i.reduce(l,a),y=u.moduleList;return v.createElement("div",{className:h(N.moduleList),style:{backgroundColor:r||P.colors.white}},y)}}]);return o}(v.Component);t.default=F;d(F,"defaultProps",{compact:false,useOldColors:false});var N=y.create({moduleList:{position:"relative"}})},yNU9:function(e,t,r){"use strict";r("pNMO");r("ma9I");r("TeQF");r("5DmW");r("NBAS");r("FZtP");Object.defineProperty(t,"__esModule",{value:true});t.Spacer=t.CompressedSeparator=t.NarrowSeparator=t.Separator=void 0;var n=l(r("q1tI"));var o=r("mR6N");var i=a(r("6OHE"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function u(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};var n=Object.keys(r);if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(e){c(t,e,r[e])})}return t}function c(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function f(e,t,r){if(t)p(e.prototype,t);if(r)p(e,r);return e}function d(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return m(e)}function m(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function y(e){y=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return y(e)}function v(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)b(e,t)}function b(e,t){b=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return b(e,t)}var h=function(e){v(t,e);function t(){s(this,t);return d(this,y(t).apply(this,arguments))}f(t,[{key:"render",value:function e(){var t=(0,o.css)(w.separator);if(this.props.extraClasses){t+=" "+this.props.extraClasses}return n.createElement("div",{className:t,"aria-hidden":true})}}]);return t}(n.Component);t.Separator=h;var g=function(e){v(t,e);function t(){s(this,t);return d(this,y(t).apply(this,arguments))}f(t,[{key:"render",value:function e(){return n.createElement("div",{className:this.props.alignment==="center"?(0,o.css)(w.centered):(0,o.css)(w.right,w.compress)},n.createElement("div",{className:(0,o.css)(w.separator,w.narrow),"aria-hidden":true}))}}]);return t}(n.Component);t.NarrowSeparator=g;var O=function(e){v(t,e);function t(){s(this,t);return d(this,y(t).apply(this,arguments))}f(t,[{key:"render",value:function e(){return n.createElement("div",{className:(0,o.css)(w.compress)})}}]);return t}(n.Component);t.CompressedSeparator=O;var j=function(e){v(t,e);function t(){s(this,t);return d(this,y(t).apply(this,arguments))}f(t,[{key:"render",value:function e(){return n.createElement("div",null,n.createElement("div",{className:(0,o.css)(w.mobileOnlySeparator)}))}}]);return t}(n.Component);t.Spacer=j;var P=i.default.constants,S=P.moduleHorizontalPadding,C=P.moduleHorizontalPaddingSmall,k=P.moduleVerticalPaddingCompactModifer;var w=o.StyleSheet.create({compress:{position:"relative",top:-k},separator:{backgroundColor:i.default.colors.gray85,height:1},mobileOnlySeparator:c({},i.default.queries.small,{backgroundColor:i.default.colors.gray85,height:1}),calloutBottomSpacer:{height:i.default.missionCalloutVerticalPadding},centered:u({},i.default.moduleLayout.defaultAlignment),right:u({},i.default.moduleLayout.rightAlignment),narrow:c({marginLeft:S,marginRight:S},i.default.queries.small,{marginLeft:C,marginRight:C})})}}]);
//# sourceMappingURL=../../sourcemaps/en/1db38be75b2368b13f6ca9418c418553.1239e674a86853004e69.js.map