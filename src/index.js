import "./sass/normal.scss";
import "./fixed.scss";
import React from 'react';  
import ReactDOM from 'react-dom';
import App from './app'

if(module.hot) {
    module.hot.accept()
}

// if(module.hot){
//     module.hot.accept(moduleId, callback);
// }

// if (module.hot) {
//     // console.log('Accepting the updated printMe module!');
//     module.hot.accept('./normal.scss', function () {
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//         console.log('okok');
//     })
// }

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)