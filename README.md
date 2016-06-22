[![Gitter](https://badges.gitter.im/mikelduffy/BallmerPeakathon.svg)](https://gitter.im/mikelduffy/BallmerPeakathon?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# Trollrr: A Troll Trolling Chatbot
Created by Vipul Patil, Andy Khong, and Mikel Duffy for the 2016 BallmerPeakathon.

## How to Use
1. Some troll posts trollish comments in a Reddit thread.
2. A kind anti-troll webizen responds to the troll by calling /u/trollrr to the rescue.
3. Trollrr out-trolls the troll.
4. Peace on reddit resumes for another fraction of a second.

## How it Works
* AWS Lambda function watches inbox for new named mentions every minute.
* When new mention arrives, it grabs the parent comment and submits it to an online chatbot, scrapes the response, then submits it in a comment responding to the troll.

## Todo
* Expand scope of taking action on the first unread message, to all unread messages.
* Fix logic to respond to parent comment.
* Minimize reddit API calls.
* Store history in dynamo DB, and check to avoid double commenting.
