const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // devtool: 'source-map',
    entry: getEntryConfig(),
    output: {
        filename: (chunkData) => {
            let filePath = chunkData.chunk.name;
            const filename = filePath.replace('.jsx', '.js');
            console.log('output_filename', filename);
            return filename;
            // return '[name].js'
        },
        path: __dirname + '/dist',
        // library: 'slucky',
        libraryTarget: 'umd'
    },
    // externals: Object.keys(pkg.devDependencies).map(pkgName => (context, request, callback) => {
    //     // 逻辑：以模块名 pkgName 开始的引用都将视为外部模块
    //     request.indexOf(pkgName) === 0 ? callback(null, request) : callback();
    // }),
    // externals: /^(react|\$)$/i,
    externals: [
        function(context, request, callback) {
            // 允许编译以下后缀文件
            if (/.jsx|.jpg|.png|.gif|.svg|.jpeg$/g.test(request)) {
                console.log('filter_Request', request);
                return callback();
            }
            callback(null, request);
        }
    ],
    resolve: {
        alias: {
            $: './src/jquery.js'
        },
        extensions: ['.js', '.css', '.json', '.jsx']
    },
    module: {
        rules: [{
            test: /.jsx|.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(jpg|png|gif|svg|jpeg)$/,
            use: [{
                loader: 'url-loader'
                // options: {
                //     limit: true
                // }
            }],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin('dist', {
            verbose: false,
            watch: true,
            exclude: ['.git', '.npmignore', 'package.json', 'README.md']
        }),
        new CopyPlugin([{
            from: './sass',
            to: './sass'
        }, {
            from: './src/icons',
            to: './icons'
        }])
    ]
};

function getFileCollection() {
    const globPath = './src/**/*.jsx';
    // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
    // const pathDir = './src(\/|\\\\)(.*?)(\/|\\\\)jsx';
    const files = glob.sync(globPath);
    return files;
}

function getEntryConfig() {
    let entryObj = {};
    getFileCollection().forEach(item => {
        const filePath = item.replace('./src', '');
        entryObj[filePath] = path.resolve(__dirname, item);
    });
    console.log(entryObj);
    return entryObj;
}
