// 阻塞代码

// 同步调用
var fs = require('fs');
var data = fs.readFileSync('data.txt');
console.log(data.toString());

/*
我的：一步一步执行 
输出：
123guopeng郭鹏
*/
/*
结论：fs.readFileSync('data.txt');
*/



