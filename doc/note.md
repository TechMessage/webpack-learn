# webpack学习笔记

> webpack安装
1. webpack 4.x版本建议本地安装而不是全局全装，对于每个项目来说本地安装
2. npm install webpack webpack-cli --save-dev  // 安装到开发依赖包，仅仅开发阶段有用


> 项目目录
1. node_modules       //第三方依赖包目录
2. package.json       //npm 包管理以及脚本配置文件
3. webpack.config.js  //webpack打包配置的js文件
4. package-lock.json  //锁定依赖包的版本，保证项目在任何地方下载包版本的一致性

> 打包指令
1. npx webpack [--config  xxxx.js]   //默认会执行webpack.config.js,也可以指定其他名字，那么指令需要带上--congif xxx.js 


> 配置npm 指令
1. 在package.json文件中可以配置运行脚本的快捷方式，那么webpack的打包指令可以配置到这里，这样通过npm 命令就可以打包了
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack" 
  },
  这里配置build 指令，当执行npm run build 指令时就会执行webpack指令来打包操作
```




