var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

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
    if (err) res.status(500).json({message: 'Sorry! Something broke on the server!'});
    else res.status(201).json(result);
  });
});

router.get('/users', function (req, res) {
  UserModel.find(req.query,function (err, result) {
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

module.exports = router;
