// 手写代码，模拟原理
// 深拷贝
function clone(obj) {
  let newObj = obj instanceof Array ? [] : {}
  for (let i in obj) {
    newObj[i] = obj[i] && typeof obj[i] == 'object' || typeof obj[i] == Object ? myclone(obj[i]) : obj[i];
  }
  return newObj
}
//call
Function.prototype.mycall = function (context1) {
  const context = context1 || window;
  context.fn = this
  let args = []
  for (let k in arguments) {
    args.push('args[' + i + ']')
  }
  let result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}
// myaplly
Function.prototype.myapply = function (context1, arr) {
  let context = Object.create(context1) || window;
  context.fn = this;
  let result;
  if (!arr) {
    result = context.fn()
  } else {
    let args = [];
    for (let i = 1, len = arguments.length; i < len; i++) {
      args.push('args[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn()
  return result
}
// new
function myNew(obj) {
  return function () {
    let newObj = {
      __proto__: obj.prototype
    }
    obj.call(newObj, ...arguments)
    return newObj
  }
}