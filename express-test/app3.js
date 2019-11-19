//express_demo.js 文件
var express = require('express');
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var app = express();
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

app.get('/*',function(req,res,next){
    res.en('hello world!');

})

app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

function logErrors(err, req, res, next) {
    console.error('记录日志：',err.stack)
    next(err)
}


function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({
            error: 'Something failed!'
        })
    } else {
        next(err)
    }
}

function errorHandler(err, req, res, next) {
    res.status(500)
    // res.render('error', {        error: err})
    res.end('error!');
}

var server = app.listen(8081, function () {

    // var host = server.address().address
    // var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", /*host, port*/ )

})