/**************
算法母日一现切数万
大家都知道斐波那契数列，现在要求输入一个整数n,请你输出斐波那契数列的第n项（从0开始，第0项为0)。
f(n)=f(n-1)+f(n-2)

解题提示
1、基本解法是递归，注意避免递归的缺陷
2、可以试试动态规划解法

基本思路
递归的本质是吧一个问题分解成两个或者多个小问题，如果多个小问题存在互相重叠的情况，那么就存在重复计算。
f(n)=f(n-1)+f(n-2)这种拆分使用递归是典型的存在重叠的情况，所以会造成非常多的重复计算。

另外，每一次函数调用爱内存中都需要分配空间，每个进程的栈的容量是有限的，递归层次过多，就会造成栈溢出。
递归是人最大数开始，不断拆解成小的数计算，如果不去考虑递归，我们只需要从小数开始算起，从底层不断往上累
加就可以了，其实思路也很简单。
*/
// 1、递归解法
function Fibonacci(n) {
  if (n < 2) {

    return n;
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}


// 2、递归加记忆化
// 3使用一个数组缓存计算过的值
function Fibonacci(n, memory = []) {
  if (n < 2) { return n; }

  if (!memory[n]) {
    memory[n] = Fibonacci(n - 1, memory) + Fibonacci(n - 2, memory);
  }
  return memory;
}
// 3、动态规划解法
function Fibonacci(n) {
  if (n <= 1) { return n; }
  let i = 1;
  let pre = 0;
  let current = 1;
  let result = 0;
  while (i++ < n) {
    result = pre + current;
    pre = current;
    current = result;
  }
  return result;
}
