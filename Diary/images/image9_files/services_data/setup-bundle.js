/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/bundles/setup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/bundles/setup.ts":
/*!*****************************!*\
  !*** ./ts/bundles/setup.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var packageName_1 = __webpack_require__(/*! ../models/constants/packageName */ "./ts/models/constants/packageName.ts");
var polyfill_1 = __webpack_require__(/*! ../polyfills/polyfill */ "./ts/polyfills/polyfill.ts");
var addScript_1 = __webpack_require__(/*! ../utils/addScript */ "./ts/utils/addScript.ts");
var branch_1 = __webpack_require__(/*! ../utils/branch */ "./ts/utils/branch.ts");
var guid_1 = __webpack_require__(/*! ../utils/guid */ "./ts/utils/guid.ts");
var loadEcs_1 = __webpack_require__(/*! ../utils/loadEcs */ "./ts/utils/loadEcs.ts");
var platformUtil_1 = __webpack_require__(/*! ../utils/platformUtil */ "./ts/utils/platformUtil.ts");
var sdkUtils_1 = __webpack_require__(/*! ../utils/sdkUtils */ "./ts/utils/sdkUtils.ts");
var globalEcsConfig;
var globalSdkConfig;
var globalTrustedOrigin;
// Do not delete, this is ment to save few bytes in SDK
window.swc = window.swc || {};
swc.SDK = swc.SDK || {};
function getDeviceId() {
    var deviceId = localStorage.getItem('swc-deviceId');
    if (!deviceId) {
        deviceId = guid_1.guid.generate();
        localStorage.setItem('swc-deviceId', deviceId);
    }
    return deviceId;
}
function tryParseInheritedConfiguration() {
    try {
        var stringifiedConfig = decodeURIComponent(window.location.hash);
        if (stringifiedConfig.indexOf('#') === 0) {
            stringifiedConfig = stringifiedConfig.substr(1);
        }
        return JSON.parse(stringifiedConfig);
    }
    catch (e) {
        return {};
    }
}
function finishSetup(ecsConfig) {
    globalEcsConfig = ecsConfig;
    globalSdkConfig = sdkUtils_1.setupGlobalVariables(ecsConfig, globalSdkConfig);
    swc.framed = true;
    swc.initSettings.parent = globalTrustedOrigin;
    window.addEventListener('message', onMessage);
    console.log('setup complete');
}
var commandMap = {
    getSwcEcsConfig: function (event) {
        var response = __assign({}, event.data, { config: globalEcsConfig });
        event.source.postMessage(response, globalTrustedOrigin);
    },
    setupServices: function (event) {
        var addServices = function () { return addScript_1.addScript(branch_1.getBundleUri(packageName_1.PackageName.SERVICES)); };
        addScript_1.addScript(branch_1.getBundleUri(packageName_1.PackageName.UICOMPONENT_BUNDLE), false, addServices);
    }
};
function onMessage(event) {
    if (globalTrustedOrigin === event.origin
        && event.data
        && event.data.command
        && commandMap[event.data.command]
        && event.source
        && event.source.postMessage) {
        commandMap[event.data.command](event);
    }
}
exports.default = (function () {
    globalSdkConfig = tryParseInheritedConfiguration();
    globalTrustedOrigin = globalSdkConfig.hostOrigin;
    var platformId = (globalSdkConfig.platformId || '').toString();
    var ecsSwcParams = {
        Environment: globalSdkConfig.environment,
        Host: globalSdkConfig.host,
        Platform: (platformUtil_1.PlatformUtils.getPlatformId(platformId)).toString(),
        AuthType: globalSdkConfig.authType,
        deviceId: globalSdkConfig.deviceId || getDeviceId(),
        version: globalSdkConfig.version
    };
    loadEcs_1.loadEcs("SkypeWebControl" /* SWC */, ecsSwcParams, function (ecsConfig) {
        finishSetup(ecsConfig);
        polyfill_1.initPolyfills(globalSdkConfig.version, ecsConfig.SWC.domain, function () {
            window.parent.postMessage('setup:complete', globalTrustedOrigin);
        });
    });
})();


