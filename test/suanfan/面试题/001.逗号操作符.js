/* 
2020年04月28日22:43:54
请问输出是什么？
*/


var x = 20;
var temp = {
  x: 40,
  foo: function () {
    var x = 10;
    console.log(this.x);
  }
}
  (temp.foo, temp.foo)();

  /*
每日一题
答案：
20
解析：
逗号操作符，逗号操作符会从左到右计算它的操作数，
返回最后一个操作数的值。所以
(temp.foo, temp.foo)();
等价于
var fun = temp.foo; 
fun();，
fun调用时this指向window，
所以返回20。 

我的：
虽然我想到了输出的20，但是我没有理解
重点：
js中，逗号操作符会从左到右计算它的操作数，
返回最后一个操作数的值。
  
  */
 