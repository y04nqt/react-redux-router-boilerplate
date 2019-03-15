const webpack = require('webpack');
const path = require('path');

const config = {
    entry: __dirname + '\\src\\index.js',
    output: {
        path: __dirname + '\\dist',
        filename: 'bundle.min.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            }
        ]
    }
};

module.exports = config;
