self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.vendors~Search.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[513],{1004:function(e,t,n){"use strict";var o=n(637),r=n(940),i=n(14),s={root:"ms-TooltipHost"};n.d(t,"a",function(){return u});var u=Object(o.a)(r.a,function(e){var t=e.className,n=e.theme;return{root:[Object(i.getGlobalClassNames)(s,n).root,{display:"inline"},t]}},void 0,{scope:"TooltipHost"})},1111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(59),r=n(885);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=r.default(e.request)),o.makeServiceRequest("UpdateMasterCategoryList",e,t)}},1160:function(e,t,n){"use strict";var o=n(384),r=n(340),i="[object Symbol]";t.a=function(e){return"symbol"==typeof e||Object(r.a)(e)&&Object(o.a)(e)==i}},1162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(500),r=n(501),i=n(502),s=n(226);t.getJsonRequestHeader=function(e){return o.default({RequestServerVersion:"Exchange2015",TimeZoneContext:r.default({TimeZoneDefinition:i.default({Id:null!=e?e:"Pacific Standard Time"})})})},t.getExtendedPropertyUri=function(e,t,n){return s.default({PropertySetId:e,PropertyName:t,PropertyType:n})}},1323:function(e,t,n){"use strict";function o(e){return e.clientWidth<e.scrollWidth}function r(e){return e.clientHeight<e.scrollHeight}function i(e){return o(e)||r(e)}n.d(t,"a",function(){return o}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return i})},1485:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return o.__assign({__type:"GetPersonaJsonRequest:#Exchange"},e)}},1489:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=/\([^)]*\)|[\0-\u001F\!-\/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,r=/^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,i=/\s+/g,s=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;function u(e,t,n){return e?(e=function(e){return e=(e=(e=e.replace(o,"")).replace(i," ")).trim()}(e),s.test(e)||!n&&r.test(e)?"":function(e,t){var n="",o=e.split(" ");return 2===o.length?(n+=o[0].charAt(0).toUpperCase(),n+=o[1].charAt(0).toUpperCase()):3===o.length?(n+=o[0].charAt(0).toUpperCase(),n+=o[2].charAt(0).toUpperCase()):0!==o.length&&(n+=o[0].charAt(0).toUpperCase()),t&&n.length>1?n.charAt(1)+n.charAt(0):n}(e,t)):""}},1588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(59),r=n(1485);t.default=function(e,t){return void 0===e||e.__type||(e=r.default(e)),o.makeServiceRequest("GetPersona",e,t)}},1697:function(e,t,n){"use strict";var o=n(1895);t.a=function(e){var t=Object(o.a)(e),n=t%1;return t==t?n?t-n:t:0}},1815:function(e,t,n){"use strict";var o=n(345),r=n(1886),i=n(879),s=n(1160),u=1/0,a=o.a?o.a.prototype:void 0,c=a?a.toString:void 0;t.a=function e(t){if("string"==typeof t)return t;if(Object(i.a)(t))return Object(r.a)(t,e)+"";if(Object(s.a)(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-u?"-0":n}},1886:function(e,t,n){"use strict";t.a=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},1895:function(e,t,n){"use strict";var o=n(992),r=1/0,i=1.7976931348623157e308;t.a=function(e){return e?(e=Object(o.a)(e))===r||e===-r?(e<0?-1:1)*i:e==e?e:0:0===e?e:0}},2133:function(e,t,n){"use strict";var o=n(1815);t.a=function(e){return null==e?"":Object(o.a)(e)}},2137:function(e,t,n){"use strict";t.a=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},216:function(e,t,n){"use strict";t.a=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},2295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return o.__assign({__type:"GetNotesForPersonaRequest:#Exchange"},e)}},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return o.__assign({__type:"ItemId:#Exchange"},e)}},2516:function(e,t,n){"use strict";var o=n(2137),r=n(1815),i=n(1697),s=n(2133);t.a=function(e,t,n){e=Object(s.a)(e),t=Object(r.a)(t);var u=e.length,a=n=void 0===n?u:Object(o.a)(Object(i.a)(n),0,u);return(n-=t.length)>=0&&e.slice(n,a)==t}},2518:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return o.__assign({__type:"GetPersonaRequest:#Exchange"},e)}},2525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(59),r=n(2295);t.default=function(e,t){return void 0===e.getNotesForPersonaRequest||e.getNotesForPersonaRequest.__type||(e.getNotesForPersonaRequest=r.default(e.getNotesForPersonaRequest)),o.makeServiceRequest("GetNotesForPersona",e,t)}},274:function(e,t,n){"use strict";var o=n(748),r="object"==typeof self&&self&&self.Object===Object&&self,i=o.a||r||Function("return this")();t.a=i},319:function(e,t,n){"use strict";var o;n.d(t,"a",function(){return o}),function(e){e[e.zero=0]="zero",e[e.medium=1]="medium",e[e.long=2]="long"}(o||(o={}))},340:function(e,t,n){"use strict";t.a=function(e){return null!=e&&"object"==typeof e}},345:function(e,t,n){"use strict";var o=n(274).a.Symbol;t.a=o},3576:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return o.__assign({__type:"PersonaPropertyUpdate:#Exchange"},e)}},3600:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return o.__assign({__type:"CreatePersonaJsonRequest:#Exchange"},e)}},3601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return o.__assign({__type:"UpdatePersonaJsonRequest:#Exchange"},e)}},3613:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(59),r=n(3600);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=r.default(e.request)),o.makeServiceRequest("CreatePersona",e,t)}},3614:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return o.__assign({__type:"CreatePersonaRequest:#Exchange"},e)}},3615:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(59),r=n(3601);t.default=function(e,t){return void 0===e.request||e.request.__type||(e.request=r.default(e.request)),o.makeServiceRequest("UpdatePersona",e,t)}},3616:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return o.__assign({__type:"UpdatePersonaRequest:#Exchange"},e)}},384:function(e,t,n){"use strict";var o=n(345),r=Object.prototype,i=r.hasOwnProperty,s=r.toString,u=o.a?o.a.toStringTag:void 0;var a=function(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var o=!0}catch(e){}var r=s.call(e);return o&&(t?e[u]=n:delete e[u]),r},c=Object.prototype.toString;var l=function(e){return c.call(e)},f="[object Null]",p="[object Undefined]",d=o.a?o.a.toStringTag:void 0;t.a=function(e){return null==e?void 0===e?p:f:d&&d in Object(e)?a(e):l(e)}},555:function(e,t,n){"use strict";var o;n.d(t,"a",function(){return o}),function(e){e[e.Parent=0]="Parent",e[e.Self=1]="Self"}(o||(o={}))},748:function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(this,n(102))},879:function(e,t,n){"use strict";var o=Array.isArray;t.a=o},885:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e){return o.__assign({__type:"UpdateMasterCategoryListRequest:#Exchange"},e)}},940:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o=n(0),r=n(2),i=n(146),s=n(1323),u=n(772),a=n(115),c=n(58),l=n(131),f=n(555),p=n(942),d=n(319),_=Object(i.a)(),v=function(e){function t(n){var o=e.call(this,n)||this;return o._tooltipHost=r.createRef(),o._closingTimer=-1,o.show=function(){o._toggleTooltip(!0)},o.dismiss=function(){o._hideTooltip()},o._onTooltipMouseEnter=function(e){var n=o.props.overflowMode;if(t._currentVisibleTooltip&&t._currentVisibleTooltip!==o&&t._currentVisibleTooltip.dismiss(),t._currentVisibleTooltip=o,void 0!==n){var r=o._getTargetElement();if(r&&!Object(s.b)(r))return}e.target&&Object(u.a)(e.target,o._getTargetElement())||(o._toggleTooltip(!0),o._clearDismissTimer())},o._onTooltipMouseLeave=function(e){o.props.closeDelay?(o._clearDismissTimer(),o._closingTimer=o._async.setTimeout(function(){o._toggleTooltip(!1)},o.props.closeDelay)):o._toggleTooltip(!1),t._currentVisibleTooltip===o&&(t._currentVisibleTooltip=void 0)},o._clearDismissTimer=function(){o._async.clearTimeout(o._closingTimer)},o._hideTooltip=function(){o._toggleTooltip(!1)},o.state={isTooltipVisible:!1},o}return o.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.calloutProps,n=e.children,i=e.content,s=e.delay,u=e.directionalHint,l=e.directionalHintForRTL,f=e.hostClassName,d=e.id,v=e.setAriaDescribedBy,h=void 0===v||v,m=e.tooltipProps,g=e.styles,b=e.theme;this._classNames=_(g,{theme:b,className:f});var y=this.state.isTooltipVisible,T=d||Object(a.c)("tooltip"),j=!!(i||m&&m.onRenderContent&&m.onRenderContent()),O=y&&j,P=h&&y&&j?T:void 0;return r.createElement("div",o.__assign({className:this._classNames.root,ref:this._tooltipHost},{onFocusCapture:this._onTooltipMouseEnter},{onBlurCapture:this._hideTooltip},{onMouseEnter:this._onTooltipMouseEnter,onMouseLeave:this._onTooltipMouseLeave,"aria-describedby":P}),n,O&&r.createElement(p.a,o.__assign({id:T,delay:s,content:i,targetElement:this._getTargetElement(),directionalHint:u,directionalHintForRTL:l,calloutProps:Object(a.a)({},t,{onMouseEnter:this._onTooltipMouseEnter,onMouseLeave:this._onTooltipMouseLeave}),onMouseEnter:this._onTooltipMouseEnter,onMouseLeave:this._onTooltipMouseLeave},Object(c.f)(this.props,c.e),m)))},t.prototype.componentWillUnmount=function(){t._currentVisibleTooltip&&t._currentVisibleTooltip===this&&(t._currentVisibleTooltip=void 0)},t.prototype._getTargetElement=function(){if(this._tooltipHost.current){var e=this.props.overflowMode;if(void 0!==e)switch(e){case f.a.Parent:return this._tooltipHost.current.parentElement;case f.a.Self:return this._tooltipHost.current}return this._tooltipHost.current}},t.prototype._toggleTooltip=function(e){var t=this;this.state.isTooltipVisible!==e&&this.setState({isTooltipVisible:e},function(){return t.props.onTooltipToggle&&t.props.onTooltipToggle(t.state.isTooltipVisible)})},t.defaultProps={delay:d.a.medium},t}(l.a)},941:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o=n(0),r=n(2),i=n(146),s=n(58),u=n(319),a=n(1286),c=n(67),l=Object(i.a)(),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._onRenderContent=function(e){return r.createElement("p",{className:t._classNames.subText},e.content)},t}return o.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.calloutProps,i=e.delay,u=e.directionalHint,c=e.directionalHintForRTL,f=e.styles,p=e.id,d=e.maxWidth,_=e.onRenderContent,v=void 0===_?this._onRenderContent:_,h=e.targetElement,m=e.theme;return this._classNames=l(f,{theme:m,className:t||n&&n.className,delay:i,maxWidth:d}),r.createElement(a.a,o.__assign({target:h,directionalHint:u,directionalHintForRTL:c},n,Object(s.f)(this.props,s.e,["id"]),{className:this._classNames.root}),r.createElement("div",{className:this._classNames.content,id:p,role:"tooltip",onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave},v(this.props,this._onRenderContent)))},t.defaultProps={directionalHint:c.DirectionalHint.topCenter,delay:u.a.medium,maxWidth:"364px",calloutProps:{isBeakVisible:!0,beakWidth:16,gapSpace:0,setInitialFocus:!0,doNotLayer:!1}},t}(r.Component)},942:function(e,t,n){"use strict";var o=n(637),r=n(941),i=n(319),s=n(14);n.d(t,"a",function(){return u});var u=Object(o.a)(r.a,function(e){var t=e.className,n=e.delay,o=e.maxWidth,r=e.theme,u=r.palette,a=r.fonts;return{root:["ms-Tooltip",r.fonts.medium,s.AnimationClassNames.fadeIn200,{background:u.white,padding:"8px",animationDelay:"300ms",maxWidth:o},n===i.a.zero&&{animationDelay:"0s"},n===i.a.long&&{animationDelay:"500ms"},t],content:["ms-Tooltip-content",a.small,{color:u.neutralPrimary,wordWrap:"break-word",overflowWrap:"break-word",overflow:"hidden"}],subText:["ms-Tooltip-subtext",{fontSize:"inherit",fontWeight:"inherit",color:"inherit",margin:0}]}},void 0,{scope:"Tooltip"})},992:function(e,t,n){"use strict";var o=n(216),r=n(1160),i=NaN,s=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;t.a=function(e){if("number"==typeof e)return e;if(Object(r.a)(e))return i;if(Object(o.a)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Object(o.a)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=a.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):u.test(e)?i:+e}}}]);
//# sourceMappingURL=owa.vendors~Search.js.map
self.scriptsLoaded['owa.vendors~Search.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.vendors~Search.js'] = (new Date()).getTime();