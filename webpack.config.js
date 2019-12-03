const common = require('./webpack.common');
const devConfig = require('./webpack.dev');
const proConfig = require('./webpack.pro');
const qaConfig = require('./webpack.qa');
const testConfig = require('./webpack.testdev');
//webpack性能分析工具
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = function(env, arg) {
    console.log('环境', env, '打包模式', arg.mode);
    if (arg.mode == 'development') {
        return Object.assign({}, common, devConfig, );
    }
    switch (env) {
        case 'test':
            return Object.assign({}, common, testConfig);
        case 'qa':
            return Object.assign({}, common, qaConfig);
        case 'pro':
            return smp.wrap(Object.assign({}, common, proConfig));
    }
};
