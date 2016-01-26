var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Student = require('../models/student');
var Class = require('../models/class');
var Teacher = require('../models/teacher');


router.get('/', function(req, res) {
  Teacher.findById(req.session.teacherId)
    .populate('classes')
    .exec(function(err, teacher) {
      res.json(teacher);
    });
});

router.get('/:id', function(req, res) {
  Class.findById(req.params.id)
  .populate('students')
  .exec(function(err, students) {
    res.json(students);
  });
});

var students = require('./students');
router.use('/:class_id/students', students);

var feed = require('./feed');
router.use('/:id/feed', feed);

module.exports = router;