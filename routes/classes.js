var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Student = require('../models/student');
var Class = require('../models/class');
var Teacher = require('../models/teacher');


router.get('/', function(req, res) {
  // console.log(req.session);
  Teacher.findById(req.session.teacherId)
    .populate('classes')
    .exec(function(err, teacher) {
      res.json(teacher);
    });
  // Class.find(function(err, classes) {
  //   if (err) return next(err);
  //   res.json(classes);
  // });
});

// router.get('/seed', function(req, res) {
//   console.log('hey');
//   Student.find(function(err, students) {
//     if (err) return next(err);
//     console.log(students[0]._id);
//     var ids = students.map(function(student) {
//       return student._id;
//     });
//     Teacher.find(function(err, teachers) {
//       if (err) return next(err);
//       console.log(teachers[0]._id);
//       var teacher_ids = teachers.map(function(teacher) {
//         return teacher._id;
//       });

//       var newClass = new Class({
//         grade: '3',
//         name: 'B',
//         subject: 'science',
//         students: ids,
//         teachers: teacher_ids
//       });
//       newClass.save(function(err) {
//         console.log(newClass);
//         res.json(newClass);
//       });
//     });
//   });
// });

router.get('/:id', function(req, res) {
  Class.findById(req.params.id)
  .populate('students')
  .exec(function(err, students) {
    // console.log(students);
    res.json(students);
  });
});

var students = require('./students');

router.use('/:class_id/students', students);


module.exports = router;