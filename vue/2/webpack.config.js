/* jshint esversion: 6 */
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");

const isDev = process.env.NODE_ENV === "productor";

const config = {
    target: 'web',
    entry: path.join(__dirname, "src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            },
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.styl(us)?$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                }, 'stylus-loader']
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name]-aaa-[ext]',
                    }
                }
            },

        ]
    }

};

if (isDev) {

    config.devtool = '#cheap-module-eval-source-map';
    config.devServer = {
        pont: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        hot: true,
        // open: true
    },
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        )

}

module.exports = config;