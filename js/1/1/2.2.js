/*
高阶函数
高阶函数，就是把函数当作参数，或返回值为函数 的函数

*/


// 回调函数


/*
闭包
2部分组成
1.函数
2.环境：函数创建时作用域内部的局部变量
作用
1.可以解决过多全局变量的污染
*/
function makeConter(init) {
    var init = init || 0;
    return function () {
        return ++init;
    }
}
var counter=makeConter(10);
console.log(counter())//11
console.log(counter())//12
var counter2=makeConter(0);
console.log(counter2())//1
console.log(counter2())//2

/*
函数式编程应该对应指令式编程
指令式编程
var a=1;
var b=2;
console.log(a+b)
函数式编程
f(x)=a+b

*/