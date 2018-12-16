import "./sass/normal.scss";
import "./fixed.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import Demo1 from './demo1'
import { HashRouter, BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux'
import { getStore } from './store.js'
import "../node_modules/highlight.js/styles/tomorrow.css";
import HighorderMessage from "./component/message/highorder-message";

const requireAll = requireContext => requireContext
    .keys()
    .map(requireContext)
const req = require.context('./icons', false, /\.svg$/)
requireAll(req)
// import './icons/dev.svg';

// 管理api接口
import __API__ from './config.js'
window.__API__ = __API__

if (module.hot) {
    module
        .hot
        .accept()
}

// if(module.hot){     module.hot.accept(moduleId, callback); } if (module.hot)
// {     // console.log('Accepting the updated printMe module!');
// module.hot.accept('./normal.scss', function () { console.log('Accepting the
// updated printMe module!');         // printMe();       console.log('okok');
// }) }]

const store = getStore()
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <div className="slidebar-box-normalize slidebar-hover-b">
                    <input type="checkbox" id="slidebar-switch" className="d-n" />
                    <div className="slidebar bg-b">
                        <label htmlFor="slidebar-switch" className="slidebar-tool p16 d-f ac jc-r">
                            <span className="mr16">返回</span>
                            <svg className="icon icon16" id="slidebar_in">
                                <use xlinkHref="#icon-test"></use>
                            </svg>
                            <div id="slidebar_out">
                                {/* <svg className="icon icon24" id="slidebar_out">
                                    <use xlinkHref="#icon-test"></use>
                                </svg> */}
                                <div className="d-il p8 plr16 m8 shadow bg-b c-text-w">
                                    菜单
                                </div>
                            </div>
                        </label>
                        <details className="slide-down">
                            <summary className="pl16 c-text-w ptb16">农场管理员</summary>
                            <ul className="menu">
                                <li>
                                    <a>发布土地</a>
                                </li>
                                <li>
                                    <a>发布种子方案</a>
                                </li>
                                <li>
                                    <a>发布服务包</a>
                                </li>
                            </ul>
                        </details>
                        <ul className="menu">
                            <li>
                                <a>发布土地</a>
                            </li>
                            <li>
                                <a>发布种子方案</a>
                            </li>
                            <li>
                                <a>发布服务包</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mark-b"></div>
                </div>
                <HighorderMessage />
                <Switch>

                    <Route exact path='/' component={App} />
                    <Route path='/demo1' component={Demo1} />
                </Switch>
            </div>
        </HashRouter>
    </Provider>, document.getElementById('root'))
