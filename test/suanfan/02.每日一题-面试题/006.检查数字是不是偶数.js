/*
时间：2020年05月06日22:46:33
题目：如何不使用%模运算符的情况下检查一个数字是否为偶数
*/
//使用位操作符
function isOushu(num) {
  if (num & 1) {
    return false
  } else {
    return true
  }
}

// 使用递归
function isOushu2(num) {
  if (num == 0) { return true }
  else if (num < 0 || num === 1) { return false }
  else { return isOushu2(num - 2) }
}

/*
我的结果：
分析：
实际结果：

重点：
*/