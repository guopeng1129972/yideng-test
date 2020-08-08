/*jshint esversion: 6 */
// 手写代码，模拟原理
// debounce
function debounce(func, wait) {
  let timer;
  return function () {
    //clearTimeOut(timer) 在return 的函数里
    clearTimeout(timer);
    let context = this;
    let args = arguments;
    timer = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}
//throttle
function throttle(func, wait) {
  let context, args, start = 0;
  return function () {
    //let now 在return 的函数里
    let now = +new Date()
    context = this;
    args = arguments;
    if (now - start > wait) {
      func.apply(context, args)
      //重新获取当前时间
      start = +new Date()
    }
  }
}

function throttle1(func, wait) {
  let timer, context, args;
  return function () {
    context = this;
    args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        //先清空定时器
        timer = null;
        func.apply(context, args)
      }, wait);
    }

  }
}