var express = require('express');
var app = express();

app.get('/mention/', function(req, res) {
  res.send('you posted these params: ' + req.query.id);
});

app.listen(8080, function () {
  console.log("Trollrr is running on port 8080!");
});
