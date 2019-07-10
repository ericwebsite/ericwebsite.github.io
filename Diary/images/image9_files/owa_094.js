self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.656.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[656],{11756:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(225),i=n(238),a=n(31),s=n(246),c=n(12),u=n(13);function d(e,t){return r.__awaiter(this,void 0,void 0,function(){var n,o;return r.__generator(this,function(r){return 1===(n=t.tableQuery).listViewType?(o={Id:e,mailboxInfo:Object(i.c)(n)},[2,Object(s.j)(o,"LoadNudgedItem")]):[2,l(e,t)]})})}function l(e,t){return r.__awaiter(this,void 0,void 0,function(){var n,d;return r.__generator(this,function(r){return n=t.tableQuery,d=Object(i.c)(n),[2,a.E.importAndExecute(Object(u.i)(n),e,Object(o.e)(n),n.requestShapeName,d.requestOptions).then(function(t){if("Success"==t.ResponseClass){var n=t.Conversations;if(n&&n.length>0&&n[0].ConversationId.Id===e){var r={Id:e,mailboxInfo:d};return Object(s.i)(r,"LoadNudgedConversation"),n[0]}}return null}).catch(function(e){return c.c.warn("loadNudgedConversation throws an exception"+e.message),null})]})})}var b=n(94),f=n(75),w="FocusedInbox/api/v1/Nudges/GetNudges";function O(){return r.__awaiter(this,void 0,void 0,function(){var e;return r.__generator(this,function(t){switch(t.label){case 0:return[4,Object(f.b)(w,Object(b.a)(),!0)];case 1:e=t.sent(),t.label=2;case 2:return t.trys.push([2,4,,5]),[4,e.json()];case 3:return[2,t.sent()];case 4:return t.sent(),[2,null];case 5:return[2]}})})}var g=n(23);function v(e){switch(e){case"Received":return 0;case"Sent":return 1;default:return c.c.warn("No nudge reason returned in GetNudge server response"),0}}var I=n(5),j=n(795),h=n(1274),m=n(33),p=n(5864);function y(e){if(!Object(I.d)("tri-nudge")||Object(p.a)(16))return!1;if(e===Object(m.a)("inbox")){var t=Object(j.a)(e),n={sortColumn:1,sortDirection:h.DESCENDING_SORT_DIR};return t.sortColumn==n.sortColumn&&t.sortDirection==n.sortDirection}return!1}var _=n(895),N=n(1999),K=n(322);function C(e,t){var n=t.rowKeys.indexOf(e);if(n>=0&&!u.b.getIsPinned(e,t)){var r=Object(N.a)(u.b.getLastDeliveryOrRenewTimeStamp(e,t),u.b.getLastDeliveryTimeStamp(e,t),t,n+1,!0);-1==r?Object(_.a)([e],t):K.a.updateRowPosition(--r,e,t)}}var S=n(3),R=n(1009),V=n(268),x=n(607),D=n(73),A=!1,P=Object(S.e)(R.a,"clone_onSelectFolderComplete",function(e){return r.__awaiter(void 0,void 0,void 0,function(){var t,n,o,i,a,s;return r.__generator(this,function(c){switch(c.label){case 0:return A||!y(e.selectedFolderId)?[2]:(t=Object(u.C)()).tableQuery.folderId!=Object(m.a)("inbox")?[2]:(A=!0,[4,O()]);case 1:if(n=c.sent(),o=[],!n||!n.Nudges)return[3,5];i=n.Nudges,a=0,c.label=2;case 2:return a<i.length?[4,F(i[a],t)]:[3,5];case 3:(s=c.sent())&&o.push(s),c.label=4;case 4:return a++,[3,2];case 5:return o.push.apply(o,r.__spread(function(e){var t=Object(g.a)("testNudge");if(0==decodeURIComponent(t||"").trim().length)return[];if(e.rowKeys.length>0){var n={rowKey:e.rowKeys[0],itemId:u.b.getItemIds(e.rowKeys[0],e)[0],conversationId:u.b.getConversationId(e.rowKeys[0],e),tableViewId:e.id,reason:0,daysAgo:5};return e.rowKeys.length>10?[n,{rowKey:e.rowKeys[10],itemId:u.b.getItemIds(e.rowKeys[10],e)[0],conversationId:u.b.getConversationId(e.rowKeys[10],e),tableViewId:e.id,reason:1,daysAgo:3}]:[n]}return[]}(t))),Object(x.d)().nudgedRows.forEach(function(e){o.some(function(t){return t.rowKey===e.rowKey&&t.tableViewId===e.tableViewId})||C(e.rowKey,t)}),o.forEach(function(e){return function(e,t){if(!u.b.getIsPinned(e,t)){var n=Object(V.f)(t,0);K.a.updateRowPosition(n,e,t)}}(e.rowKey,t)}),Object(x.g)(o),A=!1,[2]}})})});function F(e,t){return r.__awaiter(this,void 0,void 0,function(){var n,o,a,l,b,f,w,O;return r.__generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),n=e.ItemId.Id,o=e.ConversationId.Id,a=0===t.tableQuery.listViewType?o:n,l=void 0,0!==(b=Object(u.B)([a],t)).length?[3,2]:[4,d(a,t)];case 1:return(f=r.sent())?(l=f.InstanceKey,t.rowKeys.indexOf(l)<0&&(w=Object(V.f)(t,0),K.a.addRow(w,f,t)),[3,3]):(c.c.warn("Unable to load nudged row for list view type:"+t.tableQuery.listViewType),[2,null]);case 2:l=b[0],function(e,t){if(1===e.listViewType){var n=Object(D.c)().items.get(t);n&&n.NormalizedBody||Object(s.j)({Id:t,mailboxInfo:Object(i.c)(e)},"LoadNudgedItem")}else Object(D.c)().conversations.get(t)||Object(s.i)({Id:t,mailboxInfo:Object(i.c)(e)},"LoadNudgedConversation")}(t.tableQuery,a),r.label=3;case 3:return[2,{rowKey:l,itemId:n,conversationId:o,tableViewId:t.id,reason:v(e.NudgeReason.Reason),daysAgo:e.NudgeReason.EmailAgeInDays}];case 4:return O=r.sent(),c.c.warn("processNudgeResponse throws an exception"+O.message),[2,null];case 5:return[2]}})})}var U=n(252),E="FocusedInbox/api/v1/Nudges/UpdateNudges";function B(e,t){return r.__awaiter(this,void 0,void 0,function(){var n,o;return r.__generator(this,function(r){switch(r.label){case 0:return n={ItemId:{Id:e},NudgeAction:t},[4,Object(f.d)(E,n,Object(b.a)())];case 1:o=r.sent();try{Object(U.a)(o.status)||c.c.warn("updateNudgesOperation return http status "+o.status)}catch(e){return c.c.info("updateNudgesOperation return error "+e.message),[2,null]}return[2]}})})}var L=n(923),T=n(1749),k=n(1748),Q=n(2778),M=n(2779),G=Object(S.e)(M.a,"clone_onDismissNudgeInfoBar",function(e){B(e.itemId,"Dismissed"),Object(x.h)(e.rowKey),C(e.rowKey,Object(u.C)())}),q=Object(S.e)(L.a,"clone_deleteItemsStoreUpdate",function(e){e.itemContexts.map(function(e){return e.itemId}).forEach(function(e){var t=Object(x.b)(e);t&&Object(x.h)(t)})}),$=Object(S.e)(_.a,"clone_removeRowsFromListViewStore",function(e){W(e.rowKeys,e.tableView.id)}),z=Object(S.e)(k.a,"clone_markItemsAsPinnedStoreUpdate",function(e){X(e.rowKeys,e.tableViewId,e.shouldMarkAsPinned),e.shouldMarkAsPinned&&W(e.rowKeys,e.tableViewId)}),H=Object(S.e)(T.a,"clone_markConversationsAsPinnedStoreUpdate",function(e){X(e.rowKeys,e.tableViewId,e.shouldMarkAsPinned),e.shouldMarkAsPinned&&W(e.rowKeys,e.tableViewId)}),J=Object(S.e)(Q.a,"clone_onSendMessageSucceeded",function(e){if(1===e.operation||2===e.operation||3===e.operation){var t=Object(x.b)(e.referenceItemId.Id);t&&Object(x.h)(t)}});function W(e,t){e.forEach(function(e){Object(x.e)(e,t)&&Object(x.h)(e)})}function X(e,t,n){e.forEach(function(e){var r=Object(x.d)().nudgedRows.filter(function(n){return n.rowKey===e&&n.tableViewId==t});1==r.length&&B(r[0].itemId,n?"Pinned":"Unpinned")})}n.d(t,"getNudgesOrchestrator",function(){return P}),n.d(t,"removeNudgeOnDismissOrchestrator",function(){return G}),n.d(t,"removeNudgeOnItemDeleteStoreUpdateOrchestrator",function(){return q}),n.d(t,"removeNudgeOnRowsDeleteStoreUpdateOrchestrator",function(){return $}),n.d(t,"removeNudgeOnItemsPinnedStoreUpdateOrchestrator",function(){return z}),n.d(t,"removeNudgeOnConversationsPinnedStoreUpdateOrchestrator",function(){return H}),n.d(t,"removeNudgeOnReplyOrReplyAllOrForwardOrchestrator",function(){return J})},5864:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a});var r=n(27),o=n(7);function i(e){return!!(e&Object(r.f)().ViewStateConfiguration.FocusedInboxBitFlags)}var a=Object(o.action)("setBit")(function(e,t){i(t)!==e&&(e?Object(r.f)().ViewStateConfiguration.FocusedInboxBitFlags|=t:Object(r.f)().ViewStateConfiguration.FocusedInboxBitFlags&=~t)})}},0,[0,1,30,474,155,4,7,8,19,292,11,513,354,2,6,9,107,3,5,288,12,37,103,463,87,464,98,498,299,195,287,445,447,567]]);
//# sourceMappingURL=owa.656.js.map
self.scriptsLoaded['owa.656.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.656.js'] = (new Date()).getTime();