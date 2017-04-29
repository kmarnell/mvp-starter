var express = require('express');
var bodyParser = require('body-parser');
var Habit = require('../database-mongo');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/../react-client/dist'));



app.post('/habits', function (req, res) {
 
  console.log("inside server post!")
  
  //create schema instance 
  var saveHabit = new Habit({
  	habit: req.body.value, 
    isCompleted: req.body.isCompleted
  }) 
  //save to database
  saveHabit.save(function(err, data) {
  	if(err) {
  		console.log('err storing to database');
  	} else {
  		console.log('saved to database!');
  		res.send(data);
  	}
  })
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

