var express = require('express');
var app = express();
var reddit = require('controllers/snoocore');

app.get('/', function(req, res) {
  res.send('you can not troll this troll');
});

app.get('/mention/', function(req, res) {
  reddit();
  res.send('you posted these params: ' + req.query.id);

});

app.listen(8080, function () {
  console.log("Trollrr is running on port 8080!");
});
