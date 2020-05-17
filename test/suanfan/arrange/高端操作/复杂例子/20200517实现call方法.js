//https://github.com/mqyqingfeng/Blog/issues/11
/**
 * 实现call，需要做到这几点
 * 1.改变this，指向call的参数的函数（得指向谁call的嘛，肯定不能指向干活的）
 * 2.call的函数要执行了（不然就是没call嘛，指向谁让你干的）
 * 2.解决循环输入的问题
 * @param {对象} context 
 */
function myCall(context) {
  var context = context | window;
  context.fn = this;
  var arg = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');

  }
  var result = eval('context.fn(' + arg + ')')
  delete context.fn()
  return result
}

function myApplay(context, arr) {
  var context = Object(context) | window;
  context.fn = this;
  var result;
  if (!arr) {
    result = context.fn()
  } else {
    var args = [];
    for (let i = 0; i < arguments.length; i++) {
      args.push('arguments[' + i + ']');
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn
  return result
}