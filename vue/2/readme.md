vue+webpack-> todoapp



mkdir 2 &&cd 2 && touch readme.md package.json

npm init -y

vue
npm i webpack vue vue-load vue-template-compiler 
css
npm install css-loader style-loader --save-dev
png|jpg
npm install file-loader url-loader --save-dev   

1.使用webpack的配置为webpack.config.js
"webpack":"webpack --config webpack.config.js"
2.webpack.config.js 配置路径
entry:path.join(__dirname,"src/index.js"),
3.配置图片名称[ets]指当前文件的拓展名，[name]指传入的name名
name:[name]-aaa-[ets],