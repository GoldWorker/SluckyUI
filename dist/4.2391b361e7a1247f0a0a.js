(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/vtM":function(e,t,r){"use strict";(function(e){var s;(s=r("0cfB").enterModule)&&s(e),Object.defineProperty(t,"__esModule",{value:!0}),function(){var t=r("0cfB").enterModule;t&&t(e)}();var c=r("/MKj"),i=l(r("8cbq")),a=r("rFpn");function l(e){return e&&e.__esModule?e:{default:e}}var n,o,u=function(e){return{lists:e.articleListsReducer.items}},p=function(e){return{fetchArticleByPage:function(t){return e((0,a.fetchArticleByPage)(t))},fetchArticle:function(){return e((0,a.fetchArticle)())},initialComponent:function(){return e((0,a.initialArticle)())}}},f=(0,c.connect)(u,p)(i.default);t.default=f,n=r("0cfB").default,o=r("0cfB").leaveModule,n&&(n.register(u,"mapStateToProps","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/highorder-article.jsx"),n.register(p,"mapDispatchToProps","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/highorder-article.jsx"),n.register(f,"default","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/highorder-article.jsx"),o(e)),function(){var t=r("0cfB").default,s=r("0cfB").leaveModule;t&&(t.register(i,"_displayArticleLists2","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/highorder-article.jsx"),t.register(l,"_interopRequireDefault","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/highorder-article.jsx"),t.register(u,"mapStateToProps","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/highorder-article.jsx"),t.register(p,"mapDispatchToProps","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/highorder-article.jsx"),t.register(f,"_default","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/highorder-article.jsx"),s(e))}()}).call(this,r("YuTi")(e))},"1w3K":function(e,t,r){"use strict";var s=i(r("+eFp")),c=i(r("UnXY"));function i(e){return e&&e.__esModule?e:{default:e}}e.exports={TransitionGroup:c.default,CSSTransitionGroup:s.default}},"8cbq":function(e,t,r){"use strict";(function(e){var s,c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(s=r("0cfB").enterModule)&&s(e),Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}();!function(){var t=r("0cfB").enterModule;t&&t(e)}();var a=r("q1tI"),l=u(a),n=u(r("C6hq")),o=r("1w3K");function u(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k,d,g=function(e){function t(e){p(this,t);var r=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.fetchArticleByPage=r.props.fetchArticleByPage.bind(r),r.initialComponent=r.props.initialComponent.bind(r),r.state={counter:0,_interval:10},r}return y(t,a.Component),i(t,[{key:"nextPage",value:function(){return this.state.counter+=this.state._interval}},{key:"componentDidMount",value:function(){(0,this.props.fetchArticle)()}},{key:"handleClick",value:function(){this.fetchArticle(this.nextPage())}},{key:"render",value:function(){return l.default.createElement("div",{className:"m16"},Array.prototype.map.call(this.props.lists,function(e,t){return l.default.createElement(o.CSSTransitionGroup,{transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1,key:t},l.default.createElement(n.default,{article:e,key:t}))}))}}]),t}(),j=g;t.default=j,k=r("0cfB").default,d=r("0cfB").leaveModule,k&&(k.register(g,"ArticleLists","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleLists.jsx"),k.register(j,"default","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleLists.jsx"),d(e)),function(){var t=r("0cfB").default,s=r("0cfB").leaveModule;t&&(t.register(i,"_createClass","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleLists.jsx"),t.register(l,"_react2","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleLists.jsx"),t.register(n,"_displayArticleItem2","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleLists.jsx"),t.register(u,"_interopRequireDefault","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleLists.jsx"),t.register(p,"_classCallCheck","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleLists.jsx"),t.register(f,"_possibleConstructorReturn","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleLists.jsx"),t.register(y,"_inherits","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleLists.jsx"),t.register(g,"ArticleLists","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleLists.jsx"),t.register(j,"_default","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleLists.jsx"),s(e))}()}).call(this,r("YuTi")(e))},C6hq:function(e,t,r){"use strict";(function(e){var s,c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(s=r("0cfB").enterModule)&&s(e),Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}();!function(){var t=r("0cfB").enterModule;t&&t(e)}();var a=r("q1tI"),l=u(a),n=r("eO8H"),o=u(r("wd/R"));function u(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":c(t))&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":c(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k,d,g=function(e){function t(){return p(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,a.Component),i(t,[{key:"render",value:function(){var e=this.props.article,t=e.title,r=e.date,s=e.hits,c="/article?id="+e.id;return l.default.createElement("div",{className:"bor-b b-side-s d-f jc-b ac"},l.default.createElement("span",{className:"m8"},l.default.createElement(n.Link,{className:"c-theme",to:c},t)),l.default.createElement("div",{className:"m4 c-icon-b"},l.default.createElement("div",{className:"d-il w96"},l.default.createElement("span",{className:"mr8"},"热度:"),l.default.createElement("span",{className:"mr24"},s,"℃")),l.default.createElement("span",{className:"mr8"},"日期:"),l.default.createElement("span",{className:"mr8"},(0,o.default)(r).format("YYYY-MM-DD HH:mm:ss"))))}}]),t}(),j=g;t.default=j,k=r("0cfB").default,d=r("0cfB").leaveModule,k&&(k.register(g,"ArticleItem","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleItem.jsx"),k.register(j,"default","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleItem.jsx"),d(e)),function(){var t=r("0cfB").default,s=r("0cfB").leaveModule;t&&(t.register(i,"_createClass","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleItem.jsx"),t.register(l,"_react2","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleItem.jsx"),t.register(o,"_moment2","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleItem.jsx"),t.register(u,"_interopRequireDefault","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleItem.jsx"),t.register(p,"_classCallCheck","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleItem.jsx"),t.register(f,"_possibleConstructorReturn","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleItem.jsx"),t.register(y,"_inherits","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleItem.jsx"),t.register(g,"ArticleItem","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleItem.jsx"),t.register(j,"_default","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/display-articleItem.jsx"),s(e))}()}).call(this,r("YuTi")(e))},rFpn:function(e,t,r){"use strict";(function(e){var s;(s=r("0cfB").enterModule)&&s(e),Object.defineProperty(t,"__esModule",{value:!0}),t.initialArticle=t.fetchArticleByPage=t.fetchArticle=void 0,function(){var t=r("0cfB").enterModule;t&&t(e)}();var c=l(r("LpSC")),i=r("lRsb"),a=r("r+ij");function l(e){return e&&e.__esModule?e:{default:e}}function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var o,u,p=!1,f=function(e){return{type:"RECEIVE_LISTS_DATA",isFetching:!1,items:e,receiveAt:Date.now()}},y=function(e){return{type:"RECEIVE_PAGE_DATA",isFetching:!1,items:e,receiveAt:Date.now()}},k=function(e){return{type:"INITIAL_ARTICLE",items:e,isFetching:!1,receiveAt:Date.now()}},d=function(){return{type:"NO_PAGE_DATA"}},g=t.fetchArticle=function(){return function(e){(0,c.default)(__API__.articleAll,{method:"GET",credentials:"include"}).then(function(e){return e.json()}).then(function(t){t.error&&e((0,i.pushInQueue)({info:"No Access",flag:"hint"})),e(f(t))}).catch(function(t){e((0,i.pushInQueue)({info:"Place check your Internet",flag:"warning"}))})}},j=t.fetchArticleByPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return p?function(e){e((0,i.pushInQueue)({info:"没有更多文章了",flag:"warning"})),e({type:"NO_PAGE_DATA"})}:function(t){return(0,c.default)(__API__.articlePage+e,{method:"GET"}).then(function(e){return e.json()}).then(function(e){0!=e.length?t(y(e)):p=!0}).catch(function(e){})}},h=t.initialArticle=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return p?function(e){return{type:"NO_PAGE_DATA"}}:function(t){return(0,c.default)(__API__.articlePage+e,{method:"GET"}).then(function(e){return e.json()}).then(function(e){0!=e.length?t(k(e)):p=!0}).catch(function(e){})}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,isNoData:!1,items:[]},t=arguments[1];switch(t.type){case"INITIAL_ARTICLE":return Object.assign({},e,{isFetching:!1,items:[].concat(n(t.items))});case"RECEIVE_LISTS_DATA":return Object.assign({},e,{isFetching:!1,items:t.items});case"RECEIVE_PAGE_DATA":return Object.assign({},e,{isFetching:!1,items:[].concat(n(e.items),n(t.items))});case"NO_PAGE_DATA":return Object.assign({},e,{isNoData:!0});default:return e}};(0,a.addReducer)(m,"articleListsReducer"),o=r("0cfB").default,u=r("0cfB").leaveModule,o&&(o.register(p,"isNoData","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),o.register(g,"fetchArticle","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),o.register(j,"fetchArticleByPage","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),o.register(h,"initialArticle","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),o.register(f,"receiveData","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),o.register(y,"receivePageData","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),o.register(k,"initialPageData","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),o.register(d,"noPageData","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),o.register(m,"articleListsReducer","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),u(e)),function(){var t=r("0cfB").default,s=r("0cfB").leaveModule;t&&(t.register(c,"_isomorphicFetch2","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),t.register(l,"_interopRequireDefault","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),t.register(n,"_toConsumableArray","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),t.register(p,"isNoData","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),t.register(f,"receiveData","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),t.register(y,"receivePageData","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),t.register(k,"initialPageData","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),t.register(d,"noPageData","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),t.register(g,"fetchArticle","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),t.register(j,"fetchArticleByPage","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),t.register(h,"initialArticle","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),t.register(m,"articleListsReducer","/Users/flyteng/Desktop/workspace/project/sluckyUI/src/slucky/article/data-article.jsx"),s(e))}()}).call(this,r("YuTi")(e))}}]);
//# sourceMappingURL=4.2391b361e7a1247f0a0a.js.map