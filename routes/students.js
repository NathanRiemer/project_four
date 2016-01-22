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
      var today = new Date().toDateString();
      var todayDate = new Date(today + ' 00:00:00 GMT-0500 (EST)');
      console.log(todayDate);
      student.getBRCount(function(err, count) {
        console.log(count);
        if (req.body.type === 'positive') {
          student.num_positives = count;
        } else if (req.body.type === 'negative') {
          student.num_negatives = count;
        }

        student.save(function(err) {
          // Todo: Add error handling
          res.json({status: 'okay', student: student});
        });
      }, {type: req.body.type, createdAt: { $gte: todayDate }});
    });

    // BehaviorRecord.find(function(err, brs) {
    //   console.log(brs);
    // });
    // BehaviorRecord.count({type: req.body.type, student: req.params.id}, function(err, count) {
    //   console.log(count);
    // } );
    // console.log(student.br.all);
    // if (req.body.type === 'positive') {
    //   student.num_positives++;
    // } else if (req.body.type === 'negative') {
    //   student.num_negatives++;
    // }
    // student.save(function(err) {
    //   // Todo: Add error handling
    //   res.json({status: 'okay', student: student});
    // });
  });
});

module.exports = router;