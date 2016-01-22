var express = require('express');
var router = express.Router({mergeParams: true});

var mongoose = require('mongoose');
var Student = require('../models/student');
var Class = require('../models/class');


var BehaviorRecord = require('../models/behavior_record');

router.get('/', function(req, res) {
  // console.log(req.params);
  if (req.params.class_id) {
    Class.findById(req.params.class_id)
      .populate('students')
      .exec(function(err, classRecord) {
        // console.log(classRecord);
        res.json(classRecord.students);
    });
  } else {
    Student.find(function(err, students) {
      if (err) return next(err);
      res.json(students);
    });
  }


});

router.post('/:id/behavior', function(req, res) {
  Student.findById(req.params.id, function(err, student) {
    var newBR = new BehaviorRecord({
      type: req.body.type,
      student: student._id,
      note_text: req.body.note_text,
      class_id: req.body.class_id
    });
    newBR.save(function(err) {
      // console.log(newBR);
      var today = new Date().toDateString();
      var todayDate = new Date(today + ' 00:00:00 GMT-0500 (EST)');
      // console.log(todayDate);
      student.getBRCount(function(err, count) {
        // console.log(count);
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
  });
});

module.exports = router;