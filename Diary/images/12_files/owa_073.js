self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.BundleName.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[119],{11820:function(e,t,i){"use strict";i.r(t);var r=i(0),n=i(7783),a=i(4),o=i(20),l=i(2),s=i(18),u=i(9),c=i(363),p=i(626),d=i(9423),m=i(5),h=i(4485);function f(){return r.__awaiter(this,void 0,void 0,function(){var e;return r.__generator(this,function(t){switch(t.label){case 0:return[4,Object(h.a)()];case 1:return e=t.sent(),Object(m.d)("auth-LeftNavUpsellFreeServicesTreatment")?[2,_.upsellFreeServiceStorage]:Object(m.d)("auth-LeftNavUpsellFreeServicesControl")?[2,_.upsellFreeServiceControl]:"NonPremiumTravelUpsell"==e?[2,_.regularTravelUpsell]:"NonPremiumDomainConnectUpsell"==e?[2,_.regularDomainUpsell]:[2,_.regularUpsell]}})})}var b="resources/leftNavUpsellIcons/premium-diamond-01.svg",_={regularUpsell:{isHidden:!1,url:"https://go.microsoft.com/fwlink/?linkid=867712&WT.mc_id=PROD_OL-Web_InApp_LeftNav_Upgrade&ep=",datapointNameShow:"LeftNavPremiumUpsellDisplayed",datapointNameClicked:"LeftNavPremiumUpsellClicked",buttonText:Object(a.a)(d.b),buttonTextLine2:Object(a.a)(d.c),buttonIconPath:b},regularTravelUpsell:{isHidden:!1,url:"https://go.microsoft.com/fwlink/?linkid=2005900&WT.mc_id=PROD_OL-Web_InApp_LeftNav_TravelUpgrade&ep=",datapointNameShow:"LeftNavPremiumUpsellDisplayed",datapointNameClicked:"LeftNavPremiumUpsellClicked",buttonText:Object(a.a)(d.b),buttonTextLine2:Object(a.a)(d.c),buttonIconPath:b},regularDomainUpsell:{isHidden:!1,url:"https://go.microsoft.com/fwlink/?linkid=2005900&WT.mc_id=PROD_OL-Web_InApp_LeftNav_DomainUpgrade&ep=",datapointNameShow:"LeftNavPremiumUpsellDisplayed",datapointNameClicked:"LeftNavPremiumUpsellClicked",buttonText:Object(a.a)(d.b),buttonTextLine2:Object(a.a)(d.c),buttonIconPath:b},noCCTreatmentRenewUpsell:{isHidden:!1,url:"https://go.microsoft.com/fwlink/?linkid=867712&WT.mc_id=PROD_OL-Web_InApp_LeftNav_NoCCTreatmentRenew&ep=",datapointNameShow:"LeftNavPremiumUpsellRenewNoCCTreatment",datapointNameClicked:"LeftNavPremiumUpsellRenewClickedNoCCTreatment",buttonText:Object(a.a)(n.a),buttonTextLine2:"",buttonIconPath:b},noCCTreatmentReactivateUpsell:{isHidden:!1,url:"https://go.microsoft.com/fwlink/?linkid=867712&WT.mc_id=PROD_OL-Web_InApp_LeftNav_NoCCTreatmentReactivate&ep=",datapointNameShow:"LeftNavPremiumUpsellReactivateDisplayedNoCCTreatment",datapointNameClicked:"LeftNavPremiumUpsellReactivateClickedNoCCTreatment",buttonText:Object(a.a)(d.a),buttonTextLine2:Object(a.a)(d.c),buttonIconPath:b},upsellFreeServiceControl:{isHidden:!1,url:"https://go.microsoft.com/fwlink/?linkid=867712&WT.mc_id=PROD_OL-Web_InApp_LeftNav_FreeServicesControlUpgrade&ep=",datapointNameShow:"LeftNavPremiumUpsellDisplayedFreeServiceControl",datapointNameClicked:"LeftNavPremiumUpsellClickedFreeServiceControl",buttonText:Object(a.a)(d.d),buttonTextLine2:"",buttonIconPath:b},upsellFreeServiceStorage:{isHidden:!1,url:"https://go.microsoft.com/fwlink/?linkid=867712&WT.mc_id=PROD_OL-Web_InApp_LeftNav_FreeServicesTreatmentOD&ep=",datapointNameShow:"LeftNavPremiumUpsellDisplayedFreeServiceStorage",datapointNameClicked:"LeftNavPremiumUpsellClickedFreeServiceStorage",buttonText:Object(a.a)(d.e),buttonTextLine2:"",buttonIconPath:"resources/leftNavUpsellIcons/onedriveballoons.svg"},upsellFreeServiceOffice:{isHidden:!1,url:"https://go.microsoft.com/fwlink/?linkid=867712&WT.mc_id=PROD_OL-Web_InApp_LeftNav_FreeServicesTreatmentWXP&ep=",datapointNameShow:"LeftNavPremiumUpsellDisplayedFreeServiceOffice",datapointNameClicked:"LeftNavPremiumUpsellClickedFreeServiceOffice",buttonText:Object(a.a)(d.f),buttonTextLine2:"",buttonIconPath:"resources/leftNavUpsellIcons/officeapps.svg"},upsellFreeServicePremiumFeatures:{isHidden:!1,url:"https://go.microsoft.com/fwlink/?linkid=867712&WT.mc_id=PROD_OL-Web_InApp_LeftNav_FreeServicesTreatmentUpgrade&ep=",datapointNameShow:"LeftNavPremiumUpsellDisplayedFreeServicePremiumFeatures",datapointNameClicked:"LeftNavPremiumUpsellClickedFreeServicePremiumFeatures",buttonText:Object(a.a)(d.g),buttonTextLine2:"",buttonIconPath:b}},v=_,g=i(1),w=Object(g.createStore)("LeftNavUpsellState",{isHidden:!0,url:"",datapointNameShow:"",datapointNameClicked:"",buttonText:"",buttonTextLine2:"",buttonIconPath:""})(),x=Object(g.mutatorAction)("setUpsellState",function(e){w.isHidden=e.isHidden,w.url=e.url,w.datapointNameShow=e.datapointNameShow,w.datapointNameClicked=e.datapointNameClicked,w.buttonText=e.buttonText,w.buttonTextLine2=e.buttonTextLine2,w.buttonIconPath=e.buttonIconPath}),P=i(1412),N=i.n(P),S=i(3),L=new S.c(function(){return i.e(450).then(i.bind(null,11780))}),j=new S.a(L,function(e){return e.launchOwaPremiumUpsellModal}),q=i(316),I=i(15),k=i(9424),U=i(126).bind(k),F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.componentDidMount=function(){Object(c.b)()?this.displayLeftNavUpsellForPremiumUser():this.displayLeftNavUpsellForNonPremiumUser()},t.prototype.render=function(){var e=k.display;return w.isHidden?e=k.hide:Object(s.o)(w.datapointNameShow),l.createElement("div",{onClick:this.navigateTo,className:e},l.createElement("button",{className:k.upselllink},l.createElement("div",{className:U(k.prose,!Object(q.c)()&&k.horizontalModuleSwitcherPadding)},l.createElement("span",{className:k.suffix},w.buttonText," ",w.buttonTextLine2)),l.createElement("div",{className:k.leftnavOrnament},l.createElement("img",{className:k.leftNavUpsellSvg,src:Object(I.q)()+w.buttonIconPath}))))},t.prototype.navigateTo=function(e){if(e.stopPropagation(),Object(m.d)("auth-leftNavInAppUpsell"))j.importAndExecute();else{Object(s.o)(w.datapointNameClicked);var t=w.url+encodeURIComponent(Object(u.a)().SessionSettings.EncryptedUserPuid);window.open(t,"_blank"),w.buttonText==Object(a.a)(n.a)&&(x({isHidden:!0,url:"",datapointNameShow:"",datapointNameClicked:"",buttonText:"",buttonTextLine2:"",buttonIconPath:""}),Object(p.f)())}var i,r,o;Object(m.d)("auth-LeftNavUpsellFreeServicesTreatment")&&x((i=w,r=[_.upsellFreeServiceStorage,_.upsellFreeServiceOffice,_.upsellFreeServicePremiumFeatures],-1==(o=function(e,t){for(var i=0;i<e.length;i++)if(t(e[i]))return i;return-1}(r,function(e){return e.url==i.url}))?i:r[o+1>=r.length?0:o+1]))},t.prototype.displayLeftNavUpsellForPremiumUser=function(){var e=this;Object(m.d)("auth-leftNavPremiumUpsellNoCCTreatment")&&Object(p.c)().then(function(t){t&&(t.subscriptions&&0==t.subscriptions.length?Object(p.a)().then(function(t){e.processMDollarSubscriptionResponseForPremiumUser(t)}):e.processMDollarSubscriptionResponseForPremiumUser(t))})},t.prototype.displayLeftNavUpsellForNonPremiumUser=function(){return r.__awaiter(this,void 0,void 0,function(){var e,t=this;return r.__generator(this,function(i){switch(i.label){case 0:return Object(m.d)("auth-leftNavPremiumUpsellNoCCTreatment")?(Object(p.c)().then(function(e){return r.__awaiter(t,void 0,void 0,function(){var t;return r.__generator(this,function(i){switch(i.label){case 0:return e?e.subscriptions&&0==e.subscriptions.length?(t=x,[4,f()]):[3,2]:[3,3];case 1:return t.apply(void 0,[i.sent()]),[3,3];case 2:this.processMDollarSubscriptionResponseForNonPremiumUser(e),i.label=3;case 3:return[2]}})})}),[3,3]):[3,1];case 1:return e=x,[4,f()];case 2:e.apply(void 0,[i.sent()]),i.label=3;case 3:return[2]}})})},t.prototype.processMDollarSubscriptionResponseForPremiumUser=function(e){var t=this.retriveUserMDollarSubscriptionInfo(e);this.isMDollarSubscriptionEligibleForRenew(t)&&x(v.noCCTreatmentRenewUpsell)},t.prototype.processMDollarSubscriptionResponseForNonPremiumUser=function(e){return r.__awaiter(this,void 0,void 0,function(){var t,i;return r.__generator(this,function(r){switch(r.label){case 0:return t=this.retriveUserMDollarSubscriptionInfo(e),this.isEligibleForReactivate(t)?(x(v.noCCTreatmentReactivateUpsell),[3,3]):[3,1];case 1:return i=x,[4,f()];case 2:i.apply(void 0,[r.sent()]),r.label=3;case 3:return[2]}})})},t.prototype.retriveUserMDollarSubscriptionInfo=function(e){var t={expireDate:void 0,isAutoRenew:!1,isActive:!1,isSuppressedOfferId:!1,isWithinResellerRestrictionPeriod:!1};if(e&&e.subscriptions&&e.subscriptions.length){e.subscriptions.sort(function(e,t){return new Date(t.endDate).getTime()-new Date(e.endDate).getTime()});var i=e.subscriptions[0];t.isActive=!0,t.isAutoRenew=i.autoRenew,t.expireDate=new Date(i.endDate),t.isWithinResellerRestrictionPeriod=i.isWithinResellerRestrictionPeriod}return t},t.prototype.isMDollarSubscriptionEligibleForRenew=function(e){var t=new Date;return!(!(e.expireDate&&e.isActive&&e.expireDate>t&&N()(e.expireDate,-10)<t)||e.isAutoRenew||e.isWithinResellerRestrictionPeriod)},t.prototype.isEligibleForReactivate=function(e){var t=new Date;return!!(e.expireDate&&e.expireDate<t&&N()(e.expireDate,10)>t)},t=r.__decorate([o.observer],t)}(l.Component);i.d(t,"LeftnavUpsell",function(){return F})},4028:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var r=i(1),n=Object(r.createStore)("premiumTravelStore",{isInit:!1,premiumExperienceType:"None",isActivated:!1,savings:""})()},4485:function(e,t,i){"use strict";var r,n=i(4028),a=i(0),o=i(75),l="ows/api/v1/PremiumUserExperience";function s(e){return a.__awaiter(this,void 0,void 0,function(){var t;return a.__generator(this,function(i){return r||(t=e,r=Object(o.d)(l,t)),[2,r]})})}var u,c="ows/api/beta/PremiumTravel";function p(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(e){return u||(u=Object(o.b)(c)),[2,u]})})}var d=i(1),m=Object(d.mutatorAction)("persistResponse",function(e){e&&(n.a.premiumExperienceType=e),n.a.isInit=!0}),h=i(6),f=i(166),b=Object(d.mutatorAction)("persistResponse",function(e){if(e.length&&e[0].lastModifiedDateTime){var t=Object(h.Wb)(e[0].lastModifiedDateTime);n.a.isActivated=Object(h.vb)(Object(h.b)(Object(f.g)(),-48),t),n.a.isActivated&&(n.a.savings=e[0].savings)}}),_=i(5),v=i(18),g=i(27),w=i(907);function x(){return a.__awaiter(this,void 0,void 0,function(){var e,t,i,r;return a.__generator(this,function(a){switch(a.label){case 0:return n.a.isInit?[3,5]:(e=[],Object(_.d)("auth-PremiumTravelExpcf")&&e.push("auth-premiumtravelexpcf"),Object(_.d)("auth-PremiumTravelExp")&&e.push("auth-premiumtravelexp"),Object(_.d)("auth-PremiumTravelActivateRamp")&&e.push("auth-premiumtravelactivateramp"),Object(_.d)("auth-PremiumTravelUpsellRamp")&&e.push("auth-premiumtravelupsellramp"),[4,s(e)]);case 1:return t=a.sent(),m(t),"None"==t?[3,3]:(Object(v.o)("GetUserExperienceType",{userPuid:Object(g.f)().SessionSettings.UserPuid.toString(),clientFlights:e.toString(),experienceType:t.toString()},{isCore:!0}),[4,Object(w.a)()]);case 2:i=a.sent(),Object(v.o)("GetUserPersistedFlights",{userPuid:Object(g.f)().SessionSettings.UserPuid.toString(),sdsPersistedFlights:i.flightNames.toString()},{isCore:!0}),a.label=3;case 3:return[4,p()];case 4:r=a.sent(),b(r),a.label=5;case 5:return[2,n.a.premiumExperienceType]}})})}i.d(t,"a",function(){return x})},7783:function(e){e.exports={a:"n8b"}},9423:function(e){e.exports={b:"g8b",c:"h8b",a:"i8b",d:"j8b",e:"k8b",f:"l8b",g:"m8b"}},9424:function(e,t,i){var r=i(9425),n=i(44);"string"==typeof r&&(r=[[e.i,r]]);for(var a=0;a<r.length;a++)n.loadStyles(r[a][1],!1);r.locals&&(e.exports=r.locals)},9425:function(e,t,i){(t=e.exports=i(43)(!1)).push([e.i,'._4EQjiwXF4KIhqby_Qqf8J{position:relative;-webkit-appearance:none;cursor:pointer;font-family:inherit;display:block;bottom:0;overflow:hidden;width:100%}html[dir] ._4EQjiwXF4KIhqby_Qqf8J{border:none;border-radius:0;-webkit-transition:all .3s;transition:all .3s;background-color:transparent}html[dir=ltr] ._4EQjiwXF4KIhqby_Qqf8J{text-align:left;-webkit-box-shadow:inset -1px 0 0 "[theme:neutralLight, default:#eaeaea]",inset 0 1px 0 "[theme:neutralLight, default:#eaeaea]",inset 0 -1px 0 transparent;box-shadow:inset -1px 0 0 "[theme:neutralLight, default:#eaeaea]",inset 0 1px 0 "[theme:neutralLight, default:#eaeaea]",inset 0 -1px 0 transparent;left:0}html[dir=rtl] ._4EQjiwXF4KIhqby_Qqf8J{text-align:right;-webkit-box-shadow:inset 1px 0 0 "[theme:neutralLight, default:#eaeaea]",inset 0 1px 0 "[theme:neutralLight, default:#eaeaea]",inset 0 -1px 0 transparent;box-shadow:inset 1px 0 0 "[theme:neutralLight, default:#eaeaea]",inset 0 1px 0 "[theme:neutralLight, default:#eaeaea]",inset 0 -1px 0 transparent;right:0}html[dir] ._4EQjiwXF4KIhqby_Qqf8J:hover{background-color:"[theme:white, default:#ffffff]"}html[dir=ltr] ._4EQjiwXF4KIhqby_Qqf8J:hover{-webkit-box-shadow:inset -1px 0 0 "[theme:neutralLight, default:#eaeaea]",inset 0 1px 0 "[theme:neutralLight, default:#eaeaea]",inset 0 -3px 0 "[theme:headerButtonsBackground, default:#0078D4]";box-shadow:inset -1px 0 0 "[theme:neutralLight, default:#eaeaea]",inset 0 1px 0 "[theme:neutralLight, default:#eaeaea]",inset 0 -3px 0 "[theme:headerButtonsBackground, default:#0078D4]"}html[dir=rtl] ._4EQjiwXF4KIhqby_Qqf8J:hover{-webkit-box-shadow:inset 1px 0 0 "[theme:neutralLight, default:#eaeaea]",inset 0 1px 0 "[theme:neutralLight, default:#eaeaea]",inset 0 -3px 0 "[theme:headerButtonsBackground, default:#0078D4]";box-shadow:inset 1px 0 0 "[theme:neutralLight, default:#eaeaea]",inset 0 1px 0 "[theme:neutralLight, default:#eaeaea]",inset 0 -3px 0 "[theme:headerButtonsBackground, default:#0078D4]"}._4EQjiwXF4KIhqby_Qqf8J ._2IRXAzEns9mC_AEM2qqgku{position:absolute;top:14px;width:14px;height:14px}html[dir=ltr] ._4EQjiwXF4KIhqby_Qqf8J ._2IRXAzEns9mC_AEM2qqgku{left:17px}html[dir=rtl] ._4EQjiwXF4KIhqby_Qqf8J ._2IRXAzEns9mC_AEM2qqgku{right:17px}._4EQjiwXF4KIhqby_Qqf8J .yrVqcd1cISgnRvUWqsgQS{position:absolute;top:27px;width:15px;height:15px}html[dir=ltr] ._4EQjiwXF4KIhqby_Qqf8J .yrVqcd1cISgnRvUWqsgQS{left:17px}html[dir=rtl] ._4EQjiwXF4KIhqby_Qqf8J .yrVqcd1cISgnRvUWqsgQS{right:17px}._4EQjiwXF4KIhqby_Qqf8J ._3SIlLPSIgUBZE2fACs9gMq{display:block;width:100%;height:100%}html[dir] ._4EQjiwXF4KIhqby_Qqf8J ._3SIlLPSIgUBZE2fACs9gMq{-webkit-transition:all .25s;transition:all .25s}._4EQjiwXF4KIhqby_Qqf8J ._3SIlLPSIgUBZE2fACs9gMq ._3l9XcnK_LFFMOxGCXDHNX_{fill:"[theme:neutralLighter, default:#f4f4f4]"}html[dir] ._4EQjiwXF4KIhqby_Qqf8J ._3SIlLPSIgUBZE2fACs9gMq ._3l9XcnK_LFFMOxGCXDHNX_{-webkit-transition:all .25s;transition:all .25s}._4EQjiwXF4KIhqby_Qqf8J ._3SIlLPSIgUBZE2fACs9gMq .AcFQdUontxurqAGH4emGs{fill:"[theme:neutralSecondary, default:#666666]"}html[dir] ._4EQjiwXF4KIhqby_Qqf8J ._3SIlLPSIgUBZE2fACs9gMq .AcFQdUontxurqAGH4emGs{-webkit-transition:all .25s;transition:all .25s}html[dir] ._4EQjiwXF4KIhqby_Qqf8J:hover ._3SIlLPSIgUBZE2fACs9gMq{-webkit-transform:translateY(3%) scale(1.2);transform:translateY(3%) scale(1.2)}._4EQjiwXF4KIhqby_Qqf8J .hB0NYkYOd4MPMBinuKP1H{display:block;width:auto;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;position:relative}html[dir=ltr] ._4EQjiwXF4KIhqby_Qqf8J .hB0NYkYOd4MPMBinuKP1H{margin-left:42px}html[dir=rtl] ._4EQjiwXF4KIhqby_Qqf8J .hB0NYkYOd4MPMBinuKP1H{margin-right:42px}html[dir=ltr] ._4EQjiwXF4KIhqby_Qqf8J .hB0NYkYOd4MPMBinuKP1H.c5H4tLo1SPpH08WkLewbM{margin-left:56px}html[dir=rtl] ._4EQjiwXF4KIhqby_Qqf8J .hB0NYkYOd4MPMBinuKP1H.c5H4tLo1SPpH08WkLewbM{margin-right:56px}._4EQjiwXF4KIhqby_Qqf8J ._1joAcpANtQKeRxr6ALkJpt,._4EQjiwXF4KIhqby_Qqf8J ._2kV85sDX_mKePc7CEi5Bz2{font-size:.8125rem!important;line-height:1.3;color:"[theme:neutralPrimary, default:#333333]";display:inline-block;max-width:156px!important}html[dir=ltr] ._4EQjiwXF4KIhqby_Qqf8J ._1joAcpANtQKeRxr6ALkJpt,html[dir=ltr] ._4EQjiwXF4KIhqby_Qqf8J ._2kV85sDX_mKePc7CEi5Bz2{padding:12px 40px 15px 0}html[dir=rtl] ._4EQjiwXF4KIhqby_Qqf8J ._1joAcpANtQKeRxr6ALkJpt,html[dir=rtl] ._4EQjiwXF4KIhqby_Qqf8J ._2kV85sDX_mKePc7CEi5Bz2{padding:12px 0 15px 40px}._4EQjiwXF4KIhqby_Qqf8J ._1joAcpANtQKeRxr6ALkJpt{font-size:.6875rem;color:"[theme:neutralSecondary, default:#666666]";top:12px}._4EQjiwXF4KIhqby_Qqf8J ._2kV85sDX_mKePc7CEi5Bz2{top:26px;font-size:.875rem;color:"[theme:neutralPrimary, default:#333333]"}.ujG11jzxzxRaphUJ08fBT{display:none!important}._2F6rWwLisyawGGg32JOcop{display:block}',""]),t.locals={upselllink:"_4EQjiwXF4KIhqby_Qqf8J",leftnavOrnament:"_2IRXAzEns9mC_AEM2qqgku",ornament:"yrVqcd1cISgnRvUWqsgQS",leftNavUpsellSvg:"_3SIlLPSIgUBZE2fACs9gMq",st0:"_3l9XcnK_LFFMOxGCXDHNX_",st1:"AcFQdUontxurqAGH4emGs",prose:"hB0NYkYOd4MPMBinuKP1H",horizontalModuleSwitcherPadding:"c5H4tLo1SPpH08WkLewbM",prefix:"_1joAcpANtQKeRxr6ALkJpt",suffix:"_2kV85sDX_mKePc7CEi5Bz2",hide:"ujG11jzxzxRaphUJ08fBT",display:"_2F6rWwLisyawGGg32JOcop"}}},0,[3,19,29,67,307,463,87,464,98,473,151]]);
//# sourceMappingURL=owa.BundleName.js.map
self.scriptsLoaded['owa.BundleName.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.BundleName.js'] = (new Date()).getTime();