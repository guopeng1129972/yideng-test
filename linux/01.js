/*
linux 补充课程
*/
/*
1.登录ssh
进入root
sudo su -
ssh root@192.168.1.1
腾讯云
118.89.20.5
ssh -p 22 root@118.89.20.5
输入密码
password:
密文
$
普通用户
#
root用户

ipconfig
没有预制这条命令
ip 
命令工具箱
ip addr
route
检查目前的网关ip
命令行下载命令
wget 
wget https://iterm2.com/downloads/stable/latest
wget -c 断点续传 
wget -c https://iterm2.com/downloads/stable/latest
命令行帮助
输入命令 就会有提示
wget 
或者给加
wget -help
或者用
map
*/
/*
vi
i:
:wq
写入保存
:q!
*/

/*
常用快捷键


ctrl+s
ctrl+q
ctrl+l
ctrl+a
ctrl+e

Linux 上安装 Node.js
直接使用已编译好的包
Node 官网已经把 linux 下载版本更改为已编译好的版本了，我们可以直接下载解压后使用：

# wget https://nodejs.org/dist/v10.9.0/node-v10.9.0-linux-x64.tar.xz    // 下载
# tar xf  node-v10.9.0-linux-x64.tar.xz       // 解压
# cd node-v10.9.0-linux-x64/                  // 进入解压目录
# ./bin/node -v                               // 执行node命令 查看版本
v10.9.0
解压文件的 bin 目录底下包含了 node、npm 等命令，我们可以使用 ln 命令来设置软连接：

ln -s /usr/software/nodejs/bin/npm   /usr/local/bin/ 
ln -s /usr/software/nodejs/bin/node   /usr/local/bin/
注意：一定要设置软连接：否则真的npm没用！！！！！！

二、启动部署
        tar xzvf 要解压的文件名
        npm run start
————————————————
版权声明：本文为CSDN博主「qq_42683700」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_42683700/article/details/83506094

*/





/*
⽤用于存放各种临时⽂文件，是公⽤用的临时⽂文件存储点。
/var
⽤用于存放运⾏行行时需要改变数据的⽂文件，也是某些⼤大⽂文件的溢出区，⽐比⽅方说各种服
务的⽇日志⽂文件(系统启动⽇日志等。)等。

*/