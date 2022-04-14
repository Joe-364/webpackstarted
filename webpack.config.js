const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',


    output: {
        clean: true,
    },

    module: {


        rules: [{
                test: /\.html$/,
                loader: 'html-loader',

                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }

        ]
    },
    optimization: {},

    plugins: [
        new HtmlWebPack({
            title: 'Mi webpack app',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            ignoreOrder: false
        })
    ],
};