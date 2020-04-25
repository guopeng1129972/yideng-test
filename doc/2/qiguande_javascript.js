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

// !
// “！”是逻辑与运算，并且可以与任何变量进行逻辑与将其转化为布尔值 
// !!
// “!!”则是逻辑与的取反运算，尤其后者在判断类型时代码简洁高效，
// 省去了多次判断null、undefined和空字符串的冗余代码。
function isie(params) {
  if (document.all) {
    return true;
  } else {
    return false;
  }
}
function isIE() {
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    return true;
  } else {
    return false;
  }
}  