self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.vendors~LightningView.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[495],{1304:function(e,t,o){"use strict";var n=o(0),s=o(2),i=o(146),r=o(506),a=o(53),c=o(115),l=o(131),u=o(2296),p=o(880),d=o(2300),h=o(1868),f=o(2093),_=o(317),m=o(67),v=o(209),y=o(333),g=o(14),b=Object(y.b)(function(e,t){return{root:Object(g.mergeStyles)(e,t&&{touchAction:"none",selectors:{"& *":{userSelect:"none"}}})}}),D=o(289),S={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},M=function(e){function t(t){var o=e.call(this,t)||this;return o._currentEventType=S.mouse,o._events=[],o._onMouseDown=function(e){var t=s.Children.only(o.props.children).props.onMouseDown;return t&&t(e),o._currentEventType=S.mouse,o._onDragStart(e)},o._onMouseUp=function(e){var t=s.Children.only(o.props.children).props.onMouseUp;return t&&t(e),o._currentEventType=S.mouse,o._onDragStop(e)},o._onTouchStart=function(e){var t=s.Children.only(o.props.children).props.onTouchStart;return t&&t(e),o._currentEventType=S.touch,o._onDragStart(e)},o._onTouchEnd=function(e){var t=s.Children.only(o.props.children).props.onTouchEnd;t&&t(e),o._currentEventType=S.touch,o._onDragStop(e)},o._onDragStart=function(e){if("number"==typeof e.button&&0!==e.button)return!1;if(!(o.props.handleSelector&&!o._matchesSelector(e.target,o.props.handleSelector)||o.props.preventDragSelector&&o._matchesSelector(e.target,o.props.preventDragSelector))){o._touchId=o._getTouchId(e);var t=o._getControlPosition(e);if(void 0!==t){var n=o._createDragDataFromPosition(t);o.props.onStart&&o.props.onStart(e,n),o.setState({isDragging:!0,lastPosition:t}),o._events=[Object(D.a)(document.body,o._currentEventType.move,o._onDrag),Object(D.a)(document.body,o._currentEventType.stop,o._onDragStop)]}}},o._onDrag=function(e){"touchmove"===e.type&&e.preventDefault();var t=o._getControlPosition(e);if(t){var n=o._createUpdatedDragData(o._createDragDataFromPosition(t)),s=n.position;o.props.onDragChange&&o.props.onDragChange(e,n),o.setState({position:s,lastPosition:t})}},o._onDragStop=function(e){if(o.state.isDragging){var t=o._getControlPosition(e);if(t){var n=o._createDragDataFromPosition(t);o.setState({isDragging:!1,lastPosition:void 0}),o.props.onStop&&o.props.onStop(e,n),o.props.position&&o.setState({position:o.props.position}),o._events.forEach(function(e){return e()})}}},o.state={isDragging:!1,position:o.props.position||{x:0,y:0},lastPosition:void 0},o}return n.__extends(t,e),t.prototype.componentDidUpdate=function(e){!this.props.position||e.position&&this.props.position===e.position||this.setState({position:this.props.position})},t.prototype.componentWillUnmount=function(){this._events.forEach(function(e){return e()})},t.prototype.render=function(){var e=s.Children.only(this.props.children),t=e.props,o=this.props.position,i=this.state,r=i.position,a=i.isDragging,c=r.x,l=r.y;return o&&!a&&(c=o.x,l=o.y),s.cloneElement(e,{style:n.__assign({},t.style,{transform:"translate("+c+"px, "+l+"px)"}),className:b(t.className,this.state.isDragging).root,onMouseDown:this._onMouseDown,onMouseUp:this._onMouseUp,onTouchStart:this._onTouchStart,onTouchEnd:this._onTouchEnd})},t.prototype._getControlPosition=function(e){var t=this._getActiveTouch(e);if(void 0===this._touchId||t){var o=t||e;return{x:o.clientX,y:o.clientY}}},t.prototype._getActiveTouch=function(e){return e.targetTouches&&this._findTouchInTouchList(e.targetTouches)||e.changedTouches&&this._findTouchInTouchList(e.changedTouches)},t.prototype._getTouchId=function(e){var t=e.targetTouches&&e.targetTouches[0]||e.changedTouches&&e.changedTouches[0];if(t)return t.identifier},t.prototype._matchesSelector=function(e,t){if(!e||e===document.body)return!1;var o=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return!!o&&(o.call(e,t)||this._matchesSelector(e.parentElement,t))},t.prototype._findTouchInTouchList=function(e){if(void 0!==this._touchId)for(var t=0;t<e.length;t++)if(e[t].identifier===this._touchId)return e[t]},t.prototype._createDragDataFromPosition=function(e){var t=this.state.lastPosition;return void 0===t?{delta:{x:0,y:0},lastPosition:e,position:e}:{delta:{x:e.x-t.x,y:e.y-t.y},lastPosition:t,position:e}},t.prototype._createUpdatedDragData=function(e){var t=this.state.position;return{position:{x:t.x+e.delta.x,y:t.y+e.delta.y},delta:e.delta,lastPosition:t}},t}(s.Component);o.d(t,"a",function(){return T});var O={eventBubblingEnabled:!1},F=Object(i.a)(),T=function(e){function t(t){var o=e.call(this,t)||this;return o._focusTrapZone=s.createRef(),o._allowScrollOnModal=function(e){e?Object(r.b)(e,o._events):o._events.off(o._scrollableContent),o._scrollableContent=e},o._onModalContextMenuClose=function(){o.setState({isModalMenuOpen:!1})},o._onModalClose=function(){o._lastSetX=0,o._lastSetY=0,o.setState({isModalMenuOpen:!1,isInKeyboardMoveMode:!1,isOpen:!1,x:0,y:0}),o.props.onDismissed&&o.props.onDismissed()},o._onDragStart=function(){o.setState({isModalMenuOpen:!1,isInKeyboardMoveMode:!1})},o._onDrag=function(e,t){var n=o.state,s=n.x,i=n.y;o.setState({x:s+t.delta.x,y:i+t.delta.y})},o._onDragStop=function(){o.focus()},o._onDialogKeyUp=function(e){e.altKey&&e.ctrlKey&&e.keyCode===a.a.space&&(o.setState({isModalMenuOpen:!o.state.isModalMenuOpen}),e.preventDefault(),e.stopPropagation())},o._onDialogKeyDown=function(e){if(e.altKey&&e.ctrlKey&&e.keyCode===a.a.space)return e.preventDefault(),void e.stopPropagation();if(o.state.isModalMenuOpen&&(e.altKey||e.keyCode===a.a.escape)&&o.setState({isModalMenuOpen:!1}),!o.state.isInKeyboardMoveMode||e.keyCode!==a.a.escape&&e.keyCode!==a.a.enter||(o.setState({isInKeyboardMoveMode:!1}),e.preventDefault(),e.stopPropagation()),o.state.isInKeyboardMoveMode){var t=!0,n=o._getMoveDelta(e);switch(e.keyCode){case a.a.escape:o.setState({x:o._lastSetX,y:o._lastSetY});case a.a.enter:o._lastSetX=0,o._lastSetY=0,o.setState({isInKeyboardMoveMode:!1});break;case a.a.up:o.setState({y:o.state.y-n});break;case a.a.down:o.setState({y:o.state.y+n});break;case a.a.left:o.setState({x:o.state.x-n});break;case a.a.right:o.setState({x:o.state.x+n});break;default:t=!1}t&&(e.preventDefault(),e.stopPropagation())}},o._onEnterKeyboardMoveMode=function(){o._lastSetX=o.state.x,o._lastSetY=o.state.y,o.setState({isInKeyboardMoveMode:!0,isModalMenuOpen:!1})},o._onExitKeyboardMoveMode=function(){o._lastSetX=0,o._lastSetY=0,o.setState({isInKeyboardMoveMode:!1})},o.state={id:Object(c.c)("Modal"),isOpen:t.isOpen,isVisible:t.isOpen,hasBeenOpened:t.isOpen,x:0,y:0},o._lastSetX=0,o._lastSetY=0,o._warnDeprecations({onLayerDidMount:"layerProps.onLayerDidMount"}),o}return n.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){if(clearTimeout(this._onModalCloseTimer),e.isOpen)if(this.state.isOpen){if(this.setState({hasBeenOpened:!0,isVisible:!0}),e.topOffsetFixed){var t=document.getElementsByClassName("ms-Dialog-main"),o=void 0;t.length>0&&(o=t[0].getBoundingClientRect(),this.setState({modalRectangleTop:o.top}))}}else this.setState({isOpen:!0});!e.isOpen&&this.state.isOpen&&(this._onModalCloseTimer=this._async.setTimeout(this._onModalClose,1e3*parseFloat(p.a)),this.setState({isVisible:!1}))},t.prototype.componentDidUpdate=function(e,t){e.isOpen||t.isVisible||this.setState({isVisible:!0})},t.prototype.render=function(){var e=this.props,t=e.className,o=e.containerClassName,i=e.scrollableContentClassName,r=e.elementToFocusOnDismiss,a=e.firstFocusableSelector,c=e.forceFocusInsideTrap,l=e.ignoreExternalFocusing,p=e.isBlocking,y=e.isClickableOutsideFocusTrap,g=e.isDarkOverlay,b=e.onDismiss,D=e.layerProps,S=e.responsiveMode,T=e.titleAriaId,C=e.styles,x=e.subtitleAriaId,E=e.theme,k=e.topOffsetFixed,I=e.onLayerDidMount,N=e.isModeless,w=e.dragOptions,B=this.state,j=B.isOpen,P=B.isVisible,H=B.hasBeenOpened,K=B.modalRectangleTop,R=B.x,Z=B.y,A=B.isInKeyboardMoveMode;if(!j)return null;var L=void 0===D?"":D.className,U=F(C,{theme:E,className:t,containerClassName:o,scrollableContentClassName:i,isOpen:j,isVisible:P,hasBeenOpened:H,modalRectangleTop:K,topOffsetFixed:k,isModeless:N,layerClassName:L,isDefaultDragHandle:w&&!w.dragHandleSelector}),V=n.__assign({},O,this.props.layerProps,{onLayerDidMount:D&&D.onLayerDidMount?D.onLayerDidMount:I,insertFirst:N,className:U.layer}),Y=s.createElement(u.a,{componentRef:this._focusTrapZone,className:U.main,elementToFocusOnDismiss:r,isClickableOutsideFocusTrap:N||y||!p,ignoreExternalFocusing:l,forceFocusInsideTrap:N?!N:c,firstFocusableSelector:a,focusPreviouslyFocusedInnerElement:!0,onKeyDown:w?this._onDialogKeyDown:void 0,onKeyUp:w?this._onDialogKeyUp:void 0,onBlur:A?this._onExitKeyboardMoveMode:void 0},w&&A&&s.createElement("div",{className:U.keyboardMoveIconContainer},w.keyboardMoveIconProps?s.createElement(v.a,n.__assign({},w.keyboardMoveIconProps)):s.createElement(v.a,{iconName:"move",className:U.keyboardMoveIcon})),s.createElement("div",{ref:this._allowScrollOnModal,className:U.scrollableContent,"data-is-scrollable":!0},w&&this.state.isModalMenuOpen&&s.createElement(w.menu,{items:[{key:"move",text:w.moveMenuItemText,onClick:this._onEnterKeyboardMoveMode},{key:"close",text:w.closeMenuItemText,onClick:this._onModalClose}],onDismiss:this._onModalContextMenuClose,alignTargetEdge:!0,coverTarget:!0,directionalHint:m.DirectionalHint.topLeftEdge,directionalHintFixed:!0,shouldFocusOnMount:!0,target:this._scrollableContent}),this.props.children));return S>=_.ResponsiveMode.small?s.createElement(h.a,n.__assign({},V),s.createElement(f.a,{role:N||!p?"dialog":"alertdialog","aria-modal":!N,ariaLabelledBy:T,ariaDescribedBy:x,onDismiss:b},s.createElement("div",{className:U.root},!N&&s.createElement(d.a,{isDarkThemed:g,onClick:p?void 0:b}),w?s.createElement(M,{handleSelector:w.dragHandleSelector||"."+U.main.split(" ")[0],preventDragSelector:"button",onStart:this._onDragStart,onDragChange:this._onDrag,onStop:this._onDragStop,position:{x:R,y:Z}},Y):Y))):null},t.prototype.focus=function(){this._focusTrapZone.current&&this._focusTrapZone.current.focus()},t.prototype._getMoveDelta=function(e){var t=10;return e.shiftKey?e.ctrlKey||(t=50):e.ctrlKey&&(t=1),t},t.defaultProps={isOpen:!1,isDarkOverlay:!0,isBlocking:!1,className:"",containerClassName:""},t=n.__decorate([_.withResponsiveMode],t)}(l.a)},1305:function(e,t,o){"use strict";o.d(t,"a",function(){return u});var n=o(0),s=o(2),i=o(146),r=o(506),a=o(58),c=o(131),l=Object(i.a)(),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.componentDidMount=function(){Object(r.c)()},t.prototype.componentWillUnmount=function(){Object(r.d)()},t.prototype.render=function(){var e=this.props,t=e.isDarkThemed,o=e.className,i=e.theme,r=e.styles,c=Object(a.f)(this.props,a.e),u=l(r,{theme:i,className:o,isDark:t});return s.createElement("div",n.__assign({},c,{className:u.root}))},t}(c.a)},1888:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var n=o(0),s=o(2),i=o(146),r=o(131),a=Object(i.a)(),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.className,o=e.styles,n=e.theme;return this._classNames=a(o,{theme:n,className:t}),s.createElement("div",{className:this._classNames.actions},s.createElement("div",{className:this._classNames.actionsRight},this._renderChildrenAsActions()))},t.prototype._renderChildrenAsActions=function(){var e=this;return s.Children.map(this.props.children,function(t){return t?s.createElement("span",{className:e._classNames.action},t):null})},t}(r.a)},1891:function(e,t,o){"use strict";var n=o(637),s=o(1888),i=o(14),r={actions:"ms-Dialog-actions",action:"ms-Dialog-action",actionsRight:"ms-Dialog-actionsRight"};o.d(t,"a",function(){return a});var a=Object(n.a)(s.a,function(e){var t=e.className,o=e.theme,n=Object(i.getGlobalClassNames)(r,o);return{actions:[n.actions,{position:"relative",width:"100%",minHeight:"24px",lineHeight:"24px",margin:"20px 0 0",fontSize:"0",selectors:{".ms-Button":{lineHeight:"normal"}}},t],action:[n.action],actionsRight:[n.actionsRight,{textAlign:"right",marginRight:"-4px",fontSize:"0",selectors:{$action:{margin:"0 4px"}}}]}},void 0,{scope:"DialogFooter"})},1897:function(e,t,o){"use strict";o.d(t,"a",function(){return r});var n=o(637),s=o(1304),i=o(880),r=Object(n.a)(s.a,i.b,void 0,{scope:"Modal"})},2296:function(e,t,o){"use strict";o.d(t,"a",function(){return u});var n=o(0),s=o(2),i=o(222),r=o(77),a=o(986),c=o(58),l=o(289),u=function(e){function t(o){var n=e.call(this,o)||this;return n._root=s.createRef(),n._firstBumper=s.createRef(),n._lastBumper=s.createRef(),n._hasFocus=!1,n._onRootFocus=function(e){n.props.onFocus&&n.props.onFocus(e),n._hasFocus=!0},n._onRootBlur=function(e){n.props.onBlur&&n.props.onBlur(e);var t=e.relatedTarget;null===e.relatedTarget&&(t=document.activeElement),Object(i.a)(n._root.current,t)||(n._hasFocus=!1)},n._onFirstBumperFocus=function(){n._onBumperFocus(!0)},n._onLastBumperFocus=function(){n._onBumperFocus(!1)},n._onBumperFocus=function(e){if(!n.props.disabled){var t=e===n._hasFocus?n._lastBumper.current:n._firstBumper.current;if(n._root.current){var o=e===n._hasFocus?Object(r.i)(n._root.current,t,!0,!1):Object(r.f)(n._root.current,t,!0,!1);o&&(n._isBumper(o)?n.focus():o.focus())}}},n._onFocusCapture=function(e){n.props.onFocusCapture&&n.props.onFocusCapture(e),e.target===e.currentTarget||n._isBumper(e.target)||(n._previouslyFocusedElementInTrapZone=e.target)},n._forceFocusInTrap=function(e){if(!n.props.disabled&&t._focusStack.length&&n===t._focusStack[t._focusStack.length-1]){var o=document.activeElement;Object(i.a)(n._root.current,o)||(n.focus(),n._hasFocus=!0,e.preventDefault(),e.stopPropagation())}},n._forceClickInTrap=function(e){if(!n.props.disabled&&t._focusStack.length&&n===t._focusStack[t._focusStack.length-1]){var o=e.target;o&&!Object(i.a)(n._root.current,o)&&(n.focus(),n._hasFocus=!0,e.preventDefault(),e.stopPropagation())}},Object(a.a)(n),n}return n.__extends(t,e),t.prototype.componentDidMount=function(){this._bringFocusIntoZone(),this._updateEventHandlers(this.props)},t.prototype.componentWillReceiveProps=function(e){var t=e.elementToFocusOnDismiss;t&&this._previouslyFocusedElementOutsideTrapZone!==t&&(this._previouslyFocusedElementOutsideTrapZone=t),this._updateEventHandlers(e)},t.prototype.componentDidUpdate=function(e){var t=void 0===e.forceFocusInsideTrap||e.forceFocusInsideTrap,o=void 0===this.props.forceFocusInsideTrap||this.props.forceFocusInsideTrap,n=void 0!==e.disabled&&e.disabled,s=void 0!==this.props.disabled&&this.props.disabled;!t&&o||n&&!s?this._bringFocusIntoZone():(t&&!o||!n&&s)&&this._returnFocusToInitiator()},t.prototype.componentWillUnmount=function(){this.props.disabled&&!this.props.forceFocusInsideTrap&&Object(i.a)(this._root.current,document.activeElement)||this._returnFocusToInitiator()},t.prototype.render=function(){var e=this.props,t=e.className,o=e.disabled,i=void 0!==o&&o,r=e.ariaLabelledBy,a=Object(c.f)(this.props,c.e),l={style:{pointerEvents:"none",position:"fixed"},tabIndex:i?-1:0,"data-is-visible":!0};return s.createElement("div",n.__assign({},a,{className:t,ref:this._root,"aria-labelledby":r,onFocusCapture:this._onFocusCapture,onFocus:this._onRootFocus,onBlur:this._onRootBlur}),s.createElement("div",n.__assign({},l,{ref:this._firstBumper,onFocus:this._onFirstBumperFocus})),this.props.children,s.createElement("div",n.__assign({},l,{ref:this._lastBumper,onFocus:this._onLastBumperFocus})))},t.prototype.focus=function(){var e=this.props,t=e.focusPreviouslyFocusedInnerElement,o=e.firstFocusableSelector;if(t&&this._previouslyFocusedElementInTrapZone&&Object(i.a)(this._root.current,this._previouslyFocusedElementInTrapZone))this._focusAsync(this._previouslyFocusedElementInTrapZone);else{var n,s="string"==typeof o?o:o&&o();this._root.current&&(s&&(n=this._root.current.querySelector("."+s)),n||(n=Object(r.j)(this._root.current,this._root.current.firstChild,!1,!1,!1,!0))),n&&this._focusAsync(n)}},t.prototype._focusAsync=function(e){this._isBumper(e)||Object(r.b)(e)},t.prototype._bringFocusIntoZone=function(){var e=this.props,o=e.elementToFocusOnDismiss,n=e.disabled,s=void 0!==n&&n,r=e.disableFirstFocus,a=void 0!==r&&r;s||(t._focusStack.push(this),this._previouslyFocusedElementOutsideTrapZone=o||document.activeElement,a||Object(i.a)(this._root.current,this._previouslyFocusedElementOutsideTrapZone)||this.focus())},t.prototype._returnFocusToInitiator=function(){var e=this,o=this.props.ignoreExternalFocusing;t._focusStack=t._focusStack.filter(function(t){return e!==t});var n=document.activeElement;o||!this._previouslyFocusedElementOutsideTrapZone||"function"!=typeof this._previouslyFocusedElementOutsideTrapZone.focus||!Object(i.a)(this._root.current,n)&&n!==document.body||this._focusAsync(this._previouslyFocusedElementOutsideTrapZone)},t.prototype._updateEventHandlers=function(e){var t=e.isClickableOutsideFocusTrap,o=void 0!==t&&t,n=e.forceFocusInsideTrap,s=void 0===n||n;s&&!this._disposeFocusHandler?this._disposeFocusHandler=Object(l.a)(window,"focus",this._forceFocusInTrap,!0):!s&&this._disposeFocusHandler&&(this._disposeFocusHandler(),this._disposeFocusHandler=void 0),o||this._disposeClickHandler?o&&this._disposeClickHandler&&(this._disposeClickHandler(),this._disposeClickHandler=void 0):this._disposeClickHandler=Object(l.a)(window,"click",this._forceClickInTrap,!0)},t.prototype._isBumper=function(e){return e===this._firstBumper.current||e===this._lastBumper.current},t._focusStack=[],t}(s.Component)},2300:function(e,t,o){"use strict";var n=o(637),s=o(1305),i=o(14),r={root:"ms-Overlay",rootDark:"ms-Overlay--dark"};o.d(t,"a",function(){return a});var a=Object(n.a)(s.a,function(e){var t,o=e.className,n=e.theme,s=e.isNone,a=e.isDark,c=n.palette,l=Object(i.getGlobalClassNames)(r,n);return{root:[l.root,n.fonts.medium,{backgroundColor:c.whiteTranslucent40,top:0,right:0,bottom:0,left:0,position:"absolute",selectors:(t={},t[i.HighContrastSelector]={border:"1px solid WindowText",opacity:0},t)},s&&{visibility:"hidden"},a&&[l.rootDark,{backgroundColor:c.blackTranslucent40}],o]}},void 0,{scope:"Overlay"})},2515:function(e,t,o){"use strict";o.d(t,"a",function(){return c});var n=o(0),s=o(2),i=o(131),r=o(801),a=o(1452),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._skipComponentRefResolution=!0,t}return n.__extends(t,e),t.prototype.render=function(){return s.createElement(a.a,n.__assign({},this.props,{primary:!0,onRenderDescription:i.b}))},t=n.__decorate([Object(r.a)("PrimaryButton",["theme","styles"],!0)],t)}(i.a)},3017:function(e,t,o){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},880:function(e,t,o){"use strict";o.d(t,"a",function(){return s}),o.d(t,"b",function(){return r});var n=o(14),s=n.AnimationVariables.durationValue2,i={root:"ms-Modal",main:"ms-Dialog-main",scrollableContent:"ms-Modal-scrollableContent",isOpen:"is-open",layer:"ms-Modal-Layer"},r=function(e){var t,o=e.className,r=e.containerClassName,a=e.scrollableContentClassName,c=e.isOpen,l=e.isVisible,u=e.hasBeenOpened,p=e.modalRectangleTop,d=e.theme,h=e.topOffsetFixed,f=e.isModeless,_=e.layerClassName,m=e.isDefaultDragHandle,v=d.palette,y=Object(n.getGlobalClassNames)(i,d);return{root:[y.root,d.fonts.medium,{backgroundColor:"transparent",position:f?"absolute":"fixed",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,pointerEvents:"none",transition:"opacity "+s},h&&u&&{alignItems:"flex-start"},c&&y.isOpen,l&&{opacity:1,pointerEvents:"auto"},o],main:[y.main,{boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.4)",backgroundColor:v.white,boxSizing:"border-box",position:"relative",textAlign:"left",outline:"3px solid transparent",maxHeight:"100%",overflowY:"auto",zIndex:f?n.ZIndexes.Layer:void 0},h&&u&&{top:p},m&&{cursor:"move"},r],scrollableContent:[y.scrollableContent,{overflowY:"auto",flexGrow:1,maxHeight:"100vh",selectors:(t={},t["@supports (-webkit-overflow-scrolling: touch)"]={maxHeight:window.innerHeight},t)},a],layer:f&&[_,y.layer,{position:"static",width:"unset",height:"unset"}],keyboardMoveIconContainer:{position:"absolute",display:"flex",justifyContent:"center",width:"100%",padding:"3px 0px"},keyboardMoveIcon:{fontSize:"24px",width:"24px"}}}}}]);
//# sourceMappingURL=owa.vendors~LightningView.js.map
self.scriptsLoaded['owa.vendors~LightningView.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.vendors~LightningView.js'] = (new Date()).getTime();