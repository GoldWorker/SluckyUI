/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-02-19 17:51:34
 * @LastEditTime: 2019-02-19 17:51:34
 * @LastEditors: your name
 */
const path = require('path');
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sassExtract = new ExtractTextWebapckPlugin('./slucky.css');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 图表分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Jarvis = require('webpack-jarvis'); //这个插件没鸟用
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const DashboardPlugin = require('webpack-dashboard/plugin');

// const Autoprefixer = require('autoprefixer')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ENV_CONF = require('./environment/pro.env.ts');
//构建前删除dist目录 const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    //出口配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkHash].js',
        chunkFilename: '[name].[chunkHash].js'
        // publicPath: '/public'
    },
    //module.rules 加载loaders
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                // exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
                include: [
                    path.join(__dirname, 'src/'),
                    path.join(__dirname, 'node_modules/slucky/sass/')
                ]
            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            }, {
                test: /.jsx|.js$/,
                // loader: 'babel-loader',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-runtime',
                            '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                include: [path.resolve(__dirname, 'src/icons')],
                use: [{
                        loader: 'svg-sprite-loader',
                        options: {
                            symbolId: 'icon-[name]'
                        }
                    },
                    'svg-fill-loader', {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [{
                                removeTitle: true
                            }, {
                                convertColors: {
                                    shorthex: false
                                }
                            }, {
                                convertPathData: false
                            }]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50000 //50k
                        // mimetype: 'image/png',
                        // fallback: 'responsive-loader',
                        // quality: 10
                    }
                }, {
                    // https://github.com/tcoopman/image-webpack-loader
                    loader: 'image-webpack-loader',
                    options: {
                        optipng: { // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
                            enabled: true
                        },
                        pngquant: { // 使用 imagemin-pngquant 压缩 png
                            quality: [0.2, 0.40],
                            speed: 10
                        }
                    }
                }],
                include: path.join(__dirname, './src'),
                exclude: [
                    path.resolve(__dirname, 'src/icons'),
                    path.resolve(__dirname, '/node_modules/')
                ]
            }, {
                test: /\.(eot|ttf|woff)$/,
                use: 'file-loader'
            }, {
                test: /\.(html|htm)$/,
                use: 'html-withimg-loader'
            }, {
                test: /\.md$/,
                use: [{
                        loader: 'html-loader'
                    },
                    {
                        loader: 'markdown-loader',
                        options: {
                            /* your options here */
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: { // 抽离第三方插件
                    test: /node_modules/, // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor', // 打包后的文件名，任意命名
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
                commons: { // 抽离自己写的公共代码，commons这个名字可以随意起
                    chunks: 'initial',
                    name: 'commons', // 任意命名
                    minSize: 0 // 只要超出0字节就生成一个新包
                }
            }
        }
    },
    //插件
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(ENV_CONF)
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: true,
            logLevel: 'info'
        }),
        new DashboardPlugin(),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false
        }),
        // new Jarvis({
        //     port: 1337 // optional: set a port
        // }),
        new CleanWebpackPlugin('dist', {
            verbose: false,
            watch: true,
            'exclude': ['.git']
        }), //打包前先清空
        new MiniCssExtractPlugin({
            filename: 'slucky.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'), //模板
            filename: 'index.html',
            // chunks:['index'],
            hash: true, //防止缓存
            title: 'slucky',
            minify: {
                removeAttributeQuotes: true, //压缩 去掉引号
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new UglifyjsWebpackPlugin({
            uglifyOptions: {
                ie8: false,
                mangle: true,
                output: {
                    comments: false
                },
                compress: {
                    warnings: false,
                    drop_console: true,
                    drop_debugger: true,
                    unused: false
                }
            },
            sourceMap: false,
            cache: true
        }),
        new webpack.HashedModuleIdsPlugin()
    ]
};