/***/ }),

/***/ "./ts/models/constants/packageName.ts":
/*!********************************************!*\
  !*** ./ts/models/constants/packageName.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PackageName = /** @class */ (function () {
    function PackageName() {
    }
    PackageName.SDK_LOADER_CHAT = 'sdk-loader';
    PackageName.SDK_CORE = 'sdk-core';
    PackageName.ASSETS = 'assets-bundle';
    PackageName.BUILDER = 'builder-bundle';
    PackageName.BUILDER_CORE = 'builder-core';
    PackageName.CALLING = 'calling-bundle';
    PackageName.CALLING_STANDALONE = 'callingStandalone-bundle';
    PackageName.SERVICES = 'services-bundle';
    PackageName.CHAT_BUNDLE = 'chat-bundle';
    PackageName.RECENTS_BUNDLE = 'recents-bundle';
    PackageName.UICOMPONENT_BUNDLE = 'uicomponent-bundle';
    PackageName.TELEMETRY_BUNDLE = 'telemetry-bundle';
    PackageName.VENDORS = 'vendors';
    PackageName.CONNECT = 'connect';
    PackageName.POLYFILLS = 'polyfills';
    PackageName.HOST_CHAT_PAGE = 'host-chat';
    PackageName.HOST_BING_PAGE = 'host-button';
    PackageName.HOST_BUILDER_PAGE = 'host-builder';
    PackageName.STYLE_BUILDER = 'swc-builder';
    PackageName.STYLE_SDK = 'swc-sdk';
    PackageName.STYLE_CHAT_SKYPE = 'swc-chat';
    PackageName.STYLE_RECENTS_SKYPE = 'swc-recents';
    PackageName.STYLE_CHAT_BING = 'swc-bing';
    PackageName.STYLE_CHAT_THEME_DARK = 'swc-dark';
    PackageName.STYLE_CALLING = 'swc-calling';
    return PackageName;
}());
exports.PackageName = PackageName;


/***/ }),

/***/ "./ts/polyfills/polyfill.ts":
/*!**********************************!*\
  !*** ./ts/polyfills/polyfill.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var packageName_1 = __webpack_require__(/*! ../models/constants/packageName */ "./ts/models/constants/packageName.ts");
var addScript_1 = __webpack_require__(/*! ../utils/addScript */ "./ts/utils/addScript.ts");
var branch_1 = __webpack_require__(/*! ../utils/branch */ "./ts/utils/branch.ts");
exports.shouldPolyfill = function () { return (!Array.prototype.find ||
    !Element.prototype.matches ||
    !Object.assign ||
    !window.CustomEvent ||
    !window.Promise ||
    !NodeList.prototype.forEach); };
exports.initPolyfills = function (version, domain, callback) {
    if (exports.shouldPolyfill()) {
        addScript_1.addScript(branch_1.getBundleUri(packageName_1.PackageName.POLYFILLS, version, domain), true, callback);
    }
    else {
        callback();
    }
};


/***/ }),

/***/ "./ts/swcWindow.ts":
/*!*************************!*\
  !*** ./ts/swcWindow.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var scriptLoader_1 = __webpack_require__(/*! ./utils/scriptLoader */ "./ts/utils/scriptLoader.ts");
var swcWindow = window;
exports.swcWindow = swcWindow;
swcWindow.swc = swcWindow.swc || swcWindow.SkypeWebControl || {};
var swc = swcWindow.swc;
exports.swc = swc;
swcWindow.swc.shared = swcWindow.swc.shared || {};
swcWindow.swc.scriptLoader = swcWindow.swc.scriptLoader || new scriptLoader_1.ScriptLoader();
swcWindow.SKYPE = swcWindow.SKYPE || {};
// For legacy support alias swc to SkypeWebControl
swcWindow.SkypeWebControl = swcWindow.swc;
swcWindow.swc.vendors = swcWindow.swc.vendors || {};
exports.SKYPE = swcWindow.SKYPE || {};


