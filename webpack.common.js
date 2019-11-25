const path = require('path');

module.exports = {
    devtool: 'source-map',
    //入口配置
    // entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.jsx')],
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    resolve: {
        alias: {
            $: './src/jquery.js'
        },
        extensions: ['.js', '.css', '.json', '.jsx']
    }
};
