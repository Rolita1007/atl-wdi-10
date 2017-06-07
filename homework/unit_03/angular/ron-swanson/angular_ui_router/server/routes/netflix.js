var express = require('express');
var router = express.Router();
var Netflix = require('../../models/netflix.js');

//your routes here
//GET
router.get('/', function(request, response) {
  Netflix.find(function(error, netflixs) {
    if(error) response.json({message: 'Could not find Netflix'});
      console.log(netflixs)
    response.json({netflixs: netflixs});
  })
});

//POST
router.post('/', function(request, response) {
  console.log('in POST');
  console.log('body', request.body);

  var netflix = new Netflix(request.body);

  netflix.save(function(error) {
    if(error) response.json({message: 'Could not create a netflix because' + error});

    response.json({netflix: netflix});
  });
});

module.exports = router;
