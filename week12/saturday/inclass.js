var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : 'Generic123',
  database : 'hearthrobDB'
});

connection.connect();
 
//connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
connection.query('INSERT INTO songs SET ?', 
	{artist:'george burns', title: "george and gracie"},function(err, res) {
	if (err) throw err;
  		console.log(res);
});

connection.query('UPDATE songs SET genre = "comedy" WHERE artist = "george burns"',function(err, res) {});

connection.query('SELECT * FROM songs', function(err, res) {
  if (err) throw err;
  console.log(res);
});
 
connection.query('SELECT * FROM songs where artist like "p%"', function(err, res) {
  if (err) throw err;
  console.log(res);
});

connection.query('SELECT * FROM songs where genre = "jazz"', function(err, res) {
  if (err) throw err;
  console.log(res);
});
connection.end();