// - 1.请写出如下代码输出值，并解释为什么。(5分)
console.log(a);
console.log(typeof yideng(a));
var flag = true;
if (!flag) {
    var a = 1;
}
if (flag) {
    function yideng(a) {
        yideng = a;
        console.log("yideng1");
    }
} else {
    function yideng(a) {
        yideng = a;
        console.log("yideng2");
    }
}

/*
我的：undefined，undefined,yideng1
实际：
undefined
f_01:2 Uncaught TypeError: yideng is not a function
    at f_01:2
*/

/*
结论： 首先，按题这么写就会报错
*/