// config
const common = require('./webpack.common');
const devConfig = require('./webpack.dev');
const proConfig = require('./webpack.pro');
const qaConfig = require('./webpack.qa');
const testConfig = require('./webpack.test')

module.exports = function(env, arg) {
    console.log(env, arg.mode);
    if (arg.mode == 'development') {
        return Object.assign({}, common, devConfig)
    } else {
        switch (env) {
            case 'test':
                return Object.assign({}, common, testConfig)
            case 'qa':
                return Object.assign({}, common, qaConfig)
            case 'pro':
                return Object.assign({}, common, proConfig)
        }
    }
};
