var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate

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

router.patch('/id:', function(req, res) {
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

//exports
module.exports = router;
