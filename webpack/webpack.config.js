var HtmlWebpackPlugin = require('html-webpack-plugin');
var package     = require('../package.json');

module.exports = {
    entry: {
        app: "./src/scripts/app.js",
        vendor: Object.keys(package.dependencies),
        settings: "./src/scripts/settings.js"
    }, 
    output: {
        filename: "./dist/[name].bundle.js" 
    },
    watch:true,
    resolve: { extensions: [".js", ".ts"] },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            chunks: ['vendor', 'app'],
            filename: './dist/index.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Settings',
            template: './src/index.html',
            chunks: ['vendor', 'settings'],
            filename: './dist/settings.html' //relative to root of the application
        })
   ]

}