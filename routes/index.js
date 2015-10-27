var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var path = require('path');
//var http = require('http');
//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;
//var passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/test', function (err) {
  if (err) console.log('Could not connect to mongodb');
  else console.log('Successfully connected to mongodb');
});

var UserModel = mongoose.model('User', {
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  birthday: Date,
  bio: String,
  interests: String,
  status: String,
  lastOnline: String
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
  (new UserModel(req.body)).save(function (err, result) {
    console.log('Updating database');
    if (err) res.status(500).json({message: 'Sorry! Something broke on the server!'});
    else res.status(201).json(result);
  });

  //User.register(new User({ username : req.body.username }), req.body.password, function(err, res) {
  //  if (err) {
  //    console.log('at http post on node. user: ', user);
  //    return res.render('signup', { user : res });
  //  }
  //
  //  passport.authenticate('local')(req, res, function () {
  //    console.log('Authenticating user..');
  //    res.redirect('/');
  //  });
  //});
});

router.get('/users', function (req, res) {
  UserModel.find(req.query,function (err, result) {
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

module.exports = router;
