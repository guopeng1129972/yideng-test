老袁express 练习记录

首先假定你已经安装了 Node.js，接下来为你的应用创建一个目录，然后进入此目录并将其作为当前工作目录。

$ mkdir myapp
$ cd myapp
通过 npm init 命令为你的应用创建一个 package.json 文件。 欲了解 package.json 是如何起作用的，请参考 Specifics of npm’s package.json handling.

$ npm init
此命令将要求你输入几个参数，例如此应用的名称和版本。 你可以直接按“回车”键接受大部分默认设置即可，下面这个除外：

entry point: (index.js)
键入 app.js 或者你所希望的名称，这是当前应用的入口文件。如果你希望采用默认的 index.js 文件名，只需按“回车”键即可。

接下来在 myapp 目录下安装 Express 并将其保存到依赖列表中。如下：

$ npm install express --save
如果只是临时安装 Express，不想将它添加到依赖列表中，可执行如下命令：

$ npm install express --no-save

通过应用生成器工具 express-generator 可以快速创建一个应用的骨架。

express-generator 包含了 express 命令行工具。通过如下命令即可安装：

$ npm install express-generator -g
sudo npm install express-generator -g
express --view=pug myapp


启动文件
cd bin/
node www
npm start run 
sup