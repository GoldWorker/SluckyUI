import Loadable from 'react-loadable';
import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { updateReducer } from 'slucky/src/store';

const Loading = () => {
    return <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
    </div>;
};

const createRouterComponent = (store, loaderFn) => {
    return Loadable({
        loader: loaderFn,
        loading: Loading,
        render(loaded, props) {
            let Component = loaded.default;
            updateReducer(store);
            return <Component {...props} />;
        }
    });
};

const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={props =>
                <route.component {...props} routes={route.routes} />
            }
        />
    );
};

const routes = (store) => {
    return [
        {
            path: '/jgui',
            component: createRouterComponent(store, () => import('./pages/jgui'))
        }, {
            path: '/protraitApp',
            component: createRouterComponent(store, () => import('./pages/protraitApp'))
        }, {
            path: '/article',
            component: createRouterComponent(store, () => import('./pages/articleDetail/highorder-articleDetail'))
        }, {
            path: '/articlelist',
            component: createRouterComponent(store, () => import('./pages/article/highorder-article'))
        }, {
            path: '/edit',
            component: createRouterComponent(store, () => import('./pages/articlePublish/highorder-articlePublish'))
        }, {
            path: '/register',
            component: createRouterComponent(store, () => import('./pages/register/highorder-register'))
        }, {
            path: '/',
            component: createRouterComponent(store, () => import('./app'))
        }];
};

const renderRouter = (store) => {
    return routes(store).map((route, i) => {
        return <RouteWithSubRoutes key={i} {...route} />;
    });
};

export default renderRouter;
