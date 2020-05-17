// - 7.请用一句话遍历变量a。(禁止用for 已知var a = “abc”)(10分)

var a = "abc";

function loop(str) {
    str.split().map("0");

}

loop(a);


var a = "abc";

var b = Array.prototype.slice.call(a);
console.log(b);
// Array.prototype.slice.call()可以理解为：改变数组的slice方法的作用域，在特定作用域中去调用slice方法，call（）方法的第二个参数表示传递给slice的参数即截取数组的起始位置。
// 或者
var slice = Array.prototype.slice;
var bb = slice.call(a);

/*
我的：我第一印象用的是splice，用的是slice。。。。。fuck
*/
/*
结论：      


*/