/***/ }),

/***/ "./ts/utils/addGetParamsToUrl.ts":
/*!***************************************!*\
  !*** ./ts/utils/addGetParamsToUrl.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addGetParamsToUrl = function (url, params) {
    var getParams = [];
    var _loop_1 = function (k) {
        if (undefined !== params[k]) {
            var key_1 = encodeURIComponent(k);
            if (Array.isArray(params[k])) {
                params[k].forEach(function (element) {
                    var value = encodeURIComponent(element);
                    getParams.push(key_1 + "=" + value);
                });
            }
            else {
                var value = encodeURIComponent(params[k].toString());
                getParams.push(key_1 + "=" + value);
            }
        }
    };
    for (var k in params) {
        _loop_1(k);
    }
    return url + "?" + getParams.join('&');
};


/***/ }),

/***/ "./ts/utils/addScript.ts":
/*!*******************************!*\
  !*** ./ts/utils/addScript.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function addScript(uri, useCrossOrigin, callback, onError) {
    if (useCrossOrigin === void 0) { useCrossOrigin = false; }
    var onFail = function () { return onError && onError("failed to load " + uri); };
    var timeout = setTimeout(onFail, 5000);
    var onLoad = function () {
        clearTimeout(timeout);
        (function () { return callback && callback(); })();
    };
    var script = document.createElement('script');
    script.src = uri;
    if (useCrossOrigin) {
        script.crossOrigin = 'anonymous';
    }
    script.type = 'text/javascript';
    script.onload = onLoad;
    script.onabort = onFail;
    var container = document.body || document.head;
    if (container) {
        container.appendChild(script);
    }
}
exports.addScript = addScript;


/***/ }),

/***/ "./ts/utils/branch.ts":
/*!****************************!*\
  !*** ./ts/utils/branch.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var swcWindow_1 = __webpack_require__(/*! ../swcWindow */ "./ts/swcWindow.ts");
exports.versionRegExp = /^\d+\.\d+\.\d+$/;
function getBranchParentFolder(branch) {
    return isFeatureBranch(branch) ? 'fb' : 'v';
}
exports.getBranchParentFolder = getBranchParentFolder;
function isAppVersion(version) {
    if (!version) {
        return false;
    }
    return exports.versionRegExp.test(version);
}
exports.isAppVersion = isAppVersion;
function isFeatureBranch(branch) {
    if (!branch) {
        return false;
    }
    return branch.indexOf('fb-') === 0 || branch.indexOf('pr-') === 0;
}
exports.isFeatureBranch = isFeatureBranch;
function getBundleUri(bundleName, vs, dm) {
    var version = vs || swcWindow_1.swc.initSettings.version;
    var domain = dm || swcWindow_1.swc.EcsConfig.domain;
    var prefix = isAppVersion(version) ? '/v/' : '/fb/';
    var suff = domain.indexOf('latest-') === -1 ? '.min' : '';
    return "https://" + (location.host + prefix + version) + "/" + (bundleName + suff) + ".js";
}
exports.getBundleUri = getBundleUri;


/***/ }),

