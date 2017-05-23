// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;

var hbs = require('hbs');

//var toppings = require ('/controllers/toppingsController.js');



app.set("view engine", "hbs");
app.set('views', './views');

 app.get('/', function (req, res) {
	res.send('Welcome to Pizza Express');
 });

// app.use('/controllers', toppingsController.js);



// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")


});


