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
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:id', function(req, res) {
  let id = req.params.id;
  let tweet = tweetBank.find({id: id});
  res.render('index', {tweets: tweet});
})

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;

  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
