const path = require('path');
const basePath = __dirname;
const distPath = '/src/public';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry: {
        bundle: ['./src/app/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            {
                test: /\.jsx/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath:path.join(basePath, distPath) ,
                    },
                  },
                  'css-loader',
                ],
            }

        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: 'misEstilos.css'
        }),
      ]
};
module.exports = webpackInitConfig;
