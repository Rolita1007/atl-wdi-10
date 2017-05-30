var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', function(request, response){

  User.find({})
  .exec(function (error, userList) {
    if(err) {
      console.log("Error while retrieving users: " + error);
      return;
    }
    response.render('users/index', {//runs if there is no errors// things between the braces is an object
      userList: userList
    });
  });
});
//First assignment
// router.get('/', function (req, res){//this gets everything from the index collection
//   User.find({})
//   .exec(function(err, users) {/returns BJSON returns a promise
//       if (err) {
//         console.log(err);
//         return;
//       }

//       console.log(users);
//       res.send(users);
//   })
// })

// USER CREATE FORM (NEW) GET REQUEST TO GET THE FORM FROM THE USER
router.get('/new', function (request, response){
  response.render('users,new')
});

//USER CREATE ROUTE

router.post('/', function(request, response){
  var newUserFromForm = request.body;
 var user = new User({
  first_name: newUserFromForm.first_name,
  last_name: newUserFromForm.last_name,
  email; newUserFromForm.email,
 })
//********


 User.save//send it to the data base
})


// USER SHOW ROUTE
router.get('/:id', function(request, response) {

  var userId = request.params.id;

  User.findById(userId)//returns a promise
  .exec(fucntion (error, user) {

    if (error) {
      console.log("Error while retrieving user with ID of  + userId");
      console.log("Error message: " + error);
      return;
    }

    response.render('user/show', {. //path to the view
      user: user
    });
  });
});

//router.get('/:id', function(req, res){
//   User.findById(req.params.id)
//   .exec(function(err, user) {
//     if (err)  {
//       console.log(err);
//       return;
//     }

//     console.log(user);
//     res.send(user);
//   });
// });


//USER CREATE ROUTE
// router.post('/', function(req, res) {
//   var user = new User({
//     first_name: req.body.first_name,
//     email: req.body.email,
//     items: req.body.items
//   });
//   user.save(function(err, user) {
//     if(err) {
//       console.log(err);
//       return;
//     }

//     console.log(user);
//     res.send(user);
//   });
// });

// USER UPDATE ROUTE
router.put('/id:', function (request, response){

  var userId = request.params.id;
  var newUserInfo = request.body;
  User.findByIdAndUpdate(userId, newUserInfo, (new: ture));

  User.findById(userId)//returns a promise
    .exec(fucntion (error, user) {

    if (error) {
      console.log("Error while updating user with ID of " + userId);
      console.log("Error message: " + error);
      return;
    }
      response.redirect(userId);
  });
});

// router.patch('/:id', function(req, res) {
//   User.findByIdAndUpdate(req.params.id, {
//     first_name: req.body.first_name,
//     email: req.body.email
//   }, {new: true})
//   .exec(function(err, user) {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     console.log(user);
//     res.send(user);
//   });
// });

// USER DESTROY

router.get('delete/:id', function(request, response) {
  var userId = request.params.id:
  User.findByIdAndRemove(userId)
  .exec(function(error, user) {

      if(error) {
        console.log("Error while deleting User with ID of " + userId);
        return;
      }
      response.redirect('/ussers');

  });
});



// router.delete('/:id', function(req, res) {
//   User.findByIdAndRemove(req.params.id)
//   .exec(function(err, user) {
//     if(err) {
//       console.log(err);
//       return;
//     }

//     console.log('User deleted!');
//     res.send("User deleted");
//   });
// });

// ADD A NEW ITEM
// router.post('/:id/items', function(req, res) {
//   User.findById(req.params.id)
//   .exec(function(err, user) {
//     user.items.push(new Item({name: req.body.name}));//push is how you add an item to an array
//     user.save(function(err) {
//       if (err) {
//         console.log(err);
//         return;
//       }

//       res.send(user);
//     });
//   });
// });

// REMOVE AN ITEM
// router.delete('/:userId/items/:id', function(req, res) {
//   User.findByIdAndUpdate(req.params.userId, {
//     $pull: { //mongoose methond retracts an item in an array
//       items: {_id: req.params.id}//_id is what mongoose uses to get an id
//     }
//   })
//   .exec(function(err, item) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     res.send(item + " Item deleted");
//   });
// });

module.exports = router;
