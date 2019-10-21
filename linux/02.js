/*
linux目录介绍
/bin
系统主文件目录
/etc
系统配置文件 程序服务等 相当于win下的注册表
firew 防火墙
hosts 本地ip，做本地解析
my.cnf mysql配置文件
nginx nginx配置文件
pam.d 目录
passwd 机器上的用户
rc0-6 开机启动程序
rpm 管理本地包
yum 管理远程包
sysconfig 网卡配置文件
*/

/*
etc 配置文件的修改，要先备份，再修改
*/

/*
/boot
只能看 不能动
grub
grub2
管理启动
*/
/*
/dev
设备文件
就是device
sda  第一个硬盘
sd1  第一个分区
sd2  第二个分区
tty 终端

*/

/*
/home
用户的目录文件
root 用户的目录需要在root文件夹下的home目录去找
*/

/*
/lib
动态库
程序运行时，需要的
静态库
c编译时生成的

*/


/*
/mnt
盘符，文件路径

*/  

/*
/opt
放程序的，可以是自己装的
*/
/*
/proc
系统当前的状态

ps -aux
查看当前运行的进程信息
*/

/*
/tem 缓存
/var 
日志信息存在
var/log 下
*/

/*
su - root
*/

/*
软连接于硬链接

*/

/*
操作系统的运行模式
用户模式 与内核模式
*/
/*
yum --help
*/

/*
cd
pwd
rmdir
rm
cp
区别在于复制aaa下的所有文件，还是把aaa 复制到bbb下 去
cp -a aaa bbb
复制aaa到bbb目录下
cp -a aaa/ bbb
复制aaa下所有文件到bbb目录下


*/

/*
文件搜索
1.locate 
只能搜索文件名，我没用过
2.whereis
-b 只查找可执⾏行行⽂文件 -m 只查找帮助⽂文件
find 比较全面，搜出的东西也相对较多
grep 我平时使用大多是在文件里查找相关的字符串
*/
/*
帮助命令
man ls
*/
/*
压缩与解压
zip格式
压缩文件
zip -r aaa.zip aaa
解压文件
unzip aaa.zip

gzip 源⽂文件
gzip a.txt
压缩为.gz格式的压缩⽂文件，源⽂文件会消失
tar 格式
-c 打包
-v 显示过程
-f 指定打包后的⽂文件名
tar -cvf aaa.tar aaa
*/

/*
用户管理
查看用户信息
查看当前登录的用户
w
who
last
查看登录成功的用户
lastb
查看登录失败的用户

*/

/*
命令别名 == ⼩小名 临时⽣生效
alias
alias rm="rm -i"
写⼊入环境变量量配置⽂文件 vi ~/.bashrc source ~/.bashrc
unalias 别名 删除别名
*/

/*
显示登录的⽤用户名
whoami
显示指定⽤用户信息，包括⽤用户编号，⽤用户名 主要组的编号及名称，附属组列列表
id mac
显示zhangsan⽤用户所在的所有组
groups mac
显示⽤用户详细资料料
finger mac
*/

/*
  查看文件
*/
/*
cat 
more 
*/
/*
对比文件
*/
/*
diff file1 file2
对比2个文件的差异点
*/

# 加载任务, -w选项会将plist文件中无效的key覆盖掉，建议加上
$ launchctl load -w com.demo.plist

# 删除任务
$ launchctl unload -w com.demo.plist

# 查看任务列表, 使用 grep '任务部分名字' 过滤
$ launchctl list | grep 'com.demo'

# 开始任务
$ launchctl start  com.demo.plist

# 结束任务
$ launchctl stop   com.demo.plist


查看目前的进程 
netstat
关闭进程
kill
如何查找主进程
1.查找进程后边带有master后缀的
2.查看pid 比较小的一般是主进程