(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c1fdb486c204af9edf905e0a2a190762"],{thi5:function(t,e,n){"use strict";var o=function t(i){var a="backboneStateMixin".concat(Date.now());function o(t){var e=t[a];var n=i.getModel(t.props);if(e.model===n){return}c(t);n.on("change",o);e.model=n;e.listener=o;function o(){t.setState(i.getState(n,t.props))}}function c(t){var e=t[a];var n=e.model;if(n){n.off("change",e.listener)}}return{getInitialState:function t(){var e=i.getModel(this.props);return i.getState(e,this.props)},componentDidMount:function t(){this[a]={};o(this)},UNSAFE_componentWillReceiveProps:function t(e){o(this);var n=i.getModel(e);this.setState(i.getState(n,e))},componentWillUnmount:function t(){c(this)}}};t.exports=o}}]);
//# sourceMappingURL=../../sourcemaps/en/c1fdb486c204af9edf905e0a2a190762.1c287fd8c016df7d7721.js.map