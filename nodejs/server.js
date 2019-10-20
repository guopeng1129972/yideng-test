var http = require('http');

http.createServer(
	function (req, res) {
		//定义返回头
		res.writeHead(200, {
			'Content-Type': 'text/plan'
		});
		//发送相应的数据
		res.end('hello world!');

	}
).listen('8000');
console.log('server is ok!');