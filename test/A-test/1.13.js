// 12.【仔细思考】写出如下代码执行结果，并解释为什么。(12分)
var length = 10;

function fn() {
    console.log(this.length);
}
var yideng = {
    length: 5,
    method: function (fn) {
        fn();
        arguments[0]();
    }
};
yideng.method(fn, 1);

//这是因为第二次的this是arguments的指向