var express = require('express');
var app = express();
var Snoocore = require('snoocore');
// var trollResponse = require('./controllers/snoocore.js');

app.get('/', function(req, res) {
  res.send('you can not troll this troll');
});

app.get('/mention/', function(req, res) {
  // trollResponse();
  var resp = {'text': request.body}
  res.send(resp);
});

app.listen(8080, function () {
  console.log("Trollrr is running on port 8080!");
});
