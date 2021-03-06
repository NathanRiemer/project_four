var express = require('express');
var router = express.Router({mergeParams: true});

var mongoose = require('mongoose');
var Student = require('../models/student');
var Class = require('../models/class');
var BehaviorRecord = require('../models/behavior_record');

router.get('/', function(req, res) {
  if (req.params.class_id) {
    Class.findById(req.params.class_id)
      .populate('students')
      .exec(function(err, classRecord) {
        res.json(classRecord);
    });
  } else {
    Student.find(function(err, students) {
      if (err) return next(err);
      res.json(students);
    });
  }
});

router.get('/:id/', function(req, res) {
  Student.findById(req.params.id, function(err, student) {
    res.json(student);
  });
});

router.get('/:id/:type', function(req, res) {
  Student.findById(req.params.id, function(err, student) {
    var todayDate = new Date(new Date().toDateString());
    if (req.params.type !== 'note') {
      student.getBRCount(function(err, count) {
        res.json({count: count})
      }, {type: req.params.type, createdAt: { $gte: todayDate }});
    } else {
      student.getBRCount(function(err, count) {
        res.json({count: count})}, {note_text: {$ne: ''}, createdAt: { $gte: todayDate }});
      }
  });  
});

router.post('/:id/behavior', function(req, res) {
  Student.findById(req.params.id, function(err, student) {
    var newBR = new BehaviorRecord({
      type: req.body.type,
      student: student._id,
      note_text: req.body.note_text,
      class_id: req.body.class_id,
      teacher: req.session.teacherId
    });
    newBR.save(function(err) {
      console.log(newBR.createdAt);
      res.json({status: 'okay'});
    });
  });
});

module.exports = router;