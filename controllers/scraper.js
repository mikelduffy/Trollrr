var cheerio = require('cheerio');
var request = require('request');

var returnMessage = function(trollMessage){
  return new Promise(function(resolve, reject) {
    request.post({
      headers: {'content-type' : 'application/x-www-form-urlencoded',
                      'Cookie' : 'PHPSESSID=a8f9f41dd110eb82842a084188bf691e'},
      url: 'http://www.alexkigerl.com/troll/trollbot.php',
      form: { TxtInput: trollMessage + ' ' }
    }, function(error, response, body){
      var $ = cheerio.load(body);
      var array = ($("font").text().split('\n'));
      var comment = array[array.length - 2].replace(/\s{2,3}/g, " ");
      resolve(comment);
    });
  });
}

module.exports = {returnMessage};
