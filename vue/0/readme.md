安装
npm install -g @vue/cli
or 
yarn global add @vue/cli
遇到的问题
Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/@vue'
缺少权限
sudo cnpm install -g @vue/cli
输出
➜  0 git:(master) ✗ vue --version
@vue/cli 4.4.5
使用
vue create vue_dome
报错
info There appears to be trouble with your network connection. Retrying...
rm -rf vue_dome
改源
yarn config set registry https://registry.npm.taobao.org
yarn config delete proxy
npm config rm proxy
npm config rm https-proxy
安装cnpm镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
使用代理registry
npm config set registry https://registry.npm.taobao.org
vue create vue_dome
default
yarn install
yarn serve
启动OK!