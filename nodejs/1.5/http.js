var http = require("http");
var url = require("url");
var util = require('util');


function myHttp(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end(util.inspect(url.parse(req.url, true)));
}

http.createServer(myHttp).listen(8088);
console.log("server is ok!");