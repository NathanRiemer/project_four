var mongoose = require('mongoose');
var BehaviorRecord = require('./behavior_record');


var StudentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String
  // num_positives: Number,
  // num_negatives: Number
});

StudentSchema.methods.getBRCount = function(callback, options) {
  options.student = this._id;
  return BehaviorRecord.count(options, callback);
};

module.exports = mongoose.model('Student', StudentSchema);