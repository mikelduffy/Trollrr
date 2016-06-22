'use strict';
var Snoocore = require('snoocore');
var credentials = require('./controllers/credentials');
var scraper = require('./controllers/scraper');
var reddit;
var messageId;
var parentId;

exports.myHandler = function(event, context, callback) {
// Get all the secrets.
  Promise.all([
    credentials.getKey(),
    credentials.getSecret(),
    credentials.getPassword()
  ]).then(([key, secret, password]) => {
    credentials.key = key;
    credentials.secret = secret;
    credentials.password = password;
  }).then(() => {
  // Start Reddit Oauth Session
    reddit = new Snoocore({
      userAgent: '/u/trollrr troll all the trolls',
      oauth: {
        type: 'script',
        key: credentials.key,
        secret: credentials.secret,
        username: 'trollrr',
        password: credentials.password,
        scope: [ 'read', 'vote', 'privatemessages', 'submit' ]
      }
    })
  // Get unread messages, and process the first.
    return reddit('/message/unread').listing()
  }).then((listing) => {
  // Only respond to comments, not the root thread.
      if (/^(t1_)/.test(listing.children[0].data.parent_id)) {
        messageId = listing.children[0].data.id;
        parentId = listing.children[0].data.parent_id;
        var trollCommentContext = listing.children[0].data.context.replace(/([\/A-Za-z0-9_]*)((.|\n)*)/g, "$1");
        return reddit(trollCommentContext).get({context: 1})
      }
  }).then((listing) => {
  // Get parent comment.
    var trollComment = listing[1].data.children[0].data.body.replace(/^\s+|\s+$/g, '');
  // Get response comment.
    return scraper.returnMessage(trollComment);
  }).then((comment) => {
  // Post comment.
    return reddit('/api/comment').post({thing_id: parentId, text: comment});
  // }).then(() => {
  // // Mark message as read.
  //   return reddit('/api/read_message').post({id: messageId})
  }).then(() => {
    console.log('Success!');
  }).catch((err) => {console.log(err);})
}
