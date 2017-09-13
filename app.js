const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/sequelize');
const logger = require('./util/logger');

sequelize.authenticate()
.then(() => {
  logger.log('Connection to DB established successfully');
}).catch(err => {
  logger.error('Failed to establish connection with DB', err);
});

const index = require('./routes/index');
const contacts = require('./routes/contacts');

const app = express();

process.env.NODE_ENV === 'development' && app.use(morgan('dev'));
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'app.log'), {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', index);
app.use('/contacts', contacts);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  logger.error(err);

  res.status(err.status || 500).json({message: err.message});
});

module.exports = app;
