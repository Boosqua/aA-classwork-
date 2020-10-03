const path = require('path')

module.exports = {
    entry: "./frontend/todo_redux.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname)
    },
    devtool: 'source-map',
    resolve: { extensions: [".js", ".jsx", "*"] },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/env',
                        '@babel/react'
                    ]
                }
            }
        }]
    }
}