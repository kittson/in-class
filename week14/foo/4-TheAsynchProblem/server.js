var orm = require('./config/orm.js');

var logData = function (data) {
	console.log(data); // data is defined!
};

orm.selectWhere('parties', 'party-type', 'grown-up', logData);