/***/ "./ts/utils/browser.ts":
/*!*****************************!*\
  !*** ./ts/utils/browser.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.getWindow = function () {
        return window;
    };
    Browser.getDocument = function () {
        return window.document;
    };
    Browser.getParentWithClass = function (element, parentClass) {
        while (element && !this.hasClass(element, parentClass)) {
            element = element.parentNode;
        }
        return element;
    };
    Browser.isInViewport = function (bounds, window) {
        window = window || this.getWindow();
        var result = bounds.bottom > 0 &&
            bounds.right > 0 &&
            bounds.top < window.innerHeight &&
            bounds.left < window.innerWidth;
        return result;
    };
    Browser.readDataset = function (element, property, attributeName) {
        return element.dataset ? element.dataset[property] : element.getAttribute('data-' + attributeName);
    };
    Browser.writeDataset = function (element, property, attributeName, value) {
        if (element.dataset) {
            element.dataset[property] = value;
        }
        else {
            element.setAttribute('data-' + attributeName, value);
        }
    };
    Browser.hasClass = function (element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        }
        var classes = element.className
            ? element.className.split(' ')
            : [];
        for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
            var item = classes_1[_i];
            if (item === className) {
                return true;
            }
        }
        return false;
    };
    return Browser;
}());
exports.default = Browser;


/***/ }),

/***/ "./ts/utils/guid.ts":
/*!**************************!*\
  !*** ./ts/utils/guid.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.guid = {
    generate: function () {
        var randomBase = new Uint16Array(8);
        var crypto = window.crypto || window.msCrypto;
        crypto.getRandomValues(randomBase);
        var pointer = 0;
        var s4 = function () {
            // tslint:disable-next-line:no-bitwise
            return (randomBase[pointer++] | 0x1111).toString(16);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },
    isGuid: function (subject) {
        var guidRegEx = /^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$/;
        return guidRegEx.test(subject);
    }
};


/***/ }),

/***/ "./ts/utils/loadEcs.ts":
/*!*****************************!*\
  !*** ./ts/utils/loadEcs.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var addGetParamsToUrl_1 = __webpack_require__(/*! ./addGetParamsToUrl */ "./ts/utils/addGetParamsToUrl.ts");
var addScript_1 = __webpack_require__(/*! ./addScript */ "./ts/utils/addScript.ts");
function loadEcs(clientName, params, callback, onError) {
    var ecsVersion = params.version + ".0";
    if (!/\d+\.\d+\.\d+\.\d+/.test(ecsVersion)) {
        ecsVersion = '1.0.0.0';
    }
    delete params.version;
    var callbackName = "json" + clientName + "EcsCallback";
    params.callback = callbackName;
    var baseUrl = "https://config.edge.skype.com/config/v1/" + clientName + "/" + ecsVersion;
    var uri = addGetParamsToUrl_1.addGetParamsToUrl(baseUrl, params);
    window[callbackName] = function (response) {
        try {
            callback(response);
        }
        catch (e) {
            if (onError) {
                onError(e);
            }
        }
        delete window[callbackName];
    };
    addScript_1.addScript(uri);
}
exports.loadEcs = loadEcs;


/***/ }),

