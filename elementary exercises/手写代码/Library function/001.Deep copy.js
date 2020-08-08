/*jshint esversion: 6 */
// 手写代码，模拟原理
// 深拷贝 deep copy
function clone(obj) {
  let newObj = obj instanceof Array ? [] : {};
  for (let i in obj) {
    newObj[i] = obj[i] && typeof obj[i] == 'object' || typeof obj[i] == Object ? myclone(obj[i]) : obj[i];
  }
  return newObj;
}

let obj1 = { a: 1, b: 2 }
console.log(clone(obj1))