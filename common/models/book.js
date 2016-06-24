module.exports = function(book) {
	book.status = function(cb) {
		var currentDate = new Date();
		var currentHour = currentDate.getHours();
		var OPEN_HOUR = 6;
		var CLOSE_HOUR = 20;
		console.log('Current time is ' + currentHour);
		var response;
		if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
			response = 'Open for book signing';
		}
		else {
			response = 'close for booksigning';
		}
		cb(null,response);
	};


	book.remoteMethod(
		'status',
		{
			http: {path:'/status', verb:'get'},
			returns:{arg:'status',type: 'string'}
		}
		);

		book.getName = function(bookId, cb) {
			book.findById(bookId, function (err, instance) {
				response = "Name of the book is: " + instance.name;
				cb(null, response);
				console.log(response);
			});

		};
		book.remoteMethod(
			'getName',
			{
				http: {path:'/getName', verb:'get'},
				accepts: {arg: 'id', type: 'number', http: {source: 'query'}},
				returns:{arg: 'name', type: 'string'}

			}
	);

};