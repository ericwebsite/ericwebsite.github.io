self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.AllowedOptions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[97],{1162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(500),o=n(501),i=n(502),u=n(226);t.getJsonRequestHeader=function(e){return r.default({RequestServerVersion:"Exchange2015",TimeZoneContext:o.default({TimeZoneDefinition:i.default({Id:null!=e?e:"Pacific Standard Time"})})})},t.getExtendedPropertyUri=function(e,t,n){return u.default({PropertySetId:e,PropertyName:t,PropertyType:n})}},11863:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),i=n(1134),u=Object(o.mutatorAction)("SET_ALLOWED_OPTIONS",function(e){Object(i.a)().allowedOptions=e}),a=n(8831),d=n.n(a),c=n(1162);var s=n(5),l=void 0;function f(){return r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(e){switch(e.label){case 0:return Object(s.d)("fwk-getAllowedOptions")?(l||(l=d()({Header:Object(c.getJsonRequestHeader)()}).then(function(e){return u(e.AllowedOptions)})),[4,l]):[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}n.d(t,"loadAllowedOptions",function(){return f})},8831:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(59),o=n(8832);t.default=function(e,t){return void 0===e||e.__type||(e=o.default(e)),r.makeServiceRequest("GetAllowedOptions",e,t)}},8832:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){return r.__assign({__type:"GetAllowedOptionsRequest:#Exchange"},e)}}}]);
//# sourceMappingURL=owa.AllowedOptions.js.map
self.scriptsLoaded['owa.AllowedOptions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.AllowedOptions.js'] = (new Date()).getTime();