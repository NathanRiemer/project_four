var mongoose = require('mongoose');
var Student = require('./student');
var Class = require('./class');
var Teacher = require('./teacher');


var BehaviorRecordSchema = new mongoose.Schema({
  type: String,
  note_text: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
}, 
  {
    timestamps: {}
  }
);

module.exports = mongoose.model('BehaviorRecord', BehaviorRecordSchema);