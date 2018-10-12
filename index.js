var express = require('express');

var app = express();
var port = 5000;

app.get('/', function (req, res) {
	console.log("Get request");
	res.send('10/13일 Hello World!');
})

app.listen(port, function() {
	console.log('Raspberry pi server is listening on port' + port);
})
