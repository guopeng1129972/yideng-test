var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open('data.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
});

console.log("****************************************************************************");

fs.stat('data.txt', function (err, stats) {
    console.log(stats.isFile()); //true
})
console.log("****************************************************************************");

var fs = require("fs");

console.log("准备打开文件！");
fs.stat('data.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("读取文件信息成功！");
   
   // 检测文件类型
   console.log("是否为文件(isFile) ? " + stats.isFile());
   console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
});

console.log("****************************************************************************");

// 这是异步读取文件的