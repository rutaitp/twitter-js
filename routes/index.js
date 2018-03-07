// dynamic content
const express = require('express');
const path = require('path');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} ); //find all the tweets with that name
  res.render( 'index', { tweets: list, showForm: true, username: name } ); //render in the index file
});

router.get('/tweets/:id', function(req, res) {
  let id = req.params.id;
  let tweet = tweetBank.find({id: id}); //find all tweets with that id
  res.render('index', {tweets: tweet, showForm: true});
})

//our form
router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;

  tweetBank.add(name, text); //add to tweets array
  res.redirect('/'); //go back to main page, reloads quickly
});

//export all the modules to be available in other files
module.exports = router;
