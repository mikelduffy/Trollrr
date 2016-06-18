var express = require('express');
var app = express();
var Snoocore = require('snoocore');
// var trollResponse = require('./controllers/snoocore.js');

app.get('/', function(req, res) {
  res.send('you can not troll this troll');
});

app.post('/mention/', function(req, res) {
  // trollResponse();
  // var resp = {'text': req.body}
  console.log(req);
});

// app.get('/mention/', function(req, res) {
//   // trollResponse();
//   var resp = {'text': req.body}
//   console.log(req.body);
//   res.send(resp);
// });

app.listen(8080, function () {
  console.log("Trollrr is running on port 8080!");
});
