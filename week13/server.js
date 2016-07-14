// Requiring dependencies
var http = require('http');
var fs = require('fs');
var url = require('url');

// Set our port to 80
var PORT = 8880;

var server = http.createServer(handleRequest);

function handleRequest(req, res){	
	var url_parts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  	switch (url_parts.pathname) {
	  	case '/':
	  		fs.readFile("index.html", function(err, data){
		  		res.writeHead(200, {'Content-Type': 'text/html'});
		  		res.end(data);
		  	});
	  	break;
	  	case '/favorite_food':
		  	fs.readFile("favfood.html", function(err, data){
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(data);
			});
		break;
		case '/favorite_movies':
			fs.readFile("favmov.html", function(err, data){
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(data);
			});
		break;
		default:
		display_404(url_parts.pathname, req, res);
	}//switch  	
 };//handlerequest

function display_404(url, req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write("<h1>404 Not Found </h1>");
  res.end("The page you were looking for: " + url + " can not be found ");
} 

// Starts our server.
server.listen(PORT, function(){
	console.log("Server is listening on PORT: " + PORT);
});


