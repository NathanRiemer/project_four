var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Student = require('../models/student');
var Class = require('../models/class');

router.get('/', function(req, res) {
  Class.find(function(err, classes) {
    if (err) return next(err);
    res.json(classes);
  });
});

router.get('/:id', function(req, res) {
  Class.findById(req.params.id)
  .populate('students')
  .exec(function(err, students) {
    console.log(students);
    res.json(students);
  });
});

var students = require('./students');

router.use('/:id/students', students);

// router.get('/seed', function(req, res) {
//   Student.find(function(err, students) {
//     if (err) return next(err);
//     console.log(students[0]._id);
//     var ids = students.map(function(student) {
//       return student._id;
//     });
//     var newClass = new Class({
//       grade: '3',
//       name: 'B',
//       subject: 'homeroom',
//       students: ids
//     });
//     newClass.save(function(err) {
//       console.log(newClass);
//       res.json(newClass);
//     })
//   });
// });

module.exports = router;