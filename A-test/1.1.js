/*
   题目1
*/
alert(a)
a();
var a = 3;

function a() {
    alert(10)
}
alert(a)
a = 6;
a();
/*
   我的见解 
    变量存在提升，但是对于函数来说，可以先调用的，
    因为日常习惯下确实也都有这种实际的场景
alert(a)  输出function a(){}
a();   alert(10)
var a = 3;   将3挂靠在a上

function a() {   函数已经初始化，执行
    alert(10)   
}
alert(a)   输出3
a = 6;     将a =6
a();    执行 我觉得这里汇报一个像下面的错误
 VM115:1 Uncaught TypeError: a is not a function


*/

/*
   实际输出结果
   完美结果 100分
   标准结论
*/