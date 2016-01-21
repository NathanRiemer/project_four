var mongoose = require('mongoose');
var Student = require('./student');

var ClassSchema = new mongoose.Schema({
  grade: String,
  name: String,
  subject: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student'}]
});

module.exports = mongoose.model('Class', ClassSchema);