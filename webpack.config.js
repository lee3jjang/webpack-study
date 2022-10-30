const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 3000;

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        })
    ],
    devServer: {
        host: "localhost",
        port: port,
        open: true,
        historyApiFallback: true
    }
}