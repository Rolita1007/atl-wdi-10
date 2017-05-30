var express = require('express');
var morgan = require('morgan');
var app = express();

var bodyParser = require('body-parser');

var port = 3000;



app.listen(port,function () {
	console.log('running on port ' + port);
});
