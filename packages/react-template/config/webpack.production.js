/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-06-27 16:08:52
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-27 13:51:09
 */
const {
    join,
    resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    output: {
        assetModuleFilename: "images/[name].[contenthash:5].bundle.[ext]",
        filename: "scripts/[name].[contenthash:5].bundle.js",
        publicPath: "/assets"
    },
    optimization: {
        minimize: true,
        runtimeChunk:{
            name:"runtime"
        },
        // https://segmentfault.com/a/1190000039730567
        splitChunks:{
            chunks:"async", // initial all  函数
            minChunks:1,
            maxAsyncRequests:5,
            maxInitialRequests:3,
            name:false,
            cacheGroups:{
                commons:{
                    chunks:"initial",
                    minChunks:2,
                    name:"commons"
                }
            },
            minSize:{
                javascript:100000,
                style:100000,
            },

        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "react-template",
            filename: "index.html",
            template: resolve(__dirname, "../src/index-prod.html"),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash:5].css",
            chunkFilename: "styles/[id].[contenthash:5].css",
            ignoreOrder: true,
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                preset: [
                    "default",
                    {
                        discardComments: {
                            removeAll: true
                        }
                    }
                ]
            }
        })
    ]
}