(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["24a5f45d0c120d8cd0074ba856585ae4"],{E2UL:function(e,t,a){"use strict";a("ma9I");a("TeQF");a("2B1R");a("+2oP");a("5DmW");a("NBAS");a("UxlC");a("vxnP");var j=s(a("q1tI"));var S=i(a("wa3X"));var k=a("JimW");var T=a("Vxy9");var P=a("DzHr");var N=i(a("nVHT"));var x=i(a("j6G6"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var a in e){if(Object.prototype.hasOwnProperty.call(e,a)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};if(i.get||i.set){Object.defineProperty(t,a,i)}else{t[a]=e[a]}}}}t.default=e;return t}}function n(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function l(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(e,i.key,i)}}function r(e,t,a){if(t)l(e.prototype,t);if(a)l(e,a);return e}function o(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return u(e)}function c(e){c=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return c(e)}function u(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function h(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)d(e,t)}function d(e,t){d=Object.setPrototypeOf||function e(t,a){t.__proto__=a;return t};return d(e,t)}function p(e,t,a){if(t in e){Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true})}else{e[t]=a}return e}var v=a("e2gc");var A=a("TSYQ");var f=a("17x9");var m=a("fhzG");var g=a("i8i4");var _=a("F/us");var b=a("2LjZ");var E=a("ydm1");var w=a("qgfM");var y=a("/eLw");var O=a("+reu").ScratchpadUI;var C=w.DiscussionItemModel;var q=w.DiscussionItemCollection;var F=w.ProjectEvalAnswerModel;var R=a("gdZe");var i18n=a("HEOz");var I=R.TabbedDiscussionList;var M=R.DiscussionMeta;var U=R.ProjectEvalStatusViewer;var D=R.ProjectEvalReviewContent;var B=R.FormattingTips;var G=function(e){h(s,e);function s(){var e;var l;n(this,s);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++){a[i]=arguments[i]}l=o(this,(e=c(s)).call.apply(e,[this].concat(a)));p(u(l),"state",{items:[]});p(u(l),"checkPassState",function(){var i=true;var s=true;_(l.objectives).each(function(e,t){var a=this.state.items[t];s=s&&(a==="pass"||a==="nopass");i=i&&a==="pass"}.bind(u(l)));if(s&&l.props.handleAllPassed){l.props.handleAllPassed(i)}if(l.props.handleAllSpecified){l.props.handleAllSpecified(s)}});p(u(l),"getEvalText",function(){var r=v("<ul>");_.each(l.objectives,function(e,t){var a=this.state.items[t];var i=v("<li/>");if(a==="pass"){i.addClass("pass")}var s=g.findDOMNode(this.refs[e+"Label"]);i.text(s.textContent);var l=this.refs[e+"Feedback"];if(l){var n=g.findDOMNode(l).value;v("<div/>",{class:"eval-info",text:n}).appendTo(i)}r.append(i)}.bind(u(l)));var e=g.findDOMNode(l.refs["list"+l.objectives.length+"Feedback"]).value;v("<div/>",{class:"overall-eval-info",text:e}).appendTo(r);return r.html()});p(u(l),"handleChange",function(e,t){var a=l.state.items;a[e]=t;l.setState({items:a});l.checkPassState();l.handleTextChange()});p(u(l),"handleTextChange",function(){if(l.props.handleEvalChange){l.props.handleEvalChange(l.getEvalText())}});p(u(l),"toggleFormattingTips",function(){l.setState({showFormattingTips:!l.state.showFormattingTips})});return l}r(s,[{key:"render",value:function e(){var t=v(v.parseHTML(this.props.rubric)).filter("ul").children();this.objectives=[];var a=i18n._("If there is something the "+"student needs to improve, you could help them by providing "+"more insight here. You can also just commend them on "+"their project. Thank you for evaluating!");var i=_(t).map(function(e,t){return{text:v(e).text(),placeholder:i18n._("Optionally include what "+"can be improved.")}});i.push({text:i18n._("This project seems to be the original "+"work of the author."),placeholder:i18n._("If you suspect that this project was "+"plagiarized, because you've seen it before or others have "+"flagged it, please link to the original in this comment.")});var s=_(i).map(function(e,t){var a="list"+t;this.objectives.push(a);var i={pass:"✔",nopass:"✖"};var s=i[this.state.items[t]]||"";return j.createElement("li",{key:"objective-"+t,className:"eval-peer-rubric-item"},j.createElement("i",{className:this.state.items[t]},s),j.createElement("label",{ref:a+"Label"},e.text),j.createElement("div",null,j.createElement(E,{value:this.state.items[t],buttons:[{value:"pass",content:i18n._("Passed")},{value:"nopass",content:i18n._("Needs more work")}],onChange:this.handleChange.bind(this,t)}),this.state.items[t]==="nopass"?j.createElement("textarea",{className:"discussion-text open eval-info eval-text",placeholder:e.placeholder,onChange:this.handleTextChange,ref:a+"Feedback"}):null))}.bind(this));var l=j.createElement("li",null,i18n._("Would you like to provide any additional comments?"),j.createElement("textarea",{className:"discussion-text open eval-text",placeholder:a,onChange:this.handleTextChange,ref:"list"+this.objectives.length+"Feedback"}),j.createElement("div",{className:"edit-content-form__left"},j.createElement(S.default,{kind:"tertiary",size:"small",onClick:this.toggleFormattingTips},i18n._("Formatting tips"))),this.state.showFormattingTips?j.createElement(B,null):null);return j.createElement("div",null,s,l)}}]);return s}(j.Component);p(G,"propTypes",{rubric:f.string,handleAllPassed:f.func,handleAnyFailed:f.func,handleAllSpecified:f.func,handleEvalChange:f.func});var L=function(e){h(s,e);function s(){var e;var l;n(this,s);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++){a[i]=arguments[i]}l=o(this,(e=c(s)).call.apply(e,[this].concat(a)));p(u(l),"state",{item:0,allPassed:false});p(u(l),"checkPassState",function(){var a=true;var i=true;var s=false;_(l.objectives).each(function(e){var t=this.refs[e]&&g.findDOMNode(this.refs[e]).value;i=i&&(t==="pass"||t==="nopass");a=a&&t==="pass";s=s||t==="nopass"}.bind(u(l)));l.setState({allPassed:a});var e=l.refs.honorcode&&g.findDOMNode(l.refs.honorcode);var t=a&&e&&e.value.toLowerCase()===e.getAttribute("data-yestext").toLowerCase();if(i&&t&&l.props.handleAllPassed){l.props.handleAllPassed()}if((!i||!t)&&l.props.handleAnyIncomplete){l.props.handleAnyIncomplete()}if(s&&l.props.handleAnyFailed){l.props.handleAnyFailed()}});p(u(l),"handleCheck",function(){var i=0;_(l.objectives).each(function(e,t){var a=this.refs[e]&&g.findDOMNode(this.refs[e]).value;if(a==="pass"){i=t+1}}.bind(u(l)));l.setState({item:Math.max(l.state.item,i)});l.checkPassState()});return l}r(s,[{key:"UNSAFE_componentWillUpdate",value:function e(){if(this.props.willUpdate){this.props.willUpdate()}}},{key:"componentDidUpdate",value:function e(){if(this.props.didUpdate){this.props.didUpdate()}}},{key:"render",value:function e(){var t=v(v.parseHTML(this.props.rubric)).filter("ul").children();this.objectives=[];var a=null;if(this.state.allPassed){var i=i18n._("Yes");a=j.createElement("li",{style:{margin:"20px 0px 30px 0px"}},j.createElement("label",null,i18n.$_('I certify that this is all my original work. If I took any parts from elsewhere, then they were non-essential parts of the project, and they are clearly attributed at the top. I will show I agree to this honor code by typing "%(yes)s":',{yes:i}),j.createElement("input",{type:"text",ref:"honorcode",placeholder:i,"data-yestext":i,onChange:this.checkPassState,style:{marginLeft:"5px"}})))}var s=_(t).map(function(e,t){var a="list"+t;this.objectives.push(a);var i=t<=this.state.item;var s={lineHeight:"1.2em",margin:"20px 0"};if(!i){s.color="rgb(163, 163, 163)"}return j.createElement("li",{key:"objective-"+t,style:s},v(e).text(),j.createElement("br",null),i?j.createElement("select",{onChange:this.handleCheck,ref:a},j.createElement("option",null),j.createElement("option",{value:"pass"},i18n._("Yes, I believe my project meets this objective.")),j.createElement("option",{value:"nopass"},i18n._("Nevermind, I'm going to keep working on it."))):null)}.bind(this));return j.createElement("div",null,s,a)}}]);return s}(j.Component);p(L,"propTypes",{rubric:f.string,handleAllPassed:f.func,handleAnyFailed:f.func,handleAnyIncomplete:f.func,willUpdate:f.func,didUpdate:f.func});var H=m({displayName:"ProjectEvalReviewArea",propTypes:{collection:f.instanceOf(q).isRequired,rubric:f.string,tips:f.string},mixins:[b],getInitialState:function e(){var t=y();return{qaExpandKey:t.qa_expand_key,isExpanded:false,isSubmitting:false,allSpecified:false,hasSubmittedEval:false,showFormattingTips:false}},UNSAFE_componentWillMount:function e(){this.evalAnswer=this.props.collection.getBestEvalAnswer()},componentDidUpdate:function e(){if(this.scrollTo){var t=g.findDOMNode(this.refs[this.scrollTo]);v("html, body").animate({scrollTop:v(t).offset().top-100},1e3);this.scrollTo=""}},getBackboneModels:function e(){var t=[this.props.collection];if(this.evalAnswer){t.push(this.evalAnswer)}return t},toggleFormattingTips:function e(){this.setState({showFormattingTips:!this.state.showFormattingTips})},onSubmitEval:function e(){if(!this.state.allSpecified){return}var t=this.props.collection.getOpenEvalRequest();var a=new F({questionKey:t.get("key"),content:this.evalText,initVote:this.state.allPassed?"1":"-1"});this.setState({isSubmitting:true,isExpanded:false});if(window._kiq){window._kiq.push(["set",{submitted_project_eval:"true"}])}a.save({},{success:function(e){t.get("answers").push(a.toJSON());this.setState({isSubmitting:false,hasSubmittedEval:true})}.bind(this),error:function(){this.setState({isSubmitting:false})}.bind(this)})},handleAllSpecified:function e(t){this.setState({allSpecified:t})},handleAllPassed:function e(t){this.setState({allPassed:t})},handleEvalChange:function e(t){this.evalText=t},onBeginEvaluation:function e(){this.setState({isExpanded:true})},render:function e(){var t=this.props.collection;if(this.state.hasSubmittedEval){if(!this.hasScrolledForSubmission){this.hasScrolledForSubmission=true;this.scrollTo="evalGuideline"}return j.createElement("div",{ref:"evalGuideline",className:"eval-guideline"},i18n._("Thank you, your evaluation has been submitted! "),j.createElement("a",{href:this.props.collection.getNextEvalUrl()},i18n._("Have a minute? Do another evaluation!")))}var a=t.getOpenEvalRequest();if(!a&&!this.evalAnswer){return null}if(!a){var i=this.evalAnswer;var s=j.createElement(S.default,{kind:"secondary",size:"small",onClick:this.onBeginEvaluation},i18n._("View evaluation"));var l=i.get("key")===this.state.qaExpandKey;if(l&&_.isUndefined(this.scrollTo)){this.scrollTo="evalGuideline"}return j.createElement("div",{ref:"evalGuideline",className:"eval-guideline"},j.createElement("div",{className:"eval-left"},i18n._("This project has already been evaluated. "),this.state.isExpanded||l?j.createElement("div",{className:"eval-submitted"},j.createElement(U,{model:i,isProgramOwner:false}),j.createElement(D,{model:i}),j.createElement(M,{model:i})):i18n._("You can view the evaluation to get more information.")),j.createElement("div",{className:"eval-button-container"},!this.state.isExpanded&&!l?s:null))}var n=a.get("key")===this.state.qaExpandKey;if(n&&_.isUndefined(this.scrollTo)){this.scrollTo="evalGuideline"}var r=t.getEvalAnswer();var o=null;if(r){o=j.createElement("div",null,i18n._("This project has been re-submitted for evaluation, and its most recent evaluation is shown below. Keep in mind that the code was likely different when that evaluation was made, so line numbers and other references may be outdated."),j.createElement(D,{model:r}),j.createElement(M,{model:r}))}if(!this.state.isExpanded&&!n&&!this.state.isSubmitting){var c=j.createElement(S.default,{size:"small",type:"primary",onClick:this.onBeginEvaluation},i18n._("Evaluate this project"));return j.createElement("div",{ref:"evalGuideline",className:"eval-guideline"},j.createElement("div",{className:"eval-left"},i18n._("This project has an open evaluation request. You can help the author of this project by submitting an evaluation.")),j.createElement("div",{className:"eval-button-container"},c))}var u=j.createElement(G,{rubric:this.props.rubric,handleAllSpecified:this.handleAllSpecified,handleAllPassed:this.handleAllPassed,handleEvalChange:this.handleEvalChange});var h;if(!this.state.isSubmitting){h=j.createElement(S.default,{disabled:!this.state.allSpecified,onClick:this.onSubmitEval},i18n._("Submit evaluation"))}else{h=j.createElement(N.default,{size:"medium"})}var d=j.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.tips||""}});var p=j.createElement("div",{className:"eval-skip"},i18n._("Would you rather do a different evaluation? "),j.createElement("a",{href:this.props.collection.getNextEvalUrl()},i18n._("Yes, take me to the next evaluation!")));return j.createElement("div",{className:"eval-area"},j.createElement("div",{ref:"evalGuideline",className:"eval-guideline"},j.createElement("div",{className:"eval-left"},o,i18n._("Thanks for performing an evaluation. Please go through each criteria and specify if the objectives passed or need more work:"),this.props.tips?d:"",j.createElement("ul",null,u),p),j.createElement("div",{className:"eval-button-container"},h)))}});var Y=m({displayName:"ProjectEvalRequestArea",propTypes:{collection:f.instanceOf(q).isRequired,scratchpadId:f.string.isRequired,rubric:f.string,sendToPeers:f.bool,projectFinished:f.bool,originTitle:f.string},mixins:[b],getInitialState:function e(){var t=y();return{projectFinished:this.props.projectFinished,qaExpandKey:t.qa_expand_key,isSubmitting:false,viewObjectives:false,fetchedInitial:false,showTooSimilarModal:false}},UNSAFE_componentWillMount:function e(){this.evalAnswer=this.props.collection.getBestEvalAnswer()},componentDidMount:function e(){var t=this.props.collection;if(this.props.sendToPeers&&!this.state.fetchedInitial){var a=function(){this.evalAnswer=this.props.collection.getBestEvalAnswer();this.setState({fetchedInitial:true});if(this.evalAnswer&&window._kiq){if(this.evalAnswer.isPassingEvalAnswer()){window._kiq.push(["set",{view_project_completed:"true"}])}else{window._kiq.push(["set",{view_project_failure:"true"}])}}}.bind(this);t.fetch({success:a,error:a})}},componentDidUpdate:function e(){if(this.scrollTo&&this.refs[this.scrollTo]){var t=g.findDOMNode(this.refs[this.scrollTo]);v("html, body").animate({scrollTop:v(t).offset().top-100},1e3);this.scrollTo=""}},getBackboneModels:function e(){var t=[this.props.collection];if(this.evalAnswer){t.push(this.evalAnswer)}return t},onViewObjectives:function e(){this.setState({viewObjectives:true})},onSubmitReviewRequest:function e(){this.setState({isSubmitting:true});var n=function(){v(O).off("saveCompleted",n);v(O).off("saveFailed",r);var e=O.scratchpad.get("originSimilarity");var t=O.scratchpad.get("revision");var a=t&&t.get("code");var i=e<.8||e<1&&a.length>=1e3;if(!i){this.setState({isSubmitting:false,showEvalFirstNotice:false,showTooSimilarModal:true});return}if(window._kiq){window._kiq.push(["set",{submitted_project:"true"}])}if(this.props.sendToPeers){var s=i18n._('Project evaluation request for "{0}".').replace("{0}",this.props.originTitle);var l=new C({focus:{kind:"scratchpad",id:this.props.scratchpadId},type:"projecteval",text:s});l.save({},{success:function(e){this.setState({isSubmitting:false});this.props.collection.add(l)}.bind(this),error:function(e,t){if(t.status===429){this.setState({isSubmitting:false,showEvalFirstNotice:true});return}this.setState({isSubmitting:false,showEvalFirstNotice:false})}.bind(this)})}else{O.userScratchpad.save({challengeStatus:5},{patch:true});this.setState({isSubmitting:false,projectFinished:true})}}.bind(this);var r=function(){v(O).off("saveCompleted",n);v(O).off("saveFailed",r);this.setState({isSubmitting:false,showEvalFirstNotice:false})}.bind(this);v(O).on("saveCompleted",n);v(O).on("saveFailed",r);if(O.isSaveable()){O.triggerSave()}},handleDelete:function e(){var t=this.props.collection.getOpenEvalRequest();if(t){this.props.collection.remove(t);t.destroy()}this.hasScrolledForEvalRequest=false;this.handleRubricIncomplete()},handleRubricPass:function e(){this.setState({showEvalFirstNotice:false,viewObjectives:true,selfRubricPassed:true})},handleRubricFail:function e(){this.setState({showEvalFirstNotice:false,viewObjectives:false,selfRubricPassed:false})},handleRubricIncomplete:function e(){this.setState({showEvalFirstNotice:false,viewObjectives:true,selfRubricPassed:false})},checkWillScroll:function e(){var t=g.findDOMNode(this.refs.guidelinesView);this.shouldScrollBottom=t.scrollTop+t.offsetHeight===t.scrollHeight},scrollToBottom:function e(){if(this.shouldScrollBottom){var t=g.findDOMNode(this.refs.guidelinesView);t.scrollTop=t.scrollHeight}},render:function e(){var t=this;var a=this.props.collection;var i=x.default.getUserProfile();if(this.props.sendToPeers&&!this.state.fetchedInitial){return j.createElement("div",{className:"eval-guideline"},j.createElement(N.default,{size:"medium"}))}if(this.evalAnswer&&this.evalAnswer.isPassingEvalAnswer()){var s=this.evalAnswer;var l=s.get("key")===this.state.qaExpandKey;if(l&&_.isUndefined(this.scrollTo)){this.scrollTo="evalGuideline"}var n=null;var r=i&&i.get("canEvalCsProjects");var o=a.getNextEvalUrl();if(r){var c=j.createElement("a",{href:o},i18n._("please evaluate a project yourself."));n=j.createElement("div",{className:"eval-tryeval"},i18n._("Now that your project has been evaluated,")," ",c)}return j.createElement("div",{ref:"evalGuideline",className:"eval-guideline"},j.createElement(U,{model:s,isProgramOwner:true}),j.createElement(D,{model:s}),j.createElement(M,{model:s}),n)}if(this.state.projectFinished){return j.createElement("div",{className:"eval-guideline"},i18n._("Your project is now marked as complete. You can continue working on it, of course, if you think of other ways to improve it. Keep practicing!"))}if(a.hasPendingEvalRequests()){if(!this.hasScrolledForEvalRequest){this.hasScrolledForEvalRequest=true;this.scrollTo="evalGuideline"}var u=j.createElement("a",{href:this.props.collection.getNextEvalUrl(),className:"tutorial-router-link"},i18n._("Try an evaluation yourself"));return j.createElement("div",{ref:"evalGuideline",className:"eval-guideline"},j.createElement("div",{className:"eval-title"},i18n._("Your project is now pending an evaluation.")),j.createElement("p",null,i18n._("An evaluator will either give you suggestions for improvement (which you can make and then re-request evaluation), or they will mark it as completed. Once it's marked as completed (after however many evalutions), you'll get points for it.")),j.createElement("p",null,i18n._("In the meantime, keep learning! "),u),j.createElement("p",{className:"eval-cancel",style:{float:"right"}},i18n._("Did you accidentally request an evaluation?"),j.createElement(S.default,{kind:"tertiary",size:"small",onClick:this.handleDelete,style:{marginLeft:6}},i18n._("Cancel your evaluation request"))))}var h=a.hasEvalRequests()&&!a.hasPassingEvalRequests();var d;var p=null;if(this.state.isSubmitting){d=j.createElement(N.default,{size:"medium"})}else{var v=!this.state.viewObjectives&&!h?this.onViewObjectives:this.onSubmitReviewRequest;var f;if(this.state.showEvalFirstNotice){f=i18n._("OK, I did it! I'm ready for evaluation!")}else if(!this.state.viewObjectives||h){f=i18n._("I'm done!")}else{if(this.state.selfRubricPassed){if(this.state.sendForPeerEval){f=i18n._("I'm ready for peer evaluation!");p=i18n._("Your project can now be sent to peers for an evaluation. These evaluations will be public, so that we can all learn from eachother.")}else{f=i18n._("I'm done with my evaluation!")}}}if(f){d=j.createElement(S.default,{size:"small",onClick:v},f)}}var m=j.createElement("div",null,j.createElement("div",null,j.createElement("strong",null,i18n._("Your evaluation was NOT submitted yet."))),j.createElement("div",null,i18n._("We're experiencing a higher than normal number of evaluation requests.")),j.createElement("div",null,i18n._("To give everyone a fair chance at getting evaluated,")," ",j.createElement("a",{href:this.props.collection.getNextEvalUrl()},i18n._("please perform an evaluation yourself")),i18n._(" before requesting an evaluation.")));if(h){var g=this.evalAnswer;var b=g.get("key")===this.state.qaExpandKey;if(b&&_.isUndefined(this.scrollTo)){this.scrollTo="evalGuideline"}return j.createElement("div",{ref:"evalGuideline",className:"eval-guideline"},j.createElement(U,{model:g,isProgramOwner:true}),j.createElement("div",null,j.createElement(D,{model:g}),j.createElement(M,{model:g})),j.createElement("br",null),i18n._("Please re-request an evaluation when you are ready!"),this.state.showEvalFirstNotice?m:null,j.createElement("div",{className:"eval-button-container"},d))}var E;if(this.state.showEvalFirstNotice){E=m}else if(this.state.viewObjectives){E=j.createElement("div",null,j.createElement("strong",null,i18n._("Does your project meet these goals?")),j.createElement("ol",{className:"styled-list"},j.createElement(L,{handleAllPassed:this.handleRubricPass,handleAnyFailed:this.handleRubricFail,handleAnyIncomplete:this.handleRubricIncomplete,willUpdate:this.checkWillScroll,didUpdate:this.scrollToBottom,rubric:this.props.rubric})))}else{E=j.createElement("div",null,i18n._("Work on your project for as long as you'd like, then click this button when you're done."),j.createElement("br",null))}var w=j.createElement(P.ModalLauncher,{onClose:function e(){t.setState({showTooSimilarModal:false})},opened:this.state.showTooSimilarModal,modal:function e(t){var a=t.closeModal;return j.createElement(P.OneColumnModal,{content:j.createElement(k.View,null,j.createElement("h3",null,i18n._("Please do some more work first")),j.createElement(T.Body,{tag:"p"},i18n._("Looks like you haven't changed much for this project. Keep working!"))),footer:j.createElement(k.View,null,j.createElement(S.default,{onClick:a},i18n._("Okay")))})}});var y=A({"eval-guideline":true,"eval-guideline-view-objectives":this.state.viewObjectives});return j.createElement("div",{className:y,ref:"guidelinesView"},w,j.createElement("div",{className:"eval-left"},E),j.createElement("div",{className:"eval-button-container"},d,p))}});var z=m({displayName:"ProjectEvaluationArea",propTypes:{collection:f.instanceOf(q).isRequired,scratchpadId:f.string.isRequired,sendToPeers:f.bool,isProgramOwner:f.bool.isRequired,originTitle:f.string,rubric:f.string,tips:f.string,projectFinished:f.bool},mixins:[b],getInitialState:function e(){return{collection:this.props.collection}},getBackboneModels:function e(){return[this.props.collection]},render:function e(){var t=null;var a=x.default.getUserProfile();var i=a&&a.get("canEvalCsProjects");var s=this.state.collection.authorCoachedByUser;var l=this.props.isProgramOwner&&this.props.rubric;if(l){t=j.createElement(Y,{scratchpadId:this.props.scratchpadId,rubric:this.props.rubric,sendToPeers:this.props.sendToPeers,originTitle:this.props.originTitle,projectFinished:this.props.projectFinished,collection:this.state.collection})}else if((i||s)&&this.state.collection.fetchedInitial&&this.props.sendToPeers||this.state.collection.hasPendingEvalRequests()){t=j.createElement(H,{rubric:this.props.rubric,tips:this.props.tips,collection:this.state.collection})}return j.createElement("div",{className:"eval-container"},t)}});var V=function(e){h(t,e);function t(){n(this,t);return o(this,c(t).apply(this,arguments))}r(t,[{key:"render",value:function e(){var t=[i18n._("Unanswered"),i18n._("Answered"),i18n._("All")];var a=new q([],{topic:this.props.topic.slug,type:"projecthelp",maxAnswers:0});var i=[a,new q([],{topic:this.props.topic.slug,type:"projecthelp",minAnswers:1}),new q([],{topic:this.props.topic.slug,type:"projecthelp"})];var s=j.createElement("div",{className:"projectfeedback-container",key:"helplists"},j.createElement("h2",{ref:"projecthelp"},i18n._("Help Requests")),j.createElement("p",null,i18n._("You can browse through recent help requests below. Thank you for the help!")),j.createElement(I,{collections:i,labels:t,listType:"projecthelp"}));var l=[new q([],{topic:this.props.topic.slug,type:"projecteval",maxAnswers:0,shuffle:true,autoRefresh:true,fetchCount:30}),new q([],{topic:this.props.topic.slug,type:"projecteval",minAnswers:1}),new q([],{topic:this.props.topic.slug,type:"projecteval"})];var n="/computing/computer-programming/programming"+"/animation-basics/p/challenge-parting-clouds";var r=j.createElement("div",null,j.createElement("p",null,i18n._("We'd love your help in evaluating projects. However, we want to make sure you know JS yourself, which you can demonstrate by completing a coding challenge and earning the \"Challenger: Complete a Computer Science Challenge\" badge. If you do that and come back here, we'll show you evaluation requests you can help with. Thank you!")),j.createElement("ul",null,j.createElement("li",null,j.createElement("a",{href:n},i18n._("Challenge: Parting Clouds"))),j.createElement("li",null,j.createElement("a",{href:"/badges/challenger"},i18n._("Challenger: Complete a Computer Science Challenge badge")))));var o=x.default.getUserProfile();var c=o&&o.get("canEvalCsProjects");if(this.props.topic.slug!=="computer-programming"||c){r=j.createElement(I,{collections:l,labels:t,listType:"questions"})}var u="";if(this.props.topic.hasPeerReviewedProjects){u=j.createElement("div",{className:"projectfeedback-container",key:"evallists"},j.createElement("h2",{ref:"projecteval"},i18n._("Project Evaluations")),r)}var h=[s,u];if(window.location.hash.slice(1)==="projecteval"){h=[u,s]}return j.createElement("div",{className:this.props.topic.domainSlug+" subject-color"},h)}}]);return t}(j.Component);p(V,"propTypes",{topic:f.shape({domainSlug:f.string.isRequired,hasPeerReviewedProjects:f.bool.isRequired,relativeUrl:f.string.isRequired,slug:f.string.isRequired,translatedTitle:f.string.isRequired}).isRequired});e.exports={ProjectEvaluationArea:z,ProjectFeedbackPage:V}}}]);
//# sourceMappingURL=../../sourcemaps/en/24a5f45d0c120d8cd0074ba856585ae4.52b4ffa291116826ef82.js.map