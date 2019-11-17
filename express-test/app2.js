//express_demo.js 文件
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})


app.get('/index/b', function (req, res, next) {
    console.log('goto next')
    next()
}, function (req, res) {
    res.send("hello world! B");
})


var cb0 = function (req, res, next) {
    console.log("cb0")
    next()
}
var cb1 = function (req, res, next) {
    console.log("cb1")
    next()
}
var cb2 = function (req, res, next) {
    console.log("cb2")
    next()
}
var cb3 = function (req, res, next) {
    console.log("cb3")
    res.send("this is cb3");
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    res.send('Hello from D!')
})
//先处理逻辑，最后传输数据


app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })


var server = app.listen(8081, function () {

    // var host = server.address().address
    // var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", /*host, port*/ )

})