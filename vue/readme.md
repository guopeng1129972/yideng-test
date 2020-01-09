安装插件
vuejs/vue-devtools
https://github.com/vuejs/vue-devtools#vue-devtools
这个新版本是用yarn安装的，怪自己没有先看readme
安装yarn
//在NPM 中安装
npm install -g yarn
yarn --version
MacOS

在Mac上安装比较方便，使用初始化脚本即可
curl -o- -L https://yarnpkg.com/install.sh | bash
https://www.cnblogs.com/xiangsj/p/8083094.html
修改yarn 下载目录
yarn config get registry
https://registry.yarnpkg.com
yarn config set registry 'https://registry.npm.taobao.org'
yarn config v0.27.5
success Set "registry" to "https://registry.npm.taobao.org".
Done in 0.07s.



先不管了，装的有问题，下载vue.js 先用吧