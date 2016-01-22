var mongoose = require('mongoose');
var Class = require('./class');

var TeacherSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: String,
  password_digest: String,
  email: String,
  classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class'}]
});

module.exports = mongoose.model('Teacher', TeacherSchema);