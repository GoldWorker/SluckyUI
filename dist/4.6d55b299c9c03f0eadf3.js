(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7hG8":function(e,_,t){"use strict";(function(e){t.d(_,"b",function(){return o}),t.d(_,"a",function(){return p});var r,a=t("LpSC"),l=t.n(a),s=t("r+ps"),i=t("NRnq");(r=t("0cfB").enterModule)&&r(e);var n,u,c=function(e){return{type:"VERIFY_EMAIL_SUCCESS",info:e}},E=function(e){return{type:"REGISTER_SUCCESS",info:e}},o=function(e){return function(_){_(Object(s.a)({info:"邮件发送中",flag:"hint"})),l()(__API__.postVerifyEmail,{method:"POST",credentials:"include",body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){e.error?_(Object(s.a)({info:"请确认邮箱是否正确或请查看邮箱里的验证码",flag:"hint"})):(_(c(e)),_(Object(s.a)({info:"发送成功，请查看邮箱里的验证码",flag:"success"})))}).catch(function(e){if(e)throw e;_(Object(s.a)({info:"请网络检查网络连接",flag:"warning"}))})}},p=function(e){return function(_){return l()(__API__.postRegister,{method:"POST",credentials:"include",body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){e.error?_(Object(s.a)({info:e.error,flag:"hint"})):(_(E(e)),_(Object(s.a)({info:"恭喜，注册成功",flag:"success"})))}).catch(function(e){if(e)throw e;_(Object(s.a)({info:"请网络检查网络连接",flag:"warning"}))})}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_=arguments.length>1?arguments[1]:void 0;switch(_.type){case"VERIFY_EMAIL_SUCCESS":case"REGISTER_SUCCESS":return Object.assign({},e,{info:_.info});default:return e}};Object(i.a)(d,"registerReducer"),n=t("0cfB").default,u=t("0cfB").leaveModule,n&&(n.register(c,"verifyEmailSuccess","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/data-register.jsx"),n.register(E,"registerSuccess","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/data-register.jsx"),n.register(o,"verifyEmail","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/data-register.jsx"),n.register(p,"register","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/data-register.jsx"),n.register(d,"registerReducer","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/data-register.jsx"),u(e))}).call(this,t("3UD+")(e))},"9JDM":function(e,_,t){"use strict";(function(e){var r;(r=t("0cfB").enterModule)&&r(e);var a={config:{},types:{},result:{},data:{},getConfig:function(){return this.config},validate:function(e){for(var _ in this.data=e,this.result={},e)if(e.hasOwnProperty(_)){var t=e[_],r=this.validateOne(_,t);r&&(this.result[_]=r)}return this.result},validateOne:function(e,_){var t=this.config[e];if(!t)return!1;var r={key:e,isValid:!0,message:[]};return t.map(function(e,t){if(!this.types[e].validate.call(this,_)){var a=this.types[e].instruction;r.isValid=!1,r.message.push(a)}}.bind(this)),r},isSubmit:function(){for(var e in this.config)if(void 0==this.result[e]||!this.result[e].isValid)return!1;return!0}};a.types.isEmpty={validate:function(e){return""!==e},instruction:"不能为空"},a.types.isName={validate:function(e){return/^[\u4E00-\u9FA5A-Za-z0-9_]{1,10}$/.test(e)},instruction:"十个字以内，不能包含特殊字符"},a.types.isEmail={validate:function(e){return/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e)},instruction:"邮箱格式不正确"},a.types.isPw={validate:function(e){return/^[!@#$%^&*_A-Za-z0-9]{8,15}$/.test(e)},instruction:"由数组，字母，_@#$等组成，不少于8位"},a.types.isPwAgain={validate:function(e){return!!this.data.password&&this.data.password==e},instruction:"重复输入的密码不相同"},a.types.isValidString={validate:function(e){return!isNaN(e)},instruction:"invail Number value"};var l,s,i=a;_.a=i,l=t("0cfB").default,s=t("0cfB").leaveModule,l&&(l.register(a,"validator","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/lib/validator_es5.js"),l.register(i,"default","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/lib/validator_es5.js"),s(e))}).call(this,t("3UD+")(e))},E5OU:function(e,_,t){"use strict";t.r(_),function(e){var r,a=t("/MKj"),l=t("c9Aw"),s=t("7hG8");(r=t("0cfB").enterModule)&&r(e);var i,n,u=function(e){return{}},c=function(e){return{handleVerifyCodeSend:function(_){return e(Object(s.b)({email:_}))},registerConfirm:function(_){return e(Object(s.a)(_))}}},E=Object(a.b)(u,c)(l.a);_.default=E,i=t("0cfB").default,n=t("0cfB").leaveModule,i&&(i.register(u,"mapStateToProps","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/highorder-register.jsx"),i.register(c,"mapDispatchToProps","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/highorder-register.jsx"),i.register(E,"default","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/highorder-register.jsx"),n(e))}.call(this,t("3UD+")(e))},MGdG:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("lwsE"),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("W8MJ"),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("a1gu"),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("Nsbk"),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("7W2i"),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),enterModule;enterModule=__webpack_require__("0cfB").enterModule,enterModule&&enterModule(module);var validSearchInput=function(_Component){function validSearchInput(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,validSearchInput),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(validSearchInput).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(validSearchInput,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(validSearchInput,[{key:"handleValid",value:function(e,_,t){return e||void 0===e?_:t}},{key:"render",value:function(){var e=this.props,_=e.handleInputChange,t=e.data,r=e.name,a=e.placeholder,l=e.btnText,s=e.handleBtnClick;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"input"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label",{htmlFor:r+"register",className:"fs12 c-grey"},r),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"search-box-normalize p-r",style:this.handleValid(t.isValid,{borderColor:"rgba(0, 0, 0, 0.12)"},{borderColor:"#e74c3c"})},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{id:r+"register",onChange:_,type:"email",className:"input input-normal w288",placeholder:a,maxLength:"24",required:!0}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"p-a t0 r0"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{type:"button",className:"btn-n ptb4 plr16 search-btn",onClick:s},l))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"input-ps fs12",style:this.handleValid(t.isValid,{opacity:"0"},{opacity:"1"})},t.message.map(function(e){return e+" "})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),validSearchInput}(react__WEBPACK_IMPORTED_MODULE_5__.Component);validSearchInput.defaultProps={data:{message:[]}};var _default=validSearchInput,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__("0cfB").default,leaveModule=__webpack_require__("0cfB").leaveModule,reactHotLoader&&(reactHotLoader.register(validSearchInput,"validSearchInput","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/display-validSearchInput.jsx"),reactHotLoader.register(_default,"default","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/display-validSearchInput.jsx"),leaveModule(module))}).call(this,__webpack_require__("3UD+")(module))},Nwcf:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("lwsE"),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("W8MJ"),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("a1gu"),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("Nsbk"),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("7W2i"),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),enterModule;enterModule=__webpack_require__("0cfB").enterModule,enterModule&&enterModule(module);var ValidInput=function(_Component){function ValidInput(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,ValidInput),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ValidInput).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ValidInput,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ValidInput,[{key:"handleValid",value:function(e,_,t){return e||void 0===e?_:t}},{key:"render",value:function(){var e=this.props,_=e.handleInputChange,t=e.data,r=e.name,a=e.placeholder;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"input pt8"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label",{htmlFor:r+"register",className:"fs12 c-grey"},r),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{id:r+"register",onChange:_,type:"text",className:"input-normal w288",placeholder:a,maxLength:"32",style:this.handleValid(t.isValid,{borderColor:"rgba(0, 0, 0, 0.12)"},{borderColor:"#e74c3c"}),required:!0}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span",{className:"input-ps fs12",style:this.handleValid(t.isValid,{opacity:"0"},{opacity:"1"})},t.message.map(function(e){return e+" "})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ValidInput}(react__WEBPACK_IMPORTED_MODULE_5__.Component);ValidInput.defaultProps={data:{message:[]}};var _default=ValidInput,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__("0cfB").default,leaveModule=__webpack_require__("0cfB").leaveModule,reactHotLoader&&(reactHotLoader.register(ValidInput,"ValidInput","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/display-validInput.jsx"),reactHotLoader.register(_default,"default","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/display-validInput.jsx"),leaveModule(module))}).call(this,__webpack_require__("3UD+")(module))},c9Aw:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("lwsE"),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("W8MJ"),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("a1gu"),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("Nsbk"),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("PJYZ"),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("7W2i"),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("q1tI"),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_lib_validator_es5__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("9JDM"),_display_validInput__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("Nwcf"),_display_validSearchInput__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("MGdG"),react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("J21I"),react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_10__),enterModule;enterModule=__webpack_require__("0cfB").enterModule,enterModule&&enterModule(module);var Register=function(_Component){function Register(e){var _;return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Register),(_=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Register).call(this,e))).state={data:{email:"",emailVerifyCode:"",name:"",password:"",passwordAgain:""},result:{}},_lib_validator_es5__WEBPACK_IMPORTED_MODULE_7__.a.config={email:["isEmpty","isEmail"],emailVerifyCode:["isEmpty"],name:["isName","isEmpty"],password:["isEmpty","isPw"],passwordAgain:["isEmpty","isPwAgain"]},_.registerConfirm=_.props.registerConfirm.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_)),_.handleVerifyCodeSend=_.props.handleVerifyCodeSend.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_)),_}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Register,_Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Register,[{key:"handleInputChange",value:function(e,_){var t=this.state.data;t[e]=_.target.value,this.setState({data:t})}},{key:"handleFormConfirm",value:function(e){e.preventDefault();var _=this.state.data,t=_lib_validator_es5__WEBPACK_IMPORTED_MODULE_7__.a.validate(_);this.setState({result:t}),_lib_validator_es5__WEBPACK_IMPORTED_MODULE_7__.a.isSubmit()&&this.registerConfirm(this.state.data)}},{key:"handleEmailSend",value:function(){var e=this.state.data.email,_=_lib_validator_es5__WEBPACK_IMPORTED_MODULE_7__.a.validateOne("email",e);this.setState({result:{email:_}}),_.isValid&&this.handleVerifyCodeSend(e)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"register-container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"register-mark"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_10___default.a,{transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form",{className:"paper shadow p32 register-item svgMutiLine p-r",key:"registerForm"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",{className:"ta-c mb4 mt0"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong",null,"注册")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_display_validSearchInput__WEBPACK_IMPORTED_MODULE_9__.a,{btnText:"发送",handleInputChange:this.handleInputChange.bind(this,"email"),handleBtnClick:this.handleEmailSend.bind(this),name:"邮箱",placeholder:"\r 常用邮箱",data:this.state.result.email}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_display_validInput__WEBPACK_IMPORTED_MODULE_8__.a,{handleInputChange:this.handleInputChange.bind(this,"emailVerifyCode"),name:"验证码",placeholder:"\r 输入邮箱里的验证码",data:this.state.result.emailVerifyCode}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_display_validInput__WEBPACK_IMPORTED_MODULE_8__.a,{handleInputChange:this.handleInputChange.bind(this,"name"),name:"昵称",placeholder:"\r 不能含有标点",data:this.state.result.name}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_display_validInput__WEBPACK_IMPORTED_MODULE_8__.a,{handleInputChange:this.handleInputChange.bind(this,"password"),name:"密码",placeholder:"\r 由数组或字母组成",data:this.state.result.password}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_display_validInput__WEBPACK_IMPORTED_MODULE_8__.a,{handleInputChange:this.handleInputChange.bind(this,"passwordAgain"),name:"再次确认密码",placeholder:"\r 要跟楼上一样",data:this.state.result.passwordAgain}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"ta-c pt16"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{type:"submit",className:"btn-n plr32 ptb6",onClick:this.handleFormConfirm.bind(this)},"确认")))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Register}(react__WEBPACK_IMPORTED_MODULE_6__.Component),_default=Register,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__("0cfB").default,leaveModule=__webpack_require__("0cfB").leaveModule,reactHotLoader&&(reactHotLoader.register(Register,"Register","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/display-register.jsx"),reactHotLoader.register(_default,"default","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/pages/register/display-register.jsx"),leaveModule(module))}).call(this,__webpack_require__("3UD+")(module))}}]);