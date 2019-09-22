/*
题目
*/

this.a = 20;

function go() {
    console.log(this.a);
    this.a = 30;
}
go.prototype.a = 40;
var test = {
    a: 50,
    init: function (fn) {
        fn();
        console.log(this.a);
        return fn;
    }
};
console.log((new go()).a);
test.init(go);
var p = test.init(go);
p();

/*
我的见解
这个题目是考this
   this.a = 20; this.a=20

function go() {
    console.log(this.a); 输出this.a 
    this.a = 30;
}
go.prototype.a = 40; go原型的a挂载 值 40
var test = { 定义一个对象test 
    a: 50,          a 50
    init: function (fn) {  定义一个init fuction 接受一个变量
        fn();      执行传入变量
        console.log(this.a);   输出this.a 
        return fn;  返回fn function 内容
    }
};
console.log((new go()).a); 实例化 输出 20 30
test.init(go);  输出 50 30 go function ;因为在test对象里，然后赋值 30 ,再然后返回函数
var p = test.init(go); 定义p 50 30 go function 
p();
*/
/*
实际输出结果

 标准结论
*/