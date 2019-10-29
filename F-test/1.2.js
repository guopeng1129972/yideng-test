// - 2.请写出如下输出值，并完成附加题的作答(8分)
function fn() {
    console.log(this.length);
}
var yideng = {
    length: 5,
    method: function () {
        "use strict";
        fn();
        arguments[0]()
    }
}
const result = yideng.method.bind(null);
result(fn, 1);


/*
我的：
实际：
*/
/*
查资料：mdn
bind() 最简单的用法是创建一个函数，不论怎么调用，这个函数都有同样的 this 值。
*/
/*
结论：
*/