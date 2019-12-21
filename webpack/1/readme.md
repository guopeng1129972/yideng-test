1 e6上

New minor version of npm available! 6.11.3 → 6.13.1       
Run npm install -g npm to update!         


安装 gulp 命令行工具
npm install --global gulp-cli
创建项目目录并进入
npx mkdirp my-project
cd my-project
在项目目录下创建 package.json 文件
npm init
上述命令将指引你设置项目名、版本、描述信息等。

安装 gulp，作为开发时依赖项
npm install --save-dev gulp
检查 gulp 版本
gulp --version
安装相关的包依赖
打包编译组件 合并
npm install gulp-uglify gulp-concat --save-dev