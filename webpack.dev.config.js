
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');


module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline:true,
        historyApiFallback: true,
        port: 9000,
        hot:true
    }
});


/*const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
    return {
        entry: {
            main: path.resolve(__dirname, 'src/index.js'),
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].js'
        },
        module: {
            rules: [
                {
                    // test: que tipo de archivo quiero reconocer,
                    // use: que loader se va a encargar del archivo
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-2'],
                        }
                    },
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                inject: 'body'
            })
        ],
        devtool:
            'inline-source-map',
        devServer:
            {
                historyApiFallback: true,
                port: 9000
            }
    }
};*/
