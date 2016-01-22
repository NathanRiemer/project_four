var mongoose = require('mongoose');
var Student = require('./student');
var Teacher = require('./teacher');


var ClassSchema = new mongoose.Schema({
  grade: String,
  name: String,
  subject: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student'}],
  teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'}]

});

module.exports = mongoose.model('Class', ClassSchema);