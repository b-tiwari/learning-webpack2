var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: "./src/scripts/app.js", //relative to root of the application
    output: {
        filename: "./dist/app.bundle.js" //relative to root of the application
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './dist/index.html' //relative to root of the application
        })
   ]

}