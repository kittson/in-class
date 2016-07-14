var twit = require('twitter');
var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;
var PORT3 = 8500;

function handleRequest(request, response){
	//console.log(request);
	response.end('groovy: ' +
	request.url);
}

function handleRequest2(request, response){
	console.log(request);
	response.end('not ok: ' +
	request.url);
}
//var server = http.createServer(handleRequest);
//var server2 = http.createServer(handleRequest2);
var server3 = http.createServer(handleRequest3);


//server.listen(PORT1, function(){
//	console.log('Server listening on: http://localhost:%s, Groovy ', PORT1);
//})


server3.listen(PORT3, function(){
	console.log('Server listening on: http://localhost:%s ', PORT3);
})

function handleRequest3(request, response) {
	var url_parts = url.parse(request.url);
	switch(url_parts.pathname) {
		case '/':
		break;
		case '/portfolio':
		break;
		case '/edit':
		break;
		default:
			display_404(url_parts.pathname, request, response);
	}
}

function display_404(url, req, res) {
	res.writeHead(404, {
		'Content-Type' : 'text/html'
	});
	res.write("<h1>404 Not Found </h1>");
	res.end("The page you were looking for: " + url + " can't be found ");
}