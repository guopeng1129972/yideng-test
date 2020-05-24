/****************
每日算法一练
#001二维数组查找
****************/
/************
在一个二维数组中（每个一维数组的长度相同）, 每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
解题提示：二维数组是有序的，比如下面的数据：
123
456
789
可以直接利用左下角数字开始查找：
大于：比较上移
小于：比较右移
*/

var findNumberInArray = (matrix, number) => {
  let i = matrix.length - 1; j = 0;
  const colLength = matrix[0].length || 0;
  while (j < colLength && i > -1) {
    if (matrix[i][j] == number) return true;
    if (matrix[i][j] < number) {
      j++;
    }
    if (matrix[i][j] > number) {
      i--;
    }
  }
  return false;
}
const arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const arr2 = [[11, 22, 33], [44, 55, 66], [74, 88, 98]];
console.log(findNumberInArray(arr1, 4))
console.log(findNumberInArray(arr2, 98))
console.log(findNumberInArray(arr2, 33))
console.log(findNumberInArray(arr2, 34))