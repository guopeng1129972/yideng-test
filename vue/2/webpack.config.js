/* jshint esversion: 6 */
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");
const ExtractPlugin= require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV === "development";

const config = {
    target: 'web',
    entry: path.join(__dirname, "src/index.js"),
    output: {
        filename: "bundle[hash:8].js",
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
    config.module.rules.push(
        {
            test: /.styl(us)?$/,
            use: ['style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                }
            }, 'stylus-loader']
        }
    )
    config.devtool = '#cheap-module-eval-source-map';
    config.devServer = {
        port: 8080,
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

}else{
    config.output.filename='[name].[chunkhash:8].js',
    config.module.rules.push({
        
            test: /.styl(us)?$/,
            use: ExtractPlugin.extract({
                fallback:'style-loader',
                use:[
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true,
                        }
                    },
                    'style-loader'
                ]
            })
        
    }),
    config.plugins.push(
        new ExtractPlugin('style.[contentHash:8].css')
    )
}

module.exports = config;