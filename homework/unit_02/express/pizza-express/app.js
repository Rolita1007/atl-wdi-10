var express = require('express');
var app = express();
var hbs = require('hbs');

app.set("view engine, hbs");
app.set('views' , '/views');


app.get('/', function (req, res) {
	res.send('Welcome to Pizza Express!');

app.get('/topping/:type' ,function (req, res) {
	res.send('toppings');

app.get('/order/:amount/:size', function (req, res) {
	res.send('order');
})
})


})


















var port = 3000;

app.listen(port, function () {
	console.log('running on port ' + port);
});