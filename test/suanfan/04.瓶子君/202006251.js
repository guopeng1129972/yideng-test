// https://github.com/sisterAn/JavaScript-Algorithms/issues/69
/* 字节：输出以下代码运行结果，为什么？
如果希望每隔 1s 输出一个结果，
应该如何改造？注意不可改动 square 方法 */
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }
      , 1000)
  }
  )
}
function test0() {
  list.forEach(async x => {
    const res = await square(x)
    console.log(res)
  }
  )
}
// test()

// test1()
async function test1() {
  for (let i = 0; i < list.length; i++) {
    const res = await square(list[i])
    console.log(res)
  }
}
// test1()
async function test2() {
  for (let i in list) {
    const res = await square(list[i])
    console.log(res)
  }
}
// test2()
async function test3() {
  for (let i of list) {
    const res = await square(i)
    console.log(res)
  }
}
// test3()
function test4() {
  let promise = Promise.resolve()
  list.forEach(x => {
    promise = promise.then(() => square(x)).then(console.log)
  })
}
test4()
