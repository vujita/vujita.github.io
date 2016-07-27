/**
 * Created by vnguyen on 7/25/16.
 */
var webpack = require('webpack'),
    HtmlWebackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    helpers = require('./helpers')
var entries = {
    index: './src/containers/index.js'
};

module.exports = {
    entry: entries,
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                loader: 'raw'
            }
        ]
    },
    plugins: [
        new HtmlWebackPlugin({
            template: 'html/index.html',
            filename: 'index.html'
        })
    ]
}