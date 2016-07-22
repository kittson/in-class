var express = require('express');
var app = express;
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var name = [];

app.get('/', function(req, res){
	//res.send('User form');
	res.sendFile(path.join(__dirname + 'index.html'));
});

app.post('/create', function(req, res){
	names.push(
		{
			first_name: req.body.first_name,
			last_name: req.body.last_name
		}
	)
});

app.listen(3400, function() {
	console.log("listening on port 3400 ");
});