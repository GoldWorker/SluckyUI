const path = require('path');

module.exports = {
    devtool: 'source-map',
    //入口配置
    // entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.jsx')],
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    //出口配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        // publicPath: '/public'
    },
    resolve: {
        alias: {
            $: './src/jquery.js'
        },
        extensions: [".js", ".css", ".json", ".jsx"]
    }
}
