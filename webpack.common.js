const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
    mode: "production",

    context: path.resolve(__dirname, "src"),

    entry: "./default/assets/js/src/bootstrap.ts",

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "resolve-url-loader",
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                style: "compact",
                                unixNewlines: true,
                            },
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(__dirname, "src"),
                    from: "plugin.js",
                    to: path.resolve(__dirname, "bin"),
                },
            ],
        }),
    ],
};

module.exports = config;
