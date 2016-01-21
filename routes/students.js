var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Student = require('../models/student');

router.get('/', function(req, res) {
  Student.find(function(err, students) {
    if (err) return next(err);
    res.json(students);
  });
});

router.post('/:id/behavior', function(req, res) {
  Student.findById(req.params.id, function(err, student) {
    if (req.body.type === 'positive') {
      student.num_positives++;
    } else if (req.body.type === 'negative') {
      student.num_negatives++;
    }
    student.save(function(err) {
      // Todo: Add error handling
      res.json({status: 'okay', student: student});
    });
  });
});

module.exports = router;