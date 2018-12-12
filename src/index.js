import "./sass/normal.scss";
import "./fixed.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import Demo1 from './demo1'
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
import "../node_modules/highlight.js/styles/tomorrow.css";

const requireAll = requireContext => requireContext
    .keys()
    .map(requireContext)
const req = require.context('./icons', false, /\.svg$/)
requireAll(req)
// import './icons/dev.svg';


if (module.hot) {
    module
        .hot
        .accept()
}

// if(module.hot){     module.hot.accept(moduleId, callback); } if (module.hot)
// {     // console.log('Accepting the updated printMe module!');
// module.hot.accept('./normal.scss', function () {
// console.log('Accepting the updated printMe module!');         // printMe();
//       console.log('okok');     }) }

ReactDOM.render(
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/demo1' component={Demo1}/>
    </Switch>
</BrowserRouter>, document.getElementById('root'))