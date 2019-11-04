// - 7.请用一句话遍历变量a。(禁止用for 已知var a = “abc”)(10分)

var a = "abc";

function loop(str) {
    str.split().map("0");

}

loop(a);


var a = "abc";

var b = Array.prototype.slice.call(a);
console.log(b);

// 或者
var slice = Array.prototype.slice;
var bb = slice.call(a);

/*
我的：我第一印象用的是splice，用的是slice。。。。。fuck
*/
/*
结论：      


*/