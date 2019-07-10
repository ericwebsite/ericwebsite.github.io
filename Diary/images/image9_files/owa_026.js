self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.CharmsCatalog.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[150],{11819:function(r,e,n){"use strict";n.r(e);var t=n(0),o=n(666),a=n(9),c=n(74),l=n(75),i=n(12),u="ows/v1.0/CalendarIcons/?AssetType=svg&Lang=",s=2,f=null;var d=n(7);function h(r){var e,n,o={IconId:r.iconId,Name:r.name,LocalizedName:r.locName,SvgFile:r.svgFile,Keywords:[],IsInDefaultSet:r.isInDefaultSet,SvgHtmlText:""};if(null!=r.keywords)try{for(var a=t.__values(r.keywords),c=a.next();!c.done;c=a.next()){var l=c.value;o.Keywords.push(l)}}catch(r){e={error:r}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o}var v=Object(d.action)("setCharmInfoInMap")(Object(d.select)({charmStore:function(){return o.a}})(function(r,e){var n=e.charmStore;return new Promise(function(e){var o,a;if(null==n||null==n.charmInfoMap||null==r||null==r.icons)return e();try{for(var c=t.__values(r.icons),l=c.next();!l.done;l=c.next()){var i=l.value,u=h(i);n.charmInfoMap.set(i.iconId.toString(),u)}}catch(r){o={error:r}}finally{try{l&&!l.done&&(a=c.return)&&a.call(c)}finally{if(o)throw o.error}}return e()})})),m=Object(d.action)("setCharmKeywordsInMap")(Object(d.select)({charmStore:function(){return o.a}})(function(r){var e=r.charmStore;return new Promise(function(r){var n,o;if(null==e||null==e.keywordsMap||null==e.charmInfoMapMaxId)return r();if(e.keywordsMap.size>3)return r();for(var a=0;a<=e.charmInfoMapMaxId;a++){var c=e.charmInfoMap.get(a.toString());if(null!=c)try{for(var l=(n=void 0,t.__values(c.Keywords)),i=l.next();!i.done;i=l.next()){var u=i.value;if(!e.keywordsMap.has(u)){var s={Keyword:u,IconId:c.IconId};e.keywordsMap.set(u.toLocaleLowerCase(),s)}}}catch(r){n={error:r}}finally{try{i&&!i.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}}return r()})}));var I=Object(d.action)("loadCharmsCatalog")(Object(d.select)({charmStore:function(){return o.a}})(function(r){var e=r.charmStore;return new Promise(function(r){var n=function(){if(null!=f)return f;var r=Object(a.a)(),e="";if(r&&r.SessionSettings&&!Object(c.b)(r.SessionSettings.UserCulture)&&(e=r.SessionSettings.UserCulture.toLowerCase()),e.length<s)return i.c.error("[getCalendarIconsFromService] Failed to get locale, got: "+e+"."),null;var n=u+e;return f=new Promise(function(r){Object(l.b)(n).then(function(n){return null!=n?(i.c.info("[getCalendarIconsFromService] Got response for locale: "+e+"."),r(n)):(i.c.error("[getCalendarIconsFromService] Failed to get response for locale: "+e+"."),r(null))})})}();null!=n&&n.then(function(r){return null!=r&&null!=r.icons&&r.icons.length>0?(v(r),e.charmInfoMapMaxId=function(r){var e,n,o=0;try{for(var a=t.__values(r),c=a.next();!c.done;c=a.next()){var l=c.value;o<l.iconId&&(o=l.iconId)}}catch(r){e={error:r}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o}(r.icons),m(),void i.c.info("[loadCharmsCatalog] Loaded charms catalog into the charms store.")):void i.c.info("[loadCharmsCatalog] Failed to load charms from service. Continuing without charms.")}).then(function(){return r()})})})),w=n(6517);function g(r,e){return t.__awaiter(this,void 0,void 0,function(){return t.__generator(this,function(e){switch(e.label){case 0:return[4,Object(w.a)(r.SvgFile).then(function(e){r.SvgHtmlText=e})];case 1:return e.sent(),i.c.info("[setCharmInfoWithUpdatedSvgText] complete, iconId: "+r.IconId),[2]}})})}var S=Object(d.action)("loadCharmSvgTextInMap")(Object(d.select)({charmStore:function(){return o.a}})(function(r,e){return t.__awaiter(this,void 0,void 0,function(){var n;return t.__generator(this,function(t){switch(t.label){case 0:return null==r||null==e||null==e.charmStore||null==e.charmStore.charmInfoMapMaxId?[2]:null==(n=e.charmStore.charmInfoMap.get(r.toString()))||null!=n.SvgHtmlText&&""!=n.SvgHtmlText?[3,2]:[4,g(n,e.charmStore)];case 1:t.sent(),e.charmStore.charmInfoMap.set(n.IconId.toString(),n),t.label=2;case 2:return[2]}})})}));n.d(e,"loadCharmsCatalog",function(){return I}),n.d(e,"loadCharmSvgTextInMap",function(){return S})},6517:function(r,e,n){"use strict";e.a=function(r){if(null==r||""==r)return Promise.resolve("");var e=new Request(r);return e.headers.append("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),e.headers.append("Accept","application/x-www-form-urlencoded; charset=UTF-8"),fetch(e).then(function(r){return r.text()})}}},0,[463,87]]);
//# sourceMappingURL=owa.CharmsCatalog.js.map
self.scriptsLoaded['owa.CharmsCatalog.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.CharmsCatalog.js'] = (new Date()).getTime();