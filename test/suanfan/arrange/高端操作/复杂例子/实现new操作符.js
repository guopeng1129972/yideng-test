function mynew(obj) {
  return function () {
    // 创建一个对象，并将其隐式原型对象指向构造函数原型
    let newObj = {
      __protp__: obj.prototype
    }
    //执行构造函数
    obj.call(newObj, ...arguments)
    // 返回该对象
    return newObj
  }
}

function mynew2(obj) {

}