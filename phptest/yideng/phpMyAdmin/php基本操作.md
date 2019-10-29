

isset($a)
php中判断是否声明变量，
与js不同

2.与js不同，全局变量必须声明，
不然引用不到

function test(){
    // echo $b;
    global $c;
    echo $c;
}
test($c);
这里面的好像是定义了的，但是不能调用，调用的话要在函数开始时声明全局变量
也可以使用

funcation demo(){
global $one,$two;
 
 echo "运算结果：".($one+$two)."<br>";    //运算结果：300，使用到函数外部声明的全局变量
}


funcation demo(){
  
 echo "运算结果：".($GLOBAL['one']+$GLOBAL['$two'])."<br>";    //运算结果：300，使用到函数外部声明的全局变量
}

两种global的使用方式

https://www.cnblogs.com/Summer-jia/p/5223003.html



php引用一个另一个php文件可以用
    require_once('a.php');  

        require_once('a.php');  
    // include_once('a.php');

    区别在于require是融为一体的，
    include则会执行
    //有点像编译的时候，没有把include的代码第一次编进去，后面又加进去了





$username = $_GET['username'];
$password = $_GET['password'];
if ($username == "admin") {
    echo "登陆成功";
} else {
    echo "登陆失败";
}

这边引入
$username = $_GET['username']; 是要用中括号，不是小括号