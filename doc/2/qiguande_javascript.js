//奇观的JavaScript

//1 数字分隔符
const num1 = 2_0_0_0;
const num2 = 6_0_0_0;

console.log(num1 + num2);

//2 一些奇怪的类型
typeof null;
console.log(NaN === NaN);

//3.函数
(function () { console.log('hello'); })();

//重置数组
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
// displays [1, 2, 3, 4, 5, 6]

arr.length = 0;
console.log(arr);
// displays []


// 1
// 8000 
// 2
//evaluates false.
// 3
// 会自动运行
// 4
// 5

