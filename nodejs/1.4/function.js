// 匿名函数调用
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead("200", {
        "Content-Type": "text/plain"
    });
    res.write("hello,world!");
    res.end();

}).listen(8888);
// 先定义后调用
var https = require('http');

function myHttp(req, res) {
    res.writeHead("200", {
        "Content-Type": "text/plain"
    });
    res.write("hello,world!!!!");
    res.end();
}

http.createServer(myHttp).listen(8088);


/*
我的：定义了两个端口
*/
/*
结论：
*/