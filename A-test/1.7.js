// - 4.写出输出值，并解释为什么。(5分)
function test(m) {
 m = {v:5}
}
var m = {k: 30};
test(m);
alert(m.v);

console.log("")

/*
我的：
结果为undefined
*/
/*
结论：
test(m) m为形参，形参是m，这样修改就不止影响外边的m
*/