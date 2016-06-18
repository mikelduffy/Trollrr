var express = require('express');
var app = express();

app.get('*', function(req, res) {
  res.send('you posted these params: ' + req.query.id);
});

app.listen(8080, function () {
  console.log("Trollrr is running on port 8080!");
});
