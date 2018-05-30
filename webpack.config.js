const path = require('path');
const ExtractTextWebapckPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sassExtract = new ExtractTextWebapckPlugin('./slucky.css');
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const Autoprefixer = require('autoprefixer')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack")
//构建前删除dist目录  
// const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    //module.rules
    //加载loaders
    module: {
        rules: [
            // {
            //     test:/\.scss$/,
            //     exclude: /node_modules/,
            //     use: sassExtract.extract({
            //         fallback: 'style-loader',
            //         use:['css-hot-loader','css-loader','sass-loader']
            //     })
            // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', "postcss-loader", 'sass-loader']
            },
            {
                test: /.jsx$/, //使用loader的目标文件。这里是.jsx
                loader: 'babel-loader'
            },
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ["env", "stage-0"]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            // mimetype: 'image/png',
                            // fallback: 'responsive-loader',
                            // quality: 100
                        },
                    }
                ],
                include: path.join(__dirname, './src'),
                exclude: /node_modules/,
            },
            {
                test: /\.(eot|ttf|woff)$/,
                use: 'file-loader'
            },
            {
                test: /\.(html|htm)$/,
                use: 'html-withimg-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',  // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
                commons: { // 抽离自己写的公共代码，commons这个名字可以随意起
                    chunks: 'initial',
                    name: 'commons',  // 任意命名
                    minSize: 0    // 只要超出0字节就生成一个新包
                }
            }
        }
    },
    //插件
    plugins: [
        new CleanWebpackPlugin('dist', {
            "exclude": ['.git']
        }),//打包前先清空
        new MiniCssExtractPlugin({
            filename: "slucky.css",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),//模板
            filename: 'index.html',
            // chunks:['index'],
            hash: true,//防止缓存
            title: "slucky",
            minify: {
                removeAttributeQuotes: true//压缩 去掉引号
            }
        }),
        require('autoprefixer'),
        // new UglifyjsWebpackPlugin({
        //     sourceMap: true,
        //     uglifyOptions: {
        //         warnings: false,
        //         output: {
        //             comments: false,
        //             beautify: false,
        //         }
        //     }
        // }),//压缩js
        sassExtract,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),//用户名替代id,更新组件时在控制台输出组件的路径而不是数字ID，用在开发模式
        // new webpack.HashedModuleIdsPlugin(), // 用在生产模式
        // new CleanWebpackPlugin(['dist','build'],{  
        //     verbose:false,  
        //     exclude:['img']//不删除img静态资源  
        // }),
    ],
    //开发服务器
    devServer: {//配置此静态文件服务器，可以用来预览打包后项目
        contentBase: path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录
        host: 'localhost',//主机地址
        port: 9090,//端口号
        // compress: true,//开发服务器是否启动gzip等压缩
        historyApiFallback: true,
        hot: true,
        inline: true,
        overlay: { //当有编译错误或者警告的时候显示一个全屏overlay
            errors: true,
            warnings: true,
        }
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/, //忽略不用监听变更的目录
        aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
        poll: 1000 //每秒询问的文件变更的次数
    },
    resolve: {
        alias: {
            $: './src/jquery.js'
        },
        extensions: [".js", ".css", ".json", ".jsx"]
    },
};