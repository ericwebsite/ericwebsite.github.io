self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.AdsPanel.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[94],{3528:function(t,e,n){"use strict";n.r(e);var r,o=n(0),i=n(9385),a=n(4),s=n(4446),d=n(5),l=n(4483),c=n(6321),u=n(18),p=n(23),m=n(7617),f=n(1665),h={BREN:"BRPT",PLEN:"PLPL",MXEN:"MXES",DEEN:"DEDE",DKEN:"DKDA",AREN:"ARES",NOEN:"NONB",NLEN:"NLNL",IDEN:"IDID",VNEN:"VNVI",COEN:"COES",CHEN:"CHDE",SEEN:"SESV",AEAR:"AEEN",EGAR:"EGEN",RUEN:"RURU"},g={WAB8NLNL:"WAB8NLNL2",WAB8IEEN:"WAB8IEEN2",WAB2USEN:"OVT2USEN",WAB2CNZH:"WAB2CNZHH",WAB8ESES:"WAB10ESES",WAB2ROW:"WAB1ROW"};function w(){if(!r){r={AdMarket:Object(f.d)(),MUID:Object(f.h)()};var t=Object(f.g)(r.AdMarket);if(r.CountryCode=t[1]||"US",Object(p.a)("orpgc"))r.PageGroupMarketCode=Object(p.a)("orpgc");else if(r.AdMarket&&-1==f.n.indexOf(r.AdMarket.toLowerCase()))r.PageGroupMarketCode="ROW";else{var e=r.CountryCode+(t[0]||"EN");r.PageGroupMarketCode=h[e]||e}}return r}var C,x=null;function v(t,e){w(),x=t;var n=e&&t.ComposeGroupPrefix||t.PageGroupPrefix;r.PageGroup=n+r.PageGroupMarketCode,r.PageGroup=g[r.PageGroup]||r.PageGroup,r.AdSizes=t.Size,r.AllowedFormats=t.AllowedFormats,r.ExternalImpId=function(){var t=(new Date).getTime();window.performance&&"function"==typeof window.performance.now&&(t+=performance.now());return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?n:3&n|8).toString(16)})}()}function b(){return o.__awaiter(this,void 0,void 0,function(){return o.__generator(this,function(t){switch(t.label){case 0:return Object(d.d)("fwk-ads-callBingTopt")?[4,Object(m.a)()]:[3,2];case 1:return[2,t.sent()];case 2:return[2,Object(f.k)()]}})})}function _(t,e){var n,o=new u.a(t);return o.addCustomData(((n=(n={pr:e?"aol":"an"})||{}).owa_1=x&&x.PageGroupPrefix,n.am=r.AdMarket,n.asid=r.ExternalImpId,n)),o}function S(t,e,n){if(t){var r=typeof n;"object"===r&&n.message?t.addCustomData({reason:n.message+(n.stack?"|"+n.stack:"")}):"string"==r&&t.addCustomData({reason:n}),t.end(null,e),t=null}}var A,y=function(){function t(t,e){var n=this;this.firstAdLoaded=!1,C||(C=w()),this.containerId=t,this.renderAds=e,Object(d.d)("fwk-gdprAdsPrefs")?c.a.importAndExecute().then(function(){n.load(),null==n.consentStringPurpose&&Object(l.c)().then(function(t){if(n.gdprConsentDataString=t,null==n.gdprConsentDataString||0==n.gdprConsentDataString.length)n.gdprConsentDataEmptyReason="EmptyGdprConsentDataString";else{var e=new s.ConsentString(n.gdprConsentDataString);n.consentStringPurpose=e.getPurposesAllowed(),null!=n.consentStringPurpose&&0!=n.consentStringPurpose.length||(n.gdprConsentDataEmptyReason="EmptyconsentStringPurposeFromloadGdprAdConsentString",n.consentStringPurpose=[0])}})}):this.load()}return t.prototype.load=function(){return o.__awaiter(this,void 0,void 0,function(){var t,e,n=this;return o.__generator(this,function(r){switch(r.label){case 0:return t=window.apntag,e=this,[4,b()];case 1:return e.userTOptOutBit=r.sent(),t.anq.push(function(){t.setEndpoint("m.adnxs.com");var e=C.CountryCode;t.setPageOpts({member:"AU"==e||"NZ"==e?1705:280,user:{dnt:n.userTOptOutBit,externalUid:C.MUID}}),t.defineTag({enableSafeFrame:!0,invCode:C.PageGroup,extInvCode:e,sizes:C.AdSizes,targetId:n.containerId,allowedFormats:C.AllowedFormats,allowSmallerSizes:!1,trafficSourceCode:"pg:"+C.PageGroup,externalImpId:C.ExternalImpId,safeframeConfig:{sandbox:!0}}),t.onEvent("adLoaded",n.containerId,function(){S(n.datapoint)}),t.onEvent("adError",n.containerId,function(t){var e=null;t&&(e=t.errMessage||t.exception),S(n.datapoint,"ServerError",e)}),t.loadTags(),n.renderAds&&n.refresh()}),[2]}})})},t.prototype.refresh=function(t,e,n){var r=this;S(this.datapoint,"RequestNotComplete"),this.datapoint=_("AdsImpressed",!1),this.datapoint.addCustomData({throttle:t,consentStringPurpose:this.consentStringPurpose?this.consentStringPurpose.toString():"NullConsentStringPurpose",emptyConsentStringReason:this.gdprConsentDataEmptyReason,consentEncodeString:this.gdprConsentDataString,isYield:!!n,userTOptOutBit:this.userTOptOutBit,actionName:e||"unknownAction"});var o=window.apntag;o.anq.push(function(){if(r.firstAdLoaded){var t={externalImpId:C.ExternalImpId,invCode:C.PageGroup,trafficSourceCode:"pg:"+C.PageGroup,sizes:C.AdSizes,allowedFormats:C.AllowedFormats};o.modifyTag(r.containerId,t),o.refresh([r.containerId])}else r.firstAdLoaded=!0,o.showTag(r.containerId)})},t.prototype.modify=function(){this.refresh()},t}(),E=function(){function t(t,e){A||(A=w()),this.containerIds=[t,e],this.showContainer(),this.appNexusRenderer=new y(e,!1),window.addEventListener("message",this.onPostMessage.bind(this),!1),this.onFirstLoad()}return t.prototype.showContainer=function(t){void 0===t&&(t=0);for(var e=0;e<this.containerIds.length;e++){var n=document.getElementById(this.containerIds[e]);n&&n.setAttribute("style","display: "+(e==t?"block":"none"))}},t.prototype.onPostMessage=function(t){"aolUyNoBid"===t.data&&t.origin.indexOf(".atwola.com")>-1&&(this.showContainer(1),this.appNexusRenderer.refresh(void 0,"aolUyNoBid",!0))},t.prototype.onFirstLoad=function(){var t=this,e=window.atwUAC;e&&(e.adLoaded=function(){S(t.datapoint)},e.adError=function(e,n){S(t.datapoint,"ServerError",n&&n.retType)}),this.load()},t.prototype.load=function(){return o.__awaiter(this,void 0,void 0,function(){var t,e,n,r,i,a,c,u;return o.__generator(this,function(o){switch(o.label){case 0:return t=this,[4,b()];case 1:return t.userTOptOutBit=o.sent(),this.configString="kvmsft_optout="+this.userTOptOutBit+";kvmsft_sdkversion=10.0;kvmsft_ext_inv_cd="+A.CountryCode+";kvmsft_muid="+A.MUID+";kvmsft_olk=1;",Object(d.d)("fwk-gdprAdsPrefs")?(e=this,[4,Object(l.c)()]):[3,3];case 2:e.gdprConsentDataString=o.sent(),this.configString+="gdpr="+(Object(f.l)()?"yes":"no")+";euconsent="+this.gdprConsentDataString+";",null==this.gdprConsentDataString||0==this.gdprConsentDataString.length?this.gdprConsentDataEmptyReason="EmptyGdprConsentDataString":null==this.consentStringPurpose&&(n=new s.ConsentString(this.gdprConsentDataString),this.consentStringPurpose=n.getPurposesAllowed(),null!=this.consentStringPurpose&&0!=this.consentStringPurpose.length||(this.gdprConsentDataEmptyReason="EmptyconsentStringPurposeFromloadGdprAdConsentString",this.consentStringPurpose=[0])),o.label=3;case 3:if(window.adSetOthAT(this.configString+"kvmsft_asid="+A.ExternalImpId+";"),i=A.AdSizes[0][0],a=A.AdSizes[0][1],A.AdSizes.length>1){for(c=[],i=a=void 0,u=0;u<A.AdSizes.length;u++)c[c.length]=A.AdSizes[u][0]+"x"+A.AdSizes[u][1];r=c.join(",")}return window.htmlAdWH(A.PageGroup,i,a,"iframe",this.containerIds[0],r),[2]}})})},t.prototype.refresh=function(t,e,n){S(this.datapoint,"RequestNotComplete"),this.datapoint=_("AdsImpressed",!0),this.datapoint.addCustomData({throttle:t,consentStringPurpose:this.consentStringPurpose?this.consentStringPurpose.toString():"NullConsentStringPurpose",emptyConsentStringReason:this.gdprConsentDataEmptyReason,consentEncodeString:this.gdprConsentDataString,userTOptOutBit:this.userTOptOutBit,actionName:e||"unknownAction"}),this.showContainer();for(var r=document.getElementById(this.containerIds[0]),o=r?r.querySelectorAll("iframe"):[],i=0,a=0;a<o.length;a++)if(o[a].id){var s=o[a].id.split("adsF");if(s.length>1){var d=parseInt(s[1]);d>i&&(i=d)}}for(var l="adsF"+i,c=document.getElementsByTagName("iframe"),u=0;u<c.length;u++)c[u].id==l&&c[u].src&&-1==c[u].src.indexOf(A.PageGroup)&&c[u].remove&&c[u].remove();window.adSetOthAT(this.configString+"kvmsft_asid="+A.ExternalImpId+";"),window.adsReloadIframe(l,A.PageGroup)},t.prototype.modify=function(){var t=document.getElementById(this.containerIds[0]);t&&(t.innerHTML=""),window.adsResetPg?window.adsResetPg():window.atwUAC&&(window.atwUAC.adsInfo=[]),this.load()},t}(),W=n(1),P=Object(W.createStore)("AdsPanelViewState",{showAdBlockMessage:!1}),N=Object(W.actionCreator)("showAdBlock");Object(W.mutator)(N,function(){P().showAdBlockMessage=!0});var O=N;n(3215);var B,I,k,j=n(4045),G={},D={WAB5:{Size:[[300,600],[300,250]],PageGroupPrefix:"WAB5",AllowedFormats:["banner","video"]},WAB2:{Size:[[160,600]],PageGroupPrefix:"WAB2",ComposeGroupPrefix:"WAB4",AllowedFormats:["banner"]},WAB7:{Size:[[728,90]],PageGroupPrefix:"WAB7",AllowedFormats:["banner"]},WAB8:{Size:[[320,50]],PageGroupPrefix:"WAB8",AllowedFormats:["banner"]}};function R(t){if("aol"==Object(p.a)("loadadfrom"))return!0;if("an"==Object(p.a)("loadadfrom"))return!1;var e=["BR","CA","DE","ES","FR","GB","IT","JP","US"];return Object(d.d)("fwk-ads-noAol-eight-exceptBr")?e=["BR"]:Object(d.d)("fwk-ads-noAol-all")&&(e=[]),e.indexOf(t.CountryCode)>-1}function T(){var t,e;t="https://cms.analytics.yahoo.com/cms?partner_id=MSFT",(e=new Image).src=t,e.height=0,e.width=0,e.style.display="none",e.onload=function(){e.parentNode.removeChild(e)},document.body.insertBefore(e,document.body.firstChild),function(t){var e=document.createElement("iframe");e.src=t,e.style.display="none",document.body.appendChild(e)}("https://banner.advertising.com/ads/msn3.html")}function J(t){return"function"==typeof window[t]}function z(t,e){var n=_("AdsInitialized",e),r=[],o=w();return R(o)&&r.push(Object(f.m)(Object(p.a)("aawuo")||"https://s.aolcdn.com/ads/adsWrapperMSNI.js",!1).then(function(){return J("htmlAdWH")&&J("adSetOthAT")&&J("adsReloadIframe")?document.getElementById(t)?Promise.resolve():Promise.reject("Container"):Promise.reject("SDK")})),function(t){var e=[];return Object(d.d)("fwk-ads-noAol-eight-exceptBr")?e=["CA","DE","ES","FR","GB","IT","JP","US"]:Object(d.d)("fwk-ads-noAol-all")&&(e=["BR","CA","DE","ES","FR","GB","IT","JP","US"]),e.indexOf(t.CountryCode)>-1}(o)&&T(),r.push(Object(f.m)(Object(f.e)()).then(function(){var t=window.apntag;return t&&t.anq?Promise.resolve():Promise.reject("SDK")})),r[0].then(function(){n.end()}).catch(function(t){Object(W.dispatch)(O()),n.endWithError("ClientError",new Error(t))}),Promise.all(r)}var L=0;function F(t){var e=Date.now();if(B&&e-B>3e3){B=e;for(var n=Object.keys(G),r=0;r<n.length;r++){var o=n[r],i=D[G[o].DetermineAd()];i&&(v(i,t==j.d),G[o].Provider.refresh(L,t))}L=0}else L++}var U=n(20),Z=n(209),M=n(2),X=n(15),V=n(9386),H="https://choice.microsoft.com/",K=function(t){function e(e){var r=t.call(this,e)||this;return r.updateAds=function(){r.props.isBottom&&(r.adsContainer.style.width=window.innerWidth+"px"),r.market=function(t,e,n){var r=w(),o=D[n()];if(o){var i=R(r);(k=k||z(t,i)).then(function(){v(o),G[t]?I.PageGroupPrefix!=o.PageGroupPrefix&&G[t].Provider.modify():G[t]={Provider:i?new E(t,e):new y(t,!0),DetermineAd:n},I=o,B=Date.now()})}return r.AdMarket}(r.adContainerId,r.secondAdContainerId,r.determineAd.bind(r))},r.onFooterClick=function(){window.open(H+r.market,"_blank")},r.adContainerId="owaadbar"+n.instanceNumber++,r.secondAdContainerId="owaadbar"+n.instanceNumber++,r}var n;return o.__extends(e,t),n=e,e.prototype.componentDidMount=function(){this.updateAds(),window.addEventListener("resize",this.updateAds)},e.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.updateAds)},e.prototype.determineAd=function(){if(window.innerWidth>320){if(this.props.isBottom&&window.innerWidth<990)return window.innerWidth<750?"WAB8":"WAB7";if(!this.props.isBottom&&window.innerWidth>=990)return window.innerWidth<1900?"WAB2":"WAB5"}return null},e.prototype.render=function(){var t=this,e=[V.adsContainer];return this.props.isBottom&&e.push(V.bottom),M.createElement("div",{ref:function(e){return t.adsContainer=e},className:e.join(" ")},P().showAdBlockMessage?M.createElement("div",{className:V.adBlockContainer},M.createElement(Z.a,{iconName:"OutlookLogo",className:V.icon}),M.createElement("span",{className:V.blockText,dangerouslySetInnerHTML:{__html:Object(a.b)(Object(a.a)(i.a),"https://windows.microsoft.com/outlook/ad-free-outlook")}})):M.createElement("div",null,M.createElement("div",{"aria-label":Object(a.a)(i.d),className:V.rendererContainer,id:this.adContainerId}),M.createElement("div",{"aria-label":Object(a.a)(i.d),className:V.rendererContainer,id:this.secondAdContainerId})),M.createElement("div",{className:V.footer,onClick:this.onFooterClick},M.createElement("div",{className:V.choicePic},M.createElement("img",{"aria-label":Object(a.a)(i.b),src:Object(X.q)()+"resources/images/adbarmetrosprite.png"})),M.createElement("span",{className:V.choiceLabel},Object(a.a)(i.c))),M.createElement("div",{className:V.hide},M.createElement("img",{src:"https://c.live.com/c.gif"}),M.createElement("img",{src:"https://c.bing.com/c.gif?Red3=OLLI_pd"})))},e.instanceNumber=0,e=n=o.__decorate([U.observer],e)}(M.Component);n.d(e,"AdsPanel",function(){return K}),n.d(e,"refresh",function(){return F})},4045:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"d",function(){return a});var r="onCloseInlineCompose",o="UpdateInternetMessageId",i="closeCompose",a="openCompose"},4483:function(t,e,n){"use strict";var r=n(0),o=n(266);var i,a=n(4446),s=n(27),d=n(12),l=n(3),c=new l.c(function(){return n.e(437).then(n.bind(null,11885))}),u=new l.b(c,function(t){return t.getVendorListJson});function p(){return r.__awaiter(this,void 0,void 0,function(){var t;return r.__generator(this,function(e){switch(e.label){case 0:return i?[3,2]:[4,u.import()];case 1:t=e.sent(),i=t(),e.label=2;case 2:return[2,i]}})})}function m(t,e,n,o,i){return r.__awaiter(this,void 0,void 0,function(){var l,c,u,m,f,h;return r.__generator(this,function(r){switch(r.label){case 0:return[4,p()];case 1:return(l=r.sent())?((c=new a.ConsentString).setGlobalVendorList(l),u=[],[t,e,n,o,i].forEach(function(t,e){t&&u.push(e+1)}),m=u.length>0?l.vendors.map(function(t){return t.id}):[],f=Object(s.f)().SessionSettings.UserCulture,h=f?f.split("-")[0]:"en",c.setCmpId(168),c.setCmpVersion(1),c.setConsentScreen(1),c.setConsentLanguage(h),c.setPurposesAllowed(u),c.setVendorsAllowed(m),[2,c.getConsentString()]):(d.c.error("Fetching vendor list failed."),[2,null])}})})}var f=n(26);function h(){return r.__awaiter(this,void 0,void 0,function(){var t,e,n,i;return r.__generator(this,function(s){switch(s.label){case 0:return t=137,[4,o.e.import()];case 1:return[4,s.sent()(o.a.GdprAdsPrefs)];case 2:return null==(e=s.sent())||null==e.consentString||""==e.consentString?[2,null]:(n=e.consentString,168!=(i=new a.ConsentString(n)).getCmpId()?(Object(f.d)("InvalidConsentDataString",{consentString:n}),[2,null]):i.getVendorListVersion()<t?(Object(f.d)("UpdateConsentDataVenorListVersion",{consentString:n}),[4,m(e.allowStorageAndAccess,e.allowPersonalization,e.allowAdSelectionDeliveryReporting,e.allowContentSelectionDeliveryReporting,e.allowMeasurement)]):[3,5]);case 3:return n=s.sent(),[4,(d=n,l=Object(o.c)(o.a.GdprAdsPrefs),c=r.__assign({},l,{consentString:d}),o.d.importAndExecute(o.a.GdprAdsPrefs,c))];case 4:s.sent(),s.label=5;case 5:return[2,n]}var d,l,c})})}n.d(e,"c",function(){return h}),n.d(e,"b",function(){return m}),n.d(e,"a",function(){return p})},6321:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(3),o=new r.c(function(){return n.e(439).then(n.bind(null,8138))}),i=new r.a(o,function(t){return t.initializeAdCmp})},7617:function(t,e,n){"use strict";var r,o=n(0),i=n(75),a=n(252),s="ows/beta/AdsTargetingOptOutController";var d=function(){return o.__awaiter(this,void 0,void 0,function(){var t,e;return o.__generator(this,function(n){switch(n.label){case 0:return null!=r?[3,4]:[4,Object(i.b)(s,void 0,!0)];case 1:return t=n.sent(),Object(a.a)(t.status)?[4,t.json()]:[3,3];case 2:return e=n.sent(),[2,r=e];case 3:return[2,!1];case 4:return[2,r]}})})};n.d(e,"a",function(){return d})},9385:function(t){t.exports={a:"g_b",d:"h_b",b:"i_b",c:"j_b"}},9386:function(t,e,n){var r=n(9387),o=n(44);"string"==typeof r&&(r=[[t.i,r]]);for(var i=0;i<r.length;i++)o.loadStyles(r[i][1],!1);r.locals&&(t.exports=r.locals)},9387:function(t,e,n){(e=t.exports=n(43)(!1)).push([t.i,'._23fxOotSm5HPNB1U_ZVw4i{width:100%;position:relative;overflow:hidden}html[dir] ._23fxOotSm5HPNB1U_ZVw4i,html[dir] ._6tqjFb_HmyQup_NPe6dhC{background-color:"[theme:neutralLighter, default:#f4f4f4]"}._2gCUI1qJaR143WZ_DR2TKH{display:none!important}._3SSWjsJZkPdG9CzJsvEhTb{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}._1euWvgYLQrhmmIxYAWS8BR{font-size:96px;color:"[theme:neutralSecondaryAlt, default:#767676]"}html[dir] ._1euWvgYLQrhmmIxYAWS8BR{margin:auto;padding-top:15px;padding-bottom:10px}.N3k7EN5vRGTrONWBPg250{color:"[theme:black, default:#000000]"}html[dir] .N3k7EN5vRGTrONWBPg250{margin:auto;padding:0 20px}html[dir=ltr] ._1MzfysKylAgVIaErvcJaXy{margin:5px 0 0 5px}html[dir=rtl] ._1MzfysKylAgVIaErvcJaXy{margin:5px 5px 0 0}._6tqjFb_HmyQup_NPe6dhC{position:absolute;bottom:3px;cursor:pointer;width:100%}html[dir=ltr] ._6tqjFb_HmyQup_NPe6dhC{left:0}html[dir=rtl] ._6tqjFb_HmyQup_NPe6dhC{right:0}._6j-eDPFiQfrWN4BE0fJKc{display:inline-block}html[dir] ._6j-eDPFiQfrWN4BE0fJKc img{margin-bottom:-4px}.z_1daphArEp0Jmx8kUTtF{visibility:hidden;color:"[theme:neutralSecondary, default:#666666]"}._vOWwd-jpTl-d5jhsjiKO{color:"[theme:themePrimary, default:#0078D4]";font-size:13px;cursor:pointer;position:absolute;top:610px;width:100%}html[dir] ._vOWwd-jpTl-d5jhsjiKO{text-align:center}._6tqjFb_HmyQup_NPe6dhC:hover .z_1daphArEp0Jmx8kUTtF{visibility:visible}._1lnWW5hfGyZgdlwxCJX4Cs._23fxOotSm5HPNB1U_ZVw4i{height:95px}html[dir] ._1lnWW5hfGyZgdlwxCJX4Cs._23fxOotSm5HPNB1U_ZVw4i{text-align:center}html[dir=ltr] ._1lnWW5hfGyZgdlwxCJX4Cs._23fxOotSm5HPNB1U_ZVw4i{padding-right:10000px}html[dir=rtl] ._1lnWW5hfGyZgdlwxCJX4Cs._23fxOotSm5HPNB1U_ZVw4i{padding-left:10000px}._1lnWW5hfGyZgdlwxCJX4Cs ._1MzfysKylAgVIaErvcJaXy{display:inline-block;min-width:728px;min-height:90px}._1lnWW5hfGyZgdlwxCJX4Cs ._3SSWjsJZkPdG9CzJsvEhTb{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}._1lnWW5hfGyZgdlwxCJX4Cs ._1euWvgYLQrhmmIxYAWS8BR{font-size:72px;display:table-cell;vertical-align:middle}html[dir] ._1lnWW5hfGyZgdlwxCJX4Cs ._1euWvgYLQrhmmIxYAWS8BR{margin:initial}html[dir=ltr] ._1lnWW5hfGyZgdlwxCJX4Cs ._1euWvgYLQrhmmIxYAWS8BR{margin-left:auto}html[dir=rtl] ._1lnWW5hfGyZgdlwxCJX4Cs ._1euWvgYLQrhmmIxYAWS8BR{margin-right:auto}._1lnWW5hfGyZgdlwxCJX4Cs .N3k7EN5vRGTrONWBPg250{display:table-cell;vertical-align:middle}html[dir] ._1lnWW5hfGyZgdlwxCJX4Cs .N3k7EN5vRGTrONWBPg250{margin:initial}html[dir=ltr] ._1lnWW5hfGyZgdlwxCJX4Cs .N3k7EN5vRGTrONWBPg250{margin-right:auto}html[dir=rtl] ._1lnWW5hfGyZgdlwxCJX4Cs .N3k7EN5vRGTrONWBPg250{margin-left:auto}._1lnWW5hfGyZgdlwxCJX4Cs ._vOWwd-jpTl-d5jhsjiKO{display:block}._1lnWW5hfGyZgdlwxCJX4Cs ._6tqjFb_HmyQup_NPe6dhC{position:relative;display:inline-block;bottom:0;width:auto}._1lnWW5hfGyZgdlwxCJX4Cs .z_1daphArEp0Jmx8kUTtF{display:inline-block;font-size:7px;position:absolute;top:-27px;white-space:nowrap}html[dir=ltr] ._1lnWW5hfGyZgdlwxCJX4Cs .z_1daphArEp0Jmx8kUTtF{-webkit-transform:rotate(270deg);transform:rotate(270deg);left:-16px}html[dir=rtl] ._1lnWW5hfGyZgdlwxCJX4Cs .z_1daphArEp0Jmx8kUTtF{-webkit-transform:rotate(-270deg);transform:rotate(-270deg);right:-16px}html[dir] ._1lnWW5hfGyZgdlwxCJX4Cs ._6j-eDPFiQfrWN4BE0fJKc img{margin-bottom:-2px}@media (max-width:749px){._1lnWW5hfGyZgdlwxCJX4Cs ._1euWvgYLQrhmmIxYAWS8BR{font-size:48px}._1MzfysKylAgVIaErvcJaXy{min-width:320px;min-height:50px}html[dir] ._1MzfysKylAgVIaErvcJaXy{margin-top:15px}}',""]),e.locals={adsContainer:"_23fxOotSm5HPNB1U_ZVw4i",footer:"_6tqjFb_HmyQup_NPe6dhC",hide:"_2gCUI1qJaR143WZ_DR2TKH",adBlockContainer:"_3SSWjsJZkPdG9CzJsvEhTb",icon:"_1euWvgYLQrhmmIxYAWS8BR",blockText:"N3k7EN5vRGTrONWBPg250",rendererContainer:"_1MzfysKylAgVIaErvcJaXy",choicePic:"_6j-eDPFiQfrWN4BE0fJKc",choiceLabel:"z_1daphArEp0Jmx8kUTtF",remove:"_vOWwd-jpTl-d5jhsjiKO",bottom:"_1lnWW5hfGyZgdlwxCJX4Cs"}}},0,[0,1,30,474,155,4,7,8,19,292,11,513,354,2,6,9,107,3,5,288,12,37,103,463,87,464,98,498,299,195,287,437,445,447,567]]);
//# sourceMappingURL=owa.AdsPanel.js.map
self.scriptsLoaded['owa.AdsPanel.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.AdsPanel.js'] = (new Date()).getTime();