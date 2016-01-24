var express = require('express');
var router = express.Router({mergeParams: true});

var mongoose = require('mongoose');
var Student = require('../models/student');
var Class = require('../models/class');
var BehaviorRecord = require('../models/behavior_record');

router.get('/', function(req, res) {
  // console.log(req.params);
  // BehaviorRecord.find(function(err, behaviors) {
  //   if (err) return next(err);
  //   res.json(behaviors);
  // });
  //Count by day by type for all records
  BehaviorRecord.aggregate([
    // {$match: {$and: [{created_date: {$gte: start_date}}, {created_date: {$lte: end_date}}]}},
    {$group: {
        _id: {
            year: {$year: "$createdAt"},
            month: {$month: "$createdAt"},
            day: {$dayOfMonth: "$createdAt"}
            // type: "$type"
        },
        count: {$sum: 1}
    }},
    {$project: {
        date: {
                year: "$_id.year",
                month:"$_id.month",
                day:"$_id.day"
        },
        count: 1,
        // type: "$_id.type",
        _id: 0
    }},
    {$sort: {"date": 1} }

    ], function(err, results) {
      res.json(results);
    });



});

module.exports = router;