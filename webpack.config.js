
const path = require('path')

module.exports = {
    entry: './src/index.js', //打包的入口文件，从这个文件开始读取，然后加载所有依赖的其他文件，然后打包
    output: {          //输出配置，文件名和文件目录，所有的文件打包成一个js文件
        filename:'main.js',
        path: path.resolve(__dirname, 'dist')
    },

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
            }
        ]
    }
}