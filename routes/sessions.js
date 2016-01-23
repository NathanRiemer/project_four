var express = require('express');
var router = express.Router();

var Teacher = require('../models/teacher');

var session = require('express-session');
var bcrypt = require('bcrypt');
// var MongoStore = require('connect-mongo')(session);

var authenticateUser = function(username, password, callback) {
  Teacher.findOne({username: username}, function(err, data) {
    if (err) {throw err;}
    bcrypt.compare(password, data.password_digest, function(err, passwordsMatch) {
      if (passwordsMatch) {
        callback(data);
      } else {
        callback(false);
      }
    })
  });
};


router.post('/', function(req, res) {
  authenticateUser(req.body.username, req.body.password, function(data) {
    if (data) {
      req.session.username = data.username;
      req.session.teacherId = data._id;
      res.json({currentUser: data, success: true});
    } else {
      res.json({success: false});
    }

  })
});

module.exports = router;