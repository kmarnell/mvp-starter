var express = require('express');
var bodyParser = require('body-parser');
var Habit = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());


app.post('/habits', function (req, res) {
  
  var habit = req.body.habit
 
 	console.log(req.body) 
  console.log("inside server post!")
  
  //create schema instance 
  var saveHabit = new Habit({
  	habit: req.body.habit,
    isCompleted: req.body.isCompleted
  }) 
  //save to database
  saveHabit.save(function(err, data) {
  	if(err) {
  		console.log('err storing to database');
  	} else {
  		var dataArray = [];
  		console.log('saved to database!');
  		dataArray.push(data);
  	}
  })
  res.send(dataArray)
});


// app.get('/habits', function (req, res) {
//   habits.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

