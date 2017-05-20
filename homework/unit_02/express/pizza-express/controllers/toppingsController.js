var express = require ('express');

var router = express.Router();

router.get('/topping/:type', function (req, res) {
	res.send('pepperoni pizza! Good choice.');
});

router.get('/order/:amount/:size', function (req, res) {
	res.send('Your order for 10 medim pizzas will be ready in 1 minute!');
});


module.exports = router;