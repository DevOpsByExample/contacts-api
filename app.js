const express = require('express');
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/sequelize');
const logger = require('./util/logger');

sequelize.authenticate()
.then(() => {
  logger.log('Connection to DB established successfully');
}).catch(function(err) {
  logger.error('Failed to establish connection with DB', err);
});

const index = require('./routes/index');
const users = require('./routes/users');
const contacts = require('./routes/contacts');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

process.env.NODE_ENV === 'development' && app.use(morgan('dev'));
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'app.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', index);
app.use('/users', users);
app.use('/contacts', contacts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  logger.error(err);

  res.status(err.status || 500).json({message: err.message});
});

module.exports = app;
