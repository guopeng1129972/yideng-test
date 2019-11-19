上线用--save
sodu npm install express --save


  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }

开发是用--save-dev

  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
到时候这块会多出来个配置，可能版本更新之后没有或者放到别处去了，反正我试是没有变化的

安装supervisor
sudo npm install supervisor -g

supervisor app.js
访问目录
http://localhost:8081/?user=admin&password=123
应用实例，访问地址为 http://:::8081
{ admin: '1' }
{ user: 'admin', password: '123' }
在get请求里？表示get请求，&表示并数据 = 就是赋值


1.安装express  //需要先init 环境
2.app.listen 建立简单的服务器 监听1各端口
3.app.get 设置基础的路由


错误处理 log4j


 sudo npm install swig -save