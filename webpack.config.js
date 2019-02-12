
const path = require('path')

module.exports = {
    entry: './app.js', //打包的入口文件，从这个文件开始读取，然后加载所有依赖的其他文件，然后打包
    output: {          //输出配置，文件名和文件目录，所有的文件打包成一个js文件
        filename:'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}