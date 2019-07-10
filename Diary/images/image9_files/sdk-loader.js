!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=29)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.SDK_LOADER="sdk-loader",e.SDK_CORE="sdk-core",e.ASSETS="assets-bundle",e.BUILDER="builder-bundle",e.BUILDER_CORE="builder-core",e.CALLING="calling-bundle",e.CALLING_STANDALONE="callingStandalone-bundle",e.SERVICES="services-bundle",e.CHAT_BUNDLE="chat-bundle",e.RECENTS_BUNDLE="recents-bundle",e.UICOMPONENT_BUNDLE="uicomponent-bundle",e.TELEMETRY_BUNDLE="telemetry-bundle",e.VENDORS="vendors",e.CONNECT="connect",e.POLYFILLS="polyfills",e.HOST_CHAT_PAGE="host-chat",e.HOST_BING_PAGE="host-button",e.HOST_BUILDER_PAGE="host-builder",e.STYLE_BUILDER="swc-builder",e.STYLE_SDK="swc-sdk",e.STYLE_CHAT_SKYPE="swc-chat",e.STYLE_RECENTS_SKYPE="swc-recents",e.STYLE_CHAT_BING="swc-bing",e.STYLE_CHAT_THEME_DARK="swc-dark",e.STYLE_CALLING="swc-calling",e}();t.PackageName=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),i=window;t.swcWindow=i,i.swc=i.swc||i.SkypeWebControl||{};var o=i.swc;t.swc=o,i.swc.shared=i.swc.shared||{},i.swc.scriptLoader=i.swc.scriptLoader||new r.ScriptLoader,i.SKYPE=i.SKYPE||{},i.SkypeWebControl=i.swc,i.swc.vendors=i.swc.vendors||{},t.SKYPE=i.SKYPE||{}},function(e,t,n){"use strict";function r(e){return!!e&&(0===e.indexOf("fb-")||0===e.indexOf("pr-"))}Object.defineProperty(t,"__esModule",{value:!0}),t.versionRegExp=/^\d+\.\d+\.\d+$/,t.getBranchParentFolder=function(e){return r(e)?"fb":"v"},t.isAppVersion=function(e){return!!e&&t.versionRegExp.test(e)},t.isFeatureBranch=r},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(9)),r(n(10)),r(n(11)),r(n(12)),r(n(13)),r(n(14))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=function(){function e(){}return e.throwError=function(e,t,n,i){var o=new Error(function(){if(!n||0===Object.getOwnPropertyNames(n).length)return e+(t?": "+t:"");if("string"==typeof n)return n;var r="";return Object.getOwnPropertyNames(n).forEach(function(e){r+=e+": "+n[e]+";"}),r}());r.swc.Eventing.triggerEvent("errorCode",e);try{r.swc.Telemetry.sendEvent.runtimeError(e,o.message,e+(t?": "+t:""),o.stack,i)}catch(e){}},e.throwHttpErrorCode=function(e,t){e+=1e3,r.swc.Eventing.triggerEvent("errorCode",e)},e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=n(8),o=n(3),a=n(4),s=n(16),u=n(18),c=n(19),d=function(){function e(){}return e.prototype.parseBaseDom=function(e,t){var n=t.getAttribute(r.Attributes.ID);n&&(e.ConversationId=s.default.getNormalizeId(n));var i=t.getAttribute(r.Attributes.BOT_ID);i&&(e.ConversationId=s.default.getNormalizeId(i)),(i=t.getAttribute(r.Attributes.CONTACT_EMAIL))&&(e.ConversationId=i),(i=t.getAttribute(r.Attributes.PHONE_NUMBER))&&(e.ConversationId=s.default.getNormalizeId(i)),(i=t.getAttribute(r.Attributes.CONTACT_ID))&&(e.ConversationId=s.default.getNormalizeId(i)),(i=t.getAttribute(r.Attributes.THREAD_ID))&&(e.ConversationId=s.default.getNormalizeId(i)),(i=t.getAttribute(r.Attributes.JOIN_LINK))&&(e.ConversationId=i),(i=t.getAttribute(r.Attributes.TOKEN))&&(e.ConversationId=i),this.parseDom(e,r.Attributes,t)},e.prototype.parseDom=function(e,t,n){u.objectProperties(e,function(r){if(r&&t[r]&&n.getAttribute(t[r])){var i=n.getAttribute(t[r]);if(!i)return;"true"===i.toLowerCase()||"false"===i.toLowerCase()?e[r]=c.toBoolean(i):e[r]=i}})},e.prototype.setBaseDOM=function(e,t){if(this.setDom(e,r.Attributes,t),e.ConversationId){t.removeAttribute(r.Attributes.PHONE_NUMBER),t.removeAttribute(r.Attributes.CONTACT_ID),t.removeAttribute(r.Attributes.BOT_ID),t.removeAttribute(r.Attributes.JOIN_LINK);var n=s.default.detectConversationType(e.ConversationId);n===o.ConversationType.AGENT?t.setAttribute(r.Attributes.BOT_ID,s.default.getNormalizeId(e.ConversationId)):n===o.ConversationType.PERSON?t.setAttribute(r.Attributes.CONTACT_ID,s.default.getNormalizeId(e.ConversationId)):n===o.ConversationType.GROUP?t.setAttribute(r.Attributes.THREAD_ID,e.ConversationId):n===o.ConversationType.JOIN?t.setAttribute(r.Attributes.JOIN_LINK,e.ConversationId):n===o.ConversationType.PHONE?t.setAttribute(r.Attributes.PHONE_NUMBER,e.ConversationId):a.default.throwError(10002,"Unsupported conversation id:",null,e.ConversationId)}},e.prototype.setDom=function(e,t,n,r){u.objectProperties(e,function(i){if(void 0!==e[i]&&null!==e[i]&&""!==e[i]){var o=e[i];if("boolean"==typeof o&&(o=o.toString()),!t[i])return;if(r&&e[i]===r[i])return;n.setAttribute(t[i],o)}})},e.prototype.parseBaseUrlParams=function(e,t){t[r.Attributes.BOT_ID]?e.ConversationId=s.default.getNormalizeId(t[r.Attributes.BOT_ID]):t[r.Attributes.PHONE_NUMBER]?e.ConversationId=s.default.getNormalizeId(t[r.Attributes.PHONE_NUMBER]):t[r.Attributes.CONTACT_ID]?e.ConversationId=s.default.getNormalizeId(t[r.Attributes.CONTACT_ID]):t[r.Attributes.THREAD_ID]?e.ConversationId=s.default.getNormalizeId(t[r.Attributes.THREAD_ID]):t[r.Attributes.JOIN_LINK]?e.ConversationId=t[r.Attributes.JOIN_LINK]:t[r.Attributes.TOKEN]&&(e.ConversationId=t[r.Attributes.TOKEN]),t[r.Attributes.SWC_Locale]&&(e.Locale=t[r.Attributes.SWC_Locale]),t[r.Attributes.SWC_ForceFrame]&&(e.ForceFrame=c.toBoolean(t[r.Attributes.SWC_ForceFrame])),t[r.Attributes.SWC_IsMinified]&&(e.IsMinified=c.toBoolean(t[r.Attributes.SWC_IsMinified])),this.parseUrlParams(e,r.Attributes,t)},e.prototype.parseUrlParams=function(e,t,n){u.objectProperties(e,function(r){if(n[t[r]]){var i=n[t[r]];"true"===i.toLowerCase()||"false"===i.toLowerCase()?e[r]=c.toBoolean(i):e[r]=i}})},e.prototype.getQueryStringParameters=function(){var e=!1,t=window.location.search.substring(1).split("&"),n={};return t.forEach(function(t){if(t){e=!0;var r=t.split("=");n[decodeURIComponent(r[0])]=decodeURIComponent(r[1])||""}}),e?n:null},e.prototype.getDefinitionFromUrl=function(){var e=this.getQueryStringParameters(),t=new i.Definition;return e?(this.parseBaseUrlParams(t,e),this.parseUrlParams(t,r.Attributes,e),t):t},e}();t.ConfigFactory=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.getWindow=function(){return window},e.getDocument=function(){return window.document},e.getParentWithClass=function(e,t){for(;e&&!this.hasClass(e,t);)e=e.parentNode;return e},e.isInViewport=function(e,t){return t=t||this.getWindow(),e.bottom>0&&e.right>0&&e.top<t.innerHeight&&e.left<t.innerWidth},e.readDataset=function(e,t,n){return e.dataset?e.dataset[t]:e.getAttribute("data-"+n)},e.writeDataset=function(e,t,n,r){e.dataset?e.dataset[t]=r:e.setAttribute("data-"+n,r)},e.hasClass=function(e,t){if(e.classList)return e.classList.contains(t);for(var n=0,r=e.className?e.className.split(" "):[];n<r.length;n++){if(r[n]===t)return!0}return!1},e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.Theme="data-theme",e.Locale="data-locale",e.SWC_Locale="swc-locale",e.SWC_ForceFrame="swc-force-frame",e.SWC_IsMinified="swc-min",e.ID="data-id",e.BOT_ID="data-bot-id",e.CONTACT_ID="data-contact-id",e.PHONE_NUMBER="data-phone-number",e.CONTACT_EMAIL="data-contact-email",e.JOIN_LINK="data-join-link",e.THREAD_ID="data-thread-id",e.TOKEN="data-token",e.Payload="data-payload",e.BingDLApi="data-bing-dl-api",e.Title="data-title",e.Avatar="data-avatar",e.Prefill="data-prefill",e.PrivacyUri="data-privacy-uri",e.TermsOfUseUri="data-tou-uri",e.EnableCalling="data-enable-calling",e.CallingOnly="data-calling-only",e.DisableSendingEmoticons="data-disable-sending-emoticons",e.TrafficProvider="data-provider",e.TrafficSource="data-source",e.DisableInOutAnimation="data-disable-inout-animation",e.CorrelationId="data-correlation-id",e.SkypeOnly="data-skype-only",e.Style="data-style",e.DisableInput="data-disable-input",e.EnableParticipantsControl="data-enable-participants-control",e.InputPlaceholder="data-input-placeholder",e.ForceAuthentication="data-force-authentication",e.TitleColor="data-title-color",e.TitleBackground="data-title-background",e.PlatformFeature="data-platform-feature",e}();t.Attributes=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(t){this.Locale="",this.Theme="",this.Payload="",this.BingDLApi=!1,this.Title="",this.Avatar="",this.PrivacyUri="",this.TermsOfUseUri="",this.Prefill="",this.EnableCalling=null,this.CallingOnly=null,this.DisableSendingEmoticons=!1,this.TrafficProvider="",this.TrafficSource="",this.DisableInOutAnimation=!1,this.SkypeOnly=!1,this.Style="",this.DisableInput=!1,this.EnableParticipantsControl=!0,this.InputPlaceholder="",this.ForceAuthentication=!1,this.PlatformFeature="",this.TitleColor="",this.TitleBackground="",this.Partner="",t instanceof e&&Object.assign(this,t)}return e.prototype.MergeWith=function(e){if(e){var t=e;for(var n in t)t.hasOwnProperty(n)&&0!==n.indexOf("_")&&void 0!==t[n]&&null!==t[n]&&""!==t[n]&&(this[n]=t[n])}},e.prototype.MergeWithJSON=function(e){if(e)for(var t in e)void 0!==e[t]&&null!==e[t]&&""!==e[t]&&(this[t]=e[t])},e}();t.Definition=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Skype=8]="Skype",e[e.Agent=28]="Agent",e[e.Pstn=4]="Pstn",e[e.MSA=1]="MSA",e[e.Undefined=0]="Undefined"}(t.ContactType||(t.ContactType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.unknown=0]="unknown",e[e.card=1]="card",e[e.carousel=2]="carousel",e[e.signin=3]="signin",e[e.receipt=4]="receipt",e[e.multiline=5]="multiline",e[e.adaptive=6]="adaptive"}(t.SwiftCardType||(t.SwiftCardType={})),function(e){e[e.unknown=0]="unknown",e[e.hero=1]="hero",e[e.thumb=2]="thumb",e[e.receipt=3]="receipt",e[e.signin=4]="signin",e[e.video=5]="video",e[e.audio=6]="audio",e[e.animation=7]="animation",e[e.actionImage=8]="actionImage",e[e.flex=9]="flex",e[e.adaptive=10]="adaptive"}(t.SwiftCardContentType||(t.SwiftCardContentType={})),function(e){e[e.unknown=0]="unknown",e[e.unsupported=1]="unsupported",e[e.openUrl=2]="openUrl",e[e.imBack=3]="imBack",e[e.signin=4]="signin",e[e.call=5]="call",e[e.showImage=6]="showImage",e[e.payment=7]="payment",e[e.postBack=8]="postBack"}(t.SwiftCardActionType||(t.SwiftCardActionType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.UserMessage="UserMessage",e.SwiftCard="SwiftCard",e.SystemMessage="SystemMessage",e.Unsupported="Unsupported",e.SkypeLogo="SkypeLogo",e.Welcome="Welcome",e.Translate="Translate",e.LwcImage="LwcImage",e.LwcFile="LwcFile",e.LwcCallRecording="LwcCallRecording",e.UnreadSplitter="UnreadSplitter"}(t.MessageType||(t.MessageType={})),function(e){e.CallEnd="CallEndMsg",e.MissedCall="MissedCallMsg",e.MissedGroupCall="MissedGroupCallMsg",e.Call="CallMsg",e.Custom="CustomMsg",e.MeLeftGroup="MeLeftGroupConversation"}(t.CustomMessageType||(t.CustomMessageType={})),function(e){e[e.Incoming=0]="Incoming",e[e.Outgoing=1]="Outgoing"}(t.Direction||(t.Direction={})),function(e){e[e.Pending=0]="Pending",e[e.Sent=1]="Sent",e[e.Failed=2]="Failed"}(t.DeliveryStatus||(t.DeliveryStatus={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.addMember="addMember",e.changeTopic="changeTopic",e.changePicture="changePicture",e.kickMember="kickMember",e.editMsg="editMsg",e.callP2P="callP2P",e.sendText="sendText",e.sendSms="sendSms",e.sendFileP2P="sendFileP2P",e.sendContacts="sendContacts",e.sendVideoMsg="sendVideoMsg",e.sendMediaMsg="sendMediaMsg",e.changeModerated="changeModerated"}(t.ParticipantCapabilities||(t.ParticipantCapabilities={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.UNDEFINED="",e.PERSON="person",e.PHONE="phone",e.AGENT="agent",e.JOIN="join",e.GROUP="group"}(t.ConversationType||(t.ConversationType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.Admin="Admin",e.User="User"}(t.ParticipantRole||(t.ParticipantRole={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),i=function(){function e(){this.loaded=[],this.progress={}}return e.prototype.addScript=function(e,t,n){var i=this;if(-1===this.loaded.indexOf(e)){var o=this.progress;if(o[e])return t&&-1===o[e].success.indexOf(t)&&o[e].success.push(t),void(n&&-1===o[e].failure.indexOf(n)&&o[e].failure.push(n));o[e]={success:[],failure:[]},t&&o[e].success.push(t),n&&o[e].failure.push(n);var a=r.default.getDocument(),s=a.createElement("script");s.crossOrigin="anonymous",s.type="text/javascript",s.src=e,t&&(s.onload=function(){i.progress[e].success.forEach(function(e){try{e()}catch(e){}}),delete i.progress[e],i.loaded.push(e)}),n&&(s.onerror=function(){i.progress[e].failure.forEach(function(e){try{e()}catch(e){}}),delete i.progress[e]}),a.getElementsByTagName("body")[0].appendChild(s)}else t&&t()},e}();t.ScriptLoader=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),i=n(3),o=n(4),a=function(){function e(){}return e.strip=function(e){var t=e.match(this.idRegExp);return t?t[2]:e},e.detectConversationType=function(e){if(!e)return i.ConversationType.UNDEFINED;if(this.typeMapppings[e])return this.typeMapppings[e];var t,n=e.match(this.idRegExp);if(n&&(t=this.getTypeByPrefix(n[1])),t)return this.typeMapppings[e]=t,t;if(0===e.indexOf("https://join.skype.com/"))return this.typeMapppings[e]=i.ConversationType.JOIN,i.ConversationType.JOIN;if(/^(28:)?[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i.test(e))return this.typeMapppings[e]=i.ConversationType.AGENT,i.ConversationType.AGENT;if(/^(19:)?[\S]+[@]([\S].)?[\S]*thread\.skype/i.test(e))return this.typeMapppings[e]=i.ConversationType.GROUP,i.ConversationType.GROUP;return/(?:00|\+)?(^[^a-z][^A-Z])(\d+$)/i.test(e.replace(/\s+|[()\-\+]/gi,""))?(this.typeMapppings[e]=i.ConversationType.PHONE,i.ConversationType.PHONE):(this.typeMapppings[e]=i.ConversationType.PERSON,i.ConversationType.PERSON)},e.getSdkModeFromId=function(e){switch(this.detectConversationType(e)){case i.ConversationType.PERSON:return r.SDKMode.PERSON;case i.ConversationType.AGENT:return r.SDKMode.BOT;case i.ConversationType.JOIN:return r.SDKMode.JOIN_URL;case i.ConversationType.PHONE:return r.SDKMode.PHONE;case i.ConversationType.GROUP:return r.SDKMode.THREAD}return r.SDKMode.UNDEFINED},e.toFullIdentifier=function(e){var t=this.getPrefixForId(e);return 0===e.indexOf(t+":")?e:t?t+":"+e:e},e.addPrefix=function(e,t){return 0===t.indexOf(e+this.SPLITTER)?t:0===t.indexOf(this.SPLITTER)?e+t:e+this.SPLITTER+t},e.getNormalizeId=function(e){return e.match(this.idRegExp)?e.replace(/\d{1,2}:/,""):e},e.isEqual=function(e,t){return this.toFullIdentifier(e).toLowerCase()===this.toFullIdentifier(t).toLowerCase()},e.getPrefixForId=function(e){if(this.hasAlreadyPrefix(e))return"";var t=this.getSdkModeFromId(e);switch(t){case r.SDKMode.PERSON:return"8";case r.SDKMode.BOT:return"28";case r.SDKMode.THREAD:return"19";case r.SDKMode.PHONE:return"4";default:o.default.throwError(10502,"Unable to define conversation prefix",{id:e,sdkMode:t})}return""},e.getTypeByPrefix=function(e){if(!e)return i.ConversationType.UNDEFINED;switch(e.indexOf(":")>-1&&(e=e.replace(":","")),e){case"4":return i.ConversationType.PHONE;case"8":return i.ConversationType.PERSON;case"19":return i.ConversationType.GROUP;case"28":return i.ConversationType.AGENT;default:return i.ConversationType.UNDEFINED}},e.hasAlreadyPrefix=function(e){var t=/^\d+:/.exec(e);return!!t&&!!t[0]},e.SPLITTER=":",e.idRegExp=/(\d{1,2}:)([\S]*)/,e.typeMapppings={},e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.UNDEFINED=0]="UNDEFINED",e[e.PERSON=1]="PERSON",e[e.THREAD=2]="THREAD",e[e.BOT=3]="BOT",e[e.JOIN_URL=4]="JOIN_URL",e[e.PHONE=5]="PHONE"}(t.SDKMode||(t.SDKMode={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.objectProperties=function(e,t){for(var n in e)e.hasOwnProperty(n)&&t&&t(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="NFKD",i={"ª":"a","º":"o","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","ÿ":"y","ā":"a","ă":"a","ą":"a","ć":"c","ĉ":"c","ċ":"c","č":"c","ď":"d","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","ĥ":"h","ĩ":"i","ī":"i","ĭ":"i","į":"i","ĳ":"ij","ĵ":"j","ķ":"k","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l·","ń":"n","ņ":"n","ň":"n","ŉ":"ʼn","ō":"o","ŏ":"o","ő":"o","ŕ":"r","ŗ":"r","ř":"r","ś":"s","ŝ":"s","ş":"s","š":"s","ţ":"t","ť":"t","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","ŵ":"w","ŷ":"y","ź":"z","ż":"z","ž":"z","ſ":"s","ơ":"o","ư":"u","ǆ":"dz","ǈ":"Lj","ǉ":"lj","ǋ":"Nj","ǌ":"nj","ǎ":"a","ǐ":"i","ǒ":"o","ǔ":"u","ǖ":"u","ǘ":"u","ǚ":"u","ǜ":"u","ǟ":"a","ǡ":"a","ǧ":"g","ǩ":"k","ǫ":"o","ǭ":"o","ǰ":"j","ǳ":"dz","ǵ":"g","ǹ":"n","ǻ":"a","ȁ":"a","ȃ":"a","ȅ":"e","ȇ":"e","ȉ":"i","ȋ":"i","ȍ":"o","ȏ":"o","ȑ":"r","ȓ":"r","ȕ":"u","ȗ":"u","ș":"s","ț":"t","ȟ":"h","ȧ":"a","ȩ":"e","ȫ":"o","ȭ":"o","ȯ":"o","ȱ":"o","ȳ":"y","ʰ":"h","ʲ":"j","ʳ":"r","ʷ":"w","ʸ":"y","ˡ":"l","ˢ":"s","ˣ":"x"};function o(e,t){var n=e.substring(0,t).search(/\S+$/),r=e.substring(t).search(/\s/);return-1===n&&(n=t),-1===r?r=e.length:r+=t,{start:n,end:r}}t.toBoolean=function(e){return e?"true"===e.toLowerCase():null},t.wordAt=function(e,t){var n=o(e,t);return e.substring(n.start,n.end)},t.inject=function(e,t,n,r){return void 0===r&&(r=n),e.substr(0,n)+t+e.substr(r,e.length)},t.wordBoundariesAt=o,t.b64DecodeUnicode=function(e){return decodeURIComponent(Array.prototype.map.call(atob(e),function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))},t.normalizeString=function(e){if(e=e.toLowerCase(),String.prototype.normalize)return e.normalize(r).replace(/[\u0300-\u036f]/g,"");var t=parseInt("0xD800",16),n=parseInt("0xDBFF",16),o=0,a="",s="",u=void 0;if(!e)return e;for(;o<e.length;)a+=e.charAt(o),((u=e.charCodeAt(o))<t||u>n)&&(s+=i.hasOwnProperty(a)?i[a]:a,a=""),o++;return s},t.startsWith=function(e,t){return 0===e.indexOf(t)},t.endsWith=function(e,t){return e.lastIndexOf(t)===e.length-t.length}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(5),o=n(0),a=n(1),s=n(2),u=n(21),c={allowedDomains:["swc.cdn.skype.com","latest-swc.cdn.skype.com"]},d=function(){function e(){}return e.combine=function(e,t,n){return e.lastIndexOf("/")!==e.length-1&&"/"!==t.substring(0,1)?e+"/"+t:this.getAppPath(n)+e+t},e.getAbsoluteUrl=function(e,t,n){var r=this.getCompletePath(e,t),i="css"===t?"css/":"";return e===o.PackageName.SDK_LOADER?this.combine(n.loaderUrl,r,n):e===o.PackageName.CONNECT?this.combine(n.loaderUrl,r,n):this.combine(i,r,n)},e.getCompletePath=function(e,t){return r||(r=new i.ConfigFactory),e+((void 0!==r.getDefinitionFromUrl().IsMinified?r.getDefinitionFromUrl().IsMinified:a.swc.EcsConfig.isMinified)?".min":"")+"."+t},e.setQueryParameters=function(e,t){return e+"?"+this.buildQueryParameters(t)},e.buildQueryParameters=function(e){var t=[];return Object.keys(e).forEach(function(n){t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))}),t.join("&")},e.getHost=function(){try{var e=window.location.hostname;return!e&&e.length>0?e:("file:"===window.location.protocol.toLowerCase()&&(e="local"),e)}catch(e){return null}},e.getVendorPath=function(t){return e.getCDNPath(t)+"/vendors"},e.getConnectPagePath=function(t){return e.getAppPath(t)+"connect.html"},e.getAppPath=function(t){var n=s.getBranchParentFolder(t.version);return e.getCDNPath(t)+"/"+n+"/"+t.version+"/"},e.getCDNPath=function(t){var n=t.domain;return e.validateUriOrDie(n,c),n},e.validateUriOrDie=function(e,t){if(!u.UrlValidator.instance.validate(e,t))throw new Error("Invalid URI!")},e.appendQueryParam=function(e,t,n){return e+(-1===e.indexOf("?")?"?":"&")+encodeURIComponent(t)+"="+encodeURIComponent(n)},e}();t.UrlHelper=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={allowedProtocols:["https:"]},i=function(){function e(){this.probe=document.createElement("a")}return Object.defineProperty(e,"instance",{get:function(){return e.init()},enumerable:!0,configurable:!0}),e.init=function(){return e._instance||(e._instance=new e)},e.prototype.validate=function(e,t){if(!e)return!1;var n=Object.assign(r,t||{}),i=function(e,t){if(!t)return!0;for(var n,r=0,i=t;r<i.length;r++){if(n=i[r]===e)break}return n};this.probe.href=e;var o=i(this.probe.protocol,n.allowedProtocols)&&i(this.probe.hostname,n.allowedDomains)&&i(this.probe.port,n.allowedPorts);return this.probe.href="",o},e}();t.UrlValidator=i},,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);n(30);var i=n(31),o=n(1),a=n(20),s=function(){function e(){var e=this;i.initPolyfills(function(){var t=a.UrlHelper.getAbsoluteUrl(r.PackageName.BUILDER_CORE,"js",o.swc.EcsConfig),n=a.UrlHelper.getAbsoluteUrl(r.PackageName.UICOMPONENT_BUNDLE,"js",o.swc.EcsConfig),i=a.UrlHelper.getAbsoluteUrl(r.PackageName.SDK_CORE,"js",o.swc.EcsConfig);e.exists(".skype-builder")&&o.swc.scriptLoader.addScript(t),o.swc.scriptLoader.addScript(n,function(){o.swc.scriptLoader.addScript(i)})})}return e.prototype.exists=function(e){return!!document.querySelector(e)},e}();t.SdkLoader=s,t.sdkLoader=new s},function(e,t){"function"!=typeof Object.assign&&(Object.assign=function(e){"use strict";if(null==e)throw new TypeError;e=Object(e);for(var t=1;t<arguments.length;t++){var n=arguments[t];if(null!=n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(32),o=n(33);function a(){return!(Array.prototype.find&&Element.prototype.matches&&Object.assign&&window.CustomEvent&&window.Promise&&NodeList.prototype.forEach)}t.shouldPolyfill=a,t.initPolyfills=function(e,t){a()&&!window.polyfillsLoadedCallback?(window.polyfillsLoadedCallback=e,i.addScript(o.getBundleUri(r.PackageName.POLYFILLS,t),!0)):e()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addScript=function(e,t,n,r){void 0===t&&(t=!1);var i=function(){return r&&r("failed to load "+e)},o=setTimeout(i,5e3),a=document.createElement("script");a.src=e,t&&(a.crossOrigin="anonymous"),a.type="text/javascript",a.addEventListener("load",function(){clearTimeout(o),n&&n()}),a.onabort=i;var s=document.body||document.head;s&&s.appendChild(a)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(5),o=n(1),a=n(2);t.getBundleUri=function(e,t){void 0===t&&(t=o.swc.initSettings.version),r||(r=new i.ConfigFactory);var n=t||o.swc.initSettings?o.swc.initSettings.version:o.swc.EcsConfig.version,s=o.swc.EcsConfig.domain||location.host,u=o.swc.EcsConfig.isMinified;return s+(a.isAppVersion(n)?"/v/":"/fb/")+n+"/"+e+((void 0!==r.getDefinitionFromUrl().IsMinified?r.getDefinitionFromUrl().IsMinified:u)?".min":"")+".js"}}]);