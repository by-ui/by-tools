
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve("src/index.ts"),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'by-tools.js',
        chunkFilename:'[name].js',     
        publicPath:'/dist/', // 设置基础路径
        library: 'by-tools',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
        ]
    },
    performance: {
        hints: false
    },
    devtool: false,
    plugins: [
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
        ]
    }
};