var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var usersRouter = require('./routes/users');
var registerRouter = require('./routes/api/register');
var findRouter = require('./routes/api/find');
var findByIdRouter = require('./routes/api/findbyid');
var viewsRouter = require('./routes/api/views');
var voteRouter = require('./routes/api/vote');

require('dotenv').config()

var app = express();

// db
mongoose.connect("mongodb://"+process.env.COSMOSDB_HOST+":"+process.env.COSMOSDB_PORT+"/"+process.env.COSMOSDB_DBNAME+"?ssl=true&replicaSet=globaldb", {
  auth: {
    user: process.env.COSMOSDB_USER,
    password: process.env.COSMOSDB_PASSWORD
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: false
})
.then(() => console.log('Connection to CosmosDB successful'))
.catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API
app.use('/users', usersRouter)
app.use('/api/register', registerRouter)
app.use('/api/find', findRouter)
app.use('/api/findbyid', findByIdRouter)
app.use('/api/views', viewsRouter)
app.use('/api/vote', voteRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
