"use strict"
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class English extends People {
    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }
    introduce() {
        console.log('Hi,i am ' + this.geName());
        console.log('i speak ' + this.language);
    }
}

let en = new English('Byron', 26, 'English');
en.introduce();


// 语法

// label statement


// 语句与表达式

// ****语句优先
// 可以解释成语句的，是不会解释成表达式的
// console的运行原理
var x = {
    a: 1
};

{
    a: 1
}
// 逗号后面必须是表达式
function a() {
    console.log(a,a)
}

{
    a: 1,
    b: 2
};
// 逗号后面必须是表达式,所以这个会报错
// 立即执行函数

// 原理就是
//1. 不加括号执行不了，不认识这种语法
// （） ： 要求，里面的必须是表达式
// a() 这里表示调用
(function (){})()
// 告诉解释器，里面的是表达式，你按照表达式给我执行
// style1
(function (){}())
// st2
(function (){})()
[function(){}]
//数值运算，都要求后面的必须跟着表达式，所以也行
~ function(){}
+ function(){}
- function(){}
! function(){}
//操作表达符，都要求后面的必须跟着表达式，所以也行
typeof function(){}()
void function(){}()
new function(){}()
new function(){}

// 不能跑，但是好像也没神魔错
, function(){}()
> function(){}()
< function(){}()
^ function(){}()
& function(){}()
/*

 总结：
 解释器解析的原理
    1 语句优先于表达式
立即执行函数的表达原理
    1.讲语句通过各种方式（），操作符（void,new），数值运算符（+，-），
    转换为表达式，执行

*/