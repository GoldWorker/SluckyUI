
// config
const common = require('./webpack.common');
const devConfig = require('./webpack.dev');
const proConfig = require('./webpack.pro')

module.exports = function (env, arg) {
    console.log(env, arg.mode);
    if (arg.mode == 'development') {
        return Object.assign({}, common, devConfig)
    }
    return Object.assign({}, common, proConfig)
};