var mongoose = require('mongoose');
var Student = require('./student');
var Class = require('./class');


var BehaviorRecordSchema = new mongoose.Schema({
  type: String,
  note_text: String,
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
}, 
  {
    timestamps: {}
  }
);

module.exports = mongoose.model('BehaviorRecord', BehaviorRecordSchema);