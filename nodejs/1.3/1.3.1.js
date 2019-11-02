// //引入event模块并创建eventsEmitter对象
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// // 绑定事件处理的函数
// var connctHandler = function connected() {
//     console.log("事件被调用了")
// }

// //完成事件绑定
// eventEmitter.on("connection", connctHandler());


// // 触发事件
// eventEmitter.emit("connection");



const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// 第一个监听器。
myEmitter.on('event', function firstListener() {
  console.log('第一个监听器');
});
// 第二个监听器。
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`第二个监听器中的事件有参数 ${arg1}、${arg2}`);
});
// 第三个监听器
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`第三个监听器中的事件有参数 ${parameters}`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

/*
我的：这个例子不行，官网的例子可以的，可能跟版本有关系
*/
/*
结论：
引包，实例化
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

绑定
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`第二个监听器中的事件有参数 ${arg1}、${arg2}`);
});
触发
myEmitter.emit('event', 1, 2, 3, 4, 5);


*/