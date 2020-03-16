vue+webpack-> todoapp



mkdir 2 &&cd 2 && touch readme.md package.json

npm init -y

vue
npm i webpack vue vue-load vue-template-compiler 
css
npm install css-loader style-loader --save-dev
png|jpg
npm install file-loader url-loader --save-dev   

npm install stylus-loader stylus  --save-dev
安装stylus插件   
1.使用webpack的配置为webpack.config.js
"webpack":"webpack --config webpack.config.js"
2.webpack.config.js 配置路径
entry:path.join(__dirname,"src/index.js"),
3.配置图片名称[ext]指当前文件的拓展名，[name]指传入的name名,字符串对象记得加引号
name:'[name]-aaa-[ext]',

npm i cross-dnv
安装环境变量包，不同平台可以配置使用相同的路径
"dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"

npm install html-webpack-plugin
生成默认的html文件

npm i webpack-dev-server

npm i postcss-loader autoprefixer babel-loader babel-core

npm i babel-preset-env babel-plugin-transform-vue-jsx

cnpm install --save-dev babel-loader

npm i @babel/core babel-plugin-syntax-jsx