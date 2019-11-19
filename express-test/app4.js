//express_demo.js 文件
var express = require('express');
var swig=require('swig');
var app = express();


app.set('view engine', 'html');
app.engine('html', swig.renderFile);



app.use(express.static('public'));

app.get('/*',function(req,res,next){
    res.render('index',{
        title:"测试首页",
        data:"hello express"
    })

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