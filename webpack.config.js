module.exports = {
    entry: "./src/hands_on_02/lesson-01.js",
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