/*
时间：2020年04月28日23:24:57
题目：数组去重
uniq([1,2,3,5,3,2])
//[1,2,3,5]
*/

// uniq([1,2,3,5,3,2])
//[1,2,3,5]


function uniq(arry) {
  var result = [];
  for (var i = 0; i < arry.length; i++) {
    if (result.indexOf(arry[i]) === -1) {
      //如 result 中没有 arry[i],则添加到数组中
      result.push(arry[i])
    }
  }
  return result;
}


/*

解析：
答案&解析

1.参考答案一：利用ES6新增数据类型 Set

Set类似于数组，但是成员的值都是唯一的，没有重复的值。

function uniq(arry) {
    return [...new Set(arry)];
}

2.参考答案二：利用 indexOf

function uniq(arry) {
    var result = [];
    for (var i = 0; i < arry.length; i++) {
        if (result.indexOf(arry[i]) === -1) {
            //如 result 中没有 arry[i],则添加到数组中
            result.push(arry[i])
        }
    }
    return result;
}

3.参考答案三：利用 includes

function uniq(arry) {
    var result = [];
    for (var i = 0; i < arry.length; i++) {
        if (!result.includes(arry[i])) {
            //如 result 中没有 arry[i],则添加到数组中
            result.push(arry[i])
        }
    }
    return result;
}

4.参考答案四：利用 reduce

function uniq(arry) {
    return arry.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur], []);
}

5.参考答案五：利用 Map

function uniq(arry) {
    let map = new Map();
    let result = new Array();
    for (let i = 0; i < arry.length; i++) {
        if (map.has(arry[i])) {
            map.set(arry[i], true);
        } else {
            map.set(arry[i], false);
            result.push(arry[i]);
        }
    }
    return result;
}
我的：

重点：
*/