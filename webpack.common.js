const path = require('path');

module.exports = {
    // devtool: 'source-map',
    //入口配置
    entry: path.resolve(__dirname, 'src', 'index.js'),
    //出口配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        // publicPath: '/public'
    },
    resolve: {
        alias: {
            $: './src/jquery.js'
        },
        extensions: [".js", ".css", ".json", ".jsx"]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/, //忽略不用监听变更的目录
        aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
        poll: 1000 //每秒询问的文件变更的次数
    },
}