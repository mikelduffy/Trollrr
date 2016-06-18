var cheerio = require('cheerio');
var request = require('request');

var scrapeController = {
  trollData: function(req,res){

    // var url = 'http://www.alexkigerl.com/troll/'
    var url = 'http://www.alexkigerl.com/troll/trollbot.php'

    var metaData = {
      "TxtInput": 'asdf'
    }

    var phpsessid = 'PHPSESSID=a8f9f41dd110eb82842a084188bf691e'

    request.post({
      headers: {'content-type' : 'application/x-www-form-urlencoded',
                'Cookie'       : phpsessid
      },

      url:     url,
      form:    { TxtInput: "hello world" }
    }, function(error, response, body){
      console.log(response.body);
    });


  }
}

module.exports = scrapeController;
