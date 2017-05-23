var express = require ('express');

var router = express.Router();

router.get('/topping/:type', function (req, res) {
	//res.send('pepperoni pizza! Good choice.');
	res.render('topping' , {
		topping:req.query.type
	});
});

router.get('/order/:amount/:size', function (req, res) {
	//res.send('Your order for 10 medium pizzas will be ready in 1 minute!');
	res.render('order', {
		amount: req.query.amount
		size: req.quert.size
	});
});


module.exports = router;
