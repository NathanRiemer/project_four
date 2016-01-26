var express = require('express');
var router = express.Router({mergeParams: true});

var mongoose = require('mongoose');
var Student = require('../models/student');
var Class = require('../models/class');
var BehaviorRecord = require('../models/behavior_record');
var Teacher = require('../models/teacher');


router.get('/', function(req, res) {
  var todayDate = new Date(new Date().toDateString());
  BehaviorRecord.find({class_id: req.params.id, createdAt: { $gte: todayDate }})
    .populate('student', 'first_name last_name')
    .populate('teacher', 'first_name last_name')
    .exec(function(err, records) {
      res.json(records);
    });
});

module.exports = router;