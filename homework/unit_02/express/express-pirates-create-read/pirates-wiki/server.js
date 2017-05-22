
var logger = require('morgan');
var express = require('express');
var hbs = require('hbs');
var app = require('express');




var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);









var port = 3000;

//app.listen(port,function () {
	console.log('running on port ' + port);
});
