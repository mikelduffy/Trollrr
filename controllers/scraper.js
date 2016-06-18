var cheerio = require('cheerio');
var request = require('request');

var scrapeController = {
  trollData: function(req,res){

    // var url = 'http://www.alexkigerl.com/troll/'
    var url = 'http://www.alexkigerl.com/troll/trollbot.php'

    var metaData = {
      "TxtInput": 'asdf'
    }

    // make userInput DYNAMIC AND WE"RE DONE
    var userInput = "Hello bitches"
    var phpsessid = 'PHPSESSID=a8f9f41dd110eb82842a084188bf691e'

    request.post({
      headers: {'content-type' : 'application/x-www-form-urlencoded',
                'Cookie'       : phpsessid
      },

      url:     url,
      form:    { TxtInput: userInput + ' ' }
    }, function(error, response, body){

      var $ = cheerio.load(body);
      var array = ($("tr").text().split('  '));
      var parseInfo = array[array.length - 1]
      var result = parseInfo.slice(0,parseInfo.length - 3)

      var data = {
        output: result
      }

      res.json(data)

    });

  }
}

scrapeController.trollData();


module.exports = scrapeController;
