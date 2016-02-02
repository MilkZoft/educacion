module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    devServer: {
        inline: true,
        port: 2525
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    }
};
