var mongoos = require('mongoose');
mongoose.connect('mongodb://localhose/senior-paws');
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
});

db.once('open', function() {
  console.log("Jesus the database works!!!");
});

db.close();

var Schema = mongoose.Schema;
