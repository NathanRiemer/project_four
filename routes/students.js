var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Student = require('../models/student');

var BehaviorRecord = require('../models/behavior_record');

router.get('/', function(req, res) {
  Student.find(function(err, students) {
    if (err) return next(err);
    res.json(students);
  });
});

router.post('/:id/behavior', function(req, res) {
  Student.findById(req.params.id, function(err, student) {
    var newBR = new BehaviorRecord({
      type: req.body.type,
      student: student._id,
      note_text: 'hey',
      class_id: '56a12f5c500042bfba7c0c52'
    });
    newBR.save(function(err) {
      // if (err) return handleError(err);
      // console.log(err);
      // console.log(newBR);
    });
    // BehaviorRecord.find(function(err, brs) {
    //   console.log(brs);
    // });
    // BehaviorRecord.count({type: req.body.type, student: req.params.id}, function(err, count) {
    //   console.log(count);
    // } );
    // console.log(student.br.all);
    student.getBRCount(function(err, count) {
      console.log(count);
    }, {type: req.body.type});
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