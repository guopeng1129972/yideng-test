/*jshint esversion: 6 */
// 手写Promise最简20行版本，实现异步链式调用。（重构版）

function Promise(fn) {
  // 1.定义一个处理的数组 或者说队列
  this.cbs = [];
  // 2.定义resolve方法
  const resolve = (value) => {
    // 使用setTimeout 实现
    setTimeout(() => {
      this.data = value;
      // 遍历执行传入的回调函数队列
      this.cbs.forEach((cb) => cb(value))
    })
  }
  // 返回绑定到fn
  fn(resolve.bind(this))
}
// 在then上实现执行的方法
Promise.prototype.then = function (OnResolved) {
  // 定义 返回一个promise2
  return new Promise((resolve) => {
    // 这个promise上
    this.cbs.push(() => {
      const res = OnResolved(this.data);
      if (res instanceof Promise) {
        res.then(resolve)
      } else {
        resolve(res)
      }
    })
  })
}

// demo
new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 500)
})
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      setTimeout(() => { resolve(2); }, 500)
    })
  })
  .then(console.log());