(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["43bdbf1ec82cee280d016eb2843f1eee"],{BdyE:function(e,t,r){"use strict";r("pNMO");r("ma9I");r("TeQF");r("yq1k");r("2B1R");r("5DmW");r("NBAS");r("B6y2");r("JTJg");r("FZtP");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var f=l(r("q1tI"));var m=r("mR6N");var c=a(r("ncIj"));var n=a(r("8SJn"));var u=a(r("OsXK"));var b=r("6OHE");var o=a(r("uEGL"));var y=a(r("droQ"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function i(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};var n=Object.keys(r);if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(e){j(t,e,r[e])})}return t}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function p(e,t,r){if(t)d(e.prototype,t);if(r)d(e,r);return e}function h(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return v(e)}function g(e){g=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return g(e)}function v(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function w(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)x(e,t)}function x(e,t){x=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return x(e,t)}function j(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var i18n=r("HEOz");var O={tooltipColor:n.default.format(n.default.fade(n.default.parse(b.colors.gray17),.9))};var S=function(e){w(o,e);function o(){var e;var p;s(this,o);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}p=h(this,(e=g(o)).call.apply(e,[this].concat(r)));j(v(p),"state",{expansions:{},tooltipSubjectId:null});j(v(p),"handleExpansion",function(e){p.setState({expansions:i({},p.state.expansions,j({},e,!p.state.expansions[e]))})});j(v(p),"renderCheckbox",function(e,t,r){var n=p.props,o=n.modalBody,a=n.onChange;var l=p.state.tooltipSubjectId===e.id;var i=f.createElement("div",{className:(0,m.css)(C.tooltipContents)},i18n._("Alas! We can’t track more than 9 courses for you yet."));var s=function e(){if(p.setState&&p.state.tooltipSubjectId){p.setState({tooltipSubjectId:null})}};return r&&l?f.createElement(u.default,{showOnMount:true,inverted:true,offset:12,horizontalAlignment:"left",onTopOfModal:true,content:i,key:e.id,color:O.tooltipColor,dismissOnScroll:true,autoDismissTimeout:3e3,modalBody:o,onDismiss:s},f.createElement(c.default,{appearDisabled:true,dataTestId:e.id,style:{marginTop:-2}})):f.createElement(c.default,{checked:t,appearDisabled:r,onChange:r?undefined:function(){return a(e)},dataTestId:e.id,style:{marginTop:2}})});j(v(p),"renderSubject",function(e,t,r,n){var o=p.props,a=o.isForCoach,l=o.selectedClasses;var i=function e(t,r){return"class-picker-item-".concat(t,"-").concat(r)};var s=l[e.id];var c=Object.values(l).filter(function(e){return e}).length;var u=!a&&!s&&c>=9;var d=u?function(){if(p.state.tooltipSubjectId!==e.id){p.setState({tooltipSubjectId:e.id})}}:null;return f.createElement("label",{key:e.id,className:(0,m.css)(C.labelAppearance,C.labelLayout),style:{color:(0,b.domainColors)(r.slug).domain3},"data-test-id":i(n,t),onClick:d},p.renderCheckbox(e,s,u),f.createElement(y.default,{size:10}),e.title)});return p}p(o,[{key:"render",value:function e(){var l=this;var t=this.props,r=t.domains,i=t.selectedClasses,s=t.selectedGradeLevelId,c=t.classesInLevel,u=t.isForCoach,d=t.showInModal;var p=this.state.expansions;return f.createElement("div",{className:(0,m.css)(C.container,!d&&C.pageContainer,u&&C.coachContainer)},r.map(function(r,n){var e=[];if(u||!c.length||s==="other"){e=r.subjects}else{e=r.subjects.filter(function(e){return c.includes(e.id)||i[e.id]})}var t=p[r.slug]?r.subjects:e;var o=e.length<r.subjects.length;var a=f.createElement("div",{className:(0,m.css)(C.showAll),onClick:function e(){return l.handleExpansion(r.slug)},style:{color:(0,b.domainColors)(r.slug).domain3}},p[r.slug]?i18n._("See fewer"):i18n._("See all (%(num)s)",{num:r.subjects.length}));return f.createElement("div",{key:n,className:(0,m.css)(C.group,u&&C.coachGroup,!d&&C.fullScreenGroup)},f.createElement("div",{className:(0,m.css)(C.header)},f.createElement("div",{className:(0,m.css)(C.domainText),style:{color:(0,b.domainColors)(r.slug).domain3}},r.title),o&&a),f.createElement(y.default,{size:8}),f.createElement("div",{className:(0,m.css)(C.rule)}),f.createElement("div",{className:(0,m.css)(C.list,u&&C.coachList)},t.map(function(e,t){return l.renderSubject(e,t,r,n)}),t.length%3===2&&f.createElement("div",{className:(0,m.css)(C.labelLayout)}),t.length===0&&f.createElement("div",{className:(0,m.css)(C.noSubjects)},i18n._("No courses match your grade."),f.createElement("div",{className:(0,m.css)(C.showButtonContainer)},a))))}))}}]);return o}(f.Component);t.default=S;j(S,"defaultProps",{showInModal:true});var C=m.StyleSheet.create({container:j({width:768,boxSizing:"border-box",padding:"24px 32px 0 32px",display:"flex",flexDirection:"column",backgroundColor:b.colors.white},b.queries.small,{minWidth:0,width:"100%",padding:"24px 16px 0 16px"}),pageContainer:{maxWidth:b.pageWidth,width:"100%",boxSizing:"border-box",padding:24,display:"flex",flexDirection:"column",backgroundColor:b.colors.white,justifyContent:"space-between"},group:{display:"flex",flexDirection:"column"},list:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",paddingBottom:32},header:i({},b.typography.smallHeading,{display:"flex",flexDirection:"row",justifyContent:"space-between"}),rule:j({borderTop:"solid 1px ".concat(b.colors.gray68)},b.queries.small,{display:"none"}),labelAppearance:i({},b.typography.bodySmall,{lineHeight:"normal",display:"flex",flexDirection:"row",alignItems:"start",userSelect:"none"}),labelLayout:j({width:224,marginTop:8},b.queries.small,{flexGrow:1,color:b.colors.gray17}),tooltipContents:{maxWidth:200},noSubjects:i({},b.typography.bodySmall,{lineHeight:"23px",height:23,marginTop:8,color:b.colors.gray41,display:"flex"}),showButtonContainer:{marginLeft:4},showAll:i({},b.typography.bodySmall,{cursor:"pointer",userSelect:"none"}),domainText:j({},o.default.mdOrLarger,{color:b.colors.gray17}),coachContainer:j({flexDirection:"row",flexWrap:"wrap"},o.default.smOrSmaller,{padding:0}),coachGroup:j({width:"30%",marginLeft:10,marginRight:10},o.default.smOrSmaller,{width:"100%"}),fullScreenGroup:{width:"18%",marginLeft:10,marginRight:10},coachList:{paddingBottom:24}})}}]);
//# sourceMappingURL=../../sourcemaps/en/43bdbf1ec82cee280d016eb2843f1eee.cf30593efcc6acf3d371.js.map