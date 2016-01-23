var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/behave';
mongoose.connect(mongoUrl, function(err) {
  if (err) {
    console.log('Connection Error', err);
  } else {
    console.log('Connection Successful');
  }
});

// var Student = require('../models/student');
var Class = require('../models/class');
var Teacher = require('../models/teacher');

Teacher.findOne({username: 'philco'}, function(err, teacher) {
  Class.find(function(err, classes) {
    console.log(classes);
    var class_ids = classes.map(function(classObj) {
      return classObj._id;
    });
    teacher.classes = class_ids;
    teacher.save(function(err) {
      console.log(teacher);
    });
  });
});