import "./sass/normal.scss";
import "./fixed.scss";
// import React from 'react';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import App from './app'
import Demo1 from './demo1'
import { HashRouter, BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux'
import { getStore, updateReducer } from './store.js'
import "../node_modules/highlight.js/styles/tomorrow.css";
import Global from "./component/global";
import HighorderArticle from "./component/article/highorder-article";
// const HighorderArticle = React.lazy(() => import('./component/article/highorder-article'));
// const HighorderArticle = lazy(() => import('./component/article/highorder-article'));
// const HighorderArticle = lazy(() => new Promise((resolve, reject) => {
//     import('./component/article/highorder-article')
//       .then(result => resolve(result.default ? result : { default: result }))
//       .catch(reject);
//   }));
const Loading = () => {
    return <div>Loading...</div>;
}
// const HighorderArticle = () => {
//     return Loadable({
//         loader: () => import('./component/article/highorder-article'),
//         // loader: () => (<div>123</div>),
//         loading: Loading,
//     });
// }

// const HighorderArticle =Loadable({
//     loader: () => import('./component/tableDemo'),
//     loading: Loading,
// });

import HighorderArticlePublish from "./component/articlePublish/highorder-articlePublish";
import HighorderArticleDetail from "./component/articleDetail/highorder-articleDetail";
import HighorderRegister from "./component/register/highorder-register";

const requireAll = requireContext => requireContext
    .keys()
    .map(requireContext)
const req = require.context('./icons', false, /\.svg$/)
requireAll(req)
// import './icons/dev.svg'; 管理api接口
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

function RouteWithSubRoutes(route) {
    console.log('ROUTER',route)
    updateReducer(route.store)
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

const routes = [{
    path: "/article",
    component: HighorderArticleDetail
}, {
    path: "/articlelist",
    component: HighorderArticle
    // component: import('./component/article/highorder-article').default
}, {
    path: "/edit",
    component: HighorderArticlePublish
}, {
    path: "/register",
    component: HighorderRegister
}, {
    path: "/",
    component: App
}]

const store = getStore()
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Global />
                <Switch>
                    {/* <Route exact path='/' component={App} />
                    <Route path='/demo1' component={Demo1} />
                    <Route path='/article' component={HighorderArticleDetail} />
                    <Route path='/articlelist' component={HighorderArticle} />
                    <Route path='/edit' component={HighorderArticlePublish} />
                    <Route path='/register' component={HighorderRegister} /> */}
                    {routes.map((route, i) => {
                        return <RouteWithSubRoutes key={i} {...route} store={store}/>
                        // return React.createElement(RouteWithSubRoutes(i, route, store))
                    })}
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'))
