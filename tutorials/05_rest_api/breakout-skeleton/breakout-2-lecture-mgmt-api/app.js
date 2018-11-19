var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var lecturesRouter = require('./routes/lecture');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// TODO bonus task: create a middleware checking for a header "UserType". Only professors and tutors should be able to upload assignments


app.use('/lectures', lecturesRouter);

// catch 404
app.use(function(req, res, next) {
  res.status(404).send();
});

module.exports = app;
