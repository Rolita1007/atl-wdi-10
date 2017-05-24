
var express = require('express');
var app     = express();
var port    = 3000;
var hbs = require('hbs');

var toppingsController = require('./controllers/toppingsController.js');

app.use('/toppings', toppingsController.js);

app.set("view engine", "hbs");
app.set('views', './views');

 app.get('/', function (req, res) {
	res.send('Welcome to Pizza Express');
 });





// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")


});


