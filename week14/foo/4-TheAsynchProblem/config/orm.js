var connection = require('../config/connection.js');

var orm = {
	selectWhere: function (tableInput, colToSearch, valOfCol, callback) {
		var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';

		connection.query(queryString, [valOfCol], function (err, result) {
			callback(result);
		});
	}
};

module.exports = orm;
