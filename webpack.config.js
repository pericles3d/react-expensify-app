const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), //__dirname gets the path and we join it with the folder public
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'), //__dirname gets the path and we join it with the folder public
        historyApiFallback: true //this tells the server to serve index.html to all routes
    }
}