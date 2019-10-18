


- 答：
- 5.请写出代码执行结果，并解释为什么？（5分）
function yideng() {
 console.log(1);
}
(function () {
 if (false) {
 function yideng() {
 console.log(2);
 }
 }
 yideng();
})();
- 答：
- 6.请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等
生以此类推。不允许使用if switch等。（10分）
- 答：
⻚码：5/7
㊙
- 7.请用一句话遍历变量a。(禁止用for 已知var a = “abc”)(10分)
- 答：
- 8.请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子
类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句：将 红色的
Cruze买给了小王价格是14万。（20分）
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