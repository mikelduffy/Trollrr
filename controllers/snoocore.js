var Snoocore = require('snoocore');


// Our new instance associated with a single account.
// It takes in various configuration options.
var trollResponse = new Snoocore({
  userAgent: '/u/trollrr troll all the trolls', // unique string identifying the app
  oauth: {
    type: 'script',
    key: process.env.REDDIT_KEY, // OAuth client key (provided at reddit app)
    secret: process.env.REDDIT_SECRET, // OAuth secret (provided at reddit app)
    username: 'trollrr', // Reddit username used to make the reddit app
    password: process.env.REDDIT_PASSWORD, // Reddit password for the username
    // The OAuth scopes that we need to make the calls that we
    // want. The reddit documentation will specify which scope
    // is needed for evey call
    scope: [ 'identity', 'read', 'vote' ]
  }
});

reddit('/api/v1/me').get().then(function(result) {
  console.log(result);
});

module.exports = trollResponse;
