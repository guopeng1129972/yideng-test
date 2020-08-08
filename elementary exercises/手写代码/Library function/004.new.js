/*jshint esversion: 6 */
// 手写代码，模拟原理
// new
function person(name, age) {
  this.name = name
  this.age = age
}
function myNew(obj) {
  return function () {
    let newObj = {
      __proto__: obj.prototype
    };
    obj.call(newObj, ...arguments);
    return newObj;
  };
}
// console.log(myNew(person)('chen', 18))// {name: "chen", age: 18}
//简版
const myNew2 = function () {
  let obj = {};
  let _constructor = [].shift.call(arguments);
  obj.__proto__ = _constructor.prototype;
  let res = _constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
}
// console.log(myNew2(person, 'chen', 18))// {name: "chen", age: 18}
//简2
const myNew3 = function (func) {
  let obj = {}
  if (func.prototype !== null) {
    obj.__proto__ = func.prototype
  }
  let result = func.apply(obj, [].slice.call(arguments, 1))
  return result && typeof result === 'object' || typeof result === 'function' ? result : obj
}
// console.log(myNew3(person, 'chen', 18))// {name: "chen", age: 18}