/***/ "./ts/utils/platformUtil.ts":
/*!**********************************!*\
  !*** ./ts/utils/platformUtil.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
window.swc = window.swc || {};
// 935 - default for office
var OfficeMapping;
(function (OfficeMapping) {
    OfficeMapping[OfficeMapping["iwapp"] = 927] = "iwapp";
    OfficeMapping[OfficeMapping["todo"] = 927] = "todo";
    OfficeMapping[OfficeMapping["wac"] = 928] = "wac";
    OfficeMapping[OfficeMapping["powerbi"] = 930] = "powerbi";
    OfficeMapping[OfficeMapping["sharepoint"] = 931] = "sharepoint";
    OfficeMapping[OfficeMapping["adminportal"] = 932] = "adminportal";
    OfficeMapping[OfficeMapping["yammer"] = 933] = "yammer";
    OfficeMapping[OfficeMapping["dynamics365"] = 934] = "dynamics365";
    OfficeMapping[OfficeMapping["dynamicsnav"] = 934] = "dynamicsnav";
})(OfficeMapping || (OfficeMapping = {}));
var NameMapping;
(function (NameMapping) {
    NameMapping[NameMapping["outlook"] = 915] = "outlook";
    NameMapping[NameMapping["interviews"] = 916] = "interviews";
    NameMapping[NameMapping["bing"] = 917] = "bing";
    NameMapping[NameMapping["msn"] = 918] = "msn";
    NameMapping[NameMapping["azureportal"] = 919] = "azureportal";
    NameMapping[NameMapping["onedrive"] = 920] = "onedrive";
    NameMapping[NameMapping["scom"] = 921] = "scom";
    NameMapping[NameMapping["office"] = 927] = "office";
    NameMapping[NameMapping["word"] = 928] = "word";
    NameMapping[NameMapping["excel"] = 929] = "excel";
    NameMapping[NameMapping["powerpoint"] = 930] = "powerpoint";
    NameMapping[NameMapping["sharepoint"] = 931] = "sharepoint";
    NameMapping[NameMapping["adminportal"] = 932] = "adminportal";
    NameMapping[NameMapping["yammer"] = 933] = "yammer";
    NameMapping[NameMapping["dynamics"] = 934] = "dynamics";
    NameMapping[NameMapping["office default"] = 935] = "office default";
})(NameMapping = exports.NameMapping || (exports.NameMapping = {}));
var DomainMapping;
(function (DomainMapping) {
    DomainMapping[DomainMapping["outlook.live.com"] = 915] = "outlook.live.com";
    DomainMapping[DomainMapping["outlook-sdf.live.com"] = 915] = "outlook-sdf.live.com";
    DomainMapping[DomainMapping["outlook.office.com"] = 915] = "outlook.office.com";
    DomainMapping[DomainMapping["outlook-sdf.office.com"] = 915] = "outlook-sdf.office.com";
    DomainMapping[DomainMapping["interviews.skype.com"] = 916] = "interviews.skype.com";
    DomainMapping[DomainMapping["interviews-df.skype.com"] = 916] = "interviews-df.skype.com";
    DomainMapping[DomainMapping["interviews-int.skype.com"] = 916] = "interviews-int.skype.com";
    DomainMapping[DomainMapping["www.bing.com"] = 917] = "www.bing.com";
    DomainMapping[DomainMapping["www.staging-bing-int.com"] = 917] = "www.staging-bing-int.com";
    DomainMapping[DomainMapping["www.bing-int.com"] = 917] = "www.bing-int.com";
    DomainMapping[DomainMapping["www.msn.com"] = 918] = "www.msn.com";
    DomainMapping[DomainMapping["int.msn.com"] = 918] = "int.msn.com";
    DomainMapping[DomainMapping["int1.msn.com"] = 918] = "int1.msn.com";
    DomainMapping[DomainMapping["wtskype2.azurewebsites.net"] = 919] = "wtskype2.azurewebsites.net";
    DomainMapping[DomainMapping["azuresupportextension-ms.hosting.portal.azure.net"] = 919] = "azuresupportextension-ms.hosting.portal.azure.net";
    DomainMapping[DomainMapping["portal.azure.com"] = 919] = "portal.azure.com";
    DomainMapping[DomainMapping["rc.portal.azure.com"] = 919] = "rc.portal.azure.com";
    DomainMapping[DomainMapping["ms.portal.azure.com"] = 919] = "ms.portal.azure.com";
    DomainMapping[DomainMapping["onedrive.live.com"] = 920] = "onedrive.live.com";
    DomainMapping[DomainMapping["www.skype.com"] = 921] = "www.skype.com";
    DomainMapping[DomainMapping["www.office.com"] = 927] = "www.office.com";
    DomainMapping[DomainMapping["microsoft-my.sharepoint.com"] = 931] = "microsoft-my.sharepoint.com";
    DomainMapping[DomainMapping["www.onedrive.com"] = 920] = "www.onedrive.com";
    DomainMapping[DomainMapping["word.office.com"] = 928] = "word.office.com";
    DomainMapping[DomainMapping["word.live.com"] = 928] = "word.live.com";
    DomainMapping[DomainMapping["excell.office.com"] = 929] = "excell.office.com";
    DomainMapping[DomainMapping["excell.live.com"] = 929] = "excell.live.com";
    DomainMapping[DomainMapping["powerpoint.office.com"] = 930] = "powerpoint.office.com";
    DomainMapping[DomainMapping["powerpoint.live.com"] = 930] = "powerpoint.live.com";
    DomainMapping[DomainMapping["sharepoint.office.com"] = 931] = "sharepoint.office.com";
    DomainMapping[DomainMapping["adminportal.office.com"] = 932] = "adminportal.office.com";
    DomainMapping[DomainMapping["www.yammer.com"] = 933] = "www.yammer.com";
    DomainMapping[DomainMapping["dynamics.office.com"] = 934] = "dynamics.office.com";
    DomainMapping[DomainMapping[".office.com"] = 935] = ".office.com";
})(DomainMapping || (DomainMapping = {}));
var PlatformUtils = /** @class */ (function () {
    function PlatformUtils() {
    }
    PlatformUtils.getPlatformId = function (platformAttr) {
        if (platformAttr === void 0) { platformAttr = null; }
        if (this._platformId) {
            return this._platformId;
        }
        if (swc.SDK && swc.SDK.platformId && swc.SDK.platformId > 0) {
            this._platformId = swc.SDK.platformId;
            return this._platformId;
        }
        var detectedPlaformId = -1;
        if (platformAttr) {
            detectedPlaformId = this.getPlatformIdByAttribute(platformAttr);
        }
        if (detectedPlaformId <= 0) {
            detectedPlaformId = this.getPlatformIdByDomain();
        }
        if (detectedPlaformId > 0) {
            return detectedPlaformId;
        }
        return 912;
    };
    PlatformUtils.getPlatformIdByAttribute = function (attr) {
        if (attr) {
            attr = attr.trim().toLowerCase();
            var parsedId = parseInt(attr, 10);
            if (parsedId && parsedId > 0) {
                return parsedId;
            }
            else {
                return this.getPlatformIdForOffice(attr);
            }
        }
        return -1;
    };
    PlatformUtils.getPlatformName = function () {
        var pId = this.getPlatformId();
        if (NameMapping[pId]) {
            return NameMapping[pId];
        }
        return 'other';
    };
    PlatformUtils.getPlatformIdForOffice = function (officeId) {
        return OfficeMapping[officeId] || 935;
    };
    PlatformUtils.getPlatformIdByDomain = function () {
        var host = PlatformUtils.getHost();
        if (DomainMapping.hasOwnProperty(host)) {
            return DomainMapping[host];
        }
        for (var k in DomainMapping) {
            if (k.charAt(0) === '.' && host.indexOf(k) > 0) {
                return DomainMapping[k];
            }
        }
        return -1;
    };
    PlatformUtils.getHost = function () {
        try {
            var hostname = window.location.hostname;
            if (!hostname && hostname.length > 0) {
                return hostname;
            }
            if (window.location.protocol.toLowerCase() === 'file:') {
                hostname = 'local';
            }
            return hostname;
        }
        catch (e) {
            return null;
        }
    };
    return PlatformUtils;
}());
exports.PlatformUtils = PlatformUtils;


