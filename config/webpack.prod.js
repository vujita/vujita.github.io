/**
 * Created by vnguyen on 7/26/16.
 */
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var Visualizer = require('webpack-visualizer-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    debug: false,

    output: {
        path: helpers.root('.'),
        publicPath: '/',
        filename: '[name].[hash].min.js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    plugins: [
        new ManifestPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
        new Visualizer()
    ]
});