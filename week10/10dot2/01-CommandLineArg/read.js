fs = require('fs')
fs.readFile('./best.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //newdata = data.split(',');
  //console.log(newdata);
  //console.log(data);
  var formattedData = data.split(",").join("\n");
  console.log(formattedData);
});