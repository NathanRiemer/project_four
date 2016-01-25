var request = require('request');

var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/behave';
mongoose.connect(mongoUrl, function(err) {
  if (err) {
    console.log('Connection Error', err);
  } else {
    console.log('Connection Successful');
  }
});

var Student = require('../models/student');
var Class = require('../models/class');
var Teacher = require('../models/teacher');


var grades = ['Kindergarten', '1', '2', '3', '4', '5'];
var classNames = ['A', 'B'];
var classSubjects = ['Homeroom'];

var classArray = [];


grades.forEach(function(grade) {
  classNames.forEach(function(className) {
    classSubjects.forEach(function(classSubject) {
      var newClass = {
        grade: grade,
        name: className,
        subject: classSubject
      };
      classArray.push(newClass);
    });
  });
});



var teacherArray = [
  {
    first_name: 'Albus',
    last_name: 'Dumbledore',
    username: 'adumbledore',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'adumbledore@example.com'
  },
  {
    first_name: 'Minerva',
    last_name: 'McGonagall',
    username: 'mmcgonagall',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'mmcgonagall@example.com'
  },
  {
    first_name: 'Severus',
    last_name: 'Snape',
    username: 'ssnape',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'ssnape@example.com'
  },
  {
    first_name: 'Rubeus',
    last_name: 'Hagrid',
    username: 'rhagrid',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'rhagrid@example.com'
  },
  {
    first_name: 'Jessica',
    last_name: 'Day',
    username: 'jday',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'jday@example.com'
  },
  {
    first_name: 'George',
    last_name: 'Feeny',
    username: 'gfeeny',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'gfeeny@example.com'
  },
  {
    first_name: 'Cory',
    last_name: 'Matthews',
    username: 'cmatthews',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'cmatthews@example.com'
  },
  {
    first_name: 'Charles',
    last_name: 'Xavier',
    username: 'cxavier',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'cxavier@example.com'
  },
  {
    first_name: 'Valerie',
    last_name: 'Frizzle',
    username: 'vfrizzle',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'vfrizzle@example.com'
  },
  {
    first_name: 'Dewey',
    last_name: 'Finn',
    username: 'dfinn',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'dfinn@example.com'
  },
  {
    first_name: 'Lily',
    last_name: 'Aldrin',
    username: 'laldrin',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'laldrin@example.com'
  },
  {
    first_name: 'Walter',
    last_name: 'White',
    username: 'wwhite',
    password_digest: '$2a$08$Fut/VOvw5FvWYdEpWchedevviRTA.9p6SMw5JeagYWwRQkHzkEPIe',
    email: 'wwhite@example.com'
  }
];

var classModelArray = [];
classArray.forEach(function(classObj) {
  var newClass = new Class(classObj);
  classModelArray.push(newClass);
});

console.log(classModelArray.length);


var teacherModelArray = [];
var index = 0;
teacherArray.forEach(function(teacher) {
  var newTeacher = new Teacher(teacher);
  newTeacher.classes.push(classModelArray[index]._id);
  classModelArray[index++].teachers.push(newTeacher._id);
  // newTeacher.classes.push(classModelArray[index]._id);
  // classModelArray[index++].teachers.push(newTeacher._id);
  teacherModelArray.push(newTeacher);
  newTeacher.save();
});

// console.log(teacherModelArray);

// console.log(classModelArray);


// classModelArray.forEach(function(classModel) {
request.get('http://api.randomuser.me/?results=360&nat=us', function(error, htmlResponse, responseBody) {
  var responseBody = JSON.parse(responseBody);
  // console.log(responseBody.results);
  var results = responseBody.results;
  // var result = results.pop();
  // console.log(result.user);
  // console.log(results.length);
  classModelArray.forEach(function(classModel) {
    for (var i=0; i<30; i++) {
      var result = results.shift();
      var first = result.user.name.first[0].toUpperCase() + result.user.name.first.slice(1);
      var last = result.user.name.last[0].toUpperCase() + result.user.name.last.slice(1);
      var newStudent = new Student({
        first_name: first,
        last_name: last,
        num_positives: 0,
        num_negatives: 0
      });
      classModel.students.push(newStudent._id);
      newStudent.save();
      // console.log(newStudent);
    }
    classModel.save();
  });
  // console.log(classModelArray);

});


  // responseBody.results.forEach(function(result) {
  //   var first = result.user.name.first[0].toUpperCase() + result.user.name.first.slice(1);
  //   var last = result.user.name.last[0].toUpperCase() + result.user.name.last.slice(1);
  //   var newStudent = new Student({
  //     first_name: first,
  //     last_name: last,
  //     num_positives: 0,
  //     num_negatives: 0
  //   });
  //   console.log(newStudent);
  //   classModel.students.push(newStudent._id);
  // });
// });

// console.log(classModelArray);
// Class.find(function(err, classes) {
//   console.log(classes);
// });

// request.get('http://api.randomuser.me/?results=360&nat=us', function(error, htmlResponse, responseBody) {
//   var responseBody = JSON.parse(responseBody);
//   responseBody.results.forEach(function(result) {
//     var first = result.user.name.first[0].toUpperCase() + result.user.name.first.slice(1);
//     var last = result.user.name.last[0].toUpperCase() + result.user.name.last.slice(1);
//   });
// });


// Teacher.findOne({username: 'philco'}, function(err, teacher) {
//   Class.find(function(err, classes) {
//     console.log(classes);
//     var class_ids = classes.map(function(classObj) {
//       return classObj._id;
//     });
//     teacher.classes = class_ids;
//     teacher.save(function(err) {
//       console.log(teacher);
//     });
//   });
// });