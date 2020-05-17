/*
时间：2020年05月03日12:21:17
题目：

*/
for (let i = (setTimeout(() => console.log("a->", i)), 0);
  setTimeout(() => console.log("b->", i)), i < 2;
  i++) {
  i++
}

// 实际结果：a->0 b->1 b->2
//试下var
for (var i = (setTimeout(() => console.log("a->", i)), 0);
  setTimeout(() => console.log("b->", i)), i < 2;
  i++) {
  i++
}
// 实际结果：a->2 b->2 b->2
// 试下const
for (const i = (setTimeout(() => console.log("a->", i)), 0);
  setTimeout(() => console.log("b->", i)), i < 2;
  i++) {
  i++
}
// 实际结果：
//Uncaught TypeError: Assignment to constant variable.
//a->0 b->0   这个结果表明setTimeout没有受影响，没有报错，
// const让值没变，即便如此，setTimeout还是执行了当时时刻的i的值
/*
我的结果： buhui
分析：
实际结果：
a->0
b->1
b->2
重点：
*/