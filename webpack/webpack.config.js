var HtmlWebpackPlugin = require('html-webpack-plugin');
var package     = require('../package.json');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        vendor: Object.keys(package.dependencies),
        app: "./src/scripts/app.js",
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
    module: {
        rules: [
            { 
                test: /\.(s*)css$/, 
                use: ExtractTextPlugin.extract({ 
                        fallback: 'style-loader',
                        use: ['css-loader','sass-loader'],
                    })
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'app.bundle.css' }),
        new CommonsChunkPlugin({
            name: 'shared',
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            chunks: ['vendor', 'shared', 'app'],
            path: path.join(__dirname, "../dist/"),
            filename: 'index.html' 
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Settings',
            template: './src/index.html',
            chunks: ['vendor', 'shared', 'settings'],
            path: path.join(__dirname, "../dist/"),
            filename: 'settings.html'
        }),
        new CopyWebpackPlugin([   
            {from: 'src/images', to: 'images'}   
        ]),
   ]

}