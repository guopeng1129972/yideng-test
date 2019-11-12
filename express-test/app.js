//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log(req.query)
    res.send(req.query)
    // res.send(JSON.parse(req.query) /*stringify(req.query)*/ );
})
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
        params: "123"+req.params.id
    })
})
var server = app.listen(8081, function () {

    // var host = server.address().address
    // var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", /*host, port*/ )

})