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


app.get('/habits', function(req, res) {
	Habit.find({}).exec(function(err, data) {
		if(err) {
			console.log(err);
		} else {
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.write(JSON.stringify(data));
			res.end();
		}
	})
})

// app.get('/habits/test', function (req, res) {
//   Habit.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//       res.end();
//     }
//   });
// });


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

