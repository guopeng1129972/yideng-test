//express_demo.js 文件
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

// app.get('/', function (req, res) {
//     console.log(req.query)
//     res.send(req.query)
// res.send(JSON.parse(req.query) /*stringify(req.query)*/ );
// })
// app.get('/index/:id', function (req, res) {
//     res.send(req.params);
//     // http://localhost:8081/index/123
//     // {"id":"123"}
// })
app.get('/index/:id', function (req, res) {
    // res.send(req.params);
    // http://localhost:8081/index/123
    // {"id":"123"}
    console.log(req.params.id)
    res.json({
        params: "123" + req.params.id
    })
})
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send("hello world!");
})
app.get('/index', function (req, res) {
    res.sendFile(__dirname + "/views/" + "index.html");

})


app.post('/index', urlencodedParser, function (req, res, next) {
    console.log("ok");
    next()
    // res.sendFile(__dirname + "/views/" + "index.html");
}, function (req, res) {
    var wd = req.body.username;
    res.redirect("https://www.baidu.com/s?wd=" + wd);
})
var server = app.listen(8081, function () {

    // var host = server.address().address
    // var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", /*host, port*/ )

})