/***/ }),

/***/ "./ts/utils/scriptLoader.ts":
/*!**********************************!*\
  !*** ./ts/utils/scriptLoader.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(/*! ./browser */ "./ts/utils/browser.ts");
var ScriptLoader = /** @class */ (function () {
    function ScriptLoader() {
        this.loaded = [];
        this.progress = {};
    }
    ScriptLoader.prototype.addScript = function (uri, onLoaded, onFailed) {
        var _this = this;
        if (this.loaded.indexOf(uri) !== -1) {
            if (onLoaded) {
                onLoaded();
            }
            return;
        }
        var r = this.progress;
        if (r[uri]) {
            if (onLoaded && r[uri].success.indexOf(onLoaded) === -1) {
                r[uri].success.push(onLoaded);
            }
            if (onFailed && r[uri].failure.indexOf(onFailed) === -1) {
                r[uri].failure.push(onFailed);
            }
            return;
        }
        r[uri] = { success: [], failure: [] };
        if (onLoaded) {
            r[uri].success.push(onLoaded);
        }
        if (onFailed) {
            r[uri].failure.push(onFailed);
        }
        var document = browser_1.default.getDocument();
        var script = document.createElement('script');
        script.crossOrigin = 'anonymous';
        script.type = 'text/javascript';
        script.src = uri;
        if (onLoaded) {
            script.onload = function () {
                _this.progress[uri].success.forEach(function (fn) {
                    try {
                        fn();
                    }
                    catch (e) {
                        console.error('[scriptLoader] loaded callback failed:', e);
                    }
                });
                delete _this.progress[uri];
                _this.loaded.push(uri);
            };
        }
        if (onFailed) {
            script.onerror = function () {
                _this.progress[uri].failure.forEach(function (fn) {
                    try {
                        fn();
                    }
                    catch (e) {
                        console.error('[scriptLoader] error callback failed:', e);
                    }
                });
                delete _this.progress[uri];
            };
        }
        document.getElementsByTagName('body')[0].appendChild(script);
    };
    return ScriptLoader;
}());
exports.ScriptLoader = ScriptLoader;


