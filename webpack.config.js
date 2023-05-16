const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCss = require("mini-css-extract-plugin");
const path = require("path");

const prod = process.env.NODE_ENV === "production";

module.exports = {
    mode: prod ? "production" : "development",
    entry: "./src/index.tsx",
    devServer: {
        historyApiFallback: true,
    },
    output: {
        path: path.join(__dirname, "dist")
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".tsx", ".ts", ".js", ".jsx"]
                },
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                use: [MiniCss.loader, "css-loader"]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    devtool: prod ? undefined : "source-map",
    plugins: [
        new ESLintPlugin({
            extensions: ["tsx", "ts"],
        }),
        new HtmlPlugin({
            template: path.join(__dirname, "public", "index.html")
        }),
        new MiniCss()
    ]
}