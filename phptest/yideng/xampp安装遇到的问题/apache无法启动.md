现象：点击apache的start,启动不了，
原因：我以前装过Apache，注册表路径对不上
解决办法：1.修改注册表（我是这种原因，所以修改完直接就好了）
2.配置端口，

参照方法
https://blog.csdn.net/qq_41664447/article/details/81202740

yii2 gii运行报错
原因是项目上没有权限
file_put_contents(/Applications/XAMPP/xamppfiles/htdocs/yideng-test/yii2/basic/runtime/gii-2.0.28/yi

这是权限不够，解决办法：打开终端敲入以下信息：
1、cd /Applications/XAMPP/xamppfiles/htdocs
2、chmod -R 777 *

https://blog.csdn.net/kuangdacaikuang/article/details/77197519