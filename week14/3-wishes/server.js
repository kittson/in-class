var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var mysql			= require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Generic123',
	database: 'wish_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});

// root get route
app.get('/', function (req, res) {
	connection.query('SELECT * FROM wishes;', function (err, data) {
		if (err) throw err;

			// test it
			// console.log('The solution is: ', data);

			// test it
			// res.send(data);

		res.render('index', { wishes: data });
	});
});


// post route -> back to home
app.post('/create', function (req, res) {
		// test it
		// console.log('You sent, ' + req.body.event);

		// test it
		// res.send('You sent, ' + req.body.event)

	connection.query('INSERT INTO wishes (name) VALUES (?)', [req.body.name], function (err, result) {
		if (err) throw err;

		res.redirect('/');
	});
});


var port = 3990;
app.listen(port);
