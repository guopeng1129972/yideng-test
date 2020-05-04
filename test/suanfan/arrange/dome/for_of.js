/*
使用 for…of 循环的好处有哪些？
是一个更新元素的简单方式
可以用来完成加法乘法等计算操作
可以和条件语句配合使用，比如 if，while，switch 等
写出简洁优雅的代码
*/
// es 6 上
const tool = ['a', 'b', 'c'];
for (const item of tool) {
  console.log(item)
}

/*
使用 includes() 的好处有哪些？
是一个简易的搜索功能
是一个快速判断某字段是否存在的简洁方式
可以使用条件语句来进行修改、筛选等操作
写出可读性更强的代码


举个例子：假设你想不起你车库里存放着哪些车了，
你需要一个系统来帮你判断你想要的车存不存在，
那么 includes() 可以帮到你！
*/
const carBox = ['a', 'b', 'c']
const findCar = carBox.includes("a");
console.log(findCar);//true