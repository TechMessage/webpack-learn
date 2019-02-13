
const path = require('path')

// 导入插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理dist目录
const HtmlWebpackPlugin = require('html-webpack-plugin');   //自动生成index.html并且引入打包的xxx.bundle.js

const webpack = require('webpack');
 
module.exports = {

    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist', //根目录
        hot: true     //hrm
    },

    // 单一入口文件
    // entry: './src/index.js', //打包的入口文件，从这个文件开始读取，然后加载所有依赖的其他文件，然后打包



    // 单个输入文件
    // output: {          //输出配置，文件名和文件目录，所有的文件打包成一个js文件
    //     filename: 'main.js',
    //     path: path.resolve(__dirname, 'dist')
    // },

    // 多个入口文件
    entry: {
        index: './src/index.js',
        say: './src/say.js'
    },

    // 多个输出js文件
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },

    // plugins
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({title:'自动打包'}),
        new webpack.HotModuleReplacementPlugin(),//hrm 热更新
    ],

    
    module: {
        rules: [
            {
                test: /\.css$/,  // 正则匹配css文件
                use: ['style-loader', 'css-loader'] //使用loader加载css文件
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,  //加载字体文件
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }

        ]
    }
}