/***/ }),

/***/ "./ts/utils/sdkUtils.ts":
/*!******************************!*\
  !*** ./ts/utils/sdkUtils.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var branch_1 = __webpack_require__(/*! ./branch */ "./ts/utils/branch.ts");
var guid_1 = __webpack_require__(/*! ./guid */ "./ts/utils/guid.ts");
var platformUtil_1 = __webpack_require__(/*! ./platformUtil */ "./ts/utils/platformUtil.ts");
var QUERY_PARAM_PREFIX = 'swc-';
// Do not delete, this is ment to save few bytes in SDK
window.swc = window.swc || {};
swc.SDK = swc.SDK || {};
var doc = window.document;
var queryParams = {};
var sdkScript;
(function () {
    var variables = window.location.search.substring(1).split('&').filter(function (value) {
        return value.indexOf(QUERY_PARAM_PREFIX) === 0;
    });
    variables.forEach(function (variable) {
        var tuple = variable.split('=');
        queryParams[decodeURIComponent(tuple[0])] = decodeURIComponent(tuple[1]) || '';
    });
})();
(function () {
    var sdkRegex = /((sdk\/(v\d+))|(\d+\.\d+\.\d+))\/(sdk)(.min)?.js$/g;
    for (var i = 0; i < doc.scripts.length; i++) {
        var script = document.scripts[i];
        if (sdkRegex.test(script.src)) {
            sdkScript = script;
        }
    }
})();
function parseBoolean(val) {
    return !!((null !== val && undefined !== val)
        && (val === '' || val.toLowerCase() === 'true'));
}
function getSdkAttribute(name) {
    try {
        return sdkScript.getAttribute("data-" + name);
    }
    catch (e) {
        return undefined;
    }
}
function getQueryParam(name) {
    return queryParams[QUERY_PARAM_PREFIX + name];
}
function getLocalStorageParam(name) {
    try {
        var storage = JSON.parse(window.sessionStorage.getItem('swcSdkOverrides'));
        return storage[name];
    }
    catch (e) {
        return undefined;
    }
}
function getSdkParam(name) {
    return getQueryParam(name) || getLocalStorageParam(name) || getSdkAttribute(name);
}
function getDeviceId() {
    var deviceId = localStorage.getItem('swc-deviceId');
    if (!deviceId) {
        deviceId = guid_1.guid.generate();
        localStorage.setItem('swc-deviceId', deviceId);
    }
    return deviceId;
}
exports.getDeviceId = getDeviceId;
function isEnvironment(version) {
    if (!version) {
        return false;
    }
    var v = version.toLowerCase();
    return v === "prod" /* Prod */ || v === "df" /* Df */ || v === "int" /* Int */ || v === "ppe" /* Ppe */;
}
exports.isEnvironment = isEnvironment;
function getIsProd() {
    if (sdkScript && sdkScript.src.indexOf('latest-swc.') > -1) {
        return false;
    }
    return true;
}
exports.getIsProd = getIsProd;
function getVersion() {
    return getSdkParam("version" /* Version */);
}
exports.getVersion = getVersion;
function isAutostartEnabled() {
    var isManualBoot = parseBoolean(getSdkParam("manual-boot" /* ManualBootstrap */));
    var isAutostartDisabled = parseBoolean(getSdkParam("disable-autostart" /* DisableAutostart */));
    return !(isManualBoot || isAutostartDisabled);
}
exports.isAutostartEnabled = isAutostartEnabled;
var authType;
function getAuthType() {
    if (!authType) {
        var value = (getSdkParam("auth-type" /* AuthType */) || '').toLowerCase();
        if (value === "msa" /* Msa */ || value === "aad" /* Aad */) {
            authType = value;
        }
        else {
            authType = "msa" /* Msa */;
        }
    }
    return authType;
}
exports.getAuthType = getAuthType;
// this is a legacy support of Environment attribute, this should be removed.
function getEnvironment() {
    var defaultEnv = getIsProd() ? "prod" /* Prod */ : "df" /* Df */;
    var v = (getVersion() || '').toLowerCase();
    var envFromVersion = isEnvironment(v) ? v : (branch_1.isFeatureBranch(v) ? "int" /* Int */ : undefined);
    var env = (envFromVersion
        || getSdkParam("env" /* Env */)
        || getSdkParam("environment" /* Environment */)
        || '').toLowerCase();
    return (isEnvironment(env) ? env : defaultEnv).toLowerCase();
}
exports.getEnvironment = getEnvironment;
function getDomain(env) {
    if ("prod" /* Prod */ === env || "ppe" /* Ppe */ === env) {
        return 'https://swc.cdn.skype.com';
    }
    else {
        return 'https://latest-swc.cdn.skype.com';
    }
}
exports.getDomain = getDomain;
function getCdnUrl(env, version, fileName) {
    var url = getDomain(env);
    var dir = branch_1.getBranchParentFolder(version);
    return url + "/" + dir + "/" + version + "/" + fileName;
}
exports.getCdnUrl = getCdnUrl;
function getHost() {
    try {
        return window.location.hostname;
    }
    catch (e) {
        return null;
    }
}
exports.getHost = getHost;
function getPlatformId() {
    var platformIdAttr = getSdkParam("platform-id" /* PlatformId */);
    return platformUtil_1.PlatformUtils.getPlatformId(platformIdAttr);
}
exports.getPlatformId = getPlatformId;
function isValidVersion(version) {
    return version && (branch_1.isFeatureBranch(version) || branch_1.isAppVersion(version));
}
exports.isValidVersion = isValidVersion;
function setupGlobalVariables(ecsConfig, sdkConfig) {
    var version = sdkConfig.version;
    if (!swc.SDK) {
        swc.SDK = {};
    }
    sdkConfig.version = isValidVersion(version) ? version : ecsConfig.SWC_Rollout.version;
    swc.SDK = __assign({}, swc.SDK, sdkConfig);
    swc.initSettings = __assign({}, sdkConfig, { parent: window.location.origin });
    swc.EcsConfig = __assign({}, ecsConfig.SWC, ecsConfig.SWC_Rollout, { version: swc.SDK.version });
    swc.EcsHeaderConfig = ecsConfig.Headers;
    return swc.initSettings;
}
exports.setupGlobalVariables = setupGlobalVariables;


/***/ })

/******/ });
//# sourceMappingURL=setup-bundle.js.map