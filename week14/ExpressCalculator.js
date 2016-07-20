var express = require("express");
//var bodyParser = require('body-parser')
var app = express();

//app.use(bodyParser.urlencoded({
   // extended: true
//}));
app.listen(3002);

app.get('/:username', function(req, res) {
    res.send('Profile of ' + req.params.username);
});

app.get('/:bigwup/:firstNumber/:secondNumber', function(req, res) {

    var bigwup = req.params.bigwup;
    var firstNumber = parseInt(req.params.firstNumber);
    var secondNumber = parseInt(req.params.secondNumber);
    var result;

    if (bigwup == "add") {
        result = firstNumber + secondNumber;
    } else if (bigwup == "subtract") {
        result = firstNumber - secondNumber;
    } else if (bigwup == "multiply") {
        result = firstNumber * secondNumber;
    } else if (bigwup == "divide") {
        result = firstNumber / secondNumber;
    }
    res.json(result);
    //res.send(result.toString());
});