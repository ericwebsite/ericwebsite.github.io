(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["85c4f06ad6a7b448434879462dbd0c9e"],{"8SBg":function(t,e,o){"use strict";var n=function t(){var e=document.body;var o=document.documentElement;if(!o||!e){return 0}return Math.max(e.scrollHeight,e.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)};var r=function t(e){if(!e){return 0}var o=e.getBoundingClientRect();return o.bottom+window.pageYOffset-document.documentElement.clientTop};var i=function t(e){if(!e){return 0}var o=e.getBoundingClientRect();return o.top+window.pageYOffset-document.documentElement.clientTop};var l=function t(e,o){var n=o.getBoundingClientRect(),r=n.top;o.scrollTop=e.offsetTop-r};var c=function t(e,o,n){if(!e){return}var r=i(e);a(r,o||0,n)};var a=function t(e,o,n){d(window,e,o,n)};if(typeof HTMLElement!=="undefined"&&!HTMLElement.prototype.scrollTo){HTMLElement.prototype.scrollTo=function(t,e){this.scrollLeft=t;this.scrollTop=e}}var v=function t(e,o){if(typeof e.scrollTo==="function"){e.scrollTo(0,o)}else if("scrollTop"in e){e.scrollTop=o}};var d=function t(n,e){var o=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var r=arguments.length>3?arguments[3]:undefined;var i=n===window?window.pageYOffset:n.scrollTop;var l=e;var c=l-i;var a=17;var f=o/a;var u=0;var s=setInterval(function(){if(u<f){var t=u/f;var e=(-Math.cos(Math.PI*t)+1)/2;var o=i+c*e;v(n,o);u+=1}else{v(n,l);clearInterval(s);r&&r()}},a)};var f=function t(e){if(e===document.body){return window}else if(e==null){return window}else if(e.scrollHeight>e.clientHeight){return e}else{return t(e.parentElement)}};var u=750;var s=function t(c,a){setTimeout(function(){var t=f(c);var e=c.getBoundingClientRect();var o=t===window?{top:0,bottom:window.innerHeight}:t.getBoundingClientRect();var n=0;var r=t===window?window.scrollY:t.scrollTop;if(e.bottom>o.bottom){var i=e.bottom-o.bottom;if(e.top+i<o.top){i=e.top-o.top}n=r+i}else if(e.top<o.top){var l=e.top-o.top;n=r+l}d(t,n,u,a)},0)};function p(t,o,e,n){if(t&&e&&o){var r=o.scrollTop;var i=o.getBoundingClientRect().top;var l=o.getBoundingClientRect().bottom;var c=e.getBoundingClientRect().height;var a=l-c;var f=t.getBoundingClientRect().top;var u=t.getBoundingClientRect().bottom;var s=16;var v=function t(e){return d(o,r+e,n)};if(u+s>a){v(u+s-a)}else if(f-s<i){v(f-s-i)}}}t.exports={getDocumentHeight:n,getOffsetBottom:r,getOffsetTop:i,jumpToElementWithinContainer:l,scrollToElement:c,scrollToOffset:a,scrollElementIntoView:s,scrollElementIntoViewWithKeypad:p,scrollElementToOffset:d,SCROLL_ANIMATION_DURATION:u}}}]);
//# sourceMappingURL=../../sourcemaps/en/85c4f06ad6a7b448434879462dbd0c9e.decc1b45b52bcc6df2f5.js.map