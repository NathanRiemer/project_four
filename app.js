var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var session = require('express-session');
var bcrypt = require('bcrypt');
var MongoStore = require('connect-mongo')(session);

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs')

// db
var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/behave';
mongoose.connect(mongoUrl, function(err) {
  if (err) {
    console.log('Connection Error', err);
  } else {
    console.log('Connection Successful');
  }
});

var students = require('./routes/students');
var classes = require('./routes/classes');

app.get('/', function(req, res) {
  res.render('index');
});
app.use('/classes', classes);
app.use('/students', students);

app.listen(process.env.PORT || 3000);
