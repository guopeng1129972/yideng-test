let state = {
  //数据
  count: 1
}
//使用数据
console.log(state.count)
//修改数据
state.count = 2

//vue依赖收集 观察者模式 发布订阅
let listeners = []

function subscript(listener) {
  listeners.push(listener)
}

function chageState(count) {
  state.count = count;
  for (let i = 0, len = listeners.length; i < len; i++) {
    listeners[i]()
  }
}

subscript(() => {
  console.log('触发了', state.count)
})

chageState(2)




// 1.定计划
//2.发送计划