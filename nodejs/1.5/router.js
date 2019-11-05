function route(pathname, response) {
    console.log("About to route a request for"+pathname);
    if (pathname == "/") {
        // console.log("Request for " + pathname + " received.");
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write("Hello World");
        response.end();
    } else if (pathname == "/index") {
        response.end("404");
    } else {
        response.end(pathname)
    }

}

exports.route = route;