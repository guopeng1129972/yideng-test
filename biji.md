********************************就是一些比较常见的笔记
Mac root和普通用户切换
sudo su
su -

root切换至普通用户
su - mac
su - 用户名
(-和用户名之间有空格)

***************


***************
.bashrc是一个隐藏的文件，要打开并修改该文件需要：
(1）命令：ls -a 找到文件 .bashrc；
(2) 命令 vim ~/.bashrc 进入到文件；
(3) 直接按 i 键可以对文件进行修改， Esc + ：+ wq 退出并保存修改之后的文件
(4) 命令 ：
alias ll="ls -all"

也有说法就是说配置, 方法一样，就看有什么了
.bash_profile
source ~/.bashrc
 更新 .bashrc
***************
如果每次进shell 都需要更新才能生效 
source ~/.bashrc
可能是你选择的默认shell环境有关
***************
***************
***************
repo
repo abandon gp
repo forall -c git clean -df
repo forall -c git reset --hard
repo sync xxxx

git
git clean -df
git reset --hard
git pull

git fetch --all
git reset --hard origin/master
git pull //可以省略

git fetch 指令是下载远程仓库最新内容，不做合并
git reset 指令把HEAD指向master最新版本

svn
svn co http://xxxxx
svn cleanup
svn up
***************
console 调试

***************
npm 清除node本地缓存
rm -rf node_modules
npm cache clean
npm install
***************
/* jshint esversion: 6 */

***************
***************
***************
***************
***************
***************
***************
***************
***************
***************
***************
***************