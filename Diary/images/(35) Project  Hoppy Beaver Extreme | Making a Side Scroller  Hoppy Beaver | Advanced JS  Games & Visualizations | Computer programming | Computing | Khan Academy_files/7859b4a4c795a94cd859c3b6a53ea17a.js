(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7859b4a4c795a94cd859c3b6a53ea17a"],{nzSo:function(e,t,r){"use strict";r("ma9I");r("NBAS");Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i=w(r("q1tI"));var n=r("mR6N");var o=h(r("Pwnf"));var l=h(r("SGU3"));var a=h(r("gE8/"));var s=r("Vxy9");var c=r("JimW");var u=r("6OHE");var f=h(r("17AU"));var d=h(r("uEGL"));var p=h(r("wINb"));var m=h(r("Nw73"));var v=h(r("hCZ8"));var y;function h(e){return e&&e.__esModule?e:{default:e}}function w(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function b(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function C(e,t,r){if(t)g(e.prototype,t);if(r)g(e,r);return e}function O(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return x(e)}function j(e){j=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return j(e)}function x(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function T(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)E(e,t)}function E(e,t){E=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return E(e,t)}function P(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var i18n=r("HEOz");var k=function(e){T(a,e);function a(){var e;var t;b(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++){n[o]=arguments[o]}t=O(this,(e=j(a)).call.apply(e,[this].concat(n)));P(x(t),"state",{showModal:true});P(x(t),"handleClose",function(){var e=t.props.onClose;e();t.setState({showModal:false})});return t}C(a,[{key:"renderImage",value:function e(){return i.createElement("img",{className:(0,n.css)(M.image),src:(0,p.default)("/images/coach/pencilHand-800x.png"),alt:""})}},{key:"getHeadingText",value:function e(){var t=this.props.purpose;switch(t){case"welcome":return i18n.$_("Welcome to your class, %(className)s.",{className:i.createElement(c.Text,{testId:"class-name-in-join-modal"},this.props.className)});case"confirm":return i18n.$_("Join %(className)s class.",{className:this.props.className})}}},{key:"getBodyText",value:function e(t){var r=this.props,n=r.purpose,o=r.includeDistrictCopy;switch(n){case"welcome":return i18n._("Assignments or goals your teacher creates for you will appear at the top of your Khan Academy home page.");case"confirm":return i.createElement(i.Fragment,null,i.createElement(c.View,null,o&&i18n.doNotTranslate("This class is managed by your school. If you want to join this class, we'll need to ask you to confirm your school email on the next screen.")),i.createElement(c.Text,null,i18n._("Not your class?")," ",i.createElement(l.default,{skipClientNav:!t,href:"/coaches"},i18n._("Join a different class."))))}}},{key:"renderCTAText",value:function e(){var t=this.props.purpose;switch(t){case"welcome":return i18n._("Onward!");case"confirm":return i18n._("Join class")}}},{key:"renderMessage",value:function e(){var t=this;return i.createElement(f.default,{mockOnFirstRender:true},function(e){return i.createElement(c.View,{style:M.body},i.createElement(c.View,{style:M.bodyItem},i.createElement(s.HeadingLarge,null,t.getHeadingText())),i.createElement(c.View,{style:M.bodyItem},i.createElement(s.Body,null,t.getBodyText(e.featureFlag("GANDALF_LP_NEW_LIHP")))))})}},{key:"renderButton",value:function e(t){var r=this.props.onCTAClick;return i.createElement(m.default,{onClick:function e(){r();t()},color:o.default.blue,"data-test-id":"join-modal-cta"},this.renderCTAText())}},{key:"render",value:function e(){var r=this;var t=this.state.showModal;return t&&i.createElement(v.default,{style:M.modal,onClose:this.handleClose,hostInBody:true},function(e){var t=e.closeModal;return i.createElement(c.View,{style:M.container},i.createElement(c.View,{style:M.previewContainer},r.renderImage()),i.createElement(c.View,{style:M.contentContainer},i.createElement(c.View,{style:M.scroll},r.renderMessage()),i.createElement(c.View,{style:M.footer},r.renderButton(t))))})}}]);return a}(i.Component);t.default=k;P(k,"defaultProps",{className:""});var S=52;var D=d.default.mdOrSmaller;var N=d.default.xsOrSmaller;var M=n.StyleSheet.create({modal:(y={height:464,width:888,display:"flex",flexDirection:"column",overflow:"hidden"},P(y,D,{height:"calc(100% - ".concat(2*S,"px)"),width:"calc(100% - ".concat(2*S,"px)"),borderRadius:u.constants.baseBorderRadius}),P(y,N,{height:"100%",width:"100%"}),y),container:P({display:"flex",flex:1,flexDirection:"row",minHeight:0},D,{flexDirection:"column"}),previewContainer:P({display:"flex",backgroundColor:o.default.darkBlue,flex:1,overflow:"hidden"},D,{alignItems:"center",minHeight:230}),contentContainer:{flex:1,display:"flex",flexDirection:"column"},scroll:{overflow:"auto",flex:1},footer:{borderTop:"solid 1px ".concat(o.default.offBlack32),display:"flex",alignItems:"center",flexDirection:"row-reverse",height:72,padding:"0 16px"},body:P({display:"flex",flexDirection:"column",paddingTop:a.default.xxxLarge},D,{paddingTop:a.default.xLarge}),bodyItem:P({display:"flex",flexGrow:1,marginLeft:52,marginRight:64,marginBottom:16},D,{marginLeft:a.default.medium,marginRight:a.default.medium,marginBottom:a.default.medium}),image:{maxWidth:"100%",maxHeight:"100%",position:"absolute",bottom:0}})},zWPi:function(e,t,r){"use strict";r("ma9I");r("+2oP");r("3KgV");r("5DmW");r("NBAS");r("07d7");r("5s+n");Object.defineProperty(t,"__esModule",{value:true});t.default=t.JoinModalCompleteContext=void 0;var l=i(r("q1tI"));var s=r("oJmH");var n=a(r("lTCR"));var c=r("o1mU");var u=a(r("uJWH"));var f=r("VHtk");var o=a(r("/eLw"));var d=a(r("nzSo"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function p(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function v(e,t,r){if(t)m(e.prototype,t);if(r)m(e,r);return e}function y(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return w(e)}function h(e){h=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return h(e)}function w(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function b(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)g(e,t)}function g(e,t){g=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return g(e,t)}function C(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function O(){var t=x(["\n    mutation joinStudentMutation($classCode: String!) {\n        joinStudent(classCode: $classCode) {\n            isDistrictSynced\n        }\n    }\n"]);O=function e(){return t};return t}function j(){var t=x(["\n    query joinModalClassInfo($classCode: String!) {\n        studentList(classCode: $classCode) {\n            id\n            name\n            isDistrictSynced\n        }\n    }\n"]);j=function e(){return t};return t}function x(e,t){if(!t){t=e.slice(0)}return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var T=(0,n.default)(j());var E=(0,n.default)(O());var P=l.createContext(true);t.JoinModalCompleteContext=P;var k=function e(t,r){switch(t){case"welcome":return"join-welcome-modal-"+r;case"confirm":return"join-confirm-modal-"+r;default:return null}};var S=function(e){b(o,e);function o(){var e;var i;p(this,o);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}i=y(this,(e=h(o)).call.apply(e,[this].concat(r)));C(w(i),"state",{alreadyDismissed:"unknown",classCodeToUse:i.props.joinedClassCode||i.props.confirmJoinClassCode,closed:false,modalToShow:i.props.joinedClassCode?"welcome":i.props.confirmJoinClassCode?"confirm":null});C(w(i),"handleClose",function(){var e=i.state,t=e.classCodeToUse,r=e.modalToShow;var n=t?k(r,t):null;i.setState({closed:true});if(r==="welcome"&&n!==null){(0,f.dismiss)(n,"never")}});C(w(i),"handleCTAClick",function(){var e=i.state,n=e.classCodeToUse,t=e.modalToShow;var o=n?k(t,n):null;var r={data:{joinStudent:null}};var a=t==="confirm"?(0,c.apolloMutate)(E,{classCode:n}):Promise.resolve(r);return a.then(function(e){var t=e.data;var r=t.joinStudent;if(o!==null){(0,f.dismiss)(o,"never")}if(r&&r.isDistrictSynced){n&&window.location.assign("/coaches?districtClassCode=".concat(n))}})});return i}v(o,[{key:"componentDidMount",value:function e(){var t=this;setTimeout(function(){return t.checkDismissed()})}},{key:"componentDidCatch",value:function e(){}},{key:"checkDismissed",value:function e(){var t=this;var r=this.state,n=r.classCodeToUse,o=r.modalToShow;var a=n?k(o,n):null;if(n&&a){(0,f.isDismissed)(a).then(function(e){t.setState({alreadyDismissed:e?"yes":"no"})})}}},{key:"getCompletion",value:function e(){var t=this.state,r=t.alreadyDismissed,n=t.classCodeToUse,o=t.closed;return!n||r==="yes"||o}},{key:"render",value:function e(){var n=this;var t=this.props.children;var r=this.state,o=r.alreadyDismissed,a=r.classCodeToUse,i=r.modalToShow;return l.createElement(u.default,null,l.createElement(P.Provider,{value:this.getCompletion()},a&&i&&l.createElement(s.Query,{query:T,variables:{classCode:a}},function(e){var t=e.data;var r=t&&t.studentList;return o==="no"&&l.createElement(d.default,{className:r&&r.name,onClose:n.handleClose,onCTAClick:n.handleCTAClick,purpose:i,includeDistrictCopy:r&&r.isDistrictSynced})}),t))}}]);return o}(l.Component);t.default=S;C(S,"defaultProps",{confirmJoinClassCode:(0,o.default)().confirmJoinClassCode,joinedClassCode:(0,o.default)().joinedClassCode})}}]);
//# sourceMappingURL=../../sourcemaps/en/7859b4a4c795a94cd859c3b6a53ea17a.b98b918de2ff903f80c5.js.map