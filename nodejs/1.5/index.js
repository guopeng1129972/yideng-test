var server = require("./server");
var router = require("./router");
 
// server.start();
server.start(router.route);