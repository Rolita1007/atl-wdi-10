//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================
router.post('/', function(req, res){
  var pirateUser = new Pirate({
    name: req.body.name,
    birthplace: req.body.birthplace,
    death_year: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname
  });

  user.save(function(err, pirateUser) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(pirateUser);
    res.render('pirates/show', {
      pirate: pirate
    });
  });
});
//==============================
// UPDATE
//==============================
 router.post('/id:', function(req, res) {
  User.findByIdAndUpdate(req.params.id,
    name: req.body.name,
    birthplace: req.body.birthplace,
    death_year: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname
  ), {new: true})
    .exec(function(err, user) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(user);
      res.render('pirates/show', {
        pirates: pirates
      });
    });
});

//==============================
// DESTROY
//==============================
router.delete('/id:', function(req, res) {
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if(err) {
      console.log(err);
      return;
    }
    console.log('User deleted');
    resend("User deleted");
  });
});


//==============================
// EXPORTS
//==============================

module.exports = router;
