module.exports = {
    entry: ["@babel/polyfill", "./src/hands_on_03/lesson-04.js"],
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
};