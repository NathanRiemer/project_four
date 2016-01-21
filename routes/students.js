var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Student = require('../models/student.js');

router.get('/', function(req, res) {
  Student.find(function(err, students) {
    if (err) return next(err);
    res.json(students);
  });
});

module.exports = router;