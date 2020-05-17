
/*
算法每日一练
20200513 查找缺失的数字

一个长度为n-1的递增排序数组中的所有数字都是唯一的，
并且每个数字都在范围0~n-1之内，在范围0~n-1内的
n个数字中有且只有一个数字不在该数组中，请找出这个数字
*/


function findNum1(arr, start, end) {
  let mid = parseInt((start | 0) + (end | arr.length) / 2);
  if (arr[mid] == arr[mid - 1] && mid > 1) {

  }
  if (arr[mid] == arr[mid + 1] && mid < arr.length - 2) {
    mid++;
  }
  if (arr[mid] != arr[min - 1] && arr[mid] != [mid + 1]) {
    return arr[mid]
  } else {
    while (arr[mid] == arr[mid - 1]) {
      mid--
    }
    return findNum1(arr, start, mid - 1)
  }
  if (arr[mid] != arr[min - 1] || arr[mid] != [mid + 1]) { }

}

function findNum2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (mid === arr[mid]) {
      left = mid + 1
    } else if (mid < arr[mid]) {
      right = mid - 1
    }
  }
  return left
}