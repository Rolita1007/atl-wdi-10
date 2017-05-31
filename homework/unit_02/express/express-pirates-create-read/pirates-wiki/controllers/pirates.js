var express = require("express");
var router = express.Router();
var seededPirates = require('../models/pirates.js');
//all routes for /pirate
router.get('/', function(req, res){
  // res.send('hey friend');
  res.render('pirates/index', {
    seededPirates: seededPirates
  });
})

// router.post('/', function(req, res){
//   var pirate = new Pirate({
//     name: req.body.name,
//     birthplace: req.body.birthplace,
//     death_year: req.body.death_year,
//     base: req.body.base,
//     nickname: req.body.nickname
//   });
//   pirate.save(function(err, pirate) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(pirate);
//     res.render('pirates/show', {
//       pirate: pirate
//     });
//   });
// });

// router.patch('/id:', function(req, res) {
//   Pirate.findByIdAndUpdate(req.params.id, {
//     name: req.body.name,
//     birthplace: req.body.birthplace,
//     death_year: req.body.death_year,
//     base: req.body.base,
//     nickname: req.body.nickname
//   }, {new: true})
//     .exec(function(err, pirate) {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(pirate);
//       res.render('pirates/show', {
//         pirate: pirate
//       });
//     });
// });

//exports
module.exports = router;
