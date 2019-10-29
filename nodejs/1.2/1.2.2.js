//非 阻塞代码

var fs = require('fs');
var data = fs.readFile('data.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());

})

console.log("is ok");
/*
我的：非阻塞代码，跳过之后执行后面的代码
*/
/*
结论：非阻塞代码，跳过之后执行后面的代码
*/


// is ok
// 123guopeng郭鹏