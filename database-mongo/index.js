var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var habitSchema = mongoose.Schema({
  habit: String,
  isCompleted: Boolean  
});

var Habit = mongoose.model('Habit', habitSchema);

var selectAll = function(callback) {
  Habit.find({}, function(err, habits) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, habits);
    }
  });
};


module.exports = Habit;
module.exports.selectAll = selectAll;