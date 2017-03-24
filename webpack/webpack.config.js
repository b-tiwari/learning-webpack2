var HtmlWebpackPlugin = require('html-webpack-plugin');
var package     = require('../package.json');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var path = require("path");

module.exports = {
    entry: {
        app: "./src/scripts/app.js",
        vendor: Object.keys(package.dependencies),
        settings: "./src/scripts/settings.js"
    }, 
    output: {
        path: path.join(__dirname, "../dist/"),
        filename: "[name].bundle.js",
    },
    watch:true,
    resolve: { extensions: [".js", ".ts"] },
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 9000
    },
    plugins: [
        new CommonsChunkPlugin({
                name: 'shared',
                minChunks: 2
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            chunks: ['vendor', 'shared',  'app'],
            filename: './dist/index.html' 
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Settings',
            template: './src/index.html',
            chunks: ['vendor', 'shared', 'settings'],
            filename: './dist/settings.html'
        })
   ]

}