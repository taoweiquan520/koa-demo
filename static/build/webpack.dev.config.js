/**
import { path } from 'path';
 * @description 开发环境配置
 */
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config');
const path = require('path');

module.exports = merge(baseWebpackConfig, {
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '../../server/views'),
        post: 8089,
        inline: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_DEV:   JSON.stringify('development')
            }
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin()
    ]
})