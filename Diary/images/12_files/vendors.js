!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=672)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(61),i=window;t.swcWindow=i,i.swc=i.swc||i.SkypeWebControl||{};var s=i.swc;t.swc=s,i.swc.shared=i.swc.shared||{},i.swc.scriptLoader=i.swc.scriptLoader||new r.ScriptLoader,i.SKYPE=i.SKYPE||{},i.SkypeWebControl=i.swc,i.swc.vendors=i.swc.vendors||{},t.SKYPE=i.SKYPE||{}},27:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.getWindow=function(){return window},e.getDocument=function(){return window.document},e.getParentWithClass=function(e,t){for(;e&&!this.hasClass(e,t);)e=e.parentNode;return e},e.isInViewport=function(e,t){return t=t||this.getWindow(),e.bottom>0&&e.right>0&&e.top<t.innerHeight&&e.left<t.innerWidth},e.readDataset=function(e,t,n){return e.dataset?e.dataset[t]:e.getAttribute("data-"+n)},e.writeDataset=function(e,t,n,r){e.dataset?e.dataset[t]=r:e.setAttribute("data-"+n,r)},e.hasClass=function(e,t){if(e.classList)return e.classList.contains(t);for(var n=0,r=e.className?e.className.split(" "):[];n<r.length;n++){if(r[n]===t)return!0}return!1},e}();t.default=r},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),i=function(){function e(){this.loaded=[],this.progress={}}return e.prototype.addScript=function(e,t,n){var i=this;if(-1===this.loaded.indexOf(e)){var s=this.progress;if(s[e])return t&&-1===s[e].success.indexOf(t)&&s[e].success.push(t),void(n&&-1===s[e].failure.indexOf(n)&&s[e].failure.push(n));s[e]={success:[],failure:[]},t&&s[e].success.push(t),n&&s[e].failure.push(n);var o=r.default.getDocument(),a=o.createElement("script");a.crossOrigin="anonymous",a.type="text/javascript",a.src=e,t&&(a.onload=function(){i.progress[e].success.forEach(function(e){try{e()}catch(e){}}),delete i.progress[e],i.loaded.push(e)}),n&&(a.onerror=function(){i.progress[e].failure.forEach(function(e){try{e()}catch(e){}}),delete i.progress[e]}),o.getElementsByTagName("body")[0].appendChild(a)}else t&&t()},e}();t.ScriptLoader=i},672:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);r.swc.vendors.purify=r.swcWindow.DOMPurify=r.swcWindow.DOMPurify||n(673);r.swcWindow.DOMPurify.addHook("beforeSanitizeAttributes",function(e,t,n){return e&&e.tagName&&"a"===e.tagName.toLowerCase()&&(e.hasAttribute("target")||e.setAttribute("target","_blank")),e}),r.swc.vendors.marked=n(674)},673:function(e,t,n){var r;!function(i){"use strict";var s="undefined"==typeof window?null:window;void 0===(r=function(){return function e(t){var n=function(t){return e(t)};if(n.version="0.8.3",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,i=r,s=t.DocumentFragment,o=t.HTMLTemplateElement,a=t.NodeFilter,l=t.NamedNodeMap||t.MozNamedAttrMap,u=t.Text,c=t.Comment,p=t.DOMParser;if("function"==typeof o){var h=r.createElement("template");h.content&&h.content.ownerDocument&&(r=h.content.ownerDocument)}var d=r.implementation,f=r.createNodeIterator,g=r.getElementsByTagName,m=r.createDocumentFragment,b=i.importNode,y={};n.isSupported=void 0!==d.createHTMLDocument&&9!==r.documentMode;var k=function(e,t){for(var n=t.length;n--;)"string"==typeof t[n]&&(t[n]=t[n].toLowerCase()),e[t[n]]=!0;return e},x=function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},v=null,w=k({},["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr","svg","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","switch","symbol","text","textpath","title","tref","tspan","view","vkern","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","#text"]),_=null,S=k({},["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns","accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mode","min","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","surfacescale","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","y","y1","y2","z","zoomandpan","accent","accentunder","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","display","displaystyle","fence","frame","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),T=null,A=null,L=!0,O=!1,E=!1,M=!1,C=/\{\{[\s\S]*|[\s\S]*\}\}/gm,N=/<%[\s\S]*|[\s\S]*%>/gm,D=!1,$=!1,z=!1,P=!1,R=!0,j=!0,q=k({},["audio","head","math","script","style","svg","video"]),F=k({},["audio","video","img","source"]),H=k({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),W=null,I=r.createElement("form"),B=function(e){n.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},U=function(e,t){n.removed.push({attribute:t.getAttributeNode(e),from:t}),t.removeAttribute(e)},G=function(e){return f.call(e.ownerDocument||e,e,a.SHOW_ELEMENT|a.SHOW_COMMENT|a.SHOW_TEXT,function(){return a.FILTER_ACCEPT},!1)},K=function(e){var t,r;if(ee("beforeSanitizeElements",e,null),function(e){if(e instanceof u||e instanceof c)return!1;if("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof l)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute)return!0;return!1}(e))return B(e),!0;if(t=e.nodeName.toLowerCase(),ee("uponSanitizeElement",e,{tagName:t}),!v[t]||T[t]){if(j&&!q[t]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return B(e),!0}return!E||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(n.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"&lt;")),M&&3===e.nodeType&&(r=(r=(r=e.textContent).replace(C," ")).replace(N," "),e.textContent!==r&&(n.removed.push({element:e.cloneNode()}),e.textContent=r)),ee("afterSanitizeElements",e,null),!1},Y=/^data-[\-\w.\u00B7-\uFFFF]/,V=/^(?:(?:(?:f|ht)tps?|mailto|tel|skype):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,J=/^(?:\w+script|data):/i,Q=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,X=function(e){var i,s,o,a,l,u,c,p;if(ee("beforeSanitizeAttributes",e,null),u=e.attributes){for(c={attrName:"",attrValue:"",keepAttr:!0},p=u.length;p--;)if(i=u[p],s=i.name,o=i.value,a=s.toLowerCase(),c.attrName=a,c.attrValue=o,c.keepAttr=!0,ee("uponSanitizeAttribute",e,c),o=c.attrValue,"name"===a&&"IMG"===e.nodeName&&u.id?(l=u.id,u=Array.prototype.slice.apply(u),U("id",e),U(s,e),u.indexOf(l)>p&&e.setAttribute("id",l.value)):("id"===s&&e.setAttribute(s,""),U(s,e)),c.keepAttr&&(!R||"id"!==a&&"name"!==a||!(o in t||o in r||o in I))){if(M&&(o=(o=o.replace(C," ")).replace(N," ")),L&&Y.test(a));else{if(!_[a]||A[a])continue;if(H[a]);else if(V.test(o.replace(Q,"")));else if("src"===a&&0===o.indexOf("data:")&&F[e.nodeName.toLowerCase()]);else if(O&&!J.test(o.replace(Q,"")));else if(o)continue}try{e.setAttribute(s,o),n.removed.pop()}catch(e){}}ee("afterSanitizeAttributes",e,null)}},Z=function(e){var t,n=G(e);for(ee("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)ee("uponSanitizeShadowNode",t,null),K(t)||(t.content instanceof s&&Z(t.content),X(t));ee("afterSanitizeShadowDOM",e,null)},ee=function(e,t,r){y[e]&&y[e].forEach(function(e){e.call(n,t,r,W)})};return n.sanitize=function(e,r){var o,a,l,u,c;if(e||(e=""),"string"!=typeof e){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");e=e.toString()}if(!n.isSupported)return"object"==typeof t.toStaticHTML||"function"==typeof t.toStaticHTML?t.toStaticHTML(e):e;if(function(e){"object"!=typeof e&&(e={}),v="ALLOWED_TAGS"in e?k({},e.ALLOWED_TAGS):w,_="ALLOWED_ATTR"in e?k({},e.ALLOWED_ATTR):S,T="FORBID_TAGS"in e?k({},e.FORBID_TAGS):{},A="FORBID_ATTR"in e?k({},e.FORBID_ATTR):{},L=!1!==e.ALLOW_DATA_ATTR,O=e.ALLOW_UNKNOWN_PROTOCOLS||!1,E=e.SAFE_FOR_JQUERY||!1,M=e.SAFE_FOR_TEMPLATES||!1,D=e.WHOLE_DOCUMENT||!1,$=e.RETURN_DOM||!1,z=e.RETURN_DOM_FRAGMENT||!1,P=e.RETURN_DOM_IMPORT||!1,R=!1!==e.SANITIZE_DOM,j=!1!==e.KEEP_CONTENT,M&&(L=!1),z&&($=!0),e.ADD_TAGS&&(v===w&&(v=x(v)),k(v,e.ADD_TAGS)),e.ADD_ATTR&&(_===S&&(_=x(_)),k(_,e.ADD_ATTR)),j&&(v["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(e),W=e}(r),n.removed=[],!$&&!D&&-1===e.indexOf("<"))return e;if(!(o=function(e){var t,n;try{t=(new p).parseFromString(e,"text/html")}catch(e){}return t&&t.documentElement||(t=d.createHTMLDocument(""),(n=t.body).parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=e),"function"==typeof t.getElementsByTagName?t.getElementsByTagName(D?"html":"body")[0]:g.call(t,D?"html":"body")[0]}(e)))return $?null:"";for(u=G(o);a=u.nextNode();)3===a.nodeType&&a===l||K(a)||(a.content instanceof s&&Z(a.content),X(a),l=a);if($){if(z)for(c=m.call(o.ownerDocument);o.firstChild;)c.appendChild(o.firstChild);else c=o;return P&&(c=b.call(i,c,!0)),c}return D?o.outerHTML:o.innerHTML},n.addHook=function(e,t){"function"==typeof t&&(y[e]=y[e]||[],y[e].push(t))},n.removeHook=function(e){y[e]&&y[e].pop()},n.removeHooks=function(e){y[e]&&(y[e]=[])},n.removeAllHooks=function(){y={}},n}(s)}.call(t,n,t,e))||(e.exports=r)}()},674:function(e,t,n){(function(t){(function(){"use strict";var t={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:h,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:h,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:h,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};function n(e){this.tokens=[],this.tokens.links={},this.options=e||f.defaults,this.rules=t.normal,this.options.gfm&&(this.options.tables?this.rules=t.tables:this.rules=t.gfm)}t.bullet=/(?:[*+-]|\d+\.)/,t.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,t.item=l(t.item,"gm")(/bull/g,t.bullet)(),t.list=l(t.list)(/bull/g,t.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+t.def.source+")")(),t.blockquote=l(t.blockquote)("def",t.def)(),t._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",t.html=l(t.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,t._tag)(),t.paragraph=l(t.paragraph)("hr",t.hr)("heading",t.heading)("lheading",t.lheading)("blockquote",t.blockquote)("tag","<"+t._tag)("def",t.def)(),t.normal=d({},t),t.gfm=d({},t.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),t.gfm.paragraph=l(t.paragraph)("(?!","(?!"+t.gfm.fences.source.replace("\\1","\\2")+"|"+t.list.source.replace("\\1","\\3")+"|")(),t.tables=d({},t.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),n.rules=t,n.lex=function(e,t){return new n(t).lex(e)},n.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},n.prototype.token=function(e,n,r){var i,s,o,a,l,u,c,p,h;for(e=e.replace(/^ +$/gm,"");e;)if((o=this.rules.newline.exec(e))&&(e=e.substring(o[0].length),o[0].length>1&&this.tokens.push({type:"space"})),o=this.rules.code.exec(e))e=e.substring(o[0].length),o=o[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?o:o.replace(/\n+$/,"")});else if(o=this.rules.fences.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"code",lang:o[2],text:o[3]||""});else if(o=this.rules.heading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:o[1].length,text:o[2]});else if(n&&(o=this.rules.nptable.exec(e))){for(e=e.substring(o[0].length),u={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/\n$/,"").split("\n")},p=0;p<u.align.length;p++)/^ *-+: *$/.test(u.align[p])?u.align[p]="right":/^ *:-+: *$/.test(u.align[p])?u.align[p]="center":/^ *:-+ *$/.test(u.align[p])?u.align[p]="left":u.align[p]=null;for(p=0;p<u.cells.length;p++)u.cells[p]=u.cells[p].split(/ *\| */);this.tokens.push(u)}else if(o=this.rules.lheading.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"heading",depth:"="===o[2]?1:2,text:o[1]});else if(o=this.rules.hr.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"hr"});else if(o=this.rules.blockquote.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"blockquote_start"}),o=o[0].replace(/^ *> ?/gm,""),this.token(o,n,!0),this.tokens.push({type:"blockquote_end"});else if(o=this.rules.list.exec(e)){for(e=e.substring(o[0].length),a=o[2],this.tokens.push({type:"list_start",ordered:a.length>1}),i=!1,h=(o=o[0].match(this.rules.item)).length,p=0;p<h;p++)c=(u=o[p]).length,~(u=u.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(c-=u.length,u=this.options.pedantic?u.replace(/^ {1,4}/gm,""):u.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&p!==h-1&&(a===(l=t.bullet.exec(o[p+1])[0])||a.length>1&&l.length>1||(e=o.slice(p+1).join("\n")+e,p=h-1)),s=i||/\n\n(?!\s*$)/.test(u),p!==h-1&&(i="\n"===u.charAt(u.length-1),s||(s=i)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(u,!1,r),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(o=this.rules.html.exec(e))e=e.substring(o[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===o[1]||"script"===o[1]||"style"===o[1]),text:o[0]});else if(!r&&n&&(o=this.rules.def.exec(e)))e=e.substring(o[0].length),this.tokens.links[o[1].toLowerCase()]={href:o[2],title:o[3]};else if(n&&(o=this.rules.table.exec(e))){for(e=e.substring(o[0].length),u={type:"table",header:o[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:o[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:o[3].replace(/(?: *\| *)?\n$/,"").split("\n")},p=0;p<u.align.length;p++)/^ *-+: *$/.test(u.align[p])?u.align[p]="right":/^ *:-+: *$/.test(u.align[p])?u.align[p]="center":/^ *:-+ *$/.test(u.align[p])?u.align[p]="left":u.align[p]=null;for(p=0;p<u.cells.length;p++)u.cells[p]=u.cells[p].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(u)}else if(n&&(o=this.rules.paragraph.exec(e)))e=e.substring(o[0].length),this.tokens.push({type:"paragraph",text:"\n"===o[1].charAt(o[1].length-1)?o[1].slice(0,-1):o[1]});else if(o=this.rules.text.exec(e))e=e.substring(o[0].length),this.tokens.push({type:"text",text:o[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var r={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ <>]+(@|:\/)[^ <>]+)>/,url:h,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:h,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};function i(e,t){if(this.options=t||f.defaults,this.links=e,this.rules=r.normal,this.renderer=this.options.renderer||new s,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=r.breaks:this.rules=r.gfm:this.options.pedantic&&(this.rules=r.pedantic)}function s(e){this.options=e||{}}function o(e){this.tokens=[],this.token=null,this.options=e||f.defaults,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options}function a(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function l(e,t){return e=e.source,t=t||"",function n(r,i){return r?(i=(i=i.source||i).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,i),n):new RegExp(e,t)}}function u(e,t){return c[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?c[" "+e]=e+"/":c[" "+e]=e.replace(/[^\/]*$/,"")),e=c[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}r._inside=/(?:\[[^\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,r._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,r.link=l(r.link)("inside",r._inside)("href",r._href)(),r.reflink=l(r.reflink)("inside",r._inside)(),r.normal=d({},r),r.pedantic=d({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),r.gfm=d({},r.normal,{escape:l(r.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(r.text)("]|","~]|")("|","|https?://|")()}),r.breaks=d({},r.gfm,{br:l(r.br)("{2,}","*")(),text:l(r.gfm.text)("{2,}","*")()}),i.rules=r,i.output=function(e,t,n){return new i(t,n).output(e)},i.prototype.output=function(e){for(var t,n,r,i,s="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),s+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=a(":"===i[1].charAt(6)?this.mangle(i[1].substring(7)):this.mangle(i[1])),r=this.mangle("mailto:")+n):r=n=a(i[1]),s+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),s+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):a(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,s+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){s+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,s+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),s+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),s+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),s+=this.renderer.codespan(a(i[2].trim(),!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),s+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),s+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),s+=this.renderer.text(a(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(i[0].length),r=n=a(i[1]),s+=this.renderer.link(r,null,n);return s},i.prototype.outputLink=function(e,t){var n=a(t.href),r=t.title?a(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,a(e[1]))},i.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},i.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},s.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+a(t,!0)+'">'+(n?e:a(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:a(e,!0))+"\n</code></pre>"},s.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},s.prototype.html=function(e){return e},s.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},s.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},s.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},s.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},s.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},s.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},s.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},s.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},s.prototype.strong=function(e){return"<strong>"+e+"</strong>"},s.prototype.em=function(e){return"<em>"+e+"</em>"},s.prototype.codespan=function(e){return"<code>"+e+"</code>"},s.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},s.prototype.del=function(e){return"<del>"+e+"</del>"},s.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent((i=e,i.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}var i;this.options.baseUrl&&!p.test(e)&&(e=u(this.options.baseUrl,e));var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},s.prototype.image=function(e,t,n){this.options.baseUrl&&!p.test(e)&&(e=u(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},s.prototype.text=function(e){return e},o.parse=function(e,t,n){return new o(t,n).parse(e)},o.prototype.parse=function(e){this.inline=new i(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},o.prototype.next=function(){return this.token=this.tokens.pop()},o.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},o.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},o.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i="",s="";for(n="",e=0;e<this.token.header.length;e++)({header:!0,align:this.token.align[e]}),n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(i,s);case"blockquote_start":for(s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":s="";for(var o=this.token.ordered;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,o);case"list_item_start":for(s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var a=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(a);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var c={},p=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function h(){}function d(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function f(e,t,r){if(r||"function"==typeof t){r||(r=t,t=null);var i,s,l=(t=d({},f.defaults,t||{})).highlight,u=0;try{i=n.lex(e,t)}catch(e){return r(e)}s=i.length;var c=function(e){if(e)return t.highlight=l,r(e);var n;try{n=o.parse(i,t)}catch(t){e=t}return t.highlight=l,e?r(e):r(null,n)};if(!l||l.length<3)return c();if(delete t.highlight,!s)return c();for(;u<i.length;u++)!function(e){"code"!==e.type?--s||c():l(e.text,e.lang,function(t,n){return t?c(t):null==n||n===e.text?--s||c():(e.text=n,e.escaped=!0,void(--s||c()))})}(i[u])}else try{return t&&(t=d({},f.defaults,t)),o.parse(n.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(t||f.defaults).silent)return"<p>An error occurred:</p><pre>"+a(e.message+"",!0)+"</pre>";throw e}}h.exec=h,f.options=f.setOptions=function(e){return d(f.defaults,e),f},f.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new s,xhtml:!1,baseUrl:null},f.Parser=o,f.parser=o.parse,f.Renderer=s,f.Lexer=n,f.lexer=n.lex,f.InlineLexer=i,f.inlineLexer=i.output,f.parse=f,e.exports=f}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(this,n(27))}});