self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.SurfaceActionsOption.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[381],{11922:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a(303),c=a(5),i=a(519),o=a(9),u=a(56),s=a(4139),d=a(2052),b=a(2051),p=a(669),l=a(1),h=a(266),k=Object(l.action)("pinLikeSurfaceAction");Object(l.orchestrator)(k,function(){return t.__awaiter(void 0,void 0,void 0,function(){return t.__generator(this,function(e){return h.f.importAndExecute().then(function(){if(Object(c.d)("rp-like")&&!Object(u.a)()&&!Object(r.a)(16)&&!Object(s.n)("LikeUnlike")){var e=Object(i.c)(Object(p.a)().readSurfaceActions,Object(h.c)(h.a.SurfaceActions).readSurfaceActions).slice();Object(b.a)("readSurfaceActions",e,"LikeUnlike",!0),Object(d.a)(),Object(r.b)(!0,16);var n=Object(o.a)().ViewStateConfiguration;Object(i.l)([{propertyName:"ListViewBitFlags",propertyType:"Integer32",propertyValue:""+n.ListViewBitFlags}],"OWA.ViewStateConfiguration")}}),[2]})})});var f=k;a.d(n,"pinLikeSurfaceAction",function(){return f})},1669:function(e){e.exports={a:"z4a"}},1723:function(e){e.exports={a:"c5a"}},1726:function(e){e.exports={a:"m5a"}},1733:function(e){e.exports={a:"$4a"}},1734:function(e){e.exports={a:"_4a"}},1955:function(e){e.exports={a:"a5a"}},1960:function(e){e.exports={a:"p5a"}},1967:function(e){e.exports={a:"h5a"}},2160:function(e){e.exports={a:"e5a"}},2164:function(e){e.exports={a:"n5a"}},2599:function(e){e.exports={a:"o5a"}},2600:function(e){e.exports={a:"k5a"}},2601:function(e){e.exports={a:"j5a"}},303:function(e,n,a){"use strict";a.d(n,"a",function(){return c}),a.d(n,"b",function(){return i});var t=a(9),r=a(7);function c(e){return!!(e&Object(t.a)().ViewStateConfiguration.ListViewBitFlags)}var i=Object(r.action)("setBit")(function(e,n){c(n)!==e&&(e?Object(t.a)().ViewStateConfiguration.ListViewBitFlags|=n:Object(t.a)().ViewStateConfiguration.ListViewBitFlags&=~n)})},3777:function(e,n,a){"use strict";a.d(n,"a",function(){return i});var t=a(9),r=a(56),c=a(5);function i(){return Object(r.a)()?Object(c.d)("cmp-encryption")&&Object(t.a)().SessionSettings.IsPremiumConsumerMailbox:Object(c.d)("cmp-manageIRM")&&Object(t.a)().SegmentationSettings.Irm}},3820:function(e,n,a){"use strict";a.d(n,"a",function(){return h}),a.d(n,"c",function(){return k}),a.d(n,"b",function(){return f});var t=a(15),r=a(135),c=a(134),i="resources/images/surfaceActions",o=i+"/attach.svg",u=i+"/attachDark.svg",s=i+"/inlineimage.svg",d=i+"/inlineimageDark.svg",b=i+"/emoji.svg",p=i+"/showribbon.svg",l=i+"/showribbonDark.svg";function h(e){var n,a,i=!1;switch(e){case"AddAttachment":n=Object(r.resolve)(Object(t.q)(),Object(c.c)()?u:o),a=Object(r.resolve)(Object(t.q)(),o),i=!0;break;case"AddInlineImage":n=Object(r.resolve)(Object(t.q)(),Object(c.c)()?d:s),a=Object(r.resolve)(Object(t.q)(),s),i=!0;break;case"AddEmoji":n=Object(r.resolve)(Object(t.q)(),b),i=!0;break;case"ToggleDarkCompose":n="Sunny";break;case"ToggleRibbon":n=Object(r.resolve)(Object(t.q)(),Object(c.c)()?l:p),a=Object(r.resolve)(Object(t.q)(),p),i=!0;break;case"SensitivityMenu":n="MarkAsProtected";break;case"ProtectMessage":n="Encryption";break;case"SaveDraft":n="Save";break;case"InsertSignature":n="InsertSignatureLine";break;case"ShowFrom":n="ArrangeByFrom";break;case"SetImportance":n="Important";break;case"ShowMessageOptions":n="MailOptions";break;case"SwitchBodyType":case"AccChecker":n="OutlookLogo";break;default:n=""}return{iconName:n,fallbackIconName:a||n,isImage:i}}function k(e){var n;switch(e){case"-":n="-";break;case"Reply":n="Reply";break;case"ReplyAll":n="ReplyAll";break;case"Forward":n="Forward";break;case"ReplyByMeeting":n="Calendar";break;case"ReportAbuse":n="ReportHacked";break;case"Delete":n="Delete";break;case"MarkReadUnread":n="Mail";break;case"FlagUnflag":n="Flag";break;case"AssignPolicy":n="Assign";break;case"AddToSafeSenders":n="AddFriend";break;case"MarkJunkNotJunk":n="MailAlert";break;case"MarkAsPhishing":n="Phishing";break;case"Block":n="BlockContact";break;case"CreateRule":n="CreateMailRule";break;case"Print":n="Print";break;case"Translate":n="LocaleLanguage";break;case"ShowInImmersiveReader":n="ReadOutLoud";break;case"ViewMessageSource":n="OpenSource";break;case"Popout":n="OpenInNewWindow";break;case"LikeUnlike":n="Like";break;case"ToggleDarkMode":n="Sunny";break;case"ReplyByIM":case"ReplyAllByIM":n="ChatInviteFriend";break;case"ToggleAmp":n="LightningBolt";break;default:n=""}return{iconName:n,fallbackIconName:n,isImage:!1}}function f(e){var n;switch(e){case"-":n="-";break;case"Delete":n="Delete";break;case"Archive":n="Archive";break;case"PinUnpin":n="Pinned";break;case"ReadUnread":n="Mail";break;case"FlagUnflag":n="Flag";break;case"Move":n="FabricFolder";break;default:n=""}return{iconName:n,fallbackIconName:n,isImage:!1}}},4106:function(e){e.exports={a:"B4a"}},4139:function(e,n,a){"use strict";var t=a(3),r=a(4331);function c(e){return r.a.addinOptionSurfaceItems[e]}var i=a(1669),o=a(1960),u=a(2599),s=a(2164),d=a(1726),b=a(4332),p=a(2600),l=a(2601),h=a(4240),k=a(1967),f=a(4333),O=a(4334),S=a(2160),j=a(4335),I=a(1723),g=a(4155),y=a(4241),m=a(1955),x=a(1733),A=a(1734),v=a(4336),w=a(4263),M=a(4264),G=a(4337),R=a(4338),P=a(4265),B=a(4339),F=a(4340),C=a(4341),T=a(4401),D=a(4342),L=a(4106),U=a(4266),V=a(4),N=a(56);function q(e){switch(e){case"AddAttachment":return Object(V.a)(D.a);case"AddInlineImage":return Object(V.a)(U.a);case"AddEmoji":return Object(V.a)(T.a);case"ToggleRibbon":return Object(V.a)(C.a);case"SaveDraft":return Object(V.a)(F.a);case"InsertSignature":return Object(V.a)(B.a);case"ShowFrom":return Object(V.a)(P.a);case"SetImportance":return Object(V.a)(R.a);case"ShowMessageOptions":return Object(V.a)(G.a);case"SwitchBodyType":return Object(V.a)(M.a);case"SensitivityMenu":return Object(V.a)(w.a);case"ProtectMessage":return Object(V.a)(v.a);case"AccChecker":return Object(V.a)(L.a);case"ToggleDarkCompose":return Object(V.a)(T.n);default:return""}}function E(e){switch(e){case"LikeUnlike":return Object(V.a)(T.d);case"Reply":return Object(V.a)(A.a);case"ReplyAll":return Object(V.a)(x.a);case"Forward":return Object(V.a)(m.a);case"ReplyByMeeting":return Object(V.a)(T.f);case"ReportAbuse":return Object(V.a)(y.a);case"Popout":return Object(V.a)(g.a);case"Delete":return Object(V.a)(T.c);case"MarkReadUnread":return Object(V.a)(I.a);case"FlagUnflag":return Object(V.a)(j.a);case"AssignPolicy":return Object(V.a)(S.a);case"AddToSafeSenders":return Object(V.a)(T.b);case"MarkJunkNotJunk":return Object(V.a)(O.a);case"MarkAsPhishing":return Object(V.a)(T.e);case"Block":return Object(V.b)(Object(V.a)(f.a),"");case"CreateRule":return Object(V.a)(k.a);case"Print":return Object(V.a)(h.a);case"Translate":return Object(V.a)(l.a);case"ShowInImmersiveReader":return Object(V.a)(p.a);case"ViewMessageSource":return Object(N.a)()?Object(V.a)(T.h):Object(V.a)(T.g);case"ToggleDarkMode":return Object(V.a)(b.a);case"ReplyByIM":return Object(V.a)(T.l);case"ReplyAllByIM":return Object(V.a)(T.k);case"ToggleAmp":return Object(V.a)(T.m);default:return""}}function J(e){switch(e){case"None":return Object(V.a)(T.i);case"Delete":return Object(V.a)(d.a);case"Archive":return Object(V.a)(s.a);case"PinUnpin":return Object(V.a)(u.a);case"ReadUnread":return Object(V.a)(T.j);case"FlagUnflag":return Object(V.a)(o.a);case"Move":return Object(V.a)(i.a);default:return""}}var _=a(3820),W=a(4343),$=a(3777),H=a(5),z=a(266),K=a(9),Q=a(134);function X(){var e=[{key:"Reply",hideInGroup:!0,hideInSxS:!1},{key:"ReplyAll",hideInGroup:!1,hideInSxS:!1},{key:"Forward",hideInGroup:!1,hideInSxS:!1}];return Object(H.d)("rp-replyByMeeting")&&e.push({key:"-",hideInGroup:!1,hideInSxS:!1},{key:"ReplyByMeeting",hideInGroup:!0,hideInSxS:!0}),e.push({key:"-",hideInGroup:!1,hideInSxS:!1},{key:"Delete",hideInGroup:!1,hideInSxS:!0},{key:"-",hideInGroup:!1,hideInSxS:!1},{key:"MarkReadUnread",hideInGroup:!1,hideInSxS:!0},{key:"FlagUnflag",hideInGroup:!0,hideInSxS:!0},{key:"-",hideInGroup:!1,hideInSxS:!1}),Object(H.d)("fwk-skypeBusinessV2")&&e.push({key:"ReplyByIM",hideInGroup:!0,hideInSxS:!1},{key:"ReplyAllByIM",hideInGroup:!0,hideInSxS:!1},{key:"-",hideInGroup:!0,hideInSxS:!1}),Object(K.a)().SessionSettings.IsShadowMailbox||e.push({key:"AddToSafeSenders",hideInGroup:!0,hideInSxS:!0},{key:"MarkJunkNotJunk",hideInGroup:!0,hideInSxS:!0},{key:"MarkAsPhishing",hideInGroup:!0,hideInSxS:!0},{key:"Block",hideInGroup:!0,hideInSxS:!0},{key:"ReportAbuse",hideInGroup:!Object(N.a)(),hideInSxS:!0},{key:"-",hideInGroup:!1,hideInSxS:!1}),!Object(N.a)()&&Object(H.d)("tri-retentionPolicies")&&e.push({key:"AssignPolicy",hideInGroup:!1,hideInSxS:!0},{key:"-",hideInGroup:!1,hideInSxS:!1}),e.push({key:"CreateRule",hideInGroup:!0,hideInSxS:!0},{key:"Print",hideInGroup:!1,hideInSxS:!1}),Object(H.d)("rp-inlineTranslationManual")&&e.push({key:"Translate",hideInGroup:!0,hideInSxS:!0}),Object(Q.c)()&&e.push({key:"ToggleDarkMode",hideInGroup:!1,hideInSxS:!1}),Object(H.d)("rp-immersiveReader")&&e.push({key:"ShowInImmersiveReader",hideInGroup:!1,hideInSxS:!0}),e.push({key:"ViewMessageSource",hideInGroup:!1,hideInSxS:!0}),e.push({key:"Popout",hideInGroup:!1,hideInSxS:!0}),Object(H.d)("rp-like")&&!Object(N.a)()&&e.push({key:"LikeUnlike",hideInGroup:!1,hideInSxS:!0}),Object(H.d)("rp-amp")&&Object(N.a)()&&e.push({key:"ToggleAmp",hideInGroup:!1,hideInSxS:!0}),e}function Y(){var e=[{key:"AddAttachment",hideInGroup:!1},{key:"AddInlineImage",hideInGroup:!1}];return e.push({key:"AddEmoji",hideInGroup:!1}),Object(H.d)("cmp-dictation")&&e.push({key:"ToggleDictation",hideInGroup:!1}),e=e.concat([{key:"ToggleRibbon",hideInGroup:!1},{key:"SaveDraft",hideInGroup:!1},{key:"InsertSignature",hideInGroup:!1},{key:"ShowFrom",hideInGroup:!1},{key:"SetImportance",hideInGroup:!1},{key:"SwitchBodyType",hideInGroup:!1},{key:"AccChecker",hideInGroup:!1}]),Object(H.d)("cmp-clp")&&!Object(N.a)()&&e.push({key:"SensitivityMenu",hideInGroup:!1}),Object($.a)()&&e.push({key:"ProtectMessage",hideInGroup:!1}),Object(W.a)()&&e.push({key:"ShowMessageOptions",hideInGroup:!1}),e}function Z(e){return"Reply"==e||"ReplyAll"==e||"Forward"==e}function ee(e){return-1!==Object(z.c)(z.a.SurfaceActions).readSurfaceActions.indexOf(e)}var ne=a(18);function ae(e,n,a,t){var r;t?r=t:(r="Pinned",a&&a.renderedInOverflow&&(r=a.isPinned?"Overflow":"NotPinned")),Object(ne.o)(e?"CSACountComposeUserAction":"CSACountReadUserAction",[n,r])}function te(e){e.subMenuProps&&e.subMenuProps.items.forEach(function(e){e.renderedInOverflow=!0})}function re(e){e.subMenuProps&&e.subMenuProps.items.forEach(function(e){e.renderedInOverflow=!1})}a.d(n,"j",function(){return ie}),a.d(n,"b",function(){return c}),a.d(n,"c",function(){return q}),a.d(n,"g",function(){return E}),a.d(n,"f",function(){return J}),a.d(n,"a",function(){return"-"}),a.d(n,"d",function(){return _.a}),a.d(n,"h",function(){return _.c}),a.d(n,"e",function(){return Y}),a.d(n,"i",function(){return X}),a.d(n,"o",function(){return Z}),a.d(n,"n",function(){return ee}),a.d(n,"k",function(){return ae}),a.d(n,"m",function(){return te}),a.d(n,"l",function(){return re});var ce=new t.c(function(){return a.e(380).then(a.bind(null,11913))}),ie=new t.a(ce,function(e){return e.setAddinOptionSurfaceItems})},4155:function(e){e.exports={a:"lVa"}},4240:function(e){e.exports={a:"i5a"}},4241:function(e){e.exports={a:"b5a"}},4263:function(e){e.exports={a:"Y4a"}},4264:function(e){e.exports={a:"X4a"}},4265:function(e){e.exports={a:"U4a"}},4266:function(e){e.exports={a:"A4a"}},4331:function(e,n,a){"use strict";var t=a(1),r=Object(t.createStore)("SurfaceActionsStore",{addinOptionSurfaceItems:{}})();n.a=r},4332:function(e){e.exports={a:"l5a"}},4333:function(e){e.exports={a:"g5a"}},4334:function(e){e.exports={a:"f5a"}},4335:function(e){e.exports={a:"d5a"}},4336:function(e){e.exports={a:"Z4a"}},4337:function(e){e.exports={a:"W4a"}},4338:function(e){e.exports={a:"V4a"}},4339:function(e){e.exports={a:"T4a"}},4340:function(e){e.exports={a:"S4a"}},4341:function(e){e.exports={a:"R4a"}},4342:function(e){e.exports={a:"C4a"}},4343:function(e,n,a){"use strict";a.d(n,"a",function(){return c});var t=a(5),r=a(27);function c(){return!Object(r.n)()&&(Object(t.d)("cmp-requestReadReceipts")||Object(t.d)("cmp-requestDeliveryReceipts")||Object(t.d)("cmp-setMessageSensitivity")||Object(t.d)("cmp-smime"))}},4401:function(e){e.exports={a:"D4a",d:"E4a",f:"F4a",c:"G4a",b:"H4a",e:"I4a",h:"J4a",g:"K4a",i:"L4a",j:"M4a",l:"N4a",k:"O4a",m:"P4a",n:"Q4a"}}},0,[0,1,30,474,155,3,19,29,67,307,463,87,464,98]]);
//# sourceMappingURL=owa.SurfaceActionsOption.js.map
self.scriptsLoaded['owa.SurfaceActionsOption.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.SurfaceActionsOption.js'] = (new Date()).getTime();