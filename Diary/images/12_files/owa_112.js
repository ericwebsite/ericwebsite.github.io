self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.SkypeOptions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[372],{11898:function(i,t,e){"use strict";e.r(t);var n=e(0),a=e(1),o=Object(a.mutatorAction)("updateSkypeUserOption",function(i,t,e){i[t]=e}),c=e(4818),s=e(5227),r=e(5),g=e(4624),f=e(266);function u(){var i=Object(f.c)(f.a.SkypeNotifications),t=function(i){return i.skypeMessageNotification==c.a.Migrated&&i.skypeCallingNotification==c.a.Migrated}(i);Object(r.d)("fwk-skypeSettingsMigration")?t?window.swc.getNotificationSettings().then(function(i){var t=Object(s.a)();i.readOption(g.a.IncomingCall).then(function(i){o(t,"skypeCallingNotification",Object(g.c)(i.value))}),i.readOption(g.a.NewMessage).then(function(i){o(t,"skypeMessageNotification",Object(g.c)(i.value))})}):function(i){n.__awaiter(this,void 0,void 0,function(){var t,e,a,r;return n.__generator(this,function(n){switch(n.label){case 0:return[4,window.swc.getNotificationSettings()];case 1:return t=n.sent(),e=Object(s.a)(),i.skypeMessageNotification!=c.a.Migrated&&(a=Object(g.b)(i.skypeMessageNotification),t.setOption({name:g.a.NewMessage,value:a}),o(e,"skypeMessageNotification",i.skypeMessageNotification)),i.skypeCallingNotification!=c.a.Migrated&&(r=Object(g.b)(i.skypeCallingNotification),t.setOption({name:g.a.IncomingCall,value:r}),o(e,"skypeCallingNotification",i.skypeCallingNotification)),o(i,"skypeCallingNotification",c.a.Migrated),o(i,"skypeMessageNotification",c.a.Migrated),f.d.importAndExecute(f.a.SkypeNotifications,i),[2]}})})}(i):t&&function(i){n.__awaiter(this,void 0,void 0,function(){var t;return n.__generator(this,function(e){switch(e.label){case 0:return[4,window.swc.getNotificationSettings()];case 1:return t=e.sent(),i.skypeMessageNotification==c.a.Migrated&&t.readOption(g.a.NewMessage).then(function(t){o(i,"skypeMessageNotification",Object(g.c)(t.value))}),i.skypeCallingNotification==c.a.Migrated&&t.readOption(g.a.IncomingCall).then(function(t){o(i,"skypeCallingNotification",Object(g.c)(t.value))}),f.d.importAndExecute(f.a.SkypeNotifications,i),[2]}})})}(i)}e.d(t,"initializeNotificationSettings",function(){return u})}}]);
//# sourceMappingURL=owa.SkypeOptions.js.map
self.scriptsLoaded['owa.SkypeOptions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.SkypeOptions.js'] = (new Date()).getTime();