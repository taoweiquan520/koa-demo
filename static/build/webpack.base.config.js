const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const sourcePath = path.join(__dirname, './../src');
const outputPath = path.join(__dirname, './../output/dist/');
console.log('---------------outputPath', outputPath)
console.log('---------------sourcePath', sourcePath)
console.log(path.join(__dirname, '../../'))
module.exports = {
    // 入口文件
    entry: {
        'index': ['babel-polyfill', './static/src/pages/index.js'],
        'admin': ['babel-polyfill', './static/src/pages/admin.js'],
        'work': ['babel-polyfill', './static/src/pages/work.js'],
        'error': ['babel-polyfill', './static/src/pages/error.js'],
        // 依赖的第三方库
        vendor: ['react', 'react-dom', 'whatwg-fetch']
    },
    // 出口文件
    output: {
        path: outputPath,
        publicPath: './static/output/dist/',
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'scss-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            publicPath: path.join(__dirname, '../../static'),
                            outputPath: outputPath
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            sourcePath,
            'node_modules'
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity,
            filename: 'js/[name].js'
        }),
        // 清除缓存
        new CleanWebpackPlugin(outputPath, {
            root: path.join(__dirname, '../../'),
            verbose: true,
            dry:false
        })
    ]
}