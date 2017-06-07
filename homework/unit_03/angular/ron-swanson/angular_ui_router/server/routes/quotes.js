var express = require('express');
var router = express.Router();
var Quote = require('../../models/quote.js');

//your routes here

//GET
router.get('/', function(request, response) {
  Quote.find(function(error, quotes) {
    if(error) response.json({message: 'Could not find quote'});
      console.log(quotes)
    response.json({quotes: quotes});
  });
});

//POST
router.post('/', function(request, response) {
  console.log('in POST');
  console.log('body', request.body);

  var quote = new Quote(request.body);

  quote.save(function(error) {
    if(error) response.json({message: 'Could not create a quote because' + error});

    response.json({quote: quote});
  });
});



module.exports = router;
