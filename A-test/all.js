



⻚码：5/7
㊙
- 答：

- 答：
- 9.请你写出如何利用EcmaScript6/7（小Demo）优化多步异步嵌套的代码？(10分)
- 答：
- 10.考考你的基础怎么样？
var regex = /yideng/g;
console.log(regex.test('yideng'));
console.log(regex.test('yideng'));
console.log(regex.test('yideng'));
console.log(regex.test('yideng’));
- 答：
⻚码：6/7
㊙

- 答：
12.【仔细思考】写出如下代码执行结果，并解释为什么。(12分)
var length = 10;
function fn() {
 console.log(this.length);
}
var yideng = {
 length: 5,
 method: function(fn) {
 fn();
 arguments[0]();
 }
};
yideng.method(fn, 1);
- 答：
⻚码：7/7