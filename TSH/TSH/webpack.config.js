"use strict";
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise/auto');

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    entry: "./src/components/Main.js",
    output: {
        filename: "./public/bundle.js"
    },
    devServer: {
        contentBase: "./public",
        host: "localhost",
        port: 9000
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },
};