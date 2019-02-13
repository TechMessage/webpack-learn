# webpack学习笔记

### webpack安装
1. webpack 4.x版本建议本地安装而不是全局全装，对于每个项目来说本地安装
2. npm init -y 初始化npm 包管理项目
3. npm install webpack webpack-cli --save-dev  // 安装到开发依赖包，仅仅开发阶段有用


### 项目目录
1. node_modules       //第三方依赖包目录
2. package.json       //npm 包管理以及脚本配置文件
3. webpack.config.js  //webpack打包配置的js文件
4. package-lock.json  //锁定依赖包的版本，保证项目在任何地方下载包版本的一致性

### 打包指令
1. npx webpack [--config  xxxx.js]   //默认会执行webpack.config.js,也可以指定其他名字，那么指令需要带上--congif xxx.js 


### 配置npm 指令
1. 在package.json文件中可以配置运行脚本的快捷方式，那么webpack的打包指令可以配置到这里，这样通过npm 命令就可以打包了
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack" 
  },
  这里配置build 指令，当执行npm run build 指令时就会执行webpack指令来打包操作
```


### 资源文件管理 css image ttf
1. webpack可以打包静态资源文件，img, css, 等等
2. 为了可以打包css，需要添加以来包 npm install style-loader css-loader --save-dev
```
    module: {
        rules: [
            {
                test: /\.css$/,  // 正则匹配css文件
                use: ['style-loader', 'css-loader'] //使用loader加载css文件
            }
        ]
    }

    webpack uses a regular expression to determine which files it should look for and serve to a specific loader. In this case any file that ends with .css will be served to the style-loader and the css-loader.

    webpack使用正则表达式来匹配文件类型，然后将这些匹配的文件使用use中配置的loader使用来打包
    这样做你就可以在js中通过import 命令来导入css文件
    import '../style.css'
    
```
3. 加载字体文件，也可以用file-loader

4. 加载静态数据文件，例如 json, xml, csv, tsv  npm install --save-dev csv-loader xml-loader ; 默认就支持json文件导入import data from './data.json'； 当需要做一些图表类的数据可视化的时候，是需要类似json或者xml这样类似的数据文件提供数据支持的

5. 对于资源文件的管理，建议以组件为最小单元，将所需的资源文件放在一起，而不是统统放到全局的assets目录下

### 输出管理 Output Management

> So far we've manually included all our assets in our index.html file, but as your application grows and once you start using hashes in filenames and outputting multiple bundles, it will be difficult to keep managing your index.html file manually. However, a few plugins exist that will make this process much easier to manage.


1. 输出目录dist管理，通常在修改源文件之后需要重新npm run build 打包，打包生成的文件都会在dist目录下，那么有些废弃的文件也会在目录下，所以在每次重新打包的时候，建议将dist目录先清理一下，clean-webpack-plugin这个插件就是负责这件事的。

2. html-webpack-plugin 自动打包生成index.html并且引入 打包好的js文件















