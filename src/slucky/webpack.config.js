const path = require('path');
const glob = require("glob");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    // devtool: 'source-map',
    //入口配置
    // entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.jsx')],
    entry: addEntry(),
    // entry: path.resolve(__dirname, 'src', 'index.jsx'),
    //出口配置
    output: {
        // path: path.resolve(__dirname, 'distTest'),
        // filename: '[name].js',
        filename: (chunkData) => {
            let filePath = chunkData.chunk.name
            const filename = filePath.replace('.jsx', '')
            console.log('filename', filename)
            return filename + '.js'
            // let res = filePath.match(/\/(\w|\-)+.jsx/)
            // if (res) {
            //     const filename = filePath.replace('.jsx', '').replace('/', '')
            //     return filename + '.js'
            // }
            // console.log(chunkData.chunk.name)
            // return '[name].js'
        },
        path: __dirname + '/distTest',
        // chunkFilename: '[name].js',
        // publicPath: '/public'
        // library: 'slucky',
        libraryTarget: 'umd',
    },
    // externals: Object.keys(pkg.devDependencies).map(pkgName => (context, request, callback) => {
    //     // 逻辑：以模块名 pkgName 开始的引用都将视为外部模块
    //     request.indexOf(pkgName) === 0 ? callback(null, request) : callback();
    // }),
    // externals: /^(react|\$)$/i,
    externals: [
        //只编译jsx
        function(context, request, callback) {
            if (/.jsx$/g.test(request)) {
                console.log('Request', request);
                return callback();
            }
            callback(null, request)
        }
    ],
    resolve: {
        alias: {
            $: './src/jquery.js'
        },
        extensions: [".js", ".css", ".json", ".jsx"]
    },
    module: {
        rules: [{
                test: /.jsx$/, //使用loader的目标文件。这里是.jsx
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(jpg|png|gif|svg|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        mimetype: 'image/png',
                        fallback: 'responsive-loader',
                        quality: 100
                    }
                }],
                exclude: /node_modules/
            },
            // {
            //     test: /\.svg$/,
            //     include: [path.resolve(__dirname, 'src/icons')],
            //     use: [{
            //             loader: 'svg-sprite-loader',
            //             options: {
            //                 symbolId: 'icon-[name]'
            //             }
            //         },
            //         'svg-fill-loader', {
            //             loader: 'svgo-loader',
            //             options: {
            //                 plugins: [{
            //                     removeTitle: true
            //                 }, {
            //                     convertColors: {
            //                         shorthex: false
            //                     }
            //                 }, {
            //                     convertPathData: false
            //                 }]
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin('distTest', {
            verbose: false,
            watch: true,
            "exclude": ['.git', '.npmignore', 'package.json', 'README.md']
        }),
        new CopyPlugin([{
            from: './sass',
            to: './sass'
        }, {
            from: './src/icons',
            to: './icons'
        }])
    ]
}

function getEntry() {
    let globPath = './src/**/*.jsx'
    // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
    let pathDir = './src(\/|\\\\)(.*?)(\/|\\\\)jsx'
    let files = glob.sync(globPath)
    let dirname, entries = []
    for (let i = 0; i < files.length; i++) {
        dirname = path.dirname(files[i])
        // console.log(path.basename(files[i],'.jsx'));
        entries.push(files[i])
        // entries.push(dirname.replace(new RegExp('^' + pathDir), '$2'))
    }
    // console.log(entries);
    return entries
}

function addEntry() {
    let entryObj = {}
    getEntry().forEach(item => {
        // console.log(item.search(pathDir))
        const filePath = item.replace('./src', '')
        entryObj[filePath] = path.resolve(__dirname, item)
    })
    console.log(entryObj);
    return entryObj
}
