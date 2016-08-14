/**
 * Created by vnguyen on 7/25/16.
 */
var path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
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
                ttest: /(\.js|\.jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loaders: [
                    'file?name=assets/[name].[hash].[ext]',
                    'webp'
                ]
            },
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
            }
        ]
    },
    sassLoader: {
        data: '@import "theme/_config.scss";',
        includePaths: [path.resolve(__dirname, '../src')]
    },

    postcss: function () {
        return [autoprefixer, precss];
    },
    plugins: [
        new HtmlWebackPlugin({
            template: 'html/index.html',
            filename: 'index.html'
        })
    ]
}