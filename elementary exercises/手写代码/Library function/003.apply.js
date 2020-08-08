/*jshint esversion: 6 */
// 手写代码，模拟原理
// myaplly
Function.prototype.myapply = function (context1, arr) {
  let context = Object(context1) || window;
  let fn = Symbol('fn');
  context[fn] = this;
  let result;
  if (!arr) {
    result = context[fn]();
  } else {
    let args = [];
    for (let i in arguments) {
      args.push('arguments[' + i + ']');
    }
    result = eval('context[fn](' + args + ')');
  }
  delete context.fn;
  return result;
};