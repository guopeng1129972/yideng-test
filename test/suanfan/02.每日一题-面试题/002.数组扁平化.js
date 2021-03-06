/*
2020年04月28日22:52:02
编写一个函数，实现数组扁平化
flattenDeep([1,[2,[3,[4]],5]])
//输出结果：[1,2,3,4,5]

*/

// flattenDeep([1, [2, [3, [4]], 5]]);
//输出结果：[1,2,3,4,5]




/*
答案&解析

1.参考答案一：利用Array.prototype.flat

ES6 为数组实例新增了 flat方法，用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数组没有影响。

flat默认只会 “拉平” 一层，如果想要 “拉平” 多层的嵌套数组，需要给 `flat` 传递一个整数，表示想要拉平的层数。

function flattenDeep(arr, deepLength) {
    return arr.flat(deepLength);
}
console.log(flattenDeep([1, [2, [3, [4]], 5]], 3));

当传递的整数大于数组嵌套的层数时，会将数组拉平为一维数组，JS能表示的最大数字为 Math.pow(2, 53) - 1，因此我们可以这样定义 flattenDeep 函数

function flattenDeep(arr) {
    //当然，大多时候我们并不会有这么多层级的嵌套
    return arr.flat(Math.pow(2,53) - 1);
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));

2.参考答案二：利用 reduce 和 concat

function flattenDeep(arr){
    return arr.reduce((acc, val) => Array.isArray(val) ?
                  acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));

3.参考答案三：使用 stack 无限反嵌套多层嵌套数组

function flattenDeep(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // 使用 pop 从 stack 中取出并移除值
        const next = stack.pop();
        if (Array.isArray(next)) {
            // 使用 push 送回内层数组中的元素，不会改动原始输入 original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    // 使用 reverse 恢复原数组的顺序
    return res.reverse();
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));


*/

function flattenDeep(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 使用 push 送回内层数组中的元素，不会改动原始输入 original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 使用 reverse 恢复原数组的顺序
  return res.reverse();
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));