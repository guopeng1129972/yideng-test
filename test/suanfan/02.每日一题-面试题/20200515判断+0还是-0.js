/**实现一个函数isNegtiveZero(),
只检查+0和-0，-0则返回true，+0返回false
*/

function isNegtiveZero(num) {
  if (num !== 0) { throw new TypeError('is not -0 or +0') }
  return 1 / num === -Infinity
}

// console.log(isNegtiveZero('-100'));
console.log(isNegtiveZero(-0));
console.log(isNegtiveZero(0));

function isNegtiveZero2(num) {
  if (num !== 0) { throw new TypeError('is not - or +0') }
  return Object.is(num, -0)
}

console.log(isNegtiveZero2(-0));
console.log(isNegtiveZero2(0));
/**
 * 要点：
 * 1.用的方法就是es5的方法Object.is(num,-0)，判断字符串是否相等
 * 2.利用数学方法，1/负数,结果为负数，为0则为-无穷大，除了除法还可以用别的方法
 * 3.数制转换
 * 2进制转10进制，num.pastInt(a);以a进制识别num
 * 10进制转2进制，num.toString(2)
 * 在这个题目中，我本来向着移位操作，不能这样，因为-0.toSting(2)就成0了，不能判断
 *  */