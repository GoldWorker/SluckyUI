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

const HighorderArticle = (store) => {
    return Loadable({
        loader: () => import('./pages/article/highorder-article'),
        loading: Loading,
        render(loaded, props) {
            let Component = loaded.default;
            updateReducer(store);
            return <Component {...props} />;
        }
    });
};

const HighorderArticlePublish = (store) => {
    return Loadable({
        loader: () => import('./pages/articlePublish/highorder-articlePublish'),
        loading: Loading,
        render(loaded, props) {
            let Component = loaded.default;
            updateReducer(store);
            return <Component {...props} />;
        }
    });
};

const HighorderArticleDetail = (store) => {
    return Loadable({
        loader: () => import('./pages/articleDetail/highorder-articleDetail'),
        loading: Loading,
        render(loaded, props) {
            let Component = loaded.default;
            updateReducer(store);
            return <Component {...props} />;
        }
    });
};

const HighorderRegister = (store) => {
    return Loadable({
        loader: () => import('./pages/register/highorder-register'),
        loading: Loading,
        render(loaded, props) {
            let Component = loaded.default;
            updateReducer(store);
            return <Component {...props} />;
        }
    });
};

const App = (store) => {
    return Loadable({
        loader: () => import('./app'),
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
    return [{
        path: '/article',
        component: HighorderArticleDetail(store)
    }, {
        path: '/articlelist',
        component: HighorderArticle(store)
    }, {
        path: '/edit',
        component: HighorderArticlePublish(store)
    }, {
        path: '/register',
        component: HighorderRegister(store)
    }, {
        path: '/',
        component: App(store)
    }];
};

const renderRouter = (store) => {
    return routes(store).map((route, i) => {
        return <RouteWithSubRoutes key={i} {...route} />;
    });
};

export default renderRouter;
