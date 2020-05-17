/*
时间：2020年05月01日02:10:36
题目：排序数组查找
统计一个数字在排序数组中出现的次数
思路：
1.直接遍历数组，判断前后的值是否相等，找到开始的位置与结束的位置，时间复杂度O(n)
*/

let arr = [0, 1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7, 7, 8, 8, 8, 9, 9, 10]

const findNum = (arr, num) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      temp++
    }
  }
  return result
}

// 2.使用2分法查找到目标值，在向前向后遍历，找到所有的数，比上面略优，时间复杂度也是O(n)
const erFenfa = (arr, num, start, end) => {
  if (end > start) {
    return -1;
  }
  let mid = Math.floor((end + start) / 2);
  // let mid = parseInt((end + start) / 2);
  if (num === arr[mid]) {
    return mid
  } else if (num < arr[mid]) {
    return erFenfa(arr, num, start, mid - 1);
  } else {
    return erFenfa(arr, num, mid - 1, end);
  }
}
//以后写代码先写思路，然后是伪代码，然后在写，类似于数学物理上的已知，求，解，答
//记录起始位置与终止位置

function getNumOfk(data, k) {
  if (data && data.length > 0 && k != null) {
    const firstIndex = getFirstIndex(data, k, 0, data.length - 1)
    const lestIndex = getLestIndex(data, k, 0, data.length - 1)

    if (firstIndex != -1 && lestIndex != -1) {
      return lestIndex - firstIndex + 1
    }
  }
  return 0
}

function getFirstIndex(data, k, start, end) {
  if (start > end) { return -1 }
  let mid = parseInt((start + end) / 2);
  if (data[mid] === k) {
    if (data[mid - 1] != k) {
      return mid
    } else {
      return getFirstIndex(data, k, start, mid - 1)
    }
  }
  else if (data[mid] > k) { return getFirstIndex(data, k, start, mid - 1) }
  else if (data[mid] < k) { return getFirstIndex(data, k, mid + 1, end) }
}
function getLestIndex(data, k, start, end) {
  if (start > end) { return -1 }
  let mid = parseInt((start + end) / 2);
  if (data[mid] === k) {
    if (data[mid + 1] != k) {
      return mid
    } else {
      return getLestIndex(data, k, mid + 1, end)
    }
  }
  else if (data[mid] > k) { return getLestIndex(data, k, start, mid - 1) }
  else if (data[mid] < k) { return getLestIndex(data, k, mid + 1, end) }
  else { return getLestIndex(data, k, mid - 1, end) }

}