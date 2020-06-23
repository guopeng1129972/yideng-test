function foo() {
  console.log(length)
}
function bar() {
  var length = '123'
  foo()
}
bar()

// 会输出什么？
/*
1.首先运行bar 执行foo寻找length没有定义
2.很多人觉得在bar中定义了length，foo应该寻找到了length
3.其实函数的作用域是在执行的时候创建的，当函数执行完成之后，
作用域就被销毁了，所以foo向上找，
4.全局window.length是有的，表示iframe的数量 所以结果是 0 */