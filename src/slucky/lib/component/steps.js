!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"),require("@babel/runtime/regenerator"));else if("function"==typeof define&&define.amd)define(["react","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass","@babel/runtime/helpers/possibleConstructorReturn","@babel/runtime/helpers/getPrototypeOf","@babel/runtime/helpers/inherits","@babel/runtime/regenerator"],t);else{var r="object"==typeof exports?t(require("react"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass"),require("@babel/runtime/helpers/possibleConstructorReturn"),require("@babel/runtime/helpers/getPrototypeOf"),require("@babel/runtime/helpers/inherits"),require("@babel/runtime/regenerator")):t(e.react,e["@babel/runtime/helpers/classCallCheck"],e["@babel/runtime/helpers/createClass"],e["@babel/runtime/helpers/possibleConstructorReturn"],e["@babel/runtime/helpers/getPrototypeOf"],e["@babel/runtime/helpers/inherits"],e["@babel/runtime/regenerator"]);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e,t,r,n,s,a,i){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=61)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},12:function(e,t){e.exports=i},2:function(e,t){e.exports=r},3:function(e,t){e.exports=n},4:function(e,t){e.exports=s},5:function(e,t){e.exports=a},61:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var n=r(12),s=r.n(n),a=r(1),i=r.n(a),l=r(2),o=r.n(l),u=r(3),c=r.n(u),p=r(4),b=r.n(p),h=r(5),f=r.n(h),m=r(0),d=r.n(m),S=function(e){function t(e){var r;return i()(this,t),(r=c()(this,b()(t).call(this,e))).state={currentStep:r.props.currentStep||0},r}return f()(t,e),o()(t,[{key:"handleClickEvent",value:function(e,t){}},{key:"handelPreStep",value:function(){var e=this;this.state.currentStep-1<0?console.log("start"):(console.log("pre"),this.setState({currentStep:this.state.currentStep-1},(function(){e.props.stepset[e.state.currentStep].handlePre&&e.props.stepset[e.state.currentStep].handlePre(e.props.stepset[e.state.currentStep],e.state.currentStep)})))}},{key:"handleNextStep",value:function(){var e,t;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e=this.props.stepset.length,!this.props.stepset[this.state.currentStep].handleNext){r.next=9;break}return r.next=4,s.a.awrap(this.props.stepset[this.state.currentStep].handleNext(this.props.stepset[this.state.currentStep],this.state.currentStep));case 4:t=r.sent,console.log("AllowNext",t),t?this.state.currentStep+1>=e?console.log("end"):(this.setState({currentStep:this.state.currentStep+1}),console.log("next")):console.log("阻塞",t),r.next=10;break;case 9:this.state.currentStep+1>=e?console.log("end"):(this.setState({currentStep:this.state.currentStep+1}),console.log("next"));case 10:case"end":return r.stop()}}),null,this)}},{key:"handleTitleStyle",value:function(e,t){return e>t?"c-hint-b":e<t?"c-theme step-sign-active step-sign-ed":"step-sign-active"}},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement("div",null,d.a.createElement("div",{className:"step-bar"},d.a.createElement("div",{className:"d-f",style:{width:this.props.width||"auto",margin:"0 auto"}},this.props.stepset.map((function(t,r){return d.a.createElement("div",{key:r,className:["flex1 s0 step-item pt32 pb16",e.handleTitleStyle(r,e.state.currentStep)].join(" ")},d.a.createElement("div",{className:"sign-box"},d.a.createElement("div",{className:["step-sign"].join(" ")},d.a.createElement("span",{className:"step-sign-in"},"✓"))),d.a.createElement("div",{className:"ptb8 fs12",onClick:function(){return e.handleClickEvent(t,r)}},t.title))})))),this.props.stepset.map((function(t,r){return d.a.createElement("div",{key:r,className:"p-r"},d.a.createElement("div",{className:"step-content",style:r==e.state.currentStep?{position:"relative",visibility:"visible",zIndex:1,left:0}:{}},e.props.isCacheData?t.content&&t.content(t.store||{},(function(){return e.handleNextStep()}),(function(){return e.handelPreStep()})):r==e.state.currentStep?t.content&&t.content(t.store||{},(function(){return e.handleNextStep()}),(function(){return e.handelPreStep()})):null))}))),!this.props.stepset[this.state.currentStep].isCustomCtrl&&d.a.createElement("div",{className:"ta-c pt16"},0!=this.state.currentStep?d.a.createElement("button",{className:"btn-w bor b-side ptb6 plr16 mr16",onClick:function(){return e.handelPreStep()}},"上一步"):null,d.a.createElement("button",{className:"btn-n ptb6 plr16",onClick:function(){return e.handleNextStep()}},this.state.currentStep+1==this.props.stepset.length?"确认":"下一步")))}}]),t}(m.Component)}})}));