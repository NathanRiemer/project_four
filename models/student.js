var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  num_positives: Number,
  num_negatives: Number
});

module.exports = mongoose.model('Student', StudentSchema);