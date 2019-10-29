//引入event模块并创建eventsEmitter对象
var events = require('events');
var eventEmitter = new events.EventEmitter();
// 绑定事件处理的函数
var connctHandler = function connected() {
    console.log("事件被调用了")
}

//完成事件绑定
eventEmitter.on("connection", connctHandler());


// 触发事件
eventEmitter.emit("connection");

console.log("